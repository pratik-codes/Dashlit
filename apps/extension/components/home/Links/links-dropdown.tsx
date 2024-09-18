import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import LinkComponent from './LinkComponent';
import AddNewLinkDialog from './AddNewLinkDialog';

interface Link {
  title: string;
  url: string | string[];
  type: string;
}

export const Links = [
  {
    title: "React Official Documentation",
    url: [
      "reactjs.org/docs/getting-started.html",
      "reactjs.org/docs/getting-started.html",
    ],
    type: "folder",
  },
  {
    title: "TypeScript Handbook",
    url: "www.typescriptlang.org/docs/handbook/intro.html",
    type: "documentation",
  },
  {
    title: "Tailwind CSS",
    url: "tailwindcss.com/docs",
    type: "css",
  },
  {
    title: "Next.js Learn Course",
    url: "nextjs.org/learn",
    type: "tutorial",
  },
  {
    title: "GitHub",
    url: "github.com",
    type: "tool",
  },
]

export function LinksDropDown() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [links, setLinks] = useState<Link[]>(Links);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleAddLinkToList = (newLink: Link) => {
    setLinks([...links, newLink]);
  };  
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="focus:outline-none m-2">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[18rem] ml-2 mt-1 rounded-xl">
        <DropdownMenuLabel>
          <Input
            type="text"
            className="border-2 ring-2 ring-black w-full rounded-lg p-2 font-medium"
            placeholder="Search links..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <LinkComponent links={links} searchTerm={searchTerm} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Button
            variant="ghost"
            className="min-w-full rounded-xl flex items-center py-0 justify-start px-2"
            onClick={openDialog}
          >
            <PlusCircle size={20} className="mr-2" />
            Add link or folder
          </Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>

      <AddNewLinkDialog
        isOpen={isDialogOpen}
        closeModal={closeDialog}
        handleAddLinkToList={handleAddLinkToList}
      />
    </DropdownMenu>
  );
}
