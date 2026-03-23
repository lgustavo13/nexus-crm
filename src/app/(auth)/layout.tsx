import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Nexus CRM
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Faça login para acessar o painel
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
