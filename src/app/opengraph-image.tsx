import { ImageResponse } from "next/og";
import { currentJob, profile, siteHost } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card for social shares, generated at build time from src/data.
export default function OpengraphImage() {
  const accent = "#7DD3A8";
  const stack = Object.values(profile.stack)
    .flat()
    .filter((v, i, a) => a.indexOf(v) === i)
    .slice(0, 4);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#080808",
          backgroundImage: `radial-gradient(circle at 80% 20%, rgba(125,211,168,0.16), transparent 55%)`,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#ffffff",
              color: "#080808",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#A1A1AA" }}>
            {currentJob ? `${currentJob.role} at ${currentJob.company}` : profile.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#D4D4D8", letterSpacing: -1 }}>
            {profile.headline.before}
            <span style={{ color: accent, margin: "0 10px" }}>{profile.headline.highlight}</span>
            {profile.headline.after.trim()}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8B8B94" }}>
          <div style={{ display: "flex" }}>{stack.join("  ·  ")}</div>
          <div style={{ display: "flex", color: accent }}>{siteHost}</div>
        </div>
      </div>
    ),
    size,
  );
}
