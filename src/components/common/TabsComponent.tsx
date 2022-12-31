import React from "react";

const TabsComponent = ({ tabs }: { tabs: string[] }) => {
  return (
    <ul>
      {tabs.map((tab: any) => {
        return (
          <li className="mr-2">
            <a
              href="#"
              className="inline-block py-3 px-4 text-white bg-indigo rounded-lg active"
              aria-current="page">
              {tab}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TabsComponent;
