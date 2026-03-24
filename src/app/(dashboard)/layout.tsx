import { Header } from "@/src/components/layout/header";
import { Sidebar } from "@/src/components/layout/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
