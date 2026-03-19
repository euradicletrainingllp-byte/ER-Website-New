import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function FlowButton({
  text,
  icon,
  className,
  id,
  centered = false,
  arrow = true,
}) {
  const btnRef = useRef(null);
  const fillRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    const btn = btnRef.current;
    const fill = fillRef.current;
    const circle = circleRef.current;
    const arrow = arrowRef.current;

    const enter = () => {
      gsap.to(fill, {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.45,
        ease: "power3.inOut",
      });

      gsap.to(circle, {
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.to(arrow, {
        rotate: 90,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(btn, {
        borderColor: "var(--color-brand-500)",
        color: "var(--color-primary-navy)",
        duration: 0.3,
      });
    };

    const leave = () => {
      gsap.to(fill, {
        scaleX: 1,
        transformOrigin: "right center",
        duration: 0.45,
        ease: "power3.inOut",
      });

      gsap.to(circle, {
        scale: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });

      gsap.to(arrow, {
        rotate: 0,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(btn, {
        borderColor: "var(--color-brand-600)",
        color: "var(--color-bg-white)",
        duration: 0.3,
      });
    };

    btn.addEventListener("mouseenter", enter);
    btn.addEventListener("mouseleave", leave);

    return () => {
      btn.removeEventListener("mouseenter", enter);
      btn.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className={`${className ?? ""} ${
        centered ? "mx-auto block" : ""
      } cta-wrapper`}
    >
      <button ref={btnRef} className="cta-button" type="submit">
        <span
          ref={fillRef}
          className="cta-fill"
          style={{ transform: "scaleX(1)" }}
        />

        <span className="cta-content">
          {icon && <span className="text-lg">{icon}</span>}
          {text}
        </span>

        {arrow && (
          <span className="cta-arrow">
            <span ref={circleRef} className="cta-circle" />
            <FiArrowRight ref={arrowRef} className="cta-arrow-icon" />
          </span>
        )}
      </button>
    </div>
  );
}
