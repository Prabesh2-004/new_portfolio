"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

/** Copies `value` to the clipboard and announces the result to screen readers. */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="inline-flex h-14 items-center gap-2 rounded-full border border-line-strong bg-surface px-5 text-[15px] transition-colors hover:border-[#3a3a3f] hover:bg-surface-raised"
    >
      <Icon name={copied ? "check" : "copy"} size={16} className={copied ? "text-accent" : undefined} />
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
