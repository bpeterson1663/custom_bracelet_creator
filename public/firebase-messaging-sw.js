const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;

importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: MESSAGING_SENDER_ID
});
const messaging = firebase.messaging();