"use client";

import { KanbanSquare, LayoutDashboard, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clientes", href: "/customers", icon: Users },
  { name: "Negociações", href: "/deals", icon: KanbanSquare },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Nexus CRM
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex item-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon
                className={`mr-3 h-5 shrink-0 ${
                  isActive ? "text-slate-900" : "text-slate-400"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
            DEV
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-900">Admin</span>
            <span className="text-xs text-slate-500">admin@nexus.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
