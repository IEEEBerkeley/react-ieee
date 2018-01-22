const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
process.env.PORT = 80;
require('child_process').spawn('npm', args, opts);
