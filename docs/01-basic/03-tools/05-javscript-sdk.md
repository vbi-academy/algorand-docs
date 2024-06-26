---
id: javascript-sdk
title: Javascript SDK
---
# Javascript SDK

-   Initial Code & Use Typescript

``` bash
npm init
yarn init
pnpm init
bun init
```

-   Add Package

``` javascript
npm install algosdk
yarn add algosdk
pnpm add algosdk
bun add algosdk
```

-   Run Code

``` javascript
import algosdk from 'algosdk';

const generatedAccount = algosdk.generateAccount();
const passphrase = algosdk.secretKeyToMnemonic(generatedAccount.sk);
console.log(`My address: ${generatedAccount.addr}`);
console.log(`My passphrase: ${passphrase}`);
```
