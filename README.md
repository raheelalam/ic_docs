[![Netlify Status](https://api.netlify.com/api/v1/badges/088c8bdc-81a6-499a-85ff-e380540fa506/deploy-status)](https://app.netlify.com/sites/incountry-docs/deploys)

# InCountry Documentation

## Working locally

To get started, clone the repository and run the following commands in sequential order.

> **Note:** If your GitHub account has 2-factor authentication enabled, [create a token](https://github.com/settings/tokens) (with "Repo" permissions only) to use in place of your password when you run the `git clone` command below.

```sh
# Option 1: clone by SSH
    $ git clone --recursive git@github.com:incountry/documentation.git

# Option 2: clone by HTTPS
    $ git clone --recursive https://github.com/incountry/documentation.git

# Navigate to the repo dir
$ cd documentation

# Install packages as listed in package.json
$ npm install
```

### Run Server with Hot Reloading

```sh
$ npm start
```


Please see [CONTRIBUTING](CONTRIBUTING.md) for information on editing and adding content.
