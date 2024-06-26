---
id: algokit
title: AlgoKit
---
# AlgoKit

## AlgoKit CLI

``` bash
algokit --help
```

``` example
Usage: algokit [OPTIONS] COMMAND [ARGS]...

  AlgoKit is your one-stop shop to develop applications on the Algorand blockchain.

  If you are getting started, please see the quick start tutorial: https://bit.ly/algokit-intro-tutorial.

Options:
  --version             Show the version and exit.
  -v, --verbose         Enable logging of DEBUG messages to the console.
  --color / --no-color  Force enable or disable of console output styling.
  --skip-version-check  Skip version checking and prompting.
  -h, --help            Show this message and exit.

Commands:
  compile      Compile smart contracts and smart signatures written in a supported high-level language to a format
               deployable on the Algorand Virtual Machine (AVM).
  completions  Install and Uninstall AlgoKit shell integrations.
  config       Configure AlgoKit settings.
  dispenser    Interact with the AlgoKit TestNet Dispenser.
  doctor       Diagnose potential environment issues that may affect AlgoKit.
  explore      Explore the specified network in the browser using Dappflow.
  generate     Generate code for an Algorand project.
  goal         Run the Algorand goal CLI against the AlgoKit LocalNet.
  init         Initializes a new project from a template; run from project parent directory.
  localnet     Manage the AlgoKit LocalNet.
  project      Provides a suite of commands for managing your AlgoKit project.
  task         Collection of useful tasks to help you develop on Algorand.
```

## Doctor

``` bash
algokit doctor
```

``` example
Usage: algokit doctor [OPTIONS]

  Diagnose potential environment issues that may affect AlgoKit.

  Will search the system for AlgoKit dependencies and show their versions, as
  well as identifying any potential issues.

Options:
  -c, --copy-to-clipboard  Copy the contents of the doctor message (in
                           Markdown format) in your clipboard.
  -h, --help               Show this message and exit.
```

## Localnet

``` bash
algokit localnet -h
```

``` example
Usage: algokit localnet [OPTIONS] COMMAND [ARGS]...

Options:
  -h, --help  Show this message and exit.

Commands:
  codespace  Manage the AlgoKit LocalNet in GitHub Codespaces.
  config     Configure the container engine for AlgoKit LocalNet.
  console    Run the Algorand goal CLI against the AlgoKit LocalNet via a Bash
             console so you can execute multiple goal commands and/or interact
             with a filesystem.
  explore    Explore the AlgoKit LocalNet using lora.
  logs       See the output of the Docker containers.
  reset      Reset the AlgoKit LocalNet.
  start      Start the AlgoKit LocalNet.
  status     Check the status of the AlgoKit LocalNet.
  stop       Stop the AlgoKit LocalNet.
```

``` bash
algokit localnet status
```

``` example
# container engine
Name: docker (change with `algokit config container-engine`)
# algod status
Status: Running
Port: 4001
Last round: 0
Time since last round: 0.0s
Genesis ID: dockernet-v1
Genesis hash: 5ensPvxqB3l/uJX0rsj4/Quc5xWqaUL59HhMQaAdr1E=
Version: 3.25.0
# conduit status
Status: Running
# indexer-db status
Status: Running
# indexer status
Status: Running
Port: 8980
Last round: 0
Version: 3.5.0
# proxy status
Status: Running
```

## Init Project

``` bash
algokit init -h
```
