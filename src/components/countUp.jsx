import React, { useRef, useEffect, useState } from "react";

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

export default function CountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  format = true,
  className = "",
  onComplete,
}) {
  const [display, setDisplay] = useState(start);
  const rafRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, start, duration, onComplete]);

  function startAnimation() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current); // cancel any ongoing animation
    setDisplay(start); // reset to start

    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutQuad(progress);
      const current = start + (end - start) * eased;

      setDisplay(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(end);
        if (typeof onComplete === "function") onComplete();
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }

  const formatted = format
    ? display.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : display.toFixed(decimals);

  return (
    <span ref={spanRef} className={className}>
      {formatted}
    </span>
  );
}
