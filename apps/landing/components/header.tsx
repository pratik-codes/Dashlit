"use client";

import mixpanel from "mixpanel-browser";
import Link from "next/link";
import { useEffect } from "react";

import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { TwitterIcon } from "./icons/twitter";

export const Header = () => {
  useEffect(() => {
    mixpanel.init("8b643d48491a13461e65525a8a2829fe");
    mixpanel.track("page-load");
  }, []);

  return (
    <header className="fixed top-0 z-10 mx-auto ml-4 mt-4 w-11/12 rounded-[16px] border border-transparent-white backdrop-blur-[12px] md:right-1/4 md:w-full lg:right-1/4 lg:w-6/12">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md font-medium" href="/">
          <img className="mr-2" src={"/logo-navy.png"} />
          Dashlit
        </Link>

        <div className="ml-auto flex h-full items-center">
          <a
            href="https://twitter.com/DashlitHQ"
            target="_blank"
            className="mr-3 rounded-lg p-1 hover:bg-transparent-white"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/pratik-codes/Dashlit"
            target="_blank"
            className="mr-3 flex rounded-lg py-1 px-2 hover:bg-transparent-white"
          >
            <GithubIcon />
            <span className="ml-2 text-xs font-medium">Star on Github</span>
          </a>
        </div>
      </Container>
    </header>
  );
};
