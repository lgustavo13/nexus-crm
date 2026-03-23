export type CustomerStatus = "Lead" | "Ativo" | "Cancelado";

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string | null;
  status: CustomerStatus;
  contract_value: number;
  created_at: string;
}
