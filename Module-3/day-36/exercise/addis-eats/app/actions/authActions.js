"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { registerSchema, loginSchema } from "@/app/lib/authSchema";

const usersDb = [];

async function createSessionCookies({ userId, name, role }) {
  const cookieStore = await cookies();

  cookieStore.set("session_id", `SESS-${Date.now()}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_id", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_role", role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  cookieStore.set("user_name", name, {
    httpOnly: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

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

  const role = email.includes("staff") ? "staff" : "customer";
  const newUser = { id: `USER-${Date.now()}`, name, email, password, role };

  usersDb.push(newUser);

  await createSessionCookies({
    userId: newUser.id,
    name: newUser.name,
    role: newUser.role,
  });

  return {
    success: true,
    message: "Registration successful!",
    user: { name, email, role },
  };
}

export async function signInAction(prevState, formData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const redirectTo = formData.get("next") || "/";

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
  const isDemoCustomer =
    email === "user@addiseats.com" && password === "123456";
  const isDemoStaff = email === "staff@addiseats.com" && password === "123456";

  if (!user && !isDemoCustomer && !isDemoStaff) {
    return {
      success: false,
      error: "Invalid email or password.",
      fieldErrors: {},
    };
  }

  const userName = user
    ? user.name
    : isDemoStaff
      ? "Staff Member"
      : "Demo User";
  const userId = user ? user.id : isDemoStaff ? "STAFF-DEMO" : "USER-DEMO";
  const userRole = user ? user.role : isDemoStaff ? "staff" : "customer";

  await createSessionCookies({
    userId,
    name: userName,
    role: userRole,
  });

  const isValidRedirect =
    typeof redirectTo === "string" &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//");
  const safeDestination = isValidRedirect ? redirectTo : "/";

  redirect(safeDestination);
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("session_id");
  cookieStore.delete("user_id");
  cookieStore.delete("user_role");
  cookieStore.delete("user_name");

  redirect("/signin");
}
