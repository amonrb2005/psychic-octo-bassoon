document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  // Validação com seus dados definidos
  if (username === 'jackpreo' && password === 'Invadm') {
    message.textContent = '✅ Login successful!';
    message.style.color = '#00ff88';

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    message.textContent = '❌ Invalid username or password.';
    message.style.color = '#ffd700';
  }
});
