export async function getDarkMode() {
  let theme = localStorage.getItem('color-mode')
    ? localStorage.getItem('color-mode')
    : null;

  if (theme == null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  }

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.add('light');
  }
}
