[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/auth-react-native-example)

# WeDeploy Auth

An example of [WeDeploy Auth](https://wedeploy.com/docs/auth/) on React Native.

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
