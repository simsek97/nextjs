## Getting Started

First, you will need to add a personal access token in Github
[https://github.com/settings/tokens](https://github.com/settings/tokens)

Then, you will need to add this token to your .bash_profile (or .profile or whatever your sistem is using) as follows

```bash
export GITHUB_ACCESS_TOKEN=xxxxx
```

After adding personal token, you can install dependencies.

```bash
yarn install
```

In order to run the application locally, you can use yarn.

```bash
yarn dev
```

The app should be available at [http://localhost:3000](http://localhost:3000) in your browser.
