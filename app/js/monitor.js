const path = require('path');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const mem = osu.mem;
const os = osu.os;

let cpuOverload = 10;

//Run every 2 seconds
setInterval(() => {
  //CPU Usage
  cpu.usage().then((info) => {
    document.getElementById('cpu-usage').innerHTML = info + '%';

    document.getElementById('cpu-progress').style.width = info + '%';

    //Make progressbar red if overload
    if (info > cpuOverload) {
      document.getElementById('cpu-progress').style.background = 'red';
    } else {
      document.getElementById('cpu-progress').style.background = '#30c88b';
    }
  });

  //CPU Free
  cpu.free().then((info) => {
    document.getElementById('cpu-free').innerHTML = info + '%';
  });

  //Uptime
  document.getElementById('sys-uptime').innerHTML = secondsToDhms(os.uptime());
}, 2000);

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

//Show days, hours, mins, sec
function secondsToDhms(seconds) {
  seconds = +seconds;
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d, ${h}h, ${m}m, ${s}s`;
}
