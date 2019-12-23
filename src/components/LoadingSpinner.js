/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";

const LoadingSpinner = () => {

  const spin = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "50%": { transform: "rotate(180deg)" },
    "100%": { transform: "rotate(360deg)" }
  });

  return (
    <div css={{
      width: 100,
      height: 100,
      display: "inline-block",
      overflow: "hidden",
      background: "#fff",
    }}>
      <div css={{
          width: "100%",
          height: "100%",
          position: "relative",
          transform: "translateZ(0) scale(1)",
          backfaceVisibility: "hidden",
          transformOrigin: "0 0",
      }}>
        <div css={{
            position: "absolute",
            animation: `${spin} 1s linear infinite`,
            width: 80,
            height: 80,
            top: 10,
            left: 10,
            borderRadius: "50%",
            boxShadow: "0 2px 0 0 #8cd0e5",
            transformOrigin: "40px 41px",
            boxSizing: "content-box",
        }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;