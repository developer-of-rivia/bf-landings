/* imports */
let Client = require('ssh2-sftp-client');
let sftp = new Client();
let fs = require('fs');
let path = require('path');
/* code */
const dotenvPath = path.join(__dirname, '..', '.env');
require('dotenv').config({path: dotenvPath});

const config = {
  host: '5.188.119.137',
  port: 22,
  username: 'landinguser',
  privateKey: fs.readFileSync('landinguser'),
  passphrase: 'oloref91',       // Optional.
};

const options = {
  useFastget: true,
  filter: (item) => {
    // console.log(item.includes('images'));

    // return item.type !== 'modern-landings/botfaqtor/dist/images';

    // return !item.name.startsWith('images');

    // const excludeRegex = /^exclude_/;
    // return !excludeRegex.test(file.name);

    const excludedDirectory = 'images';
    return !item.includes(`/${excludedDirectory}/`);
  }
}

async function main() {
  const client = new Client('upload-test');
  const dst = 'modern-landings-backups';
  const src = 'modern-landings';

  try {
    await client.connect(config);
    client.on('download', info => {
console.log(`Listener: Download ${info.source}`);
    });
    let rslt = await client.downloadDir(src, dst, options);
    return rslt;
  } finally {
    client.end();
  }
}

main()
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(`main error: ${err.message}`);
  });



/* тоже самое, но возможно медленее */
// sftp.connect({
//   host: '5.188.119.137',
//   port: 22,
//   username: 'landinguser',
//   // password: '******'
//   privateKey: fs.readFileSync('landinguser'),
//   passphrase: 'oloref91',       // Optional.
//   // localPath: `modern-landings-backups`,               // Required, Absolute or relative to cwd.
//   // remoteDir: `modern-landings`,      // Required, Absolute path only.
// }).then(() => {
//   return sftp.downloadDir('modern-landings', 'modern-landings-backups', options)
// });
// let options = {
//   useFastget: true,
// }