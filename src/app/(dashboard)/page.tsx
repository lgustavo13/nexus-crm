import { Metadata } from "next";

export const metada: Metadata = {
  title: "Dashboard | Nexus CRM",
  description: "Visão geral do seu CRM",
};

export default function DashboardHomePage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Visão Geral
        </h2>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border- border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-slate-500">
            Total de Clientes
          </div>
          <div className="mt-2 text-3xl font-bold text-slate-900">R$0,00</div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h3 className="text-lg font-medium text-slate-900">
          Bem vindo ao Nexus CRM
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Navegue pelo menu lateral para acessar a base de clientes ou o
          pipeline de vendas.
        </p>
      </div>
    </div>
  );
}
