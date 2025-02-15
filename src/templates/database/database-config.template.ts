import { execSync } from "node:child_process"

const databaseConfigTemplate = (projectName: string, database: string) => {
  execSync(`touch ${projectName}/src/database/database.config.ts`, { stdio: 'inherit' });

  const dbConfigContent = `import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable()
export class DatabaseConfig implements SequelizeOptionsFactory {
  constructor(private configService: ConfigService) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const dbConfig = this.configService.get('database');

    return {
      dialect: '${database.toLowerCase()}',
      logging: false,
      synchronize: false,
      dialectOptions: {
        query_timeout: dbConfig.query_timeout,
      },
      autoLoadModels: true,
      pool: {
        max: 50,
        min: 1,
      },
      minifyAliases: true,
      replication: {
        read: [dbConfig.replica],
        write: dbConfig.write,
      },
    };
  }
}`;

  execSync(`echo "${dbConfigContent}" > ${projectName}/src/database/database.config.ts`, { stdio: 'inherit' });
}

export default databaseConfigTemplate;
