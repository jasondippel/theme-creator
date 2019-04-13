# electron-react-boilerplate

This repo contains the boilerplate for an electron app that includes react, eslint, and prettier. It leverages parcel as the application bundler.

This boilerplate is partially based off of the steps outlined in [this medium article](https://medium.com/@yogeshkumarr/production-ready-electron-app-using-react-and-parcel-web-bundler-74dcda63f148).

## Setup

Setup is simple, just run:

```bash
$ yarn install
```

## Development

Running the entire application:

```bash
$ yarn start
```

Only want to run the react piece? You can do so with the following commands:

```bash
$ yarn react-start # starts the react app on http://localhost:3000
$ yarn react-build # builds the react app and packages it in the build folder
```

### Linting

You can manually run the linting as such

```bash
yarn lint
```

A pre-commit hook also exists that will run this.

## License

This code is released under the [MIT License](LICENSE).
