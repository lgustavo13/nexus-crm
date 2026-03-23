import { Button } from "@/src/components/ui/button";
import { CustomerTable } from "@/src/features/customer/components/customer-table";
import { Customer } from "@/src/features/customer/types";
import { createClient } from "@/src/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cliente | Nexus CRM",
  description: "Gerenciamento da carteira de clientes e status de contratos.",
};

export default async function CustomersPage() {
  const supabase = await createClient();

  const { data: customers, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar clientes no Supabase:", error.message);
  }

  const typeCustomers = (customers as Customer[]) || [];

  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Clientes
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Gerencie sua carteira de clientes e acompanhe o status dos contratos
          </p>
        </div>
      </div>

      <Button className="bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
        + Novo Cliente
      </Button>

      <div className="mt-6">
        <CustomerTable data={typeCustomers} />
      </div>
    </div>
  );
}
