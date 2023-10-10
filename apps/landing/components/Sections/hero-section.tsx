"use client";

import { Button, buttonClasses, IconWrapper } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { ChevronIcon } from "../icons/chevron";
import { GithubIcon } from "../icons/github";
import Icons from "../icons/Icons";

const HeroSection = () => {
  return (
    <Hero>
      <span
        className={buttonClasses({
          variant: "secondary",
          size: "medium",
        })}
      >
        Lifetime free for all beta users. Get Dashlit now!
      </span>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in  pb-6 opacity-0 [--animation-delay:200ms]">
        An open source productivity extension for your browser.
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Imagine a browsing experience where seamless organization meets enhanced
        productivity – <b>that's Dashlit's promise.</b>
        <br /> Dashlit makes yout online journey becomes a harmonious symphony
        of efficiency and order like never before
      </HeroSubtitle>
      <div className="mx-auto flex w-full justify-center">
        <div>
          <Button
            target={"_blank"}
            variant={"secondary"}
            size={"large"}
            className="mr-2 translate-y-[-1rem] animate-fade-in p-2 opacity-0 [--animation-delay:600ms]"
            href="https://github.com/pratik-codes/Dashlit"
          >
            <GithubIcon />
            <span className="ml-2">Github</span>
          </Button>
        </div>

        <Button
          href="https://chrome.google.com/webstore/detail/dashlit/modghppmaijnnbhleacfecnbgcjhkcnk"
          target="__blank"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          variant="primary"
          size="large"
        >
          Get Dashlit
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
      </div>
    </Hero>
  );
};

export default HeroSection;
