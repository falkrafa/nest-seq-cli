import { execSync } from "node:child_process";

import configModuleTemplate from "./config-module.template.js";

const configurationTemplate = (projectName: string) => {
  configModuleTemplate(projectName);

  const configurationContent = `const config = () => ({
  port: parseInt(process.env.PORT, 10) || 3007,
  environment: process.env.NODE_ENV || 'development',
  database: {
    query_timeout: process.env.QUERY_TIMEOUT,
    name: process.env.NAME,
    master: {
      database: process.env.NAME,
      host: process.env.HOST,
      username: process.env.USER,
      password: process.env.PASSWORD,
    },
    replica: {
      database: process.env.NAME,
      host: process.env.DB_HOST,
      username: process.env.USER,
      password: process.env.PASSWORD,
    },
  },
});

export default config;`

  execSync(`echo "${configurationContent}" > ${projectName}/src/config/configuration.ts`, { stdio: 'inherit' })
}

export default configurationTemplate;
