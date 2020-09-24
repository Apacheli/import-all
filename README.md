# import-all
Simultaneously import ES modules from a directory and its subdirectories

```ts
import importAll from '@apacheli/import-all';

// importAll(path: string, depth?: number)
const modules = await importAll('./directory');
for (const module of modules) {
  // ...
}
```
