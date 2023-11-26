"use server";

import path from "path";
import { getFromMarkdown } from "./get-from-markdown";

const projectsDir = path.join(process.cwd(), "content/projects");

export async function getProjects() {
  const data = await getFromMarkdown(projectsDir);

  let projects = data.map((project) => {
    const { data, content } = project;
    return {
      id: data.id,
      title: data.title,
      image: data.image,
      url: data.url,
      tags: data.tags,
      content,
    };
  });

  return projects;
}
