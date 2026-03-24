"use client";

import { Bell, LogOut, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { logout } from "@/src/actions/auth-actions";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex flex-1 items-center">
        <div className="flex w-full max-w-md items-center rounded-md border border-slate-300 px-3 py-1.5 focus-within:border-slate-500 focus-within:ring-1 focus-within:ring-slate-500">
          <Search className="h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Buscar..."
            className="ml-2 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="h-5 w-5" />
        </Button>

        <div className="h-6 w-px bg-slate-200" />

        <Button
          onClick={() => logout()}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Sair</span>
        </Button>
      </div>
    </header>
  );
}
