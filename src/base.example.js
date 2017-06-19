import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp(config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR-APP.firebaseapp.com",
    databaseURL: "https://YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "YOUR-APP.appspot.com",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
})

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()

const db = database(app)

export default Rebase.createClass(db)