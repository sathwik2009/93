const firebaseConfig = {
    apiKey: "AIzaSyDvK8ynqLs4JussHLz3xueYKYjgidVOqSw",
    authDomain: "kwitter-4f4d3.firebaseapp.com",
    databaseURL: "https://kwitter-4f4d3-default-rtdb.firebaseio.com",
    projectId: "kwitter-4f4d3",
    storageBucket: "kwitter-4f4d3.appspot.com",
    messagingSenderId: "997722063457",
    appId: "1:997722063457:web:f27a4d30c0ad8d68846020"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser() {
      user_name=document.getElementById("user_name").value;
      localStorage.setItem("user_name", user_name);
      window.location="kwitter_room.html";
  }