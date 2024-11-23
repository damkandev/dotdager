import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContadorDePepinos = ({ count }) => {
  const countRef = useRef(null);
<<<<<<< HEAD
  const prevCountRef = useRef(count);
=======
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c

  useEffect(() => {
    if (countRef.current) {
      gsap.fromTo(
        countRef.current,
<<<<<<< HEAD
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    }
    prevCountRef.current = count;
=======
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 }
      );
    }
>>>>>>> 706fd18c4f9dd8a0810ab1606135155ef907128c
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
