import * as fs from 'fs';
import * as consts from './consts'
import { namedAccount } from './accounts'

const path = require("path");

function writePrysmConfig(argv: any) {
    const prysm = `
CONFIG_NAME: interop
PRESET_BASE: interop

# Genesis
GENESIS_FORK_VERSION: 0x20000089

# Altair
ALTAIR_FORK_EPOCH: 2
ALTAIR_FORK_VERSION: 0x20000090

# Merge
BELLATRIX_FORK_EPOCH: 4
BELLATRIX_FORK_VERSION: 0x20000091
TERMINAL_TOTAL_DIFFICULTY: 50

# Time parameters
SECONDS_PER_SLOT: 4
SLOTS_PER_EPOCH: 4

# Deposit contract
DEPOSIT_CONTRACT_ADDRESS: 0x4242424242424242424242424242424242424242
    `
    fs.writeFileSync(path.join(consts.configpath, "prysm.yaml"), prysm)
}

function writeGethGenesisConfig(argv: any) {
    const gethGenesisJSON = `
    {
      "config": {
        "chainId": 1,
        "homesteadBlock": 0,
        "eip150Block": 0,
        "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "eip155Block": 0,
        "eip158Block": 0,
        "byzantiumBlock": 0,
        "constantinopleBlock": 0,
        "petersburgBlock": 0,
        "istanbulBlock": 0,
        "muirGlacierBlock": 0,
        "berlinBlock": 0,
        "londonBlock": 0,
        "shardingForkBlock": 5,
        "clique": {
          "period": 5,
          "epoch": 30000
        },
        "terminalTotalDifficulty": 2,
        "terminalTotalDifficultyPassed": true
      },
      "nonce": "0x42",
      "timestamp": "0x0",
      "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "gasLimit": "0x1C9C380",
      "difficulty": "0x0",
      "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "coinbase": "0x0000000000000000000000000000000000000000",
      "alloc": {
        "0xa94f5374Fce5edBC8E2a8697C15331677e6EbF0B": {
          "balance": "31337000000000000000000000000"
        },
        "0x8A04d14125D0FDCDc742F4A05C051De07232EDa4": {
          "code": "0x60806040526004361061003f5760003560e01c806301ffc9a714610044578063228951181461008c578063621fd130146101a2578063c5f2892f1461022c575b600080fd5b34801561005057600080fd5b506100786004803603602081101561006757600080fd5b50356001600160e01b031916610253565b604080519115158252519081900360200190f35b6101a0600480360360808110156100a257600080fd5b8101906020810181356401000000008111156100bd57600080fd5b8201836020820111156100cf57600080fd5b803590602001918460018302840111640100000000831117156100f157600080fd5b91939092909160208101903564010000000081111561010f57600080fd5b82018360208201111561012157600080fd5b8035906020019184600183028401116401000000008311171561014357600080fd5b91939092909160208101903564010000000081111561016157600080fd5b82018360208201111561017357600080fd5b8035906020019184600183028401116401000000008311171561019557600080fd5b91935091503561028a565b005b3480156101ae57600080fd5b506101b7610ce6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f15781810151838201526020016101d9565b50505050905090810190601f16801561021e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023857600080fd5b50610241610cf8565b60408051918252519081900360200190f35b60006001600160e01b031982166301ffc9a760e01b148061028457506001600160e01b03198216638564090760e01b145b92915050565b603086146102c95760405162461bcd60e51b81526004018080602001828103825260268152602001806112516026913960400191505060405180910390fd5b602084146103085760405162461bcd60e51b81526004018080602001828103825260368152602001806111e86036913960400191505060405180910390fd5b606082146103475760405162461bcd60e51b81526004018080602001828103825260298152602001806112c46029913960400191505060405180910390fd5b670de0b6b3a764000034101561038e5760405162461bcd60e51b815260040180806020018281038252602681526020018061129e6026913960400191505060405180910390fd5b633b9aca003406156103d15760405162461bcd60e51b815260040180806020018281038252603381526020018061121e6033913960400191505060405180910390fd5b633b9aca00340467ffffffffffffffff81111561041f5760405162461bcd60e51b81526004018080602001828103825260278152602001806112776027913960400191505060405180910390fd5b606061042a82610fc6565b90507f649bbc62d0e31342afea4e5cd82d4049e7e1ee912fc0889aa790803be39038c589898989858a8a61045f602054610fc6565b6040805160a0808252810189905290819060208201908201606083016080840160c085018e8e80828437600083820152601f01601f191690910187810386528c815260200190508c8c808284376000838201819052601f909101601f191690920188810386528c5181528c51602091820193918e019250908190849084905b838110156104f65781810151838201526020016104de565b50505050905090810190601f1680156105235780820380516001836020036101000a031916815260200191505b5086810383528881526020018989808284376000838201819052601f909101601f19169092018881038452895181528951602091820193918b019250908190849084905b8381101561057f578181015183820152602001610567565b50505050905090810190601f1680156105ac5780820380516001836020036101000a031916815260200191505b509d505050505050505050505050505060405180910390a1600060028a8a600060801b604051602001808484808284376fffffffffffffffffffffffffffffffff199094169190930190815260408051600f19818403018152601090920190819052815191955093508392506020850191508083835b602083106106415780518252601f199092019160209182019101610622565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610680573d6000803e3d6000fd5b5050506040513d602081101561069557600080fd5b5051905060006002806106ab6040848a8c61114a565b6040516020018083838082843780830192505050925050506040516020818303038152906040526040518082805190602001908083835b602083106107015780518252601f1990920191602091820191016106e2565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610740573d6000803e3d6000fd5b5050506040513d602081101561075557600080fd5b50516002610766896040818d61114a565b60405160009060200180848480828437919091019283525050604080518083038152602092830191829052805190945090925082918401908083835b602083106107c15780518252601f1990920191602091820191016107a2565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610800573d6000803e3d6000fd5b5050506040513d602081101561081557600080fd5b5051604080516020818101949094528082019290925280518083038201815260609092019081905281519192909182918401908083835b6020831061086b5780518252601f19909201916020918201910161084c565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156108aa573d6000803e3d6000fd5b5050506040513d60208110156108bf57600080fd5b50516040805160208101858152929350600092600292839287928f928f92018383808284378083019250505093505050506040516020818303038152906040526040518082805190602001908083835b6020831061092e5780518252601f19909201916020918201910161090f565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa15801561096d573d6000803e3d6000fd5b5050506040513d602081101561098257600080fd5b50516040518651600291889160009188916020918201918291908601908083835b602083106109c25780518252601f1990920191602091820191016109a3565b6001836020036101000a0380198251168184511680821785525050505050509050018367ffffffffffffffff191667ffffffffffffffff1916815260180182815260200193505050506040516020818303038152906040526040518082805190602001908083835b60208310610a495780518252601f199092019160209182019101610a2a565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610a88573d6000803e3d6000fd5b5050506040513d6020811015610a9d57600080fd5b5051604080516020818101949094528082019290925280518083038201815260609092019081905281519192909182918401908083835b60208310610af35780518252601f199092019160209182019101610ad4565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610b32573d6000803e3d6000fd5b5050506040513d6020811015610b4757600080fd5b50519050858114610b895760405162461bcd60e51b81526004018080602001828103825260548152602001806111946054913960600191505060405180910390fd5b60205463ffffffff11610bcd5760405162461bcd60e51b81526004018080602001828103825260218152602001806111736021913960400191505060405180910390fd5b602080546001019081905560005b6020811015610cda578160011660011415610c0d578260008260208110610bfe57fe5b015550610cdd95505050505050565b600260008260208110610c1c57fe5b01548460405160200180838152602001828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610c745780518252601f199092019160209182019101610c55565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610cb3573d6000803e3d6000fd5b5050506040513d6020811015610cc857600080fd5b50519250600282049150600101610bdb565b50fe5b50505050505050565b6060610cf3602054610fc6565b905090565b6020546000908190815b6020811015610ea9578160011660011415610ddb57600260008260208110610d2657fe5b01548460405160200180838152602001828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610d7e5780518252601f199092019160209182019101610d5f565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610dbd573d6000803e3d6000fd5b5050506040513d6020811015610dd257600080fd5b50519250610e9b565b60028360218360208110610deb57fe5b015460405160200180838152602001828152602001925050506040516020818303038152906040526040518082805190602001908083835b60208310610e425780518252601f199092019160209182019101610e23565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610e81573d6000803e3d6000fd5b5050506040513d6020811015610e9657600080fd5b505192505b600282049150600101610d02565b50600282610eb8602054610fc6565b600060401b6040516020018084815260200183805190602001908083835b60208310610ef55780518252601f199092019160209182019101610ed6565b51815160209384036101000a600019018019909216911617905267ffffffffffffffff199590951692019182525060408051808303600719018152601890920190819052815191955093508392850191508083835b60208310610f695780518252601f199092019160209182019101610f4a565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610fa8573d6000803e3d6000fd5b5050506040513d6020811015610fbd57600080fd5b50519250505090565b60408051600880825281830190925260609160208201818036833701905050905060c082901b8060071a60f81b8260008151811061100057fe5b60200101906001600160f81b031916908160001a9053508060061a60f81b8260018151811061102b57fe5b60200101906001600160f81b031916908160001a9053508060051a60f81b8260028151811061105657fe5b60200101906001600160f81b031916908160001a9053508060041a60f81b8260038151811061108157fe5b60200101906001600160f81b031916908160001a9053508060031a60f81b826004815181106110ac57fe5b60200101906001600160f81b031916908160001a9053508060021a60f81b826005815181106110d757fe5b60200101906001600160f81b031916908160001a9053508060011a60f81b8260068151811061110257fe5b60200101906001600160f81b031916908160001a9053508060001a60f81b8260078151811061112d57fe5b60200101906001600160f81b031916908160001a90535050919050565b60008085851115611159578182fd5b83861115611165578182fd5b505082019391909203915056fe4465706f736974436f6e74726163743a206d65726b6c6520747265652066756c6c4465706f736974436f6e74726163743a207265636f6e7374727563746564204465706f7369744461746120646f6573206e6f74206d6174636820737570706c696564206465706f7369745f646174615f726f6f744465706f736974436f6e74726163743a20696e76616c6964207769746864726177616c5f63726564656e7469616c73206c656e6774684465706f736974436f6e74726163743a206465706f7369742076616c7565206e6f74206d756c7469706c65206f6620677765694465706f736974436f6e74726163743a20696e76616c6964207075626b6579206c656e6774684465706f736974436f6e74726163743a206465706f7369742076616c756520746f6f20686967684465706f736974436f6e74726163743a206465706f7369742076616c756520746f6f206c6f774465706f736974436f6e74726163743a20696e76616c6964207369676e6174757265206c656e677468a164736f6c634300060b000a",
          "balance": "0x0"
        }
      },
      "number": "0x0",
      "gasUsed": "0x0",
      "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "baseFeePerGas": "0x7"
    }
    `
    fs.writeFileSync(path.join(consts.configpath, "geth_genesis.json"), gethGenesisJSON)
    const jwtFile = `0x98ea6e4f216f2fb4b69fff9b3a44842c38686ca685f3f55dc48c5d3fb1107be4`
    fs.writeFileSync(path.join(consts.configpath, "jwt.hex"), jwtFile)
}

function writeConfigs(argv: any) {
    const deployment = JSON.parse(fs.readFileSync(path.join(consts.configpath, "deployment.json")).toString('utf-8'));
    const baseConfig = {
        "l1": {
            "rollup": deployment,
            "url": argv.l1url,
            "wallet": {
                "account": "",
                "password": consts.l1passphrase,
                "pathname": consts.l1keystore,
            },
        },
        "l2": {
            "chain-id": 412346,
            "dev-wallet" : {
                "private-key": "45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d8"
            }
        },
        "node": {
            "archive": true,
            "forwarding-target": "null",
            "validator": {
                "dangerous": {
                    "without-block-validator": false
                },
                "disable-challenge": false,
                "enable": false,
                "staker-interval": "10s",
                "make-assertion-interval": "10s",
                "strategy": "MakeNodes",
                "target-machine-count": 4,
            },
            "sequencer": {
                "enable": false
            },
            "delayed-sequencer": {
                "enable": false
            },
            "seq-coordinator": {
                "enable": false,
                "redis-url": argv.redisUrl,
                "lockout-duration": "30s",
                "lockout-spare": "1s",
                "my-url": "",
                "retry-interval": "0.5s",
                "seq-num-duration": "24h0m0s",
                "update-interval": "3s",
            },
            "batch-poster": {
                "enable": false,
                "redis-url": argv.redisUrl,
                "max-interval": "30s",
                "data-poster": {
                    "redis-signer": {
                      "signing-key": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
                    }
                }
            }
        },
        "init": {
            "dev-init": "true"
        },
        "persistent": {
	        "chain": "local"
        },
        "ws": {
            "addr": "0.0.0.0"
        },
        "http": {
            "addr": "0.0.0.0",
            "vhosts": "*",
            "corsdomain": "*"
        },
    }


    const baseConfJSON = JSON.stringify(baseConfig)

    let validatorConfig = JSON.parse(baseConfJSON)
    validatorConfig.l1.wallet.account = namedAccount("validator").address
    validatorConfig.node.validator.enable = true
    validatorConfig.node.validator["use-smart-contract-wallet"] = true
    let validconfJSON = JSON.stringify(validatorConfig)
    fs.writeFileSync(path.join(consts.configpath, "validator_config.json"), validconfJSON)

    let unsafeStakerConfig = JSON.parse(validconfJSON)
    unsafeStakerConfig.node.validator.dangerous["without-block-validator"] = true
    fs.writeFileSync(path.join(consts.configpath, "unsafe_staker_config.json"), JSON.stringify(unsafeStakerConfig))

    let sequencerConfig = JSON.parse(baseConfJSON)
    sequencerConfig.node.sequencer.enable = true
    sequencerConfig.node["seq-coordinator"].enable = true
    sequencerConfig.node["delayed-sequencer"].enable = true
    fs.writeFileSync(path.join(consts.configpath, "sequencer_config.json"), JSON.stringify(sequencerConfig))

    let posterConfig = JSON.parse(baseConfJSON)
    posterConfig.l1.wallet.account = namedAccount("sequencer").address
    posterConfig.node["seq-coordinator"].enable = true
    posterConfig.node["batch-poster"].enable = true
    fs.writeFileSync(path.join(consts.configpath, "poster_config.json"), JSON.stringify(posterConfig))
}

export const writeConfigCommand = {
    command: "write-config",
    describe: "writes config files",
    handler: (argv: any) => {
        writeConfigs(argv)
    }
}

export const writePrysmCommand = {
    command: "write-prysm-config",
    describe: "writes prysm config files",
    handler: (argv: any) => {
        writePrysmConfig(argv)
    }
}

export const writeGethGenesisCommand = {
    command: "write-geth-genesis-config",
    describe: "writes a go-ethereum genesis configuration",
    handler: (argv: any) => {
        writeGethGenesisConfig(argv)
    }
}

