import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import LinkComponent from "./LinkComponent";

const links = [
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
];

export function LinksDropDown() {
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
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <LinkComponent links={links} />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Button
            variant="ghost"
            className="min-w-full rounded-xl flex items-center py-0 justify-start px-2"
          >
            <PlusCircle size={14} className="mr-2" />
            Add link or folder
          </Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
