import { ImageResponse } from "next/og";

export const alt =
  "Nature Smith — distribuidora de productos naturales en Colombia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050505",
          color: "#F5F1EA",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.4em",
            color: "#CBBF9A",
            textTransform: "uppercase",
          }}
        >
          Nature Smith
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Productos naturales. Distribución real. Operación lista para escalar.
        </div>
        <div style={{ marginTop: 40, fontSize: 26, color: "#8C8C84" }}>
          Mayoristas · Ecommerce · Dropshipping · Maquilas — Colombia
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 80,
            right: 80,
            height: 2,
            background: "#6F8065",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
