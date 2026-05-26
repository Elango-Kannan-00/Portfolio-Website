import React from "react";

const VARIANT_CLASS = {
  pink: "pixel-card--pink",
  mint: "pixel-card--mint",
};

export default function PixelCard({
  variant = "pink",
  className = "",
  children,
}) {
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.pink;
  return (
    <div className={`pixel-card ${variantClass} ${className}`.trim()}>
      <div className="pixel-card__content">{children}</div>
    </div>
  );
}

