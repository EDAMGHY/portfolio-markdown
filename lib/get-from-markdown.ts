"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getFromMarkdown(directory: string) {
  const files = fs.readdirSync(directory);

  const filesData = files.map((filename) => {
    const filePath = path.join(directory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
    };
  });

  return filesData;
}
