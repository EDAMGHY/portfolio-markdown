"use server";

import path from "path";
import { getFromMarkdown } from "./get-from-markdown";

const socialsDir = path.join(process.cwd(), "content/socials");

export async function getSocials() {
  const data = await getFromMarkdown(socialsDir);
  const socials = data.map((project) => {
    const { data, content } = project;
    return {
      id: data.id,
      title: data.title,
      icon: data.icon,
      url: data.url,
      content,
    };
  });

  return socials;
}
