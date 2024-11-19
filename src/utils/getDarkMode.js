export async function getDarkMode(id, deep = false) {
  let theme = localStorage.getItem('color-mode')
    ? localStorage.getItem('color-mode')
    : null;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (theme === 'light') {
    document.documentElement.classList.add('light');
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    theme = event.matches ? 'dark' : 'light';

    if (localStorage.getItem('color-mode') === null) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  });
}
