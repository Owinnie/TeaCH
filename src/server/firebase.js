import firebase from "firebase/app";
import database from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyDmKhvIs0vCXBhF6YYTBGs2Zhc6P7F-edo',
    databaseURL: 'https://teach-ed7ab-default-rtdb.firebaseio.com',
};
firebase.initializeApp(firebaseConfig);

let dbRef = firebase.database().ref();

export let connRef = firebase.database().ref(".info/connected");

export const userName = prompt('Enter your name:');

// get current room id
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('id');

// update dbRef based on the room id else create new room with roomId
if (roomId) {
    dbRef = dbRef.child(roomId);
} else {
    dbRef = dbRef.push();
    window.history.replaceState(null, 'TeaCH', `?id=${dbRef.key}`);
}

export default dbRef;