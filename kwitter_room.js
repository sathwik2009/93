
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"
function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}