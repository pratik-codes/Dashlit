import React, { useState } from 'react';
import { X, Plus ,PlusCircle} from 'lucide-react';

interface Link {
  id: number;
  url: string;
}

const AddNewLinkModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [links, setLinks] = useState<Link[]>([{ id: 1, url: '' }]);

  const handleAddLink = () => {
    setLinks([...links, { id: links.length + 1, url: '' }]);
  };

  const handleRemoveLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white flex gap-3 text-md py-2 rounded-md"
      > <PlusCircle size={20}/>
      Add link or folder
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Add new link</h2>
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
                className="bg-purple-600 text-white p-2 rounded-full mt-2"
              >
                <Plus size={24} />
              </button>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewLinkModal;
