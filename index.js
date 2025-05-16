const mineflayer = require('mineflayer');
const keep_alive = require('./keep_alive.js');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env['host'],
    username: process.env['username']
  });

  bot.on('spawn', () => {
    console.log('Bot spawned!');
    bot.chat('/register password123 password123');
    bot.chat('/login password123');
  });

  bot.on('end', async () => {
    console.log('Bot disconnected. Reconnecting in 5 seconds...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    createBot(); // Recursively restart bot
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
  });
}

createBot();
