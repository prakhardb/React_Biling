import Rebase from 're-base';
import firebase from 'firebase';

const  firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCXgZd7N-3H7EtenXJrO70YFs-rAP4rA6E",
        authDomain: "reactinventory.firebaseapp.com",
        databaseURL: "https://reactinventory.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//Named export
export { firebaseApp };

// this is a default export

export default base;