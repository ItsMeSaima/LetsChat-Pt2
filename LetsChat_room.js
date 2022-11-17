user_name = localStorage.getItem("user_name");
document.getElementById("welcoming_user").innerHTML = "Welcome, " + user_name + "!";

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFtVn-iRZk4XESz14IJAmiXxwuuuAxjE8",
    authDomain: "project-94-3a6c6.firebaseapp.com",
    databaseURL: "https://project-94-3a6c6-default-rtdb.firebaseio.com",
    projectId: "project-94-3a6c6",
    storageBucket: "project-94-3a6c6.appspot.com",
    messagingSenderId: "561790441899",
    appId: "1:561790441899:web:a8b82b3bf8065704b7daee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)




firebase.initializeApp(firebaseConfig);
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
    });});}
 getData();

  function addRoom()
  {
        room_name= document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);
        document.getElementById("room_name").innerHTML= "";
    }