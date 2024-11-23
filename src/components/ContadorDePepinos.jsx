import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContadorDePepinos = ({ count }) => {
  const countRef = useRef(null);

  useEffect(() => {
    if (countRef.current) {
      gsap.fromTo(
        countRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 }
      );
    }
  }, [count]);

  return (
    <div className="flex items-center space-x-2">
      <div ref={countRef} className="text-2xl font-bold">
        {count}
      </div>
      <span className="text-2xl">🥒</span>
    </div>
  );
};

export default ContadorDePepinos;
