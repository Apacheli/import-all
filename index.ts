import fs from 'fs/promises';

/**
 * Simultaneously import ES modules from a directory and its subdirectories
 * @arg path Path to directory
 * @arg depth How deep to recurse into subdirectories
 */
const importAll = async (path: string, depth = Infinity, _ = 0) => {
  const files = await fs.readdir(new URL(path), {
    withFileTypes: true
  });

  const modules: unknown[] = [];

  for (const file of files) {
    const filePath = `${path}/${file.name}`;
    if (file.isDirectory() && depth > _) {
      modules.push(importAll(filePath, depth, _ + 1));
    }
    else if (filePath.slice(-3) === '.js') {
      modules.push(import(filePath));
    }
  }

  return (await Promise.all(modules)).flat();
};

export default importAll;
