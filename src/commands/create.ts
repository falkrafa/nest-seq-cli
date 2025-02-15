import { Command } from '@oclif/core';
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import { execSync } from 'node:child_process';
import ora from 'ora';

import { DbOptionsType } from '../common/types/new.types.js';
import { databaseTemplate, swaggerTemplate, tsConfigTemplate } from '../templates/index.js';

export default class Create extends Command {
  static description = 'Create a new NestJS project with Sequelize';

  async run() {
    console.log(chalk.cyan(figlet.textSync('Nest-Sequelize CLI', { horizontalLayout: 'full' })));
    console.log(chalk.green.bold('🚀 Welcome to the Nest-Sequelize CLI!'));

    const { projectName } = await inquirer.prompt([
      {
        default: 'my-app',
        message: 'Enter your project name:',
        name: 'projectName',
        type: 'input',
        validate: (input) => (input ? true : chalk.red('Project name cannot be empty!')),
      },
    ]);

    const { dbChoice } = await inquirer.prompt([
      {
        choices: ['PostgreSQL', 'MySQL', 'SQLite'],
        message: 'Choose your database:',
        name: 'dbChoice',
        type: 'list',
      },
    ]);

    const { packageManager } = await inquirer.prompt([
      {
        choices: ['npm', 'yarn'],
        message: 'Which package manager do you prefer?',
        name: 'packageManager',
        type: 'list',
      },
    ]);

    const { isSwaggerEnabled } = await inquirer.prompt([
      {
        message: 'Do you want to enable Swagger?',
        name: 'isSwaggerEnabled',
        type: 'confirm',
      },
    ]);

    const dbPackages = {
      MySQL: 'mysql2',
      PostgreSQL: 'pg pg-hstore',
      SQLite: 'sqlite3',
    };

    const dbName = {
      MySQL: 'mysql',
      PostgreSQL: 'postgres',
      SQLite: 'sqlite',
    }

    const selectedDbPackage = dbPackages[dbChoice as DbOptionsType];
    const packageManagerCommand = packageManager === 'npm' ? 'npm i' : 'yarn add';

    const spinner = ora();

    spinner.start(chalk.yellow('📦 Creating project...'));
    try {
      execSync('node -v | grep "v22."', { stdio: 'inherit' });
    } catch {
      console.log(chalk.yellow('⚠️ Node.js 22 is not installed. Please install it manually.'));
    }

    execSync(`npm i -g @nestjs/cli`, { stdio: 'inherit' });
    execSync(`nest new ${projectName} --package-manager ${packageManager}`, { stdio: 'inherit' });
    spinner.succeed(chalk.green(`✅ Project "${projectName}" created!`));

    spinner.start(chalk.yellow(`🔧 Installing Sequelize and ${dbChoice} database driver...`));
    execSync(`
      cd ${projectName} &&
      ${packageManagerCommand} sequelize sequelize-typescript ${selectedDbPackage} &&
      ${packageManagerCommand} @types/sequelize &&
      ${packageManagerCommand} @nestjs/sequelize
    `, { stdio: 'inherit' });
    spinner.succeed(chalk.green('✅ Sequelize installed!'));

    spinner.start(chalk.yellow('🔧 Installing NestJS Config...'));
    execSync(`cd ${projectName} && ${packageManagerCommand} @nestjs/config`, { stdio: 'inherit' });
    spinner.succeed(chalk.green('✅ NestJS Config installed!'));

    if (isSwaggerEnabled) {
      spinner.start(chalk.yellow('🔧 Installing Swagger...'));
      swaggerTemplate(projectName, packageManagerCommand);
      spinner.succeed(chalk.green('✅ Swagger installed!'));
    }

    spinner.start(chalk.yellow('📁 Generating database module...'));
    databaseTemplate(projectName, dbName[dbChoice as DbOptionsType]);
    spinner.succeed(chalk.green('✅ Database module generated!'));
    tsConfigTemplate(projectName);
    console.log(chalk.cyan.bold('\n🚀 Setup Complete!'));
    console.log(chalk.yellow('💡 Navigate to your project and start developing:'));
    console.log(chalk.green(`cd ${projectName}\n`));
  }
}
