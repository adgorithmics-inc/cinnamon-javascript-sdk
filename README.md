# Cinnamon Typescript/Javascript SDK

## Getting started

Install the SDK from npm

```bash
npm install @adgorithmics/cinnamon-javascript-sdk
```

Create an instance and configure it.

```javascript
const { Cinnamon } = require('@adgorithmics/cinnamon-javascript-sdk');
const cinnamon = new Cinnamon({ url: 'https://api.adgo.io/v1/graphql' });
```

Log in with your credentials.

```javascript
await cinnamon.login({
    email: 'example@adgo.io',
    password: 'password',
});
```

Thats it, you can now use all methods available on the API.

```javascript
const me = await cinnamon.me();
console.log(me);
```
