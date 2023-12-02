"use server";

import path from "path";
import { getFromMarkdown } from "./get-from-markdown";

const projectsDir = path.join(process.cwd(), "content/projects");

export async function getProjects() {
  const data = await getFromMarkdown(projectsDir);

  let projects = data.map((project, index) => {
    const { data, content } = project;
    return {
      id: data?.id || index,
      title: data?.title || null,
      image: data?.image || null,
      url: data?.url || null,
      code: data?.code || null,
      tags: data?.tags || [],
      content,
    };
  });

  return projects;
}
