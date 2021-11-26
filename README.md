pmscli
======

Simple project managament system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pmscli.svg)](https://npmjs.org/package/pmscli)
[![Downloads/week](https://img.shields.io/npm/dw/pmscli.svg)](https://npmjs.org/package/pmscli)
[![License](https://img.shields.io/npm/l/pmscli.svg)](https://github.com/erlichdominik/pmscli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pmscli
$ pmscli COMMAND
running command...
$ pmscli (-v|--version|version)
pmscli/0.0.0 darwin-arm64 node-v17.0.1
$ pmscli --help [COMMAND]
USAGE
  $ pmscli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pmscli add [FILE]`](#pmscli-add-file)
* [`pmscli goodbye [FILE]`](#pmscli-goodbye-file)
* [`pmscli hello [FILE]`](#pmscli-hello-file)
* [`pmscli help [COMMAND]`](#pmscli-help-command)

## `pmscli add [FILE]`

describe the command here

```
USAGE
  $ pmscli add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/erlichdominik/pmscli/blob/v0.0.0/src/commands/add.ts)_

## `pmscli goodbye [FILE]`

describe the command here

```
USAGE
  $ pmscli goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/erlichdominik/pmscli/blob/v0.0.0/src/commands/goodbye.ts)_

## `pmscli hello [FILE]`

describe the command here

```
USAGE
  $ pmscli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pmscli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/erlichdominik/pmscli/blob/v0.0.0/src/commands/hello.ts)_

## `pmscli help [COMMAND]`

display help for pmscli

```
USAGE
  $ pmscli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.6/src/commands/help.ts)_
<!-- commandsstop -->
