import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";
import BookmarkIcons from "./BookmarkIcons";

interface LinkItem {
  title: string;
  url: string | string[];
  type: string;
}

interface LinkComponentProps {
  links: LinkItem[];
}

const LinkComponent: React.FC<LinkComponentProps> = ({ links }) => {
  return (
    <div className="space-y-2">
      {links.map((link, index) => (
        <DropdownMenuItem
          key={index}
          className="py-2 rounded-lg hover:rounded-lg"
        >
          <BookmarkIcons url={link.url} type={link.type} />
          <a
            target={"__blank"}
            href={Array.isArray(link.url) ? link.url[0] : link.url}
            className="font-medium"
          >
            {link.title.length > 30
              ? `${link.title.substring(0, 30)}...`
              : link.title}
          </a>
        </DropdownMenuItem>
      ))}
    </div>
  );
};

export default LinkComponent;
