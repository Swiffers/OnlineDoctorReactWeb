import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDCozJ--F6g1nGzsxstmGXAm0Tfe39LVrc",
    authDomain: "onlinedoctorproject.firebaseapp.com",
    databaseURL: "https://onlinedoctorproject.firebaseio.com",
    projectId: "onlinedoctorproject",
    storageBucket: "onlinedoctorproject.appspot.com",
    messagingSenderId: "298997965467",
    appId: "1:298997965467:web:1b2070c19b10333d"
};
firebase.initializeApp(config);
export default firebase;