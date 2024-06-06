// public/sw.js

let inactivityPreTimeout;
let inactivityTimeout;
let preTimeoutPeriod = 600000; // 10 minutes
let timeoutPeriod = 30000; // 30 seconds
let remainingTime = timeoutPeriod;

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data === 'resetTimeout') {
    resetInactivityPreTimeout();
  }
});

function resetInactivityPreTimeout() {
  if (inactivityPreTimeout) {
    clearTimeout(inactivityPreTimeout);
  }
  if (inactivityTimeout) {
    clearInterval(inactivityTimeout);
  }

  inactivityPreTimeout = setTimeout(() => {
    startInactivityTimeout();
  }, preTimeoutPeriod);
}

function startInactivityTimeout() {
  remainingTime = timeoutPeriod;

  inactivityTimeout = setInterval(() => {
    remainingTime -= 1000;
    console.log(`Remaining time: ${remainingTime / 1000} seconds`);
    updateTimer();

    if (remainingTime <= 0) {
      clearInterval(inactivityTimeout);
      logoutUser();
    }
  }, 1000);
}

function logoutUser() {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('logout');
    });
  });
}

function updateTimer() {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'timer', remainingTime });
    });
  });
}
