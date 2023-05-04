import Link from "next/link";
import React from "react";

const Tabs = () => {
  const tabs = [
    {
      name: "En Popüler",
      url: "populer",
    },
    {
      name: "En Son",
      url: "laters",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className="cursor-pointer hover:opacity-75 transition-opacity"
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
