<?php
  $username = $_POST['username'] ?? '';
  $password = $_POST['password'] ?? '';

  // Seus dados fixos
  $validUsername = 'jackpreo';
  $validPassword = 'Invadm';

  if ($username === $validUsername && $password === $validPassword) {
    header('Location: dashboard.html');
  } else {
    header('Location: index.html?error=1');
  }
?>