// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

// Logout button
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    alert('Logged out successfully!');
    window.location.href = 'index.html'; // Replace with login page
});

// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const logoutBtn = document.getElementById('logout-btn');
  const content = document.querySelector('.content');

  // -------- Theme handling (persisted) --------
  const storedTheme = localStorage.getItem('siteTheme') || 'light';
  setTheme(storedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = body.classList.contains('light') ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('siteTheme', newTheme);
  });

  function setTheme(theme) {
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    themeToggleBtn.textContent = theme === 'light' ? 'Dark mode' : 'Light mode';
  }

  // -------- Load user & render profile --------
  const user = loadCurrentUser();

  if (!user) {
    // अगर आप चाहें तो यहाँ redirect कर सकते हैं:
    // window.location.href = 'login.html';
    // अभी demo user create करके दिखा रहा हूँ ताकि पेज खाली न दिखे
    const demo = createDemoUser();
    localStorage.setItem('currentUser', JSON.stringify(demo));
    renderProfile(demo);
  } else {
    renderProfile(user);
  }

  // -------- Logout handling --------
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    // आप चाहें तो redirect कर दें:
    window.location.href = 'login.html'; // change if your login page has different name
  });

  // ------------ Functions ------------

  function loadCurrentUser() {
    try {
      const raw = localStorage.getItem('currentUser');
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      console.error('Failed to parse currentUser from localStorage', err);
      return null;
    }
  }

  function renderProfile(userData) {
    // sanitize & fallback
    const name = userData.name || 'Unknown';
    const email = userData.email || '—';
    const joined = userData.joined ? formatDate(userData.joined) : '—';
    const phone = userData.phone || '—';
    const username = userData.username || (email.split('@')[0] || 'user');

    // Build HTML (you can style these classes in Dashboard.css)
    content.innerHTML = `
      <h1>Profile</h1>
      <div class="profile-top">
        <div class="avatar">
          ${userData.avatarUrl ? `<img src="${userData.avatarUrl}" alt="avatar" />` : `<div class="avatar-placeholder">${(name[0] || 'U').toUpperCase()}</div>`}
        </div>
        <div class="basic">
          <h2 class="name">${escapeHtml(name)}</h2>
          <p class="username">@${escapeHtml(username)}</p>
        </div>
      </div>

      <div class="card">
        <h3>Name:</h3>
        <p>${escapeHtml(name)}</p>
      </div>
      <div class="card">
        <h3>Email:</h3>
        <p>${escapeHtml(email)}</p>
      </div>
      <div class="card">
        <h3>Phone:</h3>
        <p>${escapeHtml(phone)}</p>
      </div>
      <div class="card">
        <h3>Joined:</h3>
        <p>${escapeHtml(joined)}</p>
      </div>

      <div style="margin-top:16px;">
        <button id="edit-profile-btn" class="small-btn">Edit Profile</button>
      </div>
    `;

    // Edit button example (optional)
    const editBtn = document.getElementById('edit-profile-btn');
    editBtn.addEventListener('click', () => {
      // simple prompt-based edit (replace with a modal/form as needed)
      const newName = prompt('New name', name);
      if (newName) {
        userData.name = newName;
        localStorage.setItem('currentUser', JSON.stringify(userData));
        renderProfile(userData);
      }
    });
  }

  function formatDate(dateLike) {
    // Accepts ISO string, timestamp, or Date object
    const d = (dateLike instanceof Date) ? dateLike : new Date(dateLike);
    if (isNaN(d)) return dateLike; // fallback
    // Example: 22 July 2006
    const day = d.getDate();
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function createDemoUser() {
    // Demo data — आप इसे signup flow में से आने वाले object के रूप में बदल दें
    return {
      name: 'Kanika Sharma',
      email: 'kanika@example.com',
      phone: '+91-9876543210',
      username: 'kanika.sharma',
      joined: '2006-07-22T17:00:00', // ISO or timestamp
      avatarUrl: '' // optional image url
    };
  }

  // Small HTML escape to avoid injection if you ever store raw user input
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
});
