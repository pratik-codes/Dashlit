import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Company",
    links: [
      // { title: "About us", href: "#" },
      // { title: "Blog", href: "#" },
      { title: "Careers", href: "mailto:pratiktiwari1212@gmail.com" },
      // { title: "Customers", href: "#" },
      // { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "https://github.com/pratik-codes/Dashlit" },
      { title: "Contact", href: "mailto:pratiktiwari1212@gmail.com" },
      // { title: "DPA", href: "#" },
      // { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "GitHub", href: "https://github.com/pratik-codes/Dashlit" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
            <img
              className="mr-4 w-10 h-10 drop-shadow-2xl shadow-2xl rounded-2xl"
              src={"/logo-white.png"}
            />
            Dashlit - the modern browser dashboard
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <Link href="https://twitter.com/DashlitHQ">
              <TwitterIcon />
            </Link>
            <Link href="https://github.com/pratik-codes/Dashlit">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
