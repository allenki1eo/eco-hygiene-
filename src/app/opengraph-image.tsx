import { ImageResponse } from "next/og";
import { contact, site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card, generated at build time from the brand palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#05090a",
          backgroundImage:
            "radial-gradient(60% 60% at 10% 0%, rgba(17,155,102,0.42) 0%, rgba(5,9,10,0) 60%), radial-gradient(55% 60% at 95% 25%, rgba(15,119,176,0.38) 0%, rgba(5,9,10,0) 62%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundImage: "linear-gradient(135deg, #2fb87f, #2f97cf)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>ECOHYGIENE</span>
            <span style={{ fontSize: 18, color: "#647b7d", letterSpacing: 4 }}>COMPANY LIMITED</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            Hygiene standards your production line can be audited against.
          </span>
          <span style={{ fontSize: 26, color: "#97acad" }}>
            Factory cleaning · Pest control · Mixing units · Waste water stewardship
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
            fontSize: 22,
            color: "#97acad",
          }}
        >
          <span>
            {contact.address.city}, {contact.address.country}
          </span>
          <span style={{ color: "#66d2a3" }}>{contact.phone} · {contact.hoursShort}</span>
        </div>
      </div>
    ),
    size,
  );
}
