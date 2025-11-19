// Load Users
let users = JSON.parse(localStorage.getItem("usersList")) || [];

function loadUsers() {
    let table = "";
    let india = 0;

    users.forEach((u, i) => {

        if (u.country === "India") india++;

        table += `
            <tr>
                <td>${u.fname} ${u.lname}</td>
                <td>${u.email}</td>
                <td>${u.phone}</td>
                <td>${u.username}</td>
                <td>${u.country}</td>
                <td>${u.createdAt}</td>
                <td>
                    <button onclick="viewDetails(${i})">View</button>
                    <button onclick="deleteUser(${i})" style="background:red;color:white;">Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("userTable").innerHTML = table;
    document.getElementById("totalUsers").innerHTML = users.length;
    document.getElementById("indiaCount").innerHTML = india;
    document.getElementById("otherCount").innerHTML = users.length - india;
}

// View Popup
function viewDetails(i) {
    const u = users[i];
    document.getElementById("popupDetails").innerHTML = `
        <p><b>Name:</b> ${u.fname} ${u.lname}</p>
        <p><b>Email:</b> ${u.email}</p>
        <p><b>Phone:</b> ${u.phone}</p>
        <p><b>Username:</b> ${u.username}</p>
        <p><b>Country:</b> ${u.country}</p>
        <p><b>Created:</b> ${u.createdAt}</p>
    `;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Delete User
function deleteUser(i) {
    if (confirm("Delete this user?")) {
        users.splice(i, 1);
        localStorage.setItem("usersList", JSON.stringify(users));
        loadUsers();
    }
}

// Search
function filterUsers() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll("#userTable tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(q) ? "" : "none";
    });
}

// Sidebar Toggle
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
}

// Theme Menu
function toggleThemeMenu() {
    document.getElementById("themeMenu").style.display =
        document.getElementById("themeMenu").style.display === "block" ? "none" : "block";
}

// Theme Switcher
function changeTheme(theme) {
    const file = `themes/theme-${theme}.css`;
    document.getElementById("themeStylesheet").href = file;
    localStorage.setItem("selectedTheme", file);
}

// Load Saved Theme
window.onload = () => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) document.getElementById("themeStylesheet").href = savedTheme;
    loadUsers();
};
