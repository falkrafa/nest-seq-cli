import { Command } from '@oclif/core';
import chalk from 'chalk';
import figlet from 'figlet';

export default class Help extends Command {
  static description = 'Show help for Nest-Sequelize CLI commands';

  async run() {
    console.log(chalk.cyan(figlet.textSync('Nest-Sequelize CLI', { horizontalLayout: 'full' })));
    console.log(chalk.green.bold('Welcome to the Nest-Sequelize CLI! 🚀'));
    console.log(chalk.yellow('Use "nest-seq-cli <command>" for specific functionality.'));

    console.log(`
Available commands:
  ${chalk.blue('create')}        Create a new NestJS project with Sequelize
  ${chalk.blue('help')}          Display help for the CLI

For more information about each command, use:
  ${chalk.green('nest-seq-cli <command> --help')}
`);
  }
}
