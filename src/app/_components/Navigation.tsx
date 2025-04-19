"use client";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { calendar, tasks, reporting, dashboard, meeting } from "./icons/navigationIcons";
import UserProfile from "./UserProfile";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/", type: "general", icon: dashboard },
  { name: "Calendar", href: "/calendar", type: "general", icon: calendar },
  { name: "Meeting", href: "/meeting", type: "general", icon: meeting },
  { name: "Reporting", href: "/reporting", type: "ai", icon: reporting },
  { name: "Tasks", href: "/tasks", type: "ai", icon: tasks },
];

export default function Navigation() {
  return (
    <nav className="border border-neutral-300 bg-neutral-100 rounded-xl w-1/6 max-w-100 m-2 p-4 flex flex-col h-[calc(100vh-1rem)]">
      <Logo />
      <div className="flex flex-col gap-5 mt-4 flex-1">
      <Section
        title="General"
        items={navItems.filter((i) => i.type === "general")}
      />
      <Section
        title="AI Tools"
        items={navItems.filter((i) => i.type === "ai")}
      />
      </div>
      <UserProfile />
    </nav>
  );
}

function Section({ title, items }: { title: string; items: typeof navItems }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div className="mb-4">
      <h1 className="text-sm font-semibold text-neutral-500 mb-2">{title}</h1>
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          const IconModule = item.icon;
          return (
            <li
              key={item.name}
              className={`flex items-center gap-2 py-2 rounded-lg transition-all duration-200 ${
                isActive(item.href) ? "pl-3 bg-neutral-200 w-full" : "pl-0"
              }`}
            >
              {IconModule && (
                <Image
                  src={IconModule}
                  alt={`${item.name} icon`}
                  className="w-5 flex items-center justify-center"
                />
              )}
              <Link
                href={item.href}
                className={`text-neutral-500 hover:text-neutral-600 ${
                  isActive(item.href) &&
                  "text-neutral-800 font-bold w-full"
                }`}
              >
                <h1 className="font-semibold text-sm">{item.name}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
