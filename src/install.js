const guide = document.getElementById('app-guide');
const guideTitle = document.getElementById('guide-title');
const installButton = document.getElementById('install-open');
const standalone = matchMedia('(display-mode: standalone)');
let installPrompt;

function showGuide(sectionId) {
  guide.showModal();
  if (sectionId) {
    document.getElementById(sectionId).focus();
  } else {
    guide.scrollTop = 0;
    guideTitle.focus({ preventScroll: true });
  }
}

function updateInstallButton() {
  installButton.hidden = standalone.matches || navigator.standalone === true;
}

document.getElementById('guide-open').addEventListener('click', () => showGuide());
guideTitle.tabIndex = -1;
for (const link of guide.querySelectorAll('.guide-nav a')) {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById(link.hash.slice(1)).focus();
  });
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
});
window.addEventListener('appinstalled', () => {
  installPrompt = undefined;
  installButton.hidden = true;
});
standalone.addEventListener('change', updateInstallButton);
updateInstallButton();
installButton.addEventListener('click', async () => {
  if (!installPrompt) {
    showGuide('guide-install');
    return;
  }
  const prompt = installPrompt;
  installPrompt = undefined;
  try {
    await prompt.prompt();
  } catch {
    showGuide('guide-install');
  }
});

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('./sw.js', document.baseURI))
      .catch(error => console.warn('Service worker registration failed:', error));
  });
}
