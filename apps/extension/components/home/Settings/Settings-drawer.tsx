import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Settings, X } from "lucide-react";
import SettingsTablist from "./Settings-tablist";

export function SettingsDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Settings />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen mt-2 absolute left-1/2 right-0 w-1/2">
      <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X size={20} />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <SettingsTablist />
      </DrawerContent>
    </Drawer>
  );
}
