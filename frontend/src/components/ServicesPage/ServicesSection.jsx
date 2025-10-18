// src/components/Services/ServicesSection.jsx
import React from "react";
import { groups } from "./ServicesData";
import { GroupSection } from "./GroupSection";

export const ServicesSection = () => (
  <div id="services">
    {groups.map((g) => (
      <GroupSection key={g.heading} g={g} />
    ))}
  </div>
);