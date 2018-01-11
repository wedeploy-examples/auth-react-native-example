import React, {Component} from 'react';
import {
  AppRegistry,
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import styles from '../styles/main';

import AuthHelper from '../helpers/auth';
import WeDeploy from 'wedeploy';

class SignIn extends Component {
  constructor() {
    super();

    this.auth = WeDeploy.auth(AuthHelper.url);
    this.state = {signedIn: false, user: null};
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL.bind(this));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL.bind(this));
  }

  handleOpenURL(event) {
    let authTokenIndex = event.url.indexOf('#access_token=');

    if (authTokenIndex > 0) {
      let authToken = event.url.substring(authTokenIndex + 14);

      this.auth
        .loadCurrentUser(authToken)
        .then(user => {
          console.log(user);
          this.setState(previousState => {
            return { signedIn: true, user: user };
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    if (this.state.signedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>Successfully signed-in!</Text>
          <Text style={styles.baseText}>Name "{this.state.user.name}"</Text>
          <Text style={styles.baseText}>Email: {this.state.user.email}</Text>
          <Text style={styles.baseText}>Id: {this.state.user.id}</Text>
          <Button
              containerStyle={styles.buttonContainer}
              onPress={this.signOut.bind(this)}
              style={styles.button}
            >
              Sign-out
            </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>Sign-in using one of the providers:</Text>
          <Button
            containerStyle={styles.buttonContainer}
            onPress={this.signInGithub.bind(this)}
            style={styles.button}
          >
            Sign-in with Github
          </Button>
          <Button
            containerStyle={styles.buttonContainer}
            onPress={this.signInGoogle.bind(this)}
            style={styles.button}
          >
            Sign-in with Google
          </Button>
        </View>
      );
    }
  }

  openURL(authUrl) {
    Linking.canOpenURL(authUrl)
      .then(supported => {
        if (supported) {
          return Linking.openURL(authUrl);
        } else {
          console.error('Failed to open URI:', authUrl);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  signInGithub() {
    let githubProvider = new this.auth.provider.Github();
    githubProvider.setProviderScope('user:email');
    githubProvider.setRedirectUri('myapp://');

    let authUrl = githubProvider.makeAuthorizationUrl(AuthHelper.url);

    this.openURL(authUrl);
  }

  signInGoogle() {
    const googleProvider = new this.auth.provider.Google();
    googleProvider.setProviderScope("email");
    googleProvider.setRedirectUri('myapp://');

    let authUrl = googleProvider.makeAuthorizationUrl(AuthHelper.url);

    this.openURL(authUrl);
  }

  signOut() {
    this.auth.signOut()
      .then(() => {
        this.setState(previousState => {
          return { signedIn: false, user: null };
        });
      })
      .catch((error) => {
        console.error('Error signing out', error);
      });

  }
}

export default SignIn;