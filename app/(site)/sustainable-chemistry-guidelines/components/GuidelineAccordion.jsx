"use client";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

export default function GuidelineAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="guideline-container">
      <div className="guideline-list">
        {items.map((item, index) => (
          <div
            key={index}
            className="guideline-item"
            onClick={() => toggle(index)}
          >
            <div className="guideline-header">
              <span>{`${index + 1}. ${item.title}`}</span>
              <DownOutlined
                className={`icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>

            {activeIndex === index && (
              <div className="guideline-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}