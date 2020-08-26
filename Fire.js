import firebase from "firebase";
class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDMNKHXY2UO52FEsktFQaNrFU-5AlU4fuA",
        authDomain: "chat-app-3f511.firebaseapp.com",
        databaseURL: "https://chat-app-3f511.firebaseio.com",
        projectId: "chat-app-3f511",
        storageBucket: "chat-app-3f511.appspot.com",
        messagingSenderId: "201750852737",
        appId: "1:201750852737:web:d28daa6abd328e5e858980",
        measurementId: "G-N05HWNSD3X",
      });
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };
  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: "Billy",
      };
      //console.log("what is ", item.user);
      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);
    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };
  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}
export default new Fire();
