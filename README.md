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
