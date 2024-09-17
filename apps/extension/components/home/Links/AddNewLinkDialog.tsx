import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface Link {
  id: number;
  url: string;
}

interface AddNewLinkModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddNewLinkDialog: React.FC<AddNewLinkModalProps> = ({ isOpen, closeModal }) => {
  const [title, setTitle] = useState('');
  const [links, setLinks] = useState<Link[]>([{ id: 1, url: '' }]);

  const handleAddLink = () => {
    setLinks([...links, { id: links.length + 1, url: '' }]);
  };

  const handleRemoveLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent aria-describedby="add-new-link">
        <DialogHeader>
          <h2 className="text-2xl font-bold text-white mb-4">Add new link</h2>
        </DialogHeader>
        <input
          type="text"
          placeholder="Link title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md p-2 mb-4"
        />
        {links.map((link) => (
          <div key={link.id} className="flex mb-2">
            <input
              type="text"
              placeholder="Add link here"
              value={link.url}
              onChange={(e) => {
                const newLinks = links.map(l =>
                  l.id === link.id ? { ...l, url: e.target.value } : l
                );
                setLinks(newLinks);
              }}
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 rounded-l-md p-2"
            />
            <button
              onClick={() => handleRemoveLink(link.id)}
              className="bg-gray-700 text-gray-400 hover:text-white px-2 rounded-r-md"
            >
              <X size={24} />
            </button>
          </div>
        ))}
        <button
          onClick={handleAddLink}
          className="bg-purple-600 py-2 text-white text-md flex justify-center items-center gap-3 rounded-full mt-2"
        >
          <Plus size={20}/> Add More Links...
        </button>
        <DialogFooter>
          <Button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            Add
          </Button>
          <Button
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewLinkDialog;
