# Nest-Seq CLI

🚀 **Nest-Seq CLI** is a powerful command-line tool for scaffolding NestJS projects with Sequelize ORM. It simplifies project setup by generating a fully structured NestJS application with sequelize and Swagger documentation.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nest-seq-cli.svg)](https://npmjs.org/package/nest-seq-cli)
[![Downloads/week](https://img.shields.io/npm/dw/nest-seq-cli.svg)](https://npmjs.org/package/nest-seq-cli)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [License](#license)

## Features

- **Scaffold NestJS Projects**: Quickly create a new NestJS project with Sequelize ORM.
- **Swagger Documentation**: Automatically generate Swagger documentation for your API.
- **Customizable**: Choose your preferred database and package manager during setup.

## Installation

To install the CLI globally, use the following command:

```sh
$ npm install -g nest-seq-cli
```

## Usage

To use the Nest-Seq CLI, follow these steps:

1. Create a new NestJS project:
  ```sh
  $ nest-seq-cli create
  ```

2. Check the version:
  ```sh
  $ nest-seq-cli --version
  ```

3. Get help for a specific command:
  ```sh
  $ nest-seq-cli --help [COMMAND]
  ```

## Commands

<!-- commands -->
* [`nest-seq-cli create`](#nest-seq-cli-create)
* [`nest-seq-cli help`](#nest-seq-cli-help)
* [`nest-seq-cli plugins`](#nest-seq-cli-plugins)
* [`nest-seq-cli plugins add PLUGIN`](#nest-seq-cli-plugins-add-plugin)
* [`nest-seq-cli plugins:inspect PLUGIN...`](#nest-seq-cli-pluginsinspect-plugin)
* [`nest-seq-cli plugins install PLUGIN`](#nest-seq-cli-plugins-install-plugin)
* [`nest-seq-cli plugins link PATH`](#nest-seq-cli-plugins-link-path)
* [`nest-seq-cli plugins remove [PLUGIN]`](#nest-seq-cli-plugins-remove-plugin)
* [`nest-seq-cli plugins reset`](#nest-seq-cli-plugins-reset)
* [`nest-seq-cli plugins uninstall [PLUGIN]`](#nest-seq-cli-plugins-uninstall-plugin)
* [`nest-seq-cli plugins unlink [PLUGIN]`](#nest-seq-cli-plugins-unlink-plugin)
* [`nest-seq-cli plugins update`](#nest-seq-cli-plugins-update)

## `nest-seq-cli create`

Create a new NestJS project with Sequelize

```
USAGE
  $ nest-seq-cli create

DESCRIPTION
  Create a new NestJS project with Sequelize
```

_See code: [src/commands/create.ts](https://github.com/falkrafa/nest-seq-cli/blob/v1.0.0/src/commands/create.ts)_

## `nest-seq-cli help`

Show help for Nest-Sequelize CLI commands

```
USAGE
  $ nest-seq-cli help

DESCRIPTION
  Show help for Nest-Sequelize CLI commands
```

_See code: [src/commands/help.ts](https://github.com/falkrafa/nest-seq-cli/blob/v1.0.0/src/commands/help.ts)_

## `nest-seq-cli plugins`

List installed plugins.

```
USAGE
  $ nest-seq-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ nest-seq-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/index.ts)_

## `nest-seq-cli plugins add PLUGIN`

Installs a plugin into nest-seq-cli.

```
USAGE
  $ nest-seq-cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nest-seq-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NEST_SEQ_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NEST_SEQ_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nest-seq-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nest-seq-cli plugins add myplugin

  Install a plugin from a github url.

    $ nest-seq-cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nest-seq-cli plugins add someuser/someplugin
```

## `nest-seq-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ nest-seq-cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ nest-seq-cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/inspect.ts)_

## `nest-seq-cli plugins install PLUGIN`

Installs a plugin into nest-seq-cli.

```
USAGE
  $ nest-seq-cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into nest-seq-cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the NEST_SEQ_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the NEST_SEQ_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ nest-seq-cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ nest-seq-cli plugins install myplugin

  Install a plugin from a github url.

    $ nest-seq-cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ nest-seq-cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/install.ts)_

## `nest-seq-cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ nest-seq-cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ nest-seq-cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/link.ts)_

## `nest-seq-cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nest-seq-cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nest-seq-cli plugins unlink
  $ nest-seq-cli plugins remove

EXAMPLES
  $ nest-seq-cli plugins remove myplugin
```

## `nest-seq-cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ nest-seq-cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/reset.ts)_

## `nest-seq-cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nest-seq-cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nest-seq-cli plugins unlink
  $ nest-seq-cli plugins remove

EXAMPLES
  $ nest-seq-cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/uninstall.ts)_

## `nest-seq-cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ nest-seq-cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nest-seq-cli plugins unlink
  $ nest-seq-cli plugins remove

EXAMPLES
  $ nest-seq-cli plugins unlink myplugin
```

## `nest-seq-cli plugins update`

Update installed plugins.

```
USAGE
  $ nest-seq-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.31/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`nest-seq-cli help`](#nest-seq-cli-help)
* [`nest-seq-cli help [COMMAND]`](#nest-seq-cli-help-command)
* [`nest-seq-cli create`](#nest-seq-cli-create)
* [`nest-seq-cli plugins`](#nest-seq-cli-plugins)
* [`nest-seq-cli plugins add PLUGIN`](#nest-seq-cli-plugins-add-plugin)
* [`nest-seq-cli plugins:inspect PLUGIN...`](#nest-seq-cli-pluginsinspect-plugin)
* [`nest-seq-cli plugins install PLUGIN`](#nest-seq-cli-plugins-install-plugin)
* [`nest-seq-cli plugins link PATH`](#nest-seq-cli-plugins-link-path)
* [`nest-seq-cli plugins remove [PLUGIN]`](#nest-seq-cli-plugins-remove-plugin)
* [`nest-seq-cli plugins reset`](#nest-seq-cli-plugins-reset)
* [`nest-seq-cli plugins uninstall [PLUGIN]`](#nest-seq-cli-plugins-uninstall-plugin)
* [`nest-seq-cli plugins unlink [PLUGIN]`](#nest-seq-cli-plugins-unlink-plugin)
* [`nest-seq-cli plugins update`](#nest-seq-cli-plugins-update)



## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/falkrafa/nest-seq-cli/blob/main/LICENSE) file for details.
