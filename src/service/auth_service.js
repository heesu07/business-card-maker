import {firebaseAuth, githubProvider, googleProvider } from './firebase';


class AuthService {
  getProvider(providerName){
    switch(providerName){
      case 'Google':
        return  googleProvider;
      case 'Github':
        return  githubProvider;
      default:
        throw new Error(`${providerName} is not supported!`);
    }
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    });
  }

  
}

export default AuthService;
