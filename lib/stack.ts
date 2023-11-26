"use server";

import path from "path";
import { getFromMarkdown } from "./get-from-markdown";

const stackDir = path.join(process.cwd(), "content/stack");

export async function getStack() {
  const data = await getFromMarkdown(stackDir);
  const stack = data?.[0]?.data?.stack.map((s: {}, index: number) => ({
    id: index + 1,
    name: s,
  }));
  return stack;
}
