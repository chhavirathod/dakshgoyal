import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const radius = 17.5; // Half of cursor width (35px / 2)

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });

      // Calculate position on circumference
      angleRef.current += 0.05; // Rotation speed
      const offsetX = Math.cos(angleRef.current) * radius;
      const offsetY = Math.sin(angleRef.current) * radius;

      gsap.to(follower, {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
