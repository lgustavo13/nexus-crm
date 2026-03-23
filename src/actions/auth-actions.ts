"use server";

import { z } from "zod";
import { createClient } from "../lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const authSchema = z.object({
  email: z.email("E-mail inválido!"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres!"),
});

export async function login(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = authSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Dados inválidos. Verifique os campos." };
  }

  const { email, password } = parsed.data;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = authSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Dados inválidos." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/login");
}
