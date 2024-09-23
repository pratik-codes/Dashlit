import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import BookmarkIcons from "./BookmarkIcons";
import { LinkClickHandler } from "@/utils/helpers";
import EditDeleteLinkDialog from "./EditDeleteLinkDialog";
import { Links } from '../Links/links-dropdown';

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
  const [currentLinks, setCurrentLinks] = useState<LinkItem[]>(Links);

  React.useEffect(() => {
    setCurrentLinks(links);
  }, [links]);

  const filteredLinks = currentLinks.filter((link) =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDialog = (link: LinkItem) => {
    setSelectedLink(link);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedLink(null);
  };

  const handleSaveLink = (updatedLink: LinkItem) => {
    const updatedLinks = currentLinks.map((link) =>
      link.title === updatedLink.title ? updatedLink : link
    );
    setCurrentLinks(updatedLinks);
  };

  const handleDeleteLink = (title: string, urls: string[]) => {
    const filteredLinks = currentLinks.filter((link) => {
      if (link.title === title) {
        if (Array.isArray(link.url)) {
          return JSON.stringify(link.url) !== JSON.stringify(urls);
        }
        return link.url !== urls[0]; 
      }
      return true;
    });
    setCurrentLinks(filteredLinks);
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
          onSave={handleSaveLink}
          onDelete={handleDeleteLink}
        />
      )}
    </div>
  );
};

export default LinkComponent;
