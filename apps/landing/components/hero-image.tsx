"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { Button, IconWrapper } from "./button";

import { ChevronIcon } from "./icons/chevron";
import Icons from "./icons/Icons";

export const GlowClass =
     "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:animate-image-glow before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]";

export const HeroImage = () => {
     const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

     return (
          <>
               <div
                    className={classNames(
                         "z-10 mx-auto mt-[6rem] translate-y-[-1rem] animate-fade-in rounded-[24px] p-0 opacity-0 transition-opacity delay-[680ms] [--animation-delay:600ms]",
                    )}
                    ref={ref}
               >
                    <div className="flex justify-end w-9/12 mx-auto mb-2">
                         <Button
                              href="https://demodashlit.byarclabs.com/"
                              target="__blank"
                              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mr-2"
                              variant="secondary"
                              size="medium"
                         >
                              demo.dashlit.com
                              <IconWrapper>
                                   <ChevronIcon />
                              </IconWrapper>
                         </Button>
                    </div>

                    <div className="shadow-lg drop-shadow-2xl">
                         <div className="xs:block sm:block md:hidden">
                              <img
                                   className={classNames(
                                        "xs:block z-10 mx-auto mt-[6rem] translate-y-[-1rem] animate-fade-in rounded-[12px] border-4 border-grey bg-hero-glow p-0 opacity-0 transition-opacity delay-[680ms] [--animation-delay:600ms] sm:block",
                                        GlowClass,
                                   )}
                                   src="/img/homescreen-app.png"
                                   alt="Hero image"
                              />
                         </div>
                         <iframe
                              className={classNames(
                                   GlowClass,
                                   "hidden w-9/12  mx-auto rounded-[15px] border-4 border-primary-text md:block xl:block 2xl:block",
                              )}
                              width={"100%"}
                              height={860}
                              src="https://demo.dashlit.com/"
                         />
                    </div>
               </div>
          </>
     );
};

export default HeroImage;
