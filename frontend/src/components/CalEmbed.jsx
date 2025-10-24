// src/components/CalEmbed.jsx
import React from "react";
import Cal from "@calcom/embed-react";

export default function CalEmbed({ theme = "dark", height = 720 }) {
  return (
    <div className="w-full" style={{ minHeight: height }}>
      <Cal
        calLink="akash-agrahari-746/15min"   
        style={{ width: "100%", height: "100%" }}
        config={{ theme }}              
      />
    </div>
  );
}
