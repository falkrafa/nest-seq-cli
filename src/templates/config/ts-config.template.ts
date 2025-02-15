import { execSync } from "node:child_process";

const tsConfigTemplate = (projectName: string) => {
  const path = `./${projectName}/tsconfig.json`;

  const content = `{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false,
    "paths": {
      "@config/*": ["src/config/*"],
      "@models/*": ["src/common/models/*"],
      "@models": ["src/common/models"],
      "@common/*": ["src/common/*"],
    }
  }
}`;

  execSync(`echo '${content}' > ${path}`);
}

export default tsConfigTemplate;
