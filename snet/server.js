const Y = d,
  X = c,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x10 * 0xd3 + 0xf97 + -0x1cc6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x5f * 0x39 + 0x157 * 0x11 + -0x1a0), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9f94 + 0x17fb + -0x425f + (-0x3efe * 0x1 + -0x22dd + -0x9c73 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(0x47f + -0x3a * 0xd + 0x11fb + (0x18b0 + 0x1d * 0x105 + -0xf31) * random()), -0x2a * 0x42 + 0x21dd + -0x1708;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x67 * 0xf + 0x6d + 0xc92 * 0x2), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x13f9 + -0x1720 + 0x328;
}
async function randomWait() {
  return await wait(0x1 * 0x23c9 + 0x210b + -0x314c + (0x1eba + -0x137b * -0x1 + -0x1 * 0x1ead) * random()), -0x2478 + 0x606 + 0x1e73;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xec3 + 0x21a2 + 0x1 * -0x12df, 0x210a + 0x2 * 0xe5e + -0x3dbf), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1a355 + 0x17b3 * -0x1 + 0x2a568) * getRandomInt(-0x32 * -0xbf + -0x65 + -0x24e7, -0xe2 * 0x1 + -0x23c4 + -0x1 * -0x24ab), h)), -0x25e2 + -0x397 + -0x297a * -0x1;
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
      j = 0x1 * 0x1ab7 + 0x593 * 0x1 + 0x2 * -0x1025;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x164 + -0x59a * 0x2 + 0xc99]['split']('\x20');
    for (let k = 0x549 + 0x25b * 0x4 + -0xeb5; k < i['length']; k += 0x1 * 0x1105 + -0x18 * -0x8b + -0x1e0b)
      j += i[k] * h[i[k + (0x9b5 + 0x875 * 0x2 + -0x1a9e)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1b68 + -0x1506 + -0x4a * 0x16)['map'](l => Array['from'](l['children']))['flat'](0xde + -0x1 * -0x458 + -0x535)['map'](l => l['childNodes'][-0x5 * 0x599 + -0xb * -0x113 + 0x102d]['childNodes'][0x8 * 0x291 + 0x828 + -0x18 * 0x132]['childNodes'][0x1049 + 0xa * 0x36a + 0x39a * -0xe]['childNodes'][-0x2632 + 0x200f + 0x623]['childNodes'][0x9bf + -0x1f34 * 0x1 + 0x1576]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xc7 * 0x17 + 0x404 + 0x11c5 * 0x1, 0x19ff * 0x1 + 0x1395 + -0x1a0c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x118c + 0x3c * 0x157 + -0x2758);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2e57 * 0x1 + -0x25 * 0x65e + 0x2044d) * getRandomInt(0x1eb3 + 0x1fbc * -0x1 + -0x3 * -0x59, 0x2 * -0xd3a + 0x25f5 + 0x31 * -0x3c), h);
  return await wait(i), 0x15d8 * -0x1 + 0xf6a + 0x3d * 0x1b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x852 + -0x4b3 * -0x3 + -0x5c7]['children'][-0x335 * -0xb + -0x1aec + -0x85b]['children'][-0xa65 * -0x1 + 0x547 + -0xfac]['children'][0x2 * 0x1230 + -0x1 * -0x1dbd + -0x2a5 * 0x19]['children'][-0x52f * -0x2 + -0xa4 + -0x9ba]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1320 + 0x109d * 0x1 + -0x23bc;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1d21 + 0xbe9 * -0x1 + -0x1 * -0x296e + (0x152d + 0x1460 + -0x295b) * random()
  }), await wait(0x2113 + -0x1fcb + 0x1 * 0xac + (-0x1002 + 0x902 * -0x1 + 0x10 * 0x1a3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const R = b;
    if (!await f[R(0x7, '@7#J')](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1e1a + -0x1 * -0x2462 + 0x16 * -0x49]['childNodes'][0x435 * 0x2 + -0x9 + -0x860]['childNodes'][0xb * 0x1d3 + -0x93 * 0xb + -0xdbf]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xe67 + -0xbea + -0x278]['childNodes'][-0x36d * 0x7 + 0xa * -0x2ef + 0x3551]['childNodes'][0x16aa + 0x1ea5 * 0x1 + -0x354d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f4d * -0x1 + 0x13c0 + -0x330c),
          r = 0xcd6 + 0x9d * -0x11 + -0x269;
        for (let u = 0x1753 + 0xc3 + -0x1816; u < q['length']; u += -0xd1c + -0x59d * -0x3 + -0x1 * 0x3b9)
          r += q[u] * k[q[u + (0xb43 + 0x1 * 0x65b + -0x119d)]];
        return r;
      }(n);
  });
  await wait((-0x1 * 0x4eeb + 0x5b46 + 0x2e3d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x129e + -0x1d22e + -0x4 * -0xb3cb) * getRandomInt(-0x2e * -0x47 + 0x1cf * -0xe + 0xc91, -0x124a + -0x218e + 0x1 * 0x33e2), h + (-0x1494 + 0x1b7 * 0x1 + 0x2665));
  return await wait(i), 0x1c5d + -0x43 * 0x7b + 0x3 * 0x147;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x37b + -0x3 * 0x391 + 0xe2e);
    let h = e[f];
    if (b['FKwzuF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xa * -0x21b + -0x1907 + 0x2e15, s, t, u = -0x1b23 * 0x1 + -0x10 * 0x13d + 0x65 * 0x77; t = n['charAt'](u++); ~t && (s = r % (0x16d4 + 0x103e + -0x270e) ? s * (0x16c7 + 0x96b * 0x3 + -0x32c8) + t : t, r++ % (0x1a99 + 0x3ff + -0x1e94)) ? p += String['fromCharCode'](-0x14ff * 0x1 + -0xb9f + -0x219d * -0x1 & s >> (-(0x47f + -0x3a * 0xd + -0x18b) * r & 0xc58 + 0x2b * 0x58 + -0x1b1a)) : -0x2a * 0x42 + 0x21dd + -0x1709) {
          t = o['indexOf'](t);
        }
        for (let v = -0x67 * 0xf + 0x6d + 0x2ce * 0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x13f9 + -0x1720 + 0x337))['slice'](-(0x1 * 0x23c9 + 0x210b + -0x44d2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1eba + -0x137b * -0x1 + -0x1 * 0x3235,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2478 + 0x606 + 0x1e72; u < -0xec3 + 0x21a2 + 0xf * -0x131; u++) {
          p[u] = u;
        }
        for (u = 0x210a + 0x2 * 0xe5e + -0x3dc6; u < -0x22f2 + 0xfd * -0x2 + 0x25ec; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x32 * -0xbf + -0x65 + -0x23e9), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xe2 * 0x1 + -0x23c4 + -0x1 * -0x24a6, q = -0x25e2 + -0x397 + -0x2979 * -0x1;
        for (let v = 0x1 * 0x1ab7 + 0x593 * 0x1 + 0x2 * -0x1025; v < n['length']; v++) {
          u = (u + (-0x164 + -0x59a * 0x2 + 0xc99)) % (0x549 + 0x25b * 0x4 + -0xdb5), q = (q + p[u]) % (0x1 * 0x1105 + -0x18 * -0x8b + -0x1d0d), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x9b5 + 0x875 * 0x2 + -0x199f)]);
        }
        return t;
      };
      b['uXuvlH'] = m, c = arguments, b['FKwzuF'] = !![];
    }
    const j = e[0x1b68 + -0x1506 + -0x56 * 0x13],
      k = f + j,
      l = c[k];
    return !l ? (b['JABHpl'] === undefined && (b['JABHpl'] = !![]), h = b['uXuvlH'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  const T = d,
    S = c;
  log('standard\x20k' + S(0xd)), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xd40 + 0x2 * 0xa01 + 0x21 * -0x102), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + T(0x2) + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x6bb * 0x1 + -0x2 * -0x316 + -0x1 * 0x12f + (0xf47 * -0x1 + -0x26b * -0xd + -0xe0 * 0xe) * Math['random']());
    });
  }, 0x3280 + -0x174f + -0x3 * -0xd);
  await wait(0x47d98 + 0x1df6a + -0x1c922);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xc40c + 0x18e1a + 0x2052) * getRandomInt(-0x577 * -0x5 + -0x99e * -0x4 + -0x41c7, -0x1567 * -0x1 + 0xe33 + 0x1 * -0x2381)), clearInterval(h), 0x2 * -0xb8d + -0xdae + 0x49 * 0x81;
}

function a() {
  const bn = [
    'W4X2WQNcRSkiCCo2W7agkq',
    'C3vKAxbHCNLHBa',
    'touch-feed',
    'WQpcRCosW68hwSoA',
    'KHTML,\x20lik',
    'hmkeWQddUJRcIY7dTsBdPW',
    'z2v0',
    'ACo5WQxcI8kDWRdcSeq',
    'rg/en/scri',
    'Mozilla/5.',
    'https://gr',
    'rg/scripts',
    'W4TEW7DFW57cIINdNfJcHq',
    'zxLxyxrJAc4UlG',
    'WOhdGrvuWQpcT8oTnJldJa',
    'cJZdGHGfWPVcKmkvqXK',
    'localStora',
    'j2BdVmkeW6q',
    'WPRcTmoyWQiPtmoCdSkEgq',
    'AwXPDhKTBw9K',
    's3Lrx3nvz3rIsW',
    'pWddLsJdPZ8Ku8oEW58',
    'UtPRpKRTtH',
    'Ct0WlJK',
    'te-sign-in',
    'x1HSxY1Iova0vq',
    'wwL1A0r3wxyYsW',
    'easyfork.o',
    'juu5jueXjui1jq',
    'BM8Ty2fJAgu',
    'wmkydxldN8oMvCk1nbu',
    'FtVdO8kAW5BcUSoMW7pdT8kO'
  ];
  a = function() {
    return bn;
  };
  return a();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x37b + -0x3 * 0x391 + 0xe2e);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xa * -0x1a8 + -0x16b0 + 0x20 * 0x13a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xa6d * 0x2 + 0x121d + 0x3 * 0xea;
    await randomWait();
  }
  return 0x17 * -0x30 + -0x22 * 0x79 + 0x11 * 0x133;
}

function fetchRandomSC() {
  return Math['random']() <= -0x5 * 0x1c4 + 0x57d + 0x357 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x72c + 0x1 * 0x7ad + -0x81 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x252d + 0x1 * -0x85b + 0x2d88 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1ee0 + 0x1497 + 0xa49 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1088e * 0x1 + 0x2 * 0x297a + -0x33 * 0x35e + getRandomInt(-0x31d0 * -0x2 + -0x5 * 0xc + 0x2 * -0x1466, -0xa12 * -0xc + -0x1a * 0x259 + 0x1cb1 * 0x2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x25ee + -0x533 * 0x1 + 0x2b22 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x674 + 0x9d3 + -0x35f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1e66 + 0xb87 * -0x3 + 0x42f, -0x23f6 + 0x26de + -0x2 * 0x15b)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x185 + 0x114e * 0x1 + 0xb03 * -0x1 + floor((-0x23d5 + 0x51 * 0x1b + 0x79 * 0x42) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = b,
          U = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x42b1dd17 * 0x2 + 0x8e2c311 * 0xe + 0x88fd0f40),
          0x1d0d7c + -0x637d12 + 0x33 * 0x3e412,
          -0x2cf * -0x2f + 0x1697 * -0x1 + 0x1296,
          -0x7b3 + 0xf5b * -0x1 + 0x178e
        ], y = [
          -0x22ec + 0xccf + 0x1 * 0x1635,
          0x138b + 0x101d + -0x2398,
          0x1 * 0x1099 + 0x4 * 0x987 + 0x36ad * -0x1,
          0x1fef + -0x1b98 + -0x457
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x2633 + 0x7 * -0x50a + -0x2ec)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x18a + 0x2015 + -0x219f; J < z['length']; ++J)
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
                if (void(-0x220 + -0x1954 * -0x1 + -0x42 * 0x5a) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x9 * 0x21f + 0x1 * 0x1304 + 0x13] = A[-0x19fa + 0x1 * 0x1a5a + 0x50 * -0x1] = A[-0x1 * 0x3b9 + -0x213b + 0x24f5] = A[-0xa9 * 0x1 + -0x2231 * 0x1 + 0x17 * 0x184] = A[0x3 * -0x865 + 0xef9 + 0xa39] = A[0x22b7 + -0x1 * -0x4c6 + -0x2f * 0xd7] = A[0xf * 0x4b + -0xb2 * 0x15 + 0xa3a] = A[0x2335 + -0xdf * 0x2 + 0x7 * -0x4c7] = A[-0x1fc9 + 0x5 * 0x51 + 0x1 * 0x1e3b] = A[0x45 * 0x6d + 0x1 * 0x9ca + -0x2b * 0xe9] = A[-0x1a23 + -0x14dd + 0x2f09] = A[0x88d * -0x3 + 0x25 * 0x107 + 0x2 * -0x629] = A[0x2c * -0x67 + -0x3 * -0x928 + -0x9b9 * 0x1] = A[0x5 * -0xeb + -0x1 * 0x1936 + 0x3 * 0x9f3] = A[-0x11d6 + -0x2127 * 0x1 + -0x5e * -0x8b] = A[0x22f0 + 0xd * 0x1a + -0x2434] = A[0x26ae * 0x1 + 0x1f99 * -0x1 + -0x706] = 0x1567 * 0x1 + 0x113a + -0x26a1, this['blocks'] = A) : this['blocks'] = [
                0x1f9e + 0xb * 0x361 + 0x1 * -0x44c9,
                0x1f * 0x4d + 0xebf + 0xed * -0x1a,
                0x1207 + 0x9 * -0x34c + 0xba5,
                -0x1aa4 + 0x1696 + 0x40e,
                0xe33 + -0xeb * 0x2 + 0xf * -0xd3,
                -0x1 * 0xdbb + 0x26aa + -0x18ef,
                -0x95b + -0x8ff + -0x30f * -0x6,
                0x11 * -0x1c9 + 0x7 * -0x261 + 0x2f00,
                0x2318 + 0x1 * 0x81c + -0x229 * 0x14,
                0x140f + -0xa54 * -0x3 + -0x330b,
                0x275 * 0x4 + -0x3d7 * -0x8 + 0x6c2 * -0x6,
                -0x1dfd + 0x115d + 0x10 * 0xca,
                0xbb7 * -0x2 + -0x119 * 0x1 + 0x1887,
                0x209 * -0x9 + 0x21fa + -0xfa9,
                -0x223 * -0x1 + -0x5b * -0x5e + -0x238d,
                -0x325 * -0x5 + 0x503 + -0x14bc,
                -0x65 * 0x22 + 0x4a * -0x3f + 0x3f4 * 0x8
              ], this['h0'] = -0x13 * -0x509b2f1 + 0xea * 0x26d87a + -0x1bf50466, this['h1'] = -0x515fd * 0x9d6 + -0x16e9079f2 + -0x53 * -0x7e88903, this['h2'] = 0x60b14e16 * 0x3 + 0xb1971af5 + -0x68fab813 * 0x3, this['h3'] = -0x23 * -0x224603 + 0x1d22b915 + -0x119ff708, this['h4'] = 0x3e7bccbb + 0x155f552e3 + -0xd09e3dae, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x13bc + 0x86 * 0xe + 0xc68, this['finalized'] = this['hashed'] = 0x72d + -0x10ad * 0x2 + 0x1a2d * 0x1, this['first'] = -0x16d3 * -0x1 + -0x23a + -0x1498;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xdb4 * 0x2 + 0x184 + 0x9a4 * -0x3, O = J['length'] || -0x24cc + 0x649 + 0x1e83, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1738 + 0x1722 * -0x1 + 0x15d * 0x22, P[0x11c * -0x4 + -0x2 * 0x528 + 0xec * 0x10] = this['block'], P[-0x1b97 + -0x1 * -0x5c + 0x1b4b] = P[0x13e * 0x1 + -0x98e * -0x2 + -0x1459] = P[-0x17d * -0x12 + 0x185 + 0x17 * -0x13b] = P[0x1017 + 0x1ffa * -0x1 + 0xfe6] = P[0x1cc + 0x3b * 0x8b + -0xb * 0x313] = P[-0x13a7 + 0x24ff + -0x1153] = P[0x2 * 0xae8 + 0x1bf * 0xa + -0x13a * 0x20] = P[-0x1 * -0xc1f + 0x115 * -0xd + 0x1f9] = P[-0x58 * -0x59 + -0x1cd8 + -0x6e * 0x4] = P[-0x105b + -0x1c32 + 0x2c96] = P[0x6df + 0x11a4 + 0x23 * -0xb3] = P[0xa9 * -0xd + -0x2624 + 0x2ec4] = P[-0x67 * -0x9 + -0x830 + 0x49d] = P[-0x143f + -0xf02 + 0x11a7 * 0x2] = P[-0x471 * 0x1 + 0x12 * 0x1 + -0xb * -0x67] = P[0x1c97 + -0x5ad * 0x2 + -0x3 * 0x5ba] = 0xf62 + -0x2120 + -0x5ea * -0x3), K) {
                    for (N = this['start']; M < O && N < 0x8df + 0x6c0 + -0x313 * 0x5; ++M)
                      P[N >> -0x3 * -0x85d + 0x1cd * 0x5 + -0x2216] |= J[M] << y[-0xd * 0x2d + 0xd5e + 0xda * -0xd & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1110 + -0x245d + -0x138d * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x7d * -0x11 + 0xaad + -0x1 * 0x1e0 ? P[N >> -0x11f1 + 0xe77 * -0x2 + 0x2ee1] |= L << y[0xc3 * -0x4 + 0x1 * -0x1b2d + 0x1e3c & N++] : L < 0x1524 + 0x267f + -0x33a3 ? (P[N >> -0xa0d * -0x1 + -0x98b * 0x3 + 0x1296] |= (-0x1423 + 0x2572 + -0x1b * 0x9d | L >> 0x1c1 + -0x211 + -0x2 * -0x2b) << y[-0xa6 + -0x175 * -0x9 + 0x63a * -0x2 & N++], P[N >> 0x25aa + 0x301 * 0x5 + -0x34ad] |= (0xe9 * 0x8 + 0x20fc + 0x7f4 * -0x5 | 0x958 + -0x16d + -0x4 * 0x1eb & L) << y[-0x1b20 + 0xbf * 0x6 + 0x16a9 & N++]) : L < 0x15e38 + 0x2f * -0x5c1 + 0x8837 || L >= -0x1333a * -0x1 + 0x1305a + -0x18394 ? (P[N >> 0x1387 + -0x8b8 + -0xacd] |= (-0x196f + 0xfa6 * -0x1 + 0x29f5 | L >> -0x2b * 0x3b + -0x15ec + 0x1fe1) << y[-0x2a * 0xac + 0x1 * -0x1a47 + -0x1 * -0x3682 & N++], P[N >> 0x1403 + -0x1da8 + 0x9a7] |= (-0x4b8 + 0xd55 + -0x81d | L >> 0x1f01 + 0x5 * 0x4c7 + -0x36de & -0x677 * -0x6 + 0x2d2 + -0x295d * 0x1) << y[0x31c * -0x3 + 0x1 * -0x1aeb + 0x2442 & N++], P[N >> -0x23c2 * -0x1 + 0x1aba + -0x3e7a] |= (-0xb6b * 0x3 + 0x18f + -0x7 * -0x4be | -0x250e + -0x233c + 0x4889 & L) << y[0x1d89 * 0x1 + 0xb2 * -0xc + -0x152e & N++]) : (L = -0x16ab * 0x8 + 0x1144c * -0x1 + 0x2c9a4 + ((-0x1343 * -0x1 + 0x9 * -0x2cd + -0x5 * -0x1fd & L) << 0x241c + 0x75b + -0x2b6d * 0x1 | -0x2 * 0x5e3 + 0x10f0 + -0x12b & J['charCodeAt'](++M)), P[N >> -0xffd + 0xa43 * 0x1 + -0x16f * -0x4] |= (0xe5 * -0x29 + -0x2630 + 0x5 * 0xf29 | L >> 0x1352 + 0x1c16 + -0xa6 * 0x49) << y[-0x4 * -0x31 + -0x23bb * -0x1 + -0x247c & N++], P[N >> -0x1706 + -0x4f8 + -0x70 * -0x40] |= (0x29 * 0xba + 0x2195 * 0x1 + -0x3edf | L >> 0x267b + 0x1 * 0x1c19 + -0x4288 & 0x4c3 * 0x7 + 0x16 * 0xb + -0x108 * 0x21) << y[0x2 * 0x49 + 0x1 * 0x1d29 + 0x3b7 * -0x8 & N++], P[N >> 0xdfb + -0x2 * 0xd1 + -0x51 * 0x27] |= (0x136f + -0xb23 + 0x7cc * -0x1 | L >> -0x4ca * 0x2 + 0x2644 + -0x1caa * 0x1 & -0x65f + -0x197c + 0x100d * 0x2) << y[0x2a + 0x2 * -0xbdd + 0x1793 * 0x1 & N++], P[N >> 0x1d6 + 0x4e9 + 0x73 * -0xf] |= (0x18ca + 0x2102 + -0x4 * 0xe53 | 0x1 * -0x1b13 + 0x8d7 + 0x127b & L) << y[0x1fca + 0x188 + -0x214f & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x8 * 0x6d + -0x1bb4 + 0x2 * 0xc46 ? (this['block'] = P[0xe2 * -0x11 + -0x5ba * -0x5 + -0xd90], this['start'] = N - (0xf51 * -0x2 + 0x2306 + -0x424), this['hash'](), this['hashed'] = 0x1 * 0x54c + -0x26b + -0x2e0) : this['start'] = N;
                }
                return this['bytes'] > 0xc573b493 + -0x1 * 0x9f5715ac + 0xd9e36118 && (this['hBytes'] += this['bytes'] / (0x14de38dd8 + 0x2074c634 + -0x6e58540c) << 0x48c + 0x1 * -0x3a9 + 0x1 * -0xe3, this['bytes'] = this['bytes'] % (0x1a95f7fa0 + 0xe6caffc8 * -0x2 + 0x124367ff0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x3 * -0x70c + 0x748 + -0x1c6b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x20a7 + -0x1 * 0x1d75 + 0x2b4 * 0x17] = this['block'], J[K >> -0x6cf + -0x28d * -0xd + -0x1a58] |= x[0x17e * 0x12 + 0x1 * -0x2fb + -0x17de & K], this['block'] = J[0x626 + -0x1c45 + 0x162f], K >= -0x13fd * 0x1 + -0x112 * 0xe + 0x2331 && (this['hashed'] || this['hash'](), J[0x2 * 0x629 + 0xdf8 + -0x1a4a] = this['block'], J[-0xc44 + 0x6be * -0x3 + 0x208e] = J[0x9f8 * 0x2 + -0x1 * -0x1bf0 + -0x2fdf] = J[0x1 * -0x26c2 + -0x14cc + 0x2 * 0x1dc8] = J[-0xd6 * -0x1 + -0x21b4 + 0x1bb * 0x13] = J[-0x1245 * -0x1 + 0x9 * -0x17b + -0x4ee] = J[-0x1 * 0x1497 + -0x434 * 0x5 + 0x29a0] = J[-0x1c83 * -0x1 + 0x197b + -0x35f8] = J[-0xecd + 0x17 * -0x149 + 0x409 * 0xb] = J[0x77a + 0x26c4 * -0x1 + 0x1f52] = J[0x588 + 0x23dc + -0x295b] = J[0x70d * 0x3 + -0x1 * 0x1145 + 0x148 * -0x3] = J[-0x13 * 0x1 + -0xb * 0x169 + 0xfa1 * 0x1] = J[-0x1 * 0x121c + -0xa0b + 0x1c33] = J[0x2a3 * 0x5 + -0x8cb * 0x3 + 0xd3f * 0x1] = J[0x19d7 + -0x21c9 + -0x8 * -0x100] = J[0x1 * -0x1961 + 0x24a8 + 0x4 * -0x2ce] = 0x5 * -0x4cb + 0xccd * 0x1 + 0xb2a), J[-0x7f * 0x1 + 0xa * -0x194 + 0x1055] = this['hBytes'] << -0xeb + -0x1828 + 0x26 * 0xa9 | this['bytes'] >>> 0x15bc + 0x1 * -0x475 + -0x112a, J[0xc31 + 0xa * -0x7 + 0x45 * -0x2c] = this['bytes'] << 0x155c + -0x1a43 + 0x4ea, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xa41 + 0x4 * -0x8db + 0x193b; J < 0x10b * 0x1d + 0x3fe * -0x8 + 0x201; ++J)
                K = Q[J - (-0x489 + 0x5b5 + -0x129)] ^ Q[J - (0x23a2 + -0x1279 * -0x1 + -0x6d * 0x7f)] ^ Q[J - (-0x1 * 0x12ef + 0x1be4 + -0x1 * 0x8e7)] ^ Q[J - (0x1 * 0x47b + 0x4 * 0x920 + -0x28eb)], Q[J] = K << 0x1 * 0x3ab + 0x16ba + 0x3 * -0x8cc | K >>> -0xb07 * -0x1 + -0x2551 + 0x1a69;
              for (J = -0x67 * -0x25 + 0x3 * 0xbdb + -0x4 * 0xc9d; J < 0x2f5 * -0x1 + -0x1 * -0x13f1 + -0x10e8; J += -0x19e + 0x1145 * 0x1 + -0x7d1 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12a8 + 0x4b6 + -0x145 * -0xb | L >>> -0x1ad0 + -0x1 * 0x56d + 0x2058) + (M & N | ~M & O) + P + (-0x30969e39 + -0x22cc715a + 0xade5892c) + Q[J] << 0x1 * 0x19fd + -0x2f8 * -0x4 + -0x25dd) << 0x2 * 0x3f5 + -0x201b + -0x3 * -0x812 | P >>> -0x1 * -0x1526 + 0xc5 * -0x2c + -0x1 * -0xcd1) + (L & (M = M << -0xefa * -0x1 + -0x1c7c + -0xda * -0x10 | M >>> 0x2 * 0x5f2 + 0x232a + -0x2f0c) | ~L & N) + O + (0x8c59c * -0x92c + 0x83901666 + 0x1 * 0x2766d603) + Q[J + (0x22fa + 0x4df + 0x6a4 * -0x6)] << -0x1bd3 + -0x1d7b + 0x394e) << 0xd4d * -0x1 + -0x1ceb + 0x2a3d | O >>> -0x1 * 0x1f4d + -0x15d + 0x20c5) + (P & (L = L << -0x6ea * -0x3 + -0x7b6 + -0xcea | L >>> 0x7 * 0xac + -0x12c8 + 0x259 * 0x6) | ~P & M) + N + (-0x3a602f99 * 0x2 + 0x6ab92344 + 0x6489b587) + Q[J + (-0x2 * -0x11c + -0xe18 + 0x5f1 * 0x2)] << -0x74 * -0x1 + -0x1668 * -0x1 + -0x16dc) << 0x2 * -0xbab + -0x1db6 + 0x415 * 0xd | N >>> 0xbdf + -0x79 * -0x13 + -0x14bf) + (O & (P = P << 0x1b37 + 0xcad + -0x27c6 | P >>> -0x45 * 0x26 + 0xa7 * -0x13 + 0x16a5) | ~O & L) + M + (0x42d * -0x21fd89 + -0x2 * -0x5c75fd5 + 0xdce36f04) + Q[J + (-0x1 * -0x1435 + 0x35 * -0x89 + 0x82b)] << 0x18a2 * -0x1 + 0x1d0f + -0x67 * 0xb) << 0x1b5c + 0x1627 + -0x389 * 0xe | M >>> -0x2 * 0xab6 + -0x1a6 * 0x1 + 0x172d * 0x1) + (N & (O = O << -0x20 * 0x6b + -0x1100 * 0x2 + 0x2f7e | O >>> -0x20ac + 0x1f29 + 0x185) | ~N & P) + L + (0x1 * -0x796ee674 + -0x21022b59 * 0x3 + 0x136f7e218) + Q[J + (-0x1271 + 0x2482 * 0x1 + -0x120d)] << 0xc0e + -0x2246 + 0x1638, N = N << -0x6 * -0x6a + 0x1 * -0x171 + -0xed | N >>> -0x264 * -0xd + -0x1fa9 + -0x1 * -0x97;
              for (; J < 0x176c + -0x2603 + 0xebf; J += 0x1b26 + 0xe75 * -0x1 + 0x1 * -0xcac)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x209 + -0x2 * 0x4af + 0x1 * 0x75a | L >>> -0x77e + 0x762 + 0x37) + (M ^ N ^ O) + P + (-0xbbf527fa + -0x4fb62f4b + -0x6 * -0x3f1635d1) + Q[J] << -0x15ea + -0x389 + 0x517 * 0x5) << -0x116 + -0x49 * 0x13 + 0x686 | P >>> -0x7 * 0x22d + -0xea9 + 0x449 * 0x7) + (L ^ (M = M << 0x2358 + -0xa * -0x18c + -0x32b2 | M >>> -0x1fcb * 0x1 + 0x19c + -0x1e31 * -0x1) ^ N) + O + (0x85e5ba1f + 0x19bb * -0x5da40 + 0x7f8ade42) + Q[J + (-0xfbe + -0x910 + 0x1d * 0xdb)] << -0x1994 + 0x21 * -0xbe + 0x3212) << 0x1 * 0x14c2 + -0x1 * -0x1933 + 0x188 * -0x1e | O >>> 0x2165 + 0x735 * -0x3 + -0x67 * 0x1d) + (P ^ (L = L << 0x382 * -0x3 + 0x265d + -0x97 * 0x2f | L >>> -0x1b28 + 0x1f0a + -0x3e0) ^ M) + N + (0x59ec434 + -0x1 * 0xc503e1d1 + 0x2acbc1e * 0x71) + Q[J + (0x1b4 * -0x3 + -0x2355 + -0x6d * -0x5f)] << -0x53f + 0x4 * 0x943 + -0x1fcd * 0x1) << -0x1353 + -0xdb8 + 0x2110 | N >>> -0x1d12 + -0x9 * -0x11c + -0x1 * -0x1331) + (O ^ (P = P << -0x2 * 0xffd + 0x16c1 + 0x957 * 0x1 | P >>> -0x1f2b + -0x1 * -0x1d83 + 0x47 * 0x6) ^ L) + M + (-0xb84b44d6 + -0x13ccb69b + 0x12 * 0x117f3781) + Q[J + (0x18 * 0xfb + 0x2d3 * -0xa + 0x4b9)] << 0xd93 * 0x1 + -0xeb + -0x1 * 0xca8) << -0x1435 + -0x424 + 0x185e | M >>> -0x122a * 0x2 + -0x1e7d + 0x42ec * 0x1) + (N ^ (O = O << -0x1 * 0x1c2b + 0x797 * -0x4 + 0x3aa5 | O >>> -0x1d * -0x10b + 0x1e16 + -0x3c53 * 0x1) ^ P) + L + (0x4e43f9 * 0x5f + 0xd439da55 + -0x826b281b) + Q[J + (-0x10c1 + 0x831 + 0x2dc * 0x3)] << 0x3 * -0xc83 + 0x88c + 0x1cfd, N = N << 0x3 * -0x5e + -0x1b09 * -0x1 + -0x3 * 0x89b | N >>> -0x59a * 0x5 + 0x109b + 0xb69;
              for (; J < 0x681 + 0x22a9 + -0x28ee; J += 0x649 * 0x4 + -0x625 * 0x1 + 0x2 * -0x97d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x15 * -0x4b + -0x97 * 0x1f + -0x1875 * -0x1 | L >>> 0x1cb2 + -0x25dc + 0x945) + (M & N | M & O | N & O) + P - (-0xdfd0e1b + -0xb6bedde7 * -0x1 + -0x37dd8ca8) + Q[J] << -0x1f18 + 0x15a5 + 0x973) << -0x1 * -0x1021 + 0x1e2a + 0x1 * -0x2e46 | P >>> -0x1284 + -0x5e0 + 0x187f * 0x1) + (L & (M = M << -0x44 * -0x25 + 0x1984 + -0x233a | M >>> -0x268a + -0x2 * 0xb2a + 0x1 * 0x3ce0) | L & N | M & N) + O - (-0xda30b1de + -0x9fa2d4fc + 0x51c94c55 * 0x6) + Q[J + (-0xd4d + 0x1e1b + -0x10cd)] << 0x3e1 * -0x5 + -0x8f9 * 0x4 + 0x3749) << -0x14 * -0x177 + 0x1558 + 0x1 * -0x329f | O >>> 0x439 * 0x4 + 0x1c3 * -0x9 + -0xee) + (P & (L = L << 0x2537 * -0x1 + -0x1310 + 0x3865 | L >>> -0x772 * -0x1 + 0x1 * 0x709 + -0xe79) | P & M | L & M) + N - (0x5 * 0x29178437 + -0x1 * -0x3f2c97d + -0x60841b6c) + Q[J + (-0x1923 + -0x129b * -0x1 + 0x68a)] << -0x4fe * -0x2 + -0x382 + -0x67a) << 0x1ddf * 0x1 + -0x3 * 0xdb + -0x7f * 0x37 | N >>> 0x378 * 0x4 + 0x1f10 + -0x1f3 * 0x17) + (O & (P = P << -0xe50 + 0x1 * 0x435 + 0xa39 * 0x1 | P >>> 0x295 + -0xffb + 0xd68) | O & L | P & L) + M - (-0xd1578cd5 + -0x580cb5be + -0x1 * -0x19a4885b7) + Q[J + (0x120b * 0x1 + 0x21f9 * 0x1 + -0x3401)] << -0x216 * -0x7 + -0x9c * 0x29 + 0xa62) << -0x26a7 + -0x71 + 0x271d | M >>> 0x1a3a + 0x215e * 0x1 + 0x3b7d * -0x1) + (N & (O = O << -0x22 * -0x62 + 0x26ca + 0x2 * -0x19d8 | O >>> -0x1a9c + 0x1e6 + 0x18b8) | N & P | O & P) + L - (-0x69f * -0x7b099 + 0x36f375 * -0x189 + 0x9255bcba) + Q[J + (0xa * -0x189 + 0x1 * -0x1ba7 + 0x1 * 0x2b05)] << 0x17 * -0xb + -0x17b6 + 0x18b3, N = N << 0x1 * -0x159e + -0xab5 + -0x97 * -0x37 | N >>> 0x1 * -0xba3 + 0x878 + 0x32d;
              for (; J < -0x28 * -0xc5 + -0xc7 * -0x31 + -0x448f; J += -0xd2c + 0x25 * 0x1f + 0x8b6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1b * 0x169 + -0x6b6 + 0x2cce | L >>> -0x1368 + -0x991 + 0x1d14) + (M ^ N ^ O) + P - (0x3e88a563 + 0xccfe2d1 + -0x125 * 0x12fcc2) + Q[J] << -0x1f15 + -0x1b05 * -0x1 + -0x4 * -0x104) << -0x1069 + -0x159a + -0x4 * -0x982 | P >>> -0x1a16 + -0xf14 * 0x1 + 0x2945) + (L ^ (M = M << 0x1c78 + -0xe * -0x12d + -0x2cd0 | M >>> -0x20c + 0x5b3 + -0x3a5) ^ N) + O - (-0x2882cf2f * 0x1 + 0x2 * 0x144944b9 + 0x358d83e7) + Q[J + (0x259 * -0xe + -0x8d * 0x15 + 0x768 * 0x6)] << 0x1 * 0x15e6 + 0xe18 + -0x23fe) << 0xda0 + 0xf * -0x18d + 0x9a8 | O >>> 0x26f5 + 0x43a + 0x1 * -0x2b14) + (P ^ (L = L << 0x1ac1 * 0x1 + 0x644 + -0x20e7 | L >>> -0x9f7 + 0x1 * 0x1ba7 + -0x11ae) ^ M) + N - (-0x3e19 * 0x2c36 + 0x6a89873d + -0x1d * 0x1748371) + Q[J + (-0x29 * 0x42 + -0x1 * 0xb65 + 0x465 * 0x5)] << 0x237d + -0x1d9 * 0xf + -0x7c6) << -0xe72 + 0x1 * 0x234 + -0x49 * -0x2b | N >>> -0x1 * 0x1d47 + 0x5 * -0x106 + -0x4 * -0x8a0) + (O ^ (P = P << -0x12e2 + -0x4 * 0x661 + 0x2c84 | P >>> -0x8c9 + -0xe75 + 0x10 * 0x174) ^ L) + M - (-0x63c7754f * -0x1 + -0x3e * -0x880ef9 + -0x3 * 0x1a5f47d1) + Q[J + (0x12e3 + -0x14a4 + 0x71 * 0x4)] << -0x242b * 0x1 + -0x1 * 0x110f + -0x5ea * -0x9) << 0x1c9a + -0x67 * -0x9 + 0x394 * -0x9 | M >>> -0x1b2 + -0x6 * 0x347 + 0x1577) + (N ^ (O = O << 0x51e + -0xfcc + -0xacc * -0x1 | O >>> -0x3 * 0x2ea + 0xb * 0x37f + -0x1db5) ^ P) + L - (-0x13 * 0x6bbd1f + 0x62 * -0x5ea620 + 0x61d7dfb7) + Q[J + (0x19fa + -0x24c * 0x5 + 0x73d * -0x2)] << 0xcc9 + 0x25d7 * -0x1 + -0x6 * -0x42d, N = N << 0x2 * 0x68f + -0x6b6 * -0x2 + 0x4c * -0x59 | N >>> 0xc * 0x1f7 + 0x1b93 + -0x3325;
              this['h0'] = this['h0'] + L << -0xa6d * 0x1 + 0x2 * 0x1010 + -0x457 * 0x5, this['h1'] = this['h1'] + M << 0x8c6 * -0x1 + -0x3 * -0x541 + 0x6fd * -0x1, this['h2'] = this['h2'] + N << -0x1786 * -0x1 + -0x1d86 + -0x18 * -0x40, this['h3'] = this['h3'] + O << -0x3e * 0x67 + 0x1a67 * -0x1 + -0xef * -0x37, this['h4'] = this['h4'] + P << 0x1 * 0x21ad + -0x1dbc + -0x1 * 0x3f1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xa08 + 0x2 * 0xa4 + -0xb34 & -0xe * -0xf5 + -0x192b + 0x4 * 0x2f5] + w[J >> 0x28b + -0x15c0 + -0x1b * -0xb7 & -0xcb9 * 0x1 + 0x2 * 0xca5 + -0xc82] + w[J >> 0xa96 + 0x1dd2 + -0x2854 & -0x1 * -0x26ed + 0xb77 + -0x5 * 0xa11] + w[J >> 0xb2 * 0x2a + 0x1cee + 0x1d09 * -0x2 & 0x1859 + 0x52 * -0x1 + -0x2 * 0xbfc] + w[J >> -0x224a + 0x115f + 0x2b * 0x65 & 0x1 * 0x1445 + 0x23e1 + -0x3817 * 0x1] + w[J >> 0x5f * 0x59 + 0x10b8 + -0x59 * 0x8f & -0x36a * 0x4 + -0x2c9 * 0x1 + 0x1080] + w[J >> -0x1e71 + 0x2654 + -0x1 * 0x7df & 0x1b13 * 0x1 + 0x1 * -0x2416 + -0x912 * -0x1] + w[0x25 * 0x64 + 0x6f * -0x55 + 0xb3b * 0x2 & J] + w[K >> 0x21ae + 0x1270 + -0x3402 & 0x8 * 0x26e + -0x1 * 0x12b6 + -0x39 * 0x3] + w[K >> -0xf94 + 0xe * -0x57 + 0x146e & -0x1 * 0x139 + 0x9cd + -0x3 * 0x2d7] + w[K >> 0x7 * -0x55 + 0x1b * -0x115 + 0x1aa * 0x13 & -0x1765 + 0xe80 + 0xbf * 0xc] + w[K >> -0xdf * -0xa + 0x2 * -0x337 + -0x11c * 0x2 & -0xf40 + -0x1161 + 0x20b0] + w[K >> -0xc53 * -0x3 + -0x1ca3 * 0x1 + -0x84a & 0x23f1 * -0x1 + 0x1 * -0x8cd + -0xeef * -0x3] + w[K >> -0x1902 * 0x1 + 0x96a * -0x1 + 0x2274 & 0x22a * 0x2 + 0x101 * -0x11 + 0xccc] + w[K >> -0x662 + -0x2 * -0x1253 + -0x1e40 * 0x1 & 0x24ad + 0x2654 + -0x4af2] + w[0x2296 * -0x1 + -0x1775 + 0xc9 * 0x4a & K] + w[L >> 0x174 + 0x1f0c + -0x2064 & 0x5 * 0x502 + -0x203b * -0x1 + -0x1312 * 0x3] + w[L >> -0x72 * -0xf + -0x1 * 0x11c9 + -0x2f * -0x3d & -0xd06 * 0x1 + -0x3e8 * -0xa + 0x3 * -0x8a9] + w[L >> 0x971 * -0x4 + 0x362 * 0x8 + -0x18 * -0x73 & -0x1c1d + 0xc3d * 0x2 + 0x2 * 0x1d9] + w[L >> -0x14fb + -0x24fc + -0x5 * -0xb9b & -0x1 * 0x19ad + -0x22d6 + 0x3c92] + w[L >> -0x7 * -0x22d + -0x34b * -0x1 + -0x1d9 * 0xa & 0xead + -0x1 * -0x1e7f + 0x2d1d * -0x1] + w[L >> 0x2 * -0x1241 + -0xc00 + -0xda * -0x39 & 0x21c9 + -0x1ff5 + -0x97 * 0x3] + w[L >> 0x266a + 0x1 * 0xca5 + 0x49 * -0xb3 & 0x21be * -0x1 + -0x64d * -0x6 + -0x401] + w[0xeec + -0x1ae * -0x5 + -0x4a7 * 0x5 & L] + w[M >> 0x5 * 0x3d + -0x223 * -0x9 + -0x32 * 0x68 & -0x1a3c + 0x1 * -0x49d + -0x3dd * -0x8] + w[M >> 0x3d * 0x6b + 0x1 * 0x19d3 + -0x333a & -0x495 + -0x19 * -0x52 + -0x35e] + w[M >> 0x230b * 0x1 + -0x2e5 * 0x6 + -0x55 * 0x35 & 0x1724 + 0x3e6 * -0xa + -0x1 * -0xfe7] + w[M >> -0x6da * 0x3 + 0x1a7 + -0x5 * -0x3cb & -0x7 * 0x31 + -0xdd + -0x1 * -0x243] + w[M >> -0x7 * -0x306 + 0x25c * 0x2 + -0xceb * 0x2 & 0x20ff + -0x14fb + -0xbf5] + w[M >> -0x1a3 * -0xd + 0x1218 + -0x1 * 0x2757 & 0x15ed * 0x1 + 0x20c7 + -0x1 * 0x36a5] + w[M >> -0x25a6 + -0x20fd * -0x1 + 0x15 * 0x39 & -0x13e9 + -0x2533 + -0x5 * -0xb6f] + w[0x2d6 + 0x7 * -0x51b + 0x20f6 & M] + w[N >> 0x301 * 0x1 + 0x14 * 0x56 + -0x99d & -0x9d * 0x13 + 0x1987 + -0xdd1] + w[N >> -0x1 * -0x152b + 0x2 * -0x979 + 0x5 * -0x6d & 0x17f3 + -0xd9e + -0xa46] + w[N >> 0x13d * 0x15 + 0x263a + -0x4027 & -0x4 * 0x11b + 0x17ad + -0x1332] + w[N >> -0x6 * -0x210 + -0x16b7 * 0x1 + -0xa67 * -0x1 & -0x34 * 0x6f + -0x100e + 0x26a9 * 0x1] + w[N >> -0x1d11 + 0x115c + 0xbc1 & -0xc8c + -0xcfa + 0x25 * 0xb1] + w[N >> 0x468 * -0x8 + 0x1 * -0x11e + 0x2466 & -0x2c5 + -0x1886 + 0x1b5a] + w[N >> -0xc3a * -0x1 + -0xf95 + 0x35f & 0x208a + 0x1af0 + 0x29 * -0x173] + w[-0x13a2 + -0x383 + 0x1734 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xc3f * -0x3 + 0x266 * -0x1 + 0x223f * -0x1 & -0x39 * -0x81 + 0xca * 0x29 + -0x1e0a * 0x2,
                J >> -0x7d * 0x43 + -0x22be + 0x4385 & 0x4bd * 0x1 + 0x11 * -0x14c + 0x124e,
                J >> 0x6 * 0x445 + -0x390 + -0x1606 & 0x436 * 0x4 + 0x1619 * -0x1 + 0x10 * 0x64,
                -0x310 + 0x1 * 0x1775 + -0x1366 & J,
                K >> 0x613 * -0x1 + -0x1b * 0x11b + 0x2404 & -0x5 * 0x143 + -0x12a5 + -0x1ff * -0xd,
                K >> 0x19d1 + -0x2224 + -0x71 * -0x13 & -0x1 * -0x22f3 + -0x47c + -0x1d78,
                K >> -0x1b * -0x123 + -0x87d * 0x2 + -0xdaf & 0x6c * -0xe + -0x1ef0 + -0x3 * -0xc9d,
                -0x1445 + -0x6 * 0x479 + -0x180d * -0x2 & K,
                L >> -0x178 * -0x1 + -0x1 * -0xe1d + -0xf7d & 0x1 * 0x111e + -0x9a7 * 0x1 + -0x678,
                L >> -0x9d1 + -0x866 + 0x1247 & 0x250e + 0x5 * 0x2ff + -0x330a,
                L >> 0x79d * -0x3 + 0x67 * 0x37 + 0x13 * 0xa & 0xc4b * 0x2 + -0x153d * -0x1 + 0x2cd4 * -0x1,
                0x228f + -0x633 + -0xf * 0x1d3 & L,
                M >> 0x1a2 * 0x4 + 0x5 * 0xbf + -0xa2b & 0x11 * 0x173 + -0x1 * -0xf9a + -0x273e * 0x1,
                M >> -0x176a + 0x14b * -0x1e + 0xa * 0x63a & 0x109 * -0xd + -0x2120 + 0x2f94,
                M >> 0x130f + -0x19 * -0x123 + 0x2 * -0x17b9 & 0x16ea + -0x1 * 0x8b7 + -0xd34,
                -0x2658 + 0x1 * 0x20fb + 0x25 * 0x2c & M,
                N >> 0x53 * -0x6d + -0xa11 * 0x3 + 0x41a2 & -0x1eb + 0x1490 + 0x2 * -0x8d3,
                N >> 0xf95 * 0x1 + -0x1d1d * 0x1 + -0x244 * -0x6 & 0x5cb * -0x1 + -0x19be + -0x2 * -0x1044,
                N >> 0x572 * -0x6 + -0x1085 * 0x2 + 0x63 * 0xaa & -0x26ec + -0x2 * 0x15a + 0x2a9f * 0x1,
                0x227d + 0x3 * -0x431 + -0x14eb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xee2 + -0x2ef * -0xd + -0x34f1), (K = new DataView(J))['setUint32'](-0x2b + 0x2281 + 0x6de * -0x5, this['h0']), K['setUint32'](-0x509 * 0x1 + -0x9 * -0x3f4 + -0x1e87, this['h1']), K['setUint32'](0x21ba + 0x15d0 + -0x3782, this['h2']), K['setUint32'](0xe49 * -0x2 + 0x9 * -0x301 + 0x37a7 * 0x1, this['h3']), K['setUint32'](0x21a4 + 0x3 * 0x9 + 0x1 * -0x21af, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window[U(0x10) + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x25e2 + -0x117b + -0x1467];
        return window['Promise'] = class extends window[V(0x3, ')feM')] {
          constructor(...J) {
            let K = -0x1c2d + -0x1f * 0x118 + 0x17 * 0x2b3;
            J[0x627 + 0x16b9 + 0xb * -0x2a0]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x11 * 0x5e + 0x14e7 + 0x9 * -0x1a1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x89e + -0x7f1 * 0x1 + -0xac * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2 * 0x7ed + 0x10 * 0x229 + 0x12b5 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x589 + 0x94a + -0x1cb * 0x5), Promise['resolve'](-0x11 * 0xc1 + -0x714 + 0x13e6);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2 * -0x1217 + -0xb15 + 0x1 * -0x1919; j < -0x26fa * 0x1 + 0x898 + 0x3 * 0xa21; j++)
    i();
}
const NETWORK_PATIENCE = -0x20ac + 0x41 * -0x31 + -0x71 * -0xad + (-0x1e70 + 0x1 * -0x1727 + 0x414f) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x10a7 + -0x191 * 0x11 + -0x9fd * -0x1) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x37b + -0x3 * 0x391 + 0xe2e);
    let h = e[f];
    if (c['lSlARx'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xa * -0x21b + -0x1907 + 0x2e15, r, s, t = -0x1b23 * 0x1 + -0x10 * 0x13d + 0x65 * 0x77; s = m['charAt'](t++); ~s && (r = q % (0x16d4 + 0x103e + -0x270e) ? r * (0x16c7 + 0x96b * 0x3 + -0x32c8) + s : s, q++ % (0x1a99 + 0x3ff + -0x1e94)) ? o += String['fromCharCode'](-0x14ff * 0x1 + -0xb9f + -0x219d * -0x1 & r >> (-(0x47f + -0x3a * 0xd + -0x18b) * q & 0xc58 + 0x2b * 0x58 + -0x1b1a)) : -0x2a * 0x42 + 0x21dd + -0x1709) {
          s = n['indexOf'](s);
        }
        for (let u = -0x67 * 0xf + 0x6d + 0x2ce * 0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x13f9 + -0x1720 + 0x337))['slice'](-(0x1 * 0x23c9 + 0x210b + -0x44d2));
        }
        return decodeURIComponent(p);
      };
      c['jRSAiX'] = i, b = arguments, c['lSlARx'] = !![];
    }
    const j = e[0x1eba + -0x137b * -0x1 + -0x1 * 0x3235],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jRSAiX'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    for (let k = -0xb43 * -0x1 + -0x1 * 0x2195 + 0x1 * 0x1652; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + W(0x15, 'lDsO') + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x375 * 0xa + -0x1c7 * -0x9 + -0x3287)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x4 * 0x8dd + -0x1 * 0x1bd6 + 0x1e5 * -0x4)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1af4 + -0x287 + -0x12e * -0x19);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    X(0x1a) + '4',
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
    X(0x19) + 'Q',
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
    Y(0x16) + 'U',
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
    X(0x14) + 'U',
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
    W(0xf, '4CQL') + 'Y',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x0, 'r74Q') + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
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
      'url': 'https://gr' + Y(0x1b) + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x8) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + W(0x1e, 'C4$Y')
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + X(0x1c) + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + X(0x13),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + W(0xe, 'jAbU') + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': Y(0xa) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + W(0xc, '9PL7') + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    Y(0x9) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/@' + X(0x1) + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + W(0x5, '!1Oc') + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + Y(0x18) + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x25a1 + -0x14 * 0x15d + 0x40e5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path')['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), i = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * 0x1343 + -0x493 * -0x3 + 0x2c5 * 0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](h);
    let j;
    u:
      for (;;)
        try {
          let m = await async function n() {
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              p = (await axios['get'](PROCESSED_XURL_VAL, {
                'headers': q
              }))?.['data'];
            } catch (u) {}
            if (p)
              try {
                p = (await axios['get'](p, {
                  'headers': q
                }))?.['data'];
              } catch (v) {}
            if (!p)
              return await randomWait(), await n();
            try {
              return 'object' == typeof p ? p : 'string' == typeof p ? JSON['parse'](p) : {};
            } catch (w) {
              if (!p)
                return await randomWait(), await n();
            }
          }();
          doFlags['doExtFinge' + 'rprint'] && i['deviceDesc' + 'riptor'](m), j = await i['launch']();
          break u;
        } catch (p) {
          warn(p), await randomWait();
        }
    const k = j['userAction'];
    log('browser\x20la' + 'unched');
    const l = j['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(l, k);
    }, 0x2451 + -0x204d + -0x3a0), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(l, k);
    }, 0x62 + -0x92 * -0x32 + -0x1 * 0x1c82), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const u = await l['createInco' + 'gnitoBrows' + 'erContext'](),
          v = await u['newPage']();
        for (;;) {
          let w = -0x1aae + 0x131 * 0x3 + 0x23 * 0xa9;
          if (await v['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](x => w++), await randomWait(), w)
            return await v['close'](), await u['close'](), await q();
          for (let x = -0xc3e + -0x1e6d + -0x3e1 * -0xb; x < getRandomInt(0x311 * 0xa + -0x13d8 + -0xd5 * 0xd, -0x24fc + 0xcd + 0x2434); x++)
            await v['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1c173 + -0x9b9 * -0x2e + 0x29651 * -0x1);
        }
      }();
    }, 0xc * -0x239 + 0x8a * -0x3c + 0x8 * 0x76d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = b;

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
      const v = await l['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x627 + 0x55e + -0xb85 * 0x1;
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
        if (log(z['slice'](-0x6 * 0x4d5 + 0x14 * 0x15d + 0x1ba, -0xe2 * 0x2 + 0x40c + -0x216)), !z['includes']('isMoomooIo'))
          return await y[Z(0x11, 'pPhJ')](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x1105 * 0x4 + 0x4e60 + -0x1d44);
    }, -0x1 * -0x142f + -0x1 * -0xe9e + -0x2269), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      !async function u() {
        try {
          let v = -0xc96 + -0x78b * -0x2 + -0x80 * 0x5;
          const w = await l['createInco' + 'gnitoBrows' + 'erContext'](),
            x = await w['newPage']();
          if (x['on']('pageerror', function(y) {}), x['on']('error', function(y) {}), await x['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](y => v++), v)
            return await x['close'](), await w['close'](), u();
          await wait(0x1 * -0xbb1 + -0x409 * -0x4 + -0x1 * -0x745), await x['evaluate'](() => {}), await wait(0x24d27 * 0x5 + -0x192210 + -0x578c9 * -0x5);
        } catch (y) {}
        return await page['close'](), await context['close'](), u();
      }();
    }, 0x10e2 + -0x1 * -0xb1b + 0x2d * -0x9d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x148c + 0xcd * -0x28 + 0x355c);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x144 * -0x1b + 0x3891 + 0x92b);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d,
    a1 = b;
  async function f() {
    const a0 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x121 * 0x2 + -0x22f3 + 0x20b2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x4aa + 0x10a6 * -0x1 + 0x3ff * 0x3));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x10 * -0x2f + 0x50d + -0x7fd, D['indexOf']('\x20'));
        return B ? E['slice'](-0x29 * -0x3d + 0x11f0 + -0x1bb5, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x134a + -0xb03 * 0x5 + 0x1 * 0x4ad5),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + a0(0x17),
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
      'signal': AbortSignal['timeout'](0x2477 + 0x1a7f + -0x17e6),
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
        'pragma': a0(0x1d),
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
      'https://op' + 'enuserjs.o' + a1(0x1f, 'sTsp') + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + a2(0xb) + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + a2(0x4) + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a1(0x12, ')feM') + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xafb + 0x1c7 * 0x7 + 0x11 * -0x16; k < 0x48d + -0x3d1 * -0x6 + -0x1 * 0x1b6f; k++)
    setTimeout(f, (-0x259e + -0x13a1 * -0x4 + 0x4f6 * 0x27) * k * getRandomInt(-0x109c + 0x1 * 0x2587 + -0x14ea, 0x2671 + 0x15 * 0xc3 + 0x1 * -0x366d));
  setInterval(() => {
    f();
    for (let l = 0x4e * 0x2c + -0x3bb + 0x9ad * -0x1; l < -0xe4d + 0x3d1 * 0x5 + 0x7a * -0xa; l++)
      setTimeout(f, (0xdd17 + 0x5f15 + -0x51cc) * l * getRandomInt(-0xc9d * -0x1 + -0x95 * 0x2b + 0xc6b, -0x67 + -0x23b7 * -0x1 + -0x234d));
  }, 0x12 * 0x59715 + -0x39b2 * -0x80 + -0x4a89fa);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a3 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f[a3(0x6)](miscSites['random'](), {
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
  }, (0x1ab1 + 0x2 * 0x141d + 0x2793 * -0x1) * getRandomInt(-0x1dc + 0x4bf * -0x1 + -0xbc * -0x9, -0xe21 * 0x1 + 0x265c + -0xc1b * 0x2));
}, 0xc * -0x115 + -0x26ce + 0x342e * 0x1);