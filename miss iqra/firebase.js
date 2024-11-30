import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import    { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAOk_Pcj3mZUaaCBpzGzWPh-rZr6Z1N0sk",
    authDomain: "doctor-app-6b25b.firebaseapp.com",
    projectId: "doctor-app-6b25b",
    storageBucket: "doctor-app-6b25b.firebasestorage.app",
    messagingSenderId: "636903787703",
    appId: "1:636903787703:web:d18816564b2f0c3da59132",
    measurementId: "G-B1YJQ99C5D"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let signUp = ()=>{
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user); 
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    let sign_up = document.getElementById("sign_up")
    sign_up.addEventListener("click",signUp)
    
    let signIn=()=>{
      let email = document.getElementById("email").value
      let password = document.getElementById("password").value
    
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code); 
      });
    }
    let sign_in = document.getElementById("sign_in")
    sign_in.addEventListener("click",signIn)
    