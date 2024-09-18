import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

interface Link {
  title: string;
  url: string | string[];
  type: string;
}

interface AddNewLinkDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  handleAddLinkToList: (newLink: Link) => void;
}

const AddNewLinkDialog: React.FC<AddNewLinkDialogProps> = ({ isOpen, closeModal, handleAddLinkToList }) => {
  const [title, setTitle] = useState('');
  const [urls, setUrls] = useState<string[]>(['']);
  const [type, setType] = useState('');

  const handleUrlChange = (index: number, value: string) => {
    const updatedUrls = [...urls];
    updatedUrls[index] = value;
    setUrls(updatedUrls);
  };

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const removeUrlField = (index: number) => {
    const updatedUrls = urls.filter((_, i) => i !== index);
    setUrls(updatedUrls);
  };

  const handleSubmit = () => {
    const newLink: Link = {
      title,
      url: urls.length > 1 ? urls : urls[0],
      type: urls.length > 1 ? 'folder' : type, 
    };

    handleAddLinkToList(newLink);
    closeModal();
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

        {urls.map((url, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Link URL"
              value={url}
              onChange={(e) => handleUrlChange(index, e.target.value)}
              className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md p-2 mr-2"
            />
            {urls.length > 1 && (
              <Button
                className="bg-red-600 text-white px-2 py-1 rounded-md"
                onClick={() => removeUrlField(index)}
              >
                <X size={16} />
              </Button>
            )}
          </div>
        ))}

        <Button
          className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-md mb-4"
          onClick={addUrlField}
        >
          <Plus size={16} className="mr-2" /> Add another link
        </Button>

        <input
          type="text"
          placeholder="Link type (documentation, css, etc.)"
          value={urls.length > 1 ? 'folder' : type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md p-2 mb-4"
          disabled={urls.length > 1}
        />

        <DialogFooter>
          <Button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
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
