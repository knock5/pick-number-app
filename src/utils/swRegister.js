const { Workbox } = require('workbox-webpack-plugin');

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak didukung browser ini.');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker berhasil didaftarkan.');
  } catch (error) {
    console.log('Service worker gagal didaftarkan.');
  }
};

module.exports = swRegister;
