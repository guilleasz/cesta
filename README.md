# Cesta

## How to set up the project

First run:
```
npm install 
```

### Setting Database

```
npm run start-db
```

### Setting up Ethereum Node

> You need to have Docker installed and running in order to follow this steps.

Run in your terminal: 

```
npm run create-eth-account
```
It is going to ask you for a password, **remember** this password and add it you the `.env`file into the `WALLET_PASSWORD` value. Also, a file inside `data/keystore` should have been created, copy the relative path of the file as the `DATA_PATH` env value.

Now, you need to know the wallet address, for that we are going to run:  

```
npm run get-eth-wallet-address
```

Add the wallet address value to the `.env` file in the variable `WALLET_ADDRESS`. Also, use this value to replace the key inside of the `alloc` object in `eth-node/genesis.json`.

Now run:

```
npm run init-genesis
```

and finally:

```
npm run start-node
```

## Running server

```
npm run start-server
```

## Running FrontEnd

To install packages:
```
cd front
yarn
```

To run app you can either run it inside `front` directory: 

```
yarn dev
```

or in the project directory: 

```
npm start-front
```
 
