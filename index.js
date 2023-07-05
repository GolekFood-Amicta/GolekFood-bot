const qrcode = require('qrcode-terminal');

const puppeteer = require('puppeteer');

puppeteer.launch({ executablePath: '/path/to/chrome' });

const { Client, LocalAuth, MessageMedia, AuthStrategy } = require('whatsapp-web.js');
const client = new Client({
    AuthStrategy: new LocalAuth(),
    puppeter: {headless : false}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});

client.on('message', message =>{
    if(message.body === '!help'){
        message.reply('konsol');
    }

});


client.initialize();
 