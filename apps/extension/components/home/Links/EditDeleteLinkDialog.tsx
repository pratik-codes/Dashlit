import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";

const EditDeleteLinkDialog = ({ isOpen, closeModal, link, onSave, onDelete }: any) => {
  const [title, setTitle] = useState(link.title);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    setUrls(Array.isArray(link.url) ? link.url : [link.url]);
  }, [link]);

  const handleSave = () => {
    onSave({ ...link, title, url: urls });
    closeModal();
  };

  const handleDelete = () => {
    // Use title and URLs to identify which link to delete
    onDelete(link.title, urls);
    closeModal();
  };

  const handleUrlChange = (index: number, newUrl: string) => {
    const updatedUrls = [...urls];
    updatedUrls[index] = newUrl;
    setUrls(updatedUrls);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent aria-describedby={link.title}>
        <DialogHeader>
          <DialogTitle>Edit Link</DialogTitle>
        </DialogHeader>

        {/* Editable Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Edit the link title"
            />
          </div>

          {/* URL Inputs */}
          {urls.map((url, index) => (
            <div key={index}>
              <label htmlFor={`url-${index}`} className="block text-sm font-medium text-gray-700">
                URL {index + 1}
              </label>
              <Input
                id={`url-${index}`}
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                placeholder={`Edit URL ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditDeleteLinkDialog;
