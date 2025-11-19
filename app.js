// // ====== Firebase config (replace with your own) ======
// // ====== Firebase config (replace with your own) ======
// const firebaseConfig = {
//   apiKey: "AIzaSyA7Ml8CPcOhF5Iisln06lhdAXl50Iz_Q2Y",
//   authDomain: "kanika-project-783cb.firebaseapp.com",
//   projectId: "kanika-project-783cb",
//   storageBucket: "kanika-project-783cb.firebasestorage.app",
//   messagingSenderId: "348837949715",
//   appId: "1:348837949715:web:acfc2c7dbcef49d4c16ae6",
//   measurementId: "G-MB3PGG4L3V"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// // DOM elements
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const signupBtn = document.getElementById('signupBtn');
// const loginBtn = document.getElementById('loginBtn');
// const googleBtn = document.getElementById('googleBtn');
// const signOutBtn = document.getElementById('signOutBtn');
// const messageP = document.getElementById('message');
// const userArea = document.getElementById('user-area');
// const authArea = document.getElementById('auth-area');
// const welcomeP = document.getElementById('welcome');

// // Helper to show messages
// function showMessage(text, isError = false) {
//   messageP.textContent = text;
//   messageP.style.color = isError ? '#e74c3c' : '#2b8a3e';
//   // Clear message after 4 seconds
//   setTimeout(() => {
//     messageP.textContent = '';
//   }, 4000);
// }

// // Sign up with email/password
// signupBtn.addEventListener('click', async () => {
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();
//   if (!email || !password) { showMessage('Enter email and password', true); return; }
//   try {
//     const userCred = await auth.createUserWithEmailAndPassword(email, password);
//     // UI will be updated by the onAuthStateChanged listener
//     showMessage('Signup successful. Logged in as ' + userCred.user.email);
//   } catch (err) {
//     showMessage(err.message, true);
//   }
// });

// // Login with email/password
// loginBtn.addEventListener('click', async () => {
//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();
//   if (!email || !password) { showMessage('Enter email and password', true); return; }
//   try {
//     const userCred = await auth.signInWithEmailAndPassword(email, password);
//     // UI will be updated by the onAuthStateChanged listener
//     showMessage('Login successful. Welcome ' + userCred.user.email);
//   } catch (err) {
//     showMessage(err.message, true);
//   }
// });

// // Google Sign-in
// googleBtn.addEventListener('click', async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     // Use signInWithRedirect or signInWithPopup
//     const result = await auth.signInWithPopup(provider);
//     const user = result.user;
//     // UI will be updated by the onAuthStateChanged listener
//     showMessage('Welcome ' + (user.displayName || user.email));
//   } catch (err) {
//     showMessage(err.message, true);
//   }
// });

// // Sign out
// signOutBtn.addEventListener('click', async () => {
//   try {
//     await auth.signOut();
//     showMessage('Signed out');
//     // UI will be updated by the onAuthStateChanged listener
//   } catch (err) {
//     showMessage(err.message, true);
//   }
// });

// /**
//  * Auth state listener - Updates UI based on login status.
//  * This is the core logic for showing/hiding the login/welcome areas.
//  */
// auth.onAuthStateChanged(user => {
//   if (user) {
//     // User is logged in
//     welcomeP.textContent = `Hello, ${user.displayName || user.email}!`;
//     userArea.classList.remove('hidden'); // Show Welcome Area
//     authArea.classList.add('hidden');    // Hide Login/Signup Area
//   } else {
//     // User is logged out
//     userArea.classList.add('hidden');    // Hide Welcome Area
//     authArea.classList.remove('hidden'); // Show Login/Signup Area
//   }
// });


