"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface ProductTabsProps {
  tabs: Tab[];
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-white/[0.06]">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-5 py-3 text-sm font-medium transition-colors relative ${
              activeTab === i
                ? "text-gold"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {tab.label}
            {activeTab === i && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-5 text-sm text-white/50 leading-relaxed">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
