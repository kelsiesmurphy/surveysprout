import Image from "next/image";
import React from "react";
import { SocialProofSection } from "~/src/content/landing-page";
import { motion, useReducedMotion } from "motion/react";

export default function SocialProof({
  content,
}: {
  content: SocialProofSection;
}) {
  // Check if the user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="container flex flex-col gap-6 text-center items-center py-16 md:py-24">
      <h2 className="text-muted-foreground md:text-xl">{content.heading}</h2>
      <div className="relative overflow-hidden w-full">
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-4 sm:before:w-10 before:bg-gradient-to-r before:from-background before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-4 sm:after:w-10 after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']">
          {prefersReducedMotion ? (
            <div className="flex flex-wrap gap-4 py-6 justify-center sm:gap-6 sm:py-8">
              {content.logos.map((logo, index) => (
                <Image
                  className="h-10 w-auto flex-none sm:h-12"
                  src={logo.image}
                  key={index}
                  width="0"
                  height={48}
                  alt={logo.altText}
                />
              ))}
            </div>
          ) : (
            <motion.div
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
              initial={{ translateX: "-50%" }}
              animate={{ translateX: 0 }}
              className="flex flex-none gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16 py-6 sm:py-8"
            >
              {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                  {content.logos.map((logo, index) => (
                    <Image
                      className="h-10 w-auto flex-none sm:h-12"
                      src={logo.image}
                      key={index}
                      width="0"
                      height={48}
                      alt={logo.altText}
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
