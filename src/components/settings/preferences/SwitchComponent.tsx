import React, { useState } from "react";
import { Switch } from "@headlessui/react";

interface Props {
  enabled: boolean;
  setEnabled: any;
}

const SwitchComponent: React.FC<Props> = ({ enabled, setEnabled }) => {
  return (
    <div className="ml-2 mt-2 p-2">
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in border border-gray-900 rounded-full">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={enabled}
          onClick={() => setEnabled(!enabled)}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-900 border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
      </div>
    </div>
  );
};

export default SwitchComponent;
