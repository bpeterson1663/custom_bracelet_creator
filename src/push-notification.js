import firebase from 'firebase';
import axios from 'axios';
const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGING_SENDER_ID;
const SERVER_KEY = process.env.REACT_APP_SERVER_KEY;
export const initializeFirebase = () => {
    firebase.initializeApp({
        messagingSenderId: MESSAGING_SENDER_ID
    });
};

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();

      const message = {
        "notification": {
            "title": "Firebase",
            "body": "Firebase is awesome",
            "click_action": "http://localhost:3000/",
            "icon": "http://url-to-an-icon/icon.png"
        },
        "to": token,
      };
      const headers = {
        "Content-Type": "application/json",
            "Authorization": "key="+SERVER_KEY
      }
      axios.post("https://fcm.googleapis.com/fcm/send", message, {headers: headers})
      return token;
    } catch (error) {
      console.error(error);
    }
};