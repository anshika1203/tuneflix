import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyB-JCau7W8KUcsXeXyOsqLrrTa3IiClpYA",
//   authDomain: "tuneflixapp.firebaseapp.com",
//   databaseURL: "https://tuneflixapp-default-rtdb.firebaseio.com",
//   projectId: "tuneflixapp",
//   storageBucket: "tuneflixapp.appspot.com",
//   messagingSenderId: "979852384295",
//   appId: "1:979852384295:web:00bbce926b0aa6177f9602",
//   measurementId: "G-0J0EN04142"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCJAwAt1Dn8_83XFBK-iDPm2TUR8-ZgTLU",
  authDomain: "tuneflix-4d6bd.firebaseapp.com",
  databaseURL: "https://tuneflix-4d6bd-default-rtdb.firebaseio.com/",
  projectId: "tuneflix-4d6bd",
  storageBucket: "tuneflix-4d6bd.appspot.com",
  messagingSenderId: "180846159251",
  appId: "1:180846159251:web:8848c59f475e52da0bf466",
  measurementId: "G-6QWE0YNTVC",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
