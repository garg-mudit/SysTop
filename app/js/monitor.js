const path = require('path');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const mem = osu.mem;
const os = osu.os;

//Set model
document.getElementById('cpu-model').innerHTML = cpu.model();

//Computer Name
document.getElementById('comp-name').innerHTML = os.hostname();

//OS
document.getElementById('os').innerHTML = `${os.type()} ${os.arch()}`;

//Total Mem
mem.info().then((info) => {
  document.getElementById('mem-total').innerHTML = `${info.totalMemMb}Mb`;
});
