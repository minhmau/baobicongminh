import { cookies } from "next/headers";

export type Lang = "vi" | "en";

export async function getLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value;
  return lang === "en" ? "en" : "vi";
}
