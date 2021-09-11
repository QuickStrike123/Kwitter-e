const firebaseConfig = {
      apiKey: "AIzaSyCeaEh72UFmUg_rR4mHR6IWWjj-gRpLouo",
      authDomain: "kwitter-d3827.firebaseapp.com",
      databaseURL: "https://kwitter-d3827-default-rtdb.firebaseio.com",
      projectId: "kwitter-d3827",
      storageBucket: "kwitter-d3827.appspot.com",
      messagingSenderId: "851858381403",
      appId: "1:851858381403:web:e51c7c68d21bbd2d1f3d7e"
    };
  
    firebase.initializeApp(firebaseConfig);

    UserName = localStorage.getItem("User");

    RoomName = localStorage.getItem("RoomName");

    function Send(){

      msg = document.getElementById("MSG").value;

      firebase.database().ref(RoomName).push({

            name:UserName,

            message:msg,

            likes:0

      });

      document.getElementById("MSG").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
