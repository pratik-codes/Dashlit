import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import BookmarkIcons from "./BookmarkIcons";
import { LinkClickHandler } from "@/utils/helpers";
import EditDeleteLinkDialog from "./EditDeleteLinkDialog";

interface LinkItem {
  title: string;
  url: string | string[];
  type: string;
}

interface LinkComponentProps {
  links: LinkItem[];
  searchTerm: string;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ links, searchTerm }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkItem | null>(null);

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDialog = (link: LinkItem) => {
    setSelectedLink(link);
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedLink(null);
  };

  return (
    <div className="space-y-2">
      {filteredLinks.length > 0 ? (
        filteredLinks.map((link, index) => {
          const linkUrl = Array.isArray(link.url) ? link.url : [link.url];

          return (
            <DropdownMenuItem
              key={index}
              className="py-2 rounded-lg hover:rounded-lg group relative"
              onClick={() => LinkClickHandler(link.type, linkUrl)}
            >
              <BookmarkIcons url={linkUrl[0]} type={link.type} />
              <span className="font-medium">
                {link.title.length > 30
                  ? `${link.title.substring(0, 30)}...`
                  : link.title}
              </span>
              <button
                className="hidden absolute right-2 bottom-2 text-3xl text-gray-500 group-hover:block focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  openDialog(link);
                }}
              >
                ...
              </button>
            </DropdownMenuItem>
          );
        })
      ) : (
        <p>No links available</p>
      )}
      {isDialogOpen && selectedLink && (
        <EditDeleteLinkDialog
          isOpen={isDialogOpen}
          closeModal={closeDialog}
          link={selectedLink}
        />
      )}
    </div>
  );
};

export default LinkComponent;
