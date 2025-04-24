import React, { useState } from "react";
import Logo from "../../../pages/logo";

interface NavItem {
  name: string;
  path?: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Dashboard", path: "/dashboard" },
  {
    name: "Orders",
    subItems: [
      { name: "All Orders", path: "/orders" },
      { name: "Pending Orders", path: "/orders/pending" },
    ],
  },
  { name: "Settings", path: "/settings" },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  return (
    <aside className="h-screen w-64 bg-[#7258db] text-white flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-[#7258db]-700">
        <Logo />
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.name}>
            <div
              onClick={() =>
                item.subItems ? toggleMenu(item.name) : (window.location.href = item.path!)
              }
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition"
            >
              <span>{item.name}</span>
              {item.subItems && (
                <span className="text-sm">{open === item.name ? "▲" : "▼"}</span>
              )}
            </div>
            {item.subItems && open === item.name && (
              <div className="ml-4 space-y-1">
                {item.subItems.map((sub) => (
                  <a
                    key={sub.name}
                    href={sub.path}
                    className="block p-2 rounded hover:bg-gray-700 text-sm"
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
