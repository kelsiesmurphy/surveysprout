import { useRef, useEffect } from "react";

function useLenis() {
  const lenisRef = useRef<any | null>(null);

  useEffect(() => {
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis();
      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const frameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frameId);
        lenis.destroy();
      };
    });
  }, []);

  return lenisRef;
}

export default useLenis;
