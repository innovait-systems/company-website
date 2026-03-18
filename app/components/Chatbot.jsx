"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const initialAssistantMessage =
  "Hi, I’m the Innovait assistant. I can answer questions about our services and help you see if we’re a good fit for your project. What are you thinking of building?";

function buildConversationSummary(messages) {
  return messages
    .map((m) => `${m.role === "assistant" ? "Innovait" : "Visitor"}: ${m.content}`)
    .join("\n");
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [leadError, setLeadError] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: initialAssistantMessage },
  ]);
  const [leadSent, setLeadSent] = useState(false);
  const [leadSending, setLeadSending] = useState(false);
  const messagesContainerRef = useRef(null);

  const maybeExtractAndSendLead = async (allMessages) => {
    try {
      setLeadError(null);

      if (leadSent || leadSending) {
        return;
      }

      const leadRes = await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: allMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!leadRes.ok) return;

      const data = await leadRes.json();
      const enriched = {
        name: data.name || "",
        email: data.email || "",
        summary: data.summary || "",
      };
      // setLead(enriched);

      if (!enriched.name || !enriched.email || !enriched.summary) {
        return;
      }

      // We have enough to send a lead email
      setLeadSending(true);

      let recaptchaToken = null;
      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined" && window.grecaptcha) {
        recaptchaToken = await new Promise((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(RECAPTCHA_SITE_KEY, { action: "chat_lead" })
              .then(resolve)
              .catch(reject);
          });
        });
      }

      const conversationSummary = buildConversationSummary(allMessages);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enriched.name,
          email: enriched.email,
          company: "",
          type: "Chatbot Lead",
          budget: "",
          timeline: "",
          goals: "",
          hearAbout: "Website chatbot",
          message: `${enriched.summary}\n\n---\nConversation transcript:\n${conversationSummary}`,
          recaptchaToken,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Unable to send your details right now.");
      }

      setLeadSent(true);

      // Let the user know their details were captured
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "assistant",
          content:
            "Thanks for sharing those details. I’ve passed this conversation to our team, and someone will get back to you within 24 hours.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setLeadError(err.message || "Unable to send your details right now.");
    } finally {
      setLeadSending(false);
    }
  };

  // Auto-open within ~first 5 seconds on each page load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      setOpen(true);
      window.dispatchEvent(new CustomEvent("chatbot:open"));
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const canSend = useMemo(
    () => input.trim().length > 0 && !loading,
    [input, loading]
  );

  // Auto-scroll messages to bottom whenever they change
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!canSend) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to reach the assistant right now.");
      }

      const data = await res.json();
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply || "I’m here if you’d like to ask anything about Innovait.",
      };
      const updatedMessages = [...nextMessages, assistantMessage];
      setMessages(updatedMessages);

      // Try to infer lead details from the full conversation and send when complete
      await maybeExtractAndSendLead(updatedMessages);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          type="button"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors"
          onClick={() => {
            setOpen(true);
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("chatbot:open"));
            }
          }}
          aria-label="Open Innovait assistant"
        >
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-(--accent) text-white hover:bg-(--accent-strong)">
            <MessageCircle size={22} />
          </div>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm rounded-xl bg-surface-elevated border border-subtle shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-subtle bg-surface-muted">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-(--accent-secondary) text-(--brand-primary)">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs font-body uppercase tracking-[0.2em] text-gold">
                  Innovait Assistant
                </p>
                <p className="text-[11px] text-subtle font-body">
                  Ask about projects, services & faq
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("chatbot:close"));
                }
              }}
              className="text-subtle hover:text-gold transition-colors"
              aria-label="Close assistant"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            className="max-h-80 min-h-[220px] overflow-y-auto px-4 py-3 space-y-3 text-sm font-body text-primary"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`rounded-lg px-3 py-2 max-w-[85%] whitespace-pre-wrap leading-relaxed ${m.role === "assistant"
                    ? "bg-surface-muted border border-subtle text-primary"
                    : "bg-gold text-navy"
                    }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {error && (
              <p className="text-xs text-red-400 text-left">
                {error}
              </p>
            )}
            {leadError && (
              <p className="text-xs text-amber-300 text-left">
                {leadError}
              </p>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-subtle bg-surface-muted flex items-center gap-2 px-3 py-2">
            <input
              type="text"
              placeholder="Ask about services, fit, timelines..."
              className="flex-1 bg-transparent text-xs text-primary placeholder:text-subtle font-body focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!canSend}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-(--accent) text-white disabled:opacity-60"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

