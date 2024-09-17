import React, { useState } from "react";
import { Link } from "lucide-react";
import SearchLinks from "./SearchLinks";
import LinkComponent from "./LinkComponent";
import AddNewLinkModal from "./AddNewLinkDialog";
import { Button } from "@/components/ui/button";
import { LinksDropDown } from "./links-dropdown";

const Links: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <LinksDropDown />
    </div>
  );
};

export default Links;
// <Button
//   onClick={toggleDrawer}
//   onBlur={() => setIsOpen(false)}
//   className="absolute group top-0 left-0 m-2 rounded-xl bg-transparent"
// >
//   <Link size={18} />
//   <span className="hidden ml-2 group-hover:inline group-focus:inline text-md font-bold">
//     Links
//   </span>
// </Button>

// {isOpen && (
//   <div
//     className="absolute top-full left-0 w-80 text-white p-4 rounded-lg shadow-lg bg-black"
//     style={{ zIndex: 1000 }}
//   >
//     <div className="relative">
//       <div className="flex flex-col space-y-4">
//         <SearchLinks />
//         <LinkComponent links={links} />
//         <AddNewLinkModal />
//       </div>
//     </div>
//   </div>
// )}
