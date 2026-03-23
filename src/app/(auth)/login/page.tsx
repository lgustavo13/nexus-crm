"use client";

import { login } from "@/src/actions/auth-actions";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);
  const style = {
    label: "block text-sm font-medium text-slate-700",
    input:
      "block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm",
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow-sm sm:rounded-lg sm:px-10 border border-slate-200">
        <form action={formAction} className="space-y-4">
          <div className="space-y-6">
            <Label htmlFor="email" className={style.label}>
              E-mail corporativo
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              className={style.input}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className={style.label}>
              Senha
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              className={style.input}
              required
            />
          </div>

          {state?.error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Falha na autenticação
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{state?.error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm font-medium text-white shadow-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              disabled={isPending}
            >
              {isPending ? "Entrando..." : "Entrar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
