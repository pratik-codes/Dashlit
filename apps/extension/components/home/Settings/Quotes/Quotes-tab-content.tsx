"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function QuotesTabs() {
  const [activeTab, setActiveTab] = useState("my-quotes");
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    console.log("Quote:", quote);
    console.log("Author:", author);
    setIsOpen(false);
    setQuote("");
    setAuthor("");
  };
  return (
    <div className="w-full mx-auto bg-black text-white p-6 rounded-lg">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-gray-900 rounded-full">
            <TabsTrigger value="my-quotes" className="rounded-full">
              My Quotes
            </TabsTrigger>
            <TabsTrigger value="public-quotes" className="rounded-full">
              Public Quotes
            </TabsTrigger>
            <TabsTrigger value="favourites" className="rounded-full">
              Favourites
            </TabsTrigger>
          </TabsList>
          {activeTab==="my-quotes" ? ( 
          <>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full bg-indigo-600 hover:bg-indigo-700">
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
              <DialogHeader className="flex flex-row items-center justify-between">
                <DialogTitle className="text-lg font-semibold">
                  Add new quote
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                </Button>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input
                    id="quote"
                    placeholder="Add quote"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="author"
                    placeholder="Add author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  variant="default"
                  onClick={handleSubmit}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Add
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-800 text-white hover:bg-gray-700 border-gray-700"
                >
                  Cancel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </> ) :null }
        </div>
      </Tabs>
    </div>
  );
}
