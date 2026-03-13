"use client";

import { useEffect, useState } from "react";

export default function SupporterCounter({ initialCount = 0 }: { initialCount?: number }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch("/api/ki-ausweis/count");
        if (res.ok) {
          const data = await res.json();
          setCount(data.count);
        }
      } catch {
        // silently fail
      }
    };

    poll();
    const interval = setInterval(poll, 30_000);
    return () => clearInterval(interval);
  }, []);

  const formatted = count.toLocaleString("de-DE");

  return (
    <div className="inline-flex items-center gap-3 bg-kifd-dark/5 border border-kifd-dark/10 rounded-full px-6 py-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kifd-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-kifd-primary" />
      </span>
      <span className="text-sm text-kifd-text-muted">
        Bislang von{" "}
        <span className="font-bold text-kifd-primary text-lg">{formatted}</span>{" "}
        KIs in Deutschland unterstützt
      </span>
    </div>
  );
}
