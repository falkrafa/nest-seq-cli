import { execSync } from "node:child_process"

const configModuleTemplate = (projectName: string) => {
  execSync(`cd ${projectName} && nest g module config --no-spec`, { stdio: 'inherit' })

  const configModuleContent = `import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configuration';

const currentEnvFile =
  process.env.NODE_ENV === 'development'
    ? '.env.development'
    : '.env.production';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [currentEnvFile],
      load: [config],
      isGlobal: true,
    }),
  ],
})
export class ConfigModule {}`;

execSync(`echo "${configModuleContent}" > ${projectName}/src/config/config.module.ts`, { stdio: 'inherit' })
}

export default configModuleTemplate;
