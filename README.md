# WeDeploy Auth [![Badge](https://img.shields.io/badge/built%20with-wedeploy-00d46a.svg?style=flat)](http://wedeploy.com)

An example of [WeDeploy Auth](https://wedeploy.com/docs/auth/) on React Native.

# Instructions

1. Install the [WeDeploy CLI](https://wedeploy.com/docs/intro/using-the-command-line/).
2. Clone this repository.
3. Open the project with your command line and run `we deploy -p yourproject`.
4. In your command line run `npm install -g react-native-cli`.
5. Navigate to `TestAuth` folder and execute `npm i`.
6. Load [auth.js](https://github.com/wedeploy-examples/auth-react-native-example/blob/master/TestAuth/helpers/auth.js#L2) file in a text editor and replace `<project-name>` with the name of the project you choose in step 2 (`yourproject`). For example, if the project is called `testrnauth`, the data URL should look like `auth-testrnauth.wedeploy.io`.
7. Setup app client id and client secret for this example application. It uses Google and GitHub as providers and you may read how to register your application to Google [here](https://wedeploy.com/docs/auth/sign-in-with-google/) and for GitHub [here](https://wedeploy.com/docs/auth/sign-in-with-github/). Please be aware this example assumes the id and the secret are added [using the Console](https://wedeploy.com/docs/intro/environment-variables/#2).
8. Run `react-native run-ios` or `react-native run-android`.

## How to use Auth in React Native?

Using Auth API doesn't differ from using it on Web. However, for React Native two additional steps have to be performed:

1. Define Custom URL scheme.
2. [Linking](https://facebook.github.io/react-native/docs/linking.html) to interact with incoming and outgoing app links.

### iOS

To set custom URL scheme and enable interacting with incoming and outgoing app links, check [this](https://github.com/wedeploy/boilerplate-auth/commit/4f332d0f66fb496106c5495c245d0075b52b235a) commit.

For setting custom URL scheme you may refer to the [official documentation](https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html)

For Linking, check its [official documentation]((https://facebook.github.io/react-native/docs/linking.html)).

### Android

To set custom URL scheme and enable interacting with incoming and outgoing app links, check [this](https://github.com/wedeploy/boilerplate-auth/commit/8e0f3486c32fe91feef1e06f969826c904c22499) commit.

For setting custom URL scheme you may refer to the [official documentation](https://developer.android.com/training/basics/intents/filters.html)

## License

[BSD-3-Clause](./LICENSE.md), © Liferay, Inc.
