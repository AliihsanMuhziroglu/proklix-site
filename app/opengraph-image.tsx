import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Proklix — CRM, workflow и Telegram-интеграции для бизнеса";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1f44 0%, #102a5c 55%, #1d4ed8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a1f44",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ fontSize: "44px", fontWeight: 800, letterSpacing: "-1px" }}>
            Proklix
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            CRM, workflow и Telegram-интеграции для вашего бизнеса
          </div>
          <div style={{ fontSize: "30px", color: "#bcd0ff", fontWeight: 500 }}>
            Заявки · Согласования · Автоматизация · Узбекистан
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            color: "#9db8ff",
            fontWeight: 600,
          }}
        >
          proklix.com
        </div>
      </div>
    ),
    { ...size },
  );
}
