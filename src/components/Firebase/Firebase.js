import app from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC5MYwlny59_049rQtTT4uaTn5qtzd1ZZQ",
    authDomain: "contactform-3ff6f.firebaseapp.com",
    databaseURL: "https://contactform-3ff6f.firebaseio.com",
    projectId: "contactform-3ff6f",
    storageBucket: "contactform-3ff6f.appspot.com",
    messagingSenderId: "625068601394",
    appId: "1:625068601394:web:10e5d591193f8eb3"
  };
  

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
    }
    // Auth API
    doCreateUserWithEmailAndPassword=(email,password)=>
      this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword=(email,password)=>
      this.auth.signInWithEmailAndPassword(email,password);

    doSignOut=()=>this.auth.signOut();
    doSignOut = () => this.auth.signOut();
    doPasswordReset=email=>this.auth.sendPasswordResetEmail(email);

    dopasswordUpdate=password=>this.auth.currentUser.updatePassword(password)
}

export default Firebase