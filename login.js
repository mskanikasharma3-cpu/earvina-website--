// // Check if already logged in
// window.addEventListener('load', () => {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     if(loggedInUser) {
//         // Redirect to dashboard if already logged in
//         window.location.href = 'earnkaro_dashboard_with_nav.html';
//     }
// });

// // Function to save user in localStorage
// function saveUser(email, password, method="email", remember=false) {
//     let users = JSON.parse(localStorage.getItem("users") || "{}");
//     users[email] = { password: password, method: method }; // Save email/password/method
//     localStorage.setItem("users", JSON.stringify(users));

//     if(remember){
//         localStorage.setItem("loggedInUser", JSON.stringify({ email: email, method: method }));
//     }
// }

// // Function to check credentials
// function checkUser(email, password) {
//     let users = JSON.parse(localStorage.getItem("users") || "{}");
//     if(users[email]){
//         if(users[email].method === "google"){
//             return { success: true, message: "Logged in via Google!" };
//         } else if(users[email].password === password){
//             return { success: true, message: "Login successful!" };
//         } else {
//             return { success: false, message: "Incorrect password!" };
//         }
//     } else {
//         return { success: null, message: "User not found" }; // New user
//     }
// }

// // Email/Password login/signup form
// document.getElementById('email-login-form').addEventListener('submit', function(e){
//     e.preventDefault();

//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();
//     const remember = document.getElementById('rememberMe')?.checked || false;

//     let result = checkUser(email, password);

//     if(result.success === true){
//         saveUser(email, password, "email", remember);
//         alert(`🎉 ${result.message}`);
//         window.location.href = 'earnkaro_dashboard_with_nav.html';
//     } else if(result.success === false){
//         alert(`❌ ${result.message}`);
//     } else {
//         // New user → create account
//         saveUser(email, password, "email", remember);
//         alert(`🚀 Account created! Logged in as ${email}`);
//         window.location.href = 'earnkaro_dashboard_with_nav.html';
//     }
// });

// // Google Login Simulation
// function handleGoogleLogin() {
//     let googleEmail = prompt("Enter your Google email:");
//     if(googleEmail){
//         saveUser(googleEmail, "google", "google", true);
//         alert(`✅ Logged in with Google as ${googleEmail}`);
//         window.location.href = 'earnkaro_dashboard_with_nav.html';
//     }
// }

// // Debug button to show saved users in localStorage
// document.getElementById('show-saved').addEventListener('click', () => {
//     const out = document.getElementById('saved-output');
//     const users = JSON.parse(localStorage.getItem('users') || '{}');
//     const loggedIn = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

//     out.style.display = 'block';
//     out.textContent = 'LoggedInUser:\n' + JSON.stringify(loggedIn, null, 2) + 
//                       '\n\nAll Users:\n' + JSON.stringify(users, null, 2);
// });
