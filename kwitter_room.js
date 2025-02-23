
//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyDeuafiFXk0Zn7BozIdpzzRU9N0YKJOmD0",
    authDomain: "kwitter-5c90b.firebaseapp.com",
    databaseURL: "https://kwitter-5c90b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c90b",
    storageBucket: "kwitter-5c90b.appspot.com",
    messagingSenderId: "569721167278",
    appId: "1:569721167278:web:a6629dec24d9fd2a47fc3f",
    measurementId: "G-C1W8KSHFYT"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
