function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
  const container = document.querySelector('.container');
  container.classList.toggle('dark-theme');

  const lightMode = document.getElementById('lightMode');
  const darkMode = document.getElementById('darkMode');

  lightMode.style.display = lightMode.style.display === 'block' ? 'none' : 'block';
  darkMode.style.display = darkMode.style.display === 'block' ? 'none' : 'block';
}
