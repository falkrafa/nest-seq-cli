import { execSync } from 'node:child_process';

import configurationTemplate from '../config/configuration.template.js';
import modelsTemplate from '../models/models.template.js';
import databaseConfigTemplate from './database-config.template.js';

const DatabaseTemplate = (projectName: string, dbChoice: string) => {
  execSync(`cd ${projectName} && nest g module database --no-spec`, { stdio: 'inherit' })
  modelsTemplate(projectName);
  configurationTemplate(projectName);
  databaseConfigTemplate(projectName, dbChoice);

  const dbModuleContent = `import { Global, Module } from '@nestjs/common';
import { DatabaseConfig } from './database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import * as models from '../common/models';

const modelsList = Object.values(models);

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    SequelizeModule.forFeature(modelsList),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}`;

  execSync(`echo "${dbModuleContent}" > ${projectName}/src/database/database.module.ts`, { stdio: 'inherit' });
};

export default DatabaseTemplate;
