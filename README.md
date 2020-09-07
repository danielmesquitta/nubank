# Nubank App - Interface Clone (With animations)

### Technologies

- [React Native](https://reactnative.dev/)
- [Animated API](https://reactnative.dev/docs/animated)
- [TypeScript](https://www.typescriptlang.org/)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Styled Components](https://styled-components.com/)

<br/>
  <p align="center">
    <img src="docs/demo.gif" />
  </p>
<br/>

## GETTING STARTED
### Requirements

- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [git](https://git-scm.com/)
- [React Native development environment](https://reactnative.dev/docs/environment-setup)

#### Clone the project and access the folder

```shell
$ git clone https://github.com/danielmesquitta/nubank && cd nubank
```

### Run on android
With your emulator/device connected, run:

```shell
# Install the dependencies
$ yarn

# Start
$ yarn android

#If it doesn't start automatically, run the following and reopen the app
$ yarn start
```

### Run on ios

This app was made on a Linux computer, so if you want to run it on ios, you will need a MacOS to link the dependencies. 
First you should link [Vector Icons](https://github.com/oblador/react-native-vector-icons#ios) and [React native gesture handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#ios), than run ``pod install`` in the ios folder. 
After that, With your emulator/device connected, run:

```shell
# Install the dependencies
$ yarn

# Start
$ yarn ios

#If it doesn't start automatically, run the following and reopen the app
$ yarn start
```
