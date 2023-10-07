"use client";

import mixpanel from "mixpanel-browser";
import Link from "next/link";
import { useEffect } from "react";

import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { TwitterIcon } from "./icons/twitter";
import Icons from "./icons/Icons";

export const Header = () => {
  useEffect(() => {
    mixpanel.init("8b643d48491a13461e65525a8a2829fe");
    mixpanel.track("page-load");
  }, []);

  return (
    <header className="fixed w-full top-0 z-10 mx-auto p-2 w-12/12 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height justify-between">
        <Link className="flex items-center text-xl font-bold" href="/">
          <img
            className="mr-4 w-10 h-10 drop-shadow-2xl shadow-2xl rounded-2xl"
            src={"/logo-black.png"}
          />
          Dashlit
        </Link>

        <div className="ml-auto flex h-full items-center">
         
          <a
            href="https://discord.gg/7am7ZRvv"
            target="_blank"
            className="mr-3 flex rounded-lg py-2 px-2 hover:bg-transparent-white"
          >
            <Icons name="discord" />
          </a>
          <a
            href="https://twitter.com/DashlitHQ"
            target="_blank"
            className="mr-3 rounded-lg p-2 hover:bg-transparent-white"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/pratik-codes/Dashlit"
            target="_blank"
            className="mr-3 flex rounded-lg py-2 px-2 hover:bg-transparent-white"
          >
            <GithubIcon />
            <span className="ml-2 text-xs font-medium">Star on Github</span>
          </a>
        </div>
      </Container>
    </header>
  );
};
