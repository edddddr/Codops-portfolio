"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerSchema, loginSchema } from "@/app/lib/authSchema";

const usersDb = [];

export async function registerAction(prevState, formData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validation = registerSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validation.data;

  const newUser = { id: `USER-${Date.now()}`, name, email, password };
  usersDb.push(newUser);

  const cookieStore = await cookies();
  cookieStore.set("session_id", `SESS-${Date.now()}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_name", name, { path: "/" });
  cookieStore.set("user_id", newUser.id, { path: "/" });

  return {
    success: true,
    message: "Registration successful!",
    user: { name, email },
  };
}

/**
 * Login / Sign In Server Action
 */
export async function loginAction(prevState, formData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validation = loginSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;

  const user = usersDb.find(
    (u) => u.email === email && u.password === password,
  );

  const isTestUser = email === "user@addiseats.com" && password === "123456";

  if (!user && !isTestUser) {
    return {
      success: false,
      message: "Invalid email or password.",
      fieldErrors: {},
    };
  }

  const userName = user ? user.name : "Demo User";
  const userId = user ? user.id : "USER-DEMO";

  const cookieStore = await cookies();
  cookieStore.set("session_id", `SESS-${Date.now()}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_name", userName, { path: "/" });
  cookieStore.set("user_id", userId, { path: "/" });

  return {
    success: true,
    message: "Login successful!",
    user: { name: userName, email },
  };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("session_id");
  cookieStore.delete("user_name");
  cookieStore.delete("user_id");

  redirect("/login");
}
