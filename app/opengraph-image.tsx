import { ImageResponse } from "next/og";

export const alt = "Athar Ramzan | Senior Banking Professional, Trainer & Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#FFFFFF,#F4F9F8 55%,#EEF9F7)", color: "#0B1B1A" }}>
        <div style={{ width: 80, height: 6, background: "#22968B", marginBottom: 36, borderRadius: 3 }} />
        <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 1 }}>Athar Ramzan</div>
        <div style={{ fontSize: 38, color: "#176B63", marginTop: 28 }}>Senior Banking Professional</div>
        <div style={{ fontSize: 30, color: "#5C6F6D", marginTop: 12 }}>Banking Trainer · Credit & Trade Finance · Mentor · Speaker</div>
      </div>
    ),
    size
  );
}
