const mineflayer = require('mineflayer');

function bot() {
  const bot = mineflayer.createBot({
    host: process.env['host'],
    username: process.env['username']
  });

  bot.on('spawn', () => {
    console.log('run');
  });

  bot.on('end', () => {
    new Promise(resolve => setTimeout(resolve, 3 * 1000));
    bot();
  });
}

bot();
