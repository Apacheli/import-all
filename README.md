# import-all
Simultaneously import ES modules from a directory and its subdirectories

```ts
import importAll from '@apacheli/import-all';
import path from 'path';

const pathToDirectory = path.join(import.meta.url, '../path/to/directory');

// importAll(path: string, depth?: number)
const modules = await importAll(pathToDirectory);
for (const module of modules) {
  // ...
}
```
