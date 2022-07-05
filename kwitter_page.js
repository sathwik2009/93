//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      });
       document.getElementById("msg").value="";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
