"use client";

import React, { useState, useRef } from "react";
import FaqItem from "./FaqItem";

export default function FaqList({ items }) {
  const [openId, setOpenId] = useState(1); // Row 01 open by default
  const headerRefs = useRef([]);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (index + 1) % items.length;
      headerRefs.current[nextIdx]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (index - 1 + items.length) % items.length;
      headerRefs.current[prevIdx]?.focus();
    }
  };

  return (
    <div
      className="w-full max-w-[874px] lg:max-w-[calc(var(--su,1px)*874)] mx-auto flex flex-col"
      style={{
        gap: "clamp(10px, 1.2vw, calc(var(--su, 1px) * 6))",
      }}
    >
      {items.map((item, idx) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          headerRef={(el) => (headerRefs.current[idx] = el)}
        />
      ))}
    </div>
  );
}
