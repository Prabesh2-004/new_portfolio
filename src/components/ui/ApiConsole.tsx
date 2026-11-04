type JsonValue = string | string[];

function formatValue(value: JsonValue) {
  return Array.isArray(value)
    ? `[${value.map((v) => JSON.stringify(v)).join(", ")}]`
    : JSON.stringify(value);
}

/**
 * The hero's signature card: profile data rendered as an API response.
 * Purely presentational — the caller passes data derived from src/data.
 */
export default function ApiConsole({
  method = "GET",
  path,
  status = "200 OK",
  body,
  caption,
}: {
  method?: string;
  path: string;
  status?: string;
  body: Record<string, JsonValue | undefined>;
  caption?: string;
}) {
  const entries = Object.entries(body).filter((entry): entry is [string, JsonValue] => {
    const v = entry[1];
    return Array.isArray(v) ? v.length > 0 : Boolean(v);
  });
  const lines = [
    { key: "", value: "", punct: "{" },
    ...entries.map(([key, value], i) => ({
      key: `  "${key}": `,
      value: formatValue(value),
      punct: i < entries.length - 1 ? "," : "",
    })),
    { key: "", value: "", punct: "}" },
  ];

  return (
    <figure className="m-0 min-w-0 overflow-hidden rounded-[18px] border border-[#242424] bg-code shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3 py-3 sm:px-4">
        <span className="hidden gap-1.5 sm:inline-flex" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="flex min-w-0 grow items-center gap-2.5 rounded-lg border border-[#1c1c1c] bg-[#0a0a0a] px-3 py-1.5 font-mono text-xs">
          <span className="font-medium text-accent">{method}</span>
          <span className="truncate text-body">{path}</span>
        </span>
        <span className="shrink-0 font-mono text-xs text-accent">{status}</span>
      </div>
      <pre className="m-0 overflow-x-auto py-5 pr-4 font-mono text-[12px] leading-[1.75] text-body sm:text-[13px] xl:text-sm">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="flex">
              <span className="w-9 shrink-0 pr-4 text-right text-[#3f3f46] select-none sm:w-11" aria-hidden="true">
                {i + 1}
              </span>
              <span className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere] sm:whitespace-pre">
                <span className="text-subtle">{line.key}</span>
                <span className="text-accent">{line.value}</span>
                <span className="text-[#71717a]">{line.punct}</span>
              </span>
            </span>
          ))}
        </code>
      </pre>
      {caption ? (
        <figcaption className="flex justify-between gap-3 border-t border-line px-4 py-3 font-mono text-xs text-subtle">
          <span>application/json</span>
          <span className="truncate">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
