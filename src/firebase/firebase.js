import app from 'firebase/app';
import 'firebase/auth';

import config from './config';

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    createUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    signInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => {
        return this.auth.signOut();
    }
}

export default Firebase;