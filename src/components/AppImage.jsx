import React from "react";

function Image({ src, alt = "Image Name", className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      onError={(e) => {
        const target = e.currentTarget;
        target.src = "/assets/images/no_image.png";
      }}
      {...props}
    />
  );
}

export default Image;
