# Cinnamon Typescript/Javascript SDK

## Getting started

Install the SDK from npm

```bash
npm install @adgorithmics/cinnamon-sdk
```

Create an instance and configure it.

```javascript
const { Cinnamon } = require('@adgorithmics/cinnamon-sdk');
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

### Publishing

#### Normal release

To publish a new version to npm, make a GitHub release from branch `master`.
The GitHub tag will become the npm version (eg. `v1.0.0`).
CircleCI will automatically commit the new version to the `master` branch.

#### Hot fix

To publish a hot fix for an older version, create a new branch that is called like the version you want to publish (eg. `1.0.0-hot.1`).
Don't add `v` in branchnames. Create a new GitHub release from that branch. The GitHub tag will become the npm version.
Make sure the tag includes `-hot.X` where `X` is a semversion (eg. `1.2.3`) so CircleCI knows
that this is a hot release.
CircleCI will not update the branch with the new version. Should there be a
need to hotfix the hotfix, create a new branch from the hotfix branch (eg. `1.0.0-hot.2`).

#### Pre release

To publish a pre-release, create a new branch that is called like the version
the pre-release is for (eg. `2.0.0`). Don't add `v` in branchnames.
Make a new GitHub pre-release from that branch. The GitHub tag will become the npm version.
Make sure the tag includes `-rc.X` where `X` is a semversion (eg. `1.2.3`) so CircleCI knows
that this is a pre-release.
CircleCI will update the pre-release branch with the new version. You can use
the same branch to publish multiple pre-release versions before releasing the actual release.
To publish the actual release, merge the pre-release branch into master and make
a normal release.
