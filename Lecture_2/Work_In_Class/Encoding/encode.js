let raw_data = 'stackabuse.com';
let raw_buff = Buffer.from(raw_data);
let base64data = raw_buff.toString('base64');

console.log('"' + raw_data + '" converted to Base64 is "' + base64data + '"');

// let encoded_data = 'c3RhY2thYnVzZS5jb20=';
// let buff = new Buffer(encoded_data, 'base64');
let buff = Buffer.from(base64data, 'base64');
let text = buff.toString('utf-8');

console.log('"' + base64data + '" converted from Base64 to UTF-8 is "' + text + '"');

// Marshalling -- some kind of serializing when you wnat to transfer and object from client to server (ex. if you want to transfer a Java object from one app to another, or stringify json in the fetch in node)


atob() // string to base64
btoa()