import { deploy}  from 'sftp-sync-deploy';

let config = {
    host: '5.188.119.137',            // Required.
    port: 22,                       // Optional, Default to 22.
    username: 'landinguser',               // Required.
    // password: 'password',           // Optional.
    privateKey: 'landinguser', // Optional.
    passphrase: 'oloref91',       // Optional.
    // agent: '/path/to/agent.sock',   // Optional, path to the ssh-agent socket.
    localDir: 'botfaqtor/dist',               // Required, Absolute or relative to cwd.
    remoteDir: 'da',      // Required, Absolute path only.
};
 
let options = {
 dryRun: false,                  // Enable dry-run mode. Default to false
 exclude: [                      // exclude patterns (glob)
    'node_modules',
    'src/**/*.spec.ts'
  ],
 excludeMode: 'remove',          // Behavior for excluded files ('remove' or 'ignore'), Default to 'remove'.
 forceUpload: false              // Force uploading all files, Default to false(upload only newer files).
};
 
deploy(config, options).then(() => {
  console.log('success!');
}).catch(err => {
  console.error('error! ', err);
})