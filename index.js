const qr = require('qrcode-terminal');

console.log(qr.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA2;P:SocialD3$K09F;'));

const vcard = `BEGIN:VCARD
VERSION:4.0
N:Aaron Magno
EMAIL;type=WORK:aaron.magno@siteminder.com
TEL;type=phone:+639054293375
END:VCARD`;

console.log(qr.generate(vcard));
