// public/sw.js

let inactivityTimeout;
let timeoutPeriod = 30000; // 30 seconds
let remainingTime = timeoutPeriod;

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  self.clients.claim();
  updateNetworkStatus();
});

self.addEventListener('message', (event) => {
  if (event.data === 'resetTimeout') {
    resetInactivityTimeout();
  }
});

function resetInactivityTimeout() {
  if (inactivityTimeout) {
    clearTimeout(inactivityTimeout);
  }

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

function updateNetworkStatus() {
  const status = navigator.onLine ? 'online' : 'offline';
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'network-status', status });
    });
  });
}

// Listen for online and offline events
self.addEventListener('online', updateNetworkStatus);
self.addEventListener('offline', updateNetworkStatus);
